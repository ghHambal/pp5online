-- Private passcode storage: the literal passcode is provisioned separately and is not
-- included in the public repository or delivered to the browser as an expected value.
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to postgres, service_role;

create table if not exists private.council_election_settings_secret (
  singleton boolean primary key default true check (singleton),
  passcode_hash text not null,
  updated_at timestamptz not null default now()
);
alter table private.council_election_settings_secret enable row level security;
revoke all on private.council_election_settings_secret from public, anon, authenticated;

create table if not exists private.council_election_settings_attempts (
  client_key text not null,
  attempted_at timestamptz not null default now()
);
create index if not exists council_election_settings_attempts_key_time_idx
  on private.council_election_settings_attempts(client_key,attempted_at);
alter table private.council_election_settings_attempts enable row level security;
revoke all on private.council_election_settings_attempts from public, anon, authenticated;

create or replace function private._council_election_settings_code_matches(p_code text)
returns boolean
language sql
security definer
set search_path=private,extensions,pg_temp
as $$
  select coalesce(bool_or(extensions.crypt(coalesce(p_code,''), passcode_hash)=passcode_hash),false)
  from private.council_election_settings_secret;
$$;
revoke all on function private._council_election_settings_code_matches(text) from public, anon, authenticated;
grant execute on function private._council_election_settings_code_matches(text) to postgres, service_role;

create or replace function public.verify_council_election_settings_passcode(p_code text)
returns boolean
language sql
security definer
set search_path=public,private,extensions,pg_temp
as $$
  select private._council_election_settings_code_matches(p_code);
$$;
revoke all on function public.verify_council_election_settings_passcode(text) from public,anon,authenticated;
grant execute on function public.verify_council_election_settings_passcode(text) to service_role;

create or replace function public.council_election_settings_rate_gate(p_client_key text,p_success boolean)
returns boolean
language plpgsql
security definer
set search_path=private,pg_temp
as $$
declare
  v_attempts integer;
begin
  if p_client_key !~ '^[a-f0-9]{64}$' then return false; end if;
  perform pg_advisory_xact_lock(hashtext(p_client_key));
  delete from private.council_election_settings_attempts
    where client_key=p_client_key and attempted_at < now()-interval '15 minutes';
  if p_success then
    delete from private.council_election_settings_attempts where client_key=p_client_key;
    return true;
  end if;
  select count(*) into v_attempts from private.council_election_settings_attempts where client_key=p_client_key;
  if v_attempts >= 10 then return false; end if;
  insert into private.council_election_settings_attempts(client_key) values(p_client_key);
  return true;
end;
$$;
revoke all on function public.council_election_settings_rate_gate(text,boolean) from public,anon,authenticated;
grant execute on function public.council_election_settings_rate_gate(text,boolean) to service_role;

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
revoke all on function public.save_council_election_page_settings(jsonb) from public,anon,authenticated;
grant execute on function public.save_council_election_page_settings(jsonb) to service_role;
