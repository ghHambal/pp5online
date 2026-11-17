-- Treat terms created after the initial settings seed as male-eligible until
-- an administrator saves their own gender policy, matching the UI default.
create or replace function public.assign_council_officer(
  p_term_id bigint,
  p_role_key text,
  p_student_id integer default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_gender text;
  v_allowed_genders text[];
begin
  if auth.uid() is null or not public.is_council_staff() then
    raise exception 'not authorized to assign council officers';
  end if;
  if p_role_key is null or p_role_key not in ('secretary', 'treasurer') then
    raise exception 'invalid council officer role';
  end if;

  perform 1 from public.council_terms t
  where t.id = p_term_id and t.status in ('active', 'upcoming')
  for update;
  if not found then
    raise exception 'council term is not editable';
  end if;

  if p_student_id is not null then
    select cp.gender into v_gender
    from public.council_members cm
    join public.council_positions cp on cp.id = cm.position_id
    where cm.term_id = p_term_id and cm.student_id = p_student_id and cm.status = 'active'
    limit 1;
    if not found then
      raise exception 'selected student must be an active council member in this term';
    end if;

    if exists (
      select 1 from public.council_officer_assignments a
      where a.term_id = p_term_id and a.student_id = p_student_id and a.role_key <> p_role_key
    ) then
      select coalesce(
        (select s.dual_role_genders from public.council_officer_settings s where s.term_id = p_term_id),
        array['M']::text[]
      ) into v_allowed_genders;
      if not coalesce(v_gender = any(v_allowed_genders), false) then
        raise exception 'this gender roster is not enabled to hold both shared officer roles';
      end if;
    end if;
  end if;

  insert into public.council_officer_assignments(term_id, role_key, student_id, assigned_by_profile_id, updated_at)
  values (p_term_id, p_role_key, p_student_id, auth.uid(), now())
  on conflict (term_id, role_key) do update
    set student_id = excluded.student_id,
        assigned_by_profile_id = excluded.assigned_by_profile_id,
        updated_at = excluded.updated_at;
end;
$$;
revoke all on function public.assign_council_officer(bigint, text, integer) from public, anon;
grant execute on function public.assign_council_officer(bigint, text, integer) to authenticated;
