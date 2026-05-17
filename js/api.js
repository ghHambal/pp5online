import { supabase } from './supabase.js'

const STUDENT_QUERY_RANGE = [0, 9999]
const STUDENT_QUERY_PAGE_SIZE = 1000

async function _fetchAllStudents(selectColumns, configure = q => q, orderColumn = null) {
  const rows = []
  for (let from = STUDENT_QUERY_RANGE[0]; from <= STUDENT_QUERY_RANGE[1]; from += STUDENT_QUERY_PAGE_SIZE) {
    const to = Math.min(from + STUDENT_QUERY_PAGE_SIZE - 1, STUDENT_QUERY_RANGE[1])
    let q = supabase.from('students').select(selectColumns)
    q = configure(q)
    if (orderColumn) q = q.order(orderColumn)
    const { data, error } = await q.range(from, to)
    if (error) throw error
    rows.push(...(data ?? []))
    if (!data || data.length < STUDENT_QUERY_PAGE_SIZE) break
  }
  return rows
}

// ─── System Config ────────────────────────────────────────────────────────────
export async function getSystemConfig() {
  const { data, error } = await supabase
    .from('system_config')
    .select('key, value')
  if (error) throw error
  return Object.fromEntries((data ?? []).map(r => [r.key, r.value]))
}

export async function updateSystemConfig(key, value) {
  const { error } = await supabase
    .from('system_config')
    .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: 'key' })
  if (error) throw error
}

// ─── Teacher Profile (linked via profile_id) ─────────────────────────────────
export async function getMyTeacherProfile(profileId) {
  const { data, error } = await supabase
    .from('teachers')
    .select('id, teacher_code, username, login_email, full_name, phone, image_url, dept, subject_group, skill_group, staff_type, category, profile_id, position, position_dept_id, teachers_quota(total_classes_created, is_paid, package_type, paid_at)')
    .eq('profile_id', profileId)
    .maybeSingle()
  if (error) throw error
  return data
}

export async function getMyClasses(teacherId) {
  // ดึงคอร์สก่อน แล้วหา classes ที่ผูกกับคอร์สเหล่านั้น
  const subjects = teacherId
    ? await supabase.from('master_subjects').select('id').eq('teacher_id', teacherId)
    : await supabase.from('master_subjects').select('id')
  const ids = (subjects.data ?? []).map(s => s.id)
  if (!ids.length) return []

  const { data, error } = await supabase
    .from('classes')
    .select(`
      id, course_id, class_name, skill_group, google_sheet_id, gas_url, head_student_id,
      classroom_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id ),
      students ( full_name )
    `)
    .in('course_id', ids)
    .order('class_name')
  if (error) throw error
  return data ?? []
}

export async function getClassStudentCount(classId) {
  const { count } = await supabase
    .from('class_students')
    .select('*', { count: 'exact', head: true })
    .eq('class_id', classId)
  return count ?? 0
}

export async function getMySubjects(teacherId) {
  let q = supabase
    .from('master_subjects')
    .select('id, subject_code, subject_name, dept, subject_group, credit, grade_level, learning_area, teacher_id')
    .order('subject_name')
  if (teacherId) q = q.eq('teacher_id', teacherId)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

// ─── Overview Stats ───────────────────────────────────────────────────────────
export async function getStats() {
  const [
    { count: teachers },
    { count: students },
    { count: classes },
    { count: subjects },
  ] = await Promise.all([
    supabase.from('teachers').select('*',       { count: 'exact', head: true }),
    supabase.from('students').select('*',       { count: 'exact', head: true }),
    supabase.from('classes').select('*',        { count: 'exact', head: true }),
    supabase.from('master_subjects').select('*',{ count: 'exact', head: true }),
  ])
  return {
    teachers: teachers ?? 0,
    students: students ?? 0,
    classes:  classes  ?? 0,
    subjects: subjects ?? 0,
  }
}

// ─── Teachers ─────────────────────────────────────────────────────────────────
export async function getTeachers() {
  const { data, error } = await supabase
    .from('teachers')
    .select(`
      id, teacher_code, username, login_email, full_name, category, phone, image_url, profile_id,
      dept, skill_group, subject_group, staff_type,
      teachers_quota ( total_classes_created, is_paid, package_type, paid_at )
    `)
    .order('full_name')
  if (error) throw error
  return data ?? []
}

export async function getTeacherById(id) {
  const { data, error } = await supabase
    .from('teachers')
    .select('id, teacher_code, username, login_email, full_name, category, phone, image_url, profile_id')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

export async function createTeacher(payload) {
  const { error } = await supabase.from('teachers').insert(payload)
  if (error) throw error
}

export async function updateTeacher(id, payload) {
  const { error } = await supabase
    .from('teachers').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteTeacher(id) {
  const { error } = await supabase
    .from('teachers').delete().eq('id', id)
  if (error) throw error
}

export async function unlinkTeacherAccount(id) {
  const { error } = await supabase
    .from('teachers').update({ profile_id: null }).eq('id', id)
  if (error) throw error
}

// ─── Master Subjects ──────────────────────────────────────────────────────────
export async function getMasterSubjects() {
  const { data, error } = await supabase
    .from('master_subjects')
    .select('id, subject_code, subject_name, dept, subject_group, credit, grade_level, learning_area, teacher_id')
    .order('subject_code')
  if (error) throw error
  return data ?? []
}

// ─── Classes ──────────────────────────────────────────────────────────────────
export async function getClasses() {
  const { data, error } = await supabase
    .from('classes')
    .select(`
      id, class_name, skill_group, google_sheet_id, gas_url, head_student_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( subject_code, subject_name, dept, subject_group, grade_level, credit, teacher_id )
    `)
    .order('class_name')
  if (error) throw error
  return data ?? []
}

// ─── Students ─────────────────────────────────────────────────────────────────
export async function getStudents() {
  return _fetchAllStudents(
    'id, student_code, full_name, main_room, religion_room, gender, image_url, house_color, sports_shirt_size',
    q => q,
    'student_code'
  )
}

export async function updateStudent(id, payload) {
  const { error } = await supabase.from('students').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteStudent(id) {
  const { error } = await supabase.from('students').delete().eq('id', id)
  if (error) throw error
}

// ─── Homeroom Teachers ────────────────────────────────────────────────────────
export async function getHomeroomTeachers(academicYear, semester) {
  let q = supabase
    .from('homeroom_teachers')
    .select('id, main_room, category, academic_year, semester, teacher_id, teachers(full_name, teacher_code)')
    .order('main_room')
  if (academicYear) q = q.eq('academic_year', academicYear)
  if (semester)     q = q.eq('semester', semester)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function getUniqueRooms() {
  const data = await _fetchAllStudents(
    'main_room',
    q => q.not('main_room', 'is', null),
    'main_room'
  )
  return [...new Set((data ?? []).map(s => s.main_room).filter(Boolean))].sort()
}

export async function getUniqueReligionRooms() {
  const data = await _fetchAllStudents(
    'religion_room',
    q => q.not('religion_room', 'is', null),
    'religion_room'
  )
  return [...new Set((data ?? []).map(s => s.religion_room).filter(Boolean))].sort()
}

export async function getMyHomeroomRooms(teacherId) {
  if (!teacherId) return []
  const { data, error } = await supabase
    .from('homeroom_teachers')
    .select('id, main_room, category')
    .eq('teacher_id', teacherId)
  if (error) throw error
  return data ?? []
}

export async function getClassStudents(classId) {
  const { data, error } = await supabase
    .from('class_students')
    .select('is_active, students ( id, student_code, full_name, image_url, main_room, religion_room, house_color, sports_shirt_size )')
    .eq('class_id', classId)
    .order('students(student_code)')
  if (error) throw error
  return (data ?? [])
    .filter(r => r.is_active !== false)
    .map(r => r.students)
    .filter(Boolean)
}

export async function getClassRosterStudents(classId) {
  const { data, error } = await supabase
    .from('class_students')
    .select('id, is_active, students ( id, student_code, full_name, image_url, main_room, religion_room, house_color, sports_shirt_size )')
    .eq('class_id', classId)
    .order('students(student_code)')
  if (error) throw error
  return (data ?? [])
    .map(r => r.students ? {
      ...r.students,
      enrollment_id: r.id,
      is_active: r.is_active !== false,
    } : null)
    .filter(Boolean)
}

export async function getStudentByCode(studentCode) {
  const code = String(studentCode ?? '').trim()
  if (!code) return null
  const { data, error } = await supabase
    .from('students')
    .select('id, student_code, full_name, image_url, main_room, religion_room, house_color, sports_shirt_size')
    .eq('student_code', code)
    .maybeSingle()
  if (error) throw error
  return data ?? null
}

export async function addStudentToClass(classId, studentId) {
  const { error } = await supabase
    .from('class_students')
    .upsert({ class_id: classId, student_id: studentId, is_active: true }, { onConflict: 'class_id,student_id' })
  if (error) throw error
}

export async function updateClassStudentActive(enrollmentId, isActive) {
  const { error } = await supabase
    .from('class_students')
    .update({ is_active: !!isActive })
    .eq('id', enrollmentId)
  if (error) throw error
}

export async function saveAttendance(records) {
  const { error } = await supabase
    .from('attendances')
    .upsert(records, { onConflict: 'class_id,student_id,session_number' })
  if (error) throw error
}

export async function saveAttendanceCell(classId, studentId, sessionNumber, checkDate, status) {
  if (!status) {
    const { error } = await supabase.from('attendances').delete()
      .eq('class_id', classId).eq('student_id', studentId).eq('session_number', sessionNumber)
    if (error) throw error
  } else {
    const { error } = await supabase.from('attendances')
      .upsert({ class_id: classId, student_id: studentId, session_number: sessionNumber,
                 check_date: checkDate, status },
               { onConflict: 'class_id,student_id,session_number' })
    if (error) throw error
  }
}

export async function getClassAttendanceAll(classId) {
  const { data, error } = await supabase
    .from('attendances')
    .select('student_id, session_number, status')
    .eq('class_id', classId)
  if (error) throw error
  return data ?? []
}

export async function getAttendanceByDate(classId, date) {
  const { data, error } = await supabase
    .from('attendances')
    .select('student_id, status, session_number')
    .eq('class_id', classId)
    .eq('check_date', date)
  if (error) throw error
  return data ?? []
}

export async function getSchoolHolidays(academicYear, semester) {
  const { data } = await supabase
    .from('school_holidays')
    .select('holiday_date, description')
    .eq('academic_year', academicYear)
    .eq('semester', semester)
  return (data ?? []).map(h => h.holiday_date)
}

export async function upsertHoliday(payload) {
  const { error } = await supabase.from('school_holidays')
    .upsert(payload, { onConflict: 'holiday_date,academic_year,semester' })
  if (error) throw error
}

export async function deleteHoliday(id) {
  const { error } = await supabase.from('school_holidays').delete().eq('id', id)
  if (error) throw error
}

export async function getSchoolHolidaysFull(academicYear, semester) {
  const { data, error } = await supabase
    .from('school_holidays')
    .select('id, holiday_date, description')
    .eq('academic_year', academicYear)
    .eq('semester', semester)
    .order('holiday_date')
  if (error) throw error
  return data ?? []
}

export async function upsertHomeroomTeacher(payload) {
  const { error } = await supabase
    .from('homeroom_teachers')
    .upsert(payload, { onConflict: 'teacher_id,main_room,category,academic_year,semester' })
  if (error) throw error
}

export async function assignHomeroomTeacher(payload) {
  const { teacher_id, main_room, category, academic_year, semester } = payload
  const deleteQuery = supabase
    .from('homeroom_teachers')
    .delete()
    .eq('main_room', main_room)
    .eq('category', category)
    .eq('academic_year', academic_year)
    .eq('semester', semester)
  const { error: deleteError } = await deleteQuery
  if (deleteError) throw deleteError

  const { error } = await supabase
    .from('homeroom_teachers')
    .insert({ teacher_id, main_room, category, academic_year, semester })
  if (error) throw error
}

export async function deleteHomeroomTeacher(id) {
  const { error } = await supabase.from('homeroom_teachers').delete().eq('id', id)
  if (error) throw error
}

// ─── Score Column Config ──────────────────────────────────────────────────────
export async function getScoreColumnConfig() {
  const { data, error } = await supabase
    .from('score_column_config')
    .select('id, skill_group, assignment_type, allowed_columns, is_fixed')
    .order('skill_group')
  if (error) throw error
  return data ?? []
}

export async function upsertScoreColumnConfig(payload) {
  const { error } = await supabase
    .from('score_column_config')
    .upsert(payload, { onConflict: 'skill_group,assignment_type' })
  if (error) throw error
}

const _parseAllowedCols = rows => [...new Set(
  (rows ?? []).flatMap(r => {
    const v = r.allowed_columns
    if (!v) return []
    if (Array.isArray(v)) return v
    return v.split(',').map(s => s.trim()).filter(Boolean)
  })
)].sort()

async function _getSkillGroup(classId) {
  try {
    const { data } = await supabase
      .from('classes').select('skill_group').eq('id', classId).single()
    return data?.skill_group ?? null
  } catch { return null }
}

// ดักคำเพื่อระบุว่าชื่อคอลัมน์เป็นประเภทอะไร
export function detectAssignmentKind(name = '') {
  const n = name.toLowerCase()
  const midTermKeys  = ['กลางภาค','midterm','mid-term','สอบกลาง','ทดสอบกลาง']
  const finalKeys    = ['ปลายภาค','final','สอบปลาย','ทดสอบปลาย']
  const retakeKeys   = ['ปรับ','ซ่อม','retake','makeup','make-up','สอบปรับ']
  if (retakeKeys.some(k => n.includes(k)))  return 'สอบปรับ'
  if (midTermKeys.some(k => n.includes(k))) return 'กลางภาค'
  if (finalKeys.some(k => n.includes(k)))   return 'ปลายภาค'
  return 'ระหว่างเรียน'
}

// assignmentType (Thai): 'กลางภาค' | 'ปลายภาค' | 'ระหว่างเรียน' | null
// คืนค่า { cols: string[], isFixed: boolean }
// ถ้าไม่รู้ skill_group → คืนค่าว่าง ไม่ผสมกลุ่ม
export async function getSheetColumnOptions(classId, assignmentType = null) {
  const sg = await _getSkillGroup(classId)
  if (!sg) return { cols: [], isFixed: false }

  let q = supabase.from('score_column_config')
    .select('allowed_columns, is_fixed')
    .eq('skill_group', sg)
  if (assignmentType) q = q.eq('assignment_type', assignmentType)
  const { data, error } = await q
  if (error) console.warn('[sheetColOpts]', error.message, { sg, assignmentType })

  const cols    = _parseAllowedCols(data)
  const isFixed = (data ?? []).some(r => r.is_fixed)
  return { cols, isFixed }
}

// map assignment_type ใน class_score_columns ('midterm'/'final') → Thai ใน score_column_config
export function colTypeToThai(assignmentType) {
  if (assignmentType === 'final') return 'ปลายภาค'
  if (assignmentType === 'midterm') return 'กลางภาค'
  return 'ระหว่างเรียน'
}

// ─── Student Scores ───────────────────────────────────────────────────────────
// student_scores schema: id, assignment_id (=class_score_columns.id),
//   student_id, original_score, retake_score, final_score

export async function getStudentScores(classId) {
  // join ผ่าน class_score_columns เพื่อกรองตาม classId
  const { data: cols } = await supabase
    .from('class_score_columns').select('id').eq('class_id', classId)
  if (!cols?.length) return []
  const colIds = cols.map(c => c.id)
  const { data, error } = await supabase
    .from('student_scores')
    .select('student_id, assignment_id, original_score, retake_score, final_score')
    .in('assignment_id', colIds)
  if (error) throw error
  // normalize: map assignment_id → score_column_id, original_score → score
  return (data ?? []).map(r => ({
    student_id:     r.student_id,
    score_column_id: r.assignment_id,
    score:           r.final_score ?? r.original_score,
    original_score:  r.original_score,
    retake_score:    r.retake_score,
    final_score:     r.final_score,
  }))
}

export async function saveStudentScore(classId, studentId, columnId, score) {
  const val = (score === null || score === '' || isNaN(parseFloat(score)))
    ? null : parseFloat(score)
  if (val === null) {
    await supabase.from('student_scores').delete()
      .eq('student_id', studentId).eq('assignment_id', columnId)
  } else {
    const { error } = await supabase.from('student_scores')
      .upsert({ student_id: studentId, assignment_id: columnId,
                original_score: val, final_score: val },
               { onConflict: 'student_id,assignment_id' })
    if (error) throw error
  }
}

// ─── Prayer Records ───────────────────────────────────────────────────────────
export async function getPrayerRecords(teacherId, room, startDate, endDate) {
  let q = supabase.from('prayer_records')
    .select('student_id, check_date, status')
    .eq('teacher_id', teacherId)
    .eq('main_room', room)
  if (startDate) q = q.gte('check_date', startDate)
  if (endDate)   q = q.lte('check_date', endDate)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function savePrayerRecords(records) {
  if (!records.length) return
  // Delete ก่อน แล้ว insert ใหม่ (ไม่ต้องพึ่ง unique constraint)
  for (const r of records) {
    const { error: deleteError } = await supabase.from('prayer_records').delete()
      .eq('teacher_id', r.teacher_id).eq('student_id', r.student_id)
      .eq('main_room', r.main_room).eq('check_date', r.check_date)
    if (deleteError) throw deleteError
  }
  const { error } = await supabase.from('prayer_records').insert(records)
  if (error) throw error
}

export async function savePrayerCell(teacherId, studentId, room, checkDate, status, weekNumber = null) {
  // ลบก่อนเสมอ (ไม่ต้องพึ่ง unique constraint)
  const { error: deleteError } = await supabase.from('prayer_records').delete()
    .eq('teacher_id', teacherId).eq('student_id', studentId)
    .eq('main_room', room).eq('check_date', checkDate)
  if (deleteError) throw deleteError

  if (status) {
    const payload = { teacher_id: teacherId, student_id: studentId, main_room: room,
                      check_date: checkDate, status }
    if (weekNumber !== null) payload.week_number = weekNumber
    const { error } = await supabase.from('prayer_records').insert(payload)
    if (error) throw error
  }
}

// ─── Score Columns ────────────────────────────────────────────────────────────
export async function getScoreColumns(classId) {
  const { data, error } = await supabase
    .from('class_score_columns')
    .select('id, assignment_name, assignment_type, sheet_column, max_score')
    .eq('class_id', classId)
    .order('id')
  if (error) throw error
  return data ?? []
}

export async function createScoreColumn(payload) {
  const { error } = await supabase.from('class_score_columns').insert(payload)
  if (error) throw error
}

export async function updateScoreColumn(id, payload) {
  const { error } = await supabase.from('class_score_columns').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteScoreColumn(id) {
  const { error } = await supabase.from('class_score_columns').delete().eq('id', id)
  if (error) throw error
}

// ─── Departments ──────────────────────────────────────────────────────────────
export async function getDepartments() {
  const { data, error } = await supabase
    .from('departments')
    .select('id, dept_code, dept_name, head_name, head_photo_url, head_sign_url, teacher_code, category')
    .order('dept_code')
  if (error) throw error
  return data ?? []
}

export async function createDepartment(payload) {
  const { error } = await supabase.from('departments').insert(payload)
  if (error) throw error
}

export async function updateDepartment(id, payload) {
  const { error } = await supabase.from('departments').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteDepartment(id) {
  const { error } = await supabase.from('departments').delete().eq('id', id)
  if (error) throw error
}

// ─── School Periods ───────────────────────────────────────────────────────────
export async function getPeriods() {
  const { data, error } = await supabase
    .from('school_periods')
    .select('id, period_no, start_time, end_time')
    .order('period_no')
  if (error) throw error
  return data ?? []
}

export async function upsertPeriod(payload) {
  const { error } = await supabase
    .from('school_periods')
    .upsert(payload, { onConflict: 'id' })
  if (error) throw error
}

export async function deletePeriod(id) {
  const { error } = await supabase.from('school_periods').delete().eq('id', id)
  if (error) throw error
}

// ─── Teacher: update own profile ─────────────────────────────────────────────
export async function updateMyProfile(teacherId, payload) {
  const { error } = await supabase
    .from('teachers').update(payload).eq('id', teacherId)
  if (error) throw error
}

// ─── Rooms & Students by room ─────────────────────────────────────────────────
export async function getRoomsByGrade(gradePrefix) {
  const { data, error } = await supabase
    .from('students').select('main_room')
    .like('main_room', `${gradePrefix}/%`)
    .order('main_room')
  if (error) throw error
  return [...new Set((data ?? []).map(s => s.main_room).filter(Boolean))].sort()
}

export async function getStudentsByRoom(room) {
  return _fetchAllStudents(
    'id, student_code, full_name, main_room, religion_room, gender, image_url, house_color, sports_shirt_size',
    q => q.eq('main_room', room),
    'student_code'
  )
}

export async function getStudentsByReligionRoom(room) {
  return _fetchAllStudents(
    'id, student_code, full_name, main_room, religion_room, gender, image_url, house_color, sports_shirt_size',
    q => q.eq('religion_room', room),
    'student_code'
  )
}

export async function getReligionRoomsByGrade(gradePrefix) {
  const data = await _fetchAllStudents(
    'religion_room',
    q => q.not('religion_room', 'is', null),
    'religion_room'
  )
  const all = [...new Set((data ?? []).map(s => s.religion_room).filter(Boolean))].sort()
  if (!gradePrefix) return all
  // "PR 1" → match "PR1/..." หรือ "PR 1/..."
  const clean = gradePrefix.replace(/\s+/g, '')
  return all.filter(r =>
    r.startsWith(gradePrefix) ||
    r.replace(/\s+/g,'').startsWith(clean)
  )
}

// ─── Classes CRUD ─────────────────────────────────────────────────────────────
export async function updateClass(id, payload) {
  const { error } = await supabase.from('classes').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteClass(id) {
  const { error } = await supabase.from('classes').delete().eq('id', id)
  if (error) throw error
}

export async function createClass(payload, teacherId = null) {
  const { data, error } = await supabase
    .from('classes').insert(payload).select('id').single()
  if (error) throw error
  // อัปเดตโควตา (ไม่ block ถ้า rpc ล้มเหลว)
  if (teacherId) {
    try {
      await supabase.rpc('increment_class_quota', { p_teacher_id: teacherId })
    } catch { /* ไม่ critical */ }
  }
  return data
}

export async function enrollStudents(classId, studentIds) {
  if (!studentIds.length) return
  const { error } = await supabase
    .from('class_students')
    .insert(studentIds.map(sid => ({ class_id: classId, student_id: sid })))
  if (error) throw error
}

// ─── Master Subjects CRUD ─────────────────────────────────────────────────────
export async function createSubject(payload) {
  const { error } = await supabase.from('master_subjects').insert(payload)
  if (error) throw error
}

export async function updateSubject(id, payload) {
  const { error } = await supabase
    .from('master_subjects').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteSubject(id) {
  const { error } = await supabase
    .from('master_subjects').delete().eq('id', id)
  if (error) throw error
}

// ─── Course PP5 Document Page 2 ───────────────────────────────────────────────
export async function getCourseDocPage2(subjectId) {
  const { data, error } = await supabase
    .from('course_doc_page2')
    .select('*')
    .eq('subject_id', subjectId)
    .maybeSingle()
  if (error) throw error
  return data
}

export async function saveCourseDocPage2(subjectId, payload) {
  const row = {
    subject_id: subjectId,
    ...payload,
    updated_at: new Date().toISOString(),
  }
  const { data, error } = await supabase
    .from('course_doc_page2')
    .upsert(row, { onConflict: 'subject_id' })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function findCurriculumStandards({ subjectName, subjectCode, gradeLevel, dept, topic }) {
  const filterText = value => String(value ?? '').trim().replace(/[(),]/g, ' ')
  let q = supabase
    .from('curriculum_standards')
    .select('*')
    .order('item_no')

  const grade = filterText(gradeLevel)
  const code = filterText(subjectCode)
  const name = filterText(subjectName)
  const deptName = filterText(dept)
  const searchTopic = filterText(topic)

  if (grade) q = q.or(`grade_level.is.null,grade_level.eq.${grade}`)
  if (code) q = q.or(`subject_code.is.null,subject_code.eq.${code}`)
  else if (name) q = q.ilike('subject_name', `%${name}%`)
  if (deptName) q = q.or(`dept.is.null,dept.eq.${deptName}`)
  if (searchTopic) {
    q = q.or(`strand.ilike.%${searchTopic}%,topic.ilike.%${searchTopic}%,standard_text.ilike.%${searchTopic}%,indicator_text.ilike.%${searchTopic}%,learning_outcome_text.ilike.%${searchTopic}%`)
  }

  const { data, error } = await q.limit(80)
  if (error) throw error
  return data ?? []
}

export async function getCurriculumStandards(filters = {}) {
  const clean = value => String(value ?? '').trim().replace(/[(),]/g, ' ')
  const keyword = clean(filters.q)
  const dept = clean(filters.dept)
  const gradeLevel = clean(filters.gradeLevel)
  const subjectCode = clean(filters.subjectCode)

  let q = supabase
    .from('curriculum_standards')
    .select('*')
    .order('subject_code', { ascending: true, nullsFirst: false })
    .order('grade_level', { ascending: true, nullsFirst: false })
    .order('item_no', { ascending: true, nullsFirst: false })

  if (dept) q = q.eq('dept', dept)
  if (gradeLevel) q = q.eq('grade_level', gradeLevel)
  if (subjectCode) q = q.ilike('subject_code', `%${subjectCode}%`)
  if (keyword) {
    q = q.or([
      `subject_name.ilike.%${keyword}%`,
      `subject_code.ilike.%${keyword}%`,
      `dept.ilike.%${keyword}%`,
      `grade_level.ilike.%${keyword}%`,
      `strand.ilike.%${keyword}%`,
      `topic.ilike.%${keyword}%`,
      `standard_code.ilike.%${keyword}%`,
      `standard_text.ilike.%${keyword}%`,
      `indicator_code.ilike.%${keyword}%`,
      `indicator_text.ilike.%${keyword}%`,
      `learning_outcome_text.ilike.%${keyword}%`,
    ].join(','))
  }

  const { data, error } = await q.limit(1000)
  if (error) throw error
  return data ?? []
}

export async function createCurriculumStandard(payload) {
  const { data, error } = await supabase
    .from('curriculum_standards')
    .insert(payload)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updateCurriculumStandard(id, payload) {
  const { data, error } = await supabase
    .from('curriculum_standards')
    .update({ ...payload, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteCurriculumStandard(id) {
  const { error } = await supabase
    .from('curriculum_standards')
    .delete()
    .eq('id', id)
  if (error) throw error
}

export async function importCurriculumStandards(rows) {
  if (!Array.isArray(rows) || !rows.length) return 0
  let inserted = 0
  for (let i = 0; i < rows.length; i += 500) {
    const chunk = rows.slice(i, i + 500)
    const { error } = await supabase.from('curriculum_standards').insert(chunk)
    if (error) throw error
    inserted += chunk.length
  }
  return inserted
}

// ─── Academic Registry ────────────────────────────────────────────────────────
export async function getRegistry(semester, academicYear) {
  const { data, error } = await supabase
    .from('academic_registry')
    .select('*')
    .eq('semester', semester)
    .eq('academic_year', academicYear)
    .order('dept_code')
  if (error) throw error
  return data ?? []
}

// ─── Payment Requests ─────────────────────────────────────────────────────────

// ครูสร้างคำขอชำระเงิน
export async function createPaymentRequest(payload) {
  const { data, error } = await supabase
    .from('payment_requests')
    .insert(payload)
    .select('id')
    .single()
  if (error) throw error
  return data
}

// ดึงคำขอของครูคนนี้
export async function getMyPaymentRequests(teacherId) {
  const { data, error } = await supabase
    .from('payment_requests')
    .select('id, package_type, amount, room_count, status, slip_url, admin_note, created_at, master_subjects(subject_name)')
    .eq('teacher_id', teacherId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

// แอดมินดึงคำขอทั้งหมด (pending ก่อน)
export async function getAllPaymentRequests() {
  const { data, error } = await supabase
    .from('payment_requests')
    .select(`
      id, package_type, amount, status, slip_url, admin_note,
      room_count, created_at, reviewed_at,
      teachers ( id, full_name, teacher_code, phone ),
      master_subjects ( subject_name )
    `)
    .order('status')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

// แอดมินอัปเดตสถานะ
export async function reviewPaymentRequest(id, status, adminNote = null) {
  const { error } = await supabase
    .from('payment_requests')
    .update({ status, admin_note: adminNote, reviewed_at: new Date().toISOString() })
    .eq('id', id)
  if (error) throw error
}

export async function getTeacherPackageAccess(teacherId) {
  if (!teacherId) return { hasSemester: false, paidRoomCount: 0, approvedRequests: [] }
  const { data, error } = await supabase
    .from('payment_requests')
    .select('id, package_type, room_count, status')
    .eq('teacher_id', teacherId)
    .eq('status', 'approved')
  if (error) throw error

  const approvedRequests = data ?? []
  const hasSemester = approvedRequests.some(r =>
    ['semester', 'school_sponsored', 'donation'].includes(r.package_type)
  )
  const paidRoomCount = approvedRequests
    .filter(r => r.package_type === 'per_subject')
    .reduce((sum, r) => sum + (parseInt(r.room_count ?? 1) || 1), 0)

  return { hasSemester, paidRoomCount, approvedRequests }
}

// อัปเดตโควตาหลังอนุมัติ
export async function approveTeacherQuota(teacherId, packageType) {
  const isPaid = true
  const { error } = await supabase
    .from('teachers_quota')
    .upsert(
      { teacher_id: teacherId, is_paid: isPaid,
        package_type: packageType,
        paid_at: new Date().toISOString() },
      { onConflict: 'teacher_id' }
    )
  if (error) throw error
}

// อัปโหลดสลิป
export async function uploadPaymentSlip(file, requestId) {
  const ext  = file.name.split('.').pop()
  const path = `slips/${requestId}_${Date.now()}.${ext}`
  const { error } = await supabase.storage
    .from('payment-slips')
    .upload(path, file, { upsert: true })
  if (error) throw error
  const { data } = supabase.storage.from('payment-slips').getPublicUrl(path)
  return data.publicUrl
}

// ดึง URL สลิป (signed — ป้องกันคนอื่นเข้า)
export async function getSlipSignedUrl(path) {
  const { data, error } = await supabase.storage
    .from('payment-slips')
    .createSignedUrl(path, 3600)
  if (error) throw error
  return data.signedUrl
}

export async function getPaymentSlipViewUrl(slipUrl) {
  const raw = String(slipUrl ?? '').trim()
  if (!raw) return ''

  let path = raw
  try {
    const url = new URL(raw)
    const publicMarker = '/storage/v1/object/public/payment-slips/'
    const signedMarker = '/storage/v1/object/sign/payment-slips/'
    const marker = url.pathname.includes(publicMarker) ? publicMarker : signedMarker
    if (url.pathname.includes(marker)) {
      path = decodeURIComponent(url.pathname.split(marker)[1] ?? '')
    }
  } catch {}

  if (!path || /^https?:\/\//i.test(path)) return raw
  try {
    return await getSlipSignedUrl(path)
  } catch {
    return raw
  }
}

export async function getMyDonationRequests(teacherId) {
  if (!teacherId) return []
  const { data, error } = await supabase
    .from('payment_requests')
    .select('id, package_type, status, amount, admin_note, created_at')
    .eq('teacher_id', teacherId)
    .in('package_type', ['donation', 'school_sponsored'])
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

// ─── Classrooms ──────────────────────────────────────────────────────────────

export async function getClassrooms() {
  const { data, error } = await supabase
    .from('classrooms')
    .select('id, building, room_number, name, is_teaching_room')
    .order('building').order('room_number')
  if (error) throw error
  return data ?? []
}

export async function createClassroom(payload) {
  const { data, error } = await supabase.from('classrooms').insert(payload).select().single()
  if (error) throw error
  return data
}

export async function updateClassroom(id, payload) {
  const { error } = await supabase.from('classrooms').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteClassroom(id) {
  const { error } = await supabase.from('classrooms').delete().eq('id', id)
  if (error) throw error
}

export async function assignClassroom(classId, classroomId) {
  const { error } = await supabase
    .from('classes')
    .update({ classroom_id: classroomId })
    .eq('id', classId)
  if (error) throw error
}

// ─── Usage Tracking ──────────────────────────────────────────────────────────

export async function updateLastSeen(table) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return
  await supabase.from(table).update({ last_seen_at: new Date().toISOString() }).eq('profile_id', user.id)
}

export async function logLogin(userType) {
  await supabase.from('login_logs').insert({ user_type: userType })
}

export async function getUsageStats() {
  const now = new Date()
  const todayIso  = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()
  const monthIso  = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
  const [tTotal, sTotal, tToday, sToday, tMonth, sMonth] = await Promise.all([
    supabase.from('teachers').select('id', { count: 'exact', head: true }),
    supabase.from('students').select('id', { count: 'exact', head: true }),
    supabase.from('login_logs').select('id', { count: 'exact', head: true }).eq('user_type','teacher').gte('logged_at', todayIso),
    supabase.from('login_logs').select('id', { count: 'exact', head: true }).eq('user_type','student').gte('logged_at', todayIso),
    supabase.from('login_logs').select('id', { count: 'exact', head: true }).eq('user_type','teacher').gte('logged_at', monthIso),
    supabase.from('login_logs').select('id', { count: 'exact', head: true }).eq('user_type','student').gte('logged_at', monthIso),
  ])
  return {
    teacherTotal: tTotal.count ?? 0,
    studentTotal: sTotal.count ?? 0,
    teacherToday: tToday.count ?? 0,
    studentToday: sToday.count ?? 0,
    teacherMonth: tMonth.count ?? 0,
    studentMonth: sMonth.count ?? 0,
  }
}

// query stats สำหรับหน้า login (ไม่ต้อง auth)
export async function getPublicLoginStats(userType) {
  const now = new Date()
  const todayIso = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString()
  const monthIso = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
  const [today, month] = await Promise.all([
    supabase.from('login_logs').select('id', { count: 'exact', head: true }).eq('user_type', userType).gte('logged_at', todayIso),
    supabase.from('login_logs').select('id', { count: 'exact', head: true }).eq('user_type', userType).gte('logged_at', monthIso),
  ])
  return { today: today.count ?? 0, month: month.count ?? 0 }
}

// ─── Class-Schedule Links ─────────────────────────────────────────────────────

export async function getClassScheduleLinks(teacherId) {
  if (!teacherId) return []
  const { data: subjData } = await supabase.from('master_subjects').select('id').eq('teacher_id', teacherId)
  const subjectIds = (subjData ?? []).map(s => s.id)
  if (!subjectIds.length) return []
  const { data: clsData } = await supabase.from('classes').select('id').in('course_id', subjectIds)
  const classIds = (clsData ?? []).map(c => c.id)
  if (!classIds.length) return []
  const { data, error } = await supabase
    .from('class_schedule_links')
    .select('id, class_id, teacher_schedule_id')
    .in('class_id', classIds)
  if (error) throw error
  return data ?? []
}

export async function linkClassToSchedule(classId, scheduleId) {
  const { error } = await supabase
    .from('class_schedule_links')
    .upsert({ class_id: classId, teacher_schedule_id: scheduleId }, { onConflict: 'class_id,teacher_schedule_id' })
  if (error) throw error
}

export async function unlinkClassFromSchedule(classId, scheduleId) {
  const { error } = await supabase
    .from('class_schedule_links')
    .delete()
    .eq('class_id', classId)
    .eq('teacher_schedule_id', scheduleId)
  if (error) throw error
}

// ─── Teacher Schedules ────────────────────────────────────────────────────────
export async function getMySchedule(teacherId, academicYear, semester) {
  const { data, error } = await supabase
    .from('teacher_schedules')
    .select('id, day_of_week, period_no, span_periods, note, subject_id, subject_name, class_name, teacher_name, master_subjects(subject_name, subject_code)')
    .eq('teacher_id', teacherId)
    .eq('academic_year', academicYear)
    .eq('semester', semester)
    .order('day_of_week').order('period_no')
  if (error) throw error
  return data ?? []
}

export async function getScheduleTeacherIds(academicYear, semester) {
  const { data, error } = await supabase
    .from('teacher_schedules')
    .select('teacher_id')
    .eq('academic_year', academicYear)
    .eq('semester', semester)
    .not('teacher_id', 'is', null)
    .range(0, 9999)
  if (error) throw error
  return [...new Set((data ?? []).map(r => r.teacher_id).filter(Boolean))]
}

export async function upsertScheduleEntry(payload) {
  const { error } = await supabase
    .from('teacher_schedules')
    .upsert(payload, { onConflict: 'teacher_id,day_of_week,period_no,academic_year,semester' })
  if (error) throw error
}

export async function deleteScheduleEntry(id) {
  const { error } = await supabase.from('teacher_schedules').delete().eq('id', id)
  if (error) throw error
}

export async function deleteScheduleByTeacher(teacherId, academicYear, semester) {
  const { error } = await supabase.from('teacher_schedules')
    .delete()
    .eq('teacher_id', teacherId)
    .eq('academic_year', academicYear)
    .eq('semester', semester)
  if (error) throw error
}

export async function getTeacherRoomColors(teacherId) {
  const { data, error } = await supabase
    .from('teacher_room_colors')
    .select('room_key, class_name, color_hex')
    .eq('teacher_id', teacherId)
  if (error) throw error
  return data ?? []
}

export async function saveTeacherRoomColor({ teacher_id, room_key, class_name, color_hex }) {
  const { error } = await supabase
    .from('teacher_room_colors')
    .upsert({
      teacher_id,
      room_key,
      class_name,
      color_hex,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'teacher_id,room_key' })
  if (error) throw error
}

// ─── Friday Periods ───────────────────────────────────────────────────────────
export async function getPeriodsByType(dayType = 'regular') {
  const { data, error } = await supabase
    .from('school_periods')
    .select('id, period_no, start_time, end_time, day_type')
    .eq('day_type', dayType)
    .order('period_no')
  if (error) throw error
  return data ?? []
}

export async function getAllPeriods() {
  const { data, error } = await supabase
    .from('school_periods')
    .select('id, period_no, start_time, end_time, day_type')
    .order('day_type').order('period_no')
  if (error) throw error
  return data ?? []
}

// ─── Life Skill Columns (admin) ───────────────────────────────────────────────
export async function getLifeSkillColumns(academicYear, semester, category = null) {
  let q = supabase.from('life_skill_columns')
    .select('id, name, max_score, sheet_col, sort_order, category, academic_year, semester')
    .eq('academic_year', academicYear).eq('semester', semester)
    .order('sort_order').order('id')
  if (category) q = q.eq('category', category)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function createLifeSkillColumn(payload) {
  const { error } = await supabase.from('life_skill_columns').insert(payload)
  if (error) throw error
}

export async function updateLifeSkillColumn(id, payload) {
  const { error } = await supabase.from('life_skill_columns').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteLifeSkillColumn(id) {
  const { error } = await supabase.from('life_skill_columns').delete().eq('id', id)
  if (error) throw error
}

// ─── Life Skill Scores (teacher) ─────────────────────────────────────────────
export async function getLifeSkillScores(columnIds) {
  if (!columnIds.length) return []
  const { data, error } = await supabase.from('life_skill_scores')
    .select('id, student_id, column_id, score')
    .in('column_id', columnIds)
  if (error) throw error
  return data ?? []
}

export async function upsertLifeSkillScore(studentId, columnId, score, teacherId) {
  const { error } = await supabase.from('life_skill_scores')
    .upsert({ student_id: studentId, column_id: columnId,
              score: score ?? null, updated_by: teacherId, updated_at: new Date().toISOString() },
             { onConflict: 'student_id,column_id' })
  if (error) throw error
}

// ─── Reading Score Columns (admin) ───────────────────────────────────────────
export async function getReadingScoreColumns(academicYear, semester) {
  const { data, error } = await supabase.from('reading_score_columns')
    .select('id, name, max_score, sheet_col, sort_order, academic_year, semester')
    .eq('academic_year', academicYear).eq('semester', semester)
    .order('sort_order').order('id')
  if (error) throw error
  return data ?? []
}

export async function createReadingScoreColumn(payload) {
  const { error } = await supabase.from('reading_score_columns').insert(payload)
  if (error) throw error
}

export async function updateReadingScoreColumn(id, payload) {
  const { error } = await supabase.from('reading_score_columns').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteReadingScoreColumn(id) {
  const { error } = await supabase.from('reading_score_columns').delete().eq('id', id)
  if (error) throw error
}

// ─── Reading Scores (teacher) ─────────────────────────────────────────────────
export async function getReadingScores(columnIds) {
  if (!columnIds.length) return []
  const { data, error } = await supabase.from('reading_scores')
    .select('id, student_id, column_id, score')
    .in('column_id', columnIds)
  if (error) throw error
  return data ?? []
}

export async function upsertReadingScore(studentId, columnId, score, teacherId) {
  const { error } = await supabase.from('reading_scores')
    .upsert({ student_id: studentId, column_id: columnId,
              score: score ?? null, updated_by: teacherId,
              updated_at: new Date().toISOString() },
             { onConflict: 'student_id,column_id' })
  if (error) throw error
}

// ─── Admin Score Overview ─────────────────────────────────────────────────────

async function _fetchStudentsById(ids) {
  if (!ids.length) return {}
  const { data } = await supabase.from('students')
    .select('id, student_code, full_name, main_room, religion_room, image_url')
    .in('id', ids)
    .range(...STUDENT_QUERY_RANGE)
  return Object.fromEntries((data ?? []).map(s => [s.id, s]))
}

export async function savePrayerCellAdmin(studentId, room, checkDate, status, weekNumber = null) {
  // ใช้ RPC SECURITY DEFINER — bypass RLS ทั้งหมด
  const { error } = await supabase.rpc('save_prayer_admin', {
    p_student_id:  studentId,
    p_room:        room,
    p_date:        checkDate,
    p_status:      status ?? null,
    p_week_number: weekNumber,
  })
  if (error) throw error
}

export async function getPrayerRecordsByRoom(room) {
  // ค้นหาผ่าน student_id ของห้องนั้น — ไม่พึ่ง main_room ซึ่งครูอาจบันทึกต่างกัน
  const { data: students } = await supabase.from('students')
    .select('id').eq('religion_room', room)
    .range(...STUDENT_QUERY_RANGE)
  if (!students?.length) return []
  const ids = students.map(s => s.id)
  const { data, error } = await supabase.from('prayer_records')
    .select('student_id, check_date, status')
    .in('student_id', ids)
    .order('check_date')
  if (error) throw error
  return data ?? []
}

export async function getAllLifeSkillScores(academicYear, semester) {
  const { data: cols } = await supabase.from('life_skill_columns')
    .select('id, name, max_score, sheet_col, category')
    .eq('academic_year', academicYear).eq('semester', semester)
    .order('sort_order')
  if (!cols?.length) return { columns: [], scores: [] }
  const { data: raw } = await supabase.from('life_skill_scores')
    .select('student_id, column_id, score')
    .in('column_id', cols.map(c => c.id))
  const stuMap = await _fetchStudentsById([...new Set((raw ?? []).map(r => r.student_id))])
  const scores = (raw ?? []).map(r => ({ ...r, students: stuMap[r.student_id] ?? null }))
  return { columns: cols ?? [], scores }
}

export async function getAllReadingScores(academicYear, semester) {
  const { data: cols } = await supabase.from('reading_score_columns')
    .select('id, name, max_score, sheet_col')
    .eq('academic_year', academicYear).eq('semester', semester)
    .order('sort_order')
  if (!cols?.length) return { columns: [], scores: [] }
  const { data: raw } = await supabase.from('reading_scores')
    .select('student_id, column_id, score')
    .in('column_id', cols.map(c => c.id))
  const stuMap = await _fetchStudentsById([...new Set((raw ?? []).map(r => r.student_id))])
  const scores = (raw ?? []).map(r => ({ ...r, students: stuMap[r.student_id] ?? null }))
  return { columns: cols ?? [], scores }
}

export async function getAllPrayerRecords() {
  const { data, error } = await supabase.from('prayer_records')
    .select('student_id, check_date, status')
    .order('check_date')
  if (error) throw error
  const stuMap = await _fetchStudentsById([...new Set((data ?? []).map(r => r.student_id))])
  return (data ?? []).map(r => ({ ...r, students: stuMap[r.student_id] ?? null }))
}

// ─── Get all classes with enrolled students for reading eval fill ─────────────
export async function getAllClassesForFill() {
  const { data, error } = await supabase
    .from('classes')
    .select(`
      id, class_name, google_sheet_id,
      class_students ( students ( id, student_code ) )
    `)
    .not('google_sheet_id', 'is', null)
    .neq('google_sheet_id', '')
  if (error) throw error
  return (data ?? []).map(cls => ({
    ...cls,
    students: (cls.class_students ?? []).map(cs => cs.students).filter(Boolean),
  }))
}

async function _ensureClassScoreColumn(classId, name, maxScore, sheetColumn = '', type = 'ระหว่างเรียน') {
  const { data: existing, error: findErr } = await supabase
    .from('class_score_columns')
    .select('id, assignment_name, assignment_type, sheet_column, max_score')
    .eq('class_id', classId)
    .eq('assignment_name', name)
    .limit(1)
  if (findErr) throw findErr

  const payload = {
    assignment_name: name,
    assignment_type: type,
    sheet_column: sheetColumn || '',
    max_score: maxScore ?? 10,
  }

  if (existing?.length) {
    const id = existing[0].id
    if (!sheetColumn && existing[0].sheet_column) payload.sheet_column = existing[0].sheet_column
    const { error } = await supabase
      .from('class_score_columns')
      .update(payload)
      .eq('id', id)
    if (error) throw error
    return id
  }

  const { data, error } = await supabase
    .from('class_score_columns')
    .insert({ class_id: classId, ...payload })
    .select('id')
    .single()
  if (error) throw error
  return data.id
}

async function _upsertStudentScoreRows(rows) {
  const clean = rows.filter(r => r.assignment_id && r.student_id)
  for (let i = 0; i < clean.length; i += 500) {
    const chunk = clean.slice(i, i + 500)
    const { error } = await supabase
      .from('student_scores')
      .upsert(chunk, { onConflict: 'assignment_id,student_id' })
    if (error) throw error
  }
  return clean.length
}

async function _fetchPaged(table, selectColumns, configure = q => q) {
  const rows = []
  const pageSize = 1000
  for (let from = 0; from <= 99999; from += pageSize) {
    let q = supabase.from(table).select(selectColumns)
    q = configure(q)
    const { data, error } = await q.range(from, from + pageSize - 1)
    if (error) throw error
    rows.push(...(data ?? []))
    if (!data || data.length < pageSize) break
  }
  return rows
}

function _dateListForTerm(startStr, endStr) {
  if (!startStr || !endStr) return []
  const start = new Date(startStr)
  const end = new Date(endStr)
  const diff = start.getDay() % 7
  if (diff) start.setDate(start.getDate() - diff)
  const days = []
  let cur = new Date(start)
  while (cur <= end) {
    for (let d = 0; d < 5; d++) {
      const dt = new Date(cur)
      dt.setDate(dt.getDate() + d)
      if (dt <= end) days.push({ ds: dt.toISOString().slice(0, 10) })
    }
    cur.setDate(cur.getDate() + 7)
  }
  return days
}

const _PRAYER_SCORE = { pray: 2, absent: 0, usor: 1, followed: 1, avoid: -1 }
const _LIFE_SKILL_SHEET_COLUMNS = ['EH', 'EI', 'EJ']
const _RELIGION_REQUIRED_COLUMNS = [
  { name: 'คะแนนมาเรียน', sheetColumn: 'EH' },
  { name: 'คะแนนละหมาด', sheetColumn: 'EI' },
]

function _calcPrayerScoreFromMap(sMap, allDays) {
  const earned = allDays.reduce((sum, d) => sum + (_PRAYER_SCORE[sMap[d.ds]] ?? 0), 0)
  const max = allDays.length * 2
  return max > 0 ? Math.min(10, Math.max(0, Math.round((earned / max) * 100) / 10)) : 0
}

function _calcAttendanceScore(rows) {
  if (!rows.length) return null
  const attended = rows.filter(r => r.status === 'present' || r.status === 'late').length
  return Math.round((attended / rows.length) * 100) / 10
}

export async function fillLifeSkillScoresForClass(classId, academicYear, semester) {
  const columns = (await getLifeSkillColumns(academicYear, semester, 'สามัญ')).slice(0, 3)
  if (!columns.length) return { classes: 0, columns: 0, scores: 0, columnNames: [] }

  const { data: cls, error } = await supabase
    .from('classes')
    .select('id, class_students ( student_id )')
    .eq('id', classId)
    .single()
  if (error) throw error

  const students = (cls?.class_students ?? []).map(r => r.student_id).filter(Boolean)
  if (!students.length) return { classes: 0, columns: columns.length, scores: 0, columnNames: columns.map(c => c.name) }

  const colIds = columns.map(c => c.id)
  const scoreRows = await _fetchPaged(
    'life_skill_scores',
    'student_id, column_id, score',
    q => q.in('column_id', colIds).in('student_id', students)
  )
  const scoreMap = {}
  for (const row of scoreRows) {
    if (!scoreMap[row.student_id]) scoreMap[row.student_id] = {}
    scoreMap[row.student_id][row.column_id] = row.score
  }

  let scoreCount = 0
  for (const [idx, col] of columns.entries()) {
    const classColId = await _ensureClassScoreColumn(classId, col.name, col.max_score ?? 10, _LIFE_SKILL_SHEET_COLUMNS[idx] ?? '')
    const rows = students
      .filter(studentId => scoreMap[studentId]?.[col.id] !== undefined && scoreMap[studentId]?.[col.id] !== null)
      .map(studentId => ({
        assignment_id: classColId,
        student_id: studentId,
        original_score: scoreMap[studentId][col.id],
        final_score: scoreMap[studentId][col.id],
      }))
    scoreCount += await _upsertStudentScoreRows(rows)
  }

  return { classes: 1, columns: columns.length, scores: scoreCount, columnNames: columns.map(c => c.name) }
}

export async function fillLifeSkillScoresToClassScores(academicYear, semester) {
  const columns = (await getLifeSkillColumns(academicYear, semester, 'สามัญ')).slice(0, 3)
  if (!columns.length) return { classes: 0, columns: 0, scores: 0 }

  const { data: classes, error } = await supabase
    .from('classes')
    .select(`
      id, class_name, skill_group,
      class_students ( student_id )
    `)
    .eq('skill_group', 'ชีวิต')
    .range(0, 9999)
  if (error) throw error

  const colIds = columns.map(c => c.id)
  const scoreRows = await _fetchPaged(
    'life_skill_scores',
    'student_id, column_id, score',
    q => q.in('column_id', colIds)
  )
  const scoreMap = {}
  for (const row of scoreRows) {
    if (!scoreMap[row.student_id]) scoreMap[row.student_id] = {}
    scoreMap[row.student_id][row.column_id] = row.score
  }

  let scoreCount = 0
  let classCount = 0
  let ensuredColumns = 0
  for (const cls of classes ?? []) {
    const students = (cls.class_students ?? []).map(r => r.student_id).filter(Boolean)
    if (!students.length) continue
    classCount++
    for (const [idx, col] of columns.entries()) {
      const classColId = await _ensureClassScoreColumn(cls.id, col.name, col.max_score ?? 10, _LIFE_SKILL_SHEET_COLUMNS[idx] ?? '')
      ensuredColumns++
      const rows = students
        .filter(studentId => scoreMap[studentId]?.[col.id] !== undefined && scoreMap[studentId]?.[col.id] !== null)
        .map(studentId => ({
          assignment_id: classColId,
          student_id: studentId,
          original_score: scoreMap[studentId][col.id],
          final_score: scoreMap[studentId][col.id],
        }))
      scoreCount += await _upsertStudentScoreRows(rows)
    }
  }

  return { classes: classCount, columns: ensuredColumns, scores: scoreCount }
}

export async function fillPrayerScoresForReligionClass(classId, options = {}) {
  const start = options.semesterStart
  const end = options.semesterEnd
  const allDays = _dateListForTerm(start, end)
  if (!allDays.length) throw new Error('ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน')

  const { data: cls, error } = await supabase
    .from('classes')
    .select(`
      id,
      master_subjects ( subject_group ),
      class_students ( student_id )
    `)
    .eq('id', classId)
    .single()
  if (error) throw error

  if (!['AGM', 'AGMVOC'].includes(cls?.master_subjects?.subject_group)) {
    return { classes: 0, columns: 0, scores: 0, columnNames: [] }
  }

  const students = (cls.class_students ?? []).map(r => r.student_id).filter(Boolean)
  if (!students.length) return { classes: 0, columns: 2, scores: 0, columnNames: _RELIGION_REQUIRED_COLUMNS.map(c => c.name) }

  const prayerRecords = await _fetchPaged(
    'prayer_records',
    'student_id, check_date, status',
    q => q.gte('check_date', start).lte('check_date', end).in('student_id', students)
  )
  const prayerMap = {}
  for (const r of prayerRecords) {
    if (!prayerMap[r.student_id]) prayerMap[r.student_id] = {}
    prayerMap[r.student_id][r.check_date] = r.status
  }

  const attendanceRows = await _fetchPaged(
    'attendances',
    'student_id, status',
    q => q.eq('class_id', classId)
  )
  const attendanceMap = {}
  for (const r of attendanceRows) {
    if (!attendanceMap[r.student_id]) attendanceMap[r.student_id] = []
    attendanceMap[r.student_id].push(r)
  }

  const attColId = await _ensureClassScoreColumn(classId, 'คะแนนมาเรียน', 10, 'EH', 'ระหว่างเรียน')
  const prayerColId = await _ensureClassScoreColumn(classId, 'คะแนนละหมาด', 10, 'EI', 'ระหว่างเรียน')

  const prayerRows = students.map(studentId => {
    const score = _calcPrayerScoreFromMap(prayerMap[studentId] ?? {}, allDays)
    return { assignment_id: prayerColId, student_id: studentId, original_score: score, final_score: score }
  })
  const attRows = students
    .map(studentId => {
      const score = _calcAttendanceScore(attendanceMap[studentId] ?? [])
      return score === null ? null : {
        assignment_id: attColId,
        student_id: studentId,
        original_score: score,
        final_score: score,
      }
    })
    .filter(Boolean)

  const scoreCount = await _upsertStudentScoreRows([...prayerRows, ...attRows])
  return { classes: 1, columns: 2, scores: scoreCount, columnNames: _RELIGION_REQUIRED_COLUMNS.map(c => c.name) }
}

export async function fillPrayerScoresToReligionClassScores(options = {}) {
  const start = options.semesterStart
  const end = options.semesterEnd
  const allDays = _dateListForTerm(start, end)
  if (!allDays.length) throw new Error('ยังไม่ได้ตั้งค่าวันเปิด-ปิดภาคเรียน')

  const { data: classes, error } = await supabase
    .from('classes')
    .select(`
      id, class_name, skill_group,
      master_subjects ( subject_group ),
      class_students ( student_id )
    `)
    .range(0, 9999)
  if (error) throw error

  const religionClasses = (classes ?? []).filter(cls =>
    ['AGM', 'AGMVOC'].includes(cls.master_subjects?.subject_group)
  )
  const studentIds = [...new Set(religionClasses.flatMap(cls =>
    (cls.class_students ?? []).map(r => r.student_id).filter(Boolean)
  ))]
  if (!studentIds.length) return { classes: 0, columns: 0, scores: 0 }

  const prayerRecords = await _fetchPaged(
    'prayer_records',
    'student_id, check_date, status',
    q => q.gte('check_date', start).lte('check_date', end)
  )
  const studentIdSet = new Set(studentIds)
  const prayerMap = {}
  for (const r of prayerRecords) {
    if (!studentIdSet.has(r.student_id)) continue
    if (!prayerMap[r.student_id]) prayerMap[r.student_id] = {}
    prayerMap[r.student_id][r.check_date] = r.status
  }

  const classIds = religionClasses.map(c => c.id)
  const attendanceRows = await _fetchPaged(
    'attendances',
    'class_id, student_id, status',
    q => q.in('class_id', classIds)
  )
  const attendanceMap = {}
  for (const r of attendanceRows) {
    const key = `${r.class_id}:${r.student_id}`
    if (!attendanceMap[key]) attendanceMap[key] = []
    attendanceMap[key].push(r)
  }

  let scoreCount = 0
  let classCount = 0
  let ensuredColumns = 0
  for (const cls of religionClasses) {
    const students = (cls.class_students ?? []).map(r => r.student_id).filter(Boolean)
    if (!students.length) continue
    classCount++

    const attColId = await _ensureClassScoreColumn(cls.id, 'คะแนนมาเรียน', 10, 'EH', 'ระหว่างเรียน')
    const prayerColId = await _ensureClassScoreColumn(cls.id, 'คะแนนละหมาด', 10, 'EI', 'ระหว่างเรียน')
    ensuredColumns += 2

    const prayerRows = students.map(studentId => {
      const score = _calcPrayerScoreFromMap(prayerMap[studentId] ?? {}, allDays)
      return { assignment_id: prayerColId, student_id: studentId, original_score: score, final_score: score }
    })
    const attRows = students
      .map(studentId => {
        const score = _calcAttendanceScore(attendanceMap[`${cls.id}:${studentId}`] ?? [])
        return score === null ? null : {
          assignment_id: attColId,
          student_id: studentId,
          original_score: score,
          final_score: score,
        }
      })
      .filter(Boolean)

    scoreCount += await _upsertStudentScoreRows(prayerRows)
    scoreCount += await _upsertStudentScoreRows(attRows)
  }

  return { classes: classCount, columns: ensuredColumns, scores: scoreCount }
}

// ─── Exam Requests (Teacher) ──────────────────────────────────────────────────

export async function getTeacherExamRequests(teacherId) {
  const subjects = await supabase.from('master_subjects').select('id').eq('teacher_id', teacherId)
  const subjectIds = (subjects.data ?? []).map(s => s.id)
  if (!subjectIds.length) return []
  const { data: classRows } = await supabase.from('classes').select('id').in('course_id', subjectIds)
  const cids = (classRows ?? []).map(c => c.id)
  if (!cids.length) return []
  const { data, error } = await supabase
    .from('exam_requests')
    .select(`
      id, request_type, requested_date, requested_period_no,
      reason, status, teacher_comment, exam_attended, exam_score,
      students ( id, student_code, full_name, main_room, image_url ),
      classes ( id, class_name, master_subjects ( subject_name, subject_code ) ),
      class_score_columns ( id, assignment_name, max_score )
    `)
    .in('class_id', cids)
    .order('requested_date', { ascending: false })
    .order('id', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function reviewExamRequest(id, { status, teacher_comment }) {
  const { error } = await supabase.from('exam_requests')
    .update({ status, teacher_comment })
    .eq('id', id)
  if (error) throw error
}

export async function updateExamResult(id, { exam_attended, exam_score, studentId, assignmentId }) {
  const { error } = await supabase.from('exam_requests')
    .update({ exam_attended, exam_score: exam_attended ? (exam_score ?? null) : null })
    .eq('id', id)
  if (error) throw error
  if (exam_attended && exam_score != null && assignmentId && studentId) {
    await supabase.from('student_scores').upsert({
      student_id: studentId, assignment_id: assignmentId,
      original_score: exam_score, final_score: exam_score,
    }, { onConflict: 'student_id,assignment_id' })
  }
}

export async function getPendingExamRequestCount(teacherId) {
  const subjects = await supabase.from('master_subjects').select('id').eq('teacher_id', teacherId)
  const subjectIds = (subjects.data ?? []).map(s => s.id)
  if (!subjectIds.length) return 0
  const { data: classRows } = await supabase.from('classes').select('id').in('course_id', subjectIds)
  const cids = (classRows ?? []).map(c => c.id)
  if (!cids.length) return 0
  const { count } = await supabase.from('exam_requests')
    .select('*', { count: 'exact', head: true })
    .in('class_id', cids).eq('status', 'pending')
  return count ?? 0
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

// ─── Monitoring Data ──────────────────────────────────────────────────────────

export async function getPrayerMonitoringData(academicYear, semester) {
  // ใช้ _fetchAllStudents เพื่อ paginate ครบทุกคน (มากกว่า 1000)
  const [{ data: records, error }, students, { data: homerooms }] = await Promise.all([
    supabase.from('prayer_records')
      .select('student_id, main_room, status, week_number, check_date')
      .not('week_number', 'is', null)
      .order('week_number').order('main_room'),
    _fetchAllStudents(
      'id, full_name, student_code, religion_room',
      q => q.not('religion_room', 'is', null).neq('religion_room', '')
    ),
    supabase.from('homeroom_teachers')
      .select('id, main_room, category, teacher_id, teachers(id, full_name, teacher_code)')
      .eq('academic_year', academicYear)
      .eq('semester', semester)
      .eq('category', 'ศาสนา')
      .order('main_room'),
  ])
  if (error) throw error
  return { records: records ?? [], students, homerooms: homerooms ?? [] }
}

export async function getLifeSkillMonitoringData(academicYear, semester) {
  const [{ columns, scores }, students, { data: homerooms }] = await Promise.all([
    getAllLifeSkillScores(academicYear, semester),
    _fetchAllStudents('id, main_room', q => q.not('main_room','is',null).neq('main_room','')),
    supabase.from('homeroom_teachers')
      .select('id, main_room, category, teacher_id, teachers(id, full_name, teacher_code)')
      .eq('academic_year', academicYear)
      .eq('semester', semester)
      .eq('category', 'สามัญ')
      .order('main_room'),
  ])
  return { columns: columns ?? [], scores: scores ?? [], students, homerooms: homerooms ?? [] }
}

export async function getReadingMonitoringData(academicYear, semester) {
  const [{ columns, scores }, students, { data: homerooms }] = await Promise.all([
    getAllReadingScores(academicYear, semester),
    _fetchAllStudents('id, main_room', q => q.not('main_room','is',null).neq('main_room','')),
    supabase.from('homeroom_teachers')
      .select('id, main_room, category, teacher_id, teachers(id, full_name, teacher_code)')
      .eq('academic_year', academicYear)
      .eq('semester', semester)
      .eq('category', 'สามัญ')
      .order('main_room'),
  ])
  return { columns: columns ?? [], scores: scores ?? [], students, homerooms: homerooms ?? [] }
}

// ─── PP5 Document ─────────────────────────────────────────────────────────────
export async function getClassForDoc(classId) {
  const { data, error } = await supabase
    .from('classes')
    .select(`
      id, course_id, class_name, skill_group, head_student_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id, phone ),
      students ( full_name, student_code )
    `)
    .eq('id', classId)
    .single()
  if (error) throw error
  return data
}

export async function getClassAttendanceAllFull(classId) {
  const { data, error } = await supabase
    .from('attendances')
    .select('student_id, session_number, check_date, status')
    .eq('class_id', classId)
    .order('session_number')
  if (error) throw error
  return data ?? []
}

export async function getReadingScoresForClass(studentIds, academicYear, semester) {
  if (!studentIds.length) return { columns: [], scores: [] }
  const { data: cols } = await supabase
    .from('reading_score_columns')
    .select('id, column_name, full_score')
    .eq('academic_year', academicYear)
    .eq('semester', semester)
  const colIds = (cols ?? []).map(c => c.id)
  if (!colIds.length) return { columns: cols ?? [], scores: [] }
  const { data: scores } = await supabase
    .from('reading_scores')
    .select('student_id, column_id, score')
    .in('student_id', studentIds)
    .in('column_id', colIds)
  return { columns: cols ?? [], scores: scores ?? [] }
}

export async function getLifeSkillScoresForClass(studentIds, academicYear, semester) {
  if (!studentIds.length) return { columns: [], scores: [] }
  const { data: cols } = await supabase
    .from('life_skill_columns')
    .select('id, column_name, full_score')
    .eq('academic_year', academicYear)
    .eq('semester', semester)
  const colIds = (cols ?? []).map(c => c.id)
  if (!colIds.length) return { columns: cols ?? [], scores: [] }
  const { data: scores } = await supabase
    .from('life_skill_scores')
    .select('student_id, column_id, score')
    .in('student_id', studentIds)
    .in('column_id', colIds)
  return { columns: cols ?? [], scores: scores ?? [] }
}

// ─── Supervisor / Role System ─────────────────────────────────────────────────

export async function getTeachersWithPositions() {
  const { data, error } = await supabase
    .from('teachers')
    .select('id, teacher_code, full_name, category, dept, image_url, phone, position, position_dept_id')
    .order('full_name')
  if (error) throw error
  return data ?? []
}

export async function updateTeacherPosition(id, position, positionDeptId) {
  const { error } = await supabase
    .from('teachers')
    .update({ position: position || null, position_dept_id: positionDeptId || null })
    .eq('id', id)
  if (error) throw error
}

// โหลดข้อมูล progress ทั้งหมดสำหรับ supervisor dashboard
export async function getSupervisorProgress() {
  const [teacherRes, classRes, attRes, scoreColRes, scoreRes] = await Promise.all([
    supabase.from('teachers')
      .select('id, full_name, category, dept, subject_group, image_url, phone, login_email, position, position_dept_id'),
    supabase.from('classes')
      .select('id, class_name, day1_date, day2_date, day3_date, day4_date, day5_date, day6_date, master_subjects!inner(id, teacher_id, subject_name, subject_code, subject_group, credit)'),
    supabase.from('attendances')
      .select('class_id, check_date')
      .order('check_date', { ascending: false }),
    supabase.from('class_score_columns')
      .select('id, class_id, assignment_name, max_score'),
    supabase.from('student_scores')
      .select('assignment_id'),
  ])

  const teachers  = teacherRes.data  ?? []
  const classes   = classRes.data    ?? []
  const attRows   = attRes.data      ?? []
  const scoreCols = scoreColRes.data ?? []
  const scoreRows = scoreRes.data    ?? []

  // index: class_id → teacher_id
  const classTeacher = {}
  const classDates   = {}
  for (const c of classes) {
    const tid = c.master_subjects?.teacher_id
    if (tid) classTeacher[c.id] = tid
    classDates[c.id] = !!c.day1_date
  }

  // index: class_id → last check_date
  const attLast = {}
  const attClasses = new Set()
  for (const a of attRows) {
    if (!attLast[a.class_id]) attLast[a.class_id] = a.check_date
    attClasses.add(a.class_id)
  }

  // filled score column ids
  const filledCols = new Set(scoreRows.map(s => s.assignment_id))

  // index: class_id → score cols
  const colsByClass = {}
  for (const c of scoreCols) {
    if (!colsByClass[c.class_id]) colsByClass[c.class_id] = []
    colsByClass[c.class_id].push(c.id)
  }

  // คำนวณ metric ต่อครู
  const today = new Date()
  const teacherMetrics = teachers.map(t => {
    const myClasses = classes.filter(c => c.master_subjects?.teacher_id === t.id)
    const n = myClasses.length

    // ลงทะเบียนแล้วหรือยัง
    const isRegistered = !!t.login_email

    // โปรไฟล์
    const profileScore = (t.image_url ? 1 : 0) + (t.phone ? 1 : 0)
    const profileStatus = profileScore === 2 ? 'ok' : profileScore === 1 ? 'warn' : 'none'

    // วันสอน: กี่ห้องที่ระบุวันสอน
    const datesOk = myClasses.filter(c => classDates[c.id]).length

    // เช็คชื่อ: ห้องที่มีบันทึก + วันล่าสุด
    let lastAtt = null
    let attCount = 0
    for (const c of myClasses) {
      if (attClasses.has(c.id)) {
        attCount++
        const d = new Date(attLast[c.id])
        if (!lastAtt || d > lastAtt) lastAtt = d
      }
    }
    const daysSinceAtt = lastAtt ? Math.floor((today - lastAtt) / 86400000) : 999
    const attStatus = n === 0 ? 'na'
      : attCount === n && daysSinceAtt <= 14 ? 'ok'
      : attCount > 0 ? 'warn' : 'none'

    // คะแนน
    let scoreColCount = 0, scoreFilledCount = 0
    for (const c of myClasses) {
      const cols = colsByClass[c.id] ?? []
      scoreColCount += cols.length
      scoreFilledCount += cols.filter(id => filledCols.has(id)).length
    }
    const scorePct = scoreColCount > 0 ? Math.round(scoreFilledCount / scoreColCount * 100) : null
    const scoreStatus = scorePct === null ? 'na'
      : scorePct >= 80 ? 'ok' : scorePct >= 40 ? 'warn' : 'none'

    return {
      ...t,
      isRegistered,
      classCount: n,
      datesOk,
      attCount,
      lastAtt,
      daysSinceAtt,
      attStatus,
      profileStatus,
      scorePct,
      scoreStatus,
      myClasses,
    }
  })

  return teacherMetrics
}

export async function getSupervisorComments(teacherId) {
  const { data, error } = await supabase
    .from('supervisor_comments')
    .select('id, supervisor_id, metric, comment, created_at')
    .eq('teacher_id', teacherId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function addSupervisorComment(supervisorId, teacherId, metric, comment) {
  const { error } = await supabase.from('supervisor_comments')
    .insert({ supervisor_id: supervisorId, teacher_id: teacherId, metric, comment })
  if (error) throw error
}

export async function deleteSupervisorComment(id) {
  const { error } = await supabase.from('supervisor_comments').delete().eq('id', id)
  if (error) throw error
}

export async function getAttendanceSummaryByClass(classIds) {
  if (!classIds.length) return []
  const { data } = await supabase
    .from('attendances')
    .select('class_id, session_number, check_date')
    .in('class_id', classIds)
  return data ?? []
}

export async function getScoreSummaryByClass(classIds) {
  if (!classIds.length) return { cols: [], scores: [] }
  const { data: cols } = await supabase
    .from('class_score_columns')
    .select('id, class_id, assignment_name, max_score, assignment_type')
    .in('class_id', classIds)
  const colIds = (cols ?? []).map(c => c.id)
  const { data: scores } = colIds.length
    ? await supabase.from('student_scores').select('assignment_id').in('assignment_id', colIds)
    : { data: [] }
  return { cols: cols ?? [], scores: scores ?? [] }
}

export async function getClassStudentsAndScores(classId) {
  const [stRes, colRes] = await Promise.all([
    supabase.from('students').select('id, student_code, full_name').eq('class_id', classId).order('student_code'),
    supabase.from('class_score_columns').select('id, assignment_name, max_score, assignment_type').eq('class_id', classId).order('id'),
  ])
  const students = stRes.data ?? []
  const cols     = colRes.data ?? []
  const colIds   = cols.map(c => c.id)
  const { data: scores } = colIds.length
    ? await supabase.from('student_scores').select('student_id, assignment_id, final_score').in('assignment_id', colIds)
    : { data: [] }
  return { students, cols, scores: scores ?? [] }
}

export async function getClassAttendanceFull(classId) {
  const { data } = await supabase
    .from('attendances')
    .select('student_id, session_number, check_date, status')
    .eq('class_id', classId)
    .order('session_number')
  return data ?? []
}

// อัปเดต dept ให้ครูที่ยังไม่ลงทะเบียน (สำหรับหัวหน้ากลุ่มสาระ)
export async function assignTeacherToDept(teacherId, dept) {
  const { error } = await supabase.from('teachers')
    .update({ dept })
    .eq('id', teacherId)
  if (error) throw error
}

// ── supervisor notifications ───────────────────────────────────────────────────

export async function addSupervisorCommentWithNotify(supervisorId, teacherId, metric, comment, notify) {
  const { error } = await supabase.from('supervisor_comments')
    .insert({ supervisor_id: supervisorId, teacher_id: teacherId, metric, comment, notify_teacher: notify })
  if (error) throw error
}

export async function getUnreadNotifications(teacherId) {
  const { data } = await supabase
    .from('supervisor_comments')
    .select('id, metric, comment, created_at, supervisor_id, supervisor:supervisor_id(full_name, position)')
    .eq('teacher_id', teacherId)
    .eq('notify_teacher', true)
    .eq('is_read', false)
    .order('created_at', { ascending: false })
  return data ?? []
}

export async function markNotificationsRead(teacherId) {
  await supabase.from('supervisor_comments')
    .update({ is_read: true })
    .eq('teacher_id', teacherId)
    .eq('notify_teacher', true)
    .eq('is_read', false)
}

export async function getCommentPhrases(metric) {
  const q = supabase.from('supervisor_comment_phrases').select('*').order('sort_order')
  if (metric) q.eq('metric', metric)
  const { data } = await q
  return data ?? []
}
export async function addCommentPhrase(metric, phrase) {
  const { error } = await supabase.from('supervisor_comment_phrases').insert({ metric, phrase })
  if (error) throw error
}
export async function updateCommentPhrase(id, phrase) {
  const { error } = await supabase.from('supervisor_comment_phrases').update({ phrase }).eq('id', id)
  if (error) throw error
}
export async function deleteCommentPhrase(id) {
  const { error } = await supabase.from('supervisor_comment_phrases').delete().eq('id', id)
  if (error) throw error
}

export async function getClassByIdFull(classId) {
  const { data, error } = await supabase
    .from('classes')
    .select(`id, course_id, class_name, day1_date, day2_date, day3_date, day4_date, day5_date, day6_date, classroom_id,
      master_subjects(id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id)`)
    .eq('id', classId)
    .single()
  if (error) throw error
  return data
}
