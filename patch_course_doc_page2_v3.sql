-- patch_course_doc_page2_v3.sql
-- เพิ่ม column สำหรับข้อความจุดประสงค์วัดผลที่ครูพิมพ์เพิ่มเองนอกจากการติ๊กเลือก

ALTER TABLE public.course_doc_page2
  ADD COLUMN IF NOT EXISTS between_objective_extra TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS midterm_objective_extra TEXT NOT NULL DEFAULT '',
  ADD COLUMN IF NOT EXISTS final_objective_extra   TEXT NOT NULL DEFAULT '';
