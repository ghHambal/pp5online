-- เพิ่มความสามารถให้แอดมิน/ครูผู้รับผิดชอบ (can_settings) กรอก/แก้ไขแบบสำรวจแทนนักเรียนได้เอง
-- ใช้แก้ปัญหานักเรียน ม.1/ม.2 ที่เข้าไม่ถึงระบบ (ไม่มีมือถือ/เข้าเรียนไม่ได้) ทำให้การสำรวจล่าช้า

create or replace function public.save_terangganu_registration_for_student(p_student_id integer, p_payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_row public.terangganu_camp_registrations%rowtype;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' limit 1;
  if not public.terangganu_can(v_event.id,'settings') then
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
