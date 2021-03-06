importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('iosiconify1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/404.html',
        '/site.html',
        '/style.css',
        '/checkbox.css',
        '/jquery.min.js',
        '/script.js',
        '/img/background.png',
        '/img/icon.png',
        '/img/mockup1.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
console.log(event.request.url);
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});
