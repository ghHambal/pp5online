-- Feedback แบบสนทนาสองทาง + สิทธิ์เฉพาะเจ้าของเรื่องและแอดมิน
-- รันใน Supabase SQL Editor หนึ่งครั้งก่อนใช้งานหน้า Feedback รุ่น 10.22.380

BEGIN;

CREATE TABLE IF NOT EXISTS public.app_feedback_messages (
  id           BIGSERIAL PRIMARY KEY,
  feedback_id  BIGINT NOT NULL REFERENCES public.app_feedback(id) ON DELETE CASCADE,
  authored_by  UUID NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id) ON DELETE CASCADE,
  author_role  TEXT NOT NULL CHECK (author_role IN ('admin', 'teacher', 'student')),
  message      TEXT NOT NULL CHECK (char_length(trim(message)) BETWEEN 1 AND 2000),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS app_feedback_messages_feedback_created_idx
  ON public.app_feedback_messages(feedback_id, created_at);

ALTER TABLE public.app_feedback_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "feedback_messages_owner_or_admin_read" ON public.app_feedback_messages;
CREATE POLICY "feedback_messages_owner_or_admin_read"
ON public.app_feedback_messages FOR SELECT TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.app_feedback feedback
    WHERE feedback.id = feedback_id
      AND feedback.profile_id = auth.uid()
  )
  OR EXISTS (
    SELECT 1 FROM public.profiles profile
    WHERE profile.id = auth.uid()
      AND (profile.role = 'admin' OR profile.is_also_admin IS TRUE)
  )
);

DROP POLICY IF EXISTS "feedback_messages_owner_or_admin_insert" ON public.app_feedback_messages;
CREATE POLICY "feedback_messages_owner_or_admin_insert"
ON public.app_feedback_messages FOR INSERT TO authenticated
WITH CHECK (
  authored_by = auth.uid()
  AND (
    (
      author_role IN ('teacher', 'student')
      AND EXISTS (
        SELECT 1 FROM public.app_feedback feedback
        WHERE feedback.id = feedback_id
          AND feedback.profile_id = auth.uid()
          AND feedback.sender_role = author_role
      )
    )
    OR (
      author_role = 'admin'
      AND EXISTS (
        SELECT 1 FROM public.profiles profile
        WHERE profile.id = auth.uid()
          AND (profile.role = 'admin' OR profile.is_also_admin IS TRUE)
      )
    )
  )
);

-- ย้ายคำตอบแอดมินแบบเดิมเข้า timeline โดยไม่สร้างซ้ำ
INSERT INTO public.app_feedback_messages (feedback_id, authored_by, author_role, message, created_at)
SELECT feedback.id,
       admin_profile.id,
       'admin',
       feedback.admin_reply,
       COALESCE(feedback.replied_at, feedback.created_at)
FROM public.app_feedback feedback
CROSS JOIN LATERAL (
  SELECT profile.id
  FROM public.profiles profile
  WHERE profile.role = 'admin' OR profile.is_also_admin IS TRUE
  ORDER BY (profile.role = 'admin') DESC, profile.id
  LIMIT 1
) admin_profile
WHERE NULLIF(trim(feedback.admin_reply), '') IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM public.app_feedback_messages message
    WHERE message.feedback_id = feedback.id
      AND message.author_role = 'admin'
      AND message.message = feedback.admin_reply
  );

CREATE OR REPLACE FUNCTION public.touch_feedback_from_message()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.author_role = 'admin' THEN
    UPDATE public.app_feedback
    SET admin_reply = NEW.message,
        replied_at = NEW.created_at
    WHERE id = NEW.feedback_id;
  ELSE
    UPDATE public.app_feedback
    SET is_read = FALSE
    WHERE id = NEW.feedback_id;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS app_feedback_message_touch_parent ON public.app_feedback_messages;
CREATE TRIGGER app_feedback_message_touch_parent
AFTER INSERT ON public.app_feedback_messages
FOR EACH ROW EXECUTE FUNCTION public.touch_feedback_from_message();

GRANT SELECT, INSERT ON public.app_feedback_messages TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.app_feedback_messages_id_seq TO authenticated;

COMMIT;
