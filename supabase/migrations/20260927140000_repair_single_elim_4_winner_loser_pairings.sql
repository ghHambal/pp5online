-- Repair 4-team knockout brackets whose downstream pairings were created
-- before the winner/final and loser/third-place mapping was corrected.
--
-- For this bracket shape, rounds 1 and 2 are the first-round matches:
--   winner of round 1 + winner of round 2 -> final (round 3)
--   loser of round 1 + loser of round 2 -> third place (round 4)
--
-- Only brackets whose two downstream matches are demonstrably swapped are
-- reset. Their old downstream scores and medals cannot safely be retained
-- because they were recorded against the wrong teams.

DO $$
DECLARE
  v_event CONSTANT uuid := '00000000-0000-0000-0000-000000000001';
BEGIN
  CREATE TEMP TABLE azizgames_swapped_brackets ON COMMIT DROP AS
  WITH source_matches AS (
    SELECT
      s.id AS sport_id,
      r1.id AS r1_id,
      r2.id AS r2_id,
      r3.id AS r3_id,
      r4.id AS r4_id,
      r1.team_a_color_id AS r1_a,
      r1.team_b_color_id AS r1_b,
      r1.winner_team_color_id AS r1_winner,
      r2.team_a_color_id AS r2_a,
      r2.team_b_color_id AS r2_b,
      r2.winner_team_color_id AS r2_winner,
      r3.team_a_color_id AS r3_a,
      r3.team_b_color_id AS r3_b,
      r4.team_a_color_id AS r4_a,
      r4.team_b_color_id AS r4_b
    FROM public.sports s
    JOIN LATERAL (
      SELECT * FROM public.matches m
      WHERE m.event_id = s.event_id AND m.sport_id = s.id AND m.round = 1
      ORDER BY m.created_at, m.id LIMIT 1
    ) r1 ON true
    JOIN LATERAL (
      SELECT * FROM public.matches m
      WHERE m.event_id = s.event_id AND m.sport_id = s.id AND m.round = 2
      ORDER BY m.created_at, m.id LIMIT 1
    ) r2 ON true
    JOIN LATERAL (
      SELECT * FROM public.matches m
      WHERE m.event_id = s.event_id AND m.sport_id = s.id AND m.round = 3
      ORDER BY m.created_at, m.id LIMIT 1
    ) r3 ON true
    JOIN LATERAL (
      SELECT * FROM public.matches m
      WHERE m.event_id = s.event_id AND m.sport_id = s.id AND m.round = 4
      ORDER BY m.created_at, m.id LIMIT 1
    ) r4 ON true
    WHERE s.event_id = v_event
      AND s.is_active IS TRUE
      AND s.bracket_template = 'single_elim_4'
      AND r1.winner_team_color_id IS NOT NULL
      AND r2.winner_team_color_id IS NOT NULL
  )
  SELECT *
  FROM source_matches
  WHERE ARRAY[r3_a, r3_b] <@ ARRAY[
          CASE WHEN r1_winner = r1_a THEN r1_b ELSE r1_a END,
          CASE WHEN r2_winner = r2_a THEN r2_b ELSE r2_a END
        ]
    AND ARRAY[
          CASE WHEN r1_winner = r1_a THEN r1_b ELSE r1_a END,
          CASE WHEN r2_winner = r2_a THEN r2_b ELSE r2_a END
        ] <@ ARRAY[r3_a, r3_b]
    AND ARRAY[r4_a, r4_b] <@ ARRAY[r1_winner, r2_winner]
    AND ARRAY[r1_winner, r2_winner] <@ ARRAY[r4_a, r4_b];

  DELETE FROM public.medal_awards ma
  USING azizgames_swapped_brackets b
  WHERE ma.sport_id = b.sport_id;

  UPDATE public.matches m
  SET
    round_name = CASE WHEN m.id = b.r3_id THEN 'นัดชิงชนะเลิศ' ELSE 'นัดชิงอันดับที่ 3' END,
    team_a_color_id = CASE
      WHEN m.id = b.r3_id THEN b.r1_winner
      ELSE CASE WHEN b.r1_winner = b.r1_a THEN b.r1_b ELSE b.r1_a END
    END,
    team_b_color_id = CASE
      WHEN m.id = b.r3_id THEN b.r2_winner
      ELSE CASE WHEN b.r2_winner = b.r2_a THEN b.r2_b ELSE b.r2_a END
    END,
    status = 'pending',
    score_a = NULL,
    score_b = NULL,
    winner_team_color_id = NULL,
    recorded_by = NULL,
    clock_status = 'not_started',
    clock_half = 1,
    clock_started_at = NULL,
    clock_elapsed_before = 0,
    clock_half_started_elapsed = 0,
    current_set_a = 0,
    current_set_b = 0,
    sets_history = '[]'::jsonb,
    rounds_won_a = 0,
    rounds_won_b = 0,
    rounds_draws = 0,
    rounds_log = '[]'::jsonb,
    race_score_a = 0,
    race_score_b = 0,
    race_end_history = '[]'::jsonb,
    race_games_won_a = 0,
    race_games_won_b = 0,
    race_games_history = '[]'::jsonb,
    updated_at = now()
  FROM azizgames_swapped_brackets b
  WHERE m.id IN (b.r3_id, b.r4_id);

  UPDATE public.matches m
  SET
    team_a_color_id = CASE WHEN m.round = 3 THEN b.r1_winner
      ELSE CASE WHEN b.r1_winner = b.r1_a THEN b.r1_b ELSE b.r1_a END END,
    team_b_color_id = CASE WHEN m.round = 3 THEN b.r2_winner
      ELSE CASE WHEN b.r2_winner = b.r2_a THEN b.r2_b ELSE b.r2_a END END,
    updated_at = now()
  FROM azizgames_swapped_brackets b
  WHERE m.sport_id = b.sport_id
    AND m.round IN (3, 4)
    AND m.status NOT IN ('live', 'done')
    AND m.id NOT IN (b.r3_id, b.r4_id);

  -- Also normalize any still-pending downstream rows that were only
  -- partially populated by an earlier repair.
  WITH source_matches AS (
    SELECT
      s.id AS sport_id,
      r1.winner_team_color_id AS r1_winner,
      CASE WHEN r1.winner_team_color_id = r1.team_a_color_id
        THEN r1.team_b_color_id ELSE r1.team_a_color_id END AS r1_loser,
      r2.winner_team_color_id AS r2_winner,
      CASE WHEN r2.winner_team_color_id = r2.team_a_color_id
        THEN r2.team_b_color_id ELSE r2.team_a_color_id END AS r2_loser
    FROM public.sports s
    JOIN LATERAL (
      SELECT * FROM public.matches m
      WHERE m.event_id = s.event_id AND m.sport_id = s.id AND m.round = 1
      ORDER BY m.created_at, m.id LIMIT 1
    ) r1 ON true
    JOIN LATERAL (
      SELECT * FROM public.matches m
      WHERE m.event_id = s.event_id AND m.sport_id = s.id AND m.round = 2
      ORDER BY m.created_at, m.id LIMIT 1
    ) r2 ON true
    WHERE s.event_id = v_event
      AND s.is_active IS TRUE
      AND s.bracket_template = 'single_elim_4'
      AND r1.winner_team_color_id IS NOT NULL
      AND r2.winner_team_color_id IS NOT NULL
  )
  UPDATE public.matches m
  SET
    team_a_color_id = CASE WHEN m.round = 3 THEN b.r1_winner ELSE b.r1_loser END,
    team_b_color_id = CASE WHEN m.round = 3 THEN b.r2_winner ELSE b.r2_loser END,
    updated_at = now()
  FROM source_matches b
  WHERE m.sport_id = b.sport_id
    AND m.round IN (3, 4)
    AND m.status NOT IN ('live', 'done');
END;
$$;
