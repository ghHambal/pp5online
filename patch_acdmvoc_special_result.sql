-- patch_acdmvoc_special_result.sql
-- สถานะพิเศษรายคนสำหรับเอกสาร ปพ.5 สามัญปวช. (ACDMVOC): ข.ร./ข.ส./ม.ส./ข.ป.
-- เก็บระดับ class_students (ต่อห้อง/รายวิชา) เพราะสถานะผูกกับวิชานั้นๆ เท่านั้น ไม่ใช่ของนักเรียนถาวร
-- Run in Supabase SQL Editor.

ALTER TABLE public.class_students
  ADD COLUMN IF NOT EXISTS special_result TEXT
  CHECK (special_result IN ('ข.ร.','ข.ส.','ม.ส.','ข.ป.') OR special_result IS NULL);
