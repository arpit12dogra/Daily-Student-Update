import { describe, it, expect } from "vitest";
import { resolveDateRange } from "../src/lib/date-range";

describe("Date Range Resolver", () => {
  const refDate = new Date("2026-11-11T12:00:00Z");

  it("resolves default 1m to last 30 days and excludes archived", () => {
    const result = resolveDateRange("1m", undefined, undefined, refDate);
    expect(result.includeArchived).toBe(false);
    expect(result.to).toEqual(refDate);
    // 30 days prior is Oct 12
    const diffDays = Math.round(
      (result.to!.getTime() - result.from!.getTime()) / (1000 * 60 * 60 * 24)
    );
    expect(diffDays).toBe(30);
  });

  it("resolves 1-2m and includes archived posts", () => {
    const result = resolveDateRange("1-2m", undefined, undefined, refDate);
    expect(result.includeArchived).toBe(true);
    const diffDaysFromTo = Math.round(
      (result.to!.getTime() - result.from!.getTime()) / (1000 * 60 * 60 * 24)
    );
    expect(diffDaysFromTo).toBe(30);
  });

  it("resolves 2-3m and includes archived posts", () => {
    const result = resolveDateRange("2-3m", undefined, undefined, refDate);
    expect(result.includeArchived).toBe(true);
  });

  it("resolves older than 3 months", () => {
    const result = resolveDateRange("older", undefined, undefined, refDate);
    expect(result.includeArchived).toBe(true);
    expect(result.from).toBeUndefined();
    expect(result.to).toBeDefined();
  });
});

