-- Term backup metadata and a guarded rollover boundary.
-- The backup file is kept outside Postgres (downloaded by the administrator),
-- so a backup does not duplicate the large attendance/prayer tables in Micro.

create table if not exists public.academic_term_backups (
  id uuid primary key default gen_random_uuid(),
  backup_scope text not null default 'term' check (backup_scope in ('term', 'full')),
  academic_year integer,
  semester integer check (semester in (1, 2)),
  semester_start date,
  semester_end date,
  file_name text not null,
  byte_size bigint not null check (byte_size > 0),
  sha256 text not null check (sha256 ~ '^[0-9a-f]{64}$'),
  table_counts jsonb not null default '{}'::jsonb,
  status text not null default 'verified' check (status in ('verified', 'invalid')),
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  restored_at timestamptz,
  used_for_rollover_at timestamptz
);

create index if not exists academic_term_backups_term_idx
  on public.academic_term_backups (academic_year desc, semester desc, created_at desc);

alter table public.academic_term_backups enable row level security;

drop policy if exists academic_term_backups_admin_select on public.academic_term_backups;
create policy academic_term_backups_admin_select
  on public.academic_term_backups for select to authenticated
  using (get_user_role() = 'admin');

drop policy if exists academic_term_backups_admin_insert on public.academic_term_backups;
create policy academic_term_backups_admin_insert
  on public.academic_term_backups for insert to authenticated
  with check (get_user_role() = 'admin' and created_by = auth.uid());

drop policy if exists academic_term_backups_admin_update on public.academic_term_backups;
create policy academic_term_backups_admin_update
  on public.academic_term_backups for update to authenticated
  using (get_user_role() = 'admin')
  with check (get_user_role() = 'admin');

create or replace function public.admin_record_term_backup(
  p_academic_year integer,
  p_semester integer,
  p_semester_start date,
  p_semester_end date,
  p_file_name text,
  p_byte_size bigint,
  p_sha256 text,
  p_table_counts jsonb
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_id uuid;
begin
  if get_user_role() <> 'admin' then
    raise exception 'not authorized';
  end if;
  if p_academic_year is null or p_academic_year <= 0 or p_semester not in (1, 2) then
    raise exception 'ภาคเรียนของไฟล์สำรองไม่ถูกต้อง';
  end if;
  if nullif(trim(coalesce(p_file_name, '')), '') is null
     or p_byte_size is null or p_byte_size <= 0
     or p_sha256 !~ '^[0-9a-f]{64}$' then
    raise exception 'ข้อมูลไฟล์สำรองไม่ครบถ้วน';
  end if;

  insert into public.academic_term_backups (
    backup_scope, academic_year, semester, semester_start, semester_end,
    file_name, byte_size, sha256, table_counts, created_by
  ) values (
    'term', p_academic_year, p_semester, p_semester_start, p_semester_end,
    trim(p_file_name), p_byte_size, lower(p_sha256), coalesce(p_table_counts, '{}'::jsonb), auth.uid()
  ) returning id into v_id;

  return json_build_object('ok', true, 'id', v_id);
end;
$function$;

create or replace function public.admin_mark_term_backup_restored(p_backup_id uuid)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
begin
  if get_user_role() <> 'admin' then
    raise exception 'not authorized';
  end if;
  update public.academic_term_backups
  set restored_at = now()
  where id = p_backup_id;
  if not found then raise exception 'ไม่พบไฟล์สำรอง'; end if;
  return json_build_object('ok', true, 'id', p_backup_id);
end;
$function$;

-- During source cleanup, the prayer trigger must not overwrite the already
-- frozen historical score with zero while its source rows are being deleted.
create or replace function public._trg_prayer_records_sync()
returns trigger
language plpgsql
security definer
set search_path to 'public'
as $function$
begin
  if current_setting('pp5.term_rollover_freeze_prayer', true) = 'on' then
    return case when tg_op = 'DELETE' then old else new end;
  end if;
  if tg_op = 'DELETE' then
    perform public._sync_prayer_score_for_student(old.student_id);
    return old;
  else
    perform public._sync_prayer_score_for_student(new.student_id);
    if tg_op = 'UPDATE' and old.student_id is distinct from new.student_id then
      perform public._sync_prayer_score_for_student(old.student_id);
    end if;
    return new;
  end if;
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
  if v_old_year = p_new_academic_year and v_old_sem = p_new_semester then raise exception 'ปี/เทอมใหม่เหมือนกับปัจจุบัน ไม่มีอะไรต้องทำ'; end if;

  select count(distinct p.teacher_id)::integer into v_teachers
  from public.payment_requests p
  where p.package_type = 'donation' and p.status = 'approved'
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
    'attendances_to_clear', (select count(*) from public.attendances a join public.classes c on c.id = a.class_id where c.academic_year = v_old_year and c.semester = v_old_sem),
    'prayer_records_to_clear', (select count(*) from public.prayer_records where academic_year = v_old_year and semester = v_old_sem),
    'eligible_supporters', v_teachers,
    'data_deleted', true,
    'backup_required', true
  );
end;
$function$;

-- New rollover entry point. It requires a verified backup and, when the UI
-- passes true, freezes score links and clears only term-scoped source data.
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
  v_attendances_deleted integer := 0;
  v_prayer_deleted integer := 0;
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

  if coalesce(p_clear_source_data, false) then
    perform set_config('pp5.term_rollover_freeze_prayer', 'on', true);
    update public.class_score_columns csc
    set auto_attendance_sync = false
    from public.classes c
    where c.id = csc.class_id and c.academic_year = v_old_year and c.semester = v_old_sem;

    delete from public.attendances a using public.classes c
    where c.id = a.class_id and c.academic_year = v_old_year and c.semester = v_old_sem;
    get diagnostics v_attendances_deleted = row_count;

    delete from public.prayer_records
    where academic_year = v_old_year and semester = v_old_sem;
    get diagnostics v_prayer_deleted = row_count;
  end if;

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

  update public.teachers_quota set total_classes_created = 0, is_paid = false, package_type = null, paid_at = null;
  update public.teachers set smart_classroom_free_class_id = null, attendance_delegate_free_class_id = null;

  return json_build_object(
    'ok', true, 'old_academic_year', v_old_year, 'old_semester', v_old_sem,
    'new_academic_year', p_new_academic_year, 'new_semester', p_new_semester,
    'semester_start', p_new_semester_start, 'semester_end', p_new_semester_end,
    'supporter_status_reset', true, 'renewal_entitlements_created', v_entitlements_created,
    'unlimited_teacher_class_creation', true, 'courses_created', 0, 'classes_created', 0,
    'students_enrolled', 0, 'attendances_deleted', v_attendances_deleted,
    'prayer_records_deleted', v_prayer_deleted, 'data_deleted', coalesce(p_clear_source_data, false),
    'workspace', 'empty'
  );
end;
$function$;

-- Prevent an old cached client from performing a rollover without the backup gate.
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
  raise exception 'กรุณาโหลดหน้าเว็บเวอร์ชันใหม่ก่อนขึ้นภาคเรียน เพื่อสร้างและตรวจสอบไฟล์สำรอง';
end;
$function$;

revoke all on function public.admin_record_term_backup(integer, integer, date, date, text, bigint, text, jsonb) from public, anon;
grant execute on function public.admin_record_term_backup(integer, integer, date, date, text, bigint, text, jsonb) to authenticated;
revoke all on function public.admin_mark_term_backup_restored(uuid) from public, anon;
grant execute on function public.admin_mark_term_backup_restored(uuid) to authenticated;
revoke all on function public.admin_preview_new_semester(integer, integer, date, date) from public, anon;
grant execute on function public.admin_preview_new_semester(integer, integer, date, date) to authenticated;
revoke all on function public.admin_start_new_semester(integer, integer, date, date, uuid, boolean) from public, anon;
grant execute on function public.admin_start_new_semester(integer, integer, date, date, uuid, boolean) to authenticated;
revoke all on function public.admin_start_new_semester(integer, integer) from public, anon, authenticated;

-- Full-system backup support. Rows are read and restored in small JSON batches
-- through guarded SECURITY DEFINER functions, while the resulting compressed
-- file stays outside Postgres.
create or replace function public.admin_record_full_backup(
  p_file_name text,
  p_byte_size bigint,
  p_sha256 text,
  p_table_counts jsonb
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_id uuid;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if nullif(trim(coalesce(p_file_name, '')), '') is null
     or p_byte_size is null or p_byte_size <= 0
     or p_sha256 !~ '^[0-9a-f]{64}$' then
    raise exception 'ข้อมูลไฟล์สำรองไม่ครบถ้วน';
  end if;
  insert into public.academic_term_backups (
    backup_scope, file_name, byte_size, sha256, table_counts, created_by
  ) values (
    'full', trim(p_file_name), p_byte_size, lower(p_sha256), coalesce(p_table_counts, '{}'::jsonb), auth.uid()
  ) returning id into v_id;
  return json_build_object('ok', true, 'id', v_id);
end;
$function$;

create or replace function public.admin_full_backup_catalog()
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  return coalesce((
    select jsonb_agg(jsonb_build_object(
      'table_name', t.table_name,
      'depends_on', coalesce((
        select jsonb_agg(distinct parent.relname order by parent.relname)
        from pg_constraint fk
        join pg_class child on child.oid = fk.conrelid
        join pg_namespace child_ns on child_ns.oid = child.relnamespace
        join pg_class parent on parent.oid = fk.confrelid
        join pg_namespace parent_ns on parent_ns.oid = parent.relnamespace
        where fk.contype = 'f'
          and child_ns.nspname = 'public'
          and parent_ns.nspname = 'public'
          and child.relname = t.table_name
          and parent.relname <> 'academic_term_backups'
      ), '[]'::jsonb)
    ) order by t.table_name)
    from information_schema.tables t
    where t.table_schema = 'public'
      and t.table_type = 'BASE TABLE'
      and t.table_name <> 'academic_term_backups'
  ), '[]'::jsonb);
end;
$function$;

create or replace function public.admin_full_backup_read(
  p_table text,
  p_offset integer default 0,
  p_limit integer default 500
)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_rows jsonb;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if p_offset < 0 or p_limit < 1 or p_limit > 1000 then raise exception 'ช่วงข้อมูลสำรองไม่ถูกต้อง'; end if;
  if not exists (
    select 1 from information_schema.tables
    where table_schema = 'public' and table_type = 'BASE TABLE'
      and table_name = p_table and p_table <> 'academic_term_backups'
  ) then raise exception 'ตารางสำรองไม่อยู่ในรายการที่อนุญาต'; end if;
  execute format(
    'select coalesce(jsonb_agg(to_jsonb(x)), ''[]''::jsonb)
       from (select * from public.%I order by ctid offset $1 limit $2) x', p_table
  ) into v_rows using p_offset, p_limit;
  return coalesce(v_rows, '[]'::jsonb);
end;
$function$;

create or replace function public.admin_full_backup_restore_table(
  p_table text,
  p_rows jsonb
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_columns text;
  v_select_columns text;
  v_primary_key text;
  v_updates text;
  v_count integer := jsonb_array_length(coalesce(p_rows, '[]'::jsonb));
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if v_count = 0 then return json_build_object('ok', true, 'rows', 0); end if;
  if not exists (
    select 1 from information_schema.tables
    where table_schema = 'public' and table_type = 'BASE TABLE'
      and table_name = p_table and p_table <> 'academic_term_backups'
  ) then raise exception 'ตารางกู้คืนไม่อยู่ในรายการที่อนุญาต'; end if;

  select string_agg(format('%I', column_name), ', ' order by ordinal_position),
         string_agg(format('x.%I', column_name), ', ' order by ordinal_position)
  into v_columns, v_select_columns
  from information_schema.columns
  where table_schema = 'public' and table_name = p_table;

  select string_agg(format('%I', a.attname), ', ' order by k.ord)
  into v_primary_key
  from pg_index i
  cross join lateral unnest(i.indkey) with ordinality as k(attnum, ord)
  join pg_attribute a on a.attrelid = i.indrelid and a.attnum = k.attnum
  where i.indrelid = format('public.%I', p_table)::regclass and i.indisprimary;

  select string_agg(format('%I = excluded.%I', c.column_name, c.column_name), ', ' order by c.ordinal_position)
  into v_updates
  from information_schema.columns c
  where c.table_schema = 'public' and c.table_name = p_table
    and not exists (
      select 1 from pg_index i
      cross join lateral unnest(i.indkey) as k(attnum)
      join pg_attribute a on a.attrelid = i.indrelid and a.attnum = k.attnum
      where i.indrelid = format('public.%I', p_table)::regclass
        and i.indisprimary and a.attname = c.column_name
    );

  if v_primary_key is null then
    execute format(
      'insert into public.%I (%s) select %s from jsonb_populate_recordset(null::public.%I, $1) x',
      p_table, v_columns, v_select_columns, p_table
    ) using p_rows;
  elsif v_updates is null then
    execute format(
      'insert into public.%I (%s) select %s from jsonb_populate_recordset(null::public.%I, $1) x on conflict (%s) do nothing',
      p_table, v_columns, v_select_columns, p_table, v_primary_key
    ) using p_rows;
  else
    execute format(
      'insert into public.%I (%s) select %s from jsonb_populate_recordset(null::public.%I, $1) x on conflict (%s) do update set %s',
      p_table, v_columns, v_select_columns, p_table, v_primary_key, v_updates
    ) using p_rows;
  end if;
  return json_build_object('ok', true, 'rows', v_count);
end;
$function$;

revoke all on function public.admin_record_full_backup(text, bigint, text, jsonb) from public, anon;
grant execute on function public.admin_record_full_backup(text, bigint, text, jsonb) to authenticated;
revoke all on function public.admin_full_backup_catalog() from public, anon;
grant execute on function public.admin_full_backup_catalog() to authenticated;
revoke all on function public.admin_full_backup_read(text, integer, integer) from public, anon;
grant execute on function public.admin_full_backup_read(text, integer, integer) to authenticated;
revoke all on function public.admin_full_backup_restore_table(text, jsonb) from public, anon;
grant execute on function public.admin_full_backup_restore_table(text, jsonb) to authenticated;
