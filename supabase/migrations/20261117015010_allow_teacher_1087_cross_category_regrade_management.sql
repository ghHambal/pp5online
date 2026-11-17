-- Allow only the verified regrade admin linked to teacher code 1087 to manage
-- unassigned subjects across both categories. Other department heads remain
-- restricted to their own category.

create or replace function public.assign_regrade_subject_teacher_bulk(
  p_subject_code text,
  p_category text,
  p_teacher_id integer
)
returns integer
language plpgsql
security definer
set search_path = public
as $function$
declare
  v_caller_category text;
  v_is_1087_admin boolean;
  v_updated integer;
begin
  select t.category
    into v_caller_category
  from public.teachers t
  where t.profile_id = auth.uid()
  limit 1;

  v_is_1087_admin := public.is_regrade_admin() and exists (
    select 1 from public.teachers t
    where t.profile_id = auth.uid() and t.teacher_code = '1087'
  );

  if p_category not in ('สามัญ', 'ศาสนา') then
    raise exception 'invalid category';
  end if;

  if not v_is_1087_admin and (
    v_caller_category is null
    or v_caller_category <> p_category
    or not exists (
      select 1 from public.teachers t
      where t.profile_id = auth.uid()
        and (
          t.position in ('dept_head', 'religion_group_head', 'religion_subgroup_head')
          or coalesce(nullif(t.positions, array[]::text[]), array[t.position])
            && array['dept_head', 'religion_group_head', 'religion_subgroup_head']
        )
    )
  ) then
    raise exception 'not authorized';
  end if;

  if not exists (
    select 1 from public.teachers t
    where t.id = p_teacher_id
      and t.profile_id is not null
      and t.category = p_category
  ) then
    raise exception 'ครูผู้สอนไม่อยู่ในหมวดสาระเดียวกัน';
  end if;

  update public.regrade_subjects rs
  set teacher_id = p_teacher_id,
      updated_at = now()
  where rs.subject_code = p_subject_code
    and rs.category = p_category
    and rs.teacher_id is null;

  get diagnostics v_updated = row_count;
  return v_updated;
end;
$function$;

create or replace function public.assign_regrade_subject_teacher_by_ids(
  p_row_ids bigint[],
  p_teacher_id integer
)
returns integer
language plpgsql
security definer
set search_path = public
as $function$
declare
  v_caller_category text;
  v_target_category text;
  v_is_1087_admin boolean;
  v_updated integer;
begin
  select t.category
    into v_caller_category
  from public.teachers t
  where t.profile_id = auth.uid()
  limit 1;

  v_is_1087_admin := public.is_regrade_admin() and exists (
    select 1 from public.teachers t
    where t.profile_id = auth.uid() and t.teacher_code = '1087'
  );

  if not v_is_1087_admin and (
    v_caller_category is null
    or not exists (
      select 1 from public.teachers t
      where t.profile_id = auth.uid()
        and (
          t.position in ('dept_head', 'religion_group_head', 'religion_subgroup_head')
          or coalesce(nullif(t.positions, array[]::text[]), array[t.position])
            && array['dept_head', 'religion_group_head', 'religion_subgroup_head']
        )
    )
  ) then
    raise exception 'not authorized';
  end if;

  select t.category
    into v_target_category
  from public.teachers t
  where t.id = p_teacher_id
    and t.profile_id is not null;

  if v_target_category is null
    or v_target_category not in ('สามัญ', 'ศาสนา')
    or (not v_is_1087_admin and v_target_category <> v_caller_category)
  then
    raise exception 'ครูผู้สอนไม่อยู่ในหมวดสาระเดียวกัน';
  end if;

  if exists (
    select 1 from public.regrade_subjects rs
    where rs.id = any(p_row_ids)
      and (rs.category <> v_target_category or rs.teacher_id is not null)
  ) then
    raise exception 'รายการที่เลือกไม่อยู่ในหมวดครูหรือมีผู้รับผิดชอบแล้ว';
  end if;

  update public.regrade_subjects rs
  set teacher_id = p_teacher_id,
      updated_at = now()
  where rs.id = any(p_row_ids)
    and rs.category = v_target_category
    and rs.teacher_id is null;

  get diagnostics v_updated = row_count;
  return v_updated;
end;
$function$;

revoke all on function public.assign_regrade_subject_teacher_bulk(text, text, integer) from public;
grant execute on function public.assign_regrade_subject_teacher_bulk(text, text, integer) to authenticated;
revoke all on function public.assign_regrade_subject_teacher_by_ids(bigint[], integer) from public;
grant execute on function public.assign_regrade_subject_teacher_by_ids(bigint[], integer) to authenticated;
