import { APP_VERSION } from './version.js?v=10.22.590'

// ─── Toast Notification ───────────────────────────────────────────────────────
export function showToast(message, type = 'info') {
  const colors = {
    success: 'bg-green-500',
    error:   'bg-red-500',
    warning: 'bg-yellow-500',
    info:    'bg-blue-500',
  }

  const toast = document.createElement('div')
  toast.className = `fixed top-5 right-5 z-[99999] px-5 py-3 rounded-xl text-white shadow-lg text-sm
                     flex items-center gap-2 transition-all duration-300 translate-x-full
                     ${colors[type] ?? colors.info}`

  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' }
  toast.innerHTML = `<span class="font-bold text-base">${icons[type] ?? icons.info}</span><span>${message}</span>`

  document.body.appendChild(toast)
  requestAnimationFrame(() => toast.classList.remove('translate-x-full'))

  setTimeout(() => {
    toast.classList.add('translate-x-full', 'opacity-0')
    toast.addEventListener('transitionend', () => toast.remove())
  }, 3500)
}

// ─── Success Notification Modal ──────────────────────────────────────────────
// แสดง popup ตรงกลางหน้าจอด้านหน้าสุดเพื่อแจ้งความสำเร็จ
export function showSuccessModal({
  title = 'ดำเนินการสำเร็จ',
  message = '',
  confirmText = 'ตกลง',
} = {}) {
  return new Promise(resolve => {
    document.getElementById('success-modal')?.remove()

    const m = document.createElement('div')
    m.id = 'success-modal'
    m.className = 'fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
    m.style.cssText = 'animation:sm-fade-in .2s ease-out'
    m.innerHTML = `
      <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden" style="animation:sm-pop-in .25s cubic-bezier(.34,1.56,.64,1)">
        <div class="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>
        <div class="px-6 pt-6 pb-5 text-center">
          <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center text-3xl">
            🟢
          </div>
          <h3 class="text-base font-extrabold text-emerald-700 mb-2">${title}</h3>
          ${message ? `<p class="text-xs text-gray-500 leading-relaxed">${message}</p>` : ''}
        </div>
        <div class="px-6 pb-6">
          <button id="sm-confirm" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl shadow-md transition-all active:scale-[0.98]">
            ${confirmText}
          </button>
        </div>
      </div>
      <style>
        @keyframes sm-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes sm-pop-in { from { opacity: 0; transform: scale(0.9) translateY(10px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      </style>
    `
    document.body.appendChild(m)

    const cleanup = () => {
      m.remove()
      resolve(true)
    }

    m.querySelector('#sm-confirm').addEventListener('click', cleanup)
    const onKey = e => { if (e.key === 'Escape') { document.removeEventListener('keydown', onKey); cleanup() } }
    document.addEventListener('keydown', onKey)
  })
}

// ─── Danger Confirmation Modal ────────────────────────────────────────────────
// ใช้แทน confirm() — แสดง popup ตรงกลางหน้าจอ สื่อถึงอันตราย (ลบข้อมูลถาวร)
// คืน Promise<boolean>: true = ยืนยัน, false = ยกเลิก
export function showDangerConfirm({
  title = 'ยืนยันการลบ',
  message = '',
  detail = '',
  confirmText = 'ลบเลย',
  cancelText = 'ยกเลิก',
} = {}) {
  return new Promise(resolve => {
    document.getElementById('danger-confirm-modal')?.remove()

    const m = document.createElement('div')
    m.id = 'danger-confirm-modal'
    m.className = 'fixed inset-0 z-[99999] flex items-center justify-center p-4'
    m.style.cssText = 'animation:dcm-fade-in .2s ease-out'
    m.innerHTML = `
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="dcm-overlay"></div>
      <div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden" style="animation:dcm-pop-in .25s cubic-bezier(.34,1.56,.64,1)">
        <!-- Danger header strip -->
        <div class="h-1.5 bg-gradient-to-r from-red-500 via-rose-500 to-red-600"></div>

        <div class="px-6 pt-6 pb-5 text-center">
          <!-- Warning icon with pulse -->
          <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center" style="animation:dcm-pulse 1.5s ease-in-out infinite">
            <svg class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-bold text-gray-900 mb-2">${title}</h3>

          <!-- Message -->
          ${message ? `<p class="text-sm text-gray-600 leading-relaxed">${message}</p>` : ''}

          <!-- Detail warning box -->
          ${detail ? `
          <div class="mt-3 mx-auto bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-left">
            <div class="flex gap-2 items-start">
              <span class="text-red-400 text-sm mt-0.5 flex-shrink-0">⚠️</span>
              <p class="text-xs text-red-600 leading-relaxed">${detail}</p>
            </div>
          </div>` : ''}
        </div>

        <!-- Buttons -->
        <div class="px-6 pb-6 grid grid-cols-2 gap-3">
          <button id="dcm-cancel"
            class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-[0.97] transition-all">
            ${cancelText}
          </button>
          <button id="dcm-confirm"
            class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all"
            style="background: linear-gradient(135deg, #ef4444, #dc2626); box-shadow: 0 4px 14px rgba(239,68,68,0.4)">
            🗑️ ${confirmText}
          </button>
        </div>
      </div>

      <style>
        @keyframes dcm-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes dcm-pop-in { from { opacity: 0; transform: scale(0.9) translateY(10px) } to { opacity: 1; transform: scale(1) translateY(0) } }
        @keyframes dcm-pulse { 0%, 100% { transform: scale(1) } 50% { transform: scale(1.05) } }
      </style>`

    document.body.appendChild(m)

    const cleanup = (result) => {
      m.style.animation = 'none'
      m.style.opacity = '0'
      m.style.transition = 'opacity .15s'
      setTimeout(() => { m.remove(); resolve(result) }, 150)
    }

    m.querySelector('#dcm-overlay').addEventListener('click', () => cleanup(false))
    m.querySelector('#dcm-cancel').addEventListener('click', () => cleanup(false))
    m.querySelector('#dcm-confirm').addEventListener('click', () => cleanup(true))
    // ESC key
    const onKey = e => { if (e.key === 'Escape') { document.removeEventListener('keydown', onKey); cleanup(false) } }
    document.addEventListener('keydown', onKey)
  })
}

// ─── Button Loading State ─────────────────────────────────────────────────────
export function setButtonLoading(btn, loading, originalText = '') {
  if (loading) {
    btn.disabled = true
    btn.dataset.originalText = btn.innerHTML
    btn.innerHTML = `<svg class="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>`
  } else {
    btn.disabled = false
    btn.innerHTML = btn.dataset.originalText || originalText
  }
}

// ─── Page Loading Overlay ─────────────────────────────────────────────────────
export function showPageLoader(show) {
  let loader = document.getElementById('page-loader')
  if (!loader) {
    loader = document.createElement('div')
    loader.id = 'page-loader'
    loader.className = `fixed inset-0 z-[100] bg-white/80 backdrop-blur-sm
                        flex items-center justify-center`
    loader.innerHTML = `<div class="flex flex-col items-center gap-3">
      <svg class="animate-spin h-10 w-10 text-indigo-600" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
      <p class="text-indigo-600 font-medium">กำลังโหลด...</p>
    </div>`
    document.body.appendChild(loader)
  }
  loader.style.display = show ? 'flex' : 'none'
}

// ─── Feedback Widget (ปุ่มลอยข้างจอ — ส่งความคิดเห็นถึงแอดมิน/ผู้พัฒนา) ──────────

const _fbEsc = v => String(v ?? '')
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')

const FEEDBACK_CATEGORIES = [
  { value: 'compliment',     label: '😊 ชื่นชม / ขอบคุณ' },
  { value: 'suggestion',     label: '💡 ข้อเสนอแนะ' },
  { value: 'problem',        label: '🐞 แจ้งปัญหา / ข้อบกพร่อง' },
  { value: 'password_reset', label: '🔑 ขอรีเซ็ทรหัสผ่าน' },
  { value: 'other',          label: '💬 อื่นๆ' },
]

export function injectFeedbackWidget({ profileId, role, name }) {
  if (!profileId || document.getElementById('feedback-fab')) return

  const fab = document.createElement('button')
  fab.id = 'feedback-fab'
  fab.title = role === 'student' ? 'ติดต่อแอดมิน / แชทห้องเรียน' : 'ส่งความคิดเห็นถึงแอดมิน/ผู้พัฒนา'
  fab.className = 'fixed z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white shadow-lg flex items-center justify-center overflow-hidden transition-transform hover:scale-105'
  // ครู: ซ้อนเหนือปุ่มกาแฟ ☕ (ขวาล่าง, สูง 56px) เว้นช่องว่าง — นักเรียน: เลี่ยงแถบเมนูล่าง (ไม่มีปุ่มกาแฟ)
  const bottomOffset = role === 'student'
    ? 'calc(76px + 12px + env(safe-area-inset-bottom))'
    : 'calc(max(0.75rem, env(safe-area-inset-bottom)) + 68px)'
  fab.style.cssText = `position:fixed;right:max(0.75rem, env(safe-area-inset-right));left:auto;top:auto;bottom:${bottomOffset};background:linear-gradient(135deg,#db2777,#9d174d);font-size:1.3rem;`
  fab.textContent = '💬'
  document.body.appendChild(fab)

  // นักเรียน: ปุ่มลอยขยายเป็นเมนู 2 ตัวเลือก (ติดต่อแอดมิน / แชทห้องเรียน) แทนเปิดฟอร์มตรงๆ — บทบาทอื่น
  // (ครู/แอดมิน) ยังคงกดแล้วเปิดฟอร์มความคิดเห็นทันทีเหมือนเดิม เพราะยังไม่มีฟีเจอร์แชทฝั่งนั้นให้เลือก
  if (role === 'student') {
    fab.addEventListener('click', () => _toggleFeedbackFabMenu({ profileId, role, name }, fab))
  } else {
    fab.addEventListener('click', () => _openFeedbackModal({ profileId, role, name }))
  }

  window._openFeedbackWidget = (prefillMessage, prefillCategory) => {
    _openFeedbackModal({ profileId, role, name, prefillMessage, prefillCategory })
  }
  window._openPasswordResetRequest = () => {
    _openFeedbackModal({ profileId, role, name, prefillCategory: 'password_reset' })
  }
}

// เมนูลอยของปุ่มแชท (นักเรียน) — แคปซูลปุ่มลอยเหนือ FAB ตรง pattern เดียวกับเมนูมือถือของสภานักเรียน
// (js/council.js renderMobileSheet: แบคดรอปโปร่ง + ปุ่มแคปซูลเรียงซ้อนเหนือจุดกด, กดพื้นหลังเพื่อปิด)
function _toggleFeedbackFabMenu({ profileId, role, name }, fab) {
  document.getElementById('feedback-fab-menu')?.remove()
  if (fab.dataset.menuOpen === '1') { fab.dataset.menuOpen = '0'; return }
  fab.dataset.menuOpen = '1'

  const items = [
    { icon: '📣', label: 'ติดต่อแอดมิน', onClick: () => _openFeedbackModal({ profileId, role, name }) },
    { icon: '🏫', label: 'แชทห้องเรียน', onClick: () => window._stuNav?.('classroom-chat') },
  ]
  const wrap = document.createElement('div')
  wrap.id = 'feedback-fab-menu'
  wrap.className = 'fixed inset-0 z-40'
  wrap.innerHTML = `
    <div class="absolute" style="right:max(0.75rem, env(safe-area-inset-right));bottom:calc(76px + 12px + 3.75rem + env(safe-area-inset-bottom));">
      <div class="flex flex-col-reverse gap-2 items-stretch animate-fade" style="width:11.5rem;">
        ${items.map((item, i) => `
          <button type="button" data-fab-menu-item="${i}"
            class="text-left bg-white border border-gray-200 shadow-lg px-4 py-3 rounded-full text-sm font-bold text-gray-700 flex items-center gap-2.5 min-h-[44px] hover:bg-gray-50 active:scale-95 transition-all">
            <span class="text-base">${item.icon}</span><span>${item.label}</span>
          </button>`).join('')}
      </div>
    </div>`
  document.body.appendChild(wrap)

  const close = () => { fab.dataset.menuOpen = '0'; wrap.remove() }
  wrap.addEventListener('click', e => { if (e.target === wrap) close() })
  wrap.querySelectorAll('[data-fab-menu-item]').forEach(btn => {
    btn.addEventListener('click', () => { items[Number(btn.dataset.fabMenuItem)].onClick(); close() })
  })
}

const _FB_STATUS = {
  label: (item) => {
    if (item.admin_reply || (item.messages ?? []).some(message => message.author_role === 'admin')) return { icon: '💬', text: 'มีการตอบกลับ', cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' }
    if (item.status === 'resolved')     return { icon: '✅', text: 'แก้ไขแล้ว',     cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' }
    if (item.status === 'acknowledged') return { icon: '👍', text: 'รับทราบแล้ว',   cls: 'text-blue-700 bg-blue-50 border-blue-200' }
    if (item.is_read)                   return { icon: '👀', text: 'อ่านแล้ว',       cls: 'text-indigo-700 bg-indigo-50 border-indigo-200' }
    return                                     { icon: '⏳', text: 'รอรับเรื่อง',    cls: 'text-gray-500 bg-gray-50 border-gray-200' }
  },
}
const _FB_CAT_ICON = { compliment:'😊', suggestion:'💡', problem:'🐞', password_reset:'🔑', qr_card_request:'🎫', other:'💬' }
// หมวดที่สร้างจากโค้ดโดยตรง (ไม่ได้อยู่ในตัวเลือกกดเองของ FEEDBACK_CATEGORIES) — ใช้แค่ตอนแสดงชื่อ
// หมวดในแท็บ "ประวัติของฉัน" กันโชว์เป็น raw category string ตรงๆ
const _FB_EXTRA_LABELS = { qr_card_request: 'ขอทำบัตร QR Code' }

function _openFeedbackModal({ profileId, role, name, prefillMessage, prefillCategory }) {
  document.getElementById('feedback-modal')?.remove()

  const m = document.createElement('div')
  m.id = 'feedback-modal'
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[92vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#db2777,#9d174d);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">💬 ความคิดเห็นถึงแอดมิน</h3>
          <p class="text-white/80 text-xs mt-0.5">เสียงของคุณจะถูกส่งตรงถึงผู้ดูแล/ผู้พัฒนาระบบ</p>
        </div>
        <button id="fb-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="fb-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="send">📨 ส่งใหม่</button>
        <button class="fb-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="history">📋 ประวัติของฉัน</button>
      </div>
      <div id="fb-body" class="overflow-y-auto flex-1"></div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('#fb-close').addEventListener('click', () => m.remove())

  const body   = m.querySelector('#fb-body')
  const tabs   = [...m.querySelectorAll('.fb-tab')]
  let activeTab = 'send'

  const setTab = (tab) => {
    activeTab = tab
    tabs.forEach(t => {
      const on = t.dataset.tab === tab
      t.className = `fb-tab flex-1 py-2.5 text-sm font-semibold transition ${on ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`
      t.style.background = on ? 'linear-gradient(135deg,#db2777,#9d174d)' : ''
    })
    if (tab === 'send') renderSendTab()
    else renderHistoryTab()
  }
  tabs.forEach(t => t.addEventListener('click', () => setTab(t.dataset.tab)))

  // ── Tab: ส่งใหม่ ────────────────────────────────────────────────────────────
  function renderSendTab() {
    body.innerHTML = `
      <div class="p-5 space-y-3">
        <div>
          <p class="text-xs font-semibold text-gray-600 mb-1.5">หัวข้อ</p>
          <div class="grid grid-cols-2 gap-2">
            ${FEEDBACK_CATEGORIES.map(c => `
            <button type="button" class="fb-cat-btn px-3 py-2 rounded-xl border text-xs font-medium transition text-left" data-cat="${c.value}">${c.label}</button>`).join('')}
          </div>
        </div>
        <div id="fb-dynamic"></div>
      </div>`

    const catBtns = [...body.querySelectorAll('.fb-cat-btn')]
    const dynEl   = body.querySelector('#fb-dynamic')
    let category  = prefillCategory || (prefillMessage ? 'problem' : FEEDBACK_CATEGORIES[0].value)

    const syncCatButtons = () => {
      catBtns.forEach(b => {
        const on = b.dataset.cat === category
        b.className = `fb-cat-btn px-3 py-2 rounded-xl border text-xs font-medium transition text-left ${on ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`
      })
    }

    // แจ้งรีเซ็ทรหัสผ่าน — ป๊อบอัพยืนยันก่อนส่งจริง (แยกจาก textarea ปกติ เพราะไม่ต้องพิมพ์อะไร)
    function openPwResetConfirm() {
      document.getElementById('fb-pwreset-confirm')?.remove()
      const c = document.createElement('div')
      c.id = 'fb-pwreset-confirm'
      c.className = 'fixed inset-0 z-[210] flex items-center justify-center p-4 bg-black/50'
      c.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-5 text-center space-y-4 animate-fade">
          <div class="text-4xl">🔑</div>
          <p class="text-sm text-gray-700 leading-relaxed">ต้องการแจ้งแอดมินให้รีเซ็ทรหัสผ่านของคุณจริงๆ ใช่ไหม?<br><span class="text-xs text-gray-400">รหัสผ่านใหม่จะเป็นรหัสนักเรียนของคุณเอง</span></p>
          <div class="flex gap-2">
            <button id="fb-pwreset-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="fb-pwreset-ok" class="flex-1 py-2.5 rounded-xl text-white text-sm font-semibold" style="background:linear-gradient(135deg,#db2777,#9d174d);">ยืนยัน</button>
          </div>
        </div>`
      document.body.appendChild(c)
      c.addEventListener('click', e => { if (e.target === c) c.remove() })
      c.querySelector('#fb-pwreset-cancel').addEventListener('click', () => c.remove())
      c.querySelector('#fb-pwreset-ok').addEventListener('click', async () => {
        const okBtn = c.querySelector('#fb-pwreset-ok')
        setButtonLoading(okBtn, true)
        try {
          const { submitAppFeedback } = await import('./api.js')
          await submitAppFeedback({
            profileId, senderRole: role, senderName: name, category: 'password_reset',
            message: 'นักเรียนแจ้งขอให้แอดมินรีเซ็ทรหัสผ่าน (รหัสผ่านใหม่ = รหัสนักเรียน)',
          })
          c.remove()
          showToast('แจ้งแอดมินแล้ว รอแอดมินดำเนินการนะครับ 🙏', 'success')
          setTab('history')
        } catch (err) {
          setButtonLoading(okBtn, false, 'ยืนยัน')
          if (err?.code === 'FEEDBACK_LIMIT_REACHED') showToast(`ส่งครบโควต้าของเดือนนี้แล้ว (${err.limit} ครั้ง/เดือน)`, 'warning')
          else showToast('ส่งไม่สำเร็จ ลองใหม่อีกครั้ง', 'error')
        }
      })
    }

    function renderDynamic() {
      if (category === 'password_reset') {
        dynEl.innerHTML = `
          <div class="space-y-3">
            <div class="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 leading-relaxed">
              🔑 ระบบจะแจ้งแอดมินให้รีเซ็ทรหัสผ่านของคุณเป็น <b>รหัสนักเรียน</b> ของคุณเอง — เข้าสู่ระบบครั้งถัดไปด้วยรหัสนักเรียนเป็นรหัสผ่าน แล้วค่อยเปลี่ยนใหม่ได้ภายหลัง
            </div>
            <button id="fb-pw-reset-btn" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg transition active:scale-[0.98]"
              style="background:linear-gradient(135deg,#db2777,#9d174d);">🔑 แจ้งแอดมินรีเซ็ทรหัสผ่าน</button>
          </div>`
        dynEl.querySelector('#fb-pw-reset-btn').addEventListener('click', openPwResetConfirm)
        return
      }

      dynEl.innerHTML = `
        <div>
          <p class="text-xs font-semibold text-gray-600 mb-1.5">ข้อความ</p>
          <textarea id="fb-message" rows="5" maxlength="2000"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm resize-none"
            placeholder="พิมพ์ความคิดเห็น ข้อเสนอแนะ หรือแจ้งปัญหาที่นี่..."></textarea>
        </div>
        <p class="text-[11px] text-gray-400 mt-2">ส่งในนาม: <span class="font-semibold text-gray-600">${_fbEsc(name || '—')}</span> (${role === 'teacher' ? 'ครู' : 'นักเรียน'})</p>
        <p id="fb-quota-info" class="text-[11px] text-gray-400 mt-1">กำลังตรวจสอบโควต้า...</p>
        <div id="fb-limit-notice" class="hidden text-[11px] leading-relaxed text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mt-1"></div>
        <button id="fb-submit" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg transition active:scale-[0.98] mt-3"
          style="background:linear-gradient(135deg,#db2777,#9d174d);">📨 ส่งความคิดเห็น</button>`

      // prefill จาก caller (เช่น error จาก Gemini)
      if (prefillMessage) {
        const ta = dynEl.querySelector('#fb-message')
        if (ta) ta.value = prefillMessage
      }

      ;(async () => {
        const quotaEl   = dynEl.querySelector('#fb-quota-info')
        const noticeEl  = dynEl.querySelector('#fb-limit-notice')
        const submitBtn = dynEl.querySelector('#fb-submit')
        try {
          const { getMyFeedbackQuota, getSystemConfig } = await import('./api.js')
          const { used, limit, remaining } = await getMyFeedbackQuota(profileId, role)
          if (quotaEl) {
            quotaEl.textContent = `โควต้าเดือนนี้: ใช้ไป ${used}/${limit} ครั้ง (เหลืออีก ${remaining} ครั้ง)`
            quotaEl.className = `text-[11px] font-medium ${remaining <= 0 ? 'text-rose-500' : remaining === 1 ? 'text-amber-500' : 'text-gray-400'}`
          }
          if (remaining <= 0 && submitBtn) {
            submitBtn.disabled = true; submitBtn.classList.add('opacity-50', 'cursor-not-allowed')
            if (noticeEl) {
              if (role === 'teacher') {
                const cfg = await getSystemConfig().catch(() => ({}))
                const lineHref = cfg.contactLine ? (cfg.contactLine.startsWith('http') ? cfg.contactLine : `https://line.me/R/ti/p/${cfg.contactLine}`) : null
                noticeEl.innerHTML = lineHref
                  ? `⚠️ ครบโควต้าเดือนนี้แล้ว หากเรื่องเร่งด่วน <a href="${_fbEsc(lineHref)}" target="_blank" rel="noopener" class="font-semibold underline">แจ้งผ่าน LINE</a> แทนได้เลยครับ`
                  : `⚠️ ครบโควต้าเดือนนี้แล้ว กรุณารอเดือนถัดไปนะครับ`
              } else {
                noticeEl.textContent = '⚠️ ครบโควต้าเดือนนี้แล้ว กรุณารอเดือนถัดไป หรือแจ้งผ่านครูประจำชั้น'
              }
              noticeEl.classList.remove('hidden')
            }
          }
        } catch { if (quotaEl) quotaEl.textContent = '' }
      })()

      dynEl.querySelector('#fb-submit').addEventListener('click', async () => {
        const message = dynEl.querySelector('#fb-message').value.trim()
        if (!message) { showToast('กรุณาพิมพ์ข้อความก่อนส่ง', 'warning'); return }
        const btn = dynEl.querySelector('#fb-submit')
        setButtonLoading(btn, true)
        try {
          const { submitAppFeedback } = await import('./api.js')
          await submitAppFeedback({ profileId, senderRole: role, senderName: name, category, message })
          showToast('ส่งความคิดเห็นเรียบร้อยแล้ว ขอบคุณครับ 🙏', 'success')
          setTab('history')
        } catch (err) {
          setButtonLoading(btn, false, '📨 ส่งความคิดเห็น')
          if (err?.code === 'FEEDBACK_LIMIT_REACHED') {
            showToast(`ส่งความคิดเห็นครบโควต้าของเดือนนี้แล้ว (${err.limit} ครั้ง/เดือน)`, 'warning')
            btn.disabled = true; btn.classList.add('opacity-50', 'cursor-not-allowed')
          } else { showToast('ส่งไม่สำเร็จ ลองใหม่อีกครั้ง', 'error') }
        }
      })
    }

    catBtns.forEach(b => b.addEventListener('click', () => {
      category = b.dataset.cat
      syncCatButtons()
      renderDynamic()
    }))

    syncCatButtons()
    renderDynamic()
  }

  // ── Tab: ประวัติ ─────────────────────────────────────────────────────────────
  async function renderHistoryTab() {
    body.innerHTML = `<div class="p-5 text-center text-gray-400 text-sm py-10">กำลังโหลด...</div>`
    try {
      const { getMyFeedbackHistory } = await import('./api.js')
      const items = await getMyFeedbackHistory(profileId)
      if (!items.length) {
        body.innerHTML = `<div class="p-8 text-center"><div class="text-4xl mb-3">📭</div><p class="text-gray-400 text-sm">ยังไม่มีประวัติการส่งความคิดเห็น</p></div>`
        return
      }
      const _fmtDate = (iso) => {
        const d = new Date(iso)
        return d.toLocaleDateString('th-TH', { day:'numeric', month:'short', year:'2-digit' }) + ' ' + d.toLocaleTimeString('th-TH', { hour:'2-digit', minute:'2-digit' })
      }
      body.innerHTML = `<div class="p-3 space-y-2.5">` + items.map(item => {
        const st  = _FB_STATUS.label(item)
        const cat = _FB_CAT_ICON[item.category] ?? '💬'
        return `
          <div class="rounded-2xl border border-gray-100 bg-gray-50/60 p-3.5 space-y-2" data-feedback-thread="${item.id}">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <span class="text-xs font-semibold text-gray-600">${cat} ${FEEDBACK_CATEGORIES.find(c => c.value === item.category)?.label?.replace(/^.\s/,'') ?? _FB_EXTRA_LABELS[item.category] ?? item.category}</span>
              <span class="text-[10px] border rounded-full px-2 py-0.5 font-semibold ${st.cls}">${st.icon} ${st.text}</span>
            </div>
            <div class="space-y-2 rounded-xl border border-slate-100 bg-white/70 p-2.5">
              <div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm px-3 py-2 text-white" style="background:linear-gradient(135deg,#db2777,#9d174d);"><p class="text-[10px] font-semibold text-white/75 mb-0.5">คุณ</p><p class="text-xs leading-relaxed whitespace-pre-wrap">${_fbEsc(item.message)}</p><p class="text-[9px] text-white/60 mt-1">${_fmtDate(item.created_at)}</p></div></div>
              ${(item.messages ?? []).map(message => message.author_role === 'admin'
                ? `<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-emerald-50 border border-emerald-100 px-3 py-2"><p class="text-[10px] font-semibold text-emerald-700 mb-0.5">แอดมิน</p><p class="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">${_fbEsc(message.message)}</p><p class="text-[9px] text-gray-400 mt-1">${_fmtDate(message.created_at)}</p></div></div>`
                : `<div class="flex justify-end"><div class="max-w-[88%] rounded-2xl rounded-tr-sm px-3 py-2 text-white" style="background:linear-gradient(135deg,#db2777,#9d174d);"><p class="text-[10px] font-semibold text-white/75 mb-0.5">คุณ</p><p class="text-xs leading-relaxed whitespace-pre-wrap">${_fbEsc(message.message)}</p><p class="text-[9px] text-white/60 mt-1">${_fmtDate(message.created_at)}</p></div></div>`).join('')}
              ${item.admin_reply && !(item.messages ?? []).some(message => message.author_role === 'admin' && message.message === item.admin_reply) ? `<div class="flex justify-start"><div class="max-w-[88%] rounded-2xl rounded-tl-sm bg-emerald-50 border border-emerald-100 px-3 py-2"><p class="text-[10px] font-semibold text-emerald-700 mb-0.5">แอดมิน</p><p class="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">${_fbEsc(item.admin_reply)}</p><p class="text-[9px] text-gray-400 mt-1">${item.replied_at ? _fmtDate(item.replied_at) : ''}</p></div></div>` : ''}
            </div>
            ${item.chatAvailable ? `<textarea class="fb-user-reply w-full border border-gray-200 rounded-xl px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-pink-200" rows="2" maxlength="2000" placeholder="พิมพ์รับทราบหรือตอบกลับแอดมิน..."></textarea>
            <div class="flex justify-end"><button class="fb-user-reply-send px-3 py-1.5 rounded-xl text-white text-xs font-semibold" style="background:linear-gradient(135deg,#db2777,#9d174d);" data-id="${item.id}">ส่งข้อความ</button></div>` : ''}
          </div>`
      }).join('') + `</div>`
      body.querySelectorAll('.fb-user-reply-send').forEach(button => button.addEventListener('click', async () => {
        const thread = button.closest('[data-feedback-thread]')
        const message = thread?.querySelector('.fb-user-reply')?.value.trim()
        if (!message) { showToast('กรุณาพิมพ์ข้อความก่อนส่ง', 'warning'); return }
        button.disabled = true; button.textContent = 'กำลังส่ง...'
        try {
          const { sendFeedbackMessage } = await import('./api.js')
          await sendFeedbackMessage({ feedbackId: Number(button.dataset.id), authorRole: role, message })
          showToast('ส่งข้อความตอบกลับแล้ว', 'success')
          await renderHistoryTab()
        } catch {
          button.disabled = false; button.textContent = 'ส่งข้อความ'
          showToast('ส่งข้อความไม่สำเร็จ กรุณาลองใหม่', 'error')
        }
      }))
    } catch {
      body.innerHTML = `<div class="p-5 text-center text-rose-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>`
    }
  }

  setTab('send')
}

// ─── Searchable Teacher Select ────────────────────────────────────────────────
// ใช้แทน <select> ทุกจุดที่เลือกครู — รองรับค้นหาด้วยชื่อหรือรหัสครู
//
// การใช้งาน:
//   const sel = createTeacherSelect({ wrap: el, teachers, value: selectedId })
//   sel.getValue()   → teacher id (number | null)
//   sel.setValue(id) → เซตค่า
export function createTeacherSelect({ wrap, teachers, value = null, placeholder = 'ค้นหาชื่อหรือรหัสครู...' }) {
  // ── state ──────────────────────────────────────────────────────────────────
  let _selected = value != null ? teachers.find(t => t.id === +value) ?? null : null
  let _open = false

  // ── DOM ────────────────────────────────────────────────────────────────────
  wrap.style.position = 'relative'
  wrap.innerHTML = `
    <div class="ts-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ts-display flex-1 text-sm text-gray-400 truncate">${_selected ? _fmtTeacher(_selected) : '— ยังไม่ระบุ —'}</span>
      <svg class="ts-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ts-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100">
        <input class="ts-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${placeholder}" autocomplete="off" />
      </div>
      <ul class="ts-list max-h-52 overflow-y-auto"></ul>
    </div>`

  const inputEl   = wrap.querySelector('.ts-input')
  const dropdown  = wrap.querySelector('.ts-dropdown')
  const searchEl  = wrap.querySelector('.ts-search')
  const listEl    = wrap.querySelector('.ts-list')
  const displayEl = wrap.querySelector('.ts-display')
  const arrowEl   = wrap.querySelector('.ts-arrow')

  // ── helpers ────────────────────────────────────────────────────────────────
  function _fmtTeacher(t) {
    return `${t.full_name ?? ''}${t.teacher_code ? ` (${t.teacher_code})` : ''}`
  }

  function _renderList(q = '') {
    const lq = q.toLowerCase()
    const filtered = teachers.filter(t =>
      !q ||
      (t.full_name ?? '').toLowerCase().includes(lq) ||
      String(t.teacher_code ?? '').includes(q)
    )
    if (!filtered.length) {
      listEl.innerHTML = `<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบครู</li>`
      return
    }
    listEl.innerHTML = [
      `<li data-id="" class="ts-opt px-4 py-2.5 text-sm text-gray-400 cursor-pointer hover:bg-gray-50 border-b border-gray-50">— ยังไม่ระบุ —</li>`,
      ...filtered.map(t => {
        const active = _selected?.id === t.id
        return `<li data-id="${t.id}" class="ts-opt px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 ${active ? 'bg-indigo-50 font-semibold text-indigo-700' : 'text-gray-700'}">
          ${t.image_url ? `<img src="${t.image_url}" class="w-6 h-6 rounded-full object-cover flex-shrink-0" />` : `<div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${(t.full_name ?? '?').charAt(0)}</div>`}
          <span class="truncate">${t.full_name ?? ''}${t.teacher_code ? `<span class="ml-1 text-xs text-gray-400 font-mono">${t.teacher_code}</span>` : ''}</span>
        </li>`
      })
    ].join('')

    listEl.querySelectorAll('.ts-opt').forEach(li => {
      li.addEventListener('mousedown', e => {
        e.preventDefault()
        const id = li.dataset.id ? +li.dataset.id : null
        _selected = id ? (teachers.find(t => t.id === id) ?? null) : null
        displayEl.textContent = _selected ? _fmtTeacher(_selected) : '— ยังไม่ระบุ —'
        displayEl.classList.toggle('text-gray-400', !_selected)
        displayEl.classList.toggle('text-gray-800', !!_selected)
        _close()
        wrap.dispatchEvent(new CustomEvent('ts:change', { detail: { id: _selected?.id ?? null } }))
      })
    })
  }

  function _open_() {
    _open = true
    dropdown.classList.remove('hidden')
    arrowEl.style.transform = 'rotate(180deg)'
    searchEl.value = ''
    _renderList()
    setTimeout(() => searchEl.focus(), 50)
  }

  function _close() {
    _open = false
    dropdown.classList.add('hidden')
    arrowEl.style.transform = ''
  }

  // ── events ─────────────────────────────────────────────────────────────────
  inputEl.addEventListener('click', () => _open ? _close() : _open_())
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); _open ? _close() : _open_() } })
  searchEl.addEventListener('input', () => _renderList(searchEl.value.trim()))
  document.addEventListener('mousedown', e => { if (_open && !wrap.contains(e.target)) _close() }, true)

  // ── public API ─────────────────────────────────────────────────────────────
  return {
    getValue: () => _selected?.id ?? null,
    setValue: (id) => {
      _selected = id != null ? teachers.find(t => t.id === +id) ?? null : null
      displayEl.textContent = _selected ? _fmtTeacher(_selected) : '— ยังไม่ระบุ —'
      displayEl.classList.toggle('text-gray-400', !_selected)
      displayEl.classList.toggle('text-gray-800', !!_selected)
    },
  }
}

// ─── Searchable Teacher Multi-Select ──────────────────────────────────────────
// ใช้เลือกครูได้หลายคน — ค้นหาด้วยชื่อหรือรหัสครู คลิกเพื่อเพิ่มลงรายการด้านล่าง
//
// การใช้งาน:
//   const sel = createTeacherMultiSelect({ wrap: el, teachers, value: [1,2,3] })
//   sel.getValue()    → array ของ teacher id
//   sel.setValue(ids) → เซตค่า
export function createTeacherMultiSelect({ wrap, chipsWrap, teachers, value = [], placeholder = 'ค้นหาชื่อหรือรหัสครู...' }) {
  // ── state ──────────────────────────────────────────────────────────────────
  let _selectedIds = new Set((value ?? []).map(id => +id))
  let _open = false

  // ── DOM ────────────────────────────────────────────────────────────────────
  // ถ้ามี chipsWrap แยกต่างหาก (เช่น วางไว้ด้านบนสุดของ popup) จะ render รายชื่อที่เลือกไว้ที่นั่นแทน
  wrap.style.position = 'relative'
  wrap.innerHTML = `
    <div class="ts-input flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-indigo-300 transition" tabindex="0">
      <span class="ts-display flex-1 text-sm text-gray-400">＋ ค้นหาเพื่อเพิ่มสมาชิก</span>
      <svg class="ts-arrow w-4 h-4 text-gray-400 flex-shrink-0 transition-transform" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
    </div>
    <div class="ts-dropdown absolute left-0 right-0 z-[9999] mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hidden">
      <div class="p-2 border-b border-gray-100">
        <input class="ts-search w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="${placeholder}" autocomplete="off" />
      </div>
      <ul class="ts-list max-h-52 overflow-y-auto"></ul>
    </div>
    ${chipsWrap ? '' : '<div class="ts-chips mt-2 space-y-1.5"></div>'}`

  const inputEl  = wrap.querySelector('.ts-input')
  const dropdown = wrap.querySelector('.ts-dropdown')
  const searchEl = wrap.querySelector('.ts-search')
  const listEl   = wrap.querySelector('.ts-list')
  const chipsEl  = chipsWrap ?? wrap.querySelector('.ts-chips')
  const arrowEl  = wrap.querySelector('.ts-arrow')

  // ── helpers ────────────────────────────────────────────────────────────────
  function _fmtTeacher(t) {
    return `${t.full_name ?? ''}${t.teacher_code ? ` (${t.teacher_code})` : ''}`
  }

  function _renderChips() {
    const selected = teachers.filter(t => _selectedIds.has(t.id))
    const countLabel = chipsWrap ? `<p class="text-xs font-semibold text-gray-700 mb-2">สมาชิกในกลุ่ม (${selected.length} คน)</p>` : ''
    if (!selected.length) {
      chipsEl.innerHTML = countLabel + `<p class="text-xs text-gray-400 px-1 py-1">ยังไม่มีสมาชิก</p>`
      return
    }
    chipsEl.innerHTML = countLabel + `<div class="space-y-1.5">${selected.map(t => `
      <div data-id="${t.id}" class="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
        ${t.image_url
          ? `<img src="${t.image_url}" class="w-6 h-6 rounded-full object-cover flex-shrink-0" />`
          : `<div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${(t.full_name ?? '?').charAt(0)}</div>`}
        <span class="flex-1 text-sm text-gray-700 truncate">${t.full_name ?? ''}${t.teacher_code ? `<span class="ml-1 text-xs text-gray-400 font-mono">${t.teacher_code}</span>` : ''}</span>
        <button type="button" class="ts-chip-remove text-gray-300 hover:text-red-500 text-lg leading-none">&times;</button>
      </div>`).join('')}</div>`

    chipsEl.querySelectorAll('.ts-chip-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = +btn.closest('[data-id]').dataset.id
        _selectedIds.delete(id)
        _renderChips()
        if (_open) _renderList(searchEl.value.trim())
      })
    })
  }

  function _renderList(q = '') {
    const lq = q.toLowerCase()
    const filtered = teachers.filter(t =>
      !_selectedIds.has(t.id) &&
      (!q ||
        (t.full_name ?? '').toLowerCase().includes(lq) ||
        String(t.teacher_code ?? '').includes(q))
    )
    if (!filtered.length) {
      listEl.innerHTML = `<li class="px-4 py-3 text-sm text-gray-400 text-center">ไม่พบครู</li>`
      return
    }
    listEl.innerHTML = filtered.map(t => `
      <li data-id="${t.id}" class="ts-opt px-4 py-2.5 text-sm cursor-pointer hover:bg-indigo-50 flex items-center gap-2 text-gray-700">
        ${t.image_url
          ? `<img src="${t.image_url}" class="w-6 h-6 rounded-full object-cover flex-shrink-0" />`
          : `<div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${(t.full_name ?? '?').charAt(0)}</div>`}
        <span class="truncate">${t.full_name ?? ''}${t.teacher_code ? `<span class="ml-1 text-xs text-gray-400 font-mono">${t.teacher_code}</span>` : ''}</span>
      </li>`).join('')

    listEl.querySelectorAll('.ts-opt').forEach(li => {
      li.addEventListener('mousedown', e => {
        e.preventDefault()
        const id = +li.dataset.id
        _selectedIds.add(id)
        searchEl.value = ''
        _renderList()
        _renderChips()
        wrap.dispatchEvent(new CustomEvent('ts:change', { detail: { ids: [..._selectedIds] } }))
        searchEl.focus()
      })
    })
  }

  function _open_() {
    _open = true
    dropdown.classList.remove('hidden')
    arrowEl.style.transform = 'rotate(180deg)'
    searchEl.value = ''
    _renderList()
    setTimeout(() => searchEl.focus(), 50)
  }

  function _close() {
    _open = false
    dropdown.classList.add('hidden')
    arrowEl.style.transform = ''
  }

  // ── events ─────────────────────────────────────────────────────────────────
  inputEl.addEventListener('click', () => _open ? _close() : _open_())
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); _open ? _close() : _open_() } })
  searchEl.addEventListener('input', () => _renderList(searchEl.value.trim()))
  document.addEventListener('mousedown', e => { if (_open && !wrap.contains(e.target)) _close() }, true)

  _renderChips()

  // ── public API ─────────────────────────────────────────────────────────────
  return {
    getValue: () => [..._selectedIds],
    setValue: (ids) => {
      _selectedIds = new Set((ids ?? []).map(id => +id))
      _renderChips()
      if (_open) _renderList(searchEl.value.trim())
    },
  }
}

// ─── Version Changelogs List ────────────────────────────────────────────────
const CHANGELOGS = {
  '10.22.590': [
    '🧩 หน้าภาพรวมของครู: มิเรอร์ระบบจากเมนูไซด์บาร์ (สภานักเรียน/ค่าย TERANGGANU/แก้ค้างเก่า/กีฬาสี/เกียรติบัตร/นักเรียนที่ปรึกษา/จัดการสีของฉัน/สรุปยอดเสื้อกีฬาสี/บัญชีเงินกีฬาสี/ผลโหวตแบบเสื้อ/พิมพ์คำขอ QR/คะแนนศาสนา) เข้ากลุ่มไอคอน "ระบบอื่น ๆ" ด้วย ตามสิทธิ์จริงของแต่ละคน พร้อมปุ่ม "⚙️ ปรับหน้าภาพรวมแบบรวดเร็ว" ให้ซ่อน/แสดงและเรียงลำดับไอคอนได้เอง บันทึกเข้าบัญชีครู ใช้ได้ทุกเครื่อง',
  ],
  '10.22.589': [
    '🖨️ แก้ค้างเก่า: ใบพิมพ์รายชื่อห้อง (บอร์ดผู้บริหาร) สลับคอลัมน์ให้เลขประจำตัวอยู่หลังเลขที่ ก่อนชื่อ-สกุล และเพิ่มปุ่มเรียงนักเรียนจากค้างมาก↔น้อยได้ในหน้าจอ ก่อนกดพิมพ์',
  ],
  '10.22.588': [
    '🔍 หน้าภาพรวมของครู: ปรับให้จอใหญ่ (คอมพิวเตอร์/แท็บเล็ต) แสดงไอคอนกลุ่ม "ระบบอื่น ๆ" ใหญ่ขึ้น และแถบวิ่งสัปดาห์ปัจจุบันสูง/ตัวหนังสือใหญ่ขึ้นให้เด่นสมกับหน้าจอกว้าง',
  ],
  '10.22.587': [
    '🗂️ จัดระเบียบหน้าภาพรวมของครูใหม่ทั้งหน้า: ย้าย "กำลังสอนอยู่"/แจ้งเตือนจากหัวหน้า ไว้บนสุด รวมระบบ Smart Classroom/บอร์ดบทบาท/เวร/เช็คชื่อ/บันทึกคะแนน/ทักษะชีวิต/อ่านคิดวิเคราะห์/ตารางสอน/ห้องที่ปรึกษา/โควตา/ไซซ์เสื้อ เป็นกลุ่มไอคอนเลื่อนซ้าย-ขวาเดียว ขยายการ์ด "เวรวันนี้" ให้เด่นขึ้นเฉพาะวันมีเวร และตัดส่วน "คอร์สวิชาล่าสุด" ที่ซ้ำซ้อนออก',
  ],
  '10.22.586': [
    '👔 ปุ่มแจ้งไซซ์เสื้อของครูในหน้าภาพรวม: ถ้าแอดมินปิดรับแจ้งแล้วแต่คุณเคยแจ้งไว้ก่อนหน้า ปุ่มจะเปลี่ยนเป็นสีเทา "🕘 ดูไซซ์เสื้อที่เคยแจ้งไว้ (ปิดรับแจ้งใหม่แล้ว)" แทนสีชมพู-ส้มเดิม กันเข้าใจผิดว่ายังเปิดรับแจ้งอยู่',
  ],
  '10.22.585': [
    '⚽ หน้าภาพรวมนักเรียน: ย้ายปุ่ม "ฟุตซอล" จากแถบเมนูล่างถาวร มารวมอยู่ในกลุ่มไอคอน "ระบบอื่น ๆ" แทน (เห็นเฉพาะนักเรียนที่ลงทะเบียนทีมเหมือนเดิม)',
  ],
  '10.22.583': [
    '🏆 หน้าภาพรวมนักเรียน: ย้ายปุ่ม "กีฬาสี" จากแถบเมนูล่างถาวร มารวมอยู่ในกลุ่มไอคอน "ระบบอื่น ๆ" แทน',
  ],
  '10.22.582': [
    '🖱️ ตัวแก้ไขเทมเพลตเกียรติบัตร: ลากคลุมพื้นที่ว่างเพื่อเลือกหลายองค์ประกอบพร้อมกัน (คล้ายลากเลือกไฟล์) เพิ่มเติมจากการ Shift/Ctrl+คลิก',
  ],
  '10.22.581': [
    '🖱️ ตัวแก้ไขเทมเพลตเกียรติบัตร: กด Shift/Ctrl ค้างแล้วคลิกเพื่อเลือกหลายองค์ประกอบ หรือกด "เลือกทั้งหมด" แล้วปรับฟอนต์/สี/ขนาด/ความทึบพร้อมกันได้ทีเดียว รวมถึงลาก คัดลอก และลบเป็นกลุ่มได้',
  ],
  '10.22.580': [
    '📱 หน้าภาพรวมนักเรียน: จัดระเบียบใหม่ทั้งหน้า — เกียรติบัตร/สภานักเรียน/แก้ค้างเก่า/ประวัติการสแกน ยุบเป็นกริดไอคอนแอปเลื่อนแนวนอนได้ ย้ายกลุ่มรายวิชา/คะแนน/ประกาศ/เกรดเฉลี่ยมาไว้ใต้การ์ดตัวเลขทันที การ์ดตัวเลขกดลิงก์ไปหน้าที่เกี่ยวข้องได้แล้ว',
    '💬 ปุ่มลอยติดต่อแอดมินฝั่งนักเรียน กดแล้วขยายเป็นเมนูเลือก "ติดต่อแอดมิน" หรือ "แชทห้องเรียน" (เดิมแชทห้องเรียนเป็นแบนเนอร์แยกอยู่ในหน้าภาพรวม)',
  ],
  '10.22.579': [
    '⌨️ ตารางรายชื่อในระบบเกียรติบัตร: กด Enter เพื่อขึ้นแถวใหม่ได้ทันที และวางข้อมูลทั้งคอลัมน์จาก Excel/Google ชีทลงหลายแถวพร้อมกันได้เลย',
  ],
  '10.22.578': [
    '👩‍🏫 ตารางรายชื่อกลางของระบบเกียรติบัตรรองรับทั้งนักเรียนและคุณครู เลือกประเภทผู้รับต่อหนึ่งตาราง กรอกรหัสแล้วเติมชื่ออัตโนมัติ และออกหลายใบพร้อมกันได้',
  ],
  '10.22.577': [
    '🎚️ ตัวแก้ไขเกียรติบัตรเปลี่ยนค่าตัวเลขเป็น Slider พร้อมแสดงค่าปัจจุบัน และซ่อนรายละเอียดเงา สโตรก และการตัดบรรทัดจนกว่าจะเปิดใช้งาน',
  ],
  '10.22.576': [
    '🎖️ หน้านักเรียน: ปุ่ม "บัตรของฉัน" เปลี่ยนชื่อเป็น "เกียรติบัตรของฉัน" ให้ชัดเจนขึ้นว่าคือเกียรติบัตร',
  ],
  '10.22.575': [
    '🎨 Remake ตัวแก้ไขเทมเพลตเกียรติบัตร: เครื่องมือแบบไอคอน, คัดลอกพร้อมค่าทั้งหมด, Google Fonts, เงา, สโตรก, ความทึบ และกราฟิกมุมสะท้อนอีกฝั่งอัตโนมัติ',
    '📊 หน้าออกเกียรติบัตรเพิ่มตารางรายชื่อกลาง เพิ่มคอลัมน์/ผูกตัวแปรเทมเพลตได้ กรอกรหัสนักเรียนแล้วเติมชื่อ-สกุลพร้อมขยายคำนำหน้าอัตโนมัติ',
    '🏅 รองรับเลือกหลายแถวแล้วออกเกียรติบัตรพร้อมกัน โดยค่าของแต่ละแถวจะถูก snapshot ไว้กับใบของคนนั้น',
  ],
  '10.22.574': [
    '🐛 แก้บั๊กจริง (จุดใหญ่): ตรวจพบว่าโลโก้/ลายเซ็นทั่วทั้งระบบเจอบั๊กพื้นหลังโปร่งใสกลายเป็นดำแบบเดียวกัน — แก้ครบทุกจุดในหน้าตั้งค่าทั่วไป (โลโก้หน้า Login, โลโก้หลัก/ขาวดำ, ลายเซ็นผู้อำนวยการ/หัวหน้าวิชาการ/หัวหน้าฝ่ายทะเบียนทุกตำแหน่ง, QR PromptPay) และรูปหัวหน้ากลุ่มสาระ (รูป/ลายเซ็น) — อัปโหลดเป็น PNG แล้วรักษาความโปร่งใสไว้เสมอ',
  ],
  '10.22.573': [
    '🐛 แก้บั๊กจริง: อัปโหลดโลโก้/รูปภาพลงเทมเพลตเกียรติบัตร (และใบสั้น) พื้นหลังโปร่งใสของรูปกลายเป็นสีดำ (ต้นเหตุ: บีบอัดแล้วแปลงเป็น JPEG ที่ไม่รองรับความโปร่งใส) เปลี่ยนเป็นอัปโหลดไฟล์ต้นฉบับตรงๆ รักษาความโปร่งใสไว้ครบ',
  ],
  '10.22.572': [
    '🖨️ แก้ค้างเก่า: เพิ่มปุ่ม "ใบสั้น" ในหน้านักเรียนแล้ว (เดิมมีแค่หน้าครู/ฝ่ายทะเบียน) — ครบทั้ง 3 ฝ่ายตามที่ตั้งใจไว้ กดพิมพ์ได้ทันทีที่ครูตอบรับ (นัดสอบปรับ/ให้งานแก้)',
  ],
  '10.22.571': [
    '📄 แก้ค้างเก่า: เทมเพลตใบสั้นเพิ่มข้อมูลแทรกอัตโนมัติอีก 3 อย่าง — ชั้น/ระดับ, หมวด (สามัญ/ศาสนา), ผลการเรียนที่ติด (ร/มส/0)',
  ],
  '10.22.570': [
    '📄 แก้ค้างเก่า: ใหม่! หน้าตั้งค่าเพิ่มแท็บ "เอกสาร" — ออกแบบเทมเพลตใบสั้นแก้ค้างเก่าด้วยตัวแก้ไขลากวาง (ยืมเอนจินจากระบบเกียรติบัตรกลาง) ใส่ชื่อนักเรียน/รายวิชา/ครูผู้สอนอัตโนมัติได้',
    '🖨️ แก้ค้างเก่า: ครูผู้สอนกดพิมพ์ใบสั้นได้จากรายการ "งานที่มอบหมายแล้ว" และฝ่ายทะเบียนกดดูได้ก่อนปิดงานในหน้า "รอปิดงาน"',
  ],
  '10.22.569': [
    '🖼️ ระบบเกียรติบัตร: ตัวแก้ไขเทมเพลตเพิ่มปุ่ม "+ เพิ่มโลโก้/รูป" อัปโหลดรูปภาพ (เช่น ตราโรงเรียน) วางลงบนการ์ดแยกจากพื้นหลังได้ ลาก/ปรับขนาดเองได้เหมือนข้อความ',
  ],
  '10.22.568': [
    '🐛 แก้บั๊กจริง: หน้าออกแบบเทมเพลตเกียรติบัตร พื้นหลัง/แผงควบคุมโปร่งใสเวลาเปิดจากหน้าครู/แดชบอร์ดแอดมิน (ต้นเหตุ: ใช้สีธีมของหน้าสภานักเรียนที่หน้าอื่นไม่มี) เปลี่ยนเป็นสีคงที่ ใช้ได้ปกติทุกหน้าแล้ว',
  ],
  '10.22.567': [
    '📊 แก้ค้างเก่า: ตาราง "ความคืบหน้าแยกรายครูผู้สอน" เพิ่มคอลัมน์ "กลุ่มสาระ" และคลิกหัวคอลัมน์ไหนก็ได้เพื่อเรียงข้อมูลจากมาก↔น้อย หรือ ก↔ฮ ได้เลย',
  ],
  '10.22.565': [
    '🖥️ แก้ค้างเก่า: บอร์ดผู้บริหารขยายเต็มความกว้างหน้าจอแล้ว (เดิมจำกัดแคบตรงกลาง เหลือพื้นที่ว่างสองข้างบนจอกว้าง)',
    '🎨 แก้ค้างเก่า: รวมแถบสลับ "สรุปตัวเลข/รายครูผู้สอน/นักเรียนที่ต้องติดตาม" กับแถบ "ทั้งหมด/สามัญ/ศาสนา" ไว้แถวเดียวกัน (สรุปตัวเลขอยู่ซ้าย หมวดอยู่ขวาสุด) และแท็บศาสนาใช้สีเขียว (--secondary) แยกจากสามัญ (สีหลัก) ให้ตรงกับส่วนอื่นในระบบ',
    '✨ แก้ค้างเก่า: ปรับปุ่มสลับแถบ (แท็บ) ทั้งระบบให้เป็นทรงแคปซูลมนพร้อมเงานุ่มๆ ตอนเลือก ดูทันสมัยขึ้น (มีผลกับทุกจุดที่ใช้แท็บสลับ ทั้งฝ่ายทะเบียน/ผู้บริหาร/ตั้งค่าระบบ)',
  ],
  '10.22.566': [
    '👨‍🏫 ระบบเกียรติบัตร: ตอนออกเกียรติบัตรเลือกได้แล้วว่าผู้รับเป็นนักเรียนหรือครู',
    '📇 ระบบเกียรติบัตร: ช่องค้นหาผู้รับพิมพ์รหัส/ชื่อได้หลายคนพร้อมกัน (คั่นด้วย , หรือขึ้นบรรทัดใหม่) กด "เพิ่ม" แล้วออกให้ทุกคนได้ในครั้งเดียว พร้อมการ์ดแสดงรูปของแต่ละคน',
    '🎖️ พอร์ทัลครู: เพิ่มปุ่ม "บัตรของฉันที่ได้รับ" ในหน้าระบบเกียรติบัตร สำหรับดูเกียรติบัตรที่ครูได้รับเอง',
  ],
  '10.22.563': [
    '👔 พอร์ทัลครู: บัญชี "ผู้บริหาร" ล้วนๆ (ไม่มีภาระสอน) เมนูด้านซ้ายจะซ่อนเมนูที่เกี่ยวกับการสอน (รายวิชา/ห้องเรียน/งานรายวันทั้งหมด) อัตโนมัติ, ป้ายบทบาทมุมขวาบนแสดงตามตำแหน่งจริงแล้ว (เดิม hardcode "ครูผู้สอน" ทุกบัญชี), หน้า "ภาพรวม" ปรับเป็นทางลัดเข้าระบบสภานักเรียนโดยตรง',
  ],
  '10.22.562': [
    '🎨 ระบบเกียรติบัตร: หน้าออกแบบเทมเพลตเปลี่ยนเป็นป๊อบอัพเต็มหน้าจอ ดูโปร่ง/แคบแบบเดิมหายไป',
    '📐 ระบบเกียรติบัตร: เพิ่มตัวเลือกแนวกระดาษ แนวนอน/แนวตั้ง ตอนออกแบบเทมเพลต',
  ],
  '10.22.561': [
    '📊 แก้ค้างเก่า: หน้า "ภาพรวม" ของบอร์ดผู้บริหาร แยกเป็น 3 แท็บย่อย (สรุปตัวเลข/รายครูผู้สอน/นักเรียนที่ต้องติดตาม) ลดความรกจากเดิมที่รวมทุกอย่างไว้หน้าเดียว',
    '🍩 แก้ค้างเก่า: แท็บ "สรุปตัวเลข" ของบอร์ดผู้บริหาร เพิ่มแผนภูมิวงกลมแสดงสัดส่วนสถานะ',
  ],
  '10.22.560': [
    '🏅 ระบบเกียรติบัตร: เพิ่มเมนูให้แอดมินเข้าจากหน้าแดชบอร์ดได้โดยตรงแล้ว (เดิมมีแค่ฝั่งครู)',
    '🎨 ระบบเกียรติบัตร: ปรับแผงออกแบบเทมเพลตให้ดูเป็นระเบียบขึ้น + เพิ่มเส้นไกด์กึ่งกลาง (snap อัตโนมัติ) เวลาลากข้อความเข้าใกล้กึ่งกลางการ์ด',
  ],
  '10.22.558': [
    '🎓 แก้ค้างเก่า: บอร์ดผู้บริหารเพิ่มแท็บ "รายชื่อนักเรียน" เจาะลึกได้ทีละชั้น — เลือกหมวด(สามัญ/ศาสนา) → ระดับชั้น → เห็นการ์ดแยกตามห้องพร้อมจำนวนค้าง/จำนงแล้ว/สำเร็จ กดขยายดูรายชื่อนักเรียนในห้อง กดต่ออีกชั้นดูรายวิชาของนักเรียนคนนั้นได้ พร้อมปุ่มพิมพ์รายชื่อห้อง/พิมพ์รายบุคคล',
    '📋 แก้ค้างเก่า: หน้า "ภาพรวม" ของบอร์ดผู้บริหาร เพิ่มตาราง "นักเรียนที่จำเป็นต้องติดตาม" (Top 20 คนที่มีวิชาค้างเยอะสุด) กรองตามระดับชั้น/ห้องได้',
  ],
  '10.22.559': [
    '👔 ใหม่: บทบาท "ผู้บริหาร" ทั้งระบบ (ตั้งจากฟอร์มแก้ไขข้อมูลครู > บทบาทพิเศษ) — เข้าดูหน้า "ภาพรวม" ในระบบสภานักเรียนได้ สรุปวาระปัจจุบัน (สมาชิกสภา/ตำแหน่งผู้นำ) + ภาพรวมการสมัคร (สมัครแล้วกี่คน รับรองจากครูที่ปรึกษา/สภาปัจจุบันแล้วกี่คน กดดูใบสมัครได้) + รายนามครูที่ปรึกษาสภาพร้อมฝ่ายที่ดูแล — ดูอย่างเดียว ไม่มีสิทธิ์แก้ไข/อนุมัติใดๆ',
  ],
  '10.22.556': [
    '🏅 ใหม่: ระบบเกียรติบัตรกลาง — ครูทุกคนเข้าเมนู "ระบบเกียรติบัตร" สร้างเทมเพลตลากวาง/อัปโหลดเอง แล้วออกเกียรติบัตรให้นักเรียนคนไหนก็ได้ทันที',
    '🎖️ ใหม่: หน้านักเรียน เพิ่ม "บัตรของฉัน" รวบรวมเกียรติบัตรจากทุกระบบมาไว้ที่เดียว (ระบบกลาง + หัวหน้าห้อง + กีฬาสี + ฟุตซอล)',
    '🏛️ ย้ายระบบ: เกียรติบัตรกิจกรรมสภานักเรียน ย้ายเข้าระบบเกียรติบัตรกลางแล้ว (เลขที่ใบเปลี่ยนรูปแบบเป็น CERT-2569-XXXXXX)',
  ],
  '10.22.555': [
    '👔 หน้าแดชบอร์ด: ฟอร์มแก้ไขข้อมูลครู เพิ่มตำแหน่ง "ผู้บริหาร (ดูบอร์ดผู้บริหารแก้ค้างเก่า)" ในบทบาทพิเศษ — ตั้งจากตรงนี้ได้เลยไม่ต้องไปหาในหน้าตั้งค่าแก้ค้างเก่าแยกต่างหาก',
  ],
  '10.22.554': [
    '🖼️ แก้ค้างเก่า: รูปโปรไฟล์ครูผู้สอนในการ์ดวิชาฝั่งนักเรียน เปลี่ยนจากกรอบวงกลมเป็นกรอบสี่เหลี่ยมมนแนวตั้งตามแบบมาตรฐานของระบบ ปพ.5',
    '👔 แก้ค้างเก่า: เพิ่มบทบาท "ผู้บริหาร" ในหน้าตั้งค่า → สิทธิ์การเข้าถึง — เข้าดูบอร์ดผู้บริหาร (สถิติภาพรวมทั้งโรงเรียน) ได้โดยไม่ต้องมีสิทธิ์แก้ตั้งค่าระบบแบบผู้ดูแลระบบเต็มรูปแบบ',
  ],
  '10.22.553': [
    '🐛 แก้ค้างเก่า: แก้บั๊กจริง — "ระดับชั้นที่เปิดให้แจ้งความจำนง" ในหน้าตั้งค่า เดิมดึงรายการจากข้อมูลรายวิชาค้างเก่า (ไม่มี ม.6/ปวช.3/อป.3 เพราะไม่มีวิชาค้างระดับนี้บันทึกไว้) เปลี่ยนมาดึงจากห้องเรียนปัจจุบันจริงของนักเรียนแทน ครบทุกระดับชั้น และการเช็คสิทธิ์แจ้งจำนงก็เปลี่ยนไปดูระดับชั้นปัจจุบันของนักเรียนด้วย (ไม่ใช่ระดับชั้นตอนติดวิชาในอดีตที่ชื่อเรียกอาจเปลี่ยนไปแล้ว)',
    '📊 แก้ค้างเก่า: หน้า "ภาพรวม" ฝั่งนักเรียน เพิ่มแผนภูมิวงกลมสรุปแยกสามัญ/ศาสนา',
    '🖼️ แก้ค้างเก่า: การ์ดวิชาฝั่งนักเรียน แสดงรูปโปรไฟล์ครูผู้สอนจริงแล้ว (เดิมมีแต่ตัวอักษรย่อ)',
  ],
  '10.22.552': [
    '🎯 แก้ค้างเก่า: แท็บ "จัดการรายวิชา" ของหัวหน้ากลุ่มสาระ เพิ่มตัวกรอง "เฉพาะกลุ่มสาระของฉัน" (ค่าเริ่มต้น) เทียบจากรหัสวิชา ยังสลับดู "ทั้งหมด" ได้เสมอถ้าต้องมอบหมายวิชานอกกลุ่มสาระตัวเอง (ครอบคลุมเฉพาะฝั่งสามัญ)',
    '🧹 หน้าแดชบอร์ด: จัดระเบียบส่วน "บทบาทพิเศษ" ในฟอร์มเพิ่ม/แก้ไขข้อมูลครูใหม่ — จัดกลุ่มตำแหน่งเป็นหมวดหมู่ให้หาง่ายขึ้น กันเลือกตำแหน่งซ้ำข้ามแถว และย้าย "กลุ่มสาระที่รับผิดชอบ" มาอยู่ติดกับบทบาทหัวหน้ากลุ่มสาระโดยตรง (เดิมอยู่คนละจุดทำให้งง) พร้อมแก้บั๊กช่องนี้ค้างไม่โผล่หลังเลือกตำแหน่ง',
  ],
  '10.22.551': [
    '🐛 แก้ค้างเก่า: แก้บั๊กจริง — เข้าหน้า "งานสอนของฉัน"/"รายวิชาค้างของฉัน" บนจอใหญ่ (เดสก์ท็อป) แล้วเมนูย่อย (รายวิชาที่ค้าง/ภาพรวม/มอบหมายงาน/ฯลฯ) หายไปจากไซด์บาร์ซ้าย ใช้งานได้แค่มือถือ ตอนนี้แสดงในไซด์บาร์เดสก์ท็อปแล้วด้วย',
    '🐛 แก้ค้างเก่า: แท็บ "จัดการรายวิชา" ของหัวหน้ากลุ่มสาระ ไม่ขึ้นให้บัญชีเก่าที่ตั้งตำแหน่งไว้ในคอลัมน์ position เดี่ยวๆ (ยังไม่ถูกย้ายเข้า positions[]) แก้ให้เช็คสำรองแบบเดียวกับหน้าแดชบอร์ดผู้บริหาร',
    '📊 แก้ค้างเก่า: แก้ระดับชั้นที่บันทึกผิดจากไฟล์นำเข้าเดิม ม.13→ม.4, ม.23→ม.5 (1,586 รายการ) — ตรวจแล้วไฟล์ต้นฉบับไม่มีข้อมูล ม.6 (ม.33) เลย',
  ],
  '10.22.550': [
    '🗂️ แก้ค้างเก่า: เพิ่มแท็บ "จัดการรายวิชา" สำหรับหัวหน้ากลุ่มสาระ — เห็นวิชาในหมวดตัวเองที่ยังไม่มีครูผู้สอน มอบหมายครูที่สอนอยู่จริงตอนนี้ให้ทั้งวิชาได้ในคลิกเดียว (โผล่เฉพาะบัญชีที่มีตำแหน่งหัวหน้ากลุ่มสาระ)',
    '📑 แก้ค้างเก่า: จัดระเบียบหน้าตั้งค่าระบบใหม่เป็นแถบ 5 หมวด (ทั่วไป/การแจ้งจำนง/ดีไซน์/ข้อมูล/สิทธิ์การเข้าถึง) สลับแท็บได้โดยไม่เสียข้อมูลที่พิมพ์ค้างไว้',
    '🎚️ แก้ค้างเก่า: เพิ่มการกำหนดระดับชั้นที่เปิดให้แจ้งความจำนงได้ละเอียดขึ้น (นอกจากเปิด/ปิดทั้งระบบ) เลือกเฉพาะระดับชั้นที่ต้องการเปิดรับได้ในหน้าตั้งค่า',
  ],
  '10.22.549': [
    '👁️ แชทกลุ่มใหญ่/แอดมิน/ห้องเรียน — เพิ่ม "อ่านแล้ว" ใต้ข้อความล่าสุดของตัวเอง เห็นว่าใครอ่านแล้วบ้าง ถ้าเยอะเกินไปจะย่อเป็นตัวเลขให้กดดูรายชื่อเต็ม',
    '📢 แชทห้องเรียน (เฉพาะครู) — กดค้างข้อความของตัวเองเพื่อ "ประกาศให้นักเรียนรับทราบ" นักเรียนทุกคนต้องกดปุ่มรับทราบ ข้อความจะโชว์จำนวน/รายชื่อคนที่รับทราบแล้วและยังไม่รับทราบ',
  ],
  '10.22.548': [
    '📚 แก้ค้างเก่า (ฝั่งครู): แท็บ "รายวิชาที่ค้าง" และ "มอบหมายงาน" ปรับใหม่เป็นการ์ดแยกตามรายวิชา บอกจำนวนนักเรียนที่ติดในวิชานั้น กดขยายดูรายชื่อนักเรียนได้ พร้อมตัวกรองภาคเรียนในตัว',
    '📊 แก้ค้างเก่า (ฝั่งครู): แท็บ "ภาพรวม" เพิ่มแผนภูมิวงกลมแสดงความคืบหน้าไว้บนสุดของการ์ดสรุปของฉัน และคลิกตัวเลขในการ์ดสรุปเพื่อไปยังรายการที่เกี่ยวข้องได้ทันที',
  ],
  '10.22.547': [
    '🕐 แชท (กลุ่มใหญ่/แอดมิน/ห้องเรียน) — เพิ่มเวลาใต้ทุกข้อความแล้ว',
    '🗑️ เพิ่ม "ยกเลิกการส่ง" ข้อความของตัวเอง (ทำได้ทุกคน ทุกห้อง) และ "ลบ" ข้อความคนอื่นสำหรับแอดมิน (ทุกห้อง) และครู (เฉพาะห้องเรียนที่ตัวเองสอน) — ข้อความที่ถูกยกเลิก/ลบจะขึ้นเป็นข้อความจางๆ บอกสถานะแทน ไม่หายไปเฉยๆ กันงงว่าใครหายไปตรงไหน',
  ],
  '10.22.546': [
    '⚡ แก้ค้างเก่า: บอร์ดผู้บริหารโหลดช้า (แก้ก่อนหน้าให้นับถูกด้วยการแบ่งหน้าดึงทีละ 1,000 แถว แต่ดึงหลักหมื่นแถวทุกครั้งทำให้ช้าลง) เปลี่ยนให้เซิร์ฟเวอร์คำนวณสรุปตัวเลขให้เลย ส่งกลับแค่ ~450 แถวสรุปแทนหลักหมื่นแถวดิบ เร็วขึ้นมาก ตัวเลขยังถูกต้องเหมือนเดิม',
  ],
  '10.22.545': [
    '🔒 แก้ค้างเก่า: แก้บั๊กจริง — นักเรียนแจ้งความจำนงขอแก้/ปรับได้แม้ยังไม่เปิดสิทธิ์ (intent_open ปิดอยู่) เพราะปุ่ม "แจ้งความจำนง" ในการ์ดแต่ละวิชายังไม่เคยเช็คค่านี้ (เช็คแค่ปุ่มลอย FAB) เพิ่มการเช็คทั้งฝั่งหน้าจอและฝั่งฐานข้อมูล (RLS) กันซ้ำสอง พร้อมล้างข้อมูลที่แจ้งไปแล้วผิดพลาดกลับเป็น "ยังไม่แจ้ง" แล้ว',
    '📚 แก้ค้างเก่า (ฝั่งครู): แท็บ "รายวิชาที่ค้าง" เพิ่มรูป/ชื่อ/เลขประจำตัว/ห้องของนักเรียนในแต่ละวิชา บอกติดภาคเรียนไหน พร้อมช่องค้นหา+ตัวกรองหมวด/ภาคเรียน/สถานะ',
    '🐛 แก้ค้างเก่า: บอร์ดผู้บริหารเคยนับรายวิชาค้างผิดเพราะติดข้อจำกัด Supabase ดึงมาได้แค่ 1,000 แถวต่อครั้ง (ข้อมูลจริงมีหลักหมื่น) แก้ให้ดึงครบทุกแถวด้วยการแบ่งหน้า',
  ],
  '10.22.544': [
    '✨ แก้ค้างเก่า: เพิ่มเอฟเฟกต์กระจกบิดเบือนของจริง (Liquid Glass) บนมือถือ ใช้ตัวกรอง SVG สร้างลาย noise เองในตัว ไม่ต้องพึ่งไฟล์ภาพจากภายนอก — ใช้งานได้เต็มรูปแบบบน Chrome/Android ส่วน Safari/iOS จะ fallback กลับไปใช้เอฟเฟกต์เบลอปกติแบบเดิมโดยอัตโนมัติ (ข้อจำกัดของเบราว์เซอร์ ไม่ใช่บั๊ก) ยืนยันด้วยการทดสอบภาพจริงก่อน deploy ว่าลายพื้นหลังบิดจริงผ่านการ์ดกระจก',
  ],
  '10.22.543': [
    '✨ แก้ค้างเก่า: เพิ่มความเข้มของสไตล์กระจกบนมือถือ (เบลอ+ความอิ่มสีมากขึ้น เพิ่มเงาขอบมันวาวแบบกระจกจริง) และแก้ให้แถบเลื่อนความโปร่งของกระจก/ช่องเลือกสีในหน้าตั้งค่า แสดงผลจริงแบบเรียลไทม์ทันทีที่ปรับ ไม่ต้องกดบันทึกก่อนถึงจะเห็น',
  ],
  '10.22.542': [
    '📊 แท็บ "ประวัติ" ในหน้าพิมพ์ QR Code นักเรียน เพิ่มส่วนสรุป "จำนวนรายการ" และ "ยอดค่าธรรมเนียมรวม" ด้านบนรายการ — กรองค้นหาห้อง/ชื่อ ตัวเลขสรุปจะปรับตามทันที',
    '💰 ค่าธรรมเนียมออก QR Code ใหม่เริ่มต้นเปลี่ยนจาก 10 บาท เป็น 5 บาท ทั้งระบบ (ค่าเริ่มต้นในโค้ดกรณียังไม่เคยตั้งค่า และคำอธิบายในหน้าตั้งค่า) — ใบเสร็จอ่านค่าธรรมเนียมสดจากหน้าตั้งค่าทุกครั้งตอนพิมพ์อยู่แล้ว ไม่มีเก็บแยกรายใบ เปลี่ยนค่าที่เดียวมีผลกับใบเสร็จ/ประวัติทั้งหมดทันที',
  ],
  '10.22.541': [
    '🐛 ระบบแบบทดสอบออนไลน์: เจอสาเหตุจริงที่ปุ่ม "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย" กดแล้วไม่มีอะไรเกิดขึ้นแล้ว — โค้ดอ้างอิงปุ่มผิดจังหวะหลังป๊อบอัพยืนยันปิด (ใช้ e.currentTarget หลัง await ซึ่งกลายเป็นค่าว่างไปแล้วตามพฤติกรรมมาตรฐานของเบราว์เซอร์) ทำให้ค้างเงียบๆ ไม่มี error โชว์เลย แก้แล้วโดยจับปุ่มไว้ก่อนเปิดป๊อบอัพเสมอ พร้อมลบกล่อง debug ชั่วคราวออก',
  ],
  '10.22.540': [
    '✍️ หน้า "พิมพ์ QR Code นักเรียน": เพิ่มปุ่ม "ตั้งค่าลายเซ็นผู้ออกให้" (ข้าง 🎛️ ตั้งค่ากระดาษสั่งพิมพ์) วาดลายเซ็นเองหรืออัปโหลดรูปก็ได้ บันทึกครั้งเดียวใช้ซ้ำอัตโนมัติในใบเสร็จออก QR ใหม่ทุกใบต่อจากนี้ ไม่ต้องเซ็นสดด้วยปากกาอีกแล้ว',
  ],
  '10.22.539': [
    '🔧 ระบบแบบทดสอบออนไลน์: เพิ่ม debug ชั่วคราวในปุ่ม "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย" (กล่องข้อความสีเขียวบนพื้นดำมุมล่างจอ) ตรวจสอบยันฝั่งเซิร์ฟเวอร์แล้วว่าเรียกถูกต้องต้องสำเร็จแน่นอน แต่ยังหาสาเหตุฝั่งเบราว์เซอร์ไม่เจอว่าทำไมกดแล้วไม่มีอะไรเกิดขึ้น — จะลบ debug นี้ออกทันทีที่เจอสาเหตุจริง',
  ],
  '10.22.538': [
    '🐛 ระบบแบบทดสอบออนไลน์: แก้บั๊ก "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย" กดแล้วไม่มีอะไรเกิดขึ้น — พบว่า quiz-exam.html ค้างเลขแคชไว้ที่ ?v=10.21.63 มานาน (ไม่เคยตามการแก้ไขไฟล์ระบบสอบหลังจากนั้นเลยสักครั้ง) เบราว์เซอร์ที่เคยเปิดหน้าสอบมาก่อนจึงอาจใช้โค้ดเก่าค้างอยู่โดยไม่รู้ตัว บัมพ์เลขแคชให้ตรงกับปัจจุบันแล้ว (นักเรียน/ครูที่เจอปัญหานี้ควรปิดแอพ/รีเฟรชแรงๆ หรือล้างแคชเบราว์เซอร์ 1 ครั้งเพื่อดึงโค้ดใหม่)',
  ],
  '10.22.537': [
    '🔘 แก้ค้างเก่า: เปลี่ยนสวิตช์ปุ่มเปิดปิดในหน้าตั้งค่าเป็นแบบปุ่ม+ป้ายสถานะ (ตามสไตล์หน้าสรุปไซซ์เสื้อ) และเพิ่มปุ่ม "ไปแจ้งความจำนง"/"ไปตอบรับ" ในแบนเนอร์กำหนดเวลาที่แท็บภาพรวม กดแล้วพาไปหน้าที่เกี่ยวข้องได้ทันที ไม่ใช่แค่ข้อความแจ้งเฉยๆ',
  ],
  '10.22.536': [
    '📋 แก้ค้างเก่า: เพิ่มปุ่มเมนูเข้าใช้งานจริงในหน้านักเรียนและหน้าครู (เดิมมีแค่ toggle เปิดปิดในหน้าตั้งค่า แต่ไม่มีปุ่มให้กดจริง) เพิ่มการตั้งค่าวันที่/เวลากรอบการแจ้งความจำนงของนักเรียน + กรอบเวลาตอบรับของครู พร้อม toggle เปิดปิดให้แสดงเป็นแบนเนอร์กำหนดเวลาในแท็บภาพรวมของทั้งสองฝั่ง และเปลี่ยนช่องกาเครื่องหมายในหน้าตั้งค่าทั้งหมดเป็นสวิตช์ปุ่มเปิดปิด',
  ],
  '10.22.535': [
    '🎯 แก้ค้างเก่า: เจอสาเหตุจริงแล้วที่แถบสลับบทบาท/หัวเรื่องหน้าหายไปบนมือถือ — พื้นหลังบล็อบสีตกแต่ง (เพิ่มมาพร้อมสไตล์กระจก) ดันไปวาดทับบังทุกอย่างเพราะปัญหา CSS stacking context เกินจำเป็น แก้เรียบร้อยแล้ว ยืนยันด้วยการทดสอบ pixel-level ก่อน deploy จริง',
  ],
  '10.22.534': [
    '🔧 แก้ค้างเก่า: หน้าจอกลับมาปกติแล้วแต่แถบสลับบทบาทยังไม่ขึ้น ทั้งที่ข้อมูลถูกต้อง — ใส่ debug บรรทัดที่ 2 แบบ position:fixed (ไม่กระทบเลย์เอาต์แล้ว) เช็คว่า element เจอไหม/set ค่าสำเร็จไหม/ขนาดจริงบนจอเป็นเท่าไหร่ เพื่อหาสาเหตุต่อ',
  ],
  '10.22.533': [
    '🐛 แก้ค้างเก่า: บรรทัด debug ที่เพิ่งใส่ไปกลับไปทำหน้าจอทั้งหน้าดับเป็นสีดำเอง (เพราะ body เป็น flex container อยู่แล้ว การแทรก div ธรรมดาเข้าไปกลายเป็น flex item ตัวใหม่ไปดันเนื้อหาจริงหลุดจอ) เอาบรรทัด debug ออกแล้ว — ข้อมูลที่ debug แสดงไว้ก่อนลบยืนยันแล้วว่าระบบคำนวณสิทธิ์/แท็บถูกต้องจริง (4 แท็บ) ปัญหาแท็บหายน่าจะเป็นเพราะแคชเก่าค้างจากตอนที่ยังไม่ได้ใส่ ?v= กันแคช',
  ],
  '10.22.532': [
    '🔧 แก้ค้างเก่า: แก้ปุ่ม "←" ย้อนกลับตอนเปิดผ่านหน้าต่างเต็มจอในเมนูแอดมิน เดิม navigate iframe ไปเป็น teacher.html ตรงๆ ทำให้แถบดำของหน้าต่างค้างอยู่ ตอนนี้สั่งปิดหน้าต่างให้ถูกต้องแล้ว + เพิ่มบรรทัด debug ชั่วคราวบนหน้าจอ (ไม่ต้องเปิด DevTools) เพื่อหาสาเหตุแถบสลับบทบาทหายให้เจอ',
  ],
  '10.22.531': [
    '🐛 แก้ค้างเก่า: แก้ปัญหา "รีเฟรชแล้วยังเห็นของเก่า/แถบสลับบทบาทหายไปๆ มาๆ" ต้นเหตุคือ regrade.html เรียก regrade.js/regrade-theme.css โดยไม่มี ?v= กันแคชเลย ทำให้เบราว์เซอร์/CDN สุ่มส่งไฟล์เก่าคืนมาได้แม้ deploy โค้ดใหม่ไปแล้ว เพิ่ม ?v= ให้ทั้งสองไฟล์แล้ว จากนี้จะบัมพ์คู่กับเวอร์ชันทุกครั้ง',
  ],
  '10.22.530': [
    '✨ แก้ค้างเก่า: ใส่สไตล์กระจกแบบ iOS (Liquid Glass) ให้การ์ด/แถบสลับบทบาท/แถบเมนูล่าง เฉพาะจอมือถือเท่านั้น (เดสก์ท็อปยังคงพื้นเรียบสะอาดตาแบบเดิม มีไซด์บาร์อยู่แล้ว) ลดความโค้งมุมปุ่ม/แท็บให้ดูทันสมัยขึ้น และเพิ่มแผงเลือกธีมสีแบบพรีเซ็ต (ค่าเริ่มต้น/เข้ม/โปร่งใส/ย้อมสี) พร้อมพรีวิวสดในหน้าตั้งค่าระบบ แทนช่องเลือกสีธรรมดา',
  ],
  '10.22.529': [
    '🔍 แก้ค้างเก่า → ตั้งค่าระบบ: ช่องเพิ่มผู้ดูแลระบบ/เจ้าหน้าที่ทะเบียน เดิมต้องพิมพ์ profile_id (uuid) เองซึ่งไม่มีใครรู้ค่า เปลี่ยนเป็นพิมพ์ชื่อหรือรหัสครูแล้วเลือกจากรายการที่กรองให้อัตโนมัติแทน พร้อมแสดงชื่อครูจริงในชิปแทน user_code เดิม',
  ],
  '10.22.528': [
    '🐛 แก้ค้างเก่า: แก้ 3 บั๊กที่เจอตอนทดสอบรอบแรก — (1) หน้า regrade.html 404 บนเว็บจริงเพราะลืมเพิ่มเข้า Vite build list (2) แอดมินที่มีบัญชีครูควบคู่เห็นหน้า "งานสอนของฉัน" แทนแดชบอร์ด แก้ให้ไปแดชบอร์ดก่อนเสมอ พร้อมเพิ่มแถบสลับบทบาทบนมือถือ (3) หน้าตั้งค่าระบบโหลด error "more than one relationship" เพราะ join ตาราง profiles กำกวม (มี FK 2 เส้น) ระบุ FK ให้ชัดเจนแล้ว',
  ],
  '10.22.527': [
    '📋 ระบบใหม่ "แก้ค้างเก่า" (เมนูตั้งค่า → 📚 วิชาการ): เริ่มเปิดใช้งานจริงฝั่งแอดมิน — นักเรียนแจ้งความจำนงขอปรับแก้วิชาที่ค้าง, ครูมอบหมายงาน/นัดสอบปรับ, ฝ่ายทะเบียนปิดงาน+ติดตามการอัปเดตเกรด, บอร์ดผู้บริหารดูภาพรวม+drill-down ได้, ตั้งค่าสีธีม/ข้อความประกาศ/สิทธิ์ผู้ดูแลเองได้ในระบบ, นำเข้าข้อมูลรายวิชาค้างย้อนหลังด้วยไฟล์ CSV ได้แล้ว — **ยังปิดไม่ให้นักเรียน/ครูเห็นเมนู** (ตั้งค่า → เปิดการมองเห็นได้เมื่อพร้อม), เข้าทดสอบได้จากเมนูแอดมินตอนนี้',
  ],
  '10.22.526': [
    '📋 ตั้งค่า → "ฟีเจอร์พิเศษสำหรับผู้โดเนท": เพิ่มรายการ "แชทครูผู้สนับสนุน" ที่ขาดหายไปแล้ว (โดเนทระดับ 1 ขึ้นไป) พร้อมซิงก์รายการเริ่มต้นในโค้ดให้ครบตามของจริงทั้งหมดด้วย (สุ่มรายชื่อนักเรียน/Smart Classroom/ดึงข้อมูลการมาเรียน ที่เคยตกหล่นจากลิสต์เริ่มต้นเช่นกัน)',
  ],
  '10.22.525': [
    '🚨 แก้บั๊กสำคัญ: ตาราง azfutsal_refunds (คืนเงินค่าประกันทีมฟุตซอล) ขาดสิทธิ์ SELECT ให้ผู้ใช้ทั่วไปมาตั้งแต่สร้างตาราง (มีแค่ insert/update/delete) ทำให้ทุกครั้งที่แอปโหลด/รีเฟรชข้อมูลคืนเงิน จะ error เงียบๆ กลายเป็นข้อมูลว่างเปล่าเสมอ — สถานะ "ยืนยันแล้ว" ไม่เคยขึ้น ยอดคืนไปแล้วไม่เคยนับ เปิดใบเสร็จไม่ได้ ทั้งที่การยืนยันคืนเงินสำเร็จจริงในฐานข้อมูลทุกครั้ง แก้สิทธิ์ตารางแล้ว พร้อมเพิ่มการแจ้งเตือนถ้าโหลดข้อมูลชำระ/คืนเงินพลาดในอนาคต จะได้ไม่เงียบซ้ำอีก'
  ],
  '10.22.524': [
    '⚡ ฟุตซอล: กดยืนยันคืนเงินค่าประกันทีมในขั้นตอนสุดท้ายแล้วสถานะ/ป๊อบอัพใบเสร็จไม่ขึ้นทันที — เดิมรอโหลดข้อมูลทั้งหน้าใหม่ทั้งหมด (9 กว่าตาราง) ก่อนถึงจะแสดงผลสำเร็จ เปลี่ยนเป็นอัปเดตสถานะจากผลลัพธ์การบันทึกตรงๆ ทันที ไม่ต้องรอโหลดทั้งหน้าอีกต่อไป (ยังรีเฟรชข้อมูลอื่นต่อเบื้องหลังเหมือนเดิม)',
  ],
  '10.22.523': [
    '🐛 ตั้งค่า → "ฟีเจอร์พิเศษสำหรับผู้โดเนท": แก้บั๊กกดเลือกระดับ (1-5) ด้านขวาของแต่ละแถวแล้วบางจังหวะไม่ติด — เปลี่ยนจากปุ่มวิทยุที่ซ่อนไว้ (คลิกผ่าน label แล้ว forward ไปหา ซึ่งไม่เสถียร) เป็นปุ่มกดตรงๆ ทั้งหมด กดติดชัวร์ทุกครั้ง',
  ],
  '10.22.522': [
    '🔄 ฟุตซอล: เพิ่มปุ่มรีเฟรชข้อมูลในหน้าคืนเงินค่าประกันทีม (ข้าง ⚙️ ตั้งค่าผู้จ่ายคืนเงิน) กดแล้วดึงสถานะล่าสุดโดยไม่ต้องโหลดทั้งหน้าใหม่ — ช่วยตอนยืนยันคืนเงินจากหลายอุปกรณ์พร้อมกัน แล้วอุปกรณ์อื่นยังไม่เห็นความเปลี่ยนแปลงจนกว่าจะรีเฟรชเอง'
  ],
  '10.22.521': [
    '🚨 แก้บั๊กด่วน: หน้าครูค้างโหลดไม่ขึ้นเลยหลังล็อกอิน (TypeError จากการปรับความเร็วโหลดเมื่อสักครู่ — เมธอด .catch() ที่ต่อท้ายบาง query ใช้ไม่ได้จริงกับ Supabase เวอร์ชันนี้) แก้เรียบร้อยแล้ว ขออภัยในความไม่สะดวก',
  ],
  '10.22.520': [
    '🏫 แชทห้องเรียน ย้ายมารวมอยู่ในปุ่มลอย 👑 เดียวกับแชทครูผู้สนับสนุนแล้ว — เพิ่มแท็บที่ 3 "🏫 ห้องเรียน" เลือกห้องที่สอนแล้วเปิดแชทได้เลย (ยังเปิดจากปุ่มในหน้ารายละเอียดห้องเรียนได้เหมือนเดิมด้วย) และเปลี่ยนโปรไฟล์นักเรียนในแชทห้องเรียนเป็นรูปถ่ายจริงพร้อม "(เลขที่) ชื่อ-สกุล" ใต้รูป แทนไอคอนคนทั่วไป',
  ],
  '10.22.519': [
    '🐛 หน้านักเรียน: ป้องกันบั๊กแบบเดียวกับหน้าครู (กดเมนู/ปุ่มลัดเร็วกว่าข้อมูลโปรไฟล์โหลดเสร็จแล้วเจอหน้าเปล่า/error) เผื่อไว้ล่วงหน้าให้ครบทุกเมนูของนักเรียนด้วยเช่นกัน',
    '⚡ เร่งความเร็วตอนล็อกอินเข้าหน้าครู: เดิมระบบเช็คสิทธิ์เมนูต่างๆ (สภานักเรียน/ค่ายลูกเสือ/กีฬาสี/QR Code ฯลฯ) ทีละอย่างเรียงต่อกัน 8-9 รอบ (คนละ round-trip เครือข่ายทั้งหมด) เปลี่ยนเป็นยิงพร้อมกันแทน ทุกคนที่ล็อกอินเข้าหน้าครูควรรู้สึกว่าหน้าโหลดเร็วขึ้นชัดเจน (ไม่เกี่ยวกับสิทธิ์แอดมิน เกิดกับทุกบัญชีเหมือนกัน)',
  ],
  '10.22.518': [
    '🐛 แก้บั๊กเดียวกับการ์ด Dashboard เมื่อวันก่อน แต่คราวนี้ครอบคลุมทั้งระบบ: การ์ดลัดในหน้าภาพรวมครู (ห้องเรียน/คอร์สวิชา/คำร้องรออนุมัติ) บางครั้งกดแล้วเจอ "ไม่พบข้อมูลครู กรุณาลองรีเฟรชหน้าใหม่" เพราะข้อมูลครูโหลดไม่ทัน (กดจากเมนูซ้ายไม่เจอปัญหาเพราะกดช้ากว่า) — ย้ายการป้องกันไปไว้ที่จุดกลางของการนำทางทั้งหมดแล้ว กันไม่ให้เกิดซ้ำกับปุ่ม/เมนูไหนอีก',
  ],
  '10.22.517': [
    '⚙️ ตั้งค่า → นักเรียน → "ออก QR Code ใหม่": เพิ่มช่องแก้ข้อความที่ส่งกลับไปแจ้งนักเรียนอัตโนมัติตอนทำบัตรเสร็จ (ค่าเริ่มต้นเปลี่ยนจาก "ห้องธุรการ" เป็น "ห้องปกครอง" ตามที่แจ้ง) แก้ข้อความเองได้เลยไม่ต้องแก้โค้ด',
  ],
  '10.22.516': [
    '🐛 แก้บั๊ก: การ์ด "Dashboard ทะเบียน/หัวหน้ากลุ่ม/council_advisor" ในหน้าภาพรวมครู บางครั้งกดแล้วค้าง ไม่เปิดขึ้นเลย (error ปิดเงียบ เกิดจากข้อมูลครูโหลดไม่ทันตอนกดคลิกเร็วๆ) — ตอนนี้กันไว้แล้ว โหลดซ้ำอัตโนมัติถ้ายังไม่พร้อม',
  ],
  '10.22.515': [
    '🏫 เปิดตัว "แชทห้องเรียน" — ครูโดเนทระดับ 3 ขึ้นไปคุยกับนักเรียนในห้องที่สอนได้โดยตรง (ครูทั่วไปทดลองใช้ฟรี 1 ห้อง/ภาคเรียน เลือกใหม่ได้อัตโนมัติทุกภาคเรียน) เปิดจากปุ่ม 🏫 ในหน้ารายละเอียดห้องเรียนของครู — นักเรียนกดปุ่ม "แชทห้องเรียน" ในหน้าภาพรวม เห็นแท็บสลับได้เฉพาะรายวิชาที่เปิดใช้งานแชทแล้วเท่านั้น',
  ],
  '10.22.514': [
    '🖨️ แท็บ "คำขอใหม่" (พิมพ์ QR Code นักเรียน): กด "ทำเสร็จแล้ว" ตอนนี้เด้งป๊อบอัพให้เลือกเหตุผล (ทำหาย/ชำรุด/อื่นๆ) และจำนวนซ้ำก่อนพิมพ์จริง แบบเดียวกับหน้าพิมพ์รายบุคคลปกติ แทนที่จะพิมพ์ทันที 1 ใบแบบเดิม',
    '💬 คำขอทำบัตร QR Code ของนักเรียนตอนนี้ขึ้นในแท็บ "ประวัติของฉัน" ของวิดเจ็ต Feedback ด้วย — ติดตามสถานะได้เอง พอแอดมิน/ครูกดทำเสร็จแล้ว จะมีข้อความแจ้งกลับไปในเธรดเดิมทันทีว่าทำเสร็จแล้ว มารับได้ที่ไหน',
  ],
  '10.22.513': [
    '👑 แชทครูผู้สนับสนุน — เพิ่มประกาศปักหมุด (แอดมินสร้างได้จากกลุ่มใหญ่ ตรึงบนสุด คลิกดูประวัติย้อนหลังได้) และปุ่ม 🔖 บันทึกโน้ตใต้ทุกข้อความ กดเก็บข้อความสำคัญไว้ดูทีหลังผ่านหน้า "โน้ตของฉัน" ได้ทุกห้องแชท',
  ],
  '10.22.512': [
    '👑 แชทครูผู้สนับสนุน — เพิ่ม "แชทย่อยกับแอดมิน" ครูกดปุ่ม "+ เริ่มแชทกับแอดมิน" สร้างเองได้จากแท็บ 🛡️ แอดมิน ในหน้าต่างแชท (เห็นเฉพาะครูคนนั้นกับแอดมิน) ฝั่งแอดมินมีแถบสลับห้อง เลือกได้ว่าจะดูกลุ่มใหญ่หรือแชทของครูคนไหน',
  ],
  '10.22.511': [
    '👑 แชทครูผู้สนับสนุน — บนมือถือเปิดเป็นป๊อปอัพเต็มจอ (เดสก์ท็อปยังเป็นการ์ดลอยกลางจอเหมือนเดิม) และเปลี่ยนสติกเกอร์ระดับโดเนทจากตัวอักษรเล็กหน้าชื่อ เป็นรูปโปรไฟล์วงกลมพร้อมชื่อครูตัวเล็กด้านล่าง ดูออกทันทีว่าข้อความไหนเป็นของใคร',
  ],
  '10.22.510': [
    '👑 แชทครูผู้สนับสนุน — เพิ่มแนบรูปภาพในแชทได้แล้ว (บีบอัดอัตโนมัติก่อนอัปโหลด) และแสดงสติกเกอร์ระดับโดเนทหน้าชื่อครู (คำนวณจากยอดโดเนทเฉพาะภาคเรียนนี้)',
  ],
  '10.22.509': [
    '🐛 แก้บั๊ก: หน้า "มอบสิทธิ์ครูจัดการ QR Code" โหลดรายชื่อครูที่ได้รับสิทธิ์แล้วไม่ขึ้นเลย (query ผิดพลาดภายใน ไม่กระทบการมอบสิทธิ์จริงที่บันทึกสำเร็จอยู่แล้ว) — แก้ให้แสดงรายชื่อถูกต้องแล้ว',
  ],
  '10.22.508': [
    '👑 ปรับทางเข้า "แชทครูผู้สนับสนุน" ฝั่งครูเป็นปุ่มลอยมุมขวาล่าง (ซ้อนเหนือปุ่ม 💬 Feedback) เปิดเป็นป๊อปอัพเข้าถึงได้จากทุกหน้าโดยไม่ต้องออกจากงานที่ทำอยู่ — ย้ายจากเมนู sidebar เดิม',
  ],
  '10.22.507': [
    '💬 เปิดตัวฟีเจอร์ใหม่ "แชทครูผู้สนับสนุน" เฟส 1 — กลุ่มแชทข้อความสำหรับครูที่โดเนทในภาคเรียนนี้ (ระดับ 1 ขึ้นไป) คุยกับครูท่านอื่นและแอดมินได้แบบเรียลไทม์ (ยังเป็นเวอร์ชันข้อความล้วน รูปภาพ/สติกเกอร์/ประกาศปักหมุด/บันทึกโน้ต/แชทห้องเรียนจะตามมาในเฟสถัดไป)',
  ],
  '10.22.506': [
    '🐛 แก้บั๊กระบบแบบทดสอบออนไลน์ (Quiz): ครูที่ยังไม่ได้โดเนทเริ่มสอบจริงกับนักเรียนไม่ได้เลยแม้แต่ครั้งเดียว (ตั้งใจให้ทดลองฟรีได้ 2 ครั้ง แต่ค่าตั้งค่าระบบผิดพลาดทำให้กลายเป็น 0 ครั้ง) — แก้แล้ว ครูทั่วไปทดลองเริ่มสอบจริงได้ 2 ครั้งตามที่ตั้งใจไว้',
  ],
  '10.22.505': [
    '🎫 ปรับระบบ "แจ้งขอทำบัตร QR Code" ใหม่ทั้งหมด — เดิมฝากไว้ในระบบความคิดเห็นทั่วไป ย้ายมาต่อยอดกับระบบ "พิมพ์ QR Code นักเรียน" ที่มีอยู่แล้วแทน (หน้าเดียวกับที่ครู/แอดมินใช้พิมพ์บัตรอยู่ปกติ) เพิ่มแท็บ "🙋 คำขอใหม่" แสดงคำขอจากนักเรียน กดทำเสร็จแล้วพิมพ์บัตร+บันทึกประวัติให้อัตโนมัติในขั้นตอนเดียว พร้อมทำเครื่องหมาย "มารับแล้ว/ชำระค่าปรับแล้ว" แยกกัน',
    '👥 เพิ่มหน้า "มอบสิทธิ์ครูจัดการ QR Code" ให้แอดมินมอบสิทธิ์ครูคนไหนก็ได้ให้เข้าหน้านี้และรับ Push Notification คำขอใหม่ได้เหมือนแอดมิน (เมนู "พิมพ์/คำขอ QR Code" จะโผล่ในแถบเมนูของครูที่ได้รับสิทธิ์)',
  ],
  '10.22.504': [
    '📝 ระบบลูกเสือ (TERANGGANU): แอดมิน/ครูผู้รับผิดชอบเปิดฟอร์มกรอกแบบสำรวจแทนนักเรียนที่เข้าไม่ถึงระบบเองได้แล้ว (ปุ่ม "กรอกแทน"/"แก้ไข" ในแท็บนักเรียน) แก้ปัญหานักเรียน ม.1/ม.2 บางส่วนทำให้การสำรวจล่าช้า',
    '🔐 ระบบลูกเสือ (TERANGGANU): เพิ่มบทบาท "ผู้ช่วยกรอกข้อมูลแทนนักเรียน" แยกจาก "ผู้รับผิดชอบ" — มอบหมายได้จากแท็บผู้รับผิดชอบ ครูที่ได้รับมอบหมายเห็นแค่รายชื่อนักเรียน+ปุ่มกรอกแทนเท่านั้น ไม่เห็นตั้งค่า/การชำระเงิน/ข้อมูลอื่นของระบบค่าย',
  ],
  '10.22.503': [
    '🐛 แก้บั๊กสำคัญ: ปุ่ม "แสดง QR Code ของฉัน" ในหน้าโปรไฟล์นักเรียนกดไม่ได้เลย (ค้าง error ปิดเงียบ) เพราะโค้ดอ้างถึงตัวแปรตั้งค่าระบบที่ไม่ได้โหลดไว้ในหน้านี้ — แก้แล้ว',
    '🎫 เพิ่มปุ่ม "แจ้งขอทำบัตร QR Code" ในหน้าโปรไฟล์นักเรียน กดแล้วยืนยันครั้งเดียวส่งถึงแอดมินทันที (ต่อยอดจากระบบความคิดเห็นเดิม ไม่ต้องพิมพ์อะไรเอง) พร้อมส่ง Push Notification แจ้งแอดมินทุกคนที่เปิดรับการแจ้งเตือนไว้ กดที่การแจ้งเตือนแล้วเด้งเข้าหน้า "Feedback ถึงแอดมิน" ให้ทันที',
    '📋 หน้า "Feedback ถึงแอดมิน" เพิ่มสถานะเฉพาะคำขอทำบัตร QR Code — ปุ่มกดสลับ "ทำเสร็จแล้ว/มารับแล้ว/ชำระค่าปรับแล้ว" แยกกัน 3 อัน ต่อ 1 คำขอ',
  ],
  '10.22.502': [
    '📋 ระบบสภานักเรียน: หน้า "ใบสมัคร" (แอดมิน/ครูที่ปรึกษาสภา) เพิ่มแถบสลับ สภาชาย/สภาหญิง แยกดูไม่ปนกัน — เพิ่มตัวกรอง ระดับชั้น, ฝ่ายที่สมัคร, สถานะรับรองครูที่ปรึกษาสามัญ, สถานะรับรองพี่สภา ใช้ร่วมกับตัวกรองสถานะเดิมได้ทั้งหมด — ถ้ายังไม่ได้เลือกฝ่าย หน้าจะจัดกลุ่มแสดงแยกตามฝ่ายให้อัตโนมัติ — แก้บั๊กเดิมที่ครูที่ปรึกษาสภา (ไม่ใช่แอดมิน) เปิดหน้านี้แล้วเจอหน้าว่างเปล่าด้วย (เมนูให้เข้าได้แต่โค้ดกันไว้)'
  ],
  '10.22.501': [
    '🐛 ฟุตซอล: แก้บั๊กยืนยันคืนเงินไม่สำเร็จแบบ error ดิบๆ (duplicate key) เวลาทีมนั้นถูกยืนยันไปแล้วจากอีกเซสชัน/แท็บก่อนหน้า (ข้อมูลฝั่งเครื่องยังไม่รีเฟรช) — ตอนนี้ระบบเช็คสถานะทีมจากฐานข้อมูลจริงก่อนยืนยันเสมอ เจอว่ายืนยันไปแล้วจะแจ้งข้อความเข้าใจง่ายพร้อมรีเฟรชให้อัตโนมัติแทน'
  ],
  '10.22.500': [
    '🐛 ฟุตซอล: แก้หน้าคืนเงินค่าประกันทีมมองไม่เห็นรายชื่อทีม — กล่องตั้งค่า "ผู้จ่ายคืนเงิน" (ชื่อ/ลายเซ็น) เดิมฝังอยู่บนสุดของหน้ากินพื้นที่จนดันรายชื่อทีมลงไปพ้นจอ ย้ายออกเป็นป๊อบอัพแยก เปิดจากปุ่ม ⚙️ ข้างปุ่มสลับ ม.ต้น/ม.ปลาย แทน'
  ],
  '10.22.499': [
    '🧾 ฟุตซอล: ยืนยันคืนเงินค่าประกันทีมตอนนี้ต้องให้หัวหน้าทีมเซ็นรับเงินสด (วาดลายเซ็นเลือกสีได้ ค่าเริ่มต้นน้ำเงินเข้ม) + เลือกวิธีคืนเงิน โอน (แนบสลิป) หรือเงินสด (แนบรูปนักเรียนถือเงิน+ใบเสร็จได้หลังพิมพ์) รูปที่แนบบีบขนาดอัตโนมัติ — เสร็จแล้วเด้งป๊อบอัพพร้อมปุ่มพิมพ์ใบเสร็จทันที — เพิ่มสรุปยอด "ต้องคืนทั้งหมด/คืนไปแล้ว/คงเหลือ" ที่หัวหน้าคืนเงิน'
  ],
  '10.22.498': [
    '🧾 ฟุตซอล: ใบเสร็จคืนเงินค่าประกันทีมมีลายเซ็นแล้ว — เพิ่มหน้าตั้งค่า "ผู้จ่ายคืนเงิน" กรอกชื่อ-ตำแหน่ง + วาดลายเซ็นเองด้วยเมาส์/นิ้ว หรืออัปโหลดรูปลายเซ็นก็ได้ ใบเสร็จทุกใบจะโชว์ลายเซ็นนี้เป็น "ผู้จ่ายเงิน" อัตโนมัติ พร้อมช่อง "ผู้รับเงิน" ที่ดึงชื่อหัวหน้าทีมของแต่ละทีมมาใส่ให้เอง (ทีมไหนยังไม่มีหัวหน้าทีมจะเว้นว่างไว้ให้เซ็นสด)'
  ],
  '10.22.497': [
    '📢 ระบบลูกเสือ (TERANGGANU): เพิ่มระบบแจ้งเตือนด่วนให้กรอกแบบสำรวจ — ครู/นักเรียนที่เป็นผู้เข้าร่วมค่ายจริงและยังไม่กรอกข้อมูลเลย จะเห็นป๊อบอัพเต็มจอเตือนอัตโนมัติทันทีที่เข้าหน้าแดชบอร์ดหลัก พร้อมปุ่มลัดไปกรอกและคำแนะนำจุดที่ต้องกดแยกสำหรับนักเรียน/ครู (คนที่ไม่เกี่ยวข้องจะไม่เห็นเลย) — เพิ่มปุ่ม "📢 แจ้งเตือนด่วนตอนนี้" ในหน้าตั้งค่าค่าย ส่ง push notification เสริมไปเครื่องคนที่ยังไม่กรอก — แก้บั๊กแฝง: เมนู "ค่ายลูกเสือ TERANGGANU" ในแดชบอร์ดครู เดิมเห็นเฉพาะครูที่เป็นผู้จัดการ ครูทั่วไปที่แค่ไปร่วมค่ายไม่มีทางเข้าเมนูได้เลย แก้ให้เห็นเมนูด้วยแล้ว'
  ],
  '10.22.496': [
    '🇬🇧 ระบบลูกเสือ (TERANGGANU): ช่อง "คำนำหน้าภาษาอังกฤษ" กรองตัวเลือกตามเพศให้อัตโนมัติแล้ว (ชาย: MR./MASTER, หญิง: MRS./MS./MISS) ไม่ต้องไล่หาเองในตัวเลือกที่ไม่เกี่ยวกับตัวเอง — ช่องที่อยู่: พอบันทึกที่อยู่แล้ว ตัวเลือกจังหวัด/อำเภอ/ตำบลจะซ่อนอัตโนมัติ (ข้อมูลอยู่ในช่องรายละเอียดที่อยู่ครบแล้ว) กันสับสนว่าต้องกรอกซ้ำ พร้อมปุ่ม "แก้ที่อยู่ด้วยตัวเลือก" ไว้เรียกกลับมาใช้ได้เสมอถ้าต้องการแก้ไข'
  ],
  '10.22.495': [
    '🛂 ระบบลูกเสือ (TERANGGANU): แก้บั๊กด่วน — ครู/นักเรียนที่ไม่มีพาสปอร์ตกรอกแบบสำรวจไม่ผ่าน (ฐานข้อมูลยังบังคับช่องนี้ค้างอยู่จริง) แก้แล้ว — เพิ่มสวิตช์ในหน้าตั้งค่า "บังคับกรอกข้อมูลหนังสือเดินทาง" เปิด/ปิดได้เอง (ปิดโดยดีฟอลต์) พร้อมปุ่ม "🔔 แจ้งเตือนผู้ที่ยังไม่กรอกให้กรอก" ส่ง push notification เฉพาะคนที่ขาดข้อมูลจริง และเด้งข้อความเตือนในแอปทันทีที่คนนั้นเปิดแบบสำรวจ'
  ],
  '10.22.494': [
    '🏠 ระบบลูกเสือ (TERANGGANU): แบบสำรวจนักเรียน+ครู เปลี่ยนช่อง "ที่อยู่ปัจจุบัน" จากพิมพ์เองล้วน เป็นเลือกจังหวัด → อำเภอ/เขต → ตำบล/แขวง แบบพิมพ์ค้นหาได้ (มีข้อมูลครบ 77 จังหวัด/930 อำเภอ/7,452 ตำบลทั่วประเทศ) พร้อมเติมรหัสไปรษณีย์ให้อัตโนมัติ ประกอบเป็นที่อยู่เต็มให้เองไม่ต้องพิมพ์จังหวัด/อำเภอ/ตำบลซ้ำ — แก้ป้ายชื่อช่อง "ชื่อภาษาอังกฤษ" เป็น "ชื่อ-สกุลภาษาอังกฤษ" ให้ตรงความหมาย'
  ],
  '10.22.493': [
    '🎨 ระบบสภานักเรียน: หน้าตั้งค่าเทมเพลตเกียรติบัตรกิจกรรม เพิ่มปุ่ม "ออกแบบ" เปิดตัวแก้ไขลากวางเต็มรูปแบบ — ลากข้อความ/เลขที่/วันที่/ลายเซ็นไปวางตำแหน่งไหนก็ได้บนภาพจริง แก้ข้อความ สี ขนาดตัวอักษร ตัวหนา การจัดวาง เพิ่ม/ลบข้อความเอง เปลี่ยนพื้นหลังเป็นรูปอัปโหลดหรือดีไซน์สำเร็จรูปได้ทุกเมื่อ ทั้งหมดทำในหน้าตั้งค่าล้วนๆ ไม่ต้องแก้โค้ด — เทมเพลตเก่าก่อนอัปเดตยังแสดงหน้าตาเดิมทุกอัน (ไม่กระทบ) แค่เปิด "ออกแบบ" เพื่อเริ่มปรับแต่งต่อได้ทันที'
  ],
  '10.22.491': [
    '🇬🇧 ระบบลูกเสือ (TERANGGANU): แบบสำรวจนักเรียน+ครู เพิ่มช่อง "คำนำหน้าอังกฤษ" (MR./MRS./MS./MASTER/MISS) ให้ผู้กรอกเลือกเอง และบังคับชื่อ-สกุลภาษาอังกฤษเป็นตัวพิมพ์ใหญ่เสมอ (บังคับจริงที่ฐานข้อมูล ไม่ใช่แค่หน้าจอ) — เพิ่มตรวจสอบเลขประจำตัวประชาชนต้องเป็นตัวเลขล้วน 13 หลักพอดี ทั้งฝั่งกรอกและฝั่งบันทึก — อัปเดตใบรายชื่อพิมพ์/ส่งออก CSV/หน้าดูรายละเอียด ให้แสดงคำนำหน้าอังกฤษด้วย'
  ],
  '10.22.490': [
    '📷 ระบบสภานักเรียน: หน้าสแกน QR เช็คอินกิจกรรม เพิ่มปุ่ม "✕ ยกเลิก" ต่อท้ายแต่ละรายการในประวัติเช็คอินรอบนี้ กดแล้วลบการเช็คอินที่ผิดคนออกได้ทันที (ตามแพทเทิร์นเดียวกับระบบฟุตซอล) — ส่วนช่องกรอกรหัสนักเรียนสำรองมีอยู่แล้วเดิม'
  ],
  '10.22.489': [
    '📝 ระบบสภานักเรียน: หน้า "รับรองผู้สมัคร (สภา)" ตอนนี้เห็นเฉพาะใบสมัครที่ผู้สมัครเลือกตัวเองไว้เท่านั้น — ตัด pool กลาง (ใบสมัครที่ไม่ได้ระบุพี่สภาไว้) ออกตามที่ยืนยัน ใบสมัครแบบนั้นเจ้าของต้องกลับไปเลือกพี่สภาเองก่อนถึงจะมีคนรับรองให้ได้'
  ],
  '10.22.488': [
    '🚨 แก้บั๊กสำคัญ: สมาชิกสภานักเรียนที่ถูกเลือกให้รับรองใบสมัคร ไม่เคยเห็นใบสมัครในหน้า "รับรองผู้สมัคร (สภา)" เลยตั้งแต่สร้างฟีเจอร์นี้ (สาเหตุ: ไม่มีสิทธิ์อ่านข้อมูลระดับฐานข้อมูลสำหรับหน้านี้ ไม่เกี่ยวกับฟีเจอร์เลือกพี่สภาเจาะจงที่เพิ่งเพิ่มไป) — เพิ่มสิทธิ์อ่านให้ครบแล้ว'
  ],
  '10.22.487': [
    '📝 ระบบสภานักเรียน: ใบสมัครที่ส่งไปแล้ว (สถานะยังรอดำเนินการ + ยังไม่มีใครรับรอง) นักเรียนกลับเข้าไปเลือก/เปลี่ยน "พี่สภาที่ต้องการให้รับรอง" เองได้จากหน้ารายละเอียดใบสมัครของตัวเอง — ไม่ต้องสมัครใหม่'
  ],
  '10.22.486': [
    '📝 ระบบสภานักเรียน: ใบสมัครเพิ่มขั้นตอน "เลือกพี่สภาที่ต้องการให้รับรอง" (โผล่เฉพาะตอนเปิดใช้การรับรองจากสภาในหน้าตั้งค่า) — เลือกได้จากรายชื่อสมาชิกสภาปัจจุบันเพศเดียวกันพร้อมรูป+ตำแหน่ง คนที่ถูกเลือกเท่านั้นจะเห็นและรับรองใบสมัครนี้ได้ (ไม่ใช่ pool กลางที่ใครก็รับรองได้เหมือนเดิม) ใบสมัครเก่าก่อนอัปเดตยังเป็น pool กลางตามเดิม'
  ],
  '10.22.485': [
    '⚜️ ระบบลูกเสือ (TERANGGANU): แยกช่อง "เลขประจำตัวประชาชน" (บังคับกรอก) ออกจากช่อง "เลขที่หนังสือเดินทาง" (ยังไม่บังคับตอนนี้) ในแบบสำรวจนักเรียน/ครู เป็นคนละฟิลด์กันจริงแล้ว — ใบรายชื่อที่พิมพ์คอลัมน์ "เลขบัตรประชาชน" ก็อ่านจากฟิลด์ที่ถูกต้องแล้วเช่นกัน'
  ],
  '10.22.484': [
    '🐛 ระบบลูกเสือ (TERANGGANU): แก้บั๊กนักเรียนกรอกแบบสำรวจไม่ผ่าน เพราะช่อง "เลขที่หนังสือเดินทาง" บังคับกรอกทั้งที่นักเรียนส่วนใหญ่ยังไม่มีพาสปอร์ต — เปลี่ยนเป็นช่องไม่บังคับ พร้อมปรับชื่อช่องเป็น "เลขบัตรประชาชน / เลขที่หนังสือเดินทาง (ถ้ามี)" ให้กรอกเลขบัตรประชาชนแทนได้ หรือเว้นว่างไว้ก่อนก็ได้ถ้ายังไม่มีทั้งสองอย่าง'
  ],
  '10.22.483': [
    '🧠 Smart Classroom: ปรับปุ่ม "สร้างใหม่เดี๋ยวนี้" ในหน้าเปิดควิซให้เชื่อมกับหน้าคลังข้อสอบจริง — ตั้งชื่อคลังแล้วส่งต่อไปหน้าเพิ่มคำถามตามปกติทันที มีเครื่องมือครบเหมือนสร้างจากหน้าคลังข้อสอบเอง (✨ AI ช่วยคิดข้อสอบ, นำเข้า CSV, พิมพ์เอง) พอกลับมากดสร้างแบบทดสอบจากคลังนี้ ห้องเรียนที่กำลังสอนอยู่จะถูกเลือกไว้ให้อัตโนมัติด้วย'
  ],
  '10.22.482': [
    '📢 ประกาศ: เพิ่มกลุ่มเป้าหมายใหม่ "⚽ นักกีฬาฟุตซอล" — โพสต์ประกาศเห็นเฉพาะนักเรียนที่ลงทะเบียนเป็นนักกีฬาในระบบ AZFUTSALCUP เท่านั้น (เลือกได้ทั้งหน้าประกาศแอดมินและหน้าประกาศของหัวหน้าฝ่าย)'
  ],
  '10.22.481': [
    '🧠 Smart Classroom: เพิ่มปุ่ม "+ ควิซ" ในแผง "เปิดควิซสด" — เปิดควิซให้ห้องที่กำลังสอนอยู่ได้ทันทีโดยไม่ต้องออกจากหน้า เลือกได้ว่าจะ "เลือกจากคลังข้อสอบ" เดิม (ตั้งชื่อ+จำนวนข้อ+เวลาแล้วยิงเข้าห้องนี้เลย) หรือ "สร้างใหม่เดี๋ยวนี้" (พิมพ์คำถาม+ตัวเลือกสดๆ อย่างน้อย 1 ข้อ) — ตั้งค่าขั้นสูง (สลับข้อ/ล็อกคำตอบ/ผูกคะแนน ฯลฯ) ยังปรับเพิ่มได้ทีหลังจากหน้าคลังข้อสอบตามปกติ'
  ],
  '10.22.480': [
    '⚜️ ระบบลูกเสือ (TERANGGANU): ใบรายชื่อโหมด "ส่งราชการ" ตอนนี้เป็นรูปแบบทางการเต็มขั้น — ใช้ฟอนต์ TH Sarabun New, มีบรรทัด "แนบท้ายหนังสือที่ .../ลงวันที่ .../เรื่อง ..." ให้กรอกมือ, มีช่องลงนามครูผู้ควบคุมคณะ+ผู้อำนวยการท้ายเอกสาร, ตัดคอลัมน์ไซซ์เสื้อและค่าค่ายออก (ข้อมูลภายในไม่จำเป็นต้องส่งหน่วยงานภายนอก) — โหมด "ใช้ภายใน" ยังเหมือนเดิมทุกอย่าง'
  ],
  '10.22.479': [
    '⚜️ ระบบลูกเสือ (TERANGGANU): ใบรายชื่อนักเรียนแยกปุ่มพิมพ์ 2 แบบ — "ใช้ภายใน" (ตัดชื่อยาวด้วย "…" ให้แถวเท่ากัน สะดวกตรวจความครบถ้วน) กับ "ส่งราชการ" (ไม่ตัดข้อมูลใดๆ ปล่อยชื่อตกบรรทัดได้ตามจริง + ตัดชื่อกลุ่ม/หมู่ท้ายห้องออกเหลือแค่ "ม.X/Y")'
  ],
  '10.22.478': [
    '🏆 ฟุตซอล: ขยายการ์ดเกียรติบัตรในรายการให้ใหญ่พอเห็นลวดลายเทมเพลตจริงชัดเจน (โลโก้/กรอบทอง) แทนที่จะดูเหมือนมีแค่ตัวหนังสือเปล่าๆ ตัดกรอบการ์ดสีเทาเดิมออก ให้ตัวเกียรติบัตรเองเป็นการ์ดพร้อมเงาเบาๆ'
  ],
  '10.22.477': [
    '⚜️ ระบบลูกเสือ (TERANGGANU): ใบรายชื่อที่พิมพ์ลดขนาดตัวอักษร/ระยะห่างลงให้แต่ละแถวสูงเท่ากันแน่นอนขึ้น พร้อมเพิ่มพื้นที่คอลัมน์ชื่อ-สกุล/ชื่ออังกฤษ — ถ้าชื่อยาวเกินคอลัมน์จะตัดจบด้วย "…" แทนการตกบรรทัด รับประกันว่าทุกแถวมีความสูงเท่ากันเสมอ'
  ],
  '10.22.476': [
    '⚜️ ระบบลูกเสือ (TERANGGANU): แก้ตารางใบรายชื่อที่พิมพ์ให้แถวเรียงสวยเสมอกัน — กำหนดความกว้างแต่ละคอลัมน์ตายตัว และล็อกไม่ให้คอลัมน์ค่าสั้นๆ (ลำดับ/รหัส/ชั้น/เพศ/ไซซ์เสื้อ/บัตรประชาชน/วันเกิด/โทรศัพท์) ตกบรรทัดโดยไม่จำเป็น'
  ],
  '10.22.475': [
    '🏆 ฟุตซอล: แก้การ์ดเกียรติบัตรในหน้ารายการแสดงใหญ่เกินไป (โผล่เต็มความกว้างจอเวลาเปิดผ่านเมนูแอดมิน) ย่อเป็นการ์ดขนาดกะทัดรัด แตะที่การ์ดเพื่อดูเต็มจอ/พิมพ์แทน'
  ],
  '10.22.474': [
    '⚜️ ระบบลูกเสือ (TERANGGANU): ใบรายชื่อที่พิมพ์เพิ่มคอลัมน์ ชื่อ-สกุลภาษาอังกฤษ, เลขบัตรประชาชน, วันเดือนปีเกิด, ที่อยู่ — รวมคอลัมน์มัดจำ+ส่วนที่เหลือเป็นคอลัมน์เดียว "ค่าค่าย"'
  ],
  '10.22.473': [
    '🏆 ฟุตซอล: รองรับนักเรียนที่ได้เกียรติบัตรมากกว่า 1 ใบ (เช่น ทีมได้แชมป์ + ตัวเองได้ MVP) แสดงเป็นการ์ดแยกทุกใบ พร้อมเห็นรูปเกียรติบัตรจริงในการ์ดทันทีไม่ต้องกดพิมพ์ก่อน (ต้องอัปโหลดพื้นหลังเกียรติบัตรไว้ก่อนถึงจะเห็นรูปจริง)'
  ],
  '10.22.472': [
    '🚨 แก้บั๊กสำคัญ: ลบช่อง "กำหนดวันหยุดเอง" ออกจากหน้าเช็คชื่อของครู — เดิมครูคนเดียวติ๊กว่าห้องตัวเองหยุด กลับกลายเป็นวันหยุดของทุกห้องทุกวิชาทั้งโรงเรียนไปด้วย (พบผลกระทบจริง 5,199 แถวเช็คชื่อ ~90 ห้องเรียนถูกตีธง "ตรงกับวันหยุด" ผิดพลาด) ลบ entry ที่ผิดออกจากฐานข้อมูลแล้ว วันหยุดต่อจากนี้กำหนดได้จากหน้าตั้งค่าวันหยุดโรงเรียนของแอดมินเท่านั้น'
  ],
  '10.22.471': [
    '🏆 ฟุตซอล: นักเรียนที่ login ผ่านระบบหลักแล้วเข้าดูเกียรติบัตรจากเมนู "AZFUTSALCUP" ไม่ต้องพิมพ์รหัสนักเรียนค้นหาเองอีกต่อไป ระบบแสดงเกียรติบัตรของตัวเองให้ทันที (เข้าทาง azfutsal.html ตรงๆ หรือแอดมิน/ครูเปิดดูแทนคนอื่น ยังค้นหาด้วยรหัสได้ตามปกติ)'
  ],
  '10.22.470': [
    '🏆 ฟุตซอล: เกียรติบัตรพิมพ์ได้จริงแล้ว — วาดชื่อ+ข้อความรางวัลทับพื้นหลังที่แอดมินอัปโหลด (ฟอนต์ Charmonman) พร้อมปุ่ม "🖨️ พิมพ์เกียรติบัตร" ในหน้าค้นหาเกียรติบัตร เพิ่มหน้าตั้งค่าแก้ข้อความรางวัลแยกตามประเภท (แชมป์/รองแชมป์/อันดับ 3/MVP/ดาวซัลโว/GK ยอดเยี่ยม/ผู้เข้าร่วม) ใช้ {event} แทนชื่อกิจกรรมอัตโนมัติ ไม่ต้องแก้โค้ดทุกปี'
  ],
  '10.22.469': [
    '⚜️ ระบบลูกเสือ (TERANGGANU): เพิ่มตัวกรองรายชื่อนักเรียน 3 แบบ (แบบสำรวจกรอกแล้ว/ยังไม่กรอก, มัดจำชำระแล้ว/ยังไม่ชำระ, ส่วนที่เหลือชำระแล้ว/ยังไม่ชำระ) — ใบรายชื่อที่พิมพ์ตอนนี้เรียงตามระดับชั้น ม.1-ม.6 แล้วตามห้อง แล้วตามรหัสนักเรียนให้อัตโนมัติ — แบบสำรวจนักเรียน/ครูเพิ่มปุ่ม "📷 เลือกรูปบัตร/พาสปอร์ต" ให้ AI ช่วยอ่านและเติมข้อมูลในฟอร์มอัตโนมัติ (ตรวจสอบความถูกต้องก่อนบันทึกเสมอ)'
  ],
  '10.22.468': [
    '🐛 แก้บั๊กสำคัญ: ไฟล์ HTML หลัก (azfutsal.html, dashboard.html, student.html, teacher.html, terangganu.html) ใช้เลขเวอร์ชันเก่าค้างในพารามิเตอร์กันแคช (?v=...) ของสคริปต์หลัก ทำให้ผู้ใช้ยังโดนเบราว์เซอร์/แคชส่งโค้ด JS เวอร์ชันเก่ากลับมาแม้ deploy โค้ดใหม่ไปแล้ว — อัปเดตให้ตรงเวอร์ชันปัจจุบันทั้งหมด'
  ],
  '10.22.467': [
    '🐛 แก้บั๊กอัปโหลดพื้นหลัง/เพลงเกียรติบัตรฟุตซอลไม่สำเร็จเมื่อชื่อไฟล์เป็นภาษาไทย (Supabase Storage ปฏิเสธชื่อไฟล์ที่มีอักขระนอก ASCII) — ตัดชื่อไฟล์ให้ปลอดภัยก่อนอัปโหลดเหมือนจุดอัปโหลดโลโก้ใบเสร็จคืนเงิน'
  ],
  '10.22.466': [
    '🐛 แก้บั๊ก Smart Classroom เข้าใจระดับโดเนทผิดพลาดจริงจนถึงต้นตอ — เดิมพึ่งตัวแปรที่ตั้งค่าแบบ fire-and-forget ตอน login ซึ่งอาจยังไม่พร้อมเวลาเปิดฟีเจอร์นี้จริง (ยืนยันแล้วด้วยข้อความ debug ชั่วคราว) เปลี่ยนให้ตรวจระดับโดเนทสดจากฐานข้อมูลทุกครั้งที่เปิด Smart Classroom แทน ไม่พึ่งค่าที่อาจไม่ทันอัปเดตอีกต่อไป (ลบข้อความ debug ออกแล้ว)'
  ],
  '10.22.465': [
    '🔧 ขยายข้อความ debug ใน Smart Classroom ให้คำนวณระดับโดเนทสดใหม่เทียบด้วย (ยังเป็นเวอร์ชันวินิจฉัยชั่วคราว จะลบออกเมื่อแก้เสร็จ)'
  ],
  '10.22.464': [
    '🔧 เพิ่มข้อความ debug ชั่วคราวในป๊อบอัพ Smart Classroom เพื่อตรวจสอบบั๊กที่แก้ใน 10.22.463 ยังไม่หายขาด (จะลบออกในเวอร์ชันถัดไป)'
  ],
  '10.22.463': [
    '🐛 แก้บั๊ก 2 จุดหลัง Smart Classroom เปิดให้ใช้ฟรี 1 ห้อง: (1) ครูที่โดเนทระดับสูงสุดอยู่แล้วกดเข้า Smart Classroom แล้วเจอป๊อบอัพ "เลือกห้องฟรี" ผิดพลาด (เกิดจาก race condition ตรวจระดับโดเนทยังไม่เสร็จตอนคลิกเร็ว) แก้ให้รอผลตรวจระดับโดเนทให้เสร็จก่อนเสมอ (2) หน้า "ห้องเรียนของฉัน" อาจดึงวิชาทั้งโรงเรียนมาแสดงแทนที่จะเป็นเฉพาะของตัวเองถ้าข้อมูลครูยังโหลดไม่เสร็จ — เพิ่มการป้องกันไม่ให้เกิดกรณีนี้อีก'
  ],
  '10.22.462': [
    '🎁 Smart Classroom เปิดให้ครูทั่วไป (ที่ยังไม่ถึงระดับโดเนทที่ปลดล็อก) ใช้ฟรีได้ 1 ห้องเรียนแล้ว — เลือกห้องได้ตอนกดเข้าใช้ครั้งแรก เลือกแล้วล็อกใช้เฉพาะห้องนั้นตลอด (เปลี่ยนภายหลังต้องติดต่อแอดมิน) ห้องอื่นยังคงต้องสนับสนุนระดับที่กำหนดถึงจะใช้ได้'
  ],
  '10.22.461': [
    '🎬 ประกาศแนบลิงก์วิดีโอได้แล้ว (YouTube/TikTok/Google Drive) — วางลิงก์ตอนสร้าง/แก้ไขประกาศ ผู้เปิดดูจะเห็นวิดีโอเล่นในป๊อบอัพประกาศได้เลยไม่ต้องออกไปแพลตฟอร์มอื่น'
  ],
  '10.22.460': [
    '🚨 ด่วน: ย้อนกลับการแก้ไข "round-robin" ของ 10.22.450 ที่ทำให้ตารางเช็คชื่อของหลายห้องเรียนแสดงวันที่ผิด/ตรงวันหยุด — ของเดิม (450) ตั้งใจแก้ปัญหาเฉพาะห้องเดียวแต่ดันเปลี่ยนพฤติกรรมของทุกห้องที่มีคาบ/สัปดาห์เกินหน่วยกิตไปด้วย ทำให้วันที่ของคาบที่ยังไม่ถึงเปลี่ยนไปจากที่เคยคำนวณไว้ (ข้อมูลเช็คชื่อที่บันทึกไปแล้วไม่ได้หายหรือถูกแก้ไข แค่ป้ายวันที่ที่แสดงคลาดเคลื่อน) — คืนพฤติกรรมเดิมกลับมาแล้ว ห้องเรียนของครูเจะสู (อก.ปวช.2/1) ยังถูกต้องเหมือนเดิมเพราะจุดนั้นแก้ที่ตารางสอนจริงในฐานข้อมูลไปแล้ว ไม่ได้พึ่งจุดนี้'
  ],
  '10.22.459': [
    '🐛 แก้บั๊กไฟล์แนบประกาศห้องเรียนไม่แสดงให้นักเรียนเห็น: หน้า "ประกาศของฉัน" ของนักเรียน (และของครูเอง) ไม่เคยดึง/แสดงไฟล์ที่แนบผ่านการอัปโหลดจริง (attachment_urls) เลย ทั้งที่ Smart Classroom อัปโหลดแล้วเก็บลงคอลัมน์นี้ตรงๆ — แก้ครบทุกจุด (ครูเห็นในลิสต์ของตัวเอง + นักเรียนเห็นในหน้าภาพรวม) พร้อมเพิ่มปุ่มอัปโหลดไฟล์จริงในหน้าสร้าง/แก้ไขประกาศของครู (เดิมมีแค่ช่องกรอกลิงก์ ไม่มีอัปโหลด)'
  ],
  '10.22.458': [
    '🎯 ประกาศระบุกลุ่มเป้าหมายได้แล้ว — ตอนสร้าง/แก้ไขประกาศ เลือกได้ว่าจะแสดงให้ "ทั้งหมด" / "ครูเท่านั้น" / "นักเรียนเท่านั้น" (ทั้งหน้าประกาศหลักและหน้าจัดการประกาศของหัวหน้าฝ่าย) มีป้ายกำกับให้เห็นในรายการ และ push แจ้งเตือนจะยิงตรงกลุ่มตามที่เลือกด้วย'
  ],
  '10.22.457': [
    '📢 ป๊อบอัพ "ประกาศ" (เดิมใช้แจ้งฟีเจอร์ใหม่) เปลี่ยนจากแบนเนอร์เล็กๆ มุมบนเป็นป๊อบอัพกลางจอ เห็นหัวข้อ/เนื้อหา/รูปแนบครบในที่เดียว ไม่ต้องกดอ่านเพิ่มเติมอีกต่อ และตอนนี้ฝั่งนักเรียนเห็นป๊อบอัพประกาศชุดเดียวกับครูด้วยแล้ว (เดิมมีแต่ฝั่งครู)'
  ],
  '10.22.456': [
    '✨ ระบบสภานักเรียน: เช็คชื่อกิจกรรมเปิดให้นักเรียนทั่วไป (ไม่ใช่แค่สมาชิกสภา) ได้แล้ว — ตั้งค่าต่อกิจกรรมได้ว่าจะเปิดหรือไม่ และมอบหมาย "ผู้รับผิดชอบกิจกรรม" (สมาชิกสภาคนไหนก็ได้) ให้จัดการเช็คชื่อ/เกียรติบัตรของกิจกรรมนั้นได้เอง, เพิ่มระบบเกียรติบัตรกิจกรรม — ตั้งเงื่อนไขรับเกียรติบัตรได้ (จำนวนครั้ง/วันที่บังคับ) ระบบคำนวณสิทธิ์อัตโนมัติจากการเช็คชื่อ พร้อม override รายคนได้เสมอ เลือกเทมเพลตแบบสำเร็จรูปหรืออัปโหลดดีไซน์เองก็ได้ — นักเรียนที่ได้รับเกียรติบัตรจะเห็นการ์ดในหน้าของตัวเอง เปิดดู/พิมพ์เกียรติบัตรได้ทันที'
  ],
  '10.22.455': [
    '🔑 ปรับปุ่ม "รีเซ็ทรหัสผ่าน" ในหน้าโปรไฟล์นักเรียน: กดแล้วเจอป๊อบอัพให้เลือกก่อนว่าจะ "เปลี่ยนด้วยตนเอง" (ฟอร์มเดิมย้ายมาเป็นป๊อบอัพ ไม่ฝังอยู่ในหน้าตลอดแล้ว) หรือ "ให้แอดมินรีเซ็ทให้" (เข้า Feedback ตามเดิม)'
  ],
  '10.22.454': [
    '🔑 นักเรียนติดต่อแอดมิน/ขอรีเซ็ทรหัสผ่านได้เร็วขึ้น: หน้าโปรไฟล์เปลี่ยนการ์ดติดต่อเป็นปุ่ม "ติดต่อผู้ดูแล" (เปิดหน้าส่ง Feedback) และปุ่ม "รีเซ็ทรหัสผ่าน" ใหม่ — กดแล้วยืนยันในป๊อบอัพ ระบบจะแจ้งแอดมินผ่าน Feedback พร้อมข้อมูลนักเรียน/รหัส/ห้องสามัญ-ศาสนา, แอดมินกดปุ่มเดียวรีเซ็ทให้ (รหัสผ่านใหม่ = รหัสนักเรียน) ระบบตอบกลับใน Feedback อัตโนมัติ และนักเรียนจะเห็นแบนเนอร์แจ้งเตือนตอนหน้ากรอกรหัสผ่านล็อกอินครั้งถัดไป'
  ],
  '10.22.453': [
    '✨ ระบบสภานักเรียน: หน้าหลักของนักเรียน/ครูทั่วไปเน้นปุ่ม "สมัครสภานักเรียน" หรือ "การเลือกตั้ง" ให้เด่นตามช่วงเวลาสำคัญปัจจุบัน — ตั้งค่าเองได้จากหน้าตั้งค่า > ทั่วไป > จุดเด่นในหน้าหลัก หรือปล่อยว่างให้ระบบคำนวณจากช่วงเปิด-ปิดรับสมัคร/เลือกตั้งที่ตั้งไว้ให้อัตโนมัติ'
  ],
  '10.22.452': [
    '✨ ระบบสภานักเรียน: วิดีโอแนะนำตัวในป๊อบอัพดูใบสมัครเปิดดูฝังในหน้าได้เพิ่มอีก 1 แพลตฟอร์ม (TikTok) และรองรับลิงก์ Google Drive แบบ open?id= เพิ่มจากเดิม (เดิมรองรับ YouTube + Drive แบบ /file/d/ เท่านั้น) — ลิงก์แพลตฟอร์มอื่นที่ฝังไม่ได้ยังคงเปิดแท็บใหม่เหมือนเดิม, นำเข้าข้อมูลสภาวาระปัจจุบันจริง (สมาชิก 97 คน กิจกรรม เช็คชื่อเข้าร่วม เกณฑ์ประเมิน โลโก้+สีธีม) จากระบบเดิมของโรงเรียน'
  ],
  '10.22.451': [
    '✨ ระบบสภานักเรียน: หน้าดูรายละเอียดเอกสารโครงการเปิดเต็มหน้าจอ แสดงเหมือนเอกสารจริง (มีโลโก้โรงเรียน+เลขข้อ 1-10 ตรงแบบฟอร์มต้นฉบับ) พร้อมปุ่มพิมพ์ในตัว, ช่องแผนงาน/ลักษณะโครงการ/สนองกลยุทธ์โรงเรียน/สนองมาตรฐานการศึกษา เปลี่ยนเป็นเลือกจากตัวเลือกที่ตั้งค่าไว้ล่วงหน้าได้ (ตั้งค่าเองในหน้าตั้งค่า > เกณฑ์และข้อความ), ช่องผู้รับผิดชอบโครงการเพิ่มปุ่มคลิกเพื่อใส่ชื่อครูที่ปรึกษาสภานักเรียนอัตโนมัติ, หน้าตั้งค่า > ตำแหน่ง เพิ่มตารางสรุปรวมจำนวนที่นั่งทั้งสภาชาย+หญิงต่อฝ่าย'
  ],
  '10.22.450': [
    '🐛 ปรับแก้บั๊กคาบต่อเนื่องต่อจาก 10.22.448: ของเดิม (448) ทำให้ครูที่มีคาบต่อเนื่องจริง (เช่น 2 คาบติดกัน) ได้คอลัมน์เช็คชื่อไม่ครบ เพราะยุบคาบต่อเนื่องเหลือแค่คาบเดียวไป — คืนค่าให้คาบต่อเนื่องแยกคอลัมน์เช็คชื่อเหมือนเดิม (เช็คตามคาบจริง) แล้วแก้จุดตัดวัน (cappedDOW) ให้เรียงแบบ round-robin ไล่ทีละวันที่ตั้งไว้จริงก่อน แทนการตัดจากลิสต์ที่เรียงแล้วตรงๆ ซึ่งเคยตัดบางวันทิ้งทั้งวันได้ (สาเหตุจริงของบั๊กเดิม)'
  ],
  '10.22.449': [
    '✨ ระบบสภานักเรียน: ฟอร์มสมัครกันข้อมูลหายแล้ว — บันทึกความคืบหน้าอัตโนมัติ ถ้ารีเฟรช/ปิดแท็บกลางคันจะมีตัวเลือกกู้คืนกลับมากรอกต่อได้ (ยกเว้นไฟล์รูป/เกียรติบัตรต้องแนบใหม่), เพิ่มปุ่ม "ดูใบสมัคร" ในหน้าใบสมัครของฉัน ให้นักเรียนเปิดดูใบสมัครแบบเต็มรูปแบบเหมือนที่แอดมิน/ครูเห็นได้แล้ว, จำนวนเกียรติบัตร/รางวัลขั้นต่ำที่ต้องแนบตั้งค่าเองได้จากหน้าตั้งค่า (เดิมล็อกไว้ที่ 5 ตายตัว)'
  ],
  '10.22.448': [
    '🐛 แก้บั๊ก: ห้องเรียนที่ตารางสอนมีคาบต่อเนื่อง (span_periods > 1) ทำให้ปพ.5 นับจำนวนวันสอน/สัปดาห์ผิด แล้วตัดวันจริงบางวันทิ้ง (เช่น สอน อังคาร+พุธ วันละ 1 คาบ กลายเป็นสอนวันอังคารซ้ำสองครั้งแทน) กระทบห้องเรียนที่มีลักษณะนี้ 46 ห้อง — แก้ getClassSessionDOWs ให้นับ "1 แถวตารางสอน = สอน 1 ครั้ง" ไม่คูณด้วยจำนวนคาบต่อเนื่องอีกต่อไป'
  ],
  '10.22.447': [
    '✨ ระบบสภานักเรียน: หน้า "สภาของเรา" แอดมินเพิ่ม/แก้ไข/ลบสมาชิกสภาวาระปัจจุบันได้เองแล้ว (เดิมเข้าเป็นสมาชิกได้แค่ผ่านแต่งตั้ง/เลือกตั้ง/เสนอคณะทำงานเท่านั้น) — ค้นหานักเรียนแล้วกำหนดตำแหน่ง+วันเริ่มวาระ, ลบเป็นแบบเก็บประวัติ (ไม่ลบทิ้งถาวร) — ล้างข้อมูลสมาชิกสภาทดสอบ 8 คนที่ค้างอยู่ตั้งแต่รอบทดสอบระบบออกแล้ว'
  ],
  '10.22.446': [
    '✨ ระบบสภานักเรียน: ฟอร์มสมัครเพิ่มขั้นตอนที่ 5 "เกียรติบัตร/รางวัล" — แนบเกียรติบัตรหรือรางวัลจากการแข่งขัน/กิจกรรมนอกโรงเรียน (รูปภาพหรือ PDF) พร้อมชื่อรางวัลกำกับ บังคับขั้นต่ำ 5 รายการถึงจะส่งใบสมัครได้ — แสดงผลในป๊อบอัพดูใบสมัคร (แอดมิน) และหน้าใบสมัครของฉันด้วย'
  ],
  '10.22.445': [
    '✨ ระบบสภานักเรียน: หน้ากรอกเอกสารโครงการเพิ่มปุ่ม "🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม" — คัดลอกคำสั่งสำเร็จรูปไปวางกับ ChatGPT พร้อมแนบไฟล์ใบโครงการเดิม (Word/PDF/รูปถ่าย) แล้วนำคำตอบ/ไฟล์ CSV ที่ได้กลับมาอัปโหลดหรือวาง ระบบจะเติมข้อมูลลงฟอร์มให้อัตโนมัติ (ยังต้องตรวจสอบความถูกต้องก่อนบันทึกเสมอ)'
  ],
  '10.22.444': [
    '✨ ระบบสภานักเรียน: ระบบอนุมัติเอกสารโครงการยกเครื่องใหม่ทั้งหมดให้ตรงแบบฟอร์มโรงเรียนจริง (แผนงาน/กลยุทธ์/มาตรฐาน/วัตถุประสงค์/เป้าหมาย/วิธีดำเนินงาน/งบประมาณ/การประเมินผล ครบทุกหัวข้อ) — อนุมัติ 3 ระดับ: ครูที่ปรึกษาประจำฝ่าย (เฉพาะโครงการที่สภาริเริ่มเอง) → หัวหน้าฝ่ายกิจการนักเรียน → ผู้อำนวยการ ตีกลับขั้นไหนก็กลับเป็นร่างแก้ไขส่งใหม่ได้ทันที, เพิ่มตำแหน่งใหม่ "หัวหน้าฝ่ายกิจการนักเรียน"/"ผู้อำนวยการ" ในหน้ามอบสิทธิ์, ครูที่ปรึกษาสภาผูกฝ่ายที่ดูแลได้ (ใช้ส่งเอกสารให้ถูกคน), เพิ่มหน้า "โปรไฟล์ของฉัน" ให้ครูวาด/อัปโหลดลายเซ็นและรูปประจำตัวเอง (แอดมินทำแทนให้ได้) ใช้ประทับอัตโนมัติตอนอนุมัติ ไม่ต้องเซ็นใหม่ทุกครั้ง'
  ],
  '10.22.443': [
    '✨ ระบบสภานักเรียน: เพิ่มเมนู "มอบสิทธิ์" (แอดมินเท่านั้น) จัดการทำเนียบครูที่ปรึกษาสภานักเรียน เพิ่ม/ถอดถอนได้เอง ไม่ต้องผ่านหน้าจัดการครูหลักอีกต่อไป, หน้าหลักเพิ่มบรรทัดบอกว่ากำลังใช้งานในฐานะอะไร (แยกแอดมินจริงกับสิทธิ์แอดมินที่ได้รับมอบเพิ่มเติมให้ชัดเจน), ปุ่ม "ตั้งค่าระบบ" เปลี่ยนเป็นเปิดหน้าตั้งค่าในระบบสภาเอง (เดิมพาออกไปหน้าตั้งค่าแอดมินหลัก) และครูที่ปรึกษาสภาเห็นปุ่มนี้ได้ด้วย (เดิมแอดมินเท่านั้น)'
  ],
  '10.22.442': [
    '✨ ระบบสภานักเรียน: เพิ่มขั้นตอน "รับรองจากสภานักเรียนปัจจุบัน" (เพศเดียวกัน) คู่ขนานกับครูที่ปรึกษาสามัญก่อนนัดสัมภาษณ์ — เปิด/ปิดบังคับได้จากหน้าตั้งค่า, สมาชิกสภาคนไหนก็ได้รับรอง 1 คนพอ, ผู้สมัครที่เป็นสมาชิกสภาปัจจุบันอยู่แล้วข้ามขั้นตอนนี้อัตโนมัติ, เมนูใหม่ "รับรองผู้สมัคร (สภา)" สำหรับสมาชิกสภา, ป๊อบอัพดูใบสมัครแสดงผลการรับรองทั้งสองฝ่ายครบ'
  ],
  '10.22.441': [
    '🐛 ระบบสภานักเรียน: ป๊อบอัพดูใบสมัครแสดงชื่อครูที่ปรึกษาสามัญที่รับรองด้วยแล้ว (เดิมเห็นแค่ความเห็น ไม่รู้ว่าใครรับรอง)'
  ],
  '10.22.440': [
    '✨ ระบบสภานักเรียน: หน้า "ใบสมัคร" เพิ่มปุ่ม "📄 ดูใบสมัคร" เปิดป๊อบอัพแสดงใบสมัครเต็มรูปแบบ (เกรดสามัญ/ศาสนา, แรงจูงใจ, วิดีโอแนะนำตัวฝังดูในหน้าได้เลยถ้าเป็นลิงก์ YouTube/Google Drive, ความเห็นครูที่ปรึกษาสามัญ) แทนข้อความสั้นๆ ที่เคยแสดงในการ์ดเลย'
  ],
  '10.22.439': [
    '✨ ระบบสภานักเรียน Phase 7: เพิ่มเมนู "มอบหมายงาน" (ประธานมอบหมาย+ติ๊กสถานะ+ลบ) และ "หน้าที่/งานของฉัน" (บัตรตำแหน่ง+รูทีนประจำสัปดาห์ติ๊กได้+งานที่ได้รับมอบหมาย) สำหรับสมาชิกสภา, กิจกรรมเพิ่มปุ่ม "สแกน QR เช็คอิน" ใช้กล้องสแกน QR ส่วนตัวของสมาชิก (ใบเดียวกับระบบสแกนเช็คชื่อ/ละหมาดเดิม) แทนกดเช็คชื่อทีละคน'
  ],
  '10.22.438': [
    '✨ ระบบสภานักเรียน Phase 6: เมนูใหม่ "เสนอคณะทำงาน" — ประธานสภาเลือกผู้ผ่านสัมภาษณ์เสนอเข้าตำแหน่งที่ว่าง ครูที่ปรึกษาสภา/แอดมินอนุมัติ-ไม่อนุมัติ อนุมัติแล้วแต่งตั้งเข้าสภาอัตโนมัติ, หน้า "สภาของเรา" จัดกลุ่มการ์ดตามตำแหน่ง (ประธาน/รองประธาน/ฝ่ายงาน/สำนักงานสภา) แทนเรียงรายชื่อเฉยๆ เปลี่ยนเป็นแท็บชาย-หญิง, "ประกาศ" เพิ่มตัวนับ "รับทราบแล้ว N จาก M คน" และครูที่ปรึกษาสภาโพสต์ประกาศได้แล้ว (เดิมพลาดจำกัดแค่แอดมิน/ประธาน)'
  ],
  '10.22.437': [
    '✨ ระบบสภานักเรียน Phase 5: การ์ดผู้สมัคร "ว่าที่ประธาน" ออกแบบใหม่ (รูปใหญ่ 4:5 + เบอร์ผู้สมัครตัวโต + เกรด + สโลแกน) แตะเปิดโปรไฟล์เต็ม (วิสัยทัศน์/นโยบาย/ประสบการณ์) แก้ไขได้โดยแอดมิน/ครูที่ปรึกษาสภา, หน้าโหวต kiosk เพิ่มปุ่ม "ดูรายละเอียด" ก่อนตัดสินใจเลือก, หน้าผลเลือกตั้งเพิ่มคะแนนรายคนเป็นแถบ+สรุปผู้มีสิทธิ์/ใช้สิทธิ์ ครูที่ปรึกษาสภาประกาศผลได้แล้ว (เดิมแอดมินเท่านั้น)'
  ],
  '10.22.436': [
    '✨ ระบบสภานักเรียน Phase 4: หน้า "ใบสมัคร" เพิ่มฟิลเตอร์ 6 สถานะพร้อมตัวนับ (ทั้งหมด/รอรับรอง/รับรองแล้ว/นัดแล้ว/ผ่านสัมภาษณ์/ไม่ผ่าน), ป้ายฝ่ายสีคงที่ไม่เปลี่ยนตามธีม, นัดสัมภาษณ์เพิ่มเลือกครูกรรมการ(ค้นหาได้)+ส่งแจ้งเตือนนักเรียนอัตโนมัติ, ให้คะแนนสัมภาษณ์เปลี่ยนเป็นรายหัวข้อตามเกณฑ์ที่ตั้งไว้ แสดงคะแนนรวมสด ตัดสินผ่าน/ไม่ผ่านอัตโนมัติที่ครึ่งหนึ่งของคะแนนเต็ม'
  ],
  '10.22.435': [
    '🐛 ระบบสภานักเรียน: ตัวอักษร/อิโมจิ/ปุ่มปรับขนาดยืดหยุ่นตามความกว้างจออัตโนมัติ (มือถือคงเดิม จอใหญ่ขยายได้ถึง ~1.4 เท่า อ่านง่ายขึ้นมาก), เนื้อหาหน้าหลักขยายเต็มพื้นที่ที่มีจริงแทนการล็อกความกว้างคงที่ที่เคยเหลือขอบว่างเยอะบนจอใหญ่'
  ],
  '10.22.434': [
    '✨ ระบบสภานักเรียน Phase 3: ฟอร์มสมัครเปลี่ยนเป็น wizard 4 ขั้นตอน (เลือกตำแหน่ง → เกรดเฉลี่ยสามัญ/ศาสนา+แรงจูงใจ → รูปถ่ายบังคับ → วิดีโอแนะนำตัวบังคับ) ตรวจเกรดขั้นต่ำ/ความยาวแรงจูงใจอัตโนมัติ + ป๊อบอัพสรุปตรวจสอบก่อนกดยืนยันสมัครจริง, คิวรับรองของครูที่ปรึกษาสามัญโชว์เกรด+ลิงก์วิดีโอเพิ่มเติม'
  ],
  '10.22.433': [
    '✨ ระบบสภานักเรียน Phase 2: หน้า "ตั้งค่า" ใหม่ 4 แท็บ (ทั่วไป/ตำแหน่ง/เกณฑ์และข้อความ/โมดูล) — เห็นเฉพาะแอดมิน/ครูที่ปรึกษาสภา แก้ชื่อสภา โลโก้ ห้วงปฏิบัติหน้าที่ เกณฑ์คุณสมบัติผู้สมัคร ช่วงเวลารับสมัคร การมองเห็นระบบ ผู้ลงนามเอกสารได้เอง, CRUD ตำแหน่งในสภาแยกชาย/หญิง, CRUD หัวข้อสัมภาษณ์+เกณฑ์ประเมินปฏิบัติหน้าที่+ข้อความสำเร็จรูปครูที่ปรึกษาสามัญ, สวิตช์เปิด/ปิดโมดูลย่อยรายฟีเจอร์'
  ],
  '10.22.432': [
    '🐛 ระบบสภานักเรียน: แยกพาดหัวหน้าหลัก (ตามบทบาท) ออกจากป้ายสถานะเปิด/ปิดระบบ, การ์ด "การเลือกตั้ง" ที่ยังไม่ได้ตั้งค่าจะซ่อน/แจ้งชัดเจนแทนกล่องว่าง, แก้ข้อความฮีโร่ที่เคยถูกตัด, เพิ่มข้อมูลทดสอบ (สมาชิกสภา 8 คน กิจกรรม 5 รายการ ประกาศ 3 รายการ), เปลี่ยนชื่อเมนู "ภาพรวม" เป็น "หน้าหลัก" กันชนกับหน้าแดชบอร์ดแอดมินที่จะสร้างทีหลัง'
  ],
  '10.22.431': [
    '🐛 ระบบสภานักเรียน: แก้บั๊กโหมดมืด — การ์ด/พื้นหลังหลายจุดเคยล็อกเป็นสีขาวตายตัว (bg-white) ไม่สลับตามธีม แก้ให้ตอบสนองโหมดมืดครบทุกจุดแล้ว, ขยายความกว้างเนื้อหาให้ใช้พื้นที่จอกว้างได้เต็มขึ้น (ตรงตามไฟล์ต้นแบบ)'
  ],
  '10.22.430': [
    '🏛️ ระบบสภานักเรียน (Phase 1 ตามสเปคใหม่): เพิ่มปุ่มสลับโหมดมืด (ตามระบบ/สว่าง/มืด), จัดกลุ่มเมนูใหม่เป็น 5 หมวด (หน้าหลัก/งานสภา/เลือกตั้ง/งานครู/ระบบ) พร้อมเมนูลอยแบบแคปซูลบนมือถือ, เพิ่มตำแหน่ง "ครูที่ปรึกษาสภานักเรียน" ในหน้าตั้งค่าครู'
  ],
  '10.22.429': [
    '🎨 ระบบสภานักเรียน: เปลี่ยนมาใช้ CSS variable ตรงตามไฟล์ต้นแบบทั้งระบบ (รองรับสลับธีมเขียว/ชมพูตามฝั่ง และโหมดมืดในอนาคต) + จัดกลุ่มเมนูไซด์บาร์ตามหมวดตรงกับต้นแบบ'
  ],
  '10.22.428': [
    '🧾 ฟุตซอล: เพิ่มปุ่ม "ดูตัวอย่างใบเสร็จ (ยังไม่ยืนยัน)" ทั้งฝั่งทีมและแอดมิน ดูรายละเอียดการหักใบเหลือง/ใบแดงล่วงหน้าได้โดยไม่ต้องกดยืนยันคืนเงินก่อน'
  ],
  '10.22.427': [
    '🏠 ระบบสภานักเรียน: เพิ่มหน้า "ภาพรวม" แบบแดชบอร์ดจริง (แบนเนอร์ห้วงปฏิบัติหน้าที่+สถานะเปิดใช้งาน, สรุปกิจกรรมประจำปี, การ์ดประธานสภาชาย/หญิงชุดปัจจุบัน) แทนหน้าว่างเดิม'
  ],
  '10.22.426': [
    '🎨 ระบบสภานักเรียน: แทนที่สีทั่วไป (เขียว/ทอง/แดงมาตรฐาน Tailwind) และมุมโค้งด้วยค่าจริงจากไฟล์ต้นแบบทุกจุด (สถานะ/ป้าย/การ์ด) ให้ตรงมากที่สุด'
  ],
  '10.22.425': [
    '🎨 ระบบสภานักเรียน: ปรับโทนสีเทา/พื้นหลัง/หน้าโหวตให้ตรงกับต้นแบบดีไซน์ต่อเนื่อง (รวมหน้าลงคะแนนที่จุดเลือกตั้ง) ให้ตรงกับไฟล์ต้นแบบมากขึ้น'
  ],
  '10.22.424': [
    '🎨 ระบบสภานักเรียน: ปรับโทนสีทั้งระบบให้ตรงกับต้นแบบดีไซน์ (เขียวเข้ม/ทอง แทนม่วง) ให้ตรงกับไฟล์ต้นแบบที่ออกแบบไว้'
  ],
  '10.22.423': [
    '📄 ระบบสภานักเรียน: เพิ่มหน้าเอกสารขออนุมัติโครงการ/กิจกรรม (ร่าง → เสนอครูที่ปรึกษา → อนุมัติ/ไม่อนุมัติ) พร้อมพิมพ์เอกสารได้เมื่ออนุมัติแล้ว'
  ],
  '10.22.422': [
    '🧾 AZFUTSALCUP: เพิ่มการยืนยันคืนเงินค่าประกันทีมและใบเสร็จพร้อมรายละเอียดหักใบเหลือง/แดงแยกตามนัดและคู่แข่งขัน โดยไม่แสดงชื่อนักกีฬา พร้อมอัปโหลดโลโก้โรงเรียนในหน้าตั้งค่า'
  ],
  '10.22.421': [
    '📊🏅 ระบบสภานักเรียน: เพิ่มหน้าประเมินผลปฏิบัติหน้าที่สมาชิกสภา (ครู/แอดมินให้คะแนนตามเกณฑ์ถ่วงน้ำหนักที่แก้ได้เอง) พร้อมออกเกียรติบัตรพิมพ์/บันทึกเป็น PDF ได้ทันทีเมื่อผลประเมิน "ผ่าน"'
  ],
  '10.22.420': [
    '📅📣 ระบบสภานักเรียน: เพิ่มหน้ากิจกรรมประจำปี (สร้าง/เปลี่ยนสถานะ/เช็คชื่อสมาชิกที่เข้าร่วม) และหน้าประกาศสภา (ปักหมุด กดรับทราบ กรองตามประเภท) — ประธานสภาที่เพิ่งได้รับเลือกตั้งมีสิทธิ์จัดการทั้งสองหน้านี้เท่าแอดมินแล้ว'
  ],
  '10.22.419': [
    '📅 ระบบค่าย TERANGGANU: เพิ่มกำหนดการ 4 ช่อง ได้แก่ รายการที่ วันที่ รายการ และหมายเหตุ ผู้รับผิดชอบที่มีสิทธิ์ตั้งค่าเพิ่ม แก้ไข หรือลบได้ ส่วนนักเรียนและครูร่วมค่ายดูข้อมูลล่าสุดแบบเรียลไทม์'
  ],
  '10.22.418': [
    '🗳️ ระบบสภานักเรียน: แยกหน้าโหวตเลือกตั้งออกมาเป็น council-election.html ต่างหาก (ใช้เฉพาะจุดลงคะแนนที่โรงเรียนจัดไว้) กรอกรหัสนักเรียน→ยืนยันตัวตนด้วยรูป→เลือกผู้สมัคร→ขอบคุณ ไม่ต้องล็อกอิน และปิดช่องโหวตผ่านมือถือ/บัญชีนักเรียนเองที่เผลอเปิดไว้ในเวอร์ชันก่อนหน้า'
  ],
  '10.22.417': [
    '🏛️ ระบบสภานักเรียน Phase 2: หน้าจัดการใบสมัคร (แอดมิน) นัดสัมภาษณ์→ให้คะแนน→ตั้งเป็นผู้สมัครเลือกตั้ง/แต่งตั้งตรง เพิ่มหน้าดูผู้สมัครเลือกตั้ง และการเลือกตั้งใช้งานได้จริง — นักเรียนโหวตได้ 1 เสียง แอดมินตั้งช่วงเวลาและประกาศผล ระบบแต่งตั้งประธานสภาเข้าตำแหน่งอัตโนมัติ'
  ],
  '10.22.416': [
    '⚜️ ระบบค่าย TERANGGANU: เพิ่มรายชื่อและแบบสำรวจครูร่วมค่ายจากฐานข้อมูล PP5 พร้อมใบรายชื่อพิมพ์สำหรับนักเรียน/ครูและคอลัมน์หมายเหตุ ระบุเบอร์นักเรียนเป็นเบอร์ผู้ปกครอง เพิ่มโลโก้ขาวดำบนเอกสาร และรวมใบเสร็จมัดจำกับส่วนที่เหลือเมื่อชำระครบ'
  ],
  '10.22.415': [
    '📝 AZFUTSALCUP: หลังเริ่มแข่ง M22–M23 จะล็อกและแสดงทีมที่ประกบจริงทั้งสองฝั่ง ไม่ย้อนเป็นช่องจับฉลาก พร้อมโหมดบันทึกผลย้อนหลังจากกระดาษ เลือกรายชื่อทั้งทีมและระบุนาทีของประตู/ใบได้เมื่อไม่มีเช็กอินรายนัด'
  ],
  '10.22.414': [
    '⚽ AZFUTSALCUP: หน้าแก้ผล M22–M23 เลือกทีมได้ทั้งฝั่ง A/B ในโหมดประกบใหม่ พร้อมกันทีมซ้ำ จำกัดผู้แพ้คืนสิทธิ์ 1 ทีม และเว้นสกอร์ว่างจนกว่าจะเริ่มบันทึกผล'
  ],
  '10.22.413': [
    '⚽ AZFUTSALCUP: ล้างการประกบ M22–M23 ได้โดยไม่ลบผล M19–M21 และเพิ่มหน้าจอเลือกคู่รอบรองฯ ใหม่ โดยบังคับใช้ผู้ชนะครบ 3 ทีมกับผู้แพ้คืนสิทธิ์ 1 ทีม'
  ],
  '10.22.412': [
    '🖼️ ระบบค่าย TERANGGANU: แสดงรูปนักเรียนด้านซ้ายของทุกแถวในสไตล์เดียวกับหน้า ปพ. พร้อมปุ่มลบผู้เข้าร่วมแบบยืนยันก่อนลบ โดยเก็บแบบสำรวจและประวัติใบเสร็จเดิมไว้ตรวจสอบ'
  ],
  '10.22.411': [
    '🔎 ระบบค่าย TERANGGANU: เพิ่มค้นหานักเรียนจากชื่อ รหัส ห้องสามัญ หรือห้องศาสนาแล้วคลิกเติมรายชื่อได้ทันที เพิ่มรับชำระแบบหลายคน เลือกงวดและวิธีเงินสด/โอนครั้งเดียวพร้อมใบเสร็จแยกรายคน แยกสีปุ่มมัดจำกับส่วนที่เหลือ และรับมัดจำได้ก่อนนักเรียนส่งแบบสำรวจ'
  ],
  '10.22.410': [
    '⚜️ ระบบค่าย TERANGGANU: เพิ่มรายชื่อนักเรียนหลายรหัสพร้อมบันทึกมัดจำและสร้างใบเสร็จ เลือกการมองเห็นเฉพาะผู้เข้าร่วมหรือทั้งโรง สรุปชาย–หญิง ม.ต้น–ม.ปลาย พร้อมค้นหาและกรองระดับชั้น/ห้อง และเพิ่มปุ่มวาดหรืออัปโหลดลายเซ็นผู้อำนวยการกับครูผู้ลงนาม'
  ],
  '10.22.409': [
    '⚜️ เพิ่มระบบค่ายลูกเสือ TERANGGANU 2026 ใน PP5: แบบสำรวจข้อมูลเดินทางของนักเรียน ปุ่มเปิด–ปิดจากหน้าจัดการ สิทธิ์ครูผู้รับผิดชอบเฉพาะโมดูล รับชำระค่ามัดจำ 1,000 บาทและส่วนที่เหลือ 2,500 บาท พร้อมสร้างใบเสร็จลายเซ็นผู้อำนวยการและครูอัตโนมัติ'
  ],
  '10.22.408': [
    '🎯 ระบบสภานักเรียน: ย้าย "สมัคร" และ "เลือกตั้ง" ออกจากเมนูหลัก เหลือแค่ปุ่มเข้าใช้งานบนหน้าภาพรวม กดแล้วเปิดเป็นหน้าเต็มจอพร้อมแท็บย่อยของตัวเอง (เช่น "สมัครตำแหน่งใหม่"/"ใบสมัครของฉัน") — เมนูหลักเหลือแค่ภาพรวม/รอยืนยัน/สภานักเรียน สำหรับดูภาพรวมของสภาจริงๆ'
  ],
  '10.22.407': [
    '📱 ระบบสภานักเรียน (council.html) ปรับเป็นแอปมีเมนูจริง — มือถือมีแท็บเมนูด้านล่าง (ภาพรวม/สมัคร/เลือกตั้ง/สภานักเรียน) แบบเดียวกับหน้านักเรียน จอกว้างมีไซด์บาร์ซ้ายแบบเดียวกับหน้าครู แทนหน้าเดียวเลื่อนยาว'
  ],
  '10.22.406': [
    '🐛 AZIZGAMES: แก้บั๊กร้ายแรง — บัญชีกรรมการประเมิน (พาเหรด/หน้าเว็บเพจ/ประเมินสีสะสม) เดิมเก็บแค่ในเครื่องที่สร้างบัญชี กรรมการล็อกอินจากมือถือตัวเองไม่ได้เลย ย้ายเข้าฐานข้อมูลจริงแล้ว ล็อกอินจากเครื่องไหนก็ได้ และเพิ่มฟีเจอร์มอบหมายกรรมการพาเหรดให้ดูแค่หัวข้อเดียวได้ (เช่น เฉพาะ "ความพร้อมเพรียง") ตามที่ผู้รับผิดชอบเดินพาเหรดแจ้ง'
  ],
  '10.22.405': [
    '🧪 ระบบสภานักเรียน: หน้าตั้งค่าแอดมินเพิ่มช่อง "รหัสนักเรียนที่ให้ทดสอบได้" — ใส่รหัสนักเรียนไว้แล้วนักเรียนคนนั้นจะยังเห็นเมนู/ใช้งานระบบสภานักเรียนได้จริงแม้ปิดสวิตช์ "แสดงให้ทุกคนเห็น" ไว้ก็ตาม'
  ],
  '10.22.404': [
    '🔐 โหมดสวมบทบาทใช้ Supabase session ของครูเป้าหมายจริงครบทุกส่วน รวมถึงการจัดการบัญชีในหน้าโปรไฟล์ และยังสามารถกลับสู่ session แอดมินได้จากแถบสีแดง'
  ],
  '10.22.403': [
    '🎭 โหมดสวมบทบาทครูแบบเต็ม: เมนู ข้อมูล สิทธิ์ตามตำแหน่ง งานกีฬาสี คำร้อง การแจ้งเตือน และการบันทึกใช้ตัวตนครูเป้าหมาย พร้อมตรวจสิทธิ์แอดมินและเก็บประวัติเริ่ม/สิ้นสุดในฐานข้อมูล'
  ],
  '10.22.402': [
    '🔙 ระบบสภานักเรียน (council.html) เพิ่มปุ่ม "← กลับ ปพ.5 ออนไลน์" มุมซ้ายบน พาไปพอร์ทัลของตัวเองตามสิทธิ์ (นักเรียน/ครู/แอดมิน) — สำหรับกรณีเข้าหน้านี้ด้วยการวาง URL ตรงๆ'
  ],
  '10.22.400': [
    '✋ ระบบสภานักเรียน: ครูที่ปรึกษาสามัญเห็นคิว "รอฉันยืนยัน" ในหน้า council.html สำหรับใบสมัครของนักเรียนในห้องตัวเอง เลือกข้อความสำเร็จรูปแล้วแก้ไขเพิ่มได้ก่อนกดรับรอง/ไม่รับรองพร้อมคอมเมนต์'
  ],
  '10.22.399': [
    '📝 ระบบสภานักเรียน (council.html) เปิดใช้งานฟอร์มสมัครจริงแล้ว — นักเรียนเลือกตำแหน่งเฉพาะฝั่งเพศตัวเอง กรอกแรงจูงใจ แนบรูปได้ ส่งแล้วเห็นสถานะใบสมัครทันทีในการ์ดสถานะส่วนตัว'
  ],
  '10.22.398': [
    '🏛️ ระบบสภานักเรียนเพิ่มปุ่ม "แสดงเมนูให้ทุกคนเห็น" ในหน้าตั้งค่าแอดมิน (แท็บ สภานักเรียน) ปิดแล้วเมนู/หน้า council.html จะเห็นเฉพาะแอดมินหรือครูที่ได้รับมอบหมายเป็นแอดมินเท่านั้น'
  ],
  '10.22.397': [
    '🔐 จำกัดป๊อปอัพ “มีอะไรใหม่ในเวอร์ชันนี้” ให้แสดงเฉพาะแอดมินและครูที่ได้รับมอบหมายสิทธิ์แอดมิน (is_also_admin) เท่านั้น ครูทั่วไปจะไม่เห็นป๊อปอัพและไม่สามารถเปิดจากเลขเวอร์ชันได้'
  ],
  '10.22.396': [
    '🏛️ เริ่มระบบงานสภานักเรียน (Phase 1) — สร้างฐานข้อมูล 7 ตาราง (รับสมัคร/สัมภาษณ์/เลือกตั้งประธาน/รายชื่อสภา) แยกสภาชาย-หญิง และหน้า council.html เบื้องต้น (โครงสร้าง + รายชื่อสภา + สถานะเลือกตั้ง) เข้าถึงได้จากเมนูในหน้านักเรียนและครู — ยังอยู่ระหว่างพัฒนาต่อ (สมัคร/โหวต/จัดการยังไม่เสร็จ)'
  ],
  '10.22.395': [
    '📋 หน้าคำร้องนักเรียน: เพิ่มแท็บ “มาสอบแล้ว” และ “ขาดสอบ/ผิดนัด” พร้อมจำนวนรายการ เพื่อให้ครูกรองดูผลการเข้าสอบจริงได้ทันที และปรับแถวแท็บให้เรียงตัวเหมาะกับหน้าจอมือถือ'
  ],
  '10.22.394': [
    '🔄 คำร้องสอบปรับคะแนน: เพิ่มคอลัมน์หมวด “ปรับคะแนนกลางภาค” ในรายการเลือกปลายทางแล้ว พร้อมใช้กติกาเดียวกับหน้าคะแนน — หากคะแนนปรับสูงกว่าคะแนนเดิม ระบบอัปเดตคอลัมน์หลักที่เชื่อมไว้ให้อัตโนมัติ'
  ],
  '10.22.393': [
    '📝 คำร้องสอบปรับคะแนน: ตอนครูบันทึกผลสอบ สามารถเลือกคอลัมน์คะแนนปลายทางได้แล้ว ระบบปรับคะแนนเต็มตามคอลัมน์ที่เลือก บันทึกปลายทางไว้กับคำร้อง และแจ้งหน้าคะแนนให้ปรับข้อมูลทันที พร้อมแสดงข้อผิดพลาดหากคะแนนบันทึกไม่สำเร็จ'
  ],
  '10.22.392': [
    '🐛 AZIZGAMES: แก้คะแนนกีฬาสะสมของสีไม่โผล่ในรายงานคะแนนรวม (ยอดรวมจริงถูกต้องอยู่แล้ว แค่แถบ "คะแนนกีฬา" อ่านผิดคอลัมน์ในฐานข้อมูล ทำให้ขึ้น 0 เสมอทั้งที่มีเหรียญแล้ว) และเพิ่มปุ่มสลับ "แข่งแล้ว (วันนี้/ทั้งหมด)" ที่การ์ดแดชบอร์ดหน้าจัดการทีมสี — ดีฟอลต์นับเฉพาะนัดของวันปัจจุบัน กดดูรวมทุกวันได้'
  ],
  '10.22.391': [
    '🐛 AZIZGAMES: แก้บั๊กร้ายแรง — ผลกรีฑา/รายการจับเวลาให้คะแนน (วิ่งสามขา, ยิงธนู ฯลฯ) ไม่เคยบันทึกลงฐานข้อมูลได้จริงเลยสักครั้ง (คอลัมน์ในฐานข้อมูลผิดชนิดทำให้บันทึกล้มเหลวเงียบๆ ทุกครั้ง) แก้แล้วบันทึกได้ปกติ พร้อมแก้วิธีตัดเหรียญให้ตัดตามอันดับตัวบุคคลจริง 1-2-3 (สีเดียวกันได้ทั้งทองและเงินได้ถ้านักกีฬาเข้าเส้นชัยอันดับ 1-2 พร้อมกัน แทนที่จะจำกัดแค่ 1 เหรียญต่อสีต่อรายการแบบเดิม)'
  ],
  '10.22.390': [
    '🎨 AZIZGAMES: ป๊อบอัพเลือกนักกีฬาที่รวมรายชื่อหลายสี (จัดลู่วิ่งกรีฑา, MVP กีฬาบอล) เพิ่มโลโก้สี+ทินท์พื้นหลังของแต่ละแถวตามคณะสีของนักกีฬาคนนั้น กันครูสับสนตอนเลื่อนหารายชื่อยาวๆ ว่าใครอยู่สีไหน'
  ],
  '10.22.389': [
    '🏃 AZIZGAMES: กรีฑายกเว้นไม่บังคับรายงานตัวเช้าอีกแล้ว (นักกรีฑาต้องออกไปแข่งสนามนอกโรงเรียนตั้งแต่เช้า อาจกลับมารายงานตัวที่โรงเรียนไม่ทัน) เลือกนักกีฬาได้จากรายชื่อลงทะเบียนตรงๆ เหมือนเดิม — กีฬาจับเวลา/ให้คะแนนอื่นที่แข่งในโรงเรียน (วิ่งสามขา, ยิงธนู ฯลฯ) ยังคงบังคับรายงานตัวก่อนตามปกติ'
  ],
  '10.22.388': [
    '🏃 AZIZGAMES: บันทึกผลกีฬาจับเวลา/ให้คะแนน (กรีฑา, วิ่งสามขา, ยิงธนู ฯลฯ) ตอนนี้เลือกนักกีฬาได้เฉพาะคนที่รายงานตัวเช้าวันนั้นแล้วเท่านั้น (เหมือนกีฬาบอลที่ทำไว้อยู่แล้ว) กันเลือกคนที่ลงทะเบียนไว้แต่ไม่ได้มาแข่งจริง — และเพิ่มป๊อบอัพค้นหาชื่อนักกีฬากลางจอในหลายจุด (จัดลู่วิ่ง, MVP กีฬาบอล) แทน dropdown ห้อยใต้ปุ่ม ให้ครูค้นหาสะดวกรวดเร็วขึ้น'
  ],
  '10.22.387': [
    '🏆 AZIZGAMES: แก้บั๊กหน้าตั้งค่ารายการแข่งขัน — เดิมแก้รายการที่มีอยู่แล้วแล้วเปลี่ยนดรอปดาวน์ "ประเภทรายการแข่งขัน" (สากล/พื้นบ้าน/กรีฑา ฯลฯ) กดบันทึกจะไม่มีผลจริง เพราะรหัสกิจกรรมที่ใช้แยกหมวดทุกจุดในระบบไม่ถูกอัปเดตตาม ตอนนี้เปลี่ยนดรอปดาวน์แล้วรหัสจะคำนวณใหม่ให้ตรงหมวดปลายทางเสมอ ทั้งตอนสร้างรายการใหม่และแก้ไขรายการเดิม'
  ],
  '10.22.386': [
    '⚡ Smart Classroom ตรวจยืนยันว่าคะแนนงานถูกเขียนลงสมุดคะแนนจริงก่อนแจ้งสำเร็จ และส่งสัญญาณอัปเดตข้ามแท็บ/หน้าต่างให้หน้าบันทึกคะแนนแสดงค่าใหม่ทันทีโดยไม่ต้องรีเฟรช พร้อมอัปเดตคะแนนใน Smart Classroom เองทันที'
  ],
  '10.22.385': [
    '📄 เอกสาร ปพ.5 แสดงผลประเมินคุณลักษณะอันพึงประสงค์จากเกรดด้วยเกณฑ์เดียวกับหน้าคะแนน และแก้การอ่านคิดวิเคราะห์ให้โหลดเฉพาะนักเรียนในห้อง คำนวณตามคะแนนเต็มจริง พร้อมแจ้งเตือนเมื่อไม่พบข้อมูลหรือหยุดสร้างเอกสารเมื่อโหลดผิดพลาด'
  ],
  '10.22.384': [
    '🔔 หน้าคำร้องนักเรียนเพิ่มปุ่มกรองตามประเภทการสอบ (สอบย้อนหลัง/สอบปรับคะแนน) และเพิ่มระบบแจ้งเตือนครูอัตโนมัติผ่าน Push Notification เมื่อมีนักเรียนนัดสอบ — เตือนล่วงหน้า 1 วัน (18:00) และเตือนซ้ำเช้าวันที่นัดสอบ (07:00)'
  ],
  '10.22.383': [
    '🔍 หน้าคำร้องนักเรียน (ครู) เพิ่มปุ่มกรองตามช่องคะแนน/หัวข้อที่นักเรียนขอสอบเข้ามา กรองดูเฉพาะหัวข้อเดียวได้ง่ายขึ้นเวลามีคำร้องหลายหัวข้อปนกัน'
  ],
  '10.22.382': [
    '📖 แก้คะแนนอ่านคิดวิเคราะห์แสดงไม่ครบเมื่อข้อมูลเกิน 1,000 แถว โดยโหลดแบบแบ่งหน้าและจำกัดตามห้องที่เปิด พร้อมสถานะบันทึกอัตโนมัติ การลองซ้ำ และแจ้งเตือนชัดเจนเมื่อโหลดหรือบันทึกไม่สำเร็จ'
  ],
  '10.22.381': [
    '📊 หน้าข้อมูลไซซ์เสื้อกีฬาสี มุมมอง "สรุปตามห้อง" แยกตัวเลข "นักเรียนแจ้งแล้ว" กับ "ครูยืนยันแล้ว" ต่อห้อง ดูออกทันทีว่าห้องไหนติดขัดที่นักเรียนยังไม่แจ้งหรือครูที่ปรึกษายังไม่ยืนยัน'
  ],
  '10.22.380': [
    '💬 Feedback แสดงรหัสนักเรียน ห้องสามัญ และห้องศาสนา พร้อมระบบสนทนาสองทางให้แอดมินและผู้ส่งตอบกลับต่อเนื่องในกระทู้เดิมได้'
  ],
  '10.22.379': [
    '🎨 เอกสารพิมพ์รายชื่อไซซ์เสื้อ/ค่าเสื้อกีฬาสี — พื้นหลังแต่ละแถวนักเรียนเป็นสีพาสเทลอ่อนตามสีทีมของตัวเอง อ่านแยกสีได้ง่ายขึ้นตอนพิมพ์'
  ],
  '10.22.378': [
    '👕 หน้าข้อมูลไซซ์เสื้อและค่าเสื้อกีฬาสี: ย้ายตัวกรองระดับชั้นไปอยู่ใต้กลุ่มปุ่มดาวน์โหลด/พิมพ์, เพิ่มปุ่มกรอง "ชำระแล้ว" ในแท็บค่าเสื้อและ "แจ้งแล้ว" ในแท็บไซซ์เสื้อครู/บุคลากร, เพิ่มปุ่ม "เลือกเพื่อพิมพ์" ให้ติ๊กเลือกครู/บุคลากรบางคนก่อนพิมพ์เฉพาะที่เลือก'
  ],
  '10.22.377': [
    '🖼️ นำเส้นกรอบวงกลม CSS รอบโลโก้ออกจากใบรายชื่อนักกีฬาฟุตซอล โดยคงพื้นหลังขาวและจัดโลโก้กึ่งกลางเหมือนเดิม'
  ],
  '10.22.376': [
    '🖼️ แก้ใบรายชื่อนักกีฬาฟุตซอล กรอบวงกลมโลโก้ด้านบนไม่กินเนื้อหาโลโก้แล้ว (เดิมบังคับรูปใหญ่กว่ากรอบแล้วครอปทิ้ง ตอนนี้ย่อพอดีกรอบเห็นโลโก้เต็มภาพ)',
    '⚽ AZFUTSALCUP จอใหญ่รายคู่เพิ่มปุ่มนำทาง "◀ นัดก่อนหน้า", "🔴 คู่ที่กำลังแข่ง", "นัดถัดไป ▶" สลับดูแต่ละคู่ได้เร็วขึ้นโดยไม่ต้องปิดจอ และเพิ่มปุ่ม "📊 ตารางคะแนน" เปิดจอใหญ่แสดงอันดับทีม (ตามประตู/ผลต่างประตู) ดาวซัลโว และผู้ได้ใบเหลือง-ใบแดงมากที่สุด เข้าถึงได้ทั้งจากจอรายคู่และจอตารางแข่งขันแบบกริด'
  ],
  '10.22.375': [
    '🗓️ ย้าย ม.ต้น M11 เป็นต้นไปและ ม.ปลาย M14 เป็นต้นไปไว้วันที่ 2 เรียงสลับระดับ เริ่ม 08:30 รายงานตัว 08:20 และนำรายงานตัวนัดแรกของทีมในวันเดียวกันไปใช้นัดถัดไปอัตโนมัติ'
  ],
  '10.22.374': [
    '📋 ใบรายชื่อเรียงนักเรียนตามทีมโดยไม่แสดงชื่อทีม จัด ม.ปลายขึ้นหน้าใหม่พร้อมหัวเอกสารครบ และปรับกรอบโลโก้ให้แนบตรงกันมากขึ้น'
  ],
  '10.22.373': [
    '📋 ปรับชื่ออัตโนมัติในช่องวันที่ให้ตัดคำนำหน้าออก ซ่อนข้อความกำกับรายช่อง และสุ่มแสดงนามสกุลบางรายการ โดยยังคงคำชี้แจงว่าไม่ใช่ลายเซ็น'
  ],
  '10.22.372': [
    '📋 ปรับฉบับชื่อพิมพ์โดยระบบให้เติมครบทั้งวันที่ 12 และ 15 สิงหาคม พร้อมจัดกรอบวงกลมโลโก้ให้ตรงและชิดขอบตรามากขึ้น โดยคงใบรายชื่อเปล่าไว้'
  ],
  '10.22.371': [
    '📋 เพิ่มเอกสารแยกฉบับชื่อพิมพ์โดยระบบ ใช้ฟอนต์ลายมือสีน้ำเงินสุ่มมุมและความเข้ม เติมเฉพาะวันที่รายงานตัว พร้อมกำกับชัดเจนว่าไม่ใช่ลายเซ็น โดยคงใบรายชื่อเปล่าไว้'
  ],
  '10.22.370': [
    '📋 ปรับใบรายชื่อเป็นแบบฟอร์มเปล่า ช่องวันที่ไม่มีเครื่องหมาย ย้ายโลโก้ไว้กึ่งกลางบนสุดพร้อมกรอบวงกลม และเปลี่ยนพื้นหลังส่วนหัวเป็นสีขาว'
  ],
  '10.22.369': [
    '⏱️ แยกการแสดงนาฬิกา: หน้าเต็มจอนับขึ้นสะสม 00:00-14:00 ส่วนหน้าบันทึกผลนับถอยหลัง 07:00-00:00 ใหม่ทุกครึ่ง'
  ],
  '10.22.368': [
    '📋 เพิ่มใบรายชื่อนักกีฬารวมสำหรับพิมพ์หรือดาวน์โหลด มีโลโก้โรงเรียน ชื่อกิจกรรม ปีงบประมาณ 2569 ช่องลงชื่อวันที่ 12/15 สิงหาคม และเรียง ม.ต้นก่อน ม.ปลาย'
  ],
  '10.22.367': [
    '⏱️ แก้นาฬิกาครึ่งหลังให้เริ่มแสดงต่อจาก 07:00 นับขึ้นถึง 14:00 แล้วจึงเข้าสู่เวลาทด โดยไม่รวมเวลาทดของครึ่งแรกซ้ำ'
  ],
  '10.22.366': [
    '⚽ หน้าตารางการแข่งขันปักคู่ที่กำลังแข่งขันไว้ด้านบนสุดเสมอ พร้อมปุ่มคู่ปัจจุบันแบบติดด้านบน กดแล้วเลื่อนกลับไปยังการ์ดคู่สดอัตโนมัติ'
  ],
  '10.22.365': [
    '⚽ เพิ่มการอัปเกรดผัง ม.ต้น 13 ทีมเป็น M1-M20 อัตโนมัติแบบครั้งเดียวเมื่อแอดมินเปิดระบบ โดยรักษาผลและข้อมูล M1-M9 ไว้'
  ],
  '10.22.364': [
    '⚽ ปรับผัง ม.ต้น 13 ทีมเป็น 20 นัด: วันที่ 1 แข่ง M1-M14, วันที่ 2 แข่ง M15-M20, เพิ่มจับฉลากผู้แพ้ M10-M14 กลับเข้า M17 และผู้แพ้ M15-M17 กลับเข้า M19, M20 เป็นรอบชิง และผู้แพ้ M18/M19 ได้อันดับ 3 ร่วม'
  ],
  '10.22.363': [
    '⚽ AZFUTSALCUP ย้ายคู่ที่ 13 ของ ม.ปลาย (HS M13) จากวันที่ 2 มาอยู่วันที่ 1 พร้อมปรับลำดับจัดตารางอัตโนมัติและการนำทางคู่ก่อนหน้า/ถัดไปให้ตรงกัน'
  ],
  '10.22.362': [
    '⚽ AZFUTSALCUP ปรับปุ่ม + เพิ่มผู้ทำประตู/ใบเหลือง/ใบแดง: เปิดป๊อปอัพรายชื่อนักกีฬากลางหน้าจอ ค้นหาด้วยเบอร์เสื้อหรือชื่อได้ แตะชื่อครั้งเดียวระบบบันทึกอัตโนมัติ ปิดป๊อปอัพ และกลับมาตำแหน่งเดิมในฟอร์มทันที'
  ],
  '10.22.361': [
    '🐛 แก้ตัวเลขนาฬิกาบนจอใหญ่รายคู่มองไม่เห็น เพราะใช้สีตัวอักษรเข้มแบบการ์ดพื้นขาวบนพื้นหลังสีดำ ตอนนี้แสดงเวลาเป็นสีขาวขนาดใหญ่และอัปเดตทันทีที่เปิดหรือเปลี่ยนคู่'
  ],
  '10.22.360': [
    '⚽ AZFUTSALCUP ปรับจอใหญ่รายคู่: นาฬิกานับขึ้นจาก 00:00 ตามเวลาต่อครึ่ง (ตั้ง 7 นาทีได้จากหน้าตั้งค่า) และเมื่อครบเวลาจะแสดง +เวลาทด เพิ่มปุ่ม คู่ก่อนหน้า / คู่ปัจจุบัน / คู่ถัดไป สำหรับเปลี่ยนคู่รวดเร็วข้ามทั้งสองวัน พร้อมปุ่มดูตารางคะแนนแบบเต็มจอ แสดงอันดับทีม ดาวซัลโว ผู้ได้รับใบเหลือง และผู้ได้รับใบแดง แยก ม.ต้น/ม.ปลายและอัปเดตสด'
  ],
  '10.22.359': [
    '🐛 แก้บั๊ก AZFUTSALCUP สกอร์ไม่ขึ้นในตารางการแข่งขัน/จอใหญ่ ทั้งที่บันทึกผู้ทำประตูไปแล้ว — ต้นเหตุคือสกอร์ทางการต้องรอกดปุ่ม "บันทึก" ก่อนถึงจะเข้าฐานข้อมูล (ตั้งใจแยกไว้ กันเผลอเลื่อนทีมเข้ารอบก่อนแข่งจบจริง) ตอนนี้การ์ดคู่แข่งขันจะโชว์สกอร์นับสดจากผู้ทำประตูที่บันทึกไว้ พร้อมป้าย "ยังไม่บันทึกผล" จนกว่าจะกดบันทึกอย่างเป็นทางการ ⚽ เพิ่มปุ่ม "🖥️" ที่การ์ดแต่ละคู่ เปิดเต็มจอเฉพาะคู่นั้น โชว์ชื่อทีม+สกอร์ตัวใหญ่ชัดเจน ผู้ทำประตู/ใบเหลือง-แดงโชว์ด้านล่างแบบรอง'
  ],
  '10.22.358': [
    '⚽ AZFUTSALCUP เพิ่มปุ่ม "🖥️ เปิดจอใหญ่ดูตารางการแข่งขัน" ในหน้าตารางการแข่งขัน — ฉายจอโปรเจกเตอร์/ทีวีให้ผู้ชมดูตารางแข่งขันแบบเต็มจอได้เลย มีแท็บวันที่/ระดับชั้น สกอร์ระหว่างแข่งขึ้นแบบเรียลไทม์ (อัปเดตทุก 4 วินาที) พร้อมสถานะกำลังแข่ง/พักครึ่งแบบเดียวกับตารางปกติ'
  ],
  '10.22.357': [
    '⚽ AZFUTSALCUP ปุ่ม "🔳 QR" เปิดดู QR นักกีฬาได้จากหน้าทีมของฉันด้วยแล้ว (เดิมมีแค่หน้าแอดมิน) และหน้าบันทึกผลการแข่งขันเพิ่มปุ่ม "🔄 รีเฟรชข้อมูล" ดึงทีม/รายชื่อนักกีฬา/รายงานตัวล่าสุดโดยไม่ต้องปิดหน้าต่างแล้วเปิดใหม่'
  ],
  '10.22.356': [
    '⚽ AZFUTSALCUP หน้านักกีฬาที่ลงทะเบียน (แอดมิน) เพิ่มช่องค้นหาอะไรก็เจอ (ชื่อ/รหัสนักเรียน/ห้อง/ทีม/เบอร์เสื้อ) และเพิ่มปุ่ม "🔳 QR" ต่อคนเปิดดู QR Code ของนักกีฬาคนนั้นได้ทันที ใช้แทนได้เวลานักกีฬาไม่ได้พก QR ของตัวเองมา'
  ],
  '10.22.355': [
    '🐛 แก้บั๊ก AZFUTSALCUP หน้ารับรายงานตัวรายนัด นำรายชื่ออัตโนมัติจากนัดแรก/เช็คอินเข้างานตอนเช้าไม่ขึ้น (0 คน) ทั้งที่มีข้อมูลจริง — ต้นเหตุคือใช้ข้อมูลที่แคชไว้ตอนโหลดหน้าซึ่งตามข้อมูลสดไม่ทันตอนเปิดแท็บค้างไว้นานระหว่างงาน แก้เป็นดึงข้อมูลสดจากฐานข้อมูลตรงๆ ทุกครั้งที่เปิดสแกนเนอร์แทน'
  ],
  '10.22.354': [
    '⚽ AZFUTSALCUP หน้ารับรายงานตัวรายนัด เปลี่ยนจากปุ่มกดคัดลอกเป็น "นำมาใช้อัตโนมัติ" ทันทีที่เปิดสแกนเนอร์ (ไม่ต้องกดปุ่มเอง) และตอนนี้ดึงข้อมูลจาก 2 แหล่งรวมกัน: นัดแรกที่ทีมเคยรายงานตัว + เช็คอินเข้างานตอนเช้าที่ยืนยันแล้ว ใครไม่ได้มาจริงกด ✕ ยกเลิกออกทีหลังในลิสต์ได้ตามปกติ'
  ],
  '10.22.353': [
    '⚽ AZFUTSALCUP หน้าสแกน "รับรายงานตัว" และ "เช็คอินเข้างาน" เพิ่มช่องกรอกรหัสนักเรียนแทนได้เมื่อนักกีฬาไม่ได้พก QR Code มา และหน้ารับรายงานตัวรายนัดเพิ่มปุ่ม "ใช้รายชื่อจากนัดแรกที่แต่ละทีมเคยรายงานตัว" คัดลอกรายชื่อที่เคยยืนยันไว้แล้วมาใช้กับนัดถัดไปได้เลย ไม่ต้องสแกนซ้ำทั้งทีม'
  ],
  '10.22.352': [
    '🖨️ แก้เอกสารพิมพ์หน้าติดตามไซซ์เสื้อ (มุมมองรายชื่อ) ให้แยกขึ้นหน้าใหม่เป็นรายห้องเรียน — เดิมรวมทุกห้องในชั้นเดียวกันเป็นตารางเดียว ตอนนี้แต่ละห้องมีหน้าของตัวเอง พร้อมชื่อครูที่ปรึกษาบนหัวกระดาษ สะดวกต่อการแยกส่งแต่ละห้อง/แต่ละครูที่ปรึกษา'
  ],
  '10.22.351': [
    '⚽ AZFUTSALCUP หน้าแก้ไขนัดแข่งเพิ่มปุ่ม "⏩ ใช้เวลานี้ + เลื่อนนัดที่เหลือของวันนี้ตามไปด้วย" — สำหรับกรณีมีคั่นด้วยพิธีเปิด/รายการอื่นระหว่างวัน อัปเดตเวลานัดถัดไปนัดเดียว ระบบจะไล่เลื่อนเวลานัดที่เหลือของวันนั้นให้อัตโนมัติตามความยาวนัด/เวลาพักที่ตั้งไว้'
  ],
  '10.22.350': [
    '👕 ปรับปรุงหน้าติดตามไซซ์เสื้อสำหรับเจ้าหน้าที่ — เพิ่มตัวกรองตามระดับชั้น + ช่องค้นหาพิมพ์ชื่อ/รหัส/ห้อง/สีก็เจอ + ปุ่มกรอง "ยืนยันแล้ว" (รวมทั้งที่นักเรียนยืนยันเองและครูแก้ไขแทน) หัวข้อแต่ละห้องขึ้นชื่อครูที่ปรึกษา เพิ่มมุมมอง "สรุปตามห้อง" พร้อมคอลัมน์ครูที่ปรึกษา และแก้ปัญหาพิมพ์เอกสารค้างโหลดนาน (ตัดรูปนักเรียนออกจากเอกสารพิมพ์ที่ทำให้ค้างตอนมีนักเรียนเยอะ)'
  ],
  '10.22.349': [
    '⏰ เพิ่มป๊อบอัพเตือนแจ้งไซซ์เสื้อกีฬาสี — เด้งอัตโนมัติทันทีหลังล็อกอิน ทั้งฝั่งคุณครูและนักเรียน ถ้ายังไม่เคยแจ้งไซซ์ (และแอดมินเปิดรับแจ้งไซซ์อยู่) มีปุ่มพาไปหน้าแจ้งไซซ์ทันที เด้งซ้ำทุกครั้งที่ล็อกอินจนกว่าจะแจ้งสำเร็จ เพื่อให้สรุปยอดทันกำหนดสัปดาห์หน้า'
  ],
  '10.22.348': [
    '🛡️ หน้าแจ้งไซซ์เสื้อบุคลากร เพิ่มระบบป้องกันครูเข้าใจผิดมาแจ้งผิดหน้า (เจอเหตุการณ์จริงมีครู 33 คนแจ้งผิดที่) — แบนเนอร์เตือนตั้งแต่หน้าแรก + เช็คชื่อที่พิมพ์กับรายชื่อครูในระบบก่อนบันทึกทุกครั้ง ถ้าตรงกันจะเตือนให้ไปแจ้งผ่านระบบ ปพ.5 แทน (ยืนยันข้ามได้ถ้าไม่ใช่ครูคนนั้นจริงๆ)'
  ],
  '10.22.347': [
    '👕 หน้า "ไซซ์เสื้อ" ของครูที่ปรึกษาสามัญ — พอกดยืนยัน/แก้ไขไซซ์ให้นักเรียนแล้ว แถวนั้นอัปเดตไซซ์+สถานะใหม่ทันทีในตาราง ไม่ต้องรอโหลดทั้งหน้าใหม่แล้ว (เดิมกดยืนยันแล้วทั้งหน้าจะรีเฟรชใหม่หมด ทั้งตัวกรองและตำแหน่งที่ดูอยู่ก็รีเซ็ตไปด้วย)'
  ],
  '10.22.346': [
    '📋 หน้าแจ้งไซซ์เสื้อบุคลากร (staff-shirt-size.html) แท็บ "ดู/แก้ไข/ลบข้อมูล" เปลี่ยนเป็นแสดงรายชื่อบุคลากรที่แจ้งไซซ์ไว้แล้วทั้งหมดเป็นตาราง พร้อมช่องค้นหากรองด้านบน (ชื่อ/ไซซ์/เพศ) ไม่ต้องพิมพ์คำนำหน้า+ชื่อค้นหาทีละคนแล้ว'
  ],
  '10.22.345': [
    '⚽ AZFUTSALCUP ปรับใหญ่ระบบเช็คอินเข้างาน: (1) ดูพิกัดสถานที่บนแผนที่ดาวเทียมแบบฝังในตัวได้เลย ไม่ต้องเปิดแท็บใหม่ (2) ตั้งค่าได้ว่าจะบังคับตรวจ "ใบอนุญาตผู้ปกครอง" และ/หรือ "แต่งกายเรียบร้อย" ก่อนนับว่าเช็คอินสำเร็จหรือไม่ (3) สตาฟสแกนเอง: ถ้าเปิดบังคับไว้ต้องติ๊กครบก่อนถึงจะบันทึกเช็คอินได้เลย (4) นักกีฬาสแกนเอง: บันทึกเป็น "รอยืนยัน" ก่อน ต้องให้สตาฟไปยืนยันในหน้าจอรีวิวแยกเท่านั้น (นักกีฬายืนยันเองไม่ได้) — เพิ่มหน้าจอ "รอสตาฟยืนยัน" ใหม่ให้สตาฟตรวจสอบทีละคนแล้วกดยืนยัน'
  ],
  '10.22.344': [
    '🔍 หน้าแจ้งไซซ์เสื้อบุคลากร (staff-shirt-size.html) เพิ่มแท็บ "ดู/แก้ไข/ลบข้อมูลที่เคยแจ้ง" — พิมพ์คำนำหน้า+ชื่อเดิมค้นหาข้อมูลที่แจ้งไว้ได้ แก้ไซซ์ใหม่หรือลบข้อมูลทิ้งได้เลยจากหน้าเดียวกัน'
  ],
  '10.22.343': [
    '⚽ AZFUTSALCUP เพิ่มปุ่ม "🗺️ ดูบนแผนที่" ในหน้าตั้งค่าพิกัดสถานที่ เปิด Google Maps ดูตำแหน่งที่ตั้งไว้ได้ทันทีก่อนบันทึกจริง และเพิ่มปุ่มยืนยันเพิ่มเติม "ใบอนุญาตผู้ปกครอง" กับ "แต่งกายเรียบร้อย" ในการ์ดสำเร็จหลังเช็คอินเข้างาน (ทั้งฝั่งนักกีฬาสแกนเองและสตาฟสแกนให้) กดติ๊ก/ยกเลิกได้เลยโดยไม่ต้องออกจากโหมดสแกน'
  ],
  '10.22.342': [
    '⚽ AZFUTSALCUP นาฬิกานับถอยหลังปิดรับเช็คอินในจอใหญ่ขยายใหญ่ขึ้นราว 4 เท่า (แยกเป็นแถบเต็มความกว้างของตัวเอง อ่านได้จากระยะไกล) และเพิ่มระบบตรวจพิกัด GPS ตอนนักกีฬาสแกนเองเช็คอินเข้างาน กันสแกนจากนอกสถานที่จริง (ตั้งพิกัด+รัศมีได้ในหน้าตั้งค่าแอดมิน ปุ่ม "ใช้พิกัดปัจจุบัน" ยืนที่สนามแล้วกดได้เลย ถ้าไม่ตั้งพิกัดไว้ระบบจะไม่ตรวจ)'
  ],
  '10.22.341': [
    '⚽ AZFUTSALCUP นักกีฬาสแกนเองเช็คอินเข้างาน ตอนนี้ขึ้นการ์ดสำเร็จเต็มจอตรงกลางทันที (เดิมโผล่เป็นการ์ดเล็กใต้กล้อง ต้องเลื่อนดู) เบอร์เสื้อโชว์ใหญ่ขึ้นชัดเจน และถ้ายังไม่มีเบอร์เสื้อในระบบจะบังคับให้กรอกก่อนถึงจะกดปุ่ม "เสร็จสิ้น" ได้ พร้อมปรับคอนทราสต์สีนาฬิกานับถอยหลังปิดรับเช็คอินในจอใหญ่ให้เด่นชัดขึ้น (เหลือง/แดง) เมื่อใกล้/เลยเวลาปิดรับ'
  ],
  '10.22.340': [
    '⚽ AZFUTSALCUP ตอนสแกนเช็คอินเข้างาน (ทั้งนักกีฬาสแกนเองและสตาฟสแกนให้) การ์ดสำเร็จโชว์เบอร์เสื้อในระบบให้เห็นเลย พร้อมลิงก์ "ไม่ตรง? แก้ไข" แก้เบอร์เสื้อให้ตรงกับเสื้อจริงวันแข่งได้ทันทีโดยไม่ต้องออกจากโหมดสแกน'
  ],
  '10.22.339': [
    '🔗 AZIZGAMES หน้าแดชบอร์ด เพิ่มลิงก์ "แจ้งไซซ์เสื้อกีฬาสี (บุคลากร)" คู่กับลิงก์ข้อมูลเช็คชื่อ/ค่าบำรุง/ไซซ์เสื้อเดิม — เดิมหน้า staff-shirt-size.html ไม่มีทางเข้าถึงจากในระบบเลย'
  ],
  '10.22.338': [
    '👕 หน้าแจ้งไซซ์เสื้อบุคลากร (staff-shirt-size.html) บังคับเลือก/ระบุคำนำหน้าชื่อก่อนกรอกชื่อ-นามสกุล และดรอปดาวน์ไซซ์เสื้อโชว์ความยาวรอบอกกำกับแต่ละไซซ์แล้ว'
  ],
  '10.22.337': [
    '👕 เพิ่มหน้าแจ้งไซซ์เสื้อกีฬาสีสำหรับ "บุคลากร" ที่ไม่มีบัญชีเข้า ปพ.5 (staff-shirt-size.html) ใส่รหัสผ่านแล้วพิมพ์ชื่อ-เลือกเพศ-เลือกไซซ์ได้เลย ไม่ต้องล็อกอิน — หน้าติดตาม sports-shirt-monitor.html แท็บ "ไซซ์เสื้อครู/บุคลากร" เพิ่มแถบแยกครู/บุคลากร ซ้อนแถบชาย/หญิงเดิม'
  ],
  '10.22.336': [
    '🐛 AZIZGAMES แก้ตัวเลข "ผู้เล่น (X/Y คน)" มุมขวาฟอร์มลงทะเบียน เดิมนับไม่รวมคนที่ลงทะเบียนไว้แล้วก่อนหน้า (ขึ้น 0/18 ทั้งที่เต็มโควต้าแล้ว) ตอนนี้ตรงกับพาเนลรายชื่อด้านล่างแล้ว'
  ],
  '10.22.335': [
    '🐛 AZIZGAMES แก้บั๊กจริง: ฟอร์มลงทะเบียนนักกีฬาเดิมเช็คโควต้าเต็มผิด (นับแค่การ์ดที่กำลังกรอกรอบนี้ ไม่รวมคนที่ลงทะเบียนไว้แล้วก่อนหน้า) ทำให้ลงทะเบียนเกินโควต้าจริงได้เรื่อยๆ แก้แล้ว พร้อมซ่อนฟอร์มกรอกคนใหม่เมื่อเต็มโควต้า และแก้ modal เลื่อนขึ้นไปดูส่วนบนสุดไม่ได้เวลาเนื้อหายาว'
  ],
  '10.22.334': [
    '📋 AZIZGAMES ฟอร์มลงทะเบียนนักกีฬา — พอเลือกรายการแข่งขัน+สีแล้ว โชว์การ์ดนักกีฬาที่ลงทะเบียนไว้แล้วในรายการนั้นทันที (แทนที่จะเห็นแค่ตัวเลขโควต้ารวม) แต่ละการ์ดกดแก้ไขเลขเสื้อ/เกรด/ชื่อทีม หรือถอนตัวได้ตรงนั้นเลย'
  ],
  '10.22.333': [
    '📋 AZIZGAMES ฟอร์ม "ลงทะเบียนนักกีฬา" ทั่วไป (พิมพ์รหัสนักเรียนเอง) พิมพ์รหัสเสร็จโชว์รายการที่เคยลงทะเบียนไว้แล้วในการ์ดนักกีฬาทันที และดรอปดาวน์เลือกรายการแข่งขันโชว์ "ลงแล้ว X/Y คน" ต่อสีที่เลือกอยู่ แทนโควต้ารวมเฉยๆ'
  ],
  '10.22.332': [
    '📋 AZIZGAMES หน้า "จัดการลงทะเบียนและไซส์เสื้อสี" — กดปุ่มลงทะเบียนให้นักกีฬาที่เคยลงแล้ว ตอนนี้เห็นรายการที่ลงทะเบียนไว้แล้วทั้งหมดในฟอร์มเลย พร้อมแก้ไขเลขเสื้อแข่ง/เกรดเฉลี่ย/ชื่อทีมได้ตรงนั้น ไม่ต้องถอนแล้วลงทะเบียนใหม่เหมือนเดิม'
  ],
  '10.22.331': [
    '🔙 หน้าตั้งค่า "วันเช็คชื่อเข้าสีวันแรก" (แอดมิน) เพิ่มสวิตช์เปิดให้ครูที่ปรึกษาเช็คชื่อย้อนหลังได้เอง — ปิดอยู่พฤติกรรมเหมือนเดิมทุกประการ (ล็อกเฉพาะวันที่ตั้งไว้วันเดียว) เปิดแล้วครูที่ปรึกษาเลือกวันที่จากปฏิทินปฏิบัติงานได้เองในแท็บ "เช็คชื่อเข้าสีวันแรก" ของตัวเอง มีแบนเนอร์เตือนชัดเจนเวลาเลือกย้อนหลัง'
  ],
  '10.22.330': [
    '🔙 หน้า "เช็คชื่อ" ของฝ่ายสี (พ่อสี/แม่สี/ครูประจำสี) เพิ่มดรอปดาวน์เลือกวันที่ย้อนหลัง (จากปฏิทินปฏิบัติงาน) แก้ปัญหาห้องเรียนที่ครูที่ปรึกษาไม่ได้เช็คชื่อวันนั้น (เช่นครูลา) แล้วไม่มีทางบันทึกย้อนหลังได้เลย — เดิมทั้งแท็บครูที่ปรึกษาและหน้าฝ่ายสีบันทึกลงวันนี้ตายตัวเสมอ มีแบนเนอร์เตือนชัดเจนเวลาเลือกวันที่ไม่ใช่วันนี้'
  ],
  '10.22.329': [
    '🔒 AZIZGAMES หน้าตาราง/ผลการแข่ง เพิ่มสวิตช์ (หน้าตั้งค่า) เปิด/ปิดปุ่ม "สแกนรายงานตัว"/พิมพ์เอกสารสำรองสาธารณะบนการ์ดคู่แข่งขัน — เดิมผู้เยี่ยมชมทั่วไปที่ไม่ได้ล็อกอินใช้ได้เลย ปิดสวิตช์แล้วเหลือเฉพาะแอดมิน/กรรมการที่ล็อกอินแล้วเท่านั้น (เหมาะใช้หลังฝ่ายรับรายงานตัวเช้าเก็บข้อมูลเสร็จแล้ว)'
  ],
  '10.22.328': [
    '⚙️ หน้าสรุปยอดเสื้อกีฬาสี (แอดมิน) เพิ่มตั้ง "ไซซ์เริ่มต้นขั้นต่ำ" แยก ม.ต้น/ม.ปลาย-ปวช (ไซซ์เล็กกว่าจะถูกซ่อนจากตัวเลือกของกลุ่มนั้นอัตโนมัติ) และแยกราคาค่าเสื้อกีฬาสีเป็นชาย/หญิงเพราะราคาไม่เท่ากัน — ครอบคลุมหน้าครูรับชำระค่าเสื้อและหน้าติดตาม sports-shirt-monitor ด้วย'
  ],
  '10.22.327': [
    '🎨 ปรับดีไซน์จอใหญ่หน้าลงทะเบียนเช็คอินเข้างาน AZFUTSALCUP ให้ดูชัดเจนขึ้น เพิ่มหัวข้อแบนเนอร์สีสัน แถบสรุปยอดเช็คอินแยก ม.ต้น/ม.ปลาย เอฟเฟกต์เรืองแสงรอบ QR และจุดไลฟ์กะพริบข้างฟีดเช็คอินล่าสุด'
  ],
  '10.22.326': [
    '⚽ AZFUTSALCUP เพิ่มแท็บกรอง ม.ต้น/ม.ปลายในรายการ "ทีมมาไม่ครบ" หน้าแอดมิน และเพิ่มการ์ดสถานะเช็คอินเข้างาน (ครบ/ยังไม่ครบ) ในหน้าทีมของฉันฝั่งนักเรียน พร้อมโชว์สถานะเช็คอินรายคนในรายชื่อนักกีฬา'
  ],
  '10.22.325': [
    '⚽ AZFUTSALCUP ตั้งเวลาเปิด-ปิดรับเช็คอินเข้างานได้ในหน้าแอดมิน และขึ้นเตือนอัตโนมัติเมื่อเลยเวลาปิดรับว่าทีมไหนยังเช็คอินไม่ครบ (สำหรับพิจารณาสกอร์ตามนโยบายที่ตั้งไว้)'
  ],
  '10.22.324': [
    '⚽ จอใหญ่เช็คอินเข้างาน AZFUTSALCUP โชว์ชื่อทีม+เบอร์เสื้อชัดขึ้น เพิ่มปุ่ม "✕ ยกเลิก" ลบรายการเช็คอินทีละคนได้ทันที และเพิ่มปุ่ม "ล้างการเช็คอินเข้างานทั้งหมด" ในหน้าตั้งค่าแอดมินสำหรับล้างข้อมูลตอนทดสอบ'
  ],
  '10.22.323': [
    '⚽ AZFUTSALCUP เพิ่มระบบ "เช็คอินเข้างาน" วันแข่งจริง แยกจาก "รับรายงานตัว" รายนัด — นักกีฬาเปิดกล้องสแกน QR หน้าจุดลงทะเบียนเช็คอินเองได้ (สำหรับคนพกมือถือมา), สตาฟ/แอดมินสแกน QR นักกีฬาให้ได้ (สำหรับ ม.ต้น ที่ไม่ได้พกมือถือ), เปิดจอใหญ่หน้าจุดลงทะเบียนโชว์ QR + รายชื่อคนเช็คอินสดได้ และตั้งค่าได้ว่าบังคับเช็คอินทั้ง 2 วันหรือวันแรกพอ'
  ],
  '10.22.322': [
    '🔒 ล็อกช่องแก้ไข "สังกัดทีมสี" ในหน้าฐานข้อมูลนักเรียนของ AZIZGAMES แล้ว (ทั้งตอนเพิ่ม/แก้ไขนักเรียน) ต้องแก้สีนักเรียนที่หน้า "สีนักเรียน" ของ ปพ.5 เท่านั้น กันข้อมูลสีเพี้ยนซ้ำ'
  ],
  '10.22.321': [
    '🐛 แก้ข้อมูลสีนักเรียนไม่ตรงกัน 54 คน (สีในหน้า "จัดการสีนักเรียน" กับสีที่ระบบกีฬาสี/AZIZGAMES ใช้จริงคนละสีกัน) sync ให้ตรงกันแล้วโดยยึดหน้า "จัดการสีนักเรียน" เป็นหลัก และแก้ให้หน้านี้อัปเดตสีทั้งสองฝั่งพร้อมกันเสมอ กันเพี้ยนซ้ำในอนาคต'
  ],
  '10.22.320': [
    '👔 ปุ่มแจ้งไซซ์เสื้อของครูจะซ่อนเองถ้าแอดมินปิดรับแจ้งไว้ (ยกเว้นครูที่เคยแจ้งไปแล้ว จะยังเห็นปุ่มไว้ดูประวัติของตัวเองได้เสมอ)'
  ],
  '10.22.319': [
    '🐛 Smart Classroom: แก้บั๊กช่องกรอกคะแนนในโหมดตรวจทีละคน — เดิมเปิดงานที่เคยให้คะแนนไปแล้วซ้ำ จะโชว์เป็นคะแนนเต็มเสมอ (เช่น เคยให้ 0 แต่เปิดใหม่เห็น 10) ตอนนี้โชว์คะแนนจริงที่บันทึกไว้ล่าสุดถูกต้องแล้ว'
  ],
  '10.22.318': [
    '👔 คุณครูแจ้งไซซ์เสื้อกีฬาสีของตัวเองได้แล้ว — ปุ่ม "แจ้งไซซ์เสื้อวันกีฬาสี2026" ในหน้าภาพรวมของครู เลือกไซซ์ → ยืนยัน → เสร็จสิ้น เคยแจ้งแล้วดูประวัติ/แก้ไขได้ (ถ้ายังไม่ปิดรับแจ้ง) — แอดมินตั้งค่าเปิด/ปิดและเลือกได้ว่าจะใช้ตารางไซซ์เดียวกับนักเรียนหรือแยกต่างหาก ในหน้า "สรุปยอดเสื้อกีฬาสี", มอนิเตอร์สาธารณะเพิ่มแท็บ "ไซซ์เสื้อครู" แยกชาย/หญิง',
    '🐛 แก้บั๊กแฝง: ตอนเลือกไซซ์เสื้อนักเรียนไซซ์ใหม่ๆ (SS, 4XL-8XL) ระบบเคยปฏิเสธว่า "invalid shirt size" เพราะยังอิงตารางไซซ์เก่าที่ค้างอยู่'
  ],
  '10.22.317': [
    '🐛 แก้หน้ารายชื่อผู้ส่งงานไม่อัปเดตสถานะทันทีหลังตรวจ/ให้คะแนนในโหมดตรวจทีละคน (เดิมต้องปิดแล้วเปิดใหม่ถึงจะเห็น)',
    '📏 ตั้งคะแนนเต็มเฉพาะของแต่ละงาน/แบบฝึกได้แล้ว (แยกจากคะแนนเต็มของคอลัมน์คะแนนที่ผูกไว้ซึ่งอาจสะสมจากหลายงาน) พร้อมบันทึกคะแนนอัตโนมัติทันทีที่กรอกเสร็จ ไม่ต้องกดปุ่มบันทึกก็ได้',
    '❌ Smart Classroom: ครูตีกลับงานให้นักเรียนแก้ไขได้แล้ว พร้อมกรอกเหตุผล — นักเรียนเห็นสถานะ "ถูกตีกลับ" พร้อมเหตุผลในหน้ารายวิชาและภาระงานของฉัน ส่งใหม่ได้ทันที'
  ],
  '10.22.316': [
    '🔎 Smart Classroom: หน้าตรวจงานเพิ่ม 3 สถานะ (🔵ยังไม่ตรวจ/🟡ตรวจแล้วยังไม่ให้คะแนน/✅ให้คะแนนแล้ว) พร้อมสวิตช์ "เรียงตามสถานะ" ดันคนตรวจ+ให้คะแนนแล้วลงล่าง — โหมดตรวจทีละคนโชว์โหมดคะแนน (ทับ/บวกเพิ่ม/เทียบสูงกว่า) ให้เห็นชัดก่อนบันทึก และเพิ่มตัวอย่างคอมเมนต์ 2 กลุ่ม (ชื่นชม/ปรับปรุง) กดแทรกแล้วแก้ไขต่อได้'
  ],
  '10.22.315': [
    '👕 ป๊อปอัพตัวอย่างเสื้อ: แก้เส้นวัดรอบอกด้านขวาที่เคยเลยขอบเสื้อไปทับแขนเสื้อ ให้หยุดพอดีที่ขอบตัวเสื้อจริง'
  ],
  '10.22.314': [
    '👕 ป๊อปอัพตัวอย่างเสื้อ: แสดงเส้นวัดรอบอกเฉพาะรูปด้านหน้าเท่านั้น (กันเข้าใจผิดว่าฝั่งละ 39 นิ้ว) ปรับตำแหน่งเส้นให้แม่นขึ้น และทำให้ตัวเลขเด่นชัดกว่าเดิมมาก'
  ],
  '10.22.313': [
    '👕 ป๊อปอัพตัวอย่างเสื้อกีฬาสี: เปลี่ยนป้ายไซซ์มุมรูป เป็นเส้นวัดรอบอกทาบบนตัวเสื้อจริง (มีเลขนิ้วตรงกลางเส้น) ทั้งรูปหน้าและรูปหลัง เหมือนตารางไซซ์ของร้านตัดเสื้อ'
  ],
  '10.22.312': [
    '👕 ไซซ์เสื้อกีฬาสี: พิมพ์รอบอกแล้วระบบปัดขึ้นเป็นไซซ์ที่ใหญ่พอเสมอ (ไม่ใช่ไซซ์ใกล้เคียงที่สุด กันรัดเกินไป) — นักเรียนหญิงจะเห็น 2 ไซซ์ให้เลือกเอง (ตัวที่ปัดขึ้น + อีกไซซ์ถัดไป) พร้อมคำแนะนำเรื่องความสบายใจ/เคลื่อนไหวสะดวก/ผ่านเกณฑ์ฝ่ายปกครอง'
  ],
  '10.22.311': [
    '👕 ไซซ์เสื้อกีฬาสี: เลือกไซซ์หรือพิมพ์รอบอกให้ระบบแนะไซซ์ให้ จะเห็นตัวอย่างเสื้อจริง+เลขรอบอกทับรูปทันที กดยืนยันในป๊อปอัพนั้นเลยถึงจะบันทึก จากนั้นเด้งป๊อบอัพสรุป "รอครูที่ปรึกษาสามัญยืนยัน" — แก้ไซซ์ที่หายไปในตารางตั้งค่า (ขาด SS/7XL/8XL)'
  ],
  '10.22.310': [
    '👕 ไซซ์เสื้อกีฬาสี: หลังนักเรียนบันทึกไซซ์แล้ว ระบบเด้งป๊อบอัพโชว์ตัวอย่างเสื้อจริงตามสี+ไซซ์ที่เลือกให้ดูเลย (ทั้งฝั่งนักเรียนขอเอง และฝั่งแอดมิน AZIZGAMES บันทึกแทน) — ใช้รูปเสื้อจริง 8 สีที่อัปโหลดไว้'
  ],
  '10.22.309': [
    '👕 ไซซ์เสื้อกีฬาสี: ยืนยันใช้ "รอบอก" อย่างเดียว (ตัดความยาวตัวออก) เพิ่มไซซ์ 6X/7X/8X (52/54/56 นิ้ว), นักเรียน ม.ปลาย (ม.4-6) และ ปวช. จะไม่เห็นตัวเลือกไซซ์ S แล้ว'
  ],
  '10.22.308': [
    '⚙️ AZIZGAMES: จัดกลุ่มหมวดหมู่หน้าตั้งค่าระบบใหม่ (ทั่วไป/กีฬา&การแข่งขัน/บุคคล/รายงาน&รางวัล) ย้ายเมนูย่อยจากแถบบนไปอยู่ไซด์บาร์ (เดสก์ท็อป) กันหน้าตั้งค่ารกเมื่อเพิ่มฟีเจอร์ใหม่เรื่อยๆ, มือถือยังใช้แถบเลือกแท็บแบบจัดกลุ่มเหมือนเดิม'
  ],
  '10.22.307': [
    '👕 ไซซ์เสื้อกีฬาสี อัปเดตตามตารางไซซ์จริงจากร้านตัดเสื้อ (SS-5X) เพิ่มข้อมูล "ความยาวตัว" นอกจาก "รอบอก" ทั้งฝั่งตั้งค่าและฝั่งที่นักเรียน/ครูที่ปรึกษาเลือกไซซ์'
  ],
  '10.22.306': [
    '👕 ไซซ์เสื้อกีฬาสี ตั้งค่าได้เองแล้วที่หน้า "สรุปยอดเสื้อ" (แอดมิน) — เพิ่ม/ลบ/แก้ไขไซซ์+รอบอกได้อิสระ บันทึกในตารางเดียวกับฝั่ง AZIZGAMES ตั้งค่าที่ไหนก็ได้ อีกฝั่งเห็นอัตโนมัติทันที'
  ],
  '10.22.305': [
    '👕 AZIZGAMES: ไซซ์เสื้อกีฬาสีที่แจ้งได้ตอนลงทะเบียน (S/M/L/XL/XXL/3XL + รอบอก) ย้ายจากค่าตายตัวในโค้ด มาตั้งค่าได้เองที่หน้าตั้งค่าระบบ → ตั้งค่าทั่วไป (เพิ่ม/ลบ/แก้ไขไซซ์ได้อิสระ)'
  ],
  '10.22.304': [
    '📸 AZIZGAMES (เว็บกีฬาสี React): เพิ่มปุ่ม "ดาวน์โหลดทั้งหมด" ในหน้าแกลเลอรี ให้ทำงานเหมือนฝั่ง pp5-online — เลือกรายการที่ต้องการก่อนดาวน์โหลด แล้วแยกโฟลเดอร์ในไฟล์ zip ให้อัตโนมัติ (ก่อนหน้านี้ดาวน์โหลดได้แค่ทีละรูป)'
  ],
  '10.22.303': [
    '📸 กีฬาสี: หน้า "ภาพกิจกรรมสี" (จัดการสีของฉัน) และแกลเลอรีรวมทุกสี ดึงไอคอนกีฬามาโชว์บนการ์ดอัลบั้มแล้ว, ช่อง "รายการแข่งขันที่เกี่ยวข้อง" เพิ่มตัวเลือกปฏิทินกิจกรรม (เข้าสีครั้งที่ N/กีฬาสี) และพิธีเปิด-พิธีปิด, ปุ่ม "ดาวน์โหลดทั้งหมด" เปลี่ยนเป็นเลือกรายการที่ต้องการก่อนดาวน์โหลด แล้วแยกโฟลเดอร์ในไฟล์ zip ให้อัตโนมัติตามรายการที่เลือก'
  ],
  '10.22.302': [
    '💡 AZIZGAMES: หน้าแกลเลอรีเพิ่มคำแนะนำใต้ปุ่มเลือกรูปภาพ อธิบายว่าถ่ายรูปสดจากกล้องมือถือได้ทีละรูปเท่านั้น (ข้อจำกัดของมือถือทุกรุ่น) แนะให้ถ่ายเก็บในคลังภาพก่อนแล้วเลือกจากคลังภาพแทนถ้าอยากอัปหลายรูปทีเดียว'
  ],
  '10.22.301': [
    '🖼️ AZIZGAMES: หน้าแกลเลอรีปรับปรุงฟอร์มอัปโหลด — การ์ดอัลบั้มดึงไอคอนกีฬามาโชว์แล้ว, ช่อง "สี" เพิ่มตัวเลือกบุคลากร/กรรมการผู้ตัดสิน (ไม่ต้องผูกกับสีใดสีหนึ่ง) พิมพ์ค้นหาได้ทั้งสองช่อง, เลือกสีแล้วรายการแข่งขันกรองตามเพศของสีนั้นให้อัตโนมัติ'
  ],
  '10.22.300': [
    '📑 AZIZGAMES: ผังการแข่งขันบนจอกว้าง (เดสก์ท็อป) เพิ่มแท็บเลื่อนไปดูรอบที่ต้องการแล้ว เหมือนที่มีอยู่แล้วบนมือถือ ยังเห็นทุกรอบพร้อมกันเหมือนเดิม แค่กดแท็บแล้วเลื่อนคอลัมน์นั้นเข้าจอให้เองไม่ต้องลากสกอร์ลบาร์เอง',
    '📍 AZIZGAMES: แก้สถานที่แข่งขันไม่ขึ้นในการ์ดคู่แข่งขัน — เดิมก็อปจากรายการกีฬาแค่ตอนจับสลากครั้งเดียว ถ้าครูมาแก้สถานที่ทีหลังจะไม่อัปเดตตาม ตอนนี้ถ้าคู่ไหนว่างจะดึงค่าปัจจุบันของรายการมาโชว์แทนอัตโนมัติ พร้อมเปลี่ยนไอคอนเวลา/สถานที่ในทุกจุดให้ใช้ไอคอนที่ตั้งค่าไว้ในระบบแล้ว (หน้าตั้งค่า → จัดการรูปภาพ)'
  ],
  '10.22.299': [
    '🗓️ AZIZGAMES: เพิ่มฟอร์มตั้งวันที่/เวลา/สถานที่ต่อคู่แข่งขัน (เดิมไม่มีใครกรอกเวลาได้เลย) กดปุ่ม 🗓️ บนการ์ดคู่แข่งขันในหน้า "ตาราง/ผลการแข่งขัน" แก้ทีละคู่ได้ หรือหน้า "รายการแข่งขัน" ปุ่ม "จัดตารางเวลา" แก้ทุกคู่ของรายการทีเดียว — ทั้งสองจุดบันทึกลงฐานข้อมูลเดียวกัน แก้ที่ไหนอีกที่เห็นตามทันที'
  ],
  '10.22.298': [
    '🏟️ AZIZGAMES: หน้า "ตาราง/ผลการแข่งขัน" ก่อนเลือกรายการกีฬา เปลี่ยนจากข้อความต้อนรับเฉยๆ เป็นภาพรวมคู่แข่งขันทุกกีฬาพร้อมกัน (แท็บวันนี้/ทั้งหมด + กำลังแข่ง/รอแข่งอยู่บนสุด + เสร็จสิ้นแยกด้านล่าง) คลิกคู่ไหนก็เข้าตัวกรอกคะแนนของนัดนั้นตรงๆ ได้เลย เลือกรายการกีฬาจาก dropdown เมื่อไหร่ก็เห็นผังสายแข่งเต็มของรายการนั้นเหมือนเดิมทุกอย่าง'
  ],
  '10.22.297': [
    '📅 AZIZGAMES: หน้าแดชบอร์ดตารางแข่งขัน เพิ่มแท็บ "วันนี้"/"ทั้งหมด" แยกตารางกำลังแข่ง+รอแข่ง (บนสุด) กับตารางเสร็จสิ้นแล้ว (ล่าง) ให้ชัดเจน การ์ด KPI "แมตช์แข่งขันประจำวัน"/"เสร็จสิ้นการแข่งขัน" คลิกแล้วสลับแท็บ+เลื่อนไปหาตารางที่ตรงกันให้อัตโนมัติ'
  ],
  '10.22.296': [
    '🥇 AZIZGAMES: แอดมินตั้งคะแนนเหรียญทอง/เงิน/ทองแดงได้เองแล้ว (เดิมตายตัว 40/30/20 ทุกรายการ) ตั้งค่าเริ่มต้นของทั้งระบบได้ที่หน้าตั้งค่า และตั้งเฉพาะรายการแข่งขันไหนให้ต่างจากค่าเริ่มต้นก็ได้ (เว้นว่าง = ใช้ค่าเริ่มต้น)'
  ],
  '10.22.295': [
    '🖱️ AZIZGAMES: ล็อกอินสำเร็จแล้วพาไปหน้าแดชบอร์ดเสมอ คลิกการ์ดคู่แข่งขันวันนั้นได้เลย — คนล็อกอินแล้ว (นัดที่ยังไม่จบ) เข้าหน้าบันทึกผลของนัดนั้นตรงๆ ไม่ต้องเลือกเพศ/ประเภทกีฬาเอง ส่วนคนทั่วไป/นัดที่จบแล้ว เปิดหน้าต่างดูรายละเอียดแบบ livescore (กี่เซต ใครชนะ ผู้ทำประตู ใบเหลือง-แดง ตามชนิดกีฬา)'
  ],
  '10.22.294': [
    '📡 AZIZGAMES: เพิ่มระบบสำรองสำหรับสกอร์สด — โพลข้อมูลนัดแข่งขันซ้ำทุก 5 วินาทีขนานไปกับ Realtime channel เดิม กันเคสจอสาธารณะบางเครื่อง/เครือข่ายที่ Realtime หลุดเงียบๆ (ต้องกด refresh มือถึงจะเห็นสกอร์ล่าสุด) ไม่ให้ค้างนานเกิน 5 วิ อีกต่อไป + ปรับคิวออฟไลน์ให้ส่งข้อมูลที่ค้างต่อทันทีไม่ต้องรอรอบถัดไป'
  ],
  '10.22.293': [
    '🐛 AZIZGAMES: แก้บั๊กสำคัญ — กดคะแนนสด (เซต/ยก/ประตู) รัวๆ ติดกันทำให้ค่าที่ส่งขึ้น Supabase ค้างเก่ากว่าที่กรรมการเห็นจริง จอสาธารณะ/เบราว์เซอร์อื่นเลยเห็นสกอร์ไม่ตรง สาเหตุคือระบบคิวออฟไลน์เขียนทับข้อมูลใหม่ที่เพิ่ง merge เข้ามาทิ้งระหว่างกำลังซิงก์รอบก่อนหน้าอยู่ (race condition) แก้เรียบร้อยแล้ว'
  ],
  '10.22.292': [
    '📡 AZIZGAMES: คนทั่วไปเห็นสกอร์สดระหว่างแข่งขันได้แล้วทุกประเภทกีฬา (เดิมเห็นสดแค่กีฬาบอล/กรอกคะแนนมือ) กีฬาแบบเซต (วอลเลย์บอล/แบดมินตัน) โชว์คะแนนเซตปัจจุบัน+จำนวนเซตที่ชนะแล้ว, กีฬาแบบยก (ชักเย่อ/งัดข้อ) โชว์ยกที่ชนะแล้ว, เปตองโชว์คะแนนสะสมถึงเป้า'
  ],
  '10.22.291': [
    '🐛 AZIZGAMES: แก้หน้าตั้งค่ากีฬาแบบเซต (วอลเลย์บอล/แบดมินตัน/เทเบิลเทนนิส) เดิมข้อความขึ้น "แข่งแบบดีที่สุดจาก N เซต" ตัว N ตายตัวไม่ใช่ค่าจริงที่เลือก ทำให้กรรมการมองไม่เห็นว่ากำลังตั้งค่ากี่เซต เผลอตั้ง Best of 1 (จบเซตเดียว) โดยไม่รู้ตัว — ตอนนี้โชว์ตัวเลขจริงตามที่เลือก พร้อมคำเตือนว่าต้องชนะกี่เซตถึงจบนัด'
  ],
  '10.22.290': [
    '👥 AZIZGAMES: หน้าตาราง/ผลการแข่งขัน เพิ่มการ์ดสรุปนักกีฬาที่ลงทะเบียนต่อสี คลิกดูรายชื่อ+รูป+เบอร์เสื้อได้ทันที ไม่ต้องรอจับคู่นัดแข่งขันก่อนเหมือนเดิม'
  ],
  '10.22.289': [
    '🏃 AZIZGAMES: กีฬาจับเวลาต้องล็อกอินก่อนถึงจะจับเวลา/บันทึกผลได้แล้ว (เดิมใครก็แตะได้แม้ไม่ล็อกอิน) กรีฑา 100/200/4x100/4x200 เมตร เพิ่มระบบลู่วิ่ง 8 ลู่ + แบ่งฮีต จัดนักกีฬาลงลู่ได้ วิ่งกระสอบ/วิ่งผลัดสามขา/วิ่งสามขา ให้กรรมการเลือกได้เองว่าสนามเปิดหรือมีลู่ตอนเปิดหน้าครั้งแรก'
  ],
  '10.22.288': [
    '🧑‍💼 กีฬาสี: แยกแท็บ "ผู้จัดการทีม" ออกจากแท็บ "นักกีฬา" ในหน้าจัดการทีมสี ไม่ปนกันอีกต่อไประหว่างนักกีฬาที่ลงแข่งกับสตาฟที่ได้รับมอบหมายดูแลรายการแข่งขัน'
  ],
  '10.22.287': [
    '📊 AZIZGAMES: เพิ่มปุ่ม "ดูภาพรวมการลงทะเบียน" ในหน้าจัดการนักกีฬา เปิดแดชบอร์ดเต็มจอสลับชาย/หญิง จัดอันดับแต่ละสีตามจำนวนคนลงทะเบียน พร้อมโลโก้สี เหมาะสำหรับแคปหน้าจอส่งกลุ่ม LINE กระตุ้นทีมสี'
  ],
  '10.22.286': [
    '🎯 กีฬาสี: "มอบหมายรายการแข่งขัน" แยกเป็นสิทธิ์ของตัวเองแล้ว (ไม่ผูกกับบทบาทหรือปนกับสิทธิ์ลงทะเบียนกีฬาเหมือนเดิม) เปิด/ปิดให้สมาชิกแต่ละคนได้อิสระจากหน้าสิทธิ์ประจำสี'
  ],
  '10.22.285': [
    '🛡️ กีฬาสี: หัวหน้านักเรียนสต๊าฟสี (staff_lead) แต่งตั้ง/แก้ไขสิทธิ์สตาฟคนอื่นในทีมได้แล้ว (แท็บสิทธิ์ประจำสี) เดิมทำได้แค่ครูประจำสีเท่านั้น เผื่อพ่อสี/แม่สีมอบหมายให้ช่วยทำ'
  ],
  '10.22.284': [
    '💰 กีฬาสี: แท็บบัญชีสี เพิ่มฟอร์ม "บันทึกรายรับใหม่" (เงินสนับสนุนโรงเรียน/เงินรางวัล) ให้ฝั่งทีมสีที่มีสิทธิ์บันทึกการเงินบันทึกเองได้เลย ไม่ต้องรอแอดมินระบุให้ทุกครั้ง'
  ],
  '10.22.283': [
    '🎯 กีฬาสี: เพิ่มไอคอนกีฬาในทุกจุดที่เลือกรายการแข่งขันแล้ว (อัปโหลดรูปในแกลเลอรี, พิมพ์บัญชีนักกีฬา, ตัวกรองตาราง/ผลการแข่งขัน) ให้เหมือนกันทั้งระบบ ไม่ใช่แค่จุดมอบหมายรายการ'
  ],
  '10.22.282': [
    '🎯 กีฬาสี: ช่องเลือกรายการแข่งขันในตารางมอบหมาย เพิ่มไอคอนกีฬาแสดงคู่ชื่อรายการแล้ว (ใช้ไอคอนชุดเดียวกับที่อื่นในระบบ)'
  ],
  '10.22.281': [
    '🎯 กีฬาสี: ตารางมอบหมายรายการแข่งขันให้สตาฟ กรองรายการแข่งขันให้ตรงเพศของทีมสีนั้นอัตโนมัติแล้ว (เดิมโชว์ทุกรายการปนกันทั้งชาย-หญิง) และเปลี่ยนช่องเลือกรายการ/สตาฟเป็นแบบพิมพ์ค้นหาได้ (ค้นด้วยชื่อหรือรหัสนักเรียนก็เจอ)'
  ],
  '10.22.280': [
    '🎯 กีฬาสี: ตารางมอบหมายรายการแข่งขันให้สตาฟ เพิ่มรูปนักเรียนแสดงคู่กับชื่อ-สกุลแล้ว'
  ],
  '10.22.279': [
    '📷 กีฬาสี: หน้าจัดการสีของฉัน แท็บภาพรวม เพิ่มการ์ดชวนถ่ายภาพบรรยากาศเข้าสี/การแข่งขัน',
    '🎯 กีฬาสี: พ่อสี/แม่สี/ครูประจำสี หรือหัวหน้าสตาฟนักเรียน มอบหมายรายการแข่งขันให้สตาฟรับผิดชอบเฉพาะคนได้แล้ว (แท็บนักกีฬาในสี) — สตาฟที่ถูกมอบหมายจะเห็นการ์ด "รายการที่ฉันรับผิดชอบ" ในหน้าแข่งขันของ AZIZGAMES พร้อมปุ่มอัปโหลดรูปตรงรายการเลย'
  ],
  '10.22.278': [
    '🔍 AZIZGAMES: เพิ่มช่องค้นหาอัลบั้มภาพตามชื่อรายการแข่งขันในหน้าแกลเลอรี หาภาพง่ายขึ้นเมื่อมีหลายรายการแข่งขัน'
  ],
  '10.22.277': [
    '🐛 AZIZGAMES: แก้บั๊กหน้าข้อมูลนักกีฬา — กดกรองเพศ "หญิง"/"ชาย" แล้วไม่เจอใครเลย ทั้งที่มีนักกีฬาลงทะเบียนอยู่จริง (ข้อมูลเพศในฐานข้อมูลเป็นข้อความไทยแต่โค้ดเทียบกับรหัส M/W ตรงๆ) ตอนนี้กรองถูกต้องแล้ว'
  ],
  '10.22.276': [
    '🏆 หน้ากีฬาสีของนักเรียน ปรับใหม่ทั้งหมด แยกเป็น 4 แท็บด้านล่าง (ภาพรวม/เสื้อกีฬาสี/แข่งขัน/ร่วมมือ) แทนหน้ายาวเดียว หาข้อมูลง่ายขึ้น',
    '✅ เพิ่ม "ประวัติเช็คชื่อเข้าร่วมสี" ในแท็บ "ร่วมมือ" นักเรียนดูย้อนหลังได้เองว่าวันไหนมา/ขาด เช็คเมื่อไหร่ ใครเป็นคนเช็คให้'
  ],
  '10.22.275': [
    '🎨 AZIZGAMES: ปรับลำดับการลงทะเบียนนักกีฬาเป็น "เลือกสีก่อน" เสมอ ระบบจะรู้เพศจากสีที่เลือกแล้วกรองรายการแข่งขันให้ตรงเพศอัตโนมัติในขั้นถัดไป (เดิมต้องเลือกกีฬาก่อนแล้วค่อยเลือกสี)'
  ],
  '10.22.274': [
    '🎨 กีฬาสี: การ์ดแถบสี "กีฬาสีของฉัน" ด้านบนหน้ากีฬาสีของนักเรียน คลิกเข้าหน้าสีของตัวเองได้เลย พร้อมไอคอนบอกใบ้ให้รู้ว่าคลิกได้'
  ],
  '10.22.273': [
    '🐛 AZIZGAMES: แก้บั๊กร้ายแรง — การลงทะเบียนนักกีฬาไม่เคยถูกบันทึกลงฐานข้อมูลจริงเลยสักครั้ง (คอลัมน์ในฐานข้อมูลตั้งชนิดผิดมาตั้งแต่แรก ทำให้ทุกครั้งที่กด "บันทึกข้อมูล" ระบบขึ้นว่าสำเร็จทั้งที่ backend ปฏิเสธไปเงียบๆ) ตอนนี้บันทึกได้จริงแล้ว พร้อมแจ้งเตือนตามผลจริงถ้าบันทึกไม่สำเร็จ'
  ],
  '10.22.272': [
    '🐛 กีฬาสี: แก้บั๊กร้ายแรง — นักเรียนสตาฟประจำสีที่พ่อสี/แม่สีให้สิทธิ์ไว้ (เช่นเช็คชื่อ/งานของสี/ประกาศ/สรุปเสื้อ) ไม่เคยเห็นปุ่มเหล่านั้นเลยแม้ได้รับสิทธิ์แล้ว เพราะระบบเช็คแค่ครู (auth.uid()) ไม่รู้จักนักเรียนสตาฟที่ไม่มีบัญชีล็อกอินแบบครู แก้ให้ตรวจสิทธิ์จริงที่ได้รับถูกต้องแล้ว',
    '🎨 กีฬาสี: ย้ายปุ่ม "สีของฉัน" ในหน้านักเรียนออกมาเป็นปุ่มหลักกดเข้าได้ทันที (เดิมต้องกดเข้าเมนู "เปิดระบบกีฬาสีแบบเต็ม" แล้วเลือกอีกชั้นถึงจะเจอ)'
  ],
  '10.22.271': [
    '🆓 ฟีเจอร์เชื่อมข้อมูลกับระบบดูแล เปิดให้ครูทุกคนใช้ได้ฟรีแล้ว 1 ห้องเรียนต่อคน ห้องเพิ่มเติมจึงจะต้องสนับสนุนระดับ 2 ขึ้นไป (เดิมต้องสนับสนุนถึงจะใช้ได้เลย) มีปุ่มลิงก์ไปหน้าสนับสนุนให้ทันทีเมื่อครบโควต้า',
    '🐛 หน้าเช็คชื่อ (คาบ): จัดระเบียบแถบปุ่มด้านบนของหน้าต่างเช็คชื่อใหม่ (สแกน QR/ระบบดูแล/ส่งไประบบดูแล/ทุกคาบ/ทุกคน) แยกเป็นแถวลอยอิสระจากหัวข้อ แก้ปัญหาชื่อหัวข้อถูกบีบจนตัวอักษรตกแถวเวลาปุ่มเยอะ'
  ],
  '10.22.270': [
    '📤 เชื่อมข้อมูลกับระบบดูแล 2 ทิศทางแล้ว: หน้าเช็คชื่อครูเพิ่มปุ่ม "ส่งไประบบดูแล" ส่งเช็คชื่อของคาบที่เปิดอยู่ไปรอให้บุ๊กมาร์กฝั่งระบบดูแลติ๊กให้อัตโนมัติ (ครูกดปุ่มบันทึกของระบบดูแลเองเสมอ ไม่บันทึกอัตโนมัติ) — เฉพาะผู้สนับสนุนระดับ 2 ขึ้นไป'
  ],
  '10.22.269': [
    '📥 หน้าเช็คชื่อครู: ปุ่มวิธีติดตั้งระบบดูแลเปลี่ยนเป็นเปิดโมดัลในหน้าเดิม ไม่พาออกไปเปิดหน้าต่าง/แท็บแยกอีกต่อไป',
    '📥 นำเข้าระบบดูแล (หลายวัน): แก้ให้บันทึกครบทุกคาบที่ตรงกับวันนั้น กรณีวิชาเดียวกันสอนซ้ำวันเดียวมากกว่า 1 คาบ (เดิมบันทึกให้แค่คาบแรกที่เจอ)',
    '📥 นำเข้าระบบดูแล (หลายวัน): เพิ่มปุ่ม "ดูรายชื่อ" ต่อวัน ดูได้ว่าใครมา/ขาด/สาย/ลา พร้อมรูปนักเรียน ก่อนตัดสินใจนำเข้า'
  ],
  '10.22.268': [
    '❓ หน้าเช็คชื่อครู: เพิ่มปุ่มลิงก์ไปหน้าวิธีติดตั้งบุ๊กมาร์กระบบดูแล ข้างปุ่ม "ระบบดูแล (หลายวัน)" ให้ครูที่มีสิทธิ์กดเข้าไปติดตั้งเองได้เลย ไม่ต้องรอลิงก์'
  ],
  '10.22.267': [
    '📥 การเชื่อมข้อมูลกับระบบดูแล: เพิ่มหน้าติดตั้งปุ่มบุ๊กมาร์กแบบลากวาง (studentcare-install.html) ไม่ต้องกอปปี้โค้ดไปวางเองอีกต่อไป',
    '📥 หน้าเช็คชื่อครู: เพิ่มปุ่ม "ระบบดูแล (หลายวัน)" ดึงข้อมูลที่สะสมส่งไว้จากระบบดูแลได้ทุกวันที่ค้างอยู่พร้อมกัน เลือกวันที่ต้องการแล้วบันทึกทีเดียว ไม่ต้องเปิดทีละวัน — เฉพาะผู้สนับสนุนระดับ 2 ขึ้นไป'
  ],
  '10.22.266': [
    '📥 หน้าเช็คชื่อครู เพิ่มปุ่ม "ระบบดูแล" ในหน้าต่างเช็คชื่อรายคาบ ดึงข้อมูลที่ส่งมาจากระบบดูแล (azizstan.net/StudentCareV4) ผ่าน bookmarklet มาพรีวิวก่อนเติมลงช่องเช็คชื่อได้เลย ไม่ต้องพิมพ์ซ้ำ — เฉพาะผู้สนับสนุนระดับ 2 ขึ้นไป'
  ],
  '10.22.265': [
    '🐛 เอกสารปพ.5: แก้คะแนนการอ่าน คิดวิเคราะห์และเขียนสื่อความไม่เคยขึ้นในเอกสารเลย (เดิมโค้ดหาคอลัมน์ชื่อมี "อ่าน" ในคะแนนรายวิชาซึ่งไม่เคยมีจริง เพราะคะแนนอ่านเก็บอยู่คนละระบบ) แก้ให้ดึงจากระบบคะแนนอ่านกลางโดยตรง ขึ้นทั้งตารางสรุปผลหน้าแรกและช่องคะแนนรายบุคคลหน้าสอง',
    '🐛 หน้าเช็คชื่อครู: แก้วันที่ปีการศึกษาอ่านผิดคีย์ (cfg.academic_year ไม่มีจริง ต้องเป็น academicYear) ทำให้บางกรณีดึงวันหยุดผิดปี, แก้ข้อมูลวันหยุด 2 รายการที่ถูกบันทึกปี พ.ศ. ผิดเป็นส่วนของวันที่ (2569-07-28 ควรเป็น 2026-07-28) ทำให้คอลัมน์ไม่ขึ้นสีแดง พร้อมกันไม่ให้เกิดซ้ำด้วยการเตือนถ้าปีที่กรอกดูผิดปกติ',
    '🐛 หน้าเช็คชื่อครู: ช่องติ๊กกำหนดวันหยุดเองไม่เคยถูกบันทึกจริง (ไม่มี handler เลยตั้งแต่แรก) ติ๊กแล้วรีเฟรชเลยกลับเป็นเดิมเสมอ — เชื่อมให้บันทึก/ยกเลิกวันหยุดจริงแล้ว'
  ],
  '10.22.264': [
    '🐛 หน้าภาพรวมนักเรียน: แก้ไอคอน 📚 ซ้ำซ้อนในปุ่ม "ภาระงานของฉัน" (โชว์ 2 ครั้งในปุ่มเดียว) และซ้ำกับไอคอนการ์ด "รายวิชาของฉัน" ข้างๆ กัน — เปลี่ยนไอคอนภาระงานเป็น 📝 ให้แยกจากกันชัดเจน'
  ],
  '10.22.263': [
    '📚 นักเรียน: เปลี่ยนชื่อ "งานทั้งหมดของฉัน" เป็น "ภาระงานของฉัน" และปุ่มบนหน้าภาพรวมแสดงตลอดเวลาแล้ว (เดิมโผล่เฉพาะตอนมีงานค้าง หาไม่เจอตอนไม่มีงานค้าง) ตอนไม่มีงานค้างจะขึ้นสีเขียว "ไม่มีงานค้าง 🎉" แทน'
  ],
  '10.22.262': [
    '📚 นักเรียน: หน้าใหม่ "งานทั้งหมดของฉัน" รวมงานที่มอบหมายจากทุกวิชาไว้จุดเดียว แยกแถบสามัญ/ศาสนาชัดเจน ในแต่ละแถบแบ่งค้างอยู่/ทำแล้วให้ติดตามง่าย พร้อมแบนเนอร์เตือนบนหน้าภาพรวมเมื่อมีงานค้าง (โชว์ชิ้นที่ใกล้กำหนดส่งที่สุด)'
  ],
  '10.22.261': [
    '📸 AZIZGAMES: แกลเลอรีหลักปรับดีไซน์เหมือนหน้าจัดการสีของฉัน — เพิ่มขั้นตอนกริดแบบ masonry ก่อนเข้าดูเต็มจอ, lightbox มีคีย์บอร์ด/ปัดนิ้ว/สไลด์โชว์แล้ว',
    '⬆️ AZIZGAMES แกลเลอรีหลัก เปิดให้คนทั่วไปอัปโหลดรูปภาพได้เลย (ไม่ต้องมีบัญชี) ต้องใส่รหัสผ่าน azpht26 ก่อน เลือกสีที่รูปสังกัดได้'
  ],
  '10.22.260': [
    '🕌 หน้า "นักเรียนที่ปรึกษา" ฝั่งครูที่ปรึกษาศาสนา เพิ่มแท็บ "เช็คชื่อเข้าสีวันแรก" ให้ใช้ได้เหมือนฝั่งสามัญแล้ว — บางห้องเรียนสามัญและศาสนาเป็นห้องเดียวกัน ถ้าครูที่ปรึกษาสามัญลากิจ/ลาป่วย ครูที่ปรึกษาศาสนาของห้องเดียวกันเช็คชื่อแทนได้เลย'
  ],
  '10.22.259': [
    '👥 หน้ามอนิเตอร์เช็คชื่อกีฬาสี เพิ่มแท็บ "ทั้งหมด" ดูรวมทั้งชายและหญิงพร้อมกันได้ ไม่ต้องสลับดูทีละเพศ'
  ],
  '10.22.258': [
    '🔍 หน้ามอนิเตอร์เช็คชื่อกีฬาสี เพิ่มตัวกรองตามระดับชั้น (ม.1–ม.6, ปวช.1–3) ใช้งานง่ายขึ้นสำหรับฝ่ายที่รับผิดชอบ',
    '↩️ หน้า "นักเรียนที่ปรึกษา" แท็บเช็คชื่อเข้าสีวันแรก ครูที่ปรึกษาสามัญกดยกเลิกรายการที่ตัวเองเพิ่งเช็คชื่อผิดได้แล้ว (เฉพาะรายการที่ตัวเองบันทึกเอง และเฉพาะช่วงวันที่ยังเปิดเช็คชื่ออยู่)'
  ],
  '10.22.257': [
    '🐛 หน้ารายงานตัวนักกีฬา (sports-checkin.html): แก้บั๊กกล้องสแกน QR กระพริบแล้วปิดตัวเองสุ่มๆ — สาเหตุคือทุกครั้งที่สแกนแล้วอัปเดตข้อความแจ้งผล โค้ดเดิมเขียนทับพื้นที่กล้องทั้งหมดใหม่และสั่งเปิดกล้องซ้ำซ้อนกับสตรีมเดิมที่ยังไม่ปิด แก้ให้อัปเดตแค่ข้อความแจ้งผล ไม่แตะพื้นที่กล้องอีกต่อไป'
  ],
  '10.22.256': [
    '🔗 เพิ่ม URL แยกสำหรับหน้ารายงานตัวนักกีฬา (sports-checkin.html) เปิดตรงได้เลยไม่ต้องเข้า AZIZGAMES ทั้งระบบ ใส่รหัสผ่าน azreg26 เหมือนเดิม — ข้อมูลชุดเดียวกัน เขียนแล้วเห็นผลในแอป AZIZGAMES ทันที'
  ],
  '10.22.255': [
    '🔑 AZIZGAMES: หน้า "รายงานตัวนักกีฬา" เปิดให้ทุกคนเห็นปุ่มได้แล้ว (ไม่ต้องมีบัญชีแอดมิน) แต่ต้องใส่รหัสผ่านเฉพาะทีมงานก่อนเข้าใช้งาน'
  ],
  '10.22.254': [
    '📐 AZIZGAMES: หน้า "รายงานตัวนักกีฬา" เปลี่ยนเป็นเปิดเต็มหน้าจอแทนกล่องกลางจอ ใช้งานง่ายขึ้นตอนหน้างานจริง'
  ],
  '10.22.253': [
    '📝 AZIZGAMES: เพิ่มหน้า "รายงานตัวนักกีฬา" ในหน้าข้อมูลนักกีฬา (สำหรับสตาฟ/แอดมิน) รายงานตัวครั้งเดียวตอนเช้าแล้วมีผลกับทุกรอบการแข่งขันของวันนั้นอัตโนมัติ ไม่ต้องสแกนซ้ำทีละแมตช์ — สแกน QR หรือพิมพ์รหัสนักเรียนก็ได้ ค้นหา/กรองตามสี กีฬา ชื่อได้ (การรายงานตัวต่อแมตช์แบบเดิมยังใช้ได้เป็นทางแทรกกรณีมาสาย)'
  ],
  '10.22.252': [
    '🎓 AZIZGAMES: หน้าแก้ไขกิจกรรมการแข่งขัน (ทั้งหน้า Matches และหน้าตั้งค่า) เพิ่มช่องติ๊ก "ต้องการให้นักเรียนระบุเกรดเฉลี่ยตอนลงทะเบียน" — เปิดไว้แล้วหน้าลงทะเบียนนักกีฬาจะมีช่องกรอกเกรดเฉลี่ยต่อคนเพิ่มขึ้นมาและบังคับกรอกก่อนบันทึกทันที'
  ],
  '10.22.251': [
    '🔎 Smart Classroom: หน้ารายชื่อผู้ส่งงาน คลิกได้ทุกคนแล้ว (เดิมคลิกได้แค่คนที่ส่งงานแล้ว) รวมถึงคนที่ยังไม่ส่งก็กดเข้าโหมด "ตรวจทีละคน" ได้เลย ปุ่ม "ตรวจทีละคน" ก็เปิดใช้ได้แม้ยังไม่มีใครส่งงานเลยสักคน'
  ],
  '10.22.250': [
    '🔒 หน้ามอบหมายผู้ดูแลประจำสี: บทบาท "หัวหน้านักเรียนสต๊าฟสี" มีได้แค่คนเดียวต่อสี — ถ้าสีนั้นมีหัวหน้าอยู่แล้ว ระบบจะปิดตัวเลือกนี้และสลับเป็น "นักเรียนสต๊าฟสี" ให้อัตโนมัติ (ปิดสิทธิ์คนเดิมก่อนถึงจะมอบหมายคนใหม่แทนที่ได้)'
  ],
  '10.22.249': [
    '🔑 เพิ่มสิทธิ์ "บันทึกรายจ่ายสี" ย้อนหลังให้พ่อสี/แม่สี, ครูประจำสี และหัวหน้านักเรียนสต๊าฟสีทุกคนที่มีอยู่แล้ว (เดิมมีแค่คนที่แอดมินมอบสิทธิ์หลังฟีเจอร์บัญชีสีออกเท่านั้น)',
    '✏️ หน้ามอบหมายผู้ดูแลประจำสี เพิ่มปุ่ม "แก้ไขสิทธิ์" ในตารางรายชื่อ แก้ไขสิทธิ์ย่อยของแต่ละคนภายหลังได้โดยไม่ต้องปิดสิทธิ์แล้วมอบหมายใหม่'
  ],
  '10.22.248': [
    '🐛 แก้บั๊กวันที่เพี้ยนช่วงเที่ยงคืน-ตี 7: หน้าเช็คชื่อเข้าค่าย/วันงานจริงกีฬาสี, หน้าเช็คชื่อเข้าเรียนของครู, "วันเรียนถัดไป" ในหน้านักเรียน และปฏิทินปฏิบัติงาน เคยคำนวณ "วันนี้" แบบเวลา UTC ทำให้ช่วงเที่ยงคืนถึงตี 7 เวลาไทยระบบเข้าใจผิดว่ายังเป็นเมื่อวาน — แก้ให้อ้างอิงเวลาท้องถิ่นถูกต้องแล้วทุกจุด'
  ],
  '10.22.247': [
    '📒 กีฬาสี: เพิ่มบัญชีเงินโปร่งใสของแต่ละสี — แท็บใหม่ "บัญชีสี" ในหน้าจัดการสีของฉัน แสดงค่าบำรุงสี+เงินสนับสนุนโรงเรียน+เงินรางวัล+รายจ่าย รวมยอดคงเหลือ เปิดให้ทุกคนในทีมเห็นเพื่อความโปร่งใส สต๊าฟ/ครูที่ได้รับสิทธิ์ "บันทึกรายจ่ายสี" บันทึกรายจ่ายเองได้',
    '💰 หน้า "สีของฉัน" ของนักเรียนทุกคน เพิ่มการ์ดสรุปบัญชีเงินสี พร้อมลิงก์ดูรายละเอียดเต็ม',
    '⚙️ เพิ่มหน้าแอดมินแยกใหม่ "บัญชีเงินกีฬาสี" (เมนูในหน้าครู/แดชบอร์ด) สำหรับเพิ่ม/แก้ไข/ลบเงินสนับสนุนโรงเรียนและเงินรางวัลของแต่ละสี',
    '📊 เพิ่มหน้ารวมบัญชีเงินทุกสี (sports-fund-monitor.html) สำหรับผู้บริหาร/ฝ่ายการเงิน ใส่รหัสผ่านเข้าดูเทียบทุกสีพร้อมกันได้ ไม่ต้องมีบัญชีล็อกอินในระบบ — ข้อมูลนี้ไม่แสดงในระบบกีฬาสีหลัก (AZIZGAMES) ตามที่ตั้งใจ'
  ],
  '10.22.246': [
    '🐛 AZIZGAMES: แก้แกลเลอรีหลักที่เปิดรูปแล้วขยายผิดปกติล้นจอ (บั๊ก flexbox ที่รูปใหญ่ดันคอนเทนเนอร์) และตัวอักษรบนแถบมืดอ่านไม่ออกในโหมดสว่าง — จุดที่แก้ก่อนหน้านี้ (masonry/สไลด์โชว์) เป็นแค่ฝั่ง "จัดการสีของฉัน" ใน ปพ.5 ไม่ได้ครอบคลุมแกลเลอรีหลักของ AZIZGAMES ซึ่งเป็นคนละโค้ดกัน — รอบนี้แก้ที่ต้นทางจริงแล้ว'
  ],
  '10.22.245': [
    '📸 แกลเลอรีภาพกิจกรรมกีฬาสี ปรับให้ดูเป็นแกลเลอรีจริงมากขึ้น: จัดภาพแบบ masonry ตามสัดส่วนจริงแทนตัดสี่เหลี่ยมเท่ากันทุกรูป, เปิดดูรูปเดี่ยวได้จากทั้งหน้าจัดการสีของฉันและแกลเลอรีรวม, เลื่อนดูรูปด้วยปุ่มลูกศรคีย์บอร์ดหรือปัดนิ้วบนมือถือได้แล้ว, เพิ่มโหมดสไลด์โชว์อัตโนมัติสำหรับเปิดจอโปรเจกเตอร์'
  ],
  '10.22.244': [
    '🔎 Smart Classroom: เพิ่มโหมด "ตรวจทีละคน" ในหน้างานที่มอบหมาย — พรีวิวไฟล์ (รูป/PDF) ในตัวแอปเลยไม่ต้องเปิดแท็บใหม่ ให้คะแนน+คอมเมนต์กลับนักเรียนได้ในหน้าเดียว สลับคนถัดไปหรือพิมพ์เลขที่กระโดดไปตรวจได้ทันที นักเรียนเห็นคอมเมนต์ของครูในหน้ารายวิชาของตัวเองด้วย'
  ],
  '10.22.243': [
    '🎨 หน้าจัดการทีมสี: กวาดแก้สี badge/ป้ายสถานะทั่วทั้งหน้า (สิทธิ์เปิด-ปิด, สถานะจ่ายค่าบำรุง, อันดับคะแนน/เหรียญ, สถานะอัตลักษณ์, ปุ่มยกเลิกรายการสแกน) ให้อ่านง่ายทั้งโหมดมืด-สว่าง',
    '🔍 แท็บ "สมาชิก" ค้นหารายชื่อได้จากชื่อหรือรหัสนักเรียน พร้อมตัวกรองระดับชั้น',
    '🐛 แก้บั๊กรูปที่ครูอัปโหลดในแท็บ "ภาพกิจกรรม" (จัดการสีของฉัน) ไม่ขึ้นในหน้าแกลเลอรีของระบบกีฬาสีหลัก (AZIZGAMES) — RLS เดิมอนุญาตแค่ผู้ใช้ที่ล็อกอินจริง แต่หน้าแกลเลอรีหลักเปิดดูแบบสาธารณะ (ไม่ต้องล็อกอิน) เลยมองไม่เห็นข้อมูล'
  ],
  '10.22.242': [
    '🎨 หน้าจัดการทีมสี: แก้ช่องกรอกข้อมูล/ดรอปดาวน์ทุกจุด (มอบหมายผู้ดูแลประจำสี, เกณฑ์เช็คชื่อเกียรติบัตร, เช็คชื่อ, ค่าบำรุงสี, ตาราง/ผล, พิมพ์บัญชีนักกีฬา) ให้อ่านง่ายทั้งโหมดมืดและโหมดสว่าง ไม่ต้องสลับโหมดไปมาแล้ว'
  ],
  '10.22.241': [
    '👕 หน้าติดตามไซซ์เสื้อ/ค่าเสื้อกีฬาสี ปรับใหม่ทั้งหน้า: แยกเป็น 2 แท็บชัดเจน (ไซซ์เสื้อ/ค่าเสื้อ) เพิ่มการ์ดสรุปตามสีกดกรองได้ และตารางกริดสี×ไซซ์กดตัวเลขเพื่อกรองรายชื่อได้ทันที ช่วยให้ครูที่ดูแลนำข้อมูลไปแจ้งร้านตัดเสื้อได้ง่ายขึ้น'
  ],
  '10.22.240': [
    '👕 AZIZGAMES: เพิ่มปุ่มลิงก์หน้าติดตามไซซ์เสื้อ/ค่าเสื้อกีฬาสีในแดชบอร์ดภาพรวม เปิดแท็บใหม่เหมือนปุ่มเช็คชื่อ/ค่าบำรุงเดิม',
    '🐛 แก้บั๊กนักเรียนซ้ำในหน้าติดตามเช็คชื่อ/ค่าบำรุง/เสื้อกีฬาสี (นักเรียนที่ team_color_id กับ house_color ไม่ตรงกันเคยโผล่ซ้ำ 2 แถว) ทั้ง 3 หน้าตอนนี้แสดงจำนวนนักเรียนถูกต้องครบถ้วน'
  ],
  '10.22.239': [
    '👕 กีฬาสี: เพิ่มหน้าติดตามไซซ์เสื้อและค่าเสื้อกีฬาสีรวมทั้งโรงเรียน (sports-shirt-monitor.html) สำหรับฝ่ายที่รับผิดชอบ กรองตามสถานะไซซ์/การชำระได้ พร้อมดาวน์โหลดเป็น Excel และพิมพ์เอกสารรายชั้นได้'
  ],
  '10.22.238': [
    '🎽 กีฬาสี: ยกเลิกการล็อกปุ่มเช็คชื่อฝั่งฝ่ายสีในวันเข้าสีวันแรก เพราะครูที่ปรึกษาสามัญเช็คชื่อแค่ช่วงเข้าแถวตอนเช้าเท่านั้น — พ่อสี/แม่สี/ครูประจำสีเช็คชื่อเพิ่มเติมให้นักเรียนที่ตกหล่นได้ตามปกติตลอดวัน พร้อมข้อความแจ้งเตือนที่เข้าใจง่ายขึ้นหากมีคนเช็คชื่อคนเดียวกันซ้ำ'
  ],
  '10.22.237': [
    '🏃 AZIZGAMES: เปิดให้บางประเภทกีฬาลงทะเบียนได้มากกว่า 1 ทีมต่อสี (ตั้งค่าได้ในหน้าแก้ไขข้อมูลรายการแข่งขัน) พร้อมให้ตั้งชื่อทีมแยกกันตอนลงทะเบียน เช่น "แดง A", "แดง B"'
  ],
  '10.22.236': [
    '🎽 กีฬาสี: ครูที่ปรึกษาสามัญเช็คชื่อนักเรียนเข้าสีวันแรกแทนฝ่ายสีได้ในหน้า "นักเรียนที่ปรึกษา" ด้วยการสแกน QR หรือกรอกรหัส ระบบหาสีจริงของนักเรียนแล้วบันทึกให้อัตโนมัติ',
    '🔒 แอดมินกำหนดวันเช็คชื่อเข้าสีวันแรกได้เองในหน้าตั้งค่ากีฬาสี เฉพาะวันนั้นฝ่ายสีจะเห็นข้อมูลเช็คชื่ออ่านอย่างเดียวชั่วคราวเพื่อกันบันทึกทับกัน'
  ],
  '10.22.235': [
    '🛡️ จัดการสีของฉัน: พ่อสี/แม่สีมอบสิทธิ์นักเรียนสต๊าฟได้ครบระดับ ม.4–ม.6 และ ปวช.1–3 พร้อมแก้การดึงรายชื่อเกิน 1,000 คนให้ค้นพบครบทั้งระบบ',
    '🔎 หน้ามอบสิทธิ์ประจำสีแสดงป๊อปอัปบอกสาเหตุรายรหัสเมื่อเลือกไม่ได้ เช่น ไม่มีรหัส อยู่คนละสี ระดับไม่ตรง บัญชีถูกปิด หรือยังไม่มีบัญชีเข้าใช้งาน'
  ],
  '10.22.234': [
    '👕 กีฬาสี: ครูที่ปรึกษาศาสนารับชำระค่าเสื้อด้วยการสแกน QR หรือกรอกรหัสนักเรียน พร้อมสรุปจำนวนชำระแล้ว ค้างชำระ ยอดเงินรวม และดาวน์โหลดรายชื่อค้างชำระได้',
    '💰 นักเรียนตรวจสอบสถานะค่าเสื้อกีฬาสีของตนเองได้ โดยแยกจากค่าบำรุงสี และแอดมินกำหนดราคาค่าเสื้อก่อนเปิดรับชำระ'
  ],
  '10.22.233': [
    '🖨️ ห้องเรียนของฉัน: ตอนสร้างใบเช็กชื่อหรือใบบันทึกคะแนน ครูเลือกพิมพ์รายชื่อนักเรียนทั้งหมด เฉพาะชาย หรือเฉพาะหญิงได้แล้ว พร้อมระบุเพศและจำนวนคนบนหัวเอกสาร'
  ],
  '10.22.232': [
    '📊 AZFUTSALCUP2026: หน้าข้อมูลนักกีฬาของแอดมินเพิ่มปุ่มดาวน์โหลด Excel แยก ม.ต้นและ ม.ปลาย พร้อมข้อมูลทีม รหัสทีม สถานะ เบอร์เสื้อ รหัสนักเรียน ชั้นเรียน บทบาท และวันที่ลงทะเบียน'
  ],
  '10.22.231': [
    '🏷️ AZIZGAMES: จัดประเภทการแข่งขันจริงครบ 102 รายการตามเกณฑ์โรงเรียน — กีฬาสากล 40 รายการ กรีฑา 12 รายการ และกีฬาพื้นบ้าน/กีฬาเชิงทักษะ 50 รายการ',
    '🛡️ AZIZGAMES: การเพิ่มรายการใหม่จะไม่เลือกกีฬาสากลให้อัตโนมัติอีกต่อไป ครูต้องเลือกประเภทและวิธีการแข่งขันเอง พร้อมคำอธิบายเกณฑ์กำกับในฟอร์ม'
  ],
  '10.22.230': [
    '👩‍🏫 AZIZGAMES: บังคับเลือกรายชื่อครูผู้รับผิดชอบจากฐานข้อมูลครูจริง ค้นหาได้ด้วยรหัสครู ชื่อ อีเมล เบอร์โทร หรือแผนก และบันทึก profile_id ที่ถูกต้องลงรายการแข่งขัน',
    '🖼️ AZIZGAMES: ถอดปุ่มเปลี่ยนไอคอนออกจากหน้ารายการแข่งขันของครู ให้การจัดการไอคอนอยู่เฉพาะส่วนแอดมิน',
    '🛡️ AZIZGAMES: การแก้ไขและลบรายการแข่งขันตรวจยืนยันแถวที่ฐานข้อมูลเปลี่ยนจริงก่อนแจ้งว่าสำเร็จ และสร้างรหัสรายการใหม่จากข้อมูลล่าสุดบนเซิร์ฟเวอร์'
  ],
  '10.22.229': [
    '🐛 AZIZGAMES: ตรวจสอบยืนยันว่ารายการแข่งขันใหม่บันทึกลง Supabase จริง แต่รายการหญิงถูกซ่อนหลังรีเฟรชเพราะตัวกรองกลับไปหมวดชาย แก้ให้จำตัวกรองชาย/หญิงและสลับไปหมวดของรายการที่เพิ่งบันทึกโดยอัตโนมัติ',
    '👦👧 AZIZGAMES: เพิ่มปุ่มสลับรายการแข่งขันชาย/หญิงไว้บนหน้ารายการแข่งขันโดยตรง พร้อมใช้เพศที่กำลังดูเป็นค่าเริ่มต้นตอนเพิ่มรายการใหม่ ลดความสับสนว่าข้อมูลหาย'
  ],
  '10.22.228': [
    '🐛 ระบบกีฬาสี: แก้หน้าข้อมูลนักกีฬาสำหรับผู้เข้าชมทั่วไปให้แสดงปุ่มแจ้งไซส์ ลงทะเบียน พิมพ์เอกสาร และค้นหาเกียรติบัตรตามสิทธิ์ที่แอดมินเปิดไว้จริง โดยยังสงวนปุ่มแก้ไขและถอนนักกีฬาให้ผู้ดูแลเท่านั้น',
    '🔗 ระบบกีฬาสี: ปุ่ม “ลงทะเบียนนักกีฬา” ในหน้า “จัดการสีของฉัน” เปิดหน้าข้อมูลนักกีฬาและแบบฟอร์มลงทะเบียนโดยตรง ไม่ย้อนกลับไปหน้าแดชบอร์ด AZIZGAMES'
  ],
  '10.22.227': [
    '🐛 ระบบกีฬาสี: แก้ปุ่ม “ลงทะเบียนนักกีฬา” ในหน้า “จัดการสีของฉัน” กดแล้วดูเหมือนไม่เกิดอะไรขึ้น โดยปรับหน้าต่าง AZIZGAMES ให้อยู่เหนือหน้า workspace และแสดงผลได้ทันที'
  ],
  '10.22.226': [
    '🎯 AZFUTSALCUP2026: เพิ่มปุ่มเปิดโหมดตัดสินด้วยการยิงจุดโทษในหน้าบันทึกผล พร้อมช่องสกอร์จุดโทษ A/B แยกจากสกอร์เวลาปกติ โดยไม่ต้องบันทึกชื่อผู้ยิงและไม่นับรวมดาวซัลโวหรือประตูได้เสีย',
    '🏆 AZFUTSALCUP2026: รองรับสกอร์เวลาปกติเสมอเมื่อเปิดโหมดจุดโทษ ใช้ผลจุดโทษตัดสินผู้ชนะและทีมเข้ารอบ พร้อมแสดงผลรูปแบบ จุดโทษ 5-4 ในตารางและผังการแข่งขัน'
  ],
  '10.22.225': [
    '🔢 AZFUTSALCUP2026: ขยายเวลานับถอยหลังในหน้าบันทึกผลเป็นตัวเลขขนาดใหญ่แบบ responsive จัดกึ่งกลางแผง และวางสถานะการแข่งขันไว้ด้านล่างเพื่อให้อ่านได้ชัดเจนระหว่างควบคุมการแข่งขัน'
  ],
  '10.22.224': [
    '⏱️ AZFUTSALCUP2026: เพิ่มปุ่มใหญ่สลับ หยุดเวลา/เล่นต่อ ในหน้าบันทึกผล เพื่อหยุดนาฬิกาตามสัญญาณกรรมการเมื่อลูกออกหรือเกมหยุด โดยยังมีปุ่มจบครึ่งและจบการแข่งขันแยกชัดเจน',
    '📡 AZFUTSALCUP2026: หน้าตารางแสดงสถานะหยุดเวลาแบบเรียลไทม์ และปรับคิวออฟไลน์ให้อัปเดตสถานะนาฬิกาครบชุด ป้องกันเวลาสะสมหายเมื่อหยุดและเล่นต่อระหว่างสัญญาณขัดข้อง'
  ],
  '10.22.223': [
    '🧹 AZFUTSALCUP2026: นำการ์ดหัววันที่ซ้ำซ้อนออกจากด้านบนรายการแข่งขัน หลังจากมีปุ่มสลับวันที่ 1 และวันที่ 2 แล้ว ทำให้เริ่มดูคู่แข่งขันได้ทันทีและใช้พื้นที่หน้าจอน้อยลง'
  ],
  '10.22.222': [
    '📆 AZFUTSALCUP2026: เพิ่มปุ่มสลับดูตารางวันที่ 1 และวันที่ 2 แทนการแสดงสองวันต่อกันในแนวตั้ง พร้อมแสดงวันที่จริง จำนวนนัด และผลการกรองเฉพาะวันที่เลือก'
  ],
  '10.22.221': [
    '📅 AZFUTSALCUP2026: รองรับการจัดการแข่งขัน 2 วันอัตโนมัติ วันแรกเป็นรอบแรก/รอบแก้ตัว 21 นัด และวันที่สองเป็นรอบที่เหลือจนถึงรอบชิง 21 นัด แอดมินกำหนดวันและเวลาเริ่มแยกกันได้ โดยวันที่สองตั้งต้นเป็นวันถัดจากวันที่หนึ่ง',
    '🗓️ AZFUTSALCUP2026: หน้าตารางสาธารณะแบ่งหัววันที่ 1/วันที่ 2 พร้อมวันที่จริงและจำนวนนัดชัดเจน เรียงตามวันก่อนเวลา และคง 4 นัดชิงไว้ท้ายวันที่สองตามลำดับเดิม'
  ],
  '10.22.220': [
    '🐛 AZFUTSALCUP2026: แก้หน้า AZFUTSAL ที่เปิดผ่าน dashboard โหลดไฟล์ HTML เก่าจากแคช ทำให้กดจัดเวลาแล้วยังใช้ลำดับเวอร์ชันก่อนหน้า โดยเพิ่มเลขเวอร์ชันใน URL ของ iframe ทุกครั้ง พร้อมแก้ข้อมูลเวลาเดิมให้ 4 นัดสุดท้ายเป็นชิงที่ 3 ม.ต้น → ชิงที่ 3 ม.ปลาย → ชิงที่ 1 ม.ต้น → ชิงที่ 1 ม.ปลายแล้ว'
  ],
  '10.22.219': [
    '🏁 AZFUTSALCUP2026: ปรับ 4 นัดสุดท้ายของตารางอัตโนมัติให้สลับระดับตามลำดับ ชิงที่ 3 ม.ต้น → ชิงที่ 3 ม.ปลาย → ชิงที่ 1 ม.ต้น → ชิงที่ 1 ม.ปลาย โดยการแข่งขันก่อนหน้ายังคงเรียงสลับ ม.ต้น–ม.ปลายตามเดิม'
  ],
  '10.22.218': [
    '🏁 AZFUTSALCUP2026: การจัดเวลาอัตโนมัติยังสลับ ม.ต้น → ม.ปลายตามลำดับ แต่กันคู่ชิงชนะเลิศของทั้งสองระดับออกจากคิวปกติ แล้ววางคู่ชิง ม.ต้นและคู่ชิง ม.ปลายเป็น 2 นัดสุดท้ายของตารางเสมอ',
    '🏆 AZFUTSALCUP2026: การ์ดคู่แข่งขันในผังปรับเป็นรูปแบบเดียวกับหน้าตารางการแข่งขัน ใช้ความกว้างอ่านง่าย แสดงชื่อทีมซ้าย–ขวาและสกอร์ขนาดใหญ่ตรงกลาง โดยไม่แสดงปุ่มจัดการหรือรายละเอียดเหตุการณ์'
  ],
  '10.22.217': [
    '🌙 AZFUTSALCUP2026: เพิ่มปุ่มสลับโหมดมืด/สว่าง โดยเริ่มต้นด้วยโหมดมืด จดจำธีมที่ผู้ใช้เลือก และปรับคอนทราสต์ของพื้นหลัง การ์ด ตาราง โมดัล ช่องกรอก และเมนูให้มองเห็นชัดเจน พร้อมคงสีชมพู ม.ต้นและสีเขียว ม.ปลาย',
    '🏆 AZFUTSALCUP2026: ขยายคอลัมน์ผังการแข่งขันตามความยาวชื่อทีม แสดงชื่อทีมบรรทัดเดียว และเพิ่มปุ่มลัดด้านบนสำหรับเลื่อนไปยังรอบแรก รอบแก้ตัว รอบก่อนรองฯ รอบรองฯ และรอบชิงได้ทันที'
  ],
  '10.22.216': [
    '🕐 AZFUTSALCUP2026: ปุ่มจัดเวลาอัตโนมัติเรียงการแข่งขันสลับ ม.ต้น → ม.ปลาย ตามลำดับนัดแล้ว เมื่อระดับหนึ่งแข่งขันครบจึงจัดนัดที่เหลือของอีกระดับต่อ พร้อมปรับหน้าตารางสาธารณะให้เรียงตามเวลาแข่งขันจริง'
  ],
  '10.22.215': [
    '🎨 AZFUTSALCUP2026: ปรับผังการแข่งขันให้พื้นหลังคอลัมน์ใช้สีแยกตามแต่ละรอบ ส่วนการ์ดคู่แข่งขันยังคงสีประจำระดับ ม.ต้น/ม.ปลาย พร้อมแบ่งทีม A ทางซ้าย ทีม B ทางขวา และมี VS คั่นกลางให้เทียบคู่แข่งขันได้ชัดเจนขึ้น'
  ],
  '10.22.214': [
    '🎨 AZFUTSALCUP2026: ผังการแข่งขันแนวนอนแยกพื้นหลังแต่ละรอบด้วยโทนสีอ่อนคนละเฉด เพิ่มกรอบ เงา และหัวคอลัมน์ให้เด่นขึ้น พร้อมยืดความสูงคอลัมน์เท่ากัน ทำให้มองเส้นทางจากรอบแรกถึงรอบชิงได้ชัดเจนกว่าเดิมทั้ง ม.ต้นและ ม.ปลาย'
  ],
  '10.22.213': [
    '⚽ AZFUTSALCUP2026: รองรับ ม.ต้น 13 ทีม โดยจับทีมที่ได้สิทธิ์บายเป็นฉลากแรก ก่อนนำ 12 ทีมที่เหลือจับคู่ M1-M6 ทีมบายเข้าสู่รอบก่อนรองฯ อัตโนมัติ และปรับรอบแก้ตัวให้คัดกลับมา 1 ทีมเพื่อให้สายครบ 8 ทีม',
    '🏆 AZFUTSALCUP2026: หน้าสาธารณะเพิ่มแถบ “ผังการแข่งขัน” แยกจากตารางตามเวลา สามารถสลับดูผังแนวนอน ม.ต้น/ม.ปลาย ตั้งแต่รอบแรกถึงรอบชิง พร้อมชื่อทีม สกอร์ เวลา ทีมบาย และสถานะรอผลแต่ละนัด'
  ],
  '10.22.212': [
    '⚽ AZFUTSALCUP2025: หน้าจัดคู่ "รอบ 12 ทีม" / "รอบ 6 ทีม" เพิ่ม 2 โหมดใหม่นอกจากจับสลากสด — 🎲 อัตโนมัติ (จัดคู่ตามอันดับผลงานจริง ทีมเก่งพบทีมรอง กันชนกันเองเร็วเกินไป) และ ✍️ กรอกเอง (เลือกทีมทีละคู่ในหน้าเดียว บันทึกทีเดียว เหมาะกับกรณีจับฉลากสดนอกระบบแล้วมาพิมพ์ผล)'
  ],
  '10.22.211': [
    '👑 Smart Classroom: หน้าติดตามงานที่มอบหมายแสดงรูปนักเรียน+เลขที่ในแต่ละแถวแล้ว ไม่ใช่แค่ชื่อเปล่าๆ ดูง่ายขึ้นเวลาไล่เช็คว่าใครส่ง/ยังไม่ส่ง'
  ],
  '10.22.210': [
    '📝 ระบบแบบทดสอบออนไลน์: คะแนนจะเข้าสมุดคะแนนจริงก็ต่อเมื่อนักเรียนกด "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย" เท่านั้น (เดิมเขียนเข้าสมุดคะแนนทันทีทุกครั้งที่ส่งคำตอบ) — ยกเว้นควิซที่ทำได้ครั้งเดียวยังคงบันทึกทันทีเหมือนเดิมเพราะไม่มีปุ่มยืนยันให้กด และถ้าครูกด "ปิดสอบ" เอง ระบบจะบันทึกคะแนนให้อัตโนมัติสำหรับนักเรียนที่ยังไม่ได้กดยืนยัน กันคะแนนตกหล่น'
  ],
  '10.22.209': [
    '📄 AZIZGAMES (ระบบกีฬาสีหลัก): หน้าจัดการกิจกรรมกีฬา เพิ่มปุ่มอัปโหลดไฟล์กติกาการแข่งขันตรงจากเครื่อง (PDF/รูปภาพ) แทนที่จะต้องมีลิงก์ Google Drive ภายนอกอย่างเดียวเหมือนเดิม รูปภาพย่อขนาดให้อัตโนมัติ ส่วน PDF จำกัดไม่เกิน 15MB ยังวางลิงก์ภายนอกแบบเดิมได้ปกติ'
  ],
  '10.22.208': [
    '📝 ระบบแบบทดสอบออนไลน์: ปรับหน้าสรุปผลหลังส่งคำตอบให้โชว์ "สรุปคะแนนทุกครั้ง + เหลือสิทธิ์กี่ครั้ง" ตั้งแต่รอบแรก (เดิมโชว์เฉพาะตอนใช้สิทธิ์ครบ) เพิ่มปุ่ม "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย" ให้นักเรียนกดจบเองได้แม้ยังเหลือสิทธิ์ (กดแล้วทำซ้ำไม่ได้อีก) และถ้าออกจากระบบก่อนกดอะไร กลับมาหน้าหลักยังกดเข้าดูสถานะ/ทำต่อได้เหมือนเดิม',
    '🔒 ระบบแบบทดสอบออนไลน์: กันจอมือถือดับเองระหว่างทำข้อสอบ (Screen Wake Lock — รองรับ Android/iOS 16.4+) ลดเคสโดนนับ "ออกนอกหน้าสอบ" ผิดๆ จากจอล็อกอัตโนมัติสั้นๆ ของเครื่อง เพิ่มเกณฑ์ผ่อนผัน 2.5 วิ ก่อนนับว่าออกนอกหน้าสอบจริง (ถ้ากลับมาโฟกัสทันจะไม่นับ) เป็นตาข่ายสำรองสำหรับเครื่องที่ไม่รองรับ Wake Lock ด้วย'
  ],
  '10.22.207': [
    '👑 Smart Classroom: งานที่มอบหมายแก้ไข/อัปเดตได้แล้ว — กดปุ่ม "✏️ แก้ไข" ในหน้าติดตามงาน แก้ชื่อ/รายละเอียด/ไฟล์แนบ (ลบไฟล์เดิม+เพิ่มไฟล์ใหม่ได้)/คอลัมน์คะแนน/โหมดเขียนคะแนน/กำหนดส่ง/การหักคะแนนส่งช้าได้ทั้งหมด'
  ],
  '10.22.206': [
    '🐛 AZIZGAMES (ระบบกีฬาสีหลัก): แก้บั๊กครูผู้รับผิดชอบบางคนกดบันทึกไม่ได้ ขึ้น "new row violates row-level security policy" — สาเหตุคือถ้าเบราว์เซอร์ล็อกอิน ปพ.5 ออนไลน์ค้างไว้อยู่แล้ว ระบบ AZIZGAMES จะแอบหยิบ session ของครูคนนั้นมาใช้โดยไม่ได้ตั้งใจ (เพราะอยู่โดเมนเดียวกัน) ทำให้ไปเช็คสิทธิ์คนละแบบกับที่ออกแบบไว้ แก้แล้วให้ AZIZGAMES ไม่แตะ session ของ ปพ.5 เลย ไม่ว่าจะล็อกอินค้างไว้หรือไม่ก็ตาม'
  ],
  '10.22.205': [
    '👑 Smart Classroom: ตอนสั่งงานแล้วผูกกับคอลัมน์คะแนน เพิ่มตัวเลือก "ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร" — ทับคะแนนเก่า/เทียบเอาคะแนนสูงกว่า/บวกเพิ่มจากคะแนนเดิม ใช้หลักการเดียวกับระบบแบบทดสอบ (กันปัญหาบวกคะแนนซ้ำเวลาแก้ไขคะแนนงานเดิมด้วย)'
  ],
  '10.22.204': [
    '⏰ ใหม่! แจ้งเตือนใกล้ถึงคาบสอน — ระบบจะยิง push แจ้งเตือนไปหามือถือล่วงหน้า 5 นาทีก่อนคาบสอนแต่ละคาบเริ่ม (สำหรับครูผู้สนับสนุนโครงการระดับ 1 ขึ้นไปที่กดอนุญาตแจ้งเตือนไว้) ทำงานอัตโนมัติเบื้องหลังไม่ต้องตั้งค่าอะไรเพิ่ม'
  ],
  '10.22.203': [
    '👑 Smart Classroom: ปรับเนื้อหาป๊อบอัพหน้าอธิบายฟีเจอร์ให้เน้น "ทำไมต้องใช้" มากกว่าแค่รายการฟีเจอร์ — เพิ่มการ์ด 3 เหตุผลหลัก (ประหยัดเวลาไม่ต้องสลับหน้าจอ, นักเรียนไม่พลาดข่าวสารเพราะแจ้งเตือนถึงมือถือทันที, แผนการสอน+บันทึกหลังสอนเป็นระบบพร้อมตรวจสอบได้) ขึ้นก่อน ส่วนรายการฟีเจอร์เดิมย้ายไปเป็นหัวข้อรองด้านล่าง'
  ],
  '10.22.202': [
    '👑 Smart Classroom: แก้ป๊อบอัพหน้าอธิบายฟีเจอร์เด้งซ้ำทุกครั้งที่กดจากหน้าภาพรวม — รวมเป็นป๊อบอัพเดียว ครูระดับ 4+ ติ๊ก "ไม่ต้องโชว์อีก" ได้แล้วจะข้ามไปเปิดคลาสรูมที่กำลังสอนให้อัตโนมัติทุกครั้งถัดไป ส่วนครูที่ยังไม่ถึงระดับจะเห็นป๊อบอัพนี้ทุกครั้งพร้อมปุ่มไปหน้าสนับสนุนโครงการโดยตรง และอัปเดตรายการฟีเจอร์ในป๊อบอัพให้ตรงกับของจริงล่าสุด (กำหนดการสอน/แผนการสอน/บันทึกหลังสอน+เซ็นชื่อ/ประกาศแนบไฟล์+แจ้งเตือนมือถือ)'
  ],
  '10.22.201': [
    '🔗 AZIZGAMES: เพิ่มปุ่ม "เปิดลิงก์ลงทะเบียน (แท็บใหม่)" ในหน้าจัดการกรรมการภาคสนาม เพื่อเปิดหน้าลงทะเบียนสาธารณะให้กรรมการโดยไม่ต้องพิมพ์/แปะ URL เองแล้ว (เดิมต้องต่อ ?register=official ท้าย URL เอง พิมพ์ผิดง่ายจนเจอหน้า 404)'
  ],
  '10.22.200': [
    '🔍 AZIZGAMES: หน้าลงทะเบียนกรรมการภาคสนาม + หน้าอนุมัติของแอดมิน เพิ่มช่องพิมพ์ค้นหารายการกีฬา (มีเป็นร้อยรายการ เลื่อนหาเองไม่ไหว) ยังเลือกได้หลายรายการเหมือนเดิม พร้อมโชว์รายการที่เลือกไว้แล้วเป็นแถบสรุปแยกต่างหากเสมอ'
  ],
  '10.22.199': [
    '👑 Smart Classroom: เชื่อม Push Notification เข้ากับประกาศและงานที่มอบหมาย — ตอนนี้ครูส่งประกาศหรือสั่งงานใหม่จากคลาสรูมแล้ว นักเรียนในห้องจะได้รับแจ้งเตือนไปที่มือถือทันที (สำหรับคนที่กดอนุญาตแจ้งเตือนไว้แล้ว)'
  ],
  '10.22.198': [
    '🚨 แก้ด่วน AZIZGAMES: หน้าเว็บพังไม่ขึ้นข้อมูลอะไรเลยตั้งแต่เปิดเข้ามา (เกิดจากบั๊กที่หลุดไปกับการอัปเดตรอบก่อนหน้านี้ ตอนเพิ่มระบบจัดการเกณฑ์ประเมิน) แก้เรียบร้อยแล้ว ต้องขออภัยในความไม่สะดวกครับ'
  ],
  '10.22.197': [
    '🎽 AZIZGAMES (ระบบกีฬาสีหลัก): เพิ่มระบบบัญชี "กรรมการภาคสนาม" สำหรับบันทึกผลแข่งขันแต่ละรายการ (แยกจากกรรมการประเมินพาเหรด/เพจ/สีเดิม) เปิดลิงก์ลงทะเบียนสาธารณะให้กรรมการ (เช่นนักศึกษาที่มาช่วยวันงานจริง) กรอกชื่อ+เลือกรายการที่จะช่วยดูแลเองได้ล่วงหน้า แอดมินตรวจสอบ+อนุมัติแล้วระบบสร้างชื่อผู้ใช้/รหัสผ่านให้อัตโนมัติ เมื่อกรรมการล็อกอินจะเห็นเฉพาะรายการที่ตัวเองรับผิดชอบเท่านั้น (เดิมทุกคนที่มีรหัสแอดมินแก้ผลรายการไหนก็ได้หมด) พร้อมบันทึกชื่อผู้บันทึกจริงไว้ในผลการแข่งขันทุกครั้ง (เดิมสืบย้อนไม่ได้เลยว่าใครบันทึก)'
  ],
  '10.22.196': [
    '👑 Smart Classroom: ปุ่ม "➕ สร้างประกาศ" เปิดเป็นฟอร์มป๊อปอัพแทนฟอร์มค้างอยู่ในหน้า (การ์ดประกาศเหลือแค่ประวัติ+ปุ่มสร้าง กระชับขึ้น), ประเภทประกาศเปลี่ยนเป็นปุ่มเลือกด่วนแบบมีอิโมจิ+ชื่อไทย (ทั่วไป/การบ้าน/เอกสารประกอบ/กำหนดส่งงาน/แบบทดสอบ/คะแนน/กิจกรรม/ด่วน) พร้อมยังพิมพ์ประเภทใหม่เองได้อิสระเหมือนเดิม'
  ],
  '10.22.195': [
    '👑 Smart Classroom: แถบหัวข้อบนสุดแสดง "สัปดาห์ที่ X" + หัวข้อ/หน่วยที่กำลังสอนให้เห็นตลอด ไม่ต้องกดเข้าแท็บกำหนดการสอน, ฟอร์มส่งประกาศเพิ่มช่องแนบไฟล์/รูปภาพ (หลายไฟล์) และช่อง "ประเภทประกาศ" ที่พิมพ์กำหนดเองได้อิสระ (มีคำแนะนำจากประเภทที่เคยใช้)'
  ],
  '10.22.194': [
    '👑 Smart Classroom: การ์ดนักเรียนแสดง "เลขที่" ให้เห็นเลยไม่ต้องกดเข้าไปดู, เพิ่มช่อง "ไปที่เลขที่..." ในแผงข้อมูลนักเรียนเพื่อกระโดดไปคนอื่นได้ตรงๆ (นอกจากปุ่ม ‹ › เดิม), เพิ่มปุ่ม "🔀 เรียงตาม" ให้เรียงการ์ดนักเรียนตามเลขที่/ชื่อ/คะแนนรวมทั้งเทอม/คะแนนการมาเรียน/คะแนนรายคอลัมน์ได้'
  ],
  '10.22.193': [
    '👑 Smart Classroom: ปรับหน้าตาให้พรีเมี่ยมขึ้น — ย้าย "ตารางเรียน/คิวสอบ/กำหนดการสอน/แผนการสอน/งานที่มอบหมาย" จากการ์ดเรียงยาว 3 แถวมารวมเป็นแท็บเดียว ลดการเลื่อนจอระหว่างสอนสด พร้อมปรับปุ่ม/แท็บทั้งหน้าเป็นดีไซน์ทอง-น้ำเงินเข้มให้เข้ากับธีมมงกุฎ 👑'
  ],
  '10.22.192': [
    '🐛 AZIZGAMES (ระบบกีฬาสีหลัก): แก้บั๊กคะแนนกรรมการตัดสิน (ขบวนพาเหรด/เพจ/ประเมินสี) ไม่มีผลต่ออันดับ/คะแนนรวมของแต่ละสีเลย (view คำนวณจากตารางเก่าที่ไม่มีใครเขียนแทนที่จะอ่านจากคะแนนกรรมการจริง) แก้แล้วให้อันดับ/แถบคะแนนอัปเดตสดทันทีที่กรรมการกรอกคะแนน พร้อมเปิดให้แอดมินเพิ่ม/ลบ "รายการที่จะประเมิน" ในแต่ละหมวดแล้วบันทึกลงฐานข้อมูลจริง (เดิมกดเพิ่ม/ลบแล้วรีเฟรชหรือเปิดจากเครื่องอื่นจะหายไปเหมือนเดิม)'
  ],
  '10.22.191': [
    '🐛 ระบบควิซ: แก้บั๊กโหมด "บวกเพิ่มจากคะแนนเดิม" (score_write_mode=add) เมื่อควิซตั้งให้ทำได้หลายครั้ง+นับคะแนนสูงสุด (attempt_scoring_mode=highest) — เดิมระบบบวกคะแนนดิบของทุกครั้งที่ทำเข้าคอลัมน์คะแนน แทนที่จะบวกแค่คะแนนสูงสุดตามที่ตั้งไว้ ทำให้สอบ 2 ครั้งได้คะแนนบวกกันทั้งสองครั้ง แก้แล้วให้บวกแค่ส่วนต่างที่เพิ่มขึ้นจริงเท่านั้น พร้อมซ่อมคะแนนย้อนหลังของนักเรียนที่ได้รับผลกระทบจริงในฐานข้อมูลแล้ว'
  ],
  '10.22.190': [
    '👑 Smart Classroom: เพิ่มฟีเจอร์ใหม่ "📘 กำหนดการสอน" — กำหนดหัวข้อที่สอนแต่ละช่วงสัปดาห์ของรายวิชา (ใช้ร่วมกันทุกห้องที่สอนวิชานั้น) แสดงในคลาสรูมว่าสัปดาห์นี้สอนเรื่องอะไร นักเรียนก็เห็นข้อมูลนี้ในหน้าวิชาของตัวเองด้วย',
    '📝 Smart Classroom: เพิ่มฟีเจอร์ใหม่ "แผนการจัดการเรียนรู้" — ครูสร้างแผนการสอนหน้าเดียวได้ยืดหยุ่นตามจำนวนสัปดาห์ที่ต้องการ พร้อมบันทึกหลังสอนและเซ็นชื่อด้วยการวาดลายเซ็นบนหน้าจอ (ผูกกับห้องจริง+สัปดาห์จริงที่สอน)'
  ],
  '10.22.189': [
    '🐛 AZIZGAMES (ระบบกีฬาสีหลัก): แก้บั๊กหน้าตั้งค่า แก้ไข/ลบข้อมูลนักเรียน, ลงทะเบียนนักกีฬา, นักกีฬาดีเด่น ไม่บันทึกจริงทั้งหมด (อาการเดียวกับบั๊กลิงก์กติกาที่แก้ไปก่อนหน้า — ขึ้น "สำเร็จ" แต่รีเฟรชแล้วข้อมูลหาย/รายการที่ลบกลับมาเหมือนเดิม) ตรวจสอบครบทุกจุดตามที่ขอแล้วแก้ให้บันทึก/ลบลงฐานข้อมูลจริงทั้งหมด'
  ],
  '10.22.188': [
    '🐛 Smart Classroom: แก้บั๊กปุ่มเกี่ยวกับควิซทั้งหมด (เริ่ม/ดูสด/ปิดสอบ/สถิติ) และปุ่ม "กลับแล้ว" ใน Hall Pass กดแล้วไม่มีอะไรเกิดขึ้น — สาเหตุคือรหัสอ้างอิง (ควิซ, ใบอนุญาตออกห้อง) เป็นแบบ UUID ไม่ใช่ตัวเลข แต่โค้ดแปลงเป็นตัวเลขก่อนค้นหาโดยไม่ได้ตั้งใจ ทำให้หาไม่เจอเงียบๆ ไม่มีข้อความ error ให้เห็น'
  ],
  '10.22.187': [
    '🐛 AZIZGAMES (ระบบกีฬาสีหลัก): แก้บั๊กหน้าตั้งค่า แก้ไขข้อมูลกิจกรรมกีฬา (เช่นลิงก์กติกาการแข่งขัน) ขึ้น "บันทึกสำเร็จ" แต่รีเฟรชแล้วข้อมูลหาย — สาเหตุคือฟอร์มนี้ไม่เคยเขียนข้อมูลลงฐานข้อมูลจริงเลย (แก้แค่ในเครื่องชั่วคราว) แก้ให้บันทึกลงฐานข้อมูลจริงแล้ว',
    '📱 AZIZGAMES: ฟอร์มเพิ่ม/แก้ไขกิจกรรมการแข่งขัน (ทั้งหน้า Matches และหน้าตั้งค่า) เปิดจากมือถือแล้วเลื่อนจอไปกดปุ่มบันทึกไม่ได้ (เนื้อหายาวเกินจอ ล้นออกไปโดยเลื่อนดูไม่ได้เลย) แก้ให้เลื่อนดูภายในกล่องฟอร์มได้แล้ว'
  ],
  '10.22.186': [
    '👑 Smart Classroom: เพิ่มปุ่ม "📈 Dashboard วิเคราะห์ห้องนี้" ในการ์ดเครื่องมือห้องเรียน (ใช้ Dashboard วิเคราะห์ภาพรวมห้องเรียนตัวเดียวกับที่มีอยู่แล้ว)',
    '👑 Smart Classroom: รายการควิซแสดงครบทุกควิซของห้อง (เดิมโชว์แค่ 4 รายการ) เลื่อนดูได้ พร้อมปุ่ม "📊 สถิติ" สำหรับควิซที่กำลังสอบสด/ปิดสอบแล้ว เปิดดูประวัติ-สถิติการสอบแต่ละครั้งได้จากตรงนี้เลย'
  ],
  '10.22.185': [
    '🧠 หน้าสร้างแบบทดสอบที่ผูกกับคอลัมน์คะแนน เพิ่มตัวเลือก "ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร" — เทียบเอาคะแนนสูงกว่า (ค่าเริ่มต้นเดิม) / ทับคะแนนเก่า / บวกเพิ่มจากคะแนนเดิม (เหมาะกับคอลัมน์สะสมคะแนนจากหลายควิซ) แก้ที่ Postgres function ตรงจุดที่เขียนคะแนนเข้าสมุดคะแนนจริง ไม่ใช่แค่ฝั่งหน้าเว็บ'
  ],
  '10.22.184': [
    '👑 Smart Classroom: ตอนมีควิซกำลังสอบสดอยู่ การ์ดนักเรียนแต่ละคนขึ้นสถานะสอบให้เห็นเลย (⚪ยังไม่เข้าสอบ/📝กำลังทำ/✅ส่งแล้ว/🔒ถูกล็อก) อัปเดตอัตโนมัติทุก 4 วินาที',
    '👑 Smart Classroom: แผงข้อมูลนักเรียนแท็บ "ข้อมูล" เพิ่มสถานะสอบสด+ปุ่มปลดล็อกกรณีถูกล็อกจากการทำผิดกติกา (เลือกทำต่อจากจุดเดิม/เริ่มใหม่ทั้งชุด — ฟังก์ชันเดียวกับหน้าจัดการสอบสดแบบเต็ม) พร้อมปุ่มลัดเปิดหน้าจัดการสอบสดแบบเต็มได้เลย'
  ],
  '10.22.183': [
    '👑 หน้าภาพรวมของครู เพิ่มแบนเนอร์พรีเมียม "Smart Classroom" เด่นตา — ครูทุกคนเห็นได้ (ไม่ว่าจะมีสิทธิ์ใช้งานหรือไม่) คลิกแล้วเปิดหน้าอธิบายฟีเจอร์ (แอดมินแก้หัวข้อ/คำอธิบาย/รูปภาพประกอบได้ที่ตั้งค่า → แพ็กเกจ → Donation)',
    '👑 กด "เริ่มใช้งาน" แล้ว: คนที่โดเนทถึงระดับ 4+ จะเจอป๊อบอัพยืนยัน (มีช่องติ๊ก "ไม่ต้องโชว์ครั้งหน้า") ระบบจะตรวจตารางสอนแล้วเปิดห้องที่กำลังสอนอยู่ตอนนี้ให้อัตโนมัติ (หรือห้องถัดไปที่ใกล้ที่สุดถ้ายังไม่ถึงเวลา) ส่วนคนที่ยังไม่ถึงระดับ 4 จะเจอป๊อบอัพชวนสนับสนุนแทน'
  ],
  '10.22.182': [
    '👑 Smart Classroom: แผงข้อมูลนักเรียนเพิ่มปุ่ม ‹ › เลื่อนดูคนก่อนหน้า/ถัดไปได้โดยไม่ต้องปิดแล้วเปิดใหม่',
    '👑 Smart Classroom: นาฬิกาบนหัวจอเป็นของจริงแล้ว — ถ้าตรงกับคาบที่กำลังสอนอยู่ นับถอยหลังจนจบคาบแบบเรียลไทม์ ถ้ายังไม่ถึงเวลา ขึ้น "จะเริ่มสอนในอีก...วัน ชม. นาที วินาที" นับต่อเนื่องทุกวินาที',
    '👑 Smart Classroom: เพิ่ม 🗓️ตารางเรียนห้องนี้ (สลับรายวัน/รายสัปดาห์ได้), 📋คิวคำร้องขอสอบปรับ/สอบย้อนหลังเรียงใกล้→ไกล, และประกาศของห้องนี้แสดงรวมทุกแหล่ง (ทั้งที่ส่งจาก Smart Classroom และหน้าประกาศหลัก)'
  ],
  '10.22.181': [
    '📚 ระบบ "งานที่มอบหมาย" ใหม่ทั้งระบบ — ครูสั่งงานจาก Smart Classroom (แนบไฟล์/รูปได้หลายไฟล์, ผูกกับคอลัมน์คะแนนได้, ตั้งกำหนดส่ง+หักคะแนนกรณีส่งช้าได้ทั้งแบบคงที่/รายวัน) ติดตามภาพรวมส่งแล้ว/ยังไม่ส่งต่องาน ให้คะแนนพร้อมคำนวณหักคะแนนช้าให้อัตโนมัติ',
    '📚 ฝั่งนักเรียน: แท็บ "งาน" ในหน้ารายวิชา ดูงานที่ได้รับมอบหมาย ส่งไฟล์ได้หลายไฟล์ ส่งใหม่ทับของเดิมได้ พร้อมป้ายสถานะ ส่งแล้ว/ส่งช้า/ยังไม่ส่ง'
  ],
  '10.22.180': [
    '👑 Smart Classroom: เปิดแล้วเข้าโหมดเต็มจอ (ซ่อนเมนูข้าง+แถบบนชั่วคราว) ให้พื้นที่หน้าจอเต็มที่ระหว่างสอน กด "← กลับ" เพื่อคืนหน้าจอปกติ',
    '👑 Smart Classroom: เพิ่มปุ่ม "🔀 สลับห้อง" สลับไปห้องเรียนอื่นได้ทันทีโดยไม่ต้องออกจากโหมดเต็มจอก่อน'
  ],
  '10.22.179': [
    '👑 Smart Classroom: แท็บ "📝 คะแนน" ในแผงข้อมูลนักเรียนแก้ไขคะแนนได้เลยจากตรงนั้น (บันทึกจริงเข้าระบบทันที) พร้อมสรุปรวมคะแนน+เกรดประมาณ',
    '👑 Smart Classroom: แท็บ "✅ มาเรียน" เพิ่มแผนภูมิวงกลมสรุปสัดส่วนมา/ขาด/สาย/ลา/ป่วย'
  ],
  '10.22.178': [
    '📡 AZIZGAMES (ระบบกีฬาสีหลัก): ปุ่ม "บันทึกผลการแข่งขันอย่างเป็นทางการ" ของกรรมการตัดสิน (กีฬาบอล/จับเวลา-สะสมคะแนน/คะแนนกรรมการขบวนพาเหรด-เพจ-ประเมินสี) รองรับโหมดออฟไลน์แล้ว — เดิมเน็ตหลุดตอนกดบันทึกผลจะหายไปเลย ตอนนี้เข้าคิวเดียวกับคะแนนสด/เช็คอินที่ทำไว้อยู่แล้ว ซิงก์อัตโนมัติเมื่อเน็ตกลับมา (คะแนน+เหรียญ+การไหลเข้ารอบถัดไป ทำพร้อมกันตอน sync จริง)'
  ],
  '10.22.177': [
    '👑 Smart Classroom: ตัวเลือกคาบเช็คชื่อ (ตอนวันนี้ไม่ตรงตาราง) ไม่ตัดรายการเหลือแค่ 8 คาบสุดท้ายแล้ว — โชว์ครบทุกคาบ พร้อมเลื่อนไปโฟกัสคาบที่ใกล้วันนี้ที่สุดให้อัตโนมัติ',
    '👑 Smart Classroom: แผงข้อมูลนักเรียน (คลิกจากการ์ด) เพิ่ม 3 แท็บใหม่ — 📝 คะแนน (ทุกคอลัมน์คะแนนของห้องนี้), ✅ มาเรียน (สรุป+ประวัติเช็คชื่อ), 🚪 ประวัติออกห้อง (ทุกครั้งที่เคยขอออกนอกห้องในวิชานี้) นอกเหนือจากแท็บข้อมูล+ปุ่ม Hall Pass เดิม'
  ],
  '10.22.176': [
    '👑 Smart Classroom: ปุ่มเช็คชื่อเปลี่ยนจากพาไปหน้าเช็คชื่อเต็ม เป็นเด้งป๊อบอัพเช็คชื่อของ "คาบวันนี้" ให้อัตโนมัติเลย (ระหว่างสอนสดวันที่คือวันนี้อยู่แล้ว ไม่ต้องเลือกเอง) ถ้าวันนี้มีหลายคาบหรือไม่ตรงกับตารางสอน จะให้ครูเลือกคาบเองจากรายการแทน'
  ],
  '10.22.175': [
    '📡 แท็บเช็คชื่อ+ค่าบำรุงสี รองรับโหมดออฟไลน์แล้ว — ถ้าสแกน/บันทึกตอนไม่มีเน็ต (สัญญาณสนามกีฬาไม่เสถียร) จะบันทึกไว้ในเครื่องก่อนทันที (ป้าย ⏳ รอซิงก์) แล้วซิงก์อัตโนมัติขึ้นเซิร์ฟเวอร์เองเมื่อเชื่อมต่อเน็ตได้อีกครั้ง โดยไม่ทำรายการหายหรือซ้ำ (pattern เดียวกับที่ใช้ในระบบ AZFUTSAL)'
  ],
  '10.22.174': [
    '👑 เพิ่ม "Smart Classroom" — หน้าควบคุมขณะสอนสด เฉพาะผู้สนับสนุนระบบระดับ 4 ขึ้นไป เปิดจากปุ่มบนหน้ารายละเอียดห้องเรียน รวมเช็คชื่อ/Hall Pass (อนุญาตออกนอกห้องแบบสด)/จับเวลา/สุ่มรายชื่อ-จัดกลุ่ม/เปิดควิซสด/สแกน QR/ประกาศด่วนถึงห้อง ไว้จอเดียว โดยเรียกใช้ฟังก์ชันจริงของระบบเดิมทั้งหมด ไม่มีการสร้างระบบซ้ำซ้อน'
  ],
  '10.22.173': [
    '🐛 แก้บั๊กดรอปดาวน์เลือกรายการแข่งขัน (แท็บภาพกิจกรรม) บนมือถือ — เดิมเลื่อนดูตัวเลือกด้านล่างไม่ได้เพราะโค้ดสั่งปิดแถบตัวเลือกทันทีที่จอเลื่อน (ไม่ได้ตั้งใจ), ปุ่มกรองกลุ่มประเภทกีฬาเปลี่ยนจากขึ้นบรรทัดใหม่หลายแถวเป็นเลื่อนแนวนอนแถวเดียว ประหยัดพื้นที่ให้รายการด้านล่างเห็นได้มากขึ้น, ปรับความสูงแถบตัวเลือกให้พอดีกับพื้นที่ว่างจริงบนจอ'
  ],
  '10.22.172': [
    '📸 แท็บ "ภาพกิจกรรม" ปรับดรอปดาวน์เลือกรายการแข่งขันให้ค้นหาได้ + มีปุ่มกรองด่วนตามกลุ่มประเภทกีฬา (แทน select ธรรมดาที่ต้องเลื่อนหาเองในรายการยาวๆ) และเปลี่ยนมาแสดงเป็นการ์ดตามรายการที่เคยอัปโหลดแล้ว คลิกเข้าไปดู+อัปโหลดเพิ่มในรายการเดิมได้เลยไม่ต้องเลือกรายการซ้ำ'
  ],
  '10.22.171': [
    '🐛 หน้า "แกลเลอรี" ในระบบ AZIZGAMES หลัก เดิมแสดงรูป Unsplash ปลอมฮาร์ดโค้ดมาตลอด ไม่เคยต่อฐานข้อมูลจริง — แก้ให้ดึงรูปจริงจากตาราง sports_gallery_photos ที่สตาฟแต่ละสีอัปโหลด (เพิ่งเพิ่มในเวอร์ชันก่อนหน้า) แล้ว'
  ],
  '10.22.170': [
    '📸 เพิ่มระบบ "ภาพกิจกรรมกีฬาสี" (MVP) — สตาฟทุกสีอัปโหลดรูปกิจกรรม/บรรยากาศได้จากแท็บใหม่ในหน้าจัดการสีของฉัน (แยกตามรายการแข่งขัน), แกลเลอรีรวมทุกสีเปิดดูเต็มจอเรียงตามเวลาถ่ายจริง โชว์ผู้ถ่าย+สี+เวลา ดาวน์โหลดทีละรูปหรือดาวน์โหลดทั้งหมดเป็น zip ได้ — นักเรียนเข้าถึงได้จากปุ่มใหม่ในหน้ากีฬาสีของฉัน (ฟีเจอร์ค้นหารูปด้วยสแกนหน้ายังไม่ทำในเฟสนี้ตามที่ตกลงกัน)'
  ],
  '10.22.169': [
    '📷 แท็บ "เช็คชื่อ" ในหน้าจัดการสีของฉัน เพิ่มป๊อบอัพยืนยันเต็มจอตอนเช็คชื่อสำเร็จ (แบบเดียวกับค่าบำรุงสี) หายเองใน 2 วินาที (ไวกว่าค่าบำรุงเพราะเช็คชื่อสแกนถี่กว่าตอนเข้าแถว) หรือกดปุ่ม "สแกนคนถัดไป" ปิดได้ทันที'
  ],
  '10.22.168': [
    '💰 แท็บ "ค่าบำรุงสี" ในหน้าจัดการสีของฉัน สแกน/รับเงินสำเร็จตอนนี้เด้งป๊อบอัพเต็มจอยืนยันชัดเจน (รูป+ชื่อ+จำนวนเงิน) หายเองใน 5 วินาที หรือกดปุ่ม "สแกนคนถัดไป" ปิดได้ทันที'
  ],
  '10.22.167': [
    '🔔 ขยายระบบแจ้งเตือน Push ให้ฝั่งนักเรียนด้วย — เพิ่มปุ่ม "เปิดการแจ้งเตือน" ในหน้านักเรียน (เดิมมีเฉพาะฝั่งครู) และเพิ่มจุดยิงแจ้งเตือนจริงเมื่อครูอนุมัติ/ปฏิเสธคำร้องขอสอบ (แจ้งเฉพาะนักเรียนคนนั้น)',
    '🔐 ปรับสิทธิ์ Edge Function ส่ง Push ให้ครูทั่วไปยิงแจ้งเตือนหานักเรียนในวิชาที่ตัวเองสอนได้ (เดิมยิงได้เฉพาะแอดมิน) มีเช็คความเป็นเจ้าของห้อง/วิชาจริงฝั่งเซิร์ฟเวอร์ ไม่เชื่อข้อมูลจาก client',
    '🐛 แก้บั๊กหน้า "คำร้องนักเรียน" (ครู) ปุ่มอนุมัติ/ปฏิเสธคำร้องขอสอบใช้งานไม่ได้จริง เพราะลืม import ฟังก์ชัน reviewExamRequest'
  ],
  '10.22.166': [
    '💰 หน้ากีฬาสีของฉัน (นักเรียน) เพิ่มการ์ด "ค่าบำรุงสี" แยกต่างหาก แสดงสถานะจ่ายแล้ว/ยังไม่จ่ายตลอดเวลา (ไม่ผูกกับเงื่อนไขเกียรติบัตรอีกต่อไป) พร้อมวันที่-เวลาที่ชำระและชื่อผู้รับชำระ',
    '🐛 แก้บั๊กหน้า "จัดการทีมสีของฉัน" ขึ้นข้อความ "ยังไม่ได้ติดตั้งส่วนขยายระบบกีฬาสี" ผิดพลาด (สาเหตุ: ลืมส่งตัวแปร canDues/duesPayments เข้าไปในฟังก์ชันแสดงผลแท็บตอนเพิ่มระบบค่าบำรุงสีในเวอร์ชันนี้)'
  ],
  '10.22.165': [
    '💰 เพิ่มระบบ "ค่าบำรุงสี" ในหน้าจัดการสีของฉัน — แท็บใหม่สแกน QR/กรอกรหัสเก็บเงินสด (คนละ 30 บาท ตั้งค่าจำนวนได้ที่หน้าแอดมิน), ป้ายเขียว/แดงบนการ์ดสมาชิกบอกสถานะจ่ายแล้ว/ยังไม่จ่าย, หน้าสรุปมอนิเตอร์ใหม่ "ข้อมูลค่าบำรุงสี" (เหมือนหน้าเช็คชื่อ), และการ์ด "เกียรติบัตรกีฬาสี" ในหน้ากีฬาสีของฉันของนักเรียน — ปลดล็อกเมื่อเช็คชื่อครบเกณฑ์% (แอดมินตั้งค่าเริ่มต้น พ่อสี/แม่สีปรับเฉพาะสีตัวเองได้) + จ่ายค่าบำรุงแล้ว + รายงานตัวนักกีฬาครบทุกครั้ง (ถ้าเป็นนักกีฬา)'
  ],
  '10.22.164': [
    '🎨 นักเรียนกดปุ่ม "เปิดระบบกีฬาสีแบบเต็ม" ในหน้ากีฬาสีของฉันตอนนี้จะมีป๊อบอัพให้เลือกว่าจะเข้า "ระบบกีฬาสีหลัก" (ภาพรวมทุกสี) หรือ "สีของฉัน" (หน้าตาเหมือนที่ครู/สต๊าฟใช้ แต่ดูอย่างเดียว เห็นเฉพาะสีตัวเอง) — ตัดแท็บเช็คชื่อ/สิทธิ์ประจำสี/ไซซ์เสื้อ/งาน-ประกาศ/อัตลักษณ์ ออกเพราะเป็นเครื่องมือจัดการที่ไม่เหมาะให้นักเรียนทั่วไปใช้หรือข้อมูลจะไม่ครบเนื่องจากสิทธิ์การเข้าถึง'
  ],
  '10.22.163': [
    '📱 หน้า "จัดการทีมสีของฉัน" บนมือถือ เปลี่ยนแถบเมนู 10 ปุ่มด้านบนเป็นแถบเมนูด้านล่างแบบจัดกลุ่ม 4 กลุ่ม (ภาพรวม/ทีม/กิจกรรม/ผลงาน) กดกลุ่มไหนปุ่มด้านล่างจะเปลี่ยนเป็นแท็บย่อยของกลุ่มนั้น พร้อมปุ่มกลับ — บนคอมพิวเตอร์ยังใช้แถบเดิมด้านบนเหมือนเดิม และเอาคำอธิบายบทบาทซ้ำออกจากหัวข้อหน้าแล้ว'
  ],
  '10.22.162': [
    '🐛 หน้า "ข้อมูลเช็คชื่อกีฬาสี" แก้บั๊กรูปนักเรียนในเอกสารพิมพ์ไม่ขึ้น (สาเหตุ: ใส่ loading="lazy" ในรูปที่อยู่ในส่วนที่ซ่อนไว้จนกว่าจะสั่งพิมพ์ ทำให้ browser ไม่โหลดรูปเลย)'
  ],
  '10.22.161': [
    '🖼️ หน้า "ข้อมูลเช็คชื่อกีฬาสี" เพิ่มรูปนักเรียน (ขอบมนแนวตั้ง) ในรายการที่แสดงบนหน้าจอ (แยกตามห้อง) ให้เหมือนกับในเอกสารพิมพ์แล้ว'
  ],
  '10.22.160': [
    '🖼️ หน้า "ข้อมูลเช็คชื่อกีฬาสี" เพิ่มรูปนักเรียน (ขอบมนแนวตั้ง) หน้าชื่อ-สกุลในเอกสารพิมพ์ทั้งสองโหมด, ปรับความกว้างคอลัมน์ห้องเรียนให้ไม่ถูกชื่อนักเรียนแย่งพื้นที่จนแคบเกินไป, และโหมด "พิมพ์ทุกวัน" เปลี่ยนจากคอลัมน์ "ขาดวันที่" รวมข้อความเป็นแยกคอลัมน์ตามวันชัดเจน แสดง ✓/✗ ตรงตามวันนั้นๆ (รวมถึงไฟล์ CSV ที่ส่งออกด้วย)'
  ],
  '10.22.159': [
    '📋 หน้า "ข้อมูลเช็คชื่อกีฬาสี" ปรับโหมด "พิมพ์ทุกวัน" ให้สร้างเอกสารครั้งเดียวต่อชั้น (ไม่ซ้ำตามจำนวนวันแบบเดิม) เพิ่มคอลัมน์ "ขาดวันที่" ระบุว่านักเรียนแต่ละคนขาดวันไหนบ้าง พร้อมปรับคอลัมน์ห้องเรียนให้ไม่ขึ้นบรรทัดใหม่'
  ],
  '10.22.158': [
    '🖨️ หน้า "ข้อมูลเช็คชื่อกีฬาสี" แก้บั๊กวันที่คลาดเคลื่อนในเอกสารพิมพ์ (เดิมอาจเพี้ยนไป 1 วันช่วงเช้ามืด), เพิ่มเลขที่ลำดับ+คอลัมน์ห้องเรียนในตาราง (รวมเป็นตารางเดียวต่อชั้น เรียงตามห้อง), และเพิ่มตัวเลือกพิมพ์/บันทึกไฟล์แบบ "เฉพาะวันที่เลือก" หรือ "ทุกวัน" (รวมทั้งเข้าสีทุกครั้งและวันจริงทุกวัน) ในครั้งเดียว'
  ],
  '10.22.157': [
    '🔓 ปุ่ม "ข้อมูลเช็คชื่อกีฬาสี" ในหน้าแดชบอร์ดภาพรวม AZIZGAMES ตอนนี้เห็นได้ทุกคน ไม่ต้องล็อกอินแอดมินก่อน (หน้าที่ลิงก์ไปมีรหัสผ่านป้องกันของตัวเองอยู่แล้ว)'
  ],
  '10.22.156': [
    '🖨️ หน้า "ข้อมูลเช็คชื่อกีฬาสี" ปรับเอกสารพิมพ์ให้แยกเป็นชั้นๆ ขึ้นหน้าใหม่ทุกชั้น พร้อมโลโก้ 3 อัน + สถิติ (ทั้งหมด/มาแล้ว/ขาด/%) ของแต่ละชั้นเหนือตาราง และเพิ่มปุ่มลิงก์เข้าหน้านี้ในระบบกีฬาสีหลัก (AZIZGAMES) หน้าแดชบอร์ดภาพรวม สำหรับผู้ดูแลระบบ'
  ],
  '10.22.155': [
    '↩️ หน้า "เช็คชื่อ" ในจัดการสีของฉัน เพิ่มปุ่ม "ยกเลิก" ต่อรายการในลิสต์สแกนล่าสุด — สแกนผิดคนแก้ไขได้ทันทีในหน้านี้เลย (ลบออกจากระบบจริง) ไม่ต้องไปแก้ที่อื่น ให้ตรงกับหน้าเช็คชื่อวิชาปกติที่มีปุ่มนี้อยู่แล้ว'
  ],
  '10.22.154': [
    '📋 เพิ่มหน้าใหม่ "ข้อมูลเช็คชื่อกีฬาสี" (sports-attendance-monitor.html) สำหรับฝ่ายที่รับผิดชอบดูภาพรวมทุกสีรวมกัน ต้องใส่รหัสผ่านก่อนเข้าดู — มีแถบสลับชาย/หญิง เลือกดูรายวัน (เข้าสีครั้งที่ 1-3/กีฬาสีแต่ละวัน) แสดงรายชื่อนักเรียนที่ขาดเช็คชื่อแยกตามห้องเรียนสามัญ พร้อมส่งออก CSV และพิมพ์เอกสารได้'
  ],
  '10.22.153': [
    '📅 AZIZGAMES: หน้า "เช็คชื่อ" ในจัดการสีของฉัน อ่านวันที่ "เข้าสีครั้งที่ N"/"กีฬาสี" จากปฏิทินปฏิบัติงานที่ตั้งไว้แล้วอัตโนมัติ — เปิดหน้าวันไหนตรงกับปฏิทิน ระบบตั้งประเภทเช็คชื่อ (เข้าค่ายสี/วันงานจริง) ให้เองพร้อมบอกว่าเป็นวันที่เท่าไหร่ ไม่ต้องเดา/สลับปุ่มเองทุกครั้ง (ยังสลับมือทับได้ถ้าปฏิทินผิดหรือทดสอบระบบ)'
  ],
  '10.22.152': [
    '⚙️ หน้า "คะแนนอ่านคิดวิเคราะห์" (แอดมิน) เพิ่มส่วน "🎯 เกณฑ์การประเมิน" ให้แก้ไขช่วงคะแนน+ชื่อระดับทั้ง 4 ระดับได้เองโดยไม่ต้องแก้โค้ด (เดิม hardcode ในโค้ด 4 จุดแยกกัน) เกณฑ์ใหม่จะมีผลทันทีกับหน้าครูกรอกคะแนน, หน้านักเรียนดูผล, หน้าแอดมิน และเอกสาร ปพ.5 พร้อมกันทุกจุด'
  ],
  '10.22.151': [
    '📖 ปรับเกณฑ์ระดับ "คะแนนอ่านคิดวิเคราะห์และเขียน" ให้ตรงตามเกณฑ์การประเมิน 4 ระดับที่โรงเรียนใช้จริง — ดีเยี่ยม 70-100, ดี 60-69, ผ่าน 50-59, ไม่ผ่าน 0-49 (เดิมใช้ 80/65/50 และป้ายกำกับไม่ตรงกันระหว่างหน้าครู/นักเรียน/แอดมิน/เอกสาร ปพ.5 — แก้ให้ตรงกันทุกจุดแล้ว)'
  ],
  '10.22.150': [
    '🏃 AZIZGAMES: หน้า "แก้ไขกิจกรรมการแข่งขัน" เพิ่มช่อง "วิธีการแข่งขัน" ให้ครูเลือกเองอิสระ (ปะทะแบบผัง/จับเวลา/ให้คะแนน) ไม่ผูกกับประเภทกีฬาอีกต่อไป — แก้บั๊กกรีฑาถูกจัดเป็นกีฬาปะทะแบบผังทั้งที่ควรจับเวลา พร้อมเพิ่มรอบคัดเลือก→รอบชิงสำหรับกีฬาจับเวลา/ให้คะแนน (ครูตั้งจำนวนที่เข้ารอบชิงเอง), นาฬิกาหยุดอัตโนมัติเมื่อทุกคนถึงเส้นชัยครบ, ตารางอันดับสดพร้อมสถานะเข้ารอบ, และเลือกนักกีฬาดีเด่นหลังตัดเหรียญ'
  ],
  '10.22.149': [
    '🔧 แก้ปุ่ม "ดึงจากเช็คชื่อ" (10.22.148) ไม่โผล่ในหน้า "จัดการคอลัมน์" จริง — ของเดิมใส่ไว้ผิดไฟล์ (คนละโมดัลกับที่หน้าบันทึกคะแนนเปิดใช้จริง) ย้ายมาใส่ในป็อปอัป "⚙️ จัดการคอลัมน์" ที่กดจากหน้าบันทึกคะแนนแล้ว'
  ],
  '10.22.148': [
    '🔄 หน้า "คอลัมน์คะแนน" ของครู เพิ่มปุ่ม "ดึงจากเช็คชื่อ" ให้คอลัมน์คะแนนแบบปกติ (regular) — เปิดใช้งานครั้งเดียว ระบบจะคำนวณ %มาเรียนจากการเช็คชื่อใส่ให้อัตโนมัติทุกครั้งที่เปิดหน้าบันทึกคะแนน (เดิมมีเฉพาะกลุ่มวิชาศาสนา) คอลัมน์ไหนที่ครูเคยแก้คะแนนคนไหนด้วยมือไว้ จะไม่ถูกทับ'
  ],
  '10.22.147': [
    '🔍 หน้า "มอบหมายผู้ดูแลประจำสี" เพิ่มตัวกรองตรวจสอบรายชื่อผู้ได้รับสิทธิ์ — กรองตามสี, กรองตามบทบาท, และช่องค้นหาชื่อ/รหัสครู/รหัสนักเรียน พร้อมแสดงจำนวนที่กรองได้เทียบกับทั้งหมด'
  ],
  '10.22.146': [
    '🏅 AZIZGAMES: เพิ่มรายละเอียดเหรียญแยกตามรายการแข่งขัน — หน้า "จัดการสีของฉัน" แท็บ "อันดับเหรียญ → เฉพาะสีของฉัน" และหน้าสรุปเหรียญของระบบกีฬาสีหลัก (MedalPodium) ตอนนี้ดูได้แล้วว่าแต่ละเหรียญได้จากรายการกีฬาไหนบ้าง (เดิมมีแค่ยอดรวม/หรือเป็นข้อมูลตัวอย่างที่ไม่ใช่ของจริง)'
  ],
  '10.22.145': [
    '🎨 AZIZGAMES: แก้เมนู "ผู้ดูแลระบบ" มุมขวาบนของแอดมิน เดิมคลิกแล้วเมนูโดนกรอบ header บังจนมองไม่เห็นตัวเลือก (⚙️ ตั้งค่าระบบ / ออกจากระบบ) ตอนนี้เมนูลอยแสดงถูกต้องแล้ว'
  ],
  '10.22.144': [
    '🏅 หน้า "จัดการสีของฉัน" แท็บ "คะแนนรวม → เฉพาะสีของฉัน" เพิ่มแถบความคืบหน้า (progress bar) แต่ละหมวด (พาเหรด/วิชาการ/กีฬา/หน้าเว็บเพจ/ประเมินสี) พร้อมรายการคะแนนสะสมวิชาการ+กีฬาในรายละเอียดคะแนน — หน้าตาตรงกับหน้าสรุปคะแนนในระบบกีฬาสีหลัก (AZIZGAMES) เป๊ะๆ ไม่ว่าจะเปิดดูจากที่ไหนก็เห็นเหมือนกัน'
  ],
  '10.22.143': [
    '📋 AZIZGAMES: ย้ายระบบให้คะแนนพาเหรด/หน้าเว็บเพจ/ประเมินสี จาก localStorage เบราว์เซอร์กรรมการ (ไม่เคยซิงค์กันเลย) มาเป็น Supabase จริง — กรรมการหลายคนหลายเครื่องเห็นข้อมูลตรงกันแล้ว พร้อมเพิ่มรายละเอียดคะแนนแยกเกณฑ์ในหน้า "จัดการสีของฉัน" แท็บ "คะแนนรวม → เฉพาะสีของฉัน" ให้แต่ละสีตรวจสอบได้ **ต้องรัน patch_score_evaluation.sql (ที่ AZIZGAMES repo) ก่อนใช้งานได้จริง — คะแนนเดิมในเบราว์เซอร์จะไม่ถูกย้ายมาอัตโนมัติ (เป็นข้อมูลตัวอย่างเดิม ไม่ใช่คะแนนจริง) กรรมการต้องกรอกคะแนนใหม่ในระบบนี้**'
  ],
  '10.22.142': [
    '🏅 หน้า "จัดการสีของฉัน" แท็บ "คะแนน/เหรียญ" แยกเป็น 2 แท็บใหญ่ชัดเจน — "คะแนนรวม" (ขบวนพาเหรด/วิชาการ/กีฬา/หน้าบ้าน-สแตนด์) กับ "อันดับเหรียญ" (ทอง/เงิน/ทองแดง) เพราะเป็นคนละส่วนกันจริงๆ ไม่ปนกันในตารางเดียวแบบเดิม แต่ละแท็บใหญ่มีแท็บย่อย "รวมทุกสีเพศเดียวกัน" ⇄ "เฉพาะสีของฉัน" เหมือนเดิม'
  ],
  '10.22.141': [
    '🏅 หน้า "จัดการสีของฉัน" แท็บ "คะแนน/เหรียญ" แก้บั๊กสำคัญ — เดิมจัดอันดับปนกันทั้ง 8 สี (ชาย+หญิง) ทั้งที่ระบบแข่งแยกเพศเด็ดขาด ตอนนี้เทียบอันดับเฉพาะสีเพศเดียวกัน (4 สี) เท่านั้น พร้อมเพิ่มแถบสลับ "รวมทุกสีเพศเดียวกัน" ⇄ "เฉพาะสีของฉัน" (ดูคะแนนแยกหมวดของสีตัวเองเพิ่มเติม)'
  ],
  '10.22.140': [
    '📷 หน้า "จัดการสีของฉัน" เพิ่มแท็บ "เช็คชื่อ" — พ่อสี/แม่สี ครูประจำสี หรือนักเรียนสต๊าฟที่ได้รับมอบสิทธิ์ สแกน QR ประจำตัวนักเรียนเช็คชื่อเข้าค่ายสี/วันงานจริงได้ (มีช่องกรอกรหัสมือด้วย เผื่อไม่ได้พก QR) พร้อมสร้างรายงานสรุปคนขาดเช็คชื่อส่งออกเป็น CSV ให้ครูกิจการนักเรียนหักคะแนนนอกระบบ — **ต้องรัน patch_sports_attendance.sql ใน Supabase SQL Editor ก่อนใช้งานได้จริง**'
  ],
  '10.22.139': [
    '🗓️ หน้า "จัดการสีของฉัน" แท็บ "ตาราง/ผล" — เพิ่มแถบสลับ "ตารางการแข่งขัน" ⇄ "ผลการแข่งขัน" ไม่โชว์รายการทั้งหมดตั้งแต่แรก ต้องกด "วันนี้" หรือเลือกรายการแข่งขันก่อนถึงจะเห็น — เลือกรายการแล้วเห็นครบทุกรอบตั้งแต่ต้นจนถึงรอบสุดท้ายเหมือนระบบกีฬาสีหลัก'
  ],
  '10.22.138': [
    '📋 เพิ่มปุ่ม "ทำสำเนา" ที่การ์ดรายวิชา — สำหรับกรณีวิชาเดียวกัน (เช่น ภาษามลายู) แต่สอนคนละโปรแกรม/ระดับชั้น (PR/อก./อป.) ทำสำเนาแล้วดึงคำอธิบายรายวิชา (หน้า 2 ของ ปพ.5) จากคอร์สต้นฉบับมาให้อัตโนมัติ แก้ไขกลุ่มวิชา/กลุ่มสาระ/ชั้นปีให้ตรงกับโปรแกรมใหม่ได้เลยโดยไม่กระทบคอร์สต้นฉบับ'
  ],
  '10.22.137': [
    '🎨 หน้า "จัดการสีของฉัน" — แท็บ "ตาราง/ผล" เปลี่ยนจากรายการบรรทัดเดียวเป็นการ์ดคู่แข่งขันแบบเดียวกับ AZIZGAMES หลัก (โลโก้ทีมสองฝั่ง + VS + สกอร์ เน้นสีของทีมตัวเอง) และแท็บ "ภาพรวม" เปลี่ยนตัวเลขสรุปจากตัวเลขเปล่าในกล่องเดียวเป็นการ์ดแยก 2 คอลัมน์บนมือถือ กดแล้วเด้งไปหน้าที่เกี่ยวข้องได้ทันที เหมือนแดชบอร์ดหลักของ AZIZGAMES'
  ],
  '10.22.136': [
    '🎨 หน้า "จัดการสีของฉัน" รีสกินให้เหมือน AZIZGAMES จริงจัง — ใช้ glassmorphism (โปร่งแสง+เบลอฉากหลัง), แสงไล่สีพื้นหลังแบบเดียวกัน, ฟอนต์ Prompt เดียวกัน และไอคอนกีฬาชุดเดียวกัน 43 แบบขึ้นในตารางนักกีฬา/ตารางแข่งขัน เพื่อให้ครูประจำสีรู้สึกว่าเป็นระบบเดียวกันกับ AZIZGAMES หลัก เพียงแต่เห็นเฉพาะข้อมูลสีของตัวเอง'
  ],
  '10.22.135': [
    '🎨 หน้า "จัดการสีของฉัน" (พ่อสี/แม่สี) ปรับโหมดสว่างให้ไม่โล่งเปล่า เพิ่มเงา/คอนทราสต์ให้การ์ดและตารางอ่านง่ายขึ้นทั้งจอมือถือ พร้อมเปลี่ยนสถานะการแข่งขัน (pending/live/done) จากข้อความดิบเป็นป้ายสีไทยที่อ่านง่าย (รอแข่ง/กำลังแข่ง/เสร็จสิ้น) เหมือนหน้าบันทึกผลหลักของ AZIZGAMES'
  ],
  '10.22.134': [
    '🎨 AZIZGAMES: ใส่ไอคอนกีฬาจริงครบ 43 แบบ (สไตล์มลายู-มุสลิม ที่ออกแบบร่วมกันไว้) แทนอิโมจิเดิม ครอบคลุมทุกรายการแข่งขัน 96+ รายการ (แยกตามเพศ ใช้ร่วมกันได้ทุกรุ่นอายุ) ขึ้นแสดงในตัวเลือกกีฬา/การ์ดคู่แข่งขัน/หน้าจัดการระบบทุกจุด'
  ],
  '10.22.133': [
    '🔍 AZIZGAMES: แก้บั๊กตัวเลือกกีฬาแบบพิมพ์ค้นหา — ในบางหน้า (เช่น ฟอร์มลงทะเบียนนักกีฬา) พิมพ์ค้นหาแล้วไม่เห็นตัวเลือกเลยทั้งที่มีจริง เพราะกรอบผลลัพธ์โดนขอบของหน้าต่างป๊อบอัพตัดบัง แก้ให้แสดงผลลัพธ์ลอยเหนือทุกอย่างเสมอแล้ว'
  ],
  '10.22.132': [
    '🔒 AZIZGAMES: แก้บั๊กสำคัญ — นัดที่บันทึกผลอย่างเป็นทางการแล้ว (ทุกกีฬา ไม่ใช่แค่เปตอง) เคยกลับเข้าไปกรอกคะแนนเพิ่มซ้ำได้อีก ทำให้บันทึกผลซ้ำเป็นอีกรายการทับผังทัวร์นาเมนต์/เหรียญที่ตัดไปแล้ว ตอนนี้ปิดล็อกแล้ว นัดที่เสร็จสิ้นแล้วจะแก้ไขไม่ได้อีก เหมือนกีฬาบอล'
  ],
  '10.22.131': [
    '🥎 AZIZGAMES: เพิ่มทางเลือกแข่งเปตองแบบ Best-of หลายเกม — มาตรฐานสากลเดิม (ถึงเป้าแต้มเกมเดียวจบ) ยังเป็นค่าเริ่มต้น แต่กรรมการเลือกได้เองว่าจะให้รอบนั้นแข่งกี่เกมตัดสิน (เช่น Best of 3/5 เกม) เหมาะกับรอบชิงที่อยากให้เข้มข้นขึ้น'
  ],
  '10.22.130': [
    '🔍 AZIZGAMES: เพิ่มช่องพิมพ์ค้นหาในตัวเลือกกีฬา/คู่แข่งขันทุกจุดที่มีรายการยาว (หน้าบันทึกผล, ลงทะเบียนนักกีฬา, ตั้งค่าระบบ, จอแสดงผลรายงานตัวสด) แทนการเลื่อนหาในลิสต์ยาวๆ เอง พร้อมเพิ่มช่องกรอกตัวเลขเองในการตั้งค่าเซต/ยก/แต้มเปตอง (Best-of, คะแนนเป้าหมาย, นำห่างกี่แต้ม) เผื่อกรรมการต้องการค่าที่ไม่ตรงกับตัวเลือกสำเร็จรูป'
  ],
  '10.22.129': [
    '🥎 AZIZGAMES: แก้เปตองให้ตรงตามที่ออกแบบไว้ (สะสมถึงเป้า แต้มต่อเอนด์ ไม่ใช่กรอกคะแนนมือแบบเดิม) — ตั้งค่าแข่งถึงกี่แต้มก่อนเริ่ม แล้วกรรมการแตะแค่ตัวเลขแต้ม 1-6 ที่ทีมได้ในแต่ละเอนด์ (อีกทีมไม่ได้แต้มอัตโนมัติ) สะสมถึงเป้าจบทันที พร้อมปรับกีฬาแบบแพ้ชนะทีละยก/เกม (งัดข้อ ชักเย่อ หมากกระดาน E-sport) ให้มีปุ่ม "ย้อนยกล่าสุด" กันกดผิด แทนตัวเลือกเสมอเดิม'
  ],
  '10.22.128': [
    '🏐 AZIZGAMES: เพิ่มระบบบันทึกผลกีฬาแบบเซต (วอลเลย์บอล เซปักตะกร้อ แบดมินตัน เทเบิลเทนนิส) และแบบแพ้ชนะทีละยก (งัดข้อ ชักเย่อ หมากกระดาน E-sport ROV) — กีฬาแบบเซตตั้งค่า Best-of/คะแนนเป้าหมาย/นำห่างกี่แต้มได้เอง กดปุ่ม +1 ใหญ่สีเดียวกับทีมนั้นให้แต้มสด จบเซตแล้วบันทึกประวัติอัตโนมัติ กีฬาแบบแพ้ชนะทีละยกกดปุ่มเดียว "ทีมไหนชนะยกนี้" ครบ Best-of ระบบตัดเหรียญ/เดินผังทัวร์นาเมนต์ให้ทันที'
  ],
  '10.22.127': [
    '🏃 AZIZGAMES: กีฬาจับเวลา/สะสมคะแนน ปรับให้บันทึกผลแยกรายบุคคลแล้ว (เดิมบันทึกได้แค่ระดับสี) — ถ้าสีหนึ่งส่งนักกีฬาหลายคนแข่งรายการเดียวกัน (เช่น วิ่งสี) แต่ละคนมีสถิติของตัวเอง ระบบจะใช้ผลที่ดีที่สุดของแต่ละสีตัดสินอันดับทีมให้อัตโนมัติ'
  ],
  '10.22.126': [
    '🏁 AZIZGAMES: เพิ่มนาฬิกาจับเวลาสดในหน้าบันทึกผลกีฬาจับเวลา — กดเริ่มจับเวลาแล้วคลิกที่การ์ดสีที่ถึงเส้นชัยได้เลย ระบบจดเวลาให้ทันที ไม่ต้องพิมพ์เอง (ยังพิมพ์เองได้ตามปกติถ้าต้องการ)'
  ],
  '10.22.125': [
    '🕌 ปรับคะแนนสถานะ "อูโซร" ในการเช็คละหมาดให้เท่ากับ "ละหมาด" (เต็ม 2 คะแนน/วัน แทนที่จะได้ครึ่งเดียวเหมือนเดิม) เพราะเป็นเหตุผลอันควรที่ไม่ได้ตั้งใจขาดละหมาด ปรับทั้งหน้าคะแนนนักเรียน หน้าครูบันทึกเช็คชื่อ หน้าแอดมิน และเอกสาร ปพ.5 ให้ตรงกันหมด'
  ],
  '10.22.124': [
    '⏱️ AZIZGAMES: เพิ่มระบบบันทึกผลกีฬาจับเวลา/สะสมคะแนน (กรีฑา ว่ายน้ำ ยิงธนู วิ่งกระสอบ สะแต๊ะ ฯลฯ 38 รายการ) — เดิมกีฬากลุ่มนี้ถูกดันเข้าหน้าผังแข่งขันแบบทีมปะทะทีมผิดจุด หรือใช้หน้ากรอกเหรียญที่ไม่เคยเขียนลงฐานข้อมูลจริงเลย ตอนนี้กรอกเวลา/คะแนนแยกตามสีได้ตรงๆ เห็นอันดับพรีวิวสดขณะพิมพ์ กดปุ่มเดียวตัดเหรียญทอง-เงิน-ทองแดงอัตโนมัติ'
  ],
  '10.22.123': [
    '🗂️ เพิ่มหน้า "ประวัติการสแกนของฉัน" สำหรับสภานักเรียน/แกนนำที่มีสิทธิ์สแกนละหมาด — ดูย้อนหลังว่าแต่ละวันสแกนให้ใครไว้บ้าง เลือกวันที่ดู ค้นหาด้วยรหัสนักเรียนหรือเปิดกล้องสแกน QR ค้นหา ถ้าตรวจสอบแล้วพบว่าข้อมูลหายจริงสามารถบันทึกซ้ำได้ทันที หรือถ้าไม่มั่นใจกดส่งเรื่องต่อแอดมินผ่านระบบ Feedback พร้อมข้อมูลนักเรียนครบถ้วน'
  ],
  '10.22.122': [
    '🕌 ปรับบั๊กสแกน QR เช็คละหมาดต่อจากเวอร์ชันก่อน: ถ้าครูมาร์ก "ขาดละหมาด" ไว้ล่วงหน้าทั้งสัปดาห์ (เพื่อไม่ต้องกลับมาติ๊กขาดทีหลัง) ตอนนี้การสแกนจริงของนักเรียนจะทับสถานะ "ขาด" นั้นได้ตามปกติแล้ว (เดิมจะถูกข้ามไปเฉยๆ ยังค้างสถานะขาด) ส่วนถ้าครูมาร์กสถานะอื่นไว้เอง (เช่น อุปสรรค/ไม่นับ) ยังคงไม่ถูกทับเหมือนเดิม'
  ],
  '10.22.121': [
    '🕌 แก้บั๊กสแกน QR เช็คละหมาด: บางคนสแกนแล้วขึ้น "สำเร็จ" แต่คะแนนของตัวเองไม่มีข้อมูล — สาเหตุคือถ้าครูบันทึกวันนั้นของนักเรียนคนนั้นไว้ก่อนแล้ว การสแกนจะชนกับข้อมูลครูจนทั้งชุดที่สแกนพร้อมกันไม่ถูกบันทึกขึ้นเซิร์ฟเวอร์เลยทั้งหมด (แม้จะขึ้นสำเร็จในเครื่อง) ตอนนี้ระบบจะข้ามเฉพาะรายการที่ครูบันทึกไว้แล้วและบันทึกรายการอื่นให้ครบตามปกติ'
  ],
  '10.22.120': [
    '📷 AZIZGAMES: ปรับหน้าสแกน QR เพิ่มนักกีฬาใหม่ — สแกนทีละคนแล้วหยุดกล้อง โชว์รูป+ชื่อนักเรียนทันที (แสดงแม้สีไม่ตรง/ลงทะเบียนซ้ำ ให้เห็นว่าใคร) พร้อมช่องกรอกเบอร์เสื้อแข่งตรงนั้นเลย แล้วกดปุ่มเดียวยืนยัน+สแกนคนถัดไป (เดิมสแกนต่อเนื่องอัตโนมัติไม่หยุด)'
  ],
  '10.22.119': [
    '📷 AZIZGAMES: เพิ่มปุ่ม "สแกน QR เพิ่มนักกีฬา" ในฟอร์มลงทะเบียนนักกีฬา — ใช้บัตร QR นักเรียนใบเดิมที่มีอยู่แล้ว (พิมพ์แจกจากหน้าจัดการห้องเรียน) สแกนต่อเนื่องเพิ่มทีละคนได้เลย ไม่ต้องพิมพ์เลขประจำตัวเอง'
  ],
  '10.22.118': [
    '⚽ AZIZGAMES: ฟุตซอลเพิ่มระบบฟาวล์สะสมทีมคู่ขนานกับใบเหลือง-แดงแล้ว (ตามกฎ FIFA Futsal ครบ 5 ฟาวล์/ครึ่ง ได้เตะโทษจุดที่สอง) ตั้งเกณฑ์ได้เองต่อนัดเหมือนบาสเกตบอล พร้อมป๊อบอัพแจ้งเตือนทันทีที่ครบเกณฑ์'
  ],
  '10.22.117': [
    '🎯 AZIZGAMES: บาสเกตบอล — ฟาวล์ครบเกณฑ์โบนัสพอดี เด้งป๊อบอัพกลางจอแจ้งกรรมการทันที (เดิมมีแค่ป้ายข้อความเล็กๆ) และแก้ให้ฟาวล์สะสมทีมนับใหม่ทุกครึ่ง (เดิมสะสมรวมทั้งนัด ไม่ตรงกติกาจริง)'
  ],
  '10.22.116': [
    '⚠️ AZIZGAMES: หน้ากรอกคะแนนมือ ถ้าเปิดกรอกคะแนนไปแล้ว (ขึ้นสถานะกำลังแข่ง) แล้วกดปิด/ยกเลิก ตอนนี้จะเด้งถามก่อนว่าต้องการบันทึกผลการแข่งขันอย่างเป็นทางการก่อนปิดหรือไม่ กันสถานะค้างเป็น "กำลังแข่ง" โดยไม่มีใครรู้ตัว'
  ],
  '10.22.115': [
    '📊 AZIZGAMES: ขยายสกอร์อัปเดตสดให้ครบทุกรายการแข่งขัน ไม่ใช่แค่กีฬาบอล — กีฬาที่กรอกคะแนนมือ พอกรรมการเปิดกรอกคะแนนก็ขึ้นสถานะ "กำลังแข่ง" ทันที และคะแนนที่พิมพ์ในช่องก็พรีวิวให้จอสาธารณะเห็นสดก่อนกดบันทึกจริงด้วย (ปุ่มบันทึกยังคงต้องกดเพื่อยืนยันปิดนัด/ตัดเหรียญเหมือนเดิม)'
  ],
  '10.22.114': [
    '⚽ AZIZGAMES: สกอร์กีฬาบอล (มีผู้ทำประตู/แต้ม) ในหน้าผังการแข่งขันและตารางแข่งขันวันนี้ ตอนนี้อัปเดตสดตามที่กรรมการบันทึกจริงแล้ว ไม่ต้องรอกดปุ่ม "บันทึกผลการแข่งขัน" ก่อนถึงจะเห็น (ปุ่มบันทึกยังคงต้องกดเพื่อยืนยันปิดนัด/ตัดเหรียญเหมือนเดิม)'
  ],
  '10.22.113': [
    '⚡ AZIZGAMES: เปิด Realtime จริงแล้ว — บันทึกผล/ลงทะเบียนนักกีฬา/เช็คอิน/กดเริ่มจับเวลาที่เครื่องหนึ่ง จออื่นที่เปิดค้างไว้ (ผังการแข่งขัน ฯลฯ) เห็นสดทันทีไม่ต้อง reload มือเอง และกดเริ่มการแข่งขันแล้วขึ้นป้าย "● LIVE" ในตารางแข่งขันให้เห็นด้วยแล้ว (เดิมกดแล้วจออื่นไม่เห็นอะไรเลย)'
  ],
  '10.22.112': [
    '📄 AZIZGAMES: เอกสารพิมพ์รายงานตัวปรับหัวเอกสารให้เป็นทางการขึ้น (โลโก้ 3 ดวง + หัวข้อ + ชื่อโรงเรียน แบบเดียวกับเอกสารรายชื่อนักกีฬา) เผื่อคอลัมน์นัดไว้ 4 คอลัมน์เสมอ และเพิ่มคอลัมน์ "หมายเหตุ" ปิดท้าย'
  ],
  '10.22.111': [
    '🖨️ AZIZGAMES: เพิ่มทางเข้าตรงสำหรับพิมพ์เอกสารรายงานตัวสำรอง โดยไม่ต้องเปิดกล้อง/หน้าสแกน QR ก่อน — กดไอคอนพิมพ์ในการ์ดคู่แข่งขัน (ผังการแข่งขัน) หรือในหน้าบันทึกผลได้เลย เลือกสีแล้วพิมพ์ได้ทันที'
  ],
  '10.22.110': [
    '🖨️ AZIZGAMES: เอกสารพิมพ์รายงานตัวแยกเป็นทีละไฟล์ทีละสีทีละกีฬาแล้ว (เดิมรวม 2 สีในเอกสารเดียว) — กดปุ่มพิมพ์ที่อยู่ตรงหัวข้อของแต่ละสีในหน้าสแกนรายงานตัวได้เลย'
  ],
  '10.22.109': [
    '🐛 AZIZGAMES: แก้บั๊กหน้าสแกนรายงานตัวดึงรายชื่อนักกีฬาผิดกีฬา — เดิมกรองแค่เช็คว่ามีกีฬาลงทะเบียนอยู่ (ไม่ว่างเปล่า) ไม่ได้เทียบว่าเป็นกีฬาเดียวกับนัดที่กำลังแข่ง ทำให้นักกีฬาสีเดียวกันที่ลงทะเบียนกีฬาอื่นปนมาในรายชื่อให้สแกน/เลือกด้วย ตอนนี้กรองเฉพาะกีฬาของนัดนั้นจริงแล้ว'
  ],
  '10.22.108': [
    '🖨️ AZIZGAMES: เอกสารพิมพ์สำรองรายงานตัว ปรับให้เหมือนระบบฟุตซอลมากขึ้น — แสดงครบทุกนัดที่สีนั้นต้องเล่นทั้งรายการ (ไม่ใช่แค่นัดที่เปิดอยู่) คนละคอลัมน์ พร้อมชื่อคู่แข่งถ้ารู้แล้ว (บางรายการอาจมีหลายคอลัมน์จนพิมพ์ได้มากกว่า 1 หน้า)'
  ],
  '10.22.107': [
    '📡 AZIZGAMES: เพิ่มระบบกันเน็ตหลุดกลางแข่ง (offline queue) — บันทึกประตู/การ์ด/ฟาวล์/นาฬิกา/MVP/รายงานตัว ตอนนี้บันทึกลงเครื่องทันทีเสมอแล้วค่อยซิงก์เข้า Supabase อัตโนมัติเมื่อเน็ตกลับมา (มีป้าย "ค้างซิงก์ N รายการ" ให้เห็นสถานะ) ไม่ต้องรอเน็ตแล้วค่อยกดซ้ำอีกต่อไป',
    '🖨️ AZIZGAMES: เพิ่มแบบฟอร์มพิมพ์สำรอง 2 แบบ (บันทึกผล + รายงานตัว) ใช้เมื่อระบบ/เน็ตใช้ไม่ได้จริงๆ ชั่วคราว — กดปุ่มพิมพ์ในหน้าบันทึกผล/สแกนรายงานตัวได้เลย'
  ],
  '10.22.106': [
    '🐛 AZIZGAMES: แก้บั๊กประทับ "นาทีที่" ของประตู/การ์ดในครึ่งหลังคำนวณผิด — เดิมเวลาทดเวลาบาดเจ็บของครึ่งแรกจะไหลไปบวกเพิ่มนาทีของครึ่งหลังผิดเพี้ยน (เช่น ประตูที่เพิ่งเริ่มครึ่งหลังกลับขึ้นนาทีที่ 15 แทนที่จะเป็น 11) ตอนนี้ครึ่งหลังเริ่มนับใหม่ที่ (เวลาต่อครึ่ง+1) เสมอ ไม่ว่าครึ่งแรกจะทดเวลาไปเท่าไหร่'
  ],
  '10.22.105': [
    '⚽ AZIZGAMES: กริดเลือก MVP แสดงสถิติย่อยของแต่ละคนด้วย — เคยทำประตู/แต้มกี่ครั้งก็โชว์อิโมจิลูกบอลเท่านั้นครั้ง (ตามชนิดกีฬา เช่น 🏀 บาสเกตบอล/🤾 แฮนด์บอล/⚽ ฟุตซอล-ฟุตบอล) พร้อมใบเหลือง 🟨/ใบแดง 🟥 ถ้ามี ช่วยให้กรรมการตัดสินใจเลือก MVP ได้ง่ายขึ้น'
  ],
  '10.22.104': [
    '🐛 AZIZGAMES: แก้ปัญหาเปิดหน้ากีฬาสีแล้วเจอเวอร์ชันเก่าค้างนานถึง 10 นาทีหลัง deploy — เพิ่ม cache-busting ให้ลิงก์ iframe ที่เปิดหน้า azizgames.html เอง (เดิมมีแค่ไฟล์ js/css ภายในที่กันแคชอยู่แล้ว แต่ตัวหน้า .html เองไม่มี)'
  ],
  '10.22.103': [
    '📸 AZIZGAMES: กริดเลือก MVP ประจำนัดในหน้าบันทึกผลกีฬาบอล เพิ่มรูปนักกีฬาประกอบชื่อ ช่วยให้กรรมการเลือกได้ง่ายและแม่นยำขึ้น'
  ],
  '10.22.102': [
    '📸 AZIZGAMES: หน้าสแกน QR รายงานตัว แยกรายชื่อ 2 สีที่แข่งกันให้ชัดเจนเป็น 2 คอลัมน์ พร้อมโลโก้สีและรูปนักกีฬาแต่ละคน — และป๊อบอัพเลือกผู้เล่น (ตอนบันทึกผู้ทำประตู/แต้ม) เพิ่มรูปนักกีฬาประกอบชื่อด้วย'
  ],
  '10.22.101': [
    '🐛 AZIZGAMES: แก้ปุ่ม "สแกนรายงานตัว"/"จอที่สอง" ในการ์ดคู่แข่งขันที่มองเห็นยากตอนเปิดโหมดสว่าง — และแก้สิทธิ์ฐานข้อมูล (RLS) ที่บล็อกการบันทึกรายงานตัวนักกีฬาไว้ ตอนนี้สแกน QR รายงานตัวได้แล้ว'
  ],
  '10.22.100': [
    '🐛 AZIZGAMES: แก้บั๊กป๊อบอัพแจ้งเตือน/ยืนยันไปโผล่หลังหน้าบันทึกผลกีฬาบอล (ลอยบนสุดเสมอแล้ว) — เพิ่มโลโก้สีทีมในหน้าบันทึกผล, ปุ่ม "สแกนรายงานตัว"/"จอที่สอง" ด่วนในทุกการ์ดคู่แข่งขัน, และจอแสดงผลรายงานตัวสดแบบใหม่ (เหมาะเปิดทีวี/แท็บเล็ตแนวนอน เลือกรายการ-คู่แข่งขันได้เองในหน้านั้น อัปเดตสดทุก 3 วินาที)'
  ],
  '10.22.99': [
    '🧪 AZIZGAMES: เพิ่มปุ่ม "ล้างข้อมูลการลงทะเบียนนักกีฬา" และ "ล้างข้อมูลผลการแข่งขัน" สำหรับทดสอบระบบ (ตั้งค่าระบบ > ลงทะเบียน > โซนอันตราย) พร้อมยืนยันก่อนลบทุกครั้ง — และแก้หน้า "ข้อมูลนักกีฬา" ที่เคยแสดงนักเรียนทั้งโรงเรียนให้กรองเฉพาะคนที่ลงทะเบียนกีฬาสีแล้วเท่านั้น'
  ],
  '10.22.98': [
    '🎴 AZIZGAMES: ป๊อบอัพตรวจสอบก่อนส่งรายชื่อลงทะเบียนนักกีฬา เปลี่ยนจากรายการข้อความธรรมดาเป็นการ์ดรูปนักกีฬา (รูป+ชื่อ+เบอร์เสื้อ) ต่อคน จอมือถือแสดง 2 คอลัมน์'
  ],
  '10.22.97': [
    '🐛 AZIZGAMES: แก้บั๊กหน้าบันทึกผลกีฬาบอลค้าง — ตั้งเวลา/กดปุ่มนาฬิกา (เริ่มครึ่งแรก/จบครึ่งแรก/เริ่มครึ่งหลัง/จบการแข่ง) ต้องปิดป๊อบอัพแล้วเปิดใหม่ถึงจะเห็นผล ตอนนี้อัปเดตทันทีไม่ต้องปิด-เปิดใหม่แล้ว พร้อมแก้ป๊อบอัพเลือกผู้เล่นที่บางทีไปโผล่หลังป๊อบอัพหลัก'
  ],
  '10.22.96': [
    '⚽ AZIZGAMES: หน้าบันทึกผลกีฬาบอล (ฟุตซอล ฟุตบอล แฮนด์บอล แชร์บอล บาสเกตบอล) อัปเกรดเต็มรูปแบบให้เหมือนระบบ AZFUTSALCUP — เพิ่มนาฬิกาจับเวลาแข่งขันสด (เริ่ม/พักครึ่ง/ครึ่งหลัง/จบเวลา), บันทึกผู้ทำประตู/แต้ม + ใบเหลือง-แดง รายคน (บาสเกตบอลใช้ฟาวล์สะสมทีมแทน ตั้งเกณฑ์โบนัสเองได้ + เลือกแต้ม 1/2/3 ต่อครั้ง), เพิ่มระบบสแกน QR รายงานตัวนักกีฬาก่อนแข่ง (จำกัดเลือกผู้ทำประตู/MVP ได้เฉพาะคนที่รายงานตัวแล้ว), และปุ่มเลือก 🌟 MVP ประจำนัด'
  ],
  '10.22.95': [
    '🐛 แก้บั๊กเอกสาร ปพ.5: ชื่อ "ครูที่ปรึกษาศาสนา" ไม่ขึ้นในวิชากลุ่มศาสนามัธยม/ปวช. แม้ครูคนนั้นเป็นที่ปรึกษาห้องจริง — สาเหตุคือระบบเทียบชื่อห้องแบบตัดคำต่อท้ายออก (เช่น "อก.1/15 Alhamdulillah" เหลือแค่ "อก.1/15") ทำให้หาไม่เจอ ตอนนี้เทียบด้วยชื่อห้องเต็มแล้ว'
  ],
  '10.22.94': [
    '🔓 หน้าจัดการคอลัมน์คะแนน: ถ้าคอลัมน์ระบบกลาง (การมาเรียน/เดินสวนสนาม/ความสะอาด/คะแนนละหมาด) ถูกสร้างซ้ำโดยไม่ได้ตั้งใจ ตอนนี้ครูลบคอลัมน์ส่วนเกินที่ซ้ำได้เอง (ระบบจะเติมคะแนนกลับให้ถูกต้องในคอลัมน์ที่เหลืออัตโนมัติ)'
  ],
  '10.22.93': [
    '🐛 แก้บั๊ก Dashboard หัวหน้าตรวจ (Supervisor): บางห้องเรียน/สถานะเช็คชื่อ/% คะแนนหายไปเงียบๆ เมื่อข้อมูลเกิน 1,000 แถว (ข้อจำกัดของระบบฐานข้อมูล) ตอนนี้ดึงข้อมูลครบทุกแถวแล้ว'
  ],
  '10.22.92': [
    '🖨️ AZFUTSALCUP2025: แบบฟอร์มบันทึกผลสำรอง ปรับสัดส่วนคอลัมน์ — ช่องข้อมูลนักกีฬาแคบลง ช่องประตู/ใบเหลือง/ใบแดงกว้างขึ้น เขียนนาทีได้สบายขึ้น'
  ],
  '10.22.91': [
    '🖨️ AZFUTSALCUP2025: แบบฟอร์มบันทึกผลสำรอง (ออฟไลน์) เพิ่มช่องเขียนนาทีที่ทำประตู/ใบเหลือง-แดง (ใส่ "P" ต่อท้ายถ้าเป็นจุดโทษ) แทนช่องติ๊กเปล่าเดิม กรอกกลับเข้าระบบได้ตรงไม่ต้องเดา และทำรหัสนัดให้เด่นชัดใหญ่ขึ้นตรงหัวกระดาษ หาแมตช์ได้เร็วขึ้น'
  ],
  '10.22.90': [
    '🖥️ AZFUTSALCUP2025: เพิ่ม "จอแสดงผลสด" สำหรับเปิดจอที่สองระหว่างรับรายงานตัว โชว์รายชื่อ+รูปนักกีฬาทั้งสองทีมของนัดนั้น พร้อมติ๊กเขียวอัตโนมัติทันทีที่สแกนสำเร็จ (รีเฟรชเองทุก 4 วินาที ไม่ต้องกดอะไรเพิ่ม)'
  ],
  '10.22.89': [
    '⚽ AZFUTSALCUP2025: หน้าบันทึกผลตอนเลือกผู้ทำประตู/ใบเหลือง/ใบแดง เหลือเฉพาะนักกีฬาที่สแกน QR รายงานตัวแล้วจริงสำหรับนัดนั้นเท่านั้น กันเลือกผิดคน/นับให้คนที่ไม่ได้ลงเล่น ถ้าลืมสแกนให้เปิดกล้องสแกนรายงานตัวเพิ่มได้เลย',
    '🖨️ AZFUTSALCUP2025: ตราปั๊มดิจิทัลจำลองในเอกสารรายงานตัวที่พิมพ์ เพิ่มชื่อผู้รับรายงานตัวและเวลาที่ปั๊มด้วย (เดิมมีแค่เครื่องหมายถูก)'
  ],
  '10.22.88': [
    '🗑️ AZFUTSALCUP2025: เพิ่มปุ่ม "ล้างข้อมูลรายงานตัวทั้งหมด" ในหน้าตั้งค่า (ตั้งค่า→แข่งขัน) แยกจากปุ่มล้างผลการแข่งขัน ใช้ล้างสถานะรายงานตัวที่สแกน QR ไว้กลับเป็นค่าเริ่มต้นได้ในคลิกเดียว'
  ],
  '10.22.87': [
    '🎲 AZIZGAMES: ครูผู้รับผิดชอบรายการแข่งขันจับคู่รอบแรกได้เองแล้ว (ไม่ต้องรอนักเรียนลงทะเบียนก่อน เพราะแข่งครบ 4 สีเสมออยู่แล้ว) เลือกได้ทั้ง "สุ่มจับคู่อัตโนมัติ" (สุ่มจริงแบบจับสลาก) และ "จัดคู่เอง" (แตะเลือกสีที่จะเจอกันในคู่ที่ 1)'
  ],
  '10.22.86': [
    '🖨️ AZFUTSALCUP2025: เอกสารรายงานตัวที่พิมพ์ออกมา ตอนนี้แสดง "ตราปั๊มดิจิทัล" จำลองในช่องนัดที่นักกีฬารายงานตัวผ่านระบบสแกน QR จริงแล้ว (สีน้ำเงิน/แดงสุ่ม มุมเอียงสุ่มทุกดวงให้ดูเหมือนปั๊มจริง) ก่อนหน้านี้ช่องว่างเปล่าไม่ว่าจะสแกนไปแล้วหรือไม่'
  ],
  '10.22.85': [
    '🏆 AZIZGAMES: หน้าบันทึกผลบอลแมตช์ (ทีมปะทะทีมแพ้คัดออก) เขียนผลลง Supabase จริงแล้ว หลังพบว่าเดิมบันทึกอยู่แค่ในเครื่องตัวเอง — เพิ่มปุ่ม "เริ่มจับสลาก" ที่ดึงทีมจากที่ลงทะเบียนจริงมาสร้างผังแข่งขันอัตโนมัติ (ไม่ตายตัว 4 สีเหมือนเดิม) รองรับ 2 รูปแบบผังให้ครูผู้รับผิดชอบเลือกเอง: แบบมาตรฐาน (มีรอบแก้ตัว 7 คู่) กับแบบง่าย (แพ้คัดออกตรง 4 คู่) พร้อมแก้บั๊กเดิมที่เคยตัดเหรียญทอง-เงินทุกนัดที่จบ (ตอนนี้ตัดเฉพาะนัดชิงจริงเท่านั้น)'
  ],
  '10.22.84': [
    '🏅 AZIZGAMES: แก้บั๊กเพิ่ม/แก้ไข/ลบรายการแข่งขันในหน้า "ตารางกิจกรรม" ไม่เคยบันทึกลงฐานข้อมูลจริง (อยู่แค่ในเครื่องตัวเอง หายเมื่อ refresh) — ตอนนี้เขียนลง Supabase จริงแล้ว พร้อมเพิ่มข้อมูลจำแนกรูปแบบผลการแข่งขัน (ทีมปะทะทีม/จับเวลา/คะแนนสะสม) ให้ครบทั้ง 102 รายการ เตรียมพร้อมสำหรับระบบบันทึกผลรูปแบบใหม่ที่กำลังจะตามมา'
  ],
  '10.22.83': [
    '📡 AZFUTSALCUP2025: หน้าบันทึกผลการแข่งขันทำงานได้แม้เน็ตหลุดแล้ว! บันทึกผู้ทำประตู/ใบเหลือง/ใบแดง/สกอร์/นาฬิกา จะเก็บไว้ในเครื่องก่อนเสมอ แล้วซิงก์อัตโนมัติทันทีที่สัญญาณกลับมา มีป้ายแจ้งเตือน "ค้างซิงก์" ระหว่างออฟไลน์'
  ],
  '10.22.82': [
    '⚽ AZFUTSALCUP2025: แก้บั๊กสกอร์ในหน้าบันทึกผลค้างเป็นค่าเก่าที่เคยบันทึกไว้ ถ้าลบผู้ทำประตูจนเหลือ 0 คนหลังจากเคยกดบันทึกไปแล้ว ตอนนี้สกอร์ซิงก์กับจำนวนผู้ทำประตูจริงเสมอไม่ว่าจะแก้ไขกี่รอบก็ตาม',
    '📸 AZFUTSALCUP2025: หน้าสถิติทีม ดาวซัลโวแสดงรูปนักกีฬาจริงแล้ว (เดิมเป็นวงกลมว่างเปล่า) และเพิ่มการ์ด "ใบเหลือง-ใบแดงมากที่สุด" ใหม่พร้อมรูปนักกีฬา'
  ],
  '10.22.81': [
    '⚽ AZFUTSALCUP2025: ช่องสกอร์ในหน้าบันทึกผลซิงก์กับจำนวนผู้ทำประตูแบบเรียลไทม์ทั้งเพิ่มและลบ (ก่อนหน้านี้ลบผู้ทำประตูแล้วสกอร์ไม่ลดตาม)',
    '🎯 AZFUTSALCUP2025: เพิ่มปุ่ม "P" เล็กๆ ที่ผู้ทำประตูแต่ละคน ให้ระบุได้ว่าประตูนั้นมาจากจุดโทษหรือไม่ แสดงกำกับในวงเล็บนาทีด้วย',
    '⏱️ AZFUTSALCUP2025: แก้บั๊กนาฬิกาครึ่งหลังนับต่อจากทดเวลาบาดเจ็บของครึ่งแรก ตอนนี้เริ่มนับนาทีต่อครึ่งใหม่เต็มจำนวนเสมอเมื่อกดเริ่มครึ่งหลัง และเปลี่ยนป้ายกำกับเป็น "ครึ่งแรก/ครึ่งหลัง" แทนตัวเลข',
    '📝 AZFUTSALCUP2025: หน้าลงทะเบียนทีมซ่อนแบบฟอร์มสร้างทีมอัตโนมัติเมื่อแอดมินปิดรับสมัคร เหลือแค่ช่องกรอกรหัสทีมดูข้อมูล และจดจำรหัสทีมล่าสุดที่กรอกไว้ให้อัตโนมัติ',
    '📊 AZFUTSALCUP2025: หน้ารายชื่อนักกีฬาของทีม เพิ่มป้ายสรุปจำนวนประตู/ใบเหลือง/ใบแดงต่อคนแบบคร่าวๆ กดที่ชื่อเพื่อขยายดูรายละเอียดว่าทำได้ในนัดไหน เจอทีมใด นาทีที่เท่าไหร่'
  ],
  '10.22.80': [
    '🗑️ AZFUTSALCUP2025: เพิ่มปุ่ม "ล้างผลการแข่งขันทั้งหมด" ในหน้าตั้งค่า (ตั้งค่า→แข่งขัน) สำหรับใช้ตอนทดสอบระบบบันทึกผล ล้างสกอร์/ผู้ทำประตู/การ์ด/นาฬิกากลับเป็นค่าเริ่มต้นทุกนัดในคลิกเดียว ไม่กระทบทีม/รหัสทีม/การรายงานตัว และไม่กระทบคู่แข่งขันรอบแรกที่จับสลากไว้แล้ว'
  ],
  '10.22.79': [
    '🎨 AZFUTSALCUP2025: ป้าย "กำลังแข่งขัน" ในหน้าตารางการแข่งขันเปลี่ยนเป็นสีเขียวเด่นชัด (พื้นหลังพิลล์เขียว) แทนสีแดงเดิม'
  ],
  '10.22.78': [
    '⏱️ AZFUTSALCUP2025: เพิ่มนาฬิกาจับเวลาแข่งขันสดต่อนัด — ปุ่ม "เริ่มการแข่งขัน/จบครึ่งแรก/เริ่มครึ่งหลัง/จบการแข่งขัน" ในหน้าบันทึกผล ตั้งค่านาทีต่อครึ่งได้เอง (ตั้งค่า→แข่งขัน)',
    "📍 AZFUTSALCUP2025: ผู้ทำประตู/ใบเหลือง/ใบแดง ประทับนาทีอัตโนมัติตามนาฬิกาที่กำลังเดินอยู่ (นับสะสมข้ามครึ่งแบบบอลจริง) แสดงวงเล็บนาที เช่น 'ชื่อ (2', 10')'",
    '🔴 AZFUTSALCUP2025: หน้าตารางการแข่งขันแสดงป้าย "กำลังแข่งขัน" พร้อมนาฬิกานับถอยหลังสดของนัดที่กำลังแข่งอยู่ ให้เห็นแบบเรียลไทม์',
    '🐛 AZFUTSALCUP2025: แก้บั๊กตราปั๊มดิจิทัลรายงานตัวไม่แสดงชื่อผู้รับรายงานตัว (ลืม select คอลัมน์ checked_in_by ตั้งแต่ตอนสร้างฟีเจอร์)'
  ],
  '10.22.77': [
    '📋 AZFUTSALCUP2025: หัวคอลัมน์ในแบบฟอร์มรายงานตัวเปลี่ยนจาก "นัดที่ N" เป็นชื่อรอบจริงของทีมนั้น (เช่น รอบแรก/รอบแก้ตัว/เพลย์ออฟ) ไล่ตามผลการแข่งขันจริง คอลัมน์ที่ยังไม่รู้ผลแสดง "รอผลรอบก่อน"',
    '⚽ AZFUTSALCUP2025: ช่องกรอกสกอร์ในหน้าบันทึกผลเติมตัวเลขให้อัตโนมัติตามจำนวนผู้ทำประตูที่บันทึกไว้ (แก้ไขเองได้ก่อนกดบันทึก ยังไม่ถือว่าจบการแข่งขันจนกว่าจะกดบันทึกจริง)',
    '🎨 AZFUTSALCUP2025: การ์ดตารางแข่งขันปรับเป็น 2 ฝั่งซ้าย-ขวา แยกผู้ทำประตู/ใบเหลือง/ใบแดงตามทีมชัดเจน และไฮไลต์พื้นหลังสีเขียวให้ทีมที่ชนะเห็นชัด'
  ],
  '10.22.76': [
    '📷 AZFUTSALCUP2025: สแกน QR รายงานตัวสำเร็จตอนนี้แสดงรูปนักกีฬาด้วย และมีปุ่ม "✕ ยกเลิก" ทั้งตอนสแกนล่าสุดและในรายชื่อที่รายงานตัวแล้ว (แก้สแกนผิดคนได้ทันทีไม่ต้องพึ่ง SQL)',
    '🔊 AZFUTSALCUP2025: แยกเสียงสแกน 3 แบบชัดเจน — สำเร็จ (โทนสูงครั้งเดียว) / สแกนซ้ำ (โทนกลางสองครั้ง) / ผิดพลาด (โทนต่ำยาว) ตามแบบระบบสแกนละหมาด',
    '📄 AZFUTSALCUP2025: สตาฟสิทธิ์ "ผู้รับรายงานตัว" เปิดดู/พิมพ์เอกสารรายงานตัวของทั้งสองทีมได้จากหน้าเลือกนัดโดยตรง ไม่ต้องผ่านแอดมินเต็มรูปแบบ'
  ],
  '10.22.75': [
    '🖨️ AZFUTSALCUP2025: แบบฟอร์มบันทึกผลการแข่งขัน (พิมพ์) ปรับส่วนรูป+ชื่อ-สกุล+เบอร์เสื้อให้เป็นคอลัมน์เดียวกัน (รูปซ้าย ข้อมูลขวา บรรทัดเดียว) ให้เป็นสไตล์เดียวกับแบบฟอร์มรายงานตัว ยังคงพอดี 1 หน้า A4 เหมือนเดิม'
  ],
  '10.22.74': [
    '🖨️ AZFUTSALCUP2025: บังคับให้แบบฟอร์มรายงานตัวและแบบฟอร์มบันทึกผล (พิมพ์) อยู่ในกระดาษ A4 แผ่นเดียวเสมอแม้ทีมเต็ม 10 คน และแก้ให้ชื่อ-สกุลนักกีฬาอยู่บรรทัดเดียวชิดซ้ายเสมอไม่ตัดบรรทัด'
  ],
  '10.22.73': [
    '🖨️ AZFUTSALCUP2025: จัดระเบียบแบบฟอร์มรายงานตัว (พิมพ์) ใหม่ — ช่องข้อมูลนักกีฬาแคบลง รูปทุกคนอยู่แนวเดียวกันทุกแถว ชื่อ-สกุลชิดขอบรูป และเพิ่มคอลัมน์ "หมายเหตุ" ท้ายตาราง'
  ],
  '10.22.72': [
    '🖼️ ปรับรูปนักเรียนทุกจุดในระบบ (AZFUTSALCUP, กีฬาสี, เช็คชื่อละหมาด, หน้านักเรียน, บันทึกคะแนน, จัดการห้องเรียน ฯลฯ) จากกรอบวงกลมเป็นกรอบสี่เหลี่ยมขอบมนแนวตั้ง มีขอบ+เงาเพิ่มมิติ ให้เป็นมาตรฐานเดียวกันทั้งระบบ'
  ],
  '10.22.71': [
    '🖨️ AZFUTSALCUP2025: ปรับแบบฟอร์มรายงานตัวนักกีฬา (พิมพ์) เป็นกระดาษ A4 แนวนอน รวมคอลัมน์รูป+ชื่อนักกีฬาเป็นช่องเดียว (รูปซ้าย ข้อมูลขวา ตัวหนาเด่นชัด) และขยายช่องแต่ละนัดให้กว้าง/สูงพอสำหรับประทับตรา'
  ],
  '10.22.70': [
    '🔐 AZFUTSALCUP2025: เพิ่มระบบสิทธิ์แบบจำกัดขอบเขต — มอบสิทธิ์ "ผู้รับรายงานตัว" หรือ "ผู้บันทึกผลการแข่งขัน" ให้พี่สตาฟได้เฉพาะงาน โดยไม่ต้องให้สิทธิ์แอดมินเต็มรูปแบบ (ตั้งค่า → สิทธิ์)',
    '✅ AZFUTSALCUP2025: การสแกนรายงานตัวสำเร็จจะประทับ "ตราปั๊มดิจิทัล" ระบุชื่อผู้รับรายงานตัวและเวลา ป้องกันข้อโต้แย้งว่ารายงานตัวจริงหรือไม่',
    '📋 AZFUTSALCUP2025: แท็บ "ผลการแข่งขัน" ในหน้าทีมของฉัน (ทั้งหัวหน้าทีมและดูผ่านรหัสทีม) เพิ่มสถานะรายงานตัวของทีมตัวเองในแต่ละนัด'
  ],
  '10.22.69': [
    '🔔 เปิดใช้งาน push notification จริง (เฟส 1) — เด้งได้แม้ปิดแอป/ล็อกหน้าจอ/เล่นแอปอื่นอยู่ (ต้องกดอนุญาตแจ้งเตือน + ติดตั้งแอปก่อนสำหรับ iPhone/iPad) เริ่มใช้กับประกาศจากแอดมิน/หัวหน้าวิชาการ/หัวหน้าฝ่ายทะเบียน — สร้างประกาศใหม่จะส่งแจ้งเตือนไปหาครูทุกคนที่เปิดรับไว้ทันที'
  ],
  '10.22.68': [
    '✅ AZFUTSALCUP2025: เพิ่มสวิตช์ "บังคับกรอกผู้ทำประตูก่อนบันทึกผล" (แอดมินเปิด/ปิดเองได้ในหน้าตั้งค่า) กันสกอร์กับผู้ทำประตูไม่ตรงกัน',
    '🖨️ AZFUTSALCUP2025: เพิ่มปุ่มพิมพ์แบบฟอร์มบันทึกผลสำรอง (ออฟไลน์ สอดคล้องกับระบบดิจิทัล) ในหน้าแก้ไขผลการแข่งขัน และปุ่มพิมพ์แบบฟอร์มรายงานตัวรายทีม (มีรูปนักกีฬา คอลัมน์นัดตามจำนวนสูงสุดที่เป็นไปได้ ม.ต้น 5 นัด ม.ปลาย 6 นัด) ในหน้าจัดการทีม',
    '📷 AZFUTSALCUP2025: เพิ่มระบบสแกน QR รายงานตัวนักกีฬาก่อนแข่งแต่ละนัด ใช้ QR ใบเดียวกับระบบเช็คชื่อ/บันทึกคะแนนหลัก บันทึกลงตาราง azfutsal_checkins ใหม่'
  ],
  '10.22.67': [
    '📲 เพิ่มป๊อปอัพแนะนำติดตั้งแอปอัตโนมัติ (หน้าครู/นักเรียน) — เครื่อง Android/Chrome เด้งปุ่มติดตั้งได้ในคลิกเดียว ส่วน iPhone/iPad โชว์ขั้นตอนสอนมือ (กดปุ่มแชร์ → เพิ่มไปยังหน้าจอโฮม) เพราะ iOS ไม่รองรับการเด้งอัตโนมัติ ไม่กวนซ้ำถ้าติดตั้งแล้วหรือเพิ่งปิดไปไม่เกิน 14 วัน'
  ],
  '10.22.66': [
    '📋 AZFUTSALCUP2025: แท็บ "ผลการแข่งขัน" ในหน้าทีมของฉัน เพิ่มสรุปผู้ทำประตูของทีมรายคน (จำนวนประตูรวม ไม่ต้องนับเอง) และสรุปใบเหลือง/ใบแดงรายคน (ระบุนัดที่โดนด้วย) ตรวจสอบได้เองครบถ้วนโดยไม่ต้องถามกองกลาง'
  ],
  '10.22.65': [
    '📑 AZFUTSALCUP2025: หน้า "ทีมของฉัน" เปลี่ยนแถบเมนูล่างเป็นปุ่มสลับแท็บ "ทีม / ผลการแข่งขัน / การเงิน" แทนปุ่มกลับหน้าหลักปุ่มเดียว ดูข้อมูลแต่ละส่วนได้ง่ายและชัดเจนขึ้น'
  ],
  '10.22.64': [
    '✂️ AZFUTSALCUP: ย่อชื่อปุ่มเข้าระบบจากหน้าครู/แดชบอร์ดแอดมิน จาก "AZFUTSALCUP2025" เหลือ "AZFUTSALCUP" ให้สั้นกระชับขึ้น'
  ],
  '10.22.63': [
    '🏆 AZFUTSALCUP2025 ม.ปลาย: ปรับสายการแข่งใหม่ตามที่แกนนำผู้จัดกำหนด (25 นัด) — รอบแรก 16 ทีม→8 คู่ ผู้ชนะรอไว้ก่อน ผู้แพ้ไปรอบแก้ตัว 4 คู่ (แพ้แล้วตกรอบ) รวมผู้ชนะทั้งหมด 12 ทีมจับคู่ 6 คู่ เหลือ 6 ทีมจับคู่ 3 คู่ ผู้แพ้สุ่มฉลาก 1 ทีมแถมเข้ารองชนะเลิศ แล้วเข้ารอบรองฯ-ชิงที่ 3-ชิงที่ 1 — รองรับทั้งจับสลากสด 🎬 และแอดมินเลือกทีมเองตอนนั้นได้ทุกรอบ',
    '⚙️ AZFUTSALCUP2025 ม.ต้น: เพิ่มตัวเลือกรูปแบบสายการแข่งก่อนสร้างตารางแข่ง เลือกได้ว่าจะแข่งแบบ 12 ทีม (17 นัด แบบเดิม) หรือ 16 ทีม (25 นัด แบบเดียวกับ ม.ปลาย) — เลือกได้ครั้งเดียว ล็อกทันทีที่สร้างตารางแข่งแล้ว'
  ],
  '10.22.62': [
    '🔎 AZFUTSALCUP2025: สมาชิกในทีมที่ไม่ใช่หัวหน้าทีม กรอกรหัสประจำทีม (เช่น HS-6N7D) ที่หน้า "ทีมของฉัน" เพื่อดูข้อมูลทีมได้แล้ว (รายชื่อ ผลแข่ง ผู้ทำประตู ใบเหลืองแดง ยอดเงินคืน) — แบบดูอย่างเดียว แก้ไข/ลบไม่ได้'
  ],
  '10.22.61': [
    '✏️ AZFUTSALCUP2025: หัวหน้าทีมแก้ไขชื่อทีมและเบอร์เสื้อนักกีฬาที่เพิ่มไปแล้วได้เอง (ก่อนหน้านี้แก้ไม่ได้เลยหลังตั้งครั้งแรก)',
    '📊 AZFUTSALCUP2025: หน้า "ทีมของฉัน" เพิ่มการ์ด "ผลการแข่งขันของทีมคุณ" แสดงตารางแข่ง ผู้ทำประตู ใบเหลือง/ใบแดงของทีม และยอดเงินประกันที่คาดว่าจะได้คืนหลังหักค่าดำเนินการ/ใบเหลือง-แดง'
  ],
  '10.22.60': [
    '🐛 แก้บั๊กใหญ่: ป๊อบอัพ "เพิ่มคอลัมน์ปรับคะแนนกลางภาค" ช่องเลือกคอลัมน์กลางภาคหลักว่างเปล่าใน 86% ของห้องเรียนทั้งหมด (1,018 จาก 1,183 ห้อง) — ต้นเหตุคือโค้ดเช็คหาคอลัมน์ที่ assignment_type ตรงกับ "กลางภาค" เป๊ะๆ เท่านั้น ทั้งที่คอลัมน์กลางภาคส่วนใหญ่ในระบบเก็บเป็น "midterm" (อังกฤษ) มาจากโค้ดรุ่นเก่า — แก้ให้รู้จักทั้งสองแบบแล้วทั้ง 2 จุด (หน้าจัดการคอลัมน์เต็มหน้า + ป๊อบอัพจัดการคอลัมน์ด่วนในหน้าบันทึกคะแนน)'
  ],
  '10.22.59': [
    '🐛 แก้บั๊กสแกนบันทึกคะแนน (ต่อ): วิชาที่ครูตั้งชื่อคอลัมน์ตัวเองว่า "การมาเรียน" ฯลฯ (เช่น กลุ่มวิชาการ) เคยถูกกันออกผิดเพราะชื่อไปพ้องกับคอลัมน์อัตโนมัติทักษะชีวิต — ตอนนี้เช็คบริบทห้องจริง (ห้องศาสนา/ห้องทักษะชีวิต) ก่อนกันชื่อ ไม่กันมั่วตามชื่ออย่างเดียวแล้ว'
  ],
  '10.22.58': [
    '🐛 แก้บั๊กสแกนบันทึกคะแนน: บางห้อง (เช่นห้องศาสนาที่ยังไม่เพิ่มคอลัมน์เอง) เลือกคอลัมน์ไม่ได้ — ปรับข้อความแจ้งเตือนให้ชัดเจนขึ้น พร้อมแก้จุดที่คอลัมน์อัตโนมัติทักษะชีวิต (การมาเรียน/เดินสวนสนาม/ความสะอาด) เคยหลุดเข้ามาให้สแกนได้ ทั้งที่ไม่ควร'
  ],
  '10.22.57': [
    '🎲 ปรับปรุงหน้า "สุ่มจัดกลุ่ม" — เลือกได้ว่าจะจัดกลุ่มจาก 👥 ทั้งห้อง, ✅ เฉพาะนักเรียนที่มาเรียนวันนี้ (ดึงจากข้อมูลเช็คชื่อวันนี้อัตโนมัติ) หรือ ✍️ เลือกรายชื่อเอง ก่อนสุ่มจัดกลุ่ม'
  ],
  '10.22.56': [
    '🐛 แก้บั๊กปุ่มกลุ่ม (เอกสาร/เครื่องมือห้องเรียน/ผู้ช่วยครู) ในหน้าห้องเรียนกดแล้วไม่มีอะไรเกิดขึ้น (เมนูดรอปดาวน์เดิมโดนแถบเลื่อนแนวนอนของมือถือบังไว้) — เปลี่ยนเป็นป๊อบอัพเด้งกลางจอแทน พร้อมเอาลูกศร ▾ ออก'
  ],
  '10.22.55': [
    '🎨 จัดกลุ่มปุ่มในหน้าห้องเรียนใหม่ — จาก 7 ปุ่มเหลือ 3 กลุ่ม (📄 เอกสาร / 🛠️ เครื่องมือห้องเรียน / 🤖 ผู้ช่วยครู) กดแล้วเด้งเมนูให้เลือก แถบปุ่มสั้นลง ไม่ต้องเลื่อนซ้าย-ขวาบนมือถือ และลดความโค้งมุมปุ่มทั้งหมดให้ดูสะอาดตาขึ้น'
  ],
  '10.22.54': [
    '📷 เพิ่มฟีเจอร์ "สแกนบันทึกคะแนน" — ใช้ QR นักเรียนใบเดียวกับเช็คชื่อ/สแกนละหมาด สแกนแล้วเด้งป๊อบอัพกรอกคะแนนทันที บันทึกแล้วกล้องกลับมาสแกนต่อเองอัตโนมัติ เข้าถึงได้ 3 จุด: ไอคอนกล้องที่หัวคอลัมน์คะแนน (เฉพาะคอลัมน์ที่ไม่ใช่คะแนนอัตโนมัติ), ปุ่ม "สแกนคะแนน" ในหน้าบันทึกคะแนนแต่ละห้อง, และการ์ดใหม่ในเมนูสแกนกลาง (ปุ่มกล้องที่ header)'
  ],
  '10.22.53': [
    '⏱️ ปรับฟีเจอร์จับเวลาอีกรอบ: ตั้งเวลากำหนดเองแยกนาที/วินาทีได้แล้ว, คลิกปุ่มเสียงประกอบในหน้าตั้งค่าเพื่อฟังตัวอย่างได้ทันที (คลิกซ้ำ = หยุด), เพิ่มสวิตช์ให้เลือกเปิดตัวเลือกเสียงประกอบในโหมดนับถอยหลังด้วย (เดิมมีแค่โหมดพักเบรค)'
  ],
  '10.22.52': [
    '⏱️ อัปเกรดฟีเจอร์จับเวลา: เพิ่มโหมด "นับเวลา" (stopwatch นับขึ้นไม่จำกัด หยุดชั่วคราว/เล่นต่อได้), ปรับขนาดตัวเลขได้ด้วยสไลด์ในหน้าเต็มจอ, เสียงหมดเวลาเปลี่ยนเป็นเสียงกริ่งนาฬิกาปลุกจริง, โหมดพักเบรคเลือกเสียงธรรมชาติ/เพลงประกอบได้ 10 แบบ (ลมป่า/สายลมทะเล/น้ำตก/ฝน/เปียโน/สมาธิ ฯลฯ)'
  ],
  '10.22.51': [
    '⏱️ เพิ่มฟีเจอร์ "จับเวลา" เต็มจอในหน้าห้องเรียนแต่ละห้อง — โหมดนับถอยหลังคุมกิจกรรม (พื้นไล่สีเขียว→เหลือง→แดง เอฟเฟกต์สั่น/ขยายตอนใกล้หมดเวลา เลือกได้) กับโหมดพักเบรค (จอมืด→สว่างสวนทางตัวเลข ครูกด +/- ปรับเวลากลางเบรคได้) สิทธิ์เหมือนสุ่มรายชื่อ (โดเนทไม่จำกัด/ทั่วไปทดลองฟรีตามโควตา)'
  ],
  '10.22.50': [
    '⚡ ป๊อบอัพเพิ่มคอลัมน์กลางภาค/ปลายภาค: เพิ่มปุ่ม "ปรับคะแนนเก็บ (คะแนนเต็มกำหนดเอง)" กดแล้วเติมชื่อคอลัมน์ให้อัตโนมัติ ครูตั้งคะแนนเต็มเอง',
    '🛡️ กรอกคะแนนเกินคะแนนเต็มในตารางเกรด (ทั้งแบบพิมพ์ตรงๆ และแบบ +/-) หรือในป๊อบอัพ "ตั้งคะแนนทั้งห้อง" ระบบจะตัดคะแนนให้เหลือเท่าคะแนนเต็มอัตโนมัติ พร้อมแจ้งเตือนทุกครั้ง (เดิม clamp บางส่วนแต่เงียบและไม่ครอบคลุมโหมด +/-)'
  ],
  '10.22.49': [
    '🔄 คอลัมน์ "ปรับคะแนนกลางภาค" เพิ่มเข้าป๊อบอัพ "⚙️ จัดการคอลัมน์" ในหน้าบันทึกคะแนนด้วยแล้ว (รอบก่อนเพิ่มไว้แค่หน้าคอลัมน์คะแนนแบบเต็มหน้า)'
  ],
  '10.22.48': [
    '🔄 เพิ่มคอลัมน์ "ปรับคะแนนกลางภาค" — เชื่อมกับคอลัมน์กลางภาคหลักที่เลือกเอง กรอกคะแนนสูงกว่าเมื่อไหร่ ระบบเขียนทับคะแนนจริงให้อัตโนมัติทันที (ไม่แสดงให้นักเรียนเห็น ไม่ลงเอกสาร ปพ.5)'
  ],
  '10.22.47': [
    '🐛 แก้บั๊กคอลัมน์คะแนนอัตโนมัติทักษะชีวิต (การมาเรียน/เดินสวนสนาม/ความสะอาด) ถูกเติมซ้ำหลังกด "สร้างสำเนา" ห้องเรียน — ตอนนี้เช็คด้วยชื่อหัวข้อปัจจุบันแทนการเดา sheet_column'
  ],
  '10.22.46': [
    '📊 AZFUTSALCUP2025: "ดาวซัลโว" ในการ์ดรางวัลรายบุคคล แนะนำผู้นำประตูอัตโนมัติจากสถิติที่บันทึกไว้จริง กดปุ่ม "ใช้คนนี้" ตั้งได้ทันที (ถ้าเสมอกันหลายคนจะแจ้งให้เลือกเอง) — MVP/GK ยอดเยี่ยม ไม่มีสถิติอ้างอิงในระบบ ยังต้องเลือกเองเหมือนเดิม'
  ],
  '10.22.45': [
    '🔍 AZFUTSALCUP2025: การ์ด "รางวัลรายบุคคล" (MVP/ดาวซัลโว/GK ยอดเยี่ยม) เปลี่ยนจากดรอปดาวน์รายชื่อทั้งหมด เป็นพิมพ์ค้นหาด้วยเบอร์เสื้อ/รหัส/ชื่อ แล้วเลือกจากผลที่กรองมาให้ พร้อมปุ่มล้างรางวัล'
  ],
  '10.22.44': [
    '💵 AZFUTSALCUP2025: เพิ่มค่าดำเนินการกิจกรรม/ทีม (ตั้งค่าได้ในหน้าแอดมิน) หักออกจากค่าประกันก่อนคำนวณเงินคืนทีมในหน้า "สรุปเงินประกัน" ให้ตรงกับนโยบายจริง'
  ],
  '10.22.43': [
    '📐 AZFUTSALCUP2025: การ์ด "ตรวจสอบการชำระเงินประกัน" ในหน้าแอดมิน ยืดเต็มพื้นที่ที่เหลือของจอแล้วเหมือนการ์ดอื่นๆ',
    '🪟 AZFUTSALCUP2025: เปลี่ยนป๊อบอัพยืนยันการลบ (ลบทีม/ลบนักกีฬา/ถอนสิทธิ์แอดมิน) จากป๊อบอัพระบบเบราว์เซอร์ที่ไม่สวย เป็นโมดัลสไตล์เดียวกับระบบทั้งหมด'
  ],
  '10.22.42': [
    '📐 AZFUTSALCUP2025: การ์ด "จัดการทีม" และ "นักกีฬาที่ลงทะเบียน" ในหน้าแอดมิน ยืดเต็มพื้นที่ที่เหลือของจอแล้ว (จากเดิมลิสต์สูงคงที่ทำให้มีพื้นที่ว่างด้านล่างเยอะ) รายการด้านในสกรอลล์เองได้',
    '🏷️ AZFUTSALCUP2025: หน้า "นักกีฬาที่ลงทะเบียน" ของแอดมิน เพิ่มปุ่มสลับดูตามระดับชั้น ม.ต้น/ม.ปลาย เหมือนหน้าจัดการทีม'
  ],
  '10.22.41': [
    '📱 AZFUTSALCUP2025: ปรับหน้าตาให้เหมือนกรอบมือถือลอยกึ่งกลางจอตอนเปิดในแท็บ/ไอแฟรมเดสก์ท็อป (จากเดิมยืดเต็มความสูงจอจนมีพื้นที่ว่างเยอะด้านล่าง) ส่วนบนมือถือจริงยังแสดงเต็มจอเหมือนเดิม',
    '💰 AZFUTSALCUP2025: หน้า "จัดการทีม" ของแอดมิน แสดงสถานะการชำระค่าประกันทีมและเวลาส่ง/ยืนยันในแต่ละทีม ดูได้ทันทีว่าทีมไหนเรียบร้อยแล้ว ทีมไหนยังไม่ส่งหรือรอตรวจสอบ'
  ],
  '10.22.40': [
    '🏆 AZFUTSALCUP2025: ขยายสายการแข่งขัน ม.ปลาย รองรับ 16 ทีม (14 ทีมทั่วไป + 2 ทีมผู้จัด) เปลี่ยนเป็นสายแพ้คัดออกล้วน (ไม่มีรอบแก้ตัว/ไวด์การ์ดแล้ว)',
    '🔓 AZFUTSALCUP2025: แยกปุ่มเปิด/ปิดรับสมัครทีมเป็นรายระดับชั้น (ม.ต้น/ม.ปลาย) ในหน้าตั้งค่าแอดมิน',
    '🚫 AZFUTSALCUP2025: ปิดรับสมัครทีม ม.ปลาย อัตโนมัติทันทีที่มีทีมทั่วไปครบ 14 ทีม (ไม่นับทีมผู้จัด) กันสมัครเกินโควตาแม้กดพร้อมกันหลายคน'
  ],
  '10.22.39': [
    '🔊 AZFUTSALCUP2025: หน้า "จับสลากสด" เปลี่ยนเสียงเขย่าลูกบอลเป็นไฟล์เสียงลูกบอลกลิ้งจริงที่ครูโดเนทมาให้ (แทนเสียงสังเคราะห์เดิม) วนซ้ำตลอดช่วงเขย่า มีเฟดอิน/เฟดเอาต์ให้เข้า-ออกนุ่มนวล'
  ],
  '10.22.38': [
    '🎲 AZFUTSALCUP2025: หน้า "จับสลากสด" ปรับความเร็วการเขย่าลูกบอลให้เร็วขึ้น (สลับตำแหน่งทุก 0.25 วิ จากเดิม 0.42 วิ) ดูมีชีวิตชีวาขึ้น'
  ],
  '10.22.37': [
    '🔊 AZFUTSALCUP2025: ปรับเสียงตอนเขย่าลูกบอลในหน้า "จับสลากสด" เป็นเสียงกลิ้งต่อเนื่องในโถพลาสติกจริงๆ (แทนเสียงคลิกสั้นๆ ซ้ำๆ แบบเดิม) และขยายหัวข้อ "จับสลากสด · ระดับชั้น · ชื่อกิจกรรม" ให้ใหญ่เด่นชัดขึ้น ให้คนที่เพิ่งเข้ามาดูไลฟ์เข้าใจได้ทันทีว่ากำลังทำอะไรอยู่'
  ],
  '10.22.36': [
    '🔊 AZFUTSALCUP2025: หน้า "จับสลากสด" มีเสียงประกอบแล้ว — ตอนเขย่าได้ยินเสียงลูกบอลกระทบกันในโถ ตอนแคปซูลแตกเปิดเผยชื่อทีมได้ยินเสียง "แกะ/ป็อป" สังเคราะห์เสียงด้วย Web Audio ล้วนๆ ไม่ต้องโหลดไฟล์เสียงเพิ่ม'
  ],
  '10.22.35': [
    '🎱 AZFUTSALCUP2025: ลูกบอลในโถหน้า "จับสลากสด" เปลี่ยนเป็นสีเดียวกันหมดตามธีมระดับชั้น (ไม่สุ่มสีต่างกันต่อทีมแล้ว) และขยายชื่อทีมที่เปิดเผยตอนจับได้ให้ใหญ่เด่นชัดขึ้นมาก พร้อมป้ายบอกว่าเป็นคู่ไหนฝั่งไหน (เช่น "M1 · ทีม A") ช่วยให้คนที่เพิ่งเข้ามาดูไลฟ์เข้าใจได้ทันทีว่ากำลังเกิดอะไรขึ้น'
  ],
  '10.22.34': [
    '🎲 AZFUTSALCUP2025: หน้า "จับสลากสด" ปรับปุ่มเขย่าให้เป็นไปตามที่ต้องการ — กด "เขย่าลูกบอล" ปุ่มเปลี่ยนเป็น "จับทีมถัดไป" ทันที ส่วนลูกบอลในโถจะกลิ้งสลับตำแหน่งไปเรื่อยๆ ไม่หยุดจนกว่าจะกดปุ่ม "จับทีมถัดไป" พอกดแล้วลูกที่จับได้จะสั่นอยู่กับที่ก่อน แล้วค่อยลอยจากตำแหน่งปัจจุบันจริง (ไม่ใช่ตำแหน่งเริ่มต้น) มากลางจอ'
  ],
  '10.22.33': [
    '🎲 AZFUTSALCUP2025: หน้า "จับสลากสด" เปลี่ยนกลไกเป็น 2 ปุ่ม — กด "เขย่าลูกบอล" ก่อน ลูกบอลในโถจะกลิ้งสลับตำแหน่งไปมาแบบเห็นชัดจริงๆ (ไม่ใช่แค่ลอยเบาๆ เหมือนเดิมที่มองแทบไม่เห็นการเคลื่อนไหว) แล้วปุ่มจะเปลี่ยนเป็น "จับทีมถัดไป" ให้กดรับผลลอยออกมากลางจอตามปกติ เขย่าใหม่ทุกครั้งก่อนจับคู่ถัดไป'
  ],
  '10.22.32': [
    '💰 AZFUTSALCUP2025: หน้าแอดมิน "การเงิน" แยกดูตามระดับชั้น ม.ต้น/ม.ปลาย ได้แล้ว พร้อมตัวเลขแจ้งจำนวนรายการที่รอตรวจสอบของระดับชั้นนั้นๆ ให้เห็นชัดเจน'
  ],
  '10.22.31': [
    '🎱 AZFUTSALCUP2025: ปรับหน้า "จับสลากสด" อีกรอบตามฟีดแบ็ก — โถเปลี่ยนเป็นทรงแก้วใสจริง (ขอบโค้งมน มีลายสะท้อนแสง) และแก้บั๊กสำคัญที่ลูกบอลดูค้างนิ่งตอนกดจับ (สาเหตุคือโค้ดเดิมตั้งค่า transform ทับ animation การลอยของลูกบอลโดยตรง เปลี่ยนไปใช้แค่แสงเรืองแทน ลูกบอลลอยต่อเนื่องตลอดการจับ) ผลที่จับได้ตอนนี้ลอยออกจากตำแหน่งจริงในโถ ขยายใหญ่กลางจอ แล้ว "แตกแคปซูล" แยกซ้าย-ขวา เผยชื่อทีมบนกระดาษสีขาวตรงกลาง'
  ],
  '10.22.30': [
    '📝 AZFUTSALCUP2025: ตอนแอดมิน/ผู้จัดกด "ปฏิเสธ" การชำระเงิน เปลี่ยนจากกล่องพิมพ์เหตุผลแบบง่ายๆ เป็นหน้าต่างมีปุ่มข้อความตัวอย่าง 5 แบบให้กดเลือกใช้ได้ทันที (แก้ไขเพิ่มเติมได้ก่อนยืนยัน) เช่น "หลักฐานไม่ชัดเจน" "ยอดเงินไม่ตรง" ฯลฯ หัวหน้าทีมที่ถูกปฏิเสธจะเห็นเหตุผลนี้ทันทีพร้อมปุ่มยืนยันการลงทะเบียนใหม่'
  ],
  '10.22.29': [
    '🎱 AZFUTSALCUP2025: ปรับเอฟเฟกต์หน้า "จับสลากสด" ใหม่ทั้งหมดให้ดูเป็นเวทีจริง — ทีมแสดงเป็นลูกบอลกลมสีสันในโถ ลอยไปมาเรื่อยๆ พอกดจับ ลูกที่ได้จะเรืองแสงแล้วลอยมากลางจอเปิดเผยชื่อทีมค้างไว้ 2-3 วิ ก่อนย่อกลับ พร้อมเพิ่มตัวเลือกลำดับการจับ "ครบคู่ทีละคู่" หรือ "ทีมแรกของทุกคู่ก่อน" — ระหว่างทำเจอบั๊กตำแหน่งลูกบอลหลุดจอ (bit shift ผิดพลาดทำให้บางลูกลอยไปนอกจอ) แก้แล้ว'
  ],
  '10.22.28': [
    '🛡️ หน้า "สรุปยอดเสื้อกีฬาสี": ครูตำแหน่ง "ผู้รับผิดชอบสีนักเรียน" (house_color_admin) เห็นและใช้ส่วน "มอบหมายผู้ดูแลประจำสี" แบบแอดมินเต็มรูปแบบแล้ว (มอบหมาย/ปิดสิทธิ์พ่อสี-แม่สีและนักเรียนสต๊าฟได้ทุกสี, เห็นคิวอนุมัติอัตลักษณ์ประจำสี, เปิด/ปิดฟีเจอร์กีฬาสีได้) โดยไม่ต้องให้สิทธิ์เข้า Admin Dashboard ทั้งระบบ ปพ.5 เพิ่ม'
  ],
  '10.22.27': [
    '🧪 AZFUTSALCUP2025: หน้า "จับสลากสด" เพิ่มตัวเลือก "โหมดทดสอบ" ก่อนเริ่มจับ — ซ้อมด้วยรายชื่อทีมจริงได้เต็มรูปแบบ (แอนิเมชัน/confetti/ทุกอย่างเหมือนจริง) โดยไม่มีการบันทึกผลลงฐานข้อมูลเลย มีแถบเตือนสีส้มกำกับตลอดหน้าจอกันสับสนกับของจริง ส่วนโหมด "จับจริง" ยังคงบันทึกผลทันทีที่ครบคู่เหมือนเดิม'
  ],
  '10.22.26': [
    '🐛 AZFUTSALCUP2025: แก้บั๊กสร้างทีมซ้ำ — กดปุ่ม "สร้างทีม" รัวๆ ตอนเน็ตช้าทำให้เกิดทีมซ้ำหลายแถวได้ (เจอจริง 1 เคส ซ้ำถึง 4 แถว) เพิ่มการล็อกปุ่มระหว่างกำลังสร้าง + บังคับที่ฐานข้อมูลว่านักเรียน 1 คนเป็นหัวหน้าทีมได้แค่ทีมเดียว พร้อมลบทีมซ้ำที่ไม่มีข้อมูล (ไม่มีนักกีฬา/ไม่มีการชำระเงิน) ออกจากระบบแล้ว คงเหลือทีมจริงทีมเดียวไว้ตามเดิม'
  ],
  '10.22.25': [
    '🎬 AZFUTSALCUP2025: เพิ่มฟีเจอร์ "จับสลากสด" สำหรับจัดคู่รอบแรกแบบไลฟ์ — เปิดเผยทีมทีละทีมด้วยแอนิเมชันสล็อตแมชชีน+เอฟเฟกต์ฉลอง สุ่มด้วย crypto RNG ทุกทีมอยู่ในโหลเดียวกันไม่มีข้อยกเว้น บันทึกคู่แข่งลงระบบทันทีที่ครบคู่ (อยู่ในหน้าแอดมิน → ทีม → "🎬 จับสลากสด") พร้อมเพิ่มป้าย "ทีมผู้จัด" ติดได้ที่ทีมของสภานักเรียนเพื่อความโปร่งใส แสดงให้เห็นชัดเจนทุกจุด'
  ],
  '10.22.24': [
    '🐛 ระบบกีฬาสี (AZIZGAMES): แก้บั๊กสำคัญ — ครูตำแหน่ง "ผู้รับผิดชอบสีนักเรียน" ที่กดทางลัด "ระบบกีฬาสี" จากเมนูปกติในหน้าครู เข้าได้แค่แบบผู้เข้าชมทั่วไปเสมอ (ไม่ใช่แอดมิน) เพราะทางลัดนี้ไม่เคยเช็คตำแหน่งเลย ทั้งที่มีอีกจุดหนึ่ง (Supervisor mode) ที่เช็คถูกต้องอยู่แล้ว ตอนนี้ทางลัดนี้เช็คตำแหน่งแล้วเข้าเป็นแอดมินทันทีเหมือนกัน'
  ],
  '10.22.23': [
    '🐛 AZFUTSALCUP2025: แก้บั๊กสำคัญ — กดปุ่ม "ยืนยันการลงทะเบียนและส่งหลักฐาน" รัวๆ (มือถือ/เน็ตช้าตอนอัปโหลด) ทำให้เกิดรายการชำระเงินซ้ำหลายใบต่อทีม เพิ่มการล็อกปุ่มระหว่างอัปโหลด + บังคับที่ฐานข้อมูลว่า 1 ทีมมีได้แค่ 1 รายการชำระเงินเท่านั้น (กันซ้ำแม้เปิดหลายแท็บ/หลายเครื่องพร้อมกัน) และแก้ปุ่ม "ยืนยันการลงทะเบียนอีกครั้ง" หลังถูกปฏิเสธที่ใช้งานไม่ได้จริงเพราะสิทธิ์ฐานข้อมูลไม่ครบ — ระหว่างแก้ไขได้ตรวจสอบและลบข้อมูลซ้ำที่เกิดขึ้นจริงแล้วออกจากระบบ (คงเหลือรายการแรกสุดของแต่ละทีมไว้)'
  ],
  '10.22.22': [
    '⚽ AZFUTSALCUP2025: หัวหน้าทีมอัปโหลดรูปนักกีฬาที่ถ่ายเองได้แล้ว (ปุ่มกล้องเล็กมุมรูปในหน้าจัดการทีม) ระบบบีบอัดรูปให้เล็กลงอัตโนมัติก่อนอัปโหลด รูปที่อัปโหลดเองจะแสดงแทนรูปประจำตัวนักเรียนจากฐานข้อมูลกลางทุกจุด'
  ],
  '10.22.21': [
    '⚽ AZFUTSALCUP2025: หน้า "สถานะทีม" สาธารณะ (ไม่ต้อง login) กดปุ่ม "ดูรายชื่อทีม" ในการ์ดทีมเพื่อดูรายชื่อนักกีฬาทั้งทีมได้ พร้อมรูปนักกีฬาแบบการ์ดขอบมนมีเงาและแสงตกกระทบ + เบอร์เสื้อ'
  ],
  '10.22.20': [
    '✨ ระบบแบบทดสอบออนไลน์ (Quiz): หน้าตรวจสอบ+ยืนยันคำถามที่ AI ช่วยคิด เปลี่ยนจากป๊อบอัพแคบเป็นเต็มหน้าจอ เห็นและเลื่อนดูครบทุกข้อได้สะดวกขึ้น',
    '✏️ ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มปุ่มแก้ไขคำถาม/ตัวเลือกในคลังข้อสอบ แก้ไขคำถามที่เคยสร้างไว้ (ไม่ว่าจะพิมพ์เอง นำเข้า CSV หรือ AI สร้างให้) ได้ภายหลังแล้ว'
  ],
  '10.22.19': [
    '🐛 ระบบแบบทดสอบออนไลน์ (Quiz) แก้บั๊กสำคัญ: ตอบถูกครบข้อที่ 6 (หรือทวีคูณของ 6) ในโหมดคอมโบ/โบนัส จะบันทึกคำตอบไม่สำเร็จ (ระบบพยายามให้โบนัส 2 อย่างพร้อมกันแล้ว error) ทำให้ดูเหมือนกดเลือกคำตอบที่ถูกไม่ได้ — แก้ที่ต้นตอในฐานข้อมูลแล้ว ทดสอบยืนยันผลแล้วว่าใช้งานได้ปกติ'
  ],
  '10.22.18': [
    '⚽ AZFUTSALCUP2025: บันทึกผลการแข่งขันตอนนี้ระบุตัวผู้เล่นได้แล้ว — ปุ่ม "+ เพิ่ม" ที่ผู้ทำประตู/ใบเหลือง/ใบแดง เปิดตัวเลือกผู้เล่นพร้อมรูป พิมพ์เบอร์เสื้อหรือชื่อกรองได้ แทนช่องกรอกจำนวนรวมแบบเดิม ตารางคะแนน/ดาวซัลโว/เงินคืนประกัน/สรุปผลทุกจุดคำนวณจากรายชื่อจริงอัตโนมัติ (ลบรายการที่กดพลาดออกทีละคนได้ด้วย)'
  ],
  '10.22.17': [
    '🐛 ระบบแบบทดสอบออนไลน์ (Quiz): แก้บั๊กปัดหน้าจอลงบนมือถือแล้วระบบรีเฟรชหน้าสอบเองโดยไม่ตั้งใจ (ออกจากหน้าสอบกลางคัน) — เพิ่มการป้องกัน pull-to-refresh ที่หน้าอื่นในระบบมีอยู่แล้วแต่ตกหล่นในหน้าสอบ',
    '🐛 ระบบแบบทดสอบออนไลน์ (Quiz): ปรับจังหวะโหลดสมการคณิตศาสตร์ (LaTeX) ให้แสดงผลก่อนเปิดให้ตอบ ลดโอกาสที่ตัวเลือกจะขยับตำแหน่งขณะกดตอบ (อาจเป็นสาเหตุที่บางครั้งกดตัวเลือกที่ต้องการไม่ได้)'
  ],
  '10.22.16': [
    '⚽ AZFUTSALCUP2025: หน้าแอดมินรวบเมนู 7 แท็บเหลือ 4 ปุ่มไอคอน (⚙️ตั้งค่า/👥ทีม-นักกีฬา/💰การเงิน/🏆แข่งขัน) กดแล้วมีแท็บย่อยสลับในกลุ่มที่มีมากกว่า 1 หน้า, ปุ่ม "ดูหลักฐาน" การชำระเงินเปลี่ยนจากเปิดแท็บใหม่เป็นป๊อบอัพเต็มจอในแอปแทน, และเพิ่มตั้งค่าสีธีม ม.ต้น/ม.ปลาย ให้แอดมินเลือกสีเองได้ในแท็บทั่วไป (มีผลกับปุ่ม/ป้ายที่แยกสีตามระดับชั้นทั้งระบบ)'
  ],
  '10.22.15': [
    '⚽ AZFUTSALCUP2025: ปรับขั้นตอนชำระค่าประกันทีม — นักเรียนกดปุ่ม "ยืนยันการลงทะเบียน" หลังเพิ่มนักกีฬาครบ ระบบจะเด้งป๊อบอัพเต็มจอสรุปรายชื่อ+รูป+เบอร์เสื้อ พร้อม QR พร้อมเพย์ (ตั้งค่าเบอร์ได้ในหน้าแอดมิน) ให้โอนและแนบสลิปในหน้าเดียวจบ ไม่ต้องรอแอดมินตั้งวิธีชำระให้ก่อนเหมือนเดิม (ตัดตัวเลือกจ่ายเงินสดออก เหลือโอนผ่านพร้อมเพย์ทางเดียวเพื่อความเร็ว)'
  ],
  '10.22.14': [
    '⚽ AZFUTSALCUP2025: ปุ่ม "ลงทะเบียนทีม" ตอนยังไม่ login พาไปหน้า login นักเรียนโดยตรง (student-login.html) แทนหน้า login ครู (index.html) เดิม แล้วเด้งกลับมาหน้าฟุตซอลอัตโนมัติหลัง login เหมือนเดิม และย้ายกล่อง "ตั้งค่าการลงทะเบียน" จากแท็บ "เวลา/รางวัล" มาไว้ในแท็บ "ทั่วไป"'
  ],
  '10.22.13': [
    '⚽ AZFUTSALCUP2025: เพิ่มแท็บ "สถานะทีม" ใหม่ ดูรายชื่อทีมทั้งหมดแยก ม.ต้น/ม.ปลาย พร้อมสถานะการชำระเงิน (ยืนยันแล้ว/รอตรวจสอบ/ยังไม่ชำระ) และป้ายทีมสำรอง แบบสาธารณะไม่ต้อง login — ระหว่างทำเจอบั๊กที่สถานะการชำระเงินอ่านไม่ได้เลยถ้าไม่ login (RLS + โค้ดฝั่ง client จำกัดไว้ทั้งคู่) แก้ให้เปิดอ่านสาธารณะแล้ว (ไม่กระทบไฟล์สลิป/ใบเสร็จซึ่งยังต้องผ่านแอดมิน/หัวหน้าทีมเท่านั้น)'
  ],
  '10.22.12': [
    '⚽ AZFUTSALCUP2025: เพิ่มโควตาจำนวนทีมแยก ม.ต้น/ม.ปลาย (ตั้งค่าได้) — ทีมที่ยืนยันการชำระเงินเกินโควตาจะติดป้าย "ทีมสำรอง" อัตโนมัติ ไม่ปิดรับสมัคร ยังลงทะเบียน/ชำระเงินได้ตามปกติ พร้อมตัวเลข "X/Y ทีมยืนยันแล้ว" ในหน้าแอดมิน และแก้ให้กด "ลงทะเบียนทีม" ตอนยังไม่ได้ login จะพากลับมาหน้าฟุตซอลอัตโนมัติหลัง login เสร็จ (เดิมไปโผล่หน้าพอร์ทัลปกติ ต้องกดลิงก์ซ้ำ)'
  ],
  '10.22.11': [
    '⚽ AZFUTSALCUP2025: นักเรียนที่ถูกบันทึกลงทะเบียนแข่งขันแล้ว จะมีปุ่ม "ฟุตซอล" โผล่ในเมนูหลักของหน้าพอร์ทัลนักเรียน (student.html) ให้เปิดระบบได้เองทันที เหมือนที่แอดมินมี — นักเรียนที่ยังไม่ได้ลงทะเบียนจะไม่เห็นปุ่มนี้'
  ],
  '10.22.10': [
    '🐛 หน้า "จัดการสีของฉัน": แท็บ "นักกีฬาในสี"/"ตาราง-ผล"/"คะแนน-เหรียญ" เคยอ่านจากตารางเก่าที่ไม่มีข้อมูลจริง (ว่างเปล่าตลอด) แก้ให้อ่านจากตารางเดียวกับที่ AZIZGAMES บันทึกจริงแล้ว ข้อมูลจะตรงกัน 100%'
  ],
  '10.22.9': [
    '🎨 หน้า "จัดการสีของฉัน": ใบรายชื่อสมาชิกที่พิมพ์ ใช้แบบฟอร์มเดียวกับระบบกีฬาสีหลัก (AZIZGAMES) แล้ว — หัวเอกสารมีปีการศึกษา/ชื่อโรงเรียน แยกพิมพ์ตามระดับชั้น คอลัมน์ไซส์เสื้อ และแถวสูงเท่ากันทุกแถวเหมือนกันเป๊ะ'
  ],
  '10.22.8': [
    '⚽ AZFUTSALCUP2025: หน้าค้นหาหัวหน้าทีม/นักกีฬาตอนลงทะเบียน เปลี่ยนเป็นพิมพ์แล้วกรองแสดงตัวเลือกด้านล่างทันที (เหมือนหน้ามอบสิทธิ์แอดมิน) แทนปุ่มค้นหาแบบเป๊ะทั้งรหัส และแก้บั๊กชื่อทีม/เบอร์เสื้อที่พิมพ์ไว้หายเวลาเลือกผลค้นหา — เพิ่มการป้องกันถอนสิทธิ์แอดมินคนสุดท้ายด้วยไม่ให้ระบบล็อกตัวเองออกโดยไม่ตั้งใจ'
  ],
  '10.22.7': [
    '🐛 ระบบกีฬาสี (AZIZGAMES): ใบรายชื่อพิมพ์ทุกแถวสูงเท่ากันแล้ว (ห้องที่มีคำต่อท้ายชื่อยาวไม่ทำให้แถวสูงขึ้นผิดปกติ) และขยายคอลัมน์ "ชั้น" ให้ชื่อห้องยาวพอดี 1 บรรทัดมากขึ้น'
  ],
  '10.22.6': [
    '🐛 AZFUTSALCUP2025: หน้ามอบสิทธิ์แอดมิน ค้นหาด้วยรหัสนักเรียน/รหัสครูได้แล้ว (เดิมค้นได้แค่ชื่อ) และแก้บัญชีแอดมินสำรอง (aaaaaa) ที่เคยแสดง "(ไม่พบผู้ใช้)" ในรายชื่อสิทธิ์ ให้แสดงชื่อยูสเซอร์เนมแทน'
  ],
  '10.22.5': [
    '⚽ AZFUTSALCUP2025: เพิ่มระบบ login แอดมินแยกต่างหาก (ยูสเซอร์เนม/รหัสผ่านเริ่มต้น aaaaaa/aaaaaa) สำหรับกดปุ่มเฟืองเข้าระบบได้ทันทีโดยไม่ต้องมีบัญชี ปพ.5 — รหัสผ่านตรวจสอบฝั่งเซิร์ฟเวอร์ผ่าน Supabase Auth จริง ไม่ได้เก็บรหัสผ่านแบบข้อความล้วนไว้ในฐานข้อมูลที่เปิดอ่านสาธารณะ แก้ยูสเซอร์เนม/รหัสผ่านทีหลังได้ในหน้าตั้งค่า'
  ],
  '10.22.4': [
    '🐛 ระบบกีฬาสี (AZIZGAMES): แก้หัวใบรายชื่อ/เกียรติบัตรที่พิมพ์ยังเป็นปีการศึกษา 2568 (ปีที่แล้ว) — เพิ่มช่องตั้งค่าปีการศึกษา+ชื่อโรงเรียนในหน้า "ตั้งค่าระบบ" แล้ว และแก้บั๊กหน้าโลโก้/ชื่อเรื่องแยกออกจากตารางตอนพิมพ์ PDF'
  ],
  '10.22.3': [
    '🐛 ระบบกีฬาสี (AZIZGAMES): เปลี่ยนชื่อปุ่มแอดมิน "แจ้งไซส์เสื้อนักเรียน" เป็น "แจ้งไซส์เสื้อกีฬาสี" ลดความสับสนกับ toggle "รับจำนงไซซ์เสื้อ" ที่เป็นคนละฟีเจอร์กัน'
  ],
  '10.22.2': [
    '⚽ AZFUTSALCUP2025: เพิ่มสวิตช์ "เปิดรับสมัครทีม" ในหน้าตั้งค่าแอดมิน — เมื่อเปิด จะมีปุ่ม "ลงทะเบียนทีม" เด่นๆ ในหน้าตารางให้นักเรียนทั่วไป (หัวหน้าทีม) สมัครเองได้ทันที ไม่ต้องมองหาไอคอนเล็กๆ'
  ],
  '10.22.1': [
    '🐛 ระบบกีฬาสี (AZIZGAMES): แก้บั๊กรายชื่อนักเรียนแสดงไม่ครบในใบรายชื่อประจำสี — เดิมโหลดข้อมูลนักเรียนได้แค่ 1,000 คนแรกจากทั้งหมด 2,726 คน (Supabase ตัดผลลัพธ์เงียบๆ เกิน 1,000 แถวต่อ query) ตอนนี้โหลดครบทุกคนแล้ว'
  ],
  '10.22.0': [
    '⚽ ปรับ AZFUTSALCUP2025 หลายจุด: เปิดเป็นหน้าต่างเต็มจอในแท็บเดิม (เหมือนระบบกีฬาสี) แทนการเปิดแท็บใหม่, แอดมินเข้าหน้าลงทะเบียน/จัดการทีมได้แล้ว (เดิมเข้าได้เฉพาะนักเรียนที่เป็นหัวหน้าทีม), เพิ่มการระบุ "รองหัวหน้าทีม" ในทีม, หน้าแอดมิน→ทีม เปลี่ยนจากเพิ่มทีมด้วยชื่อเปล่าๆ เป็นลิงก์เข้าสู่การลงทะเบียนทีมแบบเต็ม (ต้องระบุหัวหน้าทีมเสมอ)'
  ],
  '10.21.100': [
    '🐛 แก้ AZFUTSALCUP2025 เข้าไม่ได้จากหน้า Admin Dashboard: (1) azfutsal.html ไม่ถูกลงทะเบียนใน vite build config เลย ทำให้ deploy รอบก่อนไม่มีไฟล์นี้ในเว็บจริง (2) เพิ่มลิงก์เมนู "AZFUTSALCUP2025" ในไซด์บาร์ dashboard.html (ไซด์บาร์นี้แยกจากเมนูโหมดหัวหน้าในหน้าครูที่เพิ่มไปรอบก่อน)'
  ],
  '10.21.99': [
    '⚽ เพิ่มระบบ AZFUTSALCUP2025 (การแข่งขันฟุตซอลนักเรียนชาย) — ระบบแยกจากกีฬาสีทั้งหมด: ตาราง/สถิติทีม/สรุปผล+เกียรติบัตรดูได้สาธารณะ, หัวหน้าทีมล็อกอินลงทะเบียนนักกีฬา+ชำระค่าประกันทีม (สลิปโอน/ใบเสร็จเงินสด), แอดมินตรวจสอบการชำระเงิน+มอบสิทธิ์แอดมินให้ครู/นักเรียนได้เอง — เข้าได้จากเมนู "AZFUTSALCUP2025" ในหน้าครู (โหมดหัวหน้า/แอดมิน)'
  ],
  '10.21.98': [
    '🐛 ระบบกีฬาสี (AZIZGAMES): แก้การ์ด "นักกีฬารวมของสี" ในแดชบอร์ดให้นับจากยอดลงทะเบียนจริง แทนสูตรประมาณค่าเดิม'
  ],
  '10.21.97': [
    '🏆 ระบบกีฬาสี (AZIZGAMES): เพิ่มปุ่มสลับโหมดสว่าง/มืดที่แถบบนสุด + คลิกการ์ดตัวเลขในแดชบอร์ดเพื่อไปหน้าที่เกี่ยวข้องได้ทันที'
  ],
  '10.21.96': [
    '🏆 ครูตำแหน่ง "ผู้รับผิดชอบสีนักเรียน" เปิด "ระบบกีฬาสี" จากหน้าครู แล้วเข้าเป็นแอดมิน AZIZGAMES ได้ทันที ไม่ต้องกรอกรหัสผ่านแอดมินซ้ำอีกครั้ง'
  ],
  '10.21.95': [
    '🔴 ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มตั้งค่า "แสดงป้ายเตือน + ข้อความนาซีฮัตก่อนเริ่มสอบ" — ครูเปิด/ปิดได้ต่อแบบทดสอบ แสดงข้อความห้ามมองจอที่สอง/หนังสือ พร้อมขอบแดงระหว่างทำข้อสอบ (อิงจากระบบตรวจจับการออกนอกหน้าสอบที่มีอยู่จริง ไม่ได้อ้างความสามารถที่ไม่มีจริง)'
  ],
  '10.21.94': [
    '🎨 หน้าสุ่มจัดกลุ่ม: ปรับดีไซน์การ์ดกลุ่ม/แถวนักเรียน/ปุ่มย้ายกลุ่มให้ทันสมัยขึ้น (gradient, hover, badge, ไอคอนกลุ่มว่าง)'
  ],
  '10.21.93': [
    '🐛 หน้าสุ่มจัดกลุ่ม: แก้ชื่อนักเรียนแสดงไม่ครบ (โดนบีบเหลือแค่ "น...") เมื่อการ์ดกลุ่มแคบ — แยกชื่อกับปุ่มเลือกกลุ่มออกเป็นคนละบรรทัดแล้ว'
  ],
  '10.21.92': [
    '🐛 หน้า "นักเรียนที่ปรึกษา": แก้ปุ่มลัด "บันทึกคะแนนการอ่าน" ที่โผล่มาผิด — เดิมขึ้นให้ทุกคน ที่ถูกต้องคือเฉพาะครูที่สอนวิชาภาษาไทยเท่านั้น'
  ],
  '10.21.91': [
    '👥 หน้า "นักเรียนที่ปรึกษา" ปรับปรุงใหญ่: เพิ่มแท็บ "รายชื่อ" ให้ครูที่ปรึกษารีเซ็ตรหัสผ่านนักเรียนในห้องตัวเองได้เลย (ไม่ต้องรอแอดมิน) และลบนักเรียนที่ออกแล้ว/ไม่ได้อยู่ห้องนี้จริงออกจากรายชื่อได้ (ไม่ลบประวัติคะแนน/เช็คชื่อ) พร้อมปุ่มลัดไปหน้าบันทึกคะแนนละหมาด/ทักษะชีวิต/การอ่าน — เปิดใช้งานสำหรับครูที่ปรึกษาชั้นศาสนาด้วยแล้ว (เดิมมีแค่สามัญ)'
  ],
  '10.21.90': [
    '🔥 ระบบแบบทดสอบออนไลน์ (Quiz) โหมดคอมโบ/โบนัส: เพิ่มป้ายแสดงจำนวนข้อที่ตอบถูกต่อเนื่องแบบเห็นตลอด พร้อมข้อความให้กำลังใจตั้งสติเมื่อตอบผิด',
    '⏱️ ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มแถบเวลาถอยหลังเฉลี่ยต่อข้อ (คำนวณจากเวลารวมหารจำนวนข้อ) ช่วยจับจังหวะไม่ให้ติดข้อใดข้อหนึ่งนานเกินไป — เป็นแค่แนวทาง ไม่ตัดคะแนนหรือบังคับเลื่อนข้อ'
  ],
  '10.21.89': [
    '📝 ระบบแบบทดสอบออนไลน์ (Quiz): เปิดให้ครูทุกคนสร้างคลังข้อสอบ/ตั้งค่าแบบทดสอบได้ไม่จำกัดแล้ว — ที่ยัง gate ครูทั่วไป (ยังไม่โดเนทระดับ 2+) คือขั้น "เริ่มสอบจริง" ให้นักเรียนทำเท่านั้น ใช้ได้ตามโควตาทดลองฟรีที่แอดมินตั้งได้ (ค่าเริ่มต้น 2 ครั้ง) ในหน้าตั้งค่าระบบ',
    '📝 ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มปุ่ม "🧪 ทดลองทำข้อสอบ" ให้ครูลองทำแบบทดสอบของตัวเองเหมือนนักเรียนได้ไม่จำกัดจำนวนครั้ง ไม่นับเป็นการสอบจริงและไม่กระทบโควตา/คะแนนใดๆ'
  ],
  '10.21.88': [
    '📝 ระบบแบบทดสอบออนไลน์ (Quiz): เมื่อทำสอบครั้งที่ 2 ขึ้นไป นักเรียนเห็นประวัติคะแนนครั้งก่อนหน้าก่อนเริ่ม และเมื่อทำครบทุกครั้งแล้วมีสรุปคะแนนทุกครั้งพร้อมระบุว่าครั้งไหนถูกใช้เป็นคะแนนจริง',
    '📝 ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มปุ่ม "กลับหน้าภาพรวม" หลังส่งคำตอบเสร็จ',
    '📝 ระบบแบบทดสอบออนไลน์ (Quiz): โหมดล็อกคำตอบ — ตอบผิดแล้วเลื่อนไปข้อถัดไปให้อัตโนมัติ และปุ่ม "ส่งคำตอบ" จะปรากฏเฉพาะข้อสุดท้ายเท่านั้น'
  ],
  '10.21.87': [
    '📝 นักเรียน: หน้าภาพรวมมีการ์ดแจ้งเตือนทันทีเมื่อมีแบบทดสอบที่ครูเปิดสอบอยู่ กดเข้าสอบได้เลยจากหน้าแรกไม่ต้องเข้าไปที่รายวิชาก่อน — การ์ดจะหายไปเองเมื่อครูปิดสอบแล้ว'
  ],
  '10.21.86': [
    '🎮 ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มตั้งค่า "ล็อกคำตอบทันทีที่เลือก" และ "เปิดเอฟเฟกต์ถูก/ผิดทันที + ระบบคอมโบ/โบนัส" — ตอบถูกติดกัน 3 ข้อ ปลดล็อกโบนัส (50/50 ตัดตัวเลือกผิด, ย้อนแก้ข้อที่เคยผิด, ต่อเวลา +30 วิ) ครบ 6 ข้อ ได้โบนัสเปิดเฉลยเพิ่ม พร้อมป๊อบอัพฉลองทุกครั้งที่ได้โบนัส',
    '📊 ระบบแบบทดสอบออนไลน์ (Quiz): หน้าดูสดของครูมีสถิติรายข้อแบบเรียลไทม์เมื่อเปิดโหมดล็อกคำตอบทันที เห็นได้เลยว่าข้อไหนเด็กทำถูก/ผิดเยอะระหว่างที่ยังสอบอยู่'
  ],
  '10.21.85': [
    '📅 การ์ด "กิจกรรมใกล้ถึง" ในหน้าภาพรวมของคุณครู: เพิ่มป้ายบอกว่ากิจกรรม/กำหนดส่งนั้นตรงกับสัปดาห์ที่เท่าไรของภาคเรียน'
  ],
  '10.21.84': [
    '📅 หน้าภาพรวมของคุณครู: เพิ่มการ์ด "กิจกรรมใกล้ถึง" ใต้ปุ่มเวร แสดงรายการจากปฏิทินปฏิบัติงานที่ใกล้ถึงภายใน 14 วัน พร้อมนับถอยหลังวัน/วินาทีแบบสด และการ์ดจะเปลี่ยนเป็นสีแดงเมื่อใกล้ถึงเวลามาก'
  ],
  '10.21.83': [
    '🛠️ ปฏิทินปฏิบัติงาน: แก้บั๊กครูที่มีสิทธิ์แก้ไข (ตั้งค่าในหน้าสิทธิ์และบทบาท) ยังเข้าได้แค่หน้าดูอย่างเดียวเมื่อคลิกจากเมนูหลัก — ลิงก์เมนูหลักเปิดหน้าดูอย่างเดียวเสมอไม่ว่าจะมีสิทธิ์แก้ไขหรือไม่ ตอนนี้เช็คสิทธิ์แล้วเปิดหน้าแก้ไข (เพิ่ม/แก้ไข/ลบ) ให้อัตโนมัติสำหรับผู้ที่มีสิทธิ์'
  ],
  '10.21.82': [
    '🔐 นักเรียน: ป๊อบอัพเชื่อมอีเมลส่วนตัวเพิ่มปุ่ม "Sign in with Google" เลือกบัญชี Google ที่ล็อกอินอยู่ในเครื่องได้เลย ไม่ต้องพิมพ์เอง (ยังพิมพ์เองได้เหมือนเดิมถ้าไม่สะดวก)'
  ],
  '10.21.81': [
    '🔴 ระบบแบบทดสอบออนไลน์ (Quiz): ป๊อบอัพแจ้งเตือนออกนอกหน้าสอบ เปลี่ยนเป็นสไตล์สีแดงอันตรายให้เห็นชัดเจนขึ้น',
    '📊 ระบบแบบทดสอบออนไลน์ (Quiz): คะแนนที่บันทึกเข้าคอลัมน์คะแนนที่ครูเลือกไว้ หากคอลัมน์นั้นมีคะแนนเดิมอยู่แล้ว ระบบจะเก็บคะแนนที่สูงกว่าไว้อัตโนมัติ ไม่เขียนทับให้คะแนนต่ำลง'
  ],
  '10.21.80': [
    '🔒 ระบบแบบทดสอบออนไลน์ (Quiz): แก้บั๊ก anti-cheat ตรวจไม่จับตอนนักเรียนใช้ iPad แบ่งหน้าจอ (Split View/Slide Over) — เพราะหน้าสอบยังมองเห็นได้อยู่ (ไม่ hidden) และ iOS Safari ไม่รองรับ Fullscreen API เต็มรูปแบบ เพิ่มการตรวจจับ window blur (หลุดโฟกัส) + ตรวจซ้ำเป็นระยะด้วย document.hasFocus() เป็นตัวช่วยสำรอง ครอบคลุมกรณีที่ตรวจไม่พบมาก่อน'
  ],
  '10.21.79': [
    '📧 นักเรียน: เพิ่มป๊อบอัพชวนเชื่อมอีเมลส่วนตัวหลัง login (เด้งทุกครั้งจนกว่าจะเชื่อม) เผื่อลืมรหัสผ่านในอนาคตจะกู้คืนได้เองทันทีไม่ต้องรอครู — ช่องกรอกอีเมลรองรับ autofill จากเบราว์เซอร์แล้ว'
  ],
  '10.21.78': [
    '🔒 แก้บั๊กสำคัญ: แอดมินตั้ง/รีเซ็ตรหัสผ่านนักเรียนไม่เคยสำเร็จจริงมาตลอด (เรียกฟังก์ชันเข้ารหัสผิด schema) — แก้แล้ว พร้อมเพิ่มความสามารถใหม่ให้แอดมินสร้างบัญชีให้นักเรียนที่ยังไม่เคยเปิดใช้งานได้เลยจากหน้าแก้ไขข้อมูล ไม่ต้องรอนักเรียนเปิดเอง มีปุ่ม "= รหัสนักเรียน" ให้ตั้งรหัสผ่านเริ่มต้นแบบเร็วๆ ด้วย'
  ],
  '10.21.77': [
    '🎁 ปุ่ม "อัปเกรดระดับผู้สนับสนุน" ใช้งานได้จริงแล้ว (เดิมกดแล้วไม่มีอะไรเกิดขึ้น) ระดับคำนวณจากยอดสะสมทุกครั้งที่โดเนทรวมกัน ไม่ใช่แค่ครั้งล่าสุด — โอนแค่ส่วนต่างที่ระบบคำนวณให้ก็ขยับระดับได้เลย'
  ],
  '10.21.76': [
    '✨ ระบบแบบทดสอบออนไลน์ (Quiz): โหมด "คัดลอกคำสั่งไปใช้ AI อื่น" รองรับให้เลือกรูปแบบคำตอบ JSON หรือ CSV, ไม่จำกัดจำนวนข้อ (ต่างจากโหมด AI ในระบบที่จำกัด 25 ข้อ), และสั่งให้ AI ห่อคำตอบทั้งหมดไว้ในกล่องโค้ดเดียวเพื่อกดคัดลอกได้ง่ายจากหน้าแชท — ระบบตรวจับรูปแบบคำตอบที่วางมาให้อัตโนมัติ'
  ],
  '10.21.75': [
    '✨ ระบบแบบทดสอบออนไลน์ (Quiz): AI ช่วยคิดข้อสอบ เพิ่มโหมด "คัดลอกคำสั่งไปใช้ AI อื่น" — สร้างคำสั่ง (prompt) พร้อมระบุหัวข้อ/จำนวนข้อ/จำนวนตัวเลือกต่อข้อ ให้คัดลอกไปวางใน ChatGPT, Gemini หรือ AI อื่นที่ต้องการ แล้ววางคำตอบกลับมาแปลงเป็นคำถามร่างในระบบ ตรวจสอบและแก้ไขทุกอย่างก่อนบันทึกได้เหมือนโหมด AI ในระบบทุกประการ'
  ],
  '10.21.74': [
    '🔒 ระบบแบบทดสอบออนไลน์ (Quiz): แก้บั๊กความปลอดภัย — ครูที่ไม่เคยโดเนทแต่ได้รับสิทธิ์ฟรีจากโรงเรียน (school_sponsored) หรือโดเนทเพียงเล็กน้อย (ต่ำกว่าระดับ 2) สามารถเข้าใช้งานได้ ทั้งที่ตั้งใจให้เฉพาะผู้สนับสนุนระดับ 2+ เท่านั้น — เปลี่ยนเงื่อนไขให้เช็คระดับผู้บริจาคโดยตรง ไม่พึ่ง hasSemester อีกต่อไป'
  ],
  '10.21.73': [
    '🎉 ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มลูกเล่นแบบเกม — นักเรียนเห็นอันดับตัวเองเทียบเพื่อนในห้อง (ไม่เห็นชื่อ/คะแนนคนอื่น) พร้อมคอนเฟตติเฉลิมฉลองตามคะแนนหลังส่งข้อสอบ และครูเห็นลีดเดอร์บอร์ดเต็มในหน้าสถิติ'
  ],
  '10.21.72': [
    '🖼️ ระบบแบบทดสอบออนไลน์ (Quiz): แดชบอร์ดดูสดระหว่างสอบ แสดงรูปนักเรียนในกรอบมนแนวตั้ง มีเงาและแสงกระทบให้มีมิติ ต่อคนแล้ว'
  ],
  '10.21.71': [
    '🛠️ ระบบแบบทดสอบออนไลน์ (Quiz): แก้บั๊กหน้าทำข้อสอบ (quiz-exam.html) ขึ้น 404 บน GitHub Pages — ลืมลงทะเบียนเป็น build entry point ใน vite.config.js ทำให้ตอน deploy ไม่ถูกรวมเข้า dist/ นักเรียนกดเข้าสอบไม่ได้เลย'
  ],
  '10.21.70': [
    '🌐 Prompt AI: แยกภาษาของ "คำสั่ง" (คงเป็นไทยเสมอ) ออกจากภาษาของ "เนื้อหาที่สร้างจริง" (แผนการสอน/ใบงาน/ข้อความในภาพ) ให้ชัดเจนขึ้น แทนคำสั่งกว้างๆ แบบเดิมที่อาจทำให้หัวข้อโครงสร้างถูกแปลไปด้วย'
  ],
  '10.21.69': [
    '🛠️ ระบบแบบทดสอบออนไลน์ (Quiz): แก้บั๊ก "AI ช่วยคิดข้อสอบ" ตอบไม่ครบ/ไม่ใช่ JSON เมื่อขอจำนวนข้อเยอะ (เช่น 30 ข้อ) — บังคับเพดานจริง 25 ข้อ/ครั้ง และขยาย token budget ให้ยืดหยุ่นตามจำนวนข้อ พร้อมข้อความแจ้งเตือนที่ชัดเจนขึ้น'
  ],
  '10.21.68': [
    '✨ ระบบแบบทดสอบออนไลน์ (Quiz): เพิ่มปุ่ม "AI ช่วยคิดข้อสอบ" ในหน้าคลังข้อสอบ — ระบุหัวข้อ+จำนวนข้อ ให้ Gemini ร่างคำถามเป็นแบบร่างที่แก้ไขได้ ครูต้องกดยืนยันความถูกต้องทีละข้อก่อนบันทึกเข้าคลังจริงเสมอ'
  ],
  '10.21.67': [
    '💬 ประกาศ: กดที่ยอด "ความคิดเห็น" ในหน้าจัดการประกาศ (แอดมิน/หัวหน้าตำแหน่งอื่นๆ) เพื่อเปิดดูข้อความความคิดเห็นทั้งหมดพร้อมชื่อผู้แสดงความเห็นได้แล้ว มีปุ่มลบความคิดเห็นที่ไม่เหมาะสม'
  ],
  '10.21.66': [
    '📊 ประกาศ: แอดมินและหัวหน้า/ผู้บริหารตำแหน่งอื่นๆ เห็นยอด ❤️ ถูกใจ / 💬 ความคิดเห็น / 👁️ เข้าดู เป็นตัวเลขในหน้าจัดการประกาศของตัวเองแล้ว'
  ],
  '10.21.65': [
    '📝 ฟีเจอร์ใหม่ (ผู้สนับสนุนระดับ 2+): ระบบแบบทดสอบออนไลน์ — สร้างคลังข้อสอบไม่จำกัดจำนวนข้อ (พิมพ์เอง/นำเข้า CSV/รองรับสมการ LaTeX), ตั้งค่าสุ่มข้อ-สลับตัวเลือก-จำกัดจำนวนครั้งทำ, ครูกดเริ่มสอบเองแบบพร้อมกันทั้งห้อง, ระบบป้องกันออกนอกหน้าสอบ (เตือนครั้งที่ 1 ตัดจบครั้งที่ 2 พร้อมให้ครูปลดล็อกเลือกทำต่อ/เริ่มใหม่ได้), แดชบอร์ดดูสดระหว่างสอบ, สถิติวิเคราะห์รายข้อหลังสอบ, ผูกคะแนนเข้าคอลัมน์คะแนนเดิมอัตโนมัติ'
  ],
  '10.21.64': [
    '❤️ ประกาศ: ครูกดถูกใจและแสดงความคิดเห็นใต้ประกาศได้แล้ว พร้อมแสดงยอดเข้าดู (👁️ เข้าดูแล้วกี่คน) ในทุกประกาศที่ครูเห็น'
  ],
  '10.21.63': [
    '🖼️ ประกาศ (หัวหน้า/ผู้บริหารตำแหน่งอื่นๆ): อัปโหลดรูปภาพแนบประกาศได้แล้วเช่นเดียวกับแอดมิน'
  ],
  '10.21.62': [
    '🖼️ ประกาศ (แอดมิน): อัปโหลดรูปภาพแนบประกาศได้แล้ว (เช่น อินโฟกราฟิก) แสดงเป็นภาพจริงในหน้าประกาศของครูทันที ไม่ใช่แค่ลิงก์ไฟล์แนบ'
  ],
  '10.21.61': [
    '🎁 Prompt AI: เพิ่มสิทธิ์ทดลองใช้งานฟรี (ค่าเริ่มต้น 1 ครั้งตลอดชีพ) สำหรับครูที่ยังไม่ถึงระดับผู้สนับสนุนที่กำหนด — แอดมินปรับจำนวนครั้งได้เองที่ตั้งค่าระบบ → โควตาทดลองใช้งานฟรี'
  ],
  '10.21.60': [
    '📐 Prompt AI: สั่งให้ AI เขียนสมการ/สูตรด้วยรูปแบบ LaTeX โดยอัตโนมัติเมื่อเนื้อหาวิชานั้นเกี่ยวข้องกับสมการ เพื่อความถูกต้องแม่นยำ'
  ],
  '10.21.59': [
    '🖼️ Prompt AI: สื่อ/เอกสารประกอบ (ใบงาน, สไลด์, คำถาม, Rubric, เกม) เปลี่ยนเป็นคำสั่งสร้างภาพ (Image Generation Prompt) แทนข้อความ พร้อมกติกาแบ่งหน้า A4/16:9 และคำแนะนำให้ใช้กับ AI สร้างภาพ (แนะนำ ChatGPT โหมดสร้างรูปภาพ)',
    '🖼️ Prompt AI: เพิ่มคำสั่งสร้างภาพสรุปแผนการจัดการเรียนรู้แบบหน้าเดียว (One-Page Lesson Plan) มาให้อัตโนมัติทุกครั้ง'
  ],
  '10.21.58': [
    '✍️ Prompt AI: สั่งให้ AI แยกใบงาน/ใบกิจกรรม/แบบฝึกหัดที่เลือกไว้เป็นคนละกล่องโค้ด คัดลอกไปใช้ทีละอันได้สะดวกขึ้น',
    '📄 Prompt AI: เพิ่มขั้นตอนวางคำตอบที่ได้จาก AI แล้วดาวน์โหลดเป็นไฟล์ Word (.doc) เพื่อนำไปแก้ไขต่อได้ทันที'
  ],
  '10.21.57': [
    '🐛 ป้องกันบั๊กยอดตกหล่นเกิน 1,000 แถวเชิงรุกอีก 2 จุด: หน้า "สรุปยอดเสื้อกีฬาสี" และแท็บ "ไซซ์เสื้อ" ในหน้า "จัดการสีของฉัน" (ยังไม่ถึง 1,000 แถวจริง แต่แก้ดักไว้ก่อนเพราะข้อมูลจะโตตามจำนวนนักเรียนที่ส่งจำนงไซซ์เสื้อ)'
  ],
  '10.21.56': [
    '🐛 แก้บั๊กสำคัญ: หน้า "ผลโหวตแบบเสื้อกีฬาสี" และแท็บ "โหวต" ของครูที่ปรึกษา นับยอดโหวตตกหล่นเมื่อมีมากกว่า 1,000 โหวต (ตัดข้อมูลเงียบตามลิมิตดีฟอลต์ของฐานข้อมูล) — ตอนนี้ดึงข้อมูลครบทุกแถวแล้ว'
  ],
  '10.21.55': [
    '✍️ Prompt AI: เพิ่มช่อง "จำนวนคาบ" และ "นาทีต่อคาบ" ให้ครูกำหนดเอง แทนค่าตายตัว 50 นาที',
    '☪️ Prompt AI: วิชากลุ่มศาสนาสลับไปใช้หลักสูตรอิสลามศึกษา พ.ศ. 2551 แทนหลักสูตรแกนกลางโดยอัตโนมัติ',
    '📎 Prompt AI: เลือกสื่อ/เอกสารประกอบ (ใบงาน, สไลด์, คำถามกระตุ้นคิด, Rubric, เกม) ที่ติ๊กค่าเริ่มต้นให้ตามรูปแบบการสอนที่เลือก'
  ],
  '10.21.54': [
    '✍️ เพิ่มฟีเจอร์ "Prompt AI" สำหรับผู้สนับสนุนระดับ 1+ — สร้าง Prompt แผนการสอนพร้อมข้อมูลวิชา/ห้อง/นักเรียนอัตโนมัติ เลือกรูปแบบการสอนและภาษา (ไทย/อังกฤษ/อาหรับ/มลายูรูมี/มลายูยาวี) แล้วคัดลอกไปใช้กับ AI ส่วนตัวได้เลย'
  ],
  '10.21.53': [
    '🔊 เสียงสแกนละหมาด (ALHAMDULILLAH/ASTAHKFIRULLAH/MASYAALLAH) เลือกเสียงชาย/หญิงอัตโนมัติตามเพศของนักเรียนที่สแกน'
  ],
  '10.21.52': [
    '📋 เติมบันทึกการเปลี่ยนแปลงที่ตกหล่นของเวอร์ชัน 10.21.50-51 (ครูทุกคนออกใบอนุญาตออกห้องแทนได้ + เปลี่ยนเสียงสแกนละหมาดเป็นเสียงพูด)'
  ],
  '10.21.51': [
    '🔊 เปลี่ยนเสียงแจ้งเตือนหน้าสแกนละหมาดจากเสียง beep เป็นเสียงพูดจริง: สแกนผ่าน = "ALHAMDULILLAH", สแกนไม่ผ่าน/ผิดจุด = "ASTAHKFIRULLAH", สแกนซ้ำ = "MASYAALLAH" — ดังเท่ากันทุกกรณี (ระดับเสียงสูงสุด) เพราะสแกนในที่ที่มีนักเรียนหมู่มาก'
  ],
  '10.21.50': [
    '🚪 ครูทุกคนออกใบอนุญาตออกนอกห้องแทนครูผู้สอนได้แล้ว (เช่น กรณีนักเรียนไปขอครูเวรหรือครูท่านอื่น) ผ่านหน้าตรวจสอบใบอนุญาตออกนอกห้อง — ต้องกรอกรหัสครูยืนยันตัวตนผู้ออกจริง ไม่นับรวมโควต้าจำนวนคนออกพร้อมกันของห้องเรียนใด แต่ยังนับรวมในโควต้ารายสัปดาห์ของนักเรียนตามปกติ'
  ],
  '10.21.49': [
    '🧾 ปรับใบเสร็จ 2 ส่วน (ต้นขั้ว/มอบให้นักเรียน) ให้อยู่แนวเดียวกันซ้าย-ขวา คั่นด้วยรอยประแนวตั้งตรงกลาง แทนแบบเรียงบนล่าง — พิมพ์ใส่กระดาษ A4 แล้วตัดเป็นแถวได้เลย'
  ],
  '10.21.48': [
    '🧾 ปรับหน้า "ประวัติออก QR Code" กลับมาเป็นแถบ (แท็บ) ภายในหน้าพิมพ์ QR Code เดิม แทนที่จะแยกเป็นเมนูซ้ายต่างหาก',
    '🧾 ใบเสร็จออก QR ใหม่แยกเป็น 2 ส่วนชัดเจน: ต้นขั้ว (โรงเรียนเก็บ) และส่วนมอบให้นักเรียน มีรอยประให้ตัดแบ่ง',
    '🔒 แก้ไข/ลบประวัติออก QR ใหม่ได้เฉพาะแอดมิน — ครูทั่วไปดูและออก QR/ใบเสร็จซ้ำได้อย่างเดียว'
  ],
  '10.21.47': [
    '🧾 แยกหน้า "ประวัติออก QR Code" ออกมาเป็นเมนูของตัวเองในแถบเมนู (ทั้งฝั่งครูและแอดมิน) แทนที่จะฝังอยู่ในหน้าพิมพ์ QR Code',
    '🗑️ เพิ่มปุ่มลบประวัติต่อรายการ (มีป๊อบอัพยืนยันก่อนลบเสมอ)'
  ],
  '10.21.46': [
    '🐛 แก้บั๊กสำคัญ: ออก QR Code ใหม่จากหน้า Admin Dashboard แล้วไม่ขึ้นป๊อบอัพถามพิมพ์ใบเสร็จ — สาเหตุคือบันทึกสถิติไม่สำเร็จเพราะฝั่ง Admin ไม่ได้ผูกกับครูคนใดคนหนึ่ง ตอนนี้รองรับกรณีออกจาก Admin แล้ว (แสดงชื่อผู้ออกเป็น "แอดมิน")'
  ],
  '10.21.45': [
    '📋 เติมบันทึกการเปลี่ยนแปลงของเวอร์ชัน 10.21.42-44 ที่ตกหล่นไป (ฟีเจอร์ QR Code + แก้บั๊กสิทธิ์ดูโหวตเสื้อกีฬาสี)'
  ],
  '10.21.44': [
    '🧾 หน้า "พิมพ์ QR Code นักเรียน": เพิ่มส่วนประวัตินักเรียนที่มาติดต่อออก QR ใหม่ ค้นหาได้ พร้อมปุ่มออก QR ซ้ำ/ออกใบเสร็จซ้ำ/แก้ไขเหตุผลต่อรายการ',
    '🧾 ปรับใบเสร็จ: ตัดหัวข้อ/จำนวนใบด้านบนออก เพิ่มช่องลงชื่อ "ผู้ออกให้" และแสดงค่าธรรมเนียม (ตั้งค่าได้ที่ Settings → นักเรียน)',
    '🖨️ พิมพ์รายบุคคล: แยกขั้นตอนพิมพ์ QR ก่อน แล้วป๊อบอัพถามว่าจะพิมพ์ใบเสร็จต่อหรือไม่'
  ],
  '10.21.43': [
    '🧾 เพิ่มระบบบันทึกสถิติออก QR Code ใหม่ให้นักเรียน (กรณีทำหาย/ชำรุด) พร้อมพิมพ์ใบเสร็จรับแนบไปกับ QR ในหน้า "พิมพ์ QR Code นักเรียน" โหมดรายบุคคล'
  ],
  '10.21.42': [
    '🔧 แก้ปัญหาครูที่ได้รับสิทธิ์ดูผลโหวตเสื้อกีฬาสีแล้วเข้าหน้าไม่ได้ — เปลี่ยนไปใช้ระบบตรวจสิทธิ์ที่ปลอดภัยกว่าเดิม'
  ],
  '10.21.41': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: แก้ปัญหาจริงของกรอบวงกลมรอบโลโก้ — เดิมเข้าใจผิดว่าต้องลดขนาดโลโก้ลงเรื่อยๆ ที่จริงต้องครอบตัดภาพให้เต็มกรอบ (crop-to-fill) กันพื้นหลังของไฟล์โลโก้โผล่ให้เห็นระหว่างขอบกับกรอบ คืนขนาดโลโก้กลับเป็นปกติแล้ว'
  ],
  '10.21.40': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: ปรับกรอบวงกลมรอบโลโก้ให้แคบกระชับยิ่งขึ้นอีก (18mm→16mm) ตามที่ขอ'
  ],
  '10.21.39': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: ปรับกรอบวงกลมรอบโลโก้ให้แคบกระชับยิ่งขึ้นอีก (20mm→18mm) ตามที่ขอ'
  ],
  '10.21.38': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: ปรับกรอบวงกลมรอบโลโก้ให้แคบกระชับยิ่งขึ้นอีก (21mm→20mm) ตามที่ขอ'
  ],
  '10.21.37': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: ปรับกรอบวงกลมรอบโลโก้ให้แคบกระชับยิ่งขึ้นอีก (23mm→21mm) ตามที่ขอ'
  ],
  '10.21.36': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: กรอบวงกลมรอบโลโก้ที่เพิ่งใส่ไปกว้างเกินไป ปรับให้แคบกระชับพอดีขอบโลโก้และเส้นขอบบางลงแล้ว'
  ],
  '10.21.35': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: เพิ่มกรอบวงกลมล้อมรอบโลโก้สถานศึกษาให้ดูเป็นทางการขึ้น'
  ],
  '10.21.34': [
    '🎓 เอกสาร ปพ.5 สามัญปวช. แก้ 3 จุดสำคัญ: (1) โลโก้สถานศึกษาที่หายไปในหน้าปกกลับมาแล้ว (2) ทุกหน้าพอดีกระดาษ A4 จริง ไม่มีเนื้อหาถูกตัดหายที่ขอบล่างอีกต่อไป — หน้ากำหนดการสอนที่ยาวจะขึ้นหน้าต่ออัตโนมัติแทนการถูกซ่อน (3) ปุ่ม "พิมพ์/บันทึก PDF" ไม่ติดไปกับเอกสารที่พิมพ์จริงแล้ว'
  ],
  '10.21.33': [
    '🎓 หน้าสุดท้ายเอกสาร ปพ.5 สามัญปวช. (จุดประสงค์การเรียนรู้/สมรรถนะรายวิชา + กำหนดการสอน) กรอกข้อมูลได้แล้ว ผ่านหน้า "ตั้งค่าคำอธิบายรายวิชา" เดิม (เฉพาะวิชากลุ่มสามัญปวช.) ไม่ต้องเว้นว่างรอกรอกมืออีกต่อไป — ⚠️ ต้องรัน SQL patch ก่อนใช้งาน'
  ],
  '10.21.32': [
    '🎓 หน้าปกเอกสาร ปพ.5 สามัญปวช.: แก้ข้อมูลที่ระบบเติมให้ (ชั้น/ภาคเรียน/ปีการศึกษา/รายวิชา/ครูผู้สอน ฯลฯ) เคยอยู่ต่ำจนทับเส้นประ ตอนนี้ลอยอยู่เหนือเส้นชัดเจนแล้ว'
  ],
  '10.21.31': [
    '🎓 หน้าไม่มาเรียน ปพ.5 สามัญปวช.: แยกตารางรายชื่อกับตารางวันที่สอนออกจากกัน ไม่ต้องมีจำนวนแถวเท่ากันอีกต่อไป — ห้องที่มีนักเรียนน้อยจะได้ฟอนต์ชื่อใหญ่ขึ้นชัดเจน คอลัมน์ "ชื่อ-สกุล" ก็ปรับความกว้างตามชื่อที่ยาวที่สุดในห้องให้อัตโนมัติด้วย'
  ],
  '10.21.30': [
    '🎓 หน้าไม่มาเรียน ปพ.5 สามัญปวช.: คอลัมน์สัปดาห์ที่/คาบ/วันที่สอน ปรับให้แคบพอดีกับตัวเลข ไม่กว้างเกินจำเป็น พร้อมจัดหัวคอลัมน์ทุกช่อง (ทั้งหน้านี้และหน้าคะแนน) ให้อยู่กึ่งกลางจริงๆ'
  ],
  '10.21.29': [
    '🎓 หน้าไม่มาเรียน ปพ.5 สามัญปวช.: เติมสีส้มให้คำว่า "สีส้ม" ในคำอธิบาย (เดิมลืมใส่สี ทั้งที่แดง/น้ำเงินมีอยู่แล้ว) และจัดข้อความคำอธิบายให้ชิดซ้ายแทนกึ่งกลาง ตรงตามแบบฟอร์มต้นฉบับ'
  ],
  '10.21.28': [
    '🎓 หน้าคะแนน ปพ.5 สามัญปวช.: ปรับกลับให้หัวคอลัมน์เป็นแนวตั้ง 90 องศาตามเดิม แต่ชื่อที่ยาวเกินไปจะตัดขึ้นบรรทัดใหม่ให้อัตโนมัติ ลดความสูงหัวตารางลงโดยไม่เสียแนวเดิม'
  ],
  '10.21.27': [
    '🎓 หน้าคะแนนของเอกสาร ปพ.5 สามัญปวช.: หัวคอลัมน์แนวตั้งที่เคยสูงมาก ปรับเป็นข้อความแนวนอน 2 บรรทัดแทน ลดความสูงหัวตารางลงไปกว่าครึ่ง พร้อมจัดหัวคอลัมน์ทุกช่องให้อยู่กึ่งกลาง'
  ],
  '10.21.26': [
    '🎓 แก้เอกสาร ปพ.5 สามัญปวช. อีกจุด: ตารางไม่มาเรียนเคยมีคอลัมน์แอบเกินมา 1 คอลัมน์ (ผลรวมขาดเรียนอัตโนมัติ ที่แบบฟอร์มจริงไม่มี) ทำให้คอลัมน์วันที่สอนถูกดันจนเบียดกัน — ตัดออกแล้ว เหลือคอลัมน์ "สรุปคะแนนมาเรียน" ช่องเดียวตามแบบฟอร์มต้นฉบับ'
  ],
  '10.21.25': [
    '🎓 แก้ตารางไม่มาเรียน+วันที่สอนของเอกสาร ปพ.5 สามัญปวช.: วันที่สอนไม่เบียดกันจนอ่านไม่ออกอีกแล้ว (ปรับสัดส่วนความกว้างคอลัมน์ให้ตรงตามที่กำหนดจริง) และบังคับให้อยู่ในกระดาษ A4 หน้าเดียวเสมอไม่ว่าจะมีนักเรียนหรือจำนวนคาบเรียนกี่แถวก็ตาม'
  ],
  '10.21.24': [
    '🎓 หน้าคะแนนของเอกสาร ปพ.5 สามัญปวช. ปรับใหม่อีกรอบ — ดึงคอลัมน์คะแนนของวิชาจริงทั้งหมดมาแสดง (ไม่แยกกลางภาค/ปลายภาคแล้ว) และ "คะแนนคุณธรรม" ตอนนี้ดึงจากคะแนนความสะอาด (ทักษะชีวิต) โดยอัตโนมัติ ไม่ต้องแก้อะไรในหน้าบันทึกคะแนนเลย'
  ],
  '10.21.23': [
    '🎓 แก้เอกสาร ปพ.5 สามัญปวช. 2 จุดสำคัญ: (1) หน้าคะแนนตอนนี้ยึดคอลัมน์คะแนนจริงที่ครูตั้งไว้ (กลางภาค/ปลายภาค) เหมือนหน้าบันทึกคะแนนในระบบเป๊ะ ไม่ใช่โครงตายตัว 8 ข้อแบบเดิมที่ทำให้ตัวเลขไม่ตรงกัน (2) หน้าไม่มาเรียนรวมกับตารางวันที่สอนเป็นตารางเดียวจริงแล้ว ตรงตามแบบฟอร์มต้นฉบับของวิทยาลัย'
  ],
  '10.21.22': [
    '🎓 ปรับหน้าไม่มาเรียน/วันที่สอน และหน้าคะแนนของเอกสาร ปพ.5 สามัญปวช. ให้ตรงกับแบบฟอร์มจริงของวิทยาลัยมากขึ้น — ตารางบันทึกขาดใช้ระบบ "ครั้งที่ 1-20" (ไม่ใช่คาบ 1-40 แบบสามัญ) พร้อมสีแยกขาด/ลา/ป่วย และหน้าคะแนนใช้โครงสร้าง "จุดประสงค์ที่ 1-8 + คุณธรรม" ตามจริง'
  ],
  '10.21.21': [
    '🎓 เอกสาร ปพ.5 ของสามัญปวช. (ACDMVOC) ใช้เทมเพลตแยกต่างหากแล้ว ตรงตามแบบฟอร์มจริงของวิทยาลัย ปวช. — 4 หน้า (รวมหน้าไม่มาเรียน+วันที่สอนเป็นหน้าเดียว), ผู้ลงนามชุดใหม่ (ครูผู้สอน/หัวหน้าแผนกวิชา/ผู้ช่วยผอ.ฝ่ายทะเบียนวัดผลฯ/ผู้อำนวยการ), สถิติเข้าเรียน/เข้าสอบ/ผ่าน/ไม่ผ่าน, หน้าจุดประสงค์การเรียนรู้และกำหนดการสอน',
    '🆕 เพิ่มสถานะพิเศษรายคน ข.ร./ข.ส./ม.ส./ข.ป. ตั้งได้ในหน้าจัดการนักเรียน (เฉพาะห้องวิชาสามัญปวช.) จะแสดงแทนเกรดตัวเลขในเอกสาร ปพ.5 อัตโนมัติ'
  ],
  '10.21.20': [
    '🎯 จำกัดขอบเขตการแก้บั๊กจำนวนคาบ/สัปดาห์ (v10.21.19) ให้มีผลเฉพาะวิชาสามัญปวช. (ACDMVOC) เท่านั้น — วิชาสามัญมัธยม ศาสนามัธยม และศาสนาปวช. ยังใช้สูตรหน่วยกิต×2 เหมือนเดิมทุกจุด ไม่ถูกกระทบ'
  ],
  '10.21.19': [
    '🐛 แก้บั๊กสำคัญ: จำนวนคาบ/สัปดาห์และจำนวนคาบรวมทั้งภาค (เอกสาร ปพ.5, หน้าเช็คชื่อ, ซิงก์ Google Sheet) เดิมคำนวณจาก "หน่วยกิต × 2" เสมอ ซึ่งใช้ไม่ได้กับวิชา ปวช./วิชาทฤษฎี-ปฏิบัติผสมที่อัตราไม่เท่าสามัญ (เช่น 3 หน่วยกิตแต่มีแค่ 4 คาบ/สัปดาห์จริง) ตอนนี้ระบบยึดจำนวนคาบจริงจากตารางสอนเป็นหลักแทน ใช้สูตรหน่วยกิต×2 เฉพาะตอนยังไม่ได้ลงตารางสอนเท่านั้น'
  ],
  '10.21.18': [
    '📋 เติมประกาศ "มีอะไรใหม่" ที่ตกหล่นของเวอร์ชัน 10.21.14-10.21.17 (สุ่มจัดกลุ่ม, แก้บั๊กป๊อปอัป, แยกข้อมูลศาสนาปวช., แก้ไขพรีวิว ปพ.5, แก้ชื่อตำแหน่งในเอกสาร)'
  ],
  '10.21.17': [
    '📝 ตั้งค่าระบบ > สถานศึกษา เพิ่มช่อง "ชื่อตำแหน่งที่พิมพ์ในเอกสาร" ให้แก้ข้อความใต้ลายเซ็น ผอ./หัวหน้าวิชาการ/หัวหน้าฝ่ายทะเบียน ในเอกสาร ปพ.5 ได้เอง (แยกได้ทั้งฝั่งสามัญ ปวช และศาสนา)',
    '🐛 แก้บั๊กบางกรณีชื่อผู้อำนวยการในเอกสารแสดงข้อความเพี้ยน และป้ายระดับชั้นในหน้า "วันที่สอน" ไม่ตรงกับหน้าปกสำหรับวิชาศาสนา/ปวช.'
  ],
  '10.21.16': [
    '🕌 แยกข้อมูลโรงเรียน/โลโก้/ผอ. ของวิชาศาสนาปวช. ให้ใช้ร่วมกับศาสนามัธยมแทนการแชร์กับสามัญปวช. — ตรงตามกลุ่มจริงมากขึ้น',
    '✏️ เปิดให้ครูแก้ไขข้อความในหน้าพรีวิวเอกสาร ปพ.5 ได้ก่อนพิมพ์ (ไม่กระทบข้อมูลจริงในระบบ) — แอดมินเปิด/ปิดสิทธิ์นี้ได้ที่ตั้งค่าระบบ > เทมเพลต ปพ.5'
  ],
  '10.21.15': [
    '🐛 แก้บั๊กป๊อปอัปยืนยัน (เช่น "จัดกลุ่มใหม่?") บางครั้งเด้งไปโผล่ข้างหลังหน้าต่างอื่น กดไม่ได้'
  ],
  '10.21.14': [
    '🎲 แท็บ "สุ่มจัดกลุ่ม" ในหน้าสุ่มรายชื่อ บันทึกผลจัดกลุ่มอัตโนมัติแล้ว ปิด-เปิดหน้าใหม่ไม่หาย และย้ายนักเรียนข้ามกลุ่มได้ทันที (เช่น กลุ่มไหนขาดเรียนบ่อยก็ย้ายคนออกได้)'
  ],
  '10.21.13': [
    '🗳️ หน้า "นักเรียนที่ปรึกษา" ของครูสามัญ เพิ่มแท็บ "โหวตแบบเสื้อ" ให้ครูโหวตแทนนักเรียนในห้องได้โดยตรง (เหมาะกับ ม.1-2 ที่ไม่สะดวกพกโทรศัพท์มาโรงเรียน) — เลือกแบบแล้วบันทึกทันที ไม่ต้องมีขั้นยืนยันแยกแบบไซซ์เสื้อ'
  ],
  '10.21.12': [
    '🗳️ เพิ่มหน้าโหวตแบบเสื้อกีฬาสีแบบไม่ต้องล็อกอิน (shirt-vote-public.html) — นักเรียนกรอกรหัสนักเรียน ระบบค้นข้อมูลให้อัตโนมัติ แล้วเข้าหน้าโหวตหน้าตาเดียวกับระบบเดิมได้ทันที เหมาะกับจุดโหวต kiosk หน้างาน',
    '⚙️ แอดมินเปิด/ปิดโหมดนี้ และตั้งลิงก์คลิปคู่มือ/แนะนำ ปพ.5 ได้เองในหน้าตั้งค่าโหวตแบบเสื้อ'
  ],
  '10.21.11': [
    '🗳️ เพิ่มเมนู "ผลโหวตแบบเสื้อ" ในแถบเมนูครู (teacher.html) ให้ครูที่ได้รับมอบสิทธิ์ดูแดชบอร์ดโหวตเห็นและเปิดหน้าได้เอง — เดิมมีแค่ปุ่มในป๊อปอัป AZIZGAMES ซึ่งครูที่ไม่ได้เป็นผู้ดูแลกีฬาสีเต็มรูปแบบจะมองไม่เห็น'
  ],
  '10.21.10': [
    '🖼️ ขยายรูปแบบเสื้อที่โหวตในหน้ากีฬาสีของฉันให้ใหญ่ขึ้นและอยู่กึ่งกลาง เพิ่มปุ่มขยายดูเต็มจอ และเปลี่ยนจากปุ่มสลับสีเดียวเป็นปุ่มเลือกสีแยกแต่ละสีให้กดตรงๆ ได้เลย'
  ],
  '10.21.9': [
    '🖼️ การ์ด "โหวตแบบเสื้อกีฬาสี" ในหน้ากีฬาสีของฉัน แสดงรูปตัวอย่างแบบที่โหวตไปแล้ว (ค่าเริ่มต้นเป็นสีบ้านของตัวเอง) พร้อมปุ่ม 🔄 สลับดูสีอื่นได้'
  ],
  '10.21.8': [
    '🗳️ ปรับหน้าโหวตของนักเรียนใหม่ — แสดงแบบเสื้อทีละแบบเต็มจอ พร้อมแถบสลับแบบด้านบน ปุ่มขยายดูรูปเต็มจอ และปุ่มสลับสีดูตัวอย่าง',
    '✅ กดเลือกโหวตแล้วจะมีป๊อบอัปให้ยืนยันก่อนเสมอ พร้อมแจ้งว่าเปลี่ยนใจได้ถึงเมื่อไหร่',
    '🔄 หน้าแดชบอร์ดผลโหวตเพิ่มปุ่มสลับสีที่รูปตัวอย่างของแต่ละแบบได้เอง ไม่ต้องรอสุ่มใหม่'
  ],
  '10.21.7': [
    '🖼️ เลือกไฟล์รูปสีแบบเสื้อในหน้าตั้งค่าแล้วเห็นพรีวิวทันที ไม่ต้องรอกดบันทึกก่อน',
    '📊 ปรับหน้าแดชบอร์ดผลโหวตให้ดูดีขึ้น — เรียงลำดับแบบที่ได้คะแนนมากไปน้อย พร้อมรูปตัวอย่าง (สุ่มสีที่มีรูปแล้ว) และเหรียญอันดับ 🥇🥈🥉'
  ],
  '10.21.6': [
    '🐛 แก้บั๊กอัปโหลดรูปสีแบบเสื้อกีฬาสีไม่ได้ (ขึ้น "Invalid key") — เกิดจากชื่อไฟล์มีตัวอักษรไทย (เช่น "ส้ม.png") ซึ่ง Supabase Storage ไม่รองรับ เปลี่ยนไปใช้รหัสอ้างอิงภายในแทนชื่อสีในชื่อไฟล์'
  ],
  '10.21.5': [
    '🗳️ แยกระบบโหวตแบบเสื้อกีฬาสีเป็นชาย/หญิงชัดเจน — แต่ละแบบอัปโหลดรูปได้ครบ 4 สีตามสีบ้านของแต่ละเพศ (ชาย: แดง/น้ำเงิน/เขียว/น้ำตาล, หญิง: ส้ม/ฟ้า/ม่วง/เทา)',
    '📊 แยกหน้า "ตั้งค่าโหวตเสื้อ" กับ "ผลโหวตเสื้อ" ออกจากกันเป็นคนละหน้า พร้อมเมนู "ผลโหวตแบบเสื้อ" ใหม่ใน sidebar แอดมิน',
    '👕 หน้าโหวตของนักเรียนกรองเฉพาะแบบของเพศตัวเอง และมีปุ่มสีให้กดสลับดูตัวอย่างเสื้อแต่ละสีก่อนโหวต (โหวตนับเฉพาะแบบ ไม่รวมสี)'
  ],
  '10.21.4': [
    '🗳️ เพิ่มระบบโหวตแบบเสื้อกีฬาสี (4 แบบ ใช้ร่วมกันทั้งชาย-หญิง) — แอดมินอัปโหลดรูป PNG/ไฟล์ 3 มิติ และตั้งเวลาเปิด-ปิดโหวตได้ในหน้า "สรุปยอดเสื้อ"',
    '📊 เพิ่มแดชบอร์ดสรุปผลโหวตแยกแท็บชาย/หญิง/รวม พร้อมมอบสิทธิ์ให้ครูเฉพาะคนดูแดชบอร์ดนี้เพิ่มได้ (ค้นหาด้วยรหัสครู)',
    '👕 นักเรียนเปิดหน้าโหวตเต็มจอจากปุ่มในหน้ากีฬาสีของฉัน เลือกแบบที่ชอบ ดูตัวอย่าง 3 มิติได้ถ้าแอดมินอัปโหลดไว้ และเปลี่ยนโหวตได้จนกว่าจะปิด'
  ],
  '10.21.3': [
    '🚪 แก้การ์ด "กำลังออกนอกห้องอยู่" ฝั่งนักเรียนให้เปลี่ยนเป็นสีแดงกะพริบและขึ้นป้าย "เลยเวลา" ทันทีที่เกินเวลาที่อนุญาต เหมือนป้ายในหน้าเช็คชื่อของครูเป๊ะๆ (เดิมตัวเลขนับถอยหลังเกินเวลาแล้วแต่สียังไม่เปลี่ยน)'
  ],
  '10.21.2': [
    '🚪 ปรับหน้าใบอนุญาตออกนอกห้องของนักเรียนเป็นแบบเต็มจอ แยก 2 แท็บ "ใบอนุญาต" และ "ประวัติ"',
    '🎨 หน้าใบอนุญาตแสดงสถานะปัจจุบันด้วยกรอบสี — เขียว (ปกติ), ส้ม (เสี่ยง), แดง (โดนตัดสิทธิ์) ตามจำนวนครั้งที่เลยเวลา/ไม่กลับเข้าห้อง'
  ],
  '10.21.1': [
    '🚪 เพิ่มปุ่ม "ใบอนุญาตออกนอกห้อง" ในหน้าโปรไฟล์นักเรียน (ข้างปุ่ม QR Code) ให้ดูสถานะออกนอกห้องตอนนี้พร้อมนับถอยหลัง และประวัติการขอออกนอกห้องของตัวเองย้อนหลังได้',
    '⚠️ เพิ่มคำเตือนในหน้าใบอนุญาตออกนอกห้องของนักเรียน แจ้งว่าต้องกลับเข้าห้องให้ทันเวลา หากเลยเวลา/ไม่กลับครบ 3 ครั้ง จะถูกระงับสิทธิ์และหักคะแนนความประพฤติ'
  ],
  '10.21.0': [
    '🚪 หน้าเช็คชื่อแสดงจำนวนครั้งที่นักเรียนแต่ละคนใช้สิทธิ์ออกนอกห้องแล้ว เทียบกับโควต้าที่ตั้งไว้ (เช่น 2/5) ให้เห็นตลอด ไม่ต้องรอครบสิทธิ์ก่อน',
    '⚙️ ป้าย "ครบสิทธิ์" ตอนนักเรียนออกครบโควต้าแล้ว คลิกเพื่อเปิดโมดัลปรับโควต้าออกนอกห้องได้ทันที ไม่ต้องกดปุ่มโควต้าที่หัวตาราง'
  ],
  '10.20.0': [
    '🚪 ปรับโควต้าขออนุญาตออกนอกห้องให้ครูตั้งค่า “จำนวนครั้งสูงสุดต่อสัปดาห์ต่อนักเรียน 1 คน” ได้เอง (เดิมล็อกไว้ 1 ครั้งตายตัว) ปรับได้ในโมดัลตั้งค่าโควต้าออกนอกห้องเดิม'
  ],
  '10.19.10': [
    '🧭 เปลี่ยนหน้า “จัดการสีของฉัน” เป็น workspace เต็มจอแบบแท็บ ไม่เลื่อนยาวรวมทุกส่วน',
    '🛡️ เพิ่มแท็บสิทธิ์ประจำสี ให้พ่อสี/แม่สีมอบหมายหัวหน้าสต๊าฟและนักเรียนสต๊าฟในสีตัวเองได้ โดยไม่ต้องเปิดหน้าสรุปเสื้อแอดมิน',
    '🖨️ ปรับการพิมพ์นักกีฬาให้เปิดป๊อปอัปเลือกประเภทกีฬาและรูปแบบเอกสารก่อนพิมพ์'
  ],
  '10.19.9': [
    '🛡️ ยกระดับหน้า “จัดการสีของฉัน” ให้แยกสิทธิ์ตามบทบาท เห็นเฉพาะข้อมูลสีตัวเอง ไม่เหมือนแอดมินทั้งระบบ',
    '🖨️ เพิ่มปุ่มพิมพ์/บันทึกใบรายชื่อสมาชิกและนักกีฬา พร้อมติดตามตารางแข่ง ผล คะแนนรวม และอันดับเหรียญของสี',
    '🌗 เพิ่มปุ่มสลับโหมดมืด/สว่างในหน้าจัดการสีของฉันให้เข้ากับระบบกีฬาสี'
  ],
  '10.19.8': [
    '🛡️ ล็อกการมอบหมายสต๊าฟประจำสีให้นักเรียนต้องอยู่ในสีที่เลือกเท่านั้น',
    '👥 เปิดให้พ่อสี/แม่สีมอบหมายหรือปิดสิทธิ์นักเรียนสต๊าฟในสีของตัวเองได้ โดยยังให้แอดมินเป็นผู้แต่งตั้งครูประจำสี'
  ],
  '10.19.7': [
    '🛡️ ปรับการมอบหมายผู้ดูแลประจำสีให้กรอกรหัสครู/รหัสนักเรียนหลายรหัส พร้อมค้นหาและพรีวิวก่อนยืนยัน เหมือนระบบสแกนละหมาด',
    '🎯 จำกัดนักเรียนสต๊าฟในหน้ามอบหมายสิทธิ์ให้ค้นหาเฉพาะ ม.5, ม.6 และ ปวช.3 ที่มีบัญชีผู้ใช้'
  ],
  '10.19.6': [
    '🧭 เปลี่ยนการตั้งค่าเปิด/ปิดในส่วนกีฬาสีจาก checkbox เป็นการ์ดสถานะพร้อมปุ่มเปิดใช้งาน/ปิดใช้งาน',
    '🛡️ เปลี่ยนสิทธิ์ย่อยผู้ดูแลสีจาก checkbox เป็นปุ่มอนุญาต/ไม่อนุญาต เพื่อให้สถานะอ่านง่ายและลดการกดผิด'
  ],
  '10.19.5': [
    '👕 เชื่อมค่า “เปิดรับจำนงไซซ์” ในหน้าสรุปยอดเสื้อกีฬาสีให้ตรงกับปุ่ม “แจ้งไซส์เสื้อ” ในหน้าตั้งค่าหลักของ AZIZGAMES',
    '🔁 บันทึกจากฝั่ง AZIZGAMES หรือฝั่ง ปพ.5 แล้วสถานะเปิดรับไซซ์เสื้อจะซิงก์เป็นค่าเดียวกัน'
  ],
  '10.19.4': [
    '🛡️ เพิ่มหน้ามอบหมายครูประจำสีและนักเรียนสต๊าฟประจำสีในหน้า “ตั้งค่าและสรุปเสื้อกีฬาสี”',
    '🔐 แอดมินสามารถเลือกบทบาทและสิทธิ์ย่อยของผู้ดูแลสี เช่น สมาชิก ลงทะเบียนกีฬา ประกาศ งานของสี และสรุปเสื้อ'
  ],
  '10.19.3': [
    '👕 เพิ่มปุ่ม “ตั้งค่า/สรุปเสื้อ” บนหน้าต่าง AZIZGAMES แบบเต็มจอสำหรับแอดมินและผู้มีสิทธิ์จัดการกีฬาสี',
    '🏆 เชื่อมปุ่มจาก AZIZGAMES กลับไปหน้า “ตั้งค่าและสรุปเสื้อกีฬาสี” ชุดเดียวกับใน ปพ.5 ทั้งฝั่งครูและแอดมิน'
  ],
  '10.19.2': [
    '👤 เพิ่มรูปนักเรียนในหน้าติดตามและยืนยันไซซ์เสื้อของครูที่ปรึกษา',
    '👕 เพิ่มทางเข้า “ตั้งค่าและสรุปเสื้อกีฬาสี” ในแผงผู้ดูแลระบบและผู้รับผิดชอบกีฬาสี'
  ],
  '10.19.1': [
    '🛠️ แก้หน้าครูโหลดค้างหลังเพิ่มเมนูกีฬาสี โดยตรวจตำแหน่งผู้รับผิดชอบจากข้อมูลครูที่พร้อมใช้งานแล้ว'
  ],
  '10.19.0': [
    '🏆 เพิ่มหน้า “กีฬาสีของฉัน” สำหรับนักเรียน พร้อมข้อมูลสี โลโก้ ไซซ์เสื้อ รายการแข่งขัน ผลงาน และทางเข้า AZIZGAMES แบบเต็ม',
    '👕 เพิ่มขั้นตอนจำนงไซซ์เสื้อ การยืนยันโดยครูที่ปรึกษา และหน้าสรุปยอดสี × ไซซ์สำหรับผู้รับผิดชอบ',
    '🛡️ เพิ่มหน้า “จัดการสีของฉัน” สำหรับครูประจำสีและนักเรียนสต๊าฟ พร้อมสมาชิก งาน ประกาศ และข้อมูลกีฬาที่ใช้ร่วมกับ AZIZGAMES',
    '🎨 เพิ่ม workflow แก้ไขโลโก้และอัตลักษณ์ประจำสี โดยต้องผ่านหัวหน้าครูประจำสีและแอดมินก่อนเผยแพร่'
  ],
  '10.18.25': [
    '🧾 เพิ่มปุ่มเอกสารสอบในหน้าห้องเรียน และปรับช่องครูคุมสอบให้ค้นหาด้วยรหัสหรือชื่อครูจากรายชื่อในระบบ'
  ],
  '10.18.24': [
    '🧾 ปรับใบปะหน้าซองข้อสอบให้แยกเลขห้องกับชื่อห้องยาวเป็นสองบรรทัด เพื่อไม่ให้แถวจำนวนข้อสอบตกบรรทัด'
  ],
  '10.18.23': [
    '🧾 ปรับเอกสารช่วงสอบตามโค้ดตัวอย่างใหม่ และแก้หน้าพิมพ์ให้หน้า 4 เป็น A4 แนวนอนจริง'
  ],
  '10.18.22': [
    '🧾 ปรับพรีวิวเอกสารช่วงสอบและหน้าพิมพ์ให้ใช้ขนาดกระดาษเดียวกัน พร้อมจัดใบปะหน้าซองข้อสอบตามไฟล์ตัวอย่าง'
  ],
  '10.18.21': [
    '🧾 ปรับโครงสร้างเอกสารช่วงสอบให้ใกล้กับฟอร์มตัวอย่างตั้งต้นมากขึ้น'
  ],
  '10.18.20': [
    '🧾 แก้หน้าพิมพ์เอกสารช่วงสอบและใบปะหน้าซองข้อสอบไม่ให้ถูกตัดขอบ'
  ],
  '10.18.19': [
    '🧾 ขยายเอกสารช่วงสอบให้เต็มหน้า A4 มากขึ้นโดยไม่ล้น พร้อมปรับใบปะหน้าซองข้อสอบให้พอดีขอบซ้ายขวา'
  ],
  '10.18.18': [
    '🧾 ปรับ CSS พิมพ์เอกสารช่วงสอบตามตัวอย่างตั้งต้น: หน้า 1-3 ไม่ล้นหน้า และใบปะหน้าซองข้อสอบใช้หน้า A4 แนวนอนจริง'
  ],
  '10.18.17': [
    '🧾 ปรับใบลงชื่อนักเรียนเข้าสอบเป็นรายชื่อฝั่งละ 25 คน และจัดใบปะหน้าซองข้อสอบให้อยู่กึ่งกลางกระดาษมากขึ้น'
  ],
  '10.18.16': [
    '🧾 ปรับเอกสารช่วงสอบให้หน้า 1-3 ใช้พื้นที่ A4 แนวตั้งมากขึ้น และแก้ใบปะหน้าซองข้อสอบให้หมุนเป็นแนวนอนเต็มหน้าในชุดพิมพ์เดียว'
  ],
  '10.18.15': [
    '🧾 ปรับเอกสารช่วงสอบให้พิมพ์รวม 4 หน้าอีกครั้ง และปรับใบปะหน้าซองข้อสอบเป็น A4 แนวนอนตามแบบ'
  ],
  '10.18.14': [
    '🧾 แก้รายการเวอร์ชันให้เรียงตามเลขเวอร์ชันจริง และแยกพิมพ์เอกสารช่วงสอบเป็นหน้า 1-3 แนวตั้งกับใบปะหน้าซองแนวนอน'
  ],
  '10.18.13': [
    '📋 ปรับประเภทการสอบในเอกสารช่วงสอบเป็นตัวเลือกมาตรฐาน: กลางภาค, ปรับคะแนนกลางภาค และปลายภาค'
  ],
  '10.18.12': [
    '🖨️ ปรับรูปแบบพิมพ์เอกสารช่วงสอบให้เต็มหน้า A4 มากขึ้น และเปิดหน้าพิมพ์แบบแยกเพื่อให้ PDF ไม่ถูกย่อจากหน้า teacher'
  ],
  '10.18.11': [
    '📄 เพิ่มเมนูเอกสารช่วงสอบสำหรับครู: สร้างใบลงชื่อเข้าสอบ ใบปะหน้าข้อสอบ ใบแจ้งขาดสอบ และใบปะหน้าซองข้อสอบ พร้อมโหมดไทย อาหรับ และยาวี'
  ],
  '10.18.10': [
    '🏆 ปรับการเปิด AZIZGAMES ให้เป็นป๊อปอัปเต็มจอในระบบ ปพ5 พร้อมปุ่มแชร์ลิงก์และปุ่มเปิดในบราวเซอร์/แท็บใหม่แบบไม่รบกวนสายตา'
  ],
  '10.18.9': [
    '🏆 ปรับ AZIZGAMES ให้ครูทั่วไปมีทางลัดเข้าระบบกีฬาสีจากหน้า ปพ5, เพิ่มพรีวิวก่อนนำเข้า CSV, และเพิ่มสวิตช์เปิด/ปิดการมองเห็นสำหรับครู นักเรียน และผู้เข้าชมทั่วไป'
  ],
  '10.18.8': [
    '🏃 ปรับ AZIZGAMES เพิ่มเติมให้หน้า Settings ใช้สีแถวนักเรียนชัดขึ้น และนำเข้า CSV แล้วเติมห้องสามัญ/ศาสนา, รูป, สี และไซส์เสื้อเข้าฟิลด์หลักของ PP5 ได้ครบ'
  ],
  '10.18.7': [
    '🏃 ปรับ AZIZGAMES ให้ตัวกรองห้องเรียนขึ้นตามระดับชั้น, ใช้รูปนักเรียนจริง, แสดงห้องศาสนาจริง และเพิ่มความชัดของสีพื้นหลังแถวนักเรียน'
  ],
  '10.18.6': [
    '🏆 เปิดระบบกีฬาสีเป็นหน้าเต็มจอ AZIZGAMES พร้อม UX/UI และฟีเจอร์ชุดเดิม โดยเมนูแอดมินพาออกไปหน้า azizgames.html โดยตรง'
  ],
  '10.18.5': [
    '🏆 เพิ่มโมดูลระบบกีฬาสี AZIZGAMES ในโปรเจกต์ PP5 Online พร้อมหน้า sports.html, เมนูแอดมิน, ตาราง sports_* และคิวรอซิงก์เมื่อเน็ตหลุด'
  ],
  '10.18.4': [
    '✨ เปลี่ยนไอคอนเมนูเลือกงานสแกนเป็นอิโมจิแยกตามงาน: เช็คชื่อ ละหมาด และใบอนุญาตออกนอกห้อง'
  ],
  '10.18.3': [
    '🎨 ปรับเมนูเลือกงานสแกนให้แต่ละปุ่มใช้สีสดแยกกันชัดเจน โดยปุ่มสแกนละหมาดใช้สีเขียว'
  ],
  '10.18.2': [
    '✅ ปรับเมนูสแกนให้ใช้โทนเขียวเดียวกันทุกการ์ด และปรับหน้าสแกนเช็คชื่อให้แสดงรายชื่อนักเรียนที่สแกนแล้วทั้งหมดพร้อมปุ่มยกเลิก'
  ],
  '10.18.1': [
    '🎨 เพิ่มความชัดของสีการ์ดเมนูสแกน และปรับหน้าต่างเลือกงานสแกนให้อยู่กลางหน้าจอทุกขนาดจอ'
  ],
  '10.18.0': [
    '🎨 ใส่สีพื้นทั้งการ์ดในเมนูสแกน แยกโทนสีตามงานเช็คชื่อ ละหมาด และใบอนุญาต พร้อมเงาสีให้ดูมีมิติมากขึ้น'
  ],
  '10.17.99': [
    '📷 ปรับปุ่มกล้องด้านบนให้เป็นไอคอนล้วน พร้อมเพิ่มสี แสง และเงาให้ปุ่มสแกนดูมีมิติและกดง่ายขึ้น'
  ],
  '10.17.98': [
    '📷 ปรับเมนูสแกนให้กดสแกนละหมาดก่อน แล้วค่อยเลือกจุดในหน้าสแกน พร้อมปรับปุ่มเปิดกล้องในงานเช็คชื่อ/ละหมาด/ใบอนุญาตให้อ่านง่ายขึ้น'
  ],
  '10.17.97': [
    '📷 เพิ่มเมนูกล้องกลาง เลือกสแกนเช็คชื่อ ละหมาด หรือใบอนุญาตออกนอกห้อง พร้อมโหลดข้อมูลเช็คชื่อเดิมก่อนสแกนและส่งคำขอสิทธิ์สแกนละหมาดถึงแอดมินได้'
  ],
  '10.17.96': [
    '🖨️ ปรับหน้าพิมพ์ QR Code รายบุคคลให้กรอกรหัสนักเรียนหลายคนพร้อมกันได้ พร้อมตรวจรหัสที่ไม่พบและไม่แสดงหัวชั้นเรียนบนกระดาษพิมพ์รายบุคคล'
  ],
  '10.17.95': [
    '📊 เพิ่มแดชบอร์ดแนวโน้มละหมาดในศูนย์ติดตามสาธารณะ แสดงยอดผู้ละหมาด แนวโน้มรายวัน จุดละหมาด และการทำหน้าที่ของแกนนำ'
  ],
  '10.17.94': [
    '📡 เพิ่มศูนย์ติดตามสาธารณะ URL เดียว รวมจอการละหมาดและการออกนอกห้องเรียน พร้อมโหมดรวม/แยกหน้าจอ'
  ],
  '10.17.93': [
    '🖥️ เพิ่ม URL แยกสำหรับจอติดตามการออกนอกห้องเรียน เปิดดูแบบไม่ต้องล็อกอินและใช้ขึ้นจอทีวีได้'
  ],
  '10.17.92': [
    '📊 เพิ่มแดชบอร์ดแนวโน้มการออกนอกห้อง พร้อมกราฟรายวัน ช่วงเวลา เหตุผล ห้องที่ออกบ่อย นักเรียนที่ควรติดตาม และปุ่มบันทึกกลับ/ไม่กลับในหน้าติดตาม'
  ],
  '10.17.91': [
    '🚪 แก้หน้าติดตามใบอนุญาตออกนอกห้องไม่ให้ค้างที่ 80 รายการ และเพิ่มตัวเลือกดูข้อมูลรายวัน'
  ],
  '10.17.90': [
    '🕌 แก้มอนิเตอร์สแกนละหมาดล่าสุดในแอดมินให้ดึงประวัติแบบแบ่งหน้า จึงไม่หยุดที่ 1000 รายการต่อวัน'
  ],
  '10.17.89': [
    '🚪 แก้อาการหน้าติดตามและป๊อบอัพใบอนุญาตออกนอกห้องกระพริบ โดยให้นับถอยหลังอัปเดตเฉพาะตัวเลขแทนการสร้างหน้าจอใหม่ทุกวินาที'
  ],
  '10.17.88': [
    '🕌 เพิ่มตัวกันสแกนผิดพื้นที่สำหรับนักเรียนชาย ม.1-ม.5 ต้องสแกนที่มูซอลลาชาย และ ม.6/ปวช. ต้องสแกนที่มัสยิดคูเวต'
  ],
  '10.17.87': [
    '🖨️ เพิ่มโหมดพิมพ์ QR Code นักเรียนรายบุคคล ค้นหารายชื่อ วางซ้ำค่าเริ่มต้น 4 ใบ พิมพ์/บันทึก PDF และดาวน์โหลด QR เป็น PNG ได้'
  ],
  '10.17.86': [
    '📋 ปรับหน้าสแกนตรวจสอบใบอนุญาตออกนอกห้องให้แสดงผลเป็นป๊อบอัพกลางจอ และพักการสแกนระหว่างแสดงผลเพื่อกัน QR ยิงซ้ำ'
  ],
  '10.17.85': [
    '⏳ ปรับตัวนับเวลาถอยหลังใบอนุญาตออกนอกห้องให้หยุดที่จุดสิ้นสุดเหมาะสม ไม่ปล่อยเลขเกินเวลายาวหลายชั่วโมง'
  ],
  '10.17.84': [
    '🧭 ปรับหน้าติดตามใบอนุญาตออกนอกห้องของครูให้เห็นเฉพาะนักเรียนในคาบปัจจุบันหรือคาบถัดไปของตนเอง ส่วนแอดมินยังเห็นทั้งหมด'
  ],
  '10.17.83': [
    '⏱️ แก้แดชบอร์ดติดตามใบอนุญาตออกนอกห้องไม่ให้แสดง active ซ้ำ และปรับเวลาคงเหลือให้เดินแบบนาที:วินาที'
  ],
  '10.17.82': [
    '🚪 ปรับระบบใบอนุญาตออกนอกห้องให้รีเซตสิทธิ์รายสัปดาห์ ครูตั้งโควต้าออกพร้อมกันได้ และเพิ่มแดชบอร์ดติดตามพร้อมตัวกรองสำหรับแอดมิน ผู้บริหาร และหน้าตรวจสอบใบอนุญาต'
  ],
  '10.17.81': [
    '🔎 ปรับหน้ามอบสิทธิ์สแกนเนอร์ละหมาด เพิ่มแท็บทั้งหมด/ชาย/หญิง/ครู สรุปจำนวน และตัวกรองรายคอลัมน์เพื่อให้แอดมินจัดการเวรสแกนได้ง่ายขึ้น'
  ],
  '10.17.80': [
    '👁️ เพิ่มหน้า Monitor การสแกนละหมาดสำหรับครูที่ปรึกษาชั้นศาสนา โดยแสดงเฉพาะนักเรียนในห้องศาสนาของตนเอง'
  ],
  '10.17.79': [
    '📍 เพิ่มป๊อบอัพให้นักเรียนแกนนำเลือกจุดสแกนก่อนเปิดกล้องหรือเครื่องสแกน เพื่อป้องกันการลืมเปลี่ยนจุดสแกน'
  ],
  '10.17.78': [
    '🖼️ แก้เส้นทางรูปโปสเตอร์นาซีฮัทในหน้าสแกนละหมาดให้โหลดถูกต้องบน GitHub Pages'
  ],
  '10.17.77': [
    '🕌 เพิ่มป๊อบอัพนาซีฮัทสำหรับนักเรียนแกนนำก่อนเริ่มระบบสแกนละหมาด โดยแสดงโปสเตอร์เตือนเรื่องอะมานะห์และต้องกดยืนยันรับทราบก่อนเริ่มสแกน'
  ],
  '10.17.76': [
    '🛡️ เพิ่มการตั้งค่าป้องกันแกนนำบันทึกนักเรียนห้องเดียวกัน โดยเปิด/ปิดแยกนักเรียนชายและนักเรียนหญิงได้',
    '⌨️ เพิ่มช่องกรอกรหัสนักเรียนในหน้าสแกนละหมาด สำหรับกรณี QR Code หายหรือสแกนไม่ติด พร้อมจำกัดจำนวนครั้งต่อเดือนตามที่แอดมินตั้งค่า',
    '📋 เพิ่มข้อมูลตรวจสอบย้อนหลังในประวัติสแกน เช่น บันทึกด้วย QR/กรอกรหัส และรายการห้องเดียวกัน'
  ],
  '10.17.70': [
    '🔑 เพิ่มระบบกู้คืนและรีเซ็ทรหัสผ่านสำหรับนักเรียน ผ่านการกรอกข้อมูลยืนยันตัวตน และอีเมลจริงสำหรับรับลิงก์กู้คืน',
    '🔒 เพิ่มเมนูเปลี่ยนรหัสผ่านในหน้ารายละเอียดโปรไฟล์ของนักเรียน เพื่อความสะดวกและปลอดภัยโดยไม่ต้องล็อกเอาต์',
    '🎨 ปรับปรุงดีไซน์การ์ดข้อมูลและรูปภาพนักเรียน: ออกแบบกรอบรูปสี่เหลี่ยมแนวตั้งขอบมนที่มีแสงเงาสะท้อนแบบ 3D และย้ายปุ่ม QR Code เข้าไปอยู่ในช่องการ์ดให้กระชับสวยงามยิ่งขึ้น'
  ],
  '10.17.65': [
    '👑 ปรับปรุงระบบจัดการผู้นำห้องเรียน แยกตารางข้อมูล ป้องกันการบันทึกห้องซ้ำ',
    '🔑 เพิ่มตำแหน่ง "ผู้ดูแลหัวหน้า/รองหัวหน้า" (classroom_leaders_admin) พร้อมข้ามข้อจำกัดฐานข้อมูล',
    '📄 เพิ่มหน้า Preview แบบ A4 ก่อนพิมพ์ใบรายชื่อ พร้อมคอลัมน์หมายเหตุแทนการแสดงเกียรติบัตร',
    '⚙️ ปรับปรุงระบบเปิด-ปิดแสดงเกียรติบัตร เป็นสวิตช์เดียวเพื่อปิดหรือแสดงผลทั้งโรงเรียนพร้อมกัน',
    '🎨 เพิ่มระบบพรีวิวรูปเล่มเต็มหน้าจอก่อนพิมพ์สีนักเรียน และเพิ่มรูปถ่ายนักเรียนในตารางจัดการสีนักเรียน',
    '🎨 ปรับตารางพิมพ์รายชื่อสีนักเรียน: นำวงกลมสีออก และปล่อยคอลัมน์ไซส์เสื้อให้ว่างหากไม่มีข้อมูล',
    '📸 ปรับปรุงดีไซน์รูปถ่ายนักเรียนทุกจุดในระบบ: ให้เป็นสี่เหลี่ยมแนวตั้ง ขอบมน พร้อมเอฟเฟกต์มิติเงาและแสงขอบตกกระทบ',
    '🔒 แก้ไขบั๊กการดึงข้อมูลการเช็คชื่อห้องเรียน (getClassAttendanceAll): ปรับปรุงให้ดึงข้อมูลแบบแบ่งหน้าเพื่อรองรับการเช็คชื่อรายคาบรวมเกิน 1,000 แถว ป้องกันไม่ให้ประวัติการเช็คชื่อรายคาบสูญหาย'
  ],
  '10.17.38': [
    '🔑 เพิ่มตัวเลือกสลับโหมดบันทึก "อูโซร 🟣" เฉพาะนักเรียนหญิงและคุณครู พร้อมระบบป้องกันห้ามบันทึกอูโซรสำหรับนักเรียนชาย',
    '📅 เพิ่มการกำหนดวันเวรรับผิดชอบรายบุคคล (อาทิตย์ – พฤหัสบดี) ในระบบแอดมิน เพื่อจำกัดสิทธิ์แกนนำตามวันจริง'
  ],
  '10.17.37': [
    '🔑 ย้ายการตั้งค่าช่วงเวลาสแกนละหมาดไปไว้ในแท็บมอบสิทธิ์สแกนเนอร์ และเพิ่มปุ่มกำหนดสิทธิ์รายนักเรียนเป็นทั่วไป/ขยายเวลา'
  ],
  '10.17.36': [
    '⏱️ เพิ่มการตั้งค่าช่วงเวลาเปิดระบบสแกนละหมาดจากหน้าแอดมิน พร้อมสิทธิ์ขยายเวลาสำหรับประธาน/รองประธานถึงเวลาที่กำหนด',
    '🔴 เพิ่มเวลานับถอยหลังในหน้าสแกน พร้อมขอบแจ้งเตือนสีแดงเมื่อใกล้หมดเวลา และให้ยกเลิกรายการที่สแกนแล้วได้จากทุกแถวในประวัติ'
  ]
}

function compareVersions(a, b) {
  const pa = String(a || '').split('.').map(n => parseInt(n, 10) || 0)
  const pb = String(b || '').split('.').map(n => parseInt(n, 10) || 0)
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0)
    if (diff) return diff
  }
  return 0
}

// ─── Check and Show Changelog Pop-up for users with admin access ───────────
export function checkAndShowChangelog(userId, forceShow = false, hasAdminAccess = false) {
  if (!hasAdminAccess) return
  const currentVersion = APP_VERSION
  const lastVersion = localStorage.getItem(`last_seen_version_adm_${userId}`)
  
  if (forceShow || lastVersion !== currentVersion) {
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6'
    
    let changelogHTML = ''
    const versions = Object.keys(CHANGELOGS).sort((a, b) => compareVersions(b, a))
    
    versions.forEach(v => {
      if (forceShow || !lastVersion || compareVersions(v, lastVersion) > 0 || v === currentVersion) {
        changelogHTML += `
          <div class="mb-4 last:mb-0">
            <h4 class="font-bold text-indigo-600 text-xs tracking-wider uppercase mb-1.5">เวอร์ชัน v${v}</h4>
            <ul class="text-xs space-y-1.5 list-none pl-0">
              ${CHANGELOGS[v].map(item => `<li class="flex items-start gap-2 text-gray-700 font-semibold"><span class="text-indigo-500">✦</span><span>${item}</span></li>`).join('')}
            </ul>
          </div>`
      }
    })
    
    modal.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 animate-fade" style="animation: ui-pop-in .25s ease-out">
        <div class="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 border border-indigo-100 text-2xl shadow-sm">
          ✨
        </div>
        <h3 class="font-extrabold text-gray-800 text-base mb-1">มีอะไรใหม่ในเวอร์ชันนี้!</h3>
        <p class="text-xs text-gray-400 mb-4 font-medium">รายการปรับปรุงและฟีเจอร์ใหม่สำหรับผู้ดูแลระบบ</p>
        
        <div class="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-5 max-h-60 overflow-y-auto text-left">
          ${changelogHTML || '<p class="text-xs text-gray-400 text-center">ไม่มีการเปลี่ยนแปลงล่าสุด</p>'}
        </div>
        
        <button id="btn-changelog-close" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-bold shadow-md shadow-indigo-200/60 transition active:scale-95">
          รับทราบและเริ่มใช้งาน
        </button>
      </div>
      <style>
        @keyframes ui-pop-in { from { opacity: 0; transform: scale(0.9) translateY(10px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      </style>`
      
    document.body.appendChild(modal)
    
    const closeBtn = modal.querySelector('#btn-changelog-close')
    const dismissModal = () => {
      modal.remove()
      localStorage.setItem(`last_seen_version_adm_${userId}`, currentVersion)
    }
    
    closeBtn.addEventListener('click', dismissModal)
    modal.addEventListener('click', e => {
      if (e.target === modal) dismissModal()
    })
  }
}

// ─── ฝังวิดีโอในหน้าได้เลยถ้าจับรูปแบบลิงก์ได้ (YouTube/TikTok/Google Drive) ─────
// แพลตฟอร์มอื่นที่จับรูปแบบไม่ได้ fallback เป็นลิงก์เปิดแท็บใหม่
export function videoEmbedHtml(url) {
  if (!url) return ''
  const _esc = v => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/)
  if (yt) return `<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${_esc(yt[1])}" allowfullscreen loading="lazy"></iframe></div>`
  const gd = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/)
  if (gd) return `<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${_esc(gd[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`
  const tt = url.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/)
  if (tt) return `<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${_esc(tt[1])}" allowfullscreen loading="lazy"></iframe></div>`
  return `<a href="${_esc(url)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-indigo-200 text-indigo-600 text-sm font-bold hover:bg-indigo-50">🎬 เปิดดูวิดีโอ (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`
}

// ─── Show announcement pop-ups (centered, one at a time) for teachers/students ──
export function showAnnouncementPopups(items, seenKey) {
  if (!items?.length) return
  const seen = new Set(JSON.parse(localStorage.getItem(seenKey) ?? '[]'))
  const queue = items.filter(a => !seen.has(a.id))
  if (!queue.length) return

  const _esc = v => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const _fmtD = d => new Date(d).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' })

  const showNext = () => {
    const a = queue.shift()
    if (!a) return
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'
    modal.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden" style="animation: ui-pop-in .25s ease-out">
        <div class="px-6 pt-6 pb-4 flex-shrink-0">
          <div class="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-3 border border-amber-100 text-2xl shadow-sm">📢</div>
          <h3 class="font-extrabold text-gray-800 text-base leading-snug">${_esc(a.title)}</h3>
          <p class="text-[11px] text-gray-400 mt-1 font-medium">${_fmtD(a.created_at)}${a.teachers?.full_name ? ' · ' + _esc(a.teachers.full_name) : ''}</p>
        </div>
        ${a.video_url ? `<div class="px-6 flex-shrink-0 mb-3">${videoEmbedHtml(a.video_url)}</div>` : ''}
        ${a.file_url ? `<div class="px-6 flex-shrink-0"><img src="${_esc(a.file_url)}" class="w-full rounded-2xl border border-gray-100 object-contain max-h-56 mb-3" /></div>` : ''}
        <div class="px-6 pb-5 overflow-y-auto flex-1 text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">${_esc(a.body ?? '') || '<span class="text-gray-300">—</span>'}</div>
        <div class="px-6 pb-6 pt-2 flex-shrink-0 flex items-center gap-3">
          ${queue.length ? `<span class="text-[11px] text-gray-400 flex-shrink-0">อีก ${queue.length} รายการ</span>` : ''}
          <button id="btn-ann-popup-close" class="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs font-bold shadow-md shadow-indigo-200/60 transition active:scale-95">
            ${queue.length ? 'ถัดไป →' : 'รับทราบ'}
          </button>
        </div>
      </div>
      <style>
        @keyframes ui-pop-in { from { opacity: 0; transform: scale(0.9) translateY(10px) } to { opacity: 1; transform: scale(1) translateY(0) } }
      </style>`
    document.body.appendChild(modal)

    const dismiss = () => {
      seen.add(a.id)
      localStorage.setItem(seenKey, JSON.stringify([...seen]))
      modal.remove()
      showNext()
    }
    modal.querySelector('#btn-ann-popup-close').addEventListener('click', dismiss)
    modal.addEventListener('click', e => { if (e.target === modal) dismiss() })
  }

  showNext()
}

// ป๊อบอัพเต็มจอเร่งด่วนให้กรอกแบบสำรวจค่ายลูกเสือ TERANGGANU — โชว์เฉพาะผู้เข้าร่วมค่ายจริงที่ยังไม่กรอก
// (เช็คสิทธิ์/ขอบเขตจาก get_my_terangganu_survey_status() ก่อนเรียกฟังก์ชันนี้เสมอ ไม่ใช่โชว์ทุกคน)
export function showTerangganuUrgentModal(role) {
  const key = 'terangganu_survey_nudge_dismissed'
  const today = new Date().toISOString().slice(0, 10)
  if (localStorage.getItem(key) === today) return

  const guide = role === 'teacher'
    ? 'จากเมนูด้านซ้าย มองหาเมนู <b>"ค่ายลูกเสือ TERANGGANU"</b> แล้วกดเข้าไป หรือกดปุ่มด้านล่างนี้ได้เลย'
    : 'จากหน้าแรก มองหาการ์ดสีเขียว <b>"⚜️ ค่ายลูกเสือ TERANGGANU 2026"</b> แล้วกด "เปิดแบบฟอร์ม →" หรือกดปุ่มด้านล่างนี้ได้เลย'

  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-amber-900/90 to-red-900/90 backdrop-blur-sm p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden text-center" style="animation: ui-pop-in .25s ease-out">
      <div class="bg-gradient-to-r from-amber-500 to-red-500 text-white px-6 py-6">
        <div class="text-5xl mb-2">⚜️⚠️</div>
        <h3 class="font-extrabold text-lg leading-snug">ด่วน! กรุณากรอกแบบสำรวจ<br>ค่ายลูกเสือ TERANGGANU 2026</h3>
      </div>
      <div class="px-6 py-5">
        <p class="text-sm text-gray-600 leading-relaxed">ระบบยังไม่พบข้อมูลของท่านสำหรับการเดินทางเข้าค่าย กรุณากรอกข้อมูลให้เสร็จโดยเร็วที่สุด</p>
        <p class="text-xs text-gray-500 mt-3 leading-relaxed">${guide}</p>
      </div>
      <div class="px-6 pb-6 flex flex-col gap-2">
        <a href="terangganu.html" class="block py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-2xl text-sm font-bold shadow-md transition active:scale-95">📝 ไปกรอกข้อมูลตอนนี้ →</a>
        <button id="btn-terangganu-nudge-dismiss" class="py-2 text-xs text-gray-400 font-semibold">เตือนอีกครั้งพรุ่งนี้</button>
      </div>
    </div>
    <style>
      @keyframes ui-pop-in { from { opacity: 0; transform: scale(0.9) translateY(10px) } to { opacity: 1; transform: scale(1) translateY(0) } }
    </style>`
  document.body.appendChild(modal)
  modal.querySelector('#btn-terangganu-nudge-dismiss').addEventListener('click', () => {
    localStorage.setItem(key, today)
    modal.remove()
  })
}
