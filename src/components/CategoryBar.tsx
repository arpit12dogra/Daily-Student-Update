"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";

export default function CategoryBar() {
  const pathname = usePathname();

  const isAllActive = pathname === "/" || pathname === "/search";

  return (
    <div className="w-full overflow-x-auto scrollbar-none py-2 border-b border-slate-200 bg-white">
      <div className="max-w-4xl mx-auto px-4 flex items-center gap-2 min-w-max">
        <Link
          href="/"
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
            isAllActive
              ? "bg-slate-900 text-white shadow-sm"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          All Updates
        </Link>

        {CATEGORIES.map((cat) => {
          const isActive = pathname === `/category/${cat.slug}`;
          return (
            <Link
              key={cat.key}
              href={`/category/${cat.slug}`}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition border ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : `${cat.badgeClass} hover:opacity-90`
              }`}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

