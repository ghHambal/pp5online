import { getMySubjects, getMyClasses, getDepartments, getTeachers, getMasterSubjects,
         updateMyProfile, getRoomsByGrade, getStudentsByRoom,
         getStudentsByReligionRoom, getReligionRoomsByGrade,
         createClass, updateClass, deleteClass, enrollStudents, getSystemConfig,
         updateSubject, deleteSubject,
         getScoreColumns, createScoreColumn, updateScoreColumn, deleteScoreColumn,
         getScoreColumnConfig, saveAttendance, getAttendanceByDate,
         getClassStudents, getClassRosterStudents, getStudentByCode, addStudentToClass,
         updateClassStudentActive, getClassAttendanceAll, saveAttendanceCell, getSchoolHolidays,
         getPrayerRecords, savePrayerRecords, savePrayerCell,
         getStudentScores, saveStudentScore,
         getSheetColumnOptions, detectAssignmentKind, colTypeToThai,
         getUniqueRooms, getUniqueReligionRooms,
         getMySchedule, upsertScheduleEntry, deleteScheduleEntry,
         deleteScheduleByTeacher, getPeriods, getAllPeriods,
         getTeacherRoomColors, saveTeacherRoomColor,
         getLifeSkillColumns, getLifeSkillScores, upsertLifeSkillScore,
         getReadingScoreColumns, getReadingScores, upsertReadingScore,
         fillLifeSkillScoresForClass, fillPrayerScoresForReligionClass,
         getCourseDocPage2, saveCourseDocPage2, findCurriculumStandards,
         getCourseDocLangSettings, saveCourseDocLangSettings, saveCourseDocLangEditors,
         getTeacherExamRequests, reviewExamRequest, updateExamResult,
         getTeacherPackageAccess,
         getClassScheduleLinks, linkClassToSchedule, unlinkClassFromSchedule,
         getClassrooms, assignClassroom,
         autoEnrollStudentsByRoom } from './api.js'
import { supabase } from './supabase.js'

import { uploadTeacherPhoto } from './storage.js'
import { copySheetTemplate, getCopyTemplateForClass } from './sync.js'

import { showToast } from './ui.js'
import {
  GRADE_OPTS, CREDIT_OPTS, SELECT_CLS, INPUT_CLS,
  setContent, setTitle, setActiveNav,
  _htmlEsc, formatPhone,
  _parseDateOnly, _dateInputValue, _fmtDate, _calcSixPeriodDates,
  _DAYS_TH_SHORT, _DAYS_TH_FULL,
  _nextPeriodMins, _scheduleChips, _countdownInfo, _activeRemainingDisplay,
  _resolveGeminiKey,
} from './teacher-views-utils.js'
import { renderClassForm, renderClassEditForm } from './teacher-class-forms.js'
import { openPP5Doc, openPP5CourseModal } from './pp5-doc.js'
import { renderScoreColumns, evalFormula, assignBonusVars } from './teacher-score-columns.js'
import { SCHEDULE_COLOR_PRESETS, colorMetaForHex, resolveScheduleColor, roomColorKey } from './teacher-schedule-colors.js'
export { renderClassForm, renderClassEditForm } from './teacher-class-forms.js'
export { renderScoreColumns } from './teacher-score-columns.js'

// ─── View: Overview ───────────────────────────────────────────────────────────

let _todayWidgetTimer = null

export async function renderTeacherOverview(teacher, homeroomRooms = []) {
  setActiveNav('overview')
  setTitle('ภาพรวม')
  const { getPendingExamRequestCount } = await import('./api.js')
  const { getMyDonationRequests } = await import('./api.js')
  const { getUnreadNotifications } = await import('./api.js')
  const [subjects, classes, cfg, pendingRequests, packageAccess, donationRequests, svNotifs] = await Promise.all([
    teacher ? getMySubjects(teacher.id).catch(()=>[]) : getMasterSubjects().catch(()=>[]),
    getMyClasses(teacher?.id ?? null).catch(()=>[]),
    getSystemConfig().catch(()=>({})),
    teacher ? getPendingExamRequestCount(teacher.id).catch(()=>0) : Promise.resolve(0),
    teacher ? getTeacherPackageAccess(teacher.id).catch(()=>({ hasSemester: false, paidRoomCount: 0 })) : Promise.resolve({ hasSemester: false, paidRoomCount: 0 }),
    teacher ? getMyDonationRequests(teacher.id).catch(()=>[]) : Promise.resolve([]),
    teacher ? getUnreadNotifications(teacher.id).catch(()=>[]) : Promise.resolve([]),
  ])
  const FREE_LIMIT  = parseInt(cfg.freeClassQuota ?? 2)
  const academicYear = parseInt(cfg.academicYear ?? 2568)
  const semester     = parseInt(cfg.semester ?? 1)

  if (_todayWidgetTimer) { clearInterval(_todayWidgetTimer); _todayWidgetTimer = null }

  const [schedule, links, periods, allClassrooms] = await Promise.all([
    teacher ? getMySchedule(teacher.id, academicYear, semester).catch(() => []) : Promise.resolve([]),
    teacher ? getClassScheduleLinks(teacher.id).catch(() => []) : Promise.resolve([]),
    getPeriods().catch(() => []),
    getClassrooms().catch(() => []),
  ])
  window._classroomMapGlobal = Object.fromEntries(allClassrooms.map(r => [r.id, r]))
  const _classroomMapGlobal = window._classroomMapGlobal

  const _linksBySchedule = {}
  links.forEach(l => {
    if (!_linksBySchedule[l.teacher_schedule_id]) _linksBySchedule[l.teacher_schedule_id] = []
    _linksBySchedule[l.teacher_schedule_id].push(l.class_id)
  })
  const _classMap   = Object.fromEntries(classes.map(c => [c.id, c]))
  const _periodMap  = Object.fromEntries(periods.map(p => [p.period_no, p]))
  const todayDow    = new Date().getDay()
  const todayEntries = schedule
    .filter(s => s.day_of_week === todayDow && (_linksBySchedule[s.id] ?? []).length > 0)
    .map(s => {
      const lastPeriodNo = (s.period_no ?? 1) + (s.span_periods ?? 1) - 1
      return {
        ...s,
        linkedClasses: (_linksBySchedule[s.id] ?? []).map(id => _classMap[id]).filter(Boolean),
        period: _periodMap[s.period_no],
        // end_time จริง = คาบสุดท้ายของ span (รองรับ span_periods > 1)
        actualEndPeriod: _periodMap[lastPeriodNo] ?? _periodMap[s.period_no],
      }
    })
    .sort((a, b) => a.period_no - b.period_no)

  // แยก active entry + เรียง: กำลังสอน → upcoming → เสร็จแล้ว
  const _entryStatus = e => {
    const s = _countdownInfo(e.period?.start_time, e.actualEndPeriod?.end_time)
    if (s.label.includes('กำลังสอน')) return 0
    if (s.label.startsWith('เสร็จ')) return 2
    return 1
  }
  const activeEntry = todayEntries.find(e => _entryStatus(e) === 0) ?? null
  const sortedTodayEntries = [...todayEntries]
    .filter(e => e !== activeEntry)
    .sort((a, b) => _entryStatus(a) - _entryStatus(b) || a.period_no - b.period_no)

  const quota        = teacher?.teachers_quota
  const legacyUnlimited = quota?.is_paid && !quota?.package_type && !packageAccess.hasSemester && !packageAccess.paidRoomCount
  const hasSemester = packageAccess.hasSemester || quota?.package_type === 'semester' || legacyUnlimited
  const paidRoomCount = packageAccess.paidRoomCount
  const classLimit = hasSemester ? Infinity : FREE_LIMIT + paidRoomCount
  const usedSlots  = classes.length
  const freeLeft   = hasSemester ? '∞' : Math.max(0, classLimit - usedSlots)
  const quotaColor = hasSemester ? 'text-emerald-700' : usedSlots >= classLimit ? 'text-red-600' : 'text-amber-600'
  const quotaLabel = hasSemester ? 'ไม่จำกัด ✅' : usedSlots >= classLimit ? 'ครบโควตาแล้ว 🔒' : `เหลืออีก ${freeLeft} ห้อง`
  const packageText = hasSemester
    ? 'เหมาทั้งเทอม — สร้างได้ไม่จำกัด'
    : paidRoomCount > 0
      ? `รายห้อง ${paidRoomCount} ห้อง — ใช้แล้ว ${usedSlots}/${classLimit} ห้อง`
      : `ยังไม่เลือกแพ็กเกจ — ใช้โควตาฟรี ${usedSlots}/${FREE_LIMIT} ห้อง`

  // ─── Donation sticker + tier glow ─────────────────────────────────────────
  const approvedDonation = donationRequests.find(r => r.package_type === 'donation' && r.status === 'approved')
  const _toInt = (v, d) => { const n = parseInt(v, 10); return Number.isFinite(n) && n > 0 ? n : d }
  const _parseTiers = () => {
    const raw = String(cfg.donationStickerTiers ?? '').trim()
    const minA = _toInt(cfg.donationMinAmount, 99)
    const step = _toInt(cfg.donationAmountStep, 50)
    // field 5 = hex color สำหรับขอบเรืองแสง (optional)
    const defs = [
      [49,  '🌱','ครูผู้จุดประกาย',     'คุณครูจุดประกายให้ผมมีแรงเดินต่ออีกก้าว 🤝', '#22C55E'],
      [99,  '☕','ครูผู้ร่วมฝัน',       'คุณครูเดินร่วมทางกับผมในความฝันนี้ 💭',       '#A855F7'],
      [149, '🏅','ครูผู้ร่วมสร้าง',     'คุณครูเป็นส่วนหนึ่งที่ทำให้ระบบนี้เกิดขึ้นได้จริง 🌱','#F59E0B'],
      [199, '🐘','ครูผู้ร่วมขับเคลื่อน','คุณครูช่วยผลักดันให้ระบบนี้เดินหน้าต่อได้ 🌊', '#3B82F6'],
      [249, '👑','ครูผู้ก่อตั้งร่วม',   'คุณครูคือเสาหลักที่ทำให้ระบบนี้ยืนหยัดได้ 🏛️','#D4A017'],
    ]
    const rows = raw
      ? raw.split('\n').filter(Boolean).map(l => {
          const [a,s,t,n,c] = l.split('|').map(x=>x.trim())
          return { amount:_toInt(a,0), sticker:s||'🏅', title:t||`ผู้สนับสนุน ${a} บาท`, note:n||'', color:c||'' }
        }).filter(t => t.amount > 0)
      : defs.map(([a,s,t,n,c]) => ({ amount:a, sticker:s, title:t, note:n, color:c }))
    const sorted = rows.sort((a,b) => a.amount - b.amount)
    // auto-link donationStickerImgN → tier N (override emoji ถ้ามีรูป upload)
    return sorted.map((t, i) => {
      const imgUrl = cfg[`donationStickerImg${i+1}`] ?? ''
      if (imgUrl && /^https?:\/\//.test(imgUrl)) return { ...t, sticker: imgUrl }
      return t
    })
  }

  // hex → inline glow style
  const _tierGlowStyle = (hex) => {
    if (!hex) return ''
    // hex → r,g,b
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
    return `border:2px solid ${hex};box-shadow:0 0 0 4px rgba(${r},${g},${b},0.25),0 4px 20px rgba(${r},${g},${b},0.18);`
  }

  // parse features list — รูปแบบ: icon|text|minTier
  const _parseFeatures = () => {
    const raw = String(cfg.donationSpecialFeatures ?? '').trim()
    const defs = [
      ['🏅','สติกเกอร์/ตราประจำระดับผู้สนับสนุน',1],
      ['📣','ประกาศในห้องเรียนสำหรับนักเรียน',1],
      ['✍️','ระบบสร้าง Prompt เฉพาะครั้งสอนสำหรับใช้กับ AI ส่วนตัว',1],
      ['📊','Dashboard วิเคราะห์ภาพรวมห้องเรียน',2],
      ['🤖','AI ช่วยสร้างแผนการสอน 1 หน้า รายครั้ง',2],
      ['🧭','AI วางไกด์ไลน์การสอนรายคาบแบบจับเวลา',3],
      ['⚡','Early Access ฟีเจอร์ใหม่ก่อนใคร',3],
      ['📲','แจ้งเตือนอัตโนมัติ Telegram/LINE',4],
    ]
    if (!raw) return defs.map(([icon,text,minTier]) => ({ icon, text, minTier }))
    return raw.split('\n').filter(Boolean).map(l => {
      const parts = l.split('|').map(s=>s.trim())
      return { icon: parts[0]||'✨', text: parts[1]||parts[0]||l, minTier: parseInt(parts[2])||1 }
    }).filter(f => f.text)
  }

  let donorTier      = null
  let donorTierIndex = 0   // 1-based
  let donorStickerHtml = ''
  let cardGlowStyle  = ''
  let cardBorderCls  = 'border border-gray-100 shadow-sm'

  if (approvedDonation && cfg.quotaMode === 'school_sponsored') {
    const tiers  = _parseTiers()
    const amount = approvedDonation.amount ?? 0
    donorTier    = [...tiers].reverse().find(t => amount >= t.amount) ?? tiers[0]
    donorTierIndex = donorTier ? tiers.indexOf(donorTier) + 1 : 0

    if (donorTier) {
      cardGlowStyle = _tierGlowStyle(donorTier.color)
      cardBorderCls = ''   // ใช้ inline style แทน Tailwind
      const s = String(donorTier.sticker ?? '')
      const imgEl = /^https?:\/\//.test(s)
        ? `<img src="${s}" class="w-12 h-12 object-contain drop-shadow" />`
        : `<span class="text-3xl leading-none">${s}</span>`
      const titleColor = donorTier.color
        ? `color:${donorTier.color};`
        : 'color:#f59e0b;'
      donorStickerHtml = `
        <button id="donor-sticker-btn" class="flex max-w-full sm:max-w-[120px] flex-col items-center gap-1 overflow-hidden cursor-pointer group mb-1" title="คลิกเพื่อดูสิทธิ์พิเศษ">
          ${imgEl}
          <span class="max-w-full break-words text-[10px] font-semibold leading-snug text-center" style="${titleColor}">
            ${donorTier.note || donorTier.title}
          </span>
          <span class="text-[8px] text-gray-400 group-hover:text-gray-600 transition">ดูสิทธิ์ →</span>
        </button>`
    }
  }

  setContent(`<div class="animate-fade">

    <!-- แจ้งเตือนจากหัวหน้า -->
    ${svNotifs.length ? (() => {
      const catLabel = {general:'ทั่วไป',profile:'โปรไฟล์',dates:'วันสอน',attendance:'เช็คชื่อ',scores:'คะแนน'}
      const catColor = {general:'#374151',profile:'#5b21b6',dates:'#1e40af',attendance:'#065f46',scores:'#713f12'}
      const catBg    = {general:'#f3f4f6',profile:'#ede9fe',dates:'#dbeafe',attendance:'#d1fae5',scores:'#fef9c3'}
      const posLabel = {dept_head:'หัวหน้ากลุ่มสาระ',registrar:'หัวหน้าฝ่ายทะเบียน',
        academic_samai:'หัวหน้าวิชาการสามัญ',academic_religion:'หัวหน้าวิชาการศาสนา',academic_pvch:'หัวหน้าวิชาการปวช'}
      const tags = [...new Set(svNotifs.map(n=>n.metric))].map(m=>
        `<span style="background:${catBg[m]??'#f3f4f6'};color:${catColor[m]??'#374151'};border-radius:20px;padding:2px 8px;font-size:11px;font-weight:700;">${catLabel[m]??m}</span>`
      ).join('')
      const senders = [...new Map(svNotifs.filter(n=>n.supervisor).map(n=>[n.supervisor_id, n.supervisor])).values()]
      const senderNames = senders.map(sv => posLabel[sv.position] ?? 'หัวหน้า').join(', ') || 'หัวหน้า'
      return `
    <div id="sv-notif-banner" style="background:#fef3c7;border:1px solid #fbbf24;border-radius:12px;padding:12px 16px;margin-bottom:16px;cursor:pointer;display:flex;align-items:center;gap:10px;"
      onclick="if(window._showSvNotifPopup)window._showSvNotifPopup()">
      <span style="font-size:22px;flex-shrink:0;">🔔</span>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;color:#92400e;margin-bottom:3px;">
          มีข้อความจาก${senderNames} ${svNotifs.length} รายการ — คลิกเพื่อดู
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">${tags}</div>
      </div>
      <button onclick="event.stopPropagation();if(window._markSvNotifsRead)window._markSvNotifsRead()"
        style="padding:4px 12px;border:1px solid #d97706;border-radius:6px;background:#fff;color:#92400e;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:inherit;">
        รับทราบ
      </button>
    </div>
    <script>window._markSvNotifsRead=async()=>{try{const{markNotificationsRead}=await import('./api.js');await markNotificationsRead(${teacher?.id});document.getElementById('sv-notif-banner')?.remove();document.querySelectorAll('#sv-notif-badge').forEach(el=>el.remove())}catch{}}<\/script>
    `})() : ''}

    <!-- การ์ดโปรไฟล์ครู -->
    <div class="bg-white rounded-2xl ${cardBorderCls} p-5 mb-5 flex flex-col sm:flex-row sm:items-center gap-4 overflow-hidden" style="${cardGlowStyle}">
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
      <div class="w-full sm:w-auto flex-shrink-0 flex flex-row sm:flex-col items-center sm:items-end justify-between gap-2">
        ${donorStickerHtml}
        <button onclick="window._navTo('profile')"
          class="text-xs px-3 py-2 rounded-lg border border-gray-200 text-gray-500
                 hover:bg-gray-50 hover:text-gray-700 transition whitespace-nowrap">
          ✏️ แก้ไขโปรไฟล์
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
      ${[
        { label:'คอร์สวิชาของฉัน', value: subjects.length, icon:'📖', color:'text-emerald-700', bg:'bg-emerald-50', nav:'my-courses' },
        { label:'ห้องเรียน', value: classes.length, icon:'🏫', color:'text-blue-700', bg:'bg-blue-50', nav:'my-classes' },
        { label:'คำร้องรออนุมัติ', value: pendingRequests, icon:'🔔', color: pendingRequests > 0 ? 'text-red-700' : 'text-gray-400', bg:'bg-red-50', nav:'requests' },
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

    <!-- Active class featured card -->
    ${activeEntry ? (() => {
      const cr0 = activeEntry.linkedClasses[0]?.classroom_id ? _classroomMapGlobal[activeEntry.linkedClasses[0].classroom_id] : null
      const time = activeEntry.period
        ? `${activeEntry.period.start_time.substring(0,5)}–${activeEntry.actualEndPeriod.end_time.substring(0,5)}`
        : `คาบ ${activeEntry.period_no}`
      return `
    <div id="active-class-card" class="mt-4 bg-white rounded-2xl p-5"
      style="border:2px solid #059669;box-shadow:0 0 0 4px rgba(5,150,105,.12),0 0 24px rgba(5,150,105,.18);">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" style="animation:pulse 1.5s infinite"></span>
        <span class="text-xs font-bold text-emerald-700 tracking-wide">🟢 กำลังสอนอยู่</span>
        <span class="text-[11px] text-gray-400 ml-1">${time}</span>
      </div>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-lg font-bold text-emerald-700 flex-shrink-0">
          ${activeEntry.period_no}
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-bold text-gray-800 text-sm truncate">
            ${activeEntry.linkedClasses.map(c => c.master_subjects?.subject_name ?? c.class_name).join(', ')}
          </p>
          <p class="text-xs text-gray-500 mt-0.5">
            ${activeEntry.linkedClasses.map(c => {
              const cr = c.classroom_id ? _classroomMapGlobal[c.classroom_id] : null
              return c.class_name + (cr ? ` · 📍${cr.building} ห้อง ${cr.room_number}` : '')
            }).join(' · ')}
          </p>
        </div>
        <div class="flex-shrink-0 text-right">
          <div id="active-class-countdown" class="text-2xl font-bold text-emerald-600 tabular-nums">
            ${_activeRemainingDisplay(activeEntry.actualEndPeriod?.end_time)}
          </div>
          <div class="text-[10px] text-gray-400 mt-0.5">เหลืออีก</div>
        </div>
      </div>
    </div>`
    })() : ''}

    <!-- Today's Classes Widget -->
    <div id="today-widget" class="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-semibold text-gray-700">📅 วันนี้ — ${_DAYS_TH_FULL[todayDow]}</h4>
        ${schedule.length === 0
          ? `<span class="text-[11px] text-gray-400">ยังไม่มีตารางสอน</span>`
          : links.length === 0
            ? `<span class="text-[11px] text-amber-500">ยังไม่เชื่อมโยงห้อง</span>`
            : ''}
      </div>
      ${todayEntries.length === 0 ? `
        <div class="text-center py-4 text-gray-300">
          <p class="text-2xl mb-1">☕</p>
          <p class="text-xs text-gray-400">${schedule.length === 0
            ? 'สร้างตารางสอนเพื่อดูข้อมูลที่นี่'
            : links.length === 0
              ? 'เชื่อมโยงห้องเรียนกับตารางสอน'
              : 'ไม่มีคาบสอนวันนี้'}</p>
          ${schedule.length === 0
            ? `<button onclick="window._navTo('schedule-builder')" class="mt-2 text-xs text-indigo-500 hover:underline">🗓️ สร้างตารางสอน</button>`
            : links.length === 0
              ? `<button onclick="window._navTo('my-classes')" class="mt-2 text-xs text-indigo-500 hover:underline">🔗 ไปเชื่อมโยงห้อง</button>`
              : ''}
        </div>` : `
        <div class="space-y-2">
          ${sortedTodayEntries.map((entry, i) => {
            const cd = _countdownInfo(entry.period?.start_time, entry.actualEndPeriod?.end_time)
            const isDone = cd.label.startsWith('เสร็จ')
            const time = entry.period
              ? `${entry.period.start_time.substring(0,5)}–${(entry.actualEndPeriod ?? entry.period).end_time.substring(0,5)}`
              : `คาบ ${entry.period_no}`
            return `
            <div class="flex items-center gap-3 p-3 rounded-xl ${isDone ? 'bg-gray-50 opacity-60' : 'bg-gray-50'} border border-gray-100">
              <div class="w-9 h-9 rounded-xl ${isDone ? 'bg-gray-100' : 'bg-indigo-100'} flex items-center justify-center text-sm font-bold ${isDone ? 'text-gray-400' : 'text-indigo-600'} flex-shrink-0">
                ${entry.period_no}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs font-semibold ${isDone ? 'text-gray-400' : 'text-gray-700'} truncate">
                  ${entry.linkedClasses.map(c => c.master_subjects?.subject_name ?? c.class_name).join(', ')}
                </p>
                <p class="text-[11px] text-gray-400">
                  ${entry.linkedClasses.map(c => {
                    const cr = c.classroom_id ? _classroomMapGlobal[c.classroom_id] : null
                    return c.class_name + (cr ? ` 📍${cr.building} ห้อง ${cr.room_number}` : '')
                  }).join(' · ')} · ${time}
                </p>
              </div>
              <span id="today-cd-${i}" class="text-xs font-medium flex-shrink-0 ${cd.cls}">${cd.label}</span>
            </div>`
          }).join('')}
        </div>`}
    </div>

    <!-- โควตาห้องเรียน -->
    <div class="mt-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="font-semibold text-gray-700">🎯 โควตาห้องเรียน</h4>
        <span class="text-sm font-bold ${quotaColor}">${quotaLabel}</span>
      </div>
      ${!hasSemester ? `
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-2">
        <div class="bg-${usedSlots >= classLimit ? 'red' : 'emerald'}-500 h-2.5 rounded-full transition-all"
          style="width:${Math.min(100, (usedSlots/classLimit)*100)}%"></div>
      </div>
      <div class="flex justify-between text-xs text-gray-400 mb-3">
        <span>ใช้แล้ว ${usedSlots} ห้อง</span>
        <span>${paidRoomCount > 0 ? `สิทธิ์รวม ${classLimit} ห้อง` : `ฟรี ${FREE_LIMIT} ห้อง`}</span>
      </div>
      ${usedSlots >= classLimit ? `
      <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
        <p class="text-xs text-amber-700 font-medium">🔒 ครบโควตาแล้ว — เลือกแพ็กเกจเพื่อเพิ่มห้องเรียนต่อ</p>
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
        <button onclick="window._openStandaloneCopyFlow?.()"
          class="w-full py-2.5 rounded-xl border border-amber-200 bg-white text-amber-700 text-sm font-semibold hover:bg-amber-50 transition">
          🔗 ทำสำเนาไฟล์ ปพ.5 ใช้งานฟรี
        </button>
      </div>` : `
      <p class="text-xs text-gray-400">เหลืออีก <b class="text-emerald-600">${freeLeft} ห้อง</b> ก่อนต้องอัปเกรด</p>`}
      ` : `
      <p class="text-sm text-emerald-600">✅ แพ็กเกจ${packageText}</p>
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

  // donor sticker → features popup
  document.getElementById('donor-sticker-btn')?.addEventListener('click', () => {
    if (!donorTier) return
    const features = _parseFeatures()
    const hex   = donorTier.color || '#f59e0b'
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16)
    const s = String(donorTier.sticker ?? '')
    const stickerEl = /^https?:\/\//.test(s)
      ? `<img src="${s}" class="w-20 h-20 object-contain mx-auto mb-2 drop-shadow-lg" />`
      : `<div class="text-6xl text-center mb-2">${s}</div>`
    const pop = document.createElement('div')
    pop.className = 'fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4'
    pop.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-xs overflow-hidden">
        <div class="px-6 py-5 text-center" style="background:linear-gradient(135deg,rgba(${r},${g},${b},0.85),rgba(${r},${g},${b},1))">
          ${stickerEl}
          <p class="text-white font-bold text-base">${donorTier.title}</p>
          <p class="text-white/80 text-xs mt-0.5">${donorTier.note}</p>
        </div>
        <div class="px-5 py-4">
          <p class="text-xs font-bold text-gray-700 mb-3">✨ สิทธิ์พิเศษของคุณครู</p>
          <div class="space-y-2">
            ${features.map(f => {
              const unlocked = donorTierIndex >= (f.minTier ?? 1)
              return unlocked
                ? `<div class="flex items-start gap-2.5 text-sm text-gray-800">
                     <span class="flex-shrink-0 text-base">${f.icon}</span>
                     <span class="leading-snug">${f.text}</span>
                   </div>`
                : `<div class="flex items-start gap-2.5 text-sm text-gray-300">
                     <span class="flex-shrink-0 text-base">🔒</span>
                     <span class="leading-snug line-through">${f.text}</span>
                     <span class="text-[10px] ml-auto whitespace-nowrap text-gray-400">ระดับ ${f.minTier}+</span>
                   </div>`
            }).join('')}
          </div>
          ${donorTierIndex < 4 ? `
          <div class="mt-3 pt-2.5 border-t border-gray-100 text-[10px] text-amber-600 text-center">
            🔓 อัปเกรดระดับเพื่อปลดล็อกฟีเจอร์ที่เหลือ
          </div>` : ''}
          <p class="text-[10px] text-gray-400 mt-3 text-center leading-relaxed">
            ฟีเจอร์เหล่านี้อยู่ระหว่างพัฒนาและจะทยอยเปิดใช้งานในอนาคต<br/>
            คุณครูจะได้รับการแจ้งเตือนเมื่อพร้อมใช้งานครับ 🙏
          </p>
          <button class="mt-4 w-full py-2.5 rounded-2xl text-white font-bold text-sm transition"
            style="background:rgba(${r},${g},${b},1)" onclick="this.closest('.fixed').remove()">
            รับทราบ
          </button>
        </div>
      </div>`
    document.body.appendChild(pop)
    pop.addEventListener('click', e => { if (e.target === pop) pop.remove() })
  })

  // countdown อัปเดตทุก 30 วิ
  if (todayEntries.length > 0) {
    _todayWidgetTimer = setInterval(() => {
      // update list countdown labels
      sortedTodayEntries.forEach((entry, i) => {
        const el = document.getElementById(`today-cd-${i}`)
        if (!el) { clearInterval(_todayWidgetTimer); return }
        const cd = _countdownInfo(entry.period?.start_time, entry.actualEndPeriod?.end_time)
        el.textContent = cd.label
        el.className = `text-xs font-medium flex-shrink-0 ${cd.cls}`
      })
      // update active class countdown
      const cdEl = document.getElementById('active-class-countdown')
      if (cdEl && activeEntry) {
        const cd = _countdownInfo(activeEntry.period?.start_time, activeEntry.actualEndPeriod?.end_time)
        if (cd.label.startsWith('เสร็จ')) {
          document.getElementById('active-class-card')?.remove()
        } else {
          cdEl.textContent = _activeRemainingDisplay(activeEntry.actualEndPeriod?.end_time)
        }
      }
    }, 30000)
  }
}

// ─── Lesson Plan Approval Document ───────────────────────────────────────────

function _openLessonPlanApproval(subject, classesForSubject, teacher, cfg, depts) {
  const win = window.open('', '_blank')
  if (!win) { showToast('เบราว์เซอร์บล็อก popup กรุณาอนุญาต popup ก่อน', 'warning'); return }
  win.document.write('<p style="font-family:sans-serif;padding:24px">กำลังสร้างเอกสาร...</p>')

  const rawLogoUrl = cfg.samaiLogoBwUrl ?? cfg.samaiLogoUrl ?? ''

  const credit      = Number(subject.credit ?? 1)
  const hrsPerWeek  = credit * 2
  const totalHrs    = credit * 2 * 20
  const gradeRaw    = String(subject.grade_level ?? '')
  const gradeNum    = gradeRaw.replace(/[^0-9]/g, '')  // "ม.5" → "5"

  const isReligion  = ['AGM','AGMVOC'].includes(subject.subject_group ?? '')
  const gradeLbl    = isReligion ? `อิสลามศึกษาปีที่ ${gradeNum}` : `มัธยมศึกษาปีที่ ${gradeNum}`

  const dept        = depts.find(d => d.dept_code === subject.dept) ?? {}
  const deptName    = dept.dept_name ?? subject.dept ?? ''
  const deptHead    = dept.head_name ?? ''
  const deptHeadSign= dept.head_sign_url ?? ''

  const schoolName  = cfg.samaiSchoolName ?? ''
  const dirName     = cfg.samaiDirectorName ?? ''
  const dirSign     = cfg.samaiDirectorSignUrl ?? ''
  const acadName    = isReligion ? (cfg.agmAcademicHeadName ?? cfg.samaiAcademicHeadName ?? '') : (cfg.samaiAcademicHeadName ?? '')

  const today       = new Date()
  const thMonths    = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
  const dateStr     = `${today.getDate()} ${thMonths[today.getMonth()]} พ.ศ. ${today.getFullYear() + 543}`
  const acYear      = (cfg.academicYear ?? (today.getFullYear() + 543))
  const sem         = cfg.semester ?? 1

  const posStr      = teacher?.category === 'ศาสนา' ? 'ครูศาสนา' : 'ครูสามัญ'
  const roomNames   = classesForSubject.map(c => c.class_name).join(', ')

  // ระดับชั้น + ห้องเรียน
  const gradeField  = gradeNum + (roomNames ? ' ' + roomNames : '')
  // ตำแหน่งหัวหน้าวิชาการตามประเภท
  const acadRoleStr = isReligion ? 'หัวหน้าฝ่ายวิชาการศาสนา' : 'หัวหน้าฝ่ายวิชาการสามัญ'

  const html = `<!DOCTYPE html>
<html lang="th"><head><meta charset="UTF-8"/>
<title>ใบขออนุญาตใช้แผนการจัดการเรียนรู้</title>
<style>
  @page { size:A4; margin:0; }
  * { box-sizing:border-box; }
  body { margin:0; background:#ddd; }
  .page { width:794px; height:1123px; background:#fff; margin:0 auto; position:relative; overflow:hidden;
    color:#000; font-family:"TH SarabunPSK","TH Sarabun New","Sarabun",sans-serif;
    font-size:22px; line-height:1; }
  @media print { body { background:#fff; } .page { margin:0; } .no-print { display:none; } }
  .t  { position:absolute; white-space:nowrap; }
  .b  { font-weight:700; }
  .title { position:absolute; top:102px; left:0; width:794px; text-align:center; font-size:26px; font-weight:700; }
  .logo { position:absolute; left:58px; top:83px; width:66px; height:66px;
    border-radius:50%; font-size:13px; display:flex; align-items:center; justify-content:center; overflow:hidden; }
  .line { position:absolute; border-bottom:1.2px dotted #111; height:23px; }
  .fill { position:absolute; border-bottom:1.2px dotted #111; height:23px; color:#064ec7;
    text-align:center; outline:none; overflow:hidden; white-space:nowrap; padding:0 4px; }
  .comment-line { position:absolute; left:58px; width:677px; border-bottom:2px dotted #111; height:1px; }
  .check { position:absolute; width:24px; height:24px; border:3px solid #999; border-radius:3px; }
  .center { text-align:center; }
  .small  { font-size:21px; }
  .print-btn { position:fixed; bottom:24px; right:24px; padding:12px 28px; background:#1d4ed8;
    color:#fff; border:none; border-radius:10px; font-size:15px; cursor:pointer; font-family:inherit; z-index:999; }
</style></head><body>
<button class="print-btn no-print" onclick="window.print()">🖨️ พิมพ์ / บันทึก PDF</button>
<div class="page">

  <div class="logo">
    ${rawLogoUrl
      ? `<img src="${rawLogoUrl}" style="width:72px;height:72px;object-fit:contain;" onerror="this.style.display='none'"/>`
      : '<span style="font-size:12px;color:#999;">โลโก้</span>'}
  </div>

  <div class="title">บันทึกข้อความ</div>

  <div class="t b" style="left:58px;top:163px;">ส่วนราชการ</div>
  <div class="fill" contenteditable="true" style="left:138px;top:157px;width:597px;text-align:left;">${_htmlEsc(schoolName)}</div>

  <div class="t b" style="left:58px;top:189px;">ที่</div>
  <div class="fill" contenteditable="true" style="left:88px;top:183px;width:253px;text-align:left;font-weight:700;color:#000;">วช/พิเศษ</div>
  <div class="t b" style="left:354px;top:189px;">วันที่</div>
  <div class="fill" contenteditable="true" style="left:394px;top:183px;width:341px;">${_htmlEsc(dateStr)}</div>

  <div class="t b" style="left:58px;top:215px;">เรื่อง</div>
  <div class="fill" contenteditable="true" style="left:95px;top:209px;width:640px;color:#000;text-align:left;">ขออนุญาตใช้แผนการจัดการเรียนรู้ ภาคเรียนที่ ${sem} ปีการศึกษา ${acYear}</div>

  <div class="t" style="left:58px;top:258px;">เรียน</div>
  <div class="fill" contenteditable="true" style="left:103px;top:252px;width:260px;">ผู้อำนวยการ${_htmlEsc(schoolName)}</div>

  <div class="t" style="left:100px;top:304px;">เนื่องด้วยข้าพเจ้า</div>
  <div class="fill" contenteditable="true" style="left:237px;top:298px;width:250px;">${_htmlEsc(teacher?.full_name ?? '')}</div>
  <div class="t" style="left:493px;top:304px;">ตำแหน่ง</div>
  <div class="fill" contenteditable="true" style="left:553px;top:298px;width:182px;">${_htmlEsc(posStr)}</div>

  <div class="t" style="left:58px;top:330px;">ปฏิบัติหน้าที่ครูผู้สอนกลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:282px;top:324px;width:453px;">${_htmlEsc(deptName)}</div>

  <div class="t" style="left:58px;top:356px;">วิชา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:350px;width:238px;">${_htmlEsc(subject.subject_name ?? '')}</div>
  <div class="t" style="left:354px;top:356px;">รหัส</div>
  <div class="fill" contenteditable="true" style="left:393px;top:350px;width:140px;">${_htmlEsc(subject.subject_code ?? '')}</div>
  <div class="t" style="left:545px;top:356px;">จำนวน</div>
  <div class="fill" contenteditable="true" style="left:603px;top:350px;width:65px;">${credit}</div>
  <div class="t" style="left:670px;top:356px;">หน่วยกิต</div>

  <div class="t" style="left:58px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:94px;top:376px;width:54px;">${hrsPerWeek}</div>
  <div class="t" style="left:150px;top:382px;">ชั่วโมง/สัปดาห์</div>
  <div class="t" style="left:258px;top:382px;">เวลา</div>
  <div class="fill" contenteditable="true" style="left:291px;top:376px;width:66px;">${totalHrs}</div>
  <div class="t" style="left:379px;top:382px;">ชั่วโมง/ภาคเรียน</div>
  <div class="t" style="left:510px;top:382px;">ในระดับชั้น${isReligion ? 'อิสลามศึกษา' : 'มัธยมศึกษา'}ปีที่</div>
  <div class="fill" contenteditable="true" style="left:653px;top:376px;width:82px;">${_htmlEsc(gradeField)}</div>

  <div class="t" style="left:58px;top:408px;">จำนวนแผนการจัดการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:237px;top:402px;width:108px;"></div>
  <div class="t" style="left:374px;top:408px;">แผน</div>

  <div class="t" style="left:100px;top:456px;">จึงเรียนมาเพื่อโปรดพิจารณาอนุญาตให้ใช้ประกอบการเรียนการสอนต่อไป</div>

  <!-- ผู้จัดทำ -->
  <div class="t" style="left:454px;top:500px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:494px;width:246px;"></div>
  <div class="t" style="left:478px;top:526px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:520px;width:218px;">${_htmlEsc(teacher?.full_name ?? '')}</div>
  <div class="t" style="left:716px;top:526px;">)</div>
  <div class="t center" style="left:522px;top:551px;width:172px;">ผู้จัดทำแผนการจัดการเรียนรู้</div>

  <!-- หัวหน้ากลุ่มสาระ -->
  <div class="t" style="left:454px;top:606px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:600px;width:246px;position:absolute;">
    ${deptHeadSign ? `<img src="${_htmlEsc(deptHeadSign)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>` : ''}
  </div>
  <div class="t" style="left:478px;top:632px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:626px;width:218px;">${_htmlEsc(deptHead)}</div>
  <div class="t" style="left:716px;top:632px;">)</div>
  <div class="t center" style="left:391px;top:657px;width:230px;">หัวหน้ากลุ่มสาระการเรียนรู้</div>
  <div class="fill" contenteditable="true" style="left:600px;top:651px;width:135px;">${_htmlEsc(deptName)}</div>

  <div class="t b" style="left:58px;top:694px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:738px;"></div>

  <!-- หัวหน้าฝ่ายวิชาการ -->
  <div class="t" style="left:454px;top:765px;">ลงชื่อ</div>
  <div class="fill" contenteditable="true" style="left:489px;top:759px;width:246px;"></div>
  <div class="t" style="left:478px;top:791px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:785px;width:218px;">${_htmlEsc(acadName)}</div>
  <div class="t" style="left:716px;top:791px;">)</div>
  <div class="t center" style="left:510px;top:816px;width:190px;">${_htmlEsc(acadRoleStr)}</div>

  <div class="t b" style="left:58px;top:850px;">ความคิดเห็น/ข้อเสนอแนะ</div>
  <div class="comment-line" style="top:891px;"></div>

  <div class="check" style="left:459px;top:914px;"></div>
  <div class="t" style="left:495px;top:914px;">อนุญาต</div>
  <div class="check" style="left:459px;top:944px;"></div>
  <div class="t" style="left:495px;top:944px;">ไม่อนุญาต</div>

  <!-- ผู้อำนวยการ -->
  <div class="t" style="left:454px;top:1003px;">ลงชื่อ</div>
  <div class="fill" style="left:489px;top:997px;width:246px;position:absolute;">
    ${dirSign ? `<img src="${_htmlEsc(dirSign)}" style="max-height:40px;max-width:220px;object-fit:contain;"/>` : ''}
  </div>
  <div class="t" style="left:478px;top:1029px;">(</div>
  <div class="fill" contenteditable="true" style="left:497px;top:1023px;width:218px;">${_htmlEsc(dirName)}</div>
  <div class="t" style="left:716px;top:1029px;">)</div>
  <div class="t center" style="left:493px;top:1054px;width:230px;">ผู้อำนวยการ${_htmlEsc(schoolName)}</div>

</div>
</body></html>`

  win.document.open()
  win.document.write(html)
  win.document.close()
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
    const [subjects, allClasses] = await Promise.all([
      teacher ? getMySubjects(teacher.id) : getMasterSubjects().catch(()=>[]),
      teacher ? getMyClasses(teacher.id).catch(()=>[]) : Promise.resolve([]),
    ])
    const subjects_orig = subjects // keep for compat
    setContent(`<div class="animate-fade">
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
                  <button class="ccm-open-btn text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2 py-1.5 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition"
                    data-sid="${s.id}" data-sname="${_htmlEsc(s.subject_name)}">
                    ⚙️ คอลัมน์
                  </button>
                  <button onclick="window._openCourseDocPage2(${s.id})"
                    class="text-xs text-emerald-700 hover:text-emerald-900 font-medium px-2 py-1.5 border border-emerald-200 rounded-lg hover:bg-emerald-50">
                    คำอธิบายฯ
                  </button>
                  <button class="lesson-plan-btn text-xs text-sky-700 hover:text-sky-900 font-medium px-2 py-1.5 border border-sky-200 rounded-lg hover:bg-sky-50 transition"
                    data-sid="${s.id}">
                    📋 ใบขออนุญาต
                  </button>
                  <button class="pp5-course-btn text-xs text-violet-700 hover:text-violet-900 font-medium px-2 py-1.5 border border-violet-200 rounded-lg hover:bg-violet-50 transition"
                    data-sid="${s.id}">
                    💾 ปพ.5
                  </button>
                  <button onclick="window._editCourse(${s.id})"
                    class="text-xs text-gray-500 hover:text-gray-700 font-medium px-2 py-1.5 border border-gray-200 rounded-lg">
                    แก้ไข
                  </button>
                  <button class="cd2-del-course-btn text-xs text-red-400 hover:text-red-600 font-medium px-2 py-1.5 border border-red-100 rounded-lg"
                    data-id="${s.id}" data-name="${_htmlEsc(s.subject_name)}">
                    ลบ
                  </button>
                </div>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`}
    </div>`)

    // ผูก event ลบคอร์ส
    document.querySelectorAll('.cd2-del-course-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window._deleteCourse(Number(btn.dataset.id), btn.dataset.name)
      })
    })

    // ผูก event ปุ่มจัดการคอลัมน์คะแนนระดับคอร์ส
    document.querySelectorAll('.ccm-open-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        _openCourseColsModal(parseInt(btn.dataset.sid), btn.dataset.sname, allClasses)
      })
    })

    // ผูก event ปุ่มใบขออนุญาตใช้แผน
    document.querySelectorAll('.lesson-plan-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const sid = parseInt(btn.dataset.sid)
        const subj = subjects.find(s => s.id === sid)
        if (!subj) return
        const courseClasses = allClasses.filter(c => c.course_id === sid || c.master_subjects?.id === sid)
        const { getSystemConfig: _cfg, getDepartments: _depts } = await import('./api.js')
        const [cfg, depts] = await Promise.all([_cfg().catch(()=>({})), _depts().catch(()=>[])])
        _openLessonPlanApproval(subj, courseClasses, teacher, cfg, depts)
      })
    })

    // ผูก event ปุ่ม ปพ.5 ระดับคอร์ส
    document.querySelectorAll('.pp5-course-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = parseInt(btn.dataset.sid)
        const courseClasses = allClasses.filter(c => c.course_id === sid || c.master_subjects?.id === sid)
        if (courseClasses.length === 1) {
          openPP5Doc(courseClasses[0].id)
        } else {
          openPP5CourseModal(courseClasses)
        }
      })
    })

  } catch { showToast('โหลดข้อมูลไม่สำเร็จ','error') }

}

const COURSE_DOC_LANGS = {
  th: {
    key: 'th', dir: 'ltr', aiLang: 'ภาษาไทยที่เป็นทางการ',
    label: 'ภาษาไทย', title: 'คำอธิบายฯ', close: 'ปิด', save: 'บันทึก', saving: 'กำลังบันทึก...',
    helpTitle: 'ช่วยเติมข้อมูล', helpSub: 'ระบุบท/เรื่องด้านล่าง แล้วเลือกวิธีเติมข้อมูล',
    topicLabel: 'บท / เรื่องที่สอน (เพิ่มได้หลายบท)', topicPlaceholder: 'เช่น สถิติ, เลขกำลัง, การอ่านจับใจความ', addTopic: 'เพิ่มบท',
    btnCurriculum: 'ค้นหลักสูตร', btnCurriculumSub: 'ฐานข้อมูลแกนกลาง', btnCurriculumLoading: 'กำลังค้น...',
    btnAI: 'ให้ AI ร่าง', btnAISub: 'Gemini + บทที่ระบุ', btnAILoading: 'AI กำลังร่าง...',
    btnImg: 'อ่านจากรูป', btnImgSub: 'AI อ่านภาพถ่าย', btnImgLoading: 'กำลังอ่าน...',
    descLabel: 'คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม', descPlaceholder: 'พิมพ์ภาษาไทย อาหรับ หรือภาษาอื่นได้ ระบบจะรองรับทิศทางข้อความอัตโนมัติ',
    dirLabel: 'ทิศทางข้อความ', dirAuto: 'อัตโนมัติ', dirRTL: 'ขวาไปซ้าย (Arabic)', dirLTR: 'ซ้ายไปขวา',
    signerLabel: 'ผู้ลงนาม', signerPlaceholder: 'หัวหน้ากลุ่มสาระ', signerHint: 'ใช้ตำแหน่งหัวหน้ากลุ่มสาระในเอกสาร',
    tableTitle: 'มาตรฐาน / ตัวชี้วัด / ผลการเรียนรู้', tableHint: 'เลขแถวที่มีข้อความจะกลายเป็นตัวเลือก "ข้อที่" สำหรับกลางภาคและปลายภาค',
    tplBasic: 'พื้นฐาน 2 คอลัมน์', tplExtra: 'เพิ่มเติม 1 คอลัมน์', addCol: '+ คอลัมน์', addRow: '+ แถว', rowHeader: 'ข้อ', delRow: 'ลบ',
    objTitle: 'จุดประสงค์วัดผล', objHint: '(คลิกเพื่อเลือกข้อ)', between: 'ระหว่างภาค ข้อที่', mid: 'กลางภาค ข้อที่', final: 'ปลายภาค ข้อที่',
    noOpts: 'ยังไม่มีข้อให้เลือก กรุณาพิมพ์ข้อมูลอย่างน้อย 1 แถวในตารางด้านบน', notSelected: 'ยังไม่เลือก',
    colsBasic: ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด'], colsExtra: ['ผลการเรียนรู้'], colNew: n => `คอลัมน์ ${n}`,
    pickerTitles: { mid: 'เลือกข้อกลางภาค', between: 'เลือกข้อระหว่างภาค', final: 'เลือกข้อปลายภาค' },
    pickerCancel: 'ยกเลิก', pickerOk: 'ตกลง',
    confirmOverwrite: 'ค้นหลักสูตรแล้วจะทับข้อมูลที่มีอยู่ ดำเนินการต่อหรือไม่?',
    confirmAIOverwrite: 'ให้ AI ร่างใหม่ทับข้อมูลที่มีอยู่หรือไม่?',
    confirmImgOverwrite: 'เติมข้อมูลจากรูปภาพ ทับข้อมูลที่มีอยู่หรือไม่?',
    confirmColChange: 'เปลี่ยนรูปแบบคอลัมน์หรือไม่? ข้อมูลเดิมจะถูกจัดให้เข้ากับคอลัมน์ใหม่',
    toastSaved: 'บันทึกคำอธิบายฯ สำเร็จ',
    toastSearchOk: n => `พบ ${n} รายการในฐานหลักสูตรแกนกลาง - กรุณาตรวจสอบก่อนบันทึก`,
    toastSearchEmpty: 'ไม่พบข้อมูลในฐานหลักสูตรแกนกลาง - ลองใช้ "ให้ AI ร่าง" แทน',
    toastAIDone: 'AI ร่างข้อมูลให้แล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก',
    toastImgDone: 'AI อ่านจากรูปภาพแล้ว - กรุณาตรวจสอบความถูกต้องก่อนบันทึก',
  },
  jawi: {
    key: 'jawi', dir: 'rtl', aiLang: 'bahasa Melayu tulisan Jawi. Semua teks mestilah dalam tulisan Jawi, bukan Rumi.',
    label: 'يَاوِي', title: 'كتراڠن مات ڤلاجارن', close: 'توتوڤ', save: 'سيمڤن', saving: 'سداڠ سيمڤن...',
    helpTitle: 'بنتو ايسي ماكلومت', helpSub: 'نياتاكن باب / توڤيك د باوه، لالو ڤيليه چارا ايسي ماكلومت',
    topicLabel: 'باب / توڤيك ڤنڬاجارن', topicPlaceholder: 'چونتوه: قواعد اللغة، فهم المقروء', addTopic: 'تمبه باب',
    btnCurriculum: 'چاري كوريكولوم', btnCurriculumSub: 'ڤاڠكالن داتا', btnCurriculumLoading: 'سداڠ چاري...',
    btnAI: 'AI رنچاڠ', btnAISub: 'Gemini + باب', btnAILoading: 'AI سداڠ رنچاڠ...',
    btnImg: 'باچا ڬمبر', btnImgSub: 'AI باچا ڬمبر', btnImgLoading: 'سداڠ باچا...',
    descLabel: 'كتراڠن مات ڤلاجارن / حاصيل ڤمبلاجارن', descPlaceholder: 'تايڤ دالم توليسن ياوي',
    dirLabel: 'اراه تيكس', dirAuto: 'اوتوماتيك', dirRTL: 'كانن ك كيري', dirLTR: 'كيري ك كانن',
    signerLabel: 'ڤناندا تاڠن', signerPlaceholder: 'كتوا كومڤولن مات ڤلاجارن', signerHint: 'ڬوناكن جاواتن كتوا كومڤولن دالم دوكومن',
    tableTitle: 'ڤياوايان / ڤتوك / حاصيل ڤمبلاجارن', tableHint: 'نومبور باريس يڠ برتوليس اكن جادي ڤيليهن',
    tplBasic: '٢ لاجور اساس', tplExtra: '١ لاجور تمبهن', addCol: '+ لاجور', addRow: '+ باريس', rowHeader: 'بل', delRow: 'ڤادم',
    objTitle: 'اوبجيكتيف ڤنيلاين', objHint: '(كليك اونتوق ڤيليه)', between: 'سيماس ڤڠڬل', mid: 'ڤرتڠهن ڤڠڬل', final: 'اخير ڤڠڬل',
    noOpts: 'بيلوم ادا ڤيليهن', notSelected: 'بيلوم ڤيليه',
    colsBasic: ['ڤياوايان ڤمبلاجارن', 'ڤتوك'], colsExtra: ['حاصيل ڤمبلاجارن'], colNew: n => `لاجور ${n}`,
    pickerTitles: { mid: 'ڤيليه ڤرتڠهن', between: 'ڤيليه سيماس', final: 'ڤيليه اخير' },
    pickerCancel: 'بتل', pickerOk: 'اوك',
  },
  ar: {
    key: 'ar', dir: 'rtl', aiLang: 'اللغة العربية الفصحى',
    label: 'العربية', title: 'وصف المادة الدراسية', close: 'إغلاق', save: 'حفظ', saving: 'جار الحفظ...',
    helpTitle: 'مساعدة في إدخال البيانات', helpSub: 'حدد الفصل / الموضوع أدناه ثم اختر طريقة الإدخال',
    topicLabel: 'الفصل / الموضوع', topicPlaceholder: 'مثال: النحو، القراءة، الفقه', addTopic: 'إضافة فصل',
    btnCurriculum: 'بحث المنهج', btnCurriculumSub: 'قاعدة البيانات', btnCurriculumLoading: 'جار البحث...',
    btnAI: 'صياغة AI', btnAISub: 'Gemini + الفصل', btnAILoading: 'جار الصياغة...',
    btnImg: 'قراءة الصورة', btnImgSub: 'AI يقرأ الصورة', btnImgLoading: 'جار القراءة...',
    descLabel: 'وصف المادة / نتائج التعلم العامة', descPlaceholder: 'اكتب باللغة العربية أو أي لغة أخرى',
    dirLabel: 'اتجاه النص', dirAuto: 'تلقائي', dirRTL: 'يمين إلى يسار', dirLTR: 'يسار إلى يمين',
    signerLabel: 'الموقع', signerPlaceholder: 'رئيس القسم', signerHint: 'يستخدم منصب رئيس القسم في الوثيقة',
    tableTitle: 'المعايير / المؤشرات / نتائج التعلم', tableHint: 'أرقام الصفوف التي تحتوي نصا تصبح اختيارات',
    tplBasic: 'عمودان أساسيان', tplExtra: 'عمود واحد', addCol: '+ عمود', addRow: '+ صف', rowHeader: 'رقم', delRow: 'حذف',
    objTitle: 'أهداف التقييم', objHint: '(انقر للاختيار)', between: 'أثناء الفصل', mid: 'منتصف الفصل', final: 'نهاية الفصل',
    noOpts: 'لا توجد بنود للاختيار', notSelected: 'لم يتم الاختيار',
    colsBasic: ['معايير التعلم', 'المؤشرات'], colsExtra: ['نتائج التعلم'], colNew: n => `عمود ${n}`,
    pickerTitles: { mid: 'اختر منتصف الفصل', between: 'اختر أثناء الفصل', final: 'اختر نهاية الفصل' },
    pickerCancel: 'إلغاء', pickerOk: 'موافق',
  },
  rumi: {
    key: 'rumi', dir: 'ltr', aiLang: 'Bahasa Melayu tulisan Rumi/Latin',
    label: 'Rumi', title: 'Keterangan Mata Pelajaran', close: 'Tutup', save: 'Simpan', saving: 'Menyimpan...',
    helpTitle: 'Bantu isi maklumat', helpSub: 'Nyatakan bab / topik di bawah, kemudian pilih cara mengisi',
    topicLabel: 'Bab / Topik pengajaran', topicPlaceholder: 'Contoh: Tatabahasa, Kefahaman Membaca', addTopic: 'Tambah bab',
    btnCurriculum: 'Cari kurikulum', btnCurriculumSub: 'Pangkalan data', btnCurriculumLoading: 'Mencari...',
    btnAI: 'Rangka AI', btnAISub: 'Gemini + bab', btnAILoading: 'AI merangka...',
    btnImg: 'Baca gambar', btnImgSub: 'AI baca gambar', btnImgLoading: 'Membaca...',
    descLabel: 'Keterangan mata pelajaran / hasil pembelajaran umum', descPlaceholder: 'Taip dalam Bahasa Melayu atau bahasa lain',
    dirLabel: 'Arah teks', dirAuto: 'Automatik', dirRTL: 'Kanan ke kiri', dirLTR: 'Kiri ke kanan',
    signerLabel: 'Penandatangan', signerPlaceholder: 'Ketua kumpulan mata pelajaran', signerHint: 'Gunakan jawatan ketua kumpulan dalam dokumen',
    tableTitle: 'Piawaian / Petunjuk / Hasil pembelajaran', tableHint: 'Nombor baris yang berisi teks menjadi pilihan item',
    tplBasic: '2 lajur asas', tplExtra: '1 lajur tambahan', addCol: '+ Lajur', addRow: '+ Baris', rowHeader: 'Item', delRow: 'Padam',
    objTitle: 'Objektif penilaian', objHint: '(klik untuk pilih)', between: 'Semasa penggal', mid: 'Pertengahan penggal', final: 'Akhir penggal',
    noOpts: 'Tiada item untuk dipilih', notSelected: 'Belum dipilih',
    colsBasic: ['Piawaian pembelajaran', 'Petunjuk'], colsExtra: ['Hasil pembelajaran'], colNew: n => `Lajur ${n}`,
    pickerTitles: { mid: 'Pilih pertengahan', between: 'Pilih semasa', final: 'Pilih akhir' },
    pickerCancel: 'Batal', pickerOk: 'OK',
  },
}

// cache lang settings ใน session เพื่อไม่ต้อง fetch ซ้ำทุกครั้งที่เปิด modal
let _cachedLangSettings = null
async function _getLangSettings() {
  if (_cachedLangSettings) return _cachedLangSettings
  const rows = await getCourseDocLangSettings().catch(() => [])
  _cachedLangSettings = Object.fromEntries(rows.map(r => [r.lang_key, r.settings ?? {}]))
  return _cachedLangSettings
}

export async function openCourseDocPage2Modal(teacher, course) {
  const [existing, langSettingsMap] = await Promise.all([
    getCourseDocPage2(course.id).catch(err => {
      showToast('โหลดคำอธิบายฯ ไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      return null
    }),
    _getLangSettings(),
  ])

  const normalizeColumns = value => {
    const cols = Array.isArray(value) ? value : ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด']
    return cols.length ? cols.map(c => String(c ?? '')) : ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด']
  }
  const normalizeRows = (value, colCount) => {
    const rows = Array.isArray(value) ? value : []
    const fixed = rows.map(row => {
      const cells = Array.isArray(row) ? row : Object.values(row ?? {})
      return Array.from({ length: colCount }, (_, i) => String(cells[i] ?? ''))
    })
    return fixed.length ? fixed : Array.from({ length: 12 }, () => Array.from({ length: colCount }, () => ''))
  }
  const uniqueInts = value => [...new Set((Array.isArray(value) ? value : [])
    .map(n => parseInt(n, 10)).filter(n => Number.isFinite(n) && n > 0))]

  let columns = normalizeColumns(existing?.table_columns)
  let rows = normalizeRows(existing?.table_rows, columns.length)
  let midItems     = uniqueInts(existing?.midterm_objective_items)
  let betweenItems = uniqueInts(existing?.between_objective_items)
  let finalItems   = uniqueInts(existing?.final_objective_items)
  let betweenExtra = existing?.between_objective_extra ?? ''
  let midExtra     = existing?.midterm_objective_extra ?? ''
  let finalExtra   = existing?.final_objective_extra   ?? ''
  let textDir      = ['auto', 'rtl', 'ltr'].includes(existing?.text_direction) ? existing.text_direction : 'auto'
  let description  = existing?.description || ''
  let signerName   = existing?.signer_name || course.learning_area || ''
  let topicList    = existing?.topic_list?.length ? existing.topic_list : ['']  // หลายบท
  let aiStatusText = ''
  let lang = 'th'
  // DB settings override hardcoded defaults (pickerTitles merges separately)
  const i18n = () => {
    const base = { ...COURSE_DOC_LANGS.th, ...COURSE_DOC_LANGS[lang] }
    const dbOverride = langSettingsMap?.[lang] ?? {}
    const merged = { ...base, ...dbOverride }
    if (dbOverride.pickerTitles) merged.pickerTitles = { ...base.pickerTitles, ...dbOverride.pickerTitles }
    return merged
  }
  const ensureRTLFont = () => {
    if (document.getElementById('cd2-rtl-font')) return
    const link = document.createElement('link')
    link.id = 'cd2-rtl-font'
    link.rel = 'stylesheet'
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap'
    document.head.appendChild(link)
  }
  const [cfg, depts] = await Promise.all([
    getSystemConfig().catch(() => ({})),
    getDepartments().catch(() => []),
  ])
  // แปลง dept_code (THAI/MATH/...) → dept_name ภาษาไทย สำหรับค้นหลักสูตรแกนกลาง
  const deptRec   = depts.find(d => d.dept_code === course.dept)
  const deptThai  = deptRec?.dept_name ?? course.dept ?? ''

  document.getElementById('course-doc-page2-modal')?.remove()
  const modal = document.createElement('div')
  modal.id = 'course-doc-page2-modal'
  modal.className = 'fixed inset-0 z-[160] bg-white flex flex-col'
  document.body.appendChild(modal)

  const dirAttr = () => textDir === 'auto' ? 'auto' : textDir
  const selectedText = (items, extra = '') => {
    const nums = items.length ? [...items].sort((a, b) => a - b).join(', ') : ''
    const parts = [nums, extra.trim()].filter(Boolean)
    return parts.length ? parts.join(', ') : i18n().notSelected
  }
  const objectiveOptions = () => {
    const max = rows.length
    return Array.from({ length: max }, (_, i) => i + 1)
      .filter(n => rows[n - 1]?.some(cell => String(cell ?? '').trim()))
  }

  const render = () => {
    const L = i18n()
    const opts = objectiveOptions()
    const isRTL = L.dir === 'rtl'
    if (isRTL) ensureRTLFont()
    const dir = textDir === 'auto' ? L.dir : textDir
    const textAlign = dir === 'rtl' ? 'text-right' : 'text-left'
    const rtlStyle = isRTL ? 'font-family: Noto Naskh Arabic, Traditional Arabic, Arial, sans-serif;' : ''
    modal.innerHTML = `
      <div class="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between gap-3" dir="${dir}" style="${rtlStyle}">
        <div class="min-w-0">
          <h2 class="text-lg sm:text-xl font-bold text-gray-800">${L.title}</h2>
          <p class="text-xs text-gray-400 truncate">${_htmlEsc(course.subject_name)} · ${_htmlEsc(course.subject_code || '—')} · ใช้ร่วมทุกห้องในคอร์สนี้</p>
        </div>
        <div class="flex items-center gap-2">
          <button id="cd2-close" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">${L.close}</button>
          <button id="cd2-save" class="px-5 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">${L.save}</button>
        </div>
      </div>

      <div class="flex items-center gap-1.5 px-4 sm:px-6 py-2 border-b border-gray-100 bg-gray-50 overflow-x-auto" dir="${dir}" style="${rtlStyle}">
        <span class="text-[10px] text-gray-400 shrink-0 mr-1">🌐</span>
        ${Object.values(COURSE_DOC_LANGS).map(l => `
          <button class="cd2-lang-btn shrink-0 px-3 py-1 rounded-lg text-xs font-semibold transition ${lang === l.key ? 'bg-emerald-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}"
            data-lang="${l.key}">${langSettingsMap?.[l.key]?.label || l.label}</button>
        `).join('')}
      </div>

      <div class="flex-1 overflow-y-auto bg-gray-50" dir="${dir}" style="${rtlStyle}">
        <div class="max-w-6xl mx-auto p-4 sm:p-6 space-y-4">
          <div class="bg-white rounded-2xl border border-emerald-100 shadow-sm p-4 sm:p-5">
            <div>
              <h3 class="font-bold text-gray-800">${L.helpTitle}</h3>
              <p class="text-xs text-gray-400 mt-0.5">${L.helpSub}</p>
            </div>

            <!-- topic list -->
            <div class="mt-4 space-y-2">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-semibold text-gray-500">${L.topicLabel}</span>
                <span class="text-xs text-gray-400">${_htmlEsc(course.grade_level || '')} · ${_htmlEsc(deptThai || '')}</span>
              </div>
              <div id="cd2-topic-list" class="space-y-2">
                ${topicList.map((t, i) => `
                  <div class="flex gap-2 cd2-topic-row">
                    <input class="cd2-topic-input ${INPUT_CLS} flex-1" value="${_htmlEsc(t)}"
                      placeholder="${_htmlEsc(L.topicPlaceholder)}" dir="${dir}" data-idx="${i}" />
                    ${topicList.length > 1 ? `<button type="button" class="cd2-topic-del px-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 text-sm" data-idx="${i}">✕</button>` : ''}
                  </div>`).join('')}
              </div>
              <button id="cd2-add-topic" type="button"
                class="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mt-1">
                <span class="text-base leading-none">＋</span> ${L.addTopic}
              </button>
            </div>

            <!-- 3 action buttons grid -->
            <div class="grid grid-cols-3 gap-2 mt-4">
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-search-curriculum"
                  class="w-full py-2.5 rounded-xl bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  🔍 ${L.btnCurriculum}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${L.btnCurriculumSub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <button id="cd2-auto-fill"
                  class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-50 flex items-center justify-center gap-1">
                  ✨ ${L.btnAI}
                </button>
                <span class="text-[10px] text-gray-400 text-center">${L.btnAISub}</span>
              </div>
              <div class="flex flex-col items-center gap-1">
                <label class="cursor-pointer w-full">
                  <span id="cd2-img-btn"
                    class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 flex items-center justify-center gap-1">
                    📷 ${L.btnImg}
                  </span>
                  <input type="file" id="cd2-img-input" accept="image/*" class="hidden" />
                </label>
                <span class="text-[10px] text-gray-400 text-center">${L.btnImgSub}</span>
              </div>
            </div>

            ${aiStatusText ? `<p class="text-xs mt-3 ${aiStatusText.startsWith('✅') ? 'text-emerald-600' : 'text-amber-600'}">${_htmlEsc(aiStatusText)}</p>` : ''}
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
            <div class="grid md:grid-cols-[1fr_220px] gap-4">
              <label class="block">
                <span class="block text-sm font-semibold text-gray-700 mb-2">${L.descLabel}</span>
                <textarea id="cd2-description" rows="5" dir="${dir}"
                  class="${INPUT_CLS} ${textAlign} min-h-[132px] leading-7"
                  placeholder="${_htmlEsc(L.descPlaceholder)}">${_htmlEsc(description)}</textarea>
              </label>
              <div class="space-y-3">
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${L.dirLabel}</span>
                  <select id="cd2-dir" class="${SELECT_CLS}">
                    <option value="auto" ${textDir === 'auto' ? 'selected' : ''}>${L.dirAuto}</option>
                    <option value="rtl" ${textDir === 'rtl' ? 'selected' : ''}>${L.dirRTL}</option>
                    <option value="ltr" ${textDir === 'ltr' ? 'selected' : ''}>${L.dirLTR}</option>
                  </select>
                </label>
                <label class="block">
                  <span class="block text-sm font-semibold text-gray-700 mb-2">${L.signerLabel}</span>
                  <input id="cd2-signer" class="${INPUT_CLS} ${textAlign}" value="${_htmlEsc(signerName)}" placeholder="${_htmlEsc(L.signerPlaceholder)}" dir="${dir}" />
                  <p class="text-xs text-gray-400 mt-1">${L.signerHint}</p>
                </label>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="px-4 sm:px-5 py-4 border-b border-gray-100 flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h3 class="font-bold text-gray-800">${L.tableTitle}</h3>
                <p class="text-xs text-gray-400 mt-0.5">${L.tableHint}</p>
              </div>
              <div class="flex gap-2">
                <button id="cd2-template-basic" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${L.tplBasic}</button>
                <button id="cd2-template-extra" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-50">${L.tplExtra}</button>
                <button id="cd2-add-col" class="px-3 py-2 rounded-xl border border-emerald-200 text-emerald-700 text-xs font-semibold hover:bg-emerald-50">${L.addCol}</button>
                <button id="cd2-add-row" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700">${L.addRow}</button>
              </div>
            </div>
            <div class="overflow-auto">
              <table class="w-full min-w-[780px] border-collapse text-sm" dir="${dir}">
                <thead>
                  <tr class="bg-gray-50">
                    <th class="w-14 px-3 py-2 border border-gray-100 text-gray-500">${L.rowHeader}</th>
                    ${columns.map((c, i) => `
                      <th class="min-w-[240px] px-2 py-2 border border-gray-100">
                        <div class="flex items-center gap-2">
                          <input data-col="${i}" class="cd2-col ${INPUT_CLS} ${textAlign} py-2 font-semibold" value="${_htmlEsc(c)}" dir="${dir}" />
                          ${columns.length > 1 ? `<button data-del-col="${i}" class="cd2-del-col text-red-400 hover:text-red-600 px-1" title="ลบคอลัมน์">×</button>` : ''}
                        </div>
                      </th>`).join('')}
                    <th class="w-16 px-2 py-2 border border-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  ${rows.map((row, r) => `
                    <tr>
                      <td class="px-3 py-2 border border-gray-100 text-center font-semibold text-gray-500">${r + 1}</td>
                      ${columns.map((_, c) => `
                        <td class="p-1 border border-gray-100 align-top">
                          <textarea data-row="${r}" data-cell="${c}" rows="2" dir="${dir}"
                            class="cd2-cell ${textAlign} w-full min-h-[58px] resize-y rounded-lg border border-transparent px-3 py-2 text-sm leading-6 focus:border-emerald-300 focus:outline-none">${_htmlEsc(row[c] || '')}</textarea>
                        </td>`).join('')}
                      <td class="px-2 py-2 border border-gray-100 text-center">
                        <button data-del-row="${r}" class="cd2-del-row text-xs text-red-400 hover:text-red-600">${L.delRow}</button>
                      </td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5">
            <h3 class="font-bold text-gray-800 mb-3">${L.objTitle} <span class="text-xs font-normal text-gray-400">${L.objHint}</span></h3>
            <div class="grid sm:grid-cols-3 gap-3">
              <button id="cd2-pick-between" class="${textAlign} rounded-2xl border border-gray-200 p-4 hover:border-blue-300 hover:bg-blue-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${L.between}</p>
                <p class="mt-2 text-base font-bold text-blue-600 leading-snug">${_htmlEsc(selectedText(betweenItems, betweenExtra))}</p>
              </button>
              <button id="cd2-pick-mid" class="${textAlign} rounded-2xl border border-gray-200 p-4 hover:border-emerald-300 hover:bg-emerald-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${L.mid}</p>
                <p class="mt-2 text-base font-bold text-emerald-700 leading-snug">${_htmlEsc(selectedText(midItems, midExtra))}</p>
              </button>
              <button id="cd2-pick-final" class="${textAlign} rounded-2xl border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50 transition">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">${L.final}</p>
                <p class="mt-2 text-base font-bold text-purple-700 leading-snug">${_htmlEsc(selectedText(finalItems, finalExtra))}</p>
              </button>
            </div>
            ${opts.length ? '' : `<p class="text-xs text-amber-600 mt-3">${L.noOpts}</p>`}
          </div>
        </div>
      </div>`

    wireEvents()
  }

  const syncFromDom = () => {
    topicList = [...modal.querySelectorAll('.cd2-topic-input')].map(el => el.value.trim()).filter(Boolean)
    if (!topicList.length) topicList = ['']
    description = modal.querySelector('#cd2-description')?.value ?? ''
    signerName = modal.querySelector('#cd2-signer')?.value ?? ''
    textDir = modal.querySelector('#cd2-dir')?.value ?? textDir
    modal.querySelectorAll('.cd2-col').forEach(input => {
      columns[Number(input.dataset.col)] = input.value
    })
    modal.querySelectorAll('.cd2-cell').forEach(input => {
      const r = Number(input.dataset.row)
      const c = Number(input.dataset.cell)
      if (!rows[r]) rows[r] = Array.from({ length: columns.length }, () => '')
      rows[r][c] = input.value
    })
    return { desc: description, signer: signerName }
  }

  const applyGeneratedDoc = result => {
    const nextColumns = Array.isArray(result?.columns) && result.columns.length
      ? result.columns.map(c => String(c ?? '').trim()).filter(Boolean)
      : i18n().colsExtra
    const nextRows = Array.isArray(result?.rows)
      ? result.rows.map(row => {
          const cells = Array.isArray(row) ? row : Object.values(row ?? {})
          return Array.from({ length: nextColumns.length }, (_, i) => String(cells[i] ?? '').trim())
        }).filter(row => row.some(Boolean))
      : []
    columns = nextColumns
    rows = nextRows.length ? nextRows : Array.from({ length: 12 }, () => Array.from({ length: columns.length }, () => ''))
    if (result?.description) description = String(result.description)
    midItems     = uniqueInts(result?.midterm_items ?? result?.midtermObjectiveItems)
    betweenItems = uniqueInts(result?.between_items ?? result?.betweenObjectiveItems)
    finalItems   = uniqueInts(result?.final_items   ?? result?.finalObjectiveItems)
    const opts = objectiveOptions()
    const half = Math.ceil(opts.length / 2)
    if (!midItems.length)     midItems     = opts.slice(0, Math.min(3, half))
    if (!betweenItems.length) betweenItems = opts.slice(0, Math.min(4, opts.length))
    if (!finalItems.length)   finalItems   = opts.slice(-Math.min(3, opts.length))
  }

  const buildDocFromCurriculum = records => {
    const hasOutcome = records.some(r => String(r.learning_outcome_text ?? '').trim())
    if (hasOutcome) {
      return {
        source: 'curriculum',
        columns: ['ผลการเรียนรู้'],
        rows: records.map((r, i) => [`${r.item_no ?? i + 1}.${r.learning_outcome_text ?? r.indicator_text ?? r.standard_text ?? ''}`]),
        description,
        midterm_items: records.slice(0, Math.ceil(records.length / 2)).map((_, i) => i + 1),
        final_items: records.slice(Math.ceil(records.length / 2)).map((_, i) => i + 1 + Math.ceil(records.length / 2)),
      }
    }
    return {
      source: 'curriculum',
      columns: ['มาตรฐานการเรียนรู้', 'ตัวชี้วัด'],
      rows: records.map((r, i) => [
        `${r.item_no ?? i + 1}.) ${r.standard_code || r.standard_text || ''}`.trim(),
        r.indicator_text || r.learning_outcome_text || '',
      ]),
      description,
      midterm_items: records.slice(0, Math.ceil(records.length / 2)).map((_, i) => i + 1),
      final_items: records.slice(Math.ceil(records.length / 2)).map((_, i) => i + 1 + Math.ceil(records.length / 2)),
    }
  }

  const generateDocWithGemini = async () => {
    const geminiKey = _resolveGeminiKey(cfg, teacher)
    if (!geminiKey) throw new Error('ยังไม่ได้ตั้งค่า Gemini API Key ในหน้าแอดมิน')
    const L = i18n()
    const isExtra = columns.length === 1 || (course.subject_group && !['ACDM', 'AGM'].includes(course.subject_group))
    const colNames = isExtra ? L.colsExtra : L.colsBasic
    const tableMode = isExtra
      ? `single column named "${colNames[0]}"`
      : `two columns named "${colNames[0]}" and "${colNames[1]}"`
    const prompt = `You are an assistant helping a teacher prepare a PP5 course-description document.
IMPORTANT: Write all generated content in ${L.aiLang}. Do not mix languages unless the source course content requires it.

ข้อมูลคอร์ส:
- ชื่อวิชา: ${course.subject_name || ''}
- รหัสวิชา: ${course.subject_code || ''}
- ชั้น: ${course.grade_level || ''}
- กลุ่มสาระ: ${deptThai || course.dept || ''}
- หน่วยกิต: ${course.credit || ''}
- เรื่อง/บทที่สอน: ${topicList.filter(Boolean).join(', ') || 'ไม่ระบุ'}

งาน:
1. ร่างคำอธิบายรายวิชาสั้น กระชับ เป็นทางการ ในภาษาเป้าหมาย
2. สร้างรายการในตารางตามรูปแบบนี้: ${tableMode}
3. สร้างประมาณ 5-8 ข้อที่ใช้เป็นตัวเลือกข้อจุดประสงค์วัดผล
4. เลือกข้อสำหรับกลางภาคและปลายภาคอย่างเหมาะสม

Return JSON object เท่านั้น:
{
  "description": "...",
  "columns": ["..."],
  "rows": [["..."], ["..."]],
  "midterm_items": [1,2],
  "final_items": [3,4,5]
}`

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/${cfg.geminiModel || 'gemini-2.5-flash'}:generateContent?key=${geminiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
      }
    )
    const json = await res.json()
    if (json.error) throw new Error(`Gemini: ${json.error.message ?? json.error.status}`)
    const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
    const match = text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/)
    const jsonStr = match ? (match[1] ?? match[0]) : null
    if (!jsonStr) throw new Error('AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง')
    return JSON.parse(jsonStr)
  }

  const openPicker = kind => {
    syncFromDom()
    const current = kind === 'mid' ? midItems : kind === 'between' ? betweenItems : finalItems
    const currentExtra = kind === 'mid' ? midExtra : kind === 'between' ? betweenExtra : finalExtra
    const opts = objectiveOptions()
    if (!opts.length) { showToast('กรุณาพิมพ์รายการในตารางก่อน', 'warning'); return }
    document.getElementById('cd2-picker')?.remove()
    const L = i18n()
    const accents = { mid:'accent-emerald-600', between:'accent-blue-600', final:'accent-purple-600' }
    const okCls   = { mid:'bg-emerald-600 hover:bg-emerald-700', between:'bg-blue-600 hover:bg-blue-700', final:'bg-purple-600 hover:bg-purple-700' }
    // preview: ข้อความแรกสุดที่ไม่ว่างของแถวนั้น ตัดที่ 30 ตัวอักษร
    const rowPreview = n => {
      const cell = (rows[n - 1] ?? []).find(c => String(c ?? '').trim())
      const txt = String(cell ?? '').trim()
      return txt.length > 30 ? txt.slice(0, 30) + '…' : txt
    }
    const picker = document.createElement('div')
    picker.id = 'cd2-picker'
    picker.className = 'fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-4'
    picker.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden" dir="${L.dir}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-800">${L.pickerTitles[kind]}</h3>
          <button id="cd2-picker-close" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
        </div>
        <div class="p-4 space-y-2 max-h-[45vh] overflow-y-auto">
          ${opts.map(n => `
            <label class="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2.5 hover:bg-gray-50 cursor-pointer">
              <input type="checkbox" class="cd2-choice ${accents[kind]} w-4 h-4 flex-shrink-0" value="${n}" ${current.includes(n) ? 'checked' : ''}>
              <span class="text-sm font-bold text-gray-700 w-5 flex-shrink-0">${n}.</span>
              <span class="text-xs text-gray-500 leading-snug line-clamp-2">${_htmlEsc(rowPreview(n))}</span>
            </label>`).join('')}
        </div>
        <div class="px-4 pt-3 pb-2 border-t border-gray-100">
          <p class="text-xs font-semibold text-gray-500 mb-1.5">พิมพ์เพิ่มเติม <span class="font-normal text-gray-400">(เช่น 4, 5 หรือข้อความอิสระ)</span></p>
          <textarea id="cd2-picker-extra" rows="2"
            class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="พิมพ์ข้อที่เพิ่มเติม หรือข้อความอื่น…">${_htmlEsc(currentExtra)}</textarea>
        </div>
        <div class="px-5 py-3 border-t border-gray-100 flex justify-end gap-2">
          <button id="cd2-picker-cancel" class="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 text-sm">${L.pickerCancel}</button>
          <button id="cd2-picker-ok" class="px-5 py-2 rounded-xl ${okCls[kind]} text-white text-sm font-semibold">${L.pickerOk}</button>
        </div>
      </div>`
    document.body.appendChild(picker)
    const close = () => picker.remove()
    picker.querySelector('#cd2-picker-close').addEventListener('click', close)
    picker.querySelector('#cd2-picker-cancel').addEventListener('click', close)
    picker.querySelector('#cd2-picker-ok').addEventListener('click', () => {
      const picked = [...picker.querySelectorAll('.cd2-choice:checked')].map(el => Number(el.value))
      const extra  = picker.querySelector('#cd2-picker-extra').value.trim()
      if (kind === 'mid')     { midItems = picked;     midExtra = extra }
      else if (kind === 'between') { betweenItems = picked; betweenExtra = extra }
      else                   { finalItems = picked;   finalExtra = extra }
      close(); render()
    })
  }

  const wireEvents = () => {
    const L = i18n()
    modal.querySelectorAll('.cd2-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        syncFromDom()
        lang = btn.dataset.lang || 'th'
        textDir = COURSE_DOC_LANGS[lang]?.dir || 'ltr'
        render()
      })
    })
    modal.querySelector('#cd2-close').addEventListener('click', () => modal.remove())
    modal.querySelector('#cd2-dir').addEventListener('change', e => {
      syncFromDom()
      textDir = e.target.value
      render()
    })
    // ── ค้นหลักสูตรแกนกลาง (DB เท่านั้น) ─────────────────────────────────────
    modal.querySelector('#cd2-search-curriculum').addEventListener('click', async () => {
      syncFromDom()
      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim())) || description.trim()
      if (hasContent && !confirm(L.confirmOverwrite)) return
      const btn = modal.querySelector('#cd2-search-curriculum')
      btn.disabled = true; btn.innerHTML = `⏳ ${L.btnCurriculumLoading}`
      try {
        const records = await findCurriculumStandards({
          subjectName: course.subject_name,
          subjectCode: course.subject_code,
          gradeLevel: course.grade_level,
          dept: deptThai,
          topic: topicList.filter(Boolean).join(' '),
        })
        if (records.length) {
          applyGeneratedDoc(buildDocFromCurriculum(records))
          aiStatusText = L.toastSearchOk(records.length)
        } else {
          aiStatusText = L.toastSearchEmpty
        }
        render()
      } catch (err) {
        showToast('ค้นหลักสูตรไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false; btn.innerHTML = `🔍 ${L.btnCurriculum}`
      }
    })

    // ── ให้ AI ร่าง (Gemini เท่านั้น) ─────────────────────────────────────────
    modal.querySelector('#cd2-auto-fill').addEventListener('click', async () => {
      syncFromDom()
      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim())) || description.trim()
      if (hasContent && !confirm(L.confirmAIOverwrite)) return
      const btn = modal.querySelector('#cd2-auto-fill')
      btn.disabled = true; btn.innerHTML = `⏳ ${L.btnAILoading}`
      try {
        const generated = await generateDocWithGemini()
        applyGeneratedDoc(generated)
        aiStatusText = L.toastAIDone
        render()
      } catch (err) {
        showToast('AI ร่างไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.disabled = false; btn.innerHTML = `✨ ${L.btnAI}`
      }
    })
    // ── อัปโหลดรูป → Gemini Vision อ่านตาราง ────────────────────────────────
    modal.querySelector('#cd2-img-input').addEventListener('change', async e => {
      const file = e.target.files?.[0]; if (!file) return
      const geminiKey = _resolveGeminiKey(cfg, teacher)
      if (!geminiKey) { showToast('กรุณาตั้งค่า Gemini API Key ในหน้าแอดมิน', 'error'); return }

      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim())) || description.trim()
      if (hasContent && !confirm(L.confirmImgOverwrite)) {
        e.target.value = ''; return
      }

      const btn = modal.querySelector('#cd2-img-btn')
      btn.textContent = `⏳ ${L.btnImgLoading}`

      try {
        // แปลงรูปเป็น base64
        const base64 = await new Promise((res, rej) => {
          const reader = new FileReader()
          reader.onload = () => res(reader.result.split(',')[1])
          reader.onerror = rej
          reader.readAsDataURL(file)
        })

        const isExtra = columns.length === 1 || (course.subject_group && !['ACDM', 'AGM'].includes(course.subject_group))
        const colNames = isExtra ? L.colsExtra : L.colsBasic
        const tableMode = isExtra
          ? `single column named "${colNames[0]}"`
          : `two columns named "${colNames[0]}" and "${colNames[1]}"`

        const prompt = `You are a teacher assistant. Read this image, which may be a textbook page, curriculum document, or PP5 table.
Output language: ${L.aiLang}
ข้อมูลรายวิชา: "${course.subject_name ?? ''}" รหัส ${course.subject_code ?? ''} ชั้น ${course.grade_level ?? ''} กลุ่มสาระ ${deptThai}

สกัดข้อมูลต่อไปนี้จากรูป:
1. คำอธิบายรายวิชา / ผลการเรียนรู้ภาพรวม (ถ้ามี) ในภาษาเป้าหมาย
2. รายการมาตรฐานการเรียนรู้ / ตัวชี้วัด / ผลการเรียนรู้ (${tableMode})
3. แนะนำข้อที่ควรวัดผลกลางภาคและปลายภาค

ตอบเป็น JSON เท่านั้น (ไม่มีข้อความอื่น):
{
  "description": "...",
  "columns": ${JSON.stringify(colNames)},
  "rows": [["...", "..."]],
  "midterm_items": [1,2,3],
  "final_items": [4,5,6]
}`

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/${cfg.geminiModel || 'gemini-2.5-flash'}:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [
                  { text: prompt },
                  { inline_data: { mime_type: file.type || 'image/jpeg', data: base64 } },
                ]
              }]
            }),
          }
        )
        const json = await res.json()
        if (json.error) throw new Error(`Gemini: ${json.error.message ?? json.error.status}`)
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
        const match = text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/)
        const jsonStr = match ? (match[1] ?? match[0]) : null
        if (!jsonStr) throw new Error('AI ตอบกลับในรูปแบบที่ไม่ถูกต้อง')
        applyGeneratedDoc(JSON.parse(jsonStr))
        aiStatusText = L.toastImgDone
        render()
      } catch (err) {
        showToast('อ่านรูปไม่สำเร็จ: ' + (err.message ?? ''), 'error')
      } finally {
        btn.textContent = `📷 ${L.btnImg}`
        e.target.value = ''
      }
    })

    const applyTemplate = nextColumns => {
      syncFromDom()
      const hasContent = rows.some(row => row.some(cell => String(cell ?? '').trim()))
      if (hasContent && !confirm(L.confirmColChange)) return
      const oldRows = rows
      columns = nextColumns
      rows = oldRows.map(row => {
        if (nextColumns.length === 1) return [row.filter(Boolean).join(' ').trim()]
        return Array.from({ length: nextColumns.length }, (_, i) => row[i] ?? '')
      })
      if (!rows.length) rows = Array.from({ length: 12 }, () => Array.from({ length: columns.length }, () => ''))
      render()
    }
    modal.querySelector('#cd2-template-basic').addEventListener('click', () => {
      applyTemplate(L.colsBasic)
    })
    modal.querySelector('#cd2-template-extra').addEventListener('click', () => {
      applyTemplate(L.colsExtra)
    })
    modal.querySelector('#cd2-add-col').addEventListener('click', () => {
      syncFromDom()
      columns.push(L.colNew(columns.length + 1))
      rows = rows.map(row => [...row, ''])
      render()
    })
    modal.querySelector('#cd2-add-row').addEventListener('click', () => {
      syncFromDom()
      rows.push(Array.from({ length: columns.length }, () => ''))
      render()
    })
    modal.querySelectorAll('.cd2-del-col').forEach(btn => btn.addEventListener('click', () => {
      syncFromDom()
      const idx = Number(btn.dataset.delCol)
      columns.splice(idx, 1)
      rows = rows.map(row => row.filter((_, i) => i !== idx))
      render()
    }))
    modal.querySelectorAll('.cd2-del-row').forEach(btn => btn.addEventListener('click', () => {
      syncFromDom()
      const idx = Number(btn.dataset.delRow)
      rows.splice(idx, 1)
      const adj = items => items.filter(n => n !== idx + 1).map(n => n > idx + 1 ? n - 1 : n)
      midItems = adj(midItems); betweenItems = adj(betweenItems); finalItems = adj(finalItems)
      render()
    }))
    modal.querySelector('#cd2-pick-mid').addEventListener('click',     () => openPicker('mid'))
    modal.querySelector('#cd2-pick-between').addEventListener('click', () => openPicker('between'))
    modal.querySelector('#cd2-pick-final').addEventListener('click',   () => openPicker('final'))

    // ── topic เพิ่ม/ลบ ─────────────────────────────────────────────────────
    modal.querySelector('#cd2-add-topic').addEventListener('click', () => {
      syncFromDom()
      topicList.push('')
      render()
    })
    modal.querySelectorAll('.cd2-topic-del').forEach(btn => {
      btn.addEventListener('click', () => {
        syncFromDom()
        topicList.splice(Number(btn.dataset.idx), 1)
        if (!topicList.length) topicList = ['']
        render()
      })
    })

    modal.querySelector('#cd2-save').addEventListener('click', async () => {
      const { desc, signer } = syncFromDom()
      const btn = modal.querySelector('#cd2-save')
      btn.disabled = true
      btn.textContent = L.saving
      try {
        await saveCourseDocPage2(course.id, {
          description: desc,
          table_columns: columns.map((c, i) => c.trim() || L.colNew(i + 1)),
          table_rows: rows.map(row => row.slice(0, columns.length)),
          topic_list: topicList.filter(Boolean),
          midterm_objective_items: midItems,
          between_objective_items: betweenItems,
          final_objective_items: finalItems,
          midterm_objective_extra: midExtra,
          between_objective_extra: betweenExtra,
          final_objective_extra: finalExtra,
          signer_name: signer.trim() || null,
          text_direction: textDir,
          updated_by: teacher?.id ?? null,
        })
        showToast(L.toastSaved, 'success')
        modal.remove()
      } catch (err) {
        showToast('บันทึกไม่สำเร็จ: ' + (err.message ?? ''), 'error')
        btn.disabled = false
        btn.textContent = L.save
      }
    })
  }

  render()
}

// ─── Course Registration Form (2.1) ──────────────────────────────────────────

export async function renderCourseForm(teacher, onSave, editData = null) {
  setActiveNav('my-courses')
  setTitle(editData ? 'แก้ไขคอร์สวิชา' : 'ลงทะเบียนเปิดคอร์ส')

  const [depts, teachers] = await Promise.all([
    getDepartments().catch(()=>[]),
    getTeachers().catch(()=>[]),
  ])

  // unique dept rows — deduplicate by id (ไม่ใช้ dept_code เพราะ SOC มี 2 แถว: สังคมฯ + อิญติมาอียะห์)
  const uniqueDepts = [...new Map(depts.map(d=>[d.id,d])).values()]

  // filter กลุ่มวิชา options by teacher.category
  const teacherCat = teacher?.category ?? ''  // 'สามัญ' | 'ศาสนา' | ''
  const ALL_SUBGROUPS = [
    { value: 'ACDM',    label: 'สามัญมัธยม (ACDM)',   cat: 'สามัญ' },
    { value: 'AGM',     label: 'ศาสนามัธยม (AGM)',    cat: 'ศาสนา' },
    { value: 'ACDMVOC', label: 'สามัญปวช (ACDMVOC)',  cat: 'สามัญ' },
    { value: 'AGMVOC',  label: 'ศาสนาปวช (AGMVOC)',  cat: 'ศาสนา' },
  ]
  const visibleSubgroups = teacherCat
    ? ALL_SUBGROUPS.filter(s => s.cat === teacherCat)
    : ALL_SUBGROUPS

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
            ${visibleSubgroups.map(s=>`<option value="${s.value}" ${editData?.subject_group===s.value?'selected':''}>${s.label}</option>`).join('')}
          </select>
        </div>
        <!-- กลุ่มสาระ -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">
            กลุ่มสาระการเรียนรู้ <span class="text-red-400">*</span>
          </label>
          <select id="cf-dept" class="${SELECT_CLS}">
            ${_deptOptions(editData?.subject_group ? _filterDepts(editData.subject_group) : (teacherCat ? uniqueDepts.filter(d=>d.category===teacherCat) : uniqueDepts), editData?.dept??'')}
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

export async function renderProfile(teacher, homeroomRooms = [], onRefresh) {
  setActiveNav('profile')
  setTitle('โปรไฟล์ของฉัน')

  // โหลด departments + ห้องทั้งหมด
  const [depts, allSamaiRooms, allReligionRooms] = await Promise.all([
    getDepartments().catch(()=>[]),
    getUniqueRooms().catch(()=>[]),
    getUniqueReligionRooms().catch(()=>[]),
  ])

  // filter ก่อน dedup — เพื่อกัน SOC ของศาสนาไม่ให้ทับ SOC ของสามัญ (dept_code ซ้ำกัน)
  const teacherCat = teacher?.category
  const filtered = teacherCat
    ? depts.filter(d => !d.category || d.category === teacherCat)
    : depts
  const filteredDepts = [...new Map(filtered.map(d=>[d.dept_code,d])).values()]

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
          <label class="block text-sm font-medium text-gray-700 mb-1">อีเมลติดต่อ</label>
          <input id="prof-email" type="email" value="${teacher?.login_email || teacher?.auth_email || ''}" class="${INPUT_CLS}" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้เป็นค่าเริ่มต้นตอนแชร์ไฟล์ Google Sheet และสำหรับการแจ้งเตือนในอนาคต (บันทึกได้ทันที)</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยูเซอร์เนมส่วนตัว</label>
          <input id="prof-username" type="text" value="${teacher?.username??''}" placeholder="เช่น hambal.waji"
            class="${INPUT_CLS} font-mono lowercase" />
          <p class="text-[11px] text-gray-400 mt-1">ใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร เพื่อใช้ล็อกอินแทนอีเมลได้</p>
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
        <!-- ห้องที่ปรึกษา -->
        <div class="border-t border-gray-100 pt-4">
          <label class="block text-sm font-semibold text-gray-700 mb-3">🏠 ห้องที่ปรึกษา</label>
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ห้องสามัญ</label>
              <select id="prof-room-samai" class="${SELECT_CLS}">
                <option value="">— ไม่ได้เป็นครูที่ปรึกษาสามัญ —</option>
                ${allSamaiRooms.map(r => `<option value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='สามัญ')?'selected':''}>${r}</option>`).join('')}
              </select>
            </div>
            <div>
              <label class="block text-xs font-medium text-gray-500 mb-1">ห้องศาสนา</label>
              <select id="prof-room-religion" class="${SELECT_CLS}">
                <option value="">— ไม่ได้เป็นครูที่ปรึกษาศาสนา —</option>
                ${allReligionRooms.map(r => `<option value="${r}" ${homeroomRooms.find(h=>h.main_room===r&&h.category==='ศาสนา')?'selected':''}>${r}</option>`).join('')}
              </select>
            </div>
          </div>
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

    <!-- เปลี่ยนรหัสผ่าน -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 mt-4">
      <h3 class="font-bold text-gray-800 mb-4">🔒 เปลี่ยนรหัสผ่าน</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">รหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-new" type="password" placeholder="อย่างน้อย 6 ตัวอักษร" class="${INPUT_CLS}" autocomplete="new-password" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ยืนยันรหัสผ่านใหม่ <span class="text-red-400">*</span></label>
          <input id="prof-pw-confirm" type="password" placeholder="พิมพ์ซ้ำอีกครั้ง" class="${INPUT_CLS}" autocomplete="new-password" />
        </div>
        <button id="prof-pw-save"
          class="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition">
          บันทึกรหัสผ่านใหม่
        </button>
      </div>
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
      const username = document.getElementById('prof-username').value.trim().toLowerCase()
      const email = document.getElementById('prof-email').value.trim()
      if (username && !/^[a-z0-9._-]{3,32}$/.test(username)) {
        showToast('ยูเซอร์เนมต้องใช้ a-z, 0-9, จุด, ขีดกลาง หรือขีดล่าง 3-32 ตัวอักษร', 'warning')
        btn.disabled = false; btn.textContent = 'บันทึก'
        return
      }
      const payload = {
        full_name:     name,
        phone:         document.getElementById('prof-phone').value.trim() || null,
        dept:          deptVal,
        subject_group: subgEl?.value || null,
        username:      username || null,
        login_email:   email || null,
      }
      const photoFile = document.getElementById('prof-photo-file').files?.[0]
      if (photoFile) payload.image_url = await uploadTeacherPhoto(teacher.id, photoFile)
      await updateMyProfile(teacher.id, payload)

      // บันทึกห้องที่ปรึกษา
      const { upsertHomeroomTeacher, getSystemConfig: _cfg } = await import('./api.js')
      const cfg = await _cfg().catch(()=>({}))
      const curYear = parseInt(cfg.academicYear ?? new Date().getFullYear() + 543)
      const curSem  = parseInt(cfg.semester ?? 1)
      const roomSamai   = document.getElementById('prof-room-samai').value || null
      const roomReligion = document.getElementById('prof-room-religion').value || null
      const saveRoom = async (room, category) => {
        if (room) {
          await upsertHomeroomTeacher({ teacher_id: teacher.id, main_room: room, category, academic_year: curYear, semester: curSem })
        }
      }
      await Promise.all([saveRoom(roomSamai, 'สามัญ'), saveRoom(roomReligion, 'ศาสนา')])

      showToast('บันทึกโปรไฟล์สำเร็จ','success')
      if (onRefresh) await onRefresh(teacher.profile_id)
    } catch (err) {
      showToast('บันทึกไม่สำเร็จ: '+(err.message??''),'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึก'
    }
  })

  // เปลี่ยนรหัสผ่าน
  document.getElementById('prof-pw-save')?.addEventListener('click', async () => {
    const newPw  = document.getElementById('prof-pw-new').value
    const confPw = document.getElementById('prof-pw-confirm').value
    if (!newPw) { showToast('กรุณากรอกรหัสผ่านใหม่', 'warning'); return }
    if (newPw.length < 6) { showToast('รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร', 'warning'); return }
    if (newPw !== confPw) { showToast('รหัสผ่านไม่ตรงกัน', 'warning'); return }
    const btn = document.getElementById('prof-pw-save')
    btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
    try {
      const { error } = await supabase.auth.updateUser({ password: newPw })
      if (error) throw error
      showToast('เปลี่ยนรหัสผ่านสำเร็จ ✅', 'success')
      document.getElementById('prof-pw-new').value    = ''
      document.getElementById('prof-pw-confirm').value = ''
    } catch (err) {
      showToast('เปลี่ยนรหัสผ่านไม่สำเร็จ: ' + (err.message ?? ''), 'error')
    } finally {
      btn.disabled = false; btn.textContent = 'บันทึกรหัสผ่านใหม่'
    }
  })
}

// ─── View: Class Registration Form (2.2) ──────────────────────────────────────

const _sheetUrl = sheetId => `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/edit`
const _sheetCopyUrl = sheetId => `https://docs.google.com/spreadsheets/d/${encodeURIComponent(sheetId)}/copy`
const _extractSheetId = value => {
  const raw = String(value ?? '').trim()
  if (!raw) return ''
  const match = raw.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/) || raw.match(/^[a-zA-Z0-9_-]{20,}$/)
  return Array.isArray(match) ? (match[1] || match[0]) : ''
}

function _transparentEdgeDarkLogo(url) {
  if (!url) return Promise.resolve('')
  return new Promise(resolve => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onerror = () => resolve(url)
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        ctx.drawImage(img, 0, 0)
        const image = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const { data, width, height } = image
        const seen = new Uint8Array(width * height)
        const stack = []
        const isDark = idx => {
          const off = idx * 4
          return data[off + 3] > 0 && data[off] < 70 && data[off + 1] < 70 && data[off + 2] < 70
        }
        const push = (x, y) => {
          if (x < 0 || y < 0 || x >= width || y >= height) return
          const idx = y * width + x
          if (seen[idx] || !isDark(idx)) return
          seen[idx] = 1
          stack.push(idx)
        }
        for (let x = 0; x < width; x++) {
          push(x, 0)
          push(x, height - 1)
        }
        for (let y = 0; y < height; y++) {
          push(0, y)
          push(width - 1, y)
        }
        while (stack.length) {
          const idx = stack.pop()
          const off = idx * 4
          data[off + 3] = 0
          const x = idx % width
          const y = Math.floor(idx / width)
          push(x + 1, y)
          push(x - 1, y)
          push(x, y + 1)
          push(x, y - 1)
        }
        ctx.putImageData(image, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      } catch {
        resolve(url)
      }
    }
    img.src = url
  })
}

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
                  <button onclick="event.stopPropagation();window._copyClass(${c.id},'${c.class_name?.replace(/'/g,"\\'")||''}')"
                    class="p-1.5 text-gray-400 hover:text-violet-600 hover:bg-white/70 rounded-lg transition text-sm" title="ทำสำเนาห้องเรียน">📋</button>
                  <button onclick="event.stopPropagation();window._openCombinedEdit(${c.id})"
                    class="p-1.5 text-gray-500 hover:text-indigo-600 hover:bg-white/70 rounded-lg transition text-sm" title="แก้ไข">✏️</button>
                  <button onclick="event.stopPropagation();window._deleteClass(${c.id},'${c.class_name}')"
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
      if (!confirm(`ยืนยันลบห้องเรียน "${name}"?\nข้อมูลนักเรียน เช็คชื่อ และคะแนนในห้องนี้จะถูกลบด้วย`)) return
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
      setTitle('จัดการนักเรียน')
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
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
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
        document.getElementById('students-sync-enroll')?.addEventListener('click', async (e) => {
          const btn = e.currentTarget
          const orig = btn.textContent
          btn.disabled = true
          btn.textContent = 'กำลังรีเฟรช...'
          try {
            await autoEnrollStudentsByRoom()
            showToast('รีเฟรชรายชื่อสำเร็จ', 'success')
            window._openStudentManager(classId)
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
            modal.innerHTML = `<div class="flex-1 flex items-center justify-center p-6">
              <div class="w-full max-w-md text-center">
                <div class="mx-auto mb-5 w-20 h-20 rounded-full flex items-center justify-center text-4xl ${nextActive ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}">
                  ${nextActive ? '✓' : '−'}
                </div>
                <h3 class="text-2xl font-bold text-gray-800">${nextActive ? 'เปิดสถานะกำลังเรียน?' : 'ปิดสถานะกำลังเรียน?'}</h3>
                <p class="mt-3 text-gray-500">${_htmlEsc(studentName)}</p>
                <p class="mt-2 text-sm text-gray-400">${nextActive ? 'นักเรียนจะกลับมาอยู่ในเช็คชื่อ/ใบรายชื่อของรายวิชานี้' : 'นักเรียนจะไม่ถูกนำไปเช็คชื่อหรือใบรายชื่อของรายวิชานี้'}</p>
                <div class="mt-8 grid grid-cols-2 gap-3">
                  <button id="student-status-cancel" class="py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50">ยกเลิก</button>
                  <button id="student-status-ok" class="py-3 rounded-xl text-white font-semibold ${nextActive ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gray-700 hover:bg-gray-800'}">ยืนยัน</button>
                </div>
              </div>
            </div>`
            document.body.appendChild(modal)
            modal.querySelector('#student-status-cancel').addEventListener('click', () => modal.remove())
            modal.querySelector('#student-status-ok').addEventListener('click', async () => {
              try {
                await updateClassStudentActive(el.dataset.enrollmentId, nextActive)
                showToast('อัปเดตสถานะนักเรียนแล้ว', 'success')
                modal.remove()
                refresh()
              } catch (err) {
                showToast('อัปเดตสถานะไม่สำเร็จ: ' + (err.message ?? ''), 'error')
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
      m.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40'
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
      m.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40'
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
      m.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40'
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
  } catch { showToast('โหลดข้อมูลห้องเรียนไม่สำเร็จ', 'error') }

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
          <button onclick="window._deleteClass(${classId},'${_htmlEsc(cls.class_name??'')}')"
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
    window._deleteClass = async (cid, name) => {
      if (!confirm(`ยืนยันลบห้องเรียน "${name}"?`)) return
      try {
        await deleteClass(cid); showToast(`ลบ "${name}" แล้ว`, 'success')
        renderMyClasses(teacher)
      } catch (err) { showToast('ลบไม่สำเร็จ', 'error') }
    }

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
      const _savedMain = _realMainContent
      _realMainContent = currentBox
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
        _realMainContent = _savedMain
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
      <p id="cem-info-status" class="hidden text-xs font-medium text-emerald-600"></p>
    </div>`
  }

  // linked IDs ที่บันทึกใน DB แล้ว (อย่าแก้ไขโดยตรง)
  const currentLinked = new Set(linkedIds)
  // pending state — เปลี่ยนได้จากการคลิก, save เมื่อกดปุ่ม
  const pendingLinked = new Set(linkedIds)

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
          bg-gray-100 opacity-50" style="min-height:52px;border-left:3px solid #9ca3af" title="ใช้กับ: ${otherName}">
          <p class="font-bold text-[11px] leading-tight text-gray-400 break-words w-full">${subj}</p>
          ${room ? `<p class="text-[10px] text-gray-400 leading-tight w-full">${room}</p>` : ''}
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
          // คาบนี้ถูกใช้กับห้องอื่น — ถามยืนยัน
          const others = (linksBySchedule[sid] ?? []).filter(cid => cid !== cls.id)
          const otherName = others.map(cid => classById[cid]?.class_name ?? `ห้อง ${cid}`).join(', ')
          const p = periodMap[entry.period_no]
          const timeStr = p?.start_time ? p.start_time.slice(0,5) : `คาบ ${entry.period_no}`
          const cfm = document.createElement('div')
          cfm.className = 'fixed inset-0 z-[600] flex items-center justify-center bg-black/50 p-4'
          cfm.innerHTML = `
            <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 text-center">
              <div class="text-2xl mb-2">⚠️</div>
              <p class="font-bold text-gray-800 mb-1">คาบนี้ถูกเลือกแล้ว</p>
              <p class="text-sm text-gray-500 mb-1">${DAY_TH[entry.day_of_week]} ${timeStr} · ${_htmlEsc(entry.subject_name ?? '')}</p>
              <p class="text-xs text-amber-600 mb-4">ปัจจุบันเชื่อมกับ: <b>${otherName}</b><br>ต้องการย้ายมาใช้กับ <b>${_htmlEsc(cls.class_name)}</b> แทนไหม?</p>
              <div class="flex gap-3">
                <button class="cfm-cancel flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600">ยกเลิก</button>
                <button class="cfm-ok flex-1 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold">ย้ายมาที่นี่</button>
              </div>
            </div>`
          document.body.appendChild(cfm)
          cfm.querySelector('.cfm-cancel').addEventListener('click', () => cfm.remove())
          cfm.querySelector('.cfm-ok').addEventListener('click', async () => {
            cfm.remove()
            try {
              await linkClassToSchedule(cls.id, sid)
              pendingLinked.add(sid); currentLinked.add(sid)
              _hasChanges = true; _refreshCell(cell)
              showToast('เชื่อมตารางสอนแล้ว ✅', 'success')
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

const ATT_STATUS = {
  present: { label: 'ม', color: 'text-emerald-600 font-bold', bg: 'bg-emerald-50' },
  absent:  { label: 'ข', color: 'text-red-600 font-bold',     bg: 'bg-red-50' },
  late:    { label: 'ส', color: 'text-amber-500 font-bold',   bg: 'bg-amber-50' },
  excused: { label: 'ก', color: 'text-blue-500 font-bold',    bg: 'bg-blue-50' },
  sick:    { label: 'ป', color: 'text-orange-500 font-bold',  bg: 'bg-orange-50' },
}

const ATT_CYCLE = [null, 'present', 'absent', 'late', 'excused', 'sick']

function _generateSessions(classData, credit, dowPattern = null) {
  const total = Math.round((credit ?? 1) * 2 * 20)
  const bases = ['day1_date','day2_date','day3_date','day4_date','day5_date','day6_date']
    .map(k => classData[k]).filter(Boolean).map(d => _parseDateOnly(d)).filter(Boolean)
    .sort((a, b) => a - b)
  if (!bases.length) return []

  const sessions = []

  // Sessions 1–6: ใช้ base dates ที่ครูตั้งเอง (รวม manual adjustment ของ week 1)
  for (const base of bases) {
    if (sessions.length >= total) break
    sessions.push({ n: sessions.length + 1, date: new Date(base), ds: _dateInputValue(base) })
  }
  if (sessions.length >= total) return sessions

  const lastBase = bases[bases.length - 1]

  // fallback: ไม่มี DOW pattern → ใช้ +7 แบบเดิม
  if (!dowPattern || !dowPattern.length) {
    let cycle = 1
    while (sessions.length < total) {
      for (const base of bases) {
        if (sessions.length >= total) break
        const d = new Date(base)
        d.setDate(d.getDate() + cycle * 7)
        sessions.push({ n: sessions.length + 1, date: d, ds: _dateInputValue(d) })
      }
      cycle++
    }
    return sessions
  }

  // DOW-aware: ต่อจาก bases โดยใช้ true weekly pattern
  // หา Sunday ของสัปดาห์ที่ lastBase อยู่ (สัปดาห์โรงเรียนเริ่มวันอาทิตย์)
  const lastWeekSun = new Date(lastBase)
  lastWeekSun.setDate(lastWeekSun.getDate() - lastWeekSun.getDay())
  lastWeekSun.setHours(0, 0, 0, 0)
  const lastWeekSunTs = lastWeekSun.getTime()
  const weekMs = 7 * 24 * 60 * 60 * 1000

  // นับ DOW ที่มีอยู่แล้วใน bases ของสัปดาห์สุดท้าย
  const usedCounts = {}
  for (const base of bases) {
    if (base.getTime() >= lastWeekSunTs && base.getTime() < lastWeekSunTs + weekMs) {
      const dow = base.getDay()
      usedCounts[dow] = (usedCounts[dow] || 0) + 1
    }
  }

  // นับ DOW ที่ pattern ต้องการต่อสัปดาห์
  const patternCounts = {}
  for (const dow of dowPattern) patternCounts[dow] = (patternCounts[dow] || 0) + 1

  // หา slots ที่ยังขาดใน lastWeek → เติมก่อน
  const remaining = []
  for (const [d, cnt] of Object.entries(patternCounts)) {
    const need = cnt - (usedCounts[Number(d)] || 0)
    for (let i = 0; i < need; i++) remaining.push(Number(d))
  }
  remaining.sort((a, b) => a - b)

  for (const dow of remaining) {
    if (sessions.length >= total) break
    const d = new Date(lastWeekSun)
    d.setDate(d.getDate() + dow)
    sessions.push({ n: sessions.length + 1, date: d, ds: _dateInputValue(d) })
  }

  // สัปดาห์ถัดๆ ไป: วนด้วย dowPattern เต็มๆ
  let weekOffset = 1
  while (sessions.length < total) {
    for (const dow of dowPattern) {
      if (sessions.length >= total) break
      const d = new Date(lastWeekSun)
      d.setDate(d.getDate() + weekOffset * 7 + dow)
      sessions.push({ n: sessions.length + 1, date: d, ds: _dateInputValue(d) })
    }
    weekOffset++
  }
  return sessions
}


export { renderAttendanceGrid, renderAttendance, renderLifeSkillScore, renderReadingScore, renderPrayerScore } from './teacher-views-attendance.js'
export { renderGrades, renderGradesGrid, renderRequests } from './teacher-views-grades.js'
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
      status.innerHTML = `<span class="text-red-500">❌ ${err.message ?? 'ไม่ทราบสาเหตุ'}</span><br/><span class="text-gray-400 text-xs">ดู Console เพื่อดูรายละเอียด</span>`
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
    const btn = wrap.querySelector('#vision-save')
    btn.disabled = true; btn.textContent = '⏳ กำลังบันทึก...'
    try {
      // flatten groups → entries
      const entries = []
      for (const g of groups) {
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
  const geminiKey= _resolveGeminiKey(cfg, teacher)

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
        <div class="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
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

export async function renderAnnouncementsView() {
  setActiveNav('announcements-view')
  setTitle('ประกาศ')
  const { getActiveAnnouncements } = await import('./api.js')

  setContent(`<div class="animate-fade">
    <div class="mb-6">
      <h2 class="text-xl font-bold text-gray-800">📢 ประกาศ</h2>
      <p class="text-xs text-gray-400 mt-0.5">ประกาศจากทางโรงเรียน</p>
    </div>
    <div id="ann-view-list" class="space-y-4">
      <div class="flex justify-center py-12 text-gray-400">
        <svg class="animate-spin h-5 w-5 mr-2 text-emerald-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg> กำลังโหลด...
      </div>
    </div>
  </div>`)

  const _esc = v => String(v ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  const _fmtDate = d => new Date(d).toLocaleDateString('th-TH',{dateStyle:'long'})

  try {
    const items = await getActiveAnnouncements()
    const list = document.getElementById('ann-view-list')
    if (!list) return

    if (!items.length) {
      list.innerHTML = `<div class="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center text-gray-400">
        <div class="text-5xl mb-4">📭</div>
        <p class="font-semibold text-gray-500">ยังไม่มีประกาศในขณะนี้</p>
      </div>`
      return
    }

    list.innerHTML = items.map(a => `
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        ${a.priority > 0
          ? `<div class="h-1.5 bg-gradient-to-r from-amber-400 to-orange-400"></div>`
          : `<div class="h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>`}
        <div class="p-6">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl flex-shrink-0">
              ${a.priority > 0 ? '📌' : '📢'}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-2 flex-wrap">
                ${a.priority > 0 ? `<span class="px-2.5 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">⭐ ปักหมุด</span>` : ''}
              </div>
              <h3 class="text-lg font-bold text-gray-800 mb-2">${_esc(a.title)}</h3>
              ${a.body ? `<p class="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">${_esc(a.body)}</p>` : ''}
              <p class="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
                <span>🕐</span>
                <span>${_fmtDate(a.created_at)}</span>
                ${a.teachers?.full_name ? `<span>·</span><span>📝 ${_esc(a.teachers.full_name)}</span>` : ''}
              </p>
            </div>
          </div>
        </div>
      </div>`).join('')
  } catch {
    showToast('โหลดประกาศไม่สำเร็จ', 'error')
  }
}
