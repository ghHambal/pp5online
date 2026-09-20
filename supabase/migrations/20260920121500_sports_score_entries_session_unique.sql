-- แยกคะแนนของแต่ละ evaluation session ออกจากกัน
-- ป้องกันคะแนนวันกีฬาสีจริงวันที่ 1-4 เขียนทับกัน

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conrelid = 'public.sports_score_entries'::regclass
      AND conname = 'sports_score_entries_criteria_id_team_color_id_judge_username_key'
  ) THEN
    ALTER TABLE public.sports_score_entries
      DROP CONSTRAINT sports_score_entries_criteria_id_team_color_id_judge_username_key;
  END IF;
END $$;

DROP INDEX IF EXISTS public.sports_score_entries_criteria_id_team_color_id_judge_username_key;

CREATE UNIQUE INDEX IF NOT EXISTS sports_score_entries_criteria_team_judge_session_key
  ON public.sports_score_entries (criteria_id, team_color_id, judge_username, session_id);
