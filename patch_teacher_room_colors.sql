-- patch_teacher_room_colors.sql
-- เก็บสีประจำห้องของครู เพื่อให้สีตารางสอน/การ์ดห้องเรียนตรงกันทุกเครื่อง
-- รัน 1 ครั้งใน Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.teacher_room_colors (
  id          BIGSERIAL PRIMARY KEY,
  teacher_id  INT NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  room_key    TEXT NOT NULL,
  class_name  TEXT,
  color_hex   TEXT NOT NULL CHECK (color_hex ~ '^#[0-9A-Fa-f]{6}$'),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (teacher_id, room_key)
);

ALTER TABLE public.teacher_room_colors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "teacher_room_colors_admin_all" ON public.teacher_room_colors;
DROP POLICY IF EXISTS "teacher_room_colors_teacher_own" ON public.teacher_room_colors;

CREATE POLICY "teacher_room_colors_admin_all"
ON public.teacher_room_colors
FOR ALL TO authenticated
USING (get_user_role() = 'admin')
WITH CHECK (get_user_role() = 'admin');

CREATE POLICY "teacher_room_colors_teacher_own"
ON public.teacher_room_colors
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
