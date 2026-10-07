import {
  getSystemConfig, getTeachers, getPeriods, getMasterSubjects,
  getScheduleEntriesForTerm, getTeacherNameAliases,
  upsertTeacherNameAliases, upsertScheduleEntries,
} from './api.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'

const SCHEMA_VERSION = 'pp5.school_teacher_schedule.v1'
const SOURCE_SYSTEM = 'school_schedule'
const DAY_NAMES = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์']

const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]))
const text = value => String(value ?? '').trim()
const normalizeCode = value => text(value).toLocaleLowerCase('th-TH').replace(/[^\p{L}\p{N}]+/gu, '')
const normalizeName = value => text(value)
  .normalize('NFKC')
  .toLocaleLowerCase('th-TH')
  .replace(/^(ว่าที่ร้อยตรี|ว่าที่ร้อยโท|ว่าที่ร้อยเอก|ร้อยตรี|ร้อยโท|ร้อยเอก|นางสาว|น\.ส\.?|นาย|นาง|ดร\.?|คุณ)\s*/u, '')
  .replace(/[^\p{L}\p{N}]+/gu, '')

function editDistance(a, b) {
  const aa = [...a], bb = [...b]
  const prev = Array.from({ length: bb.length + 1 }, (_, index) => index)
  for (let i = 1; i <= aa.length; i += 1) {
    const current = [i]
    for (let j = 1; j <= bb.length; j += 1) {
      current[j] = Math.min(
        current[j - 1] + 1,
        prev[j] + 1,
        prev[j - 1] + (aa[i - 1] === bb[j - 1] ? 0 : 1),
      )
    }
    for (let j = 0; j <= bb.length; j += 1) prev[j] = current[j]
  }
  return prev[bb.length]
}

function nameSimilarity(a, b) {
  const aa = normalizeName(a), bb = normalizeName(b)
  if (!aa || !bb) return 0
  if (aa === bb) return 1
  return 1 - editDistance(aa, bb) / Math.max(aa.length, bb.length)
}

function stripJsonFence(value) {
  return text(value).replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')
}

function parseImportJSON(raw) {
  let data
  try { data = JSON.parse(stripJsonFence(raw)) } catch {
    throw new Error('JSON ไม่ถูกต้อง กรุณาวางเฉพาะ JSON หรือกล่องโค้ด json จาก AI')
  }
  if (data?.schema_version !== SCHEMA_VERSION || data?.type !== 'school_teacher_schedule') {
    throw new Error(`ต้องเป็น JSON ตารางสอนทั้งโรงเรียนประเภท ${SCHEMA_VERSION}`)
  }

  const rawEntries = Array.isArray(data.entries)
    ? data.entries
    : Array.isArray(data.teachers)
      ? data.teachers.flatMap(teacher => (teacher.entries ?? []).map(entry => ({
        ...entry,
        teacher_code: entry.teacher_code ?? teacher.teacher_code,
        teacher_name: entry.teacher_name ?? teacher.teacher_name,
      })))
      : []
  if (!rawEntries.length) throw new Error('JSON ยังไม่มี entries รายการตารางสอน')

  const entries = rawEntries.map((entry, index) => {
    const teacherCode = text(entry.teacher_code ?? entry.teacher?.code)
    const teacherName = text(entry.teacher_name ?? entry.teacher?.name)
    const subjectCode = text(entry.subject_code)
    const subjectName = text(entry.subject_name)
    const day = Number(entry.day_of_week)
    const period = Number(entry.period_no)
    const span = Number(entry.span_periods ?? 1)
    if (!teacherCode && !teacherName) throw new Error(`รายการที่ ${index + 1} ไม่มีรหัสหรือชื่อครู`)
    if (!subjectCode && !subjectName) throw new Error(`รายการที่ ${index + 1} ไม่มีรหัสหรือชื่อวิชา`)
    if (!Number.isInteger(day) || day < 0 || day > 5) throw new Error(`รายการที่ ${index + 1} มีวันเรียนไม่ถูกต้อง`)
    if (!Number.isInteger(period) || period < 1) throw new Error(`รายการที่ ${index + 1} มีคาบเรียนไม่ถูกต้อง`)
    if (!Number.isInteger(span) || span < 1 || span > 4) throw new Error(`รายการที่ ${index + 1} มีจำนวนคาบต่อเนื่องไม่ถูกต้อง`)
    return {
      sourceIndex: index + 1,
      teacher_code: teacherCode,
      teacher_name: teacherName,
      subject_code: subjectCode,
      subject_name: subjectName,
      category: text(entry.category ?? entry.teacher_category),
      dept: text(entry.dept ?? entry.teacher_dept),
      class_name: text(entry.class_name ?? entry.room_name ?? entry.room),
      day_of_week: day,
      period_no: period,
      span_periods: span,
      note: text(entry.note),
    }
  })
  return { ...data, entries }
}

function rankCandidates(source, teachers, aliases) {
  const sourceCode = normalizeCode(source.teacher_code)
  const sourceName = normalizeName(source.teacher_name)
  const alias = aliases.find(row => row.normalized_name === sourceName)
  const scored = teachers.map(teacher => {
    const codeMatch = sourceCode && normalizeCode(teacher.teacher_code) === sourceCode
    const exactName = sourceName && normalizeName(teacher.full_name) === sourceName
    const aliasMatch = alias?.teacher_id === teacher.id
    let score = nameSimilarity(source.teacher_name, teacher.full_name)
    if (codeMatch) score = 1
    else if (aliasMatch) score = Math.max(score, 0.99)
    else if (exactName) score = 0.98
    if (source.category && teacher.category === source.category) score += 0.015
    if (source.dept && normalizeName(source.dept) === normalizeName(teacher.dept)) score += 0.015
    return { teacher, score: Math.min(score, 1), exact: Boolean(codeMatch || aliasMatch || exactName) }
  })
  return scored.sort((a, b) => b.score - a.score).slice(0, 5)
}

function buildPrompt({ teachers, subjects, periods, year, semester, fileNames = [] }) {
  const teacherRoster = teachers.map(teacher => ({
    teacher_code: teacher.teacher_code ?? '',
    teacher_name: teacher.full_name ?? '',
    category: teacher.category ?? '',
    dept: teacher.dept ?? '',
  }))
  const subjectRoster = subjects
    .map(subject => ({ subject_code: subject.subject_code ?? '', subject_name: subject.subject_name ?? '' }))
    .filter(subject => subject.subject_code || subject.subject_name)
    .slice(0, 3000)
  const periodRoster = periods.map(period => ({
    period_no: period.period_no,
    time: `${String(period.start_time ?? '').slice(0, 5)}-${String(period.end_time ?? '').slice(0, 5)}`,
  }))
  return [
    'คุณเป็นผู้ช่วยแปลงไฟล์ตารางสอนทั้งโรงเรียนเป็น JSON สำหรับระบบ ปพ.5 ออนไลน์',
    'อ่านไฟล์ที่แนบทั้งหมด แล้วสกัดเฉพาะข้อมูลที่มองเห็นจริง ห้ามเดาชื่อครู รหัสครู วัน หรือคาบที่อ่านไม่ได้',
    `ภาคเรียน: ${semester}/${year}`,
    fileNames.length ? `ไฟล์ที่ผู้ใช้เตรียมแนบ: ${fileNames.join(', ')}` : '',
    '',
    'กติกาการจับคู่ครู:',
    '- ถ้าไฟล์มีรหัสครู ให้ส่ง teacher_code ตามไฟล์ และส่ง teacher_name ตามที่อ่านได้ ห้ามสร้างรหัสใหม่',
    '- ถ้าชื่อครูไม่ชัด ให้ส่งชื่อที่อ่านได้ตามจริง ระบบจะให้แอดมินยืนยันภายหลัง',
    '- ห้ามรวมชื่อครูสองคนเข้าด้วยกันเพียงเพราะชื่อคล้ายกัน',
    '- ช่องว่างไม่ต้องสร้างรายการ',
    '- วัน: 0=อาทิตย์, 1=จันทร์, 2=อังคาร, 3=พุธ, 4=พฤหัสบดี, 5=ศุกร์',
    '- span_periods คือจำนวนคาบต่อเนื่องที่ช่องในไฟล์รวมกัน',
    '',
    'รายชื่อครูอ้างอิงในระบบ:', JSON.stringify(teacherRoster),
    'รายวิชาอ้างอิงในระบบ:', JSON.stringify(subjectRoster),
    'คาบเรียนที่ระบบรองรับ:', JSON.stringify(periodRoster),
    '',
    'ตอบกลับเป็น JSON เพียงกล่องเดียว ห้ามมีคำอธิบายก่อนหรือหลัง ตาม schema นี้:',
    JSON.stringify({
      schema_version: SCHEMA_VERSION,
      type: 'school_teacher_schedule',
      academic_year: year,
      semester,
      entries: [{
        teacher_code: '1087', teacher_name: 'ชื่อครูตามไฟล์',
        subject_code: 'ค33102', subject_name: 'คณิตศาสตร์พื้นฐาน',
        class_name: 'ม.6/2', day_of_week: 1, period_no: 1, span_periods: 2,
      }],
    }, null, 2),
  ].filter(Boolean).join('\n')
}

function renderShell(state) {
  const fileNames = state.fileNames.length
    ? state.fileNames.map(name => `<span class="rounded-lg bg-sky-100 px-2 py-1">${esc(name)}</span>`).join('')
    : '<span class="text-gray-400">ยังไม่ได้เลือกไฟล์ — ให้แนบไฟล์เดียวกันตอนนำ Prompt ไปสั่ง AI</span>'
  return `<div class="mx-auto max-w-7xl animate-fade space-y-5">
    <div class="flex flex-wrap items-start justify-between gap-3">
      <div><p class="text-sm text-gray-500">นำเข้า JSON จาก AI พร้อมตรวจสอบชื่อครูก่อนบันทึก</p></div>
      <div class="rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-semibold text-indigo-700">ภาค ${state.semester}/${state.year}</div>
    </div>
    <section class="rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-white p-5 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div><h2 class="font-bold text-violet-900">🤖 สร้าง Prompt สำหรับ AI</h2><p class="mt-1 text-xs text-violet-700">แนบไฟล์ตารางสอนทั้งโรงเรียนไปพร้อม Prompt แล้วนำ JSON กลับมาตรวจสอบ</p></div>
        <div class="flex gap-2"><button id="asi-generate" type="button" class="rounded-xl bg-violet-700 px-3 py-2 text-xs font-bold text-white">⚡ สร้าง Prompt</button><button id="asi-copy" type="button" class="rounded-xl border border-violet-200 bg-white px-3 py-2 text-xs font-bold text-violet-700">📋 คัดลอก</button></div>
      </div>
      <textarea id="asi-prompt" rows="13" readonly class="mt-4 w-full rounded-xl border border-violet-100 bg-white p-3 font-mono text-[11px] leading-relaxed"></textarea>
      <div class="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-gray-500"><label class="cursor-pointer rounded-xl border border-gray-200 bg-white px-3 py-2 font-semibold hover:bg-gray-50">📎 เลือกไฟล์อ้างอิง<input id="asi-files" type="file" multiple accept=".xlsx,.xls,.csv,.pdf,.png,.jpg,.jpeg,.html" class="hidden" /></label><div id="asi-file-list" class="flex flex-wrap gap-1">${fileNames}</div></div>
    </section>
    <section class="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="font-bold text-gray-800">📥 วาง JSON จาก AI</h2><p class="mt-1 text-xs text-gray-500">ระบบจะยังไม่บันทึกจนกว่าจะยืนยันชื่อครูและตรวจรายการทั้งหมด</p></div><button id="asi-parse" type="button" class="rounded-xl bg-indigo-700 px-4 py-2.5 text-xs font-bold text-white">🔎 ตรวจ JSON และ Preview</button></div>
      <textarea id="asi-json" rows="10" class="mt-4 w-full rounded-xl border border-gray-200 p-3 font-mono text-[11px] leading-relaxed" placeholder="วาง JSON ประเภท pp5.school_teacher_schedule.v1 ที่นี่"></textarea>
      <div id="asi-message" class="mt-3 hidden rounded-xl px-3 py-2 text-xs"></div>
    </section>
    <section id="asi-mapping-section" class="hidden rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"></section>
    <section id="asi-preview-section" class="hidden rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"></section>
  </div>`
}

function statusLabel(group) {
  if (group.selectedTeacherId === '__skip__') return '<span class="font-bold text-gray-500">ข้ามรายการ</span>'
  if (!group.selectedTeacherId) return '<span class="font-bold text-red-600">ต้องยืนยัน</span>'
  if (group.autoMatched) return '<span class="font-bold text-emerald-600">จับคู่อัตโนมัติ</span>'
  return '<span class="font-bold text-amber-600">รอยืนยัน</span>'
}

function teacherLabel(teacher) {
  if (!teacher) return '— ยังไม่เลือก —'
  return `${teacher.full_name ?? 'ไม่ระบุชื่อ'}${teacher.teacher_code ? ` (${teacher.teacher_code})` : ''}`
}

function matchSubject(entry, subjects, teacherId) {
  const code = normalizeCode(entry.subject_code)
  const name = normalizeName(entry.subject_name)
  const candidates = subjects.filter(subject =>
    (code && normalizeCode(subject.subject_code) === code) ||
    (name && normalizeName(subject.subject_name) === name))
  return candidates.find(subject => subject.teacher_id === teacherId) ?? candidates[0] ?? null
}

function cellKeys(row) {
  return Array.from({ length: row.span_periods }, (_, offset) =>
    `${row.teacher_id}:${row.day_of_week}:${row.period_no + offset}`)
}

export async function renderAdminScheduleImport() {
  const main = document.getElementById('main-content')
  if (!main) return
  document.getElementById('page-title').textContent = 'นำเข้าตารางสอนทั้งโรงเรียน'
  document.querySelectorAll('[data-nav]').forEach(item => {
    item.classList.toggle('bg-indigo-800', item.dataset.nav === 'schedule-admin')
    item.classList.toggle('text-white', item.dataset.nav === 'schedule-admin')
    item.classList.toggle('text-indigo-200', item.dataset.nav !== 'schedule-admin')
  })
  main.innerHTML = '<div class="flex justify-center py-16 text-gray-400">กำลังโหลดข้อมูลครู คาบเรียน และตารางเดิม...</div>'

  try {
    const cfg = await getSystemConfig().catch(() => ({}))
    const state = {
      year: Number(cfg.academicYear ?? cfg.academic_year ?? new Date().getFullYear() + 543),
      semester: Number(cfg.semester ?? 1),
      teachers: [], periods: [], subjects: [], existing: [], aliases: [],
      entries: [], groups: [], preparedRows: [], fileNames: [], replaceExisting: false,
    }
    ;[state.teachers, state.periods, state.subjects, state.existing, state.aliases] = await Promise.all([
      getTeachers(), getPeriods(), getMasterSubjects(),
      getScheduleEntriesForTerm(state.year, state.semester),
      getTeacherNameAliases(SOURCE_SYSTEM).catch(() => []),
    ])
    main.innerHTML = renderShell(state)
    const prompt = () => buildPrompt({ ...state, fileNames: state.fileNames })
    const promptEl = document.getElementById('asi-prompt')
    promptEl.value = prompt()

    const message = (value, good = false) => {
      const el = document.getElementById('asi-message')
      if (!el) return
      el.className = `mt-3 rounded-xl border px-3 py-2 text-xs ${good ? 'border-emerald-100 bg-emerald-50 text-emerald-700' : 'border-rose-100 bg-rose-50 text-rose-700'}`
      el.textContent = value
    }

    document.getElementById('asi-files').addEventListener('change', event => {
      state.fileNames = [...event.target.files].map(file => file.name)
      document.getElementById('asi-file-list').innerHTML = state.fileNames.length
        ? state.fileNames.map(name => `<span class="rounded-lg bg-sky-100 px-2 py-1">${esc(name)}</span>`).join('')
        : '<span class="text-gray-400">ยังไม่ได้เลือกไฟล์</span>'
      promptEl.value = prompt()
    })
    document.getElementById('asi-generate').addEventListener('click', () => { promptEl.value = prompt(); showToast('สร้าง Prompt ตารางสอนทั้งโรงเรียนแล้ว', 'success') })
    document.getElementById('asi-copy').addEventListener('click', async () => {
      promptEl.value = prompt()
      try { await navigator.clipboard.writeText(promptEl.value) } catch { promptEl.select(); document.execCommand('copy') }
      showToast('คัดลอก Prompt แล้ว — อย่าลืมแนบไฟล์ที่เลือกไปกับ AI', 'success')
    })

    const renderMapping = () => {
      const section = document.getElementById('asi-mapping-section')
      const autoCount = state.groups.filter(group => group.autoMatched).length
      const pendingCount = state.groups.filter(group => !group.selectedTeacherId).length
      section.innerHTML = `<div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="font-bold text-gray-800">👥 ตรวจสอบรายชื่อครูจากไฟล์</h2><p class="mt-1 text-xs text-gray-500">จับคู่อัตโนมัติ ${autoCount} รายการ · รอยืนยัน ${pendingCount} รายการ · พบชื่อครูจากไฟล์ ${state.groups.length} รายการ</p></div><button id="asi-prepare" type="button" class="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white">✅ ยืนยันการจับคู่และ Preview ตาราง</button></div>
        <div class="mt-4 overflow-x-auto"><table class="w-full min-w-[920px] text-left text-xs"><thead class="bg-gray-50 text-gray-500"><tr><th class="px-3 py-2">ชื่อ/รหัสจากไฟล์</th><th class="px-3 py-2">ครูในระบบ</th><th class="px-3 py-2">คะแนน</th><th class="px-3 py-2">รายการ</th><th class="px-3 py-2">สถานะ</th></tr></thead><tbody class="divide-y divide-gray-100">${state.groups.map((group, index) => {
          const selected = state.teachers.find(teacher => String(teacher.id) === String(group.selectedTeacherId))
          const options = group.candidates.map(candidate => `<option value="${candidate.teacher.id}" ${String(group.selectedTeacherId) === String(candidate.teacher.id) ? 'selected' : ''}>${esc(teacherLabel(candidate.teacher))}</option>`).join('')
          return `<tr><td class="px-3 py-3"><div class="font-semibold text-gray-800">${esc(group.source.teacher_name || 'ไม่ระบุชื่อ')}</div><div class="text-[10px] text-gray-400">${esc(group.source.teacher_code || 'ไม่มีรหัส')}</div></td><td class="px-3 py-3"><select data-map-group="${index}" class="w-full min-w-[260px] rounded-lg border border-gray-200 bg-white px-2 py-2"><option value="">— ต้องเลือกครู —</option>${options}<option value="__skip__" ${group.selectedTeacherId === '__skip__' ? 'selected' : ''}>ข้ามรายการนี้</option></select></td><td class="px-3 py-3">${group.candidates[0] ? `${Math.round(group.candidates[0].score * 100)}%<div class="text-[10px] text-gray-400">${group.candidates[0].exact ? 'รหัส/ชื่อ/alias ตรง' : 'ชื่อคล้ายกัน'}</div>` : '<span class="text-red-600">ไม่พบ</span>'}</td><td class="px-3 py-3">${group.entries.length} คาบ<div class="text-[10px] text-gray-400">${esc(group.entries.slice(0, 2).map(entry => `${entry.subject_code || entry.subject_name} · ${entry.class_name || 'ไม่ระบุห้อง'}`).join(' | '))}</div></td><td class="px-3 py-3">${statusLabel({ ...group, selectedTeacherId: selected?.id ?? group.selectedTeacherId })}</td></tr>`
        }).join('')}</tbody></table></div>`
      section.classList.remove('hidden')
      section.querySelectorAll('[data-map-group]').forEach(select => select.addEventListener('change', event => {
        state.groups[Number(event.target.dataset.mapGroup)].selectedTeacherId = event.target.value
        state.groups[Number(event.target.dataset.mapGroup)].autoMatched = false
        renderMapping()
      }))
      section.querySelector('#asi-prepare').addEventListener('click', () => preparePreview(state, renderPreview, message))
    }

    const renderPreview = () => {
      const section = document.getElementById('asi-preview-section')
      const rows = state.preparedRows
      const ready = rows.filter(row => row.status === 'ready').length
      const existing = rows.filter(row => row.status === 'existing').length
      const conflicts = rows.filter(row => row.status === 'conflict').length
      const unmatched = rows.filter(row => row.status === 'unmatched').length
      section.innerHTML = `<div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="font-bold text-gray-800">🗓️ Preview ตารางสอนก่อนบันทึก</h2><p class="mt-1 text-xs text-gray-500">พร้อมนำเข้า ${ready} คาบ · มีข้อมูลเดิม ${existing} คาบ · ข้อมูลชนกัน ${conflicts} คาบ · ไม่จับคู่ ${unmatched} คาบ</p></div><label class="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800"><input id="asi-replace" type="checkbox" ${state.replaceExisting ? 'checked' : ''} /> อนุญาตทับข้อมูลเดิม</label></div><div class="mt-4 max-h-[52vh] overflow-auto rounded-xl border border-gray-100"><table class="w-full min-w-[1000px] text-left text-xs"><thead class="sticky top-0 bg-gray-50 text-gray-500"><tr><th class="px-3 py-2">ครู</th><th class="px-3 py-2">วิชา/ห้อง</th><th class="px-3 py-2">วัน/คาบ</th><th class="px-3 py-2">สถานะ</th></tr></thead><tbody class="divide-y divide-gray-100">${rows.map(row => `<tr><td class="px-3 py-2"><div class="font-semibold">${esc(row.teacher?.full_name || row.source.teacher_name || row.source.teacher_code || 'ไม่จับคู่')}</div><div class="text-[10px] text-gray-400">${esc(row.source.teacher_name || row.source.teacher_code || '—')}</div></td><td class="px-3 py-2">${esc(row.entry.subject_name || row.entry.subject_code)}<div class="text-[10px] text-gray-400">${esc(row.entry.class_name || 'ไม่ระบุห้อง')}</div></td><td class="px-3 py-2">${DAY_NAMES[row.entry.day_of_week]} · คาบ ${row.entry.period_no}${row.entry.span_periods > 1 ? `–${row.entry.period_no + row.entry.span_periods - 1}` : ''}</td><td class="px-3 py-2">${row.status === 'ready' ? '<span class="font-bold text-emerald-600">พร้อมนำเข้า</span>' : row.status === 'existing' ? '<span class="font-bold text-amber-600">มีรายการเดิม — ข้าม</span>' : row.status === 'unmatched' ? '<span class="font-bold text-gray-500">ข้าม — ยังไม่จับคู่ครู</span>' : '<span class="font-bold text-red-600">ข้อมูลชนกัน — แก้ก่อน</span>'}</td></tr>`).join('')}</tbody></table></div><div class="mt-4 flex flex-wrap gap-2"><button id="asi-import" type="button" class="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white" ${ready || (state.replaceExisting && existing) ? '' : 'disabled'}>💾 ยืนยันนำเข้าตารางสอน</button><button id="asi-back-map" type="button" class="rounded-xl border border-gray-200 px-4 py-2.5 text-xs font-semibold text-gray-600">← กลับไปแก้การจับคู่</button></div>`
      section.classList.remove('hidden')
      section.querySelector('#asi-replace').addEventListener('change', event => { state.replaceExisting = event.target.checked; renderPreview() })
      section.querySelector('#asi-back-map').addEventListener('click', () => { section.classList.add('hidden'); document.getElementById('asi-mapping-section').scrollIntoView({ behavior: 'smooth' }) })
      section.querySelector('#asi-import').addEventListener('click', () => importPrepared(state, message))
    }

    document.getElementById('asi-parse').addEventListener('click', () => {
      try {
        const parsed = parseImportJSON(document.getElementById('asi-json').value)
        const periodNumbers = new Set(state.periods.map(period => Number(period.period_no)))
        const invalidPeriod = parsed.entries.find(entry =>
          !periodNumbers.has(entry.period_no) ||
          Array.from({ length: entry.span_periods }, (_, offset) => entry.period_no + offset)
            .some(period => !periodNumbers.has(period)))
        if (invalidPeriod) {
          throw new Error(`รายการที่ ${invalidPeriod.sourceIndex} ใช้คาบที่ไม่มีในระบบ หรือ span_periods เกินคาบที่กำหนด`)
        }
        state.entries = parsed.entries
        const grouped = new Map()
        for (const entry of state.entries) {
          const key = `${normalizeCode(entry.teacher_code)}|${normalizeName(entry.teacher_name)}`
          if (!grouped.has(key)) grouped.set(key, { source: entry, entries: [], candidates: [], selectedTeacherId: '', autoMatched: false })
          grouped.get(key).entries.push(entry)
        }
        state.groups = [...grouped.values()].map(group => {
          group.candidates = rankCandidates(group.source, state.teachers, state.aliases)
          const best = group.candidates[0]
          if (best?.exact || best?.score >= 0.96) {
            group.selectedTeacherId = String(best.teacher.id)
            group.autoMatched = true
          }
          return group
        })
        renderMapping()
        document.getElementById('asi-preview-section').classList.add('hidden')
        message(`อ่าน JSON สำเร็จ ${state.entries.length} คาบ จากชื่อครู ${state.groups.length} รายการ`, true)
        document.getElementById('asi-mapping-section').scrollIntoView({ behavior: 'smooth' })
      } catch (error) { message(error.message, false) }
    })
  } catch (error) {
    main.innerHTML = `<div class="rounded-2xl border border-red-100 bg-red-50 p-6 text-sm text-red-700">โหลดหน้าจอนำเข้าไม่สำเร็จ: ${esc(getFriendlyErrorMessage(error))}</div>`
  }
}

function preparePreview(state, renderPreview, message) {
  const unresolved = state.groups.filter(group => !group.selectedTeacherId)
  if (unresolved.length) {
    message(`ยังมีชื่อครูที่ต้องยืนยัน ${unresolved.length} รายการ กรุณาเลือกครูในตารางให้ครบ หรือเลือกข้ามรายการ`, false)
    return
  }
  const existingBusy = new Set()
  for (const row of state.existing) {
    for (const key of cellKeys(row)) existingBusy.add(key)
  }
  const importedBusy = new Set()
  state.preparedRows = state.entries.map(entry => {
    const group = state.groups.find(item => item.entries.includes(entry))
    const teacher = state.teachers.find(item => String(item.id) === String(group?.selectedTeacherId))
    const row = { entry, source: group?.source ?? entry, teacher, status: 'ready' }
    if (!teacher || group?.selectedTeacherId === '__skip__') { row.status = 'unmatched'; return row }
    const keys = cellKeys({ ...entry, teacher_id: teacher.id })
    const hasExisting = keys.some(key => existingBusy.has(key))
    const hasBatchConflict = keys.some(key => importedBusy.has(key))
    if (hasBatchConflict) row.status = 'conflict'
    else if (hasExisting) row.status = 'existing'
    // Reserve every occupied cell, including existing rows, so a second
    // imported row cannot silently overwrite it when replaceExisting is off.
    if (row.status !== 'conflict') keys.forEach(key => importedBusy.add(key))
    return row
  })
  renderPreview()
  document.getElementById('asi-preview-section').scrollIntoView({ behavior: 'smooth' })
}

async function importPrepared(state, message) {
  const rows = state.preparedRows.filter(row => row.teacher && (row.status === 'ready' || (state.replaceExisting && row.status === 'existing')))
  if (!rows.length) { message('ไม่มีรายการที่พร้อมนำเข้า', false); return }
  const payload = rows.map(row => {
    const subject = matchSubject(row.entry, state.subjects, row.teacher.id)
    return {
      teacher_id: row.teacher.id,
      subject_id: subject?.id ?? null,
      subject_name: row.entry.subject_name || row.entry.subject_code,
      class_name: row.entry.class_name || '',
      teacher_name: row.teacher.full_name || row.entry.teacher_name || null,
      day_of_week: row.entry.day_of_week,
      period_no: row.entry.period_no,
      span_periods: row.entry.span_periods,
      note: row.entry.note || null,
      academic_year: state.year,
      semester: state.semester,
    }
  })
  const button = document.getElementById('asi-import')
  if (button) { button.disabled = true; button.textContent = 'กำลังบันทึก...' }
  try {
    await upsertScheduleEntries(payload)
    const aliases = state.groups.filter(group => group.selectedTeacherId && group.selectedTeacherId !== '__skip__').map(group => ({
      teacher_id: group.selectedTeacherId,
      source_name: group.source.teacher_name || group.source.teacher_code,
      normalized_name: normalizeName(group.source.teacher_name || group.source.teacher_code),
      source_system: SOURCE_SYSTEM,
    }))
    await upsertTeacherNameAliases(aliases).catch(error => console.warn('teacher alias save skipped', error))
    showToast(`นำเข้าตารางสอนสำเร็จ ${payload.length} คาบ และบันทึกชื่อ alias แล้ว`, 'success')
    message(`บันทึกแล้ว ${payload.length} คาบ — รายการเดิมที่ไม่ได้เลือกทับยังคงอยู่`, true)
    button.textContent = 'นำเข้าเรียบร้อยแล้ว'
  } catch (error) {
    message(`บันทึกไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, false)
    if (button) { button.disabled = false; button.textContent = '💾 ยืนยันนำเข้าตารางสอน' }
  }
}
