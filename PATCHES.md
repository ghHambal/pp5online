# SQL Patches — ปพ.5 ออนไลน์

> รัน patch ทั้งหมดใน **Supabase → SQL Editor**  
> รันตามลำดับหมายเลข — ถ้าข้ามไม่ได้จะมีหมายเหตุกำกับ

---

## ลำดับการรัน

### กลุ่ม A — โครงสร้างพื้นฐาน (รันก่อนใช้งานระบบ)

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 1 | `patch_missing_tables.sql` | เพิ่มตาราง/คอลัมน์ที่ขาดหายจาก schema หลัก | ✅ จำเป็น |
| 2 | `patch_departments_category.sql` | เพิ่ม `category` ใน departments + `phone` ใน master_subjects | ✅ จำเป็น |
| 3 | `patch_security_rls.sql` | Harden RLS policies — ป้องกันการแก้ role ตัวเอง ฯลฯ | ✅ จำเป็น |

### กลุ่ม B — ระบบการสอนและตาราง

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 4 | `patch_schedule.sql` | สร้างตาราง `teacher_schedules` + `school_periods` | ✅ จำเป็น |
| 5 | `patch_schedule_v2.sql` | เพิ่ม `subject_name`, `class_name`, `teacher_name`, `span_periods` ใน teacher_schedules | ✅ รันต่อจาก patch_schedule |
| 6 | `patch_course_doc_page2.sql` | เพิ่มตารางคำอธิบาย/มาตรฐาน/ตัวชี้วัดระดับคอร์ส สำหรับเอกสาร ปพ.5 หน้า 2 | ✅ จำเป็นสำหรับปุ่มคำอธิบายฯ |
| 7 | `patch_curriculum_standards.sql` | เพิ่มฐานข้อมูลหลักสูตรแกนกลางสำหรับเติมคำอธิบายฯ อัตโนมัติ | ✅ จำเป็นสำหรับเติมจากหลักสูตรจริง |
| 8 | `patch_class_sync.sql` | เพิ่ม system_config keys สำหรับ cell mapping ข้อมูลรายวิชา → Google Sheet | ✅ จำเป็น |
| 9 | `patch_teacher_room_colors.sql` | เพิ่มตารางสีประจำห้องของครู สำหรับตารางสอนและการ์ดห้องเรียน | ✅ จำเป็นสำหรับบันทึกสีข้ามเครื่อง |
| 10 | `patch_class_students_active.sql` | เพิ่มสถานะ active/inactive ของนักเรียนในรายวิชา | ✅ จำเป็นสำหรับจัดการนักเรียนออกกลางคัน |
| 11 | `patch_student_extra_fields.sql` | เพิ่ม `house_color`, `sports_shirt_size` ใน students และปุ่มแสดง/ซ่อน | ✅ จำเป็นสำหรับข้อมูลประจำสี/ไซด์เสื้อ |
| 12 | `patch_student_sheet_sync.sql` | เพิ่ม system_config keys สำหรับซิงก์ฐานข้อมูลนักเรียนจาก Google Sheet | ✅ จำเป็นสำหรับซิงก์นักเรียนรายสัปดาห์ |
| 13 | `patch_sync.sql` | เพิ่ม system_config keys สำหรับ Central GAS URL + ชีทกลาง | ✅ จำเป็น |

### กลุ่ม C — คะแนนพิเศษ

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 14 | `patch_life_skill.sql` | สร้างตาราง `life_skill_columns` + `life_skill_scores` + RLS | ✅ จำเป็น |
| 15 | `patch_reading_score.sql` | สร้างตาราง `reading_score_columns` + `reading_scores` + RLS | ✅ จำเป็น |
| 16 | `patch_reading_eval.sql` | เพิ่ม system_config keys สำหรับผลการประเมินอ่านคิดวิเคราะห์ | ✅ รันต่อจาก patch_reading_score |
| 17 | `patch_prayer_rls.sql` | เพิ่มสิทธิ์ Admin จัดการ `prayer_records` | ✅ จำเป็น |
| 18 | `patch_life_skill_homeroom_rls.sql` | RLS ให้ครูที่ปรึกษาสามัญแก้คะแนนทักษะชีวิตของนักเรียนในห้องตัวเอง | ✅ จำเป็นสำหรับบันทึกทักษะชีวิต |

### กลุ่ม D — ระบบ Login ครู

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 19 | `patch_teacher_login_username_codes.sql` | เพิ่ม `username` + `login_email` ใน teachers, normalize รหัสครู 4 หลัก, สร้าง `resolve_teacher_login_email()` RPC | ✅ จำเป็น สำหรับ login ด้วยรหัสครู/username |
| 20 | `patch_teacher_self_update.sql` | RLS policy ให้ครู update ข้อมูลตัวเองใน teachers table ได้ | ✅ จำเป็น |

### กลุ่ม E — Student Portal

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 21 | `patch_student_portal.sql` | RLS policies นักเรียน + `link_student_profile()` + `resolve_student_login_email()` | ✅ รันก่อน patch อื่นในกลุ่มนี้ |
| 22 | `patch_student_lookup.sql` | `lookup_student_by_code()` RPC สำหรับ anonymous lookup ตอน login | ✅ จำเป็น |
| 23 | `patch_student_teacher_schedule_read.sql` | RLS ให้นักเรียนอ่านตารางสอนครูที่สอนตัวเอง | ✅ จำเป็น |
| 24 | `patch_student_teacher_schedule_rpc.sql` | RPC `get_enrolled_teacher_schedule()` สำหรับนักเรียนดูตารางสอนครู | ✅ รันหลัง patch_student_teacher_schedule_read |
| 25 | `patch_student_my_scores_rls.sql` | RLS ให้นักเรียนอ่านคะแนนละหมาดของตัวเองในหน้า "คะแนนของฉัน" | ✅ จำเป็นสำหรับหน้า คะแนนของฉัน |
| 26 | `patch_teacher_prayer_records_rls.sql` | RLS ให้ครูบันทึก/แก้ไข/ลบคะแนนละหมาดของตัวเอง | ✅ จำเป็นสำหรับบันทึกละหมาดฝั่งครู |

### กลุ่ม F — ระบบคำร้องและ Theme

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 27 | `patch_exam_requests.sql` | เพิ่ม `exam_attended` + `exam_score` ใน exam_requests + RLS ครู | ✅ จำเป็น |
| 28 | `patch_theme_config.sql` | เติมค่าเริ่มต้น theme colors ใน system_config | 🔵 Optional — ถ้าต้องการสีเริ่มต้น |

### กลุ่ม G — เพิ่มเติมหลังเปิดใช้งาน (พ.ค.–มิ.ย. 2026)

> เรียงตามลำดับวันที่เพิ่มเข้า repo จริง (`git log`) — ไฟล์เหล่านี้ถูกเพิ่มทีหลังและยังไม่เคยอยู่ในตารางลำดับด้านบน

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 29 | `patch_admin_profile.sql` | SECURITY DEFINER function ให้แอดมิน upsert ข้อมูลส่วนตัวใน teachers table | ✅ จำเป็นสำหรับแอดมินแก้โปรไฟล์ครู |
| 30 | `patch_teacher_subject_manage.sql` | RLS policy ให้ครูจัดการ (update/delete) คอร์สวิชาของตัวเองได้ | ✅ จำเป็น |
| 31 | `patch_storage_public.sql` | เปิด public access bucket `system-assets` และ `teacher-photos` (โลโก้/ลายเซ็น/QR/รูปครู) | ✅ จำเป็นสำหรับโหลดรูปโดยไม่ต้อง auth |
| 32 | `patch_course_doc_page2_v2.sql` | เพิ่มคอลัมน์ "ระหว่างภาค" และ `topic_list` ใน `course_doc_page2` | ✅ รันต่อจาก patch_course_doc_page2 |
| 33 | `patch_class_schedule_links.sql` | สร้างตาราง `class_schedule_links` สำหรับฟีเจอร์เชื่อมโยงตารางสอน | ✅ จำเป็น |
| 34 | `patch_login_logs.sql` | สร้างตาราง `login_logs` เก็บสถิติเข้าใช้งานรายวัน/รายเดือน (อ่านได้แม้ anonymous) | ✅ จำเป็นสำหรับสถิติหน้า login |
| 35 | `patch_usage_stats.sql` | เพิ่มคอลัมน์ `last_seen_at` ใน teachers/students + RLS ให้แต่ละคนอัปเดตของตัวเองได้ | ✅ จำเป็นสำหรับติดตามการใช้งาน |
| 36 | `patch_classrooms.sql` | สร้างตาราง `classrooms` (ห้องเรียนในโรงเรียน) + RLS อ่านสาธารณะ | ✅ จำเป็น |
| 37 | `patch_supervisor_read_policies.sql` | RLS ให้ครูที่มี position (หัวหน้า) อ่าน class_students/attendances/student_scores ได้ทุกห้อง | ✅ จำเป็นสำหรับแดชบอร์ด supervisor |
| 38 | `patch_class_schedule_links_admin.sql` | Admin bypass policy สำหรับ `class_schedule_links` (จำเป็นตอน admin impersonation) | ✅ จำเป็น |
| 39 | `patch_course_doc_page2_v3.sql` | เพิ่มคอลัมน์ข้อความจุดประสงค์วัดผลที่ครูพิมพ์เพิ่มเอง ใน `course_doc_page2` | ✅ รันต่อจาก v2 |
| 40 | `patch_auto_enroll_v2.sql` | อัปเดต RPC `auto_enroll_students_by_room()` — match ทั้ง main_room/religion_room และ re-activate นักเรียนที่กลับมา | ✅ จำเป็น |
| 41 | `patch_student_sync_log.sql` | เพิ่ม `is_active` ใน students (soft-delete) + ตาราง `student_sync_logs` บันทึกประวัติซิงก์ | ✅ จำเป็น |
| 42 | `patch_supervisor_schedule_read.sql` | RLS ให้ supervisor/admin อ่านตารางสอนของครูทุกคน (เดิมเห็นแค่ของตัวเอง) | ✅ จำเป็น |
| 43 | `patch_source_class.sql` | เพิ่ม `source_class_id` ใน classes — เชื่อมห้องเรียน "เสมือน" กับห้องที่สอนจริง สำหรับดึง attendance/scores มาออก ปพ.5 | ✅ จำเป็นสำหรับฟีเจอร์ห้องเสมือน |
| 44 | `patch_auto_enroll_v3.sql` | ป้องกันการดึงนักเรียนที่ครูกด "ไม่เรียน" (is_active = false) กลับมาเป็น "กำลังเรียน" ระหว่างซิงก์ | ✅ รันต่อจาก patch_auto_enroll_v2 |
| 45 | `patch_prayer_rls_room_access.sql` | แก้ไข RLS SELECT ให้ครูที่ปรึกษาเห็นคะแนนละหมาดที่สภานักเรียนสแกน (ผ่านรหัส student_id) | ✅ จำเป็นสำหรับดูคะแนนสแกน |
| 46 | `patch_prayer_scanner_safety.sql` | เพิ่ม metadata และค่า config สำหรับกันสแกนห้องเดียวกัน + จำกัดกรอกรหัสต่อเดือน | ✅ จำเป็นสำหรับฟีเจอร์ความปลอดภัย scanner |

---

## วิธีรัน

1. เปิด [Supabase Dashboard](https://supabase.com) → เลือก project
2. ไปที่ **SQL Editor** → New Query
3. Copy เนื้อหาจากไฟล์ patch → Paste → กด **Run**
4. ตรวจสอบว่าไม่มี error ก่อนรัน patch ถัดไป

---

## หมายเหตุ

- Patch ทุกตัวใช้ `IF NOT EXISTS` / `DROP IF EXISTS` / `CREATE OR REPLACE` จึง **รันซ้ำได้ปลอดภัย**
- ยกเว้น `patch_teacher_login_username_codes.sql` ที่ต้องระวังเรื่อง teacher code normalization — ตรวจ duplicate ก่อนอัตโนมัติ
- `patch_security_rls.sql` เขียนโดย Codex — ครอบคลุม RLS ทั้งระบบ ควรรันหลัง schema หลักพร้อมแล้ว

---

## สถานะ Production (2025)

| กลุ่ม | สถานะ |
|-------|--------|
| A — พื้นฐาน | ✅ รันแล้ว |
| B — ตารางสอน | ✅ รันแล้ว |
| C — คะแนนพิเศษ | ✅ รันแล้ว |
| D — Login ครู | ✅ รันแล้ว |
| E — Student Portal | ✅ รันแล้ว |
| F — คำร้อง/Theme | ✅ รันแล้ว |
| G — เพิ่มเติม พ.ค.–มิ.ย. 2026 | ✅ รันแล้ว |
