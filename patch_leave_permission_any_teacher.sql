-- patch_leave_permission_any_teacher.sql
-- Run this in the Supabase Dashboard SQL Editor.
-- อนุญาตให้ครูทุกคน (ไม่ใช่แค่ครูประจำวิชา/คาบ) ออกใบอนุญาตออกนอกห้องให้นักเรียนได้
-- โดยไม่ผูกกับคาบเรียน (class_id) ใด ๆ — จึงต้องปลด NOT NULL ออกจาก class_id

ALTER TABLE public.student_leave_permissions ALTER COLUMN class_id DROP NOT NULL;
