-- Allow the sports competition admin to change only the schedule-edit deadline.
-- This deadline does not control responsibility-registration requests.
CREATE OR REPLACE FUNCTION public.set_sports_competition_edit_deadline(
  p_event UUID,
  p_cutoff TIMESTAMPTZ
)
RETURNS TIMESTAMPTZ
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_updated INTEGER;
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_sports_competition_admin() THEN
    RAISE EXCEPTION 'คุณไม่มีสิทธิ์ตั้งค่าวันสิ้นสุดการแก้ไข';
  END IF;

  UPDATE public.sports_portal_settings
  SET competition_edit_closes_at = p_cutoff,
      updated_by = auth.uid(),
      updated_at = now()
  WHERE event_id = p_event;

  GET DIAGNOSTICS v_updated = ROW_COUNT;
  IF v_updated = 0 THEN
    RAISE EXCEPTION 'ไม่พบการตั้งค่ากิจกรรมกีฬาสีนี้';
  END IF;

  RETURN p_cutoff;
END;
$$;

REVOKE ALL ON FUNCTION public.set_sports_competition_edit_deadline(UUID, TIMESTAMPTZ) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.set_sports_competition_edit_deadline(UUID, TIMESTAMPTZ) TO authenticated;
