import { supabase } from './supabase.js'
import { blockPullToRefresh } from './anti-pull-refresh.js'
import { getMyStudentProfile } from './student-api.js'
import {
  getCouncilConfig, getCouncilPositions, getCouncilMembers,
  getCouncilElectionConfigs, getMyCouncilApplications, getMyCouncilMembership,
} from './council-api.js'

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const content = document.getElementById('council-content')

const GENDER_LABEL = { M: 'ชาย', W: 'หญิง' }

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

async function init() {
  blockPullToRefresh()

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return }

  const { data: profile } = await supabase.from('profiles').select('role, is_also_admin').eq('id', session.user.id).single()
  const role = profile?.role
  const isAdmin = role === 'admin' || profile?.is_also_admin === true

  const [cfg, positions, members, elections] = await Promise.all([
    getCouncilConfig(), getCouncilPositions(), getCouncilMembers(), getCouncilElectionConfigs(),
  ])
  applyBranding(cfg)

  // ปิดการแสดงผลได้จากหน้าตั้งค่าแอดมิน — ปิดแล้วเข้าได้เฉพาะแอดมิน/ครูที่ได้รับมอบหมายเป็นแอดมิน
  if (cfg.council_visible_to_all === 'false' && !isAdmin) {
    content.innerHTML = `
      <div class="max-w-md mx-auto px-4 py-20 text-center text-gray-400">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-gray-600">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`
    return
  }

  let student = null, applications = [], membership = []
  if (role === 'student') {
    student = await getMyStudentProfile().catch(() => null)
    if (student) {
      ;[applications, membership] = await Promise.all([
        getMyCouncilApplications(student.id).catch(() => []),
        getMyCouncilMembership(student.id).catch(() => []),
      ])
    }
  }

  render({ role, student, applications, membership, positions, members, elections })
}

function applyBranding(cfg) {
  const name = cfg.council_name || 'ระบบสภานักเรียน'
  document.title = name
  document.getElementById('council-title').textContent = name
  if (cfg.council_logo_url) {
    const logo = document.getElementById('council-logo')
    logo.src = cfg.council_logo_url
    logo.classList.remove('hidden')
    document.getElementById('council-logo-fallback').classList.add('hidden')
  }
}

// ─── การ์ดสถานะสภาส่วนตัว — โผล่เฉพาะคนที่มีใบสมัคร/เป็นสมาชิกอยู่ ─────────────────
function renderPersonalCard({ applications, membership }) {
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

// ─── สถานะการเลือกตั้ง (public) ────────────────────────────────────────────────
function renderElectionStatus(elections) {
  if (!elections.length) return ''
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
function renderRoster(members) {
  const byGender = { M: [], W: [] }
  members.forEach(m => { if (byGender[m.council_positions?.gender]) byGender[m.council_positions.gender].push(m) })

  const genderBlock = g => {
    const list = byGender[g].slice().sort((a, b) => (a.council_positions?.sort_order ?? 99) - (b.council_positions?.sort_order ?? 99))
    return `
      <div>
        <p class="text-xs font-bold text-gray-400 mb-2">สภานักเรียน${GENDER_LABEL[g]}</p>
        ${list.length ? `<div class="space-y-2">${list.map(m => `
          <div class="flex items-center gap-3 rounded-xl border border-gray-100 p-2.5">
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
    <div class="bg-white rounded-2xl border border-gray-100 p-4">
      <p class="text-sm font-bold text-gray-700 mb-3">🏛️ สภานักเรียนของเรา</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${genderBlock('M')}
        ${genderBlock('W')}
      </div>
    </div>`
}

function render(ctx) {
  content.innerHTML = `
    <div class="max-w-2xl mx-auto px-4 py-4 space-y-4">
      ${ctx.role === 'student' ? renderPersonalCard(ctx) : ''}
      ${renderElectionStatus(ctx.elections)}
      ${renderRoster(ctx.members)}
      <div class="bg-white rounded-2xl border border-dashed border-gray-200 p-6 text-center text-gray-400 text-sm">
        🚧 หน้าสมัคร/โหวต/จัดการกิจกรรม/ตั้งค่า ยังอยู่ระหว่างพัฒนา
      </div>
    </div>`
}

init()
