import { supabase } from './supabase.js'

// ─── Quiz Banks ─────────────────────────────────────────────────────────────
export async function getQuizBanks(teacherId) {
  const { data, error } = await supabase
    .from('quiz_banks')
    .select('id, subject_id, name, description, created_at')
    .eq('teacher_id', teacherId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function createQuizBank(payload) {
  const { data, error } = await supabase.from('quiz_banks').insert(payload).select().single()
  if (error) throw error
  return data
}

export async function updateQuizBank(id, payload) {
  const { error } = await supabase.from('quiz_banks').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteQuizBank(id) {
  const { error } = await supabase.from('quiz_banks').delete().eq('id', id)
  if (error) throw error
}

// ─── Quiz Questions ─────────────────────────────────────────────────────────
export async function getQuizQuestions(bankId) {
  const { data, error } = await supabase
    .from('quiz_questions')
    .select('id, question_text, choices, correct_choice_index, explanation, difficulty, category, sort_order')
    .eq('bank_id', bankId)
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true })
  if (error) throw error
  return data ?? []
}

export async function createQuizQuestion(payload) {
  const { error } = await supabase.from('quiz_questions').insert(payload)
  if (error) throw error
}

export async function bulkImportQuizQuestions(bankId, rows) {
  // rows: [{ question_text, choices, correct_choice_index, explanation, difficulty, category }, ...]
  const payload = rows.map(r => ({ ...r, bank_id: bankId }))
  const CHUNK = 100
  for (let i = 0; i < payload.length; i += CHUNK) {
    const { error } = await supabase.from('quiz_questions').insert(payload.slice(i, i + CHUNK))
    if (error) throw error
  }
}

export async function updateQuizQuestion(id, payload) {
  const { error } = await supabase.from('quiz_questions').update(payload).eq('id', id)
  if (error) throw error
}

export async function deleteQuizQuestion(id) {
  const { error } = await supabase.from('quiz_questions').delete().eq('id', id)
  if (error) throw error
}

// ─── Quizzes (exam sessions) ────────────────────────────────────────────────
export async function getQuizzesForClass(classId) {
  const { data, error } = await supabase
    .from('quizzes')
    .select('*')
    .eq('class_id', classId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getQuizzesForBank(bankId) {
  const { data, error } = await supabase
    .from('quizzes')
    .select('*')
    .eq('bank_id', bankId)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function createQuiz(payload) {
  const { data, error } = await supabase.from('quizzes').insert(payload).select().single()
  if (error) throw error
  return data
}

export async function updateQuiz(id, payload) {
  const { error } = await supabase.from('quizzes').update(payload).eq('id', id)
  if (error) throw error
}

export async function startQuizLive(id) {
  const { error } = await supabase
    .from('quizzes')
    .update({ status: 'started', started_at: new Date().toISOString() })
    .eq('id', id)
  if (error) throw error
}

export async function closeQuiz(id, { writeScores = false } = {}) {
  // Safe by default: closing and publishing scores are separate decisions.
  // Both RPCs finalize still-in-progress attempts; only the explicit
  // writeScores path is allowed to touch student_scores.
  const rpcName = writeScores
    ? 'teacher_close_quiz_and_finalize'
    : 'teacher_close_quiz_without_gradebook'
  const { error } = await supabase.rpc(rpcName, { p_quiz_id: id })
  if (error) throw error
}

export async function applyQuizScores(id) {
  // Idempotent on the server. In add mode only the contribution difference is
  // applied, so pressing this again cannot double-add the same quiz score.
  const { data, error } = await supabase.rpc('teacher_apply_quiz_scores', { p_quiz_id: id })
  if (error) throw error
  return Number(data ?? 0)
}

export async function deleteQuiz(id) {
  const { error } = await supabase.from('quizzes').delete().eq('id', id)
  if (error) throw error
}

// Lifetime count of quizzes this teacher has actually STARTED (pressed "เริ่ม
// สอบ" — started_at set), across every bank they own — used to gate the
// free-trial quota for non-donor teachers. Counted live from the DB (not a
// localStorage counter like the other free-trial features in this app) since
// this gate protects a real student-facing action, not just a convenience
// feature, and must not be bypassable by clearing browser storage.
export async function getTeacherStartedQuizCount(teacherId) {
  const { data: banks, error: bErr } = await supabase.from('quiz_banks').select('id').eq('teacher_id', teacherId)
  if (bErr) throw bErr
  const bankIds = (banks ?? []).map(b => b.id)
  if (!bankIds.length) return 0
  const { count, error } = await supabase
    .from('quizzes')
    .select('id', { count: 'exact', head: true })
    .in('bank_id', bankIds)
    .not('started_at', 'is', null)
  if (error) throw error
  return count ?? 0
}

// ─── Student-facing quiz list ───────────────────────────────────────────────
export async function getQuizzesForStudentClass(classId, studentId) {
  const { data: quizzes, error } = await supabase
    .from('quizzes')
    .select('*')
    .eq('class_id', classId)
    .neq('status', 'draft')
    .order('created_at', { ascending: false })
  if (error) throw error
  if (!quizzes?.length) return []

  const { data: attempts, error: attemptsError } = await supabase
    .from('quiz_attempts')
    .select('id, quiz_id, attempt_number, status, score_pct')
    .eq('student_id', studentId)
    .in('quiz_id', quizzes.map(q => q.id))
  if (attemptsError) throw attemptsError

  return quizzes.map(quiz => ({
    ...quiz,
    attempts: (attempts ?? []).filter(a => a.quiz_id === quiz.id).sort((a, b) => a.attempt_number - b.attempt_number)
  }))
}

// History of this student's OTHER finished attempts on the same quiz — used
// to show "ประวัติคะแนนครั้งก่อนหน้า" before starting attempt #2+, and the
// full "สรุปคะแนนทุกครั้ง" panel once all allowed attempts are used up.
// Plain select (not an RPC): RLS's quiz_attempts_student_select_own already
// restricts this to the caller's own rows regardless of the student_id filter.
export async function getMyQuizAttemptHistory(quizId, studentId) {
  const { data, error } = await supabase
    .from('quiz_attempts')
    .select('id, attempt_number, status, score_pct, submitted_at, terminated_at')
    .eq('quiz_id', quizId)
    .eq('student_id', studentId)
    .in('status', ['submitted', 'terminated_violation'])
    .order('attempt_number', { ascending: true })
  if (error) throw error
  return data ?? []
}

export async function getQuizAttempt(attemptId) {
  const { data, error } = await supabase
    .from('quiz_attempts')
    .select('*, quizzes(*)')
    .eq('id', attemptId)
    .single()
  if (error) throw error
  return data
}

// รอบล่าสุด (ไม่ว่าสถานะไหน) — ใช้ตัดสินใจตอนกดเข้าสอบจากหน้าหลัก: ถ้ารอบ
// ล่าสุดยังไม่ submitted/terminated (คือ in_progress) ให้ resume ต่อผ่าน
// start_quiz_attempt ตามเดิม แต่ถ้าจบไปแล้วให้พาไปหน้าสรุปผลของรอบนั้นก่อน
// (แสดงประวัติ+สิทธิ์ที่เหลือ+ปุ่มยืนยันจบ) แทนที่จะสร้างรอบใหม่ทันที
export async function getLatestQuizAttempt(quizId, studentId) {
  const { data, error } = await supabase
    .from('quiz_attempts')
    .select('id, attempt_number, status')
    .eq('quiz_id', quizId)
    .eq('student_id', studentId)
    .order('attempt_number', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error) throw error
  return data
}

// นักเรียนกดยืนยันจบเองแล้วหรือยัง (ไม่ว่าจะเหลือสิทธิ์อยู่หรือหมดแล้วก็ตาม)
export async function getQuizFinalization(quizId, studentId) {
  const { data, error } = await supabase
    .from('quiz_student_finalizations')
    .select('confirmed_at')
    .eq('quiz_id', quizId)
    .eq('student_id', studentId)
    .maybeSingle()
  if (error) throw error
  return data
}

// เซ็ตของ quiz_id ที่นักเรียนกดยืนยันจบไปแล้ว — ใช้กรองการ์ด "เปิดสอบอยู่ตอนนี้"
// ที่หน้าหลัก ไม่ให้โชว์การ์ดค้างอยู่หลังจากยืนยันจบไปแล้วทั้งที่ยังมีสิทธิ์เหลือ
export async function getMyQuizFinalizations(quizIds, studentId) {
  if (!quizIds?.length) return new Set()
  const { data, error } = await supabase
    .from('quiz_student_finalizations')
    .select('quiz_id')
    .eq('student_id', studentId)
    .in('quiz_id', quizIds)
  if (error) throw error
  return new Set((data ?? []).map(r => r.quiz_id))
}

// ─── RPC wrappers ───────────────────────────────────────────────────────────
export async function rpcStartAttempt(quizId) {
  const { data, error } = await supabase.rpc('start_quiz_attempt', { p_quiz_id: quizId })
  if (error) throw error
  return data
}

export async function rpcConfirmQuizFinal(quizId) {
  const { error } = await supabase.rpc('confirm_quiz_final', { p_quiz_id: quizId })
  if (error) throw error
}

export async function rpcGetAttemptQuestions(attemptId) {
  const { data, error } = await supabase.rpc('get_quiz_attempt_questions', { p_attempt_id: attemptId })
  if (error) throw error
  return data ?? []
}

export async function rpcSubmitAttempt(attemptId) {
  const { error } = await supabase.rpc('submit_quiz_attempt', { p_attempt_id: attemptId })
  if (error) throw error
}

export async function rpcRecordViolation(attemptId, violationType) {
  const { data, error } = await supabase.rpc('record_quiz_violation', {
    p_attempt_id: attemptId, p_violation_type: violationType
  })
  if (error) throw error
  return data?.[0] ?? { violation_count: 0, terminated: false }
}

export async function rpcClaimSession(attemptId) {
  const { data, error } = await supabase.rpc('claim_quiz_attempt_session', { p_attempt_id: attemptId })
  if (error) throw error
  return data
}

export async function rpcUnlockAttempt(attemptId, mode) {
  const { data, error } = await supabase.rpc('teacher_unlock_quiz_attempt', {
    p_attempt_id: attemptId, p_mode: mode
  })
  if (error) throw error
  return data
}

// ─── Instant feedback + streak bonus (quiz.lock_on_answer / instant_feedback_bonus) ─
// Only ever called when the quiz opted into one of those two modes — legacy
// quizzes keep using rpcHeartbeat() for answers exactly as before.
export async function rpcSubmitQuizAnswer(attemptId, sessionToken, questionId, chosenIndex) {
  const { data, error } = await supabase.rpc('submit_quiz_answer', {
    p_attempt_id: attemptId, p_session_token: sessionToken,
    p_question_id: questionId, p_chosen_index: chosenIndex,
  })
  if (error) throw error
  return data?.[0] ?? null
}

export async function rpcUseQuizBonus(attemptId, sessionToken, bonusType, questionId = null) {
  const { data, error } = await supabase.rpc('use_quiz_bonus', {
    p_attempt_id: attemptId, p_session_token: sessionToken,
    p_bonus_type: bonusType, p_question_id: questionId,
  })
  if (error) throw error
  return data?.[0] ?? null
}

// Privacy-safe: returns only the caller's own rank/total/best score, never
// other students' identities or scores.
export async function rpcGetMyRank(attemptId) {
  const { data, error } = await supabase.rpc('get_my_quiz_rank', { p_attempt_id: attemptId })
  if (error) throw error
  return data?.[0] ?? null
}

// ─── Autosave (student, in_progress attempts only) ─────────────────────────
// Goes through the RPC (not a direct table UPDATE) so the session-token check
// and server-side deadline backstop in quiz_attempt_heartbeat() always run.
export async function rpcHeartbeat(attemptId, sessionToken, answers, timeRemainingSec) {
  const { data, error } = await supabase.rpc('quiz_attempt_heartbeat', {
    p_attempt_id: attemptId,
    p_session_token: sessionToken,
    p_answers: answers ?? null,
    p_time_remaining_sec: timeRemainingSec ?? null,
  })
  if (error) throw error
  return data?.[0]?.expired ?? false
}

// ─── Teacher monitoring ─────────────────────────────────────────────────────
export async function getQuizAttemptsForMonitor(quizId) {
  const { data, error } = await supabase
    .from('quiz_attempts')
    .select('id, student_id, attempt_number, status, score_pct, violation_count, question_order, answers, answer_correctness, started_at, submitted_at, terminated_at')
    .eq('quiz_id', quizId)
    .order('started_at', { ascending: true })
  if (error) throw error
  return data ?? []
}

// ─── Post-quiz analytics ────────────────────────────────────────────────────
export async function getQuizAnalytics(quizId) {
  const { data: attempts, error } = await supabase
    .from('quiz_attempts')
    .select('id, student_id, status, score_pct, question_order, answers, violation_count')
    .eq('quiz_id', quizId)
    .in('status', ['submitted', 'terminated_violation'])
  if (error) throw error

  const { data: violations, error: vError } = await supabase
    .from('quiz_attempt_violations')
    .select('attempt_id, violation_type, occurred_at')
    .in('attempt_id', (attempts ?? []).map(a => a.id))
  if (vError) throw vError

  return { attempts: attempts ?? [], violations: violations ?? [] }
}
