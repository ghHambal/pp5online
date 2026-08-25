-- เพิ่มบทบาท "ผู้ช่วยกรอกข้อมูลแทนนักเรียน" (helper) แยกต่างหากจาก "ผู้รับผิดชอบ" (staff)
-- เหตุผล: การเพิ่มครูเป็น "ผู้รับผิดชอบ" (terangganu_camp_staff) ให้สิทธิ์เห็นทั้ง Manager
-- dashboard (ภาพรวม/กำหนดการ/นักเรียน/ครูร่วมค่าย/แบบสำรวจ ฯลฯ) เพราะ terangganu_can()
-- คืน true ให้ทุก permission ที่ไม่ใช่ settings/payments/export แค่มีแถวใน staff ก็พอ —
-- กว้างเกินความต้องการจริงที่แค่ "อยากให้กรอกแทนได้เท่านั้น" จึงแยกตารางสิทธิ์ใหม่ที่แคบกว่า

create table if not exists public.terangganu_camp_helpers (
  id bigint generated always as identity primary key,
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  teacher_id integer not null references public.teachers(id) on delete cascade,
  active boolean not null default true,
  assigned_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  unique(event_id, teacher_id)
);
alter table public.terangganu_camp_helpers enable row level security;
comment on table public.terangganu_camp_helpers is 'ครูที่ได้รับมอบหมายให้กรอก/แก้ไขแบบสำรวจแทนนักเรียนได้เท่านั้น (ไม่ใช่ผู้รับผิดชอบ/staff เต็มรูปแบบ)';

-- มอบหมาย/ถอดสิทธิ์ผู้ช่วยกรอกข้อมูล — เฉพาะผู้ที่มี can_settings (ผู้รับผิดชอบตัวจริง) เท่านั้นที่มอบหมายได้
create or replace function public.assign_terangganu_helper(p_teacher_id integer, p_active boolean default true)
returns void
language plpgsql
security definer
set search_path to 'public'
as $function$
declare v_event public.terangganu_camp_events%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  if not public.terangganu_can(v_event.id,'settings') then
    raise exception 'ไม่มีสิทธิ์มอบหมายผู้ช่วยกรอกข้อมูล';
  end if;
  insert into public.terangganu_camp_helpers(event_id, teacher_id, active, assigned_by)
  values (v_event.id, p_teacher_id, p_active, auth.uid())
  on conflict(event_id, teacher_id) do update set active=excluded.active, assigned_by=excluded.assigned_by;
end;
$function$;

-- รายชื่อผู้ช่วยกรอกข้อมูลปัจจุบัน (สำหรับหน้าตั้งค่า/ผู้รับผิดชอบ)
create or replace function public.get_terangganu_helpers()
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare v_event public.terangganu_camp_events%rowtype; v_result jsonb;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  if not public.terangganu_can(v_event.id,'settings') then
    raise exception 'ไม่มีสิทธิ์ดูรายชื่อผู้ช่วยกรอกข้อมูล';
  end if;
  select coalesce(jsonb_agg(jsonb_build_object(
    'teacher_id', h.teacher_id, 'active', h.active,
    'full_name', t.full_name, 'teacher_code', t.teacher_code
  ) order by t.full_name), '[]'::jsonb) into v_result
  from public.terangganu_camp_helpers h
  join public.teachers t on t.id = h.teacher_id
  where h.event_id = v_event.id;
  return v_result;
end;
$function$;

-- get_terangganu_access(): เพิ่ม field is_helper (ครูที่ auth.uid() ผูกอยู่ เป็นผู้ช่วยกรอกข้อมูลที่ active)
create or replace function public.get_terangganu_access()
returns jsonb
language plpgsql
stable
security definer
set search_path to 'public'
as $function$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_student_id integer;
  v_teacher_id integer;
  v_student_allowed boolean := false;
  v_teacher_participant boolean := false;
  v_is_helper boolean := false;
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
    v_is_helper := exists(
      select 1 from public.terangganu_camp_helpers h
      where h.event_id=v_event.id and h.teacher_id=v_teacher_id and h.active=true
    );
  end if;
  return jsonb_build_object(
    'event_id',v_event.id,'visible',coalesce(v_event.visible_to_students,false),
    'visibility_scope',v_event.student_visibility_scope,'student_allowed',v_student_allowed,
    'form_open',coalesce(v_event.form_open,false),'is_admin',public.terangganu_is_admin(),
    'teacher_id',v_teacher_id,'teacher_participant',v_teacher_participant,
    'is_manager',public.terangganu_can(v_event.id,'view'),
    'is_helper',v_is_helper,
    'can_settings',public.terangganu_can(v_event.id,'settings'),
    'can_payments',public.terangganu_can(v_event.id,'payments'),
    'can_export',public.terangganu_can(v_event.id,'export')
  );
end;
$function$;

-- รายชื่อนักเรียนแบบย่อสำหรับผู้ช่วยกรอกข้อมูล (ชื่อ/รหัส/ห้อง/สถานะกรอกเท่านั้น — ไม่มีข้อมูลอ่อนไหวอื่น)
create or replace function public.get_terangganu_helper_students()
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare v_event public.terangganu_camp_events%rowtype; v_teacher_id integer; v_result jsonb;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  select t.id into v_teacher_id from public.teachers t where t.profile_id=auth.uid() limit 1;
  if v_teacher_id is null or not exists(
    select 1 from public.terangganu_camp_helpers h where h.event_id=v_event.id and h.teacher_id=v_teacher_id and h.active=true
  ) then
    raise exception 'ไม่มีสิทธิ์เข้าถึงรายชื่อนักเรียน';
  end if;
  select coalesce(jsonb_agg(jsonb_build_object(
    'student_id', s.id, 'student_code', s.student_code, 'full_name', s.full_name,
    'main_room', s.main_room, 'gender', s.gender, 'filled', (r.student_id is not null)
  ) order by s.main_room, s.student_code), '[]'::jsonb) into v_result
  from public.terangganu_camp_participants cp
  join public.students s on s.id = cp.student_id
  left join public.terangganu_camp_registrations r on r.event_id=cp.event_id and r.student_id=cp.student_id
  where cp.event_id = v_event.id and cp.active = true;
  return v_result;
end;
$function$;

-- ข้อมูลนักเรียนคนเดียวแบบเต็ม สำหรับเปิดฟอร์มกรอกแทน (เปิดเผยข้อมูลอ่อนไหวเฉพาะตอนกำลังจะกรอกแทนจริง)
create or replace function public.get_terangganu_student_for_helper_fill(p_student_id integer)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_teacher_id integer;
  v_student jsonb;
  v_registration jsonb;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  select t.id into v_teacher_id from public.teachers t where t.profile_id=auth.uid() limit 1;
  if v_teacher_id is null or not exists(
    select 1 from public.terangganu_camp_helpers h where h.event_id=v_event.id and h.teacher_id=v_teacher_id and h.active=true
  ) then
    raise exception 'ไม่มีสิทธิ์เข้าถึงข้อมูลนักเรียนคนนี้';
  end if;
  if not exists(select 1 from public.terangganu_camp_participants cp where cp.event_id=v_event.id and cp.student_id=p_student_id and cp.active=true) then
    raise exception 'นักเรียนคนนี้ไม่อยู่ในรายชื่อผู้เข้าร่วมค่าย';
  end if;
  select to_jsonb(s) into v_student from public.students s where s.id=p_student_id;
  select to_jsonb(r)-'student_id' into v_registration from public.terangganu_camp_registrations r where r.event_id=v_event.id and r.student_id=p_student_id;
  return jsonb_build_object('student', v_student, 'registration', v_registration, 'event', to_jsonb(v_event));
end;
$function$;

-- save_terangganu_registration_for_student: อนุญาตให้ helper (ไม่ใช่แค่ can_settings) กรอกแทนได้ด้วย
create or replace function public.save_terangganu_registration_for_student(p_student_id integer, p_payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_row public.terangganu_camp_registrations%rowtype;
  v_teacher_id integer;
  v_is_helper boolean := false;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  select t.id into v_teacher_id from public.teachers t where t.profile_id=auth.uid() limit 1;
  if v_teacher_id is not null then
    v_is_helper := exists(
      select 1 from public.terangganu_camp_helpers h
      where h.event_id=v_event.id and h.teacher_id=v_teacher_id and h.active=true
    );
  end if;
  if not public.terangganu_can(v_event.id,'settings') and not v_is_helper then
    raise exception 'ไม่มีสิทธิ์กรอกข้อมูลแทนนักเรียน';
  end if;
  if not exists(
    select 1 from public.terangganu_camp_participants cp
    where cp.event_id=v_event.id and cp.student_id=p_student_id and cp.active=true
  ) then
    raise exception 'นักเรียนคนนี้ยังไม่อยู่ในรายชื่อผู้เข้าร่วมค่าย';
  end if;
  if nullif(trim(p_payload->>'nickname'),'') is null
    or nullif(trim(p_payload->>'thai_name'),'') is null
    or nullif(trim(p_payload->>'english_title'),'') is null
    or nullif(trim(p_payload->>'english_name'),'') is null
    or nullif(trim(p_payload->>'national_id'),'') is null
    or nullif(trim(p_payload->>'nationality'),'') is null
    or nullif(trim(p_payload->>'current_address'),'') is null
    or nullif(trim(p_payload->>'phone'),'') is null
    or nullif(trim(p_payload->>'shirt_size'),'') is null then
    raise exception 'กรุณากรอกข้อมูลที่จำเป็นให้ครบ';
  end if;
  if v_event.passport_required and (
    nullif(trim(p_payload->>'passport_number'),'') is null
    or nullif(p_payload->>'passport_expiry','') is null
  ) then
    raise exception 'กรุณากรอกเลขที่และวันหมดอายุหนังสือเดินทางให้ครบ';
  end if;
  if trim(p_payload->>'national_id') !~ '^[0-9]{13}$' then
    raise exception 'เลขประจำตัวประชาชนต้องเป็นตัวเลข 13 หลัก';
  end if;
  insert into public.terangganu_camp_registrations(
    event_id,student_id,nickname,thai_name,english_title,english_name,national_id,passport_number,passport_expiry,
    birth_date,nationality,blood_group,current_address,phone,shirt_size,medical_conditions
  ) values (
    v_event.id,p_student_id,trim(p_payload->>'nickname'),trim(p_payload->>'thai_name'),
    trim(p_payload->>'english_title'),upper(trim(p_payload->>'english_name')),trim(p_payload->>'national_id'),
    nullif(upper(trim(p_payload->>'passport_number')),''),
    nullif(p_payload->>'passport_expiry','')::date,(p_payload->>'birth_date')::date,
    trim(p_payload->>'nationality'),coalesce(nullif(trim(p_payload->>'blood_group'),''),'ไม่ทราบ'),
    trim(p_payload->>'current_address'),trim(p_payload->>'phone'),trim(p_payload->>'shirt_size'),
    coalesce(nullif(trim(p_payload->>'medical_conditions'),''),'ไม่มี')
  ) on conflict(event_id,student_id) do update set
    nickname=excluded.nickname,thai_name=excluded.thai_name,english_title=excluded.english_title,english_name=excluded.english_name,
    national_id=excluded.national_id,passport_number=excluded.passport_number,passport_expiry=excluded.passport_expiry,
    birth_date=excluded.birth_date,nationality=excluded.nationality,blood_group=excluded.blood_group,
    current_address=excluded.current_address,phone=excluded.phone,shirt_size=excluded.shirt_size,
    medical_conditions=excluded.medical_conditions,updated_at=now()
  returning * into v_row;
  return to_jsonb(v_row)-'student_id';
exception when invalid_text_representation or datetime_field_overflow then
  raise exception 'รูปแบบวันที่หรือข้อมูลไม่ถูกต้อง';
end;
$function$;
