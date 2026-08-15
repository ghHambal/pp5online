-- TERANGGANU 2026 camp survey, payment and receipt module for PP5 Online.
-- Safe to run repeatedly.

create table if not exists public.terangganu_camp_events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null default 'ค่ายลูกเสือ TERANGGANU 2026',
  details text,
  location text,
  event_start_date date,
  event_end_date date,
  form_open boolean not null default false,
  visible_to_students boolean not null default false,
  form_open_at timestamptz,
  form_close_at timestamptz,
  deposit_amount numeric(10,2) not null default 1000 check (deposit_amount >= 0),
  balance_amount numeric(10,2) not null default 2500 check (balance_amount >= 0),
  deposit_due_date date,
  balance_due_date date,
  receipt_prefix text not null default 'TRG26',
  director_name text,
  director_title text not null default 'ผู้อำนวยการโรงเรียนมูลนิธิอาซิซสถาน',
  director_signature_url text,
  receipt_teacher_id integer references public.teachers(id) on delete set null,
  updated_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.terangganu_camp_events(slug)
values ('terangganu-2026')
on conflict (slug) do nothing;

create table if not exists public.terangganu_camp_staff (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  teacher_id integer not null references public.teachers(id) on delete cascade,
  can_settings boolean not null default true,
  can_payments boolean not null default true,
  can_export boolean not null default true,
  active boolean not null default true,
  display_name text,
  title text not null default 'ครูผู้รับผิดชอบ',
  signature_url text,
  assigned_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id, teacher_id)
);

create table if not exists public.terangganu_camp_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  student_id integer not null references public.students(id) on delete cascade,
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
  unique(event_id, student_id)
);

create sequence if not exists public.terangganu_receipt_seq;

create table if not exists public.terangganu_camp_payments (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  student_id integer not null references public.students(id) on delete cascade,
  installment_type text not null check (installment_type in ('deposit','balance')),
  amount numeric(10,2) not null check (amount > 0),
  payment_method text not null default 'cash' check (payment_method in ('cash','transfer','other')),
  paid_at timestamptz not null default now(),
  collected_by uuid not null default auth.uid() references public.profiles(id) on delete restrict,
  receipt_seq bigint not null default nextval('public.terangganu_receipt_seq'),
  receipt_no text not null unique,
  receipt_snapshot jsonb not null default '{}'::jsonb,
  note text,
  voided_at timestamptz,
  voided_by uuid references public.profiles(id) on delete set null,
  void_reason text,
  created_at timestamptz not null default now()
);

create unique index if not exists terangganu_active_installment_unique
  on public.terangganu_camp_payments(event_id, student_id, installment_type)
  where voided_at is null;
create index if not exists terangganu_registration_student_idx
  on public.terangganu_camp_registrations(student_id, event_id);
create index if not exists terangganu_payment_student_idx
  on public.terangganu_camp_payments(student_id, event_id, paid_at desc);

create or replace function public.terangganu_is_admin()
returns boolean language sql stable security definer set search_path=public as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and (p.role = 'admin' or p.is_also_admin is true)
  );
$$;

create or replace function public.terangganu_can(p_event uuid, p_permission text default 'view')
returns boolean language sql stable security definer set search_path=public as $$
  select public.terangganu_is_admin() or exists (
    select 1
    from public.terangganu_camp_staff cs
    join public.teachers t on t.id = cs.teacher_id
    where cs.event_id = p_event and cs.active is true and t.profile_id = auth.uid()
      and case p_permission
        when 'settings' then cs.can_settings
        when 'payments' then cs.can_payments
        when 'export' then cs.can_export
        else true
      end
  );
$$;

alter table public.terangganu_camp_events enable row level security;
alter table public.terangganu_camp_staff enable row level security;
alter table public.terangganu_camp_registrations enable row level security;
alter table public.terangganu_camp_payments enable row level security;

drop policy if exists terangganu_event_read on public.terangganu_camp_events;
create policy terangganu_event_read on public.terangganu_camp_events
for select to authenticated using (true);

drop policy if exists terangganu_staff_read on public.terangganu_camp_staff;
create policy terangganu_staff_read on public.terangganu_camp_staff
for select to authenticated using (
  public.terangganu_can(event_id, 'view') or teacher_id in (
    select t.id from public.teachers t where t.profile_id = auth.uid()
  )
);

drop policy if exists terangganu_registration_read on public.terangganu_camp_registrations;
create policy terangganu_registration_read on public.terangganu_camp_registrations
for select to authenticated using (
  public.terangganu_can(event_id, 'view') or student_id in (
    select s.id from public.students s where s.profile_id = auth.uid()
  )
);

drop policy if exists terangganu_payment_read on public.terangganu_camp_payments;
create policy terangganu_payment_read on public.terangganu_camp_payments
for select to authenticated using (
  public.terangganu_can(event_id, 'view') or student_id in (
    select s.id from public.students s where s.profile_id = auth.uid()
  )
);

revoke all on public.terangganu_camp_events from anon, authenticated;
revoke all on public.terangganu_camp_staff from anon, authenticated;
revoke all on public.terangganu_camp_registrations from anon, authenticated;
revoke all on public.terangganu_camp_payments from anon, authenticated;
grant select on public.terangganu_camp_events to authenticated;
grant select on public.terangganu_camp_staff to authenticated;
grant select on public.terangganu_camp_registrations to authenticated;
grant select on public.terangganu_camp_payments to authenticated;

create or replace function public.get_terangganu_access()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare v_event public.terangganu_camp_events%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  return jsonb_build_object(
    'event_id', v_event.id,
    'visible', coalesce(v_event.visible_to_students,false),
    'form_open', coalesce(v_event.form_open,false),
    'is_admin', public.terangganu_is_admin(),
    'teacher_id', (select t.id from public.teachers t where t.profile_id=auth.uid() limit 1),
    'is_manager', public.terangganu_can(v_event.id,'view'),
    'can_settings', public.terangganu_can(v_event.id,'settings'),
    'can_payments', public.terangganu_can(v_event.id,'payments'),
    'can_export', public.terangganu_can(v_event.id,'export')
  );
end;
$$;

create or replace function public.get_my_terangganu_context()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_student public.students%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  select * into v_student from public.students where profile_id=auth.uid() and is_active=true limit 1;
  if v_student.id is null then raise exception 'ไม่พบบัญชีนักเรียน'; end if;
  return jsonb_build_object(
    'event', to_jsonb(v_event) - 'updated_by',
    'student', jsonb_build_object(
      'id',v_student.id,'student_code',v_student.student_code,'full_name',v_student.full_name,
      'main_room',v_student.main_room,'religion_room',v_student.religion_room,
      'gender',v_student.gender,'image_url',v_student.image_url
    ),
    'registration', (select to_jsonb(r) - 'student_id' from public.terangganu_camp_registrations r where r.event_id=v_event.id and r.student_id=v_student.id),
    'payments', coalesce((select jsonb_agg(to_jsonb(p) order by p.paid_at) from public.terangganu_camp_payments p where p.event_id=v_event.id and p.student_id=v_student.id and p.voided_at is null),'[]'::jsonb)
  );
end;
$$;

create or replace function public.save_my_terangganu_registration(p_payload jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_student_id integer;
  v_row public.terangganu_camp_registrations%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  if not v_event.form_open
     or (v_event.form_open_at is not null and now() < v_event.form_open_at)
     or (v_event.form_close_at is not null and now() > v_event.form_close_at) then
    raise exception 'แบบสำรวจยังไม่เปิดหรือปิดรับข้อมูลแล้ว';
  end if;
  select id into v_student_id from public.students where profile_id=auth.uid() and is_active=true limit 1;
  if v_student_id is null then raise exception 'ไม่พบบัญชีนักเรียน'; end if;
  if nullif(trim(p_payload->>'nickname'),'') is null
    or nullif(trim(p_payload->>'thai_name'),'') is null
    or nullif(trim(p_payload->>'english_name'),'') is null
    or nullif(trim(p_payload->>'passport_number'),'') is null
    or nullif(trim(p_payload->>'nationality'),'') is null
    or nullif(trim(p_payload->>'current_address'),'') is null
    or nullif(trim(p_payload->>'phone'),'') is null
    or nullif(trim(p_payload->>'shirt_size'),'') is null then
    raise exception 'กรุณากรอกข้อมูลที่จำเป็นให้ครบ';
  end if;
  insert into public.terangganu_camp_registrations(
    event_id,student_id,nickname,thai_name,english_name,passport_number,passport_expiry,
    birth_date,nationality,blood_group,current_address,phone,shirt_size,medical_conditions
  ) values (
    v_event.id,v_student_id,trim(p_payload->>'nickname'),trim(p_payload->>'thai_name'),
    trim(p_payload->>'english_name'),upper(trim(p_payload->>'passport_number')),
    (p_payload->>'passport_expiry')::date,(p_payload->>'birth_date')::date,
    trim(p_payload->>'nationality'),coalesce(nullif(trim(p_payload->>'blood_group'),''),'ไม่ทราบ'),
    trim(p_payload->>'current_address'),trim(p_payload->>'phone'),trim(p_payload->>'shirt_size'),
    coalesce(nullif(trim(p_payload->>'medical_conditions'),''),'ไม่มี')
  ) on conflict(event_id,student_id) do update set
    nickname=excluded.nickname,thai_name=excluded.thai_name,english_name=excluded.english_name,
    passport_number=excluded.passport_number,passport_expiry=excluded.passport_expiry,
    birth_date=excluded.birth_date,nationality=excluded.nationality,blood_group=excluded.blood_group,
    current_address=excluded.current_address,phone=excluded.phone,shirt_size=excluded.shirt_size,
    medical_conditions=excluded.medical_conditions,updated_at=now()
  returning * into v_row;
  return to_jsonb(v_row) - 'student_id';
exception when invalid_text_representation or datetime_field_overflow then
  raise exception 'รูปแบบวันที่หรือข้อมูลไม่ถูกต้อง';
end;
$$;

create or replace function public.get_terangganu_manager_context()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare v_event public.terangganu_camp_events%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  if not public.terangganu_can(v_event.id,'view') then raise exception 'ไม่มีสิทธิ์จัดการระบบค่าย'; end if;
  return jsonb_build_object(
    'access', public.get_terangganu_access(),
    'event', to_jsonb(v_event),
    'students', coalesce((select jsonb_agg(jsonb_build_object(
      'id',s.id,'student_code',s.student_code,'full_name',s.full_name,'main_room',s.main_room,
      'religion_room',s.religion_room,'gender',s.gender,'image_url',s.image_url
    ) order by s.main_room,s.student_code) from public.students s where s.is_active=true),'[]'::jsonb),
    'registrations', coalesce((select jsonb_agg(to_jsonb(r)) from public.terangganu_camp_registrations r where r.event_id=v_event.id),'[]'::jsonb),
    'payments', coalesce((select jsonb_agg(to_jsonb(p) order by p.paid_at desc) from public.terangganu_camp_payments p where p.event_id=v_event.id),'[]'::jsonb),
    'staff', coalesce((select jsonb_agg(jsonb_build_object(
      'id',cs.id,'teacher_id',cs.teacher_id,'full_name',t.full_name,'teacher_code',t.teacher_code,
      'can_settings',cs.can_settings,'can_payments',cs.can_payments,'can_export',cs.can_export,
      'active',cs.active,'display_name',cs.display_name,'title',cs.title,'signature_url',cs.signature_url
    ) order by t.full_name) from public.terangganu_camp_staff cs join public.teachers t on t.id=cs.teacher_id where cs.event_id=v_event.id),'[]'::jsonb),
    'teachers', coalesce((select jsonb_agg(jsonb_build_object('id',t.id,'full_name',t.full_name,'teacher_code',t.teacher_code) order by t.full_name) from public.teachers t where t.profile_id is not null),'[]'::jsonb)
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
    details=case when p_payload ? 'details' then nullif(trim(p_payload->>'details'),'') else details end,
    location=case when p_payload ? 'location' then nullif(trim(p_payload->>'location'),'') else location end,
    event_start_date=case when p_payload ? 'event_start_date' then nullif(p_payload->>'event_start_date','')::date else event_start_date end,
    event_end_date=case when p_payload ? 'event_end_date' then nullif(p_payload->>'event_end_date','')::date else event_end_date end,
    form_open=coalesce((p_payload->>'form_open')::boolean,form_open),
    visible_to_students=coalesce((p_payload->>'visible_to_students')::boolean,visible_to_students),
    form_open_at=case when p_payload ? 'form_open_at' then nullif(p_payload->>'form_open_at','')::timestamptz else form_open_at end,
    form_close_at=case when p_payload ? 'form_close_at' then nullif(p_payload->>'form_close_at','')::timestamptz else form_close_at end,
    deposit_amount=coalesce((p_payload->>'deposit_amount')::numeric,deposit_amount),
    balance_amount=coalesce((p_payload->>'balance_amount')::numeric,balance_amount),
    deposit_due_date=case when p_payload ? 'deposit_due_date' then nullif(p_payload->>'deposit_due_date','')::date else deposit_due_date end,
    balance_due_date=case when p_payload ? 'balance_due_date' then nullif(p_payload->>'balance_due_date','')::date else balance_due_date end,
    receipt_prefix=coalesce(nullif(regexp_replace(upper(p_payload->>'receipt_prefix'),'[^A-Z0-9-]','','g'),''),receipt_prefix),
    director_name=case when p_payload ? 'director_name' then nullif(trim(p_payload->>'director_name'),'') else director_name end,
    director_title=coalesce(nullif(trim(p_payload->>'director_title'),''),director_title),
    director_signature_url=case when p_payload ? 'director_signature_url' then nullif(trim(p_payload->>'director_signature_url'),'') else director_signature_url end,
    receipt_teacher_id=case when p_payload ? 'receipt_teacher_id' then nullif(p_payload->>'receipt_teacher_id','')::integer else receipt_teacher_id end,
    updated_by=auth.uid(),updated_at=now()
  where id=v_event.id returning * into v_event;
  insert into public.system_config(key,value,updated_at) values
    ('terangganu_visible_to_students',v_event.visible_to_students::text,now())
  on conflict(key) do update set value=excluded.value,updated_at=excluded.updated_at;
  return to_jsonb(v_event);
end;
$$;

create or replace function public.assign_terangganu_staff(
  p_teacher_id integer,p_active boolean default true,p_can_settings boolean default true,
  p_can_payments boolean default true,p_can_export boolean default true
) returns boolean language plpgsql security definer set search_path=public as $$
declare v_event_id uuid;
begin
  if not public.terangganu_is_admin() then raise exception 'เฉพาะแอดมินที่มอบหมายครูได้'; end if;
  select id into v_event_id from public.terangganu_camp_events where slug='terangganu-2026';
  insert into public.terangganu_camp_staff(event_id,teacher_id,active,can_settings,can_payments,can_export,assigned_by)
  values(v_event_id,p_teacher_id,p_active,p_can_settings,p_can_payments,p_can_export,auth.uid())
  on conflict(event_id,teacher_id) do update set active=excluded.active,can_settings=excluded.can_settings,
    can_payments=excluded.can_payments,can_export=excluded.can_export,assigned_by=auth.uid(),updated_at=now();
  return true;
end;
$$;

create or replace function public.update_my_terangganu_signature(p_signature_url text,p_display_name text,p_title text)
returns boolean language plpgsql security definer set search_path=public as $$
declare v_event_id uuid;
begin
  select id into v_event_id from public.terangganu_camp_events where slug='terangganu-2026';
  update public.terangganu_camp_staff cs set signature_url=nullif(trim(p_signature_url),''),
    display_name=nullif(trim(p_display_name),''),title=coalesce(nullif(trim(p_title),''),'ครูผู้รับผิดชอบ'),updated_at=now()
  from public.teachers t where cs.event_id=v_event_id and cs.teacher_id=t.id and t.profile_id=auth.uid() and cs.active=true;
  if not found and not public.terangganu_is_admin() then raise exception 'ไม่ได้รับมอบหมายให้ดูแลระบบค่าย'; end if;
  return found;
end;
$$;

create or replace function public.record_terangganu_payment(
  p_student_id integer,p_installment_type text,p_payment_method text default 'cash',p_note text default null
) returns jsonb language plpgsql security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_payment public.terangganu_camp_payments%rowtype;
  v_amount numeric; v_teacher public.teachers%rowtype; v_staff public.terangganu_camp_staff%rowtype;
  v_receipt_no text; v_seq bigint;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' for update;
  if not public.terangganu_can(v_event.id,'payments') then raise exception 'ไม่มีสิทธิ์บันทึกรับชำระ'; end if;
  if p_installment_type not in ('deposit','balance') then raise exception 'ประเภทงวดไม่ถูกต้อง'; end if;
  if p_payment_method not in ('cash','transfer','other') then raise exception 'วิธีชำระไม่ถูกต้อง'; end if;
  if not exists(select 1 from public.terangganu_camp_registrations r where r.event_id=v_event.id and r.student_id=p_student_id) then
    raise exception 'นักเรียนยังไม่ได้ส่งแบบสำรวจ';
  end if;
  select * into v_teacher from public.teachers where id=coalesce(v_event.receipt_teacher_id,
    (select t.id from public.teachers t where t.profile_id=auth.uid() limit 1)) limit 1;
  select * into v_staff from public.terangganu_camp_staff where event_id=v_event.id and teacher_id=v_teacher.id and active=true limit 1;
  if nullif(v_event.director_signature_url,'') is null then raise exception 'กรุณาตั้งค่าลายเซ็นผู้อำนวยการก่อนรับชำระ'; end if;
  if nullif(v_staff.signature_url,'') is null then raise exception 'กรุณาตั้งค่าลายเซ็นครูผู้รับผิดชอบก่อนรับชำระ'; end if;
  v_amount := case when p_installment_type='deposit' then v_event.deposit_amount else v_event.balance_amount end;
  v_seq := nextval('public.terangganu_receipt_seq');
  v_receipt_no := v_event.receipt_prefix || '-' || lpad(v_seq::text,6,'0');
  insert into public.terangganu_camp_payments(event_id,student_id,installment_type,amount,payment_method,
    collected_by,receipt_seq,receipt_no,receipt_snapshot,note)
  values(v_event.id,p_student_id,p_installment_type,v_amount,p_payment_method,auth.uid(),v_seq,v_receipt_no,
    jsonb_build_object('event_name',v_event.name,'location',v_event.location,
      'director_name',v_event.director_name,'director_title',v_event.director_title,
      'director_signature_url',v_event.director_signature_url,
      'teacher_name',coalesce(v_staff.display_name,v_teacher.full_name),'teacher_title',v_staff.title,
      'teacher_signature_url',v_staff.signature_url),nullif(trim(p_note),''))
  returning * into v_payment;
  return to_jsonb(v_payment);
exception when unique_violation then raise exception 'นักเรียนชำระงวดนี้แล้ว';
end;
$$;

create or replace function public.void_terangganu_payment(p_payment_id uuid,p_reason text)
returns boolean language plpgsql security definer set search_path=public as $$
declare v_event_id uuid;
begin
  select event_id into v_event_id from public.terangganu_camp_payments where id=p_payment_id and voided_at is null;
  if v_event_id is null or not public.terangganu_can(v_event_id,'payments') then raise exception 'ไม่มีสิทธิ์ยกเลิกรายการ'; end if;
  if nullif(trim(p_reason),'') is null then raise exception 'กรุณาระบุเหตุผลการยกเลิก'; end if;
  update public.terangganu_camp_payments set voided_at=now(),voided_by=auth.uid(),void_reason=trim(p_reason) where id=p_payment_id and voided_at is null;
  return found;
end;
$$;

revoke all on function public.terangganu_is_admin() from public,anon;
revoke all on function public.terangganu_can(uuid,text) from public,anon;
revoke all on function public.get_terangganu_access() from public,anon;
revoke all on function public.get_my_terangganu_context() from public,anon;
revoke all on function public.save_my_terangganu_registration(jsonb) from public,anon;
revoke all on function public.get_terangganu_manager_context() from public,anon;
revoke all on function public.update_terangganu_event(jsonb) from public,anon;
revoke all on function public.assign_terangganu_staff(integer,boolean,boolean,boolean,boolean) from public,anon;
revoke all on function public.update_my_terangganu_signature(text,text,text) from public,anon;
revoke all on function public.record_terangganu_payment(integer,text,text,text) from public,anon;
revoke all on function public.void_terangganu_payment(uuid,text) from public,anon;
grant execute on function public.get_terangganu_access() to authenticated;
grant execute on function public.get_my_terangganu_context() to authenticated;
grant execute on function public.save_my_terangganu_registration(jsonb) to authenticated;
grant execute on function public.get_terangganu_manager_context() to authenticated;
grant execute on function public.update_terangganu_event(jsonb) to authenticated;
grant execute on function public.assign_terangganu_staff(integer,boolean,boolean,boolean,boolean) to authenticated;
grant execute on function public.update_my_terangganu_signature(text,text,text) to authenticated;
grant execute on function public.record_terangganu_payment(integer,text,text,text) to authenticated;
grant execute on function public.void_terangganu_payment(uuid,text) to authenticated;

do $$ begin
  if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='terangganu_camp_registrations') then
    alter publication supabase_realtime add table public.terangganu_camp_registrations;
  end if;
  if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='terangganu_camp_payments') then
    alter publication supabase_realtime add table public.terangganu_camp_payments;
  end if;
  if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='terangganu_camp_events') then
    alter publication supabase_realtime add table public.terangganu_camp_events;
  end if;
end $$;

insert into public.system_config(key,value) values ('terangganu_visible_to_students','false')
on conflict(key) do nothing;

-- Keep camp signatures in a dedicated public bucket. Public read access is
-- needed by printable receipts, while write access remains role/path scoped.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('terangganu-assets','terangganu-assets',true,5242880,array['image/jpeg','image/png','image/webp'])
on conflict(id) do update set public=excluded.public,file_size_limit=excluded.file_size_limit,
  allowed_mime_types=excluded.allowed_mime_types;

drop policy if exists terangganu_signature_insert on storage.objects;
create policy terangganu_signature_insert on storage.objects
for insert to authenticated with check (
  bucket_id='terangganu-assets' and (
    (
      name like ('signatures/' || auth.uid()::text || '/%')
      and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'view')
    )
    or (
      name='director-signature.jpg'
      and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'settings')
    )
  )
);

drop policy if exists terangganu_signature_select on storage.objects;
create policy terangganu_signature_select on storage.objects
for select to authenticated using (
  bucket_id='terangganu-assets' and (
    name like ('signatures/' || auth.uid()::text || '/%')
    or (
      name='director-signature.jpg'
      and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'settings')
    )
  )
);

drop policy if exists terangganu_signature_update on storage.objects;
create policy terangganu_signature_update on storage.objects
for update to authenticated using (
  bucket_id='terangganu-assets' and (
    name like ('signatures/' || auth.uid()::text || '/%')
    or (
      name='director-signature.jpg'
      and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'settings')
    )
  )
) with check (
  bucket_id='terangganu-assets' and (
    name like ('signatures/' || auth.uid()::text || '/%')
    or (
      name='director-signature.jpg'
      and public.terangganu_can((select id from public.terangganu_camp_events where slug='terangganu-2026'),'settings')
    )
  )
);
