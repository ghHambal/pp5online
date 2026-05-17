-- Supervisor read access: ให้ครูที่มี position (หัวหน้า) อ่านข้อมูลห้องเรียนทุกห้องได้
-- รัน SQL นี้ใน Supabase Dashboard → SQL Editor

-- 1. class_students (รายชื่อนักเรียนในห้อง)
DROP POLICY IF EXISTS "class_students_supervisor_read" ON public.class_students;
CREATE POLICY "class_students_supervisor_read"
ON public.class_students
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND position IS NOT NULL
  )
);

-- 2. attendances (ข้อมูลเช็คชื่อ)
DROP POLICY IF EXISTS "attendances_supervisor_read" ON public.attendances;
CREATE POLICY "attendances_supervisor_read"
ON public.attendances
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND position IS NOT NULL
  )
);

-- 3. student_scores (คะแนน)
DROP POLICY IF EXISTS "student_scores_supervisor_read" ON public.student_scores;
CREATE POLICY "student_scores_supervisor_read"
ON public.student_scores
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND position IS NOT NULL
  )
);

-- 4. class_score_columns (คอลัมน์คะแนน)
DROP POLICY IF EXISTS "class_score_columns_supervisor_read" ON public.class_score_columns;
CREATE POLICY "class_score_columns_supervisor_read"
ON public.class_score_columns
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND position IS NOT NULL
  )
);
