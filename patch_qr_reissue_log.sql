-- patch_qr_reissue_log.sql
-- Run this in the Supabase Dashboard SQL Editor to set up the QR reissue log table.
-- ใช้บันทึกสถิติทุกครั้งที่ครูออก QR Code ใหม่ให้นักเรียน (กรณีทำหาย/ชำรุด) พร้อมเลขที่ใบเสร็จ

CREATE TABLE IF NOT EXISTS public.qr_reissue_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  receipt_no SERIAL,
  student_id INT NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  teacher_id INT NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  reason TEXT NOT NULL CHECK (reason IN ('ทำหาย', 'ชำรุด', 'อื่นๆ')),
  note TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_qr_reissue_logs_student_id ON public.qr_reissue_logs(student_id);
CREATE INDEX IF NOT EXISTS idx_qr_reissue_logs_created_at ON public.qr_reissue_logs(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.qr_reissue_logs ENABLE ROW LEVEL SECURITY;

-- Policies for qr_reissue_logs
DROP POLICY IF EXISTS "qr_reissue_teacher_all" ON public.qr_reissue_logs;

CREATE POLICY "qr_reissue_teacher_all"
ON public.qr_reissue_logs
FOR ALL TO authenticated
USING (true)
WITH CHECK (true);
