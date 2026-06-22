-- patch_unhide_students.sql
-- รันไฟล์นี้ 1 ครั้งใน Supabase Dashboard -> SQL Editor เพื่อกู้คืนรายชื่อนักเรียนที่ถูกซ่อนทั้งหมด

-- 1. ตั้งค่าสถานะนักเรียนทุกคนในระบบหลักให้เป็น Active (เลิกซ่อน)
UPDATE public.students
SET is_active = true;

-- 2. ตั้งค่าสถานะการลงทะเบียนเรียนของนักเรียนทุกคนในทุกห้องเรียนให้เป็น Active (เลิกซ่อน)
UPDATE public.class_students
SET is_active = true;
