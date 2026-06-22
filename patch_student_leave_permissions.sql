-- patch_student_leave_permissions.sql
-- Run this in the Supabase Dashboard SQL Editor to set up the leave permissions table.

CREATE TABLE IF NOT EXISTS public.student_leave_permissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id INT NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  class_id INT NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  teacher_id INT NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  allowed_duration INTEGER NOT NULL CHECK (allowed_duration > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  returned_at TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'returned', 'overdue'))
);

-- Enable Row Level Security
ALTER TABLE public.student_leave_permissions ENABLE ROW LEVEL SECURITY;

-- Policies for student_leave_permissions
DROP POLICY IF EXISTS "leave_teacher_all" ON public.student_leave_permissions;

CREATE POLICY "leave_teacher_all"
ON public.student_leave_permissions
FOR ALL TO authenticated
USING (true)
WITH CHECK (true);

-- Enable Realtime for student_leave_permissions safely
ALTER TABLE public.student_leave_permissions REPLICA IDENTITY FULL;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM pg_publication_rel pr
    JOIN pg_publication p ON p.oid = pr.prpubid
    JOIN pg_class c ON c.oid = pr.prrelid
    WHERE p.pubname = 'supabase_realtime' AND c.relname = 'student_leave_permissions'
  ) THEN
    EXECUTE 'ALTER PUBLICATION supabase_realtime ADD TABLE student_leave_permissions';
  END IF;
END $$;
