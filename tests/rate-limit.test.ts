import { describe, it, expect, beforeEach } from "vitest";
import { rateLimit, clearRateLimitMap } from "../src/lib/rate-limit";

describe("Rate Limiter", () => {
  beforeEach(() => {
    clearRateLimitMap();
  });

  it("allows requests under the specified limit", () => {
    const res1 = rateLimit("ip-1", 3, 1000);
    expect(res1.success).toBe(true);
    expect(res1.remaining).toBe(2);

    const res2 = rateLimit("ip-1", 3, 1000);
    expect(res2.success).toBe(true);
    expect(res2.remaining).toBe(1);

    const res3 = rateLimit("ip-1", 3, 1000);
    expect(res3.success).toBe(true);
    expect(res3.remaining).toBe(0);
  });

  it("blocks requests that exceed the limit", () => {
    rateLimit("ip-2", 2, 1000);
    rateLimit("ip-2", 2, 1000);

    const blocked = rateLimit("ip-2", 2, 1000);
    expect(blocked.success).toBe(false);
    expect(blocked.remaining).toBe(0);
  });

  it("tracks different identifiers independently", () => {
    rateLimit("ip-a", 1, 1000);
    const blockedA = rateLimit("ip-a", 1, 1000);
    expect(blockedA.success).toBe(false);

    const allowedB = rateLimit("ip-b", 1, 1000);
    expect(allowedB.success).toBe(true);
  });
});
