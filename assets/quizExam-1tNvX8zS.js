import{s as f}from"./supabase-BV-W2lsh.js";/* empty css             */import{l as we,r as ge}from"./katex-loader-DUJObfzT.js";import{l as $e,f as qe}from"./confetti-loader-BAN5Lv-C.js";import{g as A,b as B,a as b,h as ke}from"./ui-DU3V9L7w.js";import{_htmlEsc as g}from"./teacher-views-utils-PYNJrmMY.js";import{b as Re}from"./anti-pull-refresh-BGrI1pMY.js";async function ze(t,e){const{data:n,error:r}=await f.from("quiz_attempts").select("id, attempt_number, status, score_pct, submitted_at, terminated_at").eq("quiz_id",t).eq("student_id",e).in("status",["submitted","terminated_violation"]).order("attempt_number",{ascending:!0});if(r)throw r;return n??[]}async function Ee(t){const{data:e,error:n}=await f.from("quiz_attempts").select("*, quizzes(*)").eq("id",t).single();if(n)throw n;return e}async function Ve(t,e){const{data:n,error:r}=await f.from("quiz_student_finalizations").select("confirmed_at").eq("quiz_id",t).eq("student_id",e).maybeSingle();if(r)throw r;return n}async function We(t){const{data:e,error:n}=await f.rpc("start_quiz_attempt",{p_quiz_id:t});if(n)throw n;return e}async function Ge(t){const{error:e}=await f.rpc("confirm_quiz_final",{p_quiz_id:t});if(e)throw e}async function Le(t){const{data:e,error:n}=await f.rpc("get_quiz_attempt_questions",{p_attempt_id:t});if(n)throw n;return e??[]}async function Xe(t){const{error:e}=await f.rpc("submit_quiz_attempt",{p_attempt_id:t});if(e)throw e}async function Ue(t,e){const{data:n,error:r}=await f.rpc("record_quiz_violation",{p_attempt_id:t,p_violation_type:e});if(r)throw r;return(n==null?void 0:n[0])??{violation_count:0,terminated:!1}}async function Ke(t){const{data:e,error:n}=await f.rpc("claim_quiz_attempt_session",{p_attempt_id:t});if(n)throw n;return e}async function Je(t,e,n,r){const{data:s,error:a}=await f.rpc("submit_quiz_answer",{p_attempt_id:t,p_session_token:e,p_question_id:n,p_chosen_index:r});if(a)throw a;return(s==null?void 0:s[0])??null}async function Ye(t,e,n,r=null){const{data:s,error:a}=await f.rpc("use_quiz_bonus",{p_attempt_id:t,p_session_token:e,p_bonus_type:n,p_question_id:r});if(a)throw a;return(s==null?void 0:s[0])??null}async function Ze(t){const{data:e,error:n}=await f.rpc("get_my_quiz_rank",{p_attempt_id:t});if(n)throw n;return(e==null?void 0:e[0])??null}async function et(t,e,n,r){var m;const{data:s,error:a}=await f.rpc("quiz_attempt_heartbeat",{p_attempt_id:t,p_session_token:e,p_answers:n??null,p_time_remaining_sec:r??null});if(a)throw a;return((m=s==null?void 0:s[0])==null?void 0:m.expired)??!1}let i=null,l=[],x={},_=0,W=null,F=null,Y=null,Z=null,ee=null,ie=!1,R=!1,y=!1,S={},de={},V={},ae={},G=new Set,z={},se=[],q=0,D=!1,M=null,_e=null,T=null,L=null,j=null;const oe={fifty_fifty:{icon:"✂️",label:"50/50"},fix_wrong:{icon:"🛠️",label:"แก้ข้อผิด"},extra_time:{icon:"⏱️",label:"+30 วิ"},reveal_answer:{icon:"🔑",label:"เปิดเฉลย"},teacher_hint:{icon:"💡",label:"คำใบ้ครู"},retry_answer:{icon:"↩️",label:"แก้ข้อถูก"},streak_guard:{icon:"🛡️",label:"เซฟสตรีค"}};async function tt(t){Re(),we().catch(()=>{});const e=document.getElementById("quiz-root");e.innerHTML=nt();try{i=await Ee(t)}catch{e.innerHTML=J("🚫","ไม่พบแบบทดสอบนี้","หรือคุณไม่มีสิทธิ์เข้าถึงแบบทดสอบนี้");return}if(i.status==="terminated_violation"){Me(e);return}if(i.status==="submitted"){await re(e);return}try{F=await Ke(t)}catch{e.innerHTML=J("⚠️","แบบทดสอบนี้เปิดอยู่ในแท็บ/อุปกรณ์อื่น","ปิดแท็บหรืออุปกรณ์อื่นก่อน แล้วรีเฟรชหน้านี้ใหม่");return}try{l=await Le(t)}catch(r){e.innerHTML=J("🚫","โหลดข้อสอบไม่สำเร็จ",A(r));return}x={...i.answers},_=0,W=Date.now()+Math.max(0,i.time_remaining_sec??0)*1e3;const n=i.quizzes;R=!!(n!=null&&n.lock_on_answer||n!=null&&n.instant_feedback_bonus),y=!!(n!=null&&n.instant_feedback_bonus),S=i.bonus_inventory??{},de=i.eliminated_choices??{},V=Object.fromEntries(l.filter(r=>r.hint).map(r=>[r.question_id,r.hint])),ae={},G=new Set(i.unlocked_for_edit??[]),z=i.answer_correctness??{},q=i.current_streak??0,D=!1,M=n!=null&&n.time_limit_minutes?Math.floor(n.time_limit_minutes*60/l.length):null,se=i.attempt_number>1?await ze(i.quiz_id,i.student_id).catch(()=>[]):[],it(e)}function Se(t){window.renderMathInElement?ge(t):we().then(()=>ge(t)).catch(()=>{})}function nt(){return`<div class="flex justify-center py-20 text-gray-400">
    <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg> กำลังโหลด...
  </div>`}function J(t,e,n){return`<div class="max-w-md mx-auto text-center py-20 space-y-3">
    <div class="text-6xl">${t}</div>
    <p class="font-bold text-gray-800 text-lg">${g(e)}</p>
    ${n?`<p class="text-sm text-gray-500">${g(n)}</p>`:""}
  </div>`}function Me(t){t.innerHTML=`<div class="max-w-md mx-auto text-center py-20 space-y-4">
    <div class="text-6xl">🔒</div>
    <p class="font-bold text-gray-800 text-lg">แบบทดสอบถูกล็อก</p>
    <p class="text-sm text-gray-500 leading-relaxed">ระบบตรวจพบว่าคุณออกนอกหน้าสอบครบ 2 ครั้ง จึงส่งคำตอบให้อัตโนมัติแล้ว<br>กรุณาติดต่อครูผู้สอนหากต้องการทำต่อ</p>
  </div>`}const rt=`
  <div class="bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-left space-y-2">
    <p class="text-sm font-bold text-red-700">🔴 ห้ามมองจอที่สองหรือเปิดหนังสือ/เอกสารช่วยระหว่างทำข้อสอบโดยเด็ดขาด</p>
    <p class="text-xs text-red-600">ระบบตรวจสอบการออกนอกหน้าสอบตลอดเวลา และครูสามารถติดตามพฤติกรรมการทำข้อสอบของนักเรียนได้</p>
    <p class="text-xs text-gray-600 pt-1 border-t border-red-100">☝️ นาซีฮัต: ความซื่อสัตย์ (อามานะฮ์) เป็นคุณลักษณะสำคัญยิ่งในอิสลาม อัลลอฮฺทรงเห็นทุกการกระทำของเราไม่ว่าจะอยู่ที่ใด จงทำข้อสอบนี้ด้วยความบริสุทธิ์ใจ เพื่อความจำเริญทั้งในดุนยาและอาคิเราะฮ์</p>
  </div>`;function it(t){const e=i.quizzes,n=se.length?`
    <div class="bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left">
      <p class="text-xs font-bold text-gray-500 mb-2">ประวัติคะแนนครั้งก่อนหน้า</p>
      <div class="space-y-1.5">
        ${se.map(r=>`
          <div class="flex items-center justify-between text-sm">
            <span class="text-gray-500">ครั้งที่ ${r.attempt_number}${r.status==="terminated_violation"?" (ถูกล็อก)":""}</span>
            <span class="font-bold text-gray-700">${r.score_pct!=null?r.score_pct.toFixed(1)+"%":"—"}</span>
          </div>`).join("")}
      </div>
    </div>`:"";t.innerHTML=`
    <div class="max-w-md mx-auto text-center py-16 space-y-4">
      <div class="text-6xl">📝</div>
      <p class="font-bold text-gray-800 text-lg">${g((e==null?void 0:e.title)??"")}</p>
      <p class="text-sm text-gray-500">${l.length} ข้อ${e!=null&&e.time_limit_minutes?` · เวลา ${e.time_limit_minutes} นาที`:""}${(e==null?void 0:e.max_attempts)>1?` · ครั้งที่ ${i.attempt_number}/${e.max_attempts}`:""}</p>
      ${e!=null&&e.deterrent_notice_enabled?rt:""}
      ${n}
      <button id="btn-start-exam" class="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg">เริ่มทำข้อสอบ (เต็มจอ)</button>
      <p class="text-xs text-gray-400">เวลาจะเริ่มนับถอยหลังทันทีที่กดเริ่ม</p>
    </div>
  `,document.getElementById("btn-start-exam").addEventListener("click",()=>{var r,s;(s=(r=document.documentElement).requestFullscreen)==null||s.call(r).catch(()=>{}),at(t),je(),pt(),Z=setInterval(te,15e3)})}function at(t){const e=i.quizzes;t.innerHTML=`
    ${e!=null&&e.deterrent_notice_enabled?`
    <div class="fixed inset-0 pointer-events-none z-[80]" style="box-shadow: inset 0 0 0 4px rgba(239,68,68,.55)"></div>
    <div class="fixed top-3 right-3 z-[81] px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold shadow-lg flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> กำลังตรวจสอบ
    </div>`:""}
    <div class="max-w-3xl mx-auto space-y-4">
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between gap-3">
        <div class="min-w-0">
          <h2 class="font-bold text-gray-800 truncate">${g((e==null?void 0:e.title)??"")}</h2>
          <p class="text-xs text-gray-400">${l.length} ข้อ</p>
        </div>
        ${y?'<div id="quiz-streak-badge" class="flex-shrink-0"></div>':""}
        <div id="quiz-timer" class="text-2xl font-mono font-bold text-indigo-600 flex-shrink-0"></div>
      </div>

      ${y?'<div id="quiz-streak-notice" aria-live="polite"></div>':""}

      ${M?`
      <div class="bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-2">
        <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden"><div id="quiz-perq-bar" class="h-full bg-indigo-400" style="width:100%"></div></div>
        <p class="text-[10px] text-gray-400 mt-1">⏱ เฉลี่ยข้อละ ~${M} วิ (แค่แนวทางจับเวลา ไม่ตัดคะแนน)</p>
      </div>`:""}

      ${y?'<div class="flex gap-2 overflow-x-auto pb-1" id="quiz-bonus-toolbar"></div>':""}

      <div class="flex flex-wrap gap-1.5" id="quiz-nav"></div>

      <div id="quiz-question-area" class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"></div>

      <div class="flex justify-between gap-2">
        <button id="btn-prev" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">← ก่อนหน้า</button>
        <button id="btn-submit" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm">ส่งคำตอบ</button>
        <button id="btn-next" class="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm">ถัดไป →</button>
      </div>
    </div>
  `,document.getElementById("btn-prev").addEventListener("click",()=>I(_-1)),document.getElementById("btn-next").addEventListener("click",()=>I(_+1)),document.getElementById("btn-submit").addEventListener("click",ht),k(),$(),ce(),y&&(ue(),Ie(),Te()),M&&Be()}function Ie(){const t=document.getElementById("quiz-streak-badge");t&&(q>=2?t.innerHTML=`<span class="quiz-streak-pop inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-bold text-sm">🔥 ต่อเนื่อง ${q} ข้อ</span>`:t.innerHTML="")}function Be(){M&&(_e=Date.now(),!T&&(T=setInterval(()=>{const t=document.getElementById("quiz-perq-bar");if(!t){clearInterval(T),T=null;return}const e=(Date.now()-_e)/1e3,n=Math.max(0,100-e/M*100);t.style.width=`${n}%`,t.className=`h-full ${n<=0?"bg-red-400":n<=30?"bg-amber-400":"bg-indigo-400"}`},500)))}function ce(){const t=document.getElementById("btn-submit");!t||!R||t.classList.toggle("hidden",_!==l.length-1)}function k(){const t=document.getElementById("quiz-nav");t&&(t.innerHTML=l.map((e,n)=>{const r=x[e.question_id]!==void 0,s=n===_,a=y&&z[e.question_id]===!1,m=y&&z[e.question_id]===!0;return`<button class="quiz-nav-btn w-9 h-9 rounded-lg text-xs font-bold ${a?"bg-red-100 text-red-700 ring-2 ring-red-300":s?"bg-indigo-600 text-white":m||r?"bg-emerald-100 text-emerald-700":"bg-gray-100 text-gray-500"}" data-idx="${n}">${n+1}</button>`}).join(""),t.querySelectorAll(".quiz-nav-btn").forEach(e=>e.addEventListener("click",()=>I(parseInt(e.dataset.idx,10)))))}function I(t){t<0||t>=l.length||(_=t,$(),k(),ce(),M&&Be())}function $(){var N,O,P,Q;const t=document.getElementById("quiz-question-area");if(!t)return;const e=l[_],n=x[e.question_id],r=R&&n!==void 0&&!G.has(e.question_id),s=new Set(de[e.question_id]??[]),a=ae[e.question_id]??{},m=y?z[e.question_id]:void 0,E={numeric:"12345",upper:"ABCDE",lower:"abcde",thai:"กขคงจ",arabic:"أبجد هـ".replace(/\s/g,"")},h=((N=i==null?void 0:i.quizzes)==null?void 0:N.choice_label_style)==="custom"?(i.quizzes.choice_labels_custom??"").split(",").map(d=>d.trim()).filter(Boolean):Array.from(E[(O=i==null?void 0:i.quizzes)==null?void 0:O.choice_label_style]??E.numeric),C=(P=i==null?void 0:i.quizzes)==null?void 0:P.quiz_language,X=(Q=i==null?void 0:i.quizzes)==null?void 0:Q.quiz_language_custom,U=C==="ar"||C==="jawi"||/العربية|جawi|جاوي|اردو|urdu/i.test(X??"");t.innerHTML=`
    <p class="text-xs text-gray-400 mb-2">ข้อ ${_+1} จาก ${l.length}</p>
    <p class="font-semibold text-gray-800 mb-4" dir="auto">${g(e.question_text)}</p>
    ${m===!0?'<p class="text-xs font-bold text-emerald-600 mb-3">✓ ตอบถูก</p>':m===!1?'<p class="text-xs font-bold text-red-600 mb-3">✗ ตอบผิด</p>':""}
    ${V[e.question_id]?`<div class="rounded-xl border border-sky-200 bg-sky-50 px-3 py-2 mb-3 text-sm text-sky-800"><p class="text-[10px] font-bold text-sky-600 mb-1">💡 คำใบ้จากครู</p><p>${g(V[e.question_id])}</p></div>`:""}
    <div class="space-y-2">
      ${e.choices.map((d,o)=>{const c=e.choice_perm?e.choice_perm[o]:o,u=n===c,v=Object.hasOwn(a,c)?a[c]:s.has(c),w=r||v;return`
        <div class="quiz-choice-card flex items-center gap-3 p-3 rounded-xl border ${v?"border-gray-200 bg-gray-50 opacity-60":u&&m===!0?"border-emerald-400 bg-emerald-50":u&&m===!1?"border-red-400 bg-red-50":u?"border-indigo-400 bg-indigo-50":r?"border-gray-100 opacity-50 cursor-not-allowed":"border-gray-200 hover:bg-gray-50 cursor-pointer"} ${w?"":"cursor-pointer"}">
          <input type="radio" name="quiz-choice" class="quiz-choice-input flex-shrink-0" data-pos="${o}" ${u?"checked":""} ${w?"disabled":""} />
          <span class="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center" aria-hidden="true">${g(h[o]??String(o+1))}</span>
          <span class="text-sm flex-1 ${v?"text-gray-400":""}" dir="${U?"rtl":"auto"}">${g(d)}</span>
          <button type="button" class="quiz-eliminate-btn w-10 h-10 text-xl leading-none font-bold rounded-lg border flex-shrink-0 ${v?"border-amber-300 bg-amber-50 text-amber-700":"border-gray-200 text-gray-500 hover:bg-gray-100"}" data-choice="${c}" aria-label="${v?"ยกเลิกการตัดตัวเลือก":"ตัดตัวเลือก"} ${g(h[o]??String(o+1))}" aria-pressed="${v}"><span aria-hidden="true">✕</span></button>
        </div>`}).join("")}
    </div>
  `,Se(t),t.querySelectorAll(".quiz-choice-input").forEach(d=>d.addEventListener("change",()=>{const o=parseInt(d.dataset.pos,10);R?st(e,o):(x[e.question_id]=e.choice_perm?e.choice_perm[o]:o,$(),k(),ft())})),t.querySelectorAll(".quiz-choice-card").forEach(d=>d.addEventListener("click",o=>{if(o.target.closest("button"))return;const c=d.querySelector(".quiz-choice-input");!c||c.disabled||c.checked||(c.checked=!0,c.dispatchEvent(new Event("change",{bubbles:!0})))})),t.querySelectorAll(".quiz-eliminate-btn").forEach(d=>d.addEventListener("click",()=>{const o=Number(d.dataset.choice),c=Object.hasOwn(a,o)?a[o]:s.has(o);ae[e.question_id]={...a,[o]:!c},$()}))}async function st(t,e){var s;const n=t.choice_perm?t.choice_perm[e]:e,r=x[t.question_id];x[t.question_id]=n,$(),k();try{const a=await Je(i.id,F,t.question_id,n);if(!(a!=null&&a.accepted)){x[t.question_id]=r,b("บันทึกคำตอบไม่สำเร็จ ลองอีกครั้ง","warning"),$(),k();return}if(y){const m=S.streak_guard??0;z[t.question_id]=a.is_correct,a.bonus_inventory&&(S=a.bonus_inventory),q=a.current_streak??q,D=a.is_correct===!1&&m>(S.streak_guard??0),a.is_correct===!0&&(D=!1),D&&b("ใช้เกราะรักษาสตรีคอัตโนมัติแล้ว สตรีคยังต่อเนื่องอยู่","success"),lt(a.is_correct,q),Ie(),Te(),ue(),(s=a.bonus_awarded)!=null&&s.length&&dt(a.bonus_awarded)}$(),k(),ce(),y&&a.is_correct===!1&&_<l.length-1&&setTimeout(()=>{x[t.question_id]===n&&I(_+1)},1400)}catch(a){x[t.question_id]=r,b("บันทึกคำตอบไม่สำเร็จ: "+A(a),"error"),$(),k()}}function Te(){const t=document.getElementById("quiz-streak-notice");t&&(t.innerHTML=q>0?`
    <div class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
      <p class="font-bold">${D?`เกราะช่วยรักษาสตรีค ${q} ข้อไว้แล้ว 🛡️`:`ตอบถูกต่อเนื่อง ${q} ข้อแล้ว 🌱`}</p>
      <p class="mt-1 text-xs text-emerald-700">ค่อยๆ อ่านโจทย์และทำอย่างตั้งใจ เพื่อรักษาความต่อเนื่องนี้นะ</p>
    </div>`:"")}let he=!1;function ot(){if(he)return;he=!0;const t=document.createElement("style");t.textContent=`
    @keyframes qzShake { 10%,90%{transform:translateX(-2px)} 20%,80%{transform:translateX(4px)} 30%,50%,70%{transform:translateX(-8px)} 40%,60%{transform:translateX(8px)} }
    @keyframes qzPop { 0%{transform:scale(1)} 40%{transform:scale(1.25)} 100%{transform:scale(1)} }
    .quiz-streak-pop { animation: qzPop .4s ease-out; }
  `,document.head.appendChild(t)}const ve=["ไม่เป็นไรนะ ตั้งสติแล้วค่อยๆ ทำข้อต่อไป 💪","พลาดนิดหน่อยไม่เป็นไร หายใจลึกๆ แล้วลุยข้อถัดไป 🌤️","ใจเย็นๆ อ่านโจทย์ข้อต่อไปให้ครบก่อนเลือกนะ 🙂"];function lt(t,e=0){ot();const n=document.createElement("div");n.className="fixed inset-0 z-[97] flex items-center justify-center pointer-events-none",n.innerHTML=t?`<div class="flex flex-col items-center gap-2">
        <div class="text-8xl animate-bounce" style="filter:drop-shadow(0 4px 12px rgba(16,185,129,.5))">✅</div>
        ${e>=2?`<div class="px-4 py-1.5 rounded-full bg-orange-500 text-white font-bold text-sm shadow-lg">🔥 ต่อเนื่อง ${e} ข้อ!</div>`:""}
      </div>`:`<div class="flex flex-col items-center gap-2">
        <div class="text-8xl" style="animation:qzShake .5s;filter:drop-shadow(0 4px 12px rgba(239,68,68,.5))">❌</div>
        <div class="px-4 py-1.5 rounded-full bg-white border border-red-200 text-red-500 font-semibold text-xs shadow-lg max-w-xs text-center">
          ${ve[Math.floor(Math.random()*ve.length)]}
        </div>
      </div>`,document.body.appendChild(n),setTimeout(()=>n.remove(),t?800:1300)}function ue(){const t=document.getElementById("quiz-bonus-toolbar");t&&(t.innerHTML=Object.entries(oe).map(([e,n])=>{const r=S[e]??0,s=e==="streak_guard",a=e!=="teacher_hint"||l.some(h=>h.hint_available&&x[h.question_id]===void 0),m=r>0&&!s&&a;return`
    <button class="bonus-btn relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl border text-xs font-bold flex-shrink-0 ${r>0?"bg-amber-50 border-amber-300 text-amber-700 shadow-[0_0_0_2px_rgba(245,158,11,0.25)]":"bg-gray-50 border-gray-200 text-gray-300"} ${m?"animate-pulse":""}"
      data-bonus="${e}" ${m?"":"disabled"} title="${s&&r?"ทำงานอัตโนมัติเมื่อผู้สอบตอบผิด":""}">
      <span class="text-lg leading-none">${n.icon}</span>
      <span class="text-[9px] leading-tight">${n.label}</span>
      ${r>1||s&&r>0?`<span class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-white text-[9px] flex items-center justify-center">${r}</span>`:""}
    </button>`}).join(""),t.querySelectorAll(".bonus-btn").forEach(e=>e.addEventListener("click",()=>ct(e.dataset.bonus))))}function dt(t){const e=document.createElement("div");e.className="fixed inset-0 z-[99] bg-black/50 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl overflow-hidden max-w-sm shadow-2xl text-center">
      <div class="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500"></div>
      <div class="p-6">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-100 flex items-center justify-center text-3xl animate-bounce">🎉</div>
        <p class="font-bold text-amber-600 text-lg mb-2">ตอบถูกติดต่อกัน! ได้รับโบนัส</p>
        <div class="flex justify-center gap-4 mb-4">
          ${t.map(n=>`<div class="flex flex-col items-center gap-1"><span class="text-3xl">${oe[n].icon}</span><span class="text-xs font-bold text-gray-600">${oe[n].label}</span></div>`).join("")}
        </div>
        <button id="bonus-popup-ack" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#f59e0b,#d97706)">เยี่ยมมาก!</button>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector("#bonus-popup-ack").addEventListener("click",()=>e.remove()),$e().then(()=>qe("mid")).catch(()=>{})}function ct(t){if(t==="extra_time"){H("extra_time",null);return}if(t==="fifty_fifty"||t==="reveal_answer"){const e=l[_];if(x[e.question_id]!==void 0){b("ใช้ได้เฉพาะข้อที่ยังไม่ได้ตอบ — ไปที่ข้อนั้นก่อนแล้วค่อยใช้โบนัส","warning");return}H(t,e.question_id);return}if(t==="fix_wrong"&&mt(),t==="retry_answer"&&xt(),t==="teacher_hint"){const e=l[_];x[e.question_id]===void 0&&e.hint_available?H(t,e.question_id):ut()}}function ut(){const t=l.map((n,r)=>r).filter(n=>!!l[n].hint_available&&x[l[n].question_id]===void 0);if(!t.length){b("ไม่มีข้อที่ยังไม่ตอบและมีคำใบ้จากครู","warning");return}const e=document.createElement("div");e.className="fixed inset-0 z-[98] bg-black/40 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl">
      <p class="font-bold text-gray-800 text-sm mb-1">เลือกข้อเพื่อเปิดคำใบ้</p>
      <p class="text-[11px] text-gray-500 mb-3">เลือกได้เฉพาะข้อที่ยังไม่ได้ตอบ</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${t.map(n=>`<button class="hint-pick w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 font-bold text-xs" data-idx="${n}">${n+1}</button>`).join("")}
      </div>
      <button id="hint-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-gray-500 text-xs font-semibold">ยกเลิก</button>
    </div>
  `,document.body.appendChild(e),e.querySelector("#hint-cancel").addEventListener("click",()=>e.remove()),e.querySelectorAll(".hint-pick").forEach(n=>n.addEventListener("click",async()=>{const r=parseInt(n.dataset.idx,10);e.remove(),I(r),await H("teacher_hint",l[r].question_id)}))}function mt(){const t=l.map((n,r)=>r).filter(n=>z[l[n].question_id]===!1&&!G.has(l[n].question_id));if(!t.length){b("ยังไม่มีข้อที่ตอบผิดให้แก้ไข","warning");return}const e=document.createElement("div");e.className="fixed inset-0 z-[98] bg-black/40 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl">
      <p class="font-bold text-gray-800 text-sm mb-3">เลือกข้อที่จะแก้ไข</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${t.map(n=>`<button class="fix-pick w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 font-bold text-xs" data-idx="${n}">${n+1}</button>`).join("")}
      </div>
      <button id="fix-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-gray-500 text-xs font-semibold">ยกเลิก</button>
    </div>
  `,document.body.appendChild(e),e.querySelector("#fix-cancel").addEventListener("click",()=>e.remove()),e.querySelectorAll(".fix-pick").forEach(n=>n.addEventListener("click",async()=>{const r=parseInt(n.dataset.idx,10);e.remove(),await H("fix_wrong",l[r].question_id),I(r)}))}function xt(){const t=l.map((n,r)=>r).filter(n=>z[l[n].question_id]===!0&&!G.has(l[n].question_id));if(!t.length){b("ยังไม่มีข้อที่ตอบถูกและล็อกไว้ให้แก้ไข","warning");return}const e=document.createElement("div");e.className="fixed inset-0 z-[98] bg-black/40 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl p-5 w-full max-w-xs shadow-2xl">
      <p class="font-bold text-gray-800 text-sm mb-1">เลือกข้อที่ตอบถูกเพื่อแก้คำตอบ</p>
      <p class="text-[11px] text-gray-500 mb-3">โบนัสนี้ใช้ได้หนึ่งครั้งกับข้อที่ล็อกคำตอบแล้ว</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${t.map(n=>`<button class="retry-pick w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs" data-idx="${n}">${n+1}</button>`).join("")}
      </div>
      <button id="retry-cancel" class="w-full py-2 rounded-xl border border-gray-200 text-gray-500 text-xs font-semibold">ยกเลิก</button>
    </div>
  `,document.body.appendChild(e),e.querySelector("#retry-cancel").addEventListener("click",()=>e.remove()),e.querySelectorAll(".retry-pick").forEach(n=>n.addEventListener("click",async()=>{const r=parseInt(n.dataset.idx,10);e.remove();const s=l[r];await H("retry_answer",s.question_id)&&I(r)}))}async function H(t,e){var n;try{const r=await Ye(i.id,F,t,e);if(!(r!=null&&r.ok))return b((r==null?void 0:r.message)??"ใช้โบนัสไม่สำเร็จ","warning"),!1;if(S=r.bonus_inventory??S,t==="fifty_fifty"&&r.eliminated_indices&&(de[e]=r.eliminated_indices),(t==="fix_wrong"||t==="retry_answer")&&G.add(e),t==="extra_time"&&r.new_time_remaining_sec!=null&&(W+=3e4,le()),t==="reveal_answer"&&r.revealed_index!=null&&(x[e]=r.revealed_index,z[e]=!0),t==="teacher_hint"){V[e]=r.message||((n=l.find(a=>a.question_id===e))==null?void 0:n.hint)||"";const s=l.find(a=>a.question_id===e);s&&(s.hint=V[e])}return ue(),$(),k(),b("ใช้โบนัสสำเร็จ","success"),!0}catch(r){return b("ใช้โบนัสไม่สำเร็จ: "+A(r),"error"),!1}}function ft(){clearTimeout(ee),ee=setTimeout(te,800)}async function te(){if(!i||i.status!=="in_progress"||!F||(document.hasFocus()||await Qe("focus_lost"),!i||i.status!=="in_progress"))return;const t=Math.max(0,Math.round((W-Date.now())/1e3));try{await et(i.id,F,R?null:x,t)&&(Fe(),i.status="submitted",await re(document.getElementById("quiz-root")))}catch(e){console.warn("quiz heartbeat failed",e)}}function je(){le(),Y=setInterval(()=>{const t=Math.max(0,Math.round((W-Date.now())/1e3));le(t),t<=0&&(clearInterval(Y),De())},1e3)}function le(t){const e=t??Math.max(0,Math.round((W-Date.now())/1e3)),n=Math.floor(e/60).toString().padStart(2,"0"),r=(e%60).toString().padStart(2,"0"),s=document.getElementById("quiz-timer");s&&(s.textContent=`${n}:${r}`)}function pt(){document.addEventListener("visibilitychange",Ce),document.addEventListener("fullscreenchange",Ne),window.addEventListener("blur",Oe),window.addEventListener("focus",Pe),Ae()}function He(){var t;document.removeEventListener("visibilitychange",Ce),document.removeEventListener("fullscreenchange",Ne),window.removeEventListener("blur",Oe),window.removeEventListener("focus",Pe),ne(),bt(),document.fullscreenElement&&((t=document.exitFullscreen)==null||t.call(document).catch(()=>{}))}async function Ae(){try{"wakeLock"in navigator&&(i==null?void 0:i.status)==="in_progress"&&(L=await navigator.wakeLock.request("screen"),L.addEventListener("release",()=>{L=null}))}catch{}}function bt(){L==null||L.release().catch(()=>{}),L=null}function Ce(){document.hidden?me("visibility_change"):(ne(),(i==null?void 0:i.status)==="in_progress"&&Ae())}function Ne(){document.fullscreenElement?ne():(i==null?void 0:i.status)==="in_progress"&&me("fullscreen_exit")}function Oe(){me("focus_lost")}function Pe(){ne()}const gt=2500;function me(t){j||(j=setTimeout(()=>{j=null,Qe(t)},gt))}function ne(){j&&(clearTimeout(j),j=null)}let ye=0;async function Qe(t){if(!i||i.status!=="in_progress")return;const e=Date.now();if(!(e-ye<3e3)){ye=e;try{const n=await Ue(i.id,t);n.terminated?(Fe(),i.status="terminated_violation",Me(document.getElementById("quiz-root"))):_t(n.violation_count)}catch(n){console.warn("report violation failed",n)}}}function _t(t){var n;(n=document.getElementById("quiz-violation-modal"))==null||n.remove();const e=document.createElement("div");e.id="quiz-violation-modal",e.className="fixed inset-0 z-[99] bg-black/60 flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-white rounded-3xl overflow-hidden max-w-sm shadow-2xl text-center">
      <div class="h-2 bg-gradient-to-r from-red-500 via-rose-500 to-red-600"></div>
      <div class="p-6">
        <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center animate-pulse">
          <span class="text-3xl">⚠️</span>
        </div>
        <p class="font-bold text-red-600 text-lg mb-2">ตรวจพบว่าออกนอกหน้าสอบ! (ครั้งที่ ${t}/2)</p>
        <p class="text-sm text-gray-600 mb-5">หากออกนอกหน้าสอบอีกครั้ง ระบบจะ<strong class="text-red-600">ส่งคำตอบอัตโนมัติและล็อกไม่ให้ทำต่อ</strong></p>
        <button id="quiz-violation-ack" class="w-full py-3 rounded-2xl text-white font-bold text-sm shadow-lg"
          style="background:linear-gradient(135deg,#ef4444,#dc2626);box-shadow:0 4px 14px rgba(239,68,68,0.4)">รับทราบ</button>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelector("#quiz-violation-ack").addEventListener("click",()=>e.remove())}async function ht(){const t=l.length-Object.keys(x).length;await ke({title:t>0?`ยังเหลือ ${t} ข้อที่ยังไม่ได้ตอบ`:"ยืนยันส่งคำตอบ?",message:t>0?"ต้องการส่งคำตอบเลยหรือไม่?":"เมื่อส่งแล้วจะแก้ไขคำตอบไม่ได้อีก",confirmText:"ส่งคำตอบ"})&&await De()}async function De(){if(ie)return;ie=!0,clearInterval(Y),clearInterval(Z),clearTimeout(ee);const t=document.getElementById("btn-submit");t&&B(t,!0),await te().catch(()=>{});try{await Xe(i.id),He(),i.status="submitted",await re(document.getElementById("quiz-root"))}catch(e){b("ส่งคำตอบไม่สำเร็จ: "+A(e),"error"),ie=!1,t&&B(t,!1,"ส่งคำตอบ"),je(),Z=setInterval(te,15e3)}}function Fe(){clearInterval(Y),clearInterval(Z),clearInterval(T),T=null,clearTimeout(ee),He()}async function re(t){var U,N,O,P,Q;let e;try{e=await Ee(i.id)}catch{t.innerHTML=J("🚫","ไม่พบผลสอบ","แบบทดสอบนี้อาจถูกลบไปแล้ว กรุณาติดต่อครูผู้สอน");return}i=e;const n=e.quizzes,r=(n==null?void 0:n.review_policy)??"total_only",s=e.score_pct??0,a=await Ze(i.id).catch(()=>null),m=a&&a.total_participants>1?`<p class="text-sm text-indigo-100 mt-2">🏆 อันดับที่ ${a.my_rank} จาก ${a.total_participants} คน</p>`:"";let E="",h="";if((n==null?void 0:n.max_attempts)>1){const[d,o]=await Promise.all([ze(e.quiz_id,e.student_id).catch(()=>[]),Ve(e.quiz_id,e.student_id).catch(()=>null)]),c=n.attempt_scoring_mode??"last",u=c==="highest"?(U=d.reduce((p,K)=>(K.score_pct??0)>((p==null?void 0:p.score_pct)??-1)?K:p,null))==null?void 0:U.attempt_number:c==="first"?(N=d[0])==null?void 0:N.attempt_number:(O=d[d.length-1])==null?void 0:O.attempt_number,v={first:"ครั้งแรก",last:"ครั้งล่าสุด",highest:"คะแนนสูงสุด"}[c]??c,w=Math.max(0,n.max_attempts-d.length);E=`
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div class="flex items-center justify-between mb-3">
          <p class="text-xs font-bold text-gray-500">สรุปคะแนนทุกครั้ง</p>
          <p class="text-xs font-bold ${w>0&&!o?"text-indigo-600":"text-gray-400"}">เหลือสิทธิ์ ${w}/${n.max_attempts} ครั้ง</p>
        </div>
        <div class="space-y-1.5">
          ${d.map(p=>`
            <div class="flex items-center justify-between text-sm ${p.attempt_number===u?"font-bold text-indigo-700":"text-gray-500"}">
              <span>ครั้งที่ ${p.attempt_number}${p.status==="terminated_violation"?" (ถูกล็อก)":""}${p.attempt_number===u?" ⭐":""}</span>
              <span>${p.score_pct!=null?p.score_pct.toFixed(1)+"%":"—"}</span>
            </div>`).join("")}
        </div>
        <p class="text-[11px] text-gray-400 mt-3">⭐ = คะแนนที่ใช้บันทึกจริง (ตามที่ครูตั้งไว้: ${v})</p>
      </div>`,o?h=`
      <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
        <p class="text-sm font-bold text-emerald-700">✅ ยืนยันบันทึกคะแนนสอบขั้นสุดท้ายแล้ว</p>
        <p class="text-xs text-emerald-600 mt-1">คะแนนถูกบันทึกเข้าสมุดคะแนนแล้ว — ทำแบบทดสอบนี้ซ้ำอีกไม่ได้แล้ว</p>
      </div>`:w>0?h=`
      <p class="text-[11px] text-gray-400 text-center">⚠️ คะแนนยังไม่เข้าสมุดคะแนนจนกว่าจะกด "ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย"</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button id="btn-quiz-retake" class="py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow">ทำอีกครั้ง (เหลือ ${w} สิทธิ์)</button>
        <button id="btn-quiz-finalize" class="py-3 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50">ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย</button>
      </div>`:h=`
      <p class="text-[11px] text-gray-400 text-center">⚠️ คะแนนยังไม่เข้าสมุดคะแนนจนกว่าจะกดยืนยัน</p>
      <button id="btn-quiz-finalize" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow">ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย</button>`}let C="";r!=="total_only"&&(C='<div class="space-y-3 mt-5">'+(await Le(i.id).catch(()=>[])).map((o,c)=>{const u=o.is_correct,v=u===!0?"border-emerald-200":u===!1?"border-red-200":"border-gray-100",w=u===!0?'<span class="text-xs font-bold text-emerald-700">✓ ถูก</span>':u===!1?'<span class="text-xs font-bold text-red-600">✗ ผิด</span>':"",p=r==="full_review"?`<ul class="mt-2 space-y-1">${o.choices.map((K,xe)=>{const fe=o.choice_perm?o.choice_perm[xe]:xe,pe=e.answers[o.question_id]===fe,be=o.correct_choice_index===fe;return`<li class="text-xs ${be?"text-emerald-700 font-bold":pe?"text-red-600 font-bold":"text-gray-500"}">${be?"✓":pe?"✗":"○"} ${g(K)}</li>`}).join("")}</ul>
          ${o.explanation?`<p class="text-xs text-gray-500 mt-2 italic">💡 ${g(o.explanation)}</p>`:""}`:"";return`
        <div class="bg-white rounded-2xl border ${v} p-4">
          <div class="flex items-start justify-between gap-2 mb-1">
            <p class="text-xs text-gray-400">ข้อ ${c+1}</p>
            ${w}
          </div>
          <p class="text-sm font-semibold text-gray-800">${g(o.question_text)}</p>
          ${p}
        </div>`}).join("")+"</div>"),t.innerHTML=`
    <div class="max-w-2xl mx-auto space-y-4">
      <div class="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-center text-white shadow-lg">
        <p class="text-sm text-indigo-100 mb-1">ส่งคำตอบเรียบร้อยแล้ว</p>
        <p class="text-5xl font-extrabold">${s.toFixed(1)}%</p>
        ${m}
      </div>
      ${E}
      ${h}
      ${C}
      <button id="btn-back-overview" class="w-full py-3 rounded-2xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50">← กลับหน้าภาพรวม</button>
    </div>
  `,document.getElementById("btn-back-overview").addEventListener("click",()=>{window.location.href="student.html"}),(P=document.getElementById("btn-quiz-retake"))==null||P.addEventListener("click",async d=>{const o=d.currentTarget,c=o.textContent;B(o,!0);try{const u=await We(e.quiz_id);window.location.href=`quiz-exam.html?attempt=${u.id}`}catch(u){b("เริ่มรอบใหม่ไม่สำเร็จ: "+A(u),"error"),B(o,!1,c)}}),(Q=document.getElementById("btn-quiz-finalize"))==null||Q.addEventListener("click",async d=>{const o=d.currentTarget;if(await ke({title:"ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย?",message:"คะแนนจะถูกบันทึกเข้าสมุดคะแนนจริงตอนนี้ และหลังยืนยันแล้วจะไม่สามารถกลับเข้ามาทำแบบทดสอบนี้ได้อีก",confirmText:"ยืนยันจบการสอบ"})){B(o,!0);try{await Ge(e.quiz_id),await re(t)}catch(u){b("ยืนยันไม่สำเร็จ: "+A(u),"error"),B(o,!1,"ยืนยันบันทึกคะแนนสอบขั้นสุดท้าย")}}}),r!=="total_only"&&Se(t);const X=s>=80?"high":s>=50?"mid":null;X&&$e().then(()=>qe(X)).catch(()=>{})}async function vt(){const{data:{session:t}}=await f.auth.getSession();if(!t){window.location.replace("student-login.html");return}const{data:e}=await f.from("profiles").select("role").eq("id",t.user.id).single();if((e==null?void 0:e.role)!=="student"){window.location.replace("student-login.html");return}const n=new URLSearchParams(window.location.search).get("attempt");if(!n){document.getElementById("quiz-root").innerHTML='<p class="text-center py-20 text-gray-400">ไม่พบแบบทดสอบที่ต้องการเข้าถึง</p>';return}await tt(n)}vt();
