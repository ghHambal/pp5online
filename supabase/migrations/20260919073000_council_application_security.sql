-- Council application defense-in-depth: eligibility RPC, soft delete, and RLS.
-- Run after the existing council migrations. This migration never deletes existing data.

alter table public.council_applications
  add column if not exists deleted_at timestamptz,
  add column if not exists deleted_by_profile_id uuid,
  add column if not exists delete_reason text,
  add column if not exists deleted_previous_status text;

create table if not exists public.council_application_delete_audit (
  id bigint generated always as identity primary key,
  application_id bigint not null references public.council_applications(id) on delete restrict,
  deleted_by_profile_id uuid not null references public.profiles(id) on delete restrict,
  previous_status text not null,
  reason text not null,
  deleted_at timestamptz not null default now()
);
alter table public.council_application_delete_audit enable row level security;

drop policy if exists council_applications_self_insert on public.council_applications;

create or replace function public.submit_council_application(
  p_student_id integer,
  p_position_id bigint,
  p_academic_year integer,
  p_motivation text,
  p_photo_url text,
  p_gpa_general numeric,
  p_gpa_religious numeric,
  p_intro_video_url text,
  p_certificates jsonb,
  p_requested_peer_endorser_id bigint default null
) returns public.council_applications
language plpgsql security definer set search_path = public
as $$
declare
  v_student public.students%rowtype;
  v_levels text[];
  v_grade text;
  v_min_gpa numeric;
  v_min_gpa_religious numeric;
  v_min_certificates integer;
  v_open text;
  v_close text;
  v_application public.council_applications;
begin
  select * into v_student from public.students
    where id = p_student_id and profile_id = auth.uid();
  if not found then raise exception 'permission denied'; end if;

  select coalesce(string_to_array(regexp_replace(value, '\s+', '', 'g'), ','), '{}')
    into v_levels from public.system_config where key = 'council_eligible_grade_levels';
  if coalesce(array_length(v_levels, 1), 0) = 0 then
    raise exception 'council eligibility is not configured';
  end if;
  v_grade := substring(coalesce(nullif(v_student.main_room, ''), v_student.religion_room) from '^(ม\.[0-9]+|ปวช\.[0-9]+)');
  if v_grade is null or not (v_grade = any(v_levels)) then
    raise exception 'student grade is not eligible';
  end if;

  select value::numeric into v_min_gpa from system_config where key = 'council_min_gpa';
  select value::numeric into v_min_gpa_religious from system_config where key = 'council_min_gpa_religious';
  select value::integer into v_min_certificates from system_config where key = 'council_min_certificates';
  if v_min_gpa is not null and (p_gpa_general is null or p_gpa_general < v_min_gpa)
    then raise exception 'general GPA is below the required minimum'; end if;
  if v_min_gpa_religious is not null and (p_gpa_religious is null or p_gpa_religious < v_min_gpa_religious)
    then raise exception 'religious GPA is below the required minimum'; end if;
  if v_min_certificates is not null and jsonb_array_length(coalesce(p_certificates, '[]'::jsonb)) < v_min_certificates
    then raise exception 'not enough certificates'; end if;

  select value into v_open from system_config where key = 'council_apply_opens_at';
  select value into v_close from system_config where key = 'council_apply_closes_at';
  if nullif(v_open, '') is not null and now() < v_open::timestamptz then raise exception 'council applications are not open'; end if;
  if nullif(v_close, '') is not null and now() > v_close::timestamptz then raise exception 'council applications are closed'; end if;

  insert into public.council_applications (
    student_id, position_id, academic_year, motivation, photo_url,
    gpa_general, gpa_religious, intro_video_url, certificates, requested_peer_endorser_id
  ) values (
    p_student_id, p_position_id, p_academic_year, p_motivation, p_photo_url,
    p_gpa_general, p_gpa_religious, p_intro_video_url, coalesce(p_certificates, '[]'::jsonb),
    p_requested_peer_endorser_id
  ) returning * into v_application;
  return v_application;
end;
$$;

revoke all on function public.submit_council_application(integer, bigint, integer, text, text, numeric, numeric, text, jsonb, bigint) from public;
grant execute on function public.submit_council_application(integer, bigint, integer, text, text, numeric, numeric, text, jsonb, bigint) to authenticated;

create or replace function public.soft_delete_council_application(p_application_id bigint, p_reason text)
returns void language plpgsql security definer set search_path = public
as $$
declare
  v_app public.council_applications%rowtype;
  v_profile uuid := auth.uid();
begin
  if not (get_user_role() = 'admin' or exists (select 1 from profiles where id = v_profile and is_also_admin = true)) then
    raise exception 'permission denied';
  end if;
  if nullif(trim(p_reason), '') is null then raise exception 'delete reason is required'; end if;
  select * into v_app from council_applications where id = p_application_id and deleted_at is null for update;
  if not found then raise exception 'application not found or already deleted'; end if;
  if v_app.status in ('interview_scheduled', 'interviewed', 'candidate', 'appointed') then
    raise exception 'advanced applications must be cancelled through the workflow';
  end if;
  update council_applications set deleted_at = now(), deleted_by_profile_id = v_profile,
    delete_reason = trim(p_reason), deleted_previous_status = status, updated_at = now()
    where id = p_application_id;
  insert into council_application_delete_audit(application_id, deleted_by_profile_id, previous_status, reason)
    values (p_application_id, v_profile, v_app.status, trim(p_reason));
end;
$$;
revoke all on function public.soft_delete_council_application(bigint, text) from public;
grant execute on function public.soft_delete_council_application(bigint, text) to authenticated;

create policy council_application_delete_audit_admin_read on public.council_application_delete_audit
  for select to authenticated using (get_user_role() = 'admin' or exists (
    select 1 from profiles where id = auth.uid() and is_also_admin = true
  ));

-- Report only: review historical applications outside current configured levels.
-- This query intentionally performs no UPDATE or DELETE.
-- select a.id application_id, s.id student_id, s.student_code, s.full_name,
--        s.main_room, s.religion_room, a.status, a.created_at
-- from public.council_applications a
-- join public.students s on s.id = a.student_id
-- cross join lateral (select coalesce(string_to_array(regexp_replace(value, '\s+', '', 'g'), ','), '{}') levels
--                    from public.system_config where key = 'council_eligible_grade_levels') cfg
-- where substring(coalesce(nullif(s.main_room, ''), s.religion_room) from '^(ม\.[0-9]+|ปวช\.[0-9]+)') <> all (cfg.levels)
-- order by a.created_at;
