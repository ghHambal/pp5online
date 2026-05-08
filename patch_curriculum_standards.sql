-- patch_curriculum_standards.sql
-- ฐานข้อมูลหลักสูตรแกนกลางสำหรับเติมคำอธิบายฯ ปพ.5 หน้า 2 อัตโนมัติ

CREATE TABLE IF NOT EXISTS public.curriculum_standards (
  id BIGSERIAL PRIMARY KEY,
  subject_name TEXT,
  subject_code TEXT,
  dept TEXT,
  grade_level TEXT,
  strand TEXT,
  topic TEXT,
  item_no INTEGER,
  standard_code TEXT,
  standard_text TEXT,
  indicator_code TEXT,
  indicator_text TEXT,
  learning_outcome_text TEXT,
  source_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS curriculum_standards_subject_code_idx
  ON public.curriculum_standards (subject_code);

CREATE INDEX IF NOT EXISTS curriculum_standards_grade_level_idx
  ON public.curriculum_standards (grade_level);

CREATE INDEX IF NOT EXISTS curriculum_standards_dept_idx
  ON public.curriculum_standards (dept);

ALTER TABLE public.curriculum_standards ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "curriculum_standards_authenticated_read" ON public.curriculum_standards;
CREATE POLICY "curriculum_standards_authenticated_read"
ON public.curriculum_standards
FOR SELECT TO authenticated
USING (true);

DROP POLICY IF EXISTS "curriculum_standards_admin_manage" ON public.curriculum_standards;
CREATE POLICY "curriculum_standards_admin_manage"
ON public.curriculum_standards
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');
