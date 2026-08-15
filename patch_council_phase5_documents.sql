-- ระบบงานสภานักเรียน Phase 5 — เอกสารขออนุมัติโครงการ/กิจกรรม
-- Workflow: ร่าง(draft) → เสนอครูที่ปรึกษา(pending) → อนุมัติ/ไม่อนุมัติ(approved/rejected)
-- ต่างจากกิจกรรม/ประกาศ (Phase 3) ที่เปิด public read — เอกสารนี้เป็นงานภายในของแอดมิน/ครู/
-- ประธานสภาเท่านั้น (มีรายละเอียดงบประมาณ/หลักการเหตุผลที่ไม่จำเป็นต้องเปิดให้นักเรียนทั่วไปเห็น)

create table if not exists public.council_documents (
  id bigint generated always as identity primary key,
  activity_id bigint references public.council_activities(id) on delete set null,
  title text not null,
  rationale text,
  objective text,
  budget numeric,
  owner_text text,
  status text not null default 'draft' check (status in ('draft','pending','approved','rejected')),
  approved_by_teacher_id integer references public.teachers(id) on delete set null,
  approval_comment text,
  academic_year integer not null,
  created_by_student_id integer references public.students(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.council_documents enable row level security;

create policy council_documents_admin_chair_read on public.council_documents for select
  using (
    get_user_role() in ('admin','teacher')
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  );

create policy council_documents_admin_chair_write on public.council_documents for all
  using (
    get_user_role() in ('admin','teacher')
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  )
  with check (
    get_user_role() in ('admin','teacher')
    or exists (select 1 from public.profiles where id = auth.uid() and is_also_admin = true)
    or exists (
      select 1 from public.council_members cm
      join public.council_positions cp on cp.id = cm.position_id
      join public.students s on s.id = cm.student_id
      where s.profile_id = auth.uid() and cm.status = 'active' and cp.is_elected = true
    )
  );
