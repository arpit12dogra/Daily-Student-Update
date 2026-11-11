import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { listPostsQuerySchema } from "@/schemas/post";
import { resolveDateRange } from "@/lib/date-range";
import { apiSuccess, apiError } from "@/lib/api-response";
import { checkPublicApiLimit } from "@/lib/rate-limit";
import { Category, PostStatus, Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const rateCheck = checkPublicApiLimit(req);
    if (!rateCheck.success) {
      return apiError("Too many requests. Please slow down.", 429);
    }

    const url = new URL(req.url);
    const searchParams = Object.fromEntries(url.searchParams.entries());

    const parsed = listPostsQuerySchema.safeParse(searchParams);
    if (!parsed.success) {
      return apiError("Invalid query parameters", 400, parsed.error.format());
    }

    const { q, category, state, range, from, to, page, limit } = parsed.data;

    // Resolve date range and archive status
    const { from: dateFrom, to: dateTo, includeArchived } = resolveDateRange(range, from, to);

    // Build Prisma query filters
    const where: Prisma.PostWhereInput = {
      status: includeArchived
        ? { in: [PostStatus.PUBLISHED, PostStatus.ARCHIVED] }
        : PostStatus.PUBLISHED,
    };

    if (category) {
      where.category = category as Category;
    }

    if (state && state !== "All India") {
      where.OR = [{ state: state }, { state: "All India" }];
    } else if (state === "All India") {
      where.state = "All India";
    }

    if (dateFrom || dateTo) {
      where.publishedAt = {
        ...(dateFrom ? { gte: dateFrom } : {}),
        ...(dateTo ? { lte: dateTo } : {}),
      };
    }

    if (q && q.trim().length > 0) {
      const searchTerm = q.trim();
      where.AND = [
        {
          OR: [
            { title: { contains: searchTerm, mode: "insensitive" } },
            { summary: { contains: searchTerm, mode: "insensitive" } },
            { content: { contains: searchTerm, mode: "insensitive" } },
          ],
        },
      ];
    }

    const skip = (page - 1) * limit;

    const [total, posts] = await Promise.all([
      prisma.post.count({ where }),
      prisma.post.findMany({
        where,
        orderBy: { publishedAt: "desc" },
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          slug: true,
          summary: true,
          category: true,
          state: true,
          status: true,
          lastDate: true,
          officialUrl: true,
          publishedAt: true,
          archivedAt: true,
          createdAt: true,
          meta: true,
          attachments: {
            select: {
              id: true,
              url: true,
              fileType: true,
              fileName: true,
              sizeBytes: true,
            },
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return apiSuccess({
      posts,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("GET /api/posts error:", error);
    return apiError("Failed to fetch posts", 500);
  }
}

