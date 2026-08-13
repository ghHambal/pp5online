const EVENT_NAME = 'pp5:gradebook-updated'
const STORAGE_KEY = 'pp5_gradebook_update'
const CHANNEL_NAME = 'pp5-gradebook-sync-v1'

let channel = null
try { channel = new BroadcastChannel(CHANNEL_NAME) } catch { /* ใช้ storage event แทน */ }

export function publishGradebookUpdate(detail) {
  const payload = {
    ...detail,
    eventId: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    updatedAt: new Date().toISOString(),
  }
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: payload }))
  try { channel?.postMessage(payload) } catch { /* storage event ยังทำงาน */ }
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(payload)) } catch { /* ไม่ block การบันทึกคะแนน */ }
  return payload
}

export function subscribeGradebookUpdates(handler) {
  const seen = new Set()
  const deliver = payload => {
    if (!payload?.eventId || seen.has(payload.eventId)) return
    seen.add(payload.eventId)
    if (seen.size > 100) seen.delete(seen.values().next().value)
    handler(payload)
  }
  const onLocal = event => deliver(event.detail)
  const onChannel = event => deliver(event.data)
  const onStorage = event => {
    if (event.key !== STORAGE_KEY || !event.newValue) return
    try { deliver(JSON.parse(event.newValue)) } catch { /* ignore malformed handoff */ }
  }
  window.addEventListener(EVENT_NAME, onLocal)
  channel?.addEventListener('message', onChannel)
  window.addEventListener('storage', onStorage)
  return () => {
    window.removeEventListener(EVENT_NAME, onLocal)
    channel?.removeEventListener('message', onChannel)
    window.removeEventListener('storage', onStorage)
  }
}
