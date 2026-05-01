-- patch_class_sync.sql
-- Class Info Sync: system_config keys สำหรับ cell mapping ข้อมูลรายวิชา
-- รัน 1 ครั้งใน Supabase SQL Editor

-- Tab name
INSERT INTO system_config (key, value) VALUES ('classInfoTab',            'หน้าหลัก') ON CONFLICT (key) DO NOTHING;

-- ข้อมูลวิชา
INSERT INTO system_config (key, value) VALUES ('classInfoSubjectNameCell', 'C9')  ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoSubjectCodeCell', 'C10') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoCreditCell',      'C11') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoGradeCell',       'C14') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoHeadStudentCell', 'C16') ON CONFLICT (key) DO NOTHING;

-- วันสอน 6 คาบแรก
INSERT INTO system_config (key, value) VALUES ('classInfoDay1Cell',        'E26') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoDay2Cell',        'E27') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoDay3Cell',        'E28') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoDay4Cell',        'E29') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoDay5Cell',        'E30') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoDay6Cell',        'E31') ON CONFLICT (key) DO NOTHING;

-- ข้อมูลครู
INSERT INTO system_config (key, value) VALUES ('classInfoTeacherNameCell', 'C32') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoTeacherPhoneCell','C33') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoDeptCell',        'C35') ON CONFLICT (key) DO NOTHING;
INSERT INTO system_config (key, value) VALUES ('classInfoHeadDeptCell',    'C36') ON CONFLICT (key) DO NOTHING;
