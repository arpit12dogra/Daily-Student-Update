import { requireAuth } from "@/lib/auth-guard";
import { apiSuccess, apiError, apiUnauthorized } from "@/lib/api-response";
import crypto from "crypto";

export async function POST() {
  try {
    const user = await requireAuth();
    if (!user) return apiUnauthorized();

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      return apiError("Cloudinary is not configured on the server", 500);
    }

    const timestamp = Math.round(new Date().getTime() / 1000);
    const folder = "student-updates";

    // Create Cloudinary signature
    const paramsToSign = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto.createHash("sha1").update(paramsToSign).digest("hex");

    return apiSuccess({
      signature,
      timestamp,
      cloudName,
      apiKey,
      folder,
    });
  } catch (error) {
    console.error("POST /api/admin/upload/sign error:", error);
    return apiError("Failed to generate upload signature", 500);
  }
}
