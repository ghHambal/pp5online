-- TERANGGANU bulk payment collection with one receipt per student.
-- Requires patch_terangganu_camp.sql and patch_terangganu_participants.sql.

create or replace function public.record_terangganu_payments_bulk(
  p_student_ids integer[],
  p_installment_type text,
  p_payment_method text default 'cash',
  p_note text default null
) returns jsonb
language plpgsql
security definer
set search_path=public
as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_teacher public.teachers%rowtype;
  v_staff public.terangganu_camp_staff%rowtype;
  v_payment public.terangganu_camp_payments%rowtype;
  v_student_id integer;
  v_amount numeric;
  v_seq bigint;
  v_added integer := 0;
  v_skipped integer := 0;
  v_invalid integer[] := '{}'::integer[];
  v_receipts jsonb := '[]'::jsonb;
begin
  select * into v_event
  from public.terangganu_camp_events
  where slug='terangganu-2026'
  for update;

  if auth.uid() is null or not public.terangganu_can(v_event.id,'payments') then
    raise exception 'ไม่มีสิทธิ์บันทึกรับชำระ';
  end if;
  if coalesce(cardinality(p_student_ids),0)=0 then raise exception 'กรุณาเลือกนักเรียนอย่างน้อย 1 คน'; end if;
  if cardinality(p_student_ids)>500 then raise exception 'เลือกนักเรียนได้ไม่เกิน 500 คนต่อครั้ง'; end if;
  if p_installment_type not in ('deposit','balance') then raise exception 'ประเภทงวดไม่ถูกต้อง'; end if;
  if p_payment_method not in ('cash','transfer','other') then raise exception 'วิธีชำระไม่ถูกต้อง'; end if;

  select * into v_teacher from public.teachers
  where id=coalesce(v_event.receipt_teacher_id,(select t.id from public.teachers t where t.profile_id=auth.uid() limit 1))
  limit 1;
  select * into v_staff from public.terangganu_camp_staff
  where event_id=v_event.id and teacher_id=v_teacher.id and active=true limit 1;
  if nullif(v_event.director_signature_url,'') is null then raise exception 'กรุณาตั้งค่าลายเซ็นผู้อำนวยการก่อนรับชำระ'; end if;
  if v_teacher.id is null or nullif(v_staff.signature_url,'') is null then raise exception 'กรุณาตั้งค่าลายเซ็นครูผู้ลงนามก่อนรับชำระ'; end if;

  v_amount := case when p_installment_type='deposit' then v_event.deposit_amount else v_event.balance_amount end;

  for v_student_id in select distinct unnest(p_student_ids)
  loop
    if not exists(select 1 from public.students s where s.id=v_student_id and s.is_active=true)
       or not (
         exists(select 1 from public.terangganu_camp_participants cp where cp.event_id=v_event.id and cp.student_id=v_student_id and cp.active=true)
         or exists(select 1 from public.terangganu_camp_registrations r where r.event_id=v_event.id and r.student_id=v_student_id)
       ) then
      v_invalid := array_append(v_invalid,v_student_id);
      continue;
    end if;

    if exists(
      select 1 from public.terangganu_camp_payments p
      where p.event_id=v_event.id and p.student_id=v_student_id
        and p.installment_type=p_installment_type and p.voided_at is null
    ) then
      v_skipped := v_skipped+1;
      continue;
    end if;

    v_seq := nextval('public.terangganu_receipt_seq');
    insert into public.terangganu_camp_payments(
      event_id,student_id,installment_type,amount,payment_method,collected_by,
      receipt_seq,receipt_no,receipt_snapshot,note
    ) values (
      v_event.id,v_student_id,p_installment_type,v_amount,p_payment_method,auth.uid(),v_seq,
      v_event.receipt_prefix||'-'||lpad(v_seq::text,6,'0'),
      jsonb_build_object(
        'event_name',v_event.name,'location',v_event.location,
        'director_name',v_event.director_name,'director_title',v_event.director_title,
        'director_signature_url',v_event.director_signature_url,
        'teacher_name',coalesce(v_staff.display_name,v_teacher.full_name),
        'teacher_title',v_staff.title,'teacher_signature_url',v_staff.signature_url
      ),
      nullif(trim(p_note),'')
    ) returning * into v_payment;
    v_receipts := v_receipts||jsonb_build_array(jsonb_build_object(
      'id',v_payment.id,'student_id',v_payment.student_id,'receipt_no',v_payment.receipt_no
    ));
    v_added := v_added+1;
  end loop;

  return jsonb_build_object(
    'added_count',v_added,
    'skipped_count',v_skipped,
    'invalid_student_ids',to_jsonb(v_invalid),
    'receipts',v_receipts
  );
end;
$$;

revoke all on function public.record_terangganu_payments_bulk(integer[],text,text,text) from public,anon;
grant execute on function public.record_terangganu_payments_bulk(integer[],text,text,text) to authenticated;

-- Single-person collection follows the same rule as bulk collection:
-- an active participant can pay before submitting the survey.
create or replace function public.record_terangganu_payment(
  p_student_id integer,
  p_installment_type text,
  p_payment_method text default 'cash',
  p_note text default null
) returns jsonb
language plpgsql
security definer
set search_path=public
as $$
declare
  v_event public.terangganu_camp_events%rowtype;
  v_payment public.terangganu_camp_payments%rowtype;
  v_amount numeric;
  v_teacher public.teachers%rowtype;
  v_staff public.terangganu_camp_staff%rowtype;
  v_receipt_no text;
  v_seq bigint;
begin
  select * into v_event from public.terangganu_camp_events where slug='terangganu-2026' for update;
  if auth.uid() is null or not public.terangganu_can(v_event.id,'payments') then raise exception 'ไม่มีสิทธิ์บันทึกรับชำระ'; end if;
  if p_installment_type not in ('deposit','balance') then raise exception 'ประเภทงวดไม่ถูกต้อง'; end if;
  if p_payment_method not in ('cash','transfer','other') then raise exception 'วิธีชำระไม่ถูกต้อง'; end if;
  if not (
    exists(select 1 from public.terangganu_camp_participants cp where cp.event_id=v_event.id and cp.student_id=p_student_id and cp.active=true)
    or exists(select 1 from public.terangganu_camp_registrations r where r.event_id=v_event.id and r.student_id=p_student_id)
  ) then raise exception 'นักเรียนยังไม่มีรายชื่อเข้าร่วมค่าย'; end if;

  select * into v_teacher from public.teachers where id=coalesce(v_event.receipt_teacher_id,
    (select t.id from public.teachers t where t.profile_id=auth.uid() limit 1)) limit 1;
  select * into v_staff from public.terangganu_camp_staff where event_id=v_event.id and teacher_id=v_teacher.id and active=true limit 1;
  if nullif(v_event.director_signature_url,'') is null then raise exception 'กรุณาตั้งค่าลายเซ็นผู้อำนวยการก่อนรับชำระ'; end if;
  if v_teacher.id is null or nullif(v_staff.signature_url,'') is null then raise exception 'กรุณาตั้งค่าลายเซ็นครูผู้ลงนามก่อนรับชำระ'; end if;

  v_amount := case when p_installment_type='deposit' then v_event.deposit_amount else v_event.balance_amount end;
  v_seq := nextval('public.terangganu_receipt_seq');
  v_receipt_no := v_event.receipt_prefix||'-'||lpad(v_seq::text,6,'0');
  insert into public.terangganu_camp_payments(
    event_id,student_id,installment_type,amount,payment_method,collected_by,
    receipt_seq,receipt_no,receipt_snapshot,note
  ) values (
    v_event.id,p_student_id,p_installment_type,v_amount,p_payment_method,auth.uid(),v_seq,v_receipt_no,
    jsonb_build_object(
      'event_name',v_event.name,'location',v_event.location,
      'director_name',v_event.director_name,'director_title',v_event.director_title,
      'director_signature_url',v_event.director_signature_url,
      'teacher_name',coalesce(v_staff.display_name,v_teacher.full_name),
      'teacher_title',v_staff.title,'teacher_signature_url',v_staff.signature_url
    ),nullif(trim(p_note),'')
  ) returning * into v_payment;
  return to_jsonb(v_payment);
exception when unique_violation then raise exception 'นักเรียนชำระงวดนี้แล้ว';
end;
$$;

revoke all on function public.record_terangganu_payment(integer,text,text,text) from public,anon;
grant execute on function public.record_terangganu_payment(integer,text,text,text) to authenticated;
