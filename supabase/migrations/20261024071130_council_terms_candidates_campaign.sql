-- Student-council terms, candidate administration, printable rosters, and
-- gender-scoped campaign popups.

create table if not exists public.council_terms (
  id bigint generated always as identity primary key,
  term_label text not null,
  academic_year integer not null,
  start_semester smallint not null check (start_semester in (1, 2)),
  start_year integer not null,
  end_semester smallint not null check (end_semester in (1, 2)),
  end_year integer not null,
  duty_start_date date,
  duty_end_date date,
  status text not null default 'draft'
    check (status in ('draft', 'upcoming', 'active', 'closed')),
  activated_at timestamptz,
  closed_at timestamptz,
  created_by_profile_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint council_terms_year_range_check check (end_year >= start_year),
  constraint council_terms_date_range_check check (
    duty_end_date is null or duty_start_date is null or duty_end_date >= duty_start_date
  )
);

create unique index if not exists council_terms_one_active_idx
  on public.council_terms ((status)) where status = 'active';
create index if not exists council_terms_status_dates_idx
  on public.council_terms (status, start_year desc, start_semester desc);

alter table public.council_terms enable row level security;
grant select on public.council_terms to authenticated;
grant insert, update on public.council_terms to authenticated;
grant usage, select on sequence public.council_terms_id_seq to authenticated;

drop policy if exists council_terms_authenticated_read on public.council_terms;
create policy council_terms_authenticated_read
  on public.council_terms for select to authenticated using (true);
drop policy if exists council_terms_staff_insert on public.council_terms;
create policy council_terms_staff_insert
  on public.council_terms for insert to authenticated
  with check (public.is_council_staff());
drop policy if exists council_terms_staff_update on public.council_terms;
create policy council_terms_staff_update
  on public.council_terms for update to authenticated
  using (public.is_council_staff()) with check (public.is_council_staff());

insert into public.council_terms (
  term_label, academic_year, start_semester, start_year,
  end_semester, end_year, status, activated_at
)
select
  'วาระ ' || s.semester || '/' || s.start_year || ' – ' || e.semester || '/' || e.end_year,
  a.academic_year, s.semester, s.start_year, e.semester, e.end_year,
  'active', now()
from (
  select coalesce(nullif(value, '')::integer, extract(year from current_date)::integer + 543) as academic_year
  from public.system_config where key = 'academicYear'
) a
cross join lateral (
  select
    coalesce((select nullif(value, '')::smallint from public.system_config where key = 'council_term_start_semester'), 1::smallint) as semester,
    coalesce((select nullif(value, '')::integer from public.system_config where key = 'council_term_start_year'), a.academic_year) as start_year
) s
cross join lateral (
  select
    coalesce((select nullif(value, '')::smallint from public.system_config where key = 'council_term_end_semester'), s.semester) as semester,
    coalesce((select nullif(value, '')::integer from public.system_config where key = 'council_term_end_year'), s.start_year) as end_year
) e
where not exists (select 1 from public.council_terms);

create or replace function public.current_council_term_id()
returns bigint
language sql
stable
set search_path = public
as $$
  select id from public.council_terms where status = 'active' order by id desc limit 1;
$$;

revoke all on function public.current_council_term_id() from public, anon;
grant execute on function public.current_council_term_id() to authenticated;

alter table public.council_members
  add column if not exists term_id bigint references public.council_terms(id) on delete restrict
    default public.current_council_term_id(),
  add column if not exists appointment_method text,
  add column if not exists appointment_order_ref text,
  add column if not exists appointment_reason text,
  add column if not exists appointment_evidence_url text;
alter table public.council_applications
  add column if not exists term_id bigint references public.council_terms(id) on delete restrict
    default public.current_council_term_id();
alter table public.council_election_config
  add column if not exists term_id bigint references public.council_terms(id) on delete restrict
    default public.current_council_term_id(),
  add column if not exists campaign_opens_at timestamptz,
  add column if not exists campaign_enabled boolean not null default false,
  add column if not exists candidates_published boolean not null default false,
  add column if not exists updated_at timestamptz not null default now();
alter table public.council_activities
  add column if not exists term_id bigint references public.council_terms(id) on delete restrict
    default public.current_council_term_id();
alter table public.council_documents
  add column if not exists term_id bigint references public.council_terms(id) on delete restrict
    default public.current_council_term_id();
alter table public.council_evaluations
  add column if not exists term_id bigint references public.council_terms(id) on delete restrict
    default public.current_council_term_id();
alter table public.council_yla_events
  add column if not exists term_id bigint references public.council_terms(id) on delete restrict
    default public.current_council_term_id();

do $$
declare
  v_table text;
begin
  foreach v_table in array array[
    'council_members', 'council_applications', 'council_election_config',
    'council_activities', 'council_documents', 'council_evaluations', 'council_yla_events'
  ] loop
    execute format(
      'update public.%I x set term_id = (' ||
      'select t.id from public.council_terms t where t.academic_year = x.academic_year ' ||
      'order by (t.status = ''active'') desc, t.id desc limit 1' ||
      ') where x.term_id is null',
      v_table
    );
  end loop;
end;
$$;

update public.council_members
set appointment_method = case source when 'elected' then 'election' else 'legacy' end
where appointment_method is null;

alter table public.council_members drop constraint if exists council_members_status_check;
alter table public.council_members add constraint council_members_status_check
  check (status in ('designate', 'active', 'ended', 'resigned', 'removed'));
alter table public.council_members drop constraint if exists council_members_appointment_method_check;
alter table public.council_members add constraint council_members_appointment_method_check
  check (appointment_method in ('interview', 'direct', 'election', 'external_import', 'chair_nomination', 'legacy'));
alter table public.council_members alter column appointment_method set default 'legacy';
alter table public.council_members alter column appointment_method set not null;

create unique index if not exists council_members_term_student_position_current_key
  on public.council_members (term_id, student_id, position_id)
  where status in ('designate', 'active');
create index if not exists council_members_term_status_idx
  on public.council_members (term_id, status, position_id);
create unique index if not exists council_applications_term_student_position_open_key
  on public.council_applications (term_id, student_id, position_id)
  where deleted_at is null and status <> 'rejected';
create unique index if not exists council_election_config_term_gender_key
  on public.council_election_config (term_id, gender);

alter table public.council_candidates
  add column if not exists status text not null default 'draft',
  add column if not exists published_at timestamptz,
  add column if not exists withdrawn_at timestamptz,
  add column if not exists updated_at timestamptz not null default now();
alter table public.council_candidates drop constraint if exists council_candidates_status_check;
alter table public.council_candidates add constraint council_candidates_status_check
  check (status in ('draft', 'published', 'withdrawn', 'elected'));
update public.council_candidates
set status = 'published', published_at = coalesce(published_at, created_at)
where status = 'draft';

create table if not exists public.council_member_audit_logs (
  id bigint generated always as identity primary key,
  term_id bigint references public.council_terms(id) on delete restrict,
  member_id bigint references public.council_members(id) on delete set null,
  action text not null,
  actor_profile_id uuid references public.profiles(id) on delete set null,
  before_data jsonb,
  after_data jsonb,
  created_at timestamptz not null default now()
);
alter table public.council_member_audit_logs enable row level security;
grant select, insert on public.council_member_audit_logs to authenticated;
grant usage, select on sequence public.council_member_audit_logs_id_seq to authenticated;
drop policy if exists council_member_audit_staff_read on public.council_member_audit_logs;
create policy council_member_audit_staff_read
  on public.council_member_audit_logs for select to authenticated
  using (public.is_council_staff());

create or replace function public.create_council_term(
  p_term_label text,
  p_academic_year integer,
  p_start_semester smallint,
  p_start_year integer,
  p_end_semester smallint,
  p_end_year integer,
  p_duty_start_date date default null,
  p_duty_end_date date default null
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare v_id bigint;
begin
  if not public.is_council_staff() then raise exception 'not authorized to create council term'; end if;
  if nullif(trim(p_term_label), '') is null then raise exception 'term label is required'; end if;
  insert into public.council_terms (
    term_label, academic_year, start_semester, start_year, end_semester, end_year,
    duty_start_date, duty_end_date, status, created_by_profile_id
  ) values (
    trim(p_term_label), p_academic_year, p_start_semester, p_start_year, p_end_semester, p_end_year,
    p_duty_start_date, p_duty_end_date, 'upcoming', auth.uid()
  ) returning id into v_id;
  return v_id;
end;
$$;

create or replace function public.preview_council_term_activation(p_term_id bigint)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare v_target public.council_terms%rowtype;
begin
  if not public.is_council_staff() then raise exception 'not authorized to preview council term activation'; end if;
  select * into v_target from public.council_terms where id = p_term_id;
  if not found then raise exception 'council term not found'; end if;
  return jsonb_build_object(
    'term_id', v_target.id,
    'term_label', v_target.term_label,
    'current_terms_to_close', (select count(*) from public.council_terms where status = 'active' and id <> p_term_id),
    'active_members_to_end', (select count(*) from public.council_members m join public.council_terms t on t.id=m.term_id where t.status='active' and t.id<>p_term_id and m.status='active'),
    'designates_to_activate', (select count(*) from public.council_members where term_id=p_term_id and status='designate'),
    'applications_in_target', (select count(*) from public.council_applications where term_id=p_term_id and deleted_at is null),
    'elections_in_target', (select count(*) from public.council_election_config where term_id=p_term_id)
  );
end;
$$;

create or replace function public.activate_council_term(p_term_id bigint)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_target public.council_terms%rowtype;
  v_ended integer := 0;
  v_activated integer := 0;
begin
  if not public.is_council_staff() then raise exception 'not authorized to activate council term'; end if;
  select * into v_target from public.council_terms where id = p_term_id for update;
  if not found then raise exception 'council term not found'; end if;

  update public.council_members m
  set status='ended', term_end_date=coalesce(term_end_date, current_date), updated_at=now()
  from public.council_terms t
  where m.term_id=t.id and t.status='active' and t.id<>p_term_id and m.status='active';
  get diagnostics v_ended = row_count;

  update public.council_terms
  set status='closed', closed_at=now(), updated_at=now()
  where status='active' and id<>p_term_id;

  update public.council_terms
  set status='active', activated_at=coalesce(activated_at, now()), closed_at=null, updated_at=now()
  where id=p_term_id;

  update public.council_members
  set status='active', term_start_date=coalesce(term_start_date, v_target.duty_start_date, current_date), updated_at=now()
  where term_id=p_term_id and status='designate';
  get diagnostics v_activated = row_count;

  insert into public.system_config(key, value) values
    ('council_term_start_semester', v_target.start_semester::text),
    ('council_term_start_year', v_target.start_year::text),
    ('council_term_end_semester', v_target.end_semester::text),
    ('council_term_end_year', v_target.end_year::text)
  on conflict (key) do update set value=excluded.value;

  insert into public.council_member_audit_logs(term_id, action, actor_profile_id, after_data)
  values (p_term_id, 'term_activated', auth.uid(), jsonb_build_object('ended_members',v_ended,'activated_members',v_activated));

  return jsonb_build_object('ok',true,'ended_members',v_ended,'activated_members',v_activated);
end;
$$;

create or replace function public.add_council_member_manual_atomic(
  p_term_id bigint,
  p_position_id bigint,
  p_student_id integer,
  p_appointment_method text,
  p_term_start_date date default null,
  p_appointed_by_teacher_id integer default null,
  p_order_ref text default null,
  p_reason text default null,
  p_evidence_url text default null
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_term public.council_terms%rowtype;
  v_member_id bigint;
  v_status text;
  v_source text;
  v_student_gender text;
  v_position_gender text;
begin
  if not public.is_council_staff() then raise exception 'not authorized to add council member'; end if;
  if p_appointment_method not in ('interview','direct','election','external_import','chair_nomination','legacy') then
    raise exception 'invalid appointment method';
  end if;
  select * into v_term from public.council_terms where id=p_term_id and status in ('active','upcoming') for update;
  if not found then raise exception 'council term is not open for member management'; end if;
  select case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end
    into v_student_gender from public.students where id=p_student_id;
  select gender into v_position_gender from public.council_positions where id=p_position_id and is_active=true;
  if v_position_gender is null then raise exception 'council position not found'; end if;
  if v_student_gender is not null and v_student_gender<>v_position_gender then raise exception 'student gender does not match council position'; end if;
  v_status := case when v_term.status='active' then 'active' else 'designate' end;
  v_source := case when p_appointment_method='election' then 'elected' else 'appointed' end;

  insert into public.council_members (
    term_id, position_id, student_id, academic_year, source, status, term_start_date,
    appointed_by_teacher_id, appointment_method, appointment_order_ref,
    appointment_reason, appointment_evidence_url
  ) values (
    p_term_id, p_position_id, p_student_id, v_term.academic_year, v_source, v_status,
    coalesce(p_term_start_date, v_term.duty_start_date, current_date),
    p_appointed_by_teacher_id, p_appointment_method, nullif(trim(p_order_ref),''),
    nullif(trim(p_reason),''), nullif(trim(p_evidence_url),'')
  ) returning id into v_member_id;

  insert into public.council_member_audit_logs(term_id, member_id, action, actor_profile_id, after_data)
  select p_term_id, v_member_id, 'member_added_manual', auth.uid(), to_jsonb(m)
  from public.council_members m where m.id=v_member_id;
  return v_member_id;
end;
$$;

create or replace function public.submit_council_application_for_term(
  p_term_id bigint,
  p_student_id integer,
  p_position_id bigint,
  p_motivation text,
  p_photo_url text,
  p_gpa_general numeric,
  p_gpa_religious numeric,
  p_intro_video_url text,
  p_certificates jsonb,
  p_requested_peer_endorser_id bigint default null
)
returns public.council_applications
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student public.students%rowtype;
  v_term public.council_terms%rowtype;
  v_levels text[];
  v_grade text;
  v_min_gpa numeric;
  v_min_gpa_religious numeric;
  v_min_certificates integer;
  v_open text;
  v_close text;
  v_application public.council_applications;
begin
  select * into v_student from public.students where id=p_student_id and profile_id=auth.uid();
  if not found then raise exception 'permission denied'; end if;
  select * into v_term from public.council_terms where id=p_term_id and status in ('active','upcoming');
  if not found then raise exception 'council term is not accepting applications'; end if;
  if not exists (select 1 from public.council_positions where id=p_position_id and is_active=true) then
    raise exception 'council position not found';
  end if;

  select coalesce(string_to_array(regexp_replace(value, '\s+', '', 'g'), ','), '{}')
    into v_levels from public.system_config where key='council_eligible_grade_levels';
  if coalesce(array_length(v_levels,1),0)=0 then raise exception 'council eligibility is not configured'; end if;
  v_grade := substring(coalesce(nullif(v_student.main_room,''),v_student.religion_room) from '^(ม\.[0-9]+|ปวช\.[0-9]+)');
  if v_grade is null or not (v_grade=any(v_levels)) then raise exception 'student grade is not eligible'; end if;

  select value::numeric into v_min_gpa from public.system_config where key='council_min_gpa';
  select value::numeric into v_min_gpa_religious from public.system_config where key='council_min_gpa_religious';
  select value::integer into v_min_certificates from public.system_config where key='council_min_certificates';
  if v_min_gpa is not null and (p_gpa_general is null or p_gpa_general<v_min_gpa) then raise exception 'general GPA is below the required minimum'; end if;
  if v_min_gpa_religious is not null and (p_gpa_religious is null or p_gpa_religious<v_min_gpa_religious) then raise exception 'religious GPA is below the required minimum'; end if;
  if v_min_certificates is not null and jsonb_array_length(coalesce(p_certificates,'[]'::jsonb))<v_min_certificates then raise exception 'not enough certificates'; end if;
  select value into v_open from public.system_config where key='council_apply_opens_at';
  select value into v_close from public.system_config where key='council_apply_closes_at';
  if nullif(v_open,'') is not null and now()<v_open::timestamptz then raise exception 'council applications are not open'; end if;
  if nullif(v_close,'') is not null and now()>v_close::timestamptz then raise exception 'council applications are closed'; end if;

  insert into public.council_applications (
    term_id, student_id, position_id, academic_year, motivation, photo_url,
    gpa_general, gpa_religious, intro_video_url, certificates, requested_peer_endorser_id
  ) values (
    p_term_id, p_student_id, p_position_id, v_term.academic_year, p_motivation, p_photo_url,
    p_gpa_general, p_gpa_religious, p_intro_video_url, coalesce(p_certificates,'[]'::jsonb), p_requested_peer_endorser_id
  ) returning * into v_application;
  return v_application;
end;
$$;

-- Preserve the existing interview appointment API, but bind the appointment to
-- the application's selected term. Upcoming-term appointees remain designates
-- until activate_council_term promotes them atomically.
create or replace function public.appoint_council_member_atomic(
  p_application_id bigint,
  p_position_id bigint,
  p_student_id integer,
  p_academic_year integer,
  p_appointed_by_teacher_id integer default null
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_app public.council_applications%rowtype;
  v_term public.council_terms%rowtype;
  v_member_id bigint;
  v_status text;
begin
  if not public.is_council_staff() then raise exception 'not authorized to appoint council member'; end if;
  select * into v_app from public.council_applications where id=p_application_id and deleted_at is null for update;
  if not found then raise exception 'application not found'; end if;
  if v_app.student_id<>p_student_id or v_app.position_id<>p_position_id then raise exception 'application data mismatch'; end if;
  if v_app.status not in ('interviewed','candidate') then raise exception 'application is not ready for appointment'; end if;
  select * into v_term from public.council_terms where id=v_app.term_id and status in ('active','upcoming') for update;
  if not found then raise exception 'application term is not open'; end if;
  v_status := case when v_term.status='active' then 'active' else 'designate' end;

  insert into public.council_members(
    term_id, position_id, student_id, academic_year, source, status, term_start_date,
    appointed_by_teacher_id, appointment_method, appointment_reason
  ) values (
    v_term.id, p_position_id, p_student_id, v_term.academic_year, 'appointed', v_status,
    coalesce(v_term.duty_start_date,current_date), p_appointed_by_teacher_id, 'interview',
    'แต่งตั้งจากผลการสัมภาษณ์'
  ) returning id into v_member_id;

  update public.council_applications set status='appointed' where id=p_application_id;
  insert into public.council_member_audit_logs(term_id,member_id,action,actor_profile_id,after_data)
  select v_term.id,v_member_id,'member_appointed_from_interview',auth.uid(),to_jsonb(m)
  from public.council_members m where m.id=v_member_id;
  return v_member_id;
end;
$$;

create or replace function public.update_council_candidate_admin(
  p_candidate_id bigint,
  p_ballot_number integer,
  p_status text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare v_election public.council_election_config%rowtype;
begin
  if not public.is_council_staff() then raise exception 'not authorized to manage council candidate'; end if;
  if p_ballot_number is null or p_ballot_number<1 then raise exception 'invalid ballot number'; end if;
  if p_status not in ('draft','published','withdrawn') then raise exception 'invalid candidate status'; end if;
  select e.* into v_election
  from public.council_election_config e join public.council_candidates c on c.election_config_id=e.id
  where c.id=p_candidate_id for update of e;
  if not found then raise exception 'candidate not found'; end if;
  if v_election.results_published_at is not null or exists(select 1 from public.council_votes where election_config_id=v_election.id) then
    raise exception 'candidate list is locked after voting starts';
  end if;
  update public.council_candidates
  set ballot_number=p_ballot_number,
      status=p_status,
      published_at=case when p_status='published' then coalesce(published_at,now()) else published_at end,
      withdrawn_at=case when p_status='withdrawn' then now() else null end,
      updated_at=now()
  where id=p_candidate_id;
end;
$$;

create or replace function public.get_council_campaign_bundle()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_role text;
  v_gender text;
  v_elections jsonb;
begin
  if auth.uid() is null then raise exception 'authentication required'; end if;
  select role into v_role from public.profiles where id=auth.uid();
  if v_role='student' then
    select case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end
      into v_gender from public.students where profile_id=auth.uid() limit 1;
  elsif v_role not in ('teacher','admin') then
    return jsonb_build_object('role',v_role,'elections','[]'::jsonb);
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
    'election_id', e.id,
    'gender', e.gender,
    'opens_at', e.opens_at,
    'closes_at', e.closes_at,
    'campaign_opens_at', e.campaign_opens_at,
    'term_id', t.id,
    'term_label', t.term_label,
    'candidates', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id',c.id,'ballot_number',c.ballot_number,'full_name',s.full_name,
        'student_code',s.student_code,'main_room',s.main_room,
        'image_url',coalesce(c.photo_url,s.image_url,s.photo_url),
        'campaign_statement',c.campaign_statement,'slogan',c.slogan,'vision',c.vision,
        'policies',coalesce(c.policies,'[]'::jsonb),'experience',coalesce(c.experience,'[]'::jsonb),
        'intro_video_url',a.intro_video_url
      ) order by c.ballot_number),'[]'::jsonb)
      from public.council_candidates c
      join public.students s on s.id=c.student_id
      left join public.council_applications a on a.id=c.application_id
      where c.election_config_id=e.id and c.status='published'
    )
  ) order by e.gender),'[]'::jsonb) into v_elections
  from public.council_election_config e
  join public.council_terms t on t.id=e.term_id
  where e.campaign_enabled=true
    and e.candidates_published=true
    and e.campaign_opens_at is not null and e.campaign_opens_at<=now()
    and e.closes_at is not null and e.closes_at>now()
    and e.results_published_at is null
    and t.status in ('active','upcoming')
    and (v_role in ('teacher','admin') or e.gender=v_gender);
  return jsonb_build_object('role',v_role,'viewer_gender',v_gender,'elections',v_elections);
end;
$$;

create or replace function public.promote_council_candidate_atomic(
  p_application_id bigint,
  p_student_id integer,
  p_election_config_id bigint,
  p_campaign_statement text,
  p_photo_url text
)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_candidate_id bigint;
  v_position_gender text;
  v_is_elected boolean;
  v_term_id bigint;
  v_next_ballot integer;
begin
  if not public.is_council_staff() then raise exception 'not authorized to promote council candidate'; end if;
  select cp.gender,cp.is_elected,a.term_id into v_position_gender,v_is_elected,v_term_id
  from public.council_applications a join public.council_positions cp on cp.id=a.position_id
  where a.id=p_application_id and a.student_id=p_student_id and a.status in ('interviewed','candidate') and a.deleted_at is null;
  if not found or not v_is_elected then raise exception 'application is not eligible for election candidate promotion'; end if;
  perform 1 from public.council_election_config e
  where e.id=p_election_config_id and e.gender=v_position_gender and e.term_id=v_term_id for update;
  if not found then raise exception 'election configuration does not match application term'; end if;
  select coalesce(max(ballot_number),0)+1 into v_next_ballot from public.council_candidates where election_config_id=p_election_config_id;
  insert into public.council_candidates(election_config_id,application_id,student_id,ballot_number,campaign_statement,photo_url,status)
  values(p_election_config_id,p_application_id,p_student_id,v_next_ballot,p_campaign_statement,p_photo_url,'draft')
  on conflict(election_config_id,student_id) do update
    set campaign_statement=excluded.campaign_statement,photo_url=excluded.photo_url,updated_at=now()
  returning id into v_candidate_id;
  update public.council_applications set status='candidate',updated_at=now() where id=p_application_id;
  return v_candidate_id;
end;
$$;

create or replace function public.cast_public_council_vote(p_code text,p_candidate_id bigint)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare v_student_id integer; v_gender text; v_election_id bigint; v_vote_id bigint;
begin
  select id,case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end
    into v_student_id,v_gender from public.students
    where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;
  if v_student_id is null then return jsonb_build_object('error','student_not_found'); end if;
  select e.id into v_election_id
  from public.council_election_config e join public.council_candidates c on c.election_config_id=e.id
  where c.id=p_candidate_id and c.status='published' and e.candidates_published=true
    and e.gender=v_gender and e.opens_at is not null and e.opens_at<=now()
    and (e.closes_at is null or e.closes_at>now()) and e.results_published_at is null;
  if v_election_id is null then return jsonb_build_object('error','election_not_open'); end if;
  insert into public.council_votes(election_config_id,candidate_id,voter_student_id)
  values(v_election_id,p_candidate_id,v_student_id)
  on conflict(election_config_id,voter_student_id) do nothing returning id into v_vote_id;
  if v_vote_id is null then return jsonb_build_object('error','already_voted'); end if;
  return jsonb_build_object('ok',true);
end;
$$;

create or replace function public.get_public_council_election_bundle(p_code text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare v_student record; v_gender text; v_election record; v_candidates jsonb; v_my_vote bigint; v_thank_you text;
begin
  select id,full_name,image_url,photo_url,main_room,gender into v_student
  from public.students where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;
  if v_student.id is null then return jsonb_build_object('error','student_not_found'); end if;
  v_gender := case when v_student.gender in ('ชาย','M') then 'M' when v_student.gender in ('หญิง','W') then 'W' end;
  if v_gender is null then return jsonb_build_object('error','gender_unknown'); end if;
  select value into v_thank_you from public.system_config where key='council_election_thank_you_message';
  select * into v_election from public.council_election_config
  where gender=v_gender and candidates_published=true
  order by (opens_at is not null and opens_at<=now() and (closes_at is null or closes_at>now())) desc,academic_year desc limit 1;
  if v_election.id is null then return jsonb_build_object('error','election_not_found','student',jsonb_build_object('full_name',v_student.full_name,'image_url',coalesce(v_student.image_url,v_student.photo_url),'main_room',v_student.main_room)); end if;
  select candidate_id into v_my_vote from public.council_votes where election_config_id=v_election.id and voter_student_id=v_student.id;
  select coalesce(jsonb_agg(jsonb_build_object(
    'id',c.id,'ballot_number',c.ballot_number,'campaign_statement',c.campaign_statement,
    'slogan',c.slogan,'vision',c.vision,'policies',coalesce(c.policies,'[]'::jsonb),'experience',coalesce(c.experience,'[]'::jsonb),
    'gpa_general',a.gpa_general,'gpa_religious',a.gpa_religious,'full_name',s.full_name,
    'image_url',coalesce(s.image_url,s.photo_url),'main_room',s.main_room
  ) order by c.ballot_number),'[]'::jsonb) into v_candidates
  from public.council_candidates c join public.students s on s.id=c.student_id
  left join public.council_applications a on a.id=c.application_id
  where c.election_config_id=v_election.id and c.status='published';
  return jsonb_build_object(
    'student',jsonb_build_object('full_name',v_student.full_name,'image_url',coalesce(v_student.image_url,v_student.photo_url),'main_room',v_student.main_room),
    'election_id',v_election.id,'gender',v_gender,
    'is_open',(v_election.opens_at is not null and v_election.opens_at<=now() and (v_election.closes_at is null or v_election.closes_at>now())),
    'candidates',v_candidates,'already_voted_candidate_id',v_my_vote,'thank_you_message',v_thank_you
  );
end;
$$;

create or replace function public.publish_council_election_results_atomic(p_election_config_id bigint)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
declare
  v_election public.council_election_config%rowtype;
  v_term public.council_terms%rowtype;
  v_position_id bigint;
  v_winner_candidate_id bigint;
  v_winner_student_id integer;
  v_member_id bigint;
  v_member_status text;
begin
  if not public.is_council_staff() then raise exception 'not authorized to publish council election results'; end if;
  select * into v_election from public.council_election_config
  where id=p_election_config_id and closes_at is not null and closes_at<=now() and results_published_at is null for update;
  if not found then raise exception 'election is not eligible for result publication'; end if;
  select * into v_term from public.council_terms where id=v_election.term_id;
  select id into v_position_id from public.council_positions
  where gender=v_election.gender and is_elected=true and is_active=true order by sort_order,id limit 1;
  if v_position_id is null then raise exception 'elected council position is not configured'; end if;
  select c.id,c.student_id into v_winner_candidate_id,v_winner_student_id
  from public.council_candidates c left join public.council_votes v
    on v.candidate_id=c.id and v.election_config_id=v_election.id
  where c.election_config_id=v_election.id and c.status='published'
  group by c.id,c.student_id,c.ballot_number
  order by count(v.id) desc,c.ballot_number asc,c.id asc limit 1;
  if v_winner_student_id is null then raise exception 'no published election candidates found'; end if;
  v_member_status := case when v_term.status='active' then 'active' else 'designate' end;
  select id into v_member_id from public.council_members
  where term_id=v_term.id and student_id=v_winner_student_id and position_id=v_position_id
    and status in ('active','designate') for update;
  if v_member_id is null then
    insert into public.council_members(
      term_id,position_id,student_id,academic_year,source,status,term_start_date,appointment_method
    ) values(
      v_term.id,v_position_id,v_winner_student_id,v_term.academic_year,'elected',v_member_status,
      coalesce(v_term.duty_start_date,current_date),'election'
    ) returning id into v_member_id;
  end if;
  update public.council_candidates set status='elected',updated_at=now() where id=v_winner_candidate_id;
  update public.council_election_config set results_published_at=now(),campaign_enabled=false,updated_at=now() where id=v_election.id;
  return v_member_id;
end;
$$;

revoke all on function public.create_council_term(text,integer,smallint,integer,smallint,integer,date,date) from public, anon;
grant execute on function public.create_council_term(text,integer,smallint,integer,smallint,integer,date,date) to authenticated;
revoke all on function public.preview_council_term_activation(bigint) from public, anon;
grant execute on function public.preview_council_term_activation(bigint) to authenticated;
revoke all on function public.activate_council_term(bigint) from public, anon;
grant execute on function public.activate_council_term(bigint) to authenticated;
revoke all on function public.add_council_member_manual_atomic(bigint,bigint,integer,text,date,integer,text,text,text) from public, anon;
grant execute on function public.add_council_member_manual_atomic(bigint,bigint,integer,text,date,integer,text,text,text) to authenticated;
revoke all on function public.submit_council_application_for_term(bigint,integer,bigint,text,text,numeric,numeric,text,jsonb,bigint) from public, anon;
grant execute on function public.submit_council_application_for_term(bigint,integer,bigint,text,text,numeric,numeric,text,jsonb,bigint) to authenticated;
revoke all on function public.appoint_council_member_atomic(bigint,bigint,integer,integer,integer) from public, anon;
grant execute on function public.appoint_council_member_atomic(bigint,bigint,integer,integer,integer) to authenticated;
revoke all on function public.update_council_candidate_admin(bigint,integer,text) from public, anon;
grant execute on function public.update_council_candidate_admin(bigint,integer,text) to authenticated;
revoke all on function public.get_council_campaign_bundle() from public, anon;
grant execute on function public.get_council_campaign_bundle() to authenticated;
revoke all on function public.promote_council_candidate_atomic(bigint,integer,bigint,text,text) from public, anon;
grant execute on function public.promote_council_candidate_atomic(bigint,integer,bigint,text,text) to authenticated;
revoke all on function public.publish_council_election_results_atomic(bigint) from public, anon;
grant execute on function public.publish_council_election_results_atomic(bigint) to authenticated;
revoke all on function public.cast_public_council_vote(text,bigint) from public;
grant execute on function public.cast_public_council_vote(text,bigint) to anon, authenticated;
revoke all on function public.get_public_council_election_bundle(text) from public;
grant execute on function public.get_public_council_election_bundle(text) to anon, authenticated;
