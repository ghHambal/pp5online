-- เพิ่มคอลัมน์ layout (jsonb) ให้เทมเพลตเกียรติบัตรกิจกรรม — เก็บ background + elements (ข้อความลากวางได้)
-- เทมเพลตเก่าที่ไม่มี layout จะ fallback ไปใช้ defaultLayoutFor(preset_key/custom) ที่ฝั่ง JS แทน (ไม่ต้อง backfill)
alter table council_certificate_templates add column if not exists layout jsonb;
