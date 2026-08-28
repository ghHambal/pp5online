-- patch_certificates_teacher_recipients.sql
-- ระบบเกียรติบัตรกลาง — เพิ่มการรองรับ "ผู้รับ" เป็นครูได้ด้วย (เดิมรับได้แค่นักเรียน)
--
-- หมายเหตุ: migration นี้ถูก apply เข้า production ผ่าน Supabase MCP ไปแล้ว (2026-08-28) ไฟล์นี้เป็น
-- historical record ตามธรรมเนียมของโปรเจกต์เท่านั้น — ตอน apply พบว่าตาราง certificates ยังว่างอยู่
-- (0 แถว) จึงทำ rename column student_name → recipient_name ตรงๆ ได้ปลอดภัย ไม่มีข้อมูลสูญหาย

alter table certificates alter column student_id drop not null;
alter table certificates rename column student_name to recipient_name;

alter table certificates add column recipient_type text not null default 'student' check (recipient_type in ('student','teacher'));
alter table certificates add column teacher_id integer references teachers(id) on delete cascade;

-- exactly-one: ผู้รับเป็นนักเรียนต้องมี student_id (ไม่มี teacher_id) หรือเป็นครูต้องมี teacher_id (ไม่มี student_id)
alter table certificates add constraint certificates_recipient_shape_check check (
  (recipient_type = 'student' and student_id is not null and teacher_id is null)
  or (recipient_type = 'teacher' and teacher_id is not null and student_id is null)
);

create index certificates_teacher_idx on certificates(teacher_id);

-- ครูอ่านเกียรติบัตรที่ตัวเองได้รับ (คนละสิทธิ์กับ certificates_issuer_all ที่คุมเฉพาะใบที่ตัวเอง "ออก")
create policy certificates_teacher_recipient_read on certificates for select
  using (exists (select 1 from teachers t where t.id = certificates.teacher_id and t.profile_id = auth.uid()));

comment on column certificates.recipient_type is 'ประเภทผู้รับ: student หรือ teacher — คุมว่าใช้ student_id หรือ teacher_id';
comment on column certificates.recipient_name is 'ชื่อผู้รับ (denormalized) — ใช้ได้ทั้งนักเรียนและครู';
