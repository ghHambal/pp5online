-- patch_class_groups_save.sql
-- ให้ครูบันทึกผลการ "สุ่มจัดกลุ่ม" ในโมดัลสุ่มรายชื่อ (class_randomizer_state) ได้
-- ก่อนหน้านี้จัดกลุ่มแล้วหายทันทีที่ปิด modal/รีเฟรช เพราะไม่มีที่เก็บ
-- Run in Supabase SQL Editor.

ALTER TABLE public.class_randomizer_state
  ADD COLUMN IF NOT EXISTS groups JSONB;

-- โครงสร้างข้อมูลใน groups: [{ "no": 1, "student_ids": [12,45,7] }, { "no": 2, "student_ids": [33,9] }, ...]
-- ไม่ต้องแก้ RLS/GRANT เพราะ column ใหม่อยู่ในตารางเดิมที่มี policy ครอบคลุมอยู่แล้ว
