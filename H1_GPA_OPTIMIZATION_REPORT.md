# H1 — Student GPA Batch Read Optimization

วันที่ตรวจสอบ: 13 กันยายน 2026

## 1. ขอบเขตและสถานะ

ดำเนินการเฉพาะ H1 ตามที่อนุมัติ: เปลี่ยนการอ่านข้อมูลของ `getStudentGPA()` เป็น client-side batch read พร้อม pagination โดยเก็บสูตรคะแนน เกรด การจัดกลุ่มสามัญ/ศาสนา และสูตร GPA เดิมไว้

แก้ runtime เฉพาะส่วน GPA ใน `js/student-api.js` ไม่แก้ caller หรือ UI ไม่เพิ่ม cache/RPC และไม่มีการเขียนข้อมูล การเรียก SQL หรือการเปลี่ยน RLS, Security Policy, Schema, Trigger และ Score Write ไม่มี deploy/push และไม่ได้เริ่ม C2, C3, H2 หรือ Phase อื่น

ผลการทดสอบเป็นข้อมูลสังเคราะห์ในเครื่องและ Browser ที่แทน Supabase ด้วย mock จึงยืนยัน invocation count และ data/UI parity ของกรณีทดสอบได้ แต่ไม่ได้ยืนยัน latency, CPU/RAM, query plan หรือ Auth/RLS ของฐานข้อมูล production

**ข้อจำกัดของคำว่า parity:** เมื่อโค้ดเดิมอ่านข้อมูลครบ ผลก่อน/หลังตรงกันทุกกรณีที่ทดสอบ ส่วนกรณีโค้ดเดิมถูก row cap ตัดข้อมูล ผลใหม่เท่ากับสูตรเดิมที่ได้รับข้อมูลครบ อาจแตกต่างจากค่าที่โค้ดเดิมคำนวณจากข้อมูลไม่ครบ ดูรายละเอียดข้อ 6

## 2. Baseline และงานเดิมใน worktree

อ่าน `PERFORMANCE_OPTIMIZATION_PLAN.md`, `PHASE1_OPTIMIZATION_REPORT.md` และตรวจ implementation/callers ก่อนแก้ พร้อมเก็บ snapshot และ SHA-256 ใน:

`/var/folders/23/0vtsytsd2zz69fdj1ls458p40000gn/T/pp5-h1-baseline-bqj0w8s_`

ก่อน H1 มี tracked working changes อยู่แล้วใน `.context/README.md`, `azizgames.html`, `js/api.js`, `js/prayer-dashboard.js`, `js/sports-checkin.js`, `js/student-api.js`, `js/teacher-views-grades.js`, `js/ui.js`, `sports-checkin.html`, `student-login.html` รวมถึง untracked documents/tests/helpers/SQL/assets อื่น ไม่ได้ล้างหรือทับงานเหล่านั้น

ตรวจ hash ของไฟล์ baseline ที่เก็บไว้ 16 ไฟล์: 14 ไฟล์ไม่เปลี่ยน ส่วนที่เปลี่ยนมีเพียง GPA region ของ `js/student-api.js` และ assertion ที่เกี่ยวกับ GPA ใน `tests/phase1-optimization.test.mjs` โค้ด `student-api.js` ก่อนและหลัง GPA region ตรงกับ snapshot ทุก byte

เก็บ `getStudentGPA()` ก่อน H1 เป็น fixture ใน `tests/fixtures/student-gpa-before.js` เพื่อรันเทียบจริง ไม่ได้จำลองสูตรใหม่ขึ้นแทนสูตรเก่า ค่า SHA-256 ของตัวฟังก์ชันก่อนแก้ที่บันทึกไว้คือ `0d46ee9341adddb1159beca40386c5c24c37facd670c65226fd871ef33cb8dc1`

## 3. Flow เดิมและ callers

พบ production caller โดยตรงหนึ่งจุด: `renderStudentOverview()` ใน `js/student-views.js` เรียก `getStudentGPA(student.id)` ระหว่างโหลด Overview ร่วมกับข้อมูลส่วนอื่น หากโหลด GPA ล้มเหลว caller มี fallback เป็นกลุ่มว่างอยู่เดิม

Flow เดิม:

1. อ่าน `class_students` ของนักเรียน พร้อม nested classes → master_subjects → teachers หนึ่งครั้ง ไม่มี pagination
2. `Promise.all()` ตาม enrollment: แต่ละ class อ่าน `class_score_columns` แยกหนึ่งครั้ง โดยไม่รวม `คะแนนพิเศษ`
3. ถ้ามี columns อ่าน `student_scores` ของนักเรียนใน assignment IDs ของ class นั้นแยกหนึ่งครั้ง
4. คำนวณความครบถ้วน คะแนน เกรด retake และจัดกลุ่มสามัญ/ศาสนา
5. UI ใช้ `_calcGPA` เดิมคำนวณค่าเฉลี่ยถ่วงน้ำหนัก credit และแสดงสองตำแหน่งทศนิยม

จำนวน reads เดิม = `1 + C + S` โดย C คือ class ที่มี metadata ใช้งานได้ และ S คือ class ที่มี columns กรณีทุกวิชามี columns = `1 + 2N` มี request fan-out ตามจำนวนวิชา และแต่ละ query ไม่มี pagination

## 4. Flow ใหม่และ pagination

1. อ่าน enrollment ของนักเรียนพร้อม metadata เดิม โดยเพิ่ม `id` เพื่อเป็น cursor
2. รวบรวม class IDs ที่มี metadata ใช้งานได้ ตัด ID ซ้ำ แล้วอ่าน columns ด้วย `.in('class_id', ids)` เพิ่ม `class_id` ใน projection สำหรับจัดกลุ่ม
3. อ่าน scores ของนักเรียนด้วย `.eq('student_id', studentId)` และ `.in('assignment_id', ids)` แบบ batch
4. จัดข้อมูลเป็น Map ตาม class/assignment แล้วป้อนให้ส่วนคำนวณเดิม ไม่มีการใช้ cache ข้ามการเรียก

รายละเอียดการแบ่งข้อมูล:

- จำกัด ID แต่ละ batch ไม่เกิน 200 เพื่อจำกัดความยาว URL และส่ง batch ต่อเนื่อง ไม่กระจาย request พร้อมกันตามรายวิชา
- ขอแต่ละ page ไม่เกิน 1,000 rows และเรียง cursor จากน้อยไปมาก อ่านหน้าถัดไปด้วย `.gt(cursorColumn, lastCursor)`
- อ่านจนได้ **หน้าว่าง** ไม่ถือว่าหน้าสั้นกว่า 1,000 คือหน้าสุดท้าย จึงรองรับ server cap ที่ต่ำกว่าที่ client ขอ ทดสอบ cap = 3 และ 2 แล้ว
- Enrollment ใช้ primary key `id` เพราะ `class_id` ใน schema อนุญาต null ได้; columns ใช้ primary key `id`; scores ใช้ `assignment_id` ภายใต้ student เดียวและ IN ของ column IDs ที่รู้จักแล้ว
- อ้างอิง constraint ที่มีใน source `schema.sql`: primary keys ของ enrollment/columns และ `UNIQUE (assignment_id, student_id)` ของ scores ไม่ได้แก้หรือ apply schema และยังไม่ได้ตรวจ constraint ของ production โดยตรง
- ไม่มี COUNT query และไม่ใช้ offset ที่ข้ามข้อมูลเพราะเดาขนาด page ผิด จำนวน requests รวมหน้าว่างที่ใช้ยืนยันจบแต่ละ batch ด้วย
- ตรวจ error/รูปแบบ response/cursor ทุกหน้า หากผิดพลาดจะ reject ทั้งการโหลด ไม่ส่งคะแนนจากบางหน้ากลับไปเป็นผลสมบูรณ์ และไม่ retry อัตโนมัติ
- Enrollment ว่างคืนกลุ่มว่าง; class ไม่มี columns ไม่อ่าน scores; metadata ที่เข้าถึงไม่ได้ยังข้ามตามเดิม

จำนวน reads ใหม่ขึ้นกับจำนวน page และจำนวน batch จริง: ผลรวม `หน้าข้อมูล + 1 หน้าว่าง` ของ enrollment และแต่ละ columns/scores batch ไม่อ้างว่าเหลือ 3 requests ตายตัว

## 5. Request invocation ก่อน/หลัง

นับเมื่อ mock Supabase query ถูก execute จริง (await/then) รันฟังก์ชันก่อน H1 และหลัง H1 บน fixture เดียวกัน ไม่ใช่จำนวน SQL statements ภายใน Postgres หรือ HTTP trace จาก production

| กรณี | ก่อน H1 | หลัง H1 | ผลต่าง | Data/GPA |
|---|---:|---:|---:|---|
| 20 วิชา × 4 columns | 41 | 6 | ลด 35 หรือ 85.4% | ข้อมูลตรงกัน; GPA สามัญ 3.60 / ศาสนา 4.00 |
| 40 วิชา × 30 columns รวม 1,200 columns | 81 | 17 | ลด 64 หรือ 79.0% | ข้อมูลครบและตรงกัน; GPA 3.82 / 4.00 |
| 1 วิชา × 1,205 columns ขาดคะแนนช่องสุดท้าย | 3 แต่ข้อมูลถูกตัด | 19 ข้อมูลครบ | เพิ่มเพื่อความครบถ้วน | เท่ากับสูตรเดิมบนข้อมูลครบ; ไม่เท่าผลเดิมที่ถูกตัด |

ที่มาของจำนวนหลังแก้: 20 วิชา = enrollment 2 + columns 2 + scores 2; 40 วิชา = enrollment 2 + columns 3 + scores 12; 1 วิชา 1,205 columns = enrollment 2 + columns 3 + scores 14

Browser test รัน `renderStudentOverview()` จริง รวม reads ของส่วนอื่นที่ไม่ได้แก้ด้วย:

| Browser fixture | Overview reads ก่อน | หลัง | ลด | ผล UI |
|---|---:|---:|---:|---|
| 20 วิชา | 117 | 82 | 35 | GPA/ตารางสองกลุ่มตรงกัน; สลับแท็บและ card view ได้ |
| 40 วิชา | 217 | 153 | 64 | GPA/ตารางสองกลุ่มตรงกัน; สลับแท็บและ card view ได้ |

จำนวนรวมของ Overview ยังมี reads อื่นที่อยู่นอก H1 จึงไม่ได้ลดทั้งหน้าลงเหลือ 6 หรือ 17 ครั้ง ไม่ได้ใช้จำนวน requests ที่ลดลงอนุมานเป็นเปอร์เซ็นต์ CPU/RAM ที่ลดลง

## 6. Data parity และพฤติกรรมที่คงไว้

ทดสอบ equality ของผล `getStudentGPA()` ทั้ง object รวมคะแนน เกรด credit จำนวนช่อง flag retake metadata และกลุ่ม พร้อม equality ของ GPA จาก `_calcGPA` จริงใน UI ไม่ได้เปรียบเทียบแค่ค่าเฉลี่ยสุดท้าย

- หลายวิชา, คะแนนครบ/ไม่ครบ, score row หาย, คะแนน 0, คะแนน null, ทศนิยม และ retake
- fallback `final_score ?? original_score`, ความต่าง null กับ 0, คะแนนเต็ม 0, ไม่มี columns/enrollment และ nested metadata ที่มองไม่เห็น
- สามัญ/ศาสนา, category ของครู, subject group และ `subject_group_override`
- กรอง `คะแนนพิเศษ` และ assignment_type ที่เป็น SQL NULL เหมือนเงื่อนไขเดิม
- คะแนนของนักเรียนอื่นไม่ปะปน และการเรียกใหม่เห็น score ที่เปลี่ยน ไม่มี settled GPA cache
- `source_class_id`: โค้ด GPA เดิมใช้ class ที่ลงทะเบียน ไม่ตาม source class เหมือน Grade Grid การแก้ H1 คงพฤติกรรมนี้ โดย fixture ให้คะแนน source ต่างจาก class ที่ลงทะเบียนและตรวจว่าไม่ได้แทนที่คะแนน จึง **ไม่ได้เพิ่ม source-following logic**
- 1,200 columns/scores รวม, 1,205 columns ในวิชาเดียว, enrollment 1,005 แถว, batch IDs เกิน 200 และ server cap ต่ำกว่าที่ขอ
- enrollment ที่ `class_id = null` ถูกข้ามโดยไม่ทำให้ GPA ของแถวที่ใช้ได้หาย
- Error ทุก stage และ error หลังโหลดหน้าก่อนหน้าสำเร็จต้องไม่คืน GPA บางส่วน

**กรณีเกิน cap ที่โค้ดเดิมอ่านไม่ครบ:** fixture หนึ่งวิชามี 1,205 columns คะแนน 0 และขาด score ช่องที่ 1,205 โค้ดเดิมอ่าน columns เพียง 1,000 จึงเห็นว่ากรอกครบและให้ grade 0 โค้ดใหม่เห็นครบ 1,205 columns / 1,204 scores จึงให้ grade null ตามกฎเดิมที่ต้องกรอกครบก่อนคำนวณเกรด ผลใหม่เท่ากับการรันฟังก์ชันเดิมโดยไม่ตัดข้อมูลทุก field และ GPA ตรงกันกับ oracle นี้ ไม่สามารถกล่าวว่าค่าใหม่เท่ากับผลเดิมที่อ่านข้อมูลไม่ครบได้

ส่วนสูตรและ grouping ถูกตรวจ source equality ด้วย โดยยอมให้ต่างเฉพาะ delimiter ของ async map ที่เปลี่ยนเป็น synchronous map ส่วน `_calcGPA` ใน UI และ score write ไม่ถูกแก้

## 7. ไฟล์ของงาน H1

| ไฟล์ | การเปลี่ยนแปลง |
|---|---|
| `js/student-api.js` | เพิ่ม GPA pagination/batch helpers และเปลี่ยนเฉพาะการอ่านใน getStudentGPA |
| `tests/fixtures/student-gpa-before.js` | Snapshot ฟังก์ชันก่อน H1 สำหรับ before/after oracle |
| `tests/fixtures/gpa-data.mjs` | Fixture สังเคราะห์และ Supabase mock ที่จำลอง cap/filter/pagination/error และนับ reads |
| `tests/h1-gpa-loader.mjs` | โหลด GPA ก่อน/หลังกับ mock และดึงสูตร GPA จริงจาก UI |
| `tests/h1-gpa.test.mjs` | H1 regression/parity/request-count tests 12 tests |
| `tests/h1-gpa-browser.mjs` | Playwright Student Overview/GPA popup ก่อน/หลัง; block external traffic |
| `tests/phase1-optimization.test.mjs` | เปลี่ยน guard เดิมที่ห้ามเปลี่ยนทั้งฟังก์ชัน GPA ให้ตรวจสูตร/grouping เท่าเดิม เพราะ H1 อนุมัติให้เปลี่ยน read flow; guard score write ยังอยู่ |
| `H1_GPA_OPTIMIZATION_REPORT.md` | รายงานฉบับนี้ |

## 8. Tests และ validation

- `node --check` บน runtime/test/helper JavaScript ที่เกี่ยวข้อง: ผ่าน
- `node --experimental-vm-modules --test tests/h1-gpa.test.mjs tests/phase1-optimization.test.mjs tests/score-display.test.mjs`: **26 tests ผ่านทั้งหมด** (H1 12 + Phase 1 11 + score display 3)
- Existing Phase 1 tests ตรวจ teacher/co-teacher, session/role/logout/impersonation isolation, retry behavior, Grade Grid parity และ score write guards ผ่าน ไม่มีการแก้ runtime ของส่วนเหล่านี้เพิ่ม
- `node tests/h1-gpa-browser.mjs`: Student Overview + GPA popup ก่อน/หลัง 20 และ 40 วิชา ผ่าน ตรวจข้อความตารางของสองกลุ่ม GPA แท็บ card count และไม่มี pageerror
- `node tests/phase1-browser.mjs`: Login ไม่รอ extras, retry regression และ Grade Grid/class navigation/score cells/totals/grades ผ่านด้วย mock เดิม
- `npm run build`: ผ่าน มีคำเตือน chunk ใหญ่กว่า 600 kB; ไม่มีการปรับ build/chunking นอกขอบเขต
- `git diff --check` และ whitespace check ของไฟล์ H1 ที่เพิ่มใหม่: ผ่าน
- ตรวจ diff เทียบ snapshot ก่อน H1 เพื่อแยกงานเดิมออกจากงานใหม่ และตรวจ hash ตามข้อ 2

ไม่มี `npm test` script ใน package.json จึงเรียก Node test files ที่มีอยู่โดยตรง ไม่รัน `tests/score-display-rls.sql` เนื่องจากรอบนี้ห้าม Apply SQL; ไม่มีการอ่าน/เขียนฐานข้อมูลจริงใน tests

วิธีรัน Browser test ซ้ำ: เปิด `npm run dev -- --host 127.0.0.1 --port 4173` ในอีก terminal แล้วรันสอง browser scripts ข้างต้น ไม่มี credential ของผู้ใช้จริงใน fixtures

## 9. ความเสี่ยงที่เหลือและ Rollback

1. ผลลด reads ยืนยันด้วย mock invocation; ยังต้องวัด HTTP trace, response sizes, latency และ CPU/RAM ในสภาพใช้งานจริงก่อนสรุปผล production
2. Batch read ยังผ่าน Supabase client และ RLS เดิม ไม่ใช้ cached permission หรือ service_role แต่ mock ไม่สามารถยืนยัน query plan/RLS/live constraints ต้อง smoke test ด้วยบัญชีทดสอบที่ได้รับอนุญาตก่อนเผยแพร่
3. หลาย requests ไม่ใช่ transaction snapshot ครูแก้คะแนน/columns ระหว่างโหลดอาจทำให้แต่ละหน้าเห็นคนละเวลาได้เหมือนความเสี่ยงของ flow เดิม ไม่เพิ่ม RPC/locking เพื่อแก้เรื่องนี้ใน H1
4. หน้าว่างเพื่อยืนยันจบแต่ละ batch เพิ่ม requests ในข้อมูลชุดเล็ก เช่นวิชาเดียว และ batch ต่อเนื่องอาจไม่ลด latency ทุกขนาดข้อมูล แม้ลด fan-out เมื่อมีหลายวิชา
5. โหลดครบย่อมใช้ memory ฝั่ง browser ตามจำนวน rows จริงมากกว่า baseline ที่ถูกตัด Maps อยู่เฉพาะการเรียกนั้น ไม่มี cache ระยะยาว
6. การเรียง cursor ให้แน่นอนอาจทำให้ลำดับรายวิชาต่างจากผลเดิมที่ไม่ได้ระบุ order; สูตร/grouping ไม่เปลี่ยน
7. เมื่อ page ใด error จะไม่แสดงผลบางส่วน caller เดิม fallback เป็นกลุ่มว่าง ยังไม่มี error UX ใหม่ใน H1
8. พฤติกรรม source class ของ GPA ยังต่างจาก Grade Grid ตามเดิม ถ้าต้องการเปลี่ยนต้องตรวจ business logic และขออนุมัติแยก
9. ค่าที่เคยคำนวณจากข้อมูลเกิน cap แล้วถูกตัดอาจเปลี่ยนเมื่ออ่านครบ นี่เป็นขอบเขต parity ที่ต้องพิจารณารับงานตามข้อ 6

Rollback: ย้อนเฉพาะ GPA region จาก snapshot ก่อน H1 และคืน assertion ของ Phase 1 test จาก snapshot พร้อมแยก/นำ H1 tests ออกตามความเหมาะสม ห้ามใช้ `git checkout -- js/student-api.js` ทั้งไฟล์เพราะจะลบงาน Phase 1 เดิมที่ยังไม่ commit ไม่มี SQL/data rollback จำเป็น เพราะงานนี้เป็น read-only และยังไม่ได้ deploy

## 10. Recommendation ขั้นต่อไป

ให้ตรวจรับ H1 พร้อมข้อจำกัด parity ของข้อมูลเดิมที่ถูก cap จากนั้นเมื่อได้รับอนุญาตให้ทดสอบระบบจริง ควรใช้บัญชีนักเรียนทดสอบที่มีหลายวิชาและ source/retake เปรียบเทียบค่ารายวิชาและ GPA พร้อม HTTP trace ภายใต้ session/RLS จริงก่อนตัดสินใจเผยแพร่ เก็บ Before/After ด้วยจำนวนวิชาและข้อมูลชุดเดียวกัน แยก GPA reads จากส่วนอื่นของ Overview

ยังไม่ควรสรุปว่าปัญหา CPU/RAM ทั้งระบบหมดไป เพราะ H1 ลดเฉพาะ reads ของ GPA หยุดงานที่ H1 และรออนุมัติก่อน C2, C3, H2 หรือ Phase อื่น ไม่มี deploy/push ในรอบนี้
