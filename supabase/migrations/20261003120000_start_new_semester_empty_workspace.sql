-- Start a new semester as an empty workspace.
-- Do not clone courses/classes or auto-enroll students from the previous term.

create or replace function public.admin_start_new_semester(p_new_academic_year integer, p_new_semester integer)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_old_year integer;
  v_old_sem integer;
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

  return json_build_object(
    'ok', true,
    'old_academic_year', v_old_year,
    'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year,
    'new_semester', p_new_semester,
    'courses_created', 0,
    'classes_created', 0,
    'students_enrolled', 0,
    'workspace', 'empty'
  );
end;
$function$;

revoke all on function public.admin_start_new_semester(integer, integer) from public;
grant execute on function public.admin_start_new_semester(integer, integer) to authenticated;
