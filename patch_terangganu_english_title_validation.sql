-- เพิ่มคำนำหน้าชื่อภาษาอังกฤษ (เลือกโดยผู้กรอกเอง) + บังคับชื่อภาษาอังกฤษเป็นตัวพิมพ์ใหญ่เสมอ
-- + ตรวจสอบเลขประจำตัวประชาชนต้องเป็นตัวเลขล้วน 13 หลักพอดี

alter table public.terangganu_camp_registrations add column english_title text;
alter table public.terangganu_camp_teacher_registrations add column english_title text;
comment on column public.terangganu_camp_registrations.english_title is 'คำนำหน้าชื่อภาษาอังกฤษ (MR./MRS./MS./MASTER/MISS) เลือกโดยผู้กรอกเอง';
comment on column public.terangganu_camp_teacher_registrations.english_title is 'คำนำหน้าชื่อภาษาอังกฤษ (MR./MRS./MS./MASTER/MISS) เลือกโดยผู้กรอกเอง';

-- RPC save_my_terangganu_registration / save_my_terangganu_teacher_registration แก้เพิ่ม:
-- (1) english_title เป็นฟิลด์บังคับใหม่ (2) english_name เก็บด้วย upper(trim(...)) เสมอ
-- (3) ตรวจ national_id ด้วย regex ^[0-9]{13}$ ก่อน insert/update ทุกครั้ง
-- ดูนิยามฟังก์ชันเต็มในไมเกรชัน terangganu_registration_title_uppercase_validation ที่รันผ่าน MCP แล้ว
