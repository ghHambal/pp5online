-- patch_student_teacher_schedule_read.sql
-- ให้นักเรียนอ่านตารางสอนเต็มของครูที่สอนรายวิชาที่นักเรียนลงเรียนได้
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.teacher_schedules ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "teacher_schedules_student_read_enrolled_teacher"
ON public.teacher_schedules;

CREATE POLICY "teacher_schedules_student_read_enrolled_teacher"
ON public.teacher_schedules
FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.students s
    JOIN public.class_students cs ON cs.student_id = s.id
    JOIN public.classes c ON c.id = cs.class_id
    JOIN public.master_subjects ms ON ms.id = c.course_id
    WHERE s.profile_id = auth.uid()
      AND ms.teacher_id = teacher_schedules.teacher_id
  )
);
