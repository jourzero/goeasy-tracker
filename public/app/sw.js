const version = "0.0.0";
const cacheName = `goeasy-${version}`;
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache
                .addAll([
                    `/favicon.ico`,
                    `/app`,
                    `index.html`,
                    `sw.js`,
                    `styles/main.css`,
                    `styles/pure-release-1.0.0/pure-min.css`,
                    `styles/pure-release-1.0.0/grids-responsive-min.css`,
                    `scripts/goeasy.js`,
                    `scripts/jquery-3.4.1.min.js`
                    //`scripts/main.min.js`,
                    //`scripts/comlink.global.js`,
                    //`scripts/messagechanneladapter.global.js`,
                    //`scripts/pwacompat.min.js`
                    //`sounds/airhorn.mp3`
                ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches
            .open(cacheName)
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
