import{s as c}from"./supabase-BV-W2lsh.js";/* empty css             */import{l as ht,r as ft}from"./katex-loader-DUJObfzT.js";import{l as vt,f as yt}from"./confetti-loader-BAN5Lv-C.js";import{g as T,b as L,a as b,h as wt}from"./ui-FQqAmrdo.js";import{_htmlEsc as h}from"./teacher-views-utils-BWmONzsh.js";import{b as Nt}from"./anti-pull-refresh-BGrI1pMY.js";import"./version.js_v_10.22-ffVTG8-v.js";async function $t(e,t){const{data:n,error:r}=await c.from("quiz_attempts").select("id, attempt_number, status, score_pct, submitted_at, terminated_at").eq("quiz_id",e).eq("student_id",t).in("status",["submitted","terminated_violation"]).order("attempt_number",{ascending:!0});if(r)throw r;return n??[]}async function kt(e){const{data:t,error:n}=await c.from("quiz_attempts").select("*, quizzes(*)").eq("id",e).single();if(n)throw n;return t}async function Dt(e,t){const{data:n,error:r}=await c.from("quiz_student_finalizations").select("confirmed_at").eq("quiz_id",e).eq("student_id",t).maybeSingle();if(r)throw r;return n}async function Pt(e){const{data:t,error:n}=await c.rpc("start_quiz_attempt",{p_quiz_id:e});if(n)throw n;return t}async function Rt(e){const{error:t}=await c.rpc("confirm_quiz_final",{p_quiz_id:e});if(t)throw t}async function qt(e){const{data:t,error:n}=await c.rpc("get_quiz_attempt_questions",{p_attempt_id:e});if(n)throw n;return t??[]}async function Ot(e){const{error:t}=await c.rpc("submit_quiz_attempt",{p_attempt_id:e});if(t)throw t}async function Vt(e,t){const{data:n,error:r}=await c.rpc("record_quiz_violation",{p_attempt_id:e,p_violation_type:t});if(r)throw r;return(n==null?void 0:n[0])??{violation_count:0,terminated:!1}}async function Wt(e){const{data:t,error:n}=await c.rpc("claim_quiz_attempt_session",{p_attempt_id:e});if(n)throw n;return t}async function Gt(e,t,n,r){const{data:s,error:a}=await c.rpc("submit_quiz_answer",{p_attempt_id:e,p_session_token:t,p_question_id:n,p_chosen_index:r});if(a)throw a;return(s==null?void 0:s[0])??null}async function Xt(e,t,n,r=null){const{data:s,error:a}=await c.rpc("use_quiz_bonus",{p_attempt_id:e,p_session_token:t,p_bonus_type:n,p_question_id:r});if(a)throw a;return(s==null?void 0:s[0])??null}async function Ut(e){const{data:t,error:n}=await c.rpc("get_my_quiz_rank",{p_attempt_id:e});if(n)throw n;return(t==null?void 0:t[0])??null}async function Kt(e,t,n,r){var g;const{data:s,error:a}=await c.rpc("quiz_attempt_heartbeat",{p_attempt_id:e,p_session_token:t,p_answers:n??null,p_time_remaining_sec:r??null});if(a)throw a;return((g=s==null?void 0:s[0])==null?void 0:g.expired)??!1}let i=null,l=[],m={},f=0,Q=null,H=null,P=null,R=null,O=null,J=!1,j=!1,q=!1,C={},nt={},rt=new Set,F={},Y=[],I=0,E=null,xt=null,M=null,k=null,S=null;const Z={fifty_fifty:{icon:"✂️",label:"50/50"},fix_wrong:{icon:"🛠️",label:"แก้ข้อผิด"},extra_time:{icon:"⏱️",label:"+30 วิ"},reveal_answer:{icon:"🔑",label:"เปิดเฉลย"}};async function Jt(e){Nt(),ht().catch(()=>{});const t=document.getElementById("quiz-root");t.innerHTML=Yt();try{i=await kt(e)}catch{t.innerHTML=D("🚫","ไม่พบแบบทดสอบนี้","หรือคุณไม่มีสิทธิ์เข้าถึงแบบทดสอบนี้");return}if(i.status==="terminated_violation"){zt(t);return}if(i.status==="submitted"){await G(t);return}try{H=await Wt(e)}catch{t.innerHTML=D("⚠️","แบบทดสอบนี้เปิดอยู่ในแท็บ/อุปกรณ์อื่น","ปิดแท็บหรืออุปกรณ์อื่นก่อน แล้วรีเฟรชหน้านี้ใหม่");return}try{l=await qt(e)}catch(r){t.innerHTML=D("🚫","โหลดข้อสอบไม่สำเร็จ",T(r));return}m={...i.answers},f=0,Q=Date.now()+Math.max(0,i.time_remaining_sec??0)*1e3;const n=i.quizzes;j=!!(n!=null&&n.lock_on_answer||n!=null&&n.instant_feedback_bonus),q=!!(n!=null&&n.instant_feedback_bonus),C=i.bonus_inventory??{},nt=i.eliminated_choices??{},rt=new Set(i.unlocked_for_edit??[]),F=i.answer_correctness??{},I=i.current_streak??0,E=n!=null&&n.time_limit_minutes?Math.floor(n.time_limit_minutes*60/l.length):null,Y=i.attempt_number>1?await $t(i.quiz_id,i.student_id).catch(()=>[]):[],te(t)}function Et(e){window.renderMathInElement?ft(e):ht().then(()=>ft(e)).catch(()=>{})}function Yt(){return`<div class="flex justify-center py-20 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`}function D(e,t,n){return`<div class="max-w-md mx-auto text-center py-20 space-y-3">
    <div class="text-6xl">${e}</div>
    <p class="font-bold text-gray-800 text-lg">${h(t)}</p>
    ${n?`<p class="text-sm text-gray-500">${h(n)}</p>`:""}
  </div>`}function zt(e){e.innerHTML=`<div class="max-w-md mx-auto text-center py-20 space-y-4">
    <div class="text-6xl">🔒</div>
    <p class="font-bold text-gray-800 text-lg">แบบทดสอบถูกล็อก</p>
    <p class="text-sm text-gray-500 leading-relaxed">ระบบตรวจพบว่าคุณออกนอกหน้าสอบครบ 2 ครั้ง จึงส่งคำตอบให้อัตโนมัติแล้ว<br>กรุณาติดต่อครูผู้สอนหากต้องการทำต่อ</p>
  </div>`}const Zt=`
  <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-left space-y-2">
    <p class="text-sm font-bold text-red-700">🔴 ห้ามมองจอที่สองหรือเปิดหนังสือ/เอกสารช่วยระหว่างทำข้อสอบโดยเด็ดขาด</p>
    <p class="text-xs text-red-600">ระบบตรวจสอบการออกนอกหน้าสอบตลอดเวลา และครูสามารถติดตามพฤติกรรมการทำข้อสอบของนักเรียนได้</p>
    <p class="text-xs text-gray-600 pt-1 border-t border-red-100">☝️ นาซีฮัต: ความซื่อสัตย์ (อามานะฮ์) เป็นคุณลักษณะสำคัญยิ่งในอิสลาม อัลลอฮฺทรงเห็นทุกการกระทำของเราไม่ว่าจะอยู่ที่ใด จงทำข้อสอบนี้ด้วยความบริสุทธิ์ใจ เพื่อความจำเริญทั้งในดุนยาและอาคิเราะฮ์</p>
  </div>`;function te(e){const t=i.quizzes,n=Y.length?`
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left">
      <p class="text-xs font-bold text-gray-500 mb-2">ประวัติคะแนนครั้งก่อนหน้า</p>
      <div class="space-y-1.5">
        ${Y.map(r=>`
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">ครั้งที่ ${r.attempt_number}${r.status==="terminated_violation"?" (ถูกล็อก)":""}</span>
            <span class="font-bold text-gray-700">${r.score_pct!=null?r.score_pct.toFixed(1)+"%":"—"}</span>
          </div>`).join("")}
      </div>
    </div>`:"";e.innerHTML=`
    <div class="max-w-md mx-auto text-center py-16 space-y-4">
      <div class="text-6xl">📝</div>
      <p class="font-bold text-gray-800 text-lg">${h((t==null?void 0:t.title)??"")}</p>
      <p class="text-sm text-gray-500">${l.length} ข้อ${t!=null&&t.time_limit_minutes?` · เวลา ${t.time_limit_minutes} นาที`:""}${(t==null?void 0:t.max_attempts)>1?` · ครั้งที่ ${i.attempt_number}/${t.max_attempts}`:""}</p>
      ${t!=null&&t.deterrent_notice_enabled?Zt:""}
      ${n}
      <button id="btn-start-exam" class="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg">เริ่มทำข้อสอบ (เต็มจอ)</button>
      <p class="text-xs text-gray-400">เวลาจะเริ่มนับถอยหลังทันทีที่กดเริ่ม</p>
    </div>
  `,document.getElementById("btn-start-exam").addEventListener("click",()=>{var r,s;(s=(r=document.documentElement).requestFullscreen)==null||s.call(r).catch(()=>{}),ee(e),It(),ce(),R=setInterval(V,15e3)})}function ee(e){const t=i.quizzes;e.innerHTML=`
    ${t!=null&&t.deterrent_notice_enabled?`
    <div class="fixed inset-0 pointer-events-none z-[80]" style="box-shadow: inset 0 0 0 4px rgba(239,68,68,.55)"></div>
    <div class="fixed top-3 right-3 z-[81] px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold shadow-lg flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> กำลังตรวจสอบ
    </div>`:""}
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${h((t==null?void 0:t.title)??"")}</h2>
          <p class="text-xs text-gray-400">${l.length} ข้อ</p>
        </div>
        ${q?'<div id="quiz-streak-badge" class="flex-shrink-0"></div>':""}
        <div id="quiz-timer" class="text-2xl font-mono font-bold text-indigo-600 flex-shrink-0"></div>
      </div>

      ${E?`
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2">
        <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden"><div id="quiz-perq-bar" class="h-full bg-indigo-400" style="width:100%"></div></div>
        <p class="text-[10px] text-gray-400 mt-1">⏱ เฉลี่ยข้อละ ~${E} วิ (แค่แนวทางจับเวลา ไม่ตัดคะแนน)</p>
      </div>`:""}

      ${q?'<div class="flex gap-2 overflow-x-auto pb-1" id="quiz-bonus-toolbar"></div>':""}

      <div class="flex flex-wrap gap-1.5" id="quiz-nav"></div>

      <div id="quiz-question-area" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"></div>

      <div class="flex justify-between gap-2">
        <button id="btn-prev" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">← ก่อนหน้า</button>
        <button id="btn-submit" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm">ส่งคำตอบ</button>
        <button id="btn-next" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ถัดไป →</button>
      </div>
    </div>
  `,document.getElementById("btn-prev").addEventListener("click",()=>A(f-1)),document.getElementById("btn-next").addEventListener("click",()=>A(f+1)),document.getElementById("btn-submit").addEventListener("click",pe),v(),y(),it(),q&&(at(),Lt()),E&&Mt()}function Lt(){const e=document.getElementById("quiz-streak-badge");e&&(I>=2?e.innerHTML=`<span class="quiz-streak-pop inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold text-sm">🔥 ต่อเนื่อง ${I} ข้อ</span>`:e.innerHTML="")}function Mt(){E&&(xt=Date.now(),!M&&(M=setInterval(()=>{const e=document.getElementById("quiz-perq-bar");if(!e){clearInterval(M),M=null;return}const t=(Date.now()-xt)/1e3,n=Math.max(0,100-t/E*100);e.style.width=`${n}%`,e.className=`h-full ${n<=0?"bg-red-400":n<=30?"bg-amber-400":"bg-indigo-400"}`},500)))}function it(){const e=document.getElementById("btn-submit");!e||!j||e.classList.toggle("hidden",f!==l.length-1)}function v(){const e=document.getElementById("quiz-nav");e&&(e.innerHTML=l.map((t,n)=>{const r=m[t.question_id]!==void 0;return`<button class="quiz-nav-btn w-9 h-9 rounded-lg text-xs font-bold ${n===f?"bg-indigo-600 text-white":r?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}" data-idx="${n}">${n+1}</button>`}).join(""),e.querySelectorAll(".quiz-nav-btn").forEach(t=>t.addEventListener("click",()=>A(parseInt(t.dataset.idx,10)))))}function A(e){e<0||e>=l.length||(f=e,y(),v(),it(),E&&Mt())}function y(){const e=document.getElementById("quiz-question-area");if(!e)return;const t=l[f],n=m[t.question_id],r=j&&n!==void 0&&!rt.has(t.question_id),s=new Set(nt[t.question_id]??[]),a=q?F[t.question_id]:void 0;e.innerHTML=`
    <p class="text-xs text-gray-400 mb-2">ข้อ ${f+1} จาก ${l.length}</p>
    <p class="font-semibold text-gray-800 mb-4">${h(t.question_text)}</p>
    ${a===!0?'<p class="text-xs font-bold text-emerald-600 mb-3">✓ ตอบถูก</p>':a===!1?'<p class="text-xs font-bold text-red-600 mb-3">✗ ตอบผิด</p>':""}
    <div class="space-y-2">
      ${t.choices.map((g,x)=>{const w=t.choice_perm?t.choice_perm[x]:x,$=n===w,B=s.has(w);return`
        <label class="flex items-center gap-3 p-3 rounded-xl border ${B?"border-gray-100 opacity-30 line-through cursor-not-allowed":$&&a===!0?"border-emerald-400 bg-emerald-50":$&&a===!1?"border-red-400 bg-red-50":$?"border-indigo-400 bg-indigo-50":r?"border-gray-100 opacity-50 cursor-not-allowed":"border-gray-200 hover:bg-gray-50 cursor-pointer"}">
          <input type="radio" name="quiz-choice" class="quiz-choice-input flex-shrink-0" data-pos="${x}" ${$?"checked":""} ${r||B?"disabled":""} />
          <span class="text-sm">${h(g)}</span>
        </label>`}).join("")}
    </div>
  `,Et(e),e.querySelectorAll(".quiz-choice-input").forEach(g=>g.addEventListener("change",()=>{const x=parseInt(g.dataset.pos,10);j?ne(t,x):(m[t.question_id]=t.choice_perm?t.choice_perm[x]:x,y(),v(),le())}))}async function ne(e,t){var s;const n=e.choice_perm?e.choice_perm[t]:t,r=m[e.question_id];m[e.question_id]=n,y(),v();try{const a=await Gt(i.id,H,e.question_id,n);if(!(a!=null&&a.accepted)){m[e.question_id]=r,b("บันทึกคำตอบไม่สำเร็จ ลองอีกครั้ง","warning"),y(),v();return}q&&(F[e.question_id]=a.is_correct,a.bonus_inventory&&(C=a.bonus_inventory),I=a.current_streak??I,ie(a.is_correct,I),Lt(),at(),(s=a.bonus_awarded)!=null&&s.length&&ae(a.bonus_awarded)),y(),v(),it(),q&&a.is_correct===!1&&f<l.length-1&&setTimeout(()=>{m[e.question_id]===n&&A(f+1)},1400)}catch(a){m[e.question_id]=r,b("บันทึกคำตอบไม่สำเร็จ: "+T(a),"error"),y(),v()}}let bt=!1;function re(){if(bt)return;bt=!0;const e=document.createElement("style");e.textContent=`
    @keyframes qzShake { 10%,90%{transform:translateX(-2px)} 20%,80%{transform:translateX(4px)} 30%,50%,70%{transform:translateX(-8px)} 40%,60%{transform:translateX(8px)} }
    @keyframes qzPop { 0%{transform:scale(1)} 40%{transform:scale(1.25)} 100%{transform:scale(1)} }
    .quiz-streak-pop { animation: qzPop .4s ease-out; }
  `,document.head.appendChild(e)}const gt=["ไม่เป็นไรนะ ตั้งสติแล้วค่อยๆ ทำข้อต่อไป 💪","พลาดนิดหน่อยไม่เป็นไร หายใจลึกๆ แล้วลุยข้อถัดไป 🌤️","ใจเย็นๆ อ่านโจทย์ข้อต่อไปให้ครบก่อนเลือกนะ 🙂"];function ie(e,t=0){re();const n=document.createElement("div");n.className="fixed inset-0 z-[97] flex items-center justify-center pointer-events-none",n.innerHTML=e?`<div class="flex flex-col items-center gap-2">
        <div class="text-8xl animate-bounce" style="filter:drop-shadow(0 4px 12px rgba(16,185,129,.5))">✅</div>
        ${t>=2?`<div class="px-4 py-1.5 rounded-full bg-orange-500 text-white font-bold text-sm shadow-lg">🔥 ต่อเนื่อง ${t} ข้อ!</div>`:""}
      </div>`:`<div class="flex flex-col items-center gap-2">
        <div class="text-8xl" style="animation:qzShake .5s;filter:drop-shadow(0 4px 12px rgba(239,68,68,.5))">❌</div>
        <div class="px-4 py-1.5 rounded-full bg-white border border-red-200 text-red-500 font-semibold text-xs shadow-lg max-w-xs text-center">
          ${gt[Math.floor(Math.random()*gt.length)]}
        </div>
      </div>`,document.body.appendChild(n),setTimeout(()=>n.remove(),e?800:1300)}function at(){const e=document.getElementById("quiz-bonus-toolbar");e&&(e.innerHTML=Object.entries(Z).map(([t,n])=>{const r=C[t]??0,s=r>0;return`
    <button class="bonus-btn relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl border text-xs font-bold flex-shrink-0 ${s?"bg-amber-50 border-amber-300 text-amber-700 shadow-[0_0_0_2px_rgba(245,158,11,0.25)] animate-pulse":"bg-gray-50 border-gray-200 text-gray-300"}"
      data-bonus="${t}" ${s?"":"disabled"}>
      <span class="text-lg leading-none">${n.icon}</span>
      <span class="text-[9px] leading-tight">${n.label}</span>
      ${r>1?`<span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] flex items-center justify-center">${r}</span>`:""}
    </button>`}).join(""),e.querySelectorAll(".bonus-btn").forEach(t=>t.addEventListener("click",()=>se(t.dataset.bonus))))}function ae(e){const t=document.createElement("div");t.className="fixed inset-0 z-[99] bg-black/50 flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-white rounded-3xl overflow-hidden max-w-sm shadow-2xl text-center">
      <div class="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"></div>
      <div class="p-6">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-100 flex items-center justify-center text-3xl animate-bounce">🎉</div>
        <p class="font-bold text-amber-600 text-lg mb-2">ตอบถูกติดต่อกัน! ได้รับโบนัส</p>
        <div class="flex justify-center gap-4 mb-4">
          ${e.map(n=>`<div class="flex flex-col items-center gap-1"><span class="text-3xl">${Z[n].icon}</span><span class="text-xs font-bold text-gray-600">${Z[n].label}</span></div>`).join("")}
        </div>
        <button id="bonus-popup-ack" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">เยี่ยมมาก!</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector("#bonus-popup-ack").addEventListener("click",()=>t.remove()),vt().then(()=>yt("mid")).catch(()=>{})}function se(e){if(e==="extra_time"){tt("extra_time",null);return}if(e==="fifty_fifty"||e==="reveal_answer"){const t=l[f];if(m[t.question_id]!==void 0){b("ใช้ได้เฉพาะข้อที่ยังไม่ได้ตอบ — ไปที่ข้อนั้นก่อนแล้วค่อยใช้โบนัส","warning");return}tt(e,t.question_id);return}e==="fix_wrong"&&oe()}function oe(){const e=l.map((n,r)=>r).filter(n=>F[l[n].question_id]===!1);if(!e.length){b("ยังไม่มีข้อที่ตอบผิดให้แก้ไข","warning");return}const t=document.createElement("div");t.className="fixed inset-0 z-[98] bg-black/40 flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl">
      <p class="font-bold text-gray-800 text-sm mb-3">เลือกข้อที่จะแก้ไข</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${e.map(n=>`<button class="fix-pick w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 font-bold text-xs" data-idx="${n}">${n+1}</button>`).join("")}
      </div>
      <button id="fix-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-gray-500 text-xs font-semibold">ยกเลิก</button>
    </div>
  `,document.body.appendChild(t),t.querySelector("#fix-cancel").addEventListener("click",()=>t.remove()),t.querySelectorAll(".fix-pick").forEach(n=>n.addEventListener("click",async()=>{const r=parseInt(n.dataset.idx,10);t.remove(),await tt("fix_wrong",l[r].question_id),A(r)}))}async function tt(e,t){try{const n=await Xt(i.id,H,e,t);if(!(n!=null&&n.ok)){b((n==null?void 0:n.message)??"ใช้โบนัสไม่สำเร็จ","warning");return}C=n.bonus_inventory??C,e==="fifty_fifty"&&n.eliminated_indices&&(nt[t]=n.eliminated_indices),e==="fix_wrong"&&rt.add(t),e==="extra_time"&&n.new_time_remaining_sec!=null&&(Q+=3e4,et()),e==="reveal_answer"&&n.revealed_index!=null&&(m[t]=n.revealed_index,F[t]=!0),at(),y(),v(),b("ใช้โบนัสสำเร็จ","success")}catch(n){b("ใช้โบนัสไม่สำเร็จ: "+T(n),"error")}}function le(){clearTimeout(O),O=setTimeout(V,800)}async function V(){if(!i||i.status!=="in_progress"||!H||(document.hasFocus()||await At("focus_lost"),!i||i.status!=="in_progress"))return;const e=Math.max(0,Math.round((Q-Date.now())/1e3));try{await Kt(i.id,H,j?null:m,e)&&(Ft(),i.status="submitted",await G(document.getElementById("quiz-root")))}catch(t){console.warn("quiz heartbeat failed",t)}}function It(){et(),P=setInterval(()=>{const e=Math.max(0,Math.round((Q-Date.now())/1e3));et(e),e<=0&&(clearInterval(P),Qt())},1e3)}function et(e){const t=e??Math.max(0,Math.round((Q-Date.now())/1e3)),n=Math.floor(t/60).toString().padStart(2,"0"),r=(t%60).toString().padStart(2,"0"),s=document.getElementById("quiz-timer");s&&(s.textContent=`${n}:${r}`)}function ce(){document.addEventListener("visibilitychange",Bt),document.addEventListener("fullscreenchange",Ht),window.addEventListener("blur",jt),window.addEventListener("focus",Ct),Tt()}function St(){var e;document.removeEventListener("visibilitychange",Bt),document.removeEventListener("fullscreenchange",Ht),window.removeEventListener("blur",jt),window.removeEventListener("focus",Ct),W(),de(),document.fullscreenElement&&((e=document.exitFullscreen)==null||e.call(document).catch(()=>{}))}async function Tt(){try{"wakeLock"in navigator&&(i==null?void 0:i.status)==="in_progress"&&(k=await navigator.wakeLock.request("screen"),k.addEventListener("release",()=>{k=null}))}catch{}}function de(){k==null||k.release().catch(()=>{}),k=null}function Bt(){document.hidden?st("visibility_change"):(W(),(i==null?void 0:i.status)==="in_progress"&&Tt())}function Ht(){document.fullscreenElement?W():(i==null?void 0:i.status)==="in_progress"&&st("fullscreen_exit")}function jt(){st("focus_lost")}function Ct(){W()}const ue=2500;function st(e){S||(S=setTimeout(()=>{S=null,At(e)},ue))}function W(){S&&(clearTimeout(S),S=null)}let _t=0;async function At(e){if(!i||i.status!=="in_progress")return;const t=Date.now();if(!(t-_t<3e3)){_t=t;try{const n=await Vt(i.id,e);n.terminated?(Ft(),i.status="terminated_violation",zt(document.getElementById("quiz-root"))):me(n.violation_count)}catch(n){console.warn("report violation failed",n)}}}function me(e){var n;(n=document.getElementById("quiz-violation-modal"))==null||n.remove();const t=document.createElement("div");t.id="quiz-violation-modal",t.className="fixed inset-0 z-[99] bg-black/60 flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-white rounded-3xl overflow-hidden max-w-sm shadow-2xl text-center">
      <div class="h-2 bg-gradient-to-r from-red-500 via-rose-500 to-red-600"></div>
      <div class="p-6">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center animate-pulse">
          <span class="text-3xl">⚠️</span>
        </div>
        <p class="font-bold text-red-600 text-lg mb-2">ตรวจพบว่าออกนอกหน้าสอบ! (ครั้งที่ ${e}/2)</p>
        <p class="text-sm text-gray-600 mb-5">หากออกนอกหน้าสอบอีกครั้ง ระบบจะ<strong class="text-red-600">ส่งคำตอบอัตโนมัติและล็อกไม่ให้ทำต่อ</strong></p>
        <button id="quiz-violation-ack" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg"
          style="background:linear-gradient(135deg,#ef4444,#dc2626);box-shadow:0 4px 14px rgba(239,68,68,0.4)">รับทราบ</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector("#quiz-violation-ack").addEventListener("click",()=>t.remove())}async function pe(){const e=l.length-Object.keys(m).length;await wt({title:e>0?`ยังเหลือ ${e} ข้อที่ยังไม่ได้ตอบ`:"ยืนยันส่งคำตอบ?",message:e>0?"ต้องการส่งคำตอบเลยหรือไม่?":"เมื่อส่งแล้วจะแก้ไขคำตอบไม่ได้อีก",confirmText:"ส่งคำตอบ"})&&await Qt()}async function Qt(){if(J)return;J=!0,clearInterval(P),clearInterval(R),clearTimeout(O);const e=document.getElementById("btn-submit");e&&L(e,!0),await V().catch(()=>{});try{await Ot(i.id),St(),i.status="submitted",await G(document.getElementById("quiz-root"))}catch(t){b("ส่งคำตอบไม่สำเร็จ: "+T(t),"error"),J=!1,e&&L(e,!1,"ส่งคำตอบ"),It(),R=setInterval(V,15e3)}}function Ft(){clearInterval(P),clearInterval(R),clearInterval(M),M=null,clearTimeout(O),St()}async function G(e){var X,U,ot,lt,ct;let t;try{t=await kt(i.id)}catch{e.innerHTML=D("🚫","ไม่พบผลสอบ","แบบทดสอบนี้อาจถูกลบไปแล้ว กรุณาติดต่อครูผู้สอน");return}i=t;const n=t.quizzes,r=(n==null?void 0:n.review_policy)??"total_only",s=t.score_pct??0,a=await Ut(i.id).catch(()=>null),g=a&&a.total_participants>1?`<p class="text-sm text-indigo-100 mt-2">🏆 อันดับที่ ${a.my_rank} จาก ${a.total_participants} คน</p>`:"";let x="",w="";if((n==null?void 0:n.max_attempts)>1){const[p,o]=await Promise.all([$t(t.quiz_id,t.student_id).catch(()=>[]),Dt(t.quiz_id,t.student_id).catch(()=>null)]),_=n.attempt_scoring_mode??"last",d=_==="highest"?(X=p.reduce((u,N)=>(N.score_pct??0)>((u==null?void 0:u.score_pct)??-1)?N:u,null))==null?void 0:X.attempt_number:_==="first"?(U=p[0])==null?void 0:U.attempt_number:(ot=p[p.length-1])==null?void 0:ot.attempt_number,K={first:"ครั้งแรก",last:"ครั้งล่าสุด",highest:"คะแนนสูงสุด"}[_]??_,z=Math.max(0,n.max_attempts-p.length);x=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-bold text-gray-500">สรุปคะแนนทุกครั้ง</p>
          <p class="text-xs font-bold ${z>0&&!o?"text-indigo-600":"text-gray-400"}">เหลือสิทธิ์ ${z}/${n.max_attempts} ครั้ง</p>
        </div>
        <div class="space-y-1.5">
          ${p.map(u=>`
            <div class="flex items-center justify-between text-sm ${u.attempt_number===d?"font-bold text-indigo-700":"text-gray-500"}">
              <span>ครั้งที่ ${u.attempt_number}${u.status==="terminated_violation"?" (ถูกล็อก)":""}${u.attempt_number===d?" ⭐":""}</span>
              <span>${u.score_pct!=null?u.score_pct.toFixed(1)+"%":"—"}</span>
            </div>`).join("")}
        </div>
        <p class="text-[11px] text-gray-400 mt-3">⭐ = คะแนนที่ใช้บันทึกจริง (ตามที่ครูตั้งไว้: ${K})</p>
      </div>`,o?w=`
      <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
        <p class="text-sm font-bold text-emerald-700">✅ ยืนยันบันทึกคะแนนสอบขั้นสุดท้ายแล้ว</p>
        <p class="text-xs text-emerald-600 mt-1">คะแนนถูกบันทึกเข้าสมุดคะแนนแล้ว — ทำแบบทดสอบนี้ซ้ำอีกไม่ได้แล้ว</p>
      </div>`:z>0?w=`
      <p class="text-[11px] text-gray-400 text-center">⚠️ คะแนนยังไม่เข้าสมุดคะแนนจนกว่าจะกด "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย"</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button id="btn-quiz-retake" class="py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow">ทำอีกครั้ง (เหลือ ${z} สิทธิ์)</button>
        <button id="btn-quiz-finalize" class="py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50">ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย</button>
      </div>`:w=`
      <p class="text-[11px] text-gray-400 text-center">⚠️ คะแนนยังไม่เข้าสมุดคะแนนจนกว่าจะกดยืนยัน</p>
      <button id="btn-quiz-finalize" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow">ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย</button>`}let $="";r!=="total_only"&&($='<div class="space-y-3 mt-5">'+(await qt(i.id).catch(()=>[])).map((o,_)=>{const d=o.is_correct,K=d===!0?"border-emerald-200":d===!1?"border-red-200":"border-gray-100",z=d===!0?'<span class="text-xs font-bold text-emerald-700">✓ ถูก</span>':d===!1?'<span class="text-xs font-bold text-red-600">✗ ผิด</span>':"",u=r==="full_review"?`<ul class="mt-2 space-y-1">${o.choices.map((N,dt)=>{const ut=o.choice_perm?o.choice_perm[dt]:dt,mt=t.answers[o.question_id]===ut,pt=o.correct_choice_index===ut;return`<li class="text-xs ${pt?"text-emerald-700 font-bold":mt?"text-red-600 font-bold":"text-gray-500"}">${pt?"✓":mt?"✗":"○"} ${h(N)}</li>`}).join("")}</ul>
          ${o.explanation?`<p class="text-xs text-gray-500 mt-2 italic">💡 ${h(o.explanation)}</p>`:""}`:"";return`
        <div class="bg-white rounded-2xl border ${K} p-4">
          <div class="flex items-start justify-between gap-2 mb-1">
            <p class="text-xs text-gray-400">ข้อ ${_+1}</p>
            ${z}
          </div>
          <p class="text-sm font-semibold text-gray-800">${h(o.question_text)}</p>
          ${u}
        </div>`}).join("")+"</div>"),e.innerHTML=`
    <div class="max-w-2xl mx-auto space-y-4">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-center text-white shadow-lg">
        <p class="text-sm text-indigo-100 mb-1">ส่งคำตอบเรียบร้อยแล้ว</p>
        <p class="text-5xl font-extrabold">${s.toFixed(1)}%</p>
        ${g}
      </div>
      ${x}
      ${w}
      ${$}
      <button id="btn-back-overview" class="w-full py-3 rounded-2xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50">← กลับหน้าภาพรวม</button>
    </div>
  `,document.getElementById("btn-back-overview").addEventListener("click",()=>{window.location.href="student.html"}),(lt=document.getElementById("btn-quiz-retake"))==null||lt.addEventListener("click",async p=>{const o=p.currentTarget,_=o.textContent;L(o,!0);try{const d=await Pt(t.quiz_id);window.location.href=`quiz-exam.html?attempt=${d.id}`}catch(d){b("เริ่มรอบใหม่ไม่สำเร็จ: "+T(d),"error"),L(o,!1,_)}}),(ct=document.getElementById("btn-quiz-finalize"))==null||ct.addEventListener("click",async p=>{const o=p.currentTarget;if(await wt({title:"ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย?",message:"คะแนนจะถูกบันทึกเข้าสมุดคะแนนจริงตอนนี้ และหลังยืนยันแล้วจะไม่สามารถกลับเข้ามาทำแบบทดสอบนี้ได้อีก",confirmText:"ยืนยันจบการสอบ"})){L(o,!0);try{await Rt(t.quiz_id),await G(e)}catch(d){b("ยืนยันไม่สำเร็จ: "+T(d),"error"),L(o,!1,"ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย")}}}),r!=="total_only"&&Et(e);const B=s>=80?"high":s>=50?"mid":null;B&&vt().then(()=>yt(B)).catch(()=>{})}async function fe(){const{data:{session:e}}=await c.auth.getSession();if(!e){window.location.replace("student-login.html");return}const{data:t}=await c.from("profiles").select("role").eq("id",e.user.id).single();if((t==null?void 0:t.role)!=="student"){window.location.replace("student-login.html");return}const n=new URLSearchParams(window.location.search).get("attempt");if(!n){document.getElementById("quiz-root").innerHTML='<p class="text-center py-20 text-gray-400">ไม่พบแบบทดสอบที่ต้องการเข้าถึง</p>';return}await Jt(n)}fe();
