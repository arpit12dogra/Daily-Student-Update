import { describe, it, expect } from "vitest";
import { generateBaseSlug, generateUniqueSlug } from "../src/lib/slug";

describe("Slug Generator", () => {
  it("generates a clean URL slug from title", () => {
    const slug = generateBaseSlug("HPPSC Clerk Recruitment 2026: Apply Now!");
    expect(slug).toBe("hppsc-clerk-recruitment-2026-apply-now");
  });

  it("handles consecutive spaces, symbols and accents", () => {
    const slug = generateBaseSlug("  Exam   Updates --- 2026 @ Shimla #HPU  ");
    expect(slug).toBe("exam-updates-2026-shimla-hpu");
  });

  it("generates unique slug with suffix", () => {
    const unique = generateUniqueSlug("UPSC Civil Services 2026", "a1b2");
    expect(unique).toBe("upsc-civil-services-2026-a1b2");
  });
});

