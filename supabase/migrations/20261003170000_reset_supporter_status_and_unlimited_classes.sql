-- A new semester starts with a clean active supporter/quota state.
-- Historical payment and donation rows remain available for audit/history.

create or replace function public.admin_start_new_semester(
  p_new_academic_year integer,
  p_new_semester integer
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_old_year integer;
  v_old_sem integer;
  v_semester_start date := current_date;
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

  select value::integer into v_old_year
  from public.system_config
  where key = 'academicYear';

  select value::integer into v_old_sem
  from public.system_config
  where key = 'semester';

  if v_old_year = p_new_academic_year and v_old_sem = p_new_semester then
    raise exception 'ปี/เทอมใหม่เหมือนกับปัจจุบัน ไม่มีอะไรต้องทำ';
  end if;

  update public.system_config
  set value = p_new_academic_year::text, updated_at = now()
  where key = 'academicYear';

  update public.system_config
  set value = p_new_semester::text, updated_at = now()
  where key = 'semester';

  insert into public.system_config (key, value, updated_at)
  values ('semester_start', v_semester_start::text, now())
  on conflict (key) do update
    set value = excluded.value, updated_at = excluded.updated_at;

  insert into public.system_config (key, value, updated_at)
  values ('unlimitedTeacherClassCreation', 'true', now())
  on conflict (key) do update
    set value = excluded.value, updated_at = excluded.updated_at;

  -- Reset active package/quota state without deleting historical payment records.
  update public.teachers_quota
  set total_classes_created = 0,
      is_paid = false,
      package_type = null,
      paid_at = null;

  -- Free feature picks point to rooms from the previous term and must be chosen again.
  update public.teachers
  set smart_classroom_free_class_id = null,
      attendance_delegate_free_class_id = null;

  return json_build_object(
    'ok', true,
    'old_academic_year', v_old_year,
    'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year,
    'new_semester', p_new_semester,
    'semester_start', v_semester_start,
    'supporter_status_reset', true,
    'unlimited_teacher_class_creation', true,
    'courses_created', 0,
    'classes_created', 0,
    'students_enrolled', 0,
    'workspace', 'empty'
  );
end;
$function$;

revoke all on function public.admin_start_new_semester(integer, integer) from public;
revoke execute on function public.admin_start_new_semester(integer, integer) from anon;
grant execute on function public.admin_start_new_semester(integer, integer) to authenticated;
