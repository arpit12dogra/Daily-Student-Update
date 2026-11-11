import { subDays } from "date-fns";

export type DateRangePreset = "1m" | "1-2m" | "2-3m" | "older" | "custom";

export interface ResolvedDateRange {
  from?: Date;
  to?: Date;
  includeArchived: boolean;
}

export function resolveDateRange(
  range: DateRangePreset = "1m",
  customFrom?: Date,
  customTo?: Date,
  referenceDate: Date = new Date()
): ResolvedDateRange {
  switch (range) {
    case "1m":
      return {
        from: subDays(referenceDate, 30),
        to: referenceDate,
        includeArchived: false,
      };

    case "1-2m":
      return {
        from: subDays(referenceDate, 60),
        to: subDays(referenceDate, 30),
        includeArchived: true,
      };

    case "2-3m":
      return {
        from: subDays(referenceDate, 90),
        to: subDays(referenceDate, 60),
        includeArchived: true,
      };

    case "older":
      return {
        to: subDays(referenceDate, 90),
        includeArchived: true,
      };

    case "custom":
      return {
        from: customFrom,
        to: customTo,
        includeArchived: true,
      };

    default:
      return {
        from: subDays(referenceDate, 30),
        to: referenceDate,
        includeArchived: false,
      };
  }
}

