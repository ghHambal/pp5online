import{s as f}from"./supabase-BV-W2lsh.js";/* empty css             */import{e as n,_ as k,o as E,a as S,b as q,t as $}from"./sports-portals-C_Nm-5jD.js";import"./impersonation-C66q0Y-O.js";import"./storage-D6nkcVz6.js";import"./browser-JP79f-a9.js";const d=document.getElementById("shirt-vote-public-app");async function T(){d.innerHTML='<div class="text-center text-gray-400 py-16">กำลังโหลด...</div>';const{data:e,error:l}=await f.rpc("get_public_shirt_vote_config");if(l){d.innerHTML=`<div class="bg-white rounded-2xl border border-red-100 p-6 text-sm text-red-600">โหลดข้อมูลไม่สำเร็จ: ${n(l.message)}</div>`;return}if(!(e!=null&&e.enabled)){d.innerHTML='<div class="bg-white rounded-2xl border p-8 text-center text-gray-400">ขณะนี้ยังไม่เปิดโหมดโหวตแบบไม่ล็อกอิน กรุณาเข้าโหวตผ่านระบบ ปพ.5 แทน</div>';return}L(e)}function L(e){d.innerHTML=`
    <div class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        ${e.tutorial_url?`<a href="${n(e.tutorial_url)}" target="_blank" rel="noopener" class="py-3 rounded-2xl border border-violet-200 bg-violet-50 text-violet-700 text-sm font-bold text-center hover:bg-violet-100 transition">🎬 คลิปคู่มือการเริ่มใช้งาน</a>`:""}
        ${e.intro_url?`<a href="${n(e.intro_url)}" target="_blank" rel="noopener" class="py-3 rounded-2xl border border-indigo-200 bg-indigo-50 text-indigo-700 text-sm font-bold text-center hover:bg-indigo-100 transition">📘 แนะนำ ปพ.5</a>`:""}
      </div>
      <div class="bg-white rounded-2xl border p-6">
        <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">กรอกรหัสนักเรียนของคุณ</label>
        <input id="student-code-input" inputmode="numeric" placeholder="เช่น 608001"
          class="w-full border border-gray-300 rounded-xl px-4 py-3 text-lg font-bold text-center tracking-widest focus:outline-none focus:border-indigo-500" />
        <p id="student-code-error" class="hidden text-xs text-red-500 mt-2 text-center"></p>
        <div id="student-confirm-card" class="hidden mt-4"></div>
      </div>
    </div>
  `;const l=d.querySelector("#student-code-input"),x=d.querySelector("#student-code-error"),s=d.querySelector("#student-confirm-card"),b=async()=>{const r=l.value.trim();if(x.classList.add("hidden"),s.classList.add("hidden"),s.innerHTML="",!r)return;const{data:o,error:c}=await f.rpc("get_public_shirt_vote_bundle",{p_code:r});if(c||o!=null&&o.error){x.textContent=(o==null?void 0:o.error)==="student_not_found"?"ไม่พบรหัสนักเรียนนี้ กรุณาตรวจสอบอีกครั้ง":"เกิดข้อผิดพลาด กรุณาลองใหม่",x.classList.remove("hidden");return}v(o,r)};l.addEventListener("blur",b),l.addEventListener("keydown",r=>{r.key==="Enter"&&(r.preventDefault(),l.blur())});function v(r,o){const c=r.student;s.innerHTML=`
      <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl border">
        ${c.image_url?`<img src="${n(c.image_url)}" class="w-14 h-16 object-cover rounded-xl border">`:`<div class="w-14 h-16 rounded-xl bg-gray-200 grid place-items-center font-bold text-gray-500">${n((c.full_name||"?").charAt(0))}</div>`}
        <div class="min-w-0 flex-1">
          <p class="font-bold text-gray-800 text-sm truncate">${n(c.full_name)}</p>
          <p class="text-xs text-gray-400">ห้อง ${n(c.main_room||"—")}</p>
        </div>
      </div>
      <button id="btn-enter-vote" class="w-full mt-3 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm">🗳️ เข้าหน้าโหวต</button>
    `,s.classList.remove("hidden"),s.querySelector("#btn-enter-vote").addEventListener("click",()=>M(r,o,e))}}function M(e,l,x){const s=e.designs||[];let b=e.my_design_id||null,v=Math.max(0,s.findIndex(t=>t.id===b));const r={};s.forEach(t=>{var a,p;const u=t.sports_shirt_design_colors||[];r[t.id]=((a=u.find(h=>h.image_url))==null?void 0:a.id)||((p=u[0])==null?void 0:p.id)||null});const o=e.vote_enabled&&(!e.vote_opens_at||new Date(e.vote_opens_at)<=new Date)&&(!e.vote_closes_at||new Date(e.vote_closes_at)>=new Date),c={shirt_vote_closes_at:e.vote_closes_at};d.innerHTML=`
    <button id="btn-vote-back" class="text-xs font-bold text-gray-500 hover:text-indigo-600 mb-3">← กลับไปกรอกรหัสใหม่</button>
    <div class="bg-white rounded-2xl border overflow-hidden">
      <div id="shirt-vote-tabs" class="flex border-b border-gray-100 overflow-x-auto"></div>
      <div id="shirt-vote-body" class="flex flex-col items-center p-5"></div>
    </div>
  `,d.querySelector("#btn-vote-back").addEventListener("click",()=>L(x));const _=d.querySelector("#shirt-vote-tabs"),g=d.querySelector("#shirt-vote-body");if(!s.length){g.innerHTML='<p class="text-sm text-gray-400 text-center py-8">ยังไม่มีแบบเสื้อของเพศคุณ</p>';return}const y=()=>{_.innerHTML=s.map((t,u)=>`<button data-shirt-tab="${u}" class="flex-shrink-0 px-5 py-3 text-sm font-bold border-b-2 transition ${u===v?"text-indigo-600 border-indigo-600":"text-gray-400 border-transparent hover:text-gray-600"}">${n(t.name||`แบบที่ ${t.design_no}`)}${b===t.id?" ✓":""}</button>`).join(""),_.querySelectorAll("[data-shirt-tab]").forEach(t=>t.addEventListener("click",()=>{v=parseInt(t.dataset.shirtTab,10),y(),m()}))},m=()=>{var p,h,w;const t=s[v],u=t.sports_shirt_design_colors||[],a=u.find(i=>i.id===r[t.id]);g.innerHTML=`
      ${o?"":'<div class="w-full max-w-sm rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-500 mb-4 text-center">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>'}
      <div class="w-full max-w-sm">
        <div class="relative">
          ${a!=null&&a.image_url?`<img src="${n(a.image_url)}" class="w-full aspect-square object-contain bg-gray-50 rounded-3xl border">`:'<div class="w-full aspect-square bg-gray-50 rounded-3xl border grid place-items-center text-gray-300 text-6xl">👕</div>'}
          ${a!=null&&a.image_url?'<button data-shirt-expand class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 shadow border flex items-center justify-center text-gray-600 hover:text-indigo-600" title="ขยายดูเต็มจอ">⤢</button>':""}
        </div>
        <p class="text-base font-bold text-gray-800 text-center mt-4">${n(t.name||`แบบที่ ${t.design_no}`)}</p>
        ${u.length?`<div class="flex justify-center gap-2 mt-3">${u.map(i=>`<button data-shirt-color-btn="${i.id}" class="w-8 h-8 rounded-full border-2 ${r[t.id]===i.id?"border-indigo-500 scale-110":"border-gray-200"} transition" style="background:${k(i.color_name)}" title="สี${n(i.color_name)}"></button>`).join("")}</div>`:""}
        ${t.html_url?`<button data-shirt-3d="${n(t.html_url)}" class="w-full mt-4 py-2 rounded-xl border text-xs font-bold text-violet-600 border-violet-200 hover:bg-violet-50">🧊 ดูแบบ 3 มิติ</button>`:""}
        <button data-shirt-vote ${o?"":"disabled"} class="w-full mt-3 py-3 rounded-2xl text-sm font-bold transition ${b===t.id?"bg-indigo-600 text-white":"bg-gray-100 text-gray-600 hover:bg-indigo-50"} ${o?"":"opacity-50 cursor-not-allowed"}">${b===t.id?"✓ โหวตแบบนี้แล้ว":"เลือกโหวตแบบนี้"}</button>
      </div>
    `,(p=g.querySelector("[data-shirt-expand]"))==null||p.addEventListener("click",()=>E(a.image_url)),g.querySelectorAll("[data-shirt-color-btn]").forEach(i=>i.addEventListener("click",()=>{r[t.id]=i.dataset.shirtColorBtn,m()})),(h=g.querySelector("[data-shirt-3d]"))==null||h.addEventListener("click",i=>S(i.currentTarget.dataset.shirt3d)),(w=g.querySelector("[data-shirt-vote]"))==null||w.addEventListener("click",()=>{!o||b===t.id||q(t,c,async()=>{const{error:i}=await f.rpc("cast_public_shirt_vote",{p_code:l,p_design:t.id});if(i){$(i.message,"error");return}b=t.id,$("บันทึกโหวตแล้ว"),y(),m()})})};y(),m()}T().catch(e=>{d.innerHTML=`<div class="bg-white rounded-2xl border border-red-100 p-6 text-sm text-red-600">โหลดไม่สำเร็จ: ${String((e==null?void 0:e.message)||e)}</div>`});
