const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-config-DQI9dVu8.js","assets/ui-Bnz8GMvV.js","assets/api-CQwFwlFA.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/quiz-api-CIrXv0v0.js","assets/teacher-views-utils-Du8GiC29.js","assets/katex-loader-DUJObfzT.js"])))=>i.map(i=>d[i]);
import{a as d,g as I,_ as ie,h as O,b as L}from"./ui-Bnz8GMvV.js";import{c as se,d as Y,e as le,f as ce,h as de,i as ue,j as xe,u as pe,k as be,l as ge,m as me}from"./quiz-api-CIrXv0v0.js";import{p as Z}from"./import-CkRxZwdc.js";import{c as fe}from"./ai-prompt-gate-D6R7FVed.js";import{setTitle as ee,setContent as M,_htmlEsc as y,setActiveNav as he,INPUT_CLS as w,SELECT_CLS as te}from"./teacher-views-utils-Du8GiC29.js";import{l as P,r as V}from"./katex-loader-DUJObfzT.js";import{s as ye}from"./supabase-BV-W2lsh.js";const N=["คำถาม","ตัวเลือก1","ตัวเลือก2","ตัวเลือก3","ตัวเลือก4","ตัวเลือก5","ตัวเลือกที่ถูก","คำอธิบายเฉลย","ระดับความยาก","หมวดหมู่"];async function F(r){var t,i;if(!r)return;he("quiz-system"),ee("ระบบแบบทดสอบออนไลน์ (Quiz)"),M('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const n=await ce(r.id);M(`
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
        `:n.map(s=>`
          <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h4 class="font-bold text-gray-800 text-base line-clamp-1 mb-1">${y(s.name)}</h4>
              <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">${y(s.description||"ไม่มีคำอธิบาย")}</p>
            </div>
            <div class="flex gap-2 border-t border-gray-50 pt-3">
              <button class="btn-open-bank flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition" data-id="${s.id}">📋 จัดการคำถาม</button>
              <button class="btn-edit-bank px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold transition" data-id="${s.id}" title="แก้ไข">✏️</button>
              <button class="btn-delete-bank px-3 py-2 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold transition" data-id="${s.id}" title="ลบ">🗑️</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `);const e=()=>H(r,null);(t=document.getElementById("btn-create-bank"))==null||t.addEventListener("click",e),(i=document.getElementById("btn-create-bank-empty"))==null||i.addEventListener("click",e),document.querySelectorAll(".btn-open-bank").forEach(s=>s.addEventListener("click",()=>C(r,n.find(p=>p.id===s.dataset.id)))),document.querySelectorAll(".btn-edit-bank").forEach(s=>s.addEventListener("click",()=>H(r,n.find(p=>p.id===s.dataset.id)))),document.querySelectorAll(".btn-delete-bank").forEach(s=>s.addEventListener("click",async()=>{await O({title:"ลบคลังข้อสอบนี้?",message:"คำถามทั้งหมดในคลังจะถูกลบไปด้วย และแบบทดสอบที่อ้างอิงคลังนี้จะใช้งานต่อไม่ได้"})&&(await de(s.dataset.id),d("ลบคลังข้อสอบแล้ว","success"),F(r))}))}function H(r,n){const e=document.createElement("div");e.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${n?"แก้ไขคลังข้อสอบ":"สร้างคลังข้อสอบใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อคลังข้อสอบ</label>
          <input id="bank-name" class="${w}" value="${y((n==null?void 0:n.name)??"")}" placeholder="เช่น บทที่ 1 - สมการเชิงเส้น" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบาย (ไม่บังคับ)</label>
          <textarea id="bank-desc" class="${w}" rows="2">${y((n==null?void 0:n.description)??"")}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="bank-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="bank-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector("#bank-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#bank-save").addEventListener("click",async t=>{const i=e.querySelector("#bank-name").value.trim();if(!i){d("กรุณาระบุชื่อคลังข้อสอบ","warning");return}L(t.target,!0);try{const s={name:i,description:e.querySelector("#bank-desc").value.trim()||null};n?await ge(n.id,s):await me({...s,teacher_id:r.id}),d("บันทึกแล้ว","success"),e.remove(),F(r)}catch(s){d("บันทึกไม่สำเร็จ: "+I(s),"error"),L(t.target,!1,"บันทึก")}})}async function C(r,n,e=null){if(!n)return;ee(`คำถามในคลัง: ${n.name}`),M('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const t=await se(n.id),i=new Set;let s=!1;M(`
    <div class="space-y-4">
      <button id="btn-back-banks" class="text-sm text-gray-500 hover:text-gray-700">← กลับไปหน้าคลังข้อสอบ</button>

      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 class="font-bold text-gray-700 text-sm">คำถามทั้งหมด (${t.length} ข้อ)</h3>
          <p class="text-xs text-gray-400 mt-0.5">รองรับสมการคณิตศาสตร์ด้วย LaTeX — พิมพ์คร่อมด้วย <code>$...$</code> เช่น <code>$x^2+2x+1=0$</code></p>
        </div>
        <div class="flex gap-2">
          <button id="btn-download-template" class="px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold">⬇️ ดาวน์โหลดเทมเพลต CSV</button>
          <label class="px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold cursor-pointer">
            ⬆️ นำเข้า CSV
            <input type="file" id="csv-file-input" accept=".csv" class="sr-only" />
          </label>
          <button id="btn-add-question" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm">＋ เพิ่มคำถาม</button>
          <button id="btn-ai-generate" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm">✨ AI ช่วยคิดข้อสอบ</button>
          <button id="btn-go-quizzes" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm">🎯 แบบทดสอบจากคลังนี้</button>
          <button id="btn-manage-questions" class="px-4 py-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold ${t.length?"":"hidden"}">🗑️ จัดการข้อสอบ</button>
        </div>
      </div>

      <div id="question-management-toolbar" class="hidden flex-wrap items-center gap-2 rounded-2xl border border-red-100 bg-red-50/60 p-3">
        <span id="question-selection-count" class="text-xs font-semibold text-gray-600 flex-1">เลือก 0/${t.length} ข้อ</span>
        <button id="btn-select-all-questions" class="px-3 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-xs font-semibold">เลือกทั้งหมด</button>
        <button id="btn-delete-selected-questions" disabled class="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-200 text-white text-xs font-bold">ลบข้อที่เลือก (0)</button>
        <button id="btn-delete-all-questions" class="px-3 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold">ลบข้อสอบทั้งหมด (${t.length})</button>
      </div>

      <div class="space-y-3" id="question-list">
        ${t.length===0?`
          <div class="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <p class="text-sm text-gray-400">ยังไม่มีคำถามในคลังนี้ — เพิ่มเองทีละข้อ หรือนำเข้าจากไฟล์ CSV</p>
          </div>
        `:t.map((a,c)=>`
          <div class="q-question-card bg-white rounded-2xl border ${i.has(String(a.id))?"border-red-300":"border-gray-100"} p-4 shadow-sm" data-question-id="${y(a.id)}">
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-start gap-3 flex-1 min-w-0">
                <label class="q-bulk-select-wrap ${s?"":"hidden"} pt-1 cursor-pointer" title="เลือกข้อ ${c+1}">
                  <input type="checkbox" class="q-bulk-select h-4 w-4 accent-red-600" value="${y(a.id)}" aria-label="เลือกข้อ ${c+1}" />
                </label>
                <div class="flex-1 min-w-0">
                <p class="text-xs text-gray-400 mb-1">ข้อ ${c+1}${a.difficulty?` · ${y(a.difficulty)}`:""}${a.category?` · ${y(a.category)}`:""}</p>
                <p class="font-semibold text-gray-800 text-sm mb-2">${y(a.question_text)}</p>
                <ul class="space-y-1">
                  ${a.choices.map((u,b)=>`
                    <li class="text-xs ${b===a.correct_choice_index?"text-emerald-700 font-bold":"text-gray-500"}">
                      ${b===a.correct_choice_index?"✓":"○"} ${y(u)}
                    </li>
                  `).join("")}
                </ul>
                </div>
              </div>
              <div class="q-row-actions ${s?"hidden":"flex"} flex-col gap-1.5 flex-shrink-0">
                <button class="btn-edit-q px-2 py-1 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs" data-id="${a.id}">✏️</button>
                <button class="btn-delete-q px-2 py-1 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs" data-id="${a.id}">🗑️</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `),P().then(()=>V(document.getElementById("question-list"))).catch(()=>{}),document.getElementById("btn-back-banks").addEventListener("click",()=>F(r));const p=document.getElementById("btn-manage-questions"),q=document.getElementById("question-management-toolbar"),$=()=>{const a=i.size;document.getElementById("question-selection-count").textContent=`เลือก ${a}/${t.length} ข้อ`;const c=document.getElementById("btn-delete-selected-questions");c.textContent=`ลบข้อที่เลือก (${a})`,c.disabled=a===0,document.getElementById("btn-select-all-questions").textContent=a===t.length?"ยกเลิกเลือกทั้งหมด":"เลือกทั้งหมด",document.querySelectorAll(".q-bulk-select").forEach(u=>{u.checked=i.has(u.value);const b=u.closest(".q-question-card");b==null||b.classList.toggle("border-red-300",u.checked),b==null||b.classList.toggle("border-gray-100",!u.checked)})};p.addEventListener("click",()=>{s=!s,s||i.clear(),p.textContent=s?"เสร็จสิ้น":"🗑️ จัดการข้อสอบ",p.classList.toggle("bg-red-50",s),q.classList.toggle("hidden",!s),q.classList.toggle("flex",s),document.querySelectorAll(".q-bulk-select-wrap").forEach(a=>a.classList.toggle("hidden",!s)),document.querySelectorAll(".q-row-actions").forEach(a=>a.classList.toggle("hidden",s)),document.querySelectorAll(".q-row-actions").forEach(a=>a.classList.toggle("flex",!s)),$()}),document.querySelectorAll(".q-bulk-select").forEach(a=>a.addEventListener("change",()=>{a.checked?i.add(a.value):i.delete(a.value),$()})),document.getElementById("btn-select-all-questions").addEventListener("click",()=>{i.size===t.length?i.clear():t.forEach(a=>i.add(String(a.id))),$()});const E=async(a,c=!1,u=null)=>{let b;try{b=c?await ue(n.id):a.length}catch(f){d("ตรวจนับข้อสอบไม่สำเร็จ: "+I(f),"error");return}if(!b)return;const k=y(n.name);if(await O({title:c?"ลบข้อสอบทั้งหมดในคลังนี้?":`ลบข้อสอบที่เลือก ${b} ข้อ?`,message:`จะลบ ${b} ข้อจากคลัง “${k}” เท่านั้น โดยไม่ลบประวัติและคะแนนสอบที่บันทึกแล้ว`,detail:"เมื่อยืนยันแล้วจะกู้คืนข้อสอบเหล่านี้ไม่ได้",confirmText:c?`ลบทั้งหมด ${b} ข้อ`:`ลบ ${b} ข้อ`})){u&&L(u,!0);try{const f=await xe(n.id,c?null:a);f===b?d(`ลบข้อสอบแล้ว ${f} ข้อ`,"success"):d(`ลบได้ ${f} จาก ${b} ข้อ`,"warning"),C(r,n,e)}catch(f){d("ลบข้อสอบไม่สำเร็จ: "+I(f),"error"),u&&L(u,!1)}}};document.getElementById("btn-delete-selected-questions").addEventListener("click",a=>{E([...i],!1,a.currentTarget)}),document.getElementById("btn-delete-all-questions").addEventListener("click",a=>{E(null,!0,a.currentTarget)}),document.getElementById("btn-download-template").addEventListener("click",()=>{const a=[N.join(","),'"2+2 เท่ากับเท่าไหร่",3,4,5,6,,2,"2+2=4 ตามหลักการบวกเลข",ง่าย,คณิตศาสตร์พื้นฐาน'].join(`
`),c=encodeURI("data:text/csv;charset=utf-8,"+a),u=document.createElement("a");u.href=c,u.download="quiz_question_template.csv",document.body.appendChild(u),u.click(),document.body.removeChild(u)}),document.getElementById("csv-file-input").addEventListener("change",async a=>{const c=a.target.files[0];if(!c)return;const u=new FileReader;u.onload=async b=>{try{const _=Z(b.target.result).map(oe).filter(f=>f.question_text&&f.choices.length>=2&&Number.isInteger(f.correct_choice_index)&&f.correct_choice_index>=0&&f.correct_choice_index<f.choices.length);if(_.length===0){d("ไม่พบแถวข้อมูลที่ถูกต้องในไฟล์ CSV — ตรวจสอบรูปแบบตามเทมเพลต","warning");return}await Y(n.id,_),d(`นำเข้าสำเร็จ ${_.length} ข้อ`,"success"),C(r,n,e)}catch(k){d("นำเข้าไม่สำเร็จ: "+I(k),"error")}finally{a.target.value=""}},u.readAsText(c)}),document.getElementById("btn-add-question").addEventListener("click",()=>W(r,n)),document.querySelectorAll(".btn-edit-q").forEach(a=>a.addEventListener("click",()=>W(r,n,t.find(c=>c.id===a.dataset.id)))),document.getElementById("btn-ai-generate").addEventListener("click",()=>Ee(r,n)),document.getElementById("btn-go-quizzes").addEventListener("click",async()=>{const{renderBankQuizzes:a}=await ie(async()=>{const{renderBankQuizzes:c}=await import("./teacher-views-quiz-config-DQI9dVu8.js");return{renderBankQuizzes:c}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));a(r,n,e)}),document.querySelectorAll(".btn-delete-q").forEach(a=>a.addEventListener("click",async()=>{await O({title:"ลบคำถามนี้?",message:"จะไม่กระทบแบบทดสอบที่เคยสุ่มข้อนี้ไปแล้ว"})&&(await le(a.dataset.id),d("ลบคำถามแล้ว","success"),C(r,n,e))}))}function W(r,n,e=null){var E;const t=Math.min(5,Math.max(4,((E=e==null?void 0:e.choices)==null?void 0:E.length)??0)),i=document.createElement("div");i.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",i.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${e?"แก้ไขคำถาม":"เพิ่มคำถามใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำถาม</label>
          <textarea id="q-text" class="${w}" rows="2">${y((e==null?void 0:e.question_text)??"")}</textarea>
          <p class="text-xs text-gray-400 mt-1">รองรับสมการคณิตศาสตร์ด้วย LaTeX เช่น <code>$x^2+2x+1=0$</code></p>
          <div id="q-preview" class="hidden mt-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm"></div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ตัวเลือก (เลือกข้อที่ถูกต้องด้วยปุ่มวิทยุด้านซ้าย)</label>
          <div class="space-y-2" id="q-choices">
            ${Array.from({length:t},(a,c)=>{var u;return`
              <div class="flex items-center gap-2">
                <input type="radio" name="q-correct" value="${c}" ${c===((e==null?void 0:e.correct_choice_index)??0)?"checked":""} class="flex-shrink-0" />
                <input class="${w} q-choice-input" placeholder="ตัวเลือกที่ ${c+1}" value="${y(((u=e==null?void 0:e.choices)==null?void 0:u[c])??"")}" />
              </div>
            `}).join("")}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ระดับความยาก</label>
            <select id="q-difficulty" class="${te}">
              <option value="" ${e!=null&&e.difficulty?"":"selected"}>— ไม่ระบุ —</option>
              <option value="ง่าย" ${(e==null?void 0:e.difficulty)==="ง่าย"?"selected":""}>ง่าย</option>
              <option value="ปานกลาง" ${(e==null?void 0:e.difficulty)==="ปานกลาง"?"selected":""}>ปานกลาง</option>
              <option value="ยาก" ${(e==null?void 0:e.difficulty)==="ยาก"?"selected":""}>ยาก</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">หมวดหมู่</label>
            <input id="q-category" class="${w}" placeholder="ไม่บังคับ" value="${y((e==null?void 0:e.category)??"")}" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบายเฉลย (ไม่บังคับ)</label>
          <textarea id="q-explanation" class="${w}" rows="2">${y((e==null?void 0:e.explanation)??"")}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="q-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="q-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(i);const s=i.querySelector("#q-preview"),p=i.querySelector("#q-text");let q=null;const $=()=>{clearTimeout(q),q=setTimeout(()=>{const a=p.value.trim();if(!a){s.classList.add("hidden");return}s.classList.remove("hidden"),s.textContent=a,P().then(()=>V(s)).catch(()=>{})},300)};p.addEventListener("input",$),i.querySelector("#q-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#q-save").addEventListener("click",async a=>{const c=i.querySelector("#q-text").value.trim(),u=[...i.querySelectorAll(".q-choice-input")],b=parseInt(i.querySelector('input[name="q-correct"]:checked').value,10),k=u.map((v,T)=>({v:v.value.trim(),i:T})).filter(v=>v.v),_=k.map(v=>v.v),f=k.findIndex(v=>v.i===b);if(!c){d("กรุณาระบุคำถาม","warning");return}if(_.length<2){d("กรุณาระบุตัวเลือกอย่างน้อย 2 ข้อ","warning");return}if(f<0){d("กรุณาเลือกตัวเลือกที่ถูกต้องที่มีข้อความ","warning");return}L(a.target,!0);try{const v={question_text:c,choices:_,correct_choice_index:f,explanation:i.querySelector("#q-explanation").value.trim()||null,difficulty:i.querySelector("#q-difficulty").value||null,category:i.querySelector("#q-category").value.trim()||null};e?(await pe(e.id,v),d("แก้ไขคำถามแล้ว","success")):(await be({...v,bank_id:n.id}),d("เพิ่มคำถามแล้ว","success")),i.remove(),C(r,n)}catch(v){d("บันทึกไม่สำเร็จ: "+I(v),"error"),L(a.target,!1,"บันทึก")}})}function U(r){const n=Array.isArray(r==null?void 0:r.choices)?r.choices.map(t=>String(t??"").trim()).filter(Boolean):[];let e=Number.isInteger(r==null?void 0:r.correct_choice_index)?r.correct_choice_index:0;return(e<0||e>=n.length)&&(e=0),{question_text:String((r==null?void 0:r.question_text)??"").trim(),choices:n.length>=2?n:["",""],correct_choice_index:e,explanation:String((r==null?void 0:r.explanation)??"").trim(),difficulty:["ง่าย","ปานกลาง","ยาก"].includes(r==null?void 0:r.difficulty)?r.difficulty:null,confirmed:!1}}function K(r){if(!r.question_text.trim())return{ok:!1,error:"กรุณากรอกคำถามก่อนยืนยัน"};const n=r.choices.map((t,i)=>({v:t.trim(),ci:i})).filter(t=>t.v);return n.length<2?{ok:!1,error:"ต้องมีตัวเลือกที่มีข้อความอย่างน้อย 2 ข้อ"}:n.findIndex(t=>t.ci===r.correct_choice_index)<0?{ok:!1,error:"ตัวเลือกที่ถูกต้องต้องมีข้อความ กรุณาเลือกใหม่"}:{ok:!0}}function oe(r){const n=[r.ตัวเลือก1,r.ตัวเลือก2,r.ตัวเลือก3,r.ตัวเลือก4,r.ตัวเลือก5].map(p=>(p??"").trim()),e=parseInt(r.ตัวเลือกที่ถูก,10)-1,t=n.map((p,q)=>({v:p,i:q})).filter(p=>p.v),i=t.map(p=>p.v),s=t.findIndex(p=>p.i===e);return{question_text:(r.คำถาม??"").trim(),choices:i,correct_choice_index:s,explanation:(r.คำอธิบายเฉลย??"").trim()||null,difficulty:(r.ระดับความยาก??"").trim()||null,category:(r.หมวดหมู่??"").trim()||null}}function re(r){let n=(r??"").trim();return n.startsWith("```")&&(n=n.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),n}function ve({topic:r,count:n,choicesCount:e,difficulty:t}){return[`Generate a JSON array of exactly ${n} Thai multiple-choice quiz questions about: "${r}".`,t?`All questions should be "${t}" difficulty.`:"Mix of difficulty levels is fine.","Reply with exactly one JSON array wrapped in a single fenced Markdown code block using ```json and ``` so the AI response shows a clear copy-code button. No text before or after the code block.","","Each object must have:",'1. "question_text" — the question, in Thai',`2. "choices" — array of exactly ${e} plausible answer strings (exactly one correct)`,'3. "correct_choice_index" — 0-based index into choices of the correct answer','4. "explanation" — short Thai explanation of why that answer is correct','5. "difficulty" — one of "ง่าย", "ปานกลาง", "ยาก"',"","Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\frac{a}{b}$","",`Example: [{"question_text":"...","choices":[${Array(e).fill('"..."').join(",")}],"correct_choice_index":0,"explanation":"...","difficulty":"ปานกลาง"}]`].join(`
`)}function we({topic:r,count:n,choicesCount:e,difficulty:t,format:i}){const s=[`Generate exactly ${n} Thai multiple-choice quiz questions about: "${r}".`,t?`All questions should be "${t}" difficulty.`:"Mix of difficulty levels is fine.","Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\frac{a}{b}$"];if(i==="csv"){const p=[N[0],...N.slice(1,1+e),...N.slice(6)].join(",");return[...s,"",`Reply with CSV data (comma-separated) using EXACTLY this header row first: ${p}`,`Fill all ${e} choice columns per row with plausible answers (exactly one correct).`,'"ตัวเลือกที่ถูก" column = the 1-based column number of the correct choice (e.g. 2 means the 2nd choice column).',"Quote any field that itself contains a comma with double quotes.","","Wrap the ENTIRE csv output (header row + all data rows, nothing else) in a single fenced code block using ```csv and ``` — no text before or after that block."].join(`
`)}return[...s,"","Reply as a JSON array. Each object must have:",'1. "question_text" — the question, in Thai',`2. "choices" — array of exactly ${e} plausible answer strings (exactly one correct)`,'3. "correct_choice_index" — 0-based index into choices of the correct answer','4. "explanation" — short Thai explanation of why that answer is correct','5. "difficulty" — one of "ง่าย", "ปานกลาง", "ยาก"',"",`Example: [{"question_text":"...","choices":[${Array(e).fill('"..."').join(",")}],"correct_choice_index":0,"explanation":"...","difficulty":"ปานกลาง"}]`,"","Wrap the ENTIRE answer (the whole JSON array, nothing else) in a single fenced code block using ```json and ``` — no text before or after that block."].join(`
`)}function ne(r){const n=re(r);let e;try{e=JSON.parse(n)}catch{const i=n.match(/\[\s*\{[\s\S]*\}\s*\]/);if(!i)throw new Error("ไม่พบ JSON อาร์เรย์ในคำตอบ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (มักเกิดจากขอจำนวนข้อมากเกินไปจนคำตอบถูกตัดกลางคัน)");try{e=JSON.parse(i[0])}catch{throw new Error("คำตอบไม่ครบ (JSON ถูกตัดกลางคัน) — ลองลดจำนวนข้อแล้วขอใหม่")}}if(!Array.isArray(e))throw new Error("คำตอบไม่ใช่ JSON อาร์เรย์");return e}function $e(r){const n=re(r);if(n.trim().startsWith("["))return ne(n);const e=Z(n);if(!e.length)throw new Error("ไม่พบข้อมูลที่แปลงได้ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (ทั้งแถวหัวตารางและข้อมูล)");const t=e.map(oe).filter(i=>i.question_text&&i.choices.length>=2&&Number.isInteger(i.correct_choice_index)&&i.correct_choice_index>=0&&i.correct_choice_index<i.choices.length);if(!t.length)throw new Error('แปลง CSV ไม่ได้ — ตรวจสอบว่าหัวตารางตรงกับที่คำสั่งกำหนด และคอลัมน์ "ตัวเลือกที่ถูก" ชี้ไปที่ตัวเลือกที่มีข้อความจริง');return t}function Ee(r,n){let e=[];const t=document.createElement("div");t.className="fixed inset-0 z-[95] bg-white flex flex-col",t.innerHTML=`
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">✨ AI ช่วยคิดข้อสอบ</h3>
      <button id="ai-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
    </div>

    <div class="flex-1 overflow-y-auto p-5">
      <div class="max-w-3xl mx-auto space-y-4">
        <p class="text-xs text-gray-400">AI จะร่างคำถามให้เป็นแบบร่าง — <strong>ครูต้องตรวจสอบความถูกต้องก่อนยืนยันและบันทึกเข้าคลังจริงเสมอ</strong> (ไม่ว่าจะสร้างด้วยวิธีไหนก็ตาม)</p>

        <div class="flex gap-2">
          <button id="ai-mode-inapp" class="ai-mode-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-purple-600 bg-purple-600 text-white">🤖 ให้ AI ในระบบสร้างให้เลย</button>
          <button id="ai-mode-copy" class="ai-mode-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-gray-200 text-gray-500">📋 คัดลอกคำสั่งไปใช้ AI อื่น</button>
        </div>

        <div class="bg-purple-50 border border-purple-100 rounded-2xl p-4 space-y-3">
          <div>
            <label class="text-xs font-semibold text-gray-600 mb-1 block">หัวข้อ/เนื้อหาที่ต้องการให้ออกข้อสอบ</label>
            <input id="ai-topic" class="${w}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว, การสังเคราะห์แสง, หลักธรรมอริยสัจ 4" />
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <label id="ai-count-label" class="text-xs font-semibold text-gray-600 mb-1 block">จำนวนข้อ (สูงสุด 25/ครั้ง)</label>
              <input id="ai-count" type="number" min="1" value="5" class="${w}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ตัวเลือกต่อข้อ</label>
              <input id="ai-choices-count" type="number" min="2" max="5" value="4" class="${w}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ระดับความยาก</label>
              <select id="ai-difficulty" class="${te}">
                <option value="">— ผสมกันไป —</option>
                <option value="ง่าย">ง่าย</option>
                <option value="ปานกลาง">ปานกลาง</option>
                <option value="ยาก">ยาก</option>
              </select>
            </div>
          </div>

          <button id="btn-ai-run" class="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-sm">สร้างข้อสอบด้วย AI</button>

          <div id="ai-copy-panel" class="hidden space-y-3 pt-1">
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
              <textarea id="ai-prompt-text" class="${w} font-mono text-xs" rows="6" readonly></textarea>
              <button id="btn-ai-copy-prompt" class="w-full py-2 rounded-xl border border-purple-300 text-purple-700 hover:bg-purple-100 font-bold text-xs">📋 คัดลอกคำสั่ง</button>
            </div>
            <div class="pt-2 border-t border-purple-100">
              <label class="text-xs font-semibold text-gray-600 mb-1 block">วางคำตอบที่ได้จาก AI ที่นี่ (JSON หรือ CSV ก็ได้ ระบบจะตรวจให้เอง)</label>
              <textarea id="ai-paste-response" class="${w} font-mono text-xs" rows="6" placeholder="วางคำตอบทั้งหมดที่ AI ตอบกลับมา"></textarea>
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
  `,document.body.appendChild(t),t.querySelector("#ai-close").addEventListener("click",()=>t.remove()),t.querySelector("#ai-cancel").addEventListener("click",()=>t.remove());const i=t.querySelector("#ai-draft-list"),s=t.querySelector("#ai-save"),p=t.querySelector("#btn-ai-run"),q=t.querySelector("#ai-copy-panel"),$=t.querySelector("#ai-mode-inapp"),E=t.querySelector("#ai-mode-copy"),a=t.querySelector("#ai-count-label"),c=t.querySelector("#ai-format-json"),u=t.querySelector("#ai-format-csv"),b=t.querySelector("#ai-prompt-wrap"),k=fe({copyButton:t.querySelector("#btn-ai-copy-prompt"),watchRoot:t,watchSelector:"#ai-topic, #ai-count, #ai-choices-count, #ai-difficulty"});let _="inapp",f="json";const v=g=>{_!==g&&k.invalidate(),_=g;const l=g==="inapp";p.classList.toggle("hidden",!l),q.classList.toggle("hidden",l),$.classList.toggle("border-purple-600",l),$.classList.toggle("bg-purple-600",l),$.classList.toggle("text-white",l),$.classList.toggle("border-gray-200",!l),$.classList.toggle("text-gray-500",!l),E.classList.toggle("border-purple-600",!l),E.classList.toggle("bg-purple-600",!l),E.classList.toggle("text-white",!l),E.classList.toggle("border-gray-200",l),E.classList.toggle("text-gray-500",l),a.textContent=l?"จำนวนข้อ (สูงสุด 25/ครั้ง)":"จำนวนข้อ (ไม่จำกัด — สร้างที่ AI ภายนอก)"};$.addEventListener("click",()=>v("inapp")),E.addEventListener("click",()=>v("copy"));const T=g=>{f=g;const l=g==="json";c.classList.toggle("border-purple-600",l),c.classList.toggle("bg-purple-600",l),c.classList.toggle("text-white",l),c.classList.toggle("border-gray-200",!l),c.classList.toggle("text-gray-500",!l),u.classList.toggle("border-purple-600",!l),u.classList.toggle("bg-purple-600",!l),u.classList.toggle("text-white",!l),u.classList.toggle("border-gray-200",l),u.classList.toggle("text-gray-500",l),k.invalidate(),b.classList.add("hidden")};c.addEventListener("click",()=>T("json")),u.addEventListener("click",()=>T("csv"));const G=()=>{const g=t.querySelector("#ai-topic").value.trim(),l=parseInt(t.querySelector("#ai-count").value,10)||5,o=_==="inapp"?Math.min(25,Math.max(1,l)):Math.max(1,l);t.querySelector("#ai-count").value=o;const x=parseInt(t.querySelector("#ai-choices-count").value,10)||4,m=Math.min(5,Math.max(2,x));t.querySelector("#ai-choices-count").value=m;const h=t.querySelector("#ai-difficulty").value;return{topic:g,count:o,rawCount:l,choicesCount:m,difficulty:h}};t.querySelector("#btn-ai-build-prompt").addEventListener("click",()=>{const{topic:g,count:l,choicesCount:o,difficulty:x}=G();if(!g){d("กรุณาระบุหัวข้อที่ต้องการให้ AI ออกข้อสอบ","warning");return}const m=we({topic:g,count:l,choicesCount:o,difficulty:x,format:f});t.querySelector("#ai-prompt-text").value=m,k.markGenerated(),b.classList.remove("hidden")}),t.querySelector("#btn-ai-copy-prompt").addEventListener("click",async g=>{if(!k.isReady()){d("กรุณาสร้างคำสั่งใหม่หลังแก้ข้อมูลก่อนคัดลอก","warning");return}const l=t.querySelector("#ai-prompt-text");try{await navigator.clipboard.writeText(l.value),d("คัดลอกคำสั่งแล้ว — ไปวางใน AI ที่ต้องการได้เลย","success")}catch{l.select(),d("คัดลอกอัตโนมัติไม่ได้ — เลือกข้อความให้แล้ว กด Ctrl/Cmd+C เพื่อคัดลอกเอง","warning")}}),t.querySelector("#btn-ai-parse-response").addEventListener("click",g=>{const l=t.querySelector("#ai-paste-response").value;if(!l.trim()){d("กรุณาวางคำตอบจาก AI ก่อน","warning");return}try{const o=$e(l);e.push(...o.map(U)),A(),t.querySelector("#ai-paste-response").value="",d(`แปลงคำตอบสำเร็จ ${o.length} ข้อ — กรุณาตรวจสอบก่อนยืนยัน`,"success")}catch(o){d("แปลงคำตอบไม่สำเร็จ: "+I(o),"error")}});function j(){const g=e.filter(l=>l.confirmed).length;s.textContent=`บันทึกข้อที่ยืนยันแล้ว (${g})`,s.classList.toggle("hidden",e.length===0)}function A(){var l;i.innerHTML=`${e.length?`
      <div class="flex justify-end">
        <button type="button" class="d-confirm-all px-4 py-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold">✅ ยืนยันทุกข้อ (${e.length})</button>
      </div>
    `:""}${e.map((o,x)=>`
      <div class="bg-white border ${o.confirmed?"border-emerald-300":"border-gray-200"} rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between">
          <p class="text-xs text-gray-400">ข้อร่างที่ ${x+1}${o.difficulty?` · ${y(o.difficulty)}`:""}</p>
          <button class="d-delete text-xs text-red-400 hover:text-red-600" data-idx="${x}">🗑️ ลบข้อนี้</button>
        </div>
        <textarea class="d-qtext ${w}" rows="2" data-idx="${x}">${y(o.question_text)}</textarea>
        <div class="space-y-1.5">
          ${o.choices.map((m,h)=>`
            <div class="d-choice-card flex items-center gap-2 rounded-xl border-2 px-3 py-1 cursor-pointer transition-colors ${h===o.correct_choice_index?"border-emerald-400 bg-emerald-50":"border-gray-200 hover:border-emerald-200 hover:bg-emerald-50/40"}" data-idx="${x}" data-ci="${h}" role="radio" aria-checked="${h===o.correct_choice_index}" tabindex="0">
              <input type="radio" name="d-correct-${x}" value="${h}" ${h===o.correct_choice_index?"checked":""} class="d-correct-radio sr-only" data-idx="${x}" data-ci="${h}" tabindex="-1" />
              <span class="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${h===o.correct_choice_index?"border-emerald-600":"border-gray-300"}"><span class="w-2.5 h-2.5 rounded-full ${h===o.correct_choice_index?"bg-emerald-600":"bg-transparent"}"></span></span>
              <input class="d-choice w-full bg-transparent border-0 outline-none focus:ring-0 px-1 py-2 text-sm" value="${y(m)}" data-idx="${x}" data-ci="${h}" aria-label="ตัวเลือกที่ ${h+1}" />
            </div>
          `).join("")}
        </div>
        <textarea class="d-explanation ${w}" rows="1" placeholder="คำอธิบายเฉลย (ไม่บังคับ)" data-idx="${x}">${y(o.explanation)}</textarea>
        <label class="flex items-center gap-2 text-xs font-semibold ${o.confirmed?"text-emerald-700":"text-gray-500"}">
          <input type="checkbox" class="d-confirm" data-idx="${x}" ${o.confirmed?"checked":""} /> ✅ ตรวจสอบแล้ว ถูกต้อง พร้อมบันทึก
        </label>
      </div>
    `).join("")}`,P().then(()=>V(i)).catch(()=>{}),i.querySelectorAll(".d-qtext").forEach(o=>o.addEventListener("input",()=>{e[+o.dataset.idx].question_text=o.value})),i.querySelectorAll(".d-choice").forEach(o=>o.addEventListener("input",()=>{e[+o.dataset.idx].choices[+o.dataset.ci]=o.value}));const g=(o,x)=>{e[o].correct_choice_index=x,A()};i.querySelectorAll(".d-choice-card").forEach(o=>{const x=()=>g(+o.dataset.idx,+o.dataset.ci);o.addEventListener("click",m=>{m.target.closest(".d-choice")||x()}),o.addEventListener("keydown",m=>{m.target!==o||!["Enter"," "].includes(m.key)||(m.preventDefault(),x())})}),i.querySelectorAll(".d-explanation").forEach(o=>o.addEventListener("input",()=>{e[+o.dataset.idx].explanation=o.value})),i.querySelectorAll(".d-delete").forEach(o=>o.addEventListener("click",()=>{e.splice(+o.dataset.idx,1),A(),j()})),i.querySelectorAll(".d-confirm").forEach(o=>o.addEventListener("change",()=>{const x=+o.dataset.idx;if(o.checked){const m=K(e[x]);if(!m.ok){o.checked=!1,d(m.error,"warning");return}}e[x].confirmed=o.checked,A(),j()})),(l=i.querySelector(".d-confirm-all"))==null||l.addEventListener("click",()=>{const o=[];e.forEach((x,m)=>{const h=K(x);x.confirmed=h.ok,h.ok||o.push(m+1)}),A(),j(),o.length?d(`ยืนยันได้ ${e.length-o.length} ข้อ — ข้อ ${o.join(", ")} ยังต้องแก้ไขก่อน`,"warning"):d(`ยืนยันครบ ${e.length} ข้อแล้ว กดบันทึกเพื่อเพิ่มเข้าคลัง`,"success")}),j()}t.querySelector("#btn-ai-run").addEventListener("click",async g=>{var S,Q,D;const{topic:l,count:o,rawCount:x,choicesCount:m,difficulty:h}=G();if(!l){d("กรุณาระบุหัวข้อที่ต้องการให้ AI ออกข้อสอบ","warning");return}x>25&&d("จำนวนข้อเกินเพดานที่รองรับต่อครั้ง ปรับให้เป็น 25 ข้อแล้ว","warning"),L(g.target,!0);try{const R=ve({topic:l,count:o,choicesCount:m,difficulty:h}),ae=Math.min(8e3,600+o*300),{data:B,error:z}=await ye.functions.invoke("gemini-proxy",{body:{prompt:R,maxTokens:ae}});if(z||!B)throw new Error((z==null?void 0:z.message)??"AI Response is empty");let J="";(D=(Q=(S=B.candidates)==null?void 0:S[0])==null?void 0:Q.content)!=null&&D.parts?J=B.candidates[0].content.parts[0].text??"":B.text&&(J=B.text);const X=ne(J);e.push(...X.map(U)),A(),d(`AI ร่างข้อสอบมาแล้ว ${X.length} ข้อ — กรุณาตรวจสอบก่อนยืนยัน`,"success")}catch(R){d("AI ไม่สามารถร่างข้อสอบได้: "+I(R),"error")}finally{L(g.target,!1,"สร้างข้อสอบด้วย AI")}}),s.addEventListener("click",async()=>{const g=[],l=[];if(e.forEach(o=>{if(!o.confirmed){l.push(o);return}const x=o.choices.map((S,Q)=>({v:S.trim(),ci:Q})).filter(S=>S.v),m=x.map(S=>S.v),h=x.findIndex(S=>S.ci===o.correct_choice_index);if(!o.question_text.trim()||m.length<2||h<0){l.push(o);return}g.push({question_text:o.question_text.trim(),choices:m,correct_choice_index:h,explanation:o.explanation.trim()||null,difficulty:o.difficulty,category:null})}),g.length===0){d("ยังไม่มีข้อที่ยืนยันแล้วพร้อมบันทึก","warning");return}L(s,!0);try{await Y(n.id,g),d(`บันทึก ${g.length} ข้อเข้าคลังเรียบร้อย`,"success"),e=l,A(),e.length===0&&(t.remove(),C(r,n))}catch(o){d("บันทึกไม่สำเร็จ: "+I(o),"error")}finally{L(s,!1),j()}})}export{C as _renderBankQuestions,F as renderQuizBanks};
