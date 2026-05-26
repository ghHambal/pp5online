-- patch_supervisor_schedule_read.sql
-- ให้ supervisor (teachers.position IS NOT NULL) และ is_also_admin อ่านตารางสอน
-- ของครูทุกคนได้ (ก่อนหน้านี้เห็นแค่ของตัวเอง)
-- รัน 1 ครั้งใน Supabase Dashboard → SQL Editor

-- 1. teacher_schedules — อ่านได้ทุกคน (สำหรับ supervisor view)
DROP POLICY IF EXISTS "teacher_schedules_supervisor_read" ON public.teacher_schedules;
CREATE POLICY "teacher_schedules_supervisor_read"
ON public.teacher_schedules
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND position IS NOT NULL
  )
  OR
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND is_also_admin = true
  )
);

-- 2. class_schedule_links — ให้ supervisor อ่านได้ (แสดงชื่อห้องใน grid)
DROP POLICY IF EXISTS "supervisor_read_class_schedule_links" ON public.class_schedule_links;
CREATE POLICY "supervisor_read_class_schedule_links"
ON public.class_schedule_links
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND position IS NOT NULL
  )
  OR
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND is_also_admin = true
  )
);

-- 3. teacher_room_colors — ให้ supervisor อ่านได้ (แสดงสีใน grid)
DROP POLICY IF EXISTS "supervisor_read_room_colors" ON public.teacher_room_colors;
CREATE POLICY "supervisor_read_room_colors"
ON public.teacher_room_colors
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.teachers
    WHERE profile_id = auth.uid()
    AND position IS NOT NULL
  )
  OR
  EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid()
    AND is_also_admin = true
  )
);
