-- กำหนดการค่ายลูกเสือ TERANGGANU 2026
-- ตารางรุ่นแรกมี 4 ข้อมูล: รายการที่ วันที่ รายการ และหมายเหตุ

create table if not exists public.terangganu_camp_schedule_items (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.terangganu_camp_events(id) on delete cascade,
  item_no integer not null check (item_no > 0),
  item_date date not null,
  item_text text not null check (length(btrim(item_text)) > 0),
  note text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (event_id, item_no)
);

create index if not exists terangganu_schedule_event_order_idx
  on public.terangganu_camp_schedule_items(event_id, item_no, item_date);

alter table public.terangganu_camp_schedule_items enable row level security;

revoke all on public.terangganu_camp_schedule_items from public, anon, authenticated;
grant select on public.terangganu_camp_schedule_items to authenticated;

drop policy if exists terangganu_schedule_select on public.terangganu_camp_schedule_items;
create policy terangganu_schedule_select
on public.terangganu_camp_schedule_items
for select
to authenticated
using (
  public.terangganu_can(event_id, 'view')
  or exists (
    select 1
    from public.terangganu_camp_events e
    join public.students s on s.profile_id = auth.uid() and s.is_active is true
    where e.id = terangganu_camp_schedule_items.event_id
      and e.visible_to_students is true
      and (
        e.student_visibility_scope = 'all'
        or exists (
          select 1
          from public.terangganu_camp_participants cp
          where cp.event_id = e.id and cp.student_id = s.id and cp.active is true
        )
      )
  )
  or exists (
    select 1
    from public.terangganu_camp_teacher_participants tp
    join public.teachers t on t.id = tp.teacher_id
    where tp.event_id = terangganu_camp_schedule_items.event_id
      and tp.active is true and t.profile_id = auth.uid()
  )
);

create or replace function public.get_terangganu_schedule()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  v_access jsonb;
  v_event_id uuid;
begin
  v_access := public.get_terangganu_access();
  v_event_id := nullif(v_access->>'event_id', '')::uuid;

  if v_event_id is null or not (
    coalesce((v_access->>'is_manager')::boolean, false)
    or (coalesce((v_access->>'visible')::boolean, false) and coalesce((v_access->>'student_allowed')::boolean, false))
    or coalesce((v_access->>'teacher_participant')::boolean, false)
  ) then
    raise exception 'ไม่มีสิทธิ์ดูกำหนดการค่าย';
  end if;

  return coalesce((
    select jsonb_agg(to_jsonb(si) order by si.item_no, si.item_date, si.created_at)
    from public.terangganu_camp_schedule_items si
    where si.event_id = v_event_id
  ), '[]'::jsonb);
end;
$$;

create or replace function public.save_terangganu_schedule_item(p_payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_event_id uuid;
  v_id uuid;
  v_item_no integer;
  v_item_date date;
  v_item_text text;
  v_note text;
  v_row public.terangganu_camp_schedule_items%rowtype;
begin
  select id into v_event_id
  from public.terangganu_camp_events
  where slug = 'terangganu-2026'
  limit 1;

  if v_event_id is null or not public.terangganu_can(v_event_id, 'settings') then
    raise exception 'ไม่มีสิทธิ์แก้ไขกำหนดการค่าย';
  end if;

  begin
    v_id := nullif(btrim(p_payload->>'id'), '')::uuid;
    v_item_no := nullif(btrim(p_payload->>'item_no'), '')::integer;
    v_item_date := nullif(btrim(p_payload->>'item_date'), '')::date;
  exception when invalid_text_representation then
    raise exception 'ข้อมูลรายการที่หรือวันที่ไม่ถูกต้อง';
  end;
  v_item_text := btrim(coalesce(p_payload->>'item_text', ''));
  v_note := nullif(btrim(coalesce(p_payload->>'note', '')), '');

  if v_item_no is null or v_item_no < 1 then
    raise exception 'กรุณาระบุรายการที่เป็นเลขมากกว่า 0';
  end if;
  if v_item_date is null then
    raise exception 'กรุณาระบุวันที่';
  end if;
  if v_item_text = '' then
    raise exception 'กรุณาระบุรายการ';
  end if;

  if v_id is null then
    insert into public.terangganu_camp_schedule_items
      (event_id, item_no, item_date, item_text, note, created_by)
    values
      (v_event_id, v_item_no, v_item_date, v_item_text, v_note, auth.uid())
    returning * into v_row;
  else
    update public.terangganu_camp_schedule_items
    set item_no = v_item_no,
        item_date = v_item_date,
        item_text = v_item_text,
        note = v_note,
        updated_at = now()
    where id = v_id and event_id = v_event_id
    returning * into v_row;

    if not found then
      raise exception 'ไม่พบรายการกำหนดการที่ต้องการแก้ไข';
    end if;
  end if;

  return to_jsonb(v_row);
exception
  when unique_violation then
    raise exception 'รายการที่ % มีอยู่แล้ว กรุณาใช้หมายเลขอื่น', v_item_no;
end;
$$;

create or replace function public.delete_terangganu_schedule_item(p_item_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_event_id uuid;
  v_row public.terangganu_camp_schedule_items%rowtype;
begin
  select event_id into v_event_id
  from public.terangganu_camp_schedule_items
  where id = p_item_id;

  if v_event_id is null then
    raise exception 'ไม่พบรายการกำหนดการ';
  end if;
  if not public.terangganu_can(v_event_id, 'settings') then
    raise exception 'ไม่มีสิทธิ์ลบกำหนดการค่าย';
  end if;

  delete from public.terangganu_camp_schedule_items
  where id = p_item_id
  returning * into v_row;

  return to_jsonb(v_row);
end;
$$;

revoke all on function public.get_terangganu_schedule() from public, anon;
revoke all on function public.save_terangganu_schedule_item(jsonb) from public, anon;
revoke all on function public.delete_terangganu_schedule_item(uuid) from public, anon;
grant execute on function public.get_terangganu_schedule() to authenticated;
grant execute on function public.save_terangganu_schedule_item(jsonb) to authenticated;
grant execute on function public.delete_terangganu_schedule_item(uuid) to authenticated;

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'terangganu_camp_schedule_items'
  ) then
    alter publication supabase_realtime add table public.terangganu_camp_schedule_items;
  end if;
end;
$$;
