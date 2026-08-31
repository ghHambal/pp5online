import { supabase } from './supabase.js'

// ─── ตั้งค่าระบบ (regrade_config: key/value jsonb, ตารางแยกเฉพาะโมดูลนี้) ────────
export async function getRegradeConfig() {
  const { data, error } = await supabase.from('regrade_config').select('key,value')
  if (error) throw error
  return Object.fromEntries((data ?? []).map(r => [r.key, r.value]))
}

export async function updateRegradeConfig(updates) {
  const { data: { session } } = await supabase.auth.getSession()
  // value เป็นคอลัมน์ jsonb NOT NULL — ส่ง JS null ตรงๆ จะกลายเป็น SQL NULL (ไม่ใช่ jsonb 'null')
  // แล้วชน constraint เสมอ (เจอบั๊กจริงกับ regrade_slip_template_id ตอนยังไม่เลือกเทมเพลต) กันไว้ที่นี่
  // เผื่อคีย์อื่นในอนาคตพลาดส่ง null/undefined มาเหมือนกัน
  const rows = Object.entries(updates).map(([key, value]) => ({
    key, value: value ?? '', updated_by: session?.user?.id ?? null, updated_at: new Date().toISOString(),
  }))
  const { error } = await supabase.from('regrade_config').upsert(rows, { onConflict: 'key' })
  if (error) throw error
}

// ─── ตัวตนผู้ใช้ปัจจุบัน ──────────────────────────────────────────────────────
export async function getMyStudentRow() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return null
  const { data, error } = await supabase.from('students')
    .select('id, full_name, main_room, religion_room, photo_url, image_url, student_code')
    .eq('profile_id', session.user.id).maybeSingle()
  if (error) throw error
  return data
}

export async function getMyTeacherRow() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return null
  const { data, error } = await supabase.from('teachers')
    .select('id, full_name, category, image_url, position, positions, position_dept_id')
    .eq('profile_id', session.user.id).maybeSingle()
  if (error) throw error
  return data
}

// ─── ฝั่งนักเรียน ─────────────────────────────────────────────────────────────
export async function getMyRegradeSubjects(studentId) {
  const { data, error } = await supabase.from('regrade_subjects')
    .select('*, teachers(full_name, image_url)')
    .eq('student_id', studentId)
    .order('semester', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function declareIntent(subjectRowId) {
  const { error } = await supabase.from('regrade_subjects')
    .update({ status: 'จำนงแล้ว', declared_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq('id', subjectRowId).eq('status', 'ยังไม่แจ้ง')
  if (error) throw error
}

// ─── ฝั่งครู ──────────────────────────────────────────────────────────────────
export async function getMyTeachingRegradeSubjects(teacherId) {
  const { data, error } = await supabase.from('regrade_subjects')
    .select('*, students(full_name, student_code, main_room, religion_room, photo_url, image_url)')
    .eq('teacher_id', teacherId)
    .order('semester', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function assignWork(subjectRowId, { method, dueText, fileUrl }) {
  if (!['นัดสอบปรับ', 'ให้งานแก้'].includes(method)) throw new Error('method ไม่ถูกต้อง')
  if (!dueText) throw new Error('กรุณาเลือกวันที่')
  // ใช้ RPC เพื่อให้ครูแก้คำตอบเดิมได้อย่างปลอดภัยโดยอัปเดตเฉพาะฟิลด์คำตอบ
  // (ไม่เปิดสิทธิ์ UPDATE คอลัมน์รายวิชา/นักเรียนอื่น ๆ ผ่าน Data API)
  const { error } = await supabase.rpc('regrade_teacher_save_response', {
    p_subject_id: subjectRowId,
    p_method: method,
    p_due_text: dueText,
    p_file_url: fileUrl || null,
  })
  if (error) throw error
}

export async function cancelAssignedWork(subjectRowId) {
  const { error } = await supabase.rpc('regrade_teacher_cancel_response', { p_subject_id: subjectRowId })
  if (error) throw error
}

// ─── ฝั่งทะเบียน/แอดมิน (RLS อนุญาตเฉพาะ is_regrade_registrar()) ────────────────
export async function getPendingCloseOut(query) {
  let q = supabase.from('regrade_subjects')
    .select('*, students(full_name, student_code, main_room, religion_room, photo_url, image_url), teachers(full_name)')
    .eq('status', 'กำลังดำเนินการปรับแก้')
    .order('assigned_at', { ascending: false })
  const { data, error } = await q
  if (error) throw error
  const rows = data ?? []
  if (!query) return rows
  const q2 = query.trim().toLowerCase()
  return rows.filter(r =>
    (r.students?.full_name || '').toLowerCase().includes(q2) ||
    (r.students?.student_code || '').includes(q2))
}

export async function closeOutSubject(subjectRowId) {
  const { data: seqRow, error: seqErr } = await supabase.rpc('nextval_regrade_completed_seq')
  if (seqErr) throw seqErr
  const { error } = await supabase.from('regrade_subjects')
    .update({
      status: 'ปรับแก้สำเร็จ', completed_seq: seqRow, grade_entered: false,
      completed_at: new Date().toISOString(), updated_at: new Date().toISOString(),
    })
    .eq('id', subjectRowId).eq('status', 'กำลังดำเนินการปรับแก้')
  if (error) throw error
}

export async function getGradeTrackingRows(category) {
  const { data, error } = await supabase.from('regrade_subjects')
    .select('*, students(full_name, student_code, main_room, religion_room, photo_url, image_url), teachers(full_name)')
    .eq('status', 'ปรับแก้สำเร็จ').eq('category', category)
    .order('completed_seq', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function markGradeEntered(subjectRowId) {
  const { error } = await supabase.from('regrade_subjects')
    .update({ grade_entered: true, updated_at: new Date().toISOString() })
    .eq('id', subjectRowId)
  if (error) throw error
}

// ─── สิทธิ์ผู้ดูแลระบบ/เจ้าหน้าที่ทะเบียน (regrade_admins / regrade_registrar_staff) ─
// ระบุ FK ตรงๆ ด้วย profiles!profile_id(...) เพราะทั้ง profile_id และ granted_by
// ต่างก็อ้างไป profiles(id) ทั้งคู่ — ถ้าไม่ระบุ PostgREST จะ error "more than one relationship found"
export async function getRegradeAdmins() {
  const { data, error } = await supabase.from('regrade_admins')
    .select('profile_id, created_at, profiles!profile_id(user_code)')
  if (error) throw error
  return data ?? []
}

export async function getRegradeRegistrarStaff() {
  const { data, error } = await supabase.from('regrade_registrar_staff')
    .select('profile_id, created_at, profiles!profile_id(user_code)')
  if (error) throw error
  return data ?? []
}

export async function addRegradeAdmin(profileId) {
  const { data: { session } } = await supabase.auth.getSession()
  const { error } = await supabase.from('regrade_admins')
    .insert({ profile_id: profileId, granted_by: session?.user?.id ?? null })
  if (error) throw error
}

export async function removeRegradeAdmin(profileId) {
  const { error } = await supabase.from('regrade_admins').delete().eq('profile_id', profileId)
  if (error) throw error
}

export async function addRegradeRegistrarStaff(profileId) {
  const { data: { session } } = await supabase.auth.getSession()
  const { error } = await supabase.from('regrade_registrar_staff')
    .insert({ profile_id: profileId, granted_by: session?.user?.id ?? null })
  if (error) throw error
}

export async function removeRegradeRegistrarStaff(profileId) {
  const { error } = await supabase.from('regrade_registrar_staff').delete().eq('profile_id', profileId)
  if (error) throw error
}

export async function getRegradeExecutives() {
  const { data, error } = await supabase.from('regrade_executives')
    .select('profile_id, created_at, profiles!profile_id(user_code)')
  if (error) throw error
  return data ?? []
}

export async function addRegradeExecutive(profileId) {
  const { data: { session } } = await supabase.auth.getSession()
  const { error } = await supabase.from('regrade_executives')
    .insert({ profile_id: profileId, granted_by: session?.user?.id ?? null })
  if (error) throw error
}

export async function removeRegradeExecutive(profileId) {
  const { error } = await supabase.from('regrade_executives').delete().eq('profile_id', profileId)
  if (error) throw error
}

// เฉพาะครูที่มีบัญชีผู้ใช้ (profile_id ไม่ว่าง) เท่านั้นที่มอบสิทธิ์ได้ — ใช้ทำช่องค้นหาชื่อ/รหัสครู
export async function getAllTeachersForPicker() {
  const { data, error } = await supabase.from('teachers')
    .select('id, full_name, teacher_code, profile_id, category')
    .not('profile_id', 'is', null)
    .order('full_name')
  if (error) throw error
  return data ?? []
}

// ─── หัวหน้ากลุ่มสาระ: จัดการวิชาที่ยังไม่มีครูผู้สอน (เฉพาะหมวดของตัวเอง — คุมจริงที่ RLS) ──
export async function getUnassignedRegradeSubjects(category) {
  const { data, error } = await supabase.from('regrade_subjects')
    .select('*, students(full_name, student_code, main_room, religion_room, photo_url, image_url)')
    .is('teacher_id', null)
    .eq('category', category)
    .order('subject_code')
  if (error) throw error
  return data ?? []
}

export async function assignSubjectTeacherBulk(subjectCode, category, teacherId) {
  const { data, error } = await supabase.from('regrade_subjects')
    .update({ teacher_id: teacherId, updated_at: new Date().toISOString() })
    .eq('subject_code', subjectCode).eq('category', category).is('teacher_id', null)
    .select('id')
  if (error) throw error
  return data?.length ?? 0
}

export async function getRegradeDistinctClassLevels() {
  const { data, error } = await supabase.rpc('regrade_distinct_class_levels')
  if (error) throw error
  return data ?? []
}

export async function getDepartmentById(id) {
  if (!id) return null
  const { data, error } = await supabase.from('departments')
    .select('id, dept_code, dept_name').eq('id', id).maybeSingle()
  if (error) throw error
  return data
}

// ─── ผู้บริหาร: เจาะลึกดูรายชื่อนักเรียนตามระดับชั้น -> ห้อง -> รายวิชา ─────────
export async function getClassroomSummary(category, classLevel) {
  const { data, error } = await supabase.rpc('regrade_classroom_summary', { p_category: category, p_class_level: classLevel })
  if (error) throw error
  return data ?? []
}

export async function getClassroomStudents(category, room) {
  const { data, error } = await supabase.rpc('regrade_classroom_students', { p_category: category, p_room: room })
  if (error) throw error
  return data ?? []
}

export async function getStudentSubjectsForExec(studentId) {
  const { data, error } = await supabase.rpc('regrade_student_subjects_for_exec', { p_student_id: studentId })
  if (error) throw error
  return data ?? []
}

export async function getTopStudentsNeedingAttention({ category = null, classLevel = null, room = null, limit = 20 } = {}) {
  const { data, error } = await supabase.rpc('regrade_top_students_needing_attention', {
    p_category: category, p_class_level: classLevel, p_room: room, p_limit: limit,
  })
  if (error) throw error
  return data ?? []
}

// ─── สิทธิ์ของฉันเอง (ใช้แค่ตัดสินใจโชว์/ซ่อนเมนูฝั่ง client — ของจริงคุมที่ RLS) ──
export async function checkMyRegradePermissions() {
  const [{ data: isAdmin }, { data: isRegistrar }, { data: isExecutive }] = await Promise.all([
    supabase.rpc('is_regrade_admin'),
    supabase.rpc('is_regrade_registrar'),
    supabase.rpc('is_regrade_executive'),
  ])
  return { isAdmin: !!isAdmin, isRegistrar: !!isRegistrar, isExecutive: !!isExecutive }
}

// ─── บอร์ดผู้บริหาร ───────────────────────────────────────────────────────────
// ใช้ RPC ที่รวมผลสรุป (group by category/status/class_level/ครู) ในฐานข้อมูลแล้วส่งกลับ
// เป็นแถวสรุป ไม่ใช่ทุกแถวดิบ — บอร์ดนี้แสดงแค่ตัวเลขสถิติ ไม่เคยแสดงรายชื่อนักเรียนทีละคน
// จึงไม่จำเป็นต้องดึงข้อมูลดิบหลักหมื่นแถวมาที่เครื่องผู้ใช้เลย (เร็วกว่ามาก + payload เล็กกว่ามาก
// เทียบกับการ paginate ดึงทุกแถวมาแล้วนับที่ฝั่ง client)
export async function getAllRegradeSubjectsForDashboard() {
  const { data, error } = await supabase.rpc('regrade_dashboard_stats')
  if (error) throw error
  return data ?? []
}

// ─── นำเข้าข้อมูลย้อนหลังด้วย CSV (เฉพาะภาคเรียนก่อนหน้าปัจจุบัน, source='csv') ───
// รูปแบบ CSV ที่รองรับ (ใช้ชื่อคอลัมน์ภาษาอังกฤษหรือไทยก็ได้):
// student_code/รหัสนักเรียน, subject_code/รหัสวิชา, subject_name/รายวิชา,
// category/หมวด (ต้องเป็น "สามัญ" หรือ "ศาสนา" เท่านั้น), class_level/ชั้นที่ติด,
// semester/ภาคเรียน (จำเป็น เช่น "1/2567"), teacher_code/รหัสครู (ไม่บังคับ),
// grade_failed_at/เกรดที่ติด (ไม่บังคับ)
function mapRegradeCsvRow(row) {
  return {
    student_code: String(row['student_code'] || row['รหัสนักเรียน'] || '').trim(),
    subject_code: String(row['subject_code'] || row['รหัสวิชา'] || '').trim(),
    subject_name: String(row['subject_name'] || row['รายวิชา'] || '').trim(),
    category: String(row['category'] || row['หมวด'] || '').trim(),
    class_level: (row['class_level'] || row['ชั้นที่ติด'] || '').trim() || null,
    semester: String(row['semester'] || row['ภาคเรียน'] || '').trim(),
    teacher_code: (row['teacher_code'] || row['รหัสครู'] || '').trim() || null,
    grade_failed_at: (row['grade_failed_at'] || row['เกรดที่ติด'] || '').trim() || null,
  }
}

export function previewRegradeCsvRows(rawRows) {
  return rawRows.map(mapRegradeCsvRow)
}

export async function importRegradeSubjectsCsv(rawRows, onProgress) {
  const rows = rawRows.map(mapRegradeCsvRow)
  const studentCodes = [...new Set(rows.map(r => r.student_code).filter(Boolean))]
  const teacherCodes = [...new Set(rows.map(r => r.teacher_code).filter(Boolean))]

  const [{ data: studentRows, error: sErr }, { data: teacherRows, error: tErr }] = await Promise.all([
    studentCodes.length
      ? supabase.from('students').select('id, student_code').in('student_code', studentCodes)
      : Promise.resolve({ data: [], error: null }),
    teacherCodes.length
      ? supabase.from('teachers').select('id, teacher_code').in('teacher_code', teacherCodes)
      : Promise.resolve({ data: [], error: null }),
  ])
  if (sErr) throw sErr
  if (tErr) throw tErr
  const studentMap = new Map((studentRows ?? []).map(s => [s.student_code, s.id]))
  const teacherMap = new Map((teacherRows ?? []).map(t => [t.teacher_code, t.id]))

  const summary = { total: rows.length, imported: 0, skippedDuplicate: 0, skippedNoStudent: 0, skippedInvalid: 0, unmatchedTeacher: 0 }
  const records = []
  for (const row of rows) {
    if (!row.subject_code || !row.subject_name || !row.semester || !['สามัญ', 'ศาสนา'].includes(row.category)) {
      summary.skippedInvalid++
      continue
    }
    const studentId = studentMap.get(row.student_code)
    if (!studentId) { summary.skippedNoStudent++; continue }
    const teacherId = row.teacher_code ? (teacherMap.get(row.teacher_code) ?? null) : null
    if (row.teacher_code && !teacherId) summary.unmatchedTeacher++
    records.push({
      student_id: studentId,
      teacher_id: teacherId,
      subject_code: row.subject_code,
      subject_name: row.subject_name,
      category: row.category,
      class_level: row.class_level,
      semester: row.semester,
      grade_failed_at: row.grade_failed_at,
      source: 'csv',
    })
  }

  const CHUNK = 100
  for (let i = 0; i < records.length; i += CHUNK) {
    const chunk = records.slice(i, i + CHUNK)
    const { data: inserted, error } = await supabase.from('regrade_subjects')
      .upsert(chunk, { onConflict: 'student_id,subject_code,semester', ignoreDuplicates: true })
      .select('id')
    if (error) throw error
    summary.imported += inserted?.length ?? 0
    summary.skippedDuplicate += chunk.length - (inserted?.length ?? 0)
    onProgress?.(Math.min(i + CHUNK, records.length), records.length)
  }
  return summary
}
