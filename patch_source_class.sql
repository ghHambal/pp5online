-- เพิ่ม source_class_id ใน classes
-- ใช้เชื่อมห้องเรียน "เสมือน" กับห้องที่สอนจริง
-- เมื่อตั้งค่า: ปพ.5 จะดึง attendance + manual scores จาก source แทน

ALTER TABLE classes
  ADD COLUMN IF NOT EXISTS source_class_id BIGINT REFERENCES classes(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_classes_source_class_id ON classes(source_class_id);
