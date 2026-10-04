-- Include Supabase Storage objects in the administrator's full backup catalog.

create or replace function public.admin_full_backup_storage_catalog()
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
begin
  if get_user_role() <> 'admin' then raise exception 'not authorized'; end if;
  return jsonb_build_object(
    'buckets', coalesce((
      select jsonb_agg(jsonb_build_object('id', b.id, 'name', b.name, 'public', b.public) order by b.id)
      from storage.buckets b
    ), '[]'::jsonb),
    'objects', coalesce((
      select jsonb_agg(jsonb_build_object(
        'bucket_id', o.bucket_id,
        'name', o.name,
        'metadata', o.metadata,
        'created_at', o.created_at,
        'updated_at', o.updated_at
      ) order by o.bucket_id, o.name)
      from storage.objects o
    ), '[]'::jsonb)
  );
end;
$function$;

revoke all on function public.admin_full_backup_storage_catalog() from public, anon;
grant execute on function public.admin_full_backup_storage_catalog() to authenticated;
