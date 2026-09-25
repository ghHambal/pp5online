-- Extend the registration workspace with the teacher code used as the
-- existing PP5 username. Passwords remain managed by PP5 Auth and are never
-- returned to the client or shown in the admin table.
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

  IF NOT EXISTS (SELECT 1 FROM public.teachers WHERE profile_id = v_user) THEN
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
    'responsible_teacher_code', responsible_teacher.teacher_code,
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

-- Approve all pending requests in one transaction. Requests for an item that
-- has already been assigned are rejected safely instead of overwriting it.
CREATE OR REPLACE FUNCTION public.approve_all_sports_competition_responsibility_requests(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user UUID := auth.uid();
  v_request public.sports_competition_responsibility_requests%ROWTYPE;
  v_sport public.sports%ROWTYPE;
  v_approved INTEGER := 0;
  v_rejected INTEGER := 0;
  v_teacher_ids UUID[] := ARRAY[]::UUID[];
BEGIN
  IF v_user IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่อนุมัติคำขอได้';
  END IF;

  FOR v_request IN
    SELECT *
    FROM public.sports_competition_responsibility_requests
    WHERE event_id = p_event AND status = 'pending'
    ORDER BY created_at, id
    FOR UPDATE
  LOOP
    SELECT * INTO v_sport
    FROM public.sports
    WHERE id = v_request.sport_id AND event_id = p_event
    FOR UPDATE;

    IF v_sport.id IS NULL OR v_sport.is_active IS NOT TRUE THEN
      UPDATE public.sports_competition_responsibility_requests
      SET status = 'rejected', reviewed_by = v_user, reviewed_at = now(),
          reviewer_note = 'รายการแข่งขันไม่พร้อมใช้งานแล้ว', updated_at = now()
      WHERE id = v_request.id AND status = 'pending';
      v_rejected := v_rejected + 1;
    ELSIF v_sport.responsible_teacher_id IS NOT NULL
       AND v_sport.responsible_teacher_id IS DISTINCT FROM v_request.teacher_profile_id THEN
      UPDATE public.sports_competition_responsibility_requests
      SET status = 'rejected', reviewed_by = v_user, reviewed_at = now(),
          reviewer_note = 'รายการนี้มีผู้รับผิดชอบแล้ว', updated_at = now()
      WHERE id = v_request.id AND status = 'pending';
      v_rejected := v_rejected + 1;
    ELSE
      UPDATE public.sports
      SET responsible_teacher_id = v_request.teacher_profile_id, updated_at = now()
      WHERE id = v_sport.id;

      UPDATE public.sports_competition_responsibility_requests
      SET status = 'approved', reviewed_by = v_user, reviewed_at = now(),
          reviewer_note = NULL, updated_at = now()
      WHERE id = v_request.id AND status = 'pending';
      v_approved := v_approved + 1;
      IF NOT (v_request.teacher_profile_id = ANY(v_teacher_ids)) THEN
        v_teacher_ids := array_append(v_teacher_ids, v_request.teacher_profile_id);
      END IF;
    END IF;
  END LOOP;

  RETURN jsonb_build_object(
    'approved_count', v_approved,
    'rejected_count', v_rejected,
    'teacher_profile_ids', to_jsonb(v_teacher_ids)
  );
END;
$$;

REVOKE ALL ON FUNCTION public.get_sports_competition_registration_workspace(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.approve_all_sports_competition_responsibility_requests(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_registration_workspace(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.approve_all_sports_competition_responsibility_requests(UUID) TO authenticated;
