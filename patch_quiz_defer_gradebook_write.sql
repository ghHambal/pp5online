-- patch_quiz_defer_gradebook_write.sql
-- เปลี่ยนจาก "เขียนคะแนนเข้าสมุดคะแนนทุกครั้งที่ submit" เป็น "เขียนเฉพาะตอน
-- นักเรียนกดยืนยันบันทึกคะแนนสอบขั้นสุดท้ายเท่านั้น" — ยกเว้นควิซที่ทำได้ครั้ง
-- เดียว (max_attempts<=1) ซึ่งไม่มีปุ่มยืนยันให้กด (ไม่มีทางเลือกทำต่ออยู่แล้ว
-- ตั้งแต่ submit ครั้งเดียวก็ถือว่า final ทันที) จึงยังคงเขียนทันทีเหมือนเดิม
--
-- score_pct ของแต่ละ attempt ยังคำนวณและบันทึกไว้ที่ quiz_attempts เหมือนเดิม
-- ทุกครั้ง (ใช้แสดงหน้าสรุปผล/ประวัติ/อันดับ) — ที่เปลี่ยนคือ "เขียนเข้า
-- student_scores (สมุดคะแนนจริง) เมื่อไหร่" เท่านั้น

-- ── ตัวช่วย: เขียนคะแนนของนักเรียน 1 คนเข้าสมุดคะแนน ตามเกณฑ์ที่ครูตั้งไว้ ──
CREATE OR REPLACE FUNCTION public._write_quiz_score_to_gradebook(p_quiz_id UUID, p_student_id INTEGER)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_quiz          public.quizzes%ROWTYPE;
  v_effective_pct NUMERIC(5,2);
  v_converted     NUMERIC(5,2);
BEGIN
  SELECT * INTO v_quiz FROM public.quizzes WHERE id = p_quiz_id;
  IF NOT FOUND OR v_quiz.score_column_id IS NULL THEN RETURN; END IF;

  SELECT
    CASE v_quiz.attempt_scoring_mode
      WHEN 'highest' THEN (SELECT max(score_pct) FROM public.quiz_attempts
                            WHERE quiz_id = p_quiz_id AND student_id = p_student_id
                              AND status IN ('submitted','terminated_violation'))
      WHEN 'first'   THEN (SELECT score_pct FROM public.quiz_attempts
                            WHERE quiz_id = p_quiz_id AND student_id = p_student_id
                              AND status IN ('submitted','terminated_violation')
                            ORDER BY coalesce(submitted_at, terminated_at) ASC LIMIT 1)
      ELSE                (SELECT score_pct FROM public.quiz_attempts
                            WHERE quiz_id = p_quiz_id AND student_id = p_student_id
                              AND status IN ('submitted','terminated_violation')
                            ORDER BY coalesce(submitted_at, terminated_at) DESC LIMIT 1)
    END
  INTO v_effective_pct;

  IF v_effective_pct IS NULL THEN RETURN; END IF;

  v_converted := round(v_effective_pct / 100 * coalesce(v_quiz.score_max, 100), 2);

  -- Keep whichever score is HIGHER if this column already holds one — matches
  -- the existing "สอบปรับ" (retake) convention elsewhere in the app.
  INSERT INTO public.student_scores (assignment_id, student_id, original_score, final_score)
  VALUES (v_quiz.score_column_id, p_student_id, v_converted, v_converted)
  ON CONFLICT (assignment_id, student_id)
  DO UPDATE SET
    original_score = GREATEST(COALESCE(public.student_scores.original_score, 0), EXCLUDED.original_score),
    final_score = GREATEST(COALESCE(public.student_scores.final_score, 0), EXCLUDED.final_score);
END;
$$;
REVOKE ALL ON FUNCTION public._write_quiz_score_to_gradebook(UUID, INTEGER) FROM PUBLIC, anon, authenticated;

-- ── _finalize_quiz_attempt: เขียนสมุดคะแนนทันทีเฉพาะ max_attempts<=1 ──
CREATE OR REPLACE FUNCTION public._finalize_quiz_attempt(p_attempt_id UUID, p_new_status TEXT)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_attempt       public.quiz_attempts%ROWTYPE;
  v_quiz          public.quizzes%ROWTYPE;
  v_total         INTEGER;
  v_correct       INTEGER;
  v_score_pct     NUMERIC(5,2);
BEGIN
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'attempt not found'; END IF;
  IF v_attempt.status <> 'in_progress' THEN RETURN; END IF; -- already finalized, no-op

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_attempt.quiz_id;

  SELECT count(*) INTO v_total FROM jsonb_array_elements_text(v_attempt.question_order);
  SELECT count(*) INTO v_correct
    FROM jsonb_array_elements_text(v_attempt.question_order) qid
    JOIN public.quiz_questions qq ON qq.id = qid.value::uuid
    WHERE (v_attempt.answers ->> qid.value)::int = qq.correct_choice_index;

  v_score_pct := CASE WHEN v_total > 0 THEN round(100.0 * v_correct / v_total, 2) ELSE 0 END;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);

  UPDATE public.quiz_attempts SET
    status = p_new_status,
    score_pct = v_score_pct,
    submitted_at = CASE WHEN p_new_status = 'submitted' THEN now() ELSE submitted_at END,
    terminated_at = CASE WHEN p_new_status = 'terminated_violation' THEN now() ELSE terminated_at END
  WHERE id = p_attempt_id;

  -- ควิซทำได้ครั้งเดียว: ไม่มีปุ่ม "ยืนยันจบ" ให้กด (ไม่มีทางเลือกทำต่ออยู่แล้ว)
  -- ถือว่า final ทันทีที่ submit เหมือนพฤติกรรมเดิม — ควิซทำได้หลายครั้งจะรอ
  -- เขียนสมุดคะแนนตอนกด confirm_quiz_final() แทน (ดู patch_quiz_defer_gradebook_write.sql)
  IF v_quiz.max_attempts <= 1 THEN
    PERFORM public._write_quiz_score_to_gradebook(v_quiz.id, v_attempt.student_id);
  END IF;
END;
$$;
REVOKE ALL ON FUNCTION public._finalize_quiz_attempt(UUID, TEXT) FROM PUBLIC, anon, authenticated;

-- ── confirm_quiz_final: เขียนสมุดคะแนนตอนนักเรียนกดยืนยันเอง ──
CREATE OR REPLACE FUNCTION public.confirm_quiz_final(p_quiz_id UUID)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id  INTEGER;
  v_done_count  INTEGER;
  v_inprog      INTEGER;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  IF v_student_id IS NULL THEN RAISE EXCEPTION 'not a student'; END IF;

  SELECT count(*) INTO v_inprog FROM public.quiz_attempts
    WHERE quiz_id = p_quiz_id AND student_id = v_student_id AND status = 'in_progress';
  IF v_inprog > 0 THEN
    RAISE EXCEPTION 'ยังทำแบบทดสอบค้างอยู่ ต้องส่งคำตอบให้จบก่อน';
  END IF;

  SELECT count(*) INTO v_done_count FROM public.quiz_attempts
    WHERE quiz_id = p_quiz_id AND student_id = v_student_id
      AND status IN ('submitted','terminated_violation');
  IF v_done_count = 0 THEN
    RAISE EXCEPTION 'ยังไม่เคยทำแบบทดสอบนี้';
  END IF;

  INSERT INTO public.quiz_student_finalizations (quiz_id, student_id, attempt_count_at_confirm)
  VALUES (p_quiz_id, v_student_id, v_done_count)
  ON CONFLICT (quiz_id, student_id) DO NOTHING;

  PERFORM public._write_quiz_score_to_gradebook(p_quiz_id, v_student_id);
END;
$$;
REVOKE ALL ON FUNCTION public.confirm_quiz_final(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.confirm_quiz_final(UUID) TO authenticated;

-- ── teacher_close_quiz_and_finalize: ครูปิดสอบทั้งชุด — ไม่มีโอกาสให้นักเรียน
-- กดยืนยันเองอีกต่อไปแล้ว ต้องเขียนสมุดคะแนน+ทำเครื่องหมายจบให้อัตโนมัติทุก
-- คนที่เคยส่งคำตอบอย่างน้อย 1 ครั้งแต่ยังไม่เคยกดยืนยันเอง (กันคะแนนค้างไม่
-- เข้าสมุดคะแนนถ้านักเรียนลืมกด) ──
CREATE OR REPLACE FUNCTION public.teacher_close_quiz_and_finalize(p_quiz_id UUID)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_owns BOOLEAN;
  v_attempt_id UUID;
  v_sid INTEGER;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM public.quizzes q
    JOIN public.classes c ON c.id = q.class_id
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE q.id = p_quiz_id AND t.profile_id = auth.uid()
  ) INTO v_owns;
  IF NOT v_owns THEN RAISE EXCEPTION 'not your quiz'; END IF;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);
  UPDATE public.quizzes SET status = 'closed', closed_at = now() WHERE id = p_quiz_id;

  FOR v_attempt_id IN SELECT id FROM public.quiz_attempts WHERE quiz_id = p_quiz_id AND status = 'in_progress' LOOP
    PERFORM public._finalize_quiz_attempt(v_attempt_id, 'submitted');
  END LOOP;

  FOR v_sid IN
    SELECT DISTINCT student_id FROM public.quiz_attempts
    WHERE quiz_id = p_quiz_id AND status IN ('submitted','terminated_violation')
  LOOP
    PERFORM public._write_quiz_score_to_gradebook(p_quiz_id, v_sid);
    INSERT INTO public.quiz_student_finalizations (quiz_id, student_id, attempt_count_at_confirm)
    SELECT p_quiz_id, v_sid, count(*) FROM public.quiz_attempts
      WHERE quiz_id = p_quiz_id AND student_id = v_sid AND status IN ('submitted','terminated_violation')
    ON CONFLICT (quiz_id, student_id) DO NOTHING;
  END LOOP;
END;
$$;
