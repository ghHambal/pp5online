-- Reconcile simple brackets even when only one opening match has finished.
-- Each opening result fills its own A/B slot independently; the other slot
-- stays blank until its opening match is complete.

CREATE OR REPLACE FUNCTION private.azizgames_reconcile_simple_bracket(
  p_event_id uuid,
  p_sport_id uuid
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, pg_temp
AS $$
DECLARE
  v_r1 public.matches;
  v_r2 public.matches;
  v_r1_done boolean;
  v_r2_done boolean;
  v_r1_loser uuid;
  v_r2_loser uuid;
BEGIN
  SELECT * INTO v_r1
  FROM public.matches
  WHERE event_id = p_event_id AND sport_id = p_sport_id AND round = 1
  ORDER BY created_at, id
  LIMIT 1;

  SELECT * INTO v_r2
  FROM public.matches
  WHERE event_id = p_event_id AND sport_id = p_sport_id AND round = 2
  ORDER BY created_at, id
  LIMIT 1;

  IF v_r1.id IS NULL OR v_r2.id IS NULL THEN
    RETURN;
  END IF;

  v_r1_done := v_r1.status = 'done'
    AND v_r1.winner_team_color_id IS NOT NULL
    AND v_r1.team_a_color_id IS NOT NULL
    AND v_r1.team_b_color_id IS NOT NULL;
  v_r2_done := v_r2.status = 'done'
    AND v_r2.winner_team_color_id IS NOT NULL
    AND v_r2.team_a_color_id IS NOT NULL
    AND v_r2.team_b_color_id IS NOT NULL;

  IF NOT v_r1_done AND NOT v_r2_done THEN
    RETURN;
  END IF;

  v_r1_loser := CASE WHEN v_r1_done AND v_r1.winner_team_color_id = v_r1.team_a_color_id
    THEN v_r1.team_b_color_id
    WHEN v_r1_done THEN v_r1.team_a_color_id
    ELSE NULL END;
  v_r2_loser := CASE WHEN v_r2_done AND v_r2.winner_team_color_id = v_r2.team_a_color_id
    THEN v_r2.team_b_color_id
    WHEN v_r2_done THEN v_r2.team_a_color_id
    ELSE NULL END;

  UPDATE public.matches
  SET round_name = CASE WHEN round = 3 THEN 'นัดชิงชนะเลิศ' ELSE 'นัดชิงอันดับที่ 3' END,
      updated_at = now()
  WHERE event_id = p_event_id AND sport_id = p_sport_id AND round IN (3, 4);

  UPDATE public.matches m
  SET team_a_color_id = CASE WHEN m.round = 3 AND v_r1_done THEN v_r1.winner_team_color_id
                             WHEN m.round = 4 AND v_r1_done THEN v_r1_loser
                             ELSE NULL END,
      team_b_color_id = CASE WHEN m.round = 3 AND v_r2_done THEN v_r2.winner_team_color_id
                             WHEN m.round = 4 AND v_r2_done THEN v_r2_loser
                             ELSE NULL END,
      status = 'pending',
      score_a = NULL,
      score_b = NULL,
      winner_team_color_id = NULL,
      clock_status = 'not_started',
      clock_started_at = NULL,
      clock_elapsed_before = 0,
      updated_at = now()
  WHERE m.event_id = p_event_id
    AND m.sport_id = p_sport_id
    AND m.round IN (3, 4)
    AND coalesce(m.status, 'pending') <> 'done'
    AND nullif(btrim(coalesce(m.score_a, '')), '') IS NULL
    AND nullif(btrim(coalesce(m.score_b, '')), '') IS NULL
    AND m.winner_team_color_id IS NULL
    AND m.clock_started_at IS NULL
    AND coalesce(m.clock_elapsed_before, 0) = 0
    AND coalesce(jsonb_array_length(coalesce(m.rounds_log, '[]'::jsonb)), 0) = 0
    AND coalesce(jsonb_array_length(coalesce(m.sets_history, '[]'::jsonb)), 0) = 0
    AND coalesce(jsonb_array_length(coalesce(m.race_end_history, '[]'::jsonb)), 0) = 0
    AND coalesce(jsonb_array_length(coalesce(m.race_games_history, '[]'::jsonb)), 0) = 0
    AND NOT EXISTS (SELECT 1 FROM public.match_events e WHERE e.match_id = m.id);
END;
$$;

REVOKE ALL ON FUNCTION private.azizgames_reconcile_simple_bracket(uuid, uuid) FROM PUBLIC, anon, authenticated;

DO $$
DECLARE
  r record;
BEGIN
  FOR r IN
    SELECT DISTINCT s.event_id, s.id AS sport_id
    FROM public.sports s
    WHERE s.is_active IS TRUE
      AND s.bracket_template = 'single_elim_4'
  LOOP
    PERFORM private.azizgames_reconcile_simple_bracket(r.event_id, r.sport_id);
  END LOOP;
END;
$$;
