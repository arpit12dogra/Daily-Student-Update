import { prisma } from "@/lib/prisma";
import { getCategoryBySlug } from "@/lib/categories";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import { PostStatus, Category } from "@prisma/client";
import { Metadata } from "next";

import { PostListItem } from "@/types/post";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: "Category Not Found" };

  return {
    title: `${cat.label} — StudentUpdates`,
    description: `Browse latest ${cat.label} notices, deadlines, and official links for college students.`,
    openGraph: {
      title: `${cat.label} — StudentUpdates`,
      description: `Browse latest ${cat.label} notices, deadlines, and official links for college students.`,
      images: ["/icon-512.png"],
    },
    twitter: {
      card: "summary",
      title: `${cat.label} — StudentUpdates`,
      description: `Browse latest ${cat.label} notices, deadlines, and official links.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);

  if (!cat) {
    notFound();
  }

  let posts: PostListItem[] = [];
  if (process.env.DATABASE_URL) {
    try {
      posts = await prisma.post.findMany({
        where: {
          category: cat.key as Category,
          status: PostStatus.PUBLISHED,
        },
        orderBy: {
          publishedAt: "desc",
        },
        take: 30,
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
      console.error("Category page fetch error:", e);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${cat.badgeClass}`}
          >
            Category
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 tracking-tight">
          {cat.label}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Showing latest published {cat.label.toLowerCase()} updates
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-slate-200">
          <p className="text-base font-semibold text-slate-700">No {cat.label} updates yet</p>
          <p className="text-xs text-slate-500 mt-1">
            New updates in this category will appear here as soon as they are published.
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
