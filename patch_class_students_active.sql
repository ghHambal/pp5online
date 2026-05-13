-- patch_class_students_active.sql
-- เพิ่มสถานะนักเรียนในรายวิชา เพื่อรองรับกรณีออกกลางคัน
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.class_students
  ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

CREATE INDEX IF NOT EXISTS idx_class_students_class_active
ON public.class_students (class_id, is_active);
