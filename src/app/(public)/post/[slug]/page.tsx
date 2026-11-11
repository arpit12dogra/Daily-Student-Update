import { prisma } from "@/lib/prisma";
import { getCategoryByKey } from "@/lib/categories";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Download,
  MapPin,
  Share2,
} from "lucide-react";
import { PostStatus, Category } from "@prisma/client";
import { Metadata } from "next";

import { PostDetailItem, PostListItem, PostAttachment } from "@/types/post";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    if (!process.env.DATABASE_URL) {
      return { title: "StudentUpdates" };
    }
    const post = await prisma.post.findUnique({
      where: { slug },
      select: { title: true, summary: true },
    });
    if (!post) return { title: "Post Not Found" };

    return {
      title: `${post.title} — StudentUpdates`,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        type: "article",
        images: ["/icon-512.png"],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.summary,
        images: ["/icon-512.png"],
      },
    };
  } catch {
    return { title: "StudentUpdates" };
  }
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;

  let post: PostDetailItem | null = null;
  let relatedPosts: PostListItem[] = [];

  if (process.env.DATABASE_URL) {
    try {
      post = await prisma.post.findUnique({
        where: { slug },
        include: {
          attachments: true,
        },
      });

      if (post) {
        relatedPosts = await prisma.post.findMany({
          where: {
            category: post.category as Category,
            id: { not: post.id },
            status: { in: [PostStatus.PUBLISHED, PostStatus.ARCHIVED] },
          },
          orderBy: { publishedAt: "desc" },
          take: 3,
          select: {
            id: true,
            title: true,
            slug: true,
            summary: true,
            category: true,
            state: true,
            status: true,
            publishedAt: true,
            lastDate: true,
          },
        });
      }
    } catch (e) {
      console.error("Post detail fetch error:", e);
    }
  }

  if (!post || post.status === PostStatus.DRAFT) {
    notFound();
  }

  const cat = getCategoryByKey(post.category);
  const now = new Date();
  const deadline = post.lastDate ? new Date(post.lastDate) : null;
  const isExpired = deadline && deadline.getTime() < now.getTime();
  const isClosingSoon =
    deadline &&
    !isExpired &&
    deadline.getTime() - now.getTime() <= 3 * 24 * 60 * 60 * 1000;

  const pubDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  const deadlineFormatted = deadline
    ? deadline.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  const shareText = encodeURIComponent(
    `${post.title}\n\nCheck official details and apply here:\n`
  );

  return (
    <article className="space-y-6 pb-20">
      {/* Navigation & Share */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to updates
        </Link>

        <a
          href={`https://api.whatsapp.com/send?text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition"
        >
          <Share2 className="w-3.5 h-3.5" />
          Share on WhatsApp
        </a>
      </div>

      {/* Header Info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border ${
              cat?.badgeClass || "bg-slate-100 text-slate-800"
            }`}
          >
            {cat?.label || post.category}
          </span>

          <span className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {post.state}
          </span>

          {isClosingSoon && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
              Closing soon
            </span>
          )}

          {isExpired && (
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
              Expired
            </span>
          )}
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {post.summary}
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
          {pubDate && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Posted on {pubDate}
            </span>
          )}
        </div>
      </div>

      {/* Key Action & Deadlines Box */}
      {(post.officialUrl || deadlineFormatted) && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            {deadlineFormatted && (
              <div className="flex items-center gap-1.5 text-sm">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-slate-900">Application Deadline:</span>
                <span
                  className={`font-semibold ${
                    isExpired ? "text-rose-600" : isClosingSoon ? "text-amber-600" : "text-blue-800"
                  }`}
                >
                  {deadlineFormatted}
                </span>
              </div>
            )}
            <p className="text-xs text-slate-600">
              Submit your forms before server closing time on the official portal.
            </p>
          </div>

          {post.officialUrl && (
            <a
              href={post.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition"
            >
              Open Official Website
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      )}

      {/* Content Body */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
          Detailed Information
        </h2>
        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </div>

      {/* Attachments */}
      {post.attachments && post.attachments.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Official Documents & Attachments ({post.attachments.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {post.attachments.map((att: PostAttachment) => (
              <a
                key={att.id}
                href={att.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
                    {att.fileType === "image" ? (
                      <ImageIcon className="w-5 h-5" />
                    ) : (
                      <FileText className="w-5 h-5" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-800 truncate group-hover:text-blue-600">
                      {att.fileName || (att.fileType === "image" ? "View Image" : "Download PDF")}
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase">
                      {att.fileType} {att.sizeBytes ? `• ${(att.sizeBytes / 1024).toFixed(0)} KB` : ""}
                    </p>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-100/60 transition">
                  {att.fileType === "image" ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <Download className="w-4 h-4" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Related Updates */}
      {relatedPosts.length > 0 && (
        <div className="space-y-3 pt-4">
          <h3 className="text-sm font-bold text-slate-700">More in {cat?.label}</h3>
          <div className="space-y-2">
            {relatedPosts.map((rel: PostListItem) => (
              <Link
                key={rel.id}
                href={`/post/${rel.slug}`}
                className="block p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition"
              >
                <p className="text-sm font-semibold text-slate-900 line-clamp-1">
                  {rel.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Sticky Mobile Bottom CTA */}
      {post.officialUrl && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur border-t border-slate-200 z-30">
          <a
            href={post.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md"
          >
            Open Official Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </article>
  );
}
