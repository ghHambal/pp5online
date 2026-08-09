import QRCode from 'qrcode'
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
  if (S.theme === 'dark') {
    T.MS.base = ms; T.MS.accent = mix(ms, 255, 0.18); T.MS.soft = mix(ms, 15, 0.82); T.MS.border = mix(ms, 100, 0.58)
    T.HS.base = hs; T.HS.accent = mix(hs, 255, 0.18); T.HS.soft = mix(hs, 15, 0.82); T.HS.border = mix(hs, 100, 0.58)
    return
  }
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
const MS_BRACKET_12 = [
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
// เมื่อ ม.ต้น มี 13 ทีม: จับ 1 ทีมเข้ารอบบายก่อน แล้วนำ 12 ทีมที่เหลือจับคู่ M1-M6
// ทีมบายเข้าช่อง M12 โดยตรง จึงเหลือสิทธิ์จากผู้ชนะรอบแก้ตัวเพียง 1 ทีมที่ M13
const MS_BRACKET_13 = MS_BRACKET_12.map(match => {
  if (match.code === 'M12') return { ...match, refB: 'FIRST_ROUND_BYE' }
  if (match.code === 'M13') return { ...match, refB: 'REC_1' }
  return { ...match }
})
// M1-M8 รอบแรก (16 ทีม) ผู้ชนะ 8 ทีมรอไว้ก่อน ผู้แพ้ 8 ทีมไปรอบแก้ตัว
// M9-M12 รอบแก้ตัว (เฉพาะผู้แพ้รอบแรก) ผู้ชนะ 4 ทีมไปรวมกับผู้ชนะรอบแรก = 12 ทีม ผู้แพ้ตกรอบ
// M13-M18 รวม 12 ทีม จับคู่ 6 คู่ (pool 'R3' — จับสลากสดหรือแอดมินเลือกเองตอนนั้น) ผู้ชนะ 6 ทีมไปต่อ ผู้แพ้ตกรอบ
// M19-M21 เหลือ 6 ทีม จับคู่ 3 คู่ (pool 'R4' — จับสลากสดหรือแอดมินเลือกเองตอนนั้น) ผู้ชนะ 3 ทีมรอรองฯ
//   ผู้แพ้ 3 ทีม สุ่มฉลาก 1 ทีม (LOTTERY_1 จาก LOTTERY_SOURCES) เข้าร่วมรองฯ ด้วย อีก 2 ทีมตกรอบ
// M22/M23 รองฯ (3 ทีมชนะ + 1 ทีมจากฉลาก) M24 ชิงที่ 3 M25 ชิงที่ 1 — รวม 25 นัด
// ใช้ร่วมกันทั้ง ม.ปลาย (คงที่) และ ม.ต้นโหมด 16 ทีม (แอดมินเลือกได้) เพราะรหัสนัด/โครงสร้างไม่ผูกกับระดับชั้น
const SIXTEEN_TEAM_BRACKET = [
  { code: 'M1', round: 'รอบแรก' }, { code: 'M2', round: 'รอบแรก' }, { code: 'M3', round: 'รอบแรก' },
  { code: 'M4', round: 'รอบแรก' }, { code: 'M5', round: 'รอบแรก' }, { code: 'M6', round: 'รอบแรก' },
  { code: 'M7', round: 'รอบแรก' }, { code: 'M8', round: 'รอบแรก' },
  { code: 'M9', round: 'รอบแก้ตัว', refA: 'L_M1', refB: 'L_M2' },
  { code: 'M10', round: 'รอบแก้ตัว', refA: 'L_M3', refB: 'L_M4' },
  { code: 'M11', round: 'รอบแก้ตัว', refA: 'L_M5', refB: 'L_M6' },
  { code: 'M12', round: 'รอบแก้ตัว', refA: 'L_M7', refB: 'L_M8' },
  { code: 'M13', round: 'รอบ 12 ทีม', pool: 'R3' }, { code: 'M14', round: 'รอบ 12 ทีม', pool: 'R3' },
  { code: 'M15', round: 'รอบ 12 ทีม', pool: 'R3' }, { code: 'M16', round: 'รอบ 12 ทีม', pool: 'R3' },
  { code: 'M17', round: 'รอบ 12 ทีม', pool: 'R3' }, { code: 'M18', round: 'รอบ 12 ทีม', pool: 'R3' },
  { code: 'M19', round: 'รอบ 6 ทีม', pool: 'R4' },
  { code: 'M20', round: 'รอบ 6 ทีม', pool: 'R4' },
  { code: 'M21', round: 'รอบ 6 ทีม', pool: 'R4' },
  { code: 'M22', round: 'รองฯ', refA: 'W_M19', refB: 'LOTTERY_1' },
  { code: 'M23', round: 'รองฯ', refA: 'W_M20', refB: 'W_M21' },
  { code: 'M24', round: 'ชิงที่ 3', refA: 'L_M22', refB: 'L_M23' },
  { code: 'M25', round: 'ชิงที่ 1', refA: 'W_M22', refB: 'W_M23' },
]
const MS_BRACKET_16 = SIXTEEN_TEAM_BRACKET
const HS_BRACKET = SIXTEEN_TEAM_BRACKET
const msTeamFormat = () => cfg('MS_TEAM_FORMAT', '12') === '16' ? '16' : '12'
// ม.ต้น เลือกได้ 12 หรือ 16 ทีม (ตั้งค่าก่อนสร้างตารางแข่งเท่านั้น, ล็อกหลังสร้างแล้ว) — ม.ปลายคงที่ 16 ทีมเสมอ
const BRACKET = {
  get MS() {
    if (msTeamFormat() === '16') return MS_BRACKET_16
    return hasMsFirstRoundBye() ? MS_BRACKET_13 : MS_BRACKET_12
  },
  HS: HS_BRACKET,
}
const FINAL_CODE = {
  get MS() { return msTeamFormat() === '16' ? 'M25' : 'M17' },
  HS: 'M25',
}
const THIRD_CODE = {
  get MS() { return msTeamFormat() === '16' ? 'M24' : 'M16' },
  HS: 'M24',
}
const RECOVER_SOURCES = { MS: ['M7', 'M8', 'M9'] }
const WILDCARD_SOURCES = {}
// รอบที่ทีมทั้งหมดมาจากสระผู้ชนะของรอบก่อนหน้า จับคู่กันเอง (จับสลากสด/แอดมินเลือกเอง) ไม่ใช่สายตายตัว
// ใช้ร่วมกันได้ทั้ง HS และ MS โหมด 16 ทีม เพราะรหัสนัดในสระเหมือนกันทุกประการ (ดู SIXTEEN_TEAM_BRACKET)
const SIXTEEN_TEAM_POOL_SOURCES = {
  R3: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
  R4: ['M13', 'M14', 'M15', 'M16', 'M17', 'M18'],
}
const POOL_SOURCES = { HS: SIXTEEN_TEAM_POOL_SOURCES, MS: SIXTEEN_TEAM_POOL_SOURCES }
// สระผู้แพ้ที่ใช้สุ่มฉลาก 1 ทีมเข้ารองฯ (LOTTERY_1)
const SIXTEEN_TEAM_LOTTERY_SOURCE = ['M19', 'M20', 'M21']
const LOTTERY_SOURCES = { HS: SIXTEEN_TEAM_LOTTERY_SOURCE, MS: SIXTEEN_TEAM_LOTTERY_SOURCE }

const esc = v => String(v ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const money = n => Number(n || 0).toLocaleString('th-TH')
const fmtDT = iso => iso ? new Date(iso).toLocaleString('th-TH', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : ''

let SB = null
let ROOT = null
let S = {
  theme: (typeof localStorage !== 'undefined' && localStorage.getItem('az_theme') === 'light') ? 'light' : 'dark',
  tab: 'schedule',
  scheduleMode: 'timeline',
  scheduleDay: 1,
  bracketLevel: 'MS',
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
  editingJerseyId: null, // player id ที่กำลังแก้เบอร์เสื้ออยู่
  editJerseyValue: '',
  editingTeamName: false,
  editTeamNameValue: '',
  myTeamMatchesOpen: false,
  expandedPlayerId: null,
  teamCodeInput: (typeof localStorage !== 'undefined' && localStorage.getItem('az_team_code')) || '',
  teamCodeLookupResult: null, // team row | 'notfound' | null
  myTeamTab: 'roster', // 'roster' | 'matches' | 'finance' — แท็บย่อยในหน้าทีมของฉัน
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
  pendingConfirm: null, // { message, danger, run } — โมดัลยืนยันแทน window.confirm() ของเบราว์เซอร์
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
  adminAthleteLevel: 'MS',
  adminPaymentsLevel: 'MS',
  staffList: null,

  identity: { session: null, profile: null, isAdmin: false, scopes: [], student: null, teacher: null },
  staffScopeEdit: null, // { mode:'add'|'edit', id?, profile_id?, name, scopes:[] }
  manualPoolAssign: null, // { level, pool } — จับคู่รอบสระ (12/6 ทีม) ด้วยตนเองทีละคู่ในหน้าเดียว
  config: {},
  teams: [],
  players: [],
  matches: { MS: [], HS: [] },
  matchEvents: [],
  checkins: [],
  eventCheckins: [],
  eventCheckinDay: null, // แท็บวันที่กำลังดูอยู่ในหน้าจอสแกน/จอใหญ่ (1 หรือ 2) — null = เดาจากวันที่ปัจจุบันอัตโนมัติ
  eventCheckinIncompleteLevel: 'ALL', // แท็บกรองระดับชั้นในรายการ "ทีมมาไม่ครบ" ของหน้าแอดมิน
  staffNames: {},
  awards: [],
  payments: [],
  loading: true,
}

function cfg(key, fallback = '') { return S.config[key] ?? fallback }

function hasMsFirstRoundBye() {
  return msTeamFormat() === '12' && S.teams.filter(team => team.level === 'MS').length === 13
}

function supportsFirstRoundBye(level, poolKey = null) {
  return !poolKey && level === 'MS' && hasMsFirstRoundBye()
}

async function loadAll() {
  const { data: { session } } = await SB.auth.getSession()
  let profile = null, isAdmin = false, scopes = [], student = null, teacher = null
  if (session) {
    const { data: p } = await SB.from('profiles').select('id, role, user_code, is_also_admin').eq('id', session.user.id).maybeSingle()
    profile = p || null
    if (profile) {
      const { data: adminRow } = await SB.from('azfutsal_admins').select('id, scopes').eq('profile_id', profile.id).maybeSingle()
      scopes = adminRow?.scopes || []
      isAdmin = scopes.includes('full')
      const { data: st } = await SB.from('students').select('id, student_code, full_name, class_name, main_room').eq('profile_id', profile.id).maybeSingle()
      student = st || null
      const { data: tc } = await SB.from('teachers').select('id, full_name, teacher_code').eq('profile_id', profile.id).maybeSingle()
      teacher = tc || null
    }
  }
  S.identity = { session, profile, isAdmin, scopes, student, teacher }

  const [{ data: config }, { data: teams }, { data: players }, { data: msMatches }, { data: hsMatches }, { data: awards }, { data: matchEvents }, { data: checkins }, { data: eventCheckins }] = await Promise.all([
    SB.from('azfutsal_config').select('key, value'),
    SB.from('azfutsal_teams').select('id, level, name, captain_student_id, vice_captain_student_id, payment_method, team_code, is_reserve, is_organizer, created_at, captain:students!azfutsal_teams_captain_student_id_fkey(full_name), vice_captain:students!azfutsal_teams_vice_captain_student_id_fkey(full_name)'),
    SB.from('azfutsal_players').select('id, team_id, student_id, jersey_number, photo_url, registered_at, students(id, full_name, student_code, class_name, image_url, photo_url)'),
    SB.from('azfutsal_matches').select('*').eq('level', 'MS'),
    SB.from('azfutsal_matches').select('*').eq('level', 'HS'),
    SB.from('azfutsal_awards').select('id, level, award_type, student_id, students(id, full_name)'),
    SB.from('azfutsal_match_events').select('id, level, match_code, team_id, player_id, event_type, minute, is_penalty, created_at').order('created_at'),
    SB.from('azfutsal_checkins').select('id, level, match_code, team_id, player_id, checked_in_by, checked_in_at'),
    SB.from('azfutsal_event_checkins').select('id, day, team_id, player_id, checked_in_by, method, checked_in_at'),
  ])
  S.config = Object.fromEntries((config || []).map(r => [r.key, r.value]))
  applyThemeColors()
  S.teams = teams || []
  S.players = players || []
  S.matches = { MS: msMatches || [], HS: hsMatches || [] }
  S.awards = awards || []
  S.matchEvents = matchEvents || []
  S.checkins = checkins || []
  S.eventCheckins = eventCheckins || []

  // ชื่อผู้รับรายงานตัว (สำหรับ "ปั๊มดิจิทัล") — ดึงเฉพาะ id ที่ปรากฏจริงใน checkins กันยิง query เปล่าๆ
  const staffIds = [...new Set([...S.checkins.map(c => c.checked_in_by), ...S.eventCheckins.map(c => c.checked_in_by)].filter(Boolean))]
  if (staffIds.length) {
    const [{ data: staffTeachers }, { data: staffStudents }] = await Promise.all([
      SB.from('teachers').select('profile_id, full_name').in('profile_id', staffIds),
      SB.from('students').select('profile_id, full_name').in('profile_id', staffIds),
    ])
    S.staffNames = {}
    ;(staffTeachers || []).forEach(t => { S.staffNames[t.profile_id] = t.full_name })
    ;(staffStudents || []).forEach(st => { if (!S.staffNames[st.profile_id]) S.staffNames[st.profile_id] = st.full_name })
  } else {
    S.staffNames = {}
  }

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
  if (!winnerId && teamAId && teamBId) {
    if (matchPenaltyShootoutComplete(m) && m.penalty_score_a !== m.penalty_score_b) {
      winnerId = m.penalty_score_a > m.penalty_score_b ? teamAId : teamBId
      loserId = m.penalty_score_a > m.penalty_score_b ? teamBId : teamAId
    } else if (m.score_a !== null && m.score_b !== null && m.score_a !== m.score_b) {
      winnerId = m.score_a > m.score_b ? teamAId : teamBId
      loserId = m.score_a > m.score_b ? teamBId : teamAId
    }
  }
  return { teamA: teamName(teamAId), teamB: teamName(teamBId), teamAId, teamBId, winnerId, loserId, match: m }
}

function resolveRef(level, ref, seen) {
  if (!ref) return null
  if (ref.startsWith('W_M')) return resolveMatch(level, ref.slice(2), seen).winnerId
  if (ref.startsWith('L_M')) return resolveMatch(level, ref.slice(2), seen).loserId
  if (ref === 'FIRST_ROUND_BYE') return cfg(`FIRST_ROUND_BYE_${level}`, '') || null
  return null
}

function winnersFrom(level, codes) { return codes.map(c => resolveMatch(level, c).winnerId).filter(Boolean) }
function losersFrom(level, codes) { return codes.map(c => resolveMatch(level, c).loserId).filter(Boolean) }

// ทีมที่ถูกเลือกไปแล้วในนัดอื่นๆ ของรอบสระเดียวกัน (กันแอดมินเลือกทีมซ้ำเข้าสองคู่)
function poolRoundUsedIds(level, poolKey, exceptCode, exceptSide) {
  const ids = []
  BRACKET[level].filter(b => b.pool === poolKey).forEach(b => {
    const mm = matchByCode(level, b.code)
    if (!mm) return
    if (mm.team_a_id && !(b.code === exceptCode && exceptSide === 'a')) ids.push(mm.team_a_id)
    if (mm.team_b_id && !(b.code === exceptCode && exceptSide === 'b')) ids.push(mm.team_b_id)
  })
  return ids
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

function matchPenaltyShootoutComplete(match) {
  return !!match?.is_penalty_shootout
    && match.penalty_score_a !== null && match.penalty_score_a !== undefined
    && match.penalty_score_b !== null && match.penalty_score_b !== undefined
}

function matchWinnerFlags(match, teamAId, teamBId) {
  if (!match) return { aWins: false, bWins: false }
  if (match.winner_team_id) {
    return {
      aWins: !!teamAId && String(match.winner_team_id) === String(teamAId),
      bWins: !!teamBId && String(match.winner_team_id) === String(teamBId),
    }
  }
  const hasScore = match.score_a !== null && match.score_a !== undefined && match.score_b !== null && match.score_b !== undefined
  return {
    aWins: hasScore && Number(match.score_a) > Number(match.score_b),
    bWins: hasScore && Number(match.score_b) > Number(match.score_a),
  }
}

function penaltyShootoutScoreLine(match) {
  if (!matchPenaltyShootoutComplete(match)) return ''
  return `<div style="margin-top:3px;font-size:9.5px;font-weight:800;color:#7c3aed;white-space:nowrap">จุดโทษ ${esc(match.penalty_score_a)}-${esc(match.penalty_score_b)}</div>`
}

// ---------------- นาฬิกาจับเวลาแข่งขันสด ----------------
// clock_status: 'not_started' | 'running' | 'paused' | 'half_break' | 'ended'
// elapsed = clock_elapsed_before (วินาทีสะสมจากช่วงก่อนหน้า) + (ถ้ากำลังวิ่งอยู่ ให้บวกเวลาที่ผ่านไปจริงตั้งแต่ clock_started_at)
function matchClockElapsedSeconds(m) {
  if (!m || !m.clock_status || m.clock_status === 'not_started') return null
  let sec = m.clock_elapsed_before || 0
  if (m.clock_status === 'running' && m.clock_started_at) {
    sec += Math.max(0, Math.floor((Date.now() - new Date(m.clock_started_at).getTime()) / 1000))
  }
  return sec
}
// นาทีสะสมแบบเดียวกับบอลจริง (0:00-0:59 = นาทีที่ 1, 1:00-1:59 = นาทีที่ 2, ...)
function matchClockMinute(m) {
  const sec = matchClockElapsedSeconds(m)
  return sec === null ? null : Math.floor(sec / 60) + 1
}
function _azFmtClock(sec) {
  const neg = sec < 0
  const abs = Math.abs(sec)
  const mm = String(Math.floor(abs / 60)).padStart(2, '0')
  const ss = String(abs % 60).padStart(2, '0')
  return `${neg ? '+' : ''}${mm}:${ss}`
}
// แสดงตัวนับเวลาสด (data-* ให้ _azTickClocks อัปเดตทุกวินาทีโดยไม่ต้อง draw() ใหม่ทั้งหน้า)
function matchClockDisplay(m, opts = {}) {
  const status = m?.clock_status || 'not_started'
  if (status === 'not_started') return ''
  const halfMin = Number(cfg('HALF_DURATION_MINUTES', 20))
  const half = m.clock_half || 1
  const isRunning = status === 'running'
  const halfLabel = half === 2 ? 'ครึ่งหลัง' : 'ครึ่งแรก'
  const label = status === 'paused' ? `หยุดเวลา · ${halfLabel}` : status === 'half_break' ? 'พักครึ่ง' : status === 'ended' ? 'หมดเวลา' : `กำลังแข่ง · ${halfLabel}`
  const size = opts.compact ? '13px' : 'clamp(44px,12vw,64px)'
  return `<span style="display:inline-flex;align-items:center;justify-content:center;gap:${opts.compact ? '6px' : '2px'};${opts.compact ? '' : 'width:100%;box-sizing:border-box;flex-direction:column;padding:10px 14px;background:#111827;border-radius:14px;'}">
    <span class="az-clock-live" data-clock-status="${status}" data-clock-half="${half}" data-clock-started-at="${m.clock_started_at || ''}" data-clock-elapsed-before="${m.clock_elapsed_before || 0}" data-clock-half-started-elapsed="${m.clock_half_started_elapsed || 0}" data-clock-half-minutes="${halfMin}" style="font-variant-numeric:tabular-nums;font-weight:900;font-size:${size};letter-spacing:${opts.compact ? '0' : '1.5px'};line-height:1;color:${opts.compact ? '#111827' : '#fff'}">--:--</span>
    <span style="font-size:${opts.compact ? '10px' : '12px'};font-weight:800;color:${isRunning ? '#22c55e' : status === 'paused' ? '#f59e0b' : (opts.compact ? '#6b7280' : '#9ca3af')}">${label}</span>
  </span>`
}
// อัปเดตตัวเลขนาฬิกาทุกวินาทีแบบ DOM ตรงๆ ไม่เรียก draw() ใหม่ — self-healing เพราะ query DOM สดทุกครั้ง ถ้า draw() แทนที่ element ไปแล้วรอบถัดไปก็จะเจอตัวใหม่เอง
function _azTickClocks() {
  document.querySelectorAll('.az-clock-live').forEach(el => {
    const status = el.dataset.clockStatus
    const startedAt = el.dataset.clockStartedAt
    const elapsedBefore = Number(el.dataset.clockElapsedBefore || 0)
    const halfStartedElapsed = Number(el.dataset.clockHalfStartedElapsed || 0)
    const halfMin = Number(el.dataset.clockHalfMinutes || 20)
    let sec = elapsedBefore
    if (status === 'running' && startedAt) sec += Math.max(0, Math.floor((Date.now() - new Date(startedAt).getTime()) / 1000))
    const halfLimitSec = halfMin * 60
    // นับเวลาที่ผ่านไป "เฉพาะครึ่งปัจจุบัน" เทียบกับจุดเริ่มครึ่งนี้จริง (ไม่ใช่ลบด้วยนาทีต่อครึ่งคงที่)
    // กันบั๊ก: ถ้าครึ่งแรกทดเวลาเกิน นาฬิกาครึ่งหลังต้องเริ่มนับใหม่เต็มจำนวนนาทีต่อครึ่งเสมอ ไม่ใช่นับต่อจากทดเวลาครึ่งแรก
    const elapsedInHalf = sec - halfStartedElapsed
    const remain = halfLimitSec - elapsedInHalf
    el.textContent = _azFmtClock(remain)
  })
}
if (typeof window !== 'undefined' && !window._azClockTickerStarted) {
  window._azClockTickerStarted = true
  setInterval(_azTickClocks, 1000)
  const styleEl = document.createElement('style')
  styleEl.textContent = '@keyframes azLivePulse{0%,100%{opacity:1}50%{opacity:.25}}'
  document.head.appendChild(styleEl)
}
// ปุ่มควบคุมนาฬิกา (เฉพาะแอดมิน/สตาฟผู้บันทึกผล) — ระหว่างแต่ละครึ่งหยุด/เล่นต่อได้ตามสัญญาณกรรมการ
function matchClockControls(level, code, m) {
  const status = m?.clock_status || 'not_started'
  const half = m?.clock_half || 1
  const primaryStyle = 'width:100%;padding:14px;border:none;border-radius:11px;color:#fff;font-weight:900;font-size:15px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.18)'
  const secondaryStyle = 'width:100%;padding:8px;border:1px solid #64748b;border-radius:9px;background:transparent;color:#cbd5e1;font-weight:700;font-size:11.5px;cursor:pointer'
  if (status === 'not_started') return `<button data-act="startMatchClock" data-level="${level}" data-code="${code}" style="${primaryStyle};background:#16a34a">▶️ เริ่มการแข่งขัน</button>`
  if (status === 'running' || status === 'paused') {
    const toggleAction = status === 'running' ? 'pauseMatchClock' : 'resumeMatchClock'
    const toggleLabel = status === 'running' ? '⏸ หยุดเวลา' : '▶️ เล่นต่อ'
    const toggleColor = status === 'running' ? '#f59e0b' : '#16a34a'
    const endAction = half === 1 ? 'endHalfClock' : 'endMatchClock'
    const endLabel = half === 1 ? 'จบครึ่งแรก' : 'จบการแข่งขัน'
    return `<div style="width:100%;display:flex;flex-direction:column;gap:7px"><button data-act="${toggleAction}" data-level="${level}" data-code="${code}" style="${primaryStyle};background:${toggleColor}">${toggleLabel}</button><button data-act="${endAction}" data-level="${level}" data-code="${code}" style="${secondaryStyle}">⏹ ${endLabel}</button></div>`
  }
  if (status === 'half_break') return `<button data-act="startSecondHalfClock" data-level="${level}" data-code="${code}" style="${primaryStyle};background:#16a34a">▶️ เริ่มครึ่งหลัง</button>`
  return `<div style="width:100%;text-align:center;font-size:12px;font-weight:700;color:#94a3b8;padding:9px">หมดเวลาการแข่งขันแล้ว</div>`
}

// ---------------- คิวออฟไลน์สำหรับบันทึกผลการแข่งขัน (กันสัญญาณเน็ตขาดตอนแข่งสด) ----------------
// แพทเทิร์นเดียวกับ prayer_scan_queue ใน js/student-views.js: เขียนลง local state ทันทีเสมอ (ไม่เช็คว่าออนไลน์ก่อน)
// แล้วค่อยพยายาม sync ขึ้น server แยกเป็นระยะ ถ้าพลาด (เน็ตหลุด) ก็ค้างคิวไว้ retry ใหม่เรื่อยๆ โดยรักษาลำดับเดิม
const AZ_QUEUE_KEY = 'az_offline_queue'
function azQueueGet() {
  try { return JSON.parse(localStorage.getItem(AZ_QUEUE_KEY) || '[]') } catch { return [] }
}
function azQueueSet(q) { localStorage.setItem(AZ_QUEUE_KEY, JSON.stringify(q)) }
function azMakeLocalId() { return 'local_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9) }

// เพิ่ม/แทนที่การอัปเดตนาฬิกาของนัดหนึ่งๆ ในคิว — ยุบรวมกับรายการที่ยังไม่ sync ของนัดเดียวกัน เก็บแค่ค่าล่าสุดพอ
function azQueueClockUpdate(level, code, fields) {
  const m = matchByCode(level, code)
  if (m) Object.assign(m, fields)
  const payload = {
    level,
    match_code: code,
    clock_status: m?.clock_status || fields.clock_status || 'not_started',
    clock_half: m?.clock_half ?? fields.clock_half ?? null,
    clock_started_at: m?.clock_started_at ?? fields.clock_started_at ?? null,
    clock_elapsed_before: m?.clock_elapsed_before ?? fields.clock_elapsed_before ?? 0,
    clock_half_started_elapsed: m?.clock_half_started_elapsed ?? fields.clock_half_started_elapsed ?? 0,
  }
  let q = azQueueGet().filter(item => !(item.type === 'clockUpdate' && item.payload.level === level && item.payload.match_code === code))
  q.push({ localId: azMakeLocalId(), type: 'clockUpdate', payload })
  azQueueSet(q)
  azTriggerBackgroundSync()
}

async function azProcessQueueItem(item) {
  if (item.type === 'insertEvent') {
    const { data, error } = await SB.from('azfutsal_match_events').insert(item.payload).select().single()
    if (error) throw error
    const idx = S.matchEvents.findIndex(e => e.id === item.localEventId)
    if (idx !== -1) S.matchEvents[idx] = data
  } else if (item.type === 'deleteEvent') {
    const { error } = await SB.from('azfutsal_match_events').delete().eq('id', item.payload.id)
    if (error) throw error
  } else if (item.type === 'togglePenalty') {
    const { error } = await SB.from('azfutsal_match_events').update({ is_penalty: item.payload.is_penalty }).eq('id', item.payload.id)
    if (error) throw error
  } else if (item.type === 'saveMatch' || item.type === 'clockUpdate') {
    const { error } = await SB.from('azfutsal_matches').upsert(item.payload, { onConflict: 'level,match_code' })
    if (error) throw error
  }
}

async function azTriggerBackgroundSync() {
  if (S._azSyncing) return
  let queue = azQueueGet()
  if (!queue.length) return
  S._azSyncing = true
  draw()
  let processed = 0
  for (const item of queue) {
    try {
      await azProcessQueueItem(item)
      processed++
    } catch {
      break // เจอปัญหา (เน็ตหลุด ฯลฯ) หยุดตรงนี้ เก็บที่เหลือไว้ retry รอบหน้า รักษาลำดับเดิม
    }
  }
  S._azSyncing = false
  if (processed > 0) {
    queue = queue.slice(processed)
    azQueueSet(queue)
    if (queue.length === 0) {
      azToast('✅ ซิงก์ข้อมูลออฟไลน์ครบแล้ว')
      await refresh()
      return
    }
  }
  draw()
}
if (typeof window !== 'undefined' && !window._azSyncStarted) {
  window._azSyncStarted = true
  setInterval(azTriggerBackgroundSync, 6000)
  window.addEventListener('online', azTriggerBackgroundSync)
}
// แสดงสถานะคิวออฟไลน์แบบ inline ในหน้าบันทึกผล อ่านค่าคิวสดตอน render ทุกครั้ง (draw() ทั้งหน้าอยู่แล้วเมื่อคิวเปลี่ยน ไม่ต้อง patch DOM แยก)
function azSyncBadge() {
  const n = azQueueGet().length
  if (S._azSyncing) return `<span style="display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:700;color:#d97706">🔄 กำลังซิงก์...</span>`
  if (n > 0) return `<span style="display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:700;color:#d97706">📡 ค้างซิงก์ ${n} รายการ (ออฟไลน์)</span>`
  return ''
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
      return { name: p.students?.full_name || '', team: teamName(p.team_id), goals, studentId: p.student_id, photoUrl: playerPhotoUrl(p) }
    })
    .filter(Boolean)
    .sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name, 'th'))
    .slice(0, 20)
}

// ผู้เล่นที่ได้ใบเหลือง/ใบแดงมากที่สุดของรุ่นหนึ่งๆ (เรียงตามใบแดงก่อน แล้วค่อยใบเหลือง)
function computeTopCards(level) {
  const counts = new Map()
  S.matchEvents.filter(e => (e.event_type === 'yellow' || e.event_type === 'red') && e.level === level).forEach(e => {
    if (!counts.has(e.player_id)) counts.set(e.player_id, { yellow: 0, red: 0 })
    counts.get(e.player_id)[e.event_type]++
  })
  return Array.from(counts.entries())
    .map(([playerId, c]) => {
      const p = S.players.find(pl => pl.id === playerId)
      if (!p) return null
      return { name: p.students?.full_name || '', team: teamName(p.team_id), yellow: c.yellow, red: c.red, photoUrl: playerPhotoUrl(p) }
    })
    .filter(Boolean)
    .sort((a, b) => b.red - a.red || b.yellow - a.yellow || a.name.localeCompare(b.name, 'th'))
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
function applyAzTheme() {
  if (!ROOT) return
  ROOT.dataset.theme = S.theme
  document.documentElement.style.colorScheme = S.theme
  const themeMeta = document.querySelector('meta[name="theme-color"]')
  if (themeMeta) themeMeta.content = S.theme === 'dark' ? '#0f172a' : '#ec4899'
}

export async function renderAzfutsal(root, supabaseClient) {
  ROOT = root
  SB = supabaseClient
  applyAzTheme()
  root.innerHTML = `<div style="position:fixed;inset:0;background:#111827;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:13px">กำลังโหลด...</div>`
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
  applyAzTheme()
  applyThemeColors()
  ROOT.innerHTML = `
  <div class="az-futsal-stage" style="position:fixed;inset:0;background:#111827;display:flex;align-items:center;justify-content:center;overflow:hidden">
    <div class="az-futsal-app" style="width:100%;max-width:440px;height:100%;max-height:1000px;background:#fff;position:relative;box-shadow:0 24px 64px rgba(0,0,0,.5);border-radius:20px;overflow:hidden;display:flex;flex-direction:column;color:#111827">
      ${header()}
      <main class="az-futsal-main" style="flex:1;min-height:0;overflow-y:auto;padding:16px 20px 24px;display:flex;flex-direction:column">
        ${s.tab === 'teamStatus' ? teamStatusView() : ''}
        ${s.tab === 'schedule' ? scheduleView() : ''}
        ${s.tab === 'teams' ? statsView() : ''}
        ${s.tab === 'summary' ? summaryView() : ''}
        ${s.tab === 'myteam' ? myTeamView() : ''}
        ${s.tab === 'admin' && s.identity.isAdmin ? adminView() : ''}
        ${s.tab === 'staff' && !s.identity.isAdmin && (s.identity.scopes || []).length ? staffScopedView() : ''}
      </main>
      ${bottomNav()}
      ${s.certModalOpen ? certModal() : ''}
      ${s.editMatch ? matchEditorModal() : ''}
      ${s.adminLoginOpen ? adminLoginModal() : ''}
      ${s.confirmRegOpen ? confirmRegistrationModal() : ''}
      ${s.viewProofOpen ? viewProofModal() : ''}
      ${s.rejectPaymentId ? rejectReasonModal() : ''}
      ${s.liveDraw ? liveDrawView() : ''}
      ${s.manualPoolAssign ? manualPoolAssignModal() : ''}
      ${s.pendingConfirm ? confirmActionModal() : ''}
      ${s.staffScopeEdit ? staffScopeModal() : ''}
    </div>
  </div>`
  if (S.identity.isAdmin && S.adminSection === 'staff') loadStaffList()
}

function header() {
  const s = S
  const eventName = cfg('EVENT_NAME', 'AZFUTSALCUP2025')
  const date = cfg('INFO_DATE', '-'), venue = cfg('INFO_VENUE', '-')
  return `
  <header class="az-theme-header" style="flex-shrink:0;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border-bottom:1px solid #ececec;padding:16px 20px 14px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
      <div>
        <h1 style="margin:0;font-size:20px;font-weight:800;letter-spacing:-.02em;color:#db2777">${esc(eventName)}</h1>
        <p style="margin:4px 0 0;font-size:12px;color:#6b7280">${esc(date)} · ${esc(venue)}</p>
      </div>
      <div style="display:flex;gap:8px">
        <button data-act="toggleTheme" style="width:38px;height:38px;border-radius:12px;border:1px solid ${s.theme === 'dark' ? '#475569' : '#e5e7eb'};display:flex;align-items:center;justify-content:center;cursor:pointer;background:${s.theme === 'dark' ? '#1e293b' : '#fff'};color:${s.theme === 'dark' ? '#fbbf24' : '#475569'};font-size:18px" aria-label="${s.theme === 'dark' ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}" title="${s.theme === 'dark' ? 'โหมดมืด · กดเพื่อเปลี่ยนเป็นโหมดสว่าง' : 'โหมดสว่าง · กดเพื่อเปลี่ยนเป็นโหมดมืด'}">${s.theme === 'dark' ? '☀️' : '🌙'}</button>
        <button data-act="account" style="width:38px;height:38px;border-radius:12px;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;background:#f3f4f6;color:#9ca3af" aria-label="บัญชี">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        </button>
        <button data-act="admin-gear" style="width:38px;height:38px;border-radius:12px;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;background:${s.identity.isAdmin || (s.identity.scopes || []).length ? '#db2777' : '#f3f4f6'};color:${s.identity.isAdmin || (s.identity.scopes || []).length ? '#fff' : '#9ca3af'}" aria-label="แอดมิน">
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
    <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
      <div style="display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        ${ADMIN_GROUPS.map(g => `<button data-act="adminGroup" data-v="${g.id}" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;background:none;border:none;padding:6px 2px;cursor:pointer;color:${activeGroup === g.id ? '#db2777' : '#9ca3af'}"><span style="font-size:19px;line-height:1">${g.icon}</span><span style="font-size:10px;font-weight:${activeGroup === g.id ? 800 : 600}">${g.label}</span></button>`).join('')}
      </div>
    </nav>`
  }
  if (s.tab === 'staff') {
    return `
    <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
      <div style="padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        <button data-act="adminSignOut" style="width:100%;padding:10px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">ออกจากระบบ</button>
      </div>
    </nav>`
  }
  if (s.tab === 'myteam') {
    const hasTeam = s.identity.isAdmin
      ? !!s.adminManageTeamId
      : !!(s.identity.student && (s.teams.find(t => t.captain_student_id === s.identity.student.id) || (s.teamCodeLookupResult && typeof s.teamCodeLookupResult === 'object')))
    if (hasTeam) {
      const myTeamItem = (v, label, icon) => `
        <button data-act="myTeamTab" data-v="${v}" style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;padding:6px 2px;cursor:pointer;color:${s.myTeamTab === v ? '#db2777' : '#9ca3af'}">
          ${icon}<span style="font-size:10.5px;font-weight:${s.myTeamTab === v ? 800 : 600}">${label}</span>
        </button>`
      return `
      <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
        <div style="display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
          ${myTeamItem('roster', 'ทีม', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>')}
          ${myTeamItem('matches', 'ผลการแข่งขัน', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>')}
          ${myTeamItem('finance', 'การเงิน', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>')}
        </div>
      </nav>`
    }
    return `
    <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
      <div style="padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
        <button data-act="tab" data-tab="schedule" style="width:100%;padding:10px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">← กลับหน้าหลัก</button>
      </div>
    </nav>`
  }
  return `
  <nav class="az-theme-nav" style="flex-shrink:0;background:#fff;border-top:1px solid #ececec">
    <div style="display:flex;padding:8px 8px calc(8px + env(safe-area-inset-bottom))">
      ${item('teamStatus', 'สถานะทีม', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>')}
      ${item('teams', 'สถิติทีม', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>')}
      ${item('schedule', 'ตาราง', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>')}
      ${item('summary', 'สรุปผล', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>')}
    </div>
  </nav>`
}

// ---------------- schedule ----------------
function teamMatchRows(team) {
  return BRACKET[team.level]
    .map(def => {
      const r = resolveMatch(team.level, def.code)
      return { level: team.level, code: def.code, round: def.round, teamA: r.teamA, teamB: r.teamB, teamAId: r.teamAId, teamBId: r.teamBId, m: r.match }
    })
    .filter(row => row.teamAId === team.id || row.teamBId === team.id)
}

// สรุปผู้ทำประตู/ใบเหลือง-แดงรายคนของทีมหนึ่งๆ จากเหตุการณ์จริงที่บันทึกไว้ (matchEvents) — ไม่ต้องนับเองจากรายนัด
function teamPlayerEventSummary(team) {
  const goals = new Map() // player_id -> count
  const cards = new Map() // player_id -> { yellow: [match_code...], red: [match_code...] }
  S.matchEvents.filter(e => e.level === team.level && e.team_id === team.id).forEach(e => {
    if (e.event_type === 'goal') {
      goals.set(e.player_id, (goals.get(e.player_id) || 0) + 1)
    } else if (e.event_type === 'yellow' || e.event_type === 'red') {
      if (!cards.has(e.player_id)) cards.set(e.player_id, { yellow: [], red: [] })
      cards.get(e.player_id)[e.event_type].push(e.match_code)
    }
  })
  const playerName = id => S.players.find(pl => pl.id === id)?.students?.full_name || ''
  const goalList = Array.from(goals.entries())
    .map(([pid, n]) => ({ name: playerName(pid), goals: n }))
    .sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name, 'th'))
  const cardList = Array.from(cards.entries())
    .map(([pid, c]) => ({ name: playerName(pid), yellow: c.yellow, red: c.red }))
    .sort((a, b) => (b.yellow.length + b.red.length) - (a.yellow.length + a.red.length) || a.name.localeCompare(b.name, 'th'))
  return { goalList, cardList }
}

// รายละเอียดเหตุการณ์รายคนแบบเจาะลึก (รอบไหน เจอใคร นาทีที่เท่าไหร่) ใช้กับการ์ดขยายในหน้ารายชื่อนักกีฬา
function teamPlayerEventDetails(team) {
  const matches = teamMatchRows(team)
  const matchInfo = new Map(matches.map((m, i) => [m.code, { ...m, order: i }]))
  const byPlayer = new Map()
  S.matchEvents.filter(e => e.level === team.level && e.team_id === team.id).forEach(e => {
    if (!byPlayer.has(e.player_id)) byPlayer.set(e.player_id, { goals: 0, yellow: 0, red: 0, events: [] })
    const entry = byPlayer.get(e.player_id)
    if (e.event_type === 'goal') entry.goals++
    else if (e.event_type === 'yellow') entry.yellow++
    else if (e.event_type === 'red') entry.red++
    const mi = matchInfo.get(e.match_code)
    const opponent = mi ? (mi.teamAId === team.id ? mi.teamB : mi.teamA) : ''
    entry.events.push({ type: e.event_type, round: mi?.round || '', opponent, code: e.match_code, order: mi?.order ?? 999, minute: e.minute, isPenalty: !!e.is_penalty })
  })
  byPlayer.forEach(entry => entry.events.sort((a, b) => a.order - b.order || (a.minute ?? 0) - (b.minute ?? 0)))
  return byPlayer
}

// "ปั๊มดิจิทัล" แสดงว่ารายงานตัวแล้ว พร้อมชื่อผู้รับรายงานตัวและเวลา (checked_in_by/checked_in_at จาก azfutsal_checkins)
function checkinStamp(c) {
  const name = c.checked_in_by ? (S.staffNames[c.checked_in_by] || 'เจ้าหน้าที่') : ''
  const time = c.checked_in_at ? new Date(c.checked_in_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) : ''
  return `<span style="display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:800;color:#16a34a;border:1.5px dashed #16a34a;border-radius:6px;padding:2px 7px;transform:rotate(-2deg);white-space:nowrap">✅ รายงานตัวแล้ว${name ? ` · รับโดย ${esc(name)}` : ''}${time ? ` · ${time}` : ''}</span>`
}

// สรุปสถานะรายงานตัวของทีมหนึ่งๆ สำหรับนัดหนึ่งๆ (เฉพาะฝั่งทีมตัวเอง ไม่ปนกับทีมคู่แข่ง)
function teamCheckinLine(team, level, code) {
  const roster = S.players.filter(p => p.team_id === team.id)
  if (!roster.length) return ''
  const checkedForMatch = S.checkins.filter(c => c.level === level && c.match_code === code && c.team_id === team.id)
  if (!checkedForMatch.length) return `<div style="margin-top:6px;font-size:11px;color:#9ca3af">ยังไม่มีใครในทีมรายงานตัวสำหรับนัดนี้</div>`
  const checkedIds = new Set(checkedForMatch.map(c => c.player_id))
  const names = roster.filter(p => checkedIds.has(p.id)).map(p => p.students?.full_name || '').filter(Boolean)
  const latest = [...checkedForMatch].sort((a, b) => new Date(b.checked_in_at) - new Date(a.checked_in_at))[0]
  return `<div style="margin-top:6px">${checkinStamp(latest)}<div style="margin-top:4px;font-size:11px;color:#6b7280">รายงานตัวแล้ว: ${esc(names.join(', '))} (${names.length}/${roster.length} คน)</div></div>`
}

// ---------------- จอแสดงผลรายงานตัวสด (สำหรับเปิดจอที่สอง โชว์นักกีฬาว่าสแกนสำเร็จ) ----------------
function renderCheckinLiveBody(level, code) {
  const r = resolveMatch(level, code)
  const teamA = r.teamAId ? S.teams.find(tm => tm.id === r.teamAId) : null
  const teamB = r.teamBId ? S.teams.find(tm => tm.id === r.teamBId) : null
  const side = (team, teamId) => {
    if (!team) return `<div style="flex:1;text-align:center;color:#9ca3af;padding:60px 0;font-size:15px">รอผลรอบก่อน</div>`
    const roster = S.players.filter(p => p.team_id === teamId)
    const checkedIds = new Set(S.checkins.filter(c => c.level === level && c.match_code === code && c.team_id === teamId).map(c => c.player_id))
    const doneCount = roster.filter(p => checkedIds.has(p.id)).length
    return `
    <div style="flex:1;min-width:0">
      <div style="text-align:center;font-size:22px;font-weight:800;margin-bottom:4px">${esc(team.name)}</div>
      <div style="text-align:center;font-size:14px;color:#6b7280;margin-bottom:16px;font-weight:700">รายงานตัวแล้ว ${doneCount}/${roster.length} คน</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${roster.map(p => {
          const isChecked = checkedIds.has(p.id)
          return `
          <div style="display:flex;align-items:center;gap:14px;padding:10px 14px;border-radius:14px;background:${isChecked ? '#dcfce7' : '#f9fafb'};border:2px solid ${isChecked ? '#16a34a' : '#e5e7eb'}">
            <div style="width:52px;height:66px;border-radius:10px;overflow:hidden;background:#e5e7eb;flex-shrink:0;border:1px solid #d1d5db">
              ${playerPhotoUrl(p) ? `<img src="${esc(playerPhotoUrl(p))}" style="width:100%;height:100%;object-fit:cover"/>` : ''}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:17px;font-weight:800;color:#111827">${esc(p.students?.full_name || '')}</div>
              <div style="font-size:13px;color:#6b7280">เบอร์เสื้อ ${p.jersey_number ?? '-'}</div>
            </div>
            ${isChecked ? `<div style="flex-shrink:0;font-size:28px">✅</div>` : `<div style="flex-shrink:0;font-size:13px;color:#9ca3af;font-weight:700">รอสแกน</div>`}
          </div>`
        }).join('')}
      </div>
    </div>`
  }
  return `
  <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:24px">
    ${levelBadge(level)}
    <span style="font-size:18px;font-weight:800">${esc(r.round)} · ${esc(code)}</span>
  </div>
  <div style="display:flex;gap:32px;max-width:1100px;margin:0 auto">
    ${side(teamA, r.teamAId)}
    <div style="width:2px;background:#e5e7eb"></div>
    ${side(teamB, r.teamBId)}
  </div>`
}
function openCheckinLiveDisplay(level, code) {
  document.getElementById('az-live-display-overlay')?.remove()
  const overlay = document.createElement('div')
  overlay.id = 'az-live-display-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#fff;overflow-y:auto;padding:24px;font-family:Sarabun,Arial,sans-serif'
  overlay.innerHTML = `
    <button id="az-live-display-close" style="position:fixed;top:16px;right:16px;z-index:10;padding:10px 16px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">✕ ปิด</button>
    <div id="az-live-display-body" style="padding-top:8px"></div>`
  document.body.appendChild(overlay)
  const renderBody = () => { const el = document.getElementById('az-live-display-body'); if (el) el.innerHTML = renderCheckinLiveBody(level, code) }
  renderBody()
  const intervalId = setInterval(async () => { await refresh(); renderBody() }, 4000)
  overlay.querySelector('#az-live-display-close').onclick = () => { clearInterval(intervalId); overlay.remove() }
}

// ---------------- แบบฟอร์มพิมพ์สำรอง (ออฟไลน์) ----------------
// mirror pattern จาก js/sports-portals.js:printTeamList — สร้าง overlay เต็มจอ z-สูงสุด แล้วสั่ง window.print()
// ใช้ id/คลาสคนละชื่อ (az-print-*) กันชนกับโมดูลอื่นถ้าโหลดอยู่หน้าเดียวกัน
const PRINT_CSS = `
@media print{body>*:not(#az-print-area){display:none!important}.print-actions{display:none!important}#az-print-area{position:static!important;padding:0!important}}
#az-print-area{position:fixed;inset:0;z-index:9999;background:#fff;color:#111827;overflow:auto;padding:24px;font-family:Sarabun,Arial,sans-serif}
.print-actions{position:sticky;top:0;background:#fff;padding-bottom:12px;text-align:right}
.print-actions button{padding:8px 14px;border-radius:10px;border:1px solid #d1d5db;background:#fff;cursor:pointer;font-size:13px;margin-left:8px}
#az-print-confirm{background:#111827;color:#fff;border:none}
.print-title{text-align:center;margin:2px 0 8px}
.print-title h2{margin:0;font-size:18px}
.print-title p{margin:2px 0 0;font-size:12.5px}
.print-table{width:100%;border-collapse:collapse;margin-bottom:6px}
.print-table th,.print-table td{border:1px solid #111827;padding:5px 6px;font-size:11.5px;text-align:center}
.print-table th{background:#f3f4f6}
.print-grid{display:grid;gap:16px}
.print-photo{width:32px;height:40px;border:1px solid #9ca3af;border-radius:8px;overflow:hidden;background:#e5e7eb;display:flex;align-items:center;justify-content:center;margin:0 auto;flex:none;box-shadow:0 1px 3px rgba(0,0,0,.25)}
.print-photo img{width:100%;height:100%;object-fit:cover}
@media print{body{width:210mm}}
.print-table-checkin th,.print-table-checkin td{padding:5px 8px;font-size:11.5px}
.print-table-checkin td.print-stamp-cell{min-width:90px}
.print-photo-lg{width:36px;height:46px}
`
function openPrintArea(innerHtml, opts = {}) {
  document.getElementById('az-print-area')?.remove()
  const area = document.createElement('div')
  area.id = 'az-print-area'
  const landscapeCss = opts.landscape ? `@media print{@page{size:A4 landscape}body{width:297mm}}` : ''
  area.innerHTML = `<style>${PRINT_CSS}${landscapeCss}</style>
    <div class="print-actions"><button id="az-print-confirm">🖨️ สั่งพิมพ์ / บันทึก PDF</button><button id="az-print-close">ปิด</button></div>
    ${innerHtml}`
  document.body.appendChild(area)
  area.querySelector('#az-print-confirm').onclick = () => window.print()
  area.querySelector('#az-print-close').onclick = () => area.remove()
}

function printMatchResultForm(level, code) {
  const t = T[level]
  const r = resolveMatch(level, code)
  const def = BRACKET[level].find(b => b.code === code) || {}
  const rosterTable = teamId => {
    const roster = S.players.filter(p => p.team_id === teamId)
    if (!roster.length) return `<div style="font-size:12px;color:#6b7280">ยังไม่มีรายชื่อนักกีฬา</div>`
    return `<table class="print-table" style="table-layout:fixed">
      <colgroup><col style="width:18px"><col style="width:170px"><col style="width:130px"><col style="width:50px"><col style="width:50px"></colgroup>
      <thead><tr><th>#</th><th style="text-align:left">นักกีฬา</th><th>ประตู<br><span style="font-weight:400;font-size:8px">(นาที เช่น 5, 12P)</span></th><th>🟨<br><span style="font-weight:400;font-size:8px">(นาที)</span></th><th>🟥<br><span style="font-weight:400;font-size:8px">(นาที)</span></th></tr></thead><tbody>
      ${roster.map((p, i) => {
        const url = playerPhotoUrl(p)
        return `<tr><td>${i + 1}</td><td style="text-align:left;vertical-align:middle"><div style="display:flex;align-items:center;gap:6px"><div class="print-photo">${url ? `<img src="${esc(url)}">` : ''}</div><div style="min-width:0;flex:1;overflow:hidden"><div style="font-weight:700;font-size:11px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(p.students?.full_name || '')}</div><div style="font-size:9px;color:#374151;white-space:nowrap">เบอร์ ${p.jersey_number ?? '-'}</div></div></div></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>`
      }).join('')}
    </tbody></table>`
  }
  openPrintArea(`
    <div class="print-title">
      <h2>${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2026'))} · แบบฟอร์มบันทึกผลการแข่งขัน (สำรองออฟไลน์)</h2>
      <div style="display:inline-block;margin-top:4px;padding:3px 18px;border:2px solid #111827;border-radius:8px;font-size:19px;font-weight:800">นัด ${esc(code)}</div>
      <p style="margin-top:5px">${t.label} · รอบ ${esc(def.round || '')}</p>
    </div>
    <div style="display:flex;gap:24px;margin-bottom:14px;font-size:13px">
      <div>ทีม A: <b>${esc(r.teamA || '.......................')}</b></div>
      <div>ทีม B: <b>${esc(r.teamB || '.......................')}</b></div>
    </div>
    <div style="display:flex;gap:24px;margin-bottom:16px;font-size:13px">
      <div>เวลารายงานตัว: ______________</div>
      <div>เวลาแข่งจริง: ______________</div>
      <div>สกอร์สุดท้าย: _______ − _______</div>
      <div>ผลจุดโทษ (ถ้ามี): _______ − _______</div>
    </div>
    <div class="print-grid" style="grid-template-columns:1fr 1fr">
      <div><h3>ทีม A: ${esc(r.teamA || '')}</h3>${rosterTable(r.teamAId)}</div>
      <div><h3>ทีม B: ${esc(r.teamB || '')}</h3>${rosterTable(r.teamBId)}</div>
    </div>
    <p style="margin-top:8px;font-size:11px;color:#6b7280">*เขียนนาทีที่ทำประตู/ได้ใบเหลือง-แดงลงในช่องเลย (เขียน "P" ต่อท้ายนาทีถ้าประตูนั้นเป็นจุดโทษ เช่น "12P") จะได้กรอกกลับเข้าระบบภายหลังตรงกับที่เกิดขึ้นจริง ไม่ต้องเดา · รหัสนัด "${esc(code)}" ด้านบนใช้หาแมตช์ในระบบตอนกรอกกลับได้เร็วขึ้น</p>
  `)
}

// จำนวนนัดสูงสุดที่ทีมหนึ่งจะเล่นได้ถ้าเข้ารอบชิงชนะเลิศ (นับรวมเส้นทางแก้ตัว/เพลย์ออฟที่ยาวที่สุด)
// ม.ต้น: รอบแรก+แก้ตัว+ก่อนรองฯ+รองฯ+ชิง = 5 · ม.ปลาย: รอบแรก+แก้ตัว+เพลย์ออฟ+ก่อนรองฯ+รองฯ+ชิง = 6
function teamMaxPossibleMatches(level) {
  return level === 'HS' ? 6 : 5
}

// ตราปั๊มดิจิทัลจำลอง (สำหรับเอกสารพิมพ์) — สุ่มสีหมึก/มุมเอียง/ตำแหน่งเหลื่อมทุกดวง ให้ดูเหมือนปั๊มจริงที่ไม่มีทางเหมือนกันเป๊ะสองครั้ง
function printCheckinInkStamp(ck) {
  const color = Math.random() < 0.5 ? '#1d4ed8' : '#dc2626'
  const angle = Math.round(Math.random() * 70 - 25) // สุ่มมุมเอียง -25 ถึง 45 องศา
  const offX = Math.round(Math.random() * 10 - 5)
  const offY = Math.round(Math.random() * 6 - 3)
  const staffName = ck?.checked_in_by ? (S.staffNames[ck.checked_in_by] || 'เจ้าหน้าที่') : ''
  const time = ck?.checked_in_at ? new Date(ck.checked_in_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }) : ''
  return `<div style="display:inline-block;border:2px solid ${color};color:${color};border-radius:8px;padding:3px 6px;font-size:8.5px;font-weight:800;line-height:1.35;transform:rotate(${angle}deg) translate(${offX}px,${offY}px);opacity:.82;white-space:nowrap;text-align:center">✓ รายงานตัว${staffName ? `<br><span style="font-size:7.5px;font-weight:700">${esc(staffName)}</span>` : ''}${time ? `<br><span style="font-size:7.5px;font-weight:600">${esc(time)} น.</span>` : ''}</div>`
}

function printCheckinForm(team) {
  const t = T[team.level]
  const roster = S.players.filter(p => p.team_id === team.id)
  const n = teamMaxPossibleMatches(team.level)
  const matches = teamMatchRows(team)
  const cols = Array.from({ length: n }, (_, i) => matches[i] ? { code: matches[i].code, round: matches[i].round } : null)
  openPrintArea(`
    <div class="print-title"><h2>${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2026'))} · แบบฟอร์มรายงานตัวนักกีฬา</h2>
      <p>${t.label} · ${esc(team.name)} · รหัสทีม ${esc(team.team_code || '-')}</p></div>
    <table class="print-table print-table-checkin" style="table-layout:fixed">
      <colgroup>
        <col style="width:26px">
        <col style="width:242px">
        ${cols.map(() => `<col>`).join('')}
        <col style="width:100px">
      </colgroup>
      <thead><tr><th>#</th><th style="text-align:left">นักกีฬา</th>${cols.map(c => `<th>${c ? esc(c.round) : 'รอบถัดไป'}<br><span style="font-weight:400;font-size:9px">${c ? esc(c.code) : '(รอผลรอบก่อน)'}</span></th>`).join('')}<th>หมายเหตุ</th></tr></thead>
      <tbody>
        ${roster.length ? roster.map((p, i) => {
          const url = playerPhotoUrl(p)
          return `<tr>
            <td>${i + 1}</td>
            <td style="text-align:left;vertical-align:middle">
              <div style="display:flex;align-items:center;gap:8px">
                <div class="print-photo print-photo-lg">${url ? `<img src="${esc(url)}">` : ''}</div>
                <div style="min-width:0;flex:1;overflow:hidden">
                  <div style="font-weight:700;font-size:12.5px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(p.students?.full_name || '')}</div>
                  <div style="font-size:10px;color:#374151;margin-top:1px;white-space:nowrap">เบอร์เสื้อ ${p.jersey_number ?? '-'}</div>
                </div>
              </div>
            </td>
            ${cols.map(c => {
              const ck = c && S.checkins.find(ck => ck.level === team.level && ck.match_code === c.code && ck.player_id === p.id)
              return `<td class="print-stamp-cell">${ck ? printCheckinInkStamp(ck) : '&nbsp;'}</td>`
            }).join('')}
            <td>&nbsp;</td>
          </tr>`
        }).join('') : `<tr><td colspan="${3 + cols.length}">ยังไม่มีรายชื่อนักกีฬา</td></tr>`}
      </tbody>
    </table>
    <p style="margin-top:4px;font-size:10px;color:#6b7280">*ประทับตรา/เซ็นชื่อในช่องนัดที่ตรงกับที่นักกีฬาคนนั้นมารายงานตัวจริง จำนวนคอลัมน์ (${n} นัด) คือจำนวนนัดสูงสุดที่ทีมนี้จะได้เล่นหากเข้าถึงรอบชิงชนะเลิศ · แต่ละทีมมีสมาชิกสูงสุด 10 คน</p>
  `, { landscape: true })
}

// ---------------- สแกน QR รายงานตัว ----------------
// ใช้ QR ใบเดียวกับเช็คชื่อ/บันทึกคะแนนในระบบหลัก (รูปแบบ SQ:{student_code}:{timestamp} อายุ ±60 วิ หรือ student_code เปล่าๆ)
// mirror โครงสร้างจาก js/score-qr-scanner.js แต่แปลงเป็น inline style ให้ตรงคอนเวนชันของไฟล์นี้
async function _azLoadHtml5Qrcode() {
  if (window.Html5Qrcode) return window.Html5Qrcode
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
    s.onload = () => resolve(window.Html5Qrcode)
    s.onerror = () => reject(new Error('โหลดตัวอ่าน QR Code ไม่สำเร็จ'))
    document.head.appendChild(s)
  })
}
// type: 'success' (โทนสูงครั้งเดียว) | 'duplicate' (โทนกลางสองครั้ง) | 'error' (โทนต่ำยาว) — แยกเสียงให้ต่างกันชัดเจนทั้ง 3 สถานะ
function _azPlayScanBeep(type = 'success') {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const tone = (freq, dur, waveType, startOffset, vol) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain()
      osc.connect(gain); gain.connect(ctx.destination)
      osc.type = waveType
      const t0 = ctx.currentTime + startOffset
      osc.frequency.setValueAtTime(freq, t0)
      gain.gain.setValueAtTime(vol, t0); gain.gain.exponentialRampToValueAtTime(0.01, t0 + dur)
      osc.start(t0); osc.stop(t0 + dur)
    }
    if (type === 'success') {
      tone(880, 0.12, 'sine', 0, 0.08)
    } else if (type === 'duplicate') {
      tone(600, 0.09, 'square', 0, 0.09)
      tone(600, 0.09, 'square', 0.14, 0.09)
    } else {
      tone(150, 0.3, 'sawtooth', 0, 0.12)
    }
  } catch { /* เสียงเป็นแค่ของเสริม ไม่บล็อกการทำงานหลัก */ }
}

function openCheckinScanner(level, code) {
  document.getElementById('az-checkin-overlay')?.remove()
  const r = resolveMatch(level, code)
  if (!r.teamAId || !r.teamBId) { azToast('ต้องระบุทีมทั้งสองฝั่งก่อนสแกนรายงานตัว'); return }
  const rosterA = S.players.filter(p => p.team_id === r.teamAId).map(p => ({ ...p, teamId: r.teamAId }))
  const rosterB = S.players.filter(p => p.team_id === r.teamBId).map(p => ({ ...p, teamId: r.teamBId }))
  const allRoster = [...rosterA, ...rosterB]

  const overlay = document.createElement('div')
  overlay.id = 'az-checkin-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column'
  overlay.innerHTML = `
    <style>
      @keyframes azCiLaser { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .az-ci-laser { animation: azCiLaser 2s ease-in-out infinite; }
      .az-ci-flash-ok { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .az-ci-flash-err { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">📷 สแกน QR รายงานตัว</div>
        <div style="color:#94a3b8;font-size:11.5px;overflow-wrap:break-word">${esc(code)} · ${esc(r.teamA)} vs ${esc(r.teamB)}</div>
      </div>
      <button id="az-ci-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;max-width:420px;margin:0 auto;width:100%">
      <div id="az-ci-camwrap" style="position:relative;width:100%;aspect-ratio:1;background:#000;border-radius:16px;overflow:hidden">
        <div id="az-ci-reader" style="width:100%;height:100%"></div>
        <div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center">
          <div style="position:relative;width:190px;height:190px;border-radius:16px;border:1px solid rgba(255,255,255,.2);box-shadow:0 0 0 9999px rgba(0,0,0,.4);overflow:hidden">
            <div class="az-ci-laser" style="position:absolute;left:0;width:100%;height:2px;background:#38bdf8"></div>
          </div>
        </div>
      </div>
      <div id="az-ci-feedback" style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px;text-align:center;font-size:12px;color:#94a3b8">ยกกล้องส่อง QR ของนักกีฬาเพื่อรายงานตัว</div>
      <div style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span style="font-size:10.5px;color:#94a3b8;font-weight:800;text-transform:uppercase;letter-spacing:.05em">รายงานตัวแล้ว</span>
          <span id="az-ci-count" style="font-size:10.5px;color:#38bdf8;font-weight:800">0 / ${allRoster.length} คน</span>
        </div>
        <div id="az-ci-list" style="display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto"></div>
      </div>
    </div>`
  document.body.appendChild(overlay)

  const checkedIds = new Set(S.checkins.filter(c => c.level === level && c.match_code === code).map(c => c.player_id))
  let html5Qrcode = null, lastCode = null, lastTime = 0

  const renderList = () => {
    const list = overlay.querySelector('#az-ci-list')
    overlay.querySelector('#az-ci-count').textContent = `${checkedIds.size} / ${allRoster.length} คน`
    const done = allRoster.filter(p => checkedIds.has(p.id))
    list.innerHTML = done.length ? done.map(p => `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.06)"><span style="color:#e2e8f0;flex:1;min-width:0;overflow-wrap:break-word">${esc(p.students?.full_name || '')}</span><span style="color:#38bdf8;font-weight:700;flex-shrink:0">${esc(p.teamId === r.teamAId ? r.teamA : r.teamB)}</span><button data-ci-undo="${esc(p.id)}" style="flex-shrink:0;padding:2px 7px;border-radius:7px;border:1px solid rgba(239,68,68,.35);background:rgba(239,68,68,.1);color:#f87171;font-size:10px;font-weight:700;cursor:pointer">✕</button></div>`).join('') : `<div style="color:#64748b;text-align:center;font-size:12px;padding:6px 0">ยังไม่มีใครรายงานตัว</div>`
  }
  renderList()

  async function undoCheckin(playerId) {
    const player = allRoster.find(p => String(p.id) === String(playerId))
    if (!player) return
    const feedback = overlay.querySelector('#az-ci-feedback')
    const { error } = await SB.from('azfutsal_checkins').delete().match({ level, match_code: code, player_id: player.id })
    if (error) { azToast('ยกเลิกไม่สำเร็จ: ' + error.message); return }
    checkedIds.delete(player.id)
    renderList()
    feedback.innerHTML = `<span style="color:#94a3b8">ยกเลิกรายงานตัวของ ${esc(player.students?.full_name || '')} แล้ว</span>`
  }
  overlay.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-ci-undo]')
    if (btn) undoCheckin(btn.dataset.ciUndo)
  })

  async function processScan(decodedText) {
    const camwrap = overlay.querySelector('#az-ci-camwrap')
    const feedback = overlay.querySelector('#az-ci-feedback')
    const flash = ok => { camwrap.classList.add(ok ? 'az-ci-flash-ok' : 'az-ci-flash-err'); setTimeout(() => camwrap.classList.remove(ok ? 'az-ci-flash-ok' : 'az-ci-flash-err'), 500) }

    let studentCode = decodedText
    if (decodedText.startsWith('SQ:')) {
      const [, sc, ts] = decodedText.split(':')
      const diff = Math.floor(Date.now() / 1000) - parseInt(ts, 10)
      if (diff > 60 || diff < -60) {
        _azPlayScanBeep('error'); flash(false)
        feedback.innerHTML = `<span style="color:#f87171">QR Code หมดอายุแล้ว ให้นักกีฬาเปิดหน้าใหม่</span>`
        return
      }
      studentCode = sc
    }

    const player = allRoster.find(p => p.students?.student_code === studentCode)
    if (!player) {
      _azPlayScanBeep('error'); flash(false)
      feedback.innerHTML = `<span style="color:#f87171">ไม่พบนักกีฬาคนนี้ในสองทีมที่แข่งนัดนี้</span>`
      return
    }
    if (checkedIds.has(player.id)) {
      _azPlayScanBeep('duplicate'); flash(false)
      feedback.innerHTML = `<span style="color:#fbbf24">${esc(player.students?.full_name || '')} รายงานตัวไปแล้ว</span>`
      return
    }

    const { error } = await SB.from('azfutsal_checkins').upsert(
      { level, match_code: code, team_id: player.teamId, player_id: player.id, checked_in_by: S.identity.profile?.id || null, checked_in_at: new Date().toISOString() },
      { onConflict: 'level,match_code,player_id' },
    )
    if (error) {
      _azPlayScanBeep('error'); flash(false)
      feedback.innerHTML = `<span style="color:#f87171">บันทึกไม่สำเร็จ: ${esc(error.message)}</span>`
      return
    }
    _azPlayScanBeep('success'); flash(true)
    const teamLabel = player.teamId === r.teamAId ? r.teamA : r.teamB
    const photoUrl = playerPhotoUrl(player)
    const photoHtml = photoUrl
      ? `<img src="${esc(photoUrl)}" style="width:40px;height:52px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,.15);flex-shrink:0"/>`
      : `<div style="width:40px;height:52px;border-radius:8px;background:#1e293b;display:flex;align-items:center;justify-content:center;font-weight:800;color:#64748b;flex-shrink:0">${esc((player.students?.full_name || '?').charAt(0))}</div>`
    feedback.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;text-align:left">
        ${photoHtml}
        <div style="flex:1;min-width:0">
          <div style="color:#4ade80;font-weight:800;font-size:12.5px">✓ รายงานตัวแล้ว</div>
          <div style="color:#e2e8f0;font-size:12.5px;font-weight:700;margin-top:1px;overflow-wrap:break-word">${esc(player.students?.full_name || '')}</div>
          <div style="color:#94a3b8;font-size:11px">${esc(teamLabel)}</div>
        </div>
        <button data-ci-undo="${esc(player.id)}" style="flex-shrink:0;padding:8px 10px;border-radius:9px;border:1px solid rgba(239,68,68,.4);background:rgba(239,68,68,.12);color:#f87171;font-weight:700;font-size:11px;cursor:pointer">✕ ยกเลิก</button>
      </div>`
    checkedIds.add(player.id)
    renderList()
  }

  overlay.querySelector('#az-ci-close').addEventListener('click', async () => {
    if (html5Qrcode) { try { await html5Qrcode.stop() } catch { /* กล้องอาจปิดไปแล้ว ไม่ต้องบล็อกการปิดหน้าต่าง */ } }
    overlay.remove()
    refresh()
  })

  ;(async () => {
    try {
      const Html5Qrcode = await _azLoadHtml5Qrcode()
      html5Qrcode = new Html5Qrcode('az-ci-reader')
      await html5Qrcode.start(
        { facingMode: 'environment' },
        { fps: 25, aspectRatio: 1.0 },
        (decodedText) => {
          if (decodedText === lastCode && Date.now() - lastTime < 2000) return
          lastCode = decodedText; lastTime = Date.now()
          processScan(decodedText)
        },
        () => { /* error ต่อเนื่องระหว่างหากรอบยังไม่เจอ QR — ไม่ต้อง block UI */ },
      )
    } catch (err) {
      azToast('ไม่สามารถเปิดกล้องได้: ' + (err.message || ''))
      overlay.remove()
    }
  })()
}

// ---------------- สตาฟสแกน QR นักกีฬาเพื่อเช็คอินเข้างาน (คนละหน้ากับ "รับรายงานตัว" รายนัด — ไม่ผูกกับแมตช์ใดๆ) ----------------
function openEventCheckinScanner(day) {
  document.getElementById('az-evci-overlay')?.remove()
  const allRoster = S.players

  const overlay = document.createElement('div')
  overlay.id = 'az-evci-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column'
  overlay.innerHTML = `
    <style>
      @keyframes azEvciLaser { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .az-evci-laser { animation: azEvciLaser 2s ease-in-out infinite; }
      .az-evci-flash-ok { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .az-evci-flash-err { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">📷 สแกน QR เช็คอินเข้างาน</div>
        <div style="color:#94a3b8;font-size:11.5px">วันที่ ${day} · ${esc(scheduleDateLabel(day))}</div>
      </div>
      <button id="az-evci-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;max-width:420px;margin:0 auto;width:100%">
      <div id="az-evci-camwrap" style="position:relative;width:100%;aspect-ratio:1;background:#000;border-radius:16px;overflow:hidden">
        <div id="az-evci-reader" style="width:100%;height:100%"></div>
        <div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center">
          <div style="position:relative;width:190px;height:190px;border-radius:16px;border:1px solid rgba(255,255,255,.2);box-shadow:0 0 0 9999px rgba(0,0,0,.4);overflow:hidden">
            <div class="az-evci-laser" style="position:absolute;left:0;width:100%;height:2px;background:#38bdf8"></div>
          </div>
        </div>
      </div>
      <div id="az-evci-feedback" style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px;text-align:center;font-size:12px;color:#94a3b8">ยกกล้องส่อง QR ของนักกีฬาเพื่อเช็คอินเข้างาน</div>
      <div style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:12px">
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
          <span style="font-size:10.5px;color:#94a3b8;font-weight:800;text-transform:uppercase;letter-spacing:.05em">เช็คอินแล้ววันนี้</span>
          <span id="az-evci-count" style="font-size:10.5px;color:#38bdf8;font-weight:800">0 คน</span>
        </div>
        <div id="az-evci-list" style="display:flex;flex-direction:column;gap:6px;max-height:260px;overflow-y:auto"></div>
      </div>
    </div>`
  document.body.appendChild(overlay)

  const checkedIds = new Set(S.eventCheckins.filter(c => c.day === day).map(c => c.player_id))
  let recentIds = []
  let html5Qrcode = null, lastCode = null, lastTime = 0

  const renderList = () => {
    const list = overlay.querySelector('#az-evci-list')
    overlay.querySelector('#az-evci-count').textContent = `${checkedIds.size} คน`
    const done = recentIds.map(id => allRoster.find(p => p.id === id)).filter(Boolean)
    list.innerHTML = done.length ? done.map(p => `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;font-size:12px;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.06)"><span style="color:#e2e8f0;flex:1;min-width:0;overflow-wrap:break-word">${esc(p.students?.full_name || '')}</span><span style="color:#38bdf8;font-weight:700;flex-shrink:0">${esc(teamName(p.team_id))}</span></div>`).join('') : `<div style="color:#64748b;text-align:center;font-size:12px;padding:6px 0">ยังไม่มีใครเช็คอิน</div>`
  }
  renderList()

  async function processScan(decodedText) {
    const camwrap = overlay.querySelector('#az-evci-camwrap')
    const feedback = overlay.querySelector('#az-evci-feedback')
    const flash = ok => { camwrap.classList.add(ok ? 'az-evci-flash-ok' : 'az-evci-flash-err'); setTimeout(() => camwrap.classList.remove(ok ? 'az-evci-flash-ok' : 'az-evci-flash-err'), 500) }

    let studentCode = decodedText
    if (decodedText.startsWith('SQ:')) {
      const [, sc, ts] = decodedText.split(':')
      const diff = Math.floor(Date.now() / 1000) - parseInt(ts, 10)
      if (diff > 60 || diff < -60) {
        _azPlayScanBeep('error'); flash(false)
        feedback.innerHTML = `<span style="color:#f87171">QR Code หมดอายุแล้ว ให้นักกีฬาเปิดหน้าใหม่</span>`
        return
      }
      studentCode = sc
    }

    const player = allRoster.find(p => p.students?.student_code === studentCode)
    if (!player) {
      _azPlayScanBeep('error'); flash(false)
      feedback.innerHTML = `<span style="color:#f87171">ไม่พบนักกีฬาคนนี้ในระบบ</span>`
      return
    }
    if (checkedIds.has(player.id)) {
      _azPlayScanBeep('duplicate'); flash(false)
      feedback.innerHTML = `<span style="color:#fbbf24">${esc(player.students?.full_name || '')} เช็คอินไปแล้ว</span>`
      return
    }

    const { error } = await SB.from('azfutsal_event_checkins').insert(
      { day, team_id: player.team_id, player_id: player.id, checked_in_by: S.identity.profile?.id || null, method: 'staff', checked_in_at: new Date().toISOString() },
    )
    if (error) {
      _azPlayScanBeep('error'); flash(false)
      feedback.innerHTML = `<span style="color:#f87171">บันทึกไม่สำเร็จ: ${esc(error.message)}</span>`
      return
    }
    _azPlayScanBeep('success'); flash(true)
    const photoUrl = playerPhotoUrl(player)
    const photoHtml = photoUrl
      ? `<img src="${esc(photoUrl)}" style="width:40px;height:52px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,.15);flex-shrink:0"/>`
      : `<div style="width:40px;height:52px;border-radius:8px;background:#1e293b;display:flex;align-items:center;justify-content:center;font-weight:800;color:#64748b;flex-shrink:0">${esc((player.students?.full_name || '?').charAt(0))}</div>`
    feedback.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;text-align:left">
        ${photoHtml}
        <div style="flex:1;min-width:0">
          <div style="color:#4ade80;font-weight:800;font-size:12.5px">✓ เช็คอินเข้างานแล้ว</div>
          <div style="color:#e2e8f0;font-size:12.5px;font-weight:700;margin-top:1px;overflow-wrap:break-word">${esc(player.students?.full_name || '')}</div>
          <div style="color:#94a3b8;font-size:11px">${esc(teamName(player.team_id))}</div>
        </div>
      </div>`
    checkedIds.add(player.id)
    recentIds.unshift(player.id)
    recentIds = recentIds.slice(0, 30)
    renderList()
  }

  overlay.querySelector('#az-evci-close').addEventListener('click', async () => {
    if (html5Qrcode) { try { await html5Qrcode.stop() } catch { /* กล้องอาจปิดไปแล้ว ไม่ต้องบล็อกการปิดหน้าต่าง */ } }
    overlay.remove()
    refresh()
  })

  ;(async () => {
    try {
      const Html5Qrcode = await _azLoadHtml5Qrcode()
      html5Qrcode = new Html5Qrcode('az-evci-reader')
      await html5Qrcode.start(
        { facingMode: 'environment' },
        { fps: 25, aspectRatio: 1.0 },
        (decodedText) => {
          if (decodedText === lastCode && Date.now() - lastTime < 2000) return
          lastCode = decodedText; lastTime = Date.now()
          processScan(decodedText)
        },
        () => { /* error ต่อเนื่องระหว่างหากรอบยังไม่เจอ QR — ไม่ต้อง block UI */ },
      )
    } catch (err) {
      azToast('ไม่สามารถเปิดกล้องได้: ' + (err.message || ''))
      overlay.remove()
    }
  })()
}

// ---------------- นักเรียนเปิดกล้องเองสแกน QR สถานีลงทะเบียน เพื่อเช็คอินเข้างานด้วยตัวเอง (ในพอร์ทัลนักเรียน) ----------------
function openEventSelfCheckinScanner() {
  const player = myEventPlayer()
  if (!player) { azToast('ไม่พบข้อมูลนักกีฬาของคุณในระบบ'); return }
  document.getElementById('az-evsc-overlay')?.remove()

  const overlay = document.createElement('div')
  overlay.id = 'az-evsc-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#0b0f1a;display:flex;flex-direction:column'
  overlay.innerHTML = `
    <style>
      @keyframes azEvscLaser { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .az-evsc-laser { animation: azEvscLaser 2s ease-in-out infinite; }
      .az-evsc-flash-ok { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .az-evsc-flash-err { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div style="flex:1;min-width:0">
        <div style="color:#f1f5f9;font-weight:800;font-size:14px">📷 เช็คอินเข้างาน</div>
        <div style="color:#94a3b8;font-size:11.5px">ส่องกล้องไปที่ QR ในจุดลงทะเบียนหน้างาน</div>
      </div>
      <button id="az-evsc-close" style="color:#94a3b8;background:none;border:none;font-size:26px;line-height:1;cursor:pointer">×</button>
    </div>
    <div style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:14px;max-width:420px;margin:0 auto;width:100%">
      <div id="az-evsc-camwrap" style="position:relative;width:100%;aspect-ratio:1;background:#000;border-radius:16px;overflow:hidden">
        <div id="az-evsc-reader" style="width:100%;height:100%"></div>
        <div style="position:absolute;inset:0;pointer-events:none;display:flex;align-items:center;justify-content:center">
          <div style="position:relative;width:190px;height:190px;border-radius:16px;border:1px solid rgba(255,255,255,.2);box-shadow:0 0 0 9999px rgba(0,0,0,.4);overflow:hidden">
            <div class="az-evsc-laser" style="position:absolute;left:0;width:100%;height:2px;background:#38bdf8"></div>
          </div>
        </div>
      </div>
      <div id="az-evsc-feedback" style="background:#151a26;border:1px solid #232838;border-radius:14px;padding:14px;text-align:center;font-size:12.5px;color:#94a3b8">รอสแกน QR ที่จุดลงทะเบียน</div>
    </div>`
  document.body.appendChild(overlay)

  let html5Qrcode = null, lastCode = null, lastTime = 0, done = false

  async function processScan(decodedText) {
    if (done) return
    const camwrap = overlay.querySelector('#az-evsc-camwrap')
    const feedback = overlay.querySelector('#az-evsc-feedback')
    const flash = ok => { camwrap.classList.add(ok ? 'az-evsc-flash-ok' : 'az-evsc-flash-err'); setTimeout(() => camwrap.classList.remove(ok ? 'az-evsc-flash-ok' : 'az-evsc-flash-err'), 500) }

    if (!decodedText.startsWith(EVENT_CHECKIN_QR_PREFIX)) {
      _azPlayScanBeep('error'); flash(false)
      feedback.innerHTML = `<span style="color:#f87171">ไม่ใช่ QR จุดลงทะเบียนเข้างาน</span>`
      return
    }
    const day = Number(decodedText.slice(EVENT_CHECKIN_QR_PREFIX.length))
    if (day !== 1 && day !== 2) {
      _azPlayScanBeep('error'); flash(false)
      feedback.innerHTML = `<span style="color:#f87171">QR ไม่ถูกต้อง</span>`
      return
    }

    if (eventCheckinFor(player.id, day)) {
      _azPlayScanBeep('duplicate'); flash(false)
      feedback.innerHTML = `<span style="color:#fbbf24">คุณเช็คอินวันที่ ${day} ไปแล้ว</span>`
      done = true
      return
    }

    const { error } = await SB.from('azfutsal_event_checkins').insert(
      { day, team_id: player.team_id, player_id: player.id, checked_in_by: S.identity.profile?.id || null, method: 'self', checked_in_at: new Date().toISOString() },
    )
    if (error) {
      if (error.code === '23505') {
        // แข่งกันเขียนพร้อมกัน (เช่นกดสแกนซ้ำเร็วมาก) ถือว่าเช็คอินสำเร็จแล้วจากอีกครั้งหนึ่ง
        _azPlayScanBeep('duplicate'); flash(false)
        feedback.innerHTML = `<span style="color:#fbbf24">คุณเช็คอินวันที่ ${day} ไปแล้ว</span>`
        done = true
        return
      }
      _azPlayScanBeep('error'); flash(false)
      feedback.innerHTML = `<span style="color:#f87171">บันทึกไม่สำเร็จ: ${esc(error.message)}</span>`
      return
    }
    done = true
    _azPlayScanBeep('success'); flash(true)
    const photoUrl = playerPhotoUrl(player)
    const photoHtml = photoUrl
      ? `<img src="${esc(photoUrl)}" style="width:64px;height:82px;object-fit:cover;border-radius:10px;border:1px solid rgba(255,255,255,.15);flex-shrink:0"/>`
      : `<div style="width:64px;height:82px;border-radius:10px;background:#1e293b;display:flex;align-items:center;justify-content:center;font-weight:800;color:#64748b;flex-shrink:0;font-size:22px">${esc((player.students?.full_name || '?').charAt(0))}</div>`
    feedback.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;text-align:left">
        ${photoHtml}
        <div style="flex:1;min-width:0">
          <div style="color:#4ade80;font-weight:800;font-size:15px">✓ เช็คอินเข้างานสำเร็จ</div>
          <div style="color:#e2e8f0;font-size:13.5px;font-weight:700;margin-top:2px;overflow-wrap:break-word">${esc(player.students?.full_name || '')}</div>
          <div style="color:#94a3b8;font-size:12px">${esc(teamName(player.team_id))} · วันที่ ${day}</div>
        </div>
      </div>`
    await refresh()
  }

  overlay.querySelector('#az-evsc-close').addEventListener('click', async () => {
    if (html5Qrcode) { try { await html5Qrcode.stop() } catch { /* กล้องอาจปิดไปแล้ว ไม่ต้องบล็อกการปิดหน้าต่าง */ } }
    overlay.remove()
    if (!done) return
    draw()
  })

  ;(async () => {
    try {
      const Html5Qrcode = await _azLoadHtml5Qrcode()
      html5Qrcode = new Html5Qrcode('az-evsc-reader')
      await html5Qrcode.start(
        { facingMode: 'environment' },
        { fps: 25, aspectRatio: 1.0 },
        (decodedText) => {
          if (decodedText === lastCode && Date.now() - lastTime < 2000) return
          lastCode = decodedText; lastTime = Date.now()
          processScan(decodedText)
        },
        () => { /* error ต่อเนื่องระหว่างหากรอบยังไม่เจอ QR — ไม่ต้อง block UI */ },
      )
    } catch (err) {
      azToast('ไม่สามารถเปิดกล้องได้: ' + (err.message || ''))
      overlay.remove()
    }
  })()
}

// ---------------- จอใหญ่หน้าลงทะเบียน — โชว์ QR สถานีให้นักกีฬาสแกนเอง + ฟีดคนเช็คอินล่าสุดแบบเรียลไทม์ ----------------
async function openEventCheckinBigScreen(day) {
  document.getElementById('az-evbig-overlay')?.remove()
  const qrDataUrl = await QRCode.toDataURL(eventStationQRPayload(day), { width: 320, margin: 2, color: { dark: '#111827', light: '#ffffff' } })

  const overlay = document.createElement('div')
  overlay.id = 'az-evbig-overlay'
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:linear-gradient(160deg,#fdf2f8 0%,#eff6ff 100%);overflow:hidden;font-family:Sarabun,Arial,sans-serif;display:flex;flex-direction:column'
  overlay.innerHTML = `
    <style>
      @keyframes azEvbigPulse { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:.9;transform:scale(1.06)} }
      @keyframes azEvbigBlink { 0%,100%{opacity:1} 50%{opacity:.25} }
    </style>
    <div style="flex-shrink:0;padding:18px 28px;background:linear-gradient(120deg,#db2777,#6366f1 65%,#0ea5e9);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:12px;box-shadow:0 6px 18px rgba(0,0,0,.15)">
      <div style="min-width:0">
        <div style="font-size:23px;font-weight:900;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">⚽ ${esc(cfg('EVENT_NAME', 'AZFUTSALCUP'))}</div>
        <div style="font-size:13px;opacity:.92;font-weight:700;margin-top:2px">จุดลงทะเบียนเข้างาน · วันที่ ${day} · ${esc(scheduleDateLabel(day))}</div>
      </div>
      <div style="display:flex;align-items:center;gap:14px;flex-shrink:0">
        ${eventCheckinWindowLabel(day) ? `<div style="font-size:12.5px;font-weight:800;background:rgba(255,255,255,.18);padding:6px 12px;border-radius:999px;white-space:nowrap">🕐 ${esc(eventCheckinWindowLabel(day))}</div>` : ''}
        <button id="az-evbig-close" style="padding:9px 15px;border-radius:10px;border:1px solid rgba(255,255,255,.4);background:rgba(255,255,255,.12);color:#fff;font-weight:700;font-size:13px;cursor:pointer;white-space:nowrap">✕ ปิด</button>
      </div>
    </div>
    <div style="flex:1;min-height:0;display:flex">
      <div style="flex:0 0 380px;padding:32px 28px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center">
        <div style="position:relative;display:flex;align-items:center;justify-content:center">
          <div style="position:absolute;inset:-16px;border-radius:26px;background:radial-gradient(circle,rgba(14,165,233,.35),transparent 72%);animation:azEvbigPulse 2.4s ease-in-out infinite"></div>
          <img src="${qrDataUrl}" style="position:relative;width:270px;height:270px;border-radius:18px;padding:10px;background:#fff;box-shadow:0 10px 28px rgba(15,23,42,.14)"/>
        </div>
        <div style="font-size:14px;color:#374151;font-weight:800;margin-top:4px">📱 เปิดพอร์ทัลของตัวเอง แล้วกด "เช็คอินเข้างาน" เพื่อสแกน QR นี้</div>
        <div style="display:flex;align-items:baseline;gap:6px;margin-top:8px">
          <span id="az-evbig-count" style="font-size:44px;font-weight:900;color:#16a34a;line-height:1">0</span>
          <span style="font-size:13px;color:#6b7280;font-weight:700">คนเช็คอินแล้ว</span>
        </div>
        <div id="az-evbig-levelcounts" style="display:flex;gap:8px;margin-top:2px"></div>
      </div>
      <div style="flex:1;min-width:0;padding:28px;overflow-y:auto;background:rgba(255,255,255,.55);border-left:1px solid rgba(15,23,42,.06)">
        <div style="font-size:14px;font-weight:800;color:#374151;margin-bottom:14px;display:flex;align-items:center;gap:7px">
          <span style="width:9px;height:9px;border-radius:50%;background:#16a34a;display:inline-block;animation:azEvbigBlink 1.6s ease-in-out infinite"></span>
          เช็คอินล่าสุด
        </div>
        <div id="az-evbig-feed" style="display:flex;flex-direction:column;gap:10px"></div>
      </div>
    </div>`
  document.body.appendChild(overlay)

  const renderBody = () => {
    const rows = S.eventCheckins.filter(c => c.day === day).sort((a, b) => new Date(b.checked_in_at) - new Date(a.checked_in_at))
    const countEl = document.getElementById('az-evbig-count')
    if (countEl) countEl.textContent = String(rows.length)
    const levelCountsEl = document.getElementById('az-evbig-levelcounts')
    if (levelCountsEl) {
      levelCountsEl.innerHTML = ['MS', 'HS'].map(lv => {
        const c = eventCheckinCounts(lv, day)
        return `<div style="font-size:11px;font-weight:800;padding:4px 10px;border-radius:999px;background:${T[lv].soft};color:${T[lv].accent}">${T[lv].label} ${c.done}/${c.total}</div>`
      }).join('')
    }
    const feedEl = document.getElementById('az-evbig-feed')
    if (!feedEl) return
    feedEl.innerHTML = rows.slice(0, 40).map(c => {
      const p = S.players.find(pl => pl.id === c.player_id)
      const photoUrl = p ? playerPhotoUrl(p) : null
      const time = new Date(c.checked_in_at).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })
      return `
      <div style="display:flex;align-items:center;gap:14px;padding:10px 14px;border-radius:14px;background:#f0fdf4;border:2px solid #bbf7d0">
        <div style="width:44px;height:56px;border-radius:9px;overflow:hidden;background:#e5e7eb;flex-shrink:0;border:1px solid #d1d5db">
          ${photoUrl ? `<img src="${esc(photoUrl)}" style="width:100%;height:100%;object-fit:cover"/>` : ''}
        </div>
        <div style="flex:1;min-width:0">
          <div style="font-size:15px;font-weight:800;color:#111827">${esc(p?.students?.full_name || '')}</div>
          <div style="font-size:13.5px;font-weight:700;color:#16a34a;margin-top:1px">${esc(p ? teamName(p.team_id) : '')}${p?.jersey_number != null ? ` · เบอร์ ${esc(String(p.jersey_number))}` : ''}</div>
        </div>
        <div style="flex-shrink:0;display:flex;flex-direction:column;align-items:flex-end;gap:5px">
          <div style="font-size:12px;color:#6b7280;font-weight:700">${time}</div>
          <button data-evbig-undo="${esc(c.id)}" style="padding:3px 9px;border-radius:7px;border:1px solid #fecaca;background:#fef2f2;color:#dc2626;font-size:10.5px;font-weight:700;cursor:pointer">✕ ยกเลิก</button>
        </div>
      </div>`
    }).join('') || `<div style="text-align:center;padding:60px 0;color:#9ca3af"><div style="font-size:40px;margin-bottom:8px">🙋</div><div style="font-size:13px;font-weight:700">ยังไม่มีใครเช็คอิน</div><div style="font-size:12px;margin-top:2px">รอนักกีฬาคนแรกมาสแกน QR</div></div>`
  }
  renderBody()
  const intervalId = setInterval(async () => { await refresh(); renderBody() }, 4000)
  overlay.querySelector('#az-evbig-close').addEventListener('click', () => { clearInterval(intervalId); overlay.remove() })
  overlay.querySelector('#az-evbig-feed').addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-evbig-undo]')
    if (!btn) return
    const { error } = await SB.from('azfutsal_event_checkins').delete().eq('id', btn.dataset.evbigUndo)
    if (error) { azToast('ยกเลิกไม่สำเร็จ: ' + error.message); return }
    await refresh()
    renderBody()
  })
}

function nextDayStartValue(startValue) {
  if (!startValue) return ''
  const date = new Date(startValue)
  if (Number.isNaN(date.getTime())) return ''
  date.setDate(date.getDate() + 1)
  const pad = value => String(value).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function scheduleDayStart(day) {
  const firstDay = cfg('START_TIME', '')
  return day === 1 ? firstDay : cfg('SECOND_DAY_START_TIME', nextDayStartValue(firstDay))
}

function scheduleDayFor(level, code) {
  const matchNumber = Number(String(code).replace(/^M/, ''))
  const dayOneLastMatch = usesSixteenTeamPools(level) ? 12 : 9
  return matchNumber <= dayOneLastMatch ? 1 : 2
}

function scheduleDateLabel(day) {
  const dateValue = scheduleDayStart(day).slice(0, 10)
  if (!dateValue) return 'ยังไม่ได้กำหนดวันที่'
  return new Date(`${dateValue}T00:00:00`).toLocaleDateString('th-TH', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

// ---------------- เช็คอินเข้างาน (คนละอย่างกับ "รับรายงานตัว" รายนัด) — เช็คอินครั้งเดียวตอนมาถึงสนามในแต่ละวันแข่ง ----------------
const EVENT_CHECKIN_QR_PREFIX = 'AZEVENTCHECKIN:'

function eventCheckinRequiresBothDays() { return cfg('EVENT_CHECKIN_REQUIRE_BOTH_DAYS', '1') === '1' }

// เดาวันที่เริ่มต้นจากวันที่ปัจจุบันเทียบกับวันแข่งที่ตั้งค่าไว้ — เป็นแค่ค่าเริ่มต้นให้สลับแท็บเองได้เสมอ
function eventCheckinDefaultDay() {
  const day2Date = scheduleDayStart(2).slice(0, 10)
  const todayDate = new Date().toISOString().slice(0, 10)
  return day2Date && todayDate >= day2Date ? 2 : 1
}

function eventStationQRPayload(day) { return `${EVENT_CHECKIN_QR_PREFIX}${day}` }

// player row ของนักเรียนที่ล็อกอินอยู่ตอนนี้ (สำหรับปุ่ม "เช็คอินเข้างานด้วยตัวเอง" ในพอร์ทัลนักเรียน)
function myEventPlayer() {
  if (!S.identity.student) return null
  return S.players.find(p => p.student_id === S.identity.student.id) || null
}

function eventCheckinFor(playerId, day) { return S.eventCheckins.find(c => c.day === day && c.player_id === playerId) || null }

function eventCheckinCounts(level, day) {
  const roster = S.players.filter(p => S.teams.find(t => t.id === p.team_id)?.level === level)
  const checkedIds = new Set(S.eventCheckins.filter(c => c.day === day).map(c => c.player_id))
  return { done: roster.filter(p => checkedIds.has(p.id)).length, total: roster.length }
}

// ช่วงเวลาเปิด-ปิดรับเช็คอินเข้างาน (ตั้งเวลาเดียว ใช้ซ้ำกับวันที่ของแต่ละวันแข่ง) — ปิดรับ = เส้นตายสำหรับแจ้งเตือนทีมมาไม่ครบ
function eventCheckinOpenTime() { return cfg('EVENT_CHECKIN_OPEN_TIME', '') }
function eventCheckinCloseTime() { return cfg('EVENT_CHECKIN_CLOSE_TIME', '') }

function eventCheckinWindowLabel(day) {
  const open = eventCheckinOpenTime(), close = eventCheckinCloseTime()
  if (!open && !close) return ''
  return `เปิดเช็คอิน ${open || '-'} - ${close || '-'} น.`
}

function eventCheckinDeadline(day) {
  const close = eventCheckinCloseTime()
  const dateValue = scheduleDayStart(day).slice(0, 10)
  if (!close || !dateValue) return null
  const d = new Date(`${dateValue}T${close}:00`)
  return Number.isNaN(d.getTime()) ? null : d
}

function eventCheckinDeadlinePassed(day) {
  const dl = eventCheckinDeadline(day)
  return !!dl && new Date() >= dl
}

// ทีมที่ยังเช็คอินไม่ครบทุกคนในรายชื่อ สำหรับวันที่ระบุ (ครบ = เช็คอินครบทุกคนที่ลงทะเบียนไว้ในทีม)
function incompleteTeamsForDay(day, level = 'ALL') {
  return S.teams.filter(team => level === 'ALL' || team.level === level).map(team => {
    const roster = S.players.filter(p => p.team_id === team.id)
    if (!roster.length) return null
    const checkedIds = new Set(S.eventCheckins.filter(c => c.day === day).map(c => c.player_id))
    const done = roster.filter(p => checkedIds.has(p.id)).length
    if (done >= roster.length) return null
    return { team, done, total: roster.length }
  }).filter(Boolean)
}

// การ์ดสถานะเช็คอินเข้างานของทีม โชว์ในหน้าทีมของฉัน (ฝั่งนักเรียน/หัวหน้าทีม) ให้เห็นว่าครบหรือยังโดยไม่ต้องรอแอดมิน
function teamEventCheckinStatusBlock(roster) {
  if (!roster.length) return ''
  const days = eventCheckinRequiresBothDays() ? [1, 2] : [1]
  const statusFor = day => {
    const checkedIds = new Set(S.eventCheckins.filter(c => c.day === day).map(c => c.player_id))
    const done = roster.filter(p => checkedIds.has(p.id)).length
    return { done, total: roster.length, complete: done >= roster.length }
  }
  const allComplete = days.every(d => statusFor(d).complete)
  return `
  <div style="border:1px solid ${allComplete ? '#bbf7d0' : '#fde68a'};background:${allComplete ? '#f0fdf4' : '#fffbeb'};border-radius:14px;padding:12px 14px">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <div style="font-weight:700;font-size:13px">📷 สถานะเช็คอินเข้างาน</div>
      <span style="font-size:10.5px;font-weight:800;padding:3px 10px;border-radius:999px;background:${allComplete ? '#16a34a' : '#d97706'};color:#fff">${allComplete ? 'ครบแล้ว' : 'ยังไม่ครบ'}</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:4px">
      ${days.map(d => {
        const s = statusFor(d)
        return `<div style="font-size:12px;color:#374151;display:flex;justify-content:space-between;gap:8px"><span>วันที่ ${d} · ${esc(scheduleDateLabel(d))}</span><b style="color:${s.complete ? '#16a34a' : '#d97706'}">${s.complete ? '✅' : '⏳'} ${s.done}/${s.total}</b></div>`
      }).join('')}
    </div>
  </div>`
}

// แบนเนอร์ให้นักกีฬาที่ล็อกอินอยู่กดเช็คอินเข้างานด้วยตัวเอง — โชว์เฉพาะคนที่ลงทะเบียนเป็นนักกีฬาไว้แล้วเท่านั้น
function eventSelfCheckinBanner() {
  const player = myEventPlayer()
  if (!player) return ''
  const bothDays = eventCheckinRequiresBothDays()
  const day1Done = !!eventCheckinFor(player.id, 1)
  const day2Done = !!eventCheckinFor(player.id, 2)
  const allDone = bothDays ? (day1Done && day2Done) : day1Done
  if (allDone) {
    return `<div style="margin-bottom:14px;padding:11px 14px;border-radius:12px;background:#f0fdf4;border:1px solid #bbf7d0;color:#16a34a;font-weight:700;font-size:12.5px;display:flex;align-items:center;gap:8px">✅ เช็คอินเข้างานแล้ว${bothDays ? ` (วันที่ 1 · วันที่ 2)` : ''}</div>`
  }
  const nextDay = bothDays && day1Done ? 2 : 1
  return `<button data-act="openEventSelfCheckin" style="width:100%;margin-bottom:14px;padding:12px;border-radius:12px;border:none;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:800;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">📷 เช็คอินเข้างาน (วันที่ ${nextDay})</button>`
}

function eventCheckinDayTabs() {
  const day = S.eventCheckinDay || eventCheckinDefaultDay()
  return `<div style="display:flex;gap:6px;margin-bottom:10px">
    ${[1, 2].map(d => `<button data-act="setEventCheckinDay" data-v="${d}" style="flex:1;padding:8px;border-radius:9px;border:1px solid ${day === d ? '#0ea5e9' : '#e5e7eb'};background:${day === d ? '#0ea5e9' : '#fff'};color:${day === d ? '#fff' : '#374151'};font-weight:700;font-size:12.5px;cursor:pointer">วันที่ ${d}${d === 2 && !eventCheckinRequiresBothDays() ? ' (ไม่บังคับ)' : ''}</button>`).join('')}
  </div>`
}

// แผงเช็คอินเข้างาน ใช้ร่วมกันทั้งหน้าแอดมินเต็มสิทธิ์และหน้าสตาฟที่มีสิทธิ์ checkin (showSettings เปิดเฉพาะแอดมิน)
function eventCheckinPanel(showSettings) {
  const day = S.eventCheckinDay || eventCheckinDefaultDay()
  const msCount = eventCheckinCounts('MS', day)
  const hsCount = eventCheckinCounts('HS', day)
  const windowLabel = eventCheckinWindowLabel(day)
  const incompleteLevel = S.eventCheckinIncompleteLevel || 'ALL'
  const incomplete = incompleteTeamsForDay(day, incompleteLevel)
  const deadlinePassed = eventCheckinDeadlinePassed(day)
  return box(`
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">📷 เช็คอินเข้างาน</div>
    ${eventCheckinDayTabs()}
    ${windowLabel ? `<div style="font-size:11px;color:#6b7280;margin-bottom:8px">🕐 ${esc(windowLabel)}</div>` : ''}
    <div style="display:flex;gap:14px;margin-bottom:12px;font-size:11.5px;color:#6b7280">
      <div>${T.MS.label}: <b style="color:${T.MS.accent}">${msCount.done}/${msCount.total}</b></div>
      <div>${T.HS.label}: <b style="color:${T.HS.accent}">${hsCount.done}/${hsCount.total}</b></div>
    </div>
    <div style="display:flex;gap:8px">
      <button data-act="openEventCheckinScanner" data-day="${day}" style="flex:1;padding:10px;border:none;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:800;font-size:12.5px;cursor:pointer">📷 สแกนเช็คอิน</button>
      <button data-act="openEventCheckinBigScreen" data-day="${day}" style="flex:1;padding:10px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:800;font-size:12.5px;cursor:pointer">🖥️ จอใหญ่หน้าลงทะเบียน</button>
    </div>
    ${showSettings ? `
    <div style="margin-top:14px;display:flex;gap:6px">
      ${['ALL', 'MS', 'HS'].map(v => `<button data-act="setEventCheckinIncompleteLevel" data-v="${v}" style="flex:1;padding:6px;border-radius:8px;border:1px solid ${incompleteLevel === v ? '#db2777' : '#e5e7eb'};background:${incompleteLevel === v ? '#db2777' : '#fff'};color:${incompleteLevel === v ? '#fff' : '#374151'};font-weight:700;font-size:11.5px;cursor:pointer">${v === 'ALL' ? 'ทั้งหมด' : T[v].label}</button>`).join('')}
    </div>
    ${incomplete.length ? `
    <div style="margin-top:8px;padding:12px;border-radius:12px;background:${deadlinePassed ? '#fef2f2' : '#f9fafb'};border:1px solid ${deadlinePassed ? '#fecaca' : '#e5e7eb'}">
      <div style="font-size:12.5px;font-weight:800;color:${deadlinePassed ? '#dc2626' : '#6b7280'};margin-bottom:6px">${deadlinePassed ? `⚠️ เลยเวลาปิดรับเช็คอิน (${esc(eventCheckinCloseTime())} น.) แล้ว — ทีมต่อไปนี้มาไม่ครบ พิจารณาสกอร์ตามนโยบายที่ตั้งไว้` : `🕐 ยังมาไม่ครบ ${incomplete.length} ทีม (จะเตือนชัดเจนเมื่อถึงเวลาปิดรับ${eventCheckinCloseTime() ? ` ${esc(eventCheckinCloseTime())} น.` : ''})`}</div>
      <div style="display:flex;flex-direction:column;gap:4px">
        ${incomplete.map(({ team, done, total }) => `<div style="font-size:12px;color:#374151;display:flex;justify-content:space-between;gap:8px"><span>${levelBadge(team.level)} ${esc(team.name)}</span><b style="color:${deadlinePassed ? '#dc2626' : '#6b7280'}">${done}/${total}</b></div>`).join('')}
      </div>
    </div>` : `<div style="margin-top:8px;padding:10px 12px;border-radius:12px;background:#f0fdf4;border:1px solid #bbf7d0;color:#16a34a;font-size:12px;font-weight:700">✅ ทุกทีมเช็คอินครบแล้วสำหรับวันที่ ${day}</div>`}
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6">
      <div style="font-size:12px;color:#374151;font-weight:600;margin-bottom:6px">เวลาเปิด-ปิดรับเช็คอิน (ใช้เวลาเดียวกันทั้ง 2 วัน)</div>
      <div style="display:flex;gap:8px;align-items:center">
        <input id="evci-open" type="time" value="${esc(eventCheckinOpenTime())}" style="flex:1;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
        <span style="font-size:12px;color:#9ca3af">ถึง</span>
        <input id="evci-close" type="time" value="${esc(eventCheckinCloseTime())}" style="flex:1;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:6px">เวลาปิดรับใช้เป็นเส้นตายเตือนทีมมาไม่ครบด้านบน — ไม่ได้ล็อกปุ่มสแกนอัตโนมัติ ยังสแกนหลังเวลานี้ได้ตามปกติ</div>
      <button data-act="saveEventCheckinWindow" style="width:100%;margin-top:8px;padding:9px;border-radius:10px;border:none;background:#374151;color:#fff;font-weight:700;font-size:12px;cursor:pointer">บันทึกเวลาเปิด-ปิดรับ</button>
    </div>
    <div style="margin-top:14px;padding-top:12px;border-top:1px solid #f3f4f6">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <span style="font-size:12px;color:#374151;font-weight:600">บังคับเช็คอินทั้ง 2 วัน</span>
        <button data-act="toggleEventCheckinBothDays" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${eventCheckinRequiresBothDays() ? '#dcfce7' : '#f3f4f6'};color:${eventCheckinRequiresBothDays() ? '#16a34a' : '#6b7280'}">${eventCheckinRequiresBothDays() ? 'บังคับ 2 วัน' : 'วันแรกพอ'}</button>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:6px">ถ้าปิด นักกีฬาจะถือว่าเช็คอินครบแค่เช็คอินวันแรก แต่ยังสแกนวันที่ 2 ได้ตามปกติ</div>
      <button data-act="resetAllEventCheckins" style="width:100%;margin-top:12px;padding:9px;border-radius:10px;border:1px solid #fecaca;background:#fef2f2;color:#dc2626;font-weight:700;font-size:12px;cursor:pointer">🗑️ ล้างการเช็คอินเข้างานทั้งหมด (ทั้ง 2 วัน)</button>
    </div>` : ''}
  `)
}

function scheduleRows() {
  const rows = []
  ;(S.filterLevel === 'ALL' ? ['MS', 'HS'] : [S.filterLevel]).forEach(level => {
    BRACKET[level].forEach(def => {
      const r = resolveMatch(level, def.code)
      const m = r.match
      rows.push({ level, code: def.code, round: def.round, day: scheduleDayFor(level, def.code), teamA: r.teamA, teamB: r.teamB, teamAId: r.teamAId, teamBId: r.teamBId, m })
    })
  })
  return rows.filter(r => {
    if (S.filterTeam && !`${r.teamA} ${r.teamB}`.toLowerCase().includes(S.filterTeam.toLowerCase())) return false
    if (S.filterTime && !(r.m?.kickoff_time || '').includes(S.filterTime)) return false
    return true
  }).sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day
    const timeA = a.m?.kickoff_time || '99:99'
    const timeB = b.m?.kickoff_time || '99:99'
    return timeA.localeCompare(timeB)
  })
}

function scheduleTimelineMarkup(rows) {
  const day = S.scheduleDay === 2 ? 2 : 1
  const dayRows = rows.filter(row => row.day === day)
  if (!dayRows.length) return `<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ไม่พบนัดของวันที่ ${day} ที่ตรงกับตัวกรอง</div>`
  return dayRows.map(matchCard).join('')
}

function scheduleDayTabs() {
  return `
  <div style="display:flex;gap:6px;margin-bottom:10px">
    ${[1, 2].map(day => {
      const active = S.scheduleDay === day
      const color = day === 1 ? '#0284c7' : '#7c3aed'
      return `<button data-act="setScheduleDay" data-v="${day}" style="flex:1;min-width:0;padding:9px 8px;border-radius:11px;border:1px solid ${active ? color : '#e5e7eb'};background:${active ? color : '#fff'};color:${active ? '#fff' : '#374151'};cursor:pointer;text-align:center"><span style="display:block;font-size:12px;font-weight:900">วันที่ ${day}</span><span style="display:block;margin-top:2px;font-size:9.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(scheduleDateLabel(day))}</span></button>`
    }).join('')}
  </div>`
}

function bracketRoundLabel(round) {
  return round === 'ชิงที่ 3' || round === 'ชิงที่ 1' ? 'รอบชิง' : round
}

function bracketSlotPlaceholder(def, side) {
  const ref = side === 'a' ? def.refA : def.refB
  if (def.pool) return 'รอจับสลากรอบนี้'
  if (!ref) return 'รอจับสลาก'
  if (ref.startsWith('W_M')) return `ผู้ชนะ ${ref.slice(2)}`
  if (ref.startsWith('L_M')) return `ผู้แพ้ ${ref.slice(2)}`
  if (ref === 'FIRST_ROUND_BYE') return 'ทีมที่ได้สิทธิ์บาย'
  if (ref.startsWith('REC_')) return 'ทีมจากรอบแก้ตัว'
  if (ref === 'LOTTERY_1') return 'ทีมที่จับฉลากกลับมา'
  return 'รอผลรอบก่อน'
}

function bracketMatchCard(level, def) {
  const t = T[level]
  const resolved = resolveMatch(level, def.code)
  const match = resolved.match || {}
  const hasScore = match.score_a !== null && match.score_a !== undefined && match.score_b !== null && match.score_b !== undefined
  const { aWins, bWins } = matchWinnerFlags(match, resolved.teamAId, resolved.teamBId)
  const displayTeam = (side, name) => {
    const isBye = (side === 'a' ? def.refA : def.refB) === 'FIRST_ROUND_BYE'
    return `${esc(name || bracketSlotPlaceholder(def, side))}${isBye && name ? ' <span style="color:#d97706">⭐</span>' : ''}`
  }
  const teamBlock = (side, name, isWinner, align) => `
    <div style="flex:1;min-width:0;${isWinner ? 'background:#dcfce7;border-radius:10px;' : ''}padding:7px 8px;text-align:${align}">
      <div style="font-size:13.5px;font-weight:${isWinner ? 800 : 600};color:${name ? (isWinner ? '#15803d' : '#111827') : '#9ca3af'};line-height:1.3;overflow-wrap:break-word">${displayTeam(side, name)}</div>
    </div>`
  return `
  <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px;overflow:hidden;box-shadow:0 3px 10px rgba(15,23,42,.07)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      ${levelBadge(level)}
      <span style="font-size:11px;color:#9ca3af;font-weight:600">${esc(def.round)} · ${def.code}</span>
      <span style="flex:1"></span>
      <span style="font-size:11px;font-weight:700;color:${hasScore ? '#6b7280' : t.base}">${hasScore ? 'จบการแข่งขัน' : esc(match.kickoff_time || 'รอแข่ง')}</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      ${teamBlock('a', resolved.teamA, aWins, 'left')}
      <div style="flex-shrink:0;text-align:center;min-width:56px">
        ${hasScore
          ? `<div style="display:flex;align-items:center;justify-content:center;gap:4px;font-size:22px;font-weight:800"><span style="color:${aWins ? '#15803d' : '#9ca3af'}">${esc(match.score_a)}</span><span style="color:#d1d5db;font-weight:600;font-size:15px">:</span><span style="color:${bWins ? '#15803d' : '#9ca3af'}">${esc(match.score_b)}</span></div>${penaltyShootoutScoreLine(match)}`
          : `<span style="font-size:11px;color:#9ca3af;font-weight:700">VS</span>`}
      </div>
      ${teamBlock('b', resolved.teamB, bWins, 'right')}
    </div>
    ${def.round === 'ชิงที่ 3' ? `<div style="margin-top:5px;font-size:9.5px;color:#b45309;font-weight:700;text-align:center">ชิงอันดับ 3</div>` : ''}
    ${def.round === 'ชิงที่ 1' ? `<div style="margin-top:5px;font-size:9.5px;color:#7c3aed;font-weight:700;text-align:center">ชิงชนะเลิศ</div>` : ''}
  </div>`
}

function tournamentBracketView() {
  const level = S.bracketLevel || 'MS'
  const groups = []
  BRACKET[level].forEach(def => {
    const label = bracketRoundLabel(def.round)
    let group = groups.find(item => item.label === label)
    if (!group) { group = { label, matches: [] }; groups.push(group) }
    group.matches.push(def)
  })
  const byeTeamId = level === 'MS' ? cfg('FIRST_ROUND_BYE_MS', '') : ''
  const columnBackgrounds = S.theme === 'dark'
    ? ['#172033', '#2d1f13', '#15243b', '#231c3d', '#0f2928', '#2e2812']
    : ['#f8fafc', '#fff7ed', '#eff6ff', '#f5f3ff', '#f0fdfa', '#fffbeb']
  const columnBorders = S.theme === 'dark'
    ? ['#475569', '#9a5b27', '#3b6a9f', '#6650a4', '#247b75', '#92762d']
    : ['#cbd5e1', '#fed7aa', '#bfdbfe', '#ddd6fe', '#99f6e4', '#fde68a']
  return `
  <div>
    <div style="display:flex;gap:6px;margin-bottom:10px">
      ${['MS', 'HS'].map(v => `<button data-act="setBracketLevel" data-v="${v}" style="flex:1;padding:9px;border-radius:10px;border:1px solid ${level === v ? T[v].base : '#e5e7eb'};background:${level === v ? T[v].base : '#fff'};color:${level === v ? '#fff' : '#374151'};font-size:12.5px;font-weight:800;cursor:pointer">${T[v].label} · ${BRACKET[v].length} นัด</button>`).join('')}
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px">
      <div style="font-size:11.5px;color:#6b7280">เลื่อนซ้าย–ขวาเพื่อดูเส้นทางถึงรอบชิง</div>
      ${level === 'MS' && hasMsFirstRoundBye() ? `<div style="font-size:10.5px;color:#b45309;font-weight:700">⭐ ทีมบาย: ${esc(teamName(byeTeamId) || 'รอจับสลาก')}</div>` : ''}
    </div>
    <div style="display:flex;gap:6px;overflow-x:auto;padding:2px 1px 9px;scrollbar-width:thin">
      ${groups.map((group, groupIndex) => `<button data-act="jumpBracketRound" data-v="${groupIndex}" style="flex:0 0 auto;padding:7px 12px;border-radius:999px;border:1px solid ${columnBorders[groupIndex % columnBorders.length]};background:${columnBackgrounds[groupIndex % columnBackgrounds.length]};color:${S.theme === 'dark' ? '#f1f5f9' : '#334155'};font-size:10.5px;font-weight:800;cursor:pointer">${esc(group.label)} · ${group.matches.length}</button>`).join('')}
    </div>
    <div id="az-bracket-scroll" style="overflow-x:auto;overflow-y:hidden;padding:2px 2px 12px;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch">
      <div style="display:flex;align-items:stretch;gap:12px;min-width:max-content">
        ${groups.map((group, groupIndex) => `
        <div id="az-bracket-round-${groupIndex}" style="width:390px;flex:0 0 390px;scroll-snap-align:start;display:flex;flex-direction:column;box-sizing:border-box;padding:9px;border-radius:16px;background:${columnBackgrounds[groupIndex % columnBackgrounds.length]};border:1px solid ${columnBorders[groupIndex % columnBorders.length]};box-shadow:0 4px 14px rgba(15,23,42,.06)">
          <div style="position:sticky;top:0;z-index:1;text-align:center;font-size:11px;font-weight:800;color:#334155;background:rgba(255,255,255,.88);border:1px solid ${columnBorders[groupIndex % columnBorders.length]};border-radius:999px;padding:6px 8px;margin-bottom:9px;box-shadow:0 2px 6px rgba(15,23,42,.05)">${esc(group.label)} · ${group.matches.length} นัด</div>
          <div style="display:flex;flex-direction:column;gap:${Math.max(8, groupIndex * 4 + 8)}px;padding-top:${groupIndex * 10}px;flex:1">
            ${group.matches.map(def => bracketMatchCard(level, def)).join('')}
          </div>
        </div>
        ${groupIndex < groups.length - 1 ? `<div style="width:22px;flex:0 0 22px;align-self:center;text-align:center;color:#94a3b8;font-size:26px;font-weight:300">›</div>` : ''}`).join('')}
      </div>
    </div>
  </div>`
}

function scheduleView() {
  const rows = scheduleRows()
  const isBracket = S.scheduleMode === 'bracket'
  const visibleRowCount = rows.filter(row => row.day === (S.scheduleDay === 2 ? 2 : 1)).length
  return `
  <section>
    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:2px">
      <h2 style="margin:0;font-size:17px;font-weight:800">${isBracket ? 'ผังการแข่งขัน' : 'ตารางการแข่งขัน'}</h2>
      ${isBracket ? '' : `<span id="az-schedule-count" style="font-size:11px;color:#9ca3af;font-weight:600">${visibleRowCount} นัด</span>`}
    </div>
    <p style="margin:0 0 14px;font-size:12px;color:#6b7280">${esc(cfg('INFO_VENUE', ''))}</p>
    ${eventSelfCheckinBanner()}
    ${(cfg('REGISTRATION_OPEN_MS', '0') === '1' || cfg('REGISTRATION_OPEN_HS', '0') === '1') ? `
    <button data-act="account" style="width:100%;margin-bottom:14px;padding:12px;border-radius:12px;border:none;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px">
      📝 ลงทะเบียนทีม (สมัครเข้าร่วมการแข่งขัน)
    </button>` : ''}
    <div style="display:flex;gap:5px;padding:4px;background:#f3f4f6;border-radius:12px;margin-bottom:12px">
      <button data-act="setScheduleMode" data-v="timeline" style="flex:1;padding:8px;border-radius:9px;border:none;background:${!isBracket ? '#fff' : 'transparent'};color:${!isBracket ? '#111827' : '#6b7280'};box-shadow:${!isBracket ? '0 1px 4px rgba(0,0,0,.08)' : 'none'};font-size:12px;font-weight:800;cursor:pointer">🕐 ตารางตามเวลา</button>
      <button data-act="setScheduleMode" data-v="bracket" style="flex:1;padding:8px;border-radius:9px;border:none;background:${isBracket ? '#fff' : 'transparent'};color:${isBracket ? '#111827' : '#6b7280'};box-shadow:${isBracket ? '0 1px 4px rgba(0,0,0,.08)' : 'none'};font-size:12px;font-weight:800;cursor:pointer">🏆 ผังการแข่งขัน</button>
    </div>
    ${isBracket ? tournamentBracketView() : `
    ${scheduleDayTabs()}
    <div style="display:flex;gap:6px;margin-bottom:10px">
      ${['ALL', 'MS', 'HS'].map(v => `<button data-act="setLevel" data-v="${v}" style="font-size:12.5px;padding:7px 14px;border-radius:9px;border:1px solid ${S.filterLevel === v ? '#db2777' : '#e5e7eb'};background:${S.filterLevel === v ? '#db2777' : '#fff'};color:${S.filterLevel === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${v === 'ALL' ? 'ทั้งหมด' : T[v].label}</button>`).join('')}
    </div>
    <div style="display:flex;gap:8px;margin-bottom:14px">
      <input id="az-filterTeam" value="${esc(S.filterTeam)}" placeholder="ค้นหาชื่อทีม" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:10px;padding:9px 12px;font-size:13px;outline:none;background:#faf9f8"/>
      <input id="az-filterTime" value="${esc(S.filterTime)}" placeholder="เวลา เช่น 09:00" style="width:132px;border:1px solid #e5e7eb;border-radius:10px;padding:9px 12px;font-size:13px;outline:none;background:#faf9f8"/>
    </div>
    <div id="az-schedule-rows" style="display:flex;flex-direction:column;gap:10px">
      ${scheduleTimelineMarkup(rows)}
    </div>`}
  </section>`
}

// ---------------- หน้าสตาฟจำกัดสิทธิ์ (รับรายงานตัว / บันทึกผลการแข่งขัน) ----------------
const SCOPE_OPTIONS = [
  { key: 'full', label: 'สิทธิ์เต็มรูปแบบ (แอดมิน)', desc: 'เข้าถึงทุกส่วน: ทีม การเงิน ตั้งค่า ผลการแข่งขัน รายงานตัว' },
  { key: 'checkin', label: 'รับรายงานตัว', desc: 'เปิดกล้องสแกน QR รายงานตัวนักกีฬาก่อนแข่งเท่านั้น' },
  { key: 'result', label: 'บันทึกผลการแข่งขัน', desc: 'แก้ไขสกอร์ ผู้ทำประตู ใบเหลือง-แดงเท่านั้น' },
]

function staffMatchPickerRow(r, hasCheckin, hasResult) {
  const t = T[r.level]
  const canScan = hasCheckin && r.teamAId && r.teamBId
  if (!canScan && !hasResult) return ''
  const teamA = r.teamAId ? S.teams.find(tm => tm.id === r.teamAId) : null
  const teamB = r.teamBId ? S.teams.find(tm => tm.id === r.teamBId) : null
  return `
  <div style="border:1px solid ${t.border};background:${t.soft};border-radius:12px;padding:10px 12px">
    <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px">${levelBadge(r.level)}<span style="font-size:11px;color:#9ca3af;font-weight:600">${esc(r.round)} · ${r.code}</span></div>
    <div style="font-size:13px;font-weight:700;margin-bottom:8px;overflow-wrap:break-word">${esc(r.teamA) || '<span style="color:#c1c5cc">รอผลรอบก่อน</span>'} vs ${esc(r.teamB) || '<span style="color:#c1c5cc">รอผลรอบก่อน</span>'}</div>
    <div style="display:flex;gap:8px">
      ${canScan ? `<button data-act="openCheckinScanner" data-level="${r.level}" data-code="${r.code}" style="flex:1;padding:9px;border:none;border-radius:9px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:700;font-size:11.5px;cursor:pointer">📷 รับรายงานตัว</button>` : ''}
      ${hasResult ? `<button data-act="editMatch" data-level="${r.level}" data-code="${r.code}" style="flex:1;padding:9px;border:1px solid ${t.border};border-radius:9px;background:#fff;color:${t.accent};font-weight:700;font-size:11.5px;cursor:pointer">✏️ บันทึกผล</button>` : ''}
    </div>
    ${canScan && (teamA || teamB) ? `<div style="display:flex;gap:8px;margin-top:6px">
      ${teamA ? `<button data-act="printCheckinForm" data-id="${teamA.id}" style="flex:1;padding:7px;border:1px dashed ${t.border};border-radius:9px;background:#fff;color:#6b7280;font-weight:700;font-size:10px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📄 เอกสาร ${esc(r.teamA)}</button>` : ''}
      ${teamB ? `<button data-act="printCheckinForm" data-id="${teamB.id}" style="flex:1;padding:7px;border:1px dashed ${t.border};border-radius:9px;background:#fff;color:#6b7280;font-weight:700;font-size:10px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📄 เอกสาร ${esc(r.teamB)}</button>` : ''}
    </div>
    <button data-act="openCheckinLiveDisplay" data-level="${r.level}" data-code="${r.code}" style="width:100%;margin-top:6px;padding:7px;border:1px dashed ${t.border};border-radius:9px;background:#fff;color:#6b7280;font-weight:700;font-size:10px;cursor:pointer">🖥️ จอแสดงผลสด (เปิดจอที่สองให้นักกีฬาดู)</button>` : ''}
  </div>`
}

function staffScopedView() {
  const scopes = S.identity.scopes || []
  const hasCheckin = scopes.includes('checkin')
  const hasResult = scopes.includes('result')
  const rows = scheduleRows()
  return `
  <section>
    <h2 style="margin:0 0 4px;font-size:17px;font-weight:800">หน้าสตาฟ</h2>
    <p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">เลือกนัดที่ต้องการ${hasCheckin && hasResult ? 'รับรายงานตัวหรือบันทึกผล' : hasCheckin ? 'รับรายงานตัว' : 'บันทึกผล'} — สิทธิ์นี้เข้าถึงเฉพาะส่วนนี้เท่านั้น</p>
    ${hasCheckin ? `<div style="margin-bottom:14px">${eventCheckinPanel(false)}</div>` : ''}
    <div style="display:flex;gap:6px;margin-bottom:14px">
      ${['ALL', 'MS', 'HS'].map(v => `<button data-act="setLevel" data-v="${v}" style="font-size:12.5px;padding:7px 14px;border-radius:9px;border:1px solid ${S.filterLevel === v ? '#db2777' : '#e5e7eb'};background:${S.filterLevel === v ? '#db2777' : '#fff'};color:${S.filterLevel === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${v === 'ALL' ? 'ทั้งหมด' : T[v].label}</button>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:10px">
      ${rows.map(r => staffMatchPickerRow(r, hasCheckin, hasResult)).join('') || `<div style="text-align:center;padding:32px 0;color:#9ca3af;font-size:13px">ยังไม่มีตารางแข่ง</div>`}
    </div>
  </section>`
}

function eventPlayerName(playerId) {
  const p = S.players.find(pl => pl.id === playerId)
  return p?.students?.full_name || ''
}

// รวมเหตุการณ์ (ประตู/เหลือง/แดง) เป็นรายคน พร้อมวงเล็บนาทีต่อท้ายแบบเว็บรายงานผลบอลทั่วไป เช่น "ชื่อ (2', 10')"
function groupEventsByPlayer(events) {
  const order = []
  const map = new Map()
  events.forEach(e => {
    if (!map.has(e.player_id)) { map.set(e.player_id, []); order.push(e.player_id) }
    if (e.minute != null) map.get(e.player_id).push({ minute: e.minute, isPenalty: !!e.is_penalty })
  })
  return order.map(playerId => {
    const name = eventPlayerName(playerId)
    const marks = map.get(playerId).sort((a, b) => a.minute - b.minute)
    return name ? name + (marks.length ? ` (${marks.map(mk => mk.minute + "'" + (mk.isPenalty ? 'P' : '')).join(', ')})` : '') : ''
  }).filter(Boolean)
}

function matchCard(r) {
  const t = T[r.level]
  const m = r.m
  const hasScore = m && m.score_a !== null && m.score_b !== null
  const isLive = m && ['running', 'paused', 'half_break'].includes(m.clock_status)
  const liveLabel = m?.clock_status === 'paused' ? 'หยุดเวลา' : m?.clock_status === 'half_break' ? 'พักครึ่ง' : 'กำลังแข่งขัน'
  const liveColor = m?.clock_status === 'paused' ? '#d97706' : m?.clock_status === 'half_break' ? '#64748b' : '#15803d'
  const liveBackground = m?.clock_status === 'paused' ? '#fef3c7' : m?.clock_status === 'half_break' ? '#e2e8f0' : '#dcfce7'
  const evsFor = (teamId, type) => S.matchEvents.filter(e => e.level === r.level && e.match_code === r.code && e.team_id === teamId && e.event_type === type)
  const goalsA = m ? groupEventsByPlayer(evsFor(r.teamAId, 'goal')) : []
  const goalsB = m ? groupEventsByPlayer(evsFor(r.teamBId, 'goal')) : []
  const yellowA = m ? groupEventsByPlayer(evsFor(r.teamAId, 'yellow')) : []
  const yellowB = m ? groupEventsByPlayer(evsFor(r.teamBId, 'yellow')) : []
  const redA = m ? groupEventsByPlayer(evsFor(r.teamAId, 'red')) : []
  const redB = m ? groupEventsByPlayer(evsFor(r.teamBId, 'red')) : []
  const { aWins, bWins } = matchWinnerFlags(m, r.teamAId, r.teamBId)

  const detailLines = (goals, yellows, reds, align) => {
    const bits = []
    if (goals.length) bits.push(`<div style="font-size:10.5px;color:#6b7280;margin-top:3px;overflow-wrap:break-word;text-align:${align}">⚽ ${esc(goals.join(', '))}</div>`)
    if (yellows.length) bits.push(`<div style="font-size:10.5px;color:#6b7280;margin-top:2px;overflow-wrap:break-word;text-align:${align}">🟨 ${esc(yellows.join(', '))}</div>`)
    if (reds.length) bits.push(`<div style="font-size:10.5px;color:#6b7280;margin-top:2px;overflow-wrap:break-word;text-align:${align}">🟥 ${esc(reds.join(', '))}</div>`)
    return bits.join('')
  }
  const teamBlock = (name, isWin, align) => `
    <div style="flex:1;min-width:0;${isWin ? 'background:#dcfce7;border-radius:10px;' : ''}padding:6px 8px;text-align:${align}">
      <div style="font-size:13.5px;font-weight:${isWin ? 800 : 600};color:${isWin ? '#15803d' : '#111827'};line-height:1.3;overflow-wrap:break-word">${esc(name) || '<span style="color:#c1c5cc">รอผลรอบก่อน</span>'}</div>
    </div>`

  return `
  <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px;overflow:hidden">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      ${levelBadge(r.level)}
      <span style="font-size:11px;color:#9ca3af;font-weight:600">${esc(r.round)} · ${r.code}</span>
      <span style="flex:1"></span>
      ${isLive ? `<span style="display:inline-flex;align-items:center;gap:5px;font-size:10.5px;font-weight:800;color:${liveColor};background:${liveBackground};padding:3px 9px;border-radius:999px"><span style="width:7px;height:7px;border-radius:50%;background:${liveColor};${m.clock_status === 'running' ? 'animation:azLivePulse 1.2s ease-in-out infinite' : ''}"></span>${liveLabel}</span>${matchClockDisplay(m, { compact: true })}`
        : `<span style="font-size:${hasScore ? '10.5px' : '13px'};font-weight:${hasScore ? 700 : 800};color:${hasScore ? '#6b7280' : t.base}">${hasScore ? 'จบการแข่งขัน' : esc(m?.kickoff_time || 'รอแข่ง')}</span>`}
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      ${teamBlock(r.teamA, aWins, 'left')}
      <div style="flex-shrink:0;text-align:center;min-width:56px">
        ${hasScore
          ? `<div style="display:flex;align-items:center;justify-content:center;gap:4px;font-size:22px;font-weight:800"><span style="color:${aWins ? '#15803d' : '#9ca3af'}">${m.score_a}</span><span style="color:#d1d5db;font-weight:600;font-size:15px">:</span><span style="color:${bWins ? '#15803d' : '#9ca3af'}">${m.score_b}</span></div>${penaltyShootoutScoreLine(m)}`
          : `<span style="font-size:11px;color:#9ca3af;font-weight:700">VS</span>`}
      </div>
      ${teamBlock(r.teamB, bWins, 'right')}
    </div>
    ${(goalsA.length || goalsB.length || yellowA.length || yellowB.length || redA.length || redB.length) ? `
    <div style="display:flex;align-items:flex-start;gap:8px;margin-top:2px">
      <div style="flex:1;min-width:0">${detailLines(goalsA, yellowA, redA, 'left')}</div>
      <div style="flex-shrink:0;min-width:56px"></div>
      <div style="flex:1;min-width:0">${detailLines(goalsB, yellowB, redB, 'right')}</div>
    </div>` : ''}
    ${S.identity.isAdmin ? `<button data-act="editMatch" data-level="${r.level}" data-code="${r.code}" style="margin-top:10px;width:100%;padding:7px;border-radius:9px;border:1px solid ${t.border};background:#fff;color:${t.accent};font-weight:700;font-size:12px;cursor:pointer">แก้ไขผล/เวลา</button>` : ''}
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
  const cardLeaders = computeTopCards(level)
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
            ${photoTag(s.photoUrl)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${esc(s.name)}</div><div style="font-size:11.5px;color:#6b7280">${esc(s.team)}</div></div>
            <div style="font-size:15px;font-weight:800;color:${t.accent}">${s.goals}</div>
          </div>`).join('') : `<div style="color:#9ca3af;font-size:12.5px">ยังไม่มีข้อมูลประตู</div>`}
      </div>
    </div>
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:12px 14px;margin-top:12px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">ใบเหลือง-ใบแดงมากที่สุด · ${t.label}</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${cardLeaders.length ? cardLeaders.map(c => `
          <div style="display:flex;align-items:center;gap:10px">
            ${photoTag(c.photoUrl)}
            <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700">${esc(c.name)}</div><div style="font-size:11.5px;color:#6b7280">${esc(c.team)}</div></div>
            <div style="display:flex;gap:6px;font-size:13px;font-weight:800">
              ${c.yellow ? `<span style="color:#d97706">🟨${c.yellow}</span>` : ''}
              ${c.red ? `<span style="color:#dc2626">🟥${c.red}</span>` : ''}
            </div>
          </div>`).join('') : `<div style="color:#9ca3af;font-size:12.5px">ยังไม่มีข้อมูลใบเหลือง-ใบแดง</div>`}
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
    ? `<img src="${esc(url)}" style="width:30px;height:38px;border-radius:8px;border:1px solid #d1d5db;object-fit:cover;flex-shrink:0;box-shadow:0 1px 3px rgba(0,0,0,.2)"/>`
    : `<div style="width:30px;height:38px;border-radius:8px;border:1px solid #d1d5db;background:#e5e7eb;flex-shrink:0"></div>`
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
  if (myTeam) return manageTeamView(myTeam, false)
  if (s.teamCodeLookupResult && typeof s.teamCodeLookupResult === 'object') return manageTeamView(s.teamCodeLookupResult, false, true)
  return createTeamView(false)
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
  const regClosed = !adminMode && cfg('REGISTRATION_OPEN_MS', '0') !== '1' && cfg('REGISTRATION_OPEN_HS', '0') !== '1'
  return `
  <section>
    ${adminMode ? `<button data-act="adminBackToList" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับรายการทีม</button>` : ''}
    <h2 style="margin:0 0 4px;font-size:17px;font-weight:800">${regClosed ? 'ดูข้อมูลทีม' : `ลงทะเบียนทีม${adminMode ? ' (แอดมิน)' : ''}`}</h2>
    ${regClosed ? `<p style="margin:0 0 16px;font-size:12.5px;color:#6b7280">ขณะนี้ปิดรับลงทะเบียนทีมใหม่แล้ว กรอกรหัสประจำทีมเพื่อดูข้อมูลทีมของคุณได้ที่นี่</p>` : `
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
    </div>`}
    ${!adminMode ? `
    <div style="${regClosed ? '' : 'border-top:1px solid #e5e7eb;margin-top:20px;padding-top:16px'}">
      ${regClosed ? '' : `<div style="font-size:11.5px;color:#6b7280;margin-bottom:6px">เป็นสมาชิกทีมอยู่แล้วแต่ไม่ใช่หัวหน้าทีม? กรอกรหัสประจำทีมเพื่อดูข้อมูลทีมของคุณ (ดูได้อย่างเดียว แก้ไขไม่ได้)</div>`}
      <div style="display:flex;gap:8px">
        <input id="team-code-input" value="${esc(S.teamCodeInput)}" placeholder="เช่น HS-6N7D" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font-size:13px;text-transform:uppercase"/>
        <button data-act="lookupTeamCode" style="flex-shrink:0;padding:9px 16px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">ดูข้อมูล</button>
      </div>
      ${S.teamCodeLookupResult === 'notfound' ? `<div style="margin-top:6px;font-size:12px;color:#dc2626">ไม่พบทีมที่ใช้รหัสนี้ ตรวจสอบรหัสอีกครั้ง</div>` : ''}
    </div>` : ''}
  </section>`
}

function manageTeamView(team, isAdminView, readOnly) {
  const t = T[team.level]
  const roster = S.players.filter(p => p.team_id === team.id)
  const payment = S.payments.find(p => p.team_id === team.id)
  const maxRoster = Number(cfg('MAX_ROSTER', 12))
  const deadline = cfg('REGISTER_EDIT_DEADLINE', '')
  const editable = !readOnly && (isAdminView || !deadline || new Date() < new Date(deadline))
  const lr = S.rosterLookupResult
  const myMatches = teamMatchRows(team)
  const { goalList, cardList } = teamPlayerEventSummary(team)
  const playerEventDetails = teamPlayerEventDetails(team)
  const teamCardStats = computeTeamStats(team.level).find(r => r.id === team.id) || { y: 0, r: 0 }
  const refundEstimate = Math.max(Number(cfg('DEPOSIT_AMOUNT', 500)) - Number(cfg('OPERATION_FEE', 100)) - teamCardStats.y * Number(cfg('RATE_YELLOW', 30)) - teamCardStats.r * Number(cfg('RATE_RED', 50)), 0)

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
      ${isAdminView ? `<button data-act="adminBackToList" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับรายการทีม</button>` : `<button data-act="tab" data-tab="schedule" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px">← กลับหน้าหลัก</button>`}
      ${readOnly ? `<button data-act="exitTeamCodeView" style="border:none;background:none;color:#6b7280;font-size:12px;cursor:pointer;margin-bottom:8px;margin-left:10px">ค้นหาทีมอื่น</button>` : ''}
      <div style="display:flex;align-items:center;gap:8px">
        ${levelBadge(team.level)}
        ${team.is_reserve ? reserveBadge() : ''}${team.is_organizer ? organizerBadge() : ''}
        ${S.editingTeamName ? `
          <input id="edit-team-name-input" value="${esc(S.editTeamNameValue)}" style="flex:1;min-width:0;font-size:15px;font-weight:700;border:1px solid #e5e7eb;border-radius:8px;padding:5px 8px"/>
          <button data-act="saveTeamName" data-team="${team.id}" style="flex-shrink:0;border:none;background:${t.base};color:#fff;font-size:11px;font-weight:700;padding:6px 10px;border-radius:7px;cursor:pointer">บันทึก</button>
          <button data-act="cancelEditTeamName" style="flex-shrink:0;border:none;background:none;color:#9ca3af;font-size:11px;cursor:pointer">ยกเลิก</button>
        ` : `
          <h2 style="margin:0;font-size:17px;font-weight:800">${esc(team.name)}</h2>
          ${editable ? `<button data-act="startEditTeamName" data-name="${esc(team.name)}" style="flex-shrink:0;border:none;background:none;color:#9ca3af;font-size:13px;cursor:pointer" aria-label="แก้ไขชื่อทีม">✎</button>` : ''}
        `}
      </div>
      ${team.team_code ? `<div style="margin-top:6px;font-size:12px;color:${t.accent};font-weight:700">รหัสประจำทีม: ${esc(team.team_code)}</div>` : ''}
      ${team.is_reserve ? `<div style="margin-top:4px;font-size:11.5px;color:#b45309">ทีมของคุณอยู่ในสถานะทีมสำรอง (สมัครและชำระเงินเรียบร้อยแล้ว แต่เกินโควตาทีมหลักของรุ่นนี้)</div>` : ''}
    </div>

    ${readOnly ? `<div style="font-size:12px;color:#6b7280;background:#f3f4f6;border-radius:10px;padding:8px 10px">🔒 กำลังดูข้อมูลทีมแบบอ่านอย่างเดียวผ่านรหัสทีม แก้ไขไม่ได้</div>` : ''}
    ${!editable && !readOnly ? `<div style="font-size:12px;color:#dc2626;background:#fee2e2;border-radius:10px;padding:8px 10px">หมดเวลาแก้ไขรายชื่อนักกีฬาแล้ว (ปิดแก้ไขเมื่อ ${esc(deadline)})</div>` : ''}
    ${teamEventCheckinStatusBlock(roster)}

    ${S.myTeamTab === 'roster' ? `
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:14px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px">
        <div style="font-weight:700;font-size:13.5px">รายชื่อนักกีฬา</div>
        <div style="font-size:11.5px;color:#6b7280">${roster.length}/${maxRoster} คน</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:${editable && roster.length < maxRoster ? '12px' : '0'}">
        ${roster.length ? roster.map(p => {
          const ev = playerEventDetails.get(p.id)
          const hasEvents = ev && ev.events.length > 0
          const expanded = S.expandedPlayerId === p.id
          const badgeBits = []
          if (ev?.goals) badgeBits.push(`⚽${ev.goals}`)
          if (ev?.yellow) badgeBits.push(`🟨${ev.yellow}`)
          if (ev?.red) badgeBits.push(`🟥${ev.red}`)
          const eventIcon = e => e.type === 'goal' ? '⚽' : e.type === 'yellow' ? '🟨' : '🟥'
          return `
          <div style="background:#fff;border-radius:10px;padding:8px">
            <div style="display:flex;align-items:center;gap:10px;${hasEvents ? 'cursor:pointer' : ''}" ${hasEvents ? `data-act="togglePlayerEventDetail" data-id="${p.id}"` : ''}>
              <div style="position:relative;flex-shrink:0">
                ${photoTag(playerPhotoUrl(p))}
                ${editable ? `<label style="position:absolute;bottom:-3px;right:-3px;width:17px;height:17px;border-radius:50%;background:${t.base};display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.35)">
                  <input type="file" accept="image/*" data-act="uploadPlayerPhoto" data-id="${p.id}" style="display:none"/>
                  <span style="color:#fff;font-size:9px;line-height:1">📷</span>
                </label>` : ''}
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700">${esc(p.students?.full_name || '')}${roleTag(p)}</div>
                <div style="font-size:11px;color:#6b7280;display:flex;align-items:center;gap:4px;flex-wrap:wrap">
                  <span>${esc(p.students?.student_code || '')}</span>
                  ${S.editingJerseyId === p.id ? `
                    <span>·</span>
                    <input id="edit-jersey-input" type="number" min="0" value="${esc(S.editJerseyValue)}" style="width:56px;border:1px solid #e5e7eb;border-radius:6px;padding:2px 5px;font-size:11px"/>
                    <button data-act="saveJersey" data-id="${p.id}" style="border:none;background:none;color:${t.accent};font-size:11px;font-weight:700;cursor:pointer">บันทึก</button>
                    <button data-act="cancelEditJersey" style="border:none;background:none;color:#9ca3af;font-size:11px;cursor:pointer">ยกเลิก</button>
                  ` : `
                    <span>${p.jersey_number !== null && p.jersey_number !== undefined ? `· เบอร์ ${p.jersey_number}` : '· ยังไม่ระบุเบอร์'}</span>
                    ${editable ? `<button data-act="startEditJersey" data-id="${p.id}" data-v="${p.jersey_number ?? ''}" style="border:none;background:none;color:${t.accent};font-size:10.5px;cursor:pointer;font-weight:600">แก้ไข</button>` : ''}
                  `}
                </div>
                ${badgeBits.length ? `<div style="margin-top:3px;font-size:11px;color:#4b5563;font-weight:700">${badgeBits.join('  ')}</div>` : ''}
                <div style="margin-top:3px;font-size:10.5px;color:#9ca3af">📷 ${eventCheckinRequiresBothDays() ? `วันที่1 ${eventCheckinFor(p.id, 1) ? '✅' : '❌'} · วันที่2 ${eventCheckinFor(p.id, 2) ? '✅' : '❌'}` : `เช็คอินเข้างาน ${eventCheckinFor(p.id, 1) ? '✅' : '❌'}`}</div>
                ${roleButtons(p) ? `<div style="margin-top:2px">${roleButtons(p)}</div>` : ''}
              </div>
              ${editable ? `<button data-act="removePlayer" data-id="${p.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600;flex-shrink:0">ลบ</button>` : ''}
              ${hasEvents ? `<span style="flex-shrink:0;color:#9ca3af;font-size:10px">${expanded ? '▲' : '▼'}</span>` : ''}
            </div>
            ${expanded && hasEvents ? `
            <div style="margin-top:8px;padding-top:8px;border-top:1px solid #f3f4f6;display:flex;flex-direction:column;gap:2px">
              ${ev.events.map(e => `<div style="font-size:11px;color:#4b5563;padding:3px 0">${eventIcon(e)} ${esc(e.round || '')} vs ${esc(e.opponent || '-')}${e.minute != null ? ` · นาทีที่ ${e.minute}${e.isPenalty ? ' (จุดโทษ)' : ''}` : ''}</div>`).join('')}
            </div>` : ''}
          </div>`
        }).join('') : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีนักกีฬา</div>`}
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
    </div>` : ''}

    ${S.myTeamTab === 'matches' ? `
    ${goalList.length ? `
    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:10px">⚽ สรุปผู้ทำประตูของทีม</div>
      <div style="display:flex;flex-direction:column;gap:6px">
        ${goalList.map(g => `<div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px"><span>${esc(g.name)}</span><span style="font-weight:800;color:${t.accent}">${g.goals} ประตู</span></div>`).join('')}
      </div>
    </div>` : ''}

    ${cardList.length ? `
    <div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:10px">🟨🟥 สรุปใบเหลือง/ใบแดงของทีม</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        ${cardList.map(c => `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:12.5px">
            <span>${esc(c.name)}</span>
            <span style="text-align:right;color:#6b7280">${c.yellow.length ? `<span style="color:#b45309;font-weight:700">🟨×${c.yellow.length}</span> (${esc(c.yellow.join(', '))})` : ''}${c.yellow.length && c.red.length ? ' · ' : ''}${c.red.length ? `<span style="color:#dc2626;font-weight:700">🟥×${c.red.length}</span> (${esc(c.red.join(', '))})` : ''}</span>
          </div>`).join('')}
      </div>
    </div>` : ''}

    <div style="border:1px solid ${t.border};background:${t.soft};border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:${myMatches.length ? '10px' : '0'}">ผลการแข่งขันของทีมคุณ</div>
      ${myMatches.length ? `<div style="display:flex;flex-direction:column;gap:8px">${myMatches.map(m => matchCard(m) + (m.teamAId && m.teamBId ? teamCheckinLine(team, m.level, m.code) : '')).join('')}</div>` : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีตารางแข่งของทีมนี้ (รอจับสลากประกบคู่)</div>`}
    </div>` : ''}

    ${S.myTeamTab === 'finance' ? `
    <div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">
      <div style="font-weight:700;font-size:13.5px;margin-bottom:8px">ค่าประกันทีม (${money(cfg('DEPOSIT_AMOUNT', 500))} บาท)</div>
      ${payment ? `
        ${statusPill(payment.status)}
        ${payment.status === 'pending' ? `<div style="font-size:12px;color:#9ca3af">ส่งหลักฐานแล้ว รอแอดมินตรวจสอบ</div>` : ''}
        ${payment.status === 'rejected' ? `
          <div style="font-size:11.5px;color:#dc2626;margin-bottom:8px">เหตุผล: ${esc(payment.admin_note || '-')}${!readOnly ? '  กรุณายืนยันการลงทะเบียนและแนบหลักฐานใหม่' : ''}</div>
          ${!readOnly ? `<button data-act="openConfirmReg" data-team="${team.id}" style="width:100%;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer">ยืนยันการลงทะเบียนอีกครั้ง</button>` : ''}
        ` : ''}
        ${payment.status !== 'rejected' ? `
          <div style="margin-top:10px;padding-top:10px;border-top:1px solid #f3f4f6;font-size:12px;color:#6b7280">
            <div>หักค่าดำเนินการ ${money(cfg('OPERATION_FEE', 100))} บาท${teamCardStats.y ? ` · ใบเหลือง ${teamCardStats.y} ใบ (−${money(teamCardStats.y * Number(cfg('RATE_YELLOW', 30)))})` : ''}${teamCardStats.r ? ` · ใบแดง ${teamCardStats.r} ใบ (−${money(teamCardStats.r * Number(cfg('RATE_RED', 50)))})` : ''}</div>
            <div style="margin-top:4px;font-size:13.5px;font-weight:800;color:${t.accent}">คาดว่าจะได้เงินคืน ${money(refundEstimate)} บาท</div>
            ${(teamCardStats.y || teamCardStats.r) ? `<div style="margin-top:6px;font-size:11px;color:#9ca3af">ดูว่าใครได้ใบเหลือง/แดงบ้างที่แท็บ "ผลการแข่งขัน"</div>` : ''}
          </div>
        ` : ''}
      ` : readOnly ? `
        <div style="font-size:12px;color:#9ca3af">ทีมนี้ยังไม่ได้ชำระค่าประกัน</div>
      ` : roster.length ? `
        <button data-act="openConfirmReg" data-team="${team.id}" style="width:100%;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#ec4899,#db2777);color:#fff;font-weight:800;font-size:14px;cursor:pointer">✅ ยืนยันการลงทะเบียนสมัครเข้าร่วมแข่งขัน</button>
      ` : `
        <div style="font-size:12px;color:#9ca3af">เพิ่มนักกีฬาอย่างน้อย 1 คนก่อนยืนยันการลงทะเบียน</div>
      `}
    </div>` : ''}
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

function staffScopeModal() {
  const ed = S.staffScopeEdit
  if (!ed) return ''
  const current = ed.scopes || []
  return simpleModal(ed.mode === 'add' ? `มอบสิทธิ์ให้ ${ed.name}` : `แก้ไขสิทธิ์ของ ${ed.name}`, `
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
      ${SCOPE_OPTIONS.map(o => `
        <label style="display:flex;align-items:flex-start;gap:10px;border:1px solid ${current.includes(o.key) ? '#db2777' : '#e5e7eb'};border-radius:10px;padding:10px;cursor:pointer">
          <input type="checkbox" data-act="toggleStaffScope" data-key="${o.key}" ${current.includes(o.key) ? 'checked' : ''} style="margin-top:2px;flex-shrink:0"/>
          <div><div style="font-size:13px;font-weight:700">${o.label}</div><div style="font-size:11px;color:#6b7280">${o.desc}</div></div>
        </label>`).join('')}
    </div>
    <button data-act="saveStaffScope" style="width:100%;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">${ed.mode === 'add' ? 'มอบสิทธิ์' : 'บันทึก'}</button>
  `)
}

// โมดัลยืนยันการทำรายการ ใช้แทน window.confirm() ของเบราว์เซอร์ทุกจุด (สไตล์เดียวกับโมดัลอื่นในระบบ)
function confirmActionModal() {
  const pc = S.pendingConfirm
  if (!pc) return ''
  return `
  <div style="position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:24px">
    <div style="background:#fff;width:100%;max-width:320px;border-radius:16px;padding:20px;box-shadow:0 20px 50px rgba(0,0,0,.3)">
      <div style="font-size:14px;font-weight:700;color:#111827;line-height:1.6;margin-bottom:18px;white-space:pre-line">${esc(pc.message)}</div>
      <div style="display:flex;gap:8px">
        <button data-act="confirmActionNo" style="flex:1;padding:10px;border-radius:10px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:13px;cursor:pointer">ยกเลิก</button>
        <button data-act="confirmActionYes" style="flex:1;padding:10px;border-radius:10px;border:none;background:${pc.danger ? '#dc2626' : '#db2777'};color:#fff;font-weight:700;font-size:13px;cursor:pointer">${esc(pc.confirmLabel || 'ยืนยัน')}</button>
      </div>
    </div>
  </div>`
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
  { id: 'tourney', icon: '🏆', label: 'แข่งขัน', sections: [['ops', 'เวลา/รางวัล'], ['certificates', 'เกียรติบัตร'], ['eventcheckin', 'เช็คอินเข้างาน']] },
]
function groupOfSection(id) { return ADMIN_GROUPS.find(g => g.sections.some(s => s[0] === id)) || ADMIN_GROUPS[0] }
function sectionLabel(id) { for (const g of ADMIN_GROUPS) { const f = g.sections.find(s => s[0] === id); if (f) return f[1] } return '' }

function adminView() {
  const group = groupOfSection(S.adminSection)
  return `
  <section style="display:flex;flex-direction:column;gap:12px;flex:1;min-height:0">
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
    ${S.adminSection === 'eventcheckin' ? eventCheckinPanel(true) : ''}
  </section>`
}

function box(inner) { return `<div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px">${inner}</div>` }
// เหมือน box() แต่ยืดเต็มพื้นที่ที่เหลือของจอ (ใช้กับการ์ดที่มีลิสต์ยาวๆ ด้านในที่ต้องการสกรอลล์เอง แทนที่จะเว้นพื้นที่ว่างด้านล่าง)
function boxFill(inner) { return `<div style="border:1px solid #e5e7eb;border-radius:14px;padding:14px;flex:1;min-height:0;display:flex;flex-direction:column">${inner}</div>` }

function adminGeneral() {
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
    <div style="margin-bottom:10px">
      <div style="font-weight:700;font-size:14px;margin-bottom:2px">เปิดรับสมัครทีม</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:8px">เปิด/ปิดแยกแต่ละระดับชั้นได้ ม.ปลายจะปิดอัตโนมัติเมื่อทีมทั่วไปครบ ${esc(cfg('MAX_TEAMS_HS', '14'))} ทีม</div>
      ${['MS', 'HS'].map(v => {
        const open = cfg(`REGISTRATION_OPEN_${v}`, '0') === '1'
        return `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;${v === 'MS' ? 'border-bottom:1px solid #f3f4f6' : ''}">
          <div style="font-size:12.5px;font-weight:600;color:${T[v].accent}">${T[v].label}</div>
          <button data-act="toggleRegistration" data-level="${v}" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${open ? '#dcfce7' : '#f3f4f6'};color:${open ? '#16a34a' : '#6b7280'}">${open ? 'เปิดอยู่' : 'ปิดอยู่'}</button>
        </div>`
      }).join('')}
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
      <label style="font-size:11.5px;color:#6b7280">ค่าดำเนินการกิจกรรม/ทีม (บาท — หักจากค่าประกันก่อนคำนวณเงินคืน)
        <input id="reg-opfee" type="number" min="0" value="${esc(cfg('OPERATION_FEE', 100))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/>
      </label>
      <div style="display:flex;gap:8px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">โควตาทีม ม.ต้น (เว้นว่าง=ไม่จำกัด)<input id="reg-quota-ms" type="number" min="0" value="${esc(cfg('MAX_TEAMS_MS', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">โควตาทีม ม.ปลาย (เว้นว่าง=ไม่จำกัด)<input id="reg-quota-hs" type="number" min="0" value="${esc(cfg('MAX_TEAMS_HS', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      <div style="font-size:10.5px;color:#9ca3af;margin-top:-4px">ม.ต้น: ทีมที่ยืนยันเกินโควตาจะถูกติดป้าย "ทีมสำรอง" อัตโนมัติ (ยังลงทะเบียนได้ ไม่ปิดรับสมัคร) · ม.ปลาย: ปิดรับสมัครอัตโนมัติทันทีที่ทีมทั่วไปครบโควตา (ไม่นับทีมผู้จัด)</div>
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
    <div style="font-weight:700;font-size:14px;margin-bottom:10px">มอบสิทธิ์ผู้ดูแล/สตาฟ (ครู/นักเรียน)</div>
    <div id="az-staff-list" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">กำลังโหลด...</div>
    <div style="position:relative">
      <input id="staff-search" placeholder="พิมพ์ชื่อครูหรือนักเรียน..." autocomplete="off" style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:10px;padding:9px 10px;font-size:12.5px"/>
      <div id="staff-search-results" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:220px;overflow-y:auto;z-index:10;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
    </div>
  `)
}

// 3 โหมดจับคู่รอบสระ (12 ทีม/6 ทีม) เมื่อผลรอบก่อนหน้าครบแล้ว: อัตโนมัติจัดอันดับ / จับสลากสดโชว์ / กรอกเองทีละคู่
function poolActionButtons(level, poolKey, label) {
  return `
  <div style="flex-shrink:0;margin-bottom:6px">
    <div style="font-size:10.5px;color:#9ca3af;font-weight:700;margin-bottom:4px">${esc(label)}</div>
    <div style="display:flex;gap:6px">
      <button data-act="autoSeedPool" data-level="${level}" data-pool="${poolKey}" style="flex:1;padding:8px 4px;border-radius:9px;border:none;background:linear-gradient(135deg,#0891b2,#06b6d4);color:#fff;font-weight:800;font-size:10.5px;line-height:1.35;cursor:pointer">🎲 อัตโนมัติ<br/><span style="font-weight:600;opacity:.9">จัดอันดับ</span></button>
      <button data-act="openLiveDraw" data-level="${level}" data-pool="${poolKey}" style="flex:1;padding:8px 4px;border-radius:9px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:10.5px;line-height:1.35;cursor:pointer">🎬 จับสลากสด<br/><span style="font-weight:600;opacity:.9">โชว์ไลฟ์</span></button>
      <button data-act="openManualPoolAssign" data-level="${level}" data-pool="${poolKey}" style="flex:1;padding:8px 4px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:800;font-size:10.5px;line-height:1.35;cursor:pointer">✍️ กรอกเอง<br/><span style="font-weight:600;opacity:.7">Manual</span></button>
    </div>
  </div>`
}

function adminTeams() {
  const level = S.adminTeamLevel || 'MS'
  const rows = S.teams.filter(t => t.level === level)
  const hasFirstRoundBye = level === 'MS' && hasMsFirstRoundBye()
  const seeded = S.matches[level].length >= BRACKET[level].length
  const quota = Number(cfg(level === 'MS' ? 'MAX_TEAMS_MS' : 'MAX_TEAMS_HS', '') || 0)
  const verifiedCount = S.payments.filter(p => p.status === 'verified' && S.teams.find(t2 => t2.id === p.team_id)?.level === level).length
  return boxFill(`
    <div style="flex-shrink:0;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">จัดการทีม${quota > 0 ? ` <span style="font-weight:600;font-size:11.5px;color:#6b7280">(${verifiedCount}/${quota} ทีมยืนยันแล้ว)</span>` : ''}</div>
      <div style="display:flex;gap:6px">${['MS', 'HS'].map(v => `<button data-act="adminTeamLevel" data-v="${v}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${level === v ? T[v].base : '#e5e7eb'};background:${level === v ? T[v].base : '#fff'};color:${level === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${T[v].label}</button>`).join('')}</div>
    </div>
    ${level === 'MS' && !seeded ? `
    <div style="flex-shrink:0;margin-bottom:10px">
      <div style="font-size:11.5px;color:#6b7280;margin-bottom:5px">รูปแบบสายการแข่ง ม.ต้น (เลือกก่อนสร้างตารางแข่ง — ล็อกทันทีที่สร้างแล้ว)</div>
      <div style="display:flex;gap:6px">
        <button data-act="setMsFormat" data-v="12" style="flex:1;padding:8px;border-radius:9px;border:1px solid ${msTeamFormat() === '12' ? T.MS.base : '#e5e7eb'};background:${msTeamFormat() === '12' ? T.MS.base : '#fff'};color:${msTeamFormat() === '12' ? '#fff' : '#374151'};font-weight:700;font-size:12px;cursor:pointer">12 ทีม${hasFirstRoundBye ? ' + บาย 1' : ''} (17 นัด)</button>
        <button data-act="setMsFormat" data-v="16" style="flex:1;padding:8px;border-radius:9px;border:1px solid ${msTeamFormat() === '16' ? T.MS.base : '#e5e7eb'};background:${msTeamFormat() === '16' ? T.MS.base : '#fff'};color:${msTeamFormat() === '16' ? '#fff' : '#374151'};font-weight:700;font-size:12px;cursor:pointer">16 ทีม (25 นัด)</button>
      </div>
    </div>` : ''}
    ${level === 'MS' && seeded ? `<div style="flex-shrink:0;font-size:10.5px;color:#9ca3af;margin-bottom:8px">รูปแบบสายการแข่ง: ${hasFirstRoundBye ? '13 ทีม (จับบาย 1 ทีมก่อน)' : `${msTeamFormat()} ทีม`} (${BRACKET.MS.length} นัด) — ล็อกไว้แล้วเพราะสร้างตารางแข่งแล้ว</div>` : ''}
    ${!seeded ? `<button data-act="seedMatches" data-level="${level}" style="flex-shrink:0;width:100%;margin-bottom:10px;padding:9px;border-radius:9px;border:1px dashed ${T[level].base};background:${T[level].soft};color:${T[level].accent};font-weight:700;font-size:12.5px;cursor:pointer">สร้างตารางแข่งเริ่มต้น (${BRACKET[level].length} นัด)</button>` : `<button data-act="randomDraw" data-level="${level}" style="flex-shrink:0;width:100%;margin-bottom:6px;padding:9px;border-radius:9px;border:1px solid #e5e7eb;background:#fff;color:#374151;font-weight:700;font-size:12.5px;cursor:pointer">สุ่มจับคู่รอบแรกใหม่ (ทันที ไม่มีแอนิเมชัน)</button>`}
    ${seeded ? `<button data-act="openLiveDraw" data-level="${level}" style="flex-shrink:0;width:100%;margin-bottom:${usesSixteenTeamPools(level) ? '6px' : '10px'};padding:10px;border-radius:9px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:12.5px;cursor:pointer">🎬 จับสลากสด รอบแรก (สำหรับไลฟ์)</button>` : ''}
    ${seeded && usesSixteenTeamPools(level) && poolRoundReady(level, 'R3') ? poolActionButtons(level, 'R3', 'รอบ 12 ทีม') : ''}
    ${seeded && usesSixteenTeamPools(level) && poolRoundReady(level, 'R4') ? poolActionButtons(level, 'R4', 'รอบ 6 ทีม') : ''}
    <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:8px;margin-bottom:12px;overflow-y:auto">
      ${rows.length ? rows.map(t => teamAdminRow(t)).join('') : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีทีมในระดับนี้</div>`}
    </div>
    <button data-act="adminNewTeamFromList" style="flex-shrink:0;width:100%;padding:9px;border-radius:9px;border:none;background:#db2777;color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">+ ลงทะเบียนทีมใหม่ (ระบุหัวหน้าทีม)</button>
  `)
}

// ---------------- match editor ----------------
function pickableSlots(level, code) {
  const def = BRACKET[level].find(b => b.code === code)
  const m = matchByCode(level, code)
  const slots = { a: null, b: null }
  const poolFrom = codes => winnersFrom(level, codes)
  if (def.pool) {
    const full = winnersFrom(level, POOL_SOURCES[level]?.[def.pool] || [])
    const usedA = poolRoundUsedIds(level, def.pool, code, 'a')
    const usedB = poolRoundUsedIds(level, def.pool, code, 'b')
    slots.a = { pool: full.filter(id => !usedA.includes(id)), value: m?.team_a_id || '' }
    slots.b = { pool: full.filter(id => !usedB.includes(id)), value: m?.team_b_id || '' }
    return slots
  }
  if (!def.refA) slots.a = { pool: S.teams.filter(t => t.level === level).map(t => t.id), value: m?.team_a_id || '' }
  else if (def.refA === 'FIRST_ROUND_BYE') slots.a = { pool: S.teams.filter(t => t.level === level).map(t => t.id), value: m?.team_a_id || cfg(`FIRST_ROUND_BYE_${level}`, '') }
  else if (def.refA === 'REC_1' || def.refA === 'REC_2') slots.a = { pool: poolFrom(RECOVER_SOURCES[level] || []), value: m?.team_a_id || '' }
  else if (def.refA === 'WC_1' || def.refA === 'WC_2') slots.a = { pool: poolFrom(WILDCARD_SOURCES[level] || []), value: m?.team_a_id || '' }
  else if (def.refA === 'LOTTERY_1') slots.a = { pool: losersFrom(level, LOTTERY_SOURCES[level] || []), value: m?.team_a_id || '' }
  if (!def.refB) slots.b = { pool: S.teams.filter(t => t.level === level).map(t => t.id), value: m?.team_b_id || '' }
  else if (def.refB === 'FIRST_ROUND_BYE') slots.b = { pool: S.teams.filter(t => t.level === level).map(t => t.id), value: m?.team_b_id || cfg(`FIRST_ROUND_BYE_${level}`, '') }
  else if (def.refB === 'REC_1' || def.refB === 'REC_2') slots.b = { pool: poolFrom(RECOVER_SOURCES[level] || []), value: m?.team_b_id || '' }
  else if (def.refB === 'WC_1' || def.refB === 'WC_2') slots.b = { pool: poolFrom(WILDCARD_SOURCES[level] || []), value: m?.team_b_id || '' }
  else if (def.refB === 'LOTTERY_1') slots.b = { pool: losersFrom(level, LOTTERY_SOURCES[level] || []), value: m?.team_b_id || '' }
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
// poolKey ว่าง = จับสลากรอบแรกจากทีมทั้งหมดของระดับชั้น | poolKey ระบุ = จับสลากรอบที่มาจากสระผู้ชนะรอบก่อนหน้า (POOL_SOURCES)
function liveDrawSlotSeq(level, strategy, poolKey) {
  const codes = poolKey
    ? BRACKET[level].filter(b => b.pool === poolKey).map(b => b.code)
    : BRACKET[level].filter(b => !b.refA && !b.pool).map(b => b.code)
  const byeSlot = supportsFirstRoundBye(level, poolKey) ? [{ code: 'BYE', side: 'bye', isBye: true }] : []
  if (strategy === 'byside') {
    return [...byeSlot, ...codes.map(code => ({ code, side: 'a' })), ...codes.map(code => ({ code, side: 'b' }))]
  }
  return [...byeSlot, ...codes.flatMap(code => [{ code, side: 'a' }, { code, side: 'b' }])]
}

// ทีมที่ใช้จับสลาก — รอบแรกใช้ทีมทั้งหมดของระดับชั้น, รอบสระใช้ผู้ชนะของนัดต้นสระ
function liveDrawTeamPool(level, poolKey) {
  if (!poolKey) return S.teams.filter(tm => tm.level === level).map(tm => tm.id)
  return winnersFrom(level, POOL_SOURCES[level]?.[poolKey] || [])
}

function poolRoundReady(level, poolKey) {
  const src = POOL_SOURCES[level]?.[poolKey] || []
  return src.length > 0 && src.every(c => resolveMatch(level, c).winnerId)
}

// ระดับชั้นที่กำลังใช้สาย 16 ทีม (มีรอบ 12 ทีม/6 ทีม แบบสระ) — ม.ปลายเสมอ, ม.ต้นเมื่อเลือกโหมด 16 ทีม
function usesSixteenTeamPools(level) { return level === 'HS' || (level === 'MS' && msTeamFormat() === '16') }

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
  const poolLabel = ld.pool ? (BRACKET[level].find(b => b.pool === ld.pool)?.round || '') : 'รอบแรก'
  if (!ld.started) {
    const teamIds = liveDrawTeamPool(level, ld.pool)
    const orderStrategy = ld.orderStrategy || 'bypair'
    const slotSeq = liveDrawSlotSeq(level, orderStrategy, ld.pool)
    const mismatch = teamIds.length > slotSeq.length
    const hasBye = slotSeq.some(slot => slot.isBye)
    const pairCount = slotSeq.filter(slot => !slot.isBye).length / 2
    const testMode = ld.testMode !== false // ค่าเริ่มต้นคือโหมดทดสอบ ปลอดภัยไว้ก่อน
    return `
    <div style="position:fixed;inset:0;z-index:80;background:${stageBg};color:#fff;display:flex;flex-direction:column">
      ${stageBar}
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center">
        <button data-act="closeLiveDraw" style="position:absolute;top:16px;right:16px;border:none;background:rgba(255,255,255,.1);color:#fff;width:34px;height:34px;border-radius:10px;cursor:pointer;font-size:15px">✕</button>
        <div style="font-size:30px;font-weight:800;margin-bottom:2px">🎬 จับสลากสด · ${esc(poolLabel)}</div>
        <div style="font-size:19px;font-weight:700;color:${t.base};margin-bottom:8px">${esc(cfg('EVENT_NAME', 'AZFUTSALCUP2025'))} · ${t.label}</div>
        <div style="font-size:13px;color:#9ca3af;margin-bottom:${hasBye ? '6px' : '16px'}">ทีมในโหล ${teamIds.length} ทีม · ${hasBye ? '1 สิทธิ์บาย + ' : ''}${pairCount} คู่ (${slotSeq.length} ฉลาก)</div>
        ${hasBye ? `<div style="font-size:12px;color:#fbbf24;font-weight:700;margin-bottom:16px">ฉลากแรกจะเป็นทีมที่ได้สิทธิ์เข้ารอบบาย จากนั้นจึงจับ 12 ทีมที่เหลือประกบคู่ M1-M6</div>` : ''}
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
          ? `<div style="margin-top:14px;padding:12px 16px;border-radius:10px;background:#7f1d1d;color:#fecaca;font-size:12.5px;max-width:320px">จำนวนทีม (${teamIds.length}) มากกว่าจำนวนช่อง (${slotSeq.length}) กรุณาตรวจสอบทีมก่อนเริ่มจับสลาก</div>`
          : `<button data-act="startLiveDraw" style="margin-top:18px;padding:14px 32px;border-radius:999px;border:none;background:linear-gradient(135deg,#4338ca,#6366f1);color:#fff;font-weight:800;font-size:15px;cursor:pointer">เริ่มจับสลาก</button>
             <div style="margin-top:10px;font-size:11px;color:#6b7280">สุ่มลำดับทั้งหมดทันทีด้วย crypto RNG แล้วเปิดเผยทีละทีมสดๆ ให้ทุกคนเห็น</div>`}
      </div>
    </div>`
  }
  const slotSeq = ld.slotSeq
  const codes = [...new Set(slotSeq.filter(s => !s.isBye).map(s => s.code))]
  const remaining = ld.order.length - ld.pickIndex
  const isDone = ld.pickIndex >= slotSeq.length || ld.pickIndex >= ld.order.length
  const remainingTeamIds = ld.order.slice(ld.pickIndex)
  const byeId = ld.filled.BYE_bye
  return `
  <div style="position:fixed;inset:0;z-index:80;background:${stageBg};color:#fff;display:flex;flex-direction:column;overflow-y:auto">
    ${stageBar}
    ${ld.testMode ? `<div style="background:#f59e0b;color:#111827;text-align:center;padding:6px;font-weight:800;font-size:12px;flex-shrink:0">🧪 โหมดทดสอบ — ไม่มีการบันทึกผลลงระบบจริง</div>` : ''}
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0">
      <div>
        <div style="font-weight:800;font-size:20px">🎬 จับสลากสด · ${t.label} · ${esc(poolLabel)}</div>
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
      ${slotSeq.some(slot => slot.isBye) ? `
      <div style="border:1px solid rgba(251,191,36,.55);border-radius:12px;padding:10px;background:rgba(245,158,11,.12)">
        <div style="font-size:10.5px;color:#fbbf24;font-weight:800;margin-bottom:6px">⭐ สิทธิ์เข้ารอบบาย</div>
        <div style="font-size:12.5px;font-weight:700;min-height:18px;overflow-wrap:break-word">${byeId ? esc(teamName(byeId)) : '<span style="color:#6b7280">จับเป็นฉลากแรก</span>'}</div>
      </div>` : ''}
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
  const teams = liveDrawTeamPool(ld.level, ld.pool)
  const orderStrategy = ld.orderStrategy || 'bypair'
  const slotSeq = liveDrawSlotSeq(ld.level, orderStrategy, ld.pool)
  const testMode = ld.testMode !== false
  S.liveDraw = { level: ld.level, pool: ld.pool, started: true, testMode, orderStrategy, order: cryptoShuffle(teams), slotSeq, pickIndex: 0, filled: {}, phase: 'idle', shaken: false }
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
// เสียงลูกบอลกลิ้งในโถพลาสติกต่อเนื่อง — ใช้ไฟล์เสียงจริงที่พี่ครูดาวน์โหลดมา (public/sounds/azfutsal-rolling-balls.mp3)
// วนซ้ำตลอดช่วงเขย่า มีเฟดอิน/เฟดเอาต์สั้นๆ กันเสียงเข้า-ออกกระตุก
let liveDrawRollAudio = null
function getRollAudio() {
  if (!liveDrawRollAudio) {
    const baseUrl = import.meta.env.BASE_URL || '/'
    liveDrawRollAudio = new Audio(`${baseUrl}sounds/azfutsal-rolling-balls.mp3`)
    liveDrawRollAudio.loop = true
  }
  return liveDrawRollAudio
}
let liveDrawRollFadeTimer = null
function startRollingSound() {
  const audio = getRollAudio()
  clearInterval(liveDrawRollFadeTimer)
  audio.currentTime = 0
  audio.volume = 0
  audio.play().catch(() => {})
  let v = 0
  liveDrawRollFadeTimer = setInterval(() => {
    v = Math.min(1, v + 0.15)
    audio.volume = v
    if (v >= 1) clearInterval(liveDrawRollFadeTimer)
  }, 30)
}
function stopRollingSound() {
  if (!liveDrawRollAudio) return
  const audio = liveDrawRollAudio
  clearInterval(liveDrawRollFadeTimer)
  let v = audio.volume
  liveDrawRollFadeTimer = setInterval(() => {
    v = Math.max(0, v - 0.2)
    audio.volume = v
    if (v <= 0) { clearInterval(liveDrawRollFadeTimer); audio.pause() }
  }, 25)
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
    b.style.transition = 'top .22s cubic-bezier(.4,0,.2,1), left .22s cubic-bezier(.4,0,.2,1)'
  })
  stopLiveDrawShake()
  startRollingSound()
  shakeBallsOnce()
  liveDrawShakeTimer = setInterval(shakeBallsOnce, 250) // เขย่าต่อเนื่องไม่หยุด จนกว่าจะกด "จับทีมถัดไป" (เร็วขึ้นตามที่ขอ)
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
  const slotLabel = slot.isBye ? '⭐ สิทธิ์เข้ารอบบาย' : `${slot.code} · ทีม ${slot.side.toUpperCase()}`
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
  if (slot.isBye) {
    if (!ld.testMode) {
      const key = `FIRST_ROUND_BYE_${ld.level}`
      const [{ error }, { error: clearError }] = await Promise.all([
        SB.from('azfutsal_config').upsert({ key, value: teamId }),
        SB.from('azfutsal_matches').update({ team_b_id: null }).eq('level', ld.level).in('match_code', ['M12', 'M13']),
      ])
      if (error || clearError) { azToast('บันทึกทีมบายไม่สำเร็จ: ' + (error?.message || clearError?.message)); draw(); return }
      S.config[key] = teamId
      S.matches[ld.level].forEach(match => {
        if (match.match_code === 'M12' || match.match_code === 'M13') match.team_b_id = null
      })
      azToast(`ทีม ${teamName(teamId)} ได้สิทธิ์เข้ารอบบาย`)
    }
    draw()
    return
  }
  const aId = ld.filled[`${slot.code}_a`], bId = ld.filled[`${slot.code}_b`]
  if (aId && bId && !ld.testMode) {
    const roundLabel = (BRACKET[ld.level].find(b => b.code === slot.code) || {}).round || ''
    await SB.from('azfutsal_matches').upsert(
      { level: ld.level, match_code: slot.code, round: roundLabel, team_a_id: aId, team_b_id: bId },
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
      ${evs.length ? evs.map(e => `<span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;background:${bg};border-radius:999px;padding:3px 4px 3px 10px">${esc(eventPlayerName(e.player_id))}${e.minute != null ? ` <span style="opacity:.7">(${e.minute}')</span>` : ''}${type === 'goal' ? `<button data-act="toggleEventPenalty" data-id="${e.id}" title="ประตูจากจุดโทษ" style="border:1px solid ${e.is_penalty ? color : '#d1d5db'};background:${e.is_penalty ? color : '#fff'};color:${e.is_penalty ? '#fff' : '#9ca3af'};border-radius:999px;width:16px;height:16px;font-size:9px;font-weight:800;line-height:1;cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:0">P</button>` : ''}<button data-act="removeMatchEvent" data-id="${e.id}" style="border:none;background:none;color:#9ca3af;cursor:pointer;font-size:12px;line-height:1;padding:2px">✕</button></span>`).join('') : `<span style="font-size:11px;color:#c1c5cc">-</span>`}
    </div>
  </div>`
}

// เหลือเฉพาะคนที่สแกน QR รายงานตัวแล้วจริงสำหรับนัดนี้ — กันเลือกผิดคน/นับประตูให้คนที่ไม่ได้ลงเล่น
// ถ้าลืมสแกนจริงๆ ให้เปิดกล้องสแกนรายงานตัวเพิ่มตรงนั้นแทน (ไม่ทำ toggle "แสดงทั้งหมด" ให้ซับซ้อนเกินจำเป็น)
function eventPickerRoster() {
  const { team } = S.eventPicker
  const { level, code } = S.editMatch
  const r = resolveMatch(level, code)
  const teamId = team === 'a' ? r.teamAId : r.teamBId
  const checkedIds = new Set(S.checkins.filter(c => c.level === level && c.match_code === code && c.team_id === teamId).map(c => c.player_id))
  return S.players.filter(p => p.team_id === teamId && checkedIds.has(p.id))
}

function eventPickerPlayerList() {
  const roster = eventPickerRoster()
  if (!roster.length) return `<div style="font-size:11.5px;color:#9ca3af;padding:6px 0">ยังไม่มีใครในทีมนี้รายงานตัวสำหรับนัดนี้ — สแกน QR รายงานตัวก่อนจึงจะเลือกได้</div>`
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
  const penaltyMode = !!S.editMatch.penaltyMode
  const r = resolveMatch(level, code)
  const slots = pickableSlots(level, code)
  const goalsA = r.teamAId ? matchEventCounts(level, code, r.teamAId).goal : 0
  const goalsB = r.teamBId ? matchEventCounts(level, code, r.teamBId).goal : 0
  const hasAnyGoalLogged = goalsA > 0 || goalsB > 0
  // สกอร์ต้องซิงก์กับจำนวนผู้ทำประตูแบบเรียลไทม์เสมอไม่ว่าจะเคยกดบันทึกไปแล้วกี่ครั้ง (ไม่ใช่แค่ครั้งแรกที่ยังไม่บันทึก)
  // ห้าม fallback ไปที่ m.score_a ที่เคยบันทึกไว้ก่อน เพราะจะทำให้ลบผู้ทำประตูจนเหลือ 0 แล้วสกอร์ค้างเป็นค่าเก่าที่เคยบันทึก
  const scoreAVal = goalsA
  const scoreBVal = goalsB
  const teamField = (label, slot, resolvedName) => slot
    ? `<label style="font-size:11.5px;color:#6b7280;flex:1">${label}<select id="mx-team${label}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px"><option value="">-</option>${slot.pool.map(id => `<option value="${id}" ${String(slot.value) === String(id) ? 'selected' : ''}>${esc(teamName(id))}</option>`).join('')}</select></label>`
    : `<div style="font-size:11.5px;color:#6b7280;flex:1">${label}<div style="margin-top:4px;font-size:13px;font-weight:700">${esc(resolvedName) || '-'}</div></div>`
  return simpleModal(`${code} · ${T[level].label}`, `
    <div style="display:flex;flex-direction:column;gap:10px">
      ${azSyncBadge() ? `<div>${azSyncBadge()}</div>` : ''}
      ${r.teamAId && r.teamBId ? `
      <div style="display:flex;flex-direction:column;align-items:center;gap:10px;background:#111827;border-radius:12px;padding:12px">
        ${m.clock_status && m.clock_status !== 'not_started' ? matchClockDisplay(m) : `<span style="font-size:11.5px;color:#9ca3af;font-weight:700">ยังไม่เริ่มจับเวลา</span>`}
        ${matchClockControls(level, code, m)}
      </div>` : ''}
      <div style="display:flex;gap:10px">${teamField('A', slots.a, r.teamA)}${teamField('B', slots.b, r.teamB)}</div>
      <div style="display:flex;gap:10px">
        <label style="font-size:11.5px;color:#6b7280;flex:1">สกอร์ A<input id="mx-scoreA" type="number" min="0" value="${scoreAVal}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
        <label style="font-size:11.5px;color:#6b7280;flex:1">สกอร์ B<input id="mx-scoreB" type="number" min="0" value="${scoreBVal}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:13px"/></label>
      </div>
      ${hasAnyGoalLogged ? `<div style="font-size:10.5px;color:#9ca3af;margin-top:-4px">* สกอร์ซิงก์ตามจำนวนผู้ทำประตูที่บันทึกไว้เสมอ (เพิ่ม/ลบผู้ทำประตูแล้วสกอร์จะอัปเดตตาม) แก้ไขเองได้ก่อนกดบันทึก ยังไม่ถือว่าจบการแข่งขันจนกว่าจะกดบันทึก</div>` : ''}
      <button data-act="togglePenaltyShootoutMode" style="width:100%;padding:10px;border-radius:10px;border:1px solid ${penaltyMode ? '#7c3aed' : '#cbd5e1'};background:${penaltyMode ? '#7c3aed' : 'transparent'};color:${penaltyMode ? '#fff' : '#64748b'};font-size:12.5px;font-weight:800;cursor:pointer">${penaltyMode ? '✓ เปิดโหมดตัดสินด้วยการยิงจุดโทษอยู่ · กดเพื่อปิด' : '🎯 เปิดโหมดตัดสินด้วยการยิงจุดโทษ'}</button>
      ${penaltyMode ? `
      <div style="padding:11px;border:1px solid #c4b5fd;border-radius:12px;background:#f5f3ff">
        <div style="font-size:11.5px;font-weight:800;color:#6d28d9;margin-bottom:3px">ผลการดวลจุดโทษ</div>
        <div style="font-size:10.5px;color:#7c3aed;margin-bottom:9px">ใช้เมื่อสกอร์เวลาปกติเสมอเท่านั้น · ไม่ต้องบันทึกชื่อผู้ยิง และไม่นับรวมดาวซัลโว</div>
        <div style="display:flex;gap:10px">
          <label style="font-size:11.5px;color:#6b7280;flex:1">จุดโทษ A<input id="mx-penaltyScoreA" type="number" min="0" value="${esc(m.penalty_score_a ?? '')}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #c4b5fd;border-radius:9px;padding:9px 8px;font-size:16px;font-weight:800;text-align:center"/></label>
          <label style="font-size:11.5px;color:#6b7280;flex:1">จุดโทษ B<input id="mx-penaltyScoreB" type="number" min="0" value="${esc(m.penalty_score_b ?? '')}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #c4b5fd;border-radius:9px;padding:9px 8px;font-size:16px;font-weight:800;text-align:center"/></label>
        </div>
      </div>` : ''}
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
      ${r.teamAId && r.teamBId && (S.identity.isAdmin || (S.identity.scopes || []).includes('checkin')) ? (() => {
        const checkedCount = S.checkins.filter(c => c.level === level && c.match_code === code).length
        const totalCount = S.players.filter(p => p.team_id === r.teamAId || p.team_id === r.teamBId).length
        return `<button data-act="openCheckinScanner" data-level="${level}" data-code="${code}" style="padding:9px;border:none;border-radius:10px;background:linear-gradient(135deg,#0ea5e9,#6366f1);color:#fff;font-weight:700;font-size:12.5px;cursor:pointer">📷 สแกน QR รายงานตัว (${checkedCount}/${totalCount})</button>
        <button data-act="openCheckinLiveDisplay" data-level="${level}" data-code="${code}" style="padding:9px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:700;font-size:12.5px;cursor:pointer">🖥️ จอแสดงผลสด (เปิดจอที่สองให้นักกีฬาดู)</button>`
      })() : ''}
      <button data-act="saveMatch" data-level="${level}" data-code="${code}" style="margin-top:4px;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">บันทึก</button>
      <button data-act="printMatchForm" data-level="${level}" data-code="${code}" style="padding:9px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;color:#374151;font-weight:700;font-size:12.5px;cursor:pointer">🖨️ พิมพ์แบบฟอร์มบันทึกผลสำรอง (ออฟไลน์)</button>
    </div>`)
}

// จับคู่รอบสระ (12/6 ทีม) ด้วยตนเองทีละคู่ในหน้าเดียว — ใช้หลังจับฉลากสดนอกระบบ (กล่อง/ถุงจริง) แล้วมาพิมพ์ผลใส่ทีเดียว
function manualPoolAssignModal() {
  const { level, pool } = S.manualPoolAssign
  const codes = BRACKET[level].filter(b => b.pool === pool).map(b => b.code)
  const roundLabel = (BRACKET[level].find(b => b.pool === pool) || {}).round || ''
  return simpleModal(`กรอกเอง (Manual) · ${esc(roundLabel)} · ${T[level].label}`, `
    <div style="display:flex;flex-direction:column;gap:10px">
      <div style="font-size:11.5px;color:#6b7280">เลือกทีมของแต่ละคู่เอง เช่น หลังจับฉลากสดนอกระบบแล้วมาบันทึกผล ห้ามเลือกทีมซ้ำกันข้ามคู่</div>
      ${codes.map(code => {
        const slots = pickableSlots(level, code)
        const opts = slot => `<option value="">- เลือกทีม -</option>${slot.pool.map(id => `<option value="${id}" ${String(slot.value) === String(id) ? 'selected' : ''}>${esc(teamName(id))}</option>`).join('')}`
        return `
        <div style="border:1px solid #e5e7eb;border-radius:12px;padding:10px">
          <div style="font-size:11px;color:#9ca3af;font-weight:700;margin-bottom:6px">${code}</div>
          <div style="display:flex;gap:8px;align-items:center">
            <select id="mp-${code}-a" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px">${opts(slots.a)}</select>
            <span style="font-size:11px;color:#9ca3af;flex-shrink:0">vs</span>
            <select id="mp-${code}-b" style="flex:1;min-width:0;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12.5px">${opts(slots.b)}</select>
          </div>
        </div>`
      }).join('')}
      <button data-act="saveManualPoolAssign" style="margin-top:4px;padding:11px;border:none;border-radius:10px;background:#db2777;color:#fff;font-weight:700;font-size:14px;cursor:pointer">บันทึกทั้งหมด</button>
    </div>`)
}

// ---------------- staff search ----------------
async function loadStaffList() {
  const { data: rows } = await SB.from('azfutsal_admins').select('id, profile_id, note, created_at, scopes').order('created_at')
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
    return { id: r.id, name, role: t ? 'ครู' : (st ? 'นักเรียน' : (isStandalone ? 'บัญชีสำรอง' : '-')), isSelf, scopes: r.scopes && r.scopes.length ? r.scopes : ['full'] }
  })
  const el = document.getElementById('az-staff-list')
  if (!el) return
  const fullAdminCount = S.staffList.filter(s => s.scopes.includes('full')).length
  el.innerHTML = S.staffList.length ? S.staffList.map(s => {
    const isLastFullAdmin = s.scopes.includes('full') && fullAdminCount <= 1
    const scopeLabel = s.scopes.includes('full') ? 'สิทธิ์เต็มรูปแบบ' : s.scopes.map(k => SCOPE_OPTIONS.find(o => o.key === k)?.label).filter(Boolean).join(' + ')
    return `
    <div style="padding:7px 0;border-bottom:1px solid #f3f4f6">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <div style="min-width:0"><div style="font-size:13px;font-weight:700">${esc(s.name)}${s.isSelf ? ' <span style="color:#9ca3af;font-weight:600">(คุณ)</span>' : ''}</div><div style="font-size:11px;color:#6b7280">${s.role} · ${esc(scopeLabel)}</div></div>
        <div style="display:flex;gap:8px;flex-shrink:0">
          <button data-act="editStaffScope" data-id="${s.id}" data-name="${esc(s.name)}" data-scopes="${esc(s.scopes.join(','))}" style="border:none;background:none;color:#4338ca;font-size:11.5px;cursor:pointer;font-weight:600">แก้ไขสิทธิ์</button>
          ${isLastFullAdmin ? `<span style="font-size:10.5px;color:#9ca3af" title="ต้องมีแอดมินเต็มรูปแบบอย่างน้อย 1 คนเสมอ">ลบไม่ได้</span>` : `<button data-act="removeStaff" data-id="${s.id}" data-self="${s.isSelf ? '1' : '0'}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>`}
        </div>
      </div>
    </div>`
  }).join('') : `<div style="font-size:12px;color:#9ca3af">ยังไม่มีผู้ดูแลระบบ</div>`
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
function handleSaveMatch(level, code) {
  const r = resolveMatch(level, code)
  const selA = gid('mx-teamA'), selB = gid('mx-teamB')
  const teamAId = selA ? (selA.value || null) : r.teamAId
  const teamBId = selB ? (selB.value || null) : r.teamBId
  const scoreA = numOrNull(gid('mx-scoreA').value)
  const scoreB = numOrNull(gid('mx-scoreB').value)
  const penaltyMode = !!S.editMatch?.penaltyMode
  const penaltyScoreA = penaltyMode ? numOrNull(gid('mx-penaltyScoreA')?.value) : null
  const penaltyScoreB = penaltyMode ? numOrNull(gid('mx-penaltyScoreB')?.value) : null
  if ((scoreA !== null && scoreA < 0) || (scoreB !== null && scoreB < 0)) { azToast('สกอร์ต้องไม่ติดลบ'); return }
  if ((scoreA === null) !== (scoreB === null)) { azToast('กรุณากรอกสกอร์เวลาปกติให้ครบทั้งสองทีม'); return }
  if (penaltyMode) {
    if (!teamAId || !teamBId) { azToast('กรุณาระบุทีมทั้งสองฝั่งก่อนบันทึกผลจุดโทษ'); return }
    if (scoreA === null || scoreB === null) { azToast('กรุณากรอกสกอร์เวลาปกติก่อนบันทึกผลจุดโทษ'); return }
    if (scoreA !== scoreB) { azToast('โหมดจุดโทษใช้ได้เมื่อสกอร์เวลาปกติเสมอกันเท่านั้น'); return }
    if (penaltyScoreA === null || penaltyScoreB === null) { azToast('กรุณากรอกผลการดวลจุดโทษให้ครบทั้งสองทีม'); return }
    if (penaltyScoreA < 0 || penaltyScoreB < 0) { azToast('ผลการดวลจุดโทษต้องไม่ติดลบ'); return }
    if (penaltyScoreA === penaltyScoreB) { azToast('ผลการดวลจุดโทษต้องมีผู้ชนะ ห้ามเสมอ'); return }
  } else if (scoreA !== null && scoreB !== null && scoreA === scoreB) {
    azToast('สกอร์เสมอ กรุณาเปิดโหมดตัดสินด้วยการยิงจุดโทษ'); return
  }
  if (scoreA !== null && scoreB !== null && teamAId && teamBId && cfg('REQUIRE_EVENTS_BEFORE_SCORE', '0') === '1') {
    const goalsA = matchEventCounts(level, code, teamAId).goal
    const goalsB = matchEventCounts(level, code, teamBId).goal
    if (goalsA !== scoreA || goalsB !== scoreB) {
      azToast(`ผู้ทำประตูที่บันทึกไว้ (${goalsA}-${goalsB}) ไม่ตรงกับสกอร์ (${scoreA}-${scoreB}) กรุณาระบุผู้ทำประตูให้ครบก่อนบันทึก`)
      return
    }
  }
  const payload = {
    level, match_code: code,
    round: (BRACKET[level].find(b => b.code === code) || {}).round || '',
    score_a: scoreA, score_b: scoreB,
    is_penalty_shootout: penaltyMode,
    penalty_score_a: penaltyScoreA,
    penalty_score_b: penaltyScoreB,
    winner_team_id: null,
    loser_team_id: null,
    ready_time: gid('mx-ready').value || null, kickoff_time: gid('mx-kickoff').value || null,
    updated_at: new Date().toISOString(),
  }
  if (selA) payload.team_a_id = selA.value || null
  if (selB) payload.team_b_id = selB.value || null
  if (scoreA !== null && scoreB !== null && teamAId && teamBId) {
    const teamAWins = penaltyMode ? penaltyScoreA > penaltyScoreB : scoreA > scoreB
    payload.winner_team_id = teamAWins ? teamAId : teamBId
    payload.loser_team_id = teamAWins ? teamBId : teamAId
  }
  const m = matchByCode(level, code)
  if (m) Object.assign(m, payload)
  else S.matches[level].push(payload)
  // ยุบรวมกับ saveMatch ที่ยังไม่ sync ของนัดเดียวกัน เก็บแค่ค่าล่าสุดพอ (upsert ทับกันได้อยู่แล้ว ไม่ต้อง replay ทุกครั้ง)
  let q = azQueueGet().filter(item => !(item.type === 'saveMatch' && item.payload.level === level && item.payload.match_code === code))
  q.push({ localId: azMakeLocalId(), type: 'saveMatch', payload })
  azQueueSet(q)
  S.editMatch = null
  draw()
  azTriggerBackgroundSync()
  azToast('บันทึกผลการแข่งขันแล้ว')
}

function handleAddMatchEvent(playerId) {
  if (!S.editMatch || !S.eventPicker) return
  const { level, code } = S.editMatch
  const { team, type } = S.eventPicker
  const r = resolveMatch(level, code)
  const teamId = team === 'a' ? r.teamAId : r.teamBId
  if (!teamId) return
  const minute = matchClockMinute(matchByCode(level, code))
  const localId = azMakeLocalId()
  const eventPayload = { level, match_code: code, team_id: teamId, player_id: playerId, event_type: type, minute, is_penalty: false }
  S.matchEvents.push({ id: localId, ...eventPayload, created_at: new Date().toISOString() })
  const q = azQueueGet()
  q.push({ localId, type: 'insertEvent', localEventId: localId, payload: eventPayload })
  azQueueSet(q)
  draw()
  azTriggerBackgroundSync()
  // เปิดตัวเลือกผู้เล่นค้างไว้ต่อ เพื่อกดเพิ่มคนถัดไปได้เร็วๆ ไม่ต้องเปิดใหม่ทุกครั้ง
}

function handleRemoveMatchEvent(id) {
  const idx = S.matchEvents.findIndex(e => e.id === id)
  if (idx !== -1) S.matchEvents.splice(idx, 1)
  let q = azQueueGet()
  if (String(id).startsWith('local_')) {
    // ยังไม่เคย sync ขึ้น server เลย แค่ยกเลิกรายการที่ค้างคิวไว้ ไม่ต้องส่ง delete จริง
    q = q.filter(item => item.localEventId !== id)
  } else {
    q.push({ localId: azMakeLocalId(), type: 'deleteEvent', payload: { id } })
  }
  azQueueSet(q)
  draw()
  azTriggerBackgroundSync()
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
  const firstCodes = BRACKET[level].filter(b => !b.refA && !b.pool).map(b => b.code)
  const requiredTeams = firstCodes.length * 2
  const hasBye = supportsFirstRoundBye(level)
  const maxTeams = requiredTeams + (hasBye ? 1 : 0)
  if (teams.length < requiredTeams) { azToast(`ต้องมีทีมอย่างน้อย ${requiredTeams} ทีมสำหรับรอบแรก`); return }
  if (teams.length > maxTeams) { azToast(`รอบแรกมี ${requiredTeams} ช่อง รองรับทีมบายเพิ่มได้สูงสุด 1 ทีม`); return }
  const shuffled = cryptoShuffle(teams)
  const byeTeamId = hasBye ? shuffled.shift() : null
  const rows = firstCodes.map((code, i) => ({ level, match_code: code, round: 'รอบแรก', team_a_id: shuffled[i * 2], team_b_id: shuffled[i * 2 + 1] }))
  if (byeTeamId) {
    const key = `FIRST_ROUND_BYE_${level}`
    const { error: byeError } = await SB.from('azfutsal_config').upsert({ key, value: byeTeamId })
    if (byeError) { azToast('บันทึกทีมบายไม่สำเร็จ: ' + byeError.message); return }
    const { error: clearError } = await SB.from('azfutsal_matches').update({ team_b_id: null }).eq('level', level).in('match_code', ['M12', 'M13'])
    if (clearError) { azToast('เตรียมช่องทีมบายไม่สำเร็จ: ' + clearError.message); return }
  }
  const { error } = await SB.from('azfutsal_matches').upsert(rows, { onConflict: 'level,match_code' })
  if (error) { azToast('สุ่มจับคู่ไม่สำเร็จ: ' + error.message); return }
  await refresh()
  azToast(byeTeamId ? `ทีม ${teamName(byeTeamId)} ได้บาย · สุ่มประกบคู่ 12 ทีมที่เหลือแล้ว` : 'สุ่มจับคู่รอบแรกแล้ว')
}

// จับคู่รอบสระ (12/6 ทีม) อัตโนมัติแบบจัดอันดับ (seeding): เรียงทีมตามผลงานจริงที่ผ่านมา (ชนะ/ผลต่างประตู/ได้ประตู — สูตรเดียวกับ computeTeamStats)
// แล้วจับคู่แบบ 1 พบบ๊วย, 2 พบรองบ๊วย, ... กันทีมท็อปชนกันเองเร็วเกินไป
async function handleAutoSeedPool(level, poolKey) {
  if (!poolRoundReady(level, poolKey)) { azToast('รอบก่อนหน้ายังแข่งไม่ครบ จับคู่รอบนี้ไม่ได้'); return }
  const poolTeamIds = winnersFrom(level, POOL_SOURCES[level]?.[poolKey] || [])
  const ranked = computeTeamStats(level).map(t => t.id).filter(id => poolTeamIds.includes(id))
  poolTeamIds.forEach(id => { if (!ranked.includes(id)) ranked.push(id) }) // เผื่อทีมที่ยังไม่มีสถิติ (เช่น walkover) ต่อท้ายไว้
  const codes = BRACKET[level].filter(b => b.pool === poolKey).map(b => b.code)
  const n = ranked.length
  const roundLabel = (BRACKET[level].find(b => b.pool === poolKey) || {}).round || ''
  const rows = codes.map((code, i) => ({ level, match_code: code, round: roundLabel, team_a_id: ranked[i], team_b_id: ranked[n - 1 - i] }))
  const { error } = await SB.from('azfutsal_matches').upsert(rows, { onConflict: 'level,match_code' })
  if (error) { azToast('จัดคู่อัตโนมัติไม่สำเร็จ: ' + error.message); return }
  await refresh()
  azToast('จัดคู่ตามอันดับแล้ว (อันดับดี พบ อันดับรอง)')
}

async function handleSaveManualPoolAssign() {
  const { level, pool } = S.manualPoolAssign
  const codes = BRACKET[level].filter(b => b.pool === pool).map(b => b.code)
  const roundLabel = (BRACKET[level].find(b => b.pool === pool) || {}).round || ''
  const rows = []
  const seen = new Set()
  for (const code of codes) {
    const aId = gid(`mp-${code}-a`).value || null
    const bId = gid(`mp-${code}-b`).value || null
    if (!aId || !bId) { azToast(`กรุณาเลือกทีมให้ครบทุกคู่ (ขาด ${code})`); return }
    if (aId === bId || seen.has(aId) || seen.has(bId)) { azToast('มีทีมถูกเลือกซ้ำกันมากกว่า 1 คู่ กรุณาตรวจสอบ'); return }
    seen.add(aId); seen.add(bId)
    rows.push({ level, match_code: code, round: roundLabel, team_a_id: aId, team_b_id: bId })
  }
  const { error } = await SB.from('azfutsal_matches').upsert(rows, { onConflict: 'level,match_code' })
  if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
  S.manualPoolAssign = null
  await refresh()
  azToast('บันทึกการจับคู่แล้ว')
}

async function handleCreateTeam(adminMode) {
  if (S.teamCreating) return // กันกดซ้ำรัวๆ ระหว่างกำลังสร้าง (สาเหตุที่เคยทำให้เกิดทีมซ้ำ 4 แถว)
  const name = gid('new-team-name').value.trim()
  const level = gid('new-team-level').value
  if (!name) { azToast('กรุณากรอกชื่อทีม'); return }
  if (!adminMode && cfg(`REGISTRATION_OPEN_${level}`, '0') !== '1') { azToast(`ขณะนี้ปิดรับสมัครทีม${T[level].label}แล้ว`); return }
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
  if (!adminMode && level === 'HS') {
    const { count } = await SB.from('azfutsal_teams').select('id', { count: 'exact', head: true }).eq('level', 'HS').eq('is_organizer', false)
    const hsQuota = Number(cfg('MAX_TEAMS_HS', '14') || 14)
    if ((count || 0) >= hsQuota) {
      S.teamCreating = false
      azToast('ทีม ม.ปลาย เต็มโควตาแล้ว')
      draw()
      return
    }
  }
  const { data, error } = await SB.from('azfutsal_teams').insert({ name, level, captain_student_id: captainId }).select('id').single()
  S.teamCreating = false
  if (error) {
    const msg = error.code === '23505' ? 'นักเรียนคนนี้เป็นหัวหน้าทีมอยู่แล้ว สร้างทีมซ้ำไม่ได้'
      : error.message?.includes('HS_TEAM_QUOTA_FULL') ? 'ทีม ม.ปลาย เต็มโควตาแล้ว'
      : 'สร้างทีมไม่สำเร็จ: ' + error.message
    azToast(msg)
    draw()
    return
  }
  if (level === 'HS') {
    const { count } = await SB.from('azfutsal_teams').select('id', { count: 'exact', head: true }).eq('level', 'HS').eq('is_organizer', false)
    const hsQuota = Number(cfg('MAX_TEAMS_HS', '14') || 14)
    if ((count || 0) >= hsQuota && cfg('REGISTRATION_OPEN_HS', '0') === '1') {
      await SB.from('azfutsal_config').upsert({ key: 'REGISTRATION_OPEN_HS', value: '0' })
    }
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
  S.tab = S.identity.isAdmin ? 'admin' : (S.identity.scopes || []).length ? 'staff' : 'schedule'
  draw()
  azToast('เข้าสู่ระบบแล้ว')
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
      if (quota > 0 && !team.is_organizer) {
        const verifiedCount = S.payments.filter(p =>
          p.status === 'verified' && p.team_id !== team.id &&
          S.teams.find(t2 => t2.id === p.team_id)?.level === team.level &&
          !S.teams.find(t2 => t2.id === p.team_id)?.is_organizer
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
    if (act === 'toggleTheme') {
      S.theme = S.theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('az_theme', S.theme)
      draw()
      return
    }
    if (act === 'tab') { S.tab = btn.dataset.tab; draw(); return }
    if (act === 'setScheduleMode') { S.scheduleMode = btn.dataset.v === 'bracket' ? 'bracket' : 'timeline'; draw(); return }
    if (act === 'setScheduleDay') { S.scheduleDay = btn.dataset.v === '2' ? 2 : 1; draw(); return }
    if (act === 'setBracketLevel') { S.bracketLevel = btn.dataset.v === 'HS' ? 'HS' : 'MS'; draw(); return }
    if (act === 'jumpBracketRound') {
      const scroller = document.getElementById('az-bracket-scroll')
      const target = document.getElementById(`az-bracket-round-${btn.dataset.v}`)
      if (scroller && target) scroller.scrollTo({ left: target.offsetLeft - 2, behavior: 'smooth' })
      return
    }
    if (act === 'setLevel') { S.filterLevel = btn.dataset.v; draw(); return }
    if (act === 'setStats') { S.statsLevel = btn.dataset.v; draw(); return }
    if (act === 'setTeamStatusLevel') { S.teamStatusLevel = btn.dataset.v; draw(); return }
    if (act === 'toggleTeamRoster') { S.teamStatusExpanded = S.teamStatusExpanded === btn.dataset.id ? null : btn.dataset.id; draw(); return }
    if (act === 'adminSec') { S.adminSection = btn.dataset.v; draw(); return }
    if (act === 'adminGroup') { const g = ADMIN_GROUPS.find(g => g.id === btn.dataset.v); if (g) S.adminSection = g.sections[0][0]; draw(); return }
    if (act === 'myTeamTab') { S.myTeamTab = btn.dataset.v; draw(); return }
    if (act === 'adminTeamLevel') { S.adminTeamLevel = btn.dataset.v; draw(); return }
    if (act === 'adminAthleteLevel') { S.adminAthleteLevel = btn.dataset.v; draw(); return }
    if (act === 'downloadAthletesExcel') { downloadAthletesExcel(btn.dataset.level); return }
    if (act === 'adminPaymentsLevel') { S.adminPaymentsLevel = btn.dataset.v; draw(); return }
    if (act === 'closeModal') { S.editMatch = null; S.eventPicker = null; S.eventPickerFilter = ''; S.certModalOpen = false; S.certFullscreen = false; S.rejectPaymentId = null; S.rejectReasonText = ''; S.staffScopeEdit = null; S.manualPoolAssign = null; draw(); return }
    if (act === 'confirmActionNo') { S.pendingConfirm = null; draw(); return }
    if (act === 'confirmActionYes') {
      const pc = S.pendingConfirm
      S.pendingConfirm = null
      draw()
      if (pc?.run) await pc.run()
      return
    }
    if (act === 'account') {
      if (!S.identity.session) { goToLogin(); return }
      if (!S.identity.student) { azToast('หน้านี้สำหรับนักเรียน (หัวหน้าทีม/ตัวแทนทีม) เท่านั้น'); return }
      if (!S.teamCodeInput) S.teamCodeInput = localStorage.getItem('az_team_code') || ''
      S.tab = 'myteam'; draw(); return
    }
    if (act === 'admin-gear') {
      if (S.identity.isAdmin) { S.tab = 'admin'; draw(); return }
      if ((S.identity.scopes || []).length) { S.tab = 'staff'; draw(); return }
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
    if (act === 'editMatch') {
      const match = matchByCode(btn.dataset.level, btn.dataset.code)
      S.editMatch = { level: btn.dataset.level, code: btn.dataset.code, penaltyMode: !!match?.is_penalty_shootout }
      S.eventPicker = null; S.eventPickerFilter = ''; draw(); return
    }
    if (act === 'togglePenaltyShootoutMode') { S.editMatch.penaltyMode = !S.editMatch.penaltyMode; draw(); return }
    if (act === 'openEventPicker') { S.eventPicker = { team: btn.dataset.team, type: btn.dataset.type }; S.eventPickerFilter = ''; draw(); return }
    if (act === 'closeEventPicker') { S.eventPicker = null; S.eventPickerFilter = ''; draw(); return }
    if (act === 'pickEventPlayer') { await handleAddMatchEvent(btn.dataset.player); return }
    if (act === 'removeMatchEvent') { await handleRemoveMatchEvent(btn.dataset.id); return }
    if (act === 'togglePlayerEventDetail') { S.expandedPlayerId = S.expandedPlayerId === btn.dataset.id ? null : btn.dataset.id; draw(); return }
    if (act === 'toggleEventPenalty') {
      const ev = S.matchEvents.find(e => e.id === btn.dataset.id)
      if (!ev) return
      ev.is_penalty = !ev.is_penalty
      let q = azQueueGet()
      if (String(ev.id).startsWith('local_')) {
        const qi = q.find(item => item.localEventId === ev.id)
        if (qi) qi.payload.is_penalty = ev.is_penalty
      } else {
        q.push({ localId: azMakeLocalId(), type: 'togglePenalty', payload: { id: ev.id, is_penalty: ev.is_penalty } })
      }
      azQueueSet(q)
      draw()
      azTriggerBackgroundSync()
      return
    }
    if (act === 'saveMatch') { await handleSaveMatch(btn.dataset.level, btn.dataset.code); return }
    if (act === 'seedMatches') { await handleSeedMatches(btn.dataset.level); return }
    if (act === 'randomDraw') { await handleRandomDraw(btn.dataset.level); return }
    if (act === 'setMsFormat') {
      if (S.matches.MS.length) { azToast('สร้างตารางแข่ง ม.ต้น ไปแล้ว เปลี่ยนรูปแบบไม่ได้'); return }
      const { error } = await SB.from('azfutsal_config').upsert({ key: 'MS_TEAM_FORMAT', value: btn.dataset.v })
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      await refresh(); azToast(`ตั้งรูปแบบสายการแข่ง ม.ต้น เป็น ${btn.dataset.v} ทีมแล้ว`); return
    }
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
    if (act === 'lookupTeamCode') {
      const code = gid('team-code-input')?.value.trim().toUpperCase()
      if (!code) return
      const found = S.teams.find(t => (t.team_code || '').toUpperCase() === code)
      S.teamCodeLookupResult = found || 'notfound'
      if (found) localStorage.setItem('az_team_code', code)
      draw(); return
    }
    if (act === 'exitTeamCodeView') { S.teamCodeLookupResult = null; S.teamCodeInput = ''; draw(); return }
    if (act === 'setCaptain') { await handleSetRole(btn.dataset.team, Number(btn.dataset.student), 'captain'); return }
    if (act === 'setViceCaptain') { await handleSetRole(btn.dataset.team, Number(btn.dataset.student), 'vice_captain'); return }
    if (act === 'startEditTeamName') { S.editingTeamName = true; S.editTeamNameValue = btn.dataset.name; draw(); return }
    if (act === 'cancelEditTeamName') { S.editingTeamName = false; S.editTeamNameValue = ''; draw(); return }
    if (act === 'saveTeamName') {
      const name = gid('edit-team-name-input')?.value.trim()
      if (!name) { azToast('กรุณากรอกชื่อทีม'); return }
      const { error } = await SB.from('azfutsal_teams').update({ name }).eq('id', btn.dataset.team)
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      S.editingTeamName = false; S.editTeamNameValue = ''
      await refresh(); azToast('บันทึกชื่อทีมแล้ว'); return
    }
    if (act === 'startEditJersey') { S.editingJerseyId = btn.dataset.id; S.editJerseyValue = btn.dataset.v; draw(); return }
    if (act === 'cancelEditJersey') { S.editingJerseyId = null; S.editJerseyValue = ''; draw(); return }
    if (act === 'saveJersey') {
      const v = gid('edit-jersey-input')?.value
      const jersey = v === '' || v === undefined ? null : Number(v)
      const { error } = await SB.from('azfutsal_players').update({ jersey_number: jersey }).eq('id', btn.dataset.id)
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      S.editingJerseyId = null; S.editJerseyValue = ''
      await refresh(); azToast('บันทึกเบอร์เสื้อแล้ว'); return
    }
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
    if (act === 'toggleRequireEvents') {
      const cur = cfg('REQUIRE_EVENTS_BEFORE_SCORE', '0') === '1'
      await SB.from('azfutsal_config').upsert({ key: 'REQUIRE_EVENTS_BEFORE_SCORE', value: cur ? '0' : '1' })
      await refresh(); return
    }
    if (act === 'toggleCert') {
      const cur = cfg('CERT_ENABLED', '1') === '1'
      await SB.from('azfutsal_config').upsert({ key: 'CERT_ENABLED', value: cur ? '0' : '1' })
      await refresh(); return
    }
    if (act === 'toggleRegistration') {
      const level = btn.dataset.level
      const key = `REGISTRATION_OPEN_${level}`
      const cur = cfg(key, '0') === '1'
      await SB.from('azfutsal_config').upsert({ key, value: cur ? '0' : '1' })
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
        { key: 'OPERATION_FEE', value: gid('reg-opfee').value },
        { key: 'MAX_TEAMS_MS', value: gid('reg-quota-ms').value || '' },
        { key: 'MAX_TEAMS_HS', value: gid('reg-quota-hs').value || '' },
        { key: 'REGISTER_EDIT_DEADLINE', value: gid('reg-deadline').value || '' },
      ])
      await refresh(); azToast('บันทึกการตั้งค่าแล้ว'); return
    }
    if (act === 'saveAutoTime') {
      const firstDayStart = gid('ops-start').value
      const secondDayStart = gid('ops-start-day2').value
      const matchMin = Number(gid('ops-matchmin').value || 20)
      const breakMin = Number(gid('ops-breakmin').value || 5)
      if (!firstDayStart || !secondDayStart) { azToast('กรุณาเลือกวันและเวลาเริ่มแข่งให้ครบทั้ง 2 วัน'); return }
      if (new Date(secondDayStart) <= new Date(firstDayStart)) { azToast('วันที่ 2 ต้องอยู่หลังวันที่ 1'); return }
      await SB.from('azfutsal_config').upsert([
        { key: 'START_TIME', value: firstDayStart },
        { key: 'SECOND_DAY_START_TIME', value: secondDayStart },
        { key: 'MATCH_MIN', value: String(matchMin) },
        { key: 'BREAK_MIN', value: String(breakMin) },
      ])
      const msThirdCode = THIRD_CODE.MS
      const hsThirdCode = THIRD_CODE.HS
      const msFinalCode = FINAL_CODE.MS
      const hsFinalCode = FINAL_CODE.HS
      const alternate = (msCodes, hsCodes) => {
        const codes = []
        for (let i = 0; i < Math.max(msCodes.length, hsCodes.length); i += 1) {
          if (msCodes[i]) codes.push(msCodes[i])
          if (hsCodes[i]) codes.push(hsCodes[i])
        }
        return codes
      }
      const dayCodes = day => ['MS', 'HS'].map(level => BRACKET[level]
        .filter(match => scheduleDayFor(level, match.code) === day)
        .filter(match => day === 1 || (match.code !== THIRD_CODE[level] && match.code !== FINAL_CODE[level]))
        .map(match => [level, match.code]))
      const [dayOneMs, dayOneHs] = dayCodes(1)
      const [dayTwoMs, dayTwoHs] = dayCodes(2)
      const dayOneCodes = alternate(dayOneMs, dayOneHs)
      const dayTwoCodes = alternate(dayTwoMs, dayTwoHs)
      dayTwoCodes.push(['MS', msThirdCode], ['HS', hsThirdCode], ['MS', msFinalCode], ['HS', hsFinalCode])
      const rows = [
        { start: firstDayStart, codes: dayOneCodes },
        { start: secondDayStart, codes: dayTwoCodes },
      ].flatMap(day => {
        let time = new Date(day.start)
        return day.codes.map(([level, code]) => {
          const kickoff = time.toTimeString().slice(0, 5)
          const ready = new Date(time.getTime() - 5 * 60000).toTimeString().slice(0, 5)
          time = new Date(time.getTime() + (matchMin + breakMin) * 60000)
          return { level, match_code: code, round: (BRACKET[level].find(b => b.code === code) || {}).round || '', kickoff_time: kickoff, ready_time: ready, duration_min: matchMin, break_min: breakMin }
        })
      })
      const { error } = await SB.from('azfutsal_matches').upsert(rows, { onConflict: 'level,match_code' })
      if (error) { azToast('จัดเวลาไม่สำเร็จ: ' + error.message); return }
      await refresh(); azToast('จัดตารางแข่งขัน 2 วันเรียบร้อยแล้ว'); return
    }
    if (act === 'saveHalfDuration') {
      const halfMin = Number(gid('ops-halfmin').value || 20)
      if (halfMin <= 0) { azToast('นาทีต่อครึ่งต้องมากกว่า 0'); return }
      await SB.from('azfutsal_config').upsert({ key: 'HALF_DURATION_MINUTES', value: String(halfMin) })
      await refresh(); azToast('บันทึกนาทีต่อครึ่งแล้ว'); return
    }
    if (act === 'resetAllMatchResults') {
      S.pendingConfirm = {
        message: 'ล้างผลการแข่งขันทั้งหมดจริงหรือไม่?\nสกอร์ ผู้ทำประตู ใบเหลือง/ใบแดง และนาฬิกาของทุกนัดจะถูกล้างกลับเป็นค่าเริ่มต้น\nการกระทำนี้ย้อนกลับไม่ได้',
        danger: true, confirmLabel: 'ล้างผลทั้งหมด',
        run: async () => {
          // สำคัญ: ต้องแยก upsert เป็น 2 ชุดตาม key ที่เหมือนกันในแต่ละชุดเสมอ — ถ้า rows ใน upsert เดียวกันมี key ไม่ตรงกัน
          // (บาง row มี team_a_id บาง row ไม่มี) PostgREST จะรวม column set ของทั้ง batch แล้วเติม null ให้ row ที่ไม่ได้ระบุ
          // ทำให้ค่าจริงของ row อื่นที่ไม่ได้ตั้งใจแตะ (เช่นทีมที่จับสลากไว้จริงในรอบแรก) ถูกลบไปด้วย — เคยเกิดเหตุจริงมาแล้ว
          const commonRows = []
          const refRows = []
          ;['MS', 'HS'].forEach(level => {
            BRACKET[level].forEach(def => {
              commonRows.push({
                level, match_code: def.code,
                score_a: null, score_b: null, is_penalty_shootout: false, penalty_score_a: null, penalty_score_b: null,
                winner_team_id: null, loser_team_id: null,
                clock_status: 'not_started', clock_half: null, clock_started_at: null, clock_elapsed_before: 0, clock_half_started_elapsed: 0,
              })
              // ทุก row ในชุดนี้มี key ชุดเดียวกันเป๊ะเสมอ (team_a_id/team_b_id ทั้งคู่) กันปัญหา PostgREST เติม null ให้ row ที่ key ไม่ครบ
              if (def.refA || def.refB) refRows.push({ level, match_code: def.code, team_a_id: null, team_b_id: null })
            })
          })
          const { error } = await SB.from('azfutsal_matches').upsert(commonRows, { onConflict: 'level,match_code' })
          if (error) { azToast('ล้างผลไม่สำเร็จ: ' + error.message); return }
          if (refRows.length) {
            const { error: refErr } = await SB.from('azfutsal_matches').upsert(refRows, { onConflict: 'level,match_code' })
            if (refErr) { azToast('ล้างทีมรอบถัดไปไม่สำเร็จ: ' + refErr.message); return }
          }
          const { error: delErr } = await SB.from('azfutsal_match_events').delete().in('level', ['MS', 'HS'])
          if (delErr) { azToast('ลบผู้ทำประตู/การ์ดไม่สำเร็จ: ' + delErr.message); return }
          await refresh()
          azToast('ล้างผลการแข่งขันทั้งหมดแล้ว')
        }
      }
      draw(); return
    }
    if (act === 'resetAllCheckins') {
      S.pendingConfirm = {
        message: 'ล้างข้อมูลรายงานตัวทั้งหมดจริงหรือไม่?\nสถานะรายงานตัว (สแกน QR) ของทุกนัดทุกทีมจะถูกล้างกลับเป็นยังไม่รายงานตัว\nการกระทำนี้ย้อนกลับไม่ได้',
        danger: true, confirmLabel: 'ล้างข้อมูลรายงานตัว',
        run: async () => {
          const { error } = await SB.from('azfutsal_checkins').delete().in('level', ['MS', 'HS'])
          if (error) { azToast('ล้างข้อมูลรายงานตัวไม่สำเร็จ: ' + error.message); return }
          await refresh()
          azToast('ล้างข้อมูลรายงานตัวทั้งหมดแล้ว')
        }
      }
      draw(); return
    }
    if (act === 'resetAllEventCheckins') {
      S.pendingConfirm = {
        message: 'ล้างข้อมูลเช็คอินเข้างานทั้งหมดจริงหรือไม่?\nสถานะเช็คอินเข้างาน (ทั้งสแกนเองและสตาฟสแกนให้) ของนักกีฬาทุกคนทั้ง 2 วันจะถูกล้างทั้งหมด\nการกระทำนี้ย้อนกลับไม่ได้',
        danger: true, confirmLabel: 'ล้างเช็คอินเข้างาน',
        run: async () => {
          const { error } = await SB.from('azfutsal_event_checkins').delete().in('day', [1, 2])
          if (error) { azToast('ล้างข้อมูลไม่สำเร็จ: ' + error.message); return }
          await refresh()
          azToast('ล้างข้อมูลเช็คอินเข้างานทั้งหมดแล้ว')
        }
      }
      draw(); return
    }
    if (act === 'startMatchClock') {
      azQueueClockUpdate(btn.dataset.level, btn.dataset.code, { clock_status: 'running', clock_half: 1, clock_started_at: new Date().toISOString(), clock_elapsed_before: 0, clock_half_started_elapsed: 0 })
      draw(); return
    }
    if (act === 'pauseMatchClock') {
      const level = btn.dataset.level, code = btn.dataset.code
      const m = matchByCode(level, code)
      const elapsed = matchClockElapsedSeconds(m) || 0
      azQueueClockUpdate(level, code, { clock_status: 'paused', clock_elapsed_before: elapsed, clock_started_at: null })
      draw(); return
    }
    if (act === 'resumeMatchClock') {
      azQueueClockUpdate(btn.dataset.level, btn.dataset.code, { clock_status: 'running', clock_started_at: new Date().toISOString() })
      draw(); return
    }
    if (act === 'endHalfClock' || act === 'endMatchClock') {
      const level = btn.dataset.level, code = btn.dataset.code
      const m = matchByCode(level, code)
      const elapsed = matchClockElapsedSeconds(m) || 0
      azQueueClockUpdate(level, code, { clock_status: act === 'endHalfClock' ? 'half_break' : 'ended', clock_elapsed_before: elapsed, clock_started_at: null })
      draw(); return
    }
    if (act === 'startSecondHalfClock') {
      const level = btn.dataset.level, code = btn.dataset.code
      const m = matchByCode(level, code)
      // จุดสำคัญของการแก้บั๊ก: ครึ่งหลังต้องเริ่มนับนาทีต่อครึ่งใหม่เต็มจำนวนเสมอ ไม่ว่าครึ่งแรกจะทดเวลาไปเท่าไหร่ก็ตาม
      // จึงต้อง snapshot ค่า clock_elapsed_before ปัจจุบัน (รวมทดเวลาครึ่งแรกแล้ว) ไว้เป็นจุดฐานของครึ่งหลัง
      azQueueClockUpdate(level, code, { clock_status: 'running', clock_half: 2, clock_started_at: new Date().toISOString(), clock_half_started_elapsed: m?.clock_elapsed_before || 0 })
      draw(); return
    }
    if (act === 'adminNewTeamFromList' || act === 'adminOpenTeamFromList') {
      S.tab = 'myteam'
      if (act === 'adminNewTeamFromList') { S.adminCreatingTeam = true; S.adminManageTeamId = null }
      else { S.adminManageTeamId = btn.dataset.id; S.adminCreatingTeam = false }
      draw(); return
    }
    if (act === 'removeTeam') {
      S.pendingConfirm = {
        message: 'ลบทีมนี้?\nข้อมูลนักกีฬาและการชำระเงินของทีมจะถูกลบด้วย',
        danger: true, confirmLabel: 'ลบทีม',
        run: async () => {
          const { error } = await SB.from('azfutsal_teams').delete().eq('id', btn.dataset.id)
          if (error) { azToast('ลบไม่สำเร็จ: ' + error.message); return }
          await refresh(); azToast('ลบทีมแล้ว')
        }
      }
      draw(); return
    }
    if (act === 'openLiveDraw') { S.liveDraw = { level: btn.dataset.level, pool: btn.dataset.pool || null, started: false, testMode: true, orderStrategy: 'bypair' }; draw(); return }
    if (act === 'autoSeedPool') {
      const level = btn.dataset.level, pool = btn.dataset.pool
      S.pendingConfirm = {
        message: `จัดคู่รอบนี้อัตโนมัติตามอันดับผลงาน (ทีมอันดับดี พบ ทีมอันดับรอง)?\nจะทับข้อมูลคู่แข่งเดิมของรอบนี้ถ้ามี`,
        danger: false,
        confirmLabel: 'จัดคู่เลย',
        run: async () => { await handleAutoSeedPool(level, pool) }
      }
      draw(); return
    }
    if (act === 'openManualPoolAssign') { S.manualPoolAssign = { level: btn.dataset.level, pool: btn.dataset.pool }; draw(); return }
    if (act === 'saveManualPoolAssign') { await handleSaveManualPoolAssign(); return }
    if (act === 'setLiveDrawMode') { if (S.liveDraw && !S.liveDraw.started) { S.liveDraw.testMode = btn.dataset.v === '1'; draw() } return }
    if (act === 'setLiveDrawOrder') { if (S.liveDraw && !S.liveDraw.started) { S.liveDraw.orderStrategy = btn.dataset.v; draw() } return }
    if (act === 'closeLiveDraw') { stopLiveDrawShake(); stopRollingSound(); S.liveDraw = null; draw(); return }
    if (act === 'startLiveDraw') { await handleStartLiveDraw(); return }
    if (act === 'shakePool') { await handleShakePool(); return }
    if (act === 'drawNext') { await handleDrawNext(); return }
    if (act === 'useTopScorer') {
      const { error } = await SB.from('azfutsal_awards').upsert({ level: btn.dataset.level, award_type: 'top_scorer', student_id: btn.dataset.student }, { onConflict: 'level,award_type' })
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      await refresh(); azToast('ตั้งดาวซัลโวจากผู้นำอัตโนมัติแล้ว'); return
    }
    if (act === 'clearAward') {
      const { error } = await SB.from('azfutsal_awards').upsert({ level: btn.dataset.level, award_type: btn.dataset.type, student_id: null }, { onConflict: 'level,award_type' })
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      await refresh(); azToast('ล้างรางวัลแล้ว'); return
    }
    if (act === 'printMatchForm') { printMatchResultForm(btn.dataset.level, btn.dataset.code); return }
    if (act === 'openCheckinScanner') { openCheckinScanner(btn.dataset.level, btn.dataset.code); return }
    if (act === 'openCheckinLiveDisplay') { openCheckinLiveDisplay(btn.dataset.level, btn.dataset.code); return }
    if (act === 'setEventCheckinDay') { S.eventCheckinDay = Number(btn.dataset.v); draw(); return }
    if (act === 'setEventCheckinIncompleteLevel') { S.eventCheckinIncompleteLevel = btn.dataset.v; draw(); return }
    if (act === 'openEventCheckinScanner') { openEventCheckinScanner(Number(btn.dataset.day)); return }
    if (act === 'openEventCheckinBigScreen') { openEventCheckinBigScreen(Number(btn.dataset.day)); return }
    if (act === 'openEventSelfCheckin') { openEventSelfCheckinScanner(); return }
    if (act === 'toggleEventCheckinBothDays') {
      const cur = eventCheckinRequiresBothDays()
      await SB.from('azfutsal_config').upsert({ key: 'EVENT_CHECKIN_REQUIRE_BOTH_DAYS', value: cur ? '0' : '1' })
      await refresh(); return
    }
    if (act === 'saveEventCheckinWindow') {
      await SB.from('azfutsal_config').upsert([
        { key: 'EVENT_CHECKIN_OPEN_TIME', value: gid('evci-open').value || '' },
        { key: 'EVENT_CHECKIN_CLOSE_TIME', value: gid('evci-close').value || '' },
      ])
      await refresh(); azToast('บันทึกเวลาเปิด-ปิดรับเช็คอินแล้ว'); return
    }
    if (act === 'printCheckinForm') {
      const team = S.teams.find(tm => tm.id === btn.dataset.id)
      if (team) printCheckinForm(team)
      return
    }
    if (act === 'toggleOrganizer') {
      const { error } = await SB.from('azfutsal_teams').update({ is_organizer: btn.dataset.v === '1' }).eq('id', btn.dataset.id)
      if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
      await refresh(); return
    }
    if (act === 'removePlayer') {
      S.pendingConfirm = {
        message: 'ลบนักกีฬาคนนี้ออกจากทีม?',
        danger: true, confirmLabel: 'ลบ',
        run: async () => {
          const { error } = await SB.from('azfutsal_players').delete().eq('id', btn.dataset.id)
          if (error) { azToast('ลบไม่สำเร็จ: ' + error.message); return }
          await refresh()
        }
      }
      draw(); return
    }
    if (act === 'toggleStaffScope') {
      if (!S.staffScopeEdit) return
      const key = btn.dataset.key
      const cur = S.staffScopeEdit.scopes || []
      S.staffScopeEdit.scopes = btn.checked ? [...cur, key] : cur.filter(k => k !== key)
      draw(); return
    }
    if (act === 'cancelStaffScope') { S.staffScopeEdit = null; draw(); return }
    if (act === 'saveStaffScope') {
      const ed = S.staffScopeEdit
      if (!ed) return
      if (!ed.scopes || !ed.scopes.length) { azToast('เลือกสิทธิ์อย่างน้อย 1 อย่าง'); return }
      if (ed.mode === 'add') {
        const { error } = await SB.from('azfutsal_admins').insert({ profile_id: ed.profile_id, granted_by: S.identity.profile.id, scopes: ed.scopes })
        if (error) { azToast('มอบสิทธิ์ไม่สำเร็จ: ' + error.message); return }
        azToast(`มอบสิทธิ์ให้ ${ed.name} แล้ว`)
      } else {
        const isSelf = S.staffList?.find(s => s.id === ed.id)?.isSelf
        const wasFullAdmin = (S.staffList?.find(s => s.id === ed.id)?.scopes || []).includes('full')
        const { error } = await SB.from('azfutsal_admins').update({ scopes: ed.scopes }).eq('id', ed.id)
        if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
        azToast('บันทึกสิทธิ์แล้ว')
        if (isSelf && wasFullAdmin && !ed.scopes.includes('full')) { S.staffScopeEdit = null; await refresh(); S.tab = 'schedule'; draw(); return }
      }
      S.staffScopeEdit = null
      await loadStaffList()
      draw()
      return
    }
    if (act === 'editStaffScope') {
      S.staffScopeEdit = { mode: 'edit', id: btn.dataset.id, name: btn.dataset.name, scopes: btn.dataset.scopes ? btn.dataset.scopes.split(',') : [] }
      draw(); return
    }
    if (act === 'removeStaff') {
      const fullAdminCount = (S.staffList || []).filter(s => (s.scopes || []).includes('full')).length
      const isTargetFullAdmin = (S.staffList || []).find(s => s.id === btn.dataset.id)?.scopes?.includes('full')
      if (isTargetFullAdmin && fullAdminCount <= 1) { azToast('ต้องมีแอดมินเต็มรูปแบบอย่างน้อย 1 คนเสมอ ลบคนสุดท้ายไม่ได้'); return }
      const isSelf = btn.dataset.self === '1'
      S.pendingConfirm = {
        message: isSelf
          ? 'นี่คือบัญชีที่คุณกำลังใช้อยู่\nถ้าถอนสิทธิ์ตัวเองจะออกจากหน้าแอดมินทันที ยืนยันหรือไม่?'
          : 'ถอนสิทธิ์คนนี้?',
        danger: true, confirmLabel: 'ถอนสิทธิ์',
        run: async () => {
          const { error } = await SB.from('azfutsal_admins').delete().eq('id', btn.dataset.id)
          if (error) { azToast('ถอนสิทธิ์ไม่สำเร็จ: ' + error.message); return }
          if (isSelf) { await refresh(); S.tab = 'schedule'; draw(); return }
          await loadStaffList()
        }
      }
      draw(); return
    }
  })

  ROOT.addEventListener('change', async e => {
    const el = e.target
    if (el.id === 'new-team-level') { S.newTeamLevel = el.value; return }
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
    if (e.target.id === 'team-code-input') S.teamCodeInput = e.target.value
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
      box.querySelectorAll('.az-staff-cand').forEach(row => row.addEventListener('click', () => {
        S.staffScopeEdit = { mode: 'add', profile_id: row.dataset.profile, name: row.dataset.name, scopes: [] }
        gid('staff-search').value = ''; box.style.display = 'none'
        draw()
      }))
    }
    if (e.target.classList?.contains('az-award-search')) {
      const level = e.target.dataset.level, type = e.target.dataset.type
      const q = e.target.value.trim().toLowerCase()
      const box = gid(`award-results-${level}-${type}`)
      if (!q) { box.style.display = 'none'; return }
      const players = S.players.filter(p => S.teams.find(t => t.id === p.team_id)?.level === level)
      const results = players.filter(p => {
        const name = (p.students?.full_name || '').toLowerCase()
        const code = String(p.students?.student_code || '').toLowerCase()
        const jersey = String(p.jersey_number ?? '')
        return name.includes(q) || code.includes(q) || jersey.includes(q)
      }).slice(0, 20)
      box.innerHTML = results.length ? results.map(p => `<div data-student="${p.student_id}" style="padding:8px 10px;font-size:12.5px;cursor:pointer;border-bottom:1px solid #f3f4f6" class="az-award-cand">${p.jersey_number !== null && p.jersey_number !== undefined ? `<b>#${esc(p.jersey_number)}</b> ` : ''}<b>${esc(p.students?.full_name || '')}</b> <span style="color:#9ca3af">${esc(p.students?.student_code || '')} · ${esc(teamName(p.team_id))}</span></div>`).join('') : `<div style="padding:8px 10px;font-size:12px;color:#9ca3af">ไม่พบนักกีฬาที่ตรงกับคำค้น</div>`
      box.style.display = 'block'
      box.querySelectorAll('.az-award-cand').forEach(row => row.addEventListener('click', async () => {
        box.style.display = 'none'
        const { error } = await SB.from('azfutsal_awards').upsert({ level, award_type: type, student_id: row.dataset.student }, { onConflict: 'level,award_type' })
        if (error) { azToast('บันทึกไม่สำเร็จ: ' + error.message); return }
        await refresh(); azToast('บันทึกรางวัลแล้ว')
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
  const selectedDay = S.scheduleDay === 2 ? 2 : 1
  const countEl = gid('az-schedule-count')
  const listWrap = gid('az-schedule-rows')
  if (countEl) countEl.textContent = `${rows.filter(row => row.day === selectedDay).length} นัด`
  if (listWrap) listWrap.innerHTML = scheduleTimelineMarkup(rows)
}

function paymentStatusLine(teamId) {
  const p = S.payments.find(pm => pm.team_id === teamId)
  if (!p) return `<span style="color:#9ca3af;font-weight:600">● ยังไม่ส่งหลักฐานชำระเงิน</span>`
  if (p.status === 'verified') return `<span style="color:#16a34a;font-weight:600">● ยืนยันแล้ว</span> · ส่ง ${fmtDT(p.created_at)}${p.reviewed_at ? ' · ยืนยัน ' + fmtDT(p.reviewed_at) : ''}`
  if (p.status === 'rejected') return `<span style="color:#ef4444;font-weight:600">● ถูกปฏิเสธ</span> · ส่ง ${fmtDT(p.created_at)}${p.reviewed_at ? ' · ปฏิเสธ ' + fmtDT(p.reviewed_at) : ''}`
  return `<span style="color:#f59e0b;font-weight:600">● รอตรวจสอบ</span> · ส่งหลักฐาน ${fmtDT(p.created_at)}`
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
    <div style="font-size:10.5px;color:#6b7280;margin-top:3px">${paymentStatusLine(t.id)}</div>
    <div style="margin-top:4px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">
      <button data-act="toggleOrganizer" data-id="${t.id}" data-v="${t.is_organizer ? '0' : '1'}" style="border:none;background:none;color:#4338ca;font-size:10.5px;cursor:pointer;font-weight:600">${t.is_organizer ? 'ยกเลิกทีมผู้จัด' : 'ตั้งเป็นทีมผู้จัด'}</button>
      <button data-act="printCheckinForm" data-id="${t.id}" style="border:none;background:none;color:#0891b2;font-size:10.5px;cursor:pointer;font-weight:600">🖨️ พิมพ์แบบฟอร์มรายงานตัว</button>
    </div>
  </div>`
}

function excelXmlEscape(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function downloadAthletesExcel(level) {
  if (!['MS', 'HS'].includes(level)) return
  const teamsById = new Map(S.teams.map(team => [team.id, team]))
  const collator = new Intl.Collator('th', { numeric: true, sensitivity: 'base' })
  const players = S.players
    .filter(player => teamsById.get(player.team_id)?.level === level)
    .sort((a, b) => {
      const teamCompare = collator.compare(teamsById.get(a.team_id)?.name || '', teamsById.get(b.team_id)?.name || '')
      if (teamCompare) return teamCompare
      const jerseyCompare = Number(a.jersey_number ?? 999) - Number(b.jersey_number ?? 999)
      if (jerseyCompare) return jerseyCompare
      return collator.compare(a.students?.full_name || '', b.students?.full_name || '')
    })

  if (!players.length) {
    azToast(`ยังไม่มีนักกีฬา${T[level].label}ให้ดาวน์โหลด`)
    return
  }

  const headers = ['ลำดับ', 'ระดับ', 'ชื่อทีม', 'รหัสทีม', 'สถานะทีม', 'เบอร์เสื้อ', 'รหัสนักเรียน', 'ชื่อ-สกุล', 'ชั้นเรียน', 'บทบาทในทีม', 'วันที่ลงทะเบียน']
  const rows = players.map((player, index) => {
    const team = teamsById.get(player.team_id)
    const teamStatus = team?.is_organizer ? 'ทีมผู้จัด' : team?.is_reserve ? 'ทีมสำรอง' : 'ทีมแข่งขัน'
    const role = String(player.student_id) === String(team?.captain_student_id)
      ? 'หัวหน้าทีม'
      : String(player.student_id) === String(team?.vice_captain_student_id)
        ? 'รองหัวหน้าทีม'
        : 'นักกีฬา'
    return [
      index + 1,
      T[level].label,
      team?.name || '',
      team?.team_code || '',
      teamStatus,
      player.jersey_number ?? '',
      player.students?.student_code || '',
      player.students?.full_name || '',
      player.students?.class_name || '',
      role,
      player.registered_at ? new Date(player.registered_at).toLocaleString('th-TH') : '',
    ]
  })
  const cell = (value, style = 'Body') => `<Cell ss:StyleID="${style}"><Data ss:Type="String">${excelXmlEscape(value)}</Data></Cell>`
  const worksheetRows = [
    `<Row>${headers.map(header => cell(header, 'Header')).join('')}</Row>`,
    ...rows.map(row => `<Row>${row.map(value => cell(value)).join('')}</Row>`),
  ].join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Body"><Alignment ss:Vertical="Center"/><Font ss:FontName="Tahoma" ss:Size="10"/><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/></Borders></Style>
  <Style ss:ID="Header"><Alignment ss:Horizontal="Center" ss:Vertical="Center"/><Font ss:FontName="Tahoma" ss:Size="10" ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="${T[level].base}" ss:Pattern="Solid"/></Style>
 </Styles>
 <Worksheet ss:Name="${excelXmlEscape(T[level].label)}">
  <Table>
   <Column ss:Width="42"/><Column ss:Width="55"/><Column ss:Width="150"/><Column ss:Width="75"/><Column ss:Width="75"/><Column ss:Width="55"/><Column ss:Width="80"/><Column ss:Width="170"/><Column ss:Width="110"/><Column ss:Width="90"/><Column ss:Width="125"/>
   ${worksheetRows}
  </Table>
  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel"><FreezePanes/><FrozenNoSplit/><SplitHorizontal>1</SplitHorizontal><TopRowBottomPane>1</TopRowBottomPane><ActivePane>2</ActivePane><ProtectObjects>False</ProtectObjects><ProtectScenarios>False</ProtectScenarios></WorksheetOptions>
 </Worksheet>
</Workbook>`
  const blob = new Blob(['\ufeff', xml], { type: 'application/vnd.ms-excel;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  const date = new Date().toISOString().slice(0, 10)
  link.href = url
  link.download = `AZFUTSALCUP_รายชื่อนักกีฬา_${level === 'MS' ? 'มต้น' : 'มปลาย'}_${date}.xls`
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
  azToast(`ดาวน์โหลดรายชื่อนักกีฬา${T[level].label} ${players.length} คนแล้ว`)
}

function adminAthletes() {
  const level = S.adminAthleteLevel || 'MS'
  const rows = S.players.filter(p => S.teams.find(t => t.id === p.team_id)?.level === level)
  return boxFill(`
    <div style="flex-shrink:0;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
        <div style="font-weight:700;font-size:14px">นักกีฬาที่ลงทะเบียน (${rows.length})</div>
        <div style="display:flex;gap:6px">${['MS', 'HS'].map(v => `<button data-act="adminAthleteLevel" data-v="${v}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${level === v ? T[v].base : '#e5e7eb'};background:${level === v ? T[v].base : '#fff'};color:${level === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${T[v].label}</button>`).join('')}</div>
      </div>
      <div style="display:flex;gap:6px;margin-top:9px">
        ${['MS', 'HS'].map(v => `<button data-act="downloadAthletesExcel" data-level="${v}" style="flex:1;padding:8px 6px;border-radius:9px;border:1px solid ${T[v].border};background:${T[v].soft};color:${T[v].accent};font-size:11px;font-weight:800;cursor:pointer">⬇️ Excel ${T[v].label}</button>`).join('')}
      </div>
    </div>
    <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;overflow-y:auto">
      ${rows.length ? rows.map(p => { const g = playerGoals(p.id); return `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f3f4f6">
          <div style="min-width:0">
            <div style="font-size:13px;font-weight:700">${esc(p.students?.full_name || '')}${g ? ` · ⚽${g}` : ''}</div>
            <div style="font-size:11px;color:#6b7280">${esc(p.students?.student_code || '')} · ${esc(teamName(p.team_id))}</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
            <button data-act="removePlayer" data-id="${p.id}" style="border:none;background:none;color:#ef4444;font-size:11.5px;cursor:pointer;font-weight:600">ลบ</button>
          </div>
        </div>`}).join('') : `<div style="font-size:12.5px;color:#9ca3af">ยังไม่มีนักกีฬาลงทะเบียนในระดับนี้</div>`}
    </div>
  `)
}

function adminPayments() {
  const level = S.adminPaymentsLevel || 'MS'
  const rows = S.payments.filter(p => S.teams.find(t => t.id === p.team_id)?.level === level)
  const pendingCount = rows.filter(p => p.status === 'pending').length
  return boxFill(`
    <div style="flex-shrink:0;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
      <div style="font-weight:700;font-size:14px">ตรวจสอบการชำระเงินประกัน${pendingCount ? ` <span style="font-weight:600;font-size:11.5px;color:#f59e0b">(${pendingCount} รอตรวจสอบ)</span>` : ''}</div>
      <div style="display:flex;gap:6px">${['MS', 'HS'].map(v => `<button data-act="adminPaymentsLevel" data-v="${v}" style="font-size:11.5px;padding:6px 11px;border-radius:9px;border:1px solid ${level === v ? T[v].base : '#e5e7eb'};background:${level === v ? T[v].base : '#fff'};color:${level === v ? '#fff' : '#374151'};font-weight:700;cursor:pointer">${T[v].label}</button>`).join('')}</div>
    </div>
    <div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;overflow-y:auto">
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
    const deposit = Number(cfg('DEPOSIT_AMOUNT', 500)), rateY = Number(cfg('RATE_YELLOW', 30)), rateR = Number(cfg('RATE_RED', 50)), opFee = Number(cfg('OPERATION_FEE', 100))
    return S.teams.filter(t => t.level === level).map(t => {
      const st = stats.find(s => s.id === t.id) || { y: 0, r: 0 }
      const refund = Math.max(deposit - opFee - st.y * rateY - st.r * rateR, 0)
      return { team: t.name, refund }
    })
  }
  const awardPicker = (level, type, label) => {
    const currentId = S.awards.find(a => a.level === level && a.award_type === type)?.student_id || ''
    const players = S.players.filter(p => S.teams.find(t => t.id === p.team_id)?.level === level)
    const currentPlayer = currentId ? players.find(p => String(p.student_id) === String(currentId)) : null
    const currentName = currentPlayer ? currentPlayer.students?.full_name || '' : ''
    // ดาวซัลโว: คำนวณผู้นำจากประตูที่บันทึกไว้จริงในระบบ (matchEvents) แนะนำให้กดใช้ได้เลย
    // MVP/GK ยอดเยี่ยม: ไม่มีสถิติในระบบให้อ้างอิงเชิงภาวะวิสัย (ไม่มีข้อมูล save/คะแนนภาพรวม) จึงยังต้องเลือกเองเสมอ
    let hint = ''
    if (type === 'top_scorer') {
      const scorers = computeTopScorers(level)
      if (scorers.length) {
        const topGoals = scorers[0].goals
        const leaders = scorers.filter(s => s.goals === topGoals)
        if (leaders.length === 1) {
          const already = String(currentId) === String(leaders[0].studentId)
          hint = `<div style="margin-top:4px;font-size:10.5px;color:#6b7280;display:flex;align-items:center;justify-content:space-between;gap:6px">
            <span>📊 ผู้นำ: ${esc(leaders[0].name)} (${leaders[0].goals} ประตู)</span>
            ${already ? `<span style="color:#16a34a;font-weight:700;flex-shrink:0">✓ เลือกแล้ว</span>` : `<button data-act="useTopScorer" data-level="${level}" data-student="${leaders[0].studentId}" style="border:none;background:none;color:#db2777;font-weight:700;cursor:pointer;font-size:10.5px;flex-shrink:0">ใช้คนนี้</button>`}
          </div>`
        } else {
          hint = `<div style="margin-top:4px;font-size:10.5px;color:#6b7280">📊 เสมอกัน ${leaders.length} คนที่ ${topGoals} ประตู — เลือกเองด้านบน</div>`
        }
      }
    }
    return `<label style="font-size:11.5px;color:#6b7280;flex:1">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span>${label}</span>
        ${currentId ? `<button data-act="clearAward" data-level="${level}" data-type="${type}" style="border:none;background:none;color:#9ca3af;font-size:10.5px;cursor:pointer;text-decoration:underline">ล้าง</button>` : ''}
      </div>
      <div style="position:relative;margin-top:4px">
        <input class="az-award-search" data-level="${level}" data-type="${type}" value="${esc(currentName)}" autocomplete="off" placeholder="พิมพ์เลขเสื้อ/รหัส/ชื่อนักกีฬา..." style="width:100%;box-sizing:border-box;border:1px solid #e5e7eb;border-radius:9px;padding:7px 8px;font-size:12px"/>
        <div id="award-results-${level}-${type}" style="position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e5e7eb;border-radius:10px;margin-top:4px;max-height:200px;overflow-y:auto;z-index:20;display:none;box-shadow:0 6px 16px rgba(0,0,0,.08)"></div>
      </div>
      ${hint}
    </label>`
  }
  return `
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:10px">ตั้งค่าเวลา / ไทม์ไลน์</div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <label style="font-size:11.5px;color:#6b7280">วันที่ 1 · รอบแรกและรอบแก้ตัว
          <input id="ops-start" type="datetime-local" value="${esc(cfg('START_TIME', ''))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
        </label>
        <label style="font-size:11.5px;color:#6b7280">วันที่ 2 · รอบเข้ารอบจนถึงรอบชิง
          <input id="ops-start-day2" type="datetime-local" value="${esc(scheduleDayStart(2))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
        </label>
        <div style="display:flex;gap:8px">
          <label style="font-size:11.5px;color:#6b7280;flex:1">นัด (นาที)<input id="ops-matchmin" type="number" value="${esc(cfg('MATCH_MIN', 20))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/></label>
          <label style="font-size:11.5px;color:#6b7280;flex:1">พัก (นาที)<input id="ops-breakmin" type="number" value="${esc(cfg('BREAK_MIN', 5))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/></label>
        </div>
        <div style="font-size:10.5px;color:#6b7280">วันแรกจัดรอบแรก/รอบแก้ตัว 21 นัด วันที่สองจัดรอบที่เหลือ 21 นัด โดย 4 นัดท้ายเป็นชิงที่ 3 ม.ต้น → ชิงที่ 3 ม.ปลาย → ชิงที่ 1 ม.ต้น → ชิงที่ 1 ม.ปลาย</div>
        <button data-act="saveAutoTime" style="margin-top:4px;width:100%;padding:10px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">จัดตารางอัตโนมัติ 2 วัน</button>
      </div>
    `)}
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px">นาฬิกาจับเวลาแข่งขันสด</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">ใช้กับปุ่ม "เริ่มการแข่งขัน" ในหน้าบันทึกผลแต่ละนัด นับถอยหลังตามจำนวนนาทีต่อครึ่งนี้ และประทับเวลาให้ผู้ทำประตู/ใบเหลือง/ใบแดงอัตโนมัติ</div>
      <label style="font-size:11.5px;color:#6b7280">นาทีต่อครึ่ง
        <input id="ops-halfmin" type="number" min="1" value="${esc(cfg('HALF_DURATION_MINUTES', 20))}" style="display:block;width:100%;box-sizing:border-box;margin-top:4px;border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font-size:13px"/>
      </label>
      <button data-act="saveHalfDuration" style="margin-top:8px;width:100%;padding:10px;border-radius:10px;border:none;background:#22c55e;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">บันทึกนาทีต่อครึ่ง</button>
    `)}
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px;color:#dc2626">⚠️ ล้างผลการแข่งขันทั้งหมด</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">ใช้ตอนทดสอบระบบบันทึกผล — ล้างสกอร์ ผู้ทำประตู ใบเหลือง/ใบแดง และนาฬิกาจับเวลาของ<b>ทุกนัด</b>กลับเป็นค่าเริ่มต้น (ยังไม่เริ่มแข่ง) รวมถึงทีมที่เข้ารอบต่อไปแบบที่แอดมินเลือกเอง (เช่น รอบแก้ตัว ม.ต้น) กลับเป็นค่าว่าง เพื่อให้จับสลาก/บันทึกผลใหม่ได้ตั้งแต่ต้น<br><b>ไม่กระทบ</b> ทีม/นักกีฬา/การชำระเงิน/การรายงานตัว และ<b>ไม่กระทบ</b>คู่แข่งขันรอบแรกที่จับสลากไว้แล้ว</div>
      <button data-act="resetAllMatchResults" style="width:100%;padding:10px;border-radius:10px;border:none;background:#dc2626;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">🗑️ ล้างผลการแข่งขันทั้งหมด</button>
    `)}
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px;color:#dc2626">⚠️ ล้างข้อมูลรายงานตัวทั้งหมด</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">ล้างสถานะรายงานตัว (ที่สแกน QR ไว้) ของ<b>ทุกนัดทุกทีม</b>กลับเป็นยังไม่รายงานตัว — แยกจากปุ่มล้างผลด้านบน<br><b>ไม่กระทบ</b> ทีม/นักกีฬา/สกอร์/การชำระเงิน</div>
      <button data-act="resetAllCheckins" style="width:100%;padding:10px;border-radius:10px;border:none;background:#dc2626;color:#fff;font-weight:700;font-size:13.5px;cursor:pointer">🗑️ ล้างข้อมูลรายงานตัวทั้งหมด</button>
    `)}
    ${box(`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
        <div>
          <div style="font-weight:700;font-size:14px">บังคับกรอกผู้ทำประตูก่อนบันทึกผล</div>
          <div style="font-size:11px;color:#6b7280;margin-top:2px">เมื่อเปิด ระบบจะไม่ยอมบันทึกสกอร์ถ้าจำนวนผู้ทำประตูที่ระบุไว้ไม่ตรงกับสกอร์ ปิดไว้ถ้าต้องการบันทึกผลเร็วๆ ระหว่างแข่งจริง</div>
        </div>
        <button data-act="toggleRequireEvents" style="flex-shrink:0;font-size:11px;padding:6px 12px;border-radius:999px;border:none;font-weight:700;cursor:pointer;background:${cfg('REQUIRE_EVENTS_BEFORE_SCORE', '0') === '1' ? '#dcfce7' : '#f3f4f6'};color:${cfg('REQUIRE_EVENTS_BEFORE_SCORE', '0') === '1' ? '#16a34a' : '#6b7280'}">${cfg('REQUIRE_EVENTS_BEFORE_SCORE', '0') === '1' ? 'เปิดอยู่' : 'ปิดอยู่'}</button>
      </div>
    `)}
    ${box(`
      <div style="font-weight:700;font-size:14px;margin-bottom:4px">สรุปเงินประกัน (Deposit)</div>
      <div style="font-size:11px;color:#6b7280;margin-bottom:10px">เริ่มต้น ${money(cfg('DEPOSIT_AMOUNT', 500))} บาท − ค่าดำเนินการ ${money(cfg('OPERATION_FEE', 100))} บาท − หักใบเหลือง ${money(cfg('RATE_YELLOW', 30))} / ใบแดง ${money(cfg('RATE_RED', 50))}</div>
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
