-- Supervisor read access: ให้ครูที่มี position (หัวหน้า) อ่านข้อมูลห้องเรียนทุกห้องได้
-- รัน SQL นี้ใน Supabase Dashboard → SQL Editor
--
-- หมายเหตุ (2026-08-02): แก้บั๊ก — เดิมเช็คเฉพาะคอลัมน์ position (เดี่ยว, ของเก่า)
-- แต่ระบบปัจจุบัน assign บทบาทผ่าน positions (array) เป็นหลัก ทำให้ครูที่มี
-- position เดี่ยว = NULL แต่มี positions array (เช่น religion_subgroup_head,
-- classroom_leaders_admin) ไม่ได้สิทธิ์เลย → เปิดเอกสาร ปพ.5 ข้อมูลมาไม่ครบทุกหน้า
-- ทุก policy ด้านล่างเช็คทั้งสองคอลัมน์แล้ว

-- 1. class_students (รายชื่อนักเรียนในห้อง)
DROP POLICY IF EXISTS "class_students_supervisor_read" ON public.class_students;
CREATE POLICY "class_students_supervisor_read"
ON public.class_students
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
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
    AND (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
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
    AND (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
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
    AND (position IS NOT NULL OR (positions IS NOT NULL AND cardinality(positions) > 0))
  )
);
