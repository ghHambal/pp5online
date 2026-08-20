-- ให้ผู้สมัครสภานักเรียนเลือกเองว่าอยากให้ "พี่สภา" คนไหนเป็นผู้รับรอง (เจาะจงเฉพาะคนนั้น
-- แทนที่จะเปิดเป็น pool กลางให้สมาชิกสภาเพศเดียวกันคนไหนก็รับรองแทนกันได้เหมือนเดิม)
--
-- ใบสมัครเก่าก่อนอัปเดตนี้ (requested_peer_endorser_id = NULL) ยังคงเป็น pool กลางแบบเดิม
-- ตามที่ getPendingPeerEndorsements/submitPeerEndorsement (js/council-api.js) กันไว้ให้แล้ว
--
-- รันแล้วบน production ผ่าน MCP เมื่อ 2026-08-20 — ไฟล์นี้เก็บไว้เป็นหลักฐาน/สำหรับ environment อื่น

ALTER TABLE council_applications
  ADD COLUMN IF NOT EXISTS requested_peer_endorser_id BIGINT REFERENCES council_members(id);
