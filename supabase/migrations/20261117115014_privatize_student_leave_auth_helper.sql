-- Keep SECURITY DEFINER authorization and review routines outside the exposed public API schema.

create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated;

create or replace function private._can_review_student_leave(p_student_id integer)
returns boolean
language sql stable security definer
set search_path = ''
as $$
  select auth.uid() is not null and (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid())
        and (p.role = 'admin' or p.is_also_admin is true)
    )
    or exists (
      select 1
      from public.students s
      join public.homeroom_teachers h
        on h.main_room = case when h.category = 'ศาสนา' then s.religion_room else s.main_room end
      join public.teachers t on t.id = h.teacher_id
      join public.system_config ay on ay.key = 'academicYear' and ay.value = h.academic_year::text
      join public.system_config sem on sem.key = 'semester' and sem.value = h.semester::text
      where s.id = p_student_id and t.profile_id = (select auth.uid())
    )
  );
$$;
revoke all on function private._can_review_student_leave(integer) from public, anon;
grant execute on function private._can_review_student_leave(integer) to authenticated;

drop policy if exists student_leave_requests_read_self_or_advisor on public.student_leave_requests;
create policy student_leave_requests_read_self_or_advisor
  on public.student_leave_requests for select to authenticated
  using (
    exists (select 1 from public.students s where s.id = student_id and s.profile_id = (select auth.uid()))
    or private._can_review_student_leave(student_id)
  );

drop policy if exists student_leave_proofs_owner_or_advisor_read on storage.objects;
create policy student_leave_proofs_owner_or_advisor_read
  on storage.objects for select to authenticated
  using (
    bucket_id = 'student-leave-proofs'
    and exists (
      select 1 from public.student_leave_requests r
      where r.proof_path = name
        and (
          exists (select 1 from public.students s where s.id = r.student_id and s.profile_id = (select auth.uid()))
          or private._can_review_student_leave(r.student_id)
        )
    )
  );

revoke all on function public._can_review_student_leave(integer) from public, anon, authenticated;
drop function public._can_review_student_leave(integer);

create or replace function private.review_student_leave_request(
  p_request_id bigint,
  p_status text,
  p_teacher_comment text default null,
  p_attendance_rows jsonb default '[]'::jsonb
)
returns jsonb
language plpgsql security definer
set search_path = ''
as $$
declare
  v_request public.student_leave_requests%rowtype;
  v_rows jsonb;
  v_rows_count integer := 0;
  v_row_count integer := 0;
  v_row jsonb;
  v_class_id integer;
  v_session_number integer;
  v_check_date date;
  v_period_no integer;
  v_attendance_status text;
begin
  if auth.uid() is null or p_status is null or p_status not in ('approved', 'rejected') then
    raise exception 'invalid request' using errcode = '22023';
  end if;

  select * into v_request
  from public.student_leave_requests
  where id = p_request_id
  for update;
  if not found then raise exception 'leave request not found' using errcode = 'P0002'; end if;
  if not private._can_review_student_leave(v_request.student_id) then
    raise exception 'not authorized to review this leave request' using errcode = '42501';
  end if;
  if v_request.status <> 'pending' then
    raise exception 'leave request has already been reviewed' using errcode = '55000';
  end if;
  if p_status = 'approved' and not exists (
    select 1 from storage.objects o
    where o.bucket_id = 'student-leave-proofs' and o.name = v_request.proof_path
  ) then
    raise exception 'approved leave slip is missing' using errcode = '22023';
  end if;
  if p_status = 'approved' and exists (
    select 1 from public.student_leave_requests other
    where other.student_id = v_request.student_id and other.id <> v_request.id
      and other.status = 'approved'
      and other.start_date <= v_request.end_date and other.end_date >= v_request.start_date
  ) then
    raise exception 'an approved leave already covers these dates' using errcode = '55000';
  end if;

  if p_status = 'approved' then
    if jsonb_typeof(coalesce(p_attendance_rows, '[]'::jsonb)) <> 'array'
       or jsonb_array_length(coalesce(p_attendance_rows, '[]'::jsonb)) > 300 then
      raise exception 'invalid attendance rows' using errcode = '22023';
    end if;
    v_rows := coalesce(p_attendance_rows, '[]'::jsonb);
    v_attendance_status := v_request.leave_type;

    for v_row in select value from jsonb_array_elements(v_rows)
    loop
      v_class_id := nullif(v_row->>'class_id','')::integer;
      v_session_number := nullif(v_row->>'session_number','')::integer;
      v_check_date := nullif(v_row->>'check_date','')::date;
      v_period_no := nullif(v_row->>'period_no','')::integer;
      if v_class_id is null or v_session_number is null or v_session_number < 1
         or v_check_date is null or v_check_date < v_request.start_date or v_check_date > v_request.end_date
         or (v_period_no is not null and (v_period_no < 1 or v_period_no > 20)) then
        raise exception 'invalid attendance row' using errcode = '22023';
      end if;
      if not exists (
        select 1 from public.class_students cs
        join public.classes c on c.id = cs.class_id
        where cs.student_id = v_request.student_id and cs.is_active
          and (c.id = v_class_id or c.source_class_id = v_class_id)
      ) then
        raise exception 'student is not enrolled in attendance class' using errcode = '42501';
      end if;

      insert into public.attendances (class_id, student_id, session_number, check_date, period_no, status, leave_request_id)
      values (v_class_id, v_request.student_id, v_session_number, v_check_date, v_period_no, v_attendance_status, v_request.id)
      on conflict (class_id, student_id, session_number) do update
        set check_date = excluded.check_date,
            period_no = coalesce(excluded.period_no, public.attendances.period_no),
            status = excluded.status,
            leave_request_id = excluded.leave_request_id
        where public.attendances.check_date = excluded.check_date
          and (public.attendances.status is null
            or public.attendances.status = 'absent'
            or public.attendances.status in ('excused', 'sick')
            or public.attendances.status = excluded.status);
      get diagnostics v_row_count = row_count;
      v_rows_count := v_rows_count + v_row_count;
    end loop;
  elsif jsonb_typeof(coalesce(p_attendance_rows, '[]'::jsonb)) <> 'array'
     or jsonb_array_length(coalesce(p_attendance_rows, '[]'::jsonb)) <> 0 then
    raise exception 'rejected requests cannot change attendance' using errcode = '22023';
  end if;

  update public.student_leave_requests
  set status = p_status,
      teacher_comment = nullif(btrim(p_teacher_comment),''),
      reviewed_by = (select auth.uid()),
      reviewed_at = now(),
      attendance_rows_count = v_rows_count,
      attendance_applied_at = case when p_status = 'approved' then now() else null end,
      proof_delete_after = case
        when p_status = 'approved' then greatest(now() + interval '7 days', ((v_request.end_date + 8)::timestamp at time zone 'Asia/Bangkok'))
        else now() + interval '7 days'
      end
  where id = p_request_id;

  return jsonb_build_object('id', p_request_id, 'status', p_status, 'attendance_rows_count', v_rows_count);
end;
$$;
revoke all on function private.review_student_leave_request(bigint, text, text, jsonb) from public, anon;
grant execute on function private.review_student_leave_request(bigint, text, text, jsonb) to authenticated;

drop function if exists public.review_student_leave_request(bigint, text, text, jsonb);
create function public.review_student_leave_request(
  p_request_id bigint,
  p_status text,
  p_teacher_comment text default null,
  p_attendance_rows jsonb default '[]'::jsonb
)
returns jsonb
language sql security invoker
set search_path = ''
as $$
  select private.review_student_leave_request(p_request_id, p_status, p_teacher_comment, p_attendance_rows);
$$;
revoke all on function public.review_student_leave_request(bigint, text, text, jsonb) from public, anon;
grant execute on function public.review_student_leave_request(bigint, text, text, jsonb) to authenticated;
