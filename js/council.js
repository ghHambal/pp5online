import { supabase } from './supabase.js'
import { blockPullToRefresh } from './anti-pull-refresh.js'
import { showToast } from './ui.js'
import { getMyStudentProfile } from './student-api.js'
import { getMyTeacherProfile, getMyHomeroomRooms, getTeachers } from './api.js'
import { uploadCouncilApplicationPhoto } from './storage.js'
import { openCouncilCheckinScanner } from './council-checkin-scanner.js'
import QRCode from 'qrcode'
import {
  getCouncilConfig, updateCouncilConfig, getCouncilPositions, getCouncilMembers,
  createCouncilPosition, updateCouncilPosition, deleteCouncilPosition,
  getCouncilElectionConfigs, getMyCouncilApplications, getMyCouncilMembership,
  submitCouncilApplication, getPendingEndorsements, getEndorsementPhrases,
  addEndorsementPhrase, removeEndorsementPhrase,
  confirmApplicationEndorsement, declineApplicationEndorsement,
  getPendingPeerEndorsements, submitPeerEndorsement,
  getCouncilApplicationsForAdmin, scheduleCouncilInterview, saveCouncilInterviewScore,
  promoteToCandidate, appointMember, ensureElectionConfig, updateElectionWindow,
  getCandidatesForElection, publishElectionResults, updateCandidateProfile, getEligibleVoterCount, getVoteTally,
  getCouncilActivities, createActivity, updateActivityStatus, getActivityAttendance, checkInAttendance,
  getCouncilAnnouncements, postAnnouncement, getMyAnnouncementAcks, ackAnnouncement,
  getAnnouncementAckCounts, getTotalActiveStudentCount,
  getOpenPositionsForNomination, getInterviewedForNomination, proposeNomination, getPendingNominations, decideNomination,
  getMyRoutines, getRoutineLogsForWeek, addRoutine, removeRoutine, toggleRoutineLog,
  getMyAssignments, getAssignmentsForGender, createAssignment, updateAssignmentStatus, deleteAssignment,
  getEvaluationCriteria, addCriterion, removeCriterion, getCouncilEvaluations, saveEvaluation, issueCertificate,
  getInterviewCriteria, addInterviewCriterion, removeInterviewCriterion,
  getCouncilDocuments, createDocument, submitDocument, decideDocument,
  getCouncilAdvisorTeachers, addCouncilAdvisor, removeCouncilAdvisor,
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
// ─── สมัครสภานักเรียน — wizard 4 ขั้น (สเปคข้อ 8.2) ─────────────────────────────
let showApplyForm = false // true = กำลังแสดง wizard (แทนปุ่มเปิดฟอร์ม)
let applyStep = 1 // 1 เลือกตำแหน่ง / 2 เกรด+แรงจูงใจ / 3 รูปถ่าย / 4 วิดีโอแนะนำตัว
let applyData = { positionId: '', gpaGeneral: '', gpaReligious: '', motivation: '', videoUrl: '' }
let applyPhotoFile = null
let applyPhotoPreviewUrl = null // object URL สำหรับพรีวิวรูปก่อนอัปโหลดจริง
let showApplyConfirm = false // ป๊อบอัพสรุปยืนยันก่อน insert จริง

function resetApplyWizard() {
  showApplyForm = false
  applyStep = 1
  applyData = { positionId: '', gpaGeneral: '', gpaReligious: '', motivation: '', videoUrl: '' }
  applyPhotoFile = null
  if (applyPhotoPreviewUrl) URL.revokeObjectURL(applyPhotoPreviewUrl)
  applyPhotoPreviewUrl = null
  showApplyConfirm = false
}

// "สมัคร" กับ "เลือกตั้ง" ไม่ใช่แท็บถาวรในเมนูหลัก (นั่นมีไว้สำหรับ "ดูภาพรวมสภานักเรียน"
// เท่านั้น) — ทั้งคู่เป็นปุ่มเข้าใช้งานบนหน้าภาพรวม กดแล้วเปิดเป็นโฟลว์เต็มจอที่มีแท็บย่อย
// ของตัวเอง แยกกันชัดเจนจากการเนวิเกตหลัก (ตัดสินใจแล้ว 2026-08-14)
let fullscreenFlow = null // null | 'apply' | 'election'
let flowSubtab = null

// สถานะที่โหลดแบบ lazy ตอนเปิดหน้าจอนั้นๆ ครั้งแรก (ไม่ต้องโหลดทุกอย่างตั้งแต่ init)
let adminApps = null // null = ยังไม่โหลด, [] = โหลดแล้วแต่ไม่มีข้อมูล
let adminAppDetailId = null // id ของใบสมัครที่กำลังเปิดดูแบบเต็ม (ป๊อบอัพ) — null = ปิดอยู่
let appsFilter = 'all' // ฟิลเตอร์สถานะในหน้า "จัดการใบสมัคร" (สเปคข้อ 8.4)
let ivTeachers = null // null = ยังไม่โหลด — รายชื่อครูสำหรับเลือกเป็นกรรมการสัมภาษณ์ (ใช้ร่วมกับหน้ามอบสิทธิ์ด้วย)
let councilAdvisors = null // null = ยังไม่โหลด — ทำเนียบครูที่ปรึกษาสภานักเรียน (หน้า "มอบสิทธิ์")
const candidatesByGender = {} // { M: [...], W: [...] }
let candidateProfileOpen = null // { gender, id } — การ์ดผู้สมัครที่กำลังเปิดดูโปรไฟล์เต็ม (สเปคข้อ 8.11)
let candidateEditMode = false // สลับเป็นฟอร์มแก้ไขโปรไฟล์ผู้สมัคร (เฉพาะแอดมิน/ครูที่ปรึกษาสภา)
const electionResults = {} // { M: { tally, eligible }, W: {...} } — ผลนับคะแนนหลังประกาศผล (สเปคข้อ 8.13)
let electionYear = null // ปีการศึกษาปัจจุบันที่ resolve แล้ว (จาก ctx.cfg.academicYear)
let activities = null // null = ยังไม่โหลด
const attendanceByActivity = {} // { [activityId]: Set<memberId> }
let announcements = null // null = ยังไม่โหลด
let myAcks = null // Set<announcementId> — เฉพาะนักเรียนที่ล็อกอินอยู่
let annAckCounts = null // { [announcementId]: N } — สเปคข้อ 8.10 "รับทราบแล้ว N จาก M คน"
let annAudienceSizes = null // { all, M, W } — ตัวหาร M ตามขอบเขตผู้รับของแต่ละประกาศ
let annFilter = 'all'
let showAnnForm = false

// ─── หน้าตั้งค่า (Phase 2, สเปคข้อ 8.18) — เห็นเฉพาะ isAdmin/isCouncilAdvisor ────────────
let settingsTab = 'general'
let interviewCriteria = null // null = ยังไม่โหลด
let endorsementPhrasesAdmin = null // null = ยังไม่โหลด (แยกจาก ctx.endorsementPhrases ที่ใช้ในหน้ารับรอง)

const SETTINGS_TABS = [
  { id: 'general', label: 'ทั่วไป' },
  { id: 'positions', label: 'ตำแหน่ง' },
  { id: 'criteria', label: 'เกณฑ์และข้อความ' },
  { id: 'modules', label: 'โมดูล' },
]

const MODULE_LABELS = {
  candidates: 'ว่าที่ประธาน / ผลเลือกตั้ง', news: 'ประกาศ', interview: 'ตารางสัมภาษณ์',
  appoint: 'แต่งตั้งตรง', chairteam: 'เสนอคณะทำงาน', chairtasks: 'มอบหมายงาน',
  evaluate: 'ประเมินการปฏิบัติหน้าที่', certissue: 'ออกเกียรติบัตร', docs: 'เอกสารโครงการ',
  perms: 'มอบสิทธิ์ครู (ยังไม่สร้างหน้า)',
}

function getModulesConfig() {
  try { return { ...JSON.parse(ctx.cfg.council_modules || '{}') } } catch { return {} }
}

async function loadInterviewCriteria() {
  interviewCriteria = await getInterviewCriteria().catch(() => [])
  render()
}
async function loadEndorsementPhrasesAdmin() {
  endorsementPhrasesAdmin = await getEndorsementPhrases().catch(() => [])
  render()
}

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
  // งานสภา — สาธารณะ/สมาชิกสภา
  items.push({ id: 'news', icon: '📣', label: 'ประกาศ', group: 'council' })
  items.push({ id: 'roster', icon: '🏛️', label: 'สภาของเรา', group: 'council' })
  items.push({ id: 'activities', icon: '📅', label: 'กิจกรรม', group: 'council' })
  if (ctx.isChair || ctx.isAdmin || ctx.isCouncilAdvisor) items.push({ id: 'chairteam', icon: '👔', label: 'เสนอคณะทำงาน', group: 'council' })
  if (ctx.isChair) items.push({ id: 'assignments', icon: '📌', label: 'มอบหมายงาน', group: 'council' })
  if (ctx.membership.length) items.push({ id: 'myduty', icon: '🎫', label: 'หน้าที่/งานของฉัน', group: 'council' })
  // รับรองจากสภานักเรียนปัจจุบัน — เห็นเฉพาะสมาชิกสภา active เมื่อเปิดใช้บังคับจากหน้าตั้งค่า
  if (ctx.membership.length && ctx.cfg.council_require_peer_endorsement === 'true') {
    items.push({ id: 'peerEndorse', icon: '✋', label: 'รับรองผู้สมัคร (สภา)', group: 'council' })
  }
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
  // ระบบ — ตั้งค่า (Phase 2, สเปคข้อ 8.18) — ภาพรวม/มอบสิทธิ์ยังไม่ได้สร้าง
  if (isTeacherStaff) items.push({ id: 'settings', icon: '⚙️', label: 'ตั้งค่า', group: 'system' })
  // มอบสิทธิ์ครูที่ปรึกษาสภา — เห็นเฉพาะแอดมิน (ครูที่ปรึกษาสภาเองไม่เห็นเมนูนี้ ตามสเปคข้อ 4
  // "เกือบทุกหน้าเหมือนแอดมิน ยกเว้นมอบสิทธิ์")
  if (ctx.isAdmin) items.push({ id: 'perms', icon: '🔑', label: 'มอบสิทธิ์', group: 'system' })

  // สวิตช์เปิด/ปิดโมดูล (สเปคข้อ 8.18.4, council_modules) — บังคับใช้เฉพาะโมดูลที่ผูกกับ
  // nav item เดี่ยวๆ ตรงๆ ได้เท่านั้น (interview/appoint/perms ยังไม่มี nav item แยกของตัวเอง
  // เพราะฟีเจอร์นั้นยังไม่ได้สร้างเป็นหน้าต่างหาก — toggle เก็บไว้ล่วงหน้าให้ตรงสเปค แต่ยังไม่มีผล
  // จนกว่าจะสร้างหน้านั้นจริง — chairteam/chairtasks มีหน้าแล้วตั้งแต่ Phase 6-7)
  const modules = getModulesConfig()
  const hiddenByModule = new Set()
  if (modules.candidates === false) { hiddenByModule.add('candidates'); hiddenByModule.add('result') }
  if (modules.news === false) hiddenByModule.add('news')
  if (modules.evaluate === false) hiddenByModule.add('eval')
  if (modules.docs === false) hiddenByModule.add('docs')
  if (modules.chairteam === false) hiddenByModule.add('chairteam')
  if (modules.chairtasks === false) hiddenByModule.add('assignments')
  return items.filter(it => !hiddenByModule.has(it.id))
}

let mobileSheetGroup = null // null | group id — กลุ่มที่กำลังเปิดแคปซูลกระจกฝ้าอยู่ (มือถือ)

function renderNav(items) {
  const groupOrder = Object.keys(NAV_GROUPS)
  document.getElementById('council-sidebar-nav').innerHTML = groupOrder.map(g => {
    const groupItems = items.filter(it => it.group === g)
    if (!groupItems.length) return ''
    return `
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${esc(NAV_GROUPS[g].label)}</p>
        ${groupItems.map(it => `
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${it.id === activeView ? 'bg-[var(--hero-3)] text-white' : 'text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white'}" data-view="${it.id}">
            <span>${it.icon}</span> ${esc(it.label)}
            ${it.badge ? `<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${it.badge}</span>` : ''}
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
      <span class="text-[0.625rem] font-medium">${esc(g.label)}</span>
      ${badge ? `<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${badge}</span>` : ''}
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
              ${it.badge ? `<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${it.badge}</span>` : ''}
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
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
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

// แสดงว่าใครกำลังล็อกอินอยู่ในบทบาท/สถานะอะไร (ผู้ใช้ขอ 2026-08-16 หลังสับสนว่าทำไมครูที่มี
// profiles.is_also_admin=true ถึงเห็นเมนู/สิทธิ์เหมือนแอดมินทั้งที่ไม่ใช่ครูที่ปรึกษาสภา) —
// แยกกรณี role==='admin' จริง กับ is_also_admin (สิทธิ์แอดมินที่ได้รับมอบเพิ่มเติม) ให้ชัดเจน
function currentIdentityLabel() {
  if (ctx.isChair) return '👑 ประธานสภานักเรียน'
  if (ctx.membership.length) return '🎫 สมาชิกสภานักเรียน'
  if (ctx.isCouncilAdvisor) return '🏫 ครูที่ปรึกษาสภานักเรียน'
  if (ctx.role === 'admin') return '🛡️ ผู้ดูแลระบบ (แอดมิน)'
  if (ctx.isAdmin) return '🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)'
  if (ctx.role === 'teacher') return '👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)'
  if (ctx.role === 'student') return '🎓 นักเรียน'
  return 'ผู้เยี่ยมชม'
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
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${esc(currentIdentityLabel())}</span></p>
    ${visibilityAlert}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${termLabel ? `<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${termLabel}</span>` : ''}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${esc(headline)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${esc(sub)}</p>
      ${ctx.isAdmin || ctx.isCouncilAdvisor || ctx.isChair ? `
      <div class="flex flex-wrap gap-2 mt-4">
        ${ctx.isAdmin || ctx.isCouncilAdvisor ? `<button type="button" class="goto-view px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90" data-view="settings">⚙️ ตั้งค่าระบบ</button>` : ''}
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
          <p class="text-[0.625rem] text-[var(--muted)]">${label}</p>
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
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${a.activity_date ? new Date(a.activity_date).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'} ${a.owner_text ? '· ' + esc(a.owner_text) : ''}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${bg} ${fg}">${label}</span>
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
            <p class="text-[0.6875rem] font-bold ${isW ? 'text-[var(--pink)]' : 'text-[var(--primary)]'}">${esc(m.council_positions?.position_name ?? ('ประธานสภานักเรียนฝ่าย' + GENDER_LABEL[g]))}</p>
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
      ${sub ? `<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${esc(sub)}</p>` : ''}
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

  const stepBody = applyStep === 1 ? renderApplyStep1(openPositions)
    : applyStep === 2 ? renderApplyStep2()
    : applyStep === 3 ? renderApplyStep3()
    : renderApplyStep4()

  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${GENDER_LABEL[gender]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${renderApplyProgress()}
      ${stepBody}
    </div>
    ${showApplyConfirm ? renderApplyConfirmModal() : ''}`
}

const APPLY_STEP_LABELS = ['เลือกตำแหน่ง', 'เกรดเฉลี่ย & แรงจูงใจ', 'รูปถ่าย', 'วิดีโอแนะนำตัว']

function renderApplyProgress() {
  return `
    <div class="flex items-center gap-1.5 mb-3">
      ${[1, 2, 3, 4].map(n => `<div class="flex-1 h-1.5 rounded-full ${n <= applyStep ? 'bg-[var(--primary)]' : 'bg-[var(--line-soft)]'}"></div>`).join('')}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${applyStep}/4 · ${APPLY_STEP_LABELS[applyStep - 1]}</p>`
}

function renderApplyStep1(openPositions) {
  return `
    <form id="apply-step1-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
        <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— เลือกตำแหน่ง —</option>
          ${openPositions.map(p => `<option value="${p.id}" ${applyData.positionId === String(p.id) ? 'selected' : ''}>${esc(p.position_name)}</option>`).join('')}
        </select>
        ${!openPositions.length ? '<p class="text-xs text-[var(--gold-ink)] mt-1.5">ไม่มีตำแหน่งเปิดรับในขณะนี้</p>' : ''}
      </div>
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${!openPositions.length ? 'disabled' : ''}>ถัดไป →</button>
    </form>`
}

function renderApplyStep2() {
  const minGpa = ctx.cfg.council_min_gpa || '2.50'
  const minGpaRel = ctx.cfg.council_min_gpa_religious || '2.50'
  return `
    <form id="apply-step2-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยสามัญ <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaGeneral" type="number" step="0.01" min="0" max="4" required value="${esc(applyData.gpaGeneral)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${esc(minGpa)}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยศาสนา <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaReligious" type="number" step="0.01" min="0" max="4" required value="${esc(applyData.gpaReligious)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${esc(minGpaRel)}</p>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
        <textarea name="motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก (อย่างน้อย 10 ตัวอักษร)"
          class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(applyData.motivation)}</textarea>
      </div>
      <div class="flex gap-2">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`
}

function renderApplyStep3() {
  return `
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${applyPhotoPreviewUrl ? `<img src="${applyPhotoPreviewUrl}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />` : ''}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`
}

function renderApplyStep4() {
  const brief = (() => { try { return JSON.parse(ctx.cfg.council_video_brief || '[]') } catch { return [] } })()
  const maxMin = ctx.cfg.council_video_max_minutes || '3'
  return `
    <form id="apply-step4-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ลิงก์วิดีโอแนะนำตัว <span class="text-[var(--bad)]">*</span></label>
        <input name="videoUrl" type="url" required placeholder="https://..." value="${esc(applyData.videoUrl)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ความยาวไม่เกิน ${esc(maxMin)} นาที (ลิงก์ YouTube/Google Drive/TikTok ที่เปิดดูได้)</p>
      </div>
      ${brief.length ? `
        <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3">
          <p class="text-xs font-bold text-[var(--primary-dark)] mb-1.5">🎬 หัวข้อที่ควรพูดถึงในวิดีโอ</p>
          <ul class="text-xs text-[var(--ink-2)] space-y-1 list-disc list-inside">
            ${brief.map(b => `<li>${esc(b)}</li>`).join('')}
          </ul>
        </div>` : ''}
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ตรวจสอบและยืนยัน →</button>
      </div>
    </form>`
}

// ป๊อบอัพสรุปข้อมูลก่อนส่งจริง (สเปคข้อ 8.2 — insert เมื่อกด "ยืนยันการสมัคร" เท่านั้น)
function renderApplyConfirmModal() {
  const position = ctx.positions.find(p => p.id === Number(applyData.positionId))
  const s = ctx.student
  return `
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${applyPhotoPreviewUrl ? `<img src="${applyPhotoPreviewUrl}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />` : ''}
            <div class="min-w-0">
              <p class="font-bold text-[var(--ink)] truncate">${esc(s?.full_name ?? '—')}</p>
              <p class="text-xs text-[var(--muted-2)]">${esc(s?.student_code ?? '')} · ${esc(s?.main_room ?? '')}</p>
            </div>
          </div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">ตำแหน่ง</span><span class="font-bold text-[var(--ink)] text-right">${esc(position?.position_name ?? '—')}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดสามัญ</span><span class="font-bold text-[var(--ink)]">${esc(applyData.gpaGeneral)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดศาสนา</span><span class="font-bold text-[var(--ink)]">${esc(applyData.gpaReligious)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">รูปถ่าย</span><span class="font-bold ${applyPhotoFile ? 'text-[var(--ok)]' : 'text-[var(--bad)]'}">${applyPhotoFile ? '✅ แนบแล้ว' : '❌ ยังไม่ได้แนบ'}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">วิดีโอ</span><span class="font-bold text-[var(--ink)] truncate">${esc(applyData.videoUrl)}</span></div>
          <div>
            <p class="text-[var(--muted)] mb-1">แรงจูงใจ</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${esc(applyData.motivation)}</p>
          </div>
        </div>
        <div class="flex gap-2 pt-4 mt-3 border-t border-[var(--line-soft)]">
          <button type="button" id="btn-apply-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">✏️ แก้ไข</button>
          <button type="button" id="btn-apply-confirm-submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✅ ยืนยันการสมัคร</button>
        </div>
      </div>
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

async function loadElectionResults(gender, electionConfigId) {
  const [tally, eligible] = await Promise.all([
    getVoteTally(electionConfigId).catch(() => ({})),
    getEligibleVoterCount(gender).catch(() => 0),
  ])
  electionResults[gender] = { tally, eligible }
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
        ${(ctx.isAdmin || ctx.isCouncilAdvisor) ? `<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${gender}">เปิดใช้งานการเลือกตั้ง</button>` : ''}
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
    if (candidatesByGender[gender] === undefined) loadCandidates(gender, e.id)
    if (!electionResults[gender]) loadElectionResults(gender, e.id)
    const winner = ctx.members.find(m => m.council_positions?.gender === gender && m.council_positions?.is_elected)
    const winnerCard = winner ? `
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${studentPhoto(winner.students, 'w-12 h-16')}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(winner.students?.full_name ?? '—')}</p>
        </div>
      </div>` : `<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>`

    // คะแนนรายคนเป็นแถบ + สรุปผู้มีสิทธิ์/ใช้สิทธิ์ (สเปคข้อ 8.13)
    const results = electionResults[gender]
    const candidates = candidatesByGender[gender]
    let tallyBody = ''
    if (results && candidates?.length) {
      const totalVotes = Object.values(results.tally).reduce((a, b) => a + b, 0)
      const turnoutPct = results.eligible ? Math.round((totalVotes / results.eligible) * 100) : 0
      const sorted = candidates.slice().sort((a, b) => (results.tally[b.id] ?? 0) - (results.tally[a.id] ?? 0))
      tallyBody = `
        <div class="mt-3 space-y-2">
          ${sorted.map(c => {
            const v = results.tally[c.id] ?? 0
            const pct = totalVotes ? Math.round((v / totalVotes) * 100) : 0
            return `
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${esc(c.students?.full_name ?? '—')}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${v} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${pct}%"></div></div>
              </div>`
          }).join('')}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${results.eligible} คน · ใช้สิทธิ์ ${totalVotes} คน (${turnoutPct}%)</p>`
    }
    body = winnerCard + tallyBody
  } else if (isOpen && isMine) {
    // ⚠️ โหวตต้องทำที่จุดลงคะแนนแยก (council-election.html) เท่านั้น — ห้ามโหวตผ่าน session
    // ที่ล็อกอินอยู่ในมือถือตัวเอง (ตัดสินใจย้ำ 2026-08-15) หน้านี้แจ้งสถานะอย่างเดียว
    body = `
      <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-[var(--primary-dark)]">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[0.6875rem] text-[var(--muted)] mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`
  } else if (isClosed && !published) {
    body = `<p class="text-xs text-[var(--muted-2)] mt-2">รอผู้ดูแลระบบประกาศผล</p>`
  } else if (!isOpen && !isClosed) {
    body = `<p class="text-xs text-[var(--muted-2)] mt-2">${e.opens_at ? 'เปิดโหวต ' + new Date(e.opens_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : ''}</p>`
  }

  let adminCtrl = ''
  if (ctx.isAdmin || ctx.isCouncilAdvisor) {
    adminCtrl = `
      <div class="mt-3 pt-3 border-t border-[var(--line-soft)] space-y-2">
        <form class="election-window-form flex flex-wrap gap-2 items-end" data-election-id="${e.id}">
          <label class="text-[0.6875rem] text-[var(--muted-2)]">เปิดโหวต<br><input type="datetime-local" name="opens_at" value="${e.opens_at ? e.opens_at.slice(0, 16) : ''}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <label class="text-[0.6875rem] text-[var(--muted-2)]">ปิดโหวต<br><input type="datetime-local" name="closes_at" value="${e.closes_at ? e.closes_at.slice(0, 16) : ''}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <button type="submit" class="px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] text-xs font-bold">บันทึกช่วงเวลา</button>
        </form>
        ${isClosed && !published ? `<button type="button" class="btn-publish-results px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-election-id="${e.id}" data-gender="${gender}">📢 ประกาศผล+แต่งตั้ง</button>` : ''}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">🔗 หน้าโหวต (เปิดที่จุดลงคะแนนเท่านั้น): <a href="council-election.html" target="_blank" class="text-[var(--primary)] underline">council-election.html</a></p>
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
// การ์ดผู้สมัคร — รูปใหญ่ 4:5 + เบอร์ผู้สมัครตัวโตมุมบนซ้าย + เกรด + สโลแกน (สเปคข้อ 8.11)
function renderCandidateCard(c, gender) {
  const photoUrl = c.photo_url || c.students?.image_url || c.students?.photo_url
  const gpaG = c.council_applications?.gpa_general
  const gpaR = c.council_applications?.gpa_religious
  return `
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${gender}" data-id="${c.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${photoUrl
          ? `<img src="${esc(photoUrl)}" class="w-full h-full object-cover" />`
          : `<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${esc((c.students?.full_name || '?').charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${c.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(c.students?.full_name ?? '—')}</p>
        <p class="text-xs text-[var(--muted)]">${esc(c.students?.main_room ?? '')}</p>
        ${(gpaG != null || gpaR != null) ? `<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${esc(gpaG ?? '—')} · ศาสนา ${esc(gpaR ?? '—')}</p>` : ''}
        ${c.slogan ? `<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${esc(c.slogan)}"</p>` : ''}
      </div>
    </button>`
}

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
        <div class="grid grid-cols-2 gap-3">${list.map(c => renderCandidateCard(c, gender)).join('')}</div>
      </div>`
  }
  return `<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${block('M')}${block('W')}</div>${renderCandidateProfileModal()}`
}

// โปรไฟล์ผู้สมัครเต็มรูปแบบ — แตะการ์ดเปิดขึ้นมา (สเปคข้อ 8.11): สโลแกน/วิสัยทัศน์/นโยบาย/
// ประสบการณ์และผลงาน + ปุ่มแก้ไขสำหรับแอดมิน/ครูที่ปรึกษาสภาเท่านั้น (สเปคไม่ได้ระบุหน้าจอแก้ไข
// แยกต่างหาก จึงผูกฟอร์มแก้ไขไว้ในโมดัลเดียวกันนี้)
function renderCandidateProfileModal() {
  if (!candidateProfileOpen) return ''
  const { gender, id } = candidateProfileOpen
  const c = (candidatesByGender[gender] || []).find(x => x.id === id)
  if (!c) return ''
  const canEdit = ctx.isAdmin || ctx.isCouncilAdvisor
  const policies = Array.isArray(c.policies) ? c.policies : []
  const experience = Array.isArray(c.experience) ? c.experience : []
  const photoUrl = c.photo_url || c.students?.image_url || c.students?.photo_url
  const gpaG = c.council_applications?.gpa_general
  const gpaR = c.council_applications?.gpa_religious

  if (candidateEditMode) {
    return `
      <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
        <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
          <p class="text-base font-bold text-[var(--ink)] mb-3">✏️ แก้ไขโปรไฟล์ผู้สมัคร — ${esc(c.students?.full_name ?? '')}</p>
          <form id="candidate-edit-form" class="space-y-2.5" data-candidate-id="${c.id}">
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สโลแกน</label>
              <input name="slogan" value="${esc(c.slogan ?? '')}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">วิสัยทัศน์</label>
              <textarea name="vision" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(c.vision ?? '')}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">นโยบาย (บรรทัดละ 1 ข้อ)</label>
              <textarea name="policies" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(policies.join('\n'))}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน (บรรทัดละ 1 ข้อ)</label>
              <textarea name="experience" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(experience.join('\n'))}</textarea>
            </div>
            <div class="flex gap-2 pt-2">
              <button type="button" id="btn-candidate-cancel-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
              <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
            </div>
          </form>
        </div>
      </div>`
  }

  return `
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto">
        <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
          ${photoUrl
            ? `<img src="${esc(photoUrl)}" class="w-full h-full object-cover" />`
            : `<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${esc((c.students?.full_name || '?').charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${c.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${esc(c.students?.full_name ?? '—')}</p>
            <p class="text-xs text-[var(--muted)]">${esc(c.students?.main_room ?? '')}${(gpaG != null || gpaR != null) ? ` · เกรดสามัญ ${esc(gpaG ?? '—')} · ศาสนา ${esc(gpaR ?? '—')}` : ''}</p>
          </div>
          ${c.slogan ? `<p class="text-sm font-bold text-[var(--primary-dark)]">"${esc(c.slogan)}"</p>` : ''}
          ${c.vision ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${esc(c.vision)}</p></div>` : ''}
          ${policies.length ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${policies.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
          ${experience.length ? `<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${experience.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>` : ''}
          ${!c.slogan && !c.vision && !policies.length && !experience.length ? `<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>` : ''}
          ${canEdit ? `<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>` : ''}
        </div>
      </div>
    </div>`
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

// ป้ายฝ่ายสีคงที่ (ชาย=เขียว หญิง=ชมพู) — ใช้เฮกซ์ตรงๆ ไม่ใช่ var(--primary) เพราะสเปคข้อ 8.4
// ระบุชัดว่า "ไม่เปลี่ยนตามธีมที่ดู" (ต่างจากส่วนอื่นในระบบที่ใช้ var() สลับตามธีม/โหมดมืด)
const GENDER_BADGE_FIXED = { M: 'bg-[#edf4f0] text-[#14563b]', W: 'bg-[#fdeef4] text-[#a3134f]' }

// สเปคข้อ 8.4 — ฟิลเตอร์นับจำนวน 6 หมวดตามลำดับ pipeline จริง (แยก "รอรับรอง" ออกจาก
// "รับรองแล้ว" ด้วย endorsed_at เพราะ status='pending' ใช้ร่วมกันทั้งสองช่วง)
const APPS_FILTERS = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'awaiting_endorsement', label: 'รอรับรอง' },
  { id: 'endorsed', label: 'รับรองแล้ว' },
  { id: 'scheduled', label: 'นัดแล้ว' },
  { id: 'interviewed', label: 'ผ่านสัมภาษณ์' },
  { id: 'rejected', label: 'ไม่ผ่าน' },
]

// รับรองจากสภานักเรียนปัจจุบัน (เพศเดียวกัน) — เพิ่มตามที่ผู้ใช้ขอ 2026-08-16 เปิด/ปิดบังคับได้
// จากหน้าตั้งค่า (council_require_peer_endorsement) ผู้สมัครที่เป็นสมาชิกสภาปัจจุบันอยู่แล้ว
// (ลงสมัครตำแหน่งใหม่) ข้ามขั้นตอนนี้ไปเลยตามที่ผู้ใช้ยืนยัน
function peerEndorsementRequired() {
  return ctx.cfg.council_require_peer_endorsement === 'true'
}
function applicantIsCurrentMember(a) {
  const studentId = a.students?.id
  return !!studentId && ctx.members.some(m => m.student_id === studentId)
}
function peerEndorsementSatisfied(a) {
  if (!peerEndorsementRequired()) return true
  if (applicantIsCurrentMember(a)) return true
  return !!a.peer_endorsed_at
}
function endorsementStatusNote(a) {
  const notes = []
  if (!a.endorsed_at) notes.push('รอครูที่ปรึกษาสามัญรับรอง')
  if (!peerEndorsementSatisfied(a)) notes.push('รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง')
  return notes.join(' และ')
}

function appPipelineStage(a) {
  if (a.status === 'rejected') return 'rejected'
  if (a.status === 'pending') return (a.endorsed_at && peerEndorsementSatisfied(a)) ? 'endorsed' : 'awaiting_endorsement'
  if (a.status === 'interview_scheduled') return 'scheduled'
  return 'interviewed' // interviewed / candidate / appointed — ผ่านสัมภาษณ์ไปแล้วทั้งหมด
}

async function loadAdminApps() {
  adminApps = await getCouncilApplicationsForAdmin(electionYear).catch(() => [])
  render()
}
async function loadIvTeachers() {
  ivTeachers = await getTeachers().catch(() => [])
  render()
}

function ivTeacherLabel(id) {
  const t = ivTeachers?.find(x => x.id === id)
  return t ? `${t.full_name} · รหัส ${t.id}` : ''
}

// ฝังวิดีโอในหน้าได้เลยถ้าจับรูปแบบลิงก์ได้ (YouTube/Google Drive) ตามที่ผู้ใช้ขอ "คลิกดูในหน้านั้น
// ได้เลย" — แพลตฟอร์มอื่น (เช่น TikTok ที่ต้องใช้ embed widget เฉพาะ) fallback เป็นลิงก์เปิดแท็บใหม่
function videoEmbedHtml(url) {
  if (!url) return ''
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/)
  if (yt) return `<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${esc(yt[1])}" allowfullscreen loading="lazy"></iframe></div>`
  const gd = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (gd) return `<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${esc(gd[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`
  return `<a href="${esc(url)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่)</a>`
}

// ป๊อบอัพดูใบสมัครแบบเต็ม (เหมือนเอกสารใบสมัครจริง) — เกรด/แรงจูงใจ/วิดีโอฝังในหน้า/
// ความเห็นครูที่ปรึกษาสามัญ ตามที่ผู้ใช้ขอ 2026-08-16
function renderAdminAppDetailModal() {
  if (!adminAppDetailId) return ''
  const a = adminApps?.find(x => x.id === adminAppDetailId)
  if (!a) return ''
  const genderCls = GENDER_BADGE_FIXED[a.council_positions?.gender] ?? 'bg-[var(--bg-2)] text-[var(--muted)]'
  return `
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="admin-app-detail-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="btn-admin-app-detail-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${studentPhoto(a.students, 'w-16 h-20')}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${esc(a.students?.full_name ?? '—')}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${genderCls}">${esc(GENDER_LABEL[a.council_positions?.gender] ?? '—')}</span>
            </div>
            <p class="text-xs text-[var(--muted-2)]">${esc(a.students?.student_code ?? '')} · ${esc(a.students?.main_room ?? '')}</p>
            <p class="text-xs text-[var(--primary)] font-semibold mt-0.5">${esc(a.council_positions?.position_name ?? '—')}</p>
          </div>
        </div>
        <div class="space-y-3 pt-3 text-sm">
          <div class="grid grid-cols-2 gap-2">
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดสามัญ</p><p class="font-bold text-[var(--ink)]">${esc(a.gpa_general ?? '—')}</p></div>
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดศาสนา</p><p class="font-bold text-[var(--ink)]">${esc(a.gpa_religious ?? '—')}</p></div>
          </div>
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">แรงจูงใจ / นโยบาย</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-xl p-3 whitespace-pre-line">${esc(a.motivation || '—')}</p>
          </div>
          ${a.intro_video_url ? `
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🎬 วิดีโอแนะนำตัว</p>
            ${videoEmbedHtml(a.intro_video_url)}
          </div>` : ''}
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${a.teachers?.full_name ? ' — ' + esc(a.teachers.full_name) : ''}</p>
            ${a.endorsement_comment
              ? `<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${esc(a.endorsement_comment)}</p>`
              : `<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>`}
          </div>
          ${peerEndorsementRequired() ? `
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${a.council_members?.students?.full_name ? ' — ' + esc(a.council_members.students.full_name) : ''}</p>
            ${applicantIsCurrentMember(a)
              ? `<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>`
              : a.peer_endorsement_comment
                ? `<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${esc(a.peer_endorsement_comment)}</p>`
                : a.peer_endorsed_at
                  ? `<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>`
                  : `<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>`}
          </div>` : ''}
        </div>
      </div>
    </div>`
}

function renderApplicationsAdminView() {
  if (!ctx.isAdmin) return ''
  if (adminApps === null) { loadAdminApps(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (interviewCriteria === null) { loadInterviewCriteria(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (ivTeachers === null) { loadIvTeachers(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }

  const maxWeight = interviewCriteria.reduce((t, c) => t + Number(c.weight), 0)
  const passThreshold = maxWeight / 2

  const counts = { all: adminApps.length }
  adminApps.forEach(a => { const s = appPipelineStage(a); counts[s] = (counts[s] ?? 0) + 1 })
  if (!APPS_FILTERS.some(f => f.id === appsFilter)) appsFilter = 'all'

  const filterBar = `
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${APPS_FILTERS.map(f => `
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${f.id === appsFilter ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]'}" data-filter="${f.id}">
          ${esc(f.label)} <span class="${f.id === appsFilter ? 'text-white/80' : 'text-[var(--muted-2)]'}">${counts[f.id] ?? 0}</span>
        </button>`).join('')}
    </div>`

  const datalist = `<datalist id="council-teacher-datalist">${ivTeachers.map(t => `<option value="${esc(t.full_name)} · รหัส ${t.id}"></option>`).join('')}</datalist>`

  if (!adminApps.length) return `${filterBar}${datalist}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภานักเรียน</p>`

  const list = adminApps.filter(a => appsFilter === 'all' || appPipelineStage(a) === appsFilter)
  if (!list.length) return `${filterBar}${datalist}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`

  const card = a => {
    const iv = a.council_interviews?.[0]
    const [label, cls] = PIPELINE_STATUS_BADGE[a.status] ?? ['—', 'bg-[var(--bg-2)] text-[var(--muted)]']
    const genderCls = GENDER_BADGE_FIXED[a.council_positions?.gender] ?? 'bg-[var(--bg-2)] text-[var(--muted)]'
    const isElected = !!a.council_positions?.is_elected
    const stage = appPipelineStage(a)
    return `
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${a.id}">
      <div class="flex items-center gap-3">
        ${studentPhoto(a.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(a.students?.full_name ?? '—')}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${genderCls}">${esc(GENDER_LABEL[a.council_positions?.gender] ?? '—')}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${esc(a.students?.student_code ?? '')} · ${esc(a.students?.main_room ?? '')} · ${esc(a.council_positions?.position_name ?? '—')}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${cls}">${label}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">📄 ดูใบสมัคร</button>

      ${stage === 'awaiting_endorsement' ? `<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${endorsementStatusNote(a)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>` : ''}

      ${a.status === 'pending' && a.endorsed_at && peerEndorsementSatisfied(a) ? `
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${a.id}" data-iv-id="${iv?.id ?? ''}" data-profile-id="${esc(a.students?.profile_id ?? '')}" data-student-name="${esc(a.students?.full_name ?? '')}" data-position-name="${esc(a.council_positions?.position_name ?? '')}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${iv?.interviewer_teacher_id ? esc(ivTeacherLabel(iv.interviewer_teacher_id)) : ''}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>` : ''}

      ${a.status === 'interview_scheduled' ? `
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${iv?.scheduled_at ? new Date(iv.scheduled_at).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' }) : '—'} ${iv?.location ? '· ' + esc(iv.location) : ''} ${iv?.interviewer_teacher_id ? '· กรรมการ ' + esc(ivTeachers.find(t => t.id === iv.interviewer_teacher_id)?.full_name ?? '') : ''}</p>
          <form class="score-form space-y-1.5" data-app-id="${a.id}" data-iv-id="${iv?.id ?? ''}" data-max-weight="${maxWeight}" data-pass-threshold="${passThreshold}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${interviewCriteria.map(c => `
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${esc(c.name)} <span class="text-[var(--muted-2)]">(เต็ม ${c.weight})</span></span>
                <input type="number" min="0" max="${c.weight}" step="0.5" name="c_${c.id}" data-criterion-id="${c.id}"
                  value="${iv?.scores?.[c.id] ?? ''}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
              </div>`).join('')}
            <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]">
              <span class="text-[var(--ink-2)]">คะแนนรวม</span>
              <span class="score-total-display text-[var(--primary)]">${iv?.score ?? 0} / ${maxWeight} · ต้อง ≥ ${passThreshold} จึงผ่าน</span>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(iv?.comment ?? '')}</textarea>
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
  return `${filterBar}${datalist}<div class="space-y-3">${list.map(card).join('')}</div>${renderAdminAppDetailModal()}`
}

// ─── รายชื่อสภานักเรียนปัจจุบัน (public, จัดกลุ่มตามเพศ→ตำแหน่ง) ──────────────────
// จัดกลุ่มตามหมวดตำแหน่ง (สเปคข้อ 8.14: ประธาน/รองประธาน/สำนักงานสภา/ฝ่ายงาน) — แยกจาก
// position_name ตรงๆ ไม่ต้องเพิ่มคอลัมน์ใหม่ (ประธาน=is_elected, รองประธาน=ชื่อตรงๆ,
// ฝ่ายงาน=ขึ้นต้นด้วย "ฝ่าย", ที่เหลือ=สำนักงานสภา เช่น เลขานุการ/เหรัญญิก)
const ROSTER_CATEGORIES = [
  { label: 'ประธาน', match: p => !!p?.is_elected },
  { label: 'รองประธาน', match: p => p?.position_name === 'รองประธานสภานักเรียน' },
  { label: 'ฝ่ายงาน', match: p => (p?.position_name ?? '').startsWith('ฝ่าย') },
  { label: 'สำนักงานสภา', match: p => !p?.is_elected && p?.position_name !== 'รองประธานสภานักเรียน' && !(p?.position_name ?? '').startsWith('ฝ่าย') },
]

let rosterGenderTab = 'M'

function renderRosterView() {
  if (rosterGenderTab !== 'M' && rosterGenderTab !== 'W') rosterGenderTab = 'M'
  const list = ctx.members.filter(m => m.council_positions?.gender === rosterGenderTab)
    .sort((a, b) => (a.council_positions?.sort_order ?? 99) - (b.council_positions?.sort_order ?? 99))

  const tabs = `
    <div class="flex gap-2 mb-4">
      ${['M', 'W'].map(g => `
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${g === rosterGenderTab ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]'}" data-gender="${g}">สภา${GENDER_LABEL[g]}</button>`).join('')}
    </div>`

  const memberCard = m => `
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${studentPhoto(m.students, 'w-16 h-20 mx-auto')}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${esc(m.students?.full_name ?? '—')}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${esc(m.students?.main_room ?? '')}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${esc(m.council_positions?.position_name ?? '—')}</p>
    </div>`

  const groups = ROSTER_CATEGORIES.map(cat => {
    const members = list.filter(m => cat.match(m.council_positions))
    if (!members.length) return ''
    return `
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${cat.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${members.map(memberCard).join('')}</div>
      </div>`
  }).join('')

  return `${tabs}${groups || `<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${GENDER_LABEL[rosterGenderTab]}</p>`}`
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
          ${a.gpa_general != null || a.gpa_religious != null ? `<p class="text-xs text-[var(--muted)] mt-0.5">เกรดสามัญ ${esc(a.gpa_general ?? '—')} · เกรดศาสนา ${esc(a.gpa_religious ?? '—')}</p>` : ''}
        </div>
      </div>
      ${a.motivation ? `<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${esc(a.motivation)}</p>` : ''}
      ${a.intro_video_url ? `<a href="${esc(a.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-xs font-bold text-[var(--primary)] hover:underline">🎬 ดูวิดีโอแนะนำตัว</a>` : ''}
      <div class="flex flex-wrap gap-1.5">
        ${ctx.endorsementPhrases.map(p => `
          <button type="button" class="endorse-phrase-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
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

// ─── รับรองจากสภานักเรียนปัจจุบัน (เพศเดียวกัน) — เพิ่มตามที่ผู้ใช้ขอ 2026-08-16 ──────────────
// สมาชิกสภา active คนไหนก็ได้ (เพศเดียวกับตำแหน่งที่สมัคร) รับรอง 1 คนพอ ไม่บังคับคอมเมนต์
// (ต่างจากครูที่ปรึกษาสามัญที่บังคับคอมเมนต์ทั้งรับรอง/ไม่รับรอง — อันนี้เบากว่า ไม่มีปุ่ม "ไม่รับรอง")
const peerEndorsements = {} // { M: [...], W: [...] } — undefined = ยังไม่โหลด

async function loadPeerEndorsements(gender) {
  peerEndorsements[gender] = await getPendingPeerEndorsements(gender).catch(() => [])
  render()
}

function renderPeerEndorseView() {
  const myMember = ctx.membership[0]
  if (!myMember) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>`
  const gender = myMember.council_positions?.gender
  if (!gender) return ''
  if (peerEndorsements[gender] === undefined) { loadPeerEndorsements(gender); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  const list = peerEndorsements[gender]
  if (!list.length) return `<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>`

  const card = a => `
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${a.id}">
      <div class="flex items-center gap-3">
        ${studentPhoto(a.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(a.students?.full_name ?? '—')}</p>
          <p class="text-xs text-[var(--muted)]">${esc(a.students?.student_code ?? '')} · ${esc(a.students?.main_room ?? '')} · สมัคร${esc(a.council_positions?.position_name ?? '—')}</p>
        </div>
      </div>
      ${a.motivation ? `<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${esc(a.motivation)}</p>` : ''}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${a.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${a.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`

  return `<div class="space-y-3">${list.map(card).join('')}</div>`
}

async function handlePeerEndorsement(applicationId) {
  const myMember = ctx.membership[0]
  if (!myMember) return
  const ta = document.querySelector(`.peer-endorse-comment[data-id="${applicationId}"]`)
  const comment = ta?.value.trim() || null
  try {
    await submitPeerEndorsement({ applicationId: Number(applicationId), memberId: myMember.id, comment })
    showToast('รับรองในนามสภานักเรียนแล้ว ✅', 'success')
    delete peerEndorsements[myMember.council_positions?.gender]
    render()
  } catch (err) {
    showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  }
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
          <p class="text-[0.6875rem] text-[var(--muted)]">${label}</p>
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
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${border} ${bg} ${fg}">${label}</span>
        </div>
        ${a.detail ? `<p class="text-xs text-[var(--ink-2)]">${esc(a.detail)}</p>` : ''}
        ${canManage ? `
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            ${ACT_NEXT_STATUS[a.status] ? `<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${a.id}" data-next="${ACT_NEXT_STATUS[a.status]}">${ACT_NEXT_LABEL[a.status]}</button>` : ''}
            ${a.status !== 'cancelled' && a.status !== 'completed' ? `<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">ยกเลิก</button>` : ''}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${a.id}" data-title="${esc(a.title)}">📷 สแกน QR เช็คอิน</button>
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

async function loadAnnouncementStats() {
  const [counts, totalAll, totalM, totalW] = await Promise.all([
    getAnnouncementAckCounts().catch(() => ({})),
    getTotalActiveStudentCount().catch(() => 0),
    getEligibleVoterCount('M').catch(() => 0),
    getEligibleVoterCount('W').catch(() => 0),
  ])
  annAckCounts = counts
  annAudienceSizes = { all: totalAll, M: totalM, W: totalW }
  render()
}

function renderNewsView() {
  if (announcements === null) { loadAnnouncements(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (ctx.role === 'student' && ctx.student && myAcks === null) loadMyAcks()
  if (annAckCounts === null) loadAnnouncementStats()
  // ครูที่ปรึกษาสภาโพสต์ได้ด้วย (เดิมพลาดจำกัดแค่แอดมิน/ประธาน ขัดกับสเปคข้อ 8.10 ที่ระบุ
  // "ประธาน/หัวหน้าฝ่าย/ครูที่ปรึกษาสภา/แอดมิน" — "หัวหน้าฝ่าย" ยังไม่มีแนวคิดนี้ในระบบ
  // (ไม่มีการแยกบทบาทหัวหน้าฝ่ายจากสมาชิกสภาทั่วไป) จึงยังไม่ implement ส่วนนั้น
  const canPost = ctx.isAdmin || ctx.isCouncilAdvisor || ctx.isChair

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
    const ackTotal = annAudienceSizes ? (annAudienceSizes[a.audience] ?? annAudienceSizes.all) : null
    return `
      <div class="rounded-xl border ${a.pinned ? 'border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40' : 'border-[var(--line-soft)] bg-[var(--surface)]'} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${a.pinned ? '<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>' : ''}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${border} ${bg} ${fg}">${label}</span>
          ${a.audience !== 'all' ? `<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${GENDER_LABEL[a.audience] ?? ''}</span>` : ''}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${esc(a.title)}</p>
        ${a.body ? `<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${esc(a.body)}</p>` : ''}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${author} · ${new Date(a.created_at).toLocaleDateString('th-TH', { dateStyle: 'medium' })}</p>
        ${a.type === 'ack' ? `<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${annAckCounts?.[a.id] ?? 0}${ackTotal != null ? ' จาก ' + ackTotal : ''} คน</p>` : ''}
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

// ใช้ร่วมกัน 2 จุด: หน้า "ประเมิน/เกียรติบัตร" และแท็บ "เกณฑ์และข้อความ" ของหน้าตั้งค่า
// (สเปคข้อ 8.18.3 — เกณฑ์ประเมินการปฏิบัติหน้าที่แก้ได้จากหน้าตั้งค่าด้วย ไม่ใช่แค่หน้าประเมิน)
function renderDutyCriteriaEditor() {
  const totalWeight = evalCriteria.reduce((t, c) => t + Number(c.weight), 0)
  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${totalWeight} คะแนน)</p>
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
    </div>`
}

function renderEvalView() {
  if (evalCriteria === null) { loadEvalCriteria(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (evaluations === null) { loadEvaluations(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }

  const canEvaluate = ctx.isAdmin || ctx.role === 'teacher'
  const totalWeight = evalCriteria.reduce((t, c) => t + Number(c.weight), 0)

  const criteriaEditor = canEvaluate ? renderDutyCriteriaEditor() : ''

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
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${decCls}">${decLabel}</span>
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
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${cls}">${label}</span>
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

// ─── หน้าตั้งค่า (Phase 2) — 4 แท็บ: ทั่วไป / ตำแหน่ง / เกณฑ์และข้อความ / โมดูล ────────────
const toDatetimeLocal = iso => {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d)) return ''
  const pad = n => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function renderSettingsGeneral() {
  const cfg = ctx.cfg
  return `
    <form id="settings-general-form" class="space-y-4 pb-4">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🏛️ ข้อมูลทั่วไป</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ชื่อสภานักเรียน</label>
          <input name="council_name" value="${esc(cfg.council_name || '')}" placeholder="สภานักเรียนโรงเรียน..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">โลโก้ (URL รูปภาพ)</label>
          <input name="council_logo_url" value="${esc(cfg.council_logo_url || '')}" placeholder="https://..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายชาย</label>
            <input type="color" name="council_theme_side_m" value="${esc(cfg.council_theme_side_m || '#14563b')}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายหญิง</label>
            <input type="color" name="council_theme_side_w" value="${esc(cfg.council_theme_side_w || '#a3134f')}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">⚠️ สีธีมยังเป็นค่าที่บันทึกไว้เฉยๆ ยังไม่ได้ใช้สลับสีจริงในหน้าเว็บ (รอฟีเจอร์สลับธีมตามฝ่ายในเฟสถัดไป)</p>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗓️ ห้วงปฏิบัติหน้าที่</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">เริ่ม ภาค/ปี</span>
            <input name="council_term_start_semester" value="${esc(cfg.council_term_start_semester || '')}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_start_year" value="${esc(cfg.council_term_start_year || '')}" placeholder="2568" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">สิ้นสุด ภาค/ปี</span>
            <input name="council_term_end_semester" value="${esc(cfg.council_term_end_semester || '')}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_end_year" value="${esc(cfg.council_term_end_year || '')}" placeholder="2569" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✅ เกณฑ์คุณสมบัติผู้สมัคร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (สามัญ)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa" value="${esc(cfg.council_min_gpa || '2.50')}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (ศาสนา)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa_religious" value="${esc(cfg.council_min_gpa_religious || '2.50')}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ระดับชั้นที่สมัครได้ (คั่นด้วย ,)</label>
          <input name="council_eligible_grade_levels" value="${esc(cfg.council_eligible_grade_levels || 'ม.4,ม.5,ม.6')}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_require_teacher_endorsement" ${cfg.council_require_teacher_endorsement !== 'false' ? 'checked' : ''} class="w-4 h-4" />
          บังคับให้ครูที่ปรึกษาสามัญรับรองก่อนเข้าสัมภาษณ์
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_require_peer_endorsement" ${cfg.council_require_peer_endorsement === 'true' ? 'checked' : ''} class="w-4 h-4" />
          บังคับให้สมาชิกสภานักเรียนปัจจุบัน (เพศเดียวกัน) รับรองด้วยก่อนเข้าสัมภาษณ์ — ยกเว้นผู้สมัครที่เป็นสมาชิกสภาปัจจุบันอยู่แล้ว
        </label>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เปิดรับสมัครตั้งแต่</label>
            <input type="datetime-local" name="council_apply_opens_at" value="${esc(toDatetimeLocal(cfg.council_apply_opens_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ปิดรับสมัครเมื่อ</label>
            <input type="datetime-local" name="council_apply_closes_at" value="${esc(toDatetimeLocal(cfg.council_apply_closes_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">👁️ การมองเห็นระบบ</p>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_visible_to_all" ${cfg.council_visible_to_all !== 'false' ? 'checked' : ''} class="w-4 h-4" />
          เปิดให้นักเรียน/ครูทุกคนเห็นเมนูสภานักเรียน
        </label>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">รหัสนักเรียนที่ทดสอบได้แม้ปิดระบบ (คั่นด้วย , หรือขึ้นบรรทัดใหม่)</label>
          <textarea name="council_test_student_codes" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(cfg.council_test_student_codes || '')}</textarea>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ข้อความขอบคุณหลังโหวต</label>
          <textarea name="council_election_thank_you_message" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(cfg.council_election_thank_you_message || '')}</textarea>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✍️ ผู้ลงนามเอกสาร/เกียรติบัตร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ครูที่ปรึกษาสภา</label>
            <input name="council_signer_advisor_name" value="${esc(cfg.council_signer_advisor_name || '')}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ผู้อำนวยการโรงเรียน</label>
            <input name="council_signer_director_name" value="${esc(cfg.council_signer_director_name || '')}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex justify-end">
        <button type="submit" class="px-6 py-2.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกการตั้งค่า</button>
      </div>
    </form>`
}

function renderSettingsPositions() {
  const byGender = {
    M: ctx.positions.filter(p => p.gender === 'M').sort((a, b) => a.sort_order - b.sort_order),
    W: ctx.positions.filter(p => p.gender === 'W').sort((a, b) => a.sort_order - b.sort_order),
  }
  const section = gender => {
    const label = gender === 'M' ? '👦 ฝ่ายชาย' : '👧 ฝ่ายหญิง'
    const rows = byGender[gender].map(p => `
      <form class="position-row-form flex items-center gap-2 py-2 border-b border-[var(--line-soft)] last:border-0" data-id="${p.id}">
        <input name="position_name" value="${esc(p.position_name)}" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-1.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <input name="seats_count" type="number" min="1" value="${p.seats_count}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
        ${p.is_elected ? '<span class="text-[0.625rem] font-bold px-2 py-1 rounded-full bg-[var(--gold-soft)] text-[var(--gold-ink)] flex-shrink-0">มาจากเลือกตั้ง</span>' : ''}
        <button type="submit" class="text-xs font-bold text-[var(--primary)] flex-shrink-0 px-2 py-1.5">บันทึก</button>
        <button type="button" class="btn-delete-position text-[var(--bad)] flex-shrink-0 px-1 text-lg leading-none" data-id="${p.id}" title="ลบตำแหน่ง">✕</button>
      </form>`).join('')
    return `
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${label}</p>
        ${rows || '<p class="text-xs text-[var(--muted-2)] py-2">ยังไม่มีตำแหน่ง</p>'}
        <form class="position-add-form flex gap-2 mt-3" data-gender="${gender}">
          <input name="position_name" placeholder="เพิ่มตำแหน่งใหม่" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
          <input name="seats_count" type="number" min="1" value="1" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-2 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
        </form>
      </div>`
  }
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${section('M')}${section('W')}</div>`
}

function renderSettingsCriteria() {
  if (interviewCriteria === null) { loadInterviewCriteria(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (endorsementPhrasesAdmin === null) { loadEndorsementPhrasesAdmin(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (evalCriteria === null) { loadEvalCriteria(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }

  const ivTotal = interviewCriteria.reduce((t, c) => t + Number(c.weight), 0)
  const passThreshold = (ivTotal / 2).toFixed(1)

  const interviewBlock = `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${ivTotal} คะแนน · ผ่านเกณฑ์ที่ ≥ ${passThreshold})</p>
      <div class="space-y-1.5 mt-2">
        ${interviewCriteria.map(c => `
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${esc(c.name)}</span>
            <span class="font-bold text-[var(--muted)]">${c.weight} คะแนน</span>
            <button type="button" class="btn-remove-interview-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${c.id}">✕</button>
          </div>`).join('') || '<p class="text-xs text-[var(--muted-2)]">ยังไม่มีหัวข้อ</p>'}
      </div>
      <form id="interview-criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มหัวข้อใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <input name="weight" type="number" min="1" value="10" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`

  const videoBrief = (() => { try { return JSON.parse(ctx.cfg.council_video_brief || '[]') } catch { return [] } })()
  const videoBlock = `
    <form id="settings-video-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎬 วิดีโอแนะนำตัว</p>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)]">ความยาวไม่เกิน</span>
        <input name="council_video_max_minutes" type="number" min="1" value="${esc(ctx.cfg.council_video_max_minutes || '3')}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
        <span class="text-xs text-[var(--muted)]">นาที</span>
      </div>
      <label class="block text-xs font-medium text-[var(--muted)]">หัวข้อที่ต้องพูด (บรรทัดละ 1 หัวข้อ)</label>
      <textarea name="council_video_brief" rows="5" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${esc(videoBrief.join('\n'))}</textarea>
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`

  const phraseBlock = `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">💬 ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ</p>
      <div class="space-y-1.5">
        ${endorsementPhrasesAdmin.map(p => `
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${esc(p.phrase)}</span>
            <button type="button" class="btn-remove-phrase text-[var(--bad)] hover:text-[#8a2f22]" data-id="${p.id}">✕</button>
          </div>`).join('') || '<p class="text-xs text-[var(--muted-2)]">ยังไม่มีข้อความ</p>'}
      </div>
      <form id="phrase-form" class="flex gap-2 mt-3">
        <input name="phrase" placeholder="เพิ่มข้อความใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`

  return `${interviewBlock}${videoBlock}${renderDutyCriteriaEditor()}${phraseBlock}`
}

function renderSettingsModules() {
  const modules = getModulesConfig()
  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(MODULE_LABELS).map(([key, label]) => `
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${esc(label)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${key}" ${modules[key] !== false ? 'checked' : ''} />
        </label>`).join('')}
    </div>`
}

// ─── เสนอคณะทำงาน (ประธาน) → แต่งตั้ง (ครูที่ปรึกษาสภา) — สเปคข้อ 8.6 ───────────────────────
const openPositionsByGender = {} // { M: [...], W: [...] } — undefined = ยังไม่โหลด
const interviewedByGender = {}
const pendingNomsByGender = {}

async function loadChairTeamData(gender) {
  const [positions, interviewed, noms] = await Promise.all([
    getOpenPositionsForNomination(gender).catch(() => []),
    getInterviewedForNomination(gender).catch(() => []),
    getPendingNominations(gender).catch(() => []),
  ])
  openPositionsByGender[gender] = positions
  interviewedByGender[gender] = interviewed
  pendingNomsByGender[gender] = noms
  render()
}

function renderChairTeamView() {
  const canPropose = ctx.isChair
  const canDecide = ctx.isAdmin || ctx.isCouncilAdvisor
  if (!canPropose && !canDecide) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>`

  const loading = `<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>`
  let html = ''

  if (canPropose) {
    const gender = normalizeGender(ctx.student?.gender)
    if (gender && openPositionsByGender[gender] === undefined) { loadChairTeamData(gender); html += loading }
    else if (gender) {
      const positions = openPositionsByGender[gender]
      const interviewed = interviewedByGender[gender] || []
      const mine = pendingNomsByGender[gender] || []
      const pendingAppIds = new Set(mine.map(n => n.application_id))
      const availableApplicants = interviewed.filter(a => !pendingAppIds.has(a.id))
      html += `
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${GENDER_LABEL[gender]}</p>
          ${!positions.length ? `<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>`
            : !availableApplicants.length ? `<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>`
            : `
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${positions.map(p => `<option value="${p.id}">${esc(p.position_name)}</option>`).join('')}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${availableApplicants.map(a => `<option value="${a.id}">${esc(a.students?.full_name ?? '—')}${a.council_interviews?.[0]?.score != null ? ' (คะแนน ' + a.council_interviews[0].score + ')' : ''}</option>`).join('')}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`}
        </div>`
      if (mine.length) {
        html += `
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${mine.map(n => `
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${studentPhoto(n.council_applications?.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(n.council_applications?.students?.full_name ?? '—')}</p>
                  <p class="text-xs text-[var(--muted)]">${esc(n.council_positions?.position_name ?? '—')}</p>
                </div>
              </div>`).join('')}</div>
          </div>`
      }
    }
  }

  if (canDecide) {
    html += ['M', 'W'].map(gender => {
      if (pendingNomsByGender[gender] === undefined) { loadChairTeamData(gender); return loading }
      const noms = pendingNomsByGender[gender]
      if (!noms.length) return ''
      return `
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${GENDER_LABEL[gender]}</p>
          <div class="space-y-2.5">
            ${noms.map(n => `
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${n.id}">
                <div class="flex items-center gap-3">
                  ${studentPhoto(n.council_applications?.students)}
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(n.council_applications?.students?.full_name ?? '—')}</p>
                    <p class="text-xs text-[var(--muted)]">${esc(n.council_positions?.position_name ?? '—')}</p>
                  </div>
                </div>
                ${n.council_applications?.motivation ? `<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${esc(n.council_applications.motivation)}</p>` : ''}
                <textarea class="nom-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]" data-id="${n.id}" rows="2" placeholder="ความเห็น (ไม่บังคับถ้าอนุมัติ, บังคับถ้าไม่อนุมัติ)"></textarea>
                <div class="flex gap-2">
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${n.id}" data-approve="false">❌ ไม่อนุมัติ</button>
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${n.id}" data-approve="true">✅ อนุมัติ</button>
                </div>
              </div>`).join('')}
          </div>
        </div>`
    }).join('')
  }

  return html || `<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>`
}

const SETTINGS_TAB_RENDERERS = {
  general: renderSettingsGeneral, positions: renderSettingsPositions,
  criteria: renderSettingsCriteria, modules: renderSettingsModules,
}

function renderSettingsView() {
  if (!(ctx.isAdmin || ctx.isCouncilAdvisor)) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>`
  if (!SETTINGS_TABS.some(t => t.id === settingsTab)) settingsTab = 'general'
  return `
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${SETTINGS_TABS.map(t => `
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${t.id === settingsTab ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]'}" data-tab="${t.id}">${esc(t.label)}</button>`).join('')}
    </div>
    <div>${SETTINGS_TAB_RENDERERS[settingsTab]()}</div>`
}

// ─── หน้าที่/งานของฉัน (สมาชิกสภา) — 2 แท็บย่อย (สเปคข้อ 8.8) ─────────────────────────────
let myDutySubtab = 'duty' // 'duty' | 'work'
let myRoutines = null // null = ยังไม่โหลด
let myRoutineLogDone = null // Set<routineId> — รูทีนที่ติ๊กแล้วในสัปดาห์นี้
let myAssignments = null

const DAY_NAMES = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']

function currentWeekStart() {
  const d = new Date()
  const day = d.getDay()
  const diff = (day === 0 ? -6 : 1) - day
  const monday = new Date(d)
  monday.setDate(d.getDate() + diff)
  monday.setHours(0, 0, 0, 0)
  return monday.toISOString().slice(0, 10)
}

async function loadMyDutyData() {
  const member = ctx.membership[0]
  if (!member) { myRoutines = []; myRoutineLogDone = new Set(); myAssignments = []; render(); return }
  const [routines, assignments] = await Promise.all([
    getMyRoutines(member.id).catch(() => []),
    getMyAssignments(member.id).catch(() => []),
  ])
  myRoutines = routines
  myAssignments = assignments
  myRoutineLogDone = await getRoutineLogsForWeek(routines.map(r => r.id), currentWeekStart()).catch(() => new Set())
  render()
}

function renderMyDutyView() {
  const member = ctx.membership[0]
  if (!member) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>`
  if (myRoutines === null) { loadMyDutyData(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }

  const tabs = `
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${myDutySubtab === 'duty' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]'}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${myDutySubtab === 'work' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]'}" data-tab="work">งานของฉัน</button>
    </div>`

  return `${tabs}${myDutySubtab === 'duty' ? renderMyDutyTab(member) : renderMyWorkTab()}`
}

function renderMyDutyTab(member) {
  const doneCount = myRoutines.filter(r => myRoutineLogDone.has(r.id)).length
  const pct = myRoutines.length ? Math.round((doneCount / myRoutines.length) * 100) : 0
  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${studentPhoto(ctx.student, 'w-14 h-18')}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(member.council_positions?.position_name ?? '—')}</p>
          <p class="text-xs text-[var(--muted)]">${member.source === 'elected' ? '🗳️ มาจากการเลือกตั้ง' : '✅ ได้รับการแต่งตั้ง'} · ${member.term_start_date ? new Date(member.term_start_date).toLocaleDateString('th-TH', { dateStyle: 'medium' }) : '—'}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${doneCount}/${myRoutines.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${pct}%"></div></div>
      ${myRoutines.length ? `<div class="space-y-1.5">${myRoutines.map(r => {
        const done = myRoutineLogDone.has(r.id)
        return `
        <label class="flex items-center gap-2.5 rounded-xl border ${done ? 'border-[var(--ok-soft-line)] bg-[var(--ok-soft)]' : 'border-[var(--line-soft)]'} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${r.id}" ${done ? 'checked' : ''} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${done ? 'text-[#106143] line-through' : 'text-[var(--ink-2)]'} truncate">${esc(r.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${r.day_of_week != null ? DAY_NAMES[r.day_of_week] : ''}${r.time_range ? ' · ' + esc(r.time_range) : ''}${r.location ? ' · ' + esc(r.location) : ''}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${r.id}">✕</button>
        </label>`
      }).join('')}</div>` : '<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${DAY_NAMES.map((d, i) => `<option value="${i}">${d}</option>`).join('')}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`
}

function renderMyWorkTab() {
  const openTasks = myAssignments.filter(a => a.status !== 'done')
  const doneTasks = myAssignments.filter(a => a.status === 'done')
  const taskCard = a => `
    <label class="flex items-center gap-2.5 rounded-xl border ${a.status === 'done' ? 'border-[var(--ok-soft-line)] bg-[var(--ok-soft)]' : 'border-[var(--line-soft)] bg-[var(--surface)]'} p-3">
      <input type="checkbox" class="assignment-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${a.id}" ${a.status === 'done' ? 'checked' : ''} />
      <div class="min-w-0 flex-1">
        <p class="text-sm ${a.status === 'done' ? 'text-[#106143] line-through' : 'text-[var(--ink)]'}">${esc(a.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${a.due_date ? 'กำหนดส่ง ' + new Date(a.due_date).toLocaleDateString('th-TH', { dateStyle: 'medium' }) : 'ไม่กำหนดวัน'}</p>
      </div>
      <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${a.status === 'done' ? 'bg-[var(--ok-soft-line)] text-[#106143]' : 'bg-[var(--gold-soft-line)] text-[var(--gold-ink)]'}">${a.status === 'done' ? 'ส่งงานแล้ว' : 'กำลังทำ'}</span>
    </label>`
  return `
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🎫 QR เช็คอินกิจกรรมของฉัน</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">แสดงให้ผู้ดูแลกิจกรรมสแกนเพื่อเช็คอิน</p>
      <button type="button" id="btn-show-my-council-qr" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">แสดง QR ของฉัน</button>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${doneTasks.length}/${myAssignments.length} เสร็จแล้ว)</p>
      ${myAssignments.length ? `<div class="space-y-2">${[...openTasks, ...doneTasks].map(taskCard).join('')}</div>` : `<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>`}
    </div>`
}

function showMyCouncilQr(student) {
  document.getElementById('council-my-qr-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'council-my-qr-modal'
  modal.className = 'fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${esc(student.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`
  document.body.appendChild(modal)
  const canvas = modal.querySelector('#council-my-qr-canvas')
  const draw = async () => {
    const payload = `SQ:${student.student_code}:${Math.floor(Date.now() / 1000)}`
    try { await QRCode.toCanvas(canvas, payload, { width: 190, margin: 1.5, color: { dark: '#111827', light: '#FFFFFF' } }) } catch { /* วาดไม่สำเร็จ ปล่อยแคนวาสว่าง ไม่บล็อกการปิดหน้าต่าง */ }
  }
  draw()
  let secs = 60
  const timerEl = modal.querySelector('#council-qr-timer')
  const timer = setInterval(() => {
    secs -= 1
    if (timerEl) timerEl.textContent = String(secs)
    if (secs <= 0) { secs = 60; draw() }
  }, 1000)
  const close = () => { clearInterval(timer); modal.remove() }
  modal.querySelector('#btn-close-council-qr').addEventListener('click', close)
  modal.addEventListener('click', e => { if (e.target === modal) close() })
}

// ─── มอบหมายงาน (ประธาน) — สเปคข้อ 8.7 ───────────────────────────────────────────
const assignmentsByGender = {} // { M: [...], W: [...] } — undefined = ยังไม่โหลด

async function loadAssignmentsData(gender) {
  assignmentsByGender[gender] = await getAssignmentsForGender(gender).catch(() => [])
  render()
}

function renderAssignmentsView() {
  if (!ctx.isChair) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>`
  const gender = normalizeGender(ctx.student?.gender)
  if (!gender) return ''
  if (assignmentsByGender[gender] === undefined) { loadAssignmentsData(gender); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  const list = assignmentsByGender[gender]
  const doneCount = list.filter(a => a.status === 'done').length
  const membersOfGender = ctx.members.filter(m => m.council_positions?.gender === gender)

  const form = `
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${GENDER_LABEL[gender]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${membersOfGender.map(m => `<option value="${m.id}">${esc(m.students?.full_name ?? '—')} (${esc(m.council_positions?.position_name ?? '')})</option>`).join('')}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`

  if (!list.length) return `${form}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`

  const card = a => `
    <div class="rounded-xl border ${a.status === 'done' ? 'border-[var(--ok-soft-line)] bg-[var(--ok-soft)]' : 'border-[var(--line-soft)] bg-[var(--surface)]'} p-3 flex items-center gap-3">
      ${studentPhoto(a.council_members?.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(a.council_members?.students?.full_name ?? '—')}</p>
        <p class="text-xs text-[var(--ink-2)]">${esc(a.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${a.due_date ? 'กำหนดส่ง ' + new Date(a.due_date).toLocaleDateString('th-TH', { dateStyle: 'medium' }) : 'ไม่กำหนดวัน'}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${a.status === 'done' ? 'bg-[var(--ok-soft-line)] text-[#106143]' : 'bg-[var(--gold-soft-line)] text-[var(--gold-ink)]'}">${a.status === 'done' ? 'ส่งงานแล้ว' : 'กำลังทำ'}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${a.id}">ลบ</button>
      </div>
    </div>`

  return `${form}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${doneCount}/${list.length} เสร็จแล้ว)</p><div class="space-y-2">${list.map(card).join('')}</div>`
}

// ─── มอบสิทธิ์ครูที่ปรึกษาสภานักเรียน (แอดมิน) — สเปคข้อ 8.19 ────────────────────────────
async function loadCouncilAdvisors() {
  councilAdvisors = await getCouncilAdvisorTeachers().catch(() => [])
  render()
}

function renderPermsView() {
  if (!ctx.isAdmin) return `<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>`
  if (councilAdvisors === null) { loadCouncilAdvisors(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }
  if (ivTeachers === null) { loadIvTeachers(); return `<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>` }

  const datalist = `<datalist id="council-teacher-datalist">${ivTeachers.map(t => `<option value="${esc(t.full_name)} · รหัส ${t.id}"></option>`).join('')}</datalist>`

  const addForm = `
    <form id="perms-add-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ เพิ่มครูที่ปรึกษาสภานักเรียน</p>
      <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
        class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เพิ่ม</button>
    </form>`

  const rosterCard = t => `
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] flex items-center gap-3">
      ${t.image_url
        ? `<img src="${esc(t.image_url)}" class="w-10 h-12 rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`
        : `<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${esc((t.full_name || '?').charAt(0))}</div>`}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${esc(t.full_name)}</p>
        <p class="text-xs text-[var(--muted)]">${esc(t.teacher_code || '')}${t.category ? ' · ' + esc(t.category) : ''}</p>
      </div>
      <button type="button" class="btn-remove-council-advisor text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)] flex-shrink-0" data-id="${t.id}">ถอดถอน</button>
    </div>`

  const roster = councilAdvisors.length
    ? `<div class="space-y-2">${councilAdvisors.map(rosterCard).join('')}</div>`
    : `<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีครูที่ปรึกษาสภานักเรียน</p>`

  return `${datalist}${addForm}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">ทำเนียบครูที่ปรึกษาสภานักเรียน (${councilAdvisors.length} คน)</p>${roster}`
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
  settings: renderSettingsView,
  chairteam: renderChairTeamView,
  myduty: renderMyDutyView,
  assignments: renderAssignmentsView,
  peerEndorse: renderPeerEndorseView,
  perms: renderPermsView,
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

  // เนื้อหาเต็มพื้นที่ที่มีจริง (ไม่ล็อก max-width) — ตามที่ผู้ใช้ทักท้วงว่าจอใหญ่ยังมีขอบว่าง
  // เหลือมาก ระยะขอบ (padding) ไล่กว้างขึ้นตาม breakpoint แทน ให้เนื้อหาไม่ชิดขอบจอเกินไป
  const renderer = VIEW_RENDERERS[activeView] || renderOverviewView
  content.innerHTML = `<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${renderer()}</div>`
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
    fullscreenFlow = null; flowSubtab = null; resetApplyWizard(); render()
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
  document.querySelectorAll('.roster-gender-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => { rosterGenderTab = btn.dataset.gender; render() })
  })
  document.querySelectorAll('.btn-peer-endorse').forEach(btn => {
    btn.addEventListener('click', () => handlePeerEndorsement(btn.dataset.id))
  })
  document.getElementById('btn-open-apply')?.addEventListener('click', () => {
    showApplyForm = true
    render()
  })
  document.getElementById('btn-cancel-apply')?.addEventListener('click', () => {
    resetApplyWizard()
    render()
  })
  document.getElementById('btn-apply-back')?.addEventListener('click', () => {
    applyStep = Math.max(1, applyStep - 1)
    render()
  })
  document.getElementById('apply-step1-form')?.addEventListener('submit', e => {
    e.preventDefault()
    const positionId = e.target.positionId.value
    if (!positionId) { showToast('กรุณาเลือกตำแหน่ง', 'warning'); return }
    applyData.positionId = positionId
    applyStep = 2
    render()
  })
  document.getElementById('apply-step2-form')?.addEventListener('submit', e => {
    e.preventDefault()
    const f = e.target
    const gpaGeneral = f.gpaGeneral.value
    const gpaReligious = f.gpaReligious.value
    const motivation = f.motivation.value.trim()
    const gGeneral = Number(gpaGeneral), gReligious = Number(gpaReligious)
    if (!gpaGeneral || !gpaReligious || gGeneral < 0 || gGeneral > 4 || gReligious < 0 || gReligious > 4) {
      showToast('กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)', 'warning'); return
    }
    const minGpa = Number(ctx.cfg.council_min_gpa || 2.5)
    const minGpaRel = Number(ctx.cfg.council_min_gpa_religious || 2.5)
    if (gGeneral < minGpa || gReligious < minGpaRel) {
      showToast(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${minGpa}, ศาสนา ≥ ${minGpaRel})`, 'warning'); return
    }
    if (motivation.length < 10) { showToast('กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร', 'warning'); return }
    applyData.gpaGeneral = gpaGeneral
    applyData.gpaReligious = gpaReligious
    applyData.motivation = motivation
    applyStep = 3
    render()
  })
  document.getElementById('apply-photo')?.addEventListener('change', e => {
    const file = e.target.files?.[0] ?? null
    applyPhotoFile = file
    if (applyPhotoPreviewUrl) URL.revokeObjectURL(applyPhotoPreviewUrl)
    applyPhotoPreviewUrl = file ? URL.createObjectURL(file) : null
    render()
  })
  document.getElementById('btn-apply-step3-next')?.addEventListener('click', () => {
    if (!applyPhotoFile) { showToast('กรุณาแนบรูปถ่าย', 'warning'); return }
    applyStep = 4
    render()
  })
  document.getElementById('apply-step4-form')?.addEventListener('submit', e => {
    e.preventDefault()
    const videoUrl = e.target.videoUrl.value.trim()
    if (!/^https?:\/\//.test(videoUrl)) { showToast('กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)', 'warning'); return }
    applyData.videoUrl = videoUrl
    showApplyConfirm = true
    render()
  })
  document.getElementById('btn-apply-edit')?.addEventListener('click', () => {
    showApplyConfirm = false
    render()
  })
  document.getElementById('apply-confirm-backdrop')?.addEventListener('click', e => {
    if (e.target.id === 'apply-confirm-backdrop') { showApplyConfirm = false; render() }
  })
  document.getElementById('btn-apply-confirm-submit')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-apply-confirm-submit')
    btn.disabled = true; btn.textContent = 'กำลังส่ง...'
    try {
      let photoUrl = null
      if (applyPhotoFile) photoUrl = await uploadCouncilApplicationPhoto(ctx.student.id, applyPhotoFile)
      await submitCouncilApplication({
        studentId: ctx.student.id,
        positionId: Number(applyData.positionId),
        academicYear: Number(ctx.cfg.academicYear) || new Date().getFullYear() + 543,
        motivation: applyData.motivation,
        photoUrl,
        gpaGeneral: Number(applyData.gpaGeneral),
        gpaReligious: Number(applyData.gpaReligious),
        introVideoUrl: applyData.videoUrl,
      })
      showToast('ส่งใบสมัครสำเร็จ ✅', 'success')
      resetApplyWizard()
      await refreshMyApplications()
      flowSubtab = 'mine'
      render()
    } catch (err) {
      showToast('ส่งใบสมัครไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = '✅ ยืนยันการสมัคร'
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
  wireSettingsEvents()
  wireChairTeamEvents()
  wireMyDutyEvents()
  wireAssignmentsEvents()
  wirePermsEvents()
}

// ─── มอบสิทธิ์ครูที่ปรึกษาสภานักเรียน ──────────────────────────────────────────────────
function wirePermsEvents() {
  document.getElementById('perms-add-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const text = f.teacherText.value.trim()
    const m = text.match(/· รหัส (\d+)$/)
    if (!m) { showToast('กรุณาเลือกชื่อครูจากรายการที่แสดง', 'warning'); return }
    const teacherId = Number(m[1])
    if (councilAdvisors.some(t => t.id === teacherId)) { showToast('ครูคนนี้เป็นครูที่ปรึกษาสภาอยู่แล้ว', 'warning'); return }
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await addCouncilAdvisor(teacherId)
      showToast('เพิ่มครูที่ปรึกษาสภาแล้ว ✅', 'success')
      councilAdvisors = null
      render()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'เพิ่ม'
    }
  })

  document.querySelectorAll('.btn-remove-council-advisor').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ถอดถอนออกจากครูที่ปรึกษาสภานักเรียน?')) return
      try {
        await removeCouncilAdvisor(Number(btn.dataset.id))
        councilAdvisors = null
        render()
      } catch (err) {
        showToast('ถอดถอนไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      }
    })
  })
}

// ─── หน้าที่/งานของฉัน (สมาชิกสภา) ──────────────────────────────────────────────────
function wireMyDutyEvents() {
  document.querySelectorAll('.myduty-subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => { myDutySubtab = btn.dataset.tab; render() })
  })

  document.getElementById('routine-add-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const task = f.task.value.trim()
    if (!task) { showToast('กรุณากรอกงานที่ต้องทำ', 'warning'); return }
    const member = ctx.membership[0]
    try {
      await addRoutine({
        memberId: member.id, dayOfWeek: f.dayOfWeek.value === '' ? null : Number(f.dayOfWeek.value),
        timeRange: f.timeRange.value.trim(), task, location: f.location.value.trim(),
      })
      myRoutines = null
      render()
    } catch (err) {
      showToast('เพิ่มไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  })

  document.querySelectorAll('.btn-remove-routine').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ลบรูทีนนี้?')) return
      try { await removeRoutine(Number(btn.dataset.id)); myRoutines = null; render() }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
  })

  document.querySelectorAll('.routine-check').forEach(chk => {
    chk.addEventListener('change', async () => {
      const routineId = Number(chk.dataset.id)
      const done = chk.checked
      chk.disabled = true
      try {
        await toggleRoutineLog({ routineId, weekStart: currentWeekStart(), done })
        if (done) myRoutineLogDone.add(routineId); else myRoutineLogDone.delete(routineId)
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        chk.checked = !done; chk.disabled = false
      }
    })
  })

  document.querySelectorAll('.assignment-check').forEach(chk => {
    chk.addEventListener('change', async () => {
      const id = Number(chk.dataset.id)
      const status = chk.checked ? 'done' : 'open'
      chk.disabled = true
      try {
        await updateAssignmentStatus(id, status)
        const a = myAssignments.find(x => x.id === id)
        if (a) a.status = status
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        chk.checked = !chk.checked; chk.disabled = false
      }
    })
  })

  document.getElementById('btn-show-my-council-qr')?.addEventListener('click', () => {
    if (ctx.student) showMyCouncilQr(ctx.student)
  })
}

// ─── มอบหมายงาน (ประธาน) ────────────────────────────────────────────────────────
function wireAssignmentsEvents() {
  document.getElementById('assignment-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const memberId = Number(f.memberId.value)
    const task = f.task.value.trim()
    if (!memberId || !task) { showToast('กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน', 'warning'); return }
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await createAssignment({ memberId, task, dueDate: f.dueDate.value || null, assignedByStudentId: ctx.student.id })
      showToast('มอบหมายงานแล้ว ✅', 'success')
      const gender = normalizeGender(ctx.student.gender)
      delete assignmentsByGender[gender]
      render()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'มอบหมายงาน'
    }
  })

  document.querySelectorAll('.btn-delete-assignment').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ลบงานที่มอบหมายนี้?')) return
      try {
        await deleteAssignment(Number(btn.dataset.id))
        const gender = normalizeGender(ctx.student.gender)
        delete assignmentsByGender[gender]
        render()
      } catch (err) {
        showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      }
    })
  })
}

// ─── เสนอคณะทำงาน (ประธาน) → แต่งตั้ง (ครูที่ปรึกษาสภา) ──────────────────────────────────
function wireChairTeamEvents() {
  document.getElementById('nominate-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const positionId = Number(f.positionId.value)
    const applicationId = Number(f.applicationId.value)
    if (!positionId || !applicationId) { showToast('กรุณาเลือกตำแหน่งและผู้สมัคร', 'warning'); return }
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังเสนอ...'
    try {
      await proposeNomination({ applicationId, positionId, proposedByStudentId: ctx.student.id })
      showToast('เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅', 'success')
      const gender = normalizeGender(ctx.student.gender)
      delete pendingNomsByGender[gender]
      delete interviewedByGender[gender]
      render()
    } catch (err) {
      showToast('เสนอไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'เสนอต่อครูที่ปรึกษาสภา'
    }
  })

  document.querySelectorAll('.btn-decide-nomination').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = Number(btn.dataset.id)
      const approve = btn.dataset.approve === 'true'
      const comment = document.querySelector(`.nom-comment[data-id="${id}"]`)?.value.trim() ?? ''
      if (!approve && !comment) { showToast('กรุณาระบุเหตุผลที่ไม่อนุมัติ', 'warning'); return }
      const card = btn.closest('[data-nom-card]')
      card?.querySelectorAll('button').forEach(b => { b.disabled = true })
      try {
        await decideNomination({ nominationId: id, approve, teacherId: ctx.teacher?.id ?? null, comment })
        showToast(approve ? 'อนุมัติแล้ว ✅' : 'ไม่อนุมัติแล้ว', 'success')
        delete openPositionsByGender.M; delete openPositionsByGender.W
        delete interviewedByGender.M; delete interviewedByGender.W
        delete pendingNomsByGender.M; delete pendingNomsByGender.W
        ctx.members = await getCouncilMembers().catch(() => ctx.members)
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        card?.querySelectorAll('button').forEach(b => { b.disabled = false })
      }
    })
  })
}

// ─── หน้าตั้งค่า (Phase 2) ──────────────────────────────────────────────────────
function wireSettingsEvents() {
  document.querySelectorAll('.settings-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => { settingsTab = btn.dataset.tab; render() })
  })

  document.getElementById('settings-general-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const updates = {
        council_name: f.council_name.value.trim(),
        council_logo_url: f.council_logo_url.value.trim(),
        council_theme_side_m: f.council_theme_side_m.value,
        council_theme_side_w: f.council_theme_side_w.value,
        council_term_start_semester: f.council_term_start_semester.value.trim(),
        council_term_start_year: f.council_term_start_year.value.trim(),
        council_term_end_semester: f.council_term_end_semester.value.trim(),
        council_term_end_year: f.council_term_end_year.value.trim(),
        council_min_gpa: f.council_min_gpa.value,
        council_min_gpa_religious: f.council_min_gpa_religious.value,
        council_eligible_grade_levels: f.council_eligible_grade_levels.value.trim(),
        council_require_teacher_endorsement: f.council_require_teacher_endorsement.checked ? 'true' : 'false',
        council_require_peer_endorsement: f.council_require_peer_endorsement.checked ? 'true' : 'false',
        council_apply_opens_at: f.council_apply_opens_at.value ? new Date(f.council_apply_opens_at.value).toISOString() : '',
        council_apply_closes_at: f.council_apply_closes_at.value ? new Date(f.council_apply_closes_at.value).toISOString() : '',
        council_visible_to_all: f.council_visible_to_all.checked ? 'true' : 'false',
        council_test_student_codes: f.council_test_student_codes.value.trim(),
        council_election_thank_you_message: f.council_election_thank_you_message.value.trim(),
        council_signer_advisor_name: f.council_signer_advisor_name.value.trim(),
        council_signer_director_name: f.council_signer_director_name.value.trim(),
      }
      await updateCouncilConfig(updates)
      ctx.cfg = { ...ctx.cfg, ...updates }
      applyBranding(ctx.cfg)
      showToast('บันทึกการตั้งค่าแล้ว ✅', 'success')
      render()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = '💾 บันทึกการตั้งค่า'
    }
  })

  document.querySelectorAll('.position-row-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault()
      const id = Number(form.dataset.id)
      const name = form.position_name.value.trim()
      const seats = Number(form.seats_count.value)
      if (!name || !seats) { showToast('กรอกชื่อและจำนวนที่นั่งให้ครบ', 'warning'); return }
      try {
        await updateCouncilPosition(id, { position_name: name, seats_count: seats })
        ctx.positions = await getCouncilPositions()
        showToast('บันทึกแล้ว ✅', 'success')
        render()
      } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
  })

  document.querySelectorAll('.btn-delete-position').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)')) return
      try {
        await deleteCouncilPosition(Number(btn.dataset.id))
        ctx.positions = await getCouncilPositions()
        render()
      } catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
  })

  document.querySelectorAll('.position-add-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault()
      const gender = form.dataset.gender
      const name = form.position_name.value.trim()
      const seats = Number(form.seats_count.value) || 1
      if (!name) { showToast('กรอกชื่อตำแหน่ง', 'warning'); return }
      try {
        await createCouncilPosition({ gender, positionName: name, seatsCount: seats, isElected: false, sortOrder: 999 })
        ctx.positions = await getCouncilPositions()
        showToast('เพิ่มตำแหน่งแล้ว ✅', 'success')
        render()
      } catch (err) { showToast('เพิ่มไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
  })

  document.getElementById('interview-criterion-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const name = f.name.value.trim()
    const weight = Number(f.weight.value)
    if (!name || !weight) { showToast('กรอกชื่อหัวข้อและคะแนนให้ครบ', 'warning'); return }
    try {
      await addInterviewCriterion({ name, weight })
      interviewCriteria = null
      render()
    } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
  })
  document.querySelectorAll('.btn-remove-interview-criterion').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?')) return
      try { await removeInterviewCriterion(Number(btn.dataset.id)); interviewCriteria = null; render() }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
  })

  document.getElementById('settings-video-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const minutes = f.council_video_max_minutes.value.trim()
    const brief = f.council_video_brief.value.split('\n').map(s => s.trim()).filter(Boolean)
    try {
      const updates = { council_video_max_minutes: minutes, council_video_brief: JSON.stringify(brief) }
      await updateCouncilConfig(updates)
      ctx.cfg = { ...ctx.cfg, ...updates }
      showToast('บันทึกแล้ว ✅', 'success')
      render()
    } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
  })

  document.getElementById('phrase-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const phrase = f.phrase.value.trim()
    if (!phrase) return
    try {
      await addEndorsementPhrase({ phrase, sortOrder: endorsementPhrasesAdmin?.length ?? 0 })
      endorsementPhrasesAdmin = null
      render()
    } catch (err) { showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
  })
  document.querySelectorAll('.btn-remove-phrase').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (!confirm('ลบข้อความนี้?')) return
      try { await removeEndorsementPhrase(Number(btn.dataset.id)); endorsementPhrasesAdmin = null; render() }
      catch (err) { showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error') }
    })
  })

  document.querySelectorAll('.module-toggle').forEach(chk => {
    chk.addEventListener('change', async () => {
      const modules = getModulesConfig()
      modules[chk.dataset.key] = chk.checked
      try {
        await updateCouncilConfig({ council_modules: JSON.stringify(modules) })
        ctx.cfg = { ...ctx.cfg, council_modules: JSON.stringify(modules) }
        showToast(chk.checked ? 'เปิดใช้งานแล้ว' : 'ปิดใช้งานแล้ว', 'success')
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        chk.checked = !chk.checked
      }
    })
  })
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

  // สแกน QR เช็คอิน (สเปคข้อ 8.8 "ทางเลือกสแกน QR จุดลงทะเบียนด้วย html5-qrcode") — ใช้ QR
  // ใบเดียวกับปุ่ม "แสดง QR" ในแท็บ "งานของฉัน" ของสมาชิก
  document.querySelectorAll('.btn-activity-scan').forEach(btn => {
    btn.addEventListener('click', async () => {
      const activityId = Number(btn.dataset.id)
      if (attendanceByActivity[activityId] === undefined) await loadAttendance(activityId)
      const activity = activities.find(a => a.id === activityId)
      const eligibleMembers = ctx.members.filter(m => !activity?.gender || m.council_positions?.gender === activity.gender)
      openCouncilCheckinScanner({
        activityId, activityTitle: btn.dataset.title,
        members: eligibleMembers, alreadyChecked: attendanceByActivity[activityId],
        onCheckedIn: memberId => { attendanceByActivity[activityId]?.add(memberId); render() },
      })
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
        if (annAckCounts) annAckCounts[id] = (annAckCounts[id] ?? 0) + 1
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
  document.querySelectorAll('.apps-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => { appsFilter = btn.dataset.filter; render() })
  })

  document.querySelectorAll('.btn-view-app-detail').forEach(btn => {
    btn.addEventListener('click', () => { adminAppDetailId = Number(btn.dataset.id); render() })
  })
  document.getElementById('btn-admin-app-detail-close')?.addEventListener('click', () => { adminAppDetailId = null; render() })
  document.getElementById('admin-app-detail-backdrop')?.addEventListener('click', e => {
    if (e.target.id === 'admin-app-detail-backdrop') { adminAppDetailId = null; render() }
  })

  document.querySelectorAll('.schedule-form').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault()
      const appId = Number(form.dataset.appId)
      const ivId = form.dataset.ivId ? Number(form.dataset.ivId) : null
      const scheduledAt = form.scheduled_at.value
      const location = form.location.value.trim()
      if (!scheduledAt) { showToast('กรุณาระบุวันเวลานัดสัมภาษณ์', 'warning'); return }

      const interviewerText = form.interviewerText.value.trim()
      let interviewerTeacherId = null
      if (interviewerText) {
        const m = interviewerText.match(/· รหัส (\d+)$/)
        if (!m) { showToast('กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)', 'warning'); return }
        interviewerTeacherId = Number(m[1])
      }

      const btn = form.querySelector('button[type="submit"]')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        const scheduledAtIso = new Date(scheduledAt).toISOString()
        await scheduleCouncilInterview({ applicationId: appId, existingInterviewId: ivId, scheduledAt: scheduledAtIso, location, interviewerTeacherId })
        showToast('นัดสัมภาษณ์แล้ว ✅', 'success')
        // ส่ง push แจ้งนักเรียน (ของเสริม ไม่บล็อกการบันทึกหลัก) — reuse pattern Edge Function
        // 'send-push' เดียวกับที่ใช้แจ้งผลคำร้องขอสอบ (js/teacher-views-grades.js)
        const profileId = form.dataset.profileId
        if (profileId) {
          const when = new Date(scheduledAtIso).toLocaleString('th-TH', { dateStyle: 'medium', timeStyle: 'short' })
          supabase.functions.invoke('send-push', {
            body: {
              title: '🗓️ นัดสัมภาษณ์สภานักเรียน',
              body: `${form.dataset.positionName || ''} — ${when}${location ? ' · ' + location : ''}`,
              url: 'council.html', profileIds: [profileId],
            },
          }).catch(() => { /* เงียบไว้ ไม่กระทบผู้ใช้ */ })
        }
        adminApps = null
        render()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึกนัดสัมภาษณ์'
      }
    })
  })

  // อัปเดตคะแนนรวมสดทุกครั้งที่แก้ตัวเลขรายหัวข้อ (สเปคข้อ 8.5 "แสดงคะแนนรวมสด")
  document.querySelectorAll('.score-form').forEach(form => {
    const maxWeight = Number(form.dataset.maxWeight)
    const passThreshold = Number(form.dataset.passThreshold)
    const totalEl = form.querySelector('.score-total-display')
    const recalc = () => {
      let total = 0
      form.querySelectorAll('.score-input').forEach(inp => { if (inp.value !== '') total += Number(inp.value) })
      if (totalEl) totalEl.textContent = `${total} / ${maxWeight} · ต้อง ≥ ${passThreshold} จึงผ่าน`
    }
    form.querySelectorAll('.score-input').forEach(inp => inp.addEventListener('input', recalc))

    form.addEventListener('submit', async e => {
      e.preventDefault()
      const appId = Number(form.dataset.appId)
      const ivId = form.dataset.ivId ? Number(form.dataset.ivId) : null
      if (!ivId) { showToast('ไม่พบข้อมูลการนัดสัมภาษณ์', 'error'); return }
      const scores = {}
      let total = 0
      form.querySelectorAll('.score-input').forEach(inp => {
        if (inp.value !== '') { scores[inp.dataset.criterionId] = Number(inp.value); total += Number(inp.value) }
      })
      // ตัดสินอัตโนมัติที่ครึ่งหนึ่งของคะแนนเต็ม (สเปคข้อ 8.5) ไม่มีการเลือก ผ่าน/ไม่ผ่าน เอง
      const result = total >= passThreshold ? 'pass' : 'fail'
      const comment = form.comment.value.trim()
      const btn = form.querySelector('button[type="submit"]')
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        await saveCouncilInterviewScore({ interviewId: ivId, applicationId: appId, score: total, scores, result, comment })
        showToast(`บันทึกผลสัมภาษณ์แล้ว ✅ (${result === 'pass' ? 'ผ่าน' : 'ไม่ผ่าน'})`, 'success')
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

  // ─── โปรไฟล์ผู้สมัครเต็มรูปแบบ (สเปคข้อ 8.11) ───────────────────────────────────
  document.querySelectorAll('.candidate-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      candidateProfileOpen = { gender: btn.dataset.gender, id: Number(btn.dataset.id) }
      candidateEditMode = false
      render()
    })
  })
  document.getElementById('btn-candidate-modal-close')?.addEventListener('click', () => {
    candidateProfileOpen = null; candidateEditMode = false; render()
  })
  document.getElementById('candidate-modal-backdrop')?.addEventListener('click', e => {
    if (e.target.id === 'candidate-modal-backdrop') { candidateProfileOpen = null; candidateEditMode = false; render() }
  })
  document.getElementById('btn-candidate-edit')?.addEventListener('click', () => { candidateEditMode = true; render() })
  document.getElementById('btn-candidate-cancel-edit')?.addEventListener('click', () => { candidateEditMode = false; render() })
  document.getElementById('candidate-edit-form')?.addEventListener('submit', async e => {
    e.preventDefault()
    const f = e.target
    const candidateId = Number(f.dataset.candidateId)
    const slogan = f.slogan.value.trim()
    const vision = f.vision.value.trim()
    const policies = f.policies.value.split('\n').map(s => s.trim()).filter(Boolean)
    const experience = f.experience.value.split('\n').map(s => s.trim()).filter(Boolean)
    const btn = f.querySelector('button[type="submit"]')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await updateCandidateProfile({ candidateId, slogan, vision, policies, experience })
      const { gender } = candidateProfileOpen
      candidatesByGender[gender] = await getCandidatesForElection(electionOf(gender).id).catch(() => candidatesByGender[gender])
      candidateEditMode = false
      showToast('บันทึกโปรไฟล์ผู้สมัครแล้ว ✅', 'success')
      render()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = 'บันทึก'
    }
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
