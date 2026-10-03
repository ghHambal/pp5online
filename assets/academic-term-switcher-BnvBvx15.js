const m="10.22.879",f="azfutsal.html",b=e=>{const t=new URL(f,window.location.href);return t.searchParams.set("v",m),e&&t.searchParams.set("studentCode",e),t.href};function v(e){var n,s;(n=document.getElementById("azfutsal-modal"))==null||n.remove();const t=b(e),c=document.body.style.overflow;document.body.style.overflow="hidden";const r=document.createElement("div");r.id="azfutsal-modal",r.className="fixed inset-0 z-[320] bg-slate-950 flex flex-col",r.innerHTML=`
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">⚽ AZFUTSALCUP</div>
      </div>
      <a href="${t}" target="_blank" rel="noopener"
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="เปิดในบราวเซอร์/แท็บใหม่">
        ↗
      </a>
      <button type="button" data-azfutsal-close
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600/80 hover:border-red-500 transition"
        title="ปิด">
        ✕
      </button>
    </div>
    <iframe src="${t}" class="flex-1 w-full border-0 bg-white" title="AZFUTSALCUP2025"></iframe>
  `;const a=()=>{document.removeEventListener("keydown",o),document.body.style.overflow=c,r.remove()},o=l=>{l.key==="Escape"&&a()};document.addEventListener("keydown",o),document.body.appendChild(r),(s=r.querySelector("[data-azfutsal-close]"))==null||s.addEventListener("click",a)}function d(e){return`${Number((e==null?void 0:e.academic_year)??(e==null?void 0:e.academicYear))}:${Number(e==null?void 0:e.semester)}`}function u(e={}){return{academic_year:Number(e.academicYear??e.academic_year??2568),semester:Number(e.semester??1),start_date:e.semester_start??null,end_date:e.semester_end??null,is_current:!0}}function h(e,t={},c=[]){const r=[...Array.isArray(e)?e:[],u(t),...c??[]],a=new Map;for(const n of r){const s=d(n);!/^\d+:\d+$/.test(s)||a.has(s)||a.set(s,{...n,academic_year:Number(n.academic_year??n.academicYear),semester:Number(n.semester)})}const o=d(u(t));return[...a.values()].sort((n,s)=>{const l=d(n),i=d(s);return l===o?-1:i===o?1:i.localeCompare(l,void 0,{numeric:!0})})}function y(e){return`ภาคเรียนที่ ${e.semester}/${e.academic_year}`}function w(e,t,c){return e.map(r=>{const a=d(r),o=a===c?" (ปัจจุบัน)":" (ย้อนหลัง)";return`<option value="${a}" ${a===t?"selected":""}>${y(r)}${o}</option>`}).join("")}export{m as A,d as a,h as c,v as o,w as r};
