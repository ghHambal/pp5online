-- Provision credentials for every active sport assignment, including legacy
-- assignments that existed before the request-and-approval workflow.

INSERT INTO public.sports_competition_responsible_credentials
  (event_id, teacher_profile_id, username, password)
SELECT DISTINCT s.event_id, s.responsible_teacher_id, t.teacher_code, 'azgames'
FROM public.sports s
JOIN public.teachers t ON t.profile_id = s.responsible_teacher_id
WHERE s.is_active IS TRUE
  AND s.responsible_teacher_id IS NOT NULL
  AND t.teacher_code ~ '^[0-9]{4}$'
ON CONFLICT (event_id, teacher_profile_id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.get_sports_competition_responsible_credentials(p_event UUID)
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
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่ดูข้อมูลเข้าสู่ระบบผู้รับผิดชอบได้';
  END IF;

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'teacher_profile_id', people.teacher_profile_id,
    'teacher_name', people.teacher_name,
    'teacher_code', people.teacher_code,
    'teacher_title', people.teacher_title,
    'teacher_staff_type', people.teacher_staff_type,
    'credential_id', c.id,
    'username', c.username,
    'password', c.password,
    'credential_status', CASE WHEN c.id IS NULL THEN 'missing' ELSE 'ready' END,
    'sports', people.sports
    ) ORDER BY people.teacher_name), '[]'::JSONB)
  INTO v_rows
  FROM (
    SELECT
      s.responsible_teacher_id AS teacher_profile_id,
      applicant.full_name AS teacher_name,
      applicant.teacher_code,
      CASE
        WHEN applicant.full_name ILIKE 'นางสาว%' THEN 'นางสาว'
        WHEN applicant.full_name ILIKE 'นาย%' THEN 'นาย'
        WHEN applicant.full_name ILIKE 'นาง%' THEN 'นาง'
        WHEN applicant.full_name ~* '^ดร\.' THEN 'ดร.'
        WHEN applicant.full_name ~* '^(mr\.|mrs\.|ms\.)'
          THEN UPPER(SPLIT_PART(applicant.full_name, ' ', 1))
        ELSE COALESCE(NULLIF(applicant.staff_type, ''), 'ครู')
      END AS teacher_title,
      applicant.staff_type AS teacher_staff_type,
      jsonb_agg(jsonb_build_object(
        'sport_id', s.id,
        'sport_code', s.code,
        'sport_name', s.name,
        'sport_gender', s.gender
        ) ORDER BY s.display_order, s.code, s.name) AS sports
    FROM public.sports s
    JOIN public.teachers applicant ON applicant.profile_id = s.responsible_teacher_id
    WHERE s.event_id = p_event
      AND s.is_active IS TRUE
      AND s.responsible_teacher_id IS NOT NULL
    GROUP BY s.responsible_teacher_id, applicant.full_name, applicant.teacher_code,
             applicant.staff_type
  ) people
  LEFT JOIN public.sports_competition_responsible_credentials c
    ON c.event_id = p_event
   AND c.teacher_profile_id = people.teacher_profile_id;

  RETURN v_rows;
END;
$$;

CREATE OR REPLACE FUNCTION public.upsert_sports_competition_responsible_credential(
  p_event UUID,
  p_teacher_profile_id UUID,
  p_username TEXT,
  p_password TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_username TEXT := BTRIM(COALESCE(p_username, ''));
  v_password TEXT := BTRIM(COALESCE(p_password, ''));
  v_row public.sports_competition_responsible_credentials%ROWTYPE;
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่แก้ไขข้อมูลเข้าสู่ระบบได้';
  END IF;
  IF v_username !~ '^[0-9]{4}$' THEN
    RAISE EXCEPTION 'Username ต้องเป็นเลขประจำตัวครู 4 หลัก';
  END IF;
  IF v_password = '' THEN
    RAISE EXCEPTION 'กรุณากำหนดรหัสผ่าน';
  END IF;
  IF NOT EXISTS (
    SELECT 1
    FROM public.sports s
    WHERE s.event_id = p_event
      AND s.is_active IS TRUE
      AND s.responsible_teacher_id = p_teacher_profile_id
  ) THEN
    RAISE EXCEPTION 'ครูคนนี้ยังไม่มีรายการแข่งขันที่กำหนดเป็นผู้รับผิดชอบ';
  END IF;

  INSERT INTO public.sports_competition_responsible_credentials
    (event_id, teacher_profile_id, username, password, created_by, updated_by)
  VALUES
    (p_event, p_teacher_profile_id, v_username, v_password, auth.uid(), auth.uid())
  ON CONFLICT (event_id, teacher_profile_id)
  DO UPDATE SET
    username = EXCLUDED.username,
    password = EXCLUDED.password,
    updated_by = auth.uid(),
    updated_at = now()
  RETURNING * INTO v_row;

  RETURN jsonb_build_object(
    'id', v_row.id,
    'event_id', v_row.event_id,
    'teacher_profile_id', v_row.teacher_profile_id,
    'username', v_row.username,
    'password', v_row.password,
    'updated_at', v_row.updated_at
  );
END;
$$;
