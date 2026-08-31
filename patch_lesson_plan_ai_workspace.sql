-- AI workspace สำหรับกำหนดการสอน/แผนหน้าเดียว + ลายเซ็น 3 ฝ่าย
-- รัน 1 ครั้งใน Supabase SQL Editor ก่อนเปิดใช้เวอร์ชัน 10.22.627

alter table public.course_syllabus_items
  add column if not exists date_start date,
  add column if not exists date_end date,
  add column if not exists teaching_methods text,
  add column if not exists notes text,
  add column if not exists source_json jsonb;

alter table public.lesson_plans
  add column if not exists session_number integer not null default 1 check (session_number > 0),
  add column if not exists lesson_date date,
  add column if not exists duration_minutes integer check (duration_minutes is null or duration_minutes > 0),
  add column if not exists unit_title text,
  add column if not exists standards text,
  add column if not exists schedule_alignment text,
  add column if not exists deviation_reason text,
  add column if not exists source_json jsonb;

alter table public.lesson_plan_reflections
  add column if not exists suggestions text,
  add column if not exists class_head_name text,
  add column if not exists class_head_signature_path text,
  add column if not exists class_head_signed_at timestamptz,
  add column if not exists teacher_name text,
  add column if not exists teacher_signature_path text,
  add column if not exists teacher_signed_at timestamptz,
  add column if not exists dept_head_name text,
  add column if not exists dept_head_signature_path text,
  add column if not exists dept_head_signed_at timestamptz;

-- เก็บลายเซ็นเป็นไฟล์ private แทน Base64 ในแถวฐานข้อมูล
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'lesson-plan-assets',
  'lesson-plan-assets',
  false,
  5242880,
  array['image/png','image/jpeg','image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists lesson_plan_assets_select_own on storage.objects;
create policy lesson_plan_assets_select_own
on storage.objects for select to authenticated
using (
  bucket_id = 'lesson-plan-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists lesson_plan_assets_insert_own on storage.objects;
create policy lesson_plan_assets_insert_own
on storage.objects for insert to authenticated
with check (
  bucket_id = 'lesson-plan-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists lesson_plan_assets_update_own on storage.objects;
create policy lesson_plan_assets_update_own
on storage.objects for update to authenticated
using (
  bucket_id = 'lesson-plan-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'lesson-plan-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists lesson_plan_assets_delete_own on storage.objects;
create policy lesson_plan_assets_delete_own
on storage.objects for delete to authenticated
using (
  bucket_id = 'lesson-plan-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

comment on column public.lesson_plans.source_json is
  'JSON ต้นฉบับที่ครูนำกลับมาจาก AI ตาม schema pp5.lesson_plan.v1';
comment on column public.course_syllabus_items.source_json is
  'JSON ต้นฉบับที่ครูนำกลับมาจาก AI ตาม schema pp5.schedule.v1';
comment on column public.lesson_plan_reflections.signature_data_url is
  'Legacy Base64 ลายเซ็นครู; ข้อมูลใหม่ใช้ teacher_signature_path ใน private storage';
