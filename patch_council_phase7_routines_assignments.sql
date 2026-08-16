-- Phase 7: กิจกรรม+เช็คอิน QR+รูทีน/มอบหมายงาน — ตารางใหม่ตามสเปคข้อ 6.3/8.7/8.8 (2026-08-16)
-- รันแล้วผ่าน Supabase MCP เก็บไว้เป็นบันทึกถาวร ไม่ต้องรันซ้ำ
--
-- council_routines/council_routine_logs: รูทีนประจำสัปดาห์ของสมาชิกสภา "ติ๊กได้" ต่อสัปดาห์
-- ตัดสินใจให้สมาชิกจัดการรูทีนของตัวเองได้เลย (self-service checklist ส่วนตัว) เพราะสเปคข้อ 8.8
-- ไม่ได้ระบุหน้าจอแอดมินสำหรับสร้างรูทีนแยกต่างหาก — RLS ผูกกับเจ้าของ (member_id -> student_id
-- -> profile_id = auth.uid()) แทนจำกัดแค่ admin/teacher เหมือนตารางตั้งค่าอื่น
--
-- council_assignments: มอบหมายงาน — insert ได้เฉพาะประธานสภา (chair) ตาม pattern เดียวกับ
-- council_nominations_chair_insert ที่ทำไว้ Phase 6

create table if not exists council_routines (
  id bigint generated always as identity primary key,
  member_id bigint references council_members(id) on delete cascade,
  day_of_week int,      -- 0=อาทิตย์ .. 6=เสาร์
  time_range text,
  task text not null,
  location text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists council_routine_logs (
  routine_id bigint references council_routines(id) on delete cascade,
  week_start date not null,   -- วันจันทร์ของสัปดาห์นั้น
  done_at timestamptz not null default now(),
  primary key (routine_id, week_start)
);

create table if not exists council_assignments (
  id bigint generated always as identity primary key,
  member_id bigint references council_members(id),
  task text not null,
  due_date date,
  status text not null default 'open',  -- open | done
  assigned_by_student_id bigint references students(id),
  created_at timestamptz not null default now()
);

alter table council_routines enable row level security;
alter table council_routine_logs enable row level security;
alter table council_assignments enable row level security;

create policy council_routines_self on council_routines for all
  using (
    member_id in (select cm.id from council_members cm where cm.student_id in (select id from students where profile_id = auth.uid()))
    or get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
  )
  with check (
    member_id in (select cm.id from council_members cm where cm.student_id in (select id from students where profile_id = auth.uid()))
    or get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
  );

create policy council_routine_logs_self on council_routine_logs for all
  using (
    routine_id in (
      select r.id from council_routines r join council_members m on m.id = r.member_id
      where m.student_id in (select id from students where profile_id = auth.uid())
    )
    or get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
  )
  with check (
    routine_id in (
      select r.id from council_routines r join council_members m on m.id = r.member_id
      where m.student_id in (select id from students where profile_id = auth.uid())
    )
    or get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
  );

create policy council_assignments_chair_insert on council_assignments for insert
  with check (
    assigned_by_student_id in (
      select cm.student_id from council_members cm join council_positions cp on cp.id = cm.position_id
      where cm.status = 'active' and cp.is_elected = true
        and cm.student_id in (select id from students where profile_id = auth.uid())
    )
  );

create policy council_assignments_read on council_assignments for select
  using (
    get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
    or assigned_by_student_id in (select id from students where profile_id = auth.uid())
    or member_id in (select cm.id from council_members cm where cm.student_id in (select id from students where profile_id = auth.uid()))
  );

create policy council_assignments_update on council_assignments for update
  using (
    get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
    or assigned_by_student_id in (select id from students where profile_id = auth.uid())
    or member_id in (select cm.id from council_members cm where cm.student_id in (select id from students where profile_id = auth.uid()))
  )
  with check (
    get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
    or assigned_by_student_id in (select id from students where profile_id = auth.uid())
    or member_id in (select cm.id from council_members cm where cm.student_id in (select id from students where profile_id = auth.uid()))
  );

create policy council_assignments_delete on council_assignments for delete
  using (
    get_user_role() in ('admin','teacher')
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
    or assigned_by_student_id in (select id from students where profile_id = auth.uid())
  );
