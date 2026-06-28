-- patch_student_enrolled_classes_rpc.sql
-- คืนรายวิชาของนักเรียนผ่าน RPC โดยตรวจว่า p_student_id เป็นของ auth.uid() ปัจจุบัน
-- ใช้เป็นทางหลักของ Student Portal เพื่อลดปัญหา deep embedded select/RLS ในฝั่ง client

CREATE OR REPLACE FUNCTION public.get_student_enrolled_classes(p_student_id integer)
RETURNS jsonb
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'id', c.id,
        'class_name', c.class_name,
        'skill_group', c.skill_group,
        'google_sheet_id', c.google_sheet_id,
        'day1_date', c.day1_date,
        'day2_date', c.day2_date,
        'day3_date', c.day3_date,
        'day4_date', c.day4_date,
        'day5_date', c.day5_date,
        'day6_date', c.day6_date,
        'master_subjects',
          CASE WHEN ms.id IS NULL THEN NULL ELSE jsonb_build_object(
            'id', ms.id,
            'subject_code', ms.subject_code,
            'subject_name', ms.subject_name,
            'dept', ms.dept,
            'grade_level', ms.grade_level,
            'credit', ms.credit,
            'teacher_id', ms.teacher_id,
            'subject_group', ms.subject_group,
            'teachers',
              CASE WHEN t.id IS NULL THEN NULL ELSE jsonb_build_object(
                'id', t.id,
                'full_name', t.full_name,
                'phone', t.phone,
                'image_url', t.image_url,
                'category', t.category
              ) END
          ) END
      )
      ORDER BY c.class_name, c.id
    ),
    '[]'::jsonb
  )
  FROM public.students AS s
  JOIN public.class_students AS cs ON cs.student_id = s.id
  JOIN public.classes AS c ON c.id = cs.class_id
  LEFT JOIN public.master_subjects AS ms ON ms.id = c.course_id
  LEFT JOIN public.teachers AS t ON t.id = ms.teacher_id
  WHERE s.id = p_student_id
    AND s.profile_id = auth.uid()
    AND s.is_active = true;
$$;

REVOKE ALL ON FUNCTION public.get_student_enrolled_classes(integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_student_enrolled_classes(integer) TO authenticated;
