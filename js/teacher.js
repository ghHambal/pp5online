import { supabase }            from './supabase.js'
import { showToast, showPageLoader } from './ui.js'
import { getMyTeacherProfile, getMySubjects, getMyClasses, getMasterSubjects,
         createSubject, updateSubject, deleteSubject,
         getMyHomeroomRooms, upsertHomeroomTeacher, getSystemConfig,
         getPendingExamRequestCount,
         createPaymentRequest, uploadPaymentSlip, getMyPaymentRequests,
         getTeacherPackageAccess, getMyDonationRequests,
         getMySchedule, getPeriods,
         getClassScheduleLinks, linkClassToSchedule, unlinkClassFromSchedule,
         updateLastSeen, logLogin } from './api.js'
import { promptpayQRDataURL } from './promptpay.js'
import { COPY_TEMPLATE_CONFIG, getCopyTemplateId } from './sync.js'
import { applyThemeForRole } from './theme.js'
import {
  renderTeacherOverview, renderMyCourses, renderCourseForm,
  renderMyClasses, renderAttendance, renderGrades,
  renderRequests, renderSchedule, renderProfile, renderClassForm,
  renderLifeSkillScore, renderReadingScore, renderPrayerScore,
  renderProfileSetup, renderScheduleBuilder, openCourseDocPage2Modal,
} from './teacher-views.js'

let _teacher       = null  // teacher DB record (from teachers table)
let _homeroomRooms = []   // [{main_room, category}]

// ─── Guard ────────────────────────────────────────────────────────────────────
async function requireAuth() {
  showPageLoader(true)
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.replace('index.html'); return null }
  return session
}

// ─── Load teacher info ────────────────────────────────────────────────────────
async function loadTeacherInfo(userId) {
  _teacher = await getMyTeacherProfile(userId)
  const { data: { session } } = await supabase.auth.getSession()
  if (_teacher) _teacher.auth_email = session?.user?.email ?? ''
  await applyThemeForRole('teacher', _teacher ?? {})

  const name   = _teacher?.full_name ?? 'ครูผู้สอน'
  const code   = _teacher?.teacher_code ? `รหัส ${_teacher.teacher_code}` : ''
  const imgUrl = _teacher?.image_url ?? ''

  // Sidebar mini profile
  const avatarEl = document.getElementById('t-avatar')
  if (imgUrl) {
    avatarEl.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" />`
  } else {
    avatarEl.textContent = name.charAt(0).toUpperCase()
  }
  document.getElementById('t-name').textContent = name
  document.getElementById('t-code').textContent = code

  // Header
  document.getElementById('user-name').textContent = name
  const headerAvatar = document.getElementById('user-avatar')
  if (imgUrl) {
    headerAvatar.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" />`
  } else {
    headerAvatar.textContent = name.charAt(0).toUpperCase()
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────
const ROUTES = {
  'overview':    () => renderTeacherOverview(_teacher, _homeroomRooms),
  'my-courses':  () => renderMyCourses(_teacher),
  'my-classes':  () => renderMyClasses(_teacher),
  'attendance':       () => renderAttendance(_teacher),
  'life-skill-score': () => renderLifeSkillScore(_teacher, _homeroomRooms.filter(r=>r.category==='สามัญ')),
  'reading-score':    () => { const r = window._pendingReadingRoom; window._pendingReadingRoom = null; renderReadingScore(_teacher, r) },
  'prayer-score':     () => renderPrayerScore(_teacher, _homeroomRooms.filter(r=>r.category==='ศาสนา')),
  'grades':      () => renderGrades(),
  'requests':    () => renderRequests(_teacher),
  'schedule':    () => renderSchedule(_teacher),
  'schedule-builder': () => renderScheduleBuilder(_teacher, () => navigate('overview')),
  'profile':     () => renderProfile(_teacher, _refreshProfile),
  'setup':       () => renderProfileSetup(_teacher, _homeroomRooms, _onSetupComplete),
}

function navigate(view) {
  const fn = ROUTES[view]
  if (fn) fn()
}

// expose to window for onclick in views
window._navTo  = navigate
window._goBack = () => navigate('my-courses')

const _esc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const _toPositiveInt = (value, fallback) => {
  const n = parseInt(value, 10)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

// ─── Donation AI — Gemini with key fallback ───────────────────────────────────
// ดึง API keys สำรอง 1-4 จาก cfg (กรอง empty ออก)
export function getDonationGeminiKeys(cfg) {
  return [1,2,3,4]
    .map(i => (cfg[`donationGeminiKey${i}`] ?? '').trim())
    .filter(Boolean)
}

// เรียก Gemini โดยลอง keys ตามลำดับ — คืน { text, keyIndex } หรือ throw error
export async function callDonationAI(cfg, prompt, { maxTokens = 1024 } = {}) {
  const keys  = getDonationGeminiKeys(cfg)
  const model = (cfg.donationGeminiModel ?? '').trim() || 'gemini-2.5-flash'
  if (!keys.length) throw new Error('ยังไม่ได้ตั้งค่า Donation Gemini API Key ในหน้าแอดมิน')

  let lastErr = null
  for (let i = 0; i < keys.length; i++) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${keys[i]}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { maxOutputTokens: maxTokens },
          }),
        }
      )
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}))
        const msg = errJson?.error?.message ?? `HTTP ${res.status}`
        // quota หมด / rate limit → ลอง key ถัดไป
        if (res.status === 429 || res.status === 503 || msg.includes('quota')) {
          lastErr = new Error(`Key ${i+1}: ${msg}`)
          continue
        }
        throw new Error(`Key ${i+1}: ${msg}`)
      }
      const data = await res.json()
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
      return { text, keyIndex: i + 1 }
    } catch (err) {
      lastErr = err
      // ถ้าเป็น network error ให้ลอง key ถัดไป
      if (err.name === 'TypeError') continue
      // ถ้า throw จากข้างใน (ไม่ใช่ quota) ให้ re-throw ทันที
      if (!String(err.message).includes('Key ')) throw err
    }
  }
  throw lastErr ?? new Error('Donation AI keys ทุกตัวใช้งานไม่ได้')
}

// export ให้หน้าอื่นใช้ผ่าน window ด้วย
window._callDonationAI = callDonationAI
window._getDonationGeminiKeys = getDonationGeminiKeys

// รูปแบบ: icon|ข้อความ|minTier (minTier optional, default=1)
const _parseDonationFeatures = cfg => {
  const raw = String(cfg.donationSpecialFeatures ?? '').trim()
  const defaults = [
    ['🏅', 'สติกเกอร์/ตราประจำระดับผู้สนับสนุน',              1],
    ['📣', 'ประกาศในห้องเรียนสำหรับนักเรียน',                  1],
    ['✍️', 'ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว', 1],
    ['📊', 'Dashboard วิเคราะห์ภาพรวมห้องเรียน',               2],
    ['🤖', 'AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง',            2],
    ['🧭', 'AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา',             3],
    ['⚡', 'Early Access ฟีเจอร์ใหม่ก่อนใคร',                  3],
    ['📲', 'แจ้งเตือนอัตโนมัติ Telegram/LINE',                  4],
  ]
  const rows = raw ? raw.split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const parts = line.split('|').map(s => s.trim())
    const icon    = parts[0] || '✨'
    const text    = parts[1] || parts[0] || line
    const minTier = parseInt(parts[2]) || 1
    return { icon, text, minTier }
  }) : defaults.map(([icon, text, minTier]) => ({ icon, text, minTier }))
  return rows.filter(f => f.text)
}

// คืน tier index (1-4) ของ approved donation — 0 = ไม่มี
const _getDonorTierIndex = (cfg, tiers, amount) => {
  if (!amount) return 0
  const idx = [...tiers].map((t,i) => ({t,i})).reverse().find(({t}) => amount >= t.amount)?.i
  return idx !== undefined ? idx + 1 : 0
}

const _parseDonationStickers = (cfg, minAmount, stepAmount) => {
  const raw = String(cfg.donationStickerTiers ?? '').trim()
  const defaults = [
    [49,  '🌱', 'ครูผู้จุดประกาย',     'คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝',    '#22C55E'],
    [99,  '☕', 'ครูผู้ร่วมฝัน',       'คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭',          '#A855F7'],
    [149, '🏅', 'ครูผู้ร่วมสร้าง',     'คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱','#F59E0B'],
    [199, '🐘', 'ครูผู้ร่วมขับเคลื่อน','คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊',   '#3B82F6'],
    [249, '👑', 'ครูผู้ก่อตั้งร่วม',   'คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️',  '#D4A017'],
  ]
  const rows = raw ? raw.split('\n').map(line => line.trim()).filter(Boolean).map(line => {
    const [amount, sticker, title, note, color] = line.split('|').map(s => s.trim())
    return {
      amount: _toPositiveInt(amount, 0),
      sticker: sticker || '🏅',
      title: title || `ผู้สนับสนุน ${amount || ''} บาท`,
      note: note || 'ขอบคุณที่ช่วยสนับสนุนการพัฒนาระบบครับ',
      color: color || '',
    }
  }) : defaults.map(([amount, sticker, title, note, color]) => ({ amount, sticker, title, note, color }))
  const sorted = rows.filter(t => t.amount > 0).sort((a, b) => a.amount - b.amount)
  // auto-link donationStickerImgN → tier N (override emoji ถ้ามีรูป upload)
  return sorted.map((t, i) => {
    const imgUrl = cfg[`donationStickerImg${i+1}`] ?? ''
    if (imgUrl && /^https?:\/\//.test(imgUrl)) return { ...t, sticker: imgUrl }
    return t
  })
}

const _donationStickerHtml = tier => {
  if (!tier) return ''
  const sticker = String(tier.sticker ?? '')
  const stickerEl = /^https?:\/\//.test(sticker)
    ? `<img src="${_esc(sticker)}" class="w-14 h-14 object-contain drop-shadow-md" />`
    : `<div class="w-14 h-14 flex items-center justify-center text-3xl">${_esc(sticker || '🏅')}</div>`
  return `
    <div class="flex items-center gap-3 rounded-2xl border border-amber-200 bg-white p-3 shadow-sm">
      ${stickerEl}
      <div class="min-w-0">
        <p class="text-sm font-bold text-amber-900">${_esc(tier.title)}</p>
        <p class="text-[11px] text-amber-700 leading-relaxed">${_esc(tier.note)}</p>
      </div>
    </div>`
}

const _copyUrl = id => `https://docs.google.com/spreadsheets/d/${encodeURIComponent(id)}/copy`

async function _showStandaloneCopyFlow() {
  const cfg = await getSystemConfig().catch(() => ({}))
  const groups = {
    start: [
      { key: 'สามัญ', label: '📚 สามัญ' },
      { key: 'ศาสนา', label: '🕌 ศาสนา' },
    ],
    สามัญ: COPY_TEMPLATE_CONFIG.filter(t => t.category === 'สามัญ'),
    ศาสนา: COPY_TEMPLATE_CONFIG.filter(t => t.category === 'ศาสนา'),
  }
  const steps = ['start']
  document.getElementById('standalone-copy-modal')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'standalone-copy-modal'
  wrap.className = 'fixed inset-0 z-[95] flex items-center justify-center bg-black/50 p-4'
  wrap.innerHTML = `<div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div>
        <h3 class="text-xl font-bold text-pink-500 leading-tight">สร้างสำเนาไฟล์ ปพ5Online</h3>
        <p class="text-xs text-gray-400 mt-1">สำหรับใช้งานไฟล์ Google Sheet แบบเดิม</p>
      </div>
      <button id="copy-flow-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div id="copy-flow-app"></div>
  </div>`
  document.body.appendChild(wrap)
  const app = wrap.querySelector('#copy-flow-app')
  const render = () => {
    const current = steps[steps.length - 1]
    const opts = groups[current] || []
    app.innerHTML = `
      <div class="text-center text-lg text-gray-600 mb-4">${steps.length === 1 ? 'เลือกหมวดหมู่' : 'เลือกกลุ่ม/ประเภท'}</div>
      <div class="flex flex-col gap-3">
        ${opts.map(opt => {
          const id = opt.defaultId ? getCopyTemplateId(cfg, opt.key) : ''
          return id ? `
            <a href="${_copyUrl(id)}" target="_blank" rel="noopener noreferrer"
              class="w-full ${opt.color || 'bg-gradient-to-r from-pink-400 to-green-400'} text-white font-semibold py-3 rounded-2xl shadow-md hover:scale-[1.02] transition-all text-center block text-lg">
              🔗 เปิดไฟล์: ${_esc(opt.label)}
            </a>` : `
            <button data-next="${_esc(opt.key)}"
              class="copy-flow-next w-full bg-pink-200 hover:bg-pink-300 text-pink-700 font-medium py-3 rounded-2xl shadow text-lg transition-all">
              ${_esc(opt.label)}
            </button>`
        }).join('')}
      </div>
      ${steps.length > 1 ? `<button id="copy-flow-back" class="mt-6 text-sm text-gray-400 underline hover:text-pink-400 transition-all">⬅️ ย้อนกลับ</button>` : ''}`
    app.querySelectorAll('.copy-flow-next').forEach(btn => {
      btn.addEventListener('click', () => {
        steps.push(btn.dataset.next)
        render()
      })
    })
    app.querySelector('#copy-flow-back')?.addEventListener('click', () => {
      if (steps.length > 1) steps.pop()
      render()
    })
  }
  wrap.querySelector('#copy-flow-close').addEventListener('click', () => wrap.remove())
  wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove() })
  render()
}

window._openStandaloneCopyFlow = _showStandaloneCopyFlow

// เปิด quota popup จากหน้าภาพรวม (ไม่มี course context)
window._showQuotaFromOverview = () => {
  Promise.all([
    getMyClasses(_teacher?.id ?? null).catch(()=>[]),
    getSystemConfig().catch(()=>({})),
  ]).then(([cls, cfg]) => _showQuotaPopup(cls.length, null, cfg))
    .catch(()  => _showQuotaPopup(0, null, {}))
}

window._openLifeSkillScore    = (room) => navigate('life-skill-score')
window._openReligionScore     = (room) => navigate('prayer-score')
window._openReadingScore      = ()     => { window._pendingReadingRoom = null; navigate('reading-score') }
window._openReadingScoreRoom  = (room) => { window._pendingReadingRoom = room; navigate('reading-score') }

window._openReadingScorePicker = (roomsJson) => {
  let rooms = []
  try { rooms = JSON.parse(roomsJson.replace(/&quot;/g, '"')) } catch { rooms = [] }
  if (!rooms.length) { showToast('ยังไม่มีห้องเรียน — ลงทะเบียนห้องก่อนบันทึกคะแนน', 'warning'); return }

  document.getElementById('rsp-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'rsp-modal'
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm animate-fade">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-bold text-gray-800">📖 เลือกห้องบันทึกคะแนน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อ่านคิดวิเคราะห์และเขียน</p>
        </div>
        <button id="rsp-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
      </div>
      <div class="p-4 grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
        ${rooms.map(r => `
        <button class="rsp-room px-3 py-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-800
                       text-sm font-medium hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition text-center"
          data-room="${r}">${r}</button>`).join('')}
      </div>
    </div>`
  document.body.appendChild(modal)
  modal.querySelector('#rsp-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })
  modal.querySelectorAll('.rsp-room').forEach(btn => {
    btn.addEventListener('click', () => { modal.remove(); window._openReadingScoreRoom(btn.dataset.room) })
  })
}

let _lastPendingCount = null

async function _updateRequestsBadge() {
  if (!_teacher) return
  try {
    const count = await getPendingExamRequestCount(_teacher.id)
    const badge = document.getElementById('badge-requests')
    if (badge) {
      if (count > 0) {
        badge.textContent = count > 99 ? '99+' : count
        badge.classList.remove('hidden')
      } else {
        badge.classList.add('hidden')
      }
    }
    // แจ้งเตือนถ้ามีคำร้องใหม่เข้ามา (ไม่แจ้งตอน load ครั้งแรก)
    if (_lastPendingCount !== null && count > _lastPendingCount) {
      const diff = count - _lastPendingCount
      showToast(`🔔 มีคำร้องนักเรียนใหม่ ${diff} รายการ`, 'info')
    }
    _lastPendingCount = count
  } catch { /* ไม่ crash */ }
}

function _startPolling() {
  const INTERVAL = 30000 // 30 วินาที
  setInterval(() => {
    if (document.visibilityState === 'visible') _updateRequestsBadge()
  }, INTERVAL)
  // resume ทันทีเมื่อ user กลับมาที่แท็บ
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') _updateRequestsBadge()
  })
}

function _applyRoleMenus() {
  const hasLifeSkill = _homeroomRooms.some(r => r.category === 'สามัญ')
  const hasPrayer    = _homeroomRooms.some(r => r.category === 'ศาสนา')
  const hasReading   = _teacher?.dept === 'THAI'
  const toggle = (id, show) => {
    const el = document.getElementById(id)
    if (!el) return
    el.classList.toggle('hidden', !show)
    el.classList.toggle('flex', show)
  }
  toggle('menu-life-skill', hasLifeSkill)
  toggle('menu-reading',    hasReading)
  toggle('menu-prayer',     hasPrayer)
}

// refresh profile หลัง save
async function _refreshProfile(userId) {
  _teacher = await getMyTeacherProfile(userId)
  _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
  await loadTeacherInfo(userId)
  _applyRoleMenus()
  navigate('profile')   // re-render ฟอร์มด้วย _teacher ที่อัปเดตแล้ว
}

// หลัง setup เสร็จ → reload แล้วไป schedule-builder (บังคับสร้างตาราง)
async function _onSetupComplete(userId) {
  _teacher       = await getMyTeacherProfile(userId)
  _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
  await loadTeacherInfo(userId)
  _applyRoleMenus()
  navigate('schedule-builder')
}

window._openCourseForm = () => {
  renderCourseForm(_teacher, async (payload) => {
    await createSubject(payload)
  })
}

window._editCourse = async (id) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const editData = subjects.find(s => s.id === id)
  if (!editData) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }
  renderCourseForm(_teacher, async (payload) => {
    await updateSubject(id, payload)
  }, editData)
}

window._deleteCourse = (id, name) => {
  // ใช้ modal แทน confirm() เพื่อรองรับทุก browser/PWA
  document.getElementById('del-course-modal')?.remove()
  const m = document.createElement('div')
  m.id = 'del-course-modal'
  m.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
  m.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade">
      <div class="text-center mb-5">
        <div class="text-4xl mb-3">🗑️</div>
        <h3 class="font-bold text-gray-800 text-base mb-1">ลบคอร์สวิชา</h3>
        <p class="text-sm text-gray-500">"${name}"</p>
        <p class="text-xs text-red-500 mt-2">⚠️ ห้องเรียนทั้งหมดในคอร์สนี้จะถูกลบด้วย</p>
      </div>
      <div class="flex gap-3">
        <button id="del-course-cancel"
          class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
          ยกเลิก
        </button>
        <button id="del-course-confirm"
          class="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600">
          ลบ
        </button>
      </div>
    </div>`
  document.body.appendChild(m)
  m.querySelector('#del-course-cancel').addEventListener('click', () => m.remove())
  m.querySelector('#del-course-confirm').addEventListener('click', async () => {
    const btn = m.querySelector('#del-course-confirm')
    btn.disabled = true; btn.textContent = 'กำลังลบ...'
    try {
      await deleteSubject(id)
      m.remove()
      showToast(`ลบ "${name}" แล้ว`, 'success')
      navigate('my-courses')
    } catch (err) {
      m.remove()
      showToast('ลบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  })
}

window._openRegisterClass = async (courseId) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const course = subjects.find(s => s.id === courseId)
  if (!course) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }

  // ── ตรวจโควตา (นับจาก DB จริงเสมอ) ──
  const quota = _teacher?.teachers_quota
  const [myClasses, cfg, packageAccess] = await Promise.all([
    getMyClasses(_teacher?.id ?? null).catch(()=>[]),
    getSystemConfig().catch(()=>({})),
    getTeacherPackageAccess(_teacher?.id ?? null).catch(()=>({ hasSemester: false, paidRoomCount: 0 })),
  ])
  const freeLimit = parseInt(cfg.freeClassQuota ?? 2)
  const legacyUnlimited = quota?.is_paid && !quota?.package_type && !packageAccess.hasSemester && !packageAccess.paidRoomCount
  const hasSemester = packageAccess.hasSemester || quota?.package_type === 'semester' || legacyUnlimited
  const classLimit = hasSemester ? Infinity : freeLimit + packageAccess.paidRoomCount

  if (myClasses.length >= classLimit) {
    _showQuotaPopup(myClasses.length, course, cfg); return
  }

  renderClassForm(_teacher, course)
}

window._openCourseDocPage2 = async (courseId) => {
  const subjects = _teacher
    ? await getMySubjects(_teacher.id).catch(()=>[])
    : await getMasterSubjects().catch(()=>[])
  const course = subjects.find(s => s.id === courseId)
  if (!course) { showToast('ไม่พบข้อมูลคอร์ส', 'error'); return }
  await openCourseDocPage2Modal(_teacher, course)
}

// ── หน้า 1: เลือกแพ็กเกจ ────────────────────────────────────────────────────
function _showQuotaPopup(count, course, cfg = {}) {
  if (cfg.quotaMode === 'school_sponsored') {
    _showSchoolSponsoredPopup(count, course, cfg)
    return
  }
  document.getElementById('quota-popup')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'quota-popup'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <div class="flex items-center gap-3 mb-1">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🔒</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">ครบโควตาฟรีแล้ว</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>

      <!-- Body -->
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">

        <!-- สถานะปัจจุบัน -->
        ${(() => {
          const freeQ  = parseInt(cfg.freeClassQuota ?? 2)
          const pClass = parseInt(cfg.pricePerClass   ?? 49)
          const pSem   = parseInt(cfg.priceSemester   ?? 299)
          const descC  = cfg.pkgPerClassDesc  ?? 'เพิ่มได้ 1 ห้องเรียนต่อการชำระเงิน'
          const descS  = cfg.pkgSemesterDesc  ?? 'ทุกวิชา ทุกห้อง ไม่จำกัด'
          const nextNo = freeQ + 1
          return `
        <div class="bg-gray-50 rounded-xl p-3.5 text-sm">
          <p class="text-gray-600">คุณสร้างห้องเรียนไปแล้ว
            <span class="font-bold text-indigo-600">${count} ห้อง</span>
            จาก <span class="font-bold">${freeQ} ห้องฟรี</span>
          </p>
          <p class="text-gray-400 text-xs mt-1">
            การสร้างห้องเรียนตั้งแต่ห้องที่ ${nextNo} เป็นต้นไป
            จำเป็นต้องเลือกแพ็กเกจด้านล่าง
          </p>
        </div>

        <!-- แพ็กเกจ 1 -->
        <label class="block cursor-pointer">
          <input type="radio" name="pkg" value="per_subject" class="sr-only peer" />
          <div class="border-2 border-gray-200 peer-checked:border-indigo-500 peer-checked:bg-indigo-50
                      rounded-xl p-4 transition-all">
            <div class="flex items-start justify-between mb-2">
              <div>
                <p class="font-bold text-gray-800">รายห้อง</p>
                <p class="text-xs text-gray-400 mt-0.5">${descC}</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-indigo-600">${pClass}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อวิชา / เทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ เพิ่ม 1 ห้องเรียนทันที</p>
              <p>✅ เหมาะถ้าต้องการเพิ่มเพียง 1-2 ห้อง</p>
            </div>
          </div>
        </label>

        <!-- แพ็กเกจ 2 (แนะนำ) -->
        <label class="block cursor-pointer">
          <input type="radio" name="pkg" value="semester" class="sr-only peer" />
          <div class="border-2 border-gray-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-50
                      rounded-xl p-4 transition-all relative">
            <div class="absolute -top-2.5 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              แนะนำ ⭐
            </div>
            <div class="flex items-start justify-between mb-2">
              <div>
                <p class="font-bold text-gray-800">เหมาทั้งเทอม</p>
                <p class="text-xs text-gray-400 mt-0.5">${descS}</p>
              </div>
              <div class="text-right flex-shrink-0 ml-3">
                <p class="text-2xl font-extrabold text-emerald-600">${pSem}<span class="text-sm font-normal text-gray-400"> บ.</span></p>
                <p class="text-[10px] text-gray-400">ต่อเทอม</p>
              </div>
            </div>
            <div class="space-y-1 text-xs text-gray-500">
              <p>✅ สร้างห้องเรียนได้ไม่จำกัดทุกวิชา</p>
              <p>✅ ประหยัดกว่าถ้าสอนมากกว่า 6 วิชา</p>
              <p>✅ ใช้ได้ตลอดภาคเรียนนี้</p>
            </div>
          </div>
        </label>`
        })()}

        <p class="text-[11px] text-gray-400 text-center">
          💡 ชำระเงินผ่าน PromptPay / โอนเงิน แล้วอัปโหลดสลิป<br/>
          แอดมินจะอนุมัติภายใน 24 ชั่วโมง
        </p>
        <button id="qp-copy-file"
          class="w-full py-2.5 rounded-xl border border-amber-200 bg-white text-amber-700 text-sm font-semibold hover:bg-amber-50 transition">
          🔗 ทำสำเนาไฟล์ ปพ.5 ใช้งานฟรี
        </button>
      </div>

      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="qp-cancel"
          class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 font-medium">
          ยกเลิก
        </button>
        <button id="qp-next"
          class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
          ถัดไป →
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)

  wrap.querySelector('#qp-cancel').addEventListener('click', () => wrap.remove())
  wrap.querySelector('#qp-copy-file').addEventListener('click', () => {
    wrap.remove()
    _showStandaloneCopyFlow()
  })
  wrap.querySelector('#qp-next').addEventListener('click', () => {
    const pkg = wrap.querySelector('input[name="pkg"]:checked')?.value
    if (!pkg) { alert('กรุณาเลือกแพ็กเกจก่อนครับ'); return }
    wrap.remove()
    if (pkg === 'per_subject') {
      _showRoomCountPage(course, cfg)
    } else {
      _showPaymentPage(pkg, course, 1, cfg)
    }
  })
}

// ── โหมดใหม่: โรงเรียนสนับสนุน ──────────────────────────────────────────────

function _showSchoolSponsoredPopup(count, course, cfg = {}) {
  document.getElementById('school-sponsored-popup')?.remove()
  const wrap = document.createElement('div')
  wrap.id = 'school-sponsored-popup'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-4 pb-4 border-b border-gray-100">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">🎉</div>
          <div>
            <h3 class="font-bold text-gray-800 leading-tight">${cfg.sponsoredHeaderTitle || 'ขอบคุณที่ไว้วางใจใช้ระบบนี้ครับ'}</h3>
            <p class="text-xs text-gray-400">ระบบ ปพ.5 ออนไลน์</p>
          </div>
        </div>
      </div>
      <div class="px-5 py-4 space-y-3">
        <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
          <p class="text-sm font-semibold text-emerald-800">${cfg.sponsoredBoxTitle || '🏫 คุณโรงเรียนฯ ดูแลคุณครูแล้ว'}</p>
          <p class="text-xs text-emerald-700 mt-1 leading-relaxed">
            ${cfg.sponsoredBoxBody || 'ท่านผู้อำนวยการได้เปิดสิทธิ์ให้คุณครูทุกท่านใช้ได้ไม่จำกัดวิชา — เป็นของขวัญจากโรงเรียนให้คุณครูทุกท่านครับ'}
          </p>
        </div>

        <button id="sp-donate"
          class="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white font-bold text-sm
                 shadow-lg shadow-amber-200/60 transition-all flex items-center justify-center gap-2">
          ${cfg.sponsoredDonateBtn || '☕ ขอบคุณผู้พัฒนาด้วยกาแฟสักแก้ว'}
          <span class="font-normal text-xs opacity-90">${cfg.sponsoredDonateSub || 'ถ้าระบบนี้ช่วยงานคุณครูได้บ้าง'}</span>
        </button>

        <button id="sp-access"
          class="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm
                 shadow-lg shadow-emerald-200/60 transition-all flex items-center justify-center gap-2">
          ${cfg.sponsoredAccessBtn || '✨ รับของขวัญจากโรงเรียนเลย'}
        </button>

        <p class="text-center text-[11px] text-gray-400 pb-1">${cfg.sponsoredFooter || 'ไม่ว่าจะกดปุ่มไหน คุณครูได้ใช้งานไม่จำกัดเหมือนกันเลยครับ 🙏'}</p>
      </div>
    </div>`

  document.body.appendChild(wrap)

  wrap.querySelector('#sp-donate').addEventListener('click', () => {
    wrap.remove()
    _showDonateModal(course, cfg)
  })

  wrap.querySelector('#sp-access').addEventListener('click', async () => {
    const btn = wrap.querySelector('#sp-access')
    btn.disabled = true
    btn.textContent = '⏳ กำลังตรวจสอบ...'
    try {
      const existing = await getMyPaymentRequests(_teacher?.id).catch(() => [])
      const dup = existing.find(r => r.package_type === 'school_sponsored' &&
        (r.status === 'pending' || r.status === 'approved'))
      if (dup) {
        showToast(dup.status === 'approved'
          ? 'คุณได้รับสิทธิ์แล้วครับ ✅'
          : 'ส่งคำขอไปแล้ว รอแอดมินอนุมัติครับ ⏳', 'info')
        wrap.remove(); return
      }
      await createPaymentRequest({ teacher_id: _teacher?.id, package_type: 'school_sponsored', amount: 0, status: 'pending' })
      showToast('ส่งคำขอแล้ว ✅ แอดมินจะอนุมัติให้เร็วๆ นี้ครับ', 'success')
      wrap.remove()
    } catch (e) {
      showToast('เกิดข้อผิดพลาด: ' + (e.message ?? ''), 'error')
      btn.disabled = false
      btn.textContent = '🎓 รับสิทธิ์ไม่จำกัดเลย'
    }
  })
}

async function _showDonateModal(course, cfg = {}) {
  document.getElementById('donate-modal')?.remove()

  // ── ป้องกันซ้ำ: เช็ค existing pending/approved ──────────────────────────────
  if (_teacher?.id) {
    try {
      const existing = await getMyDonationRequests(_teacher.id)
      const hasApproved = existing.some(r => r.package_type === 'donation' && r.status === 'approved')
      const hasPending  = existing.some(r => r.package_type === 'donation' && r.status === 'pending')
      if (hasApproved) {
        showToast('คุณครูเป็นผู้สนับสนุนอยู่แล้วครับ 🙏', 'success'); return
      }
      if (hasPending) {
        showToast('คุณครูส่งหลักฐานรอการอนุมัติอยู่แล้วครับ — กรุณารอแอดมินตรวจสอบก่อนนะครับ', 'warning'); return
      }
    } catch { /* ไม่ block ถ้า check ไม่ได้ */ }
  }

  const wrap = document.createElement('div')
  wrap.id = 'donate-modal'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  const promptpay  = cfg.paymentPromptpay ?? ''
  const minAmount  = _toPositiveInt(cfg.donationMinAmount, 49)
  const stepAmount = _toPositiveInt(cfg.donationAmountStep, 50)
  const quickCount = Math.min(_toPositiveInt(cfg.donationQuickCount, 4), 8)
  const quickAmounts  = Array.from({ length: quickCount }, (_, i) => minAmount + (i * stepAmount))
  const allFeatures   = _parseDonationFeatures(cfg)
  const stickerTiers  = _parseDonationStickers(cfg, minAmount, stepAmount)
  const firstTier     = stickerTiers[0]

  // render feature list ตาม tier index (1-based)
  const _featureListHtml = (tierIdx) =>
    allFeatures.map(f => {
      const unlocked = tierIdx >= (f.minTier ?? 1)
      return unlocked
        ? `<div class="flex gap-2 text-amber-900"><span>${_esc(f.icon)}</span><span>${_esc(f.text)}</span></div>`
        : `<div class="flex gap-2 text-gray-300 opacity-70"><span>🔒</span><span class="line-through">${_esc(f.text)}<span class="ml-1 text-[9px] no-underline not-italic text-gray-400">ระดับ ${f.minTier}+</span></span></div>`
    }).join('')

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="flex justify-center pt-3 pb-1 sm:hidden">
        <div class="w-10 h-1 rounded-full bg-gray-200"></div>
      </div>
      <div class="px-5 pt-4 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="donate-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">☕ สนับสนุนผู้พัฒนา</h3>
          <p class="text-xs text-gray-400">ขอบคุณมากเลยครับ 🙏</p>
        </div>
      </div>
      <div class="px-5 py-4 space-y-4 overflow-auto flex-1">
        <p class="text-sm text-gray-600 text-center leading-relaxed">
          สนับสนุนขั้นต่ำ ${minAmount} บาท เพื่อรับสิทธิ์ผู้สนับสนุน<br/>
          <span class="text-xs text-gray-400">ระบบหลักใช้งานได้ไม่จำกัดอยู่แล้ว สิทธิ์นี้เป็นฟีเจอร์พิเศษเพิ่มเติมครับ</span>
        </p>
        <!-- Feature list: อัปเดตตาม amount -->
        <div class="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
          <p class="text-xs font-bold text-amber-800 mb-2">ฟีเจอร์พิเศษสำหรับคุณครูที่โดเนท</p>
          <div id="donate-feature-list" class="grid grid-cols-1 gap-1.5 text-[11px] leading-snug">
            ${_featureListHtml(1)}
          </div>
        </div>
        <!-- Sticker preview -->
        <div id="donate-sticker-preview">
          ${_donationStickerHtml(firstTier)}
        </div>
        <!-- Amount input -->
        <div class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 focus-within:border-amber-400 transition">
          <span class="text-2xl font-bold text-amber-500">฿</span>
          <input id="donate-amount" type="number" min="${minAmount}" step="${stepAmount}" value="${minAmount}" placeholder="${minAmount}"
            class="flex-1 bg-transparent text-3xl font-extrabold text-amber-700 outline-none w-full" />
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${quickAmounts.map(v =>
            `<button class="donate-quick flex-1 py-2 rounded-xl border-2 border-amber-200 text-amber-700 text-sm font-bold hover:bg-amber-50 transition">${v}</button>`
          ).join('')}
        </div>
        <p class="text-[11px] text-gray-400 text-center leading-relaxed">
          ยอดที่สูงขึ้นจะปลดล็อกฟีเจอร์เพิ่มเติม และอัปเกรดระดับตราผู้สนับสนุนครับ
        </p>
        <div id="donate-qr-area" class="hidden flex-col items-center gap-3 py-2">
          <img id="donate-qr-img" class="w-56 h-56 rounded-2xl shadow-md" />
          <p class="text-xs text-gray-500 text-center">สแกนด้วย app ธนาคาร หรือ PromptPay</p>
        </div>
        <button id="donate-gen-qr"
          class="w-full py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-white font-bold text-sm shadow-md shadow-amber-200/50 transition">
          สร้าง QR Code →
        </button>
        <button id="donate-confirm"
          class="hidden w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-200/50 transition">
          ✅ ฉันโอนแล้ว
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)

  const amountInput   = wrap.querySelector('#donate-amount')
  const stickerPreview = wrap.querySelector('#donate-sticker-preview')
  const featureList   = wrap.querySelector('#donate-feature-list')

  const updatePreview = () => {
    const amount   = parseFloat(amountInput.value) || 0
    const tier     = [...stickerTiers].reverse().find(t => amount >= t.amount) || stickerTiers[0]
    const tierIdx  = stickerTiers.indexOf(tier) + 1   // 1-based
    if (stickerPreview) stickerPreview.innerHTML = _donationStickerHtml(tier)
    if (featureList)    featureList.innerHTML    = _featureListHtml(tierIdx)
  }

  wrap.querySelectorAll('.donate-quick').forEach(btn => {
    btn.addEventListener('click', () => {
      amountInput.value = btn.textContent.trim()
      updatePreview()
    })
  })
  amountInput.addEventListener('input', updatePreview)

  wrap.querySelector('#donate-back').addEventListener('click', () => {
    wrap.remove()
    _showSchoolSponsoredPopup(0, course, cfg)
  })

  wrap.querySelector('#donate-gen-qr').addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value)
    if (!amount || amount < minAmount) { showToast(`กรุณาระบุยอดโดเนทขั้นต่ำ ${minAmount} บาทครับ`, 'error'); return }
    if (!promptpay) { showToast('แอดมินยังไม่ได้ตั้งค่าเบอร์ PromptPay', 'error'); return }
    try {
      const dataUrl = await promptpayQRDataURL(promptpay, amount)
      wrap.querySelector('#donate-qr-img').src = dataUrl
      wrap.querySelector('#donate-qr-area').classList.remove('hidden')
      wrap.querySelector('#donate-qr-area').classList.add('flex')
      wrap.querySelector('#donate-confirm').classList.remove('hidden')
      wrap.querySelector('#donate-gen-qr').classList.add('hidden')
    } catch (e) {
      showToast('สร้าง QR ไม่สำเร็จ: ' + (e.message ?? ''), 'error')
    }
  })

  wrap.querySelector('#donate-confirm').addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value)
    const btn = wrap.querySelector('#donate-confirm')
    btn.disabled = true; btn.textContent = '⏳ กำลังส่งข้อมูล...'
    try {
      await createPaymentRequest({ teacher_id: _teacher?.id, package_type: 'donation', amount, status: 'pending' })
      showToast('ขอบคุณมากครับ! 🙏 แอดมินจะรับทราบและส่งการ์ดขอบคุณให้ครับ', 'success')
      wrap.remove()
      _initDonateFloatingBtn(true)
    } catch (e) {
      showToast('เกิดข้อผิดพลาด: ' + (e.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = '✅ ฉันโอนแล้ว'
    }
  })
}

// ให้ admin เรียกดูตัวอย่างได้โดยส่ง cfg มาเอง
window._showThankYouCardAdmin = (request, cfgOverride) =>
  _showThankYouCard(request, cfgOverride)

async function _showThankYouCard(request, cfgOverride = null) {
  document.getElementById('thankyou-card-modal')?.remove()

  const cfg = cfgOverride ?? await getSystemConfig().catch(() => ({}))
  const minAmount  = _toPositiveInt(cfg.donationMinAmount, 99)
  const stepAmount  = _toPositiveInt(cfg.donationAmountStep, 50)
  const features    = _parseDonationFeatures(cfg)
  const tiers       = _parseDonationStickers(cfg, minAmount, stepAmount)
  const amount      = request.amount ?? 0
  const tier        = [...tiers].reverse().find(t => amount >= t.amount) ?? tiers[0]
  const tierIndex   = _getDonorTierIndex(cfg, tiers, amount)  // 1-4
  const thankText  = (cfg.donationThankYouCard ?? '').trim()
    || `❤️ ขอบคุณจากใจครับคุณครู

คุณครูคือหนึ่งในผู้สนับสนุนส่วนน้อยมาก ๆ
ที่มองเห็นคุณค่าของระบบ ปพ.5 ออนไลน์
มากกว่าแค่ "เครื่องมือใช้งาน" 📝

การสนับสนุนของคุณครูมีค่ามากกว่าจำนวนเงินครับ ☕
เพราะมันคือกำลังใจสำคัญที่ทำให้ผมรู้สึกว่า
ระบบเล็ก ๆ นี้ได้ช่วยลดภาระงานของครูได้จริง 🌷

ขอบคุณที่ทำให้ผมมีกำลังใจพัฒนาระบบนี้ต่อไปเพื่อครูครับ 🙏✨

และในฐานะผู้สนับสนุน คุณครูจะได้รับสิทธิ์พิเศษด้านล่างนี้ด้วยนะครับ`

  const stickerEl = (() => {
    if (!tier) return '<div class="text-5xl mb-3">☕</div>'
    const s = String(tier.sticker ?? '')
    if (/^https?:\/\//.test(s))
      return `<div class="w-20 h-20 mx-auto mb-3 flex items-center justify-center drop-shadow-lg">
        <img src="${_esc(s)}" class="w-full h-full object-contain" /></div>`
    return `<div class="text-5xl mb-3">${_esc(s || '☕')}</div>`
  })()

  const wrap = document.createElement('div')
  wrap.id = 'thankyou-card-modal'
  wrap.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4'

  wrap.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden max-h-[92vh] flex flex-col">
      <!-- Header -->
      <div class="bg-gradient-to-br from-amber-400 to-orange-500 px-6 py-6 text-center flex-shrink-0">
        ${stickerEl}
        ${tier ? `<div class="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">${_esc(tier.title)}</div>` : ''}
        <h2 class="text-white font-bold text-xl">ขอบคุณครับ! 🙏</h2>
        <p class="text-amber-100 text-sm mt-1">${amount ? `โดเนท ${amount.toLocaleString()} บาท` : 'การสนับสนุนของคุณครูมีความหมายมากครับ'}</p>
      </div>
      <!-- Body -->
      <div class="px-5 py-4 overflow-y-auto flex-1 space-y-4">
        <!-- ข้อความขอบคุณ -->
        ${(request.admin_note || thankText) ? `
        <div class="bg-amber-50 rounded-2xl p-4 text-sm text-amber-900 leading-relaxed whitespace-pre-line border border-amber-100">
          ${_esc(request.admin_note || thankText)}
        </div>` : ''}
        <!-- ฟีเจอร์พิเศษ: unlocked / locked -->
        ${features.length ? `
        <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p class="text-xs font-bold text-emerald-800 mb-2.5">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-1.5">
            ${features.map(f => {
              const unlocked = tierIndex >= (f.minTier ?? 1)
              return unlocked
                ? `<div class="flex items-start gap-2 text-sm text-emerald-900">
                     <span class="flex-shrink-0">${_esc(f.icon)}</span>
                     <span>${_esc(f.text)}</span>
                   </div>`
                : `<div class="flex items-start gap-2 text-sm text-gray-400 opacity-60">
                     <span class="flex-shrink-0">🔒</span>
                     <span class="line-through">${_esc(f.text)}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap">ระดับ ${f.minTier}+</span>
                   </div>`
            }).join('')}
          </div>
          ${tierIndex < tiers.length ? `
          <p class="text-[10px] text-emerald-700 mt-3 pt-2 border-t border-emerald-200">
            🔓 อัปเกรดเพื่อปลดล็อกฟีเจอร์ที่เหลือได้เลยครับ
          </p>` : ''}
        </div>` : ''}
        <!-- คำอธิบาย tier -->
        ${tier?.note ? `
        <p class="text-xs text-center text-gray-400 italic">"${_esc(tier.note)}"</p>` : ''}
      </div>
      <!-- Footer -->
      <div class="px-5 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="tc-close"
          class="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm transition shadow-md">
          รับทราบและเริ่มใช้งาน 🚀
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)
  wrap.querySelector('#tc-close').addEventListener('click', () => {
    localStorage.setItem(`pp5_thankyou_seen_${request.id}`, '1')
    wrap.remove()
    document.getElementById('donate-float-btn')?.remove()
    _addDonateToSidebar(request)
  })
}

async function _addDonateToSidebar(approvedRequest = null) {
  if (document.getElementById('sidebar-donate-item')) return
  const nav = document.querySelector('#sidebar nav')
  if (!nav) return

  // ถ้า approved — แสดงสติกเกอร์ tier ของครูคนนี้
  let stickerHtml = '<span>☕</span>'
  let titleText   = 'สนับสนุนผู้พัฒนาอีกครั้ง'
  if (approvedRequest) {
    const cfg    = await getSystemConfig().catch(() => ({}))
    const minAmt = _toPositiveInt(cfg.donationMinAmount, 99)
    const step   = _toPositiveInt(cfg.donationAmountStep, 50)
    const tiers  = _parseDonationStickers(cfg, minAmt, step)
    const amount = approvedRequest.amount ?? 0
    const tier   = [...tiers].reverse().find(t => amount >= t.amount) ?? tiers[0]
    if (tier) {
      const s = String(tier.sticker ?? '')
      stickerHtml = /^https?:\/\//.test(s)
        ? `<img src="${_esc(s)}" class="w-6 h-6 object-contain rounded" title="${_esc(tier.title)}" />`
        : `<span title="${_esc(tier.title)}">${_esc(s || '🏅')}</span>`
      titleText = `${tier.title} — คลิกเพื่อโดเนทอีกครั้ง`
    }
  }

  const item = document.createElement('a')
  item.id = 'sidebar-donate-item'
  item.href = '#'
  item.title = titleText
  item.className = 'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition text-emerald-400/60 hover:text-amber-400 hover:bg-emerald-800/40 opacity-60 hover:opacity-100'
  item.innerHTML = `${stickerHtml} <span>${approvedRequest ? 'ผู้สนับสนุนระบบ' : 'สนับสนุนผู้พัฒนา'}</span>`
  item.addEventListener('click', async e => {
    e.preventDefault()
    const cfg = await getSystemConfig().catch(() => ({}))
    _showDonateModal(null, cfg)
  })
  nav.appendChild(item)
}

function _initDonateFloatingBtn(hasPendingDonation = false) {
  document.getElementById('donate-float-btn')?.remove()
  const btn = document.createElement('button')
  btn.id = 'donate-float-btn'
  btn.title = hasPendingDonation ? 'รอแอดมินรับทราบการโดเนทของคุณ' : 'สนับสนุนผู้พัฒนา'
  btn.className = 'fixed bottom-5 right-5 z-[70] w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-500 text-white shadow-xl shadow-amber-300/50 flex items-center justify-center transition-transform hover:scale-110'
  btn.innerHTML = hasPendingDonation
    ? `<span class="text-2xl">☕</span>`
    : `<span class="relative flex items-center justify-center w-full h-full">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-40"></span>
        <span class="relative text-2xl">☕</span>
       </span>`
  btn.addEventListener('click', async () => {
    const cfg = await getSystemConfig().catch(() => ({}))
    _showDonateModal(null, cfg)
  })
  document.body.appendChild(btn)
}

async function _initDonationFlow(teacherId) {
  try {
    const [requests, cfg] = await Promise.all([
      getMyDonationRequests(teacherId),
      getSystemConfig().catch(() => ({})),
    ])

    // โหมดเดิม — ไม่แสดงปุ่มโดเนทเลย
    if ((cfg.quotaMode ?? 'payment') !== 'school_sponsored') return

    const approved = requests.find(r => r.package_type === 'donation' && r.status === 'approved')
    const pending  = requests.some(r => r.package_type === 'donation' && r.status === 'pending')

    if (approved) {
      const seen = localStorage.getItem(`pp5_thankyou_seen_${approved.id}`)
      if (!seen && approved.admin_note) {
        _showThankYouCard(approved)
      } else {
        _addDonateToSidebar(approved)
      }
    } else {
      _initDonateFloatingBtn(pending)
    }
  } catch {
    // ไม่แสดงปุ่มถ้า config โหลดไม่ได้
  }
}

// ── หน้า 1.5: เลือกจำนวนห้อง (per_subject) ──────────────────────────────────
function _showRoomCountPage(course, cfg = {}) {
  document.getElementById('room-count-page')?.remove()
  const pClass = parseInt(cfg.pricePerClass ?? 49)
  const wrap = document.createElement('div')
  wrap.id = 'room-count-page'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="rc-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">แพ็กเกจรายห้อง</h3>
          <p class="text-xs text-gray-400">${pClass} บาท / ห้อง / เทอม</p>
        </div>
      </div>
      <div class="px-5 py-6 flex flex-col gap-5">
        <p class="text-sm text-gray-600">ต้องการเพิ่มห้องเรียนอีกกี่ห้อง?</p>
        <div class="flex items-center justify-center gap-5">
          <button id="rc-minus"
            class="w-12 h-12 rounded-xl border-2 border-gray-200 text-2xl font-bold text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition flex items-center justify-center">
            −
          </button>
          <div class="text-center min-w-[80px]">
            <p id="rc-count" class="text-5xl font-extrabold text-indigo-600">1</p>
            <p class="text-xs text-gray-400 mt-1">ห้อง</p>
          </div>
          <button id="rc-plus"
            class="w-12 h-12 rounded-xl border-2 border-gray-200 text-2xl font-bold text-gray-500 hover:bg-gray-50 active:bg-gray-100 transition flex items-center justify-center">
            ＋
          </button>
        </div>
        <div class="bg-indigo-50 rounded-xl p-4 text-center">
          <p class="text-xs text-gray-500 mb-1">ยอดที่ต้องชำระ</p>
          <p id="rc-total" class="text-3xl font-extrabold text-indigo-600">${pClass} <span class="text-sm font-normal text-gray-400">บาท</span></p>
          <p class="text-xs text-gray-400 mt-1">(${pClass} บ. × 1 ห้อง)</p>
        </div>
      </div>
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="rc-cancel"
          class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 font-medium">
          ยกเลิก
        </button>
        <button id="rc-next"
          class="flex-1 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
          ถัดไป →
        </button>
      </div>
    </div>`

  document.body.appendChild(wrap)

  let count = 1
  const countEl = wrap.querySelector('#rc-count')
  const totalEl = wrap.querySelector('#rc-total')

  const updateDisplay = () => {
    countEl.textContent = count
    const total = pClass * count
    totalEl.innerHTML = `${total.toLocaleString()} <span class="text-sm font-normal text-gray-400">บาท</span>`
    totalEl.nextElementSibling.textContent = `(${pClass} บ. × ${count} ห้อง)`
    wrap.querySelector('#rc-minus').disabled = count <= 1
  }

  wrap.querySelector('#rc-minus').addEventListener('click', () => { if (count > 1) { count--; updateDisplay() } })
  wrap.querySelector('#rc-plus').addEventListener('click', () => { count++; updateDisplay() })
  wrap.querySelector('#rc-back').addEventListener('click', () => {
    wrap.remove()
    _showQuotaPopup(0, course, cfg)
  })
  wrap.querySelector('#rc-cancel').addEventListener('click', () => wrap.remove())
  wrap.querySelector('#rc-next').addEventListener('click', () => {
    wrap.remove()
    _showPaymentPage('per_subject', course, count, cfg)
  })
}

// ── หน้า 2: ชำระเงิน (รองรับ QR Code + จำนวนห้อง) ──────────────────────────
async function _showPaymentPage(pkgType, course, roomCount = 1, cfgIn = null) {
  document.getElementById('payment-page')?.remove()

  const cfg    = cfgIn ?? await getSystemConfig().catch(() => ({}))
  const pClass = parseInt(cfg.pricePerClass ?? 49)
  const pSem   = parseInt(cfg.priceSemester ?? 299)
  const ppMobile = (cfg.paymentPromptpay ?? '0825424340').replace(/\D/g, '')

  const amount = pkgType === 'semester' ? pSem : pClass * roomCount
  const pkgLabel = pkgType === 'semester'
    ? `เหมาทั้งเทอม`
    : `รายห้อง × ${roomCount} ห้อง`
  const pkgDetail = pkgType === 'semester'
    ? `ทุกวิชา ทุกห้อง ตลอดเทอม`
    : `${pClass} บ. × ${roomCount} ห้อง = ${amount.toLocaleString()} บ.`

  const wrap = document.createElement('div')
  wrap.id = 'payment-page'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'

  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">

      <!-- Header -->
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <button id="pp-back" class="text-gray-400 hover:text-gray-600 text-xl leading-none mr-1">←</button>
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">ชำระเงิน — ${pkgLabel}</h3>
          <p class="text-xs text-gray-400">${pkgDetail}</p>
        </div>
        <div class="bg-indigo-600 text-white text-sm font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
          ${amount.toLocaleString()} บ.
        </div>
      </div>

      <!-- Body -->
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">

        <!-- QR Code PromptPay (dynamic) -->
        <div class="text-center">
          <p class="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">สแกน QR PromptPay</p>
          <div id="pp-qr-wrap" class="flex flex-col items-center gap-2">
            <div class="w-[220px] h-[220px] bg-gray-100 rounded-xl flex items-center justify-center animate-pulse mx-auto">
              <p class="text-xs text-gray-400">กำลังสร้าง QR...</p>
            </div>
          </div>
          <div class="mt-2 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2">
            <span class="text-xs text-gray-500">ยอดที่ต้องชำระ</span>
            <span class="font-extrabold text-emerald-700 text-lg">${amount.toLocaleString()} บาท</span>
          </div>
          <p class="text-[11px] text-gray-400 mt-1">พร้อมเพย์ ${ppMobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}</p>
        </div>

        <!-- รายละเอียดบัญชี (คัดลอกได้) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2.5">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">ข้อมูลการโอน</p>
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">พร้อมเพย์</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${ppMobile}">
              ${ppMobile.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>
          ${cfg.paymentBankName ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ธนาคาร</span>
            <span class="text-sm font-medium text-gray-700">${cfg.paymentBankName}</span>
          </div>` : ''}
          ${cfg.paymentAccountNo ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">เลขบัญชี</span>
            <button class="copy-btn font-mono text-sm font-bold text-indigo-600 flex items-center gap-1.5"
              data-copy="${cfg.paymentAccountNo}">
              ${cfg.paymentAccountNo} <span class="text-[10px] text-gray-400">คัดลอก</span>
            </button>
          </div>` : ''}
          ${cfg.paymentAccountName ? `
          <div class="flex justify-between items-center">
            <span class="text-xs text-gray-500">ชื่อบัญชี</span>
            <span class="text-sm font-medium text-gray-700">${cfg.paymentAccountName}</span>
          </div>` : ''}
          ${cfg.paymentNote ? `
          <p class="text-[11px] text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mt-1">${cfg.paymentNote}</p>` : ''}
        </div>

        <!-- อัปโหลดสลิป -->
        <div>
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">อัปโหลดสลิปการโอนเงิน</p>
          <label id="slip-label"
            class="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-200
                   rounded-xl py-6 cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition">
            <span class="text-3xl">📎</span>
            <span class="text-sm text-gray-500">แตะเพื่อเลือกรูปสลิป</span>
            <span class="text-xs text-gray-400">รองรับ JPG, PNG, PDF</span>
            <input type="file" id="slip-file" accept="image/*,application/pdf" class="sr-only"/>
          </label>
          <div id="slip-preview" class="hidden mt-2 relative">
            <img id="slip-img" class="w-full rounded-xl object-cover max-h-48 border border-gray-100"/>
            <p id="slip-name" class="text-xs text-gray-500 mt-1 text-center truncate"></p>
            <button id="slip-remove" class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs">✕</button>
          </div>
        </div>

        <p class="text-[11px] text-gray-400 text-center">
          หลังส่งหลักฐาน แอดมินจะตรวจสอบและอนุมัติภายใน 24 ชั่วโมง
        </p>
      </div>

      <!-- Footer -->
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
        <button id="pp-submit"
          class="w-full py-3.5 rounded-xl bg-emerald-600 text-white text-sm font-bold
                 hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
          ✅ ส่งหลักฐานการชำระเงิน
        </button>
        <p id="pp-err" class="hidden text-xs text-red-500 text-center mt-2"></p>
      </div>
    </div>`

  document.body.appendChild(wrap)

  // สร้าง QR Code ตามยอดจริง
  promptpayQRDataURL(ppMobile, amount).then(dataUrl => {
    const qrWrap = wrap.querySelector('#pp-qr-wrap')
    if (qrWrap) qrWrap.innerHTML = `
      <img src="${dataUrl}" class="w-[220px] h-[220px] rounded-xl border border-gray-100 shadow-sm mx-auto" />
      <p class="text-[10px] text-gray-400">QR สำหรับ ${amount.toLocaleString()} บาทเท่านั้น</p>`
  }).catch(() => {
    // fallback: ใช้รูป QR จาก admin settings ถ้ามี
    if (cfg.paymentQrUrl) {
      const qrWrap = wrap.querySelector('#pp-qr-wrap')
      if (qrWrap) qrWrap.innerHTML = `<img src="${cfg.paymentQrUrl}" class="mx-auto h-[220px] object-contain rounded-xl border border-gray-100 shadow-sm" />`
    }
  })

  // ← กลับ
  wrap.querySelector('#pp-back').addEventListener('click', () => {
    wrap.remove()
    if (pkgType === 'per_subject') {
      _showRoomCountPage(course, cfg)
    } else {
      _showQuotaPopup(_teacher?.teachers_quota?.total_classes_created ?? 0, course, cfg)
    }
  })

  // คัดลอก
  wrap.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.copy).catch(()=>{})
      btn.querySelector('span').textContent = '✓ คัดลอกแล้ว'
      setTimeout(() => btn.querySelector('span').textContent = 'คัดลอก', 2000)
    })
  })

  // เลือกไฟล์
  let slipFile = null
  const fileInput = wrap.querySelector('#slip-file')
  const preview  = wrap.querySelector('#slip-preview')
  const slipImg  = wrap.querySelector('#slip-img')
  const slipName = wrap.querySelector('#slip-name')

  fileInput.addEventListener('change', e => {
    slipFile = e.target.files[0]
    if (!slipFile) return
    slipName.textContent = slipFile.name
    if (slipFile.type.startsWith('image/')) {
      slipImg.src = URL.createObjectURL(slipFile)
      slipImg.classList.remove('hidden')
    } else {
      slipImg.classList.add('hidden')
    }
    preview.classList.remove('hidden')
    wrap.querySelector('#slip-label').classList.add('hidden')
  })

  wrap.querySelector('#slip-remove').addEventListener('click', () => {
    slipFile = null; fileInput.value = ''
    preview.classList.add('hidden')
    wrap.querySelector('#slip-label').classList.remove('hidden')
  })

  // ส่งหลักฐาน
  wrap.querySelector('#pp-submit').addEventListener('click', async () => {
    const errEl = wrap.querySelector('#pp-err')
    if (!slipFile) {
      errEl.textContent = 'กรุณาอัปโหลดสลิปก่อนนะครับ'
      errEl.classList.remove('hidden'); return
    }
    errEl.classList.add('hidden')
    const btn = wrap.querySelector('#pp-submit')
    btn.disabled = true; btn.textContent = '⏳ กำลังส่ง...'
    try {
      const req = await createPaymentRequest({
        teacher_id:   _teacher.id,
        package_type: pkgType,
        amount,
        room_count:   pkgType === 'per_subject' ? roomCount : null,
        subject_id:   pkgType === 'per_subject' ? (course?.id ?? null) : null,
        status:       'pending',
      })
      const slipUrl = await uploadPaymentSlip(slipFile, req.id)
      await supabase.from('payment_requests').update({ slip_url: slipUrl }).eq('id', req.id)

      wrap.remove()
      _showPaymentSuccess()
    } catch (err) {
      btn.disabled = false; btn.textContent = '✅ ส่งหลักฐานการชำระเงิน'
      errEl.textContent = 'เกิดข้อผิดพลาด กรุณาลองใหม่: ' + (err.message ?? '')
      errEl.classList.remove('hidden')
    }
  })
}

// ── หน้า 3: สำเร็จ ───────────────────────────────────────────────────────────
function _showPaymentSuccess() {
  const wrap = document.createElement('div')
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'
  wrap.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-7 text-center">
      <div class="text-6xl mb-4">✅</div>
      <h3 class="text-lg font-bold text-gray-800 mb-2">ส่งหลักฐานแล้ว!</h3>
      <p class="text-sm text-gray-500 mb-1">แอดมินจะตรวจสอบและอนุมัติ</p>
      <p class="text-sm font-semibold text-indigo-600 mb-5">ภายใน 24 ชั่วโมง</p>
      <div class="bg-amber-50 rounded-xl p-3 mb-5 text-left">
        <p class="text-xs text-amber-700">
          📱 คุณจะได้รับการแจ้งเตือนในแอปเมื่อแอดมินอนุมัติแล้ว
          หลังจากนั้นกลับมากด "สร้างห้องเรียน" ได้เลยครับ
        </p>
      </div>
      <button onclick="this.closest('.fixed').remove()"
        class="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700">
        รับทราบ ขอบคุณครับ
      </button>
    </div>`
  document.body.appendChild(wrap)
  wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove() })
}

// ─── Sidebar header: logo + term ─────────────────────────────────────────────
async function loadSidebarHeader(teacher) {
  try {
    const cfg = await getSystemConfig()

    // ภาคเรียน / ปีการศึกษา (keys ตรงกับที่ admin บันทึก)
    const term = cfg.semester ?? cfg.semester ?? '—'
    const year = cfg.academicYear ?? cfg.academic_year ?? '—'
    const termEl = document.getElementById('sidebar-term')
    if (termEl) termEl.textContent = `ภาคเรียนที่ ${term} / ${year}`

    // โลโก้: มัธยม → samaiLogoUrl, ปวช → porworLogoUrl
    const cat    = teacher?.category ?? ''
    const isVoc  = /ปวช/i.test(cat)
    const logoUrl = isVoc
      ? (cfg.porworLogoUrl ?? cfg.samaiLogoUrl ?? '')
      : (cfg.samaiLogoUrl ?? '')

    const logoImg = document.getElementById('school-logo')
    const logoFb  = document.getElementById('school-logo-fallback')
    if (logoImg && logoUrl) {
      logoImg.src = logoUrl
      logoImg.classList.remove('hidden')
      logoFb?.classList.add('hidden')
    }

    // ช่องทางติดต่อ — แสดงเป็นปุ่มเดียว เมื่อคลิกเปิด popup กลางหน้าจอ
    const contactEl = document.getElementById('sidebar-contact')
    if (contactEl) {
      const links = [
        cfg.contactPhone    && { icon:'📞', label: cfg.contactPhone,    href: `tel:${cfg.contactPhone.replace(/\s/g,'')}` },
        cfg.contactLine     && { icon:'💬', label: 'LINE: ' + cfg.contactLine, href: cfg.contactLine.startsWith('http') ? cfg.contactLine : `https://line.me/R/ti/p/${cfg.contactLine}` },
        cfg.contactFacebook && { icon:'📘', label: 'Facebook',          href: cfg.contactFacebook },
        cfg.contactEmail    && { icon:'📧', label: cfg.contactEmail,    href: `mailto:${cfg.contactEmail}` },
        cfg.contactOther    && { icon:'🔗', label: cfg.contactOther,    href: null },
      ].filter(Boolean)

      if (links.length > 0) {
        // เก็บ links ไว้ใน global สำหรับ popup
        window._contactLinks = links

        contactEl.innerHTML = `
          <button id="btn-contact-admin"
            class="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm
                   font-medium text-emerald-200 hover:bg-emerald-700 border border-emerald-700 transition">
            📞 ติดต่อผู้ดูแล
          </button>`
        contactEl.classList.remove('hidden')

        document.getElementById('btn-contact-admin').addEventListener('click', () => {
          document.getElementById('contact-modal')?.remove()
          const m = document.createElement('div')
          m.id = 'contact-modal'
          m.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
          m.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-fade">
              <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <h3 class="font-bold text-gray-800">📞 ติดต่อผู้ดูแลระบบ</h3>
                <button id="contact-modal-close"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 text-lg">×</button>
              </div>
              <div class="p-5 space-y-3">
                ${links.map(l => l.href
                  ? `<a href="${l.href}" target="_blank" rel="noopener"
                      class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 transition group">
                        <span class="text-xl">${l.icon}</span>
                        <span class="text-sm font-medium text-gray-700 group-hover:text-emerald-700 break-all">${l.label}</span>
                        <span class="ml-auto text-gray-300 group-hover:text-emerald-400 text-xs">→</span>
                      </a>`
                  : `<div class="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
                       <span class="text-xl">${l.icon}</span>
                       <span class="text-sm font-medium text-gray-700 break-all">${l.label}</span>
                     </div>`
                ).join('')}
                <button id="contact-donate-btn"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-white font-semibold text-sm shadow-md shadow-amber-200/50 transition">
                  ☕ สนับสนุนผู้พัฒนา
                </button>
              </div>
            </div>`
          document.body.appendChild(m)
          m.querySelector('#contact-modal-close').addEventListener('click', () => m.remove())
          m.querySelector('#contact-donate-btn')?.addEventListener('click', async () => {
            m.remove()
            const cfg = await getSystemConfig().catch(() => ({}))
            _showDonateModal(null, cfg)
          })
          m.addEventListener('click', e => { if (e.target === m) m.remove() })
        })
      }
    }
  } catch { /* ไม่ critical */ }
}

// ─── Init ─────────────────────────────────────────────────────────────────────
// ── Web Notifications ─────────────────────────────────────────────────────────

async function _registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return
  try {
    await navigator.serviceWorker.register('/pp5online/sw.js', { scope: '/pp5online/' })
  } catch {}
}

function _showNotifyPermissionBanner() {
  if (document.getElementById('notify-banner')) return
  const banner = document.createElement('div')
  banner.id = 'notify-banner'
  banner.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 z-[80] w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl border border-indigo-100 p-4 flex items-center gap-3 animate-fade'
  banner.innerHTML = `
    <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">🔔</div>
    <div class="flex-1 min-w-0">
      <p class="text-sm font-bold text-gray-800">เปิดการแจ้งเตือน?</p>
      <p class="text-xs text-gray-400 mt-0.5">แจ้งก่อนเข้าสอนตามที่ตั้งค่าไว้</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <button id="notify-deny" class="text-xs text-gray-400 hover:text-gray-600 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition">ไม่</button>
      <button id="notify-allow" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-semibold transition">เปิด</button>
    </div>`
  document.body.appendChild(banner)

  banner.querySelector('#notify-deny').addEventListener('click', () => {
    banner.remove()
    localStorage.setItem('pp5_notify_dismissed', '1')
  })
  banner.querySelector('#notify-allow').addEventListener('click', async () => {
    banner.remove()
    const result = await Notification.requestPermission()
    if (result === 'granted') {
      showToast('เปิดการแจ้งเตือนแล้ว ✅', 'success')
      if (_teacher?.id) await _scheduleClassNotifications(_teacher.id)
    }
  })

  setTimeout(() => banner.remove(), 12000)
}

async function _scheduleClassNotifications(teacherId) {
  if (!('Notification' in window) || Notification.permission !== 'granted') return
  try {
    const cfg = await getSystemConfig().catch(() => ({}))
    const notifyBefore = parseInt(cfg.notifyBeforeMinutes) || 10
    const academicYear  = parseInt(cfg.academicYear ?? 2568)
    const semester      = parseInt(cfg.semester ?? 1)

    const [schedule, links, periods, classes] = await Promise.all([
      getMySchedule(teacherId, academicYear, semester).catch(() => []),
      getClassScheduleLinks(teacherId).catch(() => []),
      getPeriods().catch(() => []),
      getMyClasses(teacherId).catch(() => []),
    ])

    const now      = new Date()
    const todayDow = now.getDay()
    const nowMins  = now.getHours() * 60 + now.getMinutes()

    const linksBySchedule = {}
    links.forEach(l => {
      if (!linksBySchedule[l.teacher_schedule_id]) linksBySchedule[l.teacher_schedule_id] = []
      linksBySchedule[l.teacher_schedule_id].push(l.class_id)
    })
    const classMap  = Object.fromEntries(classes.map(c => [c.id, c]))
    const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))

    // clear old timeouts
    ;(window._notifyTimeouts ?? []).forEach(t => clearTimeout(t))
    window._notifyTimeouts = []

    const todayEntries = schedule
      .filter(s => s.day_of_week === todayDow && (linksBySchedule[s.id] ?? []).length > 0)
      .map(s => ({
        ...s,
        linkedClasses: (linksBySchedule[s.id] ?? []).map(id => classMap[id]).filter(Boolean),
        period: periodMap[s.period_no],
      }))

    let scheduled = 0
    for (const entry of todayEntries) {
      if (!entry.period?.start_time) continue
      const [h, m]    = entry.period.start_time.split(':').map(Number)
      const startMins = h * 60 + m
      const fireMins  = startMins - notifyBefore
      const minsLeft  = fireMins - nowMins

      if (minsLeft <= 0) continue

      const subjectName = entry.linkedClasses[0]?.master_subjects?.subject_name ?? 'วิชา'
      const classNames  = entry.linkedClasses.map(c => {
        const cr = c.classroom_id ? window._classroomMapGlobal?.[c.classroom_id] : null
        return c.class_name + (cr ? ` 📍${cr.building} ${cr.room_number}` : '')
      }).join(', ')
      const timeStr     = entry.period.start_time.substring(0, 5)

      const t = setTimeout(async () => {
        const sw = await navigator.serviceWorker?.ready.catch(() => null)
        const opts = {
          body:             `${subjectName} · ${classNames}\nคาบ ${entry.period_no} เวลา ${timeStr}`,
          icon:             '/pp5online/vite.svg',
          badge:            '/pp5online/vite.svg',
          tag:              `class-${entry.id}-${fireMins}`,
          requireInteraction: false,
          silent:           false,
        }
        if (sw) {
          sw.showNotification(`🔔 อีก ${notifyBefore} นาที — คาบถัดไป`, opts)
        } else {
          new Notification(`🔔 อีก ${notifyBefore} นาที — คาบถัดไป`, opts)
        }
      }, minsLeft * 60000)

      window._notifyTimeouts.push(t)
      scheduled++
    }

    if (scheduled > 0) {
      showToast(`ตั้งแจ้งเตือน ${scheduled} คาบสำหรับวันนี้ 🔔`, 'info')
    }
  } catch {}
}

async function _initNotifications(teacherId) {
  if (!('Notification' in window)) return
  await _registerServiceWorker()
  if (Notification.permission === 'granted') {
    await _scheduleClassNotifications(teacherId)
  } else if (Notification.permission === 'default') {
    const dismissed = localStorage.getItem('pp5_notify_dismissed')
    if (!dismissed) {
      setTimeout(_showNotifyPermissionBanner, 2000)
    }
  }
}

// ── ตรวจสอบการเชื่อมโยงตารางสอน ──────────────────────────────────────────────

async function _checkScheduleLinkPopup() {
  try {
    const cfg = await getSystemConfig().catch(() => ({}))
    const academicYear = parseInt(cfg.academicYear ?? 2568)
    const semester     = parseInt(cfg.semester ?? 1)
    const [classes, schedule, links] = await Promise.all([
      getMyClasses(_teacher.id).catch(() => []),
      getMySchedule(_teacher.id, academicYear, semester).catch(() => []),
      getClassScheduleLinks(_teacher.id).catch(() => []),
    ])
    if (!classes.length) return
    if (!schedule.length) { _showScheduleLinkPrompt('no_schedule'); return }
    const linkedIds    = new Set(links.map(l => l.class_id))
    const unlinkedList = classes.filter(c => !linkedIds.has(c.id))
    if (unlinkedList.length > 0) _showScheduleLinkPrompt('has_unlinked', unlinkedList.length, unlinkedList.map(c => c.id))
  } catch {}
}

function _showScheduleLinkPrompt(type, count = 0, unlinkedIds = []) {
  document.getElementById('sched-link-prompt')?.remove()
  const isNoSchedule = type === 'no_schedule'
  const wrap = document.createElement('div')
  wrap.id = 'sched-link-prompt'
  wrap.className = 'fixed inset-0 z-[85] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6'
  wrap.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="bg-gradient-to-br ${isNoSchedule ? 'from-indigo-500 to-purple-500' : 'from-amber-400 to-orange-400'} px-6 py-6 text-center">
        <div class="text-4xl mb-2">${isNoSchedule ? '🗓️' : '🔗'}</div>
        <h3 class="text-white font-bold text-base">${isNoSchedule ? 'ยังไม่มีตารางสอน' : `มี ${count} ห้องที่ยังไม่เชื่อมโยง`}</h3>
        <p class="text-white/80 text-xs mt-1">${isNoSchedule
          ? 'สร้างตารางสอนเพื่อรับสิทธิ์การแจ้งเตือนและการเรียงห้อง'
          : 'เชื่อมโยงห้องเรียนกับตารางสอนเพื่อใช้ฟีเจอร์เต็มประสิทธิภาพ'}</p>
      </div>
      <div class="p-6">
        <div class="space-y-2 mb-5">
          ${['แจ้งเตือนวันนี้สอนวิชาอะไร กี่โมง',
             'Countdown นับถอยหลังก่อนเข้าสอน',
             'เรียงห้องเรียนตามเวลาที่ใกล้ที่สุด',
             'แสดงวัน/คาบบนการ์ดแต่ละห้อง',
            ].map(t => `<p class="text-xs text-gray-500">✅ ${t}</p>`).join('')}
        </div>
        <button id="slp-go"
          class="w-full py-3 rounded-2xl ${isNoSchedule ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-amber-500 hover:bg-amber-600'}
                 text-white font-bold text-sm shadow-md transition mb-2">
          ${isNoSchedule ? '🗓️ สร้างตารางสอนตอนนี้' : '🔗 ไปเชื่อมโยงห้องเรียน'}
        </button>
        <button id="slp-close"
          class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-500 text-sm hover:bg-gray-50 transition">
          ภายหลัง
        </button>
      </div>
    </div>`
  document.body.appendChild(wrap)
  wrap.querySelector('#slp-go').addEventListener('click', () => {
    wrap.remove()
    if (isNoSchedule) {
      window._navTo('schedule-builder')
    } else if (unlinkedIds.length === 1 && window._openCombinedEdit) {
      // ห้องเดียว — เปิด modal ตารางสอนทันที
      window._navTo('my-classes')
      setTimeout(() => window._openCombinedEdit?.(unlinkedIds[0], 'schedule'), 400)
    } else {
      // หลายห้อง — ไปหน้า my-classes แล้วติ๊กเอง
      window._navTo('my-classes')
    }
  })
  wrap.querySelector('#slp-close').addEventListener('click', () => wrap.remove())
}

window._openScheduleLinkModal = async (classId) => {
  const cls       = window._classCache?.[classId]
  const clsColor  = window._classColorCache?.[classId]
  const className = cls?.class_name ?? '—'
  const ms        = cls?.master_subjects

  try {
    showToast('กำลังโหลด...', 'info')
    const cfg = await getSystemConfig().catch(() => ({}))
    const academicYear = parseInt(cfg.academicYear ?? 2568)
    const semester     = parseInt(cfg.semester ?? 1)
    const [schedule, links, periods] = await Promise.all([
      getMySchedule(_teacher?.id, academicYear, semester).catch(() => []),
      getClassScheduleLinks(_teacher?.id).catch(() => []),
      getPeriods().catch(() => []),
    ])
    if (!schedule.length) {
      showToast('ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อนครับ', 'error')
      return
    }

    const currentLinkedIds = new Set(links.filter(l => l.class_id === classId).map(l => l.teacher_schedule_id))
    const selected = new Set(currentLinkedIds)
    const periodMap = Object.fromEntries(periods.map(p => [p.period_no, p]))
    const DAYS_TH   = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']

    // build map: scheduleId → other classes already linked (not current class)
    const otherLinked = {} // scheduleId → [{className, subjectName}]
    links.filter(l => l.class_id !== classId).forEach(l => {
      const otherCls = window._classCache?.[l.class_id]
      if (!otherCls) return
      if (!otherLinked[l.teacher_schedule_id]) otherLinked[l.teacher_schedule_id] = []
      otherLinked[l.teacher_schedule_id].push({
        className:   otherCls.class_name ?? '—',
        subjectName: otherCls.master_subjects?.subject_name ?? '—',
      })
    })

    const headerBg   = clsColor?.soft   ?? '#f0fdf4'
    const headerBdr  = clsColor?.border ?? '#d1fae5'
    const headerText = clsColor?.text   ?? '#065f46'

    document.getElementById('sched-link-modal')?.remove()
    const wrap = document.createElement('div')
    wrap.id = 'sched-link-modal'
    wrap.className = 'fixed inset-0 z-[85] flex items-center justify-center bg-black/50 p-4'

    const renderSlotCard = (s, isSel) => {
      const p      = periodMap[s.period_no]
      const time   = p ? `${p.start_time.substring(0,5)} – ${p.end_time.substring(0,5)}` : ''
      const span   = s.span_periods > 1 ? `–${s.period_no + s.span_periods - 1}` : ''
      const others = otherLinked[s.id] ?? []
      const isLocked = others.length > 0 && !isSel

      let cardCls, iconEl
      if (isSel) {
        cardCls = 'border-emerald-400 bg-emerald-50 shadow-[0_0_0_3px_rgba(52,211,153,0.25)]'
        iconEl  = '<span class="text-xl flex-shrink-0 mt-0.5">✅</span>'
      } else if (isLocked) {
        cardCls = 'border-gray-200 bg-gray-50 opacity-70 cursor-pointer'
        iconEl  = '<span class="text-xl flex-shrink-0 mt-0.5">🔒</span>'
      } else {
        cardCls = 'border-gray-200 bg-white hover:border-gray-300'
        iconEl  = '<span class="text-xl flex-shrink-0 mt-0.5">⬜</span>'
      }

      const othersText = others.map(o => `${o.subjectName} (${o.className})`).join(', ')

      return `
      <button type="button" class="slm-card w-full text-left p-4 rounded-2xl border-2 transition-all ${cardCls}"
        data-id="${s.id}" data-sel="${isSel ? '1' : '0'}" data-locked="${isLocked ? '1' : '0'}"
        data-others="${othersText.replace(/"/g, '&quot;')}">
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <p class="text-base font-bold text-gray-800">${DAYS_TH[s.day_of_week]} · คาบ ${s.period_no}${span}</p>
            <p class="text-sm text-gray-500 mt-0.5">${time}</p>
            ${s.class_name ? `<p class="text-base font-semibold mt-1" style="color:${headerText}">${s.class_name}</p>` : ''}
            ${others.length > 0 ? `<p class="text-[11px] text-amber-600 mt-1.5">⚠️ เชื่อมกับ: ${othersText}</p>` : ''}
          </div>
          ${iconEl}
        </div>
      </button>`
    }

    wrap.innerHTML = `
      <div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div class="flex justify-center pt-3 pb-1 sm:hidden"><div class="w-10 h-1 rounded-full bg-gray-200"></div></div>

        <!-- Header พร้อมสีห้อง -->
        <div class="px-5 pt-5 pb-4 border-b rounded-t-2xl flex-shrink-0"
          style="background:${headerBg}; border-color:${headerBdr}">
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0">
              <p class="text-xs font-semibold uppercase tracking-wider mb-1" style="color:${headerText}">🔗 เชื่อมโยงตารางสอน</p>
              <h3 class="text-xl font-extrabold leading-tight" style="color:${headerText}">${className}</h3>
              ${ms?.subject_name ? `<p class="text-sm mt-0.5" style="color:${headerText};opacity:.75">${ms.subject_name}</p>` : ''}
            </div>
            <button id="slm-close" class="text-2xl leading-none flex-shrink-0 opacity-60 hover:opacity-100 transition"
              style="color:${headerText}">×</button>
          </div>
        </div>

        <!-- Slot list -->
        <div class="px-4 py-3 overflow-auto flex-1">
          <p class="text-xs text-gray-400 mb-3">แตะการ์ดเพื่อเลือก/ยกเลิก (เลือกได้หลายคาบ)</p>
          <div id="slm-list" class="space-y-2">
            ${schedule.map(s => renderSlotCard(s, selected.has(s.id))).join('')}
          </div>
        </div>

        <!-- Footer -->
        <div class="px-4 pb-5 pt-3 border-t border-gray-100 flex-shrink-0">
          <button id="slm-save"
            class="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition">
            บันทึกการเชื่อมโยง
          </button>
        </div>
      </div>`

    document.body.appendChild(wrap)

    // Toggle card
    wrap.querySelector('#slm-list').addEventListener('click', e => {
      const card = e.target.closest('.slm-card')
      if (!card) return
      const id     = parseInt(card.dataset.id)
      const was    = card.dataset.sel === '1'
      const locked = card.dataset.locked === '1'
      const slot   = schedule.find(s => s.id === id)

      if (locked && !was) {
        // แสดง confirm popup ก่อน
        document.getElementById('slm-confirm-popup')?.remove()
        const popup = document.createElement('div')
        popup.id = 'slm-confirm-popup'
        popup.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/40 p-6'
        const othersText = card.dataset.others
        popup.innerHTML = `
          <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs p-6 text-center">
            <div class="text-3xl mb-3">⚠️</div>
            <h4 class="font-bold text-gray-800 mb-2">คาบนี้ถูกเชื่อมโยงแล้ว</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-5">
              คาบนี้ถูกเชื่อมโยงกับ<br/>
              <span class="font-semibold text-amber-700">${othersText}</span><br/>
              ต้องการเชื่อมโยงเพิ่มเข้า<br/>
              <span class="font-semibold text-indigo-700">${className}</span> ด้วยหรือไม่?
            </p>
            <div class="flex gap-2">
              <button id="slm-conf-no"
                class="flex-1 py-2.5 rounded-2xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 transition">
                ยกเลิก
              </button>
              <button id="slm-conf-yes"
                class="flex-1 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition">
                ยืนยัน
              </button>
            </div>
          </div>`
        document.body.appendChild(popup)
        popup.querySelector('#slm-conf-no').addEventListener('click', () => popup.remove())
        popup.querySelector('#slm-conf-yes').addEventListener('click', () => {
          popup.remove()
          selected.add(id)
          card.outerHTML = renderSlotCard(slot, true)
        })
        return
      }

      was ? selected.delete(id) : selected.add(id)
      card.outerHTML = renderSlotCard(slot, !was)
    })

    wrap.querySelector('#slm-close').addEventListener('click', () => wrap.remove())
    wrap.addEventListener('click', e => { if (e.target === wrap) wrap.remove() })

    wrap.querySelector('#slm-save').addEventListener('click', async () => {
      const btn = wrap.querySelector('#slm-save')
      btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
      try {
        const toAdd = [...selected].filter(id => !currentLinkedIds.has(id))
        const toDel = [...currentLinkedIds].filter(id => !selected.has(id))
        await Promise.all([
          ...toAdd.map(id => linkClassToSchedule(classId, id)),
          ...toDel.map(id => unlinkClassFromSchedule(classId, id)),
        ])
        showToast('บันทึกการเชื่อมโยงแล้ว ✅', 'success')
        wrap.remove()
        window._navTo('my-classes')
      } catch (e) {
        showToast('เกิดข้อผิดพลาด: ' + (e.message ?? ''), 'error')
        btn.disabled = false; btn.textContent = 'บันทึกการเชื่อมโยง'
      }
    })
  } catch (e) {
    showToast('โหลดข้อมูลไม่ได้: ' + (e.message ?? ''), 'error')
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const session = await requireAuth()
  if (!session) return

  await loadTeacherInfo(session.user.id)
  _homeroomRooms = _teacher ? await getMyHomeroomRooms(_teacher.id).catch(()=>[]) : []
  _applyRoleMenus()
  loadSidebarHeader(_teacher) // โหลด logo + term แบบ async ไม่ block
  _updateRequestsBadge()       // badge คำร้องรอดำเนินการ
  _startPolling()              // polling 30 วิ
  updateLastSeen('teachers').catch(() => {})
  logLogin('teacher').catch(() => {})
  if (_teacher?.id) _initDonationFlow(_teacher.id)
  if (_teacher?.id) _checkScheduleLinkPopup()
  if (_teacher?.id) _initNotifications(_teacher.id)

  // Sidebar nav clicks
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(link.dataset.nav)
    })
  })

  // Mobile sidebar toggle
  const sidebar = document.getElementById('sidebar')
  const overlay = document.getElementById('sidebar-overlay')
  document.getElementById('btn-menu')?.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full')
    overlay.classList.toggle('hidden')
  })
  overlay?.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full')
    overlay.classList.add('hidden')
  })

  // Logout
  document.getElementById('btn-logout')?.addEventListener('click', async () => {
    await supabase.auth.signOut()
    showToast('ออกจากระบบแล้ว','info')
    setTimeout(() => window.location.replace('index.html'), 800)
  })

  showPageLoader(false)

  // ถ้ามาจากหน้า register → เปิด setup form
  const isSetup = new URLSearchParams(window.location.search).get('setup') === '1'
  if (isSetup) {
    navigate('setup')
    // ลบ ?setup=1 ออกจาก URL
    history.replaceState({}, '', 'teacher.html')
  } else {
    navigate('overview')
  }
})
