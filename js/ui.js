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
