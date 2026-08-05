-- ระบบรับชำระค่าเสื้อกีฬาสีสำหรับครูที่ปรึกษาศาสนา
-- แยกจาก sports_team_dues (ค่าบำรุงสี) โดยสิ้นเชิง

ALTER TABLE public.sports_portal_settings
  ADD COLUMN IF NOT EXISTS shirt_payment_amount NUMERIC(10,2) NOT NULL DEFAULT 0;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'sports_portal_settings_shirt_payment_amount_check'
      AND conrelid = 'public.sports_portal_settings'::regclass
  ) THEN
    ALTER TABLE public.sports_portal_settings
      ADD CONSTRAINT sports_portal_settings_shirt_payment_amount_check
      CHECK (shirt_payment_amount >= 0);
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.sports_shirt_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  amount NUMERIC(10,2) NOT NULL CHECK (amount > 0),
  method TEXT NOT NULL DEFAULT 'qr' CHECK (method IN ('qr', 'manual')),
  collected_by UUID NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id) ON DELETE RESTRICT,
  paid_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  note TEXT,
  UNIQUE (event_id, student_id)
);

CREATE INDEX IF NOT EXISTS idx_sports_shirt_payments_event_student
  ON public.sports_shirt_payments(event_id, student_id);

ALTER TABLE public.sports_shirt_payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS sports_shirt_payments_read ON public.sports_shirt_payments;
CREATE POLICY sports_shirt_payments_read
ON public.sports_shirt_payments
FOR SELECT TO authenticated
USING (
  public.get_user_role() = 'admin'
  OR student_id IN (
    SELECT s.id FROM public.students s WHERE s.profile_id = (SELECT auth.uid())
  )
  OR EXISTS (
    SELECT 1
    FROM public.students s
    JOIN public.teachers t ON t.profile_id = (SELECT auth.uid())
    JOIN public.homeroom_teachers h
      ON h.teacher_id = t.id
     AND h.category = 'ศาสนา'
     AND h.main_room = s.religion_room
    JOIN public.events e
      ON e.id = sports_shirt_payments.event_id
     AND e.academic_year = h.academic_year
    WHERE s.id = sports_shirt_payments.student_id
  )
);

REVOKE ALL ON TABLE public.sports_shirt_payments FROM anon, authenticated;
GRANT SELECT ON TABLE public.sports_shirt_payments TO authenticated;

CREATE OR REPLACE FUNCTION public.get_religion_advisor_shirt_payment_snapshot(
  p_event UUID,
  p_room TEXT
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INTEGER;
  v_year INTEGER;
  v_amount NUMERIC;
BEGIN
  SELECT t.id INTO v_teacher_id
  FROM public.teachers t
  WHERE t.profile_id = auth.uid()
  LIMIT 1;

  SELECT e.academic_year INTO v_year
  FROM public.events e
  WHERE e.id = p_event;

  IF v_teacher_id IS NULL OR v_year IS NULL OR NOT EXISTS (
    SELECT 1 FROM public.homeroom_teachers h
    WHERE h.teacher_id = v_teacher_id
      AND h.category = 'ศาสนา'
      AND h.main_room = p_room
      AND h.academic_year = v_year
  ) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์ดูข้อมูลค่าเสื้อของห้องนี้';
  END IF;

  SELECT COALESCE(sps.shirt_payment_amount, 0)
    INTO v_amount
  FROM public.sports_portal_settings sps
  WHERE sps.event_id = p_event
  LIMIT 1;

  RETURN jsonb_build_object(
    'event_id', p_event,
    'room', p_room,
    'amount', COALESCE(v_amount, 0),
    'students', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', s.id,
        'student_code', s.student_code,
        'full_name', s.full_name,
        'main_room', s.main_room,
        'religion_room', s.religion_room,
        'gender', s.gender,
        'house_color', s.house_color,
        'sports_shirt_size', s.sports_shirt_size,
        'image_url', s.image_url,
        'photo_url', s.photo_url
      ) ORDER BY s.student_code)
      FROM public.students s
      WHERE s.is_active = true AND s.religion_room = p_room
    ), '[]'::jsonb),
    'payments', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', p.id,
        'student_id', p.student_id,
        'amount', p.amount,
        'method', p.method,
        'collected_by', p.collected_by,
        'paid_at', p.paid_at,
        'collector_name', COALESCE(t.full_name, 'ไม่ระบุ')
      ) ORDER BY p.paid_at DESC)
      FROM public.sports_shirt_payments p
      JOIN public.students s ON s.id = p.student_id AND s.religion_room = p_room
      LEFT JOIN public.teachers t ON t.profile_id = p.collected_by
      WHERE p.event_id = p_event
    ), '[]'::jsonb)
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.record_religion_advisor_shirt_payment(
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
  v_year INTEGER;
  v_amount NUMERIC;
  v_payment public.sports_shirt_payments%ROWTYPE;
BEGIN
  IF p_method NOT IN ('qr', 'manual') THEN
    RAISE EXCEPTION 'วิธีรับชำระไม่ถูกต้อง';
  END IF;

  SELECT t.id INTO v_teacher_id
  FROM public.teachers t
  WHERE t.profile_id = auth.uid()
  LIMIT 1;

  SELECT * INTO v_student
  FROM public.students s
  WHERE s.id = p_student AND s.is_active = true;

  SELECT e.academic_year INTO v_year
  FROM public.events e
  WHERE e.id = p_event AND e.status = 'active';

  IF v_teacher_id IS NULL OR v_student.id IS NULL OR v_year IS NULL OR NOT EXISTS (
    SELECT 1 FROM public.homeroom_teachers h
    WHERE h.teacher_id = v_teacher_id
      AND h.category = 'ศาสนา'
      AND h.main_room = v_student.religion_room
      AND h.academic_year = v_year
  ) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์รับชำระค่าเสื้อของนักเรียนคนนี้';
  END IF;

  SELECT COALESCE(sps.shirt_payment_amount, 0)
    INTO v_amount
  FROM public.sports_portal_settings sps
  WHERE sps.event_id = p_event
  LIMIT 1;

  IF COALESCE(v_amount, 0) <= 0 THEN
    RAISE EXCEPTION 'แอดมินยังไม่ได้ตั้งราคาค่าเสื้อกีฬาสี';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.sports_shirt_payments p
    WHERE p.event_id = p_event AND p.student_id = p_student
  ) THEN
    RAISE EXCEPTION 'นักเรียนคนนี้ชำระค่าเสื้อแล้ว';
  END IF;

  INSERT INTO public.sports_shirt_payments(
    event_id, student_id, amount, method, collected_by
  ) VALUES (
    p_event, p_student, v_amount, p_method, auth.uid()
  ) RETURNING * INTO v_payment;

  RETURN jsonb_build_object(
    'id', v_payment.id,
    'student_id', v_payment.student_id,
    'amount', v_payment.amount,
    'method', v_payment.method,
    'paid_at', v_payment.paid_at
  );
END;
$$;

CREATE OR REPLACE FUNCTION public.cancel_religion_advisor_shirt_payment(
  p_payment UUID
) RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INTEGER;
  v_allowed BOOLEAN := false;
BEGIN
  SELECT t.id INTO v_teacher_id
  FROM public.teachers t
  WHERE t.profile_id = auth.uid()
  LIMIT 1;

  SELECT public.get_user_role() = 'admin' OR EXISTS (
    SELECT 1
    FROM public.sports_shirt_payments p
    JOIN public.students s ON s.id = p.student_id
    JOIN public.events e ON e.id = p.event_id
    JOIN public.homeroom_teachers h
      ON h.teacher_id = v_teacher_id
     AND h.category = 'ศาสนา'
     AND h.main_room = s.religion_room
     AND h.academic_year = e.academic_year
    WHERE p.id = p_payment
  ) INTO v_allowed;

  IF NOT COALESCE(v_allowed, false) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์ยกเลิกรายการรับชำระนี้';
  END IF;

  DELETE FROM public.sports_shirt_payments WHERE id = p_payment;
  RETURN FOUND;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_my_sports_shirt_payment_status(
  p_event UUID
) RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_student_id INTEGER;
  v_amount NUMERIC;
  v_payment public.sports_shirt_payments%ROWTYPE;
  v_collector_name TEXT;
BEGIN
  SELECT s.id INTO v_student_id
  FROM public.students s
  WHERE s.profile_id = auth.uid() AND s.is_active = true
  LIMIT 1;

  IF v_student_id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบบัญชีนักเรียน';
  END IF;

  SELECT COALESCE(sps.shirt_payment_amount, 0)
    INTO v_amount
  FROM public.sports_portal_settings sps
  WHERE sps.event_id = p_event
  LIMIT 1;

  SELECT * INTO v_payment
  FROM public.sports_shirt_payments p
  WHERE p.event_id = p_event AND p.student_id = v_student_id
  LIMIT 1;

  IF v_payment.id IS NOT NULL THEN
    SELECT COALESCE(t.full_name, 'ไม่ระบุ') INTO v_collector_name
    FROM public.teachers t
    WHERE t.profile_id = v_payment.collected_by
    LIMIT 1;
  END IF;

  RETURN jsonb_build_object(
    'paid', v_payment.id IS NOT NULL,
    'amount', COALESCE(v_payment.amount, v_amount, 0),
    'paid_at', v_payment.paid_at,
    'collected_by_name', COALESCE(v_collector_name, 'ไม่ระบุ')
  );
END;
$$;

REVOKE ALL ON FUNCTION public.get_religion_advisor_shirt_payment_snapshot(UUID, TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.record_religion_advisor_shirt_payment(UUID, INTEGER, TEXT) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.cancel_religion_advisor_shirt_payment(UUID) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_my_sports_shirt_payment_status(UUID) FROM PUBLIC, anon;

GRANT EXECUTE ON FUNCTION public.get_religion_advisor_shirt_payment_snapshot(UUID, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.record_religion_advisor_shirt_payment(UUID, INTEGER, TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.cancel_religion_advisor_shirt_payment(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_my_sports_shirt_payment_status(UUID) TO authenticated;

COMMENT ON TABLE public.sports_shirt_payments IS
  'รายการรับชำระค่าเสื้อกีฬาสี แยกจากค่าบำรุงสี โดยครูที่ปรึกษาศาสนารับชำระตามห้องศาสนา';
