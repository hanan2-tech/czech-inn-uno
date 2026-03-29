const CACHE = 'czech-inn-v2';
const PRECACHE = [
  '/',
  '/index.html',
  '/tours.html',
  '/extras.html',
  '/concierge.html',
  '/gold-label.html',
  '/after-dark.html',
  '/by-passion.html',
  '/src/styles/base/theme.css',
  '/src/styles/base/shared.css',
  '/src/scripts/core/nav.js',
  '/src/scripts/core/lang.js',
  '/src/scripts/core/data.js',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
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
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || net;
    })
  );
});
