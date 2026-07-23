-- =====================================================================
-- patch_score_override_link.sql
-- คอลัมน์ปรับคะแนนสอบกลางภาค (Midterm Score Override) — เพิ่ม link_column_id
-- ให้ class_score_columns เพื่อผูกคอลัมน์พิเศษ (column_type='override') เข้ากับ
-- คอลัมน์คะแนนกลางภาคหลักที่ครูเลือกเอง ระบบเปรียบเทียบ+เขียนทับฝั่ง client
-- (js/teacher-views-grades.js) ไม่มี logic ฝั่ง DB
-- Run once in Supabase SQL Editor (or via mcp apply_migration).
-- =====================================================================

ALTER TABLE public.class_score_columns
  ADD COLUMN IF NOT EXISTS link_column_id INTEGER
    REFERENCES public.class_score_columns(id) ON DELETE SET NULL;
