import { supabase } from './supabase.js'
import { getMyEnrolledClasses } from './student-api.js'
import { getClassSessionDOWs, getSchoolHolidays, getSystemConfig } from './api.js'
import { _generateSessions } from './teacher-views-utils.js'

const BUCKET = 'student-leave-proofs'
const MAX_PROOF_BYTES = 5 * 1024 * 1024
const ALLOWED_PROOF_TYPES = new Set(['image/jpeg', 'image/png', 'application/pdf'])

export async function getMyStudentLeaveRequests(studentId) {
  const { data, error } = await supabase.from('student_leave_requests')
    .select('id, leave_type, start_date, end_date, reason, proof_path, status, teacher_comment, reviewed_at, attendance_rows_count, proof_deleted_at, created_at')
    .eq('student_id', studentId).order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getAdvisorStudentLeaveRequests() {
  const { data, error } = await supabase.from('student_leave_requests')
    .select(`id, student_id, leave_type, start_date, end_date, reason, proof_path,
      status, teacher_comment, reviewed_at, attendance_rows_count, created_at,
      students ( full_name, student_code, main_room, religion_room, image_url, photo_url, profile_id )`)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getPendingAdvisorStudentLeaveCount() {
  const { count, error } = await supabase.from('student_leave_requests')
    .select('id', { count: 'exact', head: true }).eq('status', 'pending')
  if (error) throw error
  return count ?? 0
}

export async function getPendingAdvisorStudentLeaveRequests() {
  const { data, error } = await supabase.from('student_leave_requests')
    .select(`id, student_id, leave_type, start_date, end_date, created_at,
      students ( full_name, student_code, main_room, religion_room, image_url, photo_url )`)
    .eq('status', 'pending').order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getStudentLeaveProofUrl(path) {
  if (!path) return null
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 120)
  if (error) throw error
  return data?.signedUrl ?? null
}

export async function submitStudentLeaveRequest(student, { leaveType, startDate, endDate, reason, file }) {
  if (!student?.id) throw new Error('ไม่พบข้อมูลนักเรียน')
  if (!['excused', 'sick'].includes(leaveType)) throw new Error('กรุณาเลือกประเภทการลา')
  if (!startDate || !endDate || startDate > endDate) throw new Error('กรุณาเลือกช่วงวันที่ให้ถูกต้อง')
  if (!file || !ALLOWED_PROOF_TYPES.has(file.type)) throw new Error('แนบใบลาที่อนุมัติแล้วเป็น JPG, PNG หรือ PDF')
  if (file.size > MAX_PROOF_BYTES) throw new Error('ไฟล์มีขนาดเกิน 5 MB')

  const ext = file.type === 'application/pdf' ? 'pdf' : file.type === 'image/png' ? 'png' : 'jpg'
  const path = `${student.id}/${Date.now()}-${crypto.randomUUID()}.${ext}`
  const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file, {
    contentType: file.type, upsert: false,
  })
  if (uploadError) throw uploadError

  const { data, error } = await supabase.from('student_leave_requests').insert({
    student_id: student.id,
    leave_type: leaveType,
    start_date: startDate,
    end_date: endDate,
    reason: String(reason ?? '').trim() || null,
    proof_path: path,
  }).select('id').single()
  if (error) {
    await supabase.storage.from(BUCKET).remove([path]).catch(() => {})
    throw error
  }
  return data
}

function mapSessionNumber(classData, targetSessionNo, targetPerWeek, sourcePerWeek) {
  if (!classData.source_class_id) return targetSessionNo
  const weekIndex = Math.floor((targetSessionNo - 1) / targetPerWeek)
  const positionInWeek = (targetSessionNo - 1) % targetPerWeek
  return weekIndex * sourcePerWeek + positionInWeek + 1
}

export async function getStudentLeaveAttendanceRows(studentId, startDate, endDate, status) {
  if (!['excused', 'sick'].includes(status)) throw new Error('ประเภทการลาที่ไม่ถูกต้อง')
  const cfg = await getSystemConfig()
  const academicYear = Number(cfg.academicYear ?? cfg.academic_year)
  const semester = Number(cfg.semester)
  if (!Number.isInteger(academicYear) || ![1, 2].includes(semester)) throw new Error('ไม่พบข้อมูลภาคเรียนปัจจุบัน')
  const enrolled = await getMyEnrolledClasses(studentId, academicYear, semester)
  const classIds = [...new Set((enrolled ?? []).map(c => Number(c.id)).filter(Number.isInteger))]
  const { data: classMeta, error: classMetaError } = classIds.length
    ? await supabase.from('classes')
      .select('id, source_class_id, day1_date, day2_date, day3_date, day4_date, day5_date, day6_date')
      .in('id', classIds)
    : { data: [], error: null }
  if (classMetaError) throw classMetaError
  const metaById = new Map((classMeta ?? []).map(row => [Number(row.id), row]))
  const currentClasses = (enrolled ?? []).map(row => ({ ...row, ...(metaById.get(Number(row.id)) ?? {}) }))
  const holidays = new Set(await getSchoolHolidays(academicYear, semester))
  const classRows = await Promise.all(currentClasses.map(async classData => {
    const [dowPattern, sourceRows] = await Promise.all([
      getClassSessionDOWs(classData.id).catch(() => []),
      classData.source_class_id
        ? supabase.from('classes').select('id, master_subjects(credit)').eq('id', classData.source_class_id).maybeSingle()
        : Promise.resolve({ data: null }),
    ])
    if (sourceRows.error) throw sourceRows.error
    const subject = classData.master_subjects ?? {}
    const isVocationalCommon = subject.subject_group === 'ACDMVOC'
    const targetPerWeek = (isVocationalCommon && dowPattern.length)
      ? dowPattern.length
      : Math.max(1, Math.round((Number(subject.credit) || 1) * 2))
    const targetSessions = _generateSessions(classData, Number(subject.credit) || 1, dowPattern, isVocationalCommon)
      .filter(s => s.ds >= startDate && s.ds <= endDate && !holidays.has(s.ds))

    let sourcePerWeek = targetPerWeek
    if (classData.source_class_id) {
      if (isVocationalCommon) {
        const sourceDows = await getClassSessionDOWs(classData.source_class_id).catch(() => [])
        if (sourceDows.length) sourcePerWeek = sourceDows.length
        else if (sourceRows.data?.master_subjects?.credit) sourcePerWeek = Math.max(1, Math.round(Number(sourceRows.data.master_subjects.credit) * 2))
      } else if (sourceRows.data?.master_subjects?.credit) {
        sourcePerWeek = Math.max(1, Math.round(Number(sourceRows.data.master_subjects.credit) * 2))
      }
    }
    return targetSessions.map(session => ({
      class_id: classData.source_class_id ?? classData.id,
      session_number: mapSessionNumber(classData, session.n, targetPerWeek, sourcePerWeek),
      check_date: session.ds,
      status,
    }))
  }))

  const deduped = new Map()
  for (const row of classRows.flat()) deduped.set(`${row.class_id}:${row.session_number}`, row)
  return [...deduped.values()]
}

export async function reviewStudentLeaveRequest(request, { status, teacherComment = '' }) {
  const rows = status === 'approved'
    ? await getStudentLeaveAttendanceRows(request.student_id, request.start_date, request.end_date, request.leave_type)
    : []
  const { data, error } = await supabase.rpc('review_student_leave_request', {
    p_request_id: request.id,
    p_status: status,
    p_teacher_comment: String(teacherComment ?? '').trim() || null,
    p_attendance_rows: rows,
  })
  if (error) throw error
  return data
}
