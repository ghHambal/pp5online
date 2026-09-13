import{J as A,K as T}from"./student-api-GdZ3AenK.js";import{getClassStudents as j,getClassAttendanceAll as S,saveAttendanceCell as L}from"./api-Cf_Y4s92.js";import{setActiveNav as M,setTitle as I,setContent as n,_htmlEsc as l,ATT_CYCLE as u,ATT_STATUS as N}from"./teacher-views-utils-BWmONzsh.js";import{g as y,a as B}from"./ui-FQqAmrdo.js";import"./supabase-BV-W2lsh.js";import"./version.js_v_10.22-ffVTG8-v.js";const $=`<div class="flex justify-center py-16 text-gray-300">
  <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
  </svg>
</div>`;async function D(o){var d;M("overview"),I("เช็คชื่อแทนครู"),n($);let i;try{i=await A(o)}catch(t){n(`<div class="p-6 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(y(t))}</div>`);return}const r=i.filter(t=>T(t.period));if(!r.length){n(`
      <div class="max-w-md mx-auto mt-10 text-center space-y-3 px-4">
        <div class="text-5xl">🕐</div>
        <p class="font-bold text-gray-700">ยังไม่ถึงเวลาคาบเรียนที่มอบหมายให้เช็คชื่อ</p>
        <p class="text-sm text-gray-400">เช็คชื่อแทนครูได้เฉพาะช่วงเวลาที่กำลังเรียนวิชานั้นอยู่ตอนนี้เท่านั้น</p>
        <button id="ad-back" class="mt-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">← กลับหน้าแรก</button>
      </div>`),(d=document.getElementById("ad-back"))==null||d.addEventListener("click",()=>{var t;return(t=window._navTo)==null?void 0:t.call(window,"overview")});return}if(r.length===1){await w(o,r[0]);return}n(`
    <div class="max-w-md mx-auto mt-6 space-y-3 px-4">
      <h2 class="font-bold text-gray-800 text-base">🙋 เลือกห้องที่จะเช็คชื่อ</h2>
      ${r.map((t,p)=>{var a,c;return`
        <button data-idx="${p}" class="ad-pick-class w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition">
          <p class="font-bold text-gray-800 text-sm">${l(((a=t.ms)==null?void 0:a.subject_name)??"")}</p>
          <p class="text-xs text-gray-400 mt-0.5">${l(t.cls.class_name)} · คาบ ${((c=t.period)==null?void 0:c.period_no)??"-"}</p>
        </button>`}).join("")}
    </div>`),document.querySelectorAll(".ad-pick-class").forEach(t=>{t.addEventListener("click",()=>w(o,r[parseInt(t.dataset.idx)]))})}async function w(o,i){var h;const{cls:r,ms:d,sessionNumber:t,checkDate:p,period:a}=i;n($);let c,v;try{[c,v]=await Promise.all([j(r.id),S(r.id)])}catch(e){n(`<div class="p-6 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${l(y(e))}</div>`);return}const x={};v.filter(e=>e.session_number===t).forEach(e=>{x[e.student_id]=e.status});const f=e=>{const s=e?N[e]:null;return{cls:s?s.bg:"bg-white",color:s?s.color:"text-gray-300",label:s?s.label:"—"}},_=e=>{const s=f(x[e.id]??null);return`<div class="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0" data-sid="${e.id}">
      ${e.image_url?`<img src="${l(e.image_url)}" class="w-9 h-9 rounded-lg object-cover border flex-shrink-0" />`:'<div class="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">👤</div>'}
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-800 truncate">${l(e.full_name)}</p>
        <p class="text-[11px] text-gray-400">${l(e.student_code)}</p>
      </div>
      <button class="ad-cell-btn w-11 h-11 rounded-xl border border-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-base ${s.cls} ${s.color}">${s.label}</button>
    </div>`},k=a!=null&&a.start_time&&(a!=null&&a.end_time)?` (${String(a.start_time).slice(0,5)}-${String(a.end_time).slice(0,5)})`:"";n(`
    <div class="max-w-md mx-auto px-4 py-4 space-y-3 pb-10">
      <button id="ad-back2" class="text-xs text-emerald-600 font-semibold">← กลับ</button>
      <div>
        <h2 class="font-bold text-gray-800 text-base">${l((d==null?void 0:d.subject_name)??"")}</h2>
        <p class="text-xs text-gray-400">${l(r.class_name)} · คาบ ${t}${k}</p>
      </div>
      <p class="text-[11px] text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">📌 เช็คชื่อแทนครูได้เฉพาะช่วงเวลาที่กำลังเรียนวิชานี้อยู่ตอนนี้เท่านั้น</p>
      <div class="flex flex-wrap gap-1.5 text-[11px]">
        <span class="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg">ม=มา</span>
        <span class="px-2 py-1 bg-red-50 text-red-600 rounded-lg">ข=ขาด</span>
        <span class="px-2 py-1 bg-amber-50 text-amber-500 rounded-lg">ส=สาย</span>
        <span class="px-2 py-1 bg-blue-50 text-blue-500 rounded-lg">ก=กิจ</span>
        <span class="px-2 py-1 bg-orange-50 text-orange-500 rounded-lg">ป=ป่วย</span>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 px-3" id="ad-roster">
        ${c.length?c.map(_).join(""):'<p class="text-center text-gray-400 py-8 text-sm">ยังไม่มีนักเรียนในห้องนี้</p>'}
      </div>
    </div>`),(h=document.getElementById("ad-back2"))==null||h.addEventListener("click",()=>D(o)),document.querySelectorAll(".ad-cell-btn").forEach(e=>{e.addEventListener("click",async()=>{const s=e.closest("[data-sid]"),m=parseInt(s.dataset.sid),C=x[m]??null,b=u[(u.indexOf(C)+1)%u.length];x[m]=b;const g=f(b);e.className=`ad-cell-btn w-11 h-11 rounded-xl border border-gray-200 flex-shrink-0 flex items-center justify-center font-bold text-base ${g.cls} ${g.color}`,e.textContent=g.label;try{await L(r.id,m,t,p,b)}catch(E){B("บันทึกไม่สำเร็จ: "+y(E),"error")}})})}export{D as renderStudentAttendanceDelegate};
