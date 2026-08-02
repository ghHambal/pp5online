-- patch_quiz_score_write_mode.sql
-- ให้ครูเลือกได้ว่าตอนควิซเขียนคะแนนเข้าคอลัมน์คะแนนที่ผูกไว้ จะ "บวกเพิ่ม/ทับ/เทียบเอาสูงกว่า"
-- กับคะแนนที่มีอยู่เดิมในคอลัมน์นั้น (เดิม hardcode เป็น "เทียบเอาสูงกว่า" เสมอ)
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.quizzes
  ADD COLUMN IF NOT EXISTS score_write_mode TEXT NOT NULL DEFAULT 'highest'
    CHECK (score_write_mode IN ('add', 'overwrite', 'highest'));

CREATE OR REPLACE FUNCTION public._finalize_quiz_attempt(p_attempt_id UUID, p_new_status TEXT)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_attempt       public.quiz_attempts%ROWTYPE;
  v_quiz          public.quizzes%ROWTYPE;
  v_total         INTEGER;
  v_correct       INTEGER;
  v_score_pct     NUMERIC(5,2);
  v_effective_pct NUMERIC(5,2);
  v_converted     NUMERIC(5,2);
  v_add_converted NUMERIC(5,2);
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

  -- Write into the existing gradebook if this quiz is linked to a score column
  IF v_quiz.score_column_id IS NOT NULL THEN
    SELECT
      CASE v_quiz.attempt_scoring_mode
        WHEN 'highest' THEN (SELECT max(score_pct) FROM public.quiz_attempts
                              WHERE quiz_id = v_quiz.id AND student_id = v_attempt.student_id
                                AND status IN ('submitted','terminated_violation'))
        WHEN 'first'   THEN (SELECT score_pct FROM public.quiz_attempts
                              WHERE quiz_id = v_quiz.id AND student_id = v_attempt.student_id
                                AND status IN ('submitted','terminated_violation')
                              ORDER BY coalesce(submitted_at, terminated_at) ASC LIMIT 1)
        ELSE                (SELECT score_pct FROM public.quiz_attempts
                              WHERE quiz_id = v_quiz.id AND student_id = v_attempt.student_id
                                AND status IN ('submitted','terminated_violation')
                              ORDER BY coalesce(submitted_at, terminated_at) DESC LIMIT 1)
      END
    INTO v_effective_pct;

    v_converted := round(coalesce(v_effective_pct, 0) / 100 * coalesce(v_quiz.score_max, 100), 2);

    -- โหมด "บวกเพิ่ม" ใช้คะแนนของ "ครั้งนี้ครั้งเดียว" (v_score_pct) ไม่ใช่ค่าที่รวม/เทียบ
    -- ข้ามทุกครั้งตาม attempt_scoring_mode (v_effective_pct) — กันบวกซ้ำซ้อนเวลาควิซเดียวกัน
    -- ทำได้หลายครั้ง (max_attempts > 1): แต่ละครั้งที่จบ ก็บวกคะแนนของครั้งนั้นเข้าไปแค่ครั้งเดียว
    v_add_converted := round(v_score_pct / 100 * coalesce(v_quiz.score_max, 100), 2);

    -- score_write_mode ควบคุมว่าคะแนนที่แปลงแล้วนี้ จะ "บวกเพิ่ม/ทับ/เทียบเอาสูงกว่า"
    -- กับคะแนนที่มีอยู่เดิมในคอลัมน์นั้น (อาจมาจากครูกรอกมือ หรือกิจกรรมอื่นที่ผูกคอลัมน์เดียวกัน)
    INSERT INTO public.student_scores (assignment_id, student_id, original_score, final_score)
    VALUES (v_quiz.score_column_id, v_attempt.student_id,
            CASE WHEN v_quiz.score_write_mode = 'add' THEN v_add_converted ELSE v_converted END,
            CASE WHEN v_quiz.score_write_mode = 'add' THEN v_add_converted ELSE v_converted END)
    ON CONFLICT (assignment_id, student_id)
    DO UPDATE SET
      original_score = CASE v_quiz.score_write_mode
        WHEN 'add'       THEN COALESCE(public.student_scores.original_score, 0) + EXCLUDED.original_score
        WHEN 'overwrite' THEN EXCLUDED.original_score
        ELSE                  GREATEST(COALESCE(public.student_scores.original_score, 0), EXCLUDED.original_score)
      END,
      final_score = CASE v_quiz.score_write_mode
        WHEN 'add'       THEN COALESCE(public.student_scores.final_score, 0) + EXCLUDED.final_score
        WHEN 'overwrite' THEN EXCLUDED.final_score
        ELSE                  GREATEST(COALESCE(public.student_scores.final_score, 0), EXCLUDED.final_score)
      END;
  END IF;
END;
$$;
REVOKE ALL ON FUNCTION public._finalize_quiz_attempt(UUID, TEXT) FROM PUBLIC, anon, authenticated;
