-- AZIZGAMES: ล้างรายการซ้ำจาก patch_sports_schedule_2569.sql
-- ใช้หลังจากรัน patch_sports_schedule_2569.sql รุ่นที่เพิ่มรายการรหัสใหม่
-- ลบเฉพาะ 63 รายการที่ patch ดังกล่าวสร้างเมื่อ 14 ก.ย. 2569
-- ไม่ลบรายการเดิม และไม่ลบผลการแข่งขันของรายการเดิม

BEGIN;

CREATE TEMP TABLE tmp_schedule_2569_bad_sports ON COMMIT DROP AS
SELECT id
FROM public.sports
WHERE event_id = '00000000-0000-0000-0000-000000000001'
  AND created_at >= TIMESTAMPTZ '2026-09-14 10:00:00+00'
  AND code IN (
    'AT001-M', 'AT001-W', 'AT002-M', 'AT002-W', 'AT003-M', 'AT004-M',
    'FK001-W', 'FK002-M', 'FK003-M', 'FK003-W', 'FK004-M', 'FK004-W',
    'FK005-M', 'FK005-W', 'FK006-M', 'FK007', 'FK008-M', 'FK008-W',
    'FK009-M', 'FK009-W', 'FK010-W', 'FK011-W', 'FK012-W', 'FK013-W',
    'FK014-M', 'FK014-W', 'FK015-W',
    'SP001-M-J', 'SP001-M-S', 'SP002-M-J', 'SP002-M-S',
    'SP003-W-J', 'SP003-W-S', 'SP004-M-J', 'SP004-M-S',
    'SP005-W-J', 'SP005-W-S', 'SP006-M-J', 'SP006-M-S',
    'SP007-M-J', 'SP007-M-S', 'SP009-M-J', 'SP009-M-S',
    'SP009-W-J', 'SP009-W-S', 'SP010-M-J', 'SP010-M-S',
    'SP011-M-SINGLE-J', 'SP011-M-SINGLE-S', 'SP011-M-TEAM-J',
    'SP011-M-TEAM-S', 'SP011-W-SINGLE-J', 'SP011-W-SINGLE-S',
    'SP011-W-TEAM-J', 'SP011-W-TEAM-S', 'SP012-M-SINGLE-J',
    'SP012-M-SINGLE-S', 'SP012-M-TEAM-J', 'SP012-M-TEAM-S',
    'SP012-W-SINGLE-J', 'SP012-W-SINGLE-S', 'SP012-W-TEAM-J',
    'SP012-W-TEAM-S'
  );

DELETE FROM public.matches
WHERE sport_id IN (SELECT id FROM tmp_schedule_2569_bad_sports);

DELETE FROM public.sports
WHERE id IN (SELECT id FROM tmp_schedule_2569_bad_sports);

COMMIT;
