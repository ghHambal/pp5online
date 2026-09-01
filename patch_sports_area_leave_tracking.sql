-- ติดตามนักเรียนที่ขอออกจากพื้นที่สี และยกเลิกเช็คชื่อเมื่อไม่กลับ
-- Run AFTER patch_sports_attendance.sql
-- Re-runnable: รันซ้ำได้โดยไม่ลบประวัติเดิม

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.sports_area_leave_passes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  team_color_id UUID NOT NULL REFERENCES public.team_colors(id) ON DELETE CASCADE,
  student_id INTEGER NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  session_date DATE NOT NULL,
  attendance_id UUID REFERENCES public.sports_attendance(id) ON DELETE SET NULL,
  reason TEXT NOT NULL CHECK (length(trim(reason)) > 0),
  status TEXT NOT NULL DEFAULT 'out' CHECK (status IN ('out','returned','not_returned')),
  out_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expected_return_at TIMESTAMPTZ NOT NULL,
  approved_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL DEFAULT auth.uid(),
  returned_at TIMESTAMPTZ,
  closed_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  closed_at TIMESTAMPTZ,
  close_note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_sports_area_leave_one_open
  ON public.sports_area_leave_passes(event_id, student_id, session_date)
  WHERE status='out';

CREATE INDEX IF NOT EXISTS idx_sports_area_leave_team_date
  ON public.sports_area_leave_passes(team_color_id, session_date, status, out_at DESC);

ALTER TABLE public.sports_area_leave_passes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "sports_area_leave_read" ON public.sports_area_leave_passes;
CREATE POLICY "sports_area_leave_read"
  ON public.sports_area_leave_passes FOR SELECT TO authenticated
  USING (public.is_team_member(team_color_id,'attendance'));

GRANT SELECT ON public.sports_area_leave_passes TO authenticated;

CREATE OR REPLACE FUNCTION public.record_sports_area_exit(
  p_event UUID,
  p_team_color_id UUID,
  p_student INTEGER,
  p_reason TEXT,
  p_expected_minutes INTEGER DEFAULT 15
) RETURNS public.sports_area_leave_passes
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE
  v_today DATE := timezone('Asia/Bangkok',now())::date;
  v_attendance_id UUID;
  v_row public.sports_area_leave_passes%ROWTYPE;
BEGIN
  IF NOT public.is_team_member(p_team_color_id,'attendance') THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์ติดตามการออกจากพื้นที่ของสีนี้';
  END IF;
  IF NOT public.is_student_in_sports_team(p_team_color_id,p_student) THEN
    RAISE EXCEPTION 'นักเรียนไม่ได้อยู่ในสีนี้';
  END IF;
  IF length(trim(COALESCE(p_reason,'')))=0 THEN
    RAISE EXCEPTION 'กรุณาระบุเหตุผลที่ขอออกจากพื้นที่';
  END IF;
  IF p_expected_minutes IS NULL OR p_expected_minutes<1 OR p_expected_minutes>240 THEN
    RAISE EXCEPTION 'เวลากลับต้องอยู่ระหว่าง 1–240 นาที';
  END IF;

  SELECT sa.id INTO v_attendance_id
  FROM public.sports_attendance sa
  WHERE sa.event_id=p_event AND sa.team_color_id=p_team_color_id
    AND sa.student_id=p_student AND sa.session_date=v_today
  LIMIT 1;

  IF v_attendance_id IS NULL THEN
    RAISE EXCEPTION 'นักเรียนยังไม่ได้เช็คชื่อของวันนี้';
  END IF;
  IF EXISTS (
    SELECT 1 FROM public.sports_area_leave_passes lp
    WHERE lp.event_id=p_event AND lp.student_id=p_student
      AND lp.session_date=v_today AND lp.status='out'
  ) THEN
    RAISE EXCEPTION 'นักเรียนคนนี้อยู่ระหว่างออกจากพื้นที่แล้ว';
  END IF;

  INSERT INTO public.sports_area_leave_passes(
    event_id,team_color_id,student_id,session_date,attendance_id,reason,
    expected_return_at,approved_by
  ) VALUES (
    p_event,p_team_color_id,p_student,v_today,v_attendance_id,trim(p_reason),
    now()+(p_expected_minutes||' minutes')::interval,auth.uid()
  ) RETURNING * INTO v_row;

  RETURN v_row;
END;
$$;

CREATE OR REPLACE FUNCTION public.close_sports_area_leave(
  p_leave UUID,
  p_action TEXT,
  p_note TEXT DEFAULT NULL
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE
  v_row public.sports_area_leave_passes%ROWTYPE;
  v_deleted INTEGER := 0;
BEGIN
  SELECT * INTO v_row
  FROM public.sports_area_leave_passes
  WHERE id=p_leave
  FOR UPDATE;

  IF v_row.id IS NULL THEN RAISE EXCEPTION 'ไม่พบรายการขอออกจากพื้นที่'; END IF;
  IF NOT public.is_team_member(v_row.team_color_id,'attendance') THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์จัดการรายการของสีนี้';
  END IF;
  IF v_row.status<>'out' THEN RAISE EXCEPTION 'รายการนี้ปิดไปแล้ว'; END IF;
  IF p_action NOT IN ('returned','not_returned') THEN RAISE EXCEPTION 'สถานะไม่ถูกต้อง'; END IF;
  IF p_action='not_returned' AND length(trim(COALESCE(p_note,'')))=0 THEN
    RAISE EXCEPTION 'กรุณาระบุเหตุผลที่ยกเลิกเช็คชื่อ';
  END IF;

  IF p_action='returned' THEN
    UPDATE public.sports_area_leave_passes SET
      status='returned',returned_at=now(),closed_by=auth.uid(),closed_at=now(),
      close_note=NULL,updated_at=now()
    WHERE id=p_leave RETURNING * INTO v_row;
  ELSE
    DELETE FROM public.sports_attendance
    WHERE event_id=v_row.event_id AND team_color_id=v_row.team_color_id
      AND student_id=v_row.student_id AND session_date=v_row.session_date;
    GET DIAGNOSTICS v_deleted = ROW_COUNT;

    UPDATE public.sports_area_leave_passes SET
      status='not_returned',closed_by=auth.uid(),closed_at=now(),
      close_note=trim(p_note),updated_at=now()
    WHERE id=p_leave RETURNING * INTO v_row;
  END IF;

  RETURN jsonb_build_object(
    'id',v_row.id,'student_id',v_row.student_id,'session_date',v_row.session_date,
    'status',v_row.status,'closed_at',v_row.closed_at,
    'attendance_cancelled',v_deleted>0
  );
END;
$$;

REVOKE ALL ON FUNCTION public.record_sports_area_exit(UUID,UUID,INTEGER,TEXT,INTEGER) FROM PUBLIC,anon;
REVOKE ALL ON FUNCTION public.close_sports_area_leave(UUID,TEXT,TEXT) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.record_sports_area_exit(UUID,UUID,INTEGER,TEXT,INTEGER) TO authenticated;
GRANT EXECUTE ON FUNCTION public.close_sports_area_leave(UUID,TEXT,TEXT) TO authenticated;
