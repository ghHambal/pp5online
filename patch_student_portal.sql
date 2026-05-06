-- patch_student_portal.sql
-- ระบบ Student Portal — RLS policies + login resolution function
-- รัน 1 ครั้งใน Supabase SQL Editor (หลังรัน patch_teacher_login_username_codes.sql แล้ว)

-- ─── 1. RLS: นักเรียนอ่านข้อมูลตัวเองได้ ──────────────────────────────────────

-- students
DROP POLICY IF EXISTS "students_self_read"   ON students;
DROP POLICY IF EXISTS "students_self_update" ON students;

CREATE POLICY "students_self_read" ON students
  FOR SELECT TO authenticated
  USING (profile_id = auth.uid());

CREATE POLICY "students_self_update" ON students
  FOR UPDATE TO authenticated
  USING     (profile_id = auth.uid())
  WITH CHECK (profile_id = auth.uid());

-- class_students
DROP POLICY IF EXISTS "class_students_self_read" ON class_students;

CREATE POLICY "class_students_self_read" ON class_students
  FOR SELECT TO authenticated
  USING (student_id IN (
    SELECT id FROM students WHERE profile_id = auth.uid()
  ));

-- student_scores
DROP POLICY IF EXISTS "student_scores_self_read" ON student_scores;

CREATE POLICY "student_scores_self_read" ON student_scores
  FOR SELECT TO authenticated
  USING (student_id IN (
    SELECT id FROM students WHERE profile_id = auth.uid()
  ));

-- attendances
DROP POLICY IF EXISTS "attendances_self_read" ON attendances;

CREATE POLICY "attendances_self_read" ON attendances
  FOR SELECT TO authenticated
  USING (student_id IN (
    SELECT id FROM students WHERE profile_id = auth.uid()
  ));

-- exam_requests
DROP POLICY IF EXISTS "exam_requests_self_read"   ON exam_requests;
DROP POLICY IF EXISTS "exam_requests_self_insert" ON exam_requests;
DROP POLICY IF EXISTS "exam_requests_self_delete" ON exam_requests;

CREATE POLICY "exam_requests_self_read" ON exam_requests
  FOR SELECT TO authenticated
  USING (student_id IN (
    SELECT id FROM students WHERE profile_id = auth.uid()
  ));

CREATE POLICY "exam_requests_self_insert" ON exam_requests
  FOR INSERT TO authenticated
  WITH CHECK (student_id IN (
    SELECT id FROM students WHERE profile_id = auth.uid()
  ));

CREATE POLICY "exam_requests_self_delete" ON exam_requests
  FOR DELETE TO authenticated
  USING (
    status = 'pending'
    AND student_id IN (SELECT id FROM students WHERE profile_id = auth.uid())
  );

-- ─── 2. Function: ผูก profile กับนักเรียน (ครั้งแรก) ────────────────────────────
-- SECURITY DEFINER เพื่อ bypass RLS ตอน signup ครั้งแรก (profile_id ยัง NULL)
CREATE OR REPLACE FUNCTION public.link_student_profile(p_student_code TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_student_id INT;
BEGIN
  -- ตรวจสอบว่านักเรียนนี้ยังไม่มีบัญชี (profile_id IS NULL)
  SELECT id INTO v_student_id
  FROM students
  WHERE student_code = p_student_code
    AND profile_id IS NULL
  LIMIT 1;

  IF v_student_id IS NULL THEN
    RETURN FALSE;  -- ไม่พบ หรือมีบัญชีแล้ว
  END IF;

  -- ผูก profile_id กับ auth.uid() ปัจจุบัน
  UPDATE students
  SET profile_id = auth.uid()
  WHERE id = v_student_id;

  -- อัปเดต role ใน profiles ให้เป็น student
  UPDATE profiles
  SET role = 'student'
  WHERE id = auth.uid();

  RETURN TRUE;
END;
$$;

GRANT EXECUTE ON FUNCTION public.link_student_profile(TEXT) TO authenticated;

-- ─── 3. Function: resolve email จาก profile_id ────────────────────────────────

CREATE OR REPLACE FUNCTION public.resolve_student_login_email(p_profile_id UUID)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_email TEXT;
BEGIN
  SELECT email INTO v_email
  FROM auth.users
  WHERE id = p_profile_id;
  RETURN v_email;
END;
$$;

GRANT EXECUTE ON FUNCTION public.resolve_student_login_email(UUID) TO anon, authenticated;

-- ─── 3. ตรวจสอบผลหลังรัน ───────────────────────────────────────────────────────
SELECT 'students policies' AS check,
       policyname, cmd
FROM pg_policies
WHERE tablename IN ('students','class_students','student_scores','attendances','exam_requests')
ORDER BY tablename, policyname;
