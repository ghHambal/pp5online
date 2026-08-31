// AI workspace สำหรับกำหนดการสอน/แผนหน้าเดียว
// ระบบไม่เรียก AI เอง: สร้าง Prompt + JSON Schema ให้ครูนำไปใช้กับ AI ส่วนตัว แล้วนำ JSON กลับมาบันทึก
import {
  createSyllabusItem, updateSyllabusItem, createLessonPlan, updateLessonPlan,
  getLessonPlanReflection, upsertLessonPlanReflection, getDepartments,
} from './api.js'
import { showToast } from './ui.js'
import { uploadLessonPlanSignature, getLessonPlanAssetUrl } from './storage.js'

const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[ch])
const asText = value => Array.isArray(value) ? value.map(v => typeof v === 'string' ? v : JSON.stringify(v)).join('\n') : value == null ? '' : String(value)
const asInt = (value, fallback = null) => Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : fallback
const isoDate = value => /^\d{4}-\d{2}-\d{2}$/.test(String(value ?? '')) ? String(value) : null
const stripFence = text => String(text ?? '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')

const scheduleSchema = {
  schema_version: 'pp5.schedule.v1',
  type: 'course_schedule',
  course: { subject_code: 'ค32101', subject_name: 'คณิตศาสตร์พื้นฐาน', grade_level: 'ม.5', periods_per_week: 4 },
  weeks: [{
    week_start: 1, week_end: 1, date_start: '2026-05-11', date_end: '2026-05-14',
    unit_title: 'หน่วยการเรียนรู้ที่ 1', topic: 'ปฐมนิเทศและข้อตกลงในรายวิชา', description: '',
    teaching_methods: 'พูดคุย ถาม-ตอบ และแสดงความคิดเห็น', notes: '',
  }],
}

const lessonSchema = {
  schema_version: 'pp5.lesson_plan.v1',
  type: 'lesson_plan',
  plans: [{
    title: 'แผนการสอนครั้งที่ 1', week_start: 1, week_end: 1, session_number: 1,
    lesson_date: '2026-05-11', period_count: 2, minutes_per_period: 50, duration_minutes: 100, unit_title: 'หน่วยการเรียนรู้ที่ 1',
    topic: 'ความหมายของเลขยกกำลัง', standards: ['ค 1.1 ม.5/1'],
    objectives: ['อธิบายความหมายของเลขยกกำลังได้'], key_concept: '',
    activities: { intro: ['นำเข้าสู่บทเรียน'], main: ['กิจกรรมการเรียนรู้'], wrap: ['สรุปบทเรียน'] },
    media: ['หนังสือเรียน'], assessment: ['สังเกตการตอบคำถาม'], homework: '', teacher_notes: '',
    schedule_alignment: 'aligned', deviation_reason: '',
  }],
}

function courseMeta(cls) {
  const ms = cls?.master_subjects ?? {}
  return {
    subject_code: ms.subject_code ?? '', subject_name: ms.subject_name ?? '',
    grade_level: ms.grade_level ?? '', class_name: cls?.class_name ?? '',
    credit: ms.credit ?? '', learning_area: ms.subject_group ?? ms.dept ?? '',
  }
}

function makePrompt({ mode, cls, teacher, syllabusItems, week, session, periodCount, minutesPerPeriod, topic, teachingUnits, files }) {
  const meta = courseMeta(cls)
  const schema = mode === 'schedule' ? scheduleSchema : lessonSchema
  const duration = mode === 'schedule' ? null : periodCount * minutesPerPeriod
  const relevant = (syllabusItems ?? []).filter(it => !week || (week >= it.week_start && week <= it.week_end))
  const attachmentText = files.length
    ? files.map((f, i) => `${i + 1}. ${f.name} (${f.type || 'ไม่ทราบประเภท'})`).join('\n')
    : 'ไม่มีไฟล์แนบ'
  return `คุณเป็นผู้ช่วยจัดทำเอกสารการสอนภาษาไทย ให้ใช้ข้อมูลจากเอกสารที่แนบและข้อมูลรายวิชาด้านล่างเป็นหลัก

งานที่ต้องทำ: ${mode === 'schedule' ? 'สร้างกำหนดการสอนทั้งภาคเรียน' : 'สร้างแผนการจัดการเรียนรู้หน้าเดียวรายครั้งสอน'}

ข้อมูลจากระบบ PP5:
${JSON.stringify({ ...meta, teacher_name: teacher?.full_name ?? '', selected_week: week, session_number: session, period_count: periodCount, minutes_per_period: minutesPerPeriod, duration_minutes: duration, requested_topic: topic, requested_teaching_units: teachingUnits, existing_schedule: relevant }, null, 2)}

ไฟล์ที่ผู้ใช้จะอัปโหลดให้คุณอ่านประกอบ:
${attachmentText}

ข้อกำหนดสำคัญ:
1. อ่านหนังสือเรียน เอกสารหลักสูตร ตัวชี้วัด และแบบฟอร์มที่แนบก่อนตอบ
2. ${mode === 'schedule' ? 'ต้องนำหน่วยการเรียนรู้ที่ผู้ใช้ระบุไปจัดลำดับและกระจายลงช่วงสัปดาห์ให้ครบทุกหน่วย โดยใช้คำอธิบายของแต่ละหน่วยประกอบ ห้ามละเว้นหรือเปลี่ยนสาระสำคัญ' : 'ยึดกำหนดการสอนของสัปดาห์เป็นข้อมูลหลัก หากจำเป็นต้องเบี่ยงให้ระบุ schedule_alignment="deviated" และอธิบาย deviation_reason'}
3. ${mode === 'schedule' ? 'แต่ละช่วงสัปดาห์ต้องระบุ unit_title ให้เชื่อมกลับไปยังหน่วยการเรียนรู้ที่เกี่ยวข้อง' : `แผนนี้มี ${periodCount} คาบ คาบละ ${minutesPerPeriod} นาที รวม ${duration} นาที กิจกรรมทั้งหมดต้องจัดเวลาให้พอดีกับจำนวนคาบนี้`}
4. กิจกรรมต้องใช้ได้จริง มีขั้นนำ ขั้นสอน ขั้นสรุป สื่อ และการวัดผลที่ตรวจสอบได้
5. ห้ามแต่งรหัสมาตรฐาน/ตัวชี้วัดเมื่อเอกสารอ้างอิงไม่มีข้อมูล ให้ใช้ [] และระบุข้อสังเกตใน teacher_notes
6. ตอบเป็น JSON ล้วนเท่านั้น ห้ามใช้ Markdown ห้ามใส่คำอธิบายก่อนหรือหลัง JSON
7. ใช้ schema_version และชื่อ field ตามตัวอย่างทุกตัว เพื่อให้ระบบ PP5 อ่านได้

JSON Schema ตัวอย่าง:
${JSON.stringify(schema, null, 2)}`
}

function validatePayload(raw, mode) {
  let data
  try { data = JSON.parse(stripFence(raw)) } catch { throw new Error('JSON ไม่ถูกต้อง กรุณาตรวจเครื่องหมายปีกกาและเครื่องหมายคำพูด') }
  if (mode === 'schedule') {
    if (data.type !== 'course_schedule' || !Array.isArray(data.weeks) || !data.weeks.length) throw new Error('ต้องเป็น course_schedule และมี weeks อย่างน้อย 1 รายการ')
    data.weeks.forEach((w, i) => {
      if (asInt(w.week_start) < 1 || asInt(w.week_end, asInt(w.week_start)) < asInt(w.week_start) || !String(w.topic ?? '').trim()) throw new Error(`ข้อมูลสัปดาห์ลำดับ ${i + 1} ไม่ครบหรือช่วงสัปดาห์ไม่ถูกต้อง`)
    })
  } else {
    if (data.type !== 'lesson_plan' || !Array.isArray(data.plans) || !data.plans.length) throw new Error('ต้องเป็น lesson_plan และมี plans อย่างน้อย 1 รายการ')
    data.plans.forEach((p, i) => {
      if (!String(p.title ?? '').trim() || asInt(p.week_start) < 1) throw new Error(`แผนลำดับ ${i + 1} ไม่มีชื่อแผนหรือสัปดาห์`)
      if (p.schedule_alignment && !['aligned', 'deviated', 'partial'].includes(p.schedule_alignment)) throw new Error(`schedule_alignment ของแผนลำดับ ${i + 1} ไม่ถูกต้อง`)
    })
  }
  return data
}

export function openLessonPlanAIWorkspace({ teacher, cls, courseId, syllabusItems, lessonPlans, currentWeek, initialMode = 'plan', onSaved }) {
  document.getElementById('lp-ai-workspace')?.remove()
  const m = document.createElement('div')
  m.id = 'lp-ai-workspace'
  m.className = 'fixed inset-0 z-[97] bg-black/60 flex items-center justify-center p-3'
  const mode = initialMode === 'schedule' ? 'schedule' : 'plan'
  const isSchedule = mode === 'schedule'
  let files = []
  let teachingUnits = [{ title: '', description: '' }]
  m.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div><span class="inline-flex px-2.5 py-1 rounded-full ${isSchedule ? 'bg-blue-50 text-blue-700' : 'bg-violet-50 text-violet-700'} text-[10px] font-extrabold mb-2">${isSchedule ? '📘 กำหนดการสอน' : '📝 แผนหน้าเดียว'}</span><h3 class="font-extrabold text-gray-800 text-lg">${isSchedule ? 'สร้างกำหนดการสอนด้วย AI' : 'สร้างแผนการสอนหน้าเดียวด้วย AI'}</h3><p class="text-xs text-gray-400 mt-1">สร้าง Prompt → ใช้กับ AI ที่ครูเลือก → นำ JSON กลับมาวาง → ระบบสร้าง${isSchedule ? 'กำหนดการสอน' : 'แผนการสอน'}</p></div>
      <button data-close class="w-10 h-10 rounded-xl border text-gray-400">✕</button>
    </div>
    ${isSchedule ? `<div class="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 mb-4"><p class="text-sm font-bold text-blue-800">สร้างโครงสร้างทั้งภาคเรียนในครั้งเดียว</p><p class="text-[11px] text-blue-600 mt-1">AI จะจัดช่วงสัปดาห์ หัวข้อ วิธีสอน และหมายเหตุตามหน่วยการเรียนรู้กับเอกสารที่แนบ</p></div>
    <section class="rounded-2xl border border-gray-200 p-4 mb-4">
      <div class="flex items-start justify-between gap-3 mb-3"><div><p class="text-sm font-extrabold text-gray-800">หน่วยการเรียนรู้ที่ต้องสอนในเทอมนี้</p><p class="text-[11px] text-gray-400 mt-0.5">เพิ่มได้หลายหน่วย ระบบจะส่งชื่อและคำอธิบายให้ AI ใช้จัดกำหนดการ</p></div><button id="lp-ai-add-unit" type="button" class="min-h-[40px] px-3 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold flex-shrink-0">＋ เพิ่มหน่วย</button></div>
      <div id="lp-ai-units" class="space-y-2"></div>
    </section>` : `<div class="grid sm:grid-cols-4 gap-2 mb-2">
      <label class="text-xs font-bold text-gray-500">สัปดาห์<input id="lp-ai-week" type="number" min="1" value="${currentWeek || 1}" class="mt-1 w-full border rounded-xl px-3 py-2 font-normal"></label>
      <label class="text-xs font-bold text-gray-500">ครั้งที่สอน<input id="lp-ai-session" type="number" min="1" value="1" class="mt-1 w-full border rounded-xl px-3 py-2 font-normal"></label>
      <label class="text-xs font-bold text-gray-500">จำนวนคาบ<input id="lp-ai-period-count" type="number" min="1" value="2" class="mt-1 w-full border rounded-xl px-3 py-2 font-normal"></label>
      <label class="text-xs font-bold text-gray-500">นาทีต่อคาบ<input id="lp-ai-minutes-per-period" type="number" min="1" value="50" class="mt-1 w-full border rounded-xl px-3 py-2 font-normal"></label>
    </div>
    <p id="lp-ai-duration-summary" class="text-[11px] text-violet-600 font-bold mb-3">รวมเวลา 100 นาที</p>
    <label class="block text-xs font-bold text-gray-500 mb-3">เรื่องที่ต้องการสร้าง<input id="lp-ai-topic" value="${esc((syllabusItems ?? []).find(x => currentWeek >= x.week_start && currentWeek <= x.week_end)?.topic ?? '')}" class="mt-1 w-full border rounded-xl px-3 py-2 font-normal" placeholder="เว้นว่างเพื่อให้ AI ยึดจากกำหนดการสอน"></label>`}
    <div class="rounded-2xl border border-dashed ${isSchedule ? 'border-blue-200 bg-blue-50/50' : 'border-violet-200 bg-violet-50/50'} p-4 mb-3">
      <p class="text-xs font-bold ${isSchedule ? 'text-blue-700' : 'text-violet-700'}">📎 เอกสารประกอบสำหรับ AI</p>
      <p class="text-[11px] text-gray-500 mt-1">เลือกหนังสือเรียน หลักสูตร หรือต้นแบบ ระบบจะใส่ชื่อไฟล์ใน Prompt ไฟล์ยังอยู่บนเครื่องและต้องแนบไฟล์เดียวกันให้ AI ด้วย</p>
      <input id="lp-ai-files" type="file" multiple accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg" class="mt-3 text-xs w-full">
      <div id="lp-ai-file-list" class="text-[11px] text-gray-500 mt-2"></div>
    </div>
    <div class="mt-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">Prompt สำหรับนำไปใช้กับ AI</label><div class="grid grid-cols-2 gap-2 sm:flex sm:justify-end"><button id="lp-ai-generate" class="min-h-[40px] px-3 rounded-xl ${isSchedule ? 'bg-blue-700' : 'bg-violet-700'} text-white text-xs font-bold">⚡ สร้าง Prompt</button><button id="lp-ai-copy" class="min-h-[40px] px-3 rounded-xl border ${isSchedule ? 'border-blue-200 text-blue-700 bg-blue-50' : 'border-violet-200 text-violet-700 bg-violet-50'} text-xs font-bold">📋 คัดลอก Prompt</button></div></div>
      <textarea id="lp-ai-prompt" rows="8" class="w-full border rounded-xl p-3 text-[11px] font-mono"></textarea>
    </div>
    <div class="mt-4 pt-4 border-t">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">วาง JSON ที่ได้จาก AI</label><div class="grid grid-cols-2 gap-2 sm:flex sm:justify-end"><button id="lp-ai-validate" class="min-h-[40px] px-3 rounded-xl border ${isSchedule ? 'border-blue-200 text-blue-700' : 'border-violet-200 text-violet-700'} font-bold text-xs">🔎 ตรวจ JSON</button><button id="lp-ai-save" class="min-h-[40px] px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs">💾 สร้างในระบบ</button></div></div>
      <textarea id="lp-ai-json" rows="8" class="mt-1 w-full border rounded-xl p-3 text-[11px] font-mono" placeholder='วาง { "schema_version": ... } ที่นี่'></textarea>
      <div id="lp-ai-result" class="hidden mt-2 rounded-xl px-3 py-2 text-xs"></div>
    </div>
  </div>`
  document.body.appendChild(m)

  const readTeachingUnits = () => [...m.querySelectorAll('[data-unit-row]')].map(row => ({
    title: row.querySelector('[data-unit-title]').value.trim(),
    description: row.querySelector('[data-unit-description]').value.trim(),
  }))
  const renderTeachingUnits = () => {
    const wrap = m.querySelector('#lp-ai-units')
    if (!wrap) return
    wrap.innerHTML = teachingUnits.map((unit, index) => `<div data-unit-row class="rounded-xl border border-gray-200 bg-gray-50 p-3">
      <div class="grid sm:grid-cols-[1fr_1.4fr_auto] gap-2 items-start">
        <label class="text-[11px] font-bold text-gray-500">ชื่อหน่วยการเรียนรู้<input data-unit-title value="${esc(unit.title)}" class="mt-1 w-full min-h-[40px] border rounded-lg px-3 py-2 bg-white font-normal" placeholder="เช่น หน่วยที่ 1 เลขยกกำลัง"></label>
        <label class="text-[11px] font-bold text-gray-500">อธิบายพอสังเขป<textarea data-unit-description rows="2" class="mt-1 w-full border rounded-lg px-3 py-2 bg-white font-normal" placeholder="สาระสำคัญ หัวข้อ หรือขอบเขตที่ต้องสอน">${esc(unit.description)}</textarea></label>
        <button type="button" data-remove-unit="${index}" class="min-h-[40px] px-3 mt-5 rounded-lg border border-red-100 bg-white text-red-500 text-xs font-bold ${teachingUnits.length === 1 ? 'invisible' : ''}">ลบ</button>
      </div>
    </div>`).join('')
    wrap.querySelectorAll('[data-remove-unit]').forEach(btn => btn.addEventListener('click', () => {
      teachingUnits = readTeachingUnits()
      teachingUnits.splice(asInt(btn.dataset.removeUnit, 0), 1)
      if (!teachingUnits.length) teachingUnits.push({ title: '', description: '' })
      renderTeachingUnits()
    }))
  }
  if (isSchedule) {
    renderTeachingUnits()
    m.querySelector('#lp-ai-add-unit').addEventListener('click', () => {
      teachingUnits = readTeachingUnits()
      teachingUnits.push({ title: '', description: '' })
      renderTeachingUnits()
      m.querySelector('[data-unit-row]:last-child [data-unit-title]')?.focus()
    })
  }

  const getPeriodCount = () => isSchedule ? null : Math.max(1, asInt(m.querySelector('#lp-ai-period-count').value, 1))
  const getMinutesPerPeriod = () => isSchedule ? null : Math.max(1, asInt(m.querySelector('#lp-ai-minutes-per-period').value, 50))
  const paintDurationSummary = () => {
    if (isSchedule) return
    m.querySelector('#lp-ai-duration-summary').textContent = `${getPeriodCount()} คาบ × ${getMinutesPerPeriod()} นาที = รวมเวลา ${getPeriodCount() * getMinutesPerPeriod()} นาที`
  }
  if (!isSchedule) {
    m.querySelector('#lp-ai-period-count').addEventListener('input', paintDurationSummary)
    m.querySelector('#lp-ai-minutes-per-period').addEventListener('input', paintDurationSummary)
    paintDurationSummary()
  }

  const prompt = () => makePrompt({
    mode, cls, teacher, syllabusItems,
    week: isSchedule ? null : asInt(m.querySelector('#lp-ai-week').value, 1), session: isSchedule ? null : asInt(m.querySelector('#lp-ai-session').value, 1),
    periodCount: getPeriodCount(), minutesPerPeriod: getMinutesPerPeriod(), topic: isSchedule ? '' : m.querySelector('#lp-ai-topic').value.trim(),
    teachingUnits: isSchedule ? readTeachingUnits().filter(unit => unit.title || unit.description) : [], files,
  })
  const showResult = (message, ok) => {
    const box = m.querySelector('#lp-ai-result'); box.classList.remove('hidden')
    box.className = `mt-2 rounded-xl px-3 py-2 text-xs ${ok ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`
    box.textContent = message
  }
  m.querySelector('#lp-ai-prompt').value = prompt()
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('[data-close]').addEventListener('click', () => m.remove())
  m.querySelector('#lp-ai-files').addEventListener('change', e => {
    files = [...e.target.files]
    m.querySelector('#lp-ai-file-list').innerHTML = files.length ? files.map(f => `<span class="inline-block mr-1 mb-1 px-2 py-1 rounded-lg bg-white border">${esc(f.name)}</span>`).join('') : ''
  })
  m.querySelector('#lp-ai-generate').addEventListener('click', () => { m.querySelector('#lp-ai-prompt').value = prompt(); showToast('สร้าง Prompt แล้ว', 'success') })
  m.querySelector('#lp-ai-copy').addEventListener('click', async () => {
    const text = prompt()
    m.querySelector('#lp-ai-prompt').value = text
    try { await navigator.clipboard.writeText(text); showToast('คัดลอก Prompt แล้ว', 'success') }
    catch { m.querySelector('#lp-ai-prompt').select(); document.execCommand('copy'); showToast('คัดลอก Prompt แล้ว', 'success') }
  })
  m.querySelector('#lp-ai-validate').addEventListener('click', () => {
    try { const data = validatePayload(m.querySelector('#lp-ai-json').value, mode); showResult(`JSON ถูกต้อง: ${mode === 'schedule' ? data.weeks.length + ' ช่วงสัปดาห์' : data.plans.length + ' แผน'}`, true) }
    catch (err) { showResult(err.message, false) }
  })
  m.querySelector('#lp-ai-save').addEventListener('click', async e => {
    let data
    try { data = validatePayload(m.querySelector('#lp-ai-json').value, mode) } catch (err) { showResult(err.message, false); return }
    const count = mode === 'schedule' ? data.weeks.length : data.plans.length
    if (!confirm(`ยืนยันสร้าง${mode === 'schedule' ? 'กำหนดการสอน' : 'แผนการสอน'} ${count} รายการในระบบ?`)) return
    const btn = e.currentTarget; btn.disabled = true; btn.textContent = 'กำลังสร้าง...'
    try {
      if (mode === 'schedule') {
        for (const w of data.weeks) {
          const payload = {
            course_id: courseId, week_start: asInt(w.week_start), week_end: asInt(w.week_end, asInt(w.week_start)),
            date_start: isoDate(w.date_start), date_end: isoDate(w.date_end), topic: String(w.topic).trim(),
            description: asText(w.description) || null, teaching_methods: asText(w.teaching_methods) || null,
            notes: asText(w.notes) || null, source_json: w,
          }
          const existing = (syllabusItems ?? []).find(x => x.week_start === payload.week_start && x.week_end === payload.week_end)
          if (existing) await updateSyllabusItem(existing.id, payload); else await createSyllabusItem(payload)
        }
      } else {
        for (const p of data.plans) {
          const activities = p.activities ?? {}
          const periodCount = Math.max(1, asInt(p.period_count, 1))
          const minutesPerPeriod = Math.max(1, asInt(p.minutes_per_period, asInt(p.duration_minutes, 50)))
          const durationMinutes = asInt(p.duration_minutes, periodCount * minutesPerPeriod)
          const payload = {
            course_id: courseId, teacher_id: teacher.id, title: String(p.title).trim(),
            week_start: asInt(p.week_start), week_end: asInt(p.week_end, asInt(p.week_start)), session_number: asInt(p.session_number, 1),
            lesson_date: isoDate(p.lesson_date), duration_minutes: durationMinutes, unit_title: asText(p.unit_title) || null,
            standards: asText(p.standards) || null, objectives: asText(p.objectives) || null, key_concept: asText(p.key_concept || p.topic) || null,
            activities_intro: asText(activities.intro ?? p.activities_intro) || null,
            activities_main: asText(activities.main ?? p.activities_main) || null,
            activities_wrap: asText(activities.wrap ?? p.activities_wrap) || null,
            media: asText(p.media) || null, assessment: asText(p.assessment) || null, homework: asText(p.homework) || null,
            teacher_notes: asText(p.teacher_notes) || null, schedule_alignment: p.schedule_alignment || null,
            deviation_reason: asText(p.deviation_reason) || null,
            source_json: { ...p, period_count: periodCount, minutes_per_period: minutesPerPeriod, duration_minutes: durationMinutes },
          }
          const existing = (lessonPlans ?? []).find(x => x.week_start === payload.week_start && (x.session_number ?? 1) === payload.session_number)
          if (existing) await updateLessonPlan(existing.id, payload); else await createLessonPlan(payload)
        }
      }
      showToast('สร้างข้อมูลในระบบแล้ว ✅', 'success'); m.remove(); onSaved?.()
    } catch (err) { showResult('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), false); btn.disabled = false; btn.textContent = '💾 สร้างในระบบ' }
  })
}

function signaturePadHTML(key, label, name, currentUrl) {
  return `<div class="rounded-2xl border border-gray-200 p-3" data-sign-role="${key}">
    <div class="flex justify-between gap-2"><div><p class="text-xs font-bold text-gray-700">${label}</p><input data-sign-name class="mt-1 border rounded-lg px-2 py-1 text-xs w-full" value="${esc(name)}" placeholder="ชื่อผู้ลงนาม"></div>${currentUrl ? `<img data-sign-current src="${esc(currentUrl)}" class="h-14 w-28 object-contain border rounded-lg bg-white">` : '<span class="text-[10px] text-gray-300">ยังไม่มีลายเซ็น</span>'}</div>
    <canvas data-sign-canvas width="700" height="180" class="mt-2 w-full h-24 border rounded-xl bg-white touch-none"></canvas>
    <div class="flex items-center justify-between gap-2 mt-2"><button data-sign-clear type="button" class="text-[11px] text-red-500">ล้างที่วาด</button><label class="text-[11px] font-bold text-indigo-600 cursor-pointer">📤 อัปโหลดภาพ<input data-sign-file type="file" accept="image/png,image/jpeg,image/webp" class="hidden"></label></div>
    <p data-sign-file-name class="text-[10px] text-gray-400 mt-1"></p>
  </div>`
}

function bindPad(box) {
  const canvas = box.querySelector('[data-sign-canvas]'), ctx = canvas.getContext('2d')
  ctx.strokeStyle = '#173b78'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round'
  let drawing = false, drawn = false, last = null
  const pos = e => { const r = canvas.getBoundingClientRect(), p = e.touches?.[0] ?? e; return { x:(p.clientX-r.left)*canvas.width/r.width, y:(p.clientY-r.top)*canvas.height/r.height } }
  const start = e => { e.preventDefault(); drawing = true; drawn = true; last = pos(e) }
  const move = e => { if (!drawing) return; e.preventDefault(); const p=pos(e); ctx.beginPath(); ctx.moveTo(last.x,last.y); ctx.lineTo(p.x,p.y); ctx.stroke(); last=p }
  const end = () => { drawing = false }
  canvas.addEventListener('pointerdown', start); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', end); canvas.addEventListener('pointerleave', end)
  box.querySelector('[data-sign-clear]').addEventListener('click', () => { ctx.clearRect(0,0,canvas.width,canvas.height); drawn=false })
  box.querySelector('[data-sign-file]').addEventListener('change', e => { box.querySelector('[data-sign-file-name]').textContent = e.target.files[0]?.name ?? '' })
  return { canvas, hasDrawn: () => drawn, file: () => box.querySelector('[data-sign-file]').files[0] ?? null, name: () => box.querySelector('[data-sign-name]').value.trim() }
}

const canvasBlob = canvas => new Promise(resolve => canvas.toBlob(resolve, 'image/png'))

function printLessonPlan({ plan, cls, teacher, reflection, urls, dept }) {
  const meta = courseMeta(cls), date = plan.lesson_date ? new Date(plan.lesson_date + 'T00:00:00').toLocaleDateString('th-TH') : '........................'
  const nl = value => esc(value || '-').replace(/\n/g, '<br>')
  const sig = (url, name, role) => `<div class="sig"><div class="sig-img">${url ? `<img src="${esc(url)}">` : ''}</div><div class="line">ลงชื่อ ................................................</div><div>(${esc(name || '................................................')})</div><b>${role}</b></div>`
  const w = window.open('', '_blank')
  if (!w) { showToast('เบราว์เซอร์บล็อกหน้าต่างพิมพ์ กรุณาอนุญาต Pop-up', 'warning'); return }
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${esc(plan.title)}</title><style>
    @page{size:A4;margin:9mm}*{box-sizing:border-box}body{font-family:Tahoma,"Noto Sans Thai",sans-serif;color:#172033;margin:0;font-size:10px}.page{width:100%;min-height:277mm}.head{text-align:center;border-bottom:1.5px solid #176b3a;padding-bottom:7px}.head h1{font-size:20px;margin:2px}.head h2{font-size:13px;margin:2px}.meta{display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1.5px solid #176b3a;padding:6px 8px;margin-bottom:8px}.meta span:nth-child(2){text-align:center}.meta span:last-child{text-align:right}.cols{display:grid;grid-template-columns:1fr .95fr;gap:10px}.box{border:1px solid #178448;border-radius:5px;margin-bottom:7px;overflow:hidden}.box h3{font-size:11px;margin:0;padding:5px 8px;background:#dff6e7;color:#155c35}.box div{padding:6px 8px;line-height:1.5}.sign-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px}.sig{text-align:center;font-size:9px}.sig-img{height:45px;display:flex;align-items:flex-end;justify-content:center}.sig-img img{max-height:44px;max-width:125px;object-fit:contain}.line{white-space:nowrap}.reflection{border-top:1px solid #555;padding-top:5px;margin-top:7px;line-height:1.5}@media print{button{display:none}}</style></head><body><div class="page">
    <div class="head"><h1>แผนการจัดการเรียนรู้ (หน้าเดียว)</h1><h2>${esc(meta.learning_area || 'กลุ่มสาระการเรียนรู้')} · ${esc(meta.subject_name)} (${esc(meta.subject_code)}) · ${esc(meta.grade_level)} ${esc(meta.class_name)}</h2><div>${esc(plan.unit_title || '')} ${plan.key_concept ? 'เรื่อง ' + esc(plan.key_concept) : ''}</div></div>
    <div class="meta"><span>ครั้งที่ ${plan.session_number || 1}</span><span>เวลา ${plan.duration_minutes ? plan.duration_minutes + ' นาที' : '...........'}</span><span>วันที่ ${date}</span></div>
    <div class="cols"><div>
      <section class="box"><h3>1. มาตรฐาน/ตัวชี้วัด (ผลการเรียนรู้)</h3><div>${nl(plan.standards)}</div></section>
      <section class="box"><h3>2. จุดประสงค์การเรียนรู้</h3><div>${nl(plan.objectives)}</div></section>
      <section class="box"><h3>3. กิจกรรมการเรียนรู้</h3><div><b>ขั้นนำเข้าสู่บทเรียน</b><br>${nl(plan.activities_intro)}<br><br><b>ขั้นสอน</b><br>${nl(plan.activities_main)}<br><br><b>ขั้นสรุป</b><br>${nl(plan.activities_wrap)}</div></section>
      <section class="box"><h3>4. การวัดและประเมินผล</h3><div>${nl(plan.assessment)}</div></section>
    </div><div>
      <section class="box"><h3>5. สื่อการเรียนรู้</h3><div>${nl(plan.media)}</div></section>
      <section class="box"><h3>งาน/การบ้าน และหมายเหตุ</h3><div>${nl(plan.homework)}<br>${nl(plan.teacher_notes)}</div></section>
      <section class="reflection"><b>บันทึกหลังการสอน</b><br><b>ผลการจัดการเรียนรู้:</b> ${nl(reflection?.reflection_text)}<br><b>ปัญหา/แนวทางแก้ไข:</b> ${nl(reflection?.issues_solutions)}<br><b>ข้อเสนอแนะ:</b> ${nl(reflection?.suggestions)}</section>
    </div></div>
    <div class="sign-grid">${sig(urls.classHead, reflection?.class_head_name, 'หัวหน้าห้อง')}${sig(urls.teacher, reflection?.teacher_name || teacher.full_name, 'ครูผู้สอน')}${sig(urls.deptHead, reflection?.dept_head_name || dept?.head_name, 'หัวหน้ากลุ่มสาระ')}</div>
  </div><script>window.addEventListener('load',()=>setTimeout(()=>window.print(),350))<\/script></body></html>`)
  w.document.close()
}

export async function openLessonPlanDocument({ plan, cls, teacher, classId, currentWeek }) {
  document.getElementById('lp-document-modal')?.remove()
  const departments = await getDepartments().catch(() => [])
  const deptKey = String(cls?.master_subjects?.dept ?? teacher?.dept ?? '').trim().toLowerCase()
  const dept = departments.find(d => [d.dept_code,d.dept_name,d.category].some(v => String(v ?? '').trim().toLowerCase() === deptKey)) ?? null
  const headRel = cls?.students
  const classHeadDefault = (Array.isArray(headRel) ? headRel[0]?.full_name : headRel?.full_name) ?? ''
  let weekNo = currentWeek >= plan.week_start && currentWeek <= plan.week_end ? currentWeek : plan.week_start
  const m = document.createElement('div'); m.id='lp-document-modal'; m.className='fixed inset-0 z-[98] bg-black/60 flex items-center justify-center p-3'; document.body.appendChild(m)

  const render = async () => {
    const reflection = await getLessonPlanReflection(plan.id, classId, weekNo).catch(() => null)
    const resolve = path => getLessonPlanAssetUrl(path).catch(() => null)
    const [classHeadUrl, teacherUrl, deptHeadUrl] = await Promise.all([
      resolve(reflection?.class_head_signature_path),
      resolve(reflection?.teacher_signature_path || reflection?.signature_data_url),
      resolve(reflection?.dept_head_signature_path || dept?.head_sign_url),
    ])
    m.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
      <div class="flex justify-between gap-3 mb-3"><div><h3 class="font-bold text-gray-800">📝 ${esc(plan.title)}</h3><p class="text-xs text-gray-400">บันทึกหลังสอนและลายเซ็นครบ 3 ฝ่าย</p></div><button data-close class="w-10 h-10 rounded-xl border text-gray-400">✕</button></div>
      <label class="text-xs font-bold text-gray-500">สัปดาห์ที่<select id="lp-doc-week" class="ml-2 border rounded-lg px-2 py-1 bg-white">${Array.from({length:plan.week_end-plan.week_start+1},(_,i)=>plan.week_start+i).map(w=>`<option value="${w}" ${w===weekNo?'selected':''}>${w}</option>`).join('')}</select></label>
      <div class="grid sm:grid-cols-3 gap-3 mt-4">
        ${signaturePadHTML('class-head','หัวหน้าห้อง',reflection?.class_head_name || classHeadDefault,classHeadUrl)}
        ${signaturePadHTML('teacher','ครูผู้สอน',reflection?.teacher_name || teacher.full_name,teacherUrl)}
        ${signaturePadHTML('dept-head','หัวหน้ากลุ่มสาระ',reflection?.dept_head_name || dept?.head_name || '',deptHeadUrl)}
      </div>
      <div class="grid sm:grid-cols-3 gap-3 mt-4"><label class="text-xs font-bold text-gray-500">ผลการจัดการเรียนรู้<textarea id="lp-doc-result" rows="4" class="mt-1 w-full border rounded-xl p-2 font-normal">${esc(reflection?.reflection_text || '')}</textarea></label><label class="text-xs font-bold text-gray-500">ปัญหา/แนวทางแก้ไข<textarea id="lp-doc-issues" rows="4" class="mt-1 w-full border rounded-xl p-2 font-normal">${esc(reflection?.issues_solutions || '')}</textarea></label><label class="text-xs font-bold text-gray-500">ข้อเสนอแนะ<textarea id="lp-doc-suggestions" rows="4" class="mt-1 w-full border rounded-xl p-2 font-normal">${esc(reflection?.suggestions || '')}</textarea></label></div>
      <div class="grid grid-cols-2 gap-2 mt-4"><button id="lp-doc-save" class="py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold">💾 บันทึกทั้งหมด</button><button id="lp-doc-print" class="py-3 rounded-xl bg-indigo-600 text-white text-xs font-bold">🖨️ บันทึกแล้วพิมพ์</button></div>
    </div>`
    const pads = Object.fromEntries([...m.querySelectorAll('[data-sign-role]')].map(box => [box.dataset.signRole, bindPad(box)]))
    m.querySelector('[data-close]').addEventListener('click',()=>m.remove())
    m.querySelector('#lp-doc-week').addEventListener('change',e=>{weekNo=asInt(e.target.value,plan.week_start);render()})

    const save = async () => {
      const roleMap = { 'class-head':'class_head_signature_path', teacher:'teacher_signature_path', 'dept-head':'dept_head_signature_path' }
      const existingPaths = { 'class-head':reflection?.class_head_signature_path, teacher:reflection?.teacher_signature_path, 'dept-head':reflection?.dept_head_signature_path }
      const nextPaths = { ...existingPaths }
      for (const [role,pad] of Object.entries(pads)) {
        const source = pad.file() || (pad.hasDrawn() ? await canvasBlob(pad.canvas) : null)
        if (source) nextPaths[role] = await uploadLessonPlanSignature(plan.id,classId,role,source)
      }
      return upsertLessonPlanReflection({
        lesson_plan_id:plan.id,class_id:classId,teacher_id:teacher.id,week_no:weekNo,
        reflection_text:m.querySelector('#lp-doc-result').value.trim()||null,issues_solutions:m.querySelector('#lp-doc-issues').value.trim()||null,suggestions:m.querySelector('#lp-doc-suggestions').value.trim()||null,
        class_head_name:pads['class-head'].name()||null,class_head_signature_path:nextPaths['class-head']||null,class_head_signed_at:nextPaths['class-head']?new Date().toISOString():null,
        teacher_name:pads.teacher.name()||null,teacher_signature_path:nextPaths.teacher||null,teacher_signed_at:nextPaths.teacher?new Date().toISOString():null,
        dept_head_name:pads['dept-head'].name()||null,dept_head_signature_path:nextPaths['dept-head']||null,dept_head_signed_at:nextPaths['dept-head']?new Date().toISOString():null,
        signature_data_url:reflection?.signature_data_url||null,signed_at:(nextPaths.teacher||reflection?.signature_data_url)?new Date().toISOString():null,
      })
    }
    m.querySelector('#lp-doc-save').addEventListener('click',async e=>{const b=e.currentTarget;b.disabled=true;b.textContent='กำลังบันทึก...';try{await save();showToast('บันทึกเอกสารและลายเซ็นแล้ว ✅','success');await render()}catch(err){showToast('บันทึกไม่สำเร็จ: '+(err.message||''),'error');b.disabled=false;b.textContent='💾 บันทึกทั้งหมด'}})
    m.querySelector('#lp-doc-print').addEventListener('click',async e=>{const b=e.currentTarget;b.disabled=true;b.textContent='กำลังเตรียมเอกสาร...';try{const saved=await save();const urls={classHead:await resolve(saved.class_head_signature_path),teacher:await resolve(saved.teacher_signature_path||saved.signature_data_url),deptHead:await resolve(saved.dept_head_signature_path||dept?.head_sign_url)};printLessonPlan({plan,cls,teacher,reflection:saved,urls,dept});showToast('เปิดหน้าพิมพ์แล้ว','success')}catch(err){showToast('เตรียมเอกสารไม่สำเร็จ: '+(err.message||''),'error')}finally{b.disabled=false;b.textContent='🖨️ บันทึกแล้วพิมพ์'}})
  }
  m.addEventListener('click',e=>{if(e.target===m)m.remove()}); await render()
}
