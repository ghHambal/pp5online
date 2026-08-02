// js/teacher-views-quiz-config.js
import { getMyClasses, getScoreColumns, getSystemConfig } from './api.js'
import { getQuizzesForBank, getQuizQuestions, createQuiz, updateQuiz, startQuizLive, closeQuiz, deleteQuiz, getTeacherStartedQuizCount } from './quiz-api.js'
import { showToast, showDangerConfirm, setButtonLoading } from './ui.js'
import { setContent, setTitle, _htmlEsc, SELECT_CLS, INPUT_CLS } from './teacher-views-utils.js'
import { loadKaTeX, renderMathIn } from './katex-loader.js'

const STATUS_LABEL = {
  draft: { label: 'ร่าง', cls: 'bg-gray-100 text-gray-600' },
  announced: { label: 'รอครูเริ่ม', cls: 'bg-amber-100 text-amber-700' },
  started: { label: 'กำลังสอบ', cls: 'bg-emerald-100 text-emerald-700' },
  closed: { label: 'ปิดสอบแล้ว', cls: 'bg-gray-200 text-gray-500' },
}

const SCORING_LABEL = { first: 'ครั้งแรก', last: 'ครั้งล่าสุด', highest: 'คะแนนสูงสุด' }
const REVIEW_LABEL = { total_only: 'เห็นคะแนนรวมเท่านั้น', per_question: 'เห็นถูก/ผิดรายข้อ', full_review: 'เห็นเฉลยเต็ม' }
const WRITE_MODE_LABEL = {
  highest: { label: 'เทียบเอาคะแนนสูงกว่า', hint: 'ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/กิจกรรมอื่น) จะเก็บค่าที่สูงกว่าไว้ (ค่าเริ่มต้น)' },
  overwrite: { label: 'ทับคะแนนเก่า', hint: 'เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่' },
  add: { label: 'บวกเพิ่มจากคะแนนเดิม', hint: 'บวกคะแนนที่ได้จากควิซนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายควิซ' },
}

export async function renderBankQuizzes(teacher, bank) {
  if (!bank) return
  setTitle(`แบบทดสอบจากคลัง: ${bank.name}`)
  setContent(`<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>`)

  const [quizzes, classes, questions, cfg, startedCount] = await Promise.all([
    getQuizzesForBank(bank.id),
    getMyClasses(teacher.id),
    getQuizQuestions(bank.id),
    getSystemConfig().catch(() => ({})),
    getTeacherStartedQuizCount(teacher.id).catch(() => 0),
  ])

  // สร้างคลัง/คำถาม/ตั้งค่าแบบทดสอบไม่จำกัดสำหรับทุกคน — แต่การ "เริ่มสอบ" จริง
  // ให้นักเรียนทำ ครูทั่วไป (ยังไม่โดเนทถึงระดับ 2) ใช้ได้แค่ตามโควตาฟรีที่แอดมิน
  // ตั้งไว้ (นับจากจำนวนครั้งที่เคยกด "เริ่มสอบ" มาแล้วทั้งหมด ไม่ใช่ localStorage
  // แบบฟีเจอร์ทดลองอื่นๆ ในระบบ เพราะเกตนี้ป้องกันการใช้งานจริงกับนักเรียน ต้องผูก
  // กับบัญชีจริงเสมอ) — ทดลองทำเองผ่านปุ่ม "ทดลองทำข้อสอบ" ทำได้ไม่จำกัดเสมอ
  const donorTier = window._pp5DonorTierIndex ?? 0
  const isDonor = donorTier >= 2
  const freeStartLimit = parseInt(cfg.quizFreeStartLimit ?? 2, 10)
  const canStartFree = isDonor || startedCount < freeStartLimit

  const classNameById = Object.fromEntries(classes.map(c => [
    c.id, `${c.master_subjects?.subject_name ?? ''} (${c.class_name ?? '—'})`
  ]))

  const quotaBannerHtml = isDonor ? '' : `
    <div class="rounded-2xl p-3.5 flex items-center gap-3 ${canStartFree ? 'bg-indigo-50 border border-indigo-100' : 'bg-amber-50 border border-amber-200'}">
      <span class="text-xl flex-shrink-0">${canStartFree ? '🎁' : '⭐'}</span>
      <p class="text-xs ${canStartFree ? 'text-indigo-700' : 'text-amber-800'} leading-relaxed">
        ${canStartFree
          ? `โควตาทดลอง "เริ่มสอบจริง" ฟรี: ใช้ไปแล้ว ${startedCount}/${freeStartLimit} ครั้ง — สร้างคลัง/ตั้งค่า/ทดลองทำเองได้ไม่จำกัดเสมอ`
          : `ใช้โควตาทดลอง "เริ่มสอบจริง" ฟรีครบ ${freeStartLimit} ครั้งแล้ว — โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบให้นักเรียนทำได้ไม่จำกัด (ยังทดลองทำเองและตั้งค่าต่อได้ตามปกติ)`}
      </p>
    </div>`

  setContent(`
    <div class="space-y-4">
      <button id="btn-back-questions" class="text-sm text-gray-500 hover:text-gray-700">← กลับไปหน้าคำถามในคลัง</button>

      ${quotaBannerHtml}

      <div class="flex items-center justify-between">
        <h3 class="font-bold text-gray-700 text-sm">แบบทดสอบที่สร้างจากคลังนี้ (${quizzes.length} รายการ)</h3>
        <button id="btn-create-quiz" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm">＋ สร้างแบบทดสอบใหม่</button>
      </div>

      <div class="space-y-3" id="quiz-list">
        ${quizzes.length === 0 ? `
          <div class="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <p class="text-sm text-gray-400">ยังไม่มีแบบทดสอบจากคลังนี้ — กำหนดค่าแล้วเลือกห้องเรียนที่จะให้สอบได้เลย</p>
          </div>
        ` : quizzes.map(q => {
          const st = STATUS_LABEL[q.status] ?? STATUS_LABEL.draft
          return `
          <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-0.5 rounded-lg text-xs font-bold ${st.cls}">${st.label}</span>
                  <h4 class="font-bold text-gray-800 text-sm truncate">${_htmlEsc(q.title)}</h4>
                </div>
                <p class="text-xs text-gray-400">${_htmlEsc(classNameById[q.class_id] ?? 'ห้องที่ถูกลบ')} · ${q.num_questions} ข้อ · ${q.time_limit_minutes ?? '—'} นาที · ทำได้ ${q.max_attempts} ครั้ง (นับ${SCORING_LABEL[q.attempt_scoring_mode]})</p>
              </div>
              <div class="flex flex-col gap-1.5 flex-shrink-0">
                ${q.status === 'announced' ? `<button class="btn-start-quiz px-3 py-1.5 rounded-lg ${canStartFree ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-300'} text-white text-xs font-bold" data-id="${q.id}">▶️ เริ่มสอบ</button>` : ''}
                ${q.status === 'started' ? `<button class="btn-close-quiz px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold" data-id="${q.id}">⏹️ ปิดสอบ</button>` : ''}
                ${q.status === 'started' ? `<button class="btn-monitor-quiz px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold" data-id="${q.id}">🔴 ดูสด</button>` : ''}
                ${(q.status === 'started' || q.status === 'closed') ? `<button class="btn-analytics-quiz px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold" data-id="${q.id}">📊 สถิติ</button>` : ''}
                <button class="btn-preview-quiz px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-600 hover:bg-indigo-50 text-xs font-semibold" data-id="${q.id}">🧪 ทดลองทำข้อสอบ</button>
                <button class="btn-edit-quiz px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold" data-id="${q.id}">✏️ แก้ไข</button>
                <button class="btn-delete-quiz px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold" data-id="${q.id}">🗑️ ลบ</button>
              </div>
            </div>
          </div>
        `}).join('')}
      </div>
    </div>
  `)

  document.getElementById('btn-back-questions').addEventListener('click', async () => {
    const { _renderBankQuestions } = await import('./teacher-views-quiz-banks.js')
    _renderBankQuestions(teacher, bank)
  })

  document.getElementById('btn-create-quiz').addEventListener('click', () =>
    _renderQuizForm(teacher, bank, classes, questions.length, null))

  document.querySelectorAll('.btn-edit-quiz').forEach(btn =>
    btn.addEventListener('click', () => _renderQuizForm(teacher, bank, classes, questions.length, quizzes.find(q => q.id === btn.dataset.id))))

  document.querySelectorAll('.btn-preview-quiz').forEach(btn =>
    btn.addEventListener('click', () => _renderQuizPreview(quizzes.find(q => q.id === btn.dataset.id), questions)))

  document.querySelectorAll('.btn-start-quiz').forEach(btn =>
    btn.addEventListener('click', async () => {
      if (!canStartFree) { _showQuizStartPaywall(freeStartLimit); return }
      const ok = await showDangerConfirm({
        title: 'เริ่มสอบเลยหรือไม่?',
        message: 'นักเรียนในห้องจะเริ่มเข้าทำแบบทดสอบได้ทันที',
        confirmText: 'เริ่มสอบ'
      })
      if (!ok) return
      await startQuizLive(btn.dataset.id)
      showToast('เริ่มสอบแล้ว', 'success')
      renderBankQuizzes(teacher, bank)
    }))

  document.querySelectorAll('.btn-close-quiz').forEach(btn =>
    btn.addEventListener('click', async () => {
      const ok = await showDangerConfirm({
        title: 'ปิดสอบเลยหรือไม่?',
        message: 'นักเรียนที่ยังไม่ได้เริ่มสอบจะเข้าทำแบบทดสอบนี้ไม่ได้อีก',
        confirmText: 'ปิดสอบ'
      })
      if (!ok) return
      await closeQuiz(btn.dataset.id)
      showToast('ปิดสอบแล้ว', 'success')
      renderBankQuizzes(teacher, bank)
    }))

  document.querySelectorAll('.btn-delete-quiz').forEach(btn =>
    btn.addEventListener('click', async () => {
      const ok = await showDangerConfirm({ title: 'ลบแบบทดสอบนี้?', message: 'ประวัติการทำข้อสอบของนักเรียนในแบบทดสอบนี้จะถูกลบไปด้วย' })
      if (!ok) return
      await deleteQuiz(btn.dataset.id)
      showToast('ลบแบบทดสอบแล้ว', 'success')
      renderBankQuizzes(teacher, bank)
    }))

  document.querySelectorAll('.btn-monitor-quiz').forEach(btn =>
    btn.addEventListener('click', async () => {
      const { openQuizMonitor } = await import('./teacher-views-quiz-monitor.js')
      openQuizMonitor(quizzes.find(q => q.id === btn.dataset.id))
    }))

  document.querySelectorAll('.btn-analytics-quiz').forEach(btn =>
    btn.addEventListener('click', async () => {
      const { openQuizAnalytics } = await import('./teacher-views-quiz-analytics.js')
      openQuizAnalytics(quizzes.find(q => q.id === btn.dataset.id))
    }))
}

async function _renderQuizForm(teacher, bank, classes, bankQuestionCount, quiz) {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-1">${quiz ? 'แก้ไขแบบทดสอบ' : 'สร้างแบบทดสอบใหม่'}</h3>
      <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${bankQuestionCount} ข้อ</p>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อแบบทดสอบ</label>
          <input id="qz-title" class="${INPUT_CLS}" value="${_htmlEsc(quiz?.title ?? '')}" placeholder="เช่น สอบย่อยบทที่ 1" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ห้องเรียนที่จะให้สอบ</label>
          <select id="qz-class" class="${SELECT_CLS}">
            ${classes.map(c => `<option value="${c.id}" ${quiz?.class_id === c.id ? 'selected' : ''}>${_htmlEsc(c.master_subjects?.subject_name ?? '')} (${_htmlEsc(c.class_name ?? '—')})</option>`).join('')}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนข้อที่สุ่ม</label>
            <input id="qz-num" type="number" min="1" class="${INPUT_CLS}" value="${quiz?.num_questions ?? Math.min(10, bankQuestionCount || 10)}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">เวลาสอบ (นาที)</label>
            <input id="qz-time" type="number" min="1" class="${INPUT_CLS}" value="${quiz?.time_limit_minutes ?? 30}" />
          </div>
        </div>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <input type="checkbox" id="qz-shuffle-q" ${quiz ? (quiz.shuffle_questions ? 'checked' : '') : 'checked'} /> สลับลำดับคำถาม
          </label>
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <input type="checkbox" id="qz-shuffle-c" ${quiz ? (quiz.shuffle_choices ? 'checked' : '') : 'checked'} /> สลับลำดับตัวเลือก
          </label>
        </div>
        <div class="bg-indigo-50/60 border border-indigo-100 rounded-xl p-3 space-y-2">
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <input type="checkbox" id="qz-lock-answer" ${quiz?.lock_on_answer ? 'checked' : ''} /> ล็อกคำตอบทันทีที่เลือก (ห้ามย้อนกลับแก้ไขข้อที่ตอบแล้ว)
          </label>
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <input type="checkbox" id="qz-instant-bonus" ${quiz?.instant_feedback_bonus ? 'checked' : ''} /> เปิดเอฟเฟกต์ถูก/ผิดทันที + ระบบคอมโบ/โบนัส
          </label>
          <p class="text-[11px] text-gray-400 leading-relaxed pl-6">ตอบถูกติดกัน 3 ข้อ ปลดล็อกโบนัส (50/50, แก้ข้อที่เคยผิด, ต่อเวลา) — ครบ 6 ข้อ ได้โบนัสเปิดเฉลยเพิ่ม<br>เปิดตัวเลือกนี้จะล็อกคำตอบทันทีให้อัตโนมัติด้วย (ไม่งั้นเห็นเฉลยแล้วย้อนไปแก้ได้ ระบบจะไม่มีความหมาย)</p>
        </div>
        <div class="bg-red-50/60 border border-red-100 rounded-xl p-3 space-y-2">
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <input type="checkbox" id="qz-deterrent" ${quiz?.deterrent_notice_enabled ? 'checked' : ''} /> แสดงป้ายเตือน + ข้อความนาซีฮัตก่อนเริ่มสอบ
          </label>
          <p class="text-[11px] text-gray-400 leading-relaxed pl-6">แสดงข้อความห้ามมองจอที่สอง/หนังสือ พร้อมขอบแดงระหว่างทำข้อสอบ (ข้อความจริงทุกคำ อิงจากระบบตรวจจับการออกนอกหน้าสอบที่มีอยู่แล้ว ไม่ได้อ้างว่ามีกล้อง/ตรวจจับสายตา)</p>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนครั้งที่ทำได้</label>
            <input id="qz-attempts" type="number" min="1" class="${INPUT_CLS}" value="${quiz?.max_attempts ?? 1}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">นับคะแนนแบบ</label>
            <select id="qz-scoring" class="${SELECT_CLS}">
              ${Object.entries(SCORING_LABEL).map(([v, l]) => `<option value="${v}" ${(quiz?.attempt_scoring_mode ?? 'last') === v ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">เปิดสอบตั้งแต่ (ไม่บังคับ)</label>
            <input id="qz-open" type="datetime-local" class="${INPUT_CLS}" value="${quiz?.open_at ? quiz.open_at.slice(0, 16) : ''}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ปิดสอบเมื่อ (ไม่บังคับ)</label>
            <input id="qz-close" type="datetime-local" class="${INPUT_CLS}" value="${quiz?.close_at ? quiz.close_at.slice(0, 16) : ''}" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">นักเรียนดูผลได้แค่ไหนหลังส่งข้อสอบ</label>
          <select id="qz-review" class="${SELECT_CLS}">
            ${Object.entries(REVIEW_LABEL).map(([v, l]) => `<option value="${v}" ${(quiz?.review_policy ?? 'total_only') === v ? 'selected' : ''}>${l}</option>`).join('')}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ผูกกับคอลัมน์คะแนน (ไม่บังคับ)</label>
            <select id="qz-score-col" class="${SELECT_CLS}">
              <option value="">— ไม่ผูกคะแนน —</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">คะแนนเต็ม</label>
            <input id="qz-score-max" type="number" min="0" step="0.5" class="${INPUT_CLS}" value="${quiz?.score_max ?? 100}" />
          </div>
        </div>
        <div id="qz-write-mode-wrap" class="${quiz?.score_column_id ? '' : 'hidden'}">
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร</label>
          <select id="qz-write-mode" class="${SELECT_CLS}">
            ${Object.entries(WRITE_MODE_LABEL).map(([v, m]) => `<option value="${v}" ${(quiz?.score_write_mode ?? 'highest') === v ? 'selected' : ''}>${m.label}</option>`).join('')}
          </select>
          <p id="qz-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="qz-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="qz-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `
  document.body.appendChild(modal)

  const classSelect = modal.querySelector('#qz-class')
  const scoreColSelect = modal.querySelector('#qz-score-col')
  const loadScoreColumns = async () => {
    const classId = classSelect.value
    if (!classId) return
    const cols = await getScoreColumns(classId).catch(() => [])
    scoreColSelect.innerHTML = '<option value="">— ไม่ผูกคะแนน —</option>' +
      cols.map(c => `<option value="${c.id}" ${quiz?.score_column_id === c.id ? 'selected' : ''}>${_htmlEsc(c.assignment_name)}</option>`).join('')
  }
  classSelect.addEventListener('change', loadScoreColumns)
  if (classSelect.value) await loadScoreColumns()

  const writeModeWrap = modal.querySelector('#qz-write-mode-wrap')
  const writeModeSelect = modal.querySelector('#qz-write-mode')
  const writeModeHint = modal.querySelector('#qz-write-mode-hint')
  const syncWriteModeUI = () => {
    writeModeWrap.classList.toggle('hidden', !scoreColSelect.value)
    writeModeHint.textContent = WRITE_MODE_LABEL[writeModeSelect.value]?.hint ?? ''
  }
  scoreColSelect.addEventListener('change', syncWriteModeUI)
  writeModeSelect.addEventListener('change', syncWriteModeUI)
  syncWriteModeUI()

  const lockAnswerBox = modal.querySelector('#qz-lock-answer')
  const instantBonusBox = modal.querySelector('#qz-instant-bonus')
  // Instant feedback/bonus requires each answer to be locked the moment it's
  // chosen (otherwise a student sees the correct/wrong flash then just
  // switches to the right choice, making the whole effect meaningless) —
  // so checking this box forces + disables the lock checkbox.
  const syncLockDependency = () => {
    if (instantBonusBox.checked) { lockAnswerBox.checked = true; lockAnswerBox.disabled = true }
    else { lockAnswerBox.disabled = false }
  }
  instantBonusBox.addEventListener('change', syncLockDependency)
  syncLockDependency()

  modal.querySelector('#qz-cancel').addEventListener('click', () => modal.remove())
  modal.querySelector('#qz-save').addEventListener('click', async (e) => {
    const title = modal.querySelector('#qz-title').value.trim()
    const numQuestions = parseInt(modal.querySelector('#qz-num').value, 10)
    if (!title) { showToast('กรุณาระบุชื่อแบบทดสอบ', 'warning'); return }
    if (!numQuestions || numQuestions < 1) { showToast('กรุณาระบุจำนวนข้อที่ถูกต้อง', 'warning'); return }
    if (numQuestions > bankQuestionCount) {
      showToast(`คลังมีแค่ ${bankQuestionCount} ข้อ แต่ตั้งค่าให้สุ่ม ${numQuestions} ข้อ — เพิ่มคำถามในคลังก่อนบันทึก`, 'warning')
      return
    }

    const openAt = modal.querySelector('#qz-open').value
    const closeAt = modal.querySelector('#qz-close').value

    const payload = {
      bank_id: bank.id,
      class_id: classSelect.value,
      title,
      num_questions: numQuestions,
      shuffle_questions: modal.querySelector('#qz-shuffle-q').checked,
      shuffle_choices: modal.querySelector('#qz-shuffle-c').checked,
      lock_on_answer: modal.querySelector('#qz-instant-bonus').checked || modal.querySelector('#qz-lock-answer').checked,
      instant_feedback_bonus: modal.querySelector('#qz-instant-bonus').checked,
      deterrent_notice_enabled: modal.querySelector('#qz-deterrent').checked,
      max_attempts: parseInt(modal.querySelector('#qz-attempts').value, 10) || 1,
      attempt_scoring_mode: modal.querySelector('#qz-scoring').value,
      time_limit_minutes: parseInt(modal.querySelector('#qz-time').value, 10) || null,
      open_at: openAt ? new Date(openAt).toISOString() : null,
      close_at: closeAt ? new Date(closeAt).toISOString() : null,
      review_policy: modal.querySelector('#qz-review').value,
      score_column_id: scoreColSelect.value || null,
      score_max: parseFloat(modal.querySelector('#qz-score-max').value) || null,
      score_write_mode: writeModeSelect.value,
    }

    setButtonLoading(e.target, true)
    try {
      if (quiz) {
        await updateQuiz(quiz.id, payload)
      } else {
        await createQuiz({ ...payload, status: 'announced' })
      }
      showToast('บันทึกแล้ว', 'success')
      modal.remove()
      renderBankQuizzes(teacher, bank)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      setButtonLoading(e.target, false, 'บันทึก')
    }
  })
}

function _showQuizStartPaywall(freeStartLimit) {
  const m = document.createElement('div')
  m.className = 'fixed inset-0 z-[95] bg-black/40 flex items-center justify-center p-4'
  m.innerHTML = `
    <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
      <div class="text-5xl mb-3">⭐</div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">ใช้โควตาทดลองฟรีครบแล้ว</h3>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">คุณเริ่มสอบจริงให้นักเรียนทำไปแล้ว ${freeStartLimit} ครั้ง (ครบโควตาทดลองฟรี) โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบได้ไม่จำกัด — สร้างคลัง/ตั้งค่า/ทดลองทำเองยังทำได้ตามปกติ</p>
      <div class="space-y-2">
        <button id="paywall-donate" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดการสนับสนุน</button>
        <button id="paywall-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ปิด</button>
      </div>
    </div>
  `
  document.body.appendChild(m)
  m.querySelector('#paywall-cancel').addEventListener('click', () => m.remove())
  m.querySelector('#paywall-donate').addEventListener('click', () => {
    m.remove()
    document.getElementById('btn-donate-float')?.click()
  })
}

// "ทดลองทำข้อสอบ" — ให้ครูลองทำแบบทดสอบของตัวเองเหมือนนักเรียน แต่ทำงานล้วน
// ฝั่ง client ล้วนๆ ไม่มีการเขียนลง quiz_attempts เลย (ครูไม่มีแถวใน students
// ให้ผูกอยู่แล้ว) จึงไม่นับเป็นการสอบจริง ไม่กระทบโควตา/สถิติ/คะแนนนักเรียนใดๆ
// เห็นเฉลยได้ทันทีเพราะเป็นเจ้าของคำถามเองอยู่แล้ว ไม่ใช่การรั่วไหลของเฉลย
function _renderQuizPreview(quiz, allQuestions) {
  if (!quiz) return
  const picked = allQuestions.slice(0, quiz.num_questions)
  if (!picked.length) { showToast('คลังนี้ยังไม่มีคำถาม', 'warning'); return }

  let idx = 0
  const answers = {}

  const m = document.createElement('div')
  m.className = 'fixed inset-0 z-[95] bg-white flex flex-col'
  document.body.appendChild(m)

  const renderQuestion = () => {
    const q = picked[idx]
    const selected = answers[q.id]
    m.innerHTML = `
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm truncate">🧪 ทดลองทำ: ${_htmlEsc(quiz.title)}</h2>
          <p class="text-xs text-amber-600">โหมดทดลอง — ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียน</p>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-2xl mx-auto">
          <p class="text-xs text-gray-400 mb-2">ข้อ ${idx + 1} จาก ${picked.length}</p>
          <p class="font-semibold text-gray-800 mb-4">${_htmlEsc(q.question_text)}</p>
          <div class="space-y-2" id="qp-choices">
            ${q.choices.map((c, i) => {
              const isSelected = selected === i
              const isCorrect = i === q.correct_choice_index
              let cls = 'border-gray-200 hover:bg-gray-50 cursor-pointer'
              if (selected != null) {
                if (isCorrect) cls = 'border-emerald-400 bg-emerald-50'
                else if (isSelected) cls = 'border-red-400 bg-red-50'
                else cls = 'border-gray-100 opacity-60'
              }
              return `
              <label class="flex items-center gap-3 p-3 rounded-xl border ${cls}">
                <input type="radio" name="qp-choice" class="qp-choice-input flex-shrink-0" data-i="${i}" ${isSelected ? 'checked' : ''} ${selected != null ? 'disabled' : ''} />
                <span class="text-sm">${_htmlEsc(c)}</span>
              </label>`
            }).join('')}
          </div>
          ${selected != null && q.explanation ? `<p class="text-xs text-gray-500 mt-3 italic">💡 ${_htmlEsc(q.explanation)}</p>` : ''}
          <div class="flex justify-between gap-2 mt-6">
            <button id="qp-prev" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm" ${idx === 0 ? 'disabled' : ''}>← ก่อนหน้า</button>
            ${idx === picked.length - 1
              ? `<button id="qp-finish" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm">ดูผลทดลอง</button>`
              : `<button id="qp-next" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ถัดไป →</button>`}
          </div>
        </div>
      </div>
    `
    loadKaTeX().then(() => renderMathIn(m)).catch(() => {})
    m.querySelector('#qp-close').addEventListener('click', () => m.remove())
    m.querySelectorAll('.qp-choice-input').forEach(inp => inp.addEventListener('change', () => {
      answers[q.id] = parseInt(inp.dataset.i, 10)
      renderQuestion()
    }))
    m.querySelector('#qp-prev')?.addEventListener('click', () => { idx--; renderQuestion() })
    m.querySelector('#qp-next')?.addEventListener('click', () => { idx++; renderQuestion() })
    m.querySelector('#qp-finish')?.addEventListener('click', renderResult)
  }

  const renderResult = () => {
    const correct = picked.filter(q => answers[q.id] === q.correct_choice_index).length
    const pct = picked.length > 0 ? (correct / picked.length * 100) : 0
    m.innerHTML = `
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <h2 class="font-bold text-gray-800 text-sm">ผลการทดลองทำ</h2>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-md mx-auto text-center space-y-4">
          <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-lg">
            <p class="text-sm text-indigo-100 mb-1">ถูก ${correct}/${picked.length} ข้อ</p>
            <p class="text-5xl font-extrabold">${pct.toFixed(1)}%</p>
          </div>
          <p class="text-xs text-amber-600">นี่คือการทดลองทำเท่านั้น ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียนใดๆ</p>
          <button id="qp-done" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">เสร็จสิ้น</button>
        </div>
      </div>
    `
    m.querySelector('#qp-close').addEventListener('click', () => m.remove())
    m.querySelector('#qp-done').addEventListener('click', () => m.remove())
  }

  renderQuestion()
}
