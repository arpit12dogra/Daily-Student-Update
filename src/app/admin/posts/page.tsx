"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  Plus,
  Search,
  Trash2,
  Edit,
  Archive,
  RefreshCw,
} from "lucide-react";
import { CATEGORIES } from "@/lib/categories";
import { AdminPostListItem } from "@/types/post";

export default function AdminPostsListPage() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "ADMIN";

  const [posts, setPosts] = useState<AdminPostListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const params = new URLSearchParams();
        if (q) params.set("q", q);
        if (category) params.set("category", category);
        if (status) params.set("status", status);

        const res = await fetch(`/api/admin/posts?${params.toString()}`);
        const data = await res.json();
        if (isMounted && data.success) {
          setPosts(data.data.posts);
        }
      } catch (e) {
        console.error("Admin posts fetch error:", e);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [q, category, status]);

  const handleManualRefresh = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (q) params.set("q", q);
      if (category) params.set("category", category);
      if (status) params.set("status", status);

      const res = await fetch(`/api/admin/posts?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setPosts(data.data.posts);
      }
    } catch (e) {
      console.error("Admin posts refresh error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (post: AdminPostListItem) => {
    if (!isAdmin) return;
    const confirmDelete = window.confirm(
      `Are you sure you want to PERMANENTLY delete "${post.title}"?\n\nThis cannot be undone.`
    );
    if (!confirmDelete) return;

    setDeletingId(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setPosts((prev) => prev.filter((p) => p.id !== post.id));
      } else {
        alert(data.error || "Failed to delete post");
      }
    } catch {
      alert("Error deleting post");
    } finally {
      setDeletingId(null);
    }
  };

  const handleToggleArchive = async (post: AdminPostListItem) => {
    if (!isAdmin) return;
    try {
      const res = await fetch(`/api/admin/posts/${post.id}/archive`, { method: "POST" });
      const data = await res.json();
      if (data.success) {
        handleManualRefresh();
      } else {
        alert(data.error || "Failed to toggle archive");
      }
    } catch {
      alert("Error archiving post");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Manage All Posts
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            {posts.length} posts loaded
          </p>
        </div>

        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Create Post
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleManualRefresh()}
            placeholder="Search by title... (press Enter)"
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-xs rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="text-xs rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Statuses</option>
          <option value="PUBLISHED">Published</option>
          <option value="DRAFT">Draft</option>
          <option value="ARCHIVED">Archived</option>
        </select>

        <button
          onClick={handleManualRefresh}
          className="p-2 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition"
          title="Refresh"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-xs text-slate-400">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="py-16 text-center text-xs text-slate-400">No posts match the criteria.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">State</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Author</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-3 px-4 font-semibold text-slate-900 max-w-sm">
                      <Link
                        href={`/post/${post.slug}`}
                        target="_blank"
                        className="hover:text-blue-600 line-clamp-1"
                      >
                        {post.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{post.category}</td>
                    <td className="py-3 px-4 text-slate-500">{post.state}</td>
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
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>

                        {isAdmin && (
                          <>
                            <button
                              onClick={() => handleToggleArchive(post)}
                              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition"
                              title={post.status === "ARCHIVED" ? "Unarchive" : "Archive"}
                            >
                              <Archive className="w-4 h-4" />
                            </button>

                            <button
                              disabled={deletingId === post.id}
                              onClick={() => handleDelete(post)}
                              className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition disabled:opacity-50"
                              title="Delete permanently"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
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
