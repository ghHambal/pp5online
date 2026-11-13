import{s as u}from"./supabase-BV-W2lsh.js";/* empty css             */import{l as ht,r as pt}from"./katex-loader-DUJObfzT.js";import{l as vt,f as yt}from"./confetti-loader-BAN5Lv-C.js";import{g as S,b as E,a as b,h as wt}from"./ui-C-ZO4RB5.js";import{_htmlEsc as g}from"./teacher-views-utils-DMDc0a8I.js";import{b as Ft}from"./anti-pull-refresh-BGrI1pMY.js";async function $t(e,t){const{data:n,error:r}=await u.from("quiz_attempts").select("id, attempt_number, status, score_pct, submitted_at, terminated_at").eq("quiz_id",e).eq("student_id",t).in("status",["submitted","terminated_violation"]).order("attempt_number",{ascending:!0});if(r)throw r;return n??[]}async function zt(e){const{data:t,error:n}=await u.from("quiz_attempts").select("*, quizzes(*)").eq("id",e).single();if(n)throw n;return t}async function Nt(e,t){const{data:n,error:r}=await u.from("quiz_student_finalizations").select("confirmed_at").eq("quiz_id",e).eq("student_id",t).maybeSingle();if(r)throw r;return n}async function Pt(e){const{data:t,error:n}=await u.rpc("start_quiz_attempt",{p_quiz_id:e});if(n)throw n;return t}async function Rt(e){const{error:t}=await u.rpc("confirm_quiz_final",{p_quiz_id:e});if(t)throw t}async function qt(e){const{data:t,error:n}=await u.rpc("get_quiz_attempt_questions",{p_attempt_id:e});if(n)throw n;return t??[]}async function Ot(e){const{error:t}=await u.rpc("submit_quiz_attempt",{p_attempt_id:e});if(t)throw t}async function Vt(e,t){const{data:n,error:r}=await u.rpc("record_quiz_violation",{p_attempt_id:e,p_violation_type:t});if(r)throw r;return(n==null?void 0:n[0])??{violation_count:0,terminated:!1}}async function Wt(e){const{data:t,error:n}=await u.rpc("claim_quiz_attempt_session",{p_attempt_id:e});if(n)throw n;return t}async function Gt(e,t,n,r){const{data:a,error:s}=await u.rpc("submit_quiz_answer",{p_attempt_id:e,p_session_token:t,p_question_id:n,p_chosen_index:r});if(s)throw s;return(a==null?void 0:a[0])??null}async function Xt(e,t,n,r=null){const{data:a,error:s}=await u.rpc("use_quiz_bonus",{p_attempt_id:e,p_session_token:t,p_bonus_type:n,p_question_id:r});if(s)throw s;return(a==null?void 0:a[0])??null}async function Ut(e){const{data:t,error:n}=await u.rpc("get_my_quiz_rank",{p_attempt_id:e});if(n)throw n;return(t==null?void 0:t[0])??null}async function Kt(e,t,n,r){var y;const{data:a,error:s}=await u.rpc("quiz_attempt_heartbeat",{p_attempt_id:e,p_session_token:t,p_answers:n??null,p_time_remaining_sec:r??null});if(s)throw s;return((y=a==null?void 0:a[0])==null?void 0:y.expired)??!1}let i=null,d=[],p={},x=0,F=null,A=null,X=null,U=null,K=null,tt=!1,C=!1,q=!1,Q={},st={},at=new Set,N={},et=[],M=0,k=null,xt=null,L=null,z=null,I=null;const nt={fifty_fifty:{icon:"✂️",label:"50/50"},fix_wrong:{icon:"🛠️",label:"แก้ข้อผิด"},extra_time:{icon:"⏱️",label:"+30 วิ"},reveal_answer:{icon:"🔑",label:"เปิดเฉลย"}};async function Jt(e){Ft(),ht().catch(()=>{});const t=document.getElementById("quiz-root");t.innerHTML=Yt();try{i=await zt(e)}catch{t.innerHTML=G("🚫","ไม่พบแบบทดสอบนี้","หรือคุณไม่มีสิทธิ์เข้าถึงแบบทดสอบนี้");return}if(i.status==="terminated_violation"){Et(t);return}if(i.status==="submitted"){await Z(t);return}try{A=await Wt(e)}catch{t.innerHTML=G("⚠️","แบบทดสอบนี้เปิดอยู่ในแท็บ/อุปกรณ์อื่น","ปิดแท็บหรืออุปกรณ์อื่นก่อน แล้วรีเฟรชหน้านี้ใหม่");return}try{d=await qt(e)}catch(r){t.innerHTML=G("🚫","โหลดข้อสอบไม่สำเร็จ",S(r));return}p={...i.answers},x=0,F=Date.now()+Math.max(0,i.time_remaining_sec??0)*1e3;const n=i.quizzes;C=!!(n!=null&&n.lock_on_answer||n!=null&&n.instant_feedback_bonus),q=!!(n!=null&&n.instant_feedback_bonus),Q=i.bonus_inventory??{},st=i.eliminated_choices??{},at=new Set(i.unlocked_for_edit??[]),N=i.answer_correctness??{},M=i.current_streak??0,k=n!=null&&n.time_limit_minutes?Math.floor(n.time_limit_minutes*60/d.length):null,et=i.attempt_number>1?await $t(i.quiz_id,i.student_id).catch(()=>[]):[],te(t)}function kt(e){window.renderMathInElement?pt(e):ht().then(()=>pt(e)).catch(()=>{})}function Yt(){return`<div class="flex justify-center py-20 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`}function G(e,t,n){return`<div class="max-w-md mx-auto text-center py-20 space-y-3">
    <div class="text-6xl">${e}</div>
    <p class="font-bold text-gray-800 text-lg">${g(t)}</p>
    ${n?`<p class="text-sm text-gray-500">${g(n)}</p>`:""}
  </div>`}function Et(e){e.innerHTML=`<div class="max-w-md mx-auto text-center py-20 space-y-4">
    <div class="text-6xl">🔒</div>
    <p class="font-bold text-gray-800 text-lg">แบบทดสอบถูกล็อก</p>
    <p class="text-sm text-gray-500 leading-relaxed">ระบบตรวจพบว่าคุณออกนอกหน้าสอบครบ 2 ครั้ง จึงส่งคำตอบให้อัตโนมัติแล้ว<br>กรุณาติดต่อครูผู้สอนหากต้องการทำต่อ</p>
  </div>`}const Zt=`
  <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-left space-y-2">
    <p class="text-sm font-bold text-red-700">🔴 ห้ามมองจอที่สองหรือเปิดหนังสือ/เอกสารช่วยระหว่างทำข้อสอบโดยเด็ดขาด</p>
    <p class="text-xs text-red-600">ระบบตรวจสอบการออกนอกหน้าสอบตลอดเวลา และครูสามารถติดตามพฤติกรรมการทำข้อสอบของนักเรียนได้</p>
    <p class="text-xs text-gray-600 pt-1 border-t border-red-100">☝️ นาซีฮัต: ความซื่อสัตย์ (อามานะฮ์) เป็นคุณลักษณะสำคัญยิ่งในอิสลาม อัลลอฮฺทรงเห็นทุกการกระทำของเราไม่ว่าจะอยู่ที่ใด จงทำข้อสอบนี้ด้วยความบริสุทธิ์ใจ เพื่อความจำเริญทั้งในดุนยาและอาคิเราะฮ์</p>
  </div>`;function te(e){const t=i.quizzes,n=et.length?`
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left">
      <p class="text-xs font-bold text-gray-500 mb-2">ประวัติคะแนนครั้งก่อนหน้า</p>
      <div class="space-y-1.5">
        ${et.map(r=>`
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">ครั้งที่ ${r.attempt_number}${r.status==="terminated_violation"?" (ถูกล็อก)":""}</span>
            <span class="font-bold text-gray-700">${r.score_pct!=null?r.score_pct.toFixed(1)+"%":"—"}</span>
          </div>`).join("")}
      </div>
    </div>`:"";e.innerHTML=`
    <div class="max-w-md mx-auto text-center py-16 space-y-4">
      <div class="text-6xl">📝</div>
      <p class="font-bold text-gray-800 text-lg">${g((t==null?void 0:t.title)??"")}</p>
      <p class="text-sm text-gray-500">${d.length} ข้อ${t!=null&&t.time_limit_minutes?` · เวลา ${t.time_limit_minutes} นาที`:""}${(t==null?void 0:t.max_attempts)>1?` · ครั้งที่ ${i.attempt_number}/${t.max_attempts}`:""}</p>
      ${t!=null&&t.deterrent_notice_enabled?Zt:""}
      ${n}
      <button id="btn-start-exam" class="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg">เริ่มทำข้อสอบ (เต็มจอ)</button>
      <p class="text-xs text-gray-400">เวลาจะเริ่มนับถอยหลังทันทีที่กดเริ่ม</p>
    </div>
  `,document.getElementById("btn-start-exam").addEventListener("click",()=>{var r,a;(a=(r=document.documentElement).requestFullscreen)==null||a.call(r).catch(()=>{}),ee(e),It(),ce(),U=setInterval(J,15e3)})}function ee(e){const t=i.quizzes;e.innerHTML=`
    ${t!=null&&t.deterrent_notice_enabled?`
    <div class="fixed inset-0 pointer-events-none z-[80]" style="box-shadow: inset 0 0 0 4px rgba(239,68,68,.55)"></div>
    <div class="fixed top-3 right-3 z-[81] px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold shadow-lg flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> กำลังตรวจสอบ
    </div>`:""}
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${g((t==null?void 0:t.title)??"")}</h2>
          <p class="text-xs text-gray-400">${d.length} ข้อ</p>
        </div>
        ${q?'<div id="quiz-streak-badge" class="flex-shrink-0"></div>':""}
        <div id="quiz-timer" class="text-2xl font-mono font-bold text-indigo-600 flex-shrink-0"></div>
      </div>

      ${k?`
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2">
        <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden"><div id="quiz-perq-bar" class="h-full bg-indigo-400" style="width:100%"></div></div>
        <p class="text-[10px] text-gray-400 mt-1">⏱ เฉลี่ยข้อละ ~${k} วิ (แค่แนวทางจับเวลา ไม่ตัดคะแนน)</p>
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
  `,document.getElementById("btn-prev").addEventListener("click",()=>D(x-1)),document.getElementById("btn-next").addEventListener("click",()=>D(x+1)),document.getElementById("btn-submit").addEventListener("click",fe),h(),v(),ot(),q&&(lt(),Lt()),k&&Mt()}function Lt(){const e=document.getElementById("quiz-streak-badge");e&&(M>=2?e.innerHTML=`<span class="quiz-streak-pop inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold text-sm">🔥 ต่อเนื่อง ${M} ข้อ</span>`:e.innerHTML="")}function Mt(){k&&(xt=Date.now(),!L&&(L=setInterval(()=>{const e=document.getElementById("quiz-perq-bar");if(!e){clearInterval(L),L=null;return}const t=(Date.now()-xt)/1e3,n=Math.max(0,100-t/k*100);e.style.width=`${n}%`,e.className=`h-full ${n<=0?"bg-red-400":n<=30?"bg-amber-400":"bg-indigo-400"}`},500)))}function ot(){const e=document.getElementById("btn-submit");!e||!C||e.classList.toggle("hidden",x!==d.length-1)}function h(){const e=document.getElementById("quiz-nav");e&&(e.innerHTML=d.map((t,n)=>{const r=p[t.question_id]!==void 0;return`<button class="quiz-nav-btn w-9 h-9 rounded-lg text-xs font-bold ${n===x?"bg-indigo-600 text-white":r?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}" data-idx="${n}">${n+1}</button>`}).join(""),e.querySelectorAll(".quiz-nav-btn").forEach(t=>t.addEventListener("click",()=>D(parseInt(t.dataset.idx,10)))))}function D(e){e<0||e>=d.length||(x=e,v(),h(),ot(),k&&Mt())}function v(){var T,B,j,H;const e=document.getElementById("quiz-question-area");if(!e)return;const t=d[x],n=p[t.question_id],r=C&&n!==void 0&&!at.has(t.question_id),a=new Set(st[t.question_id]??[]),s=q?N[t.question_id]:void 0,y={numeric:"12345",upper:"ABCDE",lower:"abcde",thai:"กขคงจ",arabic:"أبجد هـ".replace(/\s/g,"")},P=((T=i==null?void 0:i.quizzes)==null?void 0:T.choice_label_style)==="custom"?(i.quizzes.choice_labels_custom??"").split(",").map(_=>_.trim()).filter(Boolean):Array.from(y[(B=i==null?void 0:i.quizzes)==null?void 0:B.choice_label_style]??y.numeric),w=(j=i==null?void 0:i.quizzes)==null?void 0:j.quiz_language,R=(H=i==null?void 0:i.quizzes)==null?void 0:H.quiz_language_custom,O=w==="ar"||w==="jawi"||/العربية|جawi|جاوي|اردو|urdu/i.test(R??"");e.innerHTML=`
    <p class="text-xs text-gray-400 mb-2">ข้อ ${x+1} จาก ${d.length}</p>
    <p class="font-semibold text-gray-800 mb-4" dir="auto">${g(t.question_text)}</p>
    ${s===!0?'<p class="text-xs font-bold text-emerald-600 mb-3">✓ ตอบถูก</p>':s===!1?'<p class="text-xs font-bold text-red-600 mb-3">✗ ตอบผิด</p>':""}
    <div class="space-y-2">
      ${t.choices.map((_,o)=>{const l=t.choice_perm?t.choice_perm[o]:o,m=n===l,c=a.has(l);return`
        <label class="flex items-center gap-3 p-3 rounded-xl border ${c?"border-gray-100 opacity-30 line-through cursor-not-allowed":m&&s===!0?"border-emerald-400 bg-emerald-50":m&&s===!1?"border-red-400 bg-red-50":m?"border-indigo-400 bg-indigo-50":r?"border-gray-100 opacity-50 cursor-not-allowed":"border-gray-200 hover:bg-gray-50 cursor-pointer"}">
          <input type="radio" name="quiz-choice" class="quiz-choice-input flex-shrink-0" data-pos="${o}" ${m?"checked":""} ${r||c?"disabled":""} />
          <span class="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center" aria-hidden="true">${g(P[o]??String(o+1))}</span>
          <span class="text-sm flex-1" dir="${O?"rtl":"auto"}">${g(_)}</span>
        </label>`}).join("")}
    </div>
  `,kt(e),e.querySelectorAll(".quiz-choice-input").forEach(_=>_.addEventListener("change",()=>{const o=parseInt(_.dataset.pos,10);C?ne(t,o):(p[t.question_id]=t.choice_perm?t.choice_perm[o]:o,v(),h(),le())}))}async function ne(e,t){var a;const n=e.choice_perm?e.choice_perm[t]:t,r=p[e.question_id];p[e.question_id]=n,v(),h();try{const s=await Gt(i.id,A,e.question_id,n);if(!(s!=null&&s.accepted)){p[e.question_id]=r,b("บันทึกคำตอบไม่สำเร็จ ลองอีกครั้ง","warning"),v(),h();return}q&&(N[e.question_id]=s.is_correct,s.bonus_inventory&&(Q=s.bonus_inventory),M=s.current_streak??M,re(s.is_correct,M),Lt(),lt(),(a=s.bonus_awarded)!=null&&a.length&&se(s.bonus_awarded)),v(),h(),ot(),q&&s.is_correct===!1&&x<d.length-1&&setTimeout(()=>{p[e.question_id]===n&&D(x+1)},1400)}catch(s){p[e.question_id]=r,b("บันทึกคำตอบไม่สำเร็จ: "+S(s),"error"),v(),h()}}let bt=!1;function ie(){if(bt)return;bt=!0;const e=document.createElement("style");e.textContent=`
    @keyframes qzShake { 10%,90%{transform:translateX(-2px)} 20%,80%{transform:translateX(4px)} 30%,50%,70%{transform:translateX(-8px)} 40%,60%{transform:translateX(8px)} }
    @keyframes qzPop { 0%{transform:scale(1)} 40%{transform:scale(1.25)} 100%{transform:scale(1)} }
    .quiz-streak-pop { animation: qzPop .4s ease-out; }
  `,document.head.appendChild(e)}const gt=["ไม่เป็นไรนะ ตั้งสติแล้วค่อยๆ ทำข้อต่อไป 💪","พลาดนิดหน่อยไม่เป็นไร หายใจลึกๆ แล้วลุยข้อถัดไป 🌤️","ใจเย็นๆ อ่านโจทย์ข้อต่อไปให้ครบก่อนเลือกนะ 🙂"];function re(e,t=0){ie();const n=document.createElement("div");n.className="fixed inset-0 z-[97] flex items-center justify-center pointer-events-none",n.innerHTML=e?`<div class="flex flex-col items-center gap-2">
        <div class="text-8xl animate-bounce" style="filter:drop-shadow(0 4px 12px rgba(16,185,129,.5))">✅</div>
        ${t>=2?`<div class="px-4 py-1.5 rounded-full bg-orange-500 text-white font-bold text-sm shadow-lg">🔥 ต่อเนื่อง ${t} ข้อ!</div>`:""}
      </div>`:`<div class="flex flex-col items-center gap-2">
        <div class="text-8xl" style="animation:qzShake .5s;filter:drop-shadow(0 4px 12px rgba(239,68,68,.5))">❌</div>
        <div class="px-4 py-1.5 rounded-full bg-white border border-red-200 text-red-500 font-semibold text-xs shadow-lg max-w-xs text-center">
          ${gt[Math.floor(Math.random()*gt.length)]}
        </div>
      </div>`,document.body.appendChild(n),setTimeout(()=>n.remove(),e?800:1300)}function lt(){const e=document.getElementById("quiz-bonus-toolbar");e&&(e.innerHTML=Object.entries(nt).map(([t,n])=>{const r=Q[t]??0,a=r>0;return`
    <button class="bonus-btn relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl border text-xs font-bold flex-shrink-0 ${a?"bg-amber-50 border-amber-300 text-amber-700 shadow-[0_0_0_2px_rgba(245,158,11,0.25)] animate-pulse":"bg-gray-50 border-gray-200 text-gray-300"}"
      data-bonus="${t}" ${a?"":"disabled"}>
      <span class="text-lg leading-none">${n.icon}</span>
      <span class="text-[9px] leading-tight">${n.label}</span>
      ${r>1?`<span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] flex items-center justify-center">${r}</span>`:""}
    </button>`}).join(""),e.querySelectorAll(".bonus-btn").forEach(t=>t.addEventListener("click",()=>ae(t.dataset.bonus))))}function se(e){const t=document.createElement("div");t.className="fixed inset-0 z-[99] bg-black/50 flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-white rounded-3xl overflow-hidden max-w-sm shadow-2xl text-center">
      <div class="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"></div>
      <div class="p-6">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-100 flex items-center justify-center text-3xl animate-bounce">🎉</div>
        <p class="font-bold text-amber-600 text-lg mb-2">ตอบถูกติดต่อกัน! ได้รับโบนัส</p>
        <div class="flex justify-center gap-4 mb-4">
          ${e.map(n=>`<div class="flex flex-col items-center gap-1"><span class="text-3xl">${nt[n].icon}</span><span class="text-xs font-bold text-gray-600">${nt[n].label}</span></div>`).join("")}
        </div>
        <button id="bonus-popup-ack" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">เยี่ยมมาก!</button>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelector("#bonus-popup-ack").addEventListener("click",()=>t.remove()),vt().then(()=>yt("mid")).catch(()=>{})}function ae(e){if(e==="extra_time"){it("extra_time",null);return}if(e==="fifty_fifty"||e==="reveal_answer"){const t=d[x];if(p[t.question_id]!==void 0){b("ใช้ได้เฉพาะข้อที่ยังไม่ได้ตอบ — ไปที่ข้อนั้นก่อนแล้วค่อยใช้โบนัส","warning");return}it(e,t.question_id);return}e==="fix_wrong"&&oe()}function oe(){const e=d.map((n,r)=>r).filter(n=>N[d[n].question_id]===!1);if(!e.length){b("ยังไม่มีข้อที่ตอบผิดให้แก้ไข","warning");return}const t=document.createElement("div");t.className="fixed inset-0 z-[98] bg-black/40 flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl">
      <p class="font-bold text-gray-800 text-sm mb-3">เลือกข้อที่จะแก้ไข</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${e.map(n=>`<button class="fix-pick w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 font-bold text-xs" data-idx="${n}">${n+1}</button>`).join("")}
      </div>
      <button id="fix-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-gray-500 text-xs font-semibold">ยกเลิก</button>
    </div>
  `,document.body.appendChild(t),t.querySelector("#fix-cancel").addEventListener("click",()=>t.remove()),t.querySelectorAll(".fix-pick").forEach(n=>n.addEventListener("click",async()=>{const r=parseInt(n.dataset.idx,10);t.remove(),await it("fix_wrong",d[r].question_id),D(r)}))}async function it(e,t){try{const n=await Xt(i.id,A,e,t);if(!(n!=null&&n.ok)){b((n==null?void 0:n.message)??"ใช้โบนัสไม่สำเร็จ","warning");return}Q=n.bonus_inventory??Q,e==="fifty_fifty"&&n.eliminated_indices&&(st[t]=n.eliminated_indices),e==="fix_wrong"&&at.add(t),e==="extra_time"&&n.new_time_remaining_sec!=null&&(F+=3e4,rt()),e==="reveal_answer"&&n.revealed_index!=null&&(p[t]=n.revealed_index,N[t]=!0),lt(),v(),h(),b("ใช้โบนัสสำเร็จ","success")}catch(n){b("ใช้โบนัสไม่สำเร็จ: "+S(n),"error")}}function le(){clearTimeout(K),K=setTimeout(J,800)}async function J(){if(!i||i.status!=="in_progress"||!A||(document.hasFocus()||await Ct("focus_lost"),!i||i.status!=="in_progress"))return;const e=Math.max(0,Math.round((F-Date.now())/1e3));try{await Kt(i.id,A,C?null:p,e)&&(Dt(),i.status="submitted",await Z(document.getElementById("quiz-root")))}catch(t){console.warn("quiz heartbeat failed",t)}}function It(){rt(),X=setInterval(()=>{const e=Math.max(0,Math.round((F-Date.now())/1e3));rt(e),e<=0&&(clearInterval(X),Qt())},1e3)}function rt(e){const t=e??Math.max(0,Math.round((F-Date.now())/1e3)),n=Math.floor(t/60).toString().padStart(2,"0"),r=(t%60).toString().padStart(2,"0"),a=document.getElementById("quiz-timer");a&&(a.textContent=`${n}:${r}`)}function ce(){document.addEventListener("visibilitychange",Bt),document.addEventListener("fullscreenchange",jt),window.addEventListener("blur",Ht),window.addEventListener("focus",At),Tt()}function St(){var e;document.removeEventListener("visibilitychange",Bt),document.removeEventListener("fullscreenchange",jt),window.removeEventListener("blur",Ht),window.removeEventListener("focus",At),Y(),de(),document.fullscreenElement&&((e=document.exitFullscreen)==null||e.call(document).catch(()=>{}))}async function Tt(){try{"wakeLock"in navigator&&(i==null?void 0:i.status)==="in_progress"&&(z=await navigator.wakeLock.request("screen"),z.addEventListener("release",()=>{z=null}))}catch{}}function de(){z==null||z.release().catch(()=>{}),z=null}function Bt(){document.hidden?ct("visibility_change"):(Y(),(i==null?void 0:i.status)==="in_progress"&&Tt())}function jt(){document.fullscreenElement?Y():(i==null?void 0:i.status)==="in_progress"&&ct("fullscreen_exit")}function Ht(){ct("focus_lost")}function At(){Y()}const ue=2500;function ct(e){I||(I=setTimeout(()=>{I=null,Ct(e)},ue))}function Y(){I&&(clearTimeout(I),I=null)}let _t=0;async function Ct(e){if(!i||i.status!=="in_progress")return;const t=Date.now();if(!(t-_t<3e3)){_t=t;try{const n=await Vt(i.id,e);n.terminated?(Dt(),i.status="terminated_violation",Et(document.getElementById("quiz-root"))):me(n.violation_count)}catch(n){console.warn("report violation failed",n)}}}function me(e){var n;(n=document.getElementById("quiz-violation-modal"))==null||n.remove();const t=document.createElement("div");t.id="quiz-violation-modal",t.className="fixed inset-0 z-[99] bg-black/60 flex items-center justify-center p-4",t.innerHTML=`
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
  `,document.body.appendChild(t),t.querySelector("#quiz-violation-ack").addEventListener("click",()=>t.remove())}async function fe(){const e=d.length-Object.keys(p).length;await wt({title:e>0?`ยังเหลือ ${e} ข้อที่ยังไม่ได้ตอบ`:"ยืนยันส่งคำตอบ?",message:e>0?"ต้องการส่งคำตอบเลยหรือไม่?":"เมื่อส่งแล้วจะแก้ไขคำตอบไม่ได้อีก",confirmText:"ส่งคำตอบ"})&&await Qt()}async function Qt(){if(tt)return;tt=!0,clearInterval(X),clearInterval(U),clearTimeout(K);const e=document.getElementById("btn-submit");e&&E(e,!0),await J().catch(()=>{});try{await Ot(i.id),St(),i.status="submitted",await Z(document.getElementById("quiz-root"))}catch(t){b("ส่งคำตอบไม่สำเร็จ: "+S(t),"error"),tt=!1,e&&E(e,!1,"ส่งคำตอบ"),It(),U=setInterval(J,15e3)}}function Dt(){clearInterval(X),clearInterval(U),clearInterval(L),L=null,clearTimeout(K),St()}async function Z(e){var T,B,j,H,_;let t;try{t=await zt(i.id)}catch{e.innerHTML=G("🚫","ไม่พบผลสอบ","แบบทดสอบนี้อาจถูกลบไปแล้ว กรุณาติดต่อครูผู้สอน");return}i=t;const n=t.quizzes,r=(n==null?void 0:n.review_policy)??"total_only",a=t.score_pct??0,s=await Ut(i.id).catch(()=>null),y=s&&s.total_participants>1?`<p class="text-sm text-indigo-100 mt-2">🏆 อันดับที่ ${s.my_rank} จาก ${s.total_participants} คน</p>`:"";let P="",w="";if((n==null?void 0:n.max_attempts)>1){const[o,l]=await Promise.all([$t(t.quiz_id,t.student_id).catch(()=>[]),Nt(t.quiz_id,t.student_id).catch(()=>null)]),m=n.attempt_scoring_mode??"last",c=m==="highest"?(T=o.reduce((f,W)=>(W.score_pct??0)>((f==null?void 0:f.score_pct)??-1)?W:f,null))==null?void 0:T.attempt_number:m==="first"?(B=o[0])==null?void 0:B.attempt_number:(j=o[o.length-1])==null?void 0:j.attempt_number,V={first:"ครั้งแรก",last:"ครั้งล่าสุด",highest:"คะแนนสูงสุด"}[m]??m,$=Math.max(0,n.max_attempts-o.length);P=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-bold text-gray-500">สรุปคะแนนทุกครั้ง</p>
          <p class="text-xs font-bold ${$>0&&!l?"text-indigo-600":"text-gray-400"}">เหลือสิทธิ์ ${$}/${n.max_attempts} ครั้ง</p>
        </div>
        <div class="space-y-1.5">
          ${o.map(f=>`
            <div class="flex items-center justify-between text-sm ${f.attempt_number===c?"font-bold text-indigo-700":"text-gray-500"}">
              <span>ครั้งที่ ${f.attempt_number}${f.status==="terminated_violation"?" (ถูกล็อก)":""}${f.attempt_number===c?" ⭐":""}</span>
              <span>${f.score_pct!=null?f.score_pct.toFixed(1)+"%":"—"}</span>
            </div>`).join("")}
        </div>
        <p class="text-[11px] text-gray-400 mt-3">⭐ = คะแนนที่ใช้บันทึกจริง (ตามที่ครูตั้งไว้: ${V})</p>
      </div>`,l?w=`
      <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
        <p class="text-sm font-bold text-emerald-700">✅ ยืนยันบันทึกคะแนนสอบขั้นสุดท้ายแล้ว</p>
        <p class="text-xs text-emerald-600 mt-1">คะแนนถูกบันทึกเข้าสมุดคะแนนแล้ว — ทำแบบทดสอบนี้ซ้ำอีกไม่ได้แล้ว</p>
      </div>`:$>0?w=`
      <p class="text-[11px] text-gray-400 text-center">⚠️ คะแนนยังไม่เข้าสมุดคะแนนจนกว่าจะกด "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย"</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button id="btn-quiz-retake" class="py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow">ทำอีกครั้ง (เหลือ ${$} สิทธิ์)</button>
        <button id="btn-quiz-finalize" class="py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50">ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย</button>
      </div>`:w=`
      <p class="text-[11px] text-gray-400 text-center">⚠️ คะแนนยังไม่เข้าสมุดคะแนนจนกว่าจะกดยืนยัน</p>
      <button id="btn-quiz-finalize" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow">ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย</button>`}let R="";r!=="total_only"&&(R='<div class="space-y-3 mt-5">'+(await qt(i.id).catch(()=>[])).map((l,m)=>{const c=l.is_correct,V=c===!0?"border-emerald-200":c===!1?"border-red-200":"border-gray-100",$=c===!0?'<span class="text-xs font-bold text-emerald-700">✓ ถูก</span>':c===!1?'<span class="text-xs font-bold text-red-600">✗ ผิด</span>':"",f=r==="full_review"?`<ul class="mt-2 space-y-1">${l.choices.map((W,dt)=>{const ut=l.choice_perm?l.choice_perm[dt]:dt,mt=t.answers[l.question_id]===ut,ft=l.correct_choice_index===ut;return`<li class="text-xs ${ft?"text-emerald-700 font-bold":mt?"text-red-600 font-bold":"text-gray-500"}">${ft?"✓":mt?"✗":"○"} ${g(W)}</li>`}).join("")}</ul>
          ${l.explanation?`<p class="text-xs text-gray-500 mt-2 italic">💡 ${g(l.explanation)}</p>`:""}`:"";return`
        <div class="bg-white rounded-2xl border ${V} p-4">
          <div class="flex items-start justify-between gap-2 mb-1">
            <p class="text-xs text-gray-400">ข้อ ${m+1}</p>
            ${$}
          </div>
          <p class="text-sm font-semibold text-gray-800">${g(l.question_text)}</p>
          ${f}
        </div>`}).join("")+"</div>"),e.innerHTML=`
    <div class="max-w-2xl mx-auto space-y-4">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-center text-white shadow-lg">
        <p class="text-sm text-indigo-100 mb-1">ส่งคำตอบเรียบร้อยแล้ว</p>
        <p class="text-5xl font-extrabold">${a.toFixed(1)}%</p>
        ${y}
      </div>
      ${P}
      ${w}
      ${R}
      <button id="btn-back-overview" class="w-full py-3 rounded-2xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50">← กลับหน้าภาพรวม</button>
    </div>
  `,document.getElementById("btn-back-overview").addEventListener("click",()=>{window.location.href="student.html"}),(H=document.getElementById("btn-quiz-retake"))==null||H.addEventListener("click",async o=>{const l=o.currentTarget,m=l.textContent;E(l,!0);try{const c=await Pt(t.quiz_id);window.location.href=`quiz-exam.html?attempt=${c.id}`}catch(c){b("เริ่มรอบใหม่ไม่สำเร็จ: "+S(c),"error"),E(l,!1,m)}}),(_=document.getElementById("btn-quiz-finalize"))==null||_.addEventListener("click",async o=>{const l=o.currentTarget;if(await wt({title:"ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย?",message:"คะแนนจะถูกบันทึกเข้าสมุดคะแนนจริงตอนนี้ และหลังยืนยันแล้วจะไม่สามารถกลับเข้ามาทำแบบทดสอบนี้ได้อีก",confirmText:"ยืนยันจบการสอบ"})){E(l,!0);try{await Rt(t.quiz_id),await Z(e)}catch(c){b("ยืนยันไม่สำเร็จ: "+S(c),"error"),E(l,!1,"ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย")}}}),r!=="total_only"&&kt(e);const O=a>=80?"high":a>=50?"mid":null;O&&vt().then(()=>yt(O)).catch(()=>{})}async function pe(){const{data:{session:e}}=await u.auth.getSession();if(!e){window.location.replace("student-login.html");return}const{data:t}=await u.from("profiles").select("role").eq("id",e.user.id).single();if((t==null?void 0:t.role)!=="student"){window.location.replace("student-login.html");return}const n=new URLSearchParams(window.location.search).get("attempt");if(!n){document.getElementById("quiz-root").innerHTML='<p class="text-center py-20 text-gray-400">ไม่พบแบบทดสอบที่ต้องการเข้าถึง</p>';return}await Jt(n)}pe();
