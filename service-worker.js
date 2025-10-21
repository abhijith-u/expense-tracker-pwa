self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('expense-cache').then(cache => {
      return cache.addAll([
        'expense_tracker_optimized.html',
        'manifest.json',
        'icon.png',
        'https://cdn.jsdelivr.net/npm/chart.js',
        'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});