const CACHE_NAME = "fukuoka-trip-2026-v13";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=13",
  "./script.js?v=13",
  "./manifest.json",
  "./assets/japan.png",
  "./assets/fukuoka-momochi.jpg",
  "./assets/flight-booking.png",
  "./assets/hotel-booking.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
