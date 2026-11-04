ALTER TABLE public.quizzes
  ADD COLUMN IF NOT EXISTS quiz_language TEXT NOT NULL DEFAULT 'th',
  ADD COLUMN IF NOT EXISTS quiz_language_custom TEXT,
  ADD COLUMN IF NOT EXISTS choice_label_style TEXT NOT NULL DEFAULT 'numeric';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quizzes_quiz_language_check'
      AND conrelid = 'public.quizzes'::regclass
  ) THEN
    ALTER TABLE public.quizzes
      ADD CONSTRAINT quizzes_quiz_language_check
      CHECK (quiz_language IN ('th', 'en', 'ar', 'jawi', 'rumi', 'custom'));
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'quizzes_choice_label_style_check'
      AND conrelid = 'public.quizzes'::regclass
  ) THEN
    ALTER TABLE public.quizzes
      ADD CONSTRAINT quizzes_choice_label_style_check
      CHECK (choice_label_style IN ('numeric', 'upper', 'lower', 'thai', 'arabic'));
  END IF;
END $$;
