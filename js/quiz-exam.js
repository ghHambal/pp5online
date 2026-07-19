// js/quiz-exam.js — standalone exam-taking runtime, loaded from quiz-exam.html
import {
  getQuizAttempt, rpcGetAttemptQuestions, rpcSubmitAttempt,
  rpcRecordViolation, rpcClaimSession, rpcHeartbeat, rpcGetMyRank
} from './quiz-api.js'
import { loadKaTeX, renderMathIn } from './katex-loader.js'
import { loadConfetti, fireConfetti } from './confetti-loader.js'
import { showToast, showDangerConfirm, setButtonLoading } from './ui.js'
import { _htmlEsc } from './teacher-views-utils.js'

let _attempt = null
let _questions = []
let _answers = {}
let _currentIdx = 0
let _deadlineMs = null
let _sessionToken = null
let _timerInterval = null
let _autosaveInterval = null
let _autosaveDebounce = null
let _submitting = false

export async function initQuizExam(attemptId) {
  const root = document.getElementById('quiz-root')
  root.innerHTML = _loadingHtml()

  try {
    _attempt = await getQuizAttempt(attemptId)
  } catch (err) {
    root.innerHTML = _messageScreen('🚫', 'ไม่พบแบบทดสอบนี้', 'หรือคุณไม่มีสิทธิ์เข้าถึงแบบทดสอบนี้')
    return
  }

  if (_attempt.status === 'terminated_violation') {
    _renderLockedScreen(root)
    return
  }
  if (_attempt.status === 'submitted') {
    await _renderResultScreen(root)
    return
  }

  try {
    _sessionToken = await rpcClaimSession(attemptId)
  } catch (err) {
    root.innerHTML = _messageScreen('⚠️', 'แบบทดสอบนี้เปิดอยู่ในแท็บ/อุปกรณ์อื่น', 'ปิดแท็บหรืออุปกรณ์อื่นก่อน แล้วรีเฟรชหน้านี้ใหม่')
    return
  }

  try {
    _questions = await rpcGetAttemptQuestions(attemptId)
  } catch (err) {
    root.innerHTML = _messageScreen('🚫', 'โหลดข้อสอบไม่สำเร็จ', err.message ?? '')
    return
  }

  _answers = { ..._attempt.answers }
  _currentIdx = 0
  _deadlineMs = Date.now() + Math.max(0, (_attempt.time_remaining_sec ?? 0)) * 1000

  _renderStartGate(root)
}

function _loadingHtml() {
  return `<div class="flex justify-center py-20 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`
}

function _messageScreen(icon, title, detail) {
  return `<div class="max-w-md mx-auto text-center py-20 space-y-3">
    <div class="text-6xl">${icon}</div>
    <p class="font-bold text-gray-800 text-lg">${_htmlEsc(title)}</p>
    ${detail ? `<p class="text-sm text-gray-500">${_htmlEsc(detail)}</p>` : ''}
  </div>`
}

function _renderLockedScreen(root) {
  root.innerHTML = `<div class="max-w-md mx-auto text-center py-20 space-y-4">
    <div class="text-6xl">🔒</div>
    <p class="font-bold text-gray-800 text-lg">แบบทดสอบถูกล็อก</p>
    <p class="text-sm text-gray-500 leading-relaxed">ระบบตรวจพบว่าคุณออกนอกหน้าสอบครบ 2 ครั้ง จึงส่งคำตอบให้อัตโนมัติแล้ว<br>กรุณาติดต่อครูผู้สอนหากต้องการทำต่อ</p>
  </div>`
}

// A required "start" click gives the browser a fresh user-gesture context on
// THIS page (a full page navigation from the student portal does not reliably
// carry the previous page's gesture over), so requestFullscreen() here is not
// silently rejected the way it would be if fired automatically after several
// awaits with no direct click behind it.
function _renderStartGate(root) {
  const quiz = _attempt.quizzes
  root.innerHTML = `
    <div class="max-w-md mx-auto text-center py-16 space-y-4">
      <div class="text-6xl">📝</div>
      <p class="font-bold text-gray-800 text-lg">${_htmlEsc(quiz?.title ?? '')}</p>
      <p class="text-sm text-gray-500">${_questions.length} ข้อ${quiz?.time_limit_minutes ? ` · เวลา ${quiz.time_limit_minutes} นาที` : ''}</p>
      <button id="btn-start-exam" class="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg">เริ่มทำข้อสอบ (เต็มจอ)</button>
      <p class="text-xs text-gray-400">เวลาจะเริ่มนับถอยหลังทันทีที่กดเริ่ม</p>
    </div>
  `
  document.getElementById('btn-start-exam').addEventListener('click', () => {
    document.documentElement.requestFullscreen?.().catch(() => {})
    _renderExamUI(root)
    _startTimer()
    _attachAntiCheat()
    _autosaveInterval = setInterval(_doHeartbeat, 15000)
  })
}

function _renderExamUI(root) {
  const quiz = _attempt.quizzes
  root.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between">
        <div class="min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${_htmlEsc(quiz?.title ?? '')}</h2>
          <p class="text-xs text-gray-400">${_questions.length} ข้อ</p>
        </div>
        <div id="quiz-timer" class="text-2xl font-mono font-bold text-indigo-600 flex-shrink-0"></div>
      </div>

      <div class="flex flex-wrap gap-1.5" id="quiz-nav"></div>

      <div id="quiz-question-area" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"></div>

      <div class="flex justify-between gap-2">
        <button id="btn-prev" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">← ก่อนหน้า</button>
        <button id="btn-submit" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm">ส่งคำตอบ</button>
        <button id="btn-next" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ถัดไป →</button>
      </div>
    </div>
  `
  document.getElementById('btn-prev').addEventListener('click', () => _goTo(_currentIdx - 1))
  document.getElementById('btn-next').addEventListener('click', () => _goTo(_currentIdx + 1))
  document.getElementById('btn-submit').addEventListener('click', _confirmSubmit)
  _renderNav()
  _renderQuestion()
}

function _renderNav() {
  const nav = document.getElementById('quiz-nav')
  if (!nav) return
  nav.innerHTML = _questions.map((q, i) => {
    const answered = _answers[q.question_id] !== undefined
    const isCurrent = i === _currentIdx
    const cls = isCurrent ? 'bg-indigo-600 text-white' : answered ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
    return `<button class="quiz-nav-btn w-9 h-9 rounded-lg text-xs font-bold ${cls}" data-idx="${i}">${i + 1}</button>`
  }).join('')
  nav.querySelectorAll('.quiz-nav-btn').forEach(btn =>
    btn.addEventListener('click', () => _goTo(parseInt(btn.dataset.idx, 10))))
}

function _goTo(idx) {
  if (idx < 0 || idx >= _questions.length) return
  _currentIdx = idx
  _renderQuestion()
  _renderNav()
}

function _renderQuestion() {
  const area = document.getElementById('quiz-question-area')
  if (!area) return
  const q = _questions[_currentIdx]
  const selectedOriginal = _answers[q.question_id]

  area.innerHTML = `
    <p class="text-xs text-gray-400 mb-2">ข้อ ${_currentIdx + 1} จาก ${_questions.length}</p>
    <p class="font-semibold text-gray-800 mb-4">${_htmlEsc(q.question_text)}</p>
    <div class="space-y-2">
      ${q.choices.map((c, pos) => {
        const originalIdx = q.choice_perm ? q.choice_perm[pos] : pos
        const isSelected = selectedOriginal === originalIdx
        return `
        <label class="flex items-center gap-3 p-3 rounded-xl border cursor-pointer ${isSelected ? 'border-indigo-400 bg-indigo-50' : 'border-gray-200 hover:bg-gray-50'}">
          <input type="radio" name="quiz-choice" class="quiz-choice-input flex-shrink-0" data-pos="${pos}" ${isSelected ? 'checked' : ''} />
          <span class="text-sm">${_htmlEsc(c)}</span>
        </label>`
      }).join('')}
    </div>
  `
  loadKaTeX().then(() => renderMathIn(area)).catch(() => {})

  area.querySelectorAll('.quiz-choice-input').forEach(inp => inp.addEventListener('change', () => {
    const pos = parseInt(inp.dataset.pos, 10)
    _answers[q.question_id] = q.choice_perm ? q.choice_perm[pos] : pos
    _renderQuestion()
    _renderNav()
    _scheduleAutosave()
  }))
}

function _scheduleAutosave() {
  clearTimeout(_autosaveDebounce)
  _autosaveDebounce = setTimeout(_doHeartbeat, 800)
}

async function _doHeartbeat() {
  if (!_attempt || _attempt.status !== 'in_progress' || !_sessionToken) return

  // Backstop for the blur event: if a 'blur' somehow doesn't fire (edge
  // cases vary across browsers/OSes), this periodic check still catches a
  // window that lost OS-level focus, e.g. iPad Split View / Slide Over.
  if (!document.hasFocus()) await _reportViolation('focus_lost')
  if (!_attempt || _attempt.status !== 'in_progress') return // just got terminated by the check above

  const remaining = Math.max(0, Math.round((_deadlineMs - Date.now()) / 1000))
  try {
    const expired = await rpcHeartbeat(_attempt.id, _sessionToken, _answers, remaining)
    if (expired) {
      _teardown()
      _attempt.status = 'submitted'
      await _renderResultScreen(document.getElementById('quiz-root'))
    }
  } catch (err) {
    console.warn('quiz heartbeat failed', err)
  }
}

function _startTimer() {
  _updateTimerDisplay()
  _timerInterval = setInterval(() => {
    const remaining = Math.max(0, Math.round((_deadlineMs - Date.now()) / 1000))
    _updateTimerDisplay(remaining)
    if (remaining <= 0) {
      clearInterval(_timerInterval)
      _submitAttempt()
    }
  }, 1000)
}

function _updateTimerDisplay(remainingOverride) {
  const remaining = remainingOverride ?? Math.max(0, Math.round((_deadlineMs - Date.now()) / 1000))
  const mm = Math.floor(remaining / 60).toString().padStart(2, '0')
  const ss = (remaining % 60).toString().padStart(2, '0')
  const el = document.getElementById('quiz-timer')
  if (el) el.textContent = `${mm}:${ss}`
}

function _attachAntiCheat() {
  document.addEventListener('visibilitychange', _onVisibilityChange)
  document.addEventListener('fullscreenchange', _onFullscreenChange)
  // 'blur' catches what visibility/fullscreen miss on iPad Split View / Slide
  // Over: the page stays visually visible (not hidden) while the OS moves
  // keyboard/touch focus to the other split-screen app.
  window.addEventListener('blur', _onWindowBlur)
}

function _detachAntiCheat() {
  document.removeEventListener('visibilitychange', _onVisibilityChange)
  document.removeEventListener('fullscreenchange', _onFullscreenChange)
  window.removeEventListener('blur', _onWindowBlur)
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {})
}

function _onVisibilityChange() {
  if (document.hidden) _reportViolation('visibility_change')
}

function _onFullscreenChange() {
  if (!document.fullscreenElement && _attempt?.status === 'in_progress') _reportViolation('fullscreen_exit')
}

function _onWindowBlur() {
  _reportViolation('focus_lost')
}

let _lastViolationReportAt = 0
async function _reportViolation(type) {
  if (!_attempt || _attempt.status !== 'in_progress') return
  // Debounce: the blur event and the hasFocus() heartbeat backstop can both
  // fire for the same real incident within moments of each other — without
  // this, one genuine focus-loss could get double-counted as two strikes.
  const now = Date.now()
  if (now - _lastViolationReportAt < 3000) return
  _lastViolationReportAt = now
  try {
    const result = await rpcRecordViolation(_attempt.id, type)
    if (result.terminated) {
      _teardown()
      _attempt.status = 'terminated_violation'
      _renderLockedScreen(document.getElementById('quiz-root'))
    } else {
      _showViolationWarning(result.violation_count)
    }
  } catch (err) {
    console.warn('report violation failed', err)
  }
}

function _showViolationWarning(count) {
  document.getElementById('quiz-violation-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'quiz-violation-modal'
  modal.className = 'fixed inset-0 z-[99] bg-black/50 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl p-6 max-w-sm text-center shadow-2xl">
      <div class="text-5xl mb-3">⚠️</div>
      <p class="font-bold text-gray-800 mb-2">ตรวจพบว่าออกนอกหน้าสอบ (ครั้งที่ ${count}/2)</p>
      <p class="text-sm text-gray-500 mb-5">หากออกนอกหน้าสอบอีกครั้ง ระบบจะส่งคำตอบให้อัตโนมัติและล็อกไม่ให้ทำต่อ</p>
      <button id="quiz-violation-ack" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">รับทราบ</button>
    </div>
  `
  document.body.appendChild(modal)
  modal.querySelector('#quiz-violation-ack').addEventListener('click', () => modal.remove())
}

async function _confirmSubmit() {
  const unanswered = _questions.length - Object.keys(_answers).length
  const ok = await showDangerConfirm({
    title: unanswered > 0 ? `ยังเหลือ ${unanswered} ข้อที่ยังไม่ได้ตอบ` : 'ยืนยันส่งคำตอบ?',
    message: unanswered > 0 ? 'ต้องการส่งคำตอบเลยหรือไม่?' : 'เมื่อส่งแล้วจะแก้ไขคำตอบไม่ได้อีก',
    confirmText: 'ส่งคำตอบ',
  })
  if (!ok) return
  await _submitAttempt()
}

async function _submitAttempt() {
  if (_submitting) return
  _submitting = true
  clearInterval(_timerInterval)
  clearInterval(_autosaveInterval)
  clearTimeout(_autosaveDebounce)

  const submitBtn = document.getElementById('btn-submit')
  if (submitBtn) setButtonLoading(submitBtn, true)

  await _doHeartbeat().catch(() => {})
  try {
    await rpcSubmitAttempt(_attempt.id)
    _detachAntiCheat()
    _attempt.status = 'submitted'
    await _renderResultScreen(document.getElementById('quiz-root'))
  } catch (err) {
    showToast('ส่งคำตอบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    _submitting = false
    if (submitBtn) setButtonLoading(submitBtn, false, 'ส่งคำตอบ')
    // attempt is still in_progress server-side — resume the countdown/autosave/anti-cheat
    _startTimer()
    _autosaveInterval = setInterval(_doHeartbeat, 15000)
  }
}

function _teardown() {
  clearInterval(_timerInterval)
  clearInterval(_autosaveInterval)
  clearTimeout(_autosaveDebounce)
  _detachAntiCheat()
}

async function _renderResultScreen(root) {
  let fresh
  try {
    fresh = await getQuizAttempt(_attempt.id)
  } catch (err) {
    root.innerHTML = _messageScreen('🚫', 'ไม่พบผลสอบ', 'แบบทดสอบนี้อาจถูกลบไปแล้ว กรุณาติดต่อครูผู้สอน')
    return
  }
  _attempt = fresh
  const quiz = fresh.quizzes
  const reviewPolicy = quiz?.review_policy ?? 'total_only'
  const scorePct = fresh.score_pct ?? 0

  const rank = await rpcGetMyRank(_attempt.id).catch(() => null)
  const rankHtml = (rank && rank.total_participants > 1)
    ? `<p class="text-sm text-indigo-100 mt-2">🏆 อันดับที่ ${rank.my_rank} จาก ${rank.total_participants} คน</p>`
    : ''

  let detailHtml = ''
  if (reviewPolicy !== 'total_only') {
    const questions = await rpcGetAttemptQuestions(_attempt.id).catch(() => [])
    detailHtml = `<div class="space-y-3 mt-5">` + questions.map((q, i) => {
      const isCorrect = q.is_correct
      const border = isCorrect === true ? 'border-emerald-200' : isCorrect === false ? 'border-red-200' : 'border-gray-100'
      const badge = isCorrect === true
        ? '<span class="text-xs font-bold text-emerald-700">✓ ถูก</span>'
        : isCorrect === false ? '<span class="text-xs font-bold text-red-600">✗ ผิด</span>' : ''
      const choicesHtml = reviewPolicy === 'full_review'
        ? `<ul class="mt-2 space-y-1">${q.choices.map((c, pos) => {
            const originalIdx = q.choice_perm ? q.choice_perm[pos] : pos
            const wasChosen = fresh.answers[q.question_id] === originalIdx
            const isRight = q.correct_choice_index === originalIdx
            const cls = isRight ? 'text-emerald-700 font-bold' : wasChosen ? 'text-red-600 font-bold' : 'text-gray-500'
            return `<li class="text-xs ${cls}">${isRight ? '✓' : wasChosen ? '✗' : '○'} ${_htmlEsc(c)}</li>`
          }).join('')}</ul>
          ${q.explanation ? `<p class="text-xs text-gray-500 mt-2 italic">💡 ${_htmlEsc(q.explanation)}</p>` : ''}`
        : ''
      return `
        <div class="bg-white rounded-2xl border ${border} p-4">
          <div class="flex items-start justify-between gap-2 mb-1">
            <p class="text-xs text-gray-400">ข้อ ${i + 1}</p>
            ${badge}
          </div>
          <p class="text-sm font-semibold text-gray-800">${_htmlEsc(q.question_text)}</p>
          ${choicesHtml}
        </div>`
    }).join('') + `</div>`
  }

  root.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-4">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-center text-white shadow-lg">
        <p class="text-sm text-indigo-100 mb-1">ส่งคำตอบเรียบร้อยแล้ว</p>
        <p class="text-5xl font-extrabold">${scorePct.toFixed(1)}%</p>
        ${rankHtml}
      </div>
      ${detailHtml}
    </div>
  `
  if (reviewPolicy !== 'total_only') loadKaTeX().then(() => renderMathIn(root)).catch(() => {})

  const confettiTier = scorePct >= 80 ? 'high' : scorePct >= 50 ? 'mid' : null
  if (confettiTier) loadConfetti().then(() => fireConfetti(confettiTier)).catch(() => {})
}
