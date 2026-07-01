-- patch_prayer_homeroom_category_rls.sql
-- ปรับ RLS SELECT ของ prayer_records ให้ครูที่ปรึกษาเห็นข้อมูลตามประเภทห้องอย่างชัดเจน
-- - ครูที่ปรึกษา "ศาสนา" เห็นเฉพาะนักเรียนที่ students.religion_room = homeroom_teachers.main_room
-- - ครูที่ปรึกษา "สามัญ" เห็นเฉพาะนักเรียนที่ students.main_room = homeroom_teachers.main_room
-- รัน 1 ครั้งใน Supabase SQL Editor

DROP POLICY IF EXISTS "prayer_records_teacher_room_select" ON public.prayer_records;

CREATE POLICY "prayer_records_teacher_room_select"
  ON public.prayer_records
  FOR SELECT
  TO authenticated
  USING (
    teacher_id IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = (select auth.uid())
    )
    OR
    student_id IN (
      SELECT s.id
      FROM public.students s
      JOIN public.homeroom_teachers ht
        ON (
          (ht.category = 'ศาสนา' AND s.religion_room = ht.main_room)
          OR
          (COALESCE(ht.category, 'สามัญ') <> 'ศาสนา' AND s.main_room = ht.main_room)
        )
      JOIN public.teachers t
        ON t.id = ht.teacher_id
      WHERE t.profile_id = (select auth.uid())
    )
  );
