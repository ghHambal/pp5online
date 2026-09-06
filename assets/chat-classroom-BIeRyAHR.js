import{isClassroomChatUnlocked as j,getOrCreateClassroomChatRoomId as q,getMyClassroomFreePick as J,pickClassroomChatFreeRoom as z,getClassStudents as F,getChatMessages as H,markChatRoomRead as E,deleteChatMessage as U,acknowledgeChatMessage as G,sendChatMessage as T,getTeacherNamesByProfileIds as K,getChatRoomReaders as Q,getChatMessageAcks as V,setChatMessageAck as W}from"./api-1xsyVspL.js";import{f as X}from"./student-api-q3ZleCC5.js";import{s as N}from"./supabase-BV-W2lsh.js";import{a as y,f as Y}from"./ui-Dh03k4iX.js";import{_htmlEsc as x}from"./teacher-views-utils-B2Iz3UWp.js";import{y as Z}from"./storage-D6nkcVz6.js";function L(e){const t=document.getElementById("stu-content")||document.getElementById("main-content");t&&(t.innerHTML=e)}let _=null,$=null,C="",v=null;function k(){_&&(N.removeChannel(_),_=null),$&&(clearInterval($),$=null),v&&(clearTimeout(v),v=null),C=""}window._cleanupClassroomChat=k;const S=e=>new Date(e).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"}),B=e=>e.map(t=>`${t.id}:${t.deleted_at??""}:${t.requires_ack?1:0}`).join("|");async function ue(e,t,a){var u;(u=document.getElementById("classroom-chat-widget"))==null||u.remove(),k();const s=document.createElement("div");s.id="classroom-chat-widget",s.className="fixed inset-0 z-[200] flex items-center justify-center sm:p-4 bg-black/50",s.innerHTML=`
    <div class="bg-white sm:rounded-3xl shadow-2xl w-full h-full sm:h-auto sm:max-w-lg overflow-hidden sm:max-h-[85vh] flex flex-col">
      <div style="background:linear-gradient(135deg,#f59e0b,#b45309);padding-top:max(1rem, env(safe-area-inset-top));" class="px-5 pb-4 flex items-center justify-between flex-shrink-0">
        <div class="min-w-0">
          <h3 class="text-white font-bold text-base">🏫 แชทห้องเรียน</h3>
          <p class="text-white/80 text-xs mt-0.5 truncate">${x(a??"")}</p>
        </div>
        <button id="classroom-chat-close" class="text-white/90 hover:text-white text-3xl leading-none px-2 flex-shrink-0">&times;</button>
      </div>
      <div id="classroom-chat-body" class="flex-1 min-h-0 flex flex-col"></div>
    </div>`,document.body.appendChild(s),s.addEventListener("click",d=>{d.target===s&&(k(),s.remove())}),s.querySelector("#classroom-chat-close").addEventListener("click",()=>{k(),s.remove()});const n=s.querySelector("#classroom-chat-body");await M(n,e,t,a,{onDonateClick:()=>{var d;s.remove(),(d=document.getElementById("btn-donate-float"))==null||d.click()}})}async function M(e,t,a,s,{onDonateClick:n}={}){var f,i,b;const u=n??(()=>{var o;return(o=document.getElementById("btn-donate-float"))==null?void 0:o.click()});if(e.innerHTML='<div class="flex-1 flex items-center justify-center py-12 text-gray-400">กำลังโหลด...</div>',await j(a).catch(()=>!1)){const o=await q(a).catch(()=>null);if(!o){e.innerHTML='<p class="text-center text-gray-400 py-12">เปิดห้องแชทไม่สำเร็จ</p>';return}await A(e,o,a,t.profile_id,"teacher");return}const r=await J(t.id).catch(()=>null);if(r&&r.class_id!==a){e.innerHTML=`
      <div class="p-8 text-center">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-bold text-gray-700 mb-2">ห้องนี้ยังไม่เปิดใช้งานแชท</p>
        <p class="text-sm text-gray-500 mb-4">ภาคเรียนนี้คุณใช้สิทธิ์ห้องฟรีกับ "${x(((f=r.classes)==null?void 0:f.class_name)??"")}" ไปแล้ว — โดเนทระดับ 3 ขึ้นไปเพื่อเปิดแชทได้ทุกห้องไม่จำกัด</p>
        <button id="btn-classroom-chat-donate" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>`,(i=e.querySelector("#btn-classroom-chat-donate"))==null||i.addEventListener("click",u);return}e.innerHTML=`
    <div class="p-8 text-center">
      <p class="text-4xl mb-3">🎁</p>
      <p class="font-bold text-gray-700 mb-2">ทดลองใช้ฟรี 1 ห้อง/ภาคเรียน</p>
      <p class="text-sm text-gray-500 mb-4">ใช้สิทธิ์ห้องฟรีกับ "${x(s??"")}" เลยไหม? เลือกแล้วล็อกไว้ห้องนี้ตลอดภาคเรียน (เปลี่ยนได้ใหม่อัตโนมัติเมื่อขึ้นภาคเรียนหน้า) หรือโดเนทระดับ 3 ขึ้นไปเพื่อใช้ได้ทุกห้องไม่จำกัด</p>
      <div class="flex flex-col gap-2">
        <button id="btn-use-free-room" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">🎁 ใช้ห้องนี้ฟรี</button>
        <button id="btn-classroom-chat-donate" class="px-5 py-2.5 rounded-xl border border-amber-300 text-amber-700 hover:bg-amber-50 font-bold text-sm">⭐ ดูรายละเอียด/สนับสนุนโครงการ</button>
      </div>
    </div>`,(b=e.querySelector("#btn-classroom-chat-donate"))==null||b.addEventListener("click",u),e.querySelector("#btn-use-free-room").addEventListener("click",async o=>{const c=o.currentTarget;c.disabled=!0,c.textContent="กำลังตั้งค่า...";try{if(!await z(a)){y("มีคนเลือกห้องฟรีไปพร้อมกันแล้ว กรุณาลองใหม่","error"),await M(e,t,a,s,{onDonateClick:u});return}await M(e,t,a,s,{onDonateClick:u})}catch(m){y(m.message??"ตั้งค่าไม่สำเร็จ","error"),c.disabled=!1,c.textContent="🎁 ใช้ห้องนี้ฟรี"}})}async function me(e){L(`<div class="flex justify-center py-10 text-gray-300">
    <svg class="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
    </svg>
  </div>`);const t=await X(e.id).catch(()=>[]),a=await Promise.all(t.map(i=>j(i.id).catch(()=>!1))),s=t.filter((i,b)=>a[b]),n='<h2 class="font-bold text-gray-800 mb-4">🏫 แชทห้องเรียน</h2>';if(!s.length){L(`
      ${n}
      <div class="bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm">
        <p class="text-4xl mb-3">🏫</p>
        <p class="font-bold text-gray-700 mb-2">ยังไม่มีห้องเรียนที่เปิดแชทให้ใช้งาน</p>
        <p class="text-sm text-gray-500">คุณครูวิชาไหนเปิดใช้งานแชทห้องเรียน จะขึ้นให้เห็นที่นี่โดยอัตโนมัติ</p>
      </div>`);return}L(`
    ${n}
    <div class="flex flex-col" style="height:calc(100vh - 220px);">
      <div id="stu-classroom-chat-tabs" class="flex items-center gap-2 pb-3 overflow-x-auto flex-shrink-0"></div>
      <div id="stu-classroom-chat-body" class="flex-1 min-h-0 flex flex-col border border-gray-100 rounded-2xl overflow-hidden"></div>
    </div>`);const u=document.getElementById("stu-classroom-chat-tabs"),d=document.getElementById("stu-classroom-chat-body"),r=(i,b)=>{var c;const o=((c=i.master_subjects)==null?void 0:c.subject_name)??i.class_name??"วิชา";return`<button class="stu-classroom-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${b?"bg-amber-500 text-white border-amber-500":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}" data-class-id="${i.id}">${x(o)}</button>`};u.innerHTML=s.map((i,b)=>r(i,b===0)).join("");const f=async i=>{u.querySelectorAll(".stu-classroom-chip").forEach(o=>{const c=o.dataset.classId===String(i);o.className=`stu-classroom-chip flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition ${c?"bg-amber-500 text-white border-amber-500":"bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`});const b=await q(i).catch(()=>null);if(!b){d.innerHTML='<p class="text-center text-gray-400 py-12">เปิดห้องแชทไม่สำเร็จ</p>';return}await A(d,b,i,e.profile_id,"student")};u.querySelectorAll(".stu-classroom-chip").forEach(i=>i.addEventListener("click",()=>f(i.dataset.classId))),await f(s[0].id)}async function A(e,t,a,s,n){var b;k(),e.innerHTML=`
    <div id="cc-msg-list" class="flex-1 overflow-y-auto p-4 space-y-3"></div>
    <form id="cc-send-form" class="flex items-center gap-2 p-3 border-t border-gray-100 flex-shrink-0" style="padding-bottom:max(0.75rem, env(safe-area-inset-bottom));">
      <input type="file" id="cc-img-input" accept="image/*" class="hidden" />
      <button type="button" id="cc-img-btn" title="แนบรูปภาพ"
        class="w-10 h-10 flex-shrink-0 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center text-lg">📷</button>
      <input id="cc-msg-input" type="text" maxlength="2000" placeholder="พิมพ์ข้อความ..."
        class="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
      <button type="submit" class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm">ส่ง</button>
    </form>`;const u=await F(a).catch(()=>[]),d=new Map(u.map((o,c)=>[o.profile_id,{...o,seatNo:c+1}])),r=e.querySelector("#cc-msg-list"),f=await H(t);if(await O(r,f,s,d,n,t),r.scrollTop=r.scrollHeight,C=B(f),E(t,(b=f.at(-1))==null?void 0:b.id).catch(()=>{}),r.addEventListener("click",async o=>{const c=o.target.closest(".msg-delete-btn");if(c){const g=parseInt(c.dataset.messageId,10),w=c.dataset.own==="1";if(!await Y({title:w?"ยกเลิกการส่งข้อความนี้?":"ลบข้อความนี้?",message:w?"ทุกคนในห้องจะเห็นว่าข้อความนี้ถูกยกเลิกการส่งแล้ว":"ข้อความจะถูกลบออกจากแชท (กู้คืนไม่ได้)",confirmText:w?"ยกเลิกการส่ง":"ลบเลย"}))return;try{await U(g),await h(t,r,s,d,n,{force:!0})}catch(D){y(D.message??"ลบข้อความไม่สำเร็จ","error")}return}const m=o.target.closest(".ack-btn");if(m){const g=parseInt(m.dataset.messageId,10);m.disabled=!0;try{await G(g),await h(t,r,s,d,n,{force:!0})}catch(w){y(w.message??"รับทราบไม่สำเร็จ","error"),m.disabled=!1}return}const p=o.target.closest(".ack-summary-btn");if(p){R(JSON.parse(p.dataset.acked),JSON.parse(p.dataset.notAcked));return}const l=o.target.closest(".seen-more-btn");l&&I(JSON.parse(l.dataset.names))}),n==="teacher"){const o=m=>{const p=m.target.closest(".own-teacher-bubble");p&&(v=setTimeout(()=>{P(parseInt(p.dataset.messageId,10),p.dataset.requiresAck==="1",()=>h(t,r,s,d,n,{force:!0}))},550))},c=()=>{v&&(clearTimeout(v),v=null)};r.addEventListener("mousedown",o),r.addEventListener("touchstart",o,{passive:!0}),["mouseup","mouseleave","touchend","touchcancel","touchmove"].forEach(m=>r.addEventListener(m,c))}e.querySelector("#cc-send-form").addEventListener("submit",async o=>{o.preventDefault();const c=e.querySelector("#cc-msg-input"),m=c.value.trim();if(m){c.value="";try{await T({roomId:t,authorRole:n,body:m}),await h(t,r,s,d,n)}catch(p){y(p.message??"ส่งข้อความไม่สำเร็จ","error")}}});const i=e.querySelector("#cc-img-input");e.querySelector("#cc-img-btn").addEventListener("click",()=>i.click()),i.addEventListener("change",async()=>{var m;const o=(m=i.files)==null?void 0:m[0];if(i.value="",!o)return;const c=e.querySelector("#cc-img-btn");c.disabled=!0,c.textContent="⏳";try{const p=await Z(t,o);await T({roomId:t,authorRole:n,body:null,imageUrl:p}),await h(t,r,s,d,n)}catch(p){y(p.message??"ส่งรูปไม่สำเร็จ","error")}finally{c.disabled=!1,c.textContent="📷"}}),_=N.channel(`chat-room-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"chat_messages",filter:`room_id=eq.${t}`},()=>h(t,r,s,d,n)).subscribe(),$=setInterval(()=>h(t,r,s,d,n),5e3)}async function h(e,t,a,s,n,{force:u=!1}={}){var i;const d=await H(e).catch(()=>null);if(!d||!t.isConnected)return;const r=B(d);if(!u&&r===C)return;const f=t.scrollHeight-t.scrollTop-t.clientHeight<60;await O(t,d,a,s,n,e),C=r,f&&(t.scrollTop=t.scrollHeight),E(e,(i=d.at(-1))==null?void 0:i.id).catch(()=>{})}async function O(e,t,a,s,n,u){const d=t.filter(l=>l.author_role==="teacher").map(l=>l.author_profile_id),r=t.filter(l=>l.requires_ack).map(l=>l.id),[f,i,b]=await Promise.all([K(d),Q(u).catch(()=>[]),V(r).catch(()=>[])]),o=l=>{const g=s.get(l);return g?`(${g.seatNo}) ${g.full_name??""}`:f[l]??"ครู"},c=t.filter(l=>!l.deleted_at).at(-1);let m=null;c&&c.author_profile_id===a&&(m=i.filter(l=>l.profile_id!==a&&l.last_read_message_id>=c.id).map(l=>({profileId:l.profile_id,name:o(l.profile_id)})));const p=new Map;r.forEach(l=>p.set(l,new Set)),b.forEach(l=>{var g;return(g=p.get(l.message_id))==null?void 0:g.add(l.profile_id)}),e.innerHTML=t.map(l=>ae(l,a,f,s,n,l===c?m:null,l.requires_ack?p.get(l.id):null)).join("")}function I(e){const t=document.createElement("div");t.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",t.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs max-h-[70vh] flex flex-col overflow-hidden">
      <div class="px-5 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <h4 class="font-bold text-gray-800 text-sm">👁️ อ่านแล้ว (${e.length})</h4>
        <button type="button" id="seen-list-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
      </div>
      <div class="flex-1 overflow-y-auto p-4 space-y-2">
        ${e.map(a=>`<p class="text-sm text-gray-700">${x(a)}</p>`).join("")}
      </div>
    </div>`,document.body.appendChild(t),t.addEventListener("click",a=>{a.target===t&&t.remove()}),t.querySelector("#seen-list-close").addEventListener("click",()=>t.remove())}function P(e,t,a){const s=document.createElement("div");s.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-2">
      <button type="button" id="ack-menu-toggle" class="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-sm font-semibold text-gray-700 flex items-center gap-2.5">
        📢 <span>${t?"ยกเลิกประกาศให้รับทราบ":"ประกาศให้นักเรียนรับทราบ"}</span>
      </button>
      <button type="button" id="ack-menu-cancel" class="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-sm text-gray-400">ปิด</button>
    </div>`,document.body.appendChild(s),s.addEventListener("click",n=>{n.target===s&&s.remove()}),s.querySelector("#ack-menu-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#ack-menu-toggle").addEventListener("click",async()=>{s.remove();try{await W(e,!t),await a()}catch(n){y(n.message??"ตั้งค่าไม่สำเร็จ","error")}})}function R(e,t){const a=document.createElement("div");a.className="fixed inset-0 z-[220] flex items-center justify-center p-4 bg-black/50",a.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xs max-h-[75vh] flex flex-col overflow-hidden">
      <div class="px-5 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
        <h4 class="font-bold text-gray-800 text-sm">📢 สถานะรับทราบ</h4>
        <button type="button" id="ack-detail-close" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
      </div>
      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <p class="text-xs font-bold text-emerald-600 mb-1.5">✔️ รับทราบแล้ว (${e.length})</p>
          ${e.length?e.map(s=>`<p class="text-sm text-gray-700">${x(s)}</p>`).join(""):'<p class="text-xs text-gray-300">ยังไม่มี</p>'}
        </div>
        <div>
          <p class="text-xs font-bold text-gray-400 mb-1.5">⏳ ยังไม่รับทราบ (${t.length})</p>
          ${t.length?t.map(s=>`<p class="text-sm text-gray-500">${x(s)}</p>`).join(""):'<p class="text-xs text-gray-300">ครบทุกคนแล้ว</p>'}
        </div>
      </div>
    </div>`,document.body.appendChild(a),a.addEventListener("click",s=>{s.target===a&&a.remove()}),a.querySelector("#ack-detail-close").addEventListener("click",()=>a.remove())}function ee(e){if(!e||!e.length)return"";const t=e.slice(0,3),a=e.length-t.length,s=t.map(u=>`<div class="w-4 h-4 rounded-full border border-white bg-gray-200 flex items-center justify-center text-[7px] font-bold text-gray-500 overflow-hidden" title="${x(u.name)}">${x(u.name.replace(/^\(\d+\)\s*/,"").charAt(0))}</div>`).join(""),n=x(JSON.stringify(e.map(u=>u.name)));return`
    <div class="flex items-center gap-1 mt-1 px-1">
      <div class="flex -space-x-1.5">${s}</div>
      ${a>0?`<button type="button" class="seen-more-btn text-[9px] text-gray-400 hover:text-gray-600" data-names="${n}">+${a}</button>`:'<span class="text-[9px] text-gray-400">อ่านแล้ว</span>'}
    </div>`}function te(e,t,a,s,n){if(!e.requires_ack)return"";const u=a.size,d=[...t],r=d.map(o=>{const c=a.get(o);return c?`(${c.seatNo}) ${c.full_name??""}`:"นักเรียน"}),f=[...a.values()].filter(o=>!t.has(o.profile_id)).map(o=>`(${o.seatNo}) ${o.full_name??""}`),i=t.has(n),b=s==="student"&&!i?`<button type="button" class="ack-btn text-[10px] font-bold text-white bg-emerald-500 hover:bg-emerald-600 px-2.5 py-1 rounded-full flex-shrink-0" data-message-id="${e.id}">✅ รับทราบ</button>`:s==="student"?'<span class="text-[10px] text-emerald-500 font-semibold flex-shrink-0">✔️ รับทราบแล้ว</span>':"";return`
    <div class="flex items-center gap-2 mt-1 px-1 flex-wrap">
      <button type="button" class="ack-summary-btn text-[10px] font-bold text-amber-600 hover:text-amber-700"
        data-acked="${x(JSON.stringify(r))}" data-not-acked="${x(JSON.stringify(f))}">
        📢 รับทราบแล้ว ${d.length}/${u} คน
      </button>
      ${b}
    </div>`}function se(e,t,a){if(e.author_role==="teacher"){const r=t[e.author_profile_id]??"ครู";return`
      <div class="flex flex-col items-center w-11 flex-shrink-0">
        <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg bg-white shadow-sm" style="border:2px solid #f59e0b;">🧑‍🏫</div>
        <p class="text-[9px] text-gray-400 font-semibold mt-0.5 leading-tight text-center truncate w-11" title="${x(r)}">${x(r)}</p>
      </div>`}const n=a.get(e.author_profile_id),u=n?`(${n.seatNo}) ${n.full_name??""}`:"นักเรียน";return`
    <div class="flex flex-col items-center w-11 flex-shrink-0">
      <div class="w-9 h-9 rounded-full flex items-center justify-center text-lg bg-white shadow-sm overflow-hidden" style="border:2px solid #9ca3af;">${n!=null&&n.image_url?`<img src="${x(n.image_url)}" class="w-full h-full object-cover" />`:"👤"}</div>
      <p class="text-[9px] text-gray-400 font-semibold mt-0.5 leading-tight text-center truncate w-11" title="${x(u)}">${x(u)}</p>
    </div>`}function ae(e,t,a,s,n,u,d){const r=e.author_profile_id===t,f=r?"":se(e,a,s);if(e.deleted_at){const l=e.deleted_by===e.author_profile_id?"🚫 ข้อความนี้ถูกยกเลิกการส่งแล้ว":"🚫 ข้อความนี้ถูกลบแล้ว";return`
      <div class="flex items-end gap-2 ${r?"justify-end":"justify-start"}">
        ${f}
        <div class="flex flex-col ${r?"items-end":"items-start"} max-w-[70%]">
          <div class="border border-dashed border-gray-200 rounded-2xl px-4 py-2.5">
            <p class="text-sm italic text-gray-400">${l}</p>
          </div>
          <span class="text-[10px] text-gray-300 px-1 mt-0.5">${S(e.created_at)}</span>
        </div>
      </div>`}const i=e.image_url?`<img src="${x(e.image_url)}" class="rounded-xl max-w-full max-h-64 object-contain cursor-pointer mb-1" onclick="window.open('${x(e.image_url)}','_blank')" />`:"",o=r||n==="teacher"?`<button type="button" class="msg-delete-btn text-xs px-1 text-gray-300 hover:text-red-400" data-message-id="${e.id}" data-own="${r?"1":"0"}" title="${r?"ยกเลิกการส่ง":"ลบข้อความ"}">🗑️</button>`:"",m=r&&n==="teacher"?`class="own-teacher-bubble bg-amber-500 text-white rounded-2xl px-4 py-2.5 ${e.requires_ack?"ring-2 ring-offset-1 ring-amber-300":""}" data-message-id="${e.id}" data-requires-ack="${e.requires_ack?"1":"0"}"`:`class="${r?"bg-amber-500 text-white":"bg-gray-100 text-gray-800"} rounded-2xl px-4 py-2.5 ${e.requires_ack?"ring-2 ring-offset-1 ring-amber-300":""}"`;return`
    <div class="flex items-end gap-2 ${r?"justify-end":"justify-start"}">
      ${f}
      <div class="flex flex-col ${r?"items-end":"items-start"} max-w-[70%]">
        <div ${m}>
          ${i}
          ${e.body?`<p class="text-sm whitespace-pre-wrap break-words">${x(e.body)}</p>`:""}
        </div>
        <div class="flex items-center gap-1.5 mt-0.5 px-1">
          <span class="text-[10px] text-gray-300">${S(e.created_at)}</span>
          ${o}
        </div>
        ${te(e,d??new Set,s,n,t)}
        ${ee(u)}
      </div>
    </div>`}export{M as loadTeacherClassroomAccessInto,ue as openTeacherClassroomChat,me as renderStudentClassroomChat};
