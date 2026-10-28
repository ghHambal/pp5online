-- Settings access is authorized by the authenticated teacher account only.
-- Do not accept or store a public/shared passcode from browser input.
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
  if auth.uid() is null or not public.is_council_election_tester_1087() then
    raise exception 'settings require the authenticated election administrator account' using errcode='42501';
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
