let cacheName = 'Hello-PWA';
let FilesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        cache.open(cacheName).then(function (cache){
            return cache.addAll(FilesToCache);
        })
    );
});

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function (response){
            return response || fetch(e.request);
        })
    );
});