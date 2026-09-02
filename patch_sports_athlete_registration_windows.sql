-- ช่วงเวลารับสมัคร/แก้ไขข้อมูลนักกีฬา และ RPC ให้ฝ่ายสีแก้ไขข้อมูลเดิมอย่างปลอดภัย
-- รันซ้ำได้ใน Supabase SQL Editor โดยไม่ลบข้อมูลเดิม

ALTER TABLE public.sports_portal_settings
  ADD COLUMN IF NOT EXISTS athlete_registration_closes_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS athlete_edit_opens_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS athlete_edit_closes_at TIMESTAMPTZ;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='sports_athlete_edit_window_order') THEN
    ALTER TABLE public.sports_portal_settings
      ADD CONSTRAINT sports_athlete_edit_window_order CHECK (
        (athlete_edit_opens_at IS NULL OR athlete_registration_closes_at IS NULL OR athlete_edit_opens_at>=athlete_registration_closes_at)
        AND (athlete_edit_closes_at IS NULL OR athlete_edit_opens_at IS NULL OR athlete_edit_closes_at>athlete_edit_opens_at)
      ) NOT VALID;
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.get_sports_registration_schedule(p_event UUID)
RETURNS TABLE (
  registration_closes_at TIMESTAMPTZ,
  edit_opens_at TIMESTAMPTZ,
  edit_closes_at TIMESTAMPTZ
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT s.athlete_registration_closes_at, s.athlete_edit_opens_at, s.athlete_edit_closes_at
  FROM public.sports_portal_settings s
  WHERE s.event_id=p_event
  LIMIT 1;
$$;

CREATE OR REPLACE FUNCTION public.team_update_athlete_registration(
  p_registration UUID,
  p_jersey_number TEXT
)
RETURNS public.registrations
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE
  v_reg public.registrations%ROWTYPE;
  v_cfg public.sports_portal_settings%ROWTYPE;
  v_old JSONB;
  v_result public.registrations%ROWTYPE;
  v_is_admin BOOLEAN;
BEGIN
  SELECT * INTO v_reg FROM public.registrations WHERE id=p_registration FOR UPDATE;
  IF v_reg.id IS NULL THEN RAISE EXCEPTION 'ไม่พบรายการลงทะเบียนนักกีฬา'; END IF;

  SELECT * INTO v_cfg FROM public.sports_portal_settings WHERE event_id=v_reg.event_id;
  v_is_admin := public.is_sports_admin();

  IF NOT v_is_admin THEN
    IF NOT public.is_team_member(v_reg.team_color_id,'registrations') THEN
      RAISE EXCEPTION 'ไม่มีสิทธิ์แก้ไขนักกีฬาของสีนี้';
    END IF;
    IF v_cfg.athlete_edit_opens_at IS NULL OR now()<v_cfg.athlete_edit_opens_at
       OR (v_cfg.athlete_edit_closes_at IS NOT NULL AND now()>v_cfg.athlete_edit_closes_at) THEN
      RAISE EXCEPTION 'ขณะนี้อยู่นอกช่วงเวลาที่อนุญาตให้ฝ่ายสีแก้ไขข้อมูลนักกีฬา';
    END IF;
  END IF;

  IF length(trim(COALESCE(p_jersey_number,'')))>20 THEN
    RAISE EXCEPTION 'หมายเลขเสื้อต้องไม่เกิน 20 ตัวอักษร';
  END IF;

  v_old := to_jsonb(v_reg);
  UPDATE public.registrations
  SET jersey_number=NULLIF(trim(COALESCE(p_jersey_number,'')),''),
      updated_at=now(),
      updated_by=auth.uid()
  WHERE id=v_reg.id
  RETURNING * INTO v_result;

  INSERT INTO public.sports_audit_log(event_id,entity_type,entity_id,action,old_data,new_data,actor_id)
  VALUES(v_reg.event_id,'registration',v_reg.id::TEXT,'team_update_jersey',v_old,to_jsonb(v_result),auth.uid());

  RETURN v_result;
END $$;

REVOKE ALL ON FUNCTION public.get_sports_registration_schedule(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.team_update_athlete_registration(UUID,TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.team_update_athlete_registration(UUID,TEXT) FROM anon;
GRANT EXECUTE ON FUNCTION public.get_sports_registration_schedule(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.team_update_athlete_registration(UUID,TEXT) TO authenticated;
