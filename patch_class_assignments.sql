-- patch_class_assignments.sql
-- ระบบ "งานที่มอบหมาย" — ครูสั่งงาน (แนบไฟล์/รูปได้) นักเรียนส่งงาน (หลายไฟล์ได้)
-- ครูตั้งค่าหักคะแนนกรณีส่งช้าได้ (แบบคงที่ หรือหักตามจำนวนวันที่ช้า)
-- รัน 1 ครั้งใน Supabase SQL Editor

-- ─── ตารางงานที่มอบหมาย ────────────────────────────────────────────────────
create table if not exists public.class_assignments (
  id                bigint generated always as identity primary key,
  class_id          integer not null references public.classes(id) on delete cascade,
  teacher_id        integer not null references public.teachers(id) on delete cascade,
  score_column_id   integer references public.class_score_columns(id) on delete set null,
  title             text not null,
  description       text,
  attachment_urls    jsonb not null default '[]'::jsonb,  -- [{url, name}]
  due_at            timestamptz,
  late_penalty_mode text not null default 'none' check (late_penalty_mode in ('none','flat','per_day')),
  late_penalty_value numeric not null default 0,          -- flat: หักครั้งเดียวกี่คะแนน / per_day: หักกี่คะแนนต่อวันที่ช้า
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists idx_class_assignments_class on public.class_assignments(class_id);

-- ─── ตารางงานที่นักเรียนส่ง ─────────────────────────────────────────────────
create table if not exists public.assignment_submissions (
  id             bigint generated always as identity primary key,
  assignment_id  bigint not null references public.class_assignments(id) on delete cascade,
  student_id     integer not null references public.students(id) on delete cascade,
  file_urls      jsonb not null default '[]'::jsonb,  -- [{url, name}]
  note           text,
  submitted_at   timestamptz not null default now(),
  unique (assignment_id, student_id)
);

create index if not exists idx_assignment_submissions_assignment on public.assignment_submissions(assignment_id);
create index if not exists idx_assignment_submissions_student on public.assignment_submissions(student_id);

alter table public.class_assignments enable row level security;
alter table public.assignment_submissions enable row level security;

-- ─── RLS: class_assignments ────────────────────────────────────────────────
drop policy if exists "class_assignments_teacher_manage" on public.class_assignments;
create policy "class_assignments_teacher_manage"
on public.class_assignments for all to authenticated
using (
  exists (
    select 1 from public.classes c
    join public.master_subjects ms on ms.id = c.course_id
    join public.teachers t on t.id = ms.teacher_id
    where c.id = class_assignments.class_id and t.profile_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.classes c
    join public.master_subjects ms on ms.id = c.course_id
    join public.teachers t on t.id = ms.teacher_id
    where c.id = class_assignments.class_id and t.profile_id = auth.uid()
  )
);

drop policy if exists "class_assignments_student_read" on public.class_assignments;
create policy "class_assignments_student_read"
on public.class_assignments for select to authenticated
using (
  exists (
    select 1 from public.class_students cs
    join public.students s on s.id = cs.student_id
    where cs.class_id = class_assignments.class_id and s.profile_id = auth.uid()
  )
);

drop policy if exists "class_assignments_admin_full" on public.class_assignments;
create policy "class_assignments_admin_full"
on public.class_assignments for all to authenticated
using (
  exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true))
)
with check (
  exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true))
);

-- ─── RLS: assignment_submissions ───────────────────────────────────────────
drop policy if exists "assignment_submissions_student_own" on public.assignment_submissions;
create policy "assignment_submissions_student_own"
on public.assignment_submissions for all to authenticated
using (
  exists (select 1 from public.students s where s.id = assignment_submissions.student_id and s.profile_id = auth.uid())
)
with check (
  exists (select 1 from public.students s where s.id = assignment_submissions.student_id and s.profile_id = auth.uid())
);

drop policy if exists "assignment_submissions_teacher_read" on public.assignment_submissions;
create policy "assignment_submissions_teacher_read"
on public.assignment_submissions for select to authenticated
using (
  exists (
    select 1 from public.class_assignments a
    join public.classes c on c.id = a.class_id
    join public.master_subjects ms on ms.id = c.course_id
    join public.teachers t on t.id = ms.teacher_id
    where a.id = assignment_submissions.assignment_id and t.profile_id = auth.uid()
  )
);

drop policy if exists "assignment_submissions_admin_full" on public.assignment_submissions;
create policy "assignment_submissions_admin_full"
on public.assignment_submissions for all to authenticated
using (
  exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true))
)
with check (
  exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true))
);

-- ─── Storage bucket สำหรับไฟล์งาน (ทั้งไฟล์ที่ครูแนบ + ไฟล์ที่นักเรียนส่ง) ──────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'assignment-files',
  'assignment-files',
  true,
  20971520,  -- 20MB
  array['image/jpeg','image/png','image/webp','image/gif','application/pdf',
        'application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-powerpoint','application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/zip','text/plain']
)
on conflict (id) do update set public = true;

drop policy if exists "assignment-files public read" on storage.objects;
create policy "assignment-files public read"
on storage.objects for select to public
using (bucket_id = 'assignment-files');

drop policy if exists "assignment-files authenticated upload" on storage.objects;
create policy "assignment-files authenticated upload"
on storage.objects for insert to authenticated
with check (bucket_id = 'assignment-files');

drop policy if exists "assignment-files authenticated update" on storage.objects;
create policy "assignment-files authenticated update"
on storage.objects for update to authenticated
using (bucket_id = 'assignment-files');
