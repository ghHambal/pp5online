-- ตาราง login_logs สำหรับเก็บสถิติการเข้าใช้งานรายวัน/รายเดือน
create table if not exists login_logs (
  id        bigserial primary key,
  user_type text not null check (user_type in ('teacher', 'student')),
  logged_at timestamptz not null default now()
);

alter table login_logs enable row level security;

-- ทุกคน (รวม anonymous) อ่านได้ — สำหรับแสดงสถิติหน้า login
create policy "public_read_login_logs"
  on login_logs for select using (true);

-- เฉพาะ authenticated users insert ได้
create policy "auth_insert_login_logs"
  on login_logs for insert with check (auth.role() = 'authenticated');

-- index เพื่อ query เร็ว
create index if not exists idx_login_logs_type_date on login_logs(user_type, logged_at);
