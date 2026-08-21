-- เพิ่มระบบแจ้งเตือนด่วนให้กรอกแบบสำรวจค่ายลูกเสือ TERANGGANU
-- (ป๊อบอัพเต็มจอบนแดชบอร์ดหลัก + push notification เสริม) เฉพาะผู้เข้าร่วมค่ายจริงที่ยังไม่กรอก

-- RPC ใหม่: get_my_terangganu_survey_status() — เช็คสถานะของ "ตัวเอง" (auth.uid()) ว่าเป็นผู้เข้าร่วม
-- ค่าย TERANGGANU (นักเรียนหรือครู) หรือไม่ และกรอกแบบสำรวจแล้วหรือยัง — ปลอดภัยเรียกได้จากทุกหน้า
-- เพราะขอบเขตผูกกับ auth.uid() ของผู้เรียกเองเท่านั้น ไม่มีพารามิเตอร์ให้สอดแทรก
-- ดูนิยามฟังก์ชันเต็มในไมเกรชัน terangganu_survey_status_and_incomplete_targets ที่รันผ่าน MCP แล้ว

-- RPC ใหม่: get_terangganu_incomplete_survey_targets() — คืนรายชื่อ profile_id ของผู้เข้าร่วมค่าย
-- (นักเรียน+ครู) ที่ยัง "ไม่กรอกแบบสำรวจเลย" (ไม่มี registration แถวไหนเลย) เช็คสิทธิ์
-- terangganu_can(...,'settings') เหมือนฟังก์ชันจัดการอื่นของระบบนี้ — เรียกจาก edge function
-- send-push ผ่าน target: 'terangganu_incomplete_survey' (ดู supabase/functions/send-push/index.ts)

-- ฝั่งไคลเอนต์:
-- - js/ui.js: showTerangganuUrgentModal(role) — ป๊อบอัพเต็มจอ dismiss ได้เป็นรายวัน (localStorage)
-- - js/student.js / js/teacher.js: เรียก get_my_terangganu_survey_status() ตอน init() แล้วโชว์ป๊อบอัพ
--   ถ้า is_participant && !completed
-- - js/terangganu.js (renderSettings): ปุ่ม "📢 แจ้งเตือนด่วนตอนนี้" เรียก send-push target ใหม่
-- - แก้บั๊กแฝงที่เจอระหว่างทาง: js/teacher.js เมนู 'menu-terangganu' เดิมโชว์เฉพาะ campAccess.is_manager
--   ทำให้ครูทั่วไปที่เป็นผู้เข้าร่วมค่าย (ไม่ใช่ผู้จัดการ) ไม่มีทางเข้าเมนูได้เลย — แก้เป็น
--   is_manager || teacher_participant
