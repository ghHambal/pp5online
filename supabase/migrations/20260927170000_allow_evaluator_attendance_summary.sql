-- Allow assigned PP5 sports evaluators to view the attendance percentage summary.
-- This returns attendance data only; financial/team-ledger data remains admin-only.

CREATE OR REPLACE FUNCTION public.get_sports_attendance_overview(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT (
    public.is_sports_overview_admin()
    OR EXISTS (
      SELECT 1
      FROM public.sports_score_evaluators e
      WHERE e.event_id = p_event
        AND e.profile_id = auth.uid()
        AND e.is_active IS TRUE
    )
  ) THEN
    RAISE EXCEPTION 'not authorized';
  END IF;

  RETURN jsonb_build_object(
    'colors', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', c.id,
        'name', c.name,
        'hex_color', c.hex_color,
        'gender', c.gender,
        'member_count', (
          SELECT COUNT(*)
          FROM public.students s
          WHERE s.is_active IS TRUE
            AND (s.team_color_id = c.id OR s.house_color = c.name)
        )
      ) ORDER BY c.gender, c.display_order)
      FROM public.team_colors c
      WHERE c.event_id = p_event
    ), '[]'::jsonb),
    'attendance', COALESCE((
      SELECT jsonb_agg(row_to_json(t))
      FROM (
        SELECT team_color_id, session_date, COUNT(*) AS checked_count
        FROM public.sports_attendance
        WHERE event_id = p_event
        GROUP BY team_color_id, session_date
      ) t
    ), '[]'::jsonb)
  );
END;
$$;

REVOKE ALL ON FUNCTION public.get_sports_attendance_overview(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_sports_attendance_overview(UUID) TO authenticated;
