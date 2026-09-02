-- PP5 Online: หน้า "ภาพรวมกีฬาสี" สำหรับแอดมิน — สรุปเช็คชื่อรายวัน/ค่าบำรุง/บัญชี ของทุกสีพร้อมกัน
-- Re-runnable patch: safe to run again.
-- ต้องรันหลัง patch_sports_attendance.sql และ patch_sports_student_team_portal.sql (ใช้ is_sports_admin())

-- ใครมีสิทธิ์เห็นภาพรวมข้ามสี — ตรงกับเงื่อนไข isSportsManager ฝั่ง client (js/teacher.js)
-- ต้องเช็คทั้ง t.position (เดี่ยว) และ t.positions (array) เพราะข้อมูลเก่าบางคนเก็บแค่ position เดี่ยว
CREATE OR REPLACE FUNCTION public.is_sports_overview_admin() RETURNS BOOLEAN
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT public.is_sports_admin()
  OR EXISTS(
    SELECT 1 FROM public.teachers t
    WHERE t.profile_id=auth.uid()
      AND (t.staff_type='แอดมิน' OR t.position='admin' OR 'house_color_admin'=ANY(COALESCE(t.positions,ARRAY[t.position])))
  )
  OR EXISTS(
    SELECT 1 FROM public.teachers t
    JOIN public.role_permissions rp ON rp.position=ANY(COALESCE(t.positions,ARRAY[t.position]))
    WHERE t.profile_id=auth.uid() AND rp.feature='menu_sports_admin' AND rp.allowed
  );
$$;

-- รวมข้อมูลเช็คชื่อ/ค่าบำรุง/บัญชี ของทุกสีในอีเวนต์เดียว ให้แอดมินเห็นภาพรวมโดยไม่ต้องไล่เปิดทีละสี
-- นับจำนวนนักเรียนต่อสีด้วย house_color/team_color_id แบบเดียวกับที่หน้า "จัดการสีของฉัน" ใช้
-- (house_color คือค่าหลักที่ผู้ใช้ยืนยันแล้วว่าถูกต้องกว่า ดู incident_house_color_team_color_id_drift)
CREATE OR REPLACE FUNCTION public.get_sports_admin_overview(p_event UUID) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
  IF NOT public.is_sports_overview_admin() THEN
    RAISE EXCEPTION 'not authorized';
  END IF;
  RETURN jsonb_build_object(
    'colors', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', c.id, 'name', c.name, 'hex_color', c.hex_color, 'gender', c.gender,
        'member_count', (SELECT COUNT(*) FROM public.students s WHERE s.is_active IS TRUE AND (s.team_color_id=c.id OR s.house_color=c.name))
      ) ORDER BY c.gender, c.display_order)
      FROM public.team_colors c WHERE c.event_id=p_event
    ), '[]'::jsonb),
    'attendance', COALESCE((
      SELECT jsonb_agg(row_to_json(t))
      FROM (
        SELECT team_color_id, session_date, COUNT(*) AS checked_count
        FROM public.sports_attendance WHERE event_id=p_event
        GROUP BY team_color_id, session_date
      ) t
    ), '[]'::jsonb),
    'dues', COALESCE((
      SELECT jsonb_agg(row_to_json(t))
      FROM (
        SELECT team_color_id, COUNT(*) AS paid_count, SUM(amount) AS total_amount
        FROM public.sports_team_dues WHERE event_id=p_event
        GROUP BY team_color_id
      ) t
    ), '[]'::jsonb),
    'fund', COALESCE((
      SELECT jsonb_agg(row_to_json(t))
      FROM (
        SELECT team_color_id,
          COALESCE(SUM(amount) FILTER (WHERE category='school_support'),0) AS school_support,
          COALESCE(SUM(amount) FILTER (WHERE category='prize'),0) AS prize,
          COALESCE(SUM(amount) FILTER (WHERE category='expense'),0) AS expense
        FROM public.sports_team_fund_entries WHERE event_id=p_event
        GROUP BY team_color_id
      ) t
    ), '[]'::jsonb)
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_sports_overview_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_sports_admin_overview(UUID) TO authenticated;
