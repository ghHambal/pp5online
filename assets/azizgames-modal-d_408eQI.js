import{s as M}from"./supabase-BV-W2lsh.js";const N="azizgames.html",P="10.22.817",j=(i="",e="",n=!1,m="",g="")=>{const o=new URL(N,window.location.href);return o.searchParams.set("v",P),i&&o.searchParams.set("tab",i),e&&o.searchParams.set("stdid",e),n&&o.searchParams.set("simulation","1"),m&&o.searchParams.set("match_id",m),g&&o.searchParams.set("sport_id",g),o.href},D=async(i,e)=>{try{if(navigator.share){await navigator.share({title:"AZIZGAMES กีฬาสีออนไลน์",text:"ระบบจัดการกิจกรรมกีฬาสีออนไลน์ AZIZGAMES",url:i});return}await navigator.clipboard.writeText(i),e&&(e.textContent="คัดลอกลิงก์แล้ว",setTimeout(()=>{e.textContent=""},1800))}catch{e&&(e.textContent="แชร์ลิงก์ไม่สำเร็จ",setTimeout(()=>{e.textContent=""},1800))}};function $({admin:i=!1,manage:e=!1,simulation:n=!1,matchId:m="",sportId:g="",teacherName:o="",teacherCode:Z="",tab:L="",stdid:G=""}={}){var x,y,_,S,E,I;(x=document.getElementById("azizgames-modal"))==null||x.remove(),i?(localStorage.setItem("aziz_is_logged_in","true"),localStorage.setItem("aziz_sports_admin_allowed","true"),localStorage.setItem("aziz_current_user",JSON.stringify({username:Z||"admin",displayName:o||"ผู้ดูแลระบบ"}))):n?(localStorage.setItem("aziz_is_logged_in","true"),localStorage.setItem("aziz_sports_admin_allowed","true"),localStorage.setItem("aziz_current_user",JSON.stringify({username:"simulation",displayName:"โหมดจำลองผลการแข่งขัน"}))):(localStorage.removeItem("aziz_is_logged_in"),e?localStorage.setItem("aziz_sports_admin_allowed","true"):localStorage.removeItem("aziz_sports_admin_allowed"));const p=j(L,G,n,m,g),O=document.body.style.overflow;document.body.style.overflow="hidden";const t=document.createElement("div");t.id="azizgames-modal",t.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col";const z=i||e||n;t.innerHTML=`
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">🏆 AZIZGAMES กีฬาสีออนไลน์</div>
        <div class="text-[10px] text-slate-400 truncate">เปิดในหน้าต่างเต็มจอของระบบ ปพ5</div>
      </div>
      ${z?`
      <button type="button" data-azizgames-shirt-summary
        class="h-8 inline-flex items-center justify-center gap-1 rounded-lg border border-pink-500/50 bg-pink-600/15 px-2.5 text-[11px] font-bold text-pink-100 hover:bg-pink-600/30 hover:text-white transition"
        title="ตั้งค่าและสรุปเสื้อกีฬาสี">
        <span>👕</span><span class="hidden sm:inline">ตั้งค่า/สรุปเสื้อ</span>
      </button>
      <button type="button" data-azizgames-shirt-vote-settings
        class="h-8 inline-flex items-center justify-center gap-1 rounded-lg border border-indigo-500/50 bg-indigo-600/15 px-2.5 text-[11px] font-bold text-indigo-100 hover:bg-indigo-600/30 hover:text-white transition"
        title="ตั้งค่าโหวตแบบเสื้อกีฬาสี">
        <span>🗳️</span><span class="hidden sm:inline">ตั้งค่าโหวตเสื้อ</span>
      </button>`:""}
      ${z?`
      <button type="button" data-azizgames-shirt-vote-dashboard
        class="h-8 inline-flex items-center justify-center gap-1 rounded-lg border border-violet-500/50 bg-violet-600/15 px-2.5 text-[11px] font-bold text-violet-100 hover:bg-violet-600/30 hover:text-white transition"
        title="ดูผลโหวตแบบเสื้อกีฬาสี">
        <span>📊</span><span class="hidden sm:inline">ผลโหวตเสื้อ</span>
      </button>`:""}
      <span data-azizgames-share-status class="hidden sm:inline text-[10px] text-emerald-300 min-w-[72px] text-right"></span>
      <button type="button" data-azizgames-share
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="แชร์ลิงก์">
        🔗
      </button>
      <a href="${p}" target="_blank" rel="noopener"
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition"
        title="เปิดในบราวเซอร์/แท็บใหม่">
        ↗
      </a>
      <button type="button" data-azizgames-close
        class="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600/80 hover:border-red-500 transition"
        title="ปิด">
        ✕
      </button>
    </div>
    <iframe src="${p}" class="flex-1 w-full border-0 bg-white" title="AZIZGAMES กีฬาสีออนไลน์"></iframe>
  `;const r=t.querySelector("iframe"),f=async d=>{var A,k;if(d.origin!==window.location.origin||d.source!==(r==null?void 0:r.contentWindow))return;const a=d.data;if((a==null?void 0:a.type)==="azizgames:simulation-saved"){window.dispatchEvent(new CustomEvent("pp5:azizgames-simulation-saved",{detail:a.payload||{}}));return}if((a==null?void 0:a.type)!=="azizgames:save-athlete-schedule"||!a.requestId)return;const h=a.payload||{},w=s=>s?new Date(s).toISOString():null;try{const s=w(h.registrationClosesAt),c=w(h.editOpensAt),v=w(h.editClosesAt);if(c&&s&&new Date(c)<new Date(s))throw new Error("เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร");if(v&&c&&new Date(v)<=new Date(c))throw new Error("เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข");const{data:u,error:q}=await M.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(q||!(u!=null&&u.id))throw q||new Error("ไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน");const{error:C}=await M.from("sports_portal_settings").update({athlete_registration_closes_at:s,athlete_edit_opens_at:c,athlete_edit_closes_at:v,updated_at:new Date().toISOString()}).eq("event_id",u.id);if(C)throw C;(A=r.contentWindow)==null||A.postMessage({type:"azizgames:save-athlete-schedule-result",requestId:a.requestId,ok:!0},window.location.origin)}catch(s){(k=r.contentWindow)==null||k.postMessage({type:"azizgames:save-athlete-schedule-result",requestId:a.requestId,ok:!1,error:(s==null?void 0:s.message)||"บันทึกไม่สำเร็จ"},window.location.origin)}};window.addEventListener("message",f);const l=()=>{document.removeEventListener("keydown",b),window.removeEventListener("message",f),document.body.style.overflow=O,t.remove()},b=d=>{d.key==="Escape"&&l()};document.addEventListener("keydown",b),document.body.appendChild(t),(y=t.querySelector("[data-azizgames-close]"))==null||y.addEventListener("click",l),(_=t.querySelector("[data-azizgames-shirt-summary]"))==null||_.addEventListener("click",()=>{l(),window.dispatchEvent(new CustomEvent("pp5:open-sports-shirt-summary"))}),(S=t.querySelector("[data-azizgames-shirt-vote-settings]"))==null||S.addEventListener("click",()=>{l(),window.dispatchEvent(new CustomEvent("pp5:open-shirt-vote-settings"))}),(E=t.querySelector("[data-azizgames-shirt-vote-dashboard]"))==null||E.addEventListener("click",()=>{l(),window.dispatchEvent(new CustomEvent("pp5:open-shirt-vote-dashboard"))}),(I=t.querySelector("[data-azizgames-share]"))==null||I.addEventListener("click",()=>{D(p,t.querySelector("[data-azizgames-share-status]"))})}export{$ as o};
