-- Keep downstream homeroom-advisor references in the same academic term.
-- The table is created by the existing council representative patch in some
-- installations, so this migration is intentionally safe when that feature
-- has not been installed yet.

DO $$
BEGIN
  IF to_regclass('public.council_rep_nominations') IS NULL THEN
    RETURN;
  END IF;

  ALTER TABLE public.council_rep_nominations
    ADD COLUMN IF NOT EXISTS semester integer;

  UPDATE public.council_rep_nominations
  SET semester = COALESCE(
    semester,
    (SELECT value::integer FROM public.system_config WHERE key = 'semester'),
    1
  );

  ALTER TABLE public.council_rep_nominations
    ALTER COLUMN semester SET DEFAULT 1,
    ALTER COLUMN semester SET NOT NULL;

  ALTER TABLE public.council_rep_nominations
    DROP CONSTRAINT IF EXISTS council_rep_nominations_main_room_student_id_academic_year_key;

  ALTER TABLE public.council_rep_nominations
    DROP CONSTRAINT IF EXISTS council_rep_nominations_semester_check;

  ALTER TABLE public.council_rep_nominations
    ADD CONSTRAINT council_rep_nominations_semester_check CHECK (semester IN (1, 2));

  ALTER TABLE public.council_rep_nominations
    ADD CONSTRAINT council_rep_nominations_room_student_term_key
    UNIQUE (main_room, student_id, academic_year, semester);

  DROP POLICY IF EXISTS council_rep_nominations_homeroom_teacher
    ON public.council_rep_nominations;

  CREATE POLICY council_rep_nominations_homeroom_teacher
    ON public.council_rep_nominations
    FOR ALL TO authenticated
    USING (
      EXISTS (
        SELECT 1
        FROM public.homeroom_teachers ht
        JOIN public.teachers t ON t.id = ht.teacher_id
        WHERE ht.main_room = council_rep_nominations.main_room
          AND ht.category = 'สามัญ'
          AND ht.academic_year::text = council_rep_nominations.academic_year
          AND ht.semester = council_rep_nominations.semester
          AND t.profile_id = auth.uid()
      )
      OR get_user_role() = 'admin'
    )
    WITH CHECK (
      EXISTS (
        SELECT 1
        FROM public.homeroom_teachers ht
        JOIN public.teachers t ON t.id = ht.teacher_id
        WHERE ht.main_room = council_rep_nominations.main_room
          AND ht.category = 'สามัญ'
          AND ht.academic_year::text = council_rep_nominations.academic_year
          AND ht.semester = council_rep_nominations.semester
          AND t.profile_id = auth.uid()
          AND t.id = council_rep_nominations.nominated_by_teacher_id
      )
      OR get_user_role() = 'admin'
    );
END $$;

CREATE INDEX IF NOT EXISTS council_rep_nominations_term_idx
  ON public.council_rep_nominations (academic_year, semester, main_room);
