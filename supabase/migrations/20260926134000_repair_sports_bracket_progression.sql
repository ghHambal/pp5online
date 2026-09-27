-- Repair AZIZGAMES bracket progression for the current event.
-- Keep round-one results; restore missing downstream slots and derive a winner
-- when a finished, non-draw match was saved with scores only.

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
     AND NEW.score_a ~ '^\\s*-?[0-9]+(\\.[0-9]+)?\\s*$'
     AND NEW.score_b ~ '^\\s*-?[0-9]+(\\.[0-9]+)?\\s*$'
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

DROP TRIGGER IF EXISTS trg_azizgames_derive_match_winner ON public.matches;
CREATE TRIGGER trg_azizgames_derive_match_winner
BEFORE INSERT OR UPDATE OF status, score_a, score_b, winner_team_color_id,
  team_a_color_id, team_b_color_id ON public.matches
FOR EACH ROW EXECUTE FUNCTION private.azizgames_derive_match_winner();

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
  -- The bracket engine uses round 1 and round 2 as the two first-round slots.
  -- A number of imported schedules stored both rows as round 1.
  WITH first_rows AS (
    SELECT m.id, m.sport_id, m.round_name, m.created_at,
      count(*) OVER (PARTITION BY m.sport_id) AS row_count,
      row_number() OVER (PARTITION BY m.sport_id ORDER BY m.created_at, m.id) AS fallback_round
    FROM public.matches m
    JOIN public.sports s ON s.id = m.sport_id AND s.event_id = m.event_id
    WHERE m.event_id = v_event
      AND s.is_active IS TRUE
      AND s.gender IN ('M', 'W')
      AND s.bracket_template IN ('page_playoff_7', 'single_elim_4')
      AND m.round = 1
  ), eligible AS (
    SELECT sport_id
    FROM first_rows
    GROUP BY sport_id
    HAVING count(*) = 2
  ), desired AS (
    SELECT f.id,
      CASE
        WHEN f.round_name ILIKE '%นัดที่ 1%' THEN 1
        WHEN f.round_name ILIKE '%นัดที่ 2%' THEN 2
        ELSE f.fallback_round
      END AS desired_round
    FROM first_rows f
    JOIN eligible e ON e.sport_id = f.sport_id
  )
  UPDATE public.matches m
  SET round = d.desired_round,
      updated_at = now()
  FROM desired d
  WHERE m.id = d.id
    AND m.round IS DISTINCT FROM d.desired_round;

  -- Repair historical finished matches that already have an unambiguous score.
  UPDATE public.matches m
  SET winner_team_color_id = CASE
        WHEN m.score_a::numeric > m.score_b::numeric THEN m.team_a_color_id
        ELSE m.team_b_color_id
      END,
      updated_at = now()
  FROM public.sports s
  WHERE m.event_id = v_event
    AND s.id = m.sport_id
    AND s.gender IN ('M', 'W')
    AND m.status = 'done'
    AND m.winner_team_color_id IS NULL
    AND m.team_a_color_id IS NOT NULL
    AND m.team_b_color_id IS NOT NULL
    AND m.score_a ~ '^\\s*-?[0-9]+(\\.[0-9]+)?\\s*$'
    AND m.score_b ~ '^\\s*-?[0-9]+(\\.[0-9]+)?\\s*$'
    AND m.score_a::numeric <> m.score_b::numeric;

  -- Restore missing downstream rows for every two-match knockout bracket.
  -- One-match events (for example track finals) are intentionally untouched.
  FOR sport_rec IN
    SELECT sp.id, sp.bracket_template
    FROM public.sports sp
    WHERE sp.event_id = v_event
      AND sp.is_active IS TRUE
      AND sp.gender IN ('M', 'W')
      AND sp.bracket_template IN ('page_playoff_7', 'single_elim_4')
      AND EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sp.id AND x.round = 1
      )
      AND EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sp.id AND x.round = 2
      )
  LOOP
    SELECT * INTO m1 FROM public.matches
    WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 1
    ORDER BY created_at, id LIMIT 1;
    SELECT * INTO m2 FROM public.matches
    WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 2
    ORDER BY created_at, id LIMIT 1;

    IF sport_rec.bracket_template = 'single_elim_4' THEN
      INSERT INTO public.matches (
        event_id, sport_id, round, round_name,
        team_a_color_id, team_b_color_id, status
      )
      SELECT v_event, sport_rec.id, 3, 'นัดชิงชนะเลิศ',
        m1.winner_team_color_id, m2.winner_team_color_id, 'pending'
      WHERE NOT EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 3
      );

      INSERT INTO public.matches (
        event_id, sport_id, round, round_name,
        team_a_color_id, team_b_color_id, status
      )
      SELECT v_event, sport_rec.id, 4, 'นัดชิงอันดับที่ 3',
        CASE WHEN m1.winner_team_color_id = m1.team_a_color_id
          THEN m1.team_b_color_id ELSE m1.team_a_color_id END,
        CASE WHEN m2.winner_team_color_id = m2.team_a_color_id
          THEN m2.team_b_color_id ELSE m2.team_a_color_id END,
        'pending'
      WHERE NOT EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 4
      );
    ELSE
      INSERT INTO public.matches (
        event_id, sport_id, round, round_name,
        team_a_color_id, team_b_color_id, status
      )
      SELECT v_event, sport_rec.id, 3, 'รอบรองสายบน',
        m1.winner_team_color_id, m2.winner_team_color_id, 'pending'
      WHERE NOT EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 3
      );

      INSERT INTO public.matches (
        event_id, sport_id, round, round_name,
        team_a_color_id, team_b_color_id, status
      )
      SELECT v_event, sport_rec.id, 4, 'รอบแก้ตัวสายล่าง',
        CASE WHEN m1.winner_team_color_id = m1.team_a_color_id
          THEN m1.team_b_color_id ELSE m1.team_a_color_id END,
        CASE WHEN m2.winner_team_color_id = m2.team_a_color_id
          THEN m2.team_b_color_id ELSE m2.team_a_color_id END,
        'pending'
      WHERE NOT EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 4
      );

      SELECT * INTO m3 FROM public.matches
      WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 3
      ORDER BY created_at, id LIMIT 1;
      SELECT * INTO m4 FROM public.matches
      WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 4
      ORDER BY created_at, id LIMIT 1;

      INSERT INTO public.matches (
        event_id, sport_id, round, round_name,
        team_a_color_id, team_b_color_id, status
      )
      SELECT v_event, sport_rec.id, 5, 'รอบชิงสายล่าง',
        CASE WHEN m3.winner_team_color_id = m3.team_a_color_id
          THEN m3.team_b_color_id ELSE m3.team_a_color_id END,
        m4.winner_team_color_id,
        'pending'
      WHERE NOT EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 5
      );

      SELECT * INTO m5 FROM public.matches
      WHERE event_id = v_event AND sport_id = sport_rec.id AND round = 5
      ORDER BY created_at, id LIMIT 1;

      INSERT INTO public.matches (
        event_id, sport_id, round, round_name,
        team_a_color_id, team_b_color_id, status
      )
      SELECT v_event, sport_rec.id, 6, 'นัดชิงอันดับที่ 3',
        CASE WHEN m4.winner_team_color_id = m4.team_a_color_id
          THEN m4.team_b_color_id ELSE m4.team_a_color_id END,
        CASE WHEN m5.winner_team_color_id = m5.team_a_color_id
          THEN m5.team_b_color_id ELSE m5.team_a_color_id END,
        'pending'
      WHERE NOT EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 6
      );

      INSERT INTO public.matches (
        event_id, sport_id, round, round_name,
        team_a_color_id, team_b_color_id, status
      )
      SELECT v_event, sport_rec.id, 7, 'นัดชิงชนะเลิศ',
        m3.winner_team_color_id, m5.winner_team_color_id, 'pending'
      WHERE NOT EXISTS (
        SELECT 1 FROM public.matches x
        WHERE x.event_id = v_event AND x.sport_id = sport_rec.id AND x.round = 7
      );
    END IF;
  END LOOP;
END;
$$;

-- Keep the trigger helper private after the migration has run.
REVOKE ALL ON FUNCTION private.azizgames_derive_match_winner() FROM PUBLIC, anon, authenticated;
