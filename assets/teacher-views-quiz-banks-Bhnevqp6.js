const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-config-DL_kI4yY.js","assets/ui-C-ZO4RB5.js","assets/api-BQaMiX9s.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/quiz-api-CcBTN73s.js","assets/teacher-views-utils-DMDc0a8I.js","assets/katex-loader-DUJObfzT.js"])))=>i.map(i=>d[i]);
import{a as c,g as I,_ as ee,h as P,b as q}from"./ui-C-ZO4RB5.js";import{c as te,d as W,e as oe,f as ae,h as ie,i as ne,j as le,u as re,k as se,l as ce,m as de}from"./quiz-api-CcBTN73s.js";import{p as X}from"./import-BUUT5wvS.js";import{c as ue}from"./ai-prompt-gate-D6R7FVed.js";import{setTitle as U,setContent as N,_htmlEsc as f,setActiveNav as xe,INPUT_CLS as $,SELECT_CLS as Q}from"./teacher-views-utils-DMDc0a8I.js";import{l as O,r as G}from"./katex-loader-DUJObfzT.js";import"./supabase-BV-W2lsh.js";const T=["คำถาม","ตัวเลือก1","ตัวเลือก2","ตัวเลือก3","ตัวเลือก4","ตัวเลือก5","ตัวเลือกที่ถูก","คำอธิบายเฉลย","ระดับความยาก","หมวดหมู่"];async function V(a){var o,l;if(!a)return;xe("quiz-system"),U("ระบบแบบทดสอบออนไลน์ (Quiz)"),N('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const n=await ae(a.id);N(`
    <div class="space-y-6">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        <div class="absolute right-0 bottom-0 translate-y-6 translate-x-4 opacity-10 text-8xl">📝</div>
        <h2 class="font-bold text-lg leading-tight mb-1">ระบบแบบทดสอบออนไลน์ (Quiz)</h2>
        <p class="text-xs text-indigo-100 leading-relaxed max-w-md">สร้างคลังข้อสอบแบบหลายตัวเลือก ไม่จำกัดจำนวนข้อ แล้วนำไปตั้งค่าแบบทดสอบให้นักเรียนสอบได้</p>
      </div>

      <div class="flex items-center justify-between">
        <h3 class="font-bold text-gray-700 text-sm">คลังข้อสอบของคุณ</h3>
        <button id="btn-create-bank" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition">＋ สร้างคลังใหม่</button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="bank-grid">
        ${n.length===0?`
          <div class="col-span-full bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <div class="text-5xl mb-4">📝</div>
            <h3 class="font-bold text-gray-700 text-base mb-1">ยังไม่มีคลังข้อสอบ</h3>
            <p class="text-sm text-gray-400 mb-6">สร้างคลังข้อสอบแรกของคุณเพื่อเริ่มเพิ่มคำถาม</p>
            <button id="btn-create-bank-empty" class="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-100 transition">＋ สร้างคลังข้อสอบแรก</button>
          </div>
        `:n.map(r=>`
          <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h4 class="font-bold text-gray-800 text-base line-clamp-1 mb-1">${f(r.name)}</h4>
              <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">${f(r.description||"ไม่มีคำอธิบาย")}</p>
            </div>
            <div class="flex gap-2 border-t border-gray-50 pt-3">
              <button class="btn-open-bank flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition" data-id="${r.id}">📋 จัดการคำถาม</button>
              <button class="btn-edit-bank px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold transition" data-id="${r.id}" title="แก้ไข">✏️</button>
              <button class="btn-delete-bank px-3 py-2 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold transition" data-id="${r.id}" title="ลบ">🗑️</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `);const e=()=>D(a,null);(o=document.getElementById("btn-create-bank"))==null||o.addEventListener("click",e),(l=document.getElementById("btn-create-bank-empty"))==null||l.addEventListener("click",e),document.querySelectorAll(".btn-open-bank").forEach(r=>r.addEventListener("click",()=>B(a,n.find(d=>d.id===r.dataset.id)))),document.querySelectorAll(".btn-edit-bank").forEach(r=>r.addEventListener("click",()=>D(a,n.find(d=>d.id===r.dataset.id)))),document.querySelectorAll(".btn-delete-bank").forEach(r=>r.addEventListener("click",async()=>{await P({title:"ลบคลังข้อสอบนี้?",message:"คำถามทั้งหมดในคลังจะถูกลบไปด้วย และแบบทดสอบที่อ้างอิงคลังนี้จะใช้งานต่อไม่ได้"})&&(await ie(r.dataset.id),c("ลบคลังข้อสอบแล้ว","success"),V(a))}))}function D(a,n){const e=document.createElement("div");e.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${n?"แก้ไขคลังข้อสอบ":"สร้างคลังข้อสอบใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อคลังข้อสอบ</label>
          <input id="bank-name" class="${$}" value="${f((n==null?void 0:n.name)??"")}" placeholder="เช่น บทที่ 1 - สมการเชิงเส้น" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบาย (ไม่บังคับ)</label>
          <textarea id="bank-desc" class="${$}" rows="2">${f((n==null?void 0:n.description)??"")}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="bank-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="bank-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector("#bank-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#bank-save").addEventListener("click",async o=>{const l=e.querySelector("#bank-name").value.trim();if(!l){c("กรุณาระบุชื่อคลังข้อสอบ","warning");return}q(o.target,!0);try{const r={name:l,description:e.querySelector("#bank-desc").value.trim()||null};n?await ce(n.id,r):await de({...r,teacher_id:a.id}),c("บันทึกแล้ว","success"),e.remove(),V(a)}catch(r){c("บันทึกไม่สำเร็จ: "+I(r),"error"),q(o.target,!1,"บันทึก")}})}async function B(a,n,e=null){if(!n)return;U(`คำถามในคลัง: ${n.name}`),N('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const o=await te(n.id),l=new Set;let r=!1;N(`
    <div class="space-y-4">
      <button id="btn-back-banks" class="text-sm text-gray-500 hover:text-gray-700">← กลับไปหน้าคลังข้อสอบ</button>

      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 class="font-bold text-gray-700 text-sm">คำถามทั้งหมด (${o.length} ข้อ)</h3>
          <p class="text-xs text-gray-400 mt-0.5">รองรับสมการคณิตศาสตร์ด้วย LaTeX — พิมพ์คร่อมด้วย <code>$...$</code> เช่น <code>$x^2+2x+1=0$</code></p>
        </div>
        <div class="flex gap-2">
          <button id="btn-download-template" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold">⬇️ ดาวน์โหลดเทมเพลต CSV</button>
          <label class="px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
            ⬆️ นำเข้า CSV
            <input type="file" id="csv-file-input" accept=".csv" class="sr-only" />
          </label>
          <button id="btn-add-question" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm">＋ เพิ่มคำถาม</button>
          <button id="btn-ai-generate" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm">✨ สร้าง Prompt ให้ AI ภายนอก</button>
          <button id="btn-go-quizzes" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm">🎯 สร้างแบบทดสอบและเลือกห้องเรียน</button>
          <button id="btn-manage-questions" class="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold ${o.length?"":"hidden"}">🗑️ จัดการข้อสอบ</button>
        </div>
      </div>

      <div id="question-management-toolbar" class="hidden flex-wrap items-center gap-2 rounded-2xl border border-red-100 bg-red-50/60 p-3">
        <span id="question-selection-count" class="text-xs font-semibold text-gray-600 flex-1">เลือก 0/${o.length} ข้อ</span>
        <button id="btn-select-all-questions" class="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-xs font-semibold">เลือกทั้งหมด</button>
        <button id="btn-delete-selected-questions" disabled class="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-200 text-white text-xs font-bold">ลบข้อที่เลือก (0)</button>
        <button id="btn-delete-all-questions" class="px-3 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold">ลบข้อสอบทั้งหมด (${o.length})</button>
      </div>

      <div class="space-y-3" id="question-list">
        ${o.length===0?`
          <div class="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <p class="text-sm text-gray-400">ยังไม่มีคำถามในคลังนี้ — เพิ่มเองทีละข้อ หรือนำเข้าจากไฟล์ CSV</p>
          </div>
        `:o.map((i,s)=>`
          <div class="q-question-card bg-white rounded-2xl border ${l.has(String(i.id))?"border-red-300":"border-gray-100"} p-4 shadow-sm" data-question-id="${f(i.id)}">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-start gap-3 flex-1 min-w-0">
                <label class="q-bulk-select-wrap ${r?"":"hidden"} pt-1 cursor-pointer" title="เลือกข้อ ${s+1}">
                  <input type="checkbox" class="q-bulk-select h-4 w-4 accent-red-600" value="${f(i.id)}" aria-label="เลือกข้อ ${s+1}" />
                </label>
                <div class="flex-1 min-w-0">
                <p class="text-xs text-gray-400 mb-1">ข้อ ${s+1}${i.difficulty?` · ${f(i.difficulty)}`:""}${i.category?` · ${f(i.category)}`:""}</p>
                <p class="font-semibold text-gray-800 text-sm mb-2">${f(i.question_text)}</p>
                <ul class="space-y-1">
                  ${i.choices.map((u,b)=>`
                    <li class="text-xs ${b===i.correct_choice_index?"text-emerald-700 font-bold":"text-gray-500"}">
                      ${b===i.correct_choice_index?"✓":"○"} ${f(u)}
                    </li>
                  `).join("")}
                </ul>
                </div>
              </div>
              <div class="q-row-actions ${r?"hidden":"flex"} flex-col gap-1.5 flex-shrink-0">
                <button class="btn-edit-q px-2 py-1 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs" data-id="${i.id}">✏️</button>
                <button class="btn-delete-q px-2 py-1 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs" data-id="${i.id}">🗑️</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `),O().then(()=>G(document.getElementById("question-list"))).catch(()=>{}),document.getElementById("btn-back-banks").addEventListener("click",()=>V(a));const d=document.getElementById("btn-manage-questions"),v=document.getElementById("question-management-toolbar"),k=()=>{const i=l.size;document.getElementById("question-selection-count").textContent=`เลือก ${i}/${o.length} ข้อ`;const s=document.getElementById("btn-delete-selected-questions");s.textContent=`ลบข้อที่เลือก (${i})`,s.disabled=i===0,document.getElementById("btn-select-all-questions").textContent=i===o.length?"ยกเลิกเลือกทั้งหมด":"เลือกทั้งหมด",document.querySelectorAll(".q-bulk-select").forEach(u=>{u.checked=l.has(u.value);const b=u.closest(".q-question-card");b==null||b.classList.toggle("border-red-300",u.checked),b==null||b.classList.toggle("border-gray-100",!u.checked)})};d.addEventListener("click",()=>{r=!r,r||l.clear(),d.textContent=r?"เสร็จสิ้น":"🗑️ จัดการข้อสอบ",d.classList.toggle("bg-red-50",r),v.classList.toggle("hidden",!r),v.classList.toggle("flex",r),document.querySelectorAll(".q-bulk-select-wrap").forEach(i=>i.classList.toggle("hidden",!r)),document.querySelectorAll(".q-row-actions").forEach(i=>i.classList.toggle("hidden",r)),document.querySelectorAll(".q-row-actions").forEach(i=>i.classList.toggle("flex",!r)),k()}),document.querySelectorAll(".q-bulk-select").forEach(i=>i.addEventListener("change",()=>{i.checked?l.add(i.value):l.delete(i.value),k()})),document.getElementById("btn-select-all-questions").addEventListener("click",()=>{l.size===o.length?l.clear():o.forEach(i=>l.add(String(i.id))),k()});const E=async(i,s=!1,u=null)=>{let b;try{b=s?await ne(n.id):i.length}catch(h){c("ตรวจนับข้อสอบไม่สำเร็จ: "+I(h),"error");return}if(!b)return;const S=f(n.name);if(await P({title:s?"ลบข้อสอบทั้งหมดในคลังนี้?":`ลบข้อสอบที่เลือก ${b} ข้อ?`,message:`จะลบ ${b} ข้อจากคลัง “${S}” เท่านั้น โดยไม่ลบประวัติและคะแนนสอบที่บันทึกแล้ว`,detail:"เมื่อยืนยันแล้วจะกู้คืนข้อสอบเหล่านี้ไม่ได้",confirmText:s?`ลบทั้งหมด ${b} ข้อ`:`ลบ ${b} ข้อ`})){u&&q(u,!0);try{const h=await le(n.id,s?null:i);h===b?c(`ลบข้อสอบแล้ว ${h} ข้อ`,"success"):c(`ลบได้ ${h} จาก ${b} ข้อ`,"warning"),B(a,n,e)}catch(h){c("ลบข้อสอบไม่สำเร็จ: "+I(h),"error"),u&&q(u,!1)}}};document.getElementById("btn-delete-selected-questions").addEventListener("click",i=>{E([...l],!1,i.currentTarget)}),document.getElementById("btn-delete-all-questions").addEventListener("click",i=>{E(null,!0,i.currentTarget)}),document.getElementById("btn-download-template").addEventListener("click",()=>{const i=[T.join(","),'"2+2 เท่ากับเท่าไหร่",3,4,5,6,,2,"2+2=4 ตามหลักการบวกเลข",ง่าย,คณิตศาสตร์พื้นฐาน'].join(`
`),s=encodeURI("data:text/csv;charset=utf-8,"+i),u=document.createElement("a");u.href=s,u.download="quiz_question_template.csv",document.body.appendChild(u),u.click(),document.body.removeChild(u)}),document.getElementById("csv-file-input").addEventListener("change",async i=>{const s=i.target.files[0];if(!s)return;const u=new FileReader;u.onload=async b=>{try{const L=X(b.target.result).map(K).filter(h=>h.question_text&&h.choices.length>=2&&Number.isInteger(h.correct_choice_index)&&h.correct_choice_index>=0&&h.correct_choice_index<h.choices.length);if(L.length===0){c("ไม่พบแถวข้อมูลที่ถูกต้องในไฟล์ CSV — ตรวจสอบรูปแบบตามเทมเพลต","warning");return}await W(n.id,L),c(`นำเข้าสำเร็จ ${L.length} ข้อ`,"success"),B(a,n,e)}catch(S){c("นำเข้าไม่สำเร็จ: "+I(S),"error")}finally{i.target.value=""}},u.readAsText(s)}),document.getElementById("btn-add-question").addEventListener("click",()=>F(a,n)),document.querySelectorAll(".btn-edit-q").forEach(i=>i.addEventListener("click",()=>F(a,n,o.find(s=>s.id===i.dataset.id)))),document.getElementById("btn-ai-generate").addEventListener("click",()=>he(a,n)),document.getElementById("btn-go-quizzes").addEventListener("click",async()=>{const{renderBankQuizzes:i}=await ee(async()=>{const{renderBankQuizzes:s}=await import("./teacher-views-quiz-config-DL_kI4yY.js");return{renderBankQuizzes:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));i(a,n,e)}),document.querySelectorAll(".btn-delete-q").forEach(i=>i.addEventListener("click",async()=>{await P({title:"ลบคำถามนี้?",message:"จะไม่กระทบแบบทดสอบที่เคยสุ่มข้อนี้ไปแล้ว"})&&(await oe(i.dataset.id),c("ลบคำถามแล้ว","success"),B(a,n,e))}))}function F(a,n,e=null){var E;const o=Math.min(5,Math.max(4,((E=e==null?void 0:e.choices)==null?void 0:E.length)??0)),l=document.createElement("div");l.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",l.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${e?"แก้ไขคำถาม":"เพิ่มคำถามใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำถาม</label>
          <textarea id="q-text" class="${$}" rows="2">${f((e==null?void 0:e.question_text)??"")}</textarea>
          <p class="text-xs text-gray-400 mt-1">รองรับสมการคณิตศาสตร์ด้วย LaTeX เช่น <code>$x^2+2x+1=0$</code></p>
          <div id="q-preview" class="hidden mt-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm"></div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ตัวเลือก (เลือกข้อที่ถูกต้องด้วยปุ่มวิทยุด้านซ้าย)</label>
          <div class="space-y-2" id="q-choices">
            ${Array.from({length:o},(i,s)=>{var u;return`
              <div class="flex items-center gap-2">
                <input type="radio" name="q-correct" value="${s}" ${s===((e==null?void 0:e.correct_choice_index)??0)?"checked":""} class="flex-shrink-0" />
                <input class="${$} q-choice-input" placeholder="ตัวเลือกที่ ${s+1}" value="${f(((u=e==null?void 0:e.choices)==null?void 0:u[s])??"")}" />
              </div>
            `}).join("")}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ระดับความยาก</label>
            <select id="q-difficulty" class="${Q}">
              <option value="" ${e!=null&&e.difficulty?"":"selected"}>— ไม่ระบุ —</option>
              <option value="ง่าย" ${(e==null?void 0:e.difficulty)==="ง่าย"?"selected":""}>ง่าย</option>
              <option value="ปานกลาง" ${(e==null?void 0:e.difficulty)==="ปานกลาง"?"selected":""}>ปานกลาง</option>
              <option value="ยาก" ${(e==null?void 0:e.difficulty)==="ยาก"?"selected":""}>ยาก</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">หมวดหมู่</label>
            <input id="q-category" class="${$}" placeholder="ไม่บังคับ" value="${f((e==null?void 0:e.category)??"")}" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบายเฉลย (ไม่บังคับ)</label>
          <textarea id="q-explanation" class="${$}" rows="2">${f((e==null?void 0:e.explanation)??"")}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="q-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="q-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(l);const r=l.querySelector("#q-preview"),d=l.querySelector("#q-text");let v=null;const k=()=>{clearTimeout(v),v=setTimeout(()=>{const i=d.value.trim();if(!i){r.classList.add("hidden");return}r.classList.remove("hidden"),r.textContent=i,O().then(()=>G(r)).catch(()=>{})},300)};d.addEventListener("input",k),l.querySelector("#q-cancel").addEventListener("click",()=>l.remove()),l.querySelector("#q-save").addEventListener("click",async i=>{const s=l.querySelector("#q-text").value.trim(),u=[...l.querySelectorAll(".q-choice-input")],b=parseInt(l.querySelector('input[name="q-correct"]:checked').value,10),S=u.map((_,j)=>({v:_.value.trim(),i:j})).filter(_=>_.v),L=S.map(_=>_.v),h=S.findIndex(_=>_.i===b);if(!s){c("กรุณาระบุคำถาม","warning");return}if(L.length<2){c("กรุณาระบุตัวเลือกอย่างน้อย 2 ข้อ","warning");return}if(h<0){c("กรุณาเลือกตัวเลือกที่ถูกต้องที่มีข้อความ","warning");return}q(i.target,!0);try{const _={question_text:s,choices:L,correct_choice_index:h,explanation:l.querySelector("#q-explanation").value.trim()||null,difficulty:l.querySelector("#q-difficulty").value||null,category:l.querySelector("#q-category").value.trim()||null};e?(await re(e.id,_),c("แก้ไขคำถามแล้ว","success")):(await se({..._,bank_id:n.id}),c("เพิ่มคำถามแล้ว","success")),l.remove(),B(a,n)}catch(_){c("บันทึกไม่สำเร็จ: "+I(_),"error"),q(i.target,!1,"บันทึก")}})}function pe(a){const n=Array.isArray(a==null?void 0:a.choices)?a.choices.map(o=>String(o??"").trim()).filter(Boolean):[];let e=Number.isInteger(a==null?void 0:a.correct_choice_index)?a.correct_choice_index:0;return(e<0||e>=n.length)&&(e=0),{question_text:String((a==null?void 0:a.question_text)??"").trim(),choices:n.length>=2?n:["",""],correct_choice_index:e,explanation:String((a==null?void 0:a.explanation)??"").trim(),difficulty:["ง่าย","ปานกลาง","ยาก"].includes(a==null?void 0:a.difficulty)?a.difficulty:null,confirmed:!1}}function H(a){if(!a.question_text.trim())return{ok:!1,error:"กรุณากรอกคำถามก่อนยืนยัน"};const n=a.choices.map((o,l)=>({v:o.trim(),ci:l})).filter(o=>o.v);return n.length<2?{ok:!1,error:"ต้องมีตัวเลือกที่มีข้อความอย่างน้อย 2 ข้อ"}:n.findIndex(o=>o.ci===a.correct_choice_index)<0?{ok:!1,error:"ตัวเลือกที่ถูกต้องต้องมีข้อความ กรุณาเลือกใหม่"}:{ok:!0}}function K(a){const n=[a.ตัวเลือก1,a.ตัวเลือก2,a.ตัวเลือก3,a.ตัวเลือก4,a.ตัวเลือก5].map(d=>(d??"").trim()),e=parseInt(a.ตัวเลือกที่ถูก,10)-1,o=n.map((d,v)=>({v:d,i:v})).filter(d=>d.v),l=o.map(d=>d.v),r=o.findIndex(d=>d.i===e);return{question_text:(a.คำถาม??"").trim(),choices:l,correct_choice_index:r,explanation:(a.คำอธิบายเฉลย??"").trim()||null,difficulty:(a.ระดับความยาก??"").trim()||null,category:(a.หมวดหมู่??"").trim()||null}}function Y(a){let n=(a??"").trim();return n.startsWith("```")&&(n=n.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),n}function be({topic:a,count:n,choicesCount:e,difficulty:o,format:l,language:r,choiceLabels:d}){const v=`Write every question, answer choice, and explanation entirely in ${r}. Do not switch to Thai unless the selected language is Thai. Keep JSON/CSV field names and difficulty values exactly as specified so this system can import them.`,k=d.join(", "),E=[`Generate exactly ${n} multiple-choice quiz questions about: "${a}".`,v,`The quiz interface will label the ${e} choices in this order: ${k}. Do not include these labels in the answer text; return each choice as answer text only.`,o?`All questions should be "${o}" difficulty.`:"Mix of difficulty levels is fine.","Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\frac{a}{b}$"];if(l==="csv"){const i=[T[0],...T.slice(1,1+e),...T.slice(6)].join(",");return[...E,"",`Reply with CSV data (comma-separated) using EXACTLY this header row first: ${i}`,`Fill all ${e} choice columns per row with plausible answers (exactly one correct).`,'"ตัวเลือกที่ถูก" column = the 1-based column number of the correct choice (e.g. 2 means the 2nd choice column).',"Quote any field that itself contains a comma with double quotes.","","Wrap the ENTIRE csv output (header row + all data rows, nothing else) in a single fenced code block using ```csv and ``` — no text before or after that block."].join(`
`)}return[...E,"","Reply as a JSON array. Each object must have:",`1. "question_text" — the question, entirely in ${r}`,`2. "choices" — array of exactly ${e} plausible answer strings (exactly one correct), in ${r}`,'3. "correct_choice_index" — 0-based index into choices of the correct answer',`4. "explanation" — a short explanation of why the answer is correct, entirely in ${r}`,'5. "difficulty" — one of "ง่าย", "ปานกลาง", "ยาก"',"",`Example: [{"question_text":"...","choices":[${Array(e).fill('"..."').join(",")}],"correct_choice_index":0,"explanation":"...","difficulty":"ปานกลาง"}]`,"","Wrap the ENTIRE answer (the whole JSON array, nothing else) in a single fenced code block using ```json and ``` — no text before or after that block."].join(`
`)}function me(a){const n=Y(a);let e;try{e=JSON.parse(n)}catch{const l=n.match(/\[\s*\{[\s\S]*\}\s*\]/);if(!l)throw new Error("ไม่พบ JSON อาร์เรย์ในคำตอบ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (มักเกิดจากขอจำนวนข้อมากเกินไปจนคำตอบถูกตัดกลางคัน)");try{e=JSON.parse(l[0])}catch{throw new Error("คำตอบไม่ครบ (JSON ถูกตัดกลางคัน) — ลองลดจำนวนข้อแล้วขอใหม่")}}if(!Array.isArray(e))throw new Error("คำตอบไม่ใช่ JSON อาร์เรย์");return e}function ge(a){const n=Y(a);if(n.trim().startsWith("["))return me(n);const e=X(n);if(!e.length)throw new Error("ไม่พบข้อมูลที่แปลงได้ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (ทั้งแถวหัวตารางและข้อมูล)");const o=e.map(K).filter(l=>l.question_text&&l.choices.length>=2&&Number.isInteger(l.correct_choice_index)&&l.correct_choice_index>=0&&l.correct_choice_index<l.choices.length);if(!o.length)throw new Error('แปลง CSV ไม่ได้ — ตรวจสอบว่าหัวตารางตรงกับที่คำสั่งกำหนด และคอลัมน์ "ตัวเลือกที่ถูก" ชี้ไปที่ตัวเลือกที่มีข้อความจริง');return o}function he(a,n){let e=[];const o=document.createElement("div");o.className="fixed inset-0 z-[95] bg-white flex flex-col",o.innerHTML=`
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">✨ สร้างข้อสอบด้วย AI ภายนอก</h3>
      <button id="ai-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
    </div>

    <div class="flex-1 overflow-y-auto p-5">
      <div class="max-w-3xl mx-auto space-y-4">
        <p class="text-xs text-gray-400">หน้านี้สร้างคำสั่งให้ครูนำไปใช้กับ ChatGPT, Gemini หรือ AI ภายนอก แล้วนำผลกลับมาตรวจสอบ — <strong>ระบบ ปพ.5 ไม่ส่งคำขอไปยัง AI API</strong> และครูต้องตรวจสอบก่อนบันทึกเข้าคลังเสมอ</p>

        <div class="bg-purple-50 border border-purple-100 rounded-2xl p-4 space-y-3">
          <div>
            <label class="text-xs font-semibold text-gray-600 mb-1 block">หัวข้อ/เนื้อหาที่ต้องการให้ออกข้อสอบ</label>
            <input id="ai-topic" class="${$}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว, การสังเคราะห์แสง, หลักธรรมอริยสัจ 4" />
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">จำนวนข้อ</label>
              <input id="ai-count" type="number" min="1" value="50" class="${$}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ตัวเลือกต่อข้อ</label>
              <input id="ai-choices-count" type="number" min="2" max="5" value="4" class="${$}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ระดับความยาก</label>
              <select id="ai-difficulty" class="${Q}">
                <option value="">— ผสมกันไป —</option>
                <option value="ง่าย">ง่าย</option>
                <option value="ปานกลาง">ปานกลาง</option>
                <option value="ยาก">ยาก</option>
              </select>
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ภาษาข้อสอบ</label>
              <select id="ai-language" class="${Q}">
                <option value="th">🇹🇭 ภาษาไทย</option>
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="jawi">يَاوِي</option>
                <option value="rumi">Bahasa Melayu (Rumi)</option>
                <option value="custom">ภาษาอื่น…</option>
              </select>
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">รูปแบบป้ายตัวเลือก</label>
              <select id="ai-choice-label" class="${Q}">
                <option value="numeric">1, 2, 3, 4…</option>
                <option value="upper">A, B, C, D…</option>
                <option value="lower">a, b, c, d…</option>
                <option value="thai">ก, ข, ค, ง…</option>
                <option value="arabic">أ, ب, ج, د…</option>
                <option value="custom">กำหนดป้ายเอง…</option>
              </select>
            </div>
          </div>
          <input id="ai-language-custom" class="${$} hidden" placeholder="ระบุภาษา เช่น Bahasa Indonesia, Français, اردو" />
          <input id="ai-choice-label-custom" class="${$} hidden" placeholder="ระบุป้ายคั่นด้วยจุลภาค เช่น أ, ب, ج, د" />

          <div id="ai-copy-panel" class="space-y-3 pt-1">
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">รูปแบบคำตอบที่จะขอจาก AI</label>
              <div class="flex gap-2">
                <button id="ai-format-json" class="ai-format-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-purple-600 bg-purple-600 text-white">JSON</button>
                <button id="ai-format-csv" class="ai-format-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-gray-200 text-gray-500">CSV</button>
              </div>
            </div>
            <button id="btn-ai-build-prompt" class="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-sm">สร้างคำสั่ง (Prompt)</button>
            <div id="ai-prompt-wrap" class="hidden space-y-2">
              <label class="text-xs font-semibold text-gray-600 block">คัดลอกคำสั่งนี้ไปวางใน ChatGPT, Gemini หรือ AI อื่นที่ต้องการ</label>
              <textarea id="ai-prompt-text" class="${$} font-mono text-xs" rows="6" readonly></textarea>
              <button id="btn-ai-copy-prompt" class="w-full py-2 rounded-xl border border-purple-300 text-purple-700 hover:bg-purple-100 font-bold text-xs">📋 คัดลอกคำสั่ง</button>
            </div>
            <div class="pt-2 border-t border-purple-100">
              <label class="text-xs font-semibold text-gray-600 mb-1 block">วางคำตอบที่ได้จาก AI ที่นี่ (JSON หรือ CSV ก็ได้ ระบบจะตรวจให้เอง)</label>
              <textarea id="ai-paste-response" class="${$} font-mono text-xs" rows="6" placeholder="วางคำตอบทั้งหมดที่ AI ตอบกลับมา"></textarea>
              <button id="btn-ai-parse-response" class="w-full mt-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm">แปลงคำตอบเป็นคำถามร่าง</button>
            </div>
          </div>
        </div>

        <div id="ai-draft-list" class="space-y-3"></div>
      </div>
    </div>

    <div class="flex gap-2 px-5 py-4 border-t border-gray-100 flex-shrink-0 bg-white">
      <button id="ai-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ปิด</button>
      <button id="ai-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm hidden">บันทึกข้อที่ยืนยันแล้ว (0)</button>
    </div>
  `,document.body.appendChild(o),o.querySelector("#ai-close").addEventListener("click",()=>o.remove()),o.querySelector("#ai-cancel").addEventListener("click",()=>o.remove());const l=o.querySelector("#ai-draft-list"),r=o.querySelector("#ai-save"),d=o.querySelector("#ai-format-json"),v=o.querySelector("#ai-format-csv"),k=o.querySelector("#ai-prompt-wrap"),E=ue({copyButton:o.querySelector("#btn-ai-copy-prompt"),watchRoot:o,watchSelector:"#ai-topic, #ai-count, #ai-choices-count, #ai-difficulty, #ai-language, #ai-language-custom, #ai-choice-label, #ai-choice-label-custom"});let i="json";const s=o.querySelector("#ai-language"),u=o.querySelector("#ai-language-custom"),b=o.querySelector("#ai-choice-label"),S=o.querySelector("#ai-choice-label-custom"),L={th:"ภาษาไทย",en:"formal English",ar:"اللغة العربية الفصحى",jawi:"bahasa Melayu tulisan Jawi (جاوي)",rumi:"Bahasa Melayu tulisan Rumi"},h={numeric:"12345",upper:"ABCDE",lower:"abcde",thai:"กขคงจ",arabic:"أبجد هـ".replace(/\s/g,"")},_=()=>s.value==="custom"?u.value.trim():L[s.value];s.addEventListener("change",()=>{u.classList.toggle("hidden",s.value!=="custom"),E.invalidate(),k.classList.add("hidden")}),b.addEventListener("change",()=>{S.classList.toggle("hidden",b.value!=="custom"),E.invalidate(),k.classList.add("hidden")});const j=y=>{i=y;const x=y==="json";d.classList.toggle("border-purple-600",x),d.classList.toggle("bg-purple-600",x),d.classList.toggle("text-white",x),d.classList.toggle("border-gray-200",!x),d.classList.toggle("text-gray-500",!x),v.classList.toggle("border-purple-600",!x),v.classList.toggle("bg-purple-600",!x),v.classList.toggle("text-white",!x),v.classList.toggle("border-gray-200",x),v.classList.toggle("text-gray-500",x),E.invalidate(),k.classList.add("hidden")};d.addEventListener("click",()=>j("json")),v.addEventListener("click",()=>j("csv"));const Z=()=>{const y=o.querySelector("#ai-topic").value.trim(),x=parseInt(o.querySelector("#ai-count").value,10)||50,t=Math.max(1,x);o.querySelector("#ai-count").value=t;const p=parseInt(o.querySelector("#ai-choices-count").value,10)||4,m=Math.min(5,Math.max(2,p));o.querySelector("#ai-choices-count").value=m;const g=o.querySelector("#ai-difficulty").value,w=b.value,C=S.value.split(",").map(J=>J.trim()).filter(Boolean),M=[...h[w]??h.numeric],R=w==="custom"?C:M;return{topic:y,count:t,rawCount:x,choicesCount:m,difficulty:g,language:_(),quizLanguage:s.value,quizLanguageCustom:s.value==="custom"?u.value.trim():null,choiceLabelStyle:w,choiceLabelsCustom:w==="custom"?C.join(","):null,choiceLabels:R}};o.querySelector("#btn-ai-build-prompt").addEventListener("click",()=>{const{topic:y,count:x,choicesCount:t,difficulty:p,language:m,choiceLabelStyle:g,choiceLabels:w,quizLanguage:C,quizLanguageCustom:M,choiceLabelsCustom:R}=Z();if(!y){c("กรุณาระบุหัวข้อที่ต้องการให้ AI ออกข้อสอบ","warning");return}if(!m){c("กรุณาระบุภาษาที่ต้องการ","warning");return}if(g==="custom"&&w.length<t){c(`กรุณาระบุป้ายตัวเลือกอย่างน้อย ${t} ป้าย โดยคั่นแต่ละป้ายด้วยจุลภาค`,"warning");return}const J=be({topic:y,count:x,choicesCount:t,difficulty:p,language:m,format:i,choiceLabels:w.slice(0,t)});try{localStorage.setItem(`quiz-prompt-settings:${n.id}`,JSON.stringify({choice_label_style:g,choice_labels_custom:R,quiz_language:C,quiz_language_custom:M}))}catch{}o.querySelector("#ai-prompt-text").value=J,E.markGenerated(),k.classList.remove("hidden")}),o.querySelector("#btn-ai-copy-prompt").addEventListener("click",async y=>{if(!E.isReady()){c("กรุณาสร้างคำสั่งใหม่หลังแก้ข้อมูลก่อนคัดลอก","warning");return}const x=o.querySelector("#ai-prompt-text");try{await navigator.clipboard.writeText(x.value),c("คัดลอกคำสั่งแล้ว — ไปวางใน AI ที่ต้องการได้เลย","success")}catch{x.select(),c("คัดลอกอัตโนมัติไม่ได้ — เลือกข้อความให้แล้ว กด Ctrl/Cmd+C เพื่อคัดลอกเอง","warning")}}),o.querySelector("#btn-ai-parse-response").addEventListener("click",y=>{const x=o.querySelector("#ai-paste-response").value;if(!x.trim()){c("กรุณาวางคำตอบจาก AI ก่อน","warning");return}try{const t=ge(x);e.push(...t.map(pe)),A(),o.querySelector("#ai-paste-response").value="",c(`แปลงคำตอบสำเร็จ ${t.length} ข้อ — กรุณาตรวจสอบก่อนยืนยัน`,"success")}catch(t){c("แปลงคำตอบไม่สำเร็จ: "+I(t),"error")}});function z(){const y=e.filter(x=>x.confirmed).length;r.textContent=`บันทึกข้อที่ยืนยันแล้ว (${y})`,r.classList.toggle("hidden",e.length===0)}function A(){var x;l.innerHTML=`${e.length?`
      <div class="flex justify-end">
        <button type="button" class="d-confirm-all px-4 py-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold">✅ ยืนยันทุกข้อ (${e.length})</button>
      </div>
    `:""}${e.map((t,p)=>`
      <div class="bg-white border ${t.confirmed?"border-emerald-300":"border-gray-200"} rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between">
          <p class="text-xs text-gray-400">ข้อร่างที่ ${p+1}${t.difficulty?` · ${f(t.difficulty)}`:""}</p>
          <button class="d-delete text-xs text-red-400 hover:text-red-600" data-idx="${p}">🗑️ ลบข้อนี้</button>
        </div>
        <textarea class="d-qtext ${$}" rows="2" data-idx="${p}">${f(t.question_text)}</textarea>
        <div class="space-y-1.5">
          ${t.choices.map((m,g)=>`
            <div class="d-choice-card flex items-center gap-2 rounded-xl border-2 px-3 py-1 cursor-pointer transition-colors ${g===t.correct_choice_index?"border-emerald-400 bg-emerald-50":"border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/40"}" data-idx="${p}" data-ci="${g}" role="radio" aria-checked="${g===t.correct_choice_index}" tabindex="0">
              <input type="radio" name="d-correct-${p}" value="${g}" ${g===t.correct_choice_index?"checked":""} class="d-correct-radio sr-only" data-idx="${p}" data-ci="${g}" tabindex="-1" />
              <span class="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${g===t.correct_choice_index?"border-emerald-600":"border-gray-300"}"><span class="w-2.5 h-2.5 rounded-full ${g===t.correct_choice_index?"bg-emerald-600":"bg-transparent"}"></span></span>
              <input class="d-choice w-full bg-transparent border-0 outline-none focus:ring-0 px-1 py-2 text-sm" value="${f(m)}" data-idx="${p}" data-ci="${g}" aria-label="ตัวเลือกที่ ${g+1}" />
            </div>
          `).join("")}
        </div>
        <textarea class="d-explanation ${$}" rows="1" placeholder="คำอธิบายเฉลย (ไม่บังคับ)" data-idx="${p}">${f(t.explanation)}</textarea>
        <label class="flex items-center gap-2 text-xs font-semibold ${t.confirmed?"text-emerald-700":"text-gray-500"}">
          <input type="checkbox" class="d-confirm" data-idx="${p}" ${t.confirmed?"checked":""} /> ✅ ตรวจสอบแล้ว ถูกต้อง พร้อมบันทึก
        </label>
      </div>
    `).join("")}`,O().then(()=>G(l)).catch(()=>{}),l.querySelectorAll(".d-qtext").forEach(t=>t.addEventListener("input",()=>{e[+t.dataset.idx].question_text=t.value})),l.querySelectorAll(".d-choice").forEach(t=>t.addEventListener("input",()=>{e[+t.dataset.idx].choices[+t.dataset.ci]=t.value}));const y=(t,p)=>{e[t].correct_choice_index=p,A()};l.querySelectorAll(".d-choice-card").forEach(t=>{const p=()=>y(+t.dataset.idx,+t.dataset.ci);t.addEventListener("click",m=>{m.target.closest(".d-choice")||p()}),t.addEventListener("keydown",m=>{m.target!==t||!["Enter"," "].includes(m.key)||(m.preventDefault(),p())})}),l.querySelectorAll(".d-explanation").forEach(t=>t.addEventListener("input",()=>{e[+t.dataset.idx].explanation=t.value})),l.querySelectorAll(".d-delete").forEach(t=>t.addEventListener("click",()=>{e.splice(+t.dataset.idx,1),A(),z()})),l.querySelectorAll(".d-confirm").forEach(t=>t.addEventListener("change",()=>{const p=+t.dataset.idx;if(t.checked){const m=H(e[p]);if(!m.ok){t.checked=!1,c(m.error,"warning");return}}e[p].confirmed=t.checked,A(),z()})),(x=l.querySelector(".d-confirm-all"))==null||x.addEventListener("click",()=>{const t=[];e.forEach((p,m)=>{const g=H(p);p.confirmed=g.ok,g.ok||t.push(m+1)}),A(),z(),t.length?c(`ยืนยันได้ ${e.length-t.length} ข้อ — ข้อ ${t.join(", ")} ยังต้องแก้ไขก่อน`,"warning"):c(`ยืนยันครบ ${e.length} ข้อแล้ว กดบันทึกเพื่อเพิ่มเข้าคลัง`,"success")}),z()}r.addEventListener("click",async()=>{const y=[],x=[];if(e.forEach(t=>{if(!t.confirmed){x.push(t);return}const p=t.choices.map((w,C)=>({v:w.trim(),ci:C})).filter(w=>w.v),m=p.map(w=>w.v),g=p.findIndex(w=>w.ci===t.correct_choice_index);if(!t.question_text.trim()||m.length<2||g<0){x.push(t);return}y.push({question_text:t.question_text.trim(),choices:m,correct_choice_index:g,explanation:t.explanation.trim()||null,difficulty:t.difficulty,category:null})}),y.length===0){c("ยังไม่มีข้อที่ยืนยันแล้วพร้อมบันทึก","warning");return}q(r,!0);try{await W(n.id,y),c(`บันทึก ${y.length} ข้อเข้าคลังเรียบร้อย`,"success"),e=x,A(),e.length===0&&(o.remove(),B(a,n))}catch(t){c("บันทึกไม่สำเร็จ: "+I(t),"error")}finally{q(r,!1),z()}})}export{B as _renderBankQuestions,V as renderQuizBanks};
