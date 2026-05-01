-- patch_reading_eval.sql
-- เพิ่ม system_config keys สำหรับระบบผลการประเมินอ่านคิดวิเคราะห์
-- รัน 1 ครั้งใน Supabase SQL Editor

-- key สำหรับชื่อแท็บในชีทกลาง (เพิ่มถ้ายังไม่มี)
INSERT INTO system_config (key, value) VALUES ('readingScoreSheetTab', '')
ON CONFLICT (key) DO NOTHING;

-- key สำหรับคอลัมน์ผลประเมินในชีทรายวิชาของแต่ละห้อง เช่น 'EZ'
INSERT INTO system_config (key, value) VALUES ('readingEvalClassSheetCol', '')
ON CONFLICT (key) DO NOTHING;
