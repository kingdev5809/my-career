importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js',
);

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response('<h1>Альтернативный контент</h1>', {
        headers: { 'Content-Type': 'text/html' },
      });
    }),
  );
});
