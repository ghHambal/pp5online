-- แก้บั๊กประสิทธิภาพ RLS ร้ายแรง: ฟังก์ชันช่วยตรวจสิทธิ์ถูกตั้งเป็น VOLATILE ทั้งที่เป็น read-only ล้วน
-- รันจริงบน production แล้วเมื่อ 2026-09-07 ผ่าน Supabase MCP — ไฟล์นี้เก็บไว้เป็นหลักฐาน/อ้างอิงใน repo เท่านั้น
--
-- อาการที่เจอจริง: หน้า "เช็คชื่อ"/"คะแนน" ของครูโหลดไม่สำเร็จ ("canceling statement due to
-- statement timeout") เกิดกับห้องเรียนที่มีประวัติเช็คชื่อสะสมมาก (พบจริง 3,362+ แถวต่อห้อง)
-- ตรวจ log พบว่าเกิดซ้ำต่อเนื่องมาหลายชั่วโมงก่อนเจอ ไม่ใช่เหตุการณ์เดียว
--
-- สาเหตุ: has_class_access(class_id)/has_subject_access(subject_id) เป็น plpgsql function
-- ที่ query จริง (teachers/master_subjects/subject_co_teachers) แต่ไม่เคยระบุ volatility category
-- เลย ค่า default ของ Postgres คือ VOLATILE — RLS ใช้ฟังก์ชันนี้เป็น USING clause โดยรับ
-- class_id/subject_id ของ "แถวนั้นๆ" เป็นพารามิเตอร์ เพราะ VOLATILE ทำให้ query planner
-- ไม่สามารถ cache ผลลัพธ์ได้เลยแม้ค่าพารามิเตอร์จะเหมือนกันทุกแถว (เช่น query ที่ WHERE
-- class_id = $1 อยู่แล้ว) ต้องรันฟังก์ชัน (ซึ่งข้างในมี subquery ซ้อนอีก 2-3 ชั้น) ซ้ำทุกแถว
-- ยิ่งข้อมูลสะสมเยอะยิ่งช้าจนเกิน statement_timeout ในที่สุด
--
-- ฟังก์ชันทั้งสองนี้ถูกใช้เป็น RLS policy ใน 12 ตาราง: attendances, class_students, classes,
-- course_doc_page2, exam_requests, class_score_columns, student_scores, master_subjects,
-- quiz_student_finalizations, chat_rooms, chat_messages — แก้ที่ต้นตอ (ALTER FUNCTION
-- volatility) จุดเดียวแก้ครบทุกตารางที่ใช้ร่วมกัน ไม่ต้องแก้ policy ทีละตัว

alter function public.has_subject_access(integer) stable;
alter function public.has_class_access(integer) stable;

-- ระหว่างตรวจสอบ เจอ pattern เดียวกันซ้ำอีก 3 ฟังก์ชัน (ใช้กับ policy ของ chat_rooms/chat_messages
-- ในฟีเจอร์แชทห้องเรียน/แชทผู้สนับสนุน) — เป็น read-only ล้วนเหมือนกัน แก้ป้องกันไว้ก่อนเกิดปัญหาซ้ำ
alter function public.donor_chat_current_tier(integer) stable;
alter function public.donor_chat_min_tier_ok(integer, integer) stable;
alter function public.classroom_chat_unlocked(integer) stable;

-- ตรวจแล้วว่า policy สาย "หัวหน้ากลุ่มสาระ/กลุ่มย่อยดูข้อมูลครูคนอื่น" (attendances_supervisor_read,
-- class_students_supervisor_read, student_scores_supervisor_read, class_score_columns_supervisor_read)
-- เป็นคนละกลไก — ใช้ EXISTS subquery ฝังตรงในตัว policy เอง (ไม่ผ่านฟังก์ชันที่มีปัญหานี้)
-- และไม่ correlate กับ column ของแถวเลย (เช็คแค่สิทธิ์ผู้ดูเอง) จึงไม่เจอบั๊กประเภทเดียวกัน
