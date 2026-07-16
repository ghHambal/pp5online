-- =====================================================================
-- patch_quiz_system.sql
-- Online Quiz System (Phase 1 MVP) — schema, RLS, tamper-guard trigger,
-- and SECURITY DEFINER RPC functions.
-- Run once in Supabase SQL Editor (or via mcp apply_migration).
-- =====================================================================

-- ─────────────────────────── 1. TABLES ────────────────────────────────

CREATE TABLE IF NOT EXISTS public.quiz_banks (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id   INTEGER NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  subject_id   INTEGER REFERENCES public.master_subjects(id) ON DELETE SET NULL,
  name         TEXT NOT NULL,
  description  TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bank_id               UUID NOT NULL REFERENCES public.quiz_banks(id) ON DELETE CASCADE,
  question_text         TEXT NOT NULL,
  choices               JSONB NOT NULL,
  correct_choice_index  SMALLINT NOT NULL,
  explanation           TEXT,
  difficulty            TEXT CHECK (difficulty IN ('ง่าย','ปานกลาง','ยาก')),
  category              TEXT,
  sort_order            INTEGER NOT NULL DEFAULT 0,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT quiz_questions_choices_len CHECK (jsonb_array_length(choices) BETWEEN 2 AND 5),
  CONSTRAINT quiz_questions_correct_idx CHECK (correct_choice_index >= 0 AND correct_choice_index < jsonb_array_length(choices))
);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_bank ON public.quiz_questions(bank_id);

CREATE TABLE IF NOT EXISTS public.quizzes (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bank_id               UUID NOT NULL REFERENCES public.quiz_banks(id),
  class_id              INTEGER NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  title                 TEXT NOT NULL,
  num_questions         INTEGER NOT NULL CHECK (num_questions > 0),
  shuffle_questions     BOOLEAN NOT NULL DEFAULT true,
  shuffle_choices       BOOLEAN NOT NULL DEFAULT true,
  max_attempts          INTEGER NOT NULL DEFAULT 1 CHECK (max_attempts > 0),
  attempt_scoring_mode  TEXT NOT NULL DEFAULT 'last' CHECK (attempt_scoring_mode IN ('first','last','highest')),
  time_limit_minutes    INTEGER CHECK (time_limit_minutes > 0),
  open_at               TIMESTAMPTZ,
  close_at              TIMESTAMPTZ,
  review_policy         TEXT NOT NULL DEFAULT 'total_only' CHECK (review_policy IN ('total_only','per_question','full_review')),
  score_column_id       INTEGER REFERENCES public.class_score_columns(id) ON DELETE SET NULL,
  score_max             NUMERIC(5,2),
  status                TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','announced','started','closed')),
  started_at            TIMESTAMPTZ,
  closed_at             TIMESTAMPTZ,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_quizzes_class ON public.quizzes(class_id);
CREATE INDEX IF NOT EXISTS idx_quizzes_bank  ON public.quizzes(bank_id);

CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id                     UUID NOT NULL REFERENCES public.quizzes(id) ON DELETE CASCADE,
  student_id                  INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  attempt_number              INTEGER NOT NULL,
  question_order              JSONB NOT NULL,
  choice_order                JSONB,
  answers                     JSONB NOT NULL DEFAULT '{}'::jsonb,
  status                      TEXT NOT NULL DEFAULT 'in_progress' CHECK (status IN ('in_progress','submitted','terminated_violation')),
  score_pct                   NUMERIC(5,2),
  started_at                  TIMESTAMPTZ NOT NULL DEFAULT now(),
  submitted_at                TIMESTAMPTZ,
  time_remaining_sec          INTEGER,
  deadline_at                 TIMESTAMPTZ, -- server-computed absolute deadline; independent backstop against a client that stalls its own timer
  violation_count             SMALLINT NOT NULL DEFAULT 0,
  terminated_at               TIMESTAMPTZ,
  unlocked_by_teacher_id      INTEGER REFERENCES public.teachers(id) ON DELETE SET NULL,
  unlocked_at                 TIMESTAMPTZ,
  unlock_mode                 TEXT CHECK (unlock_mode IN ('resume','restart')),
  active_session_token        UUID,
  active_session_heartbeat_at TIMESTAMPTZ,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (quiz_id, student_id, attempt_number)
);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz    ON public.quiz_attempts(quiz_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_student ON public.quiz_attempts(student_id);

CREATE TABLE IF NOT EXISTS public.quiz_attempt_violations (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  attempt_id       UUID NOT NULL REFERENCES public.quiz_attempts(id) ON DELETE CASCADE,
  violation_number SMALLINT NOT NULL,
  violation_type   TEXT NOT NULL CHECK (violation_type IN ('visibility_change','fullscreen_exit')),
  occurred_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  client_meta      JSONB
);
CREATE INDEX IF NOT EXISTS idx_quiz_violations_attempt ON public.quiz_attempt_violations(attempt_id);

-- ─────────────────────────── 2. RLS ────────────────────────────────────

ALTER TABLE public.quiz_banks               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes                  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempt_violations  ENABLE ROW LEVEL SECURITY;

-- quiz_banks: admin + teacher-own only. No student policy — ever.
CREATE POLICY "quiz_banks_admin_all" ON public.quiz_banks FOR ALL TO authenticated
  USING (public.get_user_role() = 'admin') WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "quiz_banks_teacher_own" ON public.quiz_banks FOR ALL TO authenticated
  USING (teacher_id IN (SELECT id FROM public.teachers WHERE profile_id = auth.uid()))
  WITH CHECK (teacher_id IN (SELECT id FROM public.teachers WHERE profile_id = auth.uid()));

-- quiz_questions: admin + teacher-own (via bank) only.
CREATE POLICY "quiz_questions_admin_all" ON public.quiz_questions FOR ALL TO authenticated
  USING (public.get_user_role() = 'admin') WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "quiz_questions_teacher_own" ON public.quiz_questions FOR ALL TO authenticated
  USING (bank_id IN (SELECT id FROM public.quiz_banks WHERE teacher_id IN
          (SELECT id FROM public.teachers WHERE profile_id = auth.uid())))
  WITH CHECK (bank_id IN (SELECT id FROM public.quiz_banks WHERE teacher_id IN
          (SELECT id FROM public.teachers WHERE profile_id = auth.uid())));

-- quizzes: teacher-own (full) + student read-only (non-draft, own class)
CREATE POLICY "quizzes_admin_all" ON public.quizzes FOR ALL TO authenticated
  USING (public.get_user_role() = 'admin') WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "quizzes_teacher_own" ON public.quizzes FOR ALL TO authenticated
  USING (class_id IN (SELECT c.id FROM public.classes c
          JOIN public.master_subjects ms ON ms.id = c.course_id
          JOIN public.teachers t ON t.id = ms.teacher_id WHERE t.profile_id = auth.uid()))
  WITH CHECK (class_id IN (SELECT c.id FROM public.classes c
          JOIN public.master_subjects ms ON ms.id = c.course_id
          JOIN public.teachers t ON t.id = ms.teacher_id WHERE t.profile_id = auth.uid()));
CREATE POLICY "quizzes_student_read" ON public.quizzes FOR SELECT TO authenticated
  USING (status <> 'draft' AND class_id IN (
          SELECT cs.class_id FROM public.class_students cs
          JOIN public.students s ON s.id = cs.student_id WHERE s.profile_id = auth.uid()));

-- quiz_attempts: teacher-own (monitor/unlock) + student self-select only.
-- Students have NO direct UPDATE/INSERT policy — every write (create,
-- autosave/heartbeat, submit, violation, unlock) goes through a
-- SECURITY DEFINER RPC below, so the tamper-guard trigger's protected
-- columns (including the session-lock columns) can never be bypassed by a
-- raw REST call.
CREATE POLICY "quiz_attempts_admin_all" ON public.quiz_attempts FOR ALL TO authenticated
  USING (public.get_user_role() = 'admin') WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "quiz_attempts_teacher_own" ON public.quiz_attempts FOR ALL TO authenticated
  USING (quiz_id IN (SELECT q.id FROM public.quizzes q
          JOIN public.classes c ON c.id = q.class_id
          JOIN public.master_subjects ms ON ms.id = c.course_id
          JOIN public.teachers t ON t.id = ms.teacher_id WHERE t.profile_id = auth.uid()))
  WITH CHECK (quiz_id IN (SELECT q.id FROM public.quizzes q
          JOIN public.classes c ON c.id = q.class_id
          JOIN public.master_subjects ms ON ms.id = c.course_id
          JOIN public.teachers t ON t.id = ms.teacher_id WHERE t.profile_id = auth.uid()));
CREATE POLICY "quiz_attempts_student_select_own" ON public.quiz_attempts FOR SELECT TO authenticated
  USING (student_id IN (SELECT id FROM public.students WHERE profile_id = auth.uid()));

-- quiz_attempt_violations: teacher read (own class) + student read own; writes via RPC only.
CREATE POLICY "quiz_violations_admin_all" ON public.quiz_attempt_violations FOR ALL TO authenticated
  USING (public.get_user_role() = 'admin') WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "quiz_violations_teacher_read" ON public.quiz_attempt_violations FOR SELECT TO authenticated
  USING (attempt_id IN (SELECT qa.id FROM public.quiz_attempts qa
          JOIN public.quizzes q ON q.id = qa.quiz_id
          JOIN public.classes c ON c.id = q.class_id
          JOIN public.master_subjects ms ON ms.id = c.course_id
          JOIN public.teachers t ON t.id = ms.teacher_id WHERE t.profile_id = auth.uid()));
CREATE POLICY "quiz_violations_student_read" ON public.quiz_attempt_violations FOR SELECT TO authenticated
  USING (attempt_id IN (SELECT qa.id FROM public.quiz_attempts qa
          JOIN public.students s ON s.id = qa.student_id WHERE s.profile_id = auth.uid()));

-- ─────────────────────────── 3. TAMPER-GUARD TRIGGER ───────────────────

CREATE OR REPLACE FUNCTION public.prevent_quiz_attempt_tamper()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF current_setting('app.quiz_trusted_op', true) = 'on' THEN
    RETURN NEW;
  END IF;
  IF public.get_user_role() = 'admin' THEN
    RETURN NEW;
  END IF;
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
  THEN
    RAISE EXCEPTION 'Direct modification of protected quiz_attempts columns is not allowed';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS quiz_attempt_tamper_guard ON public.quiz_attempts;
CREATE TRIGGER quiz_attempt_tamper_guard
  BEFORE UPDATE ON public.quiz_attempts
  FOR EACH ROW EXECUTE FUNCTION public.prevent_quiz_attempt_tamper();

-- ─────────────────────────── 4. RPC FUNCTIONS ──────────────────────────

-- Internal: finalize scoring + write to student_scores. Execute privilege is
-- revoked from anon/authenticated below — only callable from other
-- SECURITY DEFINER functions owned by the same role (function owners always
-- retain implicit execute rights on their own functions).
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

    INSERT INTO public.student_scores (assignment_id, student_id, original_score, final_score)
    VALUES (v_quiz.score_column_id, v_attempt.student_id, v_converted, v_converted)
    ON CONFLICT (assignment_id, student_id)
    DO UPDATE SET original_score = EXCLUDED.original_score, final_score = EXCLUDED.final_score;
  END IF;
END;
$$;
REVOKE ALL ON FUNCTION public._finalize_quiz_attempt(UUID, TEXT) FROM PUBLIC, anon, authenticated;

-- start_quiz_attempt: student entry point, draws+shuffles questions server-side
-- so the client never sees the unpicked pool or the answer key. Enforces
-- both open_at and close_at, and stamps an absolute deadline_at.
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

-- get_quiz_attempt_questions: the ONLY path that reveals question text/choices.
-- choice_perm is the array mapping displayed position -> original choice
-- index, so the client can translate a click (a displayed position) back
-- into the original index that `answers`/`_finalize_quiz_attempt` expect.
-- is_correct is exposed once the attempt is finalized AND review_policy is
-- 'per_question' or 'full_review' — WITHOUT revealing the answer key itself.
-- correct_choice_index/explanation (the answer key) are only exposed when
-- review_policy is 'full_review'. Uses ->> (text) then ::int rather than a
-- direct jsonb->int cast, since `answers` values are only ever guaranteed to
-- be JSON-number-shaped by client convention, not by a DB constraint.
CREATE OR REPLACE FUNCTION public.get_quiz_attempt_questions(p_attempt_id UUID)
RETURNS TABLE (
  question_id UUID, question_text TEXT, choices JSONB, choice_perm JSONB,
  is_correct BOOLEAN, correct_choice_index SMALLINT, explanation TEXT
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
    CASE WHEN v_attempt.choice_order ? qq.id::text THEN
      (SELECT jsonb_agg(qq.choices -> (perm.idx)::int ORDER BY perm.ord)
       FROM jsonb_array_elements_text(v_attempt.choice_order -> qq.id::text) WITH ORDINALITY AS perm(idx, ord))
    ELSE qq.choices END,
    CASE WHEN v_attempt.choice_order ? qq.id::text THEN v_attempt.choice_order -> qq.id::text ELSE NULL END,
    CASE WHEN v_show_correctness THEN
      (qq.correct_choice_index = (v_attempt.answers ->> qq.id::text)::int)
    ELSE NULL END,
    CASE WHEN v_show_answer_key THEN qq.correct_choice_index ELSE NULL END,
    CASE WHEN v_show_answer_key THEN qq.explanation ELSE NULL END
  FROM jsonb_array_elements_text(v_attempt.question_order) WITH ORDINALITY AS qorder(qid, ord)
  JOIN public.quiz_questions qq ON qq.id = qorder.qid::uuid
  ORDER BY qorder.ord;
END;
$$;

-- submit_quiz_attempt: normal student-initiated submit (or client-side timer expiry).
CREATE OR REPLACE FUNCTION public.submit_quiz_attempt(p_attempt_id UUID)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE v_student_id INTEGER;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  IF NOT EXISTS (SELECT 1 FROM public.quiz_attempts WHERE id = p_attempt_id AND student_id = v_student_id) THEN
    RAISE EXCEPTION 'not your attempt';
  END IF;
  PERFORM public._finalize_quiz_attempt(p_attempt_id, 'submitted');
END;
$$;

-- record_quiz_violation: called on visibilitychange/fullscreen-exit.
-- Strike 1 -> warn (terminated=false). Strike 2 -> auto-finalize + lock (terminated=true).
CREATE OR REPLACE FUNCTION public.record_quiz_violation(p_attempt_id UUID, p_violation_type TEXT)
RETURNS TABLE(violation_count SMALLINT, terminated BOOLEAN)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id INTEGER;
  v_attempt    public.quiz_attempts%ROWTYPE;
  v_new_count  SMALLINT;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND OR v_attempt.student_id <> v_student_id THEN
    RAISE EXCEPTION 'not your attempt';
  END IF;
  IF v_attempt.status <> 'in_progress' THEN
    RETURN QUERY SELECT v_attempt.violation_count, (v_attempt.status = 'terminated_violation');
    RETURN;
  END IF;

  v_new_count := v_attempt.violation_count + 1;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);
  INSERT INTO public.quiz_attempt_violations (attempt_id, violation_number, violation_type)
  VALUES (p_attempt_id, v_new_count, p_violation_type);
  UPDATE public.quiz_attempts SET violation_count = v_new_count WHERE id = p_attempt_id;

  IF v_new_count >= 2 THEN
    PERFORM public._finalize_quiz_attempt(p_attempt_id, 'terminated_violation');
    RETURN QUERY SELECT v_new_count, true;
  ELSE
    RETURN QUERY SELECT v_new_count, false;
  END IF;
END;
$$;

-- claim_quiz_attempt_session: best-effort single-tab lock (Phase 1). Mints a
-- session token the client must echo back on every quiz_attempt_heartbeat()
-- call — the actual defeat-two-tabs enforcement lives there, not here.
CREATE OR REPLACE FUNCTION public.claim_quiz_attempt_session(p_attempt_id UUID)
RETURNS UUID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id INTEGER;
  v_attempt    public.quiz_attempts%ROWTYPE;
  v_token      UUID := gen_random_uuid();
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND OR v_attempt.student_id <> v_student_id THEN
    RAISE EXCEPTION 'not your attempt';
  END IF;
  IF v_attempt.active_session_heartbeat_at IS NOT NULL
     AND v_attempt.active_session_heartbeat_at > now() - interval '30 seconds' THEN
    RAISE EXCEPTION 'already open in another tab';
  END IF;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);
  UPDATE public.quiz_attempts SET active_session_token = v_token, active_session_heartbeat_at = now()
    WHERE id = p_attempt_id;
  RETURN v_token;
END;
$$;

-- quiz_attempt_heartbeat: the ONLY path for autosaving answers/time during an
-- in-progress attempt (replaces a plain client-side table UPDATE). Validates
-- the caller's session token against the currently-active one — a second tab
-- that fakes a stale heartbeat can no longer just UPDATE the row directly, it
-- must go through this check. Also enforces the server-side deadline_at
-- backstop: if real wall-clock time is already past deadline, auto-finalizes
-- as submitted regardless of what the client's own timer thinks.
CREATE OR REPLACE FUNCTION public.quiz_attempt_heartbeat(
  p_attempt_id UUID, p_session_token UUID, p_answers JSONB, p_time_remaining_sec INTEGER
) RETURNS TABLE(expired BOOLEAN) LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id INTEGER;
  v_attempt    public.quiz_attempts%ROWTYPE;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND OR v_attempt.student_id <> v_student_id THEN
    RAISE EXCEPTION 'not your attempt';
  END IF;
  IF v_attempt.status <> 'in_progress' THEN
    RETURN QUERY SELECT true; RETURN;
  END IF;
  IF v_attempt.active_session_token IS DISTINCT FROM p_session_token THEN
    RAISE EXCEPTION 'session_superseded';
  END IF;

  IF v_attempt.deadline_at IS NOT NULL AND now() > v_attempt.deadline_at THEN
    PERFORM public._finalize_quiz_attempt(p_attempt_id, 'submitted');
    RETURN QUERY SELECT true;
    RETURN;
  END IF;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);
  UPDATE public.quiz_attempts SET
    answers = COALESCE(p_answers, answers),
    time_remaining_sec = COALESCE(p_time_remaining_sec, time_remaining_sec),
    active_session_heartbeat_at = now()
  WHERE id = p_attempt_id;

  RETURN QUERY SELECT false;
END;
$$;

-- teacher_unlock_quiz_attempt: resume-with-remaining-time (violation_count
-- resets to 0, confirmed) recomputes deadline_at from the preserved
-- time_remaining_sec and clears the stale session token so the student's
-- next load must claim a fresh one; restart (old attempt kept as permanent
-- evidence, new attempt created) now has the same "enough questions in
-- bank" bounds check that start_quiz_attempt has.
CREATE OR REPLACE FUNCTION public.teacher_unlock_quiz_attempt(p_attempt_id UUID, p_mode TEXT)
RETURNS public.quiz_attempts LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_teacher_id   INTEGER;
  v_attempt      public.quiz_attempts%ROWTYPE;
  v_quiz         public.quizzes%ROWTYPE;
  v_owns         BOOLEAN;
  v_new          public.quiz_attempts%ROWTYPE;
  v_question_ids JSONB;
  v_choice_order JSONB := '{}'::jsonb;
  v_qid          UUID;
  v_nchoices     INTEGER;
BEGIN
  IF p_mode NOT IN ('resume','restart') THEN RAISE EXCEPTION 'invalid mode'; END IF;

  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND OR v_attempt.status <> 'terminated_violation' THEN
    RAISE EXCEPTION 'attempt is not locked';
  END IF;
  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_attempt.quiz_id;

  SELECT EXISTS (
    SELECT 1 FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE c.id = v_quiz.class_id AND t.profile_id = auth.uid()
  ) INTO v_owns;
  SELECT id INTO v_teacher_id FROM public.teachers WHERE profile_id = auth.uid();

  IF NOT v_owns THEN RAISE EXCEPTION 'not your class'; END IF;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);

  IF p_mode = 'resume' THEN
    UPDATE public.quiz_attempts SET
      status = 'in_progress', violation_count = 0, terminated_at = NULL,
      unlocked_by_teacher_id = v_teacher_id, unlocked_at = now(), unlock_mode = 'resume',
      active_session_token = NULL, active_session_heartbeat_at = NULL,
      deadline_at = CASE WHEN time_remaining_sec IS NOT NULL THEN now() + (time_remaining_sec * interval '1 second') ELSE NULL END
    WHERE id = p_attempt_id
    RETURNING * INTO v_new;
    RETURN v_new;
  ELSE
    UPDATE public.quiz_attempts SET
      unlocked_by_teacher_id = v_teacher_id, unlocked_at = now(), unlock_mode = 'restart'
    WHERE id = p_attempt_id;

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
    VALUES (v_attempt.quiz_id, v_attempt.student_id, v_attempt.attempt_number + 1,
            v_question_ids, NULLIF(v_choice_order, '{}'::jsonb), v_quiz.time_limit_minutes * 60,
            CASE WHEN v_quiz.time_limit_minutes IS NOT NULL THEN now() + (v_quiz.time_limit_minutes * interval '1 minute') ELSE NULL END)
    RETURNING * INTO v_new;
    RETURN v_new;
  END IF;
END;
$$;

-- teacher_close_quiz_and_finalize: closing a quiz now actually ends any
-- still-in-progress attempts (auto-submitted with whatever answers they
-- have) instead of just flipping quizzes.status and leaving attempts to run
-- forever.
CREATE OR REPLACE FUNCTION public.teacher_close_quiz_and_finalize(p_quiz_id UUID)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_owns BOOLEAN;
  v_attempt_id UUID;
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
END;
$$;

-- get_my_quiz_rank: privacy-safe leaderboard rank for a student. Returns only
-- the calling student's own rank + total participants + best score — never
-- other students' names/scores (RLS already blocks direct cross-student
-- reads; this RPC is the one sanctioned aggregate view for ranking).
-- Ranking uses each student's BEST finished score (not attempt_scoring_mode)
-- since "leaderboard best result" is a distinct, simpler concept from
-- "recorded grade".
CREATE OR REPLACE FUNCTION public.get_my_quiz_rank(p_attempt_id UUID)
RETURNS TABLE(my_rank INTEGER, total_participants INTEGER, my_best_pct NUMERIC)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_student_id INTEGER;
  v_quiz_id UUID;
BEGIN
  SELECT id INTO v_student_id FROM public.students WHERE profile_id = auth.uid();
  SELECT quiz_id INTO v_quiz_id FROM public.quiz_attempts WHERE id = p_attempt_id AND student_id = v_student_id;
  IF v_quiz_id IS NULL THEN RAISE EXCEPTION 'not your attempt'; END IF;

  RETURN QUERY
  WITH best_per_student AS (
    SELECT student_id, MAX(score_pct) AS best_pct
    FROM public.quiz_attempts
    WHERE quiz_id = v_quiz_id AND status IN ('submitted','terminated_violation') AND score_pct IS NOT NULL
    GROUP BY student_id
  ), me AS (
    SELECT best_pct FROM best_per_student WHERE student_id = v_student_id
  )
  SELECT
    (SELECT count(*)::int + 1 FROM best_per_student, me WHERE best_per_student.best_pct > me.best_pct),
    (SELECT count(*)::int FROM best_per_student),
    (SELECT best_pct FROM me);
END;
$$;

-- ─────────────────────────── 5. GRANTS ─────────────────────────────────
-- Supabase grants EXECUTE directly to anon/authenticated via default
-- privileges (not merely via PUBLIC), so PUBLIC alone must not be relied
-- on — revoke from anon explicitly on every student/teacher RPC so only
-- signed-in users can call them (matches repo convention, see
-- patch_student_enrolled_classes_rpc.sql etc.)

REVOKE ALL ON FUNCTION public.start_quiz_attempt(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.start_quiz_attempt(UUID) TO authenticated;

REVOKE ALL ON FUNCTION public.get_quiz_attempt_questions(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_quiz_attempt_questions(UUID) TO authenticated;

REVOKE ALL ON FUNCTION public.submit_quiz_attempt(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.submit_quiz_attempt(UUID) TO authenticated;

REVOKE ALL ON FUNCTION public.record_quiz_violation(UUID, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.record_quiz_violation(UUID, TEXT) TO authenticated;

REVOKE ALL ON FUNCTION public.claim_quiz_attempt_session(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.claim_quiz_attempt_session(UUID) TO authenticated;

REVOKE ALL ON FUNCTION public.quiz_attempt_heartbeat(UUID, UUID, JSONB, INTEGER) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.quiz_attempt_heartbeat(UUID, UUID, JSONB, INTEGER) TO authenticated;

REVOKE ALL ON FUNCTION public.teacher_unlock_quiz_attempt(UUID, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.teacher_unlock_quiz_attempt(UUID, TEXT) TO authenticated;

REVOKE ALL ON FUNCTION public.teacher_close_quiz_and_finalize(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.teacher_close_quiz_and_finalize(UUID) TO authenticated;

REVOKE ALL ON FUNCTION public.get_my_quiz_rank(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_my_quiz_rank(UUID) TO authenticated;

-- Trigger function: never meant to be called directly via RPC at all.
REVOKE ALL ON FUNCTION public.prevent_quiz_attempt_tamper() FROM PUBLIC, anon, authenticated;
