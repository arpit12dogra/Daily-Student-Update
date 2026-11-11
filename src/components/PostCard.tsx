import Link from "next/link";
import { getCategoryByKey } from "@/lib/categories";
import { Calendar, Clock, MapPin } from "lucide-react";

export interface PostCardProps {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  state: string;
  publishedAt?: string | Date | null;
  lastDate?: string | Date | null;
  status?: string;
}

export default function PostCard({
  title,
  slug,
  summary,
  category,
  state,
  publishedAt,
  lastDate,
}: PostCardProps) {
  const cat = getCategoryByKey(category);

  // Badge calculations
  const now = new Date();
  const pubDate = publishedAt ? new Date(publishedAt) : null;
  const deadline = lastDate ? new Date(lastDate) : null;

  const isNew = pubDate && now.getTime() - pubDate.getTime() < 48 * 60 * 60 * 1000;
  const isExpired = deadline && deadline.getTime() < now.getTime();
  const isClosingSoon =
    deadline &&
    !isExpired &&
    deadline.getTime() - now.getTime() <= 3 * 24 * 60 * 60 * 1000;

  const formattedPubDate = pubDate
    ? pubDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  const formattedDeadline = deadline
    ? deadline.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  return (
    <article className="group bg-white rounded-xl border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                cat?.badgeClass || "bg-slate-100 text-slate-800 border-slate-200"
              }`}
            >
              {cat?.label || category}
            </span>

            <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded-full">
              <MapPin className="w-3 h-3 text-slate-400" />
              {state}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {isNew && (
              <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                New
              </span>
            )}
            {isClosingSoon && (
              <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                Closing soon
              </span>
            )}
            {isExpired && (
              <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                Expired
              </span>
            )}
          </div>
        </div>

        <Link href={`/post/${slug}`} className="block group-hover:text-blue-600 transition">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2">
            {title}
          </h2>
        </Link>

        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {summary}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        {formattedPubDate && (
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {formattedPubDate}
          </span>
        )}

        {formattedDeadline && (
          <span
            className={`flex items-center gap-1 font-medium ${
              isExpired
                ? "text-rose-600"
                : isClosingSoon
                ? "text-amber-600 font-semibold"
                : "text-slate-600"
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            Last Date: {formattedDeadline}
          </span>
        )}
      </div>
    </article>
  );
}

