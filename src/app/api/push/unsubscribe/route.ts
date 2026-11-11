import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiSuccess, apiError } from "@/lib/api-response";
import { z } from "zod";

const unsubscribeSchema = z.object({
  endpoint: z.string().url(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = unsubscribeSchema.safeParse(body);

    if (!parsed.success) {
      return apiError("Invalid unsubscribe payload", 400);
    }

    await prisma.pushSubscription.deleteMany({
      where: { endpoint: parsed.data.endpoint },
    });

    return apiSuccess({ message: "Unsubscribed successfully" });
  } catch (error) {
    console.error("POST /api/push/unsubscribe error:", error);
    return apiError("Failed to remove push subscription", 500);
  }
}

