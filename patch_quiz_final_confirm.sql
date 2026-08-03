-- patch_quiz_final_confirm.sql
-- ให้นักเรียนกด "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย" ได้เอง ไม่ว่าจะใช้สิทธิ์ครบ
-- หรือยังเหลือสิทธิ์อยู่ก็ตาม — หลังกดแล้วจะ start_quiz_attempt ซ้ำไม่ได้อีก
-- (คะแนนที่เขียนเข้าสมุดคะแนนใช้ path เดิมของ _finalize_quiz_attempt อยู่แล้ว
-- ตารางนี้แค่บันทึก "การตัดสินใจจบของนักเรียน" แยกต่างหาก ไม่ยุ่งกับคะแนน)

CREATE TABLE IF NOT EXISTS public.quiz_student_finalizations (
  quiz_id                   UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  student_id                INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  confirmed_at              TIMESTAMPTZ NOT NULL DEFAULT now(),
  attempt_count_at_confirm  INTEGER NOT NULL,
  PRIMARY KEY (quiz_id, student_id)
);

ALTER TABLE public.quiz_student_finalizations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "qsf_student_read_own" ON public.quiz_student_finalizations;
CREATE POLICY "qsf_student_read_own"
ON public.quiz_student_finalizations
FOR SELECT TO authenticated
USING (
  student_id IN (SELECT id FROM public.students WHERE profile_id = auth.uid())
  OR EXISTS (
    SELECT 1 FROM public.quizzes q WHERE q.id = quiz_student_finalizations.quiz_id
      AND public.has_class_access(q.class_id)
  )
  OR public.get_user_role() = 'admin'
);
-- ไม่มี policy สำหรับ INSERT/UPDATE/DELETE โดยตรง — เขียนได้ทาง RPC
-- confirm_quiz_final() (SECURITY DEFINER) เท่านั้น

-- confirm_quiz_final: นักเรียนกดเองเพื่อ "จบ" การสอบวิชานี้ถาวร ไม่ว่าจะยัง
-- เหลือสิทธิ์สอบซ้ำหรือไม่ก็ตาม ต้องเคยส่งคำตอบไปแล้วอย่างน้อย 1 ครั้ง และ
-- ต้องไม่มีรอบที่กำลังทำค้างอยู่ (ต้องส่งคำตอบให้จบก่อน ถึงจะยืนยันได้)
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
END;
$$;
REVOKE ALL ON FUNCTION public.confirm_quiz_final(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.confirm_quiz_final(UUID) TO authenticated;

-- start_quiz_attempt: กันไม่ให้เริ่มรอบใหม่ได้อีกถ้านักเรียนกดยืนยันจบแล้ว
CREATE OR REPLACE FUNCTION public.start_quiz_attempt(p_quiz_id UUID)
RETURNS public.quiz_attempts LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id   INTEGER;
  v_quiz         public.quizzes%ROWTYPE;
  v_last         public.quiz_attempts%ROWTYPE;
  v_attempt_no   INTEGER;
  v_question_ids JSONB;
  v_choice_order JSONB := '{}'::jsonb;
  v_qid          UUID;
  v_nchoices     INTEGER;
  v_new          public.quiz_attempts%ROWTYPE;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  IF v_student_id IS NULL THEN RAISE EXCEPTION 'not a student'; END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = p_quiz_id;
  IF NOT FOUND THEN RAISE EXCEPTION 'quiz not found'; END IF;
  IF v_quiz.status <> 'started' THEN RAISE EXCEPTION 'quiz is not open yet'; END IF;
  IF v_quiz.open_at IS NOT NULL AND now() < v_quiz.open_at THEN
    RAISE EXCEPTION 'quiz has not opened yet';
  END IF;
  IF v_quiz.close_at IS NOT NULL AND now() > v_quiz.close_at THEN
    RAISE EXCEPTION 'quiz is closed';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.quiz_student_finalizations
    WHERE quiz_id = p_quiz_id AND student_id = v_student_id
  ) THEN
    RAISE EXCEPTION 'finalized: student already confirmed final score';
  END IF;

  SELECT * INTO v_last FROM public.quiz_attempts
    WHERE quiz_id = p_quiz_id AND student_id = v_student_id
    ORDER BY attempt_number DESC LIMIT 1;

  IF FOUND THEN
    IF v_last.status = 'terminated_violation' THEN
      RAISE EXCEPTION 'locked: contact your teacher to continue';
    END IF;
    IF v_last.status = 'in_progress' THEN
      RETURN v_last; -- resume-on-refresh, no duplicate attempt
    END IF;
    IF (SELECT count(*) FROM public.quiz_attempts
        WHERE quiz_id = p_quiz_id AND student_id = v_student_id) >= v_quiz.max_attempts THEN
      RAISE EXCEPTION 'no attempts remaining';
    END IF;
    v_attempt_no := v_last.attempt_number + 1;
  ELSE
    v_attempt_no := 1;
  END IF;

  SELECT jsonb_agg(to_jsonb(qid)) INTO v_question_ids FROM (
    SELECT id AS qid FROM public.quiz_questions WHERE bank_id = v_quiz.bank_id
    ORDER BY CASE WHEN v_quiz.shuffle_questions THEN random() ELSE NULL END,
             sort_order
    LIMIT v_quiz.num_questions
  ) sub;

  IF v_question_ids IS NULL OR jsonb_array_length(v_question_ids) < v_quiz.num_questions THEN
    RAISE EXCEPTION 'question bank does not have enough questions';
  END IF;

  IF v_quiz.shuffle_choices THEN
    FOR v_qid IN SELECT jsonb_array_elements_text(v_question_ids)::uuid LOOP
      SELECT jsonb_array_length(choices) INTO v_nchoices FROM public.quiz_questions WHERE id = v_qid;
      v_choice_order := v_choice_order || jsonb_build_object(v_qid::text,
        (SELECT jsonb_agg(x) FROM (SELECT generate_series(0, v_nchoices - 1) x ORDER BY random()) s));
    END LOOP;
  END IF;

  INSERT INTO public.quiz_attempts (quiz_id, student_id, attempt_number, question_order, choice_order, time_remaining_sec, deadline_at)
  VALUES (p_quiz_id, v_student_id, v_attempt_no, v_question_ids, NULLIF(v_choice_order, '{}'::jsonb),
          v_quiz.time_limit_minutes * 60,
          CASE WHEN v_quiz.time_limit_minutes IS NOT NULL THEN now() + (v_quiz.time_limit_minutes * interval '1 minute') ELSE NULL END)
  RETURNING * INTO v_new;

  RETURN v_new;
END;
$$;
