-- Do not display a later bracket slot as if a team has already qualified.
-- The team is filled by the progression trigger only after its source match
-- has a winner.

DO $$
DECLARE
  v_event uuid := '00000000-0000-0000-0000-000000000001';
  v_sport uuid;
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
    RETURN;
  END IF;

  SELECT * INTO m3 FROM public.matches
  WHERE event_id=v_event AND sport_id=v_sport AND round=3
  ORDER BY created_at, id LIMIT 1;
  SELECT * INTO m4 FROM public.matches
  WHERE event_id=v_event AND sport_id=v_sport AND round=4
  ORDER BY created_at, id LIMIT 1;
  SELECT * INTO m5 FROM public.matches
  WHERE event_id=v_event AND sport_id=v_sport AND round=5
  ORDER BY created_at, id LIMIT 1;

  UPDATE public.matches x
  SET team_a_color_id = CASE
        WHEN m3.winner_team_color_id IS NULL THEN NULL
        WHEN m3.winner_team_color_id = m3.team_a_color_id THEN m3.team_b_color_id
        ELSE m3.team_a_color_id
      END,
      team_b_color_id = CASE
        WHEN m4.winner_team_color_id IS NULL THEN NULL
        WHEN m4.winner_team_color_id = m4.team_a_color_id THEN m4.team_b_color_id
        ELSE m4.team_a_color_id
      END,
      updated_at = now()
  WHERE x.event_id=v_event AND x.sport_id=v_sport AND x.round=5
    AND coalesce(x.status, 'pending') NOT IN ('live', 'done');

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
  WHERE x.event_id=v_event AND x.sport_id=v_sport AND x.round=6
    AND coalesce(x.status, 'pending') NOT IN ('live', 'done');

  UPDATE public.matches x
  SET team_a_color_id = m3.winner_team_color_id,
      team_b_color_id = m5.winner_team_color_id,
      updated_at = now()
  WHERE x.event_id=v_event AND x.sport_id=v_sport AND x.round=7
    AND coalesce(x.status, 'pending') NOT IN ('live', 'done');
END;
$$;
