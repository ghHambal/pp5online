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
| 6 | `patch_class_sync.sql` | เพิ่ม system_config keys สำหรับ cell mapping ข้อมูลรายวิชา → Google Sheet | ✅ จำเป็น |
| 7 | `patch_sync.sql` | เพิ่ม system_config keys สำหรับ Central GAS URL + ชีทกลาง | ✅ จำเป็น |

### กลุ่ม C — คะแนนพิเศษ

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 8 | `patch_life_skill.sql` | สร้างตาราง `life_skill_columns` + `life_skill_scores` + RLS | ✅ จำเป็น |
| 9 | `patch_reading_score.sql` | สร้างตาราง `reading_score_columns` + `reading_scores` + RLS | ✅ จำเป็น |
| 10 | `patch_reading_eval.sql` | เพิ่ม system_config keys สำหรับผลการประเมินอ่านคิดวิเคราะห์ | ✅ รันต่อจาก patch_reading_score |
| 11 | `patch_prayer_rls.sql` | เพิ่มสิทธิ์ Admin จัดการ `prayer_records` | ✅ จำเป็น |

### กลุ่ม D — ระบบ Login ครู

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 12 | `patch_teacher_login_username_codes.sql` | เพิ่ม `username` + `login_email` ใน teachers, normalize รหัสครู 4 หลัก, สร้าง `resolve_teacher_login_email()` RPC | ✅ จำเป็น สำหรับ login ด้วยรหัสครู/username |
| 13 | `patch_teacher_self_update.sql` | RLS policy ให้ครู update ข้อมูลตัวเองใน teachers table ได้ | ✅ จำเป็น |

### กลุ่ม E — Student Portal

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 14 | `patch_student_portal.sql` | RLS policies นักเรียน + `link_student_profile()` + `resolve_student_login_email()` | ✅ รันก่อน patch อื่นในกลุ่มนี้ |
| 15 | `patch_student_lookup.sql` | `lookup_student_by_code()` RPC สำหรับ anonymous lookup ตอน login | ✅ จำเป็น |
| 16 | `patch_student_teacher_schedule_read.sql` | RLS ให้นักเรียนอ่านตารางสอนครูที่สอนตัวเอง | ✅ จำเป็น |
| 17 | `patch_student_teacher_schedule_rpc.sql` | RPC `get_enrolled_teacher_schedule()` สำหรับนักเรียนดูตารางสอนครู | ✅ รันหลัง patch_student_teacher_schedule_read |
| 18 | `patch_student_my_scores_rls.sql` | RLS ให้นักเรียนอ่านคะแนนละหมาดของตัวเองในหน้า "คะแนนของฉัน" | ✅ จำเป็นสำหรับหน้า คะแนนของฉัน |

### กลุ่ม F — ระบบคำร้องและ Theme

| ลำดับ | ไฟล์ | สิ่งที่ทำ | จำเป็น? |
|-------|------|-----------|---------|
| 19 | `patch_exam_requests.sql` | เพิ่ม `exam_attended` + `exam_score` ใน exam_requests + RLS ครู | ✅ จำเป็น |
| 20 | `patch_theme_config.sql` | เติมค่าเริ่มต้น theme colors ใน system_config | 🔵 Optional — ถ้าต้องการสีเริ่มต้น |

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
