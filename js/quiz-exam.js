// js/quiz-exam.js — standalone exam-taking runtime, loaded from quiz-exam.html
import {
  getQuizAttempt, rpcGetAttemptQuestions, rpcSubmitAttempt,
  rpcRecordViolation, rpcClaimSession, rpcHeartbeat, rpcGetMyRank,
  rpcSubmitQuizAnswer, rpcUseQuizBonus, getMyQuizAttemptHistory
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

// quiz.lock_on_answer (no going back once chosen) / quiz.instant_feedback_bonus
// (also shows correct/wrong immediately + drives the combo-streak bonus
// mini-game). instant_feedback_bonus always implies lock_on_answer server-side.
let _lockMode = false
let _bonusMode = false
let _bonusInventory = {}
let _eliminatedChoices = {}
let _unlockedForEdit = new Set()
let _answerCorrectness = {}
let _priorAttempts = [] // this student's other finished attempts on the same quiz (attempt_number > 1 only)
let _currentStreak = 0
let _avgPerQuestionSec = null // time_limit_minutes*60 / num_questions — pacing guide only, never force-advances
let _perQBarStart = null
let _perQTimerInterval = null

const BONUS_META = {
  fifty_fifty:   { icon: '✂️', label: '50/50' },
  fix_wrong:     { icon: '🛠️', label: 'แก้ข้อผิด' },
  extra_time:    { icon: '⏱️', label: '+30 วิ' },
  reveal_answer: { icon: '🔑', label: 'เปิดเฉลย' },
}

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

  const quiz = _attempt.quizzes
  _lockMode = !!(quiz?.lock_on_answer || quiz?.instant_feedback_bonus)
  _bonusMode = !!quiz?.instant_feedback_bonus
  _bonusInventory = _attempt.bonus_inventory ?? {}
  _eliminatedChoices = _attempt.eliminated_choices ?? {}
  _unlockedForEdit = new Set(_attempt.unlocked_for_edit ?? [])
  _answerCorrectness = _attempt.answer_correctness ?? {}
  _currentStreak = _attempt.current_streak ?? 0
  _avgPerQuestionSec = quiz?.time_limit_minutes ? Math.floor(quiz.time_limit_minutes * 60 / _questions.length) : null

  _priorAttempts = _attempt.attempt_number > 1
    ? await getMyQuizAttemptHistory(_attempt.quiz_id, _attempt.student_id).catch(() => [])
    : []

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
  const historyHtml = _priorAttempts.length ? `
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left">
      <p class="text-xs font-bold text-gray-500 mb-2">ประวัติคะแนนครั้งก่อนหน้า</p>
      <div class="space-y-1.5">
        ${_priorAttempts.map(a => `
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">ครั้งที่ ${a.attempt_number}${a.status === 'terminated_violation' ? ' (ถูกล็อก)' : ''}</span>
            <span class="font-bold text-gray-700">${a.score_pct != null ? a.score_pct.toFixed(1) + '%' : '—'}</span>
          </div>`).join('')}
      </div>
    </div>` : ''
  root.innerHTML = `
    <div class="max-w-md mx-auto text-center py-16 space-y-4">
      <div class="text-6xl">📝</div>
      <p class="font-bold text-gray-800 text-lg">${_htmlEsc(quiz?.title ?? '')}</p>
      <p class="text-sm text-gray-500">${_questions.length} ข้อ${quiz?.time_limit_minutes ? ` · เวลา ${quiz.time_limit_minutes} นาที` : ''}${quiz?.max_attempts > 1 ? ` · ครั้งที่ ${_attempt.attempt_number}/${quiz.max_attempts}` : ''}</p>
      ${historyHtml}
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
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${_htmlEsc(quiz?.title ?? '')}</h2>
          <p class="text-xs text-gray-400">${_questions.length} ข้อ</p>
        </div>
        ${_bonusMode ? `<div id="quiz-streak-badge" class="flex-shrink-0"></div>` : ''}
        <div id="quiz-timer" class="text-2xl font-mono font-bold text-indigo-600 flex-shrink-0"></div>
      </div>

      ${_avgPerQuestionSec ? `
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2">
        <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden"><div id="quiz-perq-bar" class="h-full bg-indigo-400" style="width:100%"></div></div>
        <p class="text-[10px] text-gray-400 mt-1">⏱ เฉลี่ยข้อละ ~${_avgPerQuestionSec} วิ (แค่แนวทางจับเวลา ไม่ตัดคะแนน)</p>
      </div>` : ''}

      ${_bonusMode ? `<div class="flex gap-2 overflow-x-auto pb-1" id="quiz-bonus-toolbar"></div>` : ''}

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
  _updateNavButtons()
  if (_bonusMode) { _renderBonusToolbar(); _renderStreakBadge() }
  if (_avgPerQuestionSec) _startPerQuestionBar()
}

// ป้ายสตรีค — เห็นตลอดว่าตอบถูกต่อเนื่องกี่ข้อแล้ว (ไม่ใช่แค่ตอนเพิ่งตอบ) เด้ง
// สเกลสั้นๆ ทุกครั้งที่ตัวเลขเปลี่ยน ให้รู้สึกว่า "กำลังไปได้สวย"
function _renderStreakBadge() {
  const el = document.getElementById('quiz-streak-badge')
  if (!el) return
  if (_currentStreak >= 2) {
    el.innerHTML = `<span class="quiz-streak-pop inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold text-sm">🔥 ต่อเนื่อง ${_currentStreak} ข้อ</span>`
  } else {
    el.innerHTML = ''
  }
}

// นับถอยหลังต่อข้อ (เฉลี่ยจากเวลารวม) — เป็นแค่แนวทางจับจังหวะให้นักเรียนไม่มัว
// อยู่ข้อเดียวนานเกินไป ไม่บังคับเลื่อนข้อและไม่ตัดคะแนนเมื่อหมดเวลานี้ รีเซ็ตใหม่
// ทุกครั้งที่เปลี่ยนข้อ (เรียกจาก _goTo)
function _startPerQuestionBar() {
  if (!_avgPerQuestionSec) return
  _perQBarStart = Date.now()
  if (_perQTimerInterval) return // interval เดียวพอ วิ่งอ่าน _perQBarStart ใหม่ทุกครั้งเอง
  _perQTimerInterval = setInterval(() => {
    const bar = document.getElementById('quiz-perq-bar')
    if (!bar) { clearInterval(_perQTimerInterval); _perQTimerInterval = null; return }
    const elapsed = (Date.now() - _perQBarStart) / 1000
    const pct = Math.max(0, 100 - (elapsed / _avgPerQuestionSec) * 100)
    bar.style.width = `${pct}%`
    bar.className = `h-full ${pct <= 0 ? 'bg-red-400' : pct <= 30 ? 'bg-amber-400' : 'bg-indigo-400'}`
  }, 500)
}

// ในโหมดล็อกคำตอบ (ตอบทีละข้อแบบเดินหน้าอย่างเดียว) ปุ่ม "ส่งคำตอบ" จะโผล่
// เฉพาะข้อสุดท้ายเท่านั้น — โหมดปกติ (นักเรียนย้อนไปมาแก้คำตอบได้อิสระ) ยังคง
// เห็นปุ่มส่งได้ทุกข้อเหมือนเดิม เผื่อต้องการส่งก่อนครบทุกข้อ
function _updateNavButtons() {
  const submitBtn = document.getElementById('btn-submit')
  if (!submitBtn || !_lockMode) return
  submitBtn.classList.toggle('hidden', _currentIdx !== _questions.length - 1)
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
  _updateNavButtons()
  if (_avgPerQuestionSec) _startPerQuestionBar()
}

function _renderQuestion() {
  const area = document.getElementById('quiz-question-area')
  if (!area) return
  const q = _questions[_currentIdx]
  const selectedOriginal = _answers[q.question_id]
  const locked = _lockMode && selectedOriginal !== undefined && !_unlockedForEdit.has(q.question_id)
  const elimSet = new Set(_eliminatedChoices[q.question_id] ?? [])
  const correctness = _bonusMode ? _answerCorrectness[q.question_id] : undefined // true/false/undefined

  area.innerHTML = `
    <p class="text-xs text-gray-400 mb-2">ข้อ ${_currentIdx + 1} จาก ${_questions.length}</p>
    <p class="font-semibold text-gray-800 mb-4">${_htmlEsc(q.question_text)}</p>
    ${correctness === true ? `<p class="text-xs font-bold text-emerald-600 mb-3">✓ ตอบถูก</p>`
      : correctness === false ? `<p class="text-xs font-bold text-red-600 mb-3">✗ ตอบผิด</p>` : ''}
    <div class="space-y-2">
      ${q.choices.map((c, pos) => {
        const originalIdx = q.choice_perm ? q.choice_perm[pos] : pos
        const isSelected = selectedOriginal === originalIdx
        const isEliminated = elimSet.has(originalIdx)
        const disabled = locked || isEliminated
        const cls = isEliminated
          ? 'border-gray-100 opacity-30 line-through cursor-not-allowed'
          : isSelected && correctness === true ? 'border-emerald-400 bg-emerald-50'
          : isSelected && correctness === false ? 'border-red-400 bg-red-50'
          : isSelected ? 'border-indigo-400 bg-indigo-50'
          : locked ? 'border-gray-100 opacity-50 cursor-not-allowed'
          : 'border-gray-200 hover:bg-gray-50 cursor-pointer'
        return `
        <label class="flex items-center gap-3 p-3 rounded-xl border ${cls}">
          <input type="radio" name="quiz-choice" class="quiz-choice-input flex-shrink-0" data-pos="${pos}" ${isSelected ? 'checked' : ''} ${disabled ? 'disabled' : ''} />
          <span class="text-sm">${_htmlEsc(c)}</span>
        </label>`
      }).join('')}
    </div>
  `
  loadKaTeX().then(() => renderMathIn(area)).catch(() => {})

  area.querySelectorAll('.quiz-choice-input').forEach(inp => inp.addEventListener('change', () => {
    const pos = parseInt(inp.dataset.pos, 10)
    if (_lockMode) {
      _submitAnswerToServer(q, pos)
    } else {
      _answers[q.question_id] = q.choice_perm ? q.choice_perm[pos] : pos
      _renderQuestion()
      _renderNav()
      _scheduleAutosave()
    }
  }))
}

// Persists one answer immediately via a dedicated RPC (instead of the batch
// heartbeat) so the server can enforce "no going back" and, in bonus mode,
// compute correctness + advance the combo streak — all without this client
// ever learning the answer key for any OTHER question.
async function _submitAnswerToServer(q, pos) {
  const chosenOriginal = q.choice_perm ? q.choice_perm[pos] : pos
  const prevAnswer = _answers[q.question_id]
  _answers[q.question_id] = chosenOriginal
  _renderQuestion() // optimistic lock while the request is in flight
  _renderNav()
  try {
    const result = await rpcSubmitQuizAnswer(_attempt.id, _sessionToken, q.question_id, chosenOriginal)
    if (!result?.accepted) {
      _answers[q.question_id] = prevAnswer
      showToast('บันทึกคำตอบไม่สำเร็จ ลองอีกครั้ง', 'warning')
      _renderQuestion(); _renderNav()
      return
    }
    if (_bonusMode) {
      _answerCorrectness[q.question_id] = result.is_correct
      if (result.bonus_inventory) _bonusInventory = result.bonus_inventory
      _currentStreak = result.current_streak ?? _currentStreak
      _flashAnswerEffect(result.is_correct, _currentStreak)
      _renderStreakBadge()
      _renderBonusToolbar()
      if (result.bonus_awarded?.length) _showBonusPopup(result.bonus_awarded)
    }
    _renderQuestion(); _renderNav(); _updateNavButtons()

    // ตอบผิด (รู้ผลทันทีเฉพาะโหมดคอมโบ/โบนัส) → เลื่อนไปข้อถัดไปให้อัตโนมัติ
    // หลังจากปล่อยให้เห็นเอฟเฟกต์สีแดงก่อนสักครู่ ไม่ต้องกดเองข้อไหนที่ตอบผิด
    if (_bonusMode && result.is_correct === false && _currentIdx < _questions.length - 1) {
      setTimeout(() => { if (_answers[q.question_id] === chosenOriginal) _goTo(_currentIdx + 1) }, 1400)
    }
  } catch (err) {
    _answers[q.question_id] = prevAnswer
    showToast('บันทึกคำตอบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    _renderQuestion(); _renderNav()
  }
}

let _quizEffectStylesInjected = false
function _ensureQuizEffectStyles() {
  if (_quizEffectStylesInjected) return
  _quizEffectStylesInjected = true
  const style = document.createElement('style')
  style.textContent = `
    @keyframes qzShake { 10%,90%{transform:translateX(-2px)} 20%,80%{transform:translateX(4px)} 30%,50%,70%{transform:translateX(-8px)} 40%,60%{transform:translateX(8px)} }
    @keyframes qzPop { 0%{transform:scale(1)} 40%{transform:scale(1.25)} 100%{transform:scale(1)} }
    .quiz-streak-pop { animation: qzPop .4s ease-out; }
  `
  document.head.appendChild(style)
}

// ข้อความให้กำลังใจตอนตอบผิด — สุ่มหมุนเวียนกันไม่ให้จำเจ
const _CALM_DOWN_MESSAGES = [
  'ไม่เป็นไรนะ ตั้งสติแล้วค่อยๆ ทำข้อต่อไป 💪',
  'พลาดนิดหน่อยไม่เป็นไร หายใจลึกๆ แล้วลุยข้อถัดไป 🌤️',
  'ใจเย็นๆ อ่านโจทย์ข้อต่อไปให้ครบก่อนเลือกนะ 🙂',
]

function _flashAnswerEffect(isCorrect, streak = 0) {
  _ensureQuizEffectStyles()
  const el = document.createElement('div')
  el.className = 'fixed inset-0 z-[97] flex items-center justify-center pointer-events-none'
  el.innerHTML = isCorrect
    ? `<div class="flex flex-col items-center gap-2">
        <div class="text-8xl animate-bounce" style="filter:drop-shadow(0 4px 12px rgba(16,185,129,.5))">✅</div>
        ${streak >= 2 ? `<div class="px-4 py-1.5 rounded-full bg-orange-500 text-white font-bold text-sm shadow-lg">🔥 ต่อเนื่อง ${streak} ข้อ!</div>` : ''}
      </div>`
    : `<div class="flex flex-col items-center gap-2">
        <div class="text-8xl" style="animation:qzShake .5s;filter:drop-shadow(0 4px 12px rgba(239,68,68,.5))">❌</div>
        <div class="px-4 py-1.5 rounded-full bg-white border border-red-200 text-red-500 font-semibold text-xs shadow-lg max-w-xs text-center">
          ${_CALM_DOWN_MESSAGES[Math.floor(Math.random() * _CALM_DOWN_MESSAGES.length)]}
        </div>
      </div>`
  document.body.appendChild(el)
  setTimeout(() => el.remove(), isCorrect ? 800 : 1300)
}

function _renderBonusToolbar() {
  const el = document.getElementById('quiz-bonus-toolbar')
  if (!el) return
  el.innerHTML = Object.entries(BONUS_META).map(([key, meta]) => {
    const count = _bonusInventory[key] ?? 0
    const ready = count > 0
    return `
    <button class="bonus-btn relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl border text-xs font-bold flex-shrink-0 ${ready ? 'bg-amber-50 border-amber-300 text-amber-700 shadow-[0_0_0_2px_rgba(245,158,11,0.25)] animate-pulse' : 'bg-gray-50 border-gray-200 text-gray-300'}"
      data-bonus="${key}" ${ready ? '' : 'disabled'}>
      <span class="text-lg leading-none">${meta.icon}</span>
      <span class="text-[9px] leading-tight">${meta.label}</span>
      ${count > 1 ? `<span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] flex items-center justify-center">${count}</span>` : ''}
    </button>`
  }).join('')
  el.querySelectorAll('.bonus-btn').forEach(btn => btn.addEventListener('click', () => _onBonusClick(btn.dataset.bonus)))
}

function _showBonusPopup(awarded) {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[99] bg-black/50 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl overflow-hidden max-w-sm shadow-2xl text-center">
      <div class="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"></div>
      <div class="p-6">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-100 flex items-center justify-center text-3xl animate-bounce">🎉</div>
        <p class="font-bold text-amber-600 text-lg mb-2">ตอบถูกติดต่อกัน! ได้รับโบนัส</p>
        <div class="flex justify-center gap-4 mb-4">
          ${awarded.map(k => `<div class="flex flex-col items-center gap-1"><span class="text-3xl">${BONUS_META[k].icon}</span><span class="text-xs font-bold text-gray-600">${BONUS_META[k].label}</span></div>`).join('')}
        </div>
        <button id="bonus-popup-ack" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">เยี่ยมมาก!</button>
      </div>
    </div>
  `
  document.body.appendChild(modal)
  modal.querySelector('#bonus-popup-ack').addEventListener('click', () => modal.remove())
  loadConfetti().then(() => fireConfetti('mid')).catch(() => {})
}

function _onBonusClick(bonusType) {
  if (bonusType === 'extra_time') { _useBonus('extra_time', null); return }
  if (bonusType === 'fifty_fifty' || bonusType === 'reveal_answer') {
    const q = _questions[_currentIdx]
    if (_answers[q.question_id] !== undefined) {
      showToast('ใช้ได้เฉพาะข้อที่ยังไม่ได้ตอบ — ไปที่ข้อนั้นก่อนแล้วค่อยใช้โบนัส', 'warning')
      return
    }
    _useBonus(bonusType, q.question_id)
    return
  }
  if (bonusType === 'fix_wrong') _openFixWrongPicker()
}

function _openFixWrongPicker() {
  const wrongIdxs = _questions.map((_, i) => i).filter(i => _answerCorrectness[_questions[i].question_id] === false)
  if (!wrongIdxs.length) { showToast('ยังไม่มีข้อที่ตอบผิดให้แก้ไข', 'warning'); return }
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[98] bg-black/40 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl">
      <p class="font-bold text-gray-800 text-sm mb-3">เลือกข้อที่จะแก้ไข</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${wrongIdxs.map(i => `<button class="fix-pick w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 font-bold text-xs" data-idx="${i}">${i + 1}</button>`).join('')}
      </div>
      <button id="fix-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-gray-500 text-xs font-semibold">ยกเลิก</button>
    </div>
  `
  document.body.appendChild(modal)
  modal.querySelector('#fix-cancel').addEventListener('click', () => modal.remove())
  modal.querySelectorAll('.fix-pick').forEach(btn => btn.addEventListener('click', async () => {
    const idx = parseInt(btn.dataset.idx, 10)
    modal.remove()
    await _useBonus('fix_wrong', _questions[idx].question_id)
    _goTo(idx)
  }))
}

async function _useBonus(bonusType, questionId) {
  try {
    const result = await rpcUseQuizBonus(_attempt.id, _sessionToken, bonusType, questionId)
    if (!result?.ok) { showToast(result?.message ?? 'ใช้โบนัสไม่สำเร็จ', 'warning'); return }
    _bonusInventory = result.bonus_inventory ?? _bonusInventory
    if (bonusType === 'fifty_fifty' && result.eliminated_indices) {
      _eliminatedChoices[questionId] = result.eliminated_indices
    }
    if (bonusType === 'fix_wrong') {
      _unlockedForEdit.add(questionId)
    }
    if (bonusType === 'extra_time' && result.new_time_remaining_sec != null) {
      _deadlineMs += 30000
      _updateTimerDisplay()
    }
    if (bonusType === 'reveal_answer' && result.revealed_index != null) {
      _answers[questionId] = result.revealed_index
      _answerCorrectness[questionId] = true
    }
    _renderBonusToolbar()
    _renderQuestion()
    _renderNav()
    showToast('ใช้โบนัสสำเร็จ', 'success')
  } catch (err) {
    showToast('ใช้โบนัสไม่สำเร็จ: ' + (err.message ?? ''), 'error')
  }
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
    // In lock/bonus mode, answers are already persisted authoritatively by
    // submit_quiz_answer() per question — passing null here means "leave
    // answers unchanged", so this call only syncs the countdown.
    const expired = await rpcHeartbeat(_attempt.id, _sessionToken, _lockMode ? null : _answers, remaining)
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
  modal.className = 'fixed inset-0 z-[99] bg-black/60 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl overflow-hidden max-w-sm shadow-2xl text-center">
      <div class="h-2 bg-gradient-to-r from-red-500 via-rose-500 to-red-600"></div>
      <div class="p-6">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center animate-pulse">
          <span class="text-3xl">⚠️</span>
        </div>
        <p class="font-bold text-red-600 text-lg mb-2">ตรวจพบว่าออกนอกหน้าสอบ! (ครั้งที่ ${count}/2)</p>
        <p class="text-sm text-gray-600 mb-5">หากออกนอกหน้าสอบอีกครั้ง ระบบจะ<strong class="text-red-600">ส่งคำตอบอัตโนมัติและล็อกไม่ให้ทำต่อ</strong></p>
        <button id="quiz-violation-ack" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg"
          style="background:linear-gradient(135deg,#ef4444,#dc2626);box-shadow:0 4px 14px rgba(239,68,68,0.4)">รับทราบ</button>
      </div>
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
  clearInterval(_perQTimerInterval)
  _perQTimerInterval = null
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

  // สรุปคะแนนทุกครั้ง — เฉพาะตอนที่สอบได้หลายครั้งและใช้ครบโควตาแล้ว (รวมครั้งนี้ด้วย)
  let allAttemptsHtml = ''
  if (quiz?.max_attempts > 1) {
    const allAttempts = await getMyQuizAttemptHistory(fresh.quiz_id, fresh.student_id).catch(() => [])
    if (allAttempts.length >= quiz.max_attempts) {
      const mode = quiz.attempt_scoring_mode ?? 'last'
      const finalAttemptNo = mode === 'highest'
        ? allAttempts.reduce((best, a) => (a.score_pct ?? 0) > (best?.score_pct ?? -1) ? a : best, null)?.attempt_number
        : mode === 'first' ? allAttempts[0]?.attempt_number
        : allAttempts[allAttempts.length - 1]?.attempt_number
      const modeLabel = { first: 'ครั้งแรก', last: 'ครั้งล่าสุด', highest: 'คะแนนสูงสุด' }[mode] ?? mode
      allAttemptsHtml = `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <p class="text-xs font-bold text-gray-500 mb-3">สรุปคะแนนทุกครั้ง (ทำครบ ${allAttempts.length}/${quiz.max_attempts} ครั้งแล้ว)</p>
        <div class="space-y-1.5">
          ${allAttempts.map(a => `
            <div class="flex items-center justify-between text-sm ${a.attempt_number === finalAttemptNo ? 'font-bold text-indigo-700' : 'text-gray-500'}">
              <span>ครั้งที่ ${a.attempt_number}${a.status === 'terminated_violation' ? ' (ถูกล็อก)' : ''}${a.attempt_number === finalAttemptNo ? ' ⭐' : ''}</span>
              <span>${a.score_pct != null ? a.score_pct.toFixed(1) + '%' : '—'}</span>
            </div>`).join('')}
        </div>
        <p class="text-[11px] text-gray-400 mt-3">⭐ = คะแนนที่ใช้บันทึกจริง (ตามที่ครูตั้งไว้: ${modeLabel})</p>
      </div>`
    }
  }

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
      ${allAttemptsHtml}
      ${detailHtml}
      <button id="btn-back-overview" class="w-full py-3 rounded-2xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50">← กลับหน้าภาพรวม</button>
    </div>
  `
  document.getElementById('btn-back-overview').addEventListener('click', () => { window.location.href = 'student.html' })
  if (reviewPolicy !== 'total_only') loadKaTeX().then(() => renderMathIn(root)).catch(() => {})

  const confettiTier = scorePct >= 80 ? 'high' : scorePct >= 50 ? 'mid' : null
  if (confettiTier) loadConfetti().then(() => fireConfetti(confettiTier)).catch(() => {})
}
