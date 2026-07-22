// js/teacher-views-quiz-banks.js
import {
  getQuizBanks, createQuizBank, updateQuizBank, deleteQuizBank,
  getQuizQuestions, createQuizQuestion, bulkImportQuizQuestions, updateQuizQuestion, deleteQuizQuestion
} from './quiz-api.js'
import { parseCSV } from './import.js'
import { showToast, showDangerConfirm, setButtonLoading } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc, SELECT_CLS, INPUT_CLS } from './teacher-views-utils.js'
import { loadKaTeX, renderMathIn } from './katex-loader.js'
import { supabase } from './supabase.js'

const CSV_HEADERS = ['คำถาม', 'ตัวเลือก1', 'ตัวเลือก2', 'ตัวเลือก3', 'ตัวเลือก4', 'ตัวเลือก5', 'ตัวเลือกที่ถูก', 'คำอธิบายเฉลย', 'ระดับความยาก', 'หมวดหมู่']

export async function renderQuizBanks(teacher) {
  if (!teacher) return
  setActiveNav('quiz-system')
  setTitle('ระบบแบบทดสอบออนไลน์ (Quiz)')
  setContent(`<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>`)

  // สร้างคลังข้อสอบ/คำถาม/ตั้งค่าแบบทดสอบ ไม่จำกัดสำหรับครูทุกคนแล้ว (ไม่ gate
  // ด้วย donor tier ที่นี่อีกต่อไป) — ที่ยัง gate ครูทั่วไปคือขั้น "เริ่มสอบจริง"
  // ให้นักเรียนทำเท่านั้น ดู renderBankQuizzes ใน teacher-views-quiz-config.js
  const banks = await getQuizBanks(teacher.id)

  setContent(`
    <div class="space-y-6">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div class="absolute right-0 bottom-0 translate-y-6 translate-x-4 opacity-10 text-8xl">📝</div>
        <h2 class="font-bold text-lg leading-tight mb-1">ระบบแบบทดสอบออนไลน์ (Quiz)</h2>
        <p class="text-xs text-indigo-100 leading-relaxed max-w-md">สร้างคลังข้อสอบแบบหลายตัวเลือก ไม่จำกัดจำนวนข้อ แล้วนำไปตั้งค่าแบบทดสอบให้นักเรียนสอบได้</p>
      </div>

      <div class="flex items-center justify-between">
        <h3 class="font-bold text-gray-700 text-sm">คลังข้อสอบของคุณ</h3>
        <button id="btn-create-bank" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition">＋ สร้างคลังใหม่</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="bank-grid">
        ${banks.length === 0 ? `
          <div class="col-span-full bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <div class="text-5xl mb-4">📝</div>
            <h3 class="font-bold text-gray-700 text-base mb-1">ยังไม่มีคลังข้อสอบ</h3>
            <p class="text-sm text-gray-400 mb-6">สร้างคลังข้อสอบแรกของคุณเพื่อเริ่มเพิ่มคำถาม</p>
            <button id="btn-create-bank-empty" class="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-100 transition">＋ สร้างคลังข้อสอบแรก</button>
          </div>
        ` : banks.map(b => `
          <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h4 class="font-bold text-gray-800 text-base line-clamp-1 mb-1">${_htmlEsc(b.name)}</h4>
              <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">${_htmlEsc(b.description || 'ไม่มีคำอธิบาย')}</p>
            </div>
            <div class="flex gap-2 border-t border-gray-50 pt-3">
              <button class="btn-open-bank flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition" data-id="${b.id}">📋 จัดการคำถาม</button>
              <button class="btn-edit-bank px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold transition" data-id="${b.id}" title="แก้ไข">✏️</button>
              <button class="btn-delete-bank px-3 py-2 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold transition" data-id="${b.id}" title="ลบ">🗑️</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `)

  const openForm = () => _renderBankForm(teacher, null)
  document.getElementById('btn-create-bank')?.addEventListener('click', openForm)
  document.getElementById('btn-create-bank-empty')?.addEventListener('click', openForm)

  document.querySelectorAll('.btn-open-bank').forEach(btn =>
    btn.addEventListener('click', () => _renderBankQuestions(teacher, banks.find(b => b.id === btn.dataset.id))))

  document.querySelectorAll('.btn-edit-bank').forEach(btn =>
    btn.addEventListener('click', () => _renderBankForm(teacher, banks.find(b => b.id === btn.dataset.id))))

  document.querySelectorAll('.btn-delete-bank').forEach(btn =>
    btn.addEventListener('click', async () => {
      const ok = await showDangerConfirm({ title: 'ลบคลังข้อสอบนี้?', message: 'คำถามทั้งหมดในคลังจะถูกลบไปด้วย และแบบทดสอบที่อ้างอิงคลังนี้จะใช้งานต่อไม่ได้' })
      if (!ok) return
      await deleteQuizBank(btn.dataset.id)
      showToast('ลบคลังข้อสอบแล้ว', 'success')
      renderQuizBanks(teacher)
    }))
}

function _renderBankForm(teacher, bank) {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${bank ? 'แก้ไขคลังข้อสอบ' : 'สร้างคลังข้อสอบใหม่'}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อคลังข้อสอบ</label>
          <input id="bank-name" class="${INPUT_CLS}" value="${_htmlEsc(bank?.name ?? '')}" placeholder="เช่น บทที่ 1 - สมการเชิงเส้น" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบาย (ไม่บังคับ)</label>
          <textarea id="bank-desc" class="${INPUT_CLS}" rows="2">${_htmlEsc(bank?.description ?? '')}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="bank-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="bank-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `
  document.body.appendChild(modal)
  modal.querySelector('#bank-cancel').addEventListener('click', () => modal.remove())
  modal.querySelector('#bank-save').addEventListener('click', async (e) => {
    const name = modal.querySelector('#bank-name').value.trim()
    if (!name) { showToast('กรุณาระบุชื่อคลังข้อสอบ', 'warning'); return }
    setButtonLoading(e.target, true)
    try {
      const payload = { name, description: modal.querySelector('#bank-desc').value.trim() || null }
      if (bank) await updateQuizBank(bank.id, payload)
      else await createQuizBank({ ...payload, teacher_id: teacher.id })
      showToast('บันทึกแล้ว', 'success')
      modal.remove()
      renderQuizBanks(teacher)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      setButtonLoading(e.target, false, 'บันทึก')
    }
  })
}

export async function _renderBankQuestions(teacher, bank) {
  if (!bank) return
  setTitle(`คำถามในคลัง: ${bank.name}`)
  setContent(`<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>`)

  const questions = await getQuizQuestions(bank.id)

  setContent(`
    <div class="space-y-4">
      <button id="btn-back-banks" class="text-sm text-gray-500 hover:text-gray-700">← กลับไปหน้าคลังข้อสอบ</button>

      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 class="font-bold text-gray-700 text-sm">คำถามทั้งหมด (${questions.length} ข้อ)</h3>
          <p class="text-xs text-gray-400 mt-0.5">รองรับสมการคณิตศาสตร์ด้วย LaTeX — พิมพ์คร่อมด้วย <code>$...$</code> เช่น <code>$x^2+2x+1=0$</code></p>
        </div>
        <div class="flex gap-2">
          <button id="btn-download-template" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold">⬇️ ดาวน์โหลดเทมเพลต CSV</button>
          <label class="px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
            ⬆️ นำเข้า CSV
            <input type="file" id="csv-file-input" accept=".csv" class="sr-only" />
          </label>
          <button id="btn-add-question" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm">＋ เพิ่มคำถาม</button>
          <button id="btn-ai-generate" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm">✨ AI ช่วยคิดข้อสอบ</button>
          <button id="btn-go-quizzes" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm">🎯 แบบทดสอบจากคลังนี้</button>
        </div>
      </div>

      <div class="space-y-3" id="question-list">
        ${questions.length === 0 ? `
          <div class="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <p class="text-sm text-gray-400">ยังไม่มีคำถามในคลังนี้ — เพิ่มเองทีละข้อ หรือนำเข้าจากไฟล์ CSV</p>
          </div>
        ` : questions.map((q, i) => `
          <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <p class="text-xs text-gray-400 mb-1">ข้อ ${i + 1}${q.difficulty ? ` · ${_htmlEsc(q.difficulty)}` : ''}${q.category ? ` · ${_htmlEsc(q.category)}` : ''}</p>
                <p class="font-semibold text-gray-800 text-sm mb-2">${_htmlEsc(q.question_text)}</p>
                <ul class="space-y-1">
                  ${q.choices.map((c, ci) => `
                    <li class="text-xs ${ci === q.correct_choice_index ? 'text-emerald-700 font-bold' : 'text-gray-500'}">
                      ${ci === q.correct_choice_index ? '✓' : '○'} ${_htmlEsc(c)}
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="flex flex-col gap-1.5 flex-shrink-0">
                <button class="btn-edit-q px-2 py-1 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs" data-id="${q.id}">✏️</button>
                <button class="btn-delete-q px-2 py-1 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs" data-id="${q.id}">🗑️</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `)

  loadKaTeX().then(() => renderMathIn(document.getElementById('question-list'))).catch(() => {})

  document.getElementById('btn-back-banks').addEventListener('click', () => renderQuizBanks(teacher))

  document.getElementById('btn-download-template').addEventListener('click', () => {
    const sample = [
      CSV_HEADERS.join(','),
      '"2+2 เท่ากับเท่าไหร่",3,4,5,6,,2,"2+2=4 ตามหลักการบวกเลข",ง่าย,คณิตศาสตร์พื้นฐาน'
    ].join('\n')
    const uri = encodeURI('data:text/csv;charset=utf-8,' + sample)
    const link = document.createElement('a')
    link.href = uri
    link.download = 'quiz_question_template.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  })

  document.getElementById('csv-file-input').addEventListener('change', async e => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async evt => {
      try {
        const rows = parseCSV(evt.target.result)
        const mapped = rows.map(_mapCsvRowToQuestion).filter(r => r.question_text && r.choices.length >= 2 &&
          Number.isInteger(r.correct_choice_index) && r.correct_choice_index >= 0 && r.correct_choice_index < r.choices.length)

        if (mapped.length === 0) {
          showToast('ไม่พบแถวข้อมูลที่ถูกต้องในไฟล์ CSV — ตรวจสอบรูปแบบตามเทมเพลต', 'warning')
          return
        }
        await bulkImportQuizQuestions(bank.id, mapped)
        showToast(`นำเข้าสำเร็จ ${mapped.length} ข้อ`, 'success')
        _renderBankQuestions(teacher, bank)
      } catch (err) {
        showToast('นำเข้าไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        e.target.value = ''
      }
    }
    reader.readAsText(file)
  })

  document.getElementById('btn-add-question').addEventListener('click', () => _renderQuestionForm(teacher, bank))

  document.querySelectorAll('.btn-edit-q').forEach(btn =>
    btn.addEventListener('click', () => _renderQuestionForm(teacher, bank, questions.find(q => q.id === btn.dataset.id))))

  document.getElementById('btn-ai-generate').addEventListener('click', () => _renderAIGenerator(teacher, bank))

  document.getElementById('btn-go-quizzes').addEventListener('click', async () => {
    const { renderBankQuizzes } = await import('./teacher-views-quiz-config.js')
    renderBankQuizzes(teacher, bank)
  })

  document.querySelectorAll('.btn-delete-q').forEach(btn =>
    btn.addEventListener('click', async () => {
      const ok = await showDangerConfirm({ title: 'ลบคำถามนี้?', message: 'จะไม่กระทบแบบทดสอบที่เคยสุ่มข้อนี้ไปแล้ว' })
      if (!ok) return
      await deleteQuizQuestion(btn.dataset.id)
      showToast('ลบคำถามแล้ว', 'success')
      _renderBankQuestions(teacher, bank)
    }))
}

function _renderQuestionForm(teacher, bank, question = null) {
  // Always render at least 4 slots (matches the create-flow default), but
  // widen to however many choices the question already has (up to the
  // schema's max of 5) — otherwise editing an AI/CSV-imported question with
  // 5 choices would silently drop the 5th one on save.
  const slotCount = Math.min(5, Math.max(4, question?.choices?.length ?? 0))

  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${question ? 'แก้ไขคำถาม' : 'เพิ่มคำถามใหม่'}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำถาม</label>
          <textarea id="q-text" class="${INPUT_CLS}" rows="2">${_htmlEsc(question?.question_text ?? '')}</textarea>
          <p class="text-xs text-gray-400 mt-1">รองรับสมการคณิตศาสตร์ด้วย LaTeX เช่น <code>$x^2+2x+1=0$</code></p>
          <div id="q-preview" class="hidden mt-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm"></div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ตัวเลือก (เลือกข้อที่ถูกต้องด้วยปุ่มวิทยุด้านซ้าย)</label>
          <div class="space-y-2" id="q-choices">
            ${Array.from({ length: slotCount }, (_, i) => `
              <div class="flex items-center gap-2">
                <input type="radio" name="q-correct" value="${i}" ${i === (question?.correct_choice_index ?? 0) ? 'checked' : ''} class="flex-shrink-0" />
                <input class="${INPUT_CLS} q-choice-input" placeholder="ตัวเลือกที่ ${i + 1}" value="${_htmlEsc(question?.choices?.[i] ?? '')}" />
              </div>
            `).join('')}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ระดับความยาก</label>
            <select id="q-difficulty" class="${SELECT_CLS}">
              <option value="" ${!question?.difficulty ? 'selected' : ''}>— ไม่ระบุ —</option>
              <option value="ง่าย" ${question?.difficulty === 'ง่าย' ? 'selected' : ''}>ง่าย</option>
              <option value="ปานกลาง" ${question?.difficulty === 'ปานกลาง' ? 'selected' : ''}>ปานกลาง</option>
              <option value="ยาก" ${question?.difficulty === 'ยาก' ? 'selected' : ''}>ยาก</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">หมวดหมู่</label>
            <input id="q-category" class="${INPUT_CLS}" placeholder="ไม่บังคับ" value="${_htmlEsc(question?.category ?? '')}" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบายเฉลย (ไม่บังคับ)</label>
          <textarea id="q-explanation" class="${INPUT_CLS}" rows="2">${_htmlEsc(question?.explanation ?? '')}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="q-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="q-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `
  document.body.appendChild(modal)

  const previewEl = modal.querySelector('#q-preview')
  const textEl = modal.querySelector('#q-text')
  let previewTimer = null
  const updatePreview = () => {
    clearTimeout(previewTimer)
    previewTimer = setTimeout(() => {
      const text = textEl.value.trim()
      if (!text) { previewEl.classList.add('hidden'); return }
      previewEl.classList.remove('hidden')
      previewEl.textContent = text
      loadKaTeX().then(() => renderMathIn(previewEl)).catch(() => {})
    }, 300)
  }
  textEl.addEventListener('input', updatePreview)

  modal.querySelector('#q-cancel').addEventListener('click', () => modal.remove())
  modal.querySelector('#q-save').addEventListener('click', async (e) => {
    const questionText = modal.querySelector('#q-text').value.trim()
    const choiceInputs = [...modal.querySelectorAll('.q-choice-input')]
    const rawCorrectIdx = parseInt(modal.querySelector('input[name="q-correct"]:checked').value, 10)
    // filter(Boolean) shifts indices if a slot is left blank — recompute correctIndex
    // against the post-filter position instead of reusing the raw radio value.
    const kept = choiceInputs.map((inp, i) => ({ v: inp.value.trim(), i })).filter(x => x.v)
    const choices = kept.map(x => x.v)
    const correctIndex = kept.findIndex(x => x.i === rawCorrectIdx)

    if (!questionText) { showToast('กรุณาระบุคำถาม', 'warning'); return }
    if (choices.length < 2) { showToast('กรุณาระบุตัวเลือกอย่างน้อย 2 ข้อ', 'warning'); return }
    if (correctIndex < 0) { showToast('กรุณาเลือกตัวเลือกที่ถูกต้องที่มีข้อความ', 'warning'); return }

    setButtonLoading(e.target, true)
    try {
      const payload = {
        question_text: questionText,
        choices,
        correct_choice_index: correctIndex,
        explanation: modal.querySelector('#q-explanation').value.trim() || null,
        difficulty: modal.querySelector('#q-difficulty').value || null,
        category: modal.querySelector('#q-category').value.trim() || null,
      }
      if (question) {
        await updateQuizQuestion(question.id, payload)
        showToast('แก้ไขคำถามแล้ว', 'success')
      } else {
        await createQuizQuestion({ ...payload, bank_id: bank.id })
        showToast('เพิ่มคำถามแล้ว', 'success')
      }
      modal.remove()
      _renderBankQuestions(teacher, bank)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      setButtonLoading(e.target, false, 'บันทึก')
    }
  })
}

// ─── AI Question Generator (Gemini) ─────────────────────────────────────────
// Every AI-drafted question must be reviewed and explicitly confirmed by the
// teacher (checkbox) before it can be saved — this mirrors the same
// choice-reindex safety already applied to the manual form and CSV import,
// since a draft question here goes through the exact same editable UI a
// teacher could put a wrong answer into.
function _normalizeAIQuestion(raw) {
  const choices = Array.isArray(raw?.choices) ? raw.choices.map(c => String(c ?? '').trim()).filter(Boolean) : []
  let correctIndex = Number.isInteger(raw?.correct_choice_index) ? raw.correct_choice_index : 0
  if (correctIndex < 0 || correctIndex >= choices.length) correctIndex = 0
  return {
    question_text: String(raw?.question_text ?? '').trim(),
    choices: choices.length >= 2 ? choices : ['', ''],
    correct_choice_index: correctIndex,
    explanation: String(raw?.explanation ?? '').trim(),
    difficulty: ['ง่าย', 'ปานกลาง', 'ยาก'].includes(raw?.difficulty) ? raw.difficulty : null,
    confirmed: false,
  }
}

function _validateDraftQuestion(d) {
  if (!d.question_text.trim()) return { ok: false, error: 'กรุณากรอกคำถามก่อนยืนยัน' }
  const kept = d.choices.map((v, ci) => ({ v: v.trim(), ci })).filter(x => x.v)
  if (kept.length < 2) return { ok: false, error: 'ต้องมีตัวเลือกที่มีข้อความอย่างน้อย 2 ข้อ' }
  const correctIndex = kept.findIndex(x => x.ci === d.correct_choice_index)
  if (correctIndex < 0) return { ok: false, error: 'ตัวเลือกที่ถูกต้องต้องมีข้อความ กรุณาเลือกใหม่' }
  return { ok: true }
}

// Used by both the CSV-file-upload import and the paste-from-external-AI CSV
// path, so the reindex-safety fix (blank choice slots shifting the correct
// index) only has to live in one place.
function _mapCsvRowToQuestion(r) {
  const rawChoices = [r['ตัวเลือก1'], r['ตัวเลือก2'], r['ตัวเลือก3'], r['ตัวเลือก4'], r['ตัวเลือก5']]
    .map(c => (c ?? '').trim())
  const correctRawIdx = parseInt(r['ตัวเลือกที่ถูก'], 10) - 1
  const kept = rawChoices.map((v, i) => ({ v, i })).filter(x => x.v)
  const choices = kept.map(x => x.v)
  const correct_choice_index = kept.findIndex(x => x.i === correctRawIdx)
  return {
    question_text: (r['คำถาม'] ?? '').trim(),
    choices,
    correct_choice_index,
    explanation: (r['คำอธิบายเฉลย'] ?? '').trim() || null,
    difficulty: (r['ระดับความยาก'] ?? '').trim() || null,
    category: (r['หมวดหมู่'] ?? '').trim() || null,
  }
}

function _stripCodeFence(text) {
  let t = (text ?? '').trim()
  if (t.startsWith('```')) {
    t = t.replace(/^```[a-zA-Z]*\n?/, '').replace(/```\s*$/, '').trim()
  }
  return t
}

// In-app Gemini call: always JSON, never wrapped in markdown (our own
// edge function parses raw text directly, no copy-paste step involved).
function _buildAIPrompt({ topic, count, choicesCount, difficulty }) {
  return [
    `Generate a JSON array of exactly ${count} Thai multiple-choice quiz questions about: "${topic}".`,
    difficulty ? `All questions should be "${difficulty}" difficulty.` : 'Mix of difficulty levels is fine.',
    'Reply with a JSON Array ONLY. No markdown, no text outside JSON.',
    '',
    'Each object must have:',
    '1. "question_text" — the question, in Thai',
    `2. "choices" — array of exactly ${choicesCount} plausible answer strings (exactly one correct)`,
    '3. "correct_choice_index" — 0-based index into choices of the correct answer',
    '4. "explanation" — short Thai explanation of why that answer is correct',
    '5. "difficulty" — one of "ง่าย", "ปานกลาง", "ยาก"',
    '',
    'Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\frac{a}{b}$',
    '',
    `Example: [{"question_text":"...","choices":[${Array(choicesCount).fill('"..."').join(',')}],"correct_choice_index":0,"explanation":"...","difficulty":"ปานกลาง"}]`
  ].join('\n')
}

// Copy-to-external-AI mode: no count cap (an external chatbot has no token
// budget tied to our own edge function), and explicitly asks for the whole
// answer inside a SINGLE fenced code block — most chat UIs (ChatGPT, Gemini,
// Claude) render a one-click "copy" button on a fenced block, so the teacher
// never has to manually select text.
function _buildExternalAIPrompt({ topic, count, choicesCount, difficulty, format }) {
  const shared = [
    `Generate exactly ${count} Thai multiple-choice quiz questions about: "${topic}".`,
    difficulty ? `All questions should be "${difficulty}" difficulty.` : 'Mix of difficulty levels is fine.',
    'Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\frac{a}{b}$',
  ]

  if (format === 'csv') {
    const header = [CSV_HEADERS[0], ...CSV_HEADERS.slice(1, 1 + choicesCount), ...CSV_HEADERS.slice(6)].join(',')
    return [
      ...shared,
      '',
      `Reply with CSV data (comma-separated) using EXACTLY this header row first: ${header}`,
      `Fill all ${choicesCount} choice columns per row with plausible answers (exactly one correct).`,
      '"ตัวเลือกที่ถูก" column = the 1-based column number of the correct choice (e.g. 2 means the 2nd choice column).',
      'Quote any field that itself contains a comma with double quotes.',
      '',
      'Wrap the ENTIRE csv output (header row + all data rows, nothing else) in a single fenced code block using ```csv and ``` — no text before or after that block.'
    ].join('\n')
  }

  return [
    ...shared,
    '',
    'Reply as a JSON array. Each object must have:',
    '1. "question_text" — the question, in Thai',
    `2. "choices" — array of exactly ${choicesCount} plausible answer strings (exactly one correct)`,
    '3. "correct_choice_index" — 0-based index into choices of the correct answer',
    '4. "explanation" — short Thai explanation of why that answer is correct',
    '5. "difficulty" — one of "ง่าย", "ปานกลาง", "ยาก"',
    '',
    `Example: [{"question_text":"...","choices":[${Array(choicesCount).fill('"..."').join(',')}],"correct_choice_index":0,"explanation":"...","difficulty":"ปานกลาง"}]`,
    '',
    'Wrap the ENTIRE answer (the whole JSON array, nothing else) in a single fenced code block using ```json and ``` — no text before or after that block.'
  ].join('\n')
}

// Shared JSON extraction: strips markdown fences, parses, falls back to a
// regex scan for an embedded array if the model added stray text around it.
function _parseAIJsonArray(rawText) {
  const text = _stripCodeFence(rawText)
  let generated
  try {
    generated = JSON.parse(text)
  } catch (e2) {
    const match = text.match(/\[\s*\{[\s\S]*\}\s*\]/)
    if (!match) throw new Error('ไม่พบ JSON อาร์เรย์ในคำตอบ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (มักเกิดจากขอจำนวนข้อมากเกินไปจนคำตอบถูกตัดกลางคัน)')
    try {
      generated = JSON.parse(match[0])
    } catch (e3) {
      throw new Error('คำตอบไม่ครบ (JSON ถูกตัดกลางคัน) — ลองลดจำนวนข้อแล้วขอใหม่')
    }
  }
  if (!Array.isArray(generated)) throw new Error('คำตอบไม่ใช่ JSON อาร์เรย์')
  return generated
}

// Auto-detects whether the pasted text is JSON or CSV (after stripping any
// code fence) — so the teacher doesn't have to tell us which format they
// asked the external AI for.
function _parseExternalAIResponse(rawText) {
  const text = _stripCodeFence(rawText)
  if (text.trim().startsWith('[')) return _parseAIJsonArray(text)

  const rows = parseCSV(text)
  if (!rows.length) throw new Error('ไม่พบข้อมูลที่แปลงได้ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (ทั้งแถวหัวตารางและข้อมูล)')
  const mapped = rows.map(_mapCsvRowToQuestion).filter(r => r.question_text && r.choices.length >= 2 &&
    Number.isInteger(r.correct_choice_index) && r.correct_choice_index >= 0 && r.correct_choice_index < r.choices.length)
  if (!mapped.length) throw new Error('แปลง CSV ไม่ได้ — ตรวจสอบว่าหัวตารางตรงกับที่คำสั่งกำหนด และคอลัมน์ "ตัวเลือกที่ถูก" ชี้ไปที่ตัวเลือกที่มีข้อความจริง')
  return mapped
}

function _renderAIGenerator(teacher, bank) {
  let drafts = []

  // เต็มหน้าจอ (ไม่ใช่ป๊อบอัพแคบตรงกลาง) — ตอนตรวจสอบ+ยืนยันทีละข้อ ถ้าสร้างมา
  // หลายข้อ (สูงสุด 25 ครั้งในระบบ ไม่จำกัดถ้าคัดลอกไปใช้ AI ภายนอก) พื้นที่แคบ
  // ทำให้เลื่อนดูลำบาก จึงใช้ pattern เดียวกับหน้า "ทดลองทำข้อสอบ" ของครู —
  // หัวข้อ/ปุ่มปิดค้างด้านบน เนื้อหาเลื่อนตรงกลาง ปุ่มบันทึกค้างด้านล่างเสมอ
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[95] bg-white flex flex-col'
  modal.innerHTML = `
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">✨ AI ช่วยคิดข้อสอบ</h3>
      <button id="ai-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
    </div>

    <div class="flex-1 overflow-y-auto p-5">
      <div class="max-w-3xl mx-auto space-y-4">
        <p class="text-xs text-gray-400">AI จะร่างคำถามให้เป็นแบบร่าง — <strong>ครูต้องตรวจสอบและกดยืนยันความถูกต้องทีละข้อก่อนบันทึกเข้าคลังจริงเสมอ</strong> (ไม่ว่าจะสร้างด้วยวิธีไหนก็ตาม)</p>

        <div class="flex gap-2">
          <button id="ai-mode-inapp" class="ai-mode-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-purple-600 bg-purple-600 text-white">🤖 ให้ AI ในระบบสร้างให้เลย</button>
          <button id="ai-mode-copy" class="ai-mode-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-gray-200 text-gray-500">📋 คัดลอกคำสั่งไปใช้ AI อื่น</button>
        </div>

        <div class="bg-purple-50 border border-purple-100 rounded-2xl p-4 space-y-3">
          <div>
            <label class="text-xs font-semibold text-gray-600 mb-1 block">หัวข้อ/เนื้อหาที่ต้องการให้ออกข้อสอบ</label>
            <input id="ai-topic" class="${INPUT_CLS}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว, การสังเคราะห์แสง, หลักธรรมอริยสัจ 4" />
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <label id="ai-count-label" class="text-xs font-semibold text-gray-600 mb-1 block">จำนวนข้อ (สูงสุด 25/ครั้ง)</label>
              <input id="ai-count" type="number" min="1" value="5" class="${INPUT_CLS}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ตัวเลือกต่อข้อ</label>
              <input id="ai-choices-count" type="number" min="2" max="5" value="4" class="${INPUT_CLS}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ระดับความยาก</label>
              <select id="ai-difficulty" class="${SELECT_CLS}">
                <option value="">— ผสมกันไป —</option>
                <option value="ง่าย">ง่าย</option>
                <option value="ปานกลาง">ปานกลาง</option>
                <option value="ยาก">ยาก</option>
              </select>
            </div>
          </div>

          <button id="btn-ai-run" class="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-sm">สร้างข้อสอบด้วย AI</button>

          <div id="ai-copy-panel" class="hidden space-y-3 pt-1">
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">รูปแบบคำตอบที่จะขอจาก AI</label>
              <div class="flex gap-2">
                <button id="ai-format-json" class="ai-format-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-purple-600 bg-purple-600 text-white">JSON</button>
                <button id="ai-format-csv" class="ai-format-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-gray-200 text-gray-500">CSV</button>
              </div>
            </div>
            <button id="btn-ai-build-prompt" class="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-sm">สร้างคำสั่ง (Prompt)</button>
            <div id="ai-prompt-wrap" class="hidden space-y-2">
              <label class="text-xs font-semibold text-gray-600 block">คัดลอกคำสั่งนี้ไปวางใน ChatGPT, Gemini หรือ AI อื่นที่ต้องการ</label>
              <textarea id="ai-prompt-text" class="${INPUT_CLS} font-mono text-xs" rows="6" readonly></textarea>
              <button id="btn-ai-copy-prompt" class="w-full py-2 rounded-xl border border-purple-300 text-purple-700 hover:bg-purple-100 font-bold text-xs">📋 คัดลอกคำสั่ง</button>
            </div>
            <div class="pt-2 border-t border-purple-100">
              <label class="text-xs font-semibold text-gray-600 mb-1 block">วางคำตอบที่ได้จาก AI ที่นี่ (JSON หรือ CSV ก็ได้ ระบบจะตรวจให้เอง)</label>
              <textarea id="ai-paste-response" class="${INPUT_CLS} font-mono text-xs" rows="6" placeholder="วางคำตอบทั้งหมดที่ AI ตอบกลับมา"></textarea>
              <button id="btn-ai-parse-response" class="w-full mt-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm">แปลงคำตอบเป็นคำถามร่าง</button>
            </div>
          </div>
        </div>

        <div id="ai-draft-list" class="space-y-3"></div>
      </div>
    </div>

    <div class="flex gap-2 px-5 py-4 border-t border-gray-100 flex-shrink-0 bg-white">
      <button id="ai-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ปิด</button>
      <button id="ai-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm hidden">บันทึกข้อที่ยืนยันแล้ว (0)</button>
    </div>
  `
  document.body.appendChild(modal)
  modal.querySelector('#ai-close').addEventListener('click', () => modal.remove())
  modal.querySelector('#ai-cancel').addEventListener('click', () => modal.remove())

  const listEl = modal.querySelector('#ai-draft-list')
  const saveBtn = modal.querySelector('#ai-save')
  const runBtn = modal.querySelector('#btn-ai-run')
  const copyPanel = modal.querySelector('#ai-copy-panel')
  const modeInappBtn = modal.querySelector('#ai-mode-inapp')
  const modeCopyBtn = modal.querySelector('#ai-mode-copy')
  const countLabel = modal.querySelector('#ai-count-label')
  const formatJsonBtn = modal.querySelector('#ai-format-json')
  const formatCsvBtn = modal.querySelector('#ai-format-csv')

  let currentMode = 'inapp' // 'inapp' | 'copy' — controls whether the 25-question cap (our own edge function's token budget) applies
  let responseFormat = 'json' // 'json' | 'csv' — only relevant in 'copy' mode

  const setMode = (mode) => {
    currentMode = mode
    const isInapp = mode === 'inapp'
    runBtn.classList.toggle('hidden', !isInapp)
    copyPanel.classList.toggle('hidden', isInapp)
    modeInappBtn.classList.toggle('border-purple-600', isInapp)
    modeInappBtn.classList.toggle('bg-purple-600', isInapp)
    modeInappBtn.classList.toggle('text-white', isInapp)
    modeInappBtn.classList.toggle('border-gray-200', !isInapp)
    modeInappBtn.classList.toggle('text-gray-500', !isInapp)
    modeCopyBtn.classList.toggle('border-purple-600', !isInapp)
    modeCopyBtn.classList.toggle('bg-purple-600', !isInapp)
    modeCopyBtn.classList.toggle('text-white', !isInapp)
    modeCopyBtn.classList.toggle('border-gray-200', isInapp)
    modeCopyBtn.classList.toggle('text-gray-500', isInapp)
    countLabel.textContent = isInapp ? 'จำนวนข้อ (สูงสุด 25/ครั้ง)' : 'จำนวนข้อ (ไม่จำกัด — สร้างที่ AI ภายนอก)'
  }
  modeInappBtn.addEventListener('click', () => setMode('inapp'))
  modeCopyBtn.addEventListener('click', () => setMode('copy'))

  const setFormat = (format) => {
    responseFormat = format
    const isJson = format === 'json'
    formatJsonBtn.classList.toggle('border-purple-600', isJson)
    formatJsonBtn.classList.toggle('bg-purple-600', isJson)
    formatJsonBtn.classList.toggle('text-white', isJson)
    formatJsonBtn.classList.toggle('border-gray-200', !isJson)
    formatJsonBtn.classList.toggle('text-gray-500', !isJson)
    formatCsvBtn.classList.toggle('border-purple-600', !isJson)
    formatCsvBtn.classList.toggle('bg-purple-600', !isJson)
    formatCsvBtn.classList.toggle('text-white', !isJson)
    formatCsvBtn.classList.toggle('border-gray-200', isJson)
    formatCsvBtn.classList.toggle('text-gray-500', isJson)
    modal.querySelector('#ai-prompt-wrap').classList.add('hidden') // stale prompt no longer matches the newly picked format
  }
  formatJsonBtn.addEventListener('click', () => setFormat('json'))
  formatCsvBtn.addEventListener('click', () => setFormat('csv'))

  const _readGenParams = () => {
    const topic = modal.querySelector('#ai-topic').value.trim()
    const rawCount = parseInt(modal.querySelector('#ai-count').value, 10) || 5
    // 25-cap only applies to the in-app call (our gemini-proxy edge function's
    // token budget) — an external AI the teacher copies the prompt to has no
    // such constraint, so let them ask for as many as they want there.
    const count = currentMode === 'inapp' ? Math.min(25, Math.max(1, rawCount)) : Math.max(1, rawCount)
    modal.querySelector('#ai-count').value = count
    const rawChoicesCount = parseInt(modal.querySelector('#ai-choices-count').value, 10) || 4
    const choicesCount = Math.min(5, Math.max(2, rawChoicesCount))
    modal.querySelector('#ai-choices-count').value = choicesCount
    const difficulty = modal.querySelector('#ai-difficulty').value
    return { topic, count, rawCount, choicesCount, difficulty }
  }

  modal.querySelector('#btn-ai-build-prompt').addEventListener('click', () => {
    const { topic, count, choicesCount, difficulty } = _readGenParams()
    if (!topic) { showToast('กรุณาระบุหัวข้อที่ต้องการให้ AI ออกข้อสอบ', 'warning'); return }
    const prompt = _buildExternalAIPrompt({ topic, count, choicesCount, difficulty, format: responseFormat })
    modal.querySelector('#ai-prompt-text').value = prompt
    modal.querySelector('#ai-prompt-wrap').classList.remove('hidden')
  })

  modal.querySelector('#btn-ai-copy-prompt').addEventListener('click', async (e) => {
    const promptEl = modal.querySelector('#ai-prompt-text')
    try {
      await navigator.clipboard.writeText(promptEl.value)
      showToast('คัดลอกคำสั่งแล้ว — ไปวางใน AI ที่ต้องการได้เลย', 'success')
    } catch (err) {
      promptEl.select() // clipboard API blocked — select the text so the teacher can copy manually (Ctrl/Cmd+C)
      showToast('คัดลอกอัตโนมัติไม่ได้ — เลือกข้อความให้แล้ว กด Ctrl/Cmd+C เพื่อคัดลอกเอง', 'warning')
    }
  })

  modal.querySelector('#btn-ai-parse-response').addEventListener('click', (e) => {
    const raw = modal.querySelector('#ai-paste-response').value
    if (!raw.trim()) { showToast('กรุณาวางคำตอบจาก AI ก่อน', 'warning'); return }
    try {
      const generated = _parseExternalAIResponse(raw)
      drafts.push(...generated.map(_normalizeAIQuestion))
      _renderDrafts()
      modal.querySelector('#ai-paste-response').value = ''
      showToast(`แปลงคำตอบสำเร็จ ${generated.length} ข้อ — กรุณาตรวจสอบและยืนยันทีละข้อ`, 'success')
    } catch (err) {
      showToast('แปลงคำตอบไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  })

  function _updateSaveButton() {
    const confirmedCount = drafts.filter(d => d.confirmed).length
    saveBtn.textContent = `บันทึกข้อที่ยืนยันแล้ว (${confirmedCount})`
    saveBtn.classList.toggle('hidden', drafts.length === 0)
  }

  function _renderDrafts() {
    listEl.innerHTML = drafts.map((d, i) => `
      <div class="bg-white border ${d.confirmed ? 'border-emerald-300' : 'border-gray-200'} rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between">
          <p class="text-xs text-gray-400">ข้อร่างที่ ${i + 1}${d.difficulty ? ` · ${_htmlEsc(d.difficulty)}` : ''}</p>
          <button class="d-delete text-xs text-red-400 hover:text-red-600" data-idx="${i}">🗑️ ลบข้อนี้</button>
        </div>
        <textarea class="d-qtext ${INPUT_CLS}" rows="2" data-idx="${i}">${_htmlEsc(d.question_text)}</textarea>
        <div class="space-y-1.5">
          ${d.choices.map((c, ci) => `
            <div class="flex items-center gap-2">
              <input type="radio" name="d-correct-${i}" value="${ci}" ${ci === d.correct_choice_index ? 'checked' : ''} class="d-correct-radio flex-shrink-0" data-idx="${i}" data-ci="${ci}" />
              <input class="d-choice ${INPUT_CLS}" value="${_htmlEsc(c)}" data-idx="${i}" data-ci="${ci}" />
            </div>
          `).join('')}
        </div>
        <textarea class="d-explanation ${INPUT_CLS}" rows="1" placeholder="คำอธิบายเฉลย (ไม่บังคับ)" data-idx="${i}">${_htmlEsc(d.explanation)}</textarea>
        <label class="flex items-center gap-2 text-xs font-semibold ${d.confirmed ? 'text-emerald-700' : 'text-gray-500'}">
          <input type="checkbox" class="d-confirm" data-idx="${i}" ${d.confirmed ? 'checked' : ''} /> ✅ ตรวจสอบแล้ว ถูกต้อง พร้อมบันทึก
        </label>
      </div>
    `).join('')

    loadKaTeX().then(() => renderMathIn(listEl)).catch(() => {})

    listEl.querySelectorAll('.d-qtext').forEach(el => el.addEventListener('input', () => {
      drafts[+el.dataset.idx].question_text = el.value
    }))
    listEl.querySelectorAll('.d-choice').forEach(el => el.addEventListener('input', () => {
      drafts[+el.dataset.idx].choices[+el.dataset.ci] = el.value
    }))
    listEl.querySelectorAll('.d-correct-radio').forEach(el => el.addEventListener('change', () => {
      drafts[+el.dataset.idx].correct_choice_index = +el.dataset.ci
    }))
    listEl.querySelectorAll('.d-explanation').forEach(el => el.addEventListener('input', () => {
      drafts[+el.dataset.idx].explanation = el.value
    }))
    listEl.querySelectorAll('.d-delete').forEach(el => el.addEventListener('click', () => {
      drafts.splice(+el.dataset.idx, 1)
      _renderDrafts()
      _updateSaveButton()
    }))
    listEl.querySelectorAll('.d-confirm').forEach(el => el.addEventListener('change', () => {
      const idx = +el.dataset.idx
      if (el.checked) {
        const check = _validateDraftQuestion(drafts[idx])
        if (!check.ok) {
          el.checked = false
          showToast(check.error, 'warning')
          return
        }
      }
      drafts[idx].confirmed = el.checked
      _renderDrafts()
      _updateSaveButton()
    }))

    _updateSaveButton()
  }

  modal.querySelector('#btn-ai-run').addEventListener('click', async (e) => {
    const { topic, count, rawCount, choicesCount, difficulty } = _readGenParams()

    if (!topic) { showToast('กรุณาระบุหัวข้อที่ต้องการให้ AI ออกข้อสอบ', 'warning'); return }
    if (rawCount > 25) showToast('จำนวนข้อเกินเพดานที่รองรับต่อครั้ง ปรับให้เป็น 25 ข้อแล้ว', 'warning')

    setButtonLoading(e.target, true)
    try {
      const prompt = _buildAIPrompt({ topic, count, choicesCount, difficulty })

      // Thai text tokenizes heavier than English, and each question carries a
      // question+choices+explanation — budget generously per question instead
      // of a flat cap, or large counts get silently truncated mid-JSON.
      const maxTokens = Math.min(8000, 600 + count * 300)

      const { data: json, error: fnErr } = await supabase.functions.invoke('gemini-proxy', {
        body: { prompt, maxTokens }
      })
      if (fnErr || !json) throw new Error(fnErr?.message ?? 'AI Response is empty')

      let text = ''
      if (json.candidates?.[0]?.content?.parts) {
        text = json.candidates[0].content.parts[0].text ?? ''
      } else if (json.text) {
        text = json.text
      }

      const generated = _parseAIJsonArray(text)

      drafts.push(...generated.map(_normalizeAIQuestion))
      _renderDrafts()
      showToast(`AI ร่างข้อสอบมาแล้ว ${generated.length} ข้อ — กรุณาตรวจสอบและยืนยันทีละข้อ`, 'success')
    } catch (err) {
      showToast('AI ไม่สามารถร่างข้อสอบได้: ' + (err.message ?? ''), 'error')
    } finally {
      setButtonLoading(e.target, false, 'สร้างข้อสอบด้วย AI')
    }
  })

  saveBtn.addEventListener('click', async () => {
    const toSave = []
    const stillPending = []
    drafts.forEach(d => {
      if (!d.confirmed) { stillPending.push(d); return }
      const kept = d.choices.map((v, ci) => ({ v: v.trim(), ci })).filter(x => x.v)
      const choices = kept.map(x => x.v)
      const correctIndex = kept.findIndex(x => x.ci === d.correct_choice_index)
      if (!d.question_text.trim() || choices.length < 2 || correctIndex < 0) { stillPending.push(d); return }
      toSave.push({
        question_text: d.question_text.trim(),
        choices,
        correct_choice_index: correctIndex,
        explanation: d.explanation.trim() || null,
        difficulty: d.difficulty,
        category: null,
      })
    })

    if (toSave.length === 0) { showToast('ยังไม่มีข้อที่ยืนยันแล้วพร้อมบันทึก', 'warning'); return }

    setButtonLoading(saveBtn, true)
    try {
      await bulkImportQuizQuestions(bank.id, toSave)
      showToast(`บันทึก ${toSave.length} ข้อเข้าคลังเรียบร้อย`, 'success')
      drafts = stillPending
      _renderDrafts()
      if (drafts.length === 0) {
        modal.remove()
        _renderBankQuestions(teacher, bank)
      }
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      setButtonLoading(saveBtn, false)
      _updateSaveButton()
    }
  })
}
