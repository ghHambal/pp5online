// js/teacher-views-quiz-monitor.js
import { getClassStudents } from './api.js'
import { getQuizAttemptsForMonitor, rpcUnlockAttempt } from './quiz-api.js'
import { supabase } from './supabase.js'
import { showToast, showDangerConfirm } from './ui.js'
import { _htmlEsc } from './teacher-views-utils.js'

let _channel = null
let _pollInterval = null
let _lastRefreshAt = 0
const REFRESH_MIN_INTERVAL_MS = 1000

const STATUS_LABEL = {
  in_progress: { label: 'กำลังทำ', cls: 'bg-emerald-100 text-emerald-700' },
  submitted: { label: 'ส่งแล้ว', cls: 'bg-blue-100 text-blue-700' },
  terminated_violation: { label: '🔒 ถูกล็อก', cls: 'bg-red-100 text-red-700' },
}

// Vertical rounded portrait frame with a drop shadow + inset light/vignette
// for depth, mirroring the w-9/h-12/rounded-xl avatar convention already
// used in teacher-views-dashboard.js, plus an added glossy highlight.
function _avatarHtml(s) {
  const initial = _htmlEsc((s?.full_name ?? '?').charAt(0))
  const frame = 'relative w-9 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/5'
  const sheen = `<div class="absolute inset-0 rounded-xl pointer-events-none" style="box-shadow: inset 0 1px 2px rgba(255,255,255,0.55), inset 0 -10px 14px rgba(0,0,0,0.18)"></div>`
  return s?.image_url
    ? `<div class="${frame}"><img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover" />${sheen}</div>`
    : `<div class="${frame} bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400">${initial}${sheen}</div>`
}

export async function openQuizMonitor(quiz) {
  _teardown() // release any previous quiz's channel/poll before opening a new one
  document.getElementById('quiz-monitor-modal')?.remove()
  const m = document.createElement('div')
  m.id = 'quiz-monitor-modal'
  m.className = 'fixed inset-0 z-[95] flex flex-col bg-gray-50'
  m.innerHTML = `
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="qm-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">🔴 กำลังสอบสด: ${_htmlEsc(quiz.title)}</h2>
      </div>
      <span id="qm-conn" class="text-xs px-2 py-1 rounded-full border bg-gray-50 border-gray-200 text-gray-500 flex-shrink-0">กำลังเชื่อมต่อ...</span>
    </div>
    <div class="flex-1 overflow-y-auto p-4" id="qm-body"></div>
  `
  document.body.appendChild(m)
  m.querySelector('#qm-close').addEventListener('click', () => { _teardown(); m.remove() })

  const students = await getClassStudents(quiz.class_id).catch(() => [])
  await _refresh(quiz, students)

  const debouncedRefresh = () => {
    const now = Date.now()
    if (now - _lastRefreshAt < REFRESH_MIN_INTERVAL_MS) return
    _lastRefreshAt = now
    _refresh(quiz, students).catch(() => {})
  }

  _channel = supabase.channel(`quiz-monitor-${quiz.id}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'quiz_attempts', filter: `quiz_id=eq.${quiz.id}` },
      debouncedRefresh)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'quiz_attempt_violations' },
      debouncedRefresh)

  _channel.subscribe(status => {
    const el = document.getElementById('qm-conn')
    if (!el) return
    if (status === 'SUBSCRIBED') {
      el.textContent = '🟢 เชื่อมต่อสด'
      el.className = 'text-xs px-2 py-1 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-700 flex-shrink-0'
    } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
      el.textContent = '🟡 ใช้ระบบสำรอง'
      el.className = 'text-xs px-2 py-1 rounded-full border bg-amber-50 border-amber-200 text-amber-700 flex-shrink-0'
    }
  })

  _pollInterval = setInterval(() => _refresh(quiz, students).catch(() => {}), 3000)
}

function _teardown() {
  if (_channel) { supabase.removeChannel(_channel); _channel = null }
  if (_pollInterval) { clearInterval(_pollInterval); _pollInterval = null }
}

async function _refresh(quiz, students) {
  const body = document.getElementById('qm-body')
  if (!body) { _teardown(); return }

  const attempts = await getQuizAttemptsForMonitor(quiz.id).catch(() => [])
  const attemptByStudent = {}
  attempts.forEach(a => { attemptByStudent[a.student_id] = a }) // ascending order → latest wins

  const entered = new Set(attempts.map(a => a.student_id)).size
  const finishedScores = attempts.filter(a => a.score_pct != null).map(a => a.score_pct)
  const avgScore = finishedScores.length ? (finishedScores.reduce((s, v) => s + v, 0) / finishedScores.length) : null

  body.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${entered}/${students.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">เข้าสอบแล้ว</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${attempts.filter(a => a.status === 'in_progress').length}</p>
          <p class="text-xs text-gray-400 mt-0.5">กำลังทำอยู่</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${avgScore != null ? avgScore.toFixed(1) + '%' : '—'}</p>
          <p class="text-xs text-gray-400 mt-0.5">คะแนนเฉลี่ยล่าสุด</p>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        ${students.map(s => {
          const a = attemptByStudent[s.id]
          const total = a?.question_order?.length ?? quiz.num_questions
          const answered = a ? Object.keys(a.answers ?? {}).length : 0
          const pct = total > 0 ? Math.round(answered / total * 100) : 0
          const st = a ? (STATUS_LABEL[a.status] ?? STATUS_LABEL.in_progress) : { label: 'ยังไม่เข้าสอบ', cls: 'bg-gray-100 text-gray-400' }
          return `
          <div class="flex items-center gap-3 p-3">
            ${_avatarHtml(s)}
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${_htmlEsc(s.full_name)}</p>
              <p class="text-xs text-gray-400">${_htmlEsc(s.student_code)}${a ? ` · ตอบแล้ว ${answered}/${total} ข้อ (${pct}%)` : ''}${a?.score_pct != null ? ` · คะแนน ${a.score_pct.toFixed(1)}%` : ''}</p>
            </div>
            <span class="px-2 py-0.5 rounded-lg text-xs font-bold flex-shrink-0 ${st.cls}">${st.label}</span>
            ${a?.status === 'terminated_violation' ? `<button class="btn-unlock px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex-shrink-0" data-attempt="${a.id}">🔓 ปลดล็อก</button>` : ''}
          </div>`
        }).join('')}
      </div>
    </div>
  `

  body.querySelectorAll('.btn-unlock').forEach(btn =>
    btn.addEventListener('click', () => _openUnlockChoice(btn.dataset.attempt, quiz, students)))
}

function _openUnlockChoice(attemptId, quiz, students) {
  const m = document.createElement('div')
  m.className = 'fixed inset-0 z-[99] bg-black/40 flex items-center justify-center p-4'
  m.innerHTML = `
    <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
      <div class="text-4xl mb-3">🔓</div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
      <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
      <div class="space-y-2">
        <button id="unlock-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
        <button id="unlock-restart" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
        <button id="unlock-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
      </div>
    </div>
  `
  document.body.appendChild(m)
  m.querySelector('#unlock-cancel').addEventListener('click', () => m.remove())

  const doUnlock = async (mode) => {
    m.remove()
    try {
      await rpcUnlockAttempt(attemptId, mode)
      showToast(mode === 'resume' ? 'ปลดล็อก — ทำต่อจากจุดเดิมแล้ว' : 'ปลดล็อก — เริ่มชุดใหม่แล้ว', 'success')
      await _refresh(quiz, students)
    } catch (err) {
      showToast('ปลดล็อกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  }
  m.querySelector('#unlock-resume').addEventListener('click', () => doUnlock('resume'))
  m.querySelector('#unlock-restart').addEventListener('click', () => doUnlock('restart'))
}
