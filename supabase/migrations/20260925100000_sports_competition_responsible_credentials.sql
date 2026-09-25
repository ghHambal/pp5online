-- Credentials used by the AZIZGAMES competition-responsible roster.
-- These are separate from PP5 Auth credentials and are visible only through
-- admin-only RPCs so the admin can hand them to responsible teachers.

CREATE TABLE IF NOT EXISTS public.sports_competition_responsible_credentials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  teacher_profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  username TEXT NOT NULL CHECK (username ~ '^[0-9]{4}$'),
  password TEXT NOT NULL CHECK (length(BTRIM(password)) >= 1),
  created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  updated_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (event_id, teacher_profile_id),
  UNIQUE (event_id, username)
);

CREATE INDEX IF NOT EXISTS sports_competition_responsible_credentials_event_idx
  ON public.sports_competition_responsible_credentials(event_id, updated_at DESC);

ALTER TABLE public.sports_competition_responsible_credentials ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.sports_competition_responsible_credentials FROM PUBLIC, anon, authenticated;

-- Automatically provision the requested defaults when an approved request is
-- created or changes from pending to approved. ON CONFLICT preserves an
-- administrator's later custom values.
CREATE OR REPLACE FUNCTION public.provision_sports_competition_responsible_credentials()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_code TEXT;
BEGIN
  IF NEW.status = 'approved'
     AND (TG_OP = 'INSERT' OR OLD.status IS DISTINCT FROM 'approved') THEN
    SELECT t.teacher_code INTO v_teacher_code
    FROM public.teachers t
    WHERE t.profile_id = NEW.teacher_profile_id;

    IF v_teacher_code ~ '^[0-9]{4}$' THEN
      INSERT INTO public.sports_competition_responsible_credentials
        (event_id, teacher_profile_id, username, password, created_by, updated_by)
      VALUES
        (NEW.event_id, NEW.teacher_profile_id, v_teacher_code, 'azgames', NEW.reviewed_by, NEW.reviewed_by)
      ON CONFLICT (event_id, teacher_profile_id) DO NOTHING;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS sports_competition_responsible_credentials_provision
  ON public.sports_competition_responsibility_requests;
CREATE TRIGGER sports_competition_responsible_credentials_provision
AFTER INSERT OR UPDATE OF status
ON public.sports_competition_responsibility_requests
FOR EACH ROW
EXECUTE FUNCTION public.provision_sports_competition_responsible_credentials();

-- Backfill the teachers already approved before this migration.
INSERT INTO public.sports_competition_responsible_credentials
  (event_id, teacher_profile_id, username, password)
SELECT DISTINCT r.event_id, r.teacher_profile_id, t.teacher_code, 'azgames'
FROM public.sports_competition_responsibility_requests r
JOIN public.teachers t ON t.profile_id = r.teacher_profile_id
WHERE r.status = 'approved'
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
      r.teacher_profile_id,
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
        'sport_id', r.sport_id,
        'sport_code', s.code,
        'sport_name', s.name,
        'sport_gender', s.gender
        ) ORDER BY s.display_order, s.code, s.name) AS sports
    FROM public.sports_competition_responsibility_requests r
    JOIN public.sports s
      ON s.id = r.sport_id
     AND s.event_id = p_event
     AND s.is_active IS TRUE
    JOIN public.teachers applicant ON applicant.profile_id = r.teacher_profile_id
    WHERE r.event_id = p_event
      AND r.status = 'approved'
    GROUP BY r.teacher_profile_id, applicant.full_name, applicant.teacher_code,
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
    FROM public.sports_competition_responsibility_requests r
    WHERE r.event_id = p_event
      AND r.teacher_profile_id = p_teacher_profile_id
      AND r.status = 'approved'
  ) THEN
    RAISE EXCEPTION 'ครูคนนี้ยังไม่มีรายการแข่งขันที่แอดมินอนุมัติ';
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

CREATE OR REPLACE FUNCTION public.delete_sports_competition_responsible_credential(p_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_event UUID;
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'เฉพาะแอดมินเท่านั้นที่ลบข้อมูลเข้าสู่ระบบได้';
  END IF;

  DELETE FROM public.sports_competition_responsible_credentials
  WHERE id = p_id
  RETURNING event_id INTO v_event;

  IF v_event IS NULL THEN
    RAISE EXCEPTION 'ไม่พบข้อมูลเข้าสู่ระบบที่ต้องการลบ';
  END IF;
  RETURN jsonb_build_object('deleted', true, 'id', p_id, 'event_id', v_event);
END;
$$;

REVOKE ALL ON FUNCTION public.get_sports_competition_responsible_credentials(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.upsert_sports_competition_responsible_credential(UUID, UUID, TEXT, TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.delete_sports_competition_responsible_credential(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_sports_competition_responsible_credentials(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.upsert_sports_competition_responsible_credential(UUID, UUID, TEXT, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.delete_sports_competition_responsible_credential(UUID) TO authenticated;
