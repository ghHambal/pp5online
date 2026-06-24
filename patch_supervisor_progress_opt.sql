-- patch_supervisor_progress_opt.sql
-- Optimizations for Supervisor Progress Dashboard to prevent 1000-row limit issues and speed up queries.
-- Run this in Supabase Dashboard -> SQL Editor

-- 1. Create function to get latest check-in date per class (Group by class_id)
CREATE OR REPLACE FUNCTION public.get_latest_class_attendances()
RETURNS TABLE (class_id INT, last_check_date DATE)
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT class_id::INT, MAX(check_date)::DATE
  FROM public.attendances
  GROUP BY class_id;
$$;

GRANT EXECUTE ON FUNCTION public.get_latest_class_attendances() TO authenticated;

-- 2. Create function to get distinct filled score column IDs
CREATE OR REPLACE FUNCTION public.get_filled_assignment_ids()
RETURNS TABLE (assignment_id INT)
LANGUAGE sql STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT DISTINCT assignment_id::INT
  FROM public.student_scores
  WHERE assignment_id IS NOT NULL;
$$;

GRANT EXECUTE ON FUNCTION public.get_filled_assignment_ids() TO authenticated;
