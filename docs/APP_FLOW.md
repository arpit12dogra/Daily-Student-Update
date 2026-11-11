# App Flow

**Project:** StudentUpdates (working title)
**Version:** 1.0 | **Date:** 2026-11-11

This file describes how users move through the app, screen by screen.

---

## 1. Sitemap

```
PUBLIC
/                       Home: Latest Updates feed
/category/[slug]        Category feed (exams, govt-jobs, ...)
/post/[slug]            Post detail
/search                 Search results with filters
/about                  About and contact
/offline                Offline fallback (PWA)

ADMIN (login required)
/admin/login            Login
/admin                  Dashboard
/admin/posts            All posts (list, filters)
/admin/posts/new        Create post
/admin/posts/[id]/edit  Edit post
/admin/users            (Admin only, optional later)
```

## 2. Student Flow (no login)

```
Open site (link, Google, WhatsApp share, or installed PWA)
        |
        v
Home: Latest Updates (last 30 days, newest first)
        |
        +--> Tap category chip ----------> Category feed
        |
        +--> Use search bar -------------> Search results
        |
        +--> Open Filters (category / state / date range)
        |
        +--> Tap a post card ------------> Post detail
                                              |
                                              +--> Open official link (new tab)
                                              +--> Download attachment
                                              +--> Share (WhatsApp, copy link)
                                              +--> Back to feed
```

### 2.1 Finding older posts

```
Home --> Filters --> Date range:
      [Last 1 month (default)]
      [1 to 2 months ago]
      [2 to 3 months ago]
      [Older than 3 months]
      [Custom range]
        |
        v
Results include ARCHIVED posts when the range goes past 30 days
```

### 2.2 Enabling notifications (optional)

```
Tap "Get alerts" --> Browser permission prompt
      |-- Allowed --> Subscription saved --> Toast: "Alerts on"
      `-- Blocked --> Show help text: how to enable in browser settings
```

On iPhone: show a hint to "Add to Home Screen" first.

### 2.3 Installing the PWA

```
Visit site a few times --> "Install app" banner or button
      --> Add to home screen --> Opens full screen like an app
```

## 3. Admin / Editor Flow

### 3.1 Login

```
/admin/login
   Enter email + password
      |-- Valid --> /admin (dashboard)
      `-- Invalid --> Error message (rate limited after repeated failures)
```

There is no signup and no forgot-password page at MVP. Reset is done by Admin through a script or database update.

### 3.2 Dashboard

Shows: total posts, drafts, published today, archived count, quick "New post" button, and the latest 10 posts.

### 3.3 Create a post

```
/admin/posts/new
   Fill form:
     Title*, Category*, State* (or All India), Summary*,
     Content*, Last date (optional), Official link (optional),
     Attachments (optional), "Notify subscribers" toggle
        |
        +--> Save as Draft  --> appears in list as DRAFT
        |
        `--> Publish        --> status PUBLISHED, publishedAt = now
                                  |
                                  +--> If notify is on: send web push
                                  `--> Redirect to post list with success toast
```

### 3.4 Edit a post

```
Post list --> Edit --> Change fields --> Save
   (Editor and Admin can both edit)
```

### 3.5 Delete a post (Admin only)

```
Post list --> Delete button (visible to Admin only)
        --> Confirmation dialog ("This cannot be undone")
        --> Confirm --> Post and attachments removed
```

Editor does not see the delete button, and the API rejects the request even if called directly.

### 3.6 Archive (Admin, manual) and auto-archive

```
Automatic:  Daily cron --> PUBLISHED posts older than 30 days --> ARCHIVED
Manual:     Post list --> Archive / Unarchive (Admin)
```

## 4. Post Lifecycle

```
          create
            |
         [DRAFT] ----publish----> [PUBLISHED] ---30 days (cron)---> [ARCHIVED]
            |                          |                                |
            `-------- Admin delete (manual, any state) ----------------'
```

## 5. System Flows

### 5.1 Daily cron

```
Vercel Cron (once a day)
   --> GET /api/cron/archive (with secret)
   --> Update status for posts older than 30 days
   --> Return count archived
```

### 5.2 Push on publish

```
Publish with notify ON
   --> Load all push subscriptions
   --> Send notification (title, category, URL)
   --> Remove subscriptions that return 410 Gone
```

### 5.3 File upload

```
Admin picks file --> Client asks /api/admin/upload/sign
   --> Browser uploads directly to Cloudinary
   --> Returns URL --> Saved with the post as Attachment
```

## 6. Edge Cases and States

| Situation | Behavior |
|-----------|----------|
| No posts in a category | Friendly empty state: "No updates yet" |
| Search finds nothing | Suggest clearing filters or trying other words |
| Post "last date" passed | Show "Expired" badge. Post stays visible |
| Last date within 3 days | Show "Closing soon" badge |
| Post not found or deleted | 404 page with link back to Home |
| Slow or no network | PWA shows cached shell or offline page |
| Editor tries admin-only action | 403 error with a clear message |
| Admin session expired | Redirect to login, return to the same page after |
| Upload fails or file too large | Inline error, form data is kept |

## 7. Role Summary

| Screen / Action | Student | Editor | Admin |
|-----------------|:------:|:------:|:-----:|
| Read feed, search, filter | Yes | Yes | Yes |
| Enable alerts, install PWA | Yes | Yes | Yes |
| Dashboard | No | Yes | Yes |
| Create and edit posts | No | Yes | Yes |
| Delete posts | No | No | Yes |
| Archive and unarchive | No | No | Yes |
