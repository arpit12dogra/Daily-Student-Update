export function generateBaseSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateUniqueSlug(title: string, suffix?: string): string {
  const base = generateBaseSlug(title);
  const randomSuffix = suffix || Math.random().toString(36).substring(2, 6);
  return `${base}-${randomSuffix}`;
}

