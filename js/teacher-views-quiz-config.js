// js/teacher-views-quiz-config.js
import '../css/quiz-config-wizard.css'
import { getMyClasses, getClassStudents, getScoreColumns, getSystemConfig } from './api.js'
import { getQuizzesForBank, getQuizQuestions, createQuiz, updateQuiz, startQuizLive, closeQuiz, openQuizMakeup, getQuizAttemptStudentIds, applyQuizScores, deleteQuiz, getTeacherStartedQuizCount } from './quiz-api.js'
import { showToast, showDangerConfirm, showQuizCloseChoice, getFriendlyErrorMessage } from './ui.js'
import { setContent, setTitle, _htmlEsc } from './teacher-views-utils.js'
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
                ${q.status === 'closed' ? `<button class="btn-makeup-quiz px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold" data-id="${q.id}">🕒 เปิดสอบชดเชย</button>` : ''}
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

  document.querySelectorAll('.btn-makeup-quiz').forEach(btn =>
    btn.addEventListener('click', () => {
      const quiz = quizzes.find(q => q.id === btn.dataset.id)
      if (quiz) _openQuizMakeupModal(teacher, bank, quiz, classNameById[quiz.class_id] ?? 'ห้องเรียน', classes, questions.length)
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

async function _openQuizMakeupModal(teacher, bank, quiz, className, classes, bankQuestionCount) {
  document.getElementById('quiz-makeup-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'quiz-makeup-modal'
  modal.className = 'fixed inset-0 z-[120] bg-black/50 flex items-center justify-center p-3 sm:p-5'
  modal.setAttribute('role', 'dialog')
  modal.setAttribute('aria-modal', 'true')
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden">
      <header class="px-5 py-4 border-b border-gray-100 flex items-start justify-between gap-3">
        <div><h2 class="font-bold text-gray-800">🕒 เปิดสอบชดเชย</h2>
          <p class="quiz-makeup-subtitle text-xs text-gray-500 mt-1">${_htmlEsc(quiz.title)} · ${_htmlEsc(className)}</p></div>
        <button type="button" data-close class="text-gray-400 hover:text-gray-700 text-xl leading-none" aria-label="ปิด">×</button>
      </header>
      <div class="p-5 space-y-3 overflow-y-auto">
        <div class="rounded-xl bg-teal-50 border border-teal-100 p-3 text-xs text-teal-800 leading-relaxed">
          เลือกได้เฉพาะนักเรียนในห้องที่ยังไม่เคยเริ่มทำแบบทดสอบนี้ นักเรียนที่สอบแล้วจะไม่ถูกเปิดสิทธิ์ซ้ำ
        </div>
        <div class="rounded-xl border border-gray-200 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="text-xs text-gray-600 leading-relaxed"><b class="block text-gray-700">การตั้งค่าข้อสอบ (เลือกทำหรือข้ามได้)</b>
            <span id="quiz-makeup-edit-status">ข้ามการแก้ไขและใช้ค่าปัจจุบัน</span>
            <span class="block text-[11px] text-gray-400 mt-1">การแก้ไขใช้หน้าตั้งค่าเดิมและอาจมีผลต่อการสรุป/ส่งคะแนนของแบบทดสอบนี้ด้วย</span></div>
          <button type="button" id="quiz-makeup-edit-settings" class="px-3 py-2 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 text-xs font-bold whitespace-nowrap">⚙️ แก้ไขการตั้งค่า</button>
        </div>
        <div class="flex flex-col sm:flex-row gap-2">
          <input id="quiz-makeup-search" type="search" placeholder="ค้นหาชื่อหรือเลขประจำตัว" class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm" />
          <label class="text-xs flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 cursor-pointer">
            <input id="quiz-makeup-select-all" type="checkbox" class="accent-teal-600" /> เลือกผู้มีสิทธิ์ทั้งหมด
          </label>
        </div>
        <div id="quiz-makeup-list" class="max-h-72 overflow-y-auto border border-gray-100 rounded-xl divide-y divide-gray-100">
          <div class="p-6 text-center text-sm text-gray-400">กำลังโหลดรายชื่อนักเรียน...</div>
        </div>
        <label class="block text-xs font-semibold text-gray-600">เปิดสอบถึงวันและเวลา
          <input id="quiz-makeup-closes-at" type="datetime-local" class="mt-1 block w-full border border-gray-200 rounded-xl px-3 py-2 text-sm" />
        </label>
        <p class="text-[11px] text-gray-400">ค่าเริ่มต้นเปิดสอบ 3 วัน และการสอบชดเชยจะใช้จำนวนครั้งและกติกาคะแนนของแบบทดสอบเดิม</p>
      </div>
      <footer class="px-5 py-4 border-t border-gray-100 flex items-center justify-between gap-3">
        <span id="quiz-makeup-selected-count" class="text-xs text-gray-500">เลือก 0 คน</span>
        <div class="flex gap-2"><button type="button" data-close class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">ยกเลิก</button>
          <button id="quiz-makeup-submit" type="button" class="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 text-white font-bold text-sm" disabled>เปิดสอบชดเชย</button></div>
      </footer>
    </div>`
  document.body.appendChild(modal)
  modal.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => modal.remove()))
  modal.addEventListener('click', event => { if (event.target === modal) modal.remove() })

  const closesAt = modal.querySelector('#quiz-makeup-closes-at')
  const localInputDate = date => new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
  closesAt.min = localInputDate(new Date(Date.now() + 60000))
  closesAt.value = localInputDate(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000))

  let eligibleStudents = []
  const selectedStudentIds = new Set()
  const list = modal.querySelector('#quiz-makeup-list')
  const selectAll = modal.querySelector('#quiz-makeup-select-all')
  const submit = modal.querySelector('#quiz-makeup-submit')
  const updateSelection = () => {
    const selectedCount = selectedStudentIds.size
    modal.querySelector('#quiz-makeup-selected-count').textContent = `เลือก ${selectedCount} คน`
    submit.disabled = selectedCount === 0
    selectAll.checked = eligibleStudents.length > 0 && selectedCount === eligibleStudents.length
    selectAll.indeterminate = selectedCount > 0 && selectedCount < eligibleStudents.length
  }
  const renderStudents = () => {
    const search = modal.querySelector('#quiz-makeup-search').value.trim().toLocaleLowerCase()
    const rows = eligibleStudents.map(student => {
      const name = student.full_name ?? 'ไม่ระบุชื่อ'
      const code = student.student_code ?? ''
      const haystack = `${name} ${code}`.toLocaleLowerCase()
      if (search && !haystack.includes(search)) return ''
      const imageUrl = student.image_url ?? student.photo_url
      const avatar = imageUrl
        ? `<img src="${_htmlEsc(imageUrl)}" alt="" loading="lazy" class="h-11 w-11 rounded-full object-cover border border-gray-200" onerror="this.hidden=true;this.nextElementSibling.hidden=false" /><span hidden class="h-11 w-11 rounded-full bg-gray-100 text-gray-400 border border-gray-200 flex items-center justify-center text-lg" aria-hidden="true">👤</span>`
        : `<span class="h-11 w-11 rounded-full bg-gray-100 text-gray-400 border border-gray-200 flex items-center justify-center text-lg" aria-hidden="true">👤</span>`
      return `<label class="flex items-center gap-3 px-3 py-2.5 hover:bg-teal-50 cursor-pointer">
        <input type="checkbox" class="quiz-makeup-student accent-teal-600" value="${Number(student.id)}" ${selectedStudentIds.has(Number(student.id)) ? 'checked' : ''} />
        <span class="flex-shrink-0">${avatar}</span>
        <span class="min-w-0"><span class="block text-sm font-semibold text-gray-700 truncate">${_htmlEsc(name)}</span>
          <span class="text-[11px] text-gray-400">${_htmlEsc(code)} · ยังไม่เคยเริ่มสอบ</span></span></label>`
    }).filter(Boolean)
    list.innerHTML = rows.length
      ? rows.join('')
      : `<div class="p-6 text-center text-sm text-gray-400">${eligibleStudents.length ? 'ไม่พบรายชื่อที่ค้นหา' : 'ไม่มีนักเรียนที่ยังไม่เคยเริ่มทำแบบทดสอบนี้'}</div>`
    modal.querySelectorAll('.quiz-makeup-student').forEach(input => input.addEventListener('change', () => {
      const id = Number(input.value)
      if (input.checked) selectedStudentIds.add(id)
      else selectedStudentIds.delete(id)
      updateSelection()
    }))
    updateSelection()
  }

  try {
    const [students, attemptedIds] = await Promise.all([
      getClassStudents(quiz.class_id),
      getQuizAttemptStudentIds(quiz.id),
    ])
    eligibleStudents = students.filter(student => !attemptedIds.has(Number(student.id)))
    renderStudents()
  } catch (error) {
    list.innerHTML = `<div class="p-5 text-center text-sm text-red-600">โหลดรายชื่อไม่สำเร็จ: ${_htmlEsc(getFriendlyErrorMessage(error))}</div>`
  }

  modal.querySelector('#quiz-makeup-edit-settings').addEventListener('click', () => {
    modal.style.zIndex = '80'
    _renderQuizForm(teacher, bank, classes, bankQuestionCount, quiz, Number(quiz.class_id), async payload => {
      Object.assign(quiz, payload)
      const editedClass = classes.find(item => Number(item.id) === Number(quiz.class_id))
      const editedClassName = editedClass
        ? `${editedClass.master_subjects?.subject_name ?? ''} (${editedClass.class_name ?? '—'})`
        : 'ห้องเรียน'
      modal.querySelector('.quiz-makeup-subtitle').textContent = `${quiz.title} · ${editedClassName}`
      modal.querySelector('#quiz-makeup-edit-status').textContent = 'บันทึกการตั้งค่าแล้ว'
      try {
        const [students, attemptedIds] = await Promise.all([
          getClassStudents(Number(quiz.class_id)),
          getQuizAttemptStudentIds(quiz.id),
        ])
        eligibleStudents = students.filter(student => !attemptedIds.has(Number(student.id)))
        const eligibleIds = new Set(eligibleStudents.map(student => Number(student.id)))
        for (const selectedId of selectedStudentIds) if (!eligibleIds.has(selectedId)) selectedStudentIds.delete(selectedId)
        renderStudents()
      } catch (error) {
        list.innerHTML = `<div class="p-5 text-center text-sm text-red-600">บันทึกการตั้งค่าแล้ว แต่โหลดรายชื่อนักเรียนใหม่ไม่สำเร็จ: ${_htmlEsc(getFriendlyErrorMessage(error))}</div>`
      }
    }, () => { modal.style.zIndex = '120' })
  })

  modal.querySelector('#quiz-makeup-search').addEventListener('input', renderStudents)
  selectAll.addEventListener('change', () => {
    if (selectAll.checked) eligibleStudents.forEach(student => selectedStudentIds.add(Number(student.id)))
    else selectedStudentIds.clear()
    renderStudents()
  })
  submit.addEventListener('click', async () => {
    const studentIds = [...selectedStudentIds]
    const closeDate = new Date(closesAt.value)
    if (!studentIds.length) { showToast('กรุณาเลือกนักเรียนอย่างน้อย 1 คน', 'error'); return }
    if (!closesAt.value || Number.isNaN(closeDate.getTime()) || closeDate <= new Date()) {
      showToast('กรุณากำหนดเวลาปิดสอบชดเชยในอนาคต', 'error'); return
    }
    submit.disabled = true
    submit.textContent = 'กำลังเปิดสอบชดเชย...'
    try {
      const openedCount = await openQuizMakeup(quiz.id, studentIds, closeDate.toISOString())
      modal.remove()
      showToast(`เปิดสอบชดเชยให้นักเรียน ${openedCount} คนแล้ว`, 'success')
      renderBankQuizzes(teacher, bank)
    } catch (error) {
      showToast('เปิดสอบชดเชยไม่สำเร็จ: ' + getFriendlyErrorMessage(error), 'error')
      submit.disabled = false
      submit.textContent = 'เปิดสอบชดเชย'
    }
  })
}

async function _renderQuizForm(teacher, bank, classes, bankQuestionCount, quiz, preferredClassId = null, onSaved = null, onClosed = null) {
  let promptDefaults = {}
  try { promptDefaults = JSON.parse(localStorage.getItem(`quiz-prompt-settings:${bank.id}`) ?? '{}') } catch { /* ignore invalid local preference */ }

  const activeElement = document.activeElement
  const modal = document.createElement('div')
  modal.id = 'quiz-config-wizard'
  modal.className = 'qzw-shell'
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
    <header class="qzw-topbar">
      <div class="qzw-title-wrap">
        <h2 id="qz-wizard-title" class="qzw-title">${quiz ? 'แก้ไขแบบทดสอบ' : 'สร้างแบบทดสอบ'}</h2>
        <p class="qzw-bank-name">คลังข้อสอบ: ${_htmlEsc(bank.name)}</p>
      </div>
      <div class="qzw-topbar-end">
        <span class="qzw-bank-count">มีคำถามในคลัง ${bankQuestionCount} ข้อ</span>
        <button type="button" id="qz-cancel" class="qzw-button qzw-button--text" aria-label="ปิดหน้าตั้งค่า">ปิด</button>
      </div>
    </header>

    <main id="qz-wizard-scroll" class="qzw-main-area">
      <div class="qzw-workspace">
        <aside class="qzw-rail" aria-label="ขั้นตอนการตั้งค่า">
          <h3 class="qzw-rail-title">การตั้งค่าแบบทดสอบ</h3>
          <ol class="qzw-step-list">
            ${steps.map((step, index) => `<li class="qzw-step-item" data-step-item="${index}"><span class="qzw-step-number" data-step-dot="${index}">${index + 1}</span><span class="qzw-step-label" data-step-label="${index}">${step.short}</span></li>`).join('')}
          </ol>
          <p class="qzw-rail-note"><strong>คลังข้อสอบ</strong>${bankQuestionCount} คำถาม</p>
        </aside>

        <div class="qzw-content">
          <p id="qz-step-count" class="qzw-step-count">ขั้นตอนที่ 1 จาก ${steps.length}: ${steps[0].title}</p>
          <div class="qzw-progress-track" role="progressbar" aria-label="ความคืบหน้าการตั้งค่า" aria-valuemin="1" aria-valuemax="${steps.length}" aria-valuenow="1"><div id="qz-progress" class="qzw-progress-fill"></div></div>
          <div id="qz-error-summary" class="qzw-error-summary hidden" role="alert" tabindex="-1"></div>

          <section data-step-panel="0" class="qzw-panel">
            <h3>กำหนดห้องเรียนและชื่อแบบทดสอบ</h3>
            <p class="qzw-panel-intro">แบบทดสอบหนึ่งรายการจะผูกกับห้องเรียนที่เลือก ครูสร้างรายการแยกสำหรับห้องอื่นได้</p>
            <div class="qzw-fields">
              <div class="qzw-field-group">
                <label for="qz-title" class="qzw-label">ชื่อแบบทดสอบ <span class="qzw-required">จำเป็น</span></label>
                <input id="qz-title" class="qzw-field" value="${_htmlEsc(quiz?.title ?? '')}" placeholder="เช่น สอบย่อยบทที่ 1" autocomplete="off" aria-required="true" />
                <p class="qzw-help">ชื่อนี้จะแสดงให้นักเรียนเห็นก่อนเริ่มสอบ</p>
              </div>
              <div class="qzw-field-group">
                <label for="qz-class" class="qzw-label">ห้องเรียนที่จะให้สอบ <span class="qzw-required">จำเป็น</span></label>
                <select id="qz-class" class="qzw-field qzw-select" aria-required="true">
                  <option value="">เลือกห้องเรียน</option>
                  ${classes.map(c => `<option value="${c.id}" ${(quiz ? quiz.class_id === c.id : c.id === preferredClassId) ? 'selected' : ''}>${_htmlEsc(c.master_subjects?.subject_name ?? '')} (${_htmlEsc(c.class_name ?? '—')})</option>`).join('')}
                </select>
                <p class="qzw-help">ช่องคะแนนในขั้นต่อไปจะมาจากห้องเรียนนี้</p>
              </div>
            </div>
          </section>

          <section data-step-panel="1" class="qzw-panel hidden">
            <h3>กำหนดจำนวนข้อและเวลาสอบ</h3>
            <p class="qzw-panel-intro">ระบบจะสุ่มคำถามจากคลังนี้ตามจำนวนที่กำหนด</p>
            <div class="qzw-fields">
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-num" class="qzw-label">จำนวนข้อที่สุ่ม <span class="qzw-required">จำเป็น</span></label><input id="qz-num" type="number" min="1" max="${Math.max(1, bankQuestionCount)}" class="qzw-field" value="${quiz?.num_questions ?? Math.min(10, bankQuestionCount || 10)}" aria-required="true" /><p class="qzw-help">คลังนี้มี ${bankQuestionCount} ข้อ</p></div>
                <div class="qzw-field-group"><label for="qz-time" class="qzw-label">เวลาสอบ (นาที) <span class="qzw-required">จำเป็น</span></label><input id="qz-time" type="number" min="1" class="qzw-field" value="${quiz?.time_limit_minutes ?? 30}" aria-required="true" /></div>
              </div>
              <fieldset class="qzw-choice-list">
                <legend class="qzw-option-title">ลำดับข้อสอบ</legend>
                <label class="qzw-choice"><input type="checkbox" id="qz-shuffle-q" ${quiz ? (quiz.shuffle_questions ? 'checked' : '') : 'checked'} /><span><span class="qzw-choice-title">สลับลำดับคำถาม</span><span class="qzw-choice-help">นักเรียนแต่ละคนอาจเห็นข้อสอบคนละลำดับ</span></span></label>
                <label class="qzw-choice"><input type="checkbox" id="qz-shuffle-c" ${quiz ? (quiz.shuffle_choices ? 'checked' : '') : 'checked'} /><span><span class="qzw-choice-title">สลับลำดับตัวเลือก</span><span class="qzw-choice-help">ตัวเลือกในแต่ละข้อจะสลับตำแหน่ง</span></span></label>
              </fieldset>
            </div>
          </section>

          <section data-step-panel="2" class="qzw-panel hidden">
            <h3>ตั้งเงื่อนไขและสิ่งที่นักเรียนเห็น</h3>
            <p class="qzw-panel-intro">กำหนดจำนวนครั้ง ช่วงเวลา และการแสดงผลหลังส่งข้อสอบ</p>
            <div class="qzw-fields">
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-attempts" class="qzw-label">จำนวนครั้งที่ทำได้</label><input id="qz-attempts" type="number" min="1" class="qzw-field" value="${quiz?.max_attempts ?? 1}" /></div>
                <div class="qzw-field-group"><label for="qz-scoring" class="qzw-label">ถ้าทำหลายครั้ง ให้นับคะแนนแบบ</label><select id="qz-scoring" class="qzw-field qzw-select">${Object.entries(SCORING_LABEL).map(([v, l]) => `<option value="${v}" ${(quiz?.attempt_scoring_mode ?? 'last') === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
              </div>
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-open" class="qzw-label">เปิดสอบตั้งแต่ (ไม่บังคับ)</label><input id="qz-open" type="datetime-local" class="qzw-field" value="${quiz?.open_at ? quiz.open_at.slice(0, 16) : ''}" /></div>
                <div class="qzw-field-group"><label for="qz-close" class="qzw-label">ปิดสอบเมื่อ (ไม่บังคับ)</label><input id="qz-close" type="datetime-local" class="qzw-field" value="${quiz?.close_at ? quiz.close_at.slice(0, 16) : ''}" /></div>
              </div>
              <div class="qzw-field-group"><label for="qz-review" class="qzw-label">นักเรียนดูผลได้แค่ไหนหลังส่งข้อสอบ</label><select id="qz-review" class="qzw-field qzw-select">${Object.entries(REVIEW_LABEL).map(([v, l]) => `<option value="${v}" ${(quiz?.review_policy ?? 'total_only') === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
              <fieldset class="qzw-choice-list">
                <legend class="qzw-option-title">การตอบและผลตอบกลับ</legend>
                <label class="qzw-choice"><input type="checkbox" id="qz-lock-answer" ${quiz?.lock_on_answer ? 'checked' : ''} /><span><span class="qzw-choice-title">ล็อกคำตอบทันทีที่เลือก</span><span class="qzw-choice-help">นักเรียนย้อนกลับไปแก้ข้อที่ตอบแล้วไม่ได้</span></span></label>
                <label class="qzw-choice"><input type="checkbox" id="qz-instant-bonus" ${quiz?.instant_feedback_bonus ? 'checked' : ''} /><span><span class="qzw-choice-title">เปิดเอฟเฟกต์ถูก/ผิดทันที + ระบบคอมโบ/โบนัส</span><span class="qzw-choice-help">ตอบถูกติดกัน 3 ข้อ ปลดล็อกโบนัส (50/50, แก้ข้อที่เคยผิด, ต่อเวลา). ครบ 6 ข้อ ได้โบนัสเปิดเฉลยเพิ่ม. เปิดตัวเลือกนี้จะล็อกคำตอบทันทีให้อัตโนมัติด้วย.</span></span></label>
              </fieldset>
              <fieldset class="qzw-choice-list">
                <legend class="qzw-option-title">คำเตือนก่อนสอบ</legend>
                <label class="qzw-choice"><input type="checkbox" id="qz-deterrent" ${quiz?.deterrent_notice_enabled ? 'checked' : ''} /><span><span class="qzw-choice-title">แสดงป้ายเตือน + ข้อความนาซีฮัตก่อนเริ่มสอบ</span><span class="qzw-choice-help">แสดงข้อความห้ามมองจอที่สอง/หนังสือ พร้อมขอบแดงระหว่างทำข้อสอบ (ข้อความจริงทุกคำ อิงจากระบบตรวจจับการออกนอกหน้าสอบที่มีอยู่แล้ว ไม่ได้อ้างว่ามีกล้อง/ตรวจจับสายตา)</span></span></label>
              </fieldset>
            </div>
          </section>

          <section data-step-panel="3" class="qzw-panel hidden">
            <h3>ผูกคะแนนและเลือกวิธีบันทึก</h3>
            <p class="qzw-panel-intro">เลือกช่องคะแนนของห้องนี้ หรือยืนยันว่าจะเก็บผลไว้ในแบบทดสอบโดยไม่ผูกกับสมุดคะแนน</p>
            <div class="qzw-field-group qzw-score-choice">
              <label for="qz-score-col" class="qzw-label">ช่องคะแนนปลายทาง <span class="qzw-required">จำเป็นต้องเลือก</span></label>
              <select id="qz-score-col" class="qzw-field qzw-select" aria-required="true"><option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option></select>
              <p id="qz-score-col-status" class="qzw-help" aria-live="polite">เลือกห้องเรียนในขั้นตอนแรก แล้วตรวจสอบช่องคะแนนของห้องนี้</p>
            </div>
            <div id="qz-score-details" class="qzw-score-details hidden">
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-score-max" class="qzw-label">คะแนนเต็มของแบบทดสอบ <span class="qzw-required">จำเป็น</span></label><input id="qz-score-max" type="number" min="0.01" step="0.5" class="qzw-field" value="${quiz?.score_max ?? 100}" aria-required="true" /><p class="qzw-help">คะแนนจากข้อสอบจะถูกปรับให้อยู่ในคะแนนเต็มนี้ก่อนบันทึก</p></div>
                <div class="qzw-field-group"><label for="qz-write-mode" class="qzw-label">ถ้าช่องนี้มีคะแนนอยู่แล้ว <span class="qzw-required">จำเป็น</span></label><select id="qz-write-mode" class="qzw-field qzw-select" aria-required="true">${Object.entries(WRITE_MODE_LABEL).map(([v, m]) => `<option value="${v}" ${(quiz?.score_write_mode ?? 'highest') === v ? 'selected' : ''}>${m.label}</option>`).join('')}</select></div>
              </div>
              <p id="qz-write-mode-hint" class="qzw-help" aria-live="polite"></p>
              <div class="qzw-callout qzw-callout--warning qzw-score-note"><b>ตอนปิดสอบ:</b> ครูเลือกได้ว่าจะส่งคะแนนเข้าช่องนี้ทันที หรือปิดสอบโดยไม่เปลี่ยนสมุดคะแนนก่อน หากยังไม่ส่ง สามารถใช้ปุ่ม “ส่งคะแนนย้อนหลัง” ภายหลังได้</div>
            </div>
            <div id="qz-unbound-note" class="qzw-callout hidden"><b>เลือกไม่ผูกคะแนนแล้ว</b><br />คะแนนจะอยู่ในผลการทำแบบทดสอบ ครูสามารถตรวจดูผลและส่งคะแนนย้อนหลังได้เมื่อแก้ไขแบบทดสอบให้ผูกกับช่องคะแนน</div>
          </section>

          <section data-step-panel="4" class="qzw-panel hidden">
            <h3>ตรวจทานการตั้งค่าก่อนบันทึก</h3>
            <p class="qzw-panel-intro">ตรวจสอบทุกหัวข้อ โดยเฉพาะห้องเรียน ช่องคะแนน และวิธีเขียนคะแนนเก่า</p>
            <dl id="qz-review-summary" class="qzw-review-summary"></dl>
            <label class="qzw-review-confirm"><input type="checkbox" id="qz-review-confirm" /><span><b>ตรวจทานแล้ว</b><small>ยืนยันว่าห้องเรียน การตั้งค่าการสอบ และแนวทางบันทึกคะแนนถูกต้อง</small></span></label>
          </section>
        </div>
      </div>
    </main>

    <footer class="qzw-footer">
      <p id="qz-footer-hint" class="qzw-footer-hint">ตรวจค่าที่จำเป็นในแต่ละขั้นก่อนดำเนินการต่อ</p>
      <div class="qzw-footer-actions">
        <button type="button" id="qz-prev" class="qzw-button" disabled>ย้อนกลับ</button>
        <button type="button" id="qz-next" class="qzw-button qzw-button--primary">ถัดไป</button>
        <button type="button" id="qz-save" class="qzw-button qzw-button--primary hidden">บันทึกแบบทดสอบ</button>
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
      scoreColStatus.textContent = 'เลือกห้องเรียนในขั้นตอนแรก แล้วตรวจสอบช่องคะแนนของห้องนี้'
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
      scoreColSelect.innerHTML = '<option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>' +
        cols.map(c => `<option value="${_htmlEsc(c.id)}">${_htmlEsc(c.assignment_name)}</option>`).join('')
      scoreColSelect.value = selectedValue
      scoreColStatus.textContent = cols.length ? `พบ ${cols.length} ช่องคะแนนในห้อง ${selectedClassName()}. เลือกช่องที่ต้องการ หรือเลือกไม่ผูกคะแนน` : `ห้อง ${selectedClassName()} ยังไม่มีช่องคะแนนที่เลือกได้. หากต้องการบันทึกคะแนน ให้เพิ่มช่องที่หน้าบันทึกคะแนนก่อน หรือเลือกไม่ผูกคะแนน`
      syncScoreBindingUI()
      return cols
    }).catch(() => {
      if (classSelect.value !== classId || !document.body.contains(modal)) return []
      scoreColumnsLoadState = 'error'
      scoreColumnsError = true
      scoreColSelect.disabled = false
      scoreColSelect.innerHTML = '<option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>'
      scoreColSelect.value = '__choose__'
      scoreColStatus.textContent = 'โหลดช่องคะแนนไม่สำเร็จ. กลับมาที่ขั้นนี้เพื่อลองใหม่ หรือเลือกไม่ผูกคะแนนโดยตั้งใจ'
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
    $('#qz-write-mode-hint').innerHTML = `<b>${_htmlEsc(mode?.label ?? '')}</b><span class="qzw-choice-help">${_htmlEsc(mode?.hint ?? '')}${keySafety ? `<br>${_htmlEsc(keySafety)}` : ''}</span>`
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
      ['ห้องเรียนและชื่อ', `${selectedClassName()}, ${$('#qz-title').value.trim() || 'ยังไม่ได้ตั้งชื่อ'}`],
      ['จำนวนข้อและเวลา', `${$('#qz-num').value || '—'} ข้อ, ${$('#qz-time').value || '—'} นาที, ${$('#qz-shuffle-q').checked ? 'สลับข้อ' : 'ไม่สลับข้อ'}, ${$('#qz-shuffle-c').checked ? 'สลับตัวเลือก' : 'ไม่สลับตัวเลือก'}`],
      ['การทำและการแสดงผล', `${$('#qz-attempts').value || '—'} ครั้ง, นับ${SCORING_LABEL[$('#qz-scoring').value] ?? '—'}, ${REVIEW_LABEL[$('#qz-review').value] ?? '—'}`],
      ['ช่วงเวลา', dateText],
      ['การล็อก/เอฟเฟกต์/คำเตือน', `${$('#qz-lock-answer').checked || $('#qz-instant-bonus').checked ? 'ล็อกคำตอบ' : 'ย้อนแก้ได้'}, ${$('#qz-instant-bonus').checked ? 'เปิดคอมโบ/โบนัส' : 'ปิดคอมโบ/โบนัส'}, ${$('#qz-deterrent').checked ? 'เปิดป้ายเตือน' : 'ไม่แสดงป้ายเตือน'}`],
      ['ช่องคะแนน', bound ? `${selectedColumn}, คะแนนเต็ม ${$('#qz-score-max').value || '—'}` : scoreColSelect.value === '' ? 'ตั้งใจไม่ผูกคะแนนกับสมุดคะแนน' : 'ยังไม่ได้เลือก. กลับไปเลือกช่องคะแนนหรือไม่ผูกคะแนน'],
      ['วิธีบันทึก', bound ? `${mode?.label ?? '—'}. ${modeDescription}. ตอนปิดสอบครูเลือกได้ว่าจะส่งคะแนนทันทีหรือปิดโดยไม่เปลี่ยนสมุดคะแนน` : 'ไม่มีการส่งคะแนนเข้าคอลัมน์คะแนนของห้อง'],
    ]
    $('#qz-review-summary').innerHTML = rows.map(([label, value]) => `<div class="qzw-review-row"><dt>${_htmlEsc(label)}</dt><dd>${_htmlEsc(value)}</dd></div>`).join('')
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
    errorSummary.innerHTML = `<b>ตรวจข้อมูลที่จำเป็นก่อนดำเนินการต่อ</b><ul class="qzw-error-list">${errors.map(err => `<li><a href="#${err.id}" data-error-field="${err.id}">${_htmlEsc(err.message)}</a></li>`).join('')}</ul>`
    errorSummary.classList.remove('hidden')
    errors.forEach(({ id }) => {
      const field = $(`#${id}`)
      field?.setAttribute('aria-invalid', 'true')
      field?.setAttribute('aria-describedby', 'qz-error-summary')
    })
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
    modal.querySelectorAll('[data-step-item]').forEach((item, index) => {
      item.classList.toggle('is-current', index === currentStep)
      item.classList.toggle('is-complete', index < currentStep)
      const dot = item.querySelector('[data-step-dot]')
      dot.textContent = index < currentStep ? '✓' : String(index + 1)
    })
    $('#qz-progress').style.transform = `scaleX(${(currentStep + 1) / steps.length})`
    $('#qz-progress').parentElement.setAttribute('aria-valuenow', String(currentStep + 1))
    $('#qz-step-count').textContent = `ขั้นตอนที่ ${currentStep + 1} จาก ${steps.length}: ${steps[currentStep].title}`
    $('#qz-prev').disabled = currentStep === 0
    $('#qz-next').classList.toggle('hidden', currentStep === steps.length - 1)
    $('#qz-save').classList.toggle('hidden', currentStep !== steps.length - 1)
    if (currentStep === 3) await loadScoreColumns()
    if (currentStep === 4) updateReviewSummary()
    $('#qz-wizard-scroll').scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    const heading = panelNodes[currentStep].querySelector('h3')
    heading?.setAttribute('tabindex', '-1')
    heading?.focus({ preventScroll: true })
    return true
  }

  const backgroundElements = [...document.body.children].filter(element => element !== modal)
  const backgroundInertState = new Map(backgroundElements.map(element => [element, element.inert]))
  backgroundElements.forEach(element => { element.inert = true })
  document.documentElement.classList.add('qzw-open')
  document.body.classList.add('qzw-open')
  const closeModal = () => {
    modal.remove()
    document.removeEventListener('keydown', onKeyDown)
    backgroundInertState.forEach((wasInert, element) => { element.inert = wasInert })
    document.documentElement.classList.remove('qzw-open')
    document.body.classList.remove('qzw-open')
    activeElement?.focus?.({ preventScroll: true })
    if (typeof onClosed === 'function') onClosed()
  }
  const onKeyDown = e => {
    if (!document.body.contains(modal)) return
    if (e.key === 'Escape') { closeModal(); return }
    if (e.key !== 'Tab') return
    const focusable = [...modal.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), a[href], [tabindex="0"]')]
      .filter(element => element.getClientRects().length > 0)
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && (document.activeElement === first || document.activeElement === modal)) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
  document.addEventListener('keydown', onKeyDown)
  $('#qz-cancel').addEventListener('click', closeModal)
  $('#qz-prev').addEventListener('click', () => { if (currentStep > 0) renderStep(currentStep - 1) })
  $('#qz-next').addEventListener('click', () => renderStep(currentStep + 1, { validate: true }))
  classSelect.addEventListener('change', () => {
    scoreColumnsLoadState = 'idle'
    scoreColumnsLoadClassId = ''
    scoreColumnsError = false
    scoreColSelect.value = '__choose__'
    scoreColSelect.innerHTML = '<option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>'
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
  const clearFieldError = field => {
    if (!field?.matches?.('input, select, textarea')) return
    field.removeAttribute('aria-invalid')
    if (field.getAttribute('aria-describedby') === 'qz-error-summary') field.removeAttribute('aria-describedby')
  }
  modal.addEventListener('input', event => clearFieldError(event.target))
  modal.addEventListener('change', event => clearFieldError(event.target))
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
    saveButton.disabled = true
    saveButton.setAttribute('aria-busy', 'true')
    saveButton.innerHTML = 'กำลังบันทึก <span class="qzw-spinner" aria-hidden="true"></span>'
    try {
      if (quiz) await updateQuiz(quiz.id, payload)
      else await createQuiz({ ...payload, status: 'announced' })
      showToast('บันทึกแล้ว', 'success')
      closeModal()
      if (typeof onSaved === 'function') await onSaved(payload)
      renderBankQuizzes(teacher, bank)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + getFriendlyErrorMessage(err), 'error')
      saveButton.removeAttribute('aria-busy')
      saveButton.disabled = !$('#qz-review-confirm').checked
      saveButton.textContent = 'บันทึกแบบทดสอบ'
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
