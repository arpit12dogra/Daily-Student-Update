# ai.md: AI Working Log and Project Memory

> **Purpose:** Single source of truth for the AI assistant. Read this file first in every new session. It records decisions, daily work, enhancements, and pending tasks. Update it at the end of every working session.

**Project:** StudentUpdates (working title, not final)  
**Owner:** Arpit Dogra (Main Admin, builds frontend, backend and database)  
**Content partner:** Friend (Editor, only posts content)  
**Created:** 2026-11-11  

---

## 1. Project Summary

A website where students read daily updates: exams, private jobs, government jobs, forms/applications, college info, results, admit cards, scholarships, and room/PG availability. Students do **not** log in. Only 2 accounts exist (Admin and Editor) and they publish all content.

Audience: college students in Himachal Pradesh first, all India later. Mobile first, works on laptop too.

## 2. Doc Index

| File | Contents |
|------|----------|
| `docs/PRD.md` | Product goals, users, features, rules, phases |
| `docs/TRD.md` | Architecture, stack, APIs, security, deployment |
| `docs/APP_FLOW.md` | Screens, user flows, post lifecycle, edge cases |
| `docs/UI_UX_BRIEF.md` | Visual style, layouts, components, accessibility |
| `docs/BACKEND_SCHEMA.md` | Prisma schema, search SQL, queries, Zod schemas |
| `docs/IMPLEMENTATION_PLAN.md` | Phased task checklist from setup to launch |
| `work_steps.md` | Sequential step-by-step master execution guide |
| `ai.md` | This log |

## 3. Locked Decisions

| Topic | Decision |
|-------|----------|
| Student login | None. Read-only public site |
| Roles | `ADMIN` (Arpit) and `EDITOR` (friend) only |
| Editor permissions | Create and edit posts. **Cannot delete** |
| Admin permissions | Everything, including **delete** (button with confirmation) and archive |
| Categories | Exam, Private Job, Govt Job, Form, College Info, Result, Admit Card, Scholarship, Room/PG |
| Room/PG | Admin or Editor posts "room available" as normal posts. No owner submissions for now |
| Language | English only at launch. Hindi later, based on demand |
| Home page | Dynamic "Latest Updates" feed |
| Old posts | Never auto-deleted. Auto-archived after 30 days (hidden from Latest feed, still reachable) |
| Finding old posts | Date range filter: last 1 month, 1 to 2 months, 2 to 3 months, older, custom |
| Deletion | Manual, Admin only. Keep posts at least 3 to 4 months |
| Notifications | No email. Web push (opt-in) when publishing |
| Deadline | No fixed MVP deadline. Phase by phase |
| Hosting | Vercel free tier |

## 4. Tech Stack

**Core:** Next.js 16 (App Router), React 19, TypeScript (strict mode), Tailwind CSS, Next.js Route Handlers, Zod, PostgreSQL (Neon), Prisma 6.4.1, Vercel.

**Approved additions:** Auth.js (NextAuth), Neon (Postgres), Cloudinary, React Hook Form, TanStack Query, PostgreSQL search, PWA (Manifest & Service Worker), Web Push, Vercel Cron, ESLint, Prettier, Vitest, bcryptjs, date-fns.

## 5. Daily Log

### 2026-11-11 (Session 2 - Full App Implementation)

**Done**
- Created [`work_steps.md`](file:///e:/daily%20student%20updates/work_steps.md) breaking down the entire project into steps 0 to 9.
- Cleanly scaffolded Next.js App Router with TypeScript, Tailwind CSS, ESLint, and `src/` layout.
- Configured `.env.example` and generated cryptographically secure 32-byte hex keys for `NEXTAUTH_SECRET` and `CRON_SECRET` in `.env.local`.
- Created Prisma schema (`prisma/schema.prisma`) with `User`, `Post`, `Attachment`, `PushSubscription` models, indexes, and relations.
- Generated Prisma 6.4.1 client and configured connection pooling singleton (`src/lib/prisma.ts`).
- Created shared constants & utilities: `src/lib/states.ts` (all Indian states + "All India"), `src/lib/categories.ts` (9 categories + badges), `src/lib/slug.ts`, `src/lib/date-range.ts`, `src/lib/api-response.ts`.
- Created database seed script (`prisma/seed.ts`) with Admin and Editor accounts plus sample updates.
- Implemented Auth.js Credentials provider with bcrypt (`src/lib/auth.ts`) and role types (`src/types/next-auth.d.ts`).
- Implemented role-based route protection middleware (`src/middleware.ts`) and guard helpers (`src/lib/auth-guard.ts`).
- Built all 9 API Route Handlers:
  - `GET /api/posts` (search, date-range, state & "All India" inclusion, pagination)
  - `GET /api/posts/[slug]` (full detail, attachments, related updates)
  - `GET /api/admin/posts` & `POST /api/admin/posts` (draft/publish, slug generation)
  - `GET /api/admin/posts/[id]` & `PATCH /api/admin/posts/[id]`
  - `DELETE /api/admin/posts/[id]` (**Admin only**, rejects Editor with 403)
  - `POST /api/admin/posts/[id]/archive` (**Admin only**)
  - `POST /api/admin/upload/sign` (Cloudinary signature)
  - `GET /api/cron/archive` (Vercel cron 30-day auto-archive)
  - `POST /api/push/subscribe` & `POST /api/push/unsubscribe`
- Built complete Public Student Frontend:
  - `src/components/Navbar.tsx`, `Footer.tsx`, `CategoryBar.tsx`, `PostCard.tsx`, `Providers.tsx`
  - `src/app/(public)/page.tsx` (Latest updates feed)
  - `src/app/(public)/category/[slug]/page.tsx` (Category feeds)
  - `src/app/(public)/post/[slug]/page.tsx` (Post detail, official link, WhatsApp share, attachments)
  - `src/app/(public)/search/page.tsx` (Interactive keyword search & multi-facet filters)
  - `src/app/(public)/about/page.tsx` (About & notice submission contacts)
  - `src/app/offline/page.tsx` (PWA offline fallback)
- Built complete Admin & Editor Panel:
  - `src/app/admin/login/page.tsx` (Credentials login)
  - `src/app/admin/page.tsx` (Dashboard with stat tiles & recent updates)
  - `src/app/admin/posts/page.tsx` (Full post management table with Admin-only delete/archive)
  - `src/app/admin/posts/new/page.tsx` (Create post form with live counter & push toggle)
  - `src/app/admin/posts/[id]/edit/page.tsx` (Edit post & status manager)
  - Wired `FileUploader` component with direct-to-Cloudinary signing, PDF/image validation, and attachment lists into both create and edit forms.
  - Added attachment persistence & Cloudinary file cleanup upon deletion in `src/app/api/admin/posts/[id]/route.ts`.
- Step 6 & 7 Built:
  - PWA Web Manifest (`public/manifest.webmanifest`), high-res app icons (`public/icon-192.png`, `public/icon-512.png`), and Service Worker (`public/sw.js`).
  - Web Push dispatcher (`src/lib/push.ts`), auto-cleanup of dead endpoints, push toggle on publish.
- Step 8 Security Hardening & Rate Limiting:
  - Created sliding-window rate limiter in `src/lib/rate-limit.ts` guarding `/api/posts`, `/api/push/subscribe`, and `/api/admin/posts`.
  - Created input sanitization utility in `src/lib/sanitize.ts`.
  - Added unit test suites `tests/rate-limit.test.ts` and `tests/sanitize.test.ts`.
- Verification:
  - `npm test`: 18/18 tests pass across 6 suites.
  - `npm run lint`: 0 errors.
  - `npm run typecheck`: 0 errors.
  - Full production build (`npx next build --webpack`): 24 routes generated and compiled successfully!

**Next steps**
- Connect Neon PostgreSQL (paste connection strings into `.env.local`).
- Run `npx prisma db push` (or `npx prisma migrate dev --name init`) and `npx prisma db seed`.
- Push to GitHub and connect repository to Vercel for live deployment.

## 6. Pending Tasks

- [x] Phase 0: Project setup (Next.js 16, TypeScript, Tailwind, ESLint, Vitest)
- [x] Phase 1: Prisma schema, helpers, seed script
- [x] Phase 2: Backend APIs and auth (all 9 routes + middleware)
- [x] Phase 3: Public frontend (Home, Categories, Post Detail, Search, About)
- [x] Phase 4: Admin panel (Login, Dashboard, List, Create, Edit, FileUploader)
- [x] Phase 5: Cron and PWA (Cron endpoint, vercel.json, manifest, service worker, /offline)
- [x] Phase 6: Web Push notification delivery engine
- [x] Phase 7: Security hardening, rate limiting & input sanitization
- [ ] Connect Neon database strings (`DATABASE_URL`, `DIRECT_URL`)
- [ ] Run initial migration and database seed on Neon
- [ ] Connect repository to Vercel for live deployment
