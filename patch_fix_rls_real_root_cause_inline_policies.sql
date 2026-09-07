-- แก้บั๊กประสิทธิภาพ RLS ต่อจาก patch_fix_rls_helper_function_volatility.sql
-- รันจริงบน production แล้วเมื่อ 2026-09-07 ผ่าน Supabase MCP — ไฟล์นี้เก็บไว้เป็นหลักฐาน/อ้างอิงใน repo เท่านั้น
--
-- **สำคัญ: patch ก่อนหน้า (ALTER FUNCTION ... STABLE) ไม่พอจริง** ผู้ใช้ทดสอบซ้ำแล้วยัง
-- timeout เหมือนเดิม ตรวจ postgres_logs ยืนยันว่า timeout ยังเกิดต่อเนื่องหลังรัน patch นั้น
--
-- Root cause ที่แท้จริง: has_class_access()/has_subject_access() เป็น SECURITY DEFINER
-- (และมี SET search_path ด้วย) — Postgres **ไม่ inline ฟังก์ชันที่เป็น SECURITY DEFINER หรือมี
-- SET clause เด็ดขาด ไม่ว่าจะ mark STABLE หรือไม่ก็ตาม** เพราะการ inline จะทำลาย security
-- context boundary ที่ SECURITY DEFINER ต้องการ ผลคือฟังก์ชันยังถูกเรียกเป็น "black box" ทีละแถว
-- เหมือนเดิมทุกประการ การแก้ volatility อย่างเดียวจึงไม่มีผลอะไรเลยกับ query shape นี้
--
-- วิธีแก้จริง: เขียน RLS policy ใหม่ให้ inline ตรรกะ (EXISTS + JOIN ธรรมดา) เข้าไปในตัว policy
-- เอง แทนการเรียกผ่านฟังก์ชัน — เมื่อเป็น subquery ธรรมดาที่ planner มองเห็นได้ (ไม่ใช่ opaque
-- function call) Postgres จะแปลงเป็น "Hashed SubPlan" ได้เอง (evaluate เข้า hash set ครั้งเดียว
-- แล้วเช็คแต่ละแถวด้วย hash lookup ธรรมดา) — ยืนยันด้วย EXPLAIN ANALYZE จริงว่า query เดียวกัน
-- ที่เคย timeout ตอนนี้ใช้เวลาแค่ ~58ms (เห็น "Filter: (ANY (class_id = (hashed SubPlan...)))"
-- ในแผน query ชัดเจน)
--
-- เขียน policy ใหม่ให้ 12 ตาราง (ยกเว้น classroom_chat_unlocked ใน chat_rooms ที่ตั้งใจปล่อยไว้
-- เพราะตารางนี้แถวน้อยมาก ไม่ใช่จุดเกิด timeout จริง และ logic ซับซ้อนกว่า (คำนวณ donor tier)
-- ความเสี่ยงจากการแก้มากกว่าประโยชน์ตอนนี้):

-- ── attendances ──────────────────────────────────────────────────────────────
drop policy if exists attendances_teacher_own on public.attendances;
create policy attendances_teacher_own on public.attendances
for all to authenticated
using (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = attendances.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = attendances.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
)
with check (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = attendances.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = attendances.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
);

-- ── class_students ───────────────────────────────────────────────────────────
drop policy if exists class_students_teacher_own on public.class_students;
create policy class_students_teacher_own on public.class_students
for all to authenticated
using (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = class_students.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = class_students.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
)
with check (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = class_students.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = class_students.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
);

-- ── class_score_columns ──────────────────────────────────────────────────────
drop policy if exists score_columns_teacher_own on public.class_score_columns;
create policy score_columns_teacher_own on public.class_score_columns
for all to authenticated
using (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = class_score_columns.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = class_score_columns.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
)
with check (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = class_score_columns.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = class_score_columns.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
);

-- ── exam_requests ────────────────────────────────────────────────────────────
drop policy if exists exam_requests_teacher_own on public.exam_requests;
create policy exam_requests_teacher_own on public.exam_requests
for all to authenticated
using (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = exam_requests.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = exam_requests.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
)
with check (
  exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = exam_requests.class_id and t.profile_id = auth.uid())
  or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = exam_requests.class_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
);

-- ── classes (update/delete) — ใช้ classes.course_id ตรงๆ ไม่ต้อง join classes ซ้ำ ──────
drop policy if exists classes_teacher_own_delete on public.classes;
create policy classes_teacher_own_delete on public.classes
for delete to authenticated
using (
  exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = classes.course_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = classes.course_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
);

drop policy if exists classes_teacher_own_update on public.classes;
create policy classes_teacher_own_update on public.classes
for update to authenticated
using (
  exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = classes.course_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = classes.course_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
)
with check (
  exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = classes.course_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = classes.course_id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
);

-- ── master_subjects (update) — id คือ subject_id ของแถวนี้เอง ─────────────────────
drop policy if exists subjects_teacher_own_update on public.master_subjects;
create policy subjects_teacher_own_update on public.master_subjects
for update to authenticated
using (
  exists (select 1 from teachers t where t.id = master_subjects.teacher_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = master_subjects.id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
)
with check (
  exists (select 1 from teachers t where t.id = master_subjects.teacher_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = master_subjects.id and t.profile_id = auth.uid())
  or get_user_role() = 'admin'
);

-- ── course_doc_page2 ─────────────────────────────────────────────────────────
drop policy if exists course_doc_page2_teacher_admin_read on public.course_doc_page2;
create policy course_doc_page2_teacher_admin_read on public.course_doc_page2
for select to authenticated
using (
  get_user_role() = 'admin'
  or exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = course_doc_page2.subject_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = course_doc_page2.subject_id and t.profile_id = auth.uid())
);

drop policy if exists course_doc_page2_teacher_admin_write on public.course_doc_page2;
create policy course_doc_page2_teacher_admin_write on public.course_doc_page2
for all to authenticated
using (
  get_user_role() = 'admin'
  or exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = course_doc_page2.subject_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = course_doc_page2.subject_id and t.profile_id = auth.uid())
)
with check (
  get_user_role() = 'admin'
  or exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = course_doc_page2.subject_id and t.profile_id = auth.uid())
  or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = course_doc_page2.subject_id and t.profile_id = auth.uid())
);

-- ── student_scores ───────────────────────────────────────────────────────────
drop policy if exists student_scores_teacher_own on public.student_scores;
create policy student_scores_teacher_own on public.student_scores
for all to authenticated
using (
  get_user_role() = 'admin'
  or assignment_id in (
    select csc.id from class_score_columns csc
    join classes c on c.id = csc.class_id
    where exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = c.course_id and t.profile_id = auth.uid())
       or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = c.course_id and t.profile_id = auth.uid())
  )
)
with check (
  get_user_role() = 'admin'
  or assignment_id in (
    select csc.id from class_score_columns csc
    join classes c on c.id = csc.class_id
    where exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = c.course_id and t.profile_id = auth.uid())
       or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = c.course_id and t.profile_id = auth.uid())
  )
);

-- ── quiz_student_finalizations ───────────────────────────────────────────────
drop policy if exists qsf_student_read_own on public.quiz_student_finalizations;
create policy qsf_student_read_own on public.quiz_student_finalizations
for select to authenticated
using (
  student_id in (select students.id from students where students.profile_id = auth.uid())
  or exists (
    select 1 from quizzes q
    join classes c on c.id = q.class_id
    where q.id = quiz_student_finalizations.quiz_id
      and (
        exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = c.course_id and t.profile_id = auth.uid())
        or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = c.course_id and t.profile_id = auth.uid())
      )
  )
  or get_user_role() = 'admin'
);

-- ── chat_rooms (เก็บ classroom_chat_unlocked ไว้เหมือนเดิม — ดูหมายเหตุด้านบน) ─────────
drop policy if exists chat_rooms_classroom_read on public.chat_rooms;
create policy chat_rooms_classroom_read on public.chat_rooms
for select to authenticated
using (
  room_type = 'classroom'
  and (
    get_user_role() = 'admin'
    or (
      (
        exists (select 1 from classes c join master_subjects ms on ms.id = c.course_id join teachers t on t.id = ms.teacher_id where c.id = chat_rooms.class_id and t.profile_id = auth.uid())
        or exists (select 1 from classes c join subject_co_teachers sct on sct.subject_id = c.course_id join teachers t on t.id = sct.teacher_id where c.id = chat_rooms.class_id and t.profile_id = auth.uid())
      )
      and classroom_chat_unlocked(class_id)
    )
    or (
      classroom_chat_unlocked(class_id)
      and exists (
        select 1 from class_students cs join students s on s.id = cs.student_id
        where cs.class_id = chat_rooms.class_id and cs.is_active = true and s.profile_id = auth.uid()
      )
    )
  )
);

-- ── chat_messages ────────────────────────────────────────────────────────────
drop policy if exists chat_messages_delete_update on public.chat_messages;
create policy chat_messages_delete_update on public.chat_messages
for update to authenticated
with check (
  author_profile_id = auth.uid()
  or get_user_role() = 'admin'
  or exists (select 1 from profiles where profiles.id = auth.uid() and profiles.is_also_admin is true)
  or exists (
    select 1 from chat_rooms r
    join classes c on c.id = r.class_id
    where r.id = chat_messages.room_id and r.room_type = 'classroom'
      and (
        exists (select 1 from master_subjects ms join teachers t on t.id = ms.teacher_id where ms.id = c.course_id and t.profile_id = auth.uid())
        or exists (select 1 from subject_co_teachers sct join teachers t on t.id = sct.teacher_id where sct.subject_id = c.course_id and t.profile_id = auth.uid())
      )
  )
);

-- ── ดัชนีที่ขาดหายไป (เจอระหว่างตรวจ EXPLAIN ANALYZE) ──────────────────────────────
-- teachers.profile_id ไม่เคยมี index เลย ทั้งที่เป็นคอลัมน์ที่ query บ่อยที่สุดในระบบสิทธิ์
-- ทั้งหมด (auth.uid() -> teacher record) — ไม่มี index นี้ ทุก EXISTS ข้างบนจะต้อง seq scan
-- ตาราง teachers ทุกครั้ง แก้ไปพร้อมกันเพราะเป็นส่วนสำคัญของ fix นี้
create index if not exists idx_teachers_profile_id on public.teachers (profile_id);
create index if not exists idx_subject_co_teachers_teacher_id on public.subject_co_teachers (teacher_id);

-- ── ยืนยันผลด้วย EXPLAIN ANALYZE จริง ──────────────────────────────────────────────
-- query เดิมที่เคย "canceling statement due to statement timeout" (ห้อง PR 1/1 Amanah,
-- class_id=474, มีแถวเช็คชื่อสะสม 3,362 แถว) หลังแก้ทั้งหมดข้างบน:
--   Execution Time: 57.954 ms (จาก timeout เกิน statement_timeout เดิม)
--   แผน query แสดง "Filter: (ANY (class_id = (hashed SubPlan 2).col1)) OR (ANY (... SubPlan 4))"
--   ยืนยันว่า planner แปลง EXISTS ให้เป็น Hashed SubPlan (evaluate ครั้งเดียว, hash lookup
--   ต่อแถว) ได้จริง ซึ่งเป็นสิ่งที่ทำไม่ได้เลยตอนยังเรียกผ่าน SECURITY DEFINER function
