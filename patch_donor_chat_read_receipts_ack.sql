-- patch_donor_chat_read_receipts_ack.sql
-- Phase 7 (นอกแผนเดิม เพิ่มตามคำขอ) — 2 ฟีเจอร์ใหม่ในแชท:
-- 1. "อ่านแล้ว" (read receipts) — ใช้ได้ทุกห้อง (กลุ่มใหญ่/แอดมิน/ห้องเรียน)
-- 2. "ประกาศให้นักเรียนรับทราบ" — เฉพาะแชทห้องเรียน ครูกดค้างข้อความตัวเองเลือกได้

-- ═══════════════════════════════════════════════════════════════════════
-- 1. อ่านแล้ว — cursor ต่อคนต่อห้อง (ไม่ใช่ log ต่อข้อความ เบากว่ามาก)
--    "อ่านข้อความ X แล้ว" = คนที่ last_read_message_id >= X.id
-- ═══════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.chat_room_reads (
  room_id BIGINT NOT NULL REFERENCES public.chat_rooms(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id) ON DELETE CASCADE,
  last_read_message_id BIGINT REFERENCES public.chat_messages(id) ON DELETE SET NULL,
  last_read_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (room_id, profile_id)
);
CREATE INDEX IF NOT EXISTS chat_room_reads_room_idx ON public.chat_room_reads(room_id);

ALTER TABLE public.chat_room_reads ENABLE ROW LEVEL SECURITY;

CREATE POLICY chat_room_reads_read ON public.chat_room_reads
  FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM chat_rooms r WHERE r.id = chat_room_reads.room_id));

CREATE POLICY chat_room_reads_write ON public.chat_room_reads
  FOR ALL TO authenticated
  USING (profile_id = auth.uid())
  WITH CHECK (
    profile_id = auth.uid()
    AND EXISTS (SELECT 1 FROM chat_rooms r WHERE r.id = chat_room_reads.room_id)
  );

GRANT SELECT, INSERT, UPDATE ON public.chat_room_reads TO authenticated;

-- ═══════════════════════════════════════════════════════════════════════
-- 2. ประกาศให้นักเรียนรับทราบ — เฉพาะแชทห้องเรียน
-- ═══════════════════════════════════════════════════════════════════════

ALTER TABLE public.chat_messages
  ADD COLUMN IF NOT EXISTS requires_ack BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE IF NOT EXISTS public.chat_message_acks (
  message_id BIGINT NOT NULL REFERENCES public.chat_messages(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id) ON DELETE CASCADE,
  acked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (message_id, profile_id)
);
CREATE INDEX IF NOT EXISTS chat_message_acks_message_idx ON public.chat_message_acks(message_id);

ALTER TABLE public.chat_message_acks ENABLE ROW LEVEL SECURITY;

CREATE POLICY chat_message_acks_read ON public.chat_message_acks
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM chat_messages m JOIN chat_rooms r ON r.id = m.room_id
      WHERE m.id = chat_message_acks.message_id
    )
  );

-- กดรับทราบได้แค่แถวตัวเอง ต้องเป็นข้อความที่ requires_ack=true จริง — immutable
-- (ไม่มี UPDATE/DELETE policy — กดรับทราบแล้วถอนไม่ได้ ตรงตามธรรมชาติของ "รับทราบแล้ว")
CREATE POLICY chat_message_acks_insert ON public.chat_message_acks
  FOR INSERT TO authenticated
  WITH CHECK (
    profile_id = auth.uid()
    AND EXISTS (SELECT 1 FROM chat_messages m WHERE m.id = chat_message_acks.message_id AND m.requires_ack = true)
  );

GRANT SELECT, INSERT ON public.chat_message_acks TO authenticated;

-- ตั้ง requires_ack ได้เฉพาะครูที่มีสิทธิ์เข้าถึงห้องเรียนนั้น (has_class_access) และ
-- room_type ต้องเป็น 'classroom' เท่านั้น — บังคับด้วย trigger เพราะ RLS แถวเดิม
-- (chat_messages_delete_update) อนุญาตกว้างกว่านี้ (รวมแอดมิน/เจ้าของข้อความทุกห้อง)
-- แต่ requires_ack ต้องแคบกว่านั้น เฉพาะครูเจ้าของห้องเรียนเท่านั้นจริงๆ
CREATE OR REPLACE FUNCTION public.enforce_chat_message_ack_toggle()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_room_type TEXT;
  v_class_id INT;
BEGIN
  IF NEW.requires_ack IS NOT DISTINCT FROM OLD.requires_ack THEN
    RETURN NEW;
  END IF;
  SELECT room_type, class_id INTO v_room_type, v_class_id FROM chat_rooms WHERE id = NEW.room_id;
  IF v_room_type <> 'classroom' THEN
    RAISE EXCEPTION 'ใช้ได้เฉพาะแชทห้องเรียนเท่านั้น';
  END IF;
  IF NOT public.has_class_access(v_class_id) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์ตั้งค่านี้';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_enforce_chat_message_ack_toggle ON public.chat_messages;
CREATE TRIGGER trg_enforce_chat_message_ack_toggle
  BEFORE UPDATE OF requires_ack ON public.chat_messages
  FOR EACH ROW EXECUTE FUNCTION public.enforce_chat_message_ack_toggle();

-- แก้ trigger เดิม (enforce_chat_message_delete_only จาก patch_donor_chat_message_delete.sql)
-- ให้ยกเว้น UPDATE ที่แก้แค่ requires_ack — ไม่งั้นจะถูกบังคับกลายเป็น "ลบ" ทุกครั้ง
-- (เจอบั๊กนี้ระหว่างทดสอบ ก่อน commit — trigger เดิมไม่แยกแยะว่า UPDATE ไหนคือลบจริง
-- กับ UPDATE ไหนคือแค่ toggle flag อื่น บังคับกลายเป็นลบหมดโดยไม่ตั้งใจ)
CREATE OR REPLACE FUNCTION public.enforce_chat_message_delete_only()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF OLD.deleted_at IS NOT NULL THEN
    RAISE EXCEPTION 'ข้อความนี้ถูกลบไปแล้ว';
  END IF;

  IF NEW.requires_ack IS DISTINCT FROM OLD.requires_ack
     AND NEW.body IS NOT DISTINCT FROM OLD.body
     AND NEW.image_url IS NOT DISTINCT FROM OLD.image_url
     AND NEW.deleted_at IS NOT DISTINCT FROM OLD.deleted_at THEN
    RETURN NEW;
  END IF;

  IF NEW.author_profile_id IS DISTINCT FROM OLD.author_profile_id
     OR NEW.author_role IS DISTINCT FROM OLD.author_role
     OR NEW.room_id IS DISTINCT FROM OLD.room_id
     OR NEW.created_at IS DISTINCT FROM OLD.created_at THEN
    RAISE EXCEPTION 'แก้ไขข้อความนี้ไม่ได้ ทำได้แค่ลบ/ยกเลิกการส่งเท่านั้น';
  END IF;

  NEW.body := NULL;
  NEW.image_url := NULL;
  NEW.deleted_at := now();
  NEW.deleted_by := auth.uid();
  RETURN NEW;
END;
$$;
