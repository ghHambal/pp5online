-- patch_security_rls.sql
-- Harden Supabase RLS for ปพ.5 ออนไลน์ without dropping or rewriting data.
-- Run once in Supabase SQL Editor after reviewing against the current database.

-- 1) Prevent non-admin users from changing their own role.
-- RLS cannot limit updates by column, so this trigger blocks role escalation even
-- if a user can update their own profiles row.
CREATE OR REPLACE FUNCTION public.prevent_profile_role_escalation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.role IS DISTINCT FROM OLD.role
     AND COALESCE(public.get_user_role(), '') <> 'admin' THEN
    RAISE EXCEPTION 'Only admins can change profile roles';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS prevent_profile_role_escalation ON public.profiles;
CREATE TRIGGER prevent_profile_role_escalation
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_profile_role_escalation();

-- 2) Let teachers manage only their own courses and classes.
-- Existing admin policies remain in place.
DROP POLICY IF EXISTS "subjects_teacher_own_insert" ON public.master_subjects;
DROP POLICY IF EXISTS "subjects_teacher_own_update" ON public.master_subjects;
DROP POLICY IF EXISTS "subjects_teacher_own_delete" ON public.master_subjects;

CREATE POLICY "subjects_teacher_own_insert"
ON public.master_subjects
FOR INSERT TO authenticated
WITH CHECK (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
);

CREATE POLICY "subjects_teacher_own_update"
ON public.master_subjects
FOR UPDATE TO authenticated
USING (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
)
WITH CHECK (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
);

CREATE POLICY "subjects_teacher_own_delete"
ON public.master_subjects
FOR DELETE TO authenticated
USING (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "classes_teacher_own_insert" ON public.classes;
DROP POLICY IF EXISTS "classes_teacher_own_update" ON public.classes;
DROP POLICY IF EXISTS "classes_teacher_own_delete" ON public.classes;

CREATE POLICY "classes_teacher_own_insert"
ON public.classes
FOR INSERT TO authenticated
WITH CHECK (
  course_id IN (
    SELECT ms.id
    FROM public.master_subjects ms
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

CREATE POLICY "classes_teacher_own_update"
ON public.classes
FOR UPDATE TO authenticated
USING (
  course_id IN (
    SELECT ms.id
    FROM public.master_subjects ms
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
)
WITH CHECK (
  course_id IN (
    SELECT ms.id
    FROM public.master_subjects ms
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

CREATE POLICY "classes_teacher_own_delete"
ON public.classes
FOR DELETE TO authenticated
USING (
  course_id IN (
    SELECT ms.id
    FROM public.master_subjects ms
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

-- 3) Replace broad "authenticated can do everything" policies with ownership checks.
DROP POLICY IF EXISTS "cs_all" ON public.class_students;
DROP POLICY IF EXISTS "sc_cols_all" ON public.class_score_columns;
DROP POLICY IF EXISTS "scores_all" ON public.student_scores;
DROP POLICY IF EXISTS "attend_all" ON public.attendances;
DROP POLICY IF EXISTS "exam_all" ON public.exam_requests;
DROP POLICY IF EXISTS "sched_all" ON public.teacher_schedules;

DROP POLICY IF EXISTS "class_students_admin_all" ON public.class_students;
DROP POLICY IF EXISTS "class_students_teacher_own" ON public.class_students;
CREATE POLICY "class_students_admin_all"
ON public.class_students
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "class_students_teacher_own"
ON public.class_students
FOR ALL TO authenticated
USING (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
)
WITH CHECK (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "score_columns_admin_all" ON public.class_score_columns;
DROP POLICY IF EXISTS "score_columns_teacher_own" ON public.class_score_columns;
CREATE POLICY "score_columns_admin_all"
ON public.class_score_columns
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "score_columns_teacher_own"
ON public.class_score_columns
FOR ALL TO authenticated
USING (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
)
WITH CHECK (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "student_scores_admin_all" ON public.student_scores;
DROP POLICY IF EXISTS "student_scores_teacher_own" ON public.student_scores;
CREATE POLICY "student_scores_admin_all"
ON public.student_scores
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "student_scores_teacher_own"
ON public.student_scores
FOR ALL TO authenticated
USING (
  assignment_id IN (
    SELECT csc.id
    FROM public.class_score_columns csc
    JOIN public.classes c ON c.id = csc.class_id
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
)
WITH CHECK (
  assignment_id IN (
    SELECT csc.id
    FROM public.class_score_columns csc
    JOIN public.classes c ON c.id = csc.class_id
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "attendances_admin_all" ON public.attendances;
DROP POLICY IF EXISTS "attendances_teacher_own" ON public.attendances;
CREATE POLICY "attendances_admin_all"
ON public.attendances
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "attendances_teacher_own"
ON public.attendances
FOR ALL TO authenticated
USING (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
)
WITH CHECK (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "exam_requests_admin_all" ON public.exam_requests;
DROP POLICY IF EXISTS "exam_requests_teacher_own" ON public.exam_requests;
CREATE POLICY "exam_requests_admin_all"
ON public.exam_requests
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "exam_requests_teacher_own"
ON public.exam_requests
FOR ALL TO authenticated
USING (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
)
WITH CHECK (
  class_id IN (
    SELECT c.id
    FROM public.classes c
    JOIN public.master_subjects ms ON ms.id = c.course_id
    JOIN public.teachers t ON t.id = ms.teacher_id
    WHERE t.profile_id = auth.uid()
  )
);

DROP POLICY IF EXISTS "teacher_schedules_admin_all" ON public.teacher_schedules;
DROP POLICY IF EXISTS "teacher_schedules_teacher_own" ON public.teacher_schedules;
DROP POLICY IF EXISTS "sched_own" ON public.teacher_schedules;
CREATE POLICY "teacher_schedules_admin_all"
ON public.teacher_schedules
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');
CREATE POLICY "teacher_schedules_teacher_own"
ON public.teacher_schedules
FOR ALL TO authenticated
USING (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
)
WITH CHECK (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
);
