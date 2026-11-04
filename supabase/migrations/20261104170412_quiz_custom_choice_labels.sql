ALTER TABLE public.quizzes
  ADD COLUMN IF NOT EXISTS choice_labels_custom TEXT;

ALTER TABLE public.quizzes
  DROP CONSTRAINT IF EXISTS quizzes_choice_label_style_check;

ALTER TABLE public.quizzes
  ADD CONSTRAINT quizzes_choice_label_style_check
  CHECK (choice_label_style IN ('numeric', 'upper', 'lower', 'thai', 'arabic', 'custom'));
