const i="10.22.663",c="azfutsal.html",f=o=>{const e=new URL(c,window.location.href);return e.searchParams.set("v",i),o&&e.searchParams.set("studentCode",o),e.href};function u(o){var r,n;(r=document.getElementById("azfutsal-modal"))==null||r.remove();const e=f(o),a=document.body.style.overflow;document.body.style.overflow="hidden";const t=document.createElement("div");t.id="azfutsal-modal",t.className="fixed inset-0 z-[320] bg-slate-950 flex flex-col",t.innerHTML=`
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">⚽ AZFUTSALCUP</div>
      </div>
      <a href="${e}" target="_blank" rel="noopener"
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
    <iframe src="${e}" class="flex-1 w-full border-0 bg-white" title="AZFUTSALCUP2025"></iframe>
  `;const s=()=>{document.removeEventListener("keydown",l),document.body.style.overflow=a,t.remove()},l=d=>{d.key==="Escape"&&s()};document.addEventListener("keydown",l),document.body.appendChild(t),(n=t.querySelector("[data-azfutsal-close]"))==null||n.addEventListener("click",s)}export{i as A,u as o};
