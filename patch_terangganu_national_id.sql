-- แยกเลขประจำตัวประชาชน (บังคับกรอก) ออกจากเลขที่หนังสือเดินทาง (ไม่บังคับ ยังไม่ทุกคนมีพาสปอร์ต)
-- เดิมฟิลด์ passport_number ถูกใช้เป็น dual-purpose (บัตร ปชช./พาสปอร์ต) ทั้งที่ RPC บังคับกรอกเสมอ
-- ผู้ใช้ยืนยันว่าต้องการทั้งสองฟิลด์แยกกันจริง ไม่ใช่ dual-purpose field เดียว

alter table public.terangganu_camp_registrations add column national_id text;
alter table public.terangganu_camp_teacher_registrations add column national_id text;
comment on column public.terangganu_camp_registrations.national_id is 'เลขประจำตัวประชาชน 13 หลัก (บังคับกรอก) แยกจาก passport_number (ไม่บังคับ ยังไม่ทุกคนมีพาสปอร์ต)';
comment on column public.terangganu_camp_teacher_registrations.national_id is 'เลขประจำตัวประชาชน 13 หลัก (บังคับกรอก) แยกจาก passport_number (ไม่บังคับ ยังไม่ทุกคนมีพาสปอร์ต)';

-- RPC ทั้งสองตัวแก้เพื่อ: (1) เปลี่ยนฟิลด์บังคับจาก passport_number เป็น national_id
-- (2) insert/update คอลัมน์ national_id เพิ่ม (3) แก้ passport_expiry ให้ nullif('') ก่อน cast เป็น date
-- กัน error ตอนส่งค่าว่างมา (เดิมจะ error เพราะ empty string cast เป็น date ไม่ได้)
-- ดูนิยามฟังก์ชันเต็มในไมเกรชัน terangganu_registration_national_id_required ที่รันผ่าน MCP แล้ว
