// js/push-notify.js — สมัคร Web Push subscription จริงหลังได้รับอนุญาต Notification แล้ว
// คู่กับ Edge Function 'send-push' (ยิงข้อความจริงผ่าน VAPID) และ push listener ใน sw.js
import { savePushSubscription } from './api.js'

// VAPID public key เป็นข้อมูลสาธารณะ (ฝัง client ได้ปกติ) — private key เก็บเป็น secret ฝั่ง Edge Function เท่านั้น
const VAPID_PUBLIC_KEY = 'BFgbl8o4NOgaOf-h1CsQD5DurB94YWYPWJBJ28_wM9kn8AqjB1-j0KPbMqp2SOgg36N59bz9j_Z1nAeJfpNg6YE'

function _urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = atob(base64)
  return Uint8Array.from([...rawData].map(c => c.charCodeAt(0)))
}

export async function ensurePushSubscription(profileId) {
  if (!profileId) return
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return
  if (typeof Notification === 'undefined' || Notification.permission !== 'granted') return
  try {
    const reg = await navigator.serviceWorker.ready
    let sub = await reg.pushManager.getSubscription()
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: _urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      })
    }
    await savePushSubscription(profileId, sub.toJSON())
  } catch (err) {
    console.warn('[push-notify] subscribe failed', err)
  }
}
