-- patch_course_doc_page2_v2.sql
-- เพิ่ม column ระหว่างภาค และ topic_list ให้กับ course_doc_page2

ALTER TABLE public.course_doc_page2
  ADD COLUMN IF NOT EXISTS between_objective_items INTEGER[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS topic_list JSONB NOT NULL DEFAULT '[]'::jsonb;
