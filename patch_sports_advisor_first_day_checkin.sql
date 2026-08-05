-- PP5 Online: เช็คชื่อเข้าสีวันแรกโดยครูที่ปรึกษาสามัญ
-- ช่วงคาบเรียนสามัญวันแรกที่นักเรียนเข้าสี ให้ครูที่ปรึกษาสามัญ (ไม่ใช่ฝ่ายสี) เป็นผู้เช็คชื่อแทน
-- เพราะนักเรียนยังอยู่กับครูที่ปรึกษา ไม่ได้กระจายไปอยู่กับสีจริง — ใช้ตาราง sports_attendance
-- ชุดเดียวกับหน้า "จัดการสีของฉัน" (ห้ามสร้างข้อมูลเช็คชื่ออีกชุดหนึ่ง) แค่เพิ่มคอลัมน์บอกแหล่งที่มา
-- Re-runnable patch: safe to run again. Run AFTER patch_sports_attendance.sql

ALTER TABLE public.sports_portal_settings
  ADD COLUMN IF NOT EXISTS advisor_checkin_date DATE;

ALTER TABLE public.sports_attendance
  ADD COLUMN IF NOT EXISTS recorded_source TEXT NOT NULL DEFAULT 'color_staff';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'sports_attendance_recorded_source_check'
      AND conrelid = 'public.sports_attendance'::regclass
  ) THEN
    ALTER TABLE public.sports_attendance
      ADD CONSTRAINT sports_attendance_recorded_source_check
      CHECK (recorded_source IN ('color_staff','homeroom_advisor'));
  END IF;
END $$;

COMMENT ON COLUMN public.sports_attendance.recorded_source IS
  'แหล่งที่มาของการเช็คชื่อ: color_staff = ฝ่ายสี (ค่าเริ่มต้น), homeroom_advisor = ครูที่ปรึกษาสามัญ (เฉพาะวันเข้าสีวันแรกที่แอดมินกำหนด)';

-- ครูที่ปรึกษาสามัญดูรายชื่อนักเรียนที่ปรึกษา + สถานะเช็คชื่อเข้าสีวันแรกของวันนี้
-- SECURITY DEFINER: ตรวจสิทธิ์ homeroom_teachers เองในฟังก์ชัน ไม่พึ่ง RLS ของ sports_attendance
-- (ซึ่งอิงสิทธิ์สมาชิกประจำสี ไม่ใช่ครูที่ปรึกษา)
CREATE OR REPLACE FUNCTION public.get_advisor_sports_checkin_snapshot(p_event UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INTEGER;
  v_rooms TEXT[];
  v_checkin_date DATE;
  v_active BOOLEAN;
BEGIN
  SELECT t.id INTO v_teacher_id FROM public.teachers t WHERE t.profile_id = auth.uid() LIMIT 1;

  SELECT array_agg(DISTINCT h.main_room) INTO v_rooms
  FROM public.homeroom_teachers h
  WHERE h.teacher_id = v_teacher_id AND h.category = 'สามัญ';

  IF v_teacher_id IS NULL OR v_rooms IS NULL OR array_length(v_rooms,1) IS NULL THEN
    RAISE EXCEPTION 'หน้านี้สำหรับครูที่ปรึกษาสามัญเท่านั้น';
  END IF;

  SELECT sps.advisor_checkin_date INTO v_checkin_date
  FROM public.sports_portal_settings sps WHERE sps.event_id = p_event LIMIT 1;

  v_active := v_checkin_date IS NOT NULL AND CURRENT_DATE = v_checkin_date;

  RETURN jsonb_build_object(
    'active', v_active,
    'checkin_date', v_checkin_date,
    'rooms', to_jsonb(v_rooms),
    'students', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', s.id, 'student_code', s.student_code, 'full_name', s.full_name,
        'main_room', s.main_room, 'house_color', s.house_color, 'team_color_id', s.team_color_id,
        'image_url', s.image_url, 'photo_url', s.photo_url
      ) ORDER BY s.main_room, s.student_code)
      FROM public.students s
      WHERE s.is_active = true AND s.main_room = ANY(v_rooms)
    ), '[]'::jsonb),
    'attendance', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'student_id', sa.student_id,
        'method', sa.method,
        'scanned_at', sa.scanned_at,
        'recorded_source', sa.recorded_source,
        'team_color_name', tc.name,
        'recorder_name', COALESCE(rt.full_name, rs.full_name, 'ไม่ระบุ')
      ))
      FROM public.sports_attendance sa
      JOIN public.students s2 ON s2.id = sa.student_id AND s2.main_room = ANY(v_rooms)
      LEFT JOIN public.team_colors tc ON tc.id = sa.team_color_id
      LEFT JOIN public.teachers rt ON rt.profile_id = sa.scanned_by
      LEFT JOIN public.students rs ON rs.profile_id = sa.scanned_by
      WHERE sa.event_id = p_event AND sa.session_date = CURRENT_DATE
    ), '[]'::jsonb)
  );
END;
$$;

-- บันทึก/แก้ไขการเช็คชื่อเข้าสีวันแรกของนักเรียนที่ปรึกษา — สแกนหรือกด Manual ซ้ำต้องอัปเดต
-- แถวเดิม (ON CONFLICT อาศัย UNIQUE(event_id, student_id, session_date) ของ sports_attendance
-- เดิมอยู่แล้ว) ไม่สร้างแถวใหม่ซ้ำ และหาสีจริงของนักเรียนอัตโนมัติก่อนบันทึกเสมอ
CREATE OR REPLACE FUNCTION public.advisor_record_sports_attendance_for_student(
  p_event UUID,
  p_student INTEGER,
  p_method TEXT DEFAULT 'qr'
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INTEGER;
  v_student public.students%ROWTYPE;
  v_checkin_date DATE;
  v_team_color_id UUID;
  v_team_color_name TEXT;
  v_row public.sports_attendance%ROWTYPE;
BEGIN
  IF p_method NOT IN ('qr','manual') THEN
    RAISE EXCEPTION 'วิธีเช็คชื่อไม่ถูกต้อง';
  END IF;

  SELECT t.id INTO v_teacher_id FROM public.teachers t WHERE t.profile_id = auth.uid() LIMIT 1;
  SELECT * INTO v_student FROM public.students s WHERE s.id = p_student AND s.is_active = true;

  IF v_teacher_id IS NULL OR v_student.id IS NULL OR NOT EXISTS (
    SELECT 1 FROM public.homeroom_teachers h
    WHERE h.teacher_id = v_teacher_id AND h.category = 'สามัญ' AND h.main_room = v_student.main_room
  ) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์เช็คชื่อนักเรียนคนนี้';
  END IF;

  SELECT sps.advisor_checkin_date INTO v_checkin_date
  FROM public.sports_portal_settings sps WHERE sps.event_id = p_event LIMIT 1;

  IF v_checkin_date IS NULL OR CURRENT_DATE <> v_checkin_date THEN
    RAISE EXCEPTION 'ไม่อยู่ในช่วงวันเช็คชื่อเข้าสีวันแรก';
  END IF;

  IF v_student.team_color_id IS NOT NULL THEN
    SELECT id, name INTO v_team_color_id, v_team_color_name
    FROM public.team_colors WHERE id = v_student.team_color_id;
  ELSE
    SELECT id, name INTO v_team_color_id, v_team_color_name
    FROM public.team_colors WHERE event_id = p_event AND name = v_student.house_color LIMIT 1;
  END IF;

  IF v_team_color_id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบสีของนักเรียนคนนี้ กรุณาติดต่อฝ่ายทะเบียนกีฬาสี';
  END IF;

  INSERT INTO public.sports_attendance(
    event_id, team_color_id, student_id, session_date, session_type, method, scanned_by, scanned_at, recorded_source
  ) VALUES (
    p_event, v_team_color_id, p_student, CURRENT_DATE, 'pre_event', p_method, auth.uid(), now(), 'homeroom_advisor'
  )
  ON CONFLICT (event_id, student_id, session_date) DO UPDATE SET
    team_color_id = EXCLUDED.team_color_id,
    method = EXCLUDED.method,
    scanned_by = EXCLUDED.scanned_by,
    scanned_at = EXCLUDED.scanned_at,
    recorded_source = 'homeroom_advisor'
  RETURNING * INTO v_row;

  RETURN jsonb_build_object(
    'student_id', v_row.student_id,
    'method', v_row.method,
    'scanned_at', v_row.scanned_at,
    'team_color_name', v_team_color_name
  );
END;
$$;

REVOKE ALL ON FUNCTION public.get_advisor_sports_checkin_snapshot(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.advisor_record_sports_attendance_for_student(UUID,INTEGER,TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_advisor_sports_checkin_snapshot(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.advisor_record_sports_attendance_for_student(UUID,INTEGER,TEXT) TO authenticated;
