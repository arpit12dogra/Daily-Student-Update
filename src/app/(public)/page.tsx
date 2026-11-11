import { prisma } from "@/lib/prisma";
import { PostStatus } from "@prisma/client";
import PostCard from "@/components/PostCard";
import Link from "next/link";
import { SlidersHorizontal, Sparkles } from "lucide-react";
import { PostListItem } from "@/types/post";

export default async function HomePage() {
  let posts: PostListItem[] = [];

  if (process.env.DATABASE_URL) {
    try {
      posts = await prisma.post.findMany({
        where: {
          status: PostStatus.PUBLISHED,
        },
        orderBy: {
          publishedAt: "desc",
        },
        take: 20,
        select: {
          id: true,
          title: true,
          slug: true,
          summary: true,
          category: true,
          state: true,
          status: true,
          lastDate: true,
          publishedAt: true,
        },
      });
    } catch (e) {
      console.error("Home feed fetch error:", e);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Latest Student Updates
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Verified exams, jobs, applications, results & PG availability
          </p>
        </div>

        <Link
          href="/search"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-sm"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Filters</span>
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200">
          <p className="text-base font-semibold text-slate-700">No updates posted yet</p>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Once you connect your Neon database and run the seed script, daily student updates will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}
