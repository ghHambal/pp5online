-- Include lightweight table estimates so the admin UI can show approximate
-- progress without running expensive COUNT(*) queries over the whole schema.
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
      'estimated_rows', greatest(c.reltuples::bigint, 0),
      'estimated_bytes', pg_total_relation_size(c.oid),
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
    join pg_class c on c.relname = t.table_name
    join pg_namespace table_ns on table_ns.oid = c.relnamespace
      and table_ns.nspname = t.table_schema
    where t.table_schema = 'public'
      and t.table_type = 'BASE TABLE'
      and t.table_name <> 'academic_term_backups'
  ), '[]'::jsonb);
end;
$function$;

revoke all on function public.admin_full_backup_catalog() from public, anon;
grant execute on function public.admin_full_backup_catalog() to authenticated;
