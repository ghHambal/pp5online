-- ระบบงานสภานักเรียน Phase 1 (รับสมัคร → สัมภาษณ์ → เลือกตั้งประธาน → บริหารรายชื่อ)
-- รันแล้วบน production ผ่าน Supabase MCP (2026-08-14) — ไฟล์นี้เก็บไว้เป็นบันทึกประวัติ
-- ไม่ต้องรันซ้ำ (ใช้ IF NOT EXISTS อยู่แล้วถ้าจำเป็นต้องรันซ้ำ)
--
-- สเปคเต็มดูที่ memory student_council_system_blueprint.md
--
-- หมายเหตุสำคัญ: gender เก็บเป็น 'M'/'W' มาตรฐานของโมดูลนี้เอง (ไม่ผูกกับ students.gender
-- ที่ค่าจริงปนกัน 'ชาย'/'หญิง'/'M' อยู่ในข้อมูลจริง — โค้ดฝั่ง query ที่เทียบเพศนักเรียนต้อง
-- normalize เองเสมอ เช่น
--   case when students.gender in ('ชาย','M') then 'M' when students.gender in ('หญิง','W') then 'W' end
--
-- การตั้งค่าทั่วไป (โลโก้, สีธีม, ห้วงการปฏิบัติหน้าที่, เกณฑ์คุณสมบัติ, ข้อความขอบคุณหลังโหวต ฯลฯ)
-- ไม่ได้สร้างตารางใหม่ — ใช้ตาราง system_config เดิมที่มีอยู่แล้ว (key prefix "council_")
-- เพราะมี RLS/API (getSystemConfig) พร้อมใช้อยู่แล้ว ตรงตามหลักการ "reuse infra เดิม"

create table if not exists public.council_positions (
  id bigint generated always as identity primary key,
  gender text not null check (gender in ('M','W')),
  position_name text not null,
  seats_count integer not null default 1,
  is_elected boolean not null default false, -- true เฉพาะตำแหน่งประธาน (ตำแหน่งเดียวที่ผ่านเลือกตั้ง)
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.council_applications (
  id bigint generated always as identity primary key,
  student_id integer not null references public.students(id) on delete cascade,
  position_id bigint not null references public.council_positions(id) on delete restrict,
  academic_year integer not null,
  motivation text,
  photo_url text,
  endorsing_teacher_id integer references public.teachers(id) on delete set null,
  status text not null default 'pending' check (status in ('pending','interview_scheduled','interviewed','candidate','appointed','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.council_interviews (
  id bigint generated always as identity primary key,
  application_id bigint not null references public.council_applications(id) on delete cascade,
  scheduled_at timestamptz,
  location text,
  interviewer_teacher_id integer references public.teachers(id) on delete set null,
  result text check (result in ('pass','fail')),
  score numeric,
  comment text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.council_election_config (
  id bigint generated always as identity primary key,
  gender text not null check (gender in ('M','W')),
  academic_year integer not null,
  opens_at timestamptz,
  closes_at timestamptz,
  results_published_at timestamptz, -- gate แยกจาก closes_at — ต้องกด "เผยแพร่ผล" เองถึงจะโชว์ฝั่งนักเรียน
  created_at timestamptz not null default now()
);

create table if not exists public.council_candidates (
  id bigint generated always as identity primary key,
  election_config_id bigint not null references public.council_election_config(id) on delete cascade,
  application_id bigint not null references public.council_applications(id) on delete cascade,
  student_id integer not null references public.students(id) on delete cascade,
  ballot_number integer,
  campaign_statement text,
  photo_url text,
  created_at timestamptz not null default now(),
  unique (election_config_id, student_id)
);

create table if not exists public.council_votes (
  id bigint generated always as identity primary key,
  election_config_id bigint not null references public.council_election_config(id) on delete cascade,
  candidate_id bigint not null references public.council_candidates(id) on delete cascade,
  voter_student_id integer not null references public.students(id) on delete cascade,
  voted_at timestamptz not null default now(),
  unique (election_config_id, voter_student_id)
);

create table if not exists public.council_members (
  id bigint generated always as identity primary key,
  position_id bigint not null references public.council_positions(id) on delete restrict,
  student_id integer not null references public.students(id) on delete cascade,
  academic_year integer not null,
  term_start_date date,
  term_end_date date,
  source text not null check (source in ('elected','appointed')),
  status text not null default 'active' check (status in ('active','resigned','removed')),
  appointed_by_teacher_id integer references public.teachers(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS: ตารางที่ต้องโชว์ public (หน้า hub ให้นักเรียนทุกคนดูได้) เปิด SELECT กว้าง
-- ตารางที่ละเอียดอ่อน (ใบสมัคร/สัมภาษณ์/โหวต) ปิดหมด รอ RPC เฉพาะจุดตอนสร้างหน้าจริง
alter table public.council_positions enable row level security;
alter table public.council_applications enable row level security;
alter table public.council_interviews enable row level security;
alter table public.council_election_config enable row level security;
alter table public.council_candidates enable row level security;
alter table public.council_votes enable row level security;
alter table public.council_members enable row level security;

create policy council_positions_public_read on public.council_positions for select using (true);
create policy council_election_config_public_read on public.council_election_config for select using (true);
create policy council_candidates_public_read on public.council_candidates for select using (true);
create policy council_members_public_read on public.council_members for select using (true);

create policy council_positions_admin_write on public.council_positions for all
  using (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true))
  with check (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true));

create policy council_election_config_admin_write on public.council_election_config for all
  using (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true))
  with check (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true));

create policy council_members_admin_write on public.council_members for all
  using (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true))
  with check (get_user_role() = 'admin' or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true));

-- Seed โครงสร้างตำแหน่งมาตรฐานเริ่มต้น (แก้ไขได้เองทีหลังจากหน้าตั้งค่า — นี่แค่ค่าเริ่มต้น)
insert into public.council_positions (gender, position_name, seats_count, is_elected, sort_order) values
  ('M', 'ประธานสภานักเรียน', 1, true, 1),
  ('M', 'รองประธานสภานักเรียน', 2, false, 2),
  ('M', 'เลขานุการ', 1, false, 3),
  ('M', 'เหรัญญิก', 1, false, 4),
  ('M', 'ฝ่ายวิชาการ', 1, false, 5),
  ('M', 'ฝ่ายกิจกรรม', 1, false, 6),
  ('M', 'ฝ่ายประชาสัมพันธ์', 1, false, 7),
  ('M', 'ฝ่ายปฏิคมและสวัสดิการ', 1, false, 8),
  ('W', 'ประธานสภานักเรียน', 1, true, 1),
  ('W', 'รองประธานสภานักเรียน', 2, false, 2),
  ('W', 'เลขานุการ', 1, false, 3),
  ('W', 'เหรัญญิก', 1, false, 4),
  ('W', 'ฝ่ายวิชาการ', 1, false, 5),
  ('W', 'ฝ่ายกิจกรรม', 1, false, 6),
  ('W', 'ฝ่ายประชาสัมพันธ์', 1, false, 7),
  ('W', 'ฝ่ายปฏิคมและสวัสดิการ', 1, false, 8);
