const CACHE_NAME = 'rafidain-store-v1';
const assets = [
  './',
  './index.html'
];

// تثبيت التطبيق وتخزين الملفات الأساسية مؤقتاً
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق وجلب البيانات بسلاسة
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
