-- เปลี่ยนข้อความบนเกียรติบัตรจากชื่อเหรียญเป็นลำดับการแข่งขัน
create or replace function public.get_my_sports_certificates(p_event uuid default null)
returns jsonb
language sql
stable
security definer
set search_path = public, extensions, pg_temp
as $$
with current_student as (
  select s.id, s.full_name, s.student_code, s.main_room
  from public.students s
  where s.profile_id = auth.uid()
    and coalesce(s.is_active, true)
  limit 1
),
event_row as (
  select e.id, e.name, e.academic_year, e.end_date
  from public.events e
  where (p_event is not null and e.id = p_event)
     or (p_event is null and e.status = 'active')
  order by e.academic_year desc, e.created_at desc
  limit 1
),
certificate_template as (
  select coalesce(
    (
      select t.layout
      from public.certificate_templates t
      where t.name = 'กีฬาสี'
      order by t.updated_at desc nulls last, t.id desc
      limit 1
    ),
    '{}'::jsonb
  ) as layout
),
medal_rows as (
  select
    medal.value,
    case medal.value->>'medal'
      when 'gold' then 'ชนะเลิศ'
      when 'silver' then 'รองชนะเลิศอันดับ 1'
      when 'bronze' then 'รองชนะเลิศอันดับ 2'
      else coalesce(medal.value->>'medal', 'ได้รับรางวัล')
    end as placement_label
  from jsonb_array_elements(public.get_my_sports_medal_certificates(p_event)) as medal(value)
),
medal_certificates as (
  select
    medal.value
      || jsonb_build_object(
        'certificate_kind', 'medal',
        'medal_label', medal.placement_label,
        'title', format(
          'เกียรติบัตรกีฬาสี · %s · %s',
          medal.value->>'sport_name',
          medal.placement_label
        ),
        'variables',
          coalesce(medal.value->'variables', '{}'::jsonb)
          || jsonb_build_object(
            'medal_label', medal.placement_label,
            'award', medal.placement_label,
            'types', medal.value->>'sport_name',
            'reason', format(
              'ได้รับรางวัล%s จากการแข่งขัน%s',
              medal.placement_label,
              medal.value->>'sport_name'
            )
          )
      ) as value,
    1 as category,
    medal.value->>'title' as sort_title
  from medal_rows medal
),
outstanding_certificates as (
  select
    jsonb_build_object(
      'id', oa.id,
      'certificate_kind', 'outstanding',
      'event_id', oa.event_id,
      'sport_id', oa.sport_id,
      'sport_name', coalesce(sp.name, 'กีฬาสี'),
      'color', null,
      'medal', null,
      'medal_label', 'นักกีฬาดีเด่น',
      'title', format(
        'เกียรติบัตรนักกีฬาดีเด่น · %s',
        coalesce(sp.name, 'กีฬาสี')
      ),
      'certificate_no', format(
        'SPORT-%s-OUT-%s',
        e.academic_year,
        left(replace(oa.id::text, '-', ''), 8)
      ),
      'awarded_at', oa.awarded_at,
      'layout', ct.layout,
      'variables', jsonb_build_object(
        'name', st.full_name,
        'student_code', st.student_code,
        'room', st.main_room,
        'sport_name', coalesce(sp.name, 'กีฬาสี'),
        'medal_label', 'นักกีฬาดีเด่น',
        'award', 'นักกีฬาดีเด่น',
        'types', coalesce(sp.name, 'กีฬาสี'),
        'reason', coalesce(nullif(oa.note, ''), 'ได้รับคัดเลือกเป็นนักกีฬาดีเด่น'),
        'date', to_char(
          coalesce(oa.awarded_at::date, e.end_date, current_date),
          'DD/MM/'
        ) || (
          extract(year from coalesce(oa.awarded_at::date, e.end_date, current_date))::integer + 543
        )::text,
        'no', format(
          'SPORT-%s-OUT-%s',
          e.academic_year,
          left(replace(oa.id::text, '-', ''), 8)
        )
      ),
      'event_name', e.name
    ) as value,
    2 as category,
    format('%s %s', coalesce(sp.name, ''), coalesce(oa.note, '')) as sort_title
  from public.outstanding_athletes oa
  join current_student st on st.id = oa.student_id
  join event_row e on e.id = oa.event_id
  left join public.sports sp on sp.id = oa.sport_id and sp.event_id = oa.event_id
  cross join certificate_template ct
)
select coalesce(
  jsonb_agg(all_certificates.value order by all_certificates.category, all_certificates.sort_title, all_certificates.value->>'id'),
  '[]'::jsonb
)
from (
  select value, category, sort_title from medal_certificates
  union all
  select value, category, sort_title from outstanding_certificates
) all_certificates;
$$;

revoke all on function public.get_my_sports_certificates(uuid) from public, anon;
grant execute on function public.get_my_sports_certificates(uuid) to authenticated;
