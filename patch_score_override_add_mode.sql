-- เพิ่มโหมด "บวกเพิ่มจากคะแนนเดิม" ให้คอลัมน์ "ปรับคะแนนกลางภาค" (override)
-- นอกเหนือจากโหมดเดิม "เอาคะแนนที่มากกว่า" (max)
ALTER TABLE public.class_score_columns ADD COLUMN IF NOT EXISTS override_mode text DEFAULT 'max';

-- เก็บคะแนนตั้งต้นของคอลัมน์หลัก (ก่อนมีการปรับคะแนนแบบ "บวกเพิ่ม" ครั้งแรก) ไว้คำนวณซ้ำได้ถูกต้อง
-- ทุกครั้งที่แก้ค่าคอลัมน์ปรับ โดยไม่บวกซ้ำสะสม (คะแนนใหม่ = คะแนนตั้งต้น + ค่าคอลัมน์ปรับปัจจุบันเสมอ)
ALTER TABLE public.student_scores ADD COLUMN IF NOT EXISTS pre_override_base numeric;
