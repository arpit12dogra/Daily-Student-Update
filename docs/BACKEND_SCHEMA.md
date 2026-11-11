# Backend Schema

**Project:** StudentUpdates (working title)
**Database:** PostgreSQL (Neon) | **ORM:** Prisma
**Version:** 1.0 | **Date:** 2026-11-11

---

## 1. Entity Overview

```
User 1 ---- * Post 1 ---- * Attachment

PushSubscription   (standalone, no login needed)
```

| Table | Purpose |
|-------|---------|
| `User` | The 2 accounts (Admin, Editor) |
| `Post` | All updates (exams, jobs, rooms, etc.) |
| `Attachment` | Files and images linked to a post |
| `PushSubscription` | Browser push subscriptions from students |

Auth.js uses a JWT session, so no session or account tables are needed at MVP.

## 2. Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

enum Role {
  ADMIN
  EDITOR
}

enum Category {
  EXAM
  PRIVATE_JOB
  GOVT_JOB
  FORM
  COLLEGE_INFO
  RESULT
  ADMIT_CARD
  SCHOLARSHIP
  ROOM_PG
}

enum PostStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

model User {
  id           String   @id @default(cuid())
  name         String
  email        String   @unique
  passwordHash String
  role         Role     @default(EDITOR)
  isActive     Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  posts        Post[]
}

model Post {
  id          String     @id @default(cuid())
  title       String
  slug        String     @unique
  summary     String
  content     String     // markdown or sanitized rich text
  category    Category
  state       String     // e.g. "Himachal Pradesh" or "All India"
  status      PostStatus @default(DRAFT)

  lastDate    DateTime?  // application or event deadline (optional)
  officialUrl String?    // official source link (optional)
  meta        Json?      // category specific extras, e.g. rent and contact for ROOM_PG

  publishedAt DateTime?
  archivedAt  DateTime?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  createdById String
  createdBy   User       @relation(fields: [createdById], references: [id])

  attachments Attachment[]

  @@index([status, publishedAt(sort: Desc)])
  @@index([category, publishedAt(sort: Desc)])
  @@index([state])
  @@index([lastDate])
}

model Attachment {
  id        String   @id @default(cuid())
  postId    String
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  url       String
  publicId  String   // Cloudinary public id, needed for deletion
  fileType  String   // "image" or "pdf"
  fileName  String?
  sizeBytes Int?
  createdAt DateTime @default(now())

  @@index([postId])
}

model PushSubscription {
  id        String   @id @default(cuid())
  endpoint  String   @unique
  p256dh    String
  auth      String
  userAgent String?
  createdAt DateTime @default(now())
}
```

## 3. Full-Text Search Setup

Prisma does not manage `tsvector` columns directly, so add this in a **custom SQL migration** (create the migration with `--create-only`, then edit it):

```sql
-- Search column kept up to date automatically
ALTER TABLE "Post"
ADD COLUMN "searchVector" tsvector
GENERATED ALWAYS AS (
  setweight(to_tsvector('english', coalesce("title", '')), 'A') ||
  setweight(to_tsvector('english', coalesce("summary", '')), 'B') ||
  setweight(to_tsvector('english', coalesce("content", '')), 'C')
) STORED;

CREATE INDEX "Post_searchVector_idx" ON "Post" USING GIN ("searchVector");
```

Query example (use `prisma.$queryRaw` with parameters):

```sql
SELECT id, title, slug, category, state, "publishedAt",
       ts_rank("searchVector", websearch_to_tsquery('english', $1)) AS rank
FROM "Post"
WHERE "searchVector" @@ websearch_to_tsquery('english', $1)
  AND status IN ('PUBLISHED', 'ARCHIVED')
ORDER BY rank DESC, "publishedAt" DESC
LIMIT 20 OFFSET 0;
```

Note: the `searchVector` column is not declared in `schema.prisma`, so it is used only through raw SQL.

## 4. Key Queries

### 4.1 Default home feed (Latest, last 30 days)

```ts
prisma.post.findMany({
  where: { status: "PUBLISHED" },
  orderBy: { publishedAt: "desc" },
  take: 20,
});
```

### 4.2 Filtered feed with date range

```ts
prisma.post.findMany({
  where: {
    status: { in: ["PUBLISHED", "ARCHIVED"] },
    category,                       // optional
    state,                          // optional, include "All India" posts too
    publishedAt: { gte: from, lt: to },
  },
  orderBy: { publishedAt: "desc" },
  take: 20,
});
```

Rule: when `state` is selected, also return posts where `state = "All India"`.

### 4.3 Date range presets

| Preset | `from` | `to` |
|--------|--------|------|
| Last 1 month (default) | now - 30 days | now |
| 1 to 2 months ago | now - 60 days | now - 30 days |
| 2 to 3 months ago | now - 90 days | now - 60 days |
| Older than 3 months | none | now - 90 days |
| Custom | user chosen | user chosen |

### 4.4 Auto-archive (cron)

```ts
prisma.post.updateMany({
  where: {
    status: "PUBLISHED",
    publishedAt: { lt: subDays(new Date(), 30) },
  },
  data: { status: "ARCHIVED", archivedAt: new Date() },
});
```

### 4.5 Delete post (Admin only)

- Delete the Cloudinary files using each attachment's `publicId`.
- Delete the post (attachments are removed through `onDelete: Cascade`).

## 5. Zod Schemas (summary)

```ts
// schemas/post.ts
const categoryEnum = z.enum([
  "EXAM","PRIVATE_JOB","GOVT_JOB","FORM","COLLEGE_INFO",
  "RESULT","ADMIT_CARD","SCHOLARSHIP","ROOM_PG",
]);

export const createPostSchema = z.object({
  title: z.string().min(5).max(150),
  category: categoryEnum,
  state: z.string().min(2).max(60),
  summary: z.string().min(10).max(300),
  content: z.string().min(10),
  lastDate: z.coerce.date().optional(),
  officialUrl: z.string().url().optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]),
  notify: z.boolean().default(false),
  attachments: z.array(attachmentSchema).max(5).default([]),
  meta: z.record(z.any()).optional(),
});

export const listPostsQuerySchema = z.object({
  q: z.string().max(100).optional(),
  category: categoryEnum.optional(),
  state: z.string().optional(),
  range: z.enum(["1m", "1-2m", "2-3m", "older", "custom"]).default("1m"),
  from: z.coerce.date().optional(),
  to: z.coerce.date().optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(30).default(20),
});
```

## 6. Slug Rules

- Generated from the title (lowercase, hyphens), plus a short random suffix or the date if it already exists, e.g. `hppsc-clerk-recruitment-2026-a1b2`.
- Slug does not change after publishing (so shared links keep working).

## 7. Seed Data

`prisma/seed.ts` creates:

| Account | Role |
|---------|------|
| Arpit (email and password from env or prompt) | ADMIN |
| Friend (email and password from env or prompt) | EDITOR |

Passwords are hashed with bcrypt. Never commit real credentials.

## 8. States List

Store the list of Indian states and UTs plus "All India" as a constant in code (`lib/states.ts`), not as a table. Posts keep the state name as a string.

## 9. Data Retention Rules

- Posts are not auto-deleted.
- Posts older than 30 days are archived automatically.
- Only the Admin deletes posts manually.
- Cloudinary files are removed when a post is deleted.
- Push subscriptions that return `410 Gone` are removed.

## 10. Migration Workflow

1. `prisma migrate dev --name init` (local, against a Neon dev branch).
2. Add the custom full-text search SQL migration.
3. `prisma migrate deploy` on production builds.
4. `prisma db seed` once to create the 2 accounts.

## 11. Future Schema Ideas

- `Category` as a table so admins can add categories without code changes.
- `Bookmark` (if student accounts are ever added).
- `RoomListing` as a dedicated table with rent, location, contact fields and owner submissions.
- `AuditLog` (who created, edited or deleted what).
- `Language` field or translation table for Hindi.
