import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-slate-700">
            StudentUpdates — Daily student notices, exams, jobs & housing
          </p>
          <p className="mt-1 text-slate-400">
            All notices sourced from official notifications. Always cross-check with original links.
          </p>
        </div>

        <div className="flex items-center gap-4 font-medium">
          <Link href="/about" className="hover:text-blue-600 transition">
            About & Contact
          </Link>
          <span>•</span>
          <Link href="/search" className="hover:text-blue-600 transition">
            Search
          </Link>
          <span>•</span>
          <Link href="/admin/login" className="hover:text-blue-600 transition">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

