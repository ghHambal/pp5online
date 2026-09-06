const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-C8BgK7Kc.js","assets/ui-Dh03k4iX.js","assets/quiz-api-DaBneRGn.js","assets/supabase-BV-W2lsh.js","assets/import-D0GLDW1_.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-quiz-monitor-BIcUtV1X.js","assets/api-1xsyVspL.js","assets/teacher-views-quiz-analytics-CZtaCsWK.js"])))=>i.map(i=>d[i]);
import{_ as A,f as I,a as v,l as D,b as Q}from"./ui-Dh03k4iX.js";import{getMyClasses as F,getSystemConfig as P,getScoreColumns as j}from"./api-1xsyVspL.js";import{t as H,g as N,v as R,s as z,n as V,w as W,x as U,y as G,p as K}from"./quiz-api-DaBneRGn.js";import{setTitle as X,setContent as C,_htmlEsc as f,INPUT_CLS as $,SELECT_CLS as L}from"./teacher-views-utils-B2Iz3UWp.js";import{l as J,r as Y}from"./katex-loader-DUJObfzT.js";import"./supabase-BV-W2lsh.js";const B={draft:{label:"ร่าง",cls:"bg-gray-100 text-gray-600"},announced:{label:"รอครูเริ่ม",cls:"bg-amber-100 text-amber-700"},started:{label:"กำลังสอบ",cls:"bg-emerald-100 text-emerald-700"},closed:{label:"ปิดสอบแล้ว",cls:"bg-gray-200 text-gray-500"}},O={first:"ครั้งแรก",last:"ครั้งล่าสุด",highest:"คะแนนสูงสุด"},Z={total_only:"เห็นคะแนนรวมเท่านั้น",per_question:"เห็นถูก/ผิดรายข้อ",full_review:"เห็นเฉลยเต็ม"},T={highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/กิจกรรมอื่น) จะเก็บค่าที่สูงกว่าไว้ (ค่าเริ่มต้น)"},overwrite:{label:"ทับคะแนนเก่า",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนที่ได้จากควิซนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายควิซ"}};async function q(i,o,b=null){if(!o)return;X(`แบบทดสอบจากคลัง: ${o.name}`),C('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const[n,e,r,a,h]=await Promise.all([H(o.id),F(i.id),N(o.id),P().catch(()=>({})),R(i.id).catch(()=>0)]),m=(window._pp5DonorTierIndex??0)>=2,g=parseInt(a.quizFreeStartLimit,10),u=Number.isFinite(g)?g:2,p=m||h<u,y=Object.fromEntries(e.map(t=>{var s;return[t.id,`${((s=t.master_subjects)==null?void 0:s.subject_name)??""} (${t.class_name??"—"})`]})),_=m?"":`
    <div class="rounded-2xl p-3.5 flex items-center gap-3 ${p?"bg-indigo-50 border border-indigo-100":"bg-amber-50 border border-amber-200"}">
      <span class="text-xl flex-shrink-0">${p?"🎁":"⭐"}</span>
      <p class="text-xs ${p?"text-indigo-700":"text-amber-800"} leading-relaxed">
        ${p?`โควตาทดลอง "เริ่มสอบจริง" ฟรี: ใช้ไปแล้ว ${h}/${u} ครั้ง — สร้างคลัง/ตั้งค่า/ทดลองทำเองได้ไม่จำกัดเสมอ`:`ใช้โควตาทดลอง "เริ่มสอบจริง" ฟรีครบ ${u} ครั้งแล้ว — โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบให้นักเรียนทำได้ไม่จำกัด (ยังทดลองทำเองและตั้งค่าต่อได้ตามปกติ)`}
      </p>
    </div>`;C(`
    <div class="space-y-4">
      <button id="btn-back-questions" class="text-sm text-gray-500 hover:text-gray-700">← กลับไปหน้าคำถามในคลัง</button>

      ${_}

      <div class="flex items-center justify-between">
        <h3 class="font-bold text-gray-700 text-sm">แบบทดสอบที่สร้างจากคลังนี้ (${n.length} รายการ)</h3>
        <button id="btn-create-quiz" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm">＋ สร้างแบบทดสอบใหม่</button>
      </div>

      <div class="space-y-3" id="quiz-list">
        ${n.length===0?`
          <div class="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <p class="text-sm text-gray-400">ยังไม่มีแบบทดสอบจากคลังนี้ — กำหนดค่าแล้วเลือกห้องเรียนที่จะให้สอบได้เลย</p>
          </div>
        `:n.map(t=>{const s=B[t.status]??B.draft;return`
          <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-0.5 rounded-lg text-xs font-bold ${s.cls}">${s.label}</span>
                  <h4 class="font-bold text-gray-800 text-sm truncate">${f(t.title)}</h4>
                </div>
                <p class="text-xs text-gray-400">${f(y[t.class_id]??"ห้องที่ถูกลบ")} · ${t.num_questions} ข้อ · ${t.time_limit_minutes??"—"} นาที · ทำได้ ${t.max_attempts} ครั้ง (นับ${O[t.attempt_scoring_mode]})</p>
              </div>
              <div class="flex flex-col gap-1.5 flex-shrink-0">
                ${t.status==="announced"?`<button class="btn-start-quiz px-3 py-1.5 rounded-lg ${p?"bg-emerald-600 hover:bg-emerald-700":"bg-gray-300"} text-white text-xs font-bold" data-id="${t.id}">▶️ เริ่มสอบ</button>`:""}
                ${t.status==="started"?`<button class="btn-close-quiz px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold" data-id="${t.id}">⏹️ ปิดสอบ</button>`:""}
                ${t.status==="started"?`<button class="btn-monitor-quiz px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold" data-id="${t.id}">🔴 ดูสด</button>`:""}
                ${t.status==="started"||t.status==="closed"?`<button class="btn-analytics-quiz px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold" data-id="${t.id}">📊 สถิติ</button>`:""}
                ${t.status==="closed"&&t.score_column_id?`<button class="btn-apply-quiz-score px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold" data-id="${t.id}">📥 ส่งคะแนนย้อนหลัง</button>`:""}
                <button class="btn-preview-quiz px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-600 hover:bg-indigo-50 text-xs font-semibold" data-id="${t.id}">🧪 ทดลองทำข้อสอบ</button>
                <button class="btn-edit-quiz px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold" data-id="${t.id}">✏️ แก้ไข</button>
                <button class="btn-delete-quiz px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold" data-id="${t.id}">🗑️ ลบ</button>
              </div>
            </div>
          </div>
        `}).join("")}
      </div>
    </div>
  `),document.getElementById("btn-back-questions").addEventListener("click",async()=>{const{_renderBankQuestions:t}=await A(async()=>{const{_renderBankQuestions:s}=await import("./teacher-views-quiz-banks-C8BgK7Kc.js");return{_renderBankQuestions:s}},__vite__mapDeps([0,1,2,3,4,5,6]));t(i,o)}),document.getElementById("btn-create-quiz").addEventListener("click",()=>M(i,o,e,r.length,null,b)),document.querySelectorAll(".btn-edit-quiz").forEach(t=>t.addEventListener("click",()=>M(i,o,e,r.length,n.find(s=>s.id===t.dataset.id)))),document.querySelectorAll(".btn-preview-quiz").forEach(t=>t.addEventListener("click",()=>te(n.find(s=>s.id===t.dataset.id),r))),document.querySelectorAll(".btn-start-quiz").forEach(t=>t.addEventListener("click",async()=>{if(!p){ee(u);return}await I({title:"เริ่มสอบเลยหรือไม่?",message:"นักเรียนในห้องจะเริ่มเข้าทำแบบทดสอบได้ทันที",confirmText:"เริ่มสอบ"})&&(await z(t.dataset.id),v("เริ่มสอบแล้ว","success"),q(i,o))})),document.querySelectorAll(".btn-close-quiz").forEach(t=>t.addEventListener("click",async()=>{var k;const s=n.find(w=>w.id===t.dataset.id);if(!s)return;const d=(s.score_column_id?await j(s.class_id).catch(()=>[]):[]).find(w=>String(w.id)===String(s.score_column_id)),x=await D({quizTitle:s.title,hasScoreColumn:!!s.score_column_id,targetColumn:(d==null?void 0:d.assignment_name)??"",writeModeLabel:((k=T[s.score_write_mode])==null?void 0:k.label)??""});x&&(await V(t.dataset.id,{writeScores:x==="write_scores"}),v(x==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),q(i,o))})),document.querySelectorAll(".btn-apply-quiz-score").forEach(t=>t.addEventListener("click",async()=>{var S;const s=n.find(E=>E.id===t.dataset.id);if(!(s!=null&&s.score_column_id))return;const d=(await j(s.class_id).catch(()=>[])).find(E=>String(E.id)===String(s.score_column_id)),x=((S=T[s.score_write_mode])==null?void 0:S.label)??"ตามการตั้งค่า";if(!await I({title:"ส่งคะแนนข้อสอบย้อนหลัง?",message:`ระบบจะนำคะแนน “${s.title}” ไปยังคอลัมน์ “${(d==null?void 0:d.assignment_name)??"คอลัมน์ที่ผูกไว้"}”`,detail:`วิธีเขียน: ${x} · โหมดบวกเพิ่มจะเพิ่มเฉพาะส่วนต่าง จึงกดซ้ำแล้วไม่บวกคะแนนเดิมซ้ำ`,confirmText:"ส่งคะแนน"}))return;const w=await W(s.id);v(`ส่งคะแนนแล้ว ${w} คน`,"success")})),document.querySelectorAll(".btn-delete-quiz").forEach(t=>t.addEventListener("click",async()=>{await I({title:"ลบแบบทดสอบนี้?",message:"ประวัติการทำข้อสอบของนักเรียนในแบบทดสอบนี้จะถูกลบไปด้วย"})&&(await U(t.dataset.id),v("ลบแบบทดสอบแล้ว","success"),q(i,o))})),document.querySelectorAll(".btn-monitor-quiz").forEach(t=>t.addEventListener("click",async()=>{const{openQuizMonitor:s}=await A(async()=>{const{openQuizMonitor:l}=await import("./teacher-views-quiz-monitor-BIcUtV1X.js");return{openQuizMonitor:l}},__vite__mapDeps([7,8,3,2,1,5]));s(n.find(l=>l.id===t.dataset.id))})),document.querySelectorAll(".btn-analytics-quiz").forEach(t=>t.addEventListener("click",async()=>{const{openQuizAnalytics:s}=await A(async()=>{const{openQuizAnalytics:l}=await import("./teacher-views-quiz-analytics-CZtaCsWK.js");return{openQuizAnalytics:l}},__vite__mapDeps([9,8,3,2,5,1]));s(n.find(l=>l.id===t.dataset.id))}))}async function M(i,o,b,n,e,r=null){const a=document.createElement("div");a.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",a.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-1">${e?"แก้ไขแบบทดสอบ":"สร้างแบบทดสอบใหม่"}</h3>
      <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${n} ข้อ</p>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อแบบทดสอบ</label>
          <input id="qz-title" class="${$}" value="${f((e==null?void 0:e.title)??"")}" placeholder="เช่น สอบย่อยบทที่ 1" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ห้องเรียนที่จะให้สอบ</label>
          <select id="qz-class" class="${L}">
            ${b.map(l=>{var d;return`<option value="${l.id}" ${(e?e.class_id===l.id:l.id===r)?"selected":""}>${f(((d=l.master_subjects)==null?void 0:d.subject_name)??"")} (${f(l.class_name??"—")})</option>`}).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนข้อที่สุ่ม</label>
            <input id="qz-num" type="number" min="1" class="${$}" value="${(e==null?void 0:e.num_questions)??Math.min(10,n||10)}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">เวลาสอบ (นาที)</label>
            <input id="qz-time" type="number" min="1" class="${$}" value="${(e==null?void 0:e.time_limit_minutes)??30}" />
          </div>
        </div>
        <div class="flex gap-4">
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <input type="checkbox" id="qz-shuffle-q" ${e?e.shuffle_questions?"checked":"":"checked"} /> สลับลำดับคำถาม
          </label>
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-600">
            <input type="checkbox" id="qz-shuffle-c" ${e?e.shuffle_choices?"checked":"":"checked"} /> สลับลำดับตัวเลือก
          </label>
        </div>
        <div class="bg-indigo-50/60 border border-indigo-100 rounded-xl p-3 space-y-2">
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <input type="checkbox" id="qz-lock-answer" ${e!=null&&e.lock_on_answer?"checked":""} /> ล็อกคำตอบทันทีที่เลือก (ห้ามย้อนกลับแก้ไขข้อที่ตอบแล้ว)
          </label>
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <input type="checkbox" id="qz-instant-bonus" ${e!=null&&e.instant_feedback_bonus?"checked":""} /> เปิดเอฟเฟกต์ถูก/ผิดทันที + ระบบคอมโบ/โบนัส
          </label>
          <p class="text-[11px] text-gray-400 leading-relaxed pl-6">ตอบถูกติดกัน 3 ข้อ ปลดล็อกโบนัส (50/50, แก้ข้อที่เคยผิด, ต่อเวลา) — ครบ 6 ข้อ ได้โบนัสเปิดเฉลยเพิ่ม<br>เปิดตัวเลือกนี้จะล็อกคำตอบทันทีให้อัตโนมัติด้วย (ไม่งั้นเห็นเฉลยแล้วย้อนไปแก้ได้ ระบบจะไม่มีความหมาย)</p>
        </div>
        <div class="bg-red-50/60 border border-red-100 rounded-xl p-3 space-y-2">
          <label class="flex items-center gap-2 text-xs font-semibold text-gray-700">
            <input type="checkbox" id="qz-deterrent" ${e!=null&&e.deterrent_notice_enabled?"checked":""} /> แสดงป้ายเตือน + ข้อความนาซีฮัตก่อนเริ่มสอบ
          </label>
          <p class="text-[11px] text-gray-400 leading-relaxed pl-6">แสดงข้อความห้ามมองจอที่สอง/หนังสือ พร้อมขอบแดงระหว่างทำข้อสอบ (ข้อความจริงทุกคำ อิงจากระบบตรวจจับการออกนอกหน้าสอบที่มีอยู่แล้ว ไม่ได้อ้างว่ามีกล้อง/ตรวจจับสายตา)</p>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนครั้งที่ทำได้</label>
            <input id="qz-attempts" type="number" min="1" class="${$}" value="${(e==null?void 0:e.max_attempts)??1}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">นับคะแนนแบบ</label>
            <select id="qz-scoring" class="${L}">
              ${Object.entries(O).map(([l,d])=>`<option value="${l}" ${((e==null?void 0:e.attempt_scoring_mode)??"last")===l?"selected":""}>${d}</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">เปิดสอบตั้งแต่ (ไม่บังคับ)</label>
            <input id="qz-open" type="datetime-local" class="${$}" value="${e!=null&&e.open_at?e.open_at.slice(0,16):""}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ปิดสอบเมื่อ (ไม่บังคับ)</label>
            <input id="qz-close" type="datetime-local" class="${$}" value="${e!=null&&e.close_at?e.close_at.slice(0,16):""}" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">นักเรียนดูผลได้แค่ไหนหลังส่งข้อสอบ</label>
          <select id="qz-review" class="${L}">
            ${Object.entries(Z).map(([l,d])=>`<option value="${l}" ${((e==null?void 0:e.review_policy)??"total_only")===l?"selected":""}>${d}</option>`).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ผูกกับคอลัมน์คะแนน (ไม่บังคับ)</label>
            <select id="qz-score-col" class="${L}">
              <option value="">— ไม่ผูกคะแนน —</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">คะแนนเต็ม</label>
            <input id="qz-score-max" type="number" min="0" step="0.5" class="${$}" value="${(e==null?void 0:e.score_max)??100}" />
          </div>
        </div>
        <div id="qz-write-mode-wrap" class="${e!=null&&e.score_column_id?"":"hidden"}">
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร</label>
          <select id="qz-write-mode" class="${L}">
            ${Object.entries(T).map(([l,d])=>`<option value="${l}" ${((e==null?void 0:e.score_write_mode)??"highest")===l?"selected":""}>${d.label}</option>`).join("")}
          </select>
          <p id="qz-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="qz-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="qz-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(a);const h=a.querySelector("#qz-class"),c=a.querySelector("#qz-score-col"),m=async()=>{const l=h.value;if(!l)return;const d=await j(l).catch(()=>[]);c.innerHTML='<option value="">— ไม่ผูกคะแนน —</option>'+d.map(x=>`<option value="${x.id}" ${(e==null?void 0:e.score_column_id)===x.id?"selected":""}>${f(x.assignment_name)}</option>`).join("")};h.addEventListener("change",m),h.value&&await m();const g=a.querySelector("#qz-write-mode-wrap"),u=a.querySelector("#qz-write-mode"),p=a.querySelector("#qz-write-mode-hint"),y=()=>{var l;g.classList.toggle("hidden",!c.value),p.textContent=((l=T[u.value])==null?void 0:l.hint)??""};c.addEventListener("change",y),u.addEventListener("change",y),y();const _=a.querySelector("#qz-lock-answer"),t=a.querySelector("#qz-instant-bonus"),s=()=>{t.checked?(_.checked=!0,_.disabled=!0):_.disabled=!1};t.addEventListener("change",s),s(),a.querySelector("#qz-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#qz-save").addEventListener("click",async l=>{const d=a.querySelector("#qz-title").value.trim(),x=parseInt(a.querySelector("#qz-num").value,10);if(!d){v("กรุณาระบุชื่อแบบทดสอบ","warning");return}if(!x||x<1){v("กรุณาระบุจำนวนข้อที่ถูกต้อง","warning");return}if(x>n){v(`คลังมีแค่ ${n} ข้อ แต่ตั้งค่าให้สุ่ม ${x} ข้อ — เพิ่มคำถามในคลังก่อนบันทึก`,"warning");return}const k=a.querySelector("#qz-open").value,w=a.querySelector("#qz-close").value,S={bank_id:o.id,class_id:h.value,title:d,num_questions:x,shuffle_questions:a.querySelector("#qz-shuffle-q").checked,shuffle_choices:a.querySelector("#qz-shuffle-c").checked,lock_on_answer:a.querySelector("#qz-instant-bonus").checked||a.querySelector("#qz-lock-answer").checked,instant_feedback_bonus:a.querySelector("#qz-instant-bonus").checked,deterrent_notice_enabled:a.querySelector("#qz-deterrent").checked,max_attempts:parseInt(a.querySelector("#qz-attempts").value,10)||1,attempt_scoring_mode:a.querySelector("#qz-scoring").value,time_limit_minutes:parseInt(a.querySelector("#qz-time").value,10)||null,open_at:k?new Date(k).toISOString():null,close_at:w?new Date(w).toISOString():null,review_policy:a.querySelector("#qz-review").value,score_column_id:c.value||null,score_max:parseFloat(a.querySelector("#qz-score-max").value)||null,score_write_mode:u.value};Q(l.target,!0);try{e?await G(e.id,S):await K({...S,status:"announced"}),v("บันทึกแล้ว","success"),a.remove(),q(i,o)}catch(E){v("บันทึกไม่สำเร็จ: "+(E.message??""),"error"),Q(l.target,!1,"บันทึก")}})}function ee(i){const o=document.createElement("div");o.className="fixed inset-0 z-[95] bg-black/40 flex items-center justify-center p-4",o.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
      <div class="text-5xl mb-3">⭐</div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">ใช้โควตาทดลองฟรีครบแล้ว</h3>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">คุณเริ่มสอบจริงให้นักเรียนทำไปแล้ว ${i} ครั้ง (ครบโควตาทดลองฟรี) โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบได้ไม่จำกัด — สร้างคลัง/ตั้งค่า/ทดลองทำเองยังทำได้ตามปกติ</p>
      <div class="space-y-2">
        <button id="paywall-donate" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดการสนับสนุน</button>
        <button id="paywall-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ปิด</button>
      </div>
    </div>
  `,document.body.appendChild(o),o.querySelector("#paywall-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#paywall-donate").addEventListener("click",()=>{var b;o.remove(),(b=document.getElementById("btn-donate-float"))==null||b.click()})}function te(i,o){if(!i)return;const b=o.slice(0,i.num_questions);if(!b.length){v("คลังนี้ยังไม่มีคำถาม","warning");return}let n=0;const e={},r=document.createElement("div");r.className="fixed inset-0 z-[95] bg-white flex flex-col",document.body.appendChild(r);const a=()=>{var g,u,p;const c=b[n],m=e[c.id];r.innerHTML=`
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm truncate">🧪 ทดลองทำ: ${f(i.title)}</h2>
          <p class="text-xs text-amber-600">โหมดทดลอง — ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียน</p>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-2xl mx-auto">
          <p class="text-xs text-gray-400 mb-2">ข้อ ${n+1} จาก ${b.length}</p>
          <p class="font-semibold text-gray-800 mb-4">${f(c.question_text)}</p>
          <div class="space-y-2" id="qp-choices">
            ${c.choices.map((y,_)=>{const t=m===_,s=_===c.correct_choice_index;let l="border-gray-200 hover:bg-gray-50 cursor-pointer";return m!=null&&(s?l="border-emerald-400 bg-emerald-50":t?l="border-red-400 bg-red-50":l="border-gray-100 opacity-60"),`
              <label class="flex items-center gap-3 p-3 rounded-xl border ${l}">
                <input type="radio" name="qp-choice" class="qp-choice-input flex-shrink-0" data-i="${_}" ${t?"checked":""} ${m!=null?"disabled":""} />
                <span class="text-sm">${f(y)}</span>
              </label>`}).join("")}
          </div>
          ${m!=null&&c.explanation?`<p class="text-xs text-gray-500 mt-3 italic">💡 ${f(c.explanation)}</p>`:""}
          <div class="flex justify-between gap-2 mt-6">
            <button id="qp-prev" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm" ${n===0?"disabled":""}>← ก่อนหน้า</button>
            ${n===b.length-1?'<button id="qp-finish" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm">ดูผลทดลอง</button>':'<button id="qp-next" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ถัดไป →</button>'}
          </div>
        </div>
      </div>
    `,J().then(()=>Y(r)).catch(()=>{}),r.querySelector("#qp-close").addEventListener("click",()=>r.remove()),r.querySelectorAll(".qp-choice-input").forEach(y=>y.addEventListener("change",()=>{e[c.id]=parseInt(y.dataset.i,10),a()})),(g=r.querySelector("#qp-prev"))==null||g.addEventListener("click",()=>{n--,a()}),(u=r.querySelector("#qp-next"))==null||u.addEventListener("click",()=>{n++,a()}),(p=r.querySelector("#qp-finish"))==null||p.addEventListener("click",h)},h=()=>{const c=b.filter(g=>e[g.id]===g.correct_choice_index).length,m=b.length>0?c/b.length*100:0;r.innerHTML=`
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <h2 class="font-bold text-gray-800 text-sm">ผลการทดลองทำ</h2>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-md mx-auto text-center space-y-4">
          <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-lg">
            <p class="text-sm text-indigo-100 mb-1">ถูก ${c}/${b.length} ข้อ</p>
            <p class="text-5xl font-extrabold">${m.toFixed(1)}%</p>
          </div>
          <p class="text-xs text-amber-600">นี่คือการทดลองทำเท่านั้น ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียนใดๆ</p>
          <button id="qp-done" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">เสร็จสิ้น</button>
        </div>
      </div>
    `,r.querySelector("#qp-close").addEventListener("click",()=>r.remove()),r.querySelector("#qp-done").addEventListener("click",()=>r.remove())};a()}export{q as renderBankQuizzes};
