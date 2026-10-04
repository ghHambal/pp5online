-- Student council teacher integration foundation.
-- This migration is intentionally non-effective: it adds the workflow gates,
-- audit trail, approved duty lookup, and evaluation ledger without publishing
-- a regulation or mutating the existing gradebook.

begin;

alter table public.council_regulation_versions
  drop constraint if exists council_regulation_versions_status_check;

alter table public.council_regulation_versions
  add constraint council_regulation_versions_status_check
  check (status in (
    'draft', 'advisor_review', 'student_affairs_review', 'management_review',
    'pending_approval', 'approved', 'published', 'effective', 'superseded', 'archived'
  ));

alter table public.council_regulation_versions
  add column if not exists is_active boolean not null default false,
  add column if not exists published_at timestamptz,
  add column if not exists published_by_profile_id uuid references public.profiles(id) on delete set null,
  add column if not exists advisor_reviewed_at timestamptz,
  add column if not exists advisor_reviewed_by_profile_id uuid references public.profiles(id) on delete set null,
  add column if not exists advisor_review_comment text,
  add column if not exists student_affairs_reviewed_at timestamptz,
  add column if not exists student_affairs_reviewed_by_profile_id uuid references public.profiles(id) on delete set null,
  add column if not exists student_affairs_review_comment text,
  add column if not exists management_approved_at timestamptz,
  add column if not exists management_approved_by_profile_id uuid references public.profiles(id) on delete set null,
  add column if not exists management_approval_comment text;

create or replace function public.is_council_regulation_reviewer(p_stage text default null)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select
    coalesce(get_user_role(), '') = 'admin'
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_also_admin = true)
    or exists (
      select 1
      from public.teachers t
      where t.profile_id = auth.uid()
        and case coalesce(p_stage, 'advisor')
          when 'advisor' then t.position = 'council_advisor' or 'council_advisor' = any(coalesce(t.positions, '{}'::text[]))
          when 'student_affairs' then t.position in ('student_affairs_head', 'council_affairs_head')
            or coalesce(t.positions, '{}'::text[]) && array['student_affairs_head', 'council_affairs_head']::text[]
          when 'management' then t.position in ('school_director', 'director', 'council_management')
            or coalesce(t.positions, '{}'::text[]) && array['school_director', 'director', 'council_management']::text[]
          else false
        end
    );
$$;

revoke all on function public.is_council_regulation_reviewer(text) from public, anon;
grant execute on function public.is_council_regulation_reviewer(text) to authenticated;

drop policy if exists council_regulation_versions_read on public.council_regulation_versions;
drop policy if exists council_regulation_versions_public_read on public.council_regulation_versions;
drop policy if exists council_regulation_versions_staff_read on public.council_regulation_versions;
create policy council_regulation_versions_public_read
  on public.council_regulation_versions for select to anon, authenticated
  using (status = 'published' and is_active = true and effective_date is not null and effective_date <= current_date);
create policy council_regulation_versions_staff_read
  on public.council_regulation_versions for select to authenticated
  using (status <> 'archived' and (
    public.is_council_regulation_reviewer('advisor')
    or public.is_council_regulation_reviewer('student_affairs')
    or public.is_council_regulation_reviewer('management')
  ));

drop policy if exists council_regulation_sections_read on public.council_regulation_sections;
drop policy if exists council_regulation_sections_public_read on public.council_regulation_sections;
drop policy if exists council_regulation_sections_staff_read on public.council_regulation_sections;
create policy council_regulation_sections_public_read
  on public.council_regulation_sections for select to anon, authenticated
  using (exists (
    select 1 from public.council_regulation_versions v
    where v.id = version_id and v.status = 'published' and v.is_active = true
      and v.effective_date is not null and v.effective_date <= current_date
  ));
create policy council_regulation_sections_staff_read
  on public.council_regulation_sections for select to authenticated
  using (exists (
    select 1 from public.council_regulation_versions v
    where v.id = version_id and v.status <> 'archived'
      and (
        public.is_council_regulation_reviewer('advisor')
        or public.is_council_regulation_reviewer('student_affairs')
        or public.is_council_regulation_reviewer('management')
      )
  ));

drop policy if exists council_regulation_clauses_read on public.council_regulation_clauses;
drop policy if exists council_regulation_clauses_public_read on public.council_regulation_clauses;
drop policy if exists council_regulation_clauses_staff_read on public.council_regulation_clauses;
create policy council_regulation_clauses_public_read
  on public.council_regulation_clauses for select to anon, authenticated
  using (exists (
    select 1 from public.council_regulation_versions v
    where v.id = version_id and v.status = 'published' and v.is_active = true
      and v.effective_date is not null and v.effective_date <= current_date
  ));
create policy council_regulation_clauses_staff_read
  on public.council_regulation_clauses for select to authenticated
  using (exists (
    select 1 from public.council_regulation_versions v
    where v.id = version_id and v.status <> 'archived'
      and (
        public.is_council_regulation_reviewer('advisor')
        or public.is_council_regulation_reviewer('student_affairs')
        or public.is_council_regulation_reviewer('management')
      )
  ));

create or replace function public.submit_council_regulation_for_advisor(p_version_id bigint, p_reason text default null)
returns public.council_regulation_versions
language plpgsql security definer set search_path = public
as $$
declare v_old public.council_regulation_versions%rowtype; v_new public.council_regulation_versions%rowtype;
begin
  if not public.is_council_regulation_reviewer(null) then raise exception 'permission denied'; end if;
  select * into v_old from public.council_regulation_versions where id = p_version_id for update;
  if not found or v_old.status <> 'draft' then raise exception 'only a draft can be submitted'; end if;
  update public.council_regulation_versions set status = 'advisor_review', updated_at = now() where id = p_version_id returning * into v_new;
  insert into public.council_regulation_audit_logs(version_id, actor_profile_id, actor_role, action, before_data, after_data, reason)
  values (p_version_id, auth.uid(), get_user_role(), 'submit_for_advisor_review', to_jsonb(v_old), to_jsonb(v_new), nullif(trim(p_reason), ''));
  return v_new;
end;
$$;

create or replace function public.review_council_regulation_as_advisor(p_version_id bigint, p_approve boolean, p_comment text default null)
returns public.council_regulation_versions
language plpgsql security definer set search_path = public
as $$
declare v_old public.council_regulation_versions%rowtype; v_new public.council_regulation_versions%rowtype;
begin
  if not public.is_council_regulation_reviewer('advisor') then raise exception 'permission denied'; end if;
  select * into v_old from public.council_regulation_versions where id = p_version_id for update;
  if not found or v_old.status <> 'advisor_review' then raise exception 'invalid advisor review state'; end if;
  if not p_approve and nullif(trim(p_comment), '') is null then raise exception 'rejection comment is required'; end if;
  update public.council_regulation_versions set
    status = case when p_approve then 'student_affairs_review' else 'draft' end,
    advisor_reviewed_at = now(), advisor_reviewed_by_profile_id = auth.uid(), advisor_review_comment = nullif(trim(p_comment), ''), updated_at = now()
  where id = p_version_id returning * into v_new;
  insert into public.council_regulation_audit_logs(version_id, actor_profile_id, actor_role, action, before_data, after_data, reason)
  values (p_version_id, auth.uid(), get_user_role(), case when p_approve then 'advisor_approve' else 'advisor_return' end, to_jsonb(v_old), to_jsonb(v_new), nullif(trim(p_comment), ''));
  return v_new;
end;
$$;

create or replace function public.review_council_regulation_as_student_affairs(p_version_id bigint, p_approve boolean, p_comment text default null)
returns public.council_regulation_versions
language plpgsql security definer set search_path = public
as $$
declare v_old public.council_regulation_versions%rowtype; v_new public.council_regulation_versions%rowtype;
begin
  if not public.is_council_regulation_reviewer('student_affairs') then raise exception 'permission denied'; end if;
  select * into v_old from public.council_regulation_versions where id = p_version_id for update;
  if not found or v_old.status <> 'student_affairs_review' then raise exception 'invalid student affairs review state'; end if;
  if not p_approve and nullif(trim(p_comment), '') is null then raise exception 'rejection comment is required'; end if;
  update public.council_regulation_versions set
    status = case when p_approve then 'management_review' else 'draft' end,
    student_affairs_reviewed_at = now(), student_affairs_reviewed_by_profile_id = auth.uid(), student_affairs_review_comment = nullif(trim(p_comment), ''), updated_at = now()
  where id = p_version_id returning * into v_new;
  insert into public.council_regulation_audit_logs(version_id, actor_profile_id, actor_role, action, before_data, after_data, reason)
  values (p_version_id, auth.uid(), get_user_role(), case when p_approve then 'student_affairs_approve' else 'student_affairs_return' end, to_jsonb(v_old), to_jsonb(v_new), nullif(trim(p_comment), ''));
  return v_new;
end;
$$;

create or replace function public.approve_council_regulation_as_management(p_version_id bigint, p_comment text default null)
returns public.council_regulation_versions
language plpgsql security definer set search_path = public
as $$
declare v_old public.council_regulation_versions%rowtype; v_new public.council_regulation_versions%rowtype;
begin
  if not public.is_council_regulation_reviewer('management') then raise exception 'permission denied'; end if;
  select * into v_old from public.council_regulation_versions where id = p_version_id for update;
  if not found or v_old.status <> 'management_review' then raise exception 'invalid management approval state'; end if;
  update public.council_regulation_versions set status = 'approved', management_approved_at = now(), management_approved_by_profile_id = auth.uid(), management_approval_comment = nullif(trim(p_comment), ''), updated_at = now() where id = p_version_id returning * into v_new;
  insert into public.council_regulation_audit_logs(version_id, actor_profile_id, actor_role, action, before_data, after_data, reason)
  values (p_version_id, auth.uid(), get_user_role(), 'management_approve', to_jsonb(v_old), to_jsonb(v_new), nullif(trim(p_comment), ''));
  return v_new;
end;
$$;

create or replace function public.publish_council_regulation(p_version_id bigint, p_effective_date date, p_comment text default null)
returns public.council_regulation_versions
language plpgsql security definer set search_path = public
as $$
declare v_old public.council_regulation_versions%rowtype; v_new public.council_regulation_versions%rowtype;
begin
  if not public.is_council_regulation_reviewer('management') then raise exception 'permission denied'; end if;
  if p_effective_date is null then raise exception 'effective date is required'; end if;
  select * into v_old from public.council_regulation_versions where id = p_version_id for update;
  if not found or v_old.status <> 'approved' then raise exception 'only an approved regulation can be published'; end if;
  update public.council_regulation_versions set status = 'superseded', is_active = false, superseded_by = p_version_id, updated_at = now() where regulation_key = v_old.regulation_key and status = 'published' and is_active = true;
  update public.council_regulation_versions set status = 'published', is_active = true, effective_date = p_effective_date, published_at = now(), published_by_profile_id = auth.uid(), updated_at = now() where id = p_version_id returning * into v_new;
  insert into public.council_regulation_audit_logs(version_id, actor_profile_id, actor_role, action, before_data, after_data, reason)
  values (p_version_id, auth.uid(), get_user_role(), 'publish', to_jsonb(v_old), to_jsonb(v_new), nullif(trim(p_comment), ''));
  return v_new;
end;
$$;

revoke all on function public.submit_council_regulation_for_advisor(bigint, text) from public, anon;
revoke all on function public.review_council_regulation_as_advisor(bigint, boolean, text) from public, anon;
revoke all on function public.review_council_regulation_as_student_affairs(bigint, boolean, text) from public, anon;
revoke all on function public.approve_council_regulation_as_management(bigint, text) from public, anon;
revoke all on function public.publish_council_regulation(bigint, date, text) from public, anon;
grant execute on function public.submit_council_regulation_for_advisor(bigint, text) to authenticated;
grant execute on function public.review_council_regulation_as_advisor(bigint, boolean, text) to authenticated;
grant execute on function public.review_council_regulation_as_student_affairs(bigint, boolean, text) to authenticated;
grant execute on function public.approve_council_regulation_as_management(bigint, text) to authenticated;
grant execute on function public.publish_council_regulation(bigint, date, text) to authenticated;

-- Preserve the existing source draft and create a separate 118-clause working draft.
do $$
declare v_old bigint; v_new bigint;
begin
  select id into v_old from public.council_regulation_versions where regulation_key = 'azizstan_student_council' and version_label = '2569';
  if v_old is not null and not exists (select 1 from public.council_regulation_versions where regulation_key = 'azizstan_student_council' and version_label = '2569-incentive-draft-v2') then
    insert into public.council_regulation_versions (regulation_key, version_label, title, status, implementation_mode, source_document_url, source_revision_id, created_by_profile_id)
    select regulation_key, '2569-incentive-draft-v2', title || ' (ฉบับร่างสิทธิประโยชน์)', 'draft', 'advisory', source_document_url, source_revision_id, created_by_profile_id
    from public.council_regulation_versions where id = v_old returning id into v_new;
    insert into public.council_regulation_sections (version_id, section_no, title, sort_order)
    select v_new, section_no, title, sort_order from public.council_regulation_sections where version_id = v_old;
    insert into public.council_regulation_clauses (version_id, section_id, clause_no, title, body, keywords, sort_order)
    select v_new, ns.id, case when c.clause_no between 109 and 113 then c.clause_no + 5 else c.clause_no end, c.title, c.body, c.keywords, case when c.clause_no between 109 and 113 then c.sort_order + 5 else c.sort_order end
    from public.council_regulation_clauses c
    join public.council_regulation_sections os on os.id = c.section_id
    join public.council_regulation_sections ns on ns.version_id = v_new and ns.section_no = os.section_no
    where c.version_id = v_old;
    insert into public.council_regulation_clauses (version_id, section_id, clause_no, title, body, keywords, sort_order)
    select v_new, s.id, x.clause_no, x.title, x.body, array['หมวด 15'], x.clause_no
    from public.council_regulation_sections s
    cross join (values
      (109, 'หลักการสิทธิประโยชน์', 'สมาชิกสภานักเรียนอาจได้รับคะแนนส่งเสริมด้านผลการเรียน แต่ต้องผ่านทั้งคุณภาพสภานักเรียนและคุณภาพประจำรายวิชา การเป็นสมาชิกสภาเพียงอย่างเดียวไม่ก่อให้เกิดสิทธิอัตโนมัติ'),
      (110, 'คุณภาพสภานักเรียน', 'สมาชิกต้องผ่านครบทุกข้อ ได้แก่ เข้าร่วมประชุม กิจกรรม และภารกิจไม่น้อยกว่าร้อยละ ๘๐ คะแนนความประพฤติไม่ติดลบ เป็นแบบอย่างที่ดี และผ่านการประเมินจากครูที่ปรึกษาสภานักเรียน ผลสุดท้ายให้เป็น PASS หรือ FAIL'),
      (111, 'คุณภาพประจำรายวิชา', 'สมาชิกต้องมีเกรดก่อนเพิ่มคะแนนส่งเสริมไม่น้อยกว่า ๑.๐ และผ่านการประเมินจากครูผู้สอนรายวิชา โดยประเมินความรับผิดชอบต่อการเรียน การเข้าเรียน การส่งงาน การปฏิบัติตามข้อตกลงของรายวิชา และพฤติกรรมการเรียนรู้ตามความเหมาะสม ผลประเมินเป็น PASS หรือ FAIL เท่านั้น'),
      (112, 'ประเมินแยกเป็นรายวิชา', 'การประเมินให้แยกเป็นรายวิชาและเป็นอิสระจากกัน ครูประเมินเฉพาะวิชาที่ตนสอน และไม่มีสิทธิกำหนดจำนวนคะแนนส่งเสริมรายบุคคล'),
      (113, 'จำนวนคะแนนส่งเสริม', 'ผู้บริหารกำหนดจำนวนคะแนนส่งเสริมในแต่ละรอบระหว่าง ๒๐–๔๐ คะแนน ทุกคนที่ผ่านในรอบเดียวกันได้รับคะแนนเท่ากัน และคะแนนรวมหลังเพิ่มต้องไม่เกิน ๑๐๐')
    ) as x(clause_no, title, body)
    where s.version_id = v_new and s.section_no = 15;
  end if;
end;
$$;

-- Approved council duties are represented by the existing activity entity.
alter table public.council_activities
  add column if not exists activity_type text not null default 'activity',
  add column if not exists event_start timestamptz,
  add column if not exists event_end timestamptz,
  add column if not exists approval_status text not null default 'draft',
  add column if not exists required_student_ids integer[] not null default '{}',
  add column if not exists approved_at timestamptz,
  add column if not exists approved_by_profile_id uuid references public.profiles(id) on delete set null;

alter table public.council_activities drop constraint if exists council_activities_activity_type_check;
alter table public.council_activities add constraint council_activities_activity_type_check check (activity_type in ('meeting', 'activity', 'task', 'urgent'));
alter table public.council_activities drop constraint if exists council_activities_approval_status_check;
alter table public.council_activities add constraint council_activities_approval_status_check check (approval_status in ('draft', 'pending_approval', 'approved', 'rejected', 'cancelled'));
create index if not exists council_activities_approved_time_idx on public.council_activities (approval_status, event_start, event_end);
create index if not exists council_activities_required_students_gin_idx on public.council_activities using gin (required_student_ids);

create or replace function public.get_teacher_council_duties(p_class_id integer, p_session_date date, p_period_no integer)
returns table(student_id integer, activity_id bigint, activity_type text, title text, detail text, event_start timestamptz, event_end timestamptz)
language plpgsql security definer set search_path = public
as $$
declare v_teacher_id integer; v_class_start timestamptz; v_class_end timestamptz;
begin
  if auth.uid() is null then raise exception 'authentication required'; end if;
  select t.id into v_teacher_id from public.teachers t where t.profile_id = auth.uid();
  if not (get_user_role() = 'admin' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_also_admin = true))
     and not exists (select 1 from public.classes c join public.master_subjects ms on ms.id = c.course_id where c.id = p_class_id and ms.teacher_id = v_teacher_id) then
    raise exception 'teacher is not assigned to this class';
  end if;
  select (p_session_date + sp.start_time) at time zone 'Asia/Bangkok', (p_session_date + sp.end_time) at time zone 'Asia/Bangkok'
    into v_class_start, v_class_end
  from public.school_periods sp where sp.period_no = p_period_no and sp.day_type = 'regular' limit 1;
  if v_class_start is null or v_class_end is null then return; end if;
  return query
  select cs.student_id, a.id, a.activity_type, a.title, a.detail, a.event_start, a.event_end
  from public.class_students cs
  join public.council_activities a on a.required_student_ids @> array[cs.student_id]
  where cs.class_id = p_class_id
    and a.approval_status = 'approved'
    and a.status <> 'cancelled'
    and a.event_start is not null and a.event_end is not null
    and a.event_start < v_class_end and a.event_end > v_class_start
    and exists (select 1 from public.council_members cm where cm.student_id = cs.student_id and cm.status = 'active' and (cm.term_start_date is null or cm.term_start_date <= p_session_date) and (cm.term_end_date is null or cm.term_end_date >= p_session_date));
end;
$$;

revoke all on function public.get_teacher_council_duties(integer, date, integer) from public, anon;
grant execute on function public.get_teacher_council_duties(integer, date, integer) to authenticated;

create or replace function public.get_teacher_council_duties_for_sessions(p_class_id integer, p_sessions jsonb)
returns table(student_id integer, activity_id bigint, activity_type text, title text, detail text, event_start timestamptz, event_end timestamptz, session_date date, period_no integer)
language plpgsql security definer set search_path = public
as $$
declare v_teacher_id integer;
begin
  if auth.uid() is null then raise exception 'authentication required'; end if;
  select t.id into v_teacher_id from public.teachers t where t.profile_id = auth.uid();
  if not (get_user_role() = 'admin' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_also_admin = true))
     and not exists (select 1 from public.classes c join public.master_subjects ms on ms.id = c.course_id where c.id = p_class_id and ms.teacher_id = v_teacher_id) then
    raise exception 'teacher is not assigned to this class';
  end if;
  return query
  select cs.student_id, a.id, a.activity_type, a.title, a.detail, a.event_start, a.event_end, req.session_date, req.period_no
  from jsonb_to_recordset(coalesce(p_sessions, '[]'::jsonb)) as req(session_date date, period_no integer)
  join public.school_periods sp on sp.period_no = req.period_no and sp.day_type = 'regular'
  join public.class_students cs on cs.class_id = p_class_id
  join public.council_activities a on a.required_student_ids @> array[cs.student_id]
  where a.approval_status = 'approved' and a.status <> 'cancelled'
    and a.event_start is not null and a.event_end is not null
    and a.event_start < ((req.session_date + sp.end_time) at time zone 'Asia/Bangkok')
    and a.event_end > ((req.session_date + sp.start_time) at time zone 'Asia/Bangkok')
    and exists (select 1 from public.council_members cm where cm.student_id = cs.student_id and cm.status = 'active' and (cm.term_start_date is null or cm.term_start_date <= req.session_date) and (cm.term_end_date is null or cm.term_end_date >= req.session_date));
end;
$$;

revoke all on function public.get_teacher_council_duties_for_sessions(integer, jsonb) from public, anon;
grant execute on function public.get_teacher_council_duties_for_sessions(integer, jsonb) to authenticated;

create table if not exists public.council_member_quality_evaluations (
  id bigint generated always as identity primary key,
  term_id bigint not null references public.academic_terms(id) on delete restrict,
  evaluation_round_id text not null,
  membership_id bigint not null references public.council_members(id) on delete restrict,
  student_id integer not null references public.students(id) on delete restrict,
  attendance_rate numeric(5,2) not null check (attendance_rate between 0 and 100),
  behavior_score numeric not null,
  good_role_model boolean not null,
  council_performance_result text not null check (council_performance_result in ('pass', 'fail')),
  final_status text not null check (final_status in ('pass', 'fail')),
  reviewer_comment text,
  reviewed_by_profile_id uuid references public.profiles(id) on delete set null,
  evaluated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (term_id, evaluation_round_id, membership_id)
);

create table if not exists public.council_academic_incentive_configs (
  id bigint generated always as identity primary key,
  term_id bigint not null references public.academic_terms(id) on delete restrict,
  evaluation_round_id text not null,
  regulation_version_id bigint references public.council_regulation_versions(id) on delete restrict,
  feature_enabled boolean not null default false,
  teacher_evaluation_enabled boolean not null default false,
  evaluation_open_at timestamptz,
  evaluation_close_at timestamptz,
  incentive_points numeric(5,2) check (incentive_points between 20 and 40),
  status text not null default 'draft' check (status in ('draft', 'final', 'closed', 'archived')),
  created_by_profile_id uuid references public.profiles(id) on delete set null,
  approved_by_profile_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (term_id, evaluation_round_id)
);

create table if not exists public.council_subject_quality_evaluations (
  id bigint generated always as identity primary key,
  term_id bigint not null references public.academic_terms(id) on delete restrict,
  evaluation_round_id text not null,
  student_id integer not null references public.students(id) on delete restrict,
  subject_id integer not null references public.master_subjects(id) on delete restrict,
  class_id integer not null references public.classes(id) on delete restrict,
  teacher_profile_id uuid not null references public.profiles(id) on delete restrict,
  membership_id bigint not null references public.council_members(id) on delete restrict,
  pre_incentive_total_score numeric,
  pre_incentive_grade numeric(5,2) not null,
  grade_threshold_pass boolean not null,
  teacher_result text not null check (teacher_result in ('pass', 'fail')),
  teacher_comment text,
  council_quality_status_snapshot text not null check (council_quality_status_snapshot in ('pass', 'fail', 'pending')),
  final_subject_quality_pass boolean not null,
  final_incentive_eligible boolean not null,
  regulation_version_id bigint references public.council_regulation_versions(id) on delete set null,
  evaluated_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (term_id, evaluation_round_id, student_id, subject_id, class_id)
);

create table if not exists public.council_academic_incentive_awards (
  id bigint generated always as identity primary key,
  config_id bigint not null references public.council_academic_incentive_configs(id) on delete restrict,
  evaluation_id bigint not null references public.council_subject_quality_evaluations(id) on delete restrict,
  student_id integer not null references public.students(id) on delete restrict,
  subject_id integer not null references public.master_subjects(id) on delete restrict,
  class_id integer not null references public.classes(id) on delete restrict,
  pre_incentive_score numeric not null,
  incentive_points numeric(5,2) not null check (incentive_points between 20 and 40),
  final_score numeric not null check (final_score between 0 and 100),
  source text not null default 'council_academic_incentive',
  created_by_profile_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (config_id, evaluation_id)
);

create table if not exists public.council_academic_audit_logs (
  id bigint generated always as identity primary key,
  actor_profile_id uuid references public.profiles(id) on delete set null,
  action text not null,
  config_id bigint references public.council_academic_incentive_configs(id) on delete set null,
  evaluation_id bigint references public.council_subject_quality_evaluations(id) on delete set null,
  student_id integer references public.students(id) on delete set null,
  class_id integer references public.classes(id) on delete set null,
  subject_id integer references public.master_subjects(id) on delete set null,
  before_data jsonb,
  after_data jsonb,
  reason text,
  created_at timestamptz not null default now()
);

create or replace function public.approve_council_activity_duty(
  p_activity_id bigint, p_activity_type text, p_event_start timestamptz, p_event_end timestamptz,
  p_required_student_ids integer[]
)
returns public.council_activities
language plpgsql security definer set search_path = public
as $$
declare v_row public.council_activities%rowtype;
begin
  if not public.is_council_staff() then raise exception 'permission denied'; end if;
  if p_activity_type not in ('meeting', 'activity', 'task', 'urgent') then raise exception 'invalid activity type'; end if;
  if p_event_start is null or p_event_end is null or p_event_end <= p_event_start then raise exception 'valid event time range is required'; end if;
  if coalesce(array_length(p_required_student_ids, 1), 0) = 0 then raise exception 'required participants are required'; end if;
  update public.council_activities set activity_type = p_activity_type, event_start = p_event_start, event_end = p_event_end, required_student_ids = p_required_student_ids, approval_status = 'approved', approved_at = now(), approved_by_profile_id = auth.uid(), updated_at = now() where id = p_activity_id returning * into v_row;
  if not found then raise exception 'activity not found'; end if;
  insert into public.council_academic_audit_logs(actor_profile_id, action, after_data, reason) values (auth.uid(), 'approve_council_activity_duty', to_jsonb(v_row), 'approved duty source for attendance overlap display');
  return v_row;
end;
$$;

alter table public.council_member_quality_evaluations enable row level security;
alter table public.council_academic_incentive_configs enable row level security;
alter table public.council_subject_quality_evaluations enable row level security;
alter table public.council_academic_incentive_awards enable row level security;
alter table public.council_academic_audit_logs enable row level security;

drop policy if exists council_member_quality_staff_read on public.council_member_quality_evaluations;
create policy council_member_quality_staff_read on public.council_member_quality_evaluations for select to authenticated using (public.is_council_staff());
drop policy if exists council_incentive_config_management_read on public.council_academic_incentive_configs;
create policy council_incentive_config_management_read on public.council_academic_incentive_configs for select to authenticated using (public.is_council_regulation_reviewer('management'));
drop policy if exists council_subject_quality_teacher_read on public.council_subject_quality_evaluations;
create policy council_subject_quality_teacher_read on public.council_subject_quality_evaluations for select to authenticated using (teacher_profile_id = auth.uid() or public.is_council_regulation_reviewer(null));
drop policy if exists council_incentive_awards_management_read on public.council_academic_incentive_awards;
create policy council_incentive_awards_management_read on public.council_academic_incentive_awards for select to authenticated using (public.is_council_regulation_reviewer('management'));
drop policy if exists council_academic_audit_management_read on public.council_academic_audit_logs;
create policy council_academic_audit_management_read on public.council_academic_audit_logs for select to authenticated using (public.is_council_regulation_reviewer('management'));

create index if not exists council_subject_quality_teacher_class_idx on public.council_subject_quality_evaluations (teacher_profile_id, class_id, term_id, evaluation_round_id);
create index if not exists council_subject_quality_student_idx on public.council_subject_quality_evaluations (student_id, term_id, evaluation_round_id);
create index if not exists council_member_quality_lookup_idx on public.council_member_quality_evaluations (membership_id, term_id, evaluation_round_id);

create or replace function public.review_council_member_quality(
  p_term_id bigint, p_evaluation_round_id text, p_membership_id bigint, p_attendance_rate numeric,
  p_behavior_score numeric, p_good_role_model boolean, p_council_performance_result text, p_comment text default null
)
returns public.council_member_quality_evaluations
language plpgsql security definer set search_path = public
as $$
declare v_member public.council_members%rowtype; v_row public.council_member_quality_evaluations%rowtype; v_status text;
begin
  if not public.is_council_staff() then raise exception 'permission denied'; end if;
  if p_attendance_rate is null or p_attendance_rate < 0 or p_attendance_rate > 100 then raise exception 'attendance rate must be between 0 and 100'; end if;
  if p_behavior_score is null or p_behavior_score < 0 then raise exception 'behavior score must not be negative'; end if;
  if p_council_performance_result not in ('pass', 'fail') then raise exception 'invalid council performance result'; end if;
  select * into v_member from public.council_members where id = p_membership_id and status = 'active';
  if not found then raise exception 'active council membership not found'; end if;
  v_status := case when p_attendance_rate >= 80 and p_behavior_score >= 0 and p_good_role_model and p_council_performance_result = 'pass' then 'pass' else 'fail' end;
  insert into public.council_member_quality_evaluations(term_id, evaluation_round_id, membership_id, student_id, attendance_rate, behavior_score, good_role_model, council_performance_result, final_status, reviewer_comment, reviewed_by_profile_id)
  values (p_term_id, trim(p_evaluation_round_id), p_membership_id, v_member.student_id, p_attendance_rate, p_behavior_score, p_good_role_model, p_council_performance_result, v_status, nullif(trim(p_comment), ''), auth.uid())
  on conflict (term_id, evaluation_round_id, membership_id) do update set attendance_rate = excluded.attendance_rate, behavior_score = excluded.behavior_score, good_role_model = excluded.good_role_model, council_performance_result = excluded.council_performance_result, final_status = excluded.final_status, reviewer_comment = excluded.reviewer_comment, reviewed_by_profile_id = excluded.reviewed_by_profile_id, evaluated_at = now(), updated_at = now()
  returning * into v_row;
  insert into public.council_academic_audit_logs(actor_profile_id, action, student_id, after_data, reason) values (auth.uid(), 'review_council_quality', v_row.student_id, to_jsonb(v_row), nullif(trim(p_comment), ''));
  return v_row;
end;
$$;

create or replace function public.upsert_council_academic_incentive_config(
  p_config_id bigint, p_term_id bigint, p_evaluation_round_id text, p_regulation_version_id bigint,
  p_feature_enabled boolean, p_teacher_evaluation_enabled boolean, p_evaluation_open_at timestamptz,
  p_evaluation_close_at timestamptz, p_incentive_points numeric, p_status text default 'draft'
)
returns public.council_academic_incentive_configs
language plpgsql security definer set search_path = public
as $$
declare v_row public.council_academic_incentive_configs%rowtype;
begin
  if not public.is_council_regulation_reviewer('management') then raise exception 'permission denied'; end if;
  if p_status not in ('draft', 'final', 'closed', 'archived') then raise exception 'invalid config status'; end if;
  if p_incentive_points is not null and (p_incentive_points < 20 or p_incentive_points > 40) then raise exception 'incentive points must be between 20 and 40'; end if;
  if p_status = 'final' and p_incentive_points is null then raise exception 'final config requires incentive points'; end if;
  if p_status = 'final' and (p_regulation_version_id is null or not exists (select 1 from public.council_regulation_versions v where v.id = p_regulation_version_id and v.status = 'published' and v.is_active and v.effective_date <= current_date)) then raise exception 'published effective regulation is required'; end if;
  if p_config_id is null then
    insert into public.council_academic_incentive_configs(term_id, evaluation_round_id, regulation_version_id, feature_enabled, teacher_evaluation_enabled, evaluation_open_at, evaluation_close_at, incentive_points, status, created_by_profile_id, approved_by_profile_id)
    values (p_term_id, trim(p_evaluation_round_id), p_regulation_version_id, coalesce(p_feature_enabled, false), coalesce(p_teacher_evaluation_enabled, false), p_evaluation_open_at, p_evaluation_close_at, p_incentive_points, p_status, auth.uid(), case when p_status = 'final' then auth.uid() else null end)
    on conflict (term_id, evaluation_round_id) do update set regulation_version_id = excluded.regulation_version_id, feature_enabled = excluded.feature_enabled, teacher_evaluation_enabled = excluded.teacher_evaluation_enabled, evaluation_open_at = excluded.evaluation_open_at, evaluation_close_at = excluded.evaluation_close_at, incentive_points = excluded.incentive_points, status = excluded.status, approved_by_profile_id = excluded.approved_by_profile_id, updated_at = now()
    returning * into v_row;
  else
    update public.council_academic_incentive_configs set
      term_id = p_term_id, evaluation_round_id = trim(p_evaluation_round_id), regulation_version_id = p_regulation_version_id,
      feature_enabled = coalesce(p_feature_enabled, false), teacher_evaluation_enabled = coalesce(p_teacher_evaluation_enabled, false),
      evaluation_open_at = p_evaluation_open_at, evaluation_close_at = p_evaluation_close_at, incentive_points = p_incentive_points,
      status = p_status, approved_by_profile_id = case when p_status = 'final' then auth.uid() else null end, updated_at = now()
    where id = p_config_id returning * into v_row;
    if not found then raise exception 'incentive config not found'; end if;
  end if;
  insert into public.council_academic_audit_logs(actor_profile_id, action, config_id, after_data) values (auth.uid(), 'upsert_incentive_config', v_row.id, to_jsonb(v_row));
  return v_row;
end;
$$;

create or replace function public.get_council_teacher_evaluation_context(p_class_id integer, p_student_ids integer[], p_term_id bigint, p_evaluation_round_id text)
returns table(student_id integer, membership_id bigint, council_quality_status text, teacher_result text, teacher_comment text, pre_incentive_total_score numeric, pre_incentive_grade numeric, final_subject_quality_pass boolean, final_incentive_eligible boolean, regulation_gate_open boolean, feature_enabled boolean, teacher_evaluation_enabled boolean, evaluation_window_open boolean, can_evaluate boolean)
language plpgsql security definer set search_path = public
as $$
declare v_teacher_id integer; v_subject_id integer; v_config public.council_academic_incentive_configs%rowtype; v_gate boolean := false; v_window boolean := false;
begin
  select t.id into v_teacher_id from public.teachers t where t.profile_id = auth.uid();
  select c.course_id into v_subject_id from public.classes c where c.id = p_class_id;
  if not (get_user_role() = 'admin' or exists (select 1 from public.profiles p where p.id = auth.uid() and p.is_also_admin)) and not exists (select 1 from public.master_subjects ms where ms.id = v_subject_id and ms.teacher_id = v_teacher_id) then raise exception 'teacher is not assigned to this class'; end if;
  select * into v_config from public.council_academic_incentive_configs where term_id = p_term_id and evaluation_round_id = trim(p_evaluation_round_id) order by updated_at desc limit 1;
  if v_config.id is not null then
    v_gate := exists (select 1 from public.council_regulation_versions v where v.id = v_config.regulation_version_id and v.status = 'published' and v.is_active and v.effective_date <= current_date);
    v_window := now() >= coalesce(v_config.evaluation_open_at, '-infinity'::timestamptz) and now() <= coalesce(v_config.evaluation_close_at, 'infinity'::timestamptz);
  end if;
  return query
  select cs.student_id, cm.id, coalesce(cq.final_status, 'pending'), se.teacher_result, se.teacher_comment, se.pre_incentive_total_score, se.pre_incentive_grade, se.final_subject_quality_pass, se.final_incentive_eligible, v_gate, coalesce(v_config.feature_enabled, false), coalesce(v_config.teacher_evaluation_enabled, false), v_window, v_gate and coalesce(v_config.feature_enabled, false) and coalesce(v_config.teacher_evaluation_enabled, false) and v_window
  from public.class_students cs
  left join public.council_members cm on cm.student_id = cs.student_id and cm.status = 'active'
  left join public.council_member_quality_evaluations cq on cq.membership_id = cm.id and cq.term_id = p_term_id and cq.evaluation_round_id = trim(p_evaluation_round_id)
  left join public.council_subject_quality_evaluations se on se.class_id = p_class_id and se.student_id = cs.student_id and se.subject_id = v_subject_id and se.term_id = p_term_id and se.evaluation_round_id = trim(p_evaluation_round_id)
  where cs.class_id = p_class_id and (p_student_ids is null or cs.student_id = any(p_student_ids));
end;
$$;

create or replace function public.save_council_subject_quality_evaluation(
  p_term_id bigint, p_evaluation_round_id text, p_student_id integer, p_class_id integer, p_membership_id bigint,
  p_pre_incentive_total_score numeric, p_pre_incentive_grade numeric, p_teacher_result text, p_teacher_comment text default null
)
returns public.council_subject_quality_evaluations
language plpgsql security definer set search_path = public
as $$
declare v_teacher_id integer; v_subject_id integer; v_config public.council_academic_incentive_configs%rowtype; v_membership public.council_members%rowtype; v_quality text; v_row public.council_subject_quality_evaluations%rowtype;
begin
  select t.id into v_teacher_id from public.teachers t where t.profile_id = auth.uid();
  select c.course_id into v_subject_id from public.classes c where c.id = p_class_id;
  if v_teacher_id is null or not exists (select 1 from public.master_subjects ms where ms.id = v_subject_id and ms.teacher_id = v_teacher_id) then raise exception 'teacher is not assigned to this class'; end if;
  if p_teacher_result not in ('pass', 'fail') then raise exception 'teacher result must be pass or fail'; end if;
  if p_teacher_result = 'fail' and nullif(trim(p_teacher_comment), '') is null then raise exception 'fail comment is required'; end if;
  select * into v_config from public.council_academic_incentive_configs where term_id = p_term_id and evaluation_round_id = trim(p_evaluation_round_id) order by updated_at desc limit 1;
  if v_config.id is null or not v_config.feature_enabled or not v_config.teacher_evaluation_enabled then raise exception 'subject quality feature is disabled'; end if;
  if not exists (select 1 from public.council_regulation_versions v where v.id = v_config.regulation_version_id and v.status = 'published' and v.is_active and v.effective_date <= current_date) then raise exception 'published effective regulation is required'; end if;
  if now() < coalesce(v_config.evaluation_open_at, '-infinity'::timestamptz) or now() > coalesce(v_config.evaluation_close_at, 'infinity'::timestamptz) then raise exception 'evaluation window is closed'; end if;
  select * into v_membership from public.council_members where id = p_membership_id and student_id = p_student_id and status = 'active';
  if not found then raise exception 'active council membership not found'; end if;
  select coalesce(cq.final_status, 'pending') into v_quality from public.council_member_quality_evaluations cq where cq.membership_id = p_membership_id and cq.term_id = p_term_id and cq.evaluation_round_id = trim(p_evaluation_round_id);
  insert into public.council_subject_quality_evaluations(term_id, evaluation_round_id, student_id, subject_id, class_id, teacher_profile_id, membership_id, pre_incentive_total_score, pre_incentive_grade, grade_threshold_pass, teacher_result, teacher_comment, council_quality_status_snapshot, final_subject_quality_pass, final_incentive_eligible, regulation_version_id)
  values (p_term_id, trim(p_evaluation_round_id), p_student_id, v_subject_id, p_class_id, auth.uid(), p_membership_id, p_pre_incentive_total_score, p_pre_incentive_grade, p_pre_incentive_grade >= 1.0, p_teacher_result, nullif(trim(p_teacher_comment), ''), coalesce(v_quality, 'pending'), p_pre_incentive_grade >= 1.0 and p_teacher_result = 'pass', coalesce(v_quality, 'pending') = 'pass' and p_pre_incentive_grade >= 1.0 and p_teacher_result = 'pass', v_config.regulation_version_id)
  on conflict (term_id, evaluation_round_id, student_id, subject_id, class_id) do update set pre_incentive_total_score = excluded.pre_incentive_total_score, pre_incentive_grade = excluded.pre_incentive_grade, grade_threshold_pass = excluded.grade_threshold_pass, teacher_result = excluded.teacher_result, teacher_comment = excluded.teacher_comment, council_quality_status_snapshot = excluded.council_quality_status_snapshot, final_subject_quality_pass = excluded.final_subject_quality_pass, final_incentive_eligible = excluded.final_incentive_eligible, regulation_version_id = excluded.regulation_version_id, evaluated_at = now(), updated_at = now()
  returning * into v_row;
  insert into public.council_academic_audit_logs(actor_profile_id, action, evaluation_id, student_id, class_id, subject_id, after_data) values (auth.uid(), 'save_subject_quality_evaluation', v_row.id, v_row.student_id, v_row.class_id, v_row.subject_id, to_jsonb(v_row));
  return v_row;
end;
$$;

create or replace function public.materialize_council_academic_incentive_awards(p_config_id bigint)
returns integer
language plpgsql security definer set search_path = public
as $$
declare v_config public.council_academic_incentive_configs%rowtype; v_count integer;
begin
  if not public.is_council_regulation_reviewer('management') then raise exception 'permission denied'; end if;
  select * into v_config from public.council_academic_incentive_configs where id = p_config_id for update;
  if not found or v_config.status <> 'final' or v_config.incentive_points is null then raise exception 'final config with incentive points is required'; end if;
  if not exists (select 1 from public.council_regulation_versions v where v.id = v_config.regulation_version_id and v.status = 'published' and v.is_active and v.effective_date <= current_date) then raise exception 'published effective regulation is required'; end if;
  insert into public.council_academic_incentive_awards(config_id, evaluation_id, student_id, subject_id, class_id, pre_incentive_score, incentive_points, final_score, created_by_profile_id)
  select p_config_id, e.id, e.student_id, e.subject_id, e.class_id, coalesce(e.pre_incentive_total_score, 0), v_config.incentive_points, least(100, coalesce(e.pre_incentive_total_score, 0) + v_config.incentive_points), auth.uid()
  from public.council_subject_quality_evaluations e
  where e.term_id = v_config.term_id and e.evaluation_round_id = v_config.evaluation_round_id and e.final_incentive_eligible
  on conflict (config_id, evaluation_id) do nothing;
  get diagnostics v_count = row_count;
  insert into public.council_academic_audit_logs(actor_profile_id, action, config_id, after_data) values (auth.uid(), 'materialize_incentive_awards', p_config_id, jsonb_build_object('count', v_count, 'source', 'council_academic_incentive'));
  return v_count;
end;
$$;

revoke all on function public.review_council_member_quality(bigint, text, bigint, numeric, numeric, boolean, text, text) from public, anon;
revoke all on function public.approve_council_activity_duty(bigint, text, timestamptz, timestamptz, integer[]) from public, anon;
revoke all on function public.upsert_council_academic_incentive_config(bigint, bigint, text, bigint, boolean, boolean, timestamptz, timestamptz, numeric, text) from public, anon;
revoke all on function public.get_council_teacher_evaluation_context(integer, integer[], bigint, text) from public, anon;
revoke all on function public.save_council_subject_quality_evaluation(bigint, text, integer, integer, bigint, numeric, numeric, text, text) from public, anon;
revoke all on function public.materialize_council_academic_incentive_awards(bigint) from public, anon;
grant execute on function public.review_council_member_quality(bigint, text, bigint, numeric, numeric, boolean, text, text) to authenticated;
grant execute on function public.approve_council_activity_duty(bigint, text, timestamptz, timestamptz, integer[]) to authenticated;
grant execute on function public.upsert_council_academic_incentive_config(bigint, bigint, text, bigint, boolean, boolean, timestamptz, timestamptz, numeric, text) to authenticated;
grant execute on function public.get_council_teacher_evaluation_context(integer, integer[], bigint, text) to authenticated;
grant execute on function public.save_council_subject_quality_evaluation(bigint, text, integer, integer, bigint, numeric, numeric, text, text) to authenticated;
grant execute on function public.materialize_council_academic_incentive_awards(bigint) to authenticated;

commit;
