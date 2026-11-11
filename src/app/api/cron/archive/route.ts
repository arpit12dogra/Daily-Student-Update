import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiSuccess, apiError, apiUnauthorized } from "@/lib/api-response";
import { PostStatus } from "@prisma/client";
import { subDays } from "date-fns";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return apiUnauthorized("Invalid or missing cron authorization");
    }

    const thirtyDaysAgo = subDays(new Date(), 30);

    const result = await prisma.post.updateMany({
      where: {
        status: PostStatus.PUBLISHED,
        publishedAt: {
          lt: thirtyDaysAgo,
        },
      },
      data: {
        status: PostStatus.ARCHIVED,
        archivedAt: new Date(),
      },
    });

    return apiSuccess({
      message: `Archived ${result.count} posts older than 30 days`,
      countArchived: result.count,
    });
  } catch (error) {
    console.error("GET /api/cron/archive error:", error);
    return apiError("Cron auto-archive job failed", 500);
  }
}

