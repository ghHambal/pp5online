-- Keep a reversible record of legacy duplicate assignments before enforcing
-- one current advisor per room/category/year/semester.
create table if not exists public.homeroom_teacher_assignment_archive (
  archive_id bigint generated always as identity primary key,
  original_id bigint not null unique,
  teacher_id bigint,
  main_room text,
  category text,
  academic_year integer,
  semester integer,
  archived_at timestamptz not null default now(),
  archive_reason text not null default 'duplicate_assignment_keep_latest_id'
);

alter table public.homeroom_teacher_assignment_archive enable row level security;
grant select on public.homeroom_teacher_assignment_archive to authenticated;

drop policy if exists "Admins can inspect archived homeroom assignments"
  on public.homeroom_teacher_assignment_archive;
create policy "Admins can inspect archived homeroom assignments"
  on public.homeroom_teacher_assignment_archive
  for select to authenticated
  using (
    get_user_role() = 'admin'
    or exists (
      select 1
      from public.profiles
      where id = auth.uid() and is_also_admin is true
    )
  );

with ranked as (
  select
    id,
    row_number() over (
      partition by main_room, category, academic_year, semester
      order by id desc
    ) as row_number
  from public.homeroom_teachers
)
insert into public.homeroom_teacher_assignment_archive (
  original_id, teacher_id, main_room, category, academic_year, semester
)
select h.id, h.teacher_id, h.main_room, h.category, h.academic_year, h.semester
from public.homeroom_teachers h
join ranked r on r.id = h.id
where r.row_number > 1
on conflict (original_id) do nothing;

delete from public.homeroom_teachers h
using public.homeroom_teachers newer
where h.main_room = newer.main_room
  and h.category = newer.category
  and h.academic_year = newer.academic_year
  and h.semester = newer.semester
  and h.id < newer.id;

alter table public.homeroom_teachers
  drop constraint if exists homeroom_teachers_teacher_id_main_room_category_academic_ye_key;

create unique index if not exists homeroom_teachers_room_category_year_sem_key
  on public.homeroom_teachers (main_room, category, academic_year, semester);
