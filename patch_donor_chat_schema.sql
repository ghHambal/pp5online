-- patch_donor_chat_schema.sql
-- Phase 1 ของฟีเจอร์ "แชทสำหรับครูผู้สนับสนุน" (Donor Chat) — ดูแผนเต็มที่
-- /Users/admin/.claude/plans/linked-fluttering-ember.md
-- สร้างตาราง 5 ตัว + ฟังก์ชัน SQL + RLS + storage bucket เท่านั้น ยังไม่มี UI

-- ═══════════════════════════════════════════════════════════════════════
-- 1. ตาราง
-- ═══════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS public.chat_rooms (
  id BIGSERIAL PRIMARY KEY,
  room_type TEXT NOT NULL CHECK (room_type IN ('donor_group','admin_dm','classroom')),
  teacher_id INT REFERENCES public.teachers(id) ON DELETE CASCADE,
  class_id INT REFERENCES public.classes(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS chat_rooms_admin_dm_teacher_uidx
  ON public.chat_rooms(teacher_id) WHERE room_type = 'admin_dm';
CREATE UNIQUE INDEX IF NOT EXISTS chat_rooms_classroom_class_uidx
  ON public.chat_rooms(class_id) WHERE room_type = 'classroom';

CREATE TABLE IF NOT EXISTS public.chat_messages (
  id BIGSERIAL PRIMARY KEY,
  room_id BIGINT NOT NULL REFERENCES public.chat_rooms(id) ON DELETE CASCADE,
  author_profile_id UUID NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id) ON DELETE CASCADE,
  author_role TEXT NOT NULL CHECK (author_role IN ('admin','teacher','student')),
  body TEXT,
  image_url TEXT,
  academic_year TEXT NOT NULL DEFAULT '',
  semester TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (body IS NOT NULL OR image_url IS NOT NULL)
);
CREATE INDEX IF NOT EXISTS chat_messages_room_created_idx ON public.chat_messages(room_id, created_at);

CREATE TABLE IF NOT EXISTS public.chat_announcements (
  id BIGSERIAL PRIMARY KEY,
  room_id BIGINT NOT NULL REFERENCES public.chat_rooms(id) ON DELETE CASCADE,
  created_by UUID NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id),
  body TEXT NOT NULL CHECK (char_length(trim(body)) BETWEEN 1 AND 2000),
  image_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS chat_announcements_room_created_idx ON public.chat_announcements(room_id, created_at);

CREATE TABLE IF NOT EXISTS public.chat_bookmarks (
  id BIGSERIAL PRIMARY KEY,
  message_id BIGINT NOT NULL REFERENCES public.chat_messages(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(message_id, profile_id)
);

CREATE TABLE IF NOT EXISTS public.chat_classroom_free_pick (
  id BIGSERIAL PRIMARY KEY,
  teacher_id INT NOT NULL REFERENCES public.teachers(id) ON DELETE CASCADE,
  class_id INT NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  academic_year TEXT NOT NULL,
  semester TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(teacher_id, academic_year, semester)
);

-- ═══════════════════════════════════════════════════════════════════════
-- 2. ฟังก์ชัน — คำนวณสิทธิ์ตามยอดโดเนท "ภายในภาคเรียนปัจจุบันเท่านั้น"
--    (แยกจาก window._pp5DonorTierIndex ของเดิมที่เป็นยอดสะสมตลอดชีพ — ห้ามใช้ปนกัน)
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.donor_chat_min_tier_ok(p_teacher_id INT, p_min_tier INT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_semester_start DATE;
  v_total NUMERIC;
  v_tiers_raw TEXT;
  v_tier_amounts NUMERIC[];
  v_tier_index INT := 0;
  i INT;
BEGIN
  IF p_teacher_id IS NULL THEN
    RETURN FALSE;
  END IF;

  SELECT value::DATE INTO v_semester_start FROM system_config WHERE key = 'semester_start';

  SELECT COALESCE(SUM(amount), 0) INTO v_total
  FROM payment_requests
  WHERE teacher_id = p_teacher_id
    AND package_type = 'donation'
    AND status = 'approved'
    AND (v_semester_start IS NULL OR reviewed_at >= v_semester_start);

  SELECT value INTO v_tiers_raw FROM system_config WHERE key = 'donationStickerTiers';

  IF v_tiers_raw IS NULL OR trim(v_tiers_raw) = '' THEN
    -- ค่า default เดียวกับ _parseDonationStickers ฝั่ง JS (js/teacher.js)
    v_tier_amounts := ARRAY[49,99,149,199,249];
  ELSE
    SELECT array_agg((split_part(line, '|', 1))::NUMERIC ORDER BY (split_part(line, '|', 1))::NUMERIC ASC)
    INTO v_tier_amounts
    FROM unnest(string_to_array(v_tiers_raw, E'\n')) AS line
    WHERE trim(line) <> '';
  END IF;

  IF v_tier_amounts IS NULL THEN
    RETURN FALSE;
  END IF;

  FOR i IN 1..array_length(v_tier_amounts, 1) LOOP
    IF v_total >= v_tier_amounts[i] THEN
      v_tier_index := i;
    END IF;
  END LOOP;

  RETURN v_tier_index >= p_min_tier;
END;
$$;

CREATE OR REPLACE FUNCTION public.classroom_chat_unlocked(p_class_id INT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INT;
  v_academic_year TEXT;
  v_semester TEXT;
BEGIN
  SELECT ms.teacher_id INTO v_teacher_id
  FROM classes c JOIN master_subjects ms ON ms.id = c.course_id
  WHERE c.id = p_class_id;

  IF v_teacher_id IS NULL THEN
    RETURN FALSE;
  END IF;

  IF public.donor_chat_min_tier_ok(v_teacher_id, 3) THEN
    RETURN TRUE;
  END IF;

  SELECT value INTO v_academic_year FROM system_config WHERE key = 'academicYear';
  SELECT value INTO v_semester FROM system_config WHERE key = 'semester';

  RETURN EXISTS (
    SELECT 1 FROM chat_classroom_free_pick
    WHERE class_id = p_class_id
      AND teacher_id = v_teacher_id
      AND academic_year = v_academic_year
      AND semester = v_semester
  );
END;
$$;

-- ═══════════════════════════════════════════════════════════════════════
-- 3. Trigger — stamp academic_year/semester จาก system_config เสมอ (ไม่เชื่อค่าจาก client)
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.stamp_chat_message_term()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_year TEXT;
  v_sem TEXT;
BEGIN
  SELECT value INTO v_year FROM system_config WHERE key = 'academicYear';
  SELECT value INTO v_sem FROM system_config WHERE key = 'semester';
  NEW.academic_year := COALESCE(v_year, '');
  NEW.semester := COALESCE(v_sem, '');
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_stamp_chat_message_term ON public.chat_messages;
CREATE TRIGGER trg_stamp_chat_message_term
  BEFORE INSERT ON public.chat_messages
  FOR EACH ROW EXECUTE FUNCTION public.stamp_chat_message_term();

-- ═══════════════════════════════════════════════════════════════════════
-- 4. RPC — สร้าง/ดึงห้องแบบ atomic (ไม่ให้ client INSERT chat_rooms ตรงๆ)
-- ═══════════════════════════════════════════════════════════════════════

CREATE OR REPLACE FUNCTION public.get_or_create_admin_dm_room()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INT;
  v_room_id BIGINT;
BEGIN
  SELECT id INTO v_teacher_id FROM teachers WHERE profile_id = auth.uid();
  IF v_teacher_id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบข้อมูลครู';
  END IF;

  IF NOT public.donor_chat_min_tier_ok(v_teacher_id, 1) THEN
    RAISE EXCEPTION 'สิทธิ์นี้สำหรับครูผู้สนับสนุนเท่านั้น';
  END IF;

  SELECT id INTO v_room_id FROM chat_rooms WHERE room_type = 'admin_dm' AND teacher_id = v_teacher_id;
  IF v_room_id IS NOT NULL THEN
    RETURN v_room_id;
  END IF;

  INSERT INTO chat_rooms (room_type, teacher_id) VALUES ('admin_dm', v_teacher_id)
  ON CONFLICT (teacher_id) WHERE room_type = 'admin_dm' DO NOTHING
  RETURNING id INTO v_room_id;

  IF v_room_id IS NULL THEN
    SELECT id INTO v_room_id FROM chat_rooms WHERE room_type = 'admin_dm' AND teacher_id = v_teacher_id;
  END IF;

  RETURN v_room_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_or_create_classroom_chat_room(p_class_id INT)
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_room_id BIGINT;
  v_is_teacher BOOLEAN;
  v_is_student BOOLEAN;
BEGIN
  IF NOT public.classroom_chat_unlocked(p_class_id) THEN
    RAISE EXCEPTION 'ห้องเรียนนี้ยังไม่เปิดใช้งานแชท';
  END IF;

  v_is_teacher := public.has_class_access(p_class_id);
  v_is_student := EXISTS (
    SELECT 1 FROM class_students cs JOIN students s ON s.id = cs.student_id
    WHERE cs.class_id = p_class_id AND cs.is_active = true AND s.profile_id = auth.uid()
  );

  IF NOT (v_is_teacher OR v_is_student OR public.get_user_role() = 'admin') THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์เข้าถึงห้องเรียนนี้';
  END IF;

  SELECT id INTO v_room_id FROM chat_rooms WHERE room_type = 'classroom' AND class_id = p_class_id;
  IF v_room_id IS NOT NULL THEN
    RETURN v_room_id;
  END IF;

  INSERT INTO chat_rooms (room_type, class_id) VALUES ('classroom', p_class_id)
  ON CONFLICT (class_id) WHERE room_type = 'classroom' DO NOTHING
  RETURNING id INTO v_room_id;

  IF v_room_id IS NULL THEN
    SELECT id INTO v_room_id FROM chat_rooms WHERE room_type = 'classroom' AND class_id = p_class_id;
  END IF;

  RETURN v_room_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.pick_classroom_chat_free_room(p_class_id INT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_teacher_id INT;
  v_year TEXT;
  v_sem TEXT;
BEGIN
  SELECT id INTO v_teacher_id FROM teachers WHERE profile_id = auth.uid();
  IF v_teacher_id IS NULL THEN
    RAISE EXCEPTION 'ไม่พบข้อมูลครู';
  END IF;

  IF NOT public.has_class_access(p_class_id) THEN
    RAISE EXCEPTION 'ไม่มีสิทธิ์เข้าถึงห้องเรียนนี้';
  END IF;

  SELECT value INTO v_year FROM system_config WHERE key = 'academicYear';
  SELECT value INTO v_sem FROM system_config WHERE key = 'semester';

  INSERT INTO chat_classroom_free_pick (teacher_id, class_id, academic_year, semester)
  VALUES (v_teacher_id, p_class_id, v_year, v_sem)
  ON CONFLICT (teacher_id, academic_year, semester) DO NOTHING;

  RETURN FOUND;
END;
$$;

-- ═══════════════════════════════════════════════════════════════════════
-- 5. RLS
-- ═══════════════════════════════════════════════════════════════════════

ALTER TABLE public.chat_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_classroom_free_pick ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS chat_rooms_donor_group_read ON public.chat_rooms;
CREATE POLICY chat_rooms_donor_group_read ON public.chat_rooms
  FOR SELECT TO authenticated
  USING (
    room_type = 'donor_group' AND (
      public.get_user_role() = 'admin'
      OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_also_admin IS TRUE)
      OR EXISTS (SELECT 1 FROM teachers t WHERE t.profile_id = auth.uid() AND public.donor_chat_min_tier_ok(t.id, 1))
    )
  );

DROP POLICY IF EXISTS chat_rooms_admin_dm_read ON public.chat_rooms;
CREATE POLICY chat_rooms_admin_dm_read ON public.chat_rooms
  FOR SELECT TO authenticated
  USING (
    room_type = 'admin_dm' AND (
      public.get_user_role() = 'admin'
      OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_also_admin IS TRUE)
      OR teacher_id IN (SELECT id FROM teachers WHERE profile_id = auth.uid())
    )
  );

DROP POLICY IF EXISTS chat_rooms_classroom_read ON public.chat_rooms;
CREATE POLICY chat_rooms_classroom_read ON public.chat_rooms
  FOR SELECT TO authenticated
  USING (
    room_type = 'classroom' AND (
      public.get_user_role() = 'admin'
      OR (public.has_class_access(class_id) AND public.classroom_chat_unlocked(class_id))
      OR (
        public.classroom_chat_unlocked(class_id)
        AND EXISTS (
          SELECT 1 FROM class_students cs JOIN students s ON s.id = cs.student_id
          WHERE cs.class_id = chat_rooms.class_id AND cs.is_active = true AND s.profile_id = auth.uid()
        )
      )
    )
  );

DROP POLICY IF EXISTS chat_messages_read ON public.chat_messages;
CREATE POLICY chat_messages_read ON public.chat_messages
  FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM chat_rooms r WHERE r.id = chat_messages.room_id));

DROP POLICY IF EXISTS chat_messages_insert ON public.chat_messages;
CREATE POLICY chat_messages_insert ON public.chat_messages
  FOR INSERT TO authenticated
  WITH CHECK (
    author_profile_id = auth.uid()
    AND EXISTS (SELECT 1 FROM chat_rooms r WHERE r.id = chat_messages.room_id)
    AND (
      (author_role = 'admin' AND (public.get_user_role() = 'admin' OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_also_admin IS TRUE)))
      OR (author_role = 'teacher' AND EXISTS (SELECT 1 FROM teachers WHERE profile_id = auth.uid()))
      OR (author_role = 'student' AND EXISTS (SELECT 1 FROM students WHERE profile_id = auth.uid()))
    )
  );

DROP POLICY IF EXISTS chat_announcements_read ON public.chat_announcements;
CREATE POLICY chat_announcements_read ON public.chat_announcements
  FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM chat_rooms r WHERE r.id = chat_announcements.room_id));

DROP POLICY IF EXISTS chat_announcements_admin_write ON public.chat_announcements;
CREATE POLICY chat_announcements_admin_write ON public.chat_announcements
  FOR ALL TO authenticated
  USING (public.get_user_role() = 'admin' OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_also_admin IS TRUE))
  WITH CHECK (public.get_user_role() = 'admin' OR EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_also_admin IS TRUE));

DROP POLICY IF EXISTS chat_bookmarks_own ON public.chat_bookmarks;
CREATE POLICY chat_bookmarks_own ON public.chat_bookmarks
  FOR ALL TO authenticated
  USING (profile_id = auth.uid())
  WITH CHECK (profile_id = auth.uid());

DROP POLICY IF EXISTS chat_classroom_free_pick_read ON public.chat_classroom_free_pick;
CREATE POLICY chat_classroom_free_pick_read ON public.chat_classroom_free_pick
  FOR SELECT TO authenticated
  USING (
    public.get_user_role() = 'admin'
    OR teacher_id IN (SELECT id FROM teachers WHERE profile_id = auth.uid())
  );

-- ═══════════════════════════════════════════════════════════════════════
-- 6. Grants
-- ═══════════════════════════════════════════════════════════════════════

GRANT SELECT, INSERT ON public.chat_rooms TO authenticated; -- INSERT ไม่มี policy รองรับ = ปฏิเสธเสมอ ผ่านได้แค่ทาง RPC (SECURITY DEFINER)
GRANT SELECT, INSERT ON public.chat_messages TO authenticated;
GRANT SELECT ON public.chat_announcements TO authenticated;
GRANT INSERT, UPDATE ON public.chat_announcements TO authenticated; -- ถูกจำกัดจริงด้วย RLS policy ด้านบน
GRANT SELECT, INSERT, DELETE ON public.chat_bookmarks TO authenticated;
GRANT SELECT ON public.chat_classroom_free_pick TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

GRANT EXECUTE ON FUNCTION public.donor_chat_min_tier_ok(INT, INT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.classroom_chat_unlocked(INT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_or_create_admin_dm_room() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_or_create_classroom_chat_room(INT) TO authenticated;
GRANT EXECUTE ON FUNCTION public.pick_classroom_chat_free_room(INT) TO authenticated;

-- ═══════════════════════════════════════════════════════════════════════
-- 7. Seed ห้องกลุ่มใหญ่ (singleton)
-- ═══════════════════════════════════════════════════════════════════════

INSERT INTO public.chat_rooms (room_type)
SELECT 'donor_group'
WHERE NOT EXISTS (SELECT 1 FROM public.chat_rooms WHERE room_type = 'donor_group');

-- ═══════════════════════════════════════════════════════════════════════
-- 8. Storage bucket สำหรับรูปแชท
-- ═══════════════════════════════════════════════════════════════════════

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('chat-images', 'chat-images', true, 512000, ARRAY['image/jpeg','image/png','image/webp'])
ON CONFLICT (id) DO UPDATE SET public = true, file_size_limit = 512000;

DROP POLICY IF EXISTS "chat-images public read" ON storage.objects;
CREATE POLICY "chat-images public read"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'chat-images');

DROP POLICY IF EXISTS "chat-images authenticated upload" ON storage.objects;
CREATE POLICY "chat-images authenticated upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'chat-images');
