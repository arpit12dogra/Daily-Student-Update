# Implementation Plan

**Project:** StudentUpdates (working title)
**Version:** 1.0 | **Date:** 2026-11-11
**Deadline:** None. Work is organized in phases, finished in order.

Build order you asked for: **backend and APIs first, then frontend connected to the backend, with the database set up at the start of the backend work** (the API needs a database to run). Each phase ends with something you can run and check.

---

## Phase 0: Project Setup

- [ ] Create the GitHub repo and add the 7 `.md` files (docs folder plus `ai.md` in the root)
- [ ] `create-next-app` with TypeScript, Tailwind CSS, ESLint, App Router, `src/` folder
- [ ] Add Prettier, Vitest, and npm scripts: `lint`, `typecheck`, `test`
- [ ] Create a Neon project (main branch plus a dev branch), copy the connection strings
- [ ] Create `.env.local` and `.env.example`
- [ ] Connect the repo to Vercel, add env vars, check the first deploy

**Done when:** a blank Next.js page is live on a Vercel URL.

## Phase 1: Database (Prisma and Neon)

- [ ] Install Prisma, write `schema.prisma` as in BACKEND_SCHEMA.md
- [ ] First migration, then the custom full-text search migration
- [ ] Prisma client singleton in `lib/prisma.ts`
- [ ] `lib/states.ts` constants and category label helpers
- [ ] Seed script for Admin and Editor accounts
- [ ] A few dummy posts for development

**Done when:** `prisma studio` shows the tables, the seed data and the search index.

## Phase 2: Backend (Route Handlers and Auth)

- [ ] Zod schemas (`schemas/post.ts`, query schema)
- [ ] Auth.js Credentials provider, JWT session with the `role` field
- [ ] Middleware to protect `/admin/*` and `/api/admin/*`
- [ ] Role guard helper (`requireRole("ADMIN")`)
- [ ] Public APIs: `GET /api/posts` (filters, search, date range, pagination) and `GET /api/posts/[slug]`
- [ ] Admin APIs: create, update, delete (Admin only), archive
- [ ] Slug generator
- [ ] Standard error response format
- [ ] Vitest tests: schemas, date range helper, role guard
- [ ] Test every endpoint with a REST client (Thunder Client, Postman or curl)

**Done when:** all APIs work in the REST client, and an Editor token gets 403 on delete.

## Phase 3: Public Frontend (connected to the APIs)

- [ ] Base layout, navbar, footer, theme tokens in Tailwind
- [ ] Home page: Latest Updates feed (server component)
- [ ] PostCard component with badges (New, Closing soon, Expired)
- [ ] Category chips and category pages
- [ ] Filter panel (category, state, date range), kept in the URL query string
- [ ] Search page and search bar
- [ ] Post detail page with attachments and share button
- [ ] Skeleton, empty and error states
- [ ] TanStack Query for filter and load-more interactions
- [ ] SEO: metadata, Open Graph tags, `sitemap.xml`, `robots.txt`
- [ ] Test on a real phone and on a laptop

**Done when:** a student can browse, filter, search and read posts end to end.

## Phase 4: Admin Panel

- [ ] Login page
- [ ] Dashboard with stat tiles
- [ ] Post list with search and filters, and a status badge
- [ ] Create and edit form (React Hook Form with the Zod resolver)
- [ ] Draft and publish buttons
- [ ] Delete button with a confirmation dialog, **visible to Admin only**
- [ ] Archive and unarchive (Admin)
- [ ] Cloudinary signed upload, file validation, remove attachment
- [ ] Give the friend his Editor login and test the full posting flow with him

**Done when:** your friend can log in, publish a post, and see it live. He cannot delete.

## Phase 5: Automation and PWA

- [ ] `/api/cron/archive` with `CRON_SECRET`
- [ ] `vercel.json` cron schedule (daily)
- [ ] Test archive logic with old dummy posts
- [ ] `manifest.webmanifest`, icons, service worker, offline page
- [ ] Install prompt component
- [ ] Lighthouse check for PWA and performance

**Done when:** old posts archive by themselves, and the site installs on a phone.

## Phase 6: Web Push Notifications

- [ ] Generate VAPID keys, add to env
- [ ] "Get alerts" button, permission flow, subscribe and unsubscribe APIs
- [ ] Send push on publish when "Notify" is on
- [ ] Clean up expired subscriptions (410 Gone)
- [ ] Test on Android Chrome, desktop Chrome, and installed iOS PWA

**Done when:** publishing a post sends a notification to a subscribed phone.

## Phase 7: Hardening and Launch

- [ ] Rate limiting on login and public APIs
- [ ] Sanitize post content output
- [ ] Security pass using the TRD checklist
- [ ] Accessibility pass (contrast, labels, focus)
- [ ] Add 20 to 30 real posts before announcing
- [ ] Custom domain (optional)
- [ ] Basic analytics (Vercel Analytics or a privacy friendly alternative)
- [ ] Share with college friends and collect feedback

**Done when:** the site is public with real content and the first feedback is collected.

## Phase 8: After Launch (Backlog)

- Hindi language support
- Room/PG owner submissions with approval flow
- Dedicated `RoomListing` table with rent filter and photos
- Dark mode
- Bookmarks (would need a lightweight student identity)
- Expand states and colleges, Telegram or WhatsApp channel link
- `AuditLog` for admin actions

---

## Suggested Working Rhythm (2 people)

| Person | Focus |
|--------|-------|
| Arpit | Phases 0 to 7 (frontend, backend, database, deployment) |
| Friend | Collect and prepare content, test the admin panel from Phase 4 onward, then post daily |

## Definition of Done (for every task)

1. Code passes `lint`, `typecheck` and `test`.
2. Works on mobile width and laptop width.
3. Admin routes verified for role access.
4. `ai.md` updated with what was done and what is pending.

## Risks to Watch

| Risk | Plan |
|------|------|
| Neon free database sleeps (slow first request) | Accept for MVP, or use light keep-alive and pooled connections |
| Prisma and serverless connections | Use pooled `DATABASE_URL` and the singleton client |
| Web push gaps on iPhone | Treat as a bonus feature |
| Content stops because posting is slow | Keep the admin form simple and fast |
| Free tier limits | Compress images and check usage monthly |
