-- แก้บั๊ก: นักเรียนส่งไซซ์เสื้อซ้ำ (request_my_sports_shirt_size) ทับสถานะที่ครูที่ปรึกษาสามัญ
-- ยืนยันไปแล้วแบบเงียบๆ — เกิดจากแท็บ/เครื่องที่เปิดฟอร์มค้างไว้ตั้งแต่ก่อนครูยืนยัน แล้วมากดส่งซ้ำทีหลัง
-- (ON CONFLICT DO UPDATE เดิมรีเซ็ต status/confirmed_size กลับเป็นค่าว่างทุกครั้งไม่มีเงื่อนไข)
--
-- รันแล้วบน production ผ่าน MCP เมื่อ 2026-08-11 — ไฟล์นี้เก็บไว้เป็นหลักฐาน/สำหรับ environment อื่น

CREATE OR REPLACE FUNCTION public.request_my_sports_shirt_size(p_event uuid, p_size text)
 RETURNS sports_shirt_requests
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE v_student students%ROWTYPE; v_cfg sports_portal_settings%ROWTYPE; v_sizes jsonb; v_row sports_shirt_requests%ROWTYPE; v_existing_status TEXT;
BEGIN
  SELECT * INTO v_student FROM students WHERE profile_id=auth.uid() AND is_active IS TRUE;
  IF v_student.id IS NULL THEN RAISE EXCEPTION 'student profile not found'; END IF;
  SELECT * INTO v_cfg FROM sports_portal_settings WHERE event_id=p_event;
  IF NOT COALESCE(v_cfg.shirt_request_enabled,false) OR (v_cfg.shirt_request_opens_at IS NOT NULL AND now()<v_cfg.shirt_request_opens_at) OR (v_cfg.shirt_request_closes_at IS NOT NULL AND now()>v_cfg.shirt_request_closes_at) THEN RAISE EXCEPTION 'shirt request is closed'; END IF;
  SELECT value INTO v_sizes FROM settings WHERE key = 'shirt_sizes';
  IF v_sizes IS NULL OR NOT EXISTS (SELECT 1 FROM jsonb_array_elements(v_sizes) e WHERE e->>'code' = p_size) THEN
    RAISE EXCEPTION 'invalid shirt size';
  END IF;

  -- กันนักเรียนแก้ไข/ส่งซ้ำ (เช่น จากแท็บ/เครื่องที่เปิดค้างไว้ก่อนครูยืนยัน) ไปทับสถานะที่ครูที่ปรึกษายืนยันไปแล้ว
  SELECT status INTO v_existing_status FROM sports_shirt_requests WHERE event_id=p_event AND student_id=v_student.id;
  IF v_existing_status IN ('confirmed','advisor_updated') THEN
    RAISE EXCEPTION 'ครูที่ปรึกษายืนยันไซซ์นี้ไปแล้ว หากต้องการแก้ไขให้ติดต่อครูที่ปรึกษาสามัญโดยตรง';
  END IF;

  INSERT INTO sports_shirt_requests(event_id,student_id,requested_size,status,requested_by,requested_at,confirmed_size,confirmed_by,confirmed_at,updated_at)
  VALUES(p_event,v_student.id,p_size,'pending',auth.uid(),now(),NULL,NULL,NULL,now())
  ON CONFLICT(event_id,student_id) DO UPDATE SET requested_size=excluded.requested_size,status='pending',requested_by=auth.uid(),requested_at=now(),confirmed_size=NULL,confirmed_by=NULL,confirmed_at=NULL,updated_at=now()
  RETURNING * INTO v_row; RETURN v_row;
END
$function$;
