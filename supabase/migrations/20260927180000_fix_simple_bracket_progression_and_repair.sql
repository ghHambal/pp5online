-- Keep every four-match knockout bracket on one canonical progression:
-- round 1/2 winners -> round 3 final
-- round 1/2 losers  -> round 4 third-place match
--
-- The previous one-time repair could miss a bracket that was completed after
-- the migration ran.  Reconcile whenever either opening result or a blank
-- downstream pairing changes, including a downstream row left in `live`
-- without any score/event data.

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

  IF v_r1.id IS NULL OR v_r2.id IS NULL
     OR v_r1.status <> 'done' OR v_r2.status <> 'done'
     OR v_r1.winner_team_color_id IS NULL OR v_r2.winner_team_color_id IS NULL
     OR v_r1.team_a_color_id IS NULL OR v_r1.team_b_color_id IS NULL
     OR v_r2.team_a_color_id IS NULL OR v_r2.team_b_color_id IS NULL THEN
    RETURN;
  END IF;

  v_r1_loser := CASE WHEN v_r1.winner_team_color_id = v_r1.team_a_color_id
    THEN v_r1.team_b_color_id ELSE v_r1.team_a_color_id END;
  v_r2_loser := CASE WHEN v_r2.winner_team_color_id = v_r2.team_a_color_id
    THEN v_r2.team_b_color_id ELSE v_r2.team_a_color_id END;

  UPDATE public.matches
  SET round_name = CASE WHEN round = 3 THEN 'นัดชิงชนะเลิศ' ELSE 'นัดชิงอันดับที่ 3' END,
      updated_at = now()
  WHERE event_id = p_event_id AND sport_id = p_sport_id AND round IN (3, 4);

  UPDATE public.matches m
  SET team_a_color_id = CASE WHEN m.round = 3 THEN v_r1.winner_team_color_id ELSE v_r1_loser END,
      team_b_color_id = CASE WHEN m.round = 3 THEN v_r2.winner_team_color_id ELSE v_r2_loser END,
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

CREATE OR REPLACE FUNCTION private.azizgames_sync_bracket_after_match()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, pg_temp
AS $$
DECLARE
  v_template text;
BEGIN
  -- The reconciliation helper updates the downstream rows itself.  Do not
  -- recurse through those internal updates.
  IF pg_trigger_depth() > 1 THEN
    RETURN NEW;
  END IF;

  SELECT bracket_template INTO v_template
  FROM public.sports
  WHERE id = NEW.sport_id AND event_id = NEW.event_id;

  IF v_template = 'single_elim_4' THEN
    IF NEW.round IN (1, 2)
       AND NEW.status = 'done'
       AND NEW.winner_team_color_id IS NOT NULL THEN
      PERFORM private.azizgames_reconcile_simple_bracket(NEW.event_id, NEW.sport_id);
    ELSIF NEW.round IN (3, 4) THEN
      -- Covers old clients/admin RPCs that directly changed a blank
      -- downstream pairing after the opening results were already complete.
      PERFORM private.azizgames_reconcile_simple_bracket(NEW.event_id, NEW.sport_id);
    END IF;
    RETURN NEW;
  END IF;

  IF NEW.status <> 'done'
     OR NEW.winner_team_color_id IS NULL
     OR NEW.round NOT IN (1, 2, 3, 4, 5)
     OR v_template <> 'page_playoff_7' THEN
    RETURN NEW;
  END IF;

  IF NEW.round = 1 THEN
    UPDATE public.matches
    SET team_a_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 3
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_a_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 4
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 2 THEN
    UPDATE public.matches
    SET team_b_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 3
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_b_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 4
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 3 THEN
    UPDATE public.matches
    SET team_a_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 7
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_a_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 5
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 4 THEN
    UPDATE public.matches
    SET team_b_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 5
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_a_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 6
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 5 THEN
    UPDATE public.matches
    SET team_b_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 7
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_b_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 6
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION private.azizgames_sync_bracket_after_match() FROM PUBLIC, anon, authenticated;

-- Repair every already-completed simple bracket whose downstream rows are
-- still blank or were left live without any recorded play.
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
