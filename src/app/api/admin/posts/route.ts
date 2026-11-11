import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth-guard";
import { apiSuccess, apiError, apiUnauthorized } from "@/lib/api-response";
import { createPostSchema } from "@/schemas/post";
import { generateUniqueSlug } from "@/lib/slug";
import { sendPushNotificationToAll } from "@/lib/push";
import { checkAdminActionLimit } from "@/lib/rate-limit";
import { Category, PostStatus, Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const user = await requireAuth();
    if (!user) {
      return apiUnauthorized();
    }

    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim();
    const status = searchParams.get("status") as PostStatus | null;
    const category = searchParams.get("category") as Category | null;
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));

    const where: Prisma.PostWhereInput = {};

    if (status && Object.values(PostStatus).includes(status)) {
      where.status = status;
    }

    if (category && Object.values(Category).includes(category)) {
      where.category = category;
    }

    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { summary: { contains: q, mode: "insensitive" } },
      ];
    }

    const skip = (page - 1) * limit;

    const [total, posts] = await Promise.all([
      prisma.post.count({ where }),
      prisma.post.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        include: {
          createdBy: {
            select: { name: true, role: true },
          },
          attachments: {
            select: { id: true, url: true, fileType: true, fileName: true },
          },
        },
      }),
    ]);

    return apiSuccess({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET /api/admin/posts error:", error);
    return apiError("Failed to fetch admin posts", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    const rateCheck = checkAdminActionLimit(req);
    if (!rateCheck.success) {
      return apiError("Rate limit exceeded for creating updates. Please wait a moment.", 429);
    }

    const user = await requireAuth();
    if (!user) {
      return apiUnauthorized();
    }

    const body = await req.json();
    const parsed = createPostSchema.safeParse(body);

    if (!parsed.success) {
      return apiError("Validation failed", 400, parsed.error.format());
    }

    const data = parsed.data;
    const slug = generateUniqueSlug(data.title);

    const isPublishing = data.status === "PUBLISHED";
    const now = new Date();

    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug,
        summary: data.summary,
        content: data.content,
        category: data.category as Category,
        state: data.state,
        status: data.status as PostStatus,
        lastDate: data.lastDate || null,
        officialUrl: data.officialUrl || null,
        meta: data.meta ? (data.meta as Prisma.InputJsonValue) : undefined,
        publishedAt: isPublishing ? now : null,
        createdById: user.id,
        attachments: {
          create: data.attachments.map((att) => ({
            url: att.url,
            publicId: att.publicId,
            fileType: att.fileType,
            fileName: att.fileName || null,
            sizeBytes: att.sizeBytes || null,
          })),
        },
      },
      include: {
        attachments: true,
        createdBy: { select: { name: true, role: true } },
      },
    });

    if (isPublishing && data.notify) {
      sendPushNotificationToAll({
        title: post.title,
        body: post.summary,
        url: `/post/${post.slug}`,
      }).catch((pushErr) => console.error("Error triggering push on publish:", pushErr));
    }

    return apiSuccess(post, 201);
  } catch (error) {
    console.error("POST /api/admin/posts error:", error);
    return apiError("Failed to create post", 500);
  }
}

