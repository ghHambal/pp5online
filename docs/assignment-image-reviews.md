# Smart Classroom: เขียนตรวจงานรูปภาพ

ครูเปิด Smart Classroom → งานที่มอบหมาย → ดูและติดตามงาน → เปิดงานนักเรียน → **เขียนตรวจงาน** ใต้รูปแต่ละไฟล์

- เปิดเต็มจอ: ปากกา สี ขนาด ยางลบทั้งเส้น ข้อความ ย้อนกลับ/ทำซ้ำ และซูม
- เลือก **เลื่อน/ซูม** เพื่อเลื่อนภาพ; เลือก **ปากกาเท่านั้น** เพื่อไม่รับรอยเขียนจากนิ้ว
- **บันทึกฉบับร่าง** เก็บรอยตรวจสำหรับครูเปิดมาตรวจต่อ นักเรียนยังไม่เห็นร่าง
- **ส่งผลตรวจให้นักเรียน** สร้างภาพ PNG ที่รวมต้นฉบับและรอยตรวจ นักเรียนเปิดจากงานชิ้นเดิม ทั้งหน้ารวมงานและหน้ารายวิชา
- บันทึกร่างหลังเผยแพร่แล้วจะไม่เปลี่ยนภาพที่นักเรียนเห็น จนกดส่งผลตรวจอีกครั้ง
- นักเรียนส่งใหม่: ผลตรวจรอบก่อนยังแสดงแยกตามเวลาส่ง ส่วนครูต้องเปิดรอบล่าสุดก่อนตรวจต่อ
- รองรับรูปภาพในรุ่นแรก ส่วน PDF และไฟล์อื่นใช้การแสดงผลเดิม

## Data and permissions

`assignment_image_reviews` stores editable strokes separately, keyed by submission ID, exact submission timestamp, and source URL. Original submission files remain untouched. Drafts are accessible only through an authorized teacher/admin RPC; students receive only published image metadata for their own submissions. The private `assignment-reviews` bucket uses authenticated upload/read policies and one-hour signed viewing URLs.

Saving locks the current submission and verifies both its timestamp/source file and the review version. Concurrent/stale edits are rejected. The UI preserves unsaved strokes after request errors and warns before closing. Uploads are immutable; ambiguous save failures never delete a potentially committed image.

## Validation

- `node tests/assignment-annotation-model.mjs`
- `tests/assignment-image-review-access.sql`: 9 live-database role/access/publication/concurrency checks, all temporary changes rolled back.
- `tests/assignment-image-editor.browser.mjs`: browser UI with a mocked API boundary, testing draw/erase/text/undo/redo, pen-only filtering, zoom, draft reopening, network retry, PNG pixels, mobile layout, student preview and unsaved-close protection. Run with `npm run dev -- --host 127.0.0.1 --port 4181` and an installed `playwright-core`; set `PLAYWRIGHT_MODULE` and `CHROME_EXECUTABLE` if needed.
- `npm run build` and `node tests/teacher-runtime-bundle.mjs`

Database authorization was tested under real teacher/student profile claims inside a rollback transaction. Browser tests do not sign in as a real teacher or publish a result to an actual student. Physical Apple Pencil/palm behavior still needs device testing.
