import { supabase } from './supabase.js'
import { esc, toast } from './sports-portals.js'

// ─── โหวตเลือกตั้งสภานักเรียน — หน้าแยกสำหรับจุดลงคะแนนของโรงเรียน ──────
// ผู้ใช้ไม่ต้องล็อกอิน; RPC ฝั่ง server ตรวจผู้มีสิทธิ์ ช่วงเวลา และการลงคะแนนซ้ำ
// mirror pattern เดียวกับ js/shirt-vote-public.js

const app = document.getElementById('council-election-app')
const isSimulation = new URLSearchParams(location.search).get('mode') === 'simulation'
const installPromptState = { event: null }
const installDisplayMode = window.matchMedia?.('(display-mode: standalone)')
let pageSettings = null
let settingsAdminCode = ''
let turnout = { total_students: 0, voted_count: 0, percent: 0, opens_at: null, closes_at: null }
let staffPositionTurnout = { male: {}, female: {} }
let simulationVotes = 537
if (isSimulation) turnout = {
  total_students: 1280, voted_count: simulationVotes, percent: 41.95,
  student_breakdown: {
    male: { total: 640, voted: 278, percent: 43.44 },
    female: { total: 640, voted: 259, percent: 40.47 },
  },
  classes: [
    { room: 'ม.1/1', total: 40, voted: 18, male_total: 20, male_voted: 9, female_total: 20, female_voted: 9, unknown_total: 0, unknown_voted: 0 },
    { room: 'ม.1/2', total: 40, voted: 17, male_total: 19, male_voted: 8, female_total: 21, female_voted: 9, unknown_total: 0, unknown_voted: 0 },
  ],
  staff_breakdown: {
    teachers: { total: 192, voted: 30 },
    personnel: { total: 50, voted: 12, male_total: 29, male_voted: 7, female_total: 21, female_voted: 5 },
  },
}
if (isSimulation) staffPositionTurnout = {
  male: { teachers_total: 192, teachers_voted: 30, personnel_total: 50, personnel_voted: 12 },
  female: { teachers_total: 192, teachers_voted: 30, personnel_total: 50, personnel_voted: 12 },
}

const PUBLIC_TEXT_FIELDS = [
  ['landing_instruction', 'คำแนะนำหน้าแรก', 'ลงคะแนนได้ที่จุดซึ่งโรงเรียนจัดไว้ และมีเจ้าหน้าที่ประจำเครื่อง'],
  ['vote_button', 'ปุ่มลงคะแนน', '🗳️ ลงคะแนนเลือกตั้ง'],
  ['personnel_button', 'ปุ่มบุคลากร', 'บุคลากรคลิกที่นี่เพื่อเลือกตั้ง'],
  ['student_code_title', 'หัวข้อกรอกรหัส', 'กรอกรหัสนักเรียน'],
  ['student_code_placeholder', 'ตัวอย่างรหัสนักเรียน', 'เช่น 608001'],
  ['student_code_hint', 'คำแนะนำกรอกรหัส', 'กรอกรหัสของตนเองและตรวจสอบชื่อก่อนยืนยัน'],
  ['teacher_ballot_title', 'หัวข้อเลือกตำแหน่ง', 'เลือกลงคะแนนประธานสภานักเรียน'],
  ['teacher_ballot_hint', 'คำแนะนำครู/บุคลากร', 'ครูและบุคลากรลงคะแนนได้ทั้งตำแหน่งประธานชายและประธานหญิง ตำแหน่งละหนึ่งครั้ง'],
  ['male_position_label', 'ชื่อตำแหน่งเพศชาย', 'ประธานชาย'],
  ['female_position_label', 'ชื่อตำแหน่งเพศหญิง', 'ประธานหญิง'],
  ['candidate_heading', 'หัวข้อหน้าผู้สมัคร', 'เลือกผู้สมัครที่ต้องการเลือกตั้ง'],
  ['candidate_details', 'ปุ่มดูรายละเอียด', 'ℹ️ ดูรายละเอียด'],
  ['abstain_label', 'ปุ่มไม่ประสงค์ลงคะแนน', '🙅 ไม่ประสงค์ลงคะแนน'],
  ['no_candidates', 'ข้อความเมื่อไม่มีผู้สมัคร', 'ยังไม่มีผู้สมัครในการเลือกตั้งนี้'],
  ['closed_notice', 'ข้อความเมื่อยังไม่เปิด/ปิดลงคะแนน', 'ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว'],
  ['confirm_abstain', 'ยืนยันไม่ประสงค์ลงคะแนน', 'ยืนยันไม่ประสงค์ลงคะแนนใช่หรือไม่?'],
  ['confirm_vote', 'ปุ่มยืนยันลงคะแนน', '✅ ยืนยันลงคะแนน'],
  ['already_voted', 'ข้อความเมื่อลงคะแนนแล้ว', 'คุณลงคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!'],
  ['next_gender_button', 'ปุ่มไปตำแหน่งอีกเพศ', '➡️ ไปลงคะแนนอีกตำแหน่ง'],
  ['finish_button', 'ปุ่มเสร็จสิ้น', 'เสร็จสิ้น — คนต่อไปกรอกรหัสใหม่'],
]
const DEFAULT_PUBLIC_TEXTS = Object.fromEntries(PUBLIC_TEXT_FIELDS.map(([key, , value]) => [key, value]))
function publicText(key) { return pageSettings?.public_texts?.[key] ?? DEFAULT_PUBLIC_TEXTS[key] ?? '' }

async function callElectionAdmin(body) {
  const { data, error } = await supabase.functions.invoke('council-election-admin-upload', { body })
  if (error) {
    let message = error.message || 'เชื่อมต่อบริการตั้งค่าไม่สำเร็จ'
    try { message = (await error.context?.clone().json())?.error || message } catch {}
    throw new Error(message)
  }
  if (data?.error) throw new Error(data.error)
  return data
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault()
  if (isInstalledApp()) return
  installPromptState.event = event
  const installBtn = document.getElementById('council-install-app')
  if (installBtn) installBtn.classList.remove('hidden')
})

function isInstalledApp() {
  return Boolean(navigator.standalone || installDisplayMode?.matches)
}

window.addEventListener('appinstalled', () => {
  installPromptState.event = null
  document.getElementById('council-install-app')?.classList.add('hidden')
})

function formatCount(value) { return new Intl.NumberFormat('th-TH').format(Number(value || 0)) }

function renderTurnout() {
  const count = isSimulation ? simulationVotes : Number(turnout.voted_count || 0)
  const total = Number(turnout.total_students || 0)
  const percent = isSimulation ? (total ? (count * 100 / total) : 0) : Number(turnout.percent || 0)
  const breakdown = turnout.student_breakdown || {}
  const male = breakdown.male || { total: 0, voted: 0, percent: 0 }
  const female = breakdown.female || { total: 0, voted: 0, percent: 0 }
  const staff = turnout.staff_breakdown || {}
  const teachers = staff.teachers || { total: 0, voted: 0 }
  const personnel = staff.personnel || { total: 0, voted: 0, male_total: 0, male_voted: 0, female_total: 0, female_voted: 0 }
  const malePosition = staffPositionTurnout.male || {}
  const femalePosition = staffPositionTurnout.female || {}
  const target = document.getElementById('council-turnout')
  if (!target) return
  target.innerHTML = `
    <div class="rounded-3xl border border-white/70 bg-white/95 p-5 sm:p-7 shadow-[0_20px_55px_rgba(2,38,28,.20)] backdrop-blur">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div><p class="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">LIVE ELECTION DASHBOARD</p><h2 class="font-extrabold text-xl text-[var(--ink)] mt-1">สถิติผู้มาใช้สิทธิ์</h2></div>
        <div class="flex items-center gap-2 text-xs text-[var(--muted-2)]"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>อัปเดตอัตโนมัติ</div>
      </div>
      <div class="grid lg:grid-cols-[1.15fr_2fr] gap-4">
        <div class="rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-800 to-teal-700 text-white p-5 shadow-lg">
          <p class="text-sm text-white/75">นักเรียนมาใช้สิทธิ์รวม</p>
          <div class="flex items-end gap-2 mt-2"><strong class="text-5xl font-extrabold tracking-tight">${formatCount(count)}</strong><span class="text-white/70 text-sm mb-1">/ ${formatCount(total)} คน</span></div>
          <div class="w-full h-2 bg-white/20 rounded-full mt-4 overflow-hidden"><div class="h-full bg-emerald-300 rounded-full transition-all duration-500" style="width:${Math.min(100, percent)}%"></div></div>
          <p class="text-sm text-emerald-100 mt-2">${percent.toFixed(1)}% ของนักเรียนทั้งหมด</p>
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          ${turnoutGenderCard('นักเรียนชาย', 'M', male)}
          ${turnoutGenderCard('นักเรียนหญิง', 'W', female)}
        </div>
      </div>
      <div class="mt-5 border-t border-slate-200 pt-4">
        <div class="flex flex-wrap items-center justify-between gap-3 mb-3"><h3 class="font-bold text-[var(--ink)]">ครูและบุคลากร</h3><span class="text-xs text-[var(--muted-2)]">แสดงจำนวนผู้ลงคะแนน ไม่เปิดเผยว่าเลือกใคร</span></div>
        <div class="grid sm:grid-cols-3 gap-3">
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p class="text-xs text-slate-500">ครู</p><p class="text-2xl font-extrabold text-slate-800 mt-1">${formatCount(teachers.voted)} <span class="text-sm font-medium text-slate-500">/ ${formatCount(teachers.total)}</span></p><p class="text-[11px] text-slate-500 mt-1">ฐานข้อมูลครูไม่มีข้อมูลเพศ จึงยังแยกชาย/หญิงไม่ได้</p></div>
          ${staffGenderCard('บุคลากรชาย', personnel.male_voted, personnel.male_total, 'from-blue-50 to-cyan-50')}
          ${staffGenderCard('บุคลากรหญิง', personnel.female_voted, personnel.female_total, 'from-fuchsia-50 to-rose-50')}
        </div>
        <div class="mt-4"><p class="text-xs font-bold text-slate-600 mb-2">บัตรครู/บุคลากร แยกตามตำแหน่งที่ลงคะแนน</p><div class="grid sm:grid-cols-2 gap-3">
          ${staffPositionCard(positionLabel('M'), malePosition, 'from-sky-50 to-cyan-50')}
          ${staffPositionCard(positionLabel('W'), femalePosition, 'from-rose-50 to-pink-50')}
        </div></div>
      </div>
      <div class="mt-4 flex justify-end"><button id="btn-class-stats" class="rounded-xl border border-emerald-800/20 bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-900 hover:bg-emerald-100 transition">📊 ดูสถิติรายห้องเรียน</button></div>
    </div>`
  target.querySelector('#btn-class-stats')?.addEventListener('click', openClassStatsModal)
  renderClassStatsModal()
}

function turnoutGenderCard(title, gender, stat) {
  const color = gender === 'M' ? 'from-sky-50 to-cyan-50 border-sky-100' : 'from-rose-50 to-pink-50 border-rose-100'
  const percent = Number(stat.percent || 0)
  return `<div class="rounded-2xl border ${color} bg-gradient-to-br p-4 shadow-sm"><div class="flex items-center justify-between gap-2"><p class="text-sm font-bold text-slate-700">${title}</p><span class="text-xs font-bold text-slate-500">${percent.toFixed(1)}%</span></div><p class="text-3xl font-extrabold tracking-tight text-slate-900 mt-2">${formatCount(stat.voted)} <span class="text-sm font-semibold text-slate-500">/ ${formatCount(stat.total)}</span></p><div class="h-1.5 bg-white/80 rounded-full mt-3 overflow-hidden"><div class="h-full ${gender === 'M' ? 'bg-sky-500' : 'bg-rose-500'} rounded-full" style="width:${Math.min(100, percent)}%"></div></div></div>`
}

function staffGenderCard(title, voted, total, gradient) {
  const percent = total ? Number(voted) * 100 / Number(total) : 0
  return `<div class="rounded-2xl border border-slate-200 bg-gradient-to-br ${gradient} p-4"><p class="text-xs text-slate-500">${title}</p><p class="text-2xl font-extrabold text-slate-800 mt-1">${formatCount(voted)} <span class="text-sm font-medium text-slate-500">/ ${formatCount(total)}</span></p><div class="h-1.5 bg-white/80 rounded-full mt-3 overflow-hidden"><div class="h-full bg-emerald-600 rounded-full" style="width:${Math.min(100, percent)}%"></div></div></div>`
}

function staffPositionCard(title, stat, gradient) {
  return `<div class="rounded-2xl border border-slate-200 bg-gradient-to-br ${gradient} p-4"><p class="text-sm font-extrabold text-slate-800">${esc(title)}</p><div class="mt-2 grid grid-cols-2 gap-3"><div><p class="text-[11px] text-slate-500">ครู</p><p class="font-extrabold text-slate-800">${formatCount(stat.teachers_voted)} <span class="text-xs font-medium text-slate-500">/ ${formatCount(stat.teachers_total)}</span></p></div><div><p class="text-[11px] text-slate-500">บุคลากร</p><p class="font-extrabold text-slate-800">${formatCount(stat.personnel_voted)} <span class="text-xs font-medium text-slate-500">/ ${formatCount(stat.personnel_total)}</span></p></div></div></div>`
}

function openClassStatsModal() {
  if (document.getElementById('council-class-stats-modal')) return
  const modal = document.createElement('div')
  modal.id = 'council-class-stats-modal'
  modal.className = 'fixed inset-0 z-[85] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6'
  modal.innerHTML = `<section class="w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl"><header class="flex items-center justify-between gap-3 border-b border-slate-200 p-5 sm:p-6"><div><p class="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">CLASSROOM BREAKDOWN</p><h2 class="text-xl font-extrabold text-slate-900 mt-1">สถิติผู้มาใช้สิทธิ์รายห้องเรียน</h2><p class="text-xs text-slate-500 mt-1">คำนวณจากนักเรียนทั้งหมดในฐานข้อมูล รวมทั้งสถานะที่ไม่ active</p></div><button data-close class="w-10 h-10 rounded-full bg-slate-100 text-slate-600 font-bold hover:bg-slate-200">✕</button></header><div data-content class="max-h-[calc(90vh-100px)] overflow-auto p-4 sm:p-6"></div></section>`
  document.body.append(modal)
  modal.querySelector('[data-close]').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', event => { if (event.target === modal) modal.remove() })
  renderClassStatsModal()
}

function renderClassStatsModal() {
  const modal = document.getElementById('council-class-stats-modal')
  const content = modal?.querySelector('[data-content]')
  if (!content) return
  const rows = Array.isArray(turnout.classes) ? [...turnout.classes].sort((a, b) => new Intl.Collator('th', { numeric: true }).compare(a.room, b.room)) : []
  if (!rows.length) {
    content.innerHTML = '<p class="rounded-xl bg-slate-50 p-6 text-center text-sm text-slate-500">ยังไม่มีข้อมูลรายห้องเรียน</p>'
    return
  }
  const summary = (voted, total) => `${formatCount(voted)} / ${formatCount(total)}${total ? ` · ${(Number(voted) * 100 / Number(total)).toFixed(1)}%` : ''}`
  content.innerHTML = `<div class="overflow-x-auto rounded-2xl border border-slate-200"><table class="w-full min-w-[720px] text-left text-sm"><thead class="sticky top-0 bg-slate-100 text-xs uppercase tracking-wide text-slate-600"><tr><th class="px-4 py-3">ห้องเรียน</th><th class="px-4 py-3">รวม</th><th class="px-4 py-3">ชาย</th><th class="px-4 py-3">หญิง</th><th class="px-4 py-3">ไม่ระบุเพศ</th></tr></thead><tbody class="divide-y divide-slate-100">${rows.map((row, i) => `<tr class="${i % 2 ? 'bg-slate-50/70' : 'bg-white'}"><td class="px-4 py-3 font-bold text-slate-800">${esc(row.room)}</td><td class="px-4 py-3"><b>${summary(row.voted, row.total)}</b></td><td class="px-4 py-3 text-sky-800">${summary(row.male_voted, row.male_total)}</td><td class="px-4 py-3 text-rose-800">${summary(row.female_voted, row.female_total)}</td><td class="px-4 py-3 text-slate-500">${summary(row.unknown_voted, row.unknown_total)}</td></tr>`).join('')}</tbody></table></div><p class="text-[11px] text-slate-500 mt-3">ตัวเลขด้านบนคือจำนวนผู้มาใช้สิทธิ์เทียบกับจำนวนนักเรียนทั้งหมดของห้อง ไม่เปิดเผยตัวเลือกที่ลงคะแนน</p>`
}

function renderPageChrome() {
  if (pageSettings) {
    const title = document.getElementById('council-page-title')
    const image = document.getElementById('council-header-image')
    const footer = document.getElementById('council-page-footer')
    const titleWrap = document.getElementById('council-header-text-wrap')
    const subtitle = document.getElementById('council-page-subtitle')
    title.textContent = pageSettings.header_text || 'ลงคะแนนเลือกตั้งสภานักเรียน'
    if (subtitle) subtitle.textContent = pageSettings.header_subtitle || 'จุดลงคะแนนของโรงเรียน — สถิติผู้มาใช้สิทธิ์แสดงแบบเรียลไทม์'
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
  const [turnoutResult, positionResult] = await Promise.all([
    supabase.rpc('get_public_council_election_turnout'),
    supabase.rpc('get_public_council_election_staff_position_turnout'),
  ])
  if (turnoutResult.data) turnout = turnoutResult.data
  if (positionResult.data) staffPositionTurnout = positionResult.data
  renderTurnout()
}

function subscribeTurnoutRealtime() {
  return supabase.channel('council-election-turnout')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'council_election_turnout_signals' }, () => refreshTurnout())
    .subscribe()
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

function positionLabel(gender) {
  return publicText(gender === 'M' ? 'male_position_label' : 'female_position_label') || (gender === 'M' ? 'ประธานชาย' : 'ประธานหญิง')
}

async function renderLanding() {
  app.innerHTML = `
    ${isSimulation ? '<div class="mb-3 rounded-xl bg-amber-100 text-amber-900 p-3 text-center text-sm font-bold">โหมดจำลอง — ไม่มีข้อมูลใดถูกบันทึกในฐานข้อมูลจริง</div>' : ''}
    <div id="council-turnout" class="mb-4"></div>
    <div class="bg-white/90 rounded-2xl border p-5 text-center">
      <p class="text-sm text-[var(--muted)]">${esc(isSimulation ? 'ทดสอบขั้นตอนลงคะแนนได้โดยใช้รหัสจำลอง' : publicText('landing_instruction'))}</p>
      <button id="btn-open-voting" class="w-full mt-4 py-4 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-extrabold text-lg shadow">${esc(publicText('vote_button'))}</button>
      ${!isSimulation ? `<button id="btn-personnel-voting" class="w-full mt-3 py-3 rounded-xl border border-white/70 text-white font-bold">${esc(publicText('personnel_button'))}</button>` : ''}
    </div>
    <div id="council-countdown" class="mt-4 text-center text-white/90 text-sm"></div>
    <div id="council-page-footer" class="text-xs text-white/70 text-center mt-5"></div>
  `

  renderTurnout()
  renderPageChrome()
  renderCountdown()

  app.querySelector('#btn-open-voting').addEventListener('click', openStudentCodeModal)
  app.querySelector('#btn-personnel-voting')?.addEventListener('click', openPersonnelRoster)

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

function asLocalDateTime(value) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 16)
}

function openSettingsGate() {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-4'
  modal.innerHTML = `
    <form class="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-5 space-y-3">
      <h2 class="font-extrabold text-lg">ตั้งค่าระบบเลือกตั้ง</h2>
      <label class="block text-sm font-semibold text-[var(--muted)]">กรอกรหัสผู้ดูแล
        <input name="passcode" type="password" inputmode="numeric" autocomplete="off" class="mt-2 w-full border rounded-xl px-4 py-3 text-center text-xl tracking-[.35em]" />
      </label>
      <p data-error class="hidden text-sm text-[var(--bad)]"></p>
      <div class="flex gap-2"><button type="button" data-cancel class="flex-1 py-2.5 rounded-xl border font-bold">ยกเลิก</button><button class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] text-white font-bold">ยืนยัน</button></div>
    </form>`
  document.body.append(modal)
  const form = modal.querySelector('form')
  form.elements.passcode.focus()
  modal.querySelector('[data-cancel]').addEventListener('click', () => modal.remove())
  form.addEventListener('submit', async event => {
    event.preventDefault()
    const errorEl = modal.querySelector('[data-error]')
    const code = form.elements.passcode.value.trim()
    const button = form.querySelector('button[type="submit"],button:not([type])')
    button.disabled = true
    button.textContent = 'กำลังตรวจสอบ…'
    try {
      await callElectionAdmin({ action: 'verify', passcode: code })
      settingsAdminCode = code
      modal.remove()
      openSettings()
    } catch (error) {
      errorEl.textContent = error.message || 'ตรวจสอบรหัสไม่สำเร็จ'
      errorEl.classList.remove('hidden')
      button.disabled = false; button.textContent = 'ยืนยัน'
    }
  })
}

function openSettings() {
  const positions = Array.isArray(pageSettings?.positions) ? pageSettings.positions : []
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[90] bg-black/55 flex items-center justify-center p-4'
  modal.innerHTML = `
    <form id="election-settings-form" class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-5 space-y-4">
      <div class="sticky top-0 bg-white flex items-center justify-between gap-3 pb-2"><div><h2 class="font-extrabold text-lg">ตั้งค่าระบบเลือกตั้ง</h2><p class="text-xs text-[var(--muted)]">แก้ไขได้ทั้งกำหนดการ ตำแหน่ง และข้อความที่ผู้ลงคะแนนเห็น</p></div><button type="button" id="settings-close" class="text-xl text-[var(--muted)]">✕</button></div>
      <section class="rounded-xl border p-3 space-y-3"><h3 class="font-bold">หัวหน้าและท้ายหน้า</h3>
        <label class="block text-xs font-bold">ข้อความหัวหน้า<input name="header_text" maxlength="240" class="mt-1 w-full border rounded-xl px-3 py-2" /></label>
        <label class="block text-xs font-bold">ข้อความรองหัวหน้า<textarea name="header_subtitle" maxlength="500" rows="2" class="mt-1 w-full border rounded-xl px-3 py-2"></textarea></label>
        <label class="block text-xs font-bold">ตำแหน่งข้อความ<select name="header_alignment" class="mt-1 w-full border rounded-xl px-3 py-2"><option value="left">ชิดซ้าย</option><option value="center">ตรงกลาง</option><option value="right">ชิดขวา</option></select></label>
        <label class="block text-xs font-bold">ภาพหัวหน้า (PNG ไม่เกิน 3 MB)<input name="header_image" type="file" accept="image/png" class="mt-1 w-full border rounded-xl px-3 py-2" /></label>
        <label class="block text-xs font-bold">ข้อความท้ายหน้า<textarea name="footer_text" maxlength="1000" rows="2" class="mt-1 w-full border rounded-xl px-3 py-2"></textarea></label>
        <label class="block text-xs font-bold">ข้อความขอบคุณหลังลงคะแนน<textarea name="thank_you_message" maxlength="1000" rows="2" class="mt-1 w-full border rounded-xl px-3 py-2"></textarea></label>
        <label class="block text-xs font-bold">เวลานับถอยหลัง<select name="countdown_enabled" class="mt-1 w-full border rounded-xl px-3 py-2"><option value="true">เปิดใช้งาน</option><option value="false">ปิดใช้งาน</option></select></label>
      </section>
      <section class="rounded-xl border p-3 space-y-3"><h3 class="font-bold">ตำแหน่งและเวลาเปิดรับคะแนน</h3>
        ${positions.map((p, i) => `<div class="rounded-lg bg-[var(--surface-2)] p-3 space-y-2"><p class="font-bold">${p.gender === 'M' ? esc(publicText('male_position_label')) : esc(publicText('female_position_label'))}</p><input type="hidden" name="position_${i}_id" value="${Number(p.id)}"><input type="hidden" name="position_${i}_gender" value="${esc(p.gender)}"><label class="block text-xs font-bold">เริ่ม<input type="datetime-local" name="position_${i}_opens_at" value="${asLocalDateTime(p.opens_at)}" class="mt-1 w-full border rounded-xl px-3 py-2"></label><label class="block text-xs font-bold">ปิดรับคะแนน<input type="datetime-local" name="position_${i}_closes_at" value="${asLocalDateTime(p.closes_at)}" class="mt-1 w-full border rounded-xl px-3 py-2"></label></div>`).join('') || '<p class="text-xs text-[var(--muted)]">ไม่พบตำแหน่งที่ตั้งค่าได้ในเทอมนี้</p>'}
      </section>
      <section class="rounded-xl border p-3 space-y-3"><h3 class="font-bold">ข้อความและชื่อตำแหน่ง</h3>
        ${PUBLIC_TEXT_FIELDS.map(([key, label]) => `<label class="block text-xs font-bold">${esc(label)}<textarea name="text_${key}" maxlength="500" rows="2" class="mt-1 w-full border rounded-xl px-3 py-2"></textarea></label>`).join('')}
      </section>
      <p id="settings-error" class="hidden text-xs text-[var(--bad)]"></p>
      <button type="submit" class="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-bold">บันทึกการตั้งค่าทั้งหมด</button>
    </form>`
  document.body.appendChild(modal)
  const form = modal.querySelector('#election-settings-form')
  form.elements.header_text.value = pageSettings?.header_text || ''
  form.elements.header_subtitle.value = pageSettings?.header_subtitle || ''
  form.elements.header_alignment.value = pageSettings?.header_alignment || 'center'
  form.elements.footer_text.value = pageSettings?.footer_text || ''
  form.elements.thank_you_message.value = pageSettings?.thank_you_message || ''
  form.elements.countdown_enabled.value = pageSettings?.countdown_enabled === false ? 'false' : 'true'
  PUBLIC_TEXT_FIELDS.forEach(([key]) => { form.elements[`text_${key}`].value = publicText(key) })
  modal.querySelector('#settings-close').addEventListener('click', () => { settingsAdminCode = ''; modal.remove() })
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
        const uploadForm = new FormData()
        uploadForm.set('action', 'upload')
        uploadForm.set('passcode', settingsAdminCode)
        uploadForm.set('term_id', String(pageSettings.term_id))
        uploadForm.set('file', file, file.name || 'header.png')
        const uploadResult = await callElectionAdmin(uploadForm)
        imagePath = uploadResult.path
      }
      const payload = {
        header_text: form.elements.header_text.value,
        header_subtitle: form.elements.header_subtitle.value,
        header_alignment: form.elements.header_alignment.value,
        header_image_path: imagePath,
        footer_text: form.elements.footer_text.value,
        thank_you_message: form.elements.thank_you_message.value,
        countdown_enabled: form.elements.countdown_enabled.value === 'true',
        public_texts: Object.fromEntries(PUBLIC_TEXT_FIELDS.map(([key]) => [key, form.elements[`text_${key}`].value])),
        positions: positions.map((position, i) => ({
          id: Number(form.elements[`position_${i}_id`].value),
          gender: form.elements[`position_${i}_gender`].value,
          opens_at: form.elements[`position_${i}_opens_at`].value ? new Date(form.elements[`position_${i}_opens_at`].value).toISOString() : null,
          closes_at: form.elements[`position_${i}_closes_at`].value ? new Date(form.elements[`position_${i}_closes_at`].value).toISOString() : null,
        })),
      }
      const data = await callElectionAdmin({ action: 'save', passcode: settingsAdminCode, settings: payload })
      if (data?.ok !== true) throw new Error('บันทึกไม่สำเร็จ')
      pageSettings = data.settings
      settingsAdminCode = ''
      renderPageChrome(); renderCountdown(); modal.remove()
      toast('บันทึกการตั้งค่าแล้ว')
    } catch (error) {
      errorEl.textContent = error.message || 'บันทึกไม่สำเร็จ'; errorEl.classList.remove('hidden')
      button.disabled = false; button.textContent = 'บันทึกการตั้งค่าทั้งหมด'
    }
  })
}

function openStudentCodeModal() {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[80] bg-black/55 flex items-center justify-center p-4'
  modal.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
      <div class="flex items-center justify-between gap-2 mb-4"><h2 class="font-extrabold text-lg">${esc(publicText('student_code_title'))}</h2><button id="code-modal-close" class="text-xl text-[var(--muted)]">✕</button></div>
      <input id="student-code-input" inputmode="numeric" autocomplete="off" placeholder="${esc(publicText('student_code_placeholder'))}" class="w-full border border-[var(--line)] rounded-xl px-4 py-4 text-xl font-bold text-center tracking-widest focus:outline-none focus:border-[var(--primary-70)]" />
      <p id="student-code-error" class="hidden text-xs text-[var(--bad)] mt-2 text-center"></p>
      <div id="student-confirm-card" class="hidden mt-4"></div>
      <p class="text-xs text-[var(--muted-2)] text-center mt-4">${esc(publicText('student_code_hint'))}</p>
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
      const result = await supabase.rpc('get_public_council_election_bundle_v2', { p_code: code })
      bundle = result.data
      if (result.error) { errorEl.textContent = 'ระบบตรวจสอบไม่สำเร็จ กรุณาลองอีกครั้ง'; errorEl.classList.remove('hidden'); return }
    }
    if (bundle?.error === 'student_not_found' || bundle?.error === 'voter_not_found') { errorEl.textContent = 'ไม่พบรหัสนักเรียนหรือครูนี้ กรุณาตรวจสอบอีกครั้ง'; errorEl.classList.remove('hidden'); return }
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
    if (bundle.is_1087_tester) {
      const resetButton = document.createElement('button')
      resetButton.type = 'button'
      resetButton.className = 'w-full mt-3 py-3 rounded-xl border border-rose-300 bg-rose-50 text-rose-700 font-bold text-sm'
      resetButton.textContent = 'รีเซ็ตคะแนนเลือกตั้งทั้งหมด'
      resetButton.addEventListener('click', () => openElectionResetConfirm(modal))
      cardEl.append(resetButton)
    }
    cardEl.querySelector('#btn-enter-vote').addEventListener('click', () => { modal.remove(); renderVotePage(bundle, code) })
    cardEl.querySelector('#btn-not-me').addEventListener('click', () => { input.value = ''; cardEl.classList.add('hidden'); input.focus() })
  }
}

async function openPersonnelRoster() {
  const { data, error } = await supabase.rpc('get_public_council_personnel_roster')
  if (error || !Array.isArray(data) || !data.length) {
    toast('ไม่พบรายชื่อบุคลากรในทะเบียนแจ้งไซซ์เสื้อ', 'error')
    return
  }
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[80] bg-black/55 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[88vh] p-5 flex flex-col">
      <div class="flex items-center justify-between gap-2 mb-3"><h2 class="font-extrabold text-lg">เลือกชื่อบุคลากร</h2><button data-close class="text-xl text-[var(--muted)]">✕</button></div>
      <p class="text-xs text-[var(--muted)] mb-3">เลือกชื่อของตนเอง แล้วตรวจสอบชื่อก่อนเข้าสู่บัตรเลือกตั้ง</p>
      <input data-search placeholder="ค้นหาชื่อ-สกุล" class="w-full border rounded-xl px-3 py-2 mb-3" />
      <div data-list class="overflow-y-auto space-y-2"></div>
      <div data-confirm class="hidden mt-3 border-t pt-3"></div>
    </div>`
  document.body.append(modal)
  const list = modal.querySelector('[data-list]')
  const confirm = modal.querySelector('[data-confirm]')
  const render = query => {
    const rows = data.filter(person => person.full_name.toLocaleLowerCase('th-TH').includes(query.toLocaleLowerCase('th-TH')))
    list.innerHTML = rows.map(person => `<button data-person="${person.id}" class="w-full text-left rounded-xl border p-3 font-semibold hover:bg-emerald-50">${esc(person.full_name)}</button>`).join('') || '<p class="text-center text-sm text-gray-400 py-6">ไม่พบรายชื่อ</p>'
    list.querySelectorAll('[data-person]').forEach(button => button.addEventListener('click', () => {
      const person = data.find(item => String(item.id) === button.dataset.person)
      confirm.innerHTML = `<p class="text-sm text-center">คุณคือ <b>${esc(person.full_name)}</b> ใช่หรือไม่?</p><div class="flex gap-2 mt-3"><button data-cancel class="flex-1 rounded-xl border py-2 font-bold">เลือกชื่อใหม่</button><button data-enter class="flex-1 rounded-xl bg-[var(--primary)] text-white py-2 font-bold">ใช่ เข้าสู่การเลือกตั้ง</button></div>`
      confirm.classList.remove('hidden')
      confirm.querySelector('[data-cancel]').addEventListener('click', () => confirm.classList.add('hidden'))
      confirm.querySelector('[data-enter]').addEventListener('click', async () => {
        const { data: bundle, error: bundleError } = await supabase.rpc('get_public_council_election_bundle_v2', { p_code: `personnel:${person.id}` })
        if (bundleError || bundle?.error) { toast(bundleError?.message || 'ตรวจสอบรายชื่อไม่สำเร็จ', 'error'); return }
        modal.remove()
        renderVotePage(bundle, `personnel:${person.id}`)
      })
    }))
  }
  modal.querySelector('[data-close]').addEventListener('click', () => modal.remove())
  modal.querySelector('[data-search]').addEventListener('input', event => render(event.target.value.trim()))
  render('')
}

function openElectionResetConfirm(sourceModal = null) {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[95] bg-black/60 flex items-center justify-center p-4'
  modal.innerHTML = `
    <form class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-5 space-y-3">
      <h2 class="text-lg font-extrabold text-rose-700">รีเซ็ตคะแนนเลือกตั้ง</h2>
      <p class="text-sm text-gray-700">การยืนยันจะลบคะแนนทั้งหมดของการเลือกตั้งชายและหญิงในเทอมปัจจุบัน เพื่อให้สามารถเริ่มลงคะแนนใหม่ได้</p>
      <p class="text-xs text-rose-700 font-bold">ใช้ได้เมื่อไม่มีตำแหน่งใดกำลังเปิดรับคะแนน และยังไม่ประกาศผล</p>
      <label class="block text-sm font-bold">รหัสผู้ดูแล<input name="passcode" type="password" inputmode="numeric" autocomplete="off" class="mt-1 w-full border rounded-xl px-3 py-2" /></label>
      <label class="block text-sm font-bold">พิมพ์ RESET เพื่อยืนยัน<input name="confirm" autocomplete="off" class="mt-1 w-full border rounded-xl px-3 py-2" /></label>
      <p class="hidden text-sm text-rose-700" data-error></p>
      <div class="flex gap-2"><button type="button" data-cancel class="flex-1 py-2.5 rounded-xl border font-bold">ยกเลิก</button><button class="flex-1 py-2.5 rounded-xl bg-rose-600 text-white font-bold">ยืนยันรีเซ็ต</button></div>
    </form>`
  document.body.append(modal)
  const form = modal.querySelector('form')
  modal.querySelector('[data-cancel]').addEventListener('click', () => modal.remove())
  form.addEventListener('submit', async event => {
    event.preventDefault()
    const error = modal.querySelector('[data-error]')
    if (form.elements.confirm.value.trim() !== 'RESET') {
      error.textContent = 'พิมพ์ RESET ให้ตรงเพื่อยืนยัน'; error.classList.remove('hidden'); return
    }
    if (!form.elements.passcode.value.trim()) {
      error.textContent = 'กรอกรหัสผู้ดูแลเพื่อยืนยัน'; error.classList.remove('hidden'); return
    }
    const button = form.querySelector('button[type="submit"],button:not([type])')
    button.disabled = true; button.textContent = 'กำลังรีเซ็ต…'
    try {
      const result = await callElectionAdmin({ action: 'reset', passcode: form.elements.passcode.value.trim() })
      modal.remove()
      sourceModal?.remove()
      toast(`รีเซ็ตคะแนนแล้ว ${formatCount(result.deleted_vote_count)} คะแนน`)
      await refreshTurnout(); renderLanding()
    } catch (resetError) {
      error.textContent = resetError.message || 'รีเซ็ตไม่สำเร็จ'
      error.classList.remove('hidden'); button.disabled = false; button.textContent = 'ยืนยันรีเซ็ต'; return
    }
  })
}

function renderVotePage(bundle, code) {
  const teacherParent = ['teacher', 'personnel'].includes(bundle.voter_type) ? (bundle.parentBundle || bundle) : null
  if (teacherParent && !bundle.parentBundle && teacherParent.selectedBallotId == null) {
    const ballots = teacherParent.ballots || []
    const remainingBallots = ballots.filter(item => !item.already_voted)
    const nextBallot = ballots.some(item => item.already_voted) && remainingBallots.length === 1 ? remainingBallots[0] : null
    app.innerHTML = `
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับหน้าหลัก</button>
      <div class="bg-white rounded-2xl border p-5 space-y-3">
        <p class="font-extrabold text-center">${esc(publicText('teacher_ballot_title'))}</p>
        <p class="text-xs text-center text-[var(--muted)]">${esc(publicText('teacher_ballot_hint'))}</p>
        ${nextBallot ? `<button id="btn-next-gender" class="w-full p-4 rounded-xl bg-gradient-to-r from-emerald-800 to-teal-700 text-white text-center font-extrabold shadow-lg">${esc(publicText('next_gender_button'))}: ${esc(positionLabel(nextBallot.gender))}　→</button>` : ''}
        ${ballots.map(b => `<button data-ballot="${b.election_id}" class="w-full p-4 rounded-xl border text-left ${b.already_voted ? 'bg-emerald-50 border-emerald-200' : 'bg-white'}"><b>${esc(positionLabel(b.gender))}</b><span class="block text-xs mt-1 ${b.already_voted ? 'text-emerald-700' : 'text-[var(--muted)]'}">${b.already_voted ? 'ลงคะแนนแล้ว' : (b.is_open ? 'พร้อมลงคะแนน' : 'ยังไม่เปิดรับคะแนน')}</span></button>`).join('')}
        ${teacherParent.is_1087_tester ? '<button id="btn-reset-votes" class="w-full py-3 rounded-xl border border-rose-300 bg-rose-50 text-rose-700 font-bold text-sm">รีเซ็ตคะแนนเลือกตั้งทั้งหมด</button>' : ''}
        <button id="btn-finish" class="w-full py-3 rounded-xl bg-[var(--bg-2)] font-bold text-sm">เสร็จสิ้น</button>
      </div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    app.querySelector('#btn-finish').addEventListener('click', renderLanding)
    app.querySelector('#btn-next-gender')?.addEventListener('click', () => renderVotePage({ ...teacherParent, selectedBallotId: nextBallot.election_id }, code))
    app.querySelectorAll('[data-ballot]').forEach(button => button.addEventListener('click', () => {
      const ballot = ballots.find(item => String(item.election_id) === button.dataset.ballot)
      if (!ballot || ballot.already_voted) return
      renderVotePage({ ...teacherParent, selectedBallotId: ballot.election_id }, code)
    }))
    app.querySelector('#btn-reset-votes')?.addEventListener('click', () => openElectionResetConfirm())
    return
  }
  if (teacherParent && !bundle.parentBundle && teacherParent.selectedBallotId != null) {
    const selectedBallot = teacherParent.ballots.find(item => String(item.election_id) === String(teacherParent.selectedBallotId))
    if (!selectedBallot) return renderVotePage(teacherParent, code)
    bundle = { ...selectedBallot, voter_type: teacherParent.voter_type, parentBundle: teacherParent }
  }
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
        <p class="font-bold text-[var(--ink)]">${esc(publicText('already_voted'))}</p>
        <p class="text-xs text-[var(--muted-2)] mt-2">${bundle.already_abstained ? 'บันทึกการไม่ประสงค์ลงคะแนนแล้ว' : esc(bundle.thank_you_message || 'ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ')}</p>
        <button id="btn-restart" class="w-full mt-2 py-3 rounded-2xl bg-[var(--bg-2)] hover:bg-[var(--line)] text-[var(--ink-2)] font-bold text-sm">${bundle.parentBundle ? esc(publicText('next_gender_button')) : esc(publicText('finish_button'))}</button>
      </div>`
    app.querySelector('#btn-restart').addEventListener('click', () => bundle.parentBundle ? renderVotePage(bundle.parentBundle, code) : renderLanding())
    return
  }

  if (!bundle.is_open) {
    app.innerHTML = `
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[var(--muted-2)] text-sm">${esc(publicText('closed_notice'))}</div>`
    app.querySelector('#btn-back').addEventListener('click', renderLanding)
    return
  }

  let selected = null
  app.innerHTML = `
    <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
    <div class="bg-white/95 rounded-3xl border border-white/70 p-4 sm:p-7 space-y-5 shadow-[0_20px_55px_rgba(2,38,28,.2)]">
      <div class="text-center"><p class="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">${esc(positionLabel(bundle.gender))}</p><p class="text-lg font-extrabold text-[var(--ink-2)] mt-1">${esc(publicText('candidate_heading'))}</p></div>
      <div id="candidate-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
      <div id="vote-confirm-area" class="max-w-xl mx-auto w-full"></div>
    </div>`
  app.querySelector('#btn-back').addEventListener('click', renderLanding)
  const list = app.querySelector('#candidate-list')
  const confirmArea = app.querySelector('#vote-confirm-area')

  if (!bundle.candidates.length) {
    list.innerHTML = `<p class="col-span-full text-sm text-[var(--muted-2)] text-center py-8">${esc(publicText('no_candidates'))}</p>`
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
      <div class="min-h-[24rem] rounded-2xl border p-4 sm:p-5 transition flex flex-col ${selected === c.id ? 'border-emerald-700 bg-emerald-50 ring-2 ring-emerald-700/20' : 'border-[var(--line-soft)] bg-white hover:border-emerald-700/40 hover:shadow-lg'}">
        <button data-candidate="${c.id}" class="relative w-full flex-1 flex flex-col items-center justify-center gap-3 text-center rounded-xl p-2">
          <div class="absolute top-0 left-0 w-11 h-11 rounded-full bg-emerald-100 text-emerald-900 grid place-items-center font-extrabold text-lg shadow-sm">${c.ballot_number}</div>
          ${c.image_url
            ? `<img src="${esc(c.image_url)}" class="w-full max-w-[16rem] h-56 sm:h-64 object-cover object-top rounded-2xl border border-slate-200 shadow-md">`
            : `<div class="w-full max-w-[16rem] h-56 sm:h-64 rounded-2xl bg-emerald-50 text-emerald-700 grid place-items-center text-5xl font-extrabold border">${esc((c.full_name || '?').charAt(0))}</div>`}
          <div class="w-full min-w-0">
            <p class="text-lg font-extrabold text-[var(--ink)]">${esc(c.full_name)}</p>
            <p class="text-sm text-[var(--muted)]">${esc(c.main_room || '')}</p>
            ${c.slogan ? `<p class="text-sm text-[var(--primary-dark)] font-semibold mt-2 line-clamp-2">“${esc(c.slogan)}”</p>` : ''}
          </div>
        </button>
        <button data-detail="${c.id}" class="w-full mt-3 pt-3 border-t border-[var(--line-soft)] text-sm font-bold text-[var(--primary)]">${esc(publicText('candidate_details'))}</button>
      </div>`).join('') + `
      <button data-candidate="abstain" class="col-span-full w-full max-w-md justify-self-center p-4 sm:p-5 rounded-2xl border-2 ${selected === 'abstain' ? 'border-emerald-700 bg-emerald-50 ring-2 ring-emerald-700/20' : 'border-[var(--line-soft)] bg-white hover:border-rose-300'} text-base font-extrabold text-[var(--ink-2)] shadow-sm">${esc(publicText('abstain_label'))}</button>`
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
        <p class="text-xs text-[var(--muted)] text-center">${isAbstain ? esc(publicText('confirm_abstain')) : `แน่ใจนะว่าจะเลือก <span class="font-bold text-[var(--ink-2)]">${esc(c?.full_name || '')}</span>?`}</p>
        <button id="btn-confirm-vote" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm">${esc(publicText('confirm_vote'))}</button>
      </div>`
    confirmArea.querySelector('#btn-confirm-vote').addEventListener('click', async () => {
      const btn = confirmArea.querySelector('#btn-confirm-vote')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      let data, error
      if (isSimulation) {
        simulationVotes += 1
        data = { ok: true }
      } else {
        const result = await supabase.rpc('cast_public_council_vote', { p_code: code, p_candidate_id: isAbstain ? null : selected, p_election_config_id: bundle.election_id })
        data = result.data; error = result.error
      }
      if (error || data?.error) {
        const msg = data?.error === 'already_voted' ? 'รหัสนี้ลงคะแนนไปแล้ว' : data?.error === 'election_not_open' ? 'ปิดโหวตแล้ว' : 'บันทึกไม่สำเร็จ กรุณาลองใหม่'
        toast(msg, 'error')
        btn.disabled = false; btn.textContent = '✅ ยืนยันลงคะแนน'
        return
      }
      toast(isSimulation ? 'บัตรจำลองสำเร็จ — ฐานข้อมูลจริงไม่ได้เปลี่ยนแปลง' : 'บันทึกคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!')
      bundle.already_voted_candidate_id = isAbstain ? null : selected
      bundle.already_voted = true
      bundle.already_abstained = isAbstain
      await refreshTurnout()
      if (bundle.parentBundle) {
        const parent = bundle.parentBundle
        const index = parent.ballots.findIndex(item => String(item.election_id) === String(bundle.election_id))
        if (index >= 0) parent.ballots[index] = { ...parent.ballots[index], already_voted: true, already_voted_candidate_id: bundle.already_voted_candidate_id, already_abstained: bundle.already_abstained }
        renderVotePage(parent, code)
      } else renderVotePage(bundle, code)
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
  const settingsButton = document.getElementById('council-election-settings')
  const installButton = document.getElementById('council-install-app')
  settingsButton?.addEventListener('click', openSettingsGate)
  if (isSimulation) {
    settingsButton?.classList.add('hidden')
    installButton?.classList.add('hidden')
  } else {
    if (installPromptState.event && !isInstalledApp()) installButton?.classList.remove('hidden')
    else installButton?.classList.add('hidden')
    installButton?.addEventListener('click', async () => {
      if (installPromptState.event) {
        const promptEvent = installPromptState.event
        installPromptState.event = null
        installButton.classList.add('hidden')
        await promptEvent.prompt()
        const { outcome } = await promptEvent.userChoice
        if (outcome === 'dismissed' && !isInstalledApp()) installPromptState.event = null
      }
    })
    setInterval(refreshTurnout, 10000)
    setInterval(renderCountdown, 30000)
    subscribeTurnoutRealtime()
  }
}

boot()
