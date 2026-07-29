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
