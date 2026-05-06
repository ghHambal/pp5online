import { getMySubjects, getMyClasses, getDepartments, getTeachers, getMasterSubjects,
         updateMyProfile, getRoomsByGrade, getStudentsByRoom,
         getStudentsByReligionRoom, getReligionRoomsByGrade,
         createClass, updateClass, deleteClass, enrollStudents, getSystemConfig,
         updateSubject, deleteSubject,
         getScoreColumns, createScoreColumn, updateScoreColumn, deleteScoreColumn,
         getScoreColumnConfig, saveAttendance, getAttendanceByDate,
         getClassStudents, getClassAttendanceAll, saveAttendanceCell, getSchoolHolidays,
         getPrayerRecords, savePrayerRecords, savePrayerCell,
         getStudentScores, saveStudentScore,
         getSheetColumnOptions, detectAssignmentKind, colTypeToThai,
         getUniqueRooms, getUniqueReligionRooms,
         getMySchedule, upsertScheduleEntry, deleteScheduleEntry,
         deleteScheduleByTeacher, getPeriods, getAllPeriods,
         getLifeSkillColumns, getLifeSkillScores, upsertLifeSkillScore,
         getReadingScoreColumns, getReadingScores, upsertReadingScore,
         fillLifeSkillScoresForClass, fillPrayerScoresForReligionClass } from './api.js'

import { uploadTeacherPhoto } from './storage.js'

import { showToast } from './ui.js'

// ─── Grade options per subject group ─────────────────────────────────────────

const GRADE_OPTS = {
  ACDM:    ['ม.1','ม.2','ม.3','ม.4','ม.5','ม.6'],
  AGM:     ['PR 1',
             'อก.1','อก.2','อก.3',
             'อป.1','อป.2','อป.3'],
  ACDMVOC: ['ปวช.1','ปวช.2','ปวช.3'],
  AGMVOC:  ['อก.ปวช.1','อก.ปวช.2','อก.ปวช.3'],
}

const CREDIT_OPTS = [0.5,1.0,1.5,2.0,2.5,3.0]

const SELECT_CLS = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400'

const INPUT_CLS  = 'input-field w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm'

// ─── Phone formatter ──────────────────────────────────────────────────────────

// คำนวณ 6 วันสอนแรก จาก teacher_schedules entries + termStart date string
function _calcSixPeriodDates(entries, termStartStr) {
  // Expand span_periods → รายการคาบแต่ละ 45 นาที
  const periods = []
  for (const e of entries) {
    const span = e.span_periods ?? 1
    for (let i = 0; i < span; i++) {
      periods.push({ dow: e.day_of_week, pno: (e.period_no ?? 0) + i })
    }
  }
  // เรียง: วัน → คาบ
  periods.sort((a,b) => a.dow !== b.dow ? a.dow - b.dow : a.pno - b.pno)
  if (!periods.length) return []

  // หาวันแรกของแต่ละ dow ที่ >= termStart
  const termStart = new Date(termStartStr + 'T00:00:00')
  const firstDate = {}
  for (const p of periods) {
    if (firstDate[p.dow]) continue
    const d = new Date(termStart)
    // getDay(): 0=Sun,1=Mon,...,6=Sat; dow: 0=อา,1=จ,...,5=ศ (ตรงกัน)
    while (d.getDay() !== p.dow) d.setDate(d.getDate() + 1)
    firstDate[p.dow] = new Date(d)
  }

  // Generate จนครบ 6 คาบ โดย วนสัปดาห์
  const result = []
  let week = 0
  while (result.length < 6) {
    for (const p of periods) {
      const base = firstDate[p.dow]
      if (!base) continue
      const d = new Date(base)
      d.setDate(d.getDate() + week * 7)
      result.push(d)
      if (result.length >= 6) break
    }
    week++
  }
  return result.slice(0, 6)
}

function formatPhone(digits) {
  const d = digits.replace(/\D/g,'').slice(0,10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `${d.slice(0,3)} ${d.slice(3)}`
  return `${d.slice(0,3)} ${d.slice(3,6)} ${d.slice(6)}`

}

// ─── setContent helper ────────────────────────────────────────────────────────

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

// ─── View: Overview ───────────────────────────────────────────────────────────

export async function renderTeacherOverview(teacher, homeroomRooms = []) {
  setActiveNav('overview')
  setTitle('ภาพรวม')
  const [subjects, classes, cfg] = await Promise.all([
    teacher ? getMySubjects(teacher.id).catch(()=>[]) : getMasterSubjects().catch(()=>[]),
    getMyClasses(teacher?.id ?? null).catch(()=>[]),
    getSystemConfig().catch(()=>({})),
  ])
  const FREE_LIMIT  = parseInt(cfg.freeClassQuota ?? 2)
  const academicYear = parseInt(cfg.academicYear ?? 2568)
  const semester     = parseInt(cfg.semester ?? 1)
  const isPaid       = teacher?.teachers_quota?.is_paid ?? false
  const usedSlots  = classes.length
  const freeLeft   = isPaid ? '∞' : Math.max(0, FREE_LIMIT - usedSlots)
  const quotaColor = isPaid ? 'text-emerald-700' : usedSlots >= FREE_LIMIT ? 'text-red-600' : 'text-amber-600'
  const quotaLabel = isPaid ? 'ไม่จำกัด ✅' : usedSlots >= FREE_LIMIT ? 'ครบโควตาฟรีแล้ว 🔒' : `เหลืออีก ${freeLeft} ห้อง`

  setContent(`<div class="max-w-4xl mx-auto animate-fade">

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5 flex items-center gap-4">
      <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-100 flex-shrink-0
                  bg-gradient-to-tr from-emerald-400 to-teal-400 flex items-center justify-center
                  text-white text-3xl font-bold">
        ${teacher?.image_url
          ? `<img src="${teacher.image_url}" class="w-full h-full object-cover"/>`
          : (teacher?.full_name ?? 'ค').charAt(0).toUpperCase()}
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-gray-800 text-lg truncate">${teacher?.full_name ?? '—'}</h3>
        <p class="text-xs text-gray-400 mt-0.5">รหัสครู ${teacher?.teacher_code ?? '—'} · ${teacher?.category ?? '—'}</p>
        <div class="flex flex-wrap gap-1.5 mt-2">
          ${teacher?.dept
            ? `<span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700 font-medium">📚 ${teacher.dept}</span>`
            : `<span class="px-2 py-0.5 rounded-full text-xs bg-amber-50 text-amber-600 font-medium">⚠️ ยังไม่ระบุกลุ่มสาระ</span>`}
          ${homeroomRooms.map(r =>
            `<span class="px-2 py-0.5 rounded-full text-xs ${r.category==='สามัญ'?'bg-blue-50 text-blue-700':'bg-amber-50 text-amber-700'} font-medium">🏠 ${r.main_room}</span>`
          ).join('')}
          ${homeroomRooms.length === 0
            ? `<span class="px-2 py-0.5 rounded-full text-xs bg-gray-50 text-gray-400">ไม่มีห้องที่ปรึกษา</span>`
            : ''}
        </div>
      </div>
      <button onclick="window._navTo('profile')"
        class="flex-shrink-0 text-xs px-3 py-2 rounded-lg border border-gray-200 text-gray-500
               hover:bg-gray-50 hover:text-gray-700 transition whitespace-nowrap">
        ✏️ แก้ไขโปรไฟล์
      </button>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      ${[
        { label:'คอร์สวิชาของฉัน', value: subjects.length, icon:'📖', color:'text-emerald-700', bg:'bg-emerald-50', nav:'my-courses' },
        { label:'ห้องเรียน', value: classes.length, icon:'🏫', color:'text-blue-700', bg:'bg-blue-50', nav:'my-classes' },
        { label:'คำร้องรออนุมัติ', value: '—', icon:'🔔', color:'text-red-700', bg:'bg-red-50', nav:'requests' },
      ].map(c=>`
        <div onclick="window._navTo('${c.nav}')"
          class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-gray-200 transition">
          <div class="w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center text-xl">${c.icon}</div>
          <div>
            <p class="text-xs text-gray-500">${c.label}</p>
            <p class="text-2xl font-bold ${c.color}">${c.value}</p>
          </div>
        </div>`).join('')}
    </div>

    <!-- ปุ่มตารางสอน -->
    <div onclick="window._navTo('schedule')"
      class="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4
             cursor-pointer hover:shadow-md hover:border-indigo-200 hover:bg-indigo-50/30 transition group">
      <div class="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl flex-shrink-0">🗓️</div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-gray-800 text-sm">ตารางสอนของฉัน</p>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${semester} / ${academicYear} — คลิกเพื่อดูและแก้ไขตาราง</p>
      </div>
      <span class="text-gray-300 group-hover:text-indigo-400 transition text-lg">→</span>
    </div>

    <!-- โควตาห้องเรียน -->
    <div class="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-semibold text-gray-700">🎯 โควตาห้องเรียน</h4>
        <span class="text-sm font-bold ${quotaColor}">${quotaLabel}</span>
      </div>
      ${!isPaid ? `
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-2">
        <div class="bg-${usedSlots >= FREE_LIMIT ? 'red' : 'emerald'}-500 h-2.5 rounded-full transition-all"
          style="width:${Math.min(100, (usedSlots/FREE_LIMIT)*100)}%"></div>
      </div>
      <div class="flex justify-between text-xs text-gray-400 mb-3">
        <span>ใช้แล้ว ${usedSlots} ห้อง</span>
        <span>ฟรี ${FREE_LIMIT} ห้อง</span>
      </div>
      ${usedSlots >= FREE_LIMIT ? `
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
        <p class="text-xs text-amber-700 font-medium">🔒 ครบโควตาฟรีแล้ว — เลือกแพ็กเกจเพื่อเพิ่มห้องเรียนต่อ</p>
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-white rounded-xl p-3 border border-amber-200 text-center">
            <p class="text-xs text-gray-500 mb-1">รายห้อง</p>
            <p class="text-lg font-extrabold text-indigo-600">${parseInt(cfg.pricePerClass ?? 49)} <span class="text-xs font-normal text-gray-400">บ./ห้อง</span></p>
            <p class="text-[10px] text-gray-400">เพิ่มทีละห้อง</p>
          </div>
          <div class="bg-white rounded-xl p-3 border border-emerald-300 text-center relative">
            <span class="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[9px] px-2 py-0.5 rounded-full">แนะนำ</span>
            <p class="text-xs text-gray-500 mb-1">เหมาทั้งเทอม</p>
            <p class="text-lg font-extrabold text-emerald-600">${parseInt(cfg.priceSemester ?? 299)} <span class="text-xs font-normal text-gray-400">บ./เทอม</span></p>
            <p class="text-[10px] text-gray-400">ไม่จำกัดห้อง</p>
          </div>
        </div>
        <button id="btn-upgrade-overview"
          class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
          🚀 ดูแพ็กเกจและชำระเงิน
        </button>
      </div>` : `
      <p class="text-xs text-gray-400">เหลืออีก <b class="text-emerald-600">${freeLeft} ห้อง</b> ก่อนต้องอัปเกรด</p>`}
      ` : `
      <p class="text-sm text-emerald-600">✅ แพ็กเกจ${teacher?.teachers_quota?.package_type === 'semester' ? 'เหมาทั้งเทอม' : 'รายห้อง'} — สร้างได้ไม่จำกัด</p>
      `}
    </div>
    <!-- Homeroom role buttons -->
    ${homeroomRooms.length > 0 ? `
    <div class="mt-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h4 class="font-semibold text-gray-700 mb-3">🏠 ห้องที่ปรึกษาของฉัน</h4>
      <div class="flex flex-wrap gap-3">
        ${homeroomRooms.map(r => `
        <div class="border border-gray-100 rounded-xl p-3 flex-1 min-w-40">
          <p class="font-bold text-gray-800">${r.main_room}
            <span class="ml-1 text-xs px-2 py-0.5 rounded-full ${r.category==='สามัญ'?'bg-blue-50 text-blue-700':'bg-amber-50 text-amber-700'}">${r.category}</span>
          </p>
          <div class="mt-2 space-y-1.5">
            ${r.category === 'สามัญ' ? `
            <button onclick="window._openLifeSkillScore('${r.main_room}')"
              class="w-full text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 text-left">
              📊 บันทึกคะแนนทักษะชีวิต
            </button>` : `
            <button onclick="window._openReligionScore('${r.main_room}')"
              class="w-full text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 text-left">
              📊 บันทึกคะแนนศาสนา
            </button>`}
          </div>
        </div>`).join('')}
      </div>
    </div>` : ''}
    <!-- ภาษาไทย → อ่านคิดวิเคราะห์ (ปุ่มเดียว + popup เลือกห้อง) -->
    ${teacher?.dept === 'THAI' ? (() => {
      const readingRooms = [...new Set(classes.map(c => c.class_name).filter(Boolean))].sort()
      const roomsJson = JSON.stringify(readingRooms).replace(/"/g, '&quot;')
      return `
    <div onclick="window._openReadingScorePicker('${roomsJson}')"
      class="mt-4 bg-white rounded-2xl border border-indigo-100 shadow-sm p-4 flex items-center gap-4
             cursor-pointer hover:shadow-md hover:border-indigo-300 hover:bg-indigo-50/30 transition group">
      <div class="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl flex-shrink-0">📖</div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-gray-800 text-sm">บันทึกคะแนนอ่านคิดวิเคราะห์และเขียน</p>
        <p class="text-xs text-gray-400 mt-0.5">${readingRooms.length > 0 ? `${readingRooms.length} ห้อง — คลิกเพื่อเลือกห้อง` : 'ยังไม่มีห้องเรียน'}</p>
      </div>
      <span class="text-gray-300 group-hover:text-indigo-400 transition text-lg">→</span>
    </div>`
    })() : ''}
    ${subjects.length > 0 ? `
    <div class="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h4 class="font-semibold text-gray-700 mb-3">คอร์สวิชาล่าสุด</h4>
      <div class="space-y-2">
        ${subjects.slice(0,5).map(s=>`
        <div class="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
          <span class="px-2 py-0.5 rounded-full text-xs bg-indigo-50 text-indigo-700 font-mono">${s.subject_code??'—'}</span>
          <span class="font-medium text-gray-800 text-sm">${s.subject_name}</span>
          <span class="ml-auto text-xs text-gray-400">${s.grade_level??'—'}</span>
        </div>`).join('')}
      </div>
    </div>` : ''}
  </div>`)

  // ผูกปุ่มอัปเกรดในภาพรวม → เปิด quota popup
  document.getElementById('btn-upgrade-overview')?.addEventListener('click', () => {
    window._showQuotaFromOverview?.()
  })
}

// ─── View: My Courses ─────────────────────────────────────────────────────────

export async function renderMyCourses(teacher) {
  setActiveNav('my-courses')
  setTitle('คอร์สวิชาของฉัน')
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)
  try {
    const subjects = teacher
      ? await getMySubjects(teacher.id)
      : await getMasterSubjects().catch(()=>[])
    setContent(`<div class="max-w-5xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-5">
        <div>
          <h2 class="text-lg font-bold text-gray-800">คอร์สวิชาของฉัน</h2>
          <p class="text-xs text-gray-400 mt-0.5">รายวิชาที่ลงทะเบียนเปิดสอน</p>
        </div>
        <button onclick="window._openCourseForm()"
          class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
          <span>＋</span> เปิดคอร์สใหม่
        </button>
      </div>
      ${!subjects.length ? `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium">ยังไม่มีคอร์สวิชา</p>
        <p class="text-xs mt-1">กดปุ่ม "เปิดคอร์สใหม่" เพื่อเริ่มต้น</p>
      </div>` : `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
            <tr>
              <th class="px-4 py-3 text-left">รหัส / ชื่อวิชา</th>
              <th class="px-4 py-3 text-left hidden sm:table-cell">กลุ่มสาระ</th>
              <th class="px-4 py-3 text-center hidden md:table-cell">ชั้น</th>
              <th class="px-4 py-3 text-center hidden md:table-cell">กิต</th>
              <th class="px-4 py-3 text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${subjects.map(s=>`
            <tr class="hover:bg-gray-50 transition">
              <td class="px-4 py-3">
                <p class="font-semibold text-gray-800">${s.subject_name}</p>
                <p class="text-xs font-mono text-indigo-500">${s.subject_code??'—'}</p>
              </td>
              <td class="px-4 py-3 hidden sm:table-cell">
                ${s.dept?`<span class="px-2 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700">${s.dept}</span>`:'—'}
              </td>
              <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.grade_level??'—'}</td>
              <td class="px-4 py-3 text-center text-xs text-gray-500 hidden md:table-cell">${s.credit??'—'}</td>
              <td class="px-4 py-3 text-right">
                <div class="flex items-center justify-end gap-1 flex-wrap">
                  <button onclick="window._openRegisterClass(${s.id})"
                    class="text-xs bg-emerald-600 text-white px-2 py-1.5 rounded-lg hover:bg-emerald-700">
                    ＋ห้อง
                  </button>
                  <button onclick="window._editCourse(${s.id})"
                    class="text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2 py-1.5 border border-indigo-200 rounded-lg">
                    แก้ไข
                  </button>
                  <button onclick="window._deleteCourse(${s.id},'${s.subject_name.replace(/'/g,"\\'")}')'"
                    class="text-xs text-red-400 hover:text-red-600 font-medium px-2 py-1.5 border border-red-100 rounded-lg">
                    ลบ
                  </button>
                </div>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`}
    </div>`)
  } catch { showToast('โหลดข้อมูลไม่สำเร็จ','error') }

}

// ─── Course Registration Form (2.1) ──────────────────────────────────────────

export async function renderCourseForm(teacher, onSave, editData = null) {
  setActiveNav('my-courses')
  setTitle(editData ? 'แก้ไขคอร์สวิชา' : 'ลงทะเบียนเปิดคอร์ส')

  const [depts, teachers] = await Promise.all([
    getDepartments().catch(()=>[]),
    getTeachers().catch(()=>[]),
  ])

  // unique dept names (no duplicates for display)
  const uniqueDepts = [...new Map(depts.map(d=>[d.dept_code,d])).values()]

  // map subject_group → dept category
  const _sgToCategory = sg =>
    (sg === 'ACDM' || sg === 'ACDMVOC') ? 'สามัญ' :
    (sg === 'AGM'  || sg === 'AGMVOC')  ? 'ศาสนา' : null

  // filter depts by subject_group (graceful: if no category set, show all)
  const _filterDepts = sg => {
    const cat = _sgToCategory(sg)
    if (!cat) return uniqueDepts
    const filtered = uniqueDepts.filter(d => d.category === cat)
    return filtered.length ? filtered : uniqueDepts
  }

  // สร้าง <option> จาก dept list
  const _deptOptions = (list, selectedCode='') =>
    `<option value="">— เลือกกลุ่มสาระ —</option>` +
    list.map(d=>`<option value="${d.dept_code}" ${d.dept_code===selectedCode?'selected':''}>${d.dept_name}</option>`).join('')

  // all unique dept heads (for typeahead)
  const allHeads = [...new Set(depts.map(d=>d.head_name).filter(Boolean))]

  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">${editData ? 'แก้ไขคอร์สวิชา' : 'ลงทะเบียนเปิดคอร์สวิชา'}</h2>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
      <form id="course-form" novalidate class="space-y-5">
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            กลุ่มวิชา <span class="text-red-400">*</span>
          </label>
          <select id="cf-subg" class="${SELECT_CLS}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM">สามัญมัธยม (ACDM)</option>
            <option value="AGM">ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC">สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC">ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        <!-- กลุ่มสาระ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            กลุ่มสาระการเรียนรู้ <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${SELECT_CLS}">
            ${_deptOptions(uniqueDepts)}
          </select>
        </div>
        <!-- ชื่อวิชา + รหัสวิชา -->
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 sm:col-span-1">
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชื่อวิชา <span class="text-red-400">*</span>
            </label>
            <input id="cf-name" type="text" placeholder="เช่น คณิตศาสตร์พื้นฐาน" class="${INPUT_CLS}" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">รหัสวิชา</label>
            <input id="cf-code" type="text" placeholder="เช่น ค32110" class="${INPUT_CLS}" />
            <p id="cf-code-hint" class="text-xs text-gray-400 mt-1"></p>
          </div>
        </div>
        <!-- หน่วยกิต + ชั้นปี -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">หน่วยกิต</label>
            <select id="cf-credit" class="${SELECT_CLS}">
              ${CREDIT_OPTS.map(c=>`<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1">
              ชั้นปี <span class="text-red-400">*</span>
            </label>
            <select id="cf-grade" class="${SELECT_CLS}">
              <option value="">— เลือกกลุ่มวิชาก่อน —</option>
            </select>
          </div>
        </div>
        <!-- ครูผู้สอน -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">ครูผู้สอน</label>
          <div class="flex gap-2">
            <div class="w-1/3">
              <p class="text-xs text-gray-400 mb-1">รหัสครู</p>
              <input id="cf-teacher-code" type="text" placeholder="เช่น 101"
                class="${INPUT_CLS}" autocomplete="off" />
            </div>
            <div class="flex-1 relative">
              <p class="text-xs text-gray-400 mb-1">ชื่อ-สกุล</p>
              <input id="cf-teacher-search" type="text" placeholder="พิมพ์เพื่อค้นหา..."
                class="${INPUT_CLS}" autocomplete="off" />
              <div id="cf-teacher-dropdown"
                class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                       rounded-xl shadow-lg overflow-y-auto" style="max-height:200px"></div>
            </div>
          </div>
          <div id="cf-teacher-selected"
            class="hidden mt-2 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl text-sm text-emerald-700">
            <span class="text-emerald-400">✓</span>
            <span id="cf-teacher-name" class="font-medium"></span>
            <button type="button" id="cf-teacher-clear" class="ml-auto text-gray-400 hover:text-red-400 text-xs">✕</button>
          </div>
          <input type="hidden" id="cf-teacher-id" />
        </div>
        <!-- เบอร์ติดต่อ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">เบอร์ติดต่อครู</label>
          <input id="cf-phone" type="tel" inputmode="numeric" placeholder="0XX XXX XXXX"
            maxlength="12" class="${INPUT_CLS}" />
          <p class="text-xs text-gray-400 mt-1">เบอร์จะถูกเติมอัตโนมัติเมื่อเลือกครูผู้สอน</p>
        </div>
        <!-- หัวหน้ากลุ่มสาระ (typeahead) -->
        <div class="bg-gray-50 rounded-xl p-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้ากลุ่มสาระ</label>
          <div class="relative">
            <input id="cf-dept-head" type="text" placeholder="พิมพ์เพื่อค้นหา หรือระบบเติมอัตโนมัติ"
              class="${INPUT_CLS} bg-white" autocomplete="off" />
            <div id="cf-head-dropdown"
              class="hidden absolute z-20 w-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-lg overflow-y-auto" style="max-height:180px"></div>
          </div>
          <p class="text-xs text-gray-400 mt-1">เติมอัตโนมัติตามกลุ่มสาระ — แก้ไขได้</p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._goBack()"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="cf-submit" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            ${editData ? 'บันทึกการแก้ไข' : 'บันทึกคอร์สวิชา'}
          </button>
        </div>
      </form>
    </div>
  </div>`)

  // ─── Bind logic ──────────────────────────────────────────────────────────

  const HINTS = {
    ACDM: 'มัธยม: แนะนำรูปแบบ ค32110 (ตัวอักษร+เลข 5 หลัก)',
    AGM: 'ศาสนา: อิสระ เช่น ฮ21101',
    ACDMVOC: 'ปวช: อิสระ',
    AGMVOC: 'ศาสนาปวช: อิสระ',
  }

  // 1. กลุ่มวิชา → กรองกลุ่มสาระ + อัปเดต grade options + hint
  document.getElementById('cf-subg').addEventListener('change', e => {
    const sg = e.target.value
    // อัปเดต dept dropdown
    const deptEl = document.getElementById('cf-dept')
    const prevVal = deptEl.value
    deptEl.innerHTML = _deptOptions(_filterDepts(sg))
    if (prevVal) deptEl.value = prevVal  // คงค่าเดิมถ้ายังอยู่ใน list
    // อัปเดต grade
    const gradeEl = document.getElementById('cf-grade')
    const opts = GRADE_OPTS[sg] ?? []
    gradeEl.innerHTML = opts.length
      ? ['<option value="">— เลือกชั้นปี —</option>',
         ...opts.map(g=>`<option value="${g}">${g}</option>`)].join('')
      : '<option value="">— เลือกกลุ่มวิชาก่อน —</option>'
    document.getElementById('cf-code-hint').textContent = HINTS[sg] ?? ''
  })

  // 2. กลุ่มสาระ → auto-fill หัวหน้าหมวด (เฉพาะถ้ายังไม่ได้พิมพ์เอง)
  document.getElementById('cf-dept').addEventListener('change', e => {
    const code = e.target.value
    const heads = depts.filter(x => x.dept_code === code && x.head_name).map(x => x.head_name)
    const headEl = document.getElementById('cf-dept-head')
    if (heads.length === 1) {
      headEl.value = heads[0]
    } else if (heads.length > 1) {
      headEl.value = ''
      _renderHeadDrop(heads)
    } else {
      headEl.value = ''
    }
  })

  // 3. หัวหน้ากลุ่มสาระ — typeahead
  const headEl   = document.getElementById('cf-dept-head')
  const headDrop = document.getElementById('cf-head-dropdown')

  function _renderHeadDrop(list) {
    headDrop.innerHTML = list.map(h=>
      `<div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 border-b border-gray-50 last:border-0 head-opt"
        data-val="${h}">${h}</div>`
    ).join('')
    headDrop.querySelectorAll('.head-opt').forEach(el =>
      el.addEventListener('mousedown', ev => {
        ev.preventDefault()
        headEl.value = el.dataset.val
        headDrop.classList.add('hidden')
      })
    )
    headDrop.classList.toggle('hidden', !list.length)
  }

  headEl.addEventListener('input', () => {
    const q = headEl.value.toLowerCase()
    const filtered = allHeads.filter(h => h.toLowerCase().includes(q))
    _renderHeadDrop(q ? filtered : allHeads)
  })
  headEl.addEventListener('focus', () => {
    const q = headEl.value.toLowerCase()
    _renderHeadDrop(q ? allHeads.filter(h=>h.toLowerCase().includes(q)) : allHeads)
  })
  headEl.addEventListener('blur', () => setTimeout(()=>headDrop.classList.add('hidden'),150))

  // 4. Teacher search (dual-input pattern)
  const codeEl   = document.getElementById('cf-teacher-code')
  const nameEl   = document.getElementById('cf-teacher-search')
  const dropEl   = document.getElementById('cf-teacher-dropdown')
  const selEl    = document.getElementById('cf-teacher-selected')
  const selName  = document.getElementById('cf-teacher-name')
  const clearBtn = document.getElementById('cf-teacher-clear')
  const idEl     = document.getElementById('cf-teacher-id')
  const phoneEl  = document.getElementById('cf-phone')

  function _pickTeacher(t) {
    if (!t) {
      idEl.value = ''; codeEl.value = ''; nameEl.value = ''
      selEl.classList.add('hidden'); selEl.classList.remove('flex')
      phoneEl.value = ''
      return
    }
    idEl.value   = t.id
    codeEl.value = t.teacher_code ?? ''
    nameEl.value = t.full_name    ?? ''
    selName.textContent = `${t.full_name}${t.teacher_code ? ` (${t.teacher_code})` : ''}`
    selEl.classList.remove('hidden'); selEl.classList.add('flex')
    phoneEl.value = formatPhone(t.phone ?? '')
    dropEl.classList.add('hidden')
  }
  function _renderDrop(list) {
    dropEl.innerHTML = !list.length
      ? `<p class="px-4 py-3 text-sm text-gray-400">ไม่พบ</p>`
      : list.map(t=>`
          <div class="px-4 py-2.5 text-sm cursor-pointer hover:bg-emerald-50 transition
                      border-b border-gray-50 last:border-0 t-opt" data-id="${t.id}">
            <span class="font-mono text-xs text-gray-400 mr-2">${t.teacher_code??''}</span>
            <span class="font-medium">${t.full_name}</span>
          </div>`).join('')
    dropEl.querySelectorAll('.t-opt').forEach(el =>
      el.addEventListener('mousedown', e => {
        e.preventDefault()
        _pickTeacher(teachers.find(x=>String(x.id)===el.dataset.id))
      })
    )
    dropEl.classList.remove('hidden')
  }

  // pre-fill ครูปัจจุบัน
  if (teacher && !editData) {
    const me = teachers.find(t => t.id === teacher.id)
    if (me) _pickTeacher(me)
  }

  codeEl.oninput = () => {
    const q = codeEl.value.trim().toLowerCase()
    if (!q) { _pickTeacher(null); return }
    const exact = teachers.find(t=>(t.teacher_code??'').toLowerCase()===q)
    if (exact) _pickTeacher(exact)
    else {
      const f = teachers.filter(t=>(t.teacher_code??'').toLowerCase().startsWith(q))
      if (f.length) _renderDrop(f)
    }
  }
  nameEl.onfocus = () => _renderDrop(teachers)
  nameEl.oninput = () => {
    const q = nameEl.value.toLowerCase()
    _renderDrop(q ? teachers.filter(t=>t.full_name.toLowerCase().includes(q)||(t.teacher_code??'').toLowerCase().includes(q)) : teachers)
  }
  nameEl.onblur = () => setTimeout(()=>dropEl.classList.add('hidden'),150)
  clearBtn.addEventListener('click', ()=>_pickTeacher(null))

  // 5. Phone formatting
  phoneEl.addEventListener('input', e => { e.target.value = formatPhone(e.target.value) })

  // 6. Pre-fill ถ้าเป็นโหมดแก้ไข
  if (editData) {
    document.getElementById('cf-name').value  = editData.subject_name ?? ''
    document.getElementById('cf-code').value  = editData.subject_code ?? ''
    if (editData.credit) document.getElementById('cf-credit').value = String(editData.credit)

    // กลุ่มวิชา → filter dept → update grade
    if (editData.subject_group) {
      const subgEl = document.getElementById('cf-subg')
      subgEl.value = editData.subject_group
      // กรองกลุ่มสาระ
      document.getElementById('cf-dept').innerHTML = _deptOptions(_filterDepts(editData.subject_group))
      // grade options
      const gradeEl = document.getElementById('cf-grade')
      const opts = GRADE_OPTS[editData.subject_group] ?? []
      gradeEl.innerHTML = ['<option value="">— เลือกชั้นปี —</option>',
        ...opts.map(g=>`<option value="${g}">${g}</option>`)].join('')
      if (editData.grade_level) gradeEl.value = editData.grade_level
      document.getElementById('cf-code-hint').textContent = HINTS[editData.subject_group] ?? ''
    }

    // กลุ่มสาระ
    if (editData.dept) document.getElementById('cf-dept').value = editData.dept

    // หัวหน้ากลุ่มสาระ: ใช้จาก editData.learning_area ก่อน, ถ้าไม่มี auto-fill จาก dept
    if (editData.learning_area) {
      headEl.value = editData.learning_area
    } else if (editData.dept) {
      const d = depts.find(x => x.dept_code === editData.dept && x.head_name)
      headEl.value = d?.head_name ?? ''
    }

    // ครูผู้สอน → phone มาจาก teacher record
    if (editData.teacher_id) {
      const t = teachers.find(x => x.id === editData.teacher_id)
      if (t) _pickTeacher(t)
    } else {
      // ไม่มี teacher_id → pre-fill ครูปัจจุบัน
      if (teacher) {
        const me = teachers.find(t => t.id === teacher.id)
        if (me) _pickTeacher(me)
      }
    }
  }

  // 7. Form submit
  document.getElementById('course-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('cf-submit')
    const subg   = document.getElementById('cf-subg').value
    const dept   = document.getElementById('cf-dept').value
    const name   = document.getElementById('cf-name').value.trim()
    const code   = document.getElementById('cf-code').value.trim()
    const credit = parseFloat(document.getElementById('cf-credit').value) || null
    const grade  = document.getElementById('cf-grade').value
    const tid    = idEl.value
    const phone  = phoneEl.value.trim()
    const head   = headEl.value.trim()
    if (!subg || !name || !grade) {
      showToast('กรุณากรอกกลุ่มวิชา ชื่อวิชา และชั้นปี','warning'); return
    }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const resolvedTeacherId = tid ? Number(tid) : (teacher?.id ?? null)
      await onSave({
        subject_group: subg,
        dept:          dept || null,
        subject_name:  name,
        subject_code:  code || null,
        credit,
        grade_level:   grade,
        teacher_id:    resolvedTeacherId,
        learning_area: head || null,
      })
      // บันทึก phone ลง teachers table ถ้ากรอก (เฉพาะกรณีเป็นครูคนเดียวกัน)
      if (phone && resolvedTeacherId && resolvedTeacherId === teacher?.id) {
        await updateMyProfile(teacher.id, { phone }).catch(()=>{})
      }
      showToast('บันทึกคอร์สวิชาสำเร็จ','success')
      window._goBack()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
    } finally {
      btn.disabled = false; btn.textContent = editData ? 'บันทึกการแก้ไข' : 'บันทึกคอร์สวิชา'
    }
  })

}

// ─── View: First-time Profile Setup (หลัง register) ──────────────────────────

export async function renderProfileSetup(teacher, homeroomRooms = [], onComplete) {
  setActiveNav('setup')
  setTitle('ตั้งค่าโปรไฟล์')
  const [depts, allRooms, religionRooms, cfg] = await Promise.all([
    getDepartments().catch(()=>[]),
    getUniqueRooms().catch(()=>[]),
    getUniqueReligionRooms().catch(()=>[]),
    getSystemConfig().catch(()=>({})),
  ])
  const curYear = parseInt(cfg.academicYear ?? 2568)
  const curSem  = parseInt(cfg.semester ?? 1)
  const uniqueDepts = [...new Map(depts.map(d=>[d.dept_code,d])).values()]

  // helper: กรอง dept ตาม category ครู
  const _deptOptsForCat = (cat, selectedCode='') => {
    const list = cat ? uniqueDepts.filter(d => !d.category || d.category === cat) : uniqueDepts
    return `<option value="">— เลือกกลุ่มสาระ —</option>` +
      list.map(d=>`<option value="${d.dept_code}" ${d.dept_code===selectedCode?'selected':''}>${d.dept_name}</option>`).join('')
  }

  // ห้องสามัญ = main_room ที่ขึ้นต้นด้วย ม.
  const samaiRooms   = allRooms.filter(r => /^ม\./.test(r))

  // ห้องศาสนา = religion_room column ของนักเรียน
  const sadsanaRooms = religionRooms
  setContent(`<div class="max-w-lg mx-auto animate-fade">
    <!-- Header -->
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-emerald-400 to-teal-400 text-white
                  text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🎉
      </div>
      <h2 class="text-2xl font-bold text-gray-800">ยินดีต้อนรับ!</h2>
      <p class="text-gray-500 text-sm mt-1">กรุณากรอกข้อมูลเพิ่มเติม เพื่อให้ระบบทำงานได้ถูกต้อง</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 space-y-5">
      ${teacher ? `
      <!-- ข้อมูลจาก teachers table -->
      <div class="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400
                    text-white font-bold text-lg flex items-center justify-center overflow-hidden flex-shrink-0">
          ${teacher.image_url ? `<img src="${teacher.image_url}" class="w-full h-full object-cover" />` : teacher.full_name.charAt(0)}
        </div>
        <div>
          <p class="font-bold text-emerald-900">${teacher.full_name}</p>
          <p class="text-xs text-emerald-600">รหัสครู: ${teacher.teacher_code ?? '—'}</p>
        </div>
      </div>` : `
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700">
        ⚠️ ไม่พบข้อมูลครูในระบบ — ติดต่อผู้ดูแลระบบเพื่อเชื่อมบัญชี
      </div>`}
      <form id="setup-form" class="space-y-4" ${!teacher ? 'style="opacity:0.5;pointer-events:none"' : ''}>
        <!-- เบอร์โทร -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="setup-phone" type="tel" inputmode="numeric" maxlength="12"
            value="${teacher?.phone??''}" placeholder="0XX XXX XXXX"
            class="${INPUT_CLS}" />
        </div>
        <!-- กลุ่มสาระ (กรองตาม ประเภทครู) -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มสาระการเรียนรู้</label>
          <select id="setup-dept" class="${SELECT_CLS}">
            ${_deptOptsForCat(teacher?.category, teacher?.dept ?? '')}
          </select>
        </div>
        <!-- กลุ่มวิชา -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">กลุ่มวิชา</label>
          <select id="setup-subg" class="${SELECT_CLS}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${teacher?.subject_group==='ACDM'?'selected':''}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${teacher?.subject_group==='AGM'?'selected':''}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${teacher?.subject_group==='ACDMVOC'?'selected':''}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${teacher?.subject_group==='AGMVOC'?'selected':''}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        <!-- ประเภทครู -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">ประเภทครู</label>
          <div class="flex gap-3">
            ${['สามัญ','ศาสนา'].map(cat => `
            <label class="flex-1 flex items-center gap-2 border rounded-xl px-4 py-2.5 cursor-pointer hover:bg-gray-50 transition
              ${teacher?.category===cat?'border-emerald-400 bg-emerald-50':'border-gray-200'}">
              <input type="radio" name="setup-category" value="${cat}" ${teacher?.category===cat?'checked':''}
                class="text-emerald-600" />
              <span class="text-sm font-medium text-gray-700">${cat}</span>
            </label>`).join('')}
          </div>
        </div>
        <!-- ห้องที่ปรึกษาสามัญ -->
        <div id="setup-room-samai-wrap">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            ห้องที่ปรึกษา <span class="font-normal text-gray-400">(สามัญ)</span>
            <span class="text-xs text-gray-400 ml-1">— เลือกถ้าเป็นครูที่ปรึกษา</span>
          </label>
          <select id="setup-room-samai" class="${SELECT_CLS}">
            <option value="">— ไม่ได้เป็นครูที่ปรึกษาสามัญ —</option>
            ${samaiRooms.map(r=>`<option value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='สามัญ')?'selected':''}>${r}</option>`).join('')}
          </select>
        </div>
        <!-- ห้องที่ปรึกษาศาสนา -->
        <div id="setup-room-sadsana-wrap">
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            ห้องที่ปรึกษา <span class="font-normal text-gray-400">(ศาสนา)</span>
            <span class="text-xs text-gray-400 ml-1">— เลือกถ้าเป็นครูที่ปรึกษา</span>
          </label>
          <select id="setup-room-sadsana" class="${SELECT_CLS}">
            <option value="">— ไม่ได้เป็นครูที่ปรึกษาศาสนา —</option>
            ${sadsanaRooms.map(r=>`<option value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='ศาสนา')?'selected':''}>${r}</option>`).join('')}
          </select>
        </div>
        <button id="setup-save" type="submit"
          class="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold">
          บันทึกและเริ่มใช้งาน →
        </button>
      </form>
    </div>
  </div>`)
  if (!teacher) return

  // ─── Toggle ห้องที่ปรึกษาตามประเภทครู ───────────────────────────────────
  const _updateRoomVisibility = () => {
    const cat      = document.querySelector('input[name="setup-category"]:checked')?.value
    const wrapSamai   = document.getElementById('setup-room-samai-wrap')
    const wrapSadsana = document.getElementById('setup-room-sadsana-wrap')
    const selSamai    = document.getElementById('setup-room-samai')
    const selSadsana  = document.getElementById('setup-room-sadsana')
    if (cat === 'สามัญ') {
      wrapSamai?.classList.remove('hidden')
      wrapSadsana?.classList.add('hidden')
      if (selSadsana) selSadsana.value = ''
    } else if (cat === 'ศาสนา') {
      wrapSadsana?.classList.remove('hidden')
      wrapSamai?.classList.add('hidden')
      if (selSamai) selSamai.value = ''
    } else {
      wrapSamai?.classList.remove('hidden')
      wrapSadsana?.classList.remove('hidden')
    }
  }
  _updateRoomVisibility()  // set initial state
  document.querySelectorAll('input[name="setup-category"]').forEach(r =>
    r.addEventListener('change', () => {
      _updateRoomVisibility()
      // อัปเดต กลุ่มสาระ dropdown ตามประเภทครูที่เลือก
      const cat = document.querySelector('input[name="setup-category"]:checked')?.value
      const deptSel = document.getElementById('setup-dept')
      const curVal  = deptSel?.value
      if (deptSel) deptSel.innerHTML = _deptOptsForCat(cat, curVal)
    })
  )

  // phone format
  document.getElementById('setup-phone').addEventListener('input', e => {
    const d = e.target.value.replace(/\D/g,'').slice(0,10)
    e.target.value = d.length<=3?d:d.length<=6?`${d.slice(0,3)} ${d.slice(3)}`:`${d.slice(0,3)} ${d.slice(3,6)} ${d.slice(6)}`
  })
  document.getElementById('setup-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('setup-save')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const dept    = document.getElementById('setup-dept').value || null
      const subg    = document.getElementById('setup-subg').value || null
      const cat     = document.querySelector('input[name="setup-category"]:checked')?.value || null
      const phone   = document.getElementById('setup-phone').value.trim() || null
      const roomSamai   = document.getElementById('setup-room-samai').value || null
      const roomSadsana = document.getElementById('setup-room-sadsana').value || null

      // อัปเดต teachers
      await updateMyProfile(teacher.id, { dept, subject_group: subg, category: cat, phone })

      // บันทึกห้องที่ปรึกษา
      const { upsertHomeroomTeacher } = await import('./api.js')
      if (roomSamai) {
        await upsertHomeroomTeacher({
          teacher_id: teacher.id, main_room: roomSamai,
          category: 'สามัญ', academic_year: curYear, semester: curSem
        })
      }
      if (roomSadsana) {
        await upsertHomeroomTeacher({
          teacher_id: teacher.id, main_room: roomSadsana,
          category: 'ศาสนา', academic_year: curYear, semester: curSem
        })
      }
      showToast('บันทึกโปรไฟล์สำเร็จ ✅', 'success')
      if (onComplete) await onComplete(teacher.profile_id)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึกและเริ่มใช้งาน →'
    }
  })

}

// ─── View: Profile Edit ───────────────────────────────────────────────────────

export async function renderProfile(teacher, onRefresh) {
  setActiveNav('profile')
  setTitle('โปรไฟล์ของฉัน')

  // โหลด departments สำหรับ dropdown กลุ่มสาระ
  const depts = await getDepartments().catch(()=>[])
  const uniqueDepts = [...new Map(depts.map(d=>[d.dept_code,d])).values()]

  // กรองกลุ่มสาระตามประเภทครู
  const teacherCat = teacher?.category
  const filteredDepts = teacherCat
    ? uniqueDepts.filter(d => !d.category || d.category === teacherCat)
    : uniqueDepts

  const phoneDisplay = formatPhone(teacher?.phone ?? '')

  setContent(`<div class="max-w-lg mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">แก้ไขโปรไฟล์</h2>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
      <!-- รูปโปรไฟล์ -->
      <div class="flex flex-col items-center mb-6">
        <div id="prof-avatar"
          class="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400
                 text-white text-3xl font-bold flex items-center justify-center
                 overflow-hidden border-4 border-white shadow-md">
          ${teacher?.image_url
            ? `<img src="${teacher.image_url}" class="w-full h-full object-cover" />`
            : (teacher?.full_name ?? 'ค').charAt(0).toUpperCase()}
        </div>
        <label class="mt-3 cursor-pointer">
          <span class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">📷 เปลี่ยนรูปโปรไฟล์</span>
          <input id="prof-photo-file" type="file" accept="image/*" class="hidden" />
        </label>
      </div>
      ${!teacher ? `
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-700">
        ⚠️ บัญชีนี้ยังไม่ได้เชื่อมกับข้อมูลครู กรุณาติดต่อผู้ดูแลระบบ
      </div>` : ''}
      <form id="prof-form" class="space-y-4" ${!teacher ? 'style="opacity:0.5;pointer-events:none"' : ''}>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">รหัสครู</label>
            <input type="text" value="${teacher?.teacher_code??''}"
              class="${INPUT_CLS} bg-gray-50" readonly />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <input type="text" value="${teacher?.category??'—'}"
              class="${INPUT_CLS} bg-gray-50" readonly />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล <span class="text-red-400">*</span></label>
          <input id="prof-name" type="text" value="${teacher?.full_name??''}" class="${INPUT_CLS}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
          <input id="prof-phone" type="tel" inputmode="numeric" value="${phoneDisplay}"
            placeholder="0XX XXX XXXX" maxlength="12" class="${INPUT_CLS}" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มสาระการเรียนรู้ (dept)</label>
          ${filteredDepts.length > 0
            ? `<select id="prof-dept" class="${SELECT_CLS} mb-1">
                <option value="">— เลือกจากรายการ —</option>
                ${filteredDepts.map(d=>`<option value="${d.dept_code}" ${d.dept_code===teacher?.dept?'selected':''}>${d.dept_name} (${d.dept_code})</option>`).join('')}
               </select>`
            : `<input type="hidden" id="prof-dept" value="" />`}
          <input type="text" id="prof-dept-txt" value="${teacher?.dept??''}"
            placeholder="หรือพิมพ์รหัสตรง เช่น THAI, MATH, SCI"
            class="${INPUT_CLS} font-mono uppercase" />
          <p class="text-[11px] text-gray-400 mt-1">ปุ่มบันทึกคะแนนอ่านฯ จะโชว์เมื่อรหัส = <b>THAI</b></p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">กลุ่มวิชา (subject_group)</label>
          <select id="prof-subg" class="${SELECT_CLS}">
            <option value="">— เลือกกลุ่มวิชา —</option>
            <option value="ACDM"    ${teacher?.subject_group==='ACDM'   ?'selected':''}>สามัญมัธยม (ACDM)</option>
            <option value="AGM"     ${teacher?.subject_group==='AGM'    ?'selected':''}>ศาสนามัธยม (AGM)</option>
            <option value="ACDMVOC" ${teacher?.subject_group==='ACDMVOC'?'selected':''}>สามัญปวช (ACDMVOC)</option>
            <option value="AGMVOC"  ${teacher?.subject_group==='AGMVOC' ?'selected':''}>ศาสนาปวช (AGMVOC)</option>
          </select>
        </div>
        <div class="flex gap-3 pt-2">
          <button type="button" onclick="window._navTo('overview')"
            class="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
            ยกเลิก
          </button>
          <button id="prof-save" type="submit"
            class="btn-primary flex-1 py-3 rounded-xl text-white text-sm font-semibold">
            บันทึก
          </button>
        </div>
      </form>
    </div>
  </div>`)
  if (!teacher) return

  // phone format
  document.getElementById('prof-phone').addEventListener('input', e => {
    e.target.value = formatPhone(e.target.value)
  })

  // photo preview
  document.getElementById('prof-photo-file').addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return
    document.getElementById('prof-avatar').innerHTML =
      `<img src="${URL.createObjectURL(f)}" class="w-full h-full object-cover" />`
  })

  // save
  document.getElementById('prof-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('prof-save')
    const name = document.getElementById('prof-name').value.trim()
    if (!name) { showToast('กรุณากรอกชื่อ-นามสกุล','warning'); return }
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      const deptSel = document.getElementById('prof-dept')
      const deptTxt = document.getElementById('prof-dept-txt')
      const subgEl  = document.getElementById('prof-subg')
      // text input override select (ถ้ากรอกตรงให้ใช้ก่อน)
      const deptVal = (deptTxt?.value.trim().toUpperCase() || deptSel?.value || '').trim() || null
      const payload = {
        full_name:     name,
        phone:         document.getElementById('prof-phone').value.trim() || null,
        dept:          deptVal,
        subject_group: subgEl?.value || null,
      }
      const photoFile = document.getElementById('prof-photo-file').files?.[0]
      if (photoFile) payload.image_url = await uploadTeacherPhoto(teacher.id, photoFile)
      await updateMyProfile(teacher.id, payload)
      showToast('บันทึกโปรไฟล์สำเร็จ','success')
      if (onRefresh) await onRefresh(teacher.profile_id)
      // re-render ด้วย teacher ใหม่ที่โหลดมาจาก onRefresh
      // (จะถูก call จาก teacher.js ซึ่งอัปเดต _teacher แล้ว navigate('profile') ใหม่)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึก'
    }
  })

}

// ─── View: Class Registration Form (2.2) ──────────────────────────────────────

const SKILL_GROUPS = {
  ACDM:    ['วิชาการ','ภาษา','ชีวิต'],   // สามัญมัธยม — ต้องเลือก
  AGM:     ['ศาสนามัธยม'],               // ศาสนามัธยม — fixed
  ACDMVOC: ['วิชาการ','ภาษา','สามัญปวช'], // สามัญปวช — ต้องเลือก
  AGMVOC:  ['ศาสนาปวช'],                 // ศาสนาปวช — fixed
}

export async function renderClassForm(teacher, course) {
  setActiveNav('my-courses')
  setTitle('ลงทะเบียนรายวิชา')
  const depts    = await getDepartments().catch(()=>[])
  const termCfg  = await getSystemConfig().catch(()=>({}))
  const termStart = termCfg.term_start_date ?? new Date().toISOString().slice(0,10)
  const skillOpts = SKILL_GROUPS[course.subject_group] ?? []
  const autoSkill = skillOpts.length === 1

  // Dept head from departments
  const deptRec = depts.find(d => d.dept_code === course.dept)
  const gradePrefix = course.grade_level
  const isReligionGrade = /^(PR|อก|อป)/i.test(gradePrefix ?? '')
  const rooms = gradePrefix
    ? (isReligionGrade
        ? await getReligionRoomsByGrade(gradePrefix).catch(()=>[])
        : await getRoomsByGrade(gradePrefix).catch(()=>[]))
    : []
  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-6">
      <button onclick="window._goBack()" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <h2 class="text-lg font-bold text-gray-800">ลงทะเบียนรายวิชา</h2>
    </div>
    <!-- คอร์สที่เลือก -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 flex items-center gap-4">
      <div class="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">📖</div>
      <div>
        <p class="font-semibold text-emerald-900">${course.subject_name}</p>
        <p class="text-xs text-emerald-600 font-mono">${course.subject_code??'—'} · ${course.credit??'—'} หน่วยกิต · ${course.grade_level??'—'}</p>
      </div>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
      <form id="class-form" novalidate class="space-y-5">
        <!-- Google Sheet ID -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            Google Sheet ID <span class="text-red-400">*</span>
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
                 ${skillOpts.map(s=>`<option value="${s}">${s}</option>`).join('')}
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
          <label class="block text-sm font-semibold text-gray-700 mb-1">หัวหน้าห้อง</label>
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
  document.getElementById('btn-auto-dates')?.addEventListener('click', async () => {
    const btn   = document.getElementById('btn-auto-dates')
    const infoEl = document.getElementById('auto-dates-info')
    btn.textContent = '⏳ กำลังดึงตาราง...'; btn.disabled = true
    try {
      const curYear = parseInt(termCfg.academicYear ?? 2568)
      const curSem  = parseInt(termCfg.semester ?? 1)
      const sched   = teacher ? await getMySchedule(teacher.id, curYear, curSem).catch(()=>[]) : []

      if (!sched.length) {
        infoEl.textContent = '⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง'
        infoEl.classList.remove('hidden'); return
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
        const dates   = _calcSixPeriodDates(entries, termStart)
        dates.forEach((d, i) => {
          const el = document.getElementById(`cls-day${i+1}`)
          if (el) el.value = d.toISOString().slice(0,10)
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

      // enroll all students in the room
      if (_students.length && created?.id) {
        await enrollStudents(created.id, _students.map(s => s.id))
      }
      showToast(`เปิดรายวิชา ${room} สำเร็จ! นักเรียน ${_students.length} คน`,'success')
      window._goBack()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึกและเปิดรายวิชา'
    }
  })

}

// ─── Placeholder views ────────────────────────────────────────────────────────

const _htmlEsc = value => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const _sheetUrl = sheetId => `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/edit`

export async function renderMyClasses(teacher) {
  setActiveNav('my-classes')
  setTitle('ห้องเรียนของฉัน')
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)
  try {
    const classes = await getMyClasses(teacher?.id ?? null)
    window._classCache = Object.fromEntries(classes.map(c => [c.id, c]))
    setContent(`<div class="max-w-5xl mx-auto animate-fade">
      <div class="flex items-center justify-between mb-5">
        <div>
          <h2 class="text-lg font-bold text-gray-800">ห้องเรียนของฉัน</h2>
          <p class="text-xs text-gray-400 mt-0.5">รายวิชาที่เปิดสอนในภาคเรียนนี้</p>
        </div>
      </div>
      ${!classes.length ? `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">🏫</p>
        <p class="font-medium">ยังไม่มีห้องเรียน</p>
        <p class="text-xs mt-1">ไปที่ "คอร์สวิชาของฉัน" แล้วกด "＋ห้อง"</p>
      </div>` : `
      <div class="grid gap-4">
        ${classes.map(c => {
          const ms = c.master_subjects
          const isReligionGroup = ['AGM', 'AGMVOC'].includes(ms?.subject_group)
          const groupBadge = isReligionGroup
            ? { text: 'กลุ่มวิชาศาสนา', cls: 'bg-amber-50 text-amber-700' }
            : c.skill_group
              ? { text: `กลุ่มทักษะ: ${c.skill_group}`, cls: 'bg-blue-50 text-blue-700' }
              : null
          return `
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full">${ms?.subject_code??'—'}</span>
                  ${groupBadge ? `<span class="px-2 py-0.5 ${groupBadge.cls} text-xs rounded-full">${groupBadge.text}</span>` : ''}
                  ${c.google_sheet_id

                    ? `<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">✓ Sheet</span>`
                    : `<span class="px-2 py-0.5 bg-gray-50 text-gray-400 text-xs rounded-full">ไม่มี Sheet</span>`}
                </div>
                <h3 class="font-bold text-gray-800 text-base">${ms?.subject_name??'—'}</h3>
                <p class="text-sm text-gray-500 mt-0.5">ห้อง: <span class="font-semibold text-emerald-700">${c.class_name}</span></p>
              </div>
              <!-- Actions -->
              <div class="flex flex-col gap-1.5 flex-shrink-0">
                <button onclick="window._openAttendance(${c.id})"
                  class="px-3 py-1.5 bg-emerald-600 text-white text-xs font-medium rounded-lg hover:bg-emerald-700 transition text-center">
                  ✅ เช็คชื่อ
                </button>
                <button onclick="window._openGrades(${c.id})"
                  class="px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 transition text-center">
                  📝 คะแนน
                </button>
                ${c.google_sheet_id ? `
                <button onclick="window._openSheetToolsModal(${c.id})"
                  class="px-3 py-1.5 bg-teal-600 text-white text-xs font-medium rounded-lg hover:bg-teal-700 transition text-center">
                  📄 จัดการชีท
                </button>` : ''}
                <div class="flex gap-1">
                  <button onclick="window._editClass(${c.id})"
                    class="flex-1 py-1.5 border border-gray-200 text-gray-600 text-xs font-medium rounded-lg hover:bg-gray-50 transition text-center">
                    แก้ไข
                  </button>
                  <button onclick="window._deleteClass(${c.id},'${c.class_name}')"
                    class="flex-1 py-1.5 border border-red-100 text-red-400 text-xs font-medium rounded-lg hover:bg-red-50 transition text-center">
                    ลบ
                  </button>
                </div>
              </div>
            </div>
            <!-- วันสอน -->
            ${[c.day1_date,c.day2_date,c.day3_date,c.day4_date,c.day5_date,c.day6_date].some(Boolean) ? `
            <div class="mt-3 pt-3 border-t border-gray-50 flex flex-wrap gap-2">
              ${[c.day1_date,c.day2_date,c.day3_date,c.day4_date,c.day5_date,c.day6_date]
                .filter(Boolean)
                .map((d,i)=>`<span class="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-lg">
                  คาบ${i+1}: ${new Date(d).toLocaleDateString('th-TH',{day:'numeric',month:'short'})}
                </span>`).join('')}
            </div>` : ''}
          </div>`
        }).join('')}
      </div>`}
    </div>`)
    window._openAttendance = (classId) => {
      const cls = window._classCache?.[classId]
      if (cls) renderAttendanceGrid(teacher, cls)
    }
    window._openGrades = (classId) => {
      const cls = window._classCache?.[classId]
      if (cls) renderGradesGrid(teacher, cls)
    }
    window._openScoreCols  = (classId, className) => {
      const cls = window._classCache?.[classId]
      renderScoreColumns(teacher, classId, className, cls)
    }
    window._editClass = (classId) => {
      const c = window._classCache?.[classId]
      if (c) renderClassEditForm(teacher, c)
    }
    window._deleteClass = async (classId, name) => {
      if (!confirm(`ยืนยันลบห้องเรียน "${name}"?\nข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`)) return
      try {
        await deleteClass(classId)
        showToast(`ลบ "${name}" แล้ว`, 'success')
        renderMyClasses(teacher)
      } catch (err) { showToast('ลบไม่สำเร็จ: '+(err.message??''), 'error') }
    }

    const _openPrintableRoster = async (cls, type) => {
      const win = window.open('', '_blank')
      if (!win) {
        showToast('เบราว์เซอร์บล็อก popup กรุณาอนุญาต popup ก่อน', 'warning')
        return
      }
      win.document.write('<p style="font-family:sans-serif;padding:24px">กำลังสร้างเอกสาร...</p>')
      try {
        const [cfg, students, scoreColumns] = await Promise.all([
          getSystemConfig().catch(() => ({})),
          getClassStudents(cls.id),
          type === 'score' ? getScoreColumns(cls.id) : Promise.resolve([]),
        ])
        const ms = cls.master_subjects ?? {}
        const isVoc = ['ACDMVOC', 'AGMVOC'].includes(ms.subject_group)
        const schoolName = isVoc
          ? (cfg.porworCollegeName || cfg.samaiSchoolName || 'โรงเรียน')
          : (cfg.samaiSchoolName || cfg.porworCollegeName || 'โรงเรียน')
        const logoUrl = isVoc
          ? (cfg.porworLogoBwUrl || cfg.porworLogoUrl || cfg.samaiLogoBwUrl || cfg.samaiLogoUrl || '')
          : (cfg.samaiLogoBwUrl || cfg.samaiLogoUrl || cfg.porworLogoBwUrl || cfg.porworLogoUrl || '')
        const title = type === 'score' ? 'ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน' : 'ใบรายชื่อนักเรียนสำหรับเช็คชื่อ'
        const scoreHeaders = scoreColumns.map(c => `
          <th class="score-col">
            <div>${_htmlEsc(c.assignment_name || '-')}</div>
            <small>/${_htmlEsc(c.max_score ?? '')}</small>
          </th>`).join('')
        const scoreCells = scoreColumns.map(() => '<td class="score-cell"></td>').join('')
        const attendanceHeaders = Array.from({ length: 12 }, (_, i) => `<th class="check-col">${i + 1}</th>`).join('')
        const attendanceCells = Array.from({ length: 12 }, () => '<td class="check-cell"></td>').join('')
        const rows = students.map((s, i) => `
          <tr>
            <td class="no">${i + 1}</td>
            <td class="code">${_htmlEsc(s.student_code)}</td>
            <td class="name">${_htmlEsc(s.full_name)}</td>
            ${type === 'score' ? scoreCells : attendanceCells}
            <td class="note"></td>
          </tr>`).join('')
        const doc = `<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <title>${_htmlEsc(title)} - ${_htmlEsc(ms.subject_name || '')}</title>
  <style>
    @page { size: A4 landscape; margin: 10mm; }
    * { box-sizing: border-box; }
    body { font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; color: #111827; margin: 0; background: #f3f4f6; }
    .toolbar { position: sticky; top: 0; display: flex; gap: 8px; justify-content: flex-end; padding: 10px; background: white; border-bottom: 1px solid #e5e7eb; }
    .toolbar button { border: 1px solid #d1d5db; background: white; border-radius: 8px; padding: 8px 14px; font-weight: 700; cursor: pointer; }
    .toolbar .primary { background: #4f46e5; color: white; border-color: #4f46e5; }
    .page { width: 297mm; min-height: 210mm; margin: 12px auto; padding: 10mm; background: white; }
    .header { display: grid; grid-template-columns: 70px 1fr 150px; align-items: center; gap: 12px; margin-bottom: 10px; }
    .logo { width: 58px; height: 58px; object-fit: contain; }
    .school { text-align: center; line-height: 1.3; }
    .school h1 { margin: 0; font-size: 20px; }
    .school h2 { margin: 3px 0 0; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; line-height: 1.7; }
    .meta strong { display: inline-block; min-width: 66px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 11px; }
    th, td { border: 1px solid #111827; padding: 3px 4px; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; text-align: center; }
    .no { width: 28px; text-align: center; }
    .code { width: 62px; text-align: center; font-family: monospace; }
    .name { width: 150px; }
    .check-col, .check-cell { width: 34px; height: 22px; text-align: center; }
    .score-col, .score-cell { width: 58px; text-align: center; }
    .score-col div { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .score-col small { display: block; color: #6b7280; font-weight: 400; }
    .note { width: 70px; }
    .signature { display: flex; justify-content: flex-end; margin-top: 18px; font-size: 12px; }
    .signature div { width: 220px; text-align: center; line-height: 2; }
    @media print {
      body { background: white; }
      .toolbar { display: none; }
      .page { margin: 0; box-shadow: none; width: auto; min-height: auto; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <button onclick="window.close()">ปิด</button>
    <button class="primary" onclick="window.print()">พิมพ์</button>
  </div>
  <main class="page">
    <section class="header">
      <div>${logoUrl ? `<img class="logo" src="${_htmlEsc(logoUrl)}" />` : ''}</div>
      <div class="school">
        <h1>${_htmlEsc(schoolName)}</h1>
        <h2>${_htmlEsc(title)}</h2>
      </div>
      <div class="meta">
        <div><strong>ภาคเรียน</strong> ${_htmlEsc(cfg.semester || '')}/${_htmlEsc(cfg.academicYear || '')}</div>
        <div><strong>ห้อง</strong> ${_htmlEsc(cls.class_name || '')}</div>
        <div><strong>จำนวน</strong> ${students.length} คน</div>
      </div>
    </section>
    <section class="meta" style="margin-bottom:8px">
      <div><strong>รายวิชา</strong> ${_htmlEsc(ms.subject_name || '')}</div>
      <div><strong>รหัสวิชา</strong> ${_htmlEsc(ms.subject_code || '')}</div>
      <div><strong>ครูผู้สอน</strong> ${_htmlEsc(teacher?.full_name || '')}</div>
    </section>
    <table>
      <thead>
        <tr>
          <th class="no">#</th>
          <th class="code">รหัส</th>
          <th class="name">ชื่อ-นามสกุล</th>
          ${type === 'score' ? scoreHeaders : attendanceHeaders}
          <th class="note">หมายเหตุ</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <section class="signature">
      <div>
        ลงชื่อ ........................................ ครูผู้สอน<br />
        (${_htmlEsc(teacher?.full_name || '')})
      </div>
    </section>
  </main>
</body>
</html>`
        win.document.open()
        win.document.write(doc)
        win.document.close()
      } catch (err) {
        win.close()
        showToast('สร้างใบรายชื่อไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      }
    }

    window._openRosterPicker = (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls) return
      document.getElementById('roster-picker-modal')?.remove()
      const m = document.createElement('div')
      m.id = 'roster-picker-modal'
      m.className = 'fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40'
      m.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">สร้างใบรายชื่อ</h3>
        <p class="text-xs text-gray-400 mb-4">${_htmlEsc(cls.master_subjects?.subject_name || '')} · ${_htmlEsc(cls.class_name || '')}</p>
        <div class="grid gap-3">
          <button id="btn-roster-att" class="py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">✅ สร้างใบเช็คชื่อ</button>
          <button id="btn-roster-score" class="py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">📝 สร้างใบบันทึกคะแนน</button>
          <button id="btn-roster-close" class="py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`
      document.body.appendChild(m)
      m.querySelector('#btn-roster-close').addEventListener('click', () => m.remove())
      m.addEventListener('click', e => { if (e.target === m) m.remove() })
      m.querySelector('#btn-roster-att').addEventListener('click', () => { m.remove(); _openPrintableRoster(cls, 'attendance') })
      m.querySelector('#btn-roster-score').addEventListener('click', () => { m.remove(); _openPrintableRoster(cls, 'score') })
    }

    window._openSheetToolsModal = (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls?.google_sheet_id) return
      document.getElementById('sheet-tools-modal')?.remove()
      const sheetUrl = _sheetUrl(cls.google_sheet_id)
      const m = document.createElement('div')
      m.id = 'sheet-tools-modal'
      m.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40'
      m.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${_htmlEsc(cls.master_subjects?.subject_name || '')} · ${_htmlEsc(cls.class_name || '')}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <div class="pt-3 mt-3 border-t border-gray-100">
            <p class="text-xs font-semibold text-gray-500 mb-2">ใบรายชื่อนักเรียน</p>
            <button id="btn-roster-menu" class="w-full text-left px-4 py-3 rounded-xl border border-violet-100 bg-violet-50 text-violet-800 hover:bg-violet-100 text-sm font-semibold">🖨️ สร้างใบรายชื่อ</button>
          </div>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">↑ Sync ข้อมูลไปชีท</button>
        </div>
        <button id="btn-sheet-tools-close" class="mt-4 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>`
      document.body.appendChild(m)
      m.querySelector('#btn-sheet-tools-close').addEventListener('click', () => m.remove())
      m.addEventListener('click', e => { if (e.target === m) m.remove() })
      m.querySelector('#btn-open-sheet').addEventListener('click', () => window.open(sheetUrl, '_blank'))
      m.querySelector('#btn-copy-sheet').addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(sheetUrl)
          showToast('คัดลอกลิงก์ชีทแล้ว', 'success')
        } catch {
          showToast('คัดลอกไม่สำเร็จ', 'error')
        }
      })
      m.querySelector('#btn-share-sheet').addEventListener('click', async () => {
        const btn = m.querySelector('#btn-share-sheet')
        btn.disabled = true
        btn.textContent = '⏳ กำลังเปิดสิทธิ์...'
        try {
          const { shareSheetForView } = await import('./sync.js')
          await shareSheetForView(cls.google_sheet_id)
          showToast('ส่งคำสั่งเปิดสิทธิ์แล้ว กรุณารอสักครู่แล้วลองเปิดลิงก์', 'success')
          btn.textContent = '✅ ส่งคำสั่งเปิดสิทธิ์แล้ว'
        } catch (err) {
          btn.disabled = false
          btn.textContent = '🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้'
          showToast('เปิดสิทธิ์ไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        }
      })
      m.querySelector('#btn-roster-menu').addEventListener('click', () => {
        m.remove()
        window._openRosterPicker(classId)
      })
      m.querySelector('#btn-open-sync').addEventListener('click', () => {
        m.remove()
        window._openSyncModal(classId)
      })
    }

    window._openSyncModal = (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls) return
      document.getElementById('sync-modal')?.remove()
      const m = document.createElement('div')
      m.id = 'sync-modal'
      m.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40'
      m.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 text-base mb-1">📤 Sync ไปยัง Google Sheet</h3>
          <p class="text-xs text-gray-400 mb-4">ห้อง: ${cls.class_name} · Sheet: ✓</p>
          <div class="space-y-3 mb-5">
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" id="sync-opt-info" checked
                class="mt-0.5 w-4 h-4 rounded accent-violet-600" />
              <div>
                <p class="text-sm font-medium text-gray-700">ข้อมูลรายวิชา</p>
                <p class="text-xs text-gray-400">ชื่อวิชา รหัส หน่วยกิต ครู วันสอน หัวหน้าห้อง</p>
              </div>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" id="sync-opt-att" checked
                class="mt-0.5 w-4 h-4 rounded accent-teal-600" />
              <div>
                <p class="text-sm font-medium text-gray-700">เช็คชื่อ</p>
                <p class="text-xs text-gray-400">ม / ข / ส / ก / ป — คอลัมน์ N เป็นต้นไป</p>
              </div>
            </label>
            <label class="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" id="sync-opt-score" checked
                class="mt-0.5 w-4 h-4 rounded accent-indigo-600" />
              <div>
                <p class="text-sm font-medium text-gray-700">คะแนน</p>
                <p class="text-xs text-gray-400">คะแนนย่อยตามคอลัมน์ที่ตั้งค่าไว้</p>
              </div>
            </label>
          </div>
          <div id="sync-progress" class="hidden mb-3 text-xs text-teal-600 font-medium"></div>
          <div class="flex gap-3">
            <button id="btn-sync-cancel"
              class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50">
              ยกเลิก
            </button>
            <button id="btn-sync-go"
              class="flex-1 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition">
              Sync ที่เลือก
            </button>
          </div>
        </div>`
      document.body.appendChild(m)
      m.querySelector('#btn-sync-cancel').addEventListener('click', () => m.remove())
      m.addEventListener('click', e => { if (e.target === m) m.remove() })

      m.querySelector('#btn-sync-go').addEventListener('click', async () => {
        const doInfo  = m.querySelector('#sync-opt-info').checked
        const doAtt   = m.querySelector('#sync-opt-att').checked
        const doScore = m.querySelector('#sync-opt-score').checked
        if (!doInfo && !doAtt && !doScore) { showToast('เลือกอย่างน้อย 1 รายการ', 'warning'); return }

        const btn  = m.querySelector('#btn-sync-go')
        const prog = m.querySelector('#sync-progress')
        btn.disabled = true; btn.textContent = '⏳ กำลัง Sync...'
        prog.classList.remove('hidden')

        const { syncClassInfo, syncAttendance, syncScores } = await import('./sync.js')
        const { getDepartments, getTeachers, getScoreColumns, getStudentScores, getTeacherById } = await import('./api.js')
        const errors = []

        try {
          if (doInfo) {
            prog.textContent = '📋 Sync ข้อมูลรายวิชา...'
            // ดึงข้อมูลครูจาก teacher_id ใน master_subjects (ถูกต้องกว่าใช้ session)
            const [depts, allTeachers, courseTeacher] = await Promise.all([
              getDepartments().catch(() => []),
              getTeachers().catch(() => []),
              cls.master_subjects?.teacher_id
                ? getTeacherById(cls.master_subjects.teacher_id).catch(() => null)
                : Promise.resolve(null),
            ])
            const syncTeacher = courseTeacher ?? teacher  // fallback ไปใช้ session
            const dept = depts.find(d => d.dept_name === cls.master_subjects?.dept)
            // head_name = ชื่อที่บันทึกตอนตั้งค่ากลุ่มสาระ, fallback → หาจาก teacher_code
            const deptHeadTeacher = dept?.teacher_code
              ? allTeachers.find(t => t.teacher_code === dept.teacher_code)
              : null
            const headDeptName = dept?.head_name || deptHeadTeacher?.full_name || ''
            await syncClassInfo(
              cls.google_sheet_id, cls,
              { full_name: syncTeacher?.full_name ?? '', phone: syncTeacher?.phone ?? '' },
              {
                headStudentName: cls.students?.full_name ?? '',
                deptName:        cls.master_subjects?.dept ?? '',
                headDeptName,
              }
            )
          }
        } catch (err) { errors.push('รายวิชา: ' + (err.message ?? '')) }

        try {
          if (doAtt) {
            prog.textContent = '✅ Sync เช็คชื่อ...'
            const credit   = cls.master_subjects?.credit ?? 1
            const sessions = _generateSessions(cls, credit)
            const [students, attRows] = await Promise.all([
              getClassStudents(classId),
              getClassAttendanceAll(classId),
            ])
            const attMap = {}
            for (const r of attRows) {
              if (!attMap[r.student_id]) attMap[r.student_id] = {}
              attMap[r.student_id][r.session_number] = r.status
            }
            await syncAttendance(cls.google_sheet_id, sessions, attMap, students)
          }
        } catch (err) { errors.push('เช็คชื่อ: ' + (err.message ?? '')) }

        try {
          if (doScore) {
            prog.textContent = '📝 Sync คะแนน...'
            const [scoreColumns, scores, students] = await Promise.all([
              getScoreColumns(classId),
              getStudentScores(classId),
              getClassStudents(classId),
            ])
            if (scoreColumns.length) {
              await syncScores(cls.google_sheet_id, scoreColumns, scores, students)
            }
          }
        } catch (err) { errors.push('คะแนน: ' + (err.message ?? '')) }

        m.remove()
        if (errors.length) {
          showToast('Sync บางส่วนไม่สำเร็จ:\n' + errors.join('\n'), 'error')
        } else {
          showToast(`Sync สำเร็จ — ${cls.class_name}`, 'success')
        }
      })
    }
  } catch { showToast('โหลดข้อมูลห้องเรียนไม่สำเร็จ', 'error') }

}

// ─── Score Column Management ──────────────────────────────────────────────────

const SCORE_TYPES = ['ระหว่างเรียน','กลางภาค','ปลายภาค','คะแนนพิเศษ']

const TYPE_COLOR  = {
  'ระหว่างเรียน': 'bg-blue-50 text-blue-700',
  'กลางภาค':      'bg-amber-50 text-amber-700',
  'ปลายภาค':      'bg-red-50 text-red-700',
  'คะแนนพิเศษ':   'bg-purple-50 text-purple-700',
}

const RELIGION_LOCKED_SCORE_COLUMNS = ['คะแนนมาเรียน', 'คะแนนละหมาด']

export async function renderScoreColumns(teacher, classId, className, classData = null) {
  setActiveNav('my-classes')
  setTitle(`คอลัมน์คะแนน — ${className}`)
  const isLifeSkill = (classData?.skill_group ?? classData?.master_subjects?.skill_group ?? '') === 'ชีวิต'
  const isReligion = ['AGM', 'AGMVOC'].includes(classData?.master_subjects?.subject_group)
  let lockedScoreColumnIds = new Set()
  const _reload = async () => {
    const cols = await getScoreColumns(classId)
    const cfg = await getSystemConfig().catch(()=>({}))
    const year = parseInt(cfg.academicYear ?? 2568)
    const sem = parseInt(cfg.semester ?? 1)
    const lockedNames = isLifeSkill
      ? (await getLifeSkillColumns(year, sem, 'สามัญ').catch(()=>[])).slice(0, 3).map(c => c.name)
      : isReligion ? RELIGION_LOCKED_SCORE_COLUMNS : []
    lockedScoreColumnIds = new Set(cols.filter(c => lockedNames.includes(c.assignment_name)).map(c => c.id))
    window._scoreColCache = Object.fromEntries(cols.map(c => [c.id, c]))
    const grouped = SCORE_TYPES.map(t => ({ type: t, items: cols.filter(c => c.assignment_type === t) }))
    const totalScore = cols.reduce((sum, c) => sum + (Number(c.max_score) || 0), 0)
    document.getElementById('sc-content').innerHTML = `
      <!-- สรุปคะแนนรวม -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4 flex items-center justify-between">
        <div>
          <p class="text-xs text-gray-400">คะแนนรวมทุกหมวด</p>
          <p class="text-2xl font-bold text-indigo-700">${totalScore} คะแนน</p>
        </div>
        <div class="text-xs text-gray-400 text-right">
          <p>${cols.length} คอลัมน์</p>
          <p class="mt-1">กลางภาค: ${cols.filter(c=>c.assignment_type==='กลางภาค').reduce((s,c)=>s+(Number(c.max_score)||0),0)} |
             ปลายภาค: ${cols.filter(c=>c.assignment_type==='ปลายภาค').reduce((s,c)=>s+(Number(c.max_score)||0),0)}</p>
        </div>
      </div>
      <!-- ตารางแยกตามหมวด -->
      ${grouped.map(g => `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
        <div class="flex items-center justify-between px-5 py-3 border-b border-gray-50">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${TYPE_COLOR[g.type]??''}">${g.type}</span>
            <span class="text-xs text-gray-400">รวม ${g.items.reduce((s,c)=>s+(Number(c.max_score)||0),0)} คะแนน</span>
          </div>
          <button onclick="window._addScoreCol('${g.type}')"
            class="text-xs text-indigo-600 hover:text-indigo-800 font-medium">＋ เพิ่ม</button>
        </div>
        ${!g.items.length
          ? `<p class="text-center py-6 text-gray-300 text-sm">ยังไม่มีคอลัมน์ — กด "＋ เพิ่ม"</p>`
          : `<table class="w-full text-sm">
              <thead class="bg-gray-50 text-xs text-gray-400 uppercase">
                <tr>
                  <th class="px-4 py-2 text-left">ชื่อรายการ</th>
                  <th class="px-4 py-2 text-center">คอลัมน์ Sheet</th>
                  <th class="px-4 py-2 text-center">คะแนนเต็ม</th>
                  <th class="px-4 py-2 text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-50">
                ${g.items.map(c => {
                  const locked = lockedScoreColumnIds.has(c.id)
                  return `
                <tr class="${locked ? 'bg-emerald-50/35' : 'hover:bg-gray-50'}">
                  <td class="px-4 py-2.5 font-medium text-gray-800">${c.assignment_name}</td>
                  <td class="px-4 py-2.5 text-center font-mono text-indigo-600 text-xs">${c.sheet_column}</td>
                  <td class="px-4 py-2.5 text-center text-gray-600">${c.max_score??'—'}</td>
                  <td class="px-4 py-2.5 text-right">
                    ${locked
                      ? `<span class="text-xs text-emerald-700 font-medium">ระบบล็อก</span>`
                      : `<button onclick="window._editScoreCol(${c.id})"
                          class="text-xs text-indigo-600 hover:text-indigo-800 font-medium mr-2">แก้ไข</button>
                        <button onclick="window._deleteScoreCol(${c.id})"
                          class="text-xs text-red-400 hover:text-red-600 font-medium">ลบ</button>`}
                  </td>
                </tr>`}).join('')}
              </tbody>
            </table>`}
      </div>`).join('')}
      <!-- Form เพิ่ม/แก้ไข -->
      <div id="sc-form-wrap" class="hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <h4 id="sc-form-title" class="font-semibold text-gray-700 mb-4">เพิ่มคอลัมน์คะแนน</h4>
        <form id="sc-form" class="grid grid-cols-2 gap-3">
          <input type="hidden" id="sc-edit-id" />
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">ชื่อรายการ <span class="text-red-400">*</span></label>
            <input id="sc-name" type="text" placeholder="เช่น คะแนนเก็บ 1"
              class="${INPUT_CLS}" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">หมวด <span class="text-red-400">*</span></label>
            <select id="sc-type" class="${SELECT_CLS}">
              ${SCORE_TYPES.map(t=>`<option value="${t}">${t}</option>`).join('')}
            </select>
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คอลัมน์ใน Sheet <span class="text-red-400">*</span>
              <span class="text-gray-400 font-normal ml-1">(เช่น EK, EX, A)</span>
            </label>
            <input id="sc-col" type="text" placeholder="EK"
              class="${INPUT_CLS} font-mono uppercase" maxlength="4" />
          </div>
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1">คะแนนเต็ม</label>
            <input id="sc-max" type="number" min="1" max="100" placeholder="20"
              class="${INPUT_CLS}" />
          </div>
          <div class="col-span-2 flex gap-3 pt-1">
            <button type="button" onclick="document.getElementById('sc-form-wrap').classList.add('hidden')"
              class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              ยกเลิก
            </button>
            <button id="sc-save" type="submit"
              class="btn-primary flex-1 py-2 rounded-xl text-white text-sm font-semibold">
              บันทึก
            </button>
          </div>
        </form>
      </div>`

    // ─── bind CRUD actions ──────────────────────────────────────────────────
    window._addScoreCol = (type) => {
      document.getElementById('sc-edit-id').value = ''
      document.getElementById('sc-name').value    = ''
      document.getElementById('sc-col').value     = ''
      document.getElementById('sc-max').value     = ''
      document.getElementById('sc-type').value    = type
      document.getElementById('sc-form-title').textContent = `เพิ่มคอลัมน์ — ${type}`
      document.getElementById('sc-form-wrap').classList.remove('hidden')
      document.getElementById('sc-name').focus()
    }
    window._editScoreCol = (id) => {
      const c = window._scoreColCache?.[id]
      if (!c) return
      if (lockedScoreColumnIds.has(id)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้ไขได้', 'warning')
        return
      }
      document.getElementById('sc-edit-id').value = id
      document.getElementById('sc-name').value    = c.assignment_name
      document.getElementById('sc-col').value     = c.sheet_column
      document.getElementById('sc-max').value     = c.max_score ?? ''
      document.getElementById('sc-type').value    = c.assignment_type
      document.getElementById('sc-form-title').textContent = 'แก้ไขคอลัมน์'
      document.getElementById('sc-form-wrap').classList.remove('hidden')
    }
    window._deleteScoreCol = async (id) => {
      if (lockedScoreColumnIds.has(id)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้', 'warning')
        return
      }
      if (!confirm('ยืนยันลบคอลัมน์นี้?')) return
      try {
        await deleteScoreColumn(id)
        showToast('ลบแล้ว', 'success')
        await _reload()
      } catch (err) { showToast('ลบไม่สำเร็จ', 'error') }
    }
    document.getElementById('sc-form')?.addEventListener('submit', async e => {
      e.preventDefault()
      const btn  = document.getElementById('sc-save')
      const id   = document.getElementById('sc-edit-id').value
      const name = document.getElementById('sc-name').value.trim()
      const col  = document.getElementById('sc-col').value.trim().toUpperCase()
      const type = document.getElementById('sc-type').value
      const max  = parseInt(document.getElementById('sc-max').value) || null
      if (!name || !col) { showToast('กรุณากรอกชื่อและคอลัมน์ Sheet', 'warning'); return }
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        const payload = { assignment_name: name, assignment_type: type, sheet_column: col, max_score: max }
        if (id) await updateScoreColumn(Number(id), payload)
        else    await createScoreColumn({ ...payload, class_id: classId })
        showToast('บันทึกสำเร็จ', 'success')
        document.getElementById('sc-form-wrap').classList.add('hidden')
        await _reload()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
      } finally {
        btn.disabled = false; btn.textContent = 'บันทึก'
      }
    })
  }
  setContent(`<div class="max-w-3xl mx-auto animate-fade">
    <div class="flex items-center gap-3 mb-5 flex-wrap">
      <button onclick="window._navTo?.('my-classes') || history.back()"
        class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
      <div class="flex-1 min-w-0">
        <h2 class="text-lg font-bold text-gray-800">คอลัมน์คะแนน</h2>
        <p class="text-xs text-gray-400">${className} — ระบุตำแหน่งคอลัมน์ใน Google Sheet</p>
      </div>
      ${isLifeSkill ? `
      <button id="btn-fill-lifeskill"
        class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition flex-shrink-0">
        🌱 เติมคะแนนทักษะชีวิต
      </button>` : ''}
    </div>
    <div id="sc-content"><div class="flex justify-center py-8 text-gray-400">
      <svg class="animate-spin h-5 w-5 mr-2 text-amber-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลด...
    </div></div>
  </div>`)
  await _reload()

  // ─── Auto-fill คอลัมน์ทักษะชีวิต (เฉพาะห้อง skill_group = 'ชีวิต') ─────────
  document.getElementById('btn-fill-lifeskill')?.addEventListener('click', async () => {
    const btn = document.getElementById('btn-fill-lifeskill')
    btn.disabled = true; btn.textContent = '⏳ กำลังเติม...'
    try {
      const cfg  = await getSystemConfig().catch(()=>({}))
      const year = parseInt(cfg.academicYear ?? 2568)
      const sem  = parseInt(cfg.semester ?? 1)
      const lsCols = await getLifeSkillColumns(year, sem, 'สามัญ').catch(()=>[])
      if (!lsCols.length) { showToast('ยังไม่มีหัวข้อทักษะชีวิต — ให้แอดมินเพิ่มก่อน', 'warning'); return }

      // ตรวจว่ามีคอลัมน์กลางภาคอยู่แล้วไหม (ไม่ duplicate)
      const existing = await getScoreColumns(classId)
      const existingNames = new Set(existing.filter(c => c.assignment_type === 'กลางภาค').map(c => c.assignment_name))

      let added = 0
      for (const col of lsCols) {
        if (existingNames.has(col.name)) continue
        await createScoreColumn({
          class_id:        classId,
          assignment_name: col.name,
          assignment_type: 'กลางภาค',
          sheet_column:    col.sheet_col ?? '',
          max_score:       col.max_score ?? 20,
        })
        added++
      }
      showToast(added > 0 ? `เพิ่ม ${added} คอลัมน์สำเร็จ ✅` : 'มีคอลัมน์ทักษะชีวิตอยู่แล้ว', added > 0 ? 'success' : 'info')
      await _reload()
    } catch (err) {
      showToast('เติมไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      const b = document.getElementById('btn-fill-lifeskill')
      if (b) { b.disabled = false; b.textContent = '🌱 เติมคะแนนทักษะชีวิต' }
    }
  })

}

// ─── Class Edit Form ──────────────────────────────────────────────────────────

export async function renderClassEditForm(teacher, classData) {
  setActiveNav('my-classes')
  setTitle('แก้ไขห้องเรียน')
  const ms       = classData.master_subjects
  const skillOpts = SKILL_GROUPS[ms?.subject_group] ?? []
  const autoSkill = skillOpts.length === 1
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
          <label class="block text-sm font-semibold text-gray-700 mb-2">วันสอน 6 คาบแรก</label>
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
  document.getElementById('cls-edit-form').addEventListener('submit', async e => {
    e.preventDefault()
    const btn = document.getElementById('ce-submit')
    btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
    try {
      await updateClass(classData.id, {
        google_sheet_id: document.getElementById('ce-sheet').value.trim() || null,
        skill_group:     document.getElementById('ce-skill').value || null,
        day1_date: document.getElementById('ce-day1').value || null,
        day2_date: document.getElementById('ce-day2').value || null,
        day3_date: document.getElementById('ce-day3').value || null,
        day4_date: document.getElementById('ce-day4').value || null,
        day5_date: document.getElementById('ce-day5').value || null,
        day6_date: document.getElementById('ce-day6').value || null,
      })
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

// ─── Attendance Grid ──────────────────────────────────────────────────────────

const ATT_STATUS = {
  present: { label: 'ม', color: 'text-emerald-600 font-bold', bg: 'bg-emerald-50' },
  absent:  { label: 'ข', color: 'text-red-600 font-bold',     bg: 'bg-red-50' },
  late:    { label: 'ส', color: 'text-amber-500 font-bold',   bg: 'bg-amber-50' },
  excused: { label: 'ก', color: 'text-blue-500 font-bold',    bg: 'bg-blue-50' },
  sick:    { label: 'ป', color: 'text-orange-500 font-bold',  bg: 'bg-orange-50' },
}

const ATT_CYCLE = [null, 'present', 'absent', 'late', 'excused', 'sick']

function _generateSessions(classData, credit) {
  const perWeek = Math.round((credit ?? 1) * 2)
  const total   = Math.round((credit ?? 1) * 2 * 20)
  const bases   = ['day1_date','day2_date','day3_date','day4_date','day5_date','day6_date']
    .map(k => classData[k]).filter(Boolean).slice(0, perWeek).map(d => new Date(d))
  if (!bases.length) return []
  const sessions = []
  let week = 0
  while (sessions.length < total) {
    for (const base of bases) {
      if (sessions.length >= total) break
      const d = new Date(base)
      d.setDate(d.getDate() + week * 7)
      const ds = d.toISOString().slice(0,10)
      sessions.push({ n: sessions.length + 1, date: d, ds })
    }
    week++
  }
  return sessions

}

function _fmtDate(d) {
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`

}

export async function renderAttendanceGrid(teacher, classData) {
  setActiveNav('attendance')
  setTitle('เช็คชื่อ')
  const ms      = classData.master_subjects
  const credit  = ms?.credit ?? 1
  const sessions = _generateSessions(classData, credit)
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-emerald-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดข้อมูล...
  </div>`)
  try {
    const { getSystemConfig: _cfg } = await import('./api.js')
    const cfg      = await _cfg().catch(() => ({}))
    const curYear  = cfg.academic_year ?? new Date().getFullYear() + 543
    const curSem   = cfg.semester ?? 1
    const [students, attRows, holidays] = await Promise.all([
      getClassStudents(classData.id),
      getClassAttendanceAll(classData.id),
      getSchoolHolidays(curYear, curSem),
    ])
    const holidaySet = new Set(holidays)

    // attendance map: { studentId: { sessionNum: status } }
    const attMap = {}
    for (const r of attRows) {
      if (!attMap[r.student_id]) attMap[r.student_id] = {}
      attMap[r.student_id][r.session_number] = r.status
    }

    // ─── Auto-clear attendance on holiday sessions ─────────────────
    const holAttRows = attRows.filter(r => {
      const sess = sessions.find(s => s.n === r.session_number)
      return sess && holidaySet.has(sess.ds)
    })
    if (holAttRows.length > 0) {
      if (confirm(`พบข้อมูลเช็คชื่อ ${holAttRows.length} รายการในวันหยุด\nต้องการล้างออกให้อัตโนมัติไหม?`)) {
        await Promise.all(holAttRows.map(r =>
          saveAttendanceCell(classData.id, r.student_id, r.session_number, null, null)
        ))
        holAttRows.forEach(r => {
          if (attMap[r.student_id]) delete attMap[r.student_id][r.session_number]
        })
      }
    }

    // ─── Column widths ─────────────────────────────────────────────
    const colW = 38  // px per session column
    const nameW = 160
    const thBase  = 'border border-gray-200 text-center text-xs select-none'
    const stickyL = 'sticky left-0 z-20 bg-white border border-gray-200'
    const stickyM = 'sticky z-20 bg-white border border-gray-200'
    setContent(`
    <div class="flex flex-col h-screen overflow-hidden animate-fade">
      <!-- Top bar -->
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="window._navTo('my-classes')"
          class="text-sm text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1">
          ← กลับ
        </button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${ms?.subject_name ?? '—'}</h2>
          <p class="text-xs text-gray-400">${classData.class_name} · ${credit} หน่วยกิต · ${sessions.length} คาบ/เทอม</p>
        </div>
        <div class="flex gap-2 text-xs flex-shrink-0 items-center">
          <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg hidden sm:inline">ม=มา</span>
          <span class="px-2 py-1 bg-red-50 text-red-600 rounded-lg hidden sm:inline">ข=ขาด</span>
          <span class="px-2 py-1 bg-amber-50 text-amber-500 rounded-lg hidden sm:inline">ส=สาย</span>
          <span class="px-2 py-1 bg-blue-50 text-blue-500 rounded-lg hidden sm:inline">ก=กิจ</span>
          <span class="px-2 py-1 bg-orange-50 text-orange-500 rounded-lg hidden sm:inline">ป=ป่วย</span>
          <button id="btn-att-stats"
            class="px-3 py-1.5 bg-indigo-600 text-white rounded-lg font-medium
                   hover:bg-indigo-700 transition flex items-center gap-1">
            📊 <span class="hidden sm:inline">สถิติ</span>
          </button>
        </div>
      </div>
      <!-- Saving indicator -->
      <div id="att-saving" class="hidden fixed top-16 right-4 z-50
        bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
        💾 กำลังบันทึก...
      </div>
      <!-- Grid wrapper -->
      <div class="flex-1 overflow-auto" id="att-grid-wrap">
        ${!students.length
          ? `<div class="p-16 text-center text-gray-400">
               <p class="text-4xl mb-3">👦</p>
               <p>ยังไม่มีนักเรียนในห้องนี้</p>
             </div>`
          : `<table class="border-collapse text-xs" style="min-width: max-content">
          <thead>
            <!-- Row 1: holiday checkboxes -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${stickyL} text-gray-400 font-normal" style="width:32px;min-width:32px">#</th>
              <th class="${stickyM}" style="left:32px;width:72px;min-width:72px">รหัส</th>
              <th class="${stickyM} text-left px-2" style="left:104px;min-width:${nameW}px">ชื่อ-นามสกุล</th>
              ${sessions.map(s => {
                const isHol = holidaySet.has(s.ds)
                return `<th class="${thBase} ${isHol?'bg-red-50':'bg-gray-50'}"
                  style="width:${colW}px;min-width:${colW}px">
                  <input type="checkbox" class="att-holiday-cb w-3 h-3 accent-red-500"
                    data-session="${s.n}" data-date="${s.ds}" ${isHol?'checked':''}
                    title="${s.ds}" />
                </th>`
              }).join('')}
            </tr>
            <!-- Row 2: dates (clickable) -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${stickyL} bg-gray-50" style="width:32px"></th>
              <th class="${stickyM} bg-gray-50" style="left:32px;width:72px"></th>
              <th class="${stickyM} bg-gray-50" style="left:104px;min-width:${nameW}px"></th>
              ${sessions.map(s => {
                const isHol = holidaySet.has(s.ds)
                return `<th class="${thBase} ${isHol?'bg-red-100 text-red-400':'bg-gray-50 text-gray-600 hover:bg-emerald-50 cursor-pointer'}

                  att-date-th" data-open-session="${s.n}" data-date="${s.ds}"
                  style="width:${colW}px;min-width:${colW}px" title="เช็คชื่อ ${s.ds}">
                  ${_fmtDate(s.date)}
                </th>`
              }).join('')}
            </tr>
            <!-- Row 3: session numbers -->
            <tr style="position:sticky;top:48px;z-index:30">
              <th class="${stickyL} bg-gray-100 font-semibold text-gray-500" style="width:32px">#</th>
              <th class="${stickyM} bg-gray-100 font-semibold text-gray-500" style="left:32px;width:72px">รหัส</th>
              <th class="${stickyM} bg-gray-100 font-semibold text-gray-500 text-left px-2"
                style="left:104px;min-width:${nameW}px">ชื่อ-นามสกุล</th>
              ${sessions.map(s => {
                const isHol = holidaySet.has(s.ds)
                return `<th class="${thBase} ${isHol?'bg-red-50 text-red-300':'bg-gray-100 text-gray-500'}"

                  style="width:${colW}px;min-width:${colW}px">${s.n}</th>`
              }).join('')}
            </tr>
          </thead>
          <tbody>
            ${students.map((s, i) => {
              const initials = (s.full_name ?? '?').charAt(0)
              return `<tr class="hover:bg-gray-50 transition" data-sid="${s.id}">
                <td class="${stickyL} text-center text-gray-400" style="width:32px">${i+1}</td>
                <td class="${stickyM} text-center font-mono text-gray-600" style="left:32px;width:72px">${s.student_code}</td>
                <td class="${stickyM} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:104px;min-width:${nameW}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-1">
                    ${s.image_url
                      ? `<img src="${s.image_url}" class="w-8 h-8 object-cover rounded border flex-shrink-0" />`
                      : `<div class="w-8 h-8 rounded border bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm">👤</div>`
                    }
                    <span class="text-gray-800 text-xs truncate max-w-[105px]">${s.full_name}</span>
                  </div>
                </td>
                ${sessions.map(sess => {
                  const st  = attMap[s.id]?.[sess.n] ?? null

                  const cfg = st ? ATT_STATUS[st] : null

                  const isHol = holidaySet.has(sess.ds)

                  return `<td class="border border-gray-100 text-center cursor-pointer select-none
                    att-cell ${isHol?'bg-red-50':'hover:bg-gray-100'} ${cfg?cfg.bg:''}"
                    data-sid="${s.id}" data-session="${sess.n}" data-date="${sess.ds}"
                    style="width:${colW}px;min-width:${colW}px;height:32px">
                    ${cfg ? `<span class="${cfg.color}">${cfg.label}</span>` : ''}
                  </td>`
                }).join('')}
              </tr>`
            }).join('')}
          </tbody>
        </table>`}
      </div>
    </div>`)

    // ─── Event delegation ───────────────────────────────────────────
    const wrap = document.getElementById('att-grid-wrap')
    if (!wrap) return

    // Stats button
    document.getElementById('btn-att-stats')?.addEventListener('click', () => {
      _showAttendanceStats(classData, students, sessions, attMap, holidaySet)
    })

    // คลิกชื่อนักเรียน → สถิติรายบุคคล
    wrap.addEventListener('click', e => {
      const td = e.target.closest('.student-name-cell')
      if (!td) return
      const sid = parseInt(td.closest('[data-sid]')?.dataset.sid)
      const st  = students.find(s => s.id === sid)
      if (st) _showStudentAttendanceDetail(st, students.indexOf(st)+1, sessions, attMap, holidaySet, classData)
    })

    // Click attendance cell → cycle status + realtime save
    wrap.addEventListener('click', async e => {
      const cell = e.target.closest('.att-cell')
      if (!cell) return
      const sid  = parseInt(cell.dataset.sid)
      const sessN = parseInt(cell.dataset.session)
      const date = cell.dataset.date

      // บล็อกวันหยุด
      if (holidaySet.has(date)) {
        showToast('วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้', 'warning')
        return
      }
      const cur  = attMap[sid]?.[sessN] ?? null
      const next = ATT_CYCLE[(ATT_CYCLE.indexOf(cur) + 1) % ATT_CYCLE.length]
      if (!attMap[sid]) attMap[sid] = {}
      attMap[sid][sessN] = next
      const cfg = next ? ATT_STATUS[next] : null

      // remove old bg classes
      Object.values(ATT_STATUS).forEach(s => cell.classList.remove(s.bg))
      if (cfg) cell.classList.add(cfg.bg)
      cell.innerHTML = cfg ? `<span class="${cfg.color}">${cfg.label}</span>` : ''
      const saving = document.getElementById('att-saving')
      saving?.classList.remove('hidden')
      try {
        await saveAttendanceCell(classData.id, sid, sessN, date, next)
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
      } finally {
        saving?.classList.add('hidden')
      }
    })

    // Click date header → open attendance form for that session
    wrap.addEventListener('click', e => {
      const th = e.target.closest('.att-date-th[data-open-session]')
      if (!th) return
      const sessN = parseInt(th.dataset.openSession)
      const date  = th.dataset.date

      // บล็อกวันหยุด
      if (holidaySet.has(date)) {
        showToast('วันหยุดโรงเรียน — ไม่สามารถเช็คชื่อได้', 'warning')
        return
      }
      const sess  = sessions.find(s => s.n === sessN)
      if (!sess) return
      window._preSelectClass = classData.id
      window._preSelectDate  = date
      window._preSelectSessN = sessN

      // หาคาบอื่นที่วันเดียวกัน
      const sameDateSessions = sessions.filter(s => s.ds === date)
      _openAttFormModal(classData, students, attMap, sessN, date, sameDateSessions)
    })
  } catch (err) {
    showToast('โหลดข้อมูลไม่สำเร็จ: '+(err.message??''), 'error')
  }

}

// ─── Attendance Statistics ────────────────────────────────────────────────────

function _showAttendanceStats(classData, students, sessions, attMap, holidaySet) {
  const existing = document.getElementById('att-stats-modal')
  if (existing) existing.remove()
  const ms = classData.master_subjects

  // เฉพาะคาบที่ไม่ใช่วันหยุด
  const activeSessions = sessions.filter(s => !holidaySet.has(s.ds))
  const totalAct = activeSessions.length

  // คำนวณสถิติรายนักเรียน
  const ST = ['present','absent','late','excused','sick']
  const studentStats = students.map((s, i) => {
    const c = { present:0, absent:0, late:0, excused:0, sick:0, noRecord:0 }
    for (const sess of activeSessions) {
      const st = attMap[s.id]?.[sess.n] ?? null
      if (st && c[st] !== undefined) c[st]++
      else if (!st) c.noRecord++
    }
    const attended = c.present + c.late  // นับสาย = มา
    const pct = totalAct > 0 ? (attended / totalAct * 100).toFixed(1) : '0.0'
    return { student: s, no: i+1, ...c, attended, pct: parseFloat(pct) }
  })

  // สรุปภาพรวมทั้งชั้น
  const classAvgPct = studentStats.length
    ? (studentStats.reduce((a,s) => a+s.pct, 0) / studentStats.length).toFixed(1)
    : '0.0'

  // Weekly grouping (จัดกลุ่มตาม calendar week)
  const weekMap = {}
  for (const sess of activeSessions) {
    const d   = new Date(sess.date)
    const day = d.getDay() || 7
    const mon = new Date(d); mon.setDate(d.getDate() - day + 1)
    const wk  = mon.toISOString().slice(0,10)
    if (!weekMap[wk]) weekMap[wk] = { label: `${_fmtDate(mon)}`, sessions: [] }
    weekMap[wk].sessions.push(sess)
  }
  const weeks = Object.entries(weekMap).sort(([a],[b]) => a.localeCompare(b))

  // สีตาม %
  const pctColor = p => p >= 80 ? 'text-emerald-600' : p >= 60 ? 'text-amber-500' : 'text-red-600'
  const pctBg    = p => p >= 80 ? 'bg-emerald-50' : p >= 60 ? 'bg-amber-50' : 'bg-red-50'
  const modal = document.createElement('div')
  modal.id = 'att-stats-modal'
  modal.className = 'fixed inset-0 z-[80] bg-white flex flex-col'
  modal.innerHTML = `
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-white shadow-sm flex-shrink-0">
      <button id="stats-close" class="text-gray-400 hover:text-gray-700 text-xl">✕</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800">📊 สถิติการมาเรียน</h2>
        <p class="text-xs text-gray-400">${ms?.subject_name??'—'} · ${classData.class_name} · ${totalAct} คาบที่เรียน</p>
      </div>
      <!-- Summary badges -->
      <div class="hidden sm:flex gap-2 text-xs">
        <span class="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
          เฉลี่ย ${classAvgPct}%
        </span>
        <span class="px-2 py-1 ${pctBg(parseFloat(classAvgPct))} ${pctColor(parseFloat(classAvgPct))} rounded-lg font-medium">
          ${parseFloat(classAvgPct) >= 80 ? '✓ ดี' : parseFloat(classAvgPct) >= 60 ? '⚠ ปานกลาง' : '✗ ต่ำ'}
        </span>
      </div>
    </div>
    <!-- Tabs -->
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[['sem','รายภาคเรียน'],['week','รายสัปดาห์'],['session','รายคาบ']].map(([k,l],i) => `
        <button class="stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${i===0 ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}"
          data-tab="${k}">${l}
        </button>`).join('')}
    </div>
    <!-- Content -->
    <div class="flex-1 overflow-auto" id="stats-content"></div>`
  document.body.appendChild(modal)

  // ─── Render tab content ─────────────────────────────────────────
  const renderSem = () => {
    const sorted = [...studentStats].sort((a,b) => a.pct - b.pct)
    document.getElementById('stats-content').innerHTML = `
      <!-- Class summary cards -->
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${[
          ['มาเรียน', studentStats.reduce((a,s)=>a+s.present,0), 'bg-emerald-100 text-emerald-700'],
          ['ขาด',     studentStats.reduce((a,s)=>a+s.absent,0),  'bg-red-100 text-red-700'],
          ['สาย',     studentStats.reduce((a,s)=>a+s.late,0),    'bg-amber-100 text-amber-700'],
          ['ลากิจ',   studentStats.reduce((a,s)=>a+s.excused,0), 'bg-blue-100 text-blue-700'],
          ['ลาป่วย',  studentStats.reduce((a,s)=>a+s.sick,0),    'bg-orange-100 text-orange-700'],
        ].map(([l,v,c]) => `
          <div class="${c} rounded-xl p-3 text-center">
            <p class="text-2xl font-bold">${v}</p>
            <p class="text-xs mt-0.5">${l}</p>
          </div>`).join('')}
      </div>
      <!-- Student table -->
      <div class="px-4 pb-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">#</th>
                <th class="px-3 py-3 text-left">ชื่อ-นามสกุล</th>
                <th class="px-3 py-3 text-center bg-emerald-50 text-emerald-700">มา</th>
                <th class="px-3 py-3 text-center bg-red-50 text-red-600">ขาด</th>
                <th class="px-3 py-3 text-center bg-amber-50 text-amber-500">สาย</th>
                <th class="px-3 py-3 text-center bg-blue-50 text-blue-500">กิจ</th>
                <th class="px-3 py-3 text-center bg-orange-50 text-orange-500">ป่วย</th>
                <th class="px-3 py-3 text-center">ไม่บันทึก</th>
                <th class="px-3 py-3 text-center font-semibold">% มา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${sorted.map(s => `
                <tr class="hover:bg-gray-50 transition">
                  <td class="px-3 py-2.5 text-gray-400 text-xs">${s.no}</td>
                  <td class="px-3 py-2.5">
                    <div class="flex items-center gap-2">
                      ${s.student.image_url
                        ? `<img src="${s.student.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`
                        : `<span class="text-sm flex-shrink-0">👤</span>`}
                      <span class="truncate max-w-[140px] text-gray-800">${s.student.full_name}</span>
                    </div>
                  </td>
                  <td class="px-3 py-2.5 text-center text-emerald-600 font-medium">${s.present}</td>
                  <td class="px-3 py-2.5 text-center text-red-600 font-medium">${s.absent||'—'}</td>
                  <td class="px-3 py-2.5 text-center text-amber-500 font-medium">${s.late||'—'}</td>
                  <td class="px-3 py-2.5 text-center text-blue-500 font-medium">${s.excused||'—'}</td>
                  <td class="px-3 py-2.5 text-center text-orange-500 font-medium">${s.sick||'—'}</td>
                  <td class="px-3 py-2.5 text-center text-gray-400 text-xs">${s.noRecord||'—'}</td>
                  <td class="px-3 py-2.5 text-center">
                    <span class="font-bold text-sm ${pctColor(s.pct)}">${s.pct}%</span>
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`
  }
  const renderWeek = () => {
    document.getElementById('stats-content').innerHTML = `
      <div class="p-4 space-y-4">
        ${weeks.map(([wkKey, wk], wi) => {
          const wkSessions = wk.sessions

          const lastDate   = _fmtDate(wkSessions[wkSessions.length-1].date)

          const wkStats    = students.map(s => {
            const c = { present:0, absent:0, late:0, excused:0, sick:0 }

            for (const sess of wkSessions) {
              const st = attMap[s.id]?.[sess.n] ?? null

              if (st && c[st] !== undefined) c[st]++
            }

            return c

          })

          const totals = wkStats.reduce((acc, c) => {
            ST.forEach(k => acc[k] = (acc[k]||0) + c[k])

            return acc

          }, {})

          const wkTotal = wkSessions.length * students.length

          const wkPct   = wkTotal > 0

            ? ((totals.present + totals.late) / wkTotal * 100).toFixed(1)

            : '0.0'

          return `
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${wi+1}</p>
                  <p class="text-xs text-gray-400">${wk.label} – ${lastDate} · ${wkSessions.length} คาบ</p>
                </div>
                <span class="text-lg font-bold ${pctColor(parseFloat(wkPct))}">${wkPct}%</span>
              </div>
              <!-- Mini bar chart -->
              <div class="flex gap-1 h-6 rounded-lg overflow-hidden">
                ${[
                  [totals.present||0, 'bg-emerald-500'],
                  [totals.late||0,    'bg-amber-400'],
                  [totals.absent||0,  'bg-red-500'],
                  [totals.excused||0, 'bg-blue-400'],
                  [totals.sick||0,    'bg-orange-400'],
                ].filter(([v])=>v>0).map(([v,c]) =>
                  `<div class="${c}" style="flex:${v}" title="${v}"></div>`
                ).join('')}
              </div>
              <div class="flex gap-3 mt-2 text-xs text-gray-500 flex-wrap">
                <span class="text-emerald-600">มา ${totals.present||0}</span>
                <span class="text-red-500">ขาด ${totals.absent||0}</span>
                <span class="text-amber-500">สาย ${totals.late||0}</span>
                <span class="text-blue-500">กิจ ${totals.excused||0}</span>
                <span class="text-orange-500">ป่วย ${totals.sick||0}</span>
              </div>
            </div>`
        }).join('')}
      </div>`
  }
  const renderSession = () => {
    document.getElementById('stats-content').innerHTML = `
      <div class="p-4">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table class="w-full text-xs">
            <thead class="bg-gray-50 text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">คาบ</th>
                <th class="px-3 py-3 text-left">วันที่</th>
                <th class="px-3 py-3 text-center text-emerald-700">มา</th>
                <th class="px-3 py-3 text-center text-red-600">ขาด</th>
                <th class="px-3 py-3 text-center text-amber-500">สาย</th>
                <th class="px-3 py-3 text-center text-blue-500">กิจ</th>
                <th class="px-3 py-3 text-center text-orange-500">ป่วย</th>
                <th class="px-3 py-3 text-center">%มา</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              ${activeSessions.map(sess => {
                const c = { present:0, absent:0, late:0, excused:0, sick:0 }

                for (const s of students) {
                  const st = attMap[s.id]?.[sess.n] ?? null

                  if (st && c[st] !== undefined) c[st]++
                }

                const pct = students.length

                  ? ((c.present+c.late)/students.length*100).toFixed(0)

                  : '0'

                return `
                  <tr class="hover:bg-gray-50">
                    <td class="px-3 py-2 text-gray-500">${sess.n}</td>
                    <td class="px-3 py-2 font-mono text-gray-700">${_fmtDate(sess.date)}</td>
                    <td class="px-3 py-2 text-center text-emerald-600 font-medium">${c.present}</td>
                    <td class="px-3 py-2 text-center text-red-600 font-medium">${c.absent||'—'}</td>
                    <td class="px-3 py-2 text-center text-amber-500 font-medium">${c.late||'—'}</td>
                    <td class="px-3 py-2 text-center text-blue-500 font-medium">${c.excused||'—'}</td>
                    <td class="px-3 py-2 text-center text-orange-500 font-medium">${c.sick||'—'}</td>
                    <td class="px-3 py-2 text-center font-bold ${pctColor(parseInt(pct))}">${pct}%</td>
                  </tr>`
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>`
  }

  // Initial render
  renderSem()

  // Tab switching
  modal.querySelectorAll('.stats-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      modal.querySelectorAll('.stats-tab').forEach(t => {
        t.classList.replace('border-indigo-600', 'border-transparent')
        t.classList.replace('text-indigo-600', 'text-gray-500')
      })
      tab.classList.replace('border-transparent', 'border-indigo-600')
      tab.classList.replace('text-gray-500', 'text-indigo-600')
      const view = tab.dataset.tab
      if (view === 'sem')     renderSem()
      if (view === 'week')    renderWeek()
      if (view === 'session') renderSession()
    })
  })
  modal.querySelector('#stats-close').addEventListener('click', () => modal.remove())

}

// sameDateSessions = array of all sessions on the same date as sessN

function _openAttFormModal(classData, students, attMap, sessN, date, sameDateSessions) {
  const existing = document.getElementById('att-form-modal')
  if (existing) existing.remove()
  const STATUS_LIST = [
    { key: 'present', label: 'มา',    labelAll: 'มาทุกคน',     color: 'bg-emerald-500 text-white', bulkCls: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100' },
    { key: 'absent',  label: 'ขาด',   labelAll: 'ขาดทุกคน',    color: 'bg-red-500 text-white',     bulkCls: 'bg-red-50 text-red-600 hover:bg-red-100' },
    { key: 'late',    label: 'สาย',   labelAll: 'สายทุกคน',    color: 'bg-amber-400 text-white',   bulkCls: 'bg-amber-50 text-amber-600 hover:bg-amber-100' },
    { key: 'excused', label: 'ลากิจ', labelAll: 'ลากิจทุกคน',  color: 'bg-blue-400 text-white',    bulkCls: 'bg-blue-50 text-blue-600 hover:bg-blue-100' },
    { key: 'sick',    label: 'ลาป่วย',labelAll: 'ลาป่วยทุกคน', color: 'bg-orange-400 text-white',  bulkCls: 'bg-orange-50 text-orange-600 hover:bg-orange-100' },
  ]
  const hasMulti = sameDateSessions.length > 1
  let syncEnabled = hasMulti
  const modal = document.createElement('div')
  modal.id = 'att-form-modal'
  modal.className = 'fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b flex-shrink-0 gap-2">
        <div class="min-w-0">
          <h3 class="font-bold text-gray-800 text-sm">เช็คชื่อ — คาบที่ ${sessN}</h3>
          <p class="text-xs text-gray-400">${date} · ${classData.class_name}</p>
        </div>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          ${hasMulti ? `
          <!-- Toggle ทุกคาบ (ปุ่มสี) -->
          <button id="att-sync-btn"
            class="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all
                   bg-emerald-500 text-white shadow-sm"
            title="คลิกเพื่อเปิด/ปิดการบันทึกทุกคาบในวันนี้">
            ✓ ทุกคาบ (${sameDateSessions.length})
          </button>` : ''}
          <!-- Bulk dropdown -->
          <div class="relative" id="bulk-wrap">
            <button id="att-bulk-btn"
              class="text-xs px-2.5 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg
                     font-medium flex items-center gap-1 hover:bg-emerald-200 transition">
              <span id="bulk-label">✓ ทุกคน</span>
              <span class="opacity-60">▾</span>
            </button>
            <div id="att-bulk-dd"
              class="hidden absolute right-0 top-full mt-1 bg-white border border-gray-200
                     rounded-xl shadow-xl z-30 py-1 min-w-[130px]">
              ${STATUS_LIST.map(sc => `
                <button class="bulk-opt w-full text-left text-xs px-3 py-2 font-medium
                  transition rounded-lg ${sc.bulkCls}"
                  data-bulk="${sc.key}" data-color="${sc.color}" data-all-label="${sc.labelAll}">
                  ${sc.labelAll}
                </button>`).join('')}
            </div>
          </div>
          <button id="att-modal-close"
            class="text-gray-400 hover:text-gray-700 text-lg leading-none ml-1">✕</button>
        </div>
      </div>
      <!-- Student list -->
      <div class="overflow-y-auto flex-1 px-4 py-2 space-y-1">
        ${students.map((s, i) => {
          const cur = attMap[s.id]?.[sessN] ?? 'present'
          return `<div class="flex items-center gap-1.5 py-1.5 border-b border-gray-50" data-modal-sid="${s.id}">
            <span class="text-gray-400 text-xs w-5 text-right flex-shrink-0">${i+1}</span>
            ${s.image_url
              ? `<img src="${s.image_url}" class="w-7 h-7 rounded object-cover flex-shrink-0" />`
              : `<div class="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-xs flex-shrink-0">👤</div>`}
            <span class="flex-1 text-sm text-gray-800 truncate min-w-0">${s.full_name}</span>
            <div class="flex gap-0.5 flex-shrink-0">
              ${STATUS_LIST.map(sc => `
                <button class="att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
                  ${cur === sc.key ? sc.color : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}"
                  data-modal-sid="${s.id}" data-status="${sc.key}" data-color="${sc.color}">
                  ${sc.label}
                </button>`).join('')}
            </div>
          </div>`
        }).join('')}
      </div>
      <!-- Save button -->
      <div class="px-5 py-4 border-t flex-shrink-0">
        <button id="att-modal-save"
          class="btn-primary w-full py-3 text-white font-semibold text-sm rounded-xl">
          💾 บันทึกการเช็คชื่อ
        </button>
      </div>
    </div>`
  document.body.appendChild(modal)

  // ─── Sync toggle button ───────────────────────────────────────────
  const syncBtn = modal.querySelector('#att-sync-btn')
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      syncEnabled = !syncEnabled
      syncBtn.className = `text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all shadow-sm

        ${syncEnabled ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}`
      syncBtn.innerHTML = syncEnabled
        ? `✓ ทุกคาบ (${sameDateSessions.length})`
        : `✗ ทุกคาบ (${sameDateSessions.length})`
      showToast(
        syncEnabled
          ? `เปิด: บันทึกทั้ง ${sameDateSessions.length} คาบในวันที่ ${date}`
          : `ปิด: บันทึกเฉพาะคาบที่ ${sessN}`,
        syncEnabled ? 'success' : 'info'
      )
    })
  }

  // ─── Bulk dropdown ────────────────────────────────────────────────
  const bulkBtn = modal.querySelector('#att-bulk-btn')
  const bulkDD  = modal.querySelector('#att-bulk-dd')
  const bulkLbl = modal.querySelector('#bulk-label')
  bulkBtn?.addEventListener('click', e => {
    e.stopPropagation()
    bulkDD.classList.toggle('hidden')
  })

  // ปิด dropdown เมื่อคลิกที่อื่น
  const closeBulk = () => bulkDD?.classList.add('hidden')
  document.addEventListener('click', closeBulk, { once: true })
  modal.querySelectorAll('.bulk-opt').forEach(opt => {
    opt.addEventListener('click', e => {
      e.stopPropagation()
      const status   = opt.dataset.bulk
      const color    = opt.dataset.color
      const allLabel = opt.dataset.allLabel
      bulkDD.classList.add('hidden')

      // อัปเดตสี/text ปุ่ม bulk
      bulkBtn.className = `text-xs px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition ${color}`
      bulkLbl.textContent = allLabel

      // ตั้งสถานะทุกคน
      students.forEach(s => {
        const row = modal.querySelector(`[data-modal-sid="${s.id}"]`)
        row?.querySelectorAll('.att-modal-status').forEach(b => {
          b.className = `att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

            ${b.dataset.status === status

              ? b.dataset.color

              : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`
        })
      })

      // re-add close listener
      document.addEventListener('click', closeBulk, { once: true })
    })
  })

  // ─── Status toggle per student ────────────────────────────────────
  modal.addEventListener('click', e => {
    const btn = e.target.closest('.att-modal-status')
    if (!btn) return
    const sid    = btn.dataset.modalSid
    const status = btn.dataset.status
    const row    = modal.querySelector(`[data-modal-sid="${sid}"]`)
    row?.querySelectorAll('.att-modal-status').forEach(b => {
      b.className = `att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

        ${b.dataset.status === status

          ? b.dataset.color

          : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`
    })
  })

  // ─── Close ───────────────────────────────────────────────────────
  modal.querySelector('#att-modal-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })

  // ─── Save ────────────────────────────────────────────────────────
  modal.querySelector('#att-modal-save').addEventListener('click', async () => {
    const saveBtn = modal.querySelector('#att-modal-save')
    saveBtn.disabled = true; saveBtn.textContent = 'กำลังบันทึก...'
    const targetSessions = (hasMulti && syncEnabled) ? sameDateSessions.map(s => s.n) : [sessN]
    try {
      const studentStatuses = students.map(s => {
        const row    = modal.querySelector(`[data-modal-sid="${s.id}"]`)

        // หาปุ่มที่ active (มีสีจาก STATUS_LIST.color)
        const active = Array.from(row?.querySelectorAll('.att-modal-status') ?? [])
          .find(b => !b.className.includes('bg-white'))
        const status = active?.dataset.status ?? 'present'
        return { student: s, status }
      })
      const allRecords = []
      for (const sn of targetSessions) {
        for (const { student, status } of studentStatuses) {
          attMap[student.id] = { ...(attMap[student.id]??{}), [sn]: status }
          allRecords.push({
            class_id: classData.id, student_id: student.id,
            session_number: sn, check_date: date, status
          })
        }
      }
      await saveAttendance(allRecords)
      allRecords.forEach(r => {
        const cell = document.querySelector(`.att-cell[data-sid="${r.student_id}"][data-session="${r.session_number}"]`)
        if (!cell) return
        Object.values(ATT_STATUS).forEach(s => cell.classList.remove(s.bg))
        const cfg = ATT_STATUS[r.status]
        if (cfg) { cell.classList.add(cfg.bg); cell.innerHTML = `<span class="${cfg.color}">${cfg.label}</span>` }
      })
      showToast(
        `บันทึก${targetSessions.length > 1 ? ` ${targetSessions.length} คาบ` : ''} แล้ว ✅`,
        'success'
      )
      modal.remove()
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error')
      saveBtn.disabled = false; saveBtn.textContent = '💾 บันทึกการเช็คชื่อ'
    }
  })

}

export async function renderAttendance(teacher) {
  setActiveNav('attendance')
  setTitle('เช็คชื่อ')
  const preClassId = window._preSelectClass ?? null
  window._preSelectClass = null  // clear after use
  const classes = await getMyClasses(teacher?.id ?? null).catch(()=>[])
  const today   = new Date().toISOString().slice(0,10)
  setContent(`<div class="max-w-5xl mx-auto animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-lg font-bold text-gray-800">เช็คชื่อนักเรียน</h2>
        <p class="text-xs text-gray-400 mt-0.5">เลือกวิชาและวันที่เพื่อเช็คชื่อ</p>
      </div>
    </div>
    ${!classes.length ? `
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center text-gray-400">
      <p class="text-4xl mb-3">✅</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">ลงทะเบียนห้องเรียนก่อน</p>
    </div>` : `
    <!-- Selector -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">ห้องเรียน / วิชา</label>
          <select id="att-class" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-emerald-400">
            <option value="">— เลือกห้อง —</option>
            ${classes.map(c=>`<option value="${c.id}" ${String(c.id)===String(preClassId)?'selected':''}>${c.class_name} — ${c.master_subjects?.subject_name??'—'}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">วันที่</label>
          <input id="att-date" type="date" value="${today}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400" />
        </div>
        <div>
          <label class="block text-xs font-medium text-gray-600 mb-1">คาบที่</label>
          <input id="att-period" type="number" min="1" max="8" value="1"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-400" />
        </div>
      </div>
      <button id="att-load-btn"
        class="mt-3 btn-primary px-5 py-2 text-white text-sm font-medium rounded-xl w-full sm:w-auto">
        โหลดรายชื่อ
      </button>
    </div>
    <!-- Student List -->
    <div id="att-student-wrap"></div>`}
  </div>`)
  if (!classes.length) return

  // auto-load ถ้ามาจากปุ่มเช็คชื่อในห้องเรียน
  if (preClassId) {
    setTimeout(() => document.getElementById('att-load-btn')?.click(), 100)
  }
  const STATUS_CONFIG = [
    { key: 'present', label: 'มา',   color: 'bg-emerald-500 text-white', border: 'border-emerald-500' },
    { key: 'absent',  label: 'ขาด',  color: 'bg-red-500 text-white',     border: 'border-red-500' },
    { key: 'late',    label: 'สาย',  color: 'bg-amber-400 text-white',   border: 'border-amber-400' },
    { key: 'sick',    label: 'ลาป่วย', color: 'bg-blue-400 text-white',  border: 'border-blue-400' },
    { key: 'excused', label: 'ลากิจ', color: 'bg-purple-400 text-white', border: 'border-purple-400' },
  ]
  let _students = []
  let _statusMap = {} // student_id → status
  const _renderStudentList = () => {
    const wrap = document.getElementById('att-student-wrap')
    if (!wrap) return
    if (!_students.length) {
      wrap.innerHTML = `<div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center text-gray-400">
        <p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียน</p></div>`; return
    }
    const present = Object.values(_statusMap).filter(s=>s==='present').length
    const absent  = Object.values(_statusMap).filter(s=>s==='absent').length
    wrap.innerHTML = `
      <!-- Summary bar -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-4 flex items-center justify-between">
        <div class="flex gap-4 text-sm">
          <span class="text-emerald-600 font-semibold">มา ${present}</span>
          <span class="text-red-500 font-semibold">ขาด ${absent}</span>
          <span class="text-gray-400">รวม ${_students.length}</span>
        </div>
        <div class="flex gap-2">
          <button onclick="window._attSetAll('present')"
            class="text-xs px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200">✓ มาทุกคน</button>
          <button id="att-save-btn"
            class="btn-primary px-4 py-1.5 text-white text-xs font-semibold rounded-lg">
            💾 บันทึก
          </button>
        </div>
      </div>
      <!-- Student rows -->
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wide">
            <tr>
              <th class="px-4 py-3 text-left w-8">#</th>
              <th class="px-4 py-3 text-left">นักเรียน</th>
              <th class="px-4 py-3 text-center">สถานะ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            ${_students.map((s, i) => {
              const cur = _statusMap[s.id] ?? 'present'

              return `
              <tr class="hover:bg-gray-50 transition" data-sid="${s.id}">
                <td class="px-4 py-2 text-gray-400 text-xs">${i+1}</td>
                <td class="px-4 py-2">
                  <div class="flex items-center gap-2">
                    ${s.image_url ? `<img src="${s.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0" />` : ''}
                    <div>
                      <p class="font-medium text-gray-800 text-sm">${s.full_name}</p>
                      <p class="text-xs text-gray-400 font-mono">${s.student_code}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-2">
                  <div class="flex gap-1 justify-center flex-wrap">
                    ${STATUS_CONFIG.map(sc => `
                    <button class="att-status-btn text-xs px-2 py-1 rounded-lg border transition font-medium
                      ${cur === sc.key ? sc.color+' '+sc.border : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}"
                      data-sid="${s.id}" data-status="${sc.key}">
                      ${sc.label}
                    </button>`).join('')}
                  </div>
                </td>
              </tr>`
            }).join('')}
          </tbody>
        </table>
      </div>`

    // Status toggle
    document.querySelectorAll('.att-status-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const { sid, status } = btn.dataset
        _statusMap[sid] = status

        // Update row buttons
        document.querySelectorAll(`.att-status-btn[data-sid="${sid}"]`).forEach(b => {
          const sc = STATUS_CONFIG.find(x => x.key === b.dataset.status)
          b.className = b.className.replace(/bg-\w+-\d+ text-white border-\w+-\d+/g, '')
          if (b.dataset.status === status) {
            b.classList.add(...sc.color.split(' '), sc.border)
          } else {
            b.classList.add('bg-white','text-gray-500','border-gray-200')
          }
        })
        _renderStudentList()  // re-render summary
      })
    })

    // Save
    document.getElementById('att-save-btn')?.addEventListener('click', async () => {
      const classId = document.getElementById('att-class').value
      const date    = document.getElementById('att-date').value
      const period  = parseInt(document.getElementById('att-period').value) || 1
      const btn     = document.getElementById('att-save-btn')
      if (!classId || !date) { showToast('กรุณาเลือกห้องและวันที่','warning'); return }
      btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
      try {
        const records = _students.map(s => ({
          class_id: Number(classId),
          student_id: s.id,
          check_date: date,
          period_no: period,
          status: _statusMap[s.id] ?? 'present',
        }))
        await saveAttendance(records)
        showToast(`บันทึกเช็คชื่อ ${records.length} คน สำเร็จ ✅`, 'success')
      } catch (err) { showToast('บันทึกไม่สำเร็จ: '+(err.message??''), 'error') }
      finally { btn.disabled = false; btn.textContent = '💾 บันทึก' }
    })
  }

  // Set all present
  window._attSetAll = (status) => {
    _students.forEach(s => { _statusMap[s.id] = status })
    _renderStudentList()
  }

  // Load students
  document.getElementById('att-load-btn')?.addEventListener('click', async () => {
    const classId = document.getElementById('att-class').value
    const date    = document.getElementById('att-date').value
    if (!classId) { showToast('กรุณาเลือกห้องเรียน','warning'); return }
    const btn = document.getElementById('att-load-btn')
    btn.disabled = true; btn.textContent = 'กำลังโหลด...'
    try {
      // Get students in this class (via class_students)
      const { data: cs } = await (await import('./supabase.js')).supabase
        .from('class_students')
        .select('student_id, students(id, student_code, full_name, image_url, main_room)')
        .eq('class_id', classId)
        .order('students(student_code)')
      _students = (cs ?? []).map(r => r.students).filter(Boolean)

      // Load existing attendance for this date
      const existing = await getAttendanceByDate(Number(classId), date)
      _statusMap = {}
      _students.forEach(s => { _statusMap[s.id] = 'present' }) // default all present
      existing.forEach(a => { _statusMap[a.student_id] = a.status })
      _renderStudentList()
    } catch (err) { showToast('โหลดไม่สำเร็จ: '+(err.message??''), 'error') }
    finally { btn.disabled = false; btn.textContent = 'โหลดรายชื่อ' }
  })

}

// ─── งานรายภาคเรียน ───────────────────────────────────────────────────────────

export async function renderLifeSkillScore(teacher, homeroomRooms) {
  setActiveNav('life-skill-score')
  setTitle('บันทึกคะแนนทักษะชีวิต')

  const samaiRooms = homeroomRooms.filter(r => r.category === 'สามัญ')
  if (!samaiRooms.length) {
    setContent(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">🌱</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษาสามัญ</p>
      <p class="text-xs mt-1">ฟีเจอร์นี้สำหรับครูที่ปรึกษาชั้นสามัญเท่านั้น</p>
    </div>`)
    return
  }

  const cfg  = await getSystemConfig().catch(()=>({}))
  const year = parseInt(cfg.academicYear ?? 2568)
  const sem  = parseInt(cfg.semester ?? 1)

  let currentRoom = samaiRooms[0].main_room

  const _load = async (room) => {
    currentRoom = room
    setContent(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`)

    const [columns, students] = await Promise.all([
      getLifeSkillColumns(year, sem, 'สามัญ').catch(()=>[]),
      getStudentsByRoom(room).catch(()=>[]),
    ])

    if (!columns.length) {
      setContent(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">🌱</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนทักษะชีวิต</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนทักษะชีวิต" ก่อนครับ</p>
      </div>`)
      return
    }

    const colIds  = columns.map(c => c.id)
    const scores  = await getLifeSkillScores(colIds).catch(()=>[])
    const scoreMap = {}  // scoreMap[studentId][columnId] = score
    scores.forEach(s => {
      if (!scoreMap[s.student_id]) scoreMap[s.student_id] = {}
      scoreMap[s.student_id][s.column_id] = s.score
    })

    const totalMax = columns.reduce((s,c) => s + (c.max_score ?? 0), 0)
    const stickyL  = 'sticky left-0 z-10 bg-white border-r border-gray-100'
    const stickyM  = 'sticky z-10 bg-white border-r border-gray-100'
    const thBase   = 'border border-gray-100 text-center text-xs px-2 py-2 font-medium'

    setContent(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-emerald-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">🌱 คะแนนทักษะชีวิต</h2>
        ${samaiRooms.length > 1 ? `
        <select id="ls-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${samaiRooms.map(r=>`<option value="${r.main_room}" ${r.main_room===room?'selected':''}>${r.main_room}</option>`).join('')}
        </select>` : `<span class="text-sm font-semibold text-emerald-700">${room}</span>`}
        <span class="text-xs text-gray-400 ml-auto">ภาค ${sem} / ${year}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 ใช้ <b>Tab / →</b> เลื่อนขวา · <b>Enter / ↓</b> เลื่อนลง · <b>↑ ↓ ← →</b> เลื่อนทิศทาง · บันทึกอัตโนมัติเมื่อออกจากช่อง
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${stickyL} ${thBase} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${stickyM} ${thBase} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${stickyM} ${thBase} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${columns.map(c=>`
              <th class="${thBase} bg-emerald-50 text-emerald-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${c.name}</div>
                <div class="text-[10px] font-normal text-emerald-600 mt-0.5">/${c.max_score}</div>
              </th>`).join('')}
              <th class="${thBase} bg-indigo-50 text-indigo-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${totalMax}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            ${students.map((s,i) => {
              const sScores = scoreMap[s.id] ?? {}
              const total   = columns.reduce((sum,c) => sum + (parseFloat(sScores[c.id] ?? 0) || 0), 0)
              return `<tr class="hover:bg-gray-50/50 ls-row" data-sid="${s.id}">
                <td class="${stickyL} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${i+1}</td>
                <td class="${stickyM} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${s.student_code}</td>
                <td class="${stickyM} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${s.image_url
                      ? `<img src="${s.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0"/>`
                      : `<div class="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-200 to-teal-200
                                    flex items-center justify-center text-xs font-bold text-emerald-700 flex-shrink-0">
                           ${(s.full_name??'?').charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${s.full_name}</span>
                  </div>
                </td>
                ${columns.map(c => {
                  const val = sScores[c.id] ?? ''
                  return `<td class="border border-gray-100 p-0 ls-score-cell"
                    data-sid="${s.id}" data-cid="${c.id}" data-max="${c.max_score}">
                    <input type="number" min="0" max="${c.max_score}" step="0.5"
                      class="ls-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${val}" placeholder="—"
                      data-sid="${s.id}" data-cid="${c.id}" data-max="${c.max_score}" data-row="${i}" data-col="${columns.findIndex(x=>x.id===c.id)}" />
                  </td>`
                }).join('')}
                <td class="border border-gray-100 text-center font-semibold text-indigo-700 ls-total" data-sid="${s.id}">
                  ${total > 0 ? total.toFixed(1).replace(/\.0$/,'') : '—'}
                </td>
              </tr>`
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`)

    // ── Room selector ────────────────────────────────────────────────────────
    document.getElementById('ls-room-sel')?.addEventListener('change', e => _load(e.target.value))

    // ── Spreadsheet keyboard navigation + auto-save ──────────────────────────
    const inputs   = [...document.querySelectorAll('.ls-input')]
    const numCols  = columns.length
    const numRows  = students.length

    const _getInput = (row, col) =>
      inputs.find(inp => +inp.dataset.row === row && +inp.dataset.col === col)

    const _moveTo = (row, col) => {
      if (row < 0) row = 0
      if (row >= numRows) row = numRows - 1
      if (col < 0) col = numCols - 1
      if (col >= numCols) col = 0
      const target = _getInput(row, col)
      target?.focus()
      target?.select()
    }

    const _flashCell = (inp, ok) => {
      const td = inp.closest('td')
      if (!td) return
      const cls = ok ? 'ring-2 ring-inset ring-emerald-400 bg-emerald-50' : 'ring-2 ring-inset ring-red-400 bg-red-50'
      td.classList.add(...cls.split(' '))
      setTimeout(() => td.classList.remove(...cls.split(' ')), 1200)
    }

    const _updateTotal = (sid) => {
      const totalEl = document.querySelector(`.ls-total[data-sid="${sid}"]`)
      if (!totalEl) return
      const rowInputs = inputs.filter(inp => +inp.dataset.sid === +sid)
      const sum = rowInputs.reduce((s, inp) => s + (parseFloat(inp.value) || 0), 0)
      totalEl.textContent = sum > 0 ? sum.toFixed(1).replace(/\.0$/,'') : '—'
    }

    const _save = async (inp) => {
      const sid    = +inp.dataset.sid
      const cid    = +inp.dataset.cid
      const max    = +inp.dataset.max
      const rawVal = inp.value.trim()
      const score  = rawVal === '' ? null : parseFloat(rawVal)
      if (score !== null && (score < 0 || score > max)) {
        _flashCell(inp, false); return
      }
      try {
        await upsertLifeSkillScore(sid, cid, score, teacher?.id ?? null)
        _flashCell(inp, true)
        _updateTotal(sid)
      } catch { _flashCell(inp, false) }
    }

    inputs.forEach(inp => {
      // Auto-save on blur
      inp.addEventListener('blur', () => _save(inp))

      // Keyboard navigation — เลื่อนได้อิสระทุกทิศ เหมือน Excel/Sheets
      inp.addEventListener('keydown', e => {
        const row = +inp.dataset.row
        const col = +inp.dataset.col
        switch (e.key) {
          case 'Tab':
            e.preventDefault()
            if (e.shiftKey) {
              col > 0 ? _moveTo(row, col-1) : _moveTo(row-1, numCols-1)
            } else {
              col < numCols-1 ? _moveTo(row, col+1) : _moveTo(row+1, 0)
            }
            break
          case 'Enter':
            e.preventDefault()
            _save(inp)
            row < numRows-1 ? _moveTo(row+1, col) : _moveTo(0, col)
            break
          case 'ArrowDown':
            e.preventDefault()
            _moveTo(row < numRows-1 ? row+1 : 0, col)
            break
          case 'ArrowUp':
            e.preventDefault()
            _moveTo(row > 0 ? row-1 : numRows-1, col)
            break
          case 'ArrowRight':
            e.preventDefault()
            col < numCols-1 ? _moveTo(row, col+1) : _moveTo(row+1, 0)
            break
          case 'ArrowLeft':
            e.preventDefault()
            col > 0 ? _moveTo(row, col-1) : _moveTo(row-1, numCols-1)
            break
          case 'Home':
            e.preventDefault()
            e.ctrlKey ? _moveTo(0, 0) : _moveTo(row, 0)
            break
          case 'End':
            e.preventDefault()
            e.ctrlKey ? _moveTo(numRows-1, numCols-1) : _moveTo(row, numCols-1)
            break
          case 'Escape':
            inp.blur(); break
        }
      })

      // กรอกตัวเลขครบ digits → บันทึก+เลื่อน
      inp.addEventListener('input', () => {
        const max   = +inp.dataset.max
        const maxLen = String(Math.floor(max)).length
        const digits = inp.value.replace('.','').replace('-','').length
        if (digits >= maxLen && !inp.value.includes('.')) {
          const row = +inp.dataset.row
          const col = +inp.dataset.col
          _save(inp)
          setTimeout(() => _moveTo(row, col+1), 50)
        }
      })
    })
  }

  _load(currentRoom)
}

export async function renderReadingScore(teacher, initialRoom = null) {
  setActiveNav('reading-score')
  setTitle('บันทึกคะแนนอ่านคิดวิเคราะห์')

  const cfg  = await getSystemConfig().catch(()=>({}))
  const year = parseInt(cfg.academicYear ?? 2568)
  const sem  = parseInt(cfg.semester ?? 1)

  // โหลดห้องที่ครูสอน (ทุกห้องของครูคนนี้)
  const myClasses = teacher ? await getMyClasses(teacher.id).catch(()=>[]) : []
  const rooms = [...new Set(myClasses.map(c => c.class_name).filter(Boolean))].sort()

  if (!rooms.length) {
    setContent(`<div class="max-w-lg mx-auto text-center py-16 text-gray-400">
      <p class="text-4xl mb-3">📖</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">กรุณาลงทะเบียนห้องเรียนก่อนบันทึกคะแนน</p>
    </div>`)
    return
  }

  let currentRoom = (initialRoom && rooms.includes(initialRoom)) ? initialRoom : rooms[0]

  const _load = async (room) => {
    currentRoom = room
    setContent(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`)

    const [columns, students] = await Promise.all([
      getReadingScoreColumns(year, sem).catch(()=>[]),
      getStudentsByRoom(room).catch(()=>[]),
    ])

    if (!columns.length) {
      setContent(`<div class="max-w-lg mx-auto text-center py-16">
        <p class="text-4xl mb-3">📖</p>
        <p class="font-medium text-gray-600">ยังไม่มีหัวข้อคะแนนอ่านคิดวิเคราะห์</p>
        <p class="text-sm text-gray-400 mt-1">ให้แอดมินเพิ่มหัวข้อในเมนู "คะแนนอ่านคิดวิเคราะห์" ก่อนครับ</p>
      </div>`)
      return
    }

    const colIds   = columns.map(c => c.id)
    const scores   = await getReadingScores(colIds).catch(()=>[])
    const scoreMap = {}
    scores.forEach(s => {
      if (!scoreMap[s.student_id]) scoreMap[s.student_id] = {}
      scoreMap[s.student_id][s.column_id] = s.score
    })

    const totalMax = columns.reduce((s,c) => s + (c.max_score ?? 0), 0)
    const stickyL  = 'sticky left-0 z-10 bg-white border-r border-gray-100'
    const stickyM  = 'sticky z-10 bg-white border-r border-gray-100'
    const thBase   = 'border border-gray-100 text-center text-xs px-2 py-2 font-medium'

    setContent(`<div class="animate-fade">
      <div class="flex items-center gap-3 mb-4 flex-wrap">
        <button onclick="window._navTo('overview')" class="text-sm text-gray-500 hover:text-indigo-600">← กลับ</button>
        <h2 class="font-bold text-gray-800">📖 คะแนนอ่านคิดวิเคราะห์และเขียน</h2>
        ${rooms.length > 1 ? `
        <select id="rs-room-sel" class="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white ml-2">
          ${rooms.map(r=>`<option value="${r}" ${r===room?'selected':''}>${r}</option>`).join('')}
        </select>` : `<span class="text-sm font-semibold text-indigo-700">${room}</span>`}
        <span class="text-xs text-gray-400 ml-auto">ภาค ${sem} / ${year}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 <b>Tab / →</b> ขวา · <b>Enter / ↓</b> ลง · <b>↑ ↓ ← →</b> เลื่อน · บันทึกอัตโนมัติ
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
        <table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <tr style="position:sticky;top:0;z-index:20">
              <th class="${stickyL} ${thBase} bg-gray-50 text-left px-3" style="min-width:40px">#</th>
              <th class="${stickyM} ${thBase} bg-gray-50 text-left px-2" style="left:40px;min-width:60px">รหัส</th>
              <th class="${stickyM} ${thBase} bg-gray-50 text-left px-3" style="left:100px;min-width:180px">ชื่อ-นามสกุล</th>
              ${columns.map(c=>`
              <th class="${thBase} bg-indigo-50 text-indigo-800" style="min-width:80px">
                <div class="font-semibold leading-tight">${c.name}</div>
                <div class="text-[10px] font-normal text-indigo-500 mt-0.5">/${c.max_score}</div>
              </th>`).join('')}
              <th class="${thBase} bg-violet-50 text-violet-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${totalMax}</span>
              </th>
              <th class="${thBase} bg-indigo-50 text-indigo-700" style="min-width:60px">
                /100
              </th>
              <th class="${thBase} bg-purple-50 text-purple-700" style="min-width:90px">
                ผลประเมิน
              </th>
            </tr>
          </thead>
          <tbody>
            ${students.map((s,i) => {
              const sScores = scoreMap[s.id] ?? {}
              const total   = columns.reduce((sum,c) => sum + (parseFloat(sScores[c.id] ?? 0) || 0), 0)
              return `<tr class="hover:bg-gray-50/50" data-sid="${s.id}">
                <td class="${stickyL} border border-gray-100 text-center text-gray-400 px-2" style="min-width:40px">${i+1}</td>
                <td class="${stickyM} border border-gray-100 font-mono text-gray-500 px-2" style="left:40px;min-width:60px">${s.student_code}</td>
                <td class="${stickyM} border border-gray-100 px-3 py-1.5" style="left:100px;min-width:180px">
                  <div class="flex items-center gap-2">
                    ${s.image_url
                      ? `<img src="${s.image_url}" class="w-7 h-7 rounded-full object-cover flex-shrink-0"/>`
                      : `<div class="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-200 to-violet-200
                                    flex items-center justify-center text-xs font-bold text-indigo-700 flex-shrink-0">
                           ${(s.full_name??'?').charAt(0)}
                         </div>`}
                    <span class="text-gray-800 font-medium truncate max-w-[130px]">${s.full_name}</span>
                  </div>
                </td>
                ${columns.map(c => {
                  const val = sScores[c.id] ?? ''
                  return `<td class="border border-gray-100 p-0 rs-score-cell"
                    data-sid="${s.id}" data-cid="${c.id}" data-max="${c.max_score}">
                    <input type="number" min="0" max="${c.max_score}" step="0.5"
                      class="rs-input w-full h-full px-2 py-2 text-center text-xs bg-transparent outline-none
                             focus:bg-indigo-50 focus:ring-2 focus:ring-inset focus:ring-indigo-300 transition"
                      value="${val}" placeholder="—"
                      data-sid="${s.id}" data-cid="${c.id}" data-max="${c.max_score}"
                      data-row="${i}" data-col="${columns.findIndex(x=>x.id===c.id)}" />
                  </td>`
                }).join('')}
                <td class="border border-gray-100 text-center font-semibold text-violet-700 rs-total" data-sid="${s.id}">
                  ${total > 0 ? total.toFixed(1).replace(/\.0$/,'') : '—'}
                </td>
                <td class="border border-gray-100 text-center text-xs font-medium text-indigo-600 rs-score100" data-sid="${s.id}">
                  ${total > 0 ? (total/2).toFixed(1).replace(/\.0$/,'') : '—'}
                </td>
                <td class="border border-gray-100 text-center rs-label" data-sid="${s.id}">
                  ${total > 0 ? _readingEvalBadge(total/2) : '—'}
                </td>
              </tr>`
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`)

    document.getElementById('rs-room-sel')?.addEventListener('change', e => _load(e.target.value))

    // Spreadsheet navigation + auto-save (เหมือน Life Skill ทุกอย่าง)
    const inputs   = [...document.querySelectorAll('.rs-input')]
    const numCols  = columns.length
    const numRows  = students.length

    const _getInput = (row, col) => inputs.find(i => +i.dataset.row === row && +i.dataset.col === col)
    const _moveTo   = (row, col) => {
      if (row < 0) row = 0; if (row >= numRows) row = numRows-1
      if (col < 0) col = numCols-1; if (col >= numCols) col = 0
      const t = _getInput(row, col); t?.focus(); t?.select()
    }
    const _flash = (inp, ok) => {
      const td = inp.closest('td'); if (!td) return
      const cls = ok ? 'ring-2 ring-inset ring-indigo-400 bg-indigo-50' : 'ring-2 ring-inset ring-red-400 bg-red-50'
      td.classList.add(...cls.split(' '))
      setTimeout(() => td.classList.remove(...cls.split(' ')), 1200)
    }
    const _updateTotal = (sid) => {
      const totalEl  = document.querySelector(`.rs-total[data-sid="${sid}"]`); if (!totalEl) return
      const s100El   = document.querySelector(`.rs-score100[data-sid="${sid}"]`)
      const labelEl  = document.querySelector(`.rs-label[data-sid="${sid}"]`)
      const sum = inputs.filter(i => +i.dataset.sid === +sid).reduce((s,i) => s+(parseFloat(i.value)||0), 0)
      totalEl.textContent = sum > 0 ? sum.toFixed(1).replace(/\.0$/,'') : '—'
      if (s100El)  s100El.textContent = sum > 0 ? (sum/2).toFixed(1).replace(/\.0$/,'') : '—'
      if (labelEl) labelEl.innerHTML  = sum > 0 ? _readingEvalBadge(sum/2) : '—'
    }
    const _save = async (inp) => {
      const sid=+inp.dataset.sid, cid=+inp.dataset.cid, max=+inp.dataset.max
      const score = inp.value.trim()==='' ? null : parseFloat(inp.value)
      if (score!==null && (score<0||score>max)) { _flash(inp,false); return }
      try { await upsertReadingScore(sid,cid,score,teacher?.id??null); _flash(inp,true); _updateTotal(sid) }
      catch { _flash(inp,false) }
    }
    inputs.forEach(inp => {
      inp.addEventListener('blur', () => _save(inp))
      inp.addEventListener('keydown', e => {
        const row=+inp.dataset.row, col=+inp.dataset.col
        switch(e.key) {
          case 'Tab': e.preventDefault(); e.shiftKey?(col>0?_moveTo(row,col-1):_moveTo(row-1,numCols-1)):(col<numCols-1?_moveTo(row,col+1):_moveTo(row+1,0)); break
          case 'Enter': e.preventDefault(); _save(inp); row<numRows-1?_moveTo(row+1,col):_moveTo(0,col); break
          case 'ArrowDown': e.preventDefault(); _moveTo(row<numRows-1?row+1:0,col); break
          case 'ArrowUp':   e.preventDefault(); _moveTo(row>0?row-1:numRows-1,col); break
          case 'ArrowRight':e.preventDefault(); col<numCols-1?_moveTo(row,col+1):_moveTo(row+1,0); break
          case 'ArrowLeft': e.preventDefault(); col>0?_moveTo(row,col-1):_moveTo(row-1,numCols-1); break
          case 'Home': e.preventDefault(); e.ctrlKey?_moveTo(0,0):_moveTo(row,0); break
          case 'End':  e.preventDefault(); e.ctrlKey?_moveTo(numRows-1,numCols-1):_moveTo(row,numCols-1); break
          case 'Escape': inp.blur(); break
        }
      })
      inp.addEventListener('input', () => {
        const max=+inp.dataset.max, maxLen=String(Math.floor(max)).length
        if (inp.value.replace(/[^0-9]/g,'').length>=maxLen && !inp.value.includes('.')) {
          _save(inp); setTimeout(()=>_moveTo(+inp.dataset.row,+inp.dataset.col+1),50)
        }
      })
    })
  }

  _load(currentRoom)
}

// ─── Reading Score Eval Constants ────────────────────────────────────────────
const READING_GRADES = [
  { label: 'ดีเยี่ยม', min: 80, cls: 'text-emerald-700 bg-emerald-50' },
  { label: 'ดี',       min: 65, cls: 'text-blue-700 bg-blue-50' },
  { label: 'พอใช้',   min: 50, cls: 'text-yellow-700 bg-yellow-50' },
  { label: 'ปรับปรุง', min: 0,  cls: 'text-red-600 bg-red-50' },
]
const _readingGrade = (s) => READING_GRADES.find(g => s >= g.min) ?? READING_GRADES[3]
const _readingEvalBadge = (s) => {
  const g = _readingGrade(s)
  return `<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${g.cls}">${g.label}</span>`
}

// ─── Prayer Score Constants ───────────────────────────────────────────────────

const PRAYER_ST = {
  pray:     { label: '/',  color: 'text-emerald-600 font-bold', bg: 'bg-emerald-50', score: 2,  fullLabel: 'ละหมาด' },
  absent:   { label: 'X',  color: 'text-red-600 font-bold',     bg: 'bg-red-50',     score: 0,  fullLabel: 'ขาดละหมาด' },
  usor:     { label: 'U',  color: 'text-purple-600 font-bold',  bg: 'bg-purple-50',  score: 1,  fullLabel: 'อูโซร/ประจำเดือน' },
  followed: { label: '-',  color: 'text-blue-500 font-bold',    bg: 'bg-blue-50',    score: 1,  fullLabel: 'ติดตามแล้ว' },
  avoid:    { label: 'N',  color: 'text-orange-500 font-bold',  bg: 'bg-orange-50',  score: -1, fullLabel: 'หลีกเลี่ยง' },
}

const PRAYER_CYCLE = [null, 'pray', 'absent', 'usor', 'followed', 'avoid']

const DAY_TH = ['อา','จ','อ','พ','พฤ','ศ','ส']

function _generateWeeks(startDate, endDate, startDay = 0) {
  // startDay: 0=อาทิตย์ (default), 1=จันทร์
  const weeks = []
  const start = new Date(startDate)
  const end   = new Date(endDate)
  // เลื่อนไปวันเริ่มต้นของสัปดาห์
  const day = start.getDay()
  const diff = (day - startDay + 7) % 7
  if (diff !== 0) start.setDate(start.getDate() - diff)
  let cur = new Date(start), wn = 1
  while (cur <= end) {
    const days = []
    for (let d = 0; d < 5; d++) {
      const dt = new Date(cur); dt.setDate(dt.getDate() + d)
      if (dt <= end) days.push({ date: new Date(dt), ds: dt.toISOString().slice(0,10), weekN: wn })
    }
    if (days.length > 0) {
      weeks.push({
        n: wn, days,
        label: `${_fmtDate(days[0].date)}–${_fmtDate(days[days.length-1].date)}`,
      })
      wn++
    }
    cur.setDate(cur.getDate() + 7)
  }
  return weeks
}

// คำนวณคะแนนละหมาด: earned × 10 / (totalDays × 2), เพดาน 10
function _calcPrayerScore(prayerDayMap, allDays) {
  const earned = allDays.reduce((s, d) => s + (PRAYER_ST[prayerDayMap[d.ds]]?.score ?? 0), 0)
  const max    = allDays.length * 2
  return max > 0 ? Math.min(10, Math.max(0, Math.round((earned / max) * 100) / 10)) : 0
}

export async function renderPrayerScore(teacher, homeroomRooms) {
  setActiveNav('prayer-score')
  setTitle('บันทึกคะแนนละหมาด')
  if (!homeroomRooms.length) {
    setContent(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
    </div>`)
    return
  }

  // ถ้ามีหลายห้อง ให้เลือก
  const rooms = homeroomRooms.map(r => r.main_room)
  let selectedRoom = rooms[0]
  const _load = async (room) => {
    selectedRoom = room
    setContent(`<div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>`)
    const { getSystemConfig: _cfg } = await import('./api.js')
    const cfg  = await _cfg().catch(() => ({}))
    const year = cfg.academic_year ?? new Date().getFullYear() + 543
    const sem  = cfg.semester ?? 1
    const semStart = cfg.semester_start
    const semEnd   = cfg.semester_end
    if (!semStart || !semEnd) {
      setContent(`<div class="max-w-xl mx-auto text-center py-20">
        <p class="text-5xl mb-4">📅</p>
        <p class="font-semibold text-gray-700">ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน</p>
        <p class="text-sm text-gray-400 mt-2">แอดมินต้องระบุวันเริ่ม-สิ้นสุดภาคเรียนในหน้าตั้งค่าระบบ</p>
      </div>`)
      return
    }
    const [students, prRows] = await Promise.all([
      getStudentsByReligionRoom(room),
      getPrayerRecords(teacher.id, room, semStart, semEnd)
    ])
    const weeks    = _generateWeeks(semStart, semEnd)
    const allDays  = weeks.flatMap(w => w.days)
    const totalDays = allDays.length

    // prayMap: { studentId: { dateStr: status } }
    const prayMap = {}
    for (const r of prRows) {
      if (!prayMap[r.student_id]) prayMap[r.student_id] = {}
      prayMap[r.student_id][r.check_date] = r.status
    }

    const dayW   = 32   // px per day column
    const nameW  = 160
    const thBase  = 'border border-gray-200 text-center text-xs select-none'
    const stickyL = 'sticky left-0 z-20 bg-white border border-gray-200'
    const stickyM = 'sticky z-20 bg-white border border-gray-200'
    const scCls = s => s >= 8 ? 'text-emerald-600' : s >= 6 ? 'text-amber-500' : 'text-red-600'

    setContent(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <!-- Top bar -->
      <div class="flex items-center gap-2 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0 flex-wrap">
        <button onclick="window._navTo('my-classes')" class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h2>
          <p class="text-xs text-gray-400">${room} · ${weeks.length} สัปดาห์ · ${totalDays} วัน</p>
        </div>
        ${rooms.length > 1 ? `<select id="prayer-room-sel" class="text-xs border border-gray-200 rounded-xl px-2 py-1.5 bg-white">
          ${rooms.map(r=>`<option value="${r}" ${r===room?'selected':''}>${r}</option>`).join('')}</select>` : ''}
        <div class="flex gap-1 text-xs hidden sm:flex">
          ${Object.entries(PRAYER_ST).map(([,v])=>`<span class="px-1.5 py-1 ${v.bg} ${v.color} rounded">${v.label}=${v.fullLabel.slice(0,3)}</span>`).join('')}
        </div>
        <button id="btn-prayer-stats" class="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg font-medium hover:bg-indigo-700 transition">📊 สถิติ</button>
      </div>
      <div id="prayer-saving" class="hidden fixed top-16 right-4 z-50 bg-emerald-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
      <!-- Grid -->
      <div class="flex-1 overflow-auto" id="prayer-grid-wrap">
        ${!students.length
          ? `<div class="p-16 text-center text-gray-400"><p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียนในห้อง ${room}</p></div>`
          : `<table class="border-collapse text-xs" style="min-width:max-content">
          <thead>
            <!-- Row 1: สัปดาห์ (colspan 5, clickable) -->
            <tr style="position:sticky;top:0;z-index:30">
              <th class="${stickyL} bg-gray-50" style="width:28px">#</th>
              <th class="${stickyM} bg-gray-50" style="left:28px;width:64px">รหัส</th>
              <th class="${stickyM} bg-gray-50 text-left px-2" style="left:92px;min-width:${nameW}px">ชื่อ-นามสกุล</th>
              ${weeks.map(w=>`
                <th colspan="${w.days.length}" class="${thBase} bg-emerald-600 text-white font-semibold
                  cursor-pointer hover:bg-emerald-700 prayer-wk-th"
                  data-week="${w.n}" title="${w.label}">
                  Week${w.n}
                </th>`).join('')}
              <th class="${thBase} bg-indigo-50 text-indigo-700 font-semibold" style="min-width:52px">คะแนน<br/>/10</th>
            </tr>
            <!-- Row 2: วันที่รายวัน -->
            <tr style="position:sticky;top:24px;z-index:30">
              <th class="${stickyL} bg-gray-100 text-gray-500" style="width:28px">#</th>
              <th class="${stickyM} bg-gray-100 text-gray-500" style="left:28px;width:64px">รหัส</th>
              <th class="${stickyM} bg-gray-100 text-gray-500 text-left px-2" style="left:92px;min-width:${nameW}px">ชื่อ-นามสกุล</th>
              ${weeks.map(w=>w.days.map(d=>`
                <th class="${thBase} bg-gray-100 text-gray-400 font-normal"
                  style="width:${dayW}px;min-width:${dayW}px;font-size:9px">
                  ${DAY_TH[d.date.getDay()]}<br/>${_fmtDate(d.date)}
                </th>`).join('')).join('')}
              <th class="${thBase} bg-indigo-50" style="min-width:52px"></th>
            </tr>
          </thead>
          <tbody>
            ${students.map((s,i)=>{
              const sMap = prayMap[s.id] ?? {}
              const rawTotal = allDays.reduce((sum,d)=>sum+(PRAYER_ST[sMap[d.ds]]?.score??0),0)
              const score = totalDays>0 ? Math.max(0,Math.round((rawTotal/(totalDays*2))*100)/10) : 0
              return `<tr class="hover:bg-gray-50" data-sid="${s.id}">
                <td class="${stickyL} text-center text-gray-400" style="width:28px">${i+1}</td>
                <td class="${stickyM} text-center font-mono text-gray-600" style="left:28px;width:64px">${s.student_code}</td>
                <td class="${stickyM} px-2 student-name-cell cursor-pointer hover:bg-emerald-50"
                  style="left:92px;min-width:${nameW}px" title="คลิกดูสถิติรายบุคคล">
                  <div class="flex items-center gap-1.5 py-0.5">
                    ${s.image_url?`<img src="${s.image_url}" class="w-6 h-6 object-cover rounded flex-shrink-0"/>`
                      :`<div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center flex-shrink-0 text-xs">👤</div>`}
                    <span class="text-gray-800 text-xs truncate max-w-[100px]">${s.full_name}</span>
                  </div>
                </td>
                ${weeks.map(w=>w.days.map(d=>{
                  const st=sMap[d.ds]??null, cfg=st?PRAYER_ST[st]:null
                  return `<td class="border border-gray-100 text-center cursor-pointer select-none
                    prayer-cell hover:bg-gray-100 ${cfg?cfg.bg:''}"
                    data-sid="${s.id}" data-date="${d.ds}"
                    style="width:${dayW}px;min-width:${dayW}px;height:28px">
                    ${cfg?`<span class="${cfg.color} text-xs">${cfg.label}</span>`:''}
                  </td>`}).join('')).join('')}
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${scCls(score)}"
                  id="score-${s.id}" style="min-width:52px;font-size:11px">${score}</td>
              </tr>`
            }).join('')}
          </tbody>
        </table>`}
      </div>
    </div>`)

    // ─── Events ────────────────────────────────────────────────────
    const gWrap = document.getElementById('prayer-grid-wrap')
    if (!gWrap) return
    document.getElementById('prayer-room-sel')?.addEventListener('change', e => _load(e.target.value))
    document.getElementById('btn-prayer-stats')?.addEventListener('click', () =>
      _showPrayerStats(teacher, room, students, weeks, prayMap, allDays, year, sem))

    // คลิกชื่อนักเรียน → สถิติรายบุคคล
    gWrap.addEventListener('click', e => {
      const td = e.target.closest('.student-name-cell')
      if (!td) return
      const sid = parseInt(td.closest('[data-sid]')?.dataset.sid)
      const st  = students.find(s => s.id === sid)
      if (!st) return
      const m = prayMap[sid] ?? {}
      const c = { pray:0, absent:0, usor:0, followed:0, avoid:0, noRecord:0 }
      for (const d of allDays) { const status = m[d.ds]??null; if(status&&c[status]!==undefined)c[status]++; else c.noRecord++ }
      const score = _calcPrayerScore(m, allDays)
      _showStudentPrayerDetail({ student: st, no: students.indexOf(st)+1, ...c, score },
        weeks, prayMap, allDays, scCls)
    })

    const _updateScore = (sid) => {
      const sMap = prayMap[sid] ?? {}
      const raw  = allDays.reduce((sum, d) => sum + (PRAYER_ST[sMap[d.ds]]?.score ?? 0), 0)
      const sc   = totalDays > 0 ? Math.max(0, Math.round((raw / (totalDays * 2)) * 100) / 10) : 0
      const el   = document.getElementById(`score-${sid}`)
      if (el) { el.textContent = sc; el.className = `border border-indigo-100 text-center bg-indigo-50 font-bold ${scCls(sc)}` }
    }

    // Cell click → status picker popup
    gWrap.addEventListener('click', e => {
      const cell = e.target.closest('.prayer-cell')
      if (!cell) return
      const sid = parseInt(cell.dataset.sid)
      const ds  = cell.dataset.date
      // หาสัปดาห์ที่ตรงกับวันนี้
      const dayObj = allDays.find(d => d.ds === ds)
      _prayerPicker(e, (status) => {
        if (!prayMap[sid]) prayMap[sid] = {}
        prayMap[sid][ds] = status
        const cfg = status ? PRAYER_ST[status] : null
        Object.values(PRAYER_ST).forEach(s => cell.classList.remove(s.bg))
        if (cfg) cell.classList.add(cfg.bg)
        cell.innerHTML = cfg ? `<span class="${cfg.color} text-xs">${cfg.label}</span>` : ''
        _updateScore(sid)
        // ขอบเรืองแสง + save realtime
        savePrayerCell(teacher.id, sid, room, ds, status, dayObj?.weekN ?? null)
          .then(() => {
            cell.style.outline = '2px solid #059669'; cell.style.outlineOffset = '1px'
            setTimeout(() => { cell.style.outline = ''; cell.style.outlineOffset = '' }, 700)
          })
          .catch(() => {
            cell.style.outline = '2px solid #ef4444'; cell.style.outlineOffset = '1px'
            setTimeout(() => { cell.style.outline = ''; cell.style.outlineOffset = '' }, 700)
          })
      })
    })

    // Week header click → open form
    gWrap.addEventListener('click', e => {
      const th = e.target.closest('.prayer-wk-th')
      if (!th) return
      const weekN = parseInt(th.dataset.week)
      const week  = weeks.find(w => w.n === weekN)
      if (week) _openPrayerWeekModal(teacher, students, prayMap, week, room, allDays, totalDays, _updateScore, scCls)
    })
  }
  _load(selectedRoom)

}

// ─── Status picker popup ─────────────────────────────────────────────────────
function _prayerPicker(e, onSelect) {
  document.getElementById('prayer-picker')?.remove()
  const picker = document.createElement('div')
  picker.id = 'prayer-picker'
  picker.className = 'fixed z-[200] bg-white border border-gray-200 rounded-xl shadow-xl p-2 flex gap-1.5 flex-wrap'
  const rect = (e.target.closest('td,th,button') ?? e.target).getBoundingClientRect()
  picker.style.top  = Math.min(rect.bottom + 4, window.innerHeight - 60) + 'px'
  picker.style.left = Math.max(4, Math.min(rect.left, window.innerWidth - 220)) + 'px'
  // เพิ่มปุ่มล้างค่า
  const clearBtn = document.createElement('button')
  clearBtn.className = 'px-2 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 hover:bg-gray-200'
  clearBtn.textContent = '✕'
  clearBtn.title = 'ล้างค่า'
  clearBtn.onclick = () => { picker.remove(); onSelect(null) }
  picker.appendChild(clearBtn)
  Object.entries(PRAYER_ST).forEach(([key, v]) => {
    const btn = document.createElement('button')
    btn.className = `px-3 py-1.5 rounded-lg text-sm font-bold ${v.bg} ${v.color} hover:opacity-80 transition`
    btn.textContent = v.label
    btn.title = v.fullLabel
    btn.onclick = () => { picker.remove(); onSelect(key) }
    picker.appendChild(btn)
  })
  document.body.appendChild(picker)
  setTimeout(() => document.addEventListener('click', () => picker.remove(), { once: true }), 50)
}

// ─── Prayer Week Form Modal (5 days × students) ───────────────────────────────
// allDays = array of all days in semester (from renderPrayerScore)
function _openPrayerWeekModal(teacher, students, prayMap, week, room, allDays, totalDays, updateScore, scCls) {
  document.getElementById('prayer-week-modal')?.remove()
  const days = week.days  // [{date, ds}, ...]

  // localMap = snapshot ของ prayMap สำหรับสัปดาห์นี้ (edit ใน modal ก่อน save)
  const localMap = {}  // { studentId: { ds: status } }
  students.forEach(s => {
    localMap[s.id] = {}
    days.forEach(d => { localMap[s.id][d.ds] = prayMap[s.id]?.[d.ds] ?? null })
  })

  const _cellClass = (status) => {
    const cfg = status ? PRAYER_ST[status] : null
    return cfg ? `${cfg.bg} ${cfg.color} font-bold` : 'text-gray-300'
  }
  const _cellText = (status) => status ? PRAYER_ST[status].label : '·'

  const modal = document.createElement('div')
  modal.id = 'prayer-week-modal'
  modal.className = 'fixed inset-0 z-50 flex flex-col bg-white'
  modal.innerHTML = `
    <div class="flex items-center gap-2 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="pw-close" class="text-white/70 hover:text-white text-xl leading-none">✕</button>
      <div class="flex-1 min-w-0">
        <h3 class="font-bold text-sm">🕌 บันทึกละหมาด — สัปดาห์ที่ ${week.n}</h3>
        <p class="text-xs text-emerald-200">${week.label} · ${room}</p>
      </div>
      <button id="pw-set-all" class="text-xs px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition">AllCheck</button>
      <button id="pw-save" class="text-xs px-4 py-2 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition">✕ ปิด</button>
    </div>
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse" style="min-width:max-content">
        <thead class="sticky top-0 z-10 bg-white">
          <!-- Day column set-all buttons -->
          <tr class="border-b">
            <th class="px-3 py-2 text-left text-gray-500 font-medium" style="min-width:160px">นักเรียน</th>
            ${days.map(d => `
              <th class="px-1 py-2 text-center" style="min-width:64px">
                <div class="font-semibold text-gray-700">${DAY_TH[d.date.getDay()]} ${_fmtDate(d.date)}</div>
                <button class="pw-day-all mt-1 text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded hover:bg-emerald-100"
                  data-ds="${d.ds}">AllDay</button>
              </th>`).join('')}
            <th class="px-2 py-2 text-center text-gray-500 font-medium" style="min-width:60px">ทั้งสัปดาห์</th>
          </tr>
        </thead>
        <tbody id="pw-body">
          ${students.map((s,i) => `
            <tr class="border-b hover:bg-gray-50" data-pw-sid="${s.id}">
              <td class="px-3 py-2">
                <div class="flex items-center gap-2">
                  ${s.image_url?`<img src="${s.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:`<span class="flex-shrink-0">👤</span>`}
                  <span class="truncate max-w-[130px] text-gray-800">${s.full_name}</span>
                </div>
              </td>
              ${days.map(d => `
                <td class="px-1 py-2 text-center">
                  <button class="pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80
                    ${_cellClass(localMap[s.id]?.[d.ds])}"
                    data-pw-sid="${s.id}" data-ds="${d.ds}">
                    ${_cellText(localMap[s.id]?.[d.ds])}
                  </button>
                </td>`).join('')}
              <td class="px-2 py-2 text-center">
                <button class="pw-row-all text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-gray-200"
                  data-pw-sid="${s.id}">ตั้งครบ ▾</button>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`
  document.body.appendChild(modal)

  // ขอบเรืองแสง feedback แทน toast
  const _glow = (el, ok = true) => {
    if (!el) return
    el.style.outline = `2px solid ${ok ? '#059669' : '#ef4444'}`
    el.style.outlineOffset = '1px'
    setTimeout(() => { el.style.outline = ''; el.style.outlineOffset = '' }, 700)
  }

  // Helper: อัปเดต UI + grid + save realtime (ไม่ toast, ใช้ขอบเรืองแสง)
  const _saveCell = async (sid, ds, st) => {
    localMap[sid][ds] = st
    prayMap[sid] = { ...(prayMap[sid]??{}), [ds]: st }
    const modalBtn = modal.querySelector(`.pw-cell[data-pw-sid="${sid}"][data-ds="${ds}"]`)
    if (modalBtn) {
      modalBtn.className = `pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${_cellClass(st)}`
      modalBtn.textContent = _cellText(st)
    }
    const gridCell = document.querySelector(`.prayer-cell[data-sid="${sid}"][data-date="${ds}"]`)
    if (gridCell) {
      const cfg = st ? PRAYER_ST[st] : null
      Object.values(PRAYER_ST).forEach(v => gridCell.classList.remove(v.bg))
      if (cfg) gridCell.classList.add(cfg.bg)
      gridCell.innerHTML = cfg ? `<span class="${cfg.color} text-xs">${cfg.label}</span>` : ''
    }
    updateScore(sid)
    try {
      await savePrayerCell(teacher.id, sid, room, ds, st, week.n)
      _glow(modalBtn, true)
      _glow(gridCell, true)
    } catch (err) {
      console.error('prayer save:', err)
      _glow(modalBtn, false)
      _glow(gridCell, false)
    }
  }

  // Batch: รันพร้อมกัน, สรุป error ครั้งเดียว
  const _saveBatch = async (pairs) => {
    const results = await Promise.allSettled(pairs.map(([sid,ds,st]) => _saveCell(sid,ds,st)))
    const failed = results.filter(r => r.status === 'rejected').length
    if (failed > 0) showToast(`บันทึกไม่สำเร็จ ${failed} รายการ`, 'error')
  }

  // Cell click → picker → realtime save
  modal.addEventListener('click', e => {
    const cell = e.target.closest('.pw-cell')
    if (!cell) return
    e.stopPropagation()
    const sid = parseInt(cell.dataset.pwSid), ds = cell.dataset.ds
    _prayerPicker(e, (st) => _saveCell(sid, ds, st))
  })

  // ตั้งทั้งวัน
  modal.addEventListener('click', e => {
    const btn = e.target.closest('.pw-day-all')
    if (!btn) return
    e.stopPropagation()
    const ds = btn.dataset.ds
    _prayerPicker(e, (st) => _saveBatch(students.map(s => [s.id, ds, st])))
  })

  // ตั้งครบ (row)
  modal.addEventListener('click', e => {
    const btn = e.target.closest('.pw-row-all')
    if (!btn) return
    e.stopPropagation()
    const sid = parseInt(btn.dataset.pwSid)
    _prayerPicker(e, (st) => _saveBatch(days.map(d => [sid, d.ds, st])))
  })

  // ตั้งทุกคน
  modal.querySelector('#pw-set-all').addEventListener('click', e => {
    e.stopPropagation()
    _prayerPicker(e, (st) => _saveBatch(students.flatMap(s => days.map(d => [s.id, d.ds, st]))))
  })

  // Close + cleanup
  modal.querySelector('#pw-close').addEventListener('click', () => { modal.remove() })
  modal.addEventListener('click', e => { if (e.target === modal) { modal.remove() } })

  // Close
  modal.querySelector('#pw-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })

  // ปุ่ม "บันทึก" ตอนนี้เป็นปุ่มปิด (realtime save แล้ว)
  modal.querySelector('#pw-save').addEventListener('click', () => {
    modal.remove()
    showToast(`สัปดาห์ที่ ${week.n} บันทึก realtime แล้ว ✅`, 'success')
  })
}

// ─── Prayer Statistics ────────────────────────────────────────────────────────

function _showPrayerStats(teacher, room, students, weeks, prayMap, allDays, year, sem) {
  document.getElementById('prayer-stats-modal')?.remove()
  const scCls = s => s >= 8 ? 'text-emerald-600' : s >= 6 ? 'text-amber-500' : 'text-red-600'

  // คำนวณสถิตินักเรียนแต่ละคน โดยใช้ dateStr key
  const studentStats = students.map((s, i) => {
    const m = prayMap[s.id] ?? {}
    const c = { pray:0, absent:0, usor:0, followed:0, avoid:0, noRecord:0 }
    for (const d of allDays) {
      const st = m[d.ds] ?? null
      if (st && c[st] !== undefined) c[st]++
      else c.noRecord++
    }
    const score = _calcPrayerScore(m, allDays)
    return { student: s, no: i+1, ...c, score }
  })

  const avgScore = studentStats.length
    ? (studentStats.reduce((a,s) => a+s.score, 0) / studentStats.length).toFixed(1) : '0.0'

  const modal = document.createElement('div')
  modal.id = 'prayer-stats-modal'
  modal.className = 'fixed inset-0 z-[80] bg-white flex flex-col'
  modal.innerHTML = `
    <div class="flex items-center gap-3 px-4 py-3 border-b bg-emerald-700 text-white flex-shrink-0">
      <button id="prayer-stats-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex-1">
        <h2 class="font-bold">📊 สถิติคะแนนละหมาด</h2>
        <p class="text-xs text-emerald-200">${room} · ปีการศึกษา ${year} ภาค ${sem} · ${allDays.length} วัน</p>
      </div>
      <span class="px-3 py-1.5 bg-white/20 rounded-lg text-sm font-semibold">เฉลี่ย ${avgScore}/10</span>
    </div>
    <div class="flex gap-0 border-b bg-white flex-shrink-0 px-4">
      ${[['sem','รายภาคเรียน'],['week','รายสัปดาห์']].map(([k,l],i) => `
        <button class="pr-stats-tab px-4 py-3 text-sm font-medium border-b-2 transition
          ${i===0?'border-emerald-600 text-emerald-700':'border-transparent text-gray-500'}"
          data-tab="${k}">${l}</button>`).join('')}
    </div>
    <div class="flex-1 overflow-auto" id="prayer-stats-content"></div>`
  document.body.appendChild(modal)

  const renderSemSt = () => {
    const sorted = [...studentStats].sort((a,b) => a.score - b.score)
    document.getElementById('prayer-stats-content').innerHTML = `
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4">
        ${Object.entries(PRAYER_ST).map(([k,v]) => `
          <div class="${v.bg} rounded-xl p-3 text-center">
            <p class="text-2xl font-bold ${v.color}">${studentStats.reduce((a,s)=>a+s[k],0)}</p>
            <p class="text-xs mt-0.5">${v.label} ${v.fullLabel}</p>
          </div>`).join('')}
      </div>
      <p class="px-4 text-xs text-gray-400 -mt-2 mb-2">คลิกที่แถวนักเรียนเพื่อดูสถิติรายบุคคล</p>
      <div class="px-4 pb-6">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 text-xs text-gray-500 sticky top-0">
              <tr>
                <th class="px-3 py-3 text-left">#</th>
                <th class="px-3 py-3 text-left">ชื่อ</th>
                ${Object.entries(PRAYER_ST).map(([,v])=>`<th class="px-2 py-3 text-center ${v.color}">${v.label}</th>`).join('')}
                <th class="px-3 py-3 text-center font-semibold text-indigo-700">คะแนน/10</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50" id="pst-tbody">
              ${sorted.map(s => `
                <tr class="hover:bg-emerald-50 cursor-pointer transition" data-st-sid="${s.student.id}">
                  <td class="px-3 py-2 text-gray-400 text-xs">${s.no}</td>
                  <td class="px-3 py-2">
                    <div class="flex items-center gap-2">
                      ${s.student.image_url?`<img src="${s.student.image_url}" class="w-6 h-6 rounded object-cover"/>`:'<span>👤</span>'}
                      <span class="truncate max-w-[130px] text-xs font-medium">${s.student.full_name}</span>
                    </div>
                  </td>
                  ${Object.keys(PRAYER_ST).map(k=>`<td class="px-2 py-2 text-center text-xs font-medium">${s[k]||'—'}</td>`).join('')}
                  <td class="px-3 py-2 text-center font-bold ${scCls(s.score)}">${s.score}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`

    // คลิกแถวนักเรียน → สถิติรายบุคคล
    document.getElementById('pst-tbody')?.addEventListener('click', e => {
      const tr = e.target.closest('[data-st-sid]')
      if (!tr) return
      const sid  = parseInt(tr.dataset.stSid)
      const stat = studentStats.find(s => s.student.id === sid)
      if (stat) _showStudentPrayerDetail(stat, weeks, prayMap, allDays, scCls)
    })
  }

  const renderWeekSt = () => {
    document.getElementById('prayer-stats-content').innerHTML = `
      <div class="p-4 space-y-4">
        ${weeks.map((w, wi) => {
          const c = { pray:0, absent:0, usor:0, followed:0, avoid:0 }
          // รวมทุกวันในสัปดาห์นี้
          for (const d of w.days) {
            for (const s of students) {
              const st = prayMap[s.id]?.[d.ds] ?? null
              if (st && c[st] !== undefined) c[st]++
            }
          }
          const totalCells = students.length * w.days.length
          const pct = totalCells > 0
            ? ((c.pray+c.followed+c.usor) / totalCells * 100).toFixed(0) : '0'
          return `
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <div class="flex justify-between mb-2">
                <div>
                  <p class="font-semibold text-gray-800">สัปดาห์ที่ ${w.n}</p>
                  <p class="text-xs text-gray-400">${w.label} · ${w.days.length} วัน</p>
                </div>
                <span class="font-bold text-lg ${scCls(parseInt(pct)/10)}">${pct}%</span>
              </div>
              <div class="flex gap-1 h-5 rounded-lg overflow-hidden">
                ${Object.entries(c).filter(([,v])=>v>0).map(([k,v])=>
                  `<div class="${PRAYER_ST[k].bg}" style="flex:${v}"></div>`).join('')}
              </div>
              <div class="flex gap-3 mt-2 text-xs flex-wrap">
                ${Object.entries(PRAYER_ST).map(([k,v])=>
                  `<span class="${v.color}">${v.label} ${c[k]||0}</span>`).join('')}
              </div>
            </div>`
        }).join('')}
      </div>`
  }

  renderSemSt()
  modal.querySelectorAll('.pr-stats-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      modal.querySelectorAll('.pr-stats-tab').forEach(t => {
        t.classList.replace('border-emerald-600','border-transparent')
        t.classList.replace('text-emerald-700','text-gray-500')
      })
      tab.classList.replace('border-transparent','border-emerald-600')
      tab.classList.replace('text-gray-500','text-emerald-700')
      if (tab.dataset.tab === 'sem') renderSemSt()
      else renderWeekSt()
    })
  })
  modal.querySelector('#prayer-stats-close').addEventListener('click', () => modal.remove())
}

// ─── Individual Student Attendance Stats ─────────────────────────────────────
function _showStudentAttendanceDetail(student, no, sessions, attMap, holidaySet, classData) {
  document.getElementById('student-att-detail')?.remove()
  const ms  = classData.master_subjects
  const m   = attMap[student.id] ?? {}
  const activeSessions = sessions.filter(s => !holidaySet.has(s.ds))

  const c = { present:0, absent:0, late:0, excused:0, sick:0, noRecord:0 }
  for (const sess of activeSessions) {
    const st = m[sess.n] ?? null
    if (st && c[st] !== undefined) c[st]++
    else c.noRecord++
  }
  const attended = c.present + c.late
  const pct      = activeSessions.length > 0
    ? (attended / activeSessions.length * 100).toFixed(1) : '0.0'
  const pctCls   = p => parseFloat(p) >= 80 ? 'text-emerald-600' : parseFloat(p) >= 60 ? 'text-amber-500' : 'text-red-600'

  const ATT_LABELS = {
    present:'มา', absent:'ขาด', late:'สาย', excused:'ลากิจ', sick:'ลาป่วย'
  }
  const ATT_COLORS = {
    present:'text-emerald-600 bg-emerald-50',
    absent:'text-red-600 bg-red-50',
    late:'text-amber-500 bg-amber-50',
    excused:'text-blue-500 bg-blue-50',
    sick:'text-orange-500 bg-orange-50'
  }

  const modal = document.createElement('div')
  modal.id = 'student-att-detail'
  modal.className = 'fixed inset-0 z-[80] bg-white flex flex-col'
  modal.innerHTML = `
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-700 text-white flex-shrink-0">
      <button id="sad-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${student.image_url
          ? `<img src="${student.image_url}" class="w-10 h-10 rounded-full object-cover flex-shrink-0"/>`
          : `<div class="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-lg flex-shrink-0">👤</div>`}
        <div class="min-w-0">
          <p class="font-bold truncate">${student.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${student.student_code} · ${ms?.subject_name ?? classData.class_name}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${pctCls(pct)}">${pct}%</p>
        <p class="text-xs text-emerald-200">เข้าเรียน</p>
      </div>
    </div>
    <!-- Summary -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(ATT_LABELS).map(([k,l]) =>
        `<span class="px-3 py-1.5 rounded-xl text-sm font-medium ${ATT_COLORS[k]}">
          ${l} ${c[k]||0}
        </span>`).join('')}
      <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-xl text-sm">ไม่บันทึก ${c.noRecord||0}</span>
      <span class="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-xl text-sm font-medium">รวม ${activeSessions.length} คาบ</span>
    </div>
    <!-- Session breakdown -->
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse">
        <thead class="bg-gray-50 text-gray-500 sticky top-0">
          <tr>
            <th class="px-3 py-2 text-left">คาบ</th>
            <th class="px-3 py-2 text-left">วันที่</th>
            <th class="px-3 py-2 text-center font-semibold">สถานะ</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${activeSessions.map(sess => {
            const st  = m[sess.n] ?? null
            const lbl = st ? ATT_LABELS[st] ?? st : '—'
            const cls = st ? ATT_COLORS[st] : 'text-gray-300'
            return `<tr class="hover:bg-gray-50">
              <td class="px-3 py-2 text-gray-500">${sess.n}</td>
              <td class="px-3 py-2 font-mono text-gray-700">${_fmtDate(sess.date)}</td>
              <td class="px-3 py-2 text-center">
                <span class="px-2 py-0.5 rounded-lg text-xs font-medium ${cls}">${lbl}</span>
              </td>
            </tr>`
          }).join('')}
        </tbody>
      </table>
    </div>`
  document.body.appendChild(modal)
  modal.querySelector('#sad-close').addEventListener('click', () => modal.remove())
}

// ─── Individual Student Prayer Stats ─────────────────────────────────────────
function _showStudentPrayerDetail(stat, weeks, prayMap, allDays, scCls) {
  document.getElementById('student-detail-modal')?.remove()
  const s   = stat.student
  const m   = prayMap[s.id] ?? {}

  const modal = document.createElement('div')
  modal.id = 'student-detail-modal'
  modal.className = 'fixed inset-0 z-[80] bg-white flex flex-col'
  modal.innerHTML = `
    <!-- Header -->
    <div class="flex items-center gap-3 px-4 py-3 bg-emerald-800 text-white flex-shrink-0">
      <button id="std-close" class="text-white/70 hover:text-white text-xl">✕</button>
      <div class="flex items-center gap-3 flex-1 min-w-0">
        ${s.image_url
          ? `<img src="${s.image_url}" class="w-10 h-10 rounded-full object-cover flex-shrink-0"/>`
          : `<div class="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-lg flex-shrink-0">👤</div>`}
        <div class="min-w-0">
          <p class="font-bold truncate">${s.full_name}</p>
          <p class="text-xs text-emerald-200">รหัส ${s.student_code}</p>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-2xl font-bold ${scCls(stat.score)}">${stat.score}</p>
        <p class="text-xs text-emerald-200">คะแนน/10</p>
      </div>
    </div>
    <!-- Summary badges -->
    <div class="flex gap-2 px-4 py-3 bg-emerald-50 flex-shrink-0 flex-wrap">
      ${Object.entries(PRAYER_ST).map(([k,v]) =>
        `<span class="px-3 py-1.5 ${v.bg} ${v.color} rounded-xl text-sm font-medium">
          ${v.label} ${stat[k]||0}
        </span>`).join('')}
      <span class="px-3 py-1.5 bg-gray-100 text-gray-400 rounded-xl text-sm">ไม่บันทึก ${stat.noRecord||0}</span>
    </div>
    <!-- Week-by-week breakdown -->
    <div class="flex-1 overflow-auto">
      <table class="w-full text-xs border-collapse">
        <thead class="bg-gray-50 text-gray-500 sticky top-0">
          <tr>
            <th class="px-3 py-2 text-center text-left">สัปดาห์</th>
            <th class="px-3 py-2 text-center text-left text-gray-400">วันที่</th>
            ${Object.entries(PRAYER_ST).map(([,v])=>`<th class="px-2 py-2 text-center ${v.color}">${v.label}</th>`).join('')}
            <th class="px-2 py-2 text-center text-indigo-600 font-semibold">คะแนน</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          ${weeks.map(w => {
            const wc = { pray:0, absent:0, usor:0, followed:0, avoid:0 }
            for (const d of w.days) { const st = m[d.ds]??null; if(st&&wc[st]!==undefined)wc[st]++ }
            const wDays = w.days.map(d => ({...d}))
            const wScore = _calcPrayerScore(m, wDays)
            return `
              <tr class="hover:bg-gray-50">
                <td class="px-3 py-2 text-center font-medium text-gray-700">Week${w.n}</td>
                <td class="px-3 py-2 text-center text-gray-400">${w.label}</td>
                ${Object.keys(PRAYER_ST).map(k=>`<td class="px-2 py-2 text-center font-medium">${wc[k]||'—'}</td>`).join('')}
                <td class="px-2 py-2 text-center font-bold ${scCls(wScore)}">${wScore}</td>
              </tr>`
          }).join('')}
        </tbody>
      </table>
    </div>`
  document.body.appendChild(modal)
  modal.querySelector('#std-close').addEventListener('click', () => modal.remove())
}

export function renderGrades() {
  setActiveNav('grades')
  setTitle('บันทึกคะแนน')
  setContent(`<div class="text-center py-20 text-gray-400">
    <p class="text-5xl mb-4">📝</p>
    <p class="font-medium text-gray-600">เลือกห้องเรียนจากเมนู "ห้องเรียนของฉัน"</p>
    <p class="text-sm mt-2">แล้วกดปุ่ม 📝 คะแนน ที่การ์ดห้องเรียน</p>
  </div>`)
}

// ─── Grade Book Grid ──────────────────────────────────────────────────────────
// คำนวณเกรด จากเปอร์เซ็นต์
function _pctToGrade(pct) {
  if (pct >= 80) return 4.0
  if (pct >= 75) return 3.5
  if (pct >= 70) return 3.0
  if (pct >= 65) return 2.5
  if (pct >= 60) return 2.0
  if (pct >= 55) return 1.5
  if (pct >= 50) return 1.0
  return 0
}
// คะแนนคุณลักษณะจากเกรด
function _gradeToKhuna(grade) {
  if (grade >= 3.5) return { label: 'ดีเยี่ยม', cls: 'text-emerald-600' }
  if (grade >= 2.5) return { label: 'ดี',       cls: 'text-blue-600' }
  if (grade >= 1.0) return { label: 'ผ่าน',     cls: 'text-amber-500' }
  return { label: 'ไม่ผ่าน', cls: 'text-red-600' }
}

export async function renderGradesGrid(teacher, classData) {
  setActiveNav('grades')
  setTitle('บันทึกคะแนน')
  const ms = classData.master_subjects

  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...</div>`)

  try {
    const [students, rawCols, rawScoreRows, midSheetOpts, finSheetOpts, regularSheetOpts, sysCfg] = await Promise.all([
      getClassStudents(classData.id),
      getScoreColumns(classData.id),
      getStudentScores(classData.id),
      getSheetColumnOptions(classData.id, 'กลางภาค'),
      getSheetColumnOptions(classData.id, 'ปลายภาค'),
      getSheetColumnOptions(classData.id, 'ระหว่างเรียน'),
      getSystemConfig().catch(()=>({})),
    ])

    // โหลดข้อมูลคะแนนอ่านคิดวิเคราะห์ → สร้าง evalMap ต่อ studentId
    const _rsYear = parseInt(sysCfg.academicYear ?? 2568)
    const _rsSem  = parseInt(sysCfg.semester ?? 1)
    const subjectGroup = ms?.subject_group ?? ''
    const isLifeSkillClass = classData?.skill_group === 'ชีวิต'
    const isReligionClass = ['AGM', 'AGMVOC'].includes(subjectGroup)
    let scoreRows = rawScoreRows
    let priorityColumnNames = []

    if (isLifeSkillClass) {
      const result = await fillLifeSkillScoresForClass(classData.id, _rsYear, _rsSem)
      priorityColumnNames = result.columnNames ?? []
      scoreRows = await getStudentScores(classData.id)
    } else if (isReligionClass) {
      const result = await fillPrayerScoresForReligionClass(classData.id, {
        semesterStart: sysCfg.semester_start,
        semesterEnd: sysCfg.semester_end,
      })
      priorityColumnNames = result.columnNames ?? ['คะแนนมาเรียน', 'คะแนนละหมาด']
      scoreRows = await getStudentScores(classData.id)
    }

    const _rsCols = await getReadingScoreColumns(_rsYear, _rsSem).catch(()=>[])
    const _rsRows = _rsCols.length ? await getReadingScores(_rsCols.map(c=>c.id)).catch(()=>[]) : []
    const _rsTotals = {}
    for (const r of _rsRows) {
      _rsTotals[r.student_id] = (_rsTotals[r.student_id] ?? 0) + (parseFloat(r.score) || 0)
    }
    const readingEvalMap = {}
    for (const [sidStr, total] of Object.entries(_rsTotals)) {
      const score100 = total / 2
      const g = _readingGrade(score100)
      readingEvalMap[parseInt(sidStr)] = { score100, label: g.label, cls: g.cls }
    }

    let allCols = priorityColumnNames.length ? await getScoreColumns(classData.id) : rawCols
    if (allCols.length === 0) {
      const mkCol = (type, n) => createScoreColumn({
        class_id: classData.id, assignment_name: `คะแนนที่ ${n}`,
        max_score: 20, assignment_type: type, sheet_column: '',
      })
      for (let i = 1; i <= 5; i++) await mkCol('midterm', i)
      for (let i = 1; i <= 5; i++) await mkCol('final', i)
      allCols = await getScoreColumns(classData.id)
    }
    if (priorityColumnNames.length) {
      allCols = [...allCols].sort((a, b) => {
        const ai = priorityColumnNames.indexOf(a.assignment_name)
        const bi = priorityColumnNames.indexOf(b.assignment_name)
        if (ai >= 0 || bi >= 0) {
          if (ai < 0) return 1
          if (bi < 0) return -1
          return ai - bi
        }
        return (a.id ?? 0) - (b.id ?? 0)
      })
    }
    const lockedScoreColumnIds = new Set(
      priorityColumnNames.length
        ? allCols.filter(c => priorityColumnNames.includes(c.assignment_name)).map(c => c.id)
        : []
    )
    const _isLockedScoreColumn = colOrId => {
      const id = typeof colOrId === 'object' ? colOrId?.id : colOrId
      return lockedScoreColumnIds.has(id)
    }

    const midCols   = allCols.filter(c => c.assignment_type !== 'final')
    const finalCols = allCols.filter(c => c.assignment_type === 'final')

    const scoreMap = {}
    for (const r of scoreRows) {
      if (!scoreMap[r.student_id]) scoreMap[r.student_id] = {}
      scoreMap[r.student_id][r.score_column_id] = {
        orig: r.original_score, retake: r.retake_score,
        final: r.final_score ?? r.original_score,
      }
    }
    const _getScore = (sid, colId) => scoreMap[sid]?.[colId]?.final ?? scoreMap[sid]?.[colId]?.orig ?? null
    const _groupTotal = (sid, cols) => cols.reduce((s,c) => s + (parseFloat(_getScore(sid,c.id)) || 0), 0)
    const _groupMax   = (cols) => cols.reduce((s,c) => s + (parseFloat(c.max_score)||0), 0)

    let toggleRound = true, toggleForceGrade = true, toggleKhuna = true, toggleRead = true

    const _calcGradeRow = (sid) => {
      const midMax = _groupMax(midCols), finMax = _groupMax(finalCols)
      const midRaw = _groupTotal(sid, midCols), finRaw = _groupTotal(sid, finalCols)
      const allMax = midMax + finMax
      const allRaw = midRaw + finRaw
      // รวมตรงๆ — total คือคะแนนดิบรวม, grade คิดจาก allRaw/allMax×100
      const total = toggleRound ? Math.round(allRaw) : Math.round(allRaw * 10) / 10
      const pct   = allMax > 0 ? allRaw / allMax * 100 : 0
      const grade = _pctToGrade(pct)
      const khuna = _gradeToKhuna(grade)
      return { midRaw, finRaw, pct, total, grade, khuna }
    }

    const stickyL = 'sticky left-0 z-20 bg-white border border-gray-200'
    const stickyM = 'sticky z-20 bg-white border border-gray-200'
    const thBase  = 'border border-gray-200 text-center text-xs'
    const nameW = 160, colW = 76

    const _tBtn = (id, label, on) =>
      `<button class="grade-toggle text-[11px] px-4 py-2.5 font-medium transition-all border-t-[3px] select-none
        ${on
          ? 'border-t-green-500 bg-green-50 text-green-700 shadow-[inset_0_2px_6px_rgba(34,197,94,0.15),0_0_0_1px_rgba(34,197,94,0.2)]'
          : 'border-t-transparent bg-white text-gray-400 hover:bg-gray-50 hover:text-gray-600 border-b border-gray-100'}"
        data-toggle="${id}">${label}</button>`

    const _showSheetColPopup = (el, colId) => {
      if (_isLockedScoreColumn(colId)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้', 'warning')
        return
      }
      const col = [...midCols, ...finalCols].find(c => c.id === colId)
      const isFinal = col?.assignment_type === 'final'

      // ตรวจชื่อคอลัมน์ว่าเป็นประเภทสอบหรือเปล่า
      const kind = detectAssignmentKind(col?.assignment_name || '')
      const isExam = kind === 'กลางภาค' || kind === 'ปลายภาค' || kind === 'สอบปรับ'

      // ถ้าชื่อบ่งบอกว่าเป็นสอบ → ใช้ config กลางภาค/ปลายภาค (อาจ fixed)
      // ถ้าไม่ใช่สอบ → ใช้ config ระหว่างเรียน (เลือกได้อิสระ)
      let cfg
      if (isExam && isFinal) cfg = finSheetOpts
      else if (isExam && !isFinal) cfg = midSheetOpts
      else cfg = regularSheetOpts.cols.length > 0 ? regularSheetOpts : (isFinal ? finSheetOpts : midSheetOpts)

      const opts = cfg.cols
      const isFixed = cfg.isFixed
      document.querySelectorAll('.sheet-col-popup').forEach(p=>p.remove())

      // ถ้า fixed + 1 คอลัมน์ → auto-set เลย ไม่ต้อง popup
      if (isFixed && opts.length === 1) {
        const fixedVal = opts[0]
        if (el.textContent.trim() !== fixedVal) {
          updateScoreColumn(colId, { sheet_column: fixedVal }).catch(()=>{})
          el.textContent = fixedVal
          const col = [...midCols,...finalCols].find(c=>c.id===colId)
          if (col) col.sheet_column = fixedVal
        }
        return
      }

      const rect = el.getBoundingClientRect()
      const cur = el.textContent.trim()
      const popup = document.createElement('div')
      popup.className = 'sheet-col-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3'
      popup.style.cssText = `top:${rect.bottom+4}px;left:${Math.max(4,rect.left-20)}px;min-width:${opts.length>0?220:180}px`
      const colLabel = col?.assignment_name || (isFinal ? 'ปลายภาค' : 'กลางภาค')
      popup.innerHTML = `
        <p class="text-[10px] text-gray-400 mb-2">Sheet → <span class="font-medium text-gray-700">${colLabel}</span>
          ${isFixed?'<span class="ml-1 text-amber-500 text-[9px]">🔒 กำหนดโดยแอดมิน</span>':''}</p>
        ${opts.length > 0 ? `
        <div class="grid grid-cols-5 gap-1 mb-2 max-h-32 overflow-y-auto">
          ${opts.map(opt=>`<button class="scp-opt text-[11px] font-mono py-1.5 rounded-lg border transition-all
            ${opt===cur?'border-blue-500 bg-blue-50 text-blue-700 font-bold':'border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50'}"
            data-val="${opt}" ${isFixed?'':''}>${opt}</button>`).join('')}
        </div>` : ''}
        ${!isFixed?`<input id="scp-inp" type="text" value="${cur==='—'?'':cur}" placeholder="${opts.length>0?'หรือพิมพ์เอง...':'เช่น EK'}" maxlength="6"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-mono uppercase text-center focus:outline-none focus:border-blue-400"/>`
          :`<input id="scp-inp" type="hidden" value="${opts[0]||cur}"/>`}
        <div class="flex gap-2 mt-2">
          <button id="scp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="scp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`
      document.body.appendChild(popup)
      const inp = popup.querySelector('#scp-inp')
      inp.focus(); inp.select()
      inp.addEventListener('input', e=>{e.target.value=e.target.value.toUpperCase()})
      popup.querySelectorAll('.scp-opt').forEach(btn=>{
        btn.addEventListener('click',()=>{
          inp.value = btn.dataset.val
          popup.querySelectorAll('.scp-opt').forEach(b=>{
            b.className = b.className.replace('border-blue-500 bg-blue-50 text-blue-700 font-bold','border-gray-200 text-gray-600')
          })
          btn.className = btn.className.replace('border-gray-200 text-gray-600','border-blue-500 bg-blue-50 text-blue-700 font-bold')
        })
      })
      const doSave = async () => {
        const val = inp.value.trim().toUpperCase()||null
        try {
          await updateScoreColumn(colId,{sheet_column:val})
          el.textContent=val||'—'
          const col=[...midCols,...finalCols].find(c=>c.id===colId)
          if(col)col.sheet_column=val
          popup.remove()
        } catch { showToast('บันทึกไม่สำเร็จ','error') }
      }
      inp.addEventListener('keydown',e=>{if(e.key==='Enter')doSave()})
      popup.querySelector('#scp-save').addEventListener('click',doSave)
      popup.querySelector('#scp-cancel').addEventListener('click',()=>popup.remove())
      setTimeout(()=>{
        const h=e=>{if(!popup.contains(e.target)&&e.target!==el){popup.remove();document.removeEventListener('click',h)}}
        document.addEventListener('click',h)
      },100)
    }

    const _showMaxScorePopup = (el, colId) => {
      if (_isLockedScoreColumn(colId)) {
        showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้', 'warning')
        return
      }
      document.querySelectorAll('.max-score-popup').forEach(p=>p.remove())
      const col=[...midCols,...finalCols].find(c=>c.id===colId)
      const rect=el.getBoundingClientRect()
      const popup=document.createElement('div')
      popup.className='max-score-popup fixed z-[100] bg-white border border-gray-200 rounded-xl shadow-xl p-3'
      popup.style.cssText=`top:${rect.bottom+4}px;left:${Math.max(4,rect.left-20)}px;min-width:160px`
      popup.innerHTML=`
        <p class="text-[10px] text-gray-400 mb-1.5">คะแนนเต็มของคอลัมน์นี้</p>
        <input id="msp-inp" type="number" value="${col?.max_score||0}" min="1" max="9999"
          class="w-full border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-blue-400"/>
        <div class="flex gap-2 mt-2">
          <button id="msp-cancel" class="flex-1 py-1 rounded-lg border border-gray-200 text-xs text-gray-500">ยกเลิก</button>
          <button id="msp-save" class="flex-1 py-1 rounded-lg bg-blue-600 text-white text-xs font-medium">บันทึก</button>
        </div>`
      document.body.appendChild(popup)
      const inp=popup.querySelector('#msp-inp')
      inp.focus();inp.select()
      const doSave=async()=>{
        const val=Math.max(1,parseFloat(inp.value)||1)
        try{
          await updateScoreColumn(colId,{max_score:val})
          if(col)col.max_score=val
          popup.remove();_renderGrid()
        }catch{showToast('บันทึกไม่สำเร็จ','error')}
      }
      inp.addEventListener('keydown',e=>{if(e.key==='Enter')doSave()})
      popup.querySelector('#msp-save').addEventListener('click',doSave)
      popup.querySelector('#msp-cancel').addEventListener('click',()=>popup.remove())
      setTimeout(()=>{
        const h=e=>{if(!popup.contains(e.target)&&e.target!==el){popup.remove();document.removeEventListener('click',h)}}
        document.addEventListener('click',h)
      },100)
    }

    const _showStudentGradeDetail = (s, sMap, calc) => {
      document.getElementById('sg-detail-modal')?.remove()
      const {midRaw,finRaw,total,grade,khuna}=calc
      const midMax=_groupMax(midCols),finMax=_groupMax(finalCols)
      const scoreRow=col=>{
        const v=sMap[col.id]?.final??sMap[col.id]?.orig??null
        const pct=v!=null&&col.max_score>0?(v/col.max_score*100).toFixed(0):'—'
        return `<tr class="border-b border-gray-50">
          <td class="py-1.5 px-3 text-gray-700 text-xs">${col.assignment_name||'—'}</td>
          <td class="py-1.5 px-3 text-center text-xs font-mono text-blue-600">${v??'—'}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-400">/${col.max_score||0}</td>
          <td class="py-1.5 px-3 text-center text-xs text-gray-500">${pct}%</td>
        </tr>`
      }
      const modal=document.createElement('div')
      modal.id='sg-detail-modal'
      modal.className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'
      modal.innerHTML=`<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div class="flex items-center gap-3 p-4 border-b flex-shrink-0">
          ${s.image_url?`<img src="${s.image_url}" class="w-10 h-10 rounded-full object-cover"/>`
            :'<div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">👤</div>'}
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 truncate">${s.full_name}</p>
            <p class="text-xs text-gray-400">${s.student_code}</p>
          </div>
          <div class="text-right mr-2">
            <p class="text-2xl font-bold text-purple-700">${grade>0?grade.toFixed(1):'0'}</p>
            <p class="text-xs font-medium ${khuna.cls}">${khuna.label}</p>
          </div>
          <button id="sg-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-4 space-y-4">
          ${midCols.length>0?`<div>
            <h4 class="font-semibold text-blue-700 text-sm mb-2">📘 กลางภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-blue-100">
              <thead><tr class="bg-blue-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${midCols.map(scoreRow).join('')}</tbody>
              <tfoot><tr class="bg-blue-50 font-bold">
                <td class="py-1.5 px-3 text-blue-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${midRaw.toFixed(1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${midMax}</td>
                <td class="py-1.5 px-3 text-center text-blue-700">${midMax>0?(midRaw/midMax*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:''}
          ${finalCols.length>0?`<div>
            <h4 class="font-semibold text-purple-700 text-sm mb-2">📙 ปลายภาค</h4>
            <table class="w-full text-xs rounded-xl overflow-hidden border border-purple-100">
              <thead><tr class="bg-purple-50 text-gray-500">
                <th class="py-1.5 px-3 text-left">ชื่องาน</th>
                <th class="py-1.5 px-3 text-center">คะแนน</th>
                <th class="py-1.5 px-3 text-center">เต็ม</th>
                <th class="py-1.5 px-3 text-center">%</th>
              </tr></thead>
              <tbody>${finalCols.map(scoreRow).join('')}</tbody>
              <tfoot><tr class="bg-purple-50 font-bold">
                <td class="py-1.5 px-3 text-purple-700">รวม</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${finRaw.toFixed(1)}</td>
                <td class="py-1.5 px-3 text-center text-gray-400">/${finMax}</td>
                <td class="py-1.5 px-3 text-center text-purple-700">${finMax>0?(finRaw/finMax*100).toFixed(1):0}%</td>
              </tr></tfoot>
            </table>
          </div>`:''}
          <div class="bg-gradient-to-br from-amber-50 to-purple-50 rounded-2xl p-5 text-center border border-amber-100">
            <p class="text-xs text-gray-500 mb-2">คะแนนรวมทั้งภาค (50:50)</p>
            <p class="text-4xl font-extrabold text-amber-700 mb-1">${total>0?total:'—'}<span class="text-base font-normal text-gray-400">/100</span></p>
            <p class="text-2xl font-bold text-purple-700">เกรด ${grade>0?grade.toFixed(1):'0'}
              <span class="text-sm font-semibold ${khuna.cls}"> — ${khuna.label}</span></p>
          </div>
        </div>
      </div>`
      document.body.appendChild(modal)
      modal.querySelector('#sg-close').addEventListener('click',()=>modal.remove())
      modal.addEventListener('click',e=>{if(e.target===modal)modal.remove()})
    }

    const _renderToggleBar = () => {
      const bar = document.getElementById('grade-togglebar')
      if (!bar) return
      bar.innerHTML = `
        ${_tBtn('round','ปัดเลข',toggleRound)}
        ${_tBtn('forceGrade','บังคับเกรด',toggleForceGrade)}
        ${_tBtn('khuna','คุณลักษณะ',toggleKhuna)}
        ${_tBtn('read','การอ่าน',toggleRead)}`
      bar.querySelectorAll('.grade-toggle').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const t=btn.dataset.toggle
          if(t==='round')toggleRound=!toggleRound
          if(t==='forceGrade')toggleForceGrade=!toggleForceGrade
          if(t==='khuna')toggleKhuna=!toggleKhuna
          if(t==='read')toggleRead=!toggleRead
          _renderToggleBar();_renderGrid()
        })
      })
    }

    const _openManageColsModal = () => {
      document.getElementById('manage-cols-modal')?.remove()
      const modal = document.createElement('div')
      modal.id = 'manage-cols-modal'
      modal.className = 'fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-4'
      const colRow = col => `
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border ${_isLockedScoreColumn(col) ? 'border-emerald-100 bg-emerald-50/70' : 'border-gray-100 hover:border-gray-200 bg-gray-50/60'}">
          <span class="font-mono text-[11px] w-10 text-center rounded px-1 py-0.5 ${col.assignment_type==='final'?'bg-purple-50 text-purple-600':'bg-blue-50 text-blue-600'}">${col.sheet_column||'—'}</span>
          <span class="flex-1 text-xs text-gray-700 truncate">${col.assignment_name||'—'}</span>
          <span class="text-[11px] text-gray-400">/${col.max_score||0}</span>
          ${_isLockedScoreColumn(col)
            ? `<span class="text-[10px] text-emerald-700 font-semibold">ล็อก</span>`
            : `<button class="mcm-del text-gray-300 hover:text-red-400 text-sm transition-colors px-1 rounded hover:bg-red-50"
                data-colid="${col.id}" title="ลบคอลัมน์">🗑</button>`}
        </div>`
      modal.innerHTML = `<div class="bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[80vh] flex flex-col">
        <div class="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">⚙️ จัดการคอลัมน์คะแนน</h3>
            <p class="text-xs text-gray-400 mt-0.5">ลบหรือเพิ่มคอลัมน์คะแนน</p>
          </div>
          <button id="mcm-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">×</button>
        </div>
        <div class="overflow-auto flex-1 p-5 space-y-5">
          ${(midCols.length < 5 || finalCols.length < 5) ? `
          <div class="bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-center gap-3">
            <span class="text-xl">✨</span>
            <div class="flex-1">
              <p class="text-xs font-medium text-indigo-800">เติมคอลัมน์เริ่มต้นครบ 5+5</p>
              <p class="text-[11px] text-indigo-400">สร้างคอลัมน์เปล่าจนครบกลางภาค 5 + ปลายภาค 5</p>
            </div>
            <button id="mcm-fill-default" class="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition flex-shrink-0">เติมให้ครบ</button>
          </div>` : ''}
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-blue-700 text-sm">📘 กลางภาค <span class="font-normal text-gray-400">(${midCols.length} คอลัมน์)</span></h4>
            </div>
            <div class="space-y-1.5">${midCols.map(colRow).join('')}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-blue-200 text-blue-500 hover:border-blue-400 hover:bg-blue-50 text-sm transition-colors" data-type="midterm">＋ เพิ่มคอลัมน์กลางภาค</button>
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="font-semibold text-purple-700 text-sm">📙 ปลายภาค <span class="font-normal text-gray-400">(${finalCols.length} คอลัมน์)</span></h4>
            </div>
            <div class="space-y-1.5">${finalCols.map(colRow).join('')}</div>
            <button class="mcm-add mt-2.5 w-full py-2 rounded-xl border-2 border-dashed border-purple-200 text-purple-500 hover:border-purple-400 hover:bg-purple-50 text-sm transition-colors" data-type="final">＋ เพิ่มคอลัมน์ปลายภาค</button>
          </div>
        </div>
      </div>`
      document.body.appendChild(modal)
      modal.querySelector('#mcm-close').addEventListener('click',()=>modal.remove())
      modal.addEventListener('click',e=>{if(e.target===modal)modal.remove()})
      modal.querySelectorAll('.mcm-del').forEach(btn=>{
        btn.addEventListener('click',async()=>{
          const colId=parseInt(btn.dataset.colid)
          const col=[...midCols,...finalCols].find(c=>c.id===colId)
          if (_isLockedScoreColumn(colId)) {
            showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถลบได้', 'warning')
            return
          }
          if(!confirm(`ลบคอลัมน์ "${col?.assignment_name||'นี้'}"?\nคะแนนทั้งหมดของคอลัมน์นี้จะถูกลบด้วย`))return
          try{
            await deleteScoreColumn(colId)
            const mi=midCols.findIndex(c=>c.id===colId)
            const fi=finalCols.findIndex(c=>c.id===colId)
            if(mi!==-1)midCols.splice(mi,1)
            if(fi!==-1)finalCols.splice(fi,1)
            modal.remove();_renderGrid()
            showToast('ลบคอลัมน์แล้ว','success')
          }catch{showToast('ลบไม่สำเร็จ','error')}
        })
      })
      modal.querySelectorAll('.mcm-add').forEach(btn=>{
        btn.addEventListener('click',()=>{
          modal.remove()
          _openAddColumnModal(classData,btn.dataset.type,()=>renderGradesGrid(teacher,classData))
        })
      })
      modal.querySelector('#mcm-fill-default')?.addEventListener('click',async()=>{
        const btn=modal.querySelector('#mcm-fill-default')
        btn.disabled=true;btn.textContent='กำลังสร้าง...'
        try{
          const needMid=Math.max(0,5-midCols.length)
          const needFin=Math.max(0,5-finalCols.length)
          const mkCol2 = (type, n) => createScoreColumn({
            class_id: classData.id, assignment_name: `คะแนนที่ ${n}`,
            max_score: 20, assignment_type: type, sheet_column: '',
          })
          for (let i = 1; i <= needMid; i++) await mkCol2('midterm', midCols.length + i)
          for (let i = 1; i <= needFin; i++) await mkCol2('final', finalCols.length + i)
          modal.remove()
          renderGradesGrid(teacher,classData)
        }catch{showToast('สร้างคอลัมน์ไม่สำเร็จ','error');btn.disabled=false;btn.textContent='เติมให้ครบ'}
      })
    }

    const _renderGrid = () => {
      const midMax = _groupMax(midCols), finMax = _groupMax(finalCols)
      const wrap = document.getElementById('grade-grid-wrap')
      if (!wrap) return

      const head = `
        <tr style="position:sticky;top:0;z-index:31">
          <th class="${stickyL} bg-gray-100 text-gray-500 text-xs" style="width:28px" rowspan="3">#</th>
          <th class="${stickyM} bg-gray-100 text-gray-500 text-xs" style="left:28px;width:64px" rowspan="3">รหัส</th>
          <th class="${stickyM} bg-gray-100 text-gray-500 text-xs text-left px-2" style="left:92px;min-width:${nameW}px" rowspan="3">ชื่อ-นามสกุล</th>
          <th colspan="${midCols.length+1}" class="${thBase} bg-blue-600 text-white font-semibold py-1.5">
            📘 กลางภาค${midMax>0?' (เต็ม '+midMax+')':''}</th>
          <th colspan="${finalCols.length+1}" class="${thBase} bg-purple-600 text-white font-semibold py-1.5">
            📙 ปลายภาค${finMax>0?' (เต็ม '+finMax+')':''}</th>
          <th class="${thBase} bg-amber-50 font-semibold text-amber-700 text-xs" style="min-width:58px" rowspan="3">รวม<div class="text-[9px] font-normal text-amber-400">/${midMax+finMax||'?'}</div></th>
          <th class="${thBase} bg-purple-50 font-semibold text-purple-700 text-xs" style="min-width:50px" rowspan="3">เกรด</th>
          ${toggleForceGrade?`<th class="${thBase} bg-rose-50 text-rose-600 text-xs" style="min-width:50px" rowspan="3">บังคับ<div class="text-[9px] font-normal text-rose-300">เกรด</div></th>`:''}
          ${toggleKhuna?`<th class="${thBase} bg-emerald-50 font-medium text-emerald-700 text-xs" style="min-width:72px" rowspan="3">คุณลักษณะ</th>`:''}
          ${toggleRead?`<th class="${thBase} bg-sky-50 font-medium text-sky-600 text-xs" style="min-width:82px" rowspan="3">การอ่านฯ<div class="text-[9px] font-normal text-sky-400">ผลประเมิน</div></th>`:''}
        </tr>
        <tr style="position:sticky;top:24px;z-index:30">
          ${midCols.map(c=>`<th class="${thBase} bg-blue-50" style="width:${colW}px;min-width:${colW}px">
            <span class="col-sheet-ref font-mono text-[11px] block text-center rounded px-1 py-0.5 ${_isLockedScoreColumn(c) ? 'text-emerald-700 bg-emerald-50 cursor-not-allowed' : 'text-blue-600 cursor-pointer hover:bg-blue-100'}"
              data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อเลือกคอลัมน์ Sheet'}">${c.sheet_column||'—'}</span>
          </th>`).join('')}
          <th class="${thBase} bg-blue-50" style="width:30px">
            <button class="btn-add-col text-blue-500 hover:bg-blue-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="midterm">＋</button></th>
          ${finalCols.map(c=>`<th class="${thBase} bg-purple-50" style="width:${colW}px;min-width:${colW}px">
            <span class="col-sheet-ref font-mono text-[11px] block text-center rounded px-1 py-0.5 ${_isLockedScoreColumn(c) ? 'text-emerald-700 bg-emerald-50 cursor-not-allowed' : 'text-purple-600 cursor-pointer hover:bg-purple-100'}"
              data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อเลือกคอลัมน์ Sheet'}">${c.sheet_column||'—'}</span>
          </th>`).join('')}
          <th class="${thBase} bg-purple-50" style="width:30px">
            <button class="btn-add-col text-purple-500 hover:bg-purple-100 rounded-full w-5 h-5 font-bold text-sm leading-none mx-auto block" data-type="final">＋</button></th>
        </tr>
        <tr style="position:sticky;top:48px;z-index:30">
          ${midCols.map(c=>`<th class="${thBase} bg-blue-50" style="width:${colW}px;min-width:${colW}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${_isLockedScoreColumn(c) ? 'text-emerald-800 cursor-not-allowed' : 'text-gray-700 cursor-text hover:bg-blue-50'}"
              contenteditable="${_isLockedScoreColumn(c) ? 'false' : 'true'}" data-colid="${c.id}" data-field="assignment_name" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : ''}">${c.assignment_name||'—'}</span>
            <span class="col-max text-[10px] select-none ${_isLockedScoreColumn(c) ? 'text-emerald-700 cursor-not-allowed' : 'text-gray-400 cursor-pointer hover:text-blue-500 hover:underline'}"
              data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อแก้คะแนนเต็ม'}">/<span class="font-medium">${c.max_score||0}</span></span></th>`).join('')}
          <th class="${thBase} bg-blue-50" style="width:30px"></th>
          ${finalCols.map(c=>`<th class="${thBase} bg-purple-50" style="width:${colW}px;min-width:${colW}px">
            <span class="col-edit text-[11px] px-1 rounded block truncate ${_isLockedScoreColumn(c) ? 'text-emerald-800 cursor-not-allowed' : 'text-gray-700 cursor-text hover:bg-purple-50'}"
              contenteditable="${_isLockedScoreColumn(c) ? 'false' : 'true'}" data-colid="${c.id}" data-field="assignment_name" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : ''}">${c.assignment_name||'—'}</span>
            <span class="col-max text-[10px] select-none ${_isLockedScoreColumn(c) ? 'text-emerald-700 cursor-not-allowed' : 'text-gray-400 cursor-pointer hover:text-purple-500 hover:underline'}"
              data-colid="${c.id}" title="${_isLockedScoreColumn(c) ? 'คะแนนระบบกลาง: แก้ไขไม่ได้' : 'คลิกเพื่อแก้คะแนนเต็ม'}">/<span class="font-medium">${c.max_score||0}</span></span></th>`).join('')}
          <th class="${thBase} bg-purple-50" style="width:30px"></th>
        </tr>`

      const body = students.map((s,i) => {
        const { midRaw, finRaw, total, grade, khuna } = _calcGradeRow(s.id)
        const fg = scoreMap[s.id]?.['__force'] ?? ''
        const displayGrade = fg || (grade > 0 ? grade.toFixed(1) : '0')
        return `<tr class="hover:bg-gray-50 transition" data-sid="${s.id}">
          <td class="${stickyL} text-center text-gray-400" style="width:28px">${i+1}</td>
          <td class="${stickyM} text-center font-mono text-gray-600" style="left:28px;width:64px">${s.student_code}</td>
          <td class="${stickyM} px-2 student-name-cell cursor-pointer hover:bg-indigo-50" style="left:92px;min-width:${nameW}px" data-idx="${i}">
            <div class="flex items-center gap-1.5 py-1">
              ${s.image_url?`<img src="${s.image_url}" class="w-6 h-6 rounded object-cover flex-shrink-0"/>`:'<span class="flex-shrink-0">👤</span>'}
              <span class="text-gray-800 text-xs truncate max-w-[100px]">${s.full_name}</span>
            </div>
          </td>
          ${midCols.map(c=>{const v=_getScore(s.id,c.id)??'';return `<td class="border border-gray-100 text-center p-0"
            style="width:${colW}px;min-width:${colW}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${_isLockedScoreColumn(c) ? 'bg-emerald-50/60 text-emerald-800 cursor-not-allowed' : 'bg-transparent focus:bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:rounded'}"
              type="number" min="0" max="${c.max_score}" step="0.5" value="${v}" placeholder="—"
              data-sid="${s.id}" data-col="${c.id}" data-max="${c.max_score}" ${_isLockedScoreColumn(c) ? 'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"' : ''}/></td>`}).join('')}
          <td id="gmid-${s.id}" class="border border-gray-50 bg-blue-50/40 text-center text-[10px] text-blue-600 font-medium" style="width:34px">${midRaw>0?midRaw.toFixed(1):'—'}</td>
          ${finalCols.map(c=>{const v=_getScore(s.id,c.id)??'';return `<td class="border border-gray-100 text-center p-0"
            style="width:${colW}px;min-width:${colW}px;height:30px">
            <input class="grade-input w-full h-full text-center text-xs ${_isLockedScoreColumn(c) ? 'bg-emerald-50/60 text-emerald-800 cursor-not-allowed' : 'bg-transparent focus:bg-purple-50 focus:outline-none focus:ring-1 focus:ring-purple-300 focus:rounded'}"
              type="number" min="0" max="${c.max_score}" step="0.5" value="${v}" placeholder="—"
              data-sid="${s.id}" data-col="${c.id}" data-max="${c.max_score}" ${_isLockedScoreColumn(c) ? 'disabled title="คะแนนระบบกลาง: แก้ไขไม่ได้"' : ''}/></td>`}).join('')}
          <td id="gfin-${s.id}" class="border border-gray-50 bg-purple-50/40 text-center text-[10px] text-purple-600 font-medium" style="width:34px">${finRaw>0?finRaw.toFixed(1):'—'}</td>
          <td class="border border-amber-100 text-center bg-amber-50 font-bold text-amber-700" id="gtotal-${s.id}" style="min-width:58px">${total>0?total:'—'}</td>
          <td class="border border-purple-100 text-center bg-purple-50 font-bold text-purple-700" id="ggrade-${s.id}" style="min-width:50px">${displayGrade}</td>
          ${toggleForceGrade?`<td class="border border-rose-100 text-center bg-rose-50 p-0" style="min-width:50px;height:30px">
            <input class="force-input w-full h-full text-center text-xs bg-transparent focus:bg-rose-100 focus:outline-none text-rose-600 font-bold"
              type="text" placeholder="—" value="${fg}" data-sid="${s.id}" maxlength="4"/></td>`:''}
          ${toggleKhuna?`<td class="border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${khuna.cls}" id="gkhuna-${s.id}">${khuna.label}</td>`:''}
          ${toggleRead?(()=>{const re=readingEvalMap[s.id];return re?`<td class="border border-sky-100 text-center bg-sky-50/40 text-[11px] font-semibold ${re.cls}" id="gread-${s.id}">${re.label}</td>`:`<td class="border border-sky-100 text-center text-gray-300 text-[10px]" id="gread-${s.id}">—</td>`})():''}
        </tr>`}).join('')

      wrap.innerHTML = `<table class="border-collapse text-xs" style="min-width:max-content">
        <thead>${head}</thead><tbody>${body}</tbody></table>`
      const tbl = wrap.querySelector('table')

      // ── Score input + force grade (single listener on table, not wrap) ──
      tbl.addEventListener('change', async e => {
        const gradeInp=e.target.closest('.grade-input')
        const forceInp=e.target.closest('.force-input')
        if (gradeInp) {
          const sid=parseInt(gradeInp.dataset.sid),colId=parseInt(gradeInp.dataset.col),max=parseFloat(gradeInp.dataset.max)
          if (_isLockedScoreColumn(colId)) {
            showToast('คะแนนนี้มาจากระบบกลาง ครูไม่สามารถแก้ไขได้', 'warning')
            return
          }
          let val=gradeInp.value.trim()
          if(val!==''&&parseFloat(val)>max){gradeInp.value=max;val=String(max)}
          if(val!==''&&parseFloat(val)<0){gradeInp.value=0;val='0'}
          if(!scoreMap[sid])scoreMap[sid]={}
          const nv=val===''?null:parseFloat(val)
          scoreMap[sid][colId]={orig:nv,retake:null,final:nv}
          gradeInp.style.outline='2px solid #6366f1';gradeInp.style.outlineOffset='1px'
          setTimeout(()=>{gradeInp.style.outline='';gradeInp.style.outlineOffset=''},600)
          document.getElementById('grade-saving')?.classList.remove('hidden')
          try{
            await saveStudentScore(classData.id,sid,colId,val===''?null:val)
            const{midRaw:mRaw,finRaw:fRaw,total,grade,khuna}=_calcGradeRow(sid)
            const fg=scoreMap[sid]?.['__force']??''
            const midEl=document.getElementById(`gmid-${sid}`)
            const finEl=document.getElementById(`gfin-${sid}`)
            if(midEl)midEl.textContent=mRaw>0?mRaw.toFixed(1):'—'
            if(finEl)finEl.textContent=fRaw>0?fRaw.toFixed(1):'—'
            const tEl=document.getElementById(`gtotal-${sid}`)
            const gEl=document.getElementById(`ggrade-${sid}`)
            const kEl=document.getElementById(`gkhuna-${sid}`)
            if(tEl)tEl.textContent=total>0?total:'—'
            if(gEl)gEl.textContent=fg||(grade>0?grade.toFixed(1):'0')
            if(kEl){kEl.textContent=khuna.label;kEl.className=`border border-emerald-100 text-center bg-emerald-50 text-xs font-medium ${khuna.cls}`}
          }catch{showToast('บันทึกไม่สำเร็จ','error')}
          finally{document.getElementById('grade-saving')?.classList.add('hidden')}
        } else if (forceInp) {
          const sid=parseInt(forceInp.dataset.sid)
          if(!scoreMap[sid])scoreMap[sid]={}
          scoreMap[sid]['__force']=forceInp.value.trim()
          const{grade}=_calcGradeRow(sid)
          const fg=scoreMap[sid]['__force']
          const gEl=document.getElementById(`ggrade-${sid}`)
          if(gEl)gEl.textContent=fg||(grade>0?grade.toFixed(1):'0')
        }
      })
      // ── Tab/Enter nav ──
      tbl.addEventListener('keydown',e=>{
        if(e.key!=='Tab'&&e.key!=='Enter')return
        const inp=e.target.closest('.grade-input');if(!inp)return
        e.preventDefault()
        const inputs=[...wrap.querySelectorAll('.grade-input')]
        inputs[inputs.indexOf(inp)+(e.shiftKey?-1:1)]?.focus()
      })
      // ── Inline assignment name edit ──
      wrap.querySelectorAll('.col-edit').forEach(el=>{
        el.addEventListener('blur',async()=>{
          const colId=parseInt(el.dataset.colid),newName=el.textContent.trim()
          if (_isLockedScoreColumn(colId)) return
          try{
            await updateScoreColumn(colId,{assignment_name:newName||null})
            const col=[...midCols,...finalCols].find(c=>c.id===colId)
            if(col)col.assignment_name=newName
          }catch{showToast('บันทึกไม่สำเร็จ','error')}
        })
        el.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();el.blur()}})
      })
      // ── Sheet col ref popup ──
      wrap.querySelectorAll('.col-sheet-ref').forEach(el=>{
        el.addEventListener('click',()=>{
          const colId = parseInt(el.dataset.colid)
          if (_isLockedScoreColumn(colId)) {
            showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คอลัมน์ Sheet ได้', 'warning')
            return
          }
          _showSheetColPopup(el, colId)
        })
      })
      // ── Max score popup ──
      wrap.querySelectorAll('.col-max').forEach(el=>{
        el.addEventListener('click',()=>{
          const colId = parseInt(el.dataset.colid)
          if (_isLockedScoreColumn(colId)) {
            showToast('คอลัมน์นี้เป็นคะแนนระบบกลาง ครูไม่สามารถแก้คะแนนเต็มได้', 'warning')
            return
          }
          _showMaxScorePopup(el, colId)
        })
      })
      // ── Add col ──
      wrap.querySelectorAll('.btn-add-col').forEach(btn=>{
        btn.addEventListener('click',()=>_openAddColumnModal(classData,btn.dataset.type,()=>renderGradesGrid(teacher,classData)))
      })
      // ── Student grade detail ──
      wrap.querySelectorAll('.student-name-cell').forEach(cell=>{
        cell.addEventListener('click',()=>{
          const s=students[parseInt(cell.dataset.idx)]
          _showStudentGradeDetail(s,scoreMap[s.id]??{},_calcGradeRow(s.id))
        })
      })
    }

    setContent(`
    <div class="flex flex-col overflow-hidden animate-fade" style="height:calc(100vh - 64px)">
      <div class="flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm flex-shrink-0">
        <button onclick="window._navTo('my-classes')" class="text-sm text-indigo-600 hover:text-indigo-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800">📝 บันทึกคะแนน</h2>
          <p class="text-xs text-gray-400">${ms?.subject_name??'—'} · ${classData.class_name} · ${students.length} คน</p>
        </div>
        <div id="grade-saving" class="hidden bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">💾 กำลังบันทึก...</div>
        <button id="btn-manage-cols" class="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition flex-shrink-0">
          ⚙️ <span class="hidden sm:inline text-xs">จัดการคอลัมน์</span>
        </button>
      </div>
      <div id="grade-togglebar" class="flex border-b bg-white flex-shrink-0 overflow-x-auto"></div>
      <div class="flex-1 overflow-auto" id="grade-grid-wrap"></div>
    </div>`)
    document.getElementById('btn-manage-cols')?.addEventListener('click', _openManageColsModal)
    _renderToggleBar()
    _renderGrid()

  } catch (err) {
    showToast('โหลดข้อมูลไม่สำเร็จ: '+(err.message??''), 'error')
  }
}

// ─── Add Column Modal ─────────────────────────────────────────────────────────
function _openAddColumnModal(classData, type, onDone) {
  document.getElementById('add-col-modal')?.remove()
  const label = type==='final'?'ปลายภาค':'กลางภาค'
  const clr   = type==='final'?'purple':'blue'
  const modal = document.createElement('div')
  modal.id = 'add-col-modal'
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
    <h3 class="font-bold text-gray-800 mb-1">＋ เพิ่มคอลัมน์${label}</h3>
    <p class="text-xs text-gray-400 mb-4">คอลัมน์สำหรับ <b>${label}</b></p>
    <div class="space-y-3">
      <div><label class="block text-sm font-medium text-gray-700 mb-1">ชื่องาน <span class="text-red-400">*</span></label>
        <input id="acol-name" type="text" placeholder="เช่น งานที่ 1"
          class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${clr}-400"/></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label class="block text-sm font-medium text-gray-700 mb-1">คะแนนเต็ม</label>
          <input id="acol-max" type="number" min="1" value="20"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-${clr}-400"/></div>
        <div><label class="block text-sm font-medium text-gray-700 mb-1">คอลัมน์ Sheet</label>
          <input id="acol-sheet" type="text" placeholder="EH"
            class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-mono uppercase focus:outline-none focus:border-${clr}-400"/></div>
      </div>
      <div id="acol-msg" class="hidden text-xs text-red-500"></div>
      <div class="flex gap-3 pt-1">
        <button id="acol-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="acol-save" class="flex-1 btn-primary py-2.5 rounded-xl text-white text-sm font-semibold">เพิ่มคอลัมน์</button>
      </div>
    </div>
  </div>`
  document.body.appendChild(modal)
  modal.querySelector('#acol-sheet').addEventListener('input',e=>{e.target.value=e.target.value.toUpperCase()})
  modal.querySelector('#acol-cancel').addEventListener('click',()=>modal.remove())
  modal.addEventListener('click',e=>{if(e.target===modal)modal.remove()})
  modal.querySelector('#acol-save').addEventListener('click',async()=>{
    const name=modal.querySelector('#acol-name').value.trim()
    const max=parseFloat(modal.querySelector('#acol-max').value)||20
    const sheet=modal.querySelector('#acol-sheet').value.trim().toUpperCase()||null
    const msg=modal.querySelector('#acol-msg')
    if(!name){msg.textContent='กรุณาระบุชื่องาน';msg.classList.remove('hidden');return}
    const btn=modal.querySelector('#acol-save')
    btn.disabled=true;btn.textContent='กำลังเพิ่ม...'
    try{
      await createScoreColumn({class_id:classData.id,assignment_name:name,max_score:max,sheet_column:sheet,assignment_type:type})
      modal.remove();showToast(`เพิ่มคอลัมน์ "${name}" แล้ว`,'success');onDone()
    }catch(err){
      msg.textContent='เกิดข้อผิดพลาด: '+(err.message??'');msg.classList.remove('hidden')
      btn.disabled=false;btn.textContent='เพิ่มคอลัมน์'
    }
  })
}


export function renderRequests() {
  setActiveNav('requests')
  setTitle('คำร้องนักเรียน')
  setContent(`<div class="text-center py-20 text-gray-400">
    <p class="text-5xl mb-4">🔔</p>
    <p class="font-medium">ระบบคำร้อง — เร็วๆ นี้</p>
  </div>`)

}

export async function renderSchedule(teacher) {
  setActiveNav('schedule')
  setTitle('ตารางสอน')
  const cfg = await getSystemConfig().catch(()=>({}))
  const curYear = parseInt(cfg.academicYear ?? 2568)
  const curSem  = parseInt(cfg.semester ?? 1)
  await renderScheduleGrid(teacher, curYear, curSem, cfg)
}

// ─── Schedule Grid (ดูและแก้ไขตาราง) ─────────────────────────────────────────
export async function renderScheduleGrid(teacher, academicYear, semester, cfgIn = null) {
  setActiveNav('schedule')
  setTitle('ตารางสอน')

  const cfg      = cfgIn ?? await getSystemConfig().catch(()=>({}))
  const hasFri   = cfg.hasFriday === 'true'
  const visionOn = cfg.scheduleVisionEnabled === 'true'
  const geminiKey= cfg.geminiApiKey ?? ''

  const [periods, subjects, scheduleData] = await Promise.all([
    getPeriods().catch(()=>[]),
    teacher ? getMySubjects(teacher.id).catch(()=>[]) : Promise.resolve([]),
    teacher ? getMySchedule(teacher.id, academicYear, semester).catch(()=>[]) : Promise.resolve([]),
  ])

  // วันในสัปดาห์ 0=อา, 1=จ, 2=อ, 3=พ, 4=พฤ, (5=ศ ถ้าเปิด)
  const DAY_NAMES  = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์']
  const DAY_SHORT  = ['อา','จ','อ','พ','พฤ','ศ']
  const DAY_COLORS = ['bg-red-50','bg-yellow-50','bg-pink-50','bg-green-50','bg-orange-50','bg-purple-50','bg-blue-50']
  const numDays    = hasFri ? 6 : 5
  const days       = Array.from({length: numDays}, (_,i) => i) // [0,1,2,3,4] or [...,5]

  // map scheduleData → {`${dow}-${pno}`: entry}
  const schedMap = {}
  for (const s of scheduleData) {
    schedMap[`${s.day_of_week}-${s.period_no}`] = s
    if ((s.span_periods ?? 1) > 1) {
      schedMap[`${s.day_of_week}-${s.period_no + 1}`] = { ...s, _secondary: true }
    }
  }

  // สีวิชา: โหลดจาก localStorage ถ้ามี (ครูปรับได้)
  const COLOR_PRESETS = [
    {bg:'bg-emerald-100',text:'text-emerald-800',hex:'#d1fae5'},
    {bg:'bg-indigo-100', text:'text-indigo-800', hex:'#e0e7ff'},
    {bg:'bg-amber-100',  text:'text-amber-800',  hex:'#fef3c7'},
    {bg:'bg-rose-100',   text:'text-rose-800',   hex:'#ffe4e6'},
    {bg:'bg-cyan-100',   text:'text-cyan-800',   hex:'#cffafe'},
    {bg:'bg-violet-100', text:'text-violet-800', hex:'#ede9fe'},
    {bg:'bg-lime-100',   text:'text-lime-800',   hex:'#ecfccb'},
    {bg:'bg-orange-100', text:'text-orange-800', hex:'#ffedd5'},
    {bg:'bg-pink-100',   text:'text-pink-800',   hex:'#fce7f3'},
    {bg:'bg-teal-100',   text:'text-teal-800',   hex:'#ccfbf1'},
    {bg:'bg-green-100',  text:'text-green-800',  hex:'#a3f9d7'},
    {bg:'bg-brown-100',   text:'text-brown-800', hex:'#d7ccc8'},
    {bg:'bg-gold-100',   text:'text-gold-800',   hex:'#ffecd2'},
  ]
  const colorStorageKey = `scheduleColors_${teacher?.id ?? 'x'}`
  let savedColors = {}
  try { savedColors = JSON.parse(localStorage.getItem(colorStorageKey) ?? '{}') } catch {}
  const _scheduleColorKey = (subjectName, className, fallbackId = null) => {
    const subj = String(subjectName ?? '').trim()
    const cls  = String(className ?? '').trim()
    if (subj && cls) return `${subj} — ${cls}`
    if (subj) return subj
    return fallbackId != null ? String(fallbackId) : ''
  }

  const subjectColorMap = {}
  // โหลดสีจาก master_subjects
  subjects.forEach((s, i) => {
    const ci = savedColors[s.id] ?? savedColors[s.subject_name] ?? i % COLOR_PRESETS.length
    const e = { cls: `${COLOR_PRESETS[ci].bg} ${COLOR_PRESETS[ci].text}`, idx: ci }
    subjectColorMap[s.id] = e
    if (s.subject_name) subjectColorMap[s.subject_name] = e
  })
  // เพิ่มสีจาก localStorage สำหรับชื่อวิชาจากตารางสอน (ที่ไม่ได้อยู่ใน master_subjects)
  Object.entries(savedColors).forEach(([key, ci]) => {
    if (!subjectColorMap[key]) {
      const cp = COLOR_PRESETS[ci % COLOR_PRESETS.length]
      subjectColorMap[key] = { cls: `${cp.bg} ${cp.text}`, idx: ci }
    }
  })
  // กำหนดสีใหม่ให้ชื่อวิชาจาก schedule entries ที่ยังไม่มีสี
  let autoColorIdx = subjects.length
  scheduleData.forEach(entry => {
    const key = _scheduleColorKey(entry.subject_name, entry.class_name, entry.subject_id)
    if (key && !subjectColorMap[key]) {
      const ci = autoColorIdx % COLOR_PRESETS.length
      const cp = COLOR_PRESETS[ci]
      subjectColorMap[key] = { cls: `${cp.bg} ${cp.text}`, idx: ci }
      autoColorIdx++
    }
  })

  const _saveColors = () => {
    const map = {}
    subjects.forEach(s => { if (subjectColorMap[s.id]) map[s.id] = subjectColorMap[s.id].idx })
    localStorage.setItem(colorStorageKey, JSON.stringify(map))
  }

  setContent(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
        <h2 class="text-lg font-bold text-gray-800">ตารางสอน</h2>
        <p class="text-xs text-gray-400 mt-0.5">ภาค ${semester} / ${academicYear} — คลิกช่องเพื่อกำหนดวิชา</p>
      </div>
      <div class="flex gap-2">
        ${visionOn && geminiKey ? `
        <button id="btn-upload-schedule"
          class="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition flex items-center gap-2">
          🤖 อัปโหลดรูปตาราง
        </button>` : ''}
        <button id="btn-clear-schedule"
          class="px-4 py-2 rounded-xl border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition">
          ล้างตาราง
        </button>
      </div>
    </div>

    <!-- ตารางสอน -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-auto">
      <table class="w-full text-xs border-collapse" style="min-width:520px">
        <thead>
          <tr class="bg-gray-50">
            <th class="border border-gray-100 px-3 py-2.5 text-center text-gray-500 w-24 font-medium">คาบ / เวลา</th>
            ${days.map(d => `
            <th class="border border-gray-100 px-3 py-2.5 text-center font-semibold text-gray-700 ${DAY_COLORS[d]}">
              ${DAY_NAMES[d]}
            </th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${periods.map(p => `
          <tr class="hover:bg-gray-50/50">
            <td class="border border-gray-100 px-3 py-2 text-center bg-gray-50">
              <p class="font-bold text-gray-700">คาบ ${p.period_no}</p>
              <p class="text-[10px] text-gray-400">${p.start_time?.slice(0,5)}–${p.end_time?.slice(0,5)}</p>
            </td>
            ${days.map(d => {
              const key = `${d}-${p.period_no}`
              const entry = schedMap[key]
              if (entry?._secondary) return '' // span จาก คาบก่อนหน้า
              const subj = entry ? subjects.find(s => s.id === entry.subject_id) : null
              const span = entry?.span_periods ?? 1
              // ชื่อที่จะแสดง: ใช้ entry.subject_name ถ้ามี หรือ subj.subject_name
              const dispSubj  = entry?.subject_name ?? subj?.subject_name ?? null
              const dispClass = entry?.class_name   ?? null
              const dispTeach = entry?.teacher_name ?? null
              // สี: แยกตามรายวิชา + ห้องเรียน เพื่อให้วิชาเดียวกันคนละห้องตั้งสีแยกได้
              const colorKey  = _scheduleColorKey(dispSubj, dispClass, subj?.id)
              const clrInfo   = colorKey ? (subjectColorMap[colorKey] ?? subjectColorMap[subj?.id] ?? null) : null
              const clr       = clrInfo?.cls ?? (dispSubj ? 'bg-gray-100 text-gray-700' : '')
              // height:1px บน td → ทำให้ h-full ของ child ทำงานใน table cell ได้
              return `<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${d}" data-period="${p.period_no}"
                ${span > 1 ? `rowspan="${span}"` : ''}>
                ${dispSubj ? `
                <div class="w-full h-full rounded-none ${clr} flex flex-col justify-center items-center
                  gap-0.5 px-2 py-2 text-center" style="min-height:52px">
                  <p class="font-bold leading-tight text-xs break-words">${dispSubj}</p>
                  ${dispClass ? `<p class="text-[10px] opacity-80 leading-tight">${dispClass}</p>` : ''}
                  ${dispTeach ? `<p class="text-[9px] opacity-55 leading-tight">${dispTeach}</p>` : ''}
                  ${span > 1 ? `<p class="text-[9px] opacity-40 mt-0.5">${span} คาบ</p>` : ''}
                </div>` : `
                <div class="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" style="min-height:52px">
                  <span class="text-indigo-200 text-2xl">＋</span>
                </div>`}
              </td>`
            }).join('')}
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <!-- Legend วิชา (รวม master_subjects + schedule entries) -->
    ${(() => {
      // รวมชื่อวิชาทั้งหมดที่มีในตาราง
      const legendNames = new Set()
      subjects.forEach(s => { if (s.subject_name) legendNames.add(s.subject_name) })
      scheduleData.forEach(e => {
        const key = _scheduleColorKey(e.subject_name, e.class_name, e.subject_id)
        if (key) legendNames.add(key)
      })
      if (!legendNames.size) return ''
      return `<div class="mt-4">
        <p class="text-xs text-gray-400 mb-2">คลิกที่ชื่อวิชาเพื่อเปลี่ยนสี</p>
        <div class="flex flex-wrap gap-2">
          ${[...legendNames].map(name => `
          <button type="button" class="legend-color-btn inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${subjectColorMap[name]?.cls ?? 'bg-gray-100 text-gray-600'}"
            data-name="${name.replace(/"/g,'&quot;')}">
            🎨 ${name}
          </button>`).join('')}
        </div>
      </div>`
    })()}
  </div>`)

  // ─── Click cell → popup ────────────────────────────────────────────────────
  document.querySelectorAll('.schedule-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const dow    = parseInt(cell.dataset.dow)
      const period = parseInt(cell.dataset.period)
      const key    = `${dow}-${period}`
      const entry  = schedMap[key]
      if (entry?._secondary) return
      _openSchedulePopup({
        teacher, dow, period, periods, subjects, entry,
        academicYear, semester, subjectColorMap,
        onSave: async (payload) => {
          await upsertScheduleEntry({ teacher_id: teacher.id, ...payload })
          await renderScheduleGrid(teacher, academicYear, semester, cfg)
        },
        onDelete: async () => {
          if (entry) await deleteScheduleEntry(entry.id)
          await renderScheduleGrid(teacher, academicYear, semester, cfg)
        },
      })
    })
  })

  // ─── เปลี่ยนสีวิชา (ทุกชื่อวิชาในตาราง) ─────────────────────────────────
  document.querySelectorAll('.legend-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name
      const cur  = subjectColorMap[name]?.idx ?? 0
      const next = (cur + 1) % COLOR_PRESETS.length
      const newEntry = { cls: `${COLOR_PRESETS[next].bg} ${COLOR_PRESETS[next].text}`, idx: next }
      subjectColorMap[name] = newEntry
      // บันทึกลง localStorage
      const stored = JSON.parse(localStorage.getItem(colorStorageKey) ?? '{}')
      stored[name] = next
      localStorage.setItem(colorStorageKey, JSON.stringify(stored))
      renderScheduleGrid(teacher, academicYear, semester, cfg)
    })
  })

  // ─── ล้างตาราง ────────────────────────────────────────────────────────────
  document.getElementById('btn-clear-schedule')?.addEventListener('click', async () => {
    if (!confirm('ยืนยันล้างตารางสอนทั้งหมด?')) return
    await deleteScheduleByTeacher(teacher.id, academicYear, semester)
    await renderScheduleGrid(teacher, academicYear, semester, cfg)
    showToast('ล้างตารางแล้ว', 'success')
  })

  // ─── Upload รูป + Gemini Vision ───────────────────────────────────────────
  document.getElementById('btn-upload-schedule')?.addEventListener('click', () => {
    _openVisionUpload(teacher, subjects, periods, academicYear, semester, geminiKey, cfg)
  })
}

// ─── Popup กำหนดวิชาลงช่องตาราง (Group Card format) ─────────────────────────
async function _openSchedulePopup({ teacher, dow, period, periods, subjects, entry, academicYear, semester, subjectColorMap, onSave, onDelete }) {
  document.getElementById('sched-popup')?.remove()

  const allRooms   = await getUniqueRooms().catch(()=>[])
  const religRooms = await getUniqueReligionRooms().catch(()=>[])
  const allRoomList = [...new Set([...allRooms, ...religRooms])].sort()

  const DAY_NAMES  = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์']
  const PERIOD_NOS = periods.map(p => p.period_no)
  const p = periods.find(x => x.period_no === period)

  const COLOR_PRESETS = [
    {bg:'bg-emerald-100',text:'text-emerald-800',dot:'#10b981'},
    {bg:'bg-indigo-100', text:'text-indigo-800', dot:'#6366f1'},
    {bg:'bg-amber-100',  text:'text-amber-800',  dot:'#f59e0b'},
    {bg:'bg-rose-100',   text:'text-rose-800',   dot:'#f43f5e'},
    {bg:'bg-cyan-100',   text:'text-cyan-800',   dot:'#06b6d4'},
    {bg:'bg-violet-100', text:'text-violet-800', dot:'#8b5cf6'},
    {bg:'bg-lime-100',   text:'text-lime-800',   dot:'#84cc16'},
    {bg:'bg-orange-100', text:'text-orange-800', dot:'#f97316'},
    {bg:'bg-pink-100',   text:'text-pink-800',   dot:'#ec4899'},
    {bg:'bg-teal-100',   text:'text-teal-800',   dot:'#14b8a6'},
  ]
  const colorStorageKey = `scheduleColors_${teacher?.id ?? 'x'}`
  let savedColors = {}
  try { savedColors = JSON.parse(localStorage.getItem(colorStorageKey) ?? '{}') } catch {}
  const _scheduleColorKey = (subjectName, className, fallbackId = null) => {
    const subj = String(subjectName ?? '').trim()
    const cls  = String(className ?? '').trim()
    if (subj && cls) return `${subj} — ${cls}`
    if (subj) return subj
    return fallbackId != null ? String(fallbackId) : ''
  }

  // กำหนดสีเริ่มต้น
  const initSubjName  = entry?.subject_name ?? (entry?.subject_id ? subjects.find(s=>s.id===entry.subject_id)?.subject_name ?? '' : '')
  const initColorKey  = _scheduleColorKey(initSubjName, entry?.class_name, entry?.subject_id)
  let colorIdx = savedColors[initColorKey] ?? savedColors[initSubjName] ?? savedColors[entry?.subject_id] ?? 0

  const subjSuggestions = subjects.map(s => `<option value="${s.subject_name}">`).join('')
  const roomSuggestions = allRoomList.map(r => `<option value="${r}">`).join('')
  const dayOpts    = DAY_NAMES.map((n,i)=>`<option value="${i}">${n}</option>`).join('')
  const periodOpts = PERIOD_NOS.map(n=>`<option value="${n}">คาบ ${n}</option>`).join('')

  // sessions เริ่มต้น: คาบที่คลิก + คาบเดิมถ้ามี
  let sessions = entry
    ? [{ day_of_week: entry.day_of_week, period_no: entry.period_no, span_periods: entry.span_periods ?? 1 }]
    : [{ day_of_week: dow, period_no: period, span_periods: 1 }]

  const wrap = document.createElement('div')
  wrap.id = 'sched-popup'
  wrap.className = 'fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'
  document.body.appendChild(wrap)

  function _render() {
    const clr = COLOR_PRESETS[colorIdx]
    wrap.innerHTML = `
      <div class="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <!-- Header -->
        <div class="px-5 pt-5 pb-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 class="font-bold text-gray-800">กำหนดวิชา</h3>
            <p class="text-xs text-gray-400">${DAY_NAMES[dow]} คาบ ${period}${p ? ` (${p.start_time?.slice(0,5)}–${p.end_time?.slice(0,5)})` : ''}</p>
          </div>
          <button id="sp-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        <!-- Card body -->
        <div class="overflow-auto flex-1 px-5 py-4">
          <div class="border-2 rounded-xl overflow-hidden" style="border-color:${clr.dot}">
            <!-- Subject info -->
            <div class="px-4 py-3 flex items-start gap-3" style="background:${clr.dot}18">
              <button id="sp-color" type="button"
                class="w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow mt-0.5"
                style="background:${clr.dot}" title="คลิกเปลี่ยนสี"></button>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${initSubjName}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${entry?.class_name ?? ''}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${entry?.teacher_name ?? ''}" placeholder="ชื่อครู (ไม่บังคับ)" />
                  <button id="sp-hide-teacher" type="button" class="text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap">ไม่แสดง</button>
                </div>
              </div>
            </div>
            <!-- Sessions -->
            <div id="sp-sessions" class="px-4 pt-3 pb-2 space-y-1.5">
              ${sessions.map((s, si) => `
              <div class="flex items-center gap-1.5 sp-sess-row" data-si="${si}">
                <select class="sp-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${si}">
                  ${dayOpts}
                </select>
                <select class="sp-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-si="${si}">
                  ${periodOpts}
                </select>
                <select class="sp-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-si="${si}">
                  <option value="1">1 คาบ</option>
                  <option value="2">2 คาบ</option>
                  <option value="3">3 คาบ</option>
                  <option value="4">4 คาบ</option>
                </select>
                <button type="button" class="sp-del-sess text-red-300 hover:text-red-500 text-base" data-si="${si}">✕</button>
              </div>`).join('')}
              <button id="sp-add-sess" type="button"
                class="w-full py-1.5 rounded-lg border border-dashed border-gray-200 text-[11px] text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition">
                + เพิ่มคาบ
              </button>
            </div>
            <!-- Footer -->
            <div class="px-4 pb-3 flex gap-2">
              <button id="sp-save" type="button"
                class="flex-1 py-2 rounded-xl text-xs font-semibold text-white transition"
                style="background:${clr.dot}">บันทึก</button>
              ${entry ? `<button id="sp-delete" type="button"
                class="py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50">ลบ</button>` : ''}
            </div>
          </div>
          <datalist id="sp-subj-list">${subjSuggestions}</datalist>
          <datalist id="sp-room-list">${roomSuggestions}</datalist>
        </div>
        <!-- Global cancel -->
        <div class="px-5 pb-5 pt-2 border-t border-gray-100 flex-shrink-0">
          <button id="sp-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`

    // Set session dropdown values
    sessions.forEach((s, si) => {
      const row = wrap.querySelector(`.sp-sess-row[data-si="${si}"]`)
      if (!row) return
      row.querySelector('.sp-dow').value    = s.day_of_week ?? dow
      row.querySelector('.sp-period').value = s.period_no  ?? period
      row.querySelector('.sp-span').value   = s.span_periods ?? 1
    })

    // Bind events
    wrap.querySelector('#sp-close').addEventListener('click', () => wrap.remove())
    wrap.querySelector('#sp-cancel').addEventListener('click', () => wrap.remove())

    wrap.querySelector('#sp-color').addEventListener('click', () => {
      colorIdx = (colorIdx + 1) % COLOR_PRESETS.length; _render()
    })
    wrap.querySelector('#sp-hide-teacher').addEventListener('click', () => {
      wrap.querySelector('#sp-teacher').value = ''
    })

    wrap.querySelectorAll('.sp-dow').forEach(el =>
      el.addEventListener('change', () => { sessions[+el.dataset.si].day_of_week = +el.value }))
    wrap.querySelectorAll('.sp-period').forEach(el =>
      el.addEventListener('change', () => { sessions[+el.dataset.si].period_no = +el.value }))
    wrap.querySelectorAll('.sp-span').forEach(el =>
      el.addEventListener('change', () => { sessions[+el.dataset.si].span_periods = +el.value }))
    wrap.querySelectorAll('.sp-del-sess').forEach(btn =>
      btn.addEventListener('click', () => {
        sessions.splice(+btn.dataset.si, 1)
        if (!sessions.length) sessions.push({ day_of_week: dow, period_no: period, span_periods: 1 })
        _render()
      }))
    wrap.querySelector('#sp-add-sess').addEventListener('click', () => {
      sessions.push({ day_of_week: dow, period_no: PERIOD_NOS[0] ?? period, span_periods: 1 })
      _render()
    })

    wrap.querySelector('#sp-delete')?.addEventListener('click', async () => {
      wrap.remove(); await onDelete()
    })

    wrap.querySelector('#sp-save').addEventListener('click', async () => {
      const subjName  = wrap.querySelector('#sp-subj-name').value.trim() || null
      const className = wrap.querySelector('#sp-class').value.trim()     || null
      const teachName = wrap.querySelector('#sp-teacher').value.trim()   || null
      const subjId    = subjects.find(s => s.subject_name === subjName)?.id ?? null

      // บันทึกสีลง localStorage
      if (subjName) {
        const cm = JSON.parse(localStorage.getItem(colorStorageKey) ?? '{}')
        cm[_scheduleColorKey(subjName, className, subjId)] = colorIdx
        localStorage.setItem(colorStorageKey, JSON.stringify(cm))
      }

      wrap.remove()
      await onSave({
        day_of_week:  sessions[0]?.day_of_week ?? dow,
        period_no:    sessions[0]?.period_no   ?? period,
        span_periods: sessions[0]?.span_periods ?? 1,
        subject_id:   subjId,
        subject_name: subjName,
        class_name:   className,
        teacher_name: teachName,
        note: null,
        academic_year: academicYear,
        semester,
      })
    })
  }

  _render()
}

// ─── Vision Upload — Gemini วิเคราะห์รูปตาราง ────────────────────────────────
async function _openVisionUpload(teacher, subjects, periods, academicYear, semester, geminiKey, cfg) {
  document.getElementById('vision-upload')?.remove()

  // โหลด rooms สำหรับ suggest class_name
  const allRooms = await getUniqueRooms().catch(()=>[])
  const religRooms = await getUniqueReligionRooms().catch(()=>[])
  const allRoomList = [...new Set([...allRooms, ...religRooms])].sort()

  const wrap = document.createElement('div')
  wrap.id = 'vision-upload'
  wrap.className = 'fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4'
  wrap.innerHTML = `
    <div class="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[95vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">🤖 วิเคราะห์รูปตารางสอน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อัปโหลดรูปตารางสอน → AI จะเติมข้อมูลลงตารางให้</p>
        </div>
        <button id="vision-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="overflow-auto flex-1 px-5 py-4 space-y-4">
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700">
          💡 แต่ละช่องตารางมี 3 บรรทัด: <b>ชื่อวิชา</b> (ตัวหนา) / <b>ชั้น/ห้อง</b> / <b>ชื่อครู</b>
        </div>
        <label id="vision-label"
          class="flex flex-col items-center gap-3 border-2 border-dashed border-violet-200
                 rounded-xl py-8 cursor-pointer hover:bg-violet-50 hover:border-violet-400 transition">
          <span class="text-5xl">📷</span>
          <span class="text-sm font-medium text-gray-600">แตะเพื่อเลือกรูปตาราง</span>
          <span class="text-xs text-gray-400">JPG, PNG — ควรชัดเจนและครบทั้งตาราง</span>
          <input type="file" id="vision-file" accept="image/*" class="sr-only" />
        </label>
        <div id="vision-preview" class="hidden">
          <img id="vision-img" class="w-full rounded-xl max-h-40 object-contain border border-gray-100" />
        </div>
        <p id="vision-status" class="text-sm text-center text-gray-400 hidden"></p>
        <div id="vision-result" class="hidden space-y-3">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            ผลการวิเคราะห์ — แก้ไขได้ก่อนบันทึก
          </p>
          <div id="vision-groups" class="space-y-3"></div>
          <button id="vision-add-group"
            class="w-full py-2 rounded-xl border-2 border-dashed border-gray-200
                   text-xs text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition">
            + เพิ่มกลุ่มวิชาใหม่
          </button>
        </div>
      </div>
      <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="vision-cancel" class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="vision-analyze" class="flex-1 py-3 rounded-xl bg-violet-600 text-white text-sm font-bold hover:bg-violet-700 disabled:opacity-50" disabled>
          🔍 วิเคราะห์
        </button>
        <button id="vision-save" class="hidden flex-1 py-3 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700">
          ✅ บันทึก
        </button>
      </div>
    </div>`
  document.body.appendChild(wrap)

  wrap.querySelector('#vision-cancel').addEventListener('click', () => wrap.remove())
  wrap.querySelector('#vision-close').addEventListener('click', () => wrap.remove())

  // ─── State ────────────────────────────────────────────────────────────────
  let imgBase64 = null
  let imgMimeType = 'image/jpeg'
  // groups: [{key, subject_name, class_name, teacher_name, subject_id, color_idx, sessions:[{dow,period,span}]}]
  let groups = []

  const DAY_NAMES  = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์']
  const PERIOD_NOS = periods.map(p => p.period_no)
  const colorStorageKey = `scheduleColors_${teacher?.id ?? 'x'}`
  let colorMap = {}
  try { colorMap = JSON.parse(localStorage.getItem(colorStorageKey) ?? '{}') } catch {}
  const _scheduleColorKey = (subjectName, className) => {
    const subj = String(subjectName ?? '').trim()
    const cls  = String(className ?? '').trim()
    return subj && cls ? `${subj} — ${cls}` : subj
  }

  const COLORS = [
    {cls:'bg-emerald-100 text-emerald-800', dot:'#10b981'},
    {cls:'bg-indigo-100 text-indigo-800',   dot:'#6366f1'},
    {cls:'bg-amber-100 text-amber-800',     dot:'#f59e0b'},
    {cls:'bg-rose-100 text-rose-800',       dot:'#f43f5e'},
    {cls:'bg-cyan-100 text-cyan-800',       dot:'#06b6d4'},
    {cls:'bg-violet-100 text-violet-800',   dot:'#8b5cf6'},
    {cls:'bg-lime-100 text-lime-800',       dot:'#84cc16'},
    {cls:'bg-orange-100 text-orange-800',   dot:'#f97316'},
    {cls:'bg-pink-100 text-pink-800',       dot:'#ec4899'},
    {cls:'bg-teal-100 text-teal-800',       dot:'#14b8a6'},
  ]

  // ─── Render groups ────────────────────────────────────────────────────────
  function _renderGroups() {
    const container = wrap.querySelector('#vision-groups')
    if (!container) return

    const dayOpts    = DAY_NAMES.map((n,i)=>`<option value="${i}">${n}</option>`).join('')
    const periodOpts = PERIOD_NOS.map(n=>`<option value="${n}">คาบ ${n}</option>`).join('')
    const subjSuggestions = subjects.map(s => `<option value="${s.subject_name}">`).join('')
    const roomSuggestions = allRoomList.map(r => `<option value="${r}">`).join('')

    container.innerHTML = ''
    groups.forEach((g, gi) => {
      const ci  = g.color_idx ?? (gi % COLORS.length)
      const clr = COLORS[ci]
      const card = document.createElement('div')
      card.className = 'border-2 rounded-xl overflow-hidden vg-card'
      card.style.borderColor = clr.dot
      card.innerHTML = `
        <!-- Group header -->
        <div class="px-4 py-3 flex items-start gap-3" style="background:${clr.dot}18">
          <button type="button" class="vg-color w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow mt-0.5"
            style="background:${clr.dot}" title="คลิกเปลี่ยนสี" data-gi="${gi}"></button>
          <div class="flex-1 space-y-1.5 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
              <input list="subj-list-${gi}" class="vg-subj-name flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                value="${g.subject_name ?? ''}" placeholder="ชื่อวิชา" data-gi="${gi}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
              <input list="room-list-${gi}" class="vg-class flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                value="${g.class_name ?? ''}" placeholder="ชั้น/ห้อง เช่น ม.6/2" data-gi="${gi}" />
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
              <input class="vg-teacher flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                value="${g.teacher_name ?? ''}" placeholder="ชื่อครู (ไม่บังคับ)" data-gi="${gi}" />
              <button type="button" class="vg-hide-teacher text-[11px] text-gray-400 hover:text-gray-600 whitespace-nowrap" data-gi="${gi}">
                ไม่แสดงชื่อครู
              </button>
            </div>
          </div>
        </div>
        <!-- Sessions -->
        <div class="px-4 pt-3 pb-2 space-y-1.5 vg-sessions" data-gi="${gi}">
          ${g.sessions.map((s, si) => `
          <div class="flex items-center gap-1.5 vs-row" data-gi="${gi}" data-si="${si}">
            <select class="vs-dow border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${gi}" data-si="${si}">
              ${dayOpts}
            </select>
            <select class="vs-period border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white flex-1" data-gi="${gi}" data-si="${si}">
              ${periodOpts}
            </select>
            <select class="vs-span border border-gray-100 rounded-lg px-2 py-1 text-xs bg-white" data-gi="${gi}" data-si="${si}">
              <option value="1">1 คาบ</option>
              <option value="2">2 คาบ</option>
              <option value="3">3 คาบ</option>
              <option value="4">4 คาบ</option>
            </select>
            <button type="button" class="vs-del text-red-300 hover:text-red-500 text-base" data-gi="${gi}" data-si="${si}">✕</button>
          </div>`).join('')}
          <button type="button" class="vg-add-session w-full py-1.5 rounded-lg border border-dashed border-gray-200
            text-[11px] text-gray-400 hover:border-indigo-300 hover:text-indigo-400 transition" data-gi="${gi}">
            + เพิ่มคาบ
          </button>
        </div>
        <!-- Group footer: บันทึกกลุ่มนี้ + ลบกลุ่ม -->
        <div class="px-4 pb-3 flex gap-2">
          <button type="button" class="vg-save-group flex-1 py-2 rounded-xl text-xs font-semibold text-white transition"
            style="background:${clr.dot}" data-gi="${gi}">
            ✅ บันทึกกลุ่มนี้
          </button>
          <button type="button" class="vg-del-group py-2 px-3 rounded-xl border border-red-200 text-xs text-red-400 hover:bg-red-50 transition" data-gi="${gi}">
            ลบกลุ่ม
          </button>
        </div>
        <datalist id="subj-list-${gi}">${subjSuggestions}</datalist>
        <datalist id="room-list-${gi}">${roomSuggestions}</datalist>`

      container.appendChild(card)

      // Set session values
      g.sessions.forEach((s, si) => {
        const row = card.querySelector(`.vs-row[data-gi="${gi}"][data-si="${si}"]`)
        if (!row) return
        row.querySelector('.vs-dow').value    = s.day_of_week ?? 0
        row.querySelector('.vs-period').value = s.period_no ?? 1
        row.querySelector('.vs-span').value   = s.span_periods ?? 1
      })
    })

    // Bind events
    container.querySelectorAll('.vg-color').forEach(btn => {
      btn.addEventListener('click', () => {
        const gi = +btn.dataset.gi
        groups[gi].color_idx = ((groups[gi].color_idx ?? gi) + 1) % COLORS.length
        _renderGroups()
      })
    })
    container.querySelectorAll('.vg-subj-name').forEach(el =>
      el.addEventListener('input', () => { groups[+el.dataset.gi].subject_name = el.value }))
    container.querySelectorAll('.vg-class').forEach(el =>
      el.addEventListener('input', () => { groups[+el.dataset.gi].class_name = el.value }))
    container.querySelectorAll('.vg-teacher').forEach(el =>
      el.addEventListener('input', () => { groups[+el.dataset.gi].teacher_name = el.value }))
    container.querySelectorAll('.vg-hide-teacher').forEach(btn =>
      btn.addEventListener('click', () => {
        const gi = +btn.dataset.gi
        groups[gi].teacher_name = ''
        const inp = container.querySelector(`.vg-teacher[data-gi="${gi}"]`)
        if (inp) inp.value = ''
      }))
    container.querySelectorAll('.vg-del-group').forEach(btn =>
      btn.addEventListener('click', () => { groups.splice(+btn.dataset.gi, 1); _renderGroups() }))
    container.querySelectorAll('.vg-save-group').forEach(btn =>
      btn.addEventListener('click', async () => {
        const gi  = +btn.dataset.gi
        const g   = groups[gi]
        const origText = btn.textContent
        btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
        try {
          // บันทึกสีลง localStorage
          const newColorMap = JSON.parse(localStorage.getItem(colorStorageKey) ?? '{}')
          const colorKey = _scheduleColorKey(g.subject_name, g.class_name)
          if (colorKey) newColorMap[colorKey] = g.color_idx ?? 0
          localStorage.setItem(colorStorageKey, JSON.stringify(newColorMap))

          await Promise.all(g.sessions.map(s => upsertScheduleEntry({
            teacher_id:   teacher.id,
            subject_id:   g.subject_id ?? null,
            subject_name: g.subject_name?.trim() || null,
            class_name:   g.class_name?.trim()   || null,
            teacher_name: g.teacher_name?.trim()  || null,
            day_of_week:  s.day_of_week,
            period_no:    s.period_no,
            span_periods: s.span_periods ?? 1,
            academic_year: academicYear,
            semester,
          })))
          btn.textContent = '✅ บันทึกแล้ว'
          btn.style.background = '#16a34a'
          setTimeout(() => { btn.disabled = false; btn.textContent = origText; btn.style.background = '' ; btn.style.background = COLORS[g.color_idx ?? 0]?.dot ?? '' }, 2000)
          // อัปเดตตารางหลังบ้านแบบ silent (ไม่ปิด popup)
          renderScheduleGrid(teacher, academicYear, semester, cfg).catch(()=>{})
        } catch (err) {
          showToast('บันทึกกลุ่มนี้ไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          btn.disabled = false; btn.textContent = origText
        }
      }))
    container.querySelectorAll('.vs-dow').forEach(el =>
      el.addEventListener('change', () => { groups[+el.dataset.gi].sessions[+el.dataset.si].day_of_week = +el.value }))
    container.querySelectorAll('.vs-period').forEach(el =>
      el.addEventListener('change', () => { groups[+el.dataset.gi].sessions[+el.dataset.si].period_no = +el.value }))
    container.querySelectorAll('.vs-span').forEach(el =>
      el.addEventListener('change', () => { groups[+el.dataset.gi].sessions[+el.dataset.si].span_periods = +el.value }))
    container.querySelectorAll('.vs-del').forEach(btn =>
      btn.addEventListener('click', () => {
        const g = groups[+btn.dataset.gi]
        g.sessions.splice(+btn.dataset.si, 1)
        if (!g.sessions.length) groups.splice(+btn.dataset.gi, 1)
        _renderGroups()
      }))
    container.querySelectorAll('.vg-add-session').forEach(btn =>
      btn.addEventListener('click', () => {
        groups[+btn.dataset.gi].sessions.push({ day_of_week: 0, period_no: PERIOD_NOS[0] ?? 1, span_periods: 1 })
        _renderGroups()
      }))
  }

  // ─── Upload file ──────────────────────────────────────────────────────────
  wrap.querySelector('#vision-file').addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return
    imgMimeType = file.type || 'image/jpeg'
    const reader = new FileReader()
    reader.onload = ev => {
      imgBase64 = ev.target.result.split(',')[1]
      wrap.querySelector('#vision-img').src = ev.target.result
      wrap.querySelector('#vision-preview').classList.remove('hidden')
      wrap.querySelector('#vision-analyze').disabled = false
      wrap.querySelector('#vision-label').classList.add('hidden')
    }
    reader.readAsDataURL(file)
  })

  // ─── Analyze ──────────────────────────────────────────────────────────────
  wrap.querySelector('#vision-analyze').addEventListener('click', async () => {
    if (!imgBase64) return
    const btn    = wrap.querySelector('#vision-analyze')
    const status = wrap.querySelector('#vision-status')
    btn.disabled = true; btn.textContent = '⏳ กำลังวิเคราะห์...'
    status.textContent = 'กำลังส่งรูปไป Gemini AI...'; status.classList.remove('hidden')
    try {
      if (!geminiKey) throw new Error('ยังไม่ได้ตั้งค่า Gemini API Key ในหน้าแอดมิน')

      const subjList   = subjects.map(s=>`"${s.subject_name}" (id:${s.id})`).join(', ')
      const periodList = periods.map(p=>`คาบ ${p.period_no}: ${p.start_time?.slice(0,5)}-${p.end_time?.slice(0,5)}`).join(', ')
      const prompt = `วิเคราะห์ตารางสอนในภาพนี้อย่างละเอียด
แต่ละช่องในตารางมี 3 ส่วน: บรรทัด1=ชื่อวิชา(ตัวหนาภาษาอังกฤษ), บรรทัด2=ชั้น/ห้องเรียน, บรรทัด3=ชื่อครู
คาบเรียน: ${periodList}
วันเรียน: 0=อาทิตย์,1=จันทร์,2=อังคาร,3=พุธ,4=พฤหัส,5=ศุกร์
วิชาที่ครูสอน (อาจตรงกับในตาราง): ${subjList || 'ไม่ระบุ'}

สำคัญ: จัดกลุ่มตามวิชา+ห้องเรียน เช่น MATH ม.5/Ash-Shafi'i ที่สอนหลายวัน ให้อยู่ในกลุ่มเดียวกัน

Return JSON array เท่านั้น (ไม่มีข้อความอื่น):
[{
  "subject_name": "MATH",
  "class_name": "M.5 Ash-Shafi'i",
  "teacher_name": "Hambali Waji",
  "subject_id": null,
  "sessions": [
    {"day_of_week":0,"period_no":1,"span_periods":2},
    {"day_of_week":1,"period_no":3,"span_periods":1}
  ]
}]
- subject_id: ใส่ id ถ้า subject_name ตรงกับวิชาในรายการ ถ้าไม่ตรงให้ null
- span_periods: 1,2,3,4 ตามจำนวนช่องที่รวมกัน (merged cells)
- ช่องว่างไม่ต้องใส่`

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/${cfg.geminiModel || 'gemini-2.5-flash'}:generateContent?key=${geminiKey}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [
            { text: prompt },
            { inline_data: { mime_type: imgMimeType, data: imgBase64 } }
          ]}]})
        }
      )
      const json = await res.json()
      if (json.error) throw new Error(`Gemini: ${json.error.message ?? json.error.status}`)

      const text  = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
      const match = text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\[[\s\S]*?\])/)
      const jsonStr = match ? (match[1] ?? match[0]) : null
      if (!jsonStr) { console.error('Raw:', text); throw new Error('AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง') }

      const raw = JSON.parse(jsonStr)
      groups = raw.map((g, i) => ({
        ...g,
        color_idx: colorMap[_scheduleColorKey(g.subject_name, g.class_name)] ?? colorMap[g.subject_name ?? ''] ?? (i % COLORS.length),
        sessions: (g.sessions ?? []).map(s => ({ ...s })),
      }))

      _renderGroups()
      wrap.querySelector('#vision-result').classList.remove('hidden')
      wrap.querySelector('#vision-save').classList.remove('hidden')
      const total = groups.reduce((n, g) => n + g.sessions.length, 0)
      status.textContent = `✅ พบ ${groups.length} กลุ่มวิชา ${total} คาบ — ตรวจสอบแล้วกด "บันทึก"`
    } catch (err) {
      console.error('Vision error:', err)
      status.innerHTML = `<span class="text-red-500">❌ ${err.message ?? 'ไม่ทราบสาเหตุ'}</span><br/><span class="text-gray-400 text-xs">ดู Console เพื่อดูรายละเอียด</span>`
    } finally {
      btn.disabled = false; btn.textContent = '🔍 วิเคราะห์อีกครั้ง'
    }
  })

  // เพิ่มกลุ่มวิชาใหม่เอง
  wrap.querySelector('#vision-add-group').addEventListener('click', () => {
    groups.push({ subject_name: '', class_name: '', teacher_name: '', subject_id: null,
      color_idx: groups.length % COLORS.length, sessions: [{ day_of_week: 0, period_no: PERIOD_NOS[0] ?? 1, span_periods: 1 }] })
    wrap.querySelector('#vision-result').classList.remove('hidden')
    wrap.querySelector('#vision-save').classList.remove('hidden')
    _renderGroups()
  })

  // ─── Save ─────────────────────────────────────────────────────────────────
  wrap.querySelector('#vision-save').addEventListener('click', async () => {
    const btn = wrap.querySelector('#vision-save')
    btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
    try {
      // บันทึกสีลง localStorage
      const newColorMap = {}
      groups.forEach(g => {
        const colorKey = _scheduleColorKey(g.subject_name, g.class_name)
        if (colorKey) newColorMap[colorKey] = g.color_idx ?? 0
      })
      localStorage.setItem(colorStorageKey, JSON.stringify({...colorMap, ...newColorMap}))

      // flatten groups → entries
      const entries = []
      for (const g of groups) {
        for (const s of g.sessions) {
          entries.push({
            teacher_id:   teacher.id,
            subject_id:   g.subject_id ?? null,
            subject_name: g.subject_name?.trim() || null,
            class_name:   g.class_name?.trim()   || null,
            teacher_name: g.teacher_name?.trim()  || null,
            day_of_week:  s.day_of_week,
            period_no:    s.period_no,
            span_periods: s.span_periods ?? 1,
            academic_year: academicYear,
            semester,
          })
        }
      }
      await Promise.all(entries.map(e => upsertScheduleEntry(e)))
      wrap.remove()
      showToast(`บันทึก ${groups.length} กลุ่มวิชา (${entries.length} คาบ) ✅`, 'success')
      await renderScheduleGrid(teacher, academicYear, semester, cfg)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      btn.disabled = false; btn.textContent = '✅ บันทึก'
    }
  })
}

// ─── Schedule Builder (หลัง profile setup) ───────────────────────────────────
export async function renderScheduleBuilder(teacher, onComplete) {
  const cfg      = await getSystemConfig().catch(()=>({}))
  const curYear  = parseInt(cfg.academicYear ?? 2568)
  const curSem   = parseInt(cfg.semester ?? 1)
  const visionOn = cfg.scheduleVisionEnabled === 'true'
  const geminiKey= cfg.geminiApiKey ?? ''

  setActiveNav('schedule')
  setTitle('สร้างตารางสอน')

  setContent(`<div class="max-w-2xl mx-auto animate-fade">
    <div class="text-center mb-8">
      <div class="w-16 h-16 bg-gradient-to-tr from-indigo-400 to-violet-400 text-white
                  text-3xl rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
        🗓️
      </div>
      <h2 class="text-2xl font-bold text-gray-800">สร้างตารางสอน</h2>
      <p class="text-gray-500 text-sm mt-1">ภาค ${curSem} / ${curYear}</p>
    </div>

    ${visionOn && geminiKey ? `
    <div class="bg-violet-50 border border-violet-200 rounded-2xl p-6 mb-4">
      <div class="flex items-start gap-4">
        <div class="text-4xl flex-shrink-0">🤖</div>
        <div class="flex-1">
          <h3 class="font-bold text-violet-900 mb-1">แนะนำ: อัปโหลดรูปตาราง</h3>
          <p class="text-sm text-violet-700 mb-3">
            แคปหน้าจอตารางสอนที่โรงเรียนออกให้ แล้วให้ AI อ่านข้อมูลเติมลงตารางให้อัตโนมัติ
            จากนั้นตรวจสอบและแก้ไขได้
          </p>
          <button id="btn-open-vision"
            class="px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition">
            📷 อัปโหลดรูปตาราง
          </button>
        </div>
      </div>
    </div>
    <div class="text-center text-gray-400 text-sm mb-4">— หรือ —</div>` : ''}

    <div class="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 class="font-bold text-gray-800 mb-2">กรอกตารางเอง</h3>
      <p class="text-sm text-gray-500 mb-4">คลิกช่องตารางเพื่อเลือกวิชาที่สอนในแต่ละคาบ</p>
      <button id="btn-open-grid"
        class="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        ✏️ เปิดตารางสอน
      </button>
    </div>

    <div class="mt-6 text-center">
      <button id="btn-skip-schedule"
        class="text-sm text-gray-400 hover:text-gray-600 underline">
        ข้ามไปก่อน (กรอกทีหลังในเมนูตารางสอน)
      </button>
    </div>
  </div>`)

  const subjects = teacher ? await getMySubjects(teacher.id).catch(()=>[]) : []
  const periods  = await getPeriods().catch(()=>[])

  document.getElementById('btn-open-vision')?.addEventListener('click', () => {
    _openVisionUpload(teacher, subjects, periods, curYear, curSem, geminiKey, cfg)
  })
  document.getElementById('btn-open-grid')?.addEventListener('click', () => {
    renderScheduleGrid(teacher, curYear, curSem, cfg)
  })
  document.getElementById('btn-skip-schedule')?.addEventListener('click', () => {
    if (onComplete) onComplete()
  })
}
