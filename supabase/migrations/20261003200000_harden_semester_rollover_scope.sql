-- Harden the semester rollover boundary.
--
-- The rollover is intentionally non-destructive: historical classes, scores,
-- attendance and payments remain in place.  This migration makes the new
-- workspace boundary explicit for courses, dates and the student portal.

-- Courses were historically not term-scoped.  Backfill existing rows to the
-- term that is currently configured before enforcing current-term inserts.
alter table public.master_subjects
  add column if not exists academic_year integer,
  add column if not exists semester integer;

alter table public.classes
  add column if not exists academic_year integer,
  add column if not exists semester integer;

do $block$
declare
  v_year integer := 2569;
  v_sem integer := 1;
begin
  select value::integer into v_year
  from public.system_config where key = 'academicYear';
  select value::integer into v_sem
  from public.system_config where key = 'semester';

  v_year := coalesce(v_year, 2569);
  v_sem := case when v_sem in (1, 2) then v_sem else 1 end;

  update public.master_subjects
  set academic_year = coalesce(academic_year, v_year),
      semester = coalesce(semester, v_sem)
  where academic_year is null or semester is null;

  update public.classes
  set academic_year = coalesce(academic_year, v_year),
      semester = coalesce(semester, v_sem)
  where academic_year is null or semester is null;
end
$block$;

create index if not exists master_subjects_term_teacher_idx
  on public.master_subjects (teacher_id, academic_year, semester);

create index if not exists classes_term_idx
  on public.classes (academic_year, semester);

create or replace function public.set_master_subject_current_term()
returns trigger
language plpgsql
set search_path to 'public'
as $function$
declare
  v_year integer;
  v_sem integer;
begin
  if new.academic_year is null or new.semester is null then
    select value::integer into v_year
    from public.system_config where key = 'academicYear';
    select value::integer into v_sem
    from public.system_config where key = 'semester';
    new.academic_year := coalesce(new.academic_year, v_year, 2569);
    new.semester := coalesce(new.semester, case when v_sem in (1, 2) then v_sem else 1 end);
  end if;

  if new.academic_year <= 0 or new.semester not in (1, 2) then
    raise exception 'ภาคเรียนของคอร์สไม่ถูกต้อง';
  end if;
  return new;
end;
$function$;

drop trigger if exists master_subjects_set_current_term on public.master_subjects;
create trigger master_subjects_set_current_term
before insert on public.master_subjects
for each row execute function public.set_master_subject_current_term();

revoke all on function public.set_master_subject_current_term() from public, anon, authenticated;

-- The two-argument function is intentionally disabled so an old cached client
-- cannot start a rollover without supplying the new semester date range.
create or replace function public.admin_start_new_semester(
  p_new_academic_year integer,
  p_new_semester integer
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
begin
  raise exception 'กรุณาโหลดหน้าเว็บเวอร์ชันใหม่ก่อนขึ้นภาคเรียน เพื่อระบุวันเปิดและวันปิดภาคเรียน';
end;
$function$;

create or replace function public.admin_preview_new_semester(
  p_new_academic_year integer,
  p_new_semester integer,
  p_new_semester_start date,
  p_new_semester_end date
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_old_year integer;
  v_old_sem integer;
  v_old_start date;
  v_min_amount integer := 49;
  v_teachers integer := 0;
begin
  if get_user_role() <> 'admin' then
    raise exception 'not authorized';
  end if;
  if p_new_academic_year is null or p_new_academic_year <= 0 then
    raise exception 'ปีการศึกษาไม่ถูกต้อง';
  end if;
  if p_new_semester not in (1, 2) then
    raise exception 'ภาคเรียนต้องเป็น 1 หรือ 2';
  end if;
  if p_new_semester_start is null or p_new_semester_end is null
     or p_new_semester_end < p_new_semester_start then
    raise exception 'ช่วงวันเปิด-ปิดภาคเรียนไม่ถูกต้อง';
  end if;

  select value::integer into v_old_year
  from public.system_config where key = 'academicYear';
  select value::integer into v_old_sem
  from public.system_config where key = 'semester';
  select value::date into v_old_start
  from public.system_config where key = 'semester_start';
  select coalesce(value::integer, 49) into v_min_amount
  from public.system_config where key = 'donationMinAmount';

  if v_old_year = p_new_academic_year and v_old_sem = p_new_semester then
    raise exception 'ปี/เทอมใหม่เหมือนกับปัจจุบัน ไม่มีอะไรต้องทำ';
  end if;

  select count(distinct p.teacher_id)::integer into v_teachers
  from public.payment_requests p
  where p.package_type = 'donation'
    and p.status = 'approved'
    and (v_old_start is null or coalesce(p.reviewed_at, p.created_at)::date >= v_old_start)
    and coalesce(p.donation_base_amount, p.amount) >= coalesce(v_min_amount, 49);

  return json_build_object(
    'ok', true,
    'old_academic_year', v_old_year,
    'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year,
    'new_semester', p_new_semester,
    'new_semester_start', p_new_semester_start,
    'new_semester_end', p_new_semester_end,
    'courses_to_archive', (select count(*) from public.master_subjects where academic_year = v_old_year and semester = v_old_sem),
    'classes_to_archive', (select count(*) from public.classes where academic_year = v_old_year and semester = v_old_sem),
    'eligible_supporters', v_teachers,
    'data_deleted', false
  );
end;
$function$;

create or replace function public.admin_start_new_semester(
  p_new_academic_year integer,
  p_new_semester integer,
  p_new_semester_start date,
  p_new_semester_end date
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_old_year integer;
  v_old_sem integer;
  v_old_start date;
  v_min_amount integer := 49;
  v_step_amount integer := 50;
  v_entitlements_created integer := 0;
begin
  if get_user_role() <> 'admin' then
    raise exception 'not authorized';
  end if;
  if p_new_academic_year is null or p_new_academic_year <= 0 then
    raise exception 'ปีการศึกษาไม่ถูกต้อง';
  end if;
  if p_new_semester not in (1, 2) then
    raise exception 'ภาคเรียนต้องเป็น 1 หรือ 2';
  end if;
  if p_new_semester_start is null or p_new_semester_end is null
     or p_new_semester_end < p_new_semester_start then
    raise exception 'ช่วงวันเปิด-ปิดภาคเรียนไม่ถูกต้อง';
  end if;

  select value::integer into v_old_year
  from public.system_config where key = 'academicYear';
  select value::integer into v_old_sem
  from public.system_config where key = 'semester';
  select value::date into v_old_start
  from public.system_config where key = 'semester_start';
  select coalesce(value::integer, 49) into v_min_amount
  from public.system_config where key = 'donationMinAmount';
  select coalesce(value::integer, 50) into v_step_amount
  from public.system_config where key = 'donationAmountStep';

  if v_min_amount is null or v_min_amount < 1 then v_min_amount := 49; end if;
  if v_step_amount is null or v_step_amount < 1 then v_step_amount := 50; end if;

  if v_old_year = p_new_academic_year and v_old_sem = p_new_semester then
    raise exception 'ปี/เทอมใหม่เหมือนกับปัจจุบัน ไม่มีอะไรต้องทำ';
  end if;

  with donation_totals as (
    select p.teacher_id,
           sum(coalesce(p.donation_base_amount, p.amount))::integer as total_amount
    from public.payment_requests p
    where p.package_type = 'donation'
      and p.status = 'approved'
      and (v_old_start is null or coalesce(p.reviewed_at, p.created_at)::date >= v_old_start)
    group by p.teacher_id
  )
  insert into public.supporter_renewal_entitlements (
    teacher_id, source_academic_year, source_semester,
    source_total_amount, source_tier,
    target_academic_year, target_semester
  )
  select d.teacher_id,
         v_old_year, v_old_sem,
         d.total_amount,
         least(5, floor((d.total_amount - v_min_amount)::numeric / v_step_amount)::integer + 1),
         p_new_academic_year, p_new_semester
  from donation_totals d
  where d.total_amount >= v_min_amount
  on conflict (teacher_id, target_academic_year, target_semester) do nothing;

  get diagnostics v_entitlements_created = row_count;

  update public.system_config set value = p_new_academic_year::text, updated_at = now()
  where key = 'academicYear';
  update public.system_config set value = p_new_semester::text, updated_at = now()
  where key = 'semester';
  insert into public.system_config (key, value, updated_at)
  values ('semester_start', p_new_semester_start::text, now())
  on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at;
  insert into public.system_config (key, value, updated_at)
  values ('semester_end', p_new_semester_end::text, now())
  on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at;
  insert into public.system_config (key, value, updated_at)
  values ('unlimitedTeacherClassCreation', 'true', now())
  on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at;

  update public.teachers_quota
  set total_classes_created = 0, is_paid = false, package_type = null, paid_at = null;
  update public.teachers
  set smart_classroom_free_class_id = null, attendance_delegate_free_class_id = null;

  return json_build_object(
    'ok', true,
    'old_academic_year', v_old_year,
    'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year,
    'new_semester', p_new_semester,
    'semester_start', p_new_semester_start,
    'semester_end', p_new_semester_end,
    'supporter_status_reset', true,
    'renewal_entitlements_created', v_entitlements_created,
    'unlimited_teacher_class_creation', true,
    'courses_created', 0,
    'classes_created', 0,
    'students_enrolled', 0,
    'workspace', 'empty'
  );
end;
$function$;

-- Student portal: return only the current term.  Historical rows remain in
-- the database and are available to the teacher score-history flow.
create or replace function public.get_student_enrolled_classes(p_student_id integer)
returns jsonb
language sql
security definer
set search_path to 'public'
as $function$
  with current_term as (
    select
      coalesce((max(value) filter (where key = 'academicYear'))::integer, 2569) as academic_year,
      coalesce((max(value) filter (where key = 'semester'))::integer, 1) as semester
    from public.system_config
  )
  select coalesce(jsonb_agg(
    jsonb_build_object(
      'id', c.id,
      'class_name', c.class_name,
      'skill_group', c.skill_group,
      'google_sheet_id', c.google_sheet_id,
      'subject_group_override', c.subject_group_override,
      'academic_year', c.academic_year,
      'semester', c.semester,
      'day1_date', c.day1_date,
      'day2_date', c.day2_date,
      'day3_date', c.day3_date,
      'day4_date', c.day4_date,
      'day5_date', c.day5_date,
      'day6_date', c.day6_date,
      'master_subjects', case when ms.id is null then null else jsonb_build_object(
        'id', ms.id,
        'subject_code', ms.subject_code,
        'subject_name', ms.subject_name,
        'dept', ms.dept,
        'grade_level', ms.grade_level,
        'credit', ms.credit,
        'teacher_id', ms.teacher_id,
        'subject_group', ms.subject_group,
        'teachers', case when t.id is null then null else jsonb_build_object(
          'id', t.id, 'full_name', t.full_name, 'phone', t.phone,
          'image_url', t.image_url, 'category', t.category
        ) end
      ) end
    ) order by c.class_name, c.id
  ), '[]'::jsonb)
  from public.students s
  join public.class_students cs on cs.student_id = s.id
  join public.classes c on c.id = cs.class_id
  cross join current_term ct
  left join public.master_subjects ms on ms.id = c.course_id
  left join public.teachers t on t.id = ms.teacher_id
  where s.id = p_student_id
    and s.profile_id = auth.uid()
    and s.is_active = true
    and c.academic_year = ct.academic_year
    and c.semester = ct.semester;
$function$;

revoke all on function public.admin_preview_new_semester(integer, integer, date, date) from public, anon;
grant execute on function public.admin_preview_new_semester(integer, integer, date, date) to authenticated;
revoke all on function public.admin_start_new_semester(integer, integer, date, date) from public, anon;
grant execute on function public.admin_start_new_semester(integer, integer, date, date) to authenticated;
revoke all on function public.admin_start_new_semester(integer, integer) from public, anon, authenticated;
revoke all on function public.get_student_enrolled_classes(integer) from public, anon;
grant execute on function public.get_student_enrolled_classes(integer) to authenticated;
