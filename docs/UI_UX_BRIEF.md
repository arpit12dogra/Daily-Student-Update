# UI/UX Design Brief

**Project:** StudentUpdates (working title)
**Version:** 1.0 | **Date:** 2026-11-11

---

## 1. Design Goals

1. **Fast to scan.** Students open the site, glance at the newest items, and leave.
2. **Mobile first.** Most users are on phones with average networks.
3. **Zero learning curve.** No login, no menus to figure out.
4. **Trustworthy.** Clear dates, official links, and clean look.
5. **Light.** Small images, little animation, fast loading.

## 2. Design Principles

- Content first: the post title and last date are the most visible things on every card.
- One primary action per screen.
- Large tap targets (minimum 44px).
- Consistent category colors so students learn them quickly.
- Plain English, short labels. Prepared for Hindi later (no text baked into images, room for longer text).

## 3. Visual Style

| Item | Direction |
|------|-----------|
| Mood | Clean, friendly, academic. Not cluttered like typical job portals |
| Primary color | A calm blue or indigo (trust, education). Final shade to be picked in build |
| Accent | Orange or amber for "Closing soon", red for "Expired", green for "New" |
| Background | Light neutral (off-white) with white cards. Dark mode is a later enhancement |
| Typography | One clean sans-serif (e.g., Inter or system font stack). Title 18 to 20px on mobile, body 16px |
| Corners and shadows | Rounded cards (8 to 12px), very soft shadows |
| Icons | One icon set only (e.g., Lucide) |

### Category colors (suggested)

| Category | Color idea |
|----------|-----------|
| Exams | Blue |
| Private Jobs | Purple |
| Government Jobs | Green |
| Forms / Applications | Teal |
| College Info | Orange |
| Results | Indigo |
| Admit Cards | Pink |
| Scholarships | Amber |
| Rooms / PG | Brown or slate |

Never rely on color alone. Always show the category name as text on the chip.

## 4. Layout and Breakpoints

| Breakpoint | Layout |
|------------|--------|
| Mobile (< 640px) | Single column feed, sticky top bar, horizontal scrolling category chips, filter in a bottom sheet |
| Tablet (640 to 1024px) | Two-column card grid |
| Laptop (> 1024px) | Left or top filter panel, main feed column (or 2 to 3 column grid), optional sidebar with "Closing soon" |

Mobile bottom navigation (optional): Home, Categories, Search, Alerts.

## 5. Screen Specifications

### 5.1 Home (Latest Updates)

- **Top bar:** logo or name, search icon, "Get alerts" bell.
- **Category chips:** All, Exams, Govt Jobs, Private Jobs, Forms, Results, Admit Cards, Scholarships, College, Rooms/PG. Horizontally scrollable.
- **Filter button:** opens state and date range options.
- **Feed:** list of post cards, newest first. "Load more" button or infinite scroll.
- **Footer:** about, contact, small disclaimer.

### 5.2 Post Card

```
+--------------------------------------------------+
| [Category chip]                 [NEW] / [Badge]   |
| Post title, up to 2 lines                         |
| Short summary, up to 2 lines                      |
| State | Posted: 11 Nov 2026 | Last date: 30 Nov   |
+--------------------------------------------------+
```

Badges: `New` (posted in last 48 hours), `Closing soon` (last date within 3 days), `Expired`.

### 5.3 Post Detail

- Back button and share button at the top.
- Category chip, title, posted date, state.
- Highlighted info box: **Last date**, official link button ("Open official website"), attachments.
- Body content with readable headings, lists and links.
- "Related updates" (same category) at the bottom.
- Sticky bottom action on mobile: **Open official link** (when available).

### 5.4 Search and Filters

- Search box with clear button and recent search suggestion (local storage, optional).
- Filter panel: Category (multi or single), State (dropdown with search), Date range (radio list: Last 1 month, 1 to 2 months ago, 2 to 3 months ago, Older, Custom).
- Show active filters as removable chips above results.
- "Reset filters" link.
- Result count shown ("24 updates found").

### 5.5 Admin Login

- Simple centered card, email and password, show/hide password, clear error text.

### 5.6 Admin Dashboard

- Stat tiles (Total, Published, Drafts, Archived).
- Prominent **+ New Post** button.
- Recent posts table with status badges.

### 5.7 Admin Post List

- Table on laptop, cards on mobile.
- Search, status filter, category filter.
- Row actions: Edit (both), Delete (Admin only, red, with confirmation), Archive (Admin).

### 5.8 Admin Post Form

- Single page form with clear sections: Basics, Content, Dates and Links, Attachments, Publishing.
- Live character counter for summary.
- Inline validation messages from Zod.
- Buttons: **Save draft**, **Publish**. "Notify subscribers" toggle near Publish.
- Autosave draft locally to avoid losing work (nice to have).

## 6. Components Library

Button, Chip, Badge, PostCard, FilterSheet, SearchBar, CategoryBar, EmptyState, Skeleton loader, Toast, ConfirmDialog, Pagination or LoadMore, FormField, FileUploader, Navbar, Footer, InstallPrompt, NotificationPrompt.

## 7. States and Feedback

| State | Design |
|-------|--------|
| Loading | Skeleton cards, not spinners |
| Empty | Friendly message and a reset or browse action |
| Error | Plain message with retry |
| Success | Short toast after publish or save |
| Destructive action | Confirmation dialog naming the post being deleted |

## 8. Accessibility

- Contrast ratio at least 4.5:1 for body text.
- Visible keyboard focus, labels on all inputs, alt text on images.
- Respect reduced motion settings.
- Don't use color alone for meaning.

## 9. Performance Guidelines (UX related)

- Use responsive images and lazy loading (Next.js image component).
- Keep initial JS small. Load admin code only on admin routes.
- Show content before JS finishes (server rendering).
- Target Lighthouse mobile score above 90 for performance.

## 10. PWA and Notification UX

- Install prompt appears after a few visits, never on the first one, and is easy to dismiss.
- Notification permission is asked only after the user taps "Get alerts".
- Offline page explains the situation and shows previously cached posts if possible.

## 11. Content Guidelines (for admins)

- Titles: short and specific, e.g. "HPPSC Clerk Recruitment 2026: Apply by 30 Nov".
- Always add the last date and the official link where one exists.
- Summary in 1 to 2 lines, written for quick reading.
- Images should be compressed and relevant.

## 12. Future UI Ideas (not in MVP)

Dark mode, Hindi language switch, bookmarks, "Closing soon" widget on home, room/PG cards with photo gallery and rent filter.
