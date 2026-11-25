-- Store optional spreadsheet-style formulas for individual student score cells.
-- The existing assignment-level bonus_formula remains unchanged.
ALTER TABLE public.student_scores
  ADD COLUMN IF NOT EXISTS score_formula text,
  ADD COLUMN IF NOT EXISTS score_formula_refs jsonb NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN public.student_scores.score_formula IS
  'Optional formula for this individual student and score assignment cell.';
COMMENT ON COLUMN public.student_scores.score_formula_refs IS
  'Formula variable references with assignment_id and optional student_id.';
