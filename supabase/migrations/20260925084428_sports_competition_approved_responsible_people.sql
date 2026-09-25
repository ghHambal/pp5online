-- Admin-only view of approved requests. This intentionally reads the request
-- table, not sports.responsible_teacher_id, so pre-existing assignments that
-- were never submitted through this workflow are not shown in this roster.
CREATE OR REPLACE FUNCTION public.get_sports_competition_approved_responsible_people(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_rows JSONB;
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่ดูรายชื่อผู้รับผิดชอบที่อนุมัติแล้วได้';
  END IF;

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'teacher_profile_id', r.teacher_profile_id,
    'teacher_name', applicant.full_name,
    'teacher_code', applicant.teacher_code,
    'teacher_title', CASE
      WHEN applicant.full_name ILIKE 'นางสาว%' THEN 'นางสาว'
      WHEN applicant.full_name ILIKE 'นาย%' THEN 'นาย'
      WHEN applicant.full_name ILIKE 'นาง%' THEN 'นาง'
      WHEN applicant.full_name ~* '^ดร\\.' THEN 'ดร.'
      WHEN applicant.full_name ~* '^(mr\\.|mrs\\.|ms\\.)' THEN UPPER(SPLIT_PART(applicant.full_name, ' ', 1))
      ELSE COALESCE(NULLIF(applicant.staff_type, ''), 'ครู')
    END,
    'teacher_staff_type', applicant.staff_type,
    'teacher_position', applicant.position,
    'sport_id', r.sport_id,
    'sport_code', s.code,
    'sport_name', s.name,
    'sport_gender', s.gender,
    'approved_at', r.reviewed_at
    ) ORDER BY applicant.full_name, s.display_order, s.code, s.name), '[]'::JSONB)
  INTO v_rows
  FROM public.sports_competition_responsibility_requests r
  JOIN public.sports s
    ON s.id = r.sport_id
   AND s.event_id = p_event
   AND s.is_active IS TRUE
  JOIN public.teachers applicant
    ON applicant.profile_id = r.teacher_profile_id
  WHERE r.event_id = p_event
    AND r.status = 'approved';

  RETURN v_rows;
END;
$$;

REVOKE ALL ON FUNCTION public.get_sports_competition_approved_responsible_people(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_approved_responsible_people(UUID) TO authenticated;
