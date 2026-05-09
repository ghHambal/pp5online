-- patch_teacher_subject_manage.sql
-- อนุญาตให้ครูจัดการ (update/delete) คอร์สวิชาของตัวเองได้

DROP POLICY IF EXISTS "subjects_teacher_manage" ON public.master_subjects;
CREATE POLICY "subjects_teacher_manage"
ON public.master_subjects
FOR ALL TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers t
    WHERE t.id = master_subjects.teacher_id
      AND t.profile_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.teachers t
    WHERE t.id = master_subjects.teacher_id
      AND t.profile_id = auth.uid()
  )
);
