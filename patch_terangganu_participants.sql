-- TERANGGANU participant allow-list, bulk deposit import and visibility scope.
-- Requires patch_terangganu_camp.sql. Safe to run repeatedly.

alter table public.terangganu_camp_events
  add column if not exists student_visibility_scope text not null default 'participants';

do $$ begin
  if not exists (
    select 1 from pg_constraint where conname='terangganu_visibility_scope_check'
  ) then
    alter table public.terangganu_camp_events
      add constraint terangganu_visibility_scope_check
      check (student_visibility_scope in ('all','participants'));
  end if;
end $$;

create table if not exists public.terangganu_camp_participants (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  student_id integer not null references public.students(id) on delete cascade,
  active boolean not null default true,
  added_by uuid references public.profiles(id) on delete set null,
  added_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(event_id,student_id)
);

create index if not exists terangganu_participant_student_idx
  on public.terangganu_camp_participants(student_id,event_id) where active=true;

alter table public.terangganu_camp_participants enable row level security;
drop policy if exists terangganu_participant_read on public.terangganu_camp_participants;
create policy terangganu_participant_read on public.terangganu_camp_participants
for select to authenticated using (
  public.terangganu_can(event_id,'view') or student_id in (
    select s.id from public.students s where s.profile_id=auth.uid()
  )
);
revoke all on public.terangganu_camp_participants from anon,authenticated;
grant select on public.terangganu_camp_participants to authenticated;

create or replace function public.get_terangganu_access()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_student_id integer;
  v_student_allowed boolean := false;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  select s.id into v_student_id from public.students s where s.profile_id=auth.uid() and s.is_active=true limit 1;
  if v_student_id is not null then
    v_student_allowed := v_event.student_visibility_scope='all' or exists(
      select 1 from public.terangganu_camp_participants cp
      where cp.event_id=v_event.id and cp.student_id=v_student_id and cp.active=true
    );
  end if;
  return jsonb_build_object(
    'event_id',v_event.id,
    'visible',coalesce(v_event.visible_to_students,false),
    'visibility_scope',v_event.student_visibility_scope,
    'student_allowed',v_student_allowed,
    'form_open',coalesce(v_event.form_open,false),
    'is_admin',public.terangganu_is_admin(),
    'teacher_id',(select t.id from public.teachers t where t.profile_id=auth.uid() limit 1),
    'is_manager',public.terangganu_can(v_event.id,'view'),
    'can_settings',public.terangganu_can(v_event.id,'settings'),
    'can_payments',public.terangganu_can(v_event.id,'payments'),
    'can_export',public.terangganu_can(v_event.id,'export')
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
  if v_event.student_visibility_scope='participants' and not exists(
    select 1 from public.terangganu_camp_participants cp
    where cp.event_id=v_event.id and cp.student_id=v_student.id and cp.active=true
  ) then raise exception 'ยังไม่มีรายชื่อเข้าร่วมค่าย'; end if;
  return jsonb_build_object(
    'event',to_jsonb(v_event)-'updated_by',
    'student',jsonb_build_object(
      'id',v_student.id,'student_code',v_student.student_code,'full_name',v_student.full_name,
      'main_room',v_student.main_room,'religion_room',v_student.religion_room,
      'gender',v_student.gender,'image_url',v_student.image_url
    ),
    'registration',(select to_jsonb(r)-'student_id' from public.terangganu_camp_registrations r where r.event_id=v_event.id and r.student_id=v_student.id),
    'payments',coalesce((select jsonb_agg(to_jsonb(p) order by p.paid_at) from public.terangganu_camp_payments p where p.event_id=v_event.id and p.student_id=v_student.id and p.voided_at is null),'[]'::jsonb)
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
     or (v_event.form_open_at is not null and now()<v_event.form_open_at)
     or (v_event.form_close_at is not null and now()>v_event.form_close_at) then
    raise exception 'แบบสำรวจยังไม่เปิดหรือปิดรับข้อมูลแล้ว';
  end if;
  select id into v_student_id from public.students where profile_id=auth.uid() and is_active=true limit 1;
  if v_student_id is null then raise exception 'ไม่พบบัญชีนักเรียน'; end if;
  if v_event.student_visibility_scope='participants' and not exists(
    select 1 from public.terangganu_camp_participants cp
    where cp.event_id=v_event.id and cp.student_id=v_student_id and cp.active=true
  ) then raise exception 'ยังไม่มีรายชื่อเข้าร่วมค่าย'; end if;
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
  return to_jsonb(v_row)-'student_id';
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
    'access',public.get_terangganu_access(),
    'event',to_jsonb(v_event),
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
    'teachers',coalesce((select jsonb_agg(jsonb_build_object('id',t.id,'full_name',t.full_name,'teacher_code',t.teacher_code) order by t.full_name) from public.teachers t where t.profile_id is not null),'[]'::jsonb)
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

create or replace function public.add_terangganu_participants(p_student_codes text,p_mark_deposit_paid boolean default true)
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_teacher public.teachers%rowtype;
  v_staff public.terangganu_camp_staff%rowtype;
  v_student public.students%rowtype;
  v_code text;
  v_seq bigint;
  v_new_participants integer:=0;
  v_matched integer:=0;
  v_payments_added integer:=0;
  v_missing text[]:='{}'::text[];
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' for update;
  if not public.terangganu_can(v_event.id,'settings') then raise exception 'ไม่มีสิทธิ์เพิ่มรายชื่อนักเรียน'; end if;
  if nullif(trim(p_student_codes),'') is null then raise exception 'กรุณากรอกรหัสนักเรียน'; end if;
  if p_mark_deposit_paid then
    if not public.terangganu_can(v_event.id,'payments') then raise exception 'ไม่มีสิทธิ์บันทึกรับชำระ'; end if;
    select * into v_teacher from public.teachers where id=v_event.receipt_teacher_id limit 1;
    select * into v_staff from public.terangganu_camp_staff where event_id=v_event.id and teacher_id=v_teacher.id and active=true limit 1;
    if nullif(v_event.director_name,'') is null then raise exception 'กรุณาระบุชื่อผู้อำนวยการก่อนนำเข้ารายการชำระ'; end if;
    if nullif(v_event.director_signature_url,'') is null then raise exception 'กรุณาบันทึกลายเซ็นผู้อำนวยการก่อนนำเข้ารายการชำระ'; end if;
    if v_teacher.id is null or nullif(v_staff.signature_url,'') is null then raise exception 'กรุณาเลือกและบันทึกลายเซ็นครูผู้ลงนามก่อนนำเข้ารายการชำระ'; end if;
  end if;
  for v_code in
    select distinct trim(x) from regexp_split_to_table(trim(p_student_codes),'[[:space:],;]+') x where trim(x)<>''
  loop
    select * into v_student from public.students where student_code=v_code and is_active=true limit 1;
    if v_student.id is null then v_missing:=array_append(v_missing,v_code); continue; end if;
    v_matched:=v_matched+1;
    if not exists(select 1 from public.terangganu_camp_participants cp where cp.event_id=v_event.id and cp.student_id=v_student.id and cp.active=true) then
      v_new_participants:=v_new_participants+1;
    end if;
    insert into public.terangganu_camp_participants(event_id,student_id,active,added_by)
    values(v_event.id,v_student.id,true,auth.uid())
    on conflict(event_id,student_id) do update set active=true,added_by=auth.uid(),updated_at=now();
    if p_mark_deposit_paid and not exists(
      select 1 from public.terangganu_camp_payments p where p.event_id=v_event.id and p.student_id=v_student.id and p.installment_type='deposit' and p.voided_at is null
    ) then
      v_seq:=nextval('public.terangganu_receipt_seq');
      insert into public.terangganu_camp_payments(event_id,student_id,installment_type,amount,payment_method,
        collected_by,receipt_seq,receipt_no,receipt_snapshot,note)
      values(v_event.id,v_student.id,'deposit',v_event.deposit_amount,'other',auth.uid(),v_seq,
        v_event.receipt_prefix||'-'||lpad(v_seq::text,6,'0'),
        jsonb_build_object('event_name',v_event.name,'location',v_event.location,
          'director_name',v_event.director_name,'director_title',v_event.director_title,
          'director_signature_url',v_event.director_signature_url,
          'teacher_name',coalesce(v_staff.display_name,v_teacher.full_name),'teacher_title',v_staff.title,
          'teacher_signature_url',v_staff.signature_url),
        'นำเข้ารายชื่อนักเรียนที่ชำระค่ามัดจำแล้ว');
      v_payments_added:=v_payments_added+1;
    end if;
  end loop;
  return jsonb_build_object('matched_count',v_matched,'new_participants',v_new_participants,
    'payments_added',v_payments_added,'missing_codes',to_jsonb(v_missing));
end;
$$;

revoke all on function public.add_terangganu_participants(text,boolean) from public,anon;
grant execute on function public.add_terangganu_participants(text,boolean) to authenticated;

do $$ begin
  if not exists(select 1 from pg_publication_tables where pubname='supabase_realtime' and schemaname='public' and tablename='terangganu_camp_participants') then
    alter publication supabase_realtime add table public.terangganu_camp_participants;
  end if;
end $$;
