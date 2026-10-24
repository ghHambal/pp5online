import {
  getLessonPlanReflectionsForPlans,
  getLessonPlanArchives,
  getLessonPlanDriveSettings,
  upsertLessonPlanDriveSettings,
  upsertLessonPlanReflection,
} from './api.js'
import { getLessonPlanAssetUrl } from './storage.js'
import { supabase } from './supabase.js'
import { showToast, getFriendlyErrorMessage } from './ui.js'

const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[ch])
const text = value => Array.isArray(value) ? value.map(item => typeof item === 'string' ? item : JSON.stringify(item)).join('\n') : String(value ?? '')
const iso = value => /^\d{4}-\d{2}-\d{2}$/.test(String(value ?? '')) ? String(value) : ''
const thaiDate = value => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value ?? '')); return m ? `${m[3]}/${m[2]}/${Number(m[1]) + 543}` : '—' }
const scopedClassId = plan => { const n = Number(plan?.source_json?.class_id); return Number.isInteger(n) && n > 0 ? n : null }
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

export function archiveReadiness(plan, reflection) {
  const missing = []
  if (!iso(reflection?.lesson_date)) missing.push('วันที่สอน')
  if (!text(reflection?.reflection_text).trim()) missing.push('ผลการจัดการเรียนรู้')
  if (!reflection?.class_head_signature_path) missing.push('ลายเซ็นหัวหน้าห้อง')
  if (!reflection?.teacher_signature_path && !reflection?.signature_data_url) missing.push('ลายเซ็นครูผู้สอน')
  if (!reflection?.dept_head_signature_path) missing.push('ลายเซ็นหัวหน้ากลุ่มสาระ')
  return { ready: missing.length === 0, missing }
}

function scheduleDaysForClass(classId, schedule, links) {
  const ids = new Set((links ?? []).filter(link => Number(link.class_id) === Number(classId)).map(link => Number(link.teacher_schedule_id)))
  return [...new Set((schedule ?? []).filter(row => ids.has(Number(row.id))).map(row => Number(row.day_of_week)).map(day => day === 0 ? 7 : day).filter(day => day >= 1 && day <= 7 && day !== 6))]
}

function suggestedDate(plan, weekNo, semesterStart, semesterEnd, days, used = new Set()) {
  const dates = weekDates(weekNo, semesterStart, semesterEnd, days)
  if (!dates.length) return ''
  const session = Math.max(1, Number(plan.session_in_week ?? plan.source_json?.session_in_week ?? 1))
  return dates.find(date => !used.has(date)) ?? dates[Math.min(session - 1, dates.length - 1)]
}

function planDuration(plan) {
  const minutes = Number(plan.duration_minutes) || Number(plan.source_json?.duration_minutes) || Number(plan.source_json?.period_count || 1) * Number(plan.source_json?.minutes_per_period || 45)
  return minutes ? `${minutes} นาที` : '—'
}

function renderPlanPage(plan, cls, reflection, urls, subject) {
  const nl = value => esc(text(value).trim() || '—').replace(/\n/g, '<br>')
  const sig = (url, name, role) => `<div class="sig"><div class="sig-img">${url ? `<img src="${esc(url)}">` : ''}</div><div>ลงชื่อ................................</div><div>${esc(name || '................................')}</div><small>${role}</small></div>`
  const activities = plan.activities ?? {}
  return `<section class="page"><div class="head"><h1>แผนการจัดการเรียนรู้ (หน้าเดียว)</h1><p>รายวิชา ${esc(subject.subject_name)} (${esc(subject.subject_code)}) · ชั้น ${esc(cls.grade_level ?? subject.grade_level ?? '')} ${esc(roomName(cls))}</p><p>${esc(plan.title || '')} · วันที่สอน ${thaiDate(reflection?.lesson_date)} · ${planDuration(plan)}</p></div><div class="cols"><div><div class="box"><h3>มาตรฐาน/ตัวชี้วัด</h3><div>${nl(plan.standards)}</div></div><div class="box"><h3>จุดประสงค์การเรียนรู้</h3><div>${nl(plan.objectives)}</div></div><div class="box activities"><h3>กิจกรรมการเรียนรู้</h3><div><b>ขั้นนำ</b><br>${nl(plan.activities_intro ?? activities.intro)}<br><br><b>ขั้นสอน</b><br>${nl(plan.activities_main ?? activities.main)}<br><br><b>ขั้นสรุป</b><br>${nl(plan.activities_wrap ?? activities.wrap)}</div></div></div><div><div class="box"><h3>การวัดและประเมินผล</h3><div>${nl(plan.assessment)}</div></div><div class="box"><h3>สื่อการเรียนรู้</h3><div>${nl(plan.media)}</div></div><div class="box"><h3>บันทึกหลังการสอน</h3><div><b>ผลการจัดการเรียนรู้</b><br>${nl(reflection?.reflection_text)}<br><br><b>ปัญหา/แนวทางแก้ไข</b><br>${nl(reflection?.issues_solutions)}<br><br><b>ข้อเสนอแนะ</b><br>${nl(reflection?.suggestions)}</div></div><div class="signs">${sig(urls.classHead, reflection?.class_head_name, 'หัวหน้าห้อง')}${sig(urls.teacher, reflection?.teacher_name, 'ครูผู้สอน')}${sig(urls.deptHead, reflection?.dept_head_name, 'หัวหน้ากลุ่มสาระ')}</div></div></div></section>`
}

async function toDataUrl(url) {
  if (!url || String(url).startsWith('data:')) return url || ''
  const res = await fetch(url)
  if (!res.ok) throw new Error('โหลดลายเซ็นสำหรับ PDF ไม่สำเร็จ')
  const blob = await res.blob()
  return await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(blob) })
}

async function makePdf({ subject, teacher, roomRows, weekNo, academicYear, semester }) {
  const mod = await import('html2pdf.js')
  const html2pdf = mod.default ?? mod
  const root = document.createElement('div')
  // Keep the render surface inside the viewport. html2canvas can produce a
  // white/blank PDF when the source element is positioned far off-screen.
  root.style.cssText = 'position:fixed;left:0;top:0;width:210mm;z-index:1;pointer-events:none;background:#fff;color:#111;font-family:Sarabun,Tahoma,sans-serif;font-size:10px;line-height:1.4'
  root.innerHTML = `<style>@page{size:A4;margin:0}.page{width:210mm;min-height:297mm;padding:10mm 11mm;page-break-after:always;background:#fff}.page:last-child{page-break-after:auto}.head{text-align:center;border-bottom:1px solid #176b3a;padding-bottom:3mm;margin-bottom:3mm}.head h1{font-size:18px;margin:0}.head p{margin:1mm 0}.cols{display:grid;grid-template-columns:1fr 1fr;gap:3mm}.box{border:1px solid #17743d;border-radius:2mm;margin-bottom:2.5mm;overflow:hidden}.box h3{margin:0;padding:1.5mm 2mm;background:#d8f6e2;color:#145f35;font-size:11px}.box>div{padding:2mm;white-space:pre-wrap;overflow-wrap:anywhere;min-height:10mm}.activities>div{min-height:70mm}.signs{display:flex;gap:4mm;margin-top:4mm}.sig{flex:1;text-align:center;font-size:9px}.sig-img{height:14mm;display:flex;align-items:end;justify-content:center}.sig-img img{max-width:30mm;max-height:13mm;object-fit:contain}</style><section class="page"><div class="head"><h1>รวมแผนการจัดการเรียนรู้รายสัปดาห์ที่ ${weekNo}</h1><p>${esc(subject.subject_name)} (${esc(subject.subject_code)}) · ภาคเรียนที่ ${esc(semester)} ปีการศึกษา ${esc(academicYear)}</p><p>เรียงตามห้องเรียนและวันที่สอน · ${roomRows.reduce((n, row) => n + row.plans.length, 0)} แผน</p></div></section>${(await Promise.all(roomRows.map(async row => { const pages = []; for (const item of row.items) { const urls = { classHead: await toDataUrl(await getLessonPlanAssetUrl(item.reflection?.class_head_signature_path).catch(() => '')), teacher: await toDataUrl(await getLessonPlanAssetUrl(item.reflection?.teacher_signature_path || item.reflection?.signature_data_url).catch(() => '')), deptHead: await toDataUrl(await getLessonPlanAssetUrl(item.reflection?.dept_head_signature_path).catch(() => '')) }; pages.push(renderPlanPage(item.plan, row.cls, item.reflection, urls, subject)) } return pages.join('') }))).join('')}`
  document.body.appendChild(root)
  try {
    const worker = html2pdf().set({ margin: 0, filename: 'lesson-plan.pdf', image: { type: 'jpeg', quality: 0.82 }, html2canvas: { scale: 1.15, useCORS: true, backgroundColor: '#fff' }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, pagebreak: { mode: ['css', 'legacy'] } }).from(root)
    return await worker.outputPdf('blob')
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
  document.getElementById('lesson-plan-archive-modal')?.remove()
  const weeks = [...new Set(plans.flatMap(plan => { const start = Number(plan.week_start); const end = Number(plan.week_end ?? start); return Number.isInteger(start) ? Array.from({ length: Math.max(1, end - start + 1) }, (_, i) => start + i) : [] }))].sort((a, b) => a - b)
  if (!weeks.length) { showToast('ยังไม่มีแผนการสอนสำหรับจัดเก็บ', 'warning'); return }
  let driveSettings = await getLessonPlanDriveSettings(teacher?.id, academicYear, semester).catch(() => null)
  const modal = document.createElement('div'); modal.id = 'lesson-plan-archive-modal'; modal.className = 'fixed inset-0 z-[130] bg-black/60 flex items-center justify-center p-3'
  const settings = driveSettings ?? {}
  const roomSummary = [...classes].sort(sortRooms).map(item => `<span class="inline-flex items-center gap-1 rounded-lg border border-indigo-100 bg-white px-2.5 py-1.5 text-[11px] font-bold text-indigo-700">🏫 ${esc(roomName(item))}</span>`).join('') || '<span class="text-xs text-gray-400">ยังไม่พบห้องในคอร์สนี้</span>'
  modal.innerHTML = `<div class="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[94vh] overflow-hidden flex flex-col"><header class="flex items-start justify-between gap-3 p-5 border-b"><div><h2 class="text-lg font-extrabold text-gray-900">📦 ศูนย์จัดการ/จัดเก็บแผนรายสัปดาห์ระดับคอร์ส</h2><p class="text-xs text-gray-500 mt-1">รวมแผนของทุกห้องในคอร์สเดียวกัน แล้วส่งเป็น PDF เดียวต่อสัปดาห์เข้าโฟลเดอร์ Drive ส่วนตัวของคุณ</p></div><button data-archive-close class="w-10 h-10 rounded-xl border text-gray-400">✕</button></header><section class="p-4 border-b bg-amber-50"><div class="flex flex-wrap items-end gap-3"><label class="text-xs font-bold text-gray-700 flex-1 min-w-[280px]">โฟลเดอร์หลัก Drive ส่วนตัว (Folder ID)<input data-archive-root-id type="text" value="${esc(settings.root_folder_id || '')}" placeholder="วาง Folder ID ของโฟลเดอร์ส่วนตัว" class="mt-1 block w-full min-h-[42px] rounded-xl border bg-white px-3 font-mono text-xs" /></label><label class="text-xs font-bold text-gray-700">กลุ่มสาระ (ถ้าต้องการตรวจสอบ)<input data-archive-dept type="text" value="${esc(settings.dept_code || '')}" placeholder="เช่น MATH" class="mt-1 block min-h-[42px] w-32 rounded-xl border bg-white px-3" /></label><label class="text-xs font-bold text-gray-700">สร้างโฟลเดอร์<select data-archive-create class="mt-1 block min-h-[42px] rounded-xl border bg-white px-3"><option value="true" ${settings.create_folders !== false ? 'selected' : ''}>อัตโนมัติ</option><option value="false" ${settings.create_folders === false ? 'selected' : ''}>ไม่สร้าง</option></select></label><label class="text-xs font-bold text-gray-700">ไฟล์ชื่อเดิม<select data-archive-replace class="mt-1 block min-h-[42px] rounded-xl border bg-white px-3"><option value="replace" ${settings.replace_mode !== 'version' ? 'selected' : ''}>แทนที่</option><option value="version" ${settings.replace_mode === 'version' ? 'selected' : ''}>เก็บเวอร์ชัน</option></select></label><button data-archive-save-settings class="min-h-[42px] rounded-xl bg-amber-600 px-4 text-xs font-bold text-white">บันทึกการตั้งค่าส่วนตัว</button></div><p data-archive-settings-status class="mt-2 text-xs text-amber-800">ตั้งค่านี้ใช้เฉพาะบัญชีของคุณและภาคเรียนนี้ ไม่กระทบครูคนอื่น</p></section><section class="border-b bg-indigo-50/70 px-4 py-3"><p class="text-xs font-extrabold text-indigo-900">ห้องที่อยู่ในคอร์สเดียวกัน (${classes.length} ห้อง)</p><div class="mt-2 flex flex-wrap gap-2">${roomSummary}</div></section><div class="p-4 border-b bg-violet-50 flex flex-wrap items-end gap-3"><label class="text-xs font-bold text-gray-600">สัปดาห์<select data-archive-week class="mt-1 block min-h-[42px] rounded-xl border bg-white px-3">${weeks.map(week => `<option value="${week}">สัปดาห์ที่ ${week}</option>`).join('')}</select></label><button data-archive-suggest class="min-h-[42px] rounded-xl border border-violet-200 bg-white px-4 text-xs font-bold text-violet-700">↻ เติมวันที่จากตารางสอน</button><button data-archive-refresh class="min-h-[42px] rounded-xl border bg-white px-4 text-xs font-bold">ตรวจสอบความพร้อม</button><span data-archive-status class="text-xs text-gray-500"></span></div><div data-archive-body class="flex-1 overflow-y-auto p-4"></div><footer class="p-4 border-t flex flex-wrap justify-end gap-2"><button data-archive-download disabled class="min-h-[44px] rounded-xl border border-violet-200 bg-white px-4 text-xs font-bold text-violet-700 disabled:opacity-40">⬇️ ดาวน์โหลด PDF เดียว</button><button data-archive-drive disabled class="min-h-[44px] rounded-xl bg-emerald-600 px-5 text-xs font-bold text-white disabled:opacity-40">☁️ บันทึก PDF รวมเข้า Drive ส่วนตัว</button></footer></div>`
  document.body.appendChild(modal)
  let selectedWeek = weeks[0], current = null, archives = []
  const close = () => modal.remove()
  modal.querySelector('[data-archive-close]').addEventListener('click', close)
  modal.addEventListener('click', event => { if (event.target === modal) close() })
  const build = async () => {
    const allForWeek = plans.filter(plan => Number(plan.week_start) <= selectedWeek && Number(plan.week_end ?? plan.week_start) >= selectedWeek)
    const reflections = await getLessonPlanReflectionsForPlans(allForWeek.map(plan => plan.id), selectedWeek).catch(() => [])
    const reflectionMap = new Map(reflections.map(item => [`${item.lesson_plan_id}:${item.class_id}:${selectedWeek}`, item]))
    const rows = [...classes].sort(sortRooms).map(cls => {
      const roomPlans = plansForRoomWeek(plans, cls.id, selectedWeek); const days = scheduleDaysForClass(cls.id, termSchedule, scheduleLinks); const used = new Set()
      const items = roomPlans.map(plan => { const reflection = reflectionMap.get(`${plan.id}:${cls.id}:${selectedWeek}`) ?? null; const date = iso(reflection?.lesson_date) || suggestedDate(plan, selectedWeek, semesterStart, semesterEnd, days, used); if (date) used.add(date); return { plan, reflection, date, readiness: archiveReadiness(plan, reflection) } })
      return { cls, plans: roomPlans, items, days }
    }).filter(row => row.items.length)
    current = { rows, items: rows.flatMap(row => row.items), roomCount: rows.length, planCount: rows.reduce((n, row) => n + row.items.length, 0) }
    const missing = current.items.filter(item => !item.readiness.ready)
    const settingsMissing = !driveSettings?.enabled || !String(driveSettings.root_folder_id || '').trim()
    modal.querySelector('[data-archive-status]').textContent = missing.length ? `ยังไม่พร้อม ${missing.length} รายการ · ต้องบันทึกข้อมูล/ลายเซ็นให้ครบก่อนส่ง Drive` : settingsMissing ? `พร้อมดาวน์โหลด ${current.planCount} แผน · กรุณาบันทึกโฟลเดอร์ Drive ส่วนตัวก่อนส่ง` : `พร้อมส่ง ${current.planCount} แผน ${current.roomCount} ห้อง`
    modal.querySelector('[data-archive-settings-status]').textContent = settingsMissing ? 'ยังไม่ได้บันทึกโฟลเดอร์ส่วนตัวสำหรับภาคเรียนนี้' : `เชื่อมกับโฟลเดอร์ส่วนตัวแล้ว · ภาคเรียนที่ ${semester} ปีการศึกษา ${academicYear}`
    modal.querySelector('[data-archive-download]').disabled = !current.planCount || missing.length > 0
    modal.querySelector('[data-archive-drive]').disabled = !current.planCount || missing.length > 0 || settingsMissing
    modal.querySelector('[data-archive-body]').innerHTML = rows.length ? `<div class="overflow-auto rounded-2xl border"><table class="w-full min-w-[760px] text-sm"><thead class="bg-gray-50 text-xs"><tr><th class="p-3 text-left">ห้อง</th><th class="p-3 text-left">แผน/ครั้งที่</th><th class="p-3 text-left">วันที่สอน</th><th class="p-3 text-left">สถานะ</th></tr></thead><tbody>${rows.flatMap(row => row.items.map(item => `<tr class="border-t"><td class="p-3 font-bold">${esc(roomName(row.cls))}</td><td class="p-3">${esc(item.plan.title || `ครั้งที่ ${item.plan.session_number || ''}`)}</td><td class="p-3"><input data-archive-date data-plan-id="${item.plan.id}" data-class-id="${row.cls.id}" type="date" value="${esc(item.date)}" class="rounded-lg border px-2 py-1.5" /></td><td class="p-3 ${item.readiness.ready ? 'text-emerald-700' : 'text-amber-700'}">${item.readiness.ready ? 'พร้อม' : `ขาด ${esc(item.readiness.missing.join(', '))}`}</td></tr>`)).join('')}</tbody></table></div>` : '<div class="p-10 text-center text-sm text-gray-400">ไม่พบแผนของสัปดาห์นี้สำหรับห้องที่ผูกไว้</div>'
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
