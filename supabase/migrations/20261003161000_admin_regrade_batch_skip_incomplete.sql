-- Keep admin batch regrade submission from treating blank or incomplete score rows as grade 0.
-- Explicit special_result values remain eligible even when no numeric score exists.

create or replace function public.admin_regrade_batch(
  p_academic_year integer,
  p_semester integer,
  p_commit boolean default false
)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_inserted integer := 0;
  v_result jsonb;
begin
  if not public.is_regrade_admin() then
    raise exception 'not authorized';
  end if;
  if p_academic_year is null or p_semester not in (1, 2) then
    raise exception 'ภาคเรียนไม่ถูกต้อง';
  end if;

  create temporary table admin_regrade_failing on commit drop as
  with class_scope as (
    select c.id as class_id,
           c.class_name,
           c.academic_year,
           c.semester as class_semester,
           ms.teacher_id,
           ms.subject_code,
           ms.subject_name,
           ms.subject_group,
           ms.grade_level,
           t.full_name as teacher_name,
           case when ms.subject_group like 'AGM%' then 'ศาสนา' else 'สามัญ' end as category
    from public.classes c
    join public.master_subjects ms on ms.id = c.course_id
    left join public.teachers t on t.id = ms.teacher_id
    where c.academic_year = p_academic_year
      and c.semester = p_semester
      and ms.teacher_id is not null
  ),
  score_limits as (
    select csc.class_id,
           sum(coalesce(csc.max_score, 0)) as max_total,
           count(*) as score_column_count
    from public.class_score_columns csc
    join class_scope cs on cs.class_id = csc.class_id
    where coalesce(csc.column_type, 'regular') not in ('bonus', 'override')
      and coalesce(csc.assignment_type, '') <> 'คะแนนพิเศษ'
    group by csc.class_id
  ),
  score_totals as (
    select csc.class_id,
           ss.student_id,
           sum(coalesce(ss.final_score, ss.original_score, 0)) as raw_total,
           count(*) filter (where coalesce(ss.final_score, ss.original_score) is not null) as scored_count
    from public.class_score_columns csc
    join class_scope cs on cs.class_id = csc.class_id
    join public.student_scores ss on ss.assignment_id = csc.id
    where coalesce(csc.column_type, 'regular') not in ('bonus', 'override')
      and coalesce(csc.assignment_type, '') <> 'คะแนนพิเศษ'
    group by csc.class_id, ss.student_id
  )
  select distinct on (cs.class_id, en.student_id)
         cs.class_id,
         cs.class_name,
         cs.academic_year,
         cs.class_semester,
         cs.teacher_id,
         cs.teacher_name,
         cs.subject_code,
         cs.subject_name,
         cs.subject_group,
         cs.grade_level,
         cs.category,
         en.student_id,
         case
           when nullif(trim(en.special_result), '') is not null then trim(en.special_result)
           when coalesce(sl.max_total, 0) = 0 then '0'
           when (round(coalesce(st.raw_total, 0)) / sl.max_total * 100) < 50 then '0'
           else null
         end as grade_failed_at,
         (coalesce(sl.max_total, 0))::numeric as max_total,
         coalesce(sl.score_column_count, 0)::integer as score_column_count,
         coalesce(st.scored_count, 0)::integer as scored_count
  from class_scope cs
  join public.class_students en on en.class_id = cs.class_id and en.is_active is not false
  left join score_limits sl on sl.class_id = cs.class_id
  left join score_totals st on st.class_id = cs.class_id and st.student_id = en.student_id
  where nullif(trim(en.special_result), '') is not null
     or (
       coalesce(sl.score_column_count, 0) > 0
       and coalesce(st.scored_count, 0) >= sl.score_column_count
       and (
         coalesce(sl.max_total, 0) = 0
         or (round(coalesce(st.raw_total, 0)) / nullif(sl.max_total, 0) * 100) < 50
       )
     )
  order by cs.class_id, en.student_id;

  if p_commit then
    insert into public.regrade_subjects
      (student_id, teacher_id, subject_code, subject_name, category, class_level, semester,
       grade_failed_at, status, source, teacher_name_raw, created_by)
    select f.student_id,
           f.teacher_id,
           f.subject_code,
           f.subject_name,
           f.category,
           f.grade_level,
           f.class_semester::text || '/' || f.academic_year::text,
           f.grade_failed_at,
           'ยังไม่แจ้ง',
           'live',
           f.teacher_name,
           auth.uid()
    from admin_regrade_failing f
    where f.grade_failed_at is not null
    on conflict (student_id, subject_code, semester) do nothing;
    get diagnostics v_inserted = row_count;
  end if;

  select jsonb_build_object(
    'ok', true,
    'academic_year', p_academic_year,
    'semester', p_semester,
    'committed', p_commit,
    'class_count', (select count(distinct class_id) from admin_regrade_failing),
    'failing_count', (select count(*) from admin_regrade_failing),
    'existing_count', (select count(*) from admin_regrade_failing f where exists (
      select 1 from public.regrade_subjects r
      where r.student_id = f.student_id
        and r.subject_code = f.subject_code
        and r.semester = f.class_semester::text || '/' || f.academic_year::text
    )),
    'submitted', v_inserted,
    'classes', coalesce((
      select jsonb_agg(x order by x->>'class_name')
      from (
        select jsonb_build_object(
          'class_id', f.class_id,
          'class_name', f.class_name,
          'subject_code', f.subject_code,
          'subject_name', f.subject_name,
          'teacher_name', f.teacher_name,
          'failing_count', count(*)::integer,
          'score_column_count', max(f.score_column_count)::integer
        ) as x
        from admin_regrade_failing f
        group by f.class_id, f.class_name, f.subject_code, f.subject_name, f.teacher_name
      ) grouped
    ), '[]'::jsonb)
  ) into v_result;

  return v_result;
end;
$function$;

revoke all on function public.admin_regrade_batch(integer, integer, boolean) from public, anon;
grant execute on function public.admin_regrade_batch(integer, integer, boolean) to authenticated;
