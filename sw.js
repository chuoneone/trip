// 簡單的 Service Worker，用於滿足 PWA 安裝條件
const CACHE_NAME = 'okinawa-trip-v1';
const urlsToCache = [
  './index.html',
  './manifest.json',
  './images/japan.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
