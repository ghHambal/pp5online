create or replace function public.asr_prayer_delegate_candidates()
returns jsonb language plpgsql stable security definer set search_path = pg_catalog, public as $$
begin
  if auth.uid() is null or not public.asr_prayer_is_admin() then
    raise exception 'admin access required' using errcode='42501';
  end if;
  return (select coalesce(jsonb_agg(jsonb_build_object(
      'id',s.id,'student_code',s.student_code,'full_name',s.full_name,
      'main_room',s.main_room,'profile_id',s.profile_id
    ) order by s.student_code),'[]'::jsonb)
    from public.students s
    where s.is_active is true and left(coalesce(s.main_room,''),3)='ม.6'
      and s.profile_id is not null);
end $$;
revoke all on function public.asr_prayer_delegate_candidates() from public, anon;
grant execute on function public.asr_prayer_delegate_candidates() to authenticated;
