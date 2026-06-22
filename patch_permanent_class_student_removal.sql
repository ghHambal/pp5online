-- patch_permanent_class_student_removal.sql
-- รัน 1 ครั้งใน Supabase Dashboard -> SQL Editor ก่อน deploy หน้าเว็บ
-- ลบนักเรียนออกจากรายวิชาจริง และป้องกัน Auto-enroll เพิ่มกลับ

BEGIN;

CREATE TABLE IF NOT EXISTS public.class_student_exclusions (
  class_id INTEGER NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  excluded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  excluded_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (class_id, student_id)
);

ALTER TABLE public.class_student_exclusions ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.class_student_exclusions FROM anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.class_student_exclusions TO authenticated;

DROP POLICY IF EXISTS "class_student_exclusions_admin_all" ON public.class_student_exclusions;
CREATE POLICY "class_student_exclusions_admin_all"
ON public.class_student_exclusions
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "class_student_exclusions_teacher_own" ON public.class_student_exclusions;
CREATE POLICY "class_student_exclusions_teacher_own"
ON public.class_student_exclusions
FOR ALL TO authenticated
USING (
  class_id IN (
    SELECT c.id
    FROM public.classes AS c
    JOIN public.master_subjects AS ms ON ms.id = c.course_id
    JOIN public.teachers AS t ON t.id = ms.teacher_id
    WHERE t.profile_id = (SELECT auth.uid())
  )
)
WITH CHECK (
  class_id IN (
    SELECT c.id
    FROM public.classes AS c
    JOIN public.master_subjects AS ms ON ms.id = c.course_id
    JOIN public.teachers AS t ON t.id = ms.teacher_id
    WHERE t.profile_id = (SELECT auth.uid())
  )
);

-- แปลงสถานะซ่อนเดิมเป็นรายการลบถาวร แล้วลบ enrollment จริง
INSERT INTO public.class_student_exclusions (class_id, student_id)
SELECT cs.class_id, cs.student_id
FROM public.class_students AS cs
WHERE cs.is_active = false
ON CONFLICT (class_id, student_id) DO NOTHING;

DELETE FROM public.class_students WHERE is_active = false;

CREATE OR REPLACE FUNCTION public.exclude_student_from_class(p_enrollment_id INTEGER)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
DECLARE
  v_class_id INTEGER;
  v_student_id INTEGER;
BEGIN
  SELECT cs.class_id, cs.student_id
  INTO v_class_id, v_student_id
  FROM public.class_students AS cs
  WHERE cs.id = p_enrollment_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'ไม่พบรายการนักเรียน หรือไม่มีสิทธิ์จัดการห้องนี้';
  END IF;

  INSERT INTO public.class_student_exclusions (class_id, student_id, excluded_by, excluded_at)
  VALUES (v_class_id, v_student_id, auth.uid(), now())
  ON CONFLICT (class_id, student_id) DO UPDATE
  SET excluded_by = EXCLUDED.excluded_by,
      excluded_at = EXCLUDED.excluded_at;

  DELETE FROM public.class_students WHERE id = p_enrollment_id;

  RETURN jsonb_build_object('ok', true, 'class_id', v_class_id, 'student_id', v_student_id);
END;
$$;

CREATE OR REPLACE FUNCTION public.restore_student_to_class(
  p_class_id INTEGER,
  p_student_id INTEGER
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.class_student_exclusions
  WHERE class_id = p_class_id AND student_id = p_student_id;

  INSERT INTO public.class_students (class_id, student_id, is_active)
  VALUES (p_class_id, p_student_id, true)
  ON CONFLICT (class_id, student_id) DO UPDATE SET is_active = true;

  RETURN jsonb_build_object('ok', true);
END;
$$;

CREATE OR REPLACE FUNCTION public.auto_enroll_students_by_room()
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  enrolled_count INTEGER := 0;
BEGIN
  INSERT INTO public.class_students (class_id, student_id, is_active)
  SELECT DISTINCT c.id, s.id, true
  FROM public.classes AS c
  JOIN public.students AS s
    ON s.main_room = c.class_name OR s.religion_room = c.class_name
  WHERE s.is_active = true
    AND NOT EXISTS (
      SELECT 1
      FROM public.class_student_exclusions AS x
      WHERE x.class_id = c.id AND x.student_id = s.id
    )
  ON CONFLICT (class_id, student_id) DO NOTHING;

  GET DIAGNOSTICS enrolled_count = ROW_COUNT;
  RETURN json_build_object('ok', true, 'enrolled', enrolled_count, 'deactivated', 0);
END;
$$;

REVOKE ALL ON FUNCTION public.exclude_student_from_class(INTEGER) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.restore_student_to_class(INTEGER, INTEGER) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.auto_enroll_students_by_room() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.exclude_student_from_class(INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION public.restore_student_to_class(INTEGER, INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION public.auto_enroll_students_by_room() TO authenticated;
GRANT EXECUTE ON FUNCTION public.auto_enroll_students_by_room() TO service_role;

COMMIT;

SELECT
  (SELECT count(*) FROM public.class_student_exclusions) AS permanent_exclusions,
  (SELECT count(*) FROM public.class_students WHERE is_active = false) AS hidden_enrollments;
