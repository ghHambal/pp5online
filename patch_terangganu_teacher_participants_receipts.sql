-- TERANGGANU 2026: teacher participants/survey, receipt logo and printable rosters.
-- Safe to run repeatedly after patch_terangganu_participants.sql.

alter table public.terangganu_camp_events
  add column if not exists receipt_logo_url text;

create table if not exists public.terangganu_camp_teacher_participants (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  teacher_id integer not null references public.teachers(id) on delete cascade,
  active boolean not null default true,
  added_by uuid references public.profiles(id) on delete set null,
  added_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id,teacher_id)
);

create table if not exists public.terangganu_camp_teacher_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  teacher_id integer not null references public.teachers(id) on delete cascade,
  nickname text not null,
  thai_name text not null,
  english_name text not null,
  passport_number text not null,
  passport_expiry date not null,
  birth_date date not null,
  nationality text not null,
  blood_group text not null check (blood_group in ('A','B','AB','O','ไม่ทราบ')),
  current_address text not null,
  phone text not null,
  shirt_size text not null,
  medical_conditions text not null default 'ไม่มี',
  submitted_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id,teacher_id)
);

create index if not exists terangganu_teacher_participant_teacher_idx
  on public.terangganu_camp_teacher_participants(teacher_id,event_id) where active=true;
create index if not exists terangganu_teacher_registration_teacher_idx
  on public.terangganu_camp_teacher_registrations(teacher_id,event_id);

alter table public.terangganu_camp_teacher_participants enable row level security;
alter table public.terangganu_camp_teacher_registrations enable row level security;

drop policy if exists terangganu_teacher_participant_read on public.terangganu_camp_teacher_participants;
create policy terangganu_teacher_participant_read
on public.terangganu_camp_teacher_participants for select to authenticated using (
  public.terangganu_can(event_id,'view') or teacher_id in (
    select t.id from public.teachers t where t.profile_id=auth.uid()
  )
);

drop policy if exists terangganu_teacher_registration_read on public.terangganu_camp_teacher_registrations;
create policy terangganu_teacher_registration_read
on public.terangganu_camp_teacher_registrations for select to authenticated using (
  public.terangganu_can(event_id,'view') or teacher_id in (
    select t.id from public.teachers t where t.profile_id=auth.uid()
  )
);

revoke all on public.terangganu_camp_teacher_participants from anon,authenticated;
revoke all on public.terangganu_camp_teacher_registrations from anon,authenticated;
grant select on public.terangganu_camp_teacher_participants to authenticated;
grant select on public.terangganu_camp_teacher_registrations to authenticated;

create or replace function public.get_terangganu_access()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_student_id integer;
  v_teacher_id integer;
  v_student_allowed boolean := false;
  v_teacher_participant boolean := false;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  select s.id into v_student_id from public.students s where s.profile_id=auth.uid() and s.is_active=true limit 1;
  select t.id into v_teacher_id from public.teachers t where t.profile_id=auth.uid() limit 1;
  if v_student_id is not null then
    v_student_allowed := v_event.student_visibility_scope='all' or exists(
      select 1 from public.terangganu_camp_participants cp
      where cp.event_id=v_event.id and cp.student_id=v_student_id and cp.active=true
    );
  end if;
  if v_teacher_id is not null then
    v_teacher_participant := exists(
      select 1 from public.terangganu_camp_teacher_participants tp
      where tp.event_id=v_event.id and tp.teacher_id=v_teacher_id and tp.active=true
    );
  end if;
  return jsonb_build_object(
    'event_id',v_event.id,'visible',coalesce(v_event.visible_to_students,false),
    'visibility_scope',v_event.student_visibility_scope,'student_allowed',v_student_allowed,
    'form_open',coalesce(v_event.form_open,false),'is_admin',public.terangganu_is_admin(),
    'teacher_id',v_teacher_id,'teacher_participant',v_teacher_participant,
    'is_manager',public.terangganu_can(v_event.id,'view'),
    'can_settings',public.terangganu_can(v_event.id,'settings'),
    'can_payments',public.terangganu_can(v_event.id,'payments'),
    'can_export',public.terangganu_can(v_event.id,'export')
  );
end;
$$;

create or replace function public.get_my_terangganu_teacher_context()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_teacher public.teachers%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  select * into v_teacher from public.teachers where profile_id=auth.uid() limit 1;
  if v_teacher.id is null then raise exception 'ไม่พบบัญชีครู'; end if;
  if not exists(select 1 from public.terangganu_camp_teacher_participants tp where tp.event_id=v_event.id and tp.teacher_id=v_teacher.id and tp.active=true)
  then raise exception 'ยังไม่มีรายชื่อครูเข้าร่วมค่าย'; end if;
  return jsonb_build_object(
    'event',to_jsonb(v_event)-'updated_by',
    'teacher',jsonb_build_object(
      'id',v_teacher.id,'teacher_code',v_teacher.teacher_code,'full_name',v_teacher.full_name,
      'phone',v_teacher.phone,'image_url',v_teacher.image_url,'dept',v_teacher.dept,
      'subject_group',v_teacher.subject_group,'position',v_teacher.position,'category',v_teacher.category
    ),
    'registration',(select to_jsonb(r)-'teacher_id' from public.terangganu_camp_teacher_registrations r where r.event_id=v_event.id and r.teacher_id=v_teacher.id)
  );
end;
$$;

create or replace function public.save_my_terangganu_teacher_registration(p_payload jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_teacher_id integer;
  v_row public.terangganu_camp_teacher_registrations%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  if not v_event.form_open
    or (v_event.form_open_at is not null and now()<v_event.form_open_at)
    or (v_event.form_close_at is not null and now()>v_event.form_close_at)
  then raise exception 'แบบสำรวจยังไม่เปิดหรือปิดรับข้อมูลแล้ว'; end if;
  select id into v_teacher_id from public.teachers where profile_id=auth.uid() limit 1;
  if v_teacher_id is null then raise exception 'ไม่พบบัญชีครู'; end if;
  if not exists(select 1 from public.terangganu_camp_teacher_participants tp where tp.event_id=v_event.id and tp.teacher_id=v_teacher_id and tp.active=true)
  then raise exception 'ยังไม่มีรายชื่อครูเข้าร่วมค่าย'; end if;
  if nullif(trim(p_payload->>'nickname'),'') is null
    or nullif(trim(p_payload->>'thai_name'),'') is null
    or nullif(trim(p_payload->>'english_name'),'') is null
    or nullif(trim(p_payload->>'passport_number'),'') is null
    or nullif(trim(p_payload->>'nationality'),'') is null
    or nullif(trim(p_payload->>'current_address'),'') is null
    or nullif(trim(p_payload->>'phone'),'') is null
    or nullif(trim(p_payload->>'shirt_size'),'') is null
  then raise exception 'กรุณากรอกข้อมูลที่จำเป็นให้ครบ'; end if;
  insert into public.terangganu_camp_teacher_registrations(
    event_id,teacher_id,nickname,thai_name,english_name,passport_number,passport_expiry,
    birth_date,nationality,blood_group,current_address,phone,shirt_size,medical_conditions
  ) values (
    v_event.id,v_teacher_id,trim(p_payload->>'nickname'),trim(p_payload->>'thai_name'),
    trim(p_payload->>'english_name'),upper(trim(p_payload->>'passport_number')),
    (p_payload->>'passport_expiry')::date,(p_payload->>'birth_date')::date,
    trim(p_payload->>'nationality'),coalesce(nullif(trim(p_payload->>'blood_group'),''),'ไม่ทราบ'),
    trim(p_payload->>'current_address'),trim(p_payload->>'phone'),trim(p_payload->>'shirt_size'),
    coalesce(nullif(trim(p_payload->>'medical_conditions'),''),'ไม่มี')
  ) on conflict(event_id,teacher_id) do update set
    nickname=excluded.nickname,thai_name=excluded.thai_name,english_name=excluded.english_name,
    passport_number=excluded.passport_number,passport_expiry=excluded.passport_expiry,
    birth_date=excluded.birth_date,nationality=excluded.nationality,blood_group=excluded.blood_group,
    current_address=excluded.current_address,phone=excluded.phone,shirt_size=excluded.shirt_size,
    medical_conditions=excluded.medical_conditions,updated_at=now()
  returning * into v_row;
  return to_jsonb(v_row)-'teacher_id';
exception when invalid_text_representation or datetime_field_overflow then
  raise exception 'รูปแบบวันที่หรือข้อมูลไม่ถูกต้อง';
end;
$$;

create or replace function public.add_terangganu_teacher_participants(p_teacher_ids integer[])
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_teacher_id integer;
  v_added integer := 0;
  v_missing integer[] := '{}'::integer[];
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' for update;
  if not public.terangganu_can(v_event.id,'settings') then raise exception 'ไม่มีสิทธิ์เพิ่มรายชื่อครู'; end if;
  if coalesce(array_length(p_teacher_ids,1),0)=0 then raise exception 'กรุณาเลือกครู'; end if;
  foreach v_teacher_id in array p_teacher_ids loop
    if not exists(select 1 from public.teachers t where t.id=v_teacher_id) then
      v_missing:=array_append(v_missing,v_teacher_id); continue;
    end if;
    if not exists(select 1 from public.terangganu_camp_teacher_participants tp where tp.event_id=v_event.id and tp.teacher_id=v_teacher_id and tp.active=true)
    then v_added:=v_added+1; end if;
    insert into public.terangganu_camp_teacher_participants(event_id,teacher_id,active,added_by)
    values(v_event.id,v_teacher_id,true,auth.uid())
    on conflict(event_id,teacher_id) do update set active=true,added_by=auth.uid(),updated_at=now();
  end loop;
  return jsonb_build_object('added_count',v_added,'missing_ids',to_jsonb(v_missing));
end;
$$;

create or replace function public.remove_terangganu_teacher_participant(p_teacher_id integer)
returns jsonb language plpgsql security definer set search_path=public as $$
declare v_event public.terangganu_camp_events%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' for update;
  if not public.terangganu_can(v_event.id,'settings') then raise exception 'ไม่มีสิทธิ์ลบรายชื่อครู'; end if;
  update public.terangganu_camp_teacher_participants set active=false,updated_at=now()
    where event_id=v_event.id and teacher_id=p_teacher_id and active=true;
  if not found then raise exception 'ไม่พบรายชื่อครูในกิจกรรม'; end if;
  return jsonb_build_object('teacher_id',p_teacher_id,'removed',true);
end;
$$;

create or replace function public.get_terangganu_manager_context()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare v_event public.terangganu_camp_events%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  if not public.terangganu_can(v_event.id,'view') then raise exception 'ไม่มีสิทธิ์จัดการระบบค่าย'; end if;
  return jsonb_build_object(
    'access',public.get_terangganu_access(),'event',to_jsonb(v_event),
    'students',coalesce((select jsonb_agg(jsonb_build_object(
      'id',s.id,'student_code',s.student_code,'full_name',s.full_name,'main_room',s.main_room,
      'religion_room',s.religion_room,'gender',s.gender,'image_url',s.image_url
    ) order by s.main_room,s.student_code) from public.students s where s.is_active=true),'[]'::jsonb),
    'participants',coalesce((select jsonb_agg(to_jsonb(cp) order by cp.added_at desc) from public.terangganu_camp_participants cp where cp.event_id=v_event.id and cp.active=true),'[]'::jsonb),
    'registrations',coalesce((select jsonb_agg(to_jsonb(r)) from public.terangganu_camp_registrations r where r.event_id=v_event.id),'[]'::jsonb),
    'payments',coalesce((select jsonb_agg(to_jsonb(p) order by p.paid_at desc) from public.terangganu_camp_payments p where p.event_id=v_event.id),'[]'::jsonb),
    'staff',coalesce((select jsonb_agg(jsonb_build_object(
      'id',cs.id,'teacher_id',cs.teacher_id,'full_name',t.full_name,'teacher_code',t.teacher_code,
      'can_settings',cs.can_settings,'can_payments',cs.can_payments,'can_export',cs.can_export,
      'active',cs.active,'display_name',cs.display_name,'title',cs.title,'signature_url',cs.signature_url
    ) order by t.full_name) from public.terangganu_camp_staff cs join public.teachers t on t.id=cs.teacher_id where cs.event_id=v_event.id),'[]'::jsonb),
    'teachers',coalesce((select jsonb_agg(jsonb_build_object(
      'id',t.id,'full_name',t.full_name,'teacher_code',t.teacher_code,'phone',t.phone,
      'image_url',t.image_url,'dept',t.dept,'subject_group',t.subject_group,
      'position',t.position,'category',t.category,'has_account',(t.profile_id is not null)
    ) order by t.full_name) from public.teachers t),'[]'::jsonb),
    'teacher_participants',coalesce((select jsonb_agg(to_jsonb(tp) order by tp.added_at desc) from public.terangganu_camp_teacher_participants tp where tp.event_id=v_event.id and tp.active=true),'[]'::jsonb),
    'teacher_registrations',coalesce((select jsonb_agg(to_jsonb(tr)) from public.terangganu_camp_teacher_registrations tr where tr.event_id=v_event.id),'[]'::jsonb)
  );
end;
$$;

create or replace function public.update_terangganu_event(p_payload jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare v_event public.terangganu_camp_events%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' for update;
  if not public.terangganu_can(v_event.id,'settings') then raise exception 'ไม่มีสิทธิ์ตั้งค่าระบบค่าย'; end if;
  update public.terangganu_camp_events set
    name=coalesce(nullif(trim(p_payload->>'name'),''),name),
    details=case when p_payload?'details' then nullif(trim(p_payload->>'details'),'') else details end,
    location=case when p_payload?'location' then nullif(trim(p_payload->>'location'),'') else location end,
    event_start_date=case when p_payload?'event_start_date' then nullif(p_payload->>'event_start_date','')::date else event_start_date end,
    event_end_date=case when p_payload?'event_end_date' then nullif(p_payload->>'event_end_date','')::date else event_end_date end,
    form_open=coalesce((p_payload->>'form_open')::boolean,form_open),
    visible_to_students=coalesce((p_payload->>'visible_to_students')::boolean,visible_to_students),
    student_visibility_scope=coalesce(nullif(p_payload->>'student_visibility_scope',''),student_visibility_scope),
    form_open_at=case when p_payload?'form_open_at' then nullif(p_payload->>'form_open_at','')::timestamptz else form_open_at end,
    form_close_at=case when p_payload?'form_close_at' then nullif(p_payload->>'form_close_at','')::timestamptz else form_close_at end,
    deposit_amount=coalesce((p_payload->>'deposit_amount')::numeric,deposit_amount),
    balance_amount=coalesce((p_payload->>'balance_amount')::numeric,balance_amount),
    deposit_due_date=case when p_payload?'deposit_due_date' then nullif(p_payload->>'deposit_due_date','')::date else deposit_due_date end,
    balance_due_date=case when p_payload?'balance_due_date' then nullif(p_payload->>'balance_due_date','')::date else balance_due_date end,
    receipt_prefix=coalesce(nullif(regexp_replace(upper(p_payload->>'receipt_prefix'),'[^A-Z0-9-]','','g'),''),receipt_prefix),
    receipt_logo_url=case when p_payload?'receipt_logo_url' then nullif(trim(p_payload->>'receipt_logo_url'),'') else receipt_logo_url end,
    director_name=case when p_payload?'director_name' then nullif(trim(p_payload->>'director_name'),'') else director_name end,
    director_title=coalesce(nullif(trim(p_payload->>'director_title'),''),director_title),
    director_signature_url=case when p_payload?'director_signature_url' then nullif(trim(p_payload->>'director_signature_url'),'') else director_signature_url end,
    receipt_teacher_id=case when p_payload?'receipt_teacher_id' then nullif(p_payload->>'receipt_teacher_id','')::integer else receipt_teacher_id end,
    updated_by=auth.uid(),updated_at=now()
  where id=v_event.id returning * into v_event;
  insert into public.system_config(key,value,updated_at) values('terangganu_visible_to_students',v_event.visible_to_students::text,now())
  on conflict(key) do update set value=excluded.value,updated_at=excluded.updated_at;
  return to_jsonb(v_event);
end;
$$;

revoke all on function public.get_my_terangganu_teacher_context() from public,anon;
revoke all on function public.save_my_terangganu_teacher_registration(jsonb) from public,anon;
revoke all on function public.add_terangganu_teacher_participants(integer[]) from public,anon;
revoke all on function public.remove_terangganu_teacher_participant(integer) from public,anon;
grant execute on function public.get_my_terangganu_teacher_context() to authenticated;
grant execute on function public.save_my_terangganu_teacher_registration(jsonb) to authenticated;
grant execute on function public.add_terangganu_teacher_participants(integer[]) to authenticated;
grant execute on function public.remove_terangganu_teacher_participant(integer) to authenticated;

drop policy if exists terangganu_signature_insert on storage.objects;
create policy terangganu_signature_insert on storage.objects for insert to authenticated with check (
  bucket_id='terangganu-assets' and (
    (name like 'signatures/'||auth.uid()::text||'/%' and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'view'))
    or (name in ('director-signature.jpg','receipt-logo.jpg') and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'settings'))
  )
);
drop policy if exists terangganu_signature_update on storage.objects;
create policy terangganu_signature_update on storage.objects for update to authenticated using (
  bucket_id='terangganu-assets' and (
    name like 'signatures/'||auth.uid()::text||'/%'
    or (name in ('director-signature.jpg','receipt-logo.jpg') and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'settings'))
  )
) with check (
  bucket_id='terangganu-assets' and (
    name like 'signatures/'||auth.uid()::text||'/%'
    or (name in ('director-signature.jpg','receipt-logo.jpg') and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'settings'))
  )
);

do $$ begin
  if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='terangganu_camp_teacher_participants') then
    alter publication supabase_realtime add table public.terangganu_camp_teacher_participants;
  end if;
  if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='terangganu_camp_teacher_registrations') then
    alter publication supabase_realtime add table public.terangganu_camp_teacher_registrations;
  end if;
end $$;
