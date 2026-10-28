import { supabase } from './supabase.js'
import { esc, toast } from './sports-portals.js'

// ─── โหวตเลือกตั้งสภานักเรียน — หน้าแยกสำหรับจุดลงคะแนนที่มีครู/เจ้าหน้าที่คุมเท่านั้น ──────
// ไม่ใช้ session ล็อกอินเลย (anon key + RPC ฝั่ง server ทำหน้าที่ตรวจสอบ+กันโหวตซ้ำแทน)
// mirror pattern เดียวกับ js/shirt-vote-public.js

const app = document.getElementById('council-election-app')
const isSimulation = new URLSearchParams(location.search).get('mode') === 'simulation'
const installPromptState = { event: null }
let pageSettings = null
let turnout = { total_students: 0, voted_count: 0, percent: 0, opens_at: null, closes_at: null }
let simulationVotes = 537
if (isSimulation) turnout = { total_students: 1280, voted_count: simulationVotes, percent: 41.95 }

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault()
  installPromptState.event = event
  const installBtn = document.getElementById('council-install-app')
  if (installBtn) installBtn.classList.remove('hidden')
})

function formatCount(value) { return new Intl.NumberFormat('th-TH').format(Number(value || 0)) }

function renderTurnout() {
  const count = isSimulation ? simulationVotes : Number(turnout.voted_count || 0)
  const total = Number(turnout.total_students || 0)
  const percent = isSimulation ? (total ? (count * 100 / total) : 0) : Number(turnout.percent || 0)
  const target = document.getElementById('council-turnout')
  if (!target) return
  target.innerHTML = `
    <div class="bg-white rounded-2xl border p-5 shadow-sm">
      <div class="flex items-center justify-between gap-3">
        <p class="font-bold text-[var(--ink)]">สถิติผู้มาใช้สิทธิ์</p>
        <span class="text-xs text-[var(--muted-2)]">อัปเดตอัตโนมัติ</span>
      </div>
      <div class="flex items-end gap-2 mt-3"><strong class="text-4xl text-[var(--primary-dark)]">${formatCount(count)}</strong><span class="text-sm text-[var(--muted)] mb-1">จากนักเรียนทั้งหมด ${formatCount(total)} คน</span></div>
      <div class="w-full h-2.5 bg-[var(--surface-2)] rounded-full mt-3 overflow-hidden"><div class="h-full bg-[var(--primary)] rounded-full" style="width:${Math.min(100, percent)}%"></div></div>
      <p class="text-xs text-[var(--muted)] mt-2">${percent.toFixed(1)}% ของนักเรียนทั้งหมด</p>
    </div>`
}

function renderPageChrome() {
  if (pageSettings) {
    const title = document.getElementById('council-page-title')
    const image = document.getElementById('council-header-image')
    const footer = document.getElementById('council-page-footer')
    const titleWrap = document.getElementById('council-header-text-wrap')
    title.textContent = pageSettings.header_text || 'ลงคะแนนเลือกตั้งสภานักเรียน'
    const alignment = { left: 'text-left', center: 'text-center', right: 'text-right' }[pageSettings.header_alignment] || 'text-center'
    titleWrap.className = `min-w-0 flex-1 ${alignment}`
    footer.textContent = pageSettings.footer_text || ''
    if (pageSettings.header_image_path) {
      image.src = `${supabase.storage.from('council-election-assets').getPublicUrl(pageSettings.header_image_path).data.publicUrl}?v=${encodeURIComponent(pageSettings.header_image_path)}`
      image.classList.remove('hidden')
    }
  }
}

async function refreshTurnout() {
  if (isSimulation) return renderTurnout()
  const { data } = await supabase.rpc('get_public_council_election_turnout')
  if (data) turnout = data
  renderTurnout()
}

async function ensureStaffSession() {
  if (isSimulation) return true
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return false
  const { data, error } = await supabase.rpc('is_council_staff')
  return !error && data === true
}

async function loadPageSettings() {
  if (isSimulation) {
    pageSettings = { header_text: 'โหมดจำลองการเลือกตั้ง', header_alignment: 'center', footer_text: 'ข้อมูลจำลองเท่านั้น ไม่บันทึกลงฐานข้อมูลจริง', countdown_enabled: true }
    return
  }
  const { data } = await supabase.rpc('get_public_council_election_page_settings')
  if (data) pageSettings = data
}

function simulationBundle() {
  return {
    election_id: -1, gender: 'M', is_open: true,
    student: { full_name: 'นักเรียนทดสอบ', main_room: 'ห้องจำลอง' },
    candidates: [
      { id: 1, ballot_number: 1, full_name: 'ผู้สมัครจำลอง หมายเลข 1', main_room: 'ห้องจำลอง', slogan: 'ทดสอบการเลือกผู้สมัคร', policies: [], experience: [] },
      { id: 2, ballot_number: 2, full_name: 'ผู้สมัครจำลอง หมายเลข 2', main_room: 'ห้องจำลอง', slogan: 'ทดสอบการลงคะแนน', policies: [], experience: [] },
    ],
    thank_you_message: 'บัตรจำลองถูกบันทึกไว้ในหน้านี้เท่านั้น',
  }
}

function studentCard(s) {
  return `
    <div class="flex items-center gap-3 p-3 bg-[var(--surface-2)] rounded-2xl border">
      ${s.image_url
        ? `<img src="${esc(s.image_url)}" class="w-14 h-16 object-cover rounded-xl border">`
        : `<div class="w-14 h-16 rounded-xl bg-[var(--primary-soft-line)] text-[var(--primary-70)] grid place-items-center font-bold">${esc((s.full_name || '?').charAt(0))}</div>`}
      <div class="min-w-0 flex-1">
        <p class="font-bold text-[var(--ink)] text-sm truncate">${esc(s.full_name)}</p>
        <p class="text-xs text-[var(--muted-2)]">ห้อง ${esc(s.main_room || '—')}</p>
      </div>
    </div>`
}

async function renderLanding() {
  app.innerHTML = `
    ${isSimulation ? '<div class="mb-3 rounded-xl bg-amber-100 text-amber-900 p-3 text-center text-sm font-bold">โหมดจำลอง — ไม่มีข้อมูลใดถูกบันทึกในฐานข้อมูลจริง</div>' : ''}
    <div id="council-turnout" class="mb-4"></div>
    <div class="bg-white/90 rounded-2xl border p-5 text-center">
      <p class="text-sm text-[var(--muted)]">${isSimulation ? 'ทดสอบขั้นตอนลงคะแนนได้โดยใช้รหัสจำลอง' : 'ลงคะแนนได้ที่จุดซึ่งโรงเรียนจัดไว้ และมีเจ้าหน้าที่ประจำเครื่อง'}</p>
      <button id="btn-open-voting" class="w-full mt-4 py-4 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-extrabold text-lg shadow">🗳️ ลงคะแนนเลือกตั้ง</button>
      ${!isSimulation ? '<button id="council-install-app" class="w-full mt-3 py-3 rounded-xl border border-[var(--primary-70)] text-[var(--primary-dark)] font-bold">ติดตั้งหน้านี้เป็นแอปบนเครื่องห้องคอม</button><p class="text-[11px] text-[var(--muted-2)] mt-2">แนะนำติดตั้งเฉพาะเครื่องห้องคอมที่โรงเรียนจัดไว้</p>' : ''}
    </div>
    <div id="council-countdown" class="mt-4 text-center text-white/90 text-sm"></div>
    <div id="council-page-footer" class="text-xs text-white/70 text-center mt-5"></div>
  `

  renderTurnout()
  renderPageChrome()
  renderCountdown()

  app.querySelector('#btn-open-voting').addEventListener('click', async () => {
    if (!isSimulation && !await ensureStaffSession()) {
      app.innerHTML = `
        <div class="bg-white rounded-2xl border p-6 text-center">
          <p class="text-3xl mb-2">🔒</p><h2 class="font-bold text-lg">ใช้ลงคะแนนจากเครื่องห้องคอมที่เจ้าหน้าที่เข้าสู่ระบบไว้</h2>
          <p class="text-sm text-[var(--muted)] mt-2">หากเป็นเครื่องประจำจุดเลือกตั้ง ให้ครูหรือผู้ดูแลเข้าสู่ระบบก่อนเริ่มใช้งาน</p>
          <a class="block mt-4 py-3 rounded-xl bg-[var(--primary)] text-white font-bold" href="/pp5online/index.html?next=vt69.html">เข้าสู่ระบบครู/ผู้ดูแล</a>
          <button id="btn-return-landing" class="mt-3 text-sm text-[var(--muted)]">กลับหน้าหลัก</button>
        </div>`
      app.querySelector('#btn-return-landing').addEventListener('click', renderLanding)
      return
    }
    openStudentCodeModal()
  })

  const installBtn = app.querySelector('#council-install-app')
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (installPromptState.event) {
        installPromptState.event.prompt()
        await installPromptState.event.userChoice
        installPromptState.event = null
      } else {
        alert('ใน Chrome ให้เปิดเมนู ⋮ แล้วเลือก “ติดตั้งหน้าเว็บเป็นแอป” หรือ “Install page as app”\n\nหากไม่พบเมนูนี้ ให้ตรวจว่าใช้ Chrome/Edge รุ่นปัจจุบันและเปิดลิงก์ผ่าน HTTPS')
      }
    })
  }
}

function renderCountdown() {
  const target = document.getElementById('council-countdown')
  if (!target) return
  if (pageSettings?.countdown_enabled === false) { target.textContent = ''; return }
  const end = turnout.closes_at ? new Date(turnout.closes_at) : null
  const start = turnout.opens_at ? new Date(turnout.opens_at) : null
  if (!end && !start) { target.textContent = ''; return }
  const now = new Date()
  const targetDate = start && now < start ? start : end
  if (!targetDate) { target.textContent = 'เปิดลงคะแนนแล้ว'; return }
  const ms = targetDate - now
  if (ms <= 0) { target.textContent = start && now < start ? '' : 'ปิดรับลงคะแนนแล้ว'; return }
  const totalMinutes = Math.floor(ms / 60000)
  const days = Math.floor(totalMinutes / 1440)
  const hours = Math.floor((totalMinutes % 1440) / 60)
  const minutes = totalMinutes % 60
  target.textContent = `${start && now < start ? 'เริ่มลงคะแนนใน' : 'ปิดลงคะแนนใน'} ${days ? `${days} วัน ` : ''}${hours} ชม. ${minutes} นาที`
}

function openSettings() {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[90] bg-black/55 flex items-center justify-center p-4'
  modal.innerHTML = `
    <form id="election-settings-form" class="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 space-y-3">
      <div class="flex items-center justify-between"><h2 class="font-extrabold text-lg">ตั้งค่าหน้าลงคะแนน</h2><button type="button" id="settings-close" class="text-xl text-[var(--muted)]">✕</button></div>
      <label class="block text-xs font-bold">ข้อความหัวหน้า<input name="header_text" maxlength="240" class="mt-1 w-full border rounded-xl px-3 py-2" /></label>
      <label class="block text-xs font-bold">ตำแหน่งข้อความ<select name="header_alignment" class="mt-1 w-full border rounded-xl px-3 py-2"><option value="left">ชิดซ้าย</option><option value="center">ตรงกลาง</option><option value="right">ชิดขวา</option></select></label>
      <label class="block text-xs font-bold">ภาพหัวหน้า (PNG ไม่เกิน 3 MB)<input name="header_image" type="file" accept="image/png" class="mt-1 w-full border rounded-xl px-3 py-2" /></label>
      <label class="block text-xs font-bold">ข้อความท้ายหน้า<textarea name="footer_text" maxlength="500" rows="3" class="mt-1 w-full border rounded-xl px-3 py-2"></textarea></label>
      <label class="block text-xs font-bold">เวลานับถอยหลัง<select name="countdown_enabled" class="mt-1 w-full border rounded-xl px-3 py-2"><option value="true">เปิดใช้งาน</option><option value="false">ปิดใช้งาน</option></select></label>
      <p id="settings-error" class="hidden text-xs text-[var(--bad)]"></p>
      <button class="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-bold">บันทึกการตั้งค่า</button>
    </form>`
  document.body.appendChild(modal)
  const form = modal.querySelector('#election-settings-form')
  form.elements.header_text.value = pageSettings?.header_text || ''
  form.elements.header_alignment.value = pageSettings?.header_alignment || 'center'
  form.elements.footer_text.value = pageSettings?.footer_text || ''
  form.elements.countdown_enabled.value = pageSettings?.countdown_enabled === false ? 'false' : 'true'
  modal.querySelector('#settings-close').addEventListener('click', () => modal.remove())
  form.addEventListener('submit', async event => {
    event.preventDefault()
    const errorEl = form.querySelector('#settings-error')
    errorEl.classList.add('hidden')
    const button = form.querySelector('button[type="submit"],button:not([type])')
    button.disabled = true; button.textContent = 'กำลังบันทึก…'
    try {
      let imagePath = pageSettings?.header_image_path || null
      const file = form.elements.header_image.files?.[0]
      if (file) {
        if (file.type !== 'image/png' || file.size > 3 * 1024 * 1024) throw new Error('เลือกไฟล์ PNG ที่มีขนาดไม่เกิน 3 MB')
        if (!pageSettings?.term_id) throw new Error('ยังไม่พบเทอมการเลือกตั้ง')
        imagePath = `${pageSettings.term_id}/header-${Date.now()}.png`
        const { error: uploadError } = await supabase.storage.from('council-election-assets').upload(imagePath, file, { contentType: 'image/png', upsert: false })
        if (uploadError) throw uploadError
      }
      const payload = {
        header_text: form.elements.header_text.value,
        header_alignment: form.elements.header_alignment.value,
        header_image_path: imagePath,
        footer_text: form.elements.footer_text.value,
        countdown_enabled: form.elements.countdown_enabled.value === 'true',
      }
      const { data, error } = await supabase.rpc('save_council_election_page_settings', { p_settings: payload })
      if (error) throw error
      pageSettings = data
      renderPageChrome(); renderCountdown(); modal.remove()
      toast('บันทึกการตั้งค่าแล้ว')
    } catch (error) {
      errorEl.textContent = error.message || 'บันทึกไม่สำเร็จ'; errorEl.classList.remove('hidden')
      button.disabled = false; button.textContent = 'บันทึกการตั้งค่า'
    }
  })
}

function openStudentCodeModal() {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[80] bg-black/55 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
      <div class="flex items-center justify-between gap-2 mb-4"><h2 class="font-extrabold text-lg">กรอกรหัสนักเรียน</h2><button id="code-modal-close" class="text-xl text-[var(--muted)]">✕</button></div>
      <input id="student-code-input" inputmode="numeric" autocomplete="off" placeholder="เช่น 608001" class="w-full border border-[var(--line)] rounded-xl px-4 py-4 text-xl font-bold text-center tracking-widest focus:outline-none focus:border-[var(--primary-70)]" />
      <p id="student-code-error" class="hidden text-xs text-[var(--bad)] mt-2 text-center"></p>
      <div id="student-confirm-card" class="hidden mt-4"></div>
      <p class="text-xs text-[var(--muted-2)] text-center mt-4">กรอกรหัสของตนเองและตรวจสอบชื่อก่อนยืนยัน</p>
    </div>`
  document.body.appendChild(modal)
  const input = modal.querySelector('#student-code-input')
  const errorEl = modal.querySelector('#student-code-error')
  const cardEl = modal.querySelector('#student-confirm-card')
  modal.querySelector('#code-modal-close').addEventListener('click', () => modal.remove())
  input.focus()

  const lookup = async () => {
    const code = input.value.trim()
    errorEl.classList.add('hidden')
    cardEl.classList.add('hidden')
    cardEl.innerHTML = ''
    if (!code) return
    let bundle
    if (isSimulation) bundle = simulationBundle()
    else {
      const result = await supabase.rpc('get_public_council_election_bundle', { p_code: code })
      bundle = result.data
      if (result.error) { errorEl.textContent = 'ระบบตรวจสอบไม่สำเร็จ กรุณาให้เจ้าหน้าที่เข้าสู่ระบบใหม่'; errorEl.classList.remove('hidden'); return }
    }
    if (bundle?.error === 'staff_login_required') { errorEl.textContent = 'เซสชันเจ้าหน้าที่หมดอายุ กรุณาเข้าสู่ระบบใหม่'; errorEl.classList.remove('hidden'); return }
    if (bundle?.error === 'student_not_found') { errorEl.textContent = 'ไม่พบรหัสนักเรียนนี้ กรุณาตรวจสอบอีกครั้ง'; errorEl.classList.remove('hidden'); return }
    if (bundle?.error === 'gender_unknown') { errorEl.textContent = 'ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบ'; errorEl.classList.remove('hidden'); return }
    renderConfirmCard(bundle, code, modal)
  }
  input.addEventListener('blur', () => { if (input.value.trim()) lookup() })
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); input.blur() } })

  function renderConfirmCard(bundle, code, modal) {
    const s = bundle.student
    cardEl.innerHTML = `
      ${studentCard(s)}
      <button id="btn-enter-vote" class="w-full mt-3 py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm">🗳️ ใช่ฉันเอง — เข้าหน้าโหวต</button>
      <button id="btn-not-me" class="w-full mt-2 py-2 text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)]">ไม่ใช่ฉัน กรอกรหัสใหม่</button>
    `
    cardEl.classList.remove('hidden')
    cardEl.querySelector('#btn-enter-vote').addEventListener('click', () => { modal.remove(); renderVotePage(bundle, code) })
    cardEl.querySelector('#btn-not-me').addEventListener('click', () => { input.value = ''; cardEl.classList.add('hidden'); input.focus() })
  }
}

function renderVotePage(bundle, code) {
  if (bundle.error === 'election_not_found') {
    app.innerHTML = `
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[var(--muted-2)] text-sm">ยังไม่มีการเลือกตั้งสำหรับสภาของคุณในขณะนี้</div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    return
  }

  const alreadyVoted = bundle.already_voted || !!bundle.already_voted_candidate_id

  if (alreadyVoted) {
    app.innerHTML = `
      <div class="bg-white rounded-2xl border p-6 text-center space-y-3">
        <p class="text-3xl">✅</p>
        <p class="font-bold text-[var(--ink)]">คุณลงคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!</p>
        <p class="text-xs text-[var(--muted-2)] mt-2">${bundle.already_abstained ? 'บันทึกการไม่ประสงค์ลงคะแนนแล้ว' : esc(bundle.thank_you_message || 'ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ')}</p>
        <button id="btn-restart" class="w-full mt-2 py-3 rounded-2xl bg-[var(--bg-2)] hover:bg-[var(--line)] text-[var(--ink-2)] font-bold text-sm">เสร็จสิ้น — คนต่อไปกรอกรหัสใหม่</button>
      </div>`
    app.querySelector('#btn-restart').addEventListener('click', renderLanding)
    return
  }

  if (!bundle.is_open) {
    app.innerHTML = `
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[var(--muted-2)] text-sm">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    return
  }

  let selected = null
  app.innerHTML = `
    <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
    <div class="bg-white rounded-2xl border p-5 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] text-center mb-1">เลือกผู้สมัครที่ต้องการเลือกตั้ง</p>
      <div id="candidate-list" class="space-y-2"></div>
      <div id="vote-confirm-area"></div>
    </div>`
  app.querySelector('#btn-back').addEventListener('click', renderLanding)
  const list = app.querySelector('#candidate-list')
  const confirmArea = app.querySelector('#vote-confirm-area')

  if (!bundle.candidates.length) {
    list.innerHTML = `<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีผู้สมัครในการเลือกตั้งนี้</p>`
  }

  // โปรไฟล์เต็มของผู้สมัคร (สเปคข้อ 8.11) — ปุ่ม "ดูรายละเอียด" แยกจากปุ่มเลือก และเลือก
  // จากในโปรไฟล์ได้เลย (append ไป document.body ตรงๆ เพราะหน้านี้ standalone ไม่มีระบบ modal อื่น)
  const renderProfileModal = c => {
    const policies = Array.isArray(c.policies) ? c.policies : []
    const experience = Array.isArray(c.experience) ? c.experience : []
    const modal = document.createElement('div')
    modal.className = 'fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
    modal.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto">
        <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
          ${c.image_url
            ? `<img src="${esc(c.image_url)}" class="w-full h-full object-cover">`
            : `<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${esc((c.full_name || '?').charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 grid place-items-center font-extrabold text-[var(--primary-dark)] shadow">${c.ballot_number}</div>
          <button id="profile-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${esc(c.full_name)}</p>
            <p class="text-xs text-[var(--muted)]">${esc(c.main_room || '')}${(c.gpa_general != null || c.gpa_religious != null) ? ` · เกรดสามัญ ${esc(c.gpa_general ?? '—')} · ศาสนา ${esc(c.gpa_religious ?? '—')}` : ''}</p>
          </div>
          ${c.slogan ? `<p class="text-sm font-bold text-[var(--primary-dark)]">"${esc(c.slogan)}"</p>` : ''}
          ${c.vision ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${esc(c.vision)}</p></div>` : ''}
          ${policies.length ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${policies.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
          ${experience.length ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${experience.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
          ${!c.slogan && !c.vision && !policies.length && !experience.length ? `<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>` : ''}
          <button id="profile-modal-select" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm mt-2">เลือกคนนี้</button>
        </div>
      </div>`
    document.body.appendChild(modal)
    const close = () => modal.remove()
    modal.addEventListener('click', e => { if (e.target === modal) close() })
    modal.querySelector('#profile-modal-close').addEventListener('click', close)
    modal.querySelector('#profile-modal-select').addEventListener('click', () => {
      close(); selected = c.id; renderList(); renderConfirm()
    })
  }

  const renderList = () => {
    list.innerHTML = bundle.candidates.map(c => `
      <div class="rounded-xl border p-3 transition ${selected === c.id ? 'border-[var(--primary-70)] bg-[var(--primary-soft)]' : 'border-[var(--line-soft)]'}">
        <button data-candidate="${c.id}" class="w-full flex items-center gap-3 text-left">
          <div class="w-8 h-8 rounded-full bg-[var(--primary-soft-line)] text-[var(--primary-dark)] grid place-items-center font-bold text-sm flex-shrink-0">${c.ballot_number}</div>
          ${c.image_url
            ? `<img src="${esc(c.image_url)}" class="w-10 h-12 object-cover rounded-[10px] border flex-shrink-0">`
            : `<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border">${esc((c.full_name || '?').charAt(0))}</div>`}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(c.full_name)}</p>
            <p class="text-xs text-[var(--muted)]">${esc(c.main_room || '')}</p>
            ${c.slogan ? `<p class="text-xs text-[var(--primary-dark)] font-semibold truncate mt-0.5">"${esc(c.slogan)}"</p>` : ''}
          </div>
        </button>
        <button data-detail="${c.id}" class="w-full mt-2 pt-2 border-t border-[var(--line-soft)] text-xs font-bold text-[var(--primary)]">ℹ️ ดูรายละเอียด</button>
      </div>`).join('') + `
      <button data-candidate="abstain" class="w-full p-4 rounded-xl border-2 ${selected === 'abstain' ? 'border-[var(--primary-70)] bg-[var(--primary-soft)]' : 'border-[var(--line-soft)] bg-white'} text-sm font-bold text-[var(--ink-2)]">ไม่ประสงค์ลงคะแนน</button>`
    list.querySelectorAll('[data-candidate]').forEach(btn => {
      btn.addEventListener('click', () => { selected = btn.dataset.candidate === 'abstain' ? 'abstain' : Number(btn.dataset.candidate); renderList(); renderConfirm() })
    })
    list.querySelectorAll('[data-detail]').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = bundle.candidates.find(x => x.id === Number(btn.dataset.detail))
        if (c) renderProfileModal(c)
      })
    })
  }

  const renderConfirm = () => {
    if (!selected) { confirmArea.innerHTML = ''; return }
    const isAbstain = selected === 'abstain'
    const c = isAbstain ? null : bundle.candidates.find(x => x.id === selected)
    confirmArea.innerHTML = `
      <div class="border-t border-[var(--line-soft)] pt-3 mt-1 space-y-2">
        <p class="text-xs text-[var(--muted)] text-center">${isAbstain ? 'ยืนยันไม่ประสงค์ลงคะแนนใช่หรือไม่?' : `แน่ใจนะว่าจะเลือก <span class="font-bold text-[var(--ink-2)]">${esc(c?.full_name || '')}</span>?`}</p>
        <button id="btn-confirm-vote" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm">✅ ยืนยันลงคะแนน</button>
      </div>`
    confirmArea.querySelector('#btn-confirm-vote').addEventListener('click', async () => {
      const btn = confirmArea.querySelector('#btn-confirm-vote')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      let data, error
      if (isSimulation) {
        simulationVotes += 1
        data = { ok: true }
      } else {
        const result = await supabase.rpc('cast_public_council_vote', { p_code: code, p_candidate_id: isAbstain ? null : selected })
        data = result.data; error = result.error
      }
      if (error || data?.error) {
        const msg = data?.error === 'already_voted' ? 'รหัสนี้ลงคะแนนไปแล้ว' : data?.error === 'election_not_open' ? 'ปิดโหวตแล้ว' : data?.error === 'staff_login_required' ? 'กรุณาเข้าสู่ระบบเจ้าหน้าที่ใหม่' : 'บันทึกไม่สำเร็จ กรุณาลองใหม่'
        toast(msg, 'error')
        btn.disabled = false; btn.textContent = '✅ ยืนยันลงคะแนน'
        return
      }
      toast(isSimulation ? 'บัตรจำลองสำเร็จ — ฐานข้อมูลจริงไม่ได้เปลี่ยนแปลง' : 'บันทึกคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!')
      bundle.already_voted_candidate_id = isAbstain ? null : selected
      bundle.already_voted = true
      bundle.already_abstained = isAbstain
      await refreshTurnout()
      renderVotePage(bundle, code)
    })
  }

  renderList()
}

async function boot() {
  if (!isSimulation) {
    try { await navigator.serviceWorker?.register('/pp5online/sw.js', { scope: '/pp5online/' }) } catch {}
  }
  await Promise.all([loadPageSettings(), refreshTurnout()])
  renderLanding()
  if (!isSimulation) {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) {
      const { data: staff } = await supabase.rpc('is_council_staff')
      const settingsButton = document.getElementById('council-election-settings')
      if (staff === true && settingsButton) {
        settingsButton.classList.remove('hidden')
        settingsButton.addEventListener('click', openSettings)
      }
    }
    setInterval(refreshTurnout, 10000)
    setInterval(renderCountdown, 30000)
  }
}

boot()
