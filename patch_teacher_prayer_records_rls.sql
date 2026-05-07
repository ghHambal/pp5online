-- patch_teacher_prayer_records_rls.sql
-- ให้ครูบันทึก/แก้ไข/ลบคะแนนละหมาดของตนเองได้
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.prayer_records ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "prayer_records_teacher_own_select" ON public.prayer_records;
DROP POLICY IF EXISTS "prayer_records_teacher_own_insert" ON public.prayer_records;
DROP POLICY IF EXISTS "prayer_records_teacher_own_update" ON public.prayer_records;
DROP POLICY IF EXISTS "prayer_records_teacher_own_delete" ON public.prayer_records;

CREATE POLICY "prayer_records_teacher_own_select"
  ON public.prayer_records
  FOR SELECT
  TO authenticated
  USING (
    teacher_id IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = auth.uid()
    )
  );

CREATE POLICY "prayer_records_teacher_own_insert"
  ON public.prayer_records
  FOR INSERT
  TO authenticated
  WITH CHECK (
    teacher_id IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = auth.uid()
    )
  );

CREATE POLICY "prayer_records_teacher_own_update"
  ON public.prayer_records
  FOR UPDATE
  TO authenticated
  USING (
    teacher_id IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = auth.uid()
    )
  )
  WITH CHECK (
    teacher_id IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = auth.uid()
    )
  );

CREATE POLICY "prayer_records_teacher_own_delete"
  ON public.prayer_records
  FOR DELETE
  TO authenticated
  USING (
    teacher_id IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = auth.uid()
    )
  );
