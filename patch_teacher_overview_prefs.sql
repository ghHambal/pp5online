-- patch_teacher_overview_prefs.sql
-- เก็บการปรับแต่งไอคอนกริด "ระบบอื่นๆ" ในหน้าภาพรวมของครู (ซ่อน/แสดง + ลำดับ) ต่อบัญชี ใช้ได้ทุกเครื่อง
-- ไม่ต้องเพิ่ม RLS policy ใหม่ — teachers_self_update เดิมอนุญาตครู update แถวตัวเองทุกคอลัมน์อยู่แล้ว
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.teachers ADD COLUMN IF NOT EXISTS overview_prefs jsonb;
