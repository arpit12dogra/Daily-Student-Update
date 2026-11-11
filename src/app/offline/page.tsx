import Link from "next/link";
import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 mx-auto flex items-center justify-center">
          <WifiOff className="w-6 h-6" />
        </div>
        <h1 className="text-xl font-bold text-slate-900">You are offline</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          It looks like your internet connection is unavailable. Check your mobile network or Wi-Fi to load the latest student updates.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
          >
            Retry Connection
          </Link>
        </div>
      </div>
    </div>
  );
}

