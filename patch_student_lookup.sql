-- patch_student_lookup.sql
-- อนุญาตให้ anonymous user ค้นหานักเรียนด้วยรหัสนักเรียนได้
-- (จำเป็นสำหรับขั้นตอนแรกของ student-login.html ก่อน login)
-- รัน 1 ครั้งใน Supabase SQL Editor

DROP FUNCTION IF EXISTS public.lookup_student_by_code(TEXT);

CREATE OR REPLACE FUNCTION public.lookup_student_by_code(p_student_code TEXT)
RETURNS TABLE (
  id           INT,
  student_code TEXT,
  full_name    TEXT,
  main_room    TEXT,
  image_url    TEXT,
  has_account  BOOLEAN,
  login_email  TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    s.id::INT,
    s.student_code::TEXT,
    s.full_name::TEXT,
    s.main_room::TEXT,
    s.image_url::TEXT,
    (s.profile_id IS NOT NULL)                                AS has_account,
    CASE WHEN s.profile_id IS NOT NULL
         THEN (SELECT u.email::TEXT FROM auth.users u WHERE u.id = s.profile_id)
         ELSE NULL
    END::TEXT                                                 AS login_email
  FROM students s
  WHERE s.student_code = p_student_code
  LIMIT 1;
END;
$$;

-- อนุญาตให้ทั้ง anon และ authenticated เรียกใช้ได้
GRANT EXECUTE ON FUNCTION public.lookup_student_by_code(TEXT) TO anon, authenticated;
