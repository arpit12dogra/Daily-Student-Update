"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard,
  FilePlus,
  ListOrdered,
  LogOut,
  ExternalLink,
  Shield,
  Edit3,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  // If on /admin/login, don't show admin chrome
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const role = session?.user?.role;
  const isAdmin = role === "ADMIN";

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "All Posts", href: "/admin/posts", icon: ListOrdered },
    { label: "Create Post", href: "/admin/posts/new", icon: FilePlus },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* Top Admin Bar */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="font-extrabold text-sm sm:text-base tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              StudentUpdates <span className="text-xs font-normal text-slate-400">Admin</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      isActive
                        ? "bg-slate-800 text-white font-semibold"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {session?.user && (
              <div className="flex items-center gap-2 text-xs">
                <span className="hidden sm:inline text-slate-300 font-medium">
                  {session.user.name}
                </span>
                <span
                  className={`flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    isAdmin
                      ? "bg-purple-950 text-purple-300 border border-purple-800"
                      : "bg-blue-950 text-blue-300 border border-blue-800"
                  }`}
                >
                  {isAdmin ? <Shield className="w-2.5 h-2.5" /> : <Edit3 className="w-2.5 h-2.5" />}
                  {role}
                </span>
              </div>
            )}

            <Link
              href="/"
              target="_blank"
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
              title="View Public Site"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>

            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="text-slate-400 hover:text-rose-400 p-1.5 rounded-lg hover:bg-slate-800 transition"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}

