"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { CATEGORIES } from "@/lib/categories";
import { INDIAN_STATES } from "@/lib/states";
import { ArrowLeft, Save, Trash2, Calendar, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import FileUploader from "@/components/FileUploader";
import { PostAttachment } from "@/types/post";

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "ADMIN";

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("GOVT_JOB");
  const [state, setState] = useState("Himachal Pradesh");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("PUBLISHED");
  const [lastDate, setLastDate] = useState("");
  const [officialUrl, setOfficialUrl] = useState("");
  const [attachments, setAttachments] = useState<PostAttachment[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPost() {
      try {
        const res = await fetch(`/api/admin/posts/${id}`);
        const data = await res.json();
        if (data.success) {
          const post = data.data;
          setTitle(post.title || "");
          setCategory(post.category || "GOVT_JOB");
          setState(post.state || "Himachal Pradesh");
          setSummary(post.summary || "");
          setContent(post.content || "");
          setStatus(post.status || "PUBLISHED");
          setOfficialUrl(post.officialUrl || "");
          setAttachments(post.attachments || []);
          if (post.lastDate) {
            setLastDate(new Date(post.lastDate).toISOString().split("T")[0]);
          }
        } else {
          setError(data.error || "Failed to load post");
        }
      } catch {
        setError("Error fetching post details");
      } finally {
        setLoading(false);
      }
    }
    if (id) loadPost();
  }, [id]);

  const handleSave = async () => {
    setError("");
    setSaving(true);
    try {
      const payload = {
        title: title.trim(),
        category,
        state,
        summary: summary.trim(),
        content: content.trim(),
        status,
        lastDate: lastDate ? new Date(lastDate).toISOString() : null,
        officialUrl: officialUrl.trim() ? officialUrl.trim() : null,
        attachments: attachments.map((att) => ({
          url: att.url,
          publicId: att.publicId,
          fileType: att.fileType,
          fileName: att.fileName || null,
          sizeBytes: att.sizeBytes || null,
        })),
      };

      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/admin/posts");
        router.refresh();
      } else {
        setError(data.error || "Failed to save post");
      }
    } catch {
      setError("An error occurred while saving post");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!isAdmin) return;
    const confirmDelete = window.confirm(
      `Are you sure you want to PERMANENTLY delete "${title}"?\n\nThis cannot be undone.`
    );
    if (!confirmDelete) return;

    setSaving(true);
    try {
      const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        router.push("/admin/posts");
        router.refresh();
      } else {
        setError(data.error || "Failed to delete post");
      }
    } catch {
      setError("Error deleting post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-20 text-center text-xs text-slate-400">Loading update...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/admin/posts"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to posts
        </Link>
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Edit Post
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Edit Post
          </h1>

          {isAdmin && (
            <button
              onClick={handleDelete}
              disabled={saving}
              className="flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-800 transition"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete Post
            </button>
          )}
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category, State, Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">State / Scope</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {INDIAN_STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="PUBLISHED">Published</option>
                <option value="DRAFT">Draft</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">Summary</label>
              <span className={`text-[10px] font-mono ${summary.length > 300 ? "text-rose-600 font-bold" : "text-slate-400"}`}>
                {summary.length}/300
              </span>
            </div>
            <textarea
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Full Content */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Full Content</label>
            <textarea
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
          </div>

          {/* Last Date & Official URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Application Last Date
              </label>
              <input
                type="date"
                value={lastDate}
                onChange={(e) => setLastDate(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <LinkIcon className="w-3.5 h-3.5 text-slate-400" />
                Official Website Link
              </label>
              <input
                type="url"
                value={officialUrl}
                onChange={(e) => setOfficialUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Attachments (PDFs & Images) */}
          <div className="pt-2">
            <FileUploader attachments={attachments} onChange={setAttachments} />
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            disabled={saving}
            onClick={handleSave}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

