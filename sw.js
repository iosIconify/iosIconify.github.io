importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('iosiconify1').then(function(cache) {
      return cache.addAll([
      '/',
      '/index.html',
      '/index.html?homescreen=1',
      '/?homescreen=1',
      '/styles/main.css',
      '/scripts/main.min.js',
      '/sounds/airhorn.mp3'
      ]);
    })
  );
});
