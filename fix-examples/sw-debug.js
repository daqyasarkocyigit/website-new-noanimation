// Add to service worker for debugging
const CACHE_VERSION = 'v2'; // Increment version to force cache update

self.addEventListener('install', (event) => {
  console.log('SW installing version:', CACHE_VERSION);
  self.skipWaiting(); // Force immediate activation
});

self.addEventListener('activate', (event) => {
  console.log('SW activating version:', CACHE_VERSION);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Take control immediately
});

// Bypass cache for debugging
self.addEventListener('fetch', (event) => {
  // During debugging, fetch from network only
  if (event.request.url.includes('localhost') || event.request.url.includes('your-domain.com')) {
    event.respondWith(fetch(event.request));
    return;
  }
});