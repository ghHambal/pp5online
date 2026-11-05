const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-CbyGDHt8.js","assets/ui-Cr4JiTyM.js","assets/quiz-api-CcBTN73s.js","assets/supabase-BV-W2lsh.js","assets/import-B3k7GmnR.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-utils-Dj2Ir5X-.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-quiz-monitor-FVI0wIxS.js","assets/api-CQwFwlFA.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-quiz-analytics-CyrSxQMR.js"])))=>i.map(i=>d[i]);
import{_ as T,h as j,a as v,o as F,b as C,g as N}from"./ui-Cr4JiTyM.js";import{getMyClasses as P,getSystemConfig as H,getScoreColumns as Q}from"./api-CQwFwlFA.js";import{w as R,c as V,x as W,s as U,p as G,y as J,z as K,A as X,t as Y}from"./quiz-api-CcBTN73s.js";import{setTitle as Z,setContent as B,_htmlEsc as f,INPUT_CLS as S,SELECT_CLS as L}from"./teacher-views-utils-Dj2Ir5X-.js";import{l as z,r as ee}from"./katex-loader-DUJObfzT.js";import"./supabase-BV-W2lsh.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";const q={draft:{label:"ร่าง",cls:"bg-gray-100 text-gray-600"},announced:{label:"รอครูเริ่ม",cls:"bg-amber-100 text-amber-700"},started:{label:"กำลังสอบ",cls:"bg-emerald-100 text-emerald-700"},closed:{label:"ปิดสอบแล้ว",cls:"bg-gray-200 text-gray-500"}},O={first:"ครั้งแรก",last:"ครั้งล่าสุด",highest:"คะแนนสูงสุด"},te={total_only:"เห็นคะแนนรวมเท่านั้น",per_question:"เห็นถูก/ผิดรายข้อ",full_review:"เห็นเฉลยเต็ม"},I={highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/กิจกรรมอื่น) จะเก็บค่าที่สูงกว่าไว้ (ค่าเริ่มต้น)"},overwrite:{label:"ทับคะแนนเก่า",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนที่ได้จากควิซนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายควิซ"}};async function A(i,o,m=null){if(!o)return;Z(`แบบทดสอบจากคลัง: ${o.name}`),B('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const[n,e,r,g,l]=await Promise.all([R(o.id),P(i.id),V(o.id),H().catch(()=>({})),W(i.id).catch(()=>0)]),x=(window._pp5DonorTierIndex??0)>=2,y=parseInt(g.quizFreeStartLimit,10),h=Number.isFinite(y)?y:2,u=x||l<h,w=Object.fromEntries(e.map(t=>{var s;return[t.id,`${((s=t.master_subjects)==null?void 0:s.subject_name)??""} (${t.class_name??"—"})`]})),_=x?"":`
    <div class="rounded-2xl p-3.5 flex items-center gap-3 ${u?"bg-indigo-50 border border-indigo-100":"bg-amber-50 border border-amber-200"}">
      <span class="text-xl flex-shrink-0">${u?"🎁":"⭐"}</span>
      <p class="text-xs ${u?"text-indigo-700":"text-amber-800"} leading-relaxed">
        ${u?`โควตาทดลอง "เริ่มสอบจริง" ฟรี: ใช้ไปแล้ว ${l}/${h} ครั้ง — สร้างคลัง/ตั้งค่า/ทดลองทำเองได้ไม่จำกัดเสมอ`:`ใช้โควตาทดลอง "เริ่มสอบจริง" ฟรีครบ ${h} ครั้งแล้ว — โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบให้นักเรียนทำได้ไม่จำกัด (ยังทดลองทำเองและตั้งค่าต่อได้ตามปกติ)`}
      </p>
    </div>`;B(`
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
        `:n.map(t=>{const s=q[t.status]??q.draft;return`
          <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-0.5 rounded-lg text-xs font-bold ${s.cls}">${s.label}</span>
                  <h4 class="font-bold text-gray-800 text-sm truncate">${f(t.title)}</h4>
                </div>
                <p class="text-xs text-gray-400">${f(w[t.class_id]??"ห้องที่ถูกลบ")} · ${t.num_questions} ข้อ · ${t.time_limit_minutes??"—"} นาที · ทำได้ ${t.max_attempts} ครั้ง (นับ${O[t.attempt_scoring_mode]})</p>
              </div>
              <div class="flex flex-col gap-1.5 flex-shrink-0">
                ${t.status==="announced"?`<button class="btn-start-quiz px-3 py-1.5 rounded-lg ${u?"bg-emerald-600 hover:bg-emerald-700":"bg-gray-300"} text-white text-xs font-bold" data-id="${t.id}">▶️ เริ่มสอบ</button>`:""}
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
  `),document.getElementById("btn-back-questions").addEventListener("click",async()=>{const{_renderBankQuestions:t}=await T(async()=>{const{_renderBankQuestions:s}=await import("./teacher-views-quiz-banks-CbyGDHt8.js");return{_renderBankQuestions:s}},__vite__mapDeps([0,1,2,3,4,5,6,7]));t(i,o)}),document.getElementById("btn-create-quiz").addEventListener("click",()=>M(i,o,e,r.length,null,m)),document.querySelectorAll(".btn-edit-quiz").forEach(t=>t.addEventListener("click",()=>M(i,o,e,r.length,n.find(s=>s.id===t.dataset.id)))),document.querySelectorAll(".btn-preview-quiz").forEach(t=>t.addEventListener("click",()=>le(n.find(s=>s.id===t.dataset.id),r))),document.querySelectorAll(".btn-start-quiz").forEach(t=>t.addEventListener("click",async()=>{if(!u){se(h);return}await j({title:"เริ่มสอบเลยหรือไม่?",message:"นักเรียนในห้องจะเริ่มเข้าทำแบบทดสอบได้ทันที",confirmText:"เริ่มสอบ"})&&(await U(t.dataset.id),v("เริ่มสอบแล้ว","success"),A(i,o))})),document.querySelectorAll(".btn-close-quiz").forEach(t=>t.addEventListener("click",async()=>{var p;const s=n.find($=>$.id===t.dataset.id);if(!s)return;const a=(s.score_column_id?await Q(s.class_id).catch(()=>[]):[]).find($=>String($.id)===String(s.score_column_id)),c=await F({quizTitle:s.title,hasScoreColumn:!!s.score_column_id,targetColumn:(a==null?void 0:a.assignment_name)??"",writeModeLabel:((p=I[s.score_write_mode])==null?void 0:p.label)??""});c&&(await G(t.dataset.id,{writeScores:c==="write_scores"}),v(c==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),A(i,o))})),document.querySelectorAll(".btn-apply-quiz-score").forEach(t=>t.addEventListener("click",async()=>{var E;const s=n.find(k=>k.id===t.dataset.id);if(!(s!=null&&s.score_column_id))return;const a=(await Q(s.class_id).catch(()=>[])).find(k=>String(k.id)===String(s.score_column_id)),c=((E=I[s.score_write_mode])==null?void 0:E.label)??"ตามการตั้งค่า";if(!await j({title:"ส่งคะแนนข้อสอบย้อนหลัง?",message:`ระบบจะนำคะแนน “${s.title}” ไปยังคอลัมน์ “${(a==null?void 0:a.assignment_name)??"คอลัมน์ที่ผูกไว้"}”`,detail:`วิธีเขียน: ${c} · โหมดบวกเพิ่มจะเพิ่มเฉพาะส่วนต่าง จึงกดซ้ำแล้วไม่บวกคะแนนเดิมซ้ำ`,confirmText:"ส่งคะแนน"}))return;const $=await J(s.id);v(`ส่งคะแนนแล้ว ${$} คน`,"success")})),document.querySelectorAll(".btn-delete-quiz").forEach(t=>t.addEventListener("click",async()=>{await j({title:"ลบแบบทดสอบนี้?",message:"ประวัติการทำข้อสอบของนักเรียนในแบบทดสอบนี้จะถูกลบไปด้วย"})&&(await K(t.dataset.id),v("ลบแบบทดสอบแล้ว","success"),A(i,o))})),document.querySelectorAll(".btn-monitor-quiz").forEach(t=>t.addEventListener("click",async()=>{const{openQuizMonitor:s}=await T(async()=>{const{openQuizMonitor:d}=await import("./teacher-views-quiz-monitor-FVI0wIxS.js");return{openQuizMonitor:d}},__vite__mapDeps([8,9,3,10,11,12,2,1,6]));s(n.find(d=>d.id===t.dataset.id))})),document.querySelectorAll(".btn-analytics-quiz").forEach(t=>t.addEventListener("click",async()=>{const{openQuizAnalytics:s}=await T(async()=>{const{openQuizAnalytics:d}=await import("./teacher-views-quiz-analytics-CyrSxQMR.js");return{openQuizAnalytics:d}},__vite__mapDeps([13,9,3,10,11,12,2,6,1]));s(n.find(d=>d.id===t.dataset.id))}))}async function M(i,o,m,n,e,r=null){let g={};try{g=JSON.parse(localStorage.getItem(`quiz-prompt-settings:${o.id}`)??"{}")}catch{}const l=document.createElement("div");l.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",l.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-1">${e?"แก้ไขแบบทดสอบ":"สร้างแบบทดสอบใหม่"}</h3>
      <p class="text-xs text-gray-400 mb-4">คลังนี้มีคำถามทั้งหมด ${n} ข้อ</p>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อแบบทดสอบ</label>
          <input id="qz-title" class="${S}" value="${f((e==null?void 0:e.title)??"")}" placeholder="เช่น สอบย่อยบทที่ 1" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ห้องเรียนที่จะให้สอบ</label>
          <select id="qz-class" class="${L}">
            ${m.map(a=>{var c;return`<option value="${a.id}" ${(e?e.class_id===a.id:a.id===r)?"selected":""}>${f(((c=a.master_subjects)==null?void 0:c.subject_name)??"")} (${f(a.class_name??"—")})</option>`}).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">จำนวนข้อที่สุ่ม</label>
            <input id="qz-num" type="number" min="1" class="${S}" value="${(e==null?void 0:e.num_questions)??Math.min(10,n||10)}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">เวลาสอบ (นาที)</label>
            <input id="qz-time" type="number" min="1" class="${S}" value="${(e==null?void 0:e.time_limit_minutes)??30}" />
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
            <input id="qz-attempts" type="number" min="1" class="${S}" value="${(e==null?void 0:e.max_attempts)??1}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">นับคะแนนแบบ</label>
            <select id="qz-scoring" class="${L}">
              ${Object.entries(O).map(([a,c])=>`<option value="${a}" ${((e==null?void 0:e.attempt_scoring_mode)??"last")===a?"selected":""}>${c}</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">เปิดสอบตั้งแต่ (ไม่บังคับ)</label>
            <input id="qz-open" type="datetime-local" class="${S}" value="${e!=null&&e.open_at?e.open_at.slice(0,16):""}" />
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ปิดสอบเมื่อ (ไม่บังคับ)</label>
            <input id="qz-close" type="datetime-local" class="${S}" value="${e!=null&&e.close_at?e.close_at.slice(0,16):""}" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">นักเรียนดูผลได้แค่ไหนหลังส่งข้อสอบ</label>
          <select id="qz-review" class="${L}">
            ${Object.entries(te).map(([a,c])=>`<option value="${a}" ${((e==null?void 0:e.review_policy)??"total_only")===a?"selected":""}>${c}</option>`).join("")}
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
            <input id="qz-score-max" type="number" min="0" step="0.5" class="${S}" value="${(e==null?void 0:e.score_max)??100}" />
          </div>
        </div>
        <div id="qz-write-mode-wrap" class="${e!=null&&e.score_column_id?"":"hidden"}">
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว ให้ทำอย่างไร</label>
          <select id="qz-write-mode" class="${L}">
            ${Object.entries(I).map(([a,c])=>`<option value="${a}" ${((e==null?void 0:e.score_write_mode)??"highest")===a?"selected":""}>${c.label}</option>`).join("")}
          </select>
          <p id="qz-write-mode-hint" class="text-[11px] text-gray-400 mt-1 leading-relaxed"></p>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="qz-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="qz-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(l);const b=l.querySelector("#qz-class"),x=l.querySelector("#qz-score-col"),y=async()=>{const a=b.value;if(!a)return;const c=await Q(a).catch(()=>[]);x.innerHTML='<option value="">— ไม่ผูกคะแนน —</option>'+c.map(p=>`<option value="${p.id}" ${(e==null?void 0:e.score_column_id)===p.id?"selected":""}>${f(p.assignment_name)}</option>`).join("")};b.addEventListener("change",y),b.value&&await y();const h=l.querySelector("#qz-write-mode-wrap"),u=l.querySelector("#qz-write-mode"),w=l.querySelector("#qz-write-mode-hint"),_=()=>{var a;h.classList.toggle("hidden",!x.value),w.textContent=((a=I[u.value])==null?void 0:a.hint)??""};x.addEventListener("change",_),u.addEventListener("change",_),_();const t=l.querySelector("#qz-lock-answer"),s=l.querySelector("#qz-instant-bonus"),d=()=>{s.checked?(t.checked=!0,t.disabled=!0):t.disabled=!1};s.addEventListener("change",d),d(),l.querySelector("#qz-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#qz-save").addEventListener("click",async a=>{const c=l.querySelector("#qz-title").value.trim(),p=parseInt(l.querySelector("#qz-num").value,10);if(!c){v("กรุณาระบุชื่อแบบทดสอบ","warning");return}if(!p||p<1){v("กรุณาระบุจำนวนข้อที่ถูกต้อง","warning");return}if(p>n){v(`คลังมีแค่ ${n} ข้อ แต่ตั้งค่าให้สุ่ม ${p} ข้อ — เพิ่มคำถามในคลังก่อนบันทึก`,"warning");return}const $=l.querySelector("#qz-open").value,E=l.querySelector("#qz-close").value,k={bank_id:o.id,class_id:b.value,title:c,num_questions:p,choice_label_style:(e==null?void 0:e.choice_label_style)??g.choice_label_style??"numeric",choice_labels_custom:(e==null?void 0:e.choice_labels_custom)??g.choice_labels_custom??null,quiz_language:(e==null?void 0:e.quiz_language)??g.quiz_language??"th",quiz_language_custom:(e==null?void 0:e.quiz_language_custom)??g.quiz_language_custom??null,shuffle_questions:l.querySelector("#qz-shuffle-q").checked,shuffle_choices:l.querySelector("#qz-shuffle-c").checked,lock_on_answer:l.querySelector("#qz-instant-bonus").checked||l.querySelector("#qz-lock-answer").checked,instant_feedback_bonus:l.querySelector("#qz-instant-bonus").checked,deterrent_notice_enabled:l.querySelector("#qz-deterrent").checked,max_attempts:parseInt(l.querySelector("#qz-attempts").value,10)||1,attempt_scoring_mode:l.querySelector("#qz-scoring").value,time_limit_minutes:parseInt(l.querySelector("#qz-time").value,10)||null,open_at:$?new Date($).toISOString():null,close_at:E?new Date(E).toISOString():null,review_policy:l.querySelector("#qz-review").value,score_column_id:x.value||null,score_max:parseFloat(l.querySelector("#qz-score-max").value)||null,score_write_mode:u.value};C(a.target,!0);try{e?await X(e.id,k):await Y({...k,status:"announced"}),v("บันทึกแล้ว","success"),l.remove(),A(i,o)}catch(D){v("บันทึกไม่สำเร็จ: "+N(D),"error"),C(a.target,!1,"บันทึก")}})}function se(i){const o=document.createElement("div");o.className="fixed inset-0 z-[95] bg-black/40 flex items-center justify-center p-4",o.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
      <div class="text-5xl mb-3">⭐</div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">ใช้โควตาทดลองฟรีครบแล้ว</h3>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">คุณเริ่มสอบจริงให้นักเรียนทำไปแล้ว ${i} ครั้ง (ครบโควตาทดลองฟรี) โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบได้ไม่จำกัด — สร้างคลัง/ตั้งค่า/ทดลองทำเองยังทำได้ตามปกติ</p>
      <div class="space-y-2">
        <button id="paywall-donate" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดการสนับสนุน</button>
        <button id="paywall-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ปิด</button>
      </div>
    </div>
  `,document.body.appendChild(o),o.querySelector("#paywall-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#paywall-donate").addEventListener("click",()=>{var m;o.remove(),(m=document.getElementById("btn-donate-float"))==null||m.click()})}function le(i,o){if(!i)return;const m=o.slice(0,i.num_questions);if(!m.length){v("คลังนี้ยังไม่มีคำถาม","warning");return}let n=0;const e={},r=document.createElement("div");r.className="fixed inset-0 z-[95] bg-white flex flex-col",document.body.appendChild(r);const g=()=>{var y,h,u;const b=m[n],x=e[b.id];r.innerHTML=`
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm truncate">🧪 ทดลองทำ: ${f(i.title)}</h2>
          <p class="text-xs text-amber-600">โหมดทดลอง — ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียน</p>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-2xl mx-auto">
          <p class="text-xs text-gray-400 mb-2">ข้อ ${n+1} จาก ${m.length}</p>
          <p class="font-semibold text-gray-800 mb-4">${f(b.question_text)}</p>
          <div class="space-y-2" id="qp-choices">
            ${b.choices.map((w,_)=>{const t=x===_,s=_===b.correct_choice_index;let d="border-gray-200 hover:bg-gray-50 cursor-pointer";return x!=null&&(s?d="border-emerald-400 bg-emerald-50":t?d="border-red-400 bg-red-50":d="border-gray-100 opacity-60"),`
              <label class="flex items-center gap-3 p-3 rounded-xl border ${d}">
                <input type="radio" name="qp-choice" class="qp-choice-input flex-shrink-0" data-i="${_}" ${t?"checked":""} ${x!=null?"disabled":""} />
                <span class="text-sm">${f(w)}</span>
              </label>`}).join("")}
          </div>
          ${x!=null&&b.explanation?`<p class="text-xs text-gray-500 mt-3 italic">💡 ${f(b.explanation)}</p>`:""}
          <div class="flex justify-between gap-2 mt-6">
            <button id="qp-prev" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm" ${n===0?"disabled":""}>← ก่อนหน้า</button>
            ${n===m.length-1?'<button id="qp-finish" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm">ดูผลทดลอง</button>':'<button id="qp-next" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ถัดไป →</button>'}
          </div>
        </div>
      </div>
    `,z().then(()=>ee(r)).catch(()=>{}),r.querySelector("#qp-close").addEventListener("click",()=>r.remove()),r.querySelectorAll(".qp-choice-input").forEach(w=>w.addEventListener("change",()=>{e[b.id]=parseInt(w.dataset.i,10),g()})),(y=r.querySelector("#qp-prev"))==null||y.addEventListener("click",()=>{n--,g()}),(h=r.querySelector("#qp-next"))==null||h.addEventListener("click",()=>{n++,g()}),(u=r.querySelector("#qp-finish"))==null||u.addEventListener("click",l)},l=()=>{const b=m.filter(y=>e[y.id]===y.correct_choice_index).length,x=m.length>0?b/m.length*100:0;r.innerHTML=`
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <h2 class="font-bold text-gray-800 text-sm">ผลการทดลองทำ</h2>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-md mx-auto text-center space-y-4">
          <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-lg">
            <p class="text-sm text-indigo-100 mb-1">ถูก ${b}/${m.length} ข้อ</p>
            <p class="text-5xl font-extrabold">${x.toFixed(1)}%</p>
          </div>
          <p class="text-xs text-amber-600">นี่คือการทดลองทำเท่านั้น ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียนใดๆ</p>
          <button id="qp-done" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">เสร็จสิ้น</button>
        </div>
      </div>
    `,r.querySelector("#qp-close").addEventListener("click",()=>r.remove()),r.querySelector("#qp-done").addEventListener("click",()=>r.remove())};g()}export{A as renderBankQuizzes};
