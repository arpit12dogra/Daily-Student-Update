import * as webpush from "web-push";
import { prisma } from "./prisma";

interface PushPayload {
  title: string;
  body: string;
  url: string;
}

export async function sendPushNotificationToAll(payload: PushPayload) {
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT || "mailto:admin@studentupdates.com";

  if (!publicKey || !privateKey) {
    console.warn("VAPID keys not configured, skipping push notifications.");
    return { sent: 0, failed: 0 };
  }

  webpush.setVapidDetails(subject, publicKey, privateKey);

  const subscriptions = await prisma.pushSubscription.findMany();
  if (subscriptions.length === 0) {
    return { sent: 0, failed: 0 };
  }

  const notificationString = JSON.stringify(payload);
  let sentCount = 0;
  let failedCount = 0;

  await Promise.all(
    subscriptions.map(async (sub) => {
      const pushConfig = {
        endpoint: sub.endpoint,
        keys: {
          p256dh: sub.p256dh,
          auth: sub.auth,
        },
      };

      try {
        await webpush.sendNotification(pushConfig, notificationString);
        sentCount++;
      } catch (err: unknown) {
        failedCount++;
        // If subscription is expired or no longer valid (410 Gone or 404 Not Found), delete it
        const statusCode = (err as { statusCode?: number })?.statusCode;
        if (statusCode === 410 || statusCode === 404) {
          try {
            await prisma.pushSubscription.delete({ where: { id: sub.id } });
            console.log(`Removed expired push subscription: ${sub.id}`);
          } catch (deleteErr) {
            console.error("Error deleting expired subscription:", deleteErr);
          }
        } else {
          console.error(`Failed to send push to ${sub.id}:`, err);
        }
      }
    })
  );

  return { sent: sentCount, failed: failedCount };
}

