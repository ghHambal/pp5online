-- patch_co_teaching.sql
-- สร้างตารางและ RLS สำหรับโหมดสอนร่วมและคละระดับชั้น (Co-teaching & Multi-grade)

-- 1. สร้างตารางเก็บข้อมูลผู้ร่วมสอน
CREATE TABLE IF NOT EXISTS public.subject_co_teachers (
  subject_id INT NOT NULL REFERENCES public.master_subjects(id) ON DELETE CASCADE,
  teacher_id INT NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  PRIMARY KEY (subject_id, teacher_id)
);

-- เปิดใช้งาน RLS บนตารางผู้ร่วมสอน
ALTER TABLE public.subject_co_teachers ENABLE ROW LEVEL SECURITY;

-- 2. สร้าง Helper functions สำหรับตรวจสอบสิทธิ์เข้าถึง (Security Definer เพื่อไม่เกิด Infinite Recursion)
CREATE OR REPLACE FUNCTION public.has_subject_access(p_subject_id INT)
RETURNS BOOLEAN AS $$
DECLARE
  v_teacher_id INT;
BEGIN
  -- ดึง teacher_id ของครูผู้เข้าใช้งาน
  SELECT id INTO v_teacher_id FROM public.teachers WHERE profile_id = auth.uid();
  IF v_teacher_id IS NULL THEN
    RETURN FALSE;
  END IF;

  -- สิทธิ์ผ่านหากผู้ใช้เป็น เจ้าของรายวิชา หรือเป็น ครูผู้ร่วมสอน
  RETURN EXISTS (
    SELECT 1 FROM public.master_subjects ms
    WHERE ms.id = p_subject_id AND ms.teacher_id = v_teacher_id
  ) OR EXISTS (
    SELECT 1 FROM public.subject_co_teachers sct
    WHERE sct.subject_id = p_subject_id AND sct.teacher_id = v_teacher_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.has_class_access(p_class_id INT)
RETURNS BOOLEAN AS $$
DECLARE
  v_course_id INT;
BEGIN
  -- หา course_id ของห้องเรียนนี้
  SELECT course_id INTO v_course_id FROM public.classes WHERE id = p_class_id;
  IF v_course_id IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- ตรวจสอบสิทธิ์ผ่านวิชา
  RETURN public.has_subject_access(v_course_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. นโยบาย RLS สำหรับตารางผู้ร่วมสอน
DROP POLICY IF EXISTS "co_teachers_admin_all" ON public.subject_co_teachers;
CREATE POLICY "co_teachers_admin_all" ON public.subject_co_teachers
  FOR ALL TO authenticated USING (public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "co_teachers_select" ON public.subject_co_teachers;
CREATE POLICY "co_teachers_select" ON public.subject_co_teachers
  FOR SELECT TO authenticated USING (
    subject_id IN (
      SELECT ms.id FROM public.master_subjects ms
      JOIN public.teachers t ON t.id = ms.teacher_id
      WHERE t.profile_id = auth.uid()
    )
    OR
    teacher_id IN (
      SELECT id FROM public.teachers WHERE profile_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "co_teachers_modify" ON public.subject_co_teachers;
CREATE POLICY "co_teachers_modify" ON public.subject_co_teachers
  FOR ALL TO authenticated USING (
    subject_id IN (
      SELECT ms.id FROM public.master_subjects ms
      JOIN public.teachers t ON t.id = ms.teacher_id
      WHERE t.profile_id = auth.uid()
    )
  );

-- 4. ปรับปรุง RLS บนตาราง master_subjects
DROP POLICY IF EXISTS "subjects_teacher_own_update" ON public.master_subjects;
CREATE POLICY "subjects_teacher_own_update" ON public.master_subjects
  FOR UPDATE TO authenticated
  USING (public.has_subject_access(id) OR public.get_user_role() = 'admin')
  WITH CHECK (public.has_subject_access(id) OR public.get_user_role() = 'admin');

-- 5. ปรับปรุง RLS บนตาราง classes
DROP POLICY IF EXISTS "classes_teacher_own_insert" ON public.classes;
CREATE POLICY "classes_teacher_own_insert" ON public.classes
  FOR INSERT TO authenticated
  WITH CHECK (public.has_subject_access(course_id) OR public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "classes_teacher_own_update" ON public.classes;
CREATE POLICY "classes_teacher_own_update" ON public.classes
  FOR UPDATE TO authenticated
  USING (public.has_class_access(id) OR public.get_user_role() = 'admin')
  WITH CHECK (public.has_class_access(id) OR public.get_user_role() = 'admin');

DROP POLICY IF EXISTS "classes_teacher_own_delete" ON public.classes;
CREATE POLICY "classes_teacher_own_delete" ON public.classes
  FOR DELETE TO authenticated
  USING (public.has_class_access(id) OR public.get_user_role() = 'admin');

-- 6. ปรับปรุง RLS บนตาราง class_students
DROP POLICY IF EXISTS "class_students_teacher_own" ON public.class_students;
CREATE POLICY "class_students_teacher_own" ON public.class_students
  FOR ALL TO authenticated
  USING (public.has_class_access(class_id) OR public.get_user_role() = 'admin')
  WITH CHECK (public.has_class_access(class_id) OR public.get_user_role() = 'admin');

-- 7. ปรับปรุง RLS บนตาราง class_score_columns
DROP POLICY IF EXISTS "score_columns_teacher_own" ON public.class_score_columns;
CREATE POLICY "score_columns_teacher_own" ON public.class_score_columns
  FOR ALL TO authenticated
  USING (public.has_class_access(class_id) OR public.get_user_role() = 'admin')
  WITH CHECK (public.has_class_access(class_id) OR public.get_user_role() = 'admin');

-- 8. ปรับปรุง RLS บนตาราง student_scores
DROP POLICY IF EXISTS "student_scores_teacher_own" ON public.student_scores;
CREATE POLICY "student_scores_teacher_own" ON public.student_scores
  FOR ALL TO authenticated
  USING (
    public.get_user_role() = 'admin'
    OR assignment_id IN (
      SELECT csc.id
      FROM public.class_score_columns csc
      WHERE public.has_class_access(csc.class_id)
    )
  )
  WITH CHECK (
    public.get_user_role() = 'admin'
    OR assignment_id IN (
      SELECT csc.id
      FROM public.class_score_columns csc
      WHERE public.has_class_access(csc.class_id)
    )
  );

-- 9. ปรับปรุง RLS บนตาราง attendances
DROP POLICY IF EXISTS "attendances_teacher_own" ON public.attendances;
CREATE POLICY "attendances_teacher_own" ON public.attendances
  FOR ALL TO authenticated
  USING (public.has_class_access(class_id) OR public.get_user_role() = 'admin')
  WITH CHECK (public.has_class_access(class_id) OR public.get_user_role() = 'admin');

-- 10. ปรับปรุง RLS บนตาราง exam_requests
DROP POLICY IF EXISTS "exam_requests_teacher_own" ON public.exam_requests;
CREATE POLICY "exam_requests_teacher_own" ON public.exam_requests
  FOR ALL TO authenticated
  USING (public.has_class_access(class_id) OR public.get_user_role() = 'admin')
  WITH CHECK (public.has_class_access(class_id) OR public.get_user_role() = 'admin');

-- 11. ปรับปรุง RLS บนตาราง course_doc_page2
DROP POLICY IF EXISTS "course_doc_page2_teacher_admin_read" ON public.course_doc_page2;
CREATE POLICY "course_doc_page2_teacher_admin_read" ON public.course_doc_page2
  FOR SELECT TO authenticated
  USING (
    public.get_user_role() = 'admin'
    OR public.has_subject_access(subject_id)
  );

DROP POLICY IF EXISTS "course_doc_page2_teacher_admin_write" ON public.course_doc_page2;
CREATE POLICY "course_doc_page2_teacher_admin_write" ON public.course_doc_page2
  FOR ALL TO authenticated
  USING (
    public.get_user_role() = 'admin'
    OR public.has_subject_access(subject_id)
  )
  WITH CHECK (
    public.get_user_role() = 'admin'
    OR public.has_subject_access(subject_id)
  );
