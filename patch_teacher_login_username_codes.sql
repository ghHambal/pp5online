-- ============================================================
-- Patch: teacher username/login email + 4-digit teacher codes
-- รันใน Supabase SQL Editor ก่อนใช้งานล็อกอินด้วย username/รหัสครู
-- ============================================================

ALTER TABLE public.teachers
  ADD COLUMN IF NOT EXISTS username TEXT,
  ADD COLUMN IF NOT EXISTS login_email TEXT;

UPDATE public.teachers
SET username = lower(trim(username))
WHERE username IS NOT NULL;

-- เติมอีเมลล็อกอินจากบัญชี Auth ที่ผูกไว้แล้ว
UPDATE public.teachers t
SET login_email = u.email
FROM auth.users u
WHERE t.profile_id = u.id
  AND (t.login_email IS NULL OR trim(t.login_email) = '');

CREATE UNIQUE INDEX IF NOT EXISTS teachers_username_lower_uidx
  ON public.teachers (lower(username))
  WHERE username IS NOT NULL AND trim(username) <> '';

DROP INDEX IF EXISTS public.teachers_login_email_lower_uidx;

CREATE INDEX IF NOT EXISTS teachers_login_email_lower_idx
  ON public.teachers (lower(login_email))
  WHERE login_email IS NOT NULL AND trim(login_email) <> '';

DO $$
DECLARE
  duplicate_count INTEGER;
BEGIN
  WITH base AS (
    SELECT
      id,
      teacher_code,
      CASE
        WHEN category = 'ศาสนา' OR teacher_code LIKE '2%' THEN '2'
        ELSE '1'
      END AS code_prefix
    FROM public.teachers
    WHERE teacher_code IS NOT NULL
      AND teacher_code ~ '^[0-9]+$'
  ),
  candidates AS (
    SELECT
      id,
      CASE
        WHEN length(teacher_code) >= 4 AND teacher_code ~ '^[12][0-9]{3,}$'
          THEN teacher_code
        WHEN teacher_code ~ '^[12][0-9]{2}$'
          THEN code_prefix || lpad(substring(teacher_code FROM 2)::INTEGER::TEXT, 3, '0')
        ELSE code_prefix || lpad(teacher_code::INTEGER::TEXT, 3, '0')
      END AS new_code
    FROM base
  )
  SELECT count(*)
  INTO duplicate_count
  FROM (
    SELECT new_code
    FROM candidates
    GROUP BY new_code
    HAVING count(*) > 1
  ) dup;

  IF duplicate_count > 0 THEN
    RAISE EXCEPTION 'teacher_code migration stopped: % duplicate new codes found', duplicate_count;
  END IF;

  WITH base AS (
    SELECT
      id,
      teacher_code,
      CASE
        WHEN category = 'ศาสนา' OR teacher_code LIKE '2%' THEN '2'
        ELSE '1'
      END AS code_prefix
    FROM public.teachers
    WHERE teacher_code IS NOT NULL
      AND teacher_code ~ '^[0-9]+$'
  ),
  candidates AS (
    SELECT
      id,
      CASE
        WHEN length(teacher_code) >= 4 AND teacher_code ~ '^[12][0-9]{3,}$'
          THEN teacher_code
        WHEN teacher_code ~ '^[12][0-9]{2}$'
          THEN code_prefix || lpad(substring(teacher_code FROM 2)::INTEGER::TEXT, 3, '0')
        ELSE code_prefix || lpad(teacher_code::INTEGER::TEXT, 3, '0')
      END AS new_code
    FROM base
  )
  UPDATE public.teachers t
  SET teacher_code = c.new_code
  FROM candidates c
  WHERE t.id = c.id
    AND t.teacher_code IS DISTINCT FROM c.new_code;
END $$;

ALTER TABLE public.teachers
  DROP CONSTRAINT IF EXISTS teachers_username_format_chk;

ALTER TABLE public.teachers
  ADD CONSTRAINT teachers_username_format_chk
  CHECK (
    username IS NULL
    OR trim(username) = ''
    OR username ~ '^[a-z0-9._-]{3,32}$'
  ) NOT VALID;

CREATE OR REPLACE FUNCTION public.resolve_teacher_login_email(p_identifier TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_identifier TEXT := trim(coalesce(p_identifier, ''));
  v_username TEXT := lower(trim(coalesce(p_identifier, '')));
  v_legacy_code TEXT;
  v_email TEXT;
BEGIN
  IF v_identifier = '' THEN
    RETURN NULL;
  END IF;

  IF position('@' IN v_identifier) > 0 THEN
    RETURN v_identifier;
  END IF;

  IF v_identifier ~ '^[12][0-9]{2}$' THEN
    v_legacy_code := substring(v_identifier FROM 1 FOR 1) || lpad(substring(v_identifier FROM 2), 3, '0');
  END IF;

  SELECT t.login_email
  INTO v_email
  FROM public.teachers t
  WHERE (v_username ~ '^[a-z0-9._-]{3,32}$' AND lower(t.username) = v_username)
     OR t.teacher_code = v_identifier
     OR (v_legacy_code IS NOT NULL AND t.teacher_code = v_legacy_code)
  ORDER BY
    CASE
      WHEN t.teacher_code = v_identifier THEN 0
      WHEN v_legacy_code IS NOT NULL AND t.teacher_code = v_legacy_code THEN 1
      ELSE 2
    END
  LIMIT 1;

  RETURN v_email;
END;
$$;

GRANT EXECUTE ON FUNCTION public.resolve_teacher_login_email(TEXT) TO anon, authenticated;

-- ใช้ตรวจผลหลังรัน
SELECT id, teacher_code, username, login_email, full_name, category
FROM public.teachers
ORDER BY teacher_code NULLS LAST, full_name;
