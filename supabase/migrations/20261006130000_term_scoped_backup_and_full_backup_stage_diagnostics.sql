-- Bounded, term-scoped export used as the safety gate for semester rollover.
-- Only attendance and prayer rows are exported; all functions are admin-only.

create or replace function public.admin_term_backup_catalog()
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_year integer;
  v_semester integer;
  v_start date;
  v_end date;
  v_attendance_count bigint;
  v_prayer_count bigint;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;

  select value::integer into v_year from public.system_config where key = 'academicYear';
  select value::integer into v_semester from public.system_config where key = 'semester';
  select value::date into v_start from public.system_config where key = 'semester_start';
  select value::date into v_end from public.system_config where key = 'semester_end';
  if v_year is null or v_semester not in (1, 2) then raise exception 'ไม่พบภาคเรียนปัจจุบัน'; end if;

  select count(*) into v_attendance_count
  from public.attendances a
  join public.classes c on c.id = a.class_id
  where c.academic_year = v_year and c.semester = v_semester;

  select count(*) into v_prayer_count
  from public.prayer_records p
  where p.academic_year = v_year and p.semester = v_semester;

  return jsonb_build_object(
    'academic_year', v_year,
    'semester', v_semester,
    'semester_start', v_start,
    'semester_end', v_end,
    'counts', jsonb_build_object('attendances', v_attendance_count, 'prayer_records', v_prayer_count),
    'total_rows', v_attendance_count + v_prayer_count
  );
end;
$function$;

create or replace function public.admin_term_backup_read_cursor(
  p_table text,
  p_academic_year integer,
  p_semester integer,
  p_cursor text default null,
  p_limit integer default 1000
)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_current_year integer;
  v_current_semester integer;
  v_result jsonb;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if p_table is null or p_table not in ('attendances', 'prayer_records') then raise exception 'ตารางนี้ไม่อยู่ในขอบเขตสำรองก่อนขึ้นภาคเรียน'; end if;
  if p_academic_year is null or p_semester not in (1, 2) or p_limit < 1 or p_limit > 1000 then
    raise exception 'พารามิเตอร์สำรองภาคเรียนไม่ถูกต้อง';
  end if;
  if p_cursor is not null and (length(p_cursor) > 20 or p_cursor !~ '^[0-9]+$') then
    raise exception 'จุดต่อข้อมูลสำรองไม่ถูกต้อง';
  end if;

  select value::integer into v_current_year from public.system_config where key = 'academicYear';
  select value::integer into v_current_semester from public.system_config where key = 'semester';
  if p_academic_year <> v_current_year or p_semester <> v_current_semester then
    raise exception 'สำรองได้เฉพาะภาคเรียนปัจจุบัน';
  end if;

  if p_table = 'attendances' then
    with page as materialized (
      select a.id as key_value, to_jsonb(a) as row
      from public.attendances a
      join public.classes c on c.id = a.class_id
      where c.academic_year = p_academic_year and c.semester = p_semester
        and (p_cursor is null or a.id > p_cursor::integer)
      order by a.id
      limit p_limit
    ), aggregated as (
      select coalesce(jsonb_agg(row order by key_value), '[]'::jsonb) as rows,
        (array_agg(key_value order by key_value desc))[1]::text as next_cursor,
        count(*)::integer as page_count
      from page
    )
    select jsonb_build_object('rows', rows, 'next_cursor', next_cursor, 'has_more', page_count = p_limit)
      into v_result from aggregated;
  else
    with page as materialized (
      select p.id as key_value, to_jsonb(p) as row
      from public.prayer_records p
      where p.academic_year = p_academic_year and p.semester = p_semester
        and (p_cursor is null or p.id > p_cursor::integer)
      order by p.id
      limit p_limit
    ), aggregated as (
      select coalesce(jsonb_agg(row order by key_value), '[]'::jsonb) as rows,
        (array_agg(key_value order by key_value desc))[1]::text as next_cursor,
        count(*)::integer as page_count
      from page
    )
    select jsonb_build_object('rows', rows, 'next_cursor', next_cursor, 'has_more', page_count = p_limit)
      into v_result from aggregated;
  end if;

  return coalesce(v_result, jsonb_build_object('rows', '[]'::jsonb, 'next_cursor', null, 'has_more', false));
end;
$function$;

-- A term backup is marked verified only if it contains both required datasets
-- and the row counts still match the live term at registration time.
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
  v_year integer;
  v_semester integer;
  v_start date;
  v_end date;
  v_attendance_count bigint;
  v_prayer_count bigint;
  v_file_attendance_count bigint;
  v_file_prayer_count bigint;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  select value::integer into v_year from public.system_config where key = 'academicYear';
  select value::integer into v_semester from public.system_config where key = 'semester';
  if p_academic_year is null or p_semester is null or p_academic_year <> v_year or p_semester <> v_semester then
    raise exception 'ไฟล์สำรองไม่ตรงกับภาคเรียนปัจจุบัน';
  end if;
  select value::date into v_start from public.system_config where key = 'semester_start';
  select value::date into v_end from public.system_config where key = 'semester_end';
  if nullif(trim(coalesce(p_file_name, '')), '') is null or p_byte_size is null or p_byte_size <= 0
     or p_sha256 is null or p_sha256 !~ '^[0-9a-f]{64}$' or jsonb_typeof(p_table_counts) <> 'object'
     or p_semester_start is distinct from v_start or p_semester_end is distinct from v_end then
    raise exception 'ข้อมูลไฟล์สำรองไม่ครบถ้วน';
  end if;
  if coalesce(p_table_counts->>'attendances', '') !~ '^[0-9]+$'
     or coalesce(p_table_counts->>'prayer_records', '') !~ '^[0-9]+$' then
    raise exception 'ไฟล์สำรองต้องมีจำนวนข้อมูลเข้าเรียนและข้อมูลละหมาด';
  end if;
  v_file_attendance_count := (p_table_counts->>'attendances')::bigint;
  v_file_prayer_count := (p_table_counts->>'prayer_records')::bigint;

  select count(*) into v_attendance_count
  from public.attendances a join public.classes c on c.id = a.class_id
  where c.academic_year = v_year and c.semester = v_semester;
  select count(*) into v_prayer_count
  from public.prayer_records p where p.academic_year = v_year and p.semester = v_semester;
  if v_file_attendance_count <> v_attendance_count or v_file_prayer_count <> v_prayer_count then
    raise exception 'จำนวนข้อมูลเปลี่ยนระหว่างสำรอง กรุณาสร้างไฟล์ใหม่ก่อนขึ้นภาคเรียน';
  end if;

  insert into public.academic_term_backups (
    backup_scope, academic_year, semester, semester_start, semester_end,
    file_name, byte_size, sha256, table_counts, created_by
  ) values (
    'term', p_academic_year, p_semester, p_semester_start, p_semester_end,
    trim(p_file_name), p_byte_size, lower(p_sha256), p_table_counts, auth.uid()
  ) returning id into v_id;
  return json_build_object('ok', true, 'id', v_id);
end;
$function$;

create or replace function public.admin_restore_term_backup_table(
  p_table text,
  p_academic_year integer,
  p_semester integer,
  p_rows jsonb
)
returns json
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_bad_rows boolean;
  v_sequence text;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if p_table is null or p_table not in ('attendances', 'prayer_records') then raise exception 'ตารางนี้ไม่อยู่ในขอบเขตกู้คืน'; end if;
  if p_academic_year is null or p_semester not in (1, 2) or jsonb_typeof(coalesce(p_rows, '[]'::jsonb)) <> 'array' then
    raise exception 'ข้อมูลกู้คืนไม่ถูกต้อง';
  end if;

  if p_table = 'attendances' then
    select exists (
      select 1
      from jsonb_to_recordset(coalesce(p_rows, '[]'::jsonb)) as x(id integer, class_id integer)
      left join public.classes c on c.id = x.class_id
      where x.id is null or c.id is null or c.academic_year <> p_academic_year or c.semester <> p_semester
    ) into v_bad_rows;
  else
    select exists (
      select 1
      from jsonb_to_recordset(coalesce(p_rows, '[]'::jsonb)) as x(id integer, academic_year integer, semester integer)
      where x.id is null or x.academic_year <> p_academic_year or x.semester <> p_semester
    ) into v_bad_rows;
  end if;
  if v_bad_rows then raise exception 'ไฟล์มีข้อมูลนอกภาคเรียนที่ระบุ ปฏิเสธการกู้คืน'; end if;

  perform public.admin_full_backup_restore_table(p_table, coalesce(p_rows, '[]'::jsonb));
  v_sequence := pg_get_serial_sequence(format('public.%I', p_table), 'id');
  if v_sequence is not null then
    execute format('select setval(%L::regclass, coalesce(max(id), 1), max(id) is not null) from public.%I', v_sequence, p_table);
  end if;
  return json_build_object('ok', true, 'rows', jsonb_array_length(coalesce(p_rows, '[]'::jsonb)));
end;
$function$;

revoke all on function public.admin_term_backup_catalog() from public, anon;
grant execute on function public.admin_term_backup_catalog() to authenticated;
revoke all on function public.admin_term_backup_read_cursor(text, integer, integer, text, integer) from public, anon;
grant execute on function public.admin_term_backup_read_cursor(text, integer, integer, text, integer) to authenticated;
revoke all on function public.admin_record_term_backup(integer, integer, date, date, text, bigint, text, jsonb) from public, anon;
grant execute on function public.admin_record_term_backup(integer, integer, date, date, text, bigint, text, jsonb) to authenticated;
revoke all on function public.admin_restore_term_backup_table(text, integer, integer, jsonb) from public, anon;
grant execute on function public.admin_restore_term_backup_table(text, integer, integer, jsonb) to authenticated;
