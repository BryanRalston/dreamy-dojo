const CACHE = 'dreamy-dojo-v6';
const ASSETS = [
  '/dreamy-dojo/',
  '/dreamy-dojo/index.html',
  '/dreamy-dojo/manifest.json',
  '/dreamy-dojo/css/styles.css',
  '/dreamy-dojo/js/imageLoader.js',
  '/dreamy-dojo/js/characters.js',
  '/dreamy-dojo/js/audio.js',
  '/dreamy-dojo/js/particles.js',
  '/dreamy-dojo/js/worlds.js',
  '/dreamy-dojo/js/house.js',
  '/dreamy-dojo/js/game.js',
  '/dreamy-dojo/images/logo.png',
  '/dreamy-dojo/images/boba.png',
  '/dreamy-dojo/images/mochi.png',
  '/dreamy-dojo/images/coco.png',
  '/dreamy-dojo/images/nori.png',
  '/dreamy-dojo/images/zara.png',
  '/dreamy-dojo/images/puffy.png',
  '/dreamy-dojo/images/luna.png',
  '/dreamy-dojo/images/sunny.png',
  '/dreamy-dojo/images/pearl.png',
  '/dreamy-dojo/images/fizz.png',
  '/dreamy-dojo/icon-192.png',
  '/dreamy-dojo/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
