// ─── Toast Notification ───────────────────────────────────────────────────────
export function showToast(message, type = 'info') {
  const colors = {
    success: 'bg-green-500',
    error:   'bg-red-500',
    warning: 'bg-yellow-500',
    info:    'bg-blue-500',
  }

  const toast = document.createElement('div')
  toast.className = `fixed top-5 right-5 z-50 px-5 py-3 rounded-xl text-white shadow-lg text-sm
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
}

function _openFeedbackModal({ profileId, role, name }) {
  document.getElementById('feedback-modal')?.remove()

  const m = document.createElement('div')
  m.id = 'feedback-modal'
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50'
  m.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
      <div style="background:linear-gradient(135deg,#db2777,#9d174d);" class="px-5 py-4 flex items-center justify-between">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">💬 ส่งความคิดเห็นถึงแอดมิน</h3>
          <p class="text-white/80 text-xs mt-0.5">เสียงของคุณจะถูกส่งตรงถึงผู้ดูแล/ผู้พัฒนาระบบ</p>
        </div>
        <button id="fb-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
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
      </div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('#fb-close').addEventListener('click', () => m.remove())

  let category = FEEDBACK_CATEGORIES[0].value
  const catBtns = [...m.querySelectorAll('.fb-cat-btn')]
  catBtns.forEach(b => b.addEventListener('click', () => {
    category = b.dataset.cat
    catBtns.forEach(x => {
      const on = x === b
      x.className = `fb-cat-btn px-3 py-2 rounded-xl border text-xs font-medium transition text-left ${on ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`
    })
  }))

  // ตรวจโควต้าการส่งต่อเดือน — แสดงให้เห็นก่อนกดส่ง และล็อกปุ่มถ้าครบโควต้าแล้ว
  ;(async () => {
    const quotaEl  = m.querySelector('#fb-quota-info')
    const noticeEl = m.querySelector('#fb-limit-notice')
    const submitBtn = m.querySelector('#fb-submit')
    try {
      const { getMyFeedbackQuota, getSystemConfig } = await import('./api.js')
      const { used, limit, remaining } = await getMyFeedbackQuota(profileId, role)
      if (quotaEl) {
        quotaEl.textContent = `โควต้าส่งความคิดเห็นเดือนนี้: ใช้ไป ${used}/${limit} ครั้ง (เหลืออีก ${remaining} ครั้ง)`
        quotaEl.className = `text-[11px] font-medium ${remaining <= 0 ? 'text-rose-500' : remaining === 1 ? 'text-amber-500' : 'text-gray-400'}`
      }
      if (remaining <= 0 && submitBtn) {
        submitBtn.disabled = true
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed')
        if (noticeEl) {
          if (role === 'teacher') {
            const cfg = await getSystemConfig().catch(() => ({}))
            const lineHref = cfg.contactLine
              ? (cfg.contactLine.startsWith('http') ? cfg.contactLine : `https://line.me/R/ti/p/${cfg.contactLine}`)
              : null
            noticeEl.innerHTML = lineHref
              ? `⚠️ คุณส่งความคิดเห็นครบโควต้าของเดือนนี้แล้ว หากเรื่องเร่งด่วน <a href="${_fbEsc(lineHref)}" target="_blank" rel="noopener" class="font-semibold underline">คลิกที่นี่เพื่อแจ้งผ่าน LINE</a> แทนได้เลยครับ`
              : `⚠️ คุณส่งความคิดเห็นครบโควต้าของเดือนนี้แล้ว กรุณารอจนถึงเดือนถัดไปนะครับ`
          } else {
            noticeEl.textContent = '⚠️ คุณส่งความคิดเห็นครบโควต้าของเดือนนี้แล้ว กรุณารอจนถึงเดือนถัดไป หรือแจ้งผ่านครูประจำชั้น/ครูที่ปรึกษาแทนนะครับ'
          }
          noticeEl.classList.remove('hidden')
        }
      }
    } catch {
      if (quotaEl) quotaEl.textContent = ''
    }
  })()

  m.querySelector('#fb-submit').addEventListener('click', async () => {
    const message = m.querySelector('#fb-message').value.trim()
    if (!message) { showToast('กรุณาพิมพ์ข้อความก่อนส่ง', 'warning'); return }
    const btn = m.querySelector('#fb-submit')
    setButtonLoading(btn, true)
    try {
      const { submitAppFeedback } = await import('./api.js')
      await submitAppFeedback({ profileId, senderRole: role, senderName: name, category, message })
      showToast('ส่งความคิดเห็นเรียบร้อยแล้ว ขอบคุณครับ 🙏', 'success')
      m.remove()
    } catch (err) {
      setButtonLoading(btn, false, '📨 ส่งความคิดเห็น')
      if (err?.code === 'FEEDBACK_LIMIT_REACHED') {
        showToast(`ส่งความคิดเห็นครบโควต้าของเดือนนี้แล้ว (${err.limit} ครั้ง/เดือน)`, 'warning')
        btn.disabled = true
        btn.classList.add('opacity-50', 'cursor-not-allowed')
      } else {
        showToast('ส่งไม่สำเร็จ ลองใหม่อีกครั้ง', 'error')
      }
    }
  })
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
