-- Teacher-authored hints and three additional streak rewards:
--   teacher_hint: reveal the question's optional hint
--   retry_answer: unlock a previously correct, locked answer once
--   streak_guard: automatically preserve one streak after an incorrect answer

ALTER TABLE public.quiz_questions
  ADD COLUMN IF NOT EXISTS hint TEXT;
ALTER TABLE public.quiz_attempts
  ADD COLUMN IF NOT EXISTS revealed_hints JSONB NOT NULL DEFAULT '{}'::jsonb;

CREATE OR REPLACE FUNCTION public.prevent_quiz_attempt_tamper()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF current_setting('app.quiz_trusted_op', true) = 'on' THEN RETURN NEW; END IF;
  IF public.get_user_role() = 'admin' THEN RETURN NEW; END IF;
  IF NEW.status                       IS DISTINCT FROM OLD.status
  OR NEW.score_pct                     IS DISTINCT FROM OLD.score_pct
  OR NEW.violation_count               IS DISTINCT FROM OLD.violation_count
  OR NEW.submitted_at                  IS DISTINCT FROM OLD.submitted_at
  OR NEW.terminated_at                 IS DISTINCT FROM OLD.terminated_at
  OR NEW.unlocked_by_teacher_id        IS DISTINCT FROM OLD.unlocked_by_teacher_id
  OR NEW.unlocked_at                   IS DISTINCT FROM OLD.unlocked_at
  OR NEW.unlock_mode                   IS DISTINCT FROM OLD.unlock_mode
  OR NEW.question_order                IS DISTINCT FROM OLD.question_order
  OR NEW.choice_order                  IS DISTINCT FROM OLD.choice_order
  OR NEW.attempt_number                IS DISTINCT FROM OLD.attempt_number
  OR NEW.quiz_id                       IS DISTINCT FROM OLD.quiz_id
  OR NEW.student_id                    IS DISTINCT FROM OLD.student_id
  OR NEW.active_session_token          IS DISTINCT FROM OLD.active_session_token
  OR NEW.active_session_heartbeat_at   IS DISTINCT FROM OLD.active_session_heartbeat_at
  OR NEW.deadline_at                   IS DISTINCT FROM OLD.deadline_at
  OR NEW.current_streak                IS DISTINCT FROM OLD.current_streak
  OR NEW.bonus_inventory               IS DISTINCT FROM OLD.bonus_inventory
  OR NEW.eliminated_choices            IS DISTINCT FROM OLD.eliminated_choices
  OR NEW.unlocked_for_edit             IS DISTINCT FROM OLD.unlocked_for_edit
  OR NEW.answer_correctness            IS DISTINCT FROM OLD.answer_correctness
  OR NEW.revealed_hints                IS DISTINCT FROM OLD.revealed_hints
  THEN
    RAISE EXCEPTION 'Direct modification of protected quiz_attempts columns is not allowed';
  END IF;
  RETURN NEW;
END;
$$;

DROP FUNCTION public.get_quiz_attempt_questions(UUID);
CREATE FUNCTION public.get_quiz_attempt_questions(p_attempt_id UUID)
RETURNS TABLE (
  question_id UUID, question_text TEXT, hint TEXT, choices JSONB, choice_perm JSONB,
  is_correct BOOLEAN, correct_choice_index SMALLINT, explanation TEXT, hint_available BOOLEAN
) LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_attempt          public.quiz_attempts%ROWTYPE;
  v_quiz             public.quizzes%ROWTYPE;
  v_student_id       INTEGER;
  v_show_correctness BOOLEAN;
  v_show_answer_key  BOOLEAN;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id;
  IF NOT FOUND OR v_attempt.student_id <> v_student_id THEN
    RAISE EXCEPTION 'not your attempt';
  END IF;
  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_attempt.quiz_id;

  v_show_correctness := (v_attempt.status <> 'in_progress' AND v_quiz.review_policy IN ('per_question', 'full_review'));
  v_show_answer_key   := (v_attempt.status <> 'in_progress' AND v_quiz.review_policy = 'full_review');

  RETURN QUERY
  SELECT
    qq.id,
    qq.question_text,
    CASE WHEN v_attempt.revealed_hints ? qq.id::text THEN qq.hint ELSE NULL END,
    CASE WHEN v_attempt.choice_order ? qq.id::text THEN
      (SELECT jsonb_agg(qq.choices -> (perm.idx)::int ORDER BY perm.ord)
       FROM jsonb_array_elements_text(v_attempt.choice_order -> qq.id::text) WITH ORDINALITY AS perm(idx, ord))
    ELSE qq.choices END,
    CASE WHEN v_attempt.choice_order ? qq.id::text THEN v_attempt.choice_order -> qq.id::text ELSE NULL END,
    CASE WHEN v_show_correctness THEN
      (qq.correct_choice_index = (v_attempt.answers ->> qq.id::text)::int)
    ELSE NULL END,
    CASE WHEN v_show_answer_key THEN qq.correct_choice_index ELSE NULL END,
    CASE WHEN v_show_answer_key THEN qq.explanation ELSE NULL END,
    NULLIF(btrim(qq.hint), '') IS NOT NULL
  FROM jsonb_array_elements_text(v_attempt.question_order) WITH ORDINALITY AS qorder(qid, ord)
  JOIN public.quiz_questions qq ON qq.id = qorder.qid::uuid
  ORDER BY qorder.ord;
END;
$$;
REVOKE ALL ON FUNCTION public.get_quiz_attempt_questions(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_quiz_attempt_questions(UUID) TO authenticated;

CREATE OR REPLACE FUNCTION public.submit_quiz_answer(
  p_attempt_id UUID, p_session_token UUID, p_question_id UUID, p_chosen_index SMALLINT
) RETURNS TABLE(
  accepted BOOLEAN, is_correct BOOLEAN, current_streak SMALLINT,
  bonus_awarded TEXT[], bonus_inventory JSONB
) LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id     INTEGER;
  v_attempt        public.quiz_attempts%ROWTYPE;
  v_quiz           public.quizzes%ROWTYPE;
  v_correct_idx    SMALLINT;
  v_is_correct     BOOLEAN;
  v_prev_correct   BOOLEAN;
  v_was_reanswer   BOOLEAN;
  v_new_streak     SMALLINT;
  v_inventory      JSONB;
  v_awarded        TEXT[] := '{}';
  v_regular        TEXT;
  v_regular_pool   TEXT[];
  v_guard_count    INTEGER;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND OR v_attempt.student_id <> v_student_id THEN RAISE EXCEPTION 'not your attempt'; END IF;
  IF v_attempt.status <> 'in_progress' THEN
    RETURN QUERY SELECT false, NULL::boolean, v_attempt.current_streak, v_awarded, v_attempt.bonus_inventory; RETURN;
  END IF;
  IF v_attempt.active_session_token IS DISTINCT FROM p_session_token THEN
    RAISE EXCEPTION 'session_superseded';
  END IF;
  IF v_attempt.deadline_at IS NOT NULL AND now() > v_attempt.deadline_at THEN
    PERFORM public._finalize_quiz_attempt(p_attempt_id, 'submitted');
    RETURN QUERY SELECT false, NULL::boolean, v_attempt.current_streak, v_awarded, v_attempt.bonus_inventory; RETURN;
  END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_attempt.quiz_id;
  IF NOT (v_quiz.lock_on_answer OR v_quiz.instant_feedback_bonus) THEN
    RAISE EXCEPTION 'this quiz does not use per-answer submission';
  END IF;
  IF NOT (v_attempt.question_order @> to_jsonb(p_question_id::text)) THEN
    RAISE EXCEPTION 'question not in this attempt';
  END IF;
  v_was_reanswer := (v_attempt.unlocked_for_edit @> to_jsonb(p_question_id::text));
  v_prev_correct := (v_attempt.answer_correctness ->> p_question_id::text)::boolean;
  IF (v_attempt.answers ? p_question_id::text) AND NOT v_was_reanswer THEN
    RAISE EXCEPTION 'answer already locked';
  END IF;

  SELECT correct_choice_index INTO v_correct_idx FROM public.quiz_questions WHERE id = p_question_id;
  v_is_correct := (p_chosen_index = v_correct_idx);
  v_inventory := v_attempt.bonus_inventory;

  IF v_quiz.instant_feedback_bonus THEN
    IF v_is_correct THEN
      -- Reconfirming a previously correct answer does not inflate a streak.
      v_new_streak := CASE WHEN v_was_reanswer AND v_prev_correct THEN v_attempt.current_streak
                           ELSE v_attempt.current_streak + 1 END;
    ELSE
      -- One earned guard automatically absorbs one wrong answer.
      v_guard_count := COALESCE((v_inventory ->> 'streak_guard')::int, 0);
      IF v_guard_count > 0 THEN
        v_new_streak := v_attempt.current_streak;
        v_inventory := jsonb_set(v_inventory, ARRAY['streak_guard'], to_jsonb(v_guard_count - 1));
      ELSE
        v_new_streak := 0;
      END IF;
    END IF;

    IF v_is_correct AND (NOT v_was_reanswer OR v_prev_correct IS DISTINCT FROM true) AND v_new_streak % 3 = 0 THEN
      v_regular_pool := ARRAY['streak_guard'];
      IF v_quiz.time_limit_minutes IS NOT NULL THEN
        v_regular_pool := array_append(v_regular_pool, 'extra_time');
      END IF;
      IF EXISTS (
        SELECT 1 FROM jsonb_array_elements_text(v_attempt.question_order) qid
        JOIN public.quiz_questions qq ON qq.id = qid.value::uuid
        WHERE qid.value <> p_question_id::text
          AND NOT (v_attempt.answers ? qid.value)
          AND jsonb_array_length(qq.choices) >= 3
      ) THEN
        v_regular_pool := array_append(v_regular_pool, 'fifty_fifty');
      END IF;
      IF EXISTS (
        SELECT 1 FROM jsonb_each_text(v_attempt.answer_correctness) result
        WHERE result.value = 'false'
          AND NOT (v_attempt.unlocked_for_edit @> to_jsonb(result.key))
      ) THEN
        v_regular_pool := array_append(v_regular_pool, 'fix_wrong');
      END IF;
      IF EXISTS (
        SELECT 1 FROM jsonb_each_text(v_attempt.answer_correctness) result
        WHERE result.value = 'true'
          AND NOT (v_attempt.unlocked_for_edit @> to_jsonb(result.key))
      ) THEN
        v_regular_pool := array_append(v_regular_pool, 'retry_answer');
      END IF;
      IF EXISTS (
        SELECT 1 FROM jsonb_array_elements_text(v_attempt.question_order) qid
        JOIN public.quiz_questions qq ON qq.id = qid.value::uuid
        WHERE qid.value <> p_question_id::text
          AND NOT (v_attempt.answers ? qid.value)
          AND NULLIF(btrim(qq.hint), '') IS NOT NULL
      ) THEN
        v_regular_pool := array_append(v_regular_pool, 'teacher_hint');
      END IF;
      v_regular := v_regular_pool[floor(random() * array_length(v_regular_pool, 1) + 1)];
      v_inventory := jsonb_set(v_inventory, ARRAY[v_regular], to_jsonb(COALESCE((v_inventory->>v_regular)::int, 0) + 1));
      v_awarded := array_append(v_awarded, v_regular);
    END IF;
    IF v_is_correct AND (NOT v_was_reanswer OR v_prev_correct IS DISTINCT FROM true)
       AND v_new_streak % 6 = 0
       AND EXISTS (
         SELECT 1 FROM jsonb_array_elements_text(v_attempt.question_order) qid
         WHERE qid.value <> p_question_id::text AND NOT (v_attempt.answers ? qid.value)
       ) THEN
      v_inventory := jsonb_set(v_inventory, ARRAY['reveal_answer'], to_jsonb(COALESCE((v_inventory->>'reveal_answer')::int, 0) + 1));
      v_awarded := array_append(v_awarded, 'reveal_answer');
    END IF;
  ELSE
    v_new_streak := v_attempt.current_streak;
  END IF;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);
  UPDATE public.quiz_attempts SET
    answers = answers || jsonb_build_object(p_question_id::text, p_chosen_index),
    answer_correctness = answer_correctness || jsonb_build_object(p_question_id::text, v_is_correct),
    unlocked_for_edit = COALESCE((SELECT jsonb_agg(x) FROM jsonb_array_elements(v_attempt.unlocked_for_edit) x
                                    WHERE x <> to_jsonb(p_question_id::text)), '[]'::jsonb),
    current_streak = v_new_streak,
    bonus_inventory = v_inventory
  WHERE id = p_attempt_id;

  RETURN QUERY SELECT true, (CASE WHEN v_quiz.instant_feedback_bonus THEN v_is_correct ELSE NULL END), v_new_streak, v_awarded, v_inventory;
END;
$$;

CREATE OR REPLACE FUNCTION public.use_quiz_bonus(
  p_attempt_id UUID, p_session_token UUID, p_bonus_type TEXT, p_question_id UUID DEFAULT NULL
) RETURNS TABLE(
  ok BOOLEAN, message TEXT, bonus_inventory JSONB,
  eliminated_indices SMALLINT[], new_time_remaining_sec INTEGER, revealed_index SMALLINT
) LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id  INTEGER;
  v_attempt     public.quiz_attempts%ROWTYPE;
  v_quiz        public.quizzes%ROWTYPE;
  v_have        INTEGER;
  v_choices     JSONB;
  v_correct_idx SMALLINT;
  v_wrong_idx   SMALLINT[];
  v_elim        SMALLINT[];
  v_inventory   JSONB;
  v_hint        TEXT;
BEGIN
  IF p_bonus_type NOT IN ('fifty_fifty','fix_wrong','extra_time','reveal_answer','teacher_hint','retry_answer','streak_guard') THEN
    RAISE EXCEPTION 'invalid bonus type';
  END IF;
  IF p_bonus_type = 'streak_guard' THEN
    RETURN QUERY SELECT false, 'เกราะรักษาสตรีคทำงานอัตโนมัติเมื่อจำเป็น', NULL::jsonb, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
  END IF;

  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND OR v_attempt.student_id <> v_student_id THEN RAISE EXCEPTION 'not your attempt'; END IF;
  IF v_attempt.status <> 'in_progress' THEN
    RETURN QUERY SELECT false, 'attempt is not in progress', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
  END IF;
  IF v_attempt.active_session_token IS DISTINCT FROM p_session_token THEN RAISE EXCEPTION 'session_superseded'; END IF;
  IF v_attempt.deadline_at IS NOT NULL AND now() > v_attempt.deadline_at THEN
    PERFORM public._finalize_quiz_attempt(p_attempt_id, 'submitted');
    RETURN QUERY SELECT false, 'time is up', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
  END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_attempt.quiz_id;
  IF NOT v_quiz.instant_feedback_bonus THEN RAISE EXCEPTION 'this quiz has no bonus system'; END IF;
  v_have := COALESCE((v_attempt.bonus_inventory ->> p_bonus_type)::int, 0);
  IF v_have < 1 THEN
    RETURN QUERY SELECT false, 'no charge available', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
  END IF;

  IF p_bonus_type IN ('fifty_fifty','reveal_answer','teacher_hint','retry_answer','fix_wrong') THEN
    IF p_question_id IS NULL OR NOT (v_attempt.question_order @> to_jsonb(p_question_id::text)) THEN
      RAISE EXCEPTION 'invalid question';
    END IF;
  END IF;

  IF p_bonus_type = 'fifty_fifty' THEN
    IF v_attempt.answers ? p_question_id::text THEN
      RETURN QUERY SELECT false, 'ข้อนี้ตอบไปแล้ว', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    IF v_attempt.eliminated_choices ? p_question_id::text THEN
      RETURN QUERY SELECT false, 'ใช้ 50/50 กับข้อนี้ไปแล้ว', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    SELECT choices, correct_choice_index INTO v_choices, v_correct_idx FROM public.quiz_questions WHERE id = p_question_id;
    IF jsonb_array_length(v_choices) < 3 THEN
      RETURN QUERY SELECT false, 'ข้อนี้มีตัวเลือกน้อยเกินไปสำหรับ 50/50', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    SELECT array_agg(x ORDER BY random()) INTO v_wrong_idx
      FROM generate_series(0, jsonb_array_length(v_choices) - 1) x WHERE x <> v_correct_idx;
    v_elim := v_wrong_idx[1:LEAST(2, array_length(v_wrong_idx,1) - 1)];
    v_inventory := jsonb_set(v_attempt.bonus_inventory, ARRAY[p_bonus_type], to_jsonb(v_have - 1));
    PERFORM set_config('app.quiz_trusted_op', 'on', true);
    UPDATE public.quiz_attempts SET bonus_inventory = v_inventory,
      eliminated_choices = eliminated_choices || jsonb_build_object(p_question_id::text, to_jsonb(v_elim))
    WHERE id = p_attempt_id;
    RETURN QUERY SELECT true, 'ok', v_inventory, v_elim, NULL::int, NULL::smallint; RETURN;

  ELSIF p_bonus_type = 'fix_wrong' THEN
    IF (v_attempt.answer_correctness ->> p_question_id::text) IS DISTINCT FROM 'false'
       OR v_attempt.unlocked_for_edit @> to_jsonb(p_question_id::text) THEN
      RETURN QUERY SELECT false, 'ใช้ได้เฉพาะข้อที่เคยตอบผิดแล้วเท่านั้น', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    v_inventory := jsonb_set(v_attempt.bonus_inventory, ARRAY[p_bonus_type], to_jsonb(v_have - 1));
    PERFORM set_config('app.quiz_trusted_op', 'on', true);
    UPDATE public.quiz_attempts SET bonus_inventory = v_inventory,
      unlocked_for_edit = unlocked_for_edit || to_jsonb(p_question_id::text)
    WHERE id = p_attempt_id;
    RETURN QUERY SELECT true, 'ok', v_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;

  ELSIF p_bonus_type = 'retry_answer' THEN
    IF (v_attempt.answer_correctness ->> p_question_id::text) IS DISTINCT FROM 'true'
       OR v_attempt.unlocked_for_edit @> to_jsonb(p_question_id::text) THEN
      RETURN QUERY SELECT false, 'โบนัสนี้ใช้ได้กับข้อที่ตอบถูกและยังไม่เคยปลดล็อกเท่านั้น', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    v_inventory := jsonb_set(v_attempt.bonus_inventory, ARRAY[p_bonus_type], to_jsonb(v_have - 1));
    PERFORM set_config('app.quiz_trusted_op', 'on', true);
    UPDATE public.quiz_attempts SET bonus_inventory = v_inventory,
      unlocked_for_edit = unlocked_for_edit || to_jsonb(p_question_id::text)
    WHERE id = p_attempt_id;
    RETURN QUERY SELECT true, 'ok', v_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;

  ELSIF p_bonus_type = 'teacher_hint' THEN
    IF v_attempt.answers ? p_question_id::text THEN
      RETURN QUERY SELECT false, 'ใช้คำใบ้ได้ก่อนตอบข้อนี้เท่านั้น', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    SELECT hint INTO v_hint FROM public.quiz_questions WHERE id = p_question_id AND NULLIF(btrim(hint), '') IS NOT NULL;
    IF v_hint IS NULL THEN
      RETURN QUERY SELECT false, 'ข้อนี้ไม่มีคำใบ้จากครู', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    v_inventory := jsonb_set(v_attempt.bonus_inventory, ARRAY[p_bonus_type], to_jsonb(v_have - 1));
    PERFORM set_config('app.quiz_trusted_op', 'on', true);
    UPDATE public.quiz_attempts SET bonus_inventory = v_inventory,
      revealed_hints = revealed_hints || jsonb_build_object(p_question_id::text, true)
    WHERE id = p_attempt_id;
    RETURN QUERY SELECT true, v_hint, v_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;

  ELSIF p_bonus_type = 'extra_time' THEN
    IF v_quiz.time_limit_minutes IS NULL THEN
      RETURN QUERY SELECT false, 'แบบทดสอบนี้ไม่จำกัดเวลา', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    v_inventory := jsonb_set(v_attempt.bonus_inventory, ARRAY[p_bonus_type], to_jsonb(v_have - 1));
    PERFORM set_config('app.quiz_trusted_op', 'on', true);
    UPDATE public.quiz_attempts SET time_remaining_sec = COALESCE(time_remaining_sec, 0) + 30,
      deadline_at = COALESCE(deadline_at, now()) + interval '30 seconds', bonus_inventory = v_inventory
    WHERE id = p_attempt_id RETURNING time_remaining_sec INTO new_time_remaining_sec;
    RETURN QUERY SELECT true, 'ok', v_inventory, NULL::smallint[], new_time_remaining_sec, NULL::smallint; RETURN;

  ELSIF p_bonus_type = 'reveal_answer' THEN
    IF v_attempt.answers ? p_question_id::text THEN
      RETURN QUERY SELECT false, 'ข้อนี้ตอบไปแล้ว', v_attempt.bonus_inventory, NULL::smallint[], NULL::int, NULL::smallint; RETURN;
    END IF;
    SELECT correct_choice_index INTO v_correct_idx FROM public.quiz_questions WHERE id = p_question_id;
    v_inventory := jsonb_set(v_attempt.bonus_inventory, ARRAY[p_bonus_type], to_jsonb(v_have - 1));
    PERFORM set_config('app.quiz_trusted_op', 'on', true);
    UPDATE public.quiz_attempts SET bonus_inventory = v_inventory,
      answers = answers || jsonb_build_object(p_question_id::text, v_correct_idx),
      answer_correctness = answer_correctness || jsonb_build_object(p_question_id::text, true)
    WHERE id = p_attempt_id;
    RETURN QUERY SELECT true, 'ok', v_inventory, NULL::smallint[], NULL::int, v_correct_idx; RETURN;
  END IF;
END;
$$;

REVOKE ALL ON FUNCTION public.submit_quiz_answer(UUID, UUID, UUID, SMALLINT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.submit_quiz_answer(UUID, UUID, UUID, SMALLINT) TO authenticated;
REVOKE ALL ON FUNCTION public.use_quiz_bonus(UUID, UUID, TEXT, UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.use_quiz_bonus(UUID, UUID, TEXT, UUID) TO authenticated;
