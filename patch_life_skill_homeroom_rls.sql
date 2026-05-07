-- patch_life_skill_homeroom_rls.sql
-- แก้ RLS คะแนนทักษะชีวิตให้ครูที่ปรึกษาห้องสามัญแก้คะแนนนักเรียนในห้องตัวเองได้
-- รัน 1 ครั้งใน Supabase SQL Editor

ALTER TABLE public.life_skill_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "ls_score_teacher" ON public.life_skill_scores;

CREATE POLICY "ls_score_teacher"
  ON public.life_skill_scores
  FOR ALL
  TO authenticated
  USING (
    public.get_user_role() = 'admin'
    OR updated_by IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = auth.uid()
    )
    OR EXISTS (
      SELECT 1
      FROM public.students s
      JOIN public.life_skill_columns c
        ON c.id = life_skill_scores.column_id
      JOIN public.homeroom_teachers ht
        ON ht.main_room = s.main_room
       AND ht.category = 'สามัญ'
       AND ht.academic_year = c.academic_year
       AND ht.semester = c.semester
      JOIN public.teachers t
        ON t.id = ht.teacher_id
      WHERE s.id = life_skill_scores.student_id
        AND t.profile_id = auth.uid()
    )
  )
  WITH CHECK (
    public.get_user_role() = 'admin'
    OR updated_by IN (
      SELECT id
      FROM public.teachers
      WHERE profile_id = auth.uid()
    )
    OR EXISTS (
      SELECT 1
      FROM public.students s
      JOIN public.life_skill_columns c
        ON c.id = life_skill_scores.column_id
      JOIN public.homeroom_teachers ht
        ON ht.main_room = s.main_room
       AND ht.category = 'สามัญ'
       AND ht.academic_year = c.academic_year
       AND ht.semester = c.semester
      JOIN public.teachers t
        ON t.id = ht.teacher_id
      WHERE s.id = life_skill_scores.student_id
        AND t.profile_id = auth.uid()
    )
  );
