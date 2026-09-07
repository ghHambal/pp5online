-- เปลี่ยนการ "ยกเลิกรายการรับชำระค่าเสื้อกีฬาสี" (ครูที่ปรึกษาศาสนา) จากลบแถวทิ้งถาวร
-- เป็น soft-cancel (เก็บประวัติ cancelled_at/cancelled_by) ป้องกันกรณีบันทึกผิดแล้วอยากเช็คย้อนหลัง
-- ว่าใครยกเลิกรายการไหนไปเมื่อไหร่ + เปิดหน้าให้เห็นกลุ่ม "ยกเลิก" แยกจาก ยังไม่ชำระ/ชำระแล้ว

alter table public.sports_shirt_payments
  add column if not exists cancelled_at timestamptz,
  add column if not exists cancelled_by uuid references public.profiles(id) on delete restrict;

-- เดิม unique(event_id, student_id) บล็อกการรับชำระซ้ำหลังยกเลิกไปแล้ว
-- เปลี่ยนเป็น partial unique index: บังคับไม่ให้มีรายการ "ที่ยังไม่ถูกยกเลิก" ซ้ำกัน แต่รับชำระใหม่ได้หลังยกเลิก
alter table public.sports_shirt_payments drop constraint if exists sports_shirt_payments_event_id_student_id_key;
create unique index if not exists sports_shirt_payments_active_unique
  on public.sports_shirt_payments(event_id, student_id) where cancelled_at is null;

create or replace function public.cancel_religion_advisor_shirt_payment(p_payment uuid)
returns boolean
language plpgsql
security definer
set search_path to 'public'
as $function$
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

  UPDATE public.sports_shirt_payments
  SET cancelled_at = now(), cancelled_by = auth.uid()
  WHERE id = p_payment AND cancelled_at IS NULL;

  RETURN FOUND;
END;
$function$;

create or replace function public.get_religion_advisor_shirt_payment_snapshot(p_event uuid, p_room text)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
DECLARE
  v_teacher_id INTEGER;
  v_year INTEGER;
  v_amount_m NUMERIC;
  v_amount_w NUMERIC;
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

  SELECT COALESCE(sps.shirt_payment_amount_m,0), COALESCE(sps.shirt_payment_amount_w,0)
    INTO v_amount_m, v_amount_w
  FROM public.sports_portal_settings sps
  WHERE sps.event_id = p_event
  LIMIT 1;

  RETURN jsonb_build_object(
    'event_id', p_event,
    'room', p_room,
    'amount_m', COALESCE(v_amount_m, 0),
    'amount_w', COALESCE(v_amount_w, 0),
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
      WHERE p.event_id = p_event AND p.cancelled_at IS NULL
    ), '[]'::jsonb),
    'cancelled', COALESCE((
      SELECT jsonb_agg(jsonb_build_object(
        'id', p.id,
        'student_id', p.student_id,
        'amount', p.amount,
        'method', p.method,
        'collected_by', p.collected_by,
        'paid_at', p.paid_at,
        'collector_name', COALESCE(t.full_name, 'ไม่ระบุ'),
        'cancelled_at', p.cancelled_at,
        'canceller_name', COALESCE(ct.full_name, 'ไม่ระบุ')
      ) ORDER BY p.cancelled_at DESC)
      FROM public.sports_shirt_payments p
      JOIN public.students s ON s.id = p.student_id AND s.religion_room = p_room
      LEFT JOIN public.teachers t ON t.profile_id = p.collected_by
      LEFT JOIN public.teachers ct ON ct.profile_id = p.cancelled_by
      WHERE p.event_id = p_event AND p.cancelled_at IS NOT NULL
    ), '[]'::jsonb)
  );
END;
$function$;

create or replace function public.record_religion_advisor_shirt_payment(p_event uuid, p_student integer, p_method text default 'qr'::text)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
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

  SELECT CASE WHEN v_student.gender IN ('หญิง','W') THEN COALESCE(sps.shirt_payment_amount_w,0) ELSE COALESCE(sps.shirt_payment_amount_m,0) END
    INTO v_amount
  FROM public.sports_portal_settings sps
  WHERE sps.event_id = p_event
  LIMIT 1;

  IF COALESCE(v_amount, 0) <= 0 THEN
    RAISE EXCEPTION 'แอดมินยังไม่ได้ตั้งราคาค่าเสื้อกีฬาสี';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.sports_shirt_payments p
    WHERE p.event_id = p_event AND p.student_id = p_student AND p.cancelled_at IS NULL
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
$function$;
