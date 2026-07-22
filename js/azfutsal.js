import { promptpayQRDataURL } from './promptpay.js'
import { uploadAzfutsalPlayerPhoto } from './storage.js'
import { loadConfetti, fireConfetti } from './confetti-loader.js'

const T = {
  MS: { label: 'ม.ต้น', accent: '#db2777', base: '#ec4899', soft: '#fdf2f8', border: '#f9d4e6' },
  HS: { label: 'ม.ปลาย', accent: '#16a34a', base: '#22c55e', soft: '#f0fdf4', border: '#bbf0cf' },
}

// สีธีมของแต่ละระดับชั้นตั้งค่าได้จากแอดมิน (cfg COLOR_MS / COLOR_HS) — mix() ไล่เฉดจากสีหลักที่เลือก
function mix(hex, target, amt) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16)
  const rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(c => Math.round(c + (target - c) * amt))
  return '#' + rgb.map(c => Math.max(0, Math.min(255, c)).toString(16).padStart(2, '0')).join('')
}
function applyThemeColors() {
  const ms = /^#[0-9a-fA-F]{6}$/.test(cfg('COLOR_MS', '')) ? cfg('COLOR_MS') : '#ec4899'
  const hs = /^#[0-9a-fA-F]{6}$/.test(cfg('COLOR_HS', '')) ? cfg('COLOR_HS') : '#22c55e'
  T.MS.base = ms; T.MS.accent = mix(ms, 0, 0.15); T.MS.soft = mix(ms, 255, 0.94); T.MS.border = mix(ms, 255, 0.78)
  T.HS.base = hs; T.HS.accent = mix(hs, 0, 0.15); T.HS.soft = mix(hs, 255, 0.94); T.HS.border = mix(hs, 255, 0.78)
}

// บัญชี Supabase Auth ตายตัวสำหรับ login แอดมินแบบยูสเซอร์เนม/รหัสผ่านโดยเฉพาะ (ไม่ผูกกับบัญชีครู/นักเรียนจริง)
// รหัสผ่านตรวจสอบฝั่งเซิร์ฟเวอร์โดย Supabase Auth เอง ไม่มีการเก็บ/เทียบรหัสผ่านฝั่ง client
const STANDALONE_ADMIN_EMAIL = 'azfutsal.standalone.admin@pp5online.internal'
const STANDALONE_ADMIN_PROFILE_ID = '8112d7c9-ab32-4e63-9026-ab2367401d4c'

// M1-M6 first round (12 teams). M7-M9 recovery from losers. M10/M11 from W1-4.
// M12/M13 = W5/W6 + recovery pick (REC_1/REC_2, stored directly once chosen).
// M14/M15 semis, M16 third place, M17 final.
const MS_BRACKET = [
  { code: 'M1', round: 'รอบแรก' }, { code: 'M2', round: 'รอบแรก' }, { code: 'M3', round: 'รอบแรก' },
  { code: 'M4', round: 'รอบแรก' }, { code: 'M5', round: 'รอบแรก' }, { code: 'M6', round: 'รอบแรก' },
  { code: 'M7', round: 'รอบแก้ตัว', refA: 'L_M1', refB: 'L_M2' },
  { code: 'M8', round: 'รอบแก้ตัว', refA: 'L_M3', refB: 'L_M4' },
  { code: 'M9', round: 'รอบแก้ตัว', refA: 'L_M5', refB: 'L_M6' },
  { code: 'M10', round: 'ก่อนรองฯ', refA: 'W_M1', refB: 'W_M2' },
  { code: 'M11', round: 'ก่อนรองฯ', refA: 'W_M3', refB: 'W_M4' },
  { code: 'M12', round: 'ก่อนรองฯ', refA: 'W_M5', refB: 'REC_1' },
  { code: 'M13', round: 'ก่อนรองฯ', refA: 'W_M6', refB: 'REC_2' },
  { code: 'M14', round: 'รองฯ', refA: 'W_M10', refB: 'W_M11' },
  { code: 'M15', round: 'รองฯ', refA: 'W_M12', refB: 'W_M13' },
  { code: 'M16', round: 'ชิงที่ 3', refA: 'L_M14', refB: 'L_M15' },
  { code: 'M17', round: 'ชิงที่ 1', refA: 'W_M14', refB: 'W_M15' },
]
// M1-M7 first round (14 teams). M8-M10 recovery from losers of M1-M6 only (M7 has no partner).
// M11 = wildcard from winners of M8-M10 (pick 2 of 3, stored directly).
const HS_BRACKET = [
  { code: 'M1', round: 'รอบแรก' }, { code: 'M2', round: 'รอบแรก' }, { code: 'M3', round: 'รอบแรก' },
  { code: 'M4', round: 'รอบแรก' }, { code: 'M5', round: 'รอบแรก' }, { code: 'M6', round: 'รอบแรก' },
  { code: 'M7', round: 'รอบแรก' },
  { code: 'M8', round: 'รอบแก้ตัว', refA: 'L_M1', refB: 'L_M2' },
  { code: 'M9', round: 'รอบแก้ตัว', refA: 'L_M3', refB: 'L_M4' },
  { code: 'M10', round: 'รอบแก้ตัว', refA: 'L_M5', refB: 'L_M6' },
  { code: 'M11', round: 'ไวด์การ์ด', refA: 'WC_1', refB: 'WC_2' },
  { code: 'M12', round: 'ก่อนรองฯ', refA: 'W_M1', refB: 'W_M2' },
  { code: 'M13', round: 'ก่อนรองฯ', refA: 'W_M3', refB: 'W_M4' },
  { code: 'M14', round: 'ก่อนรองฯ', refA: 'W_M5', refB: 'W_M7' },
  { code: 'M15', round: 'ก่อนรองฯ', refA: 'W_M6', refB: 'W_M11' },
  { code: 'M16', round: 'รองฯ', refA: 'W_M12', refB: 'W_M13' },
  { code: 'M17', round: 'รองฯ', refA: 'W_M14', refB: 'W_M15' },
  { code: 'M18', round: 'ชิงที่ 3', refA: 'L_M16', refB: 'L_M17' },
  { code: 'M19', round: 'ชิงที่ 1', refA: 'W_M16', refB: 'W_M17' },
]
const BRACKET = { MS: MS_BRACKET, HS: HS_BRACKET }
const FINAL_CODE = { MS: 'M17', HS: 'M19' }
const THIRD_CODE = { MS: 'M16', HS: 'M18' }
const RECOVER_SOURCES = { MS: ['M7', 'M8', 'M9'] }
const WILDCARD_SOURCES = { HS: ['M8', 'M9', 'M10'] }

const esc = v => String(v ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const money = n => Number(n || 0).toLocaleString('th-TH')

let SB = null
let ROOT = null
let S = {
  tab: 'schedule',
  filterLevel: 'ALL',
  filterTeam: '',
  filterTime: '',
  statsLevel: 'MS',
  teamStatusLevel: 'MS',
  teamStatusExpanded: null,
  adminSection: 'general',
  newTeamName: '',
  newTeamLevel: 'MS',
  rosterLookupCode: '',
  rosterLookupResult: null, // student row or 'notfound' | null
  rosterJersey: '',
  adminManageTeamId: null,
  adminCreatingTeam: false,
  capLookupCode: '',
  capLookupResult: null, // student row or 'notfound' | null
  adminLoginOpen: false,
  adminLoginUsername: '',
  adminLoginError: '',
  confirmRegOpen: false,
  confirmRegTeamId: null,
  confirmRegQR: null,
  paymentUploading: false,
  teamCreating: false,
  rejectPaymentId: null,
  rejectReasonText: '',
  viewProofOpen: false,
  viewProofUrl: null,
  liveDraw: null, // { level, order:[teamId...] (สับแล้ว), slotSeq:[{code,side}], pickIndex, filled:{`${code}_${side}`:teamId}, phase:'idle'|'spinning' }
  certModalOpen: false,
  certInput: '',
  certResult: null,
  certFullscreen: false,
  editMatch: null, // { level, code }
  eventPicker: null, // { team: 'a'|'b', type: 'goal'|'yellow'|'red' }
  eventPickerFilter: '',
  adminTeamLevel: 'MS',
  adminPaymentsLevel: 'MS',
  staffList: null,

  identity: { session: null, profile: null, isAdmin: false, student: null, teacher: null },
  config: {},
  teams: [],
  players: [],
  matches: { MS: [], HS: [] },
  matchEvents: [],
  awards: [],
  payments: [],
  loading: true,
}

function cfg(key, fallback = '') { return S.config[key] ?? fallback }

async function loadAll() {
  const { data: { session } } = await SB.auth.getSession()
  let profile = null, isAdmin = false, student = null, teacher = null
  if (session) {
    const { data: p } = await SB.from('profiles').select('id, role, user_code, is_also_admin').eq('id', session.user.id).maybeSingle()
    profile = p || null
    if (profile) {
      const { data: adminRow } = await SB.from('azfutsal_admins').select('id').eq('profile_id', profile.id).maybeSingle()
      isAdmin = !!adminRow
      const { data: st } = await SB.from('students').select('id, student_code, full_name, class_name, main_room').eq('profile_id', profile.id).maybeSingle()
      student = st || null
      const { data: tc } = await SB.from('teachers').select('id, full_name, teacher_code').eq('profile_id', profile.id).maybeSingle()
      teacher = tc || null
    }
  }
  S.identity = { session, profile, isAdmin, student, teacher }

  const [{ data: config }, { data: teams }, { data: players }, { data: msMatches }, { data: hsMatches }, { data: awards }, { data: matchEvents }] = await Promise.all([
    SB.from('azfutsal_config').select('key, value'),
    SB.from('azfutsal_teams').select('id, level, name, captain_student_id, vice_captain_student_id, payment_method, team_code, is_reserve, is_organizer, created_at, captain:students!azfutsal_teams_captain_student_id_fkey(full_name), vice_captain:students!azfutsal_teams_vice_captain_student_id_fkey(full_name)'),
    SB.from('azfutsal_players').select('id, team_id, student_id, jersey_number, photo_url, registered_at, students(id, full_name, student_code, class_name, image_url, photo_url)'),
    SB.from('azfutsal_matches').select('*').eq('level', 'MS'),
    SB.from('azfutsal_matches').select('*').eq('level', 'HS'),
    SB.from('azfutsal_awards').select('id, level, award_type, student_id, students(id, full_name)'),
    SB.from('azfutsal_match_events').select('id, level, match_code, team_id, player_id, event_type, created_at').order('created_at'),
  ])
  S.config = Object.fromEntries((config || []).map(r => [r.key, r.value]))
  applyThemeColors()
  S.teams = teams || []
  S.players = players || []
  S.matches = { MS: msMatches || [], HS: hsMatches || [] }
  S.awards = awards || []
  S.matchEvents = matchEvents || []

  // สถานะการชำระเงินเปิดอ่านสาธารณะ (ไม่มีข้อมูลอ่อนไหว) เพื่อให้แท็บ "สถานะทีม" ใช้ได้โดยไม่ต้อง login
  const { data: payments } = await SB.from('azfutsal_payments').select('*').order('created_at', { ascending: false })
  S.payments = payments || []

  S.loading = false
}

// ---------------- bracket resolution ----------------
function teamName(id) { return S.teams.find(t => t.id === id)?.name || '' }

function matchByCode(level, code) { return S.matches[level].find(m => m.match_code === code) }

function resolveMatch(level, code, seen = new Set()) {
  const m = matchByCode(level, code)
  if (!m) return { teamA: '', teamB: '', teamAId: null, teamBId: null, winnerId: null, loserId: null }
  if (seen.has(code)) return { teamA: '', teamB: '', teamAId: null, teamBId: null, winnerId: null, loserId: null }
  seen.add(code)
  const def = BRACKET[level].find(b => b.code === code) || {}
  let teamAId = m.team_a_id, teamBId = m.team_b_id
  if (!teamAId && def.refA) teamAId = resolveRef(level, def.refA, seen)
  if (!teamBId && def.refB) teamBId = resolveRef(level, def.refB, seen)
  let winnerId = m.winner_team_id, loserId = m.loser_team_id
  if (!winnerId && m.score_a !== null && m.score_b !== null && m.score_a !== m.score_b && teamAId && teamBId) {
    winnerId = m.score_a > m.score_b ? teamAId : teamBId
    loserId = m.score_a > m.score_b ? teamBId : teamAId
  }
  return { teamA: teamName(teamAId), teamB: teamName(teamBId), teamAId, teamBId, winnerId, loserId, match: m }
}

function resolveRef(level, ref, seen) {
  if (!ref) return null
  if (ref.startsWith('W_M')) return resolveMatch(level, ref.slice(2), seen).winnerId
  if (ref.startsWith('L_M')) return resolveMatch(level, ref.slice(2), seen).loserId
  return null
}

// นับจำนวนเหตุการณ์ (ประตู/เหลือง/แดง) ของนัดหนึ่งๆ จาก log เหตุการณ์รายคน — ไม่มีการเก็บตัวเลขรวมแยกไว้ต่างหากอีกแล้ว
function matchEventCounts(level, code, teamId) {
  const evs = S.matchEvents.filter(e => e.level === level && e.match_code === code && e.team_id === teamId)
  return {
    goal: evs.filter(e => e.event_type === 'goal').length,
    yellow: evs.filter(e => e.event_type === 'yellow').length,
    red: evs.filter(e => e.event_type === 'red').length,
  }
}

function computeTeamStats(level) {
  const teams = new Map()
  const reg = id => { if (!id) return; if (!teams.has(id)) teams.set(id, { id, team: teamName(id), gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, y: 0, r: 0 }) }
  S.matches[level].forEach(m => {
    const r = resolveMatch(level, m.match_code)
    if (!r.teamAId || !r.teamBId || m.score_a === null || m.score_b === null) return
    reg(r.teamAId); reg(r.teamBId)
    const ta = teams.get(r.teamAId), tb = teams.get(r.teamBId)
    ta.gp++; tb.gp++
    ta.gf += m.score_a; ta.ga += m.score_b; tb.gf += m.score_b; tb.ga += m.score_a
    if (m.score_a > m.score_b) { ta.w++; tb.l++ }
    else if (m.score_a < m.score_b) { tb.w++; ta.l++ }
    else { ta.d++; tb.d++ }
  })
  S.matchEvents.filter(e => e.level === level && e.event_type !== 'goal').forEach(e => {
    const t = teams.get(e.team_id)
    if (!t) return
    if (e.event_type === 'yellow') t.y++
    else if (e.event_type === 'red') t.r++
  })
  return Array.from(teams.values()).map(t => ({ ...t, gd: t.gf - t.ga })).sort((a, b) =>
    b.w - a.w || (b.gd - a.gd) || (b.gf - a.gf) || (a.r - b.r) || (a.y - b.y) || a.team.localeCompare(b.team, 'th'))
}

function playerGoals(playerId) {
  return S.matchEvents.filter(e => e.event_type === 'goal' && e.player_id === playerId).length
}

function computeTopScorers(level) {
  const counts = new Map()
  S.matchEvents.filter(e => e.event_type === 'goal' && e.level === level).forEach(e => {
    counts.set(e.player_id, (counts.get(e.player_id) || 0) + 1)
  })
  return Array.from(counts.entries())
    .map(([playerId, goals]) => {
      const p = S.players.find(pl => pl.id === playerId)
      if (!p) return null
      return { name: p.students?.full_name || '', team: teamName(p.team_id), goals, studentId: p.student_id }
    })
    .filter(Boolean)
    .sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name, 'th'))
    .slice(0, 20)
}

function computeSummary(level) {
  const final = resolveMatch(level, FINAL_CODE[level])
  const third = resolveMatch(level, THIRD_CODE[level])
  const award = type => S.awards.find(a => a.level === level && a.award_type === type)?.students?.full_name || ''
  return {
    champion: final.winnerId ? teamName(final.winnerId) : '',
    runnerUp: final.loserId ? teamName(final.loserId) : '',
    third: third.winnerId ? teamName(third.winnerId) : '',
    consolation: third.loserId ? teamName(third.loserId) : '',
    mvp: award('mvp'), topScorer: award('top_scorer'), bestGK: award('best_gk'),
  }
}

// ---------------- shared UI bits ----------------
function azToast(msg) {
  let el = document.getElementById('az-toast')
  if (!el) {
    el = document.createElement('div')
    el.id = 'az-toast'
    el.style.cssText = 'position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:9999;background:#111827;color:#fff;font-size:12.5px;padding:9px 16px;border-radius:10px;box-shadow:0 6px 18px rgba(0,0,0,.2);animation:azToastIn .15s ease'
    document.body.appendChild(el)
  }
  el.textContent = msg
  el.style.display = 'block'
  clearTimeout(el._t)
  el._t = setTimeout(() => { el.style.display = 'none' }, 1800)
}

function goToLogin(page = 'student-login.html') {
  const url = new URL(`${page}?next=azfutsal.html`, window.location.href).href
  try {
    if (window.self !== window.top) { window.top.location.href = url; return }
  } catch { /* cross-origin top access blocked, fall through */ }
  window.location.href = url
}

function levelBadge(level) {
  const t = T[level]
  return `<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;background:${t.base};color:#fff">${t.label}</span>`
}

function reserveBadge() {
  return `<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;background:#fef3c7;color:#b45309">ทีมสำรอง</span>`
}

function organizerBadge() {
  return `<span style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;background:#e0e7ff;color:#4338ca">ทีมผู้จัด</span>`
}

// ---------------- render: shell ----------------
export async function renderAzfutsal(root, supabaseClient) {
  ROOT = root
  SB = supabaseClient
  root.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;color:#9ca3af;font-size:13px">กำลังโหลด...</div>`
  await loadAll()
  draw()
  bindEvents()
}

async function refresh() {
  await loadAll()
  draw()
}

function draw() {
  const s = S
  const accent = '#db2777'
  ROOT.innerHTML = `
  <div style="max-width:440px;margin:0 auto;min-height:100vh;background:#fff;position:relative;box-shadow:0 0 40px rgba(0,0,0,.06);color:#111827">
    ${header()}
    <main style="padding:16px 20px 100px">
      ${s.tab === 'teamStatus' ? teamStatusView() : ''}
      ${s.tab === 'schedule' ? scheduleView() : ''}
      ${s.tab === 'teams' ? statsView() : ''}
      ${s.tab === 'summary' ? summaryView() : ''}
      ${s.tab === 'myteam' ? myTeamView() : ''}
      ${s.tab === 'admin' && s.identity.isAdmin ? adminView() : ''}
    </main>
    ${bottomNav()}
    ${s.certModalOpen ? certModal() : ''}
    ${s.editMatch ? matchEditorModal() : ''}
    ${s.adminLoginOpen ? adminLoginModal() : ''}
    ${s.confirmRegOpen ? confirmRegistrationModal() : ''}
    ${s.viewProofOpen ? viewProofModal() : ''}
    ${s.rejectPaymentId ? rejectReasonModal() : ''}
    ${s.liveDraw ? liveDrawView() : ''}
  </div>`
  if (S.identity.isAdmin && S.adminSection === 'staff') loadStaffList()
}

function header() {
  const s = S
  const eventName = cfg('EVENT_NAME', 'AZFUTSALCUP2025')
  const date = cfg('INFO_DATE', '-'), venue = cfg('INFO_VENUE', '-')
  return `
  <header style="position:sticky;top:0;z-index:30;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border-bottom:1px solid #ececec;padding:16px 20px 14px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
      <div>
        <h1 style="margin:0;font-size:20px;font-weight:800;letter-spacing:-.02em;color:#db2777">${esc(eventName)}</h1>
        <p style="margin:4px 0 0;font-size:12px;color:#6b7280">${esc(date)} · ${esc(venue)}</p>
      </div>
      <div style="display:flex;gap:8px">
        <button data-act="account" style="width:38px;height:38px;border-radius:12px;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#f3f4f6;color:#9ca3af" aria-label="บัญชี">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
        <button data-act="admin-gear" style="width:38px;height:38px;border-radius:12px;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;background:${s.identity.isAdmin ? '#db2777' : '#f3f4f6'};color:${s.identity.isAdmin ? '#fff' : '#9ca3af'}" aria-label="แอดมิน">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
        </button>
      </div>
    </div>
  </header>`
}

function bottomNav() {
  const s = S
  const item = (tab, label, icon) => `
    <button data-act="tab" data-tab="${tab}" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;padding:6px 2px;cursor:pointer;color:${s.tab === tab ? '#db2777' : '#9ca3af'}">
      ${icon}<span style="font-size:10.5px;font-weight:${s.tab === tab ? 800 : 600}">${label}</span>
    </button>`
  if (s.tab === 'admin' && s.identity.isAdmin) {
    const activeGroup = groupOfSection(s.adminSection).id
    return `
    <nav style="position:fixed;bottom:0;left:0;right:0;z-index:40;background:#fff;border-top:1px solid #ececec">
      <div style="max-width:440px;margin:0 auto;display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        ${ADMIN_GROUPS.map(g => `<button data-act="adminGroup" data-v="${g.id}" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;background:none;border:none;padding:6px 2px;cursor:pointer;color:${activeGroup === g.id ? '#db2777' : '#9ca3af'}"><span style="font-size:19px;line-height:1">${g.icon}</span><span style="font-size:10px;font-weight:${activeGroup === g.id ? 800 : 600}">${g.label}</span></button>`).join('')}
      </div>
    </nav>`
  }
  if (s.tab === 'myteam') {
    return `
    <nav style="position:fixed;bottom:0;left:0;right:0;z-index:40;background:#fff;border-top:1px solid #ececec">
      <div style="max-width:440px;margin:0 auto;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        <button data-act="tab" data-tab="schedule" style="width:100%;padding:10px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">← กลับหน้าหลัก</button>
      </div>
    </nav>`
  }
  return `
  <nav style="position:fixed;bottom:0;left:0;right:0;z-index:40;background:#fff;border-top:1px solid #ececec">
    <div style="max-width:440px;margin:0 auto;display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
      ${item('teamStatus', 'สถานะทีม', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>')}
      ${item('teams', 'สถิติทีม', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>')}
      ${item('schedule', 'ตาราง', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>')}
      ${item('summary', 'สรุปผล', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>')}
    </div>
  </nav>`
}

// ---------------- schedule ----------------
function scheduleRows() {
  const rows = []
  ;(S.filterLevel === 'ALL' ? ['MS', 'HS'] : [S.filterLevel]).forEach(level => {
    BRACKET[level].forEach(def => {
      const r = resolveMatch(level, def.code)
      const m = r.match
      rows.push({ level, code: def.code, round: def.round, teamA: r.teamA, teamB: r.teamB, teamAId: r.teamAId, teamBId: r.teamBId, m })
    })
  })
  return rows.filter(r => {
    if (S.filterTeam && !`${r.teamA} ${r.teamB}`.toLowerCase().includes(S.filterTeam.toLowerCase())) return false
    if (S.filterTime && !(r.m?.kickoff_time || '').includes(S.filterTime)) return false
    return true
  })
}

function scheduleView() {
  const rows = scheduleRows()
  return `
  <section>
    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:2px">
      <h2 style="margin:0;font-size:17px;font-weight:800">ตารางการแข่งขัน</h2>
      <span id="az-schedule-count" style="font-size:11px;color:#9ca3af;font-weight:600">${rows.length} นัด</span>
    </div>
    <p style="margin:0 0 14px;font-size:12px;color:#6b7280">${esc(cfg('INFO_VENUE', ''))}</p>
    ${cfg('REGISTRATION_OPEN', '0') === '1' ? `
    <button data-act="account" style="width:100%;margin-bottom:14px;padding:12px;border-radius:12px;border:none;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
      📝 ลงทะเบียนทีม (สมัครเข้าร่วมการแข่งขัน)
    </button>` : ''}
    <div style="display:flex;gap:6px;margin-bottom:10px">
      ${['ALL', 'MS', 'HS'].map(v => `<button data-act="setLevel" data-v="${v}" style="font-size:12.5px;padding:7px 14px;border-radius:9px;border:1px solid ${S.filterLevel === v ? '#db2777' : '#e5e7eb'};background:${S.filterLevel === v ? '#db2777' : '#fff'};color:${S.filterLevel === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${v === 'ALL' ? 'ทั้งหมด' : T[v].label}</button>`).join('')}
    </div>
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <input id="az-filterTeam" value="${esc(S.filterTeam)}" placeholder="ค้นหาชื่อทีม" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:10px;padding:9px 12px;font-size:13px;outline:none;background:#faf9f8"/>
      <input id="az-filterTime" value="${esc(S.filterTime)}" placeholder="เวลา เช่น 09:00" style="width:132px;border:1px solid #e5e7eb;border-radius:10px;padding:9px 12px;font-size:13px;outline:none;background:#faf9f8"/>
    </div>
    <div id="az-schedule-rows" style="display:flex;flex-direction:column;gap:10px">
      ${rows.length ? rows.map(matchCard).join('') : `<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ไม่พบนัดที่ตรงกับตัวกรอง</div>`}
    </div>
  </section>`
}

function eventPlayerName(playerId) {
  const p = S.players.find(pl => pl.id === playerId)
  return p?.students?.full_name || ''
}

function matchCard(r) {
  const t = T[r.level]
  const m = r.m
  const hasScore = m && m.score_a !== null && m.score_b !== null
  const cA = m ? matchEventCounts(r.level, r.code, r.teamAId) : { goal: 0, yellow: 0, red: 0 }
  const cB = m ? matchEventCounts(r.level, r.code, r.teamBId) : { goal: 0, yellow: 0, red: 0 }
  const cardsBits = []
  if (cA.yellow) cardsBits.push(`${r.teamA} 🟨x${cA.yellow}`)
  if (cA.red) cardsBits.push(`${r.teamA} 🟥x${cA.red}`)
  if (cB.yellow) cardsBits.push(`${r.teamB} 🟨x${cB.yellow}`)
  if (cB.red) cardsBits.push(`${r.teamB} 🟥x${cB.red}`)
  const scorerNames = teamId => S.matchEvents.filter(e => e.level === r.level && e.match_code === r.code && e.team_id === teamId && e.event_type === 'goal').map(e => eventPlayerName(e.player_id)).filter(Boolean)
  const scorersA = m ? scorerNames(r.teamAId) : [], scorersB = m ? scorerNames(r.teamBId) : []
  return `
  <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      ${levelBadge(r.level)}
      <span style="font-size:11px;color:#9ca3af;font-weight:600">${esc(r.round)} · ${r.code}</span>
      <span style="flex:1"></span>
      <span style="font-size:10.5px;font-weight:700;color:${hasScore ? '#6b7280' : t.base}">${hasScore ? 'จบการแข่งขัน' : 'รอแข่ง'}</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px">
      <div style="flex:1;min-width:0">
        <div style="font-size:14px;font-weight:700;line-height:1.35;overflow-wrap:break-word">${esc(r.teamA) || '<span style=\"color:#c1c5cc\">รอผลรอบก่อน</span>'}</div>
        <div style="font-size:14px;font-weight:700;line-height:1.35;overflow-wrap:break-word;margin-top:4px">${esc(r.teamB) || '<span style=\"color:#c1c5cc\">รอผลรอบก่อน</span>'}</div>
      </div>
      ${hasScore ? `<div style="text-align:right;flex-shrink:0"><div style="font-size:26px;font-weight:800;line-height:1.2">${m.score_a}</div><div style="font-size:26px;font-weight:800;line-height:1.2">${m.score_b}</div></div>`
        : `<div style="text-align:right;flex-shrink:0;font-size:15px;font-weight:800;color:#374151">${esc(m?.kickoff_time || '')}</div>`}
    </div>
    ${(scorersA.length || scorersB.length) ? `<div style="margin-top:8px;font-size:11px;color:#6b7280">⚽ ${esc([...scorersA, ...scorersB].join(', '))}</div>` : ''}
    ${cardsBits.length ? `<div style="display:flex;gap:10px;margin-top:4px;font-size:11px;color:#6b7280">${esc(cardsBits.join(' · '))}</div>` : ''}
    ${S.identity.isAdmin ? `<button data-act="editMatch" data-level="${r.level}" data-code="${r.code}" style="margin-top:8px;width:100%;padding:7px;border-radius:9px;border:1px solid ${t.border};background:#fff;color:${t.accent};font-weight:700;font-size:12px;cursor:pointer">แก้ไขผล/เวลา</button>` : ''}
  </div>`
}

// ---------------- team status ----------------
function teamStatusRow(team) {
  const t = T[team.level]
  const roster = S.players.filter(p => p.team_id === team.id)
  const payment = S.payments.find(p => p.team_id === team.id)
  const maxRoster = Number(cfg('MAX_ROSTER', 12))
  const payStatus = payment ? payment.status : 'unpaid'
  const payMap = {
    verified: ['ยืนยันแล้ว', '#16a34a', '#dcfce7'],
    pending: ['รอตรวจสอบ', '#f59e0b', '#fef3c7'],
    rejected: ['ถูกปฏิเสธ', '#dc2626', '#fee2e2'],
    unpaid: ['ยังไม่ชำระ', '#6b7280', '#f3f4f6'],
  }
  const [label, color, bg] = payMap[payStatus]
  return `
  <div style="border:1px solid ${t.border};background:${t.soft};border-radius:12px;padding:12px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px">
      <div style="display:flex;align-items:center;gap:6px;min-width:0">
        <span style="font-size:13.5px;font-weight:700;overflow-wrap:break-word">${esc(team.name)}</span>
        ${team.is_reserve ? reserveBadge() : ''}${team.is_organizer ? organizerBadge() : ''}
      </div>
      <span style="flex-shrink:0;font-size:10.5px;font-weight:700;padding:3px 9px;border-radius:999px;background:${bg};color:${color};white-space:nowrap">${label}</span>
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:${roster.length ? '8px' : '0'}">หัวหน้าทีม: ${team.captain?.full_name ? esc(team.captain.full_name) : '-'} · นักกีฬา ${roster.length}/${maxRoster} คน</div>
    ${roster.length ? `<button data-act="toggleTeamRoster" data-id="${team.id}" style="font-size:11px;font-weight:700;color:${t.accent};background:none;border:none;padding:0;cursor:pointer">${S.teamStatusExpanded === team.id ? '▲ ซ่อนรายชื่อทีม' : '▼ ดูรายชื่อทีม'}</button>` : ''}
    ${S.teamStatusExpanded === team.id ? `
    <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin-top:10px">
      ${[...roster].sort((a, b) => (a.jersey_number ?? 999) - (b.jersey_number ?? 999)).map(p => rosterPhotoCard(p)).join('')}
    </div>` : ''}
  </div>`
}

function teamStatusView() {
  const level = S.teamStatusLevel
  const rows = S.teams.filter(t => t.level === level)
  const verifiedCount = rows.filter(t => S.payments.find(p => p.team_id === t.id)?.status === 'verified').length
  const reserveCount = rows.filter(t => t.is_reserve).length
  const pendingCount = rows.filter(t => S.payments.find(p => p.team_id === t.id)?.status === 'pending').length
  const rank = t => {
    const status = S.payments.find(p => p.team_id === t.id)?.status || 'unpaid'
    if (t.is_reserve) return 2
    if (status === 'verified') return 0
    return 1
  }
  const sorted = [...rows].sort((a, b) => rank(a) - rank(b) || a.name.localeCompare(b.name, 'th'))
  return `
  <section>
    <h2 style="margin:0 0 4px;font-size:17px;font-weight:800">สถานะทีม</h2>
    <p style="margin:0 0 14px;font-size:12px;color:#6b7280">ภาพรวมการลงทะเบียนและการชำระเงินของทุกทีม</p>
    <div style="display:flex;gap:6px;margin-bottom:12px">
      ${['MS', 'HS'].map(v => `<button data-act="setTeamStatusLevel" data-v="${v}" style="font-size:12.5px;padding:7px 14px;border-radius:9px;border:1px solid ${level === v ? T[v].base : '#e5e7eb'};background:${level === v ? T[v].base : '#fff'};color:${level === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${T[v].label}</button>`).join('')}
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:14px">
      ${verifiedCount}/${rows.length} ทีมยืนยันแล้ว${pendingCount ? ` · ${pendingCount} ทีมรอตรวจสอบ` : ''}${reserveCount ? ` · ${reserveCount} ทีมสำรอง` : ''}
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${sorted.length ? sorted.map(teamStatusRow).join('') : `<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ยังไม่มีทีมลงทะเบียนในระดับนี้</div>`}
    </div>
  </section>`
}

// ---------------- team stats ----------------
function statsView() {
  const level = S.statsLevel
  const t = T[level]
  const rows = computeTeamStats(level)
  const scorers = computeTopScorers(level)
  return `
  <section>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
      <h2 style="margin:0;font-size:17px;font-weight:800">สถิติทีม</h2>
      <div style="display:flex;gap:6px">
        ${['MS', 'HS'].map(v => `<button data-act="setStats" data-v="${v}" style="font-size:12px;padding:6px 12px;border-radius:9px;border:1px solid ${S.statsLevel === v ? T[v].base : '#e5e7eb'};background:${S.statsLevel === v ? T[v].base : '#fff'};color:${S.statsLevel === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${T[v].label}</button>`).join('')}
      </div>
    </div>
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px">
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:12.5px;white-space:nowrap">
          <thead><tr>
            ${['ทีม', 'GP', 'ชนะ', 'แพ้', 'GF', 'GA', 'GD', 'Y', 'R'].map(h => `<th style="text-align:${h === 'ทีม' ? 'left' : 'center'};padding:6px 8px;font-weight:700;color:#6b7280">${h}</th>`).join('')}
          </tr></thead>
          <tbody>
            ${rows.length ? rows.map((r, i) => `
              <tr style="background:${i % 2 === 0 ? '#fff' : (level === 'MS' ? '#FFF1F8' : '#EEFBF1')}">
                <td style="padding:7px 8px;font-weight:600">${esc(r.team)}</td>
                <td style="text-align:center;padding:7px 6px">${r.gp}</td>
                <td style="text-align:center;padding:7px 6px;color:#16a34a;font-weight:700">${r.w}</td>
                <td style="text-align:center;padding:7px 6px;color:#dc2626;font-weight:700">${r.l}</td>
                <td style="text-align:center;padding:7px 6px">${r.gf}</td>
                <td style="text-align:center;padding:7px 6px">${r.ga}</td>
                <td style="text-align:center;padding:7px 6px;font-weight:600">${r.gd}</td>
                <td style="text-align:center;padding:7px 6px">${r.y}</td>
                <td style="text-align:center;padding:7px 6px">${r.r}</td>
              </tr>`).join('') : `<tr><td colspan="9" style="text-align:center;padding:16px;color:#9ca3af">ยังไม่มีผลการแข่งขัน</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px;margin-top:12px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">ดาวซัลโว · ${t.label}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${scorers.length ? scorers.map(s => `
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:26px;height:26px;border-radius:50%;background:#e5e7eb;flex-shrink:0"></div>
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${esc(s.name)}</div><div style="font-size:11.5px;color:#6b7280">${esc(s.team)}</div></div>
            <div style="font-size:15px;font-weight:800;color:${t.accent}">${s.goals}</div>
          </div>`).join('') : `<div style="color:#9ca3af;font-size:12.5px">ยังไม่มีข้อมูลประตู</div>`}
      </div>
    </div>
  </section>`
}

// ---------------- summary ----------------
function summaryView() {
  return `
  <section>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:8px">
      <h2 style="margin:0;font-size:17px;font-weight:800">สรุปผล &amp; รางวัล</h2>
      <button data-act="openCert" style="display:flex;align-items:center;gap:5px;font-size:11.5px;padding:8px 12px;border-radius:9px;border:1px solid #db2777;color:#db2777;background:#fff;font-weight:700;cursor:pointer;white-space:nowrap">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        เกียรติบัตร
      </button>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px">
      ${['MS', 'HS'].map(level => {
        const t = T[level], sum = computeSummary(level)
        return `
        <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:16px">
          <div style="font-weight:800;font-size:14px;color:${t.accent};margin-bottom:10px">${t.label}</div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🥇</span><div><div style="font-size:11px;color:#6b7280">แชมป์</div><div style="font-size:13.5px;font-weight:700">${esc(sum.champion) || '-'}</div></div></div>
            <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🥈</span><div><div style="font-size:11px;color:#6b7280">รองแชมป์</div><div style="font-size:13.5px;font-weight:700">${esc(sum.runnerUp) || '-'}</div></div></div>
            <div style="display:flex;align-items:center;gap:10px"><span style="font-size:18px">🥉</span><div><div style="font-size:11px;color:#6b7280">อันดับ 3</div><div style="font-size:13.5px;font-weight:700">${esc(sum.third) || '-'}</div></div></div>
          </div>
          <div style="border-top:1px solid rgba(0,0,0,.06);padding-top:10px;display:flex;flex-direction:column;gap:6px">
            <div style="display:flex;justify-content:space-between;font-size:12.5px"><span style="color:#6b7280">MVP</span><span style="font-weight:700">${esc(sum.mvp) || '-'}</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12.5px"><span style="color:#6b7280">ดาวซัลโว</span><span style="font-weight:700">${esc(sum.topScorer) || '-'}</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12.5px"><span style="color:#6b7280">ผู้รักษาประตูยอดเยี่ยม</span><span style="font-weight:700">${esc(sum.bestGK) || '-'}</span></div>
          </div>
        </div>`
      }).join('')}
    </div>
  </section>`
}

function certModal() {
  const enabled = cfg('CERT_ENABLED', '1') === '1'
  const r = S.certResult
  if (S.certFullscreen && r) {
    const t = T[r.level]
    return `
    <div style="position:fixed;inset:0;z-index:65;background:#fff;display:flex;flex-direction:column">
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;gap:20px">
        <div style="border:2px solid ${t.border};background:${t.soft};border-radius:20px;padding:40px 32px;text-align:center;width:100%;max-width:340px">
          <div style="font-size:12px;letter-spacing:.1em;color:${t.accent};font-weight:700;margin-bottom:14px">เกียรติบัตร</div>
          <div style="font-size:14px;color:#6b7280;margin-bottom:4px">${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2025'))}</div>
          <div style="font-size:26px;font-weight:800;margin:16px 0 6px">${esc(r.name)}</div>
          <div style="font-size:14px;color:#6b7280;margin-bottom:16px">${esc(r.team)} · ${t.label}</div>
          <div style="font-size:18px;font-weight:700;color:${t.accent}">${esc(r.award)}</div>
        </div>
        <div style="display:flex;gap:10px;width:100%;max-width:320px">
          <button data-act="certBack" style="flex:1;padding:12px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;font-weight:700;font-size:13.5px;cursor:pointer">ย้อนกลับ</button>
          <button data-act="certClose" style="flex:1;padding:12px;border-radius:10px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">ปิด</button>
        </div>
      </div>
    </div>`
  }
  return `
  <div style="position:fixed;inset:0;z-index:65;background:#fff;display:flex;flex-direction:column">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #ececec;flex-shrink:0">
      <h3 style="margin:0;font-size:15px;font-weight:800">ค้นหาเกียรติบัตร</h3>
      <button data-act="certClose" style="border:none;background:none;color:#9ca3af;font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="padding:20px;overflow-y:auto;flex:1">
      ${!enabled ? `<div style="text-align:center;padding:24px 0;color:#9ca3af;font-size:13px">ยังไม่เปิดใช้งานเกียรติบัตรสำหรับรุ่นนี้</div>` : `
      <p style="margin:0 0 12px;font-size:13px;color:#6b7280">กรอกรหัสนักเรียนของคุณเพื่อค้นหาเกียรติบัตร</p>
      <div style="display:flex;gap:8px;margin-bottom:18px">
        <input id="az-certInput" value="${esc(S.certInput)}" placeholder="รหัสนักเรียน" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:10px;padding:11px 14px;font-size:14px"/>
        <button data-act="certSearch" style="padding:0 18px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">ค้นหา</button>
      </div>
      ${r ? (() => {
        const t = T[r.level]
        return `
        <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:22px;text-align:center">
          <div style="font-size:11px;letter-spacing:.08em;color:${t.accent};font-weight:700;margin-bottom:8px">เกียรติบัตร</div>
          <div style="font-size:13px;color:#6b7280;margin-bottom:2px">${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2025'))}</div>
          <div style="font-size:19px;font-weight:800;margin:10px 0 4px">${esc(r.name)}</div>
          <div style="font-size:12.5px;color:#6b7280;margin-bottom:10px">${esc(r.team)} · ${t.label}</div>
          <div style="font-size:14px;font-weight:700;color:${t.accent}">${esc(r.award)}</div>
        </div>
        <div style="display:flex;gap:8px;margin-top:14px">
          <button data-act="certFull" style="flex:1;padding:12px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;font-weight:700;font-size:13.5px;cursor:pointer">เปิดเต็มจอ</button>
        </div>`
      })() : (S.certInput && S.certResult === null ? `<div style="text-align:center;padding:24px 0;color:#9ca3af;font-size:13px">ไม่พบข้อมูล กรุณาตรวจสอบรหัสนักเรียน</div>` : '')}
      `}
    </div>
  </div>`
}

// ---------------- account: register / manage team (full screen) ----------------
function backMsg(msg) {
  return `<section><div style="text-align:center;padding:60px 20px;color:#6b7280;font-size:13.5px">${esc(msg)}</div></section>`
}

// รูปที่หัวหน้าทีมอัปโหลดเอง (photo_url) มาก่อนรูปประจำตัวจากฐานข้อมูลกลางของโรงเรียนเสมอ
function playerPhotoUrl(p) {
  return p.photo_url || p.students?.image_url || p.students?.photo_url
}

function photoTag(url) {
  return url
    ? `<img src="${esc(url)}" style="width:34px;height:34px;border-radius:50%;object-fit:cover;flex-shrink:0"/>`
    : `<div style="width:34px;height:34px;border-radius:50%;background:#e5e7eb;flex-shrink:0"></div>`
}

// การ์ดรูปนักกีฬาแบบมีมิติ (เงา+แสงตกกระทบ) สำหรับรายชื่อทีมสาธารณะ
function rosterPhotoCard(p) {
  const url = playerPhotoUrl(p)
  const initial = esc((p.students?.full_name || '?').replace(/^[ดญ]\.[ชญ]\./, '').trim().charAt(0))
  const fallbackStyle = 'width:100%;height:100%;background:#e5e7eb;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:22px;font-weight:800'
  const photo = url
    ? `<img src="${esc(url)}" style="width:100%;height:100%;object-fit:cover" onerror="this.replaceWith(Object.assign(document.createElement('div'),{textContent:'${initial}',style:'${fallbackStyle}'}))"/>`
    : `<div style="${fallbackStyle}">${initial}</div>`
  return `
  <div style="background:#fff;border-radius:16px;box-shadow:0 3px 10px rgba(0,0,0,.1);overflow:hidden">
    <div style="position:relative;margin:8px 8px 0;aspect-ratio:1;border-radius:12px;overflow:hidden;box-shadow:0 5px 14px rgba(0,0,0,.22)">
      ${photo}
      <div style="position:absolute;inset:0;background:linear-gradient(135deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,0) 45%, rgba(0,0,0,0) 70%, rgba(0,0,0,.08) 100%);pointer-events:none"></div>
      ${p.jersey_number !== null && p.jersey_number !== undefined ? `<div style="position:absolute;bottom:4px;right:4px;background:rgba(17,24,39,.75);color:#fff;font-size:11px;font-weight:800;padding:2px 7px;border-radius:999px">#${esc(p.jersey_number)}</div>` : ''}
    </div>
    <div style="padding:6px 8px 9px;text-align:center">
      <div style="font-size:11.5px;font-weight:700;line-height:1.3;overflow-wrap:break-word">${esc(p.students?.full_name || '')}</div>
    </div>
  </div>`
}

function myTeamView() {
  const s = S
  if (!s.identity.session) return backMsg('กรุณาเข้าสู่ระบบ pp5 ก่อน')
  if (s.identity.isAdmin) {
    if (s.adminManageTeamId) {
      const team = s.teams.find(t => t.id === s.adminManageTeamId)
      if (team) return manageTeamView(team, true)
      s.adminManageTeamId = null
    }
    if (s.adminCreatingTeam) return createTeamView(true)
    return adminTeamPickerView()
  }
  if (!s.identity.student) return backMsg('หน้านี้สำหรับนักเรียน (หัวหน้าทีม/ตัวแทนทีม) เท่านั้น')
  const myTeam = s.teams.find(t => t.captain_student_id === s.identity.student.id)
  return myTeam ? manageTeamView(myTeam, false) : createTeamView(false)
}

function adminTeamPickerView() {
  return `
  <section>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;gap:8px">
      <h2 style="margin:0;font-size:17px;font-weight:800">จัดการทีม (แอดมิน)</h2>
      <button data-act="adminNewTeam" style="font-size:12px;padding:8px 12px;border-radius:9px;border:none;background:#db2777;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">+ สร้างทีมใหม่</button>
    </div>
    <p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">เลือกทีมเพื่อจัดการนักกีฬา/หัวหน้า-รองหัวหน้าทีม/การชำระเงิน</p>
    ${['MS', 'HS'].map(level => {
      const rows = S.teams.filter(t => t.level === level)
      const quota = Number(cfg(level === 'MS' ? 'MAX_TEAMS_MS' : 'MAX_TEAMS_HS', '') || 0)
      const verifiedCount = S.payments.filter(p => p.status === 'verified' && S.teams.find(t2 => t2.id === p.team_id)?.level === level).length
      return `<div style="margin-bottom:14px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <div style="font-weight:700;font-size:12.5px;color:${T[level].accent}">${T[level].label}</div>
          ${quota > 0 ? `<span style="font-size:11px;color:#6b7280">${verifiedCount}/${quota} ทีมยืนยันแล้ว</span>` : ''}
        </div>
        ${rows.length ? rows.map(t => `
          <button data-act="adminOpenTeam" data-id="${t.id}" style="display:block;width:100%;text-align:left;border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;margin-bottom:6px;background:#fff;cursor:pointer">
            <div style="display:flex;align-items:center;gap:6px"><span style="font-size:13px;font-weight:700">${esc(t.name)}</span>${t.is_reserve ? reserveBadge() : ''}${t.is_organizer ? organizerBadge() : ''}</div>
            <div style="font-size:11px;color:#6b7280">${S.players.filter(p => p.team_id === t.id).length} คน${t.team_code ? ' · ' + esc(t.team_code) : ''}</div>
          </button>`).join('') : `<div style="font-size:12px;color:#9ca3af">ยังไม่มีทีม</div>`}
      </div>`
    }).join('')}
  </section>`
}

function createTeamView(adminMode) {
  const lr = S.capLookupResult
  return `
  <section>
    ${adminMode ? `<button data-act="adminBackToList" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับรายการทีม</button>` : ''}
    <h2 style="margin:0 0 4px;font-size:17px;font-weight:800">ลงทะเบียนทีม${adminMode ? ' (แอดมิน)' : ''}</h2>
    <p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">กรอกชื่อทีม เลือกระดับ${adminMode ? ' ค้นหาหัวหน้าทีม' : ''} แล้วค่อยเพิ่มรายชื่อนักกีฬาในขั้นถัดไป</p>
    <div style="display:flex;flex-direction:column;gap:10px">
      <label style="font-size:11.5px;color:#6b7280">ชื่อทีม
        <input id="new-team-name" value="${esc(S.newTeamName)}" placeholder="ชื่อทีม" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px"/>
      </label>
      <label style="font-size:11.5px;color:#6b7280">ระดับ
        <select id="new-team-level" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:10px;font-size:14px">
          <option value="MS" ${S.newTeamLevel === 'MS' ? 'selected' : ''}>ม.ต้น</option>
          <option value="HS" ${S.newTeamLevel === 'HS' ? 'selected' : ''}>ม.ปลาย</option>
        </select>
      </label>
      ${adminMode ? `
      <div style="border-top:1px solid #e5e7eb;padding-top:10px">
        <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">หัวหน้าทีม (พิมพ์ชื่อหรือรหัสนักเรียน)</div>
        <div style="position:relative;margin-bottom:8px">
          <input id="cap-code" value="${esc(S.capLookupCode)}" autocomplete="off" placeholder="ชื่อหรือรหัสนักเรียน" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
          <div id="cap-search-results" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:220px;overflow-y:auto;z-index:10;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
        </div>
        ${lr && typeof lr === 'object' ? `
          <div style="display:flex;align-items:center;gap:10px;background:#f9fafb;border-radius:10px;padding:8px">
            ${photoTag(lr.image_url || lr.photo_url)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${esc(lr.full_name)}</div><div style="font-size:11px;color:#6b7280">${esc(lr.student_code)}</div></div>
          </div>` : ''}
      </div>` : ''}
      <button data-act="createTeam" data-admin="${adminMode ? '1' : '0'}" ${S.teamCreating ? 'disabled' : ''} style="margin-top:6px;padding:12px;border:none;border-radius:10px;background:${S.teamCreating ? '#f3b6d1' : '#db2777'};color:#fff;font-weight:700;font-size:14px;cursor:${S.teamCreating ? 'default' : 'pointer'}">${S.teamCreating ? 'กำลังสร้าง...' : 'สร้างทีม'}</button>
    </div>
  </section>`
}

function manageTeamView(team, isAdminView) {
  const t = T[team.level]
  const roster = S.players.filter(p => p.team_id === team.id)
  const payment = S.payments.find(p => p.team_id === team.id)
  const maxRoster = Number(cfg('MAX_ROSTER', 12))
  const deadline = cfg('REGISTER_EDIT_DEADLINE', '')
  const editable = isAdminView || !deadline || new Date() < new Date(deadline)
  const lr = S.rosterLookupResult

  const roleTag = (p) => {
    if (team.captain_student_id === p.student_id) return ` <span style="color:${t.accent};font-weight:700">(หัวหน้าทีม)</span>`
    if (team.vice_captain_student_id === p.student_id) return ` <span style="color:#6b7280;font-weight:700">(รองหัวหน้าทีม)</span>`
    return ''
  }
  const roleButtons = (p) => {
    if (!editable) return ''
    const bits = []
    if (team.captain_student_id !== p.student_id) bits.push(`<button data-act="setCaptain" data-team="${team.id}" data-student="${p.student_id}" style="border:none;background:none;color:${t.accent};font-size:10.5px;cursor:pointer;font-weight:600">ตั้งหัวหน้า</button>`)
    if (team.vice_captain_student_id !== p.student_id) bits.push(`<button data-act="setViceCaptain" data-team="${team.id}" data-student="${p.student_id}" style="border:none;background:none;color:#6b7280;font-size:10.5px;cursor:pointer;font-weight:600">ตั้งรองหัวหน้า</button>`)
    return bits.join(' · ')
  }

  return `
  <section style="display:flex;flex-direction:column;gap:14px">
    <div>
      ${isAdminView ? `<button data-act="adminBackToList" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับรายการทีม</button>` : ''}
      <div style="display:flex;align-items:center;gap:8px">
        ${levelBadge(team.level)}
        ${team.is_reserve ? reserveBadge() : ''}${team.is_organizer ? organizerBadge() : ''}
        <h2 style="margin:0;font-size:17px;font-weight:800">${esc(team.name)}</h2>
      </div>
      ${team.team_code ? `<div style="margin-top:6px;font-size:12px;color:${t.accent};font-weight:700">รหัสประจำทีม: ${esc(team.team_code)}</div>` : ''}
      ${team.is_reserve ? `<div style="margin-top:4px;font-size:11.5px;color:#b45309">ทีมของคุณอยู่ในสถานะทีมสำรอง (สมัครและชำระเงินเรียบร้อยแล้ว แต่เกินโควตาทีมหลักของรุ่นนี้)</div>` : ''}
    </div>

    ${!editable ? `<div style="font-size:12px;color:#dc2626;background:#fee2e2;border-radius:10px;padding:8px 10px">หมดเวลาแก้ไขรายชื่อนักกีฬาแล้ว (ปิดแก้ไขเมื่อ ${esc(deadline)})</div>` : ''}

    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:14px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <div style="font-weight:700;font-size:13.5px">รายชื่อนักกีฬา</div>
        <div style="font-size:11.5px;color:#6b7280">${roster.length}/${maxRoster} คน</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:${editable && roster.length < maxRoster ? '12px' : '0'}">
        ${roster.length ? roster.map(p => `
          <div style="display:flex;align-items:center;gap:10px;background:#fff;border-radius:10px;padding:8px">
            <div style="position:relative;flex-shrink:0">
              ${photoTag(playerPhotoUrl(p))}
              ${editable ? `<label style="position:absolute;bottom:-3px;right:-3px;width:17px;height:17px;border-radius:50%;background:${t.base};display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.35)">
                <input type="file" accept="image/*" data-act="uploadPlayerPhoto" data-id="${p.id}" style="display:none"/>
                <span style="color:#fff;font-size:9px;line-height:1">📷</span>
              </label>` : ''}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:13px;font-weight:700">${esc(p.students?.full_name || '')}${roleTag(p)}</div>
              <div style="font-size:11px;color:#6b7280">${esc(p.students?.student_code || '')}${p.jersey_number ? ` · เบอร์ ${p.jersey_number}` : ''}</div>
              ${roleButtons(p) ? `<div style="margin-top:2px">${roleButtons(p)}</div>` : ''}
            </div>
            ${editable ? `<button data-act="removePlayer" data-id="${p.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600;flex-shrink:0">ลบ</button>` : ''}
          </div>`).join('') : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีนักกีฬา</div>`}
      </div>

      ${editable && roster.length < maxRoster ? `
      <div style="border-top:1px solid rgba(0,0,0,.08);padding-top:10px">
        <div style="position:relative;margin-bottom:8px">
          <input id="roster-code" value="${esc(S.rosterLookupCode)}" autocomplete="off" placeholder="พิมพ์ชื่อหรือรหัสนักเรียน" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
          <div id="roster-search-results" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:220px;overflow-y:auto;z-index:10;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
        </div>
        ${lr === 'duplicate' ? `<div style="font-size:12px;color:#dc2626;margin-bottom:8px">นักเรียนคนนี้ลงทะเบียนทีมอื่นไปแล้ว</div>` : ''}
        ${lr && typeof lr === 'object' ? `
          <div style="display:flex;align-items:center;gap:10px;background:#fff;border-radius:10px;padding:8px;margin-bottom:8px">
            ${photoTag(lr.image_url || lr.photo_url)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${esc(lr.full_name)}</div><div style="font-size:11px;color:#6b7280">${esc(lr.student_code)}</div></div>
            <input id="roster-jersey" value="${esc(S.rosterJersey)}" type="number" min="0" placeholder="เบอร์เสื้อ" style="width:88px;border:1px solid #e5e7eb;border-radius:8px;padding:7px 8px;font-size:12.5px"/>
          </div>
          <button data-act="addRosterAthlete" data-team="${team.id}" style="width:100%;padding:9px;border-radius:9px;border:none;background:${t.base};color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">เพิ่มนักกีฬา</button>
        ` : ''}
      </div>` : ''}
    </div>

    <div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">ค่าประกันทีม (${money(cfg('DEPOSIT_AMOUNT', 500))} บาท)</div>
      ${payment ? `
        ${statusPill(payment.status)}
        ${payment.status === 'pending' ? `<div style="font-size:12px;color:#9ca3af">ส่งหลักฐานแล้ว รอแอดมินตรวจสอบ</div>` : ''}
        ${payment.status === 'rejected' ? `
          <div style="font-size:11.5px;color:#dc2626;margin-bottom:8px">เหตุผล: ${esc(payment.admin_note || '-')}  กรุณายืนยันการลงทะเบียนและแนบหลักฐานใหม่</div>
          <button data-act="openConfirmReg" data-team="${team.id}" style="width:100%;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer">ยืนยันการลงทะเบียนอีกครั้ง</button>
        ` : ''}
      ` : roster.length ? `
        <button data-act="openConfirmReg" data-team="${team.id}" style="width:100%;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer">✅ ยืนยันการลงทะเบียนสมัครเข้าร่วมแข่งขัน</button>
      ` : `
        <div style="font-size:12px;color:#9ca3af">เพิ่มนักกีฬาอย่างน้อย 1 คนก่อนยืนยันการลงทะเบียน</div>
      `}
    </div>
  </section>`
}

function statusPill(status) {
  const map = { pending: ['รอตรวจสอบ', '#f59e0b', '#fef3c7'], verified: ['ยืนยันแล้ว', '#16a34a', '#dcfce7'], rejected: ['ถูกปฏิเสธ', '#dc2626', '#fee2e2'] }
  const [label, color, bg] = map[status] || ['-', '#6b7280', '#f3f4f6']
  return `<span style="display:inline-block;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;background:${bg};color:${color};margin-bottom:8px">${label}</span>`
}

function simpleModal(title, body) {
  return `
  <div style="position:fixed;inset:0;z-index:55;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;padding:20px">
    <div style="background:#fff;width:100%;max-width:360px;max-height:85vh;overflow-y:auto;border-radius:16px;padding:18px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h3 style="margin:0;font-size:15px;font-weight:800">${esc(title)}</h3>
        <button data-act="closeModal" style="border:none;background:none;color:#9ca3af;font-size:16px;cursor:pointer">✕</button>
      </div>
      ${body}
    </div>
  </div>`
}

const REJECT_REASON_TEMPLATES = [
  'หลักฐานไม่ชัดเจน อ่านยอดเงิน/เวลาโอนไม่ออก กรุณาถ่ายใหม่ให้ชัด',
  'ยอดเงินที่โอนไม่ตรงกับค่าประกันทีม',
  'ไฟล์ที่แนบไม่ใช่สลิปการโอนเงิน',
  'แนบหลักฐานผิดทีม กรุณาตรวจสอบและอัปโหลดใหม่',
  'ชื่อบัญชีผู้โอนไม่ตรงกับที่แจ้งไว้ กรุณาแนบหลักฐานเพิ่มเติม',
]

function rejectReasonModal() {
  const payment = S.payments.find(p => p.id === S.rejectPaymentId)
  const team = payment ? S.teams.find(t => t.id === payment.team_id) : null
  return simpleModal(`ปฏิเสธการชำระเงิน${team ? ' · ' + team.name : ''}`, `
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:8px">เลือกข้อความตัวอย่าง (แก้ไขได้) หรือพิมพ์เหตุผลเอง — หัวหน้าทีมจะเห็นข้อความนี้ทันที</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">
      ${REJECT_REASON_TEMPLATES.map(txt => `<button data-act="pickRejectTemplate" data-text="${esc(txt)}" style="font-size:11px;padding:6px 10px;border-radius:999px;border:1px solid #e5e7eb;background:#f9fafb;color:#374151;cursor:pointer;text-align:left">${esc(txt)}</button>`).join('')}
    </div>
    <textarea id="reject-reason-text" rows="3" placeholder="เหตุผลที่ปฏิเสธ" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font-size:13px;font-family:inherit;resize:vertical">${esc(S.rejectReasonText)}</textarea>
    <button data-act="confirmReject" ${S.rejectReasonText.trim() ? '' : 'disabled'} style="margin-top:10px;width:100%;padding:11px;border:none;border-radius:10px;background:${S.rejectReasonText.trim() ? '#dc2626' : '#f3b6b6'};color:#fff;font-weight:800;font-size:14px;cursor:${S.rejectReasonText.trim() ? 'pointer' : 'default'}">ยืนยันการปฏิเสธ</button>
  `)
}

function viewProofModal() {
  return `
  <div style="position:fixed;inset:0;z-index:75;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;padding:16px">
    <button data-act="closeViewProof" style="position:absolute;top:16px;right:16px;width:38px;height:38px;border-radius:12px;border:none;background:rgba(255,255,255,.15);color:#fff;font-size:18px;cursor:pointer">✕</button>
    ${S.viewProofUrl
      ? `<img src="${esc(S.viewProofUrl)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:10px"/>`
      : `<div style="color:#fff;font-size:13px">กำลังโหลด...</div>`}
  </div>`
}

function adminLoginModal() {
  return `
  <div style="position:fixed;inset:0;z-index:55;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;padding:20px">
    <div style="background:#fff;width:100%;max-width:340px;border-radius:16px;padding:18px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <h3 style="margin:0;font-size:15px;font-weight:800">เข้าสู่ระบบแอดมิน</h3>
        <button data-act="closeAdminLogin" style="border:none;background:none;color:#9ca3af;font-size:16px;cursor:pointer">✕</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <input id="admin-login-username" value="${esc(S.adminLoginUsername)}" placeholder="ยูสเซอร์เนม" autocomplete="username" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;font-size:13.5px"/>
        <input id="admin-login-password" type="password" placeholder="รหัสผ่าน" autocomplete="current-password" style="border:1px solid #e5e7eb;border-radius:10px;padding:10px 12px;font-size:13.5px"/>
        ${S.adminLoginError ? `<div style="font-size:12px;color:#dc2626">${esc(S.adminLoginError)}</div>` : ''}
        <button data-act="submitAdminLogin" style="margin-top:4px;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">ลงชื่อเข้าใช้</button>
        <button data-act="goToPp5Login" style="padding:9px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:600;font-size:12.5px;cursor:pointer">หรือเข้าสู่ระบบด้วยบัญชี ปพ.5</button>
      </div>
    </div>
  </div>`
}

function confirmRegistrationModal() {
  const team = S.teams.find(t => t.id === S.confirmRegTeamId)
  if (!team) return ''
  const t = T[team.level]
  const roster = S.players.filter(p => p.team_id === team.id)
  const deposit = money(cfg('DEPOSIT_AMOUNT', 500))
  const promptpayNumber = cfg('PROMPTPAY_NUMBER', '0825424340')
  return `
  <div style="position:fixed;inset:0;z-index:70;background:#fff;display:flex;flex-direction:column">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid #ececec;flex-shrink:0">
      <h3 style="margin:0;font-size:15px;font-weight:800">ยืนยันการลงทะเบียน</h3>
      <button data-act="closeConfirmReg" style="border:none;background:none;color:#9ca3af;font-size:20px;cursor:pointer">✕</button>
    </div>
    <div style="padding:20px;overflow-y:auto;flex:1">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        ${levelBadge(team.level)}
        <h2 style="margin:0;font-size:17px;font-weight:800">${esc(team.name)}</h2>
      </div>
      <p style="margin:2px 0 16px;font-size:12px;color:#6b7280">ตรวจสอบรายชื่อนักกีฬาให้ถูกต้องก่อนชำระค่าประกันทีม</p>

      <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:14px;margin-bottom:16px">
        <div style="font-weight:700;font-size:13.5px;margin-bottom:10px">รายชื่อนักกีฬา (${roster.length} คน)</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${roster.map(p => `
            <div style="display:flex;align-items:center;gap:10px;background:#fff;border-radius:10px;padding:8px">
              ${photoTag(playerPhotoUrl(p))}
              <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${esc(p.students?.full_name || '')}</div><div style="font-size:11px;color:#6b7280">${esc(p.students?.student_code || '')}</div></div>
              <div style="font-size:12.5px;font-weight:700;color:${t.accent};flex-shrink:0">เบอร์ ${p.jersey_number ?? '-'}</div>
            </div>`).join('')}
        </div>
      </div>

      <div style="border:1px solid #e5e7eb;border-radius:14px;padding:16px;text-align:center;margin-bottom:16px">
        <div style="font-weight:700;font-size:14px;margin-bottom:4px">ชำระค่าประกันทีม ${deposit} บาท</div>
        <div style="font-size:11.5px;color:#6b7280;margin-bottom:12px">โอนผ่านพร้อมเพย์เบอร์ ${esc(promptpayNumber)}</div>
        ${S.confirmRegQR ? `<img src="${S.confirmRegQR}" style="width:220px;height:220px;margin:0 auto 8px;display:block"/>` : `<div style="width:220px;height:220px;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:12px">กำลังสร้าง QR...</div>`}
        <div style="font-size:11px;color:#9ca3af">สแกนเพื่อโอนเงิน แล้วแนบสลิปด้านล่าง</div>
      </div>

      <div style="border:1px solid #e5e7eb;border-radius:14px;padding:16px">
        <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">แนบหลักฐานการโอนเงิน</div>
        <input type="file" accept="image/*" id="pay-slip-file" style="font-size:12px;margin-bottom:10px" ${S.paymentUploading ? 'disabled' : ''}/>
        <button data-act="uploadPayment" data-team="${team.id}" data-method="transfer" ${S.paymentUploading ? 'disabled' : ''} style="width:100%;padding:12px;border-radius:10px;border:none;background:${S.paymentUploading ? '#f3b6d1' : 'linear-gradient(135deg,#ec4899,#db2777)'};color:#fff;font-weight:800;font-size:14px;cursor:${S.paymentUploading ? 'default' : 'pointer'}">${S.paymentUploading ? 'กำลังส่ง...' : 'ยืนยันการลงทะเบียนและส่งหลักฐาน'}</button>
      </div>
    </div>
  </div>`
}

// ---------------- admin ----------------
const ADMIN_GROUPS = [
  { id: 'settings', icon: '⚙️', label: 'ตั้งค่า', sections: [['general', 'ทั่วไป'], ['staff', 'สิทธิ์']] },
  { id: 'roster', icon: '👥', label: 'ทีม/นักกีฬา', sections: [['teams', 'ทีม'], ['athletes', 'นักกีฬา']] },
  { id: 'finance', icon: '💰', label: 'การเงิน', sections: [['payments', 'ชำระเงิน']] },
  { id: 'tourney', icon: '🏆', label: 'แข่งขัน', sections: [['ops', 'เวลา/รางวัล'], ['certificates', 'เกียรติบัตร']] },
]
function groupOfSection(id) { return ADMIN_GROUPS.find(g => g.sections.some(s => s[0] === id)) || ADMIN_GROUPS[0] }
function sectionLabel(id) { for (const g of ADMIN_GROUPS) { const f = g.sections.find(s => s[0] === id); if (f) return f[1] } return '' }

function adminView() {
  const group = groupOfSection(S.adminSection)
  return `
  <section style="display:flex;flex-direction:column;gap:12px">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <h2 style="margin:0;font-size:17px;font-weight:800">แอดมิน · ${sectionLabel(S.adminSection)}</h2>
      <button data-act="tab" data-tab="schedule" style="font-size:11.5px;color:#6b7280;background:none;border:none;cursor:pointer">ออกจากแอดมิน</button>
    </div>
    ${group.sections.length > 1 ? `
    <div style="display:flex;gap:6px">
      ${group.sections.map(([id, label]) => `<button data-act="adminSec" data-v="${id}" style="flex:1;font-size:12px;padding:7px 10px;border-radius:9px;border:1px solid ${S.adminSection === id ? '#db2777' : '#e5e7eb'};background:${S.adminSection === id ? '#db2777' : '#fff'};color:${S.adminSection === id ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${label}</button>`).join('')}
    </div>` : ''}
    ${S.adminSection === 'general' ? adminGeneral() : ''}
    ${S.adminSection === 'staff' ? adminStaff() : ''}
    ${S.adminSection === 'teams' ? adminTeams() : ''}
    ${S.adminSection === 'athletes' ? adminAthletes() : ''}
    ${S.adminSection === 'payments' ? adminPayments() : ''}
    ${S.adminSection === 'certificates' ? adminCertificates() : ''}
    ${S.adminSection === 'ops' ? adminOps() : ''}
  </section>`
}

function box(inner) { return `<div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">${inner}</div>` }

function adminGeneral() {
  const regOpen = cfg('REGISTRATION_OPEN', '0') === '1'
  const isStandaloneSession = S.identity.session?.user?.email === STANDALONE_ADMIN_EMAIL
  return box(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-size:12px;color:#6b7280">เข้าสู่ระบบอยู่ในฐานะ: <b>${isStandaloneSession ? esc(cfg('ADMIN_LOGIN_USERNAME', 'aaaaaa')) + ' (แอดมินสำรอง)' : (S.identity.teacher?.full_name ? esc(S.identity.teacher.full_name) : 'ครู/แอดมิน ปพ.5')}</b></div>
      <button data-act="adminSignOut" style="font-size:11px;padding:6px 12px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:600;cursor:pointer;white-space:nowrap">ออกจากระบบ</button>
    </div>
    ${isStandaloneSession ? `
    <div style="border-top:1px solid #e5e7eb;padding-top:10px;margin-bottom:10px">
      <div style="font-weight:700;font-size:13px;margin-bottom:8px">แก้ไขบัญชีแอดมินสำรอง</div>
      <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:8px">ยูสเซอร์เนม
        <input id="admin-acct-username" value="${esc(cfg('ADMIN_LOGIN_USERNAME', 'aaaaaa'))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
      </label>
      <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:8px">รหัสผ่านใหม่ (เว้นว่างถ้าไม่เปลี่ยน)
        <input id="admin-acct-password" type="password" placeholder="รหัสผ่านใหม่" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:8px 10px;font-size:13px"/>
      </label>
      <button data-act="saveAdminAccount" style="width:100%;padding:9px;border-radius:9px;border:none;background:#374151;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">บันทึกบัญชีแอดมินสำรอง</button>
    </div>` : ''}
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div>
        <div style="font-weight:700;font-size:14px">เปิดรับสมัครทีม</div>
        <div style="font-size:11px;color:#6b7280;margin-top:2px">เมื่อเปิด ปุ่ม "ลงทะเบียนทีม" จะแสดงในหน้าตารางให้นักเรียนทั่วไปสมัครเองได้</div>
      </div>
      <button data-act="toggleRegistration" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${regOpen ? '#dcfce7' : '#f3f4f6'};color:${regOpen ? '#16a34a' : '#6b7280'}">${regOpen ? 'เปิดอยู่' : 'ปิดอยู่'}</button>
    </div>
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">ตั้งค่าทั่วไป</div>
    <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:10px">ชื่อกิจกรรม
      <input id="cfg-eventName" value="${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2025'))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
    </label>
    <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:10px">วันที่จัดงาน
      <input id="cfg-date" value="${esc(cfg('INFO_DATE', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
    </label>
    <label style="font-size:11.5px;color:#6b7280;display:block;margin-bottom:10px">สถานที่
      <input id="cfg-venue" value="${esc(cfg('INFO_VENUE', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
    </label>
    <div style="display:flex;gap:8px;margin-bottom:10px">
      <label style="font-size:11.5px;color:#6b7280;flex:1">สีธีม ม.ต้น
        <input id="cfg-colorMs" type="color" value="${esc(cfg('COLOR_MS', '#ec4899'))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:4px;height:38px;cursor:pointer"/>
      </label>
      <label style="font-size:11.5px;color:#6b7280;flex:1">สีธีม ม.ปลาย
        <input id="cfg-colorHs" type="color" value="${esc(cfg('COLOR_HS', '#22c55e'))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:4px;height:38px;cursor:pointer"/>
      </label>
    </div>
    <button data-act="saveGeneral" style="width:100%;padding:10px;border-radius:10px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">บันทึก</button>
  `) + box(`
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">ตั้งค่าการลงทะเบียน</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;gap:8px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">ค่าประกันทีม (บาท)<input id="reg-deposit" type="number" min="0" value="${esc(cfg('DEPOSIT_AMOUNT', 500))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">นักกีฬาสูงสุด/ทีม<input id="reg-maxroster" type="number" min="1" value="${esc(cfg('MAX_ROSTER', 12))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <label style="font-size:11.5px;color:#6b7280">เบอร์พร้อมเพย์รับค่าประกันทีม
        <input id="reg-promptpay" value="${esc(cfg('PROMPTPAY_NUMBER', '0825424340'))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </label>
      <div style="display:flex;gap:8px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">หักค่าประกัน/ใบเหลือง<input id="reg-ratey" type="number" min="0" value="${esc(cfg('RATE_YELLOW', 30))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">หักค่าประกัน/ใบแดง<input id="reg-rater" type="number" min="0" value="${esc(cfg('RATE_RED', 50))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <div style="display:flex;gap:8px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">โควตาทีม ม.ต้น (เว้นว่าง=ไม่จำกัด)<input id="reg-quota-ms" type="number" min="0" value="${esc(cfg('MAX_TEAMS_MS', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">โควตาทีม ม.ปลาย (เว้นว่าง=ไม่จำกัด)<input id="reg-quota-hs" type="number" min="0" value="${esc(cfg('MAX_TEAMS_HS', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:-4px">ทีมที่ยืนยันเกินโควตาจะถูกติดป้าย "ทีมสำรอง" อัตโนมัติ (ยังลงทะเบียน/ชำระเงินได้ตามปกติ ไม่ปิดรับสมัคร)</div>
      <label style="font-size:11.5px;color:#6b7280">ปิดแก้ไขรายชื่อนักกีฬาเมื่อ (เว้นว่าง = ไม่จำกัด)
        <input id="reg-deadline" type="datetime-local" value="${esc(cfg('REGISTER_EDIT_DEADLINE', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </label>
      <button data-act="saveRegSettings" style="margin-top:4px;width:100%;padding:10px;border-radius:10px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">บันทึกการตั้งค่า</button>
    </div>
  `)
}

function adminStaff() {
  const rows = S.staffList || []
  return box(`
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">มอบสิทธิ์แอดมิน (ครู/นักเรียน)</div>
    <div id="az-staff-list" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">กำลังโหลด...</div>
    <div style="position:relative">
      <input id="staff-search" placeholder="พิมพ์ชื่อครูหรือนักเรียน..." autocomplete="off" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font-size:12.5px"/>
      <div id="staff-search-results" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:220px;overflow-y:auto;z-index:10;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
    </div>
  `)
}

function adminTeams() {
  const level = S.adminTeamLevel || 'MS'
  const rows = S.teams.filter(t => t.level === level)
  const seeded = S.matches[level].length >= BRACKET[level].length
  const quota = Number(cfg(level === 'MS' ? 'MAX_TEAMS_MS' : 'MAX_TEAMS_HS', '') || 0)
  const verifiedCount = S.payments.filter(p => p.status === 'verified' && S.teams.find(t2 => t2.id === p.team_id)?.level === level).length
  return box(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">จัดการทีม${quota > 0 ? ` <span style="font-weight:600;font-size:11.5px;color:#6b7280">(${verifiedCount}/${quota} ทีมยืนยันแล้ว)</span>` : ''}</div>
      <div style="display:flex;gap:6px">${['MS', 'HS'].map(v => `<button data-act="adminTeamLevel" data-v="${v}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${level === v ? T[v].base : '#e5e7eb'};background:${level === v ? T[v].base : '#fff'};color:${level === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${T[v].label}</button>`).join('')}</div>
    </div>
    ${!seeded ? `<button data-act="seedMatches" data-level="${level}" style="width:100%;margin-bottom:10px;padding:9px;border-radius:9px;border:1px dashed ${T[level].base};background:${T[level].soft};color:${T[level].accent};font-weight:700;font-size:12.5px;cursor:pointer">สร้างตารางแข่งเริ่มต้น (${BRACKET[level].length} นัด)</button>` : `<button data-act="randomDraw" data-level="${level}" style="width:100%;margin-bottom:6px;padding:9px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:12.5px;cursor:pointer">สุ่มจับคู่รอบแรกใหม่ (ทันที ไม่มีแอนิเมชัน)</button>`}
    ${seeded ? `<button data-act="openLiveDraw" data-level="${level}" style="width:100%;margin-bottom:10px;padding:10px;border-radius:9px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:12.5px;cursor:pointer">🎬 จับสลากสด (สำหรับไลฟ์)</button>` : ''}
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;max-height:340px;overflow-y:auto">
      ${rows.length ? rows.map(t => teamAdminRow(t)).join('') : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีทีมในระดับนี้</div>`}
    </div>
    <button data-act="adminNewTeamFromList" style="width:100%;padding:9px;border-radius:9px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">+ ลงทะเบียนทีมใหม่ (ระบุหัวหน้าทีม)</button>
  `)
}

// ---------------- match editor ----------------
function pickableSlots(level, code) {
  const def = BRACKET[level].find(b => b.code === code)
  const m = matchByCode(level, code)
  const slots = { a: null, b: null }
  const poolFrom = codes => codes.map(c => resolveMatch(level, c).winnerId).filter(Boolean)
  if (!def.refA) slots.a = { pool: S.teams.filter(t => t.level === level).map(t => t.id), value: m?.team_a_id || '' }
  else if (def.refA === 'REC_1' || def.refA === 'REC_2') slots.a = { pool: poolFrom(RECOVER_SOURCES[level] || []), value: m?.team_a_id || '' }
  else if (def.refA === 'WC_1' || def.refA === 'WC_2') slots.a = { pool: poolFrom(WILDCARD_SOURCES[level] || []), value: m?.team_a_id || '' }
  if (!def.refB) slots.b = { pool: S.teams.filter(t => t.level === level).map(t => t.id), value: m?.team_b_id || '' }
  else if (def.refB === 'REC_1' || def.refB === 'REC_2') slots.b = { pool: poolFrom(RECOVER_SOURCES[level] || []), value: m?.team_b_id || '' }
  else if (def.refB === 'WC_1' || def.refB === 'WC_2') slots.b = { pool: poolFrom(WILDCARD_SOURCES[level] || []), value: m?.team_b_id || '' }
  return slots
}

// ---------------- live draw (จับสลากสด) ----------------
function cryptoShuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const buf = new Uint32Array(1)
    crypto.getRandomValues(buf)
    const j = buf[0] % (i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// strategy: 'bypair' = จับให้ครบคู่ทีละคู่ (M1a,M1b,M2a,M2b,...) | 'byside' = จับทีมแรกของทุกคู่ก่อน (M1a..M6a แล้วค่อย M1b..M6b)
function liveDrawSlotSeq(level, strategy) {
  const firstCodes = BRACKET[level].filter(b => !b.refA).map(b => b.code)
  if (strategy === 'byside') {
    return [...firstCodes.map(code => ({ code, side: 'a' })), ...firstCodes.map(code => ({ code, side: 'b' }))]
  }
  return firstCodes.flatMap(code => [{ code, side: 'a' }, { code, side: 'b' }])
}

function hashSeed(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0
  return h
}
// ลูกบอลทุกลูกหน้าตาเหมือนกันหมด (สีเดียวกันตามธีมระดับชั้น) ตำแหน่งเริ่มต้นยังสุ่มต่อทีมเหมือนเดิม
function ballStyleFor(id) {
  const seed = hashSeed(id)
  const color = T[S.liveDraw?.level || 'MS'].base
  return {
    top: 16 + (seed % 54),
    left: 12 + ((seed >>> 8) % 68),
    color,
  }
}
function liveDrawBallHtml(id) {
  const s = ballStyleFor(id)
  const label = esc((teamName(id) || '?').slice(0, 2))
  return `
  <div id="ball-${id}" style="position:absolute;top:${s.top}%;left:${s.left}%;width:52px;height:52px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #fff2, ${s.color});box-shadow:0 4px 10px rgba(0,0,0,.4), inset 0 -4px 8px rgba(0,0,0,.25), inset 0 3px 6px rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,.4);flex-shrink:0">${label}</div>`
}
function liveDrawJarHtml(remainingTeamIds) {
  return `
  <div id="live-draw-pool" style="position:relative;height:220px;margin:0 34px 12px;border-radius:50% 50% 36px 36px / 100px 100px 30px 30px;background:linear-gradient(180deg, rgba(255,255,255,.14) 0%, rgba(255,255,255,.04) 35%, rgba(255,255,255,.10) 100%), radial-gradient(ellipse at 50% 12%, rgba(255,255,255,.28), transparent 55%), rgba(99,102,241,.08);border:2px solid rgba(255,255,255,.3);box-shadow:inset 0 -26px 46px rgba(0,0,0,.4), inset 0 14px 26px rgba(255,255,255,.16), 0 14px 34px rgba(0,0,0,.45);overflow:hidden;flex-shrink:0">
    <div style="position:absolute;top:0;left:9%;width:12%;height:100%;background:linear-gradient(105deg, transparent 30%, rgba(255,255,255,.22) 50%, transparent 70%);pointer-events:none"></div>
    <div style="position:absolute;top:0;left:68%;width:7%;height:100%;background:linear-gradient(105deg, transparent 30%, rgba(255,255,255,.14) 50%, transparent 70%);pointer-events:none"></div>
    ${remainingTeamIds.map(id => liveDrawBallHtml(id)).join('')}
  </div>`
}

function liveDrawView() {
  const ld = S.liveDraw
  const level = ld.level
  const t = T[level]
  const stageBar = `<div style="height:4px;flex-shrink:0;background:linear-gradient(90deg,#f59e0b,#ec4899,#6366f1,#22c55e,#f59e0b);background-size:200% 100%;animation:stageBarSweep 4s linear infinite"></div>`
  const stageBg = `radial-gradient(ellipse 900px 500px at 50% -8%, rgba(99,102,241,.28), transparent 60%), radial-gradient(ellipse 700px 420px at 50% 112%, rgba(219,39,119,.18), transparent 60%), #0b0f1a`
  if (!ld.started) {
    const teams = S.teams.filter(tm => tm.level === level)
    const orderStrategy = ld.orderStrategy || 'bypair'
    const slotSeq = liveDrawSlotSeq(level, orderStrategy)
    const mismatch = teams.length > slotSeq.length
    const testMode = ld.testMode !== false // ค่าเริ่มต้นคือโหมดทดสอบ ปลอดภัยไว้ก่อน
    return `
    <div style="position:fixed;inset:0;z-index:80;background:${stageBg};color:#fff;display:flex;flex-direction:column">
      ${stageBar}
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center">
        <button data-act="closeLiveDraw" style="position:absolute;top:16px;right:16px;border:none;background:rgba(255,255,255,.1);color:#fff;width:34px;height:34px;border-radius:10px;cursor:pointer;font-size:15px">✕</button>
        <div style="font-size:30px;font-weight:800;margin-bottom:2px">🎬 จับสลากสด</div>
        <div style="font-size:19px;font-weight:700;color:${t.base};margin-bottom:8px">${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2025'))} · ${t.label}</div>
        <div style="font-size:13px;color:#9ca3af;margin-bottom:16px">ทีมในโหล ${teams.length} ทีม · ช่องรอบแรกทั้งหมด ${slotSeq.length / 2} คู่ (${slotSeq.length} ช่อง)</div>
        <div style="display:flex;gap:8px;background:rgba(255,255,255,.06);padding:5px;border-radius:12px">
          <button data-act="setLiveDrawMode" data-v="1" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${testMode ? '#f59e0b' : 'transparent'};color:${testMode ? '#111827' : '#9ca3af'}">🧪 โหมดทดสอบ (ไม่บันทึก)</button>
          <button data-act="setLiveDrawMode" data-v="0" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${!testMode ? '#dc2626' : 'transparent'};color:${!testMode ? '#fff' : '#9ca3af'}">🔴 จับจริง (บันทึกผล)</button>
        </div>
        <div style="margin-top:8px;font-size:11px;color:${testMode ? '#fbbf24' : '#f87171'}">${testMode ? 'ซ้อมได้อิสระด้วยรายชื่อทีมจริง จะไม่มีการเขียนอะไรลงฐานข้อมูลเลย' : 'ผลจะถูกบันทึกลงระบบจริงทันทีที่จับครบแต่ละคู่ ใช้ตอนไลฟ์จริงเท่านั้น'}</div>
        <div style="margin-top:16px;font-size:11px;color:#9ca3af">ลำดับการจับ</div>
        <div style="display:flex;gap:8px;background:rgba(255,255,255,.06);padding:5px;border-radius:12px;margin-top:6px">
          <button data-act="setLiveDrawOrder" data-v="bypair" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${orderStrategy === 'bypair' ? '#6366f1' : 'transparent'};color:${orderStrategy === 'bypair' ? '#fff' : '#9ca3af'}">จับให้ครบคู่ทีละคู่</button>
          <button data-act="setLiveDrawOrder" data-v="byside" style="padding:9px 16px;border-radius:9px;border:none;font-weight:700;font-size:12.5px;cursor:pointer;background:${orderStrategy === 'byside' ? '#6366f1' : 'transparent'};color:${orderStrategy === 'byside' ? '#fff' : '#9ca3af'}">จับทีมแรกของทุกคู่ก่อน</button>
        </div>
        ${mismatch
          ? `<div style="margin-top:14px;padding:12px 16px;border-radius:10px;background:#7f1d1d;color:#fecaca;font-size:12.5px;max-width:320px">จำนวนทีม (${teams.length}) มากกว่าจำนวนช่องรอบแรก (${slotSeq.length}) กรุณาตรวจสอบทีมก่อนเริ่มจับสลาก</div>`
          : `<button data-act="startLiveDraw" style="margin-top:18px;padding:14px 32px;border-radius:999px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:15px;cursor:pointer">เริ่มจับสลาก</button>
             <div style="margin-top:10px;font-size:11px;color:#6b7280">สุ่มลำดับทั้งหมดทันทีด้วย crypto RNG แล้วเปิดเผยทีละทีมสดๆ ให้ทุกคนเห็น</div>`}
      </div>
    </div>`
  }
  const slotSeq = ld.slotSeq
  const codes = [...new Set(slotSeq.map(s => s.code))]
  const remaining = ld.order.length - ld.pickIndex
  const isDone = ld.pickIndex >= slotSeq.length || ld.pickIndex >= ld.order.length
  const remainingTeamIds = ld.order.slice(ld.pickIndex)
  return `
  <div style="position:fixed;inset:0;z-index:80;background:${stageBg};color:#fff;display:flex;flex-direction:column;overflow-y:auto">
    ${stageBar}
    ${ld.testMode ? `<div style="background:#f59e0b;color:#111827;text-align:center;padding:6px;font-weight:800;font-size:12px;flex-shrink:0">🧪 โหมดทดสอบ — ไม่มีการบันทึกผลลงระบบจริง</div>` : ''}
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div>
        <div style="font-weight:800;font-size:20px">🎬 จับสลากสด · ${t.label}</div>
        <div style="font-size:12.5px;color:#9ca3af;margin-top:2px">${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2025'))}</div>
      </div>
      <button data-act="closeLiveDraw" style="flex-shrink:0;border:none;background:rgba(255,255,255,.1);color:#fff;width:34px;height:34px;border-radius:10px;cursor:pointer;font-size:15px">✕</button>
    </div>
    <div style="padding:12px 18px;text-align:center;flex-shrink:0">
      <div style="font-size:11.5px;color:#9ca3af;margin-bottom:2px">เหลือในโหล</div>
      <div style="font-size:28px;font-weight:800">${remaining}</div>
    </div>
    ${liveDrawJarHtml(remainingTeamIds)}
    <div style="text-align:center;padding-bottom:14px;flex-shrink:0">
      ${isDone
        ? `<button disabled style="padding:12px 28px;border-radius:999px;border:none;background:#374151;color:#fff;font-weight:800;font-size:14px;cursor:default">🎉 จับสลากครบทุกคู่แล้ว</button>`
        : !ld.shaken
          ? `<button data-act="shakePool" style="padding:12px 28px;border-radius:999px;border:none;background:linear-gradient(135deg,#f59e0b,#f97316);color:#fff;font-weight:800;font-size:14px;cursor:pointer">🎲 เขย่าลูกบอล</button>`
          : `<button data-act="drawNext" ${ld.phase === 'spinning' ? 'disabled' : ''} style="padding:12px 28px;border-radius:999px;border:none;background:${ld.phase === 'spinning' ? '#374151' : 'linear-gradient(135deg,#4338ca,#6366f1)'};color:#fff;font-weight:800;font-size:14px;cursor:${ld.phase === 'spinning' ? 'default' : 'pointer'}">${ld.phase === 'spinning' ? 'กำลังจับ...' : 'จับทีมถัดไป'}</button>`}
    </div>
    <div id="live-draw-center" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);opacity:0;z-index:90;pointer-events:none;display:flex;flex-direction:column;align-items:center;gap:14px"></div>
    <div style="flex:1;padding:0 18px 18px;display:grid;grid-template-columns:repeat(auto-fill, minmax(150px,1fr));gap:10px;align-content:start">
      ${codes.map(code => {
        const aId = ld.filled[`${code}_a`], bId = ld.filled[`${code}_b`]
        const teamLabel = id => {
          if (!id) return '<span style="color:#4b5563">?</span>'
          const tm = S.teams.find(x => x.id === id)
          return esc(tm?.name || '') + (tm?.is_organizer ? ' <span style="color:#a5b4fc;font-size:10px">(ผู้จัด)</span>' : '')
        }
        return `
        <div style="border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:10px;background:rgba(255,255,255,.04)">
          <div style="font-size:10.5px;color:#9ca3af;font-weight:700;margin-bottom:6px">${code}</div>
          <div style="font-size:12.5px;font-weight:700;min-height:18px;overflow-wrap:break-word">${teamLabel(aId)}</div>
          <div style="font-size:10px;color:#6b7280;margin:2px 0">พบ</div>
          <div style="font-size:12.5px;font-weight:700;min-height:18px;overflow-wrap:break-word">${teamLabel(bId)}</div>
        </div>`
      }).join('')}
    </div>
  </div>`
}

async function handleStartLiveDraw() {
  const ld = S.liveDraw
  if (!ld) return
  const teams = S.teams.filter(tm => tm.level === ld.level).map(tm => tm.id)
  const orderStrategy = ld.orderStrategy || 'bypair'
  const slotSeq = liveDrawSlotSeq(ld.level, orderStrategy)
  const testMode = ld.testMode !== false
  S.liveDraw = { level: ld.level, started: true, testMode, orderStrategy, order: cryptoShuffle(teams), slotSeq, pickIndex: 0, filled: {}, phase: 'idle', shaken: false }
  await loadConfetti()
  draw()
}

// ---------------- live draw sound (สังเคราะห์ด้วย Web Audio ล้วน ไม่ต้องโหลดไฟล์เสียง) ----------------
let liveDrawAudioCtx = null
function getAudioCtx() {
  if (!liveDrawAudioCtx) {
    try { liveDrawAudioCtx = new (window.AudioContext || window.webkitAudioContext)() } catch { return null }
  }
  if (liveDrawAudioCtx.state === 'suspended') liveDrawAudioCtx.resume().catch(() => {})
  return liveDrawAudioCtx
}
// เสียงลูกบอลกลิ้งในโถพลาสติกต่อเนื่อง — noise buffer วนซ้ำผ่าน bandpass ที่ถูกมอดูเลตความถี่/ความดังด้วย LFO
// สองตัวให้ฟังดูเหมือนลูกบอลหลายลูกกลิ้งกระทบผนังโถไม่สม่ำเสมอ ไม่ใช่เสียงคลิกสั้นๆ ซ้ำๆ แบบเดิม
let liveDrawRollNodes = null
function startRollingSound() {
  const ctx = getAudioCtx()
  if (!ctx) return
  stopRollingSound()
  const bufDur = 2
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * bufDur), ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  const source = ctx.createBufferSource()
  source.buffer = buffer
  source.loop = true

  const filter = ctx.createBiquadFilter()
  filter.type = 'bandpass'
  filter.frequency.value = 420
  filter.Q.value = 1.1

  const masterGain = ctx.createGain()
  masterGain.gain.value = 0.001
  masterGain.gain.linearRampToValueAtTime(0.13, ctx.currentTime + 0.25)

  // LFO มอดูเลตความถี่ filter ให้เสียงกลิ้งฟังดูไม่สม่ำเสมอเหมือนลูกบอลจริง
  const freqLfo = ctx.createOscillator()
  freqLfo.frequency.value = 2.8
  const freqLfoGain = ctx.createGain()
  freqLfoGain.gain.value = 200
  freqLfo.connect(freqLfoGain).connect(filter.frequency)

  // LFO อีกตัวมอดูเลตความดังเบาๆ ให้มีจังหวะกระเพื่อมเหมือนลูกบอลกระจุกตัวไม่เท่ากัน
  const ampLfo = ctx.createOscillator()
  ampLfo.frequency.value = 5.3
  const ampLfoGain = ctx.createGain()
  ampLfoGain.gain.value = 0.045
  ampLfo.connect(ampLfoGain).connect(masterGain.gain)

  source.connect(filter).connect(masterGain).connect(ctx.destination)
  const now = ctx.currentTime
  source.start(now)
  freqLfo.start(now)
  ampLfo.start(now)
  liveDrawRollNodes = { source, freqLfo, ampLfo, masterGain }
}
function stopRollingSound() {
  if (!liveDrawRollNodes) return
  const ctx = getAudioCtx()
  const now = ctx ? ctx.currentTime : 0
  const nodes = liveDrawRollNodes
  liveDrawRollNodes = null
  try {
    nodes.masterGain.gain.cancelScheduledValues(now)
    nodes.masterGain.gain.setValueAtTime(nodes.masterGain.gain.value, now)
    nodes.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.18)
    nodes.source.stop(now + 0.2)
    nodes.freqLfo.stop(now + 0.2)
    nodes.ampLfo.stop(now + 0.2)
  } catch { /* node อาจถูก stop ไปแล้ว ไม่ต้องทำอะไรต่อ */ }
}
// เสียงแคปซูลแตกเปิดตอนเผยชื่อทีม — เสียง pop (โทนไล่ลง) ผสมเสียงกรอบแบบ noise สั้นๆ
function playCrackSound() {
  const ctx = getAudioCtx()
  if (!ctx) return
  const now = ctx.currentTime
  const osc = ctx.createOscillator()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(520, now)
  osc.frequency.exponentialRampToValueAtTime(110, now + 0.13)
  const oscGain = ctx.createGain()
  oscGain.gain.setValueAtTime(0.3, now)
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16)
  osc.connect(oscGain).connect(ctx.destination)
  osc.start(now)
  osc.stop(now + 0.17)
  const dur = 0.09
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2)
  const noise = ctx.createBufferSource()
  noise.buffer = buffer
  const filter = ctx.createBiquadFilter()
  filter.type = 'highpass'
  filter.frequency.value = 2200
  const noiseGain = ctx.createGain()
  noiseGain.gain.setValueAtTime(0.22, now)
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + dur)
  noise.connect(filter).connect(noiseGain).connect(ctx.destination)
  noise.start(now)
  noise.stop(now + dur + 0.01)
}

let liveDrawShakeTimer = null
function stopLiveDrawShake() {
  if (liveDrawShakeTimer) { clearInterval(liveDrawShakeTimer); liveDrawShakeTimer = null }
}
function shakeBallsOnce() {
  const pool = document.getElementById('live-draw-pool')
  if (!pool) { stopLiveDrawShake(); return }
  Array.from(pool.querySelectorAll('div[id^="ball-"]')).forEach(b => {
    b.style.top = (14 + Math.random() * 58) + '%'
    b.style.left = (10 + Math.random() * 72) + '%'
  })
}
function handleShakePool() {
  const ld = S.liveDraw
  if (!ld || !ld.started || ld.shaken) return
  ld.shaken = true // เปลี่ยนเป็นปุ่ม "จับทีมถัดไป" ทันที ไม่ต้องรอ
  draw()
  const pool = document.getElementById('live-draw-pool')
  if (pool) Array.from(pool.querySelectorAll('div[id^="ball-"]')).forEach(b => {
    b.style.transition = 'top .38s cubic-bezier(.4,0,.2,1), left .38s cubic-bezier(.4,0,.2,1)'
  })
  stopLiveDrawShake()
  startRollingSound()
  shakeBallsOnce()
  liveDrawShakeTimer = setInterval(shakeBallsOnce, 420) // เขย่าต่อเนื่องไม่หยุด จนกว่าจะกด "จับทีมถัดไป"
}

async function handleDrawNext() {
  const ld = S.liveDraw
  if (!ld || !ld.started || ld.phase === 'spinning' || !ld.shaken) return
  if (ld.pickIndex >= ld.slotSeq.length) return
  if (ld.pickIndex >= ld.order.length) { azToast('ทีมในโหลหมดแล้ว ช่องที่เหลือเป็นบาย'); return }
  const teamId = ld.order[ld.pickIndex]
  const slot = ld.slotSeq[ld.pickIndex]
  ld.phase = 'spinning'
  stopLiveDrawShake() // หยุดเขย่าทันทีที่กดจับ ลูกบอลจะค้างอยู่ ณ ตำแหน่งล่าสุด
  stopRollingSound()
  draw()
  const sleep = ms => new Promise(r => setTimeout(r, ms))

  const pool = document.getElementById('live-draw-pool')
  if (pool) pool.style.filter = 'brightness(1.15)'
  // ลูกที่จับได้สั่นอยู่กับที่ (ตำแหน่งปัจจุบันจริง ไม่ใช่ตำแหน่งตั้งต้น) ก่อนลอยออกจากโถ
  const targetBall = document.getElementById(`ball-${teamId}`)
  if (targetBall) {
    targetBall.style.transition = 'transform .1s ease, box-shadow .2s'
    targetBall.style.boxShadow = '0 0 0 6px rgba(255,255,255,.85), 0 0 26px 8px rgba(255,255,255,.55), 0 6px 16px rgba(0,0,0,.5)'
    for (const [jx, jy] of [[4, -3], [-5, 3], [4, 4], [-4, -4], [3, -2], [0, 0]]) {
      targetBall.style.transform = `translate(${jx}px, ${jy}px)`
      await sleep(65)
    }
  }
  const targetRect = targetBall ? targetBall.getBoundingClientRect() : null

  // ลูกบอลลอยออกจากโถ ขยายใหญ่มากลางจอ แล้ว "แตกแคปซูล" แยกซ้าย-ขวา เผยชื่อทีมบนกระดาษสีขาว (ตัวใหญ่เด่นชัด ให้คนที่เพิ่งเข้ามาดูไลฟ์เข้าใจทันที)
  const s = ballStyleFor(teamId)
  const slotLabel = `${slot.code} · ทีม ${slot.side.toUpperCase()}`
  const center = document.getElementById('live-draw-center')
  if (center) {
    center.innerHTML = `
      <div style="position:relative;width:300px;height:300px">
        <div id="capsule-paper" style="position:absolute;inset:18px;border-radius:22px;background:#fff;box-shadow:0 24px 60px rgba(0,0,0,.55);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px;opacity:0;transform:scale(.85);transition:opacity .35s ease, transform .35s ease;z-index:1">
          <div style="color:#9ca3af;font-weight:700;font-size:12.5px;margin-bottom:6px">${esc(slotLabel)}</div>
          <div id="live-draw-reveal-name" style="color:#111827;font-weight:800;font-size:30px;text-align:center;line-height:1.3"></div>
        </div>
        <div id="capsule-half-l" style="position:absolute;top:0;left:0;width:50%;height:100%;overflow:hidden;border-radius:150px 0 0 150px;transition:transform .5s cubic-bezier(.5,0,.2,1);z-index:2">
          <div style="width:300px;height:300px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #fff, ${s.color});box-shadow:0 24px 60px rgba(0,0,0,.5)"></div>
        </div>
        <div id="capsule-half-r" style="position:absolute;top:0;right:0;width:50%;height:100%;overflow:hidden;border-radius:0 150px 150px 0;transition:transform .5s cubic-bezier(.5,0,.2,1);z-index:2">
          <div style="width:300px;height:300px;border-radius:50%;background:radial-gradient(circle at 35% 30%, #fff, ${s.color});margin-left:-150px;box-shadow:0 24px 60px rgba(0,0,0,.5)"></div>
        </div>
      </div>`
    if (targetRect) {
      const dx = targetRect.left + targetRect.width / 2 - window.innerWidth / 2
      const dy = targetRect.top + targetRect.height / 2 - window.innerHeight / 2
      center.style.transition = 'none'
      center.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.15)`
      center.style.opacity = '1'
      void center.offsetWidth // บังคับ reflow ให้จุดเริ่มต้นมีผลจริง ก่อนเปลี่ยนเป็น transition
    }
    center.style.transition = 'transform .6s cubic-bezier(.34,1.56,.64,1), opacity .3s'
    center.style.transform = 'translate(-50%,-50%) scale(1)'
    center.style.opacity = '1'
  }
  await sleep(600)

  const nameEl = document.getElementById('live-draw-reveal-name')
  if (nameEl) nameEl.textContent = teamName(teamId)
  const halfL = document.getElementById('capsule-half-l')
  const halfR = document.getElementById('capsule-half-r')
  const paper = document.getElementById('capsule-paper')
  if (halfL) halfL.style.transform = 'translateX(-115px)'
  if (halfR) halfR.style.transform = 'translateX(115px)'
  if (paper) { paper.style.opacity = '1'; paper.style.transform = 'scale(1)' }
  playCrackSound()
  fireConfetti('high')

  ld.filled[`${slot.code}_${slot.side}`] = teamId
  ld.pickIndex++

  await sleep(2200) // ค้างไว้ให้เห็นชัดๆ 2-3 วิ

  if (targetBall) { targetBall.style.boxShadow = ''; targetBall.style.transform = '' }
  if (center) { center.style.transform = 'translate(-50%,-50%) scale(0)'; center.style.opacity = '0' }
  if (pool) pool.style.filter = ''
  await sleep(350)

  ld.phase = 'idle'
  ld.shaken = false // รอบถัดไปต้องเขย่าใหม่ก่อนถึงจะจับได้
  const aId = ld.filled[`${slot.code}_a`], bId = ld.filled[`${slot.code}_b`]
  if (aId && bId && !ld.testMode) {
    await SB.from('azfutsal_matches').upsert(
      { level: ld.level, match_code: slot.code, round: 'รอบแรก', team_a_id: aId, team_b_id: bId },
      { onConflict: 'level,match_code' }
    )
    await refresh()
  } else {
    draw()
  }
}

function eventListRow(level, code, teamId, side, type, label, color, bg) {
  const evs = S.matchEvents.filter(e => e.level === level && e.match_code === code && e.team_id === teamId && e.event_type === type)
  return `
  <div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
      <span style="font-size:11px;font-weight:700;color:${color}">${label}</span>
      ${teamId ? `<button data-act="openEventPicker" data-team="${side}" data-type="${type}" style="font-size:10.5px;border:1px dashed ${color};background:${bg};color:${color};border-radius:8px;padding:3px 8px;cursor:pointer">+ เพิ่ม</button>` : ''}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:6px">
      ${evs.length ? evs.map(e => `<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;background:${bg};border-radius:999px;padding:3px 4px 3px 10px">${esc(eventPlayerName(e.player_id))}<button data-act="removeMatchEvent" data-id="${e.id}" style="border:none;background:none;color:#9ca3af;cursor:pointer;font-size:12px;line-height:1;padding:2px">✕</button></span>`).join('') : `<span style="font-size:11px;color:#c1c5cc">-</span>`}
    </div>
  </div>`
}

function eventPickerRoster() {
  const { team } = S.eventPicker
  const { level, code } = S.editMatch
  const r = resolveMatch(level, code)
  const teamId = team === 'a' ? r.teamAId : r.teamBId
  return S.players.filter(p => p.team_id === teamId)
}

function eventPickerPlayerList() {
  const roster = eventPickerRoster()
  const filter = (S.eventPickerFilter || '').trim().toLowerCase()
  const filtered = filter ? roster.filter(p => String(p.jersey_number ?? '').includes(filter) || (p.students?.full_name || '').toLowerCase().includes(filter)) : roster
  return filtered.length ? filtered.map(p => `
    <button data-act="pickEventPlayer" data-player="${p.id}" style="display:flex;align-items:center;gap:8px;padding:6px;border:none;background:#fff;border-radius:9px;cursor:pointer;text-align:left;width:100%">
      ${photoTag(playerPhotoUrl(p))}
      <div style="min-width:0;font-size:12.5px;font-weight:700">#${p.jersey_number ?? '-'} ${esc(p.students?.full_name || '')}</div>
    </button>`).join('') : `<div style="font-size:11.5px;color:#9ca3af;padding:6px 0">ไม่พบผู้เล่น</div>`
}

function eventPickerSection() {
  if (!S.eventPicker) return ''
  const { team, type } = S.eventPicker
  const { level, code } = S.editMatch
  const r = resolveMatch(level, code)
  const teamId = team === 'a' ? r.teamAId : r.teamBId
  if (!teamId) return ''
  const typeLabel = { goal: 'ผู้ทำประตู', yellow: 'ใบเหลือง', red: 'ใบแดง' }[type]
  return `
  <div style="border:1px solid #e5e7eb;border-radius:12px;padding:10px;background:#fafafa">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="font-weight:700;font-size:12.5px">เลือกผู้เล่น · ${esc(typeLabel)} (${esc(team === 'a' ? r.teamA : r.teamB)})</div>
      <button data-act="closeEventPicker" style="border:none;background:none;color:#9ca3af;font-size:12px;cursor:pointer">ปิด</button>
    </div>
    <input id="event-picker-filter" placeholder="พิมพ์เบอร์เสื้อหรือชื่อ..." value="${esc(S.eventPickerFilter)}" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px;margin-bottom:8px"/>
    <div id="event-picker-list" style="display:flex;flex-direction:column;gap:4px;max-height:200px;overflow-y:auto">
      ${eventPickerPlayerList()}
    </div>
  </div>`
}

function matchEditorModal() {
  const { level, code } = S.editMatch
  const m = matchByCode(level, code) || {}
  const r = resolveMatch(level, code)
  const slots = pickableSlots(level, code)
  const teamField = (label, slot, resolvedName) => slot
    ? `<label style="font-size:11.5px;color:#6b7280;flex:1">${label}<select id="mx-team${label}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px"><option value="">-</option>${slot.pool.map(id => `<option value="${id}" ${String(slot.value) === String(id) ? 'selected' : ''}>${esc(teamName(id))}</option>`).join('')}</select></label>`
    : `<div style="font-size:11.5px;color:#6b7280;flex:1">${label}<div style="margin-top:4px;font-size:13px;font-weight:700">${esc(resolvedName) || '-'}</div></div>`
  return simpleModal(`${code} · ${T[level].label}`, `
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="display:flex;gap:10px">${teamField('A', slots.a, r.teamA)}${teamField('B', slots.b, r.teamB)}</div>
      <div style="display:flex;gap:10px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">สกอร์ A<input id="mx-scoreA" type="number" min="0" value="${m.score_a ?? ''}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">สกอร์ B<input id="mx-scoreB" type="number" min="0" value="${m.score_b ?? ''}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      ${!r.teamAId || !r.teamBId ? `<div style="font-size:11px;color:#9ca3af">* ระบุทีมทั้งสองฝั่งก่อน จึงจะบันทึกผู้ทำประตู/ใบเหลือง/ใบแดงได้</div>` : `
      <div style="display:flex;flex-direction:column;gap:10px;border-top:1px solid #f3f4f6;padding-top:10px">
        <div style="display:flex;gap:10px">
          <div style="flex:1">${eventListRow(level, code, r.teamAId, 'a', 'goal', `⚽ ประตู (${esc(r.teamA)})`, '#16a34a', '#dcfce7')}</div>
          <div style="flex:1">${eventListRow(level, code, r.teamBId, 'b', 'goal', `⚽ ประตู (${esc(r.teamB)})`, '#16a34a', '#dcfce7')}</div>
        </div>
        <div style="display:flex;gap:10px">
          <div style="flex:1">${eventListRow(level, code, r.teamAId, 'a', 'yellow', 'เหลือง A', '#b45309', '#FEF9C3')}</div>
          <div style="flex:1">${eventListRow(level, code, r.teamBId, 'b', 'yellow', 'เหลือง B', '#b45309', '#FEF9C3')}</div>
        </div>
        <div style="display:flex;gap:10px">
          <div style="flex:1">${eventListRow(level, code, r.teamAId, 'a', 'red', 'แดง A', '#dc2626', '#FEE2E2')}</div>
          <div style="flex:1">${eventListRow(level, code, r.teamBId, 'b', 'red', 'แดง B', '#dc2626', '#FEE2E2')}</div>
        </div>
        ${eventPickerSection()}
      </div>`}
      <div style="display:flex;gap:10px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">เวลาแข่ง<input id="mx-kickoff" placeholder="HH:MM" value="${esc(m.kickoff_time || '')}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">รายงานตัว<input id="mx-ready" placeholder="HH:MM" value="${esc(m.ready_time || '')}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <button data-act="saveMatch" data-level="${level}" data-code="${code}" style="margin-top:4px;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">บันทึก</button>
    </div>`)
}

// ---------------- staff search ----------------
async function loadStaffList() {
  const { data: rows } = await SB.from('azfutsal_admins').select('id, profile_id, note, created_at').order('created_at')
  const ids = (rows || []).map(r => r.profile_id)
  const safeIds = ids.length ? ids : ['00000000-0000-0000-0000-000000000000']
  const [{ data: teachers }, { data: students }] = await Promise.all([
    SB.from('teachers').select('profile_id, full_name').in('profile_id', safeIds),
    SB.from('students').select('profile_id, full_name').in('profile_id', safeIds),
  ])
  S.staffList = (rows || []).map(r => {
    const t = (teachers || []).find(x => x.profile_id === r.profile_id)
    const st = (students || []).find(x => x.profile_id === r.profile_id)
    const isStandalone = r.profile_id === STANDALONE_ADMIN_PROFILE_ID
    const name = t ? t.full_name : (st ? st.full_name : (isStandalone ? `${cfg('ADMIN_LOGIN_USERNAME', 'aaaaaa')} (แอดมินสำรอง)` : '(ไม่พบผู้ใช้)'))
    const isSelf = r.profile_id === S.identity.profile?.id
    return { id: r.id, name, role: t ? 'ครู' : (st ? 'นักเรียน' : (isStandalone ? 'บัญชีสำรอง' : '-')), isSelf }
  })
  const el = document.getElementById('az-staff-list')
  if (!el) return
  const onlyOneLeft = S.staffList.length <= 1
  el.innerHTML = S.staffList.length ? S.staffList.map(s => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f3f4f6">
      <div><div style="font-size:13px;font-weight:700">${esc(s.name)}${s.isSelf ? ' <span style="color:#9ca3af;font-weight:600">(คุณ)</span>' : ''}</div><div style="font-size:11px;color:#6b7280">${s.role}</div></div>
      ${onlyOneLeft ? `<span style="font-size:10.5px;color:#9ca3af" title="ต้องมีแอดมินอย่างน้อย 1 คนเสมอ">ลบไม่ได้ (คนสุดท้าย)</span>` : `<button data-act="removeStaff" data-id="${s.id}" data-self="${s.isSelf ? '1' : '0'}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>`}
    </div>`).join('') : `<div style="font-size:12px;color:#9ca3af">ยังไม่มีผู้ดูแลระบบ</div>`
}

async function searchStaffCandidates(q) {
  if (!q || q.trim().length < 2) return []
  const like = `%${q.trim()}%`
  const [{ data: teachers }, { data: students }] = await Promise.all([
    SB.from('teachers').select('profile_id, full_name, teacher_code').or(`full_name.ilike.${like},teacher_code.ilike.${like}`).not('profile_id', 'is', null).limit(8),
    SB.from('students').select('profile_id, full_name, student_code').or(`full_name.ilike.${like},student_code.ilike.${like}`).not('profile_id', 'is', null).limit(8),
  ])
  return [
    ...(teachers || []).map(t => ({ profile_id: t.profile_id, name: t.full_name, sub: `ครู · ${t.teacher_code || ''}` })),
    ...(students || []).map(s => ({ profile_id: s.profile_id, name: s.full_name, sub: `นักเรียน · ${s.student_code || ''}` })),
  ]
}

// ---------------- helpers for form reads ----------------
const numOrNull = v => (v === '' || v === null || v === undefined) ? null : (isNaN(Number(v)) ? null : Number(v))
const gid = id => document.getElementById(id)

// ---------------- action handlers ----------------
async function handleSaveMatch(level, code) {
  const r = resolveMatch(level, code)
  const selA = gid('mx-teamA'), selB = gid('mx-teamB')
  const teamAId = selA ? (selA.value || null) : r.teamAId
  const teamBId = selB ? (selB.value || null) : r.teamBId
  const scoreA = numOrNull(gid('mx-scoreA').value)
  const scoreB = numOrNull(gid('mx-scoreB').value)
  if (scoreA !== null && scoreB !== null && scoreA === scoreB) { azToast('สกอร์ต้องมีผู้ชนะ ห้ามเสมอ'); return }
  const payload = {
    level, match_code: code,
    round: (BRACKET[level].find(b => b.code === code) || {}).round || '',
    score_a: scoreA, score_b: scoreB,
    ready_time: gid('mx-ready').value || null, kickoff_time: gid('mx-kickoff').value || null,
    updated_at: new Date().toISOString(),
  }
  if (selA) payload.team_a_id = selA.value || null
  if (selB) payload.team_b_id = selB.value || null
  if (scoreA !== null && scoreB !== null && teamAId && teamBId) {
    payload.winner_team_id = scoreA > scoreB ? teamAId : teamBId
    payload.loser_team_id = scoreA > scoreB ? teamBId : teamAId
  }
  const { error } = await SB.from('azfutsal_matches').upsert(payload, { onConflict: 'level,match_code' })
  if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
  S.editMatch = null
  await refresh()
  azToast('บันทึกผลการแข่งขันแล้ว')
}

async function handleAddMatchEvent(playerId) {
  if (!S.editMatch || !S.eventPicker) return
  const { level, code } = S.editMatch
  const { team, type } = S.eventPicker
  const r = resolveMatch(level, code)
  const teamId = team === 'a' ? r.teamAId : r.teamBId
  if (!teamId) return
  const { error } = await SB.from('azfutsal_match_events').insert({ level, match_code: code, team_id: teamId, player_id: playerId, event_type: type })
  if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
  await refresh()
  // เปิดตัวเลือกผู้เล่นค้างไว้ต่อ เพื่อกดเพิ่มคนถัดไปได้เร็วๆ ไม่ต้องเปิดใหม่ทุกครั้ง
}

async function handleRemoveMatchEvent(id) {
  const { error } = await SB.from('azfutsal_match_events').delete().eq('id', id)
  if (error) { azToast('ลบไม่สำเร็จ: ' + error.message); return }
  await refresh()
}

async function handleUploadPlayerPhoto(playerId, file) {
  const player = S.players.find(p => p.id === playerId)
  if (!player) return
  azToast('กำลังอัปโหลดรูป...')
  try {
    const url = await uploadAzfutsalPlayerPhoto(player.team_id, playerId, file)
    const { error } = await SB.from('azfutsal_players').update({ photo_url: url }).eq('id', playerId)
    if (error) { azToast('บันทึกรูปไม่สำเร็จ: ' + error.message); return }
    await refresh()
    azToast('อัปโหลดรูปสำเร็จ')
  } catch (e) {
    azToast('อัปโหลดรูปไม่สำเร็จ: ' + (e?.message || ''))
  }
}

async function handleSeedMatches(level) {
  const existing = new Set(S.matches[level].map(m => m.match_code))
  const rows = BRACKET[level].filter(b => !existing.has(b.code)).map((b, i) => ({ level, match_code: b.code, round: b.round, order_no: i + 1 }))
  if (!rows.length) return
  const { error } = await SB.from('azfutsal_matches').insert(rows)
  if (error) { azToast('สร้างตารางไม่สำเร็จ: ' + error.message); return }
  await refresh()
  azToast('สร้างตารางแข่งเริ่มต้นแล้ว')
}

async function handleRandomDraw(level) {
  const teams = S.teams.filter(t => t.level === level).map(t => t.id)
  const firstCodes = BRACKET[level].filter(b => !b.refA).map(b => b.code)
  if (teams.length < firstCodes.length * 2) { azToast(`ต้องมีทีมอย่างน้อย ${firstCodes.length * 2} ทีมสำหรับรอบแรก`); return }
  const shuffled = [...teams].sort(() => Math.random() - 0.5)
  const rows = firstCodes.map((code, i) => ({ level, match_code: code, round: 'รอบแรก', team_a_id: shuffled[i * 2], team_b_id: shuffled[i * 2 + 1] }))
  const { error } = await SB.from('azfutsal_matches').upsert(rows, { onConflict: 'level,match_code' })
  if (error) { azToast('สุ่มจับคู่ไม่สำเร็จ: ' + error.message); return }
  await refresh()
  azToast('สุ่มจับคู่รอบแรกแล้ว')
}

async function handleCreateTeam(adminMode) {
  if (S.teamCreating) return // กันกดซ้ำรัวๆ ระหว่างกำลังสร้าง (สาเหตุที่เคยทำให้เกิดทีมซ้ำ 4 แถว)
  const name = gid('new-team-name').value.trim()
  const level = gid('new-team-level').value
  if (!name) { azToast('กรุณากรอกชื่อทีม'); return }
  let captainId
  if (adminMode) {
    const lr = S.capLookupResult
    if (!lr || typeof lr !== 'object') { azToast('กรุณาค้นหาและเลือกหัวหน้าทีมก่อน'); return }
    captainId = lr.id
  } else {
    captainId = S.identity.student.id
  }
  S.teamCreating = true
  draw()
  const { data, error } = await SB.from('azfutsal_teams').insert({ name, level, captain_student_id: captainId }).select('id').single()
  S.teamCreating = false
  if (error) {
    azToast(error.code === '23505' ? 'นักเรียนคนนี้เป็นหัวหน้าทีมอยู่แล้ว สร้างทีมซ้ำไม่ได้' : 'สร้างทีมไม่สำเร็จ: ' + error.message)
    draw()
    return
  }
  S.newTeamName = ''; S.capLookupCode = ''; S.capLookupResult = null
  if (adminMode) { S.adminCreatingTeam = false; S.adminManageTeamId = data.id }
  await refresh()
  azToast('สร้างทีมแล้ว เพิ่มรายชื่อนักกีฬาต่อได้เลย')
}

async function searchStudentCandidates(q) {
  if (!q || q.trim().length < 2) return []
  const like = `%${q.trim()}%`
  const { data } = await SB.from('students').select('id, full_name, student_code, image_url, photo_url')
    .or(`full_name.ilike.${like},student_code.ilike.${like}`)
    .limit(8)
  return data || []
}

async function handleAdminLogin() {
  const username = gid('admin-login-username').value.trim()
  const password = gid('admin-login-password').value
  if (!username || !password) { S.adminLoginError = 'กรอกยูสเซอร์เนมและรหัสผ่าน'; draw(); return }
  if (username !== cfg('ADMIN_LOGIN_USERNAME', 'aaaaaa')) { S.adminLoginError = 'ยูสเซอร์เนมหรือรหัสผ่านไม่ถูกต้อง'; draw(); return }
  const { error } = await SB.auth.signInWithPassword({ email: STANDALONE_ADMIN_EMAIL, password })
  if (error) { S.adminLoginError = 'ยูสเซอร์เนมหรือรหัสผ่านไม่ถูกต้อง'; draw(); return }
  S.adminLoginOpen = false
  await refresh()
  S.tab = 'admin'
  draw()
  azToast('เข้าสู่ระบบแอดมินแล้ว')
}

async function handleSetRole(teamId, studentId, role) {
  const field = role === 'captain' ? 'captain_student_id' : 'vice_captain_student_id'
  const { error } = await SB.from('azfutsal_teams').update({ [field]: studentId }).eq('id', teamId)
  if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
  await refresh()
  azToast(role === 'captain' ? 'ตั้งหัวหน้าทีมแล้ว' : 'ตั้งรองหัวหน้าทีมแล้ว')
}


async function handleAddRosterAthlete(teamId) {
  const lr = S.rosterLookupResult
  if (!lr || typeof lr !== 'object') return
  const jersey = gid('roster-jersey')?.value
  const { error } = await SB.from('azfutsal_players').insert({ team_id: teamId, student_id: lr.id, jersey_number: jersey ? Number(jersey) : null })
  if (error) { azToast('เพิ่มนักกีฬาไม่สำเร็จ: ' + error.message); return }
  S.rosterLookupCode = ''; S.rosterLookupResult = null; S.rosterJersey = ''
  await refresh()
  azToast('เพิ่มนักกีฬาแล้ว')
}

async function handleUploadPayment(teamId, method) {
  if (S.paymentUploading) return // กันกดซ้ำรัวๆ ระหว่างกำลังอัปโหลด (สาเหตุที่ทำให้เกิดแถวซ้ำ 3-6 ใบ)
  const file = gid('pay-slip-file')?.files?.[0]
  if (!file) { azToast('กรุณาเลือกไฟล์รูปภาพ'); return }
  S.paymentUploading = true
  draw()
  const path = `${teamId}/${method}_${Date.now()}_${file.name}`
  const { error: upErr } = await SB.storage.from('azfutsal-payments').upload(path, file, { upsert: true })
  if (upErr) { azToast('อัปโหลดไม่สำเร็จ: ' + upErr.message); S.paymentUploading = false; draw(); return }
  const existing = S.payments.find(p => p.team_id === teamId)
  const payload = {
    team_id: teamId, method, amount: Number(cfg('DEPOSIT_AMOUNT', 500)), status: 'pending', admin_note: null,
    slip_url: method === 'transfer' ? path : null,
    receipt_photo_url: method === 'cash' ? path : null,
    receipt_no: method === 'cash' ? (existing?.receipt_no || `RCP-${Date.now()}`) : null,
  }
  // upsert บน team_id (unique constraint ที่ฐานข้อมูล) กันแถวซ้ำแม้เปิดหลายแท็บ/กดพร้อมกันหลายอุปกรณ์
  const { error } = await SB.from('azfutsal_payments').upsert(payload, { onConflict: 'team_id' })
  S.paymentUploading = false
  if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); draw(); return }
  S.confirmRegOpen = false; S.confirmRegQR = null
  await refresh()
  azToast('ยืนยันการลงทะเบียนสำเร็จ ส่งหลักฐานแล้ว')
}

async function handleOpenConfirmReg(teamId) {
  S.confirmRegTeamId = teamId
  S.confirmRegOpen = true
  S.confirmRegQR = null
  draw()
  try {
    S.confirmRegQR = await promptpayQRDataURL(cfg('PROMPTPAY_NUMBER', '0825424340'), Number(cfg('DEPOSIT_AMOUNT', 500)))
  } catch {
    S.confirmRegQR = null
  }
  draw()
}

function genTeamCode(level) {
  const prefix = level === 'MS' ? 'MS' : 'HS'
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `${prefix}-${rand}`
}

async function handleConfirmReject() {
  const id = S.rejectPaymentId
  const reason = S.rejectReasonText.trim()
  if (!id || !reason) return
  const { error } = await SB.from('azfutsal_payments').update({
    status: 'rejected', admin_note: reason, reviewed_by: S.identity.profile.id, reviewed_at: new Date().toISOString(),
  }).eq('id', id)
  if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
  S.rejectPaymentId = null; S.rejectReasonText = ''
  await refresh()
  azToast('ปฏิเสธการชำระเงินแล้ว')
}

async function handleReviewPayment(id, status) {
  const { error } = await SB.from('azfutsal_payments').update({
    status, admin_note: null, reviewed_by: S.identity.profile.id, reviewed_at: new Date().toISOString(),
  }).eq('id', id)
  if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
  if (status === 'verified') {
    const payment = S.payments.find(p => p.id === id)
    const team = payment ? S.teams.find(t => t.id === payment.team_id) : null
    if (team) {
      const updates = {}
      if (!team.team_code) updates.team_code = genTeamCode(team.level)
      const quota = Number(cfg(team.level === 'MS' ? 'MAX_TEAMS_MS' : 'MAX_TEAMS_HS', '') || 0)
      if (quota > 0) {
        const verifiedCount = S.payments.filter(p =>
          p.status === 'verified' && p.team_id !== team.id &&
          S.teams.find(t2 => t2.id === p.team_id)?.level === team.level
        ).length
        updates.is_reserve = verifiedCount >= quota
      }
      if (Object.keys(updates).length) await SB.from('azfutsal_teams').update(updates).eq('id', team.id)
    }
  }
  await refresh()
  azToast('ยืนยันการชำระเงินแล้ว')
}

async function handleViewProof(path) {
  S.viewProofOpen = true
  S.viewProofUrl = null
  draw()
  const { data, error } = await SB.storage.from('azfutsal-payments').createSignedUrl(path, 300)
  if (error || !data) { azToast('เปิดไฟล์ไม่สำเร็จ'); S.viewProofOpen = false; draw(); return }
  S.viewProofUrl = data.signedUrl
  draw()
}

function bindEvents() {
  ROOT.addEventListener('click', async e => {
    const btn = e.target.closest('[data-act]')
    if (!btn) return
    const act = btn.dataset.act
    if (act === 'tab') { S.tab = btn.dataset.tab; draw(); return }
    if (act === 'setLevel') { S.filterLevel = btn.dataset.v; draw(); return }
    if (act === 'setStats') { S.statsLevel = btn.dataset.v; draw(); return }
    if (act === 'setTeamStatusLevel') { S.teamStatusLevel = btn.dataset.v; draw(); return }
    if (act === 'toggleTeamRoster') { S.teamStatusExpanded = S.teamStatusExpanded === btn.dataset.id ? null : btn.dataset.id; draw(); return }
    if (act === 'adminSec') { S.adminSection = btn.dataset.v; draw(); return }
    if (act === 'adminGroup') { const g = ADMIN_GROUPS.find(g => g.id === btn.dataset.v); if (g) S.adminSection = g.sections[0][0]; draw(); return }
    if (act === 'adminTeamLevel') { S.adminTeamLevel = btn.dataset.v; draw(); return }
    if (act === 'adminPaymentsLevel') { S.adminPaymentsLevel = btn.dataset.v; draw(); return }
    if (act === 'closeModal') { S.editMatch = null; S.eventPicker = null; S.eventPickerFilter = ''; S.certModalOpen = false; S.certFullscreen = false; S.rejectPaymentId = null; S.rejectReasonText = ''; draw(); return }
    if (act === 'account') {
      if (!S.identity.session) { goToLogin(); return }
      if (!S.identity.student) { azToast('หน้านี้สำหรับนักเรียน (หัวหน้าทีม/ตัวแทนทีม) เท่านั้น'); return }
      S.tab = 'myteam'; draw(); return
    }
    if (act === 'admin-gear') {
      if (S.identity.isAdmin) { S.tab = 'admin'; draw(); return }
      S.adminLoginOpen = true; S.adminLoginError = ''; S.adminLoginUsername = ''; draw(); return
    }
    if (act === 'closeAdminLogin') { S.adminLoginOpen = false; draw(); return }
    if (act === 'goToPp5Login') { goToLogin('index.html'); return }
    if (act === 'submitAdminLogin') { await handleAdminLogin(); return }
    if (act === 'adminSignOut') {
      await SB.auth.signOut()
      S.tab = 'schedule'
      await refresh()
      azToast('ออกจากระบบแล้ว'); return
    }
    if (act === 'editMatch') { S.editMatch = { level: btn.dataset.level, code: btn.dataset.code }; S.eventPicker = null; S.eventPickerFilter = ''; draw(); return }
    if (act === 'openEventPicker') { S.eventPicker = { team: btn.dataset.team, type: btn.dataset.type }; S.eventPickerFilter = ''; draw(); return }
    if (act === 'closeEventPicker') { S.eventPicker = null; S.eventPickerFilter = ''; draw(); return }
    if (act === 'pickEventPlayer') { await handleAddMatchEvent(btn.dataset.player); return }
    if (act === 'removeMatchEvent') { await handleRemoveMatchEvent(btn.dataset.id); return }
    if (act === 'saveMatch') { await handleSaveMatch(btn.dataset.level, btn.dataset.code); return }
    if (act === 'seedMatches') { await handleSeedMatches(btn.dataset.level); return }
    if (act === 'randomDraw') { await handleRandomDraw(btn.dataset.level); return }
    if (act === 'openCert') { S.certModalOpen = true; S.certResult = null; S.certInput = ''; draw(); return }
    if (act === 'certClose') { S.certModalOpen = false; S.certFullscreen = false; draw(); return }
    if (act === 'certBack') { S.certFullscreen = false; draw(); return }
    if (act === 'certFull') { S.certFullscreen = true; draw(); return }
    if (act === 'certSearch') {
      const code = gid('az-certInput').value.trim()
      S.certInput = code
      const st = [...(S.players.map(p => p.students))].find(s => s?.student_code === code)
      if (!st) { S.certResult = null; draw(); return }
      const player = S.players.find(p => p.student_id === st.id)
      const team = S.teams.find(t => t.id === player.team_id)
      const level = team.level
      const sum = computeSummary(level)
      let award = 'ผู้เข้าร่วมการแข่งขัน'
      if (sum.mvp === st.full_name) award = 'รางวัล MVP'
      else if (sum.topScorer === st.full_name) award = 'รางวัลดาวซัลโว'
      else if (sum.bestGK === st.full_name) award = 'รางวัลผู้รักษาประตูยอดเยี่ยม'
      else if (sum.champion === team.name) award = 'ทีมชนะเลิศ'
      else if (sum.runnerUp === team.name) award = 'ทีมรองชนะเลิศ'
      else if (sum.third === team.name) award = 'ทีมอันดับที่ 3'
      S.certResult = { name: st.full_name, team: team.name, level, award }
      draw(); return
    }
    if (act === 'createTeam') { await handleCreateTeam(btn.dataset.admin === '1'); return }
    if (act === 'setCaptain') { await handleSetRole(btn.dataset.team, Number(btn.dataset.student), 'captain'); return }
    if (act === 'setViceCaptain') { await handleSetRole(btn.dataset.team, Number(btn.dataset.student), 'vice_captain'); return }
    if (act === 'adminNewTeam') { S.adminCreatingTeam = true; S.adminManageTeamId = null; draw(); return }
    if (act === 'adminBackToList') { S.adminCreatingTeam = false; S.adminManageTeamId = null; draw(); return }
    if (act === 'adminOpenTeam') { S.adminManageTeamId = btn.dataset.id; draw(); return }
    if (act === 'addRosterAthlete') { await handleAddRosterAthlete(btn.dataset.team); return }
    if (act === 'uploadPayment') { await handleUploadPayment(btn.dataset.team, btn.dataset.method); return }
    if (act === 'openConfirmReg') { await handleOpenConfirmReg(btn.dataset.team); return }
    if (act === 'closeConfirmReg') { S.confirmRegOpen = false; S.confirmRegQR = null; draw(); return }
    if (act === 'reviewPayment') { await handleReviewPayment(btn.dataset.id, btn.dataset.status); return }
    if (act === 'openRejectModal') { S.rejectPaymentId = btn.dataset.id; S.rejectReasonText = ''; draw(); return }
    if (act === 'pickRejectTemplate') { S.rejectReasonText = btn.dataset.text; draw(); return }
    if (act === 'confirmReject') { await handleConfirmReject(); return }
    if (act === 'viewProof') { await handleViewProof(btn.dataset.path); return }
    if (act === 'closeViewProof') { S.viewProofOpen = false; S.viewProofUrl = null; draw(); return }
    if (act === 'toggleCert') {
      const cur = cfg('CERT_ENABLED', '1') === '1'
      await SB.from('azfutsal_config').upsert({ key: 'CERT_ENABLED', value: cur ? '0' : '1' })
      await refresh(); return
    }
    if (act === 'toggleRegistration') {
      const cur = cfg('REGISTRATION_OPEN', '0') === '1'
      await SB.from('azfutsal_config').upsert({ key: 'REGISTRATION_OPEN', value: cur ? '0' : '1' })
      await refresh(); return
    }
    if (act === 'uploadCertTemplate') {
      const file = gid('cert-template-file')?.files?.[0]
      if (!file) { azToast('กรุณาเลือกรูปภาพ'); return }
      const path = `cert-template_${Date.now()}_${file.name}`
      const { error: upErr } = await SB.storage.from('azfutsal-assets').upload(path, file, { upsert: true })
      if (upErr) { azToast('อัปโหลดไม่สำเร็จ: ' + upErr.message); return }
      const { data } = SB.storage.from('azfutsal-assets').getPublicUrl(path)
      await SB.from('azfutsal_config').upsert({ key: 'CERT_TEMPLATE_URL', value: data.publicUrl })
      await refresh(); azToast('อัปโหลดพื้นหลังเกียรติบัตรแล้ว'); return
    }
    if (act === 'uploadCertSong') {
      const file = gid('cert-song-file')?.files?.[0]
      if (!file) { azToast('กรุณาเลือกไฟล์เพลง'); return }
      const path = `cert-song_${Date.now()}_${file.name}`
      const { error: upErr } = await SB.storage.from('azfutsal-assets').upload(path, file, { upsert: true })
      if (upErr) { azToast('อัปโหลดไม่สำเร็จ: ' + upErr.message); return }
      const { data } = SB.storage.from('azfutsal-assets').getPublicUrl(path)
      await SB.from('azfutsal_config').upsert([{ key: 'CERT_SONG_URL', value: data.publicUrl }, { key: 'CERT_SONG_NAME', value: file.name }])
      await refresh(); azToast('อัปโหลดเพลงแล้ว'); return
    }
    if (act === 'saveGeneral') {
      await SB.from('azfutsal_config').upsert([
        { key: 'EVENT_NAME', value: gid('cfg-eventName').value },
        { key: 'INFO_DATE', value: gid('cfg-date').value },
        { key: 'INFO_VENUE', value: gid('cfg-venue').value },
        { key: 'COLOR_MS', value: gid('cfg-colorMs').value },
        { key: 'COLOR_HS', value: gid('cfg-colorHs').value },
      ])
      await refresh(); azToast('บันทึกแล้ว'); return
    }
    if (act === 'saveAdminAccount') {
      const username = gid('admin-acct-username').value.trim()
      const newPassword = gid('admin-acct-password').value
      if (!username) { azToast('กรอกยูสเซอร์เนม'); return }
      if (newPassword && newPassword.length < 6) { azToast('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'); return }
      await SB.from('azfutsal_config').upsert({ key: 'ADMIN_LOGIN_USERNAME', value: username })
      if (newPassword) {
        const { error } = await SB.auth.updateUser({ password: newPassword })
        if (error) { azToast('เปลี่ยนรหัสผ่านไม่สำเร็จ: ' + error.message); return }
      }
      await refresh(); azToast('บันทึกบัญชีแอดมินสำรองแล้ว'); return
    }
    if (act === 'saveRegSettings') {
      await SB.from('azfutsal_config').upsert([
        { key: 'DEPOSIT_AMOUNT', value: gid('reg-deposit').value },
        { key: 'MAX_ROSTER', value: gid('reg-maxroster').value },
        { key: 'PROMPTPAY_NUMBER', value: gid('reg-promptpay').value.trim() },
        { key: 'RATE_YELLOW', value: gid('reg-ratey').value },
        { key: 'RATE_RED', value: gid('reg-rater').value },
        { key: 'MAX_TEAMS_MS', value: gid('reg-quota-ms').value || '' },
        { key: 'MAX_TEAMS_HS', value: gid('reg-quota-hs').value || '' },
        { key: 'REGISTER_EDIT_DEADLINE', value: gid('reg-deadline').value || '' },
      ])
      await refresh(); azToast('บันทึกการตั้งค่าแล้ว'); return
    }
    if (act === 'saveAutoTime') {
      const start = gid('ops-start').value, matchMin = Number(gid('ops-matchmin').value || 20), breakMin = Number(gid('ops-breakmin').value || 5)
      if (!start) { azToast('กรุณาเลือกเวลาเริ่มแข่ง'); return }
      await SB.from('azfutsal_config').upsert([{ key: 'START_TIME', value: start }, { key: 'MATCH_MIN', value: String(matchMin) }, { key: 'BREAK_MIN', value: String(breakMin) }])
      let t = new Date(start)
      const allCodes = [...BRACKET.MS.map(b => ['MS', b.code]), ...BRACKET.HS.map(b => ['HS', b.code])]
      const rows = allCodes.map(([level, code]) => {
        const kickoff = t.toTimeString().slice(0, 5)
        const ready = new Date(t.getTime() - 5 * 60000).toTimeString().slice(0, 5)
        t = new Date(t.getTime() + (matchMin + breakMin) * 60000)
        return { level, match_code: code, round: (BRACKET[level].find(b => b.code === code) || {}).round || '', kickoff_time: kickoff, ready_time: ready, duration_min: matchMin, break_min: breakMin }
      })
      const { error } = await SB.from('azfutsal_matches').upsert(rows, { onConflict: 'level,match_code' })
      if (error) { azToast('จัดเวลาไม่สำเร็จ: ' + error.message); return }
      await refresh(); azToast('จัดเวลาอัตโนมัติเรียบร้อย'); return
    }
    if (act === 'adminNewTeamFromList' || act === 'adminOpenTeamFromList') {
      S.tab = 'myteam'
      if (act === 'adminNewTeamFromList') { S.adminCreatingTeam = true; S.adminManageTeamId = null }
      else { S.adminManageTeamId = btn.dataset.id; S.adminCreatingTeam = false }
      draw(); return
    }
    if (act === 'removeTeam') {
      if (!confirm('ลบทีมนี้? ข้อมูลนักกีฬาและการชำระเงินของทีมจะถูกลบด้วย')) return
      const { error } = await SB.from('azfutsal_teams').delete().eq('id', btn.dataset.id)
      if (error) { azToast('ลบไม่สำเร็จ: ' + error.message); return }
      await refresh(); azToast('ลบทีมแล้ว'); return
    }
    if (act === 'openLiveDraw') { S.liveDraw = { level: btn.dataset.level, started: false, testMode: true, orderStrategy: 'bypair' }; draw(); return }
    if (act === 'setLiveDrawMode') { if (S.liveDraw && !S.liveDraw.started) { S.liveDraw.testMode = btn.dataset.v === '1'; draw() } return }
    if (act === 'setLiveDrawOrder') { if (S.liveDraw && !S.liveDraw.started) { S.liveDraw.orderStrategy = btn.dataset.v; draw() } return }
    if (act === 'closeLiveDraw') { stopLiveDrawShake(); stopRollingSound(); S.liveDraw = null; draw(); return }
    if (act === 'startLiveDraw') { await handleStartLiveDraw(); return }
    if (act === 'shakePool') { await handleShakePool(); return }
    if (act === 'drawNext') { await handleDrawNext(); return }
    if (act === 'toggleOrganizer') {
      const { error } = await SB.from('azfutsal_teams').update({ is_organizer: btn.dataset.v === '1' }).eq('id', btn.dataset.id)
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      await refresh(); return
    }
    if (act === 'removePlayer') {
      if (!confirm('ลบนักกีฬาคนนี้ออกจากทีม?')) return
      const { error } = await SB.from('azfutsal_players').delete().eq('id', btn.dataset.id)
      if (error) { azToast('ลบไม่สำเร็จ: ' + error.message); return }
      await refresh(); return
    }
    if (act === 'removeStaff') {
      if ((S.staffList || []).length <= 1) { azToast('ต้องมีแอดมินอย่างน้อย 1 คนเสมอ ลบคนสุดท้ายไม่ได้'); return }
      const msg = btn.dataset.self === '1'
        ? 'นี่คือบัญชีที่คุณกำลังใช้อยู่ ถ้าถอนสิทธิ์ตัวเองจะออกจากหน้าแอดมินทันที ยืนยันหรือไม่?'
        : 'ถอนสิทธิ์แอดมินคนนี้?'
      if (!confirm(msg)) return
      const { error } = await SB.from('azfutsal_admins').delete().eq('id', btn.dataset.id)
      if (error) { azToast('ถอนสิทธิ์ไม่สำเร็จ: ' + error.message); return }
      if (btn.dataset.self === '1') { await refresh(); S.tab = 'schedule'; draw(); return }
      await loadStaffList(); return
    }
  })

  ROOT.addEventListener('change', async e => {
    const el = e.target
    if (el.id === 'new-team-level') { S.newTeamLevel = el.value; return }
    if (el.dataset.act === 'setAward') {
      const { error } = await SB.from('azfutsal_awards').upsert({ level: el.dataset.level, award_type: el.dataset.type, student_id: el.value || null }, { onConflict: 'level,award_type' })
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      await refresh(); azToast('บันทึกรางวัลแล้ว'); return
    }
    if (el.dataset.act === 'uploadPlayerPhoto' && el.files?.[0]) {
      await handleUploadPlayerPhoto(el.dataset.id, el.files[0])
      return
    }
  })

  ROOT.addEventListener('input', async e => {
    if (e.target.id === 'az-filterTeam') { S.filterTeam = e.target.value; updateScheduleList() }
    if (e.target.id === 'az-filterTime') { S.filterTime = e.target.value; updateScheduleList() }
    // เก็บค่าฟอร์มไว้ใน state เสมอ กัน draw() รอบใหม่ (เช่นตอนเลือกผลค้นหา) ล้างข้อความที่พิมพ์ไว้
    if (e.target.id === 'new-team-name') S.newTeamName = e.target.value
    if (e.target.id === 'roster-jersey') S.rosterJersey = e.target.value
    if (e.target.id === 'event-picker-filter') {
      S.eventPickerFilter = e.target.value
      const listEl = gid('event-picker-list')
      if (listEl) listEl.innerHTML = eventPickerPlayerList()
    }
    if (e.target.id === 'reject-reason-text') {
      S.rejectReasonText = e.target.value
      const btn = document.querySelector('[data-act="confirmReject"]')
      if (btn) {
        const hasText = !!S.rejectReasonText.trim()
        btn.disabled = !hasText
        btn.style.background = hasText ? '#dc2626' : '#f3b6b6'
        btn.style.cursor = hasText ? 'pointer' : 'default'
      }
    }
    if (e.target.id === 'staff-search') {
      const q = e.target.value
      const box = gid('staff-search-results')
      if (!q || q.trim().length < 2) { box.style.display = 'none'; return }
      const results = await searchStaffCandidates(q)
      box.innerHTML = results.length ? results.map(r => `<div data-profile="${r.profile_id}" data-name="${esc(r.name)}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-staff-cand"><b>${esc(r.name)}</b> <span style="color:#9ca3af">${r.sub}</span></div>`).join('') : `<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบ</div>`
      box.style.display = 'block'
      box.querySelectorAll('.az-staff-cand').forEach(row => row.addEventListener('click', async () => {
        const { error } = await SB.from('azfutsal_admins').insert({ profile_id: row.dataset.profile, granted_by: S.identity.profile.id })
        if (error) { azToast('เพิ่มสิทธิ์ไม่สำเร็จ: ' + error.message); return }
        gid('staff-search').value = ''; box.style.display = 'none'
        await loadStaffList()
        azToast(`มอบสิทธิ์แอดมินให้ ${row.dataset.name} แล้ว`)
      }))
    }
    if (e.target.id === 'cap-code') {
      const q = e.target.value
      S.capLookupCode = q
      const box = gid('cap-search-results')
      if (!q || q.trim().length < 2) { box.style.display = 'none'; return }
      const results = await searchStudentCandidates(q)
      box.innerHTML = results.length ? results.map(s => `<div data-id="${s.id}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-cap-cand"><b>${esc(s.full_name)}</b> <span style="color:#9ca3af">${esc(s.student_code)}</span></div>`).join('') : `<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบ</div>`
      box.style.display = 'block'
      box.querySelectorAll('.az-cap-cand').forEach(row => row.addEventListener('click', () => {
        const picked = results.find(s => String(s.id) === row.dataset.id)
        S.capLookupResult = picked
        S.capLookupCode = picked.full_name
        box.style.display = 'none'
        draw()
      }))
    }
    if (e.target.id === 'roster-code') {
      const q = e.target.value
      S.rosterLookupCode = q
      const box = gid('roster-search-results')
      if (!q || q.trim().length < 2) { box.style.display = 'none'; return }
      const results = await searchStudentCandidates(q)
      box.innerHTML = results.length ? results.map(s => `<div data-id="${s.id}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-roster-cand"><b>${esc(s.full_name)}</b> <span style="color:#9ca3af">${esc(s.student_code)}</span></div>`).join('') : `<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบ</div>`
      box.style.display = 'block'
      box.querySelectorAll('.az-roster-cand').forEach(row => row.addEventListener('click', () => {
        const picked = results.find(s => String(s.id) === row.dataset.id)
        const alreadyIn = S.players.find(p => p.student_id === picked.id)
        S.rosterLookupResult = alreadyIn ? 'duplicate' : picked
        S.rosterJersey = ''
        S.rosterLookupCode = picked.full_name
        box.style.display = 'none'
        draw()
      }))
    }
  })
}

function updateScheduleList() {
  const rows = scheduleRows()
  const countEl = gid('az-schedule-count')
  const listWrap = gid('az-schedule-rows')
  if (countEl) countEl.textContent = `${rows.length} นัด`
  if (listWrap) listWrap.innerHTML = rows.length ? rows.map(matchCard).join('') : `<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ไม่พบนัดที่ตรงกับตัวกรอง</div>`
}

function teamAdminRow(t) {
  return `
  <div style="border:1px solid #f3f4f6;border-radius:10px;padding:8px 10px">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="display:flex;align-items:center;gap:6px"><span style="font-size:13px;font-weight:700">${esc(t.name)}</span>${t.is_reserve ? reserveBadge() : ''}${t.is_organizer ? organizerBadge() : ''}</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button data-act="adminOpenTeamFromList" data-id="${t.id}" style="border:none;background:none;color:#db2777;font-size:11.5px;cursor:pointer;font-weight:600">จัดการ</button>
        <button data-act="removeTeam" data-id="${t.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>
      </div>
    </div>
    <div style="font-size:11px;color:#6b7280;margin-top:2px">หัวหน้าทีม: ${t.captain?.full_name ? esc(t.captain.full_name) : '-'}${t.vice_captain?.full_name ? ' · รอง: ' + esc(t.vice_captain.full_name) : ''}</div>
    <button data-act="toggleOrganizer" data-id="${t.id}" data-v="${t.is_organizer ? '0' : '1'}" style="margin-top:4px;border:none;background:none;color:#4338ca;font-size:10.5px;cursor:pointer;font-weight:600">${t.is_organizer ? 'ยกเลิกทีมผู้จัด' : 'ตั้งเป็นทีมผู้จัด'}</button>
  </div>`
}

function adminAthletes() {
  const rows = S.players
  return box(`
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">นักกีฬาที่ลงทะเบียน (${rows.length})</div>
    <div style="display:flex;flex-direction:column;gap:6px;max-height:340px;overflow-y:auto">
      ${rows.length ? rows.map(p => { const g = playerGoals(p.id); return `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f3f4f6">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:700">${esc(p.students?.full_name || '')}${g ? ` · ⚽${g}` : ''}</div>
            <div style="font-size:11px;color:#6b7280">${esc(p.students?.student_code || '')} · ${esc(teamName(p.team_id))}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
            <button data-act="removePlayer" data-id="${p.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>
          </div>
        </div>`}).join('') : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีนักกีฬาลงทะเบียน</div>`}
    </div>
  `)
}

function adminPayments() {
  const level = S.adminPaymentsLevel || 'MS'
  const rows = S.payments.filter(p => S.teams.find(t => t.id === p.team_id)?.level === level)
  const pendingCount = rows.filter(p => p.status === 'pending').length
  return box(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">ตรวจสอบการชำระเงินประกัน${pendingCount ? ` <span style="font-weight:600;font-size:11.5px;color:#f59e0b">(${pendingCount} รอตรวจสอบ)</span>` : ''}</div>
      <div style="display:flex;gap:6px">${['MS', 'HS'].map(v => `<button data-act="adminPaymentsLevel" data-v="${v}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${level === v ? T[v].base : '#e5e7eb'};background:${level === v ? T[v].base : '#fff'};color:${level === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${T[v].label}</button>`).join('')}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;max-height:420px;overflow-y:auto">
      ${rows.length ? rows.map(p => {
        const team = S.teams.find(t => t.id === p.team_id)
        return `
        <div style="border:1px solid #f3f4f6;border-radius:10px;padding:10px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <div style="display:flex;align-items:center;gap:6px"><span style="font-size:13px;font-weight:700">${esc(team?.name || '')}</span>${team?.is_reserve ? reserveBadge() : ''}${team?.is_organizer ? organizerBadge() : ''}</div>
            ${statusPill(p.status)}
          </div>
          <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">${p.method === 'transfer' ? 'โอนเงิน' : 'เงินสด'} · ${money(p.amount)} บาท</div>
          ${p.slip_url || p.receipt_photo_url ? `<button data-act="viewProof" data-path="${esc(p.slip_url || p.receipt_photo_url)}" style="font-size:11.5px;color:#db2777;background:none;border:none;cursor:pointer;text-decoration:underline;margin-bottom:6px">ดูหลักฐาน</button><br/>` : ''}
          ${p.status === 'pending' ? `
          <div style="display:flex;gap:6px;margin-top:4px">
            <button data-act="reviewPayment" data-id="${p.id}" data-status="verified" style="flex:1;padding:7px;border-radius:8px;border:none;background:#16a34a;color:#fff;font-weight:700;font-size:12px;cursor:pointer">ยืนยัน</button>
            <button data-act="openRejectModal" data-id="${p.id}" style="flex:1;padding:7px;border-radius:8px;border:none;background:#dc2626;color:#fff;font-weight:700;font-size:12px;cursor:pointer">ปฏิเสธ</button>
          </div>` : ''}
        </div>`
      }).join('') : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีรายการชำระเงิน</div>`}
    </div>
  `)
}

function adminCertificates() {
  const enabled = cfg('CERT_ENABLED', '1') === '1'
  const templateUrl = cfg('CERT_TEMPLATE_URL', '')
  const songName = cfg('CERT_SONG_NAME', '')
  return box(`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">จัดการเกียรติบัตร</div>
      <button data-act="toggleCert" style="font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${enabled ? '#dcfce7' : '#f3f4f6'};color:${enabled ? '#16a34a' : '#6b7280'}">${enabled ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}</button>
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:10px">ระบบจับคู่รางวัลอัตโนมัติจาก แชมป์/รองแชมป์/อันดับ 3 (คำนวณจากผลการแข่งขัน) และ MVP/ดาวซัลโว/GK ยอดเยี่ยม (ตั้งค่าที่แท็บ "เวลา/รางวัล") นักเรียนที่ไม่ได้รางวัลจะได้ใบ "ผู้เข้าร่วมการแข่งขัน"</div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">พื้นหลังเกียรติบัตร (ไม่บังคับ)</div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      ${templateUrl ? `<img src="${esc(templateUrl)}" style="width:72px;height:48px;object-fit:cover;border-radius:8px;border:1px solid #e5e7eb"/>` : `<div style="width:72px;height:48px;border-radius:8px;border:1px dashed #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:9px;color:#9ca3af">ไม่มีรูป</div>`}
      <input type="file" accept="image/*" id="cert-template-file" style="font-size:11.5px"/>
      <button data-act="uploadCertTemplate" style="font-size:11px;padding:7px 10px;border-radius:8px;border:none;background:#db2777;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">อัปโหลด</button>
    </div>
    <div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">เพลงประกอบพิธีมอบรางวัล (ไม่บังคับ)</div>
    <div style="display:flex;align-items:center;gap:8px">
      <input type="file" accept="audio/*" id="cert-song-file" style="font-size:11.5px;flex:1;min-width:0"/>
      <button data-act="uploadCertSong" style="font-size:11px;padding:7px 10px;border-radius:8px;border:none;background:#db2777;color:#fff;font-weight:700;cursor:pointer;white-space:nowrap">อัปโหลด</button>
    </div>
    ${songName ? `<div style="font-size:11px;color:#6b7280;margin-top:6px">ไฟล์ปัจจุบัน: ${esc(songName)}</div>` : ''}
  `)
}

function adminOps() {
  const dep = level => {
    const stats = computeTeamStats(level)
    const deposit = Number(cfg('DEPOSIT_AMOUNT', 500)), rateY = Number(cfg('RATE_YELLOW', 30)), rateR = Number(cfg('RATE_RED', 50))
    return S.teams.filter(t => t.level === level).map(t => {
      const st = stats.find(s => s.id === t.id) || { y: 0, r: 0 }
      const refund = Math.max(deposit - st.y * rateY - st.r * rateR, 0)
      return { team: t.name, refund }
    })
  }
  const awardPicker = (level, type, label) => {
    const current = S.awards.find(a => a.level === level && a.award_type === type)?.student_id || ''
    const players = S.players.filter(p => S.teams.find(t => t.id === p.team_id)?.level === level)
    return `<label style="font-size:11.5px;color:#6b7280;flex:1">${label}
      <select data-act="setAward" data-level="${level}" data-type="${type}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12px">
        <option value="">-</option>
        ${players.map(p => `<option value="${p.student_id}" ${String(current) === String(p.student_id) ? 'selected' : ''}>${esc(p.students?.full_name || '')}</option>`).join('')}
      </select></label>`
  }
  return `
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:10px">ตั้งค่าเวลา / ไทม์ไลน์</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <label style="font-size:11.5px;color:#6b7280">เริ่มแข่ง
          <input id="ops-start" type="datetime-local" value="${esc(cfg('START_TIME', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
        </label>
        <div style="display:flex;gap:8px">
          <label style="font-size:11.5px;color:#6b7280;flex:1">นัด (นาที)<input id="ops-matchmin" type="number" value="${esc(cfg('MATCH_MIN', 20))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/></label>
          <label style="font-size:11.5px;color:#6b7280;flex:1">พัก (นาที)<input id="ops-breakmin" type="number" value="${esc(cfg('BREAK_MIN', 5))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/></label>
        </div>
        <button data-act="saveAutoTime" style="margin-top:4px;width:100%;padding:10px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">จัดเวลาอัตโนมัติ</button>
      </div>
    `)}
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px">สรุปเงินประกัน (Deposit)</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">เริ่มต้น ${money(cfg('DEPOSIT_AMOUNT', 500))} บาท · หักใบเหลือง ${money(cfg('RATE_YELLOW', 30))} / ใบแดง ${money(cfg('RATE_RED', 50))}</div>
      ${['MS', 'HS'].map(level => `
        <div style="margin-bottom:10px">
          <div style="font-weight:700;font-size:12.5px;color:${T[level].accent};margin-bottom:6px">${T[level].label}</div>
          ${dep(level).map(d => `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f3f4f6;font-size:12.5px"><span>${esc(d.team)}</span><span style="font-weight:700">${money(d.refund)} ฿</span></div>`).join('') || '<div style="font-size:12px;color:#9ca3af">ยังไม่มีทีม</div>'}
        </div>`).join('')}
    `)}
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:10px">รางวัลรายบุคคล</div>
      ${['MS', 'HS'].map(level => `
        <div style="margin-bottom:10px">
          <div style="font-weight:700;font-size:12.5px;color:${T[level].accent};margin-bottom:6px">${T[level].label}</div>
          <div style="display:flex;flex-direction:column;gap:6px">
            ${awardPicker(level, 'mvp', 'MVP')}
            ${awardPicker(level, 'top_scorer', 'ดาวซัลโว')}
            ${awardPicker(level, 'best_gk', 'GK ยอดเยี่ยม')}
          </div>
        </div>`).join('')}
    `)}
  `
}
