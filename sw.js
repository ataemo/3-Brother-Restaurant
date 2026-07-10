// Minimal service worker — just enough to make Chrome/Android
// treat the site as an installable PWA (shows "Install app" / looks
// like a real app after Add to Home Screen). No offline caching,
// so it will never serve stale content.
const CACHE_NAME = '3ainong-shell-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

// Pass-through fetch (network first, no caching of app data)
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
