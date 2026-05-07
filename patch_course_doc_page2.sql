-- patch_course_doc_page2.sql
-- เก็บข้อมูลคำอธิบายรายวิชา / มาตรฐาน / ตัวชี้วัด สำหรับเอกสาร ปพ.5 หน้า 2
-- ระดับคอร์สวิชา (master_subjects) ใช้ร่วมทุกห้องเรียนในคอร์สนั้น

CREATE TABLE IF NOT EXISTS public.course_doc_page2 (
  subject_id INTEGER PRIMARY KEY REFERENCES public.master_subjects(id) ON DELETE CASCADE,
  description TEXT DEFAULT '',
  table_columns JSONB NOT NULL DEFAULT '["มาตรฐานการเรียนรู้","ตัวชี้วัด"]'::jsonb,
  table_rows JSONB NOT NULL DEFAULT '[]'::jsonb,
  midterm_objective_items INTEGER[] NOT NULL DEFAULT '{}',
  final_objective_items INTEGER[] NOT NULL DEFAULT '{}',
  signer_name TEXT,
  text_direction TEXT NOT NULL DEFAULT 'auto'
    CHECK (text_direction IN ('auto', 'ltr', 'rtl')),
  updated_by INTEGER REFERENCES public.teachers(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.course_doc_page2 ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "course_doc_page2_teacher_admin_read" ON public.course_doc_page2;
CREATE POLICY "course_doc_page2_teacher_admin_read"
ON public.course_doc_page2
FOR SELECT TO authenticated
USING (
  public.get_user_role() = 'admin'
  OR EXISTS (
    SELECT 1
    FROM public.master_subjects ms
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE ms.id = course_doc_page2.subject_id
      AND t.profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "course_doc_page2_teacher_admin_write" ON public.course_doc_page2;
CREATE POLICY "course_doc_page2_teacher_admin_write"
ON public.course_doc_page2
FOR ALL TO authenticated
USING (
  public.get_user_role() = 'admin'
  OR EXISTS (
    SELECT 1
    FROM public.master_subjects ms
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE ms.id = course_doc_page2.subject_id
      AND t.profile_id = auth.uid()
  )
)
WITH CHECK (
  public.get_user_role() = 'admin'
  OR EXISTS (
    SELECT 1
    FROM public.master_subjects ms
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE ms.id = course_doc_page2.subject_id
      AND t.profile_id = auth.uid()
  )
);
