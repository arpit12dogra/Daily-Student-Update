import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "StudentUpdates — Daily Exams, Govt Jobs, Admissions & Room Alerts",
  description:
    "Daily verified updates for college students: exams, HP & central government jobs, application forms, results, scholarships, admit cards, and room/PG availability in Himachal Pradesh & India.",
  keywords: [
    "student updates",
    "himachal pradesh govt jobs",
    "hppsc recruitment",
    "hpu exam dates",
    "scholarships",
    "student pg rooms",
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon-192.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "StudentUpdates",
    title: "StudentUpdates — Daily Exams, Govt Jobs, Admissions & Room Alerts",
    description:
      "Daily verified updates for college students: exams, HP & central government jobs, application forms, results, scholarships, admit cards, and room/PG availability.",
    images: ["/icon-512.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudentUpdates — Daily Exams, Govt Jobs & College Alerts",
    description: "Daily verified updates for college students.",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased bg-slate-50 text-slate-900">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Providers>
          {children}
          <ServiceWorkerRegister />
        </Providers>
      </body>
    </html>
  );
}
