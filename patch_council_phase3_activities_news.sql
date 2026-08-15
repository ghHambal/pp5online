-- ระบบงานสภานักเรียน Phase 3 — กิจกรรมประจำปี + ประกาศสภา
-- ต่อจาก Phase 1 (สมัคร+รับรอง) และ Phase 2 (สัมภาษณ์→เลือกตั้ง→แต่งตั้ง)
--
-- เพิ่มสิทธิ์ "ประธานสภา" (chair) ที่ล็อกอินเป็นนักเรียน — ตรวจจาก council_members ที่ status
-- active และตำแหน่งเป็น is_elected=true (ตอนนี้มีแค่ประธานที่ is_elected) ให้เขียน
-- กิจกรรม/ประกาศได้เท่าๆ กับแอดมิน โดยไม่ต้องผ่าน get_user_role()='admin' (เพราะ role จริง
-- ของนักเรียนคนนี้คือ 'student' ไม่ใช่ 'admin')

create table if not exists public.council_activities (
  id bigint generated always as identity primary key,
  title text not null,
  detail text,
  gender text check (gender in ('M','W')), -- null = ทำร่วมกันทั้งสองสภา
  activity_date date,
  budget numeric,
  owner_text text, -- ชื่อฝ่าย/ผู้รับผิดชอบแบบข้อความอิสระ (ไม่ผูก FK เพื่อความง่าย เปลี่ยนคนได้อิสระ)
  status text not null default 'planned' check (status in ('planned','ongoing','completed','cancelled')),
  academic_year integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.council_activity_attendance (
  id bigint generated always as identity primary key,
  activity_id bigint not null references public.council_activities(id) on delete cascade,
  member_id bigint not null references public.council_members(id) on delete cascade,
  checked_in_at timestamptz not null default now(),
  unique(activity_id, member_id)
);

create table if not exists public.council_announcements (
  id bigint generated always as identity primary key,
  type text not null default 'info' check (type in ('info','ack','urgent')),
  audience text not null default 'all' check (audience in ('all','M','W')),
  title text not null,
  body text,
  pinned boolean not null default false,
  posted_by_teacher_id integer references public.teachers(id) on delete set null,
  posted_by_student_id integer references public.students(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.council_announcement_acks (
  id bigint generated always as identity primary key,
  announcement_id bigint not null references public.council_announcements(id) on delete cascade,
  student_id integer not null references public.students(id) on delete cascade,
  acked_at timestamptz not null default now(),
  unique(announcement_id, student_id)
);

alter table public.council_activities enable row level security;
alter table public.council_activity_attendance enable row level security;
alter table public.council_announcements enable row level security;
alter table public.council_announcement_acks enable row level security;

create policy council_activities_public_read on public.council_activities for select using (true);
create policy council_announcements_public_read on public.council_announcements for select using (true);

create policy council_activities_admin_chair_write on public.council_activities for all
  using (
    get_user_role() = 'admin'
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  )
  with check (
    get_user_role() = 'admin'
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  );

create policy council_announcements_admin_chair_write on public.council_announcements for all
  using (
    get_user_role() = 'admin'
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  )
  with check (
    get_user_role() = 'admin'
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  );

-- เช็คชื่อกิจกรรม — สมาชิกสภาเช็คชื่อตัวเองได้ (self insert), แอดมิน/ประธานเช็คแทนคนอื่นได้ (manual)
create policy council_attendance_self_insert on public.council_activity_attendance for insert
  with check (
    member_id in (
      select cm.id from public.council_members cm join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid()
    )
  );

create policy council_attendance_public_read on public.council_activity_attendance for select using (true);

create policy council_attendance_admin_chair_write on public.council_activity_attendance for all
  using (
    get_user_role() = 'admin'
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  )
  with check (
    get_user_role() = 'admin'
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  );

-- ประกาศ — ทุกคนอ่านได้ (กรอง audience ฝั่ง client), นักเรียนกดรับทราบของตัวเองได้
create policy council_ack_self_insert on public.council_announcement_acks for insert
  with check (student_id in (select id from public.students where profile_id = auth.uid()));

create policy council_ack_self_read on public.council_announcement_acks for select
  using (student_id in (select id from public.students where profile_id = auth.uid()));

create policy council_ack_admin_read on public.council_announcement_acks for select
  using (get_user_role() in ('admin','teacher'));
