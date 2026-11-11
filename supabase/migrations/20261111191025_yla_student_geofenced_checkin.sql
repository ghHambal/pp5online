-- Student self check-in for council YLA events.
alter table public.council_yla_events
  add column if not exists checkin_enabled boolean not null default false,
  add column if not exists checkin_opens_at timestamptz,
  add column if not exists checkin_closes_at timestamptz,
  add column if not exists checkin_latitude double precision,
  add column if not exists checkin_longitude double precision,
  add column if not exists checkin_radius_meters integer not null default 100;

alter table public.council_yla_events
  add constraint council_yla_events_checkin_range_check
  check (checkin_radius_meters between 10 and 1000),
  add constraint council_yla_events_checkin_location_check
  check (
    (checkin_latitude is null and checkin_longitude is null)
    or (checkin_latitude between -90 and 90 and checkin_longitude between -180 and 180)
  ),
  add constraint council_yla_events_checkin_window_check
  check (checkin_closes_at is null or checkin_opens_at is null or checkin_closes_at > checkin_opens_at),
  add constraint council_yla_events_checkin_enabled_config_check
  check (
    not checkin_enabled
    or (checkin_opens_at is not null and checkin_closes_at is not null
      and checkin_latitude is not null and checkin_longitude is not null)
  );

alter table public.council_yla_attendance
  add column if not exists checkin_latitude double precision,
  add column if not exists checkin_longitude double precision,
  add column if not exists checkin_accuracy_m double precision,
  add column if not exists checkin_source text not null default 'staff';

alter table public.council_yla_attendance
  add constraint council_yla_attendance_checkin_source_check
  check (checkin_source in ('staff', 'gps'));

drop policy if exists council_yla_attendance_student_checkin on public.council_yla_attendance;
create policy council_yla_attendance_student_checkin
  on public.council_yla_attendance
  for insert to authenticated
  with check (
    checkin_source = 'gps'
    and attendance_state = 'present'
    and session_label = 'เช็คอินกิจกรรม'
    and recorded_by_teacher_id is null
    and exists (
      select 1 from public.students s
      where s.id = council_yla_attendance.student_id
        and s.profile_id = (select auth.uid())
    )
    and exists (
      select 1 from public.council_yla_participants p
      where p.event_id = council_yla_attendance.event_id
        and p.student_id = council_yla_attendance.student_id
        and p.status = 'registered'
    )
  );

create or replace function public.validate_council_yla_student_checkin()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  v_event public.council_yla_events%rowtype;
  v_student_id integer;
  v_distance_m double precision;
  v_now timestamptz := statement_timestamp();
begin
  -- Staff attendance is still handled by the existing staff-only write policy.
  if public.get_user_role() = any (array['admin', 'teacher']) then
    return new;
  end if;

  select s.id into v_student_id
  from public.students s
  where s.profile_id = (select auth.uid());
  if v_student_id is null or new.student_id <> v_student_id then
    raise exception 'เช็คอินได้เฉพาะบัญชีนักเรียนของตนเอง';
  end if;

  if new.checkin_source <> 'gps' or new.session_label <> 'เช็คอินกิจกรรม' then
    raise exception 'รูปแบบการเช็คอินไม่ถูกต้อง';
  end if;
  if new.attendance_state <> 'present' or new.recorded_by_teacher_id is not null then
    raise exception 'ข้อมูลการเช็คอินไม่ถูกต้อง';
  end if;
  if new.checkin_latitude is null or new.checkin_longitude is null
     or new.checkin_accuracy_m is null or new.checkin_accuracy_m < 0
     or new.checkin_accuracy_m > 100 then
    raise exception 'ตำแหน่ง GPS ไม่แม่นยำพอ กรุณาเปิดตำแหน่งแล้วลองอีกครั้ง';
  end if;
  if new.checkin_latitude not between -90 and 90 or new.checkin_longitude not between -180 and 180 then
    raise exception 'พิกัด GPS ไม่ถูกต้อง';
  end if;

  select e.* into v_event
  from public.council_yla_events e
  where e.id = new.event_id;
  if not found then raise exception 'ไม่พบกิจกรรมนี้'; end if;
  if not v_event.checkin_enabled
     or v_event.checkin_opens_at is null or v_event.checkin_closes_at is null
     or v_event.checkin_latitude is null or v_event.checkin_longitude is null then
    raise exception 'กิจกรรมนี้ยังไม่ได้เปิดตั้งค่าเช็คอิน';
  end if;
  if v_event.status not in ('planned', 'active') then
    raise exception 'กิจกรรมนี้ยังไม่เปิดให้เช็คอิน';
  end if;
  if v_now < v_event.checkin_opens_at or v_now > v_event.checkin_closes_at then
    raise exception 'ยังไม่ถึงเวลาเช็คอิน หรือหมดเวลาเช็คอินแล้ว';
  end if;
  if not exists (
    select 1 from public.council_yla_participants p
    where p.event_id = new.event_id and p.student_id = v_student_id and p.status = 'registered'
  ) then
    raise exception 'ไม่พบรายชื่อของคุณในผู้เข้าร่วมกิจกรรม กรุณาติดต่อผู้ดูแลกิจกรรม';
  end if;

  v_distance_m := 6371000 * acos(least(1, greatest(-1,
    sin(radians(v_event.checkin_latitude)) * sin(radians(new.checkin_latitude))
    + cos(radians(v_event.checkin_latitude)) * cos(radians(new.checkin_latitude))
      * cos(radians(new.checkin_longitude - v_event.checkin_longitude))
  )));
  if v_distance_m > v_event.checkin_radius_meters then
    raise exception 'คุณอยู่นอกพื้นที่เช็คอิน (ห่างประมาณ % เมตร)', round(v_distance_m)::integer;
  end if;

  new.attendance_state := 'present';
  new.checked_in_at := v_now;
  new.recorded_by_teacher_id := null;
  new.note := 'เช็คอินด้วย GPS';
  new.updated_at := v_now;
  return new;
end;
$$;

drop trigger if exists council_yla_validate_student_checkin on public.council_yla_attendance;
create trigger council_yla_validate_student_checkin
  before insert on public.council_yla_attendance
  for each row execute function public.validate_council_yla_student_checkin();

revoke all on function public.validate_council_yla_student_checkin() from public, anon, authenticated;
