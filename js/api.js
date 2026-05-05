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
    .select('id, teacher_code, full_name, phone, image_url, dept, subject_group, skill_group, staff_type, category, profile_id, teachers_quota(total_classes_created, is_paid)')
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
      id, class_name, skill_group, google_sheet_id, gas_url, head_student_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id ),
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
      id, teacher_code, full_name, category, phone, image_url, profile_id,
      dept, skill_group, subject_group, staff_type,
      teachers_quota ( total_classes_created, is_paid )
    `)
    .order('full_name')
  if (error) throw error
  return data ?? []
}

export async function getTeacherById(id) {
  const { data, error } = await supabase
    .from('teachers')
    .select('id, teacher_code, full_name, category, phone, image_url, profile_id')
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
      id, class_name, skill_group, google_sheet_id, gas_url,
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
    'id, student_code, full_name, main_room, religion_room, gender, image_url',
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
    .select('students ( id, student_code, full_name, image_url )')
    .eq('class_id', classId)
    .order('students(student_code)')
  if (error) throw error
  return (data ?? []).map(r => r.students).filter(Boolean)
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
    await supabase.from('prayer_records').delete()
      .eq('teacher_id', r.teacher_id).eq('student_id', r.student_id)
      .eq('main_room', r.main_room).eq('check_date', r.check_date)
  }
  const { error } = await supabase.from('prayer_records').insert(records)
  if (error) throw error
}

export async function savePrayerCell(teacherId, studentId, room, checkDate, status, weekNumber = null) {
  // ลบก่อนเสมอ (ไม่ต้องพึ่ง unique constraint)
  await supabase.from('prayer_records').delete()
    .eq('teacher_id', teacherId).eq('student_id', studentId)
    .eq('main_room', room).eq('check_date', checkDate)

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
    .select('id, dept_code, dept_name, head_name, head_photo_url, head_sign_url, teacher_code')
    .order('dept_code')
  // NOTE: เพิ่ม category ใน SELECT หลังจากรัน patch_departments_category.sql แล้ว
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
    'id, student_code, full_name, main_room, religion_room, gender, image_url',
    q => q.eq('main_room', room),
    'student_code'
  )
}

export async function getStudentsByReligionRoom(room) {
  return _fetchAllStudents(
    'id, student_code, full_name, main_room, religion_room, gender, image_url',
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
    .select('id, package_type, amount, status, slip_url, admin_note, created_at, master_subjects(subject_name)')
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
      created_at, reviewed_at,
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
