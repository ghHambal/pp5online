import { supabase } from './supabase.js'

// ─── Student Profile ──────────────────────────────────────────────────────────
export async function getMyStudentProfile() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return null
  const { data, error } = await supabase
    .from('students')
    .select('id, student_code, full_name, main_room, religion_room, gender, image_url, profile_id, house_color, sports_shirt_size, can_scan_prayer')
    .eq('profile_id', session.user.id)
    .maybeSingle()
  if (error) throw error
  return data
}

// ─── Enrolled Classes ─────────────────────────────────────────────────────────
export async function getMyEnrolledClasses(studentId) {
  const { data: rpcClasses, error: rpcErr } = await supabase
    .rpc('get_student_enrolled_classes', { p_student_id: studentId })
  if (!rpcErr && Array.isArray(rpcClasses) && rpcClasses.length) {
    return rpcClasses
  }

  const { data, error } = await supabase
    .from('class_students')
    .select(`
      class_id,
      classes (
        id, class_name, skill_group, google_sheet_id,
        day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
        master_subjects (
          id, subject_code, subject_name, dept, grade_level, credit, teacher_id, subject_group,
          teachers ( id, full_name, phone, image_url, category )
        )
      )
    `)
    .eq('student_id', studentId)
  if (!error) {
    const classes = (data ?? []).map(r => r.classes).filter(Boolean)
    if (classes.length) return classes
  }

  // Fallback for the student portal: if a deep PostgREST embed fails or returns
  // null nested rows, keep the page useful by loading the class rows directly.
  const { data: enrollments, error: enrollErr } = await supabase
    .from('class_students')
    .select('class_id')
    .eq('student_id', studentId)
  if (enrollErr) throw (error ?? enrollErr)

  const classIds = [...new Set((enrollments ?? []).map(r => r.class_id).filter(Boolean))]
  if (!classIds.length) {
    if (error) throw error
    return []
  }

  const { data: classes, error: classErr } = await supabase
    .from('classes')
    .select(`
      id, class_name, skill_group, google_sheet_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects (
        id, subject_code, subject_name, dept, grade_level, credit, teacher_id, subject_group,
        teachers ( id, full_name, phone, image_url, category )
      )
    `)
    .in('id', classIds)
  if (classErr) throw (error ?? classErr)
  return classes ?? []
}

// ─── Scores ───────────────────────────────────────────────────────────────────
export async function getMyScores(studentId, classId) {
  const { data: cols } = await supabase
    .from('class_score_columns')
    .select('id, assignment_name, assignment_type, max_score, sheet_column')
    .eq('class_id', classId)
    .order('id')
  if (!cols?.length) return { columns: [], scores: [] }

  const { data: scores, error } = await supabase
    .from('student_scores')
    .select('assignment_id, original_score, retake_score, final_score')
    .eq('student_id', studentId)
    .in('assignment_id', cols.map(c => c.id))
  if (error) throw error

  return { columns: cols ?? [], scores: scores ?? [] }
}

// ─── Attendance ───────────────────────────────────────────────────────────────
export async function getMyAttendance(studentId, classId) {
  const { data, error } = await supabase
    .from('attendances')
    .select('session_number, check_date, status')
    .eq('student_id', studentId)
    .eq('class_id', classId)
    .order('session_number')
  if (error) throw error
  return data ?? []
}

// ─── Exam Requests ────────────────────────────────────────────────────────────
export async function getMyExamRequests(studentId) {
  const { data, error } = await supabase
    .from('exam_requests')
    .select(`
      id, request_type, requested_date, requested_period_no,
      reason, status, teacher_comment, exam_attended, exam_score,
      classes ( id, class_name, master_subjects ( subject_name, subject_code ) ),
      class_score_columns ( assignment_name, max_score )
    `)
    .eq('student_id', studentId)
    .order('id', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getMissedExamCount(studentId) {
  const { count, error } = await supabase
    .from('exam_requests')
    .select('*', { count: 'exact', head: true })
    .eq('student_id', studentId)
    .eq('exam_attended', false)
  if (error) throw error
  return count ?? 0
}

export async function submitExamRequest(payload) {
  // ตรวจสอบจำนวนผิดนัดก่อนยื่น
  const missed = await getMissedExamCount(payload.student_id)
  if (missed >= 2) throw new Error('ไม่สามารถยื่นคำร้องได้ เนื่องจากผิดนัดสอบครบ 2 ครั้งแล้ว')
  const { error } = await supabase.from('exam_requests').insert(payload)
  if (error) throw error
}

export async function cancelExamRequest(id) {
  const { error } = await supabase
    .from('exam_requests')
    .delete()
    .eq('id', id)
    .eq('status', 'pending')
  if (error) throw error
}

// ─── Teacher Full Schedule (all periods) ─────────────────────────────────────
export async function getTeacherFullSchedule(teacherId, classId = null) {
  if (classId) {
    const { data, error } = await supabase
      .rpc('get_enrolled_teacher_schedule', { p_class_id: classId })
    if (!error) return data ?? []
    console.warn('get_enrolled_teacher_schedule failed, falling back to direct query:', error)
  }

  const { data, error } = await supabase
    .from('teacher_schedules')
    .select('day_of_week, period_no, span_periods, subject_id, subject_name, class_name, teacher_name')
    .eq('teacher_id', teacherId)
    .order('day_of_week')
    .order('period_no')
  if (error) throw error
  return data ?? []
}

// ─── School Periods ───────────────────────────────────────────────────────────
export async function getSchoolPeriods() {
  const { data, error } = await supabase
    .from('school_periods')
    .select('period_no, start_time, end_time')
    .order('period_no')
  if (error) throw error
  return data ?? []
}

// ─── Score Columns for a class ────────────────────────────────────────────────
export async function getScoreColumnsForClass(classId) {
  const { data, error } = await supabase
    .from('class_score_columns')
    .select('id, assignment_name, assignment_type, max_score')
    .eq('class_id', classId)
    .order('id')
  if (error) throw error
  return data ?? []
}

// ─── My Cross-System Scores ──────────────────────────────────────────────────
export async function getMyLifeSkillScores(studentId, academicYear, semester) {
  let q = supabase.from('life_skill_columns')
    .select('id, name, max_score, sheet_col, sort_order, category')
    .order('sort_order').order('id')
  if (academicYear) q = q.eq('academic_year', Number(academicYear))
  if (semester) q = q.eq('semester', Number(semester))
  const { data: columns, error: colErr } = await q
  if (colErr) throw colErr
  if (!columns?.length) return { columns: [], scores: [] }

  const { data: scores, error } = await supabase.from('life_skill_scores')
    .select('column_id, score')
    .eq('student_id', studentId)
    .in('column_id', columns.map(c => c.id))
  if (error) throw error
  return { columns, scores: scores ?? [] }
}

export async function getMyReadingScores(studentId, academicYear, semester) {
  let q = supabase.from('reading_score_columns')
    .select('id, name, max_score, sheet_col, sort_order')
    .order('sort_order').order('id')
  if (academicYear) q = q.eq('academic_year', Number(academicYear))
  if (semester) q = q.eq('semester', Number(semester))
  const { data: columns, error: colErr } = await q
  if (colErr) throw colErr
  if (!columns?.length) return { columns: [], scores: [] }

  const { data: scores, error } = await supabase.from('reading_scores')
    .select('column_id, score')
    .eq('student_id', studentId)
    .in('column_id', columns.map(c => c.id))
  if (error) throw error
  return { columns, scores: scores ?? [] }
}

export async function getMyPrayerRecords(studentId) {
  const { data, error } = await supabase.from('prayer_records')
    .select('check_date, status, week_number, location')
    .eq('student_id', studentId)
    .order('check_date')
  if (error) throw error
  return data ?? []
}

// ─── House Color ──────────────────────────────────────────────────────────────
export async function getHouseColorHex(colorName) {
  if (!colorName) return null
  const { data } = await supabase
    .from('house_groups')
    .select('color_hex, gender')
    .eq('name', colorName)
    .limit(1)
    .maybeSingle()
  return data?.color_hex ?? null
}

// ─── Daily Schedule (for overview routine widget) ─────────────────────────────
export async function getStudentDailySchedule(studentId) {
  // ดึง class_ids ทั้งหมดที่นักเรียนลงทะเบียน
  const { data: enrollment } = await supabase
    .from('class_students')
    .select('class_id, classes(id, class_name, master_subjects(subject_name, subject_code, subject_group, teachers(full_name)))')
    .eq('student_id', studentId)
  if (!enrollment?.length) return { linked: [], unlinked: [] }

  const classIds = enrollment.map(e => e.class_id)
  const classMap = Object.fromEntries(enrollment.map(e => [e.class_id, e.classes]))

  // ดึง class_schedule_links พร้อม teacher_schedules และ school_periods
  const { data: links } = await supabase
    .from('class_schedule_links')
    .select('class_id, teacher_schedules(id, day_of_week, period_no, span_periods, subject_name, class_name)')
    .in('class_id', classIds)

  const todayDow = new Date().getDay() // 0=Sun, 1=Mon, ...

  // แยก class ที่มี link และไม่มี link (ไม่สนใจว่าวันนี้มีคาบไหม)
  const hasAnyLink = new Set((links ?? []).map(l => l.class_id))

  // หาเฉพาะคาบที่ตรงกับวันนี้
  const scheduleRows = []
  for (const link of links ?? []) {
    const sched = link.teacher_schedules
    if (!sched || sched.day_of_week !== todayDow) continue
    scheduleRows.push({ classId: link.class_id, cls: classMap[link.class_id], sched })
  }

  // ดึงเวลาคาบจาก school_periods
  const { data: periods } = await supabase
    .from('school_periods')
    .select('period_no, start_time, end_time')
    .order('period_no')
  const periodMap = Object.fromEntries((periods ?? []).map(p => [p.period_no, p]))

  // class ที่ไม่เคย link ตารางสอนเลย (ไม่ใช่แค่ไม่มีคาบวันนี้)
  const unlinked = enrollment
    .filter(e => !hasAnyLink.has(e.class_id))
    .map(e => e.classes)
    .filter(Boolean)

  // เรียงตามคาบ
  const linked = scheduleRows
    .map(({ cls, sched }) => ({
      cls,
      sched,
      period: periodMap[sched.period_no] ?? null,
    }))
    .sort((a, b) => (a.sched.period_no ?? 0) - (b.sched.period_no ?? 0))

  return { linked, unlinked }
}

// ─── All Announcements for student (across all enrolled classes) ──────────────
export async function getStudentAllAnnouncements(studentId) {
  const { data: enrollment } = await supabase
    .from('class_students')
    .select('class_id, classes(id, class_name, master_subjects(subject_name, subject_code))')
    .eq('student_id', studentId)
  if (!enrollment?.length) return []

  const classIds = enrollment.map(e => e.class_id)
  const classMap = Object.fromEntries(enrollment.map(e => [e.class_id, e.classes]))

  const { data, error } = await supabase
    .from('announcements')
    .select('id, title, body, priority, ann_type, file_url, deadline_at, created_at, target_class_ids')
    .eq('is_active', true)
    .not('target_class_ids', 'is', null)
  if (error) throw error

  // กรองเฉพาะประกาศที่ target ห้องของนักเรียน และ attach ข้อมูลวิชา
  const result = []
  for (const ann of data ?? []) {
    const matchedClassId = (ann.target_class_ids ?? []).find(id => classIds.includes(id))
    if (!matchedClassId) continue
    result.push({ ...ann, cls: classMap[matchedClassId] ?? null })
  }

  // เรียง: pinned → deadline (closest) → general (newest)
  return result.sort((a, b) => {
    if ((b.priority||0) !== (a.priority||0)) return (b.priority||0) - (a.priority||0)
    const aIsDeadline = a.ann_type === 'deadline' && a.deadline_at
    const bIsDeadline = b.ann_type === 'deadline' && b.deadline_at
    if (aIsDeadline && bIsDeadline) return new Date(a.deadline_at) - new Date(b.deadline_at)
    if (aIsDeadline) return -1
    if (bIsDeadline) return 1
    return new Date(b.created_at) - new Date(a.created_at)
  })
}

// ─── GPA calculation for student ─────────────────────────────────────────────
export async function getStudentGPA(studentId) {
  const { data: enrollment } = await supabase
    .from('class_students')
    .select(`
      class_id,
      classes(id, master_subjects(
        subject_name, subject_code, credit, subject_group,
        teachers(full_name)
      ))
    `)
    .eq('student_id', studentId)
  if (!enrollment?.length) return { samai: [], sasana: [] }

  const results = await Promise.all(enrollment.map(async e => {
    const cls = e.classes
    const ms  = cls?.master_subjects
    if (!ms) return null
    const { data: cols } = await supabase
      .from('class_score_columns')
      .select('id, assignment_type, max_score')
      .eq('class_id', e.class_id)
      .not('assignment_type', 'eq', 'คะแนนพิเศษ')
    if (!cols?.length) return {
      classId: cls.id, subjectName: ms.subject_name, subjectCode: ms.subject_code,
      credit: ms.credit ?? 1, grade: null, score: null, maxScore: null,
      hasRetake: false, group: ms.subject_group, teacherName: ms.teachers?.full_name ?? '—'
    }
    const { data: scores } = await supabase
      .from('student_scores')
      .select('assignment_id, original_score, retake_score, final_score')
      .eq('student_id', studentId)
      .in('assignment_id', cols.map(c => c.id))
    const scoreMap = Object.fromEntries((scores ?? []).map(s => [s.assignment_id, s]))
    const maxTotal = cols.reduce((s, c) => s + (c.max_score || 0), 0)
    const total = cols.reduce((s, c) => {
      const sc = scoreMap[c.id]
      return s + (parseFloat(sc?.final_score ?? sc?.original_score ?? 0) || 0)
    }, 0)
    const hasRetake = (scores ?? []).some(s => s.retake_score != null)
    const pct   = maxTotal > 0 ? total / maxTotal * 100 : 0
    const grade = maxTotal > 0
      ? (pct >= 80 ? 4 : pct >= 75 ? 3.5 : pct >= 70 ? 3 : pct >= 65 ? 2.5
        : pct >= 60 ? 2 : pct >= 55 ? 1.5 : pct >= 50 ? 1 : 0)
      : null
    return {
      classId: cls.id, subjectName: ms.subject_name, subjectCode: ms.subject_code,
      credit: ms.credit ?? 1, grade, score: maxTotal > 0 ? Math.round(total) : null,
      maxScore: maxTotal, hasRetake, pct: Math.round(pct),
      group: ms.subject_group, teacherName: ms.teachers?.full_name ?? '—'
    }
  }))

  const valid = results.filter(Boolean)
  const samai  = valid.filter(r => !['AGM','AGMVOC'].includes(r.group))
  const sasana = valid.filter(r =>  ['AGM','AGMVOC'].includes(r.group))
  return { samai, sasana }
}

// ─── Class schedule links (day + period) for subject cards ───────────────────
export async function getClassSchedulesByIds(classIds) {
  if (!classIds?.length) return {}
  const { data, error } = await supabase
    .from('class_schedule_links')
    .select('class_id, teacher_schedules(day_of_week, period_no, span_periods)')
    .in('class_id', classIds)
  if (error) return {}
  const result = {}
  for (const l of data ?? []) {
    const s = l.teacher_schedules
    if (!s) continue
    if (!result[l.class_id]) result[l.class_id] = []
    result[l.class_id].push(s)
  }
  return result
}

// ─── Weekly timetable for student ────────────────────────────────────────────
export async function getStudentWeeklySchedule(studentId) {
  // ดึง enrolled classes + schedule links + periods ในครั้งเดียว
  const { data: enrollment } = await supabase
    .from('class_students')
    .select(`
      class_id,
      classes(id, class_name,
        master_subjects(subject_name, subject_code, subject_group, credit))
    `)
    .eq('student_id', studentId)
  if (!enrollment?.length) return { slots: [], periods: [] }

  const classIds = enrollment.map(e => e.class_id)
  const classMap = Object.fromEntries(enrollment.map(e => [e.class_id, e.classes]))

  const [linksRes, periodsRes] = await Promise.all([
    supabase
      .from('class_schedule_links')
      .select('class_id, teacher_schedules(day_of_week, period_no, span_periods)')
      .in('class_id', classIds),
    supabase
      .from('school_periods')
      .select('period_no, start_time, end_time')
      .order('period_no'),
  ])

  const periods = periodsRes.data ?? []
  const slots = []  // { dow, period_no, span, cls }

  for (const link of linksRes.data ?? []) {
    const s = link.teacher_schedules
    if (!s) continue
    const cls = classMap[link.class_id]
    if (!cls) continue
    slots.push({
      dow:      s.day_of_week,
      periodNo: s.period_no,
      span:     s.span_periods ?? 1,
      cls,
    })
  }

  return { slots, periods }
}

// ─── Scanner Roster & Sync ──────────────────────────────────────────────────
export async function getScannerRoster() {
  let all = []
  let page = 0
  const PAGE_SIZE = 1000
  while (true) {
    const { data, error } = await supabase
      .from('students')
      .select('id, student_code, full_name, main_room, image_url, gender')
      .eq('is_active', true)
      .order('student_code')
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)
    if (error) throw error
    if (!data?.length) break
    all.push(...data)
    if (data.length < PAGE_SIZE) break
    page++
  }
  return all
}

export async function saveScannedPrayerRecords(records) {
  if (!records.length) return
  // ลบเฉพาะ record ที่ scanner เคยบันทึก (teacher_id IS NULL) — ไม่ลบ record ของครู
  for (const r of records) {
    const { error: delError } = await supabase
      .from('prayer_records')
      .delete()
      .eq('student_id', r.student_id)
      .eq('check_date', r.check_date)
      .is('teacher_id', null)
    if (delError) throw delError
  }
  
  const payloads = records.map(r => ({
    student_id: r.student_id,
    main_room: r.main_room,
    check_date: r.check_date,
    status: r.status,
    week_number: r.week_number,
    location: r.location || null,
    teacher_id: null, // บันทึกเป็น NULL สำหรับการสแกนสภานักเรียน
    scanned_by: r.scanned_by || null
  }))

  const { error } = await supabase.from('prayer_records').insert(payloads)
  if (error) throw error
}

export async function getStudentClassroomRole(mainRoom) {
  if (!mainRoom) return null
  const { data, error } = await supabase
    .from('classroom_leaders')
    .select('class_name, head_student_id, vice_head_student_id, head_cert_url, vice_head_cert_url, show_cert')
    .eq('class_name', mainRoom)
    .maybeSingle()
  if (error) throw error
  if (data && data.show_cert === false) {
    data.head_cert_url = null
    data.vice_head_cert_url = null
  }
  return data
}
