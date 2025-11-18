const CACHE_NAME = 'habitmaster-v1';
const URLS = [
  '/',
  '/index.html',
  // dodaj tu inne zasoby jeżeli potrzebujesz (ikonki, css), GitHub Pages sam serwuje index.html
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(URLS)));
});

self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(resp=>resp || fetch(e.request)));
});
