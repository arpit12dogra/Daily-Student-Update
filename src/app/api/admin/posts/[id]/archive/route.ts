import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth-guard";
import {
  apiSuccess,
  apiError,
  apiForbidden,
  apiNotFound,
} from "@/lib/api-response";
import { PostStatus } from "@prisma/client";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const admin = await requireAdmin();
    if (!admin) {
      return apiForbidden("Only Admin can archive or unarchive posts");
    }

    const { id } = await params;
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) return apiNotFound("Post not found");

    const newStatus =
      post.status === PostStatus.ARCHIVED ? PostStatus.PUBLISHED : PostStatus.ARCHIVED;

    const updated = await prisma.post.update({
      where: { id },
      data: {
        status: newStatus,
        archivedAt: newStatus === PostStatus.ARCHIVED ? new Date() : null,
      },
    });

    return apiSuccess({
      message: `Post ${newStatus === PostStatus.ARCHIVED ? "archived" : "unarchived"} successfully`,
      post: updated,
    });
  } catch (error) {
    console.error("POST /api/admin/posts/[id]/archive error:", error);
    return apiError("Failed to toggle archive status", 500);
  }
}

