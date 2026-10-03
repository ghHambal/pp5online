-- Keep classes created by old or non-browser clients inside the active term.
-- The frontend already supplies these fields; this trigger is the database
-- safety net so a stale client cannot create an unscoped workspace row.
create or replace function public.set_class_current_term()
returns trigger
language plpgsql
security definer
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
    raise exception 'ภาคเรียนของห้องเรียนไม่ถูกต้อง';
  end if;
  return new;
end;
$function$;

drop trigger if exists classes_set_current_term on public.classes;
create trigger classes_set_current_term
before insert on public.classes
for each row execute function public.set_class_current_term();

revoke all on function public.set_class_current_term() from public, anon, authenticated;
