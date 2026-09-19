import{A as Z}from"./version.js_v_10.22-mqYkeZoJ.js";import{s as k}from"./supabase-BV-W2lsh.js";const G="azizgames.html",O=(a="",e="")=>{const n=new URL(G,window.location.href);return n.searchParams.set("v",Z),a&&n.searchParams.set("tab",a),e&&n.searchParams.set("stdid",e),n.href},j=async(a,e)=>{try{if(navigator.share){await navigator.share({title:"AZIZGAMES กีฬาสีออนไลน์",text:"ระบบจัดการกิจกรรมกีฬาสีออนไลน์ AZIZGAMES",url:a});return}await navigator.clipboard.writeText(a),e&&(e.textContent="คัดลอกลิงก์แล้ว",setTimeout(()=>{e.textContent=""},1800))}catch{e&&(e.textContent="แชร์ลิงก์ไม่สำเร็จ",setTimeout(()=>{e.textContent=""},1800))}};function N({admin:a=!1,manage:e=!1,teacherName:n="",teacherCode:q="",tab:C="",stdid:L=""}={}){var b,f,z,x,y,_;(b=document.getElementById("azizgames-modal"))==null||b.remove(),a?(localStorage.setItem("aziz_is_logged_in","true"),localStorage.setItem("aziz_sports_admin_allowed","true"),localStorage.setItem("aziz_current_user",JSON.stringify({username:q||"admin",displayName:n||"ผู้ดูแลระบบ"}))):(localStorage.removeItem("aziz_is_logged_in"),e?localStorage.setItem("aziz_sports_admin_allowed","true"):localStorage.removeItem("aziz_sports_admin_allowed"));const m=O(C,L),M=document.body.style.overflow;document.body.style.overflow="hidden";const t=document.createElement("div");t.id="azizgames-modal",t.className="fixed inset-0 z-[400] bg-slate-950 flex flex-col";const h=a||e;t.innerHTML=`
    <div class="h-12 flex items-center gap-2 px-3 sm:px-4 border-b border-slate-800 bg-slate-950 text-slate-100 shadow-lg">
      <div class="min-w-0 flex-1">
        <div class="text-sm font-extrabold truncate">🏆 AZIZGAMES กีฬาสีออนไลน์</div>
        <div class="text-[10px] text-slate-400 truncate">เปิดในหน้าต่างเต็มจอของระบบ ปพ5</div>
      </div>
      ${h?`
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
      ${h?`
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
      <a href="${m}" target="_blank" rel="noopener"
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
    <iframe src="${m}" class="flex-1 w-full border-0 bg-white" title="AZIZGAMES กีฬาสีออนไลน์"></iframe>
  `;const i=t.querySelector("iframe"),w=async d=>{var S,E;if(d.origin!==window.location.origin||d.source!==(i==null?void 0:i.contentWindow))return;const o=d.data;if((o==null?void 0:o.type)!=="azizgames:save-athlete-schedule"||!o.requestId)return;const g=o.payload||{},p=s=>s?new Date(s).toISOString():null;try{const s=p(g.registrationClosesAt),l=p(g.editOpensAt),u=p(g.editClosesAt);if(l&&s&&new Date(l)<new Date(s))throw new Error("เวลาเปิดแก้ไขต้องไม่ก่อนเวลาปิดรับสมัคร");if(u&&l&&new Date(u)<=new Date(l))throw new Error("เวลาปิดแก้ไขต้องอยู่หลังเวลาเปิดแก้ไข");const{data:c,error:I}=await k.from("events").select("id").eq("status","active").order("academic_year",{ascending:!1}).limit(1).maybeSingle();if(I||!(c!=null&&c.id))throw I||new Error("ไม่พบกิจกรรมกีฬาสีที่เปิดใช้งาน");const{error:A}=await k.from("sports_portal_settings").update({athlete_registration_closes_at:s,athlete_edit_opens_at:l,athlete_edit_closes_at:u,updated_at:new Date().toISOString()}).eq("event_id",c.id);if(A)throw A;(S=i.contentWindow)==null||S.postMessage({type:"azizgames:save-athlete-schedule-result",requestId:o.requestId,ok:!0},window.location.origin)}catch(s){(E=i.contentWindow)==null||E.postMessage({type:"azizgames:save-athlete-schedule-result",requestId:o.requestId,ok:!1,error:(s==null?void 0:s.message)||"บันทึกไม่สำเร็จ"},window.location.origin)}};window.addEventListener("message",w);const r=()=>{document.removeEventListener("keydown",v),window.removeEventListener("message",w),document.body.style.overflow=M,t.remove()},v=d=>{d.key==="Escape"&&r()};document.addEventListener("keydown",v),document.body.appendChild(t),(f=t.querySelector("[data-azizgames-close]"))==null||f.addEventListener("click",r),(z=t.querySelector("[data-azizgames-shirt-summary]"))==null||z.addEventListener("click",()=>{r(),window.dispatchEvent(new CustomEvent("pp5:open-sports-shirt-summary"))}),(x=t.querySelector("[data-azizgames-shirt-vote-settings]"))==null||x.addEventListener("click",()=>{r(),window.dispatchEvent(new CustomEvent("pp5:open-shirt-vote-settings"))}),(y=t.querySelector("[data-azizgames-shirt-vote-dashboard]"))==null||y.addEventListener("click",()=>{r(),window.dispatchEvent(new CustomEvent("pp5:open-shirt-vote-dashboard"))}),(_=t.querySelector("[data-azizgames-share]"))==null||_.addEventListener("click",()=>{j(m,t.querySelector("[data-azizgames-share-status]"))})}export{N as o};
