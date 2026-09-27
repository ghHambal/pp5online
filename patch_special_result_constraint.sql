-- รองรับสถานะพิเศษที่ใช้ทั้งหน้าบันทึกคะแนนทั่วไปและเอกสาร ปพ.5 ACDMVOC
-- เดิม constraint อนุญาตเฉพาะ ข.ร./ข.ส./ม.ส./ข.ป. ทำให้ค่าบังคับเกรด ร/มผ. และ 0/มส/มผ. บันทึกไม่ได้
-- ใช้รูปแบบที่มีหรือไม่มีจุดได้ แต่ยังจำกัดไว้เฉพาะค่าที่ระบบรองรับ

ALTER TABLE public.class_students
  ADD COLUMN IF NOT EXISTS special_result TEXT;

ALTER TABLE public.class_students
  DROP CONSTRAINT IF EXISTS class_students_special_result_check;

ALTER TABLE public.class_students
  ADD CONSTRAINT class_students_special_result_check
  CHECK (
    special_result IS NULL
    OR replace(btrim(special_result), '.', '') IN ('0', 'ร', 'มส', 'มผ', 'ขร', 'ขส', 'ขป')
  );
