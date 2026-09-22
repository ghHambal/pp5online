-- Keep the initial competition workspace lightweight.
-- Athlete registrations remain in public.registrations and are intentionally
-- not loaded by the schedule workspace. The page only needs schedule data.

CREATE OR REPLACE FUNCTION public.get_sports_competition_manager_workspace(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_event public.events%ROWTYPE;
  v_cutoff TIMESTAMPTZ;
  v_is_admin BOOLEAN;
  v_has_assignment BOOLEAN;
  v_sports JSONB;
  v_matches JSONB;
  v_colors JSONB;
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'ต้องเข้าสู่ระบบก่อน';
  END IF;

  SELECT * INTO v_event FROM public.events
  WHERE id = p_event AND status = 'active';
  IF v_event.id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน';
  END IF;

  v_is_admin := public.is_sports_competition_admin();
  SELECT s.competition_edit_closes_at INTO v_cutoff
  FROM public.sports_portal_settings s
  WHERE s.event_id = p_event
  LIMIT 1;

  SELECT EXISTS (
    SELECT 1 FROM public.sports s
    WHERE s.event_id = p_event
      AND s.is_active IS TRUE
      AND s.responsible_teacher_id = auth.uid()
  ) INTO v_has_assignment;

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', s.id,
    'code', s.code,
    'name', s.name,
    'category', s.category,
    'gender', s.gender,
    'venue', s.venue,
    'max_athletes', s.max_athletes,
    'responsible_teacher_id', s.responsible_teacher_id,
    'match_count', (SELECT COUNT(*)::INTEGER FROM public.matches m WHERE m.event_id = s.event_id AND m.sport_id = s.id)
    ) ORDER BY s.display_order, s.code, s.name), '[]'::JSONB)
  INTO v_sports
  FROM public.sports s
  WHERE s.event_id = p_event
    AND s.is_active IS TRUE
    AND (v_is_admin OR s.responsible_teacher_id = auth.uid());

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', m.id,
    'sport_id', m.sport_id,
    'sport_name', s.name,
    'sport_code', s.code,
    'round', m.round,
    'round_name', m.round_name,
    'team_a_color_id', m.team_a_color_id,
    'team_b_color_id', m.team_b_color_id,
    'team_a_name', a.name,
    'team_b_name', b.name,
    'scheduled_date', m.scheduled_date,
    'scheduled_time', m.scheduled_time,
    'venue', m.venue,
    'note', m.note,
    'status', m.status,
    'score_a', m.score_a,
    'score_b', m.score_b,
    'winner_team_color_id', m.winner_team_color_id
    ) ORDER BY s.display_order, s.code, m.round, m.scheduled_date NULLS LAST, m.scheduled_time NULLS LAST, m.created_at), '[]'::JSONB)
  INTO v_matches
  FROM public.matches m
  JOIN public.sports s ON s.id = m.sport_id AND s.event_id = p_event
  LEFT JOIN public.team_colors a ON a.id = m.team_a_color_id
  LEFT JOIN public.team_colors b ON b.id = m.team_b_color_id
  WHERE v_is_admin OR s.responsible_teacher_id = auth.uid();

  SELECT COALESCE(jsonb_agg(jsonb_build_object(
    'id', c.id,
    'name', c.name,
    'gender', c.gender,
    'hex_color', c.hex_color,
    'logo_url', c.logo_url
    ) ORDER BY c.display_order, c.name), '[]'::JSONB)
  INTO v_colors
  FROM public.team_colors c
  WHERE c.event_id = p_event;

  RETURN jsonb_build_object(
    'event', jsonb_build_object(
      'id', v_event.id,
      'name', v_event.name,
      'academic_year', v_event.academic_year,
      'status', v_event.status,
      'start_date', v_event.start_date,
      'end_date', v_event.end_date
    ),
    'cutoff_at', v_cutoff,
    'is_admin', v_is_admin,
    'has_assignment', v_has_assignment,
    'can_edit', v_is_admin OR (v_has_assignment AND v_cutoff IS NOT NULL AND now() < v_cutoff),
    'sports', v_sports,
    'matches', v_matches,
    'colors', v_colors,
    'roster_loaded', FALSE
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_sports_competition_manager_workspace(UUID) TO authenticated;
