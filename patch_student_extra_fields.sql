-- patch_student_extra_fields.sql
-- เพิ่มข้อมูลประจำสีและไซด์เสื้อกีฬาสีในตารางนักเรียน
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.students
  ADD COLUMN IF NOT EXISTS house_color TEXT,
  ADD COLUMN IF NOT EXISTS sports_shirt_size TEXT;

INSERT INTO public.system_config (key, value) VALUES
  ('showStudentHouseColor', 'true'),
  ('showStudentSportsShirtSize', 'true')
ON CONFLICT (key) DO NOTHING;
