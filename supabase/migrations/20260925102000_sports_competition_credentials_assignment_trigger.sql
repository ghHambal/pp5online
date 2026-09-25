-- Keep credentials provisioned when an administrator assigns a legacy or new
-- active sport directly, outside the request workflow.

CREATE OR REPLACE FUNCTION public.provision_sports_competition_credentials_for_assignment()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_code TEXT;
BEGIN
  IF NEW.is_active IS TRUE AND NEW.responsible_teacher_id IS NOT NULL THEN
    SELECT t.teacher_code INTO v_teacher_code
    FROM public.teachers t
    WHERE t.profile_id = NEW.responsible_teacher_id;

    IF v_teacher_code ~ '^[0-9]{4}$' THEN
      INSERT INTO public.sports_competition_responsible_credentials
        (event_id, teacher_profile_id, username, password)
      VALUES (NEW.event_id, NEW.responsible_teacher_id, v_teacher_code, 'azgames')
      ON CONFLICT (event_id, teacher_profile_id) DO NOTHING;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS sports_competition_responsible_credentials_assignment_provision
  ON public.sports;
CREATE TRIGGER sports_competition_responsible_credentials_assignment_provision
AFTER INSERT OR UPDATE OF responsible_teacher_id, is_active
ON public.sports
FOR EACH ROW
EXECUTE FUNCTION public.provision_sports_competition_credentials_for_assignment();
