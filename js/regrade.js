import { supabase } from './supabase.js'
import { showToast } from './ui.js'
import { parseCSV } from './import.js'
import {
  getRegradeConfig, updateRegradeConfig, getMyStudentRow, getMyTeacherRow, checkMyRegradePermissions,
  getMyRegradeSubjects, declareIntent,
  getMyTeachingRegradeSubjects, assignWork,
  getPendingCloseOut, closeOutSubject, getGradeTrackingRows, markGradeEntered,
  getAllRegradeSubjectsForDashboard,
  getRegradeAdmins, getRegradeRegistrarStaff, addRegradeAdmin, removeRegradeAdmin,
  addRegradeRegistrarStaff, removeRegradeRegistrarStaff, getAllTeachersForPicker,
  getRegradeExecutives, addRegradeExecutive, removeRegradeExecutive,
  previewRegradeCsvRows, importRegradeSubjectsCsv,
  getUnassignedRegradeSubjects, assignSubjectTeacherBulk, getRegradeDistinctClassLevels,
  getDepartmentById,
  getClassroomSummary, getClassroomStudents, getStudentSubjectsForExec, getTopStudentsNeedingAttention,
} from './regrade-api.js'

// ตัวหน้ารหัสวิชา -> กลุ่มสาระ (เฉพาะฝั่งสามัญ) — ตรวจสอบแล้วว่าตรง 1:1 กับข้อมูลค้างเก่าจริง
// ไม่ครอบคลุมฝั่งศาสนา เพราะรหัสวิชาศาสนาปนกันหลายกลุ่มสาระ ไม่น่าเชื่อถือพอจะกรองอัตโนมัติ
const SUBJECT_PREFIX_TO_DEPT = { 'ว': 'SC', 'อ': 'ENG', 'จ': 'ENG', 'ค': 'MATH', 'ท': 'THAI', 'ส': 'SOC', 'ง': 'OCC', 'ศ': 'ART', 'พ': 'HEALTH' }

// ============================================================================
// helpers ทั่วไป
// ============================================================================
function escHtml(s) {
  return String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
}

function statusMeta(status) {
  const map = {
    'ยังไม่แจ้ง': { bg: '#f3f4f6', text: '#6b7280', border: '#e5e7eb', label: 'ยังไม่แจ้ง' },
    'จำนงแล้ว': { bg: 'var(--gold-soft)', text: 'var(--gold-ink)', border: 'var(--gold-soft-line)', label: 'จำนงแล้ว · รอครูตอบรับ' },
    'กำลังดำเนินการปรับแก้': { bg: 'var(--info-soft)', text: 'var(--info)', border: 'var(--info-soft-line)', label: 'กำลังดำเนินการปรับแก้' },
    'ปรับแก้สำเร็จ': { bg: 'var(--ok-soft)', text: 'var(--ok)', border: 'var(--ok-soft-line)', label: 'ปรับแก้สำเร็จ ✓' },
  }
  return map[status] || map['ยังไม่แจ้ง']
}
const badgeStyle = (status) => { const m = statusMeta(status); return `background:${m.bg};color:${m.text};border:1px solid ${m.border};` }

const TH_MONTHS = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
function formatThaiDateTime(isoLocal) {
  if (!isoLocal) return null
  const d = new Date(isoLocal)
  if (isNaN(d.getTime())) return null
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  return `${d.getDate()} ${TH_MONTHS[d.getMonth()]} ${d.getFullYear() + 543} เวลา ${hh}:${mm} น.`
}
function deadlineBannerHtml(startVal, endVal, title, colorVar, ctaLabel, ctaAction) {
  const start = formatThaiDateTime(startVal)
  const end = formatThaiDateTime(endVal)
  if (!start && !end) return ''
  return `<div class="rg-card p-4 mb-4" style="border-left:4px solid var(${colorVar})">
    <p class="text-xs font-bold" style="color:var(${colorVar})">🗓 ${escHtml(title)}</p>
    <p class="text-sm font-bold text-[var(--ink)] mt-1">${start ? `เริ่ม ${start}` : ''}${start && end ? ' — ' : ''}${end ? `ถึง ${end}` : ''}</p>
    <button data-deadline-cta="${escHtml(ctaAction)}" class="mt-3 w-full py-2 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(${colorVar}),var(${colorVar}-dark))">${escHtml(ctaLabel)} →</button>
  </div>`
}
const categoryChipStyle = (category) => category === 'ศาสนา'
  ? 'background:var(--secondary-soft);color:var(--secondary-dark);border:1px solid var(--secondary-soft-line);'
  : 'background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line);'

const NAME_PREFIXES = ['เด็กชาย', 'เด็กหญิง', 'ด.ช.', 'ด.ญ.', 'นางสาว', 'น.ส.', 'นาย', 'นาง']
function initialOf(name) {
  let n = String(name || '')
  for (const p of NAME_PREFIXES) if (n.startsWith(p)) { n = n.slice(p.length).trim(); break }
  return n.charAt(0) || '?'
}
function avatarStyle(name, portrait) {
  let sum = 0
  for (let i = 0; i < String(name || '').length; i++) sum += name.charCodeAt(i)
  const palette = [['#eef2ff', '#4f46e5'], ['#ecfdf5', '#059669'], ['#fef3c7', '#b45309'], ['#fce7f3', '#be185d'], ['#e0f2fe', '#0284c7'], ['#f3e8ff', '#7c3aed']]
  const [bg, fg] = palette[sum % palette.length]
  return portrait
    ? `width:34px;height:44px;border-radius:8px;background:${bg};color:${fg};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);`
    : `width:30px;height:30px;border-radius:9999px;background:${bg};color:${fg};display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;`
}
// รูปนักเรียนจริงถ้ามี (photo_url/image_url) ไม่งั้น fallback เป็นวงกลม/กล่องอักษรย่อแบบเดิม
function personAvatarHtml(person, portrait) {
  const name = person?.full_name || '-'
  const photo = person?.photo_url || person?.image_url
  if (!photo) return `<div style="${avatarStyle(name, portrait)}">${initialOf(name)}</div>`
  const box = portrait
    ? 'width:34px;height:44px;border-radius:8px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.15);object-fit:cover;'
    : 'width:30px;height:30px;border-radius:9999px;flex-shrink:0;object-fit:cover;'
  return `<img src="${escHtml(photo)}" alt="${escHtml(name)}" style="${box}">`
}

// popup ยืนยันกลางๆ (ไม่ใช้สีแดงแบบ showDangerConfirm ของ ui.js) — เก็บไว้ในไฟล์นี้เอง
// ตั้งใจไม่ดันขึ้น js/ui.js ที่ใช้ร่วมกันทั้งเว็บ เพราะต้องไล่ bump เวอร์ชัน/แคชทุกหน้าที่ import
// ทั้งที่ตอนนี้มีแค่โมดูลนี้ใช้ — ย้ายขึ้นไปทีหลังได้ถ้ามีจุดอื่นอยากใช้ซ้ำ
function showRegradeConfirm({ title = 'ยืนยันการดำเนินการ', message = '', confirmText = 'ยืนยัน', cancelText = 'ยกเลิก' } = {}) {
  return new Promise(resolve => {
    document.getElementById('regrade-confirm-modal')?.remove()
    const m = document.createElement('div')
    m.id = 'regrade-confirm-modal'
    m.className = 'fixed inset-0 z-[99999] flex items-center justify-center p-4'
    m.innerHTML = `
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="rgc-overlay"></div>
      <div class="rg-modal-panel relative shadow-2xl w-full max-w-sm overflow-hidden">
        <div class="h-1.5" style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))"></div>
        <div class="px-6 pt-6 pb-5 text-center">
          <h3 class="text-lg font-bold text-gray-900 mb-2">${escHtml(title)}</h3>
          ${message ? `<p class="text-sm text-gray-600 leading-relaxed">${escHtml(message)}</p>` : ''}
        </div>
        <div class="px-6 pb-6 grid grid-cols-2 gap-3">
          <button id="rgc-cancel" class="py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 active:scale-[0.97] transition-all">${escHtml(cancelText)}</button>
          <button id="rgc-confirm" class="py-3 rounded-2xl text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-all"
            style="background: linear-gradient(135deg, var(--primary), var(--primary-dark))">${escHtml(confirmText)}</button>
        </div>
      </div>`
    document.body.appendChild(m)
    const cleanup = (result) => { m.remove(); resolve(result) }
    m.querySelector('#rgc-overlay').addEventListener('click', () => cleanup(false))
    m.querySelector('#rgc-cancel').addEventListener('click', () => cleanup(false))
    m.querySelector('#rgc-confirm').addEventListener('click', () => cleanup(true))
  })
}

function pill(active, variant = 'primary') {
  const grad = variant === 'secondary' ? 'var(--secondary),var(--secondary-dark)' : 'var(--primary),var(--primary-dark)'
  return active
    ? `flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:#fff;background:linear-gradient(135deg,${grad});`
    : `flex:1;padding:8px;border-radius:10px;font-size:.75rem;font-weight:800;text-align:center;color:var(--muted);background:var(--surface-2);`
}
// ปุ่มเปิด/ปิดใช้งาน (แทน checkbox/สวิตช์) — แพทเทิร์นเดียวกับหน้าสรุปไซซ์เสื้อ (sports-portals.js actionCard):
// badge สถานะ + ปุ่มข้อความ "เปิดใช้งาน"/"ปิดใช้งาน" สลับสี ใช้ data-on="1"/"0" เป็น source of truth
function actionToggleHtml(id, checked) {
  return `<div class="flex items-center gap-2 flex-shrink-0">
    <span data-badge class="px-2 py-1 rounded-full text-[11px] font-bold" style="background:${checked ? 'var(--ok-soft)' : 'var(--surface-2)'};color:${checked ? 'var(--ok)' : 'var(--muted)'}">${checked ? 'เปิดใช้งานอยู่' : 'ปิดใช้งานอยู่'}</span>
    <button type="button" id="${id}" data-on="${checked ? '1' : '0'}" class="px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0"
      style="${checked ? 'background:var(--bad-soft);color:var(--bad);' : 'background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;'}">${checked ? 'ปิดใช้งาน' : 'เปิดใช้งาน'}</button>
  </div>`
}
function wireActionToggles(content, ids) {
  ids.forEach(id => {
    const btn = content.querySelector('#' + id)
    if (!btn) return
    btn.addEventListener('click', () => {
      const on = btn.dataset.on !== '1'
      btn.dataset.on = on ? '1' : '0'
      btn.style.cssText = on ? 'background:var(--bad-soft);color:var(--bad);' : 'background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;'
      btn.textContent = on ? 'ปิดใช้งาน' : 'เปิดใช้งาน'
      const badge = btn.parentElement.querySelector('[data-badge]')
      if (badge) {
        badge.textContent = on ? 'เปิดใช้งานอยู่' : 'ปิดใช้งานอยู่'
        badge.style.background = on ? 'var(--ok-soft)' : 'var(--surface-2)'
        badge.style.color = on ? 'var(--ok)' : 'var(--muted)'
      }
    })
  })
}
const isToggleOn = (content, id) => content.querySelector('#' + id)?.dataset.on === '1'

function tab(active, variant = 'primary') {
  const grad = variant === 'secondary' ? 'var(--secondary),var(--secondary-dark)' : 'var(--primary),var(--primary-dark)'
  return active
    ? `padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:800;color:#fff;background:linear-gradient(135deg,${grad});box-shadow:0 2px 8px rgba(0,0,0,.15);white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;`
    : `padding:8px 18px;border-radius:9999px;font-size:.72rem;font-weight:700;color:var(--muted);background:transparent;white-space:nowrap;transition:background .15s ease,box-shadow .15s ease;`
}
const TAB_TRACK_CLASS = 'inline-flex gap-1 p-1 rounded-full bg-[var(--surface-2)] flex-wrap'

// แถบเมนูล่าง (มือถือ) — 3 ปุ่ม ใช้ร่วมกันทั้งฝั่งนักเรียน/ครู
function renderBottomNav(items, active, onPick) {
  const bar = document.getElementById('regrade-bottom-tabs')
  bar.innerHTML = `<div class="flex">${items.map(it => `
    <button data-nav="${it.key}" class="flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5" style="transition:transform .15s ease;${active === it.key ? 'transform:scale(1.12)' : ''}">
      <span class="text-lg">${it.icon}</span>
      <span class="text-[10px] font-bold" style="color:${active === it.key ? 'var(--primary)' : 'var(--muted-2)'}">${escHtml(it.label)}</span>
    </button>`).join('')}</div>`
  bar.querySelectorAll('[data-nav]').forEach(btn => btn.addEventListener('click', () => onPick(btn.dataset.nav)))
}

// ============================================================================
// context ของผู้ใช้ปัจจุบัน (ตั้งค่าใน init() ครั้งเดียว)
// ============================================================================
const ctx = { role: null, isAdmin: false, isRegistrar: false, isExecutive: false, studentRow: null, teacherRow: null, cfg: {} }

function setHeaderTitle(mobile, full) {
  document.getElementById('regrade-title-mobile').textContent = mobile
  document.getElementById('regrade-view-title').textContent = full
}

function renderSidebarNav(sections, active, onPick) {
  const nav = document.getElementById('regrade-sidebar-nav')
  nav.innerHTML = sections.map(s => `
    <button data-sec="${s.key}" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-left"
      style="${active === s.key ? 'background:var(--primary);color:#fff;' : 'color:var(--primary-45);'}">
      <span>${s.icon}</span> ${escHtml(s.label)}
    </button>`).join('')
  nav.querySelectorAll('[data-sec]').forEach(btn => btn.addEventListener('click', () => onPick(btn.dataset.sec)))
}

// ============================================================================
// ฝั่งนักเรียน
// ============================================================================
const student = { subView: 'catalog', categoryTab: 'สามัญ', subjects: [] }

async function loadStudentSubjects() {
  student.subjects = await getMyRegradeSubjects(ctx.studentRow.id)
}

function studentFabVisible() { return !!ctx.cfg.intent_open }

// ระดับชั้นที่เปิดรับแจ้งความจำนง — ถ้าไม่ได้ตั้งค่าไว้ (ว่าง/ไม่มี) = เปิดทุกระดับชั้น (ค่าเริ่มต้น)
// เช็คตามระดับชั้น "ปัจจุบัน" ของนักเรียนจากห้องเรียนตอนนี้ (ไม่ใช่ระดับชั้นตอนติดวิชาในอดีต
// ที่บันทึกไว้ใน regrade_subjects.class_level ซึ่งชื่อเรียกอาจต่างจากปัจจุบันไปแล้ว)
function isLevelOpen(category) {
  const levels = ctx.cfg.intent_open_levels
  if (!levels || !levels.length) return true
  const room = category === 'ศาสนา' ? ctx.studentRow?.religion_room : ctx.studentRow?.main_room
  const level = room ? room.split('/')[0].trim() : null
  if (!level) return false
  return levels.includes(`${category}|${level}`)
}

async function renderStudent() {
  setHeaderTitle('แก้ค้างเก่า', 'รายวิชาค้างของฉัน')
  document.getElementById('regrade-sidebar-nav').innerHTML = ''
  const content = document.getElementById('regrade-content')

  if (!student.subjects.length && student.subjects !== null) {
    try { await loadStudentSubjects() } catch (err) {
      content.innerHTML = `<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${escHtml(err.message)}</div>`
      return
    }
  }

  const s = student.subjects
  const genCount = s.filter(x => x.category === 'สามัญ').length
  const relCount = s.filter(x => x.category === 'ศาสนา').length
  const myWork = s.filter(x => x.status === 'กำลังดำเนินการปรับแก้')
  const total = s.length, requested = s.filter(x => x.status === 'จำนงแล้ว').length
  const assigned = myWork.length, done = s.filter(x => x.status === 'ปรับแก้สำเร็จ').length

  let inner = ''
  if (student.subView === 'catalog') {
    const shown = s.filter(x => x.category === student.categoryTab)
    inner = `
      <div class="flex gap-2 mb-4">
        <button data-tab="สามัญ" style="${pill(student.categoryTab === 'สามัญ')}">รายวิชาสามัญ (${genCount})</button>
        <button data-tab="ศาสนา" style="${pill(student.categoryTab === 'ศาสนา', 'secondary')}">รายวิชาศาสนา (${relCount})</button>
      </div>
      <div class="flex flex-col gap-3">
        ${shown.length ? shown.map(x => studentSubjectCard(x)).join('') : `<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในหมวดนี้ 🎉</div>`}
      </div>`
  } else if (student.subView === 'overview') {
    inner = `
      ${ctx.cfg.show_deadline_banner ? deadlineBannerHtml(ctx.cfg.intent_window_start, ctx.cfg.intent_window_end, 'กำหนดแจ้งความจำนงขอแก้/ปรับ', '--primary', 'ไปแจ้งความจำนง', 'catalog') : ''}
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        ${categorySummaryDonut(s.filter(x => x.category === 'สามัญ'), '📘 สามัญ', 'var(--primary-dark)')}
        ${categorySummaryDonut(s.filter(x => x.category === 'ศาสนา'), '🕌 ศาสนา', 'var(--secondary-dark)')}
      </div>
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-2">สรุปของฉัน</p>
        <div class="grid grid-cols-2 gap-3">
          ${statCard(total, 'วิชาค้างทั้งหมด', 'var(--ink)')}
          ${statCard(requested, 'จำนงแล้ว', 'var(--gold-ink)')}
          ${statCard(assigned, 'กำลังดำเนินการ', 'var(--info)')}
          ${statCard(done, 'สำเร็จแล้ว', 'var(--ok)')}
        </div>
      </div>`
  } else if (student.subView === 'myWork') {
    inner = `<div class="flex flex-col gap-3">
      ${myWork.length ? myWork.map(x => studentSubjectCard(x)).join('') : `<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่ต้องทำตอนนี้ 🎉</div>`}
    </div>`
  }

  content.innerHTML = `
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">
      ${inner}
    </div>
    ${studentFabVisible() ? `
    <button id="regrade-student-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--gold),var(--gold-ink))">📝 จำนงขอแก้/ปรับ</button>` : ''}`

  content.querySelectorAll('[data-tab]').forEach(btn => btn.addEventListener('click', () => { student.categoryTab = btn.dataset.tab; renderStudent() }))
  content.querySelectorAll('[data-declare]').forEach(btn => btn.addEventListener('click', () => handleDeclare(btn)))
  content.querySelectorAll('[data-deadline-cta]').forEach(btn => btn.addEventListener('click', () => { student.subView = btn.dataset.deadlineCta; renderStudent() }))
  document.getElementById('regrade-student-fab')?.addEventListener('click', () => { student.subView = 'catalog'; renderStudent() })

  const studentTabs = [
    { key: 'catalog', icon: '📚', label: 'รายวิชาที่ค้าง' },
    { key: 'overview', icon: '🏠', label: 'ภาพรวม' },
    { key: 'myWork', icon: '📝', label: 'ภาระงานของฉัน' },
  ]
  renderSidebarNav(studentTabs, student.subView, (key) => { student.subView = key; renderStudent() })
  renderBottomNav([
    { key: 'catalog', icon: '📚', label: 'รายวิชาที่ค้าง' },
    { key: 'overview', icon: '🏠', label: 'ภาพรวม' },
    { key: 'myWork', icon: '📝', label: 'ภาระงานของฉัน' },
  ], student.subView, (key) => { student.subView = key; renderStudent() })
}

function statCard(value, label, color) {
  return `<div class="bg-[var(--surface-2)] rounded-xl p-3 text-center">
    <p class="text-xl font-extrabold" style="color:${color}">${value}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${escHtml(label)}</p>
  </div>`
}

function studentSubjectCard(x) {
  const teacherName = x.teachers?.full_name || '-'
  const canDeclare = studentFabVisible() && isLevelOpen(x.category)
  return `
  <div class="rg-card p-4 shadow-sm">
    <div class="flex justify-between gap-2 items-start">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${escHtml(x.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${escHtml(x.subject_code)} · ${escHtml(x.semester)}</p>
      </div>
      <span class="flex-shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold" style="${badgeStyle(x.status)}">${statusMeta(x.status).label}</span>
    </div>
    <div class="flex items-center gap-2 mt-2 pt-2 border-t border-dashed border-[var(--line-soft)]">
      ${personAvatarHtml(x.teachers, true)}
      <div><p class="text-[10px] text-[var(--muted-2)]">ครูผู้สอน</p><p class="text-xs font-bold text-[var(--ink-2)]">${escHtml(teacherName)}</p></div>
    </div>
    ${x.status === 'ยังไม่แจ้ง' && canDeclare ? `
      <button data-declare="${x.id}" data-subject="${escHtml(x.subject_name)}"
        class="mt-3 w-full py-2.5 rounded-xl text-white font-bold text-xs"
        style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">แจ้งความจำนง</button>` : ''}
    ${x.status === 'ยังไม่แจ้ง' && !canDeclare ? `
      <p class="mt-3 text-center text-[10px] text-[var(--muted-2)]">ยังไม่เปิดให้แจ้งความจำนงในขณะนี้</p>` : ''}
    ${x.status === 'กำลังดำเนินการปรับแก้' ? `
      <div class="mt-3 rounded-xl p-3" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
        <p class="text-xs font-bold" style="color:var(--info)">${escHtml(x.method || '')}</p>
        <p class="text-xs mt-1" style="color:var(--info)">กำหนด: ${escHtml(x.due_text || '-')}</p>
      </div>` : ''}
  </div>`
}

async function handleDeclare(btn) {
  const id = Number(btn.dataset.declare)
  const ok = await showRegradeConfirm({
    title: 'ยืนยันแจ้งความจำนง',
    message: `ยืนยันแจ้งความจำนงขอปรับแก้วิชา "${btn.dataset.subject}" ใช่หรือไม่? เมื่อกดยืนยัน ครูผู้สอนจะได้รับแจ้งเตือนทันที`,
    confirmText: 'ยืนยันแจ้งความจำนง',
  })
  if (!ok) return
  try {
    await declareIntent(id)
    showToast('แจ้งความจำนงเรียบร้อย ครูผู้สอนจะได้รับแจ้งเตือนทันที ✅', 'success')
    await loadStudentSubjects()
    renderStudent()
  } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + err.message, 'error') }
}

// ============================================================================
// ฝั่งครู
// ============================================================================
const teacher = {
  subView: 'overview', subjects: [], form: null,
  catalogExpanded: new Set(), catalogSemesterFilter: {},
  assignedExpanded: new Set(), assignedSemesterFilter: {},
  deptHeadExpanded: new Set(), unassigned: [], deptHeadTeacherOptions: null,
  deptHeadDept: undefined, deptHeadShowAll: false,
}

function isDeptHead() {
  // เผื่อบัญชีเก่าที่ยังไม่ถูกย้ายมาเก็บใน positions[] (มีแค่คอลัมน์ position เดี่ยวๆ) — เช็คสำรองแบบเดียวกับ dashboard.js
  const t = ctx.teacherRow
  const positions = t?.positions?.length ? t.positions : (t?.position ? [t.position] : [])
  return ['dept_head', 'religion_group_head', 'religion_subgroup_head'].some(p => positions.includes(p))
}

async function loadTeacherSubjects() {
  teacher.subjects = await getMyTeachingRegradeSubjects(ctx.teacherRow.id)
}

async function loadDeptHeadData() {
  const [unassigned, allTeachers] = await Promise.all([
    getUnassignedRegradeSubjects(ctx.teacherRow.category),
    teacher.deptHeadTeacherOptions ? Promise.resolve(teacher.deptHeadTeacherOptions) : getAllTeachersForPicker(),
    teacher.deptHeadDept !== undefined ? Promise.resolve(teacher.deptHeadDept) : getDepartmentById(ctx.teacherRow.position_dept_id).then(d => { teacher.deptHeadDept = d }),
  ])
  teacher.unassigned = unassigned
  teacher.deptHeadTeacherOptions = allTeachers.filter(t => t.category === ctx.teacherRow.category)
}

// กรองเฉพาะกลุ่มสาระของหัวหน้าเอง (ถ้ารู้จักรหัสกลุ่มสาระ + สโคปด้วยรหัสวิชาตัวหน้าได้) — ไม่ใช่ขอบเขตสิทธิ์จริง
// (คุมจริงที่ RLS ระดับหมวดสามัญ/ศาสนา) แค่ช่วยกรองให้ดูง่ายขึ้น ยังสลับดูทั้งหมดได้เสมอ
function deptHeadFilterableGroups(groups) {
  const deptCode = teacher.deptHeadDept?.dept_code
  if (!deptCode || teacher.deptHeadShowAll) return groups
  return groups.filter(g => SUBJECT_PREFIX_TO_DEPT[g.subject_code.charAt(0)] === deptCode)
}

async function renderTeacher() {
  setHeaderTitle('แก้ค้างเก่า', 'งานแก้ค้างเก่า')
  document.getElementById('regrade-sidebar-nav').innerHTML = ''
  const content = document.getElementById('regrade-content')

  try {
    await loadTeacherSubjects()
    if (teacher.subView === 'depthead' && isDeptHead()) await loadDeptHeadData()
  } catch (err) {
    content.innerHTML = `<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${escHtml(err.message)}</div>`
    return
  }

  const all = teacher.subjects
  const respondList = all.filter(x => x.status === 'จำนงแล้ว')
  const assignedList = all.filter(x => x.status === 'กำลังดำเนินการปรับแก้')
  const doneCount = all.filter(x => x.status === 'ปรับแก้สำเร็จ').length

  let inner = ''
  if (teacher.subView === 'catalog') {
    const groups = groupBySubject(all)
    inner = `<div class="flex flex-col gap-3">${groups.length ? groups.map(g => subjectGroupCard(g, {
      scope: 'catalog', expandedSet: teacher.catalogExpanded, semesterFilterMap: teacher.catalogSemesterFilter, renderRow: catalogStudentRow,
    })).join('') : `<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีรายวิชาค้างในความรับผิดชอบตอนนี้ 🎉</div>`}</div>`
  } else if (teacher.subView === 'overview') {
    const notYetCount = all.length - respondList.length - assignedList.length - doneCount
    const donePercent = all.length ? Math.round(doneCount / all.length * 100) : 0
    inner = `
      ${ctx.cfg.show_deadline_banner ? deadlineBannerHtml(ctx.cfg.response_window_start, ctx.cfg.response_window_end, 'กำหนดตอบรับคำร้องของนักเรียน', '--secondary', 'ไปตอบรับ', 'respond') : ''}
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สรุปของฉัน</p>
        ${all.length ? donutChartHtml([
          { value: notYetCount, color: '#9ca3af', label: 'ยังไม่แจ้ง' },
          { value: respondList.length, color: 'var(--gold-ink)', label: 'รอตอบรับ' },
          { value: assignedList.length, color: 'var(--info)', label: 'กำลังดำเนินการ' },
          { value: doneCount, color: 'var(--ok)', label: 'สำเร็จแล้ว' },
        ], `${donePercent}%`, 'สำเร็จแล้ว') : `<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีรายวิชาค้างในความรับผิดชอบ</p>`}
        <div class="grid grid-cols-2 gap-3 mt-4">
          ${statCardLink(all.length, 'วิชาค้างทั้งหมด', 'var(--ink)', 'catalog')}
          ${statCardLink(respondList.length, 'รอตอบรับ', 'var(--gold-ink)', 'respond')}
          ${statCardLink(assignedList.length, 'กำลังดำเนินการ', 'var(--info)', 'assigned')}
          ${statCardLink(doneCount, 'สำเร็จแล้ว', 'var(--ok)', 'catalog')}
        </div>
      </div>`
  } else if (teacher.subView === 'assigned') {
    const groups = groupBySubject(assignedList)
    inner = `<div class="flex flex-col gap-3">${groups.length ? groups.map(g => subjectGroupCard(g, {
      scope: 'assigned', expandedSet: teacher.assignedExpanded, semesterFilterMap: teacher.assignedSemesterFilter, renderRow: assignedStudentRow,
    })).join('') : `<div class="text-center py-12 text-[var(--muted-2)] text-sm">ยังไม่มีงานที่มอบหมายอยู่</div>`}</div>`
  } else if (teacher.subView === 'respond') {
    inner = `
      <div class="flex items-center gap-2 mb-3">
        <button id="regrade-teacher-back" class="w-8 h-8 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-sm">←</button>
        <p class="text-sm font-bold text-[var(--ink)]">ตอบรับคำร้อง</p>
      </div>
      <div class="flex flex-col gap-3">${respondList.length ? respondList.map(x => teacherRespondCard(x)).join('') : `<div class="text-center py-12 text-[var(--muted-2)] text-sm">ตอบรับครบหมดแล้ว 🎉</div>`}</div>`
  } else if (teacher.subView === 'depthead') {
    const allGroups = groupBySubject(teacher.unassigned)
    const deptCode = teacher.deptHeadDept?.dept_code
    const canFilterByDept = deptCode && Object.values(SUBJECT_PREFIX_TO_DEPT).includes(deptCode)
    const groups = deptHeadFilterableGroups(allGroups)
    inner = `
      <div class="rg-card p-3 mb-4 text-xs text-[var(--muted-2)]">🗂️ วิชาในหมวด${escHtml(ctx.teacherRow.category)}ที่ยังไม่มีครูผู้สอน — มอบหมายครูที่สอนอยู่จริงตอนนี้ให้แต่ละวิชาได้เลย</div>
      ${canFilterByDept ? `
      <div class="flex gap-2 mb-4">
        <button data-depthead-scope="own" style="${pill(!teacher.deptHeadShowAll)}">📘 เฉพาะกลุ่มสาระของฉัน (${escHtml(teacher.deptHeadDept.dept_name)}) · ${allGroups.filter(g => SUBJECT_PREFIX_TO_DEPT[g.subject_code.charAt(0)] === deptCode).length}</button>
        <button data-depthead-scope="all" style="${pill(teacher.deptHeadShowAll, 'secondary')}">ดูทั้งหมด · ${allGroups.length}</button>
      </div>
      <p class="text-[10px] text-[var(--muted-2)] mb-3">การกรองนี้ช่วยดูง่ายขึ้นเท่านั้น ยังมอบหมายวิชานอกกลุ่มสาระของตัวเองได้ถ้าจำเป็น — ระบบจะรู้ตำแหน่งวิชาแค่แบบคร่าวๆ จากรหัสวิชา อาจไม่ครบ 100%</p>` : ''}
      <div class="flex flex-col gap-3">${groups.length ? groups.map(g => unassignedSubjectGroupCard(g, teacher.deptHeadExpanded, teacher.deptHeadTeacherOptions)).join('') : `<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่มีวิชาที่ขาดครูผู้สอนแล้ว 🎉</div>`}</div>
      <datalist id="regrade-depthead-teacher-list">${teacher.deptHeadTeacherOptions.map(t => `<option value="${escHtml(t.full_name)}${t.teacher_code ? ` (${escHtml(t.teacher_code)})` : ''} · รหัส ${t.id}"></option>`).join('')}</datalist>`
  }

  content.innerHTML = `
    <div class="max-w-lg mx-auto p-4 relative" style="min-height:60vh;">${inner}</div>
    ${respondList.length ? `
    <button id="regrade-teacher-fab" class="fixed md:absolute bottom-24 md:bottom-6 right-4 md:right-8 px-4 py-3 rounded-2xl text-white font-bold text-xs shadow-lg flex items-center gap-2 z-20"
      style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">
      ✅ ตอบรับ
      <span class="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">${respondList.length}</span>
    </button>` : ''}`

  document.getElementById('regrade-teacher-fab')?.addEventListener('click', () => { teacher.subView = 'respond'; renderTeacher() })
  document.getElementById('regrade-teacher-back')?.addEventListener('click', () => { teacher.subView = 'overview'; renderTeacher() })
  content.querySelectorAll('[data-deadline-cta]').forEach(btn => btn.addEventListener('click', () => { teacher.subView = btn.dataset.deadlineCta; renderTeacher() }))
  content.querySelectorAll('[data-open-exam]').forEach(btn => btn.addEventListener('click', () => { teacher.form = { id: Number(btn.dataset.openExam), method: 'นัดสอบปรับ', dueText: '', fileUrl: '' }; renderTeacher() }))
  content.querySelectorAll('[data-open-work]').forEach(btn => btn.addEventListener('click', () => { teacher.form = { id: Number(btn.dataset.openWork), method: 'ให้งานแก้', dueText: '', fileUrl: '' }; renderTeacher() }))
  content.querySelectorAll('[data-cancel-form]').forEach(btn => btn.addEventListener('click', () => { teacher.form = null; renderTeacher() }))
  content.querySelectorAll('[data-due-input]').forEach(el => el.addEventListener('input', () => { teacher.form.dueText = el.value }))
  content.querySelectorAll('[data-file-input]').forEach(el => el.addEventListener('input', () => { teacher.form.fileUrl = el.value }))
  content.querySelectorAll('[data-confirm-assign]').forEach(btn => btn.addEventListener('click', () => handleAssign(btn)))
  content.querySelectorAll('[data-toggle-group]').forEach(btn => btn.addEventListener('click', () => {
    const [scope, code] = btn.dataset.toggleGroup.split('|')
    const set = scope === 'catalog' ? teacher.catalogExpanded : scope === 'assigned' ? teacher.assignedExpanded : teacher.deptHeadExpanded
    if (set.has(code)) set.delete(code); else set.add(code)
    renderTeacher()
  }))
  content.querySelectorAll('[data-depthead-assign]').forEach(btn => btn.addEventListener('click', () => handleDeptHeadAssign(btn)))
  content.querySelectorAll('[data-depthead-scope]').forEach(btn => btn.addEventListener('click', () => { teacher.deptHeadShowAll = btn.dataset.deptheadScope === 'all'; renderTeacher() }))
  content.querySelectorAll('[data-group-sem]').forEach(sel => sel.addEventListener('change', (e) => {
    const [scope, code] = sel.dataset.groupSem.split('|')
    const map = scope === 'catalog' ? teacher.catalogSemesterFilter : teacher.assignedSemesterFilter
    map[code] = e.target.value
    renderTeacher()
  }))
  content.querySelectorAll('[data-goto-sub]').forEach(btn => btn.addEventListener('click', () => { teacher.subView = btn.dataset.gotoSub; renderTeacher() }))

  const teacherTabs = [
    { key: 'catalog', icon: '📚', label: 'รายวิชาที่ค้าง' },
    { key: 'overview', icon: '🏠', label: 'ภาพรวม' },
    { key: 'assigned', icon: '📝', label: 'มอบหมายงาน' },
  ]
  if (isDeptHead()) teacherTabs.push({ key: 'depthead', icon: '🗂️', label: 'จัดการรายวิชา' })
  const teacherActiveKey = teacher.subView === 'respond' ? 'overview' : teacher.subView
  renderSidebarNav(teacherTabs, teacherActiveKey, (key) => { teacher.subView = key; renderTeacher() })
  renderBottomNav(teacherTabs, teacherActiveKey, (key) => { teacher.subView = key; renderTeacher() })
}

// จัดกลุ่มรายวิชาค้างของครู — การ์ดระดับบนสุดคือ "รายวิชา" ไม่ใช่ "นักเรียนแต่ละคน"
// เพื่อให้เห็นภาพรวมว่าวิชาไหนติดเยอะก่อน ค่อยกดขยายดูรายชื่อนักเรียนทีหลัง
function groupBySubject(list) {
  const map = new Map()
  list.forEach(x => {
    if (!map.has(x.subject_code)) map.set(x.subject_code, { subject_code: x.subject_code, subject_name: x.subject_name, category: x.category, items: [] })
    map.get(x.subject_code).items.push(x)
  })
  return [...map.values()].sort((a, b) => b.items.length - a.items.length)
}

function subjectGroupCard(group, { scope, expandedSet, semesterFilterMap, renderRow }) {
  const code = group.subject_code
  const isOpen = expandedSet.has(code)
  const semesters = [...new Set(group.items.map(x => x.semester).filter(Boolean))].sort().reverse()
  const selectedSem = semesterFilterMap[code] || 'all'
  const shown = selectedSem === 'all' ? group.items : group.items.filter(x => x.semester === selectedSem)
  return `
  <div class="rg-card p-4">
    <button data-toggle-group="${scope}|${escHtml(code)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${escHtml(group.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${escHtml(code)}</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${categoryChipStyle(group.category)}">${escHtml(group.category)}</span>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">นักเรียนติด ${group.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${isOpen ? '180deg' : '0deg'})">▾</span>
      </div>
    </button>
    ${isOpen ? `
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      ${semesters.length > 1 ? `
      <select data-group-sem="${scope}|${escHtml(code)}" class="w-full mb-3 px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">
        <option value="all">ทุกภาคเรียน (${group.items.length})</option>
        ${semesters.map(s => `<option value="${escHtml(s)}" ${selectedSem === s ? 'selected' : ''}>${escHtml(s)} (${group.items.filter(x => x.semester === s).length})</option>`).join('')}
      </select>` : ''}
      <div class="flex flex-col gap-2">${shown.map(x => renderRow(x)).join('')}</div>
    </div>` : ''}
  </div>`
}

function catalogStudentRow(x) {
  const name = x.students?.full_name || '-'
  return `
  <div class="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--surface-2)]">
    ${personAvatarHtml(x.students, false)}
    <div class="min-w-0 flex-1">
      <p class="text-xs font-bold text-[var(--ink)] truncate">${escHtml(name)}</p>
      <p class="text-[10px] text-[var(--muted-2)] truncate">${escHtml(x.students?.student_code || '')} · ${escHtml(x.students?.main_room || x.students?.religion_room || '')} · ${escHtml(x.semester)}</p>
    </div>
    <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${badgeStyle(x.status)}">${statusMeta(x.status).label}</span>
  </div>`
}

function assignedStudentRow(x) {
  const name = x.students?.full_name || '-'
  return `
  <div class="p-2.5 rounded-xl bg-[var(--surface-2)]">
    <div class="flex items-center gap-2.5">
      ${personAvatarHtml(x.students, false)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${escHtml(name)}</p>
        <p class="text-[10px] text-[var(--muted-2)] truncate">${escHtml(x.students?.student_code || '')} · ${escHtml(x.students?.main_room || x.students?.religion_room || '')} · ${escHtml(x.semester)}</p>
      </div>
    </div>
    <div class="mt-2 rounded-lg p-2" style="background:var(--info-soft);border:1px solid var(--info-soft-line)">
      <p class="text-[11px] font-bold" style="color:var(--info)">${escHtml(x.method || '')}</p>
      <p class="text-[11px] mt-0.5" style="color:var(--info)">กำหนด: ${escHtml(x.due_text || '-')}</p>
    </div>
  </div>`
}

function unassignedSubjectGroupCard(group, expandedSet, teacherOptions) {
  const code = group.subject_code
  const isOpen = expandedSet.has(code)
  return `
  <div class="rg-card p-4">
    <button data-toggle-group="depthead|${escHtml(code)}" class="w-full flex justify-between items-start gap-2 text-left">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${escHtml(group.subject_name)}</p>
        <p class="text-xs text-[var(--muted-2)] mt-0.5">${escHtml(code)}</p>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap" style="background:var(--bad-soft);color:var(--bad);border:1px solid var(--bad-soft-line)">ยังไม่มีครู ${group.items.length} คน</span>
        <span class="text-[var(--muted-2)] text-sm inline-block transition-transform" style="transform:rotate(${isOpen ? '180deg' : '0deg'})">▾</span>
      </div>
    </button>
    ${isOpen ? `
    <div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)]">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">มอบหมายครูผู้สอนปัจจุบันให้วิชานี้ทั้งหมด (${group.items.length} รายการ)</label>
      <div class="flex gap-2 mb-3">
        <input data-depthead-input="${escHtml(code)}" list="regrade-depthead-teacher-list" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
        <button data-depthead-assign="${escHtml(code)}" class="px-4 py-2 rounded-lg text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">มอบหมาย</button>
      </div>
      <div class="flex flex-col gap-2">${group.items.map(x => catalogStudentRow(x)).join('')}</div>
    </div>` : ''}
  </div>`
}

async function handleDeptHeadAssign(btn) {
  const code = btn.dataset.deptheadAssign
  const input = document.querySelector(`[data-depthead-input="${CSS.escape(code)}"]`)
  const teacher_ = resolveTeacherFromPickerInput(input.value, teacher.deptHeadTeacherOptions)
  if (!teacher_) { showToast('กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง', 'warning'); return }
  const group = groupBySubject(teacher.unassigned).find(g => g.subject_code === code)
  const ok = await showRegradeConfirm({
    title: 'ยืนยันมอบหมายครูผู้สอน',
    message: `มอบหมาย "${teacher_.full_name}" เป็นครูผู้สอนวิชา "${group?.subject_name || code}" ให้นักเรียนที่ยังไม่มีครูทั้ง ${group?.items.length ?? ''} รายการใช่หรือไม่?`,
    confirmText: 'ยืนยันมอบหมาย',
  })
  if (!ok) return
  try {
    const n = await assignSubjectTeacherBulk(code, ctx.teacherRow.category, teacher_.id)
    showToast(`มอบหมายครูผู้สอนให้ ${n} รายการเรียบร้อย ✅`, 'success')
    renderTeacher()
  } catch (err) { showToast('มอบหมายไม่สำเร็จ: ' + err.message, 'error') }
}

// แผนภูมิวงกลมแบบเบา — ใช้ conic-gradient ล้วนๆ ไม่พึ่ง library ภายนอก
function donutChartHtml(segments, centerLabel, centerSub) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1
  let acc = 0
  const stops = segments.map(seg => {
    const start = (acc / total) * 360
    acc += seg.value
    const end = (acc / total) * 360
    return `${seg.color} ${start}deg ${end}deg`
  }).join(', ')
  return `
  <div class="flex items-center gap-4">
    <div style="width:96px;height:96px;border-radius:9999px;background:conic-gradient(${stops});flex-shrink:0;display:flex;align-items:center;justify-content:center;">
      <div style="width:64px;height:64px;border-radius:9999px;background:var(--surface);display:flex;flex-direction:column;align-items:center;justify-content:center;">
        <p class="text-base font-extrabold text-[var(--ink)]">${escHtml(centerLabel)}</p>
        <p class="text-[9px] text-[var(--muted-2)]">${escHtml(centerSub)}</p>
      </div>
    </div>
    <div class="flex-1 min-w-0 grid grid-cols-1 gap-1.5">
      ${segments.map(seg => `
      <div class="flex items-center gap-1.5 text-[11px]">
        <span style="width:8px;height:8px;border-radius:9999px;background:${seg.color};flex-shrink:0;"></span>
        <span class="text-[var(--muted)] truncate">${escHtml(seg.label)}</span>
        <span class="ml-auto font-bold text-[var(--ink-2)]">${seg.value}</span>
      </div>`).join('')}
    </div>
  </div>`
}

function categorySummaryDonut(list, label, accentColor) {
  const notYet = list.filter(x => x.status === 'ยังไม่แจ้ง').length
  const req = list.filter(x => x.status === 'จำนงแล้ว').length
  const assigned = list.filter(x => x.status === 'กำลังดำเนินการปรับแก้').length
  const done = list.filter(x => x.status === 'ปรับแก้สำเร็จ').length
  const total = list.length
  const donePercent = total ? Math.round(done / total * 100) : 0
  return `
  <div class="rg-card p-4 flex-1 min-w-0">
    <p class="text-xs font-bold mb-3" style="color:${accentColor}">${escHtml(label)} (${total})</p>
    ${total ? donutChartHtml([
      { value: notYet, color: '#9ca3af', label: 'ยังไม่แจ้ง' },
      { value: req, color: 'var(--gold-ink)', label: 'จำนงแล้ว' },
      { value: assigned, color: 'var(--info)', label: 'กำลังดำเนินการ' },
      { value: done, color: 'var(--ok)', label: 'สำเร็จแล้ว' },
    ], `${donePercent}%`, 'สำเร็จแล้ว') : `<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีวิชาค้างในหมวดนี้ 🎉</p>`}
  </div>`
}

function statCardLink(value, label, color, gotoKey) {
  return `<button data-goto-sub="${escHtml(gotoKey)}" class="bg-[var(--surface-2)] rounded-xl p-3 text-center hover:opacity-80 active:scale-[0.98] transition cursor-pointer">
    <p class="text-xl font-extrabold" style="color:${color}">${value}</p>
    <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${escHtml(label)}</p>
  </button>`
}

function teacherRespondCard(x) {
  const studentName = x.students?.full_name || '-'
  const f = teacher.form
  const openExam = f && f.id === x.id && f.method === 'นัดสอบปรับ'
  const openWork = f && f.id === x.id && f.method === 'ให้งานแก้'
  return `
  <div class="rg-card p-4">
    <div class="flex gap-2">
      ${personAvatarHtml(x.students, true)}
      <div class="min-w-0">
        <p class="font-bold text-xs text-[var(--ink)]">${escHtml(studentName)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">(${escHtml(x.students?.student_code || '')} · ${escHtml(x.students?.main_room || '')})</p>
        <p class="text-xs text-[var(--muted)] mt-0.5">${escHtml(x.subject_name)} (${escHtml(x.subject_code)})</p>
        <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${categoryChipStyle(x.category)}">${escHtml(x.category)}</span>
      </div>
    </div>
    ${!f || f.id !== x.id ? `
    <div class="flex gap-2 mt-3">
      <button data-open-exam="${x.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--info-soft);color:var(--info);border:1px solid var(--info-soft-line)">🗓 นัดสอบปรับ</button>
      <button data-open-work="${x.id}" class="flex-1 py-2 rounded-xl text-xs font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">📎 ให้งานแก้</button>
    </div>` : ''}
    ${openExam ? `
    <div class="mt-3 rounded-xl p-3 bg-[var(--surface-2)]">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">วันเวลานัดสอบปรับ</label>
      <input data-due-input class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="เช่น 15 ก.พ. 2569 09:00 น." value="${escHtml(f.dueText)}">
      <div class="flex gap-2 mt-2">
        <button data-confirm-assign="${x.id}" class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">ยืนยันนัดสอบ</button>
        <button data-cancel-form class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface-2)] text-[var(--muted)]">ยกเลิก</button>
      </div>
    </div>` : ''}
    ${openWork ? `
    <div class="mt-3 rounded-xl p-3 bg-[var(--surface-2)]">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ลิงก์ไฟล์งานแก้</label>
      <input data-file-input class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs mb-2" placeholder="วางลิงก์ไฟล์" value="${escHtml(f.fileUrl)}">
      <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">กำหนดส่งงาน</label>
      <input data-due-input class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-xs" placeholder="เช่น 20 ก.พ. 2569" value="${escHtml(f.dueText)}">
      <div class="flex gap-2 mt-2">
        <button data-confirm-assign="${x.id}" class="flex-1 py-2 rounded-xl text-white text-xs font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">ยืนยันมอบหมายงาน</button>
        <button data-cancel-form class="px-4 py-2 rounded-xl text-xs font-bold bg-[var(--surface-2)] text-[var(--muted)]">ยกเลิก</button>
      </div>
    </div>` : ''}
  </div>`
}

async function handleAssign(btn) {
  const id = Number(btn.dataset.confirmAssign)
  const f = teacher.form
  if (!f.dueText.trim()) { showToast('กรุณากรอกวันที่/เวลาก่อนยืนยัน', 'warning'); return }
  const x = teacher.subjects.find(r => r.id === id)
  const msg = f.method === 'นัดสอบปรับ'
    ? `นัดสอบปรับวิชา "${x.subject_name}" ให้ ${x.students?.full_name || ''} วันที่ ${f.dueText.trim()} ใช่หรือไม่?`
    : `มอบหมายงานแก้วิชา "${x.subject_name}" ให้ ${x.students?.full_name || ''} กำหนดส่ง ${f.dueText.trim()} ใช่หรือไม่?`
  const ok = await showRegradeConfirm({ title: f.method === 'นัดสอบปรับ' ? 'ยืนยันนัดสอบปรับ' : 'ยืนยันมอบหมายงานแก้', message: msg, confirmText: 'ยืนยัน' })
  if (!ok) return
  try {
    await assignWork(id, { method: f.method, dueText: f.dueText.trim(), fileUrl: f.fileUrl.trim() || null })
    showToast('บันทึกการมอบหมายเรียบร้อย ✅', 'success')
    teacher.form = null
    renderTeacher()
  } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + err.message, 'error') }
}

// ============================================================================
// ฝ่ายทะเบียน
// ============================================================================
const registrar = { view: 'close', query: '', gradeCategory: 'สามัญ' }

async function renderRegistrar() {
  setHeaderTitle('ฝ่ายทะเบียน', 'แก้ค้างเก่า — ฝ่ายทะเบียน')
  const content = document.getElementById('regrade-content')
  content.innerHTML = `<div class="max-w-3xl mx-auto p-4">
    <div class="${TAB_TRACK_CLASS} mb-4">
      <button data-rview="close" style="${tab(registrar.view === 'close')}">📋 รอปิดงาน</button>
      <button data-rview="grade" style="${tab(registrar.view === 'grade')}">🎓 เกรดที่ต้องอัปเดต</button>
    </div>
    <div id="regrade-registrar-body"></div>
  </div>`
  content.querySelectorAll('[data-rview]').forEach(btn => btn.addEventListener('click', () => { registrar.view = btn.dataset.rview; renderRegistrar() }))

  const body = document.getElementById('regrade-registrar-body')
  if (registrar.view === 'close') {
    body.innerHTML = `<input id="regrade-registrar-search" class="w-full max-w-sm px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-4" placeholder="ค้นหาชื่อหรือเลขประจำตัวนักเรียน...">
      <div id="regrade-close-list" class="flex flex-col gap-3"></div>`
    const search = document.getElementById('regrade-registrar-search')
    search.value = registrar.query
    search.addEventListener('input', () => { registrar.query = search.value; renderCloseList() })
    await renderCloseList()
  } else {
    body.innerHTML = `<div class="flex gap-2 mb-4">
        <button data-gcat="สามัญ" style="${pill(registrar.gradeCategory === 'สามัญ')}">สามัญ</button>
        <button data-gcat="ศาสนา" style="${pill(registrar.gradeCategory === 'ศาสนา', 'secondary')}">ศาสนา</button>
      </div>
      <div class="overflow-x-auto"><table class="w-full text-xs" id="regrade-grade-table"></table></div>`
    body.querySelectorAll('[data-gcat]').forEach(btn => btn.addEventListener('click', () => { registrar.gradeCategory = btn.dataset.gcat; renderRegistrar() }))
    await renderGradeTable()
  }
}

async function renderCloseList() {
  const list = document.getElementById('regrade-close-list')
  let rows
  try { rows = await getPendingCloseOut(registrar.query) } catch (err) {
    list.innerHTML = `<div class="text-center text-red-500 text-sm py-8">โหลดไม่สำเร็จ: ${escHtml(err.message)}</div>`
    return
  }
  list.innerHTML = rows.length ? rows.map(x => {
    const name = x.students?.full_name || '-'
    return `
    <div class="rg-card p-4 flex justify-between items-center gap-3 flex-wrap">
      <div class="flex gap-2.5 items-center min-w-0">
        ${personAvatarHtml(x.students, true)}
        <div class="min-w-0">
          <p class="font-bold text-sm text-[var(--ink)]">${escHtml(name)} <span class="text-[var(--muted-2)] font-normal">(${escHtml(x.students?.student_code || '')} · ${escHtml(x.students?.main_room || '')})</span></p>
          <p class="text-xs text-[var(--muted)] mt-0.5">${escHtml(x.subject_name)} (${escHtml(x.subject_code)}) · ${escHtml(x.method || '')} — กำหนด ${escHtml(x.due_text || '-')}</p>
          <span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${categoryChipStyle(x.category)}">${escHtml(x.category)}</span>
        </div>
      </div>
      <button data-closeout="${x.id}" data-name="${escHtml(name)}" data-subject="${escHtml(x.subject_name)}"
        class="px-4 py-2 rounded-xl text-white text-xs font-bold flex-shrink-0" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">✓ ปิดงาน (ปรับแก้สำเร็จ)</button>
    </div>`
  }).join('') : `<div class="text-center text-[var(--muted-2)] text-sm py-12">📭 ไม่พบรายการที่รอปิดงาน</div>`

  list.querySelectorAll('[data-closeout]').forEach(btn => btn.addEventListener('click', async () => {
    const id = Number(btn.dataset.closeout)
    const ok = await showRegradeConfirm({
      title: 'ยืนยันปิดงาน',
      message: `ยืนยันบันทึกว่า ${btn.dataset.name} ปรับแก้วิชา "${btn.dataset.subject}" สำเร็จแล้วใช่หรือไม่? สถานะจะเปลี่ยนเป็น "ปรับแก้สำเร็จ" ทันที`,
      confirmText: 'ยืนยันปิดงาน',
    })
    if (!ok) return
    try { await closeOutSubject(id); showToast('ปิดงานเรียบร้อย ✅', 'success'); await renderCloseList() }
    catch (err) { showToast('ไม่สำเร็จ: ' + err.message, 'error') }
  }))
}

async function renderGradeTable() {
  const table = document.getElementById('regrade-grade-table')
  let rows
  try { rows = await getGradeTrackingRows(registrar.gradeCategory) } catch (err) {
    table.innerHTML = `<tr><td class="text-red-500 text-sm py-8 text-center">โหลดไม่สำเร็จ: ${escHtml(err.message)}</td></tr>`
    return
  }
  table.innerHTML = `
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">รายวิชา</th><th class="py-2 px-2">ครูผู้สอน</th><th class="py-2 px-2">สถานะเกรด</th><th class="py-2 px-2 text-right">จัดการ</th>
    </tr></thead>
    <tbody>${rows.length ? rows.map(x => {
      const name = x.students?.full_name || '-'
      return `<tr class="border-b border-[var(--line-soft)]">
        <td class="py-2 px-2"><div class="flex items-center gap-2">${personAvatarHtml(x.students, true)}<div><p class="font-bold text-[var(--ink)]">${escHtml(name)}</p><p class="text-[10px] text-[var(--muted-2)]">(${escHtml(x.students?.student_code || '')})</p></div></div></td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${escHtml(x.subject_name)} (${escHtml(x.subject_code)})</td>
        <td class="py-2 px-2 text-[var(--ink-2)]">${escHtml(x.teachers?.full_name || '-')}</td>
        <td class="py-2 px-2">${x.grade_entered
          ? `<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok);border:1px solid var(--ok-soft-line)">อัปเดตแล้ว ✓</span>`
          : `<span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink);border:1px solid var(--gold-soft-line)">รอกรอกเกรด</span>`}</td>
        <td class="py-2 px-2 text-right">${x.grade_entered ? '' : `<button data-mark-entered="${x.id}" data-name="${escHtml(name)}" data-subject="${escHtml(x.subject_name)}" class="px-3 py-1.5 rounded-lg text-white text-[11px] font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">กรอกข้อมูลแล้ว</button>`}</td>
      </tr>`
    }).join('') : `<tr><td colspan="5" class="text-center text-[var(--muted-2)] text-sm py-10">ไม่มีรายการในหมวดนี้</td></tr>`}</tbody>`

  table.querySelectorAll('[data-mark-entered]').forEach(btn => btn.addEventListener('click', async () => {
    const id = Number(btn.dataset.markEntered)
    const ok = await showRegradeConfirm({
      title: 'ยืนยันกรอกข้อมูลเกรดแล้ว',
      message: `ยืนยันว่าได้นำเกรดของ ${btn.dataset.name} วิชา "${btn.dataset.subject}" ไปกรอกในระบบเกรด (แยกต่างหาก) เรียบร้อยแล้วใช่หรือไม่?`,
      confirmText: 'ยืนยัน',
    })
    if (!ok) return
    try { await markGradeEntered(id); showToast('บันทึกแล้ว ✅', 'success'); await renderGradeTable() }
    catch (err) { showToast('ไม่สำเร็จ: ' + err.message, 'error') }
  }))
}

// ============================================================================
// บอร์ดผู้บริหาร
// ============================================================================
const dashboard = {
  categoryTab: 'all', drilldown: null,
  view: 'overview', overviewTab: 'summary',
  teacherSort: { key: 'pending', dir: 'desc' },
  classLevels: null,
  attnLevelKey: '', attnRoom: '', attnRooms: [],
  browseCategory: 'สามัญ', browseLevel: '', browseRoomsCache: [],
  expandedRooms: new Set(), roomStudents: {},
  expandedStudents: new Set(), studentSubjects: {},
}

const sumCnt = (list) => list.reduce((s, r) => s + Number(r.cnt), 0)

function sortRowsBy(rows, sort) {
  const dir = sort.dir === 'asc' ? 1 : -1
  return [...rows].sort((a, b) => {
    const av = a[sort.key], bv = b[sort.key]
    if (typeof av === 'string') return av.localeCompare(bv, 'th') * dir
    return (av - bv) * dir
  })
}
function sortArrow(sort, key) { return sort.key === key ? (sort.dir === 'asc' ? ' ▲' : ' ▼') : '' }

async function ensureClassLevels() {
  if (!dashboard.classLevels) dashboard.classLevels = await getRegradeDistinctClassLevels()
  return dashboard.classLevels
}

async function renderDashboard() {
  setHeaderTitle('ผู้บริหาร', 'ภาพรวมทั้งโรงเรียน — บอร์ดผู้บริหาร')
  const content = document.getElementById('regrade-content')
  content.innerHTML = `
    <div class="w-full p-4 md:p-6">
      <div class="${TAB_TRACK_CLASS} mb-4">
        <button data-dview="overview" style="${tab(dashboard.view === 'overview')}">📊 ภาพรวม</button>
        <button data-dview="students" style="${tab(dashboard.view === 'students')}">🎓 รายชื่อนักเรียน</button>
      </div>
      <div id="regrade-dashboard-body"></div>
    </div>`
  content.querySelectorAll('[data-dview]').forEach(btn => btn.addEventListener('click', () => { dashboard.view = btn.dataset.dview; renderDashboard() }))
  const body = document.getElementById('regrade-dashboard-body')
  if (dashboard.view === 'students') await renderDashboardStudentBrowse(body)
  else await renderDashboardOverview(body)
}

async function renderDashboardOverview(content) {
  let rows
  try { rows = await getAllRegradeSubjectsForDashboard() } catch (err) {
    content.innerHTML = `<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${escHtml(err.message)}</div>`
    return
  }
  const scoped = dashboard.categoryTab === 'all' ? rows : rows.filter(r => r.category === dashboard.categoryTab)
  const total = sumCnt(scoped)
  const notYet = sumCnt(scoped.filter(r => r.status === 'ยังไม่แจ้ง'))
  const onlyReq = sumCnt(scoped.filter(r => r.status === 'จำนงแล้ว'))
  const assigned = sumCnt(scoped.filter(r => r.status === 'กำลังดำเนินการปรับแก้'))
  const done = sumCnt(scoped.filter(r => r.status === 'ปรับแก้สำเร็จ'))
  const requested = onlyReq + assigned

  const teacherGroups = {}
  scoped.forEach(r => { (teacherGroups[r.teacher_name] ??= { dept: r.teacher_dept || '-', list: [] }).list.push(r) })
  const teacherRows = sortRowsBy(Object.entries(teacherGroups).map(([name, g]) => ({
    name,
    dept: g.dept,
    total: sumCnt(g.list),
    pending: sumCnt(g.list.filter(x => x.status === 'จำนงแล้ว')),
    assigned: sumCnt(g.list.filter(x => x.status === 'กำลังดำเนินการปรับแก้')),
    done: sumCnt(g.list.filter(x => x.status === 'ปรับแก้สำเร็จ')),
  })), dashboard.teacherSort)

  const genTotal = sumCnt(rows.filter(r => r.category === 'สามัญ'))
  const relTotal = sumCnt(rows.filter(r => r.category === 'ศาสนา'))

  const subTabsHtml = `
    <div class="${TAB_TRACK_CLASS}">
      <button data-otab="summary" style="${tab(dashboard.overviewTab === 'summary')}">📊 สรุปตัวเลข</button>
      <button data-otab="teachers" style="${tab(dashboard.overviewTab === 'teachers')}">👩‍🏫 รายครูผู้สอน</button>
      <button data-otab="attention" style="${tab(dashboard.overviewTab === 'attention')}">🎯 นักเรียนที่ต้องติดตาม</button>
    </div>`
  const categoryTabsHtml = `
    <div class="${TAB_TRACK_CLASS}">
      <button data-dcat="all" style="${tab(dashboard.categoryTab === 'all')}">📊 ทั้งหมด (${rows.length})</button>
      <button data-dcat="สามัญ" style="${tab(dashboard.categoryTab === 'สามัญ')}">📘 สามัญ (${genTotal})</button>
      <button data-dcat="ศาสนา" style="${tab(dashboard.categoryTab === 'ศาสนา', 'secondary')}">🕌 ศาสนา (${relTotal})</button>
    </div>`
  const headerRowHtml = `
    <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
      ${subTabsHtml}
      ${dashboard.overviewTab !== 'attention' ? categoryTabsHtml : ''}
    </div>`

  let sectionHtml = ''
  if (dashboard.overviewTab === 'teachers') {
    const th = (label, key, align = '') => `<th class="py-2 px-2 cursor-pointer select-none hover:text-[var(--ink-2)] ${align}" data-sort-key="${key}">${escHtml(label)}${sortArrow(dashboard.teacherSort, key)}</th>`
    sectionHtml = `
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">ความคืบหน้าแยกรายครูผู้สอน</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">คลิกหัวคอลัมน์เพื่อเรียงจากมาก↔น้อย หรือ ก↔ฮ</p>
        <div class="overflow-x-auto"><table class="w-full text-xs">
          <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
            ${th('ครูผู้สอน', 'name')}${th('กลุ่มสาระ', 'dept')}${th('ทั้งหมด', 'total', 'text-center')}${th('รอตอบรับ', 'pending', 'text-center')}${th('มอบหมายแล้ว', 'assigned', 'text-center')}${th('สำเร็จ', 'done', 'text-center')}
          </tr></thead>
          <tbody>${teacherRows.map(t => `<tr class="border-b border-[var(--line-soft)]">
            <td class="py-2 px-2 font-bold text-[var(--ink-2)]">${escHtml(t.name)}</td>
            <td class="py-2 px-2 text-[var(--muted)]">${escHtml(t.dept)}</td>
            <td class="py-2 px-2 text-center text-[var(--muted)]">${t.total}</td>
            <td class="py-2 px-2 text-center">${t.pending > 0 ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">${t.pending}</span>` : t.pending}</td>
            <td class="py-2 px-2 text-center" style="color:var(--info)">${t.assigned}</td>
            <td class="py-2 px-2 text-center" style="color:var(--ok)">${t.done}</td>
          </tr>`).join('')}</tbody>
        </table></div>
      </div>`
  } else if (dashboard.overviewTab === 'attention') {
    let classLevels
    try { classLevels = await ensureClassLevels() } catch { classLevels = [] }
    const attnLevelOptHtml = () => `<option value="">ทุกระดับชั้น</option>` +
      ['สามัญ', 'ศาสนา'].map(cat => {
        const levels = classLevels.filter(l => l.category === cat)
        if (!levels.length) return ''
        return `<optgroup label="${cat}">${levels.map(l => `<option value="${cat}|${escHtml(l.class_level)}" ${dashboard.attnLevelKey === `${cat}|${l.class_level}` ? 'selected' : ''}>${escHtml(l.class_level)}</option>`).join('')}</optgroup>`
      }).join('')
    sectionHtml = `
      <div class="rg-card p-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1">นักเรียนที่จำเป็นต้องติดตาม</p>
        <p class="text-[10px] text-[var(--muted-2)] mb-3">เรียงจากคนที่มีรายวิชาค้างมากที่สุดก่อน (สูงสุด 20 คน)</p>
        <div class="flex gap-2 mb-3 flex-wrap">
          <select id="regrade-attn-level" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]">${attnLevelOptHtml()}</select>
          <select id="regrade-attn-room" class="px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs bg-[var(--surface)]" ${dashboard.attnLevelKey ? '' : 'disabled'}>
            <option value="">ทุกห้อง</option>
            ${dashboard.attnRooms.map(r => `<option value="${escHtml(r)}" ${dashboard.attnRoom === r ? 'selected' : ''}>${escHtml(r)}</option>`).join('')}
          </select>
        </div>
        <div id="regrade-attn-list" class="overflow-x-auto"></div>
      </div>`
  } else {
    const donePercent = total ? Math.round(done / total * 100) : 0
    sectionHtml = `
      <div class="rg-card p-4 mb-4">
        <p class="text-xs font-bold text-[var(--ink-2)] mb-3">สัดส่วนสถานะ</p>
        ${total ? donutChartHtml([
          { value: notYet, color: '#9ca3af', label: 'ยังไม่แจ้ง' },
          { value: onlyReq, color: 'var(--gold-ink)', label: 'จำนงแล้ว' },
          { value: assigned, color: 'var(--info)', label: 'กำลังดำเนินการ' },
          { value: done, color: 'var(--ok)', label: 'สำเร็จแล้ว' },
        ], `${donePercent}%`, 'สำเร็จแล้ว') : `<p class="text-center text-xs text-[var(--muted-2)] py-4">ยังไม่มีข้อมูล</p>`}
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button data-drill="all" class="rg-card p-4 text-center">${statNum(total, 'รายวิชาค้างทั้งหมด', 'var(--ink)')}</button>
        <button data-drill="requested" class="rg-card p-4 text-center">${statNum(requested, 'จำนงแล้ว', 'var(--gold-ink)')}</button>
        <button data-drill="assigned" class="rg-card p-4 text-center">${statNum(assigned, 'กำลังดำเนินการปรับแก้', 'var(--info)')}</button>
        <button data-drill="done" class="rg-card p-4 text-center">${statNum(done, 'ปรับแก้สำเร็จ', 'var(--ok)')}</button>
      </div>
      <div id="regrade-drilldown"></div>`
  }

  content.innerHTML = headerRowHtml + sectionHtml

  content.querySelectorAll('[data-otab]').forEach(btn => btn.addEventListener('click', () => { dashboard.overviewTab = btn.dataset.otab; renderDashboardOverview(content) }))
  content.querySelectorAll('[data-sort-key]').forEach(th => th.addEventListener('click', () => {
    const key = th.dataset.sortKey
    if (dashboard.teacherSort.key === key) dashboard.teacherSort.dir = dashboard.teacherSort.dir === 'asc' ? 'desc' : 'asc'
    else { dashboard.teacherSort.key = key; dashboard.teacherSort.dir = (key === 'name' || key === 'dept') ? 'asc' : 'desc' }
    renderDashboardOverview(content)
  }))
  content.querySelectorAll('[data-dcat]').forEach(btn => btn.addEventListener('click', () => { dashboard.categoryTab = btn.dataset.dcat; dashboard.drilldown = null; renderDashboard() }))

  if (dashboard.overviewTab === 'summary') {
    content.querySelectorAll('[data-drill]').forEach(btn => btn.addEventListener('click', () => { dashboard.drilldown = btn.dataset.drill; renderDashboardDrilldown(scoped) }))
    if (dashboard.drilldown) renderDashboardDrilldown(scoped)
  }

  if (dashboard.overviewTab === 'attention') {
    document.getElementById('regrade-attn-level').addEventListener('change', async (e) => {
      dashboard.attnLevelKey = e.target.value
      dashboard.attnRoom = ''
      dashboard.attnRooms = []
      if (dashboard.attnLevelKey) {
        const [cat, level] = dashboard.attnLevelKey.split('|')
        try { dashboard.attnRooms = (await getClassroomSummary(cat, level)).map(r => r.room) } catch { dashboard.attnRooms = [] }
      }
      renderDashboardOverview(content)
    })
    document.getElementById('regrade-attn-room').addEventListener('change', (e) => { dashboard.attnRoom = e.target.value; renderAttentionTable() })
    renderAttentionTable()
  }
}

async function renderAttentionTable() {
  const el = document.getElementById('regrade-attn-list')
  if (!el) return
  el.innerHTML = `<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>`
  const [cat, level] = dashboard.attnLevelKey ? dashboard.attnLevelKey.split('|') : [null, null]
  let rows
  try {
    rows = await getTopStudentsNeedingAttention({ category: cat, classLevel: level, room: dashboard.attnRoom || null, limit: 20 })
  } catch (err) {
    el.innerHTML = `<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${escHtml(err.message)}</p>`
    return
  }
  if (!rows.length) { el.innerHTML = `<p class="text-xs text-[var(--muted-2)] py-8 text-center">ไม่มีนักเรียนที่ต้องติดตามในเงื่อนไขนี้ 🎉</p>`; return }
  el.innerHTML = `<table class="w-full text-xs">
    <thead><tr class="border-b-2 border-[var(--line)] text-left text-[var(--muted-2)]">
      <th class="py-2 px-2">นักเรียน</th><th class="py-2 px-2">ห้อง</th>
      <th class="py-2 px-2 text-center">ค้าง</th><th class="py-2 px-2 text-center">จำนงแล้ว</th><th class="py-2 px-2 text-center">สำเร็จ</th>
    </tr></thead>
    <tbody>${rows.map(r => `<tr class="border-b border-[var(--line-soft)]">
      <td class="py-2 px-2"><div class="flex items-center gap-2">${personAvatarHtml(r, false)}<div><p class="font-bold text-[var(--ink)]">${escHtml(r.full_name)}</p><p class="text-[10px] text-[var(--muted-2)]">${escHtml(r.student_code || '')}</p></div></div></td>
      <td class="py-2 px-2 text-[var(--muted)]">${escHtml((r.category === 'ศาสนา' ? r.religion_room : r.main_room) || '-')}</td>
      <td class="py-2 px-2 text-center font-bold" style="color:var(--bad)">${r.not_yet}</td>
      <td class="py-2 px-2 text-center" style="color:var(--gold-ink)">${r.requested}</td>
      <td class="py-2 px-2 text-center" style="color:var(--ok)">${r.done}</td>
    </tr>`).join('')}</tbody>
  </table>`
}

function statNum(v, label, color) { return `<p class="text-2xl font-extrabold" style="color:${color}">${v}</p><p class="text-[10px] text-[var(--muted-2)] mt-1">${escHtml(label)}</p>` }

// ============================================================================
// ผู้บริหาร — เจาะลึกรายชื่อนักเรียน: ระดับชั้น -> ห้อง -> นักเรียน -> รายวิชา
// ============================================================================
async function renderDashboardStudentBrowse(content) {
  let classLevels
  try { classLevels = await ensureClassLevels() } catch { classLevels = [] }
  const levels = classLevels.filter(l => l.category === dashboard.browseCategory)

  content.innerHTML = `
    <div class="flex gap-2 mb-4">
      <button data-bcat="สามัญ" style="${pill(dashboard.browseCategory === 'สามัญ')}">📘 สามัญ</button>
      <button data-bcat="ศาสนา" style="${pill(dashboard.browseCategory === 'ศาสนา', 'secondary')}">🕌 ศาสนา</button>
    </div>
    <select id="regrade-browse-level" class="w-full max-w-xs px-3 py-2 rounded-lg border border-[var(--line)] text-sm bg-[var(--surface)] mb-4">
      <option value="">— เลือกระดับชั้น —</option>
      ${levels.map(l => `<option value="${escHtml(l.class_level)}" ${dashboard.browseLevel === l.class_level ? 'selected' : ''}>${escHtml(l.class_level)}</option>`).join('')}
    </select>
    <div id="regrade-browse-rooms" class="flex flex-col gap-3"></div>`

  content.querySelectorAll('[data-bcat]').forEach(btn => btn.addEventListener('click', () => {
    dashboard.browseCategory = btn.dataset.bcat
    dashboard.browseLevel = ''
    dashboard.browseRoomsCache = []
    dashboard.expandedRooms.clear(); dashboard.roomStudents = {}
    dashboard.expandedStudents.clear(); dashboard.studentSubjects = {}
    renderDashboardStudentBrowse(content)
  }))
  document.getElementById('regrade-browse-level').addEventListener('change', (e) => {
    dashboard.browseLevel = e.target.value
    dashboard.expandedRooms.clear(); dashboard.roomStudents = {}
    dashboard.expandedStudents.clear(); dashboard.studentSubjects = {}
    loadAndRenderBrowseRooms()
  })
  loadAndRenderBrowseRooms()
}

async function loadAndRenderBrowseRooms() {
  const el = document.getElementById('regrade-browse-rooms')
  if (!el) return
  if (!dashboard.browseLevel) {
    dashboard.browseRoomsCache = []
    el.innerHTML = `<div class="text-center py-12 text-[var(--muted-2)] text-sm">เลือกระดับชั้นเพื่อดูรายชื่อห้องเรียน</div>`
    return
  }
  el.innerHTML = `<p class="text-xs text-[var(--muted-2)] py-4 text-center">กำลังโหลด...</p>`
  try {
    dashboard.browseRoomsCache = await getClassroomSummary(dashboard.browseCategory, dashboard.browseLevel)
  } catch (err) {
    el.innerHTML = `<p class="text-xs text-red-500 py-4 text-center">โหลดไม่สำเร็จ: ${escHtml(err.message)}</p>`
    return
  }
  renderBrowseRoomsList()
}

function renderBrowseRoomsList() {
  const el = document.getElementById('regrade-browse-rooms')
  if (!el) return
  el.innerHTML = dashboard.browseRoomsCache.length
    ? dashboard.browseRoomsCache.map(r => classroomCard(r)).join('')
    : `<div class="text-center py-12 text-[var(--muted-2)] text-sm">ไม่พบห้องเรียนที่มีวิชาค้างในระดับชั้นนี้ 🎉</div>`
  wireBrowseHandlers(el)
}

function classroomCard(r) {
  const isOpen = dashboard.expandedRooms.has(r.room)
  const students = dashboard.roomStudents[r.room]
  return `
  <div class="rg-card p-4">
    <div class="flex justify-between items-start gap-2">
      <div class="min-w-0">
        <p class="font-bold text-sm text-[var(--ink)]">${escHtml(r.room)}</p>
        <p class="text-[10px] text-[var(--muted-2)] mt-0.5">${r.student_count} คนมีวิชาค้าง</p>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0 flex-wrap justify-end">
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--bad-soft);color:var(--bad)">ค้าง ${r.not_yet}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--gold-soft);color:var(--gold-ink)">จำนง ${r.requested}</span>
        <span class="px-2 py-1 rounded-full text-[10px] font-bold" style="background:var(--ok-soft);color:var(--ok)">สำเร็จ ${r.done}</span>
      </div>
    </div>
    <div class="flex gap-2 mt-3">
      <button data-toggle-room="${escHtml(r.room)}" class="flex-1 py-1.5 rounded-lg text-[10px] font-bold bg-[var(--surface-2)] text-[var(--muted)]">${isOpen ? '▲ ย่อ' : '▾ ดูรายชื่อนักเรียน'}</button>
      <button data-print-room="${escHtml(r.room)}" class="px-3 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายชื่อห้อง</button>
    </div>
    ${isOpen ? `<div class="mt-3 pt-3 border-t border-dashed border-[var(--line-soft)] flex flex-col gap-2">
      ${students ? (students.length ? students.map(s => studentBrowseRow(s)).join('') : `<p class="text-center text-xs text-[var(--muted-2)] py-4">ไม่มีข้อมูลนักเรียน</p>`) : `<p class="text-center text-xs text-[var(--muted-2)] py-4">กำลังโหลด...</p>`}
    </div>` : ''}
  </div>`
}

function studentBrowseRow(s) {
  const isOpen = dashboard.expandedStudents.has(s.student_id)
  const subjects = dashboard.studentSubjects[s.student_id]
  return `
  <div class="rounded-xl bg-[var(--surface-2)] overflow-hidden">
    <button data-toggle-student="${s.student_id}" class="w-full flex items-center gap-2.5 p-2.5 text-left">
      ${personAvatarHtml(s, false)}
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-[var(--ink)] truncate">${escHtml(s.full_name)}</p>
        <p class="text-[10px] text-[var(--muted-2)]">${escHtml(s.student_code || '')}</p>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0 text-[10px] font-bold">
        <span style="color:var(--bad)">${s.not_yet}</span>/<span style="color:var(--gold-ink)">${s.requested}</span>/<span style="color:var(--ok)">${s.done}</span>
      </div>
    </button>
    ${isOpen ? `<div class="px-2.5 pb-2.5 flex flex-col gap-1.5">
      ${subjects ? (subjects.length ? subjects.map(x => `
      <div class="flex justify-between items-center gap-2 bg-[var(--surface)] rounded-lg px-2.5 py-1.5">
        <div class="min-w-0"><p class="text-[11px] font-bold text-[var(--ink)] truncate">${escHtml(x.subject_name)}</p><p class="text-[9px] text-[var(--muted-2)]">${escHtml(x.subject_code)} · ${escHtml(x.semester)} · ${escHtml(x.teacher_name)}</p></div>
        <span class="flex-shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold" style="${badgeStyle(x.status)}">${statusMeta(x.status).label}</span>
      </div>`).join('') : `<p class="text-center text-[11px] text-[var(--muted-2)] py-2">ไม่มีรายวิชา</p>`)
        : `<p class="text-center text-[11px] text-[var(--muted-2)] py-2">กำลังโหลด...</p>`}
      <button data-print-student="${s.student_id}" class="mt-1 py-1.5 rounded-lg text-[10px] font-bold" style="background:var(--primary-soft);color:var(--primary-dark)">🖨 พิมพ์รายบุคคล</button>
    </div>` : ''}
  </div>`
}

function wireBrowseHandlers(el) {
  el.querySelectorAll('[data-toggle-room]').forEach(btn => btn.addEventListener('click', async () => {
    const room = btn.dataset.toggleRoom
    if (dashboard.expandedRooms.has(room)) {
      dashboard.expandedRooms.delete(room)
      renderBrowseRoomsList()
    } else {
      dashboard.expandedRooms.add(room)
      renderBrowseRoomsList()
      if (!dashboard.roomStudents[room]) {
        try { dashboard.roomStudents[room] = await getClassroomStudents(dashboard.browseCategory, room) } catch { dashboard.roomStudents[room] = [] }
        renderBrowseRoomsList()
      }
    }
  }))
  el.querySelectorAll('[data-toggle-student]').forEach(btn => btn.addEventListener('click', async () => {
    const id = Number(btn.dataset.toggleStudent)
    if (dashboard.expandedStudents.has(id)) {
      dashboard.expandedStudents.delete(id)
      renderBrowseRoomsList()
    } else {
      dashboard.expandedStudents.add(id)
      renderBrowseRoomsList()
      if (!dashboard.studentSubjects[id]) {
        try { dashboard.studentSubjects[id] = await getStudentSubjectsForExec(id) } catch { dashboard.studentSubjects[id] = [] }
        renderBrowseRoomsList()
      }
    }
  }))
  el.querySelectorAll('[data-print-room]').forEach(btn => btn.addEventListener('click', () => printClassroomRoster(btn.dataset.printRoom)))
  el.querySelectorAll('[data-print-student]').forEach(btn => btn.addEventListener('click', () => printStudentReport(Number(btn.dataset.printStudent))))
}

const PRINT_STYLE = `
  body{font-family:'Sarabun',sans-serif;padding:24px;color:#1f2937;}
  h1{font-size:18px;margin-bottom:4px;}
  p.sub{color:#666;font-size:12px;margin-bottom:16px;}
  table{width:100%;border-collapse:collapse;font-size:13px;}
  th,td{border:1px solid #ccc;padding:6px 8px;text-align:left;}
  th{background:#f3f4f6;}
  @media print { body{padding:0;} }`

function openPrintWindow(title, bodyHtml) {
  const win = window.open('', '_blank')
  if (!win) { showToast('เบราว์เซอร์บล็อกป๊อปอัพ กรุณาอนุญาตแล้วลองใหม่', 'warning'); return }
  win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${escHtml(title)}</title><style>${PRINT_STYLE}</style></head><body>${bodyHtml}</body></html>`)
  win.document.close()
  win.focus()
  win.print()
}

async function printClassroomRoster(room) {
  let students = dashboard.roomStudents[room]
  if (!students) {
    try { students = await getClassroomStudents(dashboard.browseCategory, room) } catch (err) { showToast('โหลดข้อมูลไม่สำเร็จ: ' + err.message, 'error'); return }
  }
  const rowsHtml = students.map((s, i) => `<tr>
    <td>${i + 1}</td><td>${escHtml(s.full_name)}</td><td>${escHtml(s.student_code || '')}</td>
    <td style="text-align:center">${s.not_yet}</td><td style="text-align:center">${s.requested}</td><td style="text-align:center">${s.done}</td>
  </tr>`).join('')
  openPrintWindow(`รายชื่อห้อง ${room}`, `
    <h1>รายชื่อนักเรียนที่มีวิชาค้าง — ห้อง ${escHtml(room)}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString('th-TH')} · ทั้งหมด ${students.length} คน</p>
    <table><thead><tr><th>#</th><th>ชื่อ-สกุล</th><th>เลขประจำตัว</th><th>ค้าง</th><th>จำนงแล้ว</th><th>สำเร็จ</th></tr></thead>
    <tbody>${rowsHtml}</tbody></table>`)
}

async function printStudentReport(studentId) {
  let subjects = dashboard.studentSubjects[studentId]
  let student = null
  for (const room in dashboard.roomStudents) {
    const found = dashboard.roomStudents[room]?.find(s => s.student_id === studentId)
    if (found) { student = found; break }
  }
  if (!subjects) {
    try { subjects = await getStudentSubjectsForExec(studentId) } catch (err) { showToast('โหลดข้อมูลไม่สำเร็จ: ' + err.message, 'error'); return }
  }
  const rowsHtml = subjects.map((x, i) => `<tr>
    <td>${i + 1}</td><td>${escHtml(x.subject_name)}</td><td>${escHtml(x.subject_code)}</td>
    <td>${escHtml(x.category)}</td><td>${escHtml(x.semester)}</td><td>${escHtml(x.teacher_name)}</td><td>${escHtml(statusMeta(x.status).label)}</td>
  </tr>`).join('')
  const name = student?.full_name || '-'
  openPrintWindow(`รายวิชาค้าง ${name}`, `
    <h1>รายวิชาที่ค้างของ ${escHtml(name)}${student?.student_code ? ` (${escHtml(student.student_code)})` : ''}</h1>
    <p class="sub">พิมพ์เมื่อ ${new Date().toLocaleString('th-TH')} · ทั้งหมด ${subjects.length} วิชา</p>
    <table><thead><tr><th>#</th><th>รายวิชา</th><th>รหัสวิชา</th><th>หมวด</th><th>ภาคเรียน</th><th>ครูผู้สอน</th><th>สถานะ</th></tr></thead>
    <tbody>${rowsHtml}</tbody></table>`)
}

function renderDashboardDrilldown(scoped) {
  const el = document.getElementById('regrade-drilldown')
  if (!dashboard.drilldown) { el.innerHTML = ''; return }
  const titles = { all: 'รายวิชาค้างทั้งหมด', requested: 'จำนงแล้ว', assigned: 'กำลังดำเนินการปรับแก้', done: 'ปรับแก้สำเร็จ' }
  let rows = []
  if (dashboard.drilldown === 'all') rows = scoped
  else if (dashboard.drilldown === 'requested') rows = scoped.filter(x => x.status === 'จำนงแล้ว' || x.status === 'กำลังดำเนินการปรับแก้')
  else if (dashboard.drilldown === 'assigned') rows = scoped.filter(x => x.status === 'กำลังดำเนินการปรับแก้')
  else if (dashboard.drilldown === 'done') rows = scoped.filter(x => x.status === 'ปรับแก้สำเร็จ')

  const byClass = rows.reduce((acc, r) => ((acc[r.class_level || '-'] = (acc[r.class_level || '-'] || 0) + Number(r.cnt)), acc), {})
  el.innerHTML = `<div class="rg-card p-4 mb-4">
    <div class="flex justify-between items-center mb-3">
      <p class="text-xs font-bold text-[var(--ink-2)]">รายละเอียด: ${escHtml(titles[dashboard.drilldown])}</p>
      <button id="regrade-drill-close" class="w-6 h-6 rounded-full bg-[var(--surface-2)] text-[var(--muted)] text-xs">✕</button>
    </div>
    <p class="text-xs text-[var(--muted-2)]">${sumCnt(rows)} รายการ</p>
    <p class="text-[11px] text-[var(--muted)] mt-2">แยกตามชั้น: ${Object.entries(byClass).map(([k, v]) => `${escHtml(k)} (${v})`).join(', ') || '-'}</p>
  </div>`
  document.getElementById('regrade-drill-close').addEventListener('click', () => { dashboard.drilldown = null; el.innerHTML = '' })
}

// ============================================================================
// ตั้งค่าระบบ
// ============================================================================
const settingsUi = { activeTab: 'general' }

function settingsTabBtnHtml(key, label, active) {
  return `<button type="button" data-settings-tab="${key}" class="flex-shrink-0" style="${tab(active)}">${escHtml(label)}</button>`
}

function levelChipHtml(key, label, selected) {
  return `<button type="button" data-level-chip="${escHtml(key)}" data-on="${selected ? '1' : '0'}" class="px-2.5 py-1 rounded-full text-[11px] font-bold" style="${selected ? 'background:var(--primary);color:#fff;' : 'background:var(--surface-2);color:var(--muted)'}">${escHtml(label)}</button>`
}

function showSettingsTab(content, key) {
  settingsUi.activeTab = key
  content.querySelectorAll('[data-settings-group]').forEach(el => el.classList.toggle('hidden', el.dataset.settingsGroup !== key))
  content.querySelectorAll('[data-settings-tab]').forEach(btn => {
    btn.style.cssText = tab(btn.dataset.settingsTab === key) + 'flex-shrink:0;'
  })
}

async function renderSettings() {
  setHeaderTitle('ตั้งค่าระบบ', `⚙️ ตั้งค่า${ctx.cfg.system_name || 'แก้ค้างเก่า'}`)
  const content = document.getElementById('regrade-content')
  let admins, staff, executives, teacherPicker, classLevels
  try {
    [admins, staff, executives, teacherPicker, classLevels] = await Promise.all([getRegradeAdmins(), getRegradeRegistrarStaff(), getRegradeExecutives(), getAllTeachersForPicker(), getRegradeDistinctClassLevels()])
  } catch (err) {
    content.innerHTML = `<div class="p-6 text-center text-red-500 text-sm">โหลดข้อมูลไม่สำเร็จ: ${escHtml(err.message)}</div>`
    return
  }
  const teacherByProfileId = new Map(teacherPicker.map(t => [t.profile_id, t]))
  const c = ctx.cfg
  const selectedLevels = new Set(c.intent_open_levels || [])
  content.innerHTML = `
    <div class="max-w-2xl mx-auto p-4 flex flex-col gap-4">

      <div class="flex gap-1 p-1 rounded-full bg-[var(--surface-2)] overflow-x-auto">
        ${settingsTabBtnHtml('general', '⚙️ ทั่วไป', settingsUi.activeTab === 'general')}
        ${settingsTabBtnHtml('intent', '📝 การแจ้งจำนง', settingsUi.activeTab === 'intent')}
        ${settingsTabBtnHtml('theme', '🎨 ดีไซน์', settingsUi.activeTab === 'theme')}
        ${settingsTabBtnHtml('data', '📥 ข้อมูล', settingsUi.activeTab === 'data')}
        ${settingsTabBtnHtml('access', '🔐 สิทธิ์การเข้าถึง', settingsUi.activeTab === 'access')}
      </div>

      <button id="regrade-set-save" class="w-full py-3 rounded-2xl text-white font-bold text-sm" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">บันทึกการตั้งค่า</button>

      <div data-settings-group="general" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ชื่อระบบ</p>
          <input id="regrade-set-name" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm" value="${escHtml(c.system_name || 'แก้ค้างเก่า')}">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ข้อความประกาศ</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎓 สำหรับนักเรียน</label>
          <textarea id="regrade-set-ann-student" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">${escHtml(c.student_announcement || '')}</textarea>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">👨‍🏫 สำหรับครูผู้สอน</label>
          <textarea id="regrade-set-ann-teacher" rows="2" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">${escHtml(c.teacher_announcement || '')}</textarea>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">การมองเห็นเมนู</p>
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้านักเรียน</span>
            ${actionToggleHtml('regrade-set-vis-student', c.visibility?.student_menu)}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-[var(--ink-2)]">แสดงปุ่มเมนูในหน้าครู</span>
            ${actionToggleHtml('regrade-set-vis-teacher', c.visibility?.teacher_menu)}
          </div>
        </div>
      </div>

      <div data-settings-group="intent" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <div class="flex items-center justify-between mb-1">
            <p class="text-sm font-bold text-[var(--ink)]">การแจ้งความจำนงของนักเรียน</p>
            ${actionToggleHtml('regrade-set-intent', c.intent_open)}
          </div>
          <p class="text-xs text-[var(--muted-2)] mb-3">ควบคุมปุ่มลอย "จำนงขอแก้/ปรับ" และปุ่มแจ้งความจำนงในการ์ดแต่ละวิชาที่นักเรียนเห็น</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เปิดรับตั้งแต่</label>
          <input id="regrade-set-intent-start" type="datetime-local" value="${escHtml(c.intent_window_start || '')}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ถึงวันที่</label>
          <input id="regrade-set-intent-end" type="datetime-local" value="${escHtml(c.intent_window_end || '')}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ระดับชั้นที่เปิดให้แจ้งความจำนง</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">เลือกเฉพาะระดับชั้นที่ต้องการเปิดรับ — ถ้าไม่เลือกเลยสักระดับ = เปิดทุกระดับชั้น (ค่าเริ่มต้น)</p>
          ${['สามัญ', 'ศาสนา'].map(cat => {
            const levels = classLevels.filter(l => l.category === cat)
            if (!levels.length) return ''
            return `<p class="text-[11px] font-bold text-[var(--ink-2)] mb-1.5 mt-2">${cat === 'สามัญ' ? '📘' : '🕌'} ${escHtml(cat)}</p>
            <div class="flex flex-wrap gap-1.5 mb-2">${levels.map(l => levelChipHtml(`${l.category}|${l.class_level}`, l.class_level, selectedLevels.has(`${l.category}|${l.class_level}`))).join('')}</div>`
          }).join('')}
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">กำหนดเวลาตอบรับของครูผู้สอน</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">ช่วงเวลาที่ครูควรตอบรับ (นัดสอบปรับ/ให้งานแก้) หลังนักเรียนแจ้งความจำนง</p>
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">เริ่มตอบรับได้ตั้งแต่</label>
          <input id="regrade-set-response-start" type="datetime-local" value="${escHtml(c.response_window_start || '')}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm mb-3">
          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ตอบรับให้เสร็จภายใน</label>
          <input id="regrade-set-response-end" type="datetime-local" value="${escHtml(c.response_window_end || '')}" class="w-full px-3 py-2 rounded-lg border border-[var(--line)] text-sm">
        </div>

        <div class="rg-card p-5">
          <div class="flex items-center justify-between">
            <div class="min-w-0 pr-3">
              <p class="text-sm font-bold text-[var(--ink)]">แสดงกำหนดเวลาในหน้าภาพรวม</p>
              <p class="text-xs text-[var(--muted-2)] mt-0.5">เปิดแล้วนักเรียนจะเห็นกำหนดการแจ้งความจำนงพร้อมปุ่มไปแจ้งความจำนง และครูจะเห็นกำหนดการตอบรับพร้อมปุ่มไปตอบรับ ในแท็บ "ภาพรวม" ของตัวเอง</p>
            </div>
            ${actionToggleHtml('regrade-set-show-deadline', c.show_deadline_banner)}
          </div>
        </div>
      </div>

      <div data-settings-group="theme" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">ตั้งค่าสีธีม</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">เลือกพรีเซ็ตด่วน หรือปรับเองทีละสี — พรีวิวด้านล่างอัปเดตทันที ยังไม่บันทึกจนกว่าจะกด "บันทึกการตั้งค่า"</p>

          <div id="regrade-theme-preview" class="rounded-2xl p-4 mb-4 text-white" style="transition:background .15s ease">
            <p class="text-[11px] opacity-80 mb-1">ตัวอย่างพรีวิว</p>
            <p class="font-extrabold text-sm">คณิตศาสตร์พื้นฐาน</p>
            <div class="flex gap-2 mt-2.5">
              <span id="regrade-theme-preview-sec" class="px-2.5 py-1 rounded-lg text-[10px] font-bold">ศาสนา</span>
              <span id="regrade-theme-preview-gold" class="px-2.5 py-1 rounded-lg text-[10px] font-bold">ทอง</span>
            </div>
          </div>

          <p class="text-[11px] font-bold text-[var(--ink-2)] mb-2">พรีเซ็ตด่วน</p>
          <div class="grid grid-cols-4 gap-2 mb-4">
            ${Object.entries(REGRADE_THEME_PRESETS).map(([key, p]) => `
            <button data-preset="${key}" class="flex flex-col items-center gap-1.5">
              <span class="block w-11 h-11 rounded-xl border border-[var(--line)]" style="background:linear-gradient(135deg, ${p.primary} 30%, ${p.secondary} 65%, ${p.gold} 100%)"></span>
              <span class="text-[10px] font-bold text-[var(--muted)]">${escHtml(p.label)}</span>
            </button>`).join('')}
          </div>

          <div class="grid grid-cols-3 gap-3 mb-4">
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🎀 สีหลัก (สามัญ)</label><input id="regrade-set-primary" type="color" value="${c.primary_color || '#9d174d'}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">🕌 สีรอง (ศาสนา)</label><input id="regrade-set-secondary" type="color" value="${c.secondary_color || '#065f46'}" class="w-full h-9"></div>
            <div><label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">✨ สีทอง</label><input id="regrade-set-gold" type="color" value="${c.gold_color || '#b45309'}" class="w-full h-9"></div>
          </div>

          <label class="block text-[11px] font-bold text-[var(--ink-2)] mb-1">ความโปร่งของกระจก (เฉพาะหน้าจอมือถือ)</label>
          <input id="regrade-set-glass-alpha" type="range" min="0.2" max="0.9" step="0.05" value="${c.glass_alpha ?? 0.55}" class="w-full">
        </div>
      </div>

      <div data-settings-group="data" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-1">นำเข้าข้อมูลย้อนหลัง (CSV)</p>
          <p class="text-xs text-[var(--muted-2)] mb-3">สำหรับรายวิชาค้างของภาคเรียนก่อนหน้าภาคเรียนปัจจุบันเท่านั้น (ภาคเรียนปัจจุบันระบบดึงจากฐานข้อมูล ปพ.5 อัตโนมัติ)</p>
          <div class="bg-[var(--surface-2)] rounded-xl p-3 mb-3 text-[11px] text-[var(--muted)] leading-relaxed">
            <b>คอลัมน์ที่ต้องมี:</b> student_code (รหัสนักเรียน), subject_code (รหัสวิชา), subject_name (รายวิชา), category (หมวด: สามัญ/ศาสนา เท่านั้น), semester (ภาคเรียน)<br>
            <b>ไม่บังคับ:</b> class_level (ชั้นที่ติด), teacher_code (รหัสครู), grade_failed_at (เกรดที่ติด)<br>
            แถวที่มีอยู่แล้วในระบบ (นักเรียน+รหัสวิชา+ภาคเรียนเดียวกัน) จะถูกข้าม ไม่ทับข้อมูลเดิม
          </div>
          <input id="regrade-csv-file" type="file" accept=".csv,text/csv" class="w-full text-sm mb-3">
          <div id="regrade-csv-preview"></div>
          <button id="regrade-csv-import-btn" class="hidden mt-3 w-full py-2.5 rounded-xl text-white font-bold text-xs" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">นำเข้าข้อมูล</button>
          <div id="regrade-csv-result" class="mt-3 text-xs"></div>
        </div>
      </div>

      <div data-settings-group="access" class="flex flex-col gap-4">
        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้ดูแลระบบ (เข้าหน้าตั้งค่านี้ได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${admins.map(a => adminChip(a, 'admin', teacherByProfileId)).join('') || '<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-admin" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-admin" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">ผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้ ไม่แก้ตั้งค่า)</p>
          <div class="flex flex-wrap gap-2 mb-3">${executives.map(a => adminChip(a, 'executive', teacherByProfileId)).join('') || '<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-executive" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-executive" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--primary),var(--primary-dark))">+ เพิ่ม</button>
          </div>
        </div>

        <div class="rg-card p-5">
          <p class="text-sm font-bold text-[var(--ink)] mb-3">เจ้าหน้าที่ฝ่ายทะเบียน (เข้าหน้าปิดงานได้)</p>
          <div class="flex flex-wrap gap-2 mb-3">${staff.map(a => adminChip(a, 'registrar', teacherByProfileId)).join('') || '<span class="text-xs text-[var(--muted-2)]">ยังไม่มี</span>'}</div>
          <div class="flex gap-2">
            <input id="regrade-new-registrar" list="regrade-teacher-datalist" class="flex-1 px-3 py-2 rounded-lg border border-[var(--line)] text-sm" placeholder="พิมพ์ชื่อหรือรหัสครู แล้วเลือกจากรายการ...">
            <button id="regrade-add-registrar" class="px-4 py-2 rounded-lg text-white text-sm font-bold" style="background:linear-gradient(135deg,var(--secondary),var(--secondary-dark))">+ เพิ่ม</button>
          </div>
        </div>
      </div>

      <datalist id="regrade-teacher-datalist">${teacherPicker.map(t => `<option value="${escHtml(t.full_name)}${t.teacher_code ? ` (${escHtml(t.teacher_code)})` : ''} · รหัส ${t.id}"></option>`).join('')}</datalist>
    </div>`

  showSettingsTab(content, settingsUi.activeTab)
  content.querySelectorAll('[data-settings-tab]').forEach(btn => btn.addEventListener('click', () => showSettingsTab(content, btn.dataset.settingsTab)))
  content.querySelectorAll('[data-level-chip]').forEach(btn => btn.addEventListener('click', () => {
    const on = btn.dataset.on !== '1'
    btn.dataset.on = on ? '1' : '0'
    btn.style.cssText = on ? 'background:var(--primary);color:#fff;' : 'background:var(--surface-2);color:var(--muted)'
  }))

  content.querySelectorAll('[data-remove-admin]').forEach(btn => btn.addEventListener('click', async () => {
    const ok = await showRegradeConfirm({ title: 'ยืนยันถอดสิทธิ์', message: `ถอดสิทธิ์ผู้ดูแลระบบของ "${btn.dataset.name}" ใช่หรือไม่?`, confirmText: 'ยืนยันถอดสิทธิ์' })
    if (!ok) return
    try { await removeRegradeAdmin(btn.dataset.removeAdmin); showToast('ถอดสิทธิ์แล้ว', 'success'); renderSettings() } catch (err) { showToast(err.message, 'error') }
  }))
  content.querySelectorAll('[data-remove-registrar]').forEach(btn => btn.addEventListener('click', async () => {
    const ok = await showRegradeConfirm({ title: 'ยืนยันถอดสิทธิ์', message: `ถอดสิทธิ์เจ้าหน้าที่ทะเบียนของ "${btn.dataset.name}" ใช่หรือไม่?`, confirmText: 'ยืนยันถอดสิทธิ์' })
    if (!ok) return
    try { await removeRegradeRegistrarStaff(btn.dataset.removeRegistrar); showToast('ถอดสิทธิ์แล้ว', 'success'); renderSettings() } catch (err) { showToast(err.message, 'error') }
  }))
  content.querySelectorAll('[data-remove-executive]').forEach(btn => btn.addEventListener('click', async () => {
    const ok = await showRegradeConfirm({ title: 'ยืนยันถอดสิทธิ์', message: `ถอดสิทธิ์ผู้บริหารของ "${btn.dataset.name}" ใช่หรือไม่?`, confirmText: 'ยืนยันถอดสิทธิ์' })
    if (!ok) return
    try { await removeRegradeExecutive(btn.dataset.removeExecutive); showToast('ถอดสิทธิ์แล้ว', 'success'); renderSettings() } catch (err) { showToast(err.message, 'error') }
  }))
  document.getElementById('regrade-add-admin').addEventListener('click', async () => {
    const input = document.getElementById('regrade-new-admin')
    const teacher = resolveTeacherFromPickerInput(input.value, teacherPicker)
    if (!teacher) { showToast('กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง', 'warning'); return }
    if (admins.some(a => a.profile_id === teacher.profile_id)) { showToast('ครูคนนี้เป็นผู้ดูแลระบบอยู่แล้ว', 'warning'); return }
    const ok = await showRegradeConfirm({ title: 'ยืนยันเพิ่มผู้ดูแลระบบ', message: `เพิ่ม "${teacher.full_name}" เป็นผู้ดูแลระบบแก้ค้างเก่าใช่หรือไม่?`, confirmText: 'ยืนยันเพิ่ม' })
    if (!ok) return
    try { await addRegradeAdmin(teacher.profile_id); input.value = ''; showToast('เพิ่มแล้ว ✅', 'success'); renderSettings() } catch (err) { showToast(err.message, 'error') }
  })
  document.getElementById('regrade-add-registrar').addEventListener('click', async () => {
    const input = document.getElementById('regrade-new-registrar')
    const teacher = resolveTeacherFromPickerInput(input.value, teacherPicker)
    if (!teacher) { showToast('กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง', 'warning'); return }
    if (staff.some(a => a.profile_id === teacher.profile_id)) { showToast('ครูคนนี้เป็นเจ้าหน้าที่ทะเบียนอยู่แล้ว', 'warning'); return }
    const ok = await showRegradeConfirm({ title: 'ยืนยันเพิ่มเจ้าหน้าที่ทะเบียน', message: `เพิ่ม "${teacher.full_name}" เป็นเจ้าหน้าที่ฝ่ายทะเบียนใช่หรือไม่?`, confirmText: 'ยืนยันเพิ่ม' })
    if (!ok) return
    try { await addRegradeRegistrarStaff(teacher.profile_id); input.value = ''; showToast('เพิ่มแล้ว ✅', 'success'); renderSettings() } catch (err) { showToast(err.message, 'error') }
  })
  document.getElementById('regrade-add-executive').addEventListener('click', async () => {
    const input = document.getElementById('regrade-new-executive')
    const teacher = resolveTeacherFromPickerInput(input.value, teacherPicker)
    if (!teacher) { showToast('กรุณาพิมพ์แล้วเลือกชื่อครูจากรายการที่แสดง', 'warning'); return }
    if (executives.some(a => a.profile_id === teacher.profile_id)) { showToast('ครูคนนี้เป็นผู้บริหารอยู่แล้ว', 'warning'); return }
    const ok = await showRegradeConfirm({ title: 'ยืนยันเพิ่มผู้บริหาร', message: `เพิ่ม "${teacher.full_name}" เป็นผู้บริหาร (เข้าดูบอร์ดผู้บริหารได้) ใช่หรือไม่?`, confirmText: 'ยืนยันเพิ่ม' })
    if (!ok) return
    try { await addRegradeExecutive(teacher.profile_id); input.value = ''; showToast('เพิ่มแล้ว ✅', 'success'); renderSettings() } catch (err) { showToast(err.message, 'error') }
  })
  document.getElementById('regrade-set-save').addEventListener('click', async () => {
    const ok = await showRegradeConfirm({ title: 'ยืนยันบันทึกการตั้งค่า', message: 'บันทึกการตั้งค่าทั้งหมดนี้ใช่หรือไม่? จะมีผลกับทุกคนทันที', confirmText: 'บันทึก' })
    if (!ok) return
    try {
      await updateRegradeConfig({
        intent_open: isToggleOn(content, 'regrade-set-intent'),
        intent_window_start: document.getElementById('regrade-set-intent-start').value,
        intent_window_end: document.getElementById('regrade-set-intent-end').value,
        intent_open_levels: [...content.querySelectorAll('[data-level-chip][data-on="1"]')].map(b => b.dataset.levelChip),
        response_window_start: document.getElementById('regrade-set-response-start').value,
        response_window_end: document.getElementById('regrade-set-response-end').value,
        show_deadline_banner: isToggleOn(content, 'regrade-set-show-deadline'),
        visibility: {
          student_menu: isToggleOn(content, 'regrade-set-vis-student'),
          teacher_menu: isToggleOn(content, 'regrade-set-vis-teacher'),
        },
        primary_color: document.getElementById('regrade-set-primary').value,
        secondary_color: document.getElementById('regrade-set-secondary').value,
        gold_color: document.getElementById('regrade-set-gold').value,
        glass_alpha: Number(document.getElementById('regrade-set-glass-alpha').value),
        student_announcement: document.getElementById('regrade-set-ann-student').value,
        teacher_announcement: document.getElementById('regrade-set-ann-teacher').value,
        system_name: document.getElementById('regrade-set-name').value.trim() || 'แก้ค้างเก่า',
      })
      showToast('บันทึกการตั้งค่าเรียบร้อย ✅', 'success')
      ctx.cfg = await getRegradeConfig()
      applyThemeColors()
      renderSettings()
    } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + err.message, 'error') }
  })

  wireActionToggles(content, ['regrade-set-intent', 'regrade-set-vis-student', 'regrade-set-vis-teacher', 'regrade-set-show-deadline'])
  wireCsvImport(content)
  wireThemePicker(content)
}

// พรีเซ็ตสีธีมด่วน (แนวคิดจากแผงปรับแต่งไอคอน iOS — ดู design_reference_ios_customize_glass ในความจำ)
// ระบบนี้มี 2 สีที่มีความหมายตายตัว (ชมพู=สามัญ, เขียว=ศาสนา) เลยใช้พรีเซ็ตสำเร็จรูปแทน hue slider เดี่ยว
const REGRADE_THEME_PRESETS = {
  default: { primary: '#9d174d', secondary: '#065f46', gold: '#b45309', glassAlpha: 0.55, label: 'ค่าเริ่มต้น' },
  dark:    { primary: '#701138', secondary: '#043d2d', gold: '#78350f', glassAlpha: 0.45, label: 'เข้ม' },
  airy:    { primary: '#9d174d', secondary: '#065f46', gold: '#b45309', glassAlpha: 0.25, label: 'โปร่งใส' },
  tint:    { primary: '#db2777', secondary: '#059669', gold: '#d97706', glassAlpha: 0.65, label: 'ย้อมสี' },
}

function wireThemePicker(content) {
  const primaryInput = content.querySelector('#regrade-set-primary')
  const secondaryInput = content.querySelector('#regrade-set-secondary')
  const goldInput = content.querySelector('#regrade-set-gold')
  const alphaInput = content.querySelector('#regrade-set-glass-alpha')
  const preview = content.querySelector('#regrade-theme-preview')
  const previewSec = content.querySelector('#regrade-theme-preview-sec')
  const previewGold = content.querySelector('#regrade-theme-preview-gold')

  const root = document.documentElement

  function renderPreview() {
    preview.style.background = primaryInput.value
    previewSec.style.background = secondaryInput.value
    previewGold.style.background = goldInput.value
    // อัปเดต CSS variable จริงของทั้งหน้าทันที (ไม่ใช่แค่การ์ดพรีวิวเล็กๆ) ให้เห็นผลจริง
    // แบบเรียลไทม์บนการ์ด/ปุ่ม/กระจกทั้งหมด — ยังไม่ได้บันทึกจนกว่าจะกด "บันทึกการตั้งค่า"
    root.style.setProperty('--primary', primaryInput.value)
    root.style.setProperty('--secondary', secondaryInput.value)
    root.style.setProperty('--gold', goldInput.value)
    root.style.setProperty('--glass-alpha', alphaInput.value)
  }
  renderPreview()

  ;[primaryInput, secondaryInput, goldInput, alphaInput].forEach(el => el.addEventListener('input', renderPreview))

  content.querySelectorAll('[data-preset]').forEach(btn => btn.addEventListener('click', () => {
    const p = REGRADE_THEME_PRESETS[btn.dataset.preset]
    if (!p) return
    primaryInput.value = p.primary
    secondaryInput.value = p.secondary
    goldInput.value = p.gold
    alphaInput.value = p.glassAlpha
    renderPreview()
  }))
}

function buildCsvPreviewTable(mapped) {
  if (!mapped.length) return `<p class="text-xs text-[var(--muted-2)] text-center py-4">ไม่พบข้อมูลในไฟล์</p>`
  const headers = ['student_code', 'subject_code', 'subject_name', 'category', 'semester', 'class_level', 'teacher_code']
  const preview = mapped.slice(0, 10)
  return `<div class="overflow-x-auto rounded-xl border border-[var(--line)]">
    <table class="w-full text-[11px]">
      <thead class="bg-[var(--surface-2)] text-[var(--muted-2)]"><tr>${headers.map(h => `<th class="px-2 py-1.5 text-left">${h}</th>`).join('')}</tr></thead>
      <tbody>${preview.map(r => `<tr class="border-t border-[var(--line-soft)]">${headers.map(h => `<td class="px-2 py-1.5 text-[var(--ink-2)]">${escHtml(r[h] ?? '')}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>
    ${mapped.length > 10 ? `<p class="text-center text-[10px] text-[var(--muted-2)] py-1.5">แสดง 10 จาก ${mapped.length} แถว</p>` : ''}
  </div>`
}

function wireCsvImport(content) {
  let csvRawRows = null
  const fileInput = content.querySelector('#regrade-csv-file')
  const previewEl = content.querySelector('#regrade-csv-preview')
  const importBtn = content.querySelector('#regrade-csv-import-btn')
  const resultEl = content.querySelector('#regrade-csv-result')

  fileInput?.addEventListener('change', async () => {
    resultEl.innerHTML = ''
    const file = fileInput.files?.[0]
    if (!file) { csvRawRows = null; previewEl.innerHTML = ''; importBtn.classList.add('hidden'); return }
    try {
      const text = await file.text()
      csvRawRows = parseCSV(text)
      previewEl.innerHTML = buildCsvPreviewTable(previewRegradeCsvRows(csvRawRows))
      importBtn.classList.toggle('hidden', csvRawRows.length === 0)
    } catch (err) {
      previewEl.innerHTML = ''
      showToast('อ่านไฟล์ CSV ไม่สำเร็จ: ' + err.message, 'error')
    }
  })

  importBtn?.addEventListener('click', async () => {
    if (!csvRawRows?.length) return
    const ok = await showRegradeConfirm({
      title: 'ยืนยันนำเข้าข้อมูล CSV',
      message: `นำเข้าข้อมูลรายวิชาค้าง ${csvRawRows.length} แถวเข้าสู่ระบบใช่หรือไม่? แถวที่มีอยู่แล้วในระบบจะถูกข้าม ไม่ทับข้อมูลเดิม`,
      confirmText: 'ยืนยันนำเข้า',
    })
    if (!ok) return
    importBtn.disabled = true
    importBtn.textContent = 'กำลังนำเข้า...'
    try {
      const summary = await importRegradeSubjectsCsv(csvRawRows)
      resultEl.innerHTML = `
        <div class="rounded-xl p-3" style="background:var(--ok-soft);border:1px solid var(--ok-soft-line);color:var(--ok)">
          นำเข้าสำเร็จ ${summary.imported} แถว จากทั้งหมด ${summary.total} แถว
          ${summary.skippedDuplicate ? `<br>ข้าม ${summary.skippedDuplicate} แถว (มีอยู่แล้วในระบบ)` : ''}
          ${summary.skippedNoStudent ? `<br>ข้าม ${summary.skippedNoStudent} แถว (ไม่พบรหัสนักเรียนในระบบ)` : ''}
          ${summary.skippedInvalid ? `<br>ข้าม ${summary.skippedInvalid} แถว (ข้อมูลไม่ครบ/หมวดไม่ถูกต้อง)` : ''}
          ${summary.unmatchedTeacher ? `<br>⚠️ ${summary.unmatchedTeacher} แถว ไม่พบรหัสครู (นำเข้าแล้วแต่ยังไม่ผูกครูผู้สอน)` : ''}
        </div>`
      showToast('นำเข้าข้อมูลเรียบร้อย ✅', 'success')
      csvRawRows = null
      fileInput.value = ''
      previewEl.innerHTML = ''
      importBtn.classList.add('hidden')
    } catch (err) {
      showToast('นำเข้าไม่สำเร็จ: ' + err.message, 'error')
    } finally {
      importBtn.disabled = false
      importBtn.textContent = 'นำเข้าข้อมูล'
    }
  })
}

// รับค่าจากช่อง input ที่ผูกกับ <datalist> (แพทเทิร์นเดียวกับ council.js) — ต้อง "เลือกจากรายการ" จริง
// ไม่ใช่พิมพ์เองมั่วๆ เพราะรหัสท้ายข้อความ (· รหัส {teachers.id}) คือตัวยืนยันว่าเลือกตรงกับครูคนไหน
function resolveTeacherFromPickerInput(text, teacherPicker) {
  const m = text.trim().match(/· รหัส (\d+)$/)
  if (!m) return null
  return teacherPicker.find(t => t.id === Number(m[1])) ?? null
}

function adminChip(row, kind, teacherByProfileId) {
  const teacher = teacherByProfileId?.get(row.profile_id)
  const label = teacher ? `${teacher.full_name}${teacher.teacher_code ? ` (${teacher.teacher_code})` : ''}` : (row.profiles?.user_code || row.profile_id)
  const attr = kind === 'admin' ? `data-remove-admin="${escHtml(row.profile_id)}"`
    : kind === 'executive' ? `data-remove-executive="${escHtml(row.profile_id)}"`
    : `data-remove-registrar="${escHtml(row.profile_id)}"`
  return `<span class="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold" style="background:var(--primary-soft);color:var(--primary-dark);border:1px solid var(--primary-soft-line)">
    ${escHtml(label)}
    <button ${attr} data-name="${escHtml(label)}" class="w-4 h-4 rounded-full text-[10px]" style="background:var(--primary-soft-line)">×</button>
  </span>`
}

function applyThemeColors() {
  const root = document.documentElement
  if (ctx.cfg.primary_color) root.style.setProperty('--primary', ctx.cfg.primary_color)
  if (ctx.cfg.secondary_color) root.style.setProperty('--secondary', ctx.cfg.secondary_color)
  if (ctx.cfg.gold_color) root.style.setProperty('--gold', ctx.cfg.gold_color)
  if (ctx.cfg.glass_alpha != null) root.style.setProperty('--glass-alpha', ctx.cfg.glass_alpha)
}

// ============================================================================
// Auth guard + role routing
// ============================================================================
let currentSection = null

// รายการ "หน้าที่" ที่บัญชีนี้เข้าถึงได้ทั้งหมด — ใช้ทั้งไซด์บาร์เดสก์ท็อปและแถบสลับบทบาทบนมือถือ
// เรียงตามลำดับความสำคัญ: งานสอน (ถ้ามี) → ฝ่ายทะเบียน → ผู้บริหาร → ตั้งค่า
function getAvailableSections() {
  const sections = []
  if (ctx.role === 'student' && ctx.studentRow && (ctx.cfg.visibility?.student_menu || ctx.isAdmin)) sections.push({ key: 'student', icon: '🎓', label: 'ของฉัน' })
  if (ctx.role === 'teacher' && ctx.teacherRow && (ctx.cfg.visibility?.teacher_menu || ctx.isAdmin)) sections.push({ key: 'teacher', icon: '📚', label: 'งานสอนของฉัน' })
  if (ctx.isRegistrar) sections.push({ key: 'registrar', icon: '📋', label: 'ฝ่ายทะเบียน' })
  if (ctx.isExecutive) sections.push({ key: 'dashboard', icon: '📊', label: 'ผู้บริหาร' })
  if (ctx.isAdmin) sections.push({ key: 'settings', icon: '⚙️', label: 'ตั้งค่าระบบ' })
  return sections
}

async function goSection(section) {
  currentSection = section
  document.getElementById('regrade-bottom-tabs').innerHTML = ''
  const sections = getAvailableSections()
  renderSidebarNav_(sections)
  renderRoleSwitcher(sections)
  if (section === 'student') return renderStudent()
  if (section === 'teacher') return renderTeacher()
  if (section === 'registrar') return renderRegistrar()
  if (section === 'dashboard') return renderDashboard()
  if (section === 'settings') return renderSettings()
}

function renderSidebarNav_(sections) {
  if (sections.length > 1) {
    renderSidebarNav(sections, currentSection, goSection)
  } else {
    document.getElementById('regrade-sidebar-nav').innerHTML = ''
  }
}

// แถบสลับบทบาทแนวนอน — โชว์เฉพาะตอนบัญชีเข้าถึงได้มากกว่า 1 หน้าที่ (เช่น ครูที่ได้รับสิทธิ์แอดมิน/ทะเบียนเพิ่ม)
// ทำงานได้ทั้งมือถือ (ที่ไซด์บาร์เดสก์ท็อปถูกซ่อนไว้) และเดสก์ท็อป
function renderRoleSwitcher(sections) {
  const el = document.getElementById('regrade-role-switcher')
  if (!el) return
  if (sections.length <= 1) { el.innerHTML = ''; return }
  el.innerHTML = `<div class="rg-switcher-bar flex gap-2 overflow-x-auto px-4 py-2 border-b border-[var(--line-soft)]">${sections.map(s => `
    <button data-switch-sec="${s.key}" class="flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition"
      style="${currentSection === s.key ? 'background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;' : 'background:var(--surface-2);color:var(--muted);'}">${s.icon} ${escHtml(s.label)}</button>`).join('')}</div>`
  el.querySelectorAll('[data-switch-sec]').forEach(btn => btn.addEventListener('click', () => goSection(btn.dataset.switchSec)))
}

function renderNoAccess() {
  document.getElementById('regrade-content').innerHTML = `
    <div class="max-w-md mx-auto p-6 text-center text-[var(--muted)]">
      <p class="text-4xl mb-3">🔒</p>
      <p class="text-sm">บัญชีนี้ยังไม่มีสิทธิ์เข้าใช้งานระบบแก้ค้างเก่า</p>
    </div>`
}

async function init() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return }

  const { data: profile } = await supabase.from('profiles').select('role, is_also_admin').eq('id', session.user.id).single()
  ctx.role = profile?.role
  const BACK_HREF = { student: 'student.html', teacher: 'teacher.html', admin: 'dashboard.html' }
  const backHref = BACK_HREF[ctx.role] || 'index.html'
  const backBtnDesktop = document.getElementById('regrade-back-btn-desktop')
  const backBtnMobile = document.getElementById('regrade-back-btn-mobile')
  // เปิดผ่าน modal ใน dashboard.html (iframe) — ปุ่ม "←" ต้องสั่งปิด modal ของหน้าแม่แทนการ navigate
  // iframe ไปเป็น teacher.html ตรงๆ ไม่งั้นแถบดำของ modal จะค้างอยู่เหนือหน้าที่ navigate ไปแล้ว
  if (window.self !== window.top) {
    const closeParentModal = (e) => {
      e.preventDefault()
      if (typeof window.parent.closeRegradeModal === 'function') window.parent.closeRegradeModal()
      else window.parent.location.href = backHref
    }
    backBtnDesktop.removeAttribute('href')
    backBtnMobile.removeAttribute('href')
    backBtnDesktop.addEventListener('click', closeParentModal)
    backBtnMobile.addEventListener('click', closeParentModal)
  } else {
    backBtnDesktop.href = backHref
    backBtnMobile.href = backHref
  }

  try {
    ctx.cfg = await getRegradeConfig()
    const perms = await checkMyRegradePermissions()
    ctx.isAdmin = perms.isAdmin || ctx.role === 'admin' || profile?.is_also_admin === true
    ctx.isRegistrar = perms.isRegistrar || ctx.isAdmin
    ctx.isExecutive = perms.isExecutive || ctx.isAdmin
  } catch (err) {
    document.getElementById('regrade-content').innerHTML = `<div class="p-6 text-center text-red-500 text-sm">โหลดการตั้งค่าไม่สำเร็จ: ${escHtml(err.message)}</div>`
    return
  }
  applyThemeColors()

  if (ctx.role === 'student') ctx.studentRow = await getMyStudentRow()
  if (ctx.role === 'teacher') ctx.teacherRow = await getMyTeacherRow()

  if (ctx.role === 'student' && !ctx.studentRow) { renderNoAccess(); return }
  if (ctx.role === 'teacher' && !ctx.teacherRow) { renderNoAccess(); return }

  const sections = getAvailableSections()
  if (!sections.length) { renderNoAccess(); return }

  // แอดมิน/ทะเบียนที่บังเอิญมีบัญชีครูด้วย ให้เห็นแดชบอร์ด/ฝ่ายทะเบียนเป็นหน้าหลักก่อนเสมอ
  // (ไม่ใช่หน้าครูของตัวเอง) แล้วสลับไปดูงานสอนของตัวเองเพิ่มได้ผ่านแถบสลับบทบาท
  const defaultSection = (ctx.isAdmin || ctx.isExecutive) ? 'dashboard' : ctx.isRegistrar ? 'registrar' : sections[0].key
  await goSection(defaultSection)
}

init()
