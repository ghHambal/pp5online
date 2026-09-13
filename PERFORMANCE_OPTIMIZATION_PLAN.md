# แผน Performance Optimization — ปพ.5 Online และระบบที่ใช้ฐานร่วมกัน

วันที่ตรวจ: 13 กันยายน 2026 (Asia/Bangkok)
สถานะ: วิเคราะห์ Source Code และเสนอแผนเท่านั้น — ยังไม่อนุมัติให้ Implement

## 1. ขอบเขตและระดับความเชื่อมั่น

อ่าน `01_SUPABASE_PERFORMANCE_OPTIMIZATION.md` ครบทั้ง 26 หัวข้อและหลักการท้ายไฟล์แล้ว ใช้เป็น MASTER ของรอบนี้ โดยคำสั่งล่าสุดของผู้ใช้จำกัดงานไว้ที่ Discover → Audit → Plan เท่านั้น ไม่ดำเนิน STEP Implement/Validate runtime/Measure after/Report ในรอบนี้

- ไม่แก้ Source Code, SQL, RLS, schema, dependency หรือ business logic; ไม่ commit/push/deploy
- Supabase เป็น Source of Truth; ความถูกต้องของคะแนนและสิทธิ์สำคัญกว่าความเร็ว
- ไม่เพิ่ม Offline-First, Write Queue, Background Sync หรือ Conflict Resolution
- สแกน inventory และรูปแบบ data access ของ source ทั่ว workspace แล้วอ่านเส้นทางสำคัญเชิงลึก ไม่ได้อ้างว่าได้ทดสอบทุกฟังก์ชันหรือเปิดอ่านทุกบรรทัดของทุกไฟล์
- PP5: สแกน source/SQL/HTML/GS 383 ไฟล์ รวม SQL 193 ไฟล์; พบชื่อ RPC แบบ literal 134 ชื่อ ตัวเลขนี้เป็น lexical inventory ไม่ใช่จำนวน request หรือ object ที่มีจริงใน production
- สำรวจ AZIZGAMES 56 ไฟล์, DEPAZ 25 ไฟล์, pokkrong-online 22 ไฟล์, wen 10 ไฟล์, AR_Pattani2 2 ไฟล์ source และ reference ของ AZFUTSALCUP/ReGrade เพิ่มเติม
- ไม่นับ dependency, generated bundle, media, outputs, tmp, backup และเครื่องมือ unrelated เช่น open-design เป็น active application source; ตรวจ entrypoint ที่ชี้ไป bundle แทนการใช้ bundle เป็นหลักฐานต้นฉบับ
- มีงานเดิมค้างใน worktree เช่น `js/sports-checkin.js`, `js/ui.js`, `azizgames.html`, SQL กรรมการกีฬา และไฟล์อื่น เก็บทั้งหมดไว้ตามเดิม ข้อค้นพบอ้าง working source ขณะตรวจ ไม่รับรองว่าตรงกับ deployed version

**หลักฐาน 3 ระดับ**

1. **ยืนยันจากโค้ด**: พบ call chain, query, timer หรือ SQL definition จริง พร้อมตำแหน่งอ้างอิง
2. **ความเสี่ยงจากโค้ด**: รูปแบบอาจทำให้ช้าหรือเกิด race แต่ยังไม่มี runtime trace ยืนยันความถี่/ผลจริง
3. **ต้องวัดฐานจริง**: CPU/RAM, slow query, index ที่ติดตั้งจริง, query plan, RLS ที่มีผลล่าสุด, traffic และ peak concurrency

รอบนี้ไม่มีการเชื่อมฐานจริงหรือเก็บ runtime baseline ไม่มี EXPLAIN ที่รันใหม่ ไม่ยิง load test ใส่ production และไม่อ้างตัวเลขความเร็ว/CPU ที่ลดได้เป็นผลทดสอบแล้ว เอกสาร SQL ที่เขียนว่าเคย deploy หรือเคยเร็ว ~58 ms เป็นประวัติใน repository ไม่ใช่หลักฐานสดของรอบนี้

## 2. Architecture ที่พบ

### 2.1 ระบบหลัก

| ชั้น | Source / พฤติกรรมจริง |
|---|---|
| Frontend | Vite 5 + Vanilla JavaScript ES modules + Tailwind; `package.json`, `vite.config.js` มีหลาย HTML entrypoints |
| Route | หน้าใหญ่แยก `index.html`, `student-login.html`, `teacher.html`, `dashboard.html`, `student.html`; ภายในครูใช้ `ROUTES`/`navigate()` ใน `js/teacher.js`; render HTML และผูก DOM events โดยตรง |
| State | module variables, `window._classCache`, `window._classesFlat`, closure state และ local/session storage; ไม่พบ shared query-cache library ใน dependency หลัก |
| Data access | `js/supabase.js` สร้าง client หลักหนึ่ง instance ต่อ module context; `js/api.js`, `student-api.js`, `quiz-api.js`, `council-api.js`, `regrade-api.js`, `terangganu-api.js`, `certificates-api.js` และ query ตรงใน view |
| Backend | Supabase Auth + PostgREST + PostgreSQL RPC/RLS/triggers + Realtime + Storage; browser ติดต่อโดยตรงเป็นหลัก ไม่มี application backend กลางที่ deduplicate ทุก request |
| SQL | `schema.sql`, `migrate_v3.sql` และ patch จำนวนมากที่ override ฟังก์ชัน/นโยบายชื่อเดิม; จัดลำดับจากชื่อไฟล์อย่างเดียวไม่ได้ และห้ามนำ schema.sql ซึ่งมี DROP TABLE ไป apply เพื่อ optimize |
| Edge Functions | Deno: `gemini-proxy`, `send-push`, `notify-upcoming-periods`, `notify-exam-reminders`, `admin-impersonate`, `google-oauth-redirect`, `autoscale-tick` |
| GAS | `js/sync.js` → `gas/pp5-sync.gs` → Google Sheets; มีงาน import/sync นักเรียนกลับ Supabase ด้วย ตรวจแยกจาก latency ของ Postgres |
| PWA | `public/sw.js` ทำ push/notification lifecycle; ไม่พบ fetch handler สำหรับ cache response ฐานข้อมูล |
| Embedded app | `js/azizgames-modal.js` เปิด `azizgames.html`/React bundle; `js/azfutsal.js` ใช้ client หลักและ state ของตนเอง; iframe เป็น context เพิ่มที่ไม่ได้แชร์ in-memory query cache กับ parent |

### 2.2 ขอบเขตฐานข้อมูลข้ามระบบ

| ระบบ / ต้นฉบับ | การเชื่อมที่ตรวจพบ | ผลต่อขอบเขตงาน |
|---|---|---|
| PP5 รวมครู/นักเรียน/ผู้บริหาร/ละหมาด/Quiz/ค่าย/สภา/แก้ค้าง/กีฬา/เกียรติบัตร | `js/supabase.js`: project `isupghduywzqbmnjgtip` | อยู่ใน audit ฐานหลัก |
| AZIZGAMES `/Users/admin/Azizsatn-Projects/AZIZGAMES` | `src/context/Supabase.js` default และ `.env.local` ชี้ project เดียวกับ PP5 | เป็นผู้ใช้ฐานร่วมที่ต้อง optimize พร้อมกัน; local config ไม่รับรอง remote build |
| AZFUTSAL ที่ใช้งานแบบ integrated | `js/azfutsal.js` → PP5 client | ฐานหลัก; ใช้ตาราง `azfutsal_*` และ identity/student ร่วม |
| สภาและแก้ค้างแบบ integrated | `js/council-api.js`, `js/regrade-api.js` → PP5 client | ฐานหลัก แม้มีระบบ legacy ชื่อคล้ายกัน |
| wen | `js/wen-duty.js`, source `wen/index.html`: project `zhjqkylesnhcotpkzoxr` | ฐานแยก เชื่อมด้วยรหัสครู; widget ทำให้หน้า PP5 รอได้ แต่ไม่ใช่ CPU ของฐาน PP5 โดยตรง |
| DEPAZ | `src/supabaseClient.js` + local `.env`: project `mnywfxnrftmxkxkmnelv` | ฐานแยก; อย่าเหมารวม `council_*` ของ DEPAZ กับของ PP5 |
| pokkrong-online | `js/supabase.js` + local `.env.local`: project `doihyipkkjmnedslcgkb` | ฐานแยก แม้ใช้ชื่อตาราง teachers/students เหมือนกัน |
| ReGrade legacy | `ReGrade/codeระบบแก้ค้างเก่า.txt`: SpreadsheetApp/google.script.run | reference ของ GAS ไม่ใช่หลักฐานว่าโหลดฐาน PP5 |
| AZFUTSALCUP legacy/redesign | extracted source มี SpreadsheetApp/google.script.run | แยกจาก integrated `js/azfutsal.js`; ไม่ใช้ reference PDF แทน active code |
| AR_Pattani2 | `Code.gs`, `Index.html`: Google Sheets/Drive | ไม่พบการเชื่อม Supabase ใน source ที่สแกน |

ไฟล์ทดสอบ AZIZGAMES บางไฟล์ชี้ project เก่า `llwpgacxjuyyrkybbsji` แต่ไม่ได้ใช้เป็นข้อสรุปของ runtime client ปัจจุบัน การอ่าน env ตรวจเฉพาะ URL ไม่คัดลอก key/token ลงแผน

## 3. Shared Tables / Modules / Functions

ตารางนี้เป็นรายการ shared object สำคัญที่พบจาก source ไม่ใช่ schema dump ของ production

| กลุ่มข้อมูล | Tables / Modules | ผู้ใช้ร่วมและเงื่อนไขที่ต้องรักษา |
|---|---|---|
| ตัวตนและสิทธิ์ | `auth.users`, `profiles`, `teachers`, `students`, `teachers_quota`; `supabase.js`, `impersonation.js` | ทุก portal, กีฬา, ค่าย, สภา, เกียรติบัตร; profile_id/teacher_id/student_id ต่างชนิดกัน; ห้ามใช้ชื่อหรือรหัสแทนสิทธิ์ |
| ภาคเรียน/ข้อมูลอ้างอิง | `system_config`, `departments`, `classrooms`, `school_periods`, `academic_registry` | หน้าเริ่มต้น, ห้องเรียน, ตารางสอน, เอกสาร, ตั้งค่า; system_config รวมหลายโดเมน ห้าม cache ทั้งก้อนโดยไม่มี allowlist |
| รายวิชา/สมาชิก | `master_subjects`, `subject_co_teachers`, `classes`, `class_students`, `homeroom_teachers` | คะแนน/เช็คชื่อ/ข้อสอบ/แชท/ผู้บริหาร/ครูที่ปรึกษา; ต้องคง co-teacher, ปี/เทอม, active enrollment และห้องศาสนา |
| คะแนน | `class_score_columns`, `student_scores`, `score_column_config`, `class_score_display_settings` | `teacher-views-grades.js`, `student-api.js`, `pp5-doc.js`, quiz/regrade; คง source_class_id, rounding, ประวัติ, override และคะแนนที่ระบบกลางล็อก |
| เช็คชื่อ/ละหมาด | `attendances`, `prayer_records`, `student_leave_permissions` | ครู/นักเรียน/สภาสแกน/monitor/สรุปผล; วันไทย, QR/manual, สถานะครูมีความหมายต่างกัน |
| ตาราง/คำร้อง | `teacher_schedules`, `class_schedule_links`, `exam_requests` | dashboard, badge, student, Edge reminder |
| Quiz | `quiz_banks`, `quiz_questions`, `quizzes`, `quiz_attempts`, `quiz_attempt_violations`, `quiz_student_finalizations`, `quiz_score_contributions` | สอบ, monitor, analytics, gradebook; RPC finalize/write modes หลาย patch ต้องตรวจ definition ที่ใช้อยู่ |
| แชท/แจ้งเตือน | `chat_rooms`, `chat_messages`, `push_subscriptions`, `announcements`, `payment_requests` | classroom/donor chat, ครู/นักเรียน/admin, entitlement และ send-push |
| กีฬา AZIZGAMES | `events`, `team_colors`, `sports`, `registrations`, `matches`, `checkins`, `daily_checkins`, `match_events`, `race_results`, `sports_score_entries`, `sports_score_criteria`, `sports_officials`, `sports_official_assignments` | React app + PP5 sports portals/check-in; event/sport/match scope; `sports_*` legacy ไม่ใช่ตารางเดียวกับ `matches` เสมอ |
| ฟุตซอล | `azfutsal_config`, `azfutsal_teams`, `azfutsal_players`, `azfutsal_matches`, `azfutsal_match_events`, `azfutsal_checkins`, `azfutsal_event_checkins`, payments/refunds/admins | ใช้ students/teachers/profiles ร่วม; bracket MS/HS, receipt และสิทธิ์ห้ามเปลี่ยน |
| สภา/ค่าย/แก้ค้าง/เกียรติบัตร | `council_*`, `terangganu_camp_*`, `regrade_config`, `regrade_subjects`, `certificate_templates`, `certificates`, `certificate_recipient_tables` | มีข้อมูลนักเรียน/ครูและ approval/payment/issuance ร่วม ห้ามทำ stale cache เป็นข้อยืนยันสถานะ |

Shared RPC/security ที่สำคัญ: `get_user_role`, `has_subject_access`, `has_class_access`, `get_student_enrolled_classes`, `get_public_prayer_dashboard_snapshot`, `submit_class_grades_to_regrade`, `_write_quiz_score_to_gradebook`, `_finalize_quiz_attempt`, `teacher_apply_quiz_scores`, `can_manage_azizgames`, `login_sports_official`, `validate_sports_official_session`, `sports_official_write` และ donor/classroom entitlement RPCs

Triggers ที่พบ ได้แก่สร้าง profile เมื่อสมัคร, ป้องกันเพิ่ม role เอง, stamp ปี/เทอม classes, quiz tamper guard และเลขใบคืนเงินฟุตซอล ไม่เสนอปิด trigger เพื่อให้เขียนเร็ว ต้องดูเวลาของ trigger จากฐานจริงก่อน SQL เปลี่ยนใด ๆ

Storage ใช้ผ่าน `js/storage.js` และโมดูลย่อยสำหรับรูป/ลายเซ็น/งาน/เกียรติบัตร; cache immutable image URL ได้ตามสิทธิ์และ version แต่ห้าม cache signed URL ข้ามผู้ใช้หรือเลย expiry การลดรูปช่วย network/browser RAM ไม่เท่ากับลด Postgres CPU

## 4. Data Flow และ Auth/Login

### 4.1 ครู

`index.html → auth.js.checkSession/handleLogin → resolveLoginEmail → signInWithPassword → profiles.role → หน่วง 800 ms → teacher.html`

- Email ไม่ต้อง resolve; รหัสครูใช้ RPC; fallback นักเรียนมี students lookup และ RPC email; redirect code อาจ query/เรียกซ้ำตาม chain
- `teacher.js.requireAuth()` ใช้ getSession; `loadTeacherInfo()` โหลด teacher + profile role แบบ parallel อยู่แล้ว จากนั้นรอ theme/sports visibility
- DOMContentLoaded รอ homeroom, position permission, `_applyRoleMenus()` ก่อนเริ่มบริการ/route; `_applyRoleMenus()` มี parallel อยู่แล้ว จึงไม่เสนอให้แก้ซ้ำเป็นงานใหม่
- หลัง boot ยังมี badge, donation, schedule popup, shirt popup, notifications, announcements, chat widget ทำ request เพิ่มพร้อมกับ overview
- overview โหลด subjects และ classes; classes เรียก subjects ซ้ำ; pending badge ก็เรียก subjects → classes → count อีก
- requireAuth ไม่ได้ query role ทุก internal route ตามปกติ; `navigate()` จะ getUser/profile เฉพาะเมื่อ `_teacher.id` ไม่มี ไม่ควรอ้างว่า route guard ทุกคลิกเป็นสาเหตุหลัก
- getSession ไม่ควรนับเป็น database round trip ทุกครั้ง: มักอ่าน session ฝั่ง client แต่ token refresh อาจมี network ต้องแยกใน trace

### 4.2 นักเรียน

`student-login.html → getSession → config → login_logs exact counts 3 ชุด → ประกาศ state/ผูก handlers → lookup_student_by_code → Auth → student.html → getMyStudentProfile → overview`

**ปัญหาชัดเจน:** async IIFE ของหน้า login รอ query สำหรับข้อความและสถิติ ก่อนลงมาผูกปุ่มค้นหา/เข้าสู่ระบบ (`student-login.html:231–315` เป็นต้นไป) เมื่อฐานช้า UI ที่แสดงแล้วอาจยังไม่พร้อมรับ action สถิติไม่ใช่ข้อมูลจำเป็นสำหรับยืนยันตัวตน

`renderStudentOverview()` (`js/student-views.js:399`) โหลด 8 กลุ่มพร้อมกัน รวม `getStudentGPA()` ซึ่ง query enrollment แล้ว query columns/scores แยกต่อรายวิชา จึงเกิด burst ทันทีหลัง login นักเรียนจำนวนมาก

### 4.3 Admin / Sports official

- Admin `dashboard.js.requireAuth()` ตรวจ role/is_also_admin แล้ว `loadUserProfile()` อ่าน profiles อีกครั้ง (`:34`, `:56`); ควร reuse ผลภายใน boot เดียว ไม่ข้ามการตรวจสิทธิ์
- AZIZGAMES ใช้ React AppContext/useEffect; admin ตรวจ RPC และ official ใช้ token/session RPC คนละเส้นทางกับ Supabase Auth ห้ามรวมด้วยการเชื่อ localStorage role
- `js/sports-checkin.js` มี official login/validate/write RPC และแบ่งโหลดนักเรียนตาม ids อยู่แล้ว; รักษาการแยกสิทธิ์นี้ การมี patch ใน worktree ไม่ใช่หลักฐานว่า production ใช้แล้ว
- Auth recovery listener พบใน auth.js และ inline student-login ซึ่งเป็นคนละ HTML entrypoint ยังไม่พบหลักฐาน listener ซ้ำใน route เดียวหรือ token refresh loop จาก source ที่ตรวจ

### 4.4 คะแนนและระบบข้างเคียง

`renderGradesGrid → roster + columns + scores + column config + classes + system/regrade config → ผู้ใช้เปลี่ยนค่า → saveStudentScore → upsert/delete → แสดงผลยืนยัน`

- change handler มี unchanged-value guard; focusin/focusout ใช้แสดงตัวเลข; ไม่เขียนทุก keypress (`teacher-views-grades.js:1729–1790`)
- `_applyOverrideIfNeeded()` อาจมี write ที่จำเป็นตามกติกาคะแนน ห้ามตัดทิ้งเพราะเห็นมากกว่า 1 write
- Query คะแนนครูดึงชุดทั้งห้องอยู่แล้ว ไม่ใช่ 1 request ต่อเด็กใน grid ปกติ
- `gradebook-sync.js` ส่ง event ใน document/BroadcastChannel/storage พร้อม dedup eventId แต่ไม่ใช่ invalidation ข้ามเครื่อง และไม่ใช่ server data cache
- Prayer manual/scanner มี delete ตาม record ก่อน insert รวม; สร้างงานฐานและ Realtime หลาย event
- Quiz heartbeat ทุก 15 วินาทีเป็นงานเขียนตามการสอบ ต้องวัดและรักษาความหมาย ไม่ปิดอัตโนมัติ; finalize/apply อาจเขียน gradebook ผ่าน RPC
- Browser GAS sync แบบ no-cors ยืนยันได้แค่ส่ง request ไม่ใช่ยืนยันผลเขียน Sheets; งาน import/sync กลางอาจใช้ฐานร่วมในช่วง peak

## 5. Performance Issues และข้อเสนอ

ระดับความรุนแรงใช้จัดลำดับการตรวจ/แก้ ไม่ใช่คำยืนยันว่ากิน CPU สูงสุดจริง C = Critical, H = High, M = Medium, L = Low

### C1 — หน้า Login นักเรียนรอข้อมูลประกอบก่อนผูกปุ่ม (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `student-login.html:231–315`, async initialization; exact counts ที่ `:259–261`
- **สาเหตุ:** config และ 3 count (วันนี้/เดือน/ทั้งหมด) อยู่ก่อน event binding; timeout ของของตกแต่งทำให้ action ยังไม่พร้อม
- **ผล:** UX login ค้าง; count ประวัติสะสมเพิ่ม DB work/CPU ระหว่างผู้ใช้เข้าพร้อมกัน ส่วน RAM ต้องวัด plan/จำนวน concurrent queries
- **เสนอ:** ผูก handlers ก่อน; แยก essential auth จาก title/stats; โหลด stats ภายหลัง ใช้สรุปแบบจำกัดช่วงหรือ snapshot เฉพาะตัวเลขที่ปลอดภัย; คง error/fail-closed ของ auth
- **ความเสี่ยง/rollback:** race ตอน redirect/recovery; rollback เฉพาะ boot/stats โดยไม่ลด auth guard
- **วัด:** time-to-interactive ของปุ่ม, handler พร้อมใช้เมื่อ config/count ถูกหน่วง, login p95, count calls ต่อ login

### C2 — ฟุตซอล polling โหลดข้อมูลทั้งระบบซ้ำ (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `js/azfutsal.js:391` loadAll, `:965` refresh, timers `:1346`, `:2264`, `:2400`, `:3139`, `:3250`, `:3371`
- **สาเหตุ:** timer 3–5 วินาทีเรียก refresh → loadAll; โหลดอย่างน้อย 9 query ในก้อนหลัก รวม config/teams/players/matches 2 ระดับ/awards/events/check-ins และ auth/ข้อมูล staff/payment เพิ่มตามเงื่อนไข
- **ผล:** CPU/RLS/serialization/network ต่อ viewer; memory จาก in-flight query และ parse/render; ผู้ชมเพิ่มเป็นตัวคูณกับงานฐานที่แชร์กับคะแนน
- **เสนอ:** แยก initial reference data กับ live match/check-in data; refresh เฉพาะ scope ที่เปิด; มี single in-flight, visibility check, backoff+jitter; cleanup เมื่อปิดจอ; กำหนด freshness ของจอสดก่อนลดความถี่
- **ความเสี่ยง/rollback:** คะแนน/เช็คอินสดค้างหรือ filter ขาด roster; fallback polling ต้องคงไว้และคืน loader เดิมเป็นรายหน้าหากจำเป็น
- **วัด:** queries/tick และ bytes/tick; ตามโค้ดก้อน 9 queries ทุก 4 วินาที = 135 requests/นาที/จอเฉพาะก้อนนี้ เป็นการคำนวณ ไม่ใช่ production measurement

### C3 — ละหมาด public snapshot งานใหญ่ + จอ realtime poll ถี่ (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `js/prayer-dashboard.js:108,125,555`; `patch_public_prayer_dashboard_read.sql:6`; `js/prayer-monitor.js:123–175`
- **สาเหตุ:** dashboard ทุก 30 วินาทีดึง active students ทั้งชุด + records 14 วันเริ่มต้น/สูงสุด 31 วัน cap 50,000 ผ่าน JSON aggregate; filter บางอย่างทำหลังโหลด ส่วน monitor subscribe ทั้ง prayer_records และ poll วันนี้ทุก 1.5 วินาทีแม้ channel ปกติ
- **ผล:** snapshot มีโอกาสใช้ CPU/RAM มากจาก join/order/jsonb aggregate; monitor เพิ่ม 40 polls/นาที/จอและ event-triggered refresh ไม่มี in-flight gate
- **เสนอ:** แยกสรุปกับ detail แบบ paginated; filter ให้ลงถึง SQL; reuse roster อย่าง scoped; monitor กรอง event เท่าที่ schema รองรับและ debounce, single-flight, fallback ที่ช้าลงเมื่อ channel healthy
- **ความเสี่ยง/rollback:** นับซ้ำ/ขาดเมื่อมีหลาย record ต่อวัน, correction ย้อนหลัง, public payload สิทธิ์; รักษา dedup/status semantics และใช้ RPC รุ่นเก่า rollback ได้
- **วัด:** pg_stat_statements, rows/bytes, aggregate/sort spill, CPU และ p95; cap 50,000 ต้องมีการแจ้งครบ/ไม่ครบ ไม่แก้ด้วยลด limit เงียบ ๆ

### H1 — ภาพรวมนักเรียน N+1 คะแนน (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `js/student-api.js:404` getStudentGPA; เรียกจริงใน `js/student-views.js:412`
- **สาเหตุ:** enrollment 1 query + columns และ scores ต่อรายวิชา ผ่าน Promise.all ที่ขยายตาม N
- **ผล:** สูงสุดประมาณ 1+2N requests ต่อ GPA เมื่อทุกวิชามีคอลัมน์; CPU/RLS/connections burst หลัง login และทุกครั้งที่ render overview
- **เสนอ:** fetch columns ด้วย class ids แบบ batch แล้ว scores ของ student ด้วย column ids แบบ batch หรือ scoped read RPC; แบ่ง chunks เมื่อ ids มาก; ใช้ผล enrollment ร่วมกับส่วนอื่นใน render เดียว
- **ความเสี่ยง/rollback:** แยกสามัญ/ศาสนา, incomplete score ต้องไม่กลายเป็น 0, retake/group override; คงสูตรเดิมและสลับกลับ implementation เดิมได้
- **วัด:** 1+2N → เป้าหมายประมาณ 3 requests บวก chunks ที่จำเป็น; เปรียบเทียบผลทุกวิชาและจำนวนสมาชิกก่อน/หลัง

### H2 — AZIZGAMES โหลด directory กว้างและ refetch เมื่อ event (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `src/context/AppContext.jsx:455–936` loadData, `:944–1040` refetch*, `:1204–1229` effects; `src/components/LiveCheckinDisplay.jsx:44–58` ใน repo AZIZGAMES
- **สาเหตุ:** boot query หลายกลุ่ม sequential รวม profiles.select('*') และ students.select('*') แบบ fetchAllRows; realtime event เรียกโหลดทั้งตาราง/ทั้ง event; matches poll 5 วินาที; LiveCheckinDisplay อ่าน checkins และ daily_checkins ไม่มี event/date/match filter ทุก 3 วินาที
- **ผล:** payload/RLS/CPU และ browser RAM; live display เพิ่ม 40 requests/นาที/จอ ก่อน parent polling และ realtime; fetchAllRows หลายหน้าขยายตามข้อมูล
- **เสนอ:** reference projection ตาม screen; lazy-load directory เฉพาะ feature; batch initial independent requests แบบจำกัด concurrency; scope event/date/match ผ่าน join/RPC หากตารางไม่มี event_id; coalesce refetch; reuse context dataset เมื่อถูก scope เดียวกัน
- **ความเสี่ยง/rollback:** ความสัมพันธ์รายงานตัวทั้งวันกับทุกแมตช์, admin/official/public แตกต่าง; cleanup channel มีแล้ว ไม่อ้างว่ารั่วทุก render; rollback แยก loader/effect
- **วัด:** cold load requests/bytes, tick calls, subscription count หลังสลับหน้า 20 รอบ และ latency จากกรรมการถึงจอสาธารณะ

### H3 — ข้อมูลครู/วิชา/config ถูกโหลดซ้ำใน action เดียว (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `js/api.js:48,453,497,3143`, `js/teacher-views.js:365`, `js/teacher.js:571,628`, `js/teacher-views-classes.js:422`
- **สาเหตุ:** overview เรียก getMySubjects และ getMyClasses ที่เรียก subjects ซ้ำ; getPendingExamRequestCount เรียก subjects 2 requests + classes + count อีก; badge เรียกทุก 30 วินาที; theme มี cache คนละก้อนกับ getSystemConfig
- **ผล:** baseline request ต่อผู้ใช้สูงต่อเนื่อง แม้ข้อมูล course ไม่เปลี่ยน; CPU/RLS และ round trips ซ้ำ
- **เสนอ:** in-flight dedup ของ read helper + session reference cache ที่แยก user/term; ส่ง class ids ให้ badge หรือ scoped count RPC; reuse config allowlist; ห้าม cache pending/approval count เป็นข้อยืนยันสิทธิ์
- **ความเสี่ยง/rollback:** ครูร่วมถูกเพิ่ม/ถอด, เปลี่ยนเทอม, impersonation; ทำ invalidation ตามข้อ 7 ก่อนเปิด cache และมี bypass switch
- **วัด:** boot/route network trace; subject requests ซ้ำ key เดียวต้องเหลือชุดเดียวระหว่าง in-flight; badge 4 requests → เป้าหมาย 1 count เมื่อ context valid

### H4 — หน้า grid คะแนนโหลด columns/config ซ้ำ (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `teacher-views-grades.js:155–180`; `api.js:1417,1440,1467`
- **สาเหตุ:** getScoreColumns โหลด columns แล้ว getStudentScores หา ids ซ้ำ; getSheetColumnOptions 3 ประเภทเรียก _getSkillGroup 3 ครั้งแล้ว config อีก 3 ครั้ง; ห้องไม่มี columns มี map ต่อห้องเพื่อหาต้นแบบ
- **ผล:** latency เข้า grid, RLS/CPU query ซ้ำ; scores ไม่ paginate อาจขาดเมื่อจำนวนเซลล์เกิน cap ของ PostgREST (ต้องตรวจ cap จริง)
- **เสนอ:** reuse authoritative columns ใน request cycle; batch config ครั้งเดียวแล้วแยกใน memory; batch template columns ด้วย class ids; pagination แบบ deterministic เพื่อรักษาความครบ ไม่ลด row limit เพื่อเอาความเร็ว
- **ความเสี่ยง/rollback:** source_class_id ต่างจาก class ของ roster, กลุ่มทักษะ, score lock; ไม่ cache final scores ข้าม route เป็นคำตอบสุดท้าย; revert helper ทีละตัว
- **วัด:** 6 config requests → 1 หรือ 2 ตาม class context ที่มี; ไม่ fetch columns ซ้ำ; เทียบทุกเซลล์กับฐานรวม fixture มากกว่า 1,000 เซลล์

### H5 — Prayer write แบบ delete ใน loop (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `api.js:1549` savePrayerRecords/savePrayerCell; `student-api.js:590–650` saveScannedPrayerRecords
- **สาเหตุ:** N deletes + insert; scanner อ่าน teacher status โดย student ids แต่ยังไม่จำกัดวันที่ของ batch
- **ผล:** request/WAL/RLS/Realtime events เพิ่ม, เสี่ยง partial write เมื่อ insert ไม่สำเร็จหลัง delete และ race ระหว่างครูกับ scanner
- **เสนอ:** จำกัด teacher status read ตามวันของ batch; ออกแบบ atomic batch RPC โดยตรวจสิทธิ์/สถานะครูใน transaction; ตรวจ unique/business key จริงก่อนเลือก upsert ไม่เดา constraint
- **ความเสี่ยง/rollback:** สูงเพราะสถานะครู/ขาดล่วงหน้า/QR/manual/วันไทย; ทำหลัง read optimizations, ไม่เปลี่ยน queue เดิม, version RPC และคืน caller เดิมได้หลังตรวจข้อมูล
- **วัด:** N+1 → เป้าหมาย 1 batch RPC; injected failure ต้องไม่หายครึ่งชุด; สองเครื่องแก้พร้อมกันคงกติกาเดิม

### H6 — Retry/fallback ไม่แยกข้อผิดพลาด (ยืนยันจากโค้ด)

- **ไฟล์/ฟังก์ชัน:** `api.js:80` getMyTeacherProfile, `student-api.js:25` getMyEnrolledClasses, `prayer-dashboard.js:125` loadPublicSnapshot
- **สาเหตุ:** profile retry เมื่อ error ใด ๆ แม้ timeout; enrollment fallback แม้ RPC คืน [] ที่ถูกต้อง; public snapshot fallback เป็นหลาย direct reads เมื่อ RPC error ทั่วไป
- **ผล:** peak ที่ timeout แล้วอาจสร้างงานซ้ำเพิ่มเติม; error กลายเป็น empty result ทำให้ผู้ใช้เข้าใจข้อมูลผิด
- **เสนอ:** fallback เฉพาะ error code ที่บอก missing schema/function และรักษา compatible deployment; timeout/permission/network แสดง failure ตามจริงพร้อม controlled retry; ไม่ cache failed result เป็นข้อมูลว่าง
- **ความเสี่ยง/rollback:** deployment ที่ patch ยังไม่ครบ; สำรวจ live schema ก่อน, keep compatibility path ตาม capability ที่ตรวจได้; rollback error routing แยกจาก cache
- **วัด:** จำลอง timeout/403/missing column/RPC empty แล้วนับ request และตรวจข้อความ UI

### H7 — RLS/index เป็นคอขวดร่วมที่ต้องตรวจฐานจริง (ยังไม่ยืนยันว่าคงมีปัญหา)

- **ไฟล์/ฟังก์ชัน:** `schema.sql:143` get_user_role; `patch_co_teaching.sql`; `patch_fix_rls_helper_function_volatility.sql`; `patch_fix_rls_real_root_cause_inline_policies.sql`
- **สาเหตุที่ต้องตรวจ:** helper/nested permission subquery บนตาราง scores/attendance/enrollment; หลาย patch เขียนทับกัน; repo มีการแก้ inline policies และ indexes อยู่แล้ว
- **ผลที่เป็นไปได้:** CPU ต่อแถวสูง, sequential/inefficient scans, latency ทุกระบบที่ใช้ permission chain; สถานะจริงต้อง EXPLAIN ภายใต้ role ผู้ใช้
- **เสนอ:** อ่าน pg_policies/pg_proc/pg_indexes ที่ใช้งานจริงก่อน; benchmark helper call count/plan; พิจารณา initplan สำหรับค่าคงที่ต่อ statement เฉพาะที่ปลอดภัย ไม่ถือว่า STABLE ทำให้ cache ครั้งเดียวเสมอ
- **ความเสี่ยง/rollback:** สูงสุดด้าน Security; ห้ามปิด RLS/เปลี่ยนเป็น service_role ใน frontend; export exact old policy/function definition และ role tests ก่อน migration
- **วัด:** query plan/total_exec_time/buffers ภายใต้ครูเจ้าของ ครูร่วม นักเรียน ผู้บริหาร และผู้ไม่มีสิทธิ์; ใช้ index plan จริง ไม่ตัดสินจากชื่อ index

### M1 — Chat/Quiz มี polling และ Realtime ซ้อนกัน

- **หลักฐาน:** `chat-classroom.js:313–324`, `teacher-views-donor-chat.js:380–386`, `teacher-views-quiz-monitor.js:60–100`
- **สาเหตุ/ผล:** chat poll 5 วินาทีและ event refresh; signature เทียบหลัง fetch จึงลดเฉพาะ render; quiz poll 3 วินาทีและ violations subscribe ไม่มี quiz filter; async refresh ไม่มี single-flight ครบทุกทาง → CPU/RLS/payload เพิ่ม
- **เสนอ:** รวม refresh scheduler; coalesce event, query delta หรือ bounded latest set พร้อมรองรับ edit/delete; fallback ตาม connection health; scope violations ด้วยข้อมูลที่ schema รองรับ
- **ความเสี่ยง/rollback/วัด:** ห้ามตกข้อความ/คะแนนสด; คง fallback เมื่อหลุด; คืน polling เดิมราย feature; วัด requests/minute และ freshness; cleanup มีแล้วใน close/teardown แต่ทดสอบ close-during-fetch และ route exit เพิ่ม

### M2 — Route/render race และ listener lifecycle

- **หลักฐาน:** `teacher.js:282–312` เรียก fn() โดยไม่ await/cancel route ก่อน; query views render หลัง await; monitor/chat setup มี async ก่อน subscribe
- **สาเหตุ/ผล:** กด route รัวอาจทำ request ซ้อนและผลเก่าทับ UI; ยังไม่ได้ยืนยัน DOM duplicate handler ใน runtime
- **เสนอ:** navigation generation id และ stale-result discard; dedup read ตาม key; cleanup owner ของ timer/channel; cancellation เฉพาะ read ที่ไม่มี consumer อื่น ไม่ abort write คะแนน
- **ความเสี่ยง/rollback/วัด:** route/loading state; revert lifecycle guard; rapid navigation/close modal ระหว่าง fetch และตรวจ active timer/channel count

### M3 — คะแนนควบคุม write concurrency และข้อจำกัดที่ต้องรักษา

- **หลักฐาน:** `teacher-views-grades.js:1738`, `api.js:1490` saveStudentScore; change guard มีแล้ว; delete branch ไม่ตรวจ error object, delta history มาจาก client state
- **ผล:** ยังไม่มีหลักฐาน excessive keypress write; มีความเสี่ยง success ลวงตอนลบ และ lost update เมื่อแก้เซลล์เดียวกันซ้อนกัน/หลายเครื่อง ซึ่งการเพิ่ม batch/cache อาจทำให้รุนแรงขึ้น
- **เสนอ:** correctness gate ก่อนแตะ write: ตรวจ response ทุก branch; serialize online writes ของเซลล์เดียวกัน/ป้องกัน duplicate submit; ประเมิน atomic delta RPC แยกจาก read optimization; batch เฉพาะงาน bulk ที่มีอยู่ ห้ามเพิ่ม deferred/offline save
- **ความเสี่ยง/rollback/วัด:** สูงสำหรับสูตร/history/override; ไม่เปลี่ยน UX save เงียบ ๆ; rollback API version โดยไม่ย้อนลบคะแนน; ทดสอบ failed delete, rapid edits, สองเครื่อง และ acknowledgment จาก DB

### M4 — Background badges / counts / reminder N+1

- **หลักฐาน:** `dashboard.js:892–900` 3 timers 60 วินาที; `teacher.js:628`, `student.js:556`; `api.js:531` getStats นับ prayer_records ทั้งตาราง; `notify-upcoming-periods/index.ts:71–107`, `notify-exam-reminders/index.ts:87–119`
- **สาเหตุ/ผล:** exact counts + per-schedule/per-teacher reminder queries; ค่าใช้จ่ายโตตามประวัติและผู้ใช้; อาจซ้อนเวลาครูเข้าสู่ระบบ
- **เสนอ:** visibility/single-flight/jitter (ครู/นักเรียนมี visibility guard อยู่แล้ว); reuse context; batch reminder logs/entitlements/subscriptions แต่คง idempotency ของแจ้งเตือน; ส่ง push แบบ bounded concurrency
- **ความเสี่ยง/rollback/วัด:** ส่งซ้ำ/ไม่ส่ง, badge stale; revert job version/timer config; เทียบ recipients และ logs, calls/job และ overlap กับ peak; ไม่เปลี่ยน count เป็นประมาณหาก UI ต้อง exact

### M5 — Broad reads/ประวัติทุกเทอมและ aggregate ฝั่ง browser

- **หลักฐาน:** `api.js:453` getMyClasses ไม่มี year/term filter; `teacher-views-classes.js:452` กรองเทอมหลังโหลด; `api.js:565` executive stats page-fetch classes/subjects; `certificates-api.js:9,189` list โหลด layout/rows ทั้งก้อน
- **ผล:** payload/parse/browser RAM โตตามข้อมูล; DB serialization และ RLS เพิ่ม; broad select ไม่ได้พิสูจน์ Full Table Scan ต้องดู EXPLAIN
- **เสนอ:** optional scoped API สำหรับหน้าปัจจุบันและแยก historical fetch; list projection/load detail on demand; server aggregate สำหรับ overview ถ้ารักษาความหมายเดิมครบ
- **ความเสี่ยง/rollback/วัด:** ห้องที่ year เป็น null, รายงานทุกเทอม, export/จำนวนที่ครบ; ไม่เปลี่ยน helper ทุก caller พร้อมกัน; revert per-screen, วัด bytes และผลรวม exact

### L1 — GAS และ resource/render เพิ่มเติม

- **หลักฐาน:** `gas/pp5-sync.gs:128,150` setValue ต่อ cell; `js/sync.js:436` sync แยกห้อง; module graph ฝั่งครูใหญ่และ `vite.config.js` multi-entry
- **ผล:** Sheets/API latency และ browser time; ไม่ถือว่าเป็น Postgres CPU bottleneck โดยตรง
- **เสนอ:** รวม ranges ที่ปลอดภัยโดยไม่ทับสูตร, lazy-load feature code ตาม trace; cache immutable assets ตาม version; ไม่เริ่มจาก refactor bundle ทั้งระบบ
- **ความเสี่ยง/rollback/วัด:** สูตร/ตำแหน่งชีทและ module side effect; restore GAS deployment/frontend version; วัด Sheets latency แยกจาก DB

## 6. จัดอันดับตัวกิน CPU/RAM ที่น่าสงสัย

1. **งานอ่านซ้ำต่อเนื่องหลายจอ:** C2/C3/H2 มีตัวคูณ viewer × ความถี่ × จำนวน queries/rows ชัดจากโค้ด จึงควรตรวจ pg_stat_statements และจำนวนจอเปิดเป็นอันดับต้น
2. **Public prayer JSON aggregate:** C3 เป็น candidate RAM/CPU ต่อ query สูง โดยเฉพาะข้อมูลหลายวันและ concurrent requests; อาจมี sort/temp spill แต่ยังไม่ยืนยัน
3. **Student overview N+1 + redundant teacher context:** H1/H3 สร้าง burst หลัง login และ route changes เป็นสาเหตุร่วมกับช่วงเข้าระบบพร้อมกันได้
4. **RLS/query plan:** H7 อาจแพงที่สุดต่อแถวถ้า live patch/plan ไม่เป็นตามที่คาด แต่ repo มีการแก้แล้ว ต้องตรวจ ไม่ประกาศว่าเป็น root cause ปัจจุบัน
5. **Prayer deletes/Quiz/คะแนนและ scheduled jobs:** มีต้นทุน write/RLS/WAL แต่หน้าคะแนนปกติไม่ได้เขียนทุก keypress จึงไม่ควรเริ่มด้วยลดความถี่ save คะแนนโดยไม่มี trace

RAM สูงอย่างเดียวไม่แปลว่า memory leak: ต้องแยก database cache, working memory ของ query, concurrent backends, temp files และ browser heap ห้ามรับประกันว่าแก้แล้ว Micro รับ peak ได้ทั้งหมด

## 7. Safe Cache Design ที่เสนอ

เริ่ม in-memory read cache และ in-flight promise dedup ใน helper ที่มีอยู่ ไม่จำเป็นต้องเพิ่ม library/IndexedDB โครงการใหญ่ แต่ละ entry ต้องมี bounded size/eviction; rejected promise ต้องถูกล้าง ห้ามใช้ empty result แทน permission/network failure

รูปแบบ key ที่เสนอ:

`projectRef | schoolScope | authUserId | effectiveUserId | role | impersonationScope | academicYear | semester | resource | canonicalParams | schemaVersion`

PP5 ที่ตรวจยังไม่พบ tenant filter กลางแบบ school_id ทุกตาราง จึงใช้ projectRef + single-school scope ที่ระบุชัด ห้ามประดิษฐ์ school_id filter จนข้อมูลหาย หากอนาคตรองรับหลายโรงเรียนต้องเติม scope จริง

TTL ด้านล่างเป็น **ค่าเริ่มต้นที่เสนอให้ทดสอบ ไม่ใช่ค่าที่อนุมัติใช้แล้ว**

| ข้อมูล | Cache ที่เสนอ | Invalidate / Refresh | ขอบเขตห้ามใช้ |
|---|---|---|---|
| Theme/logo/display text แบบ allowlist | memory 10 นาที; static asset ตาม URL version | update config สำเร็จ, manual refresh, TTL | ไม่เก็บ secret หรือ system_config ทั้งก้อน |
| departments/classrooms/periods | memory 5 นาที แยก project/role/term | create/update/delete สำเร็จ, term change, focus เมื่อหมด TTL | ไม่ใช้ข้อมูลห้องเก่าตัดสินสิทธิ์ |
| Profile เพื่อแสดงชื่อ/รูป | memory 2 นาที แยก user/effective user | profile edit, login/logout, impersonation; focus revalidate | role/security decision ต้องตรวจ authoritative ฝั่ง DB/RPC |
| วิชา/ห้องของครูรวม co-teacher | memory 60 วินาที + in-flight dedup | เพิ่ม/ลบ/ย้าย/แชร์วิชา, class change, term switch, focus/TTL; action สำคัญตรวจ DB | ไม่ใช้ cache เป็น entitlement |
| Roster ที่ผู้ใช้มีสิทธิ์ | memory 30–60 วินาที class+term+user | enroll/remove/active status/room transfer/student sync; refresh ก่อน bulk write/export สำคัญ | ไม่ persist directory นักเรียนทั้งโรงเรียนใน localStorage |
| Score column display/config | dedup ใน action; memory สั้นเฉพาะ metadata ที่อนุญาต | edit/delete/link source class; refresh ตอนเข้า grid | max/lock/formula ใช้ stale เป็นข้อยืนยัน write ไม่ได้ |
| Event/team/sport reference สำหรับจอ | memory 1–5 นาทีแยก event/role | admin edit/event switch และ TTL/focus | ไม่รวม results/check-in/official permissions |
| Certificate template list | memory 5 นาที แบบ summary fields | template edit/delete; fetch latest ก่อน issue | ไม่ cache issuance/revoke state เป็นข้อยืนยัน |

ทุก mutation ที่มีผลกับข้อมูล cache ต้อง invalidate **หลัง DB ยืนยันสำเร็จ** และครอบคลุมทั้ง API helpers, direct queries ใน views, admin, GAS/import และ subsystem ไม่ใช่เฉพาะปุ่มหน้าครู

- ข้ามแท็บ origin เดียว: ส่ง invalidation key/version ผ่าน BroadcastChannel/storage โดยไม่มีข้อมูลอ่อนไหว; ไม่ใช้ event ที่ไม่ได้ scope เป็น authorization
- ข้ามเครื่อง/คนแก้จาก subsystem: client local event ไม่พอ จึงต้อง TTL + refetch on focus/entry; จุดที่ต้องสดทันทีให้ query server ทุกครั้ง ไม่เปิด stale cache
- Logout/auth user เปลี่ยน/impersonation เริ่มหรือจบ: clear private entries, cancel/discard read response ของ session เก่า ด้วย session generation; ห้ามผล request ที่จบช้าเติม cache ให้ผู้ใช้ใหม่
- Permission metadata cache ใช้แค่ presentation ที่ไม่เปิดข้อมูล; boot ตรวจ role และ sensitive actions ให้ server ตรวจทุกครั้ง การซ่อนปุ่มไม่ใช่ RLS
- ไม่เพิ่ม Realtime subscription ทุก cache key เพราะอาจเพิ่มโหลดกว่าที่ลดได้; reuse subscription ที่มีเมื่อ scope ตรง

**ไม่ควรใช้ cache เก่าเป็นคำตอบสุดท้าย:** คะแนน/เกรด/ประวัติ delta, lock/max ที่ใช้ตรวจบันทึก, quiz status/attempt/answer, approval/regrade/payment/receipt, check-in ที่ใช้ป้องกันซ้ำ, สิทธิ์ครูร่วม/admin/official, session token และ attendance/prayer ที่ใช้ตัดสินแก้ไข ต้อง revalidate จาก Supabase ตาม action และยืนยัน write เสมอ

Cache เดิมที่พบ: `_themeCache` ใน theme.js, `_cfgCache` และ clearSyncCache ใน sync.js, window class state และ state ของกีฬา ทั้งหมดไม่ได้เป็น shared query cache ที่มี scope/TTL/invalidation ครบ จึงควรทำ inventory ของผู้เขียนก่อน reuse นอกจากนี้มี offline queues เดิมในกีฬา/ฟุตซอล/ละหมาดอยู่แล้ว: บันทึกเป็น dependency/risk เท่านั้น ไม่ขยาย ไม่ rewrite ไม่ล้าง queue ในรอบ optimization นี้

## 8. Query รวม / Batch / Deduplicate ที่เสนอ

| งาน | ปัจจุบันตามโค้ด | เป้าหมายเชิงโครงสร้าง |
|---|---|---|
| Student GPA | enrollment + 2 ต่อรายวิชา | enrollment + batch columns + batch scores (แบ่งหน้าเมื่อจำเป็น), สูตรเดิม |
| Teacher context | subjects ซ้ำระหว่าง overview/classes/badge | 1 in-flight result ต่อ key แล้ว reuse; role ตรวจแยกตาม security |
| Pending exam badge | own/co subjects + classes + count | authoritative scoped count หรือ reuse ids แล้ว count 1 query |
| Grade config 3 ประเภท | 3 skill lookup + 3 config | reuse skill จาก context ที่ valid + config 1 query/group |
| Grade scores | fetch columns ซ้ำเพื่อเอา ids | reuse column ids หรือ filtered join + deterministic pagination |
| Empty class template hints | map query ต่อ class | columns IN class ids, group ใน memory |
| Sports live | loadAll / whole table | narrow match/date/event query, initial roster แยก |
| Prayer status ก่อน scan | history ของ students ทุกวัน | เฉพาะ student ids และวันใน batch; ไม่เปลี่ยนสถานะ override |
| Prayer writes | N delete + insert | atomic scoped RPC หลังยืนยัน key และ role semantics |
| Reminders | log/teacher/subscriptions ต่อรายการ | batch reads, unique/idempotent send log และ bounded delivery |

Promise.all ลดระยะเวลารอแต่ไม่ลดจำนวน query โดยตัวมันเอง ห้ามเปลี่ยนทุก loop เป็น unbounded parallel ที่เพิ่ม peak load ต้องเริ่มจากลดงานซ้ำก่อน

## 9. Index / SQL Verification Plan

**ยังไม่เพิ่ม index ใด ๆ** ตรวจ live pg_indexes/pg_constraint รวม expression/predicate/ลำดับคอลัมน์/validity ก่อน ไม่ตัดสินว่าไม่มีเพราะ rg ไม่พบ SQL และไม่สร้างชื่อใหม่ซ้ำ index ที่มีประโยชน์เหมือนกัน

| Query path / Candidate | สิ่งที่พบใน repo | สิ่งที่ต้องตรวจ/เงื่อนไขเสนอ |
|---|---|---|
| teachers(profile_id), students(profile_id) | patch inline RLS มี idx_teachers_profile_id | ตรวจ actual index และ lookup plans ทั้งสองตาราง; add เฉพาะขาดและมี scan ต้นทุนสูง |
| master_subjects(teacher_id), subject_co_teachers(teacher_id,subject_id) | patch inline RLS มี teacher_id index ของ co-teachers | ตรวจ existing constraint/index, join plan; ไม่จำเป็นต้องเพิ่ม composite ถ้าตารางเล็ก/ของเดิมพอ |
| classes(course_id,academic_year,semester) | มี schema/term patches แต่ helper ยังอ่านทุกเทอม | เปลี่ยน query scope อย่างปลอดภัยก่อนแล้วประเมิน composite; null year/history semantics ต้องคง |
| class_students(student_id,class_id) / (class_id,is_active) | schema UNIQUE(class_id,student_id); patch_class_students_active.sql มี class-active index | unique เดิมรองรับ class-first; student-first GPA/enrollment อาจต้อง reverse index ตาม plan |
| class_score_columns(class_id) | lookup ซ้ำตาม class | ตรวจ existing index, rows/plan ก่อนเสนอ |
| student_scores(assignment_id,student_id) และ student-first | schema UNIQUE(assignment_id,student_id) มีอยู่แล้ว | ไม่เสนอ duplicate assignment-first; student-first ต้องอาศัย workload GPA จริงและต้นทุน write |
| attendances(class_id,check_date,student_id) | schema/attendance patches หลายชุด | ตรวจชื่อคอลัมน์/constraint จริงและ date query ก่อน; index กว้างไม่ฟรีเมื่อเขียนถี่ |
| prayer_records(student_id,check_date); check_date/id หรือ check_date/created_at WHERE location IS NOT NULL | patch_prayer_scanner_safety.sql มี partial manual-month index | manual-month ไม่ใช่คำตอบทุก query; monitor latest 50 กับ multi-day snapshot ใช้ order ต่างกัน ต้อง EXPLAIN แยก |
| exam_requests(class_id,status); regrade_subjects(teacher_id,status) | count badge filters จริง | ทดลอง partial pending/requested เมื่อ selectivity เหมาะ; คำนึง writes/status changes |
| login_logs(user_type,logged_at) | patch_login_logs.sql:19 มี index แล้ว | ไม่สร้างซ้ำ; index ไม่ทำให้ count ประวัติทั้งหมดไม่มีต้นทุน; ย้ายออกจาก login critical path ก่อน |
| matches(event_id); daily_checkins(event_id,check_in_date,student_id); checkins(match_id,student_id) | มี schema กีฬาและ security patch คนละชุด | ตรวจ live constraints และตาราง matches เทียบ sports_matches; ห้ามใส่ event_id ให้ตารางที่ไม่มี |
| quiz_attempts(quiz_id,started_at), violations(attempt_id) | patch_quiz_system.sql มี quiz_id/student_id/attempt_id indexes | ตรวจ sort column ของ actual monitor query ก่อน composite; payload answers/history อาจแพงกว่า index |
| chat_messages(room_id,created_at) | bounded messages query | ตรวจ order/limit plan และ policy entitlement ก่อนเพิ่ม |

ลำดับตรวจ: relation sizes/row estimates → top query fingerprints → actual indexes/policies/functions → EXPLAIN SELECT แบบไม่ execute → EXPLAIN (ANALYZE, BUFFERS) เฉพาะ staging หรือ query ที่จำกัดและประเมินภาระแล้ว ภายใต้ JWT/role ที่ตรงผู้ใช้ ไม่ใช้ service role plan แทน RLS plan

เก็บ pg_stat_statements เป็น snapshot/delta โดยไม่ reset สถิติร่วม: calls, total/mean execution time, rows, shared blocks, temp blocks; PostgreSQL version/extension อาจทำชื่อคอลัมน์ต่างกัน ต้องตรวจ catalog ก่อนใช้คำสั่ง ใช้ pg_stat_user_tables/pg_stat_user_indexes ตรวจ scans/usage, pg_stat_activity และ locks แบบไม่ดึงข้อมูลส่วนบุคคลลงเอกสาร

Migration ในขั้น implement ต้องมีเหตุผลและ old definition; สำหรับ index ใหญ่ประเมิน CREATE INDEX CONCURRENTLY นอก transaction และ I/O/window; ถ้าล้มเหลวตรวจ invalid index ก่อน retry Rollback เฉพาะ index ที่เพิ่มรอบนั้นและตรวจว่าไม่รองรับ constraint ห้าม drop index เดิมเพียงเพราะ usage snapshot ช่วงสั้นเป็นศูนย์

## 10. Realtime / Timer Ownership

| เจ้าของ | ปัจจุบัน | แผน |
|---|---|---|
| prayer-monitor page | table-wide + 1.5s polling; lifetime ของ standalone page | single-flight, narrow filter, fallback/visibility, cleanup เมื่อ owner ปิด; ไม่อ้างว่า SPA leak จากไม่มี unsubscribe ในหน้าเต็มอย่างเดียว |
| AZIZGAMES AppContext | 8 table subscriptions; cleanup effect มี; matches 5s | retain channel, coalesce invalidation, scope refetch; dependency arrays อาจ resubscribe เมื่อ arrays เปลี่ยน ต้องวัดไม่เรียกว่า leak โดยทันที |
| LiveCheckinDisplay | 2 table queries/3s; interval cleanup มี | reuse scoped provider หรือ own narrow query; no overlap; date/event เปลี่ยนต้อง reset |
| AZFUTSAL live modals | refresh ทั้งชุด 3–5s; มี close handlers บางจุด | owner-level timer registry, selective refresh; ทดสอบ DOM ถูกแทนที่โดยทางอื่น |
| Classroom/donor chat | room filter และ teardown มี; poll 5s | fallback adaptive + refresh coalescing + stale owner guard |
| Quiz monitor | attempts filter quiz; violations กว้าง; poll 3s | scope, coalesce, cleanup ระหว่าง initial async load; ห้ามชะลอจน monitor ใช้ไม่ได้ |
| Terangganu | 7 subscriptions scoped event; debounce 500ms และ remove channel ก่อน subscribe ใหม่ | reuse pattern ที่ดี; refresh เฉพาะ data group และตรวจ teardown ตอนปิดหน้า/embedded owner |
| Badges | ครู/นักเรียน visibility-aware; admin 3 timer | ไม่เพิ่ม channel ใหม่โดยไม่วัด; มี in-flight guard/jitter และ cleanup สำหรับ owner |

ไม่ถือ timer นาฬิกา/animation ทุก 1 วินาทีเป็น DB polling เว้นแต่ callback เรียก query จริง และไม่ปิด Realtime ทั้งระบบเพื่อให้ตัวเลขลด

## 11. ความเสี่ยงร่วม / Regression Gates / Rollback

- **คะแนน:** เทียบค่า null/0/ทศนิยม/max/delta/retake/forced grade/rounding/source class/override/quiz contributions ก่อนหลังทุกแถว ไม่ใช่แค่หน้าจอโหลดได้
- **สิทธิ์:** ทดสอบ anon, student เจ้าของ/คนอื่น, teacher เจ้าของ/co-teacher/ไม่เกี่ยวข้อง, advisor ห้องสามัญ/ศาสนา, supervisor, admin/is_also_admin, impersonation, official assigned/unassigned และ token หมดอายุ
- **Cache:** เปลี่ยนผู้ใช้ใน browser เดียว, สองแท็บ, สองเครื่อง, role ถูกถอน, เปลี่ยนเทอม, admin ย้ายนักเรียน/GAS sync แล้วต้องไม่ใช้ roster/สิทธิ์เก่าเขียนข้อมูล
- **Completeness:** fixture มากกว่า PostgREST cap, pagination order ที่มี tie-breaker, history ทุกเทอม, records ถูกแก้/ลบระหว่าง refresh; ห้ามเอาความเร็วแลกจำนวนแถวที่หาย
- **Write failure:** HTTP/DB error, timeout หลัง server อาจเขียนสำเร็จ, rapid same-cell edits และ batch ล้มกลางทาง; ไม่ retry mutation แบบสุ่ม และไม่บอก success ก่อนยืนยัน
- **Shared DB:** profile/policies/score columns ส่งผลทุก portal; ทดสอบ subsystem ตามตาราง shared objects ก่อน release SQL
- **Rollback:** แยก commit/feature switch ต่อกลุ่ม frontend; version cache keys และ clear private cache; version RPC แบบ additive และเก็บ old caller จนผ่าน; restore exact old policies/functions เฉพาะที่เปลี่ยน ห้าม rollback ด้วยลด security
- ถ้าพบข้อมูลเขียนผิดให้หยุด feature และเก็บหลักฐานก่อน repair; การย้อน frontend ไม่ได้ย้อนข้อมูลที่เขียนไปแล้ว ต้องตรวจ record ตาม audit ก่อนแก้ ไม่มี destructive rollback ในแผนนี้

## 12. Before / After Measurement

### Baseline ที่ต้องเก็บก่อนแก้โค้ด

| ชุดทดสอบ | Metric | สถานะรอบนี้ |
|---|---|---|
| Login ครู/email/code, นักเรียน, admin | ปุ่มพร้อมใช้, Auth duration, time-to-first-useful-screen p50/p95/p99, error/timeout | ยังไม่วัด runtime |
| overview → classes → grades → overview (cold/warm) | requests แยก Auth/PostgREST/RPC/Storage/ภายนอก, query key ซ้ำ, payload bytes, long tasks | รู้ call chain จาก source; ยังไม่มี HAR |
| คะแนน | requests ต่อ changed/unchanged cell, write acknowledgment p95, correctness, duplicate writes | พบ change guard; ยังไม่ทดสอบ live |
| กีฬา/ละหมาด/chat/quiz | requests/นาที/จอ, channels, overlapping refresh, change-to-screen delay, hidden-tab traffic | คำนวณ timer ได้จาก source; ยังไม่วัดจริง |
| Database | CPU, RAM, active connections, query time totals, buffers/temp I/O, locks, WAL, error rates | ยังไม่มี snapshot จากฐานจริง |
| Jobs/import | calls/job, records/job, duration, overlap กับ peak | ตรวจ loop จาก source; ยังไม่มี job logs |

เปรียบเทียบก่อน/หลังด้วย compute ขนาดเดียวกัน, dataset ขนาดใกล้กัน, role เดียว, device/network เดียว, concurrency/route mix เดียวและช่วงเวลาทดสอบเท่ากัน แยก cold/warm cache; แยกจำนวน HTTP requests จาก SQL statements/RPC internal work ไม่อ้างว่า 1 RPC = 1 SQL เสมอ

Success gates ที่เสนอ: requests ตามเป้าหมายเชิงโครงสร้างในข้อ 8 ลดจริง, latency p95 ไม่ถอยและดีขึ้นใน flow เป้าหมาย, timeout ลด, CPU/งานฐานต่อ action ลดโดยไม่เพิ่ม memory/locks ผิดปกติ, คะแนน/สิทธิ์/ข้อมูลครบเท่าเดิมทั้งหมด เป้าหมายเปอร์เซ็นต์ความเร็วและ CPU ให้กำหนดหลังมี baseline ไม่คาดเดาล่วงหน้า

### Peak simulation อย่างปลอดภัย

ใช้ staging/สำเนา schema+RLS และข้อมูลสังเคราะห์ที่มีขนาด/การกระจายใกล้ของจริง ไม่คัดลอกข้อมูลส่วนตัวหรือ service_role ลง browser จำลอง login→overview→class→score read และ score write ไปยัง fixture แยกบัญชี รวม viewers กีฬา/ละหมาดและ background jobs ตามสัดส่วนที่วัดได้

เพิ่ม concurrency ทีละระดับ (ตัวอย่างเริ่ม 5/20/50 แล้วปรับตามสภาพแวดล้อม ไม่ใช่เป้าหมาย capacity ที่รับรอง); มี stop threshold เมื่อ timeout/error/latency เกินเกณฑ์ staging และบันทึก server metrics พร้อมกัน ไม่ยิง production load test โดยไม่มีคำสั่งอนุญาต

## 13. ลำดับการลงมือที่ปลอดภัยที่สุดหลังได้รับคำสั่ง

| ลำดับ | งาน | ผลที่คาดหวัง / Gate |
|---|---|---|
| 0 | ยืนยัน baseline, active deployments, live schema/index/RLS และแยกงานค้างของผู้อื่น | รู้ต้นทุนจริงและไม่แก้ซ้ำ patch เก่า; read-only investigation ก่อน release |
| 1 | C1 แยกข้อมูลตกแต่งจาก login handlers; H6 จัด fallback ตามชนิด error | Login ยังใช้งานได้แม้ stats ช้า, ลด retry amplification; auth/recovery tests |
| 2 | H3/H4 deduplicate reads ภายใน action ก่อนเพิ่ม TTL cache | ลดงานซ้ำโดย freshness เปลี่ยนน้อยที่สุด; co-teacher/source class tests |
| 3 | H1 batch student GPA และแก้ data completeness | ลด burst ตอน login นักเรียน; score parity/large-fixture tests |
| 4 | C2/H2 ลด full refresh ของกีฬา + C3 ปรับ monitor refresh โดยแยกเป็นชุดย่อย | ลด sustained shared-DB load; live freshness/check-in tests ก่อนลด interval |
| 5 | Safe reference cache ตามข้อ 7 + projection/lazy data ของ M5 | ลด fetch ซ้ำข้ามหน้า; scope/invalidation และสองเครื่องผ่านก่อนเปิด |
| 6 | index/SQL aggregate/RLS เฉพาะที่ metrics สนับสนุน รวม prayer snapshot | ลดต้นทุน query ที่ยังแพง; ตรวจ role plans/old definitions/rollback ก่อน migration |
| 7 | Chat/Quiz timers, reminders, lifecycle | ลดโหลดประกอบและ request overlap โดยรักษาการแจ้งเตือน/สอบ |
| 8 | Prayer batch writes และ score concurrency/error checks ที่จำเป็น | ลด write round trips อย่างถูกต้อง; แยก review เนื่องจากความเสี่ยงข้อมูลสูง; ไม่เพิ่ม offline architecture |
| 9 | วัดซ้ำกับ workload เดิมและจัดทำ PERFORMANCE_OPTIMIZATION_REPORT.md | รายงานจริงก่อน/หลัง; ตัดสิน Micro/Medium ด้วย headroom ที่วัดได้ |

หาก live metrics ชี้ C2/C3/H7 เป็นเหตุ timeout หลัก ให้ยกระดับการตรวจจุดนั้นทันที แต่ยังทำทีละกลุ่มและรักษา security/correctness gates ไม่ใช้การทำ parallel มากขึ้นหรือเพิ่ม cache ปิดบัง query ที่ผิด

แต่ละชุด implement: ตรวจ syntax ของ JS ที่เปลี่ยน, targeted behavior/security/data tests ตามความเสี่ยง, build หลังแก้ final ของชุดนั้น, diff check; commit/push/deploy/SQL remote เฉพาะเมื่อผู้ใช้สั่ง release สำหรับรอบนี้เป็นเอกสารอย่างเดียว ตรวจ `git diff --check` ไม่ต้อง build application

## 14. ข้อสรุปเพื่อการอนุมัติขั้นต่อไป

มีหลักฐานชัดของ login UI ถูก block ด้วยข้อมูลไม่จำเป็น, N+1 ของ GPA, duplicate context/config และ polling ที่โหลดข้อมูลกว้างในระบบร่วม ควรเริ่ม baseline + login + read dedup แล้วลดงานจอสดและ batch GPA ก่อนแตะ write/RLS ความเร็วที่คาดหวังคือ request/bytes ลด, login/navigation รอน้อยลง และฐานมี headroom มากขึ้น แต่ยังไม่มีตัวเลข CPU/RAM หรือ before/after ยืนยัน

**หยุดที่แผนนี้ รอคำสั่งผู้ใช้ก่อนแก้ source จริง ไม่ได้ขอให้ apply SQL หรือ deploy จากเอกสารนี้โดยอัตโนมัติ**
