-- ให้หน้าบันทึกผลอ่านสถานะการส่งศูนย์มอบเหรียญผ่านฟังก์ชันที่ตรวจสิทธิ์
-- แทนการเปิดสิทธิ์อ่านตาราง sports_award_ceremonies โดยตรง
BEGIN;

CREATE OR REPLACE FUNCTION public.sports_awards_result_status(
  p_match_id uuid,
  p_session_token text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_match public.matches;
  v_official uuid;
  v_ceremony public.sports_award_ceremonies;
  v_medal_types integer;
BEGIN
  v_official := private.azizgames_official_for_token(p_session_token);

  SELECT * INTO v_match
  FROM public.matches
  WHERE id = p_match_id;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'ไม่พบคู่แข่งขันสำหรับตรวจสถานะศูนย์มอบเหรียญ';
  END IF;

  IF NOT private.azizgames_is_admin()
     AND (v_official IS NULL
       OR NOT private.azizgames_official_has_sport(v_official, v_match.sport_id)) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์ตรวจสถานะศูนย์มอบเหรียญ' USING errcode = '42501';
  END IF;

  SELECT count(DISTINCT medal_type)::integer INTO v_medal_types
  FROM public.medal_awards
  WHERE sport_id = v_match.sport_id;

  SELECT * INTO v_ceremony
  FROM public.sports_award_ceremonies
  WHERE sport_id = v_match.sport_id;

  RETURN jsonb_build_object(
    'event_id', v_match.event_id,
    'sport_id', v_match.sport_id,
    'medal_types', v_medal_types,
    'ready', v_medal_types = 3,
    'sent', v_ceremony.sport_id IS NOT NULL,
    'delivered_at', v_ceremony.delivered_at,
    'revision', coalesce(v_ceremony.revision, 0),
    'changed', v_ceremony.sport_id IS NOT NULL
      AND v_ceremony.result_snapshot IS DISTINCT FROM private.awards_result(v_match.sport_id)
  );
END;
$$;

REVOKE ALL ON FUNCTION public.sports_awards_result_status(uuid, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_awards_result_status(uuid, text) TO anon, authenticated;

NOTIFY pgrst, 'reload schema';
COMMIT;
