alter table public.council_election_page_settings
  add column if not exists header_subtitle text not null default 'จุดลงคะแนนของโรงเรียน — สถิติผู้มาใช้สิทธิ์แสดงแบบเรียลไทม์',
  add column if not exists public_texts jsonb not null default '{}'::jsonb;

drop policy if exists council_election_assets_staff_insert on storage.objects;
create policy council_election_assets_staff_insert on storage.objects
  for insert to authenticated
  with check (bucket_id='council-election-assets' and (public.is_council_staff() or public.is_council_election_tester_1087()));
drop policy if exists council_election_assets_staff_select on storage.objects;
create policy council_election_assets_staff_select on storage.objects
  for select to authenticated
  using (bucket_id='council-election-assets' and (public.is_council_staff() or public.is_council_election_tester_1087()));
drop policy if exists council_election_assets_staff_update on storage.objects;
create policy council_election_assets_staff_update on storage.objects
  for update to authenticated
  using (bucket_id='council-election-assets' and (public.is_council_staff() or public.is_council_election_tester_1087()))
  with check (bucket_id='council-election-assets' and (public.is_council_staff() or public.is_council_election_tester_1087()));
drop policy if exists council_election_assets_staff_delete on storage.objects;
create policy council_election_assets_staff_delete on storage.objects
  for delete to authenticated
  using (bucket_id='council-election-assets' and (public.is_council_staff() or public.is_council_election_tester_1087()));

create or replace function public.get_public_council_election_page_settings()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
declare
  v_term_id bigint;
  v_settings public.council_election_page_settings%rowtype;
  v_positions jsonb;
  v_thank_you text;
begin
  v_term_id := public._council_election_page_term_id();
  select coalesce(jsonb_agg(jsonb_build_object(
      'id',e.id,'gender',e.gender,'opens_at',e.opens_at,'closes_at',e.closes_at
    ) order by case e.gender when 'M' then 1 when 'W' then 2 else 3 end,e.id),'[]'::jsonb)
    into v_positions
    from public.council_election_config e where e.term_id=v_term_id and e.gender in ('M','W');
  select value into v_thank_you from public.system_config where key='council_election_thank_you_message';
  if v_term_id is null then
    return jsonb_build_object(
      'header_text','ลงคะแนนเลือกตั้งสภานักเรียน','header_subtitle','จุดลงคะแนนของโรงเรียน — สถิติผู้มาใช้สิทธิ์แสดงแบบเรียลไทม์',
      'header_alignment','center','header_image_path',null,'footer_text','โปรดตรวจสอบข้อมูลก่อนยืนยันลงคะแนน',
      'countdown_enabled',true,'public_texts','{}'::jsonb,'thank_you_message',coalesce(v_thank_you,'ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ'),
      'positions',v_positions
    );
  end if;
  select * into v_settings from public.council_election_page_settings where term_id=v_term_id;
  return jsonb_build_object(
    'term_id',v_term_id,
    'header_text',coalesce(v_settings.header_text,'ลงคะแนนเลือกตั้งสภานักเรียน'),
    'header_subtitle',coalesce(v_settings.header_subtitle,'จุดลงคะแนนของโรงเรียน — สถิติผู้มาใช้สิทธิ์แสดงแบบเรียลไทม์'),
    'header_alignment',coalesce(v_settings.header_alignment,'center'),
    'header_image_path',v_settings.header_image_path,
    'footer_text',coalesce(v_settings.footer_text,'โปรดตรวจสอบข้อมูลก่อนยืนยันลงคะแนน'),
    'countdown_enabled',coalesce(v_settings.countdown_enabled,true),
    'public_texts',coalesce(v_settings.public_texts,'{}'::jsonb),
    'thank_you_message',coalesce(v_thank_you,'ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ'),
    'positions',v_positions
  );
end;
$$;
revoke all on function public.get_public_council_election_page_settings() from public;
grant execute on function public.get_public_council_election_page_settings() to anon,authenticated;

create or replace function public.save_council_election_page_settings(p_settings jsonb)
returns jsonb language plpgsql security definer set search_path=public
as $$
declare
  v_term_id bigint;
  v_alignment text;
  v_header text;
  v_subtitle text;
  v_footer text;
  v_image text;
  v_thank_you text;
  v_position record;
begin
  if auth.uid() is null or p_settings->>'admin_code' is distinct from '1087' or not public.is_council_election_tester_1087() then
    raise exception 'settings require the authenticated 1087 election administrator' using errcode='42501';
  end if;
  v_term_id := public._council_election_page_term_id();
  if v_term_id is null then raise exception 'election term is not configured'; end if;
  v_alignment := coalesce(p_settings->>'header_alignment','center');
  if v_alignment not in ('left','center','right') then raise exception 'invalid header alignment'; end if;
  v_header := left(coalesce(p_settings->>'header_text',''),240);
  v_subtitle := left(coalesce(p_settings->>'header_subtitle',''),500);
  v_footer := left(coalesce(p_settings->>'footer_text',''),1000);
  v_image := nullif(left(coalesce(p_settings->>'header_image_path',''),300),'');
  v_thank_you := left(coalesce(p_settings->>'thank_you_message','ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ'),1000);
  if v_image is not null and v_image !~ ('^' || v_term_id::text || '/header-[a-zA-Z0-9_-]+\.png$') then
    raise exception 'invalid header image path';
  end if;

  insert into public.council_election_page_settings(term_id,header_text,header_subtitle,header_alignment,header_image_path,footer_text,countdown_enabled,public_texts,updated_at)
  values(v_term_id,v_header,v_subtitle,v_alignment,v_image,v_footer,coalesce((p_settings->>'countdown_enabled')::boolean,true),coalesce(p_settings->'public_texts','{}'::jsonb),now())
  on conflict(term_id) do update set header_text=excluded.header_text,header_subtitle=excluded.header_subtitle,
    header_alignment=excluded.header_alignment,header_image_path=excluded.header_image_path,
    footer_text=excluded.footer_text,countdown_enabled=excluded.countdown_enabled,
    public_texts=excluded.public_texts,updated_at=now();

  insert into public.system_config(key,value,updated_at)
  values('council_election_thank_you_message',v_thank_you,now())
  on conflict(key) do update set value=excluded.value,updated_at=now();

  for v_position in
    select * from jsonb_to_recordset(coalesce(p_settings->'positions','[]'::jsonb)) as x(id bigint,gender text,opens_at timestamptz,closes_at timestamptz)
  loop
    if v_position.gender not in ('M','W') or (v_position.opens_at is not null and v_position.closes_at is not null and v_position.closes_at <= v_position.opens_at) then
      raise exception 'invalid election position or time range';
    end if;
    update public.council_election_config
      set opens_at=v_position.opens_at,closes_at=v_position.closes_at
      where id=v_position.id and term_id=v_term_id and gender=v_position.gender;
    if not found then raise exception 'election position does not belong to the current term'; end if;
  end loop;

  return public.get_public_council_election_page_settings();
end;
$$;
revoke all on function public.save_council_election_page_settings(jsonb) from public,anon;
grant execute on function public.save_council_election_page_settings(jsonb) to authenticated;

create or replace function public.get_public_council_election_turnout()
returns jsonb language plpgsql stable security definer set search_path=public
as $$
declare
  v_term_id bigint;
  v_total bigint;
  v_voted bigint := 0;
  v_male_total bigint;
  v_female_total bigint;
  v_unknown_total bigint;
  v_male_voted bigint := 0;
  v_female_voted bigint := 0;
  v_unknown_voted bigint := 0;
  v_classes jsonb := '[]'::jsonb;
  v_staff jsonb;
  v_staff_ballots bigint := 0;
  v_opens timestamptz;
  v_closes timestamptz;
begin
  v_term_id := public._council_election_page_term_id();
  select count(*),
    count(*) filter(where gender_key='M'),
    count(*) filter(where gender_key='W'),
    count(*) filter(where gender_key is null)
    into v_total,v_male_total,v_female_total,v_unknown_total
  from (
    select case when gender in ('ชาย','M') then 'M' when gender in ('หญิง','W') then 'W' end as gender_key
    from public.students
  ) s;

  if v_term_id is not null then
    with student_votes as (
      select distinct v.voter_student_id
      from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
      where e.term_id=v_term_id and v.voter_student_id is not null
    )
    select count(distinct s.id) filter(where sv.voter_student_id is not null),
      count(distinct s.id) filter(where s.gender in ('ชาย','M') and sv.voter_student_id is not null),
      count(distinct s.id) filter(where s.gender in ('หญิง','W') and sv.voter_student_id is not null),
      count(distinct s.id) filter(where s.gender not in ('ชาย','M','หญิง','W') and sv.voter_student_id is not null or s.gender is null and sv.voter_student_id is not null)
      into v_voted,v_male_voted,v_female_voted,v_unknown_voted
    from public.students s left join student_votes sv on sv.voter_student_id=s.id;

    with student_votes as (
      select distinct v.voter_student_id
      from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
      where e.term_id=v_term_id and v.voter_student_id is not null
    )
    select coalesce(jsonb_agg(jsonb_build_object(
      'room',room_name,'total',total_count,'voted',voted_count,
      'male_total',male_total,'male_voted',male_voted,
      'female_total',female_total,'female_voted',female_voted,
      'unknown_total',unknown_total,'unknown_voted',unknown_voted
    ) order by room_name),'[]'::jsonb)
    into v_classes
    from (
      select coalesce(nullif(trim(s.main_room),''),'ไม่ระบุห้อง') as room_name,
        count(*) as total_count,
        count(*) filter(where sv.voter_student_id is not null) as voted_count,
        count(*) filter(where s.gender in ('ชาย','M')) as male_total,
        count(*) filter(where s.gender in ('ชาย','M') and sv.voter_student_id is not null) as male_voted,
        count(*) filter(where s.gender in ('หญิง','W')) as female_total,
        count(*) filter(where s.gender in ('หญิง','W') and sv.voter_student_id is not null) as female_voted,
        count(*) filter(where s.gender not in ('ชาย','M','หญิง','W') or s.gender is null) as unknown_total,
        count(*) filter(where (s.gender not in ('ชาย','M','หญิง','W') or s.gender is null) and sv.voter_student_id is not null) as unknown_voted
      from public.students s left join student_votes sv on sv.voter_student_id=s.id
      group by coalesce(nullif(trim(s.main_room),''),'ไม่ระบุห้อง')
    ) rooms;

    select count(*) filter(where v.voter_teacher_id is not null or v.voter_personnel_id is not null),min(e.opens_at),max(e.closes_at)
      into v_staff_ballots,v_opens,v_closes
    from public.council_election_config e left join public.council_votes v on v.election_config_id=e.id
    where e.term_id=v_term_id;
  end if;

  with teacher_voters as (
    select distinct v.voter_teacher_id
    from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
    where e.term_id=v_term_id and v.voter_teacher_id is not null
  ), personnel_voters as (
    select distinct v.voter_personnel_id
    from public.council_votes v join public.council_election_config e on e.id=v.election_config_id
    join public.sports_shirt_personnel_requests p on p.id=v.voter_personnel_id
    where e.term_id=v_term_id and p.event_id=public._council_current_personnel_roster_event_id()
  ), personnel_totals as (
    select count(*) as total,
      count(*) filter(where p.gender in ('ชาย','M')) as male_total,
      count(*) filter(where p.gender in ('หญิง','W')) as female_total,
      count(*) filter(where p.gender not in ('ชาย','M','หญิง','W') or p.gender is null) as unknown_total,
      count(*) filter(where pv.voter_personnel_id is not null) as voted,
      count(*) filter(where p.gender in ('ชาย','M') and pv.voter_personnel_id is not null) as male_voted,
      count(*) filter(where p.gender in ('หญิง','W') and pv.voter_personnel_id is not null) as female_voted,
      count(*) filter(where (p.gender not in ('ชาย','M','หญิง','W') or p.gender is null) and pv.voter_personnel_id is not null) as unknown_voted
    from public.sports_shirt_personnel_requests p
    left join personnel_voters pv on pv.voter_personnel_id=p.id
    where p.event_id=public._council_current_personnel_roster_event_id()
  ), teacher_totals as (
    select count(*) as total,(select count(*) from teacher_voters) as voted from public.teachers
  )
  select jsonb_build_object(
    'teachers',jsonb_build_object('total',t.total,'voted',t.voted,'gender_data_available',false),
    'personnel',jsonb_build_object('total',p.total,'voted',p.voted,
      'male_total',p.male_total,'male_voted',p.male_voted,
      'female_total',p.female_total,'female_voted',p.female_voted,
      'unknown_total',p.unknown_total,'unknown_voted',p.unknown_voted),
    'voted_people',t.voted+p.voted
  ) into v_staff from teacher_totals t cross join personnel_totals p;

  return jsonb_build_object(
    'total_students',v_total,'voted_count',v_voted,
    'percent',case when v_total=0 then 0 else round(v_voted*100.0/v_total,2) end,
    'student_breakdown',jsonb_build_object(
      'male',jsonb_build_object('total',v_male_total,'voted',v_male_voted,'percent',case when v_male_total=0 then 0 else round(v_male_voted*100.0/v_male_total,2) end),
      'female',jsonb_build_object('total',v_female_total,'voted',v_female_voted,'percent',case when v_female_total=0 then 0 else round(v_female_voted*100.0/v_female_total,2) end),
      'unknown',jsonb_build_object('total',v_unknown_total,'voted',v_unknown_voted)
    ),
    'classes',v_classes,'staff_breakdown',v_staff,'staff_voted_ballots',v_staff_ballots,
    'opens_at',v_opens,'closes_at',v_closes,'term_id',v_term_id
  );
end;
$$;
revoke all on function public.get_public_council_election_turnout() from public;
grant execute on function public.get_public_council_election_turnout() to anon,authenticated;
