import { getDepartments, getSystemConfig, getRoomsByGrade, getStudentsByRoom,
         getStudentsByReligionRoom, getReligionRoomsByGrade, getMySchedule,
         createClass, updateClass, enrollStudents, getClassStudents,
         getScoreColumns, createScoreColumn, linkClassToSchedule } from './api.js'
import { showToast } from './ui.js'

const SELECT_CLS = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400'
const INPUT_CLS  = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm'

function setContent(html) {
  document.getElementById('main-content').innerHTML = html
}

function setTitle(t) {
  document.getElementById('page-title').textContent = t
}

function setActiveNav(nav) {
  document.querySelectorAll('[data-nav]').forEach(el => {
    const active = el.dataset.nav === nav
    el.classList.toggle('bg-emerald-800', active)
    el.classList.toggle('text-white', active)
    el.classList.toggle('text-emerald-200', !active)
  })
}

function _parseDateOnly(value) {
  if (!value) return null
  if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate())
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

function _dateInputValue(value) {
  const d = _parseDateOnly(value)
  if (!d) return ''
  return [
    d.getFullYear(),
    String(d.getMonth() + 1).padStart(2, '0'),
    String(d.getDate()).padStart(2, '0'),
  ].join('-')
}

function _calcSixPeriodDates(entries, termStartStr) {
  const termStart = _parseDateOnly(termStartStr) ?? _parseDateOnly(new Date())
  const startDow = termStart.getDay()
  const periods = []
  for (const e of entries) {
    const span = e.span_periods ?? 1
    for (let i = 0; i < span; i++) {
      periods.push({ dow: e.day_of_week, pno: (e.period_no ?? 0) + i })
    }
  }
  periods.sort((a, b) => {
    const aOffset = (a.dow - startDow + 7) % 7
    const bOffset = (b.dow - startDow + 7) % 7
    return aOffset !== bOffset ? aOffset - bOffset : a.pno - b.pno
  })
  if (!periods.length) return []

  const result = []
  let week = 0
  while (result.length < 6) {
    for (const p of periods) {
      const d = new Date(termStart)
      d.setDate(d.getDate() + ((p.dow - startDow + 7) % 7) + week * 7)
      result.push(d)
      if (result.length >= 6) break
    }
    week++
  }
  return result.slice(0, 6)
}

const SKILL_GROUPS = {
  ACDM:    ['วิชาการ','ภาษา','ชีวิต'],   // สามัญมัธยม — ต้องเลือก
  AGM:     ['ศาสนามัธยม'],               // ศาสนามัธยม — fixed
  ACDMVOC: ['วิชาการ','ภาษา','สามัญปวช'], // สามัญปวช — ต้องเลือก
  AGMVOC:  ['ศาสนาปวช'],                 // ศาสนาปวช — fixed
}

export async function renderClassForm(teacher, course, opts = {}) {
  // opts.cloneFrom = classId ของห้องต้นฉบับที่จะสำเนาช่องคะแนน
  const cloneFrom = opts.cloneFrom ?? null

  setActiveNav(cloneFrom ? 'my-classes' : 'my-courses')
  setTitle(cloneFrom ? 'ทำสำเนาห้องเรียน' : 'ลงทะเบียนรายวิชา')
  const depts    = await getDepartments().catch(()=>[])
  const termCfg  = await getSystemConfig().catch(()=>({}))
  const termStart = termCfg.semester_start ?? termCfg.term_start_date ?? _dateInputValue(new Date())
  const skillOpts = SKILL_GROUPS[course.subject_group] ?? []
  const autoSkill = skillOpts.length === 1

  // Dept head from departments
  const deptRec = depts.find(d => d.dept_code === course.dept)
  const gradePrefix = course.grade_level
  const isReligionGrade = /^(PR|อก|อป)/i.test(gradePrefix ?? '')

  // กรองห้องที่มีอยู่ในคอร์สนี้แล้วออก (เฉพาะตอน clone)
  const usedRooms = cloneFrom
    ? new Set((window._classesFlat ?? []).filter(c => c.course_id === course.id).map(c => c.class_name))
    : new Set()
  const allRooms = gradePrefix
    ? (isReligionGrade
        ? await getReligionRoomsByGrade(gradePrefix).catch(()=>[])
        : await getRoomsByGrade(gradePrefix).catch(()=>[]))
    : []
  const rooms = cloneFrom ? allRooms.filter(r => !usedRooms.has(r)) : allRooms

  // skill ที่ pre-select จากต้นฉบับ (ถ้า clone)
  const srcSkill = cloneFrom ? (opts.srcSkill ?? '') : ''
  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${cloneFrom ? '📋 ทำสำเนาห้องเรียน' : 'ลงทะเบียนรายวิชา'}</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${course.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${course.subject_code??'—'} · ${course.credit??'—'} หน่วยกิต · ${course.grade_level??'—'}</p>
      </div>
    </div>
    ${cloneFrom ? `<div class="bg-violet-50 border border-violet-200 rounded-xl px-4 py-3 mb-5 text-xs text-violet-700">
      📋 ระบบจะคัดลอกช่องคะแนนทั้งหมดจากห้องต้นฉบับให้อัตโนมัติ — นักเรียน วันเรียน และ Google Sheet ตั้งค่าได้ในขั้นตอนนี้
    </div>` : ''}
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
      <form id="class-form" novalidate class="space-y-5">
        <!-- Google Sheet ID -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Google Sheet ID <span class="text-gray-400 font-normal">(เว้นว่างได้)</span>
          </label>
          <input id="cls-sheet-id" type="text" placeholder="วาง ID จาก URL ของ Google Sheet"
            class="${INPUT_CLS}" />
          <p class="text-xs text-gray-400 mt-1">URL: docs.google.com/spreadsheets/d/<b>[ID ตรงนี้]</b>/edit</p>
        </div>
        <!-- กลุ่มทักษะ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ <span class="text-red-400">*</span></label>
          ${autoSkill
            ? `<input type="text" value="${skillOpts[0]}" class="${INPUT_CLS} bg-gray-50" readonly />
               <input type="hidden" id="cls-skill" value="${skillOpts[0]}" />`
            : `<select id="cls-skill" class="${SELECT_CLS}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${skillOpts.map(s=>`<option value="${s}" ${s===srcSkill?'selected':''}>${s}</option>`).join('')}
               </select>`}
        </div>
        <!-- ชั้นเรียน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ชั้นเรียน <span class="text-red-400">*</span></label>
          ${rooms.length
            ? `<select id="cls-room" class="${SELECT_CLS}">
                <option value="">— เลือกห้องเรียน —</option>
                ${rooms.map(r=>`<option value="${r}">${r}</option>`).join('')}
               </select>`
            : `<input id="cls-room" type="text" placeholder="พิมพ์ชื่อห้อง เช่น PR 1/7 Ikhlas" class="${INPUT_CLS}" autocomplete="off" />
               <p class="text-xs text-amber-500 mt-1">⚠️ ไม่พบห้อง ${gradePrefix} — พิมพ์ชื่อห้องตรงๆ หรืออัปโหลดนักเรียนพร้อม column <b>religion_room</b></p>`}
        </div>
        <!-- นักเรียนในห้อง -->
        <div id="cls-students-section" class="hidden">
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            นักเรียนในห้อง <span id="cls-student-count" class="text-xs text-gray-400 font-normal"></span>
          </label>
          <div id="cls-students-list" class="border border-gray-100 rounded-xl overflow-hidden max-h-52 overflow-y-auto"></div>
        </div>
        <!-- หัวหน้าห้อง -->
        <div id="cls-head-section" class="hidden">
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง
            <span class="font-normal text-gray-400 text-xs">(ไม่บังคับ — เลือกทีหลังได้ในหน้าตั้งค่าห้องเรียน)</span>
          </label>
          <select id="cls-head" class="${SELECT_CLS}">
            <option value="">— เลือกหัวหน้าห้อง —</option>
          </select>
          <!-- Card แสดงหัวหน้าห้องที่เลือก -->
          <div id="cls-head-card" class="hidden mt-2 flex items-center gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
            <div id="cls-head-avatar" class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center text-gray-400">
              👤
            </div>
            <div class="min-w-0">
              <p id="cls-head-name" class="font-semibold text-emerald-900 text-sm truncate"></p>
              <p id="cls-head-code" class="text-xs text-emerald-600 font-mono mt-0.5"></p>
              <p id="cls-head-room" class="text-xs text-gray-400 mt-0.5"></p>
            </div>
            <span class="ml-auto text-emerald-500 text-lg flex-shrink-0">✓</span>
          </div>
        </div>
        <!-- วันสอน 6 คาบแรก -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-semibold text-gray-700">วันสอน 6 คาบแรก</label>
            <button type="button" id="btn-auto-dates"
              class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">
              🗓️ คำนวณจากตารางสอน
            </button>
          </div>
          <div id="auto-dates-info" class="hidden mb-2 bg-indigo-50 rounded-xl px-3 py-2 text-xs text-indigo-700"></div>
          <div class="grid grid-cols-3 gap-2">
            ${[1,2,3,4,5,6].map(n=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${n}</p>
              <input id="cls-day${n}" type="date" value="${termStart}" class="${INPUT_CLS} text-xs" />
            </div>`).join('')}
          </div>
        </div>
        <!-- ข้อมูล auto (แสดง readonly) -->
        <div class="bg-gray-50 rounded-xl p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">ข้อมูลที่ซิงค์ไปยัง Google Sheet</p>
          <div class="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div><span class="text-gray-400">รหัสวิชา:</span> ${course.subject_code??'—'}</div>
            <div><span class="text-gray-400">หน่วยกิต:</span> ${course.credit??'—'}</div>
            <div><span class="text-gray-400">ชั้นปี:</span> ${course.grade_level??'—'}</div>
            <div><span class="text-gray-400">กลุ่มสาระ:</span> ${deptRec?.dept_name??course.dept??'—'}</div>
            <div class="col-span-2"><span class="text-gray-400">หัวหน้าหมวด:</span> ${deptRec?.head_name??'—'}</div>
            <div class="col-span-2"><span class="text-gray-400">ครูผู้สอน:</span> ${teacher?.full_name??'—'} ${teacher?.phone?`(${teacher.phone})`:''}
            </div>
          </div>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cls-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            บันทึกและเปิดรายวิชา
          </button>
        </div>
      </form>
    </div>
  </div>`)

  // ─── Load students when room selected ────────────────────────────────────────
  let _students = []
  document.getElementById('cls-room').addEventListener('change', async e => {
    const room = e.target.value
    if (!room) {
      document.getElementById('cls-students-section').classList.add('hidden')
      document.getElementById('cls-head-section').classList.add('hidden')
      return
    }
    try {
      _students = isReligionGrade
        ? await getStudentsByReligionRoom(room)
        : await getStudentsByRoom(room)
      document.getElementById('cls-student-count').textContent = `(${_students.length} คน)`
      document.getElementById('cls-students-list').innerHTML = !_students.length
        ? `<p class="text-center py-4 text-gray-400 text-sm">ไม่พบนักเรียนในห้องนี้</p>`
        : `<table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500">
              <tr>
                <th class="px-3 py-2 text-left">รหัส</th>
                <th class="px-3 py-2 text-left">ชื่อ-สกุล</th>
                <th class="px-3 py-2 text-center">ศาสนา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${_students.map(s=>`
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 font-mono text-indigo-600">${s.student_code}</td>
                <td class="px-3 py-2">
                  <div class="flex items-center gap-2">
                    ${s.image_url?`<img src="${s.image_url}" class="w-6 h-6 rounded-full object-cover flex-shrink-0" />`:''}
                    ${s.full_name}
                  </div>
                </td>
                <td class="px-3 py-2 text-center text-gray-400">${s.religion_room??'—'}</td>
              </tr>`).join('')}
            </tbody>
          </table>`

      // head student options
      const headSel = document.getElementById('cls-head')
      headSel.innerHTML = '<option value="">— เลือกหัวหน้าห้อง —</option>' +
        _students.map(s=>`<option value="${s.id}" data-code="${s.student_code}" data-room="${s.main_room??''}" data-img="${s.image_url??''}">${s.full_name} (${s.student_code})</option>`).join('')
      document.getElementById('cls-students-section').classList.remove('hidden')
      document.getElementById('cls-head-section').classList.remove('hidden')

      // Card แสดงหัวหน้าห้องเมื่อเลือก
      const _updateHeadCard = () => {
        const opt  = headSel.options[headSel.selectedIndex]
        const card = document.getElementById('cls-head-card')
        if (!opt || !opt.value) { card?.classList.add('hidden'); return }
        const name = opt.text.split(' (')[0]
        const code = opt.dataset.code ?? ''
        const room = opt.dataset.room ?? ''
        const img  = opt.dataset.img ?? ''
        document.getElementById('cls-head-name').textContent = name
        document.getElementById('cls-head-code').textContent = `รหัส: ${code}`
        document.getElementById('cls-head-room').textContent = room ? `ห้อง: ${room}` : ''
        const avatarEl = document.getElementById('cls-head-avatar')
        avatarEl.innerHTML = img
          ? `<img src="${img}" class="w-full h-full object-cover" />`
          : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${name.charAt(0)}</div>`
        card?.classList.remove('hidden')
      }
      headSel.addEventListener('change', _updateHeadCard)
    } catch { showToast('โหลดรายชื่อนักเรียนไม่สำเร็จ','error') }
  })

  // ─── Auto-calculate dates — Popup เลือกวิชาจากตารางสอน ──────────────────
  let _pendingScheduleEntries = []   // entries ที่ครูเลือกจาก calc → link หลัง createClass

  document.getElementById('btn-auto-dates')?.addEventListener('click', async () => {
    const btn   = document.getElementById('btn-auto-dates')
    const infoEl = document.getElementById('auto-dates-info')
    btn.textContent = '⏳ กำลังดึงตาราง...'; btn.disabled = true
    try {
      const curYear = parseInt(termCfg.academicYear ?? 2568)
      const curSem  = parseInt(termCfg.semester ?? 1)
      const sched   = teacher ? await getMySchedule(teacher.id, curYear, curSem).catch(()=>[]) : []

      if (!sched.length) {
        infoEl.innerHTML = '⚠️ ยังไม่มีตารางสอน — <a href="#" id="goto-schedule" class="underline text-indigo-600 font-medium">สร้างตารางสอน</a> หรือกรอกวันเองด้านล่าง'
        infoEl.classList.remove('hidden')
        document.getElementById('goto-schedule')?.addEventListener('click', e => {
          e.preventDefault(); window._navTo?.('schedule')
        })
        btn.disabled = false; btn.textContent = '🗓️ คำนวณจากตารางสอน'
        return
      }

      // จัดกลุ่ม entries ตามวิชา+ห้อง
      const groups = {}
      sched.forEach(e => {
        const key  = `${e.subject_name ?? e.master_subjects?.subject_name ?? '?'}|${e.class_name ?? ''}`
        if (!groups[key]) groups[key] = { label: `${e.subject_name ?? e.master_subjects?.subject_name ?? '?'}${e.class_name ? ` — ${e.class_name}` : ''}`, entries: [] }
        groups[key].entries.push(e)
      })

      const DAY_TH = ['อา','จ','อ','พ','พฤ','ศ']
      const _descEntries = (entries) => {
        const expanded = []
        entries.forEach(e => { for (let i=0;i<(e.span_periods??1);i++) expanded.push({dow:e.day_of_week,pno:(e.period_no??0)+i}) })
        expanded.sort((a,b)=>a.dow!==b.dow?a.dow-b.dow:a.pno-b.pno)
        const byDay = {}
        expanded.forEach(p => { if(!byDay[p.dow]) byDay[p.dow]=[]; byDay[p.dow].push(p.pno) })
        return Object.entries(byDay).map(([d,ps])=>`${DAY_TH[d]} คาบ ${ps.join(',')}`).join(' · ')
      }

      // แสดง popup เลือกวิชา
      const wrap = document.createElement('div')
      wrap.id = 'dates-popup'
      wrap.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
      wrap.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(groups).map(([key, g]) => `
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="dates-subj" value="${key}" class="mt-0.5 text-indigo-600 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${g.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${_descEntries(g.entries)}</p>
              </div>
            </label>`).join('')}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`
      document.body.appendChild(wrap)
      wrap.querySelector('#dates-close').addEventListener('click', () => wrap.remove())
      wrap.querySelector('#dates-cancel').addEventListener('click', () => wrap.remove())

      wrap.querySelector('#dates-calc').addEventListener('click', () => {
        const key = wrap.querySelector('input[name="dates-subj"]:checked')?.value
        if (!key) { alert('กรุณาเลือกวิชาก่อน'); return }
        wrap.remove()
        const entries = groups[key].entries
        _pendingScheduleEntries = entries   // เก็บไว้ link หลัง createClass
        const dates   = _calcSixPeriodDates(entries, termStart)
        dates.forEach((d, i) => {
          const el = document.getElementById(`cls-day${i+1}`)
          if (el) el.value = _dateInputValue(d)
        })
        infoEl.textContent = `✅ คำนวณจาก "${groups[key].label}" — ${entries.length} ช่องตาราง — ตรวจสอบแล้วแก้ไขได้`
        infoEl.classList.remove('hidden')
      })
    } catch (err) {
      infoEl.textContent = 'โหลดตารางไม่สำเร็จ: ' + (err.message ?? '')
      infoEl.classList.remove('hidden')
    } finally {
      btn.textContent = '🗓️ คำนวณจากตารางสอน'; btn.disabled = false
    }
  })

  // ─── Save ─────────────────────────────────────────────────────────────────
  document.getElementById('class-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('cls-submit')
    const sheetId = document.getElementById('cls-sheet-id').value.trim()
    const skill   = document.getElementById('cls-skill').value
    const room    = document.getElementById('cls-room').value
    const headId  = document.getElementById('cls-head').value
    if (!room) { showToast('กรุณาเลือกชั้นเรียน','warning'); return }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const payload = {
        course_id:       course.id,
        class_name:      room,
        skill_group:     skill || null,
        google_sheet_id: sheetId || null,
        head_student_id: headId ? Number(headId) : null,
        day1_date: document.getElementById('cls-day1').value || null,
        day2_date: document.getElementById('cls-day2').value || null,
        day3_date: document.getElementById('cls-day3').value || null,
        day4_date: document.getElementById('cls-day4').value || null,
        day5_date: document.getElementById('cls-day5').value || null,
        day6_date: document.getElementById('cls-day6').value || null,
      }
      const created = await createClass(payload, teacher?.id ?? null)

      // auto-link schedule entries ที่ครูเลือกจากปุ่มคำนวณ (silent — ไม่ block ถ้าพลาด)
      if (created?.id && _pendingScheduleEntries.length) {
        await Promise.all(_pendingScheduleEntries.map(e => linkClassToSchedule(created.id, e.id).catch(() => {})))
      }

      // enroll all students in the room
      if (_students.length && created?.id) {
        await enrollStudents(created.id, _students.map(s => s.id))
      }

      // copy score columns จากห้องต้นฉบับ (ถ้า clone)
      // ข้าม auto-generated columns (ทักษะชีวิต/ศาสนา) เพราะ Grades page จะ generate ให้ใหม่
      const PRAYER_AUTO_COLS = new Set(['คะแนนมาเรียน', 'คะแนนละหมาด'])
      const LIFE_SKILL_AUTO_SHEET_COLS = new Set(['EH', 'EI', 'EJ'])
      const isSrcLifeSkill = (opts.srcSkill ?? '') === 'ชีวิต'
      const isSrcReligion  = ['AGM', 'AGMVOC'].includes(course.subject_group ?? '')
      let copiedCols = 0
      if (cloneFrom && created?.id) {
        const srcCols = await getScoreColumns(cloneFrom).catch(() => [])
        for (const col of srcCols) {
          if (isSrcReligion  && PRAYER_AUTO_COLS.has(col.assignment_name)) continue
          if (isSrcLifeSkill && LIFE_SKILL_AUTO_SHEET_COLS.has(col.sheet_column))  continue
          await createScoreColumn({
            class_id:        created.id,
            assignment_name: col.assignment_name,
            assignment_type: col.assignment_type,
            sheet_column:    col.sheet_column,
            max_score:       col.max_score,
          })
          copiedCols++
        }
      }

      const msg = cloneFrom
        ? `ทำสำเนา "${room}" สำเร็จ — นักเรียน ${_students.length} คน · ช่องคะแนน ${copiedCols} ช่อง`
        : `เปิดรายวิชา ${room} สำเร็จ! นักเรียน ${_students.length} คน`
      showToast(msg, 'success')
      window._goBack()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึกและเปิดรายวิชา'
    }
  })

}

// ─── Placeholder views ────────────────────────────────────────────────────────

export async function renderClassEditForm(teacher, classData) {
  setActiveNav('my-classes')
  setTitle('แก้ไขห้องเรียน')
  const ms       = classData.master_subjects
  const skillOpts = SKILL_GROUPS[ms?.subject_group] ?? []
  const autoSkill = skillOpts.length === 1
  const classStudents = await getClassStudents(classData.id).catch(()=>[])
  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._navTo?.('my-classes') || history.back()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">แก้ไขห้องเรียน</h2>
    </div>
    <!-- ข้อมูลคงที่ -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5">
      <p class="text-xs text-emerald-500 font-medium mb-1">คอร์สวิชา / ห้องเรียน (เปลี่ยนไม่ได้)</p>
      <p class="font-bold text-emerald-900">${ms?.subject_name??'—'}
        <span class="font-mono text-sm ml-2 text-emerald-600">${ms?.subject_code??''}</span>
      </p>
      <p class="text-sm text-emerald-700 mt-0.5">ห้อง: <strong>${classData.class_name}</strong></p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
      <form id="cls-edit-form" class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Google Sheet ID</label>
          <input id="ce-sheet" type="text" value="${classData.google_sheet_id??''}"
            placeholder="วาง ID จาก URL ของ Google Sheet" class="${INPUT_CLS}" />
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มทักษะ</label>
          ${autoSkill
            ? `<input type="text" value="${skillOpts[0]}" class="${INPUT_CLS} bg-gray-50" readonly />
               <input type="hidden" id="ce-skill" value="${skillOpts[0]}" />`
            : `<select id="ce-skill" class="${SELECT_CLS}">
                 <option value="">— เลือกกลุ่มทักษะ —</option>
                 ${skillOpts.map(s=>`<option value="${s}" ${s===classData.skill_group?'selected':''}>${s}</option>`).join('')}
               </select>`}
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
          <select id="ce-head" class="${SELECT_CLS}">
            <option value="">— ยังไม่ระบุหัวหน้าห้อง —</option>
            ${classStudents.map(s => `
              <option value="${s.id}" ${Number(classData.head_student_id) === Number(s.id) ? 'selected' : ''}>
                ${s.full_name} (${s.student_code})
              </option>`).join('')}
          </select>
          ${classStudents.length
            ? '<p class="text-xs text-gray-400 mt-1">เลือกได้จากนักเรียนที่อยู่ในห้องนี้</p>'
            : '<p class="text-xs text-amber-500 mt-1">ยังไม่พบนักเรียนในห้องนี้ จึงยังเลือกหัวหน้าห้องไม่ได้</p>'}
        </div>
        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-semibold text-gray-700">วันสอน 6 คาบแรก</label>
            <button type="button" id="ce-btn-auto-dates"
              class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-medium transition">
              🗓️ คำนวณจากตารางสอน
            </button>
          </div>
          <p id="ce-auto-dates-info" class="hidden text-xs text-emerald-600 mb-2"></p>
          <div class="grid grid-cols-3 gap-2">
            ${[1,2,3,4,5,6].map(n=>`
            <div>
              <p class="text-xs text-gray-400 mb-1">คาบที่ ${n}</p>
              <input id="ce-day${n}" type="date"
                value="${classData[`day${n}_date`]??''}" class="${INPUT_CLS} text-xs" />
            </div>`).join('')}
          </div>
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button"
            onclick="window._navTo?.('my-classes') || history.back()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="ce-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            บันทึกการแก้ไข
          </button>
        </div>
      </form>
    </div>
  </div>`)
  // ─── คำนวณวันจากตารางสอน ────────────────────────────────────────────────
  let _pendingEditScheduleEntries = []   // entries ที่ครูเลือกจาก calc → link หลัง updateClass

  document.getElementById('ce-btn-auto-dates')?.addEventListener('click', async () => {
    const btn    = document.getElementById('ce-btn-auto-dates')
    const infoEl = document.getElementById('ce-auto-dates-info')
    btn.textContent = '⏳ กำลังดึงตาราง...'; btn.disabled = true
    try {
      const termCfg2 = await getSystemConfig().catch(()=>({}))
      const termStart = termCfg2.semester_start ?? termCfg2.term_start_date ?? _dateInputValue(new Date())
      const curYear  = parseInt(termCfg2.academicYear ?? 2568)
      const curSem   = parseInt(termCfg2.semester ?? 1)
      const sched    = teacher ? await getMySchedule(teacher.id, curYear, curSem).catch(()=>[]) : []
      if (!sched.length) {
        infoEl.textContent = '⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง'
        infoEl.classList.remove('hidden'); return
      }
      const groups = {}
      sched.forEach(e => {
        const key = `${e.subject_name ?? '?'}|${e.class_name ?? ''}`
        if (!groups[key]) groups[key] = {
          label: `${e.subject_name ?? '?'}${e.class_name ? ` — ${e.class_name}` : ''}`,
          entries: []
        }
        groups[key].entries.push(e)
      })
      const DAY_TH = ['อา','จ','อ','พ','พฤ','ศ']
      const _desc = (entries) => {
        const exp = []; entries.forEach(e => { for (let i=0;i<(e.span_periods??1);i++) exp.push({dow:e.day_of_week,pno:(e.period_no??0)+i}) })
        exp.sort((a,b)=>a.dow!==b.dow?a.dow-b.dow:a.pno-b.pno)
        const byDay = {}; exp.forEach(p => { if(!byDay[p.dow]) byDay[p.dow]=[]; byDay[p.dow].push(p.pno) })
        return Object.entries(byDay).map(([d,ps])=>`${DAY_TH[d]} คาบ ${ps.join(',')}`).join(' · ')
      }
      const popup = document.createElement('div')
      popup.id = 'ce-dates-popup'
      popup.className = 'fixed inset-0 z-[90] flex items-center justify-center bg-black/50 p-4'
      popup.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
          <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
            <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
            <button id="ce-dates-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
          </div>
          <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
            <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
            ${Object.entries(groups).map(([key, g]) => `
            <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
              <input type="radio" name="ce-dates-subj" value="${key}" class="mt-0.5 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-800">${g.label}</p>
                <p class="text-xs text-gray-400 mt-0.5">${_desc(g.entries)}</p>
              </div>
            </label>`).join('')}
          </div>
          <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
            <button id="ce-dates-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
            <button id="ce-dates-calc" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
          </div>
        </div>`
      document.body.appendChild(popup)
      popup.querySelector('#ce-dates-close').addEventListener('click', () => popup.remove())
      popup.querySelector('#ce-dates-cancel').addEventListener('click', () => popup.remove())
      popup.querySelector('#ce-dates-calc').addEventListener('click', () => {
        const key = popup.querySelector('input[name="ce-dates-subj"]:checked')?.value
        if (!key) { showToast('กรุณาเลือกวิชาก่อน', 'warning'); return }
        popup.remove()
        _pendingEditScheduleEntries = groups[key].entries   // เก็บไว้ link หลัง updateClass
        const dates = _calcSixPeriodDates(groups[key].entries, termStart)
        dates.forEach((d, i) => {
          const el = document.getElementById(`ce-day${i+1}`)
          if (el) el.value = _dateInputValue(d)
        })
        infoEl.textContent = `✅ คำนวณจาก "${groups[key].label}" — ตรวจสอบและแก้ไขได้`
        infoEl.classList.remove('hidden')
      })
    } catch (err) {
      infoEl.textContent = 'โหลดตารางไม่สำเร็จ: ' + (err.message ?? '')
      infoEl.classList.remove('hidden')
    } finally {
      btn.textContent = '🗓️ คำนวณจากตารางสอน'; btn.disabled = false
    }
  })

  document.getElementById('cls-edit-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('ce-submit')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await updateClass(classData.id, {
        google_sheet_id: document.getElementById('ce-sheet').value.trim() || null,
        skill_group:     document.getElementById('ce-skill').value || null,
        head_student_id: document.getElementById('ce-head').value ? Number(document.getElementById('ce-head').value) : null,
        day1_date: document.getElementById('ce-day1').value || null,
        day2_date: document.getElementById('ce-day2').value || null,
        day3_date: document.getElementById('ce-day3').value || null,
        day4_date: document.getElementById('ce-day4').value || null,
        day5_date: document.getElementById('ce-day5').value || null,
        day6_date: document.getElementById('ce-day6').value || null,
      })

      // auto-link schedule entries ที่ครูเลือกจากปุ่มคำนวณ (silent — ไม่ block ถ้าพลาด)
      if (_pendingEditScheduleEntries.length) {
        await Promise.all(_pendingEditScheduleEntries.map(e => linkClassToSchedule(classData.id, e.id).catch(() => {})))
        _pendingEditScheduleEntries = []
      }

      showToast('บันทึกสำเร็จ', 'success')
      if (window._navTo) window._navTo('my-classes')
      else history.back()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึกการแก้ไข'
    }
  })

}
