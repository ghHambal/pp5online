-- ═══════════════════════════════════════════════════════════════
-- patch_schedule.sql — ระบบตารางสอน
-- รัน 1 ครั้งใน Supabase SQL Editor
-- ═══════════════════════════════════════════════════════════════

-- 1. school_periods: เพิ่ม day_type แยก regular / friday
ALTER TABLE school_periods
  ADD COLUMN IF NOT EXISTS day_type TEXT NOT NULL DEFAULT 'regular'
  CHECK (day_type IN ('regular', 'friday'));

-- 2. teacher_schedules: ปรับ schema ใหม่ทั้งหมด
--    (ถ้ายังไม่มีข้อมูล drop แล้ว recreate ได้เลย)
DROP TABLE IF EXISTS teacher_schedules CASCADE;

CREATE TABLE teacher_schedules (
  id            SERIAL  PRIMARY KEY,
  teacher_id    INT     NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
  subject_id    INT     REFERENCES master_subjects(id)   ON DELETE SET NULL,
  -- day_of_week: 0=อาทิตย์ 1=จันทร์ 2=อังคาร 3=พุธ 4=พฤหัส 5=ศุกร์
  day_of_week   SMALLINT NOT NULL CHECK (day_of_week BETWEEN 0 AND 5),
  period_no     SMALLINT NOT NULL,
  span_periods  SMALLINT NOT NULL DEFAULT 1 CHECK (span_periods IN (1, 2)),
  academic_year INT     NOT NULL,
  semester      SMALLINT NOT NULL CHECK (semester IN (1, 2)),
  note          TEXT,
  UNIQUE (teacher_id, day_of_week, period_no, academic_year, semester)
);

-- 3. RLS
ALTER TABLE teacher_schedules ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "sched_all" ON teacher_schedules;
CREATE POLICY "sched_own" ON teacher_schedules
  FOR ALL TO authenticated
  USING (
    teacher_id IN (
      SELECT id FROM teachers WHERE profile_id = auth.uid()
    )
    OR get_user_role() = 'admin'
  )
  WITH CHECK (
    teacher_id IN (
      SELECT id FROM teachers WHERE profile_id = auth.uid()
    )
    OR get_user_role() = 'admin'
  );

-- 4. system_config keys (insert ถ้ายังไม่มี)
INSERT INTO system_config (key, value) VALUES
  ('hasFriday',            'false'),
  ('scheduleVisionEnabled','false'),
  ('geminiApiKey',         '')
ON CONFLICT (key) DO NOTHING;
