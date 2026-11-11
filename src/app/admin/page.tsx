import { prisma } from "@/lib/prisma";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  FileEdit,
  Archive,
  Plus,
  ArrowRight,
} from "lucide-react";
import { PostStatus } from "@prisma/client";

import { AdminPostListItem } from "@/types/post";

export default async function AdminDashboardPage() {
  let totalPosts = 0;
  let publishedCount = 0;
  let draftCount = 0;
  let archivedCount = 0;
  let recentPosts: AdminPostListItem[] = [];

  if (process.env.DATABASE_URL) {
    try {
      const [total, published, drafts, archived, recent] = await Promise.all([
        prisma.post.count(),
        prisma.post.count({ where: { status: PostStatus.PUBLISHED } }),
        prisma.post.count({ where: { status: PostStatus.DRAFT } }),
        prisma.post.count({ where: { status: PostStatus.ARCHIVED } }),
        prisma.post.findMany({
          orderBy: { createdAt: "desc" },
          take: 10,
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
            createdAt: true,
            createdBy: { select: { name: true } },
          },
        }),
      ]);

      totalPosts = total;
      publishedCount = published;
      draftCount = drafts;
      archivedCount = archived;
      recentPosts = recent;
    } catch (e) {
      console.error("Dashboard fetch error:", e);
    }
  }

  const statCards = [
    { label: "Total Posts", count: totalPosts, icon: FileText, color: "text-blue-600 bg-blue-50 border-blue-200" },
    { label: "Published Live", count: publishedCount, icon: CheckCircle2, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { label: "Drafts", count: draftCount, icon: FileEdit, color: "text-amber-600 bg-amber-50 border-amber-200" },
    { label: "Archived (>30d)", count: archivedCount, icon: Archive, color: "text-slate-600 bg-slate-100 border-slate-200" },
  ];

  return (
    <div className="space-y-6">
      {/* Title & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage your daily student updates and check publishing status
          </p>
        </div>

        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Create New Post
        </Link>
      </div>

      {/* Stat Tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{card.label}</span>
                <div className={`p-2 rounded-xl border ${card.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <p className="text-3xl font-extrabold text-slate-900">{card.count}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Posts Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">Recent Updates</h2>
          <Link
            href="/admin/posts"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition"
          >
            View all posts <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentPosts.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">
            No posts created yet. Click &quot;Create New Post&quot; to publish your first update.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Author</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-3 px-4 font-semibold text-slate-900 max-w-xs truncate">
                      {post.title}
                    </td>
                    <td className="py-3 px-4 text-slate-600">{post.category}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                          post.status === "PUBLISHED"
                            ? "bg-emerald-100 text-emerald-800"
                            : post.status === "DRAFT"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-slate-100 text-slate-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-500">{post.createdBy.name}</td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
