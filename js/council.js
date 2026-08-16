import { supabase } from './supabase.js'
import { blockPullToRefresh } from './anti-pull-refresh.js'
import { showToast } from './ui.js'
import { getMyStudentProfile } from './student-api.js'
import { getMyTeacherProfile, getMyHomeroomRooms } from './api.js'
import { uploadCouncilApplicationPhoto } from './storage.js'
import {
  getCouncilConfig, getCouncilPositions, getCouncilMembers,
  getCouncilElectionConfigs, getMyCouncilApplications, getMyCouncilMembership,
  submitCouncilApplication, getPendingEndorsements, getEndorsementPhrases,
  confirmApplicationEndorsement, declineApplicationEndorsement,
  getCouncilApplicationsForAdmin, scheduleCouncilInterview, saveCouncilInterviewScore,
  promoteToCandidate, appointMember, ensureElectionConfig, updateElectionWindow,
  getCandidatesForElection, publishElectionResults,
  getCouncilActivities, createActivity, updateActivityStatus, getActivityAttendance, checkInAttendance,
  getCouncilAnnouncements, postAnnouncement, getMyAnnouncementAcks, ackAnnouncement,
  getEvaluationCriteria, addCriterion, removeCriterion, getCouncilEvaluations, saveEvaluation, issueCertificate,
  getCouncilDocuments, createDocument, submitDocument, decideDocument,
} from './council-api.js'

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const content = document.getElementById('council-content')

const GENDER_LABEL = { M: 'ชาย', W: 'หญิง' }

// ค่าจริงของ students.gender ปนกัน 'ชาย'/'หญิง'/'M' อยู่ (data inconsistency) — ต้อง
// normalize เป็น 'M'/'W' มาตรฐานของโมดูลนี้เองเสมอ ห้ามเทียบ === 'ชาย' หรือ === 'M' เฉยๆ
const normalizeGender = raw => {
  if (raw === 'ชาย' || raw === 'M') return 'M'
  if (raw === 'หญิง' || raw === 'W') return 'W'
  return null
}

// รูปนักเรียน — สี่เหลี่ยมขอบมนแนวตั้ง + border/shadow (ห้ามวงกลม) ตาม pattern เดิมของระบบ
// precedent: js/sports-portals.js:923
const studentPhoto = (s, size = 'w-10 h-12') =>
  (s?.photo_url || s?.image_url)
    ? `<img src="${esc(s.photo_url || s.image_url)}" class="${size} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`
    : `<div class="${size} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${esc((s?.full_name || '?').charAt(0))}</div>`

const APPLICATION_STATUS_LABEL = {
  pending: 'รอดำเนินการ', interview_scheduled: 'นัดสัมภาษณ์แล้ว', interviewed: 'สัมภาษณ์แล้ว',
  candidate: 'ผู้สมัครเลือกตั้ง', appointed: 'ได้รับแต่งตั้ง', rejected: 'ไม่ผ่าน',
}

let ctx = null
let activeView = 'overview'
let showApplyForm = false
let applyPhotoFile = null

// "สมัคร" กับ "เลือกตั้ง" ไม่ใช่แท็บถาวรในเมนูหลัก (นั่นมีไว้สำหรับ "ดูภาพรวมสภานักเรียน"
// เท่านั้น) — ทั้งคู่เป็นปุ่มเข้าใช้งานบนหน้าภาพรวม กดแล้วเปิดเป็นโฟลว์เต็มจอที่มีแท็บย่อย
// ของตัวเอง แยกกันชัดเจนจากการเนวิเกตหลัก (ตัดสินใจแล้ว 2026-08-14)
let fullscreenFlow = null // null | 'apply' | 'election'
let flowSubtab = null

// สถานะที่โหลดแบบ lazy ตอนเปิดหน้าจอนั้นๆ ครั้งแรก (ไม่ต้องโหลดทุกอย่างตั้งแต่ init)
let adminApps = null // null = ยังไม่โหลด, [] = โหลดแล้วแต่ไม่มีข้อมูล
const candidatesByGender = {} // { M: [...], W: [...] }
let electionYear = null // ปีการศึกษาปัจจุบันที่ resolve แล้ว (จาก ctx.cfg.academicYear)
let activities = null // null = ยังไม่โหลด
const attendanceByActivity = {} // { [activityId]: Set<memberId> }
let announcements = null // null = ยังไม่โหลด
let myAcks = null // Set<announcementId> — เฉพาะนักเรียนที่ล็อกอินอยู่
let annFilter = 'all'
let showAnnForm = false

const FLOW_DEFS = {
  apply: {
    title: '📝 สมัครสภานักเรียน',
    subtabs: [
      { id: 'new', label: 'สมัครตำแหน่งใหม่' },
      { id: 'mine', label: 'ใบสมัครของฉัน' },
    ],
  },
  election: {
    title: '🗳️ การเลือกตั้งประธานสภา',
    subtabs: [
      { id: 'status', label: 'สถานะการเลือกตั้ง' },
    ],
  },
}

async function init() {
  blockPullToRefresh()

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return }

  const { data: profile } = await supabase.from('profiles').select('role, is_also_admin').eq('id', session.user.id).single()
  const role = profile?.role
  const isAdmin = role === 'admin' || profile?.is_also_admin === true

  // ปุ่ม "← กลับ ปพ.5 ออนไลน์" (มือถือ+เดสก์ท็อป) — พากลับพอร์ทัลของตัวเองตาม role
  const BACK_HREF = { student: 'student.html', teacher: 'teacher.html', admin: 'dashboard.html' }
  const backHref = BACK_HREF[role] || 'index.html'
  document.getElementById('council-back-btn-desktop').href = backHref
  document.getElementById('council-back-btn-mobile').href = backHref

  const [cfg, positions, members, elections] = await Promise.all([
    getCouncilConfig(), getCouncilPositions(), getCouncilMembers(), getCouncilElectionConfigs(),
  ])
  applyBranding(cfg)

  // ดึงข้อมูลนักเรียนก่อน (ถ้า role เป็น student) เพราะต้องใช้ student_code เช็ครายชื่อทดสอบ
  let student = null, applications = [], membership = []
  if (role === 'student') student = await getMyStudentProfile().catch(() => null)

  // ปิดการแสดงผลได้จากหน้าตั้งค่าแอดมิน — ปิดแล้วเข้าได้เฉพาะแอดมิน/ครูที่ได้รับมอบหมายเป็นแอดมิน
  // หรือนักเรียนที่รหัสอยู่ในรายชื่อทดสอบที่แอดมินตั้งไว้ (council_test_student_codes)
  const testCodes = (cfg.council_test_student_codes || '').split(/[\s,]+/).map(c => c.trim()).filter(Boolean)
  const isTestStudent = role === 'student' && !!student && testCodes.includes(student.student_code)
  if (cfg.council_visible_to_all === 'false' && !isAdmin && !isTestStudent) {
    setNavChromeVisible(false)
    content.innerHTML = `
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`
    return
  }

  if (role === 'student' && student) {
    ;[applications, membership] = await Promise.all([
      getMyCouncilApplications(student.id).catch(() => []),
      getMyCouncilMembership(student.id).catch(() => []),
    ])
  }

  // ครูที่ปรึกษาสามัญ — ดึงคิวใบสมัครของนักเรียนในห้องตัวเองที่ยังรอยืนยัน
  let teacher = null, homeroomMainRooms = [], pendingEndorsements = [], endorsementPhrases = []
  if (role === 'teacher') {
    teacher = await getMyTeacherProfile(session.user.id).catch(() => null)
    if (teacher) {
      const homeroomRooms = await getMyHomeroomRooms(teacher.id).catch(() => [])
      homeroomMainRooms = homeroomRooms.filter(r => r.category === 'สามัญ').map(r => r.main_room)
      ;[pendingEndorsements, endorsementPhrases] = await Promise.all([
        getPendingEndorsements(homeroomMainRooms).catch(() => []),
        getEndorsementPhrases().catch(() => []),
      ])
    }
  }

  // ประธานสภา (chair) — นักเรียนที่ล็อกอินอยู่และมีสมาชิกภาพ active ในตำแหน่งที่ is_elected=true
  // ได้สิทธิ์จัดการกิจกรรม/ประกาศเท่าแอดมิน (RLS คุมไว้แล้ว ดู patch_council_phase3_activities_news.sql)
  const isChair = role === 'student' && membership.some(m => m.council_positions?.is_elected)

  // ครูที่ปรึกษาสภา — ตำแหน่ง (position) 'council_advisor' ที่แอดมินมอบให้จากหน้าตั้งค่าครูเดิม
  // (dashboard.html) เห็นเกือบทุกหน้าเหมือนแอดมิน ยกเว้นมอบสิทธิ์ — ต้องเช็คทั้ง teacher.position
  // (เดี่ยว) และ teacher.positions (array) เพราะข้อมูลจริงมีทั้งสองแบบปนกัน (ดู feedback_supervisor_position_rls_column)
  const isCouncilAdvisor = role === 'teacher' && !!teacher &&
    (teacher.position === 'council_advisor' || (teacher.positions ?? []).includes('council_advisor'))

  ctx = {
    role, isAdmin, isChair, isCouncilAdvisor, student, applications, membership, positions, members, elections, cfg,
    teacher, homeroomMainRooms, pendingEndorsements, endorsementPhrases,
  }
  electionYear = Number(cfg.academicYear) || (new Date().getFullYear() + 543)
  if (role === 'teacher' && pendingEndorsements.length) activeView = 'endorse'
  render()
}

// โหลดใบสมัคร/สมาชิกภาพของตัวเองใหม่หลังส่งใบสมัครสำเร็จ — ไม่ต้องรีโหลดทั้งหน้า
async function refreshMyApplications() {
  if (!ctx?.student) return
  ctx.applications = await getMyCouncilApplications(ctx.student.id).catch(() => ctx.applications)
}

// โหลดคิวใบสมัครที่รอครูที่ปรึกษายืนยันใหม่หลังกดรับรอง/ไม่รับรอง
async function refreshPendingEndorsements() {
  if (!ctx?.teacher) return
  ctx.pendingEndorsements = await getPendingEndorsements(ctx.homeroomMainRooms).catch(() => ctx.pendingEndorsements)
}

// ใช้ inline style แทนสลับคลาส 'hidden' ตรงๆ เพราะ #council-sidebar/#council-bottom-tabs
// มีคลาส responsive อยู่แล้ว (hidden md:flex / md:hidden) — สลับคลาส 'hidden' ตรงจะไปทับ
// พฤติกรรม breakpoint เดิม (เจอบั๊กจริง: sidebar โผล่ค้างบนมือถือ) ต้องคุมด้วย
// inline style.display เสมอ เพื่อไม่แตะคลาส responsive ที่มีอยู่แล้ว
function setNavChromeVisible(visible) {
  document.getElementById('council-sidebar').style.display = visible ? '' : 'none'
  document.getElementById('council-bottom-tabs').style.display = visible ? '' : 'none'
}

function applyBranding(cfg) {
  const name = cfg.council_name || 'ระบบสภานักเรียน'
  document.title = name
  document.getElementById('council-title').textContent = name
  document.getElementById('council-title-mobile').textContent = name
  if (cfg.council_logo_url) {
    const logo = document.getElementById('council-logo')
    logo.src = cfg.council_logo_url
    logo.classList.remove('hidden')
    document.getElementById('council-logo-fallback').classList.add('hidden')
  }
}

// ─── Navigation — ไซด์บาร์ (เดสก์ท็อป) + แท็บล่าง (มือถือ) ───────────────────────
// กลุ่มเมนู 5 กลุ่มตรงตามสเปคส่งมอบ (หัวข้อ 5) — หน้าที่ยังไม่ได้สร้าง (เสนอคณะทำงาน/
// มอบหมายงาน/หน้าที่ของฉัน/ตั้งค่า/มอบสิทธิ์) จะยังไม่โผล่ในกลุ่มจนกว่าจะสร้างเสร็จ
const NAV_GROUPS = {
  main: { label: 'หน้าหลัก', icon: '🏠' },
  council: { label: 'งานสภา', icon: '👥' },
  election: { label: 'เลือกตั้ง', icon: '🗳️' },
  teacherWork: { label: 'งานครู', icon: '📋' },
  system: { label: 'ระบบ', icon: '⚙️' },
}

function getNavItems() {
  // เมนูหลัก = ดูภาพรวมสภานักเรียนเท่านั้น ("สมัคร" ไม่อยู่ที่นี่ — เป็นปุ่มบนหน้าภาพรวมแทน)
  // ⚠️ label "หน้าหลัก" ไม่ใช่ "ภาพรวม" — "ภาพรวม" ชื่อนี้สงวนไว้สำหรับหน้าแดชบอร์ดสถิติของ
  // แอดมิน (สเปคข้อ 8.17, กลุ่ม "ระบบ") ที่ยังไม่ได้สร้าง ห้ามใช้ชื่อซ้ำกับหน้านี้ซึ่งเป็นคนละหน้า
  const items = [{ id: 'overview', icon: '🏠', label: 'หน้าหลัก', group: 'main' }]
  // งานสภา — สาธารณะ/สมาชิกสภา (เสนอคณะทำงาน, มอบหมายงาน, หน้าที่/งานของฉัน ยังไม่ได้สร้าง)
  items.push({ id: 'news', icon: '📣', label: 'ประกาศ', group: 'council' })
  items.push({ id: 'roster', icon: '🏛️', label: 'สภาของเรา', group: 'council' })
  items.push({ id: 'activities', icon: '📅', label: 'กิจกรรม', group: 'council' })
  // เลือกตั้ง — สาธารณะ
  items.push({ id: 'candidates', icon: '🗳️', label: 'ว่าที่ประธาน', group: 'election' })
  items.push({ id: 'result', icon: '📊', label: 'ผลเลือกตั้ง', group: 'election' })
  // งานครู — ครูที่ปรึกษาสามัญ/ครูที่ปรึกษาสภา/แอดมิน
  if (ctx.role === 'teacher' && ctx.pendingEndorsements.length) {
    items.push({ id: 'endorse', icon: '✋', label: 'รับรองผู้สมัคร', badge: ctx.pendingEndorsements.length, group: 'teacherWork' })
  }
  const isTeacherStaff = ctx.isAdmin || ctx.isCouncilAdvisor
  if (isTeacherStaff) items.push({ id: 'apps', icon: '📋', label: 'ใบสมัคร', group: 'teacherWork' })
  if (isTeacherStaff || ctx.membership.length) items.push({ id: 'eval', icon: '🎖️', label: 'ประเมิน/เกียรติบัตร', group: 'teacherWork' })
  if (isTeacherStaff || ctx.isChair) items.push({ id: 'docs', icon: '📄', label: 'เอกสารโครงการ', group: 'teacherWork' })
  // ระบบ — ภาพรวม/ตั้งค่า/มอบสิทธิ์ (ตั้งค่า+มอบสิทธิ์ยังไม่ได้สร้าง)
  return items
}

let mobileSheetGroup = null // null | group id — กลุ่มที่กำลังเปิดแคปซูลกระจกฝ้าอยู่ (มือถือ)

function renderNav(items) {
  const groupOrder = Object.keys(NAV_GROUPS)
  document.getElementById('council-sidebar-nav').innerHTML = groupOrder.map(g => {
    const groupItems = items.filter(it => it.group === g)
    if (!groupItems.length) return ''
    return `
      <div class="pb-2">
        <p class="text-[11px] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${esc(NAV_GROUPS[g].label)}</p>
        ${groupItems.map(it => `
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${it.id === activeView ? 'bg-[var(--hero-3)] text-white' : 'text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white'}" data-view="${it.id}">
            <span>${it.icon}</span> ${esc(it.label)}
            ${it.badge ? `<span class="ml-auto bg-[var(--gold)] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">${it.badge}</span>` : ''}
          </button>`).join('')}
      </div>`
  }).join('')

  // แถบล่างมือถือ — จัดกลุ่มตาม NAV_GROUPS ไม่เกิน 5 ปุ่ม (สเปคข้อ 5) กลุ่มที่มีหลายหน้า
  // กดแล้วเด้งแคปซูลกระจกฝ้าลอยขึ้นแทนเปลี่ยนหน้าตรงๆ
  const groupsWithItems = groupOrder
    .map(g => ({ id: g, ...NAV_GROUPS[g], items: items.filter(it => it.group === g) }))
    .filter(g => g.items.length)
  const activeGroupId = (groupsWithItems.find(g => g.items.some(it => it.id === activeView)) || groupsWithItems[0])?.id
  document.getElementById('council-bottom-tabs').innerHTML = `<div class="flex">${groupsWithItems.map(g => {
    const on = g.id === activeGroupId
    const badge = g.items.reduce((n, it) => n + (it.badge || 0), 0)
    return `
    <button type="button" class="council-nav-group-btn relative flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${on ? 'text-[var(--primary)]' : 'text-[var(--muted)]'}" data-group="${g.id}">
      <span class="text-xl">${g.icon}</span>
      <span class="text-[10px] font-medium">${esc(g.label)}</span>
      ${badge ? `<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">${badge}</span>` : ''}
    </button>`
  }).join('')}</div>`

  document.querySelectorAll('.council-nav-link').forEach(btn => {
    btn.addEventListener('click', () => { activeView = btn.dataset.view; render() })
  })
  document.querySelectorAll('.council-nav-group-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const g = groupsWithItems.find(x => x.id === btn.dataset.group)
      if (g.items.length === 1) { activeView = g.items[0].id; mobileSheetGroup = null; render() }
      else { mobileSheetGroup = mobileSheetGroup === g.id ? null : g.id; renderMobileSheet(items) }
    })
  })

  const activeItem = items.find(it => it.id === activeView)
  document.getElementById('council-view-title').textContent = activeItem?.label ?? 'หน้าหลัก'
  renderMobileSheet(items)
}

// แคปซูลกระจกฝ้าลอย — เมนูย่อยของกลุ่มที่มีหลายหน้า (มือถือเท่านั้น)
function renderMobileSheet(items) {
  const el = document.getElementById('council-mobile-sheet')
  if (!el) return
  if (!mobileSheetGroup) { el.innerHTML = ''; return }
  const groupItems = items.filter(it => it.group === mobileSheetGroup)
  el.innerHTML = `
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${groupItems.map((it, i) => `
            <button type="button" class="mobile-sheet-item text-left border ${it.id === activeView ? 'border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]' : 'border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]'}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${it.id}">
              <span class="text-base">${it.icon}</span><span>${esc(it.label)}</span>
              ${it.badge ? `<span class="ml-auto bg-[var(--gold)] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">${it.badge}</span>` : ''}
            </button>`).join('')}
        </div>
      </div>
    </div>`
  document.getElementById('mobile-sheet-backdrop').addEventListener('click', e => {
    if (e.target.id === 'mobile-sheet-backdrop') { mobileSheetGroup = null; render() }
  })
  document.querySelectorAll('.mobile-sheet-item').forEach(btn => {
    btn.addEventListener('click', () => { activeView = btn.dataset.view; mobileSheetGroup = null; render() })
  })
}

// ─── การ์ดสถานะสภาส่วนตัว — โผล่เฉพาะคนที่มีใบสมัคร/เป็นสมาชิกอยู่ ─────────────────
function renderPersonalCard() {
  const { applications, membership } = ctx
  if (!applications.length && !membership.length) return ''
  return `
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${membership.map(m => `
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${esc(m.council_positions?.position_name ?? '—')} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${esc(GENDER_LABEL[m.council_positions?.gender] ?? '')})</span></p>
          </div>`).join('')}
        ${applications.map(a => `
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${esc(a.council_positions?.position_name ?? '—')}</p>
              <p class="text-[11px] text-[var(--primary-45)]">${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${esc(APPLICATION_STATUS_LABEL[a.status] ?? a.status)}</span>
          </div>`).join('')}
      </div>
    </div>`
}

function cardShell(title, body, gotoView, linkLabel) {
  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${title}</p>
        ${gotoView ? `<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${gotoView}">${esc(linkLabel)} →</button>` : ''}
      </div>
      ${body}
    </div>`
}

// ข้อความพาดหัว/คำอธิบายฮีโร่ — ต่างกันตามบทบาท (สเปคข้อ 8.1) แยกจากป้ายสถานะการมองเห็นระบบ
// เดิมสองอย่างนี้ปนอยู่บรรทัดเดียวกัน แก้แยกออกจากกันตามที่ผู้ใช้ทักท้วง 2026-08-16
function homeHeroCopy() {
  if (ctx.isChair) return ['ยินดีต้อนรับประธานสภานักเรียน', 'ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่']
  if (ctx.membership.length) return ['ยินดีต้อนรับสมาชิกสภานักเรียน', 'ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ']
  if (ctx.isCouncilAdvisor) return ['ครูที่ปรึกษาสภานักเรียน', 'ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา']
  if (ctx.isAdmin) return ['จัดการระบบสภานักเรียน', 'ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล']
  if (ctx.role === 'teacher' && ctx.pendingEndorsements.length) return ['รับรองผู้สมัครสภานักเรียน', 'ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ']
  return ['ระบบสภานักเรียน', 'ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน']
}

function renderHomeHero() {
  const cfg = ctx.cfg
  const termLabel = (cfg.council_term_start_semester && cfg.council_term_start_year)
    ? `ภาคเรียนที่ ${esc(cfg.council_term_start_semester)}/${esc(cfg.council_term_start_year)} – ภาคเรียนที่ ${esc(cfg.council_term_end_semester || cfg.council_term_start_semester)}/${esc(cfg.council_term_end_year || cfg.council_term_start_year)}`
    : null
  const visible = cfg.council_visible_to_all !== 'false'
  const [headline, sub] = homeHeroCopy()

  // แถบแจ้งสถานะการมองเห็นระบบ — แยกจากฮีโร่ เห็นเฉพาะแอดมิน/ครูที่ปรึกษาสภา (คนอื่นที่เข้าถึง
  // หน้านี้ได้แปลว่าผ่านเงื่อนไข test code อยู่แล้ว ไม่จำเป็นต้องเห็นสถานะภายในนี้)
  const visibilityAlert = (ctx.isAdmin || ctx.isCouncilAdvisor) ? `
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${visible ? 'bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]' : 'bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]'}">
      <span>${visible ? '✅' : '🔒'}</span>
      <span>${visible ? 'ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว' : 'ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น'}</span>
    </div>` : ''

  return `
    ${visibilityAlert}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${termLabel ? `<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${termLabel}</span>` : ''}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${esc(headline)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${esc(sub)}</p>
      ${ctx.isAdmin || ctx.isChair ? `
      <div class="flex flex-wrap gap-2 mt-4">
        ${ctx.isAdmin ? `<a href="dashboard.html" class="px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90">⚙️ ตั้งค่าระบบ</a>` : ''}
        <a href="council-election.html" target="_blank" class="px-4 py-2 rounded-[10px] bg-white/10 border border-white/25 text-white text-sm font-bold hover:bg-white/20">🗳️ หน้าลงคะแนน</a>
      </div>` : ''}
    </div>`
}

function renderHomeActivitySummary() {
  if (activities === null) { loadActivities(); return cardShell('📅 กิจกรรมประจำปี', '<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>') }
  const counts = {}
  activities.forEach(a => { counts[a.status] = (counts[a.status] ?? 0) + 1 })
  const tiles = `
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${ACT_SUMMARY_TILES.map(([k, label, box, num]) => `
        <div class="rounded-[10px] border ${box} p-2 text-center">
          <p class="text-lg font-bold ${num}">${counts[k] ?? 0}</p>
          <p class="text-[10px] text-[var(--muted)]">${label}</p>
        </div>`).join('')}
    </div>`
  const upcoming = [...activities].sort((a, b) => new Date(a.activity_date || 0) - new Date(b.activity_date || 0)).slice(0, 5)
  const list = upcoming.length ? `
    <div class="space-y-0.5">
      ${upcoming.map(a => {
        const [label, fg, bg] = ACT_STATUS_BADGE[a.status] ?? ['—', 'text-[var(--muted)]', 'bg-[var(--bg-2)]']
        return `
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(a.title)}</p>
            <p class="text-[11px] text-[var(--muted-2)]">${a.activity_date ? new Date(a.activity_date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'} ${a.owner_text ? '· ' + esc(a.owner_text) : ''}</p>
          </div>
          <span class="flex-shrink-0 text-[10px] font-bold px-2 py-1 rounded-full ${bg} ${fg}">${label}</span>
        </div>`
      }).join('')}
    </div>` : `<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>`
  return cardShell('📅 กิจกรรมประจำปี', tiles + list, 'activities', 'ดูทั้งหมด')
}

function renderHomeCouncilPreview() {
  const chairs = ['M', 'W'].map(g => ctx.members.find(m => m.status === 'active' && m.council_positions?.gender === g && m.council_positions?.is_elected))
  const body = chairs.some(Boolean) ? `
    <div class="space-y-3">
      ${chairs.map((m, i) => {
        const g = i === 0 ? 'M' : 'W'
        if (!m) return `<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${GENDER_LABEL[g]}</div>`
        const isW = g === 'W'
        return `
        <div class="flex items-center gap-3 rounded-xl border p-3 ${isW ? 'bg-[var(--pink-soft)] border-[var(--pink-soft-line)]' : 'bg-[var(--primary-soft)] border-[var(--primary-soft-line)]'}">
          ${studentPhoto(m.students, 'w-12 h-16')}
          <div class="min-w-0">
            <p class="text-[11px] font-bold ${isW ? 'text-[var(--pink)]' : 'text-[var(--primary)]'}">${esc(m.council_positions?.position_name ?? ('ประธานสภานักเรียนฝ่าย' + GENDER_LABEL[g]))}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(m.students?.full_name ?? '—')}</p>
            <p class="text-xs text-[var(--muted)]">${esc(m.students?.main_room ?? '')}</p>
          </div>
        </div>`
      }).join('')}
    </div>` : `<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>`
  return cardShell('🏛️ สภานักเรียนชุดปัจจุบัน', body, 'roster', 'ดูโครงสร้าง')
}

function renderOverviewView() {
  const hero = renderHomeHero()
  const personal = renderPersonalCard()
  const entryCard = (flow, icon, label, sub) => `
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${flow}">
      <p class="text-2xl mb-1">${icon}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${esc(label)}</p>
      ${sub ? `<p class="text-[11px] text-[var(--muted-2)] mt-0.5">${esc(sub)}</p>` : ''}
    </button>`
  const hasElection = ctx.elections.length > 0
  // ยังไม่มี council_election_config เลย — ซ่อนปุ่มไปเลยสำหรับคนทั่วไป ส่วนแอดมิน
  // ยังเห็นปุ่มไว้พาไปตั้งค่าเปิดใช้งานได้ แต่เปลี่ยนข้อความให้ตรงสถานะจริง ไม่ใช่กล่องว่าง
  const showElectionEntry = hasElection || ctx.isAdmin
  const electionEntry = showElectionEntry
    ? entryCard('election', '🗳️', hasElection ? 'การเลือกตั้ง' : 'ตั้งค่าการเลือกตั้ง', hasElection ? '' : 'ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า')
    : ''
  const cols = ctx.role === 'student' && showElectionEntry ? 'grid-cols-2' : 'grid-cols-1'
  const entryCards = (ctx.role === 'student' || showElectionEntry) ? `
    <div class="grid ${cols} gap-3">
      ${ctx.role === 'student' ? entryCard('apply', '📝', 'สมัครสภานักเรียน') : ''}
      ${electionEntry}
    </div>` : ''
  return `<div class="space-y-4">
    ${hero}
    ${personal}
    ${entryCards}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${renderHomeActivitySummary()}
      ${renderHomeCouncilPreview()}
    </div>
  </div>`
}

// ─── สมัครสภานักเรียน — เฉพาะนักเรียนที่เชื่อมบัญชีแล้ว ─────────────────────────────
function renderApplyView() {
  if (ctx.role !== 'student') return ''
  if (!ctx.student) {
    return `<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`
  }

  const gender = normalizeGender(ctx.student.gender)
  const positionsForGender = ctx.positions.filter(p => p.gender === gender)
  const appliedIds = new Set(ctx.applications.filter(a => a.status !== 'rejected').map(a => a.position_id))
  const openPositions = positionsForGender.filter(p => !appliedIds.has(p.id))

  if (!gender) {
    return `<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`
  }

  if (!showApplyForm) {
    return `
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${openPositions.length ? '' : 'opacity-50 pointer-events-none'}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${GENDER_LABEL[gender]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${openPositions.length ? `เปิดรับ ${openPositions.length} ตำแหน่ง` : 'ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)'}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`
  }

  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <p class="text-sm font-bold text-[var(--primary-dark)] mb-3">📝 ใบสมัครสภานักเรียน${GENDER_LABEL[gender]}</p>
      <form id="apply-form" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
          <select id="apply-position" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="">— เลือกตำแหน่ง —</option>
            ${openPositions.map(p => `<option value="${p.id}">${esc(p.position_name)}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
          <textarea id="apply-motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก"
            class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปภาพ (ถ้ามี)</label>
          <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-cancel-apply" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
          <button type="submit" id="btn-submit-apply" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ส่งใบสมัคร</button>
        </div>
      </form>
    </div>`
}

// ─── ใบสมัครของฉัน — ประวัติ+สถานะใบสมัครทุกใบ + สมาชิกภาพปัจจุบัน (subtab ในโฟลว์สมัคร) ──
function renderMyApplicationsList() {
  if (!ctx.student) return ''
  if (!ctx.applications.length && !ctx.membership.length) {
    return `<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>`
  }
  return `
    <div class="space-y-2">
      ${ctx.membership.map(m => `
        <div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-xl p-3">
          <p class="text-xs text-[var(--ok)] font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-[#0d4d36]">${esc(m.council_positions?.position_name ?? '—')} <span class="text-xs font-normal">(สภา${esc(GENDER_LABEL[m.council_positions?.gender] ?? '')})</span></p>
        </div>`).join('')}
      ${ctx.applications.map(a => `
        <div class="bg-[var(--surface)] rounded-xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 flex items-center justify-between gap-2">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(a.council_positions?.position_name ?? '—')}</p>
            <p class="text-xs text-[var(--muted-2)]">${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
            ${a.motivation ? `<p class="text-xs text-[var(--muted)] mt-1">${esc(a.motivation)}</p>` : ''}
          </div>
          <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${esc(APPLICATION_STATUS_LABEL[a.status] ?? a.status)}</span>
        </div>`).join('')}
    </div>`
}

// ─── สถานะการเลือกตั้ง — โหวตจริง (นักเรียน) + ตั้งช่วงเวลา/ประกาศผล+แต่งตั้ง (แอดมิน) ──────
function electionOf(gender) {
  return ctx.elections.find(e => e.gender === gender && e.academic_year === electionYear) || null
}

async function loadCandidates(gender, electionConfigId) {
  candidatesByGender[gender] = await getCandidatesForElection(electionConfigId).catch(() => [])
  render()
}

function renderElectionView() {
  return `<div class="space-y-4">${['M', 'W'].map(renderElectionBlock).join('')}</div>`
}

function renderElectionBlock(gender) {
  const e = electionOf(gender)
  const myGender = ctx.student ? normalizeGender(ctx.student.gender) : null
  const isMine = ctx.role === 'student' && myGender === gender

  if (!e) {
    return `
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${GENDER_LABEL[gender]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${ctx.isAdmin ? `<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${gender}">เปิดใช้งานการเลือกตั้ง</button>` : ''}
      </div>`
  }

  const now = new Date()
  const opens = e.opens_at ? new Date(e.opens_at) : null
  const closes = e.closes_at ? new Date(e.closes_at) : null
  const isOpen = !!(opens && opens <= now && (!closes || closes > now))
  const isClosed = !!(closes && closes <= now)
  const published = !!e.results_published_at

  const status = published ? { label: '✅ ประกาศผลแล้ว', cls: 'bg-[var(--ok-soft-line)] text-[#106143]' }
    : isClosed ? { label: '🔒 ปิดโหวตแล้ว รอประกาศผล', cls: 'bg-[var(--gold-soft-line)] text-[var(--gold-ink)]' }
    : isOpen ? { label: '🗳️ กำลังเปิดโหวต', cls: 'bg-[var(--primary-soft-line)] text-[var(--primary-dark)]' }
    : { label: '⏳ ยังไม่เปิดโหวต', cls: 'bg-[var(--bg-2)] text-[var(--muted)]' }

  let body = ''
  if (published) {
    const winner = ctx.members.find(m => m.council_positions?.gender === gender && m.council_positions?.is_elected)
    body = winner ? `
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${studentPhoto(winner.students, 'w-12 h-16')}
        <div class="min-w-0">
          <p class="text-[11px] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(winner.students?.full_name ?? '—')}</p>
        </div>
      </div>` : `<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>`
  } else if (isOpen && isMine) {
    // ⚠️ โหวตต้องทำที่จุดลงคะแนนแยก (council-election.html) เท่านั้น — ห้ามโหวตผ่าน session
    // ที่ล็อกอินอยู่ในมือถือตัวเอง (ตัดสินใจย้ำ 2026-08-15) หน้านี้แจ้งสถานะอย่างเดียว
    body = `
      <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-[var(--primary-dark)]">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[11px] text-[var(--muted)] mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`
  } else if (isClosed && !published) {
    body = `<p class="text-xs text-[var(--muted-2)] mt-2">รอผู้ดูแลระบบประกาศผล</p>`
  } else if (!isOpen && !isClosed) {
    body = `<p class="text-xs text-[var(--muted-2)] mt-2">${e.opens_at ? 'เปิดโหวต ' + new Date(e.opens_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : ''}</p>`
  }

  let adminCtrl = ''
  if (ctx.isAdmin) {
    adminCtrl = `
      <div class="mt-3 pt-3 border-t border-[var(--line-soft)] space-y-2">
        <form class="election-window-form flex flex-wrap gap-2 items-end" data-election-id="${e.id}">
          <label class="text-[11px] text-[var(--muted-2)]">เปิดโหวต<br><input type="datetime-local" name="opens_at" value="${e.opens_at ? e.opens_at.slice(0, 16) : ''}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <label class="text-[11px] text-[var(--muted-2)]">ปิดโหวต<br><input type="datetime-local" name="closes_at" value="${e.closes_at ? e.closes_at.slice(0, 16) : ''}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <button type="submit" class="px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] text-xs font-bold">บันทึกช่วงเวลา</button>
        </form>
        ${isClosed && !published ? `<button type="button" class="btn-publish-results px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-election-id="${e.id}" data-gender="${gender}">📢 ประกาศผล+แต่งตั้ง</button>` : ''}
        <p class="text-[11px] text-[var(--muted-2)]">🔗 หน้าโหวต (เปิดที่จุดลงคะแนนเท่านั้น): <a href="council-election.html" target="_blank" class="text-[var(--primary)] underline">council-election.html</a></p>
      </div>`
  }

  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${GENDER_LABEL[gender]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${status.cls}">${status.label}</span>
      </div>
      ${body}
      ${adminCtrl}
    </div>`
}

// ─── ผู้สมัครเลือกตั้ง (public browse) ──────────────────────────────────────────
function renderCandidatesView() {
  const block = gender => {
    const e = electionOf(gender)
    const head = `<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${GENDER_LABEL[gender]}</p>`
    if (!e) return `<div>${head}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`
    const list = candidatesByGender[gender]
    if (list === undefined) { loadCandidates(gender, e.id); return `<div>${head}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>` }
    if (!list.length) return `<div>${head}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`
    return `
      <div>
        ${head}
        <div class="space-y-2">
          ${list.map(c => `
            <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)]">
              <div class="w-8 h-8 rounded-full bg-[var(--primary-soft-line)] text-[var(--primary-dark)] grid place-items-center font-bold text-sm flex-shrink-0">${c.ballot_number}</div>
              ${studentPhoto(c.students)}
              <div class="min-w-0 flex-1">
                <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(c.students?.full_name ?? '—')}</p>
                <p class="text-xs text-[var(--muted)]">${esc(c.students?.main_room ?? '')}</p>
                ${c.campaign_statement ? `<p class="text-xs text-[var(--muted)] mt-1">${esc(c.campaign_statement)}</p>` : ''}
              </div>
            </div>`).join('')}
        </div>
      </div>`
  }
  return `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${block('M')}${block('W')}</div>`
}

// ─── จัดการใบสมัคร (แอดมิน) — รับรองแล้ว → นัดสัมภาษณ์ → ให้คะแนน → ตั้งผู้สมัคร/แต่งตั้ง ──
const PIPELINE_STATUS_BADGE = {
  pending: ['รอนัดสัมภาษณ์', 'bg-[var(--bg-2)] text-[var(--muted)]'],
  interview_scheduled: ['นัดสัมภาษณ์แล้ว รอให้คะแนน', 'bg-[var(--gold-soft-line)] text-[var(--gold-ink)]'],
  interviewed: ['ผ่านสัมภาษณ์', 'bg-[var(--ok-soft-line)] text-[#106143]'],
  candidate: ['ผู้สมัครเลือกตั้ง', 'bg-[var(--primary-soft-line)] text-[var(--primary-dark)]'],
  appointed: ['แต่งตั้งแล้ว', 'bg-[#e3f1ef] text-[var(--teal)]'],
  rejected: ['ไม่ผ่าน', 'bg-[var(--bad-soft-line)] text-[#8a2f22]'],
}

async function loadAdminApps() {
  adminApps = await getCouncilApplicationsForAdmin(electionYear).catch(() => [])
  render()
}

function renderApplicationsAdminView() {
  if (!ctx.isAdmin) return ''
  if (adminApps === null) { loadAdminApps(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (!adminApps.length) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครที่ครูที่ปรึกษารับรองแล้ว</p>`

  const card = a => {
    const iv = a.council_interviews?.[0]
    const [label, cls] = PIPELINE_STATUS_BADGE[a.status] ?? ['—', 'bg-[var(--bg-2)] text-[var(--muted)]']
    const isElected = !!a.council_positions?.is_elected
    return `
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${a.id}">
      <div class="flex items-center gap-3">
        ${studentPhoto(a.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(a.students?.full_name ?? '—')}</p>
          <p class="text-xs text-[var(--muted)]">${esc(a.students?.student_code ?? '')} · ${esc(a.students?.main_room ?? '')} · ${esc(a.council_positions?.position_name ?? '—')} (สภา${esc(GENDER_LABEL[a.council_positions?.gender] ?? '')})</p>
        </div>
        <span class="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full ${cls}">${label}</span>
      </div>
      ${a.motivation ? `<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${esc(a.motivation)}</p>` : ''}
      ${a.endorsement_comment ? `<p class="text-[11px] text-[var(--ok)]">✅ ครูที่ปรึกษา: ${esc(a.endorsement_comment)}</p>` : ''}

      ${a.status === 'pending' ? `
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${a.id}" data-iv-id="${iv?.id ?? ''}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" />
          </div>
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>` : ''}

      ${a.status === 'interview_scheduled' ? `
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${iv?.scheduled_at ? new Date(iv.scheduled_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : '—'} ${iv?.location ? '· ' + esc(iv.location) : ''}</p>
          <form class="score-form space-y-2" data-app-id="${a.id}" data-iv-id="${iv?.id ?? ''}">
            <p class="text-xs font-semibold text-[var(--muted)]">บันทึกผลสัมภาษณ์</p>
            <div class="grid grid-cols-2 gap-2">
              <input type="number" name="score" min="0" max="100" placeholder="คะแนน (0-100)" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" />
              <select name="result" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
                <option value="">— ผลสัมภาษณ์ —</option>
                <option value="pass">ผ่าน</option>
                <option value="fail">ไม่ผ่าน</option>
              </select>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none"></textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>` : ''}

      ${a.status === 'interviewed' ? `
        <div class="pt-1 border-t border-[var(--line-soft)]">
          ${isElected
            ? `<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${a.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`
            : `<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${a.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>` : ''}

      ${a.status === 'candidate' ? `<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${a.council_candidates?.[0]?.ballot_number ?? '—'} · รอผลเลือกตั้ง</p>` : ''}
      ${a.status === 'rejected' && iv?.comment ? `<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${esc(iv.comment)}</p>` : ''}
    </div>`
  }
  return `<div class="space-y-3">${adminApps.map(card).join('')}</div>`
}

// ─── รายชื่อสภานักเรียนปัจจุบัน (public, จัดกลุ่มตามเพศ→ตำแหน่ง) ──────────────────
function renderRosterView() {
  const byGender = { M: [], W: [] }
  ctx.members.forEach(m => { if (byGender[m.council_positions?.gender]) byGender[m.council_positions.gender].push(m) })

  const genderBlock = g => {
    const list = byGender[g].slice().sort((a, b) => (a.council_positions?.sort_order ?? 99) - (b.council_positions?.sort_order ?? 99))
    return `
      <div>
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภานักเรียน${GENDER_LABEL[g]}</p>
        ${list.length ? `<div class="space-y-2">${list.map(m => `
          <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-2.5 bg-[var(--surface)]">
            ${studentPhoto(m.students)}
            <div class="min-w-0 flex-1">
              <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(m.students?.full_name ?? '—')}</p>
              <p class="text-xs text-[var(--muted)]">${esc(m.council_positions?.position_name ?? '—')}</p>
            </div>
          </div>`).join('')}</div>`
          : `<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีข้อมูลสมาชิกสภา${GENDER_LABEL[g]}</p>`}
      </div>`
  }

  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      ${genderBlock('M')}
      ${genderBlock('W')}
    </div>`
}

// ─── คิว "รอฉันยืนยัน" — เฉพาะครูที่ปรึกษาสามัญของห้องที่มีใบสมัครค้างอยู่ ─────────────
function renderEndorseView() {
  if (ctx.role !== 'teacher' || !ctx.teacher) return ''
  if (!ctx.pendingEndorsements.length) {
    return `<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>`
  }

  const card = a => `
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${a.id}">
      <div class="flex items-center gap-3">
        ${studentPhoto(a.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(a.students?.full_name ?? '—')}</p>
          <p class="text-xs text-[var(--muted)]">${esc(a.students?.student_code ?? '')} · ${esc(a.students?.main_room ?? '')} · สมัคร${esc(a.council_positions?.position_name ?? '—')}</p>
        </div>
      </div>
      ${a.motivation ? `<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${esc(a.motivation)}</p>` : ''}
      <div class="flex flex-wrap gap-1.5">
        ${ctx.endorsementPhrases.map(p => `
          <button type="button" class="endorse-phrase-chip text-[11px] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
            data-target="${a.id}" data-phrase="${esc(p.phrase)}">${esc(p.phrase)}</button>`).join('')}
      </div>
      <textarea class="endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${a.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-[var(--bad-soft-line)] text-[#8a2f22] text-xs font-bold hover:bg-[var(--bad-soft)]" data-id="${a.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${a.id}">✅ รับรอง</button>
      </div>
    </div>`

  return `<div class="space-y-3">${ctx.pendingEndorsements.map(card).join('')}</div>`
}

async function handleEndorsement(applicationId, action) {
  const ta = document.querySelector(`.endorse-comment[data-id="${applicationId}"]`)
  const comment = ta?.value.trim() ?? ''
  if (!comment) { showToast('กรุณาใส่คอมเมนต์ก่อนยืนยัน', 'warning'); return }
  try {
    if (action === 'confirm') {
      await confirmApplicationEndorsement({ applicationId: Number(applicationId), teacherId: ctx.teacher.id, comment })
      showToast('รับรองใบสมัครแล้ว ✅', 'success')
    } else {
      await declineApplicationEndorsement({ applicationId: Number(applicationId), teacherId: ctx.teacher.id, comment })
      showToast('บันทึกผล "ไม่รับรอง" แล้ว', 'success')
    }
    await refreshPendingEndorsements()
    render()
  } catch (err) {
    showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  }
}

// ─── กิจกรรมประจำปีของสภา — public browse + แอดมิน/ประธานสภาจัดการ+เช็คชื่อ ──────────────
const ACT_STATUS_BADGE = {
  planned: ['ยังไม่จัด', 'text-[var(--gold-ink)]', 'bg-[var(--gold-soft-line)]', 'border-[var(--gold-soft-line)]'],
  ongoing: ['กำลังดำเนินการ', 'text-[var(--primary-dark)]', 'bg-[var(--primary-soft-line)]', 'border-[var(--primary-45)]'],
  completed: ['เสร็จแล้ว', 'text-[#106143]', 'bg-[var(--ok-soft-line)]', 'border-[var(--ok-soft-line)]'],
  cancelled: ['ยกเลิก', 'text-[var(--muted-2)]', 'bg-[var(--surface-2)]', 'border-[var(--line)]'],
}
const ACT_SUMMARY_TILES = [
  ['completed', 'เสร็จแล้ว', 'border-[var(--ok-soft-line)] bg-[var(--ok-soft)]', 'text-[var(--ok)]'],
  ['ongoing', 'กำลังดำเนินการ', 'border-[var(--primary-soft-line)] bg-[var(--primary-soft)]', 'text-[var(--primary)]'],
  ['planned', 'ยังไม่จัด', 'border-[var(--gold-soft-line)] bg-[var(--gold-soft)]', 'text-[var(--gold-ink)]'],
  ['cancelled', 'ยกเลิก', 'border-[var(--line-soft)] bg-[var(--surface-2)]', 'text-[var(--muted-2)]'],
]
const ACT_NEXT_STATUS = { planned: 'ongoing', ongoing: 'completed' }
const ACT_NEXT_LABEL = { planned: '▶️ เริ่มดำเนินการ', ongoing: '✅ ทำเครื่องหมายเสร็จแล้ว' }

async function loadActivities() {
  activities = await getCouncilActivities(electionYear).catch(() => [])
  render()
}

async function loadAttendance(activityId) {
  attendanceByActivity[activityId] = await getActivityAttendance(activityId).catch(() => new Set())
  render()
}

function renderActivitiesView() {
  if (activities === null) { loadActivities(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  const canManage = ctx.isAdmin || ctx.isChair
  const counts = {}
  activities.forEach(a => { counts[a.status] = (counts[a.status] ?? 0) + 1 })

  const summary = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${ACT_SUMMARY_TILES.map(([k, label, box, num]) => `
        <div class="rounded-xl border ${box} p-3 text-center">
          <p class="text-2xl font-bold ${num}">${counts[k] ?? 0}</p>
          <p class="text-[11px] text-[var(--muted)]">${label}</p>
        </div>`).join('')}
    </div>`

  const createForm = canManage ? `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">➕ สร้างกิจกรรมใหม่</p>
      <form id="activity-form" class="space-y-2">
        <input name="title" required placeholder="ชื่อกิจกรรม" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="detail" rows="2" placeholder="รายละเอียด (ถ้ามี)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="activity_date" type="date" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
          <input name="budget" type="number" step="0.01" placeholder="งบประมาณ (บาท)" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <select name="gender" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="">สภาชาย+หญิงร่วมกัน</option>
            <option value="M">สภาชายเท่านั้น</option>
            <option value="W">สภาหญิงเท่านั้น</option>
          </select>
          <input name="owner_text" placeholder="ฝ่าย/ผู้รับผิดชอบ" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">สร้างกิจกรรม</button>
      </form>
    </div>` : ''

  if (!activities.length) return `${summary}${createForm}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`

  const card = a => {
    const [label, fg, bg, border] = ACT_STATUS_BADGE[a.status] ?? ['—', 'text-[var(--muted)]', 'bg-[var(--bg-2)]', 'border-[var(--line)]']
    const members = ctx.members.filter(m => !a.gender || m.council_positions?.gender === a.gender)
    const attendance = attendanceByActivity[a.id]
    return `
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${a.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${esc(a.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${a.activity_date ? new Date(a.activity_date).toLocaleDateString('th-TH', { dateStyle: 'medium' }) : 'ยังไม่กำหนดวัน'} ${a.gender ? '· สภา' + GENDER_LABEL[a.gender] : ''} ${a.owner_text ? '· ' + esc(a.owner_text) : ''}</p>
          </div>
          <span class="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full border ${border} ${bg} ${fg}">${label}</span>
        </div>
        ${a.detail ? `<p class="text-xs text-[var(--ink-2)]">${esc(a.detail)}</p>` : ''}
        ${canManage ? `
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            ${ACT_NEXT_STATUS[a.status] ? `<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${a.id}" data-next="${ACT_NEXT_STATUS[a.status]}">${ACT_NEXT_LABEL[a.status]}</button>` : ''}
            ${a.status !== 'cancelled' && a.status !== 'completed' ? `<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">ยกเลิก</button>` : ''}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">👥 เช็คชื่อสมาชิก</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${a.id}">
            ${attendance ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${members.map(m => {
                  const done = attendance.has(m.id)
                  return `<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${done ? 'border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]' : 'border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]'}" data-activity-id="${a.id}" data-member-id="${m.id}" ${done ? 'disabled' : ''}>
                    <span>${done ? '✅' : '➕'}</span><span class="truncate">${esc(m.students?.full_name ?? '—')}</span>
                  </button>`
                }).join('')}
                ${!members.length ? '<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>' : ''}
              </div>` : ''}
          </div>` : ''}
      </div>`
  }

  return `${summary}${createForm}<div class="space-y-3">${activities.map(card).join('')}</div>`
}

// ─── ประกาศสภานักเรียน — feed+ปักหมุด+รับทราบ, โพสต์ได้เฉพาะแอดมิน/ประธานสภา ────────────────
const ANN_TYPE_BADGE = {
  info: ['แจ้งให้ทราบ', 'text-[var(--primary-dark)]', 'bg-[var(--primary-soft-line)]', 'border-[var(--primary-45)]'],
  ack: ['ต้องกดรับทราบ', 'text-[var(--gold-ink)]', 'bg-[var(--gold-soft-line)]', 'border-[var(--gold-soft-line)]'],
  urgent: ['ด่วน', 'text-[#8a2f22]', 'bg-[var(--bad-soft-line)]', 'border-[var(--bad-soft-line)]'],
}

async function loadAnnouncements() {
  announcements = await getCouncilAnnouncements().catch(() => [])
  render()
}

async function loadMyAcks() {
  myAcks = await getMyAnnouncementAcks(ctx.student.id).catch(() => new Set())
  render()
}

function renderNewsView() {
  if (announcements === null) { loadAnnouncements(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (ctx.role === 'student' && ctx.student && myAcks === null) loadMyAcks()
  const canPost = ctx.isAdmin || ctx.isChair

  const visible = announcements.filter(a => a.audience === 'all' || a.audience === (ctx.student ? normalizeGender(ctx.student.gender) : null) || ctx.isAdmin || ctx.isChair)
  const filtered = annFilter === 'all' ? visible : visible.filter(a => a.type === annFilter)

  const postBtn = canPost ? `<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>` : ''

  const form = (canPost && showAnnForm) ? `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📣 ประกาศใหม่</p>
      <form id="announcement-form" class="space-y-2">
        <input name="title" required placeholder="หัวเรื่องประกาศ" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="body" rows="3" placeholder="รายละเอียด" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <select name="type" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="info">แจ้งให้ทราบ</option>
            <option value="ack">ต้องกดรับทราบ</option>
            <option value="urgent">ด่วน</option>
          </select>
          <select name="audience" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="all">ทุกคน</option>
            <option value="M">สภาชาย</option>
            <option value="W">สภาหญิง</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-xs text-[var(--muted)]"><input type="checkbox" name="pinned" class="rounded" /> ปักหมุดไว้บนสุด</label>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-cancel-ann" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
          <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เผยแพร่ประกาศ</button>
        </div>
      </form>
    </div>` : ''

  const filters = [['all', 'ทั้งหมด'], ['urgent', 'ด่วน'], ['ack', 'ต้องรับทราบ'], ['info', 'แจ้งให้ทราบ']]
  const filterBar = `
    <div class="flex gap-2 overflow-x-auto pb-1 mb-4">
      ${filters.map(([k, label]) => `
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${annFilter === k ? 'bg-[var(--primary)] text-white border-[var(--primary)]' : 'bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]'}" data-filter="${k}">${label}</button>`).join('')}
    </div>`

  if (!filtered.length) return `${postBtn}${form}${filterBar}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`

  const card = a => {
    const [label, fg, bg, border] = ANN_TYPE_BADGE[a.type] ?? ANN_TYPE_BADGE.info
    const author = a.teachers?.full_name ? esc(a.teachers.full_name) + ' (ครู)' : a.students?.full_name ? esc(a.students.full_name) + ' (ประธานสภา)' : 'ระบบ'
    const acked = myAcks?.has(a.id)
    const needsAck = a.type === 'ack' && ctx.role === 'student' && ctx.student
    return `
      <div class="rounded-xl border ${a.pinned ? 'border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40' : 'border-[var(--line-soft)] bg-[var(--surface)]'} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${a.pinned ? '<span class="text-[11px] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>' : ''}
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-full border ${border} ${bg} ${fg}">${label}</span>
          ${a.audience !== 'all' ? `<span class="text-[11px] text-[var(--muted-2)]">สภา${GENDER_LABEL[a.audience] ?? ''}</span>` : ''}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${esc(a.title)}</p>
        ${a.body ? `<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${esc(a.body)}</p>` : ''}
        <p class="text-[11px] text-[var(--muted-2)]">${author} · ${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
        ${needsAck ? (acked
          ? `<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>`
          : `<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${a.id}">รับทราบ</button>`) : ''}
      </div>`
  }

  return `${postBtn}${form}${filterBar}<div class="space-y-3">${filtered.map(card).join('')}</div>`
}

// ─── ประเมินผลปฏิบัติหน้าที่ + เกียรติบัตร — ครู/แอดมินให้คะแนน (ไม่ให้ประธานประเมินตัวเอง) ──
let evalCriteria = null
let evaluations = null // { [memberId]: evaluationRow }
let evalOpenMemberId = null

const DECISION_LABEL = {
  pass: ['ผ่าน', 'text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]'],
  improve: ['ควรปรับปรุง', 'text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]'],
  fail: ['ไม่ผ่าน', 'text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]'],
}

async function loadEvalCriteria() {
  evalCriteria = await getEvaluationCriteria().catch(() => [])
  render()
}
async function loadEvaluations() {
  const rows = await getCouncilEvaluations(electionYear).catch(() => [])
  evaluations = Object.fromEntries(rows.map(r => [r.member_id, r]))
  render()
}

function renderEvalView() {
  if (evalCriteria === null) { loadEvalCriteria(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (evaluations === null) { loadEvaluations(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }

  const canEvaluate = ctx.isAdmin || ctx.role === 'teacher'
  const totalWeight = evalCriteria.reduce((t, c) => t + Number(c.weight), 0)

  const criteriaEditor = canEvaluate ? `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมิน (รวม ${totalWeight} คะแนน)</p>
      <div class="space-y-1.5">
        ${evalCriteria.map(c => `
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${esc(c.name)}</span>
            <span class="font-bold text-[var(--muted)]">${c.weight} คะแนน</span>
            <button type="button" class="btn-remove-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${c.id}">✕</button>
          </div>`).join('')}
      </div>
      <form id="criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มเกณฑ์ใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <input name="weight" type="number" min="1" placeholder="คะแนน" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>` : ''

  const memberCard = m => {
    const ev = evaluations[m.id]
    const [decLabel, decCls] = ev?.decision ? DECISION_LABEL[ev.decision] : ['ยังไม่ประเมิน', 'text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]']
    const isOwn = ctx.role === 'student' && ctx.student && m.student_id === ctx.student.id
    if (!canEvaluate && !isOwn) return ''

    const open = evalOpenMemberId === m.id
    return `
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${m.id}">
        <div class="flex items-center gap-3">
          ${studentPhoto(m.students, 'w-10 h-12')}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(m.students?.full_name ?? '—')}</p>
            <p class="text-xs text-[var(--muted)]">${esc(m.council_positions?.position_name ?? '—')}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[11px] font-bold px-2 py-0.5 rounded-full border ${decCls}">${decLabel}</span>
            ${ev?.total_score != null ? `<p class="text-xs text-[var(--muted-2)] mt-0.5">${ev.total_score}/${ev.max_score ?? totalWeight}</p>` : ''}
          </div>
        </div>
        ${canEvaluate ? `<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${m.id}">${open ? '▲ ซ่อนแบบประเมิน' : (ev ? '✏️ แก้ไขคะแนน' : '📝 ให้คะแนน')}</button>` : ''}
        ${canEvaluate && open ? `
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${m.id}">
            ${evalCriteria.map(c => `
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${esc(c.name)} <span class="text-[var(--muted-2)]">(เต็ม ${c.weight})</span></span>
                <input type="number" min="0" max="${c.weight}" step="0.5" name="c_${c.id}" value="${ev?.scores?.[c.id] ?? ''}" class="w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center" />
              </div>`).join('')}
            <select name="decision" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)]">
              <option value="">— สรุปผล —</option>
              <option value="pass" ${ev?.decision === 'pass' ? 'selected' : ''}>ผ่าน</option>
              <option value="improve" ${ev?.decision === 'improve' ? 'selected' : ''}>ควรปรับปรุง</option>
              <option value="fail" ${ev?.decision === 'fail' ? 'selected' : ''}>ไม่ผ่าน</option>
            </select>
            <textarea name="comment" rows="2" placeholder="ความเห็นผู้ประเมิน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none">${esc(ev?.comment ?? '')}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผลประเมิน</button>
          </form>` : ''}
        ${ev?.decision === 'pass' ? (ev.certificate_issued_at
          ? `<button type="button" class="btn-view-cert text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-member-id="${m.id}">🏅 ดูเกียรติบัตร</button>`
          : (canEvaluate ? `<button type="button" class="btn-issue-cert text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-member-id="${m.id}">🏅 ออกเกียรติบัตร</button>` : '')) : ''}
      </div>`
  }

  const relevant = ctx.members.filter(m => canEvaluate || (ctx.role === 'student' && ctx.student && m.student_id === ctx.student.id))
  const list = relevant.map(memberCard).filter(Boolean).join('')

  if (!canEvaluate && !list) return `${criteriaEditor}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`
  if (!list) return `${criteriaEditor}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`

  return `${criteriaEditor}<div class="space-y-3">${list}</div>`
}

function buildCertificateHtml({ member, evaluation, cfg }) {
  const name = esc(member.students?.full_name ?? '—')
  const position = esc(member.council_positions?.position_name ?? '—')
  const councilName = esc(cfg.council_name || 'ระบบสภานักเรียน')
  const no = esc(evaluation.certificate_no || '')
  const issuedAt = new Date(evaluation.certificate_issued_at || Date.now()).toLocaleDateString('th-TH', { dateStyle: 'long' })
  return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
    <title>เกียรติบัตร ${name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; background: #fdfaf3; padding: 40px; }
      .cert { max-width: 900px; margin: 0 auto; border: 6px double var(--gold); padding: 50px 40px; text-align: center; background: #fffdf8; }
      .badge { width: 74px; height: 74px; border-radius: 50%; border: 2px solid #e2d4ae; background: var(--gold-soft); display: grid; place-items: center; margin: 0 auto 14px; font-size: 24px; color: var(--gold-ink); font-weight: 700; }
      h1 { color: var(--gold-ink); font-size: 34px; margin: 6px 0 18px; }
      .name { font-size: 26px; font-weight: 700; border-bottom: 1px solid #e2d4ae; display: inline-block; padding: 0 24px 8px; margin: 10px 0 18px; }
      .sign { display: flex; justify-content: space-around; margin-top: 60px; }
      .sign div { width: 220px; border-top: 1px solid #999; padding-top: 6px; font-size: 13px; color: #555; }
      @media print { body { background: #fff; padding: 0; } .cert { border-width: 4px; } }
    </style></head>
    <body>
      <div class="cert">
        <div class="badge">🏛️</div>
        <p style="color:var(--muted);font-size:13px;letter-spacing:1px;">${councilName}</p>
        <h1>เกียรติบัตร</h1>
        <p style="color:var(--ink-2);">มอบเพื่อแสดงว่า</p>
        <p class="name">${name}</p>
        <p style="color:var(--ink);line-height:1.9;max-width:560px;margin:0 auto;">ได้ปฏิบัติหน้าที่ <b>${position}</b> ของ${councilName} ด้วยความรับผิดชอบ ทุ่มเท และเป็นแบบอย่างที่ดี จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:var(--muted-2);font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${issuedAt} ${no ? '· เลขที่ ' + no : ''}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
      <div style="text-align:center;margin-top:20px;"><button onclick="window.print()" style="padding:8px 24px;font-size:13px;font-family:Sarabun,sans-serif;border-radius:8px;border:1px solid var(--gold);background:#fff;color:var(--gold-ink);cursor:pointer;">🖨️ พิมพ์ / บันทึกเป็น PDF</button></div>
    </body></html>`
}

function openCertificatePrint(member, evaluation) {
  const win = window.open('', '_blank', 'width=900,height=700')
  if (!win) { showToast('กรุณาอนุญาต Popup ในเบราว์เซอร์', 'warning'); return }
  win.document.open(); win.document.write(buildCertificateHtml({ member, evaluation, cfg: ctx.cfg })); win.document.close()
  setTimeout(() => win.print(), 600)
}

// ─── เอกสารขออนุมัติโครงการ/กิจกรรม — ภายในแอดมิน/ครู/ประธานสภาเท่านั้น ────────────────────
let docs = null
const DOC_STATUS_BADGE = {
  draft: ['ร่าง', 'text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]'],
  pending: ['เสนอขออนุมัติแล้ว', 'text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]'],
  approved: ['อนุมัติแล้ว', 'text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]'],
  rejected: ['ไม่อนุมัติ', 'text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]'],
}

async function loadDocs() {
  docs = await getCouncilDocuments(electionYear).catch(() => [])
  render()
}

function renderDocsView() {
  const canManage = ctx.isAdmin || ctx.role === 'teacher' || ctx.isChair
  if (!canManage) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>`
  if (docs === null) { loadDocs(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  const canDecide = ctx.isAdmin || ctx.role === 'teacher'

  const createForm = `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">➕ ร่างเอกสารขออนุมัติโครงการใหม่</p>
      <form id="doc-form" class="space-y-2">
        <input name="title" required placeholder="ชื่อโครงการ/กิจกรรม" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="rationale" rows="2" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <textarea name="objective" rows="2" placeholder="วัตถุประสงค์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="budget" type="number" step="0.01" placeholder="งบประมาณ (บาท)" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
          <input name="owner_text" placeholder="ผู้รับผิดชอบ" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึกร่าง</button>
      </form>
    </div>`

  if (!docs.length) return `${createForm}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`

  const card = d => {
    const [label, cls] = DOC_STATUS_BADGE[d.status] ?? ['—', 'text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]']
    return `
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${esc(d.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${d.owner_text ? esc(d.owner_text) + ' · ' : ''}${d.budget ? Number(d.budget).toLocaleString('th-TH') + ' บาท' : 'ไม่ระบุงบ'}</p>
          </div>
          <span class="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full border ${cls}">${label}</span>
        </div>
        ${d.rationale ? `<p class="text-xs text-[var(--muted)]"><b>เหตุผล:</b> ${esc(d.rationale)}</p>` : ''}
        ${d.objective ? `<p class="text-xs text-[var(--muted)]"><b>วัตถุประสงค์:</b> ${esc(d.objective)}</p>` : ''}
        ${d.approval_comment ? `<p class="text-xs ${d.status === 'approved' ? 'text-[var(--ok)]' : 'text-[var(--bad)]'}">💬 ${esc(d.approval_comment)}</p>` : ''}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          ${d.status === 'draft' ? `<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${d.id}">📤 เสนอขออนุมัติ</button>` : ''}
          ${d.status === 'pending' && canDecide ? `
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${d.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${d.id}">❌ ไม่อนุมัติ</button>` : ''}
          ${d.status === 'approved' ? `<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${d.id}">🖨️ พิมพ์เอกสาร</button>` : ''}
        </div>
      </div>`
  }

  return `${createForm}<div class="space-y-3">${docs.map(card).join('')}</div>`
}

function buildDocumentHtml(d, cfg) {
  const councilName = esc(cfg.council_name || 'ระบบสภานักเรียน')
  return `<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>โครงการ ${esc(d.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.9; color: var(--ink); }
      h1 { text-align: center; font-size: 20px; margin-bottom: 2px; }
      .sub { text-align: center; color: var(--muted); font-size: 13px; margin-bottom: 24px; }
      .row { margin-bottom: 14px; } .row b { display: block; margin-bottom: 3px; }
      .sign { display: flex; justify-content: space-around; margin-top: 60px; text-align: center; }
      .sign div { width: 220px; border-top: 1px solid #999; padding-top: 6px; font-size: 13px; }
      @media print { body { padding: 0; } }
    </style></head><body>
      <h1>เอกสารขออนุมัติโครงการ/กิจกรรม</h1>
      <p class="sub">${councilName} · ปีการศึกษา ${d.academic_year}</p>
      <div class="row"><b>ชื่อโครงการ</b>${esc(d.title)}</div>
      <div class="row"><b>หลักการและเหตุผล</b>${esc(d.rationale || '—')}</div>
      <div class="row"><b>วัตถุประสงค์</b>${esc(d.objective || '—')}</div>
      <div class="row"><b>งบประมาณ</b>${d.budget ? Number(d.budget).toLocaleString('th-TH') + ' บาท' : 'ไม่ระบุ'}</div>
      <div class="row"><b>ผู้รับผิดชอบ</b>${esc(d.owner_text || '—')}</div>
      <div class="row"><b>สถานะ</b>อนุมัติแล้ว ${d.approval_comment ? '· ' + esc(d.approval_comment) : ''}</div>
      <div class="sign">
        <div>ผู้เสนอโครงการ (ประธานสภานักเรียน)</div>
        <div>ผู้อนุมัติ (ครูที่ปรึกษาสภา/ผู้อำนวยการ)</div>
      </div>
      <div style="text-align:center;margin-top:24px;"><button onclick="window.print()" style="padding:8px 24px;font-size:13px;font-family:Sarabun,sans-serif;border-radius:8px;border:1px solid var(--gold);background:#fff;color:var(--gold-ink);cursor:pointer;">🖨️ พิมพ์ / บันทึกเป็น PDF</button></div>
    </body></html>`
}

function openDocumentPrint(d) {
  const win = window.open('', '_blank', 'width=900,height=700')
  if (!win) { showToast('กรุณาอนุญาต Popup ในเบราว์เซอร์', 'warning'); return }
  win.document.open(); win.document.write(buildDocumentHtml(d, ctx.cfg)); win.document.close()
  setTimeout(() => win.print(), 600)
}

const VIEW_RENDERERS = {
  overview: renderOverviewView,
  endorse: renderEndorseView,
  apps: renderApplicationsAdminView,
  news: renderNewsView,
  activities: renderActivitiesView,
  eval: renderEvalView,
  docs: renderDocsView,
  candidates: renderCandidatesView,
  roster: renderRosterView,
  result: renderElectionView,
}

// เนื้อหาในแต่ละ subtab ของโฟลว์เต็มจอ ("สมัคร"/"เลือกตั้ง") — คนละชุดกับ VIEW_RENDERERS
// ของเมนูหลัก เพราะโฟลว์พวกนี้ไม่ได้อยู่ในเนวิเกชันหลัก
const FLOW_SUBTAB_RENDERERS = {
  apply: { new: renderApplyView, mine: renderMyApplicationsList },
  election: { status: renderElectionView },
}

function render() {
  if (fullscreenFlow) { renderFullscreenFlow(); return }

  setNavChromeVisible(true)

  const items = getNavItems()
  if (!items.some(it => it.id === activeView)) activeView = 'overview'
  renderNav(items)

  const renderer = VIEW_RENDERERS[activeView] || renderOverviewView
  content.innerHTML = `<div class="max-w-[1120px] mx-auto px-4 py-4">${renderer()}</div>`
  wireContentEvents()
}

// ─── โฟลว์เต็มจอ "สมัคร"/"เลือกตั้ง" — แยกจากเนวิเกชันหลัก มีแท็บย่อยของตัวเอง ───────────
function renderFullscreenFlow() {
  setNavChromeVisible(false)

  const flow = FLOW_DEFS[fullscreenFlow]
  if (!flow.subtabs.some(t => t.id === flowSubtab)) flowSubtab = flow.subtabs[0].id
  document.getElementById('council-view-title').textContent = flow.title

  const renderer = FLOW_SUBTAB_RENDERERS[fullscreenFlow]?.[flowSubtab] ?? (() => '')

  content.innerHTML = `
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${flow.title}</h2>
      </div>
      ${flow.subtabs.length > 1 ? `
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${flow.subtabs.map(t => `
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${t.id === flowSubtab ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]'}"
            data-subtab="${t.id}">${esc(t.label)}</button>`).join('')}
      </div>` : ''}
      <div>${renderer()}</div>
    </div>`

  document.getElementById('btn-flow-close').addEventListener('click', () => {
    fullscreenFlow = null; flowSubtab = null; showApplyForm = false; applyPhotoFile = null; render()
  })
  document.querySelectorAll('.flow-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => { flowSubtab = btn.dataset.subtab; render() })
  })
  wireContentEvents()
}

function wireContentEvents() {
  document.querySelectorAll('.flow-entry-btn').forEach(btn => {
    btn.addEventListener('click', () => { fullscreenFlow = btn.dataset.flow; flowSubtab = null; render() })
  })
  document.querySelectorAll('.goto-view').forEach(btn => {
    btn.addEventListener('click', () => { activeView = btn.dataset.view; render() })
  })
  document.getElementById('btn-open-apply')?.addEventListener('click', () => {
    showApplyForm = true
    render()
  })
  document.getElementById('btn-cancel-apply')?.addEventListener('click', () => {
    showApplyForm = false
    applyPhotoFile = null
    render()
  })
  document.getElementById('apply-photo')?.addEventListener('change', e => {
    applyPhotoFile = e.target.files?.[0] ?? null
  })
  document.getElementById('apply-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const positionId = document.getElementById('apply-position').value
    const motivation = document.getElementById('apply-motivation').value.trim()
    if (!positionId || !motivation) { showToast('กรุณากรอกให้ครบ', 'warning'); return }

    const btn = document.getElementById('btn-submit-apply')
    btn.disabled = true; btn.textContent = 'กำลังส่ง...'
    try {
      let photoUrl = null
      if (applyPhotoFile) photoUrl = await uploadCouncilApplicationPhoto(ctx.student.id, applyPhotoFile)
      await submitCouncilApplication({
        studentId: ctx.student.id,
        positionId: Number(positionId),
        academicYear: Number(ctx.cfg.academicYear) || new Date().getFullYear() + 543,
        motivation,
        photoUrl,
      })
      showToast('ส่งใบสมัครสำเร็จ ✅', 'success')
      showApplyForm = false
      applyPhotoFile = null
      await refreshMyApplications()
      render()
    } catch (err) {
      showToast('ส่งใบสมัครไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'ส่งใบสมัคร'
    }
  })

  document.querySelectorAll('.endorse-phrase-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const ta = document.querySelector(`.endorse-comment[data-id="${chip.dataset.target}"]`)
      if (!ta) return
      const cur = ta.value.trim()
      ta.value = cur ? cur + ' ' + chip.dataset.phrase : chip.dataset.phrase
      ta.focus()
    })
  })
  document.querySelectorAll('.btn-endorse-confirm').forEach(btn => {
    btn.addEventListener('click', () => handleEndorsement(btn.dataset.id, 'confirm'))
  })
  document.querySelectorAll('.btn-endorse-decline').forEach(btn => {
    btn.addEventListener('click', () => handleEndorsement(btn.dataset.id, 'decline'))
  })

  wireApplicationsAdminEvents()
  wireElectionEvents()
  wireActivitiesEvents()
  wireNewsEvents()
  wireEvalEvents()
  wireDocsEvents()
}

// ─── เอกสารขออนุมัติโครงการ/กิจกรรม ─────────────────────────────────────────────
function wireDocsEvents() {
  document.getElementById('doc-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const title = f.title.value.trim()
    if (!title) { showToast('กรุณากรอกชื่อโครงการ', 'warning'); return }
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await createDocument({
        title, rationale: f.rationale.value.trim(), objective: f.objective.value.trim(),
        budget: f.budget.value ? Number(f.budget.value) : null, ownerText: f.owner_text.value.trim(),
        academicYear: electionYear, createdByStudentId: ctx.isChair && ctx.student ? ctx.student.id : null,
      })
      showToast('บันทึกร่างเอกสารแล้ว ✅', 'success')
      docs = null
      render()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'บันทึกร่าง'
    }
  })

  document.querySelectorAll('.btn-submit-doc').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true
      try {
        await submitDocument(Number(btn.dataset.id))
        docs = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
      }
    })
  })

  document.querySelectorAll('.btn-approve-doc, .btn-reject-doc').forEach(btn => {
    btn.addEventListener('click', async () => {
      const approve = btn.classList.contains('btn-approve-doc')
      const comment = prompt(approve ? 'ความเห็นประกอบการอนุมัติ (ถ้ามี)' : 'เหตุผลที่ไม่อนุมัติ') ?? ''
      if (!approve && !comment.trim()) { showToast('กรุณาระบุเหตุผลที่ไม่อนุมัติ', 'warning'); return }
      btn.disabled = true
      try {
        await decideDocument({ id: Number(btn.dataset.id), approve, teacherId: ctx.teacher?.id ?? null, comment: comment.trim() })
        docs = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
      }
    })
  })

  document.querySelectorAll('.btn-print-doc').forEach(btn => {
    btn.addEventListener('click', () => {
      const d = docs.find(x => x.id === Number(btn.dataset.id))
      if (d) openDocumentPrint(d)
    })
  })
}

// ─── ประเมินผลปฏิบัติหน้าที่ + เกียรติบัตร ─────────────────────────────────────────
function wireEvalEvents() {
  document.getElementById('criterion-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const name = f.name.value.trim()
    const weight = Number(f.weight.value)
    if (!name || !weight) { showToast('กรอกชื่อเกณฑ์และคะแนนให้ครบ', 'warning'); return }
    try {
      await addCriterion({ name, weight })
      evalCriteria = null
      render()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  })

  document.querySelectorAll('.btn-remove-criterion').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ลบเกณฑ์นี้ออกจากการประเมิน?')) return
      try {
        await removeCriterion(Number(btn.dataset.id))
        evalCriteria = null
        render()
      } catch (err) {
        showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      }
    })
  })

  document.querySelectorAll('.btn-toggle-eval').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id)
      evalOpenMemberId = evalOpenMemberId === id ? null : id
      render()
    })
  })

  document.querySelectorAll('.eval-score-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault()
      const memberId = Number(form.dataset.memberId)
      const decision = form.decision.value
      if (!decision) { showToast('กรุณาเลือกสรุปผล', 'warning'); return }
      const scores = {}
      let total = 0
      evalCriteria.forEach(c => {
        const v = form[`c_${c.id}`]?.value
        if (v !== '' && v != null) { scores[c.id] = Number(v); total += Number(v) }
      })
      const maxScore = evalCriteria.reduce((t, c) => t + Number(c.weight), 0)
      const btn = form.querySelector('button[type="submit"]')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        await saveEvaluation({
          memberId, academicYear: electionYear, scores, totalScore: total, maxScore, decision,
          comment: form.comment.value.trim(), evaluatorTeacherId: ctx.role === 'teacher' && ctx.teacher ? ctx.teacher.id : null,
        })
        showToast('บันทึกผลประเมินแล้ว ✅', 'success')
        evaluations = null
        evalOpenMemberId = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึกผลประเมิน'
      }
    })
  })

  document.querySelectorAll('.btn-issue-cert').forEach(btn => {
    btn.addEventListener('click', async () => {
      const memberId = Number(btn.dataset.memberId)
      const member = ctx.members.find(m => m.id === memberId)
      const ev = evaluations[memberId]
      if (!member || !ev) return
      btn.disabled = true; btn.textContent = 'กำลังออก...'
      try {
        const certNo = `${electionYear}-${String(ev.id).padStart(4, '0')}`
        await issueCertificate({ evaluationId: ev.id, certificateNo: certNo })
        ev.certificate_no = certNo
        ev.certificate_issued_at = new Date().toISOString()
        openCertificatePrint(member, ev)
        render()
      } catch (err) {
        showToast('ออกเกียรติบัตรไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = '🏅 ออกเกียรติบัตร'
      }
    })
  })

  document.querySelectorAll('.btn-view-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const memberId = Number(btn.dataset.memberId)
      const member = ctx.members.find(m => m.id === memberId)
      const ev = evaluations[memberId]
      if (member && ev) openCertificatePrint(member, ev)
    })
  })
}

// ─── กิจกรรมประจำปี ────────────────────────────────────────────────────────────
function wireActivitiesEvents() {
  document.getElementById('activity-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const title = f.title.value.trim()
    if (!title) { showToast('กรุณากรอกชื่อกิจกรรม', 'warning'); return }
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await createActivity({
        title, detail: f.detail.value.trim(), gender: f.gender.value || null,
        activityDate: f.activity_date.value || null, budget: f.budget.value ? Number(f.budget.value) : null,
        ownerText: f.owner_text.value.trim(), academicYear: electionYear,
      })
      showToast('สร้างกิจกรรมแล้ว ✅', 'success')
      activities = null
      render()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'สร้างกิจกรรม'
    }
  })

  document.querySelectorAll('.btn-activity-next').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true
      try {
        await updateActivityStatus(Number(btn.dataset.id), btn.dataset.next)
        activities = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
      }
    })
  })

  document.querySelectorAll('.btn-activity-cancel').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ยืนยันยกเลิกกิจกรรมนี้?')) return
      btn.disabled = true
      try {
        await updateActivityStatus(Number(btn.dataset.id), 'cancelled')
        activities = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
      }
    })
  })

  document.querySelectorAll('.btn-activity-attendance').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id)
      if (attendanceByActivity[id] === undefined) loadAttendance(id)
    })
  })

  document.querySelectorAll('.btn-checkin').forEach(btn => {
    btn.addEventListener('click', async () => {
      const activityId = Number(btn.dataset.activityId)
      const memberId = Number(btn.dataset.memberId)
      btn.disabled = true
      try {
        await checkInAttendance({ activityId, memberId })
        attendanceByActivity[activityId]?.add(memberId)
        render()
      } catch (err) {
        showToast('เช็คชื่อไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
      }
    })
  })
}

// ─── ประกาศสภานักเรียน ─────────────────────────────────────────────────────────
function wireNewsEvents() {
  document.getElementById('btn-open-ann-form')?.addEventListener('click', () => { showAnnForm = true; render() })
  document.getElementById('btn-cancel-ann')?.addEventListener('click', () => { showAnnForm = false; render() })

  document.querySelectorAll('.ann-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => { annFilter = btn.dataset.filter; render() })
  })

  document.getElementById('announcement-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const title = f.title.value.trim()
    if (!title) { showToast('กรุณากรอกหัวเรื่องประกาศ', 'warning'); return }
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังเผยแพร่...'
    try {
      await postAnnouncement({
        type: f.type.value, audience: f.audience.value, title, body: f.body.value.trim(),
        pinned: f.pinned.checked,
        postedByTeacherId: ctx.role === 'teacher' && ctx.teacher ? ctx.teacher.id : null,
        postedByStudentId: ctx.isChair && ctx.student ? ctx.student.id : null,
      })
      showToast('เผยแพร่ประกาศแล้ว 📣', 'success')
      showAnnForm = false
      announcements = null
      render()
    } catch (err) {
      showToast('เผยแพร่ไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'เผยแพร่ประกาศ'
    }
  })

  document.querySelectorAll('.btn-ack-ann').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = Number(btn.dataset.id)
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        await ackAnnouncement({ announcementId: id, studentId: ctx.student.id })
        myAcks?.add(id)
        showToast('รับทราบแล้ว', 'success')
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'รับทราบ'
      }
    })
  })
}

// ─── จัดการใบสมัคร (แอดมิน) — นัดสัมภาษณ์ / ให้คะแนน / ตั้งผู้สมัคร / แต่งตั้ง ───────────
function wireApplicationsAdminEvents() {
  document.querySelectorAll('.schedule-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault()
      const appId = Number(form.dataset.appId)
      const ivId = form.dataset.ivId ? Number(form.dataset.ivId) : null
      const scheduledAt = form.scheduled_at.value
      const location = form.location.value.trim()
      if (!scheduledAt) { showToast('กรุณาระบุวันเวลานัดสัมภาษณ์', 'warning'); return }
      const btn = form.querySelector('button[type="submit"]')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        await scheduleCouncilInterview({ applicationId: appId, existingInterviewId: ivId, scheduledAt: new Date(scheduledAt).toISOString(), location, interviewerTeacherId: null })
        showToast('นัดสัมภาษณ์แล้ว ✅', 'success')
        adminApps = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึกนัดสัมภาษณ์'
      }
    })
  })

  document.querySelectorAll('.score-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault()
      const appId = Number(form.dataset.appId)
      const ivId = form.dataset.ivId ? Number(form.dataset.ivId) : null
      if (!ivId) { showToast('ไม่พบข้อมูลการนัดสัมภาษณ์', 'error'); return }
      const result = form.result.value
      if (!result) { showToast('กรุณาเลือกผลสัมภาษณ์', 'warning'); return }
      const score = form.score.value ? Number(form.score.value) : null
      const comment = form.comment.value.trim()
      const btn = form.querySelector('button[type="submit"]')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        await saveCouncilInterviewScore({ interviewId: ivId, applicationId: appId, score, result, comment })
        showToast('บันทึกผลสัมภาษณ์แล้ว ✅', 'success')
        adminApps = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึกผล'
      }
    })
  })

  document.querySelectorAll('.btn-promote-candidate').forEach(btn => {
    btn.addEventListener('click', async () => {
      const appId = Number(btn.dataset.appId)
      const app = adminApps?.find(a => a.id === appId)
      if (!app) return
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        const econf = await ensureElectionConfig({ gender: app.council_positions.gender, academicYear: electionYear })
        await promoteToCandidate({
          applicationId: appId, studentId: app.students.id, electionConfigId: econf.id,
          campaignStatement: app.motivation, photoUrl: app.photo_url,
        })
        showToast('ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️', 'success')
        delete candidatesByGender[app.council_positions.gender]
        ctx.elections = await getCouncilElectionConfigs().catch(() => ctx.elections)
        adminApps = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = '🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง'
      }
    })
  })

  document.querySelectorAll('.btn-appoint-member').forEach(btn => {
    btn.addEventListener('click', async () => {
      const appId = Number(btn.dataset.appId)
      const app = adminApps?.find(a => a.id === appId)
      if (!app) return
      if (!confirm(`ยืนยันแต่งตั้ง ${app.students?.full_name ?? ''} เป็น ${app.council_positions?.position_name ?? ''}?`)) return
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        await appointMember({ applicationId: appId, positionId: app.position_id, studentId: app.students.id, academicYear: electionYear })
        showToast('แต่งตั้งสำเร็จ ✅', 'success')
        adminApps = null
        ctx.members = await getCouncilMembers().catch(() => ctx.members)
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = '✅ แต่งตั้งเข้าตำแหน่ง'
      }
    })
  })
}

// ─── การเลือกตั้ง — เปิดใช้งาน / ตั้งช่วงเวลา / โหวต / ประกาศผล ──────────────────────────
function wireElectionEvents() {
  document.querySelectorAll('.btn-create-election').forEach(btn => {
    btn.addEventListener('click', async () => {
      btn.disabled = true
      try {
        const e = await ensureElectionConfig({ gender: btn.dataset.gender, academicYear: electionYear })
        ctx.elections = [...ctx.elections.filter(x => x.id !== e.id), e]
        render()
      } catch (err) {
        showToast('เปิดใช้งานไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
      }
    })
  })

  document.querySelectorAll('.election-window-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault()
      const id = Number(form.dataset.electionId)
      const opensAt = form.opens_at.value ? new Date(form.opens_at.value).toISOString() : null
      const closesAt = form.closes_at.value ? new Date(form.closes_at.value).toISOString() : null
      const btn = form.querySelector('button[type="submit"]')
      btn.disabled = true
      try {
        await updateElectionWindow({ electionConfigId: id, opensAt, closesAt })
        ctx.elections = await getCouncilElectionConfigs().catch(() => ctx.elections)
        showToast('บันทึกช่วงเวลาแล้ว', 'success')
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
      }
    })
  })

  document.querySelectorAll('.btn-publish-results').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้')) return
      btn.disabled = true; btn.textContent = 'กำลังประกาศผล...'
      try {
        await publishElectionResults({ electionConfigId: Number(btn.dataset.electionId), gender: btn.dataset.gender, academicYear: electionYear })
        showToast('ประกาศผลแล้ว 🎉', 'success')
        ctx.elections = await getCouncilElectionConfigs().catch(() => ctx.elections)
        ctx.members = await getCouncilMembers().catch(() => ctx.members)
        render()
      } catch (err) {
        showToast('ประกาศผลไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = '📢 ประกาศผล+แต่งตั้ง'
      }
    })
  })
}

// ─── โหมดมืด — วน 3 สถานะ ตามระบบ → สว่าง → มืด, เก็บ localStorage['council_theme'] ─────
// เรียกทันทีตอนโหลดสคริปต์ (ก่อน init() ที่ต้อง await auth) กันจอกะพริบสว่างก่อนสลับมืด
const THEME_LABEL = { auto: 'ตามระบบ', light: 'สว่าง', dark: 'มืด' }
const THEME_ICON = { auto: '🌓', light: '☀️', dark: '🌙' }
function applyCouncilTheme(mode) {
  const dark = mode === 'dark' || (mode === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.toggleAttribute('data-dark', dark)
  const icon = document.getElementById('council-theme-icon')
  const label = document.getElementById('council-theme-label')
  if (icon) icon.textContent = THEME_ICON[mode]
  if (label) label.textContent = THEME_LABEL[mode]
}
function initTheme() {
  const saved = localStorage.getItem('council_theme') || 'auto'
  applyCouncilTheme(saved)
  document.getElementById('council-theme-toggle')?.addEventListener('click', () => {
    const cur = localStorage.getItem('council_theme') || 'auto'
    const next = cur === 'auto' ? 'light' : cur === 'light' ? 'dark' : 'auto'
    localStorage.setItem('council_theme', next)
    applyCouncilTheme(next)
  })
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if ((localStorage.getItem('council_theme') || 'auto') === 'auto') applyCouncilTheme('auto')
  })
}
initTheme()

init()
