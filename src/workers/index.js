import _ from 'lodash'

// The simplest Service Worker: A passthrough script
self.addEventListener('fetch', event => {
  _.times(5, () => console.log('SW:fetch', event))

  event.respondWith(fetch(event.request))
})
