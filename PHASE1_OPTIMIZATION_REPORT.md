# PHASE 1 Optimization Report — C1 + H6 + H3 + H4

วันที่: 13 กันยายน 2026

สถานะ: Implement, local automated tests และ production build ผ่านแล้ว ไม่มีการ deploy/push หรือแก้ฐานข้อมูล

## 1. ขอบเขตที่ทำและการรักษางานเดิม

ทำเฉพาะ C1, H6, H3 และ H4 ตามคำอนุมัติ ไม่เริ่ม H1/C2/C3/H2 หรือ Phase อื่น

ก่อนแก้ตรวจ `git status --short`, `git diff --stat` และอ่าน instructions/แผนแล้ว พบ tracked changes เดิมใน `.context/README.md`, `azizgames.html`, `js/sports-checkin.js`, `js/ui.js`, `sports-checkin.html` รวมทั้ง untracked SQL/assets/เอกสาร/งานอื่น เก็บทั้งหมดไว้ ไม่ stage/commit และตรวจ SHA-256 ของ tracked changes เดิมว่าเหมือนก่อนเริ่มทุกไฟล์

ไฟล์ source ที่แก้รอบนี้เดิมไม่มี uncommitted changes เก็บสำเนาก่อนแก้แยกใน temporary directory การทดสอบ before ใช้ source ที่ commit `0fb45d585b88ec136d88aec22026423fb88b282e` ซึ่งตรงกับไฟล์เป้าหมายก่อนเริ่ม ส่วน after ใช้ working files

## 2. ไฟล์ที่แก้/เพิ่ม

| ไฟล์ | การเปลี่ยนแปลง |
|---|---|
| `student-login.html` | C1 ย้าย title/config/login statistics ไป `loadStudentLoginExtras()` เรียกหลังผูก login/register/recovery handlers; เมื่อ session นักเรียน redirect ให้ return ทันที |
| `js/supabase-errors.js` (ใหม่) | H6 predicate สำหรับ missing column/function โดยตรวจทั้ง error code และชื่อ object ที่คาด ไม่ใช้การค้นคำ timeout/network แบบกว้าง |
| `js/read-requests.js` (ใหม่) | H3 in-flight read dedup ที่แยก session และ impersonation; ไม่เก็บ settled results; ป้องกัน response ของ session เก่าและแยก mutable copies ให้ consumer |
| `js/api.js` | H6 จำกัด fallback teacher profile เฉพาะ overview_prefs หาย; H3 wrap getSystemConfig/getMyTeacherProfile/getMySubjects/getMyClasses; H4 เพิ่ม batch column options และรับ columns ที่โหลดใน action เดียวให้ getStudentScores |
| `js/student-api.js` | H6 RPC enrollment คืน [] ถือเป็นผลสำเร็จ; fallback เฉพาะ missing RPC; ไม่ยิง compatibility reads เมื่อ timeout/permission/network error; embed fallback เฉพาะ missing relationship หรือ null nested rows ตามเส้นทางเดิม |
| `js/prayer-dashboard.js` | H6 เท่านั้น: fallback direct reads เฉพาะ RPC ชื่อที่ระบุหาย; ไม่แก้ timer, interval, snapshot SQL, filter หรือ prayer writes |
| `js/teacher-views-grades.js` | H4 ใช้ columnsPromise เดียวทั้ง columns/score ids และโหลด column options 3 ประเภทในชุดเดียว; สูตร/score event/write logic เดิม |
| `tests/phase1-optimization.test.mjs` (ใหม่) | before/after API request counts, data parity, error classification, co-teacher และ session/impersonation isolation |
| `tests/phase1-browser.mjs` (ใหม่) | Chromium + source จริง + mock Supabase: login ที่ optional reads ค้าง, recovery listener, prayer timeout fallback, Grade Grid และ class navigation |
| `PHASE1_OPTIMIZATION_REPORT.md` (ใหม่) | รายงานฉบับนี้ |

## 3. สิ่งที่เปลี่ยนและสิ่งที่คงเดิม

### C1 — Student Login

เดิม async initialization รอ config แล้วรอ exact counts วันนี้/เดือน/ทั้งหมด ก่อนผูก handlers ผู้ใช้จึงเห็นปุ่มแต่ action ยังไม่พร้อมเมื่อข้อมูลประกอบช้า

หลังแก้ handlers พร้อมหลัง essential session/redirect check แล้วเริ่มโหลดข้อมูลประกอบโดยไม่ await ขวาง action คง query/filter/ข้อความสถิติและ Auth API เดิม ไม่เปลี่ยน role guard, password policy, next-URL validation หรือ recovery flow

**ไม่ได้ลดจำนวน query สถิติทั้งหมด** แต่ย้าย 1 config + 3 counts ออกจากเส้นทางที่ต้องรอก่อนใช้ปุ่ม Theme request ที่มีอยู่เดิมยังคงเดิม เมื่อมี student session และกำลัง redirect ไม่เริ่มงานประกอบต่อโดยไม่จำเป็น

### H6 — Error-specific fallback

- Teacher profile: ยอม retry ไม่เอา overview_prefs เฉพาะ `42703` หรือ `PGRST204` ที่ระบุ column นี้เท่านั้น
- Enrollment: ยอม compatibility path เฉพาะ `42883` หรือ `PGRST202` ที่ระบุ `get_student_enrolled_classes`; [] จาก RPC เป็นคำตอบที่ถูกต้อง ไม่ลองอ่านใหม่เพราะไม่มีรายการ
- ใน compatibility path ของ enrollment ถ้า deep embed มี permission/timeout/network error ให้ส่ง error กลับ ไม่เริ่ม query เพิ่ม; missing relationship `PGRST200` ยังใช้เส้นทางเดิมได้
- Prayer snapshot: fallback เฉพาะ missing `get_public_prayer_dashboard_snapshot`; timeout/permission/network error ส่งให้ error UI เดิม โดยไม่ขยายเป็น students/prayer_records reads
- Response RPC ผิด shape โดยไม่มี missing-object error ไม่ควรถูกตีความว่าต้อง fallback
- `getStudentScores` แบบ caller เดิมยัง lookup column ids ตามเดิม แต่ตรวจ error จาก lookup ไม่ทำให้ read failure กลายเป็นคะแนนว่างอย่างเงียบ ๆ

ไม่มี retry ของ writes และไม่มีการแก้ SQL เพื่อให้ fallback ใช้งานได้ หาก production ขาด object จะยังใช้ compatibility ที่ระบุไว้เท่านั้น

### H3 — In-flight dedup

รวม read ที่กำลังรอผลของ config/profile/subjects/classes ด้วย resource key และ query parameters เดียวกัน ไม่ใช่ TTL cache:

- ผูกกับ client/project ที่ import, actual session token/user และ impersonation session/profile/teacher
- JWT ใช้แยก identity/session/claims ในหน่วยความจำเท่านั้น ไม่บันทึกลง log/storage และไม่ใช้ cached role อนุญาต action
- query วิชาและห้องยังครอบคลุมทุกเทอมเหมือนเดิม จึงระบุ `all-terms` ใน key; config ระบุ `all-keys` ไม่แอบนำผลเฉพาะเทอมหนึ่งไปใช้กับอีกเทอม
- ลบ promise เมื่อสำเร็จหรือล้มเหลว ครั้งถัดไปหลังจบ action อ่าน Supabase ใหม่เสมอ
- มี auth listener หนึ่งตัวใน singleton module; callback ทำแค่ invalidation ไม่มี await/query/Auth API; logout/session token เปลี่ยนล้างรายการ pending
- อ่าน session/context ซ้ำก่อนส่งผล และตรวจ generation ป้องกัน response เก่าหลัง logout/เปลี่ยน user/impersonation
- ใช้ structuredClone แยกผลให้แต่ละ caller เพื่อไม่ให้ view ที่ sort/edit local array เปลี่ยนผลของอีก view
- ไม่มี long-lived cache, localStorage data cache, IndexedDB, prefetch หรือ cached permission

การเปลี่ยน role ฝั่งฐานที่ไม่ได้ออก token ใหม่ยังให้ RLS/RPC เดิมตัดสิน ไม่ถือว่า token/metadata ที่อ่านใน client เป็น authorization ภายหลังเปลี่ยนหน้า query ใหม่ไม่ได้อ่าน settled cache

ยังไม่รวม sequential reads ที่จบไปแล้ว และยังไม่รวม cache คนละ module เช่น theme/sync ทั้งหมดเข้าด้วยกัน เพื่อไม่เพิ่ม lifetime/invalidation scope ในชุดนี้

### H4 — Grade Grid

เดิม grid อ่าน columns แล้ว getStudentScores อ่าน column ids ซ้ำ; getSheetColumnOptions 3 ประเภททำ class skill lookup 3 ครั้งและ config read อีก 3 ครั้ง

หลังแก้:

1. สร้าง columnsPromise จาก `getScoreColumns(scoreClassId)` ครั้งเดียว
2. ใช้ columns เดียวกันส่งต่อให้ `getStudentScores(scoreClassId, cols)` ภายใน load เดียว
3. `getSheetColumnOptionsForTypes(classData.id, types)` ทำ class skill lookup 1 ครั้งและ config query 1 ครั้ง แล้วแยกประเภทด้วย parser เดิม

**Virtual/source class:** roster และ config ใช้ `classData.id` เหมือนเดิม; score columns/scores ใช้ `source_class_id ?? id` เหมือนเดิม ผลทดสอบใช้ source class ต่างจาก class ที่แสดงด้วย

ไม่ reuse columns ข้ามการเขียน/auto-sync และไม่เปลี่ยน reads หลัง fillLifeSkill/fillPrayer/auto-attendance ที่ต้องได้คะแนนล่าสุด ไม่เปลี่ยน `saveStudentScore`, change handler, override, history, rounding หรือ GPA calculation

## 4. Baseline และจำนวน Request ก่อน–หลัง

ตัวเลขด้านล่างเป็นจำนวน **Supabase query invocations ที่ mock boundary ใน local tests** ไม่ใช่ HTTP/SQL statement counts ที่วัดจาก production โดย before/after ใช้ fixture/flow เดียวกัน ไม่เรียก Supabase จริง ไม่ยิง load test และไม่มี production writes

| Scenario | ก่อน | หลัง | ลดลง |
|---|---:|---:|---:|
| H3 concurrent action: subjects ×1, classes ×2, config ×2, profile ×2 | 12 | 5 | 7 หรือ 58.3% ใน fixture นี้ |
| H4 columns + scores + options 3 ประเภท ที่ API boundary | 9 | 4 | 5 หรือ 55.6% |
| H4 เปิด Grade Grid จริงใน Chromium รวม secondary reads ของ fixture | 18 | 13 | 5 หรือ 27.8% |
| H6 teacher profile เมื่อ DB timeout | 2 | 1 | 1 หรือ 50% |
| H6 enrollment เมื่อ DB timeout | 3 | 1 | 2 หรือ 66.7% |
| H6 prayer snapshot เมื่อ RPC timeout | 3 | 1 | 2 หรือ 66.7%; interval ไม่เปลี่ยน |
| C1 optional queries ที่ต้องเสร็จก่อน bind login handlers | 4 | 0 | เอา 4 queries ออกจาก blocking path; total optional reads ไม่ได้ลด |

กรณี missing overview_prefs จริงยังมี 2 reads โดยตั้งใจ; missing enrollment RPC + deep embed สำเร็จยังมี 2 requests; ไม่แลก compatibility ที่จำเป็นกับตัวเลข request ต่ำ

H3 อัตราลดขึ้นกับการเรียกทับซ้อนจริง หาก requests จบเรียงกันจะไม่ใช้ผลเก่า จึงไม่อ้างว่า login ทุกคนลด 58.3% หรือ DB CPU ลดตามเปอร์เซ็นต์นี้ ยังไม่มี baseline CPU/RAM, network latency, p95 production หรือ active concurrency

## 5. Tests และผลตรวจ

### Syntax / Unit / Integration

- `node --check` ผ่าน source JavaScript ที่แก้/เพิ่มทั้ง 6 ไฟล์ และ test scripts
- แยก inline module scripts จาก student-login.html แล้ว `node --check` ผ่านทั้งสอง script
- `node --experimental-vm-modules --test tests/phase1-optimization.test.mjs tests/score-display.test.mjs`: **14 tests ผ่านทั้งหมด**
- ใช้ module source จริงใน VM; mock เฉพาะ Supabase และ DOM utility ที่ไม่เกี่ยวกับ API scenario ไม่ใช่ใช้ implementation ใหม่จำลองทั้ง before/after
- ตรวจ co-teacher merge/deduplicate และ all-term classes ตรงกัน
- ตรวจ request rejection ถูกล้าง, ไม่มี settled-result reuse, null teacher ไม่อ่านทุกวิชา, consumer ไม่แชร์ mutable object
- ตรวจ logout, same-user token/role change, different user และ impersonation context เปลี่ยนระหว่าง pending read: ผลเก่าถูก reject และ request ใหม่แยกชุด
- ตรวจ anon INITIAL_SESSION และ repeated auth notifications ไม่ invalidate read ที่ยังใช้ scope เดิม
- ตรวจ timeout/permission/network/missing column/missing RPC/empty enrollment และ denied embed
- ตรวจ null/0/retake/decimal/history score rows และ column options ก่อน/หลังตรงกัน
- ตรวจ source ของ `saveStudentScore`, score change handler และ getStudentGPA ไม่เปลี่ยน พร้อม existing score-display tests เรื่อง bonus/override/rounding/formula

### Browser (Chromium ผ่าน Playwright)

คำสั่ง: เปิด `npm run dev -- --host 127.0.0.1 --port 4173` แล้ว `node tests/phase1-browser.mjs`

ทุก external request ถูก block และแทน Supabase ด้วย mock เพื่อไม่ใช้บัญชีจริง/ข้อมูลจริง:

- ก่อนแก้: hold optional config ไว้ กดถัดไปแล้วยังไม่เรียก lookup; หลังปล่อยข้อมูลประกอบจึงใช้ปุ่มได้
- หลังแก้: hold optional reads ไว้ต่อเนื่อง ยัง lookup นักเรียนและเรียก `signInWithPassword` ได้; ไม่อ้างว่าได้ login ผ่าน Auth production
- PASSWORD_RECOVERY listener เปิด modal ได้ รวมกรณี optional reads ยังไม่จบ
- Prayer timeout ก่อนเรียก 3 queries หลังเหลือ 1; ทดสอบ page จริง ไม่เปลี่ยน polling
- Grade Grid render สำเร็จทั้ง before/after; ค่า inputs, subtotals, total และ grade ตรงกัน
- เปลี่ยนผ่าน real `renderMyClasses()` แล้วกลับ `renderGradesGrid()` ได้ ไม่ใช่ authenticated teacher shell E2E ทุกเมนู
- ไม่มี uncaught page errors ใน scenarios ที่รัน และ test stub ปฏิเสธ mutation หากมีการเขียนโดยไม่คาดหมาย

### Build / Diff / Preservation

- `npm run build`: ผ่าน (exit 0, 278 modules, 45.03 วินาที); มีคำเตือน chunk ใหญ่กว่า 600 kB ซึ่งไม่ใช่ build failure และไม่ได้ขยายงานไป code splitting
- `git diff --check`: ผ่าน และตรวจ whitespace ของไฟล์ใหม่ด้วย `git diff --no-index --check` ผ่าน (exit 1 ของ no-index ที่ไม่มีข้อความ error หมายถึงไฟล์มี diff)
- งาน tracked changes เดิม 5 ไฟล์: hash ตรงกับก่อนเริ่มทั้งหมด
- ไม่แก้ package.json/package-lock, ไม่เพิ่ม runtime dependency; Playwright ที่ใช้มีอยู่ใน environment แล้ว

## 6. ความเสี่ยงและข้อจำกัดที่ยังเหลือ

1. **ยังไม่พิสูจน์ production performance/RLS**: browser ใช้ mock จึงไม่ยืนยัน live grants, live RPC definitions, real JWT switching, network latency หรือ CPU/RAM ที่ลดจริง
2. **Token refresh ระหว่างอ่าน:** deliberately reject late response เมื่อ scope เปลี่ยน แม้ refresh ยังเป็นคนเดิม เพื่อไม่ส่งข้อมูลข้าม session ผู้ใช้อาจต้องเปิดหน้าใหม่แทน automatic retry
3. **In-flight เท่านั้น:** query sequential/config ที่โหลดคนละ module ยังคงมี ไม่ขยายเป็น TTL cache หรือ invalidation architecture โดยไม่ได้ทดสอบเพิ่ม
4. **API row cap ยังเดิม:** ไม่เปลี่ยน pagination/limit ของคะแนนในชุดนี้ และไม่อ้างว่าทดสอบข้อมูลเกิน production row cap ผ่านแล้ว ต้องตรวจแยกโดยไม่ลดจำนวนแถวเพื่อให้เร็ว
5. **Score write correctness ที่เคยพบในแผนยังไม่แก้:** รวม delete branch ไม่ตรวจ error และ same-cell concurrent delta/history ตาม implementation เดิม เพราะผู้ใช้ห้ามแก้ save logic
6. **UI เดิมบาง caller catch แล้วใช้ []/{}:** helper ส่ง error ตามจริงแล้ว แต่ยังไม่ได้ rewrite error UX ทุก portal
7. **Missing-schema compatibility:** รองรับชื่อ/code ที่ตรวจได้ชัด; unexpected response shape/error แบบใหม่จะแสดง failure แทนยิง query เดาเพิ่ม เป็นพฤติกรรมที่ตั้งใจของ H6
8. **Coverage:** ตรวจข้อมูล synthetic ที่มีครูร่วม/สองเทอม/source class/ศูนย์/ว่าง/ทศนิยม/retake แล้ว แต่ไม่ได้ทดสอบทุกวิชาและ real multi-device writes หรือ supervisor/official ทุก role

## 7. สิ่งที่ไม่ได้แตะ

- RLS, Security Policy, SQL schema, migration, trigger, function definition ฝั่งฐาน และ service_role
- สูตรคำนวณคะแนน/เกรด, score save/write behavior, Prayer write architecture
- AZIZGAMES/AZFUTSAL source, sports polling, prayer polling interval และ public snapshot SQL
- Student GPA N+1 (H1), C2/C3/H2, indexes, server aggregates, scheduled jobs
- Offline-first, queues เดิมหรือใหม่, background sync, conflict resolution
- theme/sync long-lived caches เดิม, general route lifecycle rewrite, template-column N+1 และ full-table pagination redesign
- Deployment, version bump, commit, push และ remote database actions

## 8. Rollback เฉพาะชุดนี้

ไม่มี schema/data migration จึง rollback เฉพาะ client changes ได้ แต่ห้าม reset worktree ทั้งก้อน:

- คืน diff ของ 5 source เดิมในชุดนี้เท่านั้น: student-login.html, js/api.js, js/student-api.js, js/prayer-dashboard.js, js/teacher-views-grades.js
- ถอน imports แล้วนำไฟล์ใหม่ read-requests.js/supabase-errors.js ออกพร้อมกัน ไม่ทิ้ง caller ที่ยัง import
- Test scripts/report เก็บเป็นหลักฐานได้; ไม่แตะ 5 tracked files ที่มีงานเดิมก่อนเริ่ม
- ไม่มี cache ถาวรใหม่ให้ migrate/clear; reload page จะทิ้ง in-memory pending state
- งานนี้ไม่ได้เปลี่ยนคะแนนจริง จึงไม่มี data rollback และไม่ควรลบ/แก้ข้อมูลเพื่อย้อน frontend

## 9. ควรไป H1 ต่อหรือไม่

**แนะนำ H1 เป็นงานถัดไปหลังผู้ใช้ตรวจรับชุดนี้และอนุมัติแยก** เพราะ getStudentGPA ยังมี enrollment + columns/scores ต่อวิชา ซึ่งสร้าง burst ตอนนักเรียนเปิด overview สามารถเริ่มจาก batch read ใน client โดยไม่แก้สูตร/RLS/SQL ถ้า query shape และ row completeness ทำได้อย่างปลอดภัย

ก่อนเริ่ม H1 ควรตรวจ authenticated smoke test ด้วยบัญชีทดสอบที่มีสิทธิ์เหมาะสมและเก็บ request trace ของชุดนี้ในสภาพแวดล้อมที่อนุมัติ โดยไม่ deploy อัตโนมัติ พร้อมเตรียม GPA parity fixtures หลายรายวิชา/คะแนนไม่ครบ/สามัญ-ศาสนา/source class และ pagination

**หยุดหลังรายงานนี้ ไม่เริ่ม H1 หรือ Phase อื่น และไม่ deploy/push จนกว่าจะได้รับคำสั่งใหม่**
