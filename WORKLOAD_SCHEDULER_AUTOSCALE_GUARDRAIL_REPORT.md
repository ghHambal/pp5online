# Workload Scheduler + Autoscale Downscale Guardrail

สถานะ: Implemented locally and validated. ยังไม่ Deploy, Push, Apply Production หรือเปลี่ยน Compute จริง

## 1. Files Changed

ไฟล์ที่เปลี่ยนสำหรับ phase นี้:

- `js/workload-schedule.js` — pure schedule/state engine
- `js/workload-scheduler.js` — cached config, single-flight, watcher และ lifecycle API
- `js/prayer-monitor.js` — schedule-gated polling/Realtime และ cleanup
- `js/leave-monitor.js`, `js/leave-monitor-page.js` — gated public monitor refresh และ cleanup
- `js/azfutsal.js` — gated live overlay timers และ cleanup
- `azizgames.html`, `public/azizgames/assets/index-C3zfhzC4.js` — event workload gate ของ bundle ที่หน้าใช้งานจริงโหลดอยู่
- `js/teacher.js`, `js/student.js` — polling handle/lifecycle ป้องกัน timer ซ้ำ
- `js/views-autoscale.js` — Workload Control UI และ guardrail settings
- `supabase/functions/autoscale-tick/guardrail.js`
- `supabase/functions/autoscale-tick/index.ts`
- `supabase/functions/autoscale-tick/schedule.js`
- `scripts/test-workload-scheduler.mjs`
- `scripts/test-autoscale-guardrail.mjs`
- `scripts/test-autoscale-runtime.mjs`

ไฟล์อื่นที่แสดงใน `git status` เป็นงานเดิมของ workspace และไม่ได้รวมอยู่ใน scope นี้

## 2. Architecture Added

เพิ่ม `workloadSchedule` เป็น key ใหม่ใน `system_config` โดยไม่สร้าง table/migration ใหม่

Scheduler มี:

- mode `AUTO`, `ON`, `OFF`
- timezone `Asia/Bangkok`
- day-of-week, เวลาเริ่ม/สิ้นสุด, date range สำหรับ event feature
- buffer ก่อน/หลัง
- in-memory cache
- `localStorage` cache ระหว่างหน้า/iframe
- single-flight query
- TTL 5 นาที
- event/storage refresh เมื่อ configuration เปลี่ยน
- watcher แบบ timer ระดับนาที/ช่วงเปลี่ยน ไม่ใช่ polling ทุก 1–5 วินาที

API หลัก:

- `getWorkloadState(featureKey)`
- `isWorkloadActive(featureKey)`
- `startFeatureWorkload(featureKey, handlers)`
- `stopFeatureWorkload(featureKey, handlers)`
- `watchWorkload(featureKey, handlers)`

เมื่ออ่าน config ไม่ได้ background workload จะ fail closed เป็น inactive

## 3. Prayer Monitor Before/After

ก่อน:

- โหลด roster
- polling `prayer_records` ทุก 1.5 วินาทีตลอดเวลาที่เปิดหน้า
- Realtime UPDATE/DELETE เรียก fetch ซ้ำ
- ไม่มีการเก็บ interval/channel เพื่อหยุดแบบเป็นระบบ

หลัง:

- ค่าเริ่มต้น AUTO: จันทร์–ศุกร์ 12:10–13:15
- Admin ปรับเวลา/วัน/mode ได้
- นอกช่วง: clear polling timer, remove Realtime channel, clear pending refresh timeout
- ในช่วง: behavior เดิมยังอยู่ เพื่อไม่เปลี่ยน coverage ของการ monitor รอบนี้
- มี in-flight guard ป้องกัน polling ซ้อนกัน
- roster query ตอนเปิดหน้ายังเป็น initial read; สิ่งที่หยุดคือ recurring monitor workload ไม่ใช่ prayer scan/write logic

## 4. Out-of-Class Monitor Before/After

ก่อน:

- public monitor refresh ทุก 15 วินาที
- clock เป็น client timer ทุก 1 วินาที

หลัง:

- ค่าเริ่มต้น AUTO: จันทร์–ศุกร์ 08:30–16:00
- นอกช่วงไม่โหลด dashboard data และไม่มี recurring 15-second refresh
- active state เท่านั้นจึงเริ่ม refresh และ clock timer
- render ซ้ำ/refresh ซ้ำมี in-flight guard และ cleanup
- การสร้าง/ปิดใบอนุญาตและ historical records ไม่ถูกแตะ

ตัว widget ครูไม่มี network polling โดย default อยู่แล้ว มีเพียง live countdown timer ที่ cleanup ตาม container

## 5. AZIZGAMES Before/After

ก่อน:

- `/matches` polling ทุก 5 วินาที
- Realtime channel `aziz-realtime-sync`
- Realtime event เรียก refetch

หลัง:

- ค่าเริ่มต้น AUTO แต่ต้องมี `dateFrom` และ `dateTo` จึง active; ถ้ายังไม่กำหนด event จะ inactive
- `azizgames.html` อ่าน workload state ก่อนโหลด live bundle
- bundle ที่หน้าใช้งานจริงโหลด (`index-C3zfhzC4.js`) จะไม่สร้าง `/matches` interval และไม่ subscribe channel เมื่อ inactive
- initial/on-demand page read ยังทำงานได้
- ถ้าอ่าน scheduler ไม่ได้ จะหยุด live workload เพื่อ fail safe
- การเปลี่ยน config จาก tab อื่นทำให้หน้า reload ผ่าน storage event

ข้อจำกัด: source React ต้นทางของ bundle ไม่อยู่ใน repository นี้ จึงแก้ active generated bundle แบบ scoped และต้องทบทวน gate นี้เมื่อมีการเปลี่ยน bundle/hash ในอนาคต

## 6. AZFUTSAL Before/After

ก่อน:

- live overlay หลายแบบ refresh ทุก 3, 4 หรือ 5 วินาที
- timer ของ overlay ต้องปิดเองเมื่อกดปิด

หลัง:

- live overlay timers อยู่ใต้ `azfutsal` workload state
- นอก active event window จะไม่เริ่ม recurring live refresh
- ถ้า schedule เปลี่ยนเป็น inactive ขณะเปิดจอ จะ clear timer และปิด live overlays
- countdown timer และ live-draw timers ที่เกี่ยวข้องถูก cleanup ด้วย
- หน้าอ่านข้อมูลทั่วไปยัง initial/on-demand fetch ได้

offline queue sync ทุก 6 วินาทียังคงอยู่เพื่อไม่ทำลายการส่ง business write ที่ค้างจาก offline mode; จึงไม่ถือเป็น scoreboard/live-display polling และควรประเมินแยกใน phase ถัดไป

## 7. Badge Lifecycle Fixes

Teacher และ Student polling ทุก 30 วินาทียังทำงานเฉพาะ tab visible เช่นเดิม แต่:

- เก็บ interval handle
- ป้องกัน `_startPolling()` / `_startStudentPolling()` ซ้ำ
- เก็บและถอด `visibilitychange` listener
- expose cleanup function สำหรับ page/session teardown

จึงไม่เพิ่ม timer ตามการ init ซ้ำหรือการเปลี่ยน route ภายในหน้าเดิม

## 8. Workload Scheduler Design

Feature ที่รองรับ:

- `prayer_monitor`
- `leave_monitor`
- `azizgames`
- `azfutsal`

โหมด:

- `AUTO`: ตรวจ date/day/time ตาม Asia/Bangkok
- `ON`: เปิด workload โดยไม่สน schedule
- `OFF`: ปิด workload โดยไม่สน schedule

Event feature ต้องกำหนด date range จึงจะ active ใน AUTO ส่วน Prayer/Leave ใช้ date range ได้แต่ไม่บังคับ

## 9. AUTO / ON / OFF Behavior

Admin UI แสดง:

- mode
- date range เมื่อจำเป็น
- days
- start/end time
- buffer ก่อน/หลัง
- effective state
- next transition เมื่อคำนวณได้

หน้า Admin ไม่มี polling ถี่; โหลดครั้งเดียว ใช้ cache และมีปุ่ม refresh ด้วยมือ

## 10. Autoscale Downscale Guardrail

Schedule ยังคงเป็นตัวกำหนด candidate tier แต่ก่อน `Medium → Micro` ต้องผ่าน:

1. current tier เป็น Medium
2. ไม่มี pending resize
3. health state ต้องอ่านได้และ healthy
4. ไม่มี critical service state
5. minimum hold หมดแล้ว
6. recovery lock หมดแล้ว
7. healthy streak ถึง threshold
8. ไม่มี recent failed health ที่ยังอยู่ในช่วงป้องกัน

ถ้าไม่ผ่าน ระบบบันทึก `downgrade_deferred` และข้ามรอบ โดยไม่ยิง resize ซ้ำแบบ loop

## 11. Minimum Hold Implementation

ค่าเริ่มต้น:

- `minimumMediumHoldMinutes = 60`

เมื่อยืนยันการ scale-up เป็น Medium สำเร็จ จะเก็บ:

- `holdUntil`
- `lastScaleUpConfirmedAt`
- `recoveryLockUntil`

ถ้าตรวจพบว่า tier เปลี่ยนจาก Micro เป็น Medium โดยไม่มี pending request ก็ถือเป็น manual scale-up และสร้าง hold protection เช่นเดียวกัน

## 12. Healthy Streak Implementation

ค่าเริ่มต้น:

- `healthyStreakRequired = 3`

ทุก autoscale tick จะอ่าน health ของ `rest` และ `db`:

- healthy ต่อเนื่อง: เพิ่ม streak
- unhealthy: reset เป็น 0 และสร้าง recovery lock
- อ่านไม่ได้/timeout: สถานะเป็น `unknown`, reset streak และ fail safe สำหรับ downscale

ค่า guardrail แก้ได้จากหน้า Autoscale Settings และเก็บใน `autoscaleSchedule.guardrail` ซึ่ง backward compatible กับ config เดิม

## 13. Manual Scale-up Protection

ถ้า state เดิมเป็น Micro แต่ tick ใหม่ตรวจพบ Medium โดยไม่มี pending request ระบบถือว่าเป็น manual scale-up และสร้าง minimum hold/recovery protection ให้เอง

Schedule จึงไม่สามารถลดกลับ Micro ทันทีหลัง Admin scale ขึ้นเอง

## 14. Tests

เพิ่ม/ปรับ tests ครอบคลุม:

- Prayer AUTO นอก/ในเวลา
- mode ON/OFF
- timezone และ transition
- event date range
- cross-midnight schedule
- autoscale hold
- healthy streak ไม่ครบ
- health UNKNOWN
- critical service state
- recovery lock
- Medium recovery แล้วไม่ downgrade เมื่อ streak ไม่ครบ
- downgrade ได้เมื่อ hold/streak/health ผ่าน
- existing runtime: duplicate trigger, confirmation, unknown tier, pending timeout, DB error, 429

คำสั่งที่ผ่าน:

```text
node scripts/test-workload-scheduler.mjs
node scripts/test-autoscale-guardrail.mjs
node scripts/test-autoscale-runtime.mjs
node --check ไฟล์ JavaScript ที่เปลี่ยน
npm run build
git diff --check
```

Build ผ่าน โดยมี Vite warning เรื่อง chunk ใหญ่เดิม/ที่มีอยู่ แต่ไม่ใช่ build failure

## 15. Static Request Reduction

เป็น estimate จาก interval ใน source ไม่ใช่ Production measured data:

| Workload | ก่อนนอกช่วง | หลังนอกช่วง | Active window |
|---|---:|---:|---:|
| Prayer Monitor | ประมาณ 40 reads/นาที/จอ | 0 recurring monitor reads | เดิม 1.5 วินาที |
| Out-of-Class public monitor | ประมาณ 4 refresh/นาที/จอ | 0 dashboard refresh | เดิม 15 วินาที |
| AZIZGAMES `/matches` | ประมาณ 12 reads/นาที/viewer + Realtime | 0 recurring matches polling/channel | เดิม 5 วินาที |
| AZFUTSAL live overlays | ประมาณ 12–20 refresh/นาที/overlay | 0 live overlay refresh | เดิม 3–5 วินาที |
| Teacher/Student badges | timer เดิม 30 วินาที | ไม่ได้ลดต่อ tab เดียว | ป้องกัน timer ซ้ำ |

Scheduler config refresh เป็น control-plane read ที่ cache/TTL 5 นาที ไม่ใช่ feature workload และไม่ใช่ตัวเลข Production reduction

## 16. Risks / Limitations

- ต้อง Deploy frontend และ Edge Function จึงจะมีผลจริง; ตอนนี้ยัง local only
- `workloadSchedule` ยังไม่มี Production row จนกว่าจะบันทึกจาก Admin UI/ดำเนินการ release
- AZIZGAMES gate ผูกกับ generated bundle hash `index-C3zfhzC4.js`; bundle ใหม่ต้องตรวจ gate อีกครั้ง
- ขณะนี้ยังไม่แก้ Student assignment fan-out ตาม scope ที่กำหนด
- AZFUTSAL offline queue sync ยังทำงานเมื่อมี write ค้าง เพื่อรักษา business data
- การเปลี่ยน config จาก server จะถูกพบภายใน cache TTL สูงสุดประมาณ 5 นาทีในแต่ละ page/iframe
- การตรวจ health ทุก autoscale tick เพิ่ม Management API health read แต่ไม่เพิ่ม query `system_config` ทุกวินาที
- ยังไม่ได้ทดสอบ browser จริง/Realtime live subscription ใน Production หลัง deploy

## 17. Production Deployment Checklist

ก่อน release:

1. Review diff เฉพาะไฟล์ phase นี้ แยกจาก dirty worktree เดิม
2. Deploy frontend ให้ `workload-scheduler.js`, monitor modules และ AZIZGAMES gate อยู่ครบ
3. Deploy `autoscale-tick` Edge Function รุ่นใหม่
4. ตรวจว่า secret เดิมยังอยู่ครบ; ไม่เปลี่ยน connection string
5. ตรวจ `system_config` ว่ามี `autoscaleSchedule.guardrail` ตามค่าที่ต้องการ
6. เปิด Workload Control จาก Admin UI และตั้ง event date ของ AZIZGAMES/AZFUTSAL ก่อนใช้ live
7. ทดสอบ Prayer/Leave/AZ screens ใน browser จริง
8. ตรวจ Edge Function logs ว่ามี `downgrade_deferred` และ reason ที่คาดหวัง
9. ตรวจว่า Medium recovery ไม่ถูกลดลงก่อน hold/streak ผ่าน
10. ทำ Production verification แบบ read-only ก่อนประกาศใช้งาน

ยังไม่ได้ทำรายการใดใน checklist นี้กับ Production

## 18. Next Phase Recommendation

แยกเป็น phase ถัดไป:

- ลด Student assignment fan-out โดยรวม `assignment_submissions` ต่อ student เพียงครั้งเดียว
- วัด API route/request count ก่อน–หลังด้วยช่วงเวลาเดียวกัน
- ตรวจ Realtime channel/event volume จาก live observability
- พิจารณาปรับ active polling เป็น Realtime-primary เฉพาะ feature ที่พิสูจน์ event coverage ครบแล้ว
- ทำ browser lifecycle test สำหรับ A → B → A → B หลายรอบ
- พิจารณา queue sync policy แยกจาก live display policy ของ AZFUTSAL

## Final Answers

A. นอกเวลาสแกน Prayer Monitor มี recurring request เหลือหรือไม่?

ไม่มี recurring `prayer_records` polling หรือ Monitor Realtime เหลือ; อาจมี initial roster/config read ตอนเปิดหน้า

B. นอกเวลาเรียน Out-of-Class Monitor มี recurring request เหลือหรือไม่?

ไม่มี recurring dashboard refresh เหลือ; config watcher เป็น control-plane cache refresh ไม่ใช่ live monitor read

C. นอกช่วงกิจกรรม AZIZGAMES/AZFUTSAL มี live polling เหลือหรือไม่?

ไม่มี recurring AZIZGAMES `/matches` polling/Realtime และไม่มี AZFUTSAL live overlay refresh; AZFUTSAL offline queue sync ที่มี pending business writes ยังคงทำงานโดยตั้งใจ

D. Navigation ซ้ำยังสร้าง duplicate timer/subscription หรือไม่?

ส่วนที่แก้ใน phase นี้มี idempotent start/stop และ handle cleanup แล้ว; badge polling ไม่สร้าง interval ซ้ำ

E. Medium เพิ่ง Recovery สามารถโดน downgrade ทันทีได้อีกหรือไม่?

ไม่ได้ หาก hold, recovery lock หรือ healthy streak ยังไม่ผ่าน

F. `consecutiveHealthyChecks = 0` สามารถ downscale ได้หรือไม่?

ไม่ได้ เพราะต้องถึง threshold อย่างน้อย 3 รอบตามค่าเริ่มต้น

G. ถ้า health state ไม่ทราบ ระบบเลือก Medium หรือ Micro?

ถ้ากำลังพิจารณา downscale จาก Medium จะ KEEP MEDIUM แบบ fail safe; ถ้าเครื่องอยู่ Micro อยู่แล้ว ระบบจะไม่สั่ง scale-up อัตโนมัติเพียงเพราะอ่าน health ไม่ได้

H. มี business workflow ใดถูกเปลี่ยนหรือไม่?

ไม่เปลี่ยน score/GPA/Gradebook/attendance/prayer scan/leave write/RLS/permission. ปิดเฉพาะ recurring live monitor/read refresh และ live display timers ตาม schedule

I. ต้อง Apply migration อะไรก่อน Production หรือไม่?

ไม่ต้องมี migration สำหรับ implementation นี้ เพราะใช้ `system_config` เดิม แต่ต้อง Deploy frontend และ Edge Function ก่อน และต้องบันทึก configuration ที่ต้องการจาก Admin UI ตาม release approval
