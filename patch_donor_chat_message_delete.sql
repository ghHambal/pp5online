-- patch_donor_chat_message_delete.sql
-- เพิ่มความสามารถ "ยกเลิกการส่ง" (เจ้าของข้อความเอง) และ "ลบ" (แอดมินทุกที่/
-- ครูเจ้าของห้องเรียนในห้องนั้น) ให้ chat_messages ทุกห้อง (donor_group/admin_dm/classroom)
--
-- ออกแบบเป็น soft-delete: ไม่ลบแถวจริง แค่ null body/image_url ทิ้ง + ประทับ
-- deleted_at/deleted_by — เนื้อหาจริงหายจากทุกช่องทางที่ client เห็นได้ (ไม่ใช่แค่ซ่อน
-- ฝั่ง UI) แต่แถวยังอยู่ (ไม่กระทบลำดับ/ไม่เกิดช่องว่างในการสนทนา, chat_bookmarks
-- ที่อ้างอิงข้อความนี้ไว้ก่อนหน้าไม่หลุด FK)
--
-- บังคับด้วย trigger ว่า UPDATE ทำได้แค่ "ลบ" เท่านั้น (เปลี่ยนเป็นค่าอื่นไม่ได้ ห้าม
-- แก้เนื้อหา ห้ามลบซ้ำ ห้ามเปลี่ยนเจ้าของ/ห้อง/เวลา) — RLS ข้างล่างตัดสินแค่ว่า "ใคร
-- มีสิทธิ์ยิง UPDATE ได้บ้าง" ส่วน trigger ตัดสินว่า "UPDATE นั้นทำอะไรได้บ้าง"

ALTER TABLE public.chat_messages
  ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS deleted_by UUID REFERENCES public.profiles(id);

-- แก้ CHECK เดิม (body IS NOT NULL OR image_url IS NOT NULL) ให้ยกเว้นกรณีลบแล้ว
ALTER TABLE public.chat_messages DROP CONSTRAINT IF EXISTS chat_messages_body_check;
ALTER TABLE public.chat_messages
  ADD CONSTRAINT chat_messages_body_check
  CHECK (body IS NOT NULL OR image_url IS NOT NULL OR deleted_at IS NOT NULL);

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
  IF NEW.author_profile_id IS DISTINCT FROM OLD.author_profile_id
     OR NEW.author_role IS DISTINCT FROM OLD.author_role
     OR NEW.room_id IS DISTINCT FROM OLD.room_id
     OR NEW.created_at IS DISTINCT FROM OLD.created_at THEN
    RAISE EXCEPTION 'แก้ไขข้อความนี้ไม่ได้ ทำได้แค่ลบ/ยกเลิกการส่งเท่านั้น';
  END IF;
  -- ไม่ว่า client จะส่ง payload อะไรมา บังคับผลลัพธ์เป็น "ลบ" เสมอ
  NEW.body := NULL;
  NEW.image_url := NULL;
  NEW.deleted_at := now();
  NEW.deleted_by := auth.uid();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_enforce_chat_message_delete_only ON public.chat_messages;
CREATE TRIGGER trg_enforce_chat_message_delete_only
  BEFORE UPDATE ON public.chat_messages
  FOR EACH ROW EXECUTE FUNCTION public.enforce_chat_message_delete_only();

-- ใครยิง UPDATE (=ลบ) ได้บ้าง: เจ้าของข้อความเอง, แอดมิน (ทุกห้อง), หรือครูที่มีสิทธิ์
-- เข้าถึงห้องเรียนนั้น (has_class_access) เฉพาะห้องที่เป็น room_type='classroom' เท่านั้น
-- (ไม่ให้ครูคนอื่นลบข้อความในกลุ่มใหญ่/แชทแอดมินของคนอื่นได้ — เป็นพื้นที่เพื่อนร่วมงาน
-- เท่ากัน ไม่มีใครเป็นเจ้าของห้อง)
DROP POLICY IF EXISTS chat_messages_delete_update ON public.chat_messages;
CREATE POLICY chat_messages_delete_update ON public.chat_messages
  FOR UPDATE TO authenticated
  USING (
    author_profile_id = auth.uid()
    OR public.get_user_role() = 'admin'
    OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_also_admin IS TRUE)
    OR EXISTS (
      SELECT 1 FROM chat_rooms r
      WHERE r.id = chat_messages.room_id AND r.room_type = 'classroom' AND public.has_class_access(r.class_id)
    )
  )
  WITH CHECK (
    author_profile_id = auth.uid()
    OR public.get_user_role() = 'admin'
    OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_also_admin IS TRUE)
    OR EXISTS (
      SELECT 1 FROM chat_rooms r
      WHERE r.id = chat_messages.room_id AND r.room_type = 'classroom' AND public.has_class_access(r.class_id)
    )
  );

GRANT UPDATE ON public.chat_messages TO authenticated;
