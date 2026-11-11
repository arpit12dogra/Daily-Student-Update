# Work Steps: Step-by-Step Project Execution Guide

**Project:** StudentUpdates (working title)  
**Owner:** Arpit Dogra (`ADMIN`) | **Content Partner:** Friend (`EDITOR`)  
**Source Docs Reviewed:** `PRD.md`, `TRD.md`, `APP_FLOW.md`, `BACKEND_SCHEMA.md`, `UI_UX_BRIEF.md`, `IMPLEMENTATION_PLAN.md`, `ai.md`

This file breaks down the entire project into **exact sequential steps** ("first do this, then do that") so you always know what to build next, which files/routes/tables belong to each step, and how to verify each step before moving on.

---

## Step-by-Step Roadmap Overview

```
Step 0: Confirm Open Decisions & Library Approvals                 [COMPLETED]
  ↓
Step 1: Project Setup, Tooling & Blank Deploy (Vercel + Neon)      [CODE COMPLETE - Awaiting Neon string]
  ↓
Step 2: Database Schema, Full-Text Search & Seed Data              [CODE COMPLETE - Awaiting Neon string]
  ↓
Step 3: Auth, Middleware & Backend APIs (Auth.js + 9 Routes + Zod) [COMPLETED]
  ↓
Step 4: Public Student Frontend (Feed, Categories, Search, Detail) [COMPLETED]
  ↓
Step 5: Admin & Editor Panel (Dashboard, Forms, FileUploader)      [COMPLETED]
  ↓
Step 6: Auto-Archive Cron & PWA (Manifest, SW, App Icons, Offline) [COMPLETED]
  ↓
Step 7: Web Push Notifications (VAPID, Dispatcher, Alerts Button)  [COMPLETED]
  ↓
Step 8: Security Hardening, Rate Limiting & Input Sanitization     [COMPLETED]
  ↓
Step 9: Post-Launch Backlog (Future Enhancements)                  [READY FOR LIVE LAUNCH]
```

> **Core Build Rule (from `IMPLEMENTATION_PLAN.md` & `ai.md`):**  
> Build **Database & Backend APIs first**, test them directly, and **then** build the Frontend connected to those APIs. Never weaken the role rule: `EDITOR` can create and edit posts, **only `ADMIN` can delete or archive/unarchive**.

---

## Step 0: Confirm Open Decisions & Helper Libraries (Before Coding)

First, settle the pending items listed in `PRD.md`, `TRD.md`, and `ai.md`:

1. **Approve or reject proposed helper libraries** (`ai.md` Section 4 / `TRD.md` Section 2.3):
   - `bcryptjs` (for password hashing of the 2 accounts)
   - `date-fns` (for date-range math: 30/60/90 days, badges)
   - Markdown or simple rich-text editor (for admin post content)
   - Rate limiter (e.g., Upstash Ratelimit or in-memory/DB limiter for login & public APIs)
2. **Confirm product open questions** (`PRD.md` Section 12 & `ai.md` Section 6):
   - Project name and domain (currently working title: `StudentUpdates`).
   - Can `EDITOR` edit posts created by `ADMIN`? (Default assumed: **Yes**).
   - State filter scope: all Indian states & UTs + `"All India"` (stored as a constant in `src/lib/states.ts`).

---

## Step 1: Project Setup & First Live Deploy

**Goal:** Get a clean Next.js TypeScript project running locally and deployed to Vercel with Neon ready.

1. **Organize documentation (optional cleanup from `IMPLEMENTATION_PLAN.md` & `TRD.md`):**
   - Keep `ai.md` in the root and optionally move planning docs (`PRD.md`, `TRD.md`, `APP_FLOW.md`, `BACKEND_SCHEMA.md`, `UI_UX_BRIEF.md`, `IMPLEMENTATION_PLAN.md`) into a `docs/` folder (keep `work_steps.md` in root or `docs/`).
2. **Scaffold the Next.js app:**
   - Run `create-next-app` with **TypeScript (strict mode)**, **Tailwind CSS**, **ESLint**, **App Router**, and **`src/` directory**.
3. **Set up code quality & test tooling:**
   - Install **Prettier** and **Vitest**.
   - Add scripts to `package.json`: `lint`, `typecheck`, `test`.
   - Scaffold the planned folder layout (`TRD.md` Section 16):
     - `prisma/`
     - `public/`
     - `src/app/(public)/`, `src/app/admin/`, `src/app/api/`
     - `src/components/`, `src/lib/`, `src/schemas/`, `src/types/`
     - `tests/`
4. **Provision Neon PostgreSQL:**
   - Create a Neon project with a `main` branch (production) and a `dev` branch (local/preview).
   - Copy both the **pooled** (`DATABASE_URL`) and **direct** (`DIRECT_URL`) connection strings.
5. **Configure environment files:**
   - Create `.env.local` (never commit) and `.env.example` (committed template) matching `TRD.md` Section 12:
     - `DATABASE_URL`, `DIRECT_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`, `CRON_SECRET`.
6. **Connect GitHub to Vercel:**
   - Link the repository in Vercel, add initial env vars, and verify the blank Next.js page deploys cleanly.

**Verify Step 1:** A blank Next.js page loads on your live Vercel URL, and `npm run lint` / `typecheck` pass locally.

---

## Step 2: Database Schema, Full-Text Search & Seed Data

**Goal:** Set up all database tables, search index, state/category helpers, and the 2 initial accounts.

1. **Install Prisma and create `prisma/schema.prisma`** (`BACKEND_SCHEMA.md` Section 2):
   - **Enums:**
     - `Role`: `ADMIN`, `EDITOR`
     - `Category`: `EXAM`, `PRIVATE_JOB`, `GOVT_JOB`, `FORM`, `COLLEGE_INFO`, `RESULT`, `ADMIT_CARD`, `SCHOLARSHIP`, `ROOM_PG`
     - `PostStatus`: `DRAFT`, `PUBLISHED`, `ARCHIVED`
   - **Models:**
     - `User` (`id`, `name`, `email`, `passwordHash`, `role`, `isActive`, `createdAt`, `updatedAt`)
     - `Post` (`id`, `title`, `slug`, `summary`, `content`, `category`, `state`, `status`, `lastDate`, `officialUrl`, `meta`, `publishedAt`, `archivedAt`, `createdAt`, `updatedAt`, `createdById`) + indexes on `[status, publishedAt]`, `[category, publishedAt]`, `[state]`, `[lastDate]`
     - `Attachment` (`id`, `postId`, `url`, `publicId`, `fileType`, `fileName`, `sizeBytes`, `createdAt`, cascade delete)
     - `PushSubscription` (`id`, `endpoint`, `p256dh`, `auth`, `userAgent`, `createdAt`)
2. **Run initial migration on the Neon dev branch:**
   - `prisma migrate dev --name init`
3. **Add PostgreSQL Full-Text Search (`searchVector`) migration** (`BACKEND_SCHEMA.md` Section 3):
   - Create a `--create-only` migration.
   - Add the generated `tsvector` column weighting `title` (`A`), `summary` (`B`), `content` (`C`) + `GIN` index `"Post_searchVector_idx"`.
   - Apply the migration.
4. **Create core shared helpers:**
   - `src/lib/prisma.ts` — Prisma singleton client (prevents connection exhaustion on Vercel serverless).
   - `src/lib/states.ts` — constant list of Indian states/UTs + `"All India"` (`BACKEND_SCHEMA.md` Section 8).
   - Category metadata helper — labels, URL slugs (`exams`, `govt-jobs`, etc.), and badge/chip colors (`UI_UX_BRIEF.md` Section 3).
5. **Create `prisma/seed.ts`:**
   - Seed the **2 accounts only** (`ADMIN` for Arpit, `EDITOR` for friend) with bcrypt-hashed passwords read from env/prompt (never hardcode real passwords in git).
   - Add a few realistic sample posts (some `PUBLISHED`, some `DRAFT`, some >30 days old for testing archives/date filters).
   - Run `prisma db seed`.

**Verify Step 2:** Open `prisma studio` and confirm all 4 tables, the 2 users, sample posts, and the `searchVector` column exist in Neon.

---

## Step 3: Authentication, Validation & Backend APIs

**Goal:** Build and test the entire API layer and role-based security before touching the UI.

1. **Create Zod validation schemas** (`src/schemas/post.ts`, `BACKEND_SCHEMA.md` Section 5):
   - `createPostSchema` & `updatePostSchema` (title 5–150, summary 10–300, content ≥10, category enum, state, optional `lastDate`, optional `officialUrl`, `status`, `notify`, up to 5 attachments, optional `meta`).
   - `listPostsQuerySchema` (`q`, `category`, `state`, `range` in `["1m", "1-2m", "2-3m", "older", "custom"]`, `from`, `to`, `page`, `limit` max 30).
   - `pushSubscribeSchema` / `uploadSignSchema`.
2. **Create utility helpers (`src/lib/`):**
   - **Slug generator:** lowercase hyphenated title + short random suffix/date on collision; never mutate slug after publish (`BACKEND_SCHEMA.md` Section 6).
   - **Date-range math helper:** resolves `1m`, `1-2m`, `2-3m`, `older`, `custom` into `{ from, to }` and determines whether `ARCHIVED` posts should be included.
   - **Standard JSON error response helper** (consistent status codes & messages).
   - **Role guard helper** (e.g., `requireAuth()`, `requireRole("ADMIN")`).
3. **Set up Auth.js (NextAuth)** (`TRD.md` Section 4):
   - Credentials provider (email + password verified with bcrypt against `User` where `isActive = true`).
   - JWT session strategy storing `user.id` and `user.role` (`ADMIN` or `EDITOR`).
   - No public signup route or registration page.
4. **Add Route Protection Middleware:**
   - Protect `/admin/*` (redirect unauthenticated users to `/admin/login`) and `/api/admin/*` (return `401` if unauthenticated).
   - Always enforce role checks inside every API handler as well (`TRD.md` Section 4).
5. **Build Public Route Handlers:**
   - `GET /api/posts`:
     - Default feed (`1m`): `status = PUBLISHED`, newest `publishedAt` first, paginated.
     - Date range > 30 days: includes `PUBLISHED` and `ARCHIVED`.
     - State filter rule: when a specific state is selected, **also include posts where `state = "All India"`** (`BACKEND_SCHEMA.md` Section 4.2).
     - Keyword `q`: raw SQL query against `searchVector` using `websearch_to_tsquery` + `ts_rank` (`BACKEND_SCHEMA.md` Section 3).
   - `GET /api/posts/[slug]`: returns single `PUBLISHED`/`ARCHIVED` post + attachments + related posts.
6. **Build Admin / Editor Route Handlers:**
   - `GET /api/admin/posts` (`ADMIN`, `EDITOR`): paginated list including `DRAFT`, `PUBLISHED`, `ARCHIVED` with search & status/category filters.
   - `POST /api/admin/posts` (`ADMIN`, `EDITOR`): create draft or publish (`publishedAt = now()`).
   - `PATCH /api/admin/posts/[id]` (`ADMIN`, `EDITOR`): edit post; set `publishedAt` on first publish.
   - `DELETE /api/admin/posts/[id]` (**`ADMIN` ONLY**, return `403` for `EDITOR`): delete associated files from Cloudinary using `publicId`, then delete the post (cascade deletes `Attachment` rows).
   - `POST /api/admin/posts/[id]/archive` (**`ADMIN` ONLY**): manually toggle `ARCHIVED` / `PUBLISHED`.
   - `POST /api/admin/upload/sign` (`ADMIN`, `EDITOR`): generate signed Cloudinary upload parameters with file type/size rules (images ≤2 MB, PDFs ≤5 MB; JPG/PNG/WebP/PDF only).
7. **Write & run Vitest unit/integration tests** (`TRD.md` Section 13):
   - Test Zod schemas, date-range helper, slug generator, and role guard (`EDITOR` rejected on delete/archive).
   - Test every endpoint via curl / Thunder Client / Postman.

**Verify Step 3:** All endpoints return valid JSON in a REST client; `EDITOR` token receives `403 Forbidden` on `DELETE /api/admin/posts/[id]` and `POST /api/admin/posts/[id]/archive`; `npm test` passes.

---

## Step 4: Public Student Frontend

**Goal:** Build the mobile-first, fast, SEO-friendly public website connected to the APIs and database.

1. **Design System & Shared Layout (`UI_UX_BRIEF.md`):**
   - Configure Tailwind theme tokens (calm blue/indigo primary, off-white background, white cards, semantic badge colors, `lucide-react` icons, readable typography 16px body / 18–20px mobile titles, ≥44px tap targets).
   - Build `Navbar` (logo/name, search icon, "Get alerts" bell placeholder for Step 7) and `Footer` (about link, contact, disclaimer).
   - Build reusable UI primitives: `Button`, `Chip`, `Badge` (`New` ≤48h, `Closing soon` ≤3 days to `lastDate`, `Expired` past `lastDate`), `Skeleton`, `EmptyState`, `Toast`, `LoadMore` / `Pagination`.
2. **Home Feed (`/`) & Category Feed (`/category/[slug]`):**
   - Server-rendered initial feed (`Latest Updates`, newest first, last 30 days) for fast first paint & SEO.
   - Horizontally scrollable `CategoryBar` chips (color + text label, never color alone).
   - `PostCard` showing Category chip, `New` / `Closing soon` / `Expired` badge, 2-line title, 2-line summary, state, posted date, and last date.
   - Use **TanStack Query** on the client for filter changes and "Load more" / pagination, syncing filters with URL query parameters.
3. **Search & Filter Experience (`/search` + `FilterSheet` / panel):**
   - Mobile: bottom sheet filter (`FilterSheet`); Desktop: left or top filter panel + optional "Closing soon" sidebar.
   - Filters: Category, State (searchable dropdown, includes `"All India"` results automatically), Date range presets (`Last 1 month`, `1 to 2 months ago`, `2 to 3 months ago`, `Older than 3 months`, `Custom`).
   - Show active filter chips with remove buttons, `"Reset filters"`, and result count (`"24 updates found"`).
4. **Post Detail Page (`/post/[slug]`):**
   - Back button + Share button (WhatsApp share / copy link).
   - Category chip, title, posted date, state, status badges.
   - Highlighted info box: **Last date**, **"Open official website"** button (new tab), downloadable/viewable **attachments** (PDF/image).
   - Rendered post body (sanitized markdown/rich text).
   - **"Related updates"** (same category) at the bottom.
   - Sticky bottom mobile CTA: **"Open official link"** when `officialUrl` exists.
   - Proper `404` page if post does not exist or is a `DRAFT`.
5. **Static & Utility Pages:**
   - `/about` (about the platform & contact info).
6. **SEO & Social Sharing:**
   - Dynamic `generateMetadata` + Open Graph tags on `/post/[slug]` and `/category/[slug]` so WhatsApp link previews look clean.
   - `sitemap.xml` and `robots.txt`.

**Verify Step 4:** Test on both a real mobile phone (360px+ width) and a laptop: a student can open `/`, switch categories, filter by state and older date ranges (seeing archived posts), search by keyword, open a post detail page, and share via WhatsApp link.

---

## Step 5: Admin & Editor Panel

**Goal:** Give Arpit (`ADMIN`) and Friend (`EDITOR`) a fast dashboard to create, edit, upload files, and publish in under 2 minutes.

1. **Login Page (`/admin/login`):**
   - Centered card with email, password, show/hide toggle, clear error text, and redirect back to intended `/admin/*` page after login.
2. **Admin Layout & Dashboard (`/admin`):**
   - Role-aware navigation (only load admin JS on `/admin/*` routes).
   - Stat tiles: **Total**, **Published**, **Drafts**, **Archived**.
   - Prominent **`+ New Post`** button and table of latest 10 posts with status badges.
3. **Admin Post List (`/admin/posts`):**
   - Responsive layout: table on laptop, cards on mobile.
   - Search box + status filter + category filter.
   - Row actions:
     - **Edit** (visible to `ADMIN` and `EDITOR`)
     - **Archive / Unarchive** (visible to `ADMIN` only)
     - **Delete** (red button with `ConfirmDialog` naming the post — **visible to `ADMIN` only**)
4. **Create & Edit Post Form (`/admin/posts/new` and `/admin/posts/[id]/edit`):**
   - Built with **React Hook Form + Zod resolver**.
   - Clear sections: **Basics** (title, category, state), **Content** (summary with live char counter, content editor), **Dates & Links** (`lastDate`, `officialUrl`), **Attachments**, **Publishing**.
   - **FileUploader component:** requests signed params from `POST /api/admin/upload/sign`, uploads directly from browser to Cloudinary, enforces client+server type/size validation (images ≤2 MB, PDFs ≤5 MB), allows removing attachments before saving.
   - Action buttons: **`Save draft`** and **`Publish`** (plus `"Notify subscribers"` toggle near Publish, wired in Step 7).
   - Optional nice-to-have: local storage draft autosave so work isn't lost.
5. **Real-world 2-person test:**
   - Share Editor credentials with your friend. Have him log in, upload an attachment, save a draft, publish a post, and verify he **cannot** see or trigger delete/archive.

**Verify Step 5:** Editor can log in, create/upload/publish a post, and see it on the public feed; Editor has no delete/archive access; Admin can edit, archive, unarchive, and delete (verifying Cloudinary cleanup).

---

## Step 6: Auto-Archive Cron & PWA

**Goal:** Automate the 30-day archive rule and make the site installable on phones.

1. **Daily Auto-Archive Endpoint (`GET /api/cron/archive`):**
   - Verify `Authorization: Bearer ${CRON_SECRET}`.
   - Update all posts where `status = PUBLISHED` and `publishedAt < now() - 30 days` to `status = ARCHIVED`, `archivedAt = now()`.
   - Never delete any post. Return JSON count of archived posts.
2. **Configure `vercel.json`:**
   - Add daily Vercel Cron schedule hitting `/api/cron/archive`.
   - Test with dummy posts older than 30 days: verify they disappear from default `/` feed but still appear under `"1 to 2 months ago"` / `"2 to 3 months ago"` filters.
3. **PWA Setup (`public/` & `/offline`):**
   - Create `manifest.webmanifest` (app name, icons, theme color, `display: standalone`).
   - Create app icons in `public/`.
   - Create `/offline` fallback page (`APP_FLOW.md` & `UI_UX_BRIEF.md`).
   - Create Service Worker (`public/sw.js`): cache app shell and static assets; **never blindly cache `/admin/*` or `/api/*` responses**.
   - Add `InstallPrompt` component (shows only after a few visits, never on first visit, easy to dismiss).

**Verify Step 6:** Cron endpoint archives >30-day posts cleanly; Lighthouse PWA & Performance checks pass (target mobile performance >90); site installs to home screen on Android/desktop.

---

## Step 7: Web Push Notifications

**Goal:** Allow students to opt in to alerts (without login) and receive notifications when posts are published with "Notify" enabled.

1. **Generate VAPID keys:**
   - Add `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, and `VAPID_SUBJECT` to `.env.local` and Vercel env vars.
2. **Backend Push APIs:**
   - `POST /api/push/subscribe` — validate with Zod and upsert into `PushSubscription`.
   - `POST /api/push/unsubscribe` — remove subscription.
   - Server push helper (`src/lib/push.ts` using `web-push`): send notification (`title`, `category`, `url`), and automatically delete subscriptions returning `410 Gone`.
3. **Wire Push to Publishing:**
   - In `POST /api/admin/posts` and `PATCH /api/admin/posts/[id]`: when post transitions to `PUBLISHED` and `notify = true`, trigger push delivery.
4. **Student Notification UX (`NotificationPrompt`):**
   - Bell / `"Get alerts"` button in navbar/banner.
   - **Never auto-prompt on page load** — ask browser permission only after user taps `"Get alerts"`.
   - Show toast `"Alerts on"` when granted, browser-settings help text if blocked, and `"Add to Home Screen first"` hint on iOS Safari.
   - Handle `notificationclick` inside `sw.js` to open the post URL.

**Verify Step 7:** Subscribe on Android Chrome / Desktop Chrome (and installed iOS PWA), publish a test post with `"Notify"` enabled, and confirm the notification arrives and opens the post.

---

## Step 8: Security Hardening, Content Seeding & Public Launch

**Goal:** Harden the production app, verify every checklist item, add real updates, and share with students.

1. **Security & Abuse Protection (`TRD.md` Section 11):**
   - Add rate limiting on `/api/auth/*` (login) and public APIs (`/api/posts`, `/api/push/*`).
   - Ensure all markdown/rich-text post content is sanitized before rendering (prevent XSS).
   - Audit every admin API route for strict `ADMIN` vs `EDITOR` checks, Zod validation, secure cookies, and no leaked secrets.
2. **Accessibility & Mobile QA (`UI_UX_BRIEF.md` Section 8):**
   - Check contrast ratio (≥4.5:1), keyboard focus rings, form labels, image alt text, reduced motion, and 360px mobile layout.
3. **Production Database & Env Check:**
   - Run `prisma migrate deploy` against Neon `main` branch and `prisma db seed` once for production Admin & Editor accounts.
   - Configure custom domain (optional) and privacy-friendly analytics (e.g., Vercel Analytics).
4. **Seed Real Launch Content:**
   - With your friend, publish **20–30 real, accurate student updates** (Himachal Pradesh + All India exams, jobs, forms, scholarships, rooms/PGs) before announcing.
5. **Launch & Feedback:**
   - Share with college friends/groups, collect feedback, and monitor Vercel/Neon/Cloudinary free-tier usage.

**Verify Step 8:** All `lint`, `typecheck`, and `test` checks pass; TRD security checklist complete; 20–30 real posts live; students are actively browsing on mobile.

---

## Step 9: Post-Launch Backlog (Future Phases)

Do **not** build these during MVP (`PRD.md` Section 5 & `IMPLEMENTATION_PLAN.md` Phase 8); tackle them only after launch feedback:

- Hindi language support (UI & post translations)
- Room/PG owner submission form with Admin approval flow
- Dedicated `RoomListing` table with rent filter and photo gallery
- Dark mode
- Student bookmarks (lightweight identity)
- `AuditLog` table for tracking admin/editor actions
- Expanded states/colleges & WhatsApp/Telegram channel integration

---

## Daily Working Checklist (Every Coding Session)

From `IMPLEMENTATION_PLAN.md` and `ai.md`:

1. Read `ai.md` (and the doc for the current step) before starting.
2. Never add a library or change a locked decision without confirming first.
3. Keep every change passing:
   - `npm run lint`
   - `npm run typecheck`
   - `npm test`
4. Verify mobile width (360px+) and laptop width.
5. Update `ai.md` Sections 6 & 7 at the end of every session.

