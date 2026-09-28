-- ให้กรรมการกองกลางบันทึกนักกีฬาดีเด่นผ่าน session token ของ sports_officials
-- แทนการพึ่งบทบาท Supabase Auth ของเครื่องที่กำลังใช้งาน
BEGIN;

CREATE OR REPLACE FUNCTION public.sports_official_save_outstanding(
  p_session_token text,
  p_event_id uuid,
  p_student_id integer,
  p_sport_id uuid,
  p_note text DEFAULT NULL,
  p_id uuid DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions, pg_temp
AS $$
DECLARE
  v_official uuid;
  v_row public.outstanding_athletes;
  v_existing uuid;
BEGIN
  v_official := private.azizgames_official_for_token(p_session_token);
  IF v_official IS NULL THEN
    RAISE EXCEPTION 'เซสชันกรรมการหมดอายุ กรุณาเข้าสู่ระบบใหม่' USING errcode = '42501';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM public.sports
    WHERE id = p_sport_id AND event_id = p_event_id
  ) THEN
    RAISE EXCEPTION 'ไม่พบรายการแข่งขันนี้';
  END IF;

  IF NOT private.azizgames_official_has_sport(v_official, p_sport_id) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์บันทึกรายการกีฬานี้' USING errcode = '42501';
  END IF;

  IF p_id IS NOT NULL THEN
    UPDATE public.outstanding_athletes
    SET note = NULLIF(trim(coalesce(p_note, '')), '')
    WHERE id = p_id
      AND event_id = p_event_id
    RETURNING * INTO v_row;
    IF NOT FOUND THEN
      RAISE EXCEPTION 'ไม่พบข้อมูลนักกีฬาดีเด่นที่ต้องการแก้ไข';
    END IF;
  ELSE
    SELECT id INTO v_existing
    FROM public.outstanding_athletes
    WHERE event_id = p_event_id
      AND student_id = p_student_id
      AND sport_id = p_sport_id
    LIMIT 1;

    IF v_existing IS NOT NULL THEN
      UPDATE public.outstanding_athletes
      SET note = NULLIF(trim(coalesce(p_note, '')), '')
      WHERE id = v_existing
      RETURNING * INTO v_row;
    ELSE
      INSERT INTO public.outstanding_athletes(event_id, student_id, sport_id, note, awarded_at)
      VALUES (
        p_event_id,
        p_student_id,
        p_sport_id,
        NULLIF(trim(coalesce(p_note, '')), ''),
        now()
      )
      RETURNING * INTO v_row;
    END IF;
  END IF;

  RETURN to_jsonb(v_row);
END;
$$;

REVOKE ALL ON FUNCTION public.sports_official_save_outstanding(text, uuid, integer, uuid, text, uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.sports_official_save_outstanding(text, uuid, integer, uuid, text, uuid) TO anon, authenticated;

COMMIT;
