-- Only supporters who reached the configured minimum donation tier qualify
-- for a renewal discount. Keep the rollover behavior aligned with the
-- 20261003183000 migration for installations where that migration is live.

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
  v_old_start date;
  v_min_amount integer := 49;
  v_step_amount integer := 50;
  v_semester_start date := current_date;
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

  update public.teachers_quota
  set total_classes_created = 0,
      is_paid = false,
      package_type = null,
      paid_at = null;

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
    'renewal_entitlements_created', v_entitlements_created,
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
