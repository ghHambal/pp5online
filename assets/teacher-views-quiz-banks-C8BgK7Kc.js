const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-quiz-config-qCtfujoq.js","assets/ui-Dh03k4iX.js","assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/quiz-api-DaBneRGn.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/katex-loader-DUJObfzT.js"])))=>i.map(i=>d[i]);
import{a as d,_ as oe,f as D,b as _}from"./ui-Dh03k4iX.js";import{g as ae,b as H,d as re,a as ie,c as se,u as ne,e as ce,f as le,h as de}from"./quiz-api-DaBneRGn.js";import{p as W}from"./import-D0GLDW1_.js";import{setTitle as U,setContent as Q,_htmlEsc as u,setActiveNav as ue,INPUT_CLS as m,SELECT_CLS as Y}from"./teacher-views-utils-B2Iz3UWp.js";import{l as J,r as O}from"./katex-loader-DUJObfzT.js";import{s as xe}from"./supabase-BV-W2lsh.js";const B=["คำถาม","ตัวเลือก1","ตัวเลือก2","ตัวเลือก3","ตัวเลือก4","ตัวเลือก5","ตัวเลือกที่ถูก","คำอธิบายเฉลย","ระดับความยาก","หมวดหมู่"];async function R(a){var o,t;if(!a)return;ue("quiz-system"),U("ระบบแบบทดสอบออนไลน์ (Quiz)"),Q('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const s=await ie(a.id);Q(`
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
        ${s.length===0?`
          <div class="col-span-full bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <div class="text-5xl mb-4">📝</div>
            <h3 class="font-bold text-gray-700 text-base mb-1">ยังไม่มีคลังข้อสอบ</h3>
            <p class="text-sm text-gray-400 mb-6">สร้างคลังข้อสอบแรกของคุณเพื่อเริ่มเพิ่มคำถาม</p>
            <button id="btn-create-bank-empty" class="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-100 transition">＋ สร้างคลังข้อสอบแรก</button>
          </div>
        `:s.map(n=>`
          <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div>
              <h4 class="font-bold text-gray-800 text-base line-clamp-1 mb-1">${u(n.name)}</h4>
              <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">${u(n.description||"ไม่มีคำอธิบาย")}</p>
            </div>
            <div class="flex gap-2 border-t border-gray-50 pt-3">
              <button class="btn-open-bank flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition" data-id="${n.id}">📋 จัดการคำถาม</button>
              <button class="btn-edit-bank px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold transition" data-id="${n.id}" title="แก้ไข">✏️</button>
              <button class="btn-delete-bank px-3 py-2 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold transition" data-id="${n.id}" title="ลบ">🗑️</button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `);const e=()=>F(a,null);(o=document.getElementById("btn-create-bank"))==null||o.addEventListener("click",e),(t=document.getElementById("btn-create-bank-empty"))==null||t.addEventListener("click",e),document.querySelectorAll(".btn-open-bank").forEach(n=>n.addEventListener("click",()=>C(a,s.find(c=>c.id===n.dataset.id)))),document.querySelectorAll(".btn-edit-bank").forEach(n=>n.addEventListener("click",()=>F(a,s.find(c=>c.id===n.dataset.id)))),document.querySelectorAll(".btn-delete-bank").forEach(n=>n.addEventListener("click",async()=>{await D({title:"ลบคลังข้อสอบนี้?",message:"คำถามทั้งหมดในคลังจะถูกลบไปด้วย และแบบทดสอบที่อ้างอิงคลังนี้จะใช้งานต่อไม่ได้"})&&(await se(n.dataset.id),d("ลบคลังข้อสอบแล้ว","success"),R(a))}))}function F(a,s){const e=document.createElement("div");e.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${s?"แก้ไขคลังข้อสอบ":"สร้างคลังข้อสอบใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ชื่อคลังข้อสอบ</label>
          <input id="bank-name" class="${m}" value="${u((s==null?void 0:s.name)??"")}" placeholder="เช่น บทที่ 1 - สมการเชิงเส้น" />
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบาย (ไม่บังคับ)</label>
          <textarea id="bank-desc" class="${m}" rows="2">${u((s==null?void 0:s.description)??"")}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="bank-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="bank-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector("#bank-cancel").addEventListener("click",()=>e.remove()),e.querySelector("#bank-save").addEventListener("click",async o=>{const t=e.querySelector("#bank-name").value.trim();if(!t){d("กรุณาระบุชื่อคลังข้อสอบ","warning");return}_(o.target,!0);try{const n={name:t,description:e.querySelector("#bank-desc").value.trim()||null};s?await le(s.id,n):await de({...n,teacher_id:a.id}),d("บันทึกแล้ว","success"),e.remove(),R(a)}catch(n){d("บันทึกไม่สำเร็จ: "+(n.message??""),"error"),_(o.target,!1,"บันทึก")}})}async function C(a,s,e=null){if(!s)return;U(`คำถามในคลัง: ${s.name}`),Q('<div class="flex justify-center py-12 text-gray-400">กำลังโหลดข้อมูล...</div>');const o=await ae(s.id);Q(`
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
          <button id="btn-ai-generate" class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm">✨ AI ช่วยคิดข้อสอบ</button>
          <button id="btn-go-quizzes" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm">🎯 แบบทดสอบจากคลังนี้</button>
        </div>
      </div>

      <div class="space-y-3" id="question-list">
        ${o.length===0?`
          <div class="bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <p class="text-sm text-gray-400">ยังไม่มีคำถามในคลังนี้ — เพิ่มเองทีละข้อ หรือนำเข้าจากไฟล์ CSV</p>
          </div>
        `:o.map((t,n)=>`
          <div class="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <p class="text-xs text-gray-400 mb-1">ข้อ ${n+1}${t.difficulty?` · ${u(t.difficulty)}`:""}${t.category?` · ${u(t.category)}`:""}</p>
                <p class="font-semibold text-gray-800 text-sm mb-2">${u(t.question_text)}</p>
                <ul class="space-y-1">
                  ${t.choices.map((c,y)=>`
                    <li class="text-xs ${y===t.correct_choice_index?"text-emerald-700 font-bold":"text-gray-500"}">
                      ${y===t.correct_choice_index?"✓":"○"} ${u(c)}
                    </li>
                  `).join("")}
                </ul>
              </div>
              <div class="flex flex-col gap-1.5 flex-shrink-0">
                <button class="btn-edit-q px-2 py-1 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs" data-id="${t.id}">✏️</button>
                <button class="btn-delete-q px-2 py-1 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 text-xs" data-id="${t.id}">🗑️</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `),J().then(()=>O(document.getElementById("question-list"))).catch(()=>{}),document.getElementById("btn-back-banks").addEventListener("click",()=>R(a)),document.getElementById("btn-download-template").addEventListener("click",()=>{const t=[B.join(","),'"2+2 เท่ากับเท่าไหร่",3,4,5,6,,2,"2+2=4 ตามหลักการบวกเลข",ง่าย,คณิตศาสตร์พื้นฐาน'].join(`
`),n=encodeURI("data:text/csv;charset=utf-8,"+t),c=document.createElement("a");c.href=n,c.download="quiz_question_template.csv",document.body.appendChild(c),c.click(),document.body.removeChild(c)}),document.getElementById("csv-file-input").addEventListener("change",async t=>{const n=t.target.files[0];if(!n)return;const c=new FileReader;c.onload=async y=>{try{const g=W(y.target.result).map(K).filter(x=>x.question_text&&x.choices.length>=2&&Number.isInteger(x.correct_choice_index)&&x.correct_choice_index>=0&&x.correct_choice_index<x.choices.length);if(g.length===0){d("ไม่พบแถวข้อมูลที่ถูกต้องในไฟล์ CSV — ตรวจสอบรูปแบบตามเทมเพลต","warning");return}await H(s.id,g),d(`นำเข้าสำเร็จ ${g.length} ข้อ`,"success"),C(a,s,e)}catch(h){d("นำเข้าไม่สำเร็จ: "+(h.message??""),"error")}finally{t.target.value=""}},c.readAsText(n)}),document.getElementById("btn-add-question").addEventListener("click",()=>G(a,s)),document.querySelectorAll(".btn-edit-q").forEach(t=>t.addEventListener("click",()=>G(a,s,o.find(n=>n.id===t.dataset.id)))),document.getElementById("btn-ai-generate").addEventListener("click",()=>fe(a,s)),document.getElementById("btn-go-quizzes").addEventListener("click",async()=>{const{renderBankQuizzes:t}=await oe(async()=>{const{renderBankQuizzes:n}=await import("./teacher-views-quiz-config-qCtfujoq.js");return{renderBankQuizzes:n}},__vite__mapDeps([0,1,2,3,4,5,6]));t(a,s,e)}),document.querySelectorAll(".btn-delete-q").forEach(t=>t.addEventListener("click",async()=>{await D({title:"ลบคำถามนี้?",message:"จะไม่กระทบแบบทดสอบที่เคยสุ่มข้อนี้ไปแล้ว"})&&(await re(t.dataset.id),d("ลบคำถามแล้ว","success"),C(a,s,e))}))}function G(a,s,e=null){var g;const o=Math.min(5,Math.max(4,((g=e==null?void 0:e.choices)==null?void 0:g.length)??0)),t=document.createElement("div");t.className="fixed inset-0 z-[90] bg-black/40 flex items-center justify-center p-4 overflow-y-auto",t.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-lg shadow-2xl my-8">
      <h3 class="font-bold text-gray-800 text-lg mb-4">${e?"แก้ไขคำถาม":"เพิ่มคำถามใหม่"}</h3>
      <div class="space-y-3">
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำถาม</label>
          <textarea id="q-text" class="${m}" rows="2">${u((e==null?void 0:e.question_text)??"")}</textarea>
          <p class="text-xs text-gray-400 mt-1">รองรับสมการคณิตศาสตร์ด้วย LaTeX เช่น <code>$x^2+2x+1=0$</code></p>
          <div id="q-preview" class="hidden mt-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm"></div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">ตัวเลือก (เลือกข้อที่ถูกต้องด้วยปุ่มวิทยุด้านซ้าย)</label>
          <div class="space-y-2" id="q-choices">
            ${Array.from({length:o},(x,b)=>{var v;return`
              <div class="flex items-center gap-2">
                <input type="radio" name="q-correct" value="${b}" ${b===((e==null?void 0:e.correct_choice_index)??0)?"checked":""} class="flex-shrink-0" />
                <input class="${m} q-choice-input" placeholder="ตัวเลือกที่ ${b+1}" value="${u(((v=e==null?void 0:e.choices)==null?void 0:v[b])??"")}" />
              </div>
            `}).join("")}
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">ระดับความยาก</label>
            <select id="q-difficulty" class="${Y}">
              <option value="" ${e!=null&&e.difficulty?"":"selected"}>— ไม่ระบุ —</option>
              <option value="ง่าย" ${(e==null?void 0:e.difficulty)==="ง่าย"?"selected":""}>ง่าย</option>
              <option value="ปานกลาง" ${(e==null?void 0:e.difficulty)==="ปานกลาง"?"selected":""}>ปานกลาง</option>
              <option value="ยาก" ${(e==null?void 0:e.difficulty)==="ยาก"?"selected":""}>ยาก</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-semibold text-gray-500 mb-1 block">หมวดหมู่</label>
            <input id="q-category" class="${m}" placeholder="ไม่บังคับ" value="${u((e==null?void 0:e.category)??"")}" />
          </div>
        </div>
        <div>
          <label class="text-xs font-semibold text-gray-500 mb-1 block">คำอธิบายเฉลย (ไม่บังคับ)</label>
          <textarea id="q-explanation" class="${m}" rows="2">${u((e==null?void 0:e.explanation)??"")}</textarea>
        </div>
      </div>
      <div class="flex gap-2 mt-5">
        <button id="q-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ยกเลิก</button>
        <button id="q-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">บันทึก</button>
      </div>
    </div>
  `,document.body.appendChild(t);const n=t.querySelector("#q-preview"),c=t.querySelector("#q-text");let y=null;const h=()=>{clearTimeout(y),y=setTimeout(()=>{const x=c.value.trim();if(!x){n.classList.add("hidden");return}n.classList.remove("hidden"),n.textContent=x,J().then(()=>O(n)).catch(()=>{})},300)};c.addEventListener("input",h),t.querySelector("#q-cancel").addEventListener("click",()=>t.remove()),t.querySelector("#q-save").addEventListener("click",async x=>{const b=t.querySelector("#q-text").value.trim(),v=[...t.querySelectorAll(".q-choice-input")],j=parseInt(t.querySelector('input[name="q-correct"]:checked').value,10),S=v.map((p,k)=>({v:p.value.trim(),i:k})).filter(p=>p.v),L=S.map(p=>p.v),I=S.findIndex(p=>p.i===j);if(!b){d("กรุณาระบุคำถาม","warning");return}if(L.length<2){d("กรุณาระบุตัวเลือกอย่างน้อย 2 ข้อ","warning");return}if(I<0){d("กรุณาเลือกตัวเลือกที่ถูกต้องที่มีข้อความ","warning");return}_(x.target,!0);try{const p={question_text:b,choices:L,correct_choice_index:I,explanation:t.querySelector("#q-explanation").value.trim()||null,difficulty:t.querySelector("#q-difficulty").value||null,category:t.querySelector("#q-category").value.trim()||null};e?(await ne(e.id,p),d("แก้ไขคำถามแล้ว","success")):(await ce({...p,bank_id:s.id}),d("เพิ่มคำถามแล้ว","success")),t.remove(),C(a,s)}catch(p){d("บันทึกไม่สำเร็จ: "+(p.message??""),"error"),_(x.target,!1,"บันทึก")}})}function X(a){const s=Array.isArray(a==null?void 0:a.choices)?a.choices.map(o=>String(o??"").trim()).filter(Boolean):[];let e=Number.isInteger(a==null?void 0:a.correct_choice_index)?a.correct_choice_index:0;return(e<0||e>=s.length)&&(e=0),{question_text:String((a==null?void 0:a.question_text)??"").trim(),choices:s.length>=2?s:["",""],correct_choice_index:e,explanation:String((a==null?void 0:a.explanation)??"").trim(),difficulty:["ง่าย","ปานกลาง","ยาก"].includes(a==null?void 0:a.difficulty)?a.difficulty:null,confirmed:!1}}function pe(a){if(!a.question_text.trim())return{ok:!1,error:"กรุณากรอกคำถามก่อนยืนยัน"};const s=a.choices.map((o,t)=>({v:o.trim(),ci:t})).filter(o=>o.v);return s.length<2?{ok:!1,error:"ต้องมีตัวเลือกที่มีข้อความอย่างน้อย 2 ข้อ"}:s.findIndex(o=>o.ci===a.correct_choice_index)<0?{ok:!1,error:"ตัวเลือกที่ถูกต้องต้องมีข้อความ กรุณาเลือกใหม่"}:{ok:!0}}function K(a){const s=[a.ตัวเลือก1,a.ตัวเลือก2,a.ตัวเลือก3,a.ตัวเลือก4,a.ตัวเลือก5].map(c=>(c??"").trim()),e=parseInt(a.ตัวเลือกที่ถูก,10)-1,o=s.map((c,y)=>({v:c,i:y})).filter(c=>c.v),t=o.map(c=>c.v),n=o.findIndex(c=>c.i===e);return{question_text:(a.คำถาม??"").trim(),choices:t,correct_choice_index:n,explanation:(a.คำอธิบายเฉลย??"").trim()||null,difficulty:(a.ระดับความยาก??"").trim()||null,category:(a.หมวดหมู่??"").trim()||null}}function Z(a){let s=(a??"").trim();return s.startsWith("```")&&(s=s.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),s}function be({topic:a,count:s,choicesCount:e,difficulty:o}){return[`Generate a JSON array of exactly ${s} Thai multiple-choice quiz questions about: "${a}".`,o?`All questions should be "${o}" difficulty.`:"Mix of difficulty levels is fine.","Reply with a JSON Array ONLY. No markdown, no text outside JSON.","","Each object must have:",'1. "question_text" — the question, in Thai',`2. "choices" — array of exactly ${e} plausible answer strings (exactly one correct)`,'3. "correct_choice_index" — 0-based index into choices of the correct answer','4. "explanation" — short Thai explanation of why that answer is correct','5. "difficulty" — one of "ง่าย", "ปานกลาง", "ยาก"',"","Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\frac{a}{b}$","",`Example: [{"question_text":"...","choices":[${Array(e).fill('"..."').join(",")}],"correct_choice_index":0,"explanation":"...","difficulty":"ปานกลาง"}]`].join(`
`)}function me({topic:a,count:s,choicesCount:e,difficulty:o,format:t}){const n=[`Generate exactly ${s} Thai multiple-choice quiz questions about: "${a}".`,o?`All questions should be "${o}" difficulty.`:"Mix of difficulty levels is fine.","Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\frac{a}{b}$"];if(t==="csv"){const c=[B[0],...B.slice(1,1+e),...B.slice(6)].join(",");return[...n,"",`Reply with CSV data (comma-separated) using EXACTLY this header row first: ${c}`,`Fill all ${e} choice columns per row with plausible answers (exactly one correct).`,'"ตัวเลือกที่ถูก" column = the 1-based column number of the correct choice (e.g. 2 means the 2nd choice column).',"Quote any field that itself contains a comma with double quotes.","","Wrap the ENTIRE csv output (header row + all data rows, nothing else) in a single fenced code block using ```csv and ``` — no text before or after that block."].join(`
`)}return[...n,"","Reply as a JSON array. Each object must have:",'1. "question_text" — the question, in Thai',`2. "choices" — array of exactly ${e} plausible answer strings (exactly one correct)`,'3. "correct_choice_index" — 0-based index into choices of the correct answer','4. "explanation" — short Thai explanation of why that answer is correct','5. "difficulty" — one of "ง่าย", "ปานกลาง", "ยาก"',"",`Example: [{"question_text":"...","choices":[${Array(e).fill('"..."').join(",")}],"correct_choice_index":0,"explanation":"...","difficulty":"ปานกลาง"}]`,"","Wrap the ENTIRE answer (the whole JSON array, nothing else) in a single fenced code block using ```json and ``` — no text before or after that block."].join(`
`)}function ee(a){const s=Z(a);let e;try{e=JSON.parse(s)}catch{const t=s.match(/\[\s*\{[\s\S]*\}\s*\]/);if(!t)throw new Error("ไม่พบ JSON อาร์เรย์ในคำตอบ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (มักเกิดจากขอจำนวนข้อมากเกินไปจนคำตอบถูกตัดกลางคัน)");try{e=JSON.parse(t[0])}catch{throw new Error("คำตอบไม่ครบ (JSON ถูกตัดกลางคัน) — ลองลดจำนวนข้อแล้วขอใหม่")}}if(!Array.isArray(e))throw new Error("คำตอบไม่ใช่ JSON อาร์เรย์");return e}function ge(a){const s=Z(a);if(s.trim().startsWith("["))return ee(s);const e=W(s);if(!e.length)throw new Error("ไม่พบข้อมูลที่แปลงได้ — ตรวจสอบว่าคัดลอกคำตอบของ AI มาครบถ้วน (ทั้งแถวหัวตารางและข้อมูล)");const o=e.map(K).filter(t=>t.question_text&&t.choices.length>=2&&Number.isInteger(t.correct_choice_index)&&t.correct_choice_index>=0&&t.correct_choice_index<t.choices.length);if(!o.length)throw new Error('แปลง CSV ไม่ได้ — ตรวจสอบว่าหัวตารางตรงกับที่คำสั่งกำหนด และคอลัมน์ "ตัวเลือกที่ถูก" ชี้ไปที่ตัวเลือกที่มีข้อความจริง');return o}function fe(a,s){let e=[];const o=document.createElement("div");o.className="fixed inset-0 z-[95] bg-white flex flex-col",o.innerHTML=`
    <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 shadow-sm flex-shrink-0">
      <h3 class="font-bold text-gray-800 text-lg">✨ AI ช่วยคิดข้อสอบ</h3>
      <button id="ai-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">×</button>
    </div>

    <div class="flex-1 overflow-y-auto p-5">
      <div class="max-w-3xl mx-auto space-y-4">
        <p class="text-xs text-gray-400">AI จะร่างคำถามให้เป็นแบบร่าง — <strong>ครูต้องตรวจสอบและกดยืนยันความถูกต้องทีละข้อก่อนบันทึกเข้าคลังจริงเสมอ</strong> (ไม่ว่าจะสร้างด้วยวิธีไหนก็ตาม)</p>

        <div class="flex gap-2">
          <button id="ai-mode-inapp" class="ai-mode-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-purple-600 bg-purple-600 text-white">🤖 ให้ AI ในระบบสร้างให้เลย</button>
          <button id="ai-mode-copy" class="ai-mode-btn flex-1 py-2 rounded-xl text-xs font-bold border-2 border-gray-200 text-gray-500">📋 คัดลอกคำสั่งไปใช้ AI อื่น</button>
        </div>

        <div class="bg-purple-50 border border-purple-100 rounded-2xl p-4 space-y-3">
          <div>
            <label class="text-xs font-semibold text-gray-600 mb-1 block">หัวข้อ/เนื้อหาที่ต้องการให้ออกข้อสอบ</label>
            <input id="ai-topic" class="${m}" placeholder="เช่น สมการเชิงเส้นตัวแปรเดียว, การสังเคราะห์แสง, หลักธรรมอริยสัจ 4" />
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <label id="ai-count-label" class="text-xs font-semibold text-gray-600 mb-1 block">จำนวนข้อ (สูงสุด 25/ครั้ง)</label>
              <input id="ai-count" type="number" min="1" value="5" class="${m}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ตัวเลือกต่อข้อ</label>
              <input id="ai-choices-count" type="number" min="2" max="5" value="4" class="${m}" />
            </div>
            <div>
              <label class="text-xs font-semibold text-gray-600 mb-1 block">ระดับความยาก</label>
              <select id="ai-difficulty" class="${Y}">
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
              <textarea id="ai-prompt-text" class="${m} font-mono text-xs" rows="6" readonly></textarea>
              <button id="btn-ai-copy-prompt" class="w-full py-2 rounded-xl border border-purple-300 text-purple-700 hover:bg-purple-100 font-bold text-xs">📋 คัดลอกคำสั่ง</button>
            </div>
            <div class="pt-2 border-t border-purple-100">
              <label class="text-xs font-semibold text-gray-600 mb-1 block">วางคำตอบที่ได้จาก AI ที่นี่ (JSON หรือ CSV ก็ได้ ระบบจะตรวจให้เอง)</label>
              <textarea id="ai-paste-response" class="${m} font-mono text-xs" rows="6" placeholder="วางคำตอบทั้งหมดที่ AI ตอบกลับมา"></textarea>
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
  `,document.body.appendChild(o),o.querySelector("#ai-close").addEventListener("click",()=>o.remove()),o.querySelector("#ai-cancel").addEventListener("click",()=>o.remove());const t=o.querySelector("#ai-draft-list"),n=o.querySelector("#ai-save"),c=o.querySelector("#btn-ai-run"),y=o.querySelector("#ai-copy-panel"),h=o.querySelector("#ai-mode-inapp"),g=o.querySelector("#ai-mode-copy"),x=o.querySelector("#ai-count-label"),b=o.querySelector("#ai-format-json"),v=o.querySelector("#ai-format-csv");let j="inapp",S="json";const L=r=>{j=r;const i=r==="inapp";c.classList.toggle("hidden",!i),y.classList.toggle("hidden",i),h.classList.toggle("border-purple-600",i),h.classList.toggle("bg-purple-600",i),h.classList.toggle("text-white",i),h.classList.toggle("border-gray-200",!i),h.classList.toggle("text-gray-500",!i),g.classList.toggle("border-purple-600",!i),g.classList.toggle("bg-purple-600",!i),g.classList.toggle("text-white",!i),g.classList.toggle("border-gray-200",i),g.classList.toggle("text-gray-500",i),x.textContent=i?"จำนวนข้อ (สูงสุด 25/ครั้ง)":"จำนวนข้อ (ไม่จำกัด — สร้างที่ AI ภายนอก)"};h.addEventListener("click",()=>L("inapp")),g.addEventListener("click",()=>L("copy"));const I=r=>{S=r;const i=r==="json";b.classList.toggle("border-purple-600",i),b.classList.toggle("bg-purple-600",i),b.classList.toggle("text-white",i),b.classList.toggle("border-gray-200",!i),b.classList.toggle("text-gray-500",!i),v.classList.toggle("border-purple-600",!i),v.classList.toggle("bg-purple-600",!i),v.classList.toggle("text-white",!i),v.classList.toggle("border-gray-200",i),v.classList.toggle("text-gray-500",i),o.querySelector("#ai-prompt-wrap").classList.add("hidden")};b.addEventListener("click",()=>I("json")),v.addEventListener("click",()=>I("csv"));const p=()=>{const r=o.querySelector("#ai-topic").value.trim(),i=parseInt(o.querySelector("#ai-count").value,10)||5,l=j==="inapp"?Math.min(25,Math.max(1,i)):Math.max(1,i);o.querySelector("#ai-count").value=l;const f=parseInt(o.querySelector("#ai-choices-count").value,10)||4,$=Math.min(5,Math.max(2,f));o.querySelector("#ai-choices-count").value=$;const E=o.querySelector("#ai-difficulty").value;return{topic:r,count:l,rawCount:i,choicesCount:$,difficulty:E}};o.querySelector("#btn-ai-build-prompt").addEventListener("click",()=>{const{topic:r,count:i,choicesCount:l,difficulty:f}=p();if(!r){d("กรุณาระบุหัวข้อที่ต้องการให้ AI ออกข้อสอบ","warning");return}const $=me({topic:r,count:i,choicesCount:l,difficulty:f,format:S});o.querySelector("#ai-prompt-text").value=$,o.querySelector("#ai-prompt-wrap").classList.remove("hidden")}),o.querySelector("#btn-ai-copy-prompt").addEventListener("click",async r=>{const i=o.querySelector("#ai-prompt-text");try{await navigator.clipboard.writeText(i.value),d("คัดลอกคำสั่งแล้ว — ไปวางใน AI ที่ต้องการได้เลย","success")}catch{i.select(),d("คัดลอกอัตโนมัติไม่ได้ — เลือกข้อความให้แล้ว กด Ctrl/Cmd+C เพื่อคัดลอกเอง","warning")}}),o.querySelector("#btn-ai-parse-response").addEventListener("click",r=>{const i=o.querySelector("#ai-paste-response").value;if(!i.trim()){d("กรุณาวางคำตอบจาก AI ก่อน","warning");return}try{const l=ge(i);e.push(...l.map(X)),A(),o.querySelector("#ai-paste-response").value="",d(`แปลงคำตอบสำเร็จ ${l.length} ข้อ — กรุณาตรวจสอบและยืนยันทีละข้อ`,"success")}catch(l){d("แปลงคำตอบไม่สำเร็จ: "+(l.message??""),"error")}});function k(){const r=e.filter(i=>i.confirmed).length;n.textContent=`บันทึกข้อที่ยืนยันแล้ว (${r})`,n.classList.toggle("hidden",e.length===0)}function A(){t.innerHTML=e.map((r,i)=>`
      <div class="bg-white border ${r.confirmed?"border-emerald-300":"border-gray-200"} rounded-2xl p-4 space-y-2">
        <div class="flex items-center justify-between">
          <p class="text-xs text-gray-400">ข้อร่างที่ ${i+1}${r.difficulty?` · ${u(r.difficulty)}`:""}</p>
          <button class="d-delete text-xs text-red-400 hover:text-red-600" data-idx="${i}">🗑️ ลบข้อนี้</button>
        </div>
        <textarea class="d-qtext ${m}" rows="2" data-idx="${i}">${u(r.question_text)}</textarea>
        <div class="space-y-1.5">
          ${r.choices.map((l,f)=>`
            <div class="flex items-center gap-2">
              <input type="radio" name="d-correct-${i}" value="${f}" ${f===r.correct_choice_index?"checked":""} class="d-correct-radio flex-shrink-0" data-idx="${i}" data-ci="${f}" />
              <input class="d-choice ${m}" value="${u(l)}" data-idx="${i}" data-ci="${f}" />
            </div>
          `).join("")}
        </div>
        <textarea class="d-explanation ${m}" rows="1" placeholder="คำอธิบายเฉลย (ไม่บังคับ)" data-idx="${i}">${u(r.explanation)}</textarea>
        <label class="flex items-center gap-2 text-xs font-semibold ${r.confirmed?"text-emerald-700":"text-gray-500"}">
          <input type="checkbox" class="d-confirm" data-idx="${i}" ${r.confirmed?"checked":""} /> ✅ ตรวจสอบแล้ว ถูกต้อง พร้อมบันทึก
        </label>
      </div>
    `).join(""),J().then(()=>O(t)).catch(()=>{}),t.querySelectorAll(".d-qtext").forEach(r=>r.addEventListener("input",()=>{e[+r.dataset.idx].question_text=r.value})),t.querySelectorAll(".d-choice").forEach(r=>r.addEventListener("input",()=>{e[+r.dataset.idx].choices[+r.dataset.ci]=r.value})),t.querySelectorAll(".d-correct-radio").forEach(r=>r.addEventListener("change",()=>{e[+r.dataset.idx].correct_choice_index=+r.dataset.ci})),t.querySelectorAll(".d-explanation").forEach(r=>r.addEventListener("input",()=>{e[+r.dataset.idx].explanation=r.value})),t.querySelectorAll(".d-delete").forEach(r=>r.addEventListener("click",()=>{e.splice(+r.dataset.idx,1),A(),k()})),t.querySelectorAll(".d-confirm").forEach(r=>r.addEventListener("change",()=>{const i=+r.dataset.idx;if(r.checked){const l=pe(e[i]);if(!l.ok){r.checked=!1,d(l.error,"warning");return}}e[i].confirmed=r.checked,A(),k()})),k()}o.querySelector("#btn-ai-run").addEventListener("click",async r=>{var w,T,P;const{topic:i,count:l,rawCount:f,choicesCount:$,difficulty:E}=p();if(!i){d("กรุณาระบุหัวข้อที่ต้องการให้ AI ออกข้อสอบ","warning");return}f>25&&d("จำนวนข้อเกินเพดานที่รองรับต่อครั้ง ปรับให้เป็น 25 ข้อแล้ว","warning"),_(r.target,!0);try{const N=be({topic:i,count:l,choicesCount:$,difficulty:E}),te=Math.min(8e3,600+l*300),{data:q,error:z}=await xe.functions.invoke("gemini-proxy",{body:{prompt:N,maxTokens:te}});if(z||!q)throw new Error((z==null?void 0:z.message)??"AI Response is empty");let M="";(P=(T=(w=q.candidates)==null?void 0:w[0])==null?void 0:T.content)!=null&&P.parts?M=q.candidates[0].content.parts[0].text??"":q.text&&(M=q.text);const V=ee(M);e.push(...V.map(X)),A(),d(`AI ร่างข้อสอบมาแล้ว ${V.length} ข้อ — กรุณาตรวจสอบและยืนยันทีละข้อ`,"success")}catch(N){d("AI ไม่สามารถร่างข้อสอบได้: "+(N.message??""),"error")}finally{_(r.target,!1,"สร้างข้อสอบด้วย AI")}}),n.addEventListener("click",async()=>{const r=[],i=[];if(e.forEach(l=>{if(!l.confirmed){i.push(l);return}const f=l.choices.map((w,T)=>({v:w.trim(),ci:T})).filter(w=>w.v),$=f.map(w=>w.v),E=f.findIndex(w=>w.ci===l.correct_choice_index);if(!l.question_text.trim()||$.length<2||E<0){i.push(l);return}r.push({question_text:l.question_text.trim(),choices:$,correct_choice_index:E,explanation:l.explanation.trim()||null,difficulty:l.difficulty,category:null})}),r.length===0){d("ยังไม่มีข้อที่ยืนยันแล้วพร้อมบันทึก","warning");return}_(n,!0);try{await H(s.id,r),d(`บันทึก ${r.length} ข้อเข้าคลังเรียบร้อย`,"success"),e=i,A(),e.length===0&&(o.remove(),C(a,s))}catch(l){d("บันทึกไม่สำเร็จ: "+(l.message??""),"error")}finally{_(n,!1),k()}})}export{C as _renderBankQuestions,R as renderQuizBanks};
