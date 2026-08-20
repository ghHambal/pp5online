import { supabase } from './supabase.js'

// ─── Settings (reuse system_config เดิม, key prefix council_) ────────────────
const COUNCIL_CONFIG_KEYS = [
  'council_logo_url', 'council_theme_color', 'council_name',
  'council_theme_side_m', 'council_theme_side_w', // สีธีมตามฝ่าย (Phase 2 ตั้งค่า > ทั่วไป)
  'council_term_start_semester', 'council_term_start_year',
  'council_term_end_semester', 'council_term_end_year',
  'council_min_gpa', 'council_min_gpa_religious', // เกรดขั้นต่ำ สามัญ/ศาสนา แยกกัน (สเปคข้อ 8.2)
  'council_eligible_grade_levels', 'council_require_teacher_endorsement', 'council_require_peer_endorsement',
  'council_min_certificates', // จำนวนเกียรติบัตร/รางวัลขั้นต่ำที่ต้องแนบตอนสมัคร (default '5')
  'council_apply_opens_at', 'council_apply_closes_at', // ช่วงเวลาเปิด-ปิดรับสมัคร
  'council_featured_phase', // '' (auto)/'apply'/'election'/'none' — จุดเด่นในหน้าหลักที่แอดมินเลือกเองได้ ไม่งั้นคำนวณจากวันที่
  'council_video_max_minutes', 'council_video_brief', // วิดีโอแนะนำตัว: จำนวนนาที + หัวข้อที่ต้องพูด (JSON array)
  'council_doc_plan_areas', 'council_doc_project_types', 'council_doc_school_strategies', 'council_doc_education_standards', // ตัวเลือกฟอร์มเอกสารโครงการ (JSON array) — ข้อมูลจากโรงเรียน แอดมินตั้งค่าเองในหน้าตั้งค่า
  'council_signer_advisor_name', 'council_signer_director_name', // ชื่อผู้ลงนามเอกสาร/เกียรติบัตร
  'council_election_thank_you_message',
  'council_visible_to_all', // 'true'/'false' — ปิดแล้วเห็นเฉพาะแอดมิน/ครูที่ is_also_admin
  'council_test_student_codes', // รหัสนักเรียนที่ให้ทดสอบได้แม้ council_visible_to_all ปิดอยู่ (คั่นด้วย , หรือขึ้นบรรทัดใหม่)
  'council_modules', // เปิด/ปิดโมดูลย่อยรายฟีเจอร์ (JSON) — สเปคข้อ 8.18.4
  'academicYear', // key กลางเดิมของระบบ (ไม่มี prefix council_) ใช้ผูกใบสมัครเข้าปีการศึกษาปัจจุบัน
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

// ─── ตำแหน่ง — CRUD (หน้าตั้งค่า > ตำแหน่ง, สเปคข้อ 8.18.2) ─────────────────────
export async function createCouncilPosition({ gender, positionName, seatsCount, isElected, sortOrder }) {
  const { error } = await supabase.from('council_positions').insert({
    gender, position_name: positionName, seats_count: seatsCount || 1,
    is_elected: !!isElected, sort_order: sortOrder ?? 0,
  })
  if (error) throw error
}

export async function updateCouncilPosition(id, updates) {
  const { error } = await supabase.from('council_positions').update(updates).eq('id', id)
  if (error) throw error
}

// ลบแบบ soft delete (is_active=false) — ตรง convention เดียวกับ removeCriterion เดิม
// กันไม่ให้ประวัติสมาชิก/ใบสมัครเก่าที่อ้างตำแหน่งนี้ (FK) หายไปด้วย
export async function deleteCouncilPosition(id) {
  const { error } = await supabase.from('council_positions').update({ is_active: false }).eq('id', id)
  if (error) throw error
}

// ─── หัวข้อสัมภาษณ์ — CRUD (หน้าตั้งค่า > เกณฑ์และข้อความ, สเปคข้อ 6.3/8.18.3) ────────────
export async function getInterviewCriteria() {
  const { data, error } = await supabase.from('council_interview_criteria')
    .select('*').eq('is_active', true).order('sort_order')
  if (error) throw error
  return data ?? []
}

export async function addInterviewCriterion({ name, weight }) {
  const { error } = await supabase.from('council_interview_criteria').insert({ name, weight })
  if (error) throw error
}

export async function removeInterviewCriterion(id) {
  const { error } = await supabase.from('council_interview_criteria').update({ is_active: false }).eq('id', id)
  if (error) throw error
}

// ─── ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ — CRUD (หน้าตั้งค่า > เกณฑ์และข้อความ) ───────────
export async function addEndorsementPhrase({ phrase, sortOrder }) {
  const { error } = await supabase.from('council_endorsement_phrases').insert({ phrase, sort_order: sortOrder ?? 0 })
  if (error) throw error
}

export async function removeEndorsementPhrase(id) {
  const { error } = await supabase.from('council_endorsement_phrases').delete().eq('id', id)
  if (error) throw error
}

// ─── รายชื่อสภาปัจจุบัน (public roster) ───────────────────────────────────────
export async function getCouncilMembers(academicYear) {
  let q = supabase.from('council_members')
    .select('id, position_id, student_id, academic_year, status, source, council_positions(gender, position_name, sort_order, is_elected), students(full_name, student_code, main_room, image_url, photo_url)')
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
    .select(`id, student_id, position_id, status, motivation, photo_url, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      requested_peer_endorser_id,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      requested_peer_endorser:council_members!council_applications_requested_peer_endorser_id_fkey(students(full_name)),
      council_positions(position_name, gender, is_elected)`)
    .eq('student_id', studentId).order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getMyCouncilMembership(studentId) {
  const { data, error } = await supabase.from('council_members')
    .select('id, position_id, status, source, term_start_date, term_end_date, council_positions(position_name, gender, is_elected)')
    .eq('student_id', studentId).eq('status', 'active')
  if (error) throw error
  return data ?? []
}

// ─── สมัครสภานักเรียน — wizard 5-6 ขั้น (สเปคข้อ 8.2 + เกียรติบัตร/รางวัลขั้นต่ำ 5 รายการ) ──
// ขั้นเลือก "พี่สภาที่ต้องการให้รับรอง" (requestedPeerEndorserId) เป็นขั้นที่ 6 แบบมีเงื่อนไข
// (โผล่เฉพาะตอน council_require_peer_endorsement เปิดอยู่) — ผู้สมัครเลือกได้ 2026-08-20
export async function submitCouncilApplication({ studentId, positionId, academicYear, motivation, photoUrl, gpaGeneral, gpaReligious, introVideoUrl, certificates, requestedPeerEndorserId }) {
  const { error } = await supabase.from('council_applications').insert({
    student_id: studentId, position_id: positionId, academic_year: academicYear,
    motivation, photo_url: photoUrl,
    gpa_general: gpaGeneral, gpa_religious: gpaReligious, intro_video_url: introVideoUrl,
    certificates: certificates ?? [],
    requested_peer_endorser_id: requestedPeerEndorserId ?? null,
  })
  if (error) throw error
}

// ─── การยืนยัน (รับรอง) ใบสมัคร โดยครูที่ปรึกษาสามัญของห้องนั้นๆ ──────────────────
// ดึงใบสมัครที่ "รอ" ครูคนนี้ยืนยันทั้งหมด (กรองห้องฝั่ง client เพราะ RLS อนุญาตครูทุกคน
// อ่านได้กว้างกว่านี้อยู่แล้ว — ต้อง filter ที่ถูกต้องจริงในโค้ดฝั่งนี้)
export async function getPendingEndorsements(mainRooms) {
  if (!mainRooms?.length) return []
  const { data, error } = await supabase.from('council_applications')
    .select('id, position_id, motivation, photo_url, status, created_at, gpa_general, gpa_religious, intro_video_url, council_positions(position_name, gender), students(id, full_name, student_code, main_room, image_url, photo_url)')
    .eq('status', 'pending').is('endorsed_at', null)
    .order('created_at')
  if (error) throw error
  return (data ?? []).filter(a => mainRooms.includes(a.students?.main_room))
}

export async function getEndorsementPhrases() {
  const { data, error } = await supabase.from('council_endorsement_phrases').select('*').order('sort_order')
  if (error) throw error
  return data ?? []
}

export async function confirmApplicationEndorsement({ applicationId, teacherId, comment }) {
  const { error } = await supabase.from('council_applications')
    .update({ endorsing_teacher_id: teacherId, endorsement_comment: comment, endorsed_at: new Date().toISOString() })
    .eq('id', applicationId)
  if (error) throw error
}

export async function declineApplicationEndorsement({ applicationId, teacherId, comment }) {
  const { error } = await supabase.from('council_applications')
    .update({ endorsing_teacher_id: teacherId, endorsement_comment: comment, endorsed_at: new Date().toISOString(), status: 'rejected' })
    .eq('id', applicationId)
  if (error) throw error
}

// ─── รับรองจากสภานักเรียนปัจจุบัน — เพิ่มตามที่ผู้ใช้ขอ 2026-08-16 ─────────────────────
// 2026-08-20: ผู้สมัครเลือกได้เองว่าอยากให้ "พี่สภา" คนไหนรับรอง (requested_peer_endorser_id)
// คิวนี้จึงเจาะจงเฉพาะคนที่ถูกเลือกเท่านั้น ไม่ใช่ pool กลางที่สมาชิกเพศเดียวกันคนไหนก็รับรองได้
// เหมือนเดิมอีกต่อไป — ยังกรอง gender ควบคู่ไปด้วยเผื่อใบสมัครเก่าก่อนฟีเจอร์นี้ที่ไม่ได้ระบุคนไว้
// (requested_peer_endorser_id เป็น null) จะได้ไม่มีใครเห็นเลยเฉยๆ ให้ยังตกไปอยู่ pool กลางแบบเดิม
export async function getPendingPeerEndorsements(gender, memberId) {
  const { data, error } = await supabase.from('council_applications')
    .select(`id, position_id, motivation, photo_url, status, created_at, requested_peer_endorser_id,
      council_positions!inner(position_name, gender),
      students(id, full_name, student_code, main_room, image_url, photo_url)`)
    .eq('status', 'pending').is('peer_endorsed_at', null)
    .eq('council_positions.gender', gender)
    .order('created_at')
  if (error) throw error
  // เทียบแบบ string เพราะ bigint จาก Postgres มักถูกส่งมาเป็น string ผ่าน supabase-js
  // (กัน type mismatch แบบ "5" !== 5 ที่ทำให้ filter หลุดเงียบๆ)
  return (data ?? []).filter(a => a.requested_peer_endorser_id == null || String(a.requested_peer_endorser_id) === String(memberId))
}

// ให้เจ้าของใบสมัคร (นักเรียน) เลือก/เปลี่ยนพี่สภาที่ต้องการให้รับรองได้เอง หลังส่งใบสมัครไปแล้ว
// — RLS (council_applications_self_update) อนุญาตเฉพาะตอนสถานะยัง 'pending' เท่านั้น, ฝั่ง UI
// จะซ่อนปุ่มนี้เพิ่มถ้ามีคนรับรองไปแล้ว (peer_endorsed_at ไม่ว่าง) กันข้อมูลไม่ตรงกัน
export async function updateRequestedPeerEndorser({ applicationId, memberId }) {
  const { error } = await supabase.from('council_applications')
    .update({ requested_peer_endorser_id: memberId })
    .eq('id', applicationId)
  if (error) throw error
}

// ต้องเป็นคนที่ถูกผู้สมัครระบุชื่อไว้เท่านั้นถึงจะรับรองได้ (ใบสมัครเก่าที่ไม่ได้ระบุใครไว้ยังเปิดกว้างเหมือนเดิม)
export async function submitPeerEndorsement({ applicationId, memberId, comment }) {
  const { data: app, error: fetchError } = await supabase.from('council_applications')
    .select('requested_peer_endorser_id').eq('id', applicationId).single()
  if (fetchError) throw fetchError
  if (app.requested_peer_endorser_id != null && String(app.requested_peer_endorser_id) !== String(memberId)) {
    throw new Error('ใบสมัครนี้ผู้สมัครระบุให้พี่สภาคนอื่นเป็นผู้รับรอง ไม่สามารถรับรองแทนได้')
  }
  const { error } = await supabase.from('council_applications')
    .update({ peer_endorsed_by_member_id: memberId, peer_endorsement_comment: comment, peer_endorsed_at: new Date().toISOString() })
    .eq('id', applicationId)
  if (error) throw error
}

// ─── จัดการใบสมัคร (แอดมิน) — ดูได้ทุกสถานะ (รวม "รอรับรอง" เพื่อติดตามภาพรวม) แต่นัดสัมภาษณ์/
// ให้คะแนนได้เฉพาะใบที่ครูที่ปรึกษาสามัญรับรองแล้วเท่านั้น (สเปคข้อ 8.4 — ฟิลเตอร์ 6 สถานะ) ──
export async function getCouncilApplicationsForAdmin(academicYear) {
  let q = supabase.from('council_applications')
    .select(`id, position_id, status, motivation, photo_url, academic_year, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      council_positions(id, position_name, gender, is_elected),
      students(id, full_name, student_code, main_room, image_url, photo_url, profile_id),
      council_interviews(id, scheduled_at, location, interviewer_teacher_id, result, score, scores, comment),
      council_candidates(id, election_config_id, ballot_number)`)
    .order('created_at', { ascending: false })
  if (academicYear) q = q.eq('academic_year', academicYear)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function scheduleCouncilInterview({ applicationId, existingInterviewId, scheduledAt, location, interviewerTeacherId }) {
  const payload = { application_id: applicationId, scheduled_at: scheduledAt, location, interviewer_teacher_id: interviewerTeacherId }
  if (existingInterviewId) {
    const { error } = await supabase.from('council_interviews').update(payload).eq('id', existingInterviewId)
    if (error) throw error
  } else {
    const { error } = await supabase.from('council_interviews').insert(payload)
    if (error) throw error
  }
  const { error: e2 } = await supabase.from('council_applications').update({ status: 'interview_scheduled' }).eq('id', applicationId)
  if (e2) throw e2
}

// ให้คะแนนรายหัวข้อ (สเปคข้อ 8.5) — result ตัดสินอัตโนมัติจาก score รวมเทียบครึ่งหนึ่งของ
// คะแนนเต็ม คำนวณแล้วส่งมาจาก UI (ไม่ตัดสินซ้ำในนี้ เพราะ UI ต้องโชว์ผลสดให้ผู้ใช้เห็นอยู่แล้ว)
export async function saveCouncilInterviewScore({ interviewId, applicationId, score, scores, result, comment }) {
  const { error } = await supabase.from('council_interviews')
    .update({ score, scores, result, comment }).eq('id', interviewId)
  if (error) throw error
  const nextStatus = result === 'pass' ? 'interviewed' : 'rejected'
  const { error: e2 } = await supabase.from('council_applications').update({ status: nextStatus }).eq('id', applicationId)
  if (e2) throw e2
}

// ─── ตั้งเป็นผู้สมัครเลือกตั้ง (ประธานสภา) — เฉพาะตำแหน่งที่ is_elected=true และผ่านสัมภาษณ์ ──
export async function promoteToCandidate({ applicationId, studentId, electionConfigId, campaignStatement, photoUrl }) {
  const { data: existing, error: e0 } = await supabase.from('council_candidates')
    .select('ballot_number').eq('election_config_id', electionConfigId).order('ballot_number', { ascending: false }).limit(1)
  if (e0) throw e0
  const nextBallot = (existing?.[0]?.ballot_number ?? 0) + 1
  const { error } = await supabase.from('council_candidates').insert({
    election_config_id: electionConfigId, application_id: applicationId, student_id: studentId,
    ballot_number: nextBallot, campaign_statement: campaignStatement, photo_url: photoUrl,
  })
  if (error) throw error
  const { error: e2 } = await supabase.from('council_applications').update({ status: 'candidate' }).eq('id', applicationId)
  if (e2) throw e2
}

// ─── แต่งตั้งตรง (ตำแหน่งที่ไม่ได้มาจากการเลือกตั้ง — ผ่านสัมภาษณ์แล้วแต่งตั้งได้เลย) ────
export async function appointMember({ applicationId, positionId, studentId, academicYear }) {
  const { error } = await supabase.from('council_members').insert({
    position_id: positionId, student_id: studentId, academic_year: academicYear,
    source: 'appointed', status: 'active', term_start_date: new Date().toISOString().slice(0, 10),
  })
  if (error) throw error
  const { error: e2 } = await supabase.from('council_applications').update({ status: 'appointed' }).eq('id', applicationId)
  if (e2) throw e2
}

// ─── จัดการสภาวาระปัจจุบันโดยตรง (แอดมิน) — เพิ่ม/แก้ไข/ลบ นอกเหนือจากทางแต่งตั้ง/เลือกตั้ง/
// เสนอคณะทำงานปกติ — ใช้ตอนนำเข้าข้อมูลสภาจริงจากภายนอก (เช่น Google ชีท) หรือแก้ไขคลาดเคลื่อน ──
export async function searchStudentsForCouncil(query) {
  const q = (query ?? '').trim()
  if (q.length < 2) return []
  const { data, error } = await supabase.from('students')
    .select('id, full_name, student_code, main_room, gender, image_url, photo_url')
    .or(`full_name.ilike.%${q}%,student_code.ilike.%${q}%`)
    .limit(15)
  if (error) throw error
  return data ?? []
}

export async function addCouncilMemberManual({ positionId, studentId, academicYear, termStartDate, appointedByTeacherId }) {
  const { error } = await supabase.from('council_members').insert({
    position_id: positionId, student_id: studentId, academic_year: academicYear,
    source: 'appointed', status: 'active',
    term_start_date: termStartDate || new Date().toISOString().slice(0, 10),
    appointed_by_teacher_id: appointedByTeacherId ?? null,
  })
  if (error) throw error
}

export async function updateCouncilMember(memberId, { positionId, termStartDate, termEndDate }) {
  const { error } = await supabase.from('council_members')
    .update({ position_id: positionId, term_start_date: termStartDate || null, term_end_date: termEndDate || null, updated_at: new Date().toISOString() })
    .eq('id', memberId)
  if (error) throw error
}

// soft-delete — เก็บประวัติไว้ (ตามที่ผู้ใช้ยืนยัน) แทนการลบแถวออกจริง
export async function removeCouncilMember(memberId) {
  const { error } = await supabase.from('council_members')
    .update({ status: 'removed', term_end_date: new Date().toISOString().slice(0, 10), updated_at: new Date().toISOString() })
    .eq('id', memberId)
  if (error) throw error
}

// ─── ตั้งค่าห้วงเวลาเลือกตั้ง (แอดมิน) ─────────────────────────────────────────
export async function ensureElectionConfig({ gender, academicYear }) {
  const { data: existing, error: e0 } = await supabase.from('council_election_config')
    .select('*').eq('gender', gender).eq('academic_year', academicYear).maybeSingle()
  if (e0) throw e0
  if (existing) return existing
  const { data, error } = await supabase.from('council_election_config')
    .insert({ gender, academic_year: academicYear }).select().single()
  if (error) throw error
  return data
}

export async function updateElectionWindow({ electionConfigId, opensAt, closesAt }) {
  const { error } = await supabase.from('council_election_config')
    .update({ opens_at: opensAt, closes_at: closesAt }).eq('id', electionConfigId)
  if (error) throw error
}

// ─── ผู้สมัครเลือกตั้ง (public) ────────────────────────────────────────────────
export async function getCandidatesForElection(electionConfigId) {
  const { data, error } = await supabase.from('council_candidates')
    .select(`id, ballot_number, campaign_statement, photo_url, student_id, application_id,
      slogan, vision, policies, experience,
      students(full_name, student_code, main_room, image_url, photo_url),
      council_applications(gpa_general, gpa_religious)`)
    .eq('election_config_id', electionConfigId).order('ballot_number')
  if (error) throw error
  return data ?? []
}

// แก้ไขโปรไฟล์ผู้สมัคร (สโลแกน/วิสัยทัศน์/นโยบาย/ประสบการณ์) — เห็นเฉพาะแอดมิน/ครูที่
// ปรึกษาสภาจากหน้า "ว่าที่ประธาน" (สเปคไม่ได้ระบุหน้าจอแก้ไขแยกต่างหาก จึงผูกกับหน้าดูโปรไฟล์เดิม)
export async function updateCandidateProfile({ candidateId, slogan, vision, policies, experience }) {
  const { error } = await supabase.from('council_candidates')
    .update({ slogan, vision, policies, experience }).eq('id', candidateId)
  if (error) throw error
}

// จำนวนผู้มีสิทธิ์เลือกตั้งฝ่ายนั้น (นักเรียนที่ active ทั้งหมดของเพศนั้น) — ใช้คำนวณ % ผู้ใช้สิทธิ์
// ในหน้าผลเลือกตั้ง (สเปคข้อ 8.13) — normalize เพศแบบเดียวกับที่อื่นในระบบ (ปนกัน ชาย/M, หญิง/W)
export async function getEligibleVoterCount(gender) {
  const values = gender === 'M' ? ['ชาย', 'M'] : ['หญิง', 'W']
  const { count, error } = await supabase.from('students')
    .select('id', { count: 'exact', head: true })
    .in('gender', values)
    .or('is_active.is.null,is_active.eq.true')
  if (error) throw error
  return count ?? 0
}

// ⚠️ การโหวตจริง (นักเรียนกรอกรหัส+ยืนยันตัวตนด้วยรูป+เลือกผู้สมัคร) ทำที่หน้า
// council-election.html (js/council-election-public.js) เท่านั้น ผ่าน RPC ฝั่ง server
// (get_public_council_election_bundle / cast_public_council_vote — ดู
// patch_council_election_public_vote.sql) — ไม่มีฟังก์ชันโหวตแบบ session-based ในไฟล์นี้
// โดยตั้งใจ เพราะจะเปิดช่องให้นักเรียนโหวตผ่านมือถือ/บัญชีตัวเองได้ ซึ่งขัดกับสเปคที่ต้อง
// โหวตที่จุดลงคะแนนซึ่งมีครูดูแลเท่านั้น (ตัดสินใจย้ำ 2026-08-15)

// ─── นับคะแนน+ประกาศผล (แอดมิน) ────────────────────────────────────────────────
export async function getVoteTally(electionConfigId) {
  const { data, error } = await supabase.from('council_votes').select('candidate_id').eq('election_config_id', electionConfigId)
  if (error) throw error
  const counts = {}
  ;(data ?? []).forEach(v => { counts[v.candidate_id] = (counts[v.candidate_id] ?? 0) + 1 })
  return counts
}

// เลือกผู้ชนะ (คะแนนสูงสุด) → ประกาศผล → แต่งตั้งเข้าตำแหน่งประธานสภา (council_members) อัตโนมัติ
export async function publishElectionResults({ electionConfigId, gender, academicYear }) {
  const candidates = await getCandidatesForElection(electionConfigId)
  if (!candidates.length) throw new Error('ยังไม่มีผู้สมัครในการเลือกตั้งนี้')
  const tally = await getVoteTally(electionConfigId)
  const winner = candidates.reduce((best, c) => (tally[c.id] ?? 0) > (tally[best?.id] ?? -1) ? c : best, null)
  if (!winner) throw new Error('ยังไม่มีผู้ลงคะแนนเลย')

  const positions = await getCouncilPositions()
  const electedPosition = positions.find(p => p.gender === gender && p.is_elected)
  if (!electedPosition) throw new Error('ไม่พบตำแหน่งที่กำหนดให้มาจากการเลือกตั้งของสภา' + (gender === 'M' ? 'ชาย' : 'หญิง'))

  const { error } = await supabase.from('council_election_config')
    .update({ results_published_at: new Date().toISOString() }).eq('id', electionConfigId)
  if (error) throw error

  const { error: e2 } = await supabase.from('council_members').insert({
    position_id: electedPosition.id, student_id: winner.student_id, academic_year: academicYear,
    source: 'elected', status: 'active', term_start_date: new Date().toISOString().slice(0, 10),
  })
  if (e2) throw e2
  return winner
}

// ─── เสนอคณะทำงาน (ประธาน) → แต่งตั้ง (ครูที่ปรึกษาสภา) — สเปคข้อ 8.6 ───────────────────────
// ตำแหน่งที่ยังว่าง — ไม่นับตำแหน่งประธาน (มาจากการเลือกตั้งเท่านั้น ไม่ใช่การเสนอ)
export async function getOpenPositionsForNomination(gender) {
  const [{ data: positions, error: e1 }, { data: members, error: e2 }] = await Promise.all([
    supabase.from('council_positions').select('*').eq('gender', gender).eq('is_active', true).eq('is_elected', false).order('sort_order'),
    supabase.from('council_members').select('position_id').eq('status', 'active'),
  ])
  if (e1) throw e1
  if (e2) throw e2
  const occupied = {}
  ;(members ?? []).forEach(m => { occupied[m.position_id] = (occupied[m.position_id] ?? 0) + 1 })
  return (positions ?? []).filter(p => (occupied[p.id] ?? 0) < p.seats_count)
}

// ผู้สมัครที่ผ่านสัมภาษณ์แล้ว (ตำแหน่งที่ไม่ใช่ประธาน) — กรองคนที่มีการเสนอค้างอยู่แล้วฝั่ง UI
export async function getInterviewedForNomination(gender) {
  const { data, error } = await supabase.from('council_applications')
    .select(`id, position_id, motivation, photo_url, student_id,
      students(id, full_name, student_code, main_room, image_url, photo_url),
      council_positions!inner(id, position_name, gender, is_elected),
      council_interviews(score, comment)`)
    .eq('status', 'interviewed').eq('council_positions.gender', gender).eq('council_positions.is_elected', false)
  if (error) throw error
  return data ?? []
}

export async function proposeNomination({ applicationId, positionId, proposedByStudentId }) {
  const { error } = await supabase.from('council_nominations').insert({
    application_id: applicationId, position_id: positionId, proposed_by_student_id: proposedByStudentId,
  })
  if (error) throw error
}

export async function getPendingNominations(gender) {
  const { data, error } = await supabase.from('council_nominations')
    .select(`id, application_id, position_id, status, comment, created_at,
      council_positions!inner(position_name, gender),
      council_applications(motivation, photo_url, students(full_name, student_code, main_room, image_url, photo_url))`)
    .eq('status', 'proposed').eq('council_positions.gender', gender).order('created_at')
  if (error) throw error
  return data ?? []
}

// อนุมัติ → แต่งตั้งเข้า council_members จริง (mirror pattern appointMember) / ไม่อนุมัติ → บันทึกเหตุผล
export async function decideNomination({ nominationId, approve, teacherId, comment }) {
  const { data: nom, error: e0 } = await supabase.from('council_nominations').select('*').eq('id', nominationId).single()
  if (e0) throw e0
  const { error } = await supabase.from('council_nominations')
    .update({ status: approve ? 'approved' : 'rejected', decided_by_teacher_id: teacherId, decided_at: new Date().toISOString(), comment })
    .eq('id', nominationId)
  if (error) throw error
  if (approve) {
    const { data: app, error: e1 } = await supabase.from('council_applications').select('student_id, academic_year').eq('id', nom.application_id).single()
    if (e1) throw e1
    const { error: e2 } = await supabase.from('council_members').insert({
      position_id: nom.position_id, student_id: app.student_id, academic_year: app.academic_year,
      source: 'appointed', status: 'active', term_start_date: new Date().toISOString().slice(0, 10),
    })
    if (e2) throw e2
    const { error: e3 } = await supabase.from('council_applications').update({ status: 'appointed' }).eq('id', nom.application_id)
    if (e3) throw e3
  }
}

// ─── กิจกรรมประจำปีของสภา — เขียนได้เฉพาะแอดมิน/ประธานสภา/ผู้รับผิดชอบกิจกรรมนั้นๆ (RLS คุมแล้ว) ──
export async function getCouncilActivities(academicYear) {
  let q = supabase.from('council_activities').select('*, council_members!council_activities_owner_member_id_fkey(students(full_name))').order('activity_date', { ascending: false, nullsFirst: false })
  if (academicYear) q = q.eq('academic_year', academicYear)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function createActivity({ title, detail, gender, activityDate, budget, ownerText, academicYear, openToGeneral, ownerMemberId }) {
  const { error } = await supabase.from('council_activities').insert({
    title, detail, gender: gender || null, activity_date: activityDate || null,
    budget: budget || null, owner_text: ownerText || null, academic_year: academicYear,
    open_to_general: !!openToGeneral, owner_member_id: ownerMemberId || null,
  })
  if (error) throw error
}

export async function updateActivityStatus(activityId, status) {
  const { error } = await supabase.from('council_activities').update({ status, updated_at: new Date().toISOString() }).eq('id', activityId)
  if (error) throw error
}

// เปิดให้นักเรียนทั่วไปเข้าร่วม + มอบหมายผู้รับผิดชอบ (สมาชิกสภาคนใดก็ได้ ตั้งเงื่อนไขเกียรติบัตรของกิจกรรมนี้ได้)
export async function updateActivityOwnership(activityId, { openToGeneral, ownerMemberId }) {
  const { error } = await supabase.from('council_activities')
    .update({ open_to_general: !!openToGeneral, owner_member_id: ownerMemberId || null, updated_at: new Date().toISOString() })
    .eq('id', activityId)
  if (error) throw error
}

// เซตของ student_id ที่เช็คชื่อแล้ว — ใช้ทำ checklist แบบเบา (ไม่ต้องละเอียดวันเวลา)
export async function getActivityAttendance(activityId) {
  const { data, error } = await supabase.from('council_activity_attendance').select('student_id').eq('activity_id', activityId)
  if (error) throw error
  return new Set((data ?? []).map(r => r.student_id))
}

// รายละเอียดเต็มพร้อมชื่อ+เวลาเช็คชื่อ — ใช้คำนวณสิทธิ์เกียรติบัตร (ต้องรู้ "วันไหนบ้าง" ไม่ใช่แค่จำนวนครั้ง)
export async function getActivityAttendanceDetailed(activityId) {
  const { data, error } = await supabase.from('council_activity_attendance')
    .select('student_id, checked_in_at, students(full_name, student_code, main_room, image_url, photo_url)')
    .eq('activity_id', activityId).order('checked_in_at')
  if (error) throw error
  return data ?? []
}

// รองรับทั้งสมาชิกสภาและนักเรียนทั่วไป — resolve member_id ให้อัตโนมัติถ้านักเรียนคนนี้เป็นสมาชิกสภา active อยู่ด้วย
export async function checkInAttendance({ activityId, studentId }) {
  const { data: cm } = await supabase.from('council_members').select('id').eq('student_id', studentId).eq('status', 'active').maybeSingle()
  const { error } = await supabase.from('council_activity_attendance')
    .insert({ activity_id: activityId, student_id: studentId, member_id: cm?.id ?? null })
  if (error) throw error
}

// ─── เกียรติบัตรกิจกรรม — เทมเพลต/เงื่อนไขต่อกิจกรรม/สถานะต่อนักเรียน ──────────────────────
export async function getCertificateTemplates() {
  const { data, error } = await supabase.from('council_certificate_templates').select('*').order('created_at')
  if (error) throw error
  return data ?? []
}
export async function createCertificateTemplate({ name, type, presetKey, backgroundImageUrl }) {
  const { error } = await supabase.from('council_certificate_templates')
    .insert({ name, type, preset_key: presetKey || null, background_image_url: backgroundImageUrl || null })
  if (error) throw error
}
export async function deleteCertificateTemplate(id) {
  const { error } = await supabase.from('council_certificate_templates').delete().eq('id', id)
  if (error) throw error
}

export async function getCertificateRule(activityId) {
  const { data, error } = await supabase.from('council_activity_certificate_rules').select('*').eq('activity_id', activityId).maybeSingle()
  if (error) throw error
  return data
}
export async function upsertCertificateRule({ activityId, templateId, minAttendanceCount, requiredDates, notes }) {
  const { error } = await supabase.from('council_activity_certificate_rules').upsert({
    activity_id: activityId, template_id: templateId || null,
    min_attendance_count: minAttendanceCount || null, required_dates: requiredDates ?? [],
    notes: notes || null, updated_at: new Date().toISOString(),
  }, { onConflict: 'activity_id' })
  if (error) throw error
}

export async function getActivityCertificateOverrides(activityId) {
  const { data, error } = await supabase.from('council_activity_certificates').select('*').eq('activity_id', activityId)
  if (error) throw error
  return data ?? []
}
export async function setCertificateOverride({ activityId, studentId, decision, comment, decidedByTeacherId, decidedByMemberId }) {
  const { error } = await supabase.from('council_activity_certificates').upsert({
    activity_id: activityId, student_id: studentId, override_decision: decision,
    comment: comment || null, decided_by_teacher_id: decidedByTeacherId || null, decided_by_member_id: decidedByMemberId || null,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'activity_id,student_id' })
  if (error) throw error
}
export async function issueActivityCertificate({ activityId, studentId, certificateNo }) {
  const { error } = await supabase.from('council_activity_certificates').upsert({
    activity_id: activityId, student_id: studentId, certificate_no: certificateNo, issued_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }, { onConflict: 'activity_id,student_id' })
  if (error) throw error
}

// เกียรติบัตรกิจกรรมของนักเรียนคนหนึ่ง (เฉพาะที่ออกแล้วจริง) — ใช้แสดงในหน้าของตัวเอง (นอกโมดูลสภา)
// แนบเทมเพลตของแต่ละกิจกรรมมาด้วย (query แยกอีกรอบ เพราะ certificates กับ rules ไม่มี FK ตรงกัน
// เป็นตารางพี่น้องที่อ้าง activity_id คนละแถวกัน — PostgREST embed ข้ามแบบนี้ไม่ได้ในคำสั่งเดียว)
export async function getMyActivityCertificates(studentId) {
  const { data, error } = await supabase.from('council_activity_certificates')
    .select('id, activity_id, certificate_no, issued_at, council_activities(title, detail, activity_date)')
    .eq('student_id', studentId).not('issued_at', 'is', null).order('issued_at', { ascending: false })
  if (error) throw error
  const certs = data ?? []
  if (!certs.length) return certs
  const activityIds = [...new Set(certs.map(c => c.activity_id))]
  const { data: rules } = await supabase.from('council_activity_certificate_rules')
    .select('activity_id, council_certificate_templates(id, name, type, preset_key, background_image_url)')
    .in('activity_id', activityIds)
  const templateByActivity = Object.fromEntries((rules ?? []).map(r => [r.activity_id, r.council_certificate_templates]))
  return certs.map(c => ({ ...c, template: templateByActivity[c.activity_id] ?? null }))
}

// ─── รูทีนประจำสัปดาห์ของสมาชิกสภา — จัดการเองได้ (self-service checklist ส่วนตัว, สเปคข้อ 8.8) ──
export async function getMyRoutines(memberId) {
  const { data, error } = await supabase.from('council_routines')
    .select('*').eq('member_id', memberId).eq('is_active', true).order('day_of_week')
  if (error) throw error
  return data ?? []
}

export async function getRoutineLogsForWeek(routineIds, weekStart) {
  if (!routineIds?.length) return new Set()
  const { data, error } = await supabase.from('council_routine_logs')
    .select('routine_id').in('routine_id', routineIds).eq('week_start', weekStart)
  if (error) throw error
  return new Set((data ?? []).map(r => r.routine_id))
}

export async function addRoutine({ memberId, dayOfWeek, timeRange, task, location }) {
  const { error } = await supabase.from('council_routines').insert({
    member_id: memberId, day_of_week: dayOfWeek, time_range: timeRange, task, location,
  })
  if (error) throw error
}

export async function removeRoutine(id) {
  const { error } = await supabase.from('council_routines').update({ is_active: false }).eq('id', id)
  if (error) throw error
}

export async function toggleRoutineLog({ routineId, weekStart, done }) {
  if (done) {
    const { error } = await supabase.from('council_routine_logs').insert({ routine_id: routineId, week_start: weekStart })
    if (error) throw error
  } else {
    const { error } = await supabase.from('council_routine_logs').delete().eq('routine_id', routineId).eq('week_start', weekStart)
    if (error) throw error
  }
}

// ─── มอบหมายงาน (ประธาน) — สเปคข้อ 8.7 ─────────────────────────────────────────
export async function getMyAssignments(memberId) {
  const { data, error } = await supabase.from('council_assignments')
    .select('*').eq('member_id', memberId).order('due_date', { ascending: true, nullsFirst: false })
  if (error) throw error
  return data ?? []
}

// รายการงานที่มอบหมายทั้งหมดของสภาฝ่ายนั้น (สำหรับประธานดูภาพรวม+นับ "N จาก M งานเสร็จแล้ว")
export async function getAssignmentsForGender(gender) {
  const { data, error } = await supabase.from('council_assignments')
    .select(`id, task, due_date, status, created_at,
      council_members!inner(id, position_id, council_positions!inner(gender, position_name), students(full_name, student_code, main_room, image_url, photo_url))`)
    .eq('council_members.council_positions.gender', gender)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function createAssignment({ memberId, task, dueDate, assignedByStudentId }) {
  const { error } = await supabase.from('council_assignments').insert({
    member_id: memberId, task, due_date: dueDate || null, assigned_by_student_id: assignedByStudentId,
  })
  if (error) throw error
}

export async function updateAssignmentStatus(id, status) {
  const { error } = await supabase.from('council_assignments').update({ status }).eq('id', id)
  if (error) throw error
}

export async function deleteAssignment(id) {
  const { error } = await supabase.from('council_assignments').delete().eq('id', id)
  if (error) throw error
}

// ─── ประกาศสภานักเรียน — ทุกคนอ่านได้ (กรอง audience ฝั่ง client), โพสต์ได้เฉพาะแอดมิน/ประธาน ──
export async function getCouncilAnnouncements() {
  const { data, error } = await supabase.from('council_announcements')
    .select('*, teachers(full_name), students(full_name)')
    .order('pinned', { ascending: false }).order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function postAnnouncement({ type, audience, title, body, pinned, postedByTeacherId, postedByStudentId }) {
  const { error } = await supabase.from('council_announcements').insert({
    type, audience, title, body, pinned,
    posted_by_teacher_id: postedByTeacherId || null, posted_by_student_id: postedByStudentId || null,
  })
  if (error) throw error
}

export async function getMyAnnouncementAcks(studentId) {
  const { data, error } = await supabase.from('council_announcement_acks').select('announcement_id').eq('student_id', studentId)
  if (error) throw error
  return new Set((data ?? []).map(r => r.announcement_id))
}

export async function ackAnnouncement({ announcementId, studentId }) {
  const { error } = await supabase.from('council_announcement_acks').insert({ announcement_id: announcementId, student_id: studentId })
  if (error) throw error
}

// นับ "รับทราบแล้ว N จาก M คน" ต่อประกาศ (สเปคข้อ 8.10) — N มาจากฟังก์ชันนี้, M มาจาก
// getEligibleVoterCount (แยกตามเพศ) หรือ getTotalActiveStudentCount (audience='all')
export async function getAnnouncementAckCounts() {
  const { data, error } = await supabase.from('council_announcement_acks').select('announcement_id')
  if (error) throw error
  const counts = {}
  ;(data ?? []).forEach(r => { counts[r.announcement_id] = (counts[r.announcement_id] ?? 0) + 1 })
  return counts
}

export async function getTotalActiveStudentCount() {
  const { count, error } = await supabase.from('students')
    .select('id', { count: 'exact', head: true })
    .or('is_active.is.null,is_active.eq.true')
  if (error) throw error
  return count ?? 0
}

// ─── ประเมินผลปฏิบัติหน้าที่ + เกียรติบัตร — เขียนได้เฉพาะแอดมิน/ครู (ครูที่ปรึกษาสภาประเมิน) ──
export async function getEvaluationCriteria() {
  const { data, error } = await supabase.from('council_evaluation_criteria')
    .select('*').eq('is_active', true).order('sort_order')
  if (error) throw error
  return data ?? []
}

export async function addCriterion({ name, weight }) {
  const { error } = await supabase.from('council_evaluation_criteria').insert({ name, weight })
  if (error) throw error
}

export async function removeCriterion(id) {
  const { error } = await supabase.from('council_evaluation_criteria').update({ is_active: false }).eq('id', id)
  if (error) throw error
}

export async function getCouncilEvaluations(academicYear) {
  const { data, error } = await supabase.from('council_evaluations').select('*').eq('academic_year', academicYear)
  if (error) throw error
  return data ?? []
}

export async function saveEvaluation({ memberId, academicYear, scores, totalScore, maxScore, decision, comment, evaluatorTeacherId }) {
  const { error } = await supabase.from('council_evaluations').upsert({
    member_id: memberId, academic_year: academicYear, scores, total_score: totalScore, max_score: maxScore,
    decision, comment, evaluator_teacher_id: evaluatorTeacherId, evaluated_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }, { onConflict: 'member_id,academic_year' })
  if (error) throw error
}

export async function issueCertificate({ evaluationId, certificateNo }) {
  const { error } = await supabase.from('council_evaluations')
    .update({ certificate_no: certificateNo, certificate_issued_at: new Date().toISOString() }).eq('id', evaluationId)
  if (error) throw error
}

// ─── เอกสารขออนุมัติโครงการ/กิจกรรม — ภายในแอดมิน/ครู/ประธานสภาเท่านั้น (ไม่ public) ─────────
// ตามแบบฟอร์มจริงของโรงเรียน (แบบเสนอโครงการ) + อนุมัติ 3 ระดับ: ครูที่ปรึกษาประจำฝ่าย
// (เฉพาะ origin='council') → หัวหน้าฝ่ายกิจการนักเรียน → ผู้อำนวยการ (2026-08-16)
export async function getCouncilDocuments(academicYear) {
  const { data, error } = await supabase.from('council_documents')
    .select('*, council_positions(position_name, gender)')
    .eq('academic_year', academicYear).order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

const DOC_FIELD_MAP = {
  title: 'title', planArea: 'plan_area', projectType: 'project_type', schoolStrategy: 'school_strategy',
  educationStandard: 'education_standard', responsiblePersons: 'responsible_persons', rationale: 'rationale',
  objectives: 'objectives', goalsQuantitative: 'goals_quantitative', goalsQualitative: 'goals_qualitative',
  workSteps: 'work_steps', durationText: 'duration_text', locationText: 'location_text',
  budgetItems: 'budget_items', stakeholders: 'stakeholders', evaluationItems: 'evaluation_items',
  expectedResults: 'expected_results', positionId: 'position_id',
}

export async function createDocument(fields) {
  const payload = {}
  Object.entries(fields).forEach(([k, v]) => { if (DOC_FIELD_MAP[k]) payload[DOC_FIELD_MAP[k]] = v })
  payload.origin = fields.origin
  payload.academic_year = fields.academicYear
  payload.created_by_student_id = fields.createdByStudentId || null
  payload.created_by_teacher_id = fields.createdByTeacherId || null
  const { data, error } = await supabase.from('council_documents').insert(payload).select().single()
  if (error) throw error
  return data
}

export async function updateDocumentDraft(id, fields) {
  const payload = {}
  Object.entries(fields).forEach(([k, v]) => { if (DOC_FIELD_MAP[k]) payload[DOC_FIELD_MAP[k]] = v })
  payload.updated_at = new Date().toISOString()
  const { error } = await supabase.from('council_documents').update(payload).eq('id', id)
  if (error) throw error
}

// ส่งจากร่าง — ไปคิวครูที่ปรึกษาประจำฝ่ายก่อนถ้าสภาริเริ่มเอง (origin='council') หรือข้ามไปคิว
// หัวหน้าฝ่ายกิจการนักเรียนเลยถ้าครูที่ปรึกษาสภาริเริ่มเอง (origin='teacher') — ล้างประวัติ
// ตีกลับครั้งก่อนออกด้วย เพราะกำลังส่งรอบใหม่แล้ว
export async function submitDocument(id) {
  const { data: doc, error: e0 } = await supabase.from('council_documents').select('origin').eq('id', id).single()
  if (e0) throw e0
  const nextStatus = doc.origin === 'council' ? 'pending_advisor' : 'pending_dept_head'
  const { error } = await supabase.from('council_documents').update({
    status: nextStatus, updated_at: new Date().toISOString(),
    last_rejected_stage: null, last_rejected_by_teacher_id: null, last_rejected_at: null, last_rejection_comment: null,
  }).eq('id', id)
  if (error) throw error
}

// ไม่อนุมัติที่ขั้นไหนก็ตาม → กลับไปเป็นร่างเสมอ (ตามที่ผู้ใช้ตัดสินใจ ไม่มีสถานะ "ถูกปฏิเสธถาวร")
async function decideDocumentStage({ id, approve, teacherId, comment, stage, decidedCol, decidedAtCol, commentCol, signatureCol, signatureUrl, nextStatus }) {
  const now = new Date().toISOString()
  if (approve) {
    const payload = { status: nextStatus, updated_at: now, [decidedCol]: teacherId, [decidedAtCol]: now, [commentCol]: comment || null }
    if (signatureCol) payload[signatureCol] = signatureUrl || null
    const { error } = await supabase.from('council_documents').update(payload).eq('id', id)
    if (error) throw error
  } else {
    const { error } = await supabase.from('council_documents').update({
      status: 'draft', updated_at: now, last_rejected_stage: stage,
      last_rejected_by_teacher_id: teacherId, last_rejected_at: now, last_rejection_comment: comment,
    }).eq('id', id)
    if (error) throw error
  }
}

export async function decideAsAdvisor({ id, approve, teacherId, comment }) {
  return decideDocumentStage({
    id, approve, teacherId, comment, stage: 'advisor',
    decidedCol: 'advisor_decided_by_teacher_id', decidedAtCol: 'advisor_decided_at', commentCol: 'advisor_comment',
    nextStatus: 'pending_dept_head',
  })
}

export async function decideAsDeptHead({ id, approve, teacherId, comment, signatureUrl }) {
  return decideDocumentStage({
    id, approve, teacherId, comment, stage: 'dept_head',
    decidedCol: 'dept_head_decided_by_teacher_id', decidedAtCol: 'dept_head_decided_at', commentCol: 'dept_head_comment',
    signatureCol: 'dept_head_signature_url', signatureUrl, nextStatus: 'pending_director',
  })
}

export async function decideAsDirector({ id, approve, teacherId, comment, signatureUrl }) {
  return decideDocumentStage({
    id, approve, teacherId, comment, stage: 'director',
    decidedCol: 'director_decided_by_teacher_id', decidedAtCol: 'director_decided_at', commentCol: 'director_comment',
    signatureCol: 'director_signature_url', signatureUrl, nextStatus: 'approved',
  })
}

// ─── มอบสิทธิ์บทบาทครู (แอดมิน) — สเปคข้อ 8.19 + ตำแหน่งใหม่ 2 ตำแหน่งที่ผู้ใช้ขอเพิ่ม
// (หัวหน้าฝ่ายกิจการนักเรียน/ผู้อำนวยการ) — การ์เนราไลซ์เป็นฟังก์ชันเดียวรับ position value
// แทนคัดลอก 3 ชุด เขียนเฉพาะคอลัมน์ positions[] เสมอ ห้ามแตะคอลัมน์ position (เดี่ยว) เด็ดขาด
// เพราะมี check constraint teachers_position_check จำกัดค่าที่ยอมรับไว้ตายตัว (dept_head/
// registrar_*/academic_*) ไม่มีตำแหน่งสภาทั้ง 3 อยู่ในนั้น — เขียนผิดคอลัมน์จะชน constraint ทันที
export async function getTeachersByPosition(positionValue) {
  const { data, error } = await supabase.from('teachers')
    .select('id, full_name, teacher_code, image_url, signature_url, category')
    .contains('positions', [positionValue])
    .order('full_name')
  if (error) throw error
  return data ?? []
}

export async function addTeacherPosition(teacherId, positionValue) {
  const { data: t, error: e0 } = await supabase.from('teachers').select('positions').eq('id', teacherId).single()
  if (e0) throw e0
  const positions = Array.from(new Set([...(t.positions ?? []), positionValue]))
  const { error } = await supabase.from('teachers').update({ positions }).eq('id', teacherId)
  if (error) throw error
}

export async function removeTeacherPosition(teacherId, positionValue) {
  const { data: t, error: e0 } = await supabase.from('teachers').select('positions').eq('id', teacherId).single()
  if (e0) throw e0
  const positions = (t.positions ?? []).filter(p => p !== positionValue)
  const { error } = await supabase.from('teachers').update({ positions }).eq('id', teacherId)
  if (error) throw error
}

// ─── ฝ่ายที่ครูที่ปรึกษาสภาแต่ละคนรับผิดชอบ (many-to-many กับ council_positions) ──────────
export async function getAdvisorPositions(teacherId) {
  const { data, error } = await supabase.from('council_advisor_positions')
    .select('position_id').eq('teacher_id', teacherId)
  if (error) throw error
  return (data ?? []).map(r => r.position_id)
}

export async function setAdvisorPositions(teacherId, positionIds) {
  const { error: e1 } = await supabase.from('council_advisor_positions').delete().eq('teacher_id', teacherId)
  if (e1) throw e1
  if (positionIds.length) {
    const { error: e2 } = await supabase.from('council_advisor_positions')
      .insert(positionIds.map(positionId => ({ teacher_id: teacherId, position_id: positionId })))
    if (e2) throw e2
  }
}

// คืนรายชื่อครูที่ปรึกษาที่ดูแลตำแหน่งนี้ (ใช้ตอนหาคิวว่าใครต้องรับรองเอกสารของฝ่ายไหน)
export async function getAdvisorsForPosition(positionId) {
  const { data, error } = await supabase.from('council_advisor_positions')
    .select('teacher_id').eq('position_id', positionId)
  if (error) throw error
  return (data ?? []).map(r => r.teacher_id)
}

// ─── ลายเซ็น/รูปประจำตัวของตัวเอง — ครูที่ปรึกษาสภา/หัวหน้าฝ่ายฯ/ผู้อำนวยการตั้งเองได้
// (แอดมินตั้งแทนให้ได้ด้วย ใช้ฟังก์ชันเดียวกันนี้เพราะ RLS teachers_admin ครอบคลุมอยู่แล้ว) ──
export async function updateMySignature(teacherId, signatureUrl) {
  const { error } = await supabase.from('teachers').update({ signature_url: signatureUrl }).eq('id', teacherId)
  if (error) throw error
}

export async function updateMyPhoto(teacherId, imageUrl) {
  const { error } = await supabase.from('teachers').update({ image_url: imageUrl }).eq('id', teacherId)
  if (error) throw error
}
