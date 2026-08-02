-- patch_fix_quiz_add_mode_double_count.sql
-- แก้บั๊ก: โหมด "บวกเพิ่ม" (score_write_mode='add') บวกคะแนนดิบทุกครั้งที่ทำ
-- แทนที่จะบวกแค่ "คะแนนสุทธิของควิซนี้" ตาม attempt_scoring_mode (เช่น เอาคะแนนสูงสุด)
-- ทำให้ควิซที่ตั้งค่า max_attempts>1 + attempt_scoring_mode='highest' + score_write_mode='add'
-- บวกคะแนนซ้ำทุกครั้งที่ทำสอบใหม่ แทนที่จะบวกแค่ครั้งเดียว (ผลต่างระหว่างคะแนนใหม่กับคะแนนเดิม)
-- รันจริงแล้วบน production (2026-08-02) ผ่าน apply_migration — ไฟล์นี้เก็บไว้เพื่อ track ประวัติเท่านั้น

-- ตารางเก็บ "ยอดคะแนนสุทธิล่าสุดที่ควิซนี้เคยส่งเข้าคอลัมน์คะแนน" ต่อนักเรียนต่อควิซ
-- ใช้คำนวณส่วนต่าง (delta) ตอนโหมด "บวกเพิ่ม" — กันไม่ให้การทำซ้ำหลายครั้งของควิซเดียวกันโดนบวกซ้ำ
create table if not exists public.quiz_score_contributions (
  quiz_id           uuid not null references public.quizzes(id) on delete cascade,
  student_id        integer not null references public.students(id) on delete cascade,
  contributed_score numeric(6,2) not null default 0,
  updated_at        timestamptz not null default now(),
  primary key (quiz_id, student_id)
);
alter table public.quiz_score_contributions enable row level security;

create or replace function public._finalize_quiz_attempt(p_attempt_id uuid, p_new_status text)
 returns void
 language plpgsql
 security definer
 set search_path to 'public'
as $function$
DECLARE
  v_attempt       public.quiz_attempts%ROWTYPE;
  v_quiz          public.quizzes%ROWTYPE;
  v_total         INTEGER;
  v_correct       INTEGER;
  v_score_pct     NUMERIC(5,2);
  v_effective_pct NUMERIC(5,2);
  v_new_contrib   NUMERIC(6,2);
  v_old_contrib   NUMERIC(6,2);
  v_delta         NUMERIC(6,2);
BEGIN
  SELECT * INTO v_attempt FROM public.quiz_attempts WHERE id = p_attempt_id FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'attempt not found'; END IF;
  IF v_attempt.status <> 'in_progress' THEN RETURN; END IF;

  SELECT * INTO v_quiz FROM public.quizzes WHERE id = v_attempt.quiz_id;

  SELECT count(*) INTO v_total FROM jsonb_array_elements_text(v_attempt.question_order);
  SELECT count(*) INTO v_correct
    FROM jsonb_array_elements_text(v_attempt.question_order) qid
    JOIN public.quiz_questions qq ON qq.id = qid.value::uuid
    WHERE (v_attempt.answers ->> qid.value)::int = qq.correct_choice_index;

  v_score_pct := CASE WHEN v_total > 0 THEN round(100.0 * v_correct / v_total, 2) ELSE 0 END;

  PERFORM set_config('app.quiz_trusted_op', 'on', true);

  UPDATE public.quiz_attempts SET
    status = p_new_status,
    score_pct = v_score_pct,
    submitted_at = CASE WHEN p_new_status = 'submitted' THEN now() ELSE submitted_at END,
    terminated_at = CASE WHEN p_new_status = 'terminated_violation' THEN now() ELSE terminated_at END
  WHERE id = p_attempt_id;

  IF v_quiz.score_column_id IS NOT NULL THEN
    SELECT
      CASE v_quiz.attempt_scoring_mode
        WHEN 'highest' THEN (SELECT max(score_pct) FROM public.quiz_attempts
                              WHERE quiz_id = v_quiz.id AND student_id = v_attempt.student_id
                                AND status IN ('submitted','terminated_violation'))
        WHEN 'first'   THEN (SELECT score_pct FROM public.quiz_attempts
                              WHERE quiz_id = v_quiz.id AND student_id = v_attempt.student_id
                                AND status IN ('submitted','terminated_violation')
                              ORDER BY coalesce(submitted_at, terminated_at) ASC LIMIT 1)
        ELSE                (SELECT score_pct FROM public.quiz_attempts
                              WHERE quiz_id = v_quiz.id AND student_id = v_attempt.student_id
                                AND status IN ('submitted','terminated_violation')
                              ORDER BY coalesce(submitted_at, terminated_at) DESC LIMIT 1)
      END
    INTO v_effective_pct;

    v_new_contrib := round(coalesce(v_effective_pct, 0) / 100 * coalesce(v_quiz.score_max, 100), 2);

    SELECT contributed_score INTO v_old_contrib
      FROM public.quiz_score_contributions
      WHERE quiz_id = v_quiz.id AND student_id = v_attempt.student_id;
    v_old_contrib := coalesce(v_old_contrib, 0);
    v_delta := v_new_contrib - v_old_contrib;

    INSERT INTO public.quiz_score_contributions (quiz_id, student_id, contributed_score, updated_at)
    VALUES (v_quiz.id, v_attempt.student_id, v_new_contrib, now())
    ON CONFLICT (quiz_id, student_id) DO UPDATE SET contributed_score = EXCLUDED.contributed_score, updated_at = now();

    INSERT INTO public.student_scores (assignment_id, student_id, original_score, final_score)
    VALUES (v_quiz.score_column_id, v_attempt.student_id,
            CASE WHEN v_quiz.score_write_mode = 'add' THEN v_delta ELSE v_new_contrib END,
            CASE WHEN v_quiz.score_write_mode = 'add' THEN v_delta ELSE v_new_contrib END)
    ON CONFLICT (assignment_id, student_id)
    DO UPDATE SET
      original_score = CASE v_quiz.score_write_mode
        WHEN 'add'       THEN COALESCE(public.student_scores.original_score, 0) + EXCLUDED.original_score
        WHEN 'overwrite' THEN EXCLUDED.original_score
        ELSE                  GREATEST(COALESCE(public.student_scores.original_score, 0), EXCLUDED.original_score)
      END,
      final_score = CASE v_quiz.score_write_mode
        WHEN 'add'       THEN COALESCE(public.student_scores.final_score, 0) + EXCLUDED.final_score
        WHEN 'overwrite' THEN EXCLUDED.final_score
        ELSE                  GREATEST(COALESCE(public.student_scores.final_score, 0), EXCLUDED.final_score)
      END;
  END IF;
END;
$function$;

-- Backfill ตาราง contribution ให้ตรงกับสถานะปัจจุบันของทุกควิซที่ผูกคอลัมน์คะแนน (กันบั๊กนี้เกิดซ้ำกับควิซอื่นในอนาคตถ้าเปลี่ยนโหมด)
insert into public.quiz_score_contributions (quiz_id, student_id, contributed_score, updated_at)
select
  q.id,
  a.student_id,
  round(coalesce(
    case q.attempt_scoring_mode
      when 'highest' then (select max(a2.score_pct) from public.quiz_attempts a2 where a2.quiz_id=q.id and a2.student_id=a.student_id and a2.status in ('submitted','terminated_violation'))
      when 'first'   then (select a2.score_pct from public.quiz_attempts a2 where a2.quiz_id=q.id and a2.student_id=a.student_id and a2.status in ('submitted','terminated_violation') order by coalesce(a2.submitted_at,a2.terminated_at) asc limit 1)
      else                (select a2.score_pct from public.quiz_attempts a2 where a2.quiz_id=q.id and a2.student_id=a.student_id and a2.status in ('submitted','terminated_violation') order by coalesce(a2.submitted_at,a2.terminated_at) desc limit 1)
    end, 0) / 100 * coalesce(q.score_max,100), 2),
  now()
from public.quizzes q
join (select distinct quiz_id, student_id from public.quiz_attempts where status in ('submitted','terminated_violation')) a on a.quiz_id = q.id
where q.score_column_id is not null
on conflict (quiz_id, student_id) do update set contributed_score = excluded.contributed_score, updated_at = now();

-- ซ่อมคะแนนย้อนหลังของ "ทดสอบย่อยครั้ง 2" (คอลัมน์ 362) ที่โดนบวกซ้ำจากบั๊กนี้จริง
with buggy as (
  select student_id, sum(round(score_pct/100*9.00,2)) as buggy_sum
  from public.quiz_attempts
  where quiz_id = '2e9b8619-ba01-4835-9e2f-bfefff1083ce' and status in ('submitted','terminated_violation')
  group by student_id
),
correct as (
  select student_id, round(max(score_pct)/100*9.00,2) as correct_contrib
  from public.quiz_attempts
  where quiz_id = '2e9b8619-ba01-4835-9e2f-bfefff1083ce' and status in ('submitted','terminated_violation')
  group by student_id
)
update public.student_scores ss
set original_score = ss.original_score - buggy.buggy_sum + correct.correct_contrib,
    final_score    = ss.final_score    - buggy.buggy_sum + correct.correct_contrib
from buggy join correct using (student_id)
where ss.assignment_id = 362 and ss.student_id = buggy.student_id
  and buggy.buggy_sum <> correct.correct_contrib;
