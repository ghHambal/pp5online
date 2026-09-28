-- ให้นักเรียนสร้างเกียรติบัตรเหรียญกีฬาสีจากข้อมูลจริงในเครื่องของตนเอง
-- ไม่บันทึกไฟล์ PDF และไม่รับ student_id จากฝั่ง client เพื่อป้องกันการเปิดดูข้อมูลข้ามคน
create or replace function public.get_my_sports_medal_certificates(p_event uuid default null)
returns jsonb
language plpgsql
stable
security definer
set search_path = public, extensions, pg_temp
as $$
declare
  v_student_id integer;
  v_event_id uuid;
  v_layout jsonb;
  v_result jsonb;
begin
  select s.id
    into v_student_id
  from public.students s
  where s.profile_id = auth.uid()
    and coalesce(s.is_active, true)
  limit 1;

  if v_student_id is null then
    return '[]'::jsonb;
  end if;

  if p_event is not null then
    select e.id
      into v_event_id
    from public.events e
    where e.id = p_event;
  else
    select e.id
      into v_event_id
    from public.events e
    where e.status = 'active'
    order by e.academic_year desc, e.created_at desc
    limit 1;
  end if;

  if v_event_id is null then
    return '[]'::jsonb;
  end if;

  select coalesce(t.layout, '{}'::jsonb)
    into v_layout
  from public.certificate_templates t
  where t.name = 'กีฬาสี'
  order by t.updated_at desc nulls last, t.id desc
  limit 1;

  if v_layout is null then
    return '[]'::jsonb;
  end if;

  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', a.id,
        'event_id', a.event_id,
        'sport_id', a.sport_id,
        'sport_name', s.name,
        'color', tc.name,
        'medal', a.medal_type,
        'medal_label', case a.medal_type
          when 'gold' then 'เหรียญทอง'
          when 'silver' then 'เหรียญเงิน'
          when 'bronze' then 'เหรียญทองแดง'
          else a.medal_type
        end,
        'title', format(
          'เกียรติบัตรกีฬาสี · %s · %s',
          s.name,
          case a.medal_type
            when 'gold' then 'เหรียญทอง'
            when 'silver' then 'เหรียญเงิน'
            when 'bronze' then 'เหรียญทองแดง'
            else a.medal_type
          end
        ),
        'certificate_no', format(
          'SPORT-%s-%s',
          e.academic_year,
          left(replace(a.id::text, '-', ''), 8)
        ),
        'awarded_at', a.awarded_at,
        'layout', v_layout,
        'variables', jsonb_build_object(
          'name', st.full_name,
          'student_code', st.student_code,
          'sport_name', s.name,
          'medal', a.medal_type,
          'medal_label', case a.medal_type
            when 'gold' then 'เหรียญทอง'
            when 'silver' then 'เหรียญเงิน'
            when 'bronze' then 'เหรียญทองแดง'
            else a.medal_type
          end,
          'team_color', tc.name,
          'room', st.main_room,
          'reason', format(
            'ได้รับรางวัล%s จากการแข่งขัน%s ทีมสี%s',
            case a.medal_type
              when 'gold' then 'เหรียญทอง'
              when 'silver' then 'เหรียญเงิน'
              when 'bronze' then 'เหรียญทองแดง'
              else a.medal_type
            end,
            s.name,
            tc.name
          ),
          'date', to_char(
            coalesce(a.awarded_at::date, e.end_date, current_date),
            'DD/MM/'
          ) || (
            extract(year from coalesce(a.awarded_at::date, e.end_date, current_date))::integer + 543
          )::text,
          'no', format(
            'SPORT-%s-%s',
            e.academic_year,
            left(replace(a.id::text, '-', ''), 8)
          )
        ),
        'event_name', e.name
      )
      order by s.display_order nulls last, s.name, a.medal_type, a.id
    ),
    '[]'::jsonb
  )
    into v_result
  from public.medal_awards a
  join public.sports s on s.id = a.sport_id and s.event_id = a.event_id
  join public.team_colors tc on tc.id = a.team_color_id and tc.event_id = a.event_id
  join public.events e on e.id = a.event_id
  join public.students st on st.id = v_student_id
  where a.event_id = v_event_id
    and exists (
      select 1
      from public.registrations r
      where r.event_id = a.event_id
        and r.sport_id = a.sport_id
        and r.team_color_id = a.team_color_id
        and r.student_id = v_student_id
    );

  return v_result;
end;
$$;

revoke all on function public.get_my_sports_medal_certificates(uuid) from public, anon;
grant execute on function public.get_my_sports_medal_certificates(uuid) to authenticated;

-- เชื่อมชื่อบนพื้นหลังใบกีฬาสีเดิมให้เป็นข้อมูลนักเรียนแบบไดนามิก
update public.certificate_templates t
set layout = jsonb_set(
  t.layout,
  '{elements,0,text}',
  to_jsonb('{{name}}'::text),
  false
),
updated_at = now()
where t.name = 'กีฬาสี'
  and jsonb_typeof(t.layout->'elements') = 'array'
  and t.layout->'elements'->0->>'text' = 'ข้อความใหม่';
