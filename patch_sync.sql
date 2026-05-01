-- patch_sync.sql
-- Sync Engine: system_config keys สำหรับ Central GAS + ชีทกลาง
-- รัน 1 ครั้งใน Supabase SQL Editor

-- 1. Central GAS URL (Admin deploy ครั้งเดียว — ใช้ร่วมกันทุก sync)
INSERT INTO system_config (key, value) VALUES ('centralGasUrl', '') ON CONFLICT (key) DO NOTHING;

-- 2. system_config: Life Skill Sheet (สามัญ/ศาสนา)
INSERT INTO system_config (key, value) VALUES ('lifeSkillSheetIdSamai',   '') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('lifeSkillSheetTabSamai',  'หน้าหลัก') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('lifeSkillSheetIdSadsana', '') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('lifeSkillSheetTabSadsana','หน้าหลัก') ON CONFLICT (key) DO NOTHING;

-- 3. system_config: Reading Score Sheet
INSERT INTO system_config (key, value) VALUES ('readingScoreSheetId',  '') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('readingScoreSheetTab', 'หน้าหลัก') ON CONFLICT (key) DO NOTHING;

-- 4. system_config: Prayer Sheet (ละหมาด) — Solat tab, A3:A สำหรับรหัสนักเรียน, D เป็นต้นไปสำหรับคะแนนรายวัน
INSERT INTO system_config (key, value) VALUES ('prayerSheetId',      '') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('prayerSheetTab',     'Solat') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('prayerStudentRange', 'A3:A200') ON CONFLICT (key) DO NOTHING;

-- Allow admin to save prayer records without teacher_id
ALTER TABLE prayer_records ALTER COLUMN teacher_id DROP NOT NULL;
