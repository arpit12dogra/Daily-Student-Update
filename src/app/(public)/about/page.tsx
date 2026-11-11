import Link from "next/link";
import { GraduationCap, Mail, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              About StudentUpdates
            </h1>
            <p className="text-xs text-slate-500">
              One place for all daily notices, jobs & student rooms
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            <strong>StudentUpdates</strong> is built to solve a simple problem: student notices, government recruitment advertisements, admit card releases, and scholarship windows are scattered across dozens of official portals and WhatsApp groups.
          </p>
          <p>
            We curate daily verified updates across Himachal Pradesh and nationwide so you never miss an application deadline or exam announcement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> 100% Free & No Login
            </div>
            <p className="text-xs text-slate-500">
              No registration or phone number required. All student updates are publicly readable.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
              <HeartHandshake className="w-4 h-4 text-blue-600" /> Official Source Links
            </div>
            <p className="text-xs text-slate-500">
              Every recruitment and form post links directly to the official government or university website.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 space-y-3">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4 text-slate-500" />
            Contact & Notice Submissions
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Have a college notice, exam schedule, scholarship opening, or student room availability to share? Reach out to the editorial team:
          </p>
          <p className="text-xs font-semibold text-blue-600">
            arpit@studentupdates.com
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition"
          >
            ← Back to Updates Feed
          </Link>
        </div>
      </div>
    </div>
  );
}

