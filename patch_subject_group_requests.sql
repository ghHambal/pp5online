-- ฟีเจอร์: นักเรียนขอย้ายวิชาข้ามกลุ่มสามัญ/ศาสนาเอง (บางวิชาศาสนาตามหลักสูตรฝ่ายทะเบียน
-- จัดรหัส subject_group เป็นสามัญผิดกลุ่ม) ต้องผ่านแอดมินอนุมัติก่อนมีผลจริง และแอดมินเลือกได้เอง
-- ว่าจะให้มีผลกับ "ห้องไหนบ้าง" ในระดับชั้นเดียวกัน (ไม่ใช่บังคับทั้งระดับชั้นเสมอ เพราะแต่ละ
-- ระดับชั้นมีโปรแกรม/ห้องเรียนต่างกัน)

-- 1) override ต่อห้องเรียน — ถ้ามีค่านี้ ให้ใช้แทนการคำนวณจาก subject_group/teachers.category ปกติ
alter table classes add column if not exists subject_group_override text
  check (subject_group_override in ('samai','sasana'));

-- 2) ตารางคำขอ
create table if not exists subject_group_requests (
  id serial primary key,
  student_id int not null references students(id) on delete cascade,
  class_id int not null references classes(id) on delete cascade,
  subject_code text,
  subject_name text,
  class_level text,
  current_group text not null,
  requested_group text not null check (requested_group in ('samai','sasana')),
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  reviewed_by uuid references profiles(id),
  reviewed_at timestamptz,
  admin_comment text,
  applied_class_ids int[],
  created_at timestamptz not null default now()
);
create index if not exists idx_subject_group_requests_status on subject_group_requests(status);
create unique index if not exists uq_subject_group_requests_pending
  on subject_group_requests(student_id, class_id) where status = 'pending';

alter table subject_group_requests enable row level security;

drop policy if exists sgr_student_select on subject_group_requests;
create policy sgr_student_select on subject_group_requests for select to authenticated
  using (exists (select 1 from students s where s.id = student_id and s.profile_id = auth.uid()));

drop policy if exists sgr_admin_all on subject_group_requests;
create policy sgr_admin_all on subject_group_requests for all to authenticated
  using (
    exists (select 1 from profiles p where p.id = auth.uid() and (p.role = 'admin' or p.is_also_admin = true))
  )
  with check (
    exists (select 1 from profiles p where p.id = auth.uid() and (p.role = 'admin' or p.is_also_admin = true))
  );

-- 3) นักเรียนยื่นคำขอ — คำนวณ subject_code/current_group/class_level ฝั่งเซิร์ฟเวอร์เอง ไม่เชื่อ client
create or replace function public.request_subject_group_change(p_class_id int, p_requested_group text)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  v_student_id int;
  v_ms record;
  v_current_group text;
  v_class_level text;
  v_new_id int;
begin
  if p_requested_group not in ('samai','sasana') then
    raise exception 'requested_group ไม่ถูกต้อง';
  end if;

  select s.id into v_student_id from students s where s.profile_id = auth.uid();
  if v_student_id is null then
    raise exception 'ไม่พบข้อมูลนักเรียนของผู้ใช้นี้';
  end if;

  if not exists (
    select 1 from class_students cs where cs.class_id = p_class_id and cs.student_id = v_student_id
  ) then
    raise exception 'ไม่ได้ลงทะเบียนวิชานี้';
  end if;

  select ms.subject_code, ms.subject_name, ms.subject_group, t.category as teacher_category,
         c.class_name, c.subject_group_override
  into v_ms
  from classes c
  join master_subjects ms on ms.id = c.course_id
  left join teachers t on t.id = ms.teacher_id
  where c.id = p_class_id;

  if v_ms is null then
    raise exception 'ไม่พบข้อมูลวิชา';
  end if;

  v_current_group := case
    when v_ms.subject_group_override is not null then v_ms.subject_group_override
    when v_ms.teacher_category = 'ศาสนา' or v_ms.subject_group in ('AGM','AGMVOC') then 'sasana'
    else 'samai'
  end;

  if v_current_group = p_requested_group then
    raise exception 'วิชานี้อยู่ในกลุ่มนี้อยู่แล้ว';
  end if;

  v_class_level := split_part(v_ms.class_name, '/', 1);

  insert into subject_group_requests
    (student_id, class_id, subject_code, subject_name, class_level, current_group, requested_group)
  values
    (v_student_id, p_class_id, v_ms.subject_code, v_ms.subject_name, v_class_level, v_current_group, p_requested_group)
  on conflict (student_id, class_id) where status = 'pending' do nothing
  returning id into v_new_id;

  if v_new_id is null then
    raise exception 'มีคำขอย้ายกลุ่มของวิชานี้ที่รอตรวจสอบอยู่แล้ว';
  end if;

  return v_new_id;
end;
$$;

-- 4) แอดมินดูห้องผู้สมัครใจ (วิชารหัสเดียวกัน + ระดับชั้นเดียวกัน) เพื่อเลือกว่าจะใช้ผลกับห้องไหนบ้าง
create or replace function public.get_candidate_classes_for_group_request(p_request_id int)
returns table(class_id int, class_name text, current_group text, student_count bigint)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
  v_req record;
begin
  select (p.role = 'admin' or p.is_also_admin) into v_is_admin from profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then
    raise exception 'forbidden';
  end if;

  select * into v_req from subject_group_requests where id = p_request_id;
  if v_req is null then raise exception 'ไม่พบคำขอ'; end if;

  return query
  select c.id, c.class_name,
    (case
      when c.subject_group_override is not null then c.subject_group_override
      when t.category = 'ศาสนา' or ms.subject_group in ('AGM','AGMVOC') then 'sasana'
      else 'samai'
    end)::text as current_group,
    (select count(*) from class_students cs where cs.class_id = c.id) as student_count
  from classes c
  join master_subjects ms on ms.id = c.course_id
  left join teachers t on t.id = ms.teacher_id
  where ms.subject_code = v_req.subject_code
    and split_part(c.class_name, '/', 1) = v_req.class_level
  order by c.class_name;
end;
$$;

-- 5) แอดมินอนุมัติ — เลือกห้องที่จะให้มีผลได้อิสระ (ไม่บังคับทั้งระดับชั้น)
create or replace function public.approve_subject_group_request(p_request_id int, p_class_ids int[])
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
  v_req record;
begin
  select (p.role = 'admin' or p.is_also_admin) into v_is_admin from profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then raise exception 'forbidden'; end if;

  select * into v_req from subject_group_requests where id = p_request_id and status = 'pending';
  if v_req is null then raise exception 'ไม่พบคำขอที่รอตรวจสอบ'; end if;

  update classes set subject_group_override = v_req.requested_group
  where id = any(p_class_ids);

  update subject_group_requests
  set status = 'approved', reviewed_by = auth.uid(), reviewed_at = now(), applied_class_ids = p_class_ids
  where id = p_request_id;
end;
$$;

-- 6) แอดมินปฏิเสธ
create or replace function public.reject_subject_group_request(p_request_id int, p_comment text default null)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_is_admin boolean;
begin
  select (p.role = 'admin' or p.is_also_admin) into v_is_admin from profiles p where p.id = auth.uid();
  if not coalesce(v_is_admin, false) then raise exception 'forbidden'; end if;

  update subject_group_requests
  set status = 'rejected', reviewed_by = auth.uid(), reviewed_at = now(), admin_comment = p_comment
  where id = p_request_id and status = 'pending';
end;
$$;
