-- patch_student_teacher_schedule_rpc.sql
-- RPC ให้นักเรียนดึงตารางสอนเต็มของครูผู้สอนรายวิชาที่ตนเองลงเรียน
-- รัน 1 ครั้งใน Supabase SQL Editor

CREATE OR REPLACE FUNCTION public.get_enrolled_teacher_schedule(p_class_id INT)
RETURNS TABLE (
  day_of_week  INT,
  period_no    INT,
  span_periods INT,
  is_free      BOOLEAN,
  class_id     INT,
  subject_name TEXT,
  class_name   TEXT,
  teacher_name TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INT;
  v_year INT;
  v_semester INT;
BEGIN
  SELECT ms.teacher_id
    INTO v_teacher_id
  FROM public.classes c
  JOIN public.master_subjects ms ON ms.id = c.course_id
  JOIN public.class_students cs ON cs.class_id = c.id
  JOIN public.students s ON s.id = cs.student_id
  WHERE c.id = p_class_id
    AND s.profile_id = auth.uid()
  LIMIT 1;

  IF v_teacher_id IS NULL THEN
    RETURN;
  END IF;

  SELECT value::INT INTO v_year
  FROM public.system_config
  WHERE key = 'academicYear'
  LIMIT 1;

  SELECT value::INT INTO v_semester
  FROM public.system_config
  WHERE key = 'semester'
  LIMIT 1;

  RETURN QUERY
  SELECT
    ts.day_of_week::INT,
    ts.period_no::INT,
    COALESCE(ts.span_periods, 1)::INT,
    COALESCE(ts.is_free, false)::BOOLEAN,
    ts.class_id::INT,
    COALESCE(ts.subject_name, sched_ms.subject_name, 'ไม่ว่าง')::TEXT,
    ts.class_name::TEXT,
    COALESCE(ts.teacher_name, t.full_name)::TEXT
  FROM public.teacher_schedules ts
  LEFT JOIN public.master_subjects sched_ms ON sched_ms.id = ts.subject_id
  LEFT JOIN public.teachers t ON t.id = ts.teacher_id
  WHERE ts.teacher_id = v_teacher_id
    AND (v_year IS NULL OR ts.academic_year IS NULL OR ts.academic_year = v_year)
    AND (v_semester IS NULL OR ts.semester IS NULL OR ts.semester = v_semester)
  ORDER BY ts.day_of_week, ts.period_no;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_enrolled_teacher_schedule(INT) TO authenticated;
