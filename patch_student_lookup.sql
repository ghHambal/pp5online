-- patch_student_lookup.sql
-- อนุญาตให้ anonymous user ค้นหานักเรียนด้วยรหัสนักเรียนได้
-- (จำเป็นสำหรับขั้นตอนแรกของ student-login.html ก่อน login)
-- รัน 1 ครั้งใน Supabase SQL Editor

CREATE OR REPLACE FUNCTION public.lookup_student_by_code(p_student_code TEXT)
RETURNS TABLE (
  id           INT,
  student_code TEXT,
  full_name    TEXT,
  main_room    TEXT,
  image_url    TEXT,
  has_account  BOOLEAN
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    s.id,
    s.student_code,
    s.full_name,
    s.main_room,
    s.image_url,
    (s.profile_id IS NOT NULL) AS has_account
  FROM students s
  WHERE s.student_code = p_student_code
  LIMIT 1;
END;
$$;

-- อนุญาตให้ทั้ง anon และ authenticated เรียกใช้ได้
GRANT EXECUTE ON FUNCTION public.lookup_student_by_code(TEXT) TO anon, authenticated;
