# Product Requirements Document (PRD)

**Project:** StudentUpdates (working title, rename anytime)
**Version:** 1.0 | **Date:** 2026-11-11
**Owner:** Arpit Dogra (Main Admin, builds everything) | **Content partner:** Friend (Editor)

---

## 1. Vision

One simple website where students find **all daily updates in one place**: exams, jobs, government jobs, forms, results, admit cards, scholarships, college information, and room/PG availability. Students only **read**. Two people **post**. No student login, no signup.

## 2. Problem

- Information is scattered across many websites, WhatsApp groups and Telegram channels.
- Government job and exam notices are hard to find and easy to miss before the last date.
- New students arriving in a city have to travel just to find a room or PG.

## 3. Target Users

| User | Description | Access |
|------|-------------|--------|
| **Student (Reader)** | College students, starting with Himachal Pradesh, then all India. Mostly on mobile, sometimes laptop. | Read-only, no login |
| **Editor** | Friend. Adds posts, news, information. | Login. Can create and edit posts. **Cannot delete.** |
| **Admin** | Arpit. Full control. | Login. Create, edit, **delete**, manage users and settings |

Only **2 accounts** exist (1 Admin, 1 Editor). No public signup.

## 4. Goals

1. Students can see the latest updates within 2 taps of opening the site.
2. Students can find any post by category, state, date range or keyword.
3. Admin and Editor can publish a post in under 2 minutes.
4. Works well on mobile and laptop, and can be installed like an app (PWA).
5. Costs nothing to run at the start (free tiers).

## 5. Non-Goals (for now)

- Student accounts, comments, bookmarks.
- Email notifications.
- Owner submissions for rooms/PGs (admin posts them as news instead).
- Hindi language (planned later, based on demand).
- Payments, ads, or monetisation.

## 6. Content Categories

| Category | Examples |
|----------|----------|
| Exams | Exam dates, syllabus, notifications, exam-related queries |
| Private Jobs | Company openings, walk-ins, internships |
| Government Jobs | Recruitment notices from central and state departments |
| Forms / Applications | Government forms and application windows students can fill |
| College Info | College notices, admissions, events |
| Results | Exam and recruitment results |
| Admit Cards | Hall ticket and admit card releases |
| Scholarships | Scholarship openings and deadlines |
| Rooms / PG | "Room available" posts so new students don't have to travel to search |

New categories should be easy to add later.

## 7. Functional Requirements

### 7.1 Public (Student) side

| ID | Requirement | Priority |
|----|-------------|----------|
| P1 | Home page shows a **Latest Updates** feed (newest first) | Must |
| P2 | Category tabs or chips to filter the feed | Must |
| P3 | Post detail page with title, summary, full content, last date, official link, attachments | Must |
| P4 | Search by keyword (title and content) | Must |
| P5 | Filters: **category, state, date range** | Must |
| P6 | Date range options: Last 1 month (default), 1 to 2 months ago, 2 to 3 months ago, older, custom | Must |
| P7 | State filter, including an "All India" option | Must |
| P8 | Responsive design for mobile and laptop | Must |
| P9 | Installable PWA with fast loading on weak networks | Should |
| P10 | Opt-in web push notification for new posts (no login needed) | Should |
| P11 | "Last date" badge: shows "Closing soon" and "Expired" automatically | Should |
| P12 | Shareable post URLs (good for WhatsApp sharing) with proper previews | Should |

### 7.2 Admin / Editor side

| ID | Requirement | Role | Priority |
|----|-------------|------|----------|
| A1 | Secure login (no signup page) | Both | Must |
| A2 | Create post: title, category, state, summary, content, last date, official link, attachments (PDF/image) | Both | Must |
| A3 | Edit post | Both | Must |
| A4 | Save as draft, publish when ready | Both | Must |
| A5 | **Delete post** | Admin only | Must |
| A6 | Manually archive or unarchive a post | Admin | Should |
| A7 | Post list with search and filters in the dashboard | Both | Must |
| A8 | Upload images and PDFs | Both | Should |
| A9 | Sending a push notification when publishing (toggle) | Both | Should |

### 7.3 Post lifecycle (important rule)

```
DRAFT --publish--> PUBLISHED --(after 30 days, automatic)--> ARCHIVED
                        |                                        |
                        +------------ Admin delete (manual) -----+
```

- Posts are **never auto-deleted**.
- After **1 month**, a post is auto-archived: it disappears from the default "Latest" feed but remains reachable through the date range filters.
- Posts are kept at least **3 to 4 months** without any deletion.
- Only the **Admin** can delete, through a delete button (with a confirmation step).
- An expired "last date" does **not** hide the post. It only shows an "Expired" badge.

## 8. Non-Functional Requirements

| Area | Requirement |
|------|-------------|
| Performance | Home page loads in under 2 seconds on a typical 4G connection |
| Responsiveness | Mobile first, works from 360px width up to desktop |
| Security | Hashed passwords, protected admin routes, input validation on every API |
| Availability | Depends on Vercel and Neon free tiers (acceptable for MVP) |
| SEO | Server-rendered pages, clean URLs, meta tags (students find posts via Google) |
| Accessibility | Readable font sizes, good contrast, keyboard friendly |
| Cost | Rs. 0 at launch (free tiers) |

## 9. Success Metrics (first 3 months)

- Number of posts published per week (target: daily posting habit)
- Weekly visitors and returning visitors
- Search usage and most-used categories
- PWA installs and push subscribers
- Share of traffic from mobile

## 10. Assumptions and Risks

| Risk | Mitigation |
|------|------------|
| Content accuracy (wrong dates or links) | Always include official source link; admin reviews editor posts when needed |
| Free tier limits (DB size, storage, bandwidth) | Compress images, limit attachment size, monitor usage |
| Only 2 people posting, so content can dry up | Make posting fast (simple form, drafts) |
| Web push is not supported on every browser (older iOS) | Treat push as a bonus, not a core feature |
| Vercel Hobby plan is for non-commercial use | Revisit hosting if the site is ever monetised |

## 11. Release Phases (no fixed deadline)

- **Phase 1 (MVP):** Public feed, post detail, categories, search and filters, admin login, create/edit/delete, deployment.
- **Phase 2:** Attachments, archive cron, PWA, SEO and sharing polish.
- **Phase 3:** Web push notifications, analytics, performance tuning.
- **Later:** Hindi, room/PG owner submissions, bookmarks, more states and colleges.

## 12. Open Questions

- Final project name and domain.
- Complete list of states/UTs to show in the filter (default: all Indian states and UTs plus "All India").
- Whether Editor can edit posts created by Admin (default: yes).
