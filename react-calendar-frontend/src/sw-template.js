importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.loadModule('workbox-background-sync');

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

const networkFirstPaths = [
  '/api/auth/renew',
  '/api/events',
]

const cacheFirstPaths = [
  'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
]


registerRoute(
  ({ _, url }) => networkFirstPaths.includes( url.pathname ),
  new NetworkFirst()
);

registerRoute(
  ({ _, url }) => cacheFirstPaths.includes( url.pathname ),
  new CacheFirst()
);


// Offline Posts

const bgSyncPlugin = new BackgroundSyncPlugin('offline-posts', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkOnly({
    plugins: [ bgSyncPlugin ]
  }),
  'POST'
)

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkOnly({
    plugins: [ bgSyncPlugin ]
  }),
  'PUT'
)

registerRoute(
  new RegExp('http://localhost:4000/api/events'),
  new NetworkOnly({
    plugins: [ bgSyncPlugin ]
  }),
  'DELETE'
)

