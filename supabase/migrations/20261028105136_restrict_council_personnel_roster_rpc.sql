create or replace function public.get_public_council_personnel_roster()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
begin
  if auth.uid() is null or (not public.is_council_staff() and not public.is_council_election_authenticated_teacher()) then
    return '[]'::jsonb;
  end if;
  return (
    select coalesce(jsonb_agg(jsonb_build_object('id',p.id,'full_name',p.full_name) order by p.full_name),'[]'::jsonb)
    from public.sports_shirt_personnel_requests p
    where p.event_id=public._council_current_personnel_roster_event_id()
  );
end;
$$;
revoke all on function public.get_public_council_personnel_roster() from public,anon;
grant execute on function public.get_public_council_personnel_roster() to authenticated;
