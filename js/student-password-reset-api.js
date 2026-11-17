import { supabase } from './supabase.js'

export async function submitStudentPasswordResetRequest(studentCode, requestKind = 'self') {
  const code = String(studentCode ?? '').trim()
  if (!code) throw new Error('กรุณากรอกรหัสนักเรียน')
  if (!['self', 'friend'].includes(requestKind)) throw new Error('ประเภทคำขอไม่ถูกต้อง')
  const { error } = await supabase.rpc('submit_student_password_reset_request', {
    p_student_code: code,
    p_request_kind: requestKind,
  })
  if (error) throw error
}

export async function getAdvisorStudentPasswordResetRequests() {
  const { data, error } = await supabase.from('student_password_reset_requests')
    .select(`id, student_id, requester_student_id, request_kind, status, created_at, reviewed_at,
      target:students!sprr_target_student_fkey(id, student_code, full_name, main_room, religion_room, image_url, photo_url),
      requester:students!sprr_requester_student_fkey(id, student_code, full_name, main_room, religion_room, image_url, photo_url)`)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getPendingAdvisorStudentPasswordResetCount() {
  const { count, error } = await supabase.from('student_password_reset_requests')
    .select('id', { count: 'exact', head: true }).eq('status', 'pending')
  if (error) throw error
  return count ?? 0
}

export async function reviewStudentPasswordResetRequest(requestId, approve) {
  const { data, error } = await supabase.rpc('review_student_password_reset_request', {
    p_request_id: Number(requestId),
    p_approve: Boolean(approve),
  })
  if (error) throw error
  return data
}
