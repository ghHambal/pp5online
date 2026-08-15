import { supabase } from './supabase.js'

function unwrap(data) {
  return data && typeof data === 'object' ? data : {}
}

export async function getTerangganuAccess() {
  const { data, error } = await supabase.rpc('get_terangganu_access')
  if (error) throw error
  return unwrap(data)
}

export async function getMyTerangganuContext() {
  const { data, error } = await supabase.rpc('get_my_terangganu_context')
  if (error) throw error
  return unwrap(data)
}

export async function saveMyTerangganuRegistration(payload) {
  const { data, error } = await supabase.rpc('save_my_terangganu_registration', { p_payload: payload })
  if (error) throw error
  return unwrap(data)
}

export async function getMyTerangganuTeacherContext() {
  const { data, error } = await supabase.rpc('get_my_terangganu_teacher_context')
  if (error) throw error
  return unwrap(data)
}

export async function saveMyTerangganuTeacherRegistration(payload) {
  const { data, error } = await supabase.rpc('save_my_terangganu_teacher_registration', { p_payload: payload })
  if (error) throw error
  return unwrap(data)
}

export async function getTerangganuManagerContext() {
  const { data, error } = await supabase.rpc('get_terangganu_manager_context')
  if (error) throw error
  return unwrap(data)
}

export async function getTerangganuSchedule() {
  const { data, error } = await supabase.rpc('get_terangganu_schedule')
  if (error) throw error
  return Array.isArray(data) ? data : []
}

export async function saveTerangganuScheduleItem(payload) {
  const { data, error } = await supabase.rpc('save_terangganu_schedule_item', { p_payload: payload })
  if (error) throw error
  return unwrap(data)
}

export async function deleteTerangganuScheduleItem(itemId) {
  const { data, error } = await supabase.rpc('delete_terangganu_schedule_item', { p_item_id: itemId })
  if (error) throw error
  return unwrap(data)
}

export async function updateTerangganuEvent(payload) {
  const { data, error } = await supabase.rpc('update_terangganu_event', { p_payload: payload })
  if (error) throw error
  return unwrap(data)
}

export async function assignTerangganuStaff(teacherId, options = {}) {
  const { error } = await supabase.rpc('assign_terangganu_staff', {
    p_teacher_id: Number(teacherId),
    p_active: options.active !== false,
    p_can_settings: options.can_settings !== false,
    p_can_payments: options.can_payments !== false,
    p_can_export: options.can_export !== false,
  })
  if (error) throw error
}

export async function addTerangganuParticipants(studentCodes, markDepositPaid = true) {
  const { data, error } = await supabase.rpc('add_terangganu_participants', {
    p_student_codes: studentCodes,
    p_mark_deposit_paid: markDepositPaid,
  })
  if (error) throw error
  return unwrap(data)
}

export async function removeTerangganuParticipant(studentId) {
  const { data, error } = await supabase.rpc('remove_terangganu_participant', {
    p_student_id: Number(studentId),
  })
  if (error) throw error
  return unwrap(data)
}

export async function addTerangganuTeacherParticipants(teacherIds) {
  const { data, error } = await supabase.rpc('add_terangganu_teacher_participants', {
    p_teacher_ids: [...new Set(teacherIds.map(Number).filter(Number.isFinite))],
  })
  if (error) throw error
  return unwrap(data)
}

export async function removeTerangganuTeacherParticipant(teacherId) {
  const { data, error } = await supabase.rpc('remove_terangganu_teacher_participant', {
    p_teacher_id: Number(teacherId),
  })
  if (error) throw error
  return unwrap(data)
}

export async function updateMyTerangganuSignature(signatureUrl, displayName, title) {
  const { error } = await supabase.rpc('update_my_terangganu_signature', {
    p_signature_url: signatureUrl,
    p_display_name: displayName,
    p_title: title,
  })
  if (error) throw error
}

export async function recordTerangganuPayment(studentId, installmentType, paymentMethod, note = '') {
  const { data, error } = await supabase.rpc('record_terangganu_payment', {
    p_student_id: Number(studentId),
    p_installment_type: installmentType,
    p_payment_method: paymentMethod,
    p_note: note || null,
  })
  if (error) throw error
  return unwrap(data)
}

export async function recordTerangganuPaymentsBulk(studentIds, installmentType, paymentMethod, note = '') {
  const { data, error } = await supabase.rpc('record_terangganu_payments_bulk', {
    p_student_ids: [...new Set(studentIds.map(Number).filter(Number.isFinite))],
    p_installment_type: installmentType,
    p_payment_method: paymentMethod,
    p_note: note || null,
  })
  if (error) throw error
  return unwrap(data)
}

export async function voidTerangganuPayment(paymentId, reason) {
  const { error } = await supabase.rpc('void_terangganu_payment', {
    p_payment_id: paymentId,
    p_reason: reason,
  })
  if (error) throw error
}

export function subscribeTerangganu(eventId, onChange) {
  if (!eventId) return null
  return supabase.channel(`terangganu-${eventId}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'terangganu_camp_events', filter: `id=eq.${eventId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'terangganu_camp_participants', filter: `event_id=eq.${eventId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'terangganu_camp_registrations', filter: `event_id=eq.${eventId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'terangganu_camp_payments', filter: `event_id=eq.${eventId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'terangganu_camp_teacher_participants', filter: `event_id=eq.${eventId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'terangganu_camp_teacher_registrations', filter: `event_id=eq.${eventId}` }, onChange)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'terangganu_camp_schedule_items', filter: `event_id=eq.${eventId}` }, onChange)
    .subscribe()
}
