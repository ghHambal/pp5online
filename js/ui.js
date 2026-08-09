import { APP_VERSION } from './version.js?v=10.19.10'

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
  { value: 'compliment', label: '😊 ชื่นชม / ขอบคุณ' },
  { value: 'suggestion', label: '💡 ข้อเสนอแนะ' },
  { value: 'problem',    label: '🐞 แจ้งปัญหา / ข้อบกพร่อง' },
  { value: 'other',      label: '💬 อื่นๆ' },
]

export function injectFeedbackWidget({ profileId, role, name }) {
  if (!profileId || document.getElementById('feedback-fab')) return

  const fab = document.createElement('button')
  fab.id = 'feedback-fab'
  fab.title = 'ส่งความคิดเห็นถึงแอดมิน/ผู้พัฒนา'
  fab.className = 'fixed z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white shadow-lg flex items-center justify-center overflow-hidden transition-transform hover:scale-105'
  // ครู: ซ้อนเหนือปุ่มกาแฟ ☕ (ขวาล่าง, สูง 56px) เว้นช่องว่าง — นักเรียน: เลี่ยงแถบเมนูล่าง (ไม่มีปุ่มกาแฟ)
  const bottomOffset = role === 'student'
    ? 'calc(76px + 12px + env(safe-area-inset-bottom))'
    : 'calc(max(0.75rem, env(safe-area-inset-bottom)) + 68px)'
  fab.style.cssText = `position:fixed;right:max(0.75rem, env(safe-area-inset-right));left:auto;top:auto;bottom:${bottomOffset};background:linear-gradient(135deg,#db2777,#9d174d);font-size:1.3rem;`
  fab.textContent = '💬'
  document.body.appendChild(fab)

  fab.addEventListener('click', () => _openFeedbackModal({ profileId, role, name }))

  window._openFeedbackWidget = (prefillMessage) => {
    _openFeedbackModal({ profileId, role, name, prefillMessage })
  }
}

const _FB_STATUS = {
  label: (item) => {
    if (item.admin_reply) return { icon: '💬', text: 'มีการตอบกลับ', cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' }
    if (item.status === 'resolved')     return { icon: '✅', text: 'แก้ไขแล้ว',     cls: 'text-emerald-700 bg-emerald-50 border-emerald-200' }
    if (item.status === 'acknowledged') return { icon: '👍', text: 'รับทราบแล้ว',   cls: 'text-blue-700 bg-blue-50 border-blue-200' }
    if (item.is_read)                   return { icon: '👀', text: 'อ่านแล้ว',       cls: 'text-indigo-700 bg-indigo-50 border-indigo-200' }
    return                                     { icon: '⏳', text: 'รอรับเรื่อง',    cls: 'text-gray-500 bg-gray-50 border-gray-200' }
  },
}
const _FB_CAT_ICON = { compliment:'😊', suggestion:'💡', problem:'🐞', other:'💬' }

function _openFeedbackModal({ profileId, role, name, prefillMessage }) {
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
            ${FEEDBACK_CATEGORIES.map((c, i) => `
            <button type="button" class="fb-cat-btn px-3 py-2 rounded-xl border text-xs font-medium transition text-left ${i === 0 ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}" data-cat="${c.value}">${c.label}</button>`).join('')}
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-gray-600 mb-1.5">ข้อความ</p>
          <textarea id="fb-message" rows="5" maxlength="2000"
            class="input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm resize-none"
            placeholder="พิมพ์ความคิดเห็น ข้อเสนอแนะ หรือแจ้งปัญหาที่นี่..."></textarea>
        </div>
        <p class="text-[11px] text-gray-400">ส่งในนาม: <span class="font-semibold text-gray-600">${_fbEsc(name || '—')}</span> (${role === 'teacher' ? 'ครู' : 'นักเรียน'})</p>
        <p id="fb-quota-info" class="text-[11px] text-gray-400">กำลังตรวจสอบโควต้า...</p>
        <div id="fb-limit-notice" class="hidden text-[11px] leading-relaxed text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2"></div>
        <button id="fb-submit" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg transition active:scale-[0.98]"
          style="background:linear-gradient(135deg,#db2777,#9d174d);">📨 ส่งความคิดเห็น</button>
      </div>`

    // prefill จาก caller (เช่น error จาก Gemini)
    if (prefillMessage) {
      const ta = body.querySelector('#fb-message')
      if (ta) ta.value = prefillMessage
    }

    let category = prefillMessage ? 'problem' : FEEDBACK_CATEGORIES[0].value
    const catBtns = [...body.querySelectorAll('.fb-cat-btn')]
    // sync active state ถ้า prefill เป็น problem
    catBtns.forEach(b => {
      const on = b.dataset.cat === category
      b.className = `fb-cat-btn px-3 py-2 rounded-xl border text-xs font-medium transition text-left ${on ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`
    })
    catBtns.forEach(b => b.addEventListener('click', () => {
      category = b.dataset.cat
      catBtns.forEach(x => {
        const on = x === b
        x.className = `fb-cat-btn px-3 py-2 rounded-xl border text-xs font-medium transition text-left ${on ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`
      })
    }))

    ;(async () => {
      const quotaEl   = body.querySelector('#fb-quota-info')
      const noticeEl  = body.querySelector('#fb-limit-notice')
      const submitBtn = body.querySelector('#fb-submit')
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

    body.querySelector('#fb-submit').addEventListener('click', async () => {
      const message = body.querySelector('#fb-message').value.trim()
      if (!message) { showToast('กรุณาพิมพ์ข้อความก่อนส่ง', 'warning'); return }
      const btn = body.querySelector('#fb-submit')
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
          <div class="rounded-2xl border border-gray-100 bg-gray-50/60 p-3.5 space-y-2">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <span class="text-xs font-semibold text-gray-600">${cat} ${FEEDBACK_CATEGORIES.find(c => c.value === item.category)?.label?.replace(/^.\s/,'') ?? item.category}</span>
              <span class="text-[10px] border rounded-full px-2 py-0.5 font-semibold ${st.cls}">${st.icon} ${st.text}</span>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed line-clamp-3">${_fbEsc(item.message)}</p>
            <p class="text-[10px] text-gray-400">${_fmtDate(item.created_at)}</p>
            ${item.admin_reply ? `
            <div class="bg-white border border-emerald-100 rounded-xl px-3 py-2 mt-1">
              <p class="text-[10px] font-semibold text-emerald-700 mb-0.5">💬 แอดมินตอบกลับ</p>
              <p class="text-xs text-gray-700 leading-relaxed">${_fbEsc(item.admin_reply)}</p>
            </div>` : ''}
          </div>`
      }).join('') + `</div>`
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

// ─── Check and Show Changelog Pop-up for Admin/Teacher ─────────────────────
export function checkAndShowChangelog(userId, forceShow = false) {
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
        <p class="text-xs text-gray-400 mb-4 font-medium">รายการปรับปรุงและฟีเจอร์ใหม่สำหรับผู้ดูแลระบบและคุณครู</p>
        
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
