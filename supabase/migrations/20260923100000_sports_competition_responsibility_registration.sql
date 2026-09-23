-- PP5 teacher registration for sports competition responsibilities.
-- Teachers can request multiple sports in one submission. An admin approves each
-- request, then the existing sports.responsible_teacher_id grants access to the
-- shared competition schedule/match workspace.

CREATE TABLE IF NOT EXISTS public.sports_competition_responsibility_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  sport_id UUID NOT NULL REFERENCES public.sports(id) ON DELETE CASCADE,
  teacher_profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected')),
  teacher_note TEXT,
  reviewer_note TEXT,
  reviewed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, sport_id, teacher_profile_id)
);

CREATE INDEX IF NOT EXISTS sports_competition_responsibility_requests_event_status_idx
  ON public.sports_competition_responsibility_requests(event_id, status, created_at DESC);
CREATE INDEX IF NOT EXISTS sports_competition_responsibility_requests_teacher_idx
  ON public.sports_competition_responsibility_requests(teacher_profile_id, event_id, status);

ALTER TABLE public.sports_competition_responsibility_requests ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.get_sports_competition_registration_workspace(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user UUID := auth.uid();
  v_is_admin BOOLEAN;
  v_teacher_name TEXT;
  v_options JSONB;
  v_my_requests JSONB;
  v_pending_requests JSONB;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = v_user
  ) THEN
    RAISE EXCEPTION 'ไม่พบข้อมูลครูของบัญชีนี้';
  END IF;

  SELECT COALESCE(t.full_name, '') INTO v_teacher_name
  FROM public.teachers t
  WHERE t.profile_id = v_user
  LIMIT 1;

  v_is_admin := public.is_sports_competition_admin();

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', s.id,
    'code', s.code,
    'name', s.name,
    'category', s.category,
    'gender', s.gender,
    'venue', s.venue,
    'responsible_teacher_id', s.responsible_teacher_id,
    'responsible_teacher_name', responsible_teacher.full_name,
    'request_id', mine.id,
    'request_status', mine.status,
    'request_note', mine.teacher_note,
    'request_created_at', mine.created_at
    ) ORDER BY s.display_order, s.code, s.name), '[]'::JSONB)
  INTO v_options
  FROM public.sports s
  LEFT JOIN public.teachers responsible_teacher
    ON responsible_teacher.profile_id = s.responsible_teacher_id
  LEFT JOIN public.sports_competition_responsibility_requests mine
    ON mine.event_id = s.event_id
   AND mine.sport_id = s.id
   AND mine.teacher_profile_id = v_user
  WHERE s.event_id = p_event
    AND s.is_active IS TRUE;

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', r.id,
    'sport_id', r.sport_id,
    'sport_name', s.name,
    'sport_code', s.code,
    'gender', s.gender,
    'status', r.status,
    'teacher_note', r.teacher_note,
    'reviewer_note', r.reviewer_note,
    'created_at', r.created_at,
    'reviewed_at', r.reviewed_at
    ) ORDER BY r.created_at DESC), '[]'::JSONB)
  INTO v_my_requests
  FROM public.sports_competition_responsibility_requests r
  JOIN public.sports s ON s.id = r.sport_id AND s.event_id = p_event
  WHERE r.event_id = p_event
    AND r.teacher_profile_id = v_user;

  IF v_is_admin THEN
    SELECT COALESCE(jsonb_agg(jsonb_build_object(
      'id', r.id,
      'sport_id', r.sport_id,
      'sport_name', s.name,
      'sport_code', s.code,
      'gender', s.gender,
      'teacher_profile_id', r.teacher_profile_id,
      'teacher_name', applicant.full_name,
      'teacher_code', applicant.teacher_code,
      'status', r.status,
      'teacher_note', r.teacher_note,
      'created_at', r.created_at
      ) ORDER BY r.created_at), '[]'::JSONB)
    INTO v_pending_requests
    FROM public.sports_competition_responsibility_requests r
    JOIN public.sports s ON s.id = r.sport_id AND s.event_id = p_event
    JOIN public.teachers applicant ON applicant.profile_id = r.teacher_profile_id
    WHERE r.event_id = p_event
      AND r.status = 'pending';
  ELSE
    v_pending_requests := '[]'::JSONB;
  END IF;

  RETURN jsonb_build_object(
    'event_id', p_event,
    'is_admin', v_is_admin,
    'teacher_profile_id', v_user,
    'teacher_name', v_teacher_name,
    'sports', v_options,
    'my_requests', v_my_requests,
    'pending_requests', v_pending_requests
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.submit_sports_competition_responsibility_request(
  p_event UUID,
  p_sport_ids UUID[],
  p_teacher_note TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user UUID := auth.uid();
  v_ids UUID[];
  v_invalid_count INTEGER;
  v_conflict_name TEXT;
  v_submitted INTEGER := 0;
  v_id UUID;
BEGIN
  IF v_user IS NULL THEN
    RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.teachers WHERE profile_id = v_user) THEN
    RAISE EXCEPTION 'ไม่พบข้อมูลครูของบัญชีนี้';
  END IF;
  IF p_sport_ids IS NULL OR cardinality(p_sport_ids) = 0 THEN
    RAISE EXCEPTION 'กรุณาเลือกรายการแข่งขันอย่างน้อย 1 รายการ';
  END IF;

  SELECT ARRAY_AGG(DISTINCT id ORDER BY id) INTO v_ids
  FROM unnest(p_sport_ids) AS id;

  SELECT COUNT(*) INTO v_invalid_count
  FROM unnest(v_ids) AS requested(id)
  WHERE NOT EXISTS (
    SELECT 1 FROM public.sports s
    WHERE s.id = requested.id
      AND s.event_id = p_event
      AND s.is_active IS TRUE
  );
  IF v_invalid_count > 0 THEN
    RAISE EXCEPTION 'มีรายการแข่งขันที่ไม่อยู่ในกิจกรรมหรือปิดใช้งานแล้ว';
  END IF;

  SELECT s.name INTO v_conflict_name
  FROM public.sports s
  WHERE s.id = ANY(v_ids)
    AND s.responsible_teacher_id IS NOT NULL
    AND s.responsible_teacher_id IS DISTINCT FROM v_user
  ORDER BY s.name
  LIMIT 1;
  IF v_conflict_name IS NOT NULL THEN
    RAISE EXCEPTION 'รายการ % มีผู้รับผิดชอบแล้ว กรุณาเลือกเฉพาะรายการที่ยังว่าง', v_conflict_name;
  END IF;

  FOREACH v_id IN ARRAY v_ids LOOP
    INSERT INTO public.sports_competition_responsibility_requests
      (event_id, sport_id, teacher_profile_id, status, teacher_note, reviewed_by, reviewed_at, reviewer_note, updated_at)
    VALUES
      (p_event, v_id, v_user, 'pending', NULLIF(BTRIM(p_teacher_note), ''), NULL, NULL, NULL, now())
    ON CONFLICT (event_id, sport_id, teacher_profile_id)
    DO UPDATE SET
      status = CASE WHEN sports_competition_responsibility_requests.status = 'approved'
                    THEN sports_competition_responsibility_requests.status ELSE 'pending' END,
      teacher_note = CASE WHEN sports_competition_responsibility_requests.status = 'approved'
                          THEN sports_competition_responsibility_requests.teacher_note
                          ELSE EXCLUDED.teacher_note END,
      reviewed_by = CASE WHEN sports_competition_responsibility_requests.status = 'approved'
                         THEN sports_competition_responsibility_requests.reviewed_by ELSE NULL END,
      reviewed_at = CASE WHEN sports_competition_responsibility_requests.status = 'approved'
                        THEN sports_competition_responsibility_requests.reviewed_at ELSE NULL END,
      reviewer_note = CASE WHEN sports_competition_responsibility_requests.status = 'approved'
                           THEN sports_competition_responsibility_requests.reviewer_note ELSE NULL END,
      updated_at = now();
    v_submitted := v_submitted + 1;
  END LOOP;

  RETURN jsonb_build_object('submitted', v_submitted, 'sport_ids', v_ids);
END;
$$;

CREATE OR REPLACE FUNCTION public.review_sports_competition_responsibility_request(
  p_request_id UUID,
  p_decision TEXT,
  p_reviewer_note TEXT DEFAULT NULL
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_request public.sports_competition_responsibility_requests%ROWTYPE;
  v_sport public.sports%ROWTYPE;
  v_decision TEXT := LOWER(BTRIM(COALESCE(p_decision, '')));
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่อนุมัติคำขอนี้ได้';
  END IF;
  IF v_decision NOT IN ('approved', 'rejected') THEN
    RAISE EXCEPTION 'การตัดสินคำขอไม่ถูกต้อง';
  END IF;

  SELECT * INTO v_request
  FROM public.sports_competition_responsibility_requests
  WHERE id = p_request_id
  FOR UPDATE;
  IF v_request.id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบคำขอลงทะเบียน';
  END IF;
  IF v_request.status <> 'pending' THEN
    RAISE EXCEPTION 'คำขอนี้ถูกดำเนินการไปแล้ว';
  END IF;

  SELECT * INTO v_sport
  FROM public.sports
  WHERE id = v_request.sport_id AND event_id = v_request.event_id
  FOR UPDATE;
  IF v_sport.id IS NULL OR v_sport.is_active IS NOT TRUE THEN
    RAISE EXCEPTION 'ไม่พบรายการแข่งขันที่ยังใช้งานอยู่';
  END IF;

  IF v_decision = 'approved' THEN
    IF v_sport.responsible_teacher_id IS NOT NULL
       AND v_sport.responsible_teacher_id IS DISTINCT FROM v_request.teacher_profile_id THEN
      RAISE EXCEPTION 'รายการนี้ถูกมอบหมายให้ครูท่านอื่นแล้ว';
    END IF;

    UPDATE public.sports
    SET responsible_teacher_id = v_request.teacher_profile_id
    WHERE id = v_sport.id;

    UPDATE public.sports_competition_responsibility_requests
    SET status = 'approved', reviewed_by = auth.uid(), reviewed_at = now(),
        reviewer_note = NULLIF(BTRIM(p_reviewer_note), ''), updated_at = now()
    WHERE id = v_request.id;

    UPDATE public.sports_competition_responsibility_requests
    SET status = 'rejected', reviewed_by = auth.uid(), reviewed_at = now(),
        reviewer_note = COALESCE(NULLIF(BTRIM(p_reviewer_note), ''), 'รายการนี้มีผู้รับผิดชอบแล้ว'), updated_at = now()
    WHERE event_id = v_request.event_id
      AND sport_id = v_request.sport_id
      AND id <> v_request.id
      AND status = 'pending';
  ELSE
    UPDATE public.sports_competition_responsibility_requests
    SET status = 'rejected', reviewed_by = auth.uid(), reviewed_at = now(),
        reviewer_note = NULLIF(BTRIM(p_reviewer_note), ''), updated_at = now()
    WHERE id = v_request.id;
  END IF;

  RETURN jsonb_build_object(
    'request_id', v_request.id,
    'decision', v_decision,
    'sport_id', v_request.sport_id,
    'teacher_profile_id', v_request.teacher_profile_id
  );
END;
$$;

REVOKE ALL ON FUNCTION public.get_sports_competition_registration_workspace(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.submit_sports_competition_responsibility_request(UUID, UUID[], TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.review_sports_competition_responsibility_request(UUID, TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_registration_workspace(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.submit_sports_competition_responsibility_request(UUID, UUID[], TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.review_sports_competition_responsibility_request(UUID, TEXT, TEXT) TO authenticated;
