import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiSuccess, apiError } from "@/lib/api-response";
import { checkPushSubscribeLimit } from "@/lib/rate-limit";
import { z } from "zod";

const subscribeSchema = z.object({
  endpoint: z.string().url(),
  keys: z.object({
    p256dh: z.string().min(1),
    auth: z.string().min(1),
  }),
});

export async function POST(req: NextRequest) {
  try {
    const rateCheck = checkPushSubscribeLimit(req);
    if (!rateCheck.success) {
      return apiError("Too many subscription requests. Please try again later.", 429);
    }

    const body = await req.json();
    const parsed = subscribeSchema.safeParse(body);

    if (!parsed.success) {
      return apiError("Invalid push subscription payload", 400, parsed.error.format());
    }

    const { endpoint, keys } = parsed.data;
    const userAgent = req.headers.get("user-agent") || undefined;

    const subscription = await prisma.pushSubscription.upsert({
      where: { endpoint },
      update: {
        p256dh: keys.p256dh,
        auth: keys.auth,
        userAgent,
      },
      create: {
        endpoint,
        p256dh: keys.p256dh,
        auth: keys.auth,
        userAgent,
      },
    });

    return apiSuccess({ id: subscription.id, message: "Subscribed to alerts successfully" });
  } catch (error) {
    console.error("POST /api/push/subscribe error:", error);
    return apiError("Failed to save push subscription", 500);
  }
}

