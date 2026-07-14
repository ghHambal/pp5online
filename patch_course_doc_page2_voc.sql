-- patch_course_doc_page2_voc.sql
-- เพิ่มคอลัมน์สำหรับ "จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา" + "กำหนดการสอน"
-- ใช้เฉพาะเอกสาร ปพ.5 หน้า 4 ของกลุ่มสามัญปวช. (ACDMVOC) — โครงสร้างต่างจาก
-- table_columns/table_rows เดิม (ซึ่งใช้กับหน้า 2 ของสามัญ) จึงแยกคอลัมน์ใหม่
-- แทนที่จะยัดรวมกัน แต่ยังอยู่ในตารางเดิมเพราะเป็นข้อมูลระดับคอร์สวิชาเหมือนกัน

ALTER TABLE public.course_doc_page2
  ADD COLUMN IF NOT EXISTS voc_objectives JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS voc_schedule   JSONB NOT NULL DEFAULT '[]'::jsonb;
