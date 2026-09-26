-- ใช้ทางเขียนแบบตรวจรหัสผ่านฝั่งฐานข้อมูลสำหรับหน้ารับรายงานตัว
-- ไม่เปิด INSERT/UPDATE/DELETE บน daily_checkins ให้ anon โดยตรง

create schema if not exists private;
create extension if not exists pgcrypto with schema extensions;

create table if not exists private.sports_checkin_access (
  id boolean primary key default true check (id),
  access_hash text not null,
  enabled boolean not null default true,
  updated_at timestamptz not null default now()
);

insert into private.sports_checkin_access (id, access_hash, enabled)
values (true, extensions.crypt('azreg26', extensions.gen_salt('bf', 10)), true)
on conflict (id) do nothing;

revoke all on table private.sports_checkin_access from public, anon, authenticated;

create or replace function public.sports_checkin_write(
  p_access_code text,
  p_action text,
  p_payload jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public, private, extensions, pg_temp
as $$
declare
  v_payload jsonb := coalesce(p_payload, '{}'::jsonb);
  v_event uuid;
  v_student integer;
  v_date date;
  v_id uuid;
  v_row jsonb;
begin
  if not exists (
    select 1
    from private.sports_checkin_access a
    where a.enabled is true
      and a.access_hash = extensions.crypt(coalesce(p_access_code, ''), a.access_hash)
  ) then
    raise exception 'ไม่มีสิทธิ์รับรายงานตัว' using errcode = '42501';
  end if;

  if p_action = 'upsert' then
    v_event := nullif(v_payload->>'event_id', '')::uuid;
    v_student := nullif(v_payload->>'student_id', '')::integer;
    v_date := nullif(v_payload->>'check_in_date', '')::date;

    if v_event is null or v_student is null or v_date is null then
      raise exception 'ข้อมูลรายงานตัวไม่ครบถ้วน';
    end if;

    if not exists (
      select 1
      from public.registrations r
      where r.event_id = v_event
        and r.student_id = v_student
    ) then
      raise exception 'นักกีฬาไม่ได้ลงทะเบียนในกิจกรรมนี้';
    end if;

    insert into public.daily_checkins(event_id, student_id, check_in_date, checked_in_by, checked_in_at)
    values (
      v_event,
      v_student,
      v_date,
      coalesce(nullif(v_payload->>'checked_in_by', ''), 'ทีมรับรายงานตัว'),
      coalesce(nullif(v_payload->>'checked_in_at', '')::timestamptz, now())
    )
    on conflict (event_id, student_id, check_in_date) do update
      set checked_in_by = excluded.checked_in_by,
          checked_in_at = excluded.checked_in_at
    returning to_jsonb(daily_checkins.*) into v_row;

    return v_row;
  elsif p_action = 'delete' then
    v_id := nullif(v_payload->>'id', '')::uuid;
    v_event := nullif(v_payload->>'event_id', '')::uuid;

    if v_id is null then
      raise exception 'ไม่พบรายการรายงานตัวที่ต้องการยกเลิก';
    end if;

    delete from public.daily_checkins d
    where d.id = v_id
      and (v_event is null or d.event_id = v_event)
    returning to_jsonb(d.*) into v_row;

    return jsonb_build_object('ok', v_row is not null, 'row', v_row);
  end if;

  raise exception 'ไม่รองรับคำสั่งรายงานตัวนี้';
end;
$$;

revoke all on function public.sports_checkin_write(text, text, jsonb) from public;
grant execute on function public.sports_checkin_write(text, text, jsonb) to anon, authenticated;

notify pgrst, 'reload schema';
