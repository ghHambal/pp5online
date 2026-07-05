-- patch_student_leave_settings.sql
-- เพิ่มตารางตั้งค่าโควต้าออกนอกห้องต่อรายวิชา/ห้องเรียน และ index สำหรับ dashboard รายสัปดาห์

CREATE TABLE IF NOT EXISTS public.class_leave_settings (
  class_id INTEGER PRIMARY KEY REFERENCES public.classes(id) ON DELETE CASCADE,
  max_active INTEGER NOT NULL DEFAULT 3 CHECK (max_active BETWEEN 1 AND 30),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.class_leave_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "class_leave_settings_read" ON public.class_leave_settings;
DROP POLICY IF EXISTS "class_leave_settings_manage" ON public.class_leave_settings;

CREATE POLICY "class_leave_settings_read"
ON public.class_leave_settings
FOR SELECT TO authenticated
USING (true);

CREATE POLICY "class_leave_settings_manage"
ON public.class_leave_settings
FOR ALL TO authenticated
USING (
  public.get_user_role() = 'admin'
  OR EXISTS (
    SELECT 1
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE c.id = class_leave_settings.class_id
      AND t.profile_id = auth.uid()
  )
)
WITH CHECK (
  public.get_user_role() = 'admin'
  OR EXISTS (
    SELECT 1
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE c.id = class_leave_settings.class_id
      AND t.profile_id = auth.uid()
  )
);

INSERT INTO public.system_config (key, value)
VALUES ('leaveDefaultMaxActive', '3')
ON CONFLICT (key) DO NOTHING;

CREATE INDEX IF NOT EXISTS idx_student_leave_permissions_class_week
  ON public.student_leave_permissions (class_id, student_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_student_leave_permissions_status_created
  ON public.student_leave_permissions (status, created_at DESC);
