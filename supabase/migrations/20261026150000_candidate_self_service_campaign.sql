-- Candidate owned campaign board drafts, moderated publication, and short video storage.
alter table public.council_candidates add column if not exists campaign_video_url text;

create table if not exists public.council_candidate_campaign_drafts (
  id bigint generated always as identity primary key,
  candidate_id bigint not null unique references public.council_candidates(id) on delete cascade,
  slogan text not null default '' check (char_length(slogan) <= 160),
  vision text not null default '' check (char_length(vision) <= 800),
  policies jsonb not null default '[]'::jsonb check (jsonb_typeof(policies) = 'array'),
  experience jsonb not null default '[]'::jsonb check (jsonb_typeof(experience) = 'array'),
  campaign_video_url text,
  status text not null default 'draft' check (status in ('draft', 'submitted', 'approved', 'changes_requested')),
  review_comment text,
  reviewed_by_profile_id uuid references public.profiles(id) on delete set null,
  reviewed_at timestamptz,
  submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.council_candidate_campaign_drafts enable row level security;
revoke all on public.council_candidate_campaign_drafts from anon, authenticated;

create or replace function public.get_my_council_campaign()
returns jsonb language plpgsql stable security definer set search_path = '' as $$
declare v_result jsonb;
begin
  select jsonb_build_object(
    'candidate_id', c.id, 'election_config_id', c.election_config_id,
    'student_id', c.student_id, 'ballot_number', c.ballot_number,
    'candidate_status', c.status, 'full_name', s.full_name,
    'slogan', coalesce(d.slogan, c.slogan, ''), 'vision', coalesce(d.vision, c.vision, ''),
    'policies', coalesce(d.policies, c.policies, '[]'::jsonb),
    'experience', coalesce(d.experience, c.experience, '[]'::jsonb),
    'campaign_video_url', coalesce(d.campaign_video_url, c.campaign_video_url),
    'review_status', coalesce(d.status, 'draft'), 'review_comment', d.review_comment,
    'updated_at', d.updated_at
  ) into v_result
  from public.students s join public.council_candidates c on c.student_id = s.id
  left join public.council_candidate_campaign_drafts d on d.candidate_id = c.id
  where s.profile_id = (select auth.uid()) and c.status in ('draft', 'published')
  order by c.created_at desc limit 1;
  return v_result;
end;
$$;
revoke all on function public.get_my_council_campaign() from public, anon;
grant execute on function public.get_my_council_campaign() to authenticated;

create or replace function public.save_my_council_campaign(
  p_slogan text, p_vision text, p_policies jsonb, p_experience jsonb,
  p_campaign_video_url text, p_submit boolean default false
)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare v_candidate public.council_candidates%rowtype; v_status text;
begin
  select c.* into v_candidate from public.council_candidates c
  join public.students s on s.id = c.student_id
  where s.profile_id = (select auth.uid()) and c.status in ('draft', 'published')
  order by c.created_at desc limit 1;
  if not found then raise exception 'ไม่พบสิทธิ์จัดการบอร์ดผู้สมัคร'; end if;
  if char_length(coalesce(p_slogan, '')) > 160 or char_length(coalesce(p_vision, '')) > 800 then
    raise exception 'ข้อความยาวเกินกำหนด';
  end if;
  if nullif(trim(p_campaign_video_url), '') is not null
    and trim(p_campaign_video_url) !~ '^https://[^/]+/storage/v1/object/public/council-campaign-videos/[0-9a-f-]+/[0-9]+/' then
    raise exception 'วิดีโอต้องอัปโหลดผ่านระบบก่อน';
  end if;
  if jsonb_typeof(coalesce(p_policies, '[]'::jsonb)) <> 'array'
    or jsonb_array_length(coalesce(p_policies, '[]'::jsonb)) > 12
    or jsonb_typeof(coalesce(p_experience, '[]'::jsonb)) <> 'array'
    or jsonb_array_length(coalesce(p_experience, '[]'::jsonb)) > 12 then
    raise exception 'รูปแบบนโยบายหรือผลงานไม่ถูกต้อง';
  end if;
  v_status := case when coalesce(p_submit, false) then 'submitted' else 'draft' end;
  insert into public.council_candidate_campaign_drafts (
    candidate_id, slogan, vision, policies, experience, campaign_video_url,
    status, review_comment, reviewed_by_profile_id, reviewed_at, submitted_at, updated_at
  ) values (
    v_candidate.id, coalesce(p_slogan, ''), coalesce(p_vision, ''),
    coalesce(p_policies, '[]'::jsonb), coalesce(p_experience, '[]'::jsonb),
    nullif(trim(p_campaign_video_url), ''), v_status, null, null, null,
    case when coalesce(p_submit, false) then now() else null end, now()
  ) on conflict (candidate_id) do update set
    slogan = excluded.slogan, vision = excluded.vision, policies = excluded.policies,
    experience = excluded.experience, campaign_video_url = excluded.campaign_video_url,
    status = excluded.status, review_comment = null, reviewed_by_profile_id = null,
    reviewed_at = null, submitted_at = case when excluded.status = 'submitted' then now() else null end,
    updated_at = now();
  return jsonb_build_object('ok', true, 'status', v_status);
end;
$$;
revoke all on function public.save_my_council_campaign(text, text, jsonb, jsonb, text, boolean) from public, anon;
grant execute on function public.save_my_council_campaign(text, text, jsonb, jsonb, text, boolean) to authenticated;

create or replace function public.get_council_campaign_reviews(p_election_config_id bigint)
returns table (
  candidate_id bigint, student_id integer, full_name text, ballot_number integer,
  slogan text, vision text, policies jsonb, experience jsonb, campaign_video_url text,
  status text, review_comment text, submitted_at timestamptz
)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.is_council_staff() then raise exception 'not authorized'; end if;
  return query select c.id, c.student_id, s.full_name::text, c.ballot_number::integer,
    d.slogan, d.vision, d.policies, d.experience, d.campaign_video_url,
    d.status, d.review_comment, d.submitted_at
  from public.council_candidate_campaign_drafts d
  join public.council_candidates c on c.id = d.candidate_id
  join public.students s on s.id = c.student_id
  where c.election_config_id = p_election_config_id and d.status = 'submitted'
  order by d.submitted_at, c.ballot_number;
end;
$$;
revoke all on function public.get_council_campaign_reviews(bigint) from public, anon;
grant execute on function public.get_council_campaign_reviews(bigint) to authenticated;

create or replace function public.review_council_campaign(p_candidate_id bigint, p_approve boolean, p_comment text default null)
returns void language plpgsql security definer set search_path = '' as $$
declare v_draft public.council_candidate_campaign_drafts%rowtype;
begin
  if not public.is_council_staff() then raise exception 'not authorized'; end if;
  select * into v_draft from public.council_candidate_campaign_drafts
  where candidate_id = p_candidate_id and status = 'submitted' for update;
  if not found then raise exception 'ไม่พบรายการที่รอตรวจ'; end if;
  if coalesce(p_approve, false) then
    update public.council_candidates set slogan = v_draft.slogan, vision = v_draft.vision,
      policies = v_draft.policies, experience = v_draft.experience,
      campaign_video_url = v_draft.campaign_video_url, updated_at = now()
    where id = p_candidate_id;
  end if;
  update public.council_candidate_campaign_drafts set
    status = case when coalesce(p_approve, false) then 'approved' else 'changes_requested' end,
    review_comment = nullif(trim(p_comment), ''), reviewed_by_profile_id = (select auth.uid()),
    reviewed_at = now(), updated_at = now()
  where candidate_id = p_candidate_id;
end;
$$;
revoke all on function public.review_council_campaign(bigint, boolean, text) from public, anon;
grant execute on function public.review_council_campaign(bigint, boolean, text) to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('council-campaign-videos', 'council-campaign-videos', true, 52428800,
  array['video/webm','video/mp4','video/quicktime','video/ogg'])
on conflict (id) do update set public = true, file_size_limit = 52428800,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists council_campaign_video_owner_upload on storage.objects;
create policy council_campaign_video_owner_upload on storage.objects for insert to authenticated
  with check (
    bucket_id = 'council-campaign-videos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
    and exists (
      select 1 from public.council_candidates c join public.students s on s.id = c.student_id
      where c.id::text = (storage.foldername(name))[2]
        and s.profile_id = (select auth.uid()) and c.status in ('draft', 'published')
    )
  );

alter table public.council_announcements drop constraint if exists council_announcements_audience_check;
alter table public.council_announcements add constraint council_announcements_audience_check
  check (audience = any (array['all'::text, 'M'::text, 'W'::text, 'candidates'::text]));
