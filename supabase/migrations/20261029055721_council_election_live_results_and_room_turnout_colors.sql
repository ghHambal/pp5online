alter table public.council_election_page_settings
  add column if not exists show_results_after_close boolean not null default false;

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
      'countdown_enabled',true,'show_results_after_close',false,'public_texts','{}'::jsonb,
      'thank_you_message',coalesce(v_thank_you,'ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ'),'positions',v_positions
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
    'show_results_after_close',coalesce(v_settings.show_results_after_close,false),
    'public_texts',coalesce(v_settings.public_texts,'{}'::jsonb),
    'thank_you_message',coalesce(v_thank_you,'ผลการเลือกตั้งจะประกาศภายหลังปิดหีบ'),'positions',v_positions
  );
end;
$$;
revoke all on function public.get_public_council_election_page_settings() from public;
grant execute on function public.get_public_council_election_page_settings() to anon,authenticated;

create or replace function public.save_council_election_page_settings(p_settings jsonb)
returns jsonb language plpgsql security definer set search_path=public,private,extensions
as $$
declare
  v_term_id bigint;
  v_alignment text;
  v_header text;
  v_subtitle text;
  v_footer text;
  v_image text;
  v_thank_you text;
  v_show_results boolean;
  v_position record;
begin
  if not private._council_election_settings_code_matches(p_settings->>'admin_code') then
    raise exception 'invalid election settings passcode' using errcode='42501';
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
  select coalesce((p_settings->>'show_results_after_close')::boolean,show_results_after_close,false)
    into v_show_results from public.council_election_page_settings where term_id=v_term_id;
  v_show_results := coalesce(v_show_results,false);
  if v_image is not null and v_image !~ ('^' || v_term_id::text || '/header-[a-zA-Z0-9_-]+\.png$') then
    raise exception 'invalid header image path';
  end if;

  insert into public.council_election_page_settings(term_id,header_text,header_subtitle,header_alignment,header_image_path,footer_text,countdown_enabled,public_texts,show_results_after_close,updated_at)
  values(v_term_id,v_header,v_subtitle,v_alignment,v_image,v_footer,coalesce((p_settings->>'countdown_enabled')::boolean,true),coalesce(p_settings->'public_texts','{}'::jsonb),v_show_results,now())
  on conflict(term_id) do update set header_text=excluded.header_text,header_subtitle=excluded.header_subtitle,
    header_alignment=excluded.header_alignment,header_image_path=excluded.header_image_path,
    footer_text=excluded.footer_text,countdown_enabled=excluded.countdown_enabled,
    public_texts=excluded.public_texts,show_results_after_close=excluded.show_results_after_close,updated_at=now();

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
revoke all on function public.save_council_election_page_settings(jsonb) from public,anon,authenticated;
grant execute on function public.save_council_election_page_settings(jsonb) to service_role;

-- The test account must be authenticated as the linked teacher, not just type 1087.
do $$
declare
  v_definition text;
begin
  v_definition := pg_get_functiondef('public.get_public_council_election_bundle_v2(text)'::regprocedure);
  if position('v_is_1087 boolean := trim(p_code)=''1087'';' in v_definition)=0 then
    raise exception 'Unexpected election bundle tester gate; refusing to modify it';
  end if;
  v_definition := replace(v_definition,
    'v_is_1087 boolean := trim(p_code)=''1087'';',
    'v_is_1087 boolean := trim(p_code)=''1087'' and public.is_council_election_tester_1087();');
  execute v_definition;

  v_definition := pg_get_functiondef('public.cast_public_council_vote(text,bigint,bigint)'::regprocedure);
  if position('v_is_1087 boolean := trim(p_code)=''1087'';' in v_definition)=0 then
    raise exception 'Unexpected election vote tester gate; refusing to modify it';
  end if;
  v_definition := replace(v_definition,
    'v_is_1087 boolean := trim(p_code)=''1087'';',
    'v_is_1087 boolean := trim(p_code)=''1087'' and public.is_council_election_tester_1087();');
  execute v_definition;
end;
$$;

create or replace function public.get_council_election_results()
returns jsonb language plpgsql stable security definer set search_path=public,pg_temp
as $$
declare
  v_term_id bigint := public._council_election_page_term_id();
  v_is_tester boolean := coalesce(public.is_council_election_tester_1087(),false);
  v_show_after_close boolean := false;
  v_all_closed boolean := false;
  v_ballot_count integer := 0;
  v_results jsonb := '[]'::jsonb;
  v_ballot record;
  v_candidates jsonb;
  v_abstentions integer;
  v_vote_total integer;
begin
  select coalesce(s.show_results_after_close,false) into v_show_after_close
    from public.council_election_page_settings s where s.term_id=v_term_id;
  select count(*),coalesce(bool_and(e.closes_at is not null and e.closes_at<=now()),false)
    into v_ballot_count,v_all_closed
    from public.council_election_config e where e.term_id=v_term_id and e.gender in ('M','W');
  v_all_closed := v_ballot_count=2 and v_all_closed;

  if not v_is_tester and not (v_show_after_close and v_all_closed) then
    return jsonb_build_object('visible',false,'live_access',false,'public_access',false,'updated_at',now());
  end if;

  for v_ballot in
    select e.id,e.gender,e.closes_at,e.results_published_at
    from public.council_election_config e
    where e.term_id=v_term_id and e.gender in ('M','W')
    order by case e.gender when 'M' then 1 else 2 end
  loop
    select coalesce(jsonb_agg(jsonb_build_object(
        'candidate_id',c.id,'ballot_number',c.ballot_number,'full_name',s.full_name,'room',s.main_room,
        'votes',coalesce(vc.votes,0)
      ) order by c.ballot_number),'[]'::jsonb)
      into v_candidates
      from public.council_candidates c
      join public.students s on s.id=c.student_id
      left join (
        select cv.candidate_id,count(*)::integer as votes
        from public.council_votes cv where cv.election_config_id=v_ballot.id and cv.vote_kind='candidate'
        group by cv.candidate_id
      ) vc on vc.candidate_id=c.id
      where c.election_config_id=v_ballot.id and c.status='published';
    select count(*) filter (where cv.vote_kind='abstain')::integer,count(*)::integer
      into v_abstentions,v_vote_total from public.council_votes cv where cv.election_config_id=v_ballot.id;
    v_results := v_results || jsonb_build_array(jsonb_build_object(
      'election_id',v_ballot.id,'gender',v_ballot.gender,'closes_at',v_ballot.closes_at,
      'results_published_at',v_ballot.results_published_at,'vote_total',coalesce(v_vote_total,0),
      'abstentions',coalesce(v_abstentions,0),'candidates',v_candidates
    ));
  end loop;
  return jsonb_build_object(
    'visible',true,'live_access',v_is_tester,'public_access',not v_is_tester and v_show_after_close and v_all_closed,
    'show_after_close',v_show_after_close,'all_closed',v_all_closed,'results',v_results,'updated_at',now()
  );
end;
$$;
revoke all on function public.get_council_election_results() from public,anon,authenticated;
grant execute on function public.get_council_election_results() to anon,authenticated;
