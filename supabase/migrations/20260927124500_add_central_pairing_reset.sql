-- Let the central results desk reset one mistaken pairing before choosing the
-- correct teams. A match with a real result or event history remains protected.
BEGIN;

CREATE OR REPLACE FUNCTION public.sports_central_reset_pairing(
  p_gate_password TEXT,
  p_match_id UUID
)
RETURNS public.matches
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_match public.matches;
  v_old public.matches;
  v_result public.matches;
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM private.azizgames_result_override_config c
    WHERE extensions.crypt(coalesce(p_gate_password, ''), c.password_hash) = c.password_hash
  ) THEN
    RAISE EXCEPTION 'รหัสผ่านโหมดกองกลางไม่ถูกต้อง' USING errcode = '42501';
  END IF;

  SELECT * INTO v_match
  FROM public.matches
  WHERE id = p_match_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'ไม่พบคู่แข่งขันที่ต้องการรีเซ็ต';
  END IF;

  IF coalesce(v_match.status, 'pending') IN ('done', 'เสร็จสิ้น')
     OR nullif(btrim(coalesce(v_match.score_a::text, '')), '') IS NOT NULL
     OR nullif(btrim(coalesce(v_match.score_b::text, '')), '') IS NOT NULL
     OR v_match.winner_team_color_id IS NOT NULL
     OR coalesce(jsonb_array_length(coalesce(v_match.rounds_log, '[]'::jsonb)), 0) > 0
     OR coalesce(jsonb_array_length(coalesce(v_match.sets_history, '[]'::jsonb)), 0) > 0
     OR EXISTS (SELECT 1 FROM public.match_events e WHERE e.match_id = v_match.id) THEN
    RAISE EXCEPTION 'คู่แข่งขันนี้มีผลหรือเหตุการณ์บันทึกแล้ว จึงรีเซ็ตการประกบคู่ไม่ได้';
  END IF;

  v_old := v_match;

  UPDATE public.matches
  SET status = 'pending',
      team_a_color_id = NULL,
      team_b_color_id = NULL,
      score_a = NULL,
      score_b = NULL,
      winner_team_color_id = NULL,
      recorded_by = NULL,
      clock_status = 'not_started',
      clock_started_at = NULL,
      clock_elapsed_before = 0,
      clock_half = 1,
      clock_half_started_elapsed = 0,
      fouls_a = 0,
      fouls_b = 0,
      race_score_a = 0,
      race_score_b = 0,
      race_end_history = '[]'::jsonb,
      rounds_won_a = 0,
      rounds_won_b = 0,
      rounds_draws = 0,
      sets_history = '[]'::jsonb,
      current_set_a = 0,
      current_set_b = 0,
      race_games_won_a = 0,
      race_games_won_b = 0,
      race_games_history = '[]'::jsonb,
      updated_at = now()
  WHERE id = p_match_id
  RETURNING * INTO v_result;

  INSERT INTO public.sports_competition_schedule_audit(
    event_id, sport_id, match_id, action, old_data, new_data, actor_id
  )
  VALUES(
    v_result.event_id, v_result.sport_id, v_result.id, 'reset_pairing',
    to_jsonb(v_old), to_jsonb(v_result), auth.uid()
  );

  RETURN v_result;
END;
$$;

REVOKE ALL ON FUNCTION public.sports_central_reset_pairing(TEXT, UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_central_reset_pairing(TEXT, UUID) TO anon, authenticated;
COMMIT;
