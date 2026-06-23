-- patch_prayer_rls_room_access.sql
-- แก้ RLS SELECT policy ของ prayer_records:
-- 1. ให้ครูเห็น record ทั้งหมดของห้องที่ตัวเองเป็นที่ปรึกษา (ทั้งห้องสามัญและห้องศาสนา)
-- 2. ให้ครูที่เป็นหัวหน้า/ผู้ดูแล (Supervisor) ที่มี position สามารถเลือกดูข้อมูลของทุกห้องได้
-- รวมถึง record ที่ถูกสแกนโดยสภานักเรียน (teacher_id IS NULL)
-- รัน 1 ครั้งใน Supabase SQL Editor

-- 1. ลบ policy เดิม
DROP POLICY IF EXISTS "prayer_records_teacher_own_select" ON public.prayer_records;
DROP POLICY IF EXISTS "prayer_records_teacher_room_select" ON public.prayer_records;
DROP POLICY IF EXISTS "prayer_records_supervisor_select" ON public.prayer_records;

-- 2. สร้าง policy ใหม่สำหรับครูที่ปรึกษา
CREATE POLICY "prayer_records_teacher_room_select"
  ON public.prayer_records
  FOR SELECT
  TO authenticated
  USING (
    -- เห็น record ที่ตัวเอง (ครู) เป็นคนบันทึกเอง
    teacher_id IN (
      SELECT id FROM public.teachers WHERE profile_id = auth.uid()
    )
    OR
    -- เห็น record ทั้งหมดของนักเรียนที่อยู่ในห้องเรียนที่ตัวเองเป็นที่ปรึกษา (สามัญ หรือ ศาสนา)
    student_id IN (
      SELECT s.id
      FROM public.students s
      JOIN public.homeroom_teachers ht ON (s.religion_room = ht.main_room OR s.main_room = ht.main_room)
      JOIN public.teachers t ON t.id = ht.teacher_id
      WHERE t.profile_id = auth.uid()
    )
  );

-- 3. สร้าง policy ใหม่สำหรับครูที่เป็นผู้ดูแล/หัวหน้ากลุ่ม (Supervisor) ให้ดูได้ทุกห้อง
CREATE POLICY "prayer_records_supervisor_select"
  ON public.prayer_records
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.teachers
      WHERE profile_id = auth.uid()
        AND position IS NOT NULL
    )
  );

-- หมายเหตุ:
-- policy อื่นๆ (INSERT, UPDATE, DELETE) ยังคงใช้ teacher_id ของตัวเอง ไม่แก้
-- prayer_admin_all ยังคงทำงานปกติ (admin เห็นทุกอย่าง)
-- prayer_records_student_self_read ยังคงทำงานปกติ (นักเรียนเห็นของตัวเอง)
