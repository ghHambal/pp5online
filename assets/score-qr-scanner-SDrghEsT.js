import{getMyClasses as A,getClassStudents as Q,getScoreColumns as I,getStudentScores as N,getClassByIdFull as V,getSystemConfig as R,getLifeSkillColumns as G,saveStudentScore as P}from"./api-1xsyVspL.js";import{a as y}from"./ui-Dh03k4iX.js";import"./supabase-BV-W2lsh.js";function B(n,e=[]){if(!n)return!1;const t=n.column_type??"regular";return!(t!=="regular"&&t!=="bonus"||e.includes(n.assignment_name))}async function F(n){var t;const e=[];try{const s=await V(n),c=(t=s==null?void 0:s.master_subjects)==null?void 0:t.subject_group,m=s==null?void 0:s.skill_group;if(["AGM","AGMVOC"].includes(c)&&e.push("คะแนนมาเรียน","คะแนนละหมาด"),m==="ชีวิต"){e.push("การมาเรียน","เดินสวนสนาม","ความสะอาด");try{const a=await R(),b=parseInt(a.academicYear??2568),i=parseInt(a.semester??1);(await G(b,i,"สามัญ")).forEach(o=>{e.includes(o.name)||e.push(o.name)})}catch{}}}catch{}return e}function _(n="success"){try{const e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),s=e.createGain();t.connect(s),s.connect(e.destination),n==="success"?(t.type="sine",t.frequency.setValueAtTime(880,e.currentTime),s.gain.setValueAtTime(.08,e.currentTime),s.gain.exponentialRampToValueAtTime(.01,e.currentTime+.12),t.start(),t.stop(e.currentTime+.12)):(t.type="sawtooth",t.frequency.setValueAtTime(150,e.currentTime),s.gain.setValueAtTime(.12,e.currentTime),s.gain.exponentialRampToValueAtTime(.01,e.currentTime+.3),t.start(),t.stop(e.currentTime+.3))}catch{}}async function O(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((n,e)=>{const t=document.createElement("script");t.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",t.onload=()=>n(window.Html5Qrcode),t.onerror=()=>e(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(t)})}function f(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}async function K(n){let e=[];try{e=await A(n.id)}catch{e=[]}if(!e.length){y("ยังไม่มีห้องเรียนที่สอนอยู่","warning");return}const t=document.createElement("div");t.className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50",t.innerHTML=`
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#0ea5e9,#6366f1);" class="px-5 py-4 flex items-center justify-between flex-shrink-0">
        <h3 class="text-white font-bold text-base">📷 สแกนบันทึกคะแนน — เลือกห้อง</h3>
        <button id="sqp-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div class="p-4 overflow-y-auto flex flex-col gap-1.5">
        ${e.map(s=>{var c;return`
          <button data-cid="${s.id}" class="sqp-class-btn text-left px-4 py-3 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50 transition">
            <p class="text-sm font-semibold text-gray-800 truncate">${f(s.class_name)}</p>
            <p class="text-xs text-gray-400 truncate">${f(((c=s.master_subjects)==null?void 0:c.subject_name)??"")}</p>
          </button>`}).join("")}
      </div>
    </div>`,document.body.appendChild(t),t.querySelector("#sqp-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()}),t.querySelectorAll(".sqp-class-btn").forEach(s=>s.addEventListener("click",()=>{const c=e.find(m=>m.id===parseInt(s.dataset.cid));t.remove(),z({classId:c.id,className:c.class_name})}))}async function z(n){const{classId:e,className:t}=n;let s=[],c=[],m=[];try{[s,c,m]=await Promise.all([Q(e),I(e),F(e)])}catch(o){y("โหลดข้อมูลห้องไม่สำเร็จ: "+(o.message??""),"error");return}if(!s.length){y("ห้องนี้ยังไม่มีนักเรียน","warning");return}const a=c.filter(o=>B(o,m));if(!a.length){y("ห้องนี้มีแต่คอลัมน์คะแนนอัตโนมัติ (เช่น คะแนนมาเรียน/คะแนนละหมาด/ทักษะชีวิต) ยังไม่มีคอลัมน์ที่ครูสร้างเองให้สแกนบันทึกได้ — เพิ่มคอลัมน์คะแนนใหม่ที่หน้าบันทึกคะแนนก่อนครับ","warning");return}let b=n.initialColumnId&&a.some(o=>o.id===n.initialColumnId)?n.initialColumnId:a[0].id,i=[];try{i=await N(e)}catch{i=[]}const h={};i.forEach(o=>{h[`${o.student_id}:${o.score_column_id}`]=o.score}),D({classId:e,className:t,students:s,eligibleCols:a,currentColumnId:b,scoreMap:h})}function D({classId:n,className:e,students:t,eligibleCols:s,currentColumnId:c,scoreMap:m}){var C;(C=document.getElementById("score-scan-overlay"))==null||C.remove();const a=document.createElement("div");a.id="score-scan-overlay",a.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",a.innerHTML=`
    <style>
      @keyframes sqs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .sqs-laser { animation: sqs-laser-move 2s ease-in-out infinite; }
      .sqs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .sqs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนบันทึกคะแนน</h3>
        <p class="text-xs text-slate-400 truncate">${f(e??"")}</p>
      </div>
      <button id="sqs-close" class="text-slate-400 hover:text-white text-2xl leading-none px-2">&times;</button>
    </div>

    ${s.length>1?`
    <div class="px-4 py-2.5 border-b border-slate-800 flex-shrink-0">
      <label class="text-[11px] text-slate-400 block mb-1">คอลัมน์เป้าหมาย (เปลี่ยนได้ทุกเมื่อ)</label>
      <select id="sqs-col-select" class="w-full bg-slate-900 border border-slate-700 text-slate-100 text-sm rounded-xl px-3 py-2">
        ${s.map(r=>`<option value="${r.id}" ${r.id===c?"selected":""}>${f(r.assignment_name)} (เต็ม ${r.max_score??"-"})</option>`).join("")}
      </select>
    </div>`:""}

    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 max-w-md mx-auto w-full">
      <div id="sqs-camera-container" class="relative w-full aspect-square bg-black rounded-2xl overflow-hidden">
        <div id="sqs-camera-reader" class="w-full h-full"></div>
        <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] overflow-hidden">
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 rounded-tl"></div>
            <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 rounded-tr"></div>
            <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400 rounded-bl"></div>
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400 rounded-br"></div>
            <div class="sqs-laser absolute left-0 w-full h-0.5 bg-sky-400"></div>
          </div>
        </div>
      </div>

      <div id="sqs-feedback" class="min-h-[70px]">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
          ยกกล้องส่อง QR ของนักเรียนเพื่อบันทึกคะแนน
        </div>
      </div>

      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
        <div class="flex items-center justify-between gap-2 mb-2">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">บันทึกคะแนนแล้วรอบนี้</p>
          <span id="sqs-history-count" class="text-[10px] font-bold text-sky-400">0 คน</span>
        </div>
        <div id="sqs-history-list" class="space-y-1.5 text-xs max-h-40 overflow-y-auto pr-1">
          <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
        </div>
      </div>
    </div>

    <!-- ป๊อบอัพกรอกคะแนน (เด้งทับเมื่อสแกนสำเร็จ) -->
    <div id="sqs-score-popup" class="hidden fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60">
      <div class="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-5 flex flex-col gap-3">
        <div id="sqs-popup-student" class="flex items-center gap-3"></div>
        <div>
          <p class="text-xs text-gray-500 mb-1" id="sqs-popup-colname"></p>
          <div class="flex items-center gap-2">
            <button data-adj="-1" class="sqs-adj px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm">−1</button>
            <input id="sqs-score-input" type="number" step="any" class="flex-1 min-w-0 text-center text-2xl font-bold border border-gray-200 rounded-xl py-2" />
            <button data-adj="1" class="sqs-adj px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm">+1</button>
            <button data-adj="5" class="sqs-adj px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-sm">+5</button>
          </div>
        </div>
        <div class="flex gap-2 mt-1">
          <button id="sqs-popup-cancel" class="flex-1 py-3 rounded-2xl border border-gray-200 text-gray-500 font-semibold text-sm hover:bg-gray-50">ข้าม</button>
          <button id="sqs-popup-save" class="flex-1 py-3 rounded-2xl text-white font-bold text-sm shadow-lg" style="background:linear-gradient(135deg,#0ea5e9,#6366f1);">💾 บันทึก</button>
        </div>
      </div>
    </div>
  `,document.body.appendChild(a);const b=[];let i=null,h=null,o=0,S=!1;const j=()=>s.find(r=>r.id===c),T=()=>{const r=a.querySelector("#sqs-history-list"),l=a.querySelector("#sqs-history-count");if(l.textContent=`${b.length} คน`,!b.length){r.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}r.innerHTML=b.map(p=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${f(p.name)}</span>
        <span class="text-sky-400 font-bold text-[11px] flex-shrink-0">${f(p.colName)}: ${p.score}</span>
      </div>`).join("")},$=a.querySelector("#sqs-col-select");$&&$.addEventListener("change",r=>{c=parseInt(r.target.value)});async function L(){if(i)try{await i.pause(!0)}catch{}}async function E(){if(i)try{i.resume()}catch{}}function H(r){S=!0;const l=j(),p=`${r.id}:${l.id}`,v=m[p],d=a.querySelector("#sqs-score-popup"),w=r.image_url?`<img src="${r.image_url}" class="w-14 h-18 object-cover object-top rounded-xl border border-gray-200" />`:`<div class="w-14 h-18 rounded-xl bg-sky-50 border border-sky-100 text-sky-400 font-bold text-lg flex items-center justify-center">${r.full_name.charAt(0)}</div>`;d.querySelector("#sqs-popup-student").innerHTML=`
      ${w}
      <div class="min-w-0 flex-1">
        <h4 class="font-bold text-gray-800 text-sm truncate">${f(r.full_name)}</h4>
        <p class="text-xs text-gray-400 truncate">รหัส ${f(r.student_code)}</p>
      </div>`,d.querySelector("#sqs-popup-colname").textContent=`${l.assignment_name} (เต็ม ${l.max_score??"-"})${v!=null?" — คะแนนเดิม: "+v:""}`;const u=d.querySelector("#sqs-score-input");u.value=v??"",d.classList.remove("hidden"),setTimeout(()=>u.focus(),50),d.querySelectorAll(".sqs-adj").forEach(x=>{x.onclick=()=>{const k=parseFloat(x.dataset.adj),g=parseFloat(u.value)||0;u.value=Math.round((g+k)*1e3)/1e3}});const q=async()=>{d.classList.add("hidden"),S=!1,await E()};d.querySelector("#sqs-popup-cancel").onclick=q,d.querySelector("#sqs-popup-save").onclick=async()=>{const x=u.value.trim();if(x===""){y("กรุณากรอกคะแนน","warning");return}const k=d.querySelector("#sqs-popup-save");k.disabled=!0;try{const g=await P(n,r.id,l.id,x,{max:l.max_score});m[p]=(g==null?void 0:g.final)??parseFloat(x),b.unshift({name:r.full_name,colName:l.assignment_name,score:m[p]}),T(),y(`บันทึกคะแนน ${r.full_name} แล้ว ✅`,"success"),await q()}catch(g){y("บันทึกไม่สำเร็จ: "+(g.message??""),"error")}finally{k.disabled=!1}}}async function M(r){if(S)return;const l=a.querySelector("#sqs-camera-container"),p=a.querySelector("#sqs-feedback"),v=u=>{l.classList.add(u?"sqs-flash-success":"sqs-flash-error"),setTimeout(()=>l.classList.remove(u?"sqs-flash-success":"sqs-flash-error"),500)};let d=r;if(r.startsWith("SQ:")){const[,u,q]=r.split(":"),x=Math.floor(Date.now()/1e3)-parseInt(q,10);if(x>60||x<-60){_("error"),v(!1),p.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้นักเรียนเปิดหน้าใหม่</div>';return}d=u}const w=t.find(u=>u.student_code===d);if(!w){_("error"),v(!1),p.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบนักเรียนคนนี้ในห้องนี้</div>';return}_("success"),v(!0),p.innerHTML=`<div class="bg-sky-950/40 border border-sky-800/80 rounded-2xl p-3 text-center text-xs text-sky-300">✓ พบ ${f(w.full_name)} — กรอกคะแนนในป๊อบอัพ</div>`,await L(),H(w)}a.querySelector("#sqs-close").addEventListener("click",async()=>{if(i)try{await i.stop()}catch{}a.remove()}),(async()=>{try{const r=await O();i=new r("sqs-camera-reader"),await i.start({facingMode:"environment"},{fps:25,aspectRatio:1},l=>{l===h&&Date.now()-o<2e3||(h=l,o=Date.now(),M(l))},()=>{})}catch(r){y("ไม่สามารถเปิดกล้องได้: "+(r.message??""),"error"),a.remove()}})()}export{B as isEligibleScoreColumn,z as openScoreScanner,K as openScoreScannerPickClass};
