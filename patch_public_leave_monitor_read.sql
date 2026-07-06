-- patch_public_leave_monitor_read.sql
-- Allow leave-monitor.html to read only the columns needed by the public TV display.
-- This avoids granting anon broad SELECT access to students/teachers/classes tables.

CREATE OR REPLACE FUNCTION public.get_public_leave_monitor_rows(
  p_start_at timestamptz,
  p_end_at timestamptz,
  p_teacher_id int DEFAULT NULL,
  p_limit int DEFAULT NULL
)
RETURNS TABLE (
  id uuid,
  student_id int,
  class_id int,
  teacher_id int,
  reason text,
  allowed_duration int,
  created_at timestamptz,
  returned_at timestamptz,
  status text,
  student_code text,
  student_full_name text,
  student_image_url text,
  student_main_room text,
  teacher_full_name text,
  class_name text,
  subject_name text
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    lp.id,
    lp.student_id,
    lp.class_id,
    lp.teacher_id,
    lp.reason,
    lp.allowed_duration,
    lp.created_at,
    lp.returned_at,
    lp.status,
    s.student_code,
    s.full_name AS student_full_name,
    s.image_url AS student_image_url,
    s.main_room AS student_main_room,
    t.full_name AS teacher_full_name,
    c.class_name,
    ms.subject_name
  FROM public.student_leave_permissions lp
  LEFT JOIN public.students s ON s.id = lp.student_id
  LEFT JOIN public.teachers t ON t.id = lp.teacher_id
  LEFT JOIN public.classes c ON c.id = lp.class_id
  LEFT JOIN public.master_subjects ms ON ms.id = c.course_id
  WHERE lp.created_at >= p_start_at
    AND lp.created_at < p_end_at
    AND (p_teacher_id IS NULL OR lp.teacher_id = p_teacher_id)
  ORDER BY lp.created_at DESC
  LIMIT COALESCE(p_limit, 5000);
$$;

REVOKE ALL ON FUNCTION public.get_public_leave_monitor_rows(timestamptz, timestamptz, int, int) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_leave_monitor_rows(timestamptz, timestamptz, int, int) TO anon, authenticated;
