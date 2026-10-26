-- Add a gender-scoped placeholder position for members whose department has
-- not been assigned yet. Keep position_id non-null so existing joins and
-- gender validation continue to work.
update public.council_positions
set is_active = true,
    is_elected = false,
    seats_count = greatest(seats_count, 999),
    sort_order = 10000
where position_name = 'ยังไม่ระบุฝ่าย'
  and gender in ('M', 'W');

insert into public.council_positions (
  gender, position_name, seats_count, is_elected, sort_order, is_active
)
select gender, 'ยังไม่ระบุฝ่าย', 999, false, 10000, true
from (values ('M'::text), ('W'::text)) as required(gender)
where not exists (
  select 1
  from public.council_positions existing
  where existing.gender = required.gender
    and existing.position_name = 'ยังไม่ระบุฝ่าย'
);

-- Staff-scoped update path. The table's broad write policy remains admin-only;
-- council advisors receive only this validated member-edit operation.
create or replace function public.update_council_member_assignment_atomic(
  p_member_id bigint,
  p_position_id bigint,
  p_term_start_date date default null,
  p_term_end_date date default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_before public.council_members%rowtype;
  v_after public.council_members%rowtype;
  v_student_gender text;
  v_position_gender text;
begin
  if not public.is_council_staff() then
    raise exception 'not authorized to update council member';
  end if;

  select m.* into v_before
  from public.council_members m
  join public.council_terms t on t.id = m.term_id
  where m.id = p_member_id
    and t.status in ('active', 'upcoming')
  for update of m;

  if not found then
    raise exception 'council member is not editable';
  end if;

  select case
      when s.gender in ('ชาย', 'M') then 'M'
      when s.gender in ('หญิง', 'W') then 'W'
    end
  into v_student_gender
  from public.students s
  where s.id = v_before.student_id;

  select p.gender into v_position_gender
  from public.council_positions p
  where p.id = p_position_id
    and p.is_active = true;

  if v_position_gender is null then
    raise exception 'council position not found';
  end if;

  if v_student_gender is not null and v_student_gender <> v_position_gender then
    raise exception 'student gender does not match council position';
  end if;

  if p_term_start_date is not null
     and p_term_end_date is not null
     and p_term_end_date < p_term_start_date then
    raise exception 'term end date must not be before term start date';
  end if;

  update public.council_members
  set position_id = p_position_id,
      term_start_date = p_term_start_date,
      term_end_date = p_term_end_date,
      updated_at = now()
  where id = p_member_id
  returning * into v_after;

  insert into public.council_member_audit_logs (
    term_id, member_id, action, actor_profile_id, before_data, after_data
  ) values (
    v_after.term_id, v_after.id, 'member_assignment_updated', auth.uid(),
    to_jsonb(v_before), to_jsonb(v_after)
  );
end;
$$;

revoke all on function public.update_council_member_assignment_atomic(bigint, bigint, date, date) from public;
revoke execute on function public.update_council_member_assignment_atomic(bigint, bigint, date, date) from anon;
grant execute on function public.update_council_member_assignment_atomic(bigint, bigint, date, date) to authenticated;
