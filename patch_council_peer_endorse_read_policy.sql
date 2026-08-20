-- แก้บั๊ก: สมาชิกสภาที่ถูกเลือกเป็นผู้รับรอง ไม่เห็นใบสมัครที่รอตัวเองรับรองเลย
--
-- สาเหตุจริง: ตาราง council_applications มีนโยบาย UPDATE (council_applications_peer_
-- endorse_write) ให้สมาชิกสภาที่ active + เพศตรงกับตำแหน่งที่สมัคร แก้ไขแถวเพื่อรับรองได้
-- แต่ไม่เคยมีนโยบาย SELECT คู่กันเลยตั้งแต่สร้างฟีเจอร์นี้ (2026-08-16) — ทำให้ query
-- getPendingPeerEndorsements() คืนแถวว่างเปล่าเสมอสำหรับสมาชิกสภาทุกคน (มองไม่เห็นแถวเลย
-- ก่อนจะไปถึงขั้นแก้ไขด้วยซ้ำ) ไม่เกี่ยวกับฟีเจอร์ "เลือกพี่สภาเจาะจง" ที่เพิ่งเพิ่มไป — เป็น
-- ช่องโหว่เดิมที่ไม่เคยถูกทดสอบจริงมาก่อน
--
-- แก้โดยเพิ่มนโยบาย SELECT ที่มีเงื่อนไขเดียวกับนโยบาย UPDATE เป๊ะๆ
--
-- รันแล้วบน production ผ่าน MCP เมื่อ 2026-08-20 — ไฟล์นี้เก็บไว้เป็นหลักฐาน/สำหรับ environment อื่น

CREATE POLICY council_applications_peer_endorse_read ON council_applications
FOR SELECT
USING (EXISTS (
  SELECT 1 FROM council_members cm
  JOIN council_positions cp ON cp.id = cm.position_id
  JOIN council_positions target_pos ON target_pos.id = council_applications.position_id
  WHERE cm.status = 'active' AND cp.gender = target_pos.gender
    AND cm.student_id IN (SELECT students.id FROM students WHERE students.profile_id = auth.uid())
));
