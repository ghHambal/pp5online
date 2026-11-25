-- Per-student makeup access for quizzes that have already been closed.
-- Eligibility and time-window checks are enforced in start_quiz_attempt so
-- changing client state cannot reopen an exam to the whole class.

CREATE TABLE public.quiz_makeup_access (
  quiz_id UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  opened_by_teacher_id INTEGER NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  opened_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  closes_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (quiz_id, student_id),
  CONSTRAINT quiz_makeup_access_window_check CHECK (closes_at > opened_at)
);

CREATE INDEX quiz_makeup_access_student_window_idx
  ON public.quiz_makeup_access (student_id, closes_at);

ALTER TABLE public.quiz_makeup_access ENABLE ROW LEVEL SECURITY;

CREATE POLICY quiz_makeup_access_student_select_own
  ON public.quiz_makeup_access FOR SELECT TO authenticated
  USING (student_id IN (SELECT s.id FROM public.students s WHERE s.profile_id = auth.uid()));

CREATE POLICY quiz_makeup_access_teacher_select_own
  ON public.quiz_makeup_access FOR SELECT TO authenticated
  USING (quiz_id IN (
    SELECT q.id
    FROM public.quizzes q
    JOIN public.classes c ON c.id = q.class_id
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  ));

REVOKE ALL ON public.quiz_makeup_access FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.quiz_makeup_access TO authenticated;

CREATE OR REPLACE FUNCTION public.teacher_open_quiz_makeup(
  p_quiz_id UUID,
  p_student_ids INTEGER[],
  p_closes_at TIMESTAMPTZ
)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_teacher_id INTEGER;
  v_quiz_class_id INTEGER;
  v_student_ids INTEGER[];
  v_student_id INTEGER;
BEGIN
  SELECT t.id, q.class_id
    INTO v_teacher_id, v_quiz_class_id
  FROM public.quizzes q
  JOIN public.classes c ON c.id = q.class_id
  JOIN public.master_subjects ms ON ms.id = c.course_id
  JOIN public.teachers t ON t.id = ms.teacher_id
  WHERE q.id = p_quiz_id AND t.profile_id = auth.uid() AND q.status = 'closed';

  IF v_teacher_id IS NULL THEN
    RAISE EXCEPTION 'แบบทดสอบนี้ปิดสอบแล้วหรือไม่ใช่แบบทดสอบของคุณ';
  END IF;
  IF p_closes_at IS NULL OR p_closes_at <= now() THEN
    RAISE EXCEPTION 'เวลาปิดสอบชดเชยต้องอยู่หลังเวลาปัจจุบัน';
  END IF;
  IF p_student_ids IS NULL THEN
    RAISE EXCEPTION 'กรุณาเลือกนักเรียนอย่างน้อย 1 คน';
  END IF;

  SELECT array_agg(DISTINCT ids.student_id ORDER BY ids.student_id)
    INTO v_student_ids
  FROM unnest(p_student_ids) AS ids(student_id)
  WHERE ids.student_id IS NOT NULL;

  IF COALESCE(cardinality(v_student_ids), 0) = 0 OR cardinality(v_student_ids) > 500 THEN
    RAISE EXCEPTION 'รายชื่อนักเรียนไม่ถูกต้อง (เลือกได้ 1 ถึง 500 คน)';
  END IF;

  FOREACH v_student_id IN ARRAY v_student_ids LOOP
    IF NOT EXISTS (
      SELECT 1 FROM public.class_students cs
      WHERE cs.class_id = v_quiz_class_id AND cs.student_id = v_student_id AND cs.is_active IS DISTINCT FROM false
    ) THEN
      RAISE EXCEPTION 'มีนักเรียนที่ไม่ได้อยู่ในห้องของแบบทดสอบ';
    END IF;
    IF EXISTS (
      SELECT 1 FROM public.quiz_attempts qa
      WHERE qa.quiz_id = p_quiz_id AND qa.student_id = v_student_id
    ) THEN
      RAISE EXCEPTION 'เลือกได้เฉพาะนักเรียนที่ยังไม่เคยเริ่มทำแบบทดสอบ';
    END IF;
  END LOOP;

  INSERT INTO public.quiz_makeup_access (quiz_id, student_id, opened_by_teacher_id, opened_at, closes_at)
  SELECT p_quiz_id, ids.student_id, v_teacher_id, now(), p_closes_at
  FROM unnest(v_student_ids) AS ids(student_id)
  ON CONFLICT (quiz_id, student_id) DO UPDATE
    SET opened_by_teacher_id = EXCLUDED.opened_by_teacher_id,
        opened_at = EXCLUDED.opened_at,
        closes_at = EXCLUDED.closes_at;

  RETURN cardinality(v_student_ids);
END;
$$;

REVOKE ALL ON FUNCTION public.teacher_open_quiz_makeup(UUID, INTEGER[], TIMESTAMPTZ) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.teacher_open_quiz_makeup(UUID, INTEGER[], TIMESTAMPTZ) TO authenticated;

CREATE OR REPLACE FUNCTION public.start_quiz_attempt(p_quiz_id UUID)
RETURNS public.quiz_attempts
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_student_id INTEGER;
  v_quiz public.quizzes%ROWTYPE;
  v_last public.quiz_attempts%ROWTYPE;
  v_makeup public.quiz_makeup_access%ROWTYPE;
  v_has_makeup_access BOOLEAN := false;
  v_attempt_no INTEGER;
  v_question_ids JSONB;
  v_choice_order JSONB := '{}'::jsonb;
  v_qid UUID;
  v_nchoices INTEGER;
  v_new public.quiz_attempts%ROWTYPE;
BEGIN
  SELECT s.id INTO v_student_id FROM public.students s WHERE s.profile_id = auth.uid();
  IF v_student_id IS NULL THEN RAISE EXCEPTION 'not a student'; END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = p_quiz_id;
  IF NOT FOUND THEN RAISE EXCEPTION 'quiz not found'; END IF;

  SELECT * INTO v_makeup FROM public.quiz_makeup_access
  WHERE quiz_id = p_quiz_id AND student_id = v_student_id;
  v_has_makeup_access := FOUND;

  SELECT * INTO v_last FROM public.quiz_attempts
  WHERE quiz_id = p_quiz_id AND student_id = v_student_id
  ORDER BY attempt_number DESC LIMIT 1;

  IF v_quiz.status = 'started' THEN
    IF v_quiz.open_at IS NOT NULL AND now() < v_quiz.open_at THEN
      RAISE EXCEPTION 'quiz has not opened yet';
    END IF;
    IF v_quiz.close_at IS NOT NULL AND now() > v_quiz.close_at THEN
      RAISE EXCEPTION 'quiz is closed';
    END IF;
  ELSIF v_quiz.status = 'closed' THEN
    IF NOT v_has_makeup_access THEN RAISE EXCEPTION 'ไม่มีสิทธิ์สอบชดเชยแบบทดสอบนี้'; END IF;
    -- A student who started before the window closed may resume that attempt,
    -- but cannot create another attempt after the makeup window expires.
    IF v_last.status IS DISTINCT FROM 'in_progress'
       AND (now() < v_makeup.opened_at OR now() > v_makeup.closes_at) THEN
      RAISE EXCEPTION 'หมดเวลาสอบชดเชยแล้ว';
    END IF;
  ELSE
    RAISE EXCEPTION 'quiz is not open yet';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.quiz_student_finalizations
    WHERE quiz_id = p_quiz_id AND student_id = v_student_id
  ) THEN
    RAISE EXCEPTION 'finalized: student already confirmed final score';
  END IF;

  IF v_last.id IS NOT NULL THEN
    IF v_last.status = 'terminated_violation' THEN
      RAISE EXCEPTION 'locked: contact your teacher to continue';
    END IF;
    IF v_last.status = 'in_progress' THEN RETURN v_last; END IF;
    IF (SELECT count(*) FROM public.quiz_attempts
        WHERE quiz_id = p_quiz_id AND student_id = v_student_id) >= v_quiz.max_attempts THEN
      RAISE EXCEPTION 'no attempts remaining';
    END IF;
    v_attempt_no := v_last.attempt_number + 1;
  ELSE
    v_attempt_no := 1;
  END IF;

  SELECT jsonb_agg(to_jsonb(sub.qid)) INTO v_question_ids FROM (
    SELECT qq.id AS qid FROM public.quiz_questions qq
    WHERE qq.bank_id = v_quiz.bank_id
    ORDER BY CASE WHEN v_quiz.shuffle_questions THEN random() ELSE NULL END, qq.sort_order
    LIMIT v_quiz.num_questions
  ) sub;

  IF v_question_ids IS NULL OR jsonb_array_length(v_question_ids) < v_quiz.num_questions THEN
    RAISE EXCEPTION 'question bank does not have enough questions';
  END IF;

  IF v_quiz.shuffle_choices THEN
    FOR v_qid IN SELECT jsonb_array_elements_text(v_question_ids)::uuid LOOP
      SELECT jsonb_array_length(qq.choices) INTO v_nchoices FROM public.quiz_questions qq WHERE qq.id = v_qid;
      v_choice_order := v_choice_order || jsonb_build_object(v_qid::text,
        (SELECT jsonb_agg(x) FROM (SELECT generate_series(0, v_nchoices - 1) x ORDER BY random()) s));
    END LOOP;
  END IF;

  INSERT INTO public.quiz_attempts (
    quiz_id, student_id, attempt_number, question_order, choice_order, time_remaining_sec, deadline_at
  ) VALUES (
    p_quiz_id, v_student_id, v_attempt_no, v_question_ids, NULLIF(v_choice_order, '{}'::jsonb),
    v_quiz.time_limit_minutes * 60,
    CASE WHEN v_quiz.time_limit_minutes IS NOT NULL
      THEN now() + (v_quiz.time_limit_minutes * interval '1 minute') ELSE NULL END
  ) RETURNING * INTO v_new;

  RETURN v_new;
END;
$$;

REVOKE ALL ON FUNCTION public.start_quiz_attempt(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.start_quiz_attempt(UUID) TO authenticated;
