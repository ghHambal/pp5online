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
    document.getElementById('council-sidebar').classList.add('hidden')
    document.getElementById('council-bottom-tabs').classList.add('hidden')
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

  ctx = {
    role, isAdmin, student, applications, membership, positions, members, elections, cfg,
    teacher, homeroomMainRooms, pendingEndorsements, endorsementPhrases,
  }
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
  const items = [{ id: 'overview', icon: '🏠', label: 'ภาพรวม' }]
  if (ctx.role === 'student') items.push({ id: 'apply', icon: '📝', label: 'สมัคร' })
  if (ctx.role === 'teacher' && ctx.pendingEndorsements.length) {
    items.push({ id: 'endorse', icon: '✋', label: 'รอยืนยัน', badge: ctx.pendingEndorsements.length })
  }
  items.push({ id: 'election', icon: '🗳️', label: 'เลือกตั้ง' })
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
  if (personal) return `<div class="space-y-4">${personal}</div>`
  const hint = ctx.role === 'student'
    ? 'ใช้เมนู "สมัคร" เพื่อสมัครเป็นสภานักเรียน หรือดูเมนู "เลือกตั้ง"/"สภานักเรียน" เพื่อติดตามความเคลื่อนไหว'
    : 'ดูเมนู "เลือกตั้ง"/"สภานักเรียน" เพื่อติดตามความเคลื่อนไหวของสภานักเรียน'
  return `
    <div class="bg-white rounded-2xl border border-gray-100 p-6 text-center">
      <p class="text-3xl mb-2">🏛️</p>
      <p class="text-sm font-bold text-gray-700 mb-1">ยินดีต้อนรับสู่ระบบสภานักเรียน</p>
      <p class="text-xs text-gray-500 max-w-xs mx-auto">${hint}</p>
    </div>`
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

// ─── สถานะการเลือกตั้ง (public) ────────────────────────────────────────────────
function renderElectionView() {
  const elections = ctx.elections
  if (!elections.length) return `<p class="text-sm text-gray-400 text-center py-16">ยังไม่มีข้อมูลการเลือกตั้ง</p>`
  const now = new Date()
  const statusOf = e => {
    if (e.results_published_at) return { label: '✅ ประกาศผลแล้ว', cls: 'bg-emerald-100 text-emerald-700' }
    if (e.closes_at && new Date(e.closes_at) < now) return { label: '🔒 ปิดโหวตแล้ว รอประกาศผล', cls: 'bg-amber-100 text-amber-700' }
    if (e.opens_at && new Date(e.opens_at) <= now && (!e.closes_at || new Date(e.closes_at) > now)) return { label: '🗳️ กำลังเปิดโหวต', cls: 'bg-violet-100 text-violet-700' }
    return { label: '⏳ ยังไม่เปิดโหวต', cls: 'bg-gray-100 text-gray-500' }
  }
  return `
    <div class="bg-white rounded-2xl border border-gray-100 p-4">
      <p class="text-sm font-bold text-gray-700 mb-3">🗳️ การเลือกตั้งประธานสภานักเรียน</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${elections.map(e => {
          const st = statusOf(e)
          return `<div class="rounded-xl border border-gray-100 p-3 flex items-center justify-between gap-2">
            <span class="text-sm font-medium text-gray-600">สภา${esc(GENDER_LABEL[e.gender] ?? e.gender)}</span>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full ${st.cls}">${st.label}</span>
          </div>`
        }).join('')}
      </div>
    </div>`
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

const VIEW_RENDERERS = {
  overview: renderOverviewView,
  apply: renderApplyView,
  endorse: renderEndorseView,
  election: renderElectionView,
  roster: renderRosterView,
}

function render() {
  const items = getNavItems()
  if (!items.some(it => it.id === activeView)) activeView = 'overview'
  renderNav(items)

  const renderer = VIEW_RENDERERS[activeView] || renderOverviewView
  content.innerHTML = `<div class="max-w-2xl mx-auto px-4 py-4">${renderer()}</div>`
  wireContentEvents()
}

function wireContentEvents() {
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
}

init()
