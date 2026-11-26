const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/teacher-views-attendance-DGyKbcmJ.js","assets/ui-DU3V9L7w.js","assets/api-vSXCr5aV.js","assets/supabase-BV-W2lsh.js","assets/supabase-errors-BniCCodr.js","assets/skill-groups-BY1NTbf4.js","assets/leave-time-CrS9gT63.js","assets/teacher-views-utils-PYNJrmMY.js"])))=>i.map(i=>d[i]);
import{g as d,_ as x}from"./ui-DU3V9L7w.js";import{J as v,K as g}from"./student-api-BCYhD7hm.js";import{bS as y,cL as u}from"./api-vSXCr5aV.js";import{setActiveNav as w,setTitle as f,setContent as r,_htmlEsc as i}from"./teacher-views-utils-PYNJrmMY.js";import"./assignment-annotations-api-Y9qfMpYa.js";import"./supabase-BV-W2lsh.js";import"./supabase-errors-BniCCodr.js";import"./score-display-EKXBehKd.js";import"./skill-groups-BY1NTbf4.js";const p=`<div class="flex justify-center py-16 text-gray-300">
  <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
  </svg>
</div>`;async function L(o){var l;w("overview"),f("เช็คชื่อแทนครู"),r(p);let n;try{n=await v(o)}catch(t){r(`<div class="p-6 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${i(d(t))}</div>`);return}const e=n.filter(t=>g(t.period));if(!e.length){r(`
      <div class="max-w-md mx-auto mt-10 text-center space-y-3 px-4">
        <div class="text-5xl">🕐</div>
        <p class="font-bold text-gray-700">ยังไม่ถึงเวลาคาบเรียนที่มอบหมายให้เช็คชื่อ</p>
        <p class="text-sm text-gray-400">เช็คชื่อแทนครูได้เฉพาะช่วงเวลาที่กำลังเรียนวิชานั้นอยู่ตอนนี้เท่านั้น</p>
        <button id="ad-back" class="mt-2 px-5 py-2.5 rounded-xl bg-gray-100 text-gray-600 text-sm font-semibold hover:bg-gray-200">← กลับหน้าแรก</button>
      </div>`),(l=document.getElementById("ad-back"))==null||l.addEventListener("click",()=>{var t;return(t=window._navTo)==null?void 0:t.call(window,"overview")});return}if(e.length===1){await m(o,e[0]);return}r(`
    <div class="max-w-md mx-auto mt-6 space-y-3 px-4">
      <h2 class="font-bold text-gray-800 text-base">🙋 เลือกห้องที่จะเช็คชื่อ</h2>
      ${e.map((t,c)=>{var s,a;return`
        <button data-idx="${c}" class="ad-pick-class w-full text-left p-4 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition">
          <p class="font-bold text-gray-800 text-sm">${i(((s=t.ms)==null?void 0:s.subject_name)??"")}</p>
          <p class="text-xs text-gray-400 mt-0.5">${i(t.cls.class_name)} · คาบ ${((a=t.period)==null?void 0:a.period_no)??"-"}</p>
        </button>`}).join("")}
    </div>`),document.querySelectorAll(".ad-pick-class").forEach(t=>{t.addEventListener("click",()=>m(o,e[parseInt(t.dataset.idx)]))})}async function m(o,n){const{cls:e,sessionNumber:l}=n;r(p);let t,c;try{[t,c]=await Promise.all([y(e.id),u(e.id)])}catch(s){r(`<div class="p-6 text-center text-red-400 text-sm">โหลดข้อมูลไม่สำเร็จ: ${i(d(s))}</div>`);return}try{const{openAttendanceDelegateForm:s}=await x(async()=>{const{openAttendanceDelegateForm:a}=await import("./teacher-views-attendance-DGyKbcmJ.js");return{openAttendanceDelegateForm:a}},__vite__mapDeps([0,1,2,3,4,5,6,7]));s(o,n,t,c,()=>{var a;return(a=window._navTo)==null?void 0:a.call(window,"overview")})}catch(s){r(`<div class="p-6 text-center text-red-400 text-sm">เปิดแบบฟอร์มไม่สำเร็จ: ${i(d(s))}</div>`)}}export{L as renderStudentAttendanceDelegate};
