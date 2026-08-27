// js/certificates-api.js — ระบบเกียรติบัตรกลาง ใช้ร่วมกันทุกระบบ (สภานักเรียน/ทั่วไป/ฯลฯ)
// เทมเพลตเป็น pool กลางให้ครูทุกคนสร้าง/ใช้ร่วมกันได้ ส่วนใบที่ออกจริงเก็บ layout_snapshot ของตัวเอง
// (ไม่ join เทมเพลตสดตอนแสดงผล) กันแก้/ลบเทมเพลตทีหลังแล้วใบเก่าที่ออกไปแล้วเปลี่ยนหน้าตา
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
// sourceSystem/sourceRefId ไม่บังคับ (null = ครูออกเองทั่วไป ไม่ผูกระบบไหน) — ถ้าใส่มา จะ upsert กันออกซ้ำ
// ให้คนเดิมจากที่มาเดิม (unique index บน source_system+source_ref_id+student_id)
export async function issueCertificate({ templateId, studentId, studentName, variables, title, issuedByTeacherId, sourceSystem, sourceRefId }) {
  const template = await getCertificateTemplate(templateId)
  if (!template) throw new Error('ไม่พบเทมเพลตที่เลือก')
  const payload = {
    template_id: templateId,
    layout_snapshot: template.layout,
    variables: variables ?? {},
    student_id: studentId,
    student_name: studentName,
    title: title || null,
    issued_by_teacher_id: issuedByTeacherId ?? null,
    source_system: sourceSystem || null,
    source_ref_id: sourceRefId != null ? String(sourceRefId) : null,
    issued_at: new Date().toISOString(),
  }
  const query = supabase.from('certificates')
  const { data, error } = sourceSystem
    ? await query.upsert(payload, { onConflict: 'source_system,source_ref_id,student_id' }).select('*').single()
    : await query.insert(payload).select('*').single()
  if (error) throw error
  return data
}

export async function getMyCertificates(studentId) {
  const { data, error } = await supabase.from('certificates')
    .select('id, certificate_no, layout_snapshot, variables, title, source_system, issued_at')
    .eq('student_id', studentId)
    .order('issued_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

// ประวัติ/ค้นหาสำหรับหน้าจัดการของครู — RLS จำกัดให้เห็นเฉพาะที่ตัวเองออก (หรือแอดมินเห็นทั้งหมด) อยู่แล้ว
export async function getIssuedCertificates({ query, limit = 200 } = {}) {
  let q = supabase.from('certificates')
    .select('id, certificate_no, student_id, student_name, title, layout_snapshot, variables, source_system, issued_at, certificate_templates(id, name)')
    .order('issued_at', { ascending: false })
    .limit(limit)
  const search = (query ?? '').trim()
  if (search) q = q.or(`student_name.ilike.%${search}%,certificate_no.ilike.%${search}%`)
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
    .select('id, certificate_no, student_id, student_name, layout_snapshot, variables, title, issued_at')
    .eq('source_system', sourceSystem).eq('source_ref_id', String(sourceRefId))
  if (error) throw error
  return data ?? []
}

// ─── ค้นหานักเรียนสำหรับออกเกียรติบัตร ──────────────────────────────────────────
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
