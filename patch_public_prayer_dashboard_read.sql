-- patch_public_prayer_dashboard_read.sql
-- Public read endpoint for prayer-dashboard.html.
-- Returns only display-safe columns, clamps the date window to 31 days,
-- and avoids granting anon broad SELECT access to students/prayer_records.

CREATE OR REPLACE FUNCTION public.get_public_prayer_dashboard_snapshot(
  p_start_date date,
  p_end_date date,
  p_limit int DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_start date := p_start_date;
  v_end date := LEAST(p_end_date, p_start_date + 30);
  v_limit int := GREATEST(1, LEAST(COALESCE(p_limit, 50000), 50000));
  v_students jsonb := '[]'::jsonb;
  v_records jsonb := '[]'::jsonb;
BEGIN
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'id', s.id,
        'student_code', s.student_code,
        'full_name', s.full_name,
        'main_room', s.main_room,
        'religion_room', s.religion_room,
        'gender', s.gender,
        'is_active', s.is_active
      )
      ORDER BY s.student_code
    ),
    '[]'::jsonb
  )
  INTO v_students
  FROM public.students s
  WHERE s.is_active = true;

  WITH scoped_records AS (
    SELECT
      pr.id,
      pr.student_id,
      pr.main_room,
      pr.status,
      pr.check_date,
      pr.location,
      pr.scanned_by,
      pr.input_method,
      pr.scanner_code,
      pr.scanner_name,
      pr.scanner_room,
      pr.scanner_gender,
      pr.same_room_flag,
      pr.created_at,
      s.student_code,
      s.full_name AS student_full_name,
      s.main_room AS student_main_room,
      s.religion_room AS student_religion_room,
      s.gender AS student_gender
    FROM public.prayer_records pr
    LEFT JOIN public.students s ON s.id = pr.student_id
    WHERE pr.check_date >= v_start
      AND pr.check_date <= v_end
      AND pr.location IS NOT NULL
    ORDER BY pr.check_date ASC, pr.created_at ASC
    LIMIT v_limit
  )
  SELECT COALESCE(
    jsonb_agg(
      jsonb_build_object(
        'id', r.id,
        'student_id', r.student_id,
        'main_room', r.main_room,
        'status', r.status,
        'check_date', r.check_date,
        'location', r.location,
        'scanned_by', r.scanned_by,
        'input_method', r.input_method,
        'scanner_code', r.scanner_code,
        'scanner_name', r.scanner_name,
        'scanner_room', r.scanner_room,
        'scanner_gender', r.scanner_gender,
        'same_room_flag', r.same_room_flag,
        'created_at', r.created_at,
        'students', jsonb_build_object(
          'id', r.student_id,
          'student_code', r.student_code,
          'full_name', r.student_full_name,
          'main_room', r.student_main_room,
          'religion_room', r.student_religion_room,
          'gender', r.student_gender
        )
      )
      ORDER BY r.check_date ASC, r.created_at ASC
    ),
    '[]'::jsonb
  )
  INTO v_records
  FROM scoped_records r;

  RETURN jsonb_build_object(
    'start_date', v_start,
    'end_date', v_end,
    'students', v_students,
    'records', v_records
  );
END;
$$;

REVOKE ALL ON FUNCTION public.get_public_prayer_dashboard_snapshot(date, date, int) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_prayer_dashboard_snapshot(date, date, int) TO anon, authenticated;
