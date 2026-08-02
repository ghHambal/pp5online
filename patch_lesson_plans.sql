-- patch_lesson_plans.sql
-- กำหนดการสอน (หัวข้อรายสัปดาห์ ผูกกับรายวิชา) + แผนการจัดการเรียนรู้หน้าเดียว (ยืดหยุ่นจำนวนแผน)
-- + บันทึกหลังสอน/เซ็นชื่อ (ผูกกับห้องจริง+สัปดาห์จริงที่สอน) — ทั้งหมดอยู่ใน Smart Classroom
-- รัน 1 ครั้งใน Supabase SQL Editor

-- ─── กำหนดการสอน: หัวข้อที่สอนแต่ละช่วงสัปดาห์ (ผูกกับรายวิชา ใช้ร่วมกันทุกห้องที่สอนวิชานี้) ──
create table if not exists public.course_syllabus_items (
  id          bigint generated always as identity primary key,
  course_id   integer not null references public.master_subjects(id) on delete cascade,
  week_start  integer not null check (week_start > 0),
  week_end    integer not null check (week_end >= week_start),
  topic       text not null,
  description text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists idx_course_syllabus_items_course on public.course_syllabus_items(course_id);

-- ─── แผนการจัดการเรียนรู้ (หน้าเดียว) — ผูกกับรายวิชา จำนวนแผนไม่จำกัด/ยืดหยุ่นตามช่วงสัปดาห์ ──
create table if not exists public.lesson_plans (
  id              bigint generated always as identity primary key,
  course_id       integer not null references public.master_subjects(id) on delete cascade,
  teacher_id      integer not null references public.teachers(id) on delete cascade,
  title           text not null,
  week_start      integer not null check (week_start > 0),
  week_end        integer not null check (week_end >= week_start),
  objectives      text,   -- จุดประสงค์การเรียนรู้
  key_concept     text,   -- สาระสำคัญ
  activities_intro text,  -- นำเข้าสู่บทเรียน
  activities_main  text,  -- กิจกรรมหลัก
  activities_wrap  text,  -- สรุป
  media           text,   -- สื่อ/อุปกรณ์
  assessment      text,   -- การวัดประเมินผล
  homework        text,   -- งาน/การบ้าน
  teacher_notes   text,   -- หมายเหตุครู
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);
create index if not exists idx_lesson_plans_course on public.lesson_plans(course_id);

-- ─── บันทึกหลังสอน + เซ็นชื่อ — ผูกกับห้องจริงและสัปดาห์จริงที่สอน (คนละรอบกันได้ต่อห้อง) ──
create table if not exists public.lesson_plan_reflections (
  id                  bigint generated always as identity primary key,
  lesson_plan_id      bigint not null references public.lesson_plans(id) on delete cascade,
  class_id            integer not null references public.classes(id) on delete cascade,
  teacher_id          integer not null references public.teachers(id) on delete cascade,
  week_no             integer not null check (week_no > 0),
  reflection_text     text,   -- บันทึกหลังสอน
  issues_solutions    text,   -- ปัญหา/แนวทางแก้ไข
  signature_data_url  text,   -- ลายเซ็นวาดจากจอ (PNG base64 data URL)
  signed_at           timestamptz,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  unique (lesson_plan_id, class_id, week_no)
);
create index if not exists idx_lesson_plan_reflections_plan on public.lesson_plan_reflections(lesson_plan_id);
create index if not exists idx_lesson_plan_reflections_class on public.lesson_plan_reflections(class_id);

alter table public.course_syllabus_items enable row level security;
alter table public.lesson_plans enable row level security;
alter table public.lesson_plan_reflections enable row level security;

-- ─── RLS: course_syllabus_items ────────────────────────────────────────────
drop policy if exists "syllabus_teacher_manage" on public.course_syllabus_items;
create policy "syllabus_teacher_manage"
on public.course_syllabus_items for all to authenticated
using (
  exists (select 1 from public.master_subjects ms join public.teachers t on t.id = ms.teacher_id
          where ms.id = course_syllabus_items.course_id and t.profile_id = auth.uid())
)
with check (
  exists (select 1 from public.master_subjects ms join public.teachers t on t.id = ms.teacher_id
          where ms.id = course_syllabus_items.course_id and t.profile_id = auth.uid())
);

drop policy if exists "syllabus_student_read" on public.course_syllabus_items;
create policy "syllabus_student_read"
on public.course_syllabus_items for select to authenticated
using (
  exists (
    select 1 from public.classes c
    join public.class_students cs on cs.class_id = c.id
    join public.students s on s.id = cs.student_id
    where c.course_id = course_syllabus_items.course_id and s.profile_id = auth.uid()
  )
);

drop policy if exists "syllabus_admin_full" on public.course_syllabus_items;
create policy "syllabus_admin_full"
on public.course_syllabus_items for all to authenticated
using (exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true)))
with check (exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true)));

-- ─── RLS: lesson_plans (ครูเจ้าของวิชา + admin เท่านั้น — ไม่ใช่เอกสารสาธารณะ) ──
drop policy if exists "lesson_plans_teacher_manage" on public.lesson_plans;
create policy "lesson_plans_teacher_manage"
on public.lesson_plans for all to authenticated
using (
  exists (select 1 from public.master_subjects ms join public.teachers t on t.id = ms.teacher_id
          where ms.id = lesson_plans.course_id and t.profile_id = auth.uid())
)
with check (
  exists (select 1 from public.master_subjects ms join public.teachers t on t.id = ms.teacher_id
          where ms.id = lesson_plans.course_id and t.profile_id = auth.uid())
);

drop policy if exists "lesson_plans_admin_full" on public.lesson_plans;
create policy "lesson_plans_admin_full"
on public.lesson_plans for all to authenticated
using (exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true)))
with check (exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true)));

-- ─── RLS: lesson_plan_reflections ───────────────────────────────────────────
drop policy if exists "reflections_teacher_manage" on public.lesson_plan_reflections;
create policy "reflections_teacher_manage"
on public.lesson_plan_reflections for all to authenticated
using (
  exists (
    select 1 from public.classes c
    join public.master_subjects ms on ms.id = c.course_id
    join public.teachers t on t.id = ms.teacher_id
    where c.id = lesson_plan_reflections.class_id and t.profile_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.classes c
    join public.master_subjects ms on ms.id = c.course_id
    join public.teachers t on t.id = ms.teacher_id
    where c.id = lesson_plan_reflections.class_id and t.profile_id = auth.uid()
  )
);

drop policy if exists "reflections_admin_full" on public.lesson_plan_reflections;
create policy "reflections_admin_full"
on public.lesson_plan_reflections for all to authenticated
using (exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true)))
with check (exists (select 1 from public.profiles where id = auth.uid() and (role = 'admin' or is_also_admin = true)));
