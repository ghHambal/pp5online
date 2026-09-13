-- Shared display-only rounding. Does not update student_scores.
BEGIN;
CREATE TABLE IF NOT EXISTS public.class_score_display_settings (
  class_id integer PRIMARY KEY REFERENCES public.classes(id) ON DELETE CASCADE,
  rounding jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(rounding) = 'object')
);
ALTER TABLE public.class_score_display_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS score_display_read ON public.class_score_display_settings;
CREATE POLICY score_display_read ON public.class_score_display_settings FOR SELECT TO authenticated
USING (public.has_class_access(class_id) OR public.get_user_role() = 'admin' OR EXISTS (
  SELECT 1 FROM public.class_students cs JOIN public.students s ON s.id = cs.student_id
  WHERE cs.class_id = class_score_display_settings.class_id AND s.profile_id = auth.uid()
));
DROP POLICY IF EXISTS score_display_insert ON public.class_score_display_settings;
CREATE POLICY score_display_insert ON public.class_score_display_settings FOR INSERT TO authenticated
WITH CHECK (public.has_class_access(class_id) OR public.get_user_role() = 'admin');
DROP POLICY IF EXISTS score_display_update ON public.class_score_display_settings;
CREATE POLICY score_display_update ON public.class_score_display_settings FOR UPDATE TO authenticated
USING (public.has_class_access(class_id) OR public.get_user_role() = 'admin')
WITH CHECK (public.has_class_access(class_id) OR public.get_user_role() = 'admin');
GRANT SELECT, INSERT, UPDATE ON public.class_score_display_settings TO authenticated;
COMMIT;
