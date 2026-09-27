-- Complete the bracket repair after normalising score text and first-round slots.

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
     AND NEW.score_a ~ '^-?[0-9]+(\.[0-9]+)?$'
     AND NEW.score_b ~ '^-?[0-9]+(\.[0-9]+)?$'
     AND NEW.score_a::numeric <> NEW.score_b::numeric THEN
    NEW.winner_team_color_id := CASE
      WHEN NEW.score_a::numeric > NEW.score_b::numeric THEN NEW.team_a_color_id
      ELSE NEW.team_b_color_id
    END;
  END IF;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION private.azizgames_derive_match_winner() FROM PUBLIC, anon, authenticated;

DO $$
DECLARE
  v_event CONSTANT uuid := '00000000-0000-0000-0000-000000000001';
  sport_rec RECORD;
  m1 public.matches;
  m2 public.matches;
  m3 public.matches;
  m4 public.matches;
  m5 public.matches;
BEGIN
  UPDATE public.matches m
  SET winner_team_color_id = CASE
        WHEN m.score_a::numeric > m.score_b::numeric THEN m.team_a_color_id
        ELSE m.team_b_color_id
      END,
      updated_at = now()
  FROM public.sports sp
  WHERE m.event_id = v_event
    AND sp.id = m.sport_id
    AND sp.gender IN ('M', 'W')
    AND m.status = 'done'
    AND m.winner_team_color_id IS NULL
    AND m.team_a_color_id IS NOT NULL
    AND m.team_b_color_id IS NOT NULL
    AND m.score_a ~ '^-?[0-9]+(\.[0-9]+)?$'
    AND m.score_b ~ '^-?[0-9]+(\.[0-9]+)?$'
    AND m.score_a::numeric <> m.score_b::numeric;

  FOR sport_rec IN
    SELECT sp.id, sp.bracket_template
    FROM public.sports sp
    WHERE sp.event_id = v_event
      AND sp.is_active IS TRUE
      AND sp.gender IN ('M', 'W')
      AND sp.bracket_template IN ('page_playoff_7', 'single_elim_4')
      AND EXISTS (SELECT 1 FROM public.matches x WHERE x.event_id = v_event AND x.sport_id = sp.id AND x.round = 1)
      AND EXISTS (SELECT 1 FROM public.matches x WHERE x.event_id = v_event AND x.sport_id = sp.id AND x.round = 2)
  LOOP
    SELECT * INTO m1 FROM public.matches
    WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 1
    ORDER BY created_at, id LIMIT 1;
    SELECT * INTO m2 FROM public.matches
    WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 2
    ORDER BY created_at, id LIMIT 1;

    UPDATE public.matches x
    SET team_a_color_id = m1.winner_team_color_id,
        team_b_color_id = m2.winner_team_color_id,
        updated_at = now()
    WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 3
      AND coalesce(x.status, 'pending') NOT IN ('live', 'done');

    UPDATE public.matches x
    SET team_a_color_id = CASE
          WHEN m1.winner_team_color_id IS NULL THEN NULL
          WHEN m1.winner_team_color_id = m1.team_a_color_id THEN m1.team_b_color_id
          ELSE m1.team_a_color_id
        END,
        team_b_color_id = CASE
          WHEN m2.winner_team_color_id IS NULL THEN NULL
          WHEN m2.winner_team_color_id = m2.team_a_color_id THEN m2.team_b_color_id
          ELSE m2.team_a_color_id
        END,
        updated_at = now()
    WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 4
      AND coalesce(x.status, 'pending') NOT IN ('live', 'done');

    IF sport_rec.bracket_template = 'page_playoff_7' THEN
      SELECT * INTO m3 FROM public.matches
      WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 3
      ORDER BY created_at, id LIMIT 1;
      SELECT * INTO m4 FROM public.matches
      WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 4
      ORDER BY created_at, id LIMIT 1;

      UPDATE public.matches x
      SET team_a_color_id = CASE
            WHEN m3.winner_team_color_id IS NULL THEN NULL
            WHEN m3.winner_team_color_id = m3.team_a_color_id THEN m3.team_b_color_id
            ELSE m3.team_a_color_id
          END,
          team_b_color_id = m4.winner_team_color_id,
          updated_at = now()
      WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 5
        AND coalesce(x.status, 'pending') NOT IN ('live', 'done');

      SELECT * INTO m5 FROM public.matches
      WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 5
      ORDER BY created_at, id LIMIT 1;

      UPDATE public.matches x
      SET team_a_color_id = CASE
            WHEN m4.winner_team_color_id IS NULL THEN NULL
            WHEN m4.winner_team_color_id = m4.team_a_color_id THEN m4.team_b_color_id
            ELSE m4.team_a_color_id
          END,
          team_b_color_id = CASE
            WHEN m5.winner_team_color_id IS NULL THEN NULL
            WHEN m5.winner_team_color_id = m5.team_a_color_id THEN m5.team_b_color_id
            ELSE m5.team_a_color_id
          END,
          updated_at = now()
      WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 6
        AND coalesce(x.status, 'pending') NOT IN ('live', 'done');

      UPDATE public.matches x
      SET team_a_color_id = m3.winner_team_color_id,
          team_b_color_id = m5.winner_team_color_id,
          updated_at = now()
      WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 7
        AND coalesce(x.status, 'pending') NOT IN ('live', 'done');
    END IF;
  END LOOP;
END;
$$;

REVOKE ALL ON FUNCTION private.azizgames_derive_match_winner() FROM PUBLIC, anon, authenticated;
