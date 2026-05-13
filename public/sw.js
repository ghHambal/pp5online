self.addEventListener('install', e => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))

self.addEventListener('notificationclick', e => {
  e.notification.close()
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      const focused = list.find(c => c.focused)
      if (focused) return focused.focus()
      const pp5 = list.find(c => c.url.includes('teacher.html'))
      if (pp5) return pp5.focus()
      return self.clients.openWindow('teacher.html')
    })
  )
})
