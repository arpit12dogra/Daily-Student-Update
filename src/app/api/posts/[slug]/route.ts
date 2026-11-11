import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiSuccess, apiNotFound, apiError } from "@/lib/api-response";
import { PostStatus } from "@prisma/client";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        attachments: true,
        createdBy: {
          select: {
            name: true,
            role: true,
          },
        },
      },
    });

    if (!post || post.status === PostStatus.DRAFT) {
      return apiNotFound("Post not found");
    }

    // Fetch related updates from the same category
    const relatedPosts = await prisma.post.findMany({
      where: {
        category: post.category,
        id: { not: post.id },
        status: { in: [PostStatus.PUBLISHED, PostStatus.ARCHIVED] },
      },
      orderBy: { publishedAt: "desc" },
      take: 4,
      select: {
        id: true,
        title: true,
        slug: true,
        summary: true,
        category: true,
        state: true,
        publishedAt: true,
        lastDate: true,
      },
    });

    return apiSuccess({
      post,
      relatedPosts,
    });
  } catch (error) {
    console.error("GET /api/posts/[slug] error:", error);
    return apiError("Failed to fetch post details", 500);
  }
}

