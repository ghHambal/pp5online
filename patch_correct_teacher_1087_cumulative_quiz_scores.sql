-- One-time data correction for teacher 1087 cumulative quiz scores.
-- Applied to production on 2026-08-31.
--
-- Business rules confirmed by the teacher:
--   * M6/2 has two quizzes worth 5 points each. Both add into final column 362.
--   * M6/9 has one quiz worth 10 points. It adds into final column 330.
--   * Both columns may also contain manual class bonuses (for example +0.5),
--     so quiz corrections must preserve the non-quiz remainder.

begin;

do $block$
declare
  v_sid integer;
begin
  -- M6/2 quiz 2 was configured /9. Rescale its recorded contribution to /5
  -- and replace only that contribution inside the cumulative final score.
  if exists (
    select 1 from public.quizzes
    where id='2e9b8619-ba01-4835-9e2f-bfefff1083ce' and score_max<>5
  ) then
    with corrected as (
      select
        qc.student_id,
        qc.contributed_score as old_contribution,
        round(max(qa.score_pct)/100.0*5.0,2) as new_contribution
      from public.quiz_score_contributions qc
      join public.quiz_attempts qa
        on qa.quiz_id=qc.quiz_id and qa.student_id=qc.student_id
      where qc.quiz_id='2e9b8619-ba01-4835-9e2f-bfefff1083ce'
        and qa.status in ('submitted','terminated_violation')
        and qa.score_pct is not null
      group by qc.student_id,qc.contributed_score
    )
    update public.student_scores ss
    set
      original_score=round(coalesce(ss.original_score,0)-c.old_contribution+c.new_contribution,2),
      final_score=round(coalesce(ss.final_score,0)-c.old_contribution+c.new_contribution,2)
    from corrected c
    where ss.assignment_id=362 and ss.student_id=c.student_id;

    with corrected as (
      select
        qc.student_id,
        round(max(qa.score_pct)/100.0*5.0,2) as new_contribution
      from public.quiz_score_contributions qc
      join public.quiz_attempts qa
        on qa.quiz_id=qc.quiz_id and qa.student_id=qc.student_id
      where qc.quiz_id='2e9b8619-ba01-4835-9e2f-bfefff1083ce'
        and qa.status in ('submitted','terminated_violation')
        and qa.score_pct is not null
      group by qc.student_id
    )
    update public.quiz_score_contributions qc
    set contributed_score=c.new_contribution,updated_at=now()
    from corrected c
    where qc.quiz_id='2e9b8619-ba01-4835-9e2f-bfefff1083ce'
      and qc.student_id=c.student_id;

    update public.quizzes
    set score_max=5,score_write_mode='add'
    where id='2e9b8619-ba01-4835-9e2f-bfefff1083ce';
  end if;

  -- M6/2 quiz 1 was linked to attendance. Move it to cumulative final and
  -- apply it exactly once at the corrected /5 scale.
  if exists (
    select 1 from public.quizzes
    where id='1fcc2beb-07c0-43d0-bb36-c9227e8b2f1d'
      and (score_column_id<>362 or score_max<>5 or score_write_mode<>'add')
  ) then
    update public.quizzes
    set score_max=5,score_column_id=362,score_write_mode='add'
    where id='1fcc2beb-07c0-43d0-bb36-c9227e8b2f1d';

    delete from public.quiz_score_contributions
    where quiz_id='1fcc2beb-07c0-43d0-bb36-c9227e8b2f1d';

    for v_sid in
      select distinct student_id
      from public.quiz_attempts
      where quiz_id='1fcc2beb-07c0-43d0-bb36-c9227e8b2f1d'
        and status in ('submitted','terminated_violation')
    loop
      perform public._write_quiz_score_to_gradebook(
        '1fcc2beb-07c0-43d0-bb36-c9227e8b2f1d'::uuid,
        v_sid
      );
    end loop;
  end if;

  -- M6/9 stays /10. A cumulative add-mode score can never be below the
  -- quiz's own contribution, but all positive manual bonuses are retained.
  update public.student_scores ss
  set
    original_score=greatest(coalesce(ss.original_score,0),qc.contributed_score),
    final_score=greatest(coalesce(ss.final_score,0),qc.contributed_score)
  from public.quiz_score_contributions qc
  where qc.quiz_id='9aa160f8-ed0f-4602-a335-6ec04a7cc8a0'
    and ss.assignment_id=330
    and ss.student_id=qc.student_id
    and coalesce(ss.final_score,0)<qc.contributed_score;
end
$block$;

commit;
