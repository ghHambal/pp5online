-- Teachers must have at least one saved timetable entry in the active term
-- before they can create a course or classroom. Admin and trusted service-role
-- workflows remain available. Any future timetable API should normalize its
-- imported entries into teacher_schedules so it satisfies the same rule.
create or replace function public._require_current_teacher_schedule_before_teaching_setup()
returns trigger
language plpgsql
set search_path = public, auth
as $function$
declare
  v_teacher_id integer;
  v_year integer;
  v_semester integer;
  v_jwt_role text := coalesce(auth.jwt() ->> 'role', '');
begin
  if v_jwt_role = 'service_role'
    or coalesce(public.get_user_role(), '') = 'admin'
    or exists (
      select 1
      from public.profiles p
      where p.id = auth.uid()
        and (p.role = 'admin' or p.is_also_admin is true)
    ) then
    return new;
  end if;

  select t.id into v_teacher_id
  from public.teachers t
  where t.profile_id = auth.uid()
  limit 1;

  if v_teacher_id is null then
    raise exception 'ไม่พบข้อมูลครูที่เข้าสู่ระบบ จึงยังสร้างคอร์สหรือห้องเรียนไม่ได้'
      using errcode = 'P0001';
  end if;

  select
    max(value::integer) filter (where key = 'academicYear'),
    max(value::integer) filter (where key = 'semester')
  into v_year, v_semester
  from public.system_config
  where key in ('academicYear', 'semester');

  if v_year is null or v_semester is null or v_semester not in (1, 2) then
    raise exception 'ยังระบุภาคเรียนปัจจุบันไม่ครบ จึงตรวจสอบตารางสอนไม่ได้'
      using errcode = 'P0001';
  end if;

  if not exists (
    select 1
    from public.teacher_schedules ts
    where ts.teacher_id = v_teacher_id
      and ts.academic_year = v_year
      and ts.semester = v_semester
  ) then
    raise exception 'กรุณาบันทึกตารางสอนของภาคเรียนปัจจุบันก่อน จึงจะสร้างคอร์สหรือห้องเรียนได้'
      using errcode = 'P0001';
  end if;

  return new;
end;
$function$;

drop trigger if exists master_subjects_require_schedule_before_insert on public.master_subjects;
create trigger master_subjects_require_schedule_before_insert
before insert on public.master_subjects
for each row
execute function public._require_current_teacher_schedule_before_teaching_setup();

drop trigger if exists classes_require_schedule_before_insert on public.classes;
create trigger classes_require_schedule_before_insert
before insert on public.classes
for each row
execute function public._require_current_teacher_schedule_before_teaching_setup();

revoke all on function public._require_current_teacher_schedule_before_teaching_setup()
from public, anon, authenticated;
