-- Prevent full backups from timing out on large tables when OFFSET grows.
-- The existing offset-based RPC remains available for compatibility; new
-- clients use this cursor-based endpoint.
create or replace function public.admin_full_backup_read_cursor(
  p_table text,
  p_cursor text default null,
  p_limit integer default 5000
)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_table_oid oid;
  v_pk_column text;
  v_pk_type text;
  v_result jsonb;
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  if p_cursor is not null and length(p_cursor) > 200 then raise exception 'จุดต่อข้อมูลสำรองไม่ถูกต้อง'; end if;
  if p_limit < 1 or p_limit > 5000 then raise exception 'ช่วงข้อมูลสำรองไม่ถูกต้อง'; end if;

  select format('public.%I', p_table)::regclass
  into v_table_oid
  from information_schema.tables
  where table_schema = 'public'
    and table_type = 'BASE TABLE'
    and table_name = p_table
    and p_table <> 'academic_term_backups';

  if v_table_oid is null then raise exception 'ตารางสำรองไม่อยู่ในรายการที่อนุญาต'; end if;

  -- Prefer a single-column primary key so every page can use an index seek.
  select a.attname, format_type(a.atttypid, a.atttypmod)
  into v_pk_column, v_pk_type
  from pg_index i
  cross join lateral unnest(i.indkey) with ordinality as k(attnum, ord)
  join pg_attribute a on a.attrelid = i.indrelid and a.attnum = k.attnum
  where i.indrelid = v_table_oid
    and i.indisprimary
  group by a.attname, a.atttypid, a.atttypmod
  having count(*) = 1;

  if v_pk_column is not null then
    execute format($sql$
      with page as materialized (
        select x.%1$I as key_value, to_jsonb(x) as row
        from public.%2$I x
        where ($1 is null or x.%1$I > $1::%3$s)
        order by x.%1$I
        limit $2
      ), aggregated as (
        select
          coalesce(jsonb_agg(row order by key_value), '[]'::jsonb) as rows,
          (array_agg(key_value order by key_value desc))[1]::text as next_cursor,
          count(*)::integer as page_count
        from page
      )
      select jsonb_build_object(
        'rows', rows,
        'next_cursor', next_cursor,
        'has_more', page_count = $2,
        'pagination', 'primary_key',
        'key_column', %4$L
      )
      from aggregated
    $sql$, v_pk_column, p_table, v_pk_type, v_pk_column)
    into v_result
    using nullif(p_cursor, ''), p_limit;
  else
    -- Tables without a single-column primary key are expected to be small.
    -- Keep a ctid cursor as a safe fallback instead of growing OFFSET scans.
    execute format($sql$
      with page as materialized (
        select x.ctid as tuple_id, to_jsonb(x) as row
        from public.%I x
        where ($1 is null or x.ctid > $1::tid)
        order by x.ctid
        limit $2
      ), aggregated as (
        select
          coalesce(jsonb_agg(row order by tuple_id), '[]'::jsonb) as rows,
          (array_agg(tuple_id order by tuple_id desc))[1]::text as next_cursor,
          count(*)::integer as page_count
        from page
      )
      select jsonb_build_object(
        'rows', rows,
        'next_cursor', next_cursor,
        'has_more', page_count = $2,
        'pagination', 'ctid'
      )
      from aggregated
    $sql$, p_table)
    into v_result
    using nullif(p_cursor, ''), p_limit;
  end if;

  return coalesce(v_result, jsonb_build_object(
    'rows', '[]'::jsonb,
    'next_cursor', null,
    'has_more', false
  ));
end;
$function$;

revoke all on function public.admin_full_backup_read_cursor(text, text, integer) from public, anon;
grant execute on function public.admin_full_backup_read_cursor(text, text, integer) to authenticated;
