-- ให้ตารางรายชื่อกลางเลือกผู้รับได้ทั้งนักเรียนและคุณครู
alter table public.certificate_recipient_tables
  add column if not exists recipient_type text not null default 'student';

alter table public.certificate_recipient_tables
  drop constraint if exists certificate_recipient_tables_recipient_type_check;

alter table public.certificate_recipient_tables
  add constraint certificate_recipient_tables_recipient_type_check
  check (recipient_type in ('student', 'teacher'));

comment on column public.certificate_recipient_tables.recipient_type is
  'ประเภทผู้รับของตาราง: student ใช้ student_id หรือ teacher ใช้ teacher_id ภายใน rows JSON';
