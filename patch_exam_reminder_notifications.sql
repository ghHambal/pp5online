-- ระบบแจ้งเตือนครูอัตโนมัติเมื่อมีนักเรียนนัดสอบ (สอบย้อนหลัง/สอบปรับคะแนน)
-- รันแล้วบน production ผ่าน Supabase MCP (2026-08-13) — ไฟล์นี้เก็บไว้เป็นบันทึกประวัติ
-- ไม่ต้องรันซ้ำ (ใช้ IF NOT EXISTS / cron.schedule แบบ idempotent อยู่แล้วถ้าจำเป็นต้องรันซ้ำ)

-- ตาราง log กันส่งแจ้งเตือนซ้ำ (unique ต่อครู + วันที่นัดสอบ + ประเภทการเตือน)
create table if not exists public.exam_reminder_log (
  id bigint generated always as identity primary key,
  teacher_id integer not null references public.teachers(id) on delete cascade,
  reminder_date date not null,
  reminder_type text not null check (reminder_type in ('day_before', 'same_day')),
  sent_at timestamptz not null default now(),
  unique (teacher_id, reminder_date, reminder_type)
);

alter table public.exam_reminder_log enable row level security;
-- ไม่มี policy เพิ่ม — เข้าถึงได้เฉพาะ service_role (edge function) เหมือน period_reminder_log

-- pg_cron: ยิง edge function 'notify-exam-reminders' วันละ 2 ครั้ง
-- 11:00 UTC = 18:00 ไทย -> เตือนล่วงหน้า 1 วัน (นัดสอบพรุ่งนี้)
-- 00:00 UTC = 07:00 ไทย -> เตือนซ้ำเช้าวันที่นัดสอบจริง (นัดสอบวันนี้)
select cron.schedule(
  'exam-reminder-day-before',
  '0 11 * * *',
  $$
  select net.http_post(
    url := 'https://isupghduywzqbmnjgtip.supabase.co/functions/v1/notify-exam-reminders',
    headers := jsonb_build_object('Content-Type','application/json','x-cron-secret','pp5-period-reminder-cron-9f3a1c'),
    body := jsonb_build_object('reminderType','day_before')
  );
  $$
);

select cron.schedule(
  'exam-reminder-same-day',
  '0 0 * * *',
  $$
  select net.http_post(
    url := 'https://isupghduywzqbmnjgtip.supabase.co/functions/v1/notify-exam-reminders',
    headers := jsonb_build_object('Content-Type','application/json','x-cron-secret','pp5-period-reminder-cron-9f3a1c'),
    body := jsonb_build_object('reminderType','same_day')
  );
  $$
);
