-- ─── PATCH: CLASSROOM LEADERS V2 (UNIQUE PER ROOM & TEACHER RLS) ───────
-- สร้างตารางเก็บข้อมูลผู้นำห้องเรียนและเกียรติบัตรรายห้องเรียนแบบเดี่ยว เพื่อแก้ปัญหาห้องซ้ำ

-- 1. สร้างตาราง classroom_leaders
CREATE TABLE IF NOT EXISTS public.classroom_leaders (
  class_name           TEXT PRIMARY KEY,
  head_student_id      INT REFERENCES public.students(id) ON DELETE SET NULL,
  vice_head_student_id INT REFERENCES public.students(id) ON DELETE SET NULL,
  head_cert_url        TEXT,
  vice_head_cert_url   TEXT,
  show_cert            BOOLEAN DEFAULT TRUE,
  notes                TEXT,
  updated_at           TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ย้ายข้อมูลหัวหน้า/รองหัวหน้า/เกียรติบัตรที่มีอยู่จาก classes เข้ามาในตารางใหม่
INSERT INTO public.classroom_leaders (class_name, head_student_id, vice_head_student_id, head_cert_url, vice_head_cert_url)
SELECT DISTINCT ON (class_name) class_name, head_student_id, vice_head_student_id, head_cert_url, vice_head_cert_url
FROM public.classes
WHERE head_student_id IS NOT NULL 
   OR vice_head_student_id IS NOT NULL 
   OR head_cert_url IS NOT NULL 
   OR vice_head_cert_url IS NOT NULL
ON CONFLICT (class_name) DO UPDATE
SET head_student_id = EXCLUDED.head_student_id,
    vice_head_student_id = EXCLUDED.vice_head_student_id,
    head_cert_url = EXCLUDED.head_cert_url,
    vice_head_cert_url = EXCLUDED.vice_head_cert_url;

-- 3. เปิดใช้ Row Level Security (RLS)
ALTER TABLE public.classroom_leaders ENABLE ROW LEVEL SECURITY;

-- 4. สร้างนโยบายการเข้าถึงข้อมูล (RLS Policies)
-- 4.1 ให้สิทธิ์ผู้ใช้อะความถูกต้อง/ลงชื่อเข้าใช้งานทุกคนสามารถดูข้อมูลได้
DROP POLICY IF EXISTS "classroom_leaders_select" ON public.classroom_leaders;
CREATE POLICY "classroom_leaders_select" ON public.classroom_leaders
  FOR SELECT TO authenticated USING (true);

-- 4.2 ให้สิทธิ์ผู้ดูแลระบบ (Admin) หรือคุณครูที่มีตำแหน่งที่ได้สิทธิ์ 'menu_classroom_leaders' ในการแก้ไขข้อมูล
DROP POLICY IF EXISTS "classroom_leaders_all" ON public.classroom_leaders;
CREATE POLICY "classroom_leaders_all" ON public.classroom_leaders
  FOR ALL TO authenticated
  USING (
    public.get_user_role() = 'admin'
    OR EXISTS (
      SELECT 1 
      FROM public.role_permissions rp
      JOIN public.teachers t ON rp.position = ANY(COALESCE(t.positions, ARRAY[t.position]))
      WHERE t.profile_id = auth.uid()
        AND rp.feature = 'menu_classroom_leaders'
        AND rp.allowed = TRUE
    )
  )
  WITH CHECK (
    public.get_user_role() = 'admin'
    OR EXISTS (
      SELECT 1 
      FROM public.role_permissions rp
      JOIN public.teachers t ON rp.position = ANY(COALESCE(t.positions, ARRAY[t.position]))
      WHERE t.profile_id = auth.uid()
        AND rp.feature = 'menu_classroom_leaders'
        AND rp.allowed = TRUE
    )
  );

-- 5. บันทึกคำอธิบายคอลัมน์เพื่อความเป็นระเบียบ
COMMENT ON COLUMN public.classroom_leaders.class_name IS 'ชื่อห้องเรียนที่เป็นคีย์หลัก (เช่น ม.4/1)';
COMMENT ON COLUMN public.classroom_leaders.show_cert IS 'แสดงเกียรติบัตรบนพอร์ทัลนักเรียนหรือไม่ (TRUE = แสดง, FALSE = ซ่อน)';
COMMENT ON COLUMN public.classroom_leaders.notes IS 'ช่องหมายเหตุเพิ่มเติมรายห้องเรียน';
