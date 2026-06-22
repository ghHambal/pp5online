import {
  getMyClasses, getMySubjects, getDepartments,
  createClass, updateClass, deleteClass, enrollStudents, getSystemConfig,
  getRoomsByGrade, getStudentsByRoom, getStudentsByReligionRoom, getReligionRoomsByGrade,
  getScoreColumns, createScoreColumn, updateScoreColumn, deleteScoreColumn,
  getClassStudents, getClassRosterStudents, getStudentByCode,
  addStudentToClass, updateClassStudentActive, removeStudentFromClass,
  getUniqueRooms, getUniqueReligionRooms,
  getMySchedule, upsertScheduleEntry, deleteScheduleEntry, deleteScheduleByTeacher,
  getPeriods, getAllPeriods, getTeacherRoomColors, saveTeacherRoomColor,
  getClassScheduleLinks, linkClassToSchedule, unlinkClassFromSchedule,
  getClassrooms, assignClassroom, autoEnrollStudentsByRoom,
  getCourseDocLangSettings, saveCourseDocLangSettings, saveCourseDocLangEditors,
  getTeacherExamRequests, reviewExamRequest, updateExamResult,
  getTeacherPackageAccess,
  getTeacherClassesForLinking,
  getMyDonationRequests,
  getClassRandomizerState, saveClassRandomizerState, resetClassRandomizerPicks,
  getFlashcardDecks,
} from './api.js'
import QRCode from 'qrcode'
import { copySheetTemplate, getCopyTemplateForClass } from './sync.js'
import { supabase } from './supabase.js'
import { showToast, showDangerConfirm } from './ui.js'
import { openPP5Doc } from './pp5-doc.js'
import { renderClassForm, renderClassEditForm } from './teacher-class-forms.js'
import { renderScoreColumns } from './teacher-score-columns.js'
import { SCHEDULE_COLOR_PRESETS, colorMetaForHex, resolveScheduleColor, roomColorKey } from './teacher-schedule-colors.js'
import { renderGradesGrid } from './teacher-views-grades.js'
import { renderAttendanceGrid } from './teacher-views-attendance.js'
import {
  setContent, setTitle, setActiveNav, _htmlEsc, formatPhone,
  SELECT_CLS, INPUT_CLS, GRADE_OPTS, CREDIT_OPTS,
  _parseDateOnly, _dateInputValue, _fmtDate, _calcSixPeriodDates,
  _DAYS_TH_SHORT, _DAYS_TH_FULL,
  _nextPeriodMins, _scheduleChips, _countdownInfo, _activeRemainingDisplay,
  _resolveGeminiKey, _transparentEdgeDarkLogo,
  getMainContentRef, setMainContentRef, _generateSessions,
} from './teacher-views-utils.js'

export async function renderMyClasses(teacher) {
  setActiveNav('my-classes')
  setTitle('ห้องเรียนของฉัน', 'classes')
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)
  try {
    const [classes, copyCfg, roomColorRows, classrooms] = await Promise.all([
      getMyClasses(teacher?.id ?? null),
      getSystemConfig().catch(() => ({})),
      teacher?.id ? getTeacherRoomColors(teacher.id).catch(() => []) : Promise.resolve([]),
      getClassrooms().catch(() => []),
    ])
    const classroomMap = Object.fromEntries(classrooms.map(r => [r.id, r]))
    const academicYear = parseInt(copyCfg.academicYear ?? 2568)
    const semester     = parseInt(copyCfg.semester ?? 1)
    const [schedule, links, periods] = await Promise.all([
      teacher?.id ? getMySchedule(teacher.id, academicYear, semester).catch(() => []) : Promise.resolve([]),
      teacher?.id ? getClassScheduleLinks(teacher.id).catch(() => []) : Promise.resolve([]),
      getPeriods().catch(() => []),
    ])
    const linksByClass  = {}
    links.forEach(l => {
      if (!linksByClass[l.class_id]) linksByClass[l.class_id] = []
      linksByClass[l.class_id].push(l.teacher_schedule_id)
    })
    const scheduleMap = Object.fromEntries(schedule.map(s => [s.id, s]))
    const periodMap   = Object.fromEntries(periods.map(p => [p.period_no, p]))

    const roomColorMap = Object.fromEntries((roomColorRows ?? []).map(r => [r.room_key, r.color_hex]))
    window._classCache  = Object.fromEntries(classes.map(c => [c.id, c]))
    window._classesFlat = classes
    const courseGroupMap = new Map()
    classes.forEach(c => {
      const ms = c.master_subjects ?? {}
      const keyParts = [
        c.course_id ?? ms.id ?? '',
        ms.subject_code ?? '',
        ms.subject_name ?? '',
        ms.subject_group ?? '',
      ]
      const key = keyParts.some(Boolean) ? keyParts.join('|') : `class-${c.id}`
      if (!courseGroupMap.has(key)) {
        courseGroupMap.set(key, { key, masterSubject: ms, classes: [] })
      }
      courseGroupMap.get(key).classes.push(c)
    })
    const courseGroups = [...courseGroupMap.values()]
      .map(group => ({
        ...group,
        classes: group.classes.sort((a, b) => {
          const aNext = _nextPeriodMins(a.id, linksByClass, scheduleMap, periodMap)
          const bNext = _nextPeriodMins(b.id, linksByClass, scheduleMap, periodMap)
          if (aNext !== bNext) return aNext - bNext
          return String(a.class_name ?? '').localeCompare(String(b.class_name ?? ''), 'th')
        }),
      }))
      .sort((a, b) => {
        const aNext = Math.min(...a.classes.map(c => _nextPeriodMins(c.id, linksByClass, scheduleMap, periodMap)))
        const bNext = Math.min(...b.classes.map(c => _nextPeriodMins(c.id, linksByClass, scheduleMap, periodMap)))
        if (aNext !== Infinity && bNext !== Infinity && aNext !== bNext) return aNext - bNext
        return String(a.masterSubject?.subject_name ?? '').localeCompare(String(b.masterSubject?.subject_name ?? ''), 'th')
      })
    setContent(`<div class="animate-fade">
      <div class="mb-4"></div>
      ${!classes.length ? `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
        <p class="text-4xl mb-3">🏫</p>
        <p class="font-medium">ยังไม่มีห้องเรียน</p>
        <p class="text-xs mt-1">ไปที่ "คอร์สวิชาของฉัน" แล้วกด "＋ห้อง"</p>
      </div>` : `
      <div class="space-y-5">
        ${courseGroups.map(group => {
          const groupMs = group.masterSubject ?? {}
          return `
          <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3">
              <div class="min-w-0">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-mono rounded-full">${groupMs.subject_code??'—'}</span>
                  <h3 class="font-bold text-gray-800 text-base">${groupMs.subject_name??'—'}</h3>
                </div>
                <p class="text-xs text-gray-400 mt-1">${group.classes.length} ห้องเรียนในคอร์สนี้</p>
              </div>
            </div>
            <div class="grid gap-3 p-4 md:grid-cols-2">
        ${group.classes.map(c => {
          const ms = c.master_subjects
          const copyTemplate = getCopyTemplateForClass(copyCfg, c)
          const isReligionGroup = ['AGM', 'AGMVOC'].includes(ms?.subject_group)
          const colorInput = {
            teacherId: teacher?.id,
            className: c.class_name,
            subjectName: ms?.subject_name,
            fallbackId: c.id,
          }
          const classColor = resolveScheduleColor(colorInput, roomColorMap)
          if (!window._classColorCache) window._classColorCache = {}
          window._classColorCache[c.id] = classColor
          const groupBadge = isReligionGroup
            ? { text: 'กลุ่มวิชาศาสนา', cls: 'bg-amber-50 text-amber-700' }
            : c.skill_group
              ? { text: `กลุ่มทักษะ: ${c.skill_group}`, cls: 'bg-blue-50 text-blue-700' }
              : null
          const cr        = c.classroom_id ? classroomMap[c.classroom_id] : null
          const nextMins  = _nextPeriodMins(c.id, linksByClass, scheduleMap, periodMap)
          const countdown = (() => {
            if (!(linksByClass[c.id]??[]).length)
              return `<button onclick="event.stopPropagation();window._openCombinedEdit(${c.id},'schedule')"
                class="text-[11px] text-indigo-500 hover:text-indigo-700 font-medium hover:underline transition">🔗 เชื่อมตารางสอน</button>`
            if (nextMins === Infinity)
              return `<span class="text-[11px] text-gray-400">📅 ไม่พบข้อมูลตาราง</span>`
            if (nextMins <= 0)
              return `<span class="text-[11px] text-emerald-600 font-semibold">🟢 กำลังสอนอยู่</span>`
            if (nextMins < 60)
              return `<span class="text-[11px] text-emerald-600">⏱ สอนในอีก ${Math.round(nextMins)} นาที</span>`
            const h = Math.floor(nextMins/60), m = Math.round(nextMins%60)
            if (h < 24)
              return `<span class="text-[11px] text-blue-600">⏱ สอนในอีก ${h} ชม. ${m} นาที</span>`
            return `<span class="text-[11px] text-gray-500">⏱ สอนในอีก ${Math.floor(h/24)} วัน</span>`
          })()

          return `
          <div class="rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer group"
               style="background:${classColor.soft}; border-color:${classColor.border}"
               onclick="window._openClassDetail(${c.id})">
            <div class="p-4">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5 mb-1.5 flex-wrap">
                    <span class="px-2 py-0.5 bg-white/80 text-emerald-700 text-xs font-mono rounded-full">${ms?.subject_code??'—'}</span>
                    ${groupBadge ? `<span class="px-2 py-0.5 ${groupBadge.cls} text-xs rounded-full">${groupBadge.text}</span>` : ''}
                    ${c.google_sheet_id
                      ? `<span class="px-2 py-0.5 bg-white/80 text-green-700 text-xs rounded-full">✓ Sheet</span>`
                      : ''}
                  </div>
                  <h3 class="font-bold text-gray-800 text-base">${ms?.subject_name??'—'}</h3>
                  <p class="text-sm text-gray-500 mt-0.5">ห้อง: <span class="font-semibold" style="color:${classColor.text}">${c.class_name}</span>
                    ${cr ? `<span class="ml-2 text-[11px] text-gray-400">📍 ${cr.building} ${cr.room_number}</span>` : ''}
                  </p>
                </div>
                <div class="flex gap-1 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <button onclick="event.stopPropagation();window._openClassDashboard(${c.id})"
                    class="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-white/70 rounded-lg transition text-sm" title="Dashboard ห้องเรียน">📈</button>
                  <button onclick="event.stopPropagation();window._copyClass(${c.id},'${c.class_name?.replace(/'/g,"\\'")||''}')"
                    class="p-1.5 text-gray-400 hover:text-violet-600 hover:bg-white/70 rounded-lg transition text-sm" title="ทำสำเนาห้องเรียน">📋</button>
                  <button onclick="event.stopPropagation();window._openCombinedEdit(${c.id})"
                    class="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition text-sm" title="แก้ไข">✏️</button>
                  <button onclick="event.stopPropagation();window._deleteClass(${c.id},'${c.class_name?.replace(/'/g,"\\'") || ''}')"
                    class="p-1.5 text-red-300 hover:text-red-500 hover:bg-white/70 rounded-lg transition text-sm" title="ลบ">🗑️</button>
                </div>
              </div>
              <div class="mt-3 pt-2.5 border-t border-white/60 flex items-center justify-between">
                ${countdown}
                <span class="text-[11px] text-gray-400 group-hover:text-indigo-500 transition">เปิดห้องเรียน →</span>
              </div>
            </div>
          </div>`
        }).join('')}
            </div>
          </section>`
        }).join('')}
      </div>`}
    </div>`)
    window._openPP5Doc     = (classId) => openPP5Doc(classId)
    window._openClassDetail = (classId) => renderClassDetail(teacher, classId, { classes, scheduleMap, linksByClass, periodMap, classrooms, copyCfg })
    window._openClassDashboard = async (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls) return
      const { openClassDashboard } = await import('./teacher-views-dashboard.js')
      openClassDashboard(classId, cls, window._pp5DonorTierIndex ?? 0, window._pp5SystemCfg ?? {})
    }
    window._openCombinedEdit = (classId, tab = 'info') => {
      const cls = window._classCache?.[classId]
      if (cls) _openCombinedEditModal(teacher, cls, classrooms, schedule, linksByClass, periodMap, scheduleMap, () => renderMyClasses(teacher), tab)
    }

    window._assignClassroom = (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls) return
      const buildings = [...new Set(classrooms.map(r => r.building))]
      document.getElementById('assign-room-modal')?.remove()
      const modal = document.createElement('div')
      modal.id = 'assign-room-modal'
      modal.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4'
      modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 mb-1">📍 ระบุห้องสอน</h3>
          <p class="text-xs text-gray-400 mb-4">${cls.class_name} · ${cls.master_subjects?.subject_name ?? ''}</p>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
              <select id="arm-building" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคาร —</option>
                ${buildings.map(b => `<option value="${b}">${b}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
              <select id="arm-room" class="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm bg-white">
                <option value="">— เลือกอาคารก่อน —</option>
              </select>
            </div>
            <div class="flex gap-3 pt-1">
              <button id="arm-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="arm-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
            </div>
          </div>
        </div>`
      document.body.appendChild(modal)
      const buildSel = modal.querySelector('#arm-building')
      const roomSel  = modal.querySelector('#arm-room')
      // pre-select current
      if (cls.classroom_id && classroomMap[cls.classroom_id]) {
        const cr = classroomMap[cls.classroom_id]
        buildSel.value = cr.building
        buildSel.dispatchEvent(new Event('change'))
      }
      buildSel.addEventListener('change', () => {
        const b = buildSel.value
        const rooms = classrooms.filter(r => r.building === b)
        roomSel.innerHTML = `<option value="">— เลือกห้อง —</option>` +
          rooms.map(r => {
            const label = r.name ? `${r.room_number} — ${r.name}` : r.room_number
            const sel = r.id === cls.classroom_id ? 'selected' : ''
            return `<option value="${r.id}" ${sel}>${label}</option>`
          }).join('')
      })
      modal.querySelector('#arm-cancel').addEventListener('click', () => modal.remove())
      modal.querySelector('#arm-save').addEventListener('click', async () => {
        const btn = modal.querySelector('#arm-save')
        const roomId = roomSel.value ? parseInt(roomSel.value) : null
        btn.disabled = true; btn.textContent = '⏳'
        try {
          await assignClassroom(classId, roomId)
          // update cache immediately so card re-renders with room info
          if (window._classCache?.[classId]) {
            window._classCache[classId].classroom_id = roomId
          }
          showToast('บันทึกห้องสอนแล้ว ✅', 'success')
          modal.remove()
          renderMyClasses(teacher)
        } catch (e) {
          showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error')
          btn.disabled = false; btn.textContent = 'บันทึก'
        }
      })
    }
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
      const confirmed = await showDangerConfirm({
        title: `ลบห้องเรียน "${name}"?`,
        message: 'การลบห้องเรียนจะไม่สามารถย้อนกลับได้',
        detail: 'ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร',
        confirmText: 'ลบห้องเรียน',
      })
      if (!confirmed) return
      try {
        await deleteClass(classId)
        showToast(`ลบ "${name}" แล้ว`, 'success')
        renderMyClasses(teacher)
      } catch (err) { showToast('ลบไม่สำเร็จ: '+(err.message??''), 'error') }
    }

    window._copyClass = (classId) => {
      const src = window._classCache?.[classId]
      if (!src) return
      // สร้าง course object จาก master_subjects ของต้นฉบับ
      const ms = src.master_subjects ?? {}
      const course = {
        id:           src.course_id,
        subject_name: ms.subject_name ?? '—',
        subject_code: ms.subject_code ?? '',
        credit:       ms.credit ?? '',
        grade_level:  ms.grade_level ?? '',
        dept:         ms.dept ?? src.dept ?? '',
        subject_group: ms.subject_group ?? '',
      }
      renderClassForm(teacher, course, {
        cloneFrom: classId,
        srcSkill:  src.skill_group ?? '',
      })
    }

    const _openPrintableRoster = async (cls, type, orientation = 'landscape') => {
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
        const printLogoUrl = await _transparentEdgeDarkLogo(logoUrl)
        const title = type === 'score' ? 'ใบรายชื่อนักเรียนสำหรับบันทึกคะแนน' : 'ใบรายชื่อนักเรียนสำหรับเช็คชื่อ'
        const isLandscape = orientation !== 'portrait'
        const pageWidth = isLandscape ? '297mm' : '210mm'
        const pageHeight = isLandscape ? '210mm' : '297mm'
        const scoreHeaders = scoreColumns.map(c => {
          const name = c.assignment_name || '-'
          const long = name.length > 8 || scoreColumns.length > (isLandscape ? 10 : 6)
          return `
          <th class="score-col ${long ? 'long' : ''}">
            <div class="score-label" title="${_htmlEsc(name)}">${_htmlEsc(name)}</div>
            <small>/${_htmlEsc(c.max_score ?? '')}</small>
          </th>`}).join('')
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
    @page { size: A4 ${isLandscape ? 'landscape' : 'portrait'}; margin: 10mm; }
    * { box-sizing: border-box; }
    body { font-family: "Sarabun", "TH Sarabun New", Arial, sans-serif; color: #111827; margin: 0; background: #f3f4f6; }
    .toolbar { position: sticky; top: 0; display: flex; gap: 8px; justify-content: flex-end; padding: 10px; background: white; border-bottom: 1px solid #e5e7eb; }
    .toolbar button { border: 1px solid #d1d5db; background: white; border-radius: 8px; padding: 8px 14px; font-weight: 700; cursor: pointer; }
    .toolbar .primary { background: #4f46e5; color: white; border-color: #4f46e5; }
    .page { width: ${pageWidth}; min-height: ${pageHeight}; margin: 12px auto; padding: 10mm; background: white; }
    .header { display: grid; grid-template-columns: 70px 1fr 150px; align-items: center; gap: 12px; margin-bottom: 10px; }
    .logo-wrap { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: transparent; }
    .logo { width: 58px; height: 58px; object-fit: contain; filter: grayscale(1) contrast(1.18); }
    .school { text-align: center; line-height: 1.3; }
    .school h1 { margin: 0; font-size: 20px; }
    .school h2 { margin: 3px 0 0; font-size: 16px; font-weight: 700; }
    .meta { font-size: 12px; line-height: 1.7; }
    .meta strong { display: inline-block; min-width: 66px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: ${isLandscape ? '11px' : '10px'}; }
    th, td { border: 1px solid #111827; padding: 3px 4px; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 700; text-align: center; }
    .no { width: 28px; text-align: center; }
    .code { width: 62px; text-align: center; font-family: monospace; }
    .name { width: ${isLandscape ? '150px' : '120px'}; }
    .check-col, .check-cell { width: ${isLandscape ? '34px' : '24px'}; height: 22px; text-align: center; }
    .score-col, .score-cell { width: ${isLandscape ? '58px' : '42px'}; text-align: center; }
    .score-col { height: 46px; vertical-align: bottom; }
    .score-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.15; }
    .score-col.long { height: 72px; padding: 2px 1px; }
    .score-col.long .score-label {
      width: 66px;
      max-width: 66px;
      margin: 0 auto 2px;
      transform: rotate(-28deg);
      transform-origin: 50% 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
      <div class="logo-wrap">${printLogoUrl ? `<img class="logo" src="${_htmlEsc(printLogoUrl)}" />` : ''}</div>
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
        <div class="mb-4 rounded-xl border border-gray-100 bg-gray-50 p-3">
          <p class="text-xs font-semibold text-gray-500 mb-2">แนวหน้ากระดาษ</p>
          <div class="grid grid-cols-2 gap-2">
            <label class="cursor-pointer">
              <input class="hidden roster-orientation" type="radio" name="roster-orientation" value="portrait" />
              <span class="roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600">แนวตั้ง</span>
            </label>
            <label class="cursor-pointer">
              <input class="hidden roster-orientation" type="radio" name="roster-orientation" value="landscape" checked />
              <span class="roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700">แนวนอน</span>
            </label>
          </div>
        </div>
        <div class="grid gap-3">
          <button id="btn-roster-att" class="py-3 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">✅ สร้างใบเช็คชื่อ</button>
          <button id="btn-roster-score" class="py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">📝 สร้างใบบันทึกคะแนน</button>
          <button id="btn-roster-close" class="py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        </div>
      </div>`
      document.body.appendChild(m)
      const _getOrientation = () => m.querySelector('.roster-orientation:checked')?.value || 'landscape'
      m.querySelectorAll('.roster-orientation').forEach(inp => {
        inp.addEventListener('change', () => {
          m.querySelectorAll('.roster-orientation-card').forEach(card => {
            card.className = 'roster-orientation-card block text-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-600'
          })
          inp.nextElementSibling.className = 'roster-orientation-card block text-center rounded-lg border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700'
        })
      })
      m.querySelector('#btn-roster-close').addEventListener('click', () => m.remove())
      m.addEventListener('click', e => { if (e.target === m) m.remove() })
      m.querySelector('#btn-roster-att').addEventListener('click', () => {
        const orientation = _getOrientation()
        m.remove()
        _openPrintableRoster(cls, 'attendance', orientation)
      })
      m.querySelector('#btn-roster-score').addEventListener('click', () => {
        const orientation = _getOrientation()
        m.remove()
        _openPrintableRoster(cls, 'score', orientation)
      })
    }

    window._openStudentManager = async (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls) return
      setActiveNav('my-classes')
      setTitle('จัดการนักเรียน', 'class-students')
      setContent(`<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-6 w-6 mr-3 text-sky-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลดรายชื่อนักเรียน...
      </div>`)
      try {
        const [students, cfg] = await Promise.all([
          getClassRosterStudents(classId),
          getSystemConfig().catch(() => ({})),
        ])
        const viewKey = `classRosterView_${classId}`
        const viewMode = localStorage.getItem(viewKey) || 'table'
        const activeCount = students.filter(s => s.is_active).length
        const ms = cls.master_subjects ?? {}
        const isReligionCourse = ['AGM', 'AGMVOC'].includes(ms.subject_group)
        const showHouseColor = cfg.showStudentHouseColor !== 'false'
        const showShirtSize = cfg.showStudentSportsShirtSize !== 'false'
        const displayRoom = s => isReligionCourse
          ? (s.main_room || s.religion_room || '—')
          : (s.religion_room || s.main_room || '—')
        const extraBadges = s => `
          ${showHouseColor ? `<span class="inline-flex px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">สี: ${_htmlEsc(s.house_color || '—')}</span>` : ''}
          ${showShirtSize ? `<span class="inline-flex px-2 py-0.5 rounded-full bg-sky-50 text-sky-700 text-[11px] font-medium">เสื้อ: ${_htmlEsc(s.sports_shirt_size || '—')}</span>` : ''}`
        const avatar = (s, size = 'w-12 h-16') => s.image_url
          ? `<img src="${_htmlEsc(s.image_url)}" class="${size} rounded-2xl object-cover bg-gray-100 border border-gray-100 shadow-sm" loading="lazy" />`
          : `<div class="${size} rounded-2xl bg-sky-100 text-sky-700 border border-sky-100 shadow-sm flex items-center justify-center font-bold">${_htmlEsc((s.full_name || '?').trim().slice(0,1))}</div>`
        const tableRows = students.map((s, i) => `
          <tr class="student-status-target cursor-pointer transition ${s.is_active ? 'bg-white hover:bg-emerald-50/40' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}"
            data-enrollment-id="${s.enrollment_id}" data-next="${s.is_active ? 'false' : 'true'}" data-name="${_htmlEsc(s.full_name)}">
            <td class="px-3 py-2 text-center text-xs text-gray-400">${i + 1}</td>
            <td class="px-3 py-2">${avatar(s)}</td>
            <td class="px-3 py-2 font-mono text-sm">${_htmlEsc(s.student_code)}</td>
            <td class="px-3 py-2">
              <p class="font-semibold text-gray-800 ${s.is_active ? '' : 'line-through text-gray-400'}">${_htmlEsc(s.full_name)}</p>
              <p class="text-xs text-gray-400">${_htmlEsc(displayRoom(s))}</p>
              <div class="mt-1 flex flex-wrap gap-1">${extraBadges(s)}</div>
            </td>
            ${showHouseColor ? `<td class="px-3 py-2 text-center text-sm text-gray-600">${_htmlEsc(s.house_color || '—')}</td>` : ''}
            ${showShirtSize ? `<td class="px-3 py-2 text-center text-sm text-gray-600">${_htmlEsc(s.sports_shirt_size || '—')}</td>` : ''}
            <td class="px-3 py-2 text-center">
              <span class="inline-flex px-3 py-1 rounded-full text-xs font-semibold ${s.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-500'}">
                ${s.is_active ? 'กำลังเรียน' : 'ไม่เรียน'}
              </span>
            </td>
          </tr>`).join('')
        const gridCards = students.map(s => `
          <button type="button"
            class="student-status-target text-left rounded-2xl border p-4 transition ${s.is_active ? 'border-emerald-300 bg-white shadow-[0_0_0_3px_rgba(16,185,129,0.12),0_8px_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_0_4px_rgba(16,185,129,0.18),0_10px_24px_rgba(16,185,129,0.16)]' : 'border-gray-300 bg-gray-50 opacity-80 hover:opacity-100'}"
            data-enrollment-id="${s.enrollment_id}" data-next="${s.is_active ? 'false' : 'true'}" data-name="${_htmlEsc(s.full_name)}">
            <div class="flex items-start justify-between gap-3">
              ${avatar(s, 'w-20 h-28')}
              <span class="px-2 py-1 rounded-full text-[11px] font-semibold ${s.is_active ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-500'}">
                ${s.is_active ? 'กำลังเรียน' : 'ไม่เรียน'}
              </span>
            </div>
            <p class="mt-3 font-bold text-gray-800 ${s.is_active ? '' : 'line-through text-gray-400'}">${_htmlEsc(s.full_name)}</p>
            <p class="text-xs font-mono text-sky-700 mt-0.5">${_htmlEsc(s.student_code)}</p>
            <p class="text-xs text-gray-400 mt-0.5">${_htmlEsc(displayRoom(s))}</p>
            <div class="mt-2 flex flex-wrap gap-1">${extraBadges(s)}</div>
          </button>`).join('')

        setContent(`<div class="animate-fade">
          <div id="students-back-placeholder" class="hidden"></div>
          <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
            <div class="p-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p class="text-sm font-semibold text-gray-700">ทั้งหมด ${students.length} คน · กำลังเรียน ${activeCount} คน</p>
                <p class="text-xs text-gray-400 mt-0.5">ปิดสถานะเมื่อนักเรียนออกกลางคัน ระบบจะไม่ดึงไปเช็คชื่อ/ใบรายชื่อ</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <div class="inline-flex rounded-xl border border-gray-200 bg-gray-50 p-1">
                  <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'table' ? 'bg-white text-sky-700 shadow' : 'text-gray-400'}" data-view="table" title="มุมมองตาราง">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18M10 6h4M10 18h4M3 6h4M3 18h4M17 6h4M17 18h4"/></svg>
                  </button>
                  <button class="student-view-toggle px-2.5 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'grid' ? 'bg-white text-sky-700 shadow' : 'text-gray-400'}" data-view="grid" title="มุมมองกริด">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                  </button>
                </div>
                <button id="students-sync-enroll" class="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700" title="รีเฟรชรายชื่อนักเรียนในห้องนี้ตามข้อมูลล่าสุด">🔄 รีเฟรชรายชื่อ</button>
                <button id="students-add" class="px-3 py-2 rounded-xl bg-sky-600 text-white text-xs font-semibold hover:bg-sky-700">＋ เพิ่มนักเรียน</button>
                <button id="students-roster" class="px-3 py-2 rounded-xl bg-violet-600 text-white text-xs font-semibold hover:bg-violet-700">🖨️ สร้างใบรายชื่อ</button>
                <button id="students-print-qr" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700">🖨️ พิมพ์ QR Code</button>
              </div>
            </div>
            ${!students.length ? `
              <div class="p-12 text-center text-gray-400">
                <p class="text-4xl mb-3">👥</p>
                <p class="font-medium">ยังไม่มีนักเรียนในรายวิชานี้</p>
              </div>` : viewMode === 'grid' ? `
              <div class="p-4 grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                ${gridCards}
              </div>` : `
              <div class="overflow-auto">
                <table class="w-full text-sm">
                  <thead class="bg-gray-50 text-gray-500">
                    <tr>
                      <th class="px-3 py-2 text-center w-12">#</th>
                      <th class="px-3 py-2 text-left w-16">รูป</th>
                      <th class="px-3 py-2 text-left w-28">รหัส</th>
                      <th class="px-3 py-2 text-left">นักเรียน</th>
                      ${showHouseColor ? `<th class="px-3 py-2 text-center w-24">ประจำสี</th>` : ''}
                      ${showShirtSize ? `<th class="px-3 py-2 text-center w-28">ไซด์เสื้อ</th>` : ''}
                      <th class="px-3 py-2 text-center w-28">สถานะ</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-50">${tableRows}</tbody>
                </table>
              </div>`}
          </div>
        </div>`)

        const refresh = () => window._openStudentManager(classId)
        // students-back ถูกลบออก (อยู่ใน class detail sticky header แล้ว)
        document.getElementById('students-roster')?.addEventListener('click', () => window._openRosterPicker(classId))
        document.getElementById('students-print-qr')?.addEventListener('click', () => {
          window._pendingQRClassId = classId
          window._navTo('student-qr-print')
        })
        document.getElementById('students-sync-enroll')?.addEventListener('click', async (e) => {
          const btn = e.currentTarget
          const orig = btn.textContent
          btn.disabled = true
          btn.textContent = 'กำลังรีเฟรช...'
          try {
            await autoEnrollStudentsByRoom()
            showToast('รีเฟรชรายชื่อสำเร็จ', 'success')
            window._loadClassTab?.('students') ?? window._openStudentManager(classId)
          } catch {
            showToast('รีเฟรชไม่สำเร็จ', 'error')
            btn.disabled = false
            btn.textContent = orig
          }
        })
        document.querySelectorAll('.student-view-toggle').forEach(btn => {
          btn.addEventListener('click', () => {
            localStorage.setItem(viewKey, btn.dataset.view)
            refresh()
          })
        })
        document.querySelectorAll('.student-status-target').forEach(el => {
          el.addEventListener('click', () => {
            const nextActive = el.dataset.next === 'true'
            const studentName = el.dataset.name || 'นักเรียน'
            document.getElementById('student-status-confirm')?.remove()
            const modal = document.createElement('div')
            modal.id = 'student-status-confirm'
            modal.className = 'fixed inset-0 z-[95] bg-white flex flex-col'

            if (nextActive) {
              modal.innerHTML = `<div class="flex-1 flex items-center justify-center p-6">
                <div class="w-full max-w-md text-center">
                  <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-emerald-100 text-emerald-700">
                    ✓
                  </div>
                  <h3 class="text-2xl font-bold text-gray-800">เปิดสถานะกำลังเรียน?</h3>
                  <p class="mt-3 text-gray-500">${_htmlEsc(studentName)}</p>
                  <p class="mt-2 text-sm text-gray-400">นักเรียนจะกลับมาอยู่ในเช็คชื่อ/ใบรายชื่อของรายวิชานี้</p>
                  <div class="mt-8 grid grid-cols-2 gap-3">
                    <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                    <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-700">ยืนยัน</button>
                  </div>
                </div>
              </div>`
            } else {
              modal.innerHTML = `<div class="flex-1 flex items-center justify-center p-6">
                <div class="w-full max-w-md text-center">
                  <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-red-50 text-red-500 border border-red-100 shadow-sm">
                    🗑️
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">ลบนักเรียนออกจากห้องเรียนนี้?</h3>
                  <p class="mt-3 text-gray-800 font-semibold text-lg">${_htmlEsc(studentName)}</p>
                  <p class="mt-2 text-sm text-gray-400">นักเรียนจะถูกลบออกจากรายวิชานี้ และระบบซิงก์หรือปุ่มรีเฟรชจะไม่เพิ่มกลับมาอีก<br/>หากต้องการนำกลับ สามารถใช้ปุ่ม “เพิ่มนักเรียน” ได้ภายหลัง</p>
                  <div class="mt-8 grid grid-cols-2 gap-3">
                    <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                    <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold bg-red-600 hover:bg-red-700">ยืนยันการลบ</button>
                  </div>
                </div>
              </div>`
            }

            document.body.appendChild(modal)
            modal.querySelector('#student-status-cancel').addEventListener('click', () => modal.remove())
            modal.querySelector('#student-status-ok').addEventListener('click', async () => {
              try {
                if (nextActive) {
                  await updateClassStudentActive(el.dataset.enrollmentId, true)
                  showToast('เปิดสถานะกำลังเรียนแล้ว', 'success')
                } else {
                  await removeStudentFromClass(el.dataset.enrollmentId)
                  showToast('ลบนักเรียนออกจากห้องเรียนนี้แล้ว', 'success')
                }
                modal.remove()
                refresh()
              } catch (err) {
                showToast('ดำเนินการไม่สำเร็จ: ' + (err.message ?? ''), 'error')
              }
            })
          })
        })
        document.getElementById('students-add')?.addEventListener('click', () => {
          document.getElementById('add-student-modal')?.remove()
          const modal = document.createElement('div')
          modal.id = 'add-student-modal'
          modal.className = 'fixed inset-0 z-[90] bg-white flex flex-col'
          modal.innerHTML = `<div class="p-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 class="text-xl font-bold text-gray-800">เพิ่มนักเรียนเข้ารายวิชา</h3>
              <p class="text-xs text-gray-400 mt-1">${_htmlEsc(ms.subject_name || '')} · ${_htmlEsc(cls.class_name || '')}</p>
            </div>
            <button id="add-student-close" class="text-3xl text-gray-400 hover:text-gray-600">×</button>
          </div>
          <div class="flex-1 overflow-auto p-5 max-w-2xl w-full mx-auto">
            <label class="block text-sm font-semibold text-gray-700 mb-2">รหัสนักเรียน</label>
            <input id="add-student-code" class="${INPUT_CLS} text-lg font-mono" placeholder="เช่น 26826" autocomplete="off" autofocus />
            <div id="add-student-result" class="mt-5"></div>
          </div>`
          document.body.appendChild(modal)
          const result = modal.querySelector('#add-student-result')
          let found = null
          let timer = null
          const renderResult = (html) => { result.innerHTML = html }
          const lookup = async () => {
            const code = modal.querySelector('#add-student-code').value.trim()
            found = null
            if (!code) { renderResult(''); return }
            renderResult('<p class="text-sm text-gray-400">กำลังค้นหา...</p>')
            try {
              const s = await getStudentByCode(code)
              if (!s) {
                renderResult('<div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">ไม่พบนักเรียนรหัสนี้</div>')
                return
              }
              found = s
              renderResult(`<div class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm flex items-center gap-4">
                ${avatar(s, 'w-16 h-24')}
                <div class="flex-1 min-w-0">
                  <p class="font-bold text-gray-800 truncate">${_htmlEsc(s.full_name)}</p>
                  <p class="text-sm font-mono text-sky-700">${_htmlEsc(s.student_code)}</p>
                  <p class="text-xs text-gray-400">${_htmlEsc(displayRoom(s))}</p>
                  <div class="mt-1 flex flex-wrap gap-1">${extraBadges(s)}</div>
                </div>
                <button id="add-student-confirm" class="px-4 py-2 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700">เพิ่ม</button>
              </div>`)
              modal.querySelector('#add-student-confirm')?.addEventListener('click', async () => {
                try {
                  await addStudentToClass(classId, found.id)
                  showToast('เพิ่มนักเรียนแล้ว', 'success')
                  modal.remove()
                  refresh()
                } catch (err) {
                  showToast('เพิ่มนักเรียนไม่สำเร็จ: ' + (err.message ?? ''), 'error')
                }
              })
            } catch (err) {
              renderResult(`<div class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">${_htmlEsc(err.message ?? 'ค้นหาไม่สำเร็จ')}</div>`)
            }
          }
          modal.querySelector('#add-student-close').addEventListener('click', () => modal.remove())
          modal.querySelector('#add-student-code').addEventListener('input', () => {
            clearTimeout(timer)
            timer = setTimeout(lookup, 350)
          })
          modal.querySelector('#add-student-code').addEventListener('keydown', e => {
            if (e.key === 'Enter') { e.preventDefault(); clearTimeout(timer); lookup() }
          })
          setTimeout(() => modal.querySelector('#add-student-code')?.focus(), 50)
        })
      } catch (err) {
        showToast('โหลดรายชื่อนักเรียนไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        renderMyClasses(teacher)
      }
    }

    window._openClassCopyModal = (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls) return
      const tpl = getCopyTemplateForClass(copyCfg, cls)
      if (!tpl?.id) {
        showToast('ยังไม่ได้ตั้งค่าไฟล์ต้นฉบับสำหรับกลุ่มวิชานี้', 'warning')
        return
      }
      document.getElementById('class-copy-modal')?.remove()
      const ms = cls.master_subjects ?? {}
      const defaultName = `${ms.subject_name || 'ปพ5'}_${cls.class_name || ''}_${teacher?.full_name || ''}`.replace(/\s+/g, ' ').trim()
      const defaultEmail = teacher?.login_email || teacher?.auth_email || ''
      const m = document.createElement('div')
      m.id = 'class-copy-modal'
      m.className = 'fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40'
      m.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">🔗 ทำสำเนาชีทสำหรับรายวิชานี้</h3>
        <p class="text-xs text-gray-400 mb-4">${_htmlEsc(tpl.label || '')} · ${_htmlEsc(ms.subject_name || '')} · ${_htmlEsc(cls.class_name || '')}</p>
        <label class="block text-sm font-semibold text-gray-700 mb-1">ตั้งชื่อไฟล์สำเนา</label>
        <input id="copy-file-name" class="${INPUT_CLS}" value="${_htmlEsc(defaultName)}" />
        <label class="block text-sm font-semibold text-gray-700 mt-3 mb-1">อีเมลที่จะให้สิทธิ์ไฟล์</label>
        <input id="copy-target-email" type="email" class="${INPUT_CLS}" value="${_htmlEsc(defaultEmail)}" placeholder="teacher@example.com" />
        <p class="text-xs text-gray-400 mt-2">ระบบจะสร้างสำเนาในบัญชีผู้ดูแลและแชร์สิทธิ์แก้ไขให้ email นี้ พร้อมบันทึก Sheet ID กลับเข้ารายวิชาอัตโนมัติ</p>
        <div id="copy-result" class="hidden mt-4 rounded-xl bg-emerald-50 border border-emerald-100 p-3 text-sm"></div>
        <div class="flex gap-3 mt-5">
          <button id="copy-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
          <button id="copy-go" class="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600">สร้างสำเนา</button>
        </div>
      </div>`
      document.body.appendChild(m)
      m.querySelector('#copy-cancel').addEventListener('click', () => m.remove())
      m.addEventListener('click', e => { if (e.target === m) m.remove() })
      const showManualCopy = message => {
        const copyUrl = _sheetCopyUrl(tpl.id)
        m.querySelector('#copy-result').innerHTML = `
          <div class="rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p class="font-semibold text-amber-800 mb-1">ใช้วิธีทำสำเนาด้วย Google แทน</p>
            <p class="text-xs text-amber-700 mb-3">${_htmlEsc(message || 'หากสร้างอัตโนมัติไม่สำเร็จ ให้กดปุ่มด้านล่างเพื่อทำสำเนา แล้วนำลิงก์ไฟล์ใหม่มาวาง')}</p>
            <a href="${copyUrl}" target="_blank" rel="noopener noreferrer"
              class="block w-full py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-700">
              เปิดหน้าทำสำเนาของ Google
            </a>
            <label class="block text-xs font-semibold text-gray-600 mt-3 mb-1">วางลิงก์หรือ ID ของไฟล์ที่ทำสำเนาเสร็จแล้ว</label>
            <input id="manual-sheet-id" class="${INPUT_CLS}" placeholder="https://docs.google.com/spreadsheets/d/..." />
            <button id="manual-save-sheet" class="mt-3 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
              บันทึก Sheet ID เข้ารายวิชา
            </button>
          </div>`
        m.querySelector('#copy-result').classList.remove('hidden')
        m.querySelector('#manual-save-sheet').addEventListener('click', async () => {
          const input = m.querySelector('#manual-sheet-id')
          const newId = _extractSheetId(input.value)
          if (!newId) {
            showToast('กรุณาวางลิงก์หรือ Sheet ID ของไฟล์สำเนา', 'warning')
            return
          }
          try {
            await updateClass(cls.id, { google_sheet_id: newId })
            cls.google_sheet_id = newId
            showToast('บันทึก Sheet ID เข้ารายวิชาแล้ว', 'success')
            m.remove()
            renderMyClasses(teacher)
          } catch (err) {
            showToast('บันทึก Sheet ID ไม่สำเร็จ: ' + (err.message ?? ''), 'error')
          }
        })
      }
      m.querySelector('#copy-go').addEventListener('click', async () => {
        const btn = m.querySelector('#copy-go')
        const name = m.querySelector('#copy-file-name').value.trim() || defaultName || 'สำเนาไฟล์ ปพ.5'
        const targetEmail = m.querySelector('#copy-target-email').value.trim()
        btn.disabled = true
        btn.textContent = 'กำลังสร้าง...'
        try {
          const result = await copySheetTemplate(tpl.id, name, targetEmail)
          const newId = result.newSheetId
          if (!newId) throw new Error('GAS ไม่ได้ส่ง Sheet ID กลับมา')
          await updateClass(cls.id, { google_sheet_id: newId })
          cls.google_sheet_id = newId
          const url = result.url || _sheetUrl(newId)
          m.querySelector('#copy-result').innerHTML = `
            <p class="font-semibold text-emerald-800 mb-2">สร้างไฟล์สำเนาและบันทึกเข้ารายวิชาแล้ว</p>
            <button id="copy-open" class="w-full py-2 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">เปิดไฟล์สำเนา</button>`
          m.querySelector('#copy-result').classList.remove('hidden')
          m.querySelector('#copy-open').addEventListener('click', () => window.open(url, '_blank'))
          btn.textContent = 'สร้างแล้ว'
          showToast('สร้างสำเนาและบันทึก Sheet ID แล้ว', 'success')
          setTimeout(() => renderMyClasses(teacher), 900)
        } catch (err) {
          btn.disabled = false
          btn.textContent = 'สร้างสำเนา'
          showToast('สร้างอัตโนมัติไม่สำเร็จ เปิดวิธีทำสำเนาด้วย Google แทน', 'warning')
          showManualCopy(err.message ?? '')
        }
      })
    }

    window._openSheetToolsModal = (classId) => {
      const cls = window._classCache?.[classId]
      if (!cls?.google_sheet_id) return
      document.getElementById('sheet-tools-modal')?.remove()
      const sheetUrl = _sheetUrl(cls.google_sheet_id)
      const m = document.createElement('div')
      m.id = 'sheet-tools-modal'
      m.className = 'fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40'
      m.innerHTML = `<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <h3 class="font-bold text-gray-800 text-base mb-1">จัดการ Google Sheet</h3>
        <p class="text-xs text-gray-400 mb-4">${_htmlEsc(cls.master_subjects?.subject_name || '')} · ${_htmlEsc(cls.class_name || '')}</p>
        <div class="space-y-2">
          <button id="btn-share-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-sm font-semibold">🔓 เปิดสิทธิ์ให้ทุกคนที่มีลิงก์ดูชีทได้</button>
          <button id="btn-open-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 text-sm font-semibold">📊 เปิดชีท</button>
          <button id="btn-copy-sheet" class="w-full text-left px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-sm font-semibold">🔗 คัดลอกลิงก์ชีท</button>
          <button id="btn-open-sync" class="w-full text-left px-4 py-3 rounded-xl border border-teal-100 bg-teal-50 text-teal-800 hover:bg-teal-100 text-sm font-semibold">🔗 Sync ข้อมูลไปชีท</button>
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
      m.className = 'fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40'
      m.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
          <h3 class="font-bold text-gray-800 text-base mb-1">🔗 Sync ไปยัง Google Sheet</h3>
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
              🔗 Sync ที่เลือก
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
  } catch (err) {
    console.error('[renderMyClasses] โหลดข้อมูลห้องเรียนไม่สำเร็จ', err)
    const detail = _htmlEsc(err?.message || 'ไม่ทราบสาเหตุ')
    setContent(`<div class="max-w-xl mx-auto mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
      <p class="text-3xl mb-3">⚠️</p>
      <h3 class="font-bold text-red-700">โหลดข้อมูลห้องเรียนไม่สำเร็จ</h3>
      <p class="mt-2 text-sm text-red-600 break-words">${detail}</p>
      <button id="retry-my-classes" class="mt-5 px-5 py-2.5 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700">ลองใหม่</button>
    </div>`)
    document.getElementById('retry-my-classes')?.addEventListener('click', () => renderMyClasses(teacher))
    showToast('โหลดข้อมูลห้องเรียนไม่สำเร็จ: ' + (err?.message || ''), 'error')
  }

}

// ─── Class Detail Page ────────────────────────────────────────────────────────

export async function renderClassDetail(teacher, classId, ctx = {}) {
  setActiveNav('my-classes')
  setTitle('ห้องเรียน')
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)

  try {
    // โหลดข้อมูลห้อง (refresh เพื่อให้ได้ข้อมูลล่าสุด)
    // ถ้าอยู่ใน supervisor mode และส่ง ctx.classes มา ให้ใช้ข้อมูลนั้นเลย
    const [classesFetched, copyCfg, classrooms] = await Promise.all([
      ctx.classes ? Promise.resolve(ctx.classes) : getMyClasses(teacher?.id ?? null),
      getSystemConfig().catch(() => ({})),
      getClassrooms().catch(() => []),
    ])
    const classes = classesFetched
    const cls = classes.find(c => c.id === classId)
    if (!cls) { if (!ctx.supervisorMode) renderMyClasses(teacher); return }
    const ms           = cls.master_subjects ?? {}
    const classroomMap = Object.fromEntries(classrooms.map(r => [r.id, r]))
    const cr           = cls.classroom_id ? classroomMap[cls.classroom_id] : null
    window._classCache = Object.fromEntries(classes.map(c => [c.id, c]))

    // schedule data for combined edit
    const academicYear = parseInt(copyCfg.academicYear ?? 2568)
    const semester     = parseInt(copyCfg.semester ?? 1)
    const [schedule, links, periods] = await Promise.all([
      teacher?.id ? getMySchedule(teacher.id, academicYear, semester).catch(() => []) : Promise.resolve([]),
      teacher?.id ? getClassScheduleLinks(teacher.id).catch(() => []) : Promise.resolve([]),
      getPeriods().catch(() => []),
    ])
    const linksByClass = {}
    links.forEach(l => {
      if (!linksByClass[l.class_id]) linksByClass[l.class_id] = []
      linksByClass[l.class_id].push(l.teacher_schedule_id)
    })
    const scheduleMap = Object.fromEntries(schedule.map(s => [s.id, s]))
    const periodMap   = Object.fromEntries(periods.map(p => [p.period_no, p]))

    // ฟีเจอร์สุ่มรายชื่อ/จัดกลุ่ม — สิทธิ์เฉพาะครูผู้โดเนทอนุมัติแล้วเท่านั้น
    const donationRequests = (!ctx.supervisorMode && teacher?.id) ? await getMyDonationRequests(teacher.id).catch(() => []) : []
    const isDonorTeacher = donationRequests.some(r => r.package_type === 'donation' && r.status === 'approved')

    const copyTemplate = getCopyTemplateForClass(copyCfg, cls)
    const isReligion   = ['AGM','AGMVOC'].includes(ms.subject_group)
    const sheetBtns    = cls.google_sheet_id
      ? `<button onclick="window._openSheetToolsModal(${classId})" class="btn-action teal">⚙️ จัดการชีท</button>`
      : copyTemplate?.id
        ? `<button onclick="window._openClassCopyModal(${classId})" class="btn-action amber">🔗 ทำสำเนาชีท</button>`
        : ''

    setContent(`
    <div class="animate-fade">

      <!-- ── Sticky top bar (mobile-first) ── -->
      <div class="bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4 sticky top-0 z-10">

        <!-- Row 1: breadcrumb + class info -->
        <div class="flex items-center gap-2 py-3">
          <button onclick="window._backToClasses()"
            class="flex-shrink-0 text-gray-400 hover:text-gray-700 transition p-1 -ml-1 rounded-lg hover:bg-gray-100"
            aria-label="กลับ">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="flex-1 min-w-0">
            <p class="font-bold text-gray-800 text-sm leading-tight truncate">${_htmlEsc(ms.subject_name??'—')}</p>
            <p class="text-xs text-gray-500 truncate">
              <span class="font-mono text-emerald-600">${_htmlEsc(ms.subject_code??'')}</span>
              <span class="mx-1">·</span>${_htmlEsc(cls.class_name??'')}${cr ? ` · 📍 ${_htmlEsc(cr.building)} ${_htmlEsc(cr.room_number)}` : ''}
            </p>
          </div>
          <!-- badges desktop only -->
          <div class="hidden sm:flex items-center gap-1.5 flex-shrink-0">
            ${cls.skill_group ? `<span class="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">${_htmlEsc(cls.skill_group)}</span>` : ''}
            ${isReligion ? `<span class="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full">ศาสนา</span>` : ''}
            ${cls.google_sheet_id ? `<span class="px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full">✓ Sheet</span>` : ''}
          </div>
        </div>

        <!-- Row 2: action buttons (scrollable on mobile) -->
        <div class="flex gap-2 pb-3 overflow-x-auto no-scrollbar">
          <button onclick="window._openPP5Doc(${classId})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 bg-violet-600 text-white text-xs font-semibold rounded-xl hover:bg-violet-700 transition flex items-center gap-1.5">
            💾 <span class="hidden xs:inline">ปพ.5</span><span class="xs:hidden">ปพ.5</span>
          </button>
          <button onclick="window._openRandomPickerModal(${classId})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 text-white text-xs font-semibold rounded-xl transition flex items-center gap-1.5"
            style="background:linear-gradient(135deg,#f59e0b,#ec4899);">
            🎲 <span>สุ่มรายชื่อ</span>
          </button>
          <button onclick="window._openClassFlashcardsModal(${classId})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl hover:bg-indigo-700 transition flex items-center gap-1.5">
            🃏 <span>บัตรคำศัพท์</span>
          </button>
          ${cls.google_sheet_id ? `
          <button onclick="window._openSheetToolsModal(${classId})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 bg-teal-600 text-white text-xs font-semibold rounded-xl hover:bg-teal-700 transition flex items-center gap-1.5">
            ⚙️ <span>จัดการชีท</span>
          </button>` : copyTemplate?.id ? `
          <button onclick="window._openClassCopyModal(${classId})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 bg-amber-500 text-white text-xs font-semibold rounded-xl hover:bg-amber-600 transition flex items-center gap-1.5">
            🔗 <span>ทำสำเนาชีท</span>
          </button>` : ''}
          <div class="flex-shrink-0 w-px bg-gray-200 my-0.5"></div>
          <button onclick="window._openCombinedEdit2(${classId})"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-xl hover:bg-gray-50 transition flex items-center gap-1.5">
            ✏️ <span>แก้ไข</span>
          </button>
          <button onclick="event.stopPropagation();window._deleteClass(${classId},'${(cls.class_name??'').replace(/\\/g,'\\\\').replace(/'/g,"\\'")}')"
            class="cd-action-btn flex-shrink-0 px-3 py-2 border border-red-100 text-red-400 text-xs font-semibold rounded-xl hover:bg-red-50 transition flex items-center gap-1.5">
            🗑️ <span>ลบ</span>
          </button>
        </div>

        <!-- Row 3: tabs -->
        <div class="flex border-t border-gray-100">
          <button class="cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center" data-tab="students">
            <span class="hidden sm:inline">👥 จัดการนักเรียน</span>
            <span class="sm:hidden">👥 นักเรียน</span>
          </button>
          <button class="cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center" data-tab="attendance">
            <span class="hidden sm:inline">✅ เช็คชื่อ</span>
            <span class="sm:hidden">✅ เช็คชื่อ</span>
          </button>
          <button class="cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center" data-tab="grades">
            <span class="hidden sm:inline">📝 คะแนน</span>
            <span class="sm:hidden">📝 คะแนน</span>
          </button>
        </div>
      </div>

      <!-- Tab content -->
      <div id="cd-tab-content" class="min-h-96"></div>
    </div>
    <style>
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>`)

    // Tab switching
    const tabContent = () => document.getElementById('cd-tab-content')
    window._backToClasses = () => {
      renderMyClasses(teacher)
    }
    window._openPP5Doc    = (cid) => openPP5Doc(cid)
    window._openCombinedEdit2 = (cid) => {
      const c = window._classCache?.[cid]
      if (c) _openCombinedEditModal(teacher, c, classrooms, schedule, linksByClass, periodMap, scheduleMap, () => renderClassDetail(teacher, cid))
    }
    window._openRandomPickerModal = async (cid) => {
      const c = window._classCache?.[cid]
      if (!c) return
      try {
        const roster = await getClassStudents(cid)
        if (!roster.length) { showToast('ห้องนี้ยังไม่มีนักเรียน', 'warning'); return }
        const rosterWithSeats = roster.map((s, i) => ({ ...s, seat_no: i + 1 }))
        await _openRandomPickerModal(cid, c, rosterWithSeats, isDonorTeacher)
      } catch (err) {
        showToast('โหลดรายชื่อนักเรียนไม่สำเร็จ', 'error')
      }
    }
    window._openClassFlashcardsModal = async (cid) => {
      const c = window._classCache?.[cid]
      if (!c) return
      try {
        const decks = await getFlashcardDecks(teacher.id)
        _openClassFlashcardsSelectionModal(teacher, cid, decks)
      } catch (err) {
        showToast('โหลดชุดบัตรคำไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      }
    }
    window._deleteClass = async (cid, name) => {
      const confirmed = await showDangerConfirm({
        title: `ลบห้องเรียน "${name}"?`,
        message: 'การลบห้องเรียนจะไม่สามารถย้อนกลับได้',
        detail: 'ข้อมูลนักเรียน รายชื่อ เช็คชื่อ และคะแนนทั้งหมดในห้องนี้จะถูกลบถาวร',
        confirmText: 'ลบห้องเรียน',
      })
      if (!confirmed) return
      try {
        await deleteClass(cid); showToast(`ลบ "${name}" แล้ว`, 'success')
        renderMyClasses(teacher)
      } catch (err) { showToast('ลบไม่สำเร็จ', 'error') }
    }

    window._loadClassTab = async (tabId) => loadTab(tabId)
    const loadTab = async (tabId) => {
      document.querySelectorAll('.cd-tab').forEach(t => {
        const isActive = t.dataset.tab === tabId
        t.className = isActive
          ? 'cd-tab active-tab flex-1 py-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px text-center'
          : 'cd-tab flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition text-center'
      })
      const currentBox = document.getElementById('cd-tab-content')
      if (!currentBox) return
      currentBox.innerHTML = `<div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>`
      // redirect setContent → cd-tab-content ชั่วคราว
      // เพื่อให้ _openStudentManager / renderAttendanceGrid / renderGradesGrid
      // เขียนลง tab area แทนที่จะทับ header + tabs ทั้งหน้า
      const _savedMain = getMainContentRef()
      setMainContentRef(currentBox)
      try {
        if (tabId === 'students') {
          await window._openStudentManager(classId)
        } else if (tabId === 'attendance') {
          await renderAttendanceGrid(teacher, cls)
        } else if (tabId === 'grades') {
          await renderGradesGrid(teacher, cls)
        }
      } catch (err) {
        console.error(err)
        currentBox.innerHTML = `<div class="p-6 text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ</div>`
      } finally {
        setMainContentRef(_savedMain)
      }
      setActiveNav('my-classes')
      setTitle('ห้องเรียน')
    }
    document.querySelectorAll('.cd-tab').forEach(t =>
      t.addEventListener('click', () => loadTab(t.dataset.tab))
    )
    loadTab(ctx.defaultTab ?? 'students')

  } catch (err) {
    console.error(err)
    showToast('โหลดข้อมูลไม่สำเร็จ', 'error')
  }
}

// ─── Random Student Picker (สุ่มรายชื่อ / สุ่มจัดกลุ่ม — สิทธิ์เฉพาะครูผู้โดเนทอนุมัติแล้ว) ──

const RP_MODES = [
  { value: 'none',    label: 'ไม่จำ — สุ่มอิสระทุกครั้ง (มีโอกาสซ้ำ)' },
  { value: 'session', label: 'จำเฉพาะตอนนี้ — รีเซ็ตอัตโนมัติเมื่อปิดหน้าต่างนี้' },
  { value: 'cycle',   label: 'จำจนครบทุกคน แล้ววนรอบใหม่อัตโนมัติ' },
  { value: 'manual',  label: 'จำตลอดไป จนกว่าจะกดรีเซ็ตเอง' },
]

function _fireConfetti(container) {
  const colors = ['#f59e0b','#ec4899','#10b981','#6366f1','#ef4444','#06b6d4','#8b5cf6']
  container.style.position = 'relative'
  container.style.overflow = 'hidden'
  for (let i = 0; i < 26; i++) {
    const piece = document.createElement('div')
    const color = colors[Math.floor(Math.random() * colors.length)]
    const left = Math.random() * 100
    const duration = 1.1 + Math.random() * 0.7
    const delay = Math.random() * 0.25
    const rotate = Math.random() * 360
    piece.style.cssText = `position:absolute;top:-12px;left:${left}%;width:7px;height:13px;background:${color};opacity:0.9;border-radius:2px;transform:rotate(${rotate}deg);pointer-events:none;animation:rp-confetti-fall ${duration}s ${delay}s ease-in forwards;`
    container.appendChild(piece)
    setTimeout(() => piece.remove(), (duration + delay) * 1000 + 250)
  }
}

function _openClassFlashcardsSelectionModal(teacher, classId, decks) {
  document.getElementById('class-flashcards-modal')?.remove()

  const modal = document.createElement('div')
  modal.id = 'class-flashcards-modal'
  modal.className = 'fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4'
  
  let decksHtml = ''
  if (!decks || decks.length === 0) {
    decksHtml = `
      <div class="text-center py-8 text-gray-500">
        <p class="text-4xl mb-2">🃏</p>
        <p class="text-sm font-medium">คุณครูยังไม่มีชุดบัตรคำศัพท์เลยครับ</p>
        <p class="text-xs text-gray-400 mt-1">สามารถสร้างชุดบัตรคำศัพท์ใหม่ได้ที่เมนู "บัตรคำศัพท์" ในเมนูหลัก</p>
      </div>
    `
  } else {
    decksHtml = `
      <div class="grid gap-3 max-h-[60vh] overflow-y-auto pr-1 w-full">
        ${decks.map(deck => `
          <button class="select-deck-btn w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition flex items-center justify-between gap-3 group"
            data-deck-id="${deck.id}">
            <div>
              <p class="font-bold text-gray-800 text-sm group-hover:text-indigo-700 transition">${_htmlEsc(deck.title)}</p>
              ${deck.description ? `<p class="text-xs text-gray-400 mt-0.5 line-clamp-1">${_htmlEsc(deck.description)}</p>` : ''}
            </div>
            <span class="text-xs text-indigo-600 font-semibold shrink-0 group-hover:translate-x-1 transition duration-200">เล่นเลย →</span>
          </button>
        `).join('')}
      </div>
    `
  }

  modal.innerHTML = `
    <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl flex flex-col p-6 relative animate-fade">
      <button id="cf-modal-close" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition text-lg">✕</button>
      
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800 flex items-center gap-2">🃏 เลือกชุดบัตรคำศัพท์</h3>
        <p class="text-xs text-gray-400 mt-0.5">เลือกชุดบัตรคำศัพท์ที่คุณครูต้องการนำมาจัดกิจกรรมในห้องเรียนนี้</p>
      </div>

      ${decksHtml}
    </div>
  `

  document.body.appendChild(modal)

  // Bind close
  modal.querySelector('#cf-modal-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })

  // Bind selection
  modal.querySelectorAll('.select-deck-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const deckId = btn.dataset.deckId
      const deck = decks.find(d => d.id === deckId)
      if (deck) {
        modal.remove()
        import('./teacher-views-flashcards.js').then(m => {
          m.renderFlashcardPlay(teacher, deck, classId)
        })
      }
    })
  })
}

async function _openRandomPickerModal(classId, cls, students, isDonorTeacher) {
  const systemLimitVal = window._pp5SystemCfg?.freeRandomPickerLimit
  let limit = 1
  if (systemLimitVal !== undefined && systemLimitVal !== '') {
    const parsedVal = parseInt(systemLimitVal, 10)
    if (Number.isFinite(parsedVal)) {
      limit = parsedVal
    }
  }

  document.getElementById('random-picker-modal')?.remove()

  const showPaywallPopup = () => {
    m.innerHTML = `
      <div class="bg-white w-full max-w-md rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
        <button id="rp-paywall-close" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        <div class="text-6xl mt-4">🔒</div>
        <p class="font-bold text-gray-700 text-lg">สิทธิ์สุ่มทดลองใช้งานครบแล้ว</p>
        <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สุ่มรายชื่อและจัดกลุ่มจำกัดการทดลองสุ่มฟรี ${limit} ครั้งสำหรับผู้ใช้ทั่วไป<br>สนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัด</p>
        <button id="rp-upgrade" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition"
          style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`
    m.querySelector('#rp-paywall-close').addEventListener('click', () => m.remove())
    m.querySelector('#rp-upgrade').addEventListener('click', () => { m.remove(); document.getElementById('btn-donate-float')?.click() })
  }

  let dbState
  try { dbState = await getClassRandomizerState(classId) }
  catch { dbState = { mode: 'none', picked_student_ids: [] } }

  let currentMode     = dbState.mode || 'none'
  let persistedPicked = new Set((dbState.picked_student_ids || []).map(Number))
  let sessionPicked   = new Set()
  let activeTab       = 'pick'
  let isSpinning      = false
  let currentEffect   = localStorage.getItem('pp5_rp_effect') || 'classic'
  const EFFECT_DEFS   = [
    { key:'classic',     icon:'🎯', label:'คลาสสิก' },
    { key:'grid',        icon:'🔦', label:'กริด' },
    { key:'elimination', icon:'💥', label:'ตัดออก' },
    { key:'slot',        icon:'🎰', label:'สล็อต' },
  ]

  const m = document.createElement('div')
  m.id = 'random-picker-modal'
  m.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50'
  m.innerHTML = `
    <style>
      @keyframes rp-confetti-fall { to { transform: translateY(320px) rotate(540deg); opacity: 0; } }
      @keyframes rp-pop { 0% { transform: scale(0.7); opacity:0; } 60% { transform: scale(1.08); opacity:1; } 100% { transform: scale(1); opacity:1; } }
      .rp-pop { animation: rp-pop 0.45s cubic-bezier(.2,1.4,.4,1) both; }
      .rp-grid-tile { position:relative; aspect-ratio:3/4; border-radius:10px; overflow:hidden; transition:transform .07s,box-shadow .07s; }
      .rp-grid-tile.rp-active { transform:scale(1.12); box-shadow:0 0 0 3px #f59e0b,0 0 14px rgba(245,158,11,.6); z-index:2; }
      .rp-grid-tile.rp-winner { transform:scale(1.18); box-shadow:0 0 0 4px #10b981,0 0 22px rgba(16,185,129,.65); z-index:3; animation:rp-pop .45s cubic-bezier(.2,1.4,.4,1) both; }
      .rp-elim-tile { position:relative; aspect-ratio:3/4; border-radius:8px; overflow:hidden; transition:opacity .22s,transform .22s; }
      .rp-elim-tile.rp-eliminated { opacity:.12; transform:scale(.85); }
      .rp-elim-tile.rp-last { box-shadow:0 0 0 3px #f59e0b,0 0 12px rgba(245,158,11,.5); z-index:1; }
      .rp-elim-tile.rp-winner { box-shadow:0 0 0 4px #10b981,0 0 20px rgba(16,185,129,.65); animation:rp-pop .45s cubic-bezier(.2,1.4,.4,1) both; z-index:2; }
      .rp-reel { transition:border-color .3s,box-shadow .3s; }
      .rp-reel.rp-locked { border-color:#f59e0b!important; box-shadow:0 0 10px rgba(245,158,11,.4)!important; }
      .rp-reel.rp-winner-reel { border-color:#10b981!important; box-shadow:0 0 20px rgba(16,185,129,.55)!important; }
    </style>
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[94vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#ec4899);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">🎲 สุ่มรายชื่อนักเรียน</h3>
          <p class="text-white/80 text-xs mt-0.5 truncate">${_htmlEsc(cls.class_name || '')} · ทั้งหมด ${students.length} คน</p>
        </div>
        <button id="rp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="pick">🎯 สุ่มรายชื่อ</button>
        <button class="rp-tab flex-1 py-2.5 text-sm font-semibold transition" data-mode="group">👥 สุ่มจัดกลุ่ม</button>
      </div>
      <div id="rp-body" class="p-5 overflow-y-auto flex-1"></div>
    </div>`
  document.body.appendChild(m)
  m.addEventListener('click', e => { if (e.target === m) m.remove() })
  m.querySelector('#rp-close').addEventListener('click', () => m.remove())

  const body = m.querySelector('#rp-body')
  const tabs = [...m.querySelectorAll('.rp-tab')]
  const setTab = (tab) => {
    activeTab = tab
    tabs.forEach(t => {
      const on = t.dataset.mode === tab
      t.className = `rp-tab flex-1 py-2.5 text-sm font-semibold transition ${on ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`
      t.style.background = on ? 'linear-gradient(135deg,#f59e0b,#ec4899)' : ''
    })
    if (tab === 'pick') renderPickTab()
    else renderGroupTab()
  }
  tabs.forEach(t => t.addEventListener('click', () => { if (!isSpinning) setTab(t.dataset.mode) }))

  // ── โหมดการจำ: คืนชุดรายชื่อที่ถูกสุ่มไปแล้ว (ตามโหมดปัจจุบัน) ──
  const excludedSet = () => {
    if (currentMode === 'none')    return new Set()
    if (currentMode === 'session') return sessionPicked
    return persistedPicked   // cycle, manual
  }
  const markPicked = async (studentId) => {
    if (currentMode === 'none') return
    if (currentMode === 'session') { sessionPicked.add(studentId); return }
    persistedPicked.add(studentId)
    try { await saveClassRandomizerState(classId, { mode: currentMode, pickedStudentIds: [...persistedPicked] }) } catch {}
  }
  const doReset = async () => {
    persistedPicked = new Set()
    sessionPicked   = new Set()
    try { await resetClassRandomizerPicks(classId) } catch {}
    showToast('รีเซ็ตการสุ่มแล้ว', 'success')
    if (activeTab === 'pick') renderPickTab()
  }
  const changeMode = async (newMode) => {
    if (newMode === currentMode) return
    currentMode     = newMode
    persistedPicked = new Set()
    sessionPicked   = new Set()
    try { await saveClassRandomizerState(classId, { mode: newMode, pickedStudentIds: [] }) } catch {}
    renderPickTab()
  }

  // ════════════════ TAB: สุ่มรายชื่อ ════════════════
  function renderPickTab() {
    const excluded    = excludedSet()
    const pool        = students.filter(s => !excluded.has(s.id))
    const pickedCount = students.length - pool.length

    const _tileHtml = (s, cls) => {
      const bg = `hsl(${(s.id * 47) % 360},60%,55%)`
      const inner = s.image_url
        ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover" />`
        : `<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${bg}">${_htmlEsc((s.full_name ?? '?').charAt(0))}</div>`
      return `<div class="${cls}" data-id="${s.id}">${inner}<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${s.seat_no ?? ''}</div></div>`
    }

    const _reelHtml = (id, big = false) => {
      const w = big ? 104 : 86; const h = big ? 148 : 124
      return `<div id="rp-reel-${id}" class="rp-reel rounded-2xl border-2 border-gray-200 bg-white" style="width:${w}px;height:${h}px;flex-shrink:0;"><div class="rp-reel-inner flex flex-col items-center justify-center h-full p-2 gap-1" style="transition:opacity .06s ease;"><div class="flex-1 w-full rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center text-gray-300 text-2xl font-bold">?</div><div class="text-[9px] font-bold text-gray-500 truncate w-full text-center leading-none">—</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">·</div></div></div>`
    }

    const stageHtml = () => {
      if (currentEffect === 'grid') return `
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 text-center pt-3 pb-1.5">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-grid" class="grid gap-1 px-2 pb-2" style="grid-template-columns:repeat(auto-fill,minmax(54px,1fr))">
            ${pool.map(s => _tileHtml(s, 'rp-grid-tile')).join('')}
          </div>
        </div>`
      if (currentEffect === 'elimination') return `
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed overflow-hidden mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <div class="flex items-center justify-between pt-2.5 pb-1 px-3">
            <p id="rp-hint" class="text-xs text-gray-400">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
            <span id="rp-elim-counter" class="text-xs font-bold text-gray-500">${pool.length} คน</span>
          </div>
          <div id="rp-elim-grid" class="grid gap-1 px-2 pb-2 overflow-y-auto" style="grid-template-columns:repeat(auto-fill,minmax(48px,1fr));max-height:210px;">
            ${pool.map(s => _tileHtml(s, 'rp-elim-tile')).join('')}
          </div>
        </div>`
      if (currentEffect === 'slot') return `
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-4 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-4">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div class="flex justify-center items-center gap-2">
            ${_reelHtml(0)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${_reelHtml(1, true)}
            <div class="font-bold text-amber-300 text-lg leading-none">✦</div>
            ${_reelHtml(2)}
          </div>
        </div>`
      return `
        <div id="rp-stage" class="rounded-2xl border-2 border-dashed py-6 px-4 text-center mb-4 transition-all" style="border-color:#fde68a;background:rgba(254,243,199,.4);">
          <p id="rp-hint" class="text-xs text-gray-400 mb-3">กดปุ่มด้านล่างเพื่อเริ่มสุ่ม</p>
          <div id="rp-avatar" class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 items-center justify-center" style="display:none;opacity:0;box-shadow:0 8px 24px rgba(0,0,0,.18),0 2px 6px rgba(0,0,0,.10);"></div>
          <p id="rp-name" class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2">—</p>
          <p id="rp-code" class="text-xs text-gray-400 mt-1 font-mono"></p>
        </div>`
    }

    body.innerHTML = `
      <div class="flex gap-1.5 mb-3">
        ${EFFECT_DEFS.map(e => {
          const on = e.key === currentEffect
          return `<button class="rp-eff flex-1 py-2 rounded-xl border text-center leading-tight transition ${on ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}" data-eff="${e.key}"><div class="text-base">${e.icon}</div><div class="text-[9px] font-semibold mt-0.5">${e.label}</div></button>`
        }).join('')}
      </div>
      <div class="flex items-center gap-2 mb-3">
        <select id="rp-mode" class="${SELECT_CLS} flex-1 text-xs">
          ${RP_MODES.map(o => `<option value="${o.value}" ${o.value === currentMode ? 'selected' : ''}>${o.label}</option>`).join('')}
        </select>
        <button id="rp-reset" class="flex-shrink-0 px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:bg-gray-50">🔄 รีเซ็ต</button>
      </div>
      ${currentMode !== 'none' ? `<p id="rp-counter" class="text-[11px] text-gray-400 mb-3">สุ่มไปแล้ว ${pickedCount} / ${students.length} คน${pool.length === 0 ? ' — ครบทุกคนแล้ว!' : ''}</p>` : ''}
      ${stageHtml()}
      <button id="rp-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98]" style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 สุ่มเลย!</button>`

    body.querySelectorAll('.rp-eff').forEach(btn => {
      btn.addEventListener('click', () => { if (isSpinning) return; currentEffect = btn.dataset.eff; localStorage.setItem('pp5_rp_effect', currentEffect); renderPickTab() })
    })
    body.querySelector('#rp-mode').addEventListener('change', e => changeMode(e.target.value))
    body.querySelector('#rp-reset').addEventListener('click', () => { if (!isSpinning) doReset() })
    body.querySelector('#rp-go').addEventListener('click', () => spin())
  }

  function spin() {
    if (isSpinning) return
    if (!isDonorTeacher) {
      const randomCount = parseInt(localStorage.getItem('pp5_free_random_count') || '0', 10)
      if (randomCount >= limit) {
        showPaywallPopup()
        return
      }
    }
    let pool = students.filter(s => !excludedSet().has(s.id))
    let willAutoReset = false
    if (pool.length === 0) {
      if (currentMode === 'manual') { showToast('สุ่มครบทุกคนแล้ว — กดปุ่ม "รีเซ็ต" เพื่อเริ่มรอบใหม่', 'warning'); return }
      pool = students
      willAutoReset = (currentMode === 'cycle' || currentMode === 'session')
    }
    isSpinning = true
    const goBtn = body.querySelector('#rp-go')
    goBtn.disabled = true; goBtn.textContent = '🎰 กำลังสุ่ม...'
    const target = pool[Math.floor(Math.random() * pool.length)]

    const _onFinish = async () => {
      if (willAutoReset) { persistedPicked = new Set(); sessionPicked = new Set(); try { await resetClassRandomizerPicks(classId) } catch {} }
      await markPicked(target.id)
      if (!isDonorTeacher) {
        const randomCount = parseInt(localStorage.getItem('pp5_free_random_count') || '0', 10)
        localStorage.setItem('pp5_free_random_count', String(randomCount + 1))
      }
      setTimeout(() => {
        isSpinning = false
        const excl = excludedSet(); const pc = students.length - students.filter(s => !excl.has(s.id)).length
        const ctr = body.querySelector('#rp-counter')
        if (ctr) { const rem = students.length - pc; ctr.textContent = `สุ่มไปแล้ว ${pc} / ${students.length} คน${rem === 0 ? ' — ครบทุกคนแล้ว!' : ''}` }
        const btn = body.querySelector('#rp-go')
        if (!btn) return
        if (currentEffect === 'classic') {
          btn.disabled = false; btn.textContent = '🎲 สุ่มอีกครั้ง'
        } else {
          // กริด/ตัดออก/สล็อต: stage ถูกแทนที่ด้วยการ์ดผู้ชนะแล้ว สุ่มซ้ำในหน้านี้ไม่ได้
          // ให้ปุ่มพากลับไปหน้าตารางเริ่มต้นแทน เพื่อสุ่มรอบใหม่ได้
          btn.disabled = false; btn.textContent = '🔁 สุ่มใหม่'
          const freshBtn = btn.cloneNode(true)
          btn.replaceWith(freshBtn)
          freshBtn.addEventListener('click', () => renderPickTab())
        }
      }, 900)
    }

    if (currentEffect === 'grid')             _spinGrid(pool, target, _onFinish)
    else if (currentEffect === 'elimination') _spinElim(pool, target, _onFinish)
    else if (currentEffect === 'slot')        _spinSlot(pool, target, _onFinish)
    else                                      _spinClassic(pool, target, _onFinish)
  }

  // ── Winner card (shared by elimination + slot) ──────────────────────────────
  function _showWinnerCard(stage, target) {
    stage.style.transition = 'opacity 0.2s ease'
    stage.style.opacity    = '0'
    setTimeout(() => {
      stage.style.borderStyle = 'solid'
      stage.style.borderColor = '#10b981'
      stage.style.boxShadow   = '0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)'
      stage.innerHTML = `<div class="py-5 px-4 text-center">
        <p class="text-xs text-gray-400 mb-3">🎉 ได้คนนี้แหละ!</p>
        <div class="mx-auto mb-3 w-28 h-36 rounded-3xl overflow-hidden bg-gray-200 rp-pop" style="box-shadow:0 8px 24px rgba(0,0,0,.18);">${target.image_url ? `<img src="${_htmlEsc(target.image_url)}" class="w-full h-full object-cover" />` : `<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${_htmlEsc((target.full_name ?? '?').charAt(0))}</div>`}</div>
        <p class="text-2xl sm:text-3xl font-extrabold text-gray-700 truncate px-2 rp-pop">${_htmlEsc(target.full_name)}</p>
        <p class="text-xs text-gray-400 mt-1 font-mono">${target.seat_no ? `เลขที่ ${target.seat_no}` : ''}</p>
      </div>`
      stage.style.opacity = '1'
      _fireConfetti(stage)
    }, 220)
  }

  // ── Effect: Classic ──────────────────────────────────────────────────────────
  function _spinClassic(pool, target, onFinish) {
    const stage    = body.querySelector('#rp-stage')
    const nameEl   = body.querySelector('#rp-name')
    const codeEl   = body.querySelector('#rp-code')
    const hintEl   = body.querySelector('#rp-hint')
    const avatarEl = body.querySelector('#rp-avatar')
    nameEl.classList.remove('rp-pop'); avatarEl?.classList.remove('rp-pop')
    stage.style.borderStyle = 'dashed'; stage.style.borderColor = '#fbbf24'; stage.style.boxShadow = 'none'
    const _showAvatar = (s, spinning = false) => {
      if (!avatarEl) return
      avatarEl.style.display = 'flex'; avatarEl.style.transition = spinning ? 'opacity 0.06s ease' : 'opacity 0.3s ease'; avatarEl.style.opacity = '0'
      setTimeout(() => {
        avatarEl.innerHTML = s.image_url ? `<img src="${s.image_url}" class="w-full h-full object-cover" />` : `<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">${(s.full_name ?? '?').charAt(0)}</div>`
        avatarEl.style.opacity = '1'
      }, spinning ? 30 : 80)
    }
    _showAvatar(pool[Math.floor(Math.random() * pool.length)], true)
    let step = 0, delay = 55
    const tick = () => {
      const s = pool[Math.floor(Math.random() * pool.length)]
      nameEl.textContent = s.full_name; codeEl.textContent = s.seat_no ? `เลขที่ ${s.seat_no}` : ''; _showAvatar(s, true); step++
      if (step < 26) { delay = Math.min(delay * 1.13, 420); setTimeout(tick, delay) }
      else {
        nameEl.textContent = target.full_name; codeEl.textContent = target.seat_no ? `เลขที่ ${target.seat_no}` : ''; _showAvatar(target, false)
        avatarEl?.classList.add('rp-pop'); nameEl.classList.add('rp-pop')
        stage.style.borderStyle = 'solid'; stage.style.borderColor = '#10b981'; stage.style.boxShadow = '0 0 0 6px rgba(16,185,129,.12), 0 0 30px rgba(16,185,129,.25)'
        if (hintEl) hintEl.textContent = '🎉 ได้คนนี้แหละ!'; _fireConfetti(stage); onFinish()
      }
    }
    tick()
  }

  // ── Effect: Grid Spotlight ───────────────────────────────────────────────────
  function _spinGrid(pool, target, onFinish) {
    const stage  = body.querySelector('#rp-stage')
    const hintEl = body.querySelector('#rp-hint')
    const grid   = body.querySelector('#rp-grid')
    if (!grid) return _spinClassic(pool, target, onFinish)
    let allTiles   = [...grid.querySelectorAll('.rp-grid-tile')]
    let targetTile = allTiles.find(t => Number(t.dataset.id) === target.id)
    if (!targetTile) {
      const bg = `hsl(${(target.id * 47) % 360},60%,55%)`
      const ri = Math.floor(Math.random() * allTiles.length)
      allTiles[ri].dataset.id = target.id
      allTiles[ri].innerHTML  = (target.image_url ? `<img src="${_htmlEsc(target.image_url)}" class="w-full h-full object-cover" />` : `<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm" style="background:${bg}">${_htmlEsc((target.full_name ?? '?').charAt(0))}</div>`) + `<div class="absolute bottom-0 left-0 right-0 text-[8px] text-white text-center truncate px-0.5 pb-0.5" style="background:rgba(0,0,0,.45)">ที่ ${target.seat_no ?? ''}</div>`
      targetTile = allTiles[ri]
    }
    if (hintEl) hintEl.textContent = 'กำลังสุ่ม...'
    stage.style.borderColor = '#fbbf24'
    let activeTile = null, step = 0, delay = 38
    const tick = () => {
      activeTile?.classList.remove('rp-active')
      const next = allTiles[Math.floor(Math.random() * allTiles.length)]; next.classList.add('rp-active'); activeTile = next; step++
      if (step < 36) { delay = Math.min(delay * 1.10, 520); setTimeout(tick, delay) }
      else {
        activeTile?.classList.remove('rp-active'); targetTile.classList.add('rp-winner')
        if (hintEl) hintEl.textContent = `🎉 ที่ ${target.seat_no ?? ''} ${target.full_name}`
        targetTile.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        setTimeout(() => { _showWinnerCard(stage, target); onFinish() }, 900)
      }
    }
    tick()
  }

  // ── Effect: Elimination ──────────────────────────────────────────────────────
  function _spinElim(pool, target, onFinish) {
    const stage     = body.querySelector('#rp-stage')
    const hintEl    = body.querySelector('#rp-hint')
    const grid      = body.querySelector('#rp-elim-grid')
    const counterEl = body.querySelector('#rp-elim-counter')
    if (!grid) return _spinClassic(pool, target, onFinish)
    if (hintEl) hintEl.textContent = 'กำลังตัดออก...'
    const toElim   = pool.filter(s => s.id !== target.id).sort(() => Math.random() - 0.5)
    const total    = toElim.length
    let remaining  = pool.length, i = 0
    const getDelay = (p) => p < 0.55 ? 50 : p < 0.8 ? 50 + ((p - 0.55) / 0.25) * 260 : 310 + Math.pow((p - 0.8) / 0.2, 2) * 1400
    const step = () => {
      if (i >= total) {
        const win = grid.querySelector(`[data-id="${target.id}"]`)
        win?.classList.remove('rp-last'); win?.classList.add('rp-winner'); win?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        if (hintEl) hintEl.textContent = `🎉 ที่ ${target.seat_no ?? ''} ${target.full_name}`
        if (counterEl) counterEl.textContent = 'เหลือ 1 คน!'
        setTimeout(() => { _showWinnerCard(stage, target); onFinish() }, 900)
        return
      }
      const tile = grid.querySelector(`[data-id="${toElim[i].id}"]`)
      tile?.classList.remove('rp-last'); tile?.classList.add('rp-eliminated')
      remaining--; if (counterEl) counterEl.textContent = `เหลือ ${remaining} คน`
      if (remaining <= 4) grid.querySelectorAll('.rp-elim-tile:not(.rp-eliminated)').forEach(t => t.classList.add('rp-last'))
      i++; setTimeout(step, getDelay(i / (total || 1)))
    }
    step()
  }

  // ── Effect: Slot Machine ─────────────────────────────────────────────────────
  function _spinSlot(pool, target, onFinish) {
    const stage   = body.querySelector('#rp-stage')
    const hintEl  = body.querySelector('#rp-hint')
    const reelEls = [body.querySelector('#rp-reel-0'), body.querySelector('#rp-reel-1'), body.querySelector('#rp-reel-2')]
    if (!reelEls[0]) return _spinClassic(pool, target, onFinish)
    if (hintEl) hintEl.textContent = 'กำลังหมุน...'
    stage.style.borderColor = '#fbbf24'
    const reelTargets = [pool[Math.floor(Math.random() * pool.length)], target, pool[Math.floor(Math.random() * pool.length)]]
    const STOP_STEPS  = [18, 28, 22]
    const locked      = [false, false, false]
    const _setReel = (reel, s) => {
      const inner = reel.querySelector('.rp-reel-inner'); if (!inner) return
      inner.style.opacity = '0'
      setTimeout(() => {
        const bg = `hsl(${(s.id * 47) % 360},60%,55%)`
        inner.innerHTML = `<div class="flex-1 w-full rounded-xl overflow-hidden">${s.image_url ? `<img src="${_htmlEsc(s.image_url)}" class="w-full h-full object-cover" />` : `<div class="w-full h-full flex items-center justify-center font-bold text-white text-xl" style="background:${bg}">${_htmlEsc((s.full_name ?? '?').charAt(0))}</div>`}</div><div class="text-[9px] font-bold text-gray-600 truncate w-full text-center leading-none mt-1">${_htmlEsc(s.full_name)}</div><div class="text-[8px] text-gray-400 leading-none mt-0.5">${s.seat_no ? `ที่ ${s.seat_no}` : '·'}</div>`
        inner.style.opacity = '1'
      }, 30)
    }
    let masterStep = 0, delay = 50
    const tick = () => {
      masterStep++
      reelEls.forEach((reel, ri) => {
        if (locked[ri]) return
        if (masterStep === STOP_STEPS[ri]) {
          locked[ri] = true
          setTimeout(() => {
            _setReel(reel, reelTargets[ri]); reel.classList.add(ri === 1 ? 'rp-winner-reel' : 'rp-locked')
            if (ri === 1) {
              if (hintEl) hintEl.textContent = '🎉 ได้คนนี้แหละ!'
              setTimeout(() => { _showWinnerCard(stage, target); onFinish() }, 900)
            }
          }, 200)
        } else { _setReel(reel, pool[Math.floor(Math.random() * pool.length)]) }
      })
      if (!locked[1]) { delay = masterStep < 12 ? 50 : Math.min(50 * Math.pow(1.09, masterStep - 12), 450); setTimeout(tick, delay) }
    }
    tick()
  }

  // ════════════════ TAB: สุ่มจัดกลุ่ม ════════════════
  function renderGroupTab() {
    const genderValues = new Set(students.map(s => s.gender).filter(Boolean))
    const showGenderOption = genderValues.size > 1

    body.innerHTML = `
      <div class="flex items-center gap-2 mb-3">
        <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="count">📦 กำหนดจำนวนกลุ่ม</button>
        <button class="rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition" data-gmode="size">👤 กำหนดคนต่อกลุ่ม</button>
      </div>
      <div class="flex items-center gap-2 mb-3">
        <input id="rp-gnum" type="number" min="1" max="${students.length}" value="4"
          class="${INPUT_CLS} w-24 flex-shrink-0 text-center font-bold text-lg" />
        <span id="rp-gnum-label" class="text-xs text-gray-400">กลุ่ม (จากทั้งหมด ${students.length} คน)</span>
      </div>
      ${showGenderOption ? `
      <label class="flex items-start gap-2.5 mb-4 px-3 py-2.5 rounded-xl border border-gray-100 bg-gray-50/60 cursor-pointer">
        <input id="rp-gender-split" type="checkbox" class="mt-0.5 w-4 h-4 rounded accent-pink-500" />
        <span class="text-xs text-gray-600 leading-relaxed">⚧ <strong>แยกกลุ่มตามเพศ</strong> — แต่ละกลุ่มจะมีนักเรียนเพศเดียวกันเท่านั้น (ไม่ติ๊ก = คละเพศได้ในกลุ่มเดียวกัน)</span>
      </label>` : ''}
      <button id="rp-group-go" class="w-full py-3.5 rounded-2xl text-white font-bold text-base shadow-lg transition active:scale-[0.98] mb-4"
        style="background:linear-gradient(135deg,#f59e0b,#ec4899);">🎲 จัดกลุ่มเลย!</button>
      <div id="rp-groups"></div>
    `
    let gmode = 'count'
    const btns = [...body.querySelectorAll('.rp-gmode-btn')]
    const setGmode = (mode) => {
      gmode = mode
      btns.forEach(b => {
        const on = b.dataset.gmode === mode
        b.className = `rp-gmode-btn flex-1 py-2 rounded-xl border text-xs font-semibold transition ${on ? 'border-pink-300 bg-pink-50 text-pink-700' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`
      })
      const label = body.querySelector('#rp-gnum-label')
      label.textContent = mode === 'count'
        ? `กลุ่ม (จากทั้งหมด ${students.length} คน)`
        : `คน/กลุ่ม (จากทั้งหมด ${students.length} คน)`
      body.querySelector('#rp-gnum').value = 4
    }
    btns.forEach(b => b.addEventListener('click', () => setGmode(b.dataset.gmode)))
    setGmode('count')

    const shuffle = (arr) => {
      const a = [...arr]
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
      }
      return a
    }
    const buildGroups = (pool, n) => {
      const shuffled = shuffle(pool)
      if (!shuffled.length) return []
      if (gmode === 'count') {
        const groupCount = Math.min(n, shuffled.length)
        const out = Array.from({ length: groupCount }, () => [])
        shuffled.forEach((s, i) => out[i % groupCount].push(s))
        return out
      }
      const size = Math.min(n, shuffled.length)
      const out = []
      for (let i = 0; i < shuffled.length; i += size) out.push(shuffled.slice(i, i + size))
      return out
    }

    body.querySelector('#rp-group-go').addEventListener('click', () => {
      if (!isDonorTeacher) {
        const randomCount = parseInt(localStorage.getItem('pp5_free_random_count') || '0', 10)
        if (randomCount >= limit) {
          showPaywallPopup()
          return
        }
        localStorage.setItem('pp5_free_random_count', String(randomCount + 1))
      }
      const n = Math.max(1, parseInt(body.querySelector('#rp-gnum').value, 10) || 1)
      const splitByGender = showGenderOption && body.querySelector('#rp-gender-split')?.checked
      const colors = ['#f59e0b','#ec4899','#6366f1','#10b981','#06b6d4','#ef4444','#8b5cf6','#f97316']

      let sections
      if (splitByGender) {
        sections = [
          { title: 'ชาย',      icon: '♂', items: students.filter(s => s.gender === 'ชาย') },
          { title: 'หญิง',     icon: '♀', items: students.filter(s => s.gender === 'หญิง') },
          { title: 'ไม่ระบุเพศ', icon: '•', items: students.filter(s => s.gender !== 'ชาย' && s.gender !== 'หญิง') },
        ].filter(sec => sec.items.length).map(sec => ({ ...sec, groups: buildGroups(sec.items, n) }))
      } else {
        sections = [{ title: null, icon: null, groups: buildGroups(students, n) }]
      }

      const out = body.querySelector('#rp-groups')
      let gi = 0
      out.innerHTML = sections.map(sec => `
        ${sec.title ? `<p class="text-xs font-bold text-gray-500 mt-4 mb-2 first:mt-0">${sec.icon} กลุ่ม${sec.title} <span class="font-normal text-gray-400">(${sec.items.length} คน)</span></p>` : ''}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${sec.groups.map(g => {
            const html = `
            <div class="rp-pop rounded-2xl border border-gray-100 shadow-sm overflow-hidden" style="animation-delay:${gi * 70}ms">
              <div class="px-3 py-2 text-white text-sm font-bold" style="background:${colors[gi % colors.length]}">
                กลุ่มที่ ${gi + 1} <span class="font-normal text-white/80 text-xs">(${g.length} คน)</span>
              </div>
              <div class="p-3 space-y-1.5">
                ${g.map(s => `
                <div class="flex items-center gap-2.5 min-w-0">
                  ${s.image_url
                    ? `<img src="${_htmlEsc(s.image_url)}" class="w-8 h-11 rounded-xl object-cover flex-shrink-0" style="box-shadow:0 3px 10px rgba(0,0,0,.18);" />`
                    : `<div class="w-8 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-sm font-bold" style="background:${colors[gi % colors.length]};box-shadow:0 3px 10px rgba(0,0,0,.18);">${_htmlEsc((s.full_name ?? '?').charAt(0))}</div>`}
                  <span class="text-sm text-gray-700 truncate">${_htmlEsc(s.full_name)}</span>
                  <span class="text-gray-400 text-xs font-mono flex-shrink-0">${s.seat_no ? `ที่ ${s.seat_no}` : _htmlEsc(s.student_code ?? '')}</span>
                </div>`).join('')}
              </div>
            </div>`
            gi++
            return html
          }).join('')}
        </div>
      `).join('')
    })
  }

  setTab('pick')
}

// ─── Combined Edit Modal (ข้อมูล + ตารางสอน + ห้องสอน) ───────────────────────

async function _openCombinedEditModal(teacher, cls, classrooms, schedule, linksByClass, periodMap, scheduleMap, onSaved, initialTab = 'info') {
  document.getElementById('combined-edit-modal')?.remove()

  // โหลด students + termCfg
  const [classStudents, termCfg] = await Promise.all([
    getClassStudents(cls.id).catch(() => []),
    getSystemConfig().catch(() => ({})),
  ])

  const TAB_STYLE = (active) =>
    active
      ? 'cem-tab px-4 py-2.5 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-500 -mb-px'
      : 'cem-tab px-4 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-700 transition'
  const INPUT_CLS = 'w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200'

  const buildingList = [...new Set(classrooms.map(r => r.building))].sort()
  const crCur        = cls.classroom_id ? classrooms.find(r => r.id === cls.classroom_id) : null
  const linkedIds    = linksByClass[cls.id] ?? []
  const DAY_TH       = ['','จ','อ','พ','พฤ','ศ','ส','อา']

  const modal = document.createElement('div')
  modal.id = 'combined-edit-modal'
  modal.className = 'fixed inset-0 z-[500] flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-0 flex-shrink-0">
        <h3 class="font-bold text-gray-800 text-base">✏️ แก้ไขห้องเรียน</h3>
        <button id="cem-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <p class="text-xs text-gray-400 px-6 pb-3 flex-shrink-0">${_htmlEsc(cls.master_subjects?.subject_name??'')} · ${_htmlEsc(cls.class_name??'')}</p>
      <div class="flex border-b border-gray-100 px-6 flex-shrink-0">
        <button class="${TAB_STYLE(true)}" data-cem="info">ข้อมูลพื้นฐาน</button>
        <button class="${TAB_STYLE(false)}" data-cem="schedule">ตารางสอน</button>
        <button class="${TAB_STYLE(false)}" data-cem="room">ห้องสอน</button>
      </div>
      <div id="cem-content" class="flex-1 overflow-y-auto px-6 py-4"></div>
      <div class="px-6 py-4 border-t border-gray-100 flex-shrink-0">
        <button id="cem-cancel" class="w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
      </div>
    </div>`
  document.body.appendChild(modal)

  // ── auto-save state ──────────────────────────────────────────────────────────
  let _infoDirty   = false
  let _infoSaving  = false
  let _infoTimer   = null
  let _hasChanges  = false   // true เมื่อมีการบันทึก DB จริง

  const _setInfoStatus = (state) => {
    const el = modal.querySelector('#cem-info-status')
    if (!el) return
    const map = {
      dirty:  { cls: 'text-amber-500', text: '● มีการเปลี่ยนแปลง' },
      saving: { cls: 'text-indigo-500', text: '⏳ กำลังบันทึก...' },
      saved:  { cls: 'text-emerald-600', text: '✅ บันทึกแล้ว' },
      error:  { cls: 'text-red-500', text: '⚠️ บันทึกไม่สำเร็จ' },
    }
    const s = map[state] ?? map.saved
    el.className = `text-xs font-medium ${s.cls}`
    el.textContent = s.text
    el.classList.remove('hidden')
  }

  const _saveInfoNow = async () => {
    if (!modal.querySelector('#cem-classname')) return
    _infoSaving = true
    _setInfoStatus('saving')
    try {
      const srcVal = modal.querySelector('#cem-source-class')?.value
      await updateClass(cls.id, {
        class_name:      modal.querySelector('#cem-classname').value.trim() || cls.class_name,
        skill_group:     modal.querySelector('#cem-skillgroup').value.trim() || null,
        google_sheet_id: modal.querySelector('#cem-sheetid').value.trim() || null,
        head_student_id: modal.querySelector('#cem-head').value ? Number(modal.querySelector('#cem-head').value) : null,
        day1_date:       modal.querySelector('#cem-day1')?.value || null,
        day2_date:       modal.querySelector('#cem-day2')?.value || null,
        day3_date:       modal.querySelector('#cem-day3')?.value || null,
        day4_date:       modal.querySelector('#cem-day4')?.value || null,
        day5_date:       modal.querySelector('#cem-day5')?.value || null,
        day6_date:       modal.querySelector('#cem-day6')?.value || null,
        source_class_id: srcVal ? Number(srcVal) : null,
      })
      _infoDirty = false
      _hasChanges = true
      _setInfoStatus('saved')
    } catch {
      _setInfoStatus('error')
    } finally {
      _infoSaving = false
    }
  }

  const _scheduleInfoSave = (immediate = false) => {
    _infoDirty = true
    _setInfoStatus('dirty')
    clearTimeout(_infoTimer)
    _infoTimer = setTimeout(_saveInfoNow, immediate ? 0 : 800)
  }

  // ── infoHTML ─────────────────────────────────────────────────────────────────
  const infoHTML = () => {
    const headOpts = classStudents.map(s =>
      `<option value="${s.id}" data-code="${_htmlEsc(s.student_code)}" data-img="${_htmlEsc(s.image_url??'')}" data-room="${_htmlEsc(s.main_room??'')}"
         ${Number(cls.head_student_id)===Number(s.id)?'selected':''}>
         ${_htmlEsc(s.full_name)} (${_htmlEsc(s.student_code)})</option>`).join('')
    return `
    <div class="space-y-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อห้อง / ระดับชั้น</label>
        <input id="cem-classname" type="text" value="${_htmlEsc(cls.class_name??'')}" class="${INPUT_CLS}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">กลุ่มทักษะ</label>
        <input id="cem-skillgroup" type="text" value="${_htmlEsc(cls.skill_group??'')}" placeholder="เช่น วิชาการ, ภาษา, ชีวิต" class="${INPUT_CLS}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">Google Sheet ID</label>
        <input id="cem-sheetid" type="text" value="${_htmlEsc(cls.google_sheet_id??'')}" placeholder="ID จาก URL ของ Sheet" class="${INPUT_CLS} font-mono" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">หัวหน้าห้อง</label>
        <select id="cem-head" class="${INPUT_CLS} bg-white">
          <option value="">— ยังไม่ระบุ —</option>
          ${headOpts}
        </select>
        ${classStudents.length === 0
          ? `<p class="text-xs text-amber-500 mt-1">ยังไม่มีนักเรียนในห้อง จึงยังเลือกหัวหน้าไม่ได้</p>`
          : ''}
        <!-- Card หัวหน้าห้อง -->
        <div id="cem-head-card" class="hidden mt-2 flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
          <div id="cem-head-avatar" class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-200"></div>
          <div>
            <p id="cem-head-name" class="font-semibold text-gray-800 text-sm"></p>
            <p id="cem-head-code" class="text-xs text-gray-400"></p>
            <p id="cem-head-room" class="text-xs text-gray-400"></p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between mb-2">
          <label class="block text-xs font-semibold text-gray-600">วันสอน 6 คาบแรก</label>
          <button type="button" id="cem-auto-dates"
            class="text-xs px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 font-medium transition">
            🗓️ คำนวณจากตารางสอน
          </button>
        </div>
        <p id="cem-dates-info" class="hidden text-xs text-emerald-600 mb-2"></p>
        <div class="grid grid-cols-3 gap-2">
          ${[1,2,3,4,5,6].map(n => `
          <div>
            <p class="text-xs text-gray-400 mb-1">คาบที่ ${n}</p>
            <input id="cem-day${n}" type="date" value="${cls[`day${n}_date`]??''}"
              class="w-full border border-gray-200 rounded-xl px-2.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>`).join('')}
        </div>
      </div>
      <!-- ใช้ข้อมูลจากห้องเรียนอื่น -->
      <div class="border-t border-gray-100 pt-3">
        <label class="block text-xs font-semibold text-gray-600 mb-1">🔗 ใช้ข้อมูลจากห้องเรียนอื่น</label>
        <p class="text-xs text-gray-400 mb-2">สำหรับวิชาที่ไม่ได้สอนจริง — ปพ.5 จะดึงการเช็คชื่อและคะแนน (เฉพาะที่กรอกเอง) จากห้องที่เลือก</p>
        <select id="cem-source-class" class="${INPUT_CLS} text-xs">
          <option value="">— ไม่ได้ใช้ข้อมูลจากห้องอื่น —</option>
        </select>
        <p id="cem-source-info" class="hidden text-xs text-amber-600 mt-1"></p>
      </div>
      <p id="cem-info-status" class="hidden text-xs font-medium text-emerald-600"></p>
    </div>`
  }

  // linked IDs ที่บันทึกใน DB แล้ว (อย่าแก้ไขโดยตรง)
  const currentLinked = new Set(linkedIds)
  // pending state — เปลี่ยนได้จากการคลิก, save เมื่อกดปุ่ม
  const pendingLinked = new Set(linkedIds)

  // โหลด source class options (background)
  if (teacher?.id) {
    getTeacherClassesForLinking(teacher.id, cls.id).then(classes => {
      const sel = modal.querySelector('#cem-source-class')
      if (!sel) return
      classes.forEach(c => {
        const ms  = c.master_subjects
        const lbl = `${ms?.subject_name ?? '?'} (${ms?.subject_code ?? ''}) — ${c.class_name} · ${ms?.credit ?? '?'} หน่วยกิต`
        const opt = new Option(lbl, c.id, false, Number(c.id) === Number(cls.source_class_id))
        sel.appendChild(opt)
      })
      // แสดง warning ถ้า credit ต่างกัน
      const _showCreditWarning = (srcId) => {
        const infoEl = modal.querySelector('#cem-source-info')
        if (!infoEl) return
        const src = classes.find(c => Number(c.id) === Number(srcId))
        if (!src) { infoEl.classList.add('hidden'); return }
        const srcCredit = src.master_subjects?.credit ?? 1
        const tgtCredit = cls.master_subjects?.credit ?? 1
        if (srcCredit !== tgtCredit) {
          infoEl.textContent = `⚠️ หน่วยกิตต่างกัน (แหล่ง ${srcCredit} / วิชานี้ ${tgtCredit}) — ระบบจะ remap คาบต่อสัปดาห์อัตโนมัติ`
          infoEl.classList.remove('hidden')
        } else { infoEl.classList.add('hidden') }
      }
      if (cls.source_class_id) _showCreditWarning(cls.source_class_id)
      sel.addEventListener('change', () => { _showCreditWarning(sel.value); _scheduleInfoSave(true) })
    }).catch(() => {})
  }

  // linksBySchedule: scheduleId → classId[] (สำหรับตรวจว่าคาบนี้ถูกใช้กับห้องไหน)
  const linksBySchedule = {}
  Object.entries(linksByClass).forEach(([cid, sids]) => {
    sids.forEach(sid => {
      if (!linksBySchedule[sid]) linksBySchedule[sid] = []
      linksBySchedule[sid].push(Number(cid))
    })
  })
  // map classId → class object (สำหรับแสดงชื่อห้อง)
  const classById = Object.fromEntries((window._classesFlat ?? []).map(c => [c.id, c]))

  // ── scheduleHTML ─────────────────────────────────────────────────────────────

  const scheduleHTML = () => {
    const allSchedule = schedule.filter(s => !s.is_free)
    if (!allSchedule.length)
      return `<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีตารางสอน กรุณาสร้างตารางสอนก่อน</p>`

    const hasFri   = termCfg.hasFriday === 'true'
    const numDays  = hasFri ? 6 : 5
    const days     = Array.from({length: numDays}, (_, i) => i)
    const DAY_NAMES  = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์']
    const DAY_COLORS = ['bg-red-50','bg-yellow-50','bg-pink-50','bg-green-50','bg-orange-50','bg-purple-50']

    // สร้าง schedMap: `${dow}-${period_no}` → entry
    const schedMap = {}
    allSchedule.forEach(s => {
      schedMap[`${s.day_of_week}-${s.period_no}`] = s
      const span = s.span_periods ?? 1
      for (let i = 1; i < span; i++)
        schedMap[`${s.day_of_week}-${s.period_no + i}`] = { ...s, _secondary: true }
    })

    const sortedPeriods = Object.values(periodMap).sort((a, b) => a.period_no - b.period_no)

    // state: 'selected' | 'other' | 'none'
    const _cellState = (sid) => {
      if (pendingLinked.has(sid)) return 'selected'
      const others = (linksBySchedule[sid] ?? []).filter(cid => cid !== cls.id)
      return others.length ? 'other' : 'none'
    }

    // คืน HTML ของ content div เต็มความสูง (เหมือน renderScheduleGrid)
    const _cellContent = (entry, state) => {
      const subj = entry.subject_name ? _htmlEsc(entry.subject_name) : ''
      const room = entry.class_name   ? _htmlEsc(entry.class_name)   : ''
      if (state === 'selected')
        return `<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
          <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${subj}</p>
          ${room ? `<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${room}</p>` : ''}
        </div>`
      if (state === 'other') {
        const others = (linksBySchedule[entry.id] ?? []).filter(cid => cid !== cls.id)
        const otherName = others.map(cid => classById[cid]?.class_name ?? `ห้อง ${cid}`).join(', ')
        return `<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
          bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer"
          style="min-height:52px;border-left:3px solid #60a5fa"
          title="คลิกเพื่อเชื่อมร่วมกับ: ${otherName}">
          <p class="font-bold text-[11px] leading-tight text-blue-600 break-words w-full">${subj}</p>
          ${room ? `<p class="text-[10px] text-blue-400 leading-tight w-full">${room}</p>` : ''}
          <p class="text-[9px] text-blue-400 mt-0.5">+เชื่อมร่วม</p>
        </div>`
      }
      return `<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center
        bg-white hover:bg-emerald-50 hover:border-l-4 hover:border-emerald-400 transition-all"
        style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${subj}</p>
        ${room ? `<p class="text-[10px] text-gray-400 leading-tight w-full">${room}</p>` : ''}
      </div>`
    }

    return `
      <p class="text-xs text-gray-400 mb-2">คลิกคาบที่ต้องการเชื่อมโยง — กดบันทึกเพื่อยืนยัน</p>
      <div class="overflow-auto rounded-xl border border-gray-100" style="max-height:55vh">
        <table class="w-full text-xs border-collapse" style="min-width:300px">
          <thead class="sticky top-0 z-10">
            <tr class="bg-gray-50">
              <th class="border border-gray-100 px-2 py-2 text-center text-gray-400 w-16 font-medium text-[10px]">คาบ</th>
              ${days.map(d => `<th class="border border-gray-100 px-1 py-2 text-center font-semibold text-gray-700 text-[11px] ${DAY_COLORS[d]}">${DAY_NAMES[d]}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${sortedPeriods.map(p => `
            <tr>
              <td class="border border-gray-100 px-1 py-2 text-center bg-gray-50 align-middle">
                <p class="font-bold text-gray-700 text-[10px]">คาบ ${p.period_no}</p>
                <p class="text-[9px] text-gray-400">${p.start_time?.slice(0,5) ?? ''}</p>
              </td>
              ${days.map(d => {
                const key   = `${d}-${p.period_no}`
                const entry = schedMap[key]
                if (entry?._secondary) return ''
                if (!entry) return `<td class="border border-gray-100 p-0" style="min-width:56px;height:1px"></td>`
                const span  = entry.span_periods ?? 1
                const state = _cellState(entry.id)
                return `<td class="border border-gray-100 p-0 cursor-pointer cem-srow"
                  data-sid="${entry.id}" data-state="${state}"
                  style="min-width:56px;height:1px" ${span > 1 ? `rowspan="${span}"` : ''}>
                  ${_cellContent(entry, state)}
                </td>`
              }).join('')}
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`
  }

  const _refreshCell = (cell) => {
    const sid   = parseInt(cell.dataset.sid)
    const entry = schedule.find(s => s.id === sid)
    if (!entry) return
    const others = (linksBySchedule[sid] ?? []).filter(cid => cid !== cls.id)
    const state  = pendingLinked.has(sid) ? 'selected' : others.length ? 'other' : 'none'
    cell.dataset.state = state
    const subj = entry.subject_name ? _htmlEsc(entry.subject_name) : ''
    const room = entry.class_name   ? _htmlEsc(entry.class_name)   : ''
    if (state === 'selected')
      cell.innerHTML = `<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-emerald-100" style="min-height:52px;border-left:4px solid #10b981">
        <p class="font-extrabold text-[11px] leading-tight text-emerald-800 break-words w-full">${subj}</p>
        ${room ? `<p class="text-[10px] font-semibold text-emerald-600 leading-tight w-full">${room}</p>` : ''}
      </div>`
    else if (state === 'other') {
      const otherName = others.map(cid => classById[cid]?.class_name ?? `ห้อง ${cid}`).join(', ')
      cell.innerHTML = `<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${otherName}">
        <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${subj}</p>
        ${room ? `<p class="text-[10px] text-gray-400 leading-tight w-full">${room}</p>` : ''}
      </div>`
    } else {
      cell.innerHTML = `<div class="w-full h-full flex flex-col justify-center items-center gap-0.5 px-1 py-2 text-center bg-white hover:bg-emerald-50 transition-all" style="min-height:52px;border-left:3px solid #e5e7eb">
        <p class="font-bold text-[11px] leading-tight text-gray-500 break-words w-full">${subj}</p>
        ${room ? `<p class="text-[9px] text-gray-400 leading-tight">${room}</p>` : ''}
      </div>`
    }
  }

  const attachScheduleEvents = () => {
    modal.querySelectorAll('.cem-srow').forEach(cell => {
      cell.addEventListener('click', async () => {
        const sid   = parseInt(cell.dataset.sid)
        const state = cell.dataset.state
        const entry = schedule.find(s => s.id === sid)
        if (!entry) return

        if (state === 'other') {
          // คาบนี้ถูกใช้กับห้องอื่น — อนุญาตให้ link ร่วมกันได้ (กรณีสอนสองห้องพร้อมกัน)
          const others = (linksBySchedule[sid] ?? []).filter(cid => cid !== cls.id)
          const otherName = others.map(cid => classById[cid]?.class_name ?? `ห้อง ${cid}`).join(', ')
          const p = periodMap[entry.period_no]
          const timeStr = p?.start_time ? p.start_time.slice(0,5) : `คาบ ${entry.period_no}`
          const cfm = document.createElement('div')
          cfm.className = 'fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4'
          cfm.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">🔗</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ใช้กับห้องอื่นอยู่</p>
              <p class="text-sm text-gray-500 mb-1">${DAY_TH[entry.day_of_week]} ${timeStr} · ${_htmlEsc(entry.subject_name ?? '')}</p>
              <p class="text-xs text-gray-500 mb-1">เชื่อมอยู่กับ: <b>${otherName}</b></p>
              <p class="text-xs text-emerald-600 mb-4">สามารถเชื่อมร่วมกันได้ เช่น กรณีสอนสองห้องพร้อมกัน</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">เชื่อมร่วมกัน</button>
              </div>
            </div>`
          document.body.appendChild(cfm)
          cfm.querySelector('.cfm-cancel').addEventListener('click', () => cfm.remove())
          cfm.querySelector('.cfm-ok').addEventListener('click', async () => {
            cfm.remove()
            try {
              await linkClassToSchedule(cls.id, sid)  // link เพิ่ม ไม่ unlink ห้องเดิม
              pendingLinked.add(sid); currentLinked.add(sid)
              _hasChanges = true; _refreshCell(cell)
              showToast(`เชื่อมร่วมกับ ${otherName} แล้ว ✅`, 'success')
            } catch(e) { showToast('เชื่อมไม่สำเร็จ: ' + (e.message ?? ''), 'error') }
          })
        } else if (state === 'selected') {
          try {
            await unlinkClassFromSchedule(cls.id, sid)
            pendingLinked.delete(sid); currentLinked.delete(sid)
            _hasChanges = true; _refreshCell(cell)
            showToast('ยกเลิกการเชื่อมแล้ว', 'info')
          } catch(e) { showToast('ยกเลิกไม่สำเร็จ: ' + (e.message ?? ''), 'error') }
        } else {
          try {
            await linkClassToSchedule(cls.id, sid)
            pendingLinked.add(sid); currentLinked.add(sid)
            _hasChanges = true; _refreshCell(cell)
            showToast('เชื่อมตารางสอนแล้ว ✅', 'success')
          } catch(e) { showToast('เชื่อมไม่สำเร็จ: ' + (e.message ?? ''), 'error') }
        }
      })
    })
  }

  // ── roomHTML ──────────────────────────────────────────────────────────────────
  const roomHTML = () => `
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">อาคาร</label>
        <select id="cem-building" class="${INPUT_CLS} bg-white">
          <option value="">— ไม่ระบุ —</option>
          ${buildingList.map(b => `<option value="${b}" ${crCur?.building===b?'selected':''}>${b}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ห้อง</label>
        <select id="cem-room" class="${INPUT_CLS} bg-white">
          <option value="">— เลือกอาคารก่อน —</option>
        </select>
      </div>
    </div>`

  // ── attach info tab events ────────────────────────────────────────────────────
  const attachInfoEvents = () => {
    const headSel  = modal.querySelector('#cem-head')
    const headCard = modal.querySelector('#cem-head-card')

    const updateHeadCard = () => {
      const opt = headSel?.options[headSel.selectedIndex]
      if (!opt?.value) { headCard?.classList.add('hidden'); return }
      const name = opt.text.split(' (')[0]
      const img  = opt.dataset.img ?? ''
      modal.querySelector('#cem-head-name').textContent = name
      modal.querySelector('#cem-head-code').textContent = `รหัส: ${opt.dataset.code??''}`
      modal.querySelector('#cem-head-room').textContent = opt.dataset.room ? `ห้อง: ${opt.dataset.room}` : ''
      const avatarEl = modal.querySelector('#cem-head-avatar')
      avatarEl.innerHTML = img
        ? `<img src="${img}" class="w-full h-full object-cover" />`
        : `<div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-emerald-200 to-teal-200 text-emerald-700 font-bold text-lg">${name.charAt(0)}</div>`
      headCard?.classList.remove('hidden')
    }
    headSel?.addEventListener('change', () => { updateHeadCard(); _scheduleInfoSave(true) })
    if (headSel?.value) updateHeadCard()

    // auto-save on text input (debounced) + date change (immediate)
    ;['cem-classname','cem-skillgroup','cem-sheetid'].forEach(id => {
      modal.querySelector(`#${id}`)?.addEventListener('input', () => _scheduleInfoSave())
    })
    ;[1,2,3,4,5,6].forEach(n => {
      modal.querySelector(`#cem-day${n}`)?.addEventListener('change', () => _scheduleInfoSave(true))
    })

    // ── auto-dates button ─────────────────────────────────────────────────────
    modal.querySelector('#cem-auto-dates')?.addEventListener('click', async () => {
      const btn    = modal.querySelector('#cem-auto-dates')
      const infoEl = modal.querySelector('#cem-dates-info')
      btn.textContent = '⏳'; btn.disabled = true
      try {
        const curYear  = parseInt(termCfg.academicYear ?? 2568)
        const curSem   = parseInt(termCfg.semester ?? 1)
        const termStart = termCfg.semester_start ?? termCfg.term_start_date ?? _dateInputValue(new Date())
        const sched = teacher ? await getMySchedule(teacher.id, curYear, curSem).catch(() => []) : []
        if (!sched.length) {
          infoEl.textContent = '⚠️ ยังไม่มีตารางสอน — กรุณากรอกวันเอง'
          infoEl.classList.remove('hidden'); return
        }
        const groups = {}
        sched.filter(s => !s.is_free).forEach(e => {
          const key = `${e.subject_name??'?'}|${e.class_name??''}`
          if (!groups[key]) groups[key] = { label: `${e.subject_name??'?'}${e.class_name?` — ${e.class_name}`:''}`, entries: [] }
          groups[key].entries.push(e)
        })
        const DAY_TH2 = ['อา','จ','อ','พ','พฤ','ศ','ส']
        const _desc = (entries) => {
          const byDay = {}
          entries.forEach(e => { if(!byDay[e.day_of_week]) byDay[e.day_of_week]=[]; byDay[e.day_of_week].push(e.period_no) })
          return Object.entries(byDay).map(([d,ps])=>`${DAY_TH2[d]} คาบ ${ps.join(',')}`).join(' · ')
        }
        const popup = document.createElement('div')
        popup.className = 'fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4'
        popup.innerHTML = `
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
            <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between">
              <h3 class="font-bold text-gray-800">🗓️ เลือกวิชาจากตารางสอน</h3>
              <button class="ce-close text-gray-400 hover:text-gray-600">✕</button>
            </div>
            <div class="px-5 py-4 space-y-2 max-h-72 overflow-y-auto">
              <p class="text-xs text-gray-400 mb-3">เลือกวิชาที่ต้องการคำนวณวัน 6 คาบแรก</p>
              ${Object.entries(groups).map(([key, g]) => `
              <label class="flex items-start gap-3 p-3 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition">
                <input type="radio" name="cem-dates-subj" value="${_htmlEsc(key)}" class="mt-0.5 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-800">${_htmlEsc(g.label)}</p>
                  <p class="text-xs text-gray-400 mt-0.5">${_desc(g.entries)}</p>
                </div>
              </label>`).join('')}
            </div>
            <div class="px-5 pb-5 pt-3 border-t border-gray-100 flex gap-3">
              <button class="ce-close flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
              <button id="cem-calc-btn" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">คำนวณ</button>
            </div>
          </div>`
        document.body.appendChild(popup)
        popup.querySelectorAll('.ce-close').forEach(b => b.addEventListener('click', () => popup.remove()))
        popup.querySelector('#cem-calc-btn').addEventListener('click', () => {
          const key = popup.querySelector('input[name="cem-dates-subj"]:checked')?.value
          if (!key) { showToast('กรุณาเลือกวิชาก่อน', 'warning'); return }
          popup.remove()
          const g = groups[key]
          if (!g) return
          // คำนวณวันจาก entries
          const tStart = _parseDateOnly(termStart) ?? new Date()
          const startDow = tStart.getDay()
          const periods = []
          g.entries.forEach(e => { const sp = e.span_periods ?? 1; for(let i=0;i<sp;i++) periods.push({ dow:e.day_of_week, pno:(e.period_no??0)+i }) })
          periods.sort((a,b) => { const ao=(a.dow-startDow+7)%7, bo=(b.dow-startDow+7)%7; return ao!==bo?ao-bo:a.pno-b.pno })
          const result = []; let week = 0
          while(result.length < 6) {
            for(const p of periods) {
              const d = new Date(tStart); d.setDate(d.getDate()+((p.dow-startDow+7)%7)+week*7)
              result.push(d); if(result.length>=6) break
            }
            week++
          }
          result.slice(0,6).forEach((d,i) => {
            const el = modal.querySelector(`#cem-day${i+1}`)
            if(el) el.value = _dateInputValue(d)
          })
          _scheduleInfoSave(true)
          infoEl.textContent = `✅ คำนวณจาก "${g.label}" — ตรวจสอบและแก้ไขได้`
          infoEl.classList.remove('hidden')
        })
      } catch(err) {
        infoEl.textContent = 'โหลดตารางไม่สำเร็จ: ' + (err.message??'')
        infoEl.classList.remove('hidden')
      } finally {
        btn.textContent = '🗓️ คำนวณจากตารางสอน'; btn.disabled = false
      }
    })
  }

  // ── tab switching ─────────────────────────────────────────────────────────────
  const showTab = (tabId) => {
    if (_infoSaving) { showToast('กำลังบันทึกข้อมูล รอสักครู่...', 'warning'); return }
    if (_infoDirty)  { showToast('มีข้อมูลที่ยังไม่ถูกบันทึก กรุณารอระบบบันทึกก่อน', 'warning'); return }
    modal.querySelectorAll('.cem-tab').forEach(t => { t.className = TAB_STYLE(t.dataset.cem === tabId) })
    const box = modal.querySelector('#cem-content')
    if (tabId === 'info') {
      box.innerHTML = infoHTML()
      attachInfoEvents()
    } else if (tabId === 'schedule') {
      box.innerHTML = scheduleHTML()
      attachScheduleEvents()
    } else {
      box.innerHTML = roomHTML()
      const buildSel = box.querySelector('#cem-building')
      const roomSel  = box.querySelector('#cem-room')
      const fillRooms = (b) => {
        const rooms = classrooms.filter(r => r.building === b)
        roomSel.innerHTML = `<option value="">— เลือกห้อง —</option>` +
          rooms.map(r => `<option value="${r.id}" ${r.id===cls.classroom_id?'selected':''}>${r.room_number}${r.name?` — ${r.name}`:''}</option>`).join('')
      }
      if (crCur?.building) fillRooms(crCur.building)
      buildSel.addEventListener('change', () => fillRooms(buildSel.value))
      roomSel.addEventListener('change', async () => {
        const roomId = roomSel.value ? parseInt(roomSel.value) : null
        await assignClassroom(cls.id, roomId).catch(() => {})
        _hasChanges = true
        showToast('บันทึกห้องสอนแล้ว ✅', 'success')
      })
    }
  }

  const _closeModal = async () => {
    // flush info ถ้ายังมี pending
    if (_infoDirty || _infoSaving) {
      clearTimeout(_infoTimer)
      await _saveInfoNow().catch(() => {})
    }
    modal.remove()
    if (_hasChanges && onSaved) onSaved()
  }

  showTab(initialTab)
  modal.querySelectorAll('.cem-tab').forEach(t => t.addEventListener('click', () => showTab(t.dataset.cem)))
  modal.querySelector('#cem-close').addEventListener('click', _closeModal)
  modal.querySelector('#cem-cancel').addEventListener('click', _closeModal)
  modal.addEventListener('click', e => { if (e.target === modal) _closeModal() })
}

// ─── Score Column Management ──────────────────────────────────────────────────


// ─── Attendance Grid ──────────────────────────────────────────────────────────



export { renderAttendanceGrid, renderAttendance, renderLifeSkillScore, renderReadingScore, renderPrayerScore } from './teacher-views-attendance.js'
export { renderGrades, renderGradesGrid, renderRequests } from './teacher-views-grades.js'
export async function renderSchedule(teacher) {
  setActiveNav('schedule')
  setTitle('ตารางสอน', 'schedule')
  const cfg = await getSystemConfig().catch(()=>({}))
  const curYear = parseInt(cfg.academicYear ?? 2568)
  const curSem  = parseInt(cfg.semester ?? 1)
  await renderScheduleGrid(teacher, curYear, curSem, cfg)
}

// ─── Schedule Grid (ดูและแก้ไขตาราง) ─────────────────────────────────────────
export async function renderScheduleGrid(teacher, academicYear, semester, cfgIn = null) {
  setActiveNav('schedule')
  setTitle('ตารางสอน', 'schedule')

  const cfg      = cfgIn ?? await getSystemConfig().catch(()=>({}))
  const hasFri   = cfg.hasFriday === 'true'
  const visionOn = cfg.scheduleVisionEnabled === 'true'
  const geminiKey= _resolveGeminiKey(cfg, teacher)

  const [periods, subjects, scheduleData, roomColorRows, links, allClasses] = await Promise.all([
    getPeriods().catch(()=>[]),
    teacher ? getMySubjects(teacher.id).catch(()=>[]) : Promise.resolve([]),
    teacher ? getMySchedule(teacher.id, academicYear, semester).catch(()=>[]) : Promise.resolve([]),
    teacher ? getTeacherRoomColors(teacher.id).catch(()=>[]) : Promise.resolve([]),
    teacher ? getClassScheduleLinks(teacher.id).catch(()=>[]) : Promise.resolve([]),
    teacher ? getMyClasses(teacher.id).catch(()=>[]) : Promise.resolve([]),
  ])
  const roomColorMap = Object.fromEntries((roomColorRows ?? []).map(r => [r.room_key, r.color_hex]))

  // map scheduleId → linked class (ใช้ class แรกที่ link ถ้ามีหลาย)
  const classMap = Object.fromEntries(allClasses.map(c => [c.id, c]))
  const linkedClassBySchedule = {}
  links.forEach(l => {
    if (!linkedClassBySchedule[l.teacher_schedule_id]) {
      linkedClassBySchedule[l.teacher_schedule_id] = classMap[l.class_id]
    }
  })

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

  const _entryColor = (entry = {}, subj = null) => {
    const linked = entry?.id ? linkedClassBySchedule[entry.id] : null
    return resolveScheduleColor({
      teacherId:   teacher?.id,
      className:   linked?.class_name ?? entry.class_name,
      subjectName: linked?.master_subjects?.subject_name ?? entry.subject_name ?? subj?.subject_name,
      fallbackId:  linked?.id ?? entry.subject_id ?? subj?.id,
    }, roomColorMap)
  }

  setContent(`<div class="max-w-full animate-fade">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
      <div>
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

    <!-- ลิงค์ตารางสอนโรงเรียน -->
    <div class="mb-4 bg-sky-50 border border-sky-200 rounded-2xl px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
      <div class="min-w-0">
        <p class="text-sm font-semibold text-sky-800">📅 ตารางสอนของโรงเรียน</p>
        <p class="text-xs text-sky-600 mt-0.5 leading-relaxed">เปิดดูตารางสอนจากระบบโรงเรียน แล้วแคปหน้าจอมาอัปโหลดผ่านปุ่ม "🤖 อัปโหลดรูปตาราง" เพื่อให้ AI กรอกข้อมูลให้อัตโนมัติ</p>
      </div>
      <a href="http://azizstan.ac.th/2026/Teacher/" target="_blank" rel="noopener"
         class="flex-shrink-0 px-4 py-2 bg-sky-600 text-white rounded-xl font-bold text-sm hover:bg-sky-700 transition whitespace-nowrap">
        เปิดตารางสอน ↗
      </a>
    </div>

    <!-- ตารางสอน -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-auto">
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
              // สีล็อกตามครู+ห้องเรียน ให้คงที่ข้ามเครื่องและข้ามวัน
              const clrInfo   = _entryColor(entry, subj)
              // height:1px บน td → ทำให้ h-full ของ child ทำงานใน table cell ได้
              return `<td class="border border-gray-100 p-0 cursor-pointer
                hover:bg-indigo-50/30 transition-colors schedule-cell"
                style="height:1px"
                data-dow="${d}" data-period="${p.period_no}"
                ${span > 1 ? `rowspan="${span}"` : ''}>
                ${dispSubj ? `
                <div class="w-full h-full rounded-none flex flex-col justify-center items-center
                  gap-1 px-2 py-2 text-center" style="min-height:64px;background:${clrInfo.soft};color:${clrInfo.text};border-left:4px solid ${clrInfo.dot}">
                  <p class="font-extrabold leading-tight text-sm break-words w-full">${dispSubj}</p>
                  ${dispClass ? `<p class="text-[11px] font-semibold opacity-90 leading-tight w-full">${dispClass}</p>` : ''}
                  ${dispTeach ? `<p class="text-[10px] opacity-65 leading-tight w-full">${dispTeach}</p>` : ''}
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
        academicYear, semester, roomColorMap,
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
async function _openSchedulePopup({ teacher, dow, period, periods, subjects, entry, academicYear, semester, roomColorMap = {}, onSave, onDelete }) {
  document.getElementById('sched-popup')?.remove()

  const allRooms   = await getUniqueRooms().catch(()=>[])
  const religRooms = await getUniqueReligionRooms().catch(()=>[])
  const allRoomList = [...new Set([...allRooms, ...religRooms])].sort()

  const DAY_NAMES  = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์']
  const PERIOD_NOS = periods.map(p => p.period_no)
  const p = periods.find(x => x.period_no === period)

  const initSubjName  = entry?.subject_name ?? (entry?.subject_id ? subjects.find(s=>s.id===entry.subject_id)?.subject_name ?? '' : '')
  let formSubjName = initSubjName
  let formClassName = entry?.class_name ?? ''
  let formTeacherName = entry?.teacher_name ?? ''
  let selectedColorHex = resolveScheduleColor({
    teacherId: teacher?.id,
    className: formClassName,
    subjectName: initSubjName,
    fallbackId: entry?.subject_id,
  }, roomColorMap).dot
  let colorPickerOpen = false

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
    const clr = colorMetaForHex(selectedColorHex)
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
              <div class="relative flex-shrink-0 mt-0.5">
                <button id="sp-color" type="button"
                  class="w-11 h-11 rounded-full border-4 border-white shadow-md ring-2 ring-gray-200"
                  style="background:${clr.dot}" title="เลือกสีรายวิชา"></button>
                ${colorPickerOpen ? `
                <div class="absolute left-0 top-14 z-[310] w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
                  <p class="text-xs font-bold text-gray-500 mb-2">สีรายวิชา</p>
                  <div class="grid grid-cols-6 gap-2">
                    ${SCHEDULE_COLOR_PRESETS.map(p => `
                    <button type="button"
                      class="sp-color-option w-8 h-8 rounded-full border-2 ${p.dot.toLowerCase() === selectedColorHex.toLowerCase() ? 'border-gray-800' : 'border-white'} shadow-sm"
                      style="background:${p.dot}"
                      data-color="${p.dot}"
                      title="เลือกสี"></button>`).join('')}
                  </div>
                </div>` : ''}
              </div>
              <div class="flex-1 space-y-1.5 min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">วิชา</span>
                  <input id="sp-subj-name" list="sp-subj-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold"
                    value="${_htmlEsc(formSubjName)}" placeholder="ชื่อวิชา" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ห้อง</span>
                  <input id="sp-class" list="sp-room-list" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs"
                    value="${_htmlEsc(formClassName)}" placeholder="ชั้น/ห้อง เช่น ม.6/2" />
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">ครู</span>
                  <input id="sp-teacher" class="flex-1 border border-gray-200 rounded-lg px-2 py-1 text-xs text-gray-500"
                    value="${_htmlEsc(formTeacherName)}" placeholder="ชื่อครู (ไม่บังคับ)" />
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

    wrap.querySelector('#sp-subj-name').addEventListener('input', e => { formSubjName = e.target.value })
    wrap.querySelector('#sp-class').addEventListener('input', e => { formClassName = e.target.value })
    wrap.querySelector('#sp-teacher').addEventListener('input', e => { formTeacherName = e.target.value })
    wrap.querySelector('#sp-color').addEventListener('click', () => {
      colorPickerOpen = !colorPickerOpen
      _render()
    })
    wrap.querySelector('#sp-hide-teacher').addEventListener('click', () => {
      formTeacherName = ''
      wrap.querySelector('#sp-teacher').value = ''
    })
    wrap.querySelectorAll('.sp-color-option').forEach(btn =>
      btn.addEventListener('click', () => {
        selectedColorHex = btn.dataset.color
        colorPickerOpen = false
        _render()
      }))

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

      if (className || subjName || subjId) {
        try {
          await saveTeacherRoomColor({
            teacher_id: teacher.id,
            room_key: roomColorKey({ className, subjectName: subjName, fallbackId: subjId }),
            class_name: className,
            color_hex: selectedColorHex,
          })
        } catch (err) {
          showToast('บันทึกสีไม่ได้: ' + (err.message ?? ''), 'warning')
        }
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
  const roomColorRows = teacher?.id ? await getTeacherRoomColors(teacher.id).catch(()=>[]) : []
  const roomColorMap = Object.fromEntries((roomColorRows ?? []).map(r => [r.room_key, r.color_hex]))

  const wrap = document.createElement('div')
  wrap.id = 'vision-upload'
  wrap.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'
  wrap.innerHTML = `
    <div class="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[92vh]">
      <div class="px-5 pt-5 pb-4 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
        <div class="flex-1">
          <h3 class="font-bold text-gray-800">🤖 วิเคราะห์รูปตารางสอน</h3>
          <p class="text-xs text-gray-400 mt-0.5">อัปโหลดรูปตารางสอน → AI จะเติมข้อมูลลงตารางให้</p>
        </div>
        <button id="vision-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="overflow-auto flex-1 px-5 py-4 space-y-3">

        <!-- ลิงค์ดูตารางสอนโรงเรียน -->
        <div class="bg-sky-50 border border-sky-200 rounded-xl p-3 space-y-2">
          <div class="flex items-center justify-between gap-3">
            <p class="text-xs font-semibold text-sky-800">📅 ตารางสอนของโรงเรียน</p>
            <a href="http://azizstan.ac.th/2026/Teacher/" target="_blank" rel="noopener"
               class="flex-shrink-0 px-3 py-1.5 bg-sky-600 text-white rounded-lg font-bold text-[11px] hover:bg-sky-700 transition">
              เปิดตารางสอน ↗
            </a>
          </div>
          <p class="text-xs text-sky-700 leading-relaxed">ระบบมีเครื่องมือช่วยกรอกตารางสอนอัตโนมัติ — เปิดตารางสอนจากระบบโรงเรียน แล้วแคปหน้าจอมาอัปโหลดที่นี่ AI จะเติมข้อมูลให้</p>
        </div>

        <!-- คำแนะนำแคปหน้าจอ -->
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 space-y-1.5">
          <p class="font-semibold">📸 วิธีแคปหน้าจอให้ถูกต้อง</p>
          <ul class="space-y-1 leading-relaxed">
            <li>• ให้เห็น <b>คอลัมน์ซ้ายสุด</b> (คาบ / ช่วงเวลา) ครบทุกคาบ</li>
            <li>• ให้เห็น <b>แถวบนสุด</b> (วัน อาทิตย์ – ศุกร์) ครบทุกวัน</li>
            <li>• แคปเฉพาะ<b>ส่วนตาราง</b> ตัดส่วนหัวหน้าเว็บออก</li>
          </ul>
          <div class="mt-2 pt-2 border-t border-amber-200">
            <p class="font-semibold text-amber-900">⚠️ หลัง AI ดึงข้อมูลเสร็จ — ตรวจสอบตารางของแต่ละห้องให้ถูกต้อง แล้ว<u>กดบันทึกทันที</u></p>
          </div>
        </div>

        <!-- format hint -->
        <div class="bg-violet-50 border border-violet-200 rounded-xl p-3 text-xs text-violet-700">
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
        <button id="vision-cancel" class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ปิด</button>
        <button id="vision-analyze" class="flex-1 py-3 rounded-xl bg-violet-600 text-white text-sm font-bold hover:bg-violet-700 disabled:opacity-50" disabled>
          🔍 วิเคราะห์
        </button>
        <button id="vision-save" class="hidden flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 font-bold hover:bg-gray-50">
          ✕ ปิด
        </button>
      </div>
    </div>`
  document.body.appendChild(wrap)

  wrap.querySelector('#vision-cancel').addEventListener('click', () => wrap.remove())
  wrap.querySelector('#vision-close').addEventListener('click', () => wrap.remove())

  // ─── State ────────────────────────────────────────────────────────────────
  let imgBase64 = null
  let imgMimeType = 'image/jpeg'
  // groups: [{key, subject_name, class_name, teacher_name, subject_id, sessions:[{dow,period,span}]}]
  let groups = []

  const DAY_NAMES  = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์']
  const PERIOD_NOS = periods.map(p => p.period_no)

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
      const clr = g.color_hex ? colorMetaForHex(g.color_hex) : resolveScheduleColor({
        teacherId: teacher?.id,
        className: g.class_name,
        subjectName: g.subject_name,
        fallbackId: g.subject_id,
      }, roomColorMap)
      const card = document.createElement('div')
      card.className = 'border-2 rounded-xl overflow-hidden vg-card'
      card.style.borderColor = clr.dot
      card.innerHTML = `
        <!-- Group header -->
        <div class="px-4 py-3 flex items-start gap-3" style="background:${clr.dot}18">
          <button type="button" class="vg-color w-8 h-8 rounded-full flex-shrink-0 border-2 border-white shadow mt-0.5"
            style="background:${clr.dot}" title="สีประจำห้อง" data-gi="${gi}"></button>
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
            <div class="flex items-center gap-1.5 pt-1">
              <span class="text-[10px] text-gray-400 w-12 flex-shrink-0">สี</span>
              <div class="flex flex-wrap gap-1.5">
                ${SCHEDULE_COLOR_PRESETS.map(p => `
                <button type="button"
                  class="vg-color-option w-5 h-5 rounded-full border-2 ${p.dot.toLowerCase() === clr.dot.toLowerCase() ? 'border-gray-700' : 'border-white'} shadow-sm"
                  style="background:${p.dot}"
                  data-gi="${gi}"
                  data-color="${p.dot}"
                  title="เลือกสี"></button>`).join('')}
              </div>
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
    container.querySelectorAll('.vg-color-option').forEach(btn =>
      btn.addEventListener('click', () => {
        groups[+btn.dataset.gi].color_hex = btn.dataset.color
        _renderGroups()
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
          const colorHex = g.color_hex ?? resolveScheduleColor({
            teacherId: teacher?.id,
            className: g.class_name,
            subjectName: g.subject_name,
            fallbackId: g.subject_id,
          }, roomColorMap).dot
          if (g.class_name || g.subject_name || g.subject_id) {
            await saveTeacherRoomColor({
              teacher_id: teacher.id,
              room_key: roomColorKey({ className: g.class_name, subjectName: g.subject_name, fallbackId: g.subject_id }),
              class_name: g.class_name?.trim() || null,
              color_hex: colorHex,
            }).catch(err => showToast('บันทึกสีไม่ได้: ' + (err.message ?? ''), 'warning'))
          }
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
          setTimeout(() => {
            const nextColor = g.color_hex ? colorMetaForHex(g.color_hex) : resolveScheduleColor({
              teacherId: teacher?.id,
              className: g.class_name,
              subjectName: g.subject_name,
              fallbackId: g.subject_id,
            }, roomColorMap)
            btn.disabled = false
            btn.textContent = origText
            btn.style.background = nextColor.dot
          }, 2000)
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

      const { data: json, error: fnErr } = await supabase.functions.invoke('gemini-proxy', {
        body: { keyType: 'schedule', dept: teacher.dept ?? '', prompt, imageBase64: imgBase64, imageMimeType: imgMimeType },
      })
      if (fnErr) throw new Error(fnErr.message ?? 'Edge Function error')
      if (json?.error) throw new Error(`Gemini: ${json.error.message ?? json.error.status}`)

      const text  = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
      const match = text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\[[\s\S]*?\])/)
      const jsonStr = match ? (match[1] ?? match[0]) : null
      if (!jsonStr) { console.error('Raw:', text); throw new Error('AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง') }

      const raw = JSON.parse(jsonStr)
      groups = raw.map(g => ({
        ...g,
        sessions: (g.sessions ?? []).map(s => ({ ...s })),
      }))

      _renderGroups()
      wrap.querySelector('#vision-result').classList.remove('hidden')
      wrap.querySelector('#vision-save').classList.remove('hidden')
      const total = groups.reduce((n, g) => n + g.sessions.length, 0)
      status.textContent = `✅ พบ ${groups.length} กลุ่มวิชา ${total} คาบ — ตรวจสอบแล้วกด "บันทึก"`
    } catch (err) {
      console.error('Vision error:', err)
      const errMsg = err.message ?? 'ไม่ทราบสาเหตุ'
      status.innerHTML = `
        <span class="text-red-500 font-medium">❌ ${errMsg}</span>
        <br/><span class="text-gray-400 text-xs">ปัญหานี้ต้องให้แอดมินแก้ไข</span>`
      // ปุ่มแจ้งแอดมิน
      const feedbackBtnId = 'vision-err-feedback'
      if (!wrap.querySelector(`#${feedbackBtnId}`)) {
        const fb = document.createElement('button')
        fb.id = feedbackBtnId
        fb.className = 'mt-2 w-full py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition'
        fb.textContent = '📨 แจ้งปัญหานี้ให้แอดมิน'
        fb.addEventListener('click', () => {
          wrap.remove()
          window._openFeedbackWidget?.(`[ตารางสอน AI] ${errMsg}`)
        })
        status.after(fb)
      }
    } finally {
      btn.disabled = false; btn.textContent = '🔍 วิเคราะห์อีกครั้ง'
    }
  })

  // เพิ่มกลุ่มวิชาใหม่เอง
  wrap.querySelector('#vision-add-group').addEventListener('click', () => {
    groups.push({ subject_name: '', class_name: '', teacher_name: '', subject_id: null,
      sessions: [{ day_of_week: 0, period_no: PERIOD_NOS[0] ?? 1, span_periods: 1 }] })
    wrap.querySelector('#vision-result').classList.remove('hidden')
    wrap.querySelector('#vision-save').classList.remove('hidden')
    _renderGroups()
  })

  // ─── Save ─────────────────────────────────────────────────────────────────
  wrap.querySelector('#vision-save').addEventListener('click', async () => {
    wrap.remove()
    await renderScheduleGrid(teacher, academicYear, semester, cfg)
  })
}

// ─── Schedule Builder (หลัง profile setup) ───────────────────────────────────
export async function renderScheduleBuilder(teacher, onComplete) {
  const cfg      = await getSystemConfig().catch(()=>({}))
  const curYear  = parseInt(cfg.academicYear ?? 2568)
  const curSem   = parseInt(cfg.semester ?? 1)
  const visionOn = cfg.scheduleVisionEnabled === 'true'
  const geminiKey= _resolveGeminiKey(cfg, teacher)

  setActiveNav('schedule')
  setTitle('สร้างตารางสอน', 'schedule')

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

// ─── Course Doc Lang Config ───────────────────────────────────────────────────

// field groups สำหรับ form (key → label แสดงใน UI)
const _CD_FIELD_GROUPS = [
  { group: 'ชื่อแท็บภาษา', fields: [
    ['label','ชื่อแท็บ (แสดงบนปุ่มแท็บทุกจุด)'],
  ]},
  { group: 'หัวตาราง',  fields: [
    ['tableTitle','ชื่อตาราง มาตรฐาน/ตัวชี้วัด'],
    ['tableHint','คำอธิบายตาราง (hint)'],
  ]},
  { group: 'คอลัมน์', fields: [
    ['colsBasic','คอลัมน์พื้นฐาน (คั่นด้วย | )'],
    ['colsExtra','คอลัมน์เพิ่มเติม (คั่นด้วย | )'],
    ['tplBasic','ชื่อปุ่มเทมเพลตพื้นฐาน'],
    ['tplExtra','ชื่อปุ่มเทมเพลตเพิ่มเติม'],
    ['rowHeader','หัวคอลัมน์ข้อ/ลำดับ'],
  ]},
  { group: 'คำอธิบายรายวิชา', fields: [
    ['descLabel','Label ช่องคำอธิบายรายวิชา'],
    ['descPlaceholder','Placeholder คำอธิบายรายวิชา'],
  ]},
  { group: 'ผู้ลงนาม', fields: [
    ['signerLabel','Label ผู้ลงนาม'],
    ['signerPlaceholder','Placeholder ผู้ลงนาม'],
    ['signerHint','คำใต้ช่องผู้ลงนาม'],
  ]},
  { group: 'จุดประสงค์วัดผล', fields: [
    ['objTitle','หัวข้อจุดประสงค์'],
    ['between','ป้ายระหว่างภาค'],
    ['mid','ป้ายกลางภาค'],
    ['final','ป้ายปลายภาค'],
    ['pickerTitleBetween','ชื่อ dialog — ระหว่างภาค'],
    ['pickerTitleMid','ชื่อ dialog — กลางภาค'],
    ['pickerTitleFinal','ชื่อ dialog — ปลายภาค'],
  ]},
  { group: 'ส่วนช่วยเติมข้อมูล', fields: [
    ['helpTitle','หัวข้อแผง AI'],
    ['helpSub','คำอธิบายแผง AI'],
    ['topicLabel','Label บท/เรื่อง'],
    ['topicPlaceholder','Placeholder บท/เรื่อง'],
    ['btnCurriculum','ปุ่มค้นหลักสูตร'],
    ['btnAI','ปุ่ม AI ร่าง'],
    ['btnImg','ปุ่มอ่านรูป'],
  ]},
  { group: 'ข้อความปุ่ม/Toast', fields: [
    ['save','ปุ่มบันทึก'],
    ['close','ปุ่มปิด'],
    ['addTopic','ปุ่มเพิ่มบท'],
    ['addCol','ปุ่มเพิ่มคอลัมน์'],
    ['addRow','ปุ่มเพิ่มแถว'],
    ['delRow','ปุ่มลบแถว'],
    ['pickerOk','ปุ่ม OK ใน dialog'],
    ['pickerCancel','ปุ่มยกเลิก ใน dialog'],
    ['toastSaved','Toast บันทึกสำเร็จ'],
    ['toastSearchEmpty','Toast ไม่พบในหลักสูตรแกนกลาง'],
    ['toastAIDone','Toast AI ร่างสำเร็จ'],
    ['toastImgDone','Toast อ่านรูปสำเร็จ'],
    ['noOpts','ข้อความเมื่อยังไม่มีข้อ'],
    ['notSelected','ข้อความยังไม่เลือก'],
  ]},
]

// flatten settings row → form values (arrays → pipe-joined string)
function _cdlSettingsToForm(settings, defaults) {
  const merged = { ...defaults, ...settings }
  const out = {}
  for (const { fields } of _CD_FIELD_GROUPS) {
    for (const [key] of fields) {
      if (key === 'colsBasic') out[key] = (merged.colsBasic ?? []).join(' | ')
      else if (key === 'colsExtra') out[key] = (merged.colsExtra ?? []).join(' | ')
      else if (key === 'pickerTitleBetween') out[key] = merged.pickerTitles?.between ?? ''
      else if (key === 'pickerTitleMid') out[key] = merged.pickerTitles?.mid ?? ''
      else if (key === 'pickerTitleFinal') out[key] = merged.pickerTitles?.final ?? ''
      else out[key] = merged[key] ?? ''
    }
  }
  return out
}

// form values → settings object (pipe-split arrays back)
function _cdlFormToSettings(formValues) {
  const out = {}
  for (const { fields } of _CD_FIELD_GROUPS) {
    for (const [key] of fields) {
      const v = String(formValues[key] ?? '').trim()
      if (key === 'colsBasic') out.colsBasic = v.split('|').map(s => s.trim()).filter(Boolean)
      else if (key === 'colsExtra') out.colsExtra = v.split('|').map(s => s.trim()).filter(Boolean)
      else if (key === 'pickerTitleBetween') { out.pickerTitles = out.pickerTitles ?? {}; out.pickerTitles.between = v }
      else if (key === 'pickerTitleMid') { out.pickerTitles = out.pickerTitles ?? {}; out.pickerTitles.mid = v }
      else if (key === 'pickerTitleFinal') { out.pickerTitles = out.pickerTitles ?? {}; out.pickerTitles.final = v }
      else out[key] = v
    }
  }
  return out
}

export async function renderCourseDocLangConfig(teacher, isAdmin = false) {
  setActiveNav('course-doc-lang')
  setTitle('ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)')

  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 mr-3 text-emerald-400" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`)

  const langOrder = ['th', 'jawi', 'ar', 'rumi']
  const langDefLabels = { th:'ภาษาไทย', jawi:'يَاوِي (Jawi)', ar:'العربية', rumi:'Rumi (Melayu)' }
  const langDirs   = { th:'ltr', jawi:'rtl', ar:'rtl', rumi:'ltr' }

  const [allSettings, allTeachers] = await Promise.all([
    getCourseDocLangSettings().catch(() => []),
    isAdmin ? import('./api.js').then(m => m.getTeachers()).catch(() => []) : Promise.resolve([]),
  ])

  // map lang_key → row
  const settingsMap = Object.fromEntries(allSettings.map(r => [r.lang_key, r]))

  // ภาษาที่ teacher นี้แก้ไขได้
  const editableLangs = isAdmin
    ? langOrder
    : langOrder.filter(lk => {
        const row = settingsMap[lk]
        return row && teacher?.id && (row.editor_teacher_ids ?? []).includes(teacher.id)
      })

  if (!editableLangs.length) {
    setContent(`<div class="max-w-lg mx-auto text-center py-20 text-gray-400">
      <p class="text-4xl mb-4">🔒</p>
      <p class="font-medium">ยังไม่มีสิทธิ์แก้ไขภาษาใด</p>
      <p class="text-xs mt-1">ขอสิทธิ์จากแอดมินเพื่อแก้ไขภาษาที่รับผิดชอบ</p>
    </div>`)
    return
  }

  let activeLang = editableLangs[0]

  // label ที่ใช้แสดงแท็บ — ดึงจาก DB ก่อน fallback hardcoded
  const _langLabel = (lk) =>
    settingsMap[lk]?.settings?.label || COURSE_DOC_LANGS[lk]?.label || langDefLabels[lk] || lk

  const _renderPage = () => {
    const tabsHtml = editableLangs.map(lk => `
      <button class="cdl-tab px-4 py-2 rounded-xl text-sm font-semibold transition whitespace-nowrap
        ${lk === activeLang ? 'bg-emerald-600 text-white shadow' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}"
        data-lang="${lk}" dir="${langDirs[lk]}">${_langLabel(lk)}</button>`).join('')

    const row = settingsMap[activeLang] ?? { settings: {}, editor_teacher_ids: [] }
    const defaults = COURSE_DOC_LANGS[activeLang] ?? {}
    const vals = _cdlSettingsToForm(row.settings ?? {}, defaults)
    const dir = langDirs[activeLang]

    // ค่าภาษาไทย (อ้างอิง) — merge DB override ของ th ด้วย
    const thRow = settingsMap['th'] ?? {}
    const thVals = _cdlSettingsToForm(thRow.settings ?? {}, COURSE_DOC_LANGS.th ?? {})
    const showThRef = activeLang !== 'th'

    const fieldsHtml = _CD_FIELD_GROUPS.map(({ group, fields }) => `
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">${group}</p>
        ${showThRef ? `
        <div class="flex items-center gap-3 px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-t-xl">
          <span class="w-44 flex-shrink-0"></span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">ภาษาไทย (อ้างอิง)</span>
          <span class="flex-1 text-[10px] font-semibold text-gray-400 uppercase tracking-wider" dir="${dir}">${_langLabel(activeLang)}</span>
        </div>` : ''}
        <div class="bg-white rounded-xl ${showThRef ? 'rounded-tl-none rounded-tr-none' : ''} border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
          ${fields.map(([key, label]) => `
          <div class="flex items-start gap-3 px-4 py-3">
            <label class="w-44 flex-shrink-0 text-xs text-gray-500 pt-1.5 leading-tight">${label}</label>
            ${showThRef ? `
            <div class="flex-1 text-sm text-gray-400 bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-100 select-none" dir="ltr">
              ${_htmlEsc(String(thVals[key] ?? '—'))}
            </div>` : ''}
            <input id="cdl-${key}" type="text" dir="${dir}"
              class="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
              value="${_htmlEsc(String(vals[key] ?? ''))}"
              placeholder="${_htmlEsc(String(defaults[key] ?? ''))}" />
          </div>`).join('')}
        </div>
      </div>`).join('')

    // Admin: แสดงส่วน assign editors สำหรับภาษาที่เลือก
    const editorIds = row.editor_teacher_ids ?? []
    const assignHtml = isAdmin ? `
      <div class="mb-5">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">ผู้มีสิทธิ์แก้ไขภาษานี้</p>
        <div class="bg-white rounded-xl border border-gray-200 shadow-md p-4">
          <p class="text-xs text-gray-400 mb-3">เลือกครูที่จะให้แก้ไข <span dir="${dir}" class="font-semibold text-emerald-700">${_langLabel(activeLang)}</span></p>
          <div class="max-h-48 overflow-y-auto space-y-1" id="cdl-editors">
            ${allTeachers.filter(t => t.id !== teacher?.id).map(t => `
              <label class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer text-sm">
                <input type="checkbox" class="cdl-editor-cb" value="${t.id}" ${editorIds.includes(t.id) ? 'checked' : ''}/>
                <span class="font-medium text-gray-800">${_htmlEsc(t.full_name)}</span>
                <span class="text-xs text-gray-400">${_htmlEsc(t.teacher_code ?? '')} · ${_htmlEsc(t.dept ?? '—')}</span>
              </label>`).join('')}
          </div>
          <button id="cdl-save-editors"
            class="mt-3 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition">
            💾 บันทึกผู้มีสิทธิ์
          </button>
        </div>
      </div>` : ''

    setContent(`<div class="animate-fade">
      <div class="flex items-center justify-between mb-5">
        <div>
          <h2 class="text-lg font-bold text-gray-800">⚙️ ตั้งค่าคำอธิบายรายวิชา (ต่อภาษา)</h2>
          <p class="text-xs text-gray-400 mt-0.5">ค่าที่ตั้งจะ override ค่าเริ่มต้นในระบบ</p>
        </div>
        <button id="cdl-save-settings"
          class="btn-primary px-5 py-2.5 text-white text-sm font-medium rounded-xl flex items-center gap-2">
          💾 บันทึก
        </button>
      </div>

      <!-- แท็บภาษา -->
      <div class="flex gap-2 flex-wrap mb-6">${tabsHtml}</div>

      ${fieldsHtml}
      ${assignHtml}
    </div>`)

    // bind tabs
    document.querySelectorAll('.cdl-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        activeLang = btn.dataset.lang
        _renderPage()
      })
    })

    // bind save settings
    document.getElementById('cdl-save-settings')?.addEventListener('click', async () => {
      const formValues = {}
      for (const { fields } of _CD_FIELD_GROUPS) {
        for (const [key] of fields) {
          formValues[key] = document.getElementById(`cdl-${key}`)?.value ?? ''
        }
      }
      const newSettings = _cdlFormToSettings(formValues)
      const btn = document.getElementById('cdl-save-settings')
      btn.disabled = true
      btn.textContent = 'กำลังบันทึก...'
      try {
        const saved = await saveCourseDocLangSettings(activeLang, newSettings, teacher?.id)
        settingsMap[activeLang] = { ...settingsMap[activeLang], ...saved }
        showToast(`บันทึกการตั้งค่า ${_langLabel(activeLang)} สำเร็จ`, 'success')
      } catch (e) {
        showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error')
      }
      btn.disabled = false
      btn.innerHTML = '💾 บันทึก'
    })

    // bind save editors (admin only)
    document.getElementById('cdl-save-editors')?.addEventListener('click', async () => {
      const ids = [...document.querySelectorAll('.cdl-editor-cb:checked')].map(cb => Number(cb.value))
      const btn = document.getElementById('cdl-save-editors')
      btn.disabled = true
      btn.textContent = 'กำลังบันทึก...'
      try {
        const saved = await saveCourseDocLangEditors(activeLang, ids)
        settingsMap[activeLang] = { ...settingsMap[activeLang], ...saved }
        showToast(`อัปเดตผู้มีสิทธิ์ ${_langLabel(activeLang)} สำเร็จ`, 'success')
      } catch (e) {
        showToast('บันทึกไม่สำเร็จ: ' + (e.message ?? ''), 'error')
      }
      btn.disabled = false
      btn.textContent = '💾 บันทึกผู้มีสิทธิ์'
    })
  }

  _renderPage()
}

// ─── Teacher Announcements View ───────────────────────────────────────────────

export async function renderAnnouncementsView(teacher) {
  setActiveNav('announcements-view')
  setTitle('ประกาศ', 'announcement')
  const { getAllAnnouncementsForTeacher, getMyAcks, ackAnnouncement, getSupervisorComments, getSystemConfig, getTeacherBusyPeriodsOnDate } = await import('./api.js')
  let _schoolCfg = null
  try { _schoolCfg = await getSystemConfig() } catch {}

  setContent(`<div class="animate-fade max-w-2xl mx-auto">
    <!-- Tab bar -->
    <div class="flex gap-1 bg-gray-100 rounded-2xl p-1 mb-6">
      <button id="ann-tab-announce" data-tab="announce"
        class="ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition bg-white shadow-sm text-gray-800">
        📢 ประกาศ
      </button>
      <button id="ann-tab-myann" data-tab="myann"
        class="ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition text-gray-500 hover:text-gray-700">
        ✏️ ประกาศของฉัน
      </button>
      <button id="ann-tab-comments" data-tab="comments"
        class="ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition text-gray-500 hover:text-gray-700">
        💬 บันทึก
      </button>
    </div>
    <div id="ann-panel-announce">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
    <div id="ann-panel-myann" class="hidden"></div>
    <div id="ann-panel-comments" class="hidden">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  const _esc = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  const _fmtDate  = d => new Date(d).toLocaleDateString('th-TH',{dateStyle:'long'})
  const _fmtShort = d => d ? new Date(d).toLocaleDateString('th-TH',{day:'numeric',month:'short',year:'2-digit'}) : ''
  const _thDate   = d => new Date(new Date(d).getTime() + 7*3600000).toISOString().slice(0,10)

  const ROLE_LABELS = {
    dept_head:'หัวหน้ากลุ่มสาระ',
    registrar_samai:'หัวหน้าฝ่ายทะเบียน (สามัญ)', registrar_religion:'หัวหน้าฝ่ายทะเบียน (ศาสนา)', registrar_pvch:'หัวหน้าฝ่ายทะเบียน (ปวช)',
    academic_samai:'หัวหน้าฝ่ายวิชาการ (สามัญ)',  academic_religion:'หัวหน้าฝ่ายวิชาการ (ศาสนา)',  academic_pvch:'หัวหน้าฝ่ายวิชาการ (ปวช)',
  }
  const ROLE_COLOR = r => {
    if (!r) return 'bg-gray-100 text-gray-600'
    if (r.startsWith('academic'))  return 'bg-blue-100 text-blue-700'
    if (r.startsWith('registrar')) return 'bg-violet-100 text-violet-700'
    if (r === 'dept_head')         return 'bg-emerald-100 text-emerald-700'
    return 'bg-gray-100 text-gray-600'
  }
  const METRIC_LABEL = { general:'ทั่วไป', profile:'โปรไฟล์', schedule:'ตารางสอน', dates:'วันสอน', attendance:'เช็คชื่อ', scores:'คะแนน' }
  const GROUPS = [
    { key:'pinned',    label:'📌 ปักหมุด',         color:'from-amber-400 to-orange-400',   filter: a => a.priority > 0 },
    { key:'academic',  label:'🎓 ฝ่ายวิชาการ',      color:'from-blue-400 to-indigo-400',    filter: a => a.priority === 0 && (a.creator_role??'').startsWith('academic') },
    { key:'registrar', label:'📋 ฝ่ายทะเบียน',      color:'from-violet-400 to-purple-400',  filter: a => a.priority === 0 && (a.creator_role??'').startsWith('registrar') },
    { key:'dept_head', label:'🏫 หัวหน้ากลุ่มสาระ', color:'from-emerald-400 to-teal-400',   filter: a => a.priority === 0 && a.creator_role === 'dept_head' },
    { key:'admin',     label:'⚙️ ทั่วไป',           color:'from-gray-300 to-gray-400',      filter: a => a.priority === 0 && !a.creator_role },
  ]

  const _dueBadge = due => {
    if (!due) return ''
    const diff = Math.ceil((new Date(due) - new Date()) / 86400000)
    if (diff < 0)  return `<span class="px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-[11px] font-bold">⛔ หมดเขต ${_fmtShort(due)}</span>`
    if (diff <= 3) return `<span class="px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-[11px] font-bold">⚠️ ภายใน ${_fmtShort(due)}</span>`
    return `<span class="px-2 py-0.5 bg-sky-100 text-sky-600 rounded-full text-[11px] font-semibold">📅 ภายใน ${_fmtShort(due)}</span>`
  }

  // ─── Tab switching ─────────────────────────────────────────────────────────
  let _activeTab = 'announce'
  document.querySelectorAll('.ann-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      _activeTab = btn.dataset.tab
      document.querySelectorAll('.ann-tab').forEach(b => {
        const on = b.dataset.tab === _activeTab
        b.className = `ann-tab flex-1 py-2 rounded-xl text-sm font-semibold transition ${on ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500 hover:text-gray-700'}`
      })
      document.getElementById('ann-panel-announce').classList.toggle('hidden', _activeTab !== 'announce')
      document.getElementById('ann-panel-myann').classList.toggle('hidden', _activeTab !== 'myann')
      document.getElementById('ann-panel-comments').classList.toggle('hidden', _activeTab !== 'comments')
      if (_activeTab === 'myann' && !_myannLoaded) _loadMyAnn()
    })
  })

  // ─── ประกาศของฉัน (teacher → classroom) ──────────────────────────────────
  const ANN_TYPES_TEACHER = {
    'general':      { label: 'ทั่วไป',                    icon: '📢', hasDeadline: false },
    'deadline':     { label: 'กำหนดส่งงาน/สอบ',           icon: '⏰', hasDeadline: true  },
    'learning_doc': { label: 'เอกสารประกอบการเรียน',       icon: '📄', hasDeadline: false },
    'exercise_doc': { label: 'เอกสารแบบฝึกเพิ่มเติม',     icon: '📝', hasDeadline: false },
    'exam_prep':    { label: 'เอกสารแนวข้อสอบ',            icon: '📋', hasDeadline: false },
  }

  let _myannLoaded = false
  let _myClasses   = []

  const _myAnnCard = (a, classes) => {
    const typeInfo = ANN_TYPES_TEACHER[a.ann_type] ?? { label: a.ann_type, icon: '📢' }
    const targetNames = (a.target_class_ids ?? [])
      .map(id => classes.find(c => c.id === id)?.class_name ?? `#${id}`)
      .join(', ')
    return `
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 space-y-2" data-myann-id="${a.id}">
      <div class="flex items-start justify-between gap-2">
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium">${typeInfo.icon} ${typeInfo.label}</span>
            ${a.priority > 0 ? `<span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-600 rounded-full font-medium">📌 ปักหมุด</span>` : ''}
            ${!a.is_active ? `<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>` : ''}
          </div>
          <p class="font-semibold text-gray-800">${_esc(a.title)}</p>
          ${a.body ? `<p class="text-sm text-gray-500 mt-1 line-clamp-2">${_esc(a.body)}</p>` : ''}
          ${a.file_url ? `<a href="${_esc(a.file_url)}" target="_blank" class="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline mt-1">📎 ไฟล์แนบ</a>` : ''}
          <p class="text-xs text-gray-400 mt-2">ห้อง: ${_esc(targetNames) || '—'}</p>
        </div>
        <div class="flex gap-1 flex-shrink-0">
          <button onclick="window._editMyAnn(${a.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-indigo-600 transition" title="แก้ไข">✏️</button>
          <button onclick="window._togglePinMyAnn(${a.id},${a.priority})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-amber-500 transition" title="${a.priority > 0 ? 'เลิกปักหมุด' : 'ปักหมุด'}">📌</button>
          <button onclick="window._deleteMyAnn(${a.id})" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-500 transition" title="ลบ">🗑️</button>
        </div>
      </div>
    </div>`
  }

  const _loadMyAnn = async () => {
    _myannLoaded = true
    const panel = document.getElementById('ann-panel-myann')
    if (!panel) return
    panel.innerHTML = `<div class="flex justify-center py-8 text-gray-400"><svg class="animate-spin h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> กำลังโหลด...</div>`
    try {
      const { getTeacherOwnAnnouncements, getMyClasses: _mc, getTeacherPackageAccess } = await import('./api.js')
      const [anns, cls, access] = await Promise.all([
        getTeacherOwnAnnouncements(teacher.id),
        _mc(teacher.id).catch(() => []),
        getTeacherPackageAccess(teacher.id).catch(() => ({ hasSemester: false })),
      ])
      _myClasses = cls
      _renderMyAnnList(anns, access.hasSemester)
    } catch (err) {
      panel.innerHTML = `<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${err.message}</p>`
    }
  }

  const FREE_ANN_LIMIT = 3

  const _renderMyAnnList = (anns, hasSemester = false) => {
    const panel = document.getElementById('ann-panel-myann')
    if (!panel) return
    const canCreate = hasSemester || anns.length < FREE_ANN_LIMIT
    const limitInfo = !hasSemester
      ? `<span class="text-xs text-gray-400">${anns.length}/${FREE_ANN_LIMIT} (ฟรี)</span>`
      : `<span class="text-xs text-emerald-600 font-medium">✨ ไม่จำกัด</span>`
    panel.innerHTML = `
    <div class="space-y-3">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-gray-700">ประกาศของฉัน (${anns.length})</h3>
          ${limitInfo}
        </div>
        <button id="btn-create-myann"
          class="px-4 py-2 text-sm rounded-xl font-semibold transition ${canCreate
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}">
          + สร้างประกาศ
        </button>
      </div>
      ${!hasSemester && anns.length >= FREE_ANN_LIMIT ? `
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
        <span class="text-2xl flex-shrink-0">⭐</span>
        <div>
          <p class="text-sm font-semibold text-amber-800">ใช้ครบ ${FREE_ANN_LIMIT} ประกาศแล้ว</p>
          <p class="text-xs text-amber-600 mt-1">อัพเกรดเป็นแพ็กเกจโดเนทเพื่อสร้างประกาศได้ไม่จำกัด</p>
        </div>
      </div>` : ''}
      ${anns.length ? anns.map(a => _myAnnCard(a, _myClasses)).join('') : `
      <div class="text-center py-12 text-gray-400">
        <p class="text-3xl mb-2">📢</p>
        <p class="text-sm">ยังไม่มีประกาศ กดปุ่ม "สร้างประกาศ" เพื่อเริ่มต้น</p>
      </div>`}
    </div>`
    document.getElementById('btn-create-myann')?.addEventListener('click', () => {
      if (!canCreate) { showToast(`ใช้ครบ ${FREE_ANN_LIMIT} ประกาศแล้ว — อัพเกรดเพื่อใช้งานไม่จำกัด`, 'warning'); return }
      _openMyAnnForm()
    })
  }

  const _classSelectHtml = (entryIdx, selectedIds = []) =>
    _myClasses.map(c =>
      `<label class="flex items-center gap-2 text-xs cursor-pointer hover:text-indigo-700 py-0.5">
        <input type="checkbox" name="myann-cls-${entryIdx}" value="${c.id}"
          ${selectedIds.includes(c.id) ? 'checked' : ''} class="rounded text-indigo-600 flex-shrink-0" />
        <span class="truncate">${_esc(c.class_name)}</span>
        <span class="text-gray-300 truncate">${_esc(c.master_subjects?.subject_name ?? '')}</span>
      </label>`).join('')

  const _entryHtml = (idx, classIds = [], fileUrl = '') => `
    <div class="myann-entry border border-gray-200 rounded-xl p-3 space-y-2" data-entry="${idx}">
      <div class="flex items-center justify-between">
        <span class="text-xs font-semibold text-indigo-600">ชุดที่ ${idx + 1}</span>
        ${idx > 0
          ? `<button type="button" class="myann-remove-entry text-red-400 hover:text-red-600 text-sm px-2" data-entry="${idx}">✕ ลบ</button>`
          : ''}
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ห้องเรียน <span class="text-red-400">*</span></p>
        <div class="border border-gray-100 rounded-lg p-2 max-h-28 overflow-y-auto space-y-0.5">
          ${_classSelectHtml(idx, classIds) || '<p class="text-xs text-gray-400">ยังไม่มีห้องเรียน</p>'}
        </div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-600 mb-1">ลิงก์ไฟล์ (ถ้ามี)</p>
        <input name="myann-file-${idx}" type="url" value="${_esc(fileUrl)}"
          placeholder="https://drive.google.com/..."
          class="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-200" />
      </div>
    </div>`

  const _openMyAnnForm = (existing = null) => {
    let entryCount = 1
    const wrap = document.createElement('div')
    wrap.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4'
    wrap.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[92vh] flex flex-col">
      <div class="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${existing ? '✏️ แก้ไขประกาศ' : '📢 สร้างประกาศใหม่'}</h3>
        <button id="myann-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <!-- ข้อมูลร่วมทุกชุด -->
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ประเภทประกาศ</label>
          <select id="myann-type" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200">
            ${Object.entries(ANN_TYPES_TEACHER).map(([k,v]) =>
              `<option value="${k}" ${existing?.ann_type === k ? 'selected' : ''}>${v.icon} ${v.label}</option>`
            ).join('')}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หัวข้อ <span class="text-red-400">*</span></label>
          <input id="myann-title" type="text" value="${_esc(existing?.title ?? '')}"
            placeholder="ระบุหัวข้อประกาศ" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">รายละเอียด</label>
          <textarea id="myann-body" rows="2"
            placeholder="รายละเอียดเพิ่มเติม (ถ้ามี)"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none">${_esc(existing?.body ?? '')}</textarea>
        </div>
        <div id="myann-deadline-wrap" class="${(existing?.ann_type ?? 'general') === 'deadline' ? '' : 'hidden'}">
          <label class="block text-xs font-semibold text-gray-600 mb-1">⏰ วันและเวลากำหนดส่ง/สอบ <span class="text-red-400">*</span></label>
          <input id="myann-deadline" type="datetime-local"
            value="${existing?.deadline_at ? new Date(existing.deadline_at).toISOString().slice(0,16) : ''}"
            class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="flex items-center gap-3">
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-pin" type="checkbox" ${existing?.priority > 0 ? 'checked' : ''} class="rounded text-amber-500" />
            <span>📌 ปักหมุด</span>
          </label>
          <label class="flex items-center gap-2 text-sm cursor-pointer">
            <input id="myann-active" type="checkbox" ${!existing || existing?.is_active ? 'checked' : ''} class="rounded text-emerald-500" />
            <span>เผยแพร่ทันที</span>
          </label>
        </div>
        <!-- ชุดห้อง+ไฟล์ -->
        <div class="border-t border-gray-100 pt-3">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs font-semibold text-gray-700">📋 ห้องเรียน + ลิงก์ (แต่ละชุดสร้างประกาศแยก)</p>
            ${!existing ? `<button type="button" id="myann-add-entry"
              class="flex items-center gap-1 text-xs px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-100 transition">
              ＋ เพิ่มชุด
            </button>` : ''}
          </div>
          <div id="myann-entries" class="space-y-3">
            ${_entryHtml(0, existing?.target_class_ids ?? [], existing?.file_url ?? '')}
          </div>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="myann-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="myann-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">
          ${existing ? 'บันทึก' : 'สร้างประกาศ'}
        </button>
      </div>
    </div>`
    document.body.appendChild(wrap)
    wrap.querySelector('#myann-close').addEventListener('click', () => wrap.remove())
    wrap.querySelector('#myann-cancel').addEventListener('click', () => wrap.remove())

    wrap.querySelector('#myann-type').addEventListener('change', e => {
      wrap.querySelector('#myann-deadline-wrap').classList.toggle('hidden', e.target.value !== 'deadline')
    })

    // เพิ่มชุดใหม่
    wrap.querySelector('#myann-add-entry')?.addEventListener('click', () => {
      const container = wrap.querySelector('#myann-entries')
      const div = document.createElement('div')
      div.innerHTML = _entryHtml(entryCount)
      container.appendChild(div.firstElementChild)
      entryCount++
      // bind ปุ่มลบของ entry ใหม่
      _bindRemoveButtons()
    })

    const _bindRemoveButtons = () => {
      wrap.querySelectorAll('.myann-remove-entry').forEach(btn => {
        btn.onclick = () => {
          const idx = Number(btn.dataset.entry)
          wrap.querySelector(`.myann-entry[data-entry="${idx}"]`)?.remove()
        }
      })
    }
    _bindRemoveButtons()

    wrap.querySelector('#myann-save').addEventListener('click', async () => {
      const title      = wrap.querySelector('#myann-title').value.trim()
      const body       = wrap.querySelector('#myann-body').value.trim()
      const annType    = wrap.querySelector('#myann-type').value
      const pinned     = wrap.querySelector('#myann-pin').checked
      const active     = wrap.querySelector('#myann-active').checked
      const deadlineAt = annType === 'deadline' ? (wrap.querySelector('#myann-deadline').value || null) : null
      if (!title) { showToast('กรุณาระบุหัวข้อ', 'warning'); return }
      if (annType === 'deadline' && !deadlineAt) { showToast('กรุณาระบุวันและเวลา', 'warning'); return }

      // รวบรวมข้อมูลแต่ละ entry
      const entries = [...wrap.querySelectorAll('.myann-entry')].map(el => {
        const idx      = Number(el.dataset.entry)
        const classIds = [...el.querySelectorAll(`input[name="myann-cls-${idx}"]:checked`)].map(e => Number(e.value))
        const fileUrl  = el.querySelector(`input[name="myann-file-${idx}"]`)?.value.trim() ?? ''
        return { classIds, fileUrl }
      }).filter(e => e.classIds.length > 0)

      if (!entries.length) { showToast('กรุณาเลือกอย่างน้อย 1 ห้องในแต่ละชุด', 'warning'); return }

      const saveBtn = wrap.querySelector('#myann-save')
      saveBtn.disabled = true; saveBtn.textContent = 'กำลังบันทึก...'
      try {
        const { createAnnouncement, updateAnnouncement } = await import('./api.js')
        if (existing) {
          const { classIds, fileUrl } = entries[0]
          await updateAnnouncement(existing.id, { title, body, isActive: active, priority: pinned ? 1 : 0, annType, targetClassIds: classIds, fileUrl, deadlineAt })
        } else {
          // สร้างทีละ entry
          await Promise.all(entries.map(({ classIds, fileUrl }) =>
            createAnnouncement({ title, body, isActive: active, priority: pinned ? 1 : 0, teacherId: teacher.id, annType, targetClassIds: classIds, fileUrl, deadlineAt })
          ))
        }
        wrap.remove()
        const count = existing ? 1 : entries.length
        showToast(`บันทึก ${count} ประกาศสำเร็จ ✅`, 'success')
        _myannLoaded = false
        _loadMyAnn()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        saveBtn.disabled = false; saveBtn.textContent = existing ? 'บันทึก' : 'สร้างประกาศ'
      }
    })
  }

  window._editMyAnn = async (id) => {
    const { getTeacherOwnAnnouncements } = await import('./api.js')
    const anns = await getTeacherOwnAnnouncements(teacher.id).catch(() => [])
    const a = anns.find(x => x.id === id)
    if (a) _openMyAnnForm(a)
  }
  window._togglePinMyAnn = async (id, currentPriority) => {
    const { updateAnnouncement } = await import('./api.js')
    await updateAnnouncement(id, { priority: currentPriority > 0 ? 0 : 1 }).catch(() => {})
    _myannLoaded = false; _loadMyAnn()
  }
  window._deleteMyAnn = async (id) => {
    if (!confirm('ลบประกาศนี้?')) return
    const { deleteAnnouncement } = await import('./api.js')
    await deleteAnnouncement(id).catch(() => {})
    showToast('ลบประกาศแล้ว', 'success')
    _myannLoaded = false; _loadMyAnn()
  }

  // ─── ประกาศ section ────────────────────────────────────────────────────────
  const _DOW_TH = ['','อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์']
  const _fmtEventDate = d => d ? new Date(d + 'T00:00:00').toLocaleDateString('th-TH',{weekday:'long',day:'numeric',month:'long',year:'numeric'}) : ''
  const RSVP_CFG = {
    yes:   { label:'✅ สนใจเข้าร่วมแน่นอน', bg:'bg-emerald-600', ring:'ring-emerald-300' },
    maybe: { label:'🤔 ไม่แน่ใจ',           bg:'bg-amber-500',   ring:'ring-amber-300' },
    no:    { label:'❌ ไม่สนใจ',             bg:'bg-gray-400',    ring:'ring-gray-300' },
  }

  const _annCard = (a, ackedAt, myRsvp = null) => {
    const needAck = a.requires_ack
    const isAcked = !!ackedAt
    const isTraining = a.ann_type === 'training'
    const ackedTime = ackedAt ? new Date(ackedAt).toLocaleString('th-TH',{day:'numeric',month:'short',year:'2-digit',hour:'2-digit',minute:'2-digit'}) : ''
    const inactive = !a.is_active
    return `
    <div class="bg-white rounded-2xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow
      ${needAck && !isAcked && !inactive ? 'border-rose-200' : inactive ? 'border-dashed border-gray-200' : 'border-gray-100'}
      ${inactive ? 'opacity-60' : ''}" data-ann-id="${a.id}">
      <div class="h-1 bg-gradient-to-r ${a.priority > 0 ? 'from-amber-400 to-orange-400' : inactive ? 'from-gray-200 to-gray-300' : GROUPS.find(g=>g.filter(a))?.color ?? 'from-gray-300 to-gray-400'}"></div>
      <div class="p-5">
        <div class="flex items-start gap-4">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0
            ${needAck && !isAcked && !inactive ? 'bg-rose-50' : inactive ? 'bg-gray-50' : 'bg-indigo-50'}">
            ${a.priority > 0 ? '📌' : needAck ? (isAcked ? '✅' : '🔔') : inactive ? '📄' : '📢'}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap mb-1">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold ${ROLE_COLOR(a.creator_role)}">
                ${_esc(ROLE_LABELS[a.creator_role] ?? 'แอดมิน')}
              </span>
              ${a.teachers?.full_name ? `<span class="text-[11px] text-gray-500 font-medium">${_esc(a.teachers.full_name)}</span>` : ''}
              ${inactive ? `<span class="px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full text-[11px]">ยกเลิกแล้ว</span>` : ''}
              ${a.priority > 0 ? `<span class="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[11px] font-bold">⭐ ปักหมุด</span>` : ''}
              ${needAck ? `<span class="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-[11px] font-bold">🔔 ต้องรับทราบ</span>` : ''}
              ${_dueBadge(a.due_date)}
            </div>
            <h3 class="text-base font-bold text-gray-800 mb-1.5">${_esc(a.title)}</h3>
            ${a.body ? `<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-2">${_esc(a.body)}</p>` : ''}
            ${isTraining && a.event_date ? `
              <div class="mt-3 mb-2 bg-violet-50 border border-violet-100 rounded-xl p-3 space-y-1.5">
                <p class="text-xs font-semibold text-violet-700">🎓 ข้อมูลการอบรม</p>
                <p class="text-sm text-gray-700">📅 ${_fmtEventDate(a.event_date)}</p>
                ${a.event_periods?.length ? `<p class="text-sm text-gray-700">🕐 คาบที่ ${a.event_periods.sort((x,y)=>x-y).join(', ')}</p>` : ''}
                ${a.event_location ? `<p class="text-sm text-gray-700">📍 ${_esc(a.event_location)}</p>` : ''}
              </div>` : ''}
            <span class="text-[11px] text-gray-400">${_fmtDate(a.created_at)}</span>
            ${isTraining && !inactive ? `
              <div class="mt-3">
                <p class="text-xs font-semibold text-gray-500 mb-2">คุณจะเข้าร่วมไหม?</p>
                <div class="flex flex-wrap gap-2">
                  ${Object.entries(RSVP_CFG).map(([k,v]) => `
                    <button class="ann-rsvp-btn px-3 py-2 rounded-xl text-sm font-semibold transition border-2
                      ${myRsvp === k ? `${v.bg} text-white ring-2 ${v.ring} border-transparent` : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'}"
                      data-ann-id="${a.id}" data-rsvp="${k}">${v.label}</button>
                  `).join('')}
                </div>
              </div>` : ''}
            ${needAck && !inactive ? `
              <div class="mt-3">
                ${isAcked
                  ? `<span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold border border-emerald-200">
                      ✅ รับทราบแล้ว · ${ackedTime}
                    </span>`
                  : `<button class="ann-ack-btn px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition shadow-sm"
                      data-id="${a.id}">🔔 กดรับทราบ</button>`
                }
              </div>` : ''}
          </div>
        </div>
      </div>
    </div>`
  }

  const _renderAnnouncements = async () => {
    const panel = document.getElementById('ann-panel-announce')
    if (!panel) return
    let items, myAcksRaw, myRsvpsRaw
    try {
      const { getMyRsvpsForTeacher } = await import('./api.js')
      ;[items, myAcksRaw, myRsvpsRaw] = await Promise.all([
        getAllAnnouncementsForTeacher(),
        teacher?.id ? getMyAcks(teacher.id).catch(() => []) : Promise.resolve([]),
        teacher?.id ? getMyRsvpsForTeacher(teacher.id).catch(() => []) : Promise.resolve([]),
      ])
    } catch {
      panel.innerHTML = '<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>'
      return
    }

    // filter training announcements — only show if teacher is free in all event_periods
    if (teacher?.id && _schoolCfg) {
      const ay  = parseInt(_schoolCfg.academicYear ?? 2568)
      const sem = parseInt(_schoolCfg.semester ?? 1)
      const trainingItems = items.filter(a => a.ann_type === 'training' && a.event_date && a.event_periods?.length)
      if (trainingItems.length) {
        const busyChecks = await Promise.all(
          trainingItems.map(a => getTeacherBusyPeriodsOnDate(teacher.id, a.event_date, ay, sem).catch(() => []))
        )
        const busyMap = Object.fromEntries(trainingItems.map((a, i) => [a.id, busyChecks[i]]))
        items = items.filter(a => {
          if (a.ann_type !== 'training' || !a.event_periods?.length) return true
          const busy = busyMap[a.id] ?? []
          if ((a.schedule_filter ?? 'all') === 'any') {
            // ว่างอย่างน้อย 1 คาบ
            return a.event_periods.some(p => !busy.includes(p))
          }
          // ว่างทุกคาบ (default)
          return !a.event_periods.some(p => busy.includes(p))
        })
      }
    }

    const acksMap = Object.fromEntries(myAcksRaw.map(a => [a.announcement_id, a.acked_at]))
    const rsvpMap = Object.fromEntries((myRsvpsRaw ?? []).map(r => [r.announcement_id, r.response]))

    const active   = items.filter(a => a.is_active)
    const inactive = items.filter(a => !a.is_active)

    if (!items.length) {
      panel.innerHTML = `<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`
      return
    }

    const sections = GROUPS
      .map(g => ({ ...g, items: active.filter(g.filter) }))
      .filter(g => g.items.length)

    let html = ''
    if (sections.length) {
      html += sections.map(g => `
        <div class="mb-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-bold text-gray-700">${g.label}</span>
            <span class="px-2 py-0.5 bg-gray-100 text-gray-500 text-[11px] rounded-full font-semibold">${g.items.length}</span>
            <div class="flex-1 h-px bg-gray-100 ml-1"></div>
          </div>
          <div class="space-y-3">${g.items.map(a => _annCard(a, acksMap[a.id], rsvpMap[a.id] ?? null)).join('')}</div>
        </div>`).join('')
    } else {
      html += `<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center text-gray-400 mb-5">
        <div class="text-4xl mb-3">📭</div><p class="font-semibold text-gray-500">ยังไม่มีประกาศที่แสดงอยู่ในขณะนี้</p>
      </div>`
    }

    if (inactive.length) {
      html += `<details class="mt-2">
        <summary class="cursor-pointer text-xs text-gray-400 font-semibold py-2 px-1 hover:text-gray-600 transition select-none list-none flex items-center gap-1">
          <span>▸</span> ประวัติประกาศที่ผ่านมา (${inactive.length} รายการ)
        </summary>
        <div class="space-y-3 mt-3">${inactive.map(a => _annCard(a, acksMap[a.id])).join('')}</div>
      </details>`
    }

    panel.innerHTML = html

    panel.querySelectorAll('.ann-ack-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!teacher?.id) return
        btn.disabled = true; btn.textContent = 'กำลังบันทึก...'
        try {
          await ackAnnouncement(Number(btn.dataset.id), teacher.id)
          await _renderAnnouncements()
        } catch {
          showToast('บันทึกไม่สำเร็จ', 'error')
          btn.disabled = false; btn.textContent = '🔔 กดรับทราบ'
        }
      })
    })

    panel.querySelectorAll('.ann-rsvp-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (!teacher?.id) return
        const { upsertAnnouncementRsvp } = await import('./api.js')
        const annId = Number(btn.dataset.annId)
        const rsvp  = btn.dataset.rsvp
        const prev  = btn.classList.contains('bg-emerald-600') || btn.classList.contains('bg-amber-500') || btn.classList.contains('bg-gray-400')
        try {
          await upsertAnnouncementRsvp(annId, teacher.id, rsvp)
          const { showToast: toast } = await import('./ui.js')
          const lbl = { yes:'บันทึก: สนใจเข้าร่วม ✅', maybe:'บันทึก: ไม่แน่ใจ 🤔', no:'บันทึก: ไม่สนใจ ❌' }
          toast(lbl[rsvp] ?? 'บันทึกแล้ว', 'success')
          await _renderAnnouncements()
        } catch { showToast('บันทึกไม่สำเร็จ', 'error') }
      })
    })
  }

  // ─── ความคิดเห็น/บันทึก section ───────────────────────────────────────────
  const _renderComments = async () => {
    const panel = document.getElementById('ann-panel-comments')
    if (!panel) return
    if (!teacher?.id) { panel.innerHTML = '<p class="text-gray-400 text-sm p-4">ไม่พบข้อมูลครู</p>'; return }

    let comments
    try { comments = await getSupervisorComments(teacher.id) }
    catch { panel.innerHTML = '<p class="text-red-400 text-sm p-4">โหลดไม่สำเร็จ</p>'; return }

    if (!comments.length) {
      panel.innerHTML = `<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">💬</div>
        <p class="font-semibold text-gray-500">ยังไม่มีความคิดเห็น / บันทึก</p>
      </div>`
      return
    }

    // group by round_id (ถ้ามี) หรือ supervisor_id + วัน (TH timezone)
    const grouped = []
    const seen = new Map()
    for (const c of comments) {
      const key = c.round_id
        ? `round__${c.round_id}__${c.supervisor_id}`
        : `noround__${c.supervisor_id}__${_thDate(c.created_at)}`
      if (!seen.has(key)) {
        const g = {
          key,
          supervisor: c.teachers,
          date: c.created_at,
          roundEvent: c.work_calendar_events ?? null,
          items: [],
        }
        seen.set(key, g)
        grouped.push(g)
      }
      seen.get(key).items.push(c)
    }

    const _svRoleColor = pos => {
      if (!pos) return 'bg-gray-100 text-gray-600'
      if (pos.startsWith('academic'))  return 'bg-blue-100 text-blue-700'
      if (pos.startsWith('registrar')) return 'bg-violet-100 text-violet-700'
      if (pos === 'dept_head')         return 'bg-emerald-100 text-emerald-700'
      return 'bg-gray-100 text-gray-600'
    }
    const _gradientFor = pos => {
      if (!pos) return 'from-gray-300 to-gray-400'
      if (pos.startsWith('academic'))  return 'from-blue-400 to-indigo-400'
      if (pos.startsWith('registrar')) return 'from-violet-400 to-purple-400'
      if (pos === 'dept_head')         return 'from-emerald-400 to-teal-400'
      return 'from-gray-300 to-gray-400'
    }

    panel.innerHTML = `<div class="space-y-4">` + grouped.map(g => {
      const pos   = g.supervisor?.position
      const name  = g.supervisor?.full_name ?? 'หัวหน้า'
      const role  = ROLE_LABELS[pos] ?? 'ผู้บังคับบัญชา'
      const ev    = g.roundEvent
      const roundBadge = ev
        ? `<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-700">
             ${ev.event_type === 'inspection' && ev.round_number ? `ตรวจครั้งที่ ${ev.round_number}` : ev.label}
           </span>`
        : ''
      return `
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-md transition-shadow">
        <div class="h-1 bg-gradient-to-r ${_gradientFor(pos)}"></div>
        <div class="p-5">
          <div class="flex items-center gap-2 flex-wrap mb-3">
            <span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${_svRoleColor(pos)}">${_esc(role)}</span>
            <span class="text-sm font-semibold text-gray-700">${_esc(name)}</span>
            ${roundBadge}
            <span class="text-[11px] text-gray-400 ml-auto">${_fmtDate(g.date)}</span>
          </div>
          ${ev?.label && ev.event_type !== 'inspection' ? `<p class="text-xs text-indigo-600 mb-2 -mt-1">📅 ${_esc(ev.label)}</p>` : ''}
          <div class="space-y-2">
            ${g.items.map(c => `
              <div class="flex items-start gap-2.5">
                <span class="flex-shrink-0 px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[11px] font-semibold mt-0.5">${_esc(METRIC_LABEL[c.metric] ?? c.metric)}</span>
                <p class="text-sm text-gray-700 leading-relaxed">${_esc(c.comment)}</p>
              </div>`).join('')}
          </div>
        </div>
      </div>`
    }).join('') + `</div>`
  }

  // load both panels in parallel
  await Promise.all([_renderAnnouncements(), _renderComments()])
}

export async function renderStudentQRPrint(teacher, classId = null) {
  setActiveNav('student-qr-print')
  setTitle('พิมพ์ QR Code นักเรียน')
  setContent(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูลห้องเรียนทั้งหมด...
    </div>
  `)

  try {
    // โหลดข้อมูลห้องเรียนทั้งหมดในระบบเพื่อนำมากรอง
    const { data: allClassRows, error } = await supabase
      .from('classes')
      .select(`
        id, class_name,
        master_subjects ( id, grade_level, subject_group )
      `)
      .order('class_name')

    if (error) throw error

    const classes = allClassRows || []

    const getCategory = (c) => {
      const grp = c.master_subjects?.subject_group || ''
      if (['AGM'].includes(grp)) return 'ศาสนา'
      if (['ACDMVOC', 'AGMVOC'].includes(grp)) return 'ปวช'
      return 'สามัญ'
    }

    // มาตรฐานกลุ่มชั้น
    const standardLevels = {
      'สามัญ': ['ม.1', 'ม.2', 'ม.3', 'ม.4', 'ม.5', 'ม.6'],
      'ศาสนา': ['PR 1', 'อก.1', 'อก.2', 'อก.3', 'อป.1', 'อป.2', 'อป.3'],
      'ปวช': ['ปวช.1', 'ปวช.2', 'ปวช.3', 'อก.ปวช.1', 'อก.ปวช.2', 'อก.ปวช.3']
    }

    // สกัดเลเวลจริงจาก DB ผสมกับมาตรฐาน
    const getLevelsForCategory = (cat) => {
      const dbLevels = [...new Set(classes
        .filter(c => getCategory(c) === cat)
        .map(c => c.master_subjects?.grade_level)
        .filter(Boolean)
      )]
      const std = standardLevels[cat] || []
      // รวม เลียงลำดับ
      return [...new Set([...std, ...dbLevels])].sort((a,b) => a.localeCompare(b, 'th'))
    }

    let selectedCategory = 'สามัญ'
    let selectedLevel = ''
    let selectedClassId = ''

    if (classId) {
      const cls = classes.find(c => c.id == classId)
      if (cls) {
        selectedCategory = getCategory(cls)
        selectedLevel = cls.master_subjects?.grade_level || ''
        selectedClassId = cls.id
      }
    }

    // หน้าเว็บหลัก
    const _renderPageStructure = () => {
      const catOptsHtml = ['สามัญ', 'ศาสนา', 'ปวช'].map(cat => `
        <option value="${cat}" ${cat === selectedCategory ? 'selected' : ''}>${cat}</option>
      `).join('')

      setContent(`
        <div class="max-w-4xl mx-auto space-y-6">
          <div class="mb-4">
            <h3 class="text-lg font-bold text-gray-800">🖨️ พิมพ์การ์ด QR Code นักเรียน</h3>
            <p class="text-xs text-gray-400 mt-0.5">เลือกห้องเรียนและตั้งค่าเพื่อจัดเรียงการ์ด QR Code บนหน้ากระดาษ A4 สำหรับสั่งพิมพ์</p>
          </div>

          <!-- ตัวกรองห้องเรียน -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white border border-gray-200 rounded-3xl p-5 shadow-sm">
            <div>
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">1. เลือกระบบหลักสูตร</label>
              <select id="qr-filter-category" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition">
                ${catOptsHtml}
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">2. เลือกระดับชั้น</label>
              <select id="qr-filter-level" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition">
                <!-- เติมแบบไดนามิก -->
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">3. เลือกห้องเรียน</label>
              <select id="qr-filter-class" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-indigo-500 transition">
                <option value="">-- เลือกห้องเรียน --</option>
              </select>
            </div>
          </div>

          <!-- พื้นที่แสดงผลพรีวิวและการตั้งค่าจัดพิมพ์ -->
          <div id="qr-preview-section" class="hidden space-y-6">
            <!-- จัดการด้วย _renderPreviewPanel -->
          </div>
        </div>
      `)

      // ผูก Event ตัวกรอง
      const catSelect = document.getElementById('qr-filter-category')
      const levelSelect = document.getElementById('qr-filter-level')
      const classSelect = document.getElementById('qr-filter-class')

      const syncLevels = () => {
        selectedCategory = catSelect.value
        const levels = getLevelsForCategory(selectedCategory)
        levelSelect.innerHTML = `
          <option value="">-- เลือกระดับชั้น --</option>
          ${levels.map(l => `<option value="${l}" ${l === selectedLevel ? 'selected' : ''}>${l}</option>`).join('')}
        `
        syncClasses()
      }

      const syncClasses = () => {
        selectedLevel = levelSelect.value
        const filteredClasses = classes.filter(c => {
          const matchCat = getCategory(c) === selectedCategory
          const matchLevel = selectedLevel ? (c.master_subjects?.grade_level === selectedLevel) : true
          return matchCat && matchLevel
        })

        classSelect.innerHTML = `
          <option value="">-- เลือกห้องเรียน (${filteredClasses.length} ห้อง) --</option>
          ${filteredClasses.map(c => `
            <option value="${c.id}" ${c.id == selectedClassId ? 'selected' : ''}>${_htmlEsc(c.class_name)}</option>
          `).join('')}
        `
        
        const newClassId = classSelect.value
        if (newClassId) {
          selectedClassId = newClassId
          _loadRosterAndDraw()
        } else {
          document.getElementById('qr-preview-section').classList.add('hidden')
        }
      }

      catSelect.addEventListener('change', () => {
        selectedLevel = ''
        selectedClassId = ''
        syncLevels()
      })
      levelSelect.addEventListener('change', () => {
        selectedClassId = ''
        syncClasses()
      })
      classSelect.addEventListener('change', () => {
        selectedClassId = classSelect.value
        if (selectedClassId) {
          _loadRosterAndDraw()
        } else {
          document.getElementById('qr-preview-section').classList.add('hidden')
        }
      })

      // โหลดค่าเริ่มต้น
      syncLevels()
    }

    // โหลดรายชื่อนักเรียนและวาดพรีวิว
    const _loadRosterAndDraw = async () => {
      const previewSec = document.getElementById('qr-preview-section')
      if (!previewSec) return
      previewSec.classList.remove('hidden')
      previewSec.innerHTML = `
        <div class="flex justify-center py-12 text-gray-400 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
          <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg> กำลังโหลดรายชื่อนักเรียนในห้องเรียน...
        </div>
      `

      try {
        const cls = classes.find(c => c.id == selectedClassId)
        const className = cls ? cls.class_name : 'ทั่วไป'
        const rawStudents = await getClassRosterStudents(selectedClassId)
        // เรียงลำดับนักเรียน
        const students = (rawStudents ?? [])
          .filter(s => s.is_active !== false)
          .map((s, i) => ({ ...s, seat_no: i + 1 }))

        if (students.length === 0) {
          previewSec.innerHTML = `
            <div class="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm">
              <p class="text-4xl mb-2">👥</p>
              <p class="text-sm font-semibold text-gray-500">ไม่มีนักเรียนที่เปิดใช้งานในห้องเรียนนี้</p>
            </div>
          `
          return
        }

        // สถานะการตั้งค่าการพิมพ์
        let cols = parseInt(localStorage.getItem('qr_print_cols') || '4')
        let showCode = localStorage.getItem('qr_print_show_code') !== 'false'
        let showSeat = localStorage.getItem('qr_print_show_seat') !== 'false'
        let showRoom = localStorage.getItem('qr_print_show_room') !== 'false'

        const _renderPreviewPanel = () => {
          previewSec.innerHTML = `
            <!-- บล็อกตั้งค่าจัดพิมพ์ -->
            <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="space-y-2">
                <h4 class="font-bold text-gray-800 text-sm">🎛️ ตั้งค่ากระดาษสั่งพิมพ์ (A4)</h4>
                <div class="flex flex-wrap gap-4 items-center text-xs text-gray-600">
                  <label class="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" id="show-seat" ${showSeat ? 'checked' : ''} class="rounded text-indigo-600 focus:ring-indigo-500" />
                    แสดงเลขที่
                  </label>
                  <label class="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" id="show-code" ${showCode ? 'checked' : ''} class="rounded text-indigo-600 focus:ring-indigo-500" />
                    แสดงเลขประจำตัว
                  </label>
                  <label class="flex items-center gap-1.5 cursor-pointer">
                    <input type="checkbox" id="show-room" ${showRoom ? 'checked' : ''} class="rounded text-indigo-600 focus:ring-indigo-500" />
                    แสดงห้องเรียน
                  </label>
                </div>
              </div>

              <div class="flex flex-wrap gap-3 items-center shrink-0">
                <div class="flex items-center gap-2">
                  <span class="text-xs text-gray-500 font-semibold">จำนวนคอลัมน์:</span>
                  <select id="select-print-cols" class="border border-gray-300 rounded-xl px-3 py-1.5 text-xs bg-white focus:outline-none focus:border-indigo-500">
                    <option value="3" ${cols === 3 ? 'selected' : ''}>3 คอลัมน์</option>
                    <option value="4" ${cols === 4 ? 'selected' : ''}>4 คอลัมน์</option>
                    <option value="5" ${cols === 5 ? 'selected' : ''}>5 คอลัมน์</option>
                    <option value="6" ${cols === 6 ? 'selected' : ''}>6 คอลัมน์</option>
                  </select>
                </div>
                <button id="btn-trigger-print" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
                  🖨️ สั่งพิมพ์ (Print)
                </button>
              </div>
            </div>

            <!-- ข้อแนะนำก่อนพิมพ์ -->
            <div class="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-4 text-xs text-indigo-800 leading-relaxed flex items-start gap-2">
              <span class="text-base">💡</span>
              <div>
                <p class="font-bold">แนะนำการพิมพ์:</p>
                <p class="opacity-90">ระบบใช้ QR Code แบบคงที่ (รหัสนักเรียนโดยตรง) ซึ่งครูสามารถสั่งพิมพ์ค้างไว้ได้ถาวร ในหน้าต่างพรีวิวการสั่งพิมพ์ของเบราว์เซอร์ แนะนำให้เลือกเช็คบ็อกซ์ <strong>"Background graphics" (กราฟิกพื้นหลัง)</strong> และปิดตัวเลือก <strong>"Headers and footers"</strong> เพื่อให้กระดาษ A4 สวยงามสมบูรณ์ที่สุดครับ</p>
              </div>
            </div>

            <!-- พื้นที่ Live Preview -->
            <div>
              <p class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">พรีวิวการจัดวาง (${students.length} คน)</p>
              <div id="qr-live-grid" class="grid gap-3 p-4 border border-dashed border-gray-200 bg-gray-50/50 rounded-3xl" style="grid-template-columns: repeat(${cols}, minmax(0, 1fr));">
                ${students.map(student => `
                  <div class="bg-white border border-gray-100 rounded-2xl p-3 flex flex-col items-center justify-between text-center shadow-sm">
                    <div class="w-full aspect-square flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden mb-2 p-1">
                      <canvas id="live-canvas-${student.id}" class="w-full h-full max-w-full max-h-full object-contain"></canvas>
                    </div>
                    <div class="text-left w-full min-w-0 font-sans">
                      <p class="text-[11px] font-bold text-gray-800 truncate">${_htmlEsc(student.full_name)}</p>
                      ${showCode ? `<p class="text-[9px] text-gray-400 mt-0.5">รหัส: ${_htmlEsc(student.student_code || '-')}</p>` : ''}
                      <div class="flex items-center justify-between mt-1 text-[9px] text-gray-400">
                        ${showRoom ? `<span>ห้อง: ${_htmlEsc(className)}</span>` : ''}
                        ${showSeat ? `<span>เลขที่: ${student.seat_no}</span>` : ''}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `

          // วาดภาพ QR Codes ใน Live Preview
          students.forEach(student => {
            const canvas = document.getElementById(`live-canvas-${student.id}`)
            if (canvas) {
              QRCode.toCanvas(canvas, student.student_code || '', {
                width: 160,
                margin: 1.5,
                color: {
                  dark: '#111827',
                  light: '#FFFFFF'
                }
              }, err => {
                if (err) console.error('Failed to generate live preview QR code:', err)
              })
            }
          })

          // ผูก Event ตั้งค่าพรีวิว
          document.getElementById('show-seat').addEventListener('change', (e) => {
            showSeat = e.target.checked
            localStorage.setItem('qr_print_show_seat', showSeat)
            _renderPreviewPanel()
          })
          document.getElementById('show-code').addEventListener('change', (e) => {
            showCode = e.target.checked
            localStorage.setItem('qr_print_show_code', showCode)
            _renderPreviewPanel()
          })
          document.getElementById('show-room').addEventListener('change', (e) => {
            showRoom = e.target.checked
            localStorage.setItem('qr_print_show_room', showRoom)
            _renderPreviewPanel()
          })
          document.getElementById('select-print-cols').addEventListener('change', (e) => {
            cols = parseInt(e.target.value)
            localStorage.setItem('qr_print_cols', cols)
            _renderPreviewPanel()
          })

          // ดำเนินการสั่งพิมพ์
          document.getElementById('btn-trigger-print').addEventListener('click', async () => {
            // ฉีดพ่น Style สั่งพิมพ์ชั่วคราว
            let styleEl = document.getElementById('qr-print-media-styles')
            if (!styleEl) {
              styleEl = document.createElement('style')
              styleEl.id = 'qr-print-media-styles'
              document.head.appendChild(styleEl)
            }
            styleEl.textContent = `
              @media print {
                body > * {
                  display: none !important;
                }
                #print-qr-area {
                  display: block !important;
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100% !important;
                  padding: 0 !important;
                  margin: 0 !important;
                  background: white !important;
                }
                #print-qr-area * {
                  display: initial;
                  visibility: visible;
                }
                .print-grid {
                  display: grid !important;
                  grid-template-columns: repeat(${cols}, minmax(0, 1fr)) !important;
                  gap: 12px !important;
                  width: 100% !important;
                }
                .qr-print-card {
                  border: 1px solid #9ca3af !important;
                  border-radius: 8px !important;
                  padding: 10px !important;
                  page-break-inside: avoid !important;
                  break-inside: avoid !important;
                  display: flex !important;
                  flex-direction: column !important;
                  align-items: center !important;
                  justify-content: space-between !important;
                  background: white !important;
                }
                .qr-print-card canvas {
                  width: 100% !important;
                  height: auto !important;
                }
              }
            `

            // สร้างพื้นที่พิมพ์ชั่วคราว
            const printArea = document.createElement('div')
            printArea.id = 'print-qr-area'
            printArea.className = 'hidden'
            document.body.appendChild(printArea)

            printArea.innerHTML = `
              <div class="print-grid">
                ${students.map(student => `
                  <div class="qr-print-card">
                    <div style="width: 100%; aspect-ratio: 1/1; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 6px;">
                      <canvas id="print-canvas-${student.id}" style="width: 100%; max-width: 100%; height: auto;"></canvas>
                    </div>
                    <div style="width: 100%; text-align: left; font-family: Sarabun, sans-serif; font-size: 11px;">
                      <p style="font-weight: bold; color: black; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${_htmlEsc(student.full_name)}</p>
                      ${showCode ? `<p style="color: #4b5563; margin: 2px 0 0 0; font-size: 9px;">รหัส: ${_htmlEsc(student.student_code || '-')}</p>` : ''}
                      <div style="display: flex; justify-content: space-between; margin-top: 4px; font-size: 9px; color: #4b5563;">
                        ${showRoom ? `<span>ห้อง: ${_htmlEsc(className)}</span>` : ''}
                        ${showSeat ? `<span>เลขที่: ${student.seat_no}</span>` : ''}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `

            // วาดภาพ QR ใน Print Area
            for (const student of students) {
              const canvas = document.getElementById(`print-canvas-${student.id}`)
              if (canvas) {
                await QRCode.toCanvas(canvas, student.student_code || '', {
                  width: 250,
                  margin: 1,
                  color: { dark: '#000000', light: '#ffffff' }
                })
              }
            }

            // เรียกพิมพ์
            window.print()
            // ทำลายพื้นที่พิมพ์ชั่วคราว
            printArea.remove()
          })
        }

        _renderPreviewPanel()
      } catch (err) {
        console.error(err)
        previewSec.innerHTML = `<div class="p-6 text-red-400 text-sm text-center">เกิดข้อผิดพลาดในการโหลดรายชื่อนักเรียน</div>`
      }
    }

    _renderPageStructure()
  } catch (err) {
    console.error(err)
    showToast('โหลดข้อมูลล้มเหลว: ' + (err.message ?? ''), 'error')
  }
}
