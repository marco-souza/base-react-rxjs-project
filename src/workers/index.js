const CACHE_NAME = 'cache-app-v1'
const filesToCache = [
  '/',
  '/index.html',
]

const isResponseInvalid = response => (
  !response ||
  response.status !== 200 ||
  response.type !== 'basic'
)


// Activate callback
self.addEventListener('activate', event => console.log('SW:activate', event))


// Precache files
self.addEventListener('install', event => event.waitUntil(
  caches.open(CACHE_NAME)
    .then(cache => cache.addAll(filesToCache))
))


// The simplest Service Worker: A passthrough script
self.addEventListener('fetch', event => {
  console.log('SW:fetch', event)
  event.respondWith(
    caches.match(event.request)
      .then((resp) => {
        // found in cache - return response
        if (resp) return resp

        // Clone request to reuse it, since requests can be consumed just one time
        const fetchRequest = event.request.clone()

        return fetch(fetchRequest)
          .then(async (response) => {
            // Check if we received a valid response
            if (isResponseInvalid(response)) {
              return response
            }

            // Cache result
            const responseToCache = response.clone()
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache))

            return response
          })
      }))
})


// Refresh pages when new worker arives
let isRefreshing = false
self.addEventListener(
  'controllerchange',
  () => {
    console.log('controllerchange')

    if (isRefreshing) return
    isRefreshing = true
    window.location.reload()
  },
)
