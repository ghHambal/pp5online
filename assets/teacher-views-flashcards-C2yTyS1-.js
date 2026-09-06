const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-classes-s_CI5F_w.js","assets/ui-Dh03k4iX.js","assets/api-1xsyVspL.js","assets/supabase-BV-W2lsh.js","assets/browser-JP79f-a9.js","assets/sports-portals.js_v_10.22-BrIjazIR.js","assets/impersonation-C66q0Y-O.js","assets/storage-D6nkcVz6.js","assets/pp5-doc-CVTwqJKw.js","assets/teacher-views-utils-B2Iz3UWp.js","assets/teacher-views-grades-DyBe1K7u.js","assets/regrade-api-C8s-TuM0.js","assets/score-qr-scanner-SDrghEsT.js","assets/teacher-views-attendance-C31WiJPz.js","assets/leave-time-CrS9gT63.js","assets/confetti-loader-BAN5Lv-C.js"])))=>i.map(i=>d[i]);
import{a as b,f as Me,s as ce,_ as _e,b as te}from"./ui-Dh03k4iX.js";import{getFlashcardDecks as je,getTeacherPackageAccess as He,getFlashcards as fe,deleteFlashcardDeck as De,getClassStudents as Re,getScoreColumns as qe,getMyClasses as Pe,saveStudentScore as ze,uploadFlashcardImage as oe,updateFlashcardDeck as Be,createFlashcardDeck as Le,saveFlashcards as Ce}from"./api-1xsyVspL.js";import{setActiveNav as ve,setTitle as we,setContent as Q,_htmlEsc as S}from"./teacher-views-utils-B2Iz3UWp.js";import{s as ue}from"./supabase-BV-W2lsh.js";let ie=null,de=null,Z=null,W=null;function ae(){if(ie&&(clearInterval(ie),ie=null),de&&(document.removeEventListener("keydown",de),de=null),Z&&(document.removeEventListener("fullscreenchange",Z),document.removeEventListener("webkitfullscreenchange",Z),document.removeEventListener("mozfullscreenchange",Z),document.removeEventListener("MSFullscreenChange",Z),Z=null),W&&(clearInterval(W),W=null),document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)try{document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}catch{}const l=document.getElementById("flashcard-play-wrapper");l&&l.classList.contains("fc-fs-wrapper")&&(l.classList.remove("fc-fs-wrapper"),document.body.style.overflow="")}const Se=()=>new Promise(l=>{if(window.renderMathInElement){l();return}if(!document.getElementById("katex-css")){const f=document.createElement("link");f.id="katex-css",f.rel="stylesheet",f.href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css",document.head.appendChild(f)}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js",o.onload=()=>{const f=document.createElement("script");f.src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js",f.onload=()=>{l()},document.head.appendChild(f)},document.head.appendChild(o)}),$e=l=>new Promise((o,f)=>{const _=new Image,A=URL.createObjectURL(l);_.onload=()=>{URL.revokeObjectURL(A);const F=document.createElement("canvas");let{width:B,height:x}=_;if(B>600||x>600){const g=Math.min(600/B,600/x);B=Math.round(B*g),x=Math.round(x*g)}F.width=B,F.height=x,F.getContext("2d").drawImage(_,0,0,B,x);const u=g=>{F.toBlob(I=>{if(!I)return f(new Error("Canvas compression failed"));I.size<=102400||g<=.3?o(I):u(Math.round((g-.1)*10)/10)},"image/webp",g)};u(.8)},_.onerror=()=>f(new Error("ไม่สามารถโหลดไฟล์รูปภาพได้")),_.src=A}),xe=[{id:"teal",label:"ทีล (ค่าเริ่มต้น)",dot:"linear-gradient(135deg, #0f766e, #115e59)",front:"linear-gradient(135deg, #0f766e, #115e59, #0f766e)",frontColor:"white",back:"linear-gradient(135deg, #ffffff, #f8fafc)",backColor:"#0f172a",backBorder:"#cbd5e1",fsFront:"linear-gradient(135deg, #1e1b4b, #311042, #1e1b4b)",fsFrontGlow:"rgba(99,102,241,0.3)",fsBack:"linear-gradient(135deg, #0f172a, #1e293b)",fsBackColor:"#f8fafc",blob1:"#0d9488",blob2:"#6366f1",timerBar:"#0d9488"},{id:"ocean",label:"มหาสมุทร",dot:"linear-gradient(135deg, #1d4ed8, #1e40af)",front:"linear-gradient(135deg, #1d4ed8, #1e40af, #2563eb)",frontColor:"white",back:"linear-gradient(135deg, #eff6ff, #dbeafe)",backColor:"#1e3a8a",backBorder:"#93c5fd",fsFront:"linear-gradient(135deg, #1e3a8a, #1d4ed8, #1e3a8a)",fsFrontGlow:"rgba(59,130,246,0.35)",fsBack:"linear-gradient(135deg, #0f172a, #1e293b)",fsBackColor:"#bfdbfe",blob1:"#3b82f6",blob2:"#0ea5e9",timerBar:"#3b82f6"},{id:"sunset",label:"พระอาทิตย์ตก",dot:"linear-gradient(135deg, #dc2626, #ea580c)",front:"linear-gradient(135deg, #dc2626, #ea580c, #f97316)",frontColor:"white",back:"linear-gradient(135deg, #fff7ed, #fef3c7)",backColor:"#7c2d12",backBorder:"#fca5a5",fsFront:"linear-gradient(135deg, #7c2d12, #991b1b, #b45309)",fsFrontGlow:"rgba(251,146,60,0.3)",fsBack:"linear-gradient(135deg, #1c1208, #2c1a04)",fsBackColor:"#fed7aa",blob1:"#f97316",blob2:"#dc2626",timerBar:"#f97316"},{id:"violet",label:"ม่วงมายา",dot:"linear-gradient(135deg, #7c3aed, #6d28d9)",front:"linear-gradient(135deg, #7c3aed, #6d28d9, #8b5cf6)",frontColor:"white",back:"linear-gradient(135deg, #f5f3ff, #ede9fe)",backColor:"#4c1d95",backBorder:"#c4b5fd",fsFront:"linear-gradient(135deg, #2e1065, #4c1d95, #2e1065)",fsFrontGlow:"rgba(139,92,246,0.35)",fsBack:"linear-gradient(135deg, #0d0b1a, #1a1033)",fsBackColor:"#e9d5ff",blob1:"#8b5cf6",blob2:"#ec4899",timerBar:"#8b5cf6"},{id:"emerald",label:"มรกต",dot:"linear-gradient(135deg, #059669, #065f46)",front:"linear-gradient(135deg, #059669, #065f46, #10b981)",frontColor:"white",back:"linear-gradient(135deg, #ecfdf5, #d1fae5)",backColor:"#064e3b",backBorder:"#6ee7b7",fsFront:"linear-gradient(135deg, #064e3b, #065f46, #064e3b)",fsFrontGlow:"rgba(16,185,129,0.3)",fsBack:"linear-gradient(135deg, #020c07, #031a0f)",fsBackColor:"#a7f3d0",blob1:"#10b981",blob2:"#0d9488",timerBar:"#10b981"},{id:"rose",label:"กุหลาบ",dot:"linear-gradient(135deg, #e11d48, #be185d)",front:"linear-gradient(135deg, #e11d48, #be185d, #f43f5e)",frontColor:"white",back:"linear-gradient(135deg, #fff1f2, #ffe4e6)",backColor:"#881337",backBorder:"#fda4af",fsFront:"linear-gradient(135deg, #881337, #9f1239, #881337)",fsFrontGlow:"rgba(244,63,94,0.3)",fsBack:"linear-gradient(135deg, #180a0d, #200d12)",fsBackColor:"#fecdd3",blob1:"#f43f5e",blob2:"#c026d3",timerBar:"#f43f5e"},{id:"amber",label:"ทองคำ",dot:"linear-gradient(135deg, #d97706, #b45309)",front:"linear-gradient(135deg, #d97706, #b45309, #f59e0b)",frontColor:"white",back:"linear-gradient(135deg, #fffbeb, #fef3c7)",backColor:"#78350f",backBorder:"#fcd34d",fsFront:"linear-gradient(135deg, #78350f, #92400e, #78350f)",fsFrontGlow:"rgba(245,158,11,0.3)",fsBack:"linear-gradient(135deg, #1a1204, #241a06)",fsBackColor:"#fde68a",blob1:"#f59e0b",blob2:"#d97706",timerBar:"#f59e0b"},{id:"slate",label:"กาแล็กซี",dot:"linear-gradient(135deg, #334155, #1e293b)",front:"linear-gradient(135deg, #334155, #1e293b, #475569)",frontColor:"white",back:"linear-gradient(135deg, #f8fafc, #f1f5f9)",backColor:"#0f172a",backBorder:"#94a3b8",fsFront:"linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",fsFrontGlow:"rgba(148,163,184,0.2)",fsBack:"linear-gradient(135deg, #04070f, #0a1020)",fsBackColor:"#e2e8f0",blob1:"#64748b",blob2:"#475569",timerBar:"#64748b"}],ye=l=>xe.find(o=>o.id===l)||xe[0],Fe=()=>{if(document.getElementById("flashcard-styles"))return;const l=document.createElement("style");l.id="flashcard-styles",l.textContent=`
    .fc-perspective {
      perspective: 1600px;
    }
    .fc-card {
      width: 100%;
      height: 320px;
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      transform-style: preserve-3d;
      cursor: pointer;
    }
    .fc-card.flipped {
      transform: rotateY(180deg);
    }
    .fc-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2.5rem;
      border-radius: 2rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
    .fc-front {
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .fc-back {
      transform: rotateY(180deg);
      border-width: 3px;
      border-style: solid;
    }
    
    /* Fullscreen Mode Specifics */
    .fc-fs-wrapper,
    #flashcard-play-wrapper:fullscreen {
      position: fixed !important;
      inset: 0 !important;
      z-index: 9999 !important;
      background: #090d16 !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      padding: 2rem !important;
      overflow: hidden !important;
      width: 100vw !important;
      height: 100vh !important;
      max-width: none !important;
      margin: 0 !important;
    }
    .fc-fs-wrapper .fc-card,
    #flashcard-play-wrapper:fullscreen .fc-card {
      height: 420px;
      max-width: 600px;
    }
    .fc-fs-wrapper .fc-front,
    #flashcard-play-wrapper:fullscreen .fc-front {
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .fc-fs-wrapper .fc-back,
    #flashcard-play-wrapper:fullscreen .fc-back {
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    /* Ambient animations */
    .fc-ambient-blob {
      position: absolute;
      width: 450px;
      height: 450px;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.15;
      z-index: 0;
      pointer-events: none;
      animation: fc-float 15s infinite alternate ease-in-out;
    }
    .fc-ambient-1 {
      top: -10%;
      left: -10%;
    }
    .fc-ambient-2 {
      bottom: -10%;
      right: -10%;
      animation-delay: -5s;
    }
    
    @keyframes fc-float {
      0% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(50px, 40px) scale(1.1); }
      100% { transform: translate(-30px, -50px) scale(0.9); }
    }
    
    /* AutoPlay Timer Progress */
    .fc-timer-bar {
      height: 3px;
      width: 0%;
      transition: width 0.1s linear;
    }

    /* Theme Picker */
    .fc-theme-dot {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid transparent;
      transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .fc-theme-dot:hover {
      transform: scale(1.15);
    }
    .fc-theme-dot.selected {
      border-color: white;
      box-shadow: 0 0 0 3px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.3);
      transform: scale(1.2);
    }
    
    @keyframes fc-scaleUp {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-scaleUp {
      animation: fc-scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
  `,document.head.appendChild(l)};async function ee(l){var o,f;if(l){ae(),Fe(),ve("flashcards"),we("ระบบบัตรคำ (Flash Cards)"),Q(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดข้อมูล...
    </div>
  `);try{const[k,X]=await Promise.all([je(l.id),He(l.id).catch(()=>({hasSemester:!1}))]),A=(window._pp5DonorTierIndex??0)>=2||X.hasSemester;let F="";k.length===0?F=`
        <div class="col-span-full bg-white rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
          <div class="text-5xl mb-4">🃏</div>
          <h3 class="font-bold text-gray-700 text-base mb-1">ยังไม่มีชุดบัตรคำศัพท์</h3>
          <p class="text-sm text-gray-400 mb-6">คุณครูสามารถสร้างชุดบัตรคำ เพื่อให้นักเรียนฝึกฝน ทบทวน หรือเล่นทายคำศัพท์ได้ครับ</p>
          <button id="btn-create-deck-empty" class="px-5 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-lg shadow-teal-100 transition">
            ＋ สร้างชุดบัตรคำแรก
          </button>
        </div>
      `:F=(await Promise.all(k.map(async E=>{const u=await fe(E.id).catch(()=>[]);return{...E,cardCount:u.length}}))).map(E=>`
        <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-3 mb-2">
              <span class="px-2.5 py-1 bg-teal-50 text-teal-700 font-bold text-xs rounded-lg">${E.cardCount} บัตรคำ</span>
            </div>
            <h4 class="font-bold text-gray-800 text-base line-clamp-1 mb-1">${S(E.title)}</h4>
            <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">${S(E.description||"ไม่มีคำอธิบาย")}</p>
          </div>
          <div class="flex gap-2 border-t border-gray-50 pt-3">
            <button class="btn-play flex-1 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm" data-id="${E.id}">
              <span>🚀</span> เล่น
            </button>
            <button class="btn-edit px-3 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold transition" data-id="${E.id}" title="แก้ไข">
              ✏️ แก้ไข
            </button>
            <button class="btn-delete px-3 py-2 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 text-xs font-semibold transition" data-id="${E.id}" title="ลบ">
              🗑️
            </button>
          </div>
        </div>
      `).join(""),Q(`
      <div class="space-y-6">
        <!-- Banner Header -->
        <div class="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
          <div class="absolute right-0 bottom-0 translate-y-6 translate-x-4 opacity-10 text-8xl">🃏</div>
          <h2 class="font-bold text-lg leading-tight mb-1">ระบบบัตรคำ (Flash Cards)</h2>
          <p class="text-xs text-teal-100 leading-relaxed max-w-md">ตัวช่วยคุณครูในการสร้างเครื่องมือช่วยท่องจำ คำศัพท์ ควิซทบทวนบทเรียน ทั้งแบบเพิ่มเอง อัปโหลดไฟล์ หรือสร้างด้วย Gemini AI</p>
          
          ${A?`
            <div class="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs font-semibold">
              <span>⭐</span>
              <span>ใช้งานโหมดผู้สนับสนุน: สร้างได้ไม่จำกัดวิชา</span>
            </div>
          `:`
            <div class="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-2xl text-xs">
              <span>💡</span>
              <span>สมาชิกทั่วไปสร้างได้ <strong>1 ชุด</strong> (ปัจจุบันมี <strong>${k.length}/1 ชุด</strong>)</span>
            </div>
          `}
        </div>

        <!-- Toolbar -->
        ${k.length>0?`
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-gray-700 text-sm">รายการชุดบัตรคำของคุณ</h3>
            <button id="btn-create-deck" class="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-sm transition">
              ＋ สร้างชุดใหม่
            </button>
          </div>
        `:""}

        <!-- Decks Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          ${F}
        </div>
      </div>
    `);const B=()=>{var x;if(k.length>=1&&!A){(x=document.getElementById("btn-donate-float"))==null||x.click(),b("กรุณาสนับสนุนผู้พัฒนาระดับ 2 เพื่อใช้งานชุดการ์ดไม่จำกัดครับ 🙏","warning");return}he(l,null)};(o=document.getElementById("btn-create-deck-empty"))==null||o.addEventListener("click",B),(f=document.getElementById("btn-create-deck"))==null||f.addEventListener("click",B),document.querySelectorAll(".btn-play").forEach(x=>{x.addEventListener("click",()=>{const E=x.dataset.id,u=k.find(g=>g.id===E);Ne(l,u)})}),document.querySelectorAll(".btn-edit").forEach(x=>{x.addEventListener("click",()=>{const E=x.dataset.id,u=k.find(g=>g.id===E);he(l,u)})}),document.querySelectorAll(".btn-delete").forEach(x=>{x.addEventListener("click",async()=>{const E=x.dataset.id,u=k.find(I=>I.id===E);if(await Me({title:"ยืนยันลบชุดบัตรคำ",message:`คุณแน่ใจว่าต้องการลบชุด "${u.title}" ใช่หรือไม่?`,detail:"ข้อมูลบัตรคำย่อยทั้งหมดในชุดนี้จะถูกลบอย่างถาวรและไม่สามารถย้อนกลับได้",confirmText:"ลบเลย"})){ce(!0);try{await De(E),b("ลบชุดบัตรคำเรียบร้อยแล้ว","success"),ee(l)}catch(I){b("ลบไม่สำเร็จ: "+(I.message??""),"error")}finally{ce(!1)}}})})}catch(k){b("โหลดข้อมูลล้มเหลว: "+(k.message??""),"error"),Q('<div class="text-center py-12 text-rose-500 font-semibold">โหลดข้อมูลไม่สำเร็จ</div>')}}}async function Ne(l,o,f=null){var k,X;ae(),Fe(),ve("flashcards"),we(`${o.title}`),Q(`
    <div class="flex justify-center py-12 text-gray-400">
      <svg class="animate-spin h-6 w-6 text-indigo-400 mr-3" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg> กำลังโหลดชุดบัตรคำ และประมวลผลระบบสมการ...
    </div>
  `);try{let _,A,F=[],B=[],x="";if(f){const[e,r,s,v,C]=await Promise.all([fe(o.id),Se().catch(P=>console.warn("KaTeX load failed, falling back to plain text:",P)),Re(f).catch(()=>[]),qe(f).catch(()=>[]),(k=window._classCache)!=null&&k[f]?Promise.resolve(null):Pe(l.id).catch(()=>[])]);_=e,F=s,B=v;const V=(X=window._classCache)==null?void 0:X[f];if(V)x=V.class_name||"";else if(C){const P=C.find(J=>J.id===f);P&&(x=P.class_name||"")}}else{const[e,r]=await Promise.all([fe(o.id),Se().catch(s=>console.warn("KaTeX load failed, falling back to plain text:",s))]);_=e}if(_.length===0){Q(`
        <div class="max-w-md mx-auto bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm space-y-4">
          <div class="text-5xl">📭</div>
          <h3 class="font-bold text-gray-700 text-base">ชุดบัตรคำยังไม่มีข้อมูล</h3>
          <p class="text-sm text-gray-400">ชุดบัตรคำ "${S(o.title)}" ยังไม่มีคำศัพท์บันทึกอยู่เลยครับ คุณครูสามารถเข้าไปป้อนคำศัพท์ก่อนได้</p>
          <div class="flex gap-2">
            <button id="play-back" class="flex-1 py-3 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition">← กลับ</button>
            <button id="play-edit" class="flex-1 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold transition">✏️ เพิ่มคำศัพท์</button>
          </div>
        </div>
      `),document.getElementById("play-back").addEventListener("click",()=>{f?_e(()=>import("./teacher-views-classes-s_CI5F_w.js").then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(e=>e.renderClassDetail(l,f)):ee(l)}),document.getElementById("play-edit").addEventListener("click",()=>he(l,o));return}let E=[..._],u=[..._],g=0,I=!1,K=!1,a=!1,c=!1;const d=localStorage.getItem(`fc_theme_${o.id}`)||"teal";let $=ye(d),p=5e3,n=0;const y=100;let t=!1;const i=()=>{const e=document.getElementById("drawer-card-list");e&&(e.innerHTML=u.map((r,s)=>{const v=s===g;return`
          <button class="w-full text-left p-3 rounded-xl transition text-xs flex items-center justify-between gap-2
            ${v?"bg-indigo-600 text-white font-bold border border-indigo-400":"bg-slate-800 text-slate-300 hover:bg-slate-700 border border-transparent"}"
            data-idx="${s}">
            <span class="line-clamp-1 flex-1">${S(r.front_text)}</span>
            <span class="text-[10px] text-slate-400">${v?"● เล่นอยู่":`#${s+1}`}</span>
          </button>
        `}).join(""),e.querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{g=parseInt(r.dataset.idx),I=!1,t=!1,n=0,m(),i()})}))},h=e=>{const r=document.getElementById("flashcard-play-wrapper"),s=r==null?void 0:r.querySelector(".fc-ambient-1"),v=r==null?void 0:r.querySelector(".fc-ambient-2"),C=document.getElementById("autoplay-timer-bar");s&&(s.style.background=e.blob1),v&&(v.style.background=e.blob2),C&&(C.style.background=e.timerBar)},w=e=>{var C;const r=(C=document.getElementById("flashcard-play-wrapper"))==null?void 0:C.classList.contains("fc-fs-wrapper"),s=document.querySelector(".fc-front"),v=document.querySelector(".fc-back");s&&(s.style.background=r?e.fsFront:e.front,s.style.color=e.frontColor,r?s.style.boxShadow=`0 0 40px ${e.fsFrontGlow}`:s.style.boxShadow="0 25px 50px -12px rgba(0,0,0,0.25)"),v&&(v.style.background=r?e.fsBack:e.back,v.style.color=r?e.fsBackColor:e.backColor,v.style.borderColor=r?"rgba(255,255,255,0.1)":e.backBorder,r?v.style.boxShadow="0 0 40px rgba(255,255,255,0.05)":v.style.boxShadow="0 25px 50px -12px rgba(0,0,0,0.25)")},m=()=>{var N;const e=u[g],r=document.getElementById("play-card-container");if(!r)return;const s=(N=document.getElementById("flashcard-play-wrapper"))==null?void 0:N.classList.contains("fc-fs-wrapper"),v=s?"text-3xl md:text-5xl font-extrabold":"text-2xl font-bold",C=!!e.front_image_url,V=!!e.back_image_url,P=(H,j,q,G)=>G?`
            <div class="w-full flex-1 flex flex-col items-center gap-3 min-h-0">
              <div class="flex-1 flex items-center justify-center w-full min-h-0">
                <img
                  src="${H}"
                  alt="card image"
                  class="max-w-full rounded-xl object-contain shadow-lg"
                  style="max-height: ${s?"260px":"160px"};"
                  onerror="this.style.display='none'"
                />
              </div>
              ${j?`<p class="${s?"text-xl font-bold":"text-base font-semibold"} text-center leading-snug break-words w-full px-2 opacity-95">${S(j)}</p>`:""}
            </div>
          `:`
          <div class="flex-1 flex items-center justify-center w-full">
            <p class="${q} text-center leading-relaxed break-words w-full px-2">${S(j)}</p>
          </div>
        `;if(r.innerHTML=`
        <div class="fc-perspective w-full max-w-xl mx-auto px-4">
          <div id="play-card" class="fc-card ${I?"flipped":""}">
            <!-- Front Face -->
            <div class="fc-face fc-front">
              <span class="text-xs uppercase tracking-widest mb-3 opacity-80 flex-shrink-0">ด้านหน้า (โจทย์/ศัพท์)</span>
              ${P(e.front_image_url,e.front_text,v,C)}
              <span class="text-[11px] opacity-70 mt-3 bg-black/20 px-3 py-1.5 rounded-full border border-white/10 flex-shrink-0">💡 แตะเพื่อเฉลย หรือกด Spacebar</span>
            </div>
            <!-- Back Face -->
            <div class="fc-face fc-back">
              <span class="text-xs uppercase tracking-widest mb-3 opacity-60 flex-shrink-0">ด้านหลัง (เฉลย/คำอธิบาย)</span>
              ${P(e.back_image_url,e.back_text,v,V)}
              <span class="text-[11px] opacity-60 mt-3 bg-black/5 px-3 py-1.5 rounded-full border border-black/10 flex-shrink-0">💡 แตะเพื่อกลับ หรือกด Spacebar</span>
            </div>
          </div>
        </div>
      `,w($),window.renderMathInElement)try{window.renderMathInElement(r,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],throwOnError:!1})}catch(H){console.error("Math rendering failed:",H)}const J=document.getElementById("play-card");J&&J.addEventListener("click",()=>{M()});const se=document.getElementById("play-counter");se&&(se.textContent=`การ์ดที่ ${g+1} จากทั้งหมด ${u.length}`);const T=document.getElementById("play-progress");T&&(T.style.width=`${(g+1)/u.length*100}%`);const Y=document.getElementById("play-prev");Y&&(Y.disabled=g===0,Y.classList.toggle("opacity-50",g===0));const z=document.getElementById("play-next");z&&(z.disabled=g===u.length-1,z.classList.toggle("opacity-50",g===u.length-1)),i()},M=()=>{I=!I;const e=document.getElementById("play-card");e&&e.classList.toggle("flipped",I),n=0},L=()=>{g<u.length-1?(g++,I=!1,t=!1,n=0,m()):a&&(g=0,I=!1,t=!1,n=0,m())},U=()=>{g>0&&(g--,I=!1,t=!1,n=0,m())};let R=!1;const O=()=>{const e=document.getElementById("flashcard-play-wrapper");if(!e)return;const r=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement),s=document.getElementById("btn-toggle-fs"),v=e.querySelectorAll(".fc-ambient-blob");r||R?(e.classList.add("fc-fs-wrapper"),s&&(s.innerHTML="✕ ออกจากเต็มจอ",s.classList.replace("text-gray-600","text-white"),s.classList.replace("bg-white","bg-white/10"),s.classList.replace("border-gray-200","border-white/15")),v.forEach(C=>C.classList.remove("hidden")),document.body.style.overflow="hidden"):(e.classList.remove("fc-fs-wrapper"),s&&(s.innerHTML="🖥️ เต็มจอ",s.classList.replace("text-white","text-gray-600"),s.classList.replace("bg-white/10","bg-white"),s.classList.replace("border-white/15","border-gray-200")),v.forEach(C=>C.classList.add("hidden")),document.body.style.overflow="",c&&re()),m()},me=()=>{const e=document.getElementById("flashcard-play-wrapper");if(!e)return;!!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&!R?e.requestFullscreen?e.requestFullscreen().catch(s=>{console.warn("HTML5 requestFullscreen failed, using CSS fallback:",s),R=!0,O()}):e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():(R=!0,O()):R?(R=!1,O()):document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};Z=O,document.addEventListener("fullscreenchange",O),document.addEventListener("webkitfullscreenchange",O),document.addEventListener("mozfullscreenchange",O),document.addEventListener("MSFullscreenChange",O);const re=()=>{const e=document.getElementById("play-drawer");e&&(c=!c,c?(e.classList.remove("hidden"),setTimeout(()=>e.classList.remove("translate-x-full"),10)):(e.classList.add("translate-x-full"),setTimeout(()=>e.classList.add("hidden"),300)))},ke=()=>{K=!K;const e=document.getElementById("play-shuffle");K?(u=[...u].sort(()=>Math.random()-.5),e.innerHTML="✅ สลับการ์ดอยู่",e.classList.replace("text-gray-600","text-teal-600"),e.classList.add("bg-teal-50","border-teal-200")):(u=[...E],e.innerHTML="🔀 สลับการ์ด",e.classList.replace("text-teal-600","text-gray-600"),e.classList.remove("bg-teal-50","border-teal-200")),g=0,I=!1,t=!1,n=0,m(),b(K?"สลับลำดับการ์ดเรียบร้อย":"กลับสู่ลำดับเดิม","info")},Ee=()=>{a=!a;const e=document.getElementById("play-autoplay"),r=document.getElementById("autoplay-timer-container");a?(e.innerHTML="⏸️ หยุดเล่นออโต้",e.classList.replace("text-gray-600","text-amber-600"),e.classList.add("bg-amber-50","border-amber-200"),r.classList.remove("hidden"),n=0,t=I):(e.innerHTML="⏱️ เล่นอัตโนมัติ",e.classList.replace("text-amber-600","text-gray-600"),e.classList.remove("bg-amber-50","border-amber-200"),r.classList.add("hidden")),b(a?"เริ่มเล่นอัตโนมัติ":"หยุดเล่นอัตโนมัติ","info")};if(Q(`
      <div id="flashcard-play-wrapper" class="max-w-xl mx-auto space-y-6 relative transition-all duration-300">
        
        <!-- Ambient background blobs -->
        <div class="fc-ambient-blob fc-ambient-1 hidden"></div>
        <div class="fc-ambient-blob fc-ambient-2 hidden"></div>

        <!-- Top bar -->
        <div class="flex items-center justify-between z-10 relative">
          <button id="btn-play-exit" class="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1.5 shadow-sm">
            ← ออกจากหน้านี้
          </button>
          <div class="flex items-center gap-2">
            <button id="btn-toggle-drawer" class="px-3 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm" title="แสดงรายการบัตรคำทั้งหมด">
              📋 รายการคำ
            </button>
            <button id="btn-toggle-fs" class="px-3 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm" title="สลับโหมดเต็มจอ">
              🖥️ เต็มจอ
            </button>
            <span id="play-counter" class="text-xs font-bold text-gray-500 bg-white border border-gray-100 px-3 py-2 rounded-xl shadow-sm">การ์ดที่ 1 จาก 1</span>
          </div>
        </div>

        ${f?`
        <!-- Class & Score Column Panel -->
        <div id="class-integration-panel" class="bg-indigo-50/75 backdrop-blur-md border border-indigo-100 rounded-2xl p-4 shadow-sm z-10 relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-scaleUp">
          <div class="flex items-center gap-2">
            <span class="text-lg">🏫</span>
            <div>
              <p class="text-xs font-bold text-indigo-900 leading-none">ห้องเรียน ${x?S(x):"ทั่วไป"}</p>
              <p class="text-[10px] text-indigo-500/80 mt-0.5">เลือกช่องคะแนนที่ต้องการบันทึก</p>
            </div>
          </div>
          <div class="w-full sm:w-auto">
            <select id="class-score-column-select" class="w-full sm:w-56 border border-indigo-200 rounded-xl px-3 py-1.5 text-xs text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <option value="">-- ไม่เก็บบันทึกคะแนน (สุ่มเพื่อความสนุก) --</option>
              ${B.length===0?`
                <option value="" disabled>-- ไม่มีช่องกรอกคะแนนในระบบ --</option>
              `:B.map(e=>`
                <option value="${e.id}">${S(e.column_name)} (${e.max_score} คะแนน) ${e.assignment_type?`[${S(e.assignment_type)}]`:""}</option>
              `).join("")}
            </select>
          </div>
        </div>
        `:""}

        <!-- Progress bar -->
        <div class="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden z-10 relative">
          <div id="play-progress" class="bg-teal-500 h-full transition-all duration-300" style="width:0%"></div>
        </div>

        <!-- Play card slot -->
        <div id="play-card-container" class="py-4 z-10 relative"></div>

        <!-- AutoPlay Timer Bar -->
        <div id="autoplay-timer-container" class="w-full bg-gray-100 h-1 overflow-hidden hidden z-10 relative rounded-full">
          <div id="autoplay-timer-bar" class="fc-timer-bar"></div>
        </div>

        <!-- Picked Student Container -->
        <div id="picked-student-container" class="hidden z-10 relative max-w-sm mx-auto w-full transition-all duration-300">
          <!-- Dynamically filled with student card and grading buttons -->
        </div>

        <!-- Controls -->
        <div class="flex flex-col items-center gap-4 z-10 relative">
          ${f?`
          <button id="btn-random-student" class="w-full max-w-sm py-3 px-4 rounded-2xl text-white font-bold text-sm shadow-md hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            style="background: linear-gradient(135deg, #f59e0b, #ec4899);">
            🎲 สุ่มรายชื่อนักเรียนตอบคำถาม
          </button>
          `:""}
          <div class="flex items-center justify-between gap-3 w-full max-w-sm">
            <button id="play-prev" class="flex-1 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-semibold text-gray-600 transition shadow-sm">
              ◀️ ก่อนหน้า
            </button>
            <button id="play-flip" class="py-3 px-5 rounded-xl bg-teal-100 hover:bg-teal-200 text-teal-700 text-sm font-bold transition shadow-sm">
              🔄 กลับการ์ด
            </button>
            <button id="play-next" class="flex-1 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-semibold text-gray-600 transition shadow-sm">
              ถัดไป ▶️
            </button>
          </div>

          <!-- Extra controls (Shuffle, Autoplay, Keyboard Help) -->
          <div class="flex items-center gap-2 justify-center mt-1">
            <button id="play-shuffle" class="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm">
              🔀 สลับการ์ด
            </button>
            <button id="play-autoplay" class="px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-600 transition flex items-center gap-1 shadow-sm">
              ⏱️ เล่นอัตโนมัติ
            </button>
            <button id="play-kb-help" class="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-505 transition flex items-center justify-center shadow-sm" title="ตัวช่วยแป้นพิมพ์">
              ⌨️
            </button>
          </div>
        </div>

        <!-- Collapsible Card List Drawer -->
        <div id="play-drawer" class="hidden fixed right-0 top-0 bottom-0 w-80 bg-slate-950/95 backdrop-blur-md border-l border-slate-800 z-[1000] p-5 flex flex-col justify-between text-white shadow-2xl transition-all duration-300 translate-x-full">
          <div>
            <div class="flex items-center justify-between mb-4">
              <h4 class="font-bold text-sm text-slate-300">รายการบัตรคำในชุดนี้</h4>
              <button id="btn-close-drawer" class="text-slate-400 hover:text-white text-lg">✕</button>
            </div>
            <div id="drawer-card-list" class="space-y-2 overflow-y-auto max-h-[75vh] pr-1 scrollbar-thin">
              <!-- Card items will be listed here -->
            </div>
          </div>
          <div class="text-[11px] text-slate-500 text-center border-t border-slate-900 pt-3">
            คลิกเพื่อเปลี่ยนไปยังการ์ดนั้นๆ
          </div>
        </div>

      </div>
    `),m(),document.getElementById("btn-play-exit").addEventListener("click",()=>{ae(),f?_e(()=>import("./teacher-views-classes-s_CI5F_w.js").then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(e=>e.renderClassDetail(l,f)):ee(l)}),document.getElementById("btn-toggle-fs").addEventListener("click",me),document.getElementById("btn-toggle-drawer").addEventListener("click",re),document.getElementById("btn-close-drawer").addEventListener("click",re),document.getElementById("play-prev").addEventListener("click",U),document.getElementById("play-next").addEventListener("click",L),document.getElementById("play-flip").addEventListener("click",M),document.getElementById("play-shuffle").addEventListener("click",ke),document.getElementById("play-autoplay").addEventListener("click",Ee),document.getElementById("play-kb-help").addEventListener("click",()=>{b(`⌨️ ตัวช่วยแป้นพิมพ์:
• Spacebar: กลับการ์ด
• ArrowRight / D: ถัดไป
• ArrowLeft / A: ก่อนหน้า
• F: สลับโหมดเต็มจอ
• P: เล่นออโต้
• S: สลับสุ่มการ์ด`,"info",6e3)}),f){const e=F.map((v,C)=>({...v,seat_no:C+1})),r=document.getElementById("picked-student-container"),s=document.getElementById("btn-random-student");s.addEventListener("click",()=>{if(!e.length){b("ไม่มีรายชื่อนักเรียนในห้องเรียนนี้","warning");return}s.disabled=!0,s.textContent="🎲 กำลังสุ่ม...",s.style.opacity="0.7",r.classList.remove("hidden");let v=0;const C=1200,V=80;W&&clearInterval(W),W=setInterval(()=>{v+=V;const P=Math.floor(Math.random()*e.length),J=e[P];if(r.innerHTML=`
            <div class="bg-gradient-to-r from-teal-500/10 to-indigo-500/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-lg flex items-center justify-center space-y-4 animate-pulse">
              <div class="flex items-center gap-3 w-full justify-center">
                <div class="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg animate-spin shrink-0">
                  🎲
                </div>
                <div class="text-left min-w-0">
                  <p class="text-sm font-bold text-gray-800 truncate">${S(J.full_name)}</p>
                  <p class="text-xs text-gray-500">เลขที่: ${J.seat_no}</p>
                </div>
              </div>
            </div>
          `,v>=C){clearInterval(W),W=null;const se=Math.floor(Math.random()*e.length),T=e[se];r.innerHTML=`
              <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-3xl p-5 shadow-lg flex flex-col items-center text-center space-y-4 animate-scaleUp">
                <div class="flex items-center gap-3 w-full">
                  <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0 border border-white/20 overflow-hidden">
                    ${T.image_url?`<img src="${T.image_url}" class="w-full h-full object-cover" />`:`<span class="uppercase">${S((T.full_name||"").charAt(0))}</span>`}
                  </div>
                  <div class="text-left flex-1 min-w-0">
                    <p class="text-sm font-bold text-gray-800 truncate">${S(T.full_name)}</p>
                    <p class="text-xs text-gray-500">เลขประจำตัว: ${S(T.student_code||"-")} | เลขที่: ${T.seat_no||"-"}</p>
                  </div>
                  <button id="btn-close-student-card" class="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 text-xs transition">✕</button>
                </div>
                
                <div class="w-full pt-3 border-t border-gray-100/50">
                  <p class="text-[10px] font-semibold text-indigo-500/80 uppercase tracking-wider mb-2">บันทึกคะแนนผู้ตอบคำถาม</p>
                  <div class="grid grid-cols-3 gap-2">
                    <button id="score-right" class="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs shadow-sm transition flex flex-col items-center justify-center gap-0.5">
                      <span>👍 ถูก</span>
                      <span class="text-[9px] font-normal opacity-90">(+1 คะแนน)</span>
                    </button>
                    <button id="score-wrong" class="py-2.5 px-3 rounded-xl bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold text-xs shadow-sm transition flex flex-col items-center justify-center gap-0.5">
                      <span>👎 ผิด</span>
                      <span class="text-[9px] font-normal opacity-90">(0 คะแนน)</span>
                    </button>
                    <button id="score-custom" class="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold text-xs shadow-sm transition flex flex-col items-center justify-center gap-0.5">
                      <span>✏️ ระบุเอง</span>
                      <span class="text-[9px] font-normal opacity-90">(กำหนดเอง)</span>
                    </button>
                  </div>
                </div>
              </div>
            `,s.disabled=!1,s.textContent="🎲 สุ่มรายชื่อนักเรียนตอบคำถาม",s.style.opacity="1",document.getElementById("btn-close-student-card").addEventListener("click",()=>{r.classList.add("hidden"),r.innerHTML=""});const Y=async z=>{const N=document.getElementById("class-score-column-select"),H=N?N.value:null;if(!H){b('กรุณาเลือกช่องบันทึกคะแนนใน "ห้องเรียน" ด้านบนก่อนให้คะแนนสะสม',"warning");return}const j=document.activeElement;j&&(j.disabled=!0,j.style.opacity="0.5");try{let q=[];const{data:G}=await ue.from("student_scores").select("score_history").eq("student_id",T.id).eq("assignment_id",parseInt(H)).maybeSingle();G&&Array.isArray(G.score_history)&&(q=G.score_history);const D=q.reduce((pe,Ae)=>pe+Ae.d,0)+z,le=B.find(pe=>pe.id==H),ne=le?le.max_score:100;if(D>ne){b(`คะแนนรวมใหม่ (${D}) จะเกินคะแนนเต็มสูงสุด (${ne})`,"error");return}const ge=await ze(f,T.id,parseInt(H),z,{delta:!0,currentHistory:q}),Te=(ge==null?void 0:ge.final)??D;b(`บันทึกคะแนนให้ ${T.full_name} เรียบร้อยแล้ว (คะแนนรวมใหม่: ${Te}/${ne})`,"success"),r.classList.add("hidden"),r.innerHTML=""}catch(q){b("บันทึกคะแนนไม่สำเร็จ: "+(q.message??""),"error")}finally{j&&(j.disabled=!1,j.style.opacity="1")}};document.getElementById("score-right").addEventListener("click",()=>Y(1)),document.getElementById("score-wrong").addEventListener("click",()=>Y(0)),document.getElementById("score-custom").addEventListener("click",async()=>{const z=document.getElementById("class-score-column-select"),N=z?z.value:null;if(!N){b('กรุณาเลือกช่องบันทึกคะแนนใน "ห้องเรียน" ด้านบนก่อนให้คะแนนสะสม',"warning");return}const H=B.find(D=>D.id==N),j=H?H.max_score:100;let q=0;try{const{data:D}=await ue.from("student_scores").select("score_history").eq("student_id",T.id).eq("assignment_id",parseInt(N)).maybeSingle();D&&Array.isArray(D.score_history)&&(q=D.score_history.reduce((le,ne)=>le+ne.d,0))}catch(D){console.warn(D)}const G=prompt(`คะแนนปัจจุบันของ ${T.full_name} คือ ${q}/${j}
ระบุคะแนนที่ต้องการบวกเพิ่ม (เช่น 1.5, 2, -1):`,"1");if(G===null)return;const be=parseFloat(G);if(isNaN(be)){b("กรุณากรอกตัวเลขคะแนนที่ถูกต้อง","error");return}await Y(be)})}},V)})}ie=setInterval(()=>{if(!document.getElementById("play-card-container")){ae();return}if(a){n+=y;const r=Math.min(n/p*100,100),s=document.getElementById("autoplay-timer-bar");s&&(s.style.width=`${r}%`),n>=p&&(n=0,t?L():(M(),t=!0))}},y);const Ie=e=>{var s;if(!document.getElementById("play-card-container")){ae();return}if(["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))return;const r=e.key.toLowerCase();e.code==="Space"||r==="spacebar"?(e.preventDefault(),M()):r==="arrowright"||r==="d"?(e.preventDefault(),L()):r==="arrowleft"||r==="a"?(e.preventDefault(),U()):r==="f"?(e.preventDefault(),me()):r==="p"?(e.preventDefault(),Ee()):r==="s"?(e.preventDefault(),ke()):r==="m"?(e.preventDefault(),re()):e.key==="Escape"&&((s=document.getElementById("flashcard-play-wrapper"))!=null&&s.classList.contains("fc-fs-wrapper"))&&(e.preventDefault(),me())};document.addEventListener("keydown",Ie),de=Ie}catch(_){b("โหลดข้อมูลล้มเหลว: "+(_.message??""),"error"),ee(l)}}async function he(l,o=null){ae(),ve("flashcards"),we(o?"แก้ไขชุดบัตรคำ":"สร้างชุดบัตรคำใหม่"),Q(`
    <div class="max-w-3xl mx-auto space-y-6">
      <!-- Title input group -->
      <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-4">
        <h3 class="font-bold text-gray-800 text-sm">ข้อมูลทั่วไปของชุดบัตรคำ</h3>
        <div class="space-y-3">
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">หัวข้อ/วิชา <span class="text-red-500">*</span></label>
            <input id="form-deck-title" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500" placeholder="เช่น คำศัพท์ภาษาอังกฤษ ป.5" value="${o?S(o.title):""}" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-500 mb-1">คำอธิบาย (ไม่บังคับ)</label>
            <textarea id="form-deck-desc" rows="2" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:border-teal-500" placeholder="เช่น ใช้ทบทวนคำแปลในบทที่ 1-3">${o?S(o.description??""):""}</textarea>
          </div>
        </div>
      </div>

      <!-- Generator tools row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- AI Generator -->
        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-3xl border border-indigo-100 p-5 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">✨</span>
            <div>
              <h4 class="font-bold text-indigo-900 text-sm">สร้างด้วย Gemini AI</h4>
              <p class="text-[10px] text-indigo-500 leading-tight">ระบุหัวข้อแล้วปล่อยให้ปัญญาประดิษฐ์เขียนหัวข้อและคำเฉลยให้</p>
            </div>
          </div>

          <!-- Language Selector -->
          <div>
            <p class="text-[10px] font-semibold text-indigo-700 mb-1.5">🌐 ภาษาที่ต้องการ</p>
            <div id="ai-lang-picker" class="flex flex-wrap gap-1.5">
              <button type="button" data-lang="thai" class="ai-lang-btn selected px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🇹🇭 ภาษาไทย</button>
              <button type="button" data-lang="english" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🇬🇧 English</button>
              <button type="button" data-lang="yawi" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🌙 ยาวี</button>
              <button type="button" data-lang="arabic" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🕌 Arabic</button>
              <button type="button" data-lang="mixed" class="ai-lang-btn px-3 py-1.5 rounded-full text-[11px] font-bold border transition">🔀 ผสม</button>
            </div>
          </div>

          <div class="flex gap-2">
            <input id="ai-topic" type="text" class="flex-1 border border-indigo-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-400 bg-white" placeholder="เช่น ศัพท์สิ่งของในบ้าน, สูตรคูณ, หลักธรรม..." />
            <button id="btn-ai-gen" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs whitespace-nowrap shadow-sm transition">
              ร่างโดย AI
            </button>
          </div>
        </div>

        <!-- CSV Import -->
        <div class="bg-gray-50 rounded-3xl border border-gray-200 p-5 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">📎</span>
            <div>
              <h4 class="font-bold text-gray-800 text-sm">นำเข้าจาก CSV</h4>
              <p class="text-[10px] text-gray-400 leading-tight">เลือกไฟล์ CSV ที่เขียนขึ้นเองเพื่อเพิ่มบัตรคำอย่างรวดเร็ว</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <label class="px-4 py-2 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-xs font-bold text-gray-600 cursor-pointer shadow-sm">
              เลือกไฟล์ CSV...
              <input type="file" id="csv-file-input" accept=".csv" class="sr-only" />
            </label>
            <button id="btn-download-csv" class="text-xs text-indigo-600 hover:underline">
              ⬇️ ดาวน์โหลดตัวอย่าง CSV
            </button>
          </div>
        </div>
      </div>

      <!-- Card Color Theme Picker -->
      <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <div>
            <h3 class="font-bold text-gray-800 text-sm">🎨 ธีมสีของการ์ด</h3>
            <p class="text-[10px] text-gray-400 mt-0.5">เลือกสีที่ต้องการ — ใช้ในโหมดเล่นและบันทึกเป็นค่าเริ่มต้นของชุดนี้</p>
          </div>
          <span id="theme-label-display" class="text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100"></span>
        </div>
        <div id="deck-theme-picker" class="flex flex-wrap gap-2.5">
          ${xe.map(a=>`
            <button type="button"
              class="fc-theme-dot-btn"
              data-theme-id="${a.id}"
              title="${a.label}"
              style="width:32px;height:32px;border-radius:50%;background:${a.dot};border:2px solid transparent;transition:transform 0.15s,box-shadow 0.15s;box-shadow:0 2px 6px rgba(0,0,0,0.15);cursor:pointer;"
            ></button>
          `).join("")}
        </div>
      </div>

      <!-- Card list builder -->
      <div class="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-gray-800 text-sm">รายการบัตรคำศัพท์</h3>
          <button id="btn-add-card-row" class="px-3.5 py-1.5 rounded-xl border border-teal-200 text-teal-600 hover:bg-teal-50 text-xs font-bold transition">
            ＋ เพิ่มแถว
          </button>
        </div>

        <!-- Cards items list -->
        <div id="cards-rows-list" class="space-y-3 divide-y divide-gray-100 max-h-[400px] overflow-y-auto pr-1">
          <!-- Rows will be injected here -->
        </div>

        <div id="cards-empty-notice" class="hidden text-center text-xs text-gray-400 py-6">
          ยังไม่มีบัตรคำ กดปุ่ม "เพิ่มแถว" ด้านบน หรือใช้ระบบนำเข้าด้านบนได้เลยครับ
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex gap-3">
        <button id="form-cancel" class="flex-1 py-3.5 rounded-2xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 text-sm font-bold transition">
          ยกเลิก
        </button>
        <button id="form-save" class="flex-1 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-lg transition">
          💾 บันทึกข้อมูล
        </button>
      </div>
    </div>
  `);let f=[];if(o){ce(!0);try{f=await fe(o.id)}catch{b("ไม่สามารถดึงข้อมูลบัตรคำย่อยได้","error")}finally{ce(!1)}}const k=document.getElementById("cards-rows-list"),X=document.getElementById("cards-empty-notice"),_=()=>{const a=k.querySelectorAll(".card-row-item");X.classList.toggle("hidden",a.length>0)},A=(a="",c="",d="",$="")=>{`${Date.now()}${Math.random().toString(36).slice(2,6)}`;const p=document.createElement("div");p.className="card-row-item flex items-start gap-3 pt-3 first:pt-0",p.dataset.frontImg=d||"",p.dataset.backImg=$||"";const n=w=>w?`<img src="${w}" class="w-12 h-12 object-cover rounded-lg border border-gray-200 shadow-sm" />`:'<span class="w-12 h-12 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-300 text-xl bg-gray-50">🖼️</span>';p.innerHTML=`
      <div class="flex-1 space-y-2">
        <!-- Front row -->
        <div class="flex items-center gap-2">
          <label class="card-img-front-thumb cursor-pointer flex-shrink-0" title="เพิ่มรูปด้านหน้า">
            ${n(d)}
            <input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />
          </label>
          <input type="text" class="card-input-front w-full border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-teal-500" placeholder="ด้านหน้า (โจทย์/คำ)" value="${S(a)}" />
        </div>
        <!-- Back row -->
        <div class="flex items-center gap-2">
          <label class="card-img-back-thumb cursor-pointer flex-shrink-0" title="เพิ่มรูปด้านหลัง">
            ${n($)}
            <input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />
          </label>
          <input type="text" class="card-input-back w-full border border-gray-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-teal-500" placeholder="ด้านหลัง (คำแปล/เฉลย)" value="${S(c)}" />
        </div>
        <p class="text-[10px] text-gray-400 pl-14">📷 คลิกไอคอนรูปเพื่ออัปโหลด (บีบอัดอัตโนมัติ ≤100 KB)</p>
      </div>
      <button type="button" class="btn-remove-row text-gray-300 hover:text-red-500 text-xl font-semibold leading-none py-1.5 px-2 rounded-lg hover:bg-red-50 transition flex-shrink-0">
        &times;
      </button>
    `,k.appendChild(p),_();const y=p.querySelector(".card-img-front-input"),t=p.querySelector(".card-img-front-thumb");y.addEventListener("change",async w=>{const m=w.target.files[0];if(!m)return;const M='<span class="w-12 h-12 rounded-lg border border-indigo-200 bg-indigo-50 flex items-center justify-center text-indigo-400 text-[10px] font-semibold animate-pulse">บีบ...</span>';t.innerHTML=M+'<input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />';try{const L=await $e(m),U=URL.createObjectURL(L);p.dataset.frontImg=U,p.dataset.frontImgBlob="pending",p._frontImgBlob=L,t.innerHTML=`<img src="${U}" class="w-12 h-12 object-cover rounded-lg border-2 border-indigo-400 shadow-sm" /><input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`;const R=Math.round(L.size/1024);b(`บีบอัดรูปด้านหน้าเสร็จแล้ว (${R} KB) — จะอัปโหลดเมื่อกดบันทึก`,"info")}catch(L){b("ไม่สามารถประมวลผลรูปได้: "+L.message,"error"),t.innerHTML=n("")+'<input type="file" class="card-img-front-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />'}t.querySelector(".card-img-front-input").addEventListener("change",y.onchange)});const i=p.querySelector(".card-img-back-input"),h=p.querySelector(".card-img-back-thumb");i.addEventListener("change",async w=>{const m=w.target.files[0];if(!m)return;const M='<span class="w-12 h-12 rounded-lg border border-indigo-200 bg-indigo-50 flex items-center justify-center text-indigo-400 text-[10px] font-semibold animate-pulse">บีบ...</span>';h.innerHTML=M+'<input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />';try{const L=await $e(m),U=URL.createObjectURL(L);p.dataset.backImg=U,p.dataset.backImgBlob="pending",p._backImgBlob=L,h.innerHTML=`<img src="${U}" class="w-12 h-12 object-cover rounded-lg border-2 border-indigo-400 shadow-sm" /><input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />`;const R=Math.round(L.size/1024);b(`บีบอัดรูปด้านหลังเสร็จแล้ว (${R} KB) — จะอัปโหลดเมื่อกดบันทึก`,"info")}catch(L){b("ไม่สามารถประมวลผลรูปได้: "+L.message,"error"),h.innerHTML=n("")+'<input type="file" class="card-img-back-input sr-only" accept="image/jpeg,image/png,image/webp,image/gif" />'}h.querySelector(".card-img-back-input").addEventListener("change",i.onchange)}),p.querySelector(".btn-remove-row").addEventListener("click",()=>{p.remove(),_()})};if(f.length>0)f.forEach(a=>A(a.front_text,a.back_text,a.front_image_url||"",a.back_image_url||""));else if(!o)for(let a=0;a<3;a++)A();_(),document.getElementById("btn-add-card-row").addEventListener("click",()=>A());let F="thai";const B=document.querySelectorAll(".ai-lang-btn"),x=()=>{B.forEach(a=>{const c=a.dataset.lang===F;a.style.background=c?"#4f46e5":"white",a.style.color=c?"white":"#4338ca",a.style.borderColor=c?"#4f46e5":"#c7d2fe",a.style.boxShadow=c?"0 2px 8px rgba(79,70,229,0.35)":"none"})};x(),B.forEach(a=>{a.addEventListener("click",()=>{F=a.dataset.lang,x()})});let u=localStorage.getItem(`fc_theme_${(o==null?void 0:o.id)||"new"}`)||"teal";const g=document.querySelectorAll(".fc-theme-dot-btn"),I=document.getElementById("theme-label-display"),K=()=>{g.forEach(a=>{const c=a.dataset.themeId===u;a.style.transform=c?"scale(1.25)":"scale(1)",a.style.boxShadow=c?`0 0 0 3px white, 0 0 0 5px ${ye(u).blob1}`:"0 2px 6px rgba(0,0,0,0.15)",a.style.borderColor="transparent"}),I.textContent=ye(u).label};K(),g.forEach(a=>{a.addEventListener("click",()=>{u=a.dataset.themeId,o!=null&&o.id&&localStorage.setItem(`fc_theme_${o.id}`,u),K()})}),document.getElementById("form-cancel").addEventListener("click",()=>ee(l)),document.getElementById("btn-ai-gen").addEventListener("click",async()=>{const a=document.getElementById("ai-topic").value.trim();if(!a){b("กรุณาระบุหัวข้อคำศัพท์ที่ต้องการร่างข้อมูล","warning");return}const c=document.getElementById("btn-ai-gen");te(c,!0);try{const d={thai:{rule:"Write BOTH front_text and back_text entirely in Thai (ภาษาไทย). Exception: keep technical terms in original.",frontHint:"Term, question or prompt in Thai",backHint:"Answer or explanation in Thai"},english:{rule:"Write BOTH front_text and back_text entirely in English. No Thai.",frontHint:"Term or question in English",backHint:"Answer or explanation in English"},yawi:{rule:"Write BOTH front_text and back_text in Yawi (Pattani Malay, Jawi/Arabic script). Use Rumi Malay as fallback if needed.",frontHint:"Term in Yawi/Malay",backHint:"Meaning in Yawi/Malay"},arabic:{rule:"اكتب كلا الحقلين باللغة العربية الفصحى فقط.",frontHint:"المصطلح أو السؤال بالعربية",backHint:"الإجابة أو الشرح بالعربية"},mixed:{rule:"front_text in English, back_text in Thai. Bilingual vocabulary cards.",frontHint:"English term",backHint:"Thai translation"}},$=d[F]||d.thai,p=['Generate flashcard JSON for topic: "'+a+'". About 10-12 cards.',"Reply with a JSON Array ONLY. No markdown, no text outside JSON.","","Language rule: "+$.rule,"","Each object must have:",'1. "front_text" — '+$.frontHint,'2. "back_text"  — '+$.backHint,"","Math/Science: use LaTeX in $ signs e.g. $x^2$, $\\\\frac{a}{b}$","",'Example: [{"front_text":"...","back_text":"..."}]'].join(`
`),{data:n,error:y}=await ue.functions.invoke("gemini-proxy",{body:{prompt:p,maxTokens:4e3}});if(y||!n)throw new Error((y==null?void 0:y.message)??"AI Response is empty");let t="";n.candidates&&n.candidates[0]&&n.candidates[0].content&&n.candidates[0].content.parts?t=n.candidates[0].content.parts[0].text??"":n.text&&(t=n.text),t=t.trim(),t.startsWith("```")&&(t=t.replace(new RegExp("^`{3}(json)?"),"").replace(new RegExp("`{3}$"),"").trim());let i;try{i=JSON.parse(t)}catch(m){const M=t.match(/\[\s*\{[\s\S]*\}\s*\]/);if(M)try{i=JSON.parse(M[0])}catch{throw new Error("AI ตอบกลับในรูปแบบที่ไม่ใช่ JSON อาร์เรย์: "+m.message)}else throw new Error("AI ตอบกลับในรูปแบบที่ไม่ใช่ JSON อาร์เรย์: "+m.message)}if(!Array.isArray(i))throw new Error("AI Response is not a JSON Array");const h=k.querySelectorAll(".card-row-item");let w=!1;h.forEach(m=>{const M=m.querySelector(".card-input-front").value.trim(),L=m.querySelector(".card-input-back").value.trim();!M&&!L&&(m.remove(),w=!0)}),i.forEach(m=>{A(m.front_text,m.back_text)}),b(`สร้างข้อมูล AI เรียบร้อย เพิ่มแล้ว ${i.length} รายการ`,"success"),document.getElementById("ai-topic").value=""}catch(d){b("AI ไม่สามารถร่างข้อมูลได้: "+(d.message??""),"error")}finally{te(c,!1,"ร่างโดย AI"),_()}}),document.getElementById("btn-download-csv").addEventListener("click",()=>{const c=encodeURI(`data:text/csv;charset=utf-8,front_text,back_text
Hello,สวัสดี
Thank you,ขอบคุณ
Welcome,ยินดีต้อนรับ
Cat,แมว
Dog,สุนัข`),d=document.createElement("a");d.setAttribute("href",c),d.setAttribute("download","flashcard_template.csv"),document.body.appendChild(d),d.click(),document.body.removeChild(d)}),document.getElementById("csv-file-input").addEventListener("change",a=>{const c=a.target.files[0];if(!c)return;const d=new FileReader;d.onload=$=>{const n=$.target.result.split(`
`).map(h=>h.trim()).filter(Boolean);if(n.length<=1){b("ไฟล์ CSV ว่างเปล่า หรือไม่มีข้อมูล","warning");return}let y=0;const t=n[0].toLowerCase();(t.includes("front_text")||t.includes("front")||t.includes("back_text"))&&(y=1);let i=0;for(let h=y;h<n.length;h++){const w=n[h].split(",").map(m=>m.trim().replace(/^["']|["']$/g,""));w.length>=2&&(A(w[0],w[1]),i++)}b(`นำเข้าสำเร็จ ${i} รายการ`,"success"),a.target.value=""},d.readAsText(c)}),document.getElementById("form-save").addEventListener("click",async()=>{const a=document.getElementById("form-deck-title").value.trim(),c=document.getElementById("form-deck-desc").value.trim();if(!a){b("กรุณากรอกหัวข้อชุดบัตรคำ","warning");return}const d=[...k.querySelectorAll(".card-row-item")],$=d.some(n=>n.dataset.frontImgBlob==="pending"||n.dataset.backImgBlob==="pending"),p=document.getElementById("form-save");te(p,!0,$?"⏫ กำลังอัปโหลดรูป...":"💾 กำลังบันทึก...");try{for(const t of d){if(t._frontImgBlob)try{const i=await oe(l.id,t._frontImgBlob,"front");t.dataset.frontImg=i,delete t._frontImgBlob,t.dataset.frontImgBlob=""}catch(i){console.warn("Front image upload failed:",i),t.dataset.frontImg=""}if(t._backImgBlob)try{const i=await oe(l.id,t._backImgBlob,"back");t.dataset.backImg=i,delete t._backImgBlob,t.dataset.backImgBlob=""}catch(i){console.warn("Back image upload failed:",i),t.dataset.backImg=""}}const n=[];d.forEach(t=>{const i=t.querySelector(".card-input-front").value.trim(),h=t.querySelector(".card-input-back").value.trim();if(i&&h){const w=t.dataset.frontImg||"",m=t.dataset.backImg||"";n.push({front_text:i,back_text:h,front_image_url:w.startsWith("http")?w:null,back_image_url:m.startsWith("http")?m:null})}});let y=o;o?y=await Be(o.id,{title:a,description:c}):y=await Le({teacher_id:l.id,title:a,description:c}),await Ce(y.id,n),b("บันทึกชุดบัตรคำเรียบร้อยแล้ว","success"),ee(l)}catch(n){b("บันทึกไม่สำเร็จ: "+(n.message??""),"error"),te(p,!1,"💾 บันทึกข้อมูล")}}),document.getElementById("btn-download-csv").addEventListener("click",()=>{const c=encodeURI(`data:text/csv;charset=utf-8,front_text,back_text
Hello,สวัสดี
Thank you,ขอบคุณ
Welcome,ยินดีต้อนรับ
Cat,แมว
Dog,สุนัข`),d=document.createElement("a");d.setAttribute("href",c),d.setAttribute("download","flashcard_template.csv"),document.body.appendChild(d),d.click(),document.body.removeChild(d)}),document.getElementById("csv-file-input").addEventListener("change",a=>{const c=a.target.files[0];if(!c)return;const d=new FileReader;d.onload=$=>{const n=$.target.result.split(`
`).map(h=>h.trim()).filter(Boolean);if(n.length<=1){b("ไฟล์ CSV ว่างเปล่า หรือไม่มีข้อมูล","warning");return}let y=0;const t=n[0].toLowerCase();(t.includes("front_text")||t.includes("front")||t.includes("back_text"))&&(y=1);let i=0;for(let h=y;h<n.length;h++){const w=n[h].split(",").map(m=>m.trim().replace(/^["']|["']$/g,""));w.length>=2&&(A(w[0],w[1]),i++)}b(`นำเข้าสำเร็จ ${i} รายการ`,"success"),a.target.value=""},d.readAsText(c)}),document.getElementById("form-save").addEventListener("click",async()=>{const a=document.getElementById("form-deck-title").value.trim(),c=document.getElementById("form-deck-desc").value.trim();if(!a){b("กรุณากรอกหัวข้อชุดบัตรคำ","warning");return}const d=[...k.querySelectorAll(".card-row-item")],$=d.some(n=>n.dataset.frontImgBlob==="pending"||n.dataset.backImgBlob==="pending"),p=document.getElementById("form-save");te(p,!0,$?"⏫ กำลังอัปโหลดรูป...":"💾 กำลังบันทึก...");try{for(const t of d){if(t._frontImgBlob)try{const i=await oe(l.id,t._frontImgBlob,"front");t.dataset.frontImg=i,delete t._frontImgBlob,t.dataset.frontImgBlob=""}catch(i){console.warn("Front image upload failed:",i),t.dataset.frontImg=""}if(t._backImgBlob)try{const i=await oe(l.id,t._backImgBlob,"back");t.dataset.backImg=i,delete t._backImgBlob,t.dataset.backImgBlob=""}catch(i){console.warn("Back image upload failed:",i),t.dataset.backImg=""}}const n=[];d.forEach(t=>{const i=t.querySelector(".card-input-front").value.trim(),h=t.querySelector(".card-input-back").value.trim();if(i&&h){const w=t.dataset.frontImg||"",m=t.dataset.backImg||"";n.push({front_text:i,back_text:h,front_image_url:w.startsWith("http")?w:null,back_image_url:m.startsWith("http")?m:null})}});let y=o;o?y=await Be(o.id,{title:a,description:c}):y=await Le({teacher_id:l.id,title:a,description:c}),await Ce(y.id,n),localStorage.setItem(`fc_theme_${y.id}`,u),b("บันทึกชุดบัตรคำเรียบร้อยแล้ว","success"),ee(l)}catch(n){b("บันทึกไม่สำเร็จ: "+(n.message??""),"error"),te(p,!1,"💾 บันทึกข้อมูล")}})}export{ae as cleanupPlayMode,ee as renderFlashcardDecks,Ne as renderFlashcardPlay};
