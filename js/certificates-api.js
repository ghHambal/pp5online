// js/certificates-api.js — ระบบเกียรติบัตรกลาง ใช้ร่วมกันทุกระบบ (สภานักเรียน/ทั่วไป/ฯลฯ)
// เทมเพลตเป็น pool กลางให้ครูทุกคนสร้าง/ใช้ร่วมกันได้ ส่วนใบที่ออกจริงเก็บ layout_snapshot ของตัวเอง
// (ไม่ join เทมเพลตสดตอนแสดงผล) กันแก้/ลบเทมเพลตทีหลังแล้วใบเก่าที่ออกไปแล้วเปลี่ยนหน้าตา
// ผู้รับ (recipient) เป็นได้ทั้งนักเรียน (recipient_type='student', student_id) และครู
// (recipient_type='teacher', teacher_id) — exactly-one คุมด้วย DB check constraint
import { supabase } from './supabase.js'

// ─── เทมเพลต ────────────────────────────────────────────────────────────────
export async function getCertificateTemplates() {
  const { data, error } = await supabase.from('certificate_templates').select('*').order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getCertificateTemplate(id) {
  const { data, error } = await supabase.from('certificate_templates').select('*').eq('id', id).maybeSingle()
  if (error) throw error
  return data
}

export async function createCertificateTemplate({ name, type, presetKey, backgroundImageUrl, layout, createdByTeacherId }) {
  const { data, error } = await supabase.from('certificate_templates')
    .insert({ name, type, preset_key: presetKey || null, background_image_url: backgroundImageUrl || null, layout: layout ?? null, created_by_teacher_id: createdByTeacherId ?? null })
    .select('*').single()
  if (error) throw error
  return data
}

export async function updateCertificateTemplateLayout({ id, layout, backgroundImageUrl }) {
  const patch = { layout, updated_at: new Date().toISOString() }
  if (backgroundImageUrl) patch.background_image_url = backgroundImageUrl
  const { error } = await supabase.from('certificate_templates').update(patch).eq('id', id)
  if (error) throw error
}

export async function deleteCertificateTemplate(id) {
  const { error } = await supabase.from('certificate_templates').delete().eq('id', id)
  if (error) throw error
}

// ─── ออกเกียรติบัตร ───────────────────────────────────────────────────────────
// recipientType: 'student' | 'teacher' — ต้องส่ง studentId (student) หรือ teacherId (teacher) มาให้ตรงกัน
// sourceSystem/sourceRefId ไม่บังคับ (null = ครูออกเองทั่วไป ไม่ผูกระบบไหน) — ถ้าใส่มาและเป็นผู้รับ
// ประเภทนักเรียน จะ upsert กันออกซ้ำให้คนเดิมจากที่มาเดิม (unique index บน source_system+source_ref_id+student_id
// — ยังไม่รองรับ recipient ประเภทครูสำหรับ index นี้ เพราะปัจจุบันยังไม่มี flow ที่ผูก source ออกให้ครู)
export async function issueCertificate({ templateId, recipientType = 'student', studentId, teacherId, recipientName, variables, title, issuedByTeacherId, sourceSystem, sourceRefId }) {
  const template = await getCertificateTemplate(templateId)
  if (!template) throw new Error('ไม่พบเทมเพลตที่เลือก')
  const payload = {
    template_id: templateId,
    layout_snapshot: template.layout,
    variables: variables ?? {},
    recipient_type: recipientType,
    student_id: recipientType === 'student' ? studentId : null,
    teacher_id: recipientType === 'teacher' ? teacherId : null,
    recipient_name: recipientName,
    title: title || null,
    issued_by_teacher_id: issuedByTeacherId ?? null,
    source_system: sourceSystem || null,
    source_ref_id: sourceRefId != null ? String(sourceRefId) : null,
    issued_at: new Date().toISOString(),
  }
  const query = supabase.from('certificates')
  const canUpsert = sourceSystem && recipientType === 'student'
  const { data, error } = canUpsert
    ? await query.upsert(payload, { onConflict: 'source_system,source_ref_id,student_id' }).select('*').single()
    : await query.insert(payload).select('*').single()
  if (error) throw error
  return data
}

// ออกเกียรติบัตรจากตารางรายชื่อใน request เดียว ทุกแถวเก็บ variables ของตัวเอง
export async function issueCertificatesBatch({ templateId, recipients, title, issuedByTeacherId }) {
  const template = await getCertificateTemplate(templateId)
  if (!template) throw new Error('ไม่พบเทมเพลตที่เลือก')
  const issuedAt = new Date().toISOString()
  const payloads = (recipients ?? []).map(recipient => ({
    template_id: templateId,
    layout_snapshot: template.layout,
    variables: recipient.variables ?? {},
    recipient_type: 'student',
    student_id: recipient.studentId,
    teacher_id: null,
    recipient_name: recipient.recipientName,
    title: title || null,
    issued_by_teacher_id: issuedByTeacherId ?? null,
    issued_at: issuedAt,
  }))
  if (!payloads.length) return []
  const { data, error } = await supabase.from('certificates').insert(payloads).select('*')
  if (error) throw error
  return data ?? []
}

export async function getMyCertificates(studentId) {
  const { data, error } = await supabase.from('certificates')
    .select('id, certificate_no, layout_snapshot, variables, title, source_system, issued_at')
    .eq('student_id', studentId)
    .order('issued_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

// เกียรติบัตรของครูคนหนึ่ง (ผู้รับประเภทครู) — ใช้แสดงในหน้า "บัตรของฉัน" ฝั่งครู
export async function getMyCertificatesAsTeacher(teacherId) {
  const { data, error } = await supabase.from('certificates')
    .select('id, certificate_no, layout_snapshot, variables, title, source_system, issued_at')
    .eq('teacher_id', teacherId)
    .order('issued_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

// ประวัติ/ค้นหาสำหรับหน้าจัดการของครู — RLS จำกัดให้เห็นเฉพาะที่ตัวเองออก (หรือแอดมินเห็นทั้งหมด) อยู่แล้ว
export async function getIssuedCertificates({ query, limit = 200 } = {}) {
  let q = supabase.from('certificates')
    .select('id, certificate_no, student_id, teacher_id, recipient_type, recipient_name, title, layout_snapshot, variables, source_system, issued_at, certificate_templates(id, name)')
    .order('issued_at', { ascending: false })
    .limit(limit)
  const search = (query ?? '').trim()
  if (search) q = q.or(`recipient_name.ilike.%${search}%,certificate_no.ilike.%${search}%`)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function deleteCertificate(id) {
  const { error } = await supabase.from('certificates').delete().eq('id', id)
  if (error) throw error
}

// ใบที่ออกไปแล้วทั้งหมดจาก source ระบบใดระบบหนึ่ง (เช่น council_activity + activityId) — ใช้เช็คว่า
// นักเรียนคนไหนได้ใบไปแล้วบ้าง กันปุ่ม "ออกเกียรติบัตร" ซ้ำในหน้าจัดการของระบบนั้นๆ
export async function getCertificatesBySource(sourceSystem, sourceRefId) {
  const { data, error } = await supabase.from('certificates')
    .select('id, certificate_no, student_id, recipient_name, layout_snapshot, variables, title, issued_at')
    .eq('source_system', sourceSystem).eq('source_ref_id', String(sourceRefId))
  if (error) throw error
  return data ?? []
}

// ─── ค้นหาผู้รับสำหรับออกเกียรติบัตร ────────────────────────────────────────────
export async function searchStudentsForCertificateIssuance(query) {
  const q = (query ?? '').trim()
  if (q.length < 2) return []
  const { data, error } = await supabase.from('students')
    .select('id, full_name, student_code, main_room, image_url, photo_url')
    .or(`full_name.ilike.%${q}%,student_code.ilike.%${q}%`)
    .limit(15)
  if (error) throw error
  return data ?? []
}

export async function getStudentByCodeForCertificateIssuance(studentCode) {
  const code = String(studentCode ?? '').trim()
  if (!code) return null
  const { data, error } = await supabase.from('students')
    .select('id, full_name, student_code, main_room, image_url, photo_url')
    .eq('student_code', code)
    .maybeSingle()
  if (error) throw error
  return data
}

export async function searchTeachersForCertificateIssuance(query) {
  const q = (query ?? '').trim()
  if (q.length < 2) return []
  const { data, error } = await supabase.from('teachers')
    .select('id, full_name, teacher_code, image_url')
    .or(`full_name.ilike.%${q}%,teacher_code.ilike.%${q}%`)
    .limit(15)
  if (error) throw error
  return data ?? []
}

// ─── ตารางรายชื่อกลาง ───
export async function getCertificateRecipientTables(createdByTeacherId) {
  let query = supabase.from('certificate_recipient_tables').select('*').order('updated_at', { ascending: false })
  if (createdByTeacherId != null) query = query.eq('created_by_teacher_id', createdByTeacherId)
  const { data, error } = await query
  if (error) throw error
  return data ?? []
}

export async function createCertificateRecipientTable({ name, templateId, title, columns, rows, createdByTeacherId }) {
  const { data, error } = await supabase.from('certificate_recipient_tables').insert({
    name,
    template_id: templateId || null,
    title: title || null,
    columns,
    rows,
    created_by_teacher_id: createdByTeacherId,
  }).select('*').single()
  if (error) throw error
  return data
}

export async function updateCertificateRecipientTable({ id, name, templateId, title, columns, rows }) {
  const { data, error } = await supabase.from('certificate_recipient_tables').update({
    name,
    template_id: templateId || null,
    title: title || null,
    columns,
    rows,
    updated_at: new Date().toISOString(),
  }).eq('id', id).select('*').single()
  if (error) throw error
  return data
}

export async function deleteCertificateRecipientTable(id) {
  const { error } = await supabase.from('certificate_recipient_tables').delete().eq('id', id)
  if (error) throw error
}
