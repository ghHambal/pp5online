const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chat-classroom-CfSy9Koo.js","assets/api-CnonnVVn.js","assets/supabase-BV-W2lsh.js","assets/impersonation-0xVfgYVY.js","assets/supabase-errors-BniCCodr.js","assets/student-api-B9JY02Vu.js","assets/teacher-views-utils-Ceiaeijy.js","assets/ui-DI1UEpN2.js","assets/version.js_v_10.22-DxLTis1W.js","assets/storage-CuUjCgvI.js"])))=>i.map(i=>d[i]);
import{a as g,h as P,_ as G}from"./ui-DI1UEpN2.js";import{checkDonorChatAccess as U,getDonorGroupRoomId as H,getAdminDmRoomsForAdmin as J,getMyBookmarkedMessages as W,toggleBookmark as q,getSystemConfig as F,getChatMessages as A,markChatRoomRead as E,deleteChatMessage as V,sendChatMessage as M,getMyAdminDmRoomId as K,getOrCreateAdminDmRoomId as Q,getMyClasses as X,getActiveChatAnnouncement as Y,unpinChatAnnouncement as Z,getTeacherNamesByProfileIds as ee,getChatTiersByProfileIds as te,getMyBookmarkedMessageIds as ae,getChatRoomReaders as ne,getChatAnnouncementHistory as se,createChatAnnouncement as oe}from"./api-CnonnVVn.js";import{s as C}from"./supabase-BV-W2lsh.js";import{setActiveNav as re,setTitle as ie,setContent as ce,_htmlEsc as x}from"./teacher-views-utils-Ceiaeijy.js";import{uploadChatImage as le}from"./storage-CuUjCgvI.js";import{a as de}from"./teacher-D3KXWFLQ.js";import"./version.js_v_10.22-DxLTis1W.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";import"./promptpay-CIuxvxIA.js";import"./browser-JP79f-a9.js";import"./sports-portals.js_v_10.22-BUafGoVM.js";import"./sports-awards-admin-6oCPrlSb.js";import"./azizgames-modal-BVIqoUog.js";import"./print-overlay-BVfxEd6n.js";import"./theme-DIdoXkqD.js";import"./anti-pull-refresh-BGrI1pMY.js";import"./push-notify-CIUUKsmF.js";import"./wen-sso-CcN06Rhh.js";import"./azfutsal-modal-C49SHklA.js";import"./tutorial-DW5HF32q.js";import"./terangganu-api-C1IjZK4l.js";import"./regrade-api-C8s-TuM0.js";let k=null,_=null,L="";function h(){k&&(C.removeChannel(k),k=null),_&&(clearInterval(_),_=null),L=""}window._cleanupDonorChat=h;const j=t=>new Date(t).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),I=t=>t.map(e=>`${e.id}:${e.deleted_at??""}`).join("|");function $(){if(h(),typeof window._cleanupClassroomChat=="function")try{window._cleanupClassroomChat()}catch{}}const R=t=>new Date(t).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});function Je(t){if(!(t!=null&&t.id)||document.getElementById("donor-chat-fab"))return;const e=document.createElement("button");e.id="donor-chat-fab",e.title="แชทครูผู้สนับสนุน",e.className="fixed z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white shadow-lg flex items-center justify-center overflow-hidden transition-transform hover:scale-105",e.style.cssText="position:fixed;right:max(0.75rem, env(safe-area-inset-right));left:auto;top:auto;bottom:calc(max(0.75rem, env(safe-area-inset-bottom)) + 68px + 64px);background:linear-gradient(135deg,#f59e0b,#b45309);font-size:1.3rem;",e.textContent="👑",document.body.appendChild(e),e.addEventListener("click",()=>me(t))}function S(){var t;$(),(t=document.getElementById("donor-chat-widget"))==null||t.remove()}async function me(t){var c,i;(c=document.getElementById("donor-chat-widget"))==null||c.remove(),$();const e=document.createElement("div");e.id="donor-chat-widget",e.className="fixed inset-0 z-[200] flex items-center justify-center sm:p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white sm:rounded-3xl shadow-2xl w-full h-full sm:h-auto sm:max-w-lg overflow-hidden sm:max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#b45309);padding-top:max(1rem, env(safe-area-inset-top));" class="px-5 pb-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">👑 แชทครูผู้สนับสนุน</h3>
          <p class="text-white/80 text-xs mt-0.5">กลุ่มแชทเฉพาะครูผู้สนับสนุนภาคเรียนนี้</p>
        </div>
        <div class="flex items-center gap-1 flex-shrink-0">
          <button id="donor-chat-notes-btn" class="text-white/90 hover:text-white text-xl px-1.5" title="โน้ตของฉัน">🔖</button>
          <button id="donor-chat-close" class="text-white/90 hover:text-white text-3xl leading-none px-2">&times;</button>
        </div>
      </div>
      <div id="donor-chat-body" class="flex-1 min-h-0 flex flex-col"></div>
    </div>`,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&S()}),e.querySelector("#donor-chat-close").addEventListener("click",S);const a=e.querySelector("#donor-chat-body");if(a.innerHTML='<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>',!await U(t.id,1).catch(()=>!1)){a.innerHTML=`
      <div class="p-8 text-center">
        <p class="text-4xl mb-3">⭐</p>
        <p class="font-bold text-gray-700 mb-2">สิทธิ์เฉพาะครูผู้สนับสนุน</p>
        <p class="text-sm text-gray-500 mb-4">โดเนทในภาคเรียนนี้เพื่อเข้าร่วมกลุ่มแชทครูผู้สนับสนุน พูดคุย/แลกเปลี่ยนกับครูท่านอื่น และคุยกับแอดมินได้โดยตรง</p>
        <button id="btn-donor-chat-donate" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,(i=a.querySelector("#btn-donor-chat-donate"))==null||i.addEventListener("click",()=>{var s;S(),(s=document.getElementById("btn-donate-float"))==null||s.click()});return}let n="group";const o=()=>{a.innerHTML=`
      <div class="flex border-b border-gray-100 flex-shrink-0">
        <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="group">👥 กลุ่มใหญ่</button>
        <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="admin">🛡️ แอดมิน</button>
        <button class="donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition" data-tab="classroom">🏫 ห้องเรียน</button>
      </div>
      <div id="donor-chat-slot" class="flex-1 min-h-0 flex flex-col"></div>`;const s=[...a.querySelectorAll(".donor-chat-tab")],l=a.querySelector("#donor-chat-slot"),b=f=>{n=f,$(),s.forEach(p=>{const m=p.dataset.tab===f;p.className=`donor-chat-tab flex-1 py-2.5 text-sm font-semibold transition ${m?"text-amber-600 border-b-2 border-amber-500":"text-gray-400 hover:text-gray-600"}`}),f==="group"?xe(l,t):f==="admin"?be(l,t):ue(l,t)};s.forEach(f=>f.addEventListener("click",()=>b(f.dataset.tab))),b(n)};o(),e.querySelector("#donor-chat-notes-btn").addEventListener("click",()=>{$(),O(a,o)})}async function xe(t,e){h(),t.innerHTML='<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>';const a=await H();if(!a){t.innerHTML='<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท กรุณาติดต่อแอดมิน</p>';return}await T(t,a,{myProfileId:e.profile_id,sendAsRole:"teacher",isGroupRoom:!0,isAdmin:!1})}async function be(t,e){h(),t.innerHTML='<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>';const a=await K(e.id).catch(()=>null);if(a){await T(t,a,{myProfileId:e.profile_id,sendAsRole:"teacher",isGroupRoom:!1,isAdmin:!1});return}t.innerHTML=`
    <div class="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <p class="text-4xl mb-3">🛡️</p>
      <p class="font-bold text-gray-700 mb-2">ยังไม่มีแชทกับแอดมิน</p>
      <p class="text-sm text-gray-500 mb-4">เริ่มแชทส่วนตัวกับแอดมินได้เลย เห็นเฉพาะคุณครูกับแอดมินเท่านั้น</p>
      <button id="btn-create-admin-dm" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">+ เริ่มแชทกับแอดมิน</button>
    </div>`,t.querySelector("#btn-create-admin-dm").addEventListener("click",async r=>{const n=r.currentTarget;n.disabled=!0,n.textContent="กำลังสร้าง...";try{const o=await Q();await T(t,o,{myProfileId:e.profile_id,sendAsRole:"teacher",isGroupRoom:!1,isAdmin:!1})}catch(o){g(o.message??"สร้างแชทไม่สำเร็จ","error"),n.disabled=!1,n.textContent="+ เริ่มแชทกับแอดมิน"}})}async function ue(t,e){t.innerHTML='<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>';const a=await X(e.id).catch(()=>[]);if(!a.length){t.innerHTML='<p class="text-center text-gray-400 py-12">ยังไม่มีห้องเรียนที่สอน</p>';return}B(t,e,a)}function B(t,e,a){t.innerHTML=`
    <div class="flex-1 overflow-y-auto p-3 space-y-2">
      <p class="text-xs text-gray-400 px-1 mb-1">เลือกห้องเรียนที่จะเปิดแชท</p>
      ${a.map(r=>{var n;return`
        <button type="button" class="classroom-pick-btn w-full text-left px-4 py-3 rounded-xl border border-gray-100 hover:bg-amber-50 hover:border-amber-200 transition flex items-center justify-between gap-2" data-class-id="${r.id}">
          <span class="text-sm font-semibold text-gray-700 truncate">${x(((n=r.master_subjects)==null?void 0:n.subject_name)??"—")}</span>
          <span class="text-xs text-gray-400 flex-shrink-0">${x(r.class_name??"")}</span>
        </button>`}).join("")}
    </div>`,t.querySelectorAll(".classroom-pick-btn").forEach(r=>{var i;const n=parseInt(r.dataset.classId,10),o=a.find(s=>s.id===n),c=`${((i=o==null?void 0:o.master_subjects)==null?void 0:i.subject_name)??""} (${(o==null?void 0:o.class_name)??""})`;r.addEventListener("click",()=>pe(t,e,n,c,a))})}async function pe(t,e,a,r,n){t.innerHTML=`
    <div class="flex items-center gap-2 px-3 py-2 border-b border-gray-100 flex-shrink-0">
      <button type="button" id="cc-back-to-list" class="text-sm text-gray-500 hover:text-gray-700 font-semibold flex-shrink-0">← เปลี่ยนห้อง</button>
      <p class="text-xs text-gray-400 truncate">${x(r)}</p>
    </div>
    <div id="cc-tab-room-slot" class="flex-1 min-h-0 flex flex-col"></div>`,t.querySelector("#cc-back-to-list").addEventListener("click",()=>{if(typeof window._cleanupClassroomChat=="function")try{window._cleanupClassroomChat()}catch{}B(t,e,n)});const o=t.querySelector("#cc-tab-room-slot"),{loadTeacherClassroomAccessInto:c}=await G(async()=>{const{loadTeacherClassroomAccessInto:i}=await import("./chat-classroom-CfSy9Koo.js");return{loadTeacherClassroomAccessInto:i}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));await c(o,e,a,r)}async function We(){h(),re("donor-chat-admin"),ie("💬 แชทครูผู้สนับสนุน");const{data:{user:t}}=await C.auth.getUser(),e=await H(),a=await J().catch(()=>[]),r=(s,l,b)=>`<button class="donor-chat-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${b?"bg-amber-500 text-white border-amber-500":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}" data-room-id="${s}">${x(l)}</button>`;ce(`
    <div class="flex flex-col h-[75vh]">
      <div class="flex items-center gap-2 pb-3 flex-shrink-0">
        <button id="donor-chat-notes-chip" class="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border border-indigo-200 text-indigo-600 hover:bg-indigo-50">🔖 โน้ตของฉัน</button>
        <div id="donor-chat-room-switcher" class="flex items-center gap-2 overflow-x-auto">
          ${e?r(e,"👥 กลุ่มใหญ่",!0):""}
          ${a.map(s=>{var l;return r(s.id,`🛡️ ${((l=s.teachers)==null?void 0:l.full_name)??"ครู"}`,!1)}).join("")}
          ${a.length?"":'<span class="text-xs text-gray-400 flex-shrink-0">ยังไม่มีครูสร้างแชทกับแอดมิน</span>'}
        </div>
      </div>
      <div id="donor-chat-admin-body" class="flex-1 min-h-0 flex flex-col border border-gray-100 rounded-2xl overflow-hidden"></div>
    </div>`);const n=document.getElementById("donor-chat-room-switcher"),o=document.getElementById("donor-chat-admin-body");let c=null;const i=async s=>{c=s,n.querySelectorAll(".donor-chat-chip").forEach(l=>{const b=l.dataset.roomId===String(s);l.className=`donor-chat-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${b?"bg-amber-500 text-white border-amber-500":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}),await T(o,s,{myProfileId:t==null?void 0:t.id,sendAsRole:"admin",isGroupRoom:String(s)===String(e),isAdmin:!0})};n.querySelectorAll(".donor-chat-chip").forEach(s=>s.addEventListener("click",()=>i(s.dataset.roomId))),document.getElementById("donor-chat-notes-chip").addEventListener("click",()=>{h(),O(o,()=>i(c??e))}),e?await i(e):o.innerHTML='<p class="text-center text-gray-400 py-12">ไม่พบห้องแชท</p>'}async function T(t,e,{myProfileId:a,sendAsRole:r,isGroupRoom:n,isAdmin:o}){var f;h(),t.innerHTML=`
    ${n?'<div id="chat-announcement-banner" class="flex-shrink-0"></div>':""}
    <div id="chat-msg-list" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
    <form id="chat-send-form" class="flex items-center gap-2 p-3 border-t border-gray-100 flex-shrink-0" style="padding-bottom:max(0.75rem, env(safe-area-inset-bottom));">
      <input type="file" id="chat-img-input" accept="image/*" class="hidden" />
      <button type="button" id="chat-img-btn" title="แนบรูปภาพ"
        class="w-10 h-10 flex-shrink-0 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-lg">📷</button>
      <input id="chat-msg-input" type="text" maxlength="2000" placeholder="พิมพ์ข้อความ..."
        class="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300" />
      <button type="submit" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">ส่ง</button>
    </form>`,n&&N(t,e,o);const c=await F().catch(()=>({})),i=de(c),s=t.querySelector("#chat-msg-list"),l=await A(e);await D(s,l,a,i,o,e),s.scrollTop=s.scrollHeight,L=I(l),E(e,(f=l.at(-1))==null?void 0:f.id).catch(()=>{}),s.addEventListener("click",async p=>{const m=p.target.closest(".bm-toggle");if(m){const u=parseInt(m.dataset.messageId,10),y=m.dataset.bookmarked==="1";m.disabled=!0;try{const v=await q(u,y);m.dataset.bookmarked=v?"1":"0",m.className=`bm-toggle text-xs px-1 ${v?"text-amber-500":"text-gray-300 hover:text-gray-400"}`,m.title=v?"เอาออกจากโน้ตของฉัน":"บันทึกโน้ต"}catch(v){g(v.message??"บันทึกโน้ตไม่สำเร็จ","error")}finally{m.disabled=!1}return}const d=p.target.closest(".msg-delete-btn");if(d){const u=parseInt(d.dataset.messageId,10),y=d.dataset.own==="1";if(!await P({title:y?"ยกเลิกการส่งข้อความนี้?":"ลบข้อความนี้?",message:y?"เพื่อนในแชทจะเห็นว่าข้อความนี้ถูกยกเลิกการส่งแล้ว":"ข้อความจะถูกลบออกจากแชท (กู้คืนไม่ได้)",confirmText:y?"ยกเลิกการส่ง":"ลบเลย"}))return;try{await V(u),await w(e,s,a,i,o,{force:!0})}catch(z){g(z.message??"ลบข้อความไม่สำเร็จ","error")}}}),t.querySelector("#chat-send-form").addEventListener("submit",async p=>{p.preventDefault();const m=t.querySelector("#chat-msg-input"),d=m.value.trim();if(d){m.value="";try{await M({roomId:e,authorRole:r,body:d}),await w(e,s,a,i,o)}catch(u){g(u.message??"ส่งข้อความไม่สำเร็จ","error")}}});const b=t.querySelector("#chat-img-input");t.querySelector("#chat-img-btn").addEventListener("click",()=>b.click()),b.addEventListener("change",async()=>{var d;const p=(d=b.files)==null?void 0:d[0];if(b.value="",!p)return;const m=t.querySelector("#chat-img-btn");m.disabled=!0,m.textContent="⏳";try{const u=await le(e,p);await M({roomId:e,authorRole:r,body:null,imageUrl:u}),await w(e,s,a,i,o)}catch(u){g(u.message??"ส่งรูปไม่สำเร็จ","error")}finally{m.disabled=!1,m.textContent="📷"}}),k=C.channel(`chat-room-${e}`).on("postgres_changes",{event:"*",schema:"public",table:"chat_messages",filter:`room_id=eq.${e}`},()=>w(e,s,a,i,o)).subscribe(),_=setInterval(()=>w(e,s,a,i,o),5e3)}async function w(t,e,a,r,n,{force:o=!1}={}){var l;const c=await A(t).catch(()=>null);if(!c||!e.isConnected)return;const i=I(c);if(!o&&i===L)return;const s=e.scrollHeight-e.scrollTop-e.clientHeight<60;await D(e,c,a,r,n,t),L=i,s&&(e.scrollTop=e.scrollHeight),E(t,(l=c.at(-1))==null?void 0:l.id).catch(()=>{})}async function D(t,e,a,r,n,o){const c=e.filter(d=>d.author_role==="teacher").map(d=>d.author_profile_id),i=e.map(d=>d.id),[s,l,b,f]=await Promise.all([ee(c),te(c),ae(i),ne(o).catch(()=>[])]),p=e.filter(d=>!d.deleted_at).at(-1);let m=null;p&&p.author_profile_id===a&&(m=f.filter(u=>u.profile_id!==a&&u.last_read_message_id>=p.id).map(u=>u.profile_id).map(u=>({profileId:u,name:s[u]??"แอดมิน"}))),t.innerHTML=e.map(d=>we(d,a,s,l,r,b,n,d===p?m:null)).join(""),t.querySelectorAll(".seen-more-btn").forEach(d=>d.addEventListener("click",()=>fe(JSON.parse(d.dataset.names))))}function fe(t){const e=document.createElement("div");e.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs max-h-[70vh] flex flex-col overflow-hidden">
      <div class="px-5 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <h4 class="font-bold text-gray-800 text-sm">👁️ อ่านแล้ว (${t.length})</h4>
        <button type="button" id="seen-list-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
      </div>
      <div class="flex-1 overflow-y-auto p-4 space-y-2">
        ${t.map(a=>`<p class="text-sm text-gray-700">${x(a)}</p>`).join("")}
      </div>
    </div>`,document.body.appendChild(e),e.addEventListener("click",a=>{a.target===e&&e.remove()}),e.querySelector("#seen-list-close").addEventListener("click",()=>e.remove())}async function N(t,e,a){var c,i,s;const r=t.querySelector("#chat-announcement-banner");if(!r)return;const n=await Y(e).catch(()=>null),o=()=>N(t,e,a);n?r.innerHTML=`
      <div class="px-4 py-2.5 flex items-start gap-2" style="background:linear-gradient(135deg,#fef3c7,#fde68a);border-bottom:1px solid #fbbf24;">
        <span class="text-base flex-shrink-0">📌</span>
        <button type="button" id="ann-history-btn" class="flex-1 min-w-0 text-left">
          <p class="text-xs font-bold text-amber-900 truncate">${x(n.body)}</p>
        </button>
        <div class="flex items-center gap-2 flex-shrink-0">
          ${a?'<button type="button" id="ann-compose-btn" class="text-[11px] font-bold text-amber-700 hover:text-amber-900">➕</button>':""}
          ${a?'<button type="button" id="ann-unpin-btn" class="text-[11px] font-bold text-amber-700 hover:text-amber-900">✕</button>':""}
        </div>
      </div>`:r.innerHTML=a?`
      <div class="px-4 py-2 flex items-center justify-between" style="background:#fafaf9;border-bottom:1px solid #eee;">
        <span class="text-xs text-gray-400">ยังไม่มีประกาศปักหมุด</span>
        <button type="button" id="ann-compose-btn" class="text-xs font-bold text-amber-600 hover:text-amber-700">➕ สร้างประกาศ</button>
      </div>`:"",(c=r.querySelector("#ann-history-btn"))==null||c.addEventListener("click",()=>ye(e)),(i=r.querySelector("#ann-compose-btn"))==null||i.addEventListener("click",()=>ge(e,o)),(s=r.querySelector("#ann-unpin-btn"))==null||s.addEventListener("click",async()=>{try{await Z(n.id),await o()}catch(l){g(l.message??"ยกเลิกปักหมุดไม่สำเร็จ","error")}})}function ge(t,e){const a=document.createElement("div");a.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",a.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
      <h4 class="font-bold text-gray-800 mb-3">📌 สร้างประกาศใหม่</h4>
      <textarea id="ann-compose-text" rows="4" maxlength="2000" placeholder="พิมพ์ข้อความประกาศ..."
        class="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 mb-3"></textarea>
      <div class="flex justify-end gap-2">
        <button type="button" id="ann-compose-cancel" class="px-4 py-2 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-50">ยกเลิก</button>
        <button type="button" id="ann-compose-submit" class="px-4 py-2 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-600 text-white">ประกาศ</button>
      </div>
    </div>`,document.body.appendChild(a),a.addEventListener("click",r=>{r.target===a&&a.remove()}),a.querySelector("#ann-compose-cancel").addEventListener("click",()=>a.remove()),a.querySelector("#ann-compose-submit").addEventListener("click",async()=>{const r=a.querySelector("#ann-compose-text").value.trim();if(!r)return;const n=a.querySelector("#ann-compose-submit");n.disabled=!0;try{await oe({roomId:t,body:r}),a.remove(),await e()}catch(o){g(o.message??"สร้างประกาศไม่สำเร็จ","error"),n.disabled=!1}})}async function ye(t){const e=document.createElement("div");e.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",e.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[75vh] flex flex-col overflow-hidden">
      <div class="px-5 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <h4 class="font-bold text-gray-800">📌 ประวัติประกาศ</h4>
        <button type="button" id="ann-history-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
      </div>
      <div id="ann-history-list" class="flex-1 overflow-y-auto p-4 space-y-3 text-center text-gray-400 text-sm">กำลังโหลด...</div>
    </div>`,document.body.appendChild(e),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.querySelector("#ann-history-close").addEventListener("click",()=>e.remove());const a=await se(t).catch(()=>[]),r=e.querySelector("#ann-history-list");r.innerHTML=a.length?a.map(n=>`
    <div class="rounded-xl border ${n.is_active?"border-amber-300 bg-amber-50":"border-gray-100"} p-3 text-left">
      <p class="text-[10px] text-gray-400 mb-1">${R(n.created_at)}${n.is_active?" · กำลังปักหมุด":""}</p>
      <p class="text-sm text-gray-700 whitespace-pre-wrap break-words">${x(n.body)}</p>
    </div>`).join(""):'<p class="text-center text-gray-400 text-sm py-8">ยังไม่เคยมีประกาศ</p>'}async function O(t,e){t.innerHTML=`
    <div class="flex items-center gap-2 px-4 py-3 border-b border-gray-100 flex-shrink-0">
      <button type="button" id="notes-back-btn" class="text-sm text-gray-500 hover:text-gray-700 font-semibold">← กลับ</button>
      <h4 class="font-bold text-gray-700 text-sm">🔖 โน้ตของฉัน</h4>
    </div>
    <div id="notes-list" class="flex-1 overflow-y-auto p-4 space-y-3 text-center text-gray-400 text-sm">กำลังโหลด...</div>`,t.querySelector("#notes-back-btn").addEventListener("click",e);const a=t.querySelector("#notes-list"),r=await W().catch(()=>[]);if(!r.length){a.innerHTML='<p class="text-center text-gray-400 text-sm py-12">ยังไม่มีข้อความที่บันทึกไว้ — กด 🔖 ใต้ข้อความในแชทเพื่อบันทึก</p>';return}a.className="flex-1 overflow-y-auto p-4 space-y-3",a.innerHTML=r.map(n=>`
    <div class="rounded-xl border border-gray-100 p-3" data-note-card="${n.id}">
      <div class="flex items-center justify-between mb-1 gap-2">
        <p class="text-[10px] font-bold text-indigo-500 truncate">${x(n.roomLabel)}</p>
        <button type="button" class="bm-toggle text-xs flex-shrink-0 text-amber-500" data-message-id="${n.id}" data-bookmarked="1" title="เอาออกจากโน้ตของฉัน">🔖</button>
      </div>
      ${n.deleted_at?`<p class="text-sm italic text-gray-400">🚫 ${n.deleted_by===n.author_profile_id?"ข้อความนี้ถูกยกเลิกการส่งแล้ว":"ข้อความนี้ถูกลบแล้ว"}</p>`:`${n.image_url?`<img src="${x(n.image_url)}" class="rounded-lg max-w-full max-h-48 object-contain mb-1" />`:""}
           ${n.body?`<p class="text-sm text-gray-700 whitespace-pre-wrap break-words">${x(n.body)}</p>`:""}`}
      <p class="text-[10px] text-gray-300 mt-1">${R(n.created_at)}</p>
    </div>`).join(""),a.addEventListener("click",async n=>{var i;const o=n.target.closest(".bm-toggle");if(!o)return;const c=parseInt(o.dataset.messageId,10);o.disabled=!0;try{await q(c,!0),(i=o.closest("[data-note-card]"))==null||i.remove(),a.querySelector("[data-note-card]")||(a.innerHTML='<p class="text-center text-gray-400 text-sm py-12">ยังไม่มีข้อความที่บันทึกไว้ — กด 🔖 ใต้ข้อความในแชทเพื่อบันทึก</p>')}catch(s){g(s.message??"ลบโน้ตไม่สำเร็จ","error"),o.disabled=!1}})}function he(t,e,a,r){const n=t.author_role==="admin",o=n?"แอดมิน":e[t.author_profile_id]??"ครู";let c="🛡️",i="#f59e0b";if(!n){const s=a[t.author_profile_id],l=s?r[s-1]:null;if(l){const b=String(l.sticker??"");c=/^https?:\/\//.test(b)?`<img src="${x(b)}" class="w-full h-full object-contain" />`:x(b||"🏅"),i=l.color||"#6366f1"}else c="👤",i="#9ca3af"}return`
    <div class="flex flex-col items-center w-11 flex-shrink-0">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg overflow-hidden bg-white shadow-sm" style="border:2px solid ${x(i)};">
        ${c}
      </div>
      <p class="text-[9px] text-gray-400 font-semibold mt-0.5 leading-tight text-center truncate w-11" title="${x(o)}">${x(o)}</p>
    </div>`}function ve(t){if(!t||!t.length)return"";const e=t.slice(0,3),a=t.length-e.length,r=e.map(o=>`<div class="w-4 h-4 rounded-full border border-white bg-gray-200 flex items-center justify-center text-[7px] font-bold text-gray-500 overflow-hidden" title="${x(o.name)}">${x(o.name.charAt(0))}</div>`).join(""),n=x(JSON.stringify(t.map(o=>o.name)));return`
    <div class="flex items-center gap-1 mt-1 px-1">
      <div class="flex -space-x-1.5">${r}</div>
      ${a>0?`<button type="button" class="seen-more-btn text-[9px] text-gray-400 hover:text-gray-600" data-names="${n}">+${a}</button>`:'<span class="text-[9px] text-gray-400">อ่านแล้ว</span>'}
    </div>`}function we(t,e,a,r,n,o,c,i){const s=t.author_profile_id===e,l=s?"":he(t,a,r,n);if(t.deleted_at){const y=t.deleted_by===t.author_profile_id?"🚫 ข้อความนี้ถูกยกเลิกการส่งแล้ว":"🚫 ข้อความนี้ถูกลบแล้ว";return`
      <div class="flex items-end gap-2 ${s?"justify-end":"justify-start"}">
        ${l}
        <div class="flex flex-col ${s?"items-end":"items-start"} max-w-[70%]">
          <div class="border border-dashed border-gray-200 rounded-2xl px-4 py-2.5">
            <p class="text-sm italic text-gray-400">${y}</p>
          </div>
          <span class="text-[10px] text-gray-300 px-1 mt-0.5">${j(t.created_at)}</span>
        </div>
      </div>`}const b=t.image_url?`<img src="${x(t.image_url)}" class="rounded-xl max-w-full max-h-64 object-contain cursor-pointer mb-1" onclick="window.open('${x(t.image_url)}','_blank')" />`:"",f=o.has(t.id),p=`<button type="button" class="bm-toggle text-xs px-1 ${f?"text-amber-500":"text-gray-300 hover:text-gray-400"}" data-message-id="${t.id}" data-bookmarked="${f?"1":"0"}" title="${f?"เอาออกจากโน้ตของฉัน":"บันทึกโน้ต"}">🔖</button>`,d=s||c?`<button type="button" class="msg-delete-btn text-xs px-1 text-gray-300 hover:text-red-400" data-message-id="${t.id}" data-own="${s?"1":"0"}" title="${s?"ยกเลิกการส่ง":"ลบข้อความ"}">🗑️</button>`:"";return`
    <div class="flex items-end gap-2 ${s?"justify-end":"justify-start"}">
      ${l}
      <div class="flex flex-col ${s?"items-end":"items-start"} max-w-[70%]">
        <div class="${s?"bg-indigo-600 text-white":"bg-gray-100 text-gray-800"} rounded-2xl px-4 py-2.5">
          ${b}
          ${t.body?`<p class="text-sm whitespace-pre-wrap break-words">${x(t.body)}</p>`:""}
        </div>
        <div class="flex items-center gap-1.5 mt-0.5 px-1">
          <span class="text-[10px] text-gray-300">${j(t.created_at)}</span>
          ${p}
          ${d}
        </div>
        ${ve(i)}
      </div>
    </div>`}export{Je as injectDonorChatWidget,me as openDonorChatWidget,We as renderDonorChatAdmin};
