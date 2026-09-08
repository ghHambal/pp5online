-- patch_attendance_delegation.sql
-- ฟีเจอร์: มอบหมายหัวหน้า/รองหัวหน้าห้อง (จาก classroom_leaders) เช็คชื่อแทนครูได้
-- ระหว่างคาบสอนจริง — gate ด้วยระดับโดเนท (ฟรี 1 ห้อง / ระดับ 3+ ไม่จำกัด)

-- 0) ปิดช่องโหว่เดิม: policy classes_update/classes_insert เปิดกว้างให้ authenticated
--    ทุกคนแก้ไข classes แถวไหนก็ได้ (qual=true, ไม่มี WITH CHECK) ซึ่งจะทำลายความปลอดภัย
--    ของฟีเจอร์นี้โดยตรง (นักเรียนคนไหนก็เปิด attendance_delegate_enabled เองได้)
--    classes_teacher_own_update/_insert + classes_admin ครอบ flow ที่ถูกต้องอยู่แล้วครบ
--    (ยืนยันผ่าน pg_policies บน production แล้วว่าเป็น policy เก่าที่ยัง active คู่ขนานอยู่จริง)
DROP POLICY IF EXISTS "classes_update" ON public.classes;
DROP POLICY IF EXISTS "classes_insert" ON public.classes;

-- 1) คอลัมน์ใหม่
ALTER TABLE public.classes
  ADD COLUMN IF NOT EXISTS attendance_delegate_enabled boolean NOT NULL DEFAULT false;
COMMENT ON COLUMN public.classes.attendance_delegate_enabled IS
  'เปิดให้หัวหน้า/รองหัวหน้าห้อง (จาก classroom_leaders ตาม class_name ของห้องนี้) เช็คชื่อแทนครูได้ระหว่างคาบสอนจริง — ตั้งได้เองโดยครูเจ้าของห้อง (classes_teacher_own_update ครอบอยู่แล้ว ไม่ต้องเพิ่ม RLS ใหม่)';

ALTER TABLE public.teachers
  ADD COLUMN IF NOT EXISTS attendance_delegate_free_class_id integer REFERENCES classes(id) ON DELETE SET NULL;
COMMENT ON COLUMN public.teachers.attendance_delegate_free_class_id IS
  'ห้องที่ครู (โดเนทยังไม่ถึงระดับ 3) เลือกใช้สิทธิ์มอบหมายเช็คชื่อฟรีได้ 1 ห้อง ล็อกถาวรเมื่อเลือกแล้ว ต้องแอดมิน reset ถึงเปลี่ยนได้ (mirror ของ teachers.smart_classroom_free_class_id)';

-- 2) RLS ใหม่จุดเดียวที่จำเป็นจริง — เขียนแบบ inline EXISTS (ห้ามห่อเป็น SECURITY DEFINER
--    function เด็ดขาด — ตรงกับ root cause ของบั๊ก RLS timeout ที่เพิ่งแก้ไปเมื่อ 2026-09-07,
--    Postgres inline SECURITY DEFINER function ไม่ได้ ทำให้ query ช้าลงมากในห้องข้อมูลเยอะ)
CREATE POLICY "attendances_delegate_write" ON public.attendances
  FOR ALL TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM classes c
      JOIN classroom_leaders cl ON cl.class_name = c.class_name
      JOIN students s ON (s.id = cl.head_student_id OR s.id = cl.vice_head_student_id)
      WHERE c.id = attendances.class_id
        AND c.attendance_delegate_enabled = true
        AND s.profile_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM classes c
      JOIN classroom_leaders cl ON cl.class_name = c.class_name
      JOIN students s ON (s.id = cl.head_student_id OR s.id = cl.vice_head_student_id)
      WHERE c.id = attendances.class_id
        AND c.attendance_delegate_enabled = true
        AND s.profile_id = auth.uid()
    )
  );
