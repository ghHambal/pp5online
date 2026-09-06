import{getClassStudents as S}from"./api-1xsyVspL.js";import{g as L,m as j,o as C}from"./quiz-api-DaBneRGn.js";import{s as k}from"./supabase-BV-W2lsh.js";import{a as w}from"./ui-Dh03k4iX.js";import{_htmlEsc as x}from"./teacher-views-utils-B2Iz3UWp.js";let b=null,u=null,_=0;const R=1e3,$={in_progress:{label:"กำลังทำ",cls:"bg-emerald-100 text-emerald-700"},submitted:{label:"ส่งแล้ว",cls:"bg-blue-100 text-blue-700"},terminated_violation:{label:"🔒 ถูกล็อก",cls:"bg-red-100 text-red-700"}};function T(e){const n=x(((e==null?void 0:e.full_name)??"?").charAt(0)),a="relative w-9 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/5",d='<div class="absolute inset-0 rounded-xl pointer-events-none" style="box-shadow: inset 0 1px 2px rgba(255,255,255,0.55), inset 0 -10px 14px rgba(0,0,0,0.18)"></div>';return e!=null&&e.image_url?`<div class="${a}"><img src="${x(e.image_url)}" class="w-full h-full object-cover" />${d}</div>`:`<div class="${a} bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400">${n}${d}</div>`}async function U(e){var o;f(),(o=document.getElementById("quiz-monitor-modal"))==null||o.remove();const n=document.createElement("div");n.id="quiz-monitor-modal",n.className="fixed inset-0 z-[95] flex flex-col bg-gray-50",n.innerHTML=`
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="qm-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">🔴 กำลังสอบสด: ${x(e.title)}</h2>
      </div>
      <span id="qm-conn" class="text-xs px-2 py-1 rounded-full border bg-gray-50 border-gray-200 text-gray-500 flex-shrink-0">กำลังเชื่อมต่อ...</span>
    </div>
    <div class="flex-1 overflow-y-auto p-4" id="qm-body"></div>
  `,document.body.appendChild(n),n.querySelector("#qm-close").addEventListener("click",()=>{f(),n.remove()});const a=await S(e.class_id).catch(()=>[]),d=e.lock_on_answer||e.instant_feedback_bonus?Object.fromEntries((await L(e.bank_id).catch(()=>[])).map(r=>[r.id,r])):{};await g(e,a,d);const t=()=>{const r=Date.now();r-_<R||(_=r,g(e,a,d).catch(()=>{}))};b=k.channel(`quiz-monitor-${e.id}`).on("postgres_changes",{event:"*",schema:"public",table:"quiz_attempts",filter:`quiz_id=eq.${e.id}`},t).on("postgres_changes",{event:"INSERT",schema:"public",table:"quiz_attempt_violations"},t),b.subscribe(r=>{const c=document.getElementById("qm-conn");c&&(r==="SUBSCRIBED"?(c.textContent="🟢 เชื่อมต่อสด",c.className="text-xs px-2 py-1 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-700 flex-shrink-0"):(r==="CLOSED"||r==="CHANNEL_ERROR")&&(c.textContent="🟡 ใช้ระบบสำรอง",c.className="text-xs px-2 py-1 rounded-full border bg-amber-50 border-amber-200 text-amber-700 flex-shrink-0"))}),u=setInterval(()=>g(e,a,d).catch(()=>{}),3e3)}function f(){b&&(k.removeChannel(b),b=null),u&&(clearInterval(u),u=null)}async function g(e,n,a={}){const d=document.getElementById("qm-body");if(!d){f();return}const t=await j(e.id).catch(()=>[]),o={};t.forEach(s=>{o[s.student_id]=s});const r=new Set(t.map(s=>s.student_id)).size,c=t.filter(s=>s.score_pct!=null).map(s=>s.score_pct),i=c.length?c.reduce((s,l)=>s+l,0)/c.length:null,m=A(t,a);d.innerHTML=`
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${r}/${n.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">เข้าสอบแล้ว</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${t.filter(s=>s.status==="in_progress").length}</p>
          <p class="text-xs text-gray-400 mt-0.5">กำลังทำอยู่</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${i!=null?i.toFixed(1)+"%":"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5">คะแนนเฉลี่ยล่าสุด</p>
        </div>
      </div>

      ${m}

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        ${n.map(s=>{var y;const l=o[s.id],p=((y=l==null?void 0:l.question_order)==null?void 0:y.length)??e.num_questions,h=l?Object.keys(l.answers??{}).length:0,E=p>0?Math.round(h/p*100):0,v=l?$[l.status]??$.in_progress:{label:"ยังไม่เข้าสอบ",cls:"bg-gray-100 text-gray-400"};return`
          <div class="flex items-center gap-3 p-3">
            ${T(s)}
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${x(s.full_name)}</p>
              <p class="text-xs text-gray-400">${x(s.student_code)}${l?` · ตอบแล้ว ${h}/${p} ข้อ (${E}%)`:""}${(l==null?void 0:l.score_pct)!=null?` · คะแนน ${l.score_pct.toFixed(1)}%`:""}</p>
            </div>
            <span class="px-2 py-0.5 rounded-lg text-xs font-bold flex-shrink-0 ${v.cls}">${v.label}</span>
            ${(l==null?void 0:l.status)==="terminated_violation"?`<button class="btn-unlock px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex-shrink-0" data-attempt="${l.id}">🔓 ปลดล็อก</button>`:""}
          </div>`}).join("")}
      </div>
    </div>
  `,d.querySelectorAll(".btn-unlock").forEach(s=>s.addEventListener("click",()=>M(s.dataset.attempt,e,n,a)))}function A(e,n){if(!Object.keys(n).length)return"";const a={};e.forEach(t=>{Object.entries(t.answer_correctness??{}).forEach(([o,r])=>{a[o]||(a[o]={correct:0,wrong:0}),a[o][r?"correct":"wrong"]++})});const d=Object.keys(a).sort((t,o)=>{var r,c;return(((r=n[t])==null?void 0:r.sort_order)??0)-(((c=n[o])==null?void 0:c.sort_order)??0)});return d.length?`
  <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
    <p class="text-xs font-bold text-gray-500 mb-3">📊 สถิติสดรายข้อ</p>
    <div class="space-y-2">
      ${d.map(t=>{const{correct:o,wrong:r}=a[t],c=o+r,i=c>0?Math.round(o/c*100):0,m=n[t],s=i>=70?"bg-emerald-500":i>=40?"bg-amber-500":"bg-red-500";return`
        <div>
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="text-gray-600 truncate flex-1 mr-2">${x((m==null?void 0:m.question_text)??t)}</span>
            <span class="text-gray-400 flex-shrink-0">✓${o} ✗${r} (${i}%)</span>
          </div>
          <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div class="h-full ${s}" style="width:${i}%"></div>
          </div>
        </div>`}).join("")}
    </div>
  </div>`:""}function M(e,n,a,d){const t=document.createElement("div");t.className="fixed inset-0 z-[99] bg-black/40 flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl text-center">
      <div class="text-4xl mb-3">🔓</div>
      <h3 class="font-bold text-gray-800 text-lg mb-2">ปลดล็อกนักเรียนคนนี้</h3>
      <p class="text-sm text-gray-500 mb-5">เลือกวิธีที่ต้องการให้นักเรียนทำต่อ</p>
      <div class="space-y-2">
        <button id="unlock-resume" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm">▶️ ทำต่อจากจุดเดิม</button>
        <button id="unlock-restart" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">🔄 เริ่มใหม่ทั้งชุด</button>
        <button id="unlock-cancel" class="w-full py-2.5 rounded-2xl border border-gray-200 text-gray-600 font-semibold text-sm">ยกเลิก</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector("#unlock-cancel").addEventListener("click",()=>t.remove());const o=async r=>{t.remove();try{await C(e,r),w(r==="resume"?"ปลดล็อก — ทำต่อจากจุดเดิมแล้ว":"ปลดล็อก — เริ่มชุดใหม่แล้ว","success"),await g(n,a,d)}catch(c){w("ปลดล็อกไม่สำเร็จ: "+(c.message??""),"error")}};t.querySelector("#unlock-resume").addEventListener("click",()=>o("resume")),t.querySelector("#unlock-restart").addEventListener("click",()=>o("restart"))}export{U as openQuizMonitor};
