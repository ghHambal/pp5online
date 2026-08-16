-- Phase 6: เสนอคณะทำงาน (ประธาน) → แต่งตั้ง (ครูที่ปรึกษาสภา) — ตารางใหม่ตามสเปคข้อ 6.3/8.6
-- (2026-08-16) — รันแล้วผ่าน Supabase MCP เก็บไว้เป็นบันทึกถาวร ไม่ต้องรันซ้ำ
--
-- ใช้ bigint identity PK + FK ตรงตาม convention เดิมของโปรเจกต์ทั้งหมด (สเปคต้นฉบับเขียนเป็น
-- uuid แบบทั่วไป แต่ทุกตาราง council_* ที่สร้างมาก่อนหน้านี้ในโปรเจกต์นี้ใช้ bigint identity
-- ทั้งหมด — ทำตาม convention จริงของโปรเจกต์แทนสเปคตัวอย่าง)

create table if not exists council_nominations (
  id bigint generated always as identity primary key,
  application_id bigint references council_applications(id) on delete cascade,
  position_id bigint references council_positions(id),
  status text not null default 'proposed', -- proposed | approved | rejected
  proposed_by_student_id bigint references students(id),  -- ประธานสภาที่เสนอ
  decided_by_teacher_id bigint references teachers(id),    -- ครูที่ปรึกษาสภาที่ตัดสิน
  decided_at timestamptz,
  comment text,
  created_at timestamptz not null default now()
);

alter table council_nominations enable row level security;

-- insert ได้เฉพาะนักเรียนที่เป็นสมาชิกสภา active ในตำแหน่งที่ is_elected=true (ประธาน) เท่านั้น
-- ตรงกับ ctx.isChair ที่คำนวณฝั่ง client (council_members.status='active' + is_elected=true)
create policy council_nominations_chair_insert on council_nominations for insert
  with check (
    proposed_by_student_id in (
      select cm.student_id from council_members cm
      join council_positions cp on cp.id = cm.position_id
      where cm.status = 'active' and cp.is_elected = true
        and cm.student_id in (select id from students where profile_id = auth.uid())
    )
  );

-- อ่านได้: admin/teacher (ตัดสิน) + ประธานที่เสนอเอง (ดูสถานะที่เสนอไป) — ไม่ public read
-- (สเปคไม่ได้ระบุให้นักเรียนทั่วไปเห็นรายการที่กำลังเสนอ ต่างจากสภาของเรา/ประกาศที่ public)
create policy council_nominations_read on council_nominations for select
  using (
    get_user_role() = 'admin'
    or get_user_role() = 'teacher'
    or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true)
    or proposed_by_student_id in (select id from students where profile_id = auth.uid())
  );

-- อนุมัติ/ไม่อนุมัติได้เฉพาะ admin/teacher (ครูที่ปรึกษาสภา)
create policy council_nominations_teacher_decide on council_nominations for update
  using (get_user_role() = 'admin' or get_user_role() = 'teacher' or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true))
  with check (get_user_role() = 'admin' or get_user_role() = 'teacher' or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin = true));
