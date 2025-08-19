const CACHE_NAME = 'daq-consulting-cache-v4';
const RUNTIME_CACHE_NAME = 'daq-consulting-runtime-v4';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Cache strategies with better performance
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
  NETWORK_ONLY: 'network-only'
};

// Cache size limits
const MAX_CACHE_SIZE = {
  IMAGES: 50,
  SCRIPTS: 30,
  STYLESHEETS: 20,
  PAGES: 10
};

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(STATIC_ASSETS);
      return self.skipWaiting();
    })()
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
      return self.clients.claim();
    })()
  );
});

// Enhanced fetch event with better caching strategies
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  
  // Skip external requests except fonts and CDN resources
  if (!url.origin.includes(self.location.origin) && 
      !url.origin.includes('fonts.googleapis.com') && 
      !url.origin.includes('fonts.gstatic.com') &&
      !url.origin.includes('images.pexels.com')) {
    return;
  }

  // Route requests based on type
  if (url.pathname.match(/\.(js|mjs)$/)) {
    event.respondWith(cacheFirstWithExpiry(event.request, CACHE_NAME, MAX_CACHE_SIZE.SCRIPTS));
  } else if (url.pathname.match(/\.css$/)) {
    event.respondWith(cacheFirstWithExpiry(event.request, CACHE_NAME, MAX_CACHE_SIZE.STYLESHEETS));
  } else if (url.pathname.match(/\.(png|jpg|jpeg|svg|webp|gif|ico|avif)$/i)) {
    event.respondWith(cacheFirstWithExpiry(event.request, RUNTIME_CACHE_NAME, MAX_CACHE_SIZE.IMAGES));
  } else if (url.pathname.match(/\.(woff2?|ttf|eot)$/)) {
    // Font files - cache first with long TTL
    event.respondWith(cacheFirst(event.request));
  } else if (url.pathname === '/' || url.pathname.endsWith('.html') || url.pathname.includes('/page/')) {
    // Network first for HTML pages
    event.respondWith(networkFirstWithExpiry(event.request, RUNTIME_CACHE_NAME, MAX_CACHE_SIZE.PAGES));
  } else {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});

// Cache first strategy with cache size management
async function cacheFirstWithExpiry(request, cacheName, maxSize) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Return cached version and update in background if old
      const cacheTime = cachedResponse.headers.get('sw-cache-time');
      const now = Date.now();
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours
      
      if (cacheTime && (now - parseInt(cacheTime)) > maxAge) {
        // Update in background
        fetch(request).then(networkResponse => {
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            const headers = new Headers(responseClone.headers);
            headers.set('sw-cache-time', now.toString());
            const newResponse = new Response(responseClone.body, { 
              status: responseClone.status,
              statusText: responseClone.statusText,
              headers
            });
            cache.put(request, newResponse);
            manageCacheSize(cacheName, maxSize);
          }
        }).catch(() => {});
      }
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const responseClone = networkResponse.clone();
      const headers = new Headers(responseClone.headers);
      headers.set('sw-cache-time', Date.now().toString());
      const cachedResponse = new Response(responseClone.body, { 
        status: responseClone.status,
        statusText: responseClone.statusText,
        headers
      });
      await cache.put(request, cachedResponse);
      manageCacheSize(cacheName, maxSize);
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }
    
    throw error;
  }
}

// Cache first strategy
async function cacheFirst(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return cached version if available
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }
    
    throw error;
  }
}

// Network first strategy with cache size management
async function networkFirstWithExpiry(request, cacheName, maxSize) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      const responseClone = networkResponse.clone();
      const headers = new Headers(responseClone.headers);
      headers.set('sw-cache-time', Date.now().toString());
      const cachedResponse = new Response(responseClone.body, { 
        status: responseClone.status,
        statusText: responseClone.statusText,
        headers
      });
      await cache.put(request, cachedResponse);
      manageCacheSize(cacheName, maxSize);
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/index.html');
    }
    
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Network failed, return cached version if available
    return cachedResponse;
  });

  // Return cached version immediately if available, otherwise wait for network
  return cachedResponse || fetchPromise;
}

// Manage cache size to prevent storage bloat
async function manageCacheSize(cacheName, maxSize) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxSize) {
    // Sort by cache time and remove oldest entries
    const entries = await Promise.all(
      keys.map(async (key) => {
        const response = await cache.match(key);
        const cacheTime = response?.headers.get('sw-cache-time') || '0';
        return { key, time: parseInt(cacheTime) };
      })
    );
    
    entries.sort((a, b) => a.time - b.time);
    const toDelete = entries.slice(0, entries.length - maxSize);
    
    await Promise.all(toDelete.map(entry => cache.delete(entry.key)));
  }
}

// Background sync for failed requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any background sync tasks
  console.log('Background sync triggered');
}

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});