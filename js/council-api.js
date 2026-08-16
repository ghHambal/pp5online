import { supabase } from './supabase.js'

// ─── Settings (reuse system_config เดิม, key prefix council_) ────────────────
const COUNCIL_CONFIG_KEYS = [
  'council_logo_url', 'council_theme_color', 'council_name',
  'council_theme_side_m', 'council_theme_side_w', // สีธีมตามฝ่าย (Phase 2 ตั้งค่า > ทั่วไป)
  'council_term_start_semester', 'council_term_start_year',
  'council_term_end_semester', 'council_term_end_year',
  'council_min_gpa', 'council_min_gpa_religious', // เกรดขั้นต่ำ สามัญ/ศาสนา แยกกัน (สเปคข้อ 8.2)
  'council_eligible_grade_levels', 'council_require_teacher_endorsement',
  'council_apply_opens_at', 'council_apply_closes_at', // ช่วงเวลาเปิด-ปิดรับสมัคร
  'council_video_max_minutes', 'council_video_brief', // วิดีโอแนะนำตัว: จำนวนนาที + หัวข้อที่ต้องพูด (JSON array)
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
    .select('id, position_id, status, motivation, photo_url, created_at, council_positions(position_name, gender, is_elected)')
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

// ─── สมัครสภานักเรียน ──────────────────────────────────────────────────────
export async function submitCouncilApplication({ studentId, positionId, academicYear, motivation, photoUrl }) {
  const { error } = await supabase.from('council_applications').insert({
    student_id: studentId, position_id: positionId, academic_year: academicYear,
    motivation, photo_url: photoUrl,
  })
  if (error) throw error
}

// ─── การยืนยัน (รับรอง) ใบสมัคร โดยครูที่ปรึกษาสามัญของห้องนั้นๆ ──────────────────
// ดึงใบสมัครที่ "รอ" ครูคนนี้ยืนยันทั้งหมด (กรองห้องฝั่ง client เพราะ RLS อนุญาตครูทุกคน
// อ่านได้กว้างกว่านี้อยู่แล้ว — ต้อง filter ที่ถูกต้องจริงในโค้ดฝั่งนี้)
export async function getPendingEndorsements(mainRooms) {
  if (!mainRooms?.length) return []
  const { data, error } = await supabase.from('council_applications')
    .select('id, position_id, motivation, photo_url, status, created_at, council_positions(position_name, gender), students(id, full_name, student_code, main_room, image_url, photo_url)')
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

// ─── จัดการใบสมัคร (แอดมิน) — รับรองแล้วเท่านั้น: นัดสัมภาษณ์ → ให้คะแนน → ตั้งผู้สมัคร ──
export async function getCouncilApplicationsForAdmin(academicYear) {
  let q = supabase.from('council_applications')
    .select(`id, position_id, status, motivation, photo_url, academic_year, created_at,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      council_positions(id, position_name, gender, is_elected),
      students(id, full_name, student_code, main_room, image_url, photo_url),
      council_interviews(id, scheduled_at, location, interviewer_teacher_id, result, score, comment),
      council_candidates(id, election_config_id, ballot_number)`)
    .not('endorsed_at', 'is', null)
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

export async function saveCouncilInterviewScore({ interviewId, applicationId, score, result, comment }) {
  const { error } = await supabase.from('council_interviews')
    .update({ score, result, comment }).eq('id', interviewId)
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
    .select('id, ballot_number, campaign_statement, photo_url, student_id, students(full_name, student_code, main_room, image_url, photo_url)')
    .eq('election_config_id', electionConfigId).order('ballot_number')
  if (error) throw error
  return data ?? []
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

// ─── กิจกรรมประจำปีของสภา — เขียนได้เฉพาะแอดมิน/ประธานสภาที่ล็อกอินอยู่ (RLS คุมแล้ว) ────────
export async function getCouncilActivities(academicYear) {
  let q = supabase.from('council_activities').select('*').order('activity_date', { ascending: false, nullsFirst: false })
  if (academicYear) q = q.eq('academic_year', academicYear)
  const { data, error } = await q
  if (error) throw error
  return data ?? []
}

export async function createActivity({ title, detail, gender, activityDate, budget, ownerText, academicYear }) {
  const { error } = await supabase.from('council_activities').insert({
    title, detail, gender: gender || null, activity_date: activityDate || null,
    budget: budget || null, owner_text: ownerText || null, academic_year: academicYear,
  })
  if (error) throw error
}

export async function updateActivityStatus(activityId, status) {
  const { error } = await supabase.from('council_activities').update({ status, updated_at: new Date().toISOString() }).eq('id', activityId)
  if (error) throw error
}

export async function getActivityAttendance(activityId) {
  const { data, error } = await supabase.from('council_activity_attendance').select('member_id').eq('activity_id', activityId)
  if (error) throw error
  return new Set((data ?? []).map(r => r.member_id))
}

export async function checkInAttendance({ activityId, memberId }) {
  const { error } = await supabase.from('council_activity_attendance').insert({ activity_id: activityId, member_id: memberId })
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
export async function getCouncilDocuments(academicYear) {
  const { data, error } = await supabase.from('council_documents').select('*')
    .eq('academic_year', academicYear).order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function createDocument({ title, rationale, objective, budget, ownerText, academicYear, createdByStudentId }) {
  const { error } = await supabase.from('council_documents').insert({
    title, rationale, objective, budget: budget || null, owner_text: ownerText,
    academic_year: academicYear, created_by_student_id: createdByStudentId || null,
  })
  if (error) throw error
}

export async function submitDocument(id) {
  const { error } = await supabase.from('council_documents').update({ status: 'pending', updated_at: new Date().toISOString() }).eq('id', id)
  if (error) throw error
}

export async function decideDocument({ id, approve, teacherId, comment }) {
  const { error } = await supabase.from('council_documents').update({
    status: approve ? 'approved' : 'rejected', approved_by_teacher_id: teacherId || null,
    approval_comment: comment, updated_at: new Date().toISOString(),
  }).eq('id', id)
  if (error) throw error
}
