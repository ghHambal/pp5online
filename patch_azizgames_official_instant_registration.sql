-- AZIZGAMES field-official instant registration
-- ลงทะเบียนสำเร็จแล้วสร้างบัญชีกรรมการภาคสนามทันที
-- ใช้ได้เฉพาะสิทธิ์รายการแข่งขันที่ผู้สมัครเลือก และข้อมูลบัญชีอ่านได้โดยแอดมินเท่านั้น

create or replace function public.register_sports_official(
  p_event_id uuid,
  p_full_name text,
  p_contact text default null,
  p_sport_ids uuid[] default '{}'
)
returns jsonb
language plpgsql
security definer
set search_path = public, private, extensions, pg_temp
as $$
declare
  v_official public.sports_officials;
  v_username text;
  v_pin text;
  v_bytes bytea;
  v_number bigint;
begin
  if length(trim(coalesce(p_full_name,''))) < 2 then
    raise exception 'กรุณาระบุชื่อ-นามสกุล';
  end if;
  if array_length(p_sport_ids,1) is null then
    raise exception 'กรุณาเลือกรายการแข่งขันอย่างน้อย 1 รายการ';
  end if;
  if not exists (
    select 1 from public.events e where e.id = p_event_id and e.status = 'active'
  ) then
    raise exception 'ไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน';
  end if;
  if exists (
    select 1 from unnest(p_sport_ids) x
    where not exists (
      select 1 from public.sports s
      where s.id = x and s.event_id = p_event_id and s.is_active is true
    )
  ) then
    raise exception 'พบรายการกีฬาที่ไม่ถูกต้อง';
  end if;
  if exists (
    select 1
    from public.sports_officials o
    where o.event_id = p_event_id
      and lower(trim(o.full_name)) = lower(trim(p_full_name))
      and coalesce(nullif(trim(o.contact),''),'') = coalesce(nullif(trim(p_contact),''),'')
      and o.status <> 'rejected'
  ) then
    raise exception 'มีชื่อและข้อมูลติดต่อชุดนี้ลงทะเบียนไว้แล้ว กรุณาติดต่อแอดมิน';
  end if;

  loop
    v_username := 'ref' || lpad((1 + floor(random()*9999))::integer::text,4,'0');
    exit when not exists(select 1 from public.sports_officials where username = v_username);
  end loop;
  v_bytes := extensions.gen_random_bytes(4);
  v_number := get_byte(v_bytes,0)::bigint*16777216
    + get_byte(v_bytes,1)::bigint*65536
    + get_byte(v_bytes,2)::bigint*256
    + get_byte(v_bytes,3);
  v_pin := (100000 + (v_number % 900000))::text;

  insert into public.sports_officials(
    event_id, full_name, contact, username, pin, pin_hash, status, approved_at
  )
  values(
    p_event_id,
    trim(p_full_name),
    nullif(trim(coalesce(p_contact,'')),''),
    v_username,
    v_pin,
    extensions.crypt(v_pin, extensions.gen_salt('bf',10)),
    'approved',
    now()
  )
  returning * into v_official;

  insert into public.sports_official_assignments(official_id, sport_id)
  select v_official.id, x from unnest(p_sport_ids) x;

  return jsonb_build_object(
    'id', v_official.id,
    'status', v_official.status,
    'username', v_username,
    'pin', v_pin
  );
end;
$$;

-- การอนุมัติรายการค้างเดิมยังสร้างบัญชีให้ได้ และเก็บ PIN ที่แอดมินต้องแจ้งกรรมการ
create or replace function public.approve_sports_official(p_official_id uuid, p_sport_ids uuid[])
returns jsonb
language plpgsql
security definer
set search_path = public, private, extensions, pg_temp
as $$
declare
  v_official public.sports_officials;
  v_username text;
  v_pin text;
  v_bytes bytea;
  v_number bigint;
begin
  if not private.azizgames_is_admin() then raise exception 'ไม่มีสิทธิ์อนุมัติกรรมการ' using errcode='42501'; end if;
  select * into v_official from public.sports_officials where id=p_official_id for update;
  if v_official.id is null then raise exception 'ไม่พบคำขอลงทะเบียน'; end if;
  if array_length(p_sport_ids,1) is null then raise exception 'กรุณาเลือกรายการแข่งขันอย่างน้อย 1 รายการ'; end if;
  if exists (select 1 from unnest(p_sport_ids) x where not exists (
    select 1 from public.sports s where s.id=x and s.event_id=v_official.event_id and s.is_active is true
  )) then raise exception 'พบรายการกีฬาที่ไม่ถูกต้อง'; end if;

  if v_official.username is null then
    loop
      v_username := 'ref' || lpad((1 + floor(random()*9999))::integer::text,4,'0');
      exit when not exists(select 1 from public.sports_officials where username=v_username);
    end loop;
  else v_username := v_official.username;
  end if;
  v_bytes := extensions.gen_random_bytes(4);
  v_number := get_byte(v_bytes,0)::bigint*16777216 + get_byte(v_bytes,1)::bigint*65536 + get_byte(v_bytes,2)::bigint*256 + get_byte(v_bytes,3);
  v_pin := (100000 + (v_number % 900000))::text;

  update public.sports_officials set username=v_username,pin=v_pin,
    pin_hash=extensions.crypt(v_pin,extensions.gen_salt('bf',10)),status='approved',approved_at=now()
  where id=p_official_id;
  delete from public.sports_official_assignments where official_id=p_official_id;
  insert into public.sports_official_assignments(official_id,sport_id)
  select p_official_id,x from unnest(p_sport_ids) x;
  update private.sports_official_sessions set revoked_at=now() where official_id=p_official_id and revoked_at is null;
  return jsonb_build_object('username',v_username,'pin',v_pin);
end;
$$;

-- ปพ.5 ใช้ดึงข้อมูลได้เฉพาะแอดมิน และคืนรายการแข่งขันรวมในแถวของกรรมการแต่ละคน
create or replace function public.get_sports_official_credentials(p_event_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, private, pg_temp
as $$
begin
  if not private.azizgames_is_admin() then
    raise exception 'ไม่มีสิทธิ์ดูข้อมูลบัญชีกรรมการภาคสนาม' using errcode='42501';
  end if;
  return coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', o.id,
      'event_id', o.event_id,
      'full_name', o.full_name,
      'contact', o.contact,
      'username', o.username,
      'pin', o.pin,
      'status', o.status,
      'created_at', o.created_at,
      'approved_at', o.approved_at,
      'sports', coalesce((
        select jsonb_agg(jsonb_build_object(
          'id', s.id, 'code', s.code, 'name', s.name, 'gender', s.gender
        ) order by s.gender, s.display_order, s.code)
        from public.sports_official_assignments a
        join public.sports s on s.id = a.sport_id
        where a.official_id = o.id and s.is_active is true
      ), '[]'::jsonb)
    ) order by o.created_at desc)
    from public.sports_officials o
    where o.event_id = p_event_id
  ), '[]'::jsonb);
end;
$$;

revoke all on function public.get_sports_official_credentials(uuid) from public;
revoke execute on function public.get_sports_official_credentials(uuid) from anon;
revoke execute on function public.approve_sports_official(uuid,uuid[]) from anon;
grant execute on function public.get_sports_official_credentials(uuid) to authenticated;
grant execute on function public.register_sports_official(uuid,text,text,uuid[]) to anon,authenticated;
grant execute on function public.approve_sports_official(uuid,uuid[]) to authenticated;
notify pgrst, 'reload schema';
