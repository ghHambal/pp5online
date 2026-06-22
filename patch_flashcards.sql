-- patch_flashcards.sql
-- Run in Supabase Dashboard SQL Editor to set up tables and RLS policies.

CREATE TABLE IF NOT EXISTS public.flashcard_decks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id INTEGER NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  color_theme TEXT DEFAULT 'teal',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.flashcards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deck_id UUID NOT NULL REFERENCES public.flashcard_decks(id) ON DELETE CASCADE,
  front_text TEXT NOT NULL,
  back_text TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.flashcard_decks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flashcards ENABLE ROW LEVEL SECURITY;

-- ── Policies for flashcard_decks ──
DROP POLICY IF EXISTS "decks_admin_all" ON public.flashcard_decks;
DROP POLICY IF EXISTS "decks_teacher_own" ON public.flashcard_decks;

CREATE POLICY "decks_admin_all"
ON public.flashcard_decks
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');

CREATE POLICY "decks_teacher_own"
ON public.flashcard_decks
FOR ALL TO authenticated
USING (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
)
WITH CHECK (
  teacher_id IN (
    SELECT id FROM public.teachers WHERE profile_id = auth.uid()
  )
);

-- ── Policies for flashcards ──
DROP POLICY IF EXISTS "cards_admin_all" ON public.flashcards;
DROP POLICY IF EXISTS "cards_teacher_own" ON public.flashcards;

CREATE POLICY "cards_admin_all"
ON public.flashcards
FOR ALL TO authenticated
USING (public.get_user_role() = 'admin')
WITH CHECK (public.get_user_role() = 'admin');

CREATE POLICY "cards_teacher_own"
ON public.flashcards
FOR ALL TO authenticated
USING (
  deck_id IN (
    SELECT fd.id
    FROM public.flashcard_decks fd
    WHERE fd.teacher_id IN (
      SELECT id FROM public.teachers WHERE profile_id = auth.uid()
    )
  )
)
WITH CHECK (
  deck_id IN (
    SELECT fd.id
    FROM public.flashcard_decks fd
    WHERE fd.teacher_id IN (
      SELECT id FROM public.teachers WHERE profile_id = auth.uid()
    )
  )
);
