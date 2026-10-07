import {
  getSystemConfig, getTeachers, getSubjectCatalogAdmin, createSubjectCatalog,
  updateSubjectCatalog, setSubjectCatalogActive, getMasterSubjectsAdmin,
  createSubject, updateSubjectAtomic, deleteSubject, setMasterSubjectActive,
  getMasterSubjectDependencies,
} from './api.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
import { createAIPromptCopyGate } from './ai-prompt-gate.js'

const SCHEMA_VERSION = 'pp5.subject_catalog.v1'
const GROUPS = [
  ['', 'ไม่ระบุ'], ['ACDM', 'สามัญมัธยม'], ['AGM', 'ศาสนามัธยม'],
  ['ACDMVOC', 'สามัญปวช'], ['AGMVOC', 'ศาสนาปวช'],
]
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]))
const text = value => String(value ?? '').trim()
const norm = value => text(value).normalize('NFKC').toLocaleLowerCase('th-TH').replace(/[^\p{L}\p{N}]+/gu, '')
const keyFor = row => `${norm(row.subject_code)}|${norm(row.subject_name)}|${norm(row.subject_group)}|${norm(row.grade_level)}|${row.academic_year || ''}|${row.semester || ''}`
const input = (name, label, value = '', type = 'text', extra = '') => `<label class="block text-sm font-semibold text-gray-700">${label}<input name="${name}" type="${type}" value="${esc(value)}" ${extra} class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5" /></label>`

function termOptions(year, semester) {
  return [year - 1, year, year + 1].flatMap(y => [1, 2].map(s => `<option value="${y}|${s}" ${y === year && s === semester ? 'selected' : ''}>${s}/${y}</option>`)).join('')
}

function parseJSON(raw) {
  let data
  try { data = JSON.parse(text(raw).replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')) } catch { throw new Error('JSON ไม่ถูกต้อง กรุณาวาง JSON จาก AI') }
  if (data?.schema_version !== SCHEMA_VERSION || data?.type !== 'subject_catalog') throw new Error(`ต้องเป็น JSON รายวิชาประเภท ${SCHEMA_VERSION}`)
  const rows = Array.isArray(data.entries) ? data.entries : Array.isArray(data.subjects) ? data.subjects : []
  if (!rows.length) throw new Error('JSON ยังไม่มี entries หรือ subjects')
  return { ...data, entries: rows.map((row, index) => {
    const result = {
      sourceIndex: index + 1,
      catalog_key: text(row.catalog_key || `${row.subject_code || ''}|${row.subject_name || ''}|${row.academic_year || ''}|${row.semester || ''}`),
      subject_code: text(row.subject_code), subject_name: text(row.subject_name),
      subject_name_arabic: text(row.subject_name_arabic), credit: row.credit === '' || row.credit == null ? null : Number(row.credit),
      subject_group: text(row.subject_group), dept_label: text(row.dept_label || row.dept), grade_level: text(row.grade_level),
      curriculum: text(row.curriculum), course_type: text(row.course_type), learning_area: text(row.learning_area),
      academic_year: Number(row.academic_year), semester: Number(row.semester), source_file: text(row.source_file),
    }
    if (!result.subject_name) throw new Error(`รายการที่ ${index + 1} ไม่มี subject_name`)
    if (result.credit != null && (!Number.isFinite(result.credit) || result.credit < 0)) throw new Error(`รายการที่ ${index + 1} มีหน่วยกิตไม่ถูกต้อง`)
    if (![1, 2].includes(result.semester)) throw new Error(`รายการที่ ${index + 1} มีภาคเรียนไม่ถูกต้อง`)
    if (!Number.isInteger(result.academic_year) || result.academic_year < 2500) throw new Error(`รายการที่ ${index + 1} มีปีการศึกษาไม่ถูกต้อง`)
    return result
  }) }
}

function buildPrompt(state) {
  return [
    'คุณเป็นผู้ช่วยแปลงไฟล์รายวิชาหลักสูตรเป็น JSON สำหรับระบบ ปพ.5 ออนไลน์',
    'อ่าน Excel, PDF หรือข้อความที่แนบจริงเท่านั้น ห้ามเดาข้อมูลที่อ่านไม่ได้ และห้ามสร้างรายวิชาซ้ำ',
    `ปีการศึกษา/ภาคเรียนเป้าหมาย: ${state.year}/${state.semester}`,
    'ส่ง subject_group ให้ตรงกับค่าที่ระบบรองรับ: ACDM, AGM, ACDMVOC, AGMVOC และส่งกลุ่มสาระใน dept_label',
    'แยกชื่อภาษาอาหรับ รหัสวิชา หน่วยกิต ชั้นปี หลักสูตร ประเภทวิชา และสาระการเรียนรู้ให้เป็นฟิลด์ของตัวเอง',
    `รายการกลุ่มวิชา: ${JSON.stringify(GROUPS)}`,
    '',
    'ตอบกลับเป็น JSON เพียงกล่องเดียวตาม schema นี้:',
    JSON.stringify({ schema_version: SCHEMA_VERSION, type: 'subject_catalog', academic_year: state.year, semester: state.semester, entries: [{ catalog_key: 'ค33102|คณิตศาสตร์พื้นฐาน|2569|2', subject_code: 'ค33102', subject_name: 'คณิตศาสตร์พื้นฐาน', credit: 2, subject_group: 'ACDM', dept_label: 'คณิตศาสตร์', grade_level: 'ม.6', curriculum: 'สามัญ', course_type: 'พื้นฐาน', learning_area: 'คณิตศาสตร์', academic_year: state.year, semester: state.semester }] }, null, 2),
  ].join('\n')
}

async function renderAIImport({ state, onBack }) {
  const main = document.getElementById('main-content')
  document.getElementById('page-title').textContent = 'นำเข้ารายวิชาด้วย AI'
  const local = { files: [], rows: [], existing: state.catalog }
  main.innerHTML = `<div class="mx-auto max-w-7xl animate-fade space-y-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><button data-back class="mb-2 text-sm font-semibold text-gray-500 hover:text-indigo-600">← กลับไปจัดการรายวิชา</button><h2 class="text-xl font-extrabold text-gray-800">🤖 นำเข้ารายวิชาด้วย AI</h2><p class="text-sm text-gray-500">หน้านี้เปิดแยกจากหน้าหลัก เพื่อให้ตรวจข้อมูลก่อนบันทึกจริง</p></div><span class="rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">${state.year}/${state.semester}</span></div><section class="rounded-2xl border border-violet-100 bg-violet-50 p-5"><div class="flex flex-wrap items-center justify-between gap-3"><div><h3 class="font-bold text-violet-900">สร้าง Prompt รายวิชา</h3><p class="mt-1 text-xs text-violet-700">เลือกไฟล์แล้วแนบไฟล์เดียวกันตอนสั่ง AI ภายนอก</p></div><div class="flex flex-wrap gap-2"><button data-generate type="button" class="rounded-xl bg-violet-700 px-3 py-2 text-xs font-bold text-white">⚡ สร้าง Prompt</button><button data-copy hidden disabled aria-disabled="true" class="rounded-xl border border-violet-200 bg-white px-3 py-2 text-xs font-bold text-violet-700 disabled:opacity-40">📋 คัดลอก Prompt</button><label class="cursor-pointer rounded-xl bg-violet-700 px-3 py-2 text-xs font-bold text-white">📎 เลือกไฟล์<input data-files type="file" multiple accept=".xlsx,.xls,.csv,.pdf,.png,.jpg,.jpeg,.html" class="hidden" /></label></div></div><textarea data-prompt readonly rows="14" placeholder="กด ⚡ สร้าง Prompt หลังเลือกไฟล์อ้างอิง" class="mt-4 w-full rounded-xl border border-violet-100 bg-white p-3 font-mono text-[11px] leading-relaxed"></textarea><div data-file-list class="mt-2 flex flex-wrap gap-1 text-[11px] text-gray-500"></div></section><section class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"><div class="flex items-center justify-between gap-3"><div><h3 class="font-bold text-gray-800">วาง JSON จาก AI</h3><p class="mt-1 text-xs text-gray-500">ระบบจะตรวจข้อมูลซ้ำก่อนเปิด Preview</p></div><button data-parse class="rounded-xl bg-indigo-700 px-4 py-2.5 text-xs font-bold text-white">🔎 ตรวจ JSON และ Preview</button></div><textarea data-json rows="10" class="mt-4 w-full rounded-xl border border-gray-200 p-3 font-mono text-[11px] leading-relaxed" placeholder="วาง JSON ประเภท pp5.subject_catalog.v1"></textarea><div data-message class="mt-3 hidden rounded-xl px-3 py-2 text-xs"></div></section><section data-preview class="hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"></section></div>`
  const message = (value, good = false) => { const el = main.querySelector('[data-message]'); el.className = `mt-3 rounded-xl border px-3 py-2 text-xs ${good ? 'border-emerald-100 bg-emerald-50 text-emerald-700' : 'border-rose-100 bg-rose-50 text-rose-700'}`; el.textContent = value }
  const updatePrompt = () => { main.querySelector('[data-prompt]').value = buildPrompt({ ...state, fileNames: local.files }) }
  const promptGate = createAIPromptCopyGate({ copyButton: main.querySelector('[data-copy]') })
  main.querySelector('[data-back]').addEventListener('click', () => onBack())
  main.querySelector('[data-files]').addEventListener('change', event => { local.files = [...event.target.files].map(file => file.name); main.querySelector('[data-file-list]').innerHTML = local.files.map(file => `<span class="rounded-lg bg-sky-100 px-2 py-1">${esc(file)}</span>`).join(''); main.querySelector('[data-prompt]').value = ''; promptGate.invalidate() })
  main.querySelector('[data-generate]').addEventListener('click', () => { updatePrompt(); promptGate.markGenerated(); showToast('สร้าง Prompt รายวิชาแล้ว', 'success') })
  main.querySelector('[data-copy]').addEventListener('click', async () => { if (!promptGate.isReady()) { showToast('กรุณากด “สร้าง Prompt” ใหม่หลังเปลี่ยนไฟล์ก่อนคัดลอก', 'warning'); return }; try { await navigator.clipboard.writeText(main.querySelector('[data-prompt]').value) } catch { main.querySelector('[data-prompt]').select(); document.execCommand('copy') }; showToast('คัดลอก Prompt รายวิชาแล้ว', 'success') })
  main.querySelector('[data-parse]').addEventListener('click', () => {
    try {
      const parsed = parseJSON(main.querySelector('[data-json]').value)
      const seen = new Set(); const existing = new Set(local.existing.map(keyFor))
      local.rows = parsed.entries.map(row => { const key = keyFor(row); const duplicate = seen.has(key) || existing.has(key); seen.add(key); return { row, duplicate } })
      const preview = main.querySelector('[data-preview]')
      preview.innerHTML = `<div class="flex flex-wrap items-start justify-between gap-3"><div><h3 class="font-bold text-gray-800">Preview รายวิชาก่อนบันทึก</h3><p class="mt-1 text-xs text-gray-500">ทั้งหมด ${local.rows.length} รายการ · ซ้ำ/มีอยู่แล้ว ${local.rows.filter(item => item.duplicate).length} รายการ</p></div><button data-import class="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white">💾 ยืนยันนำเข้าเฉพาะรายการไม่ซ้ำ</button></div><div class="mt-4 max-h-[55vh] overflow-auto rounded-xl border border-gray-100"><table class="w-full min-w-[1000px] text-left text-xs"><thead class="sticky top-0 bg-gray-50 text-gray-500"><tr><th class="px-3 py-2">รายการ</th><th class="px-3 py-2">รหัส/ชื่อ</th><th class="px-3 py-2">กลุ่มวิชา/สาระ</th><th class="px-3 py-2">ชั้น/หน่วยกิต</th><th class="px-3 py-2">สถานะ</th></tr></thead><tbody class="divide-y divide-gray-100">${local.rows.map(item => `<tr><td class="px-3 py-2">#${item.row.sourceIndex}</td><td class="px-3 py-2"><b>${esc(item.row.subject_code || '—')}</b><div>${esc(item.row.subject_name)}</div></td><td class="px-3 py-2">${esc(item.row.subject_group || '—')}<div class="text-gray-400">${esc(item.row.dept_label || '—')}</div></td><td class="px-3 py-2">${esc(item.row.grade_level || '—')} · ${esc(item.row.credit ?? '—')}</td><td class="px-3 py-2">${item.duplicate ? '<span class="font-bold text-amber-600">ซ้ำ — จะข้าม</span>' : '<span class="font-bold text-emerald-600">พร้อมนำเข้า</span>'}</td></tr>`).join('')}</tbody></table></div>`
      preview.classList.remove('hidden')
      preview.querySelector('[data-import]').addEventListener('click', async event => {
        const rows = local.rows.filter(item => !item.duplicate).map(item => item.row).map(({ sourceIndex, ...row }) => row)
        if (!rows.length) { message('ไม่มีรายการใหม่ให้บันทึก', false); return }
        event.target.disabled = true; event.target.textContent = 'กำลังบันทึก...'
        try { await Promise.all(rows.map(row => createSubjectCatalog(row))); showToast(`นำเข้ารายวิชาใหม่ ${rows.length} รายการแล้ว`, 'success'); message(`บันทึกสำเร็จ ${rows.length} รายการ รายการซ้ำถูกข้ามโดยอัตโนมัติ`, true); event.target.textContent = 'นำเข้าเรียบร้อยแล้ว' } catch (error) { message(`บันทึกไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, false); event.target.disabled = false; event.target.textContent = '💾 ยืนยันนำเข้าเฉพาะรายการไม่ซ้ำ' }
      })
      message(`อ่าน JSON สำเร็จ ${local.rows.length} รายการ`, true)
    } catch (error) { message(error.message, false) }
  })
}

function renderEditor({ kind, row, state, onSaved, onClose }) {
  const isCatalog = kind === 'catalog'
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
  const groupOptions = GROUPS.map(([value, label]) => `<option value="${value}" ${row?.subject_group === value ? 'selected' : ''}>${label}${value ? ` (${value})` : ''}</option>`).join('')
  const teacherOptions = state.teachers.map(teacher => `<option value="${teacher.id}" ${String(row?.teacher_id || '') === String(teacher.id) ? 'selected' : ''}>${esc(teacher.full_name)}${teacher.teacher_code ? ` (${esc(teacher.teacher_code)})` : ''}</option>`).join('')
  const catalogOptions = state.catalog.filter(item => item.is_active).map(item => `<option value="${item.id}" ${String(row?.catalog_id || '') === String(item.id) ? 'selected' : ''}>${esc(item.subject_code || '—')} · ${esc(item.subject_name)}</option>`).join('')
  const source = isCatalog ? row : row || {}
  modal.innerHTML = `<div class="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"><div class="flex items-start justify-between"><div><h2 class="text-lg font-extrabold text-gray-800">${row ? 'แก้ไข' : 'เพิ่ม'}${isCatalog ? 'รายวิชาต้นแบบ' : 'คอร์สที่เปิดสอนจริง'}</h2><p class="mt-1 text-xs text-gray-500">${isCatalog ? 'รายการกลางจากหลักสูตร ใช้เป็นต้นทางให้ครูเลือก' : 'คอร์สที่มีครูผู้สอนและเปิดใช้งานในภาคเรียนจริง'}</p></div><button data-close class="text-2xl text-gray-400">×</button></div><form data-form class="mt-5 grid gap-4 md:grid-cols-2">${isCatalog ? input('catalog_key', 'คีย์รายการ *', source.catalog_key || `${source.subject_code || ''}|${source.subject_name || ''}|${state.year}|${state.semester}`, 'text', 'required') : `<label class="block text-sm font-semibold text-gray-700">ครูผู้สอน *<select name="teacher_id" required class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5"><option value="">— เลือกครู —</option>${teacherOptions}</select></label><label class="block text-sm font-semibold text-gray-700">รายวิชาต้นแบบ<select name="catalog_id" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5"><option value="">— ไม่ผูกต้นแบบ —</option>${catalogOptions}</select></label>`}${input('subject_code', 'รหัสวิชา', source.subject_code)}${input('subject_name', 'ชื่อวิชา *', source.subject_name, 'text', 'required')}${isCatalog ? input('subject_name_arabic', 'ชื่อภาษาอาหรับ', source.subject_name_arabic) : input('skill_group', 'กลุ่มทักษะ', source.skill_group)}${input(isCatalog ? 'dept_label' : 'dept', 'กลุ่มสาระ', source.dept_label || source.dept)}<label class="block text-sm font-semibold text-gray-700">กลุ่มวิชา<select name="subject_group" class="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5">${groupOptions}</select></label>${input('learning_area', 'สาระการเรียนรู้', source.learning_area)}${input('grade_level', 'ชั้นปี/ระดับ', source.grade_level)}${input('credit', 'หน่วยกิต', source.credit ?? '', 'number', 'min="0" step="0.5"')}${isCatalog ? input('curriculum', 'หลักสูตร', source.curriculum) + input('course_type', 'ประเภทวิชา', source.course_type) : ''}${input('academic_year', 'ปีการศึกษา', source.academic_year || state.year, 'number', 'required min="2500"')}${input('semester', 'ภาคเรียน', source.semester || state.semester, 'number', 'required min="1" max="2"')}${isCatalog ? input('source_file', 'ไฟล์ต้นทาง', source.source_file) : ''}<div class="md:col-span-2 hidden rounded-xl border border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-700" data-error></div><div class="md:col-span-2 flex justify-end gap-2 border-t border-gray-100 pt-4"><button type="button" data-close class="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600">ยกเลิก</button><button type="submit" class="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white">บันทึก</button></div></form></div>`
  document.body.appendChild(modal)
  const close = () => { modal.remove(); onClose?.() }
  modal.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', close))
  modal.querySelector('[data-form]').addEventListener('submit', async event => {
    event.preventDefault(); const form = event.currentTarget; const get = name => form[name]?.value.trim() || null
    const payload = { subject_code: get('subject_code'), subject_name: get('subject_name'), subject_group: get('subject_group'), learning_area: get('learning_area'), grade_level: get('grade_level'), credit: get('credit') == null ? null : Number(get('credit')), academic_year: Number(get('academic_year')), semester: Number(get('semester')) }
    if (isCatalog) Object.assign(payload, { catalog_key: get('catalog_key'), subject_name_arabic: get('subject_name_arabic'), dept_label: get('dept_label'), curriculum: get('curriculum'), course_type: get('course_type'), source_file: get('source_file'), is_active: row?.is_active ?? true })
    else Object.assign(payload, { teacher_id: Number(get('teacher_id')), catalog_id: get('catalog_id') ? Number(get('catalog_id')) : null, dept: get('dept'), skill_group: get('skill_group') })
    const errorEl = form.querySelector('[data-error]'); const button = form.querySelector('button[type="submit"]'); button.disabled = true; button.textContent = 'กำลังบันทึก...'
    try { if (isCatalog) row ? await updateSubjectCatalog(row.id, payload) : await createSubjectCatalog(payload); else row ? await updateSubjectAtomic(row.id, payload) : await createSubject(payload); showToast('บันทึกข้อมูลแล้ว', 'success'); close(); await onSaved() } catch (error) { errorEl.classList.remove('hidden'); errorEl.textContent = getFriendlyErrorMessage(error); button.disabled = false; button.textContent = 'บันทึก' }
  })
}

export async function renderAdminSubjectManagement() {
  const main = document.getElementById('main-content'); if (!main) return
  document.getElementById('page-title').textContent = 'จัดการรายวิชา'
  document.querySelectorAll('[data-nav]').forEach(item => { item.classList.toggle('bg-indigo-800', item.dataset.nav === 'subject-admin'); item.classList.toggle('text-white', item.dataset.nav === 'subject-admin'); item.classList.toggle('text-indigo-200', item.dataset.nav !== 'subject-admin') })
  main.innerHTML = '<div class="flex justify-center py-16 text-gray-400">กำลังโหลดรายวิชาต้นแบบและคอร์ส...</div>'
  try {
    const cfg = await getSystemConfig().catch(() => ({})); const state = { year: Number(cfg.academicYear ?? cfg.academic_year ?? new Date().getFullYear() + 543), semester: Number(cfg.semester ?? 1), teachers: [], catalog: [], courses: [], tab: 'catalog', query: '', active: 'all' }
    const load = async () => { ;[state.teachers, state.catalog, state.courses] = await Promise.all([getTeachers(), getSubjectCatalogAdmin(), getMasterSubjectsAdmin()]) }
    await load()
    const render = () => {
      const q = state.query.toLocaleLowerCase('th-TH')
      const inSelectedTerm = row => Number(row.academic_year) === state.year && Number(row.semester) === state.semester
      const matches = row => inSelectedTerm(row) && (!q || [row.subject_code, row.subject_name, row.dept_label, row.dept, row.subject_group].join(' ').toLocaleLowerCase('th-TH').includes(q)) && (state.active === 'all' || (state.active === 'active' ? row.is_active !== false : row.is_active === false))
      const catalogRows = state.catalog.filter(matches)
      const courseRows = state.courses.filter(matches)
      const rows = state.tab === 'catalog' ? catalogRows : courseRows
      main.innerHTML = `<div class="mx-auto max-w-7xl animate-fade space-y-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="text-xl font-extrabold text-gray-800">📚 จัดการรายวิชา</h2><p class="mt-1 text-sm text-gray-500">แยกรายวิชาต้นแบบออกจากคอร์สที่เปิดสอนจริงอย่างชัดเจน · กำลังแสดง ${state.semester}/${state.year}</p></div><div class="flex flex-wrap gap-2"><button data-ai class="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-bold text-violet-700">🤖 นำเข้าด้วย AI</button><button data-add class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white">＋ ${state.tab === 'catalog' ? 'เพิ่มรายวิชาต้นแบบ' : 'เพิ่มคอร์ส'}</button></div></div><div class="flex flex-wrap gap-2"><button data-tab="catalog" class="rounded-xl px-4 py-2 text-sm font-bold ${state.tab === 'catalog' ? 'bg-indigo-600 text-white' : 'border border-gray-200 bg-white text-gray-600'}">📘 รายวิชาต้นแบบ (${catalogRows.length})</button><button data-tab="course" class="rounded-xl px-4 py-2 text-sm font-bold ${state.tab === 'course' ? 'bg-indigo-600 text-white' : 'border border-gray-200 bg-white text-gray-600'}">🎓 คอร์สที่เปิดสอนจริง (${courseRows.length})</button></div><div class="grid gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:grid-cols-[1fr_180px_180px]"><input data-search value="${esc(state.query)}" placeholder="ค้นหารหัส ชื่อ กลุ่มสาระ..." class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm" /><select data-term class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm">${termOptions(state.year, state.semester)}</select><select data-active class="rounded-xl border border-gray-200 px-3 py-2.5 text-sm"><option value="all" ${state.active === 'all' ? 'selected' : ''}>ทุกสถานะ</option><option value="active" ${state.active === 'active' ? 'selected' : ''}>ใช้งานอยู่</option><option value="inactive" ${state.active === 'inactive' ? 'selected' : ''}>ปิดใช้งาน</option></select></div><div class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"><div class="overflow-x-auto"><table class="w-full min-w-[1100px] text-left text-sm"><thead class="bg-gray-50 text-xs text-gray-500"><tr><th class="px-4 py-3">รหัส/ชื่อวิชา</th><th class="px-4 py-3">กลุ่มวิชา/สาระ</th><th class="px-4 py-3">ชั้น/หน่วยกิต</th><th class="px-4 py-3">${state.tab === 'catalog' ? 'หลักสูตร/แหล่งที่มา' : 'ครูผู้สอน/ภาคเรียน'}</th><th class="px-4 py-3">สถานะ</th><th class="px-4 py-3 text-right">จัดการ</th></tr></thead><tbody class="divide-y divide-gray-100">${rows.map(row => { const teacher = state.teachers.find(item => item.id === row.teacher_id); return `<tr><td class="px-4 py-3"><b>${esc(row.subject_code || '—')}</b><div>${esc(row.subject_name)}</div></td><td class="px-4 py-3">${esc(row.subject_group || '—')}<div class="text-xs text-gray-400">${esc(row.dept_label || row.dept || row.learning_area || '—')}</div></td><td class="px-4 py-3">${esc(row.grade_level || '—')} · ${esc(row.credit ?? '—')}</td><td class="px-4 py-3">${state.tab === 'catalog' ? `${esc(row.curriculum || '—')}<div class="text-xs text-gray-400">${esc(row.source_file || '')}</div>` : `${esc(teacher?.full_name || 'ไม่ระบุครู')}<div class="text-xs text-gray-400">${row.semester || '—'}/${row.academic_year || '—'}</div>`}</td><td class="px-4 py-3">${row.is_active === false ? '<span class="rounded-full bg-gray-100 px-2 py-1 text-[11px] font-bold text-gray-500">ปิดใช้งาน</span>' : '<span class="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">ใช้งานอยู่</span>'}</td><td class="px-4 py-3 text-right"><button data-edit="${row.id}" class="mr-2 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-semibold text-indigo-700">แก้ไข</button>${row.is_active === false ? `<button data-active="${row.id}" data-next="1" class="rounded-lg border border-emerald-100 px-2.5 py-1.5 text-xs font-semibold text-emerald-700">เปิดใช้งาน</button>` : `<button data-active="${row.id}" data-next="0" class="rounded-lg border border-amber-100 px-2.5 py-1.5 text-xs font-semibold text-amber-700">ปิดใช้งาน</button>`}${state.tab === 'course' ? `<button data-delete="${row.id}" class="ml-2 rounded-lg border border-rose-100 px-2.5 py-1.5 text-xs font-semibold text-rose-700">ลบ</button>` : ''}</td></tr>` }).join('') || '<tr><td colspan="6" class="px-4 py-12 text-center text-gray-400">ไม่พบข้อมูล</td></tr>'}</tbody></table></div></div></div>`
      main.querySelectorAll('[data-tab]').forEach(button => button.addEventListener('click', () => { state.tab = button.dataset.tab; state.query = ''; render() }))
      main.querySelector('[data-search]').addEventListener('input', event => { state.query = event.target.value; render() })
      main.querySelector('[data-active]').addEventListener('change', event => { state.active = event.target.value; render() })
      main.querySelector('[data-term]').addEventListener('change', event => { const [year, semester] = event.target.value.split('|').map(Number); state.year = year; state.semester = semester; render() })
      main.querySelector('[data-ai]').addEventListener('click', () => renderAIImport({ state, onBack: render }))
      main.querySelector('[data-add]').addEventListener('click', () => renderEditor({ kind: state.tab, state, onSaved: async () => { await load(); render() }, onClose: render }))
      main.querySelectorAll('[data-edit]').forEach(button => button.addEventListener('click', () => { const row = rows.find(item => String(item.id) === String(button.dataset.edit)); if (row) renderEditor({ kind: state.tab, row, state, onSaved: async () => { await load(); render() }, onClose: render }) }))
      main.querySelectorAll('[data-active]').forEach(button => button.addEventListener('click', async () => { const id = Number(button.dataset.active); try { if (state.tab === 'catalog') await setSubjectCatalogActive(id, button.dataset.next === '1'); else await setMasterSubjectActive(id, button.dataset.next === '1'); showToast(button.dataset.next === '1' ? 'เปิดใช้งานแล้ว' : 'ปิดใช้งานแล้ว', 'success'); await load(); render() } catch (error) { showToast(getFriendlyErrorMessage(error), 'error') } }))
      main.querySelectorAll('[data-delete]').forEach(button => button.addEventListener('click', async () => { const id = Number(button.dataset.delete); const dependencies = await getMasterSubjectDependencies(id); const total = dependencies.classCount + dependencies.scheduleCount + dependencies.docCount; if (total) { showToast(`ลบไม่ได้: มีห้องเรียน ${dependencies.classCount} รายการ ตารางสอน ${dependencies.scheduleCount} รายการ หรือเอกสาร ${dependencies.docCount} รายการผูกอยู่ ให้ใช้ปิดใช้งานแทน`, 'warning'); return } if (!confirm('ยืนยันลบคอร์สนี้หรือไม่?')) return; try { await deleteSubject(id); showToast('ลบคอร์สแล้ว', 'success'); await load(); render() } catch (error) { showToast(`ลบไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, 'error') } }))
    }
    render()
  } catch (error) { main.innerHTML = `<div class="rounded-2xl border border-rose-100 bg-rose-50 p-6 text-sm text-rose-700">โหลดหน้าจัดการรายวิชาไม่สำเร็จ: ${esc(getFriendlyErrorMessage(error))}</div>` }
}
