import{getClassStudents as C}from"./api-CQwFwlFA.js";import{c as A,o as M,q as R}from"./quiz-api-CcBTN73s.js";import{s as S}from"./supabase-BV-W2lsh.js";import{a as $,g as T}from"./ui-Cr4JiTyM.js";import{_htmlEsc as x}from"./teacher-views-utils-Dj2Ir5X-.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./skill-groups-BY1NTbf4.js";let u=null,p=null,k=0;const N=1e3,E={in_progress:{label:"กำลังทำ",cls:"bg-emerald-100 text-emerald-700"},submitted:{label:"ส่งแล้ว",cls:"bg-blue-100 text-blue-700"},terminated_violation:{label:"🔒 ถูกล็อก",cls:"bg-red-100 text-red-700"}};function O(e){const o=x(((e==null?void 0:e.full_name)??"?").charAt(0)),a="relative w-9 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-md ring-1 ring-black/5",d='<div class="absolute inset-0 rounded-xl pointer-events-none" style="box-shadow: inset 0 1px 2px rgba(255,255,255,0.55), inset 0 -10px 14px rgba(0,0,0,0.18)"></div>';return e!=null&&e.image_url?`<div class="${a}"><img src="${x(e.image_url)}" class="w-full h-full object-cover" />${d}</div>`:`<div class="${a} bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400">${o}${d}</div>`}async function G(e){var l;v(),(l=document.getElementById("quiz-monitor-modal"))==null||l.remove();const o=document.createElement("div");o.id="quiz-monitor-modal",o.className="fixed inset-0 z-[95] flex flex-col bg-gray-50",o.innerHTML=`
    <div class="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shadow-sm flex-shrink-0">
      <button id="qm-close" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">←</button>
      <div class="flex-1 min-w-0">
        <h2 class="font-bold text-gray-800 truncate">🔴 กำลังสอบสด: ${x(e.title)}</h2>
      </div>
      <span id="qm-conn" class="text-xs px-2 py-1 rounded-full border bg-gray-50 border-gray-200 text-gray-500 flex-shrink-0">กำลังเชื่อมต่อ...</span>
    </div>
    <div class="flex-1 overflow-y-auto p-4" id="qm-body"></div>
  `,document.body.appendChild(o),o.querySelector("#qm-close").addEventListener("click",()=>{v(),o.remove()});const a=await C(e.class_id).catch(()=>[]),d=e.lock_on_answer||e.instant_feedback_bonus?Object.fromEntries((await A(e.bank_id).catch(()=>[])).map(t=>[t.id,t])):{};await g(e,a,d);const n=()=>{const t=Date.now();t-k<N||(k=t,g(e,a,d).catch(()=>{}))};u=S.channel(`quiz-monitor-${e.id}`).on("postgres_changes",{event:"*",schema:"public",table:"quiz_attempts",filter:`quiz_id=eq.${e.id}`},n).on("postgres_changes",{event:"INSERT",schema:"public",table:"quiz_attempt_violations"},n),u.subscribe(t=>{const c=document.getElementById("qm-conn");c&&(t==="SUBSCRIBED"?(c.textContent="🟢 เชื่อมต่อสด",c.className="text-xs px-2 py-1 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-700 flex-shrink-0"):(t==="CLOSED"||t==="CHANNEL_ERROR")&&(c.textContent="🟡 ใช้ระบบสำรอง",c.className="text-xs px-2 py-1 rounded-full border bg-amber-50 border-amber-200 text-amber-700 flex-shrink-0"))}),p=setInterval(()=>g(e,a,d).catch(()=>{}),3e3)}function v(){u&&(S.removeChannel(u),u=null),p&&(clearInterval(p),p=null)}async function g(e,o,a={}){const d=document.getElementById("qm-body");if(!d){v();return}const n=await M(e.id).catch(()=>[]),l={};n.forEach(r=>{l[r.student_id]=r});const t=Object.values(l),c=t.length,i=t.filter(r=>r.status==="in_progress"&&(r.violation_count??0)>0).length,m=t.filter(r=>r.status==="terminated_violation").length,b=t.filter(r=>r.score_pct!=null).map(r=>r.score_pct),h=b.length?b.reduce((r,s)=>r+s,0)/b.length:null,L=H(n,a);d.innerHTML=`
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${c}/${o.length}</p>
          <p class="text-xs text-gray-400 mt-0.5">เข้าสอบแล้ว</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${t.filter(r=>r.status==="in_progress").length}</p>
          <p class="text-xs text-gray-400 mt-0.5">กำลังทำอยู่</p>
        </div>
        <div class="bg-amber-50 rounded-2xl border border-amber-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-amber-700">${i}</p>
          <p class="text-xs text-amber-700 mt-0.5">เตือนแล้ว (1/2)</p>
        </div>
        <div class="bg-red-50 rounded-2xl border border-red-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-red-700">${m}</p>
          <p class="text-xs text-red-700 mt-0.5">ถูกล็อก (2/2)</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
          <p class="text-2xl font-extrabold text-gray-800">${h!=null?h.toFixed(1)+"%":"—"}</p>
          <p class="text-xs text-gray-400 mt-0.5">คะแนนเฉลี่ยรอบล่าสุด</p>
        </div>
      </div>

      <p class="text-[11px] leading-relaxed text-gray-400">ระบบบันทึกการเปลี่ยนแท็บ การเสียโฟกัส และการออกจากเต็มหน้าจอเมื่อเบราว์เซอร์แจ้งเหตุการณ์ให้หน้าเว็บทราบ โดยเตือนครั้งแรกและล็อกเมื่อเกิดครั้งที่สอง การแบ่งหน้าจอหรือใช้อุปกรณ์อื่นไม่สามารถป้องกันหรือตรวจจับได้ครบถ้วนด้วยเว็บเบราว์เซอร์</p>

      ${L}

      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        ${o.map(r=>{var _;const s=l[r.id],f=((_=s==null?void 0:s.question_order)==null?void 0:_.length)??e.num_questions,y=s?Object.keys(s.answers??{}).length:0,j=f>0?Math.round(y/f*100):0,w=(s==null?void 0:s.status)==="in_progress"&&(s.violation_count??0)>0?{label:`⚠️ เตือนแล้ว ${s.violation_count}/2`,cls:"bg-amber-100 text-amber-800"}:s?E[s.status]??E.in_progress:{label:"ยังไม่เข้าสอบ",cls:"bg-gray-100 text-gray-400"};return`
          <div class="flex items-center gap-3 p-3">
            ${O(r)}
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-gray-800 truncate">${x(r.full_name)}</p>
              <p class="text-xs text-gray-400">${x(r.student_code)}${s?` · ตอบแล้ว ${y}/${f} ข้อ (${j}%)`:""}${(s==null?void 0:s.score_pct)!=null?` · คะแนน ${s.score_pct.toFixed(1)}%`:""}</p>
            </div>
            <span class="px-2 py-0.5 rounded-lg text-xs font-bold flex-shrink-0 ${w.cls}">${w.label}</span>
            ${(s==null?void 0:s.status)==="terminated_violation"?`<button class="btn-unlock px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold flex-shrink-0" data-attempt="${s.id}">🔓 ปลดล็อก</button>`:""}
          </div>`}).join("")}
      </div>
    </div>
  `,d.querySelectorAll(".btn-unlock").forEach(r=>r.addEventListener("click",()=>I(r.dataset.attempt,e,o,a)))}function H(e,o){if(!Object.keys(o).length)return"";const a={};e.forEach(n=>{Object.entries(n.answer_correctness??{}).forEach(([l,t])=>{a[l]||(a[l]={correct:0,wrong:0}),a[l][t?"correct":"wrong"]++})});const d=Object.keys(a).sort((n,l)=>{var t,c;return(((t=o[n])==null?void 0:t.sort_order)??0)-(((c=o[l])==null?void 0:c.sort_order)??0)});return d.length?`
  <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
    <p class="text-xs font-bold text-gray-500 mb-3">📊 สถิติสดรายข้อ</p>
    <div class="space-y-2">
      ${d.map(n=>{const{correct:l,wrong:t}=a[n],c=l+t,i=c>0?Math.round(l/c*100):0,m=o[n],b=i>=70?"bg-emerald-500":i>=40?"bg-amber-500":"bg-red-500";return`
        <div>
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="text-gray-600 truncate flex-1 mr-2">${x((m==null?void 0:m.question_text)??n)}</span>
            <span class="text-gray-400 flex-shrink-0">✓${l} ✗${t} (${i}%)</span>
          </div>
          <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden">
            <div class="h-full ${b}" style="width:${i}%"></div>
          </div>
        </div>`}).join("")}
    </div>
  </div>`:""}function I(e,o,a,d){const n=document.createElement("div");n.className="fixed inset-0 z-[99] bg-black/40 flex items-center justify-center p-4",n.innerHTML=`
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
  `,document.body.appendChild(n),n.querySelector("#unlock-cancel").addEventListener("click",()=>n.remove());const l=async t=>{n.remove();try{await R(e,t),$(t==="resume"?"ปลดล็อก — ทำต่อจากจุดเดิมแล้ว":"ปลดล็อก — เริ่มชุดใหม่แล้ว","success"),await g(o,a,d)}catch(c){$("ปลดล็อกไม่สำเร็จ: "+T(c),"error")}};n.querySelector("#unlock-resume").addEventListener("click",()=>l("resume")),n.querySelector("#unlock-restart").addEventListener("click",()=>l("restart"))}export{G as openQuizMonitor};
