// js/teacher-views-quiz-config.js
import { getMyClasses, getScoreColumns } from './api.js'
import { getQuizzesForBank, getQuizQuestions, createQuiz, updateQuiz, startQuizLive, closeQuiz, deleteQuiz } from './quiz-api.js'
import { showToast, showDangerConfirm, setButtonLoading } from './ui.js'
import { setContent, setTitle, _htmlEsc, SELECT_CLS, INPUT_CLS } from './teacher-views-utils.js'

const STATUS_LABEL = {
  draft: { label: 'ร่าง', cls: 'bg-gray-100 text-gray-600' },
  announced: { label: 'รอครูเริ่ม', cls: 'bg-amber-100 text-amber-700' },
  started: { label: 'กำลังสอบ', cls: 'bg-emerald-100 text-emerald-700' },
  closed: { label: 'ปิดสอบแล้ว', cls: 'bg-gray-200 text-gray-500' },
}

const SCORING_LABEL = { first: 'ครั้งแรก', last: 'ครั้งล่าสุด', highest: 'คะแนนสูงสุด' }
const REVIEW_LABEL = { total_only: 'เห็นคะแนนรวมเท่านั้น', per_question: 'เห็นถูก/ผิดรายข้อ', full_review: 'เห็นเฉลยเต็ม' }

export async function renderBankQuizzes(teacher, bank) {
  if (!bank) return
  setTitle(`แบบทดสอบจากคลัง: ${bank.name}`)
  setContent(`<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>`)

  const [quizzes, classes, questions] = await Promise.all([
    getQuizzesForBank(bank.id),
    getMyClasses(teacher.id),
    getQuizQuestions(bank.id),
  ])

  const classNameById = Object.fromEntries(classes.map(c => [
    c.id, `${c.master_subjects?.subject_name ?? ''} (${c.class_name ?? '—'})`
  ]))

  setContent(`
    <div class="space-y-4">
      <button id="btn-back-questions" class="text-sm text-gray-500 hover:text-gray-700">← กลับไปหน้าคำถามในคลัง</button>

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
                ${q.status === 'announced' ? `<button class="btn-start-quiz px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold" data-id="${q.id}">▶️ เริ่มสอบ</button>` : ''}
                ${q.status === 'started' ? `<button class="btn-close-quiz px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold" data-id="${q.id}">⏹️ ปิดสอบ</button>` : ''}
                ${q.status === 'started' ? `<button class="btn-monitor-quiz px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold" data-id="${q.id}">🔴 ดูสด</button>` : ''}
                ${(q.status === 'started' || q.status === 'closed') ? `<button class="btn-analytics-quiz px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold" data-id="${q.id}">📊 สถิติ</button>` : ''}
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

  document.querySelectorAll('.btn-start-quiz').forEach(btn =>
    btn.addEventListener('click', async () => {
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
      max_attempts: parseInt(modal.querySelector('#qz-attempts').value, 10) || 1,
      attempt_scoring_mode: modal.querySelector('#qz-scoring').value,
      time_limit_minutes: parseInt(modal.querySelector('#qz-time').value, 10) || null,
      open_at: openAt ? new Date(openAt).toISOString() : null,
      close_at: closeAt ? new Date(closeAt).toISOString() : null,
      review_policy: modal.querySelector('#qz-review').value,
      score_column_id: scoreColSelect.value || null,
      score_max: parseFloat(modal.querySelector('#qz-score-max').value) || null,
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
