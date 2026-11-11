import { NextRequest } from "next/server";

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory sliding window cache
const rateLimitMap = new Map<string, RateLimitRecord>();

// Clean up expired keys every 5 minutes to prevent memory leak
if (typeof setInterval !== "undefined") {
  const cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      if (now > record.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }, 5 * 60 * 1000);

  // Don't keep Node process alive just for the cleanup timer
  if (cleanupTimer.unref) {
    cleanupTimer.unref();
  }
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

/**
 * Universal sliding window rate limiter
 * @param identifier Unique key (e.g. IP + endpoint)
 * @param limit Max requests allowed in the window
 * @param windowMs Time window in milliseconds
 */
export function rateLimit(
  identifier: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetAt) {
    const newRecord: RateLimitRecord = {
      count: 1,
      resetAt: now + windowMs,
    };
    rateLimitMap.set(identifier, newRecord);
    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: newRecord.resetAt,
    };
  }

  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: record.resetAt,
    };
  }

  record.count += 1;
  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: record.resetAt,
  };
}

/**
 * Get client IP address from Next.js request headers
 */
export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

/**
 * Helper to check rate limit on public feed/search endpoints
 * 60 requests per 1 minute window
 */
export function checkPublicApiLimit(req: NextRequest): RateLimitResult {
  const ip = getClientIp(req);
  return rateLimit(`public_api:${ip}`, 60, 60 * 1000);
}

/**
 * Helper to check rate limit on web push subscription
 * 10 requests per 1 minute window
 */
export function checkPushSubscribeLimit(req: NextRequest): RateLimitResult {
  const ip = getClientIp(req);
  return rateLimit(`push_subscribe:${ip}`, 10, 60 * 1000);
}

/**
 * Helper to check rate limit on admin post creation / updates
 * 30 requests per 1 minute window
 */
export function checkAdminActionLimit(req: NextRequest): RateLimitResult {
  const ip = getClientIp(req);
  return rateLimit(`admin_action:${ip}`, 30, 60 * 1000);
}

/**
 * Clear the in-memory rate limit map (useful for test suites)
 */
export function clearRateLimitMap() {
  rateLimitMap.clear();
}

