-- patch_prayer_scanner_safety.sql
-- เพิ่ม metadata สำหรับระบบสแกนละหมาด: แยกวิธีบันทึก, ข้อมูลผู้สแกน, และ flag ห้องเดียวกัน

ALTER TABLE public.prayer_records ADD COLUMN IF NOT EXISTS input_method TEXT DEFAULT 'qr';
ALTER TABLE public.prayer_records ADD COLUMN IF NOT EXISTS scanner_code TEXT;
ALTER TABLE public.prayer_records ADD COLUMN IF NOT EXISTS scanner_name TEXT;
ALTER TABLE public.prayer_records ADD COLUMN IF NOT EXISTS scanner_room TEXT;
ALTER TABLE public.prayer_records ADD COLUMN IF NOT EXISTS scanner_gender TEXT;
ALTER TABLE public.prayer_records ADD COLUMN IF NOT EXISTS same_room_flag BOOLEAN DEFAULT false;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'prayer_records_input_method_check'
      AND conrelid = 'public.prayer_records'::regclass
  ) THEN
    ALTER TABLE public.prayer_records
      ADD CONSTRAINT prayer_records_input_method_check
      CHECK (input_method IN ('qr', 'manual'));
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_prayer_records_manual_month
  ON public.prayer_records (student_id, check_date)
  WHERE input_method = 'manual' AND teacher_id IS NULL;

CREATE OR REPLACE FUNCTION public.count_manual_prayer_entries(
  p_student_id INT,
  p_date DATE
) RETURNS INT AS $$
DECLARE
  v_month_start DATE;
  v_month_end DATE;
BEGIN
  v_month_start := date_trunc('month', p_date)::date;
  v_month_end := (date_trunc('month', p_date) + interval '1 month - 1 day')::date;

  RETURN (
    SELECT COUNT(*)::int
    FROM public.prayer_records
    WHERE student_id = p_student_id
      AND input_method = 'manual'
      AND teacher_id IS NULL
      AND check_date BETWEEN v_month_start AND v_month_end
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

GRANT EXECUTE ON FUNCTION public.count_manual_prayer_entries(INT, DATE) TO authenticated;

INSERT INTO public.system_config (key, value) VALUES
  ('prayerSameRoomGuardMaleEnabled', 'true'),
  ('prayerSameRoomGuardFemaleEnabled', 'false'),
  ('prayerManualEntryMonthlyLimit', '2')
ON CONFLICT (key) DO NOTHING;
