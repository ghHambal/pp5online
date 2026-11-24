// js/teacher-views-quiz-config.js
import { getMyClasses, getScoreColumns, getSystemConfig } from './api.js'
import { getQuizzesForBank, getQuizQuestions, createQuiz, updateQuiz, startQuizLive, closeQuiz, applyQuizScores, deleteQuiz, getTeacherStartedQuizCount } from './quiz-api.js'
import { showToast, showDangerConfirm, showQuizCloseChoice, setButtonLoading, getFriendlyErrorMessage } from './ui.js'
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

export async function renderBankQuizzes(teacher, bank, preferredClassId = null) {
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
  const parsedFreeStartLimit = parseInt(cfg.quizFreeStartLimit, 10)
  const freeStartLimit = Number.isFinite(parsedFreeStartLimit) ? parsedFreeStartLimit : 2
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
                ${(q.status === 'closed' && q.score_column_id) ? `<button class="btn-apply-quiz-score px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold" data-id="${q.id}">📥 ส่งคะแนนย้อนหลัง</button>` : ''}
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
    _renderQuizForm(teacher, bank, classes, questions.length, null, preferredClassId))

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
      const quiz = quizzes.find(q => q.id === btn.dataset.id)
      if (!quiz) return
      const cols = quiz.score_column_id ? await getScoreColumns(quiz.class_id).catch(() => []) : []
      const target = cols.find(c => String(c.id) === String(quiz.score_column_id))
      const choice = await showQuizCloseChoice({
        quizTitle: quiz.title,
        hasScoreColumn: Boolean(quiz.score_column_id),
        targetColumn: target?.assignment_name ?? '',
        writeModeLabel: WRITE_MODE_LABEL[quiz.score_write_mode]?.label ?? '',
      })
      if (!choice) return
      await closeQuiz(btn.dataset.id, { writeScores: choice === 'write_scores' })
      showToast(choice === 'write_scores' ? 'ปิดสอบและส่งคะแนนแล้ว' : 'ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน', 'success')
      renderBankQuizzes(teacher, bank)
    }))

  document.querySelectorAll('.btn-apply-quiz-score').forEach(btn =>
    btn.addEventListener('click', async () => {
      const quiz = quizzes.find(q => q.id === btn.dataset.id)
      if (!quiz?.score_column_id) return
      const cols = await getScoreColumns(quiz.class_id).catch(() => [])
      const target = cols.find(c => String(c.id) === String(quiz.score_column_id))
      const mode = WRITE_MODE_LABEL[quiz.score_write_mode]?.label ?? 'ตามการตั้งค่า'
      const ok = await showDangerConfirm({
        title: 'ส่งคะแนนข้อสอบย้อนหลัง?',
        message: `ระบบจะนำคะแนน “${quiz.title}” ไปยังคอลัมน์ “${target?.assignment_name ?? 'คอลัมน์ที่ผูกไว้'}”`,
        detail: `วิธีเขียน: ${mode} · โหมดบวกเพิ่มจะเพิ่มเฉพาะส่วนต่าง จึงกดซ้ำแล้วไม่บวกคะแนนเดิมซ้ำ`,
        confirmText: 'ส่งคะแนน'
      })
      if (!ok) return
      const count = await applyQuizScores(quiz.id)
      showToast(`ส่งคะแนนแล้ว ${count} คน`, 'success')
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

async function _renderQuizForm(teacher, bank, classes, bankQuestionCount, quiz, preferredClassId = null) {
  let promptDefaults = {}
  try { promptDefaults = JSON.parse(localStorage.getItem(`quiz-prompt-settings:${bank.id}`) ?? '{}') } catch { /* ignore invalid local preference */ }

  const activeElement = document.activeElement
  const modal = document.createElement('div')
  modal.id = 'quiz-config-wizard'
  modal.className = 'fixed inset-0 z-[90] bg-slate-50 flex flex-col'
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.setAttribute('aria-labelledby', 'qz-wizard-title')
  const steps = [
    { title: 'ห้องและชื่อ', short: 'ห้อง/ชื่อ' },
    { title: 'จำนวนข้อและเวลา', short: 'ข้อสอบ' },
    { title: 'เงื่อนไขการสอบ', short: 'การสอบ' },
    { title: 'ผูกคะแนนและบันทึก', short: 'คะแนน' },
    { title: 'ตรวจทานและยืนยัน', short: 'ตรวจทาน' },
  ]
  let currentStep = 0
  let scoreColumnsLoadState = 'idle'
  let scoreColumnsLoadClassId = ''
  let scoreColumnsError = false
  let columnsLoadPromise = Promise.resolve([])

  modal.innerHTML = `
    <header class="flex-shrink-0 bg-white border-b border-slate-200 shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <div class="min-w-0 flex-1">
          <p class="text-[11px] text-slate-500 truncate">คลังข้อสอบ · ${_htmlEsc(bank.name)}</p>
          <h2 id="qz-wizard-title" class="text-base sm:text-lg font-extrabold text-slate-800">${quiz ? 'แก้ไขแบบทดสอบ' : 'สร้างแบบทดสอบใหม่'}</h2>
        </div>
        <span class="hidden sm:inline text-xs text-slate-500">มีคำถามในคลัง ${bankQuestionCount} ข้อ</span>
        <button type="button" id="qz-cancel" class="w-11 h-11 flex-shrink-0 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold" aria-label="ปิดหน้าตั้งค่า">✕</button>
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 pb-3">
        <div class="flex items-center justify-between gap-2 mb-2" aria-label="ความคืบหน้าการตั้งค่า">
          ${steps.map((step, index) => `<div class="flex-1 flex items-center gap-2 min-w-0"><span class="qz-step-dot w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${index === 0 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-300'}" data-step-dot="${index}">${index + 1}</span><span class="hidden md:block text-xs font-semibold truncate ${index === 0 ? 'text-indigo-700' : 'text-slate-400'}" data-step-label="${index}">${step.short}</span>${index < steps.length - 1 ? '<span class="h-px flex-1 bg-slate-200"></span>' : ''}</div>`).join('')}
        </div>
        <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div id="qz-progress" class="h-full bg-indigo-600 rounded-full transition-all" style="width:20%"></div></div>
        <p id="qz-step-count" class="text-[11px] text-slate-500 mt-1.5">ขั้นตอนที่ 1 จาก ${steps.length} · ${steps[0].title}</p>
      </div>
    </header>

    <main id="qz-wizard-scroll" class="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 py-5 sm:py-8">
      <div class="max-w-4xl mx-auto">
        <div id="qz-error-summary" class="hidden mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert" tabindex="-1"></div>

        <section data-step-panel="0" class="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-7">
          <p class="text-xs font-bold text-indigo-600 mb-1">ขั้นตอนที่ 1</p>
          <h3 class="text-xl font-extrabold text-slate-800">กำหนดห้องเรียนและชื่อแบบทดสอบ</h3>
          <p class="text-sm text-slate-500 mt-1 mb-6">แบบทดสอบหนึ่งรายการจะผูกกับห้องเรียนที่เลือก ครูสร้างรายการแยกสำหรับห้องอื่นได้</p>
          <div class="space-y-5">
            <div>
              <label for="qz-title" class="block text-sm font-bold text-slate-700 mb-1.5">ชื่อแบบทดสอบ <span class="text-red-600">*</span></label>
              <input id="qz-title" class="${INPUT_CLS}" value="${_htmlEsc(quiz?.title ?? '')}" placeholder="เช่น สอบย่อยบทที่ 1" autocomplete="off" />
              <p class="text-xs text-slate-500 mt-1">ชื่อนี้จะแสดงให้นักเรียนเห็นก่อนเริ่มสอบ</p>
            </div>
            <div>
              <label for="qz-class" class="block text-sm font-bold text-slate-700 mb-1.5">ห้องเรียนที่จะให้สอบ <span class="text-red-600">*</span></label>
              <select id="qz-class" class="${SELECT_CLS}">
                <option value="">— เลือกห้องเรียน —</option>
                ${classes.map(c => `<option value="${c.id}" ${(quiz ? quiz.class_id === c.id : c.id === preferredClassId) ? 'selected' : ''}>${_htmlEsc(c.master_subjects?.subject_name ?? '')} (${_htmlEsc(c.class_name ?? '—')})</option>`).join('')}
              </select>
              <p class="text-xs text-slate-500 mt-1">ตรวจสอบห้องให้ถูกต้อง เพราะคอลัมน์คะแนนในขั้นต่อไปจะมาจากห้องนี้</p>
            </div>
          </div>
        </section>

        <section data-step-panel="1" class="hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-7">
          <p class="text-xs font-bold text-indigo-600 mb-1">ขั้นตอนที่ 2</p>
          <h3 class="text-xl font-extrabold text-slate-800">กำหนดจำนวนข้อและเวลาสอบ</h3>
          <p class="text-sm text-slate-500 mt-1 mb-6">ระบบจะสุ่มคำถามจากคลังนี้ตามจำนวนที่กำหนด</p>
          <div class="grid sm:grid-cols-2 gap-5">
            <div><label for="qz-num" class="block text-sm font-bold text-slate-700 mb-1.5">จำนวนข้อที่สุ่ม <span class="text-red-600">*</span></label><input id="qz-num" type="number" min="1" max="${Math.max(1, bankQuestionCount)}" class="${INPUT_CLS}" value="${quiz?.num_questions ?? Math.min(10, bankQuestionCount || 10)}" /><p class="text-xs text-slate-500 mt-1">คลังนี้มี ${bankQuestionCount} ข้อ</p></div>
            <div><label for="qz-time" class="block text-sm font-bold text-slate-700 mb-1.5">เวลาสอบ (นาที) <span class="text-red-600">*</span></label><input id="qz-time" type="number" min="1" class="${INPUT_CLS}" value="${quiz?.time_limit_minutes ?? 30}" /></div>
          </div>
          <div class="mt-6 rounded-2xl border border-slate-200 p-4 space-y-4">
            <p class="font-bold text-sm text-slate-700">ลำดับข้อสอบ</p>
            <label class="flex items-start gap-3 text-sm text-slate-700"><input type="checkbox" id="qz-shuffle-q" class="mt-0.5 w-5 h-5" ${quiz ? (quiz.shuffle_questions ? 'checked' : '') : 'checked'} /><span><b>สลับลำดับคำถาม</b><span class="block text-xs text-slate-500 mt-0.5">นักเรียนแต่ละคนอาจเห็นข้อสอบคนละลำดับ</span></span></label>
            <label class="flex items-start gap-3 text-sm text-slate-700"><input type="checkbox" id="qz-shuffle-c" class="mt-0.5 w-5 h-5" ${quiz ? (quiz.shuffle_choices ? 'checked' : '') : 'checked'} /><span><b>สลับลำดับตัวเลือก</b><span class="block text-xs text-slate-500 mt-0.5">ตัวเลือกในแต่ละข้อจะสลับตำแหน่ง</span></span></label>
          </div>
        </section>

        <section data-step-panel="2" class="hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-7">
          <p class="text-xs font-bold text-indigo-600 mb-1">ขั้นตอนที่ 3</p>
          <h3 class="text-xl font-extrabold text-slate-800">ตั้งเงื่อนไขและสิ่งที่นักเรียนเห็น</h3>
          <p class="text-sm text-slate-500 mt-1 mb-6">กำหนดจำนวนครั้ง ช่วงเวลา และการแสดงผลหลังส่งข้อสอบ</p>
          <div class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div><label for="qz-attempts" class="block text-sm font-bold text-slate-700 mb-1.5">จำนวนครั้งที่ทำได้</label><input id="qz-attempts" type="number" min="1" class="${INPUT_CLS}" value="${quiz?.max_attempts ?? 1}" /></div>
              <div><label for="qz-scoring" class="block text-sm font-bold text-slate-700 mb-1.5">ถ้าทำหลายครั้ง ให้นับคะแนนแบบ</label><select id="qz-scoring" class="${SELECT_CLS}">${Object.entries(SCORING_LABEL).map(([v, l]) => `<option value="${v}" ${(quiz?.attempt_scoring_mode ?? 'last') === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
            </div>
            <div class="grid sm:grid-cols-2 gap-5">
              <div><label for="qz-open" class="block text-sm font-bold text-slate-700 mb-1.5">เปิดสอบตั้งแต่ (ไม่บังคับ)</label><input id="qz-open" type="datetime-local" class="${INPUT_CLS}" value="${quiz?.open_at ? quiz.open_at.slice(0, 16) : ''}" /></div>
              <div><label for="qz-close" class="block text-sm font-bold text-slate-700 mb-1.5">ปิดสอบเมื่อ (ไม่บังคับ)</label><input id="qz-close" type="datetime-local" class="${INPUT_CLS}" value="${quiz?.close_at ? quiz.close_at.slice(0, 16) : ''}" /></div>
            </div>
            <div><label for="qz-review" class="block text-sm font-bold text-slate-700 mb-1.5">นักเรียนดูผลได้แค่ไหนหลังส่งข้อสอบ</label><select id="qz-review" class="${SELECT_CLS}">${Object.entries(REVIEW_LABEL).map(([v, l]) => `<option value="${v}" ${(quiz?.review_policy ?? 'total_only') === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
            <div class="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 space-y-3">
              <label class="flex items-start gap-3 text-sm font-semibold text-slate-700"><input type="checkbox" id="qz-lock-answer" class="mt-0.5 w-5 h-5" ${quiz?.lock_on_answer ? 'checked' : ''} /><span>ล็อกคำตอบทันทีที่เลือก<span class="block text-xs font-normal text-slate-500 mt-0.5">นักเรียนย้อนกลับไปแก้ข้อที่ตอบแล้วไม่ได้</span></span></label>
              <label class="flex items-start gap-3 text-sm font-semibold text-slate-700"><input type="checkbox" id="qz-instant-bonus" class="mt-0.5 w-5 h-5" ${quiz?.instant_feedback_bonus ? 'checked' : ''} /><span>เปิดเอฟเฟกต์ถูก/ผิดทันทีและระบบคอมโบ/โบนัส<span class="block text-xs font-normal text-slate-500 mt-0.5">ต้องล็อกคำตอบทันทีด้วย เพื่อไม่ให้เปลี่ยนคำตอบหลังเห็นผล</span></span></label>
            </div>
            <div class="rounded-2xl border border-rose-100 bg-rose-50/70 p-4">
              <label class="flex items-start gap-3 text-sm font-semibold text-slate-700"><input type="checkbox" id="qz-deterrent" class="mt-0.5 w-5 h-5" ${quiz?.deterrent_notice_enabled ? 'checked' : ''} /><span>แสดงป้ายเตือนและข้อความก่อนเริ่มสอบ<span class="block text-xs font-normal text-slate-500 mt-0.5">ระบบจะแสดงข้อความเตือนและกรอบสีระหว่างสอบ ตามการตรวจจับการออกนอกหน้าสอบที่มีอยู่</span></span></label>
            </div>
          </div>
        </section>

        <section data-step-panel="3" class="hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-7">
          <p class="text-xs font-bold text-indigo-600 mb-1">ขั้นตอนที่ 4 · ตรวจให้ครบ</p>
          <h3 class="text-xl font-extrabold text-slate-800">ผูกคะแนนและเลือกวิธีบันทึก</h3>
          <p class="text-sm text-slate-500 mt-1 mb-6">เลือกอย่างใดอย่างหนึ่งให้ชัดเจน: ผูกกับช่องคะแนนของห้อง หรือระบุว่าไม่ผูกคะแนน</p>
          <div class="space-y-5">
            <div><label for="qz-score-col" class="block text-sm font-bold text-slate-700 mb-1.5">ช่องคะแนนปลายทาง <span class="text-red-600">*</span></label><select id="qz-score-col" class="${SELECT_CLS}"><option value="__choose__">— เลือกช่องคะแนน หรือเลือกไม่ผูก —</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option></select><p id="qz-score-col-status" class="text-xs text-slate-500 mt-1.5" aria-live="polite">เลือกห้องเรียนในขั้นตอนที่ 1 ก่อน แล้วตรวจสอบช่องคะแนนของห้องนี้</p></div>
            <div id="qz-score-details" class="hidden rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 sm:p-5 space-y-4">
              <div class="grid sm:grid-cols-2 gap-5">
                <div><label for="qz-score-max" class="block text-sm font-bold text-slate-700 mb-1.5">คะแนนเต็มของแบบทดสอบ <span class="text-red-600">*</span></label><input id="qz-score-max" type="number" min="0.01" step="0.5" class="${INPUT_CLS}" value="${quiz?.score_max ?? 100}" /><p class="text-xs text-slate-500 mt-1">คะแนนจากข้อสอบจะถูกปรับให้อยู่ในคะแนนเต็มนี้ก่อนบันทึก</p></div>
                <div><label for="qz-write-mode" class="block text-sm font-bold text-slate-700 mb-1.5">ถ้าช่องนี้มีคะแนนอยู่แล้ว <span class="text-red-600">*</span></label><select id="qz-write-mode" class="${SELECT_CLS}">${Object.entries(WRITE_MODE_LABEL).map(([v, m]) => `<option value="${v}" ${(quiz?.score_write_mode ?? 'highest') === v ? 'selected' : ''}>${m.label}</option>`).join('')}</select></div>
              </div>
              <div id="qz-write-mode-hint" class="rounded-xl bg-white/80 border border-indigo-100 p-3 text-sm text-slate-700" aria-live="polite"></div>
              <div class="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 leading-relaxed"><b>ตอนปิดสอบ:</b> ครูจะได้รับตัวเลือกว่าจะส่งคะแนนเข้าช่องนี้ทันที หรือปิดสอบโดยไม่เปลี่ยนสมุดคะแนนก่อน หากยังไม่ส่ง สามารถใช้ปุ่ม “ส่งคะแนนย้อนหลัง” ภายหลังได้</div>
            </div>
            <div id="qz-unbound-note" class="hidden rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><b>เลือกไม่ผูกคะแนนแล้ว</b><span class="block text-xs text-slate-500 mt-1">คะแนนจะอยู่ในผลการทำแบบทดสอบ ครูสามารถตรวจดูผลและส่งคะแนนย้อนหลังได้เมื่อแก้ไขแบบทดสอบให้ผูกกับช่องคะแนน</span></div>
          </div>
        </section>

        <section data-step-panel="4" class="hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-7">
          <p class="text-xs font-bold text-indigo-600 mb-1">ขั้นตอนที่ 5</p>
          <h3 class="text-xl font-extrabold text-slate-800">ตรวจทานการตั้งค่าก่อนบันทึก</h3>
          <p class="text-sm text-slate-500 mt-1 mb-6">ตรวจสอบทุกหัวข้อ โดยเฉพาะห้องเรียน ช่องคะแนน และวิธีเขียนคะแนนเก่า</p>
          <div id="qz-review-summary" class="space-y-3"></div>
          <label class="flex items-start gap-3 mt-6 p-4 rounded-2xl border border-indigo-200 bg-indigo-50 text-sm text-slate-700"><input type="checkbox" id="qz-review-confirm" class="mt-0.5 w-5 h-5" /><span><b>ตรวจทานแล้ว</b><span class="block text-xs text-slate-600 mt-1">ยืนยันว่าห้องเรียน การตั้งค่าการสอบ และแนวทางบันทึกคะแนนถูกต้อง</span></span></label>
        </section>
      </div>
    </main>

    <footer class="flex-shrink-0 bg-white border-t border-slate-200 safe-area-inset-bottom">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <button type="button" id="qz-prev" class="min-h-11 px-5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50">ย้อนกลับ</button>
        <p id="qz-footer-hint" class="hidden sm:block flex-1 text-xs text-slate-500">ไปทีละขั้น ระบบจะตรวจข้อมูลก่อนให้ดำเนินการต่อ</p>
        <button type="button" id="qz-next" class="min-h-11 ml-auto px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm">ถัดไป →</button>
        <button type="button" id="qz-save" class="hidden min-h-11 ml-auto px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm">บันทึกแบบทดสอบ</button>
      </div>
    </footer>
  `
  document.body.appendChild(modal)

  const $ = selector => modal.querySelector(selector)
  const classSelect = $('#qz-class')
  const scoreColSelect = $('#qz-score-col')
  const scoreColStatus = $('#qz-score-col-status')
  const scoreDetails = $('#qz-score-details')
  const unboundNote = $('#qz-unbound-note')
  const errorSummary = $('#qz-error-summary')
  const panelNodes = [...modal.querySelectorAll('[data-step-panel]')]
  const setFieldError = (id, message) => ({ id, message })
  const selectedClassName = () => {
    const selected = classes.find(c => String(c.id) === String(classSelect.value))
    return selected ? `${selected.master_subjects?.subject_name ?? ''} (${selected.class_name ?? '—'})` : 'ยังไม่ได้เลือกห้อง'
  }
  const loadScoreColumns = async (force = false) => {
    const classId = classSelect.value
    if (!classId) {
      scoreColumnsLoadState = 'idle'
      scoreColumnsLoadClassId = ''
      scoreColumnsError = false
      scoreColSelect.innerHTML = '<option value="__choose__">— เลือกช่องคะแนน หรือเลือกไม่ผูก —</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>'
      scoreColStatus.textContent = 'เลือกห้องเรียนในขั้นตอนที่ 1 ก่อน แล้วตรวจสอบช่องคะแนนของห้องนี้'
      return []
    }
    if (!force && scoreColumnsLoadClassId === classId && scoreColumnsLoadState === 'loaded') return columnsLoadPromise
    scoreColumnsLoadClassId = classId
    scoreColumnsLoadState = 'loading'
    scoreColumnsError = false
    scoreColSelect.disabled = true
    scoreColStatus.textContent = 'กำลังโหลดช่องคะแนนของห้องที่เลือก…'
    columnsLoadPromise = getScoreColumns(classId).then(cols => {
      // A teacher can navigate back and switch rooms while this request is in
      // flight. Ignore a stale response so columns from the previous room can
      // never be mistaken for the selected room's gradebook.
      if (classSelect.value !== classId || !document.body.contains(modal)) return []
      scoreColumnsLoadState = 'loaded'
      scoreColSelect.disabled = false
      const validExistingColumn = quiz?.class_id === classId && cols.some(c => String(c.id) === String(quiz.score_column_id))
      const selectedValue = validExistingColumn ? String(quiz.score_column_id) : (quiz && !quiz.score_column_id ? '' : '__choose__')
      scoreColSelect.innerHTML = '<option value="__choose__">— เลือกช่องคะแนน หรือเลือกไม่ผูก —</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>' +
        cols.map(c => `<option value="${_htmlEsc(c.id)}">${_htmlEsc(c.assignment_name)}</option>`).join('')
      scoreColSelect.value = selectedValue
      scoreColStatus.textContent = cols.length ? `พบ ${cols.length} ช่องคะแนนในห้อง ${selectedClassName()} · เลือกช่องที่ต้องการ หรือเลือกไม่ผูกคะแนน` : `ห้อง ${selectedClassName()} ยังไม่มีช่องคะแนนที่เลือกได้ · หากต้องการบันทึกคะแนน ให้เพิ่มช่องที่หน้าบันทึกคะแนนก่อน หรือเลือกไม่ผูกคะแนน`
      syncScoreBindingUI()
      return cols
    }).catch(() => {
      if (classSelect.value !== classId || !document.body.contains(modal)) return []
      scoreColumnsLoadState = 'error'
      scoreColumnsError = true
      scoreColSelect.disabled = false
      scoreColSelect.innerHTML = '<option value="__choose__">— เลือกช่องคะแนน หรือเลือกไม่ผูก —</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>'
      scoreColSelect.value = '__choose__'
      scoreColStatus.textContent = 'โหลดช่องคะแนนไม่สำเร็จ กรุณาลองใหม่ก่อนเลือกช่องคะแนน หรือเลือกไม่ผูกคะแนนโดยตั้งใจ'
      syncScoreBindingUI()
      return []
    })
    return columnsLoadPromise
  }
  const syncScoreBindingUI = () => {
    const bound = Boolean(scoreColSelect.value && scoreColSelect.value !== '__choose__')
    scoreDetails.classList.toggle('hidden', !bound)
    unboundNote.classList.toggle('hidden', scoreColSelect.value !== '')
    $('#qz-score-max').required = bound
    $('#qz-write-mode').required = bound
  }
  const syncWriteModeHint = () => {
    const mode = WRITE_MODE_LABEL[$('#qz-write-mode').value]
    const keySafety = $('#qz-write-mode').value === 'add' ? 'การส่งคะแนนย้อนหลังซ้ำจะเพิ่มเฉพาะส่วนต่าง ไม่บวกคะแนนเดิมซ้ำ' : ''
    $('#qz-write-mode-hint').innerHTML = `<b>${_htmlEsc(mode?.label ?? '')}</b><div class="text-xs text-slate-600 mt-1">${_htmlEsc(mode?.hint ?? '')}${keySafety ? `<br>${_htmlEsc(keySafety)}` : ''}</div>`
  }
  const updateReviewSummary = () => {
    const bound = Boolean(scoreColSelect.value && scoreColSelect.value !== '__choose__')
    const selectedColumn = scoreColSelect.selectedOptions?.[0]?.textContent?.trim() ?? ''
    const mode = WRITE_MODE_LABEL[$('#qz-write-mode').value]
    const modeDescription = $('#qz-write-mode').value === 'add' ? 'ส่งคะแนนย้อนหลังซ้ำจะเพิ่มเฉพาะส่วนต่าง ไม่บวกซ้ำ' : mode?.hint ?? ''
    const openAt = $('#qz-open').value
    const closeAt = $('#qz-close').value
    const dateText = openAt || closeAt ? `${openAt || 'ไม่กำหนดเวลาเปิด'} ถึง ${closeAt || 'ไม่กำหนดเวลาปิด'}` : 'ไม่มีช่วงเวลาบังคับ'
    const rows = [
      ['ห้องเรียนและชื่อ', `${selectedClassName()} · ${$('#qz-title').value.trim() || 'ยังไม่ได้ตั้งชื่อ'}`],
      ['จำนวนข้อและเวลา', `${$('#qz-num').value || '—'} ข้อ · ${$('#qz-time').value || '—'} นาที · ${$('#qz-shuffle-q').checked ? 'สลับข้อ' : 'ไม่สลับข้อ'} · ${$('#qz-shuffle-c').checked ? 'สลับตัวเลือก' : 'ไม่สลับตัวเลือก'}`],
      ['การทำและการแสดงผล', `${$('#qz-attempts').value || '—'} ครั้ง · นับ${SCORING_LABEL[$('#qz-scoring').value] ?? '—'} · ${REVIEW_LABEL[$('#qz-review').value] ?? '—'}`],
      ['ช่วงเวลา', dateText],
      ['การล็อก/เอฟเฟกต์/คำเตือน', `${$('#qz-lock-answer').checked || $('#qz-instant-bonus').checked ? 'ล็อกคำตอบ' : 'ย้อนแก้ได้'} · ${$('#qz-instant-bonus').checked ? 'เปิดคอมโบ/โบนัส' : 'ปิดคอมโบ/โบนัส'} · ${$('#qz-deterrent').checked ? 'เปิดป้ายเตือน' : 'ไม่แสดงป้ายเตือน'}`],
      ['ช่องคะแนน', bound ? `${selectedColumn} · คะแนนเต็ม ${$('#qz-score-max').value || '—'}` : scoreColSelect.value === '' ? 'ตั้งใจไม่ผูกคะแนนกับสมุดคะแนน' : 'ยังไม่ได้เลือก — กลับไปเลือกช่องคะแนนหรือไม่ผูกคะแนน'],
      ['วิธีบันทึก', bound ? `${mode?.label ?? '—'} · ${modeDescription} · ตอนปิดสอบครูเลือกได้ว่าจะส่งคะแนนทันทีหรือปิดโดยไม่เปลี่ยนสมุดคะแนน` : 'ไม่มีการส่งคะแนนเข้าคอลัมน์คะแนนของห้อง'],
    ]
    $('#qz-review-summary').innerHTML = rows.map(([label, value]) => `<div class="rounded-xl border border-slate-200 p-3 sm:p-4"><p class="text-[11px] uppercase tracking-wide text-slate-500 font-bold">${_htmlEsc(label)}</p><p class="text-sm text-slate-800 font-semibold mt-1 break-words">${_htmlEsc(value)}</p></div>`).join('')
  }
  const validateStep = step => {
    const errors = []
    if (step === 0) {
      if (!$('#qz-title').value.trim()) errors.push(setFieldError('qz-title', 'กรุณาระบุชื่อแบบทดสอบ'))
      if (!classSelect.value) errors.push(setFieldError('qz-class', 'กรุณาเลือกห้องเรียนที่จะให้สอบ'))
    }
    if (step === 1) {
      const count = Number($('#qz-num').value)
      const minutes = Number($('#qz-time').value)
      if (!Number.isInteger(count) || count < 1) errors.push(setFieldError('qz-num', 'จำนวนข้อสอบต้องเป็นจำนวนเต็มตั้งแต่ 1 ข้อขึ้นไป'))
      else if (count > bankQuestionCount) errors.push(setFieldError('qz-num', `คลังมี ${bankQuestionCount} ข้อ จึงสุ่มเกินจำนวนนี้ไม่ได้`))
      if (!Number.isInteger(minutes) || minutes < 1) errors.push(setFieldError('qz-time', 'เวลาสอบต้องเป็นจำนวนเต็มตั้งแต่ 1 นาทีขึ้นไป'))
    }
    if (step === 2) {
      const attempts = Number($('#qz-attempts').value)
      if (!Number.isInteger(attempts) || attempts < 1) errors.push(setFieldError('qz-attempts', 'จำนวนครั้งที่ทำได้ต้องเป็นจำนวนเต็มตั้งแต่ 1 ขึ้นไป'))
      const openAt = $('#qz-open').value ? new Date($('#qz-open').value) : null
      const closeAt = $('#qz-close').value ? new Date($('#qz-close').value) : null
      if (openAt && Number.isNaN(openAt.getTime())) errors.push(setFieldError('qz-open', 'วันเวลาเปิดสอบไม่ถูกต้อง'))
      if (closeAt && Number.isNaN(closeAt.getTime())) errors.push(setFieldError('qz-close', 'วันเวลาปิดสอบไม่ถูกต้อง'))
      if (openAt && closeAt && openAt >= closeAt) errors.push(setFieldError('qz-close', 'เวลาปิดสอบต้องอยู่หลังเวลาเปิดสอบ'))
    }
    if (step === 3) {
      if (scoreColSelect.value === '__choose__') errors.push(setFieldError('qz-score-col', 'กรุณาเลือกช่องคะแนน หรือเลือกไม่ผูกคะแนนอย่างชัดเจน'))
      if (scoreColumnsLoadState === 'loading') errors.push(setFieldError('qz-score-col', 'รอโหลดช่องคะแนนให้เสร็จก่อน'))
      if (scoreColumnsError && scoreColSelect.value !== '') errors.push(setFieldError('qz-score-col', 'โหลดรายการช่องคะแนนไม่สำเร็จ กรุณาลองโหลดใหม่หรือเลือกไม่ผูกคะแนน'))
      if (scoreColSelect.value && scoreColSelect.value !== '__choose__') {
        const scoreMax = Number($('#qz-score-max').value)
        if (!Number.isFinite(scoreMax) || scoreMax <= 0) errors.push(setFieldError('qz-score-max', 'คะแนนเต็มต้องมากกว่า 0'))
        if (!Object.hasOwn(WRITE_MODE_LABEL, $('#qz-write-mode').value)) errors.push(setFieldError('qz-write-mode', 'กรุณาเลือกวิธีจัดการคะแนนเดิม'))
      }
    }
    return errors
  }
  const showErrors = errors => {
    errorSummary.innerHTML = `<b>ยังไปต่อไม่ได้ กรุณาตรวจรายการนี้</b><ul class="list-disc pl-5 mt-1">${errors.map(err => `<li><a class="underline" href="#${err.id}" data-error-field="${err.id}">${_htmlEsc(err.message)}</a></li>`).join('')}</ul>`
    errorSummary.classList.remove('hidden')
    errorSummary.focus()
    errorSummary.querySelectorAll('[data-error-field]').forEach(link => link.addEventListener('click', e => {
      e.preventDefault()
      const field = $(`#${link.dataset.errorField}`)
      field?.focus()
      field?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }))
  }
  const renderStep = async (step, { validate = false } = {}) => {
    if (validate) {
      const errors = validateStep(currentStep)
      if (errors.length) { showErrors(errors); return false }
    }
    currentStep = step
    errorSummary.classList.add('hidden')
    panelNodes.forEach((panel, index) => panel.classList.toggle('hidden', index !== currentStep))
    modal.querySelectorAll('[data-step-dot]').forEach((dot, index) => {
      dot.className = `qz-step-dot w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${index < currentStep ? 'bg-emerald-600 text-white border-emerald-600' : index === currentStep ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-400 border-slate-300'}`
      dot.textContent = index < currentStep ? '✓' : String(index + 1)
    })
    modal.querySelectorAll('[data-step-label]').forEach((label, index) => label.className = `hidden md:block text-xs font-semibold truncate ${index === currentStep ? 'text-indigo-700' : index < currentStep ? 'text-emerald-700' : 'text-slate-400'}`)
    $('#qz-progress').style.width = `${((currentStep + 1) / steps.length) * 100}%`
    $('#qz-step-count').textContent = `ขั้นตอนที่ ${currentStep + 1} จาก ${steps.length} · ${steps[currentStep].title}`
    $('#qz-prev').disabled = currentStep === 0
    $('#qz-prev').classList.toggle('opacity-40', currentStep === 0)
    $('#qz-next').classList.toggle('hidden', currentStep === steps.length - 1)
    $('#qz-save').classList.toggle('hidden', currentStep !== steps.length - 1)
    if (currentStep === 3) await loadScoreColumns()
    if (currentStep === 4) updateReviewSummary()
    $('#qz-wizard-scroll').scrollTo({ top: 0, behavior: 'smooth' })
    const heading = panelNodes[currentStep].querySelector('h3')
    heading?.setAttribute('tabindex', '-1')
    heading?.focus({ preventScroll: true })
    return true
  }

  const closeModal = () => {
    modal.remove()
    document.removeEventListener('keydown', onKeyDown)
    activeElement?.focus?.({ preventScroll: true })
  }
  const onKeyDown = e => { if (e.key === 'Escape' && document.body.contains(modal)) closeModal() }
  document.addEventListener('keydown', onKeyDown)
  $('#qz-cancel').addEventListener('click', closeModal)
  $('#qz-prev').addEventListener('click', () => { if (currentStep > 0) renderStep(currentStep - 1) })
  $('#qz-next').addEventListener('click', () => renderStep(currentStep + 1, { validate: true }))
  classSelect.addEventListener('change', () => {
    scoreColumnsLoadState = 'idle'
    scoreColumnsLoadClassId = ''
    scoreColumnsError = false
    scoreColSelect.value = '__choose__'
    scoreColSelect.innerHTML = '<option value="__choose__">— เลือกช่องคะแนน หรือเลือกไม่ผูก —</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>'
    scoreColStatus.textContent = 'เปลี่ยนห้องแล้ว โปรดตรวจสอบและเลือกช่องคะแนนของห้องใหม่นี้ในขั้นตอนผูกคะแนน'
    syncScoreBindingUI()
  })
  scoreColSelect.addEventListener('change', () => { syncScoreBindingUI(); updateReviewSummary() })
  $('#qz-write-mode').addEventListener('change', () => { syncWriteModeHint(); updateReviewSummary() })
  $('#qz-instant-bonus').addEventListener('change', () => {
    const lockAnswerBox = $('#qz-lock-answer')
    if ($('#qz-instant-bonus').checked) { lockAnswerBox.checked = true; lockAnswerBox.disabled = true }
    else lockAnswerBox.disabled = false
  })
  syncScoreBindingUI()
  syncWriteModeHint()

  $('#qz-review-confirm').addEventListener('change', e => { $('#qz-save').disabled = !e.target.checked })
  $('#qz-save').disabled = true
  $('#qz-save').addEventListener('click', async e => {
    const saveButton = e.currentTarget
    if (!$('#qz-review-confirm').checked) return
    const errors = [0, 1, 2, 3].flatMap(step => validateStep(step))
    if (errors.length) {
      const firstError = errors[0]
      const errorStep = firstError.id === 'qz-title' || firstError.id === 'qz-class' ? 0 : ['qz-num', 'qz-time'].includes(firstError.id) ? 1 : ['qz-attempts', 'qz-open', 'qz-close'].includes(firstError.id) ? 2 : 3
      await renderStep(errorStep)
      showErrors(errors.filter(err => (errorStep === 0 && ['qz-title', 'qz-class'].includes(err.id)) || (errorStep === 1 && ['qz-num', 'qz-time'].includes(err.id)) || (errorStep === 2 && ['qz-attempts', 'qz-open', 'qz-close'].includes(err.id)) || errorStep === 3))
      return
    }

    const title = $('#qz-title').value.trim()
    const openAt = $('#qz-open').value
    const closeAt = $('#qz-close').value
    const payload = {
      bank_id: bank.id,
      class_id: classSelect.value,
      title,
      num_questions: parseInt($('#qz-num').value, 10),
      choice_label_style: quiz?.choice_label_style ?? promptDefaults.choice_label_style ?? 'numeric',
      choice_labels_custom: quiz?.choice_labels_custom ?? promptDefaults.choice_labels_custom ?? null,
      quiz_language: quiz?.quiz_language ?? promptDefaults.quiz_language ?? 'th',
      quiz_language_custom: quiz?.quiz_language_custom ?? promptDefaults.quiz_language_custom ?? null,
      shuffle_questions: $('#qz-shuffle-q').checked,
      shuffle_choices: $('#qz-shuffle-c').checked,
      lock_on_answer: $('#qz-instant-bonus').checked || $('#qz-lock-answer').checked,
      instant_feedback_bonus: $('#qz-instant-bonus').checked,
      deterrent_notice_enabled: $('#qz-deterrent').checked,
      max_attempts: parseInt($('#qz-attempts').value, 10),
      attempt_scoring_mode: $('#qz-scoring').value,
      time_limit_minutes: parseInt($('#qz-time').value, 10),
      open_at: openAt ? new Date(openAt).toISOString() : null,
      close_at: closeAt ? new Date(closeAt).toISOString() : null,
      review_policy: $('#qz-review').value,
      score_column_id: scoreColSelect.value || null,
      score_max: scoreColSelect.value ? Number($('#qz-score-max').value) : null,
      score_write_mode: scoreColSelect.value ? $('#qz-write-mode').value : 'highest',
    }
    setButtonLoading(saveButton, true, 'กำลังบันทึก…')
    try {
      if (quiz) await updateQuiz(quiz.id, payload)
      else await createQuiz({ ...payload, status: 'announced' })
      showToast('บันทึกแล้ว', 'success')
      closeModal()
      renderBankQuizzes(teacher, bank)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + getFriendlyErrorMessage(err), 'error')
      setButtonLoading(saveButton, false, 'บันทึกแบบทดสอบ')
    }
  })

  await renderStep(0)
  $('#qz-title').focus({ preventScroll: true })
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
