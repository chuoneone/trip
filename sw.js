const CACHE_NAME = "fukuoka-trip-2026-v22";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=21",
  "./script.js?v=21",
  "./manifest.json",
  "./assets/japan.png",
  "./assets/fukuoka-momochi.jpg",
  "./assets/flight-booking.png",
  "./assets/hotel.jpg",
  "./assets/hotel-booking.png",
  "./assets/place-images/bread.jpg",
  "./assets/place-images/canal-city.jpg",
  "./assets/place-images/chikuzen-maebaru.jpg",
  "./assets/place-images/credits.json",
  "./assets/place-images/dazaifu.jpg",
  "./assets/place-images/fukuoka-airport.jpg",
  "./assets/place-images/fukuoka-castle.jpg",
  "./assets/place-images/fullfull-hakata.jpg",
  "./assets/place-images/hakata-station.jpg",
  "./assets/place-images/itoshima-cafe.jpg",
  "./assets/place-images/kushida.jpg",
  "./assets/place-images/kyushu-museum.jpg",
  "./assets/place-images/lalaport.jpg",
  "./assets/place-images/mark-is.jpg",
  "./assets/place-images/maxvalu-hakozaki.jpg",
  "./assets/place-images/meinohama-ferry.jpg",
  "./assets/place-images/mina-tenjin.jpg",
  "./assets/place-images/nanzoin.jpg",
  "./assets/place-images/nokonoshima.jpg",
  "./assets/place-images/ohori-park.jpg",
  "./assets/place-images/pain-stock.jpg",
  "./assets/place-images/sakuraifutamigaura.jpg",
  "./assets/place-images/shinshin.jpg",
  "./assets/place-images/sunny-supermarket.jpg",
  "./assets/place-images/taoyuan-airport.jpg",
  "./assets/place-images/tenjin-station.jpg",
  "./assets/place-images/tenjin-underground.jpg",
  "./assets/place-images/yodobashi-hakata.jpg"
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
