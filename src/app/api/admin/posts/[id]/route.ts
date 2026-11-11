import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth-guard";
import {
  apiSuccess,
  apiError,
  apiUnauthorized,
  apiForbidden,
  apiNotFound,
} from "@/lib/api-response";
import { updatePostSchema } from "@/schemas/post";
import { Role, PostStatus, Category, Prisma } from "@prisma/client";
import { sendPushNotificationToAll } from "@/lib/push";
import crypto from "crypto";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth();
    if (!user) return apiUnauthorized();

    const { id } = await params;
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        attachments: true,
        createdBy: { select: { name: true, role: true } },
      },
    });

    if (!post) return apiNotFound("Post not found");

    return apiSuccess(post);
  } catch (error) {
    console.error("GET /api/admin/posts/[id] error:", error);
    return apiError("Failed to fetch post", 500);
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth();
    if (!user) return apiUnauthorized();

    const { id } = await params;
    const existing = await prisma.post.findUnique({ where: { id } });
    if (!existing) return apiNotFound("Post not found");

    const body = await req.json();
    const parsed = updatePostSchema.safeParse(body);
    if (!parsed.success) {
      return apiError("Validation failed", 400, parsed.error.format());
    }

    const data = parsed.data;
    const updateData: Prisma.PostUpdateInput = {};

    if (data.title !== undefined) updateData.title = data.title;
    if (data.summary !== undefined) updateData.summary = data.summary;
    if (data.content !== undefined) updateData.content = data.content;
    if (data.category !== undefined) updateData.category = data.category as Category;
    if (data.state !== undefined) updateData.state = data.state;
    if (data.lastDate !== undefined) updateData.lastDate = data.lastDate;
    if (data.officialUrl !== undefined) updateData.officialUrl = data.officialUrl;
    if (data.meta !== undefined) updateData.meta = data.meta as Prisma.InputJsonValue;

    if (data.status !== undefined) {
      updateData.status = data.status as PostStatus;
      // Set publishedAt if moving from DRAFT to PUBLISHED for the first time
      if (data.status === "PUBLISHED" && !existing.publishedAt) {
        updateData.publishedAt = new Date();
      }
    }

    // Sync attachments if provided
    if (data.attachments !== undefined) {
      await prisma.attachment.deleteMany({ where: { postId: id } });
      if (data.attachments.length > 0) {
        await prisma.attachment.createMany({
          data: data.attachments.map((att) => ({
            postId: id,
            url: att.url,
            publicId: att.publicId,
            fileType: att.fileType,
            fileName: att.fileName || null,
            sizeBytes: att.sizeBytes || null,
          })),
        });
      }
    }

    const updatedPost = await prisma.post.update({
      where: { id },
      data: updateData,
      include: { attachments: true },
    });

    // Notify subscribers if published and requested
    if (data.status === "PUBLISHED" && data.notify) {
      sendPushNotificationToAll({
        title: updatedPost.title,
        body: updatedPost.summary,
        url: `/post/${updatedPost.slug}`,
      }).catch((pushErr) => console.error("Error triggering push on update publish:", pushErr));
    }

    return apiSuccess(updatedPost);
  } catch (error) {
    console.error("PATCH /api/admin/posts/[id] error:", error);
    return apiError("Failed to update post", 500);
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth();
    if (!user) return apiUnauthorized();

    // STRICT ROLE CHECK: Only ADMIN can delete
    if (user.role !== Role.ADMIN) {
      return apiForbidden("Only Admin has permission to delete posts");
    }

    const { id } = await params;
    const existing = await prisma.post.findUnique({
      where: { id },
      include: { attachments: true },
    });

    if (!existing) return apiNotFound("Post not found");

    // Clean up files in Cloudinary if configured
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    if (cloudName && apiKey && apiSecret && existing.attachments.length > 0) {
      for (const att of existing.attachments) {
        if (!att.publicId.startsWith("dev_")) {
          try {
            const timestamp = Math.round(Date.now() / 1000);
            const toSign = `public_id=${att.publicId}&timestamp=${timestamp}${apiSecret}`;
            const signature = crypto.createHash("sha1").update(toSign).digest("hex");
            const resType = att.fileType === "pdf" ? "raw" : "image";
            const formData = new FormData();
            formData.append("public_id", att.publicId);
            formData.append("api_key", apiKey);
            formData.append("timestamp", timestamp.toString());
            formData.append("signature", signature);

            await fetch(
              `https://api.cloudinary.com/v1_1/${cloudName}/${resType}/destroy`,
              { method: "POST", body: formData }
            );
          } catch (cloudErr) {
            console.error("Cloudinary file deletion error:", cloudErr);
          }
        }
      }
    }

    // Delete post - attachments are deleted via onDelete: Cascade
    await prisma.post.delete({ where: { id } });

    return apiSuccess({ message: "Post deleted successfully", id });
  } catch (error) {
    console.error("DELETE /api/admin/posts/[id] error:", error);
    return apiError("Failed to delete post", 500);
  }
}

