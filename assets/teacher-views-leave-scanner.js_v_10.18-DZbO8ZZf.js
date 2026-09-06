import{getActiveLeavePermission as B,getStudentByCode as I,closeLeavePermission as _,getTeacherByCode as A,createLeavePermissionByAnyTeacher as q}from"./api-1xsyVspL.js";import{r as M}from"./leave-monitor.js_v_10.18-Dz2vtIpz.js";import{f as j}from"./leave-time-CrS9gT63.js";import{a as g}from"./ui-Dh03k4iX.js";import{setActiveNav as N,setTitle as R,setContent as H,_htmlEsc as m}from"./teacher-views-utils-B2Iz3UWp.js";import"./supabase-BV-W2lsh.js";let u=null,b=null,$=!1;const k=`
  <svg aria-hidden="true" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14.5 4.5 13 3H8L6.5 4.5H4A2.5 2.5 0 0 0 1.5 7v10A2.5 2.5 0 0 0 4 19.5h16A2.5 2.5 0 0 0 22.5 17V7A2.5 2.5 0 0 0 20 4.5h-5.5Z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
`;function C(){try{const e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),s=e.createGain();n.connect(s),s.connect(e.destination),n.type="sine",n.frequency.setValueAtTime(880,e.currentTime),s.gain.setValueAtTime(.1,e.currentTime),s.gain.exponentialRampToValueAtTime(.01,e.currentTime+.15),n.start(e.currentTime),n.stop(e.currentTime+.15)}catch(e){console.warn("Play audio failed:",e)}}function E(){try{const e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),s=e.createGain();n.connect(s),s.connect(e.destination),n.type="sawtooth",n.frequency.setValueAtTime(150,e.currentTime),s.gain.setValueAtTime(.15,e.currentTime),s.gain.exponentialRampToValueAtTime(.01,e.currentTime+.4),n.start(e.currentTime),n.stop(e.currentTime+.4)}catch(e){console.warn("Play audio failed:",e)}}function D(){try{u!=null&&u.pause&&u.pause(!0)}catch(e){console.warn("Pause scanner error:",e)}}function P(){try{u!=null&&u.resume&&u.resume()}catch(e){console.warn("Resume scanner error:",e)}}function h({resume:e=!0}={}){const n=document.getElementById("leave-scan-modal");n&&n.remove(),b&&(clearInterval(b),b=null),$=!1,e&&P()}function w(e,{tone:n="indigo",maxWidth:s="max-w-md"}={}){var r;(r=document.getElementById("leave-scan-modal"))==null||r.remove();const i={indigo:"border-indigo-100",emerald:"border-emerald-100",red:"border-red-100",amber:"border-amber-100"}[n]||"border-gray-100",o=document.createElement("div");return o.id="leave-scan-modal",o.className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/65 p-4 animate-fade",o.innerHTML=`
    <div class="w-full ${s} max-h-[92vh] overflow-y-auto rounded-3xl bg-white border ${i} shadow-2xl">
      ${e}
    </div>
  `,document.body.appendChild(o),o}function V(e){w(`
    <div class="p-6 text-center space-y-4">
      <div class="mx-auto w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
        <svg class="animate-spin h-6 w-6 text-indigo-500" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
      </div>
      <div>
        <h4 class="font-extrabold text-gray-800 text-lg">กำลังตรวจสอบใบอนุญาต</h4>
        <p class="text-xs text-gray-400 mt-1">รหัสนักเรียน <span class="font-mono font-bold text-gray-600">${m(e)}</span></p>
      </div>
    </div>
  `)}async function O(e){var i,o;let n=null;try{n=await I(e)}catch(r){console.warn("getStudentByCode error:",r)}const s=w(`
    <div class="p-6 text-center space-y-5">
      <div class="mx-auto w-16 h-16 rounded-3xl bg-red-50 flex items-center justify-center text-4xl">🔴</div>
      <div class="space-y-1">
        <h4 class="font-extrabold text-red-700 text-lg">ไม่พบใบอนุญาตออกนอกห้องเรียน</h4>
        <p class="text-xs text-red-500 leading-relaxed">
          ${n?`<strong>${m(n.full_name)}</strong> (<span class="font-mono">${m(e)}</span>) ยังไม่ได้รับการอนุมัติ หรือเดินทางกลับเข้าห้องเรียนแล้ว`:`นักเรียนรหัส <strong class="font-mono text-sm">${m(e)}</strong> ยังไม่ได้รับการอนุมัติ หรือเดินทางกลับเข้าห้องเรียนแล้ว`}
        </p>
      </div>
      ${n?`
        <button id="btn-leave-scan-issue-new" type="button" class="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md transition">
          🚪 ออกใบอนุญาตใหม่ให้นักเรียนคนนี้
        </button>
      `:""}
      <button id="btn-leave-scan-next" type="button" class="w-full py-3 rounded-2xl bg-gray-900 hover:bg-gray-950 text-white text-xs font-bold shadow-md transition">
        สแกนใหม่
      </button>
    </div>
  `,{tone:"red"});(i=s.querySelector("#btn-leave-scan-next"))==null||i.addEventListener("click",()=>h()),(o=s.querySelector("#btn-leave-scan-issue-new"))==null||o.addEventListener("click",()=>{h({resume:!1}),F(n)})}function F(e){const n=["🚽 ไปห้องน้ำ","💊 ไปห้องพยาบาล","🏢 ไปฝ่ายปกครอง/ธุรการ","✏️ อื่นๆ"],s=[5,10,15,30];let i=n[0],o=10;const r=w(`
    <div class="p-5 sm:p-6 space-y-4">
      <div class="flex items-center justify-between border-b border-gray-100 pb-3">
        <h3 class="font-bold text-gray-800 text-sm">🚪 ออกใบอนุญาตออกนอกห้องเรียน</h3>
        <button id="btn-issue-leave-close" class="text-gray-400 hover:text-gray-700 text-lg">✕</button>
      </div>
      <div class="rounded-2xl border border-indigo-100 bg-indigo-50 px-3 py-2 text-[11px] text-indigo-700 leading-relaxed">
        ใช้สำหรับกรณีนักเรียนมาขอออกห้องกับครูท่านอื่นที่ไม่ใช่ครูผู้สอนคาบนี้ (เช่น ครูเวร) — จะไม่นับรวมในโควต้าจำนวนคนออกพร้อมกันของห้องเรียนใด แต่จะนับรวมในโควต้ารายสัปดาห์ของนักเรียนตามปกติ
      </div>

      <div class="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100">
        <div class="w-12 h-16 rounded-xl overflow-hidden bg-gray-150 border border-gray-250 flex-shrink-0">
          ${e.image_url?`<img src="${m(e.image_url)}" class="w-full h-full object-cover" />`:'<div class="w-full h-full flex items-center justify-center text-xl font-bold text-gray-400 bg-gray-200">👤</div>'}
        </div>
        <div class="min-w-0 flex-1">
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">นักเรียนผู้ขออนุญาต</p>
          <h4 class="font-extrabold text-gray-800 text-sm truncate mt-0.5">${m(e.full_name)}</h4>
          <p class="text-[11px] text-gray-400 font-mono">${m(e.student_code)}</p>
        </div>
      </div>

      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">1. เหตุผลของการขออนุญาต</label>
        <div class="grid grid-cols-2 gap-2">
          ${n.map((a,x)=>`
            <button class="btn-issue-reason text-xs font-semibold px-3 py-2 border rounded-xl transition text-center
              ${x===0?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-reason="${a}">${a}
            </button>
          `).join("")}
        </div>
        <input type="text" id="input-issue-custom-reason" class="hidden w-full border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="กรุณาระบุเหตุผลการขออนุญาต..." />
      </div>

      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">2. ระยะเวลาที่อนุญาต</label>
        <div class="grid grid-cols-5 gap-1.5">
          ${s.map(a=>`
            <button class="btn-issue-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center
              ${a===10?"bg-indigo-600 text-white border-indigo-600":"bg-white text-gray-600 border-gray-200 hover:border-gray-400"}"
              data-duration="${a}">${a} น.
            </button>
          `).join("")}
          <button class="btn-issue-duration text-[11px] font-semibold py-2 border rounded-xl transition text-center bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            data-duration="custom">ระบุเอง...
          </button>
        </div>
        <div id="div-issue-custom-duration" class="hidden flex items-center gap-2 mt-2">
          <input type="number" id="input-issue-custom-duration" min="1" max="180" class="flex-1 border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-indigo-500" placeholder="ระบุนาที (เช่น 20)..." />
          <span class="text-xs text-gray-500 font-medium">นาที</span>
        </div>
      </div>

      <div class="space-y-2">
        <label class="block text-xs font-bold text-gray-400 uppercase tracking-wider">3. รหัสครูผู้ออกใบอนุญาต</label>
        <input type="text" id="input-issuer-teacher-code" class="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm font-mono focus:outline-none focus:border-indigo-500" placeholder="กรอกรหัสครู 4 หลักของท่าน..." />
        <p class="text-[10px] text-gray-400">ใช้ยืนยันตัวตนครูผู้ออกใบอนุญาตจริง (ไม่จำเป็นต้องเป็นครูผู้สอนคาบนี้)</p>
      </div>

      <button id="btn-issue-leave-submit" class="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all">
        🚪 อนุมัติให้ออกนอกห้อง
      </button>
    </div>
  `,{tone:"indigo",maxWidth:"max-w-sm"}),p=r.querySelector("#input-issue-custom-reason");r.querySelectorAll(".btn-issue-reason").forEach(a=>{a.addEventListener("click",()=>{r.querySelectorAll(".btn-issue-reason").forEach(x=>{x.className="btn-issue-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),a.className="btn-issue-reason text-xs font-semibold px-3 py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center",i=a.dataset.reason,i==="✏️ อื่นๆ"?(p.classList.remove("hidden"),p.focus()):p.classList.add("hidden")})});const y=r.querySelector("#div-issue-custom-duration"),f=r.querySelector("#input-issue-custom-duration");r.querySelectorAll(".btn-issue-duration").forEach(a=>{a.addEventListener("click",()=>{r.querySelectorAll(".btn-issue-duration").forEach(v=>{v.className="btn-issue-duration text-[11px] font-semibold py-2 border rounded-xl bg-white text-gray-600 border-gray-200 hover:border-gray-400 text-center"}),a.className="btn-issue-duration text-[11px] font-semibold py-2 border rounded-xl bg-indigo-600 text-white border-indigo-600 text-center";const x=a.dataset.duration;x==="custom"?(y.classList.remove("hidden"),f.focus()):(y.classList.add("hidden"),o=parseInt(x))})}),r.querySelector("#btn-issue-leave-close").addEventListener("click",()=>h());const l=r.querySelector("#btn-issue-leave-submit");l.addEventListener("click",async()=>{if(l.disabled)return;let a=i;if(i==="✏️ อื่นๆ"&&(a=p.value.trim(),!a)){g("กรุณาระบุเหตุผลในการขออนุญาต","warning");return}let x=o;const v=r.querySelector(".btn-issue-duration.bg-indigo-600");if(v&&v.dataset.duration==="custom"){const t=parseInt(f.value.trim());if(isNaN(t)||t<=0){g("กรุณาระบุระยะเวลากรอกเป็นจำนวนนาทีที่ถูกต้อง (มากกว่า 0)","warning");return}x=t}const d=r.querySelector("#input-issuer-teacher-code").value.trim();if(!d){g("กรุณากรอกรหัสครูผู้ออกใบอนุญาต","warning");return}try{l.disabled=!0,l.textContent="กำลังตรวจสอบรหัสครู...",l.classList.add("opacity-70","cursor-not-allowed");const t=await A(d);if(!t){g("ไม่พบรหัสครูนี้ในระบบ กรุณาตรวจสอบอีกครั้ง","error"),l.disabled=!1,l.textContent="🚪 อนุมัติให้ออกนอกห้อง",l.classList.remove("opacity-70","cursor-not-allowed");return}l.textContent="กำลังบันทึก...",await q(e.id,t.id,a,x),C(),g(`ออกใบอนุญาตให้ ${e.full_name} เรียบร้อย โดย ${t.full_name}`,"success"),S(e.student_code)}catch(t){E(),g("บันทึกไม่สำเร็จ: "+(t.message??""),"error"),l.disabled=!1,l.textContent="🚪 อนุมัติให้ออกนอกห้อง",l.classList.remove("opacity-70","cursor-not-allowed")}})}function Q(e){var s;(s=w(`
    <div class="p-6 text-center space-y-5">
      <div class="mx-auto w-16 h-16 rounded-3xl bg-red-50 flex items-center justify-center text-4xl">⚠️</div>
      <div class="space-y-1">
        <h4 class="font-extrabold text-red-700 text-lg">ตรวจสอบไม่สำเร็จ</h4>
        <p class="text-xs text-red-500 leading-relaxed">${m(e)}</p>
      </div>
      <button id="btn-leave-scan-next" type="button" class="w-full py-3 rounded-2xl bg-gray-900 hover:bg-gray-950 text-white text-xs font-bold shadow-md transition">
        สแกนใหม่
      </button>
    </div>
  `,{tone:"red"}).querySelector("#btn-leave-scan-next"))==null||s.addEventListener("click",()=>h())}function z(e){var s,i;(i=w(`
    <div class="p-6 text-center space-y-5">
      <div class="mx-auto w-16 h-16 rounded-3xl bg-emerald-50 flex items-center justify-center text-4xl">🟢</div>
      <div class="space-y-1">
        <h4 class="font-extrabold text-emerald-700 text-lg">บันทึกส่งกลับห้องเรียบร้อย</h4>
        <p class="text-xs text-emerald-600 leading-relaxed">
          ${m(((s=e.students)==null?void 0:s.full_name)||"นักเรียน")} ได้กลับเข้าห้องเรียนแล้ว พร้อมสแกนคนถัดไป
        </p>
      </div>
      <button id="btn-leave-scan-next" type="button" class="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition">
        สแกนคนถัดไป
      </button>
    </div>
  `,{tone:"emerald"}).querySelector("#btn-leave-scan-next"))==null||i.addEventListener("click",()=>h())}function W(e){var y,f,l,a,x,v;const n=new Date(e.created_at),s=e.allowed_duration;b&&clearInterval(b);const i=()=>{const d=j(e.created_at,s,new Date),t=d.isOverdue;return{countdown:d,statusTitle:t?"🔴 เกินเวลาอนุญาต":"🟢 อยู่ในเวลาอนุญาต",statusColorCls:t?"bg-red-50 border-red-200 text-red-700":"bg-emerald-50 border-emerald-200 text-emerald-700",timerCls:t?`text-red-600 ${d.isBeyondLimit?"":"animate-pulse"}`:"text-emerald-600",tone:t?"red":"emerald"}},o=i(),r=w(`
    <div class="p-5 sm:p-6 space-y-5">
      <div class="flex items-start justify-between gap-3 border-b border-gray-100 pb-4">
        <span id="leave-scan-status-badge" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${o.statusColorCls}">
          ${o.statusTitle}
        </span>
        <div class="text-right">
          <span id="leave-scan-timer-label" class="text-xs text-gray-400 block">${o.countdown.label}</span>
          <span id="leave-scan-timer-text" class="text-3xl font-black font-mono ${o.timerCls}">${o.countdown.timerText}</span>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="w-20 h-24 rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0 shadow-sm">
          ${(y=e.students)!=null&&y.image_url?`<img src="${m(e.students.image_url)}" class="w-full h-full object-cover" />`:'<div class="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">👤</div>'}
        </div>
        <div class="min-w-0 flex-1 space-y-1">
          <p class="text-xs text-gray-400">ข้อมูลนักเรียน</p>
          <h4 class="font-extrabold text-gray-800 text-base truncate">${m(((f=e.students)==null?void 0:f.full_name)||"ไม่ระบุชื่อ")}</h4>
          <p class="text-xs text-gray-500 font-mono">${m(((l=e.students)==null?void 0:l.student_code)||"-")}</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 bg-gray-50 rounded-2xl p-4 text-xs">
        <div class="space-y-0.5">
          <span class="text-gray-400 block">ครูผู้อนุมัติ</span>
          <span class="font-bold text-gray-700 block truncate">${m(((a=e.teachers)==null?void 0:a.full_name)||"ไม่ระบุ")}</span>
        </div>
        <div class="space-y-0.5">
          <span class="text-gray-400 block">เหตุผล</span>
          <span class="font-bold text-gray-700 block truncate" title="${m(e.reason)}">${m(e.reason)}</span>
        </div>
        <div class="space-y-0.5">
          <span class="text-gray-400 block">เริ่มออก</span>
          <span class="font-bold text-gray-700 block">${n.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})} น.</span>
        </div>
        <div class="space-y-0.5">
          <span class="text-gray-400 block">ระยะเวลา</span>
          <span class="font-bold text-gray-700 block">${s} นาที</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button id="btn-inspector-return" type="button" class="py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition">
          ✅ บันทึกกลับเข้าห้อง
        </button>
        <button id="btn-leave-scan-next" type="button" class="py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition">
          สแกนคนถัดไป
        </button>
      </div>
    </div>
  `,{tone:o.tone}),p=()=>{const d=i(),t=r.querySelector("#leave-scan-status-badge"),c=r.querySelector("#leave-scan-timer-label"),L=r.querySelector("#leave-scan-timer-text");t&&(t.className=`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${d.statusColorCls}`,t.textContent=d.statusTitle),c&&(c.textContent=d.countdown.label),L&&(L.className=`text-3xl font-black font-mono ${d.timerCls}`,L.textContent=d.countdown.timerText),d.countdown.isBeyondLimit&&b&&(clearInterval(b),b=null)};(x=r.querySelector("#btn-leave-scan-next"))==null||x.addEventListener("click",()=>h()),(v=r.querySelector("#btn-inspector-return"))==null||v.addEventListener("click",async d=>{const t=d.currentTarget;if(!t.disabled){t.disabled=!0,t.textContent="กำลังบันทึก...",t.classList.add("opacity-70","cursor-not-allowed");try{b&&(clearInterval(b),b=null),await _(e.id,"returned"),g("บันทึกการส่งกลับเข้าห้องเรียบร้อย","success"),z(e)}catch(c){t.disabled=!1,t.textContent="✅ บันทึกกลับเข้าห้อง",t.classList.remove("opacity-70","cursor-not-allowed"),g("บันทึกไม่สำเร็จ: "+(c.message??""),"error")}}}),p(),b=setInterval(p,1e3)}async function ee(e){N("student-leave-scanner"),R("ตรวจสอบใบอนุญาตออกนอกห้อง"),T(),H(`
    <div class="max-w-6xl mx-auto space-y-6 animate-fade pb-12">
      <div class="mb-4">
        <h3 class="text-lg font-bold text-gray-800">📋 ตรวจสอบใบอนุญาตออกนอกห้อง</h3>
        <p class="text-xs text-gray-400 mt-0.5">ใช้กล้องสแกน QR Code บนบัตรนักเรียนเพื่อเช็คสถานะการขอออกนอกห้องเรียนและความถูกต้องของเวลา</p>
      </div>

      <div class="inline-flex flex-wrap gap-1.5 rounded-2xl bg-gray-100 p-1 border border-gray-200">
        <button id="leave-view-scan-tab" type="button"
          class="px-4 py-2 rounded-xl bg-white text-indigo-700 shadow-sm text-xs font-bold transition flex items-center gap-1.5">
          ${k}
          <span>สแกนใบอนุญาต</span>
        </button>
        <button id="leave-view-monitor-tab" type="button"
          class="px-4 py-2 rounded-xl text-gray-500 hover:text-gray-700 text-xs font-bold transition">
          📊 ติดตามข้อมูล
        </button>
      </div>

      <div id="leave-scanner-panel" class="max-w-xl mx-auto space-y-6">
        <!-- สแกนเนอร์กล้อง & ค้นหาด้วยรหัส -->
        <div class="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4">
        <div class="flex items-center justify-between">
          <label class="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
            ${k}
            <span>กล้องอ่าน QR Code</span>
          </label>
          <div class="flex items-center gap-2">
            <button id="btn-toggle-scanner" class="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5">
              ${k}
              <span>เปิดกล้อง</span>
            </button>
          </div>
        </div>

        <!-- กล่องแสดงภาพกล้อง -->
        <div class="relative aspect-square bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 max-w-sm mx-auto flex items-center justify-center shadow-inner">
          <div id="leave-camera-reader" class="w-full h-full rounded-2xl overflow-hidden"></div>
          
          <!-- Custom Square Viewfinder Overlay -->
          <div id="scanner-viewfinder" class="hidden absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
            <!-- Dark semi-transparent background -->
            <div class="absolute inset-0 bg-black/35"></div>
            <!-- Viewfinder Frame -->
            <div class="relative w-48 h-48 rounded-3xl border-2 border-white/20 bg-transparent shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] flex items-center justify-center overflow-hidden">
              <!-- Neon Corner Brackets -->
              <div class="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-indigo-400 rounded-tl-md"></div>
              <div class="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-indigo-400 rounded-tr-md"></div>
              <div class="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-indigo-400 rounded-bl-md"></div>
              <div class="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-indigo-400 rounded-br-md"></div>
              <!-- Laser Sweeper Line -->
              <div class="w-full h-[2px] bg-indigo-400 opacity-90 absolute top-0 shadow-[0_0_8px_rgba(129,140,248,0.85)] animate-laser-move"></div>
            </div>
          </div>

          <div id="scanner-overlay" class="absolute inset-0 pointer-events-none flex items-center justify-center">
            <p id="scanner-placeholder-text" class="text-xs text-gray-400 text-center px-6">กดปุ่ม "เปิดกล้อง" หรือป้อนรหัสประจำตัวด้านล่างเพื่อตรวจสอบ</p>
          </div>
        </div>

        <style>
          @keyframes laser-sweep {
            0% { top: 0%; opacity: 0.3; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0.3; }
          }
          .animate-laser-move {
            animation: laser-sweep 2.8s infinite ease-in-out;
          }
        </style>

        <!-- ค้นหาแบบแมนนวล (ป้อนรหัส) -->
        <div class="pt-2 border-t border-gray-100 flex gap-2">
          <input type="text" id="input-search-student-code" class="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-indigo-500" placeholder="ป้อนรหัสประจำตัวนักเรียน..." />
          <button id="btn-search-leave-code" class="px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-900 text-white font-bold text-xs shadow-md transition-all">
            🔍 ตรวจสอบ
          </button>
        </div>
      </div>

      <!-- พื้นที่แสดงผลลัพธ์การตรวจสอบ -->
      <div id="leave-scan-result" class="hidden">
        <!-- จัดการแสดงผลด้วย _renderScanResult -->
      </div>
      </div>

      <div id="leave-monitor-panel" class="hidden">
        <div id="leave-monitor-widget"></div>
      </div>
    </div>
  `);const n=document.getElementById("input-search-student-code"),s=document.getElementById("btn-search-leave-code"),i=document.getElementById("btn-toggle-scanner"),o=document.getElementById("scanner-placeholder-text"),r=document.getElementById("leave-view-scan-tab"),p=document.getElementById("leave-view-monitor-tab"),y=document.getElementById("leave-scanner-panel"),f=document.getElementById("leave-monitor-panel"),l=document.getElementById("leave-monitor-widget");s.addEventListener("click",()=>{const t=n.value.trim();if(!t){g("กรุณากรอกรหัสนักเรียน","warning");return}S(t)}),n.addEventListener("keydown",t=>{if(t.key==="Enter"){const c=n.value.trim();c&&S(c)}});let a=!1;const x=async t=>{const c=t==="monitor";r.className=c?"px-4 py-2 rounded-xl text-gray-500 hover:text-gray-700 text-xs font-bold transition":"px-4 py-2 rounded-xl bg-white text-indigo-700 shadow-sm text-xs font-bold transition",p.className=c?"px-4 py-2 rounded-xl bg-white text-indigo-700 shadow-sm text-xs font-bold transition":"px-4 py-2 rounded-xl text-gray-500 hover:text-gray-700 text-xs font-bold transition",y.classList.toggle("hidden",c),f.classList.toggle("hidden",!c),c&&(a&&d(),await M(l,{title:"🚪 ติดตามใบอนุญาตออกนอกห้อง",subtitle:"รายการที่ฉันเป็นผู้อนุญาต พร้อมแดชบอร์ดแนวโน้ม",teacherId:e.id,analyticsDays:14,externalUrl:"public-monitor.html"}))};r.addEventListener("click",()=>x("scan")),p.addEventListener("click",()=>x("monitor")),i.addEventListener("click",async()=>{a?d():await v()});async function v(){try{o.textContent="กำลังเตรียมกล้อง...";const t=await G();u=new t("leave-camera-reader");const c=document.getElementById("scanner-viewfinder");await u.start({facingMode:"environment"},{fps:25,aspectRatio:1},L=>{S(L)},()=>{}),a=!0,i.innerHTML=`${k}<span>ปิดกล้อง</span>`,i.className="px-3.5 py-2 bg-red-500 hover:bg-red-600 active:scale-[0.98] text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5",o.classList.add("hidden"),c&&c.classList.remove("hidden")}catch(t){console.error(t),g("ไม่สามารถเปิดใช้งานกล้องได้: "+(t.message??""),"error"),o.textContent="ไม่สามารถเปิดกล้องได้: "+(t.message??"")}}function d(){u&&u.stop().then(()=>{a=!1,i.innerHTML=`${k}<span>เปิดกล้อง</span>`,i.className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white rounded-2xl font-bold text-xs shadow-md transition-all flex items-center gap-1.5",o.textContent="กล้องถูกปิดใช้งานแล้ว",o.classList.remove("hidden");const t=document.getElementById("scanner-viewfinder");t&&t.classList.add("hidden"),u=null}).catch(t=>{console.warn("Stop scanner error:",t)})}}async function G(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,n)=>{const s=document.createElement("script");s.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",s.onload=()=>e(window.Html5Qrcode),s.onerror=()=>n(new Error("ดาวน์โหลดตัวอ่านสแกนเนอร์ไม่สำเร็จ")),document.head.appendChild(s)})}async function S(e){const n=document.getElementById("leave-scan-result");if(n&&!$){$=!0,D(),n.classList.add("hidden"),n.innerHTML="",V(e);try{const s=await B(e);if(!s){E(),await O(e);return}C(),W(s)}catch(s){console.error(s),E(),Q(s.message||"เกิดข้อผิดพลาดในการดึงข้อมูลใบอนุญาต")}}}function T(){var e;(e=document.getElementById("leave-scan-modal"))==null||e.remove(),$=!1,b&&(clearInterval(b),b=null),u&&(u.stop().catch(()=>{}),u=null)}window.addEventListener("hashchange",T);window._cleanupLeaveScanner=T;export{T as cleanupLeaveScanner,ee as renderStudentLeaveScanner};
