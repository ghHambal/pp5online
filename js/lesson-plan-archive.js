import {
  getLessonPlanReflectionsForPlans,
  deleteLessonPlanReflection,
  getLessonPlanArchives,
  getLessonPlanDriveSettings,
  getLessonPlans,
  upsertLessonPlanDriveSettings,
  upsertLessonPlanReflection,
  updateLessonPlan,
} from './api.js'
import { getLessonPlanAssetUrl } from './storage.js'
import { supabase } from './supabase.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'
import { openLessonPlanDocument } from './lesson-plan-ai-workspace.js'
import { toPng } from 'html-to-image'
import { jsPDF } from 'jspdf'

const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[ch])
const text = value => Array.isArray(value) ? value.map(item => typeof item === 'string' ? item : JSON.stringify(item)).join('\n') : String(value ?? '')
const REFLECTION_NOTE_PREFIX = 'pp5-reflection-v1:'
function parseReflectionNote(value) {
  const raw = String(value ?? '')
  if (!raw.startsWith(REFLECTION_NOTE_PREFIX)) return { mode: 'type', text: raw, drawing: '' }
  try {
    const parsed = JSON.parse(raw.slice(REFLECTION_NOTE_PREFIX.length))
    return {
      mode: parsed.mode === 'draw' ? 'draw' : 'type',
      text: String(parsed.text ?? ''),
      drawing: String(parsed.drawing ?? ''),
      color: /^#[0-9a-f]{6}$/i.test(String(parsed.color ?? '')) ? String(parsed.color) : '#173b78',
      font: ['Sarabun', 'Mali', 'Itim', 'Sriracha', 'Tahoma', 'serif', 'cursive'].includes(String(parsed.font ?? '')) ? String(parsed.font) : 'Sarabun',
    }
  } catch { return { mode: 'type', text: '', drawing: '' } }
}
const iso = value => /^\d{4}-\d{2}-\d{2}$/.test(String(value ?? '')) ? String(value) : ''
// Keep the exported PDF date identical to the manual A4 preview (Thai year, two digits).
const thaiDate = value => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value ?? '')); return m ? `${m[3]}/${m[2]}/${String(Number(m[1]) + 543).slice(-2)}` : '........................' }
const scopedClassId = plan => { const n = Number(plan?.source_json?.class_id); return Number.isInteger(n) && n > 0 ? n : null }
const classHeadEnabled = plan => plan?.source_json?.signature_preferences?.['class-head']?.enabled !== false
const postLessonBypassKey = (classId, weekNo) => `${Number(classId)}:${Number(weekNo)}`
const postLessonBypassEnabled = (plan, classId, weekNo) => plan?.source_json?.post_lesson_bypass?.[postLessonBypassKey(classId, weekNo)]?.enabled === true
const roomName = cls => String(cls?.class_name ?? cls?.name ?? `ห้อง ${cls?.id ?? ''}`).trim()
const sortRooms = (a, b) => roomName(a).localeCompare(roomName(b), 'th', { numeric: true })

export function weekDates(weekNo, semesterStart, semesterEnd, days = []) {
  if (!iso(semesterStart)) return []
  const [y, m, d] = semesterStart.split('-').map(Number)
  const start = new Date(y, m - 1, d + (Number(weekNo) - 1) * 7)
  const end = new Date(start); end.setDate(start.getDate() + 6)
  const last = iso(semesterEnd) ? new Date(`${semesterEnd}T00:00:00`) : null
  const allowed = new Set((days ?? []).map(Number).map(day => day === 0 ? 7 : day).filter(day => day >= 1 && day <= 7 && day !== 6))
  const result = []
  for (const date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    if (last && date > last) break
    const day = date.getDay() || 7
    if (!allowed.size || allowed.has(day)) result.push(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`)
  }
  return result
}

export function plansForRoomWeek(plans, classId, weekNo) {
  const inWeek = (plans ?? []).filter(plan => Number(plan.week_start) <= Number(weekNo) && Number(plan.week_end ?? plan.week_start) >= Number(weekNo))
  const specific = inWeek.filter(plan => scopedClassId(plan) === Number(classId))
  return (specific.length ? specific : inWeek.filter(plan => scopedClassId(plan) === null))
    .sort((a, b) => Number(a.session_in_week ?? a.source_json?.session_in_week ?? 1) - Number(b.session_in_week ?? b.source_json?.session_in_week ?? 1) || Number(a.session_number ?? 0) - Number(b.session_number ?? 0))
}

const scheduleOverride = (plan, classId, baseWeek) => plan?.source_json?.class_schedule_overrides?.[String(classId)]?.[String(baseWeek)] ?? null
const lessonSlot = (plan, classId, baseWeek) => {
  const override = scheduleOverride(plan, classId, baseWeek)
  return { week: Number(override?.week ?? baseWeek), session: Number(override?.session ?? plan.session_in_week ?? plan.source_json?.session_in_week ?? 1) }
}
function roomOccurrences(plans, classId) {
  const weeks = [...new Set((plans ?? []).flatMap(plan => {
    const start = Number(plan.week_start), end = Number(plan.week_end ?? start)
    return Number.isInteger(start) ? Array.from({ length: Math.max(1, end - start + 1) }, (_, index) => start + index) : []
  }))].sort((a, b) => a - b)
  const occurrences = weeks.flatMap(baseWeek => plansForRoomWeek(plans, classId, baseWeek).map(plan => ({ plan, baseWeek, declaredSession: Number(plan.session_in_week ?? plan.source_json?.session_in_week ?? 1) })))
  const byBaseWeek = new Map()
  for (const occurrence of occurrences) {
    if (!byBaseWeek.has(occurrence.baseWeek)) byBaseWeek.set(occurrence.baseWeek, [])
    byBaseWeek.get(occurrence.baseWeek).push(occurrence)
  }
  for (const group of byBaseWeek.values()) {
    group.sort((a, b) => a.declaredSession - b.declaredSession || Number(a.plan.session_number ?? 0) - Number(b.plan.session_number ?? 0) || Number(a.plan.id) - Number(b.plan.id))
    const used = new Set()
    for (const occurrence of group) {
      let session = occurrence.declaredSession
      while (used.has(session)) session++
      used.add(session)
      occurrence.baseSession = session
      const override = scheduleOverride(occurrence.plan, classId, occurrence.baseWeek)
      occurrence.slot = { week: Number(override?.week ?? occurrence.baseWeek), session: Number(override?.session ?? session) }
    }
  }
  occurrences.sort((a, b) => a.slot.week - b.slot.week || a.slot.session - b.slot.session || Number(a.plan.session_number ?? 0) - Number(b.plan.session_number ?? 0) || Number(a.plan.id) - Number(b.plan.id))
  const usedByWeek = new Map()
  for (const occurrence of occurrences) {
    if (!usedByWeek.has(occurrence.slot.week)) usedByWeek.set(occurrence.slot.week, new Set())
    const used = usedByWeek.get(occurrence.slot.week)
    while (used.has(occurrence.slot.session)) occurrence.slot.session++
    used.add(occurrence.slot.session)
  }
  return occurrences
}
const activePostponements = (plans, classId) => (plans ?? []).flatMap(plan => (plan.source_json?.class_postponements?.[String(classId)] ?? []).map(event => ({ plan, event })))
function scheduleWeeks(plans, classes) {
  const weeks = new Set()
  for (const plan of plans ?? []) {
    const start = Number(plan.week_start), end = Number(plan.week_end ?? start)
    for (let week = start; Number.isInteger(start) && week <= end; week++) weeks.add(week)
  }
  for (const cls of classes ?? []) {
    for (const occurrence of roomOccurrences(plans, cls.id)) weeks.add(occurrence.slot.week)
    for (const { event } of activePostponements(plans, cls.id)) weeks.add(Number(event.source_week))
  }
  return [...weeks].filter(Number.isInteger).sort((a, b) => a - b)
}
const reflectionHasTeachingData = reflection => Boolean(text(reflection?.reflection_text).trim() || text(reflection?.issues_solutions).trim() || text(reflection?.suggestions).trim() || reflection?.teacher_name || reflection?.teacher_signature_path || reflection?.signature_data_url || reflection?.dept_head_name || reflection?.dept_head_signature_path || reflection?.class_head_name || reflection?.class_head_signature_path)
const sameSlot = (left, right) => Number(left?.week) === Number(right?.week) && Number(left?.session) === Number(right?.session)

export function archiveReadiness(plan, reflection, weekNo = null, classId = null) {
  const missing = []
  const bypassPostLesson = classId != null && weekNo != null && postLessonBypassEnabled(plan, classId, weekNo)
  if (!iso(reflection?.lesson_date)) missing.push('วันที่สอน')
  if (!bypassPostLesson && !text(reflection?.reflection_text).trim()) missing.push('ผลการจัดการเรียนรู้')
  if (classHeadEnabled(plan) && !reflection?.class_head_signature_path) missing.push('ลายเซ็นหัวหน้าห้อง')
  if (!bypassPostLesson && !reflection?.teacher_signature_path && !reflection?.signature_data_url) missing.push('ลายเซ็นครูผู้สอน')
  const deptPreference = plan?.source_json?.signature_preferences?.['dept-head']
  const deptSessionPreference = weekNo == null ? null : deptPreference?.session_overrides?.[String(weekNo)]
  const deptSignatureMode = deptSessionPreference?.mode ?? deptPreference?.mode
  if (!bypassPostLesson && deptSignatureMode !== 'blank' && !reflection?.dept_head_signature_path) missing.push('ลายเซ็นหัวหน้ากลุ่มสาระ')
  return { ready: missing.length === 0, missing, skippedPostLesson: bypassPostLesson }
}

function scheduleDaysForClass(classId, schedule, links) {
  const ids = new Set((links ?? []).filter(link => Number(link.class_id) === Number(classId)).map(link => Number(link.teacher_schedule_id)))
  return [...new Set((schedule ?? []).filter(row => ids.has(Number(row.id))).map(row => Number(row.day_of_week)).map(day => day === 0 ? 7 : day).filter(day => day >= 1 && day <= 7 && day !== 6))]
}

function suggestedDate(plan, weekNo, semesterStart, semesterEnd, days, used = new Set(), sessionOverride = null) {
  const dates = weekDates(weekNo, semesterStart, semesterEnd, days)
  if (!dates.length) return ''
  const session = Math.max(1, Number(sessionOverride ?? plan.session_in_week ?? plan.source_json?.session_in_week ?? 1))
  return dates.find(date => !used.has(date)) ?? dates[Math.min(session - 1, dates.length - 1)]
}

function planDuration(plan) {
  const minutes = Number(plan.duration_minutes) || Number(plan.source_json?.duration_minutes) || Number(plan.source_json?.period_count || 1) * Number(plan.source_json?.minutes_per_period || 45)
  return minutes ? `${minutes} นาที` : '—'
}

function renderPlanPage(plan, cls, reflection, urls, subject, teacher = {}, weekNo = null) {
  const nl = value => esc(text(value).trim() || '-').replace(/\n/g, '<br>')
  const note = (title, value, lines = 3) => {
    const parsed = parseReflectionNote(value)
    if (parsed.mode === 'draw' && parsed.drawing) return `<section class="ruled"><div class="rule title">${title}</div><div class="rule drawing-rule"><img class="note-drawing" src="${esc(parsed.drawing)}" alt="บันทึกด้วยลายมือ"></div>${Array.from({ length: Math.max(1, lines - 1) }, () => '<div class="rule"></div>').join('')}</section>`
    const textLines = parsed.text.split('\n').filter(Boolean)
    const style = `color:${/^#[0-9a-f]{6}$/i.test(parsed.color || '') ? parsed.color : '#173b78'};font-family:'${esc(parsed.font || 'Sarabun')}',sans-serif`
    return `<section class="ruled"><div class="rule title">${title}</div>${textLines.map(line => `<div class="rule" style="${style}">${esc(line)}</div>`).join('')}${Array.from({ length: Math.max(1, lines - textLines.length) }, () => '<div class="rule"></div>').join('')}</section>`
  }
  const sig = (url, name, role) => `<div class="sig"><div class="sig-img">${url ? `<img src="${esc(url)}">` : ''}</div><div class="sig-sign-row"><span>ลงชื่อ</span><span class="sig-line"></span></div><div>${esc(role)}</div><div>( ${esc(name || '................................')} )</div><div>วันที่ <span>${thaiDate(reflection?.lesson_date)}</span></div></div>`
  const areaCodes = { MATH:'คณิตศาสตร์', THAI:'ภาษาไทย', SCI:'วิทยาศาสตร์และเทคโนโลยี', ENG:'ภาษาต่างประเทศ', SOC:'สังคมศึกษา ศาสนาและวัฒนธรรม', PE:'สุขศึกษาและพลศึกษา', ART:'ศิลปะ', CAREER:'การงานอาชีพ', ISLAM:'อิสลามศึกษา' }
  const learningArea = areaCodes[String(cls?.master_subjects?.dept ?? subject.dept ?? '').trim().toUpperCase()] || cls?.master_subjects?.dept || subject.learning_area || subject.dept || '................................'
  const rawClassName = String(cls?.class_name ?? cls?.name ?? '').trim()
  const gradeText = String(cls?.grade_level ?? subject.grade_level ?? '').replace(/ม\./g, '').trim()
  const className = /^ม\./.test(rawClassName) ? rawClassName.replace(/^ม\./, '') : [gradeText, rawClassName].filter(Boolean).join(' ')
  const standardsType = plan.standards_type ?? plan.source_json?.standards_type ?? null
  const standardsTitle = standardsType === 'learning_outcomes' ? 'ผลการเรียนรู้' : standardsType === 'indicators' ? 'มาตรฐานการเรียนรู้/ตัวชี้วัด' : 'มาตรฐาน/ตัวชี้วัด (ผลการเรียนรู้)'
  const periodCount = Number(plan.source_json?.period_count) > 0 ? Number(plan.source_json.period_count) : (Number(plan.duration_minutes) === 100 ? 2 : Number(plan.duration_minutes) > 0 && Number(plan.duration_minutes) % 45 === 0 ? Number(plan.duration_minutes) / 45 : 1)
  const minutes = Number(plan.duration_minutes) || Number(plan.source_json?.duration_minutes) || periodCount * Number(plan.source_json?.minutes_per_period || 45)
  const duration = minutes > 0 && minutes % 60 === 0 ? `${minutes / 60} ชั่วโมง` : `${minutes || '...........'} นาที`
  const rawUnitTitle = String(plan.unit_title ?? '').trim().replace(/^หน่วยการเรียนรู้ที่\s*/, '').replace(/^หน่วยที่\s*/, '').replace(/^ที่\s*/, '')
  const lessonHeading = [rawUnitTitle ? `หน่วยการเรียนรู้ที่ ${rawUnitTitle}` : '', plan.key_concept ? `เรื่อง ${String(plan.key_concept).replace(/^เรื่อง\s*/, '')}` : ''].filter(Boolean).join(' ')
  const activities = plan.activities ?? {}
  const logoUrl = new URL('./pp5-form-logo.png', window.location.href).href
  const skipPostLesson = weekNo != null && postLessonBypassEnabled(plan, cls?.id, weekNo)
  const signatureCards = [
    classHeadEnabled(plan) ? sig(urls.classHead, reflection?.class_head_name, 'หัวหน้าห้อง') : '',
    skipPostLesson ? '' : sig(urls.teacher, reflection?.teacher_name || teacher.full_name, 'ครูผู้สอน'),
  ].filter(Boolean)
  const signaturesHtml = signatureCards.length ? `<div class="sign-pair ${signatureCards.length === 1 ? 'single' : ''}">${signatureCards.join('')}</div>` : ''
  const postLessonHtml = skipPostLesson ? '' : `<div class="reflection-title">บันทึกหลังการสอน</div>${note('ผลการจัดการเรียนรู้:', reflection?.reflection_text, 3)}${note('แนวทางการแก้ปัญหา:', reflection?.issues_solutions, 3)}`
  const deptSignatureHtml = skipPostLesson ? '' : `<div class="dept"><div class="sig-img">${urls.deptHead ? `<img src="${esc(urls.deptHead)}">` : ''}</div>ลงชื่อ <span class="dept-line"></span> หัวหน้ากลุ่มสาระ<div>( ${esc(reflection?.dept_head_name || '................................')} )</div><div>วันที่ <span class="dept-date">${thaiDate(reflection?.lesson_date)}</span></div></div>`
  const printCss = `<style>.lp-pdf-page{display:block;position:relative;width:210mm;height:297mm;padding:9mm 11mm;box-sizing:border-box;overflow:hidden;background:#fff;color:#111;font-family:Sarabun,Tahoma,sans-serif;line-height:1.42}.lp-pdf-page *{box-sizing:border-box}.lp-pdf-page .head{text-align:center;display:block;position:relative;z-index:2}.lp-pdf-page .head .logo{display:block;position:static;inset:auto;float:none;width:15mm;height:15mm;margin:0 auto;object-fit:contain}.lp-pdf-page .head h1{font-size:18px;line-height:1.15;margin:1mm 0}.lp-pdf-page .head h2{font-size:13px;line-height:1.15;margin:0 0 1mm}.lp-pdf-page .head p{font-size:10.5px;margin:.5mm 0}.lp-pdf-page .meta{display:grid;grid-template-columns:1fr 1fr 1fr;border-top:1px solid #176b3a;border-bottom:1px solid #176b3a;padding:1.7mm 2mm;margin-top:2.5mm;font-size:10.5px}.lp-pdf-page .meta span:nth-child(2){text-align:center}.lp-pdf-page .meta span:last-child{text-align:right}.lp-pdf-page .cols{display:block;width:100%;height:calc(100% - 47mm);overflow:hidden;margin-top:3mm}.lp-pdf-page .cols>div{width:48.5%;display:flex;flex-direction:column;gap:4mm;height:100%;max-height:100%;overflow:hidden}.lp-pdf-page .cols>div:first-child{float:left}.lp-pdf-page .cols>div:last-child{float:right}.lp-pdf-page .box{border:.8px solid #17743d;border-radius:1.2mm;margin:0;overflow:hidden;flex-shrink:0}.lp-pdf-page .box h3{font-size:11px;font-weight:500;margin:0;padding:1.5mm 2.2mm;background:#d8f6e2;color:#145f35;border-bottom:.8px solid #17743d}.lp-pdf-page .box .content{padding:1.8mm 2.2mm;line-height:1.5;min-height:15mm;white-space:pre-wrap;overflow-wrap:anywhere}.lp-pdf-page .activities{min-height:80mm!important}.lp-pdf-page .sign-pair{display:grid;grid-template-columns:1fr 1fr;gap:7mm;margin-top:10mm}.lp-pdf-page .sign-pair.single{grid-template-columns:1fr}.lp-pdf-page .sig{text-align:center;font-size:9px;line-height:1.55}.lp-pdf-page .sig-img{max-height:12mm;max-width:35mm;object-fit:contain}.lp-pdf-page .sig-img{height:12mm;display:flex;align-items:flex-end;justify-content:center}.lp-pdf-page .sig-sign-row{display:flex;align-items:center;justify-content:center;gap:1.5mm}.lp-pdf-page .sig-line{display:inline-block;width:31mm;border-bottom:1px dotted #111}.lp-pdf-page .reflection-title{border-bottom:1px solid #111;font-size:10.5px;padding-bottom:1mm;margin:10mm 0 2mm}.lp-pdf-page .ruled{margin-top:0}.lp-pdf-page .rule{min-height:7mm;border-bottom:.6px solid #8ca1bd;padding:1mm 2mm;color:#111}.lp-pdf-page .rule.title{color:#176b3a}.lp-pdf-page .drawing-rule{height:22mm;display:flex;align-items:center}.lp-pdf-page .note-drawing{width:100%;height:100%;object-fit:contain}.lp-pdf-page .suggest-title{border-bottom:1px solid #111;font-size:10.5px;padding-bottom:1mm;margin:5mm 0 2mm}.lp-pdf-page .dept{position:absolute;left:14%;right:14%;bottom:8mm;text-align:center;font-size:9.5px;line-height:1.6}.lp-pdf-page .dept .sig-img{height:12mm}.lp-pdf-page .dept-line{display:inline-block;width:38mm;border-bottom:1px dotted #111}.lp-pdf-page .dept-date{display:inline-block;min-width:34mm;min-height:1em;border-bottom:1px dotted #111}</style>`
  return `${printCss}<section class="lp-pdf-page"><div class="head"><img class="logo" src="${esc(logoUrl)}" alt="ตราโรงเรียน"><h1>แผนการจัดการเรียนรู้(หน้าเดียว)</h1><h2>กลุ่มสาระการเรียนรู้${esc(learningArea)}</h2><p>วิชา ${esc(subject.subject_name)} รหัสวิชา ${esc(subject.subject_code)} ชั้นมัธยมศึกษาปีที่ ${esc(className)}</p><p>${esc(lessonHeading || plan.title || 'เรื่อง ................................')}</p></div><div class="meta"><span>ครั้งที่ ${esc(plan.session_number || 1)} · ${periodCount} คาบ</span><span>เวลา ${esc(duration)}</span><span>วันที่ ${thaiDate(reflection?.lesson_date)}</span></div><div class="cols"><div><section class="box"><h3>1.${esc(standardsTitle)}</h3><div class="content">${nl(plan.standards)}</div></section><section class="box"><h3>2.จุดประสงค์การเรียนรู้</h3><div class="content">${nl(plan.objectives)}</div></section><section class="box"><h3>3.กิจกรรมการเรียนรู้</h3><div class="content activities"><b>ขั้นนำเข้าสู่บทเรียน</b><br>${nl(plan.activities_intro ?? activities.intro)}<br><br><b>ขั้นสอน</b><br>${nl(plan.activities_main ?? activities.main)}<br><br><b>ขั้นสรุป</b><br>${nl(plan.activities_wrap ?? activities.wrap)}</div></section><section class="box"><h3>4.การวัดและประเมินผล</h3><div class="content">${nl(plan.assessment)}</div></section></div><div><section class="box"><h3>5.สื่อการเรียนรู้</h3><div class="content">${nl(plan.media)}</div></section>${signaturesHtml}${postLessonHtml}<div class="suggest-title">ข้อเสนอแนะ</div>${note('', reflection?.suggestions, 3)}</div></div>${deptSignatureHtml}</section>`
}

async function toDataUrl(url) {
  if (!url || String(url).startsWith('data:')) return url || ''
  const res = await fetch(url)
  if (!res.ok) throw new Error('โหลดลายเซ็นสำหรับ PDF ไม่สำเร็จ')
  const blob = await res.blob()
  return await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(blob) })
}

async function makePdf({ subject, teacher, roomRows, weekNo, academicYear, semester }) {
  const root = document.createElement('div')
  // Use the iPlane approach: let the browser paint the real DOM, then
  // rasterize each fixed A4 page with html-to-image and place it in jsPDF.
  // This avoids html2canvas's blank output on Thai text/signature pages.
  root.style.cssText = 'position:absolute;left:-9999mm;top:-9999mm;display:block;width:210mm;background:#fff;color:#111;font-family:Sarabun,Tahoma,sans-serif;font-size:10px;line-height:1.4'
  root.innerHTML = `<style>@page{size:A4;margin:0}.lp-pdf-page{page-break-after:always;background:#fff}.lp-pdf-page:last-child{page-break-after:auto}</style>${(await Promise.all(roomRows.map(async row => { const pages = []; for (const item of row.items) { const urls = { classHead: await toDataUrl(await getLessonPlanAssetUrl(item.reflection?.class_head_signature_path).catch(() => '')), teacher: await toDataUrl(await getLessonPlanAssetUrl(item.reflection?.teacher_signature_path || item.reflection?.signature_data_url).catch(() => '')), deptHead: await toDataUrl(await getLessonPlanAssetUrl(item.reflection?.dept_head_signature_path).catch(() => '')) }; pages.push(renderPlanPage(item.plan, row.cls, item.reflection, urls, subject, teacher, weekNo)) } return pages.join('') }))).join('')}`
  document.body.appendChild(root)
  try {
    await document.fonts?.ready
    await Promise.all([...root.querySelectorAll('img')].map(img => img.complete
      ? (typeof img.decode === 'function' ? img.decode().catch(() => undefined) : undefined)
      : new Promise(resolve => { img.addEventListener('load', resolve, { once: true }); img.addEventListener('error', resolve, { once: true }) })))
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
    const pages = [...root.querySelectorAll('.lp-pdf-page')]
    let doc = null
    for (const page of pages) {
      const dataUrl = await toPng(page, { pixelRatio: 3, backgroundColor: '#fff', width: page.offsetWidth, height: page.offsetHeight, cacheBust: true, skipFonts: true })
      if (!doc) doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
      else doc.addPage('a4', 'portrait')
      doc.addImage(dataUrl, 'PNG', 0, 0, 210, 297, undefined, 'FAST')
    }
    if (!doc) throw new Error('ไม่พบหน้าเอกสารสำหรับสร้าง PDF')
    return doc.output('blob')
  } finally { root.remove() }
}

function safeFilePart(value, fallback) {
  const part = String(value || fallback).normalize('NFC').trim()
    .replace(/[^\p{L}\p{M}\p{N}_-]+/gu, '_')
    .replace(/_+/g, '_').replace(/^_+|_+$/g, '')
  return part || fallback
}
function fileName(subject, weekNo) { return `${safeFilePart(subject.subject_code, 'course')}_${safeFilePart(subject.subject_name, 'แผน')}_สัปดาห์ที่_${weekNo}.pdf` }
function readFileBase64(blob) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result).split(',')[1] || ''); reader.onerror = reject; reader.readAsDataURL(blob) }) }
async function functionErrorMessage(error) {
  const response = error?.context
  if (response?.json) {
    try {
      const payload = await response.json()
      if (payload?.error) return String(payload.error)
      if (payload?.message) return String(payload.message)
    } catch (_) { /* Supabase may have already consumed the response body. */ }
  }
  return getFriendlyErrorMessage(error)
}

function showArchiveConfirm(file, weekNo) {
  return new Promise(resolve => {
    document.getElementById('lesson-plan-archive-confirm')?.remove()
    const dialog = document.createElement('div')
    dialog.id = 'lesson-plan-archive-confirm'
    dialog.className = 'fixed inset-0 z-[100000] flex items-center justify-center p-4'
    dialog.innerHTML = `<div data-confirm-overlay class="absolute inset-0 bg-black/55 backdrop-blur-sm"></div><div role="dialog" aria-modal="true" class="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"><div class="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div><div class="px-6 pt-6 pb-5 text-center"><div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-emerald-100 bg-emerald-50 text-2xl">☁️</div><h3 class="mb-2 text-lg font-extrabold text-gray-900">ยืนยันบันทึกแผนเข้า Drive</h3><p class="text-sm leading-relaxed text-gray-600">ระบบจะบันทึกไฟล์ <span class="font-bold text-gray-900">${esc(file)}</span><br>ไปยังโฟลเดอร์ส่วนตัวของคุณ: <span class="font-bold text-emerald-700">สัปดาห์ที่ ${esc(weekNo)}</span></p></div><div class="grid grid-cols-2 gap-3 px-6 pb-6"><button data-confirm-cancel type="button" class="rounded-2xl border border-gray-200 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">ยกเลิก</button><button data-confirm-ok type="button" class="rounded-2xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700">บันทึกเข้า Drive</button></div></div><style>@keyframes lessonArchiveConfirmIn{from{opacity:0;transform:scale(.94) translateY(10px)}to{opacity:1;transform:scale(1) translateY(0)}}#lesson-plan-archive-confirm>div[role=dialog]{animation:lessonArchiveConfirmIn .2s ease-out}</style>`
    document.body.appendChild(dialog)
    const cleanup = result => { document.removeEventListener('keydown', onKey); dialog.remove(); resolve(result) }
    dialog.querySelector('[data-confirm-overlay]').addEventListener('click', () => cleanup(false))
    dialog.querySelector('[data-confirm-cancel]').addEventListener('click', () => cleanup(false))
    dialog.querySelector('[data-confirm-ok]').addEventListener('click', () => cleanup(true))
    const onKey = event => { if (event.key === 'Escape') { document.removeEventListener('keydown', onKey); cleanup(false) } }
    document.addEventListener('keydown', onKey)
  })
}

export async function openLessonPlanArchiveCenter({ subject, teacher, classes = [], plans = [], semesterStart, semesterEnd, termSchedule = [], scheduleLinks = [], academicYear, semester }) {
  const confirmPostpone = ({ plan, before, after, count, affectedPlans = [], undo = false }) => new Promise(resolve => {
    document.getElementById('lesson-plan-postpone-confirm')?.remove()
    const dialog = document.createElement('div')
    dialog.id = 'lesson-plan-postpone-confirm'
    dialog.className = 'fixed inset-0 z-[100001] flex items-center justify-center p-4'
    const title = undo ? 'คืนลำดับแผน' : 'ยืนยันเลื่อนแผนการสอน'
    const planName = esc(plan.title || `ครั้งที่ ${plan.session_number || ''}`)
    const detail = undo ? `คืนแผน ${planName} และรายการที่ขยับตาม ${count} รายการ` : `เลื่อน ${planName} จากสัปดาห์ ${before.week} คาบที่ ${before.session} ไปสัปดาห์ ${after.week} คาบที่ ${after.session} และขยับแผนถัดไป ${Math.max(0, count - 1)} รายการ เฉพาะห้องนี้`
    const affectedHtml = affectedPlans.length ? `<div class="mt-3 max-h-40 overflow-y-auto rounded-xl border border-gray-100 bg-gray-50 p-3 text-left text-xs"><p class="mb-2 font-bold text-gray-700">รายการที่จะขยับ</p><ol class="list-decimal space-y-1 pl-5">${affectedPlans.map(item => `<li>${esc(item.plan.title || `ครั้งที่ ${item.plan.session_number || ''}`)} · สัปดาห์ ${item.before.week} คาบ ${item.before.session} → สัปดาห์ ${item.after.week} คาบ ${item.after.session}</li>`).join('')}</ol></div>` : ''
    dialog.innerHTML = `<div data-overlay class="absolute inset-0 bg-black/55"></div><div role="dialog" aria-modal="true" class="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"><p class="text-2xl">${undo ? '↩️' : '⏭️'}</p><h3 class="mt-2 text-lg font-extrabold">${title}</h3><p class="mt-2 text-sm leading-relaxed text-gray-600">${detail}</p>${affectedHtml}<p class="mt-3 rounded-xl bg-amber-50 p-3 text-xs text-amber-900">ระบบจะเลื่อนเฉพาะห้องนี้ และจะหยุดหากพบผลหลังสอนหรือลายเซ็นที่บันทึกไว้ในรายการที่จะขยับ</p><div class="mt-5 grid grid-cols-2 gap-3"><button data-cancel class="rounded-xl border py-3 text-sm">ยกเลิก</button><button data-confirm class="rounded-xl ${undo ? 'bg-indigo-600' : 'bg-amber-600'} py-3 text-sm font-bold text-white">${undo ? 'คืนลำดับ' : 'เลื่อนแผน'}</button></div></div>`
    document.body.appendChild(dialog)
    const finish = value => { dialog.remove(); resolve(value) }
    dialog.querySelector('[data-overlay]').addEventListener('click', () => finish(false))
    dialog.querySelector('[data-cancel]').addEventListener('click', () => finish(false))
    dialog.querySelector('[data-confirm]').addEventListener('click', () => finish(true))
  })
  document.getElementById('lesson-plan-archive-modal')?.remove()
  plans = await getLessonPlans(subject.id).catch(() => plans)
  let weeks = scheduleWeeks(plans, classes)
  if (!weeks.length) { showToast('ยังไม่มีแผนการสอนสำหรับจัดเก็บ', 'warning'); return }
  let driveSettings = await getLessonPlanDriveSettings(teacher?.id, academicYear, semester).catch(() => null)
  const modal = document.createElement('div'); modal.id = 'lesson-plan-archive-modal'; modal.className = 'fixed inset-0 z-[130] bg-black/60 flex items-center justify-center p-3'
  const settings = driveSettings ?? {}
  const roomSummary = [...classes].sort(sortRooms).map(item => `<span class="inline-flex items-center gap-1 rounded-lg border border-indigo-100 bg-white px-2.5 py-1.5 text-[11px] font-bold text-indigo-700">🏫 ${esc(roomName(item))}</span>`).join('') || '<span class="text-xs text-gray-400">ยังไม่พบห้องในคอร์สนี้</span>'
  modal.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[94vh] overflow-hidden flex flex-col"><header class="flex items-start justify-between gap-3 p-5 border-b"><div><h2 class="text-lg font-extrabold text-gray-900">📦 ศูนย์จัดการ/จัดเก็บแผนรายสัปดาห์ระดับคอร์ส</h2><p class="text-xs text-gray-500 mt-1">รวมแผนของทุกห้องในคอร์สเดียวกัน แล้วส่งเป็น PDF เดียวต่อสัปดาห์เข้าโฟลเดอร์ Drive ส่วนตัวของคุณ</p></div><button data-archive-close class="w-10 h-10 rounded-xl border text-gray-400">✕</button></header><section class="p-4 border-b bg-amber-50"><div class="flex flex-wrap items-end gap-3"><label class="text-xs font-bold text-gray-700 flex-1 min-w-[280px]">โฟลเดอร์หลัก Drive ส่วนตัว (Folder ID)<input data-archive-root-id type="text" value="${esc(settings.root_folder_id || '')}" placeholder="วาง Folder ID ของโฟลเดอร์ส่วนตัว" class="mt-1 block w-full min-h-[42px] rounded-xl border bg-white px-3 font-mono text-xs" /></label><label class="text-xs font-bold text-gray-700">กลุ่มสาระ (ถ้าต้องการตรวจสอบ)<input data-archive-dept type="text" value="${esc(settings.dept_code || '')}" placeholder="เช่น MATH" class="mt-1 block min-h-[42px] w-32 rounded-xl border bg-white px-3" /></label><label class="text-xs font-bold text-gray-700">สร้างโฟลเดอร์<select data-archive-create class="mt-1 block min-h-[42px] rounded-xl border bg-white px-3"><option value="true" ${settings.create_folders !== false ? 'selected' : ''}>อัตโนมัติ</option><option value="false" ${settings.create_folders === false ? 'selected' : ''}>ไม่สร้าง</option></select></label><label class="text-xs font-bold text-gray-700">ไฟล์ชื่อเดิม<select data-archive-replace class="mt-1 block min-h-[42px] rounded-xl border bg-white px-3"><option value="replace" ${settings.replace_mode !== 'version' ? 'selected' : ''}>แทนที่</option><option value="version" ${settings.replace_mode === 'version' ? 'selected' : ''}>เก็บเวอร์ชัน</option></select></label><button data-archive-save-settings class="min-h-[42px] rounded-xl bg-amber-600 px-4 text-xs font-bold text-white">บันทึกการตั้งค่าส่วนตัว</button></div><p data-archive-settings-status class="mt-2 text-xs text-amber-800">ตั้งค่านี้ใช้เฉพาะบัญชีของคุณและภาคเรียนนี้ ไม่กระทบครูคนอื่น</p></section><section class="border-b bg-indigo-50/70 px-4 py-3"><p class="text-xs font-extrabold text-indigo-900">ห้องที่อยู่ในคอร์สเดียวกัน (${classes.length} ห้อง)</p><div class="mt-2 flex flex-wrap gap-2">${roomSummary}</div></section><div class="p-4 border-b bg-violet-50 flex flex-wrap items-end gap-3"><label class="text-xs font-bold text-gray-600">สัปดาห์<select data-archive-week class="mt-1 block min-h-[42px] rounded-xl border bg-white px-3">${weeks.map(week => `<option value="${week}">สัปดาห์ที่ ${week}</option>`).join('')}</select></label><button data-archive-suggest class="min-h-[42px] rounded-xl border border-violet-200 bg-white px-4 text-xs font-bold text-violet-700">↻ เติมวันที่จากตารางสอน</button><button data-archive-refresh class="min-h-[42px] rounded-xl border bg-white px-4 text-xs font-bold">ตรวจสอบความพร้อม</button><span data-archive-status class="text-xs text-gray-500"></span></div><div data-archive-body class="flex-1 overflow-y-auto p-4"></div><footer class="p-4 border-t flex flex-wrap justify-end gap-2"><button data-archive-download disabled class="min-h-[44px] rounded-xl border border-violet-200 bg-white px-4 text-xs font-bold text-violet-700 disabled:opacity-40">⬇️ ดาวน์โหลด PDF เดียว</button><button data-archive-drive disabled class="min-h-[44px] rounded-xl bg-emerald-600 px-5 text-xs font-bold text-white disabled:opacity-40">☁️ บันทึก PDF รวมเข้า Drive ส่วนตัว</button></footer></div>`
  document.body.appendChild(modal)
  let selectedWeek = weeks[0], current = null, archives = []
  const applyScheduleChanges = async (classId, changes, event, undo = false) => {
    const plansById = new Map(plans.map(plan => [Number(plan.id), plan]))
    const snapshots = new Map()
    const updates = new Map()
    for (const change of changes) {
      const plan = plansById.get(Number(change.plan_id))
      if (!plan) throw new Error('ไม่พบแผนบางรายการ กรุณาตรวจสอบแผนใหม่')
      if (!updates.has(Number(plan.id))) { snapshots.set(Number(plan.id), structuredClone(plan.source_json ?? {})); updates.set(Number(plan.id), structuredClone(plan.source_json ?? {})) }
      const nextSource = updates.get(Number(plan.id))
      const overridesByClass = { ...(nextSource.class_schedule_overrides ?? {}) }
      const roomOverrides = { ...(overridesByClass[String(classId)] ?? {}) }
      const desiredSlot = undo ? change.before : change.after
      if (sameSlot(desiredSlot, { week: change.base_week, session: change.base_session })) delete roomOverrides[String(change.base_week)]
      else roomOverrides[String(change.base_week)] = { week: Number(desiredSlot.week), session: Number(desiredSlot.session) }
      if (Object.keys(roomOverrides).length) overridesByClass[String(classId)] = roomOverrides
      else delete overridesByClass[String(classId)]
      if (Object.keys(overridesByClass).length) nextSource.class_schedule_overrides = overridesByClass
      else delete nextSource.class_schedule_overrides
    }
    const targetSource = updates.get(Number(event.target_plan_id))
    if (!targetSource) throw new Error('ไม่พบแผนที่เริ่มการเลื่อน')
    const postponements = { ...(targetSource.class_postponements ?? {}) }
    const events = [...(postponements[String(classId)] ?? [])]
    if (undo) {
      const remaining = events.filter(item => item.id !== event.id)
      if (remaining.length) postponements[String(classId)] = remaining
      else delete postponements[String(classId)]
    } else postponements[String(classId)] = [...events, event]
    if (Object.keys(postponements).length) targetSource.class_postponements = postponements
    else delete targetSource.class_postponements
    const changedIds = [...new Set(changes.map(change => Number(change.plan_id)))]
    const reflections = await getLessonPlanReflectionsForPlans(changedIds)
    const roomReflections = reflections.filter(item => Number(item.class_id) === Number(classId))
    const moves = []
    const movingIds = new Set()
    for (const change of changes) {
      const oldWeek = Number(undo ? change.after.week : change.before.week)
      const newWeek = Number(undo ? change.before.week : change.after.week)
      const changePlan = plansById.get(Number(change.plan_id))
      if (!undo && postLessonBypassEnabled(changePlan, classId, oldWeek)) throw new Error('รายการนี้บันทึกโดยข้ามหลังสอนไว้แล้ว กรุณาตรวจสอบก่อนเลื่อน')
      const reflection = roomReflections.find(item => Number(item.lesson_plan_id) === Number(change.plan_id) && Number(item.week_no) === oldWeek)
      if (reflection && reflectionHasTeachingData(reflection)) throw new Error('พบผลหลังสอนหรือลายเซ็นที่บันทึกแล้วในแผนที่จะขยับ กรุณาตรวจสอบรายการก่อนเลื่อน')
      if (reflection?.lesson_date) { movingIds.add(Number(reflection.id)); moves.push({ reflection, newWeek }) }
    }
    for (const move of moves) {
      const occupied = roomReflections.find(item => Number(item.lesson_plan_id) === Number(move.reflection.lesson_plan_id) && Number(item.week_no) === move.newWeek && !movingIds.has(Number(item.id)))
      if (occupied) throw new Error('แผนปลายทางมีบันทึกอยู่แล้ว จึงยังเลื่อนไม่ได้')
    }
    const movedRows = []
    const writtenPlans = []
    try {
      for (const move of moves) await deleteLessonPlanReflection(move.reflection.id)
      for (const move of moves) {
        const { id, created_at, updated_at, ...payload } = move.reflection
        const created = await upsertLessonPlanReflection({ ...payload, week_no: move.newWeek, lesson_date: null })
        movedRows.push(created)
      }
      for (const [id, sourceJson] of updates) {
        await updateLessonPlan(id, { source_json: sourceJson })
        writtenPlans.push(id)
        plansById.get(id).source_json = sourceJson
      }
    } catch (error) {
      for (const row of movedRows) if (row?.id) await deleteLessonPlanReflection(row.id).catch(() => {})
      for (const move of moves) {
        const { id, created_at, updated_at, ...payload } = move.reflection
        await upsertLessonPlanReflection(payload).catch(() => {})
      }
      for (const id of writtenPlans.reverse()) {
        await updateLessonPlan(id, { source_json: snapshots.get(id) }).catch(() => {})
        plansById.get(id).source_json = snapshots.get(id)
      }
      throw error
    }
  }
  const close = () => modal.remove()
  modal.querySelector('[data-archive-close]').addEventListener('click', close)
  modal.addEventListener('click', event => { if (event.target === modal) close() })
  const build = async () => {
    const status = modal.querySelector('[data-archive-status]')
    status.textContent = `กำลังโหลดแผนและบันทึกของสัปดาห์ที่ ${selectedWeek}…`
    modal.querySelector('[data-archive-body]').innerHTML = '<div class="p-10 text-center text-sm text-gray-500">กำลังโหลดข้อมูลของสัปดาห์ที่เลือก…</div>'
    plans = await getLessonPlans(subject.id).catch(() => plans)
    weeks = scheduleWeeks(plans, classes)
    if (!weeks.includes(selectedWeek)) selectedWeek = weeks[0] ?? 1
    const weekSelect = modal.querySelector('[data-archive-week]')
    weekSelect.innerHTML = weeks.map(week => `<option value="${week}" ${week === selectedWeek ? 'selected' : ''}>สัปดาห์ที่ ${week}</option>`).join('')
    const reflections = await getLessonPlanReflectionsForPlans(plans.map(plan => plan.id)).catch(() => [])
    const reflectionMap = new Map(reflections.map(item => [`${item.lesson_plan_id}:${item.class_id}:${item.week_no}`, item]))
    const rows = [...classes].sort(sortRooms).map(cls => {
      const occurrences = roomOccurrences(plans, cls.id).filter(item => item.slot.week === selectedWeek)
      const days = scheduleDaysForClass(cls.id, termSchedule, scheduleLinks); const used = new Set()
      const items = occurrences.map(({ plan, baseWeek, slot }) => { const reflection = reflectionMap.get(`${plan.id}:${cls.id}:${selectedWeek}`) ?? null; const date = iso(reflection?.lesson_date) || suggestedDate(plan, selectedWeek, semesterStart, semesterEnd, days, used, slot.session); if (date) used.add(date); return { plan, baseWeek, slot, reflection, date, readiness: archiveReadiness(plan, reflection, selectedWeek, cls.id) } })
      return { cls, plans: items.map(item => item.plan), items, days, occurrences }
    }).filter(row => row.items.length)
    const postponed = [...classes].flatMap(cls => activePostponements(plans, cls.id).filter(({ event }) => Number(event.source_week) === selectedWeek).map(({ plan, event }) => ({ cls, plan, event, currentSlot: lessonSlot(plan, cls.id, Number(event.target_base_week)) })))
    current = { rows, items: rows.flatMap(row => row.items), roomCount: rows.length, planCount: rows.reduce((n, row) => n + row.items.length, 0) }
    current.postponed = postponed
    const missing = current.items.filter(item => !item.readiness.ready)
    const skipped = current.items.filter(item => item.readiness.skippedPostLesson).length
    const settingsMissing = !driveSettings?.enabled || !String(driveSettings.root_folder_id || '').trim()
    const skippedStatus = skipped ? ` · ข้ามบันทึกหลังสอน/ลายเซ็น ${skipped} แผนตามที่เลือก` : ''
    const postponedStatus = current.postponed.length ? ` · เลื่อนออกไป ${current.postponed.length} แผน` : ''
    status.textContent = missing.length ? `สัปดาห์ที่ ${selectedWeek} · ${current.planCount} แผน ${current.roomCount} ห้อง · ยังไม่พร้อม ${missing.length} รายการ${skippedStatus}${postponedStatus}` : settingsMissing ? `สัปดาห์ที่ ${selectedWeek} · พร้อมดาวน์โหลด ${current.planCount} แผน · กรุณาบันทึกโฟลเดอร์ Drive ส่วนตัวก่อนส่ง${skippedStatus}${postponedStatus}` : `สัปดาห์ที่ ${selectedWeek} · พร้อมส่ง ${current.planCount} แผน ${current.roomCount} ห้อง${skippedStatus}${postponedStatus}`
    modal.querySelector('[data-archive-settings-status]').textContent = settingsMissing ? 'ยังไม่ได้บันทึกโฟลเดอร์ส่วนตัวสำหรับภาคเรียนนี้' : `เชื่อมกับโฟลเดอร์ส่วนตัวแล้ว · ภาคเรียนที่ ${semester} ปีการศึกษา ${academicYear}`
    modal.querySelector('[data-archive-download]').disabled = !current.planCount || missing.length > 0
    modal.querySelector('[data-archive-drive]').disabled = !current.planCount || missing.length > 0 || settingsMissing
    modal.querySelector('[data-archive-body]').innerHTML = rows.length ? `<div class="overflow-auto rounded-2xl border"><table class="w-full min-w-[860px] text-sm"><thead class="bg-gray-50 text-xs"><tr><th class="p-3 text-left">ห้อง</th><th class="p-3 text-left">แผน/ครั้งที่</th><th class="p-3 text-left">วันที่สอน</th><th class="p-3 text-left">สถานะ</th><th class="p-3 text-left">เปิดแผน</th></tr></thead><tbody>${rows.flatMap(row => row.items.map(item => `<tr class="border-t"><td class="p-3 font-bold">${esc(roomName(row.cls))}</td><td class="p-3"><div>${esc(item.plan.title || `ครั้งที่ ${item.plan.session_number || ''}`)}</div><div class="mt-1 text-[11px] text-gray-500">คาบ ${item.slot.session}</div></td><td class="p-3"><input data-archive-date data-plan-id="${item.plan.id}" data-class-id="${row.cls.id}" type="date" value="${esc(item.date)}" class="rounded-lg border px-2 py-1.5" /></td><td class="p-3 ${item.readiness.ready ? 'text-emerald-700' : 'text-amber-700'}">${item.readiness.skippedPostLesson ? 'พร้อม (ข้าม 4 ส่วน)' : item.readiness.ready ? 'พร้อม' : `ขาด ${esc(item.readiness.missing.join(', '))}`}</td><td class="p-3"><button type="button" data-archive-open-plan data-plan-id="${item.plan.id}" data-class-id="${row.cls.id}" class="whitespace-nowrap rounded-lg border border-indigo-200 bg-white px-3 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-50">📝 เปิดแผน</button></td></tr>`)).join('')}</tbody></table></div>` : '<div class="p-10 text-center text-sm text-gray-400">ไม่พบแผนของสัปดาห์นี้สำหรับห้องที่ผูกไว้</div>'
    if (rows.length) {
      const table = modal.querySelector('[data-archive-body] table')
      const header = document.createElement('th'); header.className = 'p-3 text-left'; header.textContent = 'จัดการคาบ'; table?.querySelector('thead tr')?.append(header)
      let rowIndex = 0
      for (const row of rows) for (const item of row.items) {
        const tableRow = table?.querySelectorAll('tbody tr')[rowIndex++]
        if (!tableRow) continue
        const cell = document.createElement('td'); cell.className = 'p-3'
        cell.innerHTML = `<button type="button" data-postpone-plan data-plan-id="${item.plan.id}" data-class-id="${row.cls.id}" data-base-week="${item.baseWeek}" class="whitespace-nowrap rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800">⏭️ เลื่อนไปครั้งถัดไป</button>`
        tableRow.append(cell)
      }
    }
    const postponedHtml = current.postponed.map(({ cls, plan, event, currentSlot }) => `<div class="flex flex-wrap items-center justify-between gap-3 border-b border-amber-100 p-3 last:border-0"><div><p class="font-bold">🏫 ${esc(roomName(cls))} · ${esc(plan.title || `ครั้งที่ ${plan.session_number || ''}`)}</p><p class="mt-1 text-xs text-amber-800">ยังไม่ได้สอน · เลื่อนไปสัปดาห์ ${currentSlot.week} คาบที่ ${currentSlot.session}</p></div><button type="button" data-undo-postponement data-plan-id="${plan.id}" data-class-id="${cls.id}" data-event-id="${esc(event.id)}" class="rounded-lg border border-indigo-200 bg-white px-3 py-2 text-xs font-bold text-indigo-700">↩️ คืนลำดับแผน</button></div>`).join('')
    if (postponedHtml) modal.querySelector('[data-archive-body]').insertAdjacentHTML('afterbegin', `<section class="mb-3 rounded-2xl border border-amber-200 bg-amber-50"><div class="border-b border-amber-100 px-3 py-2 text-xs font-extrabold text-amber-900">แผนที่เลื่อนจากสัปดาห์นี้</div>${postponedHtml}</section>`)
    modal.querySelectorAll('[data-postpone-plan]').forEach(button => button.addEventListener('click', async () => {
      const classId = Number(button.dataset.classId), planId = Number(button.dataset.planId), baseWeek = Number(button.dataset.baseWeek)
      const occurrences = roomOccurrences(plans, classId)
      const index = occurrences.findIndex(item => Number(item.plan.id) === planId && item.baseWeek === baseWeek && item.slot.week === selectedWeek)
      if (index < 0) { showToast('ไม่พบคาบนี้ในลำดับปัจจุบัน กรุณาตรวจสอบแผนใหม่', 'warning'); return }
      const target = occurrences[index]
      const last = occurrences.at(-1)
      const appended = { week: last.slot.week + 1, session: last.slot.session }
      const changes = occurrences.slice(index).map((item, offset) => ({ plan_id: Number(item.plan.id), base_week: item.baseWeek, base_session: item.baseSession, before: item.slot, after: occurrences[index + offset + 1]?.slot ?? appended }))
      const event = { id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`, target_plan_id: planId, target_base_week: baseWeek, source_week: selectedWeek, from_slot: target.slot, to_slot: changes[0].after, changes, created_at: new Date().toISOString() }
      const affectedPlans = changes.map(change => ({ plan: plans.find(item => Number(item.id) === Number(change.plan_id)), before: change.before, after: change.after })).filter(item => item.plan)
      if (!await confirmPostpone({ plan: target.plan, before: target.slot, after: changes[0].after, count: changes.length, affectedPlans })) return
      button.disabled = true
      try { await applyScheduleChanges(classId, changes, event); showToast('เลื่อนแผนและขยับลำดับครั้งถัดไปแล้ว', 'success'); await build() }
      catch (error) { showToast(`เลื่อนแผนไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, 'error') }
      finally { button.disabled = false }
    }))
    modal.querySelectorAll('[data-undo-postponement]').forEach(button => button.addEventListener('click', async () => {
      const classId = Number(button.dataset.classId), planId = Number(button.dataset.planId), eventId = button.dataset.eventId
      const plan = plans.find(item => Number(item.id) === planId)
      const event = (plan?.source_json?.class_postponements?.[String(classId)] ?? []).find(item => item.id === eventId)
      if (!plan || !event) { showToast('ไม่พบรายการเลื่อนนี้แล้ว กรุณาตรวจสอบแผนใหม่', 'warning'); return }
      const currentSlotsMatch = event.changes.every(change => { const changedPlan = plans.find(item => Number(item.id) === Number(change.plan_id)); return sameSlot(lessonSlot(changedPlan, classId, Number(change.base_week)), change.after) })
      if (!currentSlotsMatch) { showToast('กรุณาคืนรายการเลื่อนล่าสุดก่อน แล้วจึงคืนรายการนี้ได้', 'warning'); return }
      if (!await confirmPostpone({ plan, before: event.from_slot ?? event.changes[0]?.before, after: event.changes[0]?.before, count: event.changes.length, undo: true })) return
      button.disabled = true
      try { await applyScheduleChanges(classId, event.changes, event, true); showToast('คืนลำดับแผนแล้ว', 'success'); selectedWeek = Number(event.source_week); await build() }
      catch (error) { showToast(`คืนลำดับไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, 'error') }
      finally { button.disabled = false }
    }))
    modal.querySelectorAll('[data-archive-open-plan]').forEach(button => button.addEventListener('click', () => {
      const classId = Number(button.dataset.classId)
      const row = current.rows.find(item => Number(item.cls.id) === classId)
      const plan = row?.items.find(item => Number(item.plan.id) === Number(button.dataset.planId))?.plan
      if (!plan || !row) return
      openLessonPlanDocument({ plan, cls: row.cls, teacher, classId, currentWeek: selectedWeek, semesterStart, semesterEnd, scheduledDays: row.days, onSaved: refresh })
    }))
    archives = await getLessonPlanArchives(subject.id, academicYear, semester).catch(() => [])
    const prior = archives.find(item => Number(item.week_no) === selectedWeek && item.status === 'completed')
    if (prior?.drive_url) modal.querySelector('[data-archive-body]').insertAdjacentHTML('afterbegin', `<div class="mb-3 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-xs text-emerald-800">จัดเก็บแล้วเมื่อ ${esc(new Date(prior.updated_at || prior.created_at).toLocaleString('th-TH'))} · <a class="underline font-bold" href="${esc(prior.drive_url)}" target="_blank" rel="noreferrer">เปิดไฟล์ใน Drive</a></div>`)
  }
  const refresh = async () => { modal.querySelector('[data-archive-refresh]').disabled = true; try { await build() } finally { modal.querySelector('[data-archive-refresh]').disabled = false } }
  modal.querySelector('[data-archive-save-settings]').addEventListener('click', async event => {
    const button = event.currentTarget
    const rootFolderId = modal.querySelector('[data-archive-root-id]').value.trim()
    if (!/^[A-Za-z0-9_-]{10,}$/.test(rootFolderId)) { showToast('กรุณาระบุ Folder ID ของ Drive ให้ถูกต้อง', 'warning'); return }
    button.disabled = true
    try {
      driveSettings = await upsertLessonPlanDriveSettings({ teacher_id: teacher.id, academic_year: academicYear, semester, dept_code: modal.querySelector('[data-archive-dept]').value.trim().toUpperCase() || null, root_folder_id: rootFolderId, create_folders: modal.querySelector('[data-archive-create]').value === 'true', replace_mode: modal.querySelector('[data-archive-replace]').value, enabled: true })
      showToast('บันทึกโฟลเดอร์ Drive ส่วนตัวแล้ว', 'success')
      await build()
    } catch (error) { showToast(`บันทึกการตั้งค่าไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, 'error') } finally { button.disabled = false }
  })
  modal.querySelector('[data-archive-week]').addEventListener('change', event => { selectedWeek = Number(event.target.value); refresh() })
  modal.querySelector('[data-archive-refresh]').addEventListener('click', refresh)
  modal.querySelector('[data-archive-suggest]').addEventListener('click', async () => {
    if (!current) return
    const inputs = [...modal.querySelectorAll('[data-archive-date]')]
    try { for (const input of inputs) { if (!input.value) continue; await upsertLessonPlanReflection({ lesson_plan_id: Number(input.dataset.planId), class_id: Number(input.dataset.classId), teacher_id: teacher.id, week_no: selectedWeek, lesson_date: input.value }) } showToast('เติมวันที่ลงในแผนแล้ว', 'success'); await refresh() } catch (error) { showToast(`บันทึกวันที่ไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, 'error') }
  })
  const renderPdf = async () => { if (!current) await build(); return makePdf({ subject, teacher, roomRows: current.rows, weekNo: selectedWeek, academicYear, semester }) }
  modal.querySelector('[data-archive-download]').addEventListener('click', async event => { const button = event.currentTarget; button.disabled = true; try { const blob = await renderPdf(); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = fileName(subject, selectedWeek); link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000) } catch (error) { showToast(`สร้าง PDF ไม่สำเร็จ: ${getFriendlyErrorMessage(error)}`, 'error') } finally { await build() } })
  modal.querySelector('[data-archive-drive]').addEventListener('click', async event => { const button = event.currentTarget; if (!current || !driveSettings?.root_folder_id) return; const name = fileName(subject, selectedWeek); if (!await showArchiveConfirm(name, selectedWeek)) return; button.disabled = true; try { const blob = await renderPdf(); if (blob.size > 12 * 1024 * 1024) throw new Error('ไฟล์ PDF ใหญ่เกิน 12 MB กรุณาลดรูปภาพลายเซ็นหรือแบ่งส่ง') ; const pdfBase64 = await readFileBase64(blob); const { data, error } = await supabase.functions.invoke('lesson-plan-drive', { body: { courseId: subject.id, academicYear, semester, weekNo: selectedWeek, fileName: name, pdfBase64, planCount: current.planCount, roomCount: current.roomCount } }); if (error) throw error; if (!data?.ok) throw new Error(data?.error || 'บันทึกเข้า Drive ไม่สำเร็จ'); showToast('บันทึกไฟล์เข้า Drive ส่วนตัวแล้ว ✅', 'success'); await build() } catch (error) { showToast(`ส่งเข้า Drive ไม่สำเร็จ: ${await functionErrorMessage(error)}`, 'error') } finally { button.disabled = false; await build() } })
  await build()
}
