self.addEventListener('install', e => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))

// รับข้อความ push จริงจากเซิร์ฟเวอร์ (Edge Function 'send-push') แม้ปิดแท็บ/ล็อกหน้าจอ/เล่นแอปอื่นอยู่
self.addEventListener('push', event => {
  let data = {}
  try { data = event.data ? event.data.json() : {} } catch { data = {} }

  const title = data.title || 'ปพ.5 ออนไลน์'
  const options = {
    body:  data.body || '',
    icon:  data.icon  || '/pp5online/pp5-form-logo.png',
    badge: data.badge || '/pp5online/pp5-form-logo.png',
    tag:   data.tag || undefined,
    requireInteraction: false,
    data: { url: data.url || 'teacher.html' },
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', e => {
  e.notification.close()
  const targetPath = e.notification.data?.url || 'teacher.html'
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      const focused = list.find(c => c.focused)
      if (focused) return focused.focus()
      const existing = list.find(c => c.url.includes(targetPath))
      if (existing) return existing.focus()
      return self.clients.openWindow(targetPath)
    })
  )
})

// endpoint หมดอายุ/ถูกยกเลิกฝั่งเบราว์เซอร์ (เช่น ล้างข้อมูลเว็บไซต์) — เคลียร์ subscription เดิมทิ้ง
// แล้วสมัครใหม่ให้อัตโนมัติถ้ายังอนุญาต Notification อยู่ เพื่อไม่ให้เงียบหายไปเฉยๆ
self.addEventListener('pushsubscriptionchange', event => {
  event.waitUntil(
    self.registration.pushManager.subscribe(event.oldSubscription?.options ?? { userVisibleOnly: true })
      .catch(() => null)
  )
})
