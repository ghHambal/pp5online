-- Let the result recorder explicitly publish a result to the awards center,
-- even when fewer than three medal types exist.
BEGIN;

CREATE OR REPLACE FUNCTION private.azizgames_publish_award_result(
  p_event_id uuid,
  p_sport_id uuid,
  p_recorder_name text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_snapshot jsonb;
  v_current public.sports_award_ceremonies;
  v_actor text := trim(coalesce(p_recorder_name, 'ผู้บันทึกผล'));
  v_revision integer;
  v_ready boolean;
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.sports
    WHERE id = p_sport_id AND event_id = p_event_id
  ) THEN
    RAISE EXCEPTION 'ไม่พบรายการกีฬาสำหรับส่งศูนย์มอบเหรียญ';
  END IF;

  IF length(v_actor) < 2 OR length(v_actor) > 150 THEN
    v_actor := 'ผู้บันทึกผล';
  END IF;

  v_snapshot := private.awards_result(p_sport_id);
  SELECT * INTO v_current
  FROM public.sports_award_ceremonies
  WHERE sport_id = p_sport_id
  FOR UPDATE;

  v_revision := coalesce(v_current.revision, 0) + 1;
  v_ready := (SELECT count(DISTINCT medal_type) = 3
              FROM public.medal_awards
              WHERE sport_id = p_sport_id);

  INSERT INTO public.sports_award_ceremonies(
    event_id, sport_id, delivered_at, delivered_by, recorder_name,
    result_snapshot, revision
  )
  VALUES(
    p_event_id, p_sport_id, v_current.delivered_at, v_current.delivered_by,
    v_actor, v_snapshot, v_revision
  )
  ON CONFLICT (sport_id) DO UPDATE SET
    event_id = excluded.event_id,
    delivered_at = excluded.delivered_at,
    delivered_by = excluded.delivered_by,
    recorder_name = excluded.recorder_name,
    result_snapshot = excluded.result_snapshot,
    revision = excluded.revision;

  INSERT INTO public.sports_award_history(
    event_id, sport_id, action, actor_id, actor_name, reason, snapshot
  )
  VALUES(
    p_event_id, p_sport_id, 'ส่งผลเข้าศูนย์มอบเหรียญ', auth.uid(), v_actor,
    CASE WHEN v_ready THEN 'ผลเหรียญครบ 3 อันดับ' ELSE 'ส่งผลแม้ผลเหรียญยังไม่ครบ' END,
    v_snapshot
  );

  RETURN jsonb_build_object(
    'published', true,
    'ready', v_ready,
    'revision', v_revision,
    'sport_id', p_sport_id
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.sports_awards_publish_match(
  p_match_id uuid,
  p_session_token text DEFAULT NULL,
  p_recorder_name text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_match public.matches;
  v_official uuid;
  v_actor text := trim(coalesce(p_recorder_name, ''));
BEGIN
  v_official := private.azizgames_official_for_token(p_session_token);

  SELECT * INTO v_match
  FROM public.matches
  WHERE id = p_match_id;
  IF NOT FOUND THEN
    RAISE EXCEPTION 'ไม่พบคู่แข่งขันสำหรับส่งศูนย์มอบเหรียญ';
  END IF;

  IF NOT private.azizgames_is_admin()
     AND (v_official IS NULL
       OR NOT private.azizgames_official_has_sport(v_official, v_match.sport_id)) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์ส่งผลการแข่งขันเข้าศูนย์มอบเหรียญ' USING errcode = '42501';
  END IF;

  IF v_actor = '' AND v_official IS NOT NULL THEN
    SELECT full_name INTO v_actor
    FROM public.sports_officials
    WHERE id = v_official;
  ELSIF v_actor = '' THEN
    SELECT full_name INTO v_actor
    FROM public.teachers
    WHERE profile_id = auth.uid()
    LIMIT 1;
  END IF;

  RETURN private.azizgames_publish_award_result(
    v_match.event_id, v_match.sport_id, v_actor
  );
END;
$$;

REVOKE ALL ON FUNCTION private.azizgames_publish_award_result(uuid, uuid, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.sports_awards_publish_match(uuid, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_awards_publish_match(uuid, text, text) TO anon, authenticated;
COMMIT;
