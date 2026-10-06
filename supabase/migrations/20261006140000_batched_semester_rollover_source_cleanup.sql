-- Delete prior-term attendance/prayer source rows in bounded, resumable batches.
-- The former all-at-once attendance DELETE exceeded Postgres statement_timeout.

create or replace function public.admin_purge_term_source_data_batch(
  p_table text,
  p_backup_id uuid,
  p_limit integer default 5000
)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_year integer;
  v_semester integer;
  v_backup_scope text;
  v_backup_year integer;
  v_backup_semester integer;
  v_deleted integer := 0;
  v_has_more boolean := false;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if p_table is null or p_table not in ('attendances', 'prayer_records') or p_limit is null or p_limit < 1 or p_limit > 5000 then
    raise exception 'พารามิเตอร์ล้างข้อมูลภาคเรียนไม่ถูกต้อง';
  end if;

  select value::integer into v_year from public.system_config where key = 'academicYear';
  select value::integer into v_semester from public.system_config where key = 'semester';
  select backup_scope, academic_year, semester
    into v_backup_scope, v_backup_year, v_backup_semester
  from public.academic_term_backups
  where id = p_backup_id and status = 'verified';
  if not found or (coalesce(v_backup_scope, 'term') <> 'full'
      and (v_backup_year <> v_year or v_backup_semester <> v_semester)) then
    raise exception 'ต้องมีไฟล์สำรองที่ตรวจสอบแล้วของภาคเรียนปัจจุบันก่อนล้างข้อมูล';
  end if;

  -- Prevent prayer-score triggers from rewriting frozen historical scores.
  perform set_config('pp5.term_rollover_freeze_prayer', 'on', true);
  -- Keep chunked attendance deletion from recalculating and overwriting raw scores.
  perform set_config('pp5.term_rollover_freeze_attendance', 'on', true);

  if p_table = 'attendances' then
    with batch as materialized (
      select a.id
      from public.attendances a
      join public.classes c on c.id = a.class_id
      where c.academic_year = v_year and c.semester = v_semester
      order by a.id
      limit p_limit
    ), deleted as (
      delete from public.attendances a
      using batch b
      where a.id = b.id
      returning a.id
    )
    select count(*)::integer into v_deleted from deleted;

    select exists (
      select 1 from public.attendances a
      join public.classes c on c.id = a.class_id
      where c.academic_year = v_year and c.semester = v_semester
      limit 1
    ) into v_has_more;
  else
    with batch as materialized (
      select p.id
      from public.prayer_records p
      where p.academic_year = v_year and p.semester = v_semester
      order by p.id
      limit p_limit
    ), deleted as (
      delete from public.prayer_records p
      using batch b
      where p.id = b.id
      returning p.id
    )
    select count(*)::integer into v_deleted from deleted;

    select exists (
      select 1 from public.prayer_records p
      where p.academic_year = v_year and p.semester = v_semester
      limit 1
    ) into v_has_more;
  end if;

  return jsonb_build_object('deleted_rows', v_deleted, 'has_more', v_has_more);
end;
$function$;

-- The attendance DELETE trigger normally recalculates linked score columns.
-- During a verified rollover purge, scores are intentionally frozen as raw data.
create or replace function public._trg_attendances_sync_del()
returns trigger
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  r record;
begin
  if current_setting('pp5.term_rollover_freeze_attendance', true) = 'on' then
    return null;
  end if;
  for r in select distinct class_id from old_rows loop
    perform public._sync_attendance_score_for_class(r.class_id);
  end loop;
  return null;
end;
$function$;

create or replace function public.admin_start_new_semester(
  p_new_academic_year integer,
  p_new_semester integer,
  p_new_semester_start date,
  p_new_semester_end date,
  p_backup_id uuid,
  p_clear_source_data boolean
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
  v_backup_scope text;
  v_backup_year integer;
  v_backup_sem integer;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if p_new_academic_year is null or p_new_academic_year <= 0 then raise exception 'ปีการศึกษาไม่ถูกต้อง'; end if;
  if p_new_semester not in (1, 2) then raise exception 'ภาคเรียนต้องเป็น 1 หรือ 2'; end if;
  if p_new_semester_start is null or p_new_semester_end is null or p_new_semester_end < p_new_semester_start then
    raise exception 'ช่วงวันเปิด-ปิดภาคเรียนไม่ถูกต้อง';
  end if;

  select value::integer into v_old_year from public.system_config where key = 'academicYear';
  select value::integer into v_old_sem from public.system_config where key = 'semester';
  select value::date into v_old_start from public.system_config where key = 'semester_start';
  select coalesce(value::integer, 49) into v_min_amount from public.system_config where key = 'donationMinAmount';
  select coalesce(value::integer, 50) into v_step_amount from public.system_config where key = 'donationAmountStep';
  if v_min_amount is null or v_min_amount < 1 then v_min_amount := 49; end if;
  if v_step_amount is null or v_step_amount < 1 then v_step_amount := 50; end if;
  if v_old_year = p_new_academic_year and v_old_sem = p_new_semester then raise exception 'ปี/เทอมใหม่เหมือนกับปัจจุบัน ไม่มีอะไรต้องทำ'; end if;

  select backup_scope, academic_year, semester into v_backup_scope, v_backup_year, v_backup_sem
  from public.academic_term_backups
  where id = p_backup_id and status = 'verified';
  if not found or (coalesce(v_backup_scope, 'term') <> 'full'
      and (v_backup_year <> v_old_year or v_backup_sem <> v_old_sem)) then
    raise exception 'ต้องมีไฟล์สำรองที่ตรวจสอบแล้วของภาคเรียนปัจจุบันก่อนขึ้นภาคเรียนใหม่';
  end if;

  if coalesce(p_clear_source_data, false) then
    if exists (
      select 1 from public.attendances a
      join public.classes c on c.id = a.class_id
      where c.academic_year = v_old_year and c.semester = v_old_sem
      limit 1
    ) or exists (
      select 1 from public.prayer_records p
      where p.academic_year = v_old_year and p.semester = v_old_sem
      limit 1
    ) then
      raise exception 'การล้างข้อมูลภาคเรียนเดิมยังไม่เสร็จ กรุณาดำเนินการล้างแบบแบ่งชุดให้ครบก่อน';
    end if;

    update public.class_score_columns csc
    set auto_attendance_sync = false
    from public.classes c
    where c.id = csc.class_id and c.academic_year = v_old_year and c.semester = v_old_sem;
  end if;

  with donation_totals as (
    select p.teacher_id, sum(coalesce(p.donation_base_amount, p.amount))::integer as total_amount
    from public.payment_requests p
    where p.package_type = 'donation' and p.status = 'approved'
      and (v_old_start is null or coalesce(p.reviewed_at, p.created_at)::date >= v_old_start)
    group by p.teacher_id
  )
  insert into public.supporter_renewal_entitlements (
    teacher_id, source_academic_year, source_semester, source_total_amount, source_tier,
    target_academic_year, target_semester
  )
  select d.teacher_id, v_old_year, v_old_sem, d.total_amount,
         least(5, floor((d.total_amount - v_min_amount)::numeric / v_step_amount)::integer + 1),
         p_new_academic_year, p_new_semester
  from donation_totals d
  where d.total_amount >= v_min_amount
  on conflict (teacher_id, target_academic_year, target_semester) do nothing;
  get diagnostics v_entitlements_created = row_count;

  update public.academic_term_backups
  set used_for_rollover_at = now()
  where id = p_backup_id;

  update public.system_config set value = p_new_academic_year::text, updated_at = now() where key = 'academicYear';
  update public.system_config set value = p_new_semester::text, updated_at = now() where key = 'semester';
  insert into public.system_config (key, value, updated_at) values ('semester_start', p_new_semester_start::text, now())
    on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at;
  insert into public.system_config (key, value, updated_at) values ('semester_end', p_new_semester_end::text, now())
    on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at;
  insert into public.system_config (key, value, updated_at) values ('unlimitedTeacherClassCreation', 'true', now())
    on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at;

  update public.teachers_quota
  set total_classes_created = 0, is_paid = false, package_type = null, paid_at = null
  where total_classes_created is distinct from 0 or is_paid is distinct from false
    or package_type is not null or paid_at is not null;
  update public.teachers
  set smart_classroom_free_class_id = null, attendance_delegate_free_class_id = null
  where smart_classroom_free_class_id is not null or attendance_delegate_free_class_id is not null;

  return json_build_object(
    'ok', true, 'old_academic_year', v_old_year, 'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year, 'new_semester', p_new_semester,
    'semester_start', p_new_semester_start, 'semester_end', p_new_semester_end,
    'supporter_status_reset', true, 'renewal_entitlements_created', v_entitlements_created,
    'unlimited_teacher_class_creation', true, 'courses_created', 0, 'classes_created', 0,
    'students_enrolled', 0, 'attendances_deleted', 0, 'prayer_records_deleted', 0,
    'data_deleted', coalesce(p_clear_source_data, false), 'workspace', 'empty'
  );
end;
$function$;

revoke all on function public.admin_purge_term_source_data_batch(text, uuid, integer) from public, anon;
grant execute on function public.admin_purge_term_source_data_batch(text, uuid, integer) to authenticated;
revoke all on function public.admin_start_new_semester(integer, integer, date, date, uuid, boolean) from public, anon;
grant execute on function public.admin_start_new_semester(integer, integer, date, date, uuid, boolean) to authenticated;
