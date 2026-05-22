-- patch_student_sync_log.sql
-- 1. เพิ่ม is_active ใน students (soft-delete สำหรับนักเรียนที่ไม่อยู่ใน sheet ล่าสุด)
-- 2. ตาราง student_sync_logs บันทึกประวัติการซิงก์
-- รัน 1 ครั้งใน Supabase SQL Editor

-- ─── 1. students.is_active ───────────────────────────────────────────────────
ALTER TABLE public.students
  ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

CREATE INDEX IF NOT EXISTS idx_students_is_active
  ON public.students (is_active);

-- ─── 2. student_sync_logs ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.student_sync_logs (
  id               SERIAL      PRIMARY KEY,
  synced_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  triggered_by     TEXT        NOT NULL DEFAULT 'manual'
                               CHECK (triggered_by IN ('manual', 'auto')),
  read_count       INT         NOT NULL DEFAULT 0,
  written_count    INT         NOT NULL DEFAULT 0,
  new_count        INT         NOT NULL DEFAULT 0,
  deactivated_count INT        NOT NULL DEFAULT 0,
  new_students     JSONB       NOT NULL DEFAULT '[]',   -- [{student_code, full_name}]
  deactivated_students JSONB   NOT NULL DEFAULT '[]',   -- [{student_code, full_name}]
  sheet_id         TEXT,
  tab_name         TEXT
);

-- index สำหรับดึง log ล่าสุด
CREATE INDEX IF NOT EXISTS idx_student_sync_logs_synced_at
  ON public.student_sync_logs (synced_at DESC);

ALTER TABLE public.student_sync_logs ENABLE ROW LEVEL SECURITY;

-- admin อ่าน/เขียนได้ทั้งหมด
CREATE POLICY "admin_manage_sync_logs" ON public.student_sync_logs
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
