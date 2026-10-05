-- Official work calendar metadata and reviewed AI JSON import.
-- The existing work_calendar_events table remains the source used by other modules.

alter table if exists public.work_calendar_events
  add column if not exists category text not null default 'other',
  add column if not exists responsible_unit text,
  add column if not exists week_number integer,
  add column if not exists is_holiday boolean not null default false,
  add column if not exists holiday_note text,
  add column if not exists source_revision text,
  add column if not exists source_document_name text,
  add column if not exists source_page integer,
  add column if not exists note text,
  add column if not exists import_id uuid;

create table if not exists public.work_calendar_imports (
  id uuid primary key default gen_random_uuid(),
  academic_year integer not null check (academic_year > 0),
  semester integer not null check (semester in (1, 2)),
  source_title text not null,
  source_revision text,
  source_document_name text,
  raw_payload jsonb not null default '{}'::jsonb,
  created_by_teacher_id integer references public.teachers(id) on delete set null,
  created_at timestamptz not null default now()
);

alter table if exists public.work_calendar_events
  drop constraint if exists work_calendar_events_import_id_fkey;

alter table if exists public.work_calendar_events
  add constraint work_calendar_events_import_id_fkey
  foreign key (import_id) references public.work_calendar_imports(id) on delete set null;

create index if not exists work_calendar_events_term_date_idx
  on public.work_calendar_events (academic_year, semester, event_date);

create index if not exists work_calendar_events_import_id_idx
  on public.work_calendar_events (import_id);

alter table public.work_calendar_imports enable row level security;

grant select, insert on public.work_calendar_imports to authenticated;

drop policy if exists work_calendar_imports_read_authenticated on public.work_calendar_imports;
create policy work_calendar_imports_read_authenticated
  on public.work_calendar_imports
  for select to authenticated
  using (true);

drop policy if exists work_calendar_imports_insert_staff on public.work_calendar_imports;
create policy work_calendar_imports_insert_staff
  on public.work_calendar_imports
  for insert to authenticated
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid())
        and (p.role = 'admin' or p.is_also_admin = true)
    )
    or exists (
      select 1 from public.teachers t
      where t.profile_id = (select auth.uid())
        and (t.position is not null or (t.positions is not null and cardinality(t.positions) > 0))
    )
  );

-- Replace the legacy public-role predicates with explicit authenticated policies.
drop policy if exists wce_read_all on public.work_calendar_events;
create policy wce_read_all
  on public.work_calendar_events
  for select to authenticated
  using (true);

drop policy if exists wci_read_all on public.work_calendar_items;
create policy wci_read_all
  on public.work_calendar_items
  for select to authenticated
  using (true);

-- Keep write access restricted to administrators and assigned supervisors.
drop policy if exists wce_supervisor_write on public.work_calendar_events;
create policy wce_supervisor_write
  on public.work_calendar_events
  for all to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid())
        and (p.role = 'admin' or p.is_also_admin = true)
    )
    or exists (
      select 1 from public.teachers t
      where t.profile_id = (select auth.uid())
        and (t.position is not null or (t.positions is not null and cardinality(t.positions) > 0))
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid())
        and (p.role = 'admin' or p.is_also_admin = true)
    )
    or exists (
      select 1 from public.teachers t
      where t.profile_id = (select auth.uid())
        and (t.position is not null or (t.positions is not null and cardinality(t.positions) > 0))
    )
  );

drop policy if exists wci_supervisor_write on public.work_calendar_items;
create policy wci_supervisor_write
  on public.work_calendar_items
  for all to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid())
        and (p.role = 'admin' or p.is_also_admin = true)
    )
    or exists (
      select 1 from public.teachers t
      where t.profile_id = (select auth.uid())
        and (t.position is not null or (t.positions is not null and cardinality(t.positions) > 0))
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = (select auth.uid())
        and (p.role = 'admin' or p.is_also_admin = true)
    )
    or exists (
      select 1 from public.teachers t
      where t.profile_id = (select auth.uid())
        and (t.position is not null or (t.positions is not null and cardinality(t.positions) > 0))
    )
  );

-- Atomic import: the UI still requires a human preview and confirmation first.
create or replace function public.import_work_calendar_events(
  p_academic_year integer,
  p_semester integer,
  p_source_title text,
  p_source_revision text,
  p_source_document_name text,
  p_raw_payload jsonb,
  p_created_by_teacher_id integer,
  p_events jsonb
)
returns jsonb
language plpgsql
security invoker
set search_path = public
as $function$
declare
  v_import_id uuid;
  v_row jsonb;
  v_inserted integer := 0;
  v_skipped integer := 0;
  v_is_holiday boolean;
  v_event_date date;
  v_end_date date;
  v_label text;
begin
  if not exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid())
      and (p.role = 'admin' or p.is_also_admin = true)
  ) and not exists (
    select 1 from public.teachers t
    where t.profile_id = (select auth.uid())
      and (t.position is not null or (t.positions is not null and cardinality(t.positions) > 0))
  ) then
    raise exception 'not authorized to import work calendar';
  end if;

  if jsonb_typeof(coalesce(p_events, '[]'::jsonb)) <> 'array' then
    raise exception 'p_events must be a JSON array';
  end if;

  insert into public.work_calendar_imports (
    academic_year, semester, source_title, source_revision,
    source_document_name, raw_payload, created_by_teacher_id
  ) values (
    p_academic_year, p_semester, coalesce(nullif(trim(p_source_title), ''), 'ปฏิทินปฏิบัติงาน'),
    nullif(trim(p_source_revision), ''), nullif(trim(p_source_document_name), ''),
    coalesce(p_raw_payload, '{}'::jsonb), p_created_by_teacher_id
  ) returning id into v_import_id;

  for v_row in select value from jsonb_array_elements(coalesce(p_events, '[]'::jsonb)) loop
    v_event_date := nullif(v_row->>'event_date', '')::date;
    v_end_date := nullif(v_row->>'end_date', '')::date;
    v_label := nullif(trim(coalesce(v_row->>'label', v_row->>'title', '')), '');
    v_is_holiday := coalesce((v_row->>'is_holiday')::boolean, false);

    if v_event_date is null or v_label is null then
      raise exception 'event_date and label are required for every imported event';
    end if;

    if exists (
      select 1 from public.work_calendar_events e
      where e.academic_year = p_academic_year
        and e.semester = p_semester
        and e.event_date = v_event_date
        and lower(trim(e.label)) = lower(v_label)
    ) then
      v_skipped := v_skipped + 1;
      continue;
    end if;

    insert into public.work_calendar_events (
      event_type, round_number, event_date, end_date, label, description,
      academic_year, semester, created_by_teacher_id, category, responsible_unit,
      week_number, is_holiday, holiday_note, source_revision,
      source_document_name, source_page, note, import_id
    ) values (
      coalesce(nullif(v_row->>'event_type', ''), case when v_is_holiday then 'other' else 'other' end),
      nullif(v_row->>'round_number', '')::integer,
      v_event_date, v_end_date, v_label,
      nullif(coalesce(v_row->>'description', v_row->>'details', ''), ''),
      p_academic_year, p_semester, p_created_by_teacher_id,
      coalesce(nullif(v_row->>'category', ''), 'other'),
      nullif(coalesce(v_row->>'responsible_unit', v_row->>'responsible', ''), ''),
      nullif(v_row->>'week_number', '')::integer,
      v_is_holiday,
      nullif(coalesce(v_row->>'holiday_note', v_row->>'holiday', ''), ''),
      nullif(trim(p_source_revision), ''),
      nullif(trim(p_source_document_name), ''),
      nullif(v_row->>'source_page', '')::integer,
      nullif(coalesce(v_row->>'note', ''), ''),
      v_import_id
    );
    v_inserted := v_inserted + 1;
  end loop;

  return jsonb_build_object(
    'import_id', v_import_id,
    'inserted_count', v_inserted,
    'skipped_count', v_skipped
  );
end;
$function$;

revoke all on function public.import_work_calendar_events(integer, integer, text, text, text, jsonb, integer, jsonb) from public, anon;
grant execute on function public.import_work_calendar_events(integer, integer, text, text, text, jsonb, integer, jsonb) to authenticated;
