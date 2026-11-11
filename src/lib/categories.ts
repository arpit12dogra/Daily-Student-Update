export const CATEGORIES = [
  {
    key: "EXAM",
    slug: "exams",
    label: "Exams",
    color: "blue",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    key: "GOVT_JOB",
    slug: "govt-jobs",
    label: "Government Jobs",
    color: "green",
    badgeClass: "bg-green-100 text-green-800 border-green-200",
  },
  {
    key: "PRIVATE_JOB",
    slug: "private-jobs",
    label: "Private Jobs",
    color: "purple",
    badgeClass: "bg-purple-100 text-purple-800 border-purple-200",
  },
  {
    key: "FORM",
    slug: "forms",
    label: "Forms / Applications",
    color: "teal",
    badgeClass: "bg-teal-100 text-teal-800 border-teal-200",
  },
  {
    key: "COLLEGE_INFO",
    slug: "college-info",
    label: "College Info",
    color: "orange",
    badgeClass: "bg-orange-100 text-orange-800 border-orange-200",
  },
  {
    key: "RESULT",
    slug: "results",
    label: "Results",
    color: "indigo",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  {
    key: "ADMIT_CARD",
    slug: "admit-cards",
    label: "Admit Cards",
    color: "pink",
    badgeClass: "bg-pink-100 text-pink-800 border-pink-200",
  },
  {
    key: "SCHOLARSHIP",
    slug: "scholarships",
    label: "Scholarships",
    color: "amber",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    key: "ROOM_PG",
    slug: "rooms-pg",
    label: "Rooms / PG",
    color: "slate",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-200",
  },
] as const;

export type CategoryKey = (typeof CATEGORIES)[number]["key"];
export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export function getCategoryByKey(key: string) {
  return CATEGORIES.find((c) => c.key === key);
}

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

