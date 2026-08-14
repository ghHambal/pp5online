import { supabase } from './supabase.js'

// ─── Settings (reuse system_config เดิม, key prefix council_) ────────────────
const COUNCIL_CONFIG_KEYS = [
  'council_logo_url', 'council_theme_color', 'council_name',
  'council_term_start_semester', 'council_term_start_year',
  'council_term_end_semester', 'council_term_end_year',
  'council_min_gpa', 'council_eligible_grade_levels', 'council_require_teacher_endorsement',
  'council_election_thank_you_message',
]

export async function getCouncilConfig() {
  const { data, error } = await supabase.from('system_config').select('key,value').in('key', COUNCIL_CONFIG_KEYS)
  if (error) throw error
  return Object.fromEntries((data ?? []).map(r => [r.key, r.value]))
}

export async function updateCouncilConfig(updates) {
  const rows = Object.entries(updates).map(([key, value]) => ({ key, value }))
  const { error } = await supabase.from('system_config').upsert(rows, { onConflict: 'key' })
  if (error) throw error
}

// ─── ตำแหน่ง ────────────────────────────────────────────────────────────────
export async function getCouncilPositions() {
  const { data, error } = await supabase.from('council_positions')
    .select('*').eq('is_active', true).order('gender').order('sort_order')
  if (error) throw error
  return data ?? []
}

// ─── รายชื่อสภาปัจจุบัน (public roster) ───────────────────────────────────────
export async function getCouncilMembers(academicYear) {
  let q = supabase.from('council_members')
    .select('id, position_id, student_id, academic_year, status, source, council_positions(gender, position_name, sort_order), students(full_name, student_code, main_room, image_url, photo_url)')
    .eq('status', 'active')
  if (academicYear) q = q.eq('academic_year', academicYear)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

// ─── สถานะการเลือกตั้ง ─────────────────────────────────────────────────────
export async function getCouncilElectionConfigs(academicYear) {
  let q = supabase.from('council_election_config').select('*')
  if (academicYear) q = q.eq('academic_year', academicYear)
  const { data, error } = await q.order('gender')
  if (error) throw error
  return data ?? []
}

// ─── ใบสมัคร/สมาชิกภาพของตัวเอง (นักเรียน) ────────────────────────────────────
export async function getMyCouncilApplications(studentId) {
  const { data, error } = await supabase.from('council_applications')
    .select('id, position_id, status, motivation, photo_url, created_at, council_positions(position_name, gender, is_elected)')
    .eq('student_id', studentId).order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getMyCouncilMembership(studentId) {
  const { data, error } = await supabase.from('council_members')
    .select('id, position_id, status, source, term_start_date, term_end_date, council_positions(position_name, gender)')
    .eq('student_id', studentId).eq('status', 'active')
  if (error) throw error
  return data ?? []
}

// ─── สมัครสภานักเรียน ──────────────────────────────────────────────────────
export async function submitCouncilApplication({ studentId, positionId, academicYear, motivation, photoUrl }) {
  const { error } = await supabase.from('council_applications').insert({
    student_id: studentId, position_id: positionId, academic_year: academicYear,
    motivation, photo_url: photoUrl,
  })
  if (error) throw error
}
