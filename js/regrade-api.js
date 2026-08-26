import { supabase } from './supabase.js'

// ─── ตั้งค่าระบบ (regrade_config: key/value jsonb, ตารางแยกเฉพาะโมดูลนี้) ────────
export async function getRegradeConfig() {
  const { data, error } = await supabase.from('regrade_config').select('key,value')
  if (error) throw error
  return Object.fromEntries((data ?? []).map(r => [r.key, r.value]))
}

export async function updateRegradeConfig(updates) {
  const { data: { session } } = await supabase.auth.getSession()
  const rows = Object.entries(updates).map(([key, value]) => ({
    key, value, updated_by: session?.user?.id ?? null, updated_at: new Date().toISOString(),
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
    .select('id, full_name, category, image_url, position, positions')
    .eq('profile_id', session.user.id).maybeSingle()
  if (error) throw error
  return data
}

// ─── ฝั่งนักเรียน ─────────────────────────────────────────────────────────────
export async function getMyRegradeSubjects(studentId) {
  const { data, error } = await supabase.from('regrade_subjects')
    .select('*, teachers(full_name)')
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
  const { error } = await supabase.from('regrade_subjects')
    .update({
      status: 'กำลังดำเนินการปรับแก้', method, due_text: dueText || null, file_url: fileUrl || null,
      assigned_at: new Date().toISOString(), updated_at: new Date().toISOString(),
    })
    .eq('id', subjectRowId).eq('status', 'จำนงแล้ว')
  if (error) throw error
}

// ─── ฝั่งทะเบียน/แอดมิน (RLS อนุญาตเฉพาะ is_regrade_registrar()) ────────────────
export async function getPendingCloseOut(query) {
  let q = supabase.from('regrade_subjects')
    .select('*, students(full_name, student_code, main_room, religion_room, photo_url, image_url)')
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

// เฉพาะครูที่มีบัญชีผู้ใช้ (profile_id ไม่ว่าง) เท่านั้นที่มอบสิทธิ์ได้ — ใช้ทำช่องค้นหาชื่อ/รหัสครู
export async function getAllTeachersForPicker() {
  const { data, error } = await supabase.from('teachers')
    .select('id, full_name, teacher_code, profile_id')
    .not('profile_id', 'is', null)
    .order('full_name')
  if (error) throw error
  return data ?? []
}

// ─── สิทธิ์ของฉันเอง (ใช้แค่ตัดสินใจโชว์/ซ่อนเมนูฝั่ง client — ของจริงคุมที่ RLS) ──
export async function checkMyRegradePermissions() {
  const [{ data: isAdmin }, { data: isRegistrar }] = await Promise.all([
    supabase.rpc('is_regrade_admin'),
    supabase.rpc('is_regrade_registrar'),
  ])
  return { isAdmin: !!isAdmin, isRegistrar: !!isRegistrar }
}

// ─── บอร์ดผู้บริหาร ───────────────────────────────────────────────────────────
export async function getAllRegradeSubjectsForDashboard() {
  const { data, error } = await supabase.from('regrade_subjects')
    .select('id, category, class_level, status, teacher_id, teachers(full_name)')
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
