import { describe, it, expect } from "vitest";
import { createPostSchema, listPostsQuerySchema } from "../src/schemas/post";

describe("Post Validation Schemas", () => {
  it("validates a valid post creation input", () => {
    const validData = {
      title: "HPPSC Assistant Professor Recruitment 2026",
      category: "GOVT_JOB",
      state: "Himachal Pradesh",
      summary: "Apply for Assistant Professor vacancies in HP higher education department.",
      content: "Complete eligibility details and online application link for 2026.",
      status: "PUBLISHED",
      officialUrl: "http://www.hppsc.hp.gov.in",
    };

    const parsed = createPostSchema.safeParse(validData);
    expect(parsed.success).toBe(true);
  });

  it("fails if title is too short", () => {
    const invalidData = {
      title: "HP",
      category: "EXAM",
      state: "Himachal Pradesh",
      summary: "Short summary text here.",
      content: "Detailed content.",
    };

    const parsed = createPostSchema.safeParse(invalidData);
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      expect(parsed.error.issues[0].path).toContain("title");
    }
  });

  it("validates list query defaults", () => {
    const query = listPostsQuerySchema.parse({});
    expect(query.range).toBe("1m");
    expect(query.page).toBe(1);
    expect(query.limit).toBe(20);
  });
});
