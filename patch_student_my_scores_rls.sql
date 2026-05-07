-- patch_student_my_scores_rls.sql
-- ให้นักเรียนอ่านคะแนนรวมของตัวเองได้ในหน้า "คะแนนของฉัน"
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.prayer_records ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "prayer_records_student_self_read" ON public.prayer_records;

CREATE POLICY "prayer_records_student_self_read"
  ON public.prayer_records
  FOR SELECT
  TO authenticated
  USING (
    student_id IN (
      SELECT id
      FROM public.students
      WHERE profile_id = auth.uid()
    )
  );
