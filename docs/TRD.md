# Technical Requirements Document (TRD)

**Project:** StudentUpdates (working title)
**Version:** 1.0 | **Date:** 2026-11-11

---

## 1. Architecture Overview

A single **Next.js (App Router) full-stack application** deployed on Vercel. The UI is server-rendered for SEO and speed, the backend is Next.js **route handlers**, and data lives in **Neon PostgreSQL** via **Prisma**.

```
 Student (mobile / laptop, PWA)
            |
            v
   Vercel (Next.js App Router)
   |-- Server Components  (public pages, SEO)
   |-- Client Components  (filters, forms)
   |-- Route Handlers     (/api/...)
   |-- Vercel Cron        (daily archive job)
            |
     +------+---------------+----------------+
     |                      |                |
 Neon PostgreSQL      Cloudinary        Web Push service
 (Prisma ORM)         (images, PDFs)    (browser push servers)
```

## 2. Tech Stack

### 2.1 Core (chosen by you)

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) with React |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Backend | Next.js Route Handlers |
| Validation | Zod |
| Database | PostgreSQL |
| ORM | Prisma |
| Hosting | Vercel (free tier) |

### 2.2 Approved additions

| Tool | Purpose |
|------|---------|
| Auth.js (NextAuth) | Admin and Editor login, role checks |
| Neon | Hosted PostgreSQL (free tier) |
| Cloudinary | Image and PDF uploads (UploadThing is the fallback option) |
| React Hook Form (+ Zod resolver) | Admin forms |
| TanStack Query | Client-side fetching, caching, filter state |
| PostgreSQL full-text search | Keyword search with no extra service |
| PWA (service worker + manifest) | Installable app, offline shell |
| Web Push (`web-push` library, VAPID keys) | Opt-in notifications |
| Vercel Cron | Daily auto-archive of old posts |
| ESLint, Prettier, Vitest | Code quality and tests |

### 2.3 Small helper libraries (suggested, not yet approved)

These are minor. Say no to any and it will be dropped.

| Library | Why |
|---------|-----|
| `bcryptjs` | Password hashing for the 2 accounts |
| `date-fns` | Date range math for filters |
| A markdown or simple rich text editor for post content | Easy formatting for admins |

## 3. Key Technical Decisions

| # | Decision | Reason |
|---|----------|--------|
| 1 | Single Next.js app (not separate frontend and backend) | One deploy, one repo, simpler for a 2-person team |
| 2 | Server Components for public pages | Fast first load and good SEO |
| 3 | Auth.js Credentials provider with 2 seeded users | No signup flow needed |
| 4 | Role stored on user: `ADMIN` or `EDITOR` | Simple role-based access control |
| 5 | Category as a Prisma **enum** | Simple for MVP. Adding one means a small migration |
| 6 | PostgreSQL `tsvector` column with GIN index for search | Free, fast, no extra service |
| 7 | Archive via a status flag, not by moving data | Old posts stay searchable through date filters |
| 8 | Posts are never auto-deleted | Matches product rule. Admin deletes manually |
| 9 | Cloudinary for files | Vercel's filesystem is not persistent |
| 10 | Prisma singleton client + Neon pooled connection string | Avoids connection exhaustion in serverless |

## 4. Authentication and Authorization

- Auth.js with Credentials provider (email + password), JWT session strategy.
- Passwords hashed with bcrypt. No public registration route exists.
- Two users are created with a **seed script**.
- Route protection using middleware for `/admin/*` and role checks inside each API handler (never trust the UI alone).

| Action | Public | Editor | Admin |
|--------|--------|--------|-------|
| Read published and archived posts | Yes | Yes | Yes |
| View drafts | No | Yes | Yes |
| Create and edit posts | No | Yes | Yes |
| Delete posts | No | **No** | **Yes** |
| Archive and unarchive | No | No | Yes |
| Manage users | No | No | Yes |

## 5. API Design (Route Handlers)

Base path: `/api`. All inputs are validated with Zod. Responses are JSON.

### Public

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/posts` | List posts. Query: `category`, `state`, `q`, `range`, `from`, `to`, `page`, `limit` |
| GET | `/api/posts/[slug]` | Single post |
| POST | `/api/push/subscribe` | Save a push subscription |
| POST | `/api/push/unsubscribe` | Remove a push subscription |

### Admin / Editor (authenticated)

| Method | Route | Role | Purpose |
|--------|-------|------|---------|
| POST | `/api/admin/posts` | Admin, Editor | Create |
| PATCH | `/api/admin/posts/[id]` | Admin, Editor | Update |
| DELETE | `/api/admin/posts/[id]` | **Admin** | Delete |
| POST | `/api/admin/posts/[id]/archive` | Admin | Archive or unarchive |
| GET | `/api/admin/posts` | Admin, Editor | Dashboard list (includes drafts) |
| POST | `/api/admin/upload/sign` | Admin, Editor | Signed Cloudinary upload params |

### System

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/cron/archive` | Vercel Cron: archive posts older than 30 days. Protected by `CRON_SECRET` |

## 6. Search and Filters

- **Keyword:** `to_tsvector('english', title || summary || content)` stored in a generated or trigger-maintained column, GIN index, queried with `websearch_to_tsquery`.
- **Category / State:** indexed columns.
- **Date range:** based on `publishedAt`.
  - Default feed: `status = PUBLISHED` (last 30 days).
  - Range beyond 30 days includes `ARCHIVED` posts.
- **Pagination:** cursor or page-based, 10 to 20 items per page, infinite scroll or "Load more" on mobile.

## 7. Auto-Archive (Vercel Cron)

- Schedule: once daily (the Hobby plan allows daily cron).
- Job: set `status = ARCHIVED`, `archivedAt = now()` for posts where `status = PUBLISHED` and `publishedAt < now() - 30 days`.
- Endpoint verifies the `Authorization: Bearer CRON_SECRET` header.
- No deletion happens in this job.

## 8. Push Notifications

- Browser asks permission only after a user taps "Enable alerts" (no auto prompt).
- Subscriptions are stored in `PushSubscription` (endpoint plus keys).
- When a post is published with "notify" on, the server sends a push with title, category and link.
- Subscriptions that return `410 Gone` are removed automatically.
- Requires VAPID keys in environment variables. On iPhone, push works only when the PWA is installed to the home screen.

## 9. PWA

- `manifest.webmanifest` (name, icons, theme color, `display: standalone`).
- Service worker: cache app shell and static assets. Never cache admin or API responses blindly.
- Offline fallback page.

## 10. File Uploads

- Direct browser to Cloudinary upload using a **signed** request from our API.
- Limits: images up to 2 MB (auto-compressed), PDFs up to 5 MB (adjustable).
- Allowed types only: JPG, PNG, WebP, PDF.
- Store the URL, type and size in the `Attachment` table.

## 11. Security Checklist

- Zod validation on every route, server side.
- Role checks in every admin handler.
- Rate limiting on the login route and public APIs (e.g., Upstash Ratelimit or a simple in-DB or in-memory limiter).
- Sanitize rich text or markdown output (prevent XSS).
- Secure cookies, `NEXTAUTH_SECRET`, HTTPS only.
- No secrets in the repo. Use Vercel environment variables.
- Parameterized queries only (Prisma handles this).

## 12. Environment Variables

```
DATABASE_URL=            # Neon pooled connection
DIRECT_URL=              # Neon direct connection (for migrations)
NEXTAUTH_URL=
NEXTAUTH_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
VAPID_PUBLIC_KEY=
VAPID_PRIVATE_KEY=
VAPID_SUBJECT=           # mailto: address
CRON_SECRET=
```

## 13. Testing Strategy

- **Vitest** for unit tests: Zod schemas, date range helper, role guard, archive logic.
- Integration tests for key API handlers against a test database or branch.
- Manual checklist on a real phone before each release.

## 14. Deployment and CI

- GitHub repository, Vercel auto-deploys on push to `main`. Preview deploys for branches.
- Neon database branches can be used for preview and testing.
- Run `lint`, `typecheck` and `test` before merging (GitHub Actions, optional).
- Prisma migrations via `prisma migrate deploy` in the build step.

## 15. Free Tier Watch-list

| Service | Limit to watch |
|---------|----------------|
| Vercel Hobby | Bandwidth, function invocations, non-commercial use |
| Neon Free | Storage size, compute hours (database may sleep and cold start) |
| Cloudinary Free | Monthly credits for storage and bandwidth |

## 16. Folder Structure (planned)

```
/
|-- prisma/
|   |-- schema.prisma
|   |-- migrations/
|   `-- seed.ts
|-- public/            (icons, manifest, sw.js)
|-- src/
|   |-- app/
|   |   |-- (public)/        (home, post/[slug], search)
|   |   |-- admin/           (login, dashboard, posts)
|   |   `-- api/             (route handlers)
|   |-- components/
|   |-- lib/                 (prisma, auth, cloudinary, push, utils)
|   |-- schemas/             (Zod schemas)
|   `-- types/
|-- tests/
|-- ai.md
`-- docs/ (PRD, TRD, APP_FLOW, UI_UX_BRIEF, BACKEND_SCHEMA, IMPLEMENTATION_PLAN)
```
