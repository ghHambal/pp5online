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
    ? `<img src="${esc(s.photo_url || s.image_url)}" class="${size} rounded-lg object-cover border border-gray-200 shadow-sm bg-gray-100 flex-shrink-0">`
    : `<div class="${size} rounded-lg bg-violet-50 text-violet-500 grid place-items-center font-bold flex-shrink-0 border border-gray-200">${esc((s?.full_name || '?').charAt(0))}</div>`

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
      <div class="max-w-md mx-auto px-4 py-20 text-center text-gray-400">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-gray-600">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
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

  ctx = {
    role, isAdmin, isChair, student, applications, membership, positions, members, elections, cfg,
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
function getNavItems() {
  // เมนูหลัก = ดูภาพรวมสภานักเรียนเท่านั้น ("สมัคร"/"เลือกตั้ง" ไม่อยู่ที่นี่ — เป็นปุ่มบนหน้าภาพรวมแทน)
  const items = [{ id: 'overview', icon: '🏠', label: 'ภาพรวม' }]
  if (ctx.role === 'teacher' && ctx.pendingEndorsements.length) {
    items.push({ id: 'endorse', icon: '✋', label: 'รอยืนยัน', badge: ctx.pendingEndorsements.length })
  }
  if (ctx.isAdmin) items.push({ id: 'apps', icon: '📋', label: 'จัดการใบสมัคร' })
  items.push({ id: 'news', icon: '📣', label: 'ประกาศ' })
  items.push({ id: 'activities', icon: '📅', label: 'กิจกรรม' })
  items.push({ id: 'candidates', icon: '🗳️', label: 'ผู้สมัครเลือกตั้ง' })
  items.push({ id: 'roster', icon: '🏛️', label: 'สภานักเรียน' })
  return items
}

function renderNav(items) {
  document.getElementById('council-sidebar-nav').innerHTML = items.map(it => `
    <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
      ${it.id === activeView ? 'bg-violet-800 text-white' : 'text-violet-200 hover:bg-violet-800 hover:text-white'}" data-view="${it.id}">
      <span>${it.icon}</span> ${esc(it.label)}
      ${it.badge ? `<span class="ml-auto bg-amber-400 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">${it.badge}</span>` : ''}
    </button>`).join('')

  document.getElementById('council-bottom-tabs').innerHTML = `<div class="flex">${items.map(it => `
    <button type="button" class="council-nav-btn relative flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 ${it.id === activeView ? 'text-violet-600' : 'text-gray-500'}" data-view="${it.id}">
      <span class="text-xl">${it.icon}</span>
      <span class="text-[10px] font-medium">${esc(it.label)}</span>
      ${it.badge ? `<span class="absolute top-1 right-1/4 bg-amber-400 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">${it.badge}</span>` : ''}
    </button>`).join('')}</div>`

  document.querySelectorAll('.council-nav-link, .council-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => { activeView = btn.dataset.view; render() })
  })

  const activeItem = items.find(it => it.id === activeView)
  document.getElementById('council-view-title').textContent = activeItem?.label ?? 'ภาพรวม'
}

// ─── การ์ดสถานะสภาส่วนตัว — โผล่เฉพาะคนที่มีใบสมัคร/เป็นสมาชิกอยู่ ─────────────────
function renderPersonalCard() {
  const { applications, membership } = ctx
  if (!applications.length && !membership.length) return ''
  return `
    <div class="bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-5 text-white shadow-sm">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${membership.map(m => `
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-violet-100">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${esc(m.council_positions?.position_name ?? '—')} <span class="text-xs font-normal text-violet-100">(สภา${esc(GENDER_LABEL[m.council_positions?.gender] ?? '')})</span></p>
          </div>`).join('')}
        ${applications.map(a => `
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-violet-100">ใบสมัคร — ${esc(a.council_positions?.position_name ?? '—')}</p>
              <p class="text-[11px] text-violet-200">${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${esc(APPLICATION_STATUS_LABEL[a.status] ?? a.status)}</span>
          </div>`).join('')}
      </div>
    </div>`
}

function renderOverviewView() {
  const personal = renderPersonalCard()
  const entryCard = (flow, icon, label) => `
    <button type="button" class="flow-entry-btn bg-white rounded-2xl border border-violet-200 p-4 text-center hover:border-violet-400 hover:shadow-sm transition" data-flow="${flow}">
      <p class="text-2xl mb-1">${icon}</p>
      <p class="text-sm font-bold text-violet-700">${esc(label)}</p>
    </button>`
  const entryCards = `
    <div class="grid ${ctx.role === 'student' ? 'grid-cols-2' : 'grid-cols-1'} gap-3">
      ${ctx.role === 'student' ? entryCard('apply', '📝', 'สมัครสภานักเรียน') : ''}
      ${entryCard('election', '🗳️', 'การเลือกตั้ง')}
    </div>`
  return `<div class="space-y-4">${personal}${entryCards}</div>`
}

// ─── สมัครสภานักเรียน — เฉพาะนักเรียนที่เชื่อมบัญชีแล้ว ─────────────────────────────
function renderApplyView() {
  if (ctx.role !== 'student') return ''
  if (!ctx.student) {
    return `<div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center text-amber-700 text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`
  }

  const gender = normalizeGender(ctx.student.gender)
  const positionsForGender = ctx.positions.filter(p => p.gender === gender)
  const appliedIds = new Set(ctx.applications.filter(a => a.status !== 'rejected').map(a => a.position_id))
  const openPositions = positionsForGender.filter(p => !appliedIds.has(p.id))

  if (!gender) {
    return `<div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center text-amber-700 text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`
  }

  if (!showApplyForm) {
    return `
      <button id="btn-open-apply" type="button"
        class="w-full bg-white rounded-2xl border border-violet-200 p-4 text-left hover:border-violet-400 transition flex items-center justify-between gap-3 ${openPositions.length ? '' : 'opacity-50 pointer-events-none'}">
        <div>
          <p class="text-sm font-bold text-violet-700">📝 สมัครสภานักเรียน${GENDER_LABEL[gender]}</p>
          <p class="text-xs text-gray-400 mt-0.5">${openPositions.length ? `เปิดรับ ${openPositions.length} ตำแหน่ง` : 'ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)'}</p>
        </div>
        <span class="text-violet-400">→</span>
      </button>`
  }

  return `
    <div class="bg-white rounded-2xl border border-violet-200 p-4">
      <p class="text-sm font-bold text-violet-700 mb-3">📝 ใบสมัครสภานักเรียน${GENDER_LABEL[gender]}</p>
      <form id="apply-form" class="space-y-3">
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1.5">ตำแหน่งที่สมัคร <span class="text-red-400">*</span></label>
          <select id="apply-position" required class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white">
            <option value="">— เลือกตำแหน่ง —</option>
            ${openPositions.map(p => `<option value="${p.id}">${esc(p.position_name)}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1.5">แรงจูงใจ / นโยบาย <span class="text-red-400">*</span></label>
          <textarea id="apply-motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-500 mb-1.5">รูปภาพ (ถ้ามี)</label>
          <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-cancel-apply" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button type="submit" id="btn-submit-apply" class="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold">ส่งใบสมัคร</button>
        </div>
      </form>
    </div>`
}

// ─── ใบสมัครของฉัน — ประวัติ+สถานะใบสมัครทุกใบ + สมาชิกภาพปัจจุบัน (subtab ในโฟลว์สมัคร) ──
function renderMyApplicationsList() {
  if (!ctx.student) return ''
  if (!ctx.applications.length && !ctx.membership.length) {
    return `<p class="text-sm text-gray-400 text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>`
  }
  return `
    <div class="space-y-2">
      ${ctx.membership.map(m => `
        <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
          <p class="text-xs text-emerald-600 font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-emerald-800">${esc(m.council_positions?.position_name ?? '—')} <span class="text-xs font-normal">(สภา${esc(GENDER_LABEL[m.council_positions?.gender] ?? '')})</span></p>
        </div>`).join('')}
      ${ctx.applications.map(a => `
        <div class="bg-white rounded-xl border border-gray-100 p-3 flex items-center justify-between gap-2">
          <div class="min-w-0">
            <p class="text-sm font-bold text-gray-800 truncate">${esc(a.council_positions?.position_name ?? '—')}</p>
            <p class="text-xs text-gray-400">${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
            ${a.motivation ? `<p class="text-xs text-gray-500 mt-1">${esc(a.motivation)}</p>` : ''}
          </div>
          <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">${esc(APPLICATION_STATUS_LABEL[a.status] ?? a.status)}</span>
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
      <div class="bg-white rounded-2xl border border-gray-100 p-4">
        <p class="text-sm font-bold text-gray-700 mb-1">🗳️ สภา${GENDER_LABEL[gender]}</p>
        <p class="text-xs text-gray-400">ยังไม่เปิดการเลือกตั้ง</p>
        ${ctx.isAdmin ? `<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold" data-gender="${gender}">เปิดใช้งานการเลือกตั้ง</button>` : ''}
      </div>`
  }

  const now = new Date()
  const opens = e.opens_at ? new Date(e.opens_at) : null
  const closes = e.closes_at ? new Date(e.closes_at) : null
  const isOpen = !!(opens && opens <= now && (!closes || closes > now))
  const isClosed = !!(closes && closes <= now)
  const published = !!e.results_published_at

  const status = published ? { label: '✅ ประกาศผลแล้ว', cls: 'bg-emerald-100 text-emerald-700' }
    : isClosed ? { label: '🔒 ปิดโหวตแล้ว รอประกาศผล', cls: 'bg-amber-100 text-amber-700' }
    : isOpen ? { label: '🗳️ กำลังเปิดโหวต', cls: 'bg-violet-100 text-violet-700' }
    : { label: '⏳ ยังไม่เปิดโหวต', cls: 'bg-gray-100 text-gray-500' }

  let body = ''
  if (published) {
    const winner = ctx.members.find(m => m.council_positions?.gender === gender && m.council_positions?.is_elected)
    body = winner ? `
      <div class="flex items-center gap-3 bg-emerald-50 rounded-xl p-3 mt-2">
        ${studentPhoto(winner.students, 'w-12 h-16')}
        <div class="min-w-0">
          <p class="text-[11px] text-emerald-600 font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-gray-800 truncate">${esc(winner.students?.full_name ?? '—')}</p>
        </div>
      </div>` : `<p class="text-xs text-gray-400 mt-2">ประกาศผลแล้ว</p>`
  } else if (isOpen && isMine) {
    // ⚠️ โหวตต้องทำที่จุดลงคะแนนแยก (council-election.html) เท่านั้น — ห้ามโหวตผ่าน session
    // ที่ล็อกอินอยู่ในมือถือตัวเอง (ตัดสินใจย้ำ 2026-08-15) หน้านี้แจ้งสถานะอย่างเดียว
    body = `
      <div class="bg-violet-50 border border-violet-100 rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-violet-700">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[11px] text-gray-500 mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`
  } else if (isClosed && !published) {
    body = `<p class="text-xs text-gray-400 mt-2">รอผู้ดูแลระบบประกาศผล</p>`
  } else if (!isOpen && !isClosed) {
    body = `<p class="text-xs text-gray-400 mt-2">${e.opens_at ? 'เปิดโหวต ' + new Date(e.opens_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : ''}</p>`
  }

  let adminCtrl = ''
  if (ctx.isAdmin) {
    adminCtrl = `
      <div class="mt-3 pt-3 border-t border-gray-100 space-y-2">
        <form class="election-window-form flex flex-wrap gap-2 items-end" data-election-id="${e.id}">
          <label class="text-[11px] text-gray-400">เปิดโหวต<br><input type="datetime-local" name="opens_at" value="${e.opens_at ? e.opens_at.slice(0, 16) : ''}" class="border border-gray-200 rounded-lg px-2 py-1.5 text-xs"/></label>
          <label class="text-[11px] text-gray-400">ปิดโหวต<br><input type="datetime-local" name="closes_at" value="${e.closes_at ? e.closes_at.slice(0, 16) : ''}" class="border border-gray-200 rounded-lg px-2 py-1.5 text-xs"/></label>
          <button type="submit" class="px-3 py-1.5 rounded-lg border border-violet-200 text-violet-600 text-xs font-bold">บันทึกช่วงเวลา</button>
        </form>
        ${isClosed && !published ? `<button type="button" class="btn-publish-results px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold" data-election-id="${e.id}" data-gender="${gender}">📢 ประกาศผล+แต่งตั้ง</button>` : ''}
        <p class="text-[11px] text-gray-400">🔗 หน้าโหวต (เปิดที่จุดลงคะแนนเท่านั้น): <a href="council-election.html" target="_blank" class="text-violet-600 underline">council-election.html</a></p>
      </div>`
  }

  return `
    <div class="bg-white rounded-2xl border border-gray-100 p-4">
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-bold text-gray-700">🗳️ สภา${GENDER_LABEL[gender]}</p>
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
    const head = `<p class="text-xs font-bold text-gray-400 mb-2">สภา${GENDER_LABEL[gender]}</p>`
    if (!e) return `<div>${head}<p class="text-xs text-gray-300 text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`
    const list = candidatesByGender[gender]
    if (list === undefined) { loadCandidates(gender, e.id); return `<div>${head}<p class="text-xs text-gray-300 text-center py-4">⏳ กำลังโหลด...</p></div>` }
    if (!list.length) return `<div>${head}<p class="text-xs text-gray-300 text-center py-4">ยังไม่มีผู้สมัคร</p></div>`
    return `
      <div>
        ${head}
        <div class="space-y-2">
          ${list.map(c => `
            <div class="flex items-center gap-3 rounded-xl border border-gray-100 p-3 bg-white">
              <div class="w-8 h-8 rounded-full bg-violet-100 text-violet-700 grid place-items-center font-bold text-sm flex-shrink-0">${c.ballot_number}</div>
              ${studentPhoto(c.students)}
              <div class="min-w-0 flex-1">
                <p class="text-sm font-bold text-gray-800 truncate">${esc(c.students?.full_name ?? '—')}</p>
                <p class="text-xs text-gray-500">${esc(c.students?.main_room ?? '')}</p>
                ${c.campaign_statement ? `<p class="text-xs text-gray-500 mt-1">${esc(c.campaign_statement)}</p>` : ''}
              </div>
            </div>`).join('')}
        </div>
      </div>`
  }
  return `<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${block('M')}${block('W')}</div>`
}

// ─── จัดการใบสมัคร (แอดมิน) — รับรองแล้ว → นัดสัมภาษณ์ → ให้คะแนน → ตั้งผู้สมัคร/แต่งตั้ง ──
const PIPELINE_STATUS_BADGE = {
  pending: ['รอนัดสัมภาษณ์', 'bg-gray-100 text-gray-500'],
  interview_scheduled: ['นัดสัมภาษณ์แล้ว รอให้คะแนน', 'bg-amber-100 text-amber-700'],
  interviewed: ['ผ่านสัมภาษณ์', 'bg-emerald-100 text-emerald-700'],
  candidate: ['ผู้สมัครเลือกตั้ง', 'bg-violet-100 text-violet-700'],
  appointed: ['แต่งตั้งแล้ว', 'bg-blue-100 text-blue-700'],
  rejected: ['ไม่ผ่าน', 'bg-red-100 text-red-600'],
}

async function loadAdminApps() {
  adminApps = await getCouncilApplicationsForAdmin(electionYear).catch(() => [])
  render()
}

function renderApplicationsAdminView() {
  if (!ctx.isAdmin) return ''
  if (adminApps === null) { loadAdminApps(); return `<p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>` }
  if (!adminApps.length) return `<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีใบสมัครที่ครูที่ปรึกษารับรองแล้ว</p>`

  const card = a => {
    const iv = a.council_interviews?.[0]
    const [label, cls] = PIPELINE_STATUS_BADGE[a.status] ?? ['—', 'bg-gray-100 text-gray-500']
    const isElected = !!a.council_positions?.is_elected
    return `
    <div class="rounded-xl border border-gray-100 p-3 space-y-2.5 bg-white" data-app-card="${a.id}">
      <div class="flex items-center gap-3">
        ${studentPhoto(a.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-gray-800 truncate">${esc(a.students?.full_name ?? '—')}</p>
          <p class="text-xs text-gray-500">${esc(a.students?.student_code ?? '')} · ${esc(a.students?.main_room ?? '')} · ${esc(a.council_positions?.position_name ?? '—')} (สภา${esc(GENDER_LABEL[a.council_positions?.gender] ?? '')})</p>
        </div>
        <span class="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full ${cls}">${label}</span>
      </div>
      ${a.motivation ? `<p class="text-xs text-gray-600 bg-gray-50 rounded-lg p-2.5">${esc(a.motivation)}</p>` : ''}
      ${a.endorsement_comment ? `<p class="text-[11px] text-emerald-600">✅ ครูที่ปรึกษา: ${esc(a.endorsement_comment)}</p>` : ''}

      ${a.status === 'pending' ? `
        <form class="schedule-form space-y-2 pt-1 border-t border-gray-100" data-app-id="${a.id}" data-iv-id="${iv?.id ?? ''}">
          <p class="text-xs font-semibold text-gray-500">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-gray-200 rounded-lg px-2.5 py-2 text-xs" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-gray-200 rounded-lg px-2.5 py-2 text-xs" />
          </div>
          <button type="submit" class="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>` : ''}

      ${a.status === 'interview_scheduled' ? `
        <div class="pt-1 border-t border-gray-100 space-y-2">
          <p class="text-xs text-gray-500">📅 ${iv?.scheduled_at ? new Date(iv.scheduled_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : '—'} ${iv?.location ? '· ' + esc(iv.location) : ''}</p>
          <form class="score-form space-y-2" data-app-id="${a.id}" data-iv-id="${iv?.id ?? ''}">
            <p class="text-xs font-semibold text-gray-500">บันทึกผลสัมภาษณ์</p>
            <div class="grid grid-cols-2 gap-2">
              <input type="number" name="score" min="0" max="100" placeholder="คะแนน (0-100)" class="border border-gray-200 rounded-lg px-2.5 py-2 text-xs" />
              <select name="result" required class="border border-gray-200 rounded-lg px-2.5 py-2 text-xs bg-white">
                <option value="">— ผลสัมภาษณ์ —</option>
                <option value="pass">ผ่าน</option>
                <option value="fail">ไม่ผ่าน</option>
              </select>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs resize-none"></textarea>
            <button type="submit" class="w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>` : ''}

      ${a.status === 'interviewed' ? `
        <div class="pt-1 border-t border-gray-100">
          ${isElected
            ? `<button type="button" class="btn-promote-candidate w-full py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold" data-app-id="${a.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`
            : `<button type="button" class="btn-appoint-member w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold" data-app-id="${a.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>` : ''}

      ${a.status === 'candidate' ? `<p class="text-xs text-violet-600 pt-1 border-t border-gray-100">เบอร์ผู้สมัคร ${a.council_candidates?.[0]?.ballot_number ?? '—'} · รอผลเลือกตั้ง</p>` : ''}
      ${a.status === 'rejected' && iv?.comment ? `<p class="text-xs text-red-500 pt-1 border-t border-gray-100">${esc(iv.comment)}</p>` : ''}
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
        <p class="text-xs font-bold text-gray-400 mb-2">สภานักเรียน${GENDER_LABEL[g]}</p>
        ${list.length ? `<div class="space-y-2">${list.map(m => `
          <div class="flex items-center gap-3 rounded-xl border border-gray-100 p-2.5 bg-white">
            ${studentPhoto(m.students)}
            <div class="min-w-0 flex-1">
              <p class="text-sm font-bold text-gray-800 truncate">${esc(m.students?.full_name ?? '—')}</p>
              <p class="text-xs text-gray-500">${esc(m.council_positions?.position_name ?? '—')}</p>
            </div>
          </div>`).join('')}</div>`
          : `<p class="text-xs text-gray-300 text-center py-4">ยังไม่มีข้อมูลสมาชิกสภา${GENDER_LABEL[g]}</p>`}
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
    return `<div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-700 text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>`
  }

  const card = a => `
    <div class="rounded-xl border border-gray-100 p-3 space-y-2.5 bg-white" data-endorsement-card="${a.id}">
      <div class="flex items-center gap-3">
        ${studentPhoto(a.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-gray-800 truncate">${esc(a.students?.full_name ?? '—')}</p>
          <p class="text-xs text-gray-500">${esc(a.students?.student_code ?? '')} · ${esc(a.students?.main_room ?? '')} · สมัคร${esc(a.council_positions?.position_name ?? '—')}</p>
        </div>
      </div>
      ${a.motivation ? `<p class="text-xs text-gray-600 bg-gray-50 rounded-lg p-2.5">${esc(a.motivation)}</p>` : ''}
      <div class="flex flex-wrap gap-1.5">
        ${ctx.endorsementPhrases.map(p => `
          <button type="button" class="endorse-phrase-chip text-[11px] px-2.5 py-1 rounded-full border border-gray-200 bg-gray-50 hover:bg-violet-50 hover:border-violet-300 text-gray-600 transition"
            data-target="${a.id}" data-phrase="${esc(p.phrase)}">${esc(p.phrase)}</button>`).join('')}
      </div>
      <textarea class="endorse-comment w-full border border-gray-200 rounded-xl px-3 py-2 text-sm resize-none" data-id="${a.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50" data-id="${a.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold" data-id="${a.id}">✅ รับรอง</button>
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
  planned: ['ยังไม่จัด', 'text-amber-700', 'bg-amber-100', 'border-amber-200'],
  ongoing: ['กำลังดำเนินการ', 'text-violet-700', 'bg-violet-100', 'border-violet-200'],
  completed: ['เสร็จแล้ว', 'text-emerald-700', 'bg-emerald-100', 'border-emerald-200'],
  cancelled: ['ยกเลิก', 'text-gray-400', 'bg-gray-50', 'border-gray-200'],
}
const ACT_SUMMARY_TILES = [
  ['completed', 'เสร็จแล้ว', 'border-emerald-100 bg-emerald-50', 'text-emerald-600'],
  ['ongoing', 'กำลังดำเนินการ', 'border-violet-100 bg-violet-50', 'text-violet-600'],
  ['planned', 'ยังไม่จัด', 'border-amber-100 bg-amber-50', 'text-amber-600'],
  ['cancelled', 'ยกเลิก', 'border-gray-100 bg-gray-50', 'text-gray-400'],
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
  if (activities === null) { loadActivities(); return `<p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>` }
  const canManage = ctx.isAdmin || ctx.isChair
  const counts = {}
  activities.forEach(a => { counts[a.status] = (counts[a.status] ?? 0) + 1 })

  const summary = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${ACT_SUMMARY_TILES.map(([k, label, box, num]) => `
        <div class="rounded-xl border ${box} p-3 text-center">
          <p class="text-2xl font-bold ${num}">${counts[k] ?? 0}</p>
          <p class="text-[11px] text-gray-500">${label}</p>
        </div>`).join('')}
    </div>`

  const createForm = canManage ? `
    <div class="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
      <p class="text-sm font-bold text-gray-700 mb-3">➕ สร้างกิจกรรมใหม่</p>
      <form id="activity-form" class="space-y-2">
        <input name="title" required placeholder="ชื่อกิจกรรม" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="detail" rows="2" placeholder="รายละเอียด (ถ้ามี)" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="activity_date" type="date" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
          <input name="budget" type="number" step="0.01" placeholder="งบประมาณ (บาท)" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <select name="gender" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white">
            <option value="">สภาชาย+หญิงร่วมกัน</option>
            <option value="M">สภาชายเท่านั้น</option>
            <option value="W">สภาหญิงเท่านั้น</option>
          </select>
          <input name="owner_text" placeholder="ฝ่าย/ผู้รับผิดชอบ" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <button type="submit" class="w-full py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold">สร้างกิจกรรม</button>
      </form>
    </div>` : ''

  if (!activities.length) return `${summary}${createForm}<p class="text-sm text-gray-400 text-center py-10">ยังไม่มีกิจกรรม</p>`

  const card = a => {
    const [label, fg, bg, border] = ACT_STATUS_BADGE[a.status] ?? ['—', 'text-gray-500', 'bg-gray-100', 'border-gray-200']
    const members = ctx.members.filter(m => !a.gender || m.council_positions?.gender === a.gender)
    const attendance = attendanceByActivity[a.id]
    return `
      <div class="rounded-xl border border-gray-100 p-3 space-y-2 bg-white" data-activity-card="${a.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-gray-800">${esc(a.title)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${a.activity_date ? new Date(a.activity_date).toLocaleDateString('th-TH', { dateStyle: 'medium' }) : 'ยังไม่กำหนดวัน'} ${a.gender ? '· สภา' + GENDER_LABEL[a.gender] : ''} ${a.owner_text ? '· ' + esc(a.owner_text) : ''}</p>
          </div>
          <span class="flex-shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full border ${border} ${bg} ${fg}">${label}</span>
        </div>
        ${a.detail ? `<p class="text-xs text-gray-600">${esc(a.detail)}</p>` : ''}
        ${canManage ? `
          <div class="flex flex-wrap gap-2 pt-1 border-t border-gray-100">
            ${ACT_NEXT_STATUS[a.status] ? `<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-lg border border-violet-200 text-violet-600 hover:bg-violet-50" data-id="${a.id}" data-next="${ACT_NEXT_STATUS[a.status]}">${ACT_NEXT_LABEL[a.status]}</button>` : ''}
            ${a.status !== 'cancelled' && a.status !== 'completed' ? `<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50" data-id="${a.id}">ยกเลิก</button>` : ''}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50" data-id="${a.id}">👥 เช็คชื่อสมาชิก</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${a.id}">
            ${attendance ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${members.map(m => {
                  const done = attendance.has(m.id)
                  return `<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-lg border px-2.5 py-2 text-left ${done ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}" data-activity-id="${a.id}" data-member-id="${m.id}" ${done ? 'disabled' : ''}>
                    <span>${done ? '✅' : '➕'}</span><span class="truncate">${esc(m.students?.full_name ?? '—')}</span>
                  </button>`
                }).join('')}
                ${!members.length ? '<p class="text-xs text-gray-300 col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>' : ''}
              </div>` : ''}
          </div>` : ''}
      </div>`
  }

  return `${summary}${createForm}<div class="space-y-3">${activities.map(card).join('')}</div>`
}

// ─── ประกาศสภานักเรียน — feed+ปักหมุด+รับทราบ, โพสต์ได้เฉพาะแอดมิน/ประธานสภา ────────────────
const ANN_TYPE_BADGE = {
  info: ['แจ้งให้ทราบ', 'text-violet-700', 'bg-violet-100', 'border-violet-200'],
  ack: ['ต้องกดรับทราบ', 'text-amber-700', 'bg-amber-100', 'border-amber-200'],
  urgent: ['ด่วน', 'text-red-600', 'bg-red-100', 'border-red-200'],
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
  if (announcements === null) { loadAnnouncements(); return `<p class="text-sm text-gray-400 text-center py-16">⏳ กำลังโหลด...</p>` }
  if (ctx.role === 'student' && ctx.student && myAcks === null) loadMyAcks()
  const canPost = ctx.isAdmin || ctx.isChair

  const visible = announcements.filter(a => a.audience === 'all' || a.audience === (ctx.student ? normalizeGender(ctx.student.gender) : null) || ctx.isAdmin || ctx.isChair)
  const filtered = annFilter === 'all' ? visible : visible.filter(a => a.type === annFilter)

  const postBtn = canPost ? `<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>` : ''

  const form = (canPost && showAnnForm) ? `
    <div class="bg-white rounded-2xl border border-gray-100 p-4 mb-4">
      <p class="text-sm font-bold text-gray-700 mb-3">📣 ประกาศใหม่</p>
      <form id="announcement-form" class="space-y-2">
        <input name="title" required placeholder="หัวเรื่องประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="body" rows="3" placeholder="รายละเอียด" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <select name="type" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white">
            <option value="info">แจ้งให้ทราบ</option>
            <option value="ack">ต้องกดรับทราบ</option>
            <option value="urgent">ด่วน</option>
          </select>
          <select name="audience" class="border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white">
            <option value="all">ทุกคน</option>
            <option value="M">สภาชาย</option>
            <option value="W">สภาหญิง</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-xs text-gray-500"><input type="checkbox" name="pinned" class="rounded" /> ปักหมุดไว้บนสุด</label>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-cancel-ann" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
          <button type="submit" class="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold">เผยแพร่ประกาศ</button>
        </div>
      </form>
    </div>` : ''

  const filters = [['all', 'ทั้งหมด'], ['urgent', 'ด่วน'], ['ack', 'ต้องรับทราบ'], ['info', 'แจ้งให้ทราบ']]
  const filterBar = `
    <div class="flex gap-2 overflow-x-auto pb-1 mb-4">
      ${filters.map(([k, label]) => `
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${annFilter === k ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-500 border-gray-200'}" data-filter="${k}">${label}</button>`).join('')}
    </div>`

  if (!filtered.length) return `${postBtn}${form}${filterBar}<p class="text-sm text-gray-400 text-center py-10">ไม่มีประกาศ</p>`

  const card = a => {
    const [label, fg, bg, border] = ANN_TYPE_BADGE[a.type] ?? ANN_TYPE_BADGE.info
    const author = a.teachers?.full_name ? esc(a.teachers.full_name) + ' (ครู)' : a.students?.full_name ? esc(a.students.full_name) + ' (ประธานสภา)' : 'ระบบ'
    const acked = myAcks?.has(a.id)
    const needsAck = a.type === 'ack' && ctx.role === 'student' && ctx.student
    return `
      <div class="rounded-xl border ${a.pinned ? 'border-amber-200 bg-amber-50/40' : 'border-gray-100 bg-white'} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${a.pinned ? '<span class="text-[11px] font-bold text-amber-600">📌 ปักหมุด</span>' : ''}
          <span class="text-[11px] font-bold px-2 py-0.5 rounded-full border ${border} ${bg} ${fg}">${label}</span>
          ${a.audience !== 'all' ? `<span class="text-[11px] text-gray-400">สภา${GENDER_LABEL[a.audience] ?? ''}</span>` : ''}
        </div>
        <p class="text-sm font-bold text-gray-800">${esc(a.title)}</p>
        ${a.body ? `<p class="text-xs text-gray-600 whitespace-pre-line">${esc(a.body)}</p>` : ''}
        <p class="text-[11px] text-gray-400">${author} · ${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
        ${needsAck ? (acked
          ? `<p class="text-xs font-bold text-emerald-600 pt-1 border-t border-gray-100">✅ รับทราบแล้ว</p>`
          : `<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white" data-id="${a.id}">รับทราบ</button>`) : ''}
      </div>`
  }

  return `${postBtn}${form}${filterBar}<div class="space-y-3">${filtered.map(card).join('')}</div>`
}

const VIEW_RENDERERS = {
  overview: renderOverviewView,
  endorse: renderEndorseView,
  apps: renderApplicationsAdminView,
  news: renderNewsView,
  activities: renderActivitiesView,
  candidates: renderCandidatesView,
  roster: renderRosterView,
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
  content.innerHTML = `<div class="max-w-2xl mx-auto px-4 py-4">${renderer()}</div>`
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
          class="w-8 h-8 rounded-full hover:bg-gray-100 text-gray-500 flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-gray-800">${flow.title}</h2>
      </div>
      ${flow.subtabs.length > 1 ? `
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${flow.subtabs.map(t => `
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${t.id === flowSubtab ? 'bg-violet-600 text-white' : 'bg-white border border-gray-200 text-gray-500'}"
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

init()
