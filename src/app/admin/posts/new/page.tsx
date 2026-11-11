"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";
import { INDIAN_STATES } from "@/lib/states";
import { ArrowLeft, Save, Send, Link as LinkIcon, Calendar } from "lucide-react";
import Link from "next/link";
import FileUploader from "@/components/FileUploader";
import { PostAttachment } from "@/types/post";

export default function CreatePostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("GOVT_JOB");
  const [state, setState] = useState("Himachal Pradesh");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [officialUrl, setOfficialUrl] = useState("");
  const [notify, setNotify] = useState(false);
  const [attachments, setAttachments] = useState<PostAttachment[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (targetStatus: "DRAFT" | "PUBLISHED") => {
    setError("");
    if (title.trim().length < 5) {
      setError("Title must be at least 5 characters long");
      return;
    }
    if (summary.trim().length < 10) {
      setError("Summary must be at least 10 characters long");
      return;
    }
    if (content.trim().length < 10) {
      setError("Content must be at least 10 characters long");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        title: title.trim(),
        category,
        state,
        summary: summary.trim(),
        content: content.trim(),
        lastDate: lastDate ? new Date(lastDate).toISOString() : null,
        officialUrl: officialUrl.trim() ? officialUrl.trim() : null,
        status: targetStatus,
        notify,
        attachments: attachments.map((att) => ({
          url: att.url,
          publicId: att.publicId,
          fileType: att.fileType,
          fileName: att.fileName || null,
          sizeBytes: att.sizeBytes || null,
        })),
      };

      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/admin/posts");
        router.refresh();
      } else {
        setError(data.error || "Failed to create post");
      }
    } catch {
      setError("An error occurred while creating post");
    } finally {
      setLoading(false);
    }
  };

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
          New Student Update
        </span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
          Create New Post
        </h1>

        {error && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
            {error}
          </div>
        )}

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. HPPSC Clerk Recruitment 2026: Apply Online for 40 Posts"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category & State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Category <span className="text-rose-500">*</span>
              </label>
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
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                State / Scope <span className="text-rose-500">*</span>
              </label>
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
          </div>

          {/* Summary */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700">
                Summary (Quick Scan) <span className="text-rose-500">*</span>
              </label>
              <span className={`text-[10px] font-mono ${summary.length > 300 ? "text-rose-600 font-bold" : "text-slate-400"}`}>
                {summary.length}/300
              </span>
            </div>
            <textarea
              rows={2}
              required
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="1 to 2 lines summary visible on the home feed card..."
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Full Content */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Content & Details <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={8}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Full eligibility details, examination fees, dates, and instructions..."
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
          </div>

          {/* Last Date & Official URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Application Last Date (Optional)
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
                Official Website Link (Optional)
              </label>
              <input
                type="url"
                value={officialUrl}
                onChange={(e) => setOfficialUrl(e.target.value)}
                placeholder="https://official-department.gov.in"
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Attachments (PDFs & Images) */}
          <div className="pt-2">
            <FileUploader attachments={attachments} onChange={setAttachments} />
          </div>

          {/* Push Notification Toggle */}
          <div className="pt-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 select-none">
              <input
                type="checkbox"
                checked={notify}
                onChange={(e) => setNotify(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              Send web push notification to subscribed students on publish
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            disabled={loading}
            onClick={() => handleSubmit("DRAFT")}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> Save as Draft
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={() => handleSubmit("PUBLISHED")}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition disabled:opacity-50"
          >
            <Send className="w-4 h-4" /> Publish Now
          </button>
        </div>
      </div>
    </div>
  );
}
