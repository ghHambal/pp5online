-- Fix the senior futsal configuration and make knockout progression resilient.
-- The imported senior futsal rows were stored as set-based matches and both
-- opening matches used round = 1, so the central result workflow had no
-- downstream rows to populate.

CREATE OR REPLACE FUNCTION private.azizgames_derive_match_winner()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF NEW.status = 'done'
     AND NEW.winner_team_color_id IS NULL
     AND NEW.team_a_color_id IS NOT NULL
     AND NEW.team_b_color_id IS NOT NULL
     AND trim(coalesce(NEW.score_a, '')) ~ '^-?[0-9]+([.][0-9]+)?$'
     AND trim(coalesce(NEW.score_b, '')) ~ '^-?[0-9]+([.][0-9]+)?$'
     AND trim(NEW.score_a)::numeric <> trim(NEW.score_b)::numeric THEN
    NEW.winner_team_color_id := CASE
      WHEN trim(NEW.score_a)::numeric > trim(NEW.score_b)::numeric
        THEN NEW.team_a_color_id
      ELSE NEW.team_b_color_id
    END;
  END IF;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION private.azizgames_derive_match_winner() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS trg_azizgames_derive_match_winner ON public.matches;
CREATE TRIGGER trg_azizgames_derive_match_winner
BEFORE INSERT OR UPDATE OF status, score_a, score_b, winner_team_color_id,
  team_a_color_id, team_b_color_id ON public.matches
FOR EACH ROW EXECUTE FUNCTION private.azizgames_derive_match_winner();

CREATE OR REPLACE FUNCTION private.azizgames_sync_bracket_after_match()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF NEW.status <> 'done'
     OR NEW.winner_team_color_id IS NULL
     OR NEW.round NOT IN (1, 2, 3, 4, 5)
     OR NOT EXISTS (
       SELECT 1 FROM public.sports s
       WHERE s.id = NEW.sport_id
         AND s.event_id = NEW.event_id
         AND s.bracket_template IN ('page_playoff_7', 'single_elim_4')
     ) THEN
    RETURN NEW;
  END IF;

  IF NEW.round = 1 THEN
    UPDATE public.matches
    SET team_a_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 3
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_a_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END,
      updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 4
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 2 THEN
    UPDATE public.matches
    SET team_b_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 3
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_b_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END,
      updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 4
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 3 THEN
    UPDATE public.matches
    SET team_a_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 7
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_a_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END,
      updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 5
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 4 THEN
    UPDATE public.matches
    SET team_b_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 5
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_a_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END,
      updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 6
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  ELSIF NEW.round = 5 THEN
    UPDATE public.matches
    SET team_b_color_id = NEW.winner_team_color_id, updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 7
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
    UPDATE public.matches
    SET team_b_color_id = CASE WHEN NEW.winner_team_color_id = NEW.team_a_color_id
      THEN NEW.team_b_color_id ELSE NEW.team_a_color_id END,
      updated_at = now()
    WHERE event_id = NEW.event_id AND sport_id = NEW.sport_id AND round = 6
      AND coalesce(status, 'pending') NOT IN ('live', 'done');
  END IF;

  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION private.azizgames_sync_bracket_after_match() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS trg_azizgames_sync_bracket_after_match ON public.matches;
CREATE TRIGGER trg_azizgames_sync_bracket_after_match
AFTER INSERT OR UPDATE OF status, score_a, score_b, winner_team_color_id,
  team_a_color_id, team_b_color_id ON public.matches
FOR EACH ROW EXECUTE FUNCTION private.azizgames_sync_bracket_after_match();

DO $$
DECLARE
  v_event uuid := '00000000-0000-0000-0000-000000000001';
  v_sport uuid;
  m1 public.matches;
  m2 public.matches;
  m3 public.matches;
  m4 public.matches;
  m5 public.matches;
BEGIN
  SELECT id INTO v_sport
  FROM public.sports
  WHERE event_id = v_event
    AND code = 'SP004'
    AND gender = 'M'
    AND education_level = 'ม.ปลาย'
  LIMIT 1;

  IF v_sport IS NULL THEN
    RAISE NOTICE 'Senior futsal sport SP004 was not found; skipped data repair';
    RETURN;
  END IF;

  UPDATE public.sports
  SET bracket_mechanic = 'score',
      has_scorer_events = true,
      has_team_fouls = true,
      result_format = 'bracket',
      updated_at = now()
  WHERE id = v_sport;

  UPDATE public.matches
  SET sets_best_of = null,
      set_point_target = null,
      set_win_by = null,
      sets_history = '[]'::jsonb,
      current_set_a = 0,
      current_set_b = 0,
      rounds_best_of = null,
      rounds_won_a = 0,
      rounds_won_b = 0,
      rounds_draws = 0,
      rounds_log = '[]'::jsonb,
      race_target = null,
      race_score_a = 0,
      race_score_b = 0,
      race_end_history = '[]'::jsonb,
      race_games_best_of = 1,
      race_games_won_a = 0,
      race_games_won_b = 0,
      race_games_history = '[]'::jsonb,
      updated_at = now()
  WHERE event_id = v_event AND sport_id = v_sport;

  UPDATE public.matches m
  SET round = CASE
    WHEN m.round_name ILIKE '%นัดที่ 1%' THEN 1
    WHEN m.round_name ILIKE '%นัดที่ 2%' THEN 2
    ELSE m.round
  END,
  updated_at = now()
  WHERE m.event_id = v_event AND m.sport_id = v_sport;

  UPDATE public.matches m
  SET winner_team_color_id = CASE
    WHEN trim(m.score_a)::numeric > trim(m.score_b)::numeric THEN m.team_a_color_id
    ELSE m.team_b_color_id
  END,
  updated_at = now()
  WHERE m.event_id = v_event AND m.sport_id = v_sport
    AND m.status = 'done'
    AND m.winner_team_color_id IS NULL
    AND m.team_a_color_id IS NOT NULL AND m.team_b_color_id IS NOT NULL
    AND trim(coalesce(m.score_a, '')) ~ '^-?[0-9]+([.][0-9]+)?$'
    AND trim(coalesce(m.score_b, '')) ~ '^-?[0-9]+([.][0-9]+)?$'
    AND trim(m.score_a)::numeric <> trim(m.score_b)::numeric;

  SELECT * INTO m1 FROM public.matches
  WHERE event_id = v_event AND sport_id = v_sport AND round = 1
  ORDER BY created_at, id LIMIT 1;
  SELECT * INTO m2 FROM public.matches
  WHERE event_id = v_event AND sport_id = v_sport AND round = 2
  ORDER BY created_at, id LIMIT 1;

  IF m1.id IS NULL OR m2.id IS NULL THEN
    RAISE EXCEPTION 'Senior futsal does not have two opening matches';
  END IF;

  INSERT INTO public.matches (event_id, sport_id, round, round_name,
    team_a_color_id, team_b_color_id, status)
  SELECT v_event, v_sport, 3, 'รอบรองสายบน',
    m1.winner_team_color_id, m2.winner_team_color_id, 'pending'
  WHERE NOT EXISTS (SELECT 1 FROM public.matches
    WHERE event_id=v_event AND sport_id=v_sport AND round=3);

  INSERT INTO public.matches (event_id, sport_id, round, round_name,
    team_a_color_id, team_b_color_id, status)
  SELECT v_event, v_sport, 4, 'รอบแก้ตัวสายล่าง',
    CASE WHEN m1.winner_team_color_id = m1.team_a_color_id
      THEN m1.team_b_color_id ELSE m1.team_a_color_id END,
    CASE WHEN m2.winner_team_color_id = m2.team_a_color_id
      THEN m2.team_b_color_id ELSE m2.team_a_color_id END, 'pending'
  WHERE NOT EXISTS (SELECT 1 FROM public.matches
    WHERE event_id=v_event AND sport_id=v_sport AND round=4);

  SELECT * INTO m3 FROM public.matches
  WHERE event_id=v_event AND sport_id=v_sport AND round=3
  ORDER BY created_at, id LIMIT 1;
  SELECT * INTO m4 FROM public.matches
  WHERE event_id=v_event AND sport_id=v_sport AND round=4
  ORDER BY created_at, id LIMIT 1;

  INSERT INTO public.matches (event_id, sport_id, round, round_name,
    team_a_color_id, team_b_color_id, status)
  SELECT v_event, v_sport, 5, 'รอบชิงสายล่าง',
    CASE WHEN m3.winner_team_color_id = m3.team_a_color_id
      THEN m3.team_b_color_id ELSE m3.team_a_color_id END,
    m4.winner_team_color_id, 'pending'
  WHERE NOT EXISTS (SELECT 1 FROM public.matches
    WHERE event_id=v_event AND sport_id=v_sport AND round=5);

  SELECT * INTO m5 FROM public.matches
  WHERE event_id=v_event AND sport_id=v_sport AND round=5
  ORDER BY created_at, id LIMIT 1;

  INSERT INTO public.matches (event_id, sport_id, round, round_name,
    team_a_color_id, team_b_color_id, status)
  SELECT v_event, v_sport, 6, 'นัดชิงอันดับที่ 3',
    CASE WHEN m4.winner_team_color_id = m4.team_a_color_id
      THEN m4.team_b_color_id ELSE m4.team_a_color_id END,
    CASE WHEN m5.winner_team_color_id = m5.team_a_color_id
      THEN m5.team_b_color_id ELSE m5.team_a_color_id END, 'pending'
  WHERE NOT EXISTS (SELECT 1 FROM public.matches
    WHERE event_id=v_event AND sport_id=v_sport AND round=6);

  INSERT INTO public.matches (event_id, sport_id, round, round_name,
    team_a_color_id, team_b_color_id, status)
  SELECT v_event, v_sport, 7, 'นัดชิงชนะเลิศ',
    m3.winner_team_color_id, m5.winner_team_color_id, 'pending'
  WHERE NOT EXISTS (SELECT 1 FROM public.matches
    WHERE event_id=v_event AND sport_id=v_sport AND round=7);
END;
$$;
