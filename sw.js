const CACHE_NAME = 'nalarsci-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/game-siaga.html',
  '/game-pilah.html',
  '/manifest.json'
];

// Instal Service Worker & Cache halaman utama
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Bersihkan cache lawas jika ada pembaruan
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Strategi Network-First dengan Fallback ke Cache
self.addEventListener('fetch', (event) => {
  // Hanya intercept request GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
