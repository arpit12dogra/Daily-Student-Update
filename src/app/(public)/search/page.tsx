"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { INDIAN_STATES } from "@/lib/states";
import PostCard from "@/components/PostCard";
import { Search, RotateCcw, Filter, X } from "lucide-react";
import { PostListItem } from "@/types/post";

function SearchContent() {
  const searchParams = useSearchParams();

  // Search and filter states
  const [q, setQ] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [state, setState] = useState(searchParams.get("state") || "");
  const [range, setRange] = useState(searchParams.get("range") || "1m");

  const [posts, setPosts] = useState<PostListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  // Fetch posts when filters change
  useEffect(() => {
    let isMounted = true;
    async function fetchResults() {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (q.trim()) params.set("q", q.trim());
        if (category) params.set("category", category);
        if (state) params.set("state", state);
        if (range) params.set("range", range);

        const res = await fetch(`/api/posts?${params.toString()}`);
        const data = await res.json();
        if (isMounted && data.success) {
          setPosts(data.data.posts);
          setTotal(data.data.pagination.total);
        }
      } catch (err) {
        console.error("Search fetch error:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchResults();
    return () => {
      isMounted = false;
    };
  }, [q, category, state, range]);

  const handleReset = () => {
    setQ("");
    setCategory("");
    setState("");
    setRange("1m");
  };

  const hasActiveFilters = !!(q || category || state || range !== "1m");

  return (
    <div className="space-y-6">
      {/* Header and Search Input */}
      <div className="space-y-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Search Updates & Filters
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Filter by keyword, state, category, or historical date range
          </p>
        </div>

        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by exam name, post, department, syllabus..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Controls Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
            <Filter className="w-3.5 h-3.5" /> Filter Options
          </span>

          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs font-medium text-rose-600 hover:text-rose-700 transition"
            >
              <RotateCcw className="w-3 h-3" /> Reset all
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Category Dropdown */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full text-xs rounded-lg border border-slate-300 bg-slate-50 py-2 px-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* State Dropdown */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              State / Region
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full text-xs rounded-lg border border-slate-300 bg-slate-50 py-2 px-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Any State</option>
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Selector */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Published Date Range
            </label>
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="w-full text-xs rounded-lg border border-slate-300 bg-slate-50 py-2 px-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1m">Last 1 month (Current)</option>
              <option value="1-2m">1 to 2 months ago (Archived)</option>
              <option value="2-3m">2 to 3 months ago (Archived)</option>
              <option value="older">Older than 3 months</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-slate-100">
            <span className="text-[11px] text-slate-400 mr-1">Active:</span>
            {q && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                keyword: &quot;{q}&quot;
                <button onClick={() => setQ("")}><X className="w-3 h-3" /></button>
              </span>
            )}
            {category && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                {CATEGORIES.find((c) => c.key === category)?.label || category}
                <button onClick={() => setCategory("")}><X className="w-3 h-3" /></button>
              </span>
            )}
            {state && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                {state}
                <button onClick={() => setState("")}><X className="w-3 h-3" /></button>
              </span>
            )}
            {range !== "1m" && (
              <span className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                range: {range}
                <button onClick={() => setRange("1m")}><X className="w-3 h-3" /></button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Results Count & Feed */}
      <div className="space-y-4">
        <div className="text-xs font-semibold text-slate-600">
          {loading ? "Searching updates..." : `${total} updates found`}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-44 bg-white rounded-xl border border-slate-200 animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200">
            <p className="text-base font-semibold text-slate-700">No updates match your filters</p>
            <p className="text-xs text-slate-500 mt-1">
              Try clearing some filters or searching with different keywords.
            </p>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-xs text-slate-400">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
