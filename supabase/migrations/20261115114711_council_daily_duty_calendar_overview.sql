-- Bounded date-range read for the council attendance calendar. The base table
-- stays inaccessible to authenticated clients; rows are filtered to positions
-- the signed-in user is allowed to manage.
create or replace function public.get_council_daily_duty_calendar(
  p_term_id bigint,
  p_start_date date,
  p_end_date date
)
returns table (
  membership_id bigint,
  duty_date date,
  duty_type text,
  status text,
  note text
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if auth.uid() is null
     or p_term_id is null
     or p_start_date is null
     or p_end_date is null
     or p_end_date < p_start_date
     or p_end_date - p_start_date > 370 then
    raise exception 'invalid request' using errcode = '22023';
  end if;

  if not exists (
    select 1
    from public.council_members cm
    where cm.term_id = p_term_id
      and cm.status = 'active'
      and public.can_manage_council_daily_duty(p_term_id, cm.position_id)
  ) then
    raise exception 'not authorized to view council duty calendar' using errcode = '42501';
  end if;

  return query
    select d.membership_id, d.duty_date, d.duty_type, d.status, d.note
    from public.council_daily_duty_attendance d
    join public.council_members cm
      on cm.id = d.membership_id and cm.term_id = d.term_id
    where d.term_id = p_term_id
      and d.duty_date between p_start_date and p_end_date
      and public.can_manage_council_daily_duty(d.term_id, cm.position_id)
    order by d.duty_date, d.duty_type, d.membership_id;
end;
$$;

revoke all on function public.get_council_daily_duty_calendar(bigint, date, date) from public, anon;
grant execute on function public.get_council_daily_duty_calendar(bigint, date, date) to authenticated;
