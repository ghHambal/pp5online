-- Make every 4-team knockout bracket send winners to the final and losers to
-- the third-place match.  The trigger already follows this rule; keep the
-- central-write compatibility path aligned with it and repair only pending
-- downstream matches.

CREATE OR REPLACE FUNCTION public.sports_central_write(
  p_gate_password text,
  p_action text,
  p_payload jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_match public.matches;
  v_row jsonb;
  v_id uuid;
  v_event uuid;
  v_sport uuid;
  v_gold numeric;
  v_silver numeric;
  v_bronze numeric;
  v_template text;
  v_finished integer;
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM private.azizgames_result_override_config c
    WHERE extensions.crypt(coalesce(p_gate_password, ''), c.password_hash) = c.password_hash
  ) THEN
    RAISE EXCEPTION 'รหัสผ่านโหมดกองกลางไม่ถูกต้อง' USING errcode='42501';
  END IF;

  IF p_action = 'verify' THEN
    RETURN jsonb_build_object('ok', true);
  END IF;
  IF p_action <> 'finalizeMatch' THEN
    RAISE EXCEPTION 'ไม่รองรับคำสั่งโหมดกองกลางนี้';
  END IF;

  v_id := coalesce(nullif(p_payload->>'id','')::uuid, nullif(p_payload->>'matchId','')::uuid);
  SELECT * INTO v_match FROM public.matches WHERE id = v_id;
  IF NOT FOUND THEN RAISE EXCEPTION 'ไม่พบคู่แข่งขัน'; END IF;
  v_event := v_match.event_id;
  v_sport := v_match.sport_id;

  IF coalesce(p_payload->'fields','{}'::jsonb) ? 'winner_team_color_id'
     AND nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid IS NOT NULL
     AND nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid IS DISTINCT FROM v_match.team_a_color_id
     AND nullif(p_payload->'fields'->>'winner_team_color_id','')::uuid IS DISTINCT FROM v_match.team_b_color_id THEN
    RAISE EXCEPTION 'ทีมผู้ชนะไม่อยู่ในคู่แข่งขันนี้';
  END IF;

  v_row := private.azizgames_apply_match_fields(v_id, coalesce(p_payload->'fields','{}'::jsonb));
  SELECT * INTO v_match FROM public.matches WHERE id = v_id;

  IF v_match.status = 'done' AND v_match.winner_team_color_id IS NOT NULL
     AND v_match.round_name IN ('นัดชิงชนะเลิศ','นัดชิงอันดับที่ 3') THEN
    SELECT coalesce(s.medal_points_gold,(SELECT (value->>'gold')::numeric FROM public.settings WHERE key='medal_points_default'),40),
      coalesce(s.medal_points_silver,(SELECT (value->>'silver')::numeric FROM public.settings WHERE key='medal_points_default'),30),
      coalesce(s.medal_points_bronze,(SELECT (value->>'bronze')::numeric FROM public.settings WHERE key='medal_points_default'),20),
      s.bracket_template
    INTO v_gold,v_silver,v_bronze,v_template
    FROM public.sports s WHERE s.id = v_sport;

    IF v_match.round_name = 'นัดชิงชนะเลิศ' THEN
      DELETE FROM public.medal_awards WHERE sport_id=v_sport AND medal_type IN ('gold','silver');
      INSERT INTO public.medal_awards(event_id,sport_id,team_color_id,medal_type,points,awarded_at) VALUES
        (v_event,v_sport,v_match.winner_team_color_id,'gold',v_gold,now()),
        (v_event,v_sport,CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END,'silver',v_silver,now());
    ELSE
      DELETE FROM public.medal_awards WHERE sport_id=v_sport AND medal_type='bronze';
      INSERT INTO public.medal_awards(event_id,sport_id,team_color_id,medal_type,points,awarded_at)
      VALUES(v_event,v_sport,v_match.winner_team_color_id,'bronze',v_bronze,now());
    END IF;
  END IF;

  -- The trigger performs the same scoped progression for every write.  Keep
  -- this compatibility path aligned, but never overwrite a downstream match
  -- that is already live or done.
  v_template := coalesce((SELECT bracket_template FROM public.sports WHERE id=v_sport),'page_playoff_7');
  v_finished := v_match.round;
  IF v_template='page_playoff_7' THEN
    IF v_finished=1 THEN
      UPDATE public.matches SET team_a_color_id=v_match.winner_team_color_id, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=3
        AND coalesce(status,'pending') NOT IN ('live','done');
      UPDATE public.matches SET team_a_color_id=CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=4
        AND coalesce(status,'pending') NOT IN ('live','done');
    ELSIF v_finished=2 THEN
      UPDATE public.matches SET team_b_color_id=v_match.winner_team_color_id, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=3
        AND coalesce(status,'pending') NOT IN ('live','done');
      UPDATE public.matches SET team_b_color_id=CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=4
        AND coalesce(status,'pending') NOT IN ('live','done');
    ELSIF v_finished=3 THEN
      UPDATE public.matches SET team_a_color_id=v_match.winner_team_color_id, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=7
        AND coalesce(status,'pending') NOT IN ('live','done');
      UPDATE public.matches SET team_a_color_id=CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=5
        AND coalesce(status,'pending') NOT IN ('live','done');
    ELSIF v_finished=4 THEN
      UPDATE public.matches SET team_b_color_id=v_match.winner_team_color_id, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=5
        AND coalesce(status,'pending') NOT IN ('live','done');
      UPDATE public.matches SET team_a_color_id=CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=6
        AND coalesce(status,'pending') NOT IN ('live','done');
    ELSIF v_finished=5 THEN
      UPDATE public.matches SET team_b_color_id=v_match.winner_team_color_id, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=7
        AND coalesce(status,'pending') NOT IN ('live','done');
      UPDATE public.matches SET team_b_color_id=CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=6
        AND coalesce(status,'pending') NOT IN ('live','done');
    END IF;
  ELSIF v_template='single_elim_4' THEN
    IF v_finished=1 THEN
      -- Winner -> final; loser -> third-place match.
      UPDATE public.matches SET team_a_color_id=v_match.winner_team_color_id, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=3
        AND coalesce(status,'pending') NOT IN ('live','done');
      UPDATE public.matches SET team_a_color_id=CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=4
        AND coalesce(status,'pending') NOT IN ('live','done');
    ELSIF v_finished=2 THEN
      UPDATE public.matches SET team_b_color_id=v_match.winner_team_color_id, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=3
        AND coalesce(status,'pending') NOT IN ('live','done');
      UPDATE public.matches SET team_b_color_id=CASE WHEN v_match.winner_team_color_id=v_match.team_a_color_id THEN v_match.team_b_color_id ELSE v_match.team_a_color_id END, updated_at=now()
      WHERE event_id=v_event AND sport_id=v_sport AND round=4
        AND coalesce(status,'pending') NOT IN ('live','done');
    END IF;
  END IF;

  RETURN v_row;
END;
$$;

REVOKE ALL ON FUNCTION public.sports_central_write(text,text,jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_central_write(text,text,jsonb) TO anon, authenticated;

-- Repair only pending downstream matches.  Completed historical matches are
-- intentionally preserved; changing them would silently change recorded
-- results and medals.
WITH bracket_openings AS (
  SELECT
    s.id AS sport_id,
    (SELECT m.winner_team_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=1
      ORDER BY m.created_at, m.id LIMIT 1) AS r1_winner,
    (SELECT m.team_a_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=1
      ORDER BY m.created_at, m.id LIMIT 1) AS r1_a,
    (SELECT m.team_b_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=1
      ORDER BY m.created_at, m.id LIMIT 1) AS r1_b,
    (SELECT m.winner_team_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=2
      ORDER BY m.created_at, m.id LIMIT 1) AS r2_winner,
    (SELECT m.team_a_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=2
      ORDER BY m.created_at, m.id LIMIT 1) AS r2_a,
    (SELECT m.team_b_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=2
      ORDER BY m.created_at, m.id LIMIT 1) AS r2_b
  FROM public.sports s
  WHERE s.is_active IS TRUE AND s.bracket_template='single_elim_4'
)
UPDATE public.matches m
SET team_a_color_id=o.r1_winner,
    team_b_color_id=o.r2_winner,
    updated_at=now()
FROM bracket_openings o
WHERE m.sport_id=o.sport_id
  AND m.round=3
  AND coalesce(m.status,'pending') NOT IN ('live','done')
  AND o.r1_winner IS NOT NULL
  AND o.r2_winner IS NOT NULL;

WITH bracket_openings AS (
  SELECT
    s.id AS sport_id,
    (SELECT m.winner_team_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=1
      ORDER BY m.created_at, m.id LIMIT 1) AS r1_winner,
    (SELECT m.team_a_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=1
      ORDER BY m.created_at, m.id LIMIT 1) AS r1_a,
    (SELECT m.team_b_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=1
      ORDER BY m.created_at, m.id LIMIT 1) AS r1_b,
    (SELECT m.winner_team_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=2
      ORDER BY m.created_at, m.id LIMIT 1) AS r2_winner,
    (SELECT m.team_a_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=2
      ORDER BY m.created_at, m.id LIMIT 1) AS r2_a,
    (SELECT m.team_b_color_id
       FROM public.matches m
      WHERE m.event_id=s.event_id AND m.sport_id=s.id AND m.round=2
      ORDER BY m.created_at, m.id LIMIT 1) AS r2_b
  FROM public.sports s
  WHERE s.is_active IS TRUE AND s.bracket_template='single_elim_4'
)
UPDATE public.matches m
SET team_a_color_id=CASE WHEN o.r1_winner=o.r1_a THEN o.r1_b ELSE o.r1_a END,
    team_b_color_id=CASE WHEN o.r2_winner=o.r2_a THEN o.r2_b ELSE o.r2_a END,
    updated_at=now()
FROM bracket_openings o
WHERE m.sport_id=o.sport_id
  AND m.round=4
  AND coalesce(m.status,'pending') NOT IN ('live','done')
  AND o.r1_winner IS NOT NULL
  AND o.r2_winner IS NOT NULL;
