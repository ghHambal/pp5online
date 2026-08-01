import {
  saveAttendance, getAttendanceByDate, getClassStudents,
  getClassAttendanceAll, saveAttendanceCell, getSchoolHolidays,
  getLifeSkillColumns, getLifeSkillScores, upsertLifeSkillScore,
  getReadingScoreColumns, getReadingScores, upsertReadingScore,
  fillLifeSkillScoresForClass, fillPrayerScoresForReligionClass,
  getPrayerRecords, savePrayerRecords, savePrayerCell,
  getSystemConfig, getClassRosterStudents,
  getStudentsByRoom, getStudentsByReligionRoom,
  createLeavePermission, closeLeavePermission,
  getActiveLeavePermissionsForClass, getClassLeaveHistory,
  getLeaveMaxActiveForClass, updateLeaveMaxActiveForClass,
  getLeaveMaxPerStudentWeekForClass, updateLeaveMaxPerStudentWeekForClass,
  getMyClasses, getClassSessionDOWs,
} from './api.js'
import { supabase } from './supabase.js'
import { formatLeaveCountdown } from './leave-time.js'
import { showToast, showDangerConfirm, showSuccessModal } from './ui.js'
import {
  setContent, setTitle, setActiveNav, _htmlEsc, _fmtDate, _parseDateOnly,
  _generateSessions, _dateInputValue, ATT_STATUS, ATT_CYCLE,
  READING_GRADES, _readingGrade, applyReadingGradesFromConfig,
} from './teacher-views-utils.js'

const CAMERA_ICON_SM = `
  <svg aria-hidden="true" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`

const CAMERA_ICON_MD = `
  <svg aria-hidden="true" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`

export async function renderAttendanceGrid(teacher, classData) {
  setActiveNav('attendance')
  setTitle('เช็คชื่อ', 'attendance')
  const ms      = classData.master_subjects
  const credit  = ms?.credit ?? 1
  setContent(`<div class="flex justify-center py-12 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-emerald-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลดข้อมูล...
  </div>`)
  try {
    const { getSystemConfig: _cfg, getClassSessionDOWs } = await import('./api.js')
    const cfg      = await _cfg().catch(() => ({}))
    const curYear  = cfg.academic_year ?? new Date().getFullYear() + 543
    const curSem   = cfg.semester ?? 1
    const srcClassId = classData.source_class_id ?? null
    const [students, attRows, holidays, dowPattern, activeLeaves, classLeaves] = await Promise.all([
      getClassStudents(classData.id),
      getClassAttendanceAll(srcClassId ?? classData.id),   // source ถ้ามี
      getSchoolHolidays(curYear, curSem),
      getClassSessionDOWs(classData.id).catch(() => []),
      getActiveLeavePermissionsForClass(classData.id).catch(() => []),
      getClassLeaveHistory(classData.id, { week: 'current' }).catch(() => []),
    ])
    let leaveMaxActive = await getLeaveMaxActiveForClass(classData.id).catch(() => 3)
    let leaveMaxPerWeek = await getLeaveMaxPerStudentWeekForClass(classData.id).catch(() => 2)
    const isACDMVOC = ms?.subject_group === 'ACDMVOC'
    const sessions = _generateSessions(classData, credit, dowPattern.length ? dowPattern : null, isACDMVOC)
    const holidaySet = new Set(holidays)

    const activeLeaveMap = {}
    activeLeaves.forEach(l => {
      activeLeaveMap[l.student_id] = l
    })

    const leaveCountMap = {}
    classLeaves.forEach(l => {
      leaveCountMap[l.student_id] = (leaveCountMap[l.student_id] || 0) + 1
    })

    // attendance map: { studentId: { sessionNum: status } }
    // ถ้ามี source ให้ remap session number ต่อสัปดาห์ตาม credit ratio
    const attMap = {}
    const nToSrcSession = new Map()  // target n → source session_number (for save remapping)
    if (srcClassId) {
      const { getMyClasses: _mc } = await import('./api.js')
      // เฉพาะสามัญปวช. ที่ยึดจำนวนคาบ/สัปดาห์จริงจากตารางสอน (อัตราหน่วยกิตไม่เท่าสามัญ) — วิชาอื่นใช้หน่วยกิต×2 เหมือนเดิม
      const tgtPerWeek = (isACDMVOC && dowPattern.length) ? dowPattern.length : Math.max(1, Math.round(credit * 2))
      let srcPerWeek = tgtPerWeek
      try {
        const srcDOW = isACDMVOC ? await getClassSessionDOWs(srcClassId).catch(() => []) : []
        if (srcDOW.length) {
          srcPerWeek = srcDOW.length
        } else {
          const allCls = await _mc(null).catch(() => [])
          const src = allCls.find(c => Number(c.id) === Number(srcClassId))
          if (src?.master_subjects?.credit) srcPerWeek = Math.max(1, Math.round(src.master_subjects.credit * 2))
        }
      } catch {}
      const total = sessions.length
      for (let n = 1; n <= total; n++) {
        const weekIdx    = Math.floor((n - 1) / tgtPerWeek)
        const posInWeek  = (n - 1) % tgtPerWeek
        const srcSession = weekIdx * srcPerWeek + posInWeek + 1
        nToSrcSession.set(n, srcSession)
        for (const r of attRows) {
          if (r.session_number !== srcSession) continue
          if (!attMap[r.student_id]) attMap[r.student_id] = {}
          attMap[r.student_id][n] = r.status
        }
      }
    } else {
      for (const r of attRows) {
        if (!attMap[r.student_id]) attMap[r.student_id] = {}
        attMap[r.student_id][r.session_number] = r.status
      }
    }
    // ห้องที่มี source_class_id: บันทึกไปที่ source เสมอ (เพราะโหลดจาก source)
    const saveClassId = srcClassId ?? classData.id
    const saveSessN = (n) => nToSrcSession.get(n) ?? n

    // ─── แจ้งเตือน + ปุ่มลบ (เมื่อครูยืนยันเอง) เมื่อพบข้อมูลในคาบวันหยุด ───────
    const holAttRows = attRows.filter(r => {
      const sess = sessions.find(s => s.n === r.session_number)
      return sess && holidaySet.has(sess.ds)
    })

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
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')"
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
          <button id="btn-leave-quota"
            class="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-lg font-semibold
                   hover:bg-amber-100 transition flex items-center gap-1">
            🚪 <span class="hidden sm:inline">โควต้า</span> <span id="leave-quota-label">${Object.keys(activeLeaveMap).length}/${leaveMaxActive}</span>
          </button>
        </div>
      </div>
      ${holAttRows.length > 0 ? `
      <!-- Holiday attendance banner -->
      <div class="flex items-center justify-between gap-3 px-4 py-2 bg-red-50 border-b border-red-100 text-xs text-red-700 flex-shrink-0">
        <span>⚠️ พบข้อมูลเช็คชื่อ ${holAttRows.length} รายการในคาบที่ตรงกับวันหยุด (คอลัมน์สีแดง)</span>
        <button id="btn-clear-holiday-att"
          class="px-3 py-1.5 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition flex-shrink-0">
          🗑️ ลบข้อมูลนี้
        </button>
      </div>` : ''}
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
              <th class="${stickyL} bg-emerald-50/60" style="width:32px"></th>
              <th class="${stickyM} bg-emerald-50/60" style="left:32px;width:72px"></th>
              <th class="${stickyM} bg-emerald-50/60 text-left px-2" style="left:104px;min-width:${nameW}px">
                <span class="text-[10px] text-emerald-600 font-medium">✏️ กดวันที่เพื่อเช็คชื่อ</span>
              </th>
              ${sessions.map(s => {
                const isHol = holidaySet.has(s.ds)
                return `<th class="${thBase} p-0 cursor-pointer att-date-th ${isHol
                  ? 'bg-red-100 hover:bg-red-200'
                  : 'bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200'}"
                  data-open-session="${s.n}" data-date="${s.ds}"
                  style="width:${colW}px;min-width:${colW}px" title="คลิกเพื่อเช็คชื่อ ${s.ds}">
                  <div class="flex flex-col items-center justify-center py-1 gap-0 ${isHol?'text-red-400':'text-emerald-700'}">
                    <span class="text-[9px] leading-none">${isHol ? '🔴' : '✏️'}</span>
                    <span class="text-[11px] font-semibold leading-tight">${_fmtDate(s.date)}</span>
                  </div>
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
                    <div class="flex flex-col min-w-0">
                      <span class="text-gray-800 text-xs truncate max-w-[105px] font-semibold">${s.full_name}</span>
                      ${_renderStudentRosterLeavePart(s, activeLeaveMap, leaveCountMap, leaveMaxPerWeek)}
                    </div>
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

    const openLeaveQuotaModal = () => {
      _openLeaveQuotaModal(classData, leaveMaxActive, leaveMaxPerWeek, () => {
        renderAttendanceGrid(teacher, classData)
      })
    }

    document.getElementById('btn-leave-quota')?.addEventListener('click', openLeaveQuotaModal)

    // คลิกป้าย "ครบสิทธิ์" ของนักเรียนเพื่อเปิดโมดัลปรับโควต้า
    wrap.addEventListener('click', e => {
      if (e.target.closest('.btn-leave-quota-badge')) openLeaveQuotaModal()
    })

    // ลบข้อมูลเช็คชื่อในคาบที่ตรงกับวันหยุด (ต้องยืนยันก่อน)
    document.getElementById('btn-clear-holiday-att')?.addEventListener('click', async () => {
      const dates = [...new Set(holAttRows.map(r => sessions.find(s => s.n === r.session_number)?.ds).filter(Boolean))].sort()
      const ok = await showDangerConfirm({
        title: 'ลบข้อมูลเช็คชื่อในวันหยุด',
        message: `พบข้อมูลเช็คชื่อ ${holAttRows.length} รายการ ในคาบที่ตรงกับวันหยุดโรงเรียน (${dates.join(', ')})`,
        detail: 'คาบเหล่านี้ถูกล็อกไม่ให้แก้ไข ข้อมูลเก่าที่ค้างอยู่จะถูกลบออกถาวรและไม่สามารถกู้คืนได้',
        confirmText: 'ลบข้อมูลนี้',
      })
      if (!ok) return
      await Promise.all(holAttRows.map(r =>
        saveAttendanceCell(classData.id, r.student_id, r.session_number, null, null)
      ))
      showToast(`ลบข้อมูลเช็คชื่อในวันหยุดเรียบร้อย ${holAttRows.length} รายการ`, 'success')
      renderAttendanceGrid(teacher, classData)
    })

    // คลิกชื่อนักเรียน → สถิติรายบุคคล
    wrap.addEventListener('click', e => {
      if (e.target.closest('.btn-request-leave') || e.target.closest('.leave-badge')) return
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
        await saveAttendanceCell(saveClassId, sid, saveSessN(sessN), date, next)
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
      _openAttFormModal(teacher, classData, students, attMap, sessN, date, sameDateSessions, holidaySet, saveClassId, saveSessN)
    })

    // ─── Leave pass Event listeners & Timer ─────────────────────────
    if (window._leaveTimerInterval) {
      clearInterval(window._leaveTimerInterval)
      window._leaveTimerInterval = null
    }

    window._overdueQueue = window._overdueQueue || []
    window._isProcessingOverdue = false
    window._notifiedOverdueLeaves = window._notifiedOverdueLeaves || new Set()

    const updateTimers = () => {
      const timers = document.querySelectorAll('.leave-timer')
      if (timers.length === 0) return
      
      const now = new Date()
      timers.forEach(async el => {
        const badge = el.closest('.leave-badge')
        if (!badge) return
        
        const startStr = badge.dataset.start
        const durationMin = parseInt(badge.dataset.duration)
        const leaveId = badge.dataset.leaveId
        const studentName = badge.dataset.name
        
        const countdown = formatLeaveCountdown(startStr, durationMin, now)
        const isOverdue = countdown.isOverdue
        
        if (isOverdue) {
          el.innerHTML = countdown.timerText
          if (!badge.classList.contains('bg-red-100')) {
            badge.classList.remove('bg-amber-100', 'text-amber-700')
            badge.classList.add('bg-red-100', 'text-red-700', 'animate-pulse')
            const spanLabel = badge.querySelector('span')
            if (spanLabel) spanLabel.textContent = 'เลยเวลา'
            
            if (!window._notifiedOverdueLeaves.has(leaveId)) {
              window._notifiedOverdueLeaves.add(leaveId)
              window._overdueQueue.push({
                leaveId,
                studentName,
                classId: classData.id,
                teacherId: teacher.id
              })
              _processNextOverdueModal()
            }
          }
          if (countdown.isBeyondLimit) {
            badge.classList.remove('animate-pulse')
          }
        } else {
          el.innerHTML = countdown.timerText
        }
      })
    }

    const _processNextOverdueModal = async () => {
      if (window._isProcessingOverdue || window._overdueQueue.length === 0) return
      window._isProcessingOverdue = true
      
      const item = window._overdueQueue.shift()
      
      const existing = document.getElementById('overdue-check-modal')
      if (existing) existing.remove()
      
      const modal = document.createElement('div')
      modal.id = 'overdue-check-modal'
      modal.className = 'fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 animate-fade'
      modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center space-y-4">
          <div class="text-4xl text-amber-500 animate-bounce">🚪⌛</div>
          <h3 class="text-lg font-bold text-gray-800">นักเรียนหมดเวลาขออนุญาตแล้ว</h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            นักเรียน <strong class="text-gray-800">${_htmlEsc(item.studentName)}</strong> ครบกำหนดเวลาขออนุญาตออกจากห้องแล้ว เดินทางกลับเข้าห้องเรียนแล้วหรือยัง?
          </p>
          <div class="grid grid-cols-2 gap-3 pt-2">
            <button id="btn-overdue-yes" class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md transition-all">
              ✅ กลับเข้าห้องแล้ว
            </button>
            <button id="btn-overdue-no" class="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-bold text-xs transition-all">
              ❌ ยังไม่กลับเข้าห้อง
            </button>
          </div>
        </div>
      `
      document.body.appendChild(modal)
      
      modal.querySelector('#btn-overdue-yes').addEventListener('click', async () => {
        try {
          await closeLeavePermission(item.leaveId, 'returned')
          showToast(`บันทึกการกลับห้องของ ${item.studentName} เรียบร้อย`, 'success')
          modal.remove()
          window._isProcessingOverdue = false
          renderAttendanceGrid(teacher, classData)
          _processNextOverdueModal()
        } catch (err) {
          showToast('บันทึกผิดพลาด: ' + (err.message ?? ''), 'error')
          window._isProcessingOverdue = false
        }
      })
      
      modal.querySelector('#btn-overdue-no').addEventListener('click', async () => {
        try {
          await closeLeavePermission(item.leaveId, 'overdue')
          showToast(`บันทึกประวัติการเลยเวลาของ ${item.studentName} แล้ว`, 'info')
          modal.remove()
          window._isProcessingOverdue = false
          renderAttendanceGrid(teacher, classData)
          _processNextOverdueModal()
        } catch (err) {
          showToast('บันทึกผิดพลาด: ' + (err.message ?? ''), 'error')
          window._isProcessingOverdue = false
        }
      })
    }

    window._leaveTimerInterval = setInterval(updateTimers, 1000)
    setTimeout(updateTimers, 100)

    // คลิกปุ่มขออนุญาตออกนอกห้อง
    wrap.addEventListener('click', async e => {
      const btn = e.target.closest('.btn-request-leave')
      if (!btn) return
      
      const sid = parseInt(btn.dataset.sid)
      const name = btn.dataset.name
      const img = btn.dataset.img || ''
      
      // จำกัดการออกห้องพร้อมกันตามโควต้าของห้องเรียนนี้
      const activeOutCount = Object.keys(activeLeaveMap).length
      if (activeOutCount >= leaveMaxActive) {
        showToast(`ไม่อนุญาตให้ออกนอกห้องเพิ่ม เนื่องจากมีนักเรียนอยู่นอกห้องครบโควต้า ${leaveMaxActive} คนแล้ว`, 'warning')
        return
      }
      
      _openLeaveRequestModal(teacher, classData, sid, name, img, activeLeaveMap, leaveMaxActive, () => renderAttendanceGrid(teacher, classData))
    })

    // คลิกป้ายเพื่อส่งกลับห้อง
    wrap.addEventListener('click', async e => {
      const badge = e.target.closest('.leave-badge')
      if (!badge) return
      
      const leaveId = badge.dataset.leaveId
      const name = badge.dataset.name
      const reason = badge.dataset.reason
      
      const confirmed = await showDangerConfirm({
        title: `นักเรียนกลับเข้าห้องเรียน?`,
        message: `ยืนยันว่านักเรียน "${name}" (ออกนอกห้องด้วยเหตุผล: ${reason}) กลับเข้าห้องเรียนเรียบร้อยแล้ว`,
        confirmText: 'กลับเข้าห้องแล้ว',
      })
      if (!confirmed) return
      
      try {
        await closeLeavePermission(leaveId, 'returned')
        showToast(`บันทึกการกลับห้องของ ${name} เรียบร้อย`, 'success')
        renderAttendanceGrid(teacher, classData)
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      }
    })

  } catch (err) {
    showToast('โหลดข้อมูลไม่สำเร็จ: '+(err.message??''), 'error')
  }

}

// ─── Helpers for Leave Permission System ──────────────────────────────────────

function _renderStudentRosterLeavePart(student, activeLeaveMap, leaveCountMap, leaveMaxPerWeek) {
  const leave = activeLeaveMap[student.id]
  const leaveCount = leaveCountMap[student.id] || 0
  const hasLeft = leaveCount >= leaveMaxPerWeek

  if (leave) {
    return `
      <div class="mt-0.5 flex items-center">
        <span class="leave-badge cursor-pointer inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${leave.status === 'overdue' ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-amber-100 text-amber-700'}"
          data-leave-id="${leave.id}" data-sid="${student.id}" data-name="${_htmlEsc(student.full_name)}" data-reason="${_htmlEsc(leave.reason)}" data-start="${leave.created_at}" data-duration="${leave.allowed_duration}" title="ขออนุญาตออกนอกห้อง: ${leave.reason} (คลิกเพื่อบันทึกกลับห้อง)">
          🚪 <span>${leave.status === 'overdue' ? 'เลยเวลา' : 'ออกห้อง'}</span> <span class="leave-timer font-mono text-[9px]">--:--</span>
        </span>
      </div>
    `
  } else if (hasLeft) {
    return `
      <div class="mt-0.5 flex items-center">
        <button type="button" class="btn-leave-quota-badge inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-400 border border-gray-100 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition cursor-pointer" title="นักเรียนใช้สิทธิ์ออกนอกห้องครบ ${leaveMaxPerWeek} ครั้งแล้วในสัปดาห์นี้ (คลิกเพื่อปรับโควต้า)">
          ✓ ออกแล้ว (${leaveCount}/${leaveMaxPerWeek})
        </button>
      </div>
    `
  } else {
    return `
      <div class="mt-0.5 flex items-center gap-1">
        <button type="button" class="btn-request-leave text-[9px] text-gray-500 hover:text-indigo-600 border border-gray-200 hover:border-indigo-300 rounded px-1 py-0.5 bg-gray-50 hover:bg-indigo-50 transition font-medium"
          data-sid="${student.id}" data-name="${_htmlEsc(student.full_name)}" data-img="${student.image_url || ''}">
          🚪 ขอออกห้อง
        </button>
        <span class="text-[9px] text-gray-400 font-mono" title="ใช้สิทธิ์ออกนอกห้องไปแล้ว ${leaveCount} จาก ${leaveMaxPerWeek} ครั้งในสัปดาห์นี้">${leaveCount}/${leaveMaxPerWeek}</span>
      </div>
    `
  }
}

export function _openLeaveQuotaModal(classData, currentMax, currentMaxPerWeek, onSave) {
  document.getElementById('leave-quota-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'leave-quota-modal'
  modal.className = 'fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <div>
          <h3 class="font-bold text-gray-800 text-sm">🚪 ตั้งค่าโควต้าออกนอกห้อง</h3>
          <p class="text-[11px] text-gray-400 mt-0.5">${_htmlEsc(classData.class_name || 'ห้องเรียนนี้')}</p>
        </div>
        <button id="btn-leave-quota-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนนักเรียนที่อนุญาตให้อยู่นอกห้องพร้อมกัน</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota" min="1" max="30" value="${currentMax}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">คน</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1, 2, 3, 5].map(n => `
            <button type="button" class="btn-leave-quota-preset px-3 py-2 rounded-xl border text-xs font-bold ${n === currentMax ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}"
              data-value="${n}">${n} คน</button>
          `).join('')}
        </div>
      </div>
      <div class="space-y-2 border-t pt-3">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">จำนวนครั้งสูงสุดต่อสัปดาห์ (ต่อนักเรียน 1 คน)</label>
        <div class="flex items-center gap-2">
          <input type="number" id="input-leave-quota-per-week" min="1" max="14" value="${currentMaxPerWeek}"
            class="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-indigo-500" />
          <span class="text-xs text-gray-500 font-medium">ครั้ง/สัปดาห์</span>
        </div>
        <div class="grid grid-cols-4 gap-2">
          ${[1, 2, 3, 5].map(n => `
            <button type="button" class="btn-leave-quota-week-preset px-3 py-2 rounded-xl border text-xs font-bold ${n === currentMaxPerWeek ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}"
              data-value="${n}">${n} ครั้ง</button>
          `).join('')}
        </div>
      </div>
      <button id="btn-save-leave-quota" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        บันทึกโควต้า
      </button>
    </div>
  `
  document.body.appendChild(modal)

  const input = modal.querySelector('#input-leave-quota')
  const inputPerWeek = modal.querySelector('#input-leave-quota-per-week')
  modal.querySelector('#btn-leave-quota-close')?.addEventListener('click', () => modal.remove())
  modal.querySelectorAll('.btn-leave-quota-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.value
    })
  })
  modal.querySelectorAll('.btn-leave-quota-week-preset').forEach(btn => {
    btn.addEventListener('click', () => {
      inputPerWeek.value = btn.dataset.value
    })
  })
  modal.querySelector('#btn-save-leave-quota')?.addEventListener('click', async () => {
    const nextMax = parseInt(input.value, 10)
    if (!Number.isFinite(nextMax) || nextMax < 1 || nextMax > 30) {
      showToast('กรุณาระบุโควต้าคนออกพร้อมกันระหว่าง 1-30 คน', 'warning')
      return
    }
    const nextMaxPerWeek = parseInt(inputPerWeek.value, 10)
    if (!Number.isFinite(nextMaxPerWeek) || nextMaxPerWeek < 1 || nextMaxPerWeek > 14) {
      showToast('กรุณาระบุจำนวนครั้งต่อสัปดาห์ระหว่าง 1-14 ครั้ง', 'warning')
      return
    }
    try {
      await Promise.all([
        updateLeaveMaxActiveForClass(classData.id, nextMax),
        updateLeaveMaxPerStudentWeekForClass(classData.id, nextMaxPerWeek),
      ])
      showToast(`บันทึกโควต้าออกนอกห้องเป็น ${nextMax} คน / ${nextMaxPerWeek} ครั้งต่อสัปดาห์แล้ว`, 'success')
      modal.remove()
      onSave?.(nextMax, nextMaxPerWeek)
    } catch (err) {
      showToast('บันทึกโควต้าไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    }
  })
}

export function _openLeaveRequestModal(teacher, classData, studentId, studentName, studentImg, activeLeaveMap, leaveMaxActive, onSave) {
  const existing = document.getElementById('leave-request-modal')
  if (existing) existing.remove()
  
  const REASONS = ['🚽 ไปห้องน้ำ', '💊 ไปห้องพยาบาล', '🏢 ไปฝ่ายปกครอง/ธุรการ', '✏️ อื่นๆ']
  const DURATIONS = [5, 10, 15, 30]
  
  let selectedReason = REASONS[0]
  let selectedDuration = 10
  
  const modal = document.createElement('div')
  modal.id = 'leave-request-modal'
  modal.className = 'fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5 space-y-4 animate-fade">
      <div class="flex items-center justify-between border-b pb-3">
        <h3 class="font-bold text-gray-800 text-sm">🚪 ขออนุญาตออกนอกห้องเรียน</h3>
        <button id="btn-leave-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="rounded-2xl border border-amber-100 bg-amber-50 px-3 py-2 text-xs text-amber-800 flex items-center justify-between gap-3">
        <span class="font-semibold">โควต้านอกห้องตอนนี้</span>
        <span class="font-extrabold">${Object.keys(activeLeaveMap).length}/${leaveMaxActive} คน</span>
      </div>
      
      <!-- ข้อมูลและรูปนักเรียน -->
      <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
        <div class="w-12 h-16 rounded-xl overflow-hidden bg-gray-150 border border-gray-250 flex-shrink-0">
          ${studentImg 
            ? `<img src="${_htmlEsc(studentImg)}" class="w-full h-full object-cover" />` 
            : `<div class="w-full h-full flex items-center justify-center text-xl font-bold text-gray-400 bg-gray-200">👤</div>`
          }
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">นักเรียนผู้ขออนุญาต</p>
          <h4 class="font-extrabold text-gray-800 text-sm truncate mt-0.5">${_htmlEsc(studentName)}</h4>
        </div>
      </div>
      
      <!-- เหตุผล -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">1. เหตุผลของการขออนุญาต</label>
        <div class="grid grid-cols-2 gap-2">
          ${REASONS.map((r, i) => `
            <button class="btn-reason text-xs font-semibold px-3 py-2 border rounded-xl transition text-center
              ${i === 0 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}"
              data-reason="${r}">${r}
            </button>
          `).join('')}
        </div>
        <input type="text" id="input-custom-reason" class="hidden w-full border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="กรุณาระบุเหตุผลการขออนุญาต..." />
      </div>
      
      <!-- เวลาที่อนุญาต -->
      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">2. ระยะเวลาที่อนุญาต</label>
        <div class="grid grid-cols-5 gap-1.5">
          ${DURATIONS.map((d) => `
            <button class="btn-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center
              ${d === 10 ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}"
              data-duration="${d}">${d} น.
            </button>
          `).join('')}
          <button class="btn-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            data-duration="custom">ระบุเอง...
          </button>
        </div>
        <div id="div-custom-duration" class="hidden flex items-center gap-2 mt-2">
          <input type="number" id="input-custom-duration" min="1" max="180" class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="ระบุนาที (เช่น 20)..." />
          <span class="text-xs text-gray-500 font-medium">นาที</span>
        </div>
      </div>
      
      <button id="btn-leave-submit" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        🚪 อนุมัติให้ออกนอกห้อง
      </button>
    </div>
  `
  document.body.appendChild(modal)
  
  // จัดการตัวเลือกเหตุผล
  const customReasonInput = modal.querySelector('#input-custom-reason')
  modal.querySelectorAll('.btn-reason').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.querySelectorAll('.btn-reason').forEach(b => {
        b.className = 'btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center'
      })
      btn.className = 'btn-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center'
      selectedReason = btn.dataset.reason
      
      if (selectedReason === '✏️ อื่นๆ') {
        customReasonInput.classList.remove('hidden')
        customReasonInput.focus()
      } else {
        customReasonInput.classList.add('hidden')
      }
    })
  })
  
  // จัดการตัวเลือกเวลา
  const customDurationDiv = modal.querySelector('#div-custom-duration')
  const customDurationInput = modal.querySelector('#input-custom-duration')
  
  modal.querySelectorAll('.btn-duration').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.querySelectorAll('.btn-duration').forEach(b => {
        b.className = 'btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center'
      })
      btn.className = 'btn-duration text-[11px] font-semibold py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center'
      
      const durValue = btn.dataset.duration
      if (durValue === 'custom') {
        customDurationDiv.classList.remove('hidden')
        customDurationInput.focus()
      } else {
        customDurationDiv.classList.add('hidden')
        selectedDuration = parseInt(durValue)
      }
    })
  })
  
  // ปิด modal
  modal.querySelector('#btn-leave-close').addEventListener('click', () => modal.remove())
  
  // ยืนยันขอใบอนุญาต
  const submitBtn = modal.querySelector('#btn-leave-submit')
  const submitLabel = submitBtn.textContent
  submitBtn.addEventListener('click', async () => {
    if (submitBtn.disabled) return

    let reasonText = selectedReason
    if (selectedReason === '✏️ อื่นๆ') {
      reasonText = customReasonInput.value.trim()
      if (!reasonText) {
        showToast('กรุณาระบุเหตุผลในการขออนุญาต', 'warning')
        return
      }
    }
    
    let durationVal = selectedDuration
    const activeDurationBtn = modal.querySelector('.btn-duration.bg-indigo-600')
    if (activeDurationBtn && activeDurationBtn.dataset.duration === 'custom') {
      const customMin = parseInt(customDurationInput.value.trim())
      if (isNaN(customMin) || customMin <= 0) {
        showToast('กรุณาระบุระยะเวลากรอกเป็นจำนวนนาทีที่ถูกต้อง (มากกว่า 0)', 'warning')
        return
      }
      durationVal = customMin
    }
    
    try {
      submitBtn.disabled = true
      submitBtn.textContent = 'กำลังบันทึก...'
      submitBtn.classList.add('opacity-70', 'cursor-not-allowed')
      await createLeavePermission(studentId, classData.id, teacher.id, reasonText, durationVal, leaveMaxActive)
      modal.remove()
      onSave()
      showSuccessModal({
        title: 'อนุมัติใบอนุญาตสำเร็จ 🟢',
        message: `ได้ออกใบอนุญาตออกนอกห้องเรียนให้แก่ <strong>${_htmlEsc(studentName)}</strong> เป็นเวลา <strong>${durationVal} นาที</strong> เรียบร้อยแล้ว`,
        confirmText: 'ตกลง'
      })
    } catch (err) {
      showToast('การขออนุญาตล้มเหลว: ' + (err.message ?? ''), 'error')
      submitBtn.disabled = false
      submitBtn.textContent = submitLabel
      submitBtn.classList.remove('opacity-70', 'cursor-not-allowed')
    }
  })
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
    const wk  = _dateInputValue(mon)
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
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
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
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
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
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
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

export async function _openAttendanceModalForSession(teacher, classData, sessN, options = {}) {
  const ms = classData.master_subjects
  const credit = ms?.credit ?? 1
  const cfg = await getSystemConfig().catch(() => ({}))
  const curYear = cfg.academic_year ?? new Date().getFullYear() + 543
  const curSem = cfg.semester ?? 1
  const srcClassId = classData.source_class_id ?? null
  const [students, attRows, holidays, dowPattern] = await Promise.all([
    getClassStudents(classData.id),
    getClassAttendanceAll(srcClassId ?? classData.id),
    getSchoolHolidays(curYear, curSem),
    getClassSessionDOWs(classData.id).catch(() => []),
  ])
  const isACDMVOC = ms?.subject_group === 'ACDMVOC'
  const sessions = _generateSessions(classData, credit, dowPattern.length ? dowPattern : null, isACDMVOC)
  const holidaySet = new Set(holidays)
  const attMap = {}
  const nToSrcSession = new Map()
  if (srcClassId) {
    // เฉพาะสามัญปวช. ที่ยึดจำนวนคาบ/สัปดาห์จริงจากตารางสอน (อัตราหน่วยกิตไม่เท่าสามัญ) — วิชาอื่นใช้หน่วยกิต×2 เหมือนเดิม
    const tgtPerWeek = (isACDMVOC && dowPattern.length) ? dowPattern.length : Math.max(1, Math.round(credit * 2))
    let srcPerWeek = tgtPerWeek
    try {
      const srcDOW = isACDMVOC ? await getClassSessionDOWs(srcClassId).catch(() => []) : []
      if (srcDOW.length) {
        srcPerWeek = srcDOW.length
      } else {
        const allCls = await getMyClasses(teacher?.id ?? null).catch(() => [])
        const src = allCls.find(c => Number(c.id) === Number(srcClassId))
        if (src?.master_subjects?.credit) srcPerWeek = Math.max(1, Math.round(src.master_subjects.credit * 2))
      }
    } catch {}
    const total = sessions.length
    for (let n = 1; n <= total; n++) {
      const weekIdx = Math.floor((n - 1) / tgtPerWeek)
      const posInWeek = (n - 1) % tgtPerWeek
      const srcSession = weekIdx * srcPerWeek + posInWeek + 1
      nToSrcSession.set(n, srcSession)
      for (const r of attRows) {
        if (r.session_number !== srcSession) continue
        if (!attMap[r.student_id]) attMap[r.student_id] = {}
        attMap[r.student_id][n] = r.status
      }
    }
  } else {
    for (const r of attRows) {
      if (!attMap[r.student_id]) attMap[r.student_id] = {}
      attMap[r.student_id][r.session_number] = r.status
    }
  }
  const session = sessions.find(s => Number(s.n) === Number(sessN))
  if (!session) throw new Error('ไม่พบคาบเรียนที่เลือก')
  if (holidaySet.has(session.ds)) throw new Error('คาบนี้ตรงกับวันหยุดโรงเรียน')
  const sameDateSessions = sessions.filter(s => s.ds === session.ds)
  const saveClassId = srcClassId ?? classData.id
  const saveSessN = (n) => nToSrcSession.get(n) ?? n
  _openAttFormModal(teacher, classData, students, attMap, session.n, session.ds, sameDateSessions, holidaySet, saveClassId, saveSessN, options)
}

export async function openAttendanceScanSetup(teacher) {
  document.getElementById('att-scan-setup-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'att-scan-setup-modal'
  modal.className = 'fixed inset-0 z-[190] flex items-end sm:items-center justify-center bg-black/50 p-4'
  modal.innerHTML = `
    <div class="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
      <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-gray-800 text-base flex items-center gap-2">
            <span class="w-8 h-8 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">${CAMERA_ICON_MD}</span>
            <span>สแกน QR เช็คชื่อ</span>
          </h3>
          <p class="text-xs text-gray-400 mt-0.5">เลือกห้องและคาบ แล้วระบบจะเปิดฟอร์มเช็คชื่อเดิมพร้อมกล้องสแกน</p>
        </div>
        <button id="att-scan-setup-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
      </div>
      <div id="att-scan-setup-body" class="p-5">
        <div class="flex items-center justify-center py-10 text-gray-400 text-sm">
          <svg class="animate-spin h-5 w-5 text-emerald-400 mr-2" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          กำลังโหลดห้องเรียน...
        </div>
      </div>
    </div>
  `
  document.body.appendChild(modal)
  const close = () => modal.remove()
  modal.addEventListener('click', e => { if (e.target === modal) close() })
  modal.querySelector('#att-scan-setup-close')?.addEventListener('click', close)

  const body = modal.querySelector('#att-scan-setup-body')
  try {
    const classes = await getMyClasses(teacher?.id ?? null).catch(() => [])
    if (!classes.length) {
      body.innerHTML = `<div class="py-10 text-center text-gray-400 text-sm">ยังไม่มีห้องเรียนสำหรับเช็คชื่อ</div>`
      return
    }
    body.innerHTML = `
      <div class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1.5">ห้องเรียน / วิชา</label>
          <select id="att-scan-class" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-emerald-500">
            ${classes.map(c => `<option value="${c.id}">${_htmlEsc(c.class_name)} — ${_htmlEsc(c.master_subjects?.subject_name ?? '—')}</option>`).join('')}
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-500 mb-1.5">คาบที่จะเช็ค</label>
          <select id="att-scan-session" class="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-emerald-500">
            <option value="">กำลังโหลดคาบ...</option>
          </select>
        </div>
        <div id="att-scan-session-hint" class="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 rounded-2xl px-3 py-2"></div>
        <button id="att-scan-start" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-sm font-extrabold shadow-md transition flex items-center justify-center gap-2">
          ${CAMERA_ICON_SM}
          <span>เปิดฟอร์มและเริ่มสแกน</span>
        </button>
      </div>
    `

    const classSelect = body.querySelector('#att-scan-class')
    const sessionSelect = body.querySelector('#att-scan-session')
    const hint = body.querySelector('#att-scan-session-hint')
    let sessions = []

    const renderSessions = async () => {
      const cls = classes.find(c => String(c.id) === String(classSelect.value))
      sessionSelect.innerHTML = `<option value="">กำลังโหลดคาบ...</option>`
      hint.textContent = ''
      if (!cls) return
      const dowPattern = await getClassSessionDOWs(cls.id).catch(() => [])
      const credit = cls.master_subjects?.credit ?? 1
      const isACDMVOC = cls.master_subjects?.subject_group === 'ACDMVOC'
      sessions = _generateSessions(cls, credit, dowPattern.length ? dowPattern : null, isACDMVOC)
      const today = _dateInputValue(new Date())
      const defaultSession = sessions.find(s => s.ds === today) || sessions.find(s => s.ds > today) || sessions[0]
      sessionSelect.innerHTML = sessions.map(s => `
        <option value="${s.n}" ${defaultSession?.n === s.n ? 'selected' : ''}>
          คาบที่ ${s.n} · ${_fmtDate(s.date)}${s.ds === today ? ' · วันนี้' : ''}
        </option>
      `).join('')
      hint.textContent = defaultSession
        ? `ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${defaultSession.n} ก่อนเปิดกล้อง`
        : 'ไม่พบคาบเรียนสำหรับห้องนี้'
    }

    classSelect.addEventListener('change', renderSessions)
    sessionSelect.addEventListener('change', () => {
      const s = sessions.find(x => String(x.n) === String(sessionSelect.value))
      hint.textContent = s ? `ระบบจะโหลดข้อมูลเช็คชื่อเดิมของคาบที่ ${s.n} ก่อนเปิดกล้อง` : ''
    })
    await renderSessions()

    body.querySelector('#att-scan-start')?.addEventListener('click', async () => {
      const cls = classes.find(c => String(c.id) === String(classSelect.value))
      const sessN = parseInt(sessionSelect.value, 10)
      if (!cls || !sessN) {
        showToast('กรุณาเลือกห้องและคาบที่จะเช็ค', 'warning')
        return
      }
      const btn = body.querySelector('#att-scan-start')
      btn.disabled = true
        btn.textContent = 'กำลังเปิดฟอร์ม...'
      try {
        close()
        await _openAttendanceModalForSession(teacher, cls, sessN, { autoOpenScanner: true })
      } catch (err) {
        showToast(err.message || 'เปิดสแกนเช็คชื่อไม่สำเร็จ', 'error')
      } finally {
        btn.disabled = false
        btn.innerHTML = `${CAMERA_ICON_SM}<span>เปิดฟอร์มและเริ่มสแกน</span>`
      }
    })
  } catch (err) {
    body.innerHTML = `<div class="py-10 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${_htmlEsc(err.message || '')}</div>`
  }
}

function _openAttFormModal(teacher, classData, students, attMap, sessN, date, sameDateSessions, holidaySet = new Set(), saveClassId = null, sessionRemap = n => n, options = {}) {
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
          <button id="btn-att-scan-qr"
            class="text-xs px-3 py-1.5 bg-slate-900 text-white rounded-xl
                   font-bold flex items-center gap-1.5 hover:bg-slate-800 active:scale-[0.98] transition shadow-sm"
            title="สแกน QR Code ของนักเรียนเพื่อเช็คชื่อ">
            ${CAMERA_ICON_SM}
            <span>สแกน QR</span>
          </button>
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
          const savedStatus = attMap[s.id]?.[sessN] ?? null
          const cur = savedStatus ?? 'present'
          return `<div class="flex items-center gap-1.5 py-1.5 border-b border-gray-50" data-modal-sid="${s.id}">
            <span class="text-gray-400 text-xs w-5 text-right flex-shrink-0">${i+1}</span>
            ${s.image_url
              ? `<img src="${s.image_url}" class="w-7 h-7 rounded object-cover flex-shrink-0" />`
              : `<div class="w-7 h-7 rounded bg-gray-100 flex items-center justify-center text-xs flex-shrink-0">👤</div>`}
            <span class="flex-1 text-sm text-gray-800 truncate min-w-0">${s.full_name}</span>
            <div class="flex gap-0.5 flex-shrink-0" data-att-touched="${savedStatus ? '1' : '0'}">
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
        row?.querySelector('[data-att-touched]')?.setAttribute('data-att-touched', '1')
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
    row?.querySelector('[data-att-touched]')?.setAttribute('data-att-touched', '1')
    row?.querySelectorAll('.att-modal-status').forEach(b => {
      b.className = `att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium

        ${b.dataset.status === status

          ? b.dataset.color

          : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`
    })
  })

  // ─── QR Code Scanner ──────────────────────────────────────────────
  modal.querySelector('#btn-att-scan-qr')?.addEventListener('click', async () => {
    const isSupported = (window._pp5DonorTierIndex > 0)
    
    // Check quota
    const quota = _checkWeeklyScanQuota(teacher?.id, isSupported)
    if (!quota.allowed) {
      // Paywall popup
      document.getElementById('att-scan-paywall')?.remove()
      const paywall = document.createElement('div')
      paywall.id = 'att-scan-paywall'
      paywall.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60'
      paywall.innerHTML = `
        <div class="bg-white w-full max-w-sm rounded-2xl shadow-2xl flex flex-col p-6 text-center gap-4 relative animate-fade">
          <button id="pw-close-btn" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
          <div class="text-6xl mt-4">🔒</div>
          <p class="font-bold text-gray-800 text-lg">สิทธิ์การสแกนทดลองใช้งานเต็มแล้ว</p>
          <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">ฟีเจอร์สแกน QR เพื่อเช็คชื่อคาบเรียนจำกัดทดลองฟรี ${quota.limit} ครั้งต่อสัปดาห์สำหรับผู้ใช้งานทั่วไป<br><br>ร่วมสนับสนุนระบบเพื่อเปิดใช้งานแบบไม่จำกัดครับ</p>
          <button id="pw-donate-btn" class="mt-2 w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition bg-gradient-to-r from-amber-500 to-orange-500">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
        </div>`
      document.body.appendChild(paywall)
      paywall.querySelector('#pw-close-btn').addEventListener('click', () => paywall.remove())
      paywall.querySelector('#pw-donate-btn').addEventListener('click', () => {
        paywall.remove()
        document.getElementById('btn-donate-float')?.click()
      })
      return
    }

    // Open scanner overlay
    document.getElementById('att-scanner-overlay')?.remove()
    const overlay = document.createElement('div')
    overlay.id = 'att-scanner-overlay'
    overlay.className = 'fixed inset-0 z-[95] flex flex-col bg-slate-950 items-center justify-center p-4'
    overlay.innerHTML = `
      <style>
        @keyframes laser-sweep {
          0% { top: 0%; opacity: 0.3; }
          50% { opacity: 0.9; }
          100% { top: 100%; opacity: 0.3; }
        }
        .animate-laser-move {
          position: absolute;
          animation: laser-sweep 2.2s infinite ease-in-out;
        }
        .scan-flash-success {
          animation: flash-green 0.6s ease-out;
        }
        .scan-flash-error {
          animation: flash-red 0.6s ease-out;
        }
        @keyframes flash-green {
          0% { box-shadow: inset 0 0 0 0px #10b981; }
          50% { box-shadow: inset 0 0 0 12px #10b981; }
          100% { box-shadow: inset 0 0 0 0px #10b981; }
        }
        @keyframes flash-red {
          0% { box-shadow: inset 0 0 0 0px #ef4444; }
          50% { box-shadow: inset 0 0 0 12px #ef4444; }
          100% { box-shadow: inset 0 0 0 0px #ef4444; }
        }
      </style>
      <div class="relative w-full max-w-sm max-h-[calc(100vh-2rem)] overflow-y-auto flex flex-col text-white">
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
          <div>
            <h4 class="font-bold text-sm flex items-center gap-2">
              ${CAMERA_ICON_MD}
              <span>กล้องสแกนเช็คชื่อ</span>
            </h4>
            <p class="text-xs text-slate-400">เล็งกล้องไปที่ QR Code ของนักเรียน</p>
          </div>
          <button id="btn-close-att-scanner" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold">✕</button>
        </div>

        <!-- Camera Area -->
        <div id="att-scanner-container" class="relative overflow-hidden bg-slate-900 rounded-3xl w-full aspect-square border border-slate-800 shadow-inner flex flex-col items-center justify-center p-0 mb-4">
          <div id="att-camera-reader" class="w-full h-full rounded-2xl overflow-hidden"></div>
          
          <!-- Viewfinder -->
          <div class="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)]">
              <!-- Corners -->
              <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400 rounded-tl"></div>
              <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400 rounded-tr"></div>
              <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400 rounded-bl"></div>
              <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400 rounded-br"></div>
              <!-- Laser sweeper -->
              <div class="w-full h-0.5 bg-emerald-400 animate-laser-move"></div>
            </div>
          </div>
        </div>

        <!-- Feedback Panel (Dynamic) -->
        <div id="scan-feedback-panel" class="mb-4 min-h-[100px]">
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
            ยังไม่มีข้อมูลสแกนในคาบเรียนนี้
          </div>
        </div>

        <!-- Scanned Students List -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
          <div class="flex items-center justify-between gap-2 mb-2">
            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">นักเรียนที่สแกนแล้ว (มาเรียน)</p>
            <span id="scan-history-count" class="text-[10px] font-bold text-emerald-400">0 คน</span>
          </div>
          <div id="scan-history-list" class="space-y-1.5 text-xs max-h-56 overflow-y-auto pr-1">
            <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
          </div>
        </div>
      </div>`
    document.body.appendChild(overlay)

    let html5Qrcode = null
    const recentScannedList = []
    const previousScanState = new Map()

    const getStudentRowState = (studentId) => {
      const row = modal.querySelector(`[data-modal-sid="${studentId}"]`)
      const touchedEl = row?.querySelector('[data-att-touched]')
      const activeBtn = Array.from(row?.querySelectorAll('.att-modal-status') ?? [])
        .find(b => !b.className.includes('bg-white'))
      return {
        touched: touchedEl?.dataset.attTouched === '1',
        status: activeBtn?.dataset.status ?? null,
      }
    }

    const applyStudentRowState = (studentId, state) => {
      const row = modal.querySelector(`[data-modal-sid="${studentId}"]`)
      const touchedEl = row?.querySelector('[data-att-touched]')
      if (touchedEl) touchedEl.dataset.attTouched = state?.touched ? '1' : '0'
      row?.querySelectorAll('.att-modal-status').forEach(btn => {
        const cfg = STATUS_LIST.find(s => s.key === btn.dataset.status)
        btn.className = `att-modal-status text-xs px-1.5 py-1 rounded-lg border transition font-medium
          ${state?.status && btn.dataset.status === state.status
            ? cfg?.color ?? btn.dataset.color
            : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`
      })
    }

    const renderScannedAttendanceList = () => {
      const historyList = overlay.querySelector('#scan-history-list')
      const countEl = overlay.querySelector('#scan-history-count')
      if (countEl) countEl.textContent = `${recentScannedList.length} คน`
      if (!historyList) return
      if (!recentScannedList.length) {
        historyList.innerHTML = `<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>`
        return
      }
      historyList.innerHTML = recentScannedList.map((s, idx) => `
        <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
          <span class="w-6 text-center text-slate-500 font-mono flex-shrink-0">${recentScannedList.length - idx}</span>
          <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${_htmlEsc(s.full_name)}</span>
          <span class="text-emerald-400 font-bold text-[10px] flex-shrink-0">มา</span>
          <button type="button"
            class="btn-att-cancel-scan-row px-2 py-1 rounded-lg bg-red-950/50 text-red-300 border border-red-800/70 hover:bg-red-500 hover:text-white transition text-[10px] font-bold flex-shrink-0"
            data-sid="${s.id}">
            ยกเลิก
          </button>
        </div>
      `).join('')
    }

    overlay.querySelector('#scan-history-list')?.addEventListener('click', e => {
      const btn = e.target.closest('.btn-att-cancel-scan-row')
      if (!btn) return
      const sid = Number(btn.dataset.sid)
      const idx = recentScannedList.findIndex(s => Number(s.id) === sid)
      if (idx === -1) return
      const [student] = recentScannedList.splice(idx, 1)
      applyStudentRowState(sid, previousScanState.get(sid))
      previousScanState.delete(sid)
      renderScannedAttendanceList()

      const feedbackPanel = overlay.querySelector('#scan-feedback-panel')
      if (feedbackPanel) {
        feedbackPanel.innerHTML = `
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400 animate-fade">
            ยกเลิกการสแกนของ <span class="font-bold text-slate-200">${_htmlEsc(student.full_name)}</span> แล้ว
          </div>`
      }
      showToast(`ยกเลิกการสแกนของ ${student.full_name} แล้ว`, 'success')
    })

    const stopScanner = async () => {
      if (html5Qrcode) {
        await html5Qrcode.stop().catch(() => {})
      }

      // เมื่อสแกนครบแล้ว ให้ตั้ง "ขาด" เฉพาะคนที่ยังไม่มีข้อมูล/ยังไม่ถูกแตะในฟอร์มนี้
      // ข้อมูลเดิมหรือคนที่สแกนไปแล้วจะไม่ถูกทับเมื่อเปิดกล้องซ้ำ
      students.forEach(s => {
        const row = modal.querySelector(`[data-modal-sid="${s.id}"]`)
        const touchedEl = row?.querySelector('[data-att-touched]')
        const wasTouched = touchedEl?.dataset.attTouched === '1'
        if (!wasTouched) {
          const absentBtn = modal.querySelector(`.att-modal-status[data-modal-sid="${s.id}"][data-status="absent"]`)
          if (absentBtn) {
            const isAlreadyAbsent = absentBtn.classList.contains('bg-red-500')
            if (!isAlreadyAbsent) {
              absentBtn.click()
            }
          }
        }
      })

      overlay.remove()
    }

    overlay.querySelector('#btn-close-att-scanner').addEventListener('click', stopScanner)

    try {
      const Html5Qrcode = await _loadHtml5Qrcode()
      html5Qrcode = new Html5Qrcode("att-camera-reader")

      let lastCode = null
      let lastTime = 0
      let incremented = false

      const processScan = (decodedText) => {
        const container = overlay.querySelector('#att-scanner-container')
        const feedbackPanel = overlay.querySelector('#scan-feedback-panel')

        const triggerFlash = (success) => {
          const cls = success ? 'scan-flash-success' : 'scan-flash-error'
          container.classList.add(cls)
          setTimeout(() => container.classList.remove(cls), 600)
        }

        let targetStudent = null

        try {
          let studentCode = decodedText
          if (decodedText.startsWith('SQ:')) {
            const [_, code, timestampStr] = decodedText.split(':')
            const qrTime = parseInt(timestampStr, 10)
            const nowTime = Math.floor(Date.now() / 1000)
            const diff = nowTime - qrTime
            if (diff > 60 || diff < -60) {
              throw new Error('QR Code หมดอายุแล้ว')
            }
            studentCode = code
          }

          targetStudent = students.find(s => s.student_code === studentCode)
          if (!targetStudent) {
            throw new Error(`ไม่พบรายชื่อในคลาสเรียนนี้`)
          }

          // ป้องกันการสแกนซ้ำในรอบนี้
          const isAlreadyScanned = recentScannedList.some(x => x.id === targetStudent.id)
          if (isAlreadyScanned) {
            throw new Error('เช็คชื่อซ้ำ! นักเรียนคนนี้ได้รับการสแกนไปแล้ว')
          }

          if (!previousScanState.has(targetStudent.id)) {
            previousScanState.set(targetStudent.id, getStudentRowState(targetStudent.id))
          }

          // Programmatically click "มา" status button in the background modal
          const presentBtn = modal.querySelector(`.att-modal-status[data-modal-sid="${targetStudent.id}"][data-status="present"]`)
          if (presentBtn) {
            const isAlreadyPresent = presentBtn.classList.contains('bg-emerald-500')
            if (!isAlreadyPresent) {
              presentBtn.click()
            }
          }

          _playScanBeep('success')
          triggerFlash(true)

          // Increment weekly scans count once upon first successful scan (if not supported)
          if (!isSupported && !incremented) {
            _incrementWeeklyScanQuota(teacher?.id, quota.weekMonday)
            incremented = true
          }

          // Add to recent list (keep all in memory for duplicate checks)
          recentScannedList.unshift(targetStudent)

          // Show success card (same structure as prayer scan)
          const photoHTML = targetStudent.image_url
            ? `<img src="${targetStudent.image_url}" class="w-12 h-16 object-cover object-top rounded-xl border border-slate-700" />`
            : `<div class="w-12 h-16 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold text-lg flex items-center justify-center">${targetStudent.full_name.charAt(0)}</div>`

          feedbackPanel.innerHTML = `
            <div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              ${photoHTML}
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">✓ สแกนสำเร็จ</span>
                <h4 class="font-extrabold text-slate-200 text-sm mt-1 truncate">${targetStudent.full_name}</h4>
                <p class="text-xs text-slate-400 truncate">รหัส ${targetStudent.student_code}</p>
              </div>
            </div>`

          renderScannedAttendanceList()

        } catch (e) {
          _playScanBeep('error')
          triggerFlash(false)

          // Show error card
          const name = targetStudent ? targetStudent.full_name : 'ไม่พบข้อมูล'
          const detail = targetStudent ? `รหัส ${targetStudent.student_code}` : `ข้อมูลดิบ: ${decodedText}`
          feedbackPanel.innerHTML = `
            <div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-fade">
              <div class="w-12 h-16 rounded-xl bg-red-950/80 border border-red-900 text-red-400 font-bold text-xl flex items-center justify-center">❌</div>
              <div class="flex-1 min-w-0 text-left">
                <span class="inline-block px-2 py-0.5 rounded-full bg-red-500/20 text-red-450 text-[10px] font-bold">เกิดข้อผิดพลาด</span>
                <h4 class="font-bold text-slate-200 text-sm mt-1 truncate">${name}</h4>
                <p class="text-xs text-slate-400 truncate">${detail}</p>
                <p class="text-xs font-bold text-red-500 mt-1">${e.message}</p>
              </div>
            </div>`
        }
      }

      await html5Qrcode.start(
        { facingMode: "environment" },
        { fps: 25, aspectRatio: 1.0 },
        (decodedText) => {
          if (decodedText === lastCode && Date.now() - lastTime < 2000) {
            return
          }
          lastCode = decodedText
          lastTime = Date.now()
          processScan(decodedText)
        },
        () => {}
      )

    } catch (err) {
      console.error('Attendance QR scanner initialization failed:', err)
      showToast('ไม่สามารถเปิดกล้องได้: ' + err.message, 'error')
      overlay.remove()
    }
  })

  // ─── Close ───────────────────────────────────────────────────────
  modal.querySelector('#att-modal-close').addEventListener('click', () => modal.remove())
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove() })

  if (options.autoOpenScanner) {
    setTimeout(() => modal.querySelector('#btn-att-scan-qr')?.click(), 150)
  }

  // ─── Save ────────────────────────────────────────────────────────
  modal.querySelector('#att-modal-save').addEventListener('click', async () => {
    if (holidaySet.has(date)) {
      showToast('วันหยุดโรงเรียน — ไม่สามารถบันทึกได้', 'warning')
      modal.remove()
      return
    }
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
            class_id: saveClassId ?? classData.id, student_id: student.id,
            session_number: sessionRemap(sn), check_date: date, status
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
  setTitle('เช็คชื่อ', 'attendance')
  const preClassId = window._preSelectClass ?? null
  window._preSelectClass = null  // clear after use
  const classes = await getMyClasses(teacher?.id ?? null).catch(()=>[])
  const today   = new Date().toISOString().slice(0,10)
  setContent(`<div class="animate-fade">
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-xs text-gray-400 mt-0.5">เลือกวิชาและวันที่เพื่อเช็คชื่อ</p>
      </div>
    </div>
    ${!classes.length ? `
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-16 text-center text-gray-400">
      <p class="text-4xl mb-3">✅</p>
      <p class="font-medium">ยังไม่มีห้องเรียน</p>
      <p class="text-xs mt-1">ลงทะเบียนห้องเรียนก่อน</p>
    </div>` : `
    <!-- Selector -->
    <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-5 mb-5">
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
      wrap.innerHTML = `<div class="bg-white rounded-2xl border border-gray-200 shadow-md p-10 text-center text-gray-400">
        <p class="text-3xl mb-2">👦</p><p>ไม่พบนักเรียน</p></div>`; return
    }
    const present = Object.values(_statusMap).filter(s=>s==='present').length
    const absent  = Object.values(_statusMap).filter(s=>s==='absent').length
    wrap.innerHTML = `
      <!-- Summary bar -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4 mb-4 flex items-center justify-between">
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
      <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
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
                    ${s.image_url ? `<img src="${s.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200" />` : ''}
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
        const cls = classes.find(c => String(c.id) === classId)
        const clsCredit = cls?.master_subjects?.credit ?? 1
        const clsIsACDMVOC = cls?.master_subjects?.subject_group === 'ACDMVOC'
        const clsDOW = clsIsACDMVOC ? await getClassSessionDOWs(cls.id).catch(() => []) : []
        const allSess = cls ? _generateSessions(cls, clsCredit, clsDOW.length ? clsDOW : null, clsIsACDMVOC) : []
        const dateSess = allSess.filter(s => s.ds === date)
        const sessionNum = (dateSess[period - 1] ?? dateSess[0] ?? null)?.n ?? null
        const records = _students.map(s => ({
          class_id: Number(classId),
          student_id: s.id,
          check_date: date,
          period_no: period,
          session_number: sessionNum,
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

      // Load existing attendance for this date (filter by session_number ที่ตรงกับคาบที่เลือก)
      const allExisting = await getAttendanceByDate(Number(classId), date)
      const loadCls = classes.find(c => String(c.id) === classId)
      const loadCredit = loadCls?.master_subjects?.credit ?? 1
      const loadIsACDMVOC = loadCls?.master_subjects?.subject_group === 'ACDMVOC'
      const loadDOW = loadIsACDMVOC ? await getClassSessionDOWs(loadCls.id).catch(() => []) : []
      const loadAllSess = loadCls ? _generateSessions(loadCls, loadCredit, loadDOW.length ? loadDOW : null, loadIsACDMVOC) : []
      const loadPeriod = parseInt(document.getElementById('att-period').value) || 1
      const loadDateSess = loadAllSess.filter(s => s.ds === date)
      const loadSessNum = (loadDateSess[loadPeriod - 1] ?? loadDateSess[0] ?? null)?.n ?? null
      const existing = loadSessNum !== null
        ? allExisting.filter(a => a.session_number === loadSessNum)
        : allExisting
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
        <button id="ls-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-indigo-300 hover:text-indigo-600">
          ซ่อนคะแนนรวม
        </button>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${sem} / ${year}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 ใช้ <b>Tab / →</b> เลื่อนขวา · <b>Enter / ↓</b> เลื่อนลง · <b>↑ ↓ ← →</b> เลื่อนทิศทาง · บันทึกอัตโนมัติเมื่อออกจากช่อง
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
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
              <th id="ls-total-th" class="${thBase} bg-indigo-50 text-indigo-700" style="min-width:70px">
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
                      ? `<img src="${s.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`
                      : `<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-emerald-200 to-teal-200
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

    // ── Toggle total column ──────────────────────────────────────────────────
    let _lsTotalVisible = true
    document.getElementById('ls-toggle-total-btn')?.addEventListener('click', function() {
      _lsTotalVisible = !_lsTotalVisible
      const display = _lsTotalVisible ? '' : 'none'
      const th = document.getElementById('ls-total-th')
      if (th) th.style.display = display
      document.querySelectorAll('.ls-total').forEach(el => el.style.display = display)
      this.textContent = _lsTotalVisible ? 'ซ่อนคะแนนรวม' : 'แสดงคะแนนรวม'
      this.classList.toggle('bg-amber-50', !_lsTotalVisible)
      this.classList.toggle('border-amber-300', !_lsTotalVisible)
      this.classList.toggle('text-amber-700', !_lsTotalVisible)
    })

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
      } catch (err) {
        console.error('[life skill save]', err)
        _flashCell(inp, false)
        showToast(`บันทึกทักษะชีวิตไม่สำเร็จ: ${err.message ?? ''}`, 'error')
      }
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
  applyReadingGradesFromConfig(cfg)

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
        <button id="rs-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-violet-300 hover:text-violet-600">
          ซ่อนคะแนนรวม
        </button>
        <span class="text-xs text-gray-400 ml-auto">ภาค ${sem} / ${year}</span>
      </div>

      <div class="text-xs text-gray-400 mb-2">
        💡 <b>Tab / →</b> ขวา · <b>Enter / ↓</b> ลง · <b>↑ ↓ ← →</b> เลื่อน · บันทึกอัตโนมัติ
      </div>

      <div class="overflow-auto rounded-2xl border border-gray-200 shadow-md bg-white">
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
              <th id="rs-total-th" class="${thBase} bg-violet-50 text-violet-700" style="min-width:70px">
                รวม<br/><span class="text-[10px] font-normal">/${totalMax}</span>
              </th>
              <th id="rs-score100-th" class="${thBase} bg-indigo-50 text-indigo-700" style="min-width:60px">
                /100
              </th>
              <th id="rs-label-th" class="${thBase} bg-purple-50 text-purple-700" style="min-width:90px">
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
                      ? `<img src="${s.image_url}" class="w-6 h-8 rounded-md object-cover flex-shrink-0 border border-gray-200"/>`
                      : `<div class="w-6 h-8 rounded-md border border-gray-200 bg-gradient-to-tr from-indigo-200 to-violet-200
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

    // ── Toggle total columns ─────────────────────────────────────────────────
    let _rsTotalVisible = true
    document.getElementById('rs-toggle-total-btn')?.addEventListener('click', function() {
      _rsTotalVisible = !_rsTotalVisible
      const display = _rsTotalVisible ? '' : 'none'
      ;['rs-total-th','rs-score100-th','rs-label-th'].forEach(id => {
        const el = document.getElementById(id)
        if (el) el.style.display = display
      })
      document.querySelectorAll('.rs-total,.rs-score100,.rs-label').forEach(el => el.style.display = display)
      this.textContent = _rsTotalVisible ? 'ซ่อนคะแนนรวม' : 'แสดงคะแนนรวม'
      this.classList.toggle('bg-amber-50', !_rsTotalVisible)
      this.classList.toggle('border-amber-300', !_rsTotalVisible)
      this.classList.toggle('text-amber-700', !_rsTotalVisible)
    })

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
const _readingEvalBadge = (s) => {
  const g = _readingGrade(s)
  return `<span class="px-1.5 py-0.5 rounded-full text-[11px] font-semibold ${g.cls}">${g.label}</span>`
}

// ─── Prayer Score Constants ───────────────────────────────────────────────────

const PRAYER_ST = {
  pray:     { label: '/',  color: 'text-emerald-600 font-bold', bg: 'bg-emerald-50', score: 2,  fullLabel: 'ละหมาด' },
  absent:   { label: 'X',  color: 'text-red-600 font-bold',     bg: 'bg-red-50',     score: 0,  fullLabel: 'ขาดละหมาด' },
  usor:     { label: 'U',  color: 'text-purple-600 font-bold',  bg: 'bg-purple-50',  score: 2,  fullLabel: 'อูโซร/ประจำเดือน' },
  followed: { label: '-',  color: 'text-blue-500 font-bold',    bg: 'bg-blue-50',    score: 1,  fullLabel: 'ติดตามแล้ว' },
  avoid:    { label: 'N',  color: 'text-orange-500 font-bold',  bg: 'bg-orange-50',  score: -1, fullLabel: 'หลีกเลี่ยง' },
}

const PRAYER_CYCLE = [null, 'pray', 'absent', 'usor', 'followed', 'avoid']

const DAY_TH = ['อา','จ','อ','พ','พฤ','ศ','ส']

const _prayerLocationLabel = (loc) => ({
  musolla_male: 'มูซอลลาชาย',
  masjid_kuwait: 'มัสยิดคูเวต',
  musolla_female_1: 'มูซอลลาหญิง 1',
  musolla_female_2: 'มูซอลลาหญิง 2',
})[loc] || 'ไม่ระบุจุด'

const _prayerLocationBadgeClass = (loc) => ({
  musolla_male: 'bg-blue-50 text-blue-700 border-blue-100',
  masjid_kuwait: 'bg-purple-50 text-purple-700 border-purple-100',
  musolla_female_1: 'bg-pink-50 text-pink-700 border-pink-100',
  musolla_female_2: 'bg-amber-50 text-amber-700 border-amber-100',
})[loc] || 'bg-gray-50 text-gray-500 border-gray-100'

function _localDateValue(d = new Date()) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function _timeLabel(value) {
  if (!value) return '—'
  try {
    return new Date(value).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  } catch {
    return '—'
  }
}

export async function renderPrayerRoomMonitor(teacher, homeroomRooms = [], preferredRoom = null) {
  setActiveNav('prayer-score')
  setTitle('ติดตามผลสแกนละหมาด')

  if (window._cleanupPrayerRoomMonitor) {
    try { window._cleanupPrayerRoomMonitor() } catch (e) {}
  }

  const religionRooms = homeroomRooms.filter(r => r.category === 'ศาสนา')
  if (!teacher?.id || !religionRooms.length) {
    setContent(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
      <p class="text-5xl mb-4">🕌</p>
      <p class="font-medium text-gray-700">หน้านี้เปิดเฉพาะครูที่ปรึกษาชั้นศาสนา</p>
      <p class="text-xs mt-1">ไม่พบห้องที่ปรึกษาศาสนาที่ผูกกับบัญชีครูของคุณ</p>
    </div>`)
    return
  }

  const rooms = religionRooms.map(r => r.main_room).filter(Boolean)
  let currentRoom = rooms.includes(preferredRoom) ? preferredRoom : rooms[0]
  let monitorTimer = null
  let isLoading = false
  let lastSeenRecordId = 0

  window._cleanupPrayerRoomMonitor = () => {
    if (monitorTimer) clearInterval(monitorTimer)
    monitorTimer = null
  }

  const renderShell = () => {
    setContent(`
      <div class="animate-fade space-y-4">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 flex flex-col md:flex-row md:items-center gap-3">
          <button id="prm-back" class="self-start px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50">
            ← กลับ
          </button>
          <div class="flex-1 min-w-0">
            <h2 class="font-extrabold text-gray-800 text-base">🕌 Monitor การสแกนละหมาด</h2>
            <p class="text-xs text-gray-400 mt-0.5">เฉพาะนักเรียนชั้นศาสนาในความรับผิดชอบของคุณ</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            ${rooms.length > 1 ? `
            <select id="prm-room-select" class="text-xs border border-gray-200 rounded-xl px-3 py-2 bg-white font-bold text-emerald-800">
              ${rooms.map(r => `<option value="${_htmlEsc(r)}" ${r === currentRoom ? 'selected' : ''}>${_htmlEsc(r)}</option>`).join('')}
            </select>` : `<span class="px-3 py-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 text-xs font-extrabold">${_htmlEsc(currentRoom)}</span>`}
            <button id="prm-refresh" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 active:scale-95 transition">
              รีเฟรช
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-gray-400 uppercase">นักเรียนทั้งหมด</p>
            <p id="prm-total" class="text-2xl font-extrabold text-gray-800 mt-1">—</p>
          </div>
          <div class="bg-white border border-emerald-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-emerald-500 uppercase">สแกนแล้ว</p>
            <p id="prm-done" class="text-2xl font-extrabold text-emerald-700 mt-1">—</p>
          </div>
          <div class="bg-white border border-purple-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-purple-500 uppercase">อูโซร</p>
            <p id="prm-usor" class="text-2xl font-extrabold text-purple-700 mt-1">—</p>
          </div>
          <div class="bg-white border border-amber-100 rounded-2xl p-4 shadow-sm">
            <p class="text-[10px] font-bold text-amber-500 uppercase">ยังไม่สแกน</p>
            <p id="prm-pending" class="text-2xl font-extrabold text-amber-700 mt-1">—</p>
          </div>
        </div>

        <div class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div class="px-4 py-3 border-b border-gray-50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 class="font-bold text-gray-800 text-sm">รายการนักเรียนห้อง ${_htmlEsc(currentRoom)}</h3>
              <p id="prm-updated" class="text-[11px] text-gray-400 mt-0.5">กำลังโหลดข้อมูล...</p>
            </div>
            <input id="prm-search" type="text" placeholder="ค้นหาชื่อหรือรหัส"
              class="w-full sm:w-56 text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200" />
          </div>
          <div class="overflow-x-auto">
            <table class="w-full min-w-[720px] text-xs">
              <thead class="bg-gray-50 border-b border-gray-100 text-gray-500">
                <tr>
                  <th class="px-4 py-3 text-center w-12">#</th>
                  <th class="px-4 py-3 text-left">นักเรียน</th>
                  <th class="px-4 py-3 text-center w-28">ห้องสามัญ</th>
                  <th class="px-4 py-3 text-center w-32">สถานะวันนี้</th>
                  <th class="px-4 py-3 text-center w-28">เวลา</th>
                  <th class="px-4 py-3 text-center w-36">จุดสแกน</th>
                  <th class="px-4 py-3 text-left w-44">ผู้สแกน</th>
                </tr>
              </thead>
              <tbody id="prm-table-body" class="divide-y divide-gray-50">
                <tr><td colspan="7" class="py-12 text-center text-gray-400">กำลังโหลดข้อมูล...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `)

    document.getElementById('prm-back')?.addEventListener('click', () => window._navTo?.('overview'))
    document.getElementById('prm-refresh')?.addEventListener('click', () => loadRoom(currentRoom, { manual: true }))
    document.getElementById('prm-room-select')?.addEventListener('change', e => {
      currentRoom = e.target.value
      renderShell()
      loadRoom(currentRoom, { manual: true })
    })
    document.getElementById('prm-search')?.addEventListener('input', () => renderRows(window._prmStudents || [], window._prmRecords || []))
  }

  const fetchRoomData = async (room) => {
    const today = _localDateValue()
    const { data: students, error: studentError } = await supabase
      .from('students')
      .select('id, student_code, full_name, main_room, religion_room, image_url')
      .eq('religion_room', room)
      .eq('is_active', true)
      .order('student_code', { ascending: true })
    if (studentError) throw studentError

    const ids = (students || []).map(s => s.id)
    if (!ids.length) return { students: [], records: [] }

    const { data: records, error: recordError } = await supabase
      .from('prayer_records')
      .select('id, student_id, status, check_date, location, input_method, scanned_by, scanner_name, same_room_flag, created_at')
      .eq('check_date', today)
      .in('student_id', ids)
      .not('location', 'is', null)
      .order('created_at', { ascending: false })
      .limit(300)
    if (recordError) throw recordError

    return { students: students || [], records: records || [] }
  }

  const latestRecordMap = (records) => {
    const map = new Map()
    records.forEach(r => {
      if (!map.has(r.student_id)) map.set(r.student_id, r)
    })
    return map
  }

  const renderRows = (students, records) => {
    const body = document.getElementById('prm-table-body')
    if (!body) return
    const q = (document.getElementById('prm-search')?.value || '').trim().toLowerCase()
    const recMap = latestRecordMap(records)
    const filtered = students.filter(s =>
      !q || [s.full_name, s.student_code, s.main_room, s.religion_room].some(v => String(v || '').toLowerCase().includes(q))
    )

    if (!filtered.length) {
      body.innerHTML = `<tr><td colspan="7" class="py-12 text-center text-gray-400">ไม่พบข้อมูลนักเรียน</td></tr>`
      return
    }

    body.innerHTML = filtered.map((s, idx) => {
      const rec = recMap.get(s.id)
      const st = rec ? (PRAYER_ST[rec.status] || PRAYER_ST.pray) : null
      const statusBadge = rec
        ? `<span class="inline-flex px-2.5 py-1 rounded-full ${st.bg} ${st.color}">${st.fullLabel}</span>`
        : `<span class="inline-flex px-2.5 py-1 rounded-full bg-gray-50 text-gray-400 font-bold border border-gray-100">ยังไม่สแกน</span>`
      const methodBadge = rec?.input_method === 'manual'
        ? `<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200 text-[10px] font-bold">กรอกรหัส</span>`
        : ''
      const sameRoomBadge = rec?.same_room_flag
        ? `<span class="inline-flex mt-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">ห้องเดียวกัน</span>`
        : ''
      return `
        <tr class="hover:bg-gray-50">
          <td class="px-4 py-3 text-center text-gray-400 font-mono">${idx + 1}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-3">
              ${s.image_url
                ? `<img src="${_htmlEsc(s.image_url)}" class="w-7 h-9 rounded-lg object-cover object-top border border-gray-200 shadow-sm" />`
                : `<div class="w-7 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-gray-200">${_htmlEsc((s.full_name || '?').charAt(0))}</div>`}
              <div class="min-w-0">
                <p class="font-bold text-gray-800 truncate">${_htmlEsc(s.full_name || '—')}</p>
                <p class="text-[11px] text-gray-400 font-mono">รหัส ${_htmlEsc(s.student_code || '—')}</p>
              </div>
            </div>
          </td>
          <td class="px-4 py-3 text-center text-gray-500 font-bold">${_htmlEsc(s.main_room || '—')}</td>
          <td class="px-4 py-3 text-center">${statusBadge}<div class="flex flex-wrap justify-center gap-1">${methodBadge}${sameRoomBadge}</div></td>
          <td class="px-4 py-3 text-center font-mono text-gray-600">${_timeLabel(rec?.created_at)}</td>
          <td class="px-4 py-3 text-center">
            ${rec?.location ? `<span class="px-2.5 py-1 rounded-full border text-[11px] font-bold ${_prayerLocationBadgeClass(rec.location)}">${_htmlEsc(_prayerLocationLabel(rec.location))}</span>` : `<span class="text-gray-300">—</span>`}
          </td>
          <td class="px-4 py-3 text-gray-500">${_htmlEsc(rec?.scanner_name || rec?.scanned_by || '—')}</td>
        </tr>
      `
    }).join('')
  }

  const renderStats = (students, records) => {
    const recMap = latestRecordMap(records)
    const done = recMap.size
    const usor = [...recMap.values()].filter(r => r.status === 'usor').length
    const pending = Math.max(0, students.length - done)
    document.getElementById('prm-total')?.replaceChildren(document.createTextNode(String(students.length)))
    document.getElementById('prm-done')?.replaceChildren(document.createTextNode(String(done)))
    document.getElementById('prm-usor')?.replaceChildren(document.createTextNode(String(usor)))
    document.getElementById('prm-pending')?.replaceChildren(document.createTextNode(String(pending)))
    const updated = document.getElementById('prm-updated')
    if (updated) updated.textContent = `อัปเดตล่าสุด ${new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' })} น.`
  }

  async function loadRoom(room, { manual = false } = {}) {
    if (isLoading) return
    isLoading = true
    try {
      const { students, records } = await fetchRoomData(room)
      window._prmStudents = students
      window._prmRecords = records
      const newest = records[0]?.id || 0
      if (!manual && lastSeenRecordId && newest > lastSeenRecordId) {
        showToast('มีรายการสแกนละหมาดใหม่', 'info')
      }
      lastSeenRecordId = Math.max(lastSeenRecordId, newest)
      renderStats(students, records)
      renderRows(students, records)
    } catch (err) {
      console.error('Prayer room monitor failed:', err)
      showToast('โหลดข้อมูล Monitor ไม่สำเร็จ: ' + (err.message || ''), 'error')
      const body = document.getElementById('prm-table-body')
      if (body) body.innerHTML = `<tr><td colspan="7" class="py-12 text-center text-red-400">โหลดข้อมูลไม่สำเร็จ</td></tr>`
    } finally {
      isLoading = false
    }
  }

  renderShell()
  await loadRoom(currentRoom, { manual: true })
  monitorTimer = setInterval(() => {
    if (document.visibilityState === 'visible') loadRoom(currentRoom)
  }, 5000)
}

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

  const cfg = await getSystemConfig().catch(() => ({}))
  const teacherCodes = (cfg.prayerScannerTeachers || '')
    .split(/[\s,]+/)
    .map(c => c.trim())
    .filter(Boolean)
  
  let isAllowedScanner = false
  if (teacher) {
    let profile = null
    try {
      const { data } = await supabase.from('profiles').select('role').eq('id', teacher.profile_id).maybeSingle()
      profile = data
    } catch (e) {}
    isAllowedScanner = teacherCodes.includes(teacher.teacher_code) ||
                       teacher.staff_type === 'แอดมิน' ||
                       teacher.position === 'admin' ||
                       profile?.role === 'admin'
  }

  if (!homeroomRooms.length) {
    if (isAllowedScanner) {
      setContent(`<div class="max-w-xl mx-auto text-center py-20 text-gray-400">
        <p class="text-5xl mb-4">🕌</p>
        <p class="font-medium text-gray-700">ไม่มีห้องที่ปรึกษา (ศาสนา) ที่รับผิดชอบ</p>
        <p class="text-sm text-gray-400 mt-2 mb-6">แต่คุณได้รับสิทธิ์ในการสแกนบันทึกเวลาละหมาดของนักเรียน</p>
        <button id="btn-open-scanner-direct" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold rounded-2xl shadow-lg transition flex items-center gap-2 mx-auto">
          ${CAMERA_ICON_MD}
          <span>เปิดกล้องสแกน</span>
        </button>
      </div>`)
      document.getElementById('btn-open-scanner-direct')?.addEventListener('click', async () => {
        const { renderStudentPrayerScanner } = await import('./student-views.js')
        renderStudentPrayerScanner(teacher)
      })
      return
    }

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
        <button onclick="if(window._backToClasses)window._backToClasses();else window._navTo('my-classes')" class="text-sm text-emerald-600 hover:text-emerald-800 font-medium">← กลับ</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm">🕌 คะแนนละหมาด</h2>
          <p class="text-xs text-gray-400">${room} · ${weeks.length} สัปดาห์ · ${totalDays} วัน</p>
        </div>
        ${rooms.length > 1 ? `<select id="prayer-room-sel" class="text-xs border border-gray-200 rounded-xl px-2 py-1.5 bg-white">
          ${rooms.map(r=>`<option value="${r}" ${r===room?'selected':''}>${r}</option>`).join('')}</select>` : ''}
        <div class="flex gap-1 text-xs hidden sm:flex">
          ${Object.entries(PRAYER_ST).map(([,v])=>`<span class="px-1.5 py-1 ${v.bg} ${v.color} rounded">${v.label}=${v.fullLabel.slice(0,3)}</span>`).join('')}
        </div>
        <button id="prayer-toggle-total-btn"
          class="text-xs px-3 py-1.5 rounded-xl border font-medium transition bg-white border-gray-200 text-gray-500 hover:border-emerald-300 hover:text-emerald-600">
          ซ่อนคะแนนรวม
        </button>
        <button id="btn-prayer-stats" class="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg font-medium hover:bg-indigo-700 transition">📊 สถิติ</button>
        <button id="btn-prayer-room-monitor" class="px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs rounded-lg font-bold hover:bg-amber-100 transition">
          👁️ Monitor
        </button>
        ${isAllowedScanner ? `
        <button id="btn-prayer-scanner" class="px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-xl font-bold hover:bg-emerald-700 active:scale-[0.98] transition flex items-center gap-1.5 shadow-sm">
          ${CAMERA_ICON_SM}
          <span>สแกนละหมาด</span>
        </button>
        ` : ''}
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
              <th class="${thBase} bg-indigo-50 text-indigo-700 font-semibold prayer-score-th" style="min-width:52px">คะแนน<br/>/10</th>
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
              <th class="${thBase} bg-indigo-50 prayer-score-th" style="min-width:52px"></th>
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
                <td class="border border-indigo-100 text-center bg-indigo-50 font-bold ${scCls(score)} prayer-score-cell"
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
    document.getElementById('btn-prayer-room-monitor')?.addEventListener('click', () => {
      window._openReligionPrayerMonitor?.(room)
    })
    
    if (isAllowedScanner) {
      document.getElementById('btn-prayer-scanner')?.addEventListener('click', async () => {
        const { renderStudentPrayerScanner } = await import('./student-views.js')
        renderStudentPrayerScanner(teacher)
      })
    }

    // ── Toggle score column ──────────────────────────────────────────────────
    let _prayerScoreVisible = true
    document.getElementById('prayer-toggle-total-btn')?.addEventListener('click', function() {
      _prayerScoreVisible = !_prayerScoreVisible
      const display = _prayerScoreVisible ? '' : 'none'
      document.querySelectorAll('.prayer-score-th,.prayer-score-cell').forEach(el => el.style.display = display)
      this.textContent = _prayerScoreVisible ? 'ซ่อนคะแนนรวม' : 'แสดงคะแนนรวม'
      this.classList.toggle('bg-amber-50', !_prayerScoreVisible)
      this.classList.toggle('border-amber-300', !_prayerScoreVisible)
      this.classList.toggle('text-amber-700', !_prayerScoreVisible)
    })

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
        savePrayerCell(teacher.id, sid, room, ds, status, dayObj?.weekN ?? null, teacher.full_name || 'คุณครู')
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
  modal.className = 'fixed inset-0 z-[80] flex flex-col bg-white'
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

  // ── ตัวนับ error สำหรับสรุปตอนปิด ──
  let _batchSaveTotal = 0
  let _batchFailTotal = 0

  // Helper: อัปเดต UI + grid + save realtime (rollback ถ้า fail)
  const _saveCell = async (sid, ds, st) => {
    // เก็บค่าเดิมไว้สำหรับ rollback
    const prevStatus = localMap[sid]?.[ds] ?? null
    const prevPrayStatus = prayMap[sid]?.[ds] ?? null

    // Optimistic update
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
      await savePrayerCell(teacher.id, sid, room, ds, st, week.n, teacher.full_name || 'คุณครู')
      _glow(modalBtn, true)
      _glow(gridCell, true)
    } catch (err) {
      console.error('prayer save:', err)
      // ── Rollback optimistic update ──
      localMap[sid][ds] = prevStatus
      if (!prayMap[sid]) prayMap[sid] = {}
      if (prevPrayStatus === null) { delete prayMap[sid][ds] } else { prayMap[sid][ds] = prevPrayStatus }
      // Rollback UI
      if (modalBtn) {
        modalBtn.className = `pw-cell w-10 h-8 rounded-lg border text-sm font-bold transition hover:opacity-80 ${_cellClass(prevStatus)}`
        modalBtn.textContent = _cellText(prevStatus)
      }
      if (gridCell) {
        const prevCfg = prevStatus ? PRAYER_ST[prevStatus] : null
        Object.values(PRAYER_ST).forEach(v => gridCell.classList.remove(v.bg))
        if (prevCfg) gridCell.classList.add(prevCfg.bg)
        gridCell.innerHTML = prevCfg ? `<span class="${prevCfg.color} text-xs">${prevCfg.label}</span>` : ''
      }
      updateScore(sid)
      _glow(modalBtn, false)
      _glow(gridCell, false)
      throw err  // rethrow เพื่อให้ _saveBatch นับ failed ได้
    }
  }

  // Batch: แบ่ง chunk ทีละ 10, ป้องกัน connection pool เต็ม
  const _saveBatch = async (pairs) => {
    const CHUNK_SIZE = 10
    let failed = 0
    _batchSaveTotal += pairs.length
    for (let i = 0; i < pairs.length; i += CHUNK_SIZE) {
      const chunk = pairs.slice(i, i + CHUNK_SIZE)
      const results = await Promise.allSettled(chunk.map(([sid,ds,st]) => _saveCell(sid,ds,st)))
      failed += results.filter(r => r.status === 'rejected').length
    }
    _batchFailTotal += failed
    if (failed > 0) showToast(`บันทึกไม่สำเร็จ ${failed}/${pairs.length} รายการ — กรุณาลองใหม่`, 'error')
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
  const _closeModal = () => {
    modal.remove()
    if (_batchSaveTotal > 0 && _batchFailTotal > 0) {
      showToast(`สัปดาห์ที่ ${week.n}: สำเร็จ ${_batchSaveTotal - _batchFailTotal} / ไม่สำเร็จ ${_batchFailTotal} รายการ ⚠️`, 'warning')
    } else if (_batchSaveTotal > 0) {
      showToast(`สัปดาห์ที่ ${week.n} บันทึกเรียบร้อย ✅`, 'success')
    }
  }
  modal.querySelector('#pw-close').addEventListener('click', _closeModal)
  modal.querySelector('#pw-save').addEventListener('click', _closeModal)
  modal.addEventListener('click', e => { if (e.target === modal) _closeModal() })
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
        <div class="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
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
            <div class="bg-white rounded-2xl border border-gray-200 shadow-md p-4">
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
          ? `<img src="${student.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`
          : `<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>`}
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
          ? `<img src="${s.image_url}" class="w-9 h-11 rounded-lg object-cover flex-shrink-0 border border-white/40 shadow-sm"/>`
          : `<div class="w-9 h-11 rounded-lg bg-emerald-600 border border-white/40 shadow-sm flex items-center justify-center text-lg flex-shrink-0">👤</div>`}
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

// ─── Daily Attendance QR Scanner Helpers ─────────────────────────────────────
function _checkWeeklyScanQuota(teacherId, isSupported) {
  const systemLimitVal = window._pp5SystemCfg?.freeAttendanceScanLimit
  let limit = 2
  if (systemLimitVal !== undefined && systemLimitVal !== '') {
    const parsedVal = parseInt(systemLimitVal, 10)
    if (Number.isFinite(parsedVal)) {
      limit = parsedVal
    }
  }

  if (isSupported) return { allowed: true, count: 0, limit }
  
  // Monday of the current week
  const d = new Date()
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1)
  const mondayStr = new Date(d.setDate(diff)).toISOString().slice(0, 10)
  
  const key = `pp5_att_scans_week_${teacherId}`
  let data = { weekMonday: mondayStr, count: 0 }
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed.weekMonday === mondayStr) {
        data = parsed
      }
    }
  } catch (e) {}
  
  return { allowed: data.count < limit, count: data.count, weekMonday: mondayStr, limit }
}

function _incrementWeeklyScanQuota(teacherId, weekMonday) {
  const key = `pp5_att_scans_week_${teacherId}`
  let count = 0
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed.weekMonday === weekMonday) {
        count = parsed.count
      }
    }
  } catch (e) {}
  
  localStorage.setItem(key, JSON.stringify({ weekMonday, count: count + 1 }))
}

function _playScanBeep(type = 'success') {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    if (type === 'success') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(880, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.12)
      osc.start()
      osc.stop(audioCtx.currentTime + 0.12)
    } else {
      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(150, audioCtx.currentTime)
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3)
      osc.start()
      osc.stop(audioCtx.currentTime + 0.3)
    }
  } catch (e) {}
}

async function _loadHtml5Qrcode() {
  if (window.Html5Qrcode) return window.Html5Qrcode
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'
    s.onload = () => resolve(window.Html5Qrcode)
    s.onerror = (err) => reject(new Error('โหลดตัวอ่าน QR Code ไม่สำเร็จ'))
    document.head.appendChild(s)
  })
}
