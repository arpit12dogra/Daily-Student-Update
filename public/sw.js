const CACHE_NAME = "student-updates-cache-v1";
const STATIC_ASSETS = ["/", "/offline", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Never cache admin routes or API routes
  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api")) {
    return;
  }

  if (request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(request).catch(async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      if (request.mode === "navigate") {
        return caches.match("/offline");
      }
      return new Response("Network error", { status: 408 });
    })
  );
});

// Web Push event listener
self.addEventListener("push", (event) => {
  if (!event.data) return;

  try {
    const payload = event.data.json();
    const options = {
      body: payload.body || "New student update available",
      icon: "/icon-192.png",
      badge: "/icon-192.png",
      data: {
        url: payload.url || "/",
      },
    };

    event.waitUntil(
      self.registration.showNotification(payload.title || "StudentUpdates", options)
    );
  } catch (e) {
    console.error("Push event error:", e);
  }
});

// Notification click listener
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || "/";

  event.waitUntil(
    clients.matchAll({ type: "window" }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === targetUrl && "focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

