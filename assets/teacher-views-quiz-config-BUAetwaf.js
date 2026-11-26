const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-banks-IJcJb9Bh.js","assets/ui-DU3V9L7w.js","assets/quiz-api-MXSuDZbX.js","assets/supabase-BV-W2lsh.js","assets/import-C94fAqSd.js","assets/ai-prompt-gate-D6R7FVed.js","assets/teacher-views-utils-PYNJrmMY.js","assets/katex-loader-DUJObfzT.js","assets/teacher-views-quiz-monitor-BXQ2BzAS.js","assets/api-vSXCr5aV.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/teacher-views-quiz-analytics-Cdxi5wkj.js"])))=>i.map(i=>d[i]);
import{_ as U,h as W,a as N,o as me,g as V}from"./ui-DU3V9L7w.js";import{c as be,b as ve,bV as X,bS as ne}from"./api-vSXCr5aV.js";import{w as he,c as qe,x as ge,s as fe,p as we,y as ze,z as ye,A as xe,t as _e,B as oe,C as $e}from"./quiz-api-MXSuDZbX.js";import{setTitle as ke,setContent as ie,_htmlEsc as q}from"./teacher-views-utils-PYNJrmMY.js";import{l as Se,r as Ee}from"./katex-loader-DUJObfzT.js";import"./supabase-BV-W2lsh.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";const re={draft:{label:"ร่าง",cls:"bg-gray-100 text-gray-600"},announced:{label:"รอครูเริ่ม",cls:"bg-amber-100 text-amber-700"},started:{label:"กำลังสอบ",cls:"bg-emerald-100 text-emerald-700"},closed:{label:"ปิดสอบแล้ว",cls:"bg-gray-200 text-gray-500"}},G={first:"ครั้งแรก",last:"ครั้งล่าสุด",highest:"คะแนนสูงสุด"},ce={total_only:"เห็นคะแนนรวมเท่านั้น",per_question:"เห็นถูก/ผิดรายข้อ",full_review:"เห็นเฉลยเต็ม"},H={highest:{label:"เทียบเอาคะแนนสูงกว่า",hint:"ถ้าคอลัมน์นี้มีคะแนนอยู่แล้ว (กรอกมือ/กิจกรรมอื่น) จะเก็บค่าที่สูงกว่าไว้ (ค่าเริ่มต้น)"},overwrite:{label:"ทับคะแนนเก่า",hint:"เขียนทับคะแนนเดิมในคอลัมน์นี้เสมอ ไม่ว่าเดิมจะมีค่าเท่าไหร่"},add:{label:"บวกเพิ่มจากคะแนนเดิม",hint:"บวกคะแนนที่ได้จากควิซนี้เข้ากับคะแนนที่มีอยู่แล้วในคอลัมน์ เหมาะกับคอลัมน์สะสมคะแนนจากหลายควิซ"}};async function P(S,v,h=null){if(!v)return;ke(`แบบทดสอบจากคลัง: ${v.name}`),ie('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const[g,s,y,C,i]=await Promise.all([he(v.id),be(S.id),qe(v.id),ve().catch(()=>({})),ge(S.id).catch(()=>0)]),x=(window._pp5DonorTierIndex??0)>=2,m=parseInt(C.quizFreeStartLimit,10),p=Number.isFinite(m)?m:2,c=x||i<p,f=Object.fromEntries(s.map(l=>{var n;return[l.id,`${((n=l.master_subjects)==null?void 0:n.subject_name)??""} (${l.class_name??"—"})`]})),L=x?"":`
    <div class="rounded-2xl p-3.5 flex items-center gap-3 ${c?"bg-indigo-50 border border-indigo-100":"bg-amber-50 border border-amber-200"}">
      <span class="text-xl flex-shrink-0">${c?"🎁":"⭐"}</span>
      <p class="text-xs ${c?"text-indigo-700":"text-amber-800"} leading-relaxed">
        ${c?`โควตาทดลอง "เริ่มสอบจริง" ฟรี: ใช้ไปแล้ว ${i}/${p} ครั้ง — สร้างคลัง/ตั้งค่า/ทดลองทำเองได้ไม่จำกัดเสมอ`:`ใช้โควตาทดลอง "เริ่มสอบจริง" ฟรีครบ ${p} ครั้งแล้ว — โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบให้นักเรียนทำได้ไม่จำกัด (ยังทดลองทำเองและตั้งค่าต่อได้ตามปกติ)`}
      </p>
    </div>`;ie(`
    <div class="space-y-4">
      <button id="btn-back-questions" class="text-sm text-gray-500 hover:text-gray-700">← กลับไปหน้าคำถามในคลัง</button>

      ${L}

      <div class="flex items-center justify-between">
        <h3 class="font-bold text-gray-700 text-sm">แบบทดสอบที่สร้างจากคลังนี้ (${g.length} รายการ)</h3>
        <button id="btn-create-quiz" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm">＋ สร้างแบบทดสอบใหม่</button>
      </div>

      <div class="space-y-3" id="quiz-list">
        ${g.length===0?`
          <div class="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <p class="text-sm text-gray-400">ยังไม่มีแบบทดสอบจากคลังนี้ — กำหนดค่าแล้วเลือกห้องเรียนที่จะให้สอบได้เลย</p>
          </div>
        `:g.map(l=>{const n=re[l.status]??re.draft;return`
          <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-0.5 rounded-lg text-xs font-bold ${n.cls}">${n.label}</span>
                  <h4 class="font-bold text-gray-800 text-sm truncate">${q(l.title)}</h4>
                </div>
                <p class="text-xs text-gray-400">${q(f[l.class_id]??"ห้องที่ถูกลบ")} · ${l.num_questions} ข้อ · ${l.time_limit_minutes??"—"} นาที · ทำได้ ${l.max_attempts} ครั้ง (นับ${G[l.attempt_scoring_mode]})</p>
              </div>
              <div class="flex flex-col gap-1.5 flex-shrink-0">
                ${l.status==="announced"?`<button class="btn-start-quiz px-3 py-1.5 rounded-lg ${c?"bg-emerald-600 hover:bg-emerald-700":"bg-gray-300"} text-white text-xs font-bold" data-id="${l.id}">▶️ เริ่มสอบ</button>`:""}
                ${l.status==="started"?`<button class="btn-close-quiz px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold" data-id="${l.id}">⏹️ ปิดสอบ</button>`:""}
                ${l.status==="closed"?`<button class="btn-makeup-quiz px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold" data-id="${l.id}">🕒 เปิดสอบชดเชย</button>`:""}
                ${l.status==="started"?`<button class="btn-monitor-quiz px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold" data-id="${l.id}">🔴 ดูสด</button>`:""}
                ${l.status==="started"||l.status==="closed"?`<button class="btn-analytics-quiz px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold" data-id="${l.id}">📊 สถิติ</button>`:""}
                ${l.status==="closed"&&l.score_column_id?`<button class="btn-apply-quiz-score px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold" data-id="${l.id}">📥 ส่งคะแนนย้อนหลัง</button>`:""}
                <button class="btn-preview-quiz px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-600 hover:bg-indigo-50 text-xs font-semibold" data-id="${l.id}">🧪 ทดลองทำข้อสอบ</button>
                <button class="btn-edit-quiz px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold" data-id="${l.id}">✏️ แก้ไข</button>
                <button class="btn-delete-quiz px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold" data-id="${l.id}">🗑️ ลบ</button>
              </div>
            </div>
          </div>
        `}).join("")}
      </div>
    </div>
  `),document.getElementById("btn-back-questions").addEventListener("click",async()=>{const{_renderBankQuestions:l}=await U(async()=>{const{_renderBankQuestions:n}=await import("./teacher-views-quiz-banks-IJcJb9Bh.js");return{_renderBankQuestions:n}},__vite__mapDeps([0,1,2,3,4,5,6,7]));l(S,v)}),document.getElementById("btn-create-quiz").addEventListener("click",()=>J(S,v,s,y.length,null,h)),document.querySelectorAll(".btn-edit-quiz").forEach(l=>l.addEventListener("click",()=>J(S,v,s,y.length,g.find(n=>n.id===l.dataset.id)))),document.querySelectorAll(".btn-preview-quiz").forEach(l=>l.addEventListener("click",()=>Ae(g.find(n=>n.id===l.dataset.id),y))),document.querySelectorAll(".btn-start-quiz").forEach(l=>l.addEventListener("click",async()=>{if(!c){Ce(p);return}await W({title:"เริ่มสอบเลยหรือไม่?",message:"นักเรียนในห้องจะเริ่มเข้าทำแบบทดสอบได้ทันที",confirmText:"เริ่มสอบ"})&&(await fe(l.dataset.id),N("เริ่มสอบแล้ว","success"),P(S,v))})),document.querySelectorAll(".btn-close-quiz").forEach(l=>l.addEventListener("click",async()=>{var M;const n=g.find(r=>r.id===l.dataset.id);if(!n)return;const _=(n.score_column_id?await X(n.class_id).catch(()=>[]):[]).find(r=>String(r.id)===String(n.score_column_id)),d=await me({quizTitle:n.title,hasScoreColumn:!!n.score_column_id,targetColumn:(_==null?void 0:_.assignment_name)??"",writeModeLabel:((M=H[n.score_write_mode])==null?void 0:M.label)??""});d&&(await we(l.dataset.id,{writeScores:d==="write_scores"}),N(d==="write_scores"?"ปิดสอบและส่งคะแนนแล้ว":"ปิดสอบแล้ว — สมุดคะแนนไม่ถูกเปลี่ยน","success"),P(S,v))})),document.querySelectorAll(".btn-makeup-quiz").forEach(l=>l.addEventListener("click",()=>{const n=g.find(e=>e.id===l.dataset.id);n&&Le(S,v,n,f[n.class_id]??"ห้องเรียน",s,y.length)})),document.querySelectorAll(".btn-apply-quiz-score").forEach(l=>l.addEventListener("click",async()=>{var z;const n=g.find(u=>u.id===l.dataset.id);if(!(n!=null&&n.score_column_id))return;const _=(await X(n.class_id).catch(()=>[])).find(u=>String(u.id)===String(n.score_column_id)),d=((z=H[n.score_write_mode])==null?void 0:z.label)??"ตามการตั้งค่า";if(!await W({title:"ส่งคะแนนข้อสอบย้อนหลัง?",message:`ระบบจะนำคะแนน “${n.title}” ไปยังคอลัมน์ “${(_==null?void 0:_.assignment_name)??"คอลัมน์ที่ผูกไว้"}”`,detail:`วิธีเขียน: ${d} · โหมดบวกเพิ่มจะเพิ่มเฉพาะส่วนต่าง จึงกดซ้ำแล้วไม่บวกคะแนนเดิมซ้ำ`,confirmText:"ส่งคะแนน"}))return;const r=await ze(n.id);N(`ส่งคะแนนแล้ว ${r} คน`,"success")})),document.querySelectorAll(".btn-delete-quiz").forEach(l=>l.addEventListener("click",async()=>{await W({title:"ลบแบบทดสอบนี้?",message:"ประวัติการทำข้อสอบของนักเรียนในแบบทดสอบนี้จะถูกลบไปด้วย"})&&(await ye(l.dataset.id),N("ลบแบบทดสอบแล้ว","success"),P(S,v))})),document.querySelectorAll(".btn-monitor-quiz").forEach(l=>l.addEventListener("click",async()=>{const{openQuizMonitor:n}=await U(async()=>{const{openQuizMonitor:e}=await import("./teacher-views-quiz-monitor-BXQ2BzAS.js");return{openQuizMonitor:e}},__vite__mapDeps([8,9,3,10,11,2,1,6]));n(g.find(e=>e.id===l.dataset.id))})),document.querySelectorAll(".btn-analytics-quiz").forEach(l=>l.addEventListener("click",async()=>{const{openQuizAnalytics:n}=await U(async()=>{const{openQuizAnalytics:e}=await import("./teacher-views-quiz-analytics-Cdxi5wkj.js");return{openQuizAnalytics:e}},__vite__mapDeps([12,9,3,10,11,2,6,1]));n(g.find(e=>e.id===l.dataset.id))}))}async function Le(S,v,h,g,s,y){var M;(M=document.getElementById("quiz-makeup-modal"))==null||M.remove();const C=document.activeElement,i=document.createElement("div");i.id="quiz-makeup-modal",i.className="quiz-makeup-overlay",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-labelledby","quiz-makeup-title"),i.innerHTML=`
    <section class="qm-dialog">
      <header class="qm-header">
        <div class="qm-heading">
          <svg class="qm-heading-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 7v5l3.2 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div class="qm-heading-copy"><h2 id="quiz-makeup-title">เปิดสอบชดเชย</h2>
            <p class="quiz-makeup-subtitle">${q(h.title)}<span>${q(g)}</span></p></div>
        </div>
        <button type="button" data-close class="qm-icon-button" aria-label="ปิดหน้าต่าง">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
      </header>
      <div class="qm-body">
        <div class="qm-notice" role="note">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8v4m0 4h.01M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3l-7.5-13.1a2 2 0 0 0-3.4 0Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <p>เลือกได้เฉพาะนักเรียนที่ยังไม่เคยเริ่มทำแบบทดสอบนี้ ผู้ที่สอบแล้วจะไม่สามารถเปิดสิทธิ์ซ้ำได้</p>
        </div>
        <div class="qm-settings">
          <div class="qm-settings-copy"><span class="qm-settings-label">การตั้งค่าข้อสอบ</span>
            <span id="quiz-makeup-edit-status" class="qm-settings-status">ใช้การตั้งค่าปัจจุบัน</span>
            <span class="qm-settings-help">แก้ไขก่อนเปิดสอบได้ หรือข้ามขั้นตอนนี้ได้</span></div>
          <button type="button" id="quiz-makeup-edit-settings" class="qm-secondary-button">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" stroke="currentColor" stroke-width="1.7"/><path d="m19.4 15 .1.1 1.2 1-.9 1.6-1.5-.5a8 8 0 0 1-1.5.9l-.3 1.6h-1.9l-.3-1.6a8 8 0 0 1-1.5-.9l-1.5.5-.9-1.6 1.2-1a7 7 0 0 1 0-1.8l-1.2-1 .9-1.6 1.5.5a8 8 0 0 1 1.5-.9l.3-1.6h1.9l.3 1.6a8 8 0 0 1 1.5.9l1.5-.5.9 1.6-1.2 1a7 7 0 0 1 0 1.8Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
            <span>แก้ไขการตั้งค่า</span>
          </button>
        </div>
        <section class="qm-roster" aria-labelledby="qm-roster-title">
          <div class="qm-roster-heading">
            <div><h3 id="qm-roster-title">นักเรียนที่มีสิทธิ์สอบ</h3>
              <p id="quiz-makeup-eligible-count" class="qm-roster-count" aria-live="polite">กำลังตรวจสอบรายชื่อ</p></div>
            <button type="button" id="quiz-makeup-select-all" class="qm-select-all" aria-pressed="false" disabled>เลือกทั้งหมด</button>
          </div>
          <label class="qm-search-wrap">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" stroke-width="1.7"/><path d="m16 16 4.2 4.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
            <span class="qm-visually-hidden">ค้นหาชื่อนักเรียนหรือเลขประจำตัว</span>
            <input id="quiz-makeup-search" type="search" placeholder="ค้นหาชื่อหรือเลขประจำตัว" autocomplete="off" />
          </label>
          <div id="quiz-makeup-list" class="qm-roster-list" aria-live="polite" aria-busy="true">
            <div class="qm-list-state"><span class="qm-loader" aria-hidden="true"></span><span>กำลังโหลดรายชื่อนักเรียน</span></div>
          </div>
        </section>
        <label class="qm-deadline-label" for="quiz-makeup-closes-at">ปิดรับคำตอบวันที่และเวลา
          <span>เลือกเวลาที่ต้องการสิ้นสุดการสอบชดเชย</span>
          <input id="quiz-makeup-closes-at" type="datetime-local" />
        </label>
      </div>
      <footer class="qm-footer">
        <span class="qm-footer-summary"><strong id="quiz-makeup-selected-count">ยังไม่ได้เลือกนักเรียน</strong><span>กำหนดเวลาเริ่มต้น 3 วัน</span></span>
        <div class="qm-footer-actions"><button type="button" data-close class="qm-cancel-button">ยกเลิก</button>
          <button id="quiz-makeup-submit" type="button" class="qm-submit-button" disabled>
            <span class="qm-submit-label">เปิดสอบชดเชย</span><span class="qm-submit-loader" aria-hidden="true"></span>
          </button></div>
      </footer>
    </section>`,document.body.appendChild(i),i.querySelector("#quiz-makeup-search").focus();const $=()=>{i.remove(),C!=null&&C.isConnected&&C.focus()};i.querySelectorAll("[data-close]").forEach(r=>r.addEventListener("click",$)),i.addEventListener("click",r=>{r.target===i&&$()}),i.addEventListener("keydown",r=>{if(r.key==="Escape"){$();return}if(r.key!=="Tab")return;const z=[...i.querySelectorAll("button:not(:disabled), input:not(:disabled)")],u=z[0],E=z.at(-1);r.shiftKey&&document.activeElement===u?(r.preventDefault(),E==null||E.focus()):!r.shiftKey&&document.activeElement===E&&(r.preventDefault(),u==null||u.focus())});const x=i.querySelector("#quiz-makeup-closes-at"),m=r=>new Date(r.getTime()-r.getTimezoneOffset()*6e4).toISOString().slice(0,16);x.min=m(new Date(Date.now()+6e4)),x.value=m(new Date(Date.now()+3*24*60*60*1e3));let p=[],c="";const f=new Set,L=i.querySelector("#quiz-makeup-list"),l=i.querySelector("#quiz-makeup-select-all"),n=i.querySelector("#quiz-makeup-submit"),e=()=>{const r=f.size;i.querySelector("#quiz-makeup-selected-count").textContent=r?`เลือกแล้ว ${r} คน`:"ยังไม่ได้เลือกนักเรียน",n.disabled=r===0,l.disabled=p.length===0;const z=p.length>0&&r===p.length;l.setAttribute("aria-pressed",String(z)),l.textContent=z?"ยกเลิกทั้งหมด":"เลือกทั้งหมด"},_=()=>{if(c){L.innerHTML=`<div class="qm-list-state qm-list-error">${q(c)}</div>`,L.setAttribute("aria-busy","false"),e();return}const r=i.querySelector("#quiz-makeup-search").value.trim().toLocaleLowerCase(),z=p.map(u=>{const E=u.full_name??"ไม่ระบุชื่อ",w=u.student_code??"",B=`${E} ${w}`.toLocaleLowerCase();if(r&&!B.includes(r))return"";const D=u.image_url??u.photo_url,A=D?`<span class="qm-avatar"><img src="${q(D)}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'" /><svg class="qm-avatar-fallback" style="display:none" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 20c.6-3.4 3.5-5.5 7.5-5.5s6.9 2.1 7.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>`:'<span class="qm-avatar"><svg class="qm-avatar-fallback" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 20c.6-3.4 3.5-5.5 7.5-5.5s6.9 2.1 7.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>',O=f.has(Number(u.id));return`<button type="button" class="qm-student-row" data-student-id="${Number(u.id)}" aria-pressed="${O}" aria-label="${q(E)}, เลขประจำตัว ${q(w)}${O?", เลือกแล้ว":", ยังไม่เลือก"}">
        ${A}<span class="qm-student-copy"><span class="qm-student-name">${q(E)}</span>
          <span class="qm-student-code">${q(w)}</span></span>
        <span class="qm-student-state"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4.5 10.2 3.4 3.4 7.6-7.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${O?"เลือกแล้ว":"เลือก"}</span></span></button>`}).filter(Boolean);L.innerHTML=z.length?z.join(""):`<div class="qm-list-state">${p.length?"ไม่พบรายชื่อนักเรียนที่ตรงกับคำค้น":"ไม่มีนักเรียนที่ยังไม่เคยเริ่มทำแบบทดสอบนี้"}</div>`,L.setAttribute("aria-busy","false"),i.querySelectorAll(".qm-student-row").forEach(u=>u.addEventListener("click",()=>{var w;const E=Number(u.dataset.studentId);u.getAttribute("aria-pressed")==="true"?f.delete(E):f.add(E),_(),(w=i.querySelector(`[data-student-id="${E}"]`))==null||w.focus(),e()})),e()},d=()=>{i.querySelector("#quiz-makeup-eligible-count").textContent=p.length?`${p.length} คนที่ยังไม่เริ่มสอบ`:"ไม่มีผู้มีสิทธิ์สอบในขณะนี้"};try{const[r,z]=await Promise.all([ne(h.class_id),oe(h.id)]);p=r.filter(u=>!z.has(Number(u.id))),c="",d(),_()}catch(r){c=`โหลดรายชื่อนักเรียนไม่สำเร็จ: ${V(r)}`,i.querySelector("#quiz-makeup-eligible-count").textContent="ตรวจสอบรายชื่อไม่สำเร็จ",_()}i.querySelector("#quiz-makeup-edit-settings").addEventListener("click",()=>{i.style.zIndex="80",J(S,v,s,y,h,Number(h.class_id),async r=>{var E;Object.assign(h,r);const z=s.find(w=>Number(w.id)===Number(h.class_id)),u=z?`${((E=z.master_subjects)==null?void 0:E.subject_name)??""} (${z.class_name??"—"})`:"ห้องเรียน";i.querySelector(".quiz-makeup-subtitle").innerHTML=`${q(h.title)}<span>${q(u)}</span>`,i.querySelector("#quiz-makeup-edit-status").textContent="บันทึกการตั้งค่าแล้ว";try{const[w,B]=await Promise.all([ne(Number(h.class_id)),oe(h.id)]);p=w.filter(A=>!B.has(Number(A.id))),c="";const D=new Set(p.map(A=>Number(A.id)));for(const A of f)D.has(A)||f.delete(A);d(),_()}catch(w){p=[],f.clear(),c=`บันทึกการตั้งค่าแล้ว แต่โหลดรายชื่อนักเรียนใหม่ไม่สำเร็จ: ${V(w)}`,i.querySelector("#quiz-makeup-eligible-count").textContent="โหลดรายชื่อใหม่ไม่สำเร็จ",_()}},()=>{i.style.zIndex="120"})}),i.querySelector("#quiz-makeup-search").addEventListener("input",_),l.addEventListener("click",()=>{p.length>0&&f.size===p.length?f.clear():p.forEach(z=>f.add(Number(z.id))),_(),l.focus()}),n.addEventListener("click",async()=>{const r=[...f],z=new Date(x.value);if(!r.length){N("กรุณาเลือกนักเรียนอย่างน้อย 1 คน","error");return}if(!x.value||Number.isNaN(z.getTime())||z<=new Date){N("กรุณากำหนดเวลาปิดสอบชดเชยในอนาคต","error"),x.setAttribute("aria-invalid","true"),x.focus();return}n.disabled=!0,n.classList.add("is-loading"),n.querySelector(".qm-submit-label").textContent="กำลังเปิดสอบชดเชย";try{const u=await $e(h.id,r,z.toISOString());$(),N(`เปิดสอบชดเชยให้นักเรียน ${u} คนแล้ว`,"success"),P(S,v)}catch(u){N("เปิดสอบชดเชยไม่สำเร็จ: "+V(u),"error"),n.disabled=!1,n.classList.remove("is-loading"),n.querySelector(".qm-submit-label").textContent="เปิดสอบชดเชย"}}),x.addEventListener("input",()=>x.removeAttribute("aria-invalid"))}async function J(S,v,h,g,s,y=null,C=null,i=null){let $={};try{$=JSON.parse(localStorage.getItem(`quiz-prompt-settings:${v.id}`)??"{}")}catch{}const x=document.activeElement,m=document.createElement("div");m.id="quiz-config-wizard",m.className="qzw-shell",m.setAttribute("role","dialog"),m.setAttribute("aria-modal","true"),m.setAttribute("aria-labelledby","qz-wizard-title");const p=[{title:"ห้องและชื่อ",short:"ห้อง/ชื่อ"},{title:"จำนวนข้อและเวลา",short:"ข้อสอบ"},{title:"เงื่อนไขการสอบ",short:"การสอบ"},{title:"ผูกคะแนนและบันทึก",short:"คะแนน"},{title:"ตรวจทานและยืนยัน",short:"ตรวจทาน"}];let c=0,f="idle",L="",l=!1,n=Promise.resolve([]);m.innerHTML=`
    <header class="qzw-topbar">
      <div class="qzw-title-wrap">
        <h2 id="qz-wizard-title" class="qzw-title">${s?"แก้ไขแบบทดสอบ":"สร้างแบบทดสอบ"}</h2>
        <p class="qzw-bank-name">คลังข้อสอบ: ${q(v.name)}</p>
      </div>
      <div class="qzw-topbar-end">
        <span class="qzw-bank-count">มีคำถามในคลัง ${g} ข้อ</span>
        <button type="button" id="qz-cancel" class="qzw-button qzw-button--text" aria-label="ปิดหน้าตั้งค่า">ปิด</button>
      </div>
    </header>

    <main id="qz-wizard-scroll" class="qzw-main-area">
      <div class="qzw-workspace">
        <aside class="qzw-rail" aria-label="ขั้นตอนการตั้งค่า">
          <h3 class="qzw-rail-title">การตั้งค่าแบบทดสอบ</h3>
          <ol class="qzw-step-list">
            ${p.map((t,a)=>`<li class="qzw-step-item" data-step-item="${a}"><span class="qzw-step-number" data-step-dot="${a}">${a+1}</span><span class="qzw-step-label" data-step-label="${a}">${t.short}</span></li>`).join("")}
          </ol>
          <p class="qzw-rail-note"><strong>คลังข้อสอบ</strong>${g} คำถาม</p>
        </aside>

        <div class="qzw-content">
          <p id="qz-step-count" class="qzw-step-count">ขั้นตอนที่ 1 จาก ${p.length}: ${p[0].title}</p>
          <div class="qzw-progress-track" role="progressbar" aria-label="ความคืบหน้าการตั้งค่า" aria-valuemin="1" aria-valuemax="${p.length}" aria-valuenow="1"><div id="qz-progress" class="qzw-progress-fill"></div></div>
          <div id="qz-error-summary" class="qzw-error-summary hidden" role="alert" tabindex="-1"></div>

          <section data-step-panel="0" class="qzw-panel">
            <h3>กำหนดห้องเรียนและชื่อแบบทดสอบ</h3>
            <p class="qzw-panel-intro">แบบทดสอบหนึ่งรายการจะผูกกับห้องเรียนที่เลือก ครูสร้างรายการแยกสำหรับห้องอื่นได้</p>
            <div class="qzw-fields">
              <div class="qzw-field-group">
                <label for="qz-title" class="qzw-label">ชื่อแบบทดสอบ <span class="qzw-required">จำเป็น</span></label>
                <input id="qz-title" class="qzw-field" value="${q((s==null?void 0:s.title)??"")}" placeholder="เช่น สอบย่อยบทที่ 1" autocomplete="off" aria-required="true" />
                <p class="qzw-help">ชื่อนี้จะแสดงให้นักเรียนเห็นก่อนเริ่มสอบ</p>
              </div>
              <div class="qzw-field-group">
                <label for="qz-class" class="qzw-label">ห้องเรียนที่จะให้สอบ <span class="qzw-required">จำเป็น</span></label>
                <select id="qz-class" class="qzw-field qzw-select" aria-required="true">
                  <option value="">เลือกห้องเรียน</option>
                  ${h.map(t=>{var a;return`<option value="${t.id}" ${(s?s.class_id===t.id:t.id===y)?"selected":""}>${q(((a=t.master_subjects)==null?void 0:a.subject_name)??"")} (${q(t.class_name??"—")})</option>`}).join("")}
                </select>
                <p class="qzw-help">ช่องคะแนนในขั้นต่อไปจะมาจากห้องเรียนนี้</p>
              </div>
            </div>
          </section>

          <section data-step-panel="1" class="qzw-panel hidden">
            <h3>กำหนดจำนวนข้อและเวลาสอบ</h3>
            <p class="qzw-panel-intro">ระบบจะสุ่มคำถามจากคลังนี้ตามจำนวนที่กำหนด</p>
            <div class="qzw-fields">
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-num" class="qzw-label">จำนวนข้อที่สุ่ม <span class="qzw-required">จำเป็น</span></label><input id="qz-num" type="number" min="1" max="${Math.max(1,g)}" class="qzw-field" value="${(s==null?void 0:s.num_questions)??Math.min(10,g||10)}" aria-required="true" /><p class="qzw-help">คลังนี้มี ${g} ข้อ</p></div>
                <div class="qzw-field-group"><label for="qz-time" class="qzw-label">เวลาสอบ (นาที) <span class="qzw-required">จำเป็น</span></label><input id="qz-time" type="number" min="1" class="qzw-field" value="${(s==null?void 0:s.time_limit_minutes)??30}" aria-required="true" /></div>
              </div>
              <fieldset class="qzw-choice-list">
                <legend class="qzw-option-title">ลำดับข้อสอบ</legend>
                <label class="qzw-choice"><input type="checkbox" id="qz-shuffle-q" ${s?s.shuffle_questions?"checked":"":"checked"} /><span><span class="qzw-choice-title">สลับลำดับคำถาม</span><span class="qzw-choice-help">นักเรียนแต่ละคนอาจเห็นข้อสอบคนละลำดับ</span></span></label>
                <label class="qzw-choice"><input type="checkbox" id="qz-shuffle-c" ${s?s.shuffle_choices?"checked":"":"checked"} /><span><span class="qzw-choice-title">สลับลำดับตัวเลือก</span><span class="qzw-choice-help">ตัวเลือกในแต่ละข้อจะสลับตำแหน่ง</span></span></label>
              </fieldset>
            </div>
          </section>

          <section data-step-panel="2" class="qzw-panel hidden">
            <h3>ตั้งเงื่อนไขและสิ่งที่นักเรียนเห็น</h3>
            <p class="qzw-panel-intro">กำหนดจำนวนครั้ง ช่วงเวลา และการแสดงผลหลังส่งข้อสอบ</p>
            <div class="qzw-fields">
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-attempts" class="qzw-label">จำนวนครั้งที่ทำได้</label><input id="qz-attempts" type="number" min="1" class="qzw-field" value="${(s==null?void 0:s.max_attempts)??1}" /></div>
                <div class="qzw-field-group"><label for="qz-scoring" class="qzw-label">ถ้าทำหลายครั้ง ให้นับคะแนนแบบ</label><select id="qz-scoring" class="qzw-field qzw-select">${Object.entries(G).map(([t,a])=>`<option value="${t}" ${((s==null?void 0:s.attempt_scoring_mode)??"last")===t?"selected":""}>${a}</option>`).join("")}</select></div>
              </div>
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-open" class="qzw-label">เปิดสอบตั้งแต่ (ไม่บังคับ)</label><input id="qz-open" type="datetime-local" class="qzw-field" value="${s!=null&&s.open_at?s.open_at.slice(0,16):""}" /></div>
                <div class="qzw-field-group"><label for="qz-close" class="qzw-label">ปิดสอบเมื่อ (ไม่บังคับ)</label><input id="qz-close" type="datetime-local" class="qzw-field" value="${s!=null&&s.close_at?s.close_at.slice(0,16):""}" /></div>
              </div>
              <div class="qzw-field-group"><label for="qz-review" class="qzw-label">นักเรียนดูผลได้แค่ไหนหลังส่งข้อสอบ</label><select id="qz-review" class="qzw-field qzw-select">${Object.entries(ce).map(([t,a])=>`<option value="${t}" ${((s==null?void 0:s.review_policy)??"total_only")===t?"selected":""}>${a}</option>`).join("")}</select></div>
              <fieldset class="qzw-choice-list">
                <legend class="qzw-option-title">การตอบและผลตอบกลับ</legend>
                <label class="qzw-choice"><input type="checkbox" id="qz-lock-answer" ${s!=null&&s.lock_on_answer?"checked":""} /><span><span class="qzw-choice-title">ล็อกคำตอบทันทีที่เลือก</span><span class="qzw-choice-help">นักเรียนย้อนกลับไปแก้ข้อที่ตอบแล้วไม่ได้</span></span></label>
                <label class="qzw-choice"><input type="checkbox" id="qz-instant-bonus" ${s!=null&&s.instant_feedback_bonus?"checked":""} /><span><span class="qzw-choice-title">เปิดเอฟเฟกต์ถูก/ผิดทันที + ระบบคอมโบ/โบนัส</span><span class="qzw-choice-help">ตอบถูกติดกัน 3 ข้อ ปลดล็อกโบนัส (50/50, แก้ข้อที่เคยผิด, ต่อเวลา). ครบ 6 ข้อ ได้โบนัสเปิดเฉลยเพิ่ม. เปิดตัวเลือกนี้จะล็อกคำตอบทันทีให้อัตโนมัติด้วย.</span></span></label>
              </fieldset>
              <fieldset class="qzw-choice-list">
                <legend class="qzw-option-title">คำเตือนก่อนสอบ</legend>
                <label class="qzw-choice"><input type="checkbox" id="qz-deterrent" ${s!=null&&s.deterrent_notice_enabled?"checked":""} /><span><span class="qzw-choice-title">แสดงป้ายเตือน + ข้อความนาซีฮัตก่อนเริ่มสอบ</span><span class="qzw-choice-help">แสดงข้อความห้ามมองจอที่สอง/หนังสือ พร้อมขอบแดงระหว่างทำข้อสอบ (ข้อความจริงทุกคำ อิงจากระบบตรวจจับการออกนอกหน้าสอบที่มีอยู่แล้ว ไม่ได้อ้างว่ามีกล้อง/ตรวจจับสายตา)</span></span></label>
              </fieldset>
            </div>
          </section>

          <section data-step-panel="3" class="qzw-panel hidden">
            <h3>ผูกคะแนนและเลือกวิธีบันทึก</h3>
            <p class="qzw-panel-intro">เลือกช่องคะแนนของห้องนี้ หรือยืนยันว่าจะเก็บผลไว้ในแบบทดสอบโดยไม่ผูกกับสมุดคะแนน</p>
            <div class="qzw-field-group qzw-score-choice">
              <label for="qz-score-col" class="qzw-label">ช่องคะแนนปลายทาง <span class="qzw-required">จำเป็นต้องเลือก</span></label>
              <select id="qz-score-col" class="qzw-field qzw-select" aria-required="true"><option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option></select>
              <p id="qz-score-col-status" class="qzw-help" aria-live="polite">เลือกห้องเรียนในขั้นตอนแรก แล้วตรวจสอบช่องคะแนนของห้องนี้</p>
            </div>
            <div id="qz-score-details" class="qzw-score-details hidden">
              <div class="qzw-field-row">
                <div class="qzw-field-group"><label for="qz-score-max" class="qzw-label">คะแนนเต็มของแบบทดสอบ <span class="qzw-required">จำเป็น</span></label><input id="qz-score-max" type="number" min="0.01" step="0.5" class="qzw-field" value="${(s==null?void 0:s.score_max)??100}" aria-required="true" /><p class="qzw-help">คะแนนจากข้อสอบจะถูกปรับให้อยู่ในคะแนนเต็มนี้ก่อนบันทึก</p></div>
                <div class="qzw-field-group"><label for="qz-write-mode" class="qzw-label">ถ้าช่องนี้มีคะแนนอยู่แล้ว <span class="qzw-required">จำเป็น</span></label><select id="qz-write-mode" class="qzw-field qzw-select" aria-required="true">${Object.entries(H).map(([t,a])=>`<option value="${t}" ${((s==null?void 0:s.score_write_mode)??"highest")===t?"selected":""}>${a.label}</option>`).join("")}</select></div>
              </div>
              <p id="qz-write-mode-hint" class="qzw-help" aria-live="polite"></p>
              <div class="qzw-callout qzw-callout--warning qzw-score-note"><b>ตอนปิดสอบ:</b> ครูเลือกได้ว่าจะส่งคะแนนเข้าช่องนี้ทันที หรือปิดสอบโดยไม่เปลี่ยนสมุดคะแนนก่อน หากยังไม่ส่ง สามารถใช้ปุ่ม “ส่งคะแนนย้อนหลัง” ภายหลังได้</div>
            </div>
            <div id="qz-unbound-note" class="qzw-callout hidden"><b>เลือกไม่ผูกคะแนนแล้ว</b><br />คะแนนจะอยู่ในผลการทำแบบทดสอบ ครูสามารถตรวจดูผลและส่งคะแนนย้อนหลังได้เมื่อแก้ไขแบบทดสอบให้ผูกกับช่องคะแนน</div>
          </section>

          <section data-step-panel="4" class="qzw-panel hidden">
            <h3>ตรวจทานการตั้งค่าก่อนบันทึก</h3>
            <p class="qzw-panel-intro">ตรวจสอบทุกหัวข้อ โดยเฉพาะห้องเรียน ช่องคะแนน และวิธีเขียนคะแนนเก่า</p>
            <dl id="qz-review-summary" class="qzw-review-summary"></dl>
            <label class="qzw-review-confirm"><input type="checkbox" id="qz-review-confirm" /><span><b>ตรวจทานแล้ว</b><small>ยืนยันว่าห้องเรียน การตั้งค่าการสอบ และแนวทางบันทึกคะแนนถูกต้อง</small></span></label>
          </section>
        </div>
      </div>
    </main>

    <footer class="qzw-footer">
      <p id="qz-footer-hint" class="qzw-footer-hint">ตรวจค่าที่จำเป็นในแต่ละขั้นก่อนดำเนินการต่อ</p>
      <div class="qzw-footer-actions">
        <button type="button" id="qz-prev" class="qzw-button" disabled>ย้อนกลับ</button>
        <button type="button" id="qz-next" class="qzw-button qzw-button--primary">ถัดไป</button>
        <button type="button" id="qz-save" class="qzw-button qzw-button--primary hidden">บันทึกแบบทดสอบ</button>
      </div>
    </footer>
  `,document.body.appendChild(m);const e=t=>m.querySelector(t),_=e("#qz-class"),d=e("#qz-score-col"),M=e("#qz-score-col-status"),r=e("#qz-score-details"),z=e("#qz-unbound-note"),u=e("#qz-error-summary"),E=[...m.querySelectorAll("[data-step-panel]")],w=(t,a)=>({id:t,message:a}),B=()=>{var a;const t=h.find(o=>String(o.id)===String(_.value));return t?`${((a=t.master_subjects)==null?void 0:a.subject_name)??""} (${t.class_name??"—"})`:"ยังไม่ได้เลือกห้อง"},D=async(t=!1)=>{const a=_.value;return a?(!t&&L===a&&f==="loaded"||(L=a,f="loading",l=!1,d.disabled=!0,M.textContent="กำลังโหลดช่องคะแนนของห้องที่เลือก…",n=X(a).then(o=>{if(_.value!==a||!document.body.contains(m))return[];f="loaded",d.disabled=!1;const k=(s==null?void 0:s.class_id)===a&&o.some(I=>String(I.id)===String(s.score_column_id))?String(s.score_column_id):s&&!s.score_column_id?"":"__choose__";return d.innerHTML='<option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>'+o.map(I=>`<option value="${q(I.id)}">${q(I.assignment_name)}</option>`).join(""),d.value=k,M.textContent=o.length?`พบ ${o.length} ช่องคะแนนในห้อง ${B()}. เลือกช่องที่ต้องการ หรือเลือกไม่ผูกคะแนน`:`ห้อง ${B()} ยังไม่มีช่องคะแนนที่เลือกได้. หากต้องการบันทึกคะแนน ให้เพิ่มช่องที่หน้าบันทึกคะแนนก่อน หรือเลือกไม่ผูกคะแนน`,A(),o}).catch(()=>_.value!==a||!document.body.contains(m)?[]:(f="error",l=!0,d.disabled=!1,d.innerHTML='<option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>',d.value="__choose__",M.textContent="โหลดช่องคะแนนไม่สำเร็จ. กลับมาที่ขั้นนี้เพื่อลองใหม่ หรือเลือกไม่ผูกคะแนนโดยตั้งใจ",A(),[]))),n):(f="idle",L="",l=!1,d.innerHTML='<option value="__choose__">— เลือกช่องคะแนน หรือเลือกไม่ผูก —</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>',M.textContent="เลือกห้องเรียนในขั้นตอนแรก แล้วตรวจสอบช่องคะแนนของห้องนี้",[])},A=()=>{const t=!!(d.value&&d.value!=="__choose__");r.classList.toggle("hidden",!t),z.classList.toggle("hidden",d.value!==""),e("#qz-score-max").required=t,e("#qz-write-mode").required=t},O=()=>{const t=H[e("#qz-write-mode").value],a=e("#qz-write-mode").value==="add"?"การส่งคะแนนย้อนหลังซ้ำจะเพิ่มเฉพาะส่วนต่าง ไม่บวกคะแนนเดิมซ้ำ":"";e("#qz-write-mode-hint").innerHTML=`<b>${q((t==null?void 0:t.label)??"")}</b><span class="qzw-choice-help">${q((t==null?void 0:t.hint)??"")}${a?`<br>${q(a)}`:""}</span>`},K=()=>{var j,Q,le;const t=!!(d.value&&d.value!=="__choose__"),a=((le=(Q=(j=d.selectedOptions)==null?void 0:j[0])==null?void 0:Q.textContent)==null?void 0:le.trim())??"",o=H[e("#qz-write-mode").value],b=e("#qz-write-mode").value==="add"?"ส่งคะแนนย้อนหลังซ้ำจะเพิ่มเฉพาะส่วนต่าง ไม่บวกซ้ำ":(o==null?void 0:o.hint)??"",k=e("#qz-open").value,I=e("#qz-close").value,F=k||I?`${k||"ไม่กำหนดเวลาเปิด"} ถึง ${I||"ไม่กำหนดเวลาปิด"}`:"ไม่มีช่วงเวลาบังคับ",T=[["ห้องเรียนและชื่อ",`${B()}, ${e("#qz-title").value.trim()||"ยังไม่ได้ตั้งชื่อ"}`],["จำนวนข้อและเวลา",`${e("#qz-num").value||"—"} ข้อ, ${e("#qz-time").value||"—"} นาที, ${e("#qz-shuffle-q").checked?"สลับข้อ":"ไม่สลับข้อ"}, ${e("#qz-shuffle-c").checked?"สลับตัวเลือก":"ไม่สลับตัวเลือก"}`],["การทำและการแสดงผล",`${e("#qz-attempts").value||"—"} ครั้ง, นับ${G[e("#qz-scoring").value]??"—"}, ${ce[e("#qz-review").value]??"—"}`],["ช่วงเวลา",F],["การล็อก/เอฟเฟกต์/คำเตือน",`${e("#qz-lock-answer").checked||e("#qz-instant-bonus").checked?"ล็อกคำตอบ":"ย้อนแก้ได้"}, ${e("#qz-instant-bonus").checked?"เปิดคอมโบ/โบนัส":"ปิดคอมโบ/โบนัส"}, ${e("#qz-deterrent").checked?"เปิดป้ายเตือน":"ไม่แสดงป้ายเตือน"}`],["ช่องคะแนน",t?`${a}, คะแนนเต็ม ${e("#qz-score-max").value||"—"}`:d.value===""?"ตั้งใจไม่ผูกคะแนนกับสมุดคะแนน":"ยังไม่ได้เลือก. กลับไปเลือกช่องคะแนนหรือไม่ผูกคะแนน"],["วิธีบันทึก",t?`${(o==null?void 0:o.label)??"—"}. ${b}. ตอนปิดสอบครูเลือกได้ว่าจะส่งคะแนนทันทีหรือปิดโดยไม่เปลี่ยนสมุดคะแนน`:"ไม่มีการส่งคะแนนเข้าคอลัมน์คะแนนของห้อง"]];e("#qz-review-summary").innerHTML=T.map(([ue,pe])=>`<div class="qzw-review-row"><dt>${q(ue)}</dt><dd>${q(pe)}</dd></div>`).join("")},Y=t=>{const a=[];if(t===0&&(e("#qz-title").value.trim()||a.push(w("qz-title","กรุณาระบุชื่อแบบทดสอบ")),_.value||a.push(w("qz-class","กรุณาเลือกห้องเรียนที่จะให้สอบ"))),t===1){const o=Number(e("#qz-num").value),b=Number(e("#qz-time").value);!Number.isInteger(o)||o<1?a.push(w("qz-num","จำนวนข้อสอบต้องเป็นจำนวนเต็มตั้งแต่ 1 ข้อขึ้นไป")):o>g&&a.push(w("qz-num",`คลังมี ${g} ข้อ จึงสุ่มเกินจำนวนนี้ไม่ได้`)),(!Number.isInteger(b)||b<1)&&a.push(w("qz-time","เวลาสอบต้องเป็นจำนวนเต็มตั้งแต่ 1 นาทีขึ้นไป"))}if(t===2){const o=Number(e("#qz-attempts").value);(!Number.isInteger(o)||o<1)&&a.push(w("qz-attempts","จำนวนครั้งที่ทำได้ต้องเป็นจำนวนเต็มตั้งแต่ 1 ขึ้นไป"));const b=e("#qz-open").value?new Date(e("#qz-open").value):null,k=e("#qz-close").value?new Date(e("#qz-close").value):null;b&&Number.isNaN(b.getTime())&&a.push(w("qz-open","วันเวลาเปิดสอบไม่ถูกต้อง")),k&&Number.isNaN(k.getTime())&&a.push(w("qz-close","วันเวลาปิดสอบไม่ถูกต้อง")),b&&k&&b>=k&&a.push(w("qz-close","เวลาปิดสอบต้องอยู่หลังเวลาเปิดสอบ"))}if(t===3&&(d.value==="__choose__"&&a.push(w("qz-score-col","กรุณาเลือกช่องคะแนน หรือเลือกไม่ผูกคะแนนอย่างชัดเจน")),f==="loading"&&a.push(w("qz-score-col","รอโหลดช่องคะแนนให้เสร็จก่อน")),l&&d.value!==""&&a.push(w("qz-score-col","โหลดรายการช่องคะแนนไม่สำเร็จ กรุณาลองโหลดใหม่หรือเลือกไม่ผูกคะแนน")),d.value&&d.value!=="__choose__")){const o=Number(e("#qz-score-max").value);(!Number.isFinite(o)||o<=0)&&a.push(w("qz-score-max","คะแนนเต็มต้องมากกว่า 0")),Object.hasOwn(H,e("#qz-write-mode").value)||a.push(w("qz-write-mode","กรุณาเลือกวิธีจัดการคะแนนเดิม"))}return a},ee=t=>{u.innerHTML=`<b>ตรวจข้อมูลที่จำเป็นก่อนดำเนินการต่อ</b><ul class="qzw-error-list">${t.map(a=>`<li><a href="#${a.id}" data-error-field="${a.id}">${q(a.message)}</a></li>`).join("")}</ul>`,u.classList.remove("hidden"),t.forEach(({id:a})=>{const o=e(`#${a}`);o==null||o.setAttribute("aria-invalid","true"),o==null||o.setAttribute("aria-describedby","qz-error-summary")}),u.focus(),u.querySelectorAll("[data-error-field]").forEach(a=>a.addEventListener("click",o=>{o.preventDefault();const b=e(`#${a.dataset.errorField}`);b==null||b.focus(),b==null||b.scrollIntoView({behavior:"smooth",block:"center"})}))},R=async(t,{validate:a=!1}={})=>{if(a){const b=Y(c);if(b.length)return ee(b),!1}c=t,u.classList.add("hidden"),E.forEach((b,k)=>b.classList.toggle("hidden",k!==c)),m.querySelectorAll("[data-step-item]").forEach((b,k)=>{b.classList.toggle("is-current",k===c),b.classList.toggle("is-complete",k<c);const I=b.querySelector("[data-step-dot]");I.textContent=k<c?"✓":String(k+1)}),e("#qz-progress").style.transform=`scaleX(${(c+1)/p.length})`,e("#qz-progress").parentElement.setAttribute("aria-valuenow",String(c+1)),e("#qz-step-count").textContent=`ขั้นตอนที่ ${c+1} จาก ${p.length}: ${p[c].title}`,e("#qz-prev").disabled=c===0,e("#qz-next").classList.toggle("hidden",c===p.length-1),e("#qz-save").classList.toggle("hidden",c!==p.length-1),c===3&&await D(),c===4&&K(),e("#qz-wizard-scroll").scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});const o=E[c].querySelector("h3");return o==null||o.setAttribute("tabindex","-1"),o==null||o.focus({preventScroll:!0}),!0},te=[...document.body.children].filter(t=>t!==m),de=new Map(te.map(t=>[t,t.inert]));te.forEach(t=>{t.inert=!0}),document.documentElement.classList.add("qzw-open"),document.body.classList.add("qzw-open");const Z=()=>{var t;m.remove(),document.removeEventListener("keydown",se),de.forEach((a,o)=>{o.inert=a}),document.documentElement.classList.remove("qzw-open"),document.body.classList.remove("qzw-open"),(t=x==null?void 0:x.focus)==null||t.call(x,{preventScroll:!0}),typeof i=="function"&&i()},se=t=>{if(!document.body.contains(m))return;if(t.key==="Escape"){Z();return}if(t.key!=="Tab")return;const a=[...m.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), a[href], [tabindex="0"]')].filter(k=>k.getClientRects().length>0);if(!a.length)return;const o=a[0],b=a[a.length-1];t.shiftKey&&(document.activeElement===o||document.activeElement===m)?(t.preventDefault(),b.focus()):!t.shiftKey&&document.activeElement===b&&(t.preventDefault(),o.focus())};document.addEventListener("keydown",se),e("#qz-cancel").addEventListener("click",Z),e("#qz-prev").addEventListener("click",()=>{c>0&&R(c-1)}),e("#qz-next").addEventListener("click",()=>R(c+1,{validate:!0})),_.addEventListener("change",()=>{f="idle",L="",l=!1,d.value="__choose__",d.innerHTML='<option value="__choose__">เลือกช่องคะแนนหรือไม่ผูกคะแนน</option><option value="">ไม่ผูกคะแนนกับสมุดคะแนน</option>',M.textContent="เปลี่ยนห้องแล้ว โปรดตรวจสอบและเลือกช่องคะแนนของห้องใหม่นี้ในขั้นตอนผูกคะแนน",A()}),d.addEventListener("change",()=>{A(),K()}),e("#qz-write-mode").addEventListener("change",()=>{O(),K()}),e("#qz-instant-bonus").addEventListener("change",()=>{const t=e("#qz-lock-answer");e("#qz-instant-bonus").checked?(t.checked=!0,t.disabled=!0):t.disabled=!1}),A(),O(),e("#qz-review-confirm").addEventListener("change",t=>{e("#qz-save").disabled=!t.target.checked}),e("#qz-save").disabled=!0;const ae=t=>{var a;(a=t==null?void 0:t.matches)!=null&&a.call(t,"input, select, textarea")&&(t.removeAttribute("aria-invalid"),t.getAttribute("aria-describedby")==="qz-error-summary"&&t.removeAttribute("aria-describedby"))};m.addEventListener("input",t=>ae(t.target)),m.addEventListener("change",t=>ae(t.target)),e("#qz-save").addEventListener("click",async t=>{const a=t.currentTarget;if(!e("#qz-review-confirm").checked)return;const o=[0,1,2,3].flatMap(T=>Y(T));if(o.length){const T=o[0],j=T.id==="qz-title"||T.id==="qz-class"?0:["qz-num","qz-time"].includes(T.id)?1:["qz-attempts","qz-open","qz-close"].includes(T.id)?2:3;await R(j),ee(o.filter(Q=>j===0&&["qz-title","qz-class"].includes(Q.id)||j===1&&["qz-num","qz-time"].includes(Q.id)||j===2&&["qz-attempts","qz-open","qz-close"].includes(Q.id)||j===3));return}const b=e("#qz-title").value.trim(),k=e("#qz-open").value,I=e("#qz-close").value,F={bank_id:v.id,class_id:_.value,title:b,num_questions:parseInt(e("#qz-num").value,10),choice_label_style:(s==null?void 0:s.choice_label_style)??$.choice_label_style??"numeric",choice_labels_custom:(s==null?void 0:s.choice_labels_custom)??$.choice_labels_custom??null,quiz_language:(s==null?void 0:s.quiz_language)??$.quiz_language??"th",quiz_language_custom:(s==null?void 0:s.quiz_language_custom)??$.quiz_language_custom??null,shuffle_questions:e("#qz-shuffle-q").checked,shuffle_choices:e("#qz-shuffle-c").checked,lock_on_answer:e("#qz-instant-bonus").checked||e("#qz-lock-answer").checked,instant_feedback_bonus:e("#qz-instant-bonus").checked,deterrent_notice_enabled:e("#qz-deterrent").checked,max_attempts:parseInt(e("#qz-attempts").value,10),attempt_scoring_mode:e("#qz-scoring").value,time_limit_minutes:parseInt(e("#qz-time").value,10),open_at:k?new Date(k).toISOString():null,close_at:I?new Date(I).toISOString():null,review_policy:e("#qz-review").value,score_column_id:d.value||null,score_max:d.value?Number(e("#qz-score-max").value):null,score_write_mode:d.value?e("#qz-write-mode").value:"highest"};a.disabled=!0,a.setAttribute("aria-busy","true"),a.innerHTML='กำลังบันทึก <span class="qzw-spinner" aria-hidden="true"></span>';try{s?await xe(s.id,F):await _e({...F,status:"announced"}),N("บันทึกแล้ว","success"),Z(),typeof C=="function"&&await C(F),P(S,v)}catch(T){N("บันทึกไม่สำเร็จ: "+V(T),"error"),a.removeAttribute("aria-busy"),a.disabled=!e("#qz-review-confirm").checked,a.textContent="บันทึกแบบทดสอบ"}}),await R(0),e("#qz-title").focus({preventScroll:!0})}function Ce(S){const v=document.createElement("div");v.className="fixed inset-0 z-[95] bg-black/40 flex items-center justify-center p-4",v.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
      <div class="text-5xl mb-3">⭐</div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">ใช้โควตาทดลองฟรีครบแล้ว</h3>
      <p class="text-sm text-gray-500 leading-relaxed mb-5">คุณเริ่มสอบจริงให้นักเรียนทำไปแล้ว ${S} ครั้ง (ครบโควตาทดลองฟรี) โดเนทระดับ 2 ขึ้นไปเพื่อเริ่มสอบได้ไม่จำกัด — สร้างคลัง/ตั้งค่า/ทดลองทำเองยังทำได้ตามปกติ</p>
      <div class="space-y-2">
        <button id="paywall-donate" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">⭐ ดูรายละเอียดการสนับสนุน</button>
        <button id="paywall-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ปิด</button>
      </div>
    </div>
  `,document.body.appendChild(v),v.querySelector("#paywall-cancel").addEventListener("click",()=>v.remove()),v.querySelector("#paywall-donate").addEventListener("click",()=>{var h;v.remove(),(h=document.getElementById("btn-donate-float"))==null||h.click()})}function Ae(S,v){if(!S)return;const h=v.slice(0,S.num_questions);if(!h.length){N("คลังนี้ยังไม่มีคำถาม","warning");return}let g=0;const s={},y=document.createElement("div");y.className="fixed inset-0 z-[95] bg-white flex flex-col",document.body.appendChild(y);const C=()=>{var m,p,c;const $=h[g],x=s[$.id];y.innerHTML=`
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <div class="flex-1 min-w-0">
          <h2 class="font-bold text-gray-800 text-sm truncate">🧪 ทดลองทำ: ${q(S.title)}</h2>
          <p class="text-xs text-amber-600">โหมดทดลอง — ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียน</p>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-2xl mx-auto">
          <p class="text-xs text-gray-400 mb-2">ข้อ ${g+1} จาก ${h.length}</p>
          <p class="font-semibold text-gray-800 mb-4">${q($.question_text)}</p>
          <div class="space-y-2" id="qp-choices">
            ${$.choices.map((f,L)=>{const l=x===L,n=L===$.correct_choice_index;let e="border-gray-200 hover:bg-gray-50 cursor-pointer";return x!=null&&(n?e="border-emerald-400 bg-emerald-50":l?e="border-red-400 bg-red-50":e="border-gray-100 opacity-60"),`
              <label class="flex items-center gap-3 p-3 rounded-xl border ${e}">
                <input type="radio" name="qp-choice" class="qp-choice-input flex-shrink-0" data-i="${L}" ${l?"checked":""} ${x!=null?"disabled":""} />
                <span class="text-sm">${q(f)}</span>
              </label>`}).join("")}
          </div>
          ${x!=null&&$.explanation?`<p class="text-xs text-gray-500 mt-3 italic">💡 ${q($.explanation)}</p>`:""}
          <div class="flex justify-between gap-2 mt-6">
            <button id="qp-prev" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm" ${g===0?"disabled":""}>← ก่อนหน้า</button>
            ${g===h.length-1?'<button id="qp-finish" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm">ดูผลทดลอง</button>':'<button id="qp-next" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ถัดไป →</button>'}
          </div>
        </div>
      </div>
    `,Se().then(()=>Ee(y)).catch(()=>{}),y.querySelector("#qp-close").addEventListener("click",()=>y.remove()),y.querySelectorAll(".qp-choice-input").forEach(f=>f.addEventListener("change",()=>{s[$.id]=parseInt(f.dataset.i,10),C()})),(m=y.querySelector("#qp-prev"))==null||m.addEventListener("click",()=>{g--,C()}),(p=y.querySelector("#qp-next"))==null||p.addEventListener("click",()=>{g++,C()}),(c=y.querySelector("#qp-finish"))==null||c.addEventListener("click",i)},i=()=>{const $=h.filter(m=>s[m.id]===m.correct_choice_index).length,x=h.length>0?$/h.length*100:0;y.innerHTML=`
      <div class="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
        <button id="qp-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
        <h2 class="font-bold text-gray-800 text-sm">ผลการทดลองทำ</h2>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div class="max-w-md mx-auto text-center space-y-4">
          <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-lg">
            <p class="text-sm text-indigo-100 mb-1">ถูก ${$}/${h.length} ข้อ</p>
            <p class="text-5xl font-extrabold">${x.toFixed(1)}%</p>
          </div>
          <p class="text-xs text-amber-600">นี่คือการทดลองทำเท่านั้น ไม่นับเป็นการสอบจริง ไม่มีผลต่อโควตาหรือคะแนนนักเรียนใดๆ</p>
          <button id="qp-done" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">เสร็จสิ้น</button>
        </div>
      </div>
    `,y.querySelector("#qp-close").addEventListener("click",()=>y.remove()),y.querySelector("#qp-done").addEventListener("click",()=>y.remove())};C()}export{P as renderBankQuizzes};
