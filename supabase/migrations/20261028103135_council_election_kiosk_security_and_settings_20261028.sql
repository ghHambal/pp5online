-- Guard the public election kiosk with a council staff session, add abstention,
-- and expose only aggregate turnout plus editable public-page presentation.

alter table public.council_votes
  alter column candidate_id drop not null,
  add column if not exists vote_kind text not null default 'candidate';

alter table public.council_votes
  drop constraint if exists council_votes_vote_kind_choice_check;
alter table public.council_votes
  add constraint council_votes_vote_kind_choice_check
  check ((vote_kind = 'candidate' and candidate_id is not null)
      or (vote_kind = 'abstain' and candidate_id is null));

create table if not exists public.council_election_page_settings (
  term_id bigint primary key references public.council_terms(id) on delete cascade,
  header_text text not null default 'ลงคะแนนเลือกตั้งสภานักเรียน',
  header_alignment text not null default 'center' check (header_alignment in ('left','center','right')),
  header_image_path text,
  footer_text text not null default 'โปรดตรวจสอบข้อมูลก่อนยืนยันลงคะแนน',
  countdown_enabled boolean not null default true,
  updated_at timestamptz not null default now()
);
alter table public.council_election_page_settings enable row level security;
revoke all on public.council_election_page_settings from public, anon, authenticated;

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('council-election-assets','council-election-assets',true,3145728,array['image/png'])
on conflict (id) do update set public=true,file_size_limit=3145728,allowed_mime_types=array['image/png'];

drop policy if exists council_election_assets_staff_insert on storage.objects;
create policy council_election_assets_staff_insert on storage.objects
  for insert to authenticated
  with check (bucket_id='council-election-assets' and public.is_council_staff());
drop policy if exists council_election_assets_staff_select on storage.objects;
create policy council_election_assets_staff_select on storage.objects
  for select to authenticated
  using (bucket_id='council-election-assets' and public.is_council_staff());
drop policy if exists council_election_assets_staff_update on storage.objects;
create policy council_election_assets_staff_update on storage.objects
  for update to authenticated
  using (bucket_id='council-election-assets' and public.is_council_staff())
  with check (bucket_id='council-election-assets' and public.is_council_staff());
drop policy if exists council_election_assets_staff_delete on storage.objects;
create policy council_election_assets_staff_delete on storage.objects
  for delete to authenticated
  using (bucket_id='council-election-assets' and public.is_council_staff());

create or replace function public._council_election_page_term_id()
returns bigint language sql stable security definer set search_path=public
as $$
  select t.id
  from public.council_terms t
  where t.status in ('active','upcoming')
    and exists (select 1 from public.council_election_config e where e.term_id=t.id)
  order by t.id desc limit 1
$$;
revoke all on function public._council_election_page_term_id() from public,anon,authenticated;

create or replace function public.get_public_council_election_turnout()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
declare v_term_id bigint; v_total bigint; v_voted bigint; v_opens timestamptz; v_closes timestamptz;
begin
  v_term_id := public._council_election_page_term_id();
  select count(*) into v_total from public.students;
  if v_term_id is null then
    return jsonb_build_object('total_students',v_total,'voted_count',0,'percent',0,'opens_at',null,'closes_at',null,'term_id',null);
  end if;
  select count(distinct v.voter_student_id),min(e.opens_at),max(e.closes_at)
    into v_voted,v_opens,v_closes
  from public.council_election_config e
  left join public.council_votes v on v.election_config_id=e.id
  where e.term_id=v_term_id;
  return jsonb_build_object(
    'total_students',v_total,'voted_count',v_voted,
    'percent',case when v_total=0 then 0 else round(v_voted*100.0/v_total,2) end,
    'opens_at',v_opens,'closes_at',v_closes,'term_id',v_term_id
  );
end;
$$;
revoke all on function public.get_public_council_election_turnout() from public;
grant execute on function public.get_public_council_election_turnout() to anon,authenticated;

create or replace function public.get_public_council_election_page_settings()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
declare v_term_id bigint; v_settings public.council_election_page_settings%rowtype;
begin
  v_term_id := public._council_election_page_term_id();
  if v_term_id is null then
    return jsonb_build_object('header_text','ลงคะแนนเลือกตั้งสภานักเรียน','header_alignment','center','header_image_path',null,'footer_text','โปรดตรวจสอบข้อมูลก่อนยืนยันลงคะแนน','countdown_enabled',true);
  end if;
  select * into v_settings from public.council_election_page_settings where term_id=v_term_id;
  return jsonb_build_object(
    'term_id',v_term_id,
    'header_text',coalesce(v_settings.header_text,'ลงคะแนนเลือกตั้งสภานักเรียน'),
    'header_alignment',coalesce(v_settings.header_alignment,'center'),
    'header_image_path',v_settings.header_image_path,
    'footer_text',coalesce(v_settings.footer_text,'โปรดตรวจสอบข้อมูลก่อนยืนยันลงคะแนน'),
    'countdown_enabled',coalesce(v_settings.countdown_enabled,true)
  );
end;
$$;
revoke all on function public.get_public_council_election_page_settings() from public;
grant execute on function public.get_public_council_election_page_settings() to anon,authenticated;

create or replace function public.save_council_election_page_settings(p_settings jsonb)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare v_term_id bigint; v_alignment text; v_header text; v_footer text; v_image text;
begin
  if auth.uid() is null or not public.is_council_staff() then
    raise exception 'not authorized to update election page settings' using errcode='42501';
  end if;
  v_term_id := public._council_election_page_term_id();
  if v_term_id is null then raise exception 'election term is not configured'; end if;
  v_alignment := coalesce(p_settings->>'header_alignment','center');
  if v_alignment not in ('left','center','right') then raise exception 'invalid header alignment'; end if;
  v_header := left(coalesce(p_settings->>'header_text',''),240);
  v_footer := left(coalesce(p_settings->>'footer_text',''),500);
  v_image := nullif(left(coalesce(p_settings->>'header_image_path',''),300),'');
  if v_image is not null and v_image !~ ('^' || v_term_id::text || '/header-[a-zA-Z0-9_-]+\.png$') then
    raise exception 'invalid header image path';
  end if;
  insert into public.council_election_page_settings(term_id,header_text,header_alignment,header_image_path,footer_text,countdown_enabled,updated_at)
  values(v_term_id,v_header,v_alignment,v_image,v_footer,coalesce((p_settings->>'countdown_enabled')::boolean,true),now())
  on conflict(term_id) do update set header_text=excluded.header_text,header_alignment=excluded.header_alignment,
    header_image_path=excluded.header_image_path,footer_text=excluded.footer_text,
    countdown_enabled=excluded.countdown_enabled,updated_at=now();
  return public.get_public_council_election_page_settings();
end;
$$;
revoke all on function public.save_council_election_page_settings(jsonb) from public,anon;
grant execute on function public.save_council_election_page_settings(jsonb) to authenticated;

create or replace function public.cast_public_council_vote(p_code text,p_candidate_id bigint)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare v_student_id integer; v_gender text; v_election_id bigint; v_vote_id bigint; v_now timestamptz;
begin
  if auth.uid() is null or not public.is_council_staff() then
    return jsonb_build_object('error','staff_login_required');
  end if;
  select id,case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end
    into v_student_id,v_gender from public.students
    where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;
  if v_student_id is null then return jsonb_build_object('error','student_not_found'); end if;
  if v_gender is null then return jsonb_build_object('error','gender_unknown'); end if;

  if p_candidate_id is null then
    select e.id into v_election_id from public.council_election_config e
    where e.term_id=public._council_election_page_term_id() and e.gender=v_gender and e.candidates_published=true
    order by e.academic_year desc limit 1;
  else
    select e.id into v_election_id from public.council_election_config e
    join public.council_candidates c on c.election_config_id=e.id
    where c.id=p_candidate_id and e.term_id=public._council_election_page_term_id()
      and e.gender=v_gender and e.candidates_published=true and c.status='published'
    limit 1;
  end if;
  if v_election_id is null then return jsonb_build_object('error','election_not_open'); end if;
  select id into v_election_id from public.council_election_config where id=v_election_id for update;
  v_now := clock_timestamp();
  if not exists (
    select 1 from public.council_election_config e
    where e.id=v_election_id and e.candidates_published=true and e.opens_at is not null
      and e.opens_at<=v_now and (e.closes_at is null or e.closes_at>v_now) and e.results_published_at is null
  ) then return jsonb_build_object('error','election_not_open'); end if;
  if p_candidate_id is not null and not exists (
    select 1 from public.council_candidates where id=p_candidate_id and election_config_id=v_election_id and status='published'
  ) then return jsonb_build_object('error','candidate_not_available'); end if;
  insert into public.council_votes(election_config_id,candidate_id,voter_student_id,vote_kind)
  values(v_election_id,p_candidate_id,v_student_id,case when p_candidate_id is null then 'abstain' else 'candidate' end)
  on conflict(election_config_id,voter_student_id) do nothing returning id into v_vote_id;
  if v_vote_id is null then return jsonb_build_object('error','already_voted'); end if;
  return jsonb_build_object('ok',true,'vote_kind',case when p_candidate_id is null then 'abstain' else 'candidate' end);
end;
$$;
revoke all on function public.cast_public_council_vote(text,bigint) from public,anon;
grant execute on function public.cast_public_council_vote(text,bigint) to authenticated;

create or replace function public.get_public_council_election_bundle(p_code text)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare v_student record; v_gender text; v_election record; v_candidates jsonb; v_my_vote bigint; v_did_vote boolean; v_abstained boolean; v_thank_you text;
begin
  if auth.uid() is null or not public.is_council_staff() then
    return jsonb_build_object('error','staff_login_required');
  end if;
  select id,full_name,image_url,photo_url,main_room,gender into v_student
  from public.students where student_code=trim(p_code) and coalesce(is_active,true)=true limit 1;
  if v_student.id is null then return jsonb_build_object('error','student_not_found'); end if;
  v_gender := case when v_student.gender in ('ชาย','M') then 'M' when v_student.gender in ('หญิง','W') then 'W' end;
  if v_gender is null then return jsonb_build_object('error','gender_unknown'); end if;
  select value into v_thank_you from public.system_config where key='council_election_thank_you_message';
  select * into v_election from public.council_election_config
  where term_id=public._council_election_page_term_id() and gender=v_gender and candidates_published=true
  order by (opens_at is not null and opens_at<=now() and (closes_at is null or closes_at>now())) desc,academic_year desc limit 1;
  if v_election.id is null then return jsonb_build_object('error','election_not_found','student',jsonb_build_object('full_name',v_student.full_name,'image_url',coalesce(v_student.image_url,v_student.photo_url),'main_room',v_student.main_room)); end if;
  select candidate_id,(vote_kind='abstain') into v_my_vote,v_abstained from public.council_votes where election_config_id=v_election.id and voter_student_id=v_student.id;
  v_did_vote := found;
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
    'candidates',v_candidates,'already_voted_candidate_id',v_my_vote,'already_voted',coalesce(v_did_vote,false),'already_abstained',coalesce(v_abstained,false),
    'thank_you_message',v_thank_you
  );
end;
$$;
revoke all on function public.get_public_council_election_bundle(text) from public,anon;
grant execute on function public.get_public_council_election_bundle(text) to authenticated;

create or replace function public.publish_council_election_results_atomic(p_election_config_id bigint)
returns bigint language plpgsql security definer set search_path=public
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
  if not exists (select 1 from public.council_votes where election_config_id=v_election.id and vote_kind='candidate') then
    raise exception 'no candidate votes to publish';
  end if;
  select * into v_term from public.council_terms where id=v_election.term_id;
  select id into v_position_id from public.council_positions
  where gender=v_election.gender and is_elected=true and is_active=true order by sort_order,id limit 1;
  if v_position_id is null then raise exception 'elected council position is not configured'; end if;
  select c.id,c.student_id into v_winner_candidate_id,v_winner_student_id
  from public.council_candidates c left join public.council_votes v
    on v.candidate_id=c.id and v.election_config_id=v_election.id and v.vote_kind='candidate'
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
revoke all on function public.publish_council_election_results_atomic(bigint) from public,anon;
grant execute on function public.publish_council_election_results_atomic(bigint) to authenticated;
