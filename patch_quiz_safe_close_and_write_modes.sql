-- Safe quiz closing + reliable gradebook write modes.
--
-- Goals:
--   1) Closing a quiz without saving scores must never touch student_scores.
--   2) score_write_mode must be honoured by the database, not only the UI.
--   3) add mode must be idempotent: re-applying/closing the same quiz only adds
--      the difference from its previous contribution.
--   4) A closed quiz can be applied to the gradebook later on demand.

create table if not exists public.quiz_score_contributions (
  quiz_id           uuid not null references public.quizzes(id) on delete cascade,
  student_id        integer not null references public.students(id) on delete cascade,
  contributed_score numeric(6,2) not null default 0,
  updated_at        timestamptz not null default now(),
  primary key (quiz_id, student_id)
);

alter table public.quiz_score_contributions enable row level security;

-- Backfill before replacing the writer. This prevents an old add-mode quiz
-- that is already reflected in student_scores from being added a second time.
insert into public.quiz_score_contributions (quiz_id, student_id, contributed_score, updated_at)
select
  q.id,
  a.student_id,
  round(coalesce(
    case q.attempt_scoring_mode
      when 'highest' then (select max(a2.score_pct) from public.quiz_attempts a2
                            where a2.quiz_id=q.id and a2.student_id=a.student_id
                              and a2.status in ('submitted','terminated_violation'))
      when 'first' then (select a2.score_pct from public.quiz_attempts a2
                          where a2.quiz_id=q.id and a2.student_id=a.student_id
                            and a2.status in ('submitted','terminated_violation')
                          order by coalesce(a2.submitted_at,a2.terminated_at) asc limit 1)
      else (select a2.score_pct from public.quiz_attempts a2
              where a2.quiz_id=q.id and a2.student_id=a.student_id
                and a2.status in ('submitted','terminated_violation')
              order by coalesce(a2.submitted_at,a2.terminated_at) desc limit 1)
    end, 0) / 100 * coalesce(q.score_max,100), 2),
  now()
from public.quizzes q
join (
  select distinct quiz_id,student_id
  from public.quiz_attempts
  where status in ('submitted','terminated_violation')
) a on a.quiz_id=q.id
where q.score_column_id is not null
on conflict (quiz_id,student_id) do update
set contributed_score=excluded.contributed_score,updated_at=now();

create or replace function public._write_quiz_score_to_gradebook(
  p_quiz_id uuid,
  p_student_id integer
)
returns void
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_quiz          public.quizzes%rowtype;
  v_effective_pct numeric(5,2);
  v_new_contrib   numeric(6,2);
  v_old_contrib   numeric(6,2);
  v_delta         numeric(6,2);
begin
  select * into v_quiz from public.quizzes where id=p_quiz_id;
  if not found or v_quiz.score_column_id is null then return; end if;

  select case v_quiz.attempt_scoring_mode
    when 'highest' then (
      select max(score_pct) from public.quiz_attempts
      where quiz_id=p_quiz_id and student_id=p_student_id
        and status in ('submitted','terminated_violation')
    )
    when 'first' then (
      select score_pct from public.quiz_attempts
      where quiz_id=p_quiz_id and student_id=p_student_id
        and status in ('submitted','terminated_violation')
      order by coalesce(submitted_at,terminated_at) asc limit 1
    )
    else (
      select score_pct from public.quiz_attempts
      where quiz_id=p_quiz_id and student_id=p_student_id
        and status in ('submitted','terminated_violation')
      order by coalesce(submitted_at,terminated_at) desc limit 1
    )
  end into v_effective_pct;

  if v_effective_pct is null then return; end if;

  v_new_contrib := round(v_effective_pct/100*coalesce(v_quiz.score_max,100),2);

  select contributed_score into v_old_contrib
  from public.quiz_score_contributions
  where quiz_id=p_quiz_id and student_id=p_student_id
  for update;
  v_old_contrib := coalesce(v_old_contrib,0);
  v_delta := v_new_contrib-v_old_contrib;

  insert into public.quiz_score_contributions
    (quiz_id,student_id,contributed_score,updated_at)
  values (p_quiz_id,p_student_id,v_new_contrib,now())
  on conflict (quiz_id,student_id) do update
  set contributed_score=excluded.contributed_score,updated_at=now();

  insert into public.student_scores
    (assignment_id,student_id,original_score,final_score)
  values (
    v_quiz.score_column_id,
    p_student_id,
    case when v_quiz.score_write_mode='add' then v_delta else v_new_contrib end,
    case when v_quiz.score_write_mode='add' then v_delta else v_new_contrib end
  )
  on conflict (assignment_id,student_id) do update set
    original_score=case v_quiz.score_write_mode
      when 'add' then coalesce(public.student_scores.original_score,0)+excluded.original_score
      when 'overwrite' then excluded.original_score
      else greatest(coalesce(public.student_scores.original_score,0),excluded.original_score)
    end,
    final_score=case v_quiz.score_write_mode
      when 'add' then coalesce(public.student_scores.final_score,0)+excluded.final_score
      when 'overwrite' then excluded.final_score
      else greatest(coalesce(public.student_scores.final_score,0),excluded.final_score)
    end;
end;
$function$;

revoke all on function public._write_quiz_score_to_gradebook(uuid,integer)
  from public,anon,authenticated;

-- Close and archive attempts/finalizations, but deliberately skip gradebook
-- writes. score_column_id is temporarily cleared so single-attempt quizzes
-- cannot write while their in-progress attempts are being finalized.
create or replace function public.teacher_close_quiz_without_gradebook(p_quiz_id uuid)
returns void
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_owns boolean;
  v_score_column_id bigint;
  v_attempt_id uuid;
begin
  select exists (
    select 1
    from public.quizzes q
    join public.quiz_banks qb on qb.id=q.bank_id
    join public.teachers t on t.id=qb.teacher_id
    where q.id=p_quiz_id and t.profile_id=auth.uid()
  ) into v_owns;
  if not v_owns then raise exception 'not your quiz'; end if;

  select score_column_id into v_score_column_id
  from public.quizzes where id=p_quiz_id for update;

  perform set_config('app.quiz_trusted_op','on',true);
  update public.quizzes
  set score_column_id=null,status='closed',closed_at=now()
  where id=p_quiz_id;

  for v_attempt_id in
    select id from public.quiz_attempts
    where quiz_id=p_quiz_id and status='in_progress'
  loop
    perform public._finalize_quiz_attempt(v_attempt_id,'submitted');
  end loop;

  update public.quizzes
  set score_column_id=v_score_column_id
  where id=p_quiz_id;

  insert into public.quiz_student_finalizations
    (quiz_id,student_id,attempt_count_at_confirm)
  select p_quiz_id,student_id,count(*)
  from public.quiz_attempts
  where quiz_id=p_quiz_id
    and status in ('submitted','terminated_violation')
  group by student_id
  on conflict (quiz_id,student_id) do nothing;
end;
$function$;

revoke all on function public.teacher_close_quiz_without_gradebook(uuid)
  from public,anon;
grant execute on function public.teacher_close_quiz_without_gradebook(uuid)
  to authenticated;

-- Re-apply a closed quiz later. add mode is safe to call repeatedly because
-- _write_quiz_score_to_gradebook applies only the contribution delta.
create or replace function public.teacher_apply_quiz_scores(p_quiz_id uuid)
returns integer
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_owns boolean;
  v_sid integer;
  v_count integer := 0;
begin
  select exists (
    select 1
    from public.quizzes q
    join public.quiz_banks qb on qb.id=q.bank_id
    join public.teachers t on t.id=qb.teacher_id
    where q.id=p_quiz_id and t.profile_id=auth.uid()
  ) into v_owns;
  if not v_owns then raise exception 'not your quiz'; end if;

  if not exists (
    select 1 from public.quizzes
    where id=p_quiz_id and score_column_id is not null
  ) then
    raise exception 'quiz is not linked to a score column';
  end if;

  for v_sid in
    select distinct student_id
    from public.quiz_attempts
    where quiz_id=p_quiz_id
      and status in ('submitted','terminated_violation')
  loop
    perform public._write_quiz_score_to_gradebook(p_quiz_id,v_sid);
    v_count := v_count+1;
  end loop;

  return v_count;
end;
$function$;

revoke all on function public.teacher_apply_quiz_scores(uuid) from public,anon;
grant execute on function public.teacher_apply_quiz_scores(uuid) to authenticated;
