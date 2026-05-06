import { supabase } from './supabase.js'

// ─── Student Profile ──────────────────────────────────────────────────────────
export async function getMyStudentProfile() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return null
  const { data, error } = await supabase
    .from('students')
    .select('id, student_code, full_name, main_room, religion_room, image_url, profile_id')
    .eq('profile_id', session.user.id)
    .maybeSingle()
  if (error) throw error
  return data
}

// ─── Enrolled Classes ─────────────────────────────────────────────────────────
export async function getMyEnrolledClasses(studentId) {
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
  if (error) throw error
  return (data ?? []).map(r => r.classes).filter(Boolean)
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
      reason, status, teacher_comment, created_at,
      classes ( id, class_name, master_subjects ( subject_name, subject_code ) ),
      class_score_columns ( assignment_name )
    `)
    .eq('student_id', studentId)
    .order('id', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function submitExamRequest(payload) {
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
