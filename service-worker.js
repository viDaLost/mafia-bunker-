const CACHE_NAME = 'mafia-bunker-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './background.jpg',
  './bunker.png',
  './mafia.png',
  './images/bunker-background.jpg',
  './images/mafia-background.jpg',
  './styles.css',      // если есть
  './main.js'          // если есть
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(() => {
      // fallback если нужно, например, offline.html
    })
  );
});
