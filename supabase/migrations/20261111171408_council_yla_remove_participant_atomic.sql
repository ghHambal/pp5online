-- Remove one YLA event participant and that participant's event records atomically.
create or replace function public.remove_council_yla_participant(p_participant_id bigint)
returns void
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_event_id bigint;
  v_student_id integer;
begin
  if auth.uid() is null or not (
    public.is_council_staff()
    or public.is_council_regulation_reviewer('student_affairs')
  ) then
    raise exception 'not authorized to remove YLA participant';
  end if;

  select event_id, student_id
    into v_event_id, v_student_id
    from public.council_yla_participants
   where id = p_participant_id
   for update;

  if not found then
    raise exception 'YLA participant not found';
  end if;

  delete from public.council_yla_attendance
   where event_id = v_event_id and student_id = v_student_id;
  delete from public.council_yla_scores
   where event_id = v_event_id and student_id = v_student_id;
  delete from public.council_yla_results
   where event_id = v_event_id and student_id = v_student_id;
  delete from public.council_yla_participants
   where id = p_participant_id;
end;
$$;

revoke all on function public.remove_council_yla_participant(bigint) from public;
revoke execute on function public.remove_council_yla_participant(bigint) from anon;
grant execute on function public.remove_council_yla_participant(bigint) to authenticated;
