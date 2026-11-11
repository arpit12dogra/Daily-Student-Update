import { z } from "zod";

export const categoryEnum = z.enum([
  "EXAM",
  "PRIVATE_JOB",
  "GOVT_JOB",
  "FORM",
  "COLLEGE_INFO",
  "RESULT",
  "ADMIT_CARD",
  "SCHOLARSHIP",
  "ROOM_PG",
]);

export const postStatusEnum = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);

export const attachmentSchema = z.object({
  id: z.string().optional(),
  url: z.string().url(),
  publicId: z.string().min(1),
  fileType: z.enum(["image", "pdf"]),
  fileName: z.string().optional(),
  sizeBytes: z.number().int().positive().optional(),
});

export const createPostSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters").max(150, "Title is too long"),
  category: categoryEnum,
  state: z.string().min(2, "State is required").max(60),
  summary: z
    .string()
    .min(10, "Summary must be at least 10 characters")
    .max(300, "Summary must be under 300 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  lastDate: z.coerce.date().nullable().optional(),
  officialUrl: z.string().url("Must be a valid URL").nullable().optional().or(z.literal("")),
  status: z.enum(["DRAFT", "PUBLISHED"]).default("DRAFT"),
  notify: z.boolean().default(false),
  attachments: z.array(attachmentSchema).max(5, "Maximum 5 attachments allowed").default([]),
  meta: z.record(z.string(), z.any()).optional().nullable(),
});

export const updatePostSchema = createPostSchema.partial().extend({
  status: postStatusEnum.optional(),
});

export const dateRangeEnum = z.enum(["1m", "1-2m", "2-3m", "older", "custom"]);

export const listPostsQuerySchema = z.object({
  q: z.string().max(100).optional(),
  category: categoryEnum.optional(),
  state: z.string().optional(),
  range: dateRangeEnum.default("1m"),
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(30).default(20),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
export type UpdatePostInput = z.infer<typeof updatePostSchema>;
export type ListPostsQuery = z.infer<typeof listPostsQuerySchema>;
