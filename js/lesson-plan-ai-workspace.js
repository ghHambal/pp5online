// AI workspace สำหรับกำหนดการสอน/แผนหน้าเดียว
// ระบบไม่เรียก AI เอง: สร้าง Prompt + JSON Schema ให้ครูนำไปใช้กับ AI ส่วนตัว แล้วนำ JSON กลับมาบันทึก
import {
  createSyllabusItem, updateSyllabusItem, createLessonPlan, updateLessonPlan,
  getLessonPlanReflection, getLessonPlanReflectionsForPlan, upsertLessonPlanReflection, getDepartments, getTeachersWithSignatures,
} from './api.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
import { uploadLessonPlanSignature, getLessonPlanAssetUrl, uploadCouncilTeacherSignature } from './storage.js'
import { updateMySignature } from './council-api.js'

const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[ch])
const asText = value => Array.isArray(value) ? value.map(v => typeof v === 'string' ? v : JSON.stringify(v)).join('\n') : value == null ? '' : String(value)
const asInt = (value, fallback = null) => Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : fallback
const isoDate = value => /^\d{4}-\d{2}-\d{2}$/.test(String(value ?? '')) ? String(value) : null
const thaiShortDate = value => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value ?? ''))
  return match ? `${match[3]}/${match[2]}/${String(Number(match[1]) + 543).slice(-2)}` : '........................'
}
const REFLECTION_NOTE_PREFIX = 'pp5-reflection-v1:'
const DEFAULT_MINUTES_PER_PERIOD = 45
const REFLECTION_NOTE_FONTS = [
  ['Sarabun', 'สารบรรณ'], ['TH Sarabun New', 'TH Sarabun New'],
  ['Mali', 'Mali · ลายมือ'], ['Itim', 'Itim · ลายมือ'], ['Sriracha', 'Sriracha · ลายมือ'],
]
function parseReflectionNote(value) {
  const raw = String(value ?? '')
  if (!raw.startsWith(REFLECTION_NOTE_PREFIX)) return { mode: 'type', text: raw, color: '#173b78', font: 'Sarabun', drawing: '' }
  try {
    const parsed = JSON.parse(raw.slice(REFLECTION_NOTE_PREFIX.length))
    return { mode: parsed.mode === 'draw' ? 'draw' : 'type', text: String(parsed.text ?? ''), color: /^#[0-9a-f]{6}$/i.test(parsed.color) ? parsed.color : '#173b78', font: REFLECTION_NOTE_FONTS.some(([font]) => font === parsed.font) ? parsed.font : 'Sarabun', drawing: String(parsed.drawing ?? '') }
  } catch { return { mode: 'type', text: '', color: '#173b78', font: 'Sarabun', drawing: '' } }
}
function reflectionNoteFieldHTML(key, label, value) {
  const note = parseReflectionNote(value)
  const fontOptions = REFLECTION_NOTE_FONTS.map(([font, title]) => `<option value="${esc(font)}" ${note.font === font ? 'selected' : ''}>${esc(title)}</option>`).join('')
  return `<label class="text-xs font-bold text-gray-500">${label}<div data-reflection-note="${key}" data-initial-value="${esc(value ?? '')}" class="mt-1 rounded-xl border border-gray-200 p-2">
    <div class="flex flex-wrap items-center gap-2 mb-2"><select data-note-mode class="border rounded-lg px-2 py-1.5 text-[11px] bg-white font-normal"><option value="type" ${note.mode === 'type' ? 'selected' : ''}>พิมพ์ข้อความ</option><option value="draw" ${note.mode === 'draw' ? 'selected' : ''}>เขียนด้วยลายมือ</option></select><label class="flex items-center gap-1 text-[10px] font-normal">สี <input data-note-color type="color" value="${note.color}" class="w-8 h-7 p-0.5 border rounded"></label><select data-note-font class="border rounded-lg px-2 py-1.5 text-[10px] bg-white font-normal">${fontOptions}</select></div>
    <textarea data-note-text rows="4" class="w-full border rounded-lg p-2 font-normal resize-y" style="color:${note.color};font-family:'${esc(note.font)}',sans-serif;${note.mode === 'draw' ? 'display:none' : ''}" placeholder="${label}">${esc(note.text)}</textarea>
    <div data-note-draw-wrap style="${note.mode === 'draw' ? '' : 'display:none'}"><canvas data-note-canvas width="1000" height="240" class="w-full h-24 border rounded-lg bg-white touch-none"></canvas><button data-note-clear type="button" class="mt-1 text-[10px] text-red-500 font-normal">ล้างลายมือ</button></div>
  </div></label>`
}
function bindReflectionNote(box) {
  const mode = box.querySelector('[data-note-mode]')
  const color = box.querySelector('[data-note-color]')
  const font = box.querySelector('[data-note-font]')
  const text = box.querySelector('[data-note-text]')
  const drawWrap = box.querySelector('[data-note-draw-wrap]')
  const canvas = box.querySelector('[data-note-canvas]')
  const ctx = canvas.getContext('2d')
  let drawing = false
  let hasDrawing = false
  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = color.value
  const paintTextStyle = () => {
    text.style.color = color.value
    text.style.fontFamily = `'${font.value}', sans-serif`
  }
  const syncMode = () => {
    const isDraw = mode.value === 'draw'
    text.style.display = isDraw ? 'none' : ''
    drawWrap.style.display = isDraw ? '' : 'none'
  }
  const point = event => {
    const rect = canvas.getBoundingClientRect()
    return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height }
  }
  canvas.addEventListener('pointerdown', event => {
    drawing = true; hasDrawing = true; canvas.setPointerCapture?.(event.pointerId)
    const p = point(event); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.strokeStyle = color.value
  })
  canvas.addEventListener('pointermove', event => {
    if (!drawing) return
    const p = point(event); ctx.lineTo(p.x, p.y); ctx.stroke()
  })
  for (const eventName of ['pointerup', 'pointercancel', 'pointerleave']) canvas.addEventListener(eventName, () => { drawing = false })
  mode.addEventListener('change', syncMode)
  color.addEventListener('input', () => { ctx.strokeStyle = color.value; paintTextStyle() })
  font.addEventListener('change', paintTextStyle)
  box.querySelector('[data-note-clear]').addEventListener('click', () => { ctx.clearRect(0, 0, canvas.width, canvas.height); hasDrawing = false })
  const note = parseReflectionNote(box.dataset.initialValue ?? '')
  if (note.drawing) {
    const image = new Image()
    image.onload = () => { ctx.drawImage(image, 0, 0, canvas.width, canvas.height); hasDrawing = true }
    image.src = note.drawing
  }
  syncMode()
  return {
    value() {
      const payload = { mode: mode.value, text: text.value.trim(), color: color.value, font: font.value, drawing: mode.value === 'draw' && hasDrawing ? canvas.toDataURL('image/png') : '' }
      if (payload.mode === 'type' && !payload.text) return null
      if (payload.mode === 'draw' && !payload.drawing) return null
      return REFLECTION_NOTE_PREFIX + JSON.stringify(payload)
    },
  }
}
const stripFence = text => String(text ?? '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')
const WEEKDAY_LABELS = { 1: 'วันจันทร์', 2: 'วันอังคาร', 3: 'วันพุธ', 4: 'วันพฤหัสบดี', 5: 'วันศุกร์', 6: 'วันเสาร์', 7: 'วันอาทิตย์' }
const normalizeScheduleDays = days => [...new Set((days ?? []).map(day => asInt(day)).filter(day => day >= 1 && day <= 7 && day !== 6))].sort((a, b) => (a % 7) - (b % 7))

function schoolWeekRange(weekNo, semesterStart, semesterEnd, scheduledDays = [], useWholeWeek = false) {
  if (!Number.isInteger(Number(weekNo)) || Number(weekNo) < 1 || !isoDate(semesterStart)) {
    return { start: null, end: null, dates: [] }
  }
  const [startYear, startMonth, startDay] = semesterStart.split('-').map(Number)
  const termStart = new Date(startYear, startMonth - 1, startDay)
  const weekSunday = new Date(termStart)
  weekSunday.setDate(termStart.getDate() - termStart.getDay() + (Number(weekNo) - 1) * 7)
  const weekFriday = new Date(weekSunday)
  weekFriday.setDate(weekSunday.getDate() + 5)
  const lower = weekSunday < termStart ? termStart : weekSunday
  let upper = weekFriday
  if (isoDate(semesterEnd)) {
    const [endYear, endMonth, endDay] = semesterEnd.split('-').map(Number)
    const termEnd = new Date(endYear, endMonth - 1, endDay)
    if (upper > termEnd) upper = termEnd
  }
  if (upper < lower) return { start: null, end: null, dates: [] }

  const allowedDays = new Set(normalizeScheduleDays(scheduledDays))
  const dates = []
  for (const date = new Date(lower); date <= upper; date.setDate(date.getDate() + 1)) {
    const dayNo = date.getDay() || 7
    if (!useWholeWeek && !allowedDays.has(dayNo)) continue
    dates.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`)
  }
  return { start: dates[0] ?? null, end: dates.at(-1) ?? null, dates }
}

function schoolWeekCount(semesterStart, semesterEnd) {
  if (!isoDate(semesterStart) || !isoDate(semesterEnd)) return null
  const [startYear, startMonth, startDay] = semesterStart.split('-').map(Number)
  const [endYear, endMonth, endDay] = semesterEnd.split('-').map(Number)
  const start = new Date(startYear, startMonth - 1, startDay)
  const end = new Date(endYear, endMonth - 1, endDay)
  if (end < start) return null
  const firstSunday = new Date(start)
  firstSunday.setDate(start.getDate() - start.getDay())
  return Math.floor((end - firstSunday) / 604800000) + 1
}

function parseWeekNumbers(value, maxWeek, label) {
  const tokens = String(value ?? '').split(/[\s,，]+/).map(token => token.trim()).filter(Boolean)
  const weeks = tokens.map(token => {
    if (!/^\d+$/.test(token)) throw new Error(`${label}: กรุณาระบุเลขสัปดาห์คั่นด้วยเครื่องหมายจุลภาค`)
    const week = Number(token)
    if (week < 1 || week > maxWeek) throw new Error(`${label}: เลขสัปดาห์ต้องอยู่ระหว่าง 1-${maxWeek}`)
    return week
  })
  return [...new Set(weeks)].sort((a, b) => a - b)
}

const lessonSchema = {
  schema_version: 'pp5.lesson_plan.v1',
  type: 'lesson_plan',
  course: { course_type: 'basic' },
  plans: [{
    title: 'แผนการจัดการเรียนรู้ ครั้งที่ 1', week_start: 1, week_end: 1, session_number: 1,
    lesson_date: '2026-05-11', period_count: 2, minutes_per_period: 45, duration_minutes: 90, unit_title: 'หน่วยการเรียนรู้ที่ 1',
    standards_type: 'indicators', standards: ['ค.1.2 ม.2/1 : อธิบายความสัมพันธ์ของจำนวนและการดำเนินการ'], standards_source: ['หลักสูตรแกนกลางฯ หน้า ...'], objectives: ['อธิบายความหมายของเลขยกกำลังได้'], key_concept: 'ความหมายของเลขยกกำลัง',
    activities: { intro: ['ทบทวนเลขยกกำลังด้วยโจทย์สั้น'], main: ['แยกตัวประกอบและตรวจคำตอบ'], wrap: ['สรุปวิธีคิด 1 ประโยค'] },
    media: ['หนังสือเรียน'], assessment: ['ตรวจคำตอบจากแบบฝึกหัด'], homework: '', teacher_notes: '',
    schedule_alignment: 'aligned', deviation_reason: '',
  }],
}

function courseMeta(cls) {
  const ms = cls?.master_subjects ?? {}
  return {
    subject_code: ms.subject_code ?? '', subject_name: ms.subject_name ?? '',
    grade_level: ms.grade_level ?? '', class_name: cls?.class_name ?? '',
    credit: ms.credit ?? '', learning_area: ms.subject_group ?? ms.dept ?? '',
    semester: ms.semester ?? null, academic_year: ms.academic_year ?? null,
  }
}

function scheduledLessonSessions(syllabusItems = [], sessionsPerWeek = 1, weeklySessionConfigs = []) {
  const sessions = []
  const coveredWeeks = new Set()
  for (const item of [...syllabusItems].sort((a, b) => asInt(a.week_start) - asInt(b.week_start))) {
    const weekStart = asInt(item.week_start)
    const weekEnd = asInt(item.week_end, weekStart)
    const weekType = item.source_json?.week_type ?? 'teaching'
    if (!Number.isInteger(weekStart) || weekStart < 1 || weekEnd < weekStart || !['teaching', 'midterm_exam', 'final_exam'].includes(weekType)) continue
    for (let week = weekStart; week <= weekEnd; week++) {
      if (coveredWeeks.has(week)) continue
      coveredWeeks.add(week)
      for (let sessionInWeek = 1; sessionInWeek <= sessionsPerWeek; sessionInWeek++) {
        const config = weeklySessionConfigs[sessionInWeek - 1] ?? {}
        const periodCount = Math.max(1, asInt(config.periodCount, 2))
        const minutesPerPeriod = Math.max(1, asInt(config.minutesPerPeriod, DEFAULT_MINUTES_PER_PERIOD))
        sessions.push({
          session_number: sessions.length + 1, session_in_week: sessionInWeek, sessions_per_week: sessionsPerWeek,
          week_start: week, week_end: week, lesson_date: null, week_type: weekType,
          period_count: periodCount, minutes_per_period: minutesPerPeriod, duration_minutes: periodCount * minutesPerPeriod,
          topic: item.topic ?? '', teaching_methods: item.teaching_methods ?? '', notes: item.notes ?? '',
          unit_title: item.unit_title ?? item.source_json?.unit_title ?? '', key_concept: item.topic ?? '',
        })
      }
    }
  }
  return sessions
}

function makePrompt({ mode, cls, teacher, syllabusItems, week, session, sessionsPerWeek = 1, weeklySessionConfigs = [], calendarWeeks, midtermWeeks, finalWeeks, semesterStart, semesterEnd, scheduledDays = [], includeUnitTitle = true, topic, teachingUnits, files }) {
  const meta = courseMeta(cls)
  const normalizedScheduleDays = normalizeScheduleDays(scheduledDays)
  const scheduledWeekdays = normalizedScheduleDays.map(day => WEEKDAY_LABELS[day])
  const examWeeks = [...new Set([...(midtermWeeks ?? []), ...(finalWeeks ?? [])])]
  const teachingWeeks = mode === 'schedule' ? Math.max(0, calendarWeeks - examWeeks.length) : null
  const firstTeachingWeek = Array.from({ length: calendarWeeks }, (_, i) => i + 1).find(weekNo => !examWeeks.includes(weekNo)) ?? 1
  const dateForWeek = weekNo => schoolWeekRange(weekNo, semesterStart, semesterEnd, mode === 'schedule' ? [] : normalizedScheduleDays, mode === 'schedule')
  const scheduleRowsExample = mode === 'schedule' ? [
    ...(teachingWeeks > 0 ? [{
      week_start: firstTeachingWeek, week_end: firstTeachingWeek, date_start: dateForWeek(firstTeachingWeek).start, date_end: dateForWeek(firstTeachingWeek).end, week_type: 'teaching',
      unit_title: 'หน่วยการเรียนรู้ที่ 1', topic: 'หัวข้อที่จะสอน', description: '',
      teaching_methods: 'รูปแบบการสอน', notes: '',
    }] : []),
    ...(midtermWeeks ?? []).map(weekNo => ({
      week_start: weekNo, week_end: weekNo, date_start: dateForWeek(weekNo).start, date_end: dateForWeek(weekNo).end, week_type: 'midterm_exam', unit_title: '',
      topic: 'สอบกลางภาค', description: '', teaching_methods: 'ทดสอบ/ประเมินผลกลางภาค', notes: '',
    })),
    ...(finalWeeks ?? []).map(weekNo => ({
      week_start: weekNo, week_end: weekNo, date_start: dateForWeek(weekNo).start, date_end: dateForWeek(weekNo).end, week_type: 'final_exam', unit_title: '',
      topic: 'สอบปลายภาค', description: '', teaching_methods: 'ทดสอบ/ประเมินผลปลายภาค', notes: '',
    })),
  ].sort((a, b) => a.week_start - b.week_start) : []
  const planSessions = mode === 'plan'
    ? scheduledLessonSessions(syllabusItems, sessionsPerWeek, weeklySessionConfigs).map(item => ({
      ...item,
      available_lesson_dates: dateForWeek(item.week_start).dates,
      unit_title: includeUnitTitle ? item.unit_title : '',
    }))
    : []
  const schema = mode === 'schedule' ? {
    schema_version: 'pp5.schedule.v2',
    type: 'course_schedule',
    course: {
      subject_code: meta.subject_code, subject_name: meta.subject_name, grade_level: meta.grade_level,
      teacher_name: teacher?.full_name ?? '', calendar_weeks: calendarWeeks,
      teaching_weeks_excluding_exams: teachingWeeks,
      midterm_exam_weeks: midtermWeeks, final_exam_weeks: finalWeeks,
    },
    weeks: scheduleRowsExample,
  } : {
    ...lessonSchema,
    course: { ...meta, course_type: 'ให้จำแนกจากหลักสูตรหรือเอกสารแนบ', total_sessions: planSessions.length, include_unit_title: includeUnitTitle },
    plans: planSessions.map(item => ({ ...lessonSchema.plans[0], ...item,
      title: `แผนการจัดการเรียนรู้ ครั้งที่ ${item.session_number}`,
      unit_title: includeUnitTitle && item.week_type === 'teaching' ? item.unit_title || 'หน่วยการเรียนรู้ที่ 1' : item.unit_title || '',
      key_concept: item.key_concept || 'หัวข้อตามกำหนดการสอน',
    })),
  }
  const duration = mode === 'schedule' ? null : weeklySessionConfigs.reduce((sum, config) => sum + config.periodCount * config.minutesPerPeriod, 0)
  const relevant = (syllabusItems ?? []).filter(it => !week || (week >= it.week_start && week <= it.week_end))
  const attachmentText = files.length
    ? files.map((f, i) => `${i + 1}. ${f.name} (${f.type || 'ไม่ทราบประเภท'})`).join('\n')
    : 'ไม่มีไฟล์แนบ'
  const weeklyDateRanges = mode === 'schedule' && semesterStart
    ? Array.from({ length: calendarWeeks }, (_, index) => {
      const range = dateForWeek(index + 1)
      return { week: index + 1, date_start: range.start, date_end: range.end, available_lesson_dates: range.dates }
    })
    : []
  return `คุณเป็นผู้ช่วยจัดทำเอกสารการสอนภาษาไทย ให้ใช้ข้อมูลจากเอกสารที่แนบและข้อมูลรายวิชาด้านล่างเป็นหลัก

งานที่ต้องทำ: ${mode === 'schedule' ? 'สร้างกำหนดการสอนทั้งภาคเรียน โดยแสดงเป็นภาพรวมรายสัปดาห์' : `สร้างแผนการจัดการเรียนรู้หน้าเดียวให้ครบทุกครั้งจากกำหนดการสอน จำนวน ${planSessions.length} ครั้ง ในคำตอบชุดเดียว`}

ข้อมูลจากระบบ PP5:
${JSON.stringify({ ...meta, teacher_name: teacher?.full_name ?? '', selected_week: week, sessions_per_week: mode === 'plan' ? sessionsPerWeek : null, weekly_session_configs: mode === 'plan' ? weeklySessionConfigs.map((config, index) => ({ session_in_week: index + 1, period_count: config.periodCount, minutes_per_period: config.minutesPerPeriod, duration_minutes: config.periodCount * config.minutesPerPeriod })) : null, weekly_total_duration_minutes: duration, calendar_weeks: mode === 'schedule' ? calendarWeeks : null, semester_start: semesterStart, week_first_day: 'วันอาทิตย์', week_last_instructional_day: 'วันศุกร์', scheduled_weekdays: scheduledWeekdays, schedule_days_found: normalizedScheduleDays.length > 0, schedule_days_required: mode === 'plan', date_range_source: mode === 'schedule' ? 'school_calendar' : 'teacher_timetable', weekly_date_ranges: weeklyDateRanges, teaching_weeks_excluding_exams: mode === 'schedule' ? teachingWeeks : null, midterm_exam_weeks: mode === 'schedule' ? midtermWeeks : null, final_exam_weeks: mode === 'schedule' ? finalWeeks : null, include_unit_title: mode === 'plan' ? includeUnitTitle : null, requested_sessions: mode === 'plan' ? planSessions : null, requested_topic: topic, requested_teaching_units: teachingUnits, existing_schedule: relevant }, null, 2)}

ไฟล์ที่ผู้ใช้จะอัปโหลดให้คุณอ่านประกอบ:
${attachmentText}

ข้อกำหนดสำคัญ:
1. ตรวจประเภทวิชาและอ่านหนังสือเรียน เอกสารหลักสูตร ผลการเรียนรู้/มาตรฐานและตัวชี้วัด รวมถึงแบบฟอร์มที่แนบก่อนตอบ ห้ามเดาประเภทวิชาจากรหัสวิชาเพียงอย่างเดียว
2. ${mode === 'schedule' ? `สร้างแถวให้ครบสัปดาห์ตามปฏิทิน 1-${calendarWeeks} โดยเลขสัปดาห์เป็นเลขจริง ห้ามเลื่อนหรือยุบเลขหลังช่วงสอบ สัปดาห์สอบกลางภาคคือ ${midtermWeeks?.join(', ') || 'ไม่มี'} และปลายภาคคือ ${finalWeeks?.join(', ') || 'ไม่มี'} ให้ใส่แถวสอบตาม week_type ที่ตรงกัน แล้วกระจายหน่วยการเรียนรู้ให้ครบในสัปดาห์สอนจริงที่เหลือ รวม ${teachingWeeks} สัปดาห์ ห้ามละเว้นหรือเปลี่ยนสาระสำคัญ; topic ให้เป็นชื่อเรื่องสั้น ๆ เท่านั้น ไม่เขียนบรรยายหรือเรียงความ` : `สร้างแผนหนึ่งรายการต่อทุก session ใน requested_sessions รวม ${sessionsPerWeek} ครั้งต่อสัปดาห์ตามค่าที่กำหนด โดยแต่ละสัปดาห์ให้มี session_in_week ตั้งแต่ 1-${sessionsPerWeek} และเรียง session_number ต่อเนื่องทั้งภาคเรียน คง week_start/week_end/week_type ตามข้อมูล ห้ามสร้างแผนเฉพาะสัปดาห์หยุด`}
3. ${mode === 'schedule' ? 'ใช้ week_type เป็น teaching, midterm_exam, final_exam หรือ break; แต่ละสัปดาห์สอบต้องมี topic ระบุชื่อการสอบ และห้ามใส่หน่วยการเรียนรู้ในแถวสอบ' : 'แต่ละแผนต้องใช้ period_count, minutes_per_period และ duration_minutes ตามค่าของ session_in_week ที่ตรงกันใน requested_sessions โดยแต่ละครั้งอาจมีจำนวนคาบและนาทีต่อคาบต่างกัน ห้ามนำค่าของครั้งหนึ่งไปใช้กับอีกครั้ง ต้องระบุ session_in_week และ session_number/week ให้ตรงกับ requested_sessions เลือก lesson_date จาก available_lesson_dates ของครั้งนั้นเท่านั้นและกระจายคนละครั้งคนละวันเมื่อมีวันสอนเพียงพอ หากไม่มีวันที่ให้ใช้ null'}
4. ${mode === 'schedule' ? 'สรุปเฉพาะหัวข้อที่จะสอนใน topic; description ให้เป็นสตริงว่าง; รูปแบบการสอนใช้คำหรือวลีสั้น ๆ และหมายเหตุให้สรุปใจความกระชับไม่เกิน 50 ตัวอักษร ห้ามเขียนเป็นประโยคยาว' : `ทุกช่องให้สรุปใจความสั้น ๆ ใช้ bullet หรือวลี ห้ามเขียนเรียงความ: จุดประสงค์ไม่เกิน 3 ข้อ; ขั้นนำ/สอน/สรุปอย่างละไม่เกิน 2 ข้อ; ช่องอื่นไม่เกิน 2 ข้อ เพื่อให้พอดีกับแบบฟอร์มหน้าเดียว${includeUnitTitle ? ' สัปดาห์สอนให้ใส่ชื่อหน่วยใน unit_title; สัปดาห์สอบใส่หน่วยที่เกี่ยวข้องเฉพาะเมื่อข้อมูลในเอกสารระบุชัด มิฉะนั้นให้เว้นว่าง' : ' ให้ unit_title เป็นสตริงว่าง ไม่ต้องใส่ชื่อหน่วย'}; สำหรับ week_type midterm_exam/final_exam ให้ปรับจุดประสงค์ กิจกรรม และการประเมินให้เป็นการสอบ: ชี้แจงกติกา ทำข้อสอบ และส่งข้อสอบ/สรุปการสอบ ห้ามเขียนเป็นกิจกรรมสอนเนื้อหาใหม่; key_concept ใส่ชื่อเรื่องสั้น ๆ`}
5. ${mode === 'schedule' ? 'ยึดหน่วยและหัวข้อจากเอกสารหลักสูตร หากแหล่งข้อมูลไม่พอให้หยุดและแจ้งครูให้อัปโหลดไฟล์หลักสูตร; หากครูยืนยันให้ AI ดำเนินการต่อ ให้ค้นหรือประเมินข้อมูลที่สอดคล้องกับหน่วยและหัวข้อของแต่ละครั้ง โดยอ้างอิงแหล่งข้อมูลที่ตรวจสอบได้แบบสั้นใน notes และห้ามแต่งรหัสขึ้นเอง' : `จำแนกประเภทวิชาและเลือกข้อมูลอ้างอิงให้ตรงประเภท: ถ้าเป็นรายวิชาพื้นฐาน ให้ standards_type เป็น "indicators" และเขียน standards เป็นรหัสพร้อมข้อความตัวชี้วัดในรูปแบบ "ค.1.2 ม.2/1 : ..." โดยใช้รหัสและข้อความที่ตรวจสอบได้จากหลักสูตร; ถ้าเป็นรายวิชาเพิ่มเติม ให้ standards_type เป็น "learning_outcomes" และเขียน standards เป็นผลการเรียนรู้ที่สอดคล้องกับรายวิชาและหน่วย/เรื่องของครั้งนั้น ไม่ใช้มาตรฐาน/ตัวชี้วัดแทนผลการเรียนรู้ หากเอกสารหรือข้อมูลไม่พอที่จะระบุประเภทวิชา มาตรฐาน/ตัวชี้วัด หรือผลการเรียนรู้ได้ ให้หยุดก่อนสร้าง JSON และขอให้ครูอัปโหลดไฟล์หลักสูตรหรือเอกสารรายวิชา พร้อมถามว่าต้องการให้ AI ค้นหา/ประเมินต่อหรือไม่ เมื่อครูยืนยันให้ดำเนินการต่อ ให้ค้นแหล่งข้อมูลหลักสูตรที่เชื่อถือได้เมื่อทำได้ และประเมินข้อมูลให้สอดคล้องกับหน่วยและหัวข้อของแต่ละครั้ง ระบุชื่อเอกสาร/หน้า/URL ใน standards_source; หากค้นแหล่งข้อมูลไม่ได้ ให้แจ้งข้อจำกัดและทำผลลัพธ์เป็นข้อเสนอชั่วคราวเพื่อให้ครูตรวจทาน ห้ามอ้างว่าข้อเสนอที่ AI ประเมินเองเป็นผลการเรียนรู้อย่างเป็นทางการ`}
6. คำตอบต้องมี JSON ทั้งหมดในกล่อง Markdown \`\`\`json เพียงกล่องเดียว ห้ามมีข้อความก่อนหรือหลังกล่อง
7. ${mode === 'schedule' ? 'กำหนดการสอนเป็นภาพรวมรายสัปดาห์ ไม่ต้องเชื่อมวันสอนจากตารางสอน ให้คัดลอก date_start/date_end และ available_lesson_dates จาก weekly_date_ranges ซึ่งคำนวณจากปฏิทินภาคเรียนในระบบเท่านั้น สัปดาห์ที่ 1 เริ่มจาก semester_start ซึ่งเป็นวันเปิดภาคเรียนจริง และไม่นับวันอาทิตย์ก่อนเปิดภาคเรียนซึ่งเป็นวันรับเกรด ห้ามหยุดสร้าง JSON เพราะ schedule_days_found เป็น false' : 'แผนหน้าเดียวเป็นรายครั้ง ให้เลือก lesson_date จาก available_lesson_dates ของครั้งนั้น ซึ่งมาจากวันสอนจริงของครูในตารางสอน ห้ามสมมติวันสอนเอง หากไม่พบวันสอนหรือช่วงนั้นไม่มีวันที่ ให้ใช้ null และแจ้งครูตรวจตารางสอน'}
8. ใช้ schema_version และชื่อ field ตามตัวอย่างทุกตัว แผนหน้าเดียวต้องเป็น JSON type=lesson_plan และกำหนด course.course_type เป็น "basic" หรือ "additional" ให้ตรงกับเอกสาร พร้อมกำหนด standards_type ของทุกแผนให้ตรงกัน (basic ใช้ indicators, additional ใช้ learning_outcomes) หากต้องหยุดถามครูตามข้อ 5 ให้ตอบเป็นคำถามสั้น ๆ ได้โดยไม่ต้องสร้าง JSON; หลังครูยืนยันแล้วจึงตอบ JSON ตามรูปแบบนี้

JSON Schema ตัวอย่าง:
${JSON.stringify(schema, null, 2)}`
}

function validatePayload(raw, mode, scheduleConfig = null, planConfig = null) {
  let data
  try { data = JSON.parse(stripFence(raw)) } catch { throw new Error('JSON ไม่ถูกต้อง กรุณาตรวจเครื่องหมายปีกกาและเครื่องหมายคำพูด') }
  if (mode === 'schedule') {
    if (data.type !== 'course_schedule' || !Array.isArray(data.weeks) || !data.weeks.length) throw new Error('ต้องเป็น course_schedule และมี weeks อย่างน้อย 1 รายการ')
    const isV2 = data.schema_version === 'pp5.schedule.v2'
    const maxWeek = isV2 ? Number(data.course?.calendar_weeks) : null
    if (isV2) {
      if (!Number.isInteger(maxWeek) || maxWeek < 1 || maxWeek > 30) throw new Error('course.calendar_weeks ต้องเป็นจำนวนเต็มระหว่าง 1-30')
      if (scheduleConfig && maxWeek !== scheduleConfig.calendarWeeks) throw new Error('จำนวนสัปดาห์ใน JSON ไม่ตรงกับค่าที่ระบุในตัวช่วย AI')
      if (!Array.isArray(data.course?.midterm_exam_weeks) || !Array.isArray(data.course?.final_exam_weeks)) throw new Error('กรุณาระบุ midterm_exam_weeks และ final_exam_weeks ในข้อมูล course')
      if (scheduleConfig && (
        JSON.stringify(data.course.midterm_exam_weeks) !== JSON.stringify(scheduleConfig.midtermWeeks)
        || JSON.stringify(data.course.final_exam_weeks) !== JSON.stringify(scheduleConfig.finalWeeks)
      )) throw new Error('สัปดาห์สอบใน JSON ไม่ตรงกับค่าที่ระบุในตัวช่วย AI')
    }
    const occupiedWeeks = new Map()
    data.weeks.forEach((w, i) => {
      const start = asInt(w.week_start)
      const end = asInt(w.week_end, start)
      if (start < 1 || end < start || !String(w.topic ?? '').trim()) throw new Error(`ข้อมูลสัปดาห์ลำดับ ${i + 1} ไม่ครบหรือช่วงสัปดาห์ไม่ถูกต้อง`)
      if (isV2) {
        if (end > maxWeek) throw new Error(`สัปดาห์ลำดับ ${i + 1} เกินจำนวนสัปดาห์ในปฏิทิน (${maxWeek})`)
        if (!['teaching', 'midterm_exam', 'final_exam', 'break'].includes(w.week_type)) throw new Error(`week_type ของสัปดาห์ลำดับ ${i + 1} ไม่ถูกต้อง`)
        if (w.date_start != null && !isoDate(w.date_start)) throw new Error(`date_start ของสัปดาห์ลำดับ ${i + 1} ต้องเป็น YYYY-MM-DD หรือ null`)
        if (w.date_end != null && !isoDate(w.date_end)) throw new Error(`date_end ของสัปดาห์ลำดับ ${i + 1} ต้องเป็น YYYY-MM-DD หรือ null`)
        if (scheduleConfig?.semesterStart) {
          const expectedStart = schoolWeekRange(start, scheduleConfig.semesterStart, scheduleConfig.semesterEnd, [], true).start
          const expectedEnd = schoolWeekRange(end, scheduleConfig.semesterStart, scheduleConfig.semesterEnd, [], true).end
          if (expectedStart && expectedEnd && (w.date_start !== expectedStart || w.date_end !== expectedEnd)) {
            throw new Error(`ช่วงวันที่สัปดาห์ ${start}${end !== start ? `–${end}` : ''} ต้องตรงกับปฏิทินภาคเรียนในระบบ (${expectedStart} ถึง ${expectedEnd})`)
          }
        }
        for (let weekNo = start; weekNo <= end; weekNo++) {
          if (occupiedWeeks.has(weekNo)) throw new Error(`สัปดาห์ที่ ${weekNo} ซ้ำหรือช่วงสัปดาห์ทับซ้อนกัน`)
          occupiedWeeks.set(weekNo, w.week_type)
        }
      }
    })
    if (isV2) {
      const midterm = data.course.midterm_exam_weeks
      const finals = data.course.final_exam_weeks
      if ([...midterm, ...finals].some(weekNo => !Number.isInteger(weekNo) || weekNo < 1 || weekNo > maxWeek)) throw new Error('เลขสัปดาห์สอบต้องอยู่ในช่วงสัปดาห์ตามปฏิทิน')
      if (midterm.some(weekNo => finals.includes(weekNo))) throw new Error('สัปดาห์สอบกลางภาคและปลายภาคห้ามซ้ำกัน')
      for (const weekNo of midterm) if (occupiedWeeks.get(weekNo) !== 'midterm_exam') throw new Error(`สัปดาห์ที่ ${weekNo} ต้องเป็นแถวสอบกลางภาค`)
      for (const weekNo of finals) if (occupiedWeeks.get(weekNo) !== 'final_exam') throw new Error(`สัปดาห์ที่ ${weekNo} ต้องเป็นแถวสอบปลายภาค`)
      for (const [weekNo, type] of occupiedWeeks) {
        if (type === 'midterm_exam' && !midterm.includes(weekNo)) throw new Error(`สัปดาห์ที่ ${weekNo} เป็นสอบกลางภาคแต่ไม่ได้เลือกไว้`)
        if (type === 'final_exam' && !finals.includes(weekNo)) throw new Error(`สัปดาห์ที่ ${weekNo} เป็นสอบปลายภาคแต่ไม่ได้เลือกไว้`)
      }
      for (let weekNo = 1; weekNo <= maxWeek; weekNo++) if (!occupiedWeeks.has(weekNo)) throw new Error(`ยังไม่มีข้อมูลสัปดาห์ที่ ${weekNo} กรุณาให้ AI ส่งข้อมูลครบทุกสัปดาห์ตามปฏิทิน`)
    }
  } else {
    if (data.type !== 'lesson_plan' || !Array.isArray(data.plans) || !data.plans.length) throw new Error('ต้องเป็น lesson_plan และมี plans อย่างน้อย 1 รายการ')
    if (!['basic', 'additional'].includes(data.course?.course_type)) throw new Error('course.course_type ต้องระบุเป็น basic หรือ additional')
    if (planConfig?.sessions?.length && data.plans.length !== planConfig.sessions.length) throw new Error(`ต้องมีแผนครบ ${planConfig.sessions.length} ครั้งตามกำหนดการสอน`)
    const expectedBySession = new Map((planConfig?.sessions ?? []).map(item => [item.session_number, item]))
    const seenSessions = new Set()
    data.plans.forEach((p, i) => {
      const sessionNo = asInt(p.session_number)
      if (!String(p.title ?? '').trim() || asInt(p.week_start) < 1 || !Number.isInteger(sessionNo) || sessionNo < 1) throw new Error(`แผนลำดับ ${i + 1} ไม่มีชื่อแผน ครั้งที่ หรือสัปดาห์`)
      if (seenSessions.has(sessionNo)) throw new Error(`ครั้งที่ ${sessionNo} ซ้ำกัน`)
      seenSessions.add(sessionNo)
      const expected = expectedBySession.get(sessionNo)
      if (planConfig?.sessions?.length && (!expected || asInt(p.week_start) !== expected.week_start || asInt(p.week_end, asInt(p.week_start)) !== expected.week_end)) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องตรงกับสัปดาห์ที่ ${expected?.week_start ?? 'กำหนดการสอน'}`)
      if (expected && asInt(p.session_in_week) !== expected.session_in_week) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องระบุ session_in_week เป็น ${expected.session_in_week}`)
      if (expected && asInt(p.period_count) !== expected.period_count) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องมี ${expected.period_count} คาบตามที่กำหนดสำหรับครั้งที่ ${expected.session_in_week} ของสัปดาห์`)
      if (expected && asInt(p.minutes_per_period) !== expected.minutes_per_period) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องใช้เวลาคาบละ ${expected.minutes_per_period} นาทีตามที่กำหนดสำหรับครั้งที่ ${expected.session_in_week} ของสัปดาห์`)
      if (expected && asInt(p.duration_minutes) !== expected.duration_minutes) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องมีเวลารวม ${expected.duration_minutes} นาที`)
      if (p.lesson_date != null && !isoDate(p.lesson_date)) throw new Error(`วันที่ของแผนครั้งที่ ${sessionNo} ต้องเป็น YYYY-MM-DD หรือ null`)
      if (expected?.available_lesson_dates?.length && !expected.available_lesson_dates.includes(p.lesson_date)) throw new Error(`วันที่ของแผนครั้งที่ ${sessionNo} ต้องเลือกจากวันสอนจริงของครู: ${expected.available_lesson_dates.join(', ')}`)
      if (planConfig?.includeUnitTitle && expected?.week_type === 'teaching' && !String(p.unit_title ?? '').trim()) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องระบุชื่อหน่วยการเรียนรู้ตามตัวเลือก`)
      if (planConfig && !planConfig.includeUnitTitle && String(p.unit_title ?? '').trim()) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องเว้นชื่อหน่วยการเรียนรู้ตามตัวเลือก`)
      if (expected?.week_type && p.week_type !== expected.week_type) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องใช้ประเภทสัปดาห์ ${expected.week_type} ตามกำหนดการสอน`)
      const expectedStandardsType = data.course.course_type === 'additional' ? 'learning_outcomes' : 'indicators'
      if (p.standards_type !== expectedStandardsType) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องใช้ ${data.course.course_type === 'additional' ? 'ผลการเรียนรู้' : 'มาตรฐาน/ตัวชี้วัด'} ให้ตรงกับประเภทวิชา`)
      if (!Array.isArray(p.standards) || !p.standards.length || p.standards.some(item => !String(item ?? '').trim())) throw new Error(`แผนครั้งที่ ${sessionNo} ต้องระบุ${data.course.course_type === 'additional' ? 'ผลการเรียนรู้' : 'มาตรฐาน/ตัวชี้วัด'}`)
      if (p.schedule_alignment && !['aligned', 'deviated', 'partial'].includes(p.schedule_alignment)) throw new Error(`schedule_alignment ของแผนลำดับ ${i + 1} ไม่ถูกต้อง`)
    })
  }
  return data
}

export function openLessonPlanAIWorkspace({ teacher, cls, courseId, syllabusItems, lessonPlans, currentWeek, initialMode = 'plan', semesterStart = null, semesterEnd = null, scheduledDays = [], onSaved }) {
  document.getElementById('lp-ai-workspace')?.remove()
  const m = document.createElement('div')
  m.id = 'lp-ai-workspace'
  m.className = 'fixed inset-0 z-[97] bg-black/60 flex items-stretch justify-stretch'
  const mode = initialMode === 'schedule' ? 'schedule' : 'plan'
  const isSchedule = mode === 'schedule'
  const actualScheduleDays = normalizeScheduleDays(scheduledDays)
  const configuredWeekCount = semesterStart && semesterEnd
    ? Math.max(1, Math.min(30, schoolWeekCount(semesterStart, semesterEnd) ?? 20))
    : 20
  const dateForWeek = weekNo => schoolWeekRange(weekNo, semesterStart, semesterEnd, actualScheduleDays)
  let files = []
  let teachingUnits = [{ title: '', description: '' }]
  let weeklySessionValues = [{ periodCount: 2, minutesPerPeriod: DEFAULT_MINUTES_PER_PERIOD }]
  m.innerHTML = `<div class="bg-white w-full h-full overflow-y-auto p-4 sm:p-6">
    <div class="flex items-start justify-between gap-3 mb-4">
      <div><span class="inline-flex px-2.5 py-1 rounded-full ${isSchedule ? 'bg-blue-50 text-blue-700' : 'bg-violet-50 text-violet-700'} text-[10px] font-extrabold mb-2">${isSchedule ? '📘 กำหนดการสอน' : '📝 แผนหน้าเดียว'}</span><h3 class="font-extrabold text-gray-800 text-lg">${isSchedule ? 'สร้างกำหนดการสอนด้วย AI' : 'สร้างแผนการสอนหน้าเดียวด้วย AI'}</h3><p class="text-xs text-gray-400 mt-1">สร้าง Prompt → ใช้กับ AI ที่ครูเลือก → นำ JSON กลับมาวาง → ระบบสร้าง${isSchedule ? 'กำหนดการสอน' : 'แผนการสอน'}</p></div>
      <button data-close class="w-10 h-10 rounded-xl border text-gray-400">✕</button>
    </div>
    ${isSchedule ? `<div class="rounded-2xl border border-blue-100 bg-blue-50/70 p-4 mb-4"><p class="text-sm font-bold text-blue-800">สร้างโครงสร้างทั้งภาคเรียนในครั้งเดียว</p><p class="text-[11px] text-blue-600 mt-1">AI จะจัดช่วงสัปดาห์ หัวข้อ วิธีสอน และหมายเหตุตามหน่วยการเรียนรู้กับเอกสารที่แนบ</p></div>
    <section class="rounded-2xl border border-amber-200 bg-amber-50 p-4 mb-4">
      <p class="text-sm font-extrabold text-amber-900">กำหนดสัปดาห์ตามปฏิทินและสัปดาห์สอบ</p>
      <p class="text-[11px] text-amber-700 mt-1">เลขสัปดาห์จะคงตามปฏิทินจริง สัปดาห์สอบจะแสดงเป็นแถวในกำหนดการ ไม่ทำให้สัปดาห์เรียนถัดไปเลื่อนเลข</p>
      <div class="grid sm:grid-cols-3 gap-2 mt-3">
        <label class="text-[11px] font-bold text-amber-900">สัปดาห์ทั้งหมด<input id="lp-ai-calendar-weeks" type="number" min="1" max="30" value="${configuredWeekCount}" class="mt-1 w-full min-h-[42px] border border-amber-200 rounded-xl px-3 bg-white text-base"></label>
        <label class="text-[11px] font-bold text-amber-900">สัปดาห์สอบกลางภาค<input id="lp-ai-midterm-weeks" type="text" value="10" placeholder="เช่น 10 หรือ 9,10" class="mt-1 w-full min-h-[42px] border border-amber-200 rounded-xl px-3 bg-white text-base font-normal"></label>
        <label class="text-[11px] font-bold text-amber-900">สัปดาห์สอบปลายภาค<input id="lp-ai-final-weeks" type="text" value="19,20" placeholder="เช่น 19,20" class="mt-1 w-full min-h-[42px] border border-amber-200 rounded-xl px-3 bg-white text-base font-normal"></label>
      </div>
      <p class="text-[11px] text-amber-800 mt-2">วันเปิดภาคเรียน: <strong>${esc(semesterStart || 'ยังไม่ได้ตั้งค่า')}</strong> · กรอบสัปดาห์อาทิตย์–ศุกร์ · วันสอนจริงของวิชานี้: <strong>${esc(actualScheduleDays.map(day => WEEKDAY_LABELS[day]).join(', ') || 'ไม่พบตารางสอนรายวิชา')}</strong></p>
      <p id="lp-ai-week-summary" class="text-[11px] font-bold text-amber-800 mt-2"></p>
    </section>
    <section class="rounded-2xl border border-gray-200 p-4 mb-4">
      <div class="flex items-start justify-between gap-3 mb-3"><div><p class="text-sm font-extrabold text-gray-800">หน่วยการเรียนรู้ที่ต้องสอนในเทอมนี้</p><p class="text-[11px] text-gray-400 mt-0.5">เพิ่มได้หลายหน่วย ระบบจะส่งชื่อและคำอธิบายให้ AI ใช้จัดกำหนดการ</p></div><button id="lp-ai-add-unit" type="button" class="min-h-[40px] px-3 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold flex-shrink-0">＋ เพิ่มหน่วย</button></div>
      <div id="lp-ai-units" class="space-y-2"></div>
    </section>` : `<section class="rounded-2xl border border-violet-100 bg-violet-50/70 p-4 mb-4">
      <p class="text-sm font-bold text-violet-800">สร้างแผนให้ครบทุกครั้งในครั้งเดียว</p>
      <p id="lp-ai-session-summary" class="text-[11px] text-violet-700 mt-1"></p>
      <label class="block max-w-sm mt-3 text-xs font-bold text-gray-600">จำนวนครั้งต่อสัปดาห์<input id="lp-ai-sessions-per-week" type="number" min="1" max="5" value="1" class="mt-1 w-full border rounded-xl px-3 py-2 font-normal"></label>
      <div id="lp-ai-weekly-session-configs" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3"></div>
      <p class="text-[10px] text-violet-600 mt-2">กำหนดจำนวนคาบและนาทีต่อคาบแยกแต่ละครั้งได้ เช่น ครั้งที่ 1 = 1 คาบ, ครั้งที่ 2 = 2 คาบ · รูปแบบนี้จะใช้ซ้ำทุกสัปดาห์</p>
      <label class="flex items-center gap-2 mt-3 text-xs font-bold text-violet-900"><input id="lp-ai-include-unit" type="checkbox" checked class="h-4 w-4 accent-violet-700"> ให้ AI ใส่ชื่อหน่วยการเรียนรู้บนแผน</label>
      <p class="text-[10px] text-violet-600 mt-1">เมื่อไม่เลือก ระบบจะเว้นชื่อหน่วยและแสดงเฉพาะ “เรื่อง …”</p>
    </section>
    <p id="lp-ai-duration-summary" class="text-[11px] text-violet-600 font-bold mb-3">รวมเวลา 100 นาที</p>`}
    <div class="rounded-2xl border border-dashed ${isSchedule ? 'border-blue-200 bg-blue-50/50' : 'border-violet-200 bg-violet-50/50'} p-4 mb-3">
      <p class="text-xs font-bold ${isSchedule ? 'text-blue-700' : 'text-violet-700'}">📎 เอกสารประกอบสำหรับ AI</p>
      <p class="text-[11px] text-gray-500 mt-1">เลือกหนังสือเรียน หลักสูตร หรือต้นแบบ ระบบจะใส่ชื่อไฟล์ใน Prompt ไฟล์ยังอยู่บนเครื่องและต้องแนบไฟล์เดียวกันให้ AI ด้วย</p>
      <input id="lp-ai-files" type="file" multiple accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg" class="mt-3 text-xs w-full">
      <div id="lp-ai-file-list" class="text-[11px] text-gray-500 mt-2"></div>
    </div>
    <div class="mt-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">Prompt สำหรับนำไปใช้กับ AI</label><div class="grid grid-cols-2 gap-2 sm:flex sm:justify-end"><button id="lp-ai-generate" class="min-h-[40px] px-3 rounded-xl ${isSchedule ? 'bg-blue-700' : 'bg-violet-700'} text-white text-xs font-bold">⚡ สร้าง Prompt</button><button id="lp-ai-copy" hidden disabled aria-disabled="true" class="min-h-[40px] px-3 rounded-xl border ${isSchedule ? 'border-blue-200 text-blue-700 bg-blue-50' : 'border-violet-200 text-violet-700 bg-violet-50'} text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed">📋 คัดลอก Prompt</button></div></div>
      <p id="lp-ai-prompt-status" class="text-[10px] text-amber-700 mb-1">ยังไม่ได้สร้าง Prompt · ตรวจข้อมูลให้ครบแล้วกด “⚡ สร้าง Prompt”</p>
      <textarea id="lp-ai-prompt" rows="8" class="w-full border rounded-xl p-3 text-[11px] font-mono" placeholder="กด “⚡ สร้าง Prompt” เพื่อสร้างคำสั่งจากข้อมูลล่าสุด"></textarea>
    </div>
    <div class="mt-4 pt-4 border-t">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">วาง JSON ที่ได้จาก AI</label><div class="grid grid-cols-2 gap-2 sm:flex sm:justify-end"><button id="lp-ai-validate" class="min-h-[40px] px-3 rounded-xl border ${isSchedule ? 'border-blue-200 text-blue-700' : 'border-violet-200 text-violet-700'} font-bold text-xs">🔎 ตรวจ JSON</button><button id="lp-ai-save" class="min-h-[40px] px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs">💾 สร้างในระบบ</button></div></div>
      <textarea id="lp-ai-json" rows="8" class="mt-1 w-full border rounded-xl p-3 text-[11px] font-mono" placeholder='วาง { "schema_version": ... } ที่นี่'></textarea>
      <div id="lp-ai-result" class="hidden mt-2 rounded-xl px-3 py-2 text-xs"></div>
    </div>
  </div>`
  document.body.appendChild(m)
  let promptReady = false
  const promptCopyButton = m.querySelector('#lp-ai-copy')
  const promptStatus = m.querySelector('#lp-ai-prompt-status')
  const markPromptStale = () => {
    if (!promptReady) return
    promptReady = false
    promptCopyButton.disabled = true
    promptCopyButton.setAttribute('aria-disabled', 'true')
    promptCopyButton.hidden = true
    promptStatus.textContent = 'ข้อมูลมีการเปลี่ยนแปลง · กด “⚡ สร้าง Prompt” ใหม่ก่อนคัดลอก'
    promptStatus.className = 'text-[10px] text-amber-700 mb-1'
  }
  const markPromptReady = () => {
    promptReady = true
    promptCopyButton.disabled = false
    promptCopyButton.setAttribute('aria-disabled', 'false')
    promptCopyButton.hidden = false
    promptStatus.textContent = 'Prompt สร้างจากข้อมูลล่าสุดแล้ว · แก้ข้อความในกล่องนี้ได้ก่อนคัดลอก'
    promptStatus.className = 'text-[10px] text-emerald-700 mb-1'
  }
  const isPromptInput = target => target instanceof Element
    && target.matches('input, textarea, select')
    && !target.matches('#lp-ai-prompt, #lp-ai-json')
  m.addEventListener('input', event => { if (isPromptInput(event.target)) markPromptStale() })
  m.addEventListener('change', event => { if (isPromptInput(event.target)) markPromptStale() })

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
      markPromptStale()
      teachingUnits = readTeachingUnits()
      teachingUnits.splice(asInt(btn.dataset.removeUnit, 0), 1)
      if (!teachingUnits.length) teachingUnits.push({ title: '', description: '' })
      renderTeachingUnits()
    }))
  }
  const getScheduleConfig = () => {
    if (!isSchedule) return null
    const calendarWeeks = asInt(m.querySelector('#lp-ai-calendar-weeks').value)
    if (!Number.isInteger(calendarWeeks) || calendarWeeks < 1 || calendarWeeks > 30) throw new Error('จำนวนสัปดาห์ตามปฏิทินต้องอยู่ระหว่าง 1-30')
    const midtermWeeks = parseWeekNumbers(m.querySelector('#lp-ai-midterm-weeks').value, calendarWeeks, 'สัปดาห์สอบกลางภาค')
    const finalWeeks = parseWeekNumbers(m.querySelector('#lp-ai-final-weeks').value, calendarWeeks, 'สัปดาห์สอบปลายภาค')
    if (midtermWeeks.some(weekNo => finalWeeks.includes(weekNo))) throw new Error('สัปดาห์สอบกลางภาคและปลายภาคห้ามซ้ำกัน')
    return { calendarWeeks, midtermWeeks, finalWeeks, scheduledDays: actualScheduleDays, semesterStart, semesterEnd }
  }
  if (isSchedule) {
    renderTeachingUnits()
    const paintScheduleSummary = () => {
      const summary = m.querySelector('#lp-ai-week-summary')
      try {
      const config = getScheduleConfig()
        const examCount = new Set([...config.midtermWeeks, ...config.finalWeeks]).size
        summary.textContent = `สัปดาห์สอนจริง ${config.calendarWeeks - examCount} · กลางภาค ${config.midtermWeeks.join(', ') || '—'} · ปลายภาค ${config.finalWeeks.join(', ') || '—'}`
        summary.classList.remove('text-red-600'); summary.classList.add('text-amber-800')
      } catch (err) {
        summary.textContent = err.message
        summary.classList.remove('text-amber-800'); summary.classList.add('text-red-600')
      }
    }
    for (const selector of ['#lp-ai-calendar-weeks', '#lp-ai-midterm-weeks', '#lp-ai-final-weeks']) {
      m.querySelector(selector).addEventListener('input', paintScheduleSummary)
    }
    paintScheduleSummary()
    m.querySelector('#lp-ai-add-unit').addEventListener('click', () => {
      teachingUnits = readTeachingUnits()
      teachingUnits.push({ title: '', description: '' })
      renderTeachingUnits()
      m.querySelector('[data-unit-row]:last-child [data-unit-title]')?.focus()
      markPromptStale()
    })
  }

  const getSessionsPerWeek = () => {
    if (isSchedule) return null
    const input = m.querySelector('#lp-ai-sessions-per-week')
    const value = Math.min(5, Math.max(1, asInt(input.value, 1)))
    input.value = String(value)
    return value
  }
  const readWeeklySessionConfigs = () => [...m.querySelectorAll('[data-weekly-session-config]')].map(row => ({
    periodCount: Math.max(1, asInt(row.querySelector('[data-session-period-count]').value, 1)),
    minutesPerPeriod: Math.max(1, asInt(row.querySelector('[data-session-minutes-per-period]').value, DEFAULT_MINUTES_PER_PERIOD)),
  }))
  const renderWeeklySessionConfigs = () => {
    const existing = readWeeklySessionConfigs()
    const source = existing.length ? existing : weeklySessionValues
    const count = getSessionsPerWeek()
    weeklySessionValues = Array.from({ length: count }, (_, index) => source[index] ?? source.at(-1) ?? { periodCount: 2, minutesPerPeriod: DEFAULT_MINUTES_PER_PERIOD })
    m.querySelector('#lp-ai-weekly-session-configs').innerHTML = weeklySessionValues.map((config, index) => `<div data-weekly-session-config class="rounded-xl border border-violet-100 bg-white p-3">
      <p class="text-xs font-extrabold text-violet-800 mb-2">ครั้งที่ ${index + 1} ในสัปดาห์</p>
      <div class="grid grid-cols-2 gap-2">
        <label class="text-[11px] font-bold text-gray-600">จำนวนคาบ<input data-session-period-count type="number" min="1" value="${config.periodCount}" class="mt-1 w-full border rounded-lg px-2 py-2 font-normal"></label>
        <label class="text-[11px] font-bold text-gray-600">นาทีต่อคาบ<input data-session-minutes-per-period type="number" min="1" value="${config.minutesPerPeriod}" class="mt-1 w-full border rounded-lg px-2 py-2 font-normal"></label>
      </div>
    </div>`).join('')
  }
  const getWeeklySessionConfigs = () => {
    const configs = readWeeklySessionConfigs()
    if (configs.length) weeklySessionValues = configs
    return weeklySessionValues
  }
  const getPlanConfig = () => {
    if (isSchedule) return null
    const weeklySessionConfigs = getWeeklySessionConfigs()
    const sessionsPerWeek = weeklySessionConfigs.length
    const sessions = scheduledLessonSessions(syllabusItems, sessionsPerWeek, weeklySessionConfigs).map(item => ({
      ...item,
      available_lesson_dates: dateForWeek(item.week_start).dates,
    }))
    if (!sessions.length) throw new Error('กรุณาสร้างกำหนดการสอนที่มีสัปดาห์เรียนหรือสัปดาห์สอบก่อน จึงจะสร้างแผนให้ครบทั้งภาคเรียนได้')
    return { sessions, sessionsPerWeek, weeklySessionConfigs, includeUnitTitle: m.querySelector('#lp-ai-include-unit').checked }
  }
  const paintDurationSummary = () => {
    if (isSchedule) return
    const configs = getWeeklySessionConfigs()
    const weeklyPeriods = configs.reduce((sum, config) => sum + config.periodCount, 0)
    const weeklyMinutes = configs.reduce((sum, config) => sum + config.periodCount * config.minutesPerPeriod, 0)
    const perSessionSummary = configs.map((config, index) => `ครั้ง ${index + 1}: ${config.periodCount} คาบ × ${config.minutesPerPeriod} นาที`).join(' · ')
    m.querySelector('#lp-ai-duration-summary').textContent = `${weeklyPeriods} คาบ / ${weeklyMinutes} นาทีต่อสัปดาห์ · ${perSessionSummary}`
    const scheduledWeeks = scheduledLessonSessions(syllabusItems).length
    m.querySelector('#lp-ai-session-summary').textContent = scheduledWeeks
      ? `พบ ${scheduledWeeks} สัปดาห์ตามกำหนดการ · จะสร้าง ${scheduledWeeks * configs.length} แผน (${configs.length} ครั้ง/สัปดาห์) · วันสอนจริง: ${actualScheduleDays.map(day => WEEKDAY_LABELS[day]).join(', ') || 'ไม่พบตารางสอนรายวิชา'} · ข้ามสัปดาห์หยุด`
      : 'ยังไม่มีกำหนดการสอน กรุณาสร้างกำหนดการก่อน'
  }
  if (!isSchedule) {
    const scheduledWeeks = scheduledLessonSessions(syllabusItems).length
    const sessionSummary = m.querySelector('#lp-ai-session-summary')
    if (!scheduledWeeks) sessionSummary.classList.add('text-red-600')
    renderWeeklySessionConfigs()
    m.querySelector('#lp-ai-sessions-per-week').addEventListener('input', () => {
      renderWeeklySessionConfigs()
      paintDurationSummary()
    })
    m.querySelector('#lp-ai-weekly-session-configs').addEventListener('input', paintDurationSummary)
    paintDurationSummary()
  }

  const prompt = () => {
    const planConfig = getPlanConfig()
    return makePrompt({
      mode, cls, teacher, syllabusItems, week: null, session: null,
      sessionsPerWeek: planConfig?.sessionsPerWeek ?? 1, weeklySessionConfigs: planConfig?.weeklySessionConfigs ?? [], ...getScheduleConfig(),
      scheduledDays: actualScheduleDays,
      includeUnitTitle: planConfig?.includeUnitTitle, topic: '',
      teachingUnits: isSchedule ? readTeachingUnits().filter(unit => unit.title || unit.description) : [], files,
      semesterStart, semesterEnd,
    })
  }
  const showResult = (message, ok) => {
    const box = m.querySelector('#lp-ai-result'); box.classList.remove('hidden')
    box.className = `mt-2 rounded-xl px-3 py-2 text-xs ${ok ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`
    box.textContent = message
  }
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('[data-close]').addEventListener('click', () => m.remove())
  m.querySelector('#lp-ai-files').addEventListener('change', e => {
    files = [...e.target.files]
    m.querySelector('#lp-ai-file-list').innerHTML = files.length ? files.map(f => `<span class="inline-block mr-1 mb-1 px-2 py-1 rounded-lg bg-white border">${esc(f.name)}</span>`).join('') : ''
  })
  m.querySelector('#lp-ai-generate').addEventListener('click', () => {
    try {
      m.querySelector('#lp-ai-prompt').value = prompt()
      markPromptReady()
      showToast('สร้าง Prompt จากข้อมูลล่าสุดแล้ว', 'success')
    } catch (err) {
      markPromptStale()
      showToast(err.message, 'warning')
    }
  })
  m.querySelector('#lp-ai-copy').addEventListener('click', async () => {
    if (!promptReady) { showToast('กรุณากด “สร้าง Prompt” ใหม่หลังแก้ข้อมูลก่อนคัดลอก', 'warning'); return }
    const text = m.querySelector('#lp-ai-prompt').value.trim()
    if (!text) { showToast('ยังไม่มี Prompt ให้คัดลอก', 'warning'); return }
    try { await navigator.clipboard.writeText(text); showToast('คัดลอก Prompt แล้ว', 'success') }
    catch { m.querySelector('#lp-ai-prompt').select(); document.execCommand('copy'); showToast('คัดลอก Prompt แล้ว', 'success') }
  })
  m.querySelector('#lp-ai-validate').addEventListener('click', () => {
    try { const data = validatePayload(m.querySelector('#lp-ai-json').value, mode, getScheduleConfig(), getPlanConfig()); showResult(`JSON ถูกต้อง: ${mode === 'schedule' ? data.weeks.length + ' แถวสัปดาห์' : data.plans.length + ' แผน/ครั้ง'}`, true) }
    catch (err) { showResult(err.message, false) }
  })
  m.querySelector('#lp-ai-save').addEventListener('click', async e => {
    let data
    try { data = validatePayload(m.querySelector('#lp-ai-json').value, mode, getScheduleConfig(), getPlanConfig()) } catch (err) { showResult(err.message, false); return }
    const count = mode === 'schedule' ? data.weeks.length : data.plans.length
    if (!confirm(`ยืนยันสร้าง${mode === 'schedule' ? 'กำหนดการสอน' : 'แผนการสอน'} ${count} รายการในระบบ?`)) return
    const btn = e.currentTarget; btn.disabled = true; btn.textContent = 'กำลังสร้าง...'
    try {
      if (mode === 'schedule') {
        for (const w of data.weeks) {
          const payload = {
            course_id: courseId, week_start: asInt(w.week_start), week_end: asInt(w.week_end, asInt(w.week_start)),
            date_start: dateForWeek(asInt(w.week_start)).start ?? isoDate(w.date_start),
            date_end: dateForWeek(asInt(w.week_end, asInt(w.week_start))).end ?? isoDate(w.date_end),
            topic: String(w.topic).trim(), description: null, teaching_methods: asText(w.teaching_methods) || null,
            notes: asText(w.notes) || null,
            source_json: { ...w, date_start: dateForWeek(asInt(w.week_start)).start ?? isoDate(w.date_start), date_end: dateForWeek(asInt(w.week_end, asInt(w.week_start))).end ?? isoDate(w.date_end) },
          }
          const existing = (syllabusItems ?? []).find(x => x.week_start === payload.week_start && x.week_end === payload.week_end)
          if (existing) await updateSyllabusItem(existing.id, payload); else await createSyllabusItem(payload)
        }
      } else {
        for (const p of data.plans) {
          const activities = p.activities ?? {}
          const periodCount = Math.max(1, asInt(p.period_count, 1))
          const minutesPerPeriod = Math.max(1, asInt(p.minutes_per_period, asInt(p.duration_minutes, DEFAULT_MINUTES_PER_PERIOD)))
          const durationMinutes = asInt(p.duration_minutes, periodCount * minutesPerPeriod)
          const payload = {
            course_id: courseId, teacher_id: teacher.id, title: String(p.title).trim(),
            week_start: asInt(p.week_start), week_end: asInt(p.week_end, asInt(p.week_start)), session_number: asInt(p.session_number, 1),
            lesson_date: isoDate(p.lesson_date) ?? dateForWeek(asInt(p.week_start)).dates[0] ?? null, duration_minutes: durationMinutes, unit_title: asText(p.unit_title) || null,
            standards: asText(p.standards) || null, objectives: asText(p.objectives) || null, key_concept: asText(p.key_concept || p.topic) || null,
            activities_intro: asText(activities.intro ?? p.activities_intro) || null,
            activities_main: asText(activities.main ?? p.activities_main) || null,
            activities_wrap: asText(activities.wrap ?? p.activities_wrap) || null,
            media: asText(p.media) || null, assessment: asText(p.assessment) || null, homework: asText(p.homework) || null,
            teacher_notes: asText(p.teacher_notes) || null, schedule_alignment: p.schedule_alignment || null,
            deviation_reason: asText(p.deviation_reason) || null,
            source_json: { ...p, lesson_date: isoDate(p.lesson_date) ?? dateForWeek(asInt(p.week_start)).dates[0] ?? null, period_count: periodCount, minutes_per_period: minutesPerPeriod, duration_minutes: durationMinutes },
          }
          const existing = (lessonPlans ?? []).find(x => x.week_start === payload.week_start && (x.session_number ?? 1) === payload.session_number)
          if (existing) await updateLessonPlan(existing.id, payload); else await createLessonPlan(payload)
        }
      }
      showToast('สร้างข้อมูลในระบบแล้ว ✅', 'success'); m.remove(); onSaved?.()
    } catch (err) { showResult('บันทึกไม่สำเร็จ: ' + (getFriendlyErrorMessage(err)), false); btn.disabled = false; btn.textContent = '💾 สร้างในระบบ' }
  })
}

function signaturePadHTML(key, label, name, currentUrl, savedOptions = [], sourceMode = 'custom', saveProfile = false, isDeptHead = false) {
  const savedSelect = savedOptions.length
    ? `<label data-sign-saved-wrap class="block text-[10px] font-bold text-gray-500 mt-2">เลือกลายเซ็นที่บันทึกไว้<select data-sign-saved class="mt-1 w-full border rounded-lg px-2 py-1.5 bg-white font-normal">${savedOptions.map((option, index) => `<option value="${esc(option.path)}" data-name="${esc(option.name)}" data-preview="${esc(option.previewUrl)}" ${option.selected ? 'selected' : index === 0 && !savedOptions.some(item => item.selected) ? 'selected' : ''}>${esc(option.label)}</option>`).join('')}</select></label>`
    : `<p data-sign-no-saved class="text-[10px] text-amber-600 mt-2">ยังไม่มีลายเซ็นที่บันทึกไว้สำหรับรายการนี้</p>`
  return `<div class="rounded-2xl border border-gray-200 p-3" data-sign-role="${key}">
    <p class="text-xs font-bold text-gray-700">${label}</p><input data-sign-name class="mt-1 border rounded-lg px-2 py-1 text-xs w-full" value="${esc(name)}" placeholder="ชื่อผู้ลงนาม">
    <label class="block text-[10px] font-bold text-gray-500 mt-2">การลงชื่อ<select data-sign-source class="mt-1 w-full border rounded-lg px-2 py-1.5 bg-white"><option value="saved" ${sourceMode === 'saved' ? 'selected' : ''} ${savedOptions.length ? '' : 'disabled'}>ใช้ลายเซ็นที่บันทึกไว้</option><option value="custom" ${sourceMode === 'custom' ? 'selected' : ''}>วาด/พิมพ์/อัปโหลดลายเซ็น</option><option value="blank" ${sourceMode === 'blank' ? 'selected' : ''}>เว้นช่องไว้เซ็นเอง</option></select></label>
    ${savedSelect}
    <img data-sign-current src="${esc(currentUrl ?? '')}" class="h-14 w-28 object-contain border rounded-lg bg-white mt-2" ${currentUrl && sourceMode === 'saved' ? '' : 'hidden'}>
    <div data-sign-custom-controls ${sourceMode === 'custom' ? '' : 'hidden'}>
    <div class="grid grid-cols-2 gap-2 mt-2">
      <label class="text-[10px] font-bold text-gray-500">วิธีลงชื่อ<select data-sign-mode class="mt-1 w-full border rounded-lg px-2 py-1.5 bg-white"><option value="draw">วาดลายเซ็น</option><option value="type">พิมพ์ชื่อ</option></select></label>
      <label class="text-[10px] font-bold text-gray-500">สีปากกา/ตัวอักษร<input data-sign-color type="color" value="#173b78" class="mt-1 w-full h-8 border rounded-lg bg-white p-1"></label>
    </div>
    <div data-sign-typed-controls hidden class="grid grid-cols-2 gap-2 mt-2">
      <label class="col-span-2 text-[10px] font-bold text-gray-500">ข้อความลายเซ็น<input data-sign-typed maxlength="80" value="${esc(name)}" class="mt-1 w-full border rounded-lg px-2 py-1.5 font-normal" placeholder="พิมพ์ชื่อสำหรับใช้เป็นลายเซ็น"></label>
      <label class="col-span-2 text-[10px] font-bold text-gray-500">รูปแบบตัวอักษร<select data-sign-font class="mt-1 w-full border rounded-lg px-2 py-1.5 bg-white font-normal"><option value="Sarabun, sans-serif">Sarabun</option><option value="Tahoma, sans-serif">Tahoma</option><option value="serif">Serif</option><option value="cursive">Cursive</option></select></label>
    </div>
    <canvas data-sign-canvas width="700" height="180" class="mt-2 w-full h-24 border rounded-xl bg-white touch-none"></canvas>
    <div class="flex items-center justify-between gap-2 mt-2"><button data-sign-clear type="button" class="text-[11px] text-red-500">ล้างที่วาด</button><label class="text-[11px] font-bold text-indigo-600 cursor-pointer">📤 อัปโหลดภาพ<input data-sign-file type="file" accept="image/png,image/jpeg,image/webp" class="hidden"></label></div>
    <p data-sign-file-name class="text-[10px] text-gray-400 mt-1"></p>
    ${key === 'teacher' ? `<label class="mt-2 flex items-start gap-2 text-[10px] text-gray-600"><input data-sign-save-profile type="checkbox" class="mt-0.5" ${saveProfile ? 'checked' : ''}><span>บันทึกลายเซ็นนี้ในโปรไฟล์ครู เพื่อเลือกใช้กับเอกสารครั้งต่อไป</span></label>` : ''}
    </div>
    ${isDeptHead ? `<label class="block text-[10px] font-bold text-gray-500 mt-2">ขอบเขตการตั้งค่านี้<select data-sign-scope class="mt-1 w-full border rounded-lg px-2 py-1.5 bg-white"><option value="session">ใช้เฉพาะครั้งนี้</option><option value="plan">ใช้เป็นค่าเริ่มต้นทั้งแผน</option></select></label>` : ''}
  </div>`
}

function bindPad(box) {
  const canvas = box.querySelector('[data-sign-canvas]'), ctx = canvas.getContext('2d')
  const mode = box.querySelector('[data-sign-mode]'), color = box.querySelector('[data-sign-color]')
  const source = box.querySelector('[data-sign-source]'), saved = box.querySelector('[data-sign-saved]')
  const savedWrap = box.querySelector('[data-sign-saved-wrap]'), preview = box.querySelector('[data-sign-current]')
  const customControls = box.querySelector('[data-sign-custom-controls]')
  const typedControls = box.querySelector('[data-sign-typed-controls]'), typed = box.querySelector('[data-sign-typed]'), font = box.querySelector('[data-sign-font]')
  ctx.strokeStyle = color.value; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round'
  let drawing = false, drawn = false, last = null
  const renderTyped = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const value = typed.value.trim()
    if (!value) { drawn = false; return }
    ctx.fillStyle = color.value
    ctx.font = `36px ${font.value}`
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
    ctx.fillText(value, canvas.width / 2, canvas.height / 2, canvas.width - 40)
    drawn = true
  }
  const setMode = () => {
    const isTyped = mode.value === 'type'
    typedControls.hidden = !isTyped
    if (isTyped) renderTyped()
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); drawn = false; ctx.strokeStyle = color.value }
  }
  const pos = e => { const r = canvas.getBoundingClientRect(), p = e.touches?.[0] ?? e; return { x:(p.clientX-r.left)*canvas.width/r.width, y:(p.clientY-r.top)*canvas.height/r.height } }
  const start = e => { if (mode.value !== 'draw') return; e.preventDefault(); drawing = true; drawn = true; last = pos(e) }
  const move = e => { if (!drawing) return; e.preventDefault(); const p=pos(e); ctx.beginPath(); ctx.moveTo(last.x,last.y); ctx.lineTo(p.x,p.y); ctx.stroke(); last=p }
  const end = () => { drawing = false }
  canvas.addEventListener('pointerdown', start); canvas.addEventListener('pointermove', move); canvas.addEventListener('pointerup', end); canvas.addEventListener('pointerleave', end)
  mode.addEventListener('change', setMode)
  const updateSource = () => {
    const useSaved = source.value === 'saved'
    const useCustom = source.value === 'custom'
    if (savedWrap) savedWrap.hidden = !useSaved
    customControls.hidden = !useCustom
    preview.hidden = !useSaved || !saved?.selectedOptions[0]?.dataset.preview
    if (useSaved && saved?.selectedOptions[0]) {
      preview.src = saved.selectedOptions[0].dataset.preview
      if (box.dataset.signRole !== 'dept-head') {
        box.querySelector('[data-sign-name]').value = saved.selectedOptions[0].dataset.name || ''
      }
    }
  }
  source.addEventListener('change', updateSource)
  saved?.addEventListener('change', updateSource)
  color.addEventListener('input', () => { ctx.strokeStyle = color.value; if (mode.value === 'type') renderTyped() })
  typed.addEventListener('input', renderTyped); font.addEventListener('change', renderTyped)
  box.querySelector('[data-sign-clear]').addEventListener('click', () => { ctx.clearRect(0,0,canvas.width,canvas.height); if (mode.value === 'type') typed.value = ''; drawn=false })
  box.querySelector('[data-sign-file]').addEventListener('change', e => { box.querySelector('[data-sign-file-name]').textContent = e.target.files[0]?.name ?? '' })
  updateSource()
  return {
    canvas, hasDrawn: () => drawn,
    file: () => box.querySelector('[data-sign-file]').files[0] ?? null,
    name: () => box.querySelector('[data-sign-name]').value.trim(),
    sourceMode: () => source.value,
    savedPath: () => saved?.value || null,
    savedName: () => saved?.selectedOptions[0]?.dataset.name || '',
    saveToProfile: () => box.querySelector('[data-sign-save-profile]')?.checked === true,
    scope: () => box.querySelector('[data-sign-scope]')?.value ?? 'session',
  }
}

const canvasBlob = canvas => new Promise(resolve => canvas.toBlob(resolve, 'image/png'))

function printLessonPlan({ plan, cls, teacher, reflection, urls, dept }) {
  const meta = courseMeta(cls)
  const date = plan.lesson_date ? thaiShortDate(plan.lesson_date) : '........................'
  const rawClassName = String(meta.class_name ?? '').trim()
  const gradeText = String(meta.grade_level ?? '').replace(/ม\./g, '').trim()
  const className = /^ม\./.test(rawClassName) ? rawClassName.replace(/^ม\./, '') : [gradeText, rawClassName].filter(Boolean).join(' ')
  const areaCodes = { MATH:'คณิตศาสตร์', THAI:'ภาษาไทย', SCI:'วิทยาศาสตร์และเทคโนโลยี', ENG:'ภาษาต่างประเทศ', SOC:'สังคมศึกษา ศาสนาและวัฒนธรรม', PE:'สุขศึกษาและพลศึกษา', ART:'ศิลปะ', CAREER:'การงานอาชีพ', ISLAM:'อิสลามศึกษา' }
  const learningArea = areaCodes[String(cls?.master_subjects?.dept ?? meta.learning_area ?? '').trim().toUpperCase()] || cls?.master_subjects?.dept || meta.learning_area || '................................'
  const duration = Number(plan.duration_minutes) > 0 && Number(plan.duration_minutes) % 60 === 0
    ? `${Number(plan.duration_minutes) / 60} ชั่วโมง`
    : `${plan.duration_minutes || '...........'} นาที`
  const rawUnitTitle = String(plan.unit_title ?? '').trim()
  const standardsType = plan.standards_type ?? plan.source_json?.standards_type ?? null
  const unitTitle = !rawUnitTitle ? ''
    : /^หน่วยการเรียนรู้ที่\s*/.test(rawUnitTitle) ? rawUnitTitle
      : /^หน่วยที่\s*/.test(rawUnitTitle) ? rawUnitTitle.replace(/^หน่วยที่\s*/, 'หน่วยการเรียนรู้ที่ ')
        : /^ที่\s*/.test(rawUnitTitle) ? `หน่วยการเรียนรู้${rawUnitTitle}`
          : `หน่วยการเรียนรู้ที่ ${rawUnitTitle}`
  const lessonHeading = [unitTitle, plan.key_concept ? `เรื่อง ${String(plan.key_concept).replace(/^เรื่อง\s*/, '')}` : ''].filter(Boolean).join(' ')
  const nl = value => esc(value || '-').replace(/\n/g, '<br>')
  const logoUrl = new URL('./pp5-form-logo.png', window.location.href).href
  const sig = (url, name, role) => `<div class="sig"><div class="sig-img">${url ? `<img src="${esc(url)}">` : ''}</div><div>ลงชื่อ</div><div class="sig-line"></div><div>${role}</div><div>( ${esc(name || '................................')} )</div><div>วันที่ ${date}</div></div>`
  const ruled = (title, value, lines = 3) => {
    const note = parseReflectionNote(value)
    if (note.mode === 'draw' && note.drawing) return `<section class="ruled"><div class="rule title">${title}</div><div class="rule drawing-rule"><img class="note-drawing" src="${esc(note.drawing)}" alt="บันทึกด้วยลายมือ"></div>${Array.from({ length: Math.max(1, lines - 1) }, () => '<div class="rule"></div>').join('')}</section>`
    const textLines = note.text.split('\n').filter(Boolean)
    const style = `color:${note.color};font-family:'${note.font}',sans-serif`
    return `<section class="ruled"><div class="rule title">${title}</div>${textLines.map(line => `<div class="rule" style="${style}">${esc(line)}</div>`).join('')}${Array.from({ length: Math.max(1, lines - textLines.length) }, () => '<div class="rule"></div>').join('')}</section>`
  }
  const w = window.open('', '_blank')
  if (!w) { showToast('เบราว์เซอร์บล็อกหน้าต่างพิมพ์ กรุณาอนุญาต Pop-up', 'warning'); return }
  w.document.write(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${esc(plan.title)}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Itim&family=Mali:wght@400;500&family=Sriracha&display=swap" rel="stylesheet"><style>
    @page{size:A4;margin:0}*{box-sizing:border-box}body{font-family:"Sarabun",Tahoma,sans-serif;color:#111;margin:0;font-size:10.5px;line-height:1.42}.page{width:210mm;min-height:297mm;padding:10mm 11mm 11mm;margin:auto;background:#fff}.head{text-align:center}.logo{width:15mm;height:15mm;object-fit:contain}.head h1{font-size:18px;line-height:1.15;margin:1mm 0}.head h2{font-size:13px;line-height:1.15;margin:0 0 1mm}.head p{font-size:10.5px;margin:.5mm 0}.meta{display:grid;grid-template-columns:1fr 1fr 1fr;border-top:1px solid #176b3a;border-bottom:1px solid #176b3a;padding:1.7mm 2mm;margin-top:2.5mm;font-size:10.5px}.meta span:nth-child(2){text-align:center}.meta span:last-child{text-align:right}.cols{display:grid;grid-template-columns:1fr 1fr;gap:3.5mm;margin-top:3mm}.box{border:.8px solid #17743d;border-radius:1.2mm;margin-bottom:2.7mm;overflow:hidden}.box h3{font-size:11px;font-weight:500;margin:0;padding:1.5mm 2.2mm;background:#d8f6e2;color:#145f35;border-bottom:.8px solid #17743d}.box .content{padding:1.8mm 2.2mm;line-height:1.5;min-height:15mm}.activities{min-height:80mm!important}.sign-pair{display:grid;grid-template-columns:1fr 1fr;gap:7mm;margin-top:10mm}.sig{text-align:center;font-size:9px;line-height:1.55}.sig-img{height:12mm;display:flex;align-items:flex-end;justify-content:center}.sig-img img{max-height:12mm;max-width:35mm;object-fit:contain}.sig-line{border-bottom:1px dotted #111;margin:0 1mm 1mm}.reflection-title{border-bottom:1px solid #111;font-size:10.5px;padding-bottom:1mm;margin:10mm 0 2mm}.ruled{margin-top:0}.rule{min-height:7mm;border-bottom:.6px solid #8ca1bd;padding:1mm 2mm;color:#111}.rule.title{color:#176b3a}.drawing-rule{height:22mm;display:flex;align-items:center}.note-drawing{width:100%;height:100%;object-fit:contain}.suggest-title{border-bottom:1px solid #111;font-size:10.5px;padding-bottom:1mm;margin:5mm 0 2mm}.dept{width:72%;margin:18mm auto 0;text-align:center;font-size:9.5px;line-height:1.6}.dept .sig-img{height:12mm}.dept-line{display:inline-block;width:38mm;border-bottom:1px dotted #111;vertical-align:middle}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}</style></head><body><div class="page">
    <div class="head"><img class="logo" src="${esc(logoUrl)}"><h1>แผนการจัดการเรียนรู้(หน้าเดียว)</h1><h2>กลุ่มสาระการเรียนรู้${esc(learningArea)}</h2><p>วิชา ${esc(meta.subject_name)} รหัสวิชา ${esc(meta.subject_code)} ชั้นมัธยมศึกษาปีที่ ${esc(className)}</p><p>${esc(lessonHeading || 'เรื่อง ................................')}</p></div>
    <div class="meta"><span>ครั้งที่ ${plan.session_number || 1}</span><span>เวลา ${duration}</span><span>วันที่ ${date}</span></div>
    <div class="cols"><div>
      <section class="box"><h3>1.${standardsType === 'learning_outcomes' ? 'ผลการเรียนรู้' : standardsType === 'indicators' ? 'มาตรฐานการเรียนรู้/ตัวชี้วัด' : 'มาตรฐาน/ตัวชี้วัด (ผลการเรียนรู้)'}</h3><div class="content">${nl(plan.standards)}</div></section>
      <section class="box"><h3>2.จุดประสงค์การเรียนรู้</h3><div class="content">${nl(plan.objectives)}</div></section>
      <section class="box"><h3>3.กิจกรรมการเรียนรู้</h3><div class="content activities"><b>ขั้นนำเข้าสู่บทเรียน</b><br>${nl(plan.activities_intro)}<br><br><b>ขั้นสอน</b><br>${nl(plan.activities_main)}<br><br><b>ขั้นสรุป</b><br>${nl(plan.activities_wrap)}</div></section>
      <section class="box"><h3>4.การวัดและประเมินผล</h3><div class="content">${nl(plan.assessment)}</div></section>
    </div><div>
      <section class="box"><h3>5.สื่อการเรียนรู้</h3><div class="content">${nl(plan.media)}</div></section>
      <div class="sign-pair">${sig(urls.classHead, reflection?.class_head_name, 'หัวหน้าห้อง')}${sig(urls.teacher, reflection?.teacher_name || teacher.full_name, 'ครูผู้สอน')}</div>
      <div class="reflection-title">บันทึกหลังการสอน</div>${ruled('ผลการจัดการเรียนรู้:', reflection?.reflection_text, 3)}${ruled('แนวทางการแก้ปัญหา:', reflection?.issues_solutions, 3)}
      <div class="suggest-title">ข้อเสนอแนะ</div>${ruled('', reflection?.suggestions, 3)}
      <div class="dept"><div class="sig-img">${urls.deptHead ? `<img src="${esc(urls.deptHead)}">` : ''}</div>ลงชื่อ <span class="dept-line"></span> หัวหน้ากลุ่มสาระ<div>( ${esc(reflection?.dept_head_name || dept?.head_name || '................................')} )</div><div>วันที่ ${date}</div></div>
    </div></div>
  </div><script>window.addEventListener('load',()=>Promise.resolve(document.fonts?.ready).finally(()=>setTimeout(()=>window.print(),350)))<\/script></body></html>`)
  w.document.close()
}

export async function openLessonPlanDocument({ plan, cls, teacher, classId, currentWeek }) {
  document.getElementById('lp-document-modal')?.remove()
  if (!document.getElementById('lp-reflection-fonts')) {
    const fonts = document.createElement('link')
    fonts.id = 'lp-reflection-fonts'
    fonts.rel = 'stylesheet'
    fonts.href = 'https://fonts.googleapis.com/css2?family=Itim&family=Mali:wght@400;500&family=Sriracha&display=swap'
    document.head.appendChild(fonts)
  }
  const [departments, signatureTeachers, planReflections] = await Promise.all([
    getDepartments().catch(() => []),
    getTeachersWithSignatures().catch(() => []),
    getLessonPlanReflectionsForPlan(plan.id).catch(() => []),
  ])
  const courseHeadName = String(cls?.master_subjects?.learning_area ?? '').trim()
  const deptKey = String(cls?.master_subjects?.dept ?? teacher?.dept ?? '').trim().toLowerCase()
  const subjectGroup = String(cls?.master_subjects?.subject_group ?? '').toUpperCase()
  const courseCategory = subjectGroup === 'ACDM' ? 'สามัญ' : subjectGroup === 'ACDMVOC' ? 'สามัญปวช' : ['AGM', 'AGMVOC'].includes(subjectGroup) ? 'ศาสนา' : ''
  const deptMatches = departments.filter(d => String(d.dept_code ?? '').trim().toLowerCase() === deptKey || String(d.dept_name ?? '').trim().toLowerCase() === deptKey)
  const scopedDepartments = courseCategory ? deptMatches.filter(d => d.category === courseCategory) : deptMatches
  const dept = (courseHeadName && scopedDepartments.find(d => String(d.head_name ?? '').trim() === courseHeadName))
    || scopedDepartments[0]
    || (courseHeadName && departments.find(d => String(d.head_name ?? '').trim() === courseHeadName))
    || null
  const isManagementName = value => /ทีมผู้บริหาร|ทีมบริหาร|ฝ่ายบริหาร/.test(String(value ?? '').trim())
  const deptHeadName = courseHeadName || (dept && !isManagementName(dept.head_name) ? dept.head_name : '') || ''
  const matchingCourseHead = signatureTeachers.find(person => String(person.full_name ?? '').trim() === deptHeadName)
  const courseHeadSignature = matchingCourseHead?.signature_url
    || (dept && String(dept.head_name ?? '').trim() === deptHeadName ? dept.head_sign_url : null)
  const headRel = cls?.students
  const classHeadDefault = (Array.isArray(headRel) ? headRel[0]?.full_name : headRel?.full_name) ?? ''
  const signaturePreferences = () => plan.source_json?.signature_preferences ?? {}
  let weekNo = currentWeek >= plan.week_start && currentWeek <= plan.week_end ? currentWeek : plan.week_start
  const m = document.createElement('div'); m.id='lp-document-modal'; m.className='fixed inset-0 z-[98] bg-black/60 flex items-center justify-center p-3'; document.body.appendChild(m)

  const render = async () => {
    const reflection = await getLessonPlanReflection(plan.id, classId, weekNo).catch(() => null)
    const resolve = path => getLessonPlanAssetUrl(path).catch(() => null)
    const persistedDeptName = String(reflection?.dept_head_name ?? '').trim()
    const staleDeptHeadReflection = Boolean(deptHeadName && persistedDeptName && persistedDeptName !== deptHeadName)
    const effectiveReflectionDeptName = staleDeptHeadReflection ? null : reflection?.dept_head_name
    const effectiveReflectionDeptPath = staleDeptHeadReflection ? null : reflection?.dept_head_signature_path
    const [classHeadUrl, teacherUrl, deptHeadUrl] = await Promise.all([
      resolve(reflection?.class_head_signature_path),
      resolve(reflection?.teacher_signature_path || reflection?.signature_data_url),
      resolve(effectiveReflectionDeptPath || courseHeadSignature),
    ])
    const preference = signaturePreferences()
    const storedDeptPlanPreference = preference['dept-head']
    const deptPlanPreference = deptHeadName && storedDeptPlanPreference?.name !== deptHeadName
      ? null
      : storedDeptPlanPreference
    const deptSessionPreference = deptPlanPreference?.session_overrides?.[String(weekNo)]
    const currentPaths = {
      'class-head': reflection?.class_head_signature_path,
      teacher: reflection?.teacher_signature_path || reflection?.signature_data_url,
      'dept-head': effectiveReflectionDeptPath,
    }
    const profileTeacher = signatureTeachers.find(person => Number(person.id) === Number(teacher.id))
    const savedOptions = { 'class-head': [], teacher: [], 'dept-head': [] }
    const addSaved = (role, path, name, label, previewUrl = null) => {
      if (!path || savedOptions[role].some(option => option.path === path)) return
      savedOptions[role].push({ path, name: name || '', label, previewUrl: previewUrl || path })
    }
    if (currentPaths['class-head']) addSaved('class-head', currentPaths['class-head'], reflection?.class_head_name || classHeadDefault, 'ลายเซ็นครั้งนี้', classHeadUrl)
    for (const item of planReflections.filter(item => Number(item.class_id) === Number(classId) && item.class_head_signature_path)) {
      const previewUrl = await resolve(item.class_head_signature_path)
      addSaved('class-head', item.class_head_signature_path, item.class_head_name || classHeadDefault, `ลายเซ็นเดิม · ${item.class_head_name || 'หัวหน้าห้อง'}`, previewUrl)
    }
    if (currentPaths.teacher) addSaved('teacher', currentPaths.teacher, reflection?.teacher_name || teacher.full_name, 'ลายเซ็นครั้งนี้', teacherUrl)
    if (profileTeacher?.signature_url) addSaved('teacher', profileTeacher.signature_url, profileTeacher.full_name || teacher.full_name, 'ลายเซ็นที่บันทึกในโปรไฟล์ครู')
    if (currentPaths['dept-head']) addSaved('dept-head', currentPaths['dept-head'], effectiveReflectionDeptName || deptHeadName, 'ลายเซ็นครั้งนี้', deptHeadUrl)
    if (courseHeadSignature) addSaved('dept-head', courseHeadSignature, deptHeadName, 'ลายเซ็นหัวหน้ากลุ่มสาระของรายวิชา')
    for (const person of signatureTeachers.filter(person => String(person.full_name ?? '').trim() === deptHeadName)) {
      addSaved('dept-head', person.signature_url, person.full_name, `ใช้ลายเซ็นที่มีในระบบ · ${person.full_name}`)
    }
    if (deptPlanPreference?.signature_path) {
      const previewUrl = await resolve(deptPlanPreference.signature_path)
      addSaved('dept-head', deptPlanPreference.signature_path, deptPlanPreference.name, 'ค่าเริ่มต้นของแผน', previewUrl)
    }
    const sourceFor = role => {
      if (currentPaths[role]) return 'saved'
      const savedPreference = role === 'dept-head' ? deptPlanPreference : preference[role]
      const sessionPreference = role === 'dept-head' ? deptSessionPreference : null
      if (sessionPreference?.mode === 'blank') return 'blank'
      if (sessionPreference?.signature_path) return 'saved'
      if (sessionPreference?.mode === 'custom') return 'custom'
      if (savedPreference?.mode === 'blank') return 'blank'
      if (savedPreference?.signature_path) return 'saved'
      if (savedPreference?.mode === 'custom') return 'custom'
      return savedOptions[role].length ? 'saved' : 'custom'
    }
    const makePadOptions = role => savedOptions[role].map(option => ({
      ...option,
      selected: currentPaths[role] ? option.path === currentPaths[role]
        : role === 'dept-head' && deptSessionPreference?.signature_path ? option.path === deptSessionPreference.signature_path
          : role === 'dept-head' && deptPlanPreference?.signature_path ? option.path === deptPlanPreference.signature_path
          : role === 'teacher' && profileTeacher?.signature_url ? option.path === profileTeacher.signature_url
            : false,
    }))
    m.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[94vh] overflow-y-auto p-5 sm:p-6">
      <div class="flex justify-between gap-3 mb-3"><div><h3 class="font-bold text-gray-800">📝 ${esc(plan.title)}</h3><p class="text-xs text-gray-400">บันทึกหลังสอนและลายเซ็นครบ 3 ฝ่าย</p></div><button data-close class="w-10 h-10 rounded-xl border text-gray-400">✕</button></div>
      <label class="text-xs font-bold text-gray-500">ครั้งที่<select id="lp-doc-week" class="ml-2 border rounded-lg px-2 py-1 bg-white">${Array.from({length:plan.week_end-plan.week_start+1},(_,i)=>({ week:plan.week_start+i, session:asInt(plan.session_number,1)+i })).map(item=>`<option value="${item.week}" ${item.week===weekNo?'selected':''}>${item.session}</option>`).join('')}</select></label>
      <div class="grid sm:grid-cols-3 gap-3 mt-4">
        ${signaturePadHTML('class-head','หัวหน้าห้อง',reflection?.class_head_name || classHeadDefault,classHeadUrl,makePadOptions('class-head'),sourceFor('class-head'))}
        ${signaturePadHTML('teacher','ครูผู้สอน',reflection?.teacher_name || teacher.full_name,teacherUrl,makePadOptions('teacher'),sourceFor('teacher'),Boolean(profileTeacher?.signature_url))}
        ${signaturePadHTML('dept-head','หัวหน้ากลุ่มสาระ',effectiveReflectionDeptName || deptHeadName,deptHeadUrl,makePadOptions('dept-head'),sourceFor('dept-head'),false,true)}
      </div>
      <div class="grid sm:grid-cols-3 gap-3 mt-4">${reflectionNoteFieldHTML('result','ผลการจัดการเรียนรู้',reflection?.reflection_text)}${reflectionNoteFieldHTML('issues','ปัญหา/แนวทางแก้ไข',reflection?.issues_solutions)}${reflectionNoteFieldHTML('suggestions','ข้อเสนอแนะ',reflection?.suggestions)}</div>
      <div class="grid grid-cols-2 gap-2 mt-4"><button id="lp-doc-save" class="py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold">💾 บันทึกทั้งหมด</button><button id="lp-doc-print" class="py-3 rounded-xl bg-indigo-600 text-white text-xs font-bold">🖨️ บันทึกแล้วพิมพ์</button></div>
    </div>`
    const pads = Object.fromEntries([...m.querySelectorAll('[data-sign-role]')].map(box => [box.dataset.signRole, bindPad(box)]))
    const notePads = Object.fromEntries([...m.querySelectorAll('[data-reflection-note]')].map(box => [box.dataset.reflectionNote, bindReflectionNote(box)]))
    m.querySelector('[data-close]').addEventListener('click',()=>m.remove())
    m.querySelector('#lp-doc-week').addEventListener('change',e=>{weekNo=asInt(e.target.value,plan.week_start);render()})

    const save = async () => {
      const roleMap = { 'class-head':'class_head_signature_path', teacher:'teacher_signature_path', 'dept-head':'dept_head_signature_path' }
      const nextPaths = { 'class-head':null, teacher:null, 'dept-head':null }
      for (const [role,pad] of Object.entries(pads)) {
        if (pad.sourceMode() === 'blank') continue
        if (pad.sourceMode() === 'saved') {
          nextPaths[role] = pad.savedPath()
          continue
        }
        const source = pad.file() || (pad.hasDrawn() ? await canvasBlob(pad.canvas) : null)
        if (!source) continue
        if (role === 'teacher' && pad.saveToProfile()) {
          const signatureUrl = await uploadCouncilTeacherSignature(teacher.id, source)
          await updateMySignature(teacher.id, signatureUrl)
          teacher.signature_url = signatureUrl
          nextPaths[role] = signatureUrl
        } else {
          nextPaths[role] = await uploadLessonPlanSignature(plan.id,classId,role,source)
        }
      }
      const saved = await upsertLessonPlanReflection({
        lesson_plan_id:plan.id,class_id:classId,teacher_id:teacher.id,week_no:weekNo,
        reflection_text:notePads.result.value(),issues_solutions:notePads.issues.value(),suggestions:notePads.suggestions.value(),
        class_head_name:pads['class-head'].name()||pads['class-head'].savedName()||null,class_head_signature_path:nextPaths['class-head']||null,class_head_signed_at:nextPaths['class-head']?new Date().toISOString():null,
        teacher_name:pads.teacher.name()||pads.teacher.savedName()||null,teacher_signature_path:nextPaths.teacher||null,teacher_signed_at:nextPaths.teacher?new Date().toISOString():null,
        dept_head_name:pads['dept-head'].name()||pads['dept-head'].savedName()||null,dept_head_signature_path:nextPaths['dept-head']||null,dept_head_signed_at:nextPaths['dept-head']?new Date().toISOString():null,
        signature_data_url:null,signed_at:nextPaths.teacher?new Date().toISOString():null,
      })
      {
        const previousDeptPreference = signaturePreferences()['dept-head'] ?? {}
        const nextDeptPreference = { ...previousDeptPreference }
        if (pads['dept-head'].scope() === 'plan') {
          nextDeptPreference.mode = pads['dept-head'].sourceMode()
          nextDeptPreference.signature_path = nextPaths['dept-head']
          nextDeptPreference.name = saved.dept_head_name
          const overrides = { ...(nextDeptPreference.session_overrides ?? {}) }
          delete overrides[String(weekNo)]
          nextDeptPreference.session_overrides = overrides
        } else {
          nextDeptPreference.session_overrides = {
            ...(nextDeptPreference.session_overrides ?? {}),
            [String(weekNo)]: { mode: pads['dept-head'].sourceMode(), signature_path: nextPaths['dept-head'], name: saved.dept_head_name },
          }
        }
        const nextPreferences = { ...signaturePreferences(), 'dept-head': nextDeptPreference }
        const nextSource = { ...(plan.source_json ?? {}), signature_preferences: nextPreferences }
        await updateLessonPlan(plan.id, { source_json: nextSource })
        plan.source_json = nextSource
      }
      return saved
    }
    m.querySelector('#lp-doc-save').addEventListener('click',async e=>{const b=e.currentTarget;b.disabled=true;b.textContent='กำลังบันทึก...';try{await save();showToast('บันทึกเอกสารและลายเซ็นแล้ว ✅','success');await render()}catch(err){showToast('บันทึกไม่สำเร็จ: '+(getFriendlyErrorMessage(err)),'error');b.disabled=false;b.textContent='💾 บันทึกทั้งหมด'}})
    m.querySelector('#lp-doc-print').addEventListener('click',async e=>{const b=e.currentTarget;b.disabled=true;b.textContent='กำลังเตรียมเอกสาร...';try{const saved=await save();const urls={classHead:await resolve(saved.class_head_signature_path),teacher:await resolve(saved.teacher_signature_path||saved.signature_data_url),deptHead:await resolve(saved.dept_head_signature_path)};printLessonPlan({plan,cls,teacher,reflection:saved,urls,dept});showToast('เปิดหน้าพิมพ์แล้ว','success')}catch(err){showToast('เตรียมเอกสารไม่สำเร็จ: '+(getFriendlyErrorMessage(err)),'error')}finally{b.disabled=false;b.textContent='🖨️ บันทึกแล้วพิมพ์'}})
  }
  m.addEventListener('click',e=>{if(e.target===m)m.remove()}); await render()
}
