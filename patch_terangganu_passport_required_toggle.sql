-- แก้บั๊กด่วน: passport_number/passport_expiry ยังมี NOT NULL ที่ระดับคอลัมน์ค้างอยู่
-- (ตอน v10.22.486 แก้แค่ RPC ให้ไม่บังคับ แต่ลืมถอด constraint จริงที่ตารางทำให้ครู/นักเรียน
-- ที่ไม่มีพาสปอร์ตกรอกฟอร์มไม่ผ่านจริง — error: null value in column "passport_number" violates not-null constraint)
alter table public.terangganu_camp_registrations
  alter column passport_number drop not null,
  alter column passport_expiry drop not null;
alter table public.terangganu_camp_teacher_registrations
  alter column passport_number drop not null,
  alter column passport_expiry drop not null;

-- เพิ่มสวิตช์ "บังคับกรอกข้อมูลหนังสือเดินทาง" ต่อกิจกรรมค่าย (ปิดโดยดีฟอลต์)
alter table public.terangganu_camp_events
  add column passport_required boolean not null default false;
comment on column public.terangganu_camp_events.passport_required is
  'ถ้า true บังคับกรอกเลขที่/วันหมดอายุหนังสือเดินทางในแบบสำรวจ (ผู้ดูแลเปิดเองภายหลังเมื่อพร้อม)';

-- update_terangganu_event / save_my_terangganu_registration / save_my_terangganu_teacher_registration:
-- เพิ่ม field passport_required และเงื่อนไขบังคับกรอกตามค่านั้น
-- ดูนิยามฟังก์ชันเต็มในไมเกรชัน terangganu_passport_required_toggle_and_notify ที่รันผ่าน MCP แล้ว

-- RPC ใหม่: get_terangganu_missing_passport_targets() — คืนรายชื่อ profile_id ของผู้เข้าร่วมค่าย
-- (นักเรียน+ครู) ที่ยังไม่ได้กรอกเลขที่หนังสือเดินทาง เช็คสิทธิ์ terangganu_can(...,'settings')
-- เรียกจาก edge function send-push ผ่าน target: 'terangganu_missing_passport' (ดู
-- supabase/functions/send-push/index.ts) เพื่อยิง push notification แจ้งเตือนเฉพาะคนที่ขาดข้อมูลจริง
