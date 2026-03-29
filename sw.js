const CACHE = 'czech-inn-v3';
const PRECACHE = [
  '/',
  '/index.html',
  '/tours.html',
  '/extras.html',
  '/concierge.html',
  '/gold-label.html',
  '/after-dark.html',
  '/by-passion.html',
  '/analytics.html',
  '/business-plan.html',
  '/partnership.html',
  '/integration.html',
  '/social-proof.html',
  '/corporate.html',
  '/admin.html',
  '/offline.html',
  '/manifest.json',
  '/src/styles/base/theme.css',
  '/src/styles/base/shared.css',
  '/src/styles/pages/index.css',
  '/src/styles/pages/tours.css',
  '/src/styles/pages/extras.css',
  '/src/styles/pages/concierge.css',
  '/src/styles/pages/analytics.css',
  '/src/styles/pages/booking.css',
  '/src/scripts/core/nav.js',
  '/src/scripts/core/lang.js',
  '/src/scripts/core/data.js',
  '/src/scripts/pages/tours.js',
  '/src/scripts/pages/booking.js',
  '/src/scripts/pages/concierge.js',
  '/src/scripts/pages/by-passion.js',
  '/src/scripts/pages/analytics.js',
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

  // For navigation requests, serve offline page if network fails
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() =>
        caches.match('/offline.html')
      )
    );
    return;
  }

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
