// js/teacher-views-quiz-banks.js
import { getTeacherPackageAccess } from './api.js'
import {
  getQuizBanks, createQuizBank, updateQuizBank, deleteQuizBank,
  getQuizQuestions, createQuizQuestion, bulkImportQuizQuestions, updateQuizQuestion, deleteQuizQuestion
} from './quiz-api.js'
import { parseCSV } from './import.js'
import { showToast, showDangerConfirm, setButtonLoading } from './ui.js'
import { setContent, setTitle, setActiveNav, _htmlEsc, SELECT_CLS, INPUT_CLS } from './teacher-views-utils.js'
import { loadKaTeX, renderMathIn } from './katex-loader.js'

const CSV_HEADERS = ['คำถาม', 'ตัวเลือก1', 'ตัวเลือก2', 'ตัวเลือก3', 'ตัวเลือก4', 'ตัวเลือก5', 'ตัวเลือกที่ถูก', 'คำอธิบายเฉลย', 'ระดับความยาก', 'หมวดหมู่']

function _lockedScreen(minTier) {
  setContent(`
    <div class="flex flex-col items-center justify-center text-center gap-4 py-20">
      <div class="text-6xl">🔒</div>
      <p class="font-bold text-gray-700 text-lg">ฟีเจอร์สำหรับผู้สนับสนุนระดับ ${minTier}+</p>
      <p class="text-sm text-gray-500 leading-relaxed max-w-xs">ระบบแบบทดสอบออนไลน์ (คลังข้อสอบ + สุ่มข้อ + anti-cheat + สถิติ)<br>เปิดให้ใช้งานเมื่อสนับสนุนโครงการถึงระดับที่กำหนด</p>
      <button id="quiz-upgrade" class="mt-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-lg"
        style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดระดับ</button>
    </div>
  `)
  document.getElementById('quiz-upgrade')?.addEventListener('click', () => document.getElementById('btn-donate-float')?.click())
}

export async function renderQuizBanks(teacher) {
  if (!teacher) return
  setActiveNav('quiz-system')
  setTitle('ระบบแบบทดสอบออนไลน์ (Quiz)')
  setContent(`<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>`)

  const packageAccess = await getTeacherPackageAccess(teacher.id).catch(() => ({ hasSemester: false }))
  const donorTier = window._pp5DonorTierIndex ?? 0
  const isPremium = donorTier >= 2 || packageAccess.hasSemester
  if (!isPremium) { _lockedScreen(2); return }

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
              <button class="btn-delete-q px-2 py-1 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs" data-id="${q.id}">🗑️</button>
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
        const mapped = rows.map(r => {
          const rawChoices = [r['ตัวเลือก1'], r['ตัวเลือก2'], r['ตัวเลือก3'], r['ตัวเลือก4'], r['ตัวเลือก5']]
            .map(c => (c ?? '').trim())
          const correctRawIdx = parseInt(r['ตัวเลือกที่ถูก'], 10) - 1
          // filter(Boolean) shifts indices — recompute correct_choice_index against the
          // post-filter position instead of assuming it still matches the raw CSV column.
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
        }).filter(r => r.question_text && r.choices.length >= 2 &&
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

function _renderQuestionForm(teacher, bank) {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto'
  modal.innerHTML = `
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-4">เพิ่มคำถามใหม่</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำถาม</label>
          <textarea id="q-text" class="${INPUT_CLS}" rows="2"></textarea>
          <p class="text-xs text-gray-400 mt-1">รองรับสมการคณิตศาสตร์ด้วย LaTeX เช่น <code>$x^2+2x+1=0$</code></p>
          <div id="q-preview" class="hidden mt-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm"></div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ตัวเลือก (เลือกข้อที่ถูกต้องด้วยปุ่มวิทยุด้านซ้าย)</label>
          <div class="space-y-2" id="q-choices">
            ${[0, 1, 2, 3].map(i => `
              <div class="flex items-center gap-2">
                <input type="radio" name="q-correct" value="${i}" ${i === 0 ? 'checked' : ''} class="flex-shrink-0" />
                <input class="${INPUT_CLS} q-choice-input" placeholder="ตัวเลือกที่ ${i + 1}" />
              </div>
            `).join('')}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ระดับความยาก</label>
            <select id="q-difficulty" class="${SELECT_CLS}">
              <option value="">— ไม่ระบุ —</option>
              <option value="ง่าย">ง่าย</option>
              <option value="ปานกลาง">ปานกลาง</option>
              <option value="ยาก">ยาก</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">หมวดหมู่</label>
            <input id="q-category" class="${INPUT_CLS}" placeholder="ไม่บังคับ" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบายเฉลย (ไม่บังคับ)</label>
          <textarea id="q-explanation" class="${INPUT_CLS}" rows="2"></textarea>
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
      await createQuizQuestion({
        bank_id: bank.id,
        question_text: questionText,
        choices,
        correct_choice_index: correctIndex,
        explanation: modal.querySelector('#q-explanation').value.trim() || null,
        difficulty: modal.querySelector('#q-difficulty').value || null,
        category: modal.querySelector('#q-category').value.trim() || null,
      })
      showToast('เพิ่มคำถามแล้ว', 'success')
      modal.remove()
      _renderBankQuestions(teacher, bank)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      setButtonLoading(e.target, false, 'บันทึก')
    }
  })
}
