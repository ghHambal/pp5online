import { showToast } from './ui.js'

const DAY_NAMES = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์']
const SCHEMA_VERSION = 'pp5.teacher_schedule.v1'

const text = value => String(value ?? '').trim()
const normalizeKey = value => text(value).toLowerCase().replace(/\s+/g, '')
const stripJsonFence = value => text(value).replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')

function subjectForName(subjects, value) {
  const key = normalizeKey(value)
  if (!key) return null
  return subjects.find(subject => [subject.subject_name, subject.subject_code, subject.code]
    .some(candidate => normalizeKey(candidate) === key)) ?? null
}

function buildPrompt({ teacher, subjects, periods, academicYear, semester, hasFriday }) {
  const courseCatalog = subjects.map(subject => ({
    subject_code: subject.subject_code ?? subject.code ?? '', subject_name: subject.subject_name ?? '',
  })).filter(subject => subject.subject_code || subject.subject_name)
  const periodCatalog = periods.map(period => ({
    period_no: period.period_no,
    time: String(period.start_time ?? '').slice(0, 5) + '-' + String(period.end_time ?? '').slice(0, 5),
  }))
  return [
    'คุณเป็นผู้ช่วยแปลงภาพตารางสอนของโรงเรียนเป็น JSON สำหรับระบบ ปพ.5 ออนไลน์',
    'ครูจะอัปโหลดภาพตารางสอนจากระบบดูแลของโรงเรียนให้คุณอ่าน ภาพอาจมีหลายวัน หลายคาบ และช่องที่รวมหลายคาบเข้าด้วยกัน',
    '',
    'ข้อควรตรวจสอบจากภาพ:',
    '- ต้องอ่านทั้งตาราง ไม่ใช่เฉพาะบางช่อง',
    '- ต้องใช้หัวคอลัมน์วันและคอลัมน์คาบ/เวลาเป็นตัวอ้างอิงทุกแถว',
    hasFriday ? '- หากมีคาบสอนวันศุกร์ ต้องอ่านและส่งข้อมูลวันศุกร์มาด้วย ห้ามตัดคอลัมน์วันศุกร์ออก' : '- ตารางระบบนี้เปิดใช้งานถึงวันพฤหัสบดี ไม่ต้องสร้างรายการวันศุกร์',
    '- ช่องที่รวมหลายคาบต่อเนื่อง ให้ใช้ span_periods เป็นจำนวนคาบที่รวมกัน',
    '- ช่องว่างไม่ต้องสร้างรายการ',
    '- รายการประชุมหรือกิจกรรมที่ปรากฏในตารางให้ใส่ได้ โดยใช้ subject_id เป็น null และ class_name เป็นค่าว่างถ้าไม่มีห้อง',
    '',
    'กติกาสำคัญ:',
    '- สกัดเฉพาะรายการจากภาพ ห้ามเดาชื่อวิชา ห้องเรียน วัน หรือคาบที่มองไม่เห็น',
    '- ใช้ชื่อวิชาและรหัสวิชาจากรายการอ้างอิงเมื่อจับคู่ได้ แต่ห้ามแต่ง subject_id เอง',
    '- ใช้ day_of_week: 0=อาทิตย์, 1=จันทร์, 2=อังคาร, 3=พุธ, 4=พฤหัส, 5=ศุกร์',
    '- period_no ต้องตรงกับรายการคาบ/เวลาที่ระบบให้ไว้',
    '- รวมวิชาและห้องเดียวกันคนละวันไว้ใน groups เดียวกันได้ แต่ต้องแยก sessions ตามวันและคาบ',
    '',
    'บริบทระบบ: ครู ' + (text(teacher?.full_name) || '-') + ' · ภาคเรียน ' + semester + '/' + academicYear,
    'คาบที่ระบบรองรับ: ' + JSON.stringify(periodCatalog),
    'รายวิชาที่ครูมีในระบบ: ' + JSON.stringify(courseCatalog),
    '',
    'ตอบกลับเป็น JSON โดยครอบผลลัพธ์ทั้งหมดไว้ในกล่องโค้ด Markdown ชนิด json เพียงกล่องเดียว (เปิดด้วย ```json และปิดด้วย ```) เพื่อให้ครูเห็นปุ่มคัดลอกโค้ดได้ชัดเจน ห้ามมีคำอธิบายก่อนหรือหลังกล่อง ตาม schema นี้:',
    JSON.stringify({
      schema_version: SCHEMA_VERSION, type: 'teacher_schedule', academic_year: academicYear, semester,
      groups: [{ subject_name: 'คณิตศาสตร์พื้นฐาน', class_name: 'ม.6/2', teacher_name: text(teacher?.full_name), sessions: [{ day_of_week: 1, period_no: 1, span_periods: 2 }] }],
    }, null, 2),
  ].join('\n')
}

function parseScheduleJSON(raw, { subjects, periods, hasFriday }) {
  let data
  try { data = JSON.parse(stripJsonFence(raw)) } catch { throw new Error('JSON ไม่ถูกต้อง กรุณาคัดลอกเฉพาะโค้ด JSON และตรวจเครื่องหมายให้ครบ') }
  if (data?.schema_version !== SCHEMA_VERSION || data?.type !== 'teacher_schedule') {
    throw new Error('ต้องเป็น JSON ตารางสอนประเภท teacher_schedule และ schema pp5.teacher_schedule.v1')
  }
  if (!Array.isArray(data.groups) || !data.groups.length) throw new Error('JSON ต้องมี groups อย่างน้อย 1 กลุ่ม')
  const periodNos = periods.map(period => Number(period.period_no)).filter(Number.isInteger)
  if (!periodNos.length) throw new Error('ยังไม่มีรายการคาบเรียนในระบบให้ตรวจสอบ')
  const groups = data.groups.map((group, groupIndex) => {
    const subjectName = text(group?.subject_name)
    const className = text(group?.class_name)
    if (!subjectName && !className) throw new Error(`กลุ่มที่ ${groupIndex + 1} ต้องมีชื่อวิชาหรือห้องเรียน`)
    if (!Array.isArray(group?.sessions) || !group.sessions.length) throw new Error(`กลุ่มที่ ${groupIndex + 1} ต้องมี sessions`)
    const subject = subjectForName(subjects, subjectName)
    const sessions = group.sessions.map((session, sessionIndex) => {
      const day = Number(session?.day_of_week)
      const period = Number(session?.period_no)
      const span = Number(session?.span_periods ?? 1)
      if (!Number.isInteger(day) || day < 0 || day > 5 || (!hasFriday && day === 5)) throw new Error(`กลุ่มที่ ${groupIndex + 1} ครั้งที่ ${sessionIndex + 1} มีวันเรียนไม่ถูกต้อง`)
      if (!Number.isInteger(period) || !periodNos.includes(period)) throw new Error(`กลุ่มที่ ${groupIndex + 1} ครั้งที่ ${sessionIndex + 1} มีหมายเลขคาบไม่ตรงกับระบบ`)
      if (!Number.isInteger(span) || span < 1 || span > 4 || !Array.from({ length: span }, (_, i) => period + i).every(no => periodNos.includes(no))) throw new Error(`กลุ่มที่ ${groupIndex + 1} ครั้งที่ ${sessionIndex + 1} มี span_periods ไม่ถูกต้อง`)
      return { day_of_week: day, period_no: period, span_periods: span }
    })
    return { subject_name: subjectName, class_name: className, teacher_name: text(group?.teacher_name), subject_id: subject?.id ?? null, sessions }
  })
  return { ...data, groups }
}

export function openExternalScheduleAI({ teacher, subjects = [], periods = [], academicYear, semester, cfg = {}, onImport }) {
  document.getElementById('external-schedule-ai')?.remove()
  const hasFriday = cfg.hasFriday === 'true'
  const wrap = document.createElement('div')
  wrap.id = 'external-schedule-ai'
  wrap.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
  wrap.innerHTML = [
    '<div class="bg-white w-full max-w-3xl rounded-2xl shadow-2xl flex flex-col max-h-[94vh]">',
    '  <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">',
    '    <div class="flex-1"><h3 class="font-bold text-gray-800">✨ ใช้ AI ของฉันสร้างตารางสอน</h3><p class="text-xs text-gray-400 mt-0.5">คัดลอก Prompt ไปใช้กับ AI ที่ครูเลือก แล้วนำ JSON กลับมาตรวจสอบในระบบ</p></div>',
    '    <button type="button" data-close class="text-gray-400 hover:text-gray-600 text-xl">✕</button>',
    '  </div>',
    '  <div class="overflow-auto flex-1 px-5 py-4 space-y-4">',
    '    <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 text-xs text-sky-800 leading-relaxed">',
    '      <p class="font-bold mb-1">📸 วิธีใช้งาน</p>',
    '      <ol class="list-decimal pl-5 space-y-1"><li>เปิดตารางสอนจากระบบดูแลของโรงเรียน แล้วแคปหน้าจอให้เห็นตารางทั้งหมด</li><li>ภาพต้องเห็นคอลัมน์คาบ/เวลาและหัววันครบทุกวัน</li><li>ถ้าครูมีคาบสอนวันศุกร์ ต้องเห็นคอลัมน์วันศุกร์ในภาพด้วย ห้ามตัดออก</li><li>นำภาพนี้พร้อม Prompt ด้านล่างไปสั่ง AI ของครู แล้วคัดลอก JSON กลับมาวาง</li></ol>',
    '    </div>',
    '    <div class="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">⚠️ ระบบจะยังไม่บันทึกตารางจนกว่าครูจะตรวจสอบผลลัพธ์และกดบันทึกแต่ละกลุ่ม</div>',
    '    <div class="flex items-center justify-between gap-2"><label class="text-xs font-bold text-gray-500">Prompt สำหรับนำไปใช้กับ AI</label><div class="flex gap-2"><button type="button" data-generate class="min-h-[40px] px-3 rounded-xl bg-violet-700 text-white text-xs font-bold">⚡ สร้าง Prompt</button><button type="button" data-copy class="min-h-[40px] px-3 rounded-xl border border-violet-200 bg-violet-50 text-violet-700 text-xs font-bold">📋 คัดลอก Prompt</button></div></div>',
    '    <textarea data-prompt rows="15" readonly class="w-full border border-gray-200 rounded-xl p-3 text-[11px] leading-relaxed font-mono bg-gray-50"></textarea>',
    '    <div class="border-t border-gray-100 pt-4">',
    '      <div class="flex items-center justify-between gap-2 mb-2"><label class="text-xs font-bold text-gray-500">วาง JSON ที่ได้จาก AI</label><div class="flex gap-2"><button type="button" data-validate class="min-h-[40px] px-3 rounded-xl border border-violet-200 text-violet-700 text-xs font-bold">🔎 ตรวจ JSON</button><button type="button" data-import class="min-h-[40px] px-3 rounded-xl bg-emerald-600 text-white text-xs font-bold">📥 นำเข้าเพื่อตรวจสอบ</button></div></div>',
    '      <textarea data-json rows="12" class="w-full border border-gray-200 rounded-xl p-3 text-[11px] leading-relaxed font-mono" placeholder="วาง JSON ประเภท teacher_schedule ที่นี่"></textarea>',
    '      <div data-result class="hidden mt-2 rounded-xl px-3 py-2 text-xs"></div>',
    '    </div>',
    '  </div>',
    '  </div>',
  ].join('')
  document.body.appendChild(wrap)
  const promptEl = wrap.querySelector('[data-prompt]')
  const jsonEl = wrap.querySelector('[data-json]')
  const resultEl = wrap.querySelector('[data-result]')
  const prompt = buildPrompt({ teacher, subjects, periods, academicYear, semester, hasFriday })
  promptEl.value = prompt
  const close = () => wrap.remove()
  const showResult = (message, ok) => {
    resultEl.className = `mt-2 rounded-xl px-3 py-2 text-xs ${ok ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`
    resultEl.textContent = message
  }
  const parse = () => parseScheduleJSON(jsonEl.value, { subjects, periods, hasFriday })
  wrap.querySelector('[data-close]').addEventListener('click', close)
  wrap.addEventListener('click', event => { if (event.target === wrap) close() })
  wrap.querySelector('[data-generate]').addEventListener('click', () => { promptEl.value = buildPrompt({ teacher, subjects, periods, academicYear, semester, hasFriday }); showToast('สร้าง Prompt ตารางสอนแล้ว', 'success') })
  wrap.querySelector('[data-copy]').addEventListener('click', async () => {
    promptEl.value = buildPrompt({ teacher, subjects, periods, academicYear, semester, hasFriday })
    try { await navigator.clipboard.writeText(promptEl.value); showToast('คัดลอก Prompt ตารางสอนแล้ว', 'success') }
    catch { promptEl.select(); document.execCommand('copy'); showToast('คัดลอก Prompt ตารางสอนแล้ว', 'success') }
  })
  wrap.querySelector('[data-validate]').addEventListener('click', () => {
    try { const data = parse(); showResult(`JSON ถูกต้อง: ${data.groups.length} กลุ่มวิชา`, true) }
    catch (error) { showResult(error.message, false) }
  })
  wrap.querySelector('[data-import]').addEventListener('click', async () => {
    try {
      const data = parse()
      close()
      await onImport(data.groups)
    } catch (error) { showResult(error.message, false) }
  })
}
