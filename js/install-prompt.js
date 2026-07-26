// js/install-prompt.js — แนะนำติดตั้งเว็บแอปเป็นแอป (PWA) อัตโนมัติเมื่อยังไม่ได้ติดตั้ง
// Android/Chrome/Edge: ดักจับ beforeinstallprompt แล้วเด้งปุ่มติดตั้งในคลิกเดียว
// iOS/iPadOS (Safari ไม่รองรับ beforeinstallprompt เลย): โชว์ขั้นตอนสอนมือแทน
const LS_DISMISS_KEY = 'pp5_install_dismissed_at'
const DISMISS_COOLDOWN_DAYS = 14
const SHOW_DELAY_MS = 3000

let _deferredPrompt = null

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  _deferredPrompt = e
})
window.addEventListener('appinstalled', () => {
  _deferredPrompt = null
  localStorage.removeItem(LS_DISMISS_KEY)
})

function _isStandalone() {
  return window.matchMedia?.('(display-mode: standalone)')?.matches || window.navigator.standalone === true
}

function _isIOS() {
  const ua = window.navigator.userAgent
  return /iPad|iPhone|iPod/.test(ua) || (ua.includes('Macintosh') && 'ontouchend' in document)
}

function _dismissedRecently() {
  const ts = parseInt(localStorage.getItem(LS_DISMISS_KEY) || '0', 10)
  if (!ts) return false
  return (Date.now() - ts) / 86400000 < DISMISS_COOLDOWN_DAYS
}

function _markDismissed() {
  localStorage.setItem(LS_DISMISS_KEY, String(Date.now()))
}

function _showBanner({ body, primaryLabel, onPrimary }) {
  document.getElementById('pp5-install-banner')?.remove()
  const banner = document.createElement('div')
  banner.id = 'pp5-install-banner'
  banner.className = 'fixed bottom-36 left-1/2 -translate-x-1/2 z-[85] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-emerald-100 p-4 animate-fade'
  banner.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl flex-shrink-0">📲</div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-bold text-gray-800">ติดตั้งแอป ปพ.5 ออนไลน์?</p>
        <p class="text-xs text-gray-400 mt-0.5 leading-relaxed">${body}</p>
      </div>
      <button id="pp5-install-close" class="text-gray-300 hover:text-gray-500 text-lg leading-none flex-shrink-0">✕</button>
    </div>
    <div class="flex gap-2 mt-3">
      <button id="pp5-install-later" class="flex-1 text-xs text-gray-500 hover:bg-gray-50 py-2 rounded-xl transition">เดี๋ยวก่อน</button>
      <button id="pp5-install-go" class="flex-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl transition">${primaryLabel}</button>
    </div>`
  document.body.appendChild(banner)

  const close = () => { banner.remove(); _markDismissed() }
  banner.querySelector('#pp5-install-close').addEventListener('click', close)
  banner.querySelector('#pp5-install-later').addEventListener('click', close)
  banner.querySelector('#pp5-install-go').addEventListener('click', async () => {
    try { await onPrimary() } finally { banner.remove() }
  })
}

export function initInstallPrompt() {
  if (_isStandalone() || _dismissedRecently()) return

  setTimeout(() => {
    if (_isStandalone()) return // เผื่อติดตั้งไปแล้วระหว่างรอ delay

    if (_deferredPrompt) {
      _showBanner({
        body: 'เข้าใช้งานได้เร็วขึ้น เหมือนแอปจริง ไม่ต้องเปิดเบราว์เซอร์ทุกครั้ง',
        primaryLabel: '📲 ติดตั้งเลย',
        onPrimary: async () => {
          const promptEvent = _deferredPrompt
          _deferredPrompt = null
          promptEvent.prompt()
          const { outcome } = await promptEvent.userChoice
          if (outcome !== 'accepted') _markDismissed()
        },
      })
    } else if (_isIOS()) {
      _showBanner({
        body: 'กดปุ่มแชร์ 📤 (ด้านล่างจอ หรือด้านบนถ้าใช้ iPad) แล้วเลือก "เพิ่มไปยังหน้าจอโฮม"',
        primaryLabel: 'เข้าใจแล้ว',
        onPrimary: async () => {},
      })
    }
  }, SHOW_DELAY_MS)
}
