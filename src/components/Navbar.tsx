"use client";

import Link from "next/link";
import { Bell, Search, GraduationCap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [alertSubscribed, setAlertSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribeClick = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications.");
      return;
    }

    try {
      setSubscribing(true);
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setAlertSubscribed(true);

        if ("serviceWorker" in navigator) {
          const reg = await navigator.serviceWorker.ready;
          if (reg && "pushManager" in reg) {
            try {
              const sub = await reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
              });

              const subJson = sub.toJSON();
              if (subJson.endpoint && subJson.keys) {
                await fetch("/api/push/subscribe", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    endpoint: subJson.endpoint,
                    keys: subJson.keys,
                  }),
                });
              }
            } catch (pushSubErr) {
              console.warn("Could not register pushManager subscription:", pushSubErr);
            }
          }
        }

        alert("Alerts enabled! You will receive notifications when new updates are posted.");
      } else {
        alert("Notifications were blocked. Please enable them in your browser settings to receive alerts.");
      }
    } catch (e) {
      console.error("Alert subscription error:", e);
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm group-hover:bg-blue-700 transition">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight">
            Student<span className="text-blue-600">Updates</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            aria-label="Search updates"
            className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition"
          >
            <Search className="w-5 h-5" />
          </Link>

          <button
            onClick={handleSubscribeClick}
            disabled={subscribing || alertSubscribed}
            aria-label="Get alerts"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
              alertSubscribed
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200"
            }`}
          >
            <Bell className={`w-3.5 h-3.5 ${alertSubscribed ? "fill-green-600 text-green-600" : ""}`} />
            <span className="hidden sm:inline">
              {alertSubscribed ? "Alerts On" : subscribing ? "Enabling..." : "Get alerts"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

