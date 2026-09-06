import{s as y}from"./supabase-BV-W2lsh.js";/* empty css             */const v="staff_shirt_size_pw",s=document.getElementById("staff-shirt-root"),o=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),E=["นาย","นาง","นางสาว","อื่นๆ"],S=()=>`
  <div class="rounded-xl px-3 py-2.5 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 flex items-start gap-2">
    <span class="flex-shrink-0">📌</span>
    <span><b>คุณครูที่มีบัญชีเข้าระบบ ปพ.5</b> กรุณาแจ้งไซซ์ผ่านระบบของตัวเอง (ล็อกอิน → หน้าภาพรวม → ปุ่ม "👕 แจ้งไซซ์เสื้อ") แทนหน้านี้ — หน้านี้สำหรับบุคลากรที่ไม่มีบัญชีเข้าระบบเท่านั้น</span>
  </div>`;async function $(e){const{data:a,error:r}=await y.rpc("get_personnel_shirt_size_options",{p_password:e});if(r)throw r;return a}async function z(e){const{data:a,error:r}=await y.rpc("list_personnel_shirt_requests",{p_password:e});if(r)throw r;return a||[]}function T(e){s.className="max-w-md mx-auto",s.innerHTML=`
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">ขอรหัสผ่านได้จากฝ่ายที่รับผิดชอบเรื่องเสื้อกีฬาสี</p>
      </div>
      ${S()}
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าแจ้งไซซ์เสื้อ</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`;const a=s.querySelector("#gate-password"),r=s.querySelector("#gate-error"),d=async()=>{const f=a.value.trim();if(f){s.querySelector("#gate-submit").disabled=!0;try{const i=await $(f);sessionStorage.setItem(v,f),e(f,i)}catch{r.classList.remove("hidden"),s.querySelector("#gate-submit").disabled=!1}}};s.querySelector("#gate-submit").onclick=d,a.addEventListener("keydown",f=>{f.key==="Enter"&&d()})}const k=e=>`
  <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1 mb-4 w-full">
    <button type="button" data-shirt-tab="new" class="flex-1 py-2 rounded-lg text-xs font-bold transition-all ${e==="new"?"bg-pink-600 text-white":"text-slate-500"}">📝 แจ้งไซซ์ใหม่</button>
    <button type="button" data-shirt-tab="lookup" class="flex-1 py-2 rounded-lg text-xs font-bold transition-all ${e==="lookup"?"bg-pink-600 text-white":"text-slate-500"}">🔍 ดู/แก้ไข/ลบข้อมูลที่เคยแจ้ง</button>
  </div>`;function q(e,a){s.querySelectorAll("[data-shirt-tab]").forEach(r=>r.onclick=()=>{r.dataset.shirtTab==="new"?w(e,a):A(e,a)})}const H=()=>`
  <div>
    <label class="block text-xs font-bold text-slate-600 mb-1.5">คำนำหน้าชื่อ</label>
    <select id="staff-prefix" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm bg-white">
      <option value="">-- เลือกคำนำหน้าชื่อ --</option>
      ${E.map(e=>`<option value="${o(e)}">${o(e)}</option>`).join("")}
    </select>
    <input id="staff-prefix-custom" type="text" placeholder="ระบุคำนำหน้าชื่อ" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm mt-2 hidden">
  </div>
  <div>
    <label class="block text-xs font-bold text-slate-600 mb-1.5">ชื่อ-นามสกุล (ไม่ต้องใส่คำนำหน้าชื่อซ้ำ)</label>
    <input id="staff-name" type="text" placeholder="เช่น สมชาย ใจดี" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm">
  </div>`;function M(){s.querySelector("#staff-prefix").addEventListener("change",e=>{s.querySelector("#staff-prefix-custom").classList.toggle("hidden",e.target.value!=="อื่นๆ")})}function I(){const e=s.querySelector("#staff-prefix").value,a=e==="อื่นๆ"?s.querySelector("#staff-prefix-custom").value.trim():e,r=s.querySelector("#staff-name").value.trim();return{prefix:a,name:r,fullName:a&&r?`${a}${r}`:""}}function w(e,a){s.className="max-w-md mx-auto";const r=(a==null?void 0:a.sizes)||[];let d=null;s.innerHTML=`
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
      ${k("new")}
      ${S()}
      ${H()}
      <p class="text-[10.5px] text-slate-400 -mt-3">พิมพ์คำนำหน้าชื่อ+ชื่อเดิมอีกครั้งได้ถ้าต้องการแก้ไขไซซ์ที่เคยแจ้งไว้</p>
      <div>
        <label class="block text-xs font-bold text-slate-600 mb-1.5">เพศ</label>
        <div class="grid grid-cols-2 gap-2">
          <button type="button" data-gender="M" class="py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-500">👦 ชาย</button>
          <button type="button" data-gender="W" class="py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold text-slate-500">👧 หญิง</button>
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-slate-600 mb-1.5">ไซซ์เสื้อ</label>
        <select id="staff-size" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm bg-white">
          <option value="">-- เลือกไซซ์ --</option>
          ${r.map(n=>`<option value="${o(n.code)}">${o(n.code)} (รอบอก ${o(n.chest)} นิ้ว)</option>`).join("")}
        </select>
      </div>
      <div id="staff-feedback"></div>
      <button id="staff-submit" class="w-full py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-bold text-sm">✅ แจ้งไซซ์เสื้อ</button>
    </div>`,q(e,a),M();const f=(n,c)=>{s.querySelector("#staff-feedback").innerHTML=`<div class="rounded-xl px-3 py-2.5 text-xs font-semibold bg-red-50 text-red-600 border border-red-200">${o(c)}</div>`};s.querySelectorAll("[data-gender]").forEach(n=>n.onclick=()=>{d=n.dataset.gender,s.querySelectorAll("[data-gender]").forEach(c=>{const u=c.dataset.gender===d;c.className=`py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${u?"border-pink-500 bg-pink-50 text-pink-700":"border-slate-200 text-slate-500"}`})});let i=!1;s.querySelector("#staff-prefix").addEventListener("change",()=>{i=!1}),s.querySelector("#staff-prefix-custom").addEventListener("input",()=>{i=!1}),s.querySelector("#staff-name").addEventListener("input",()=>{i=!1});const h=async(n,c)=>{const u=s.querySelector("#staff-submit");u.disabled=!0;try{await y.rpc("submit_personnel_shirt_size",{p_password:e,p_full_name:n,p_gender:d,p_size:c}).then(t=>{if(t.error)throw t.error}),N(e,a,n,c)}catch(t){f(!1,(t==null?void 0:t.message)||"บันทึกไม่สำเร็จ กรุณาลองใหม่"),u.disabled=!1}};s.querySelector("#staff-submit").onclick=async()=>{const{prefix:n,fullName:c}=I(),u=s.querySelector("#staff-size").value;if(!n){f(!1,"กรุณาเลือก (หรือระบุ) คำนำหน้าชื่อ");return}if(!c){f(!1,"กรุณากรอกชื่อ-นามสกุล");return}if(!d){f(!1,"กรุณาเลือกเพศ");return}if(!u){f(!1,"กรุณาเลือกไซซ์เสื้อ");return}if(i){await h(c,u);return}const t=s.querySelector("#staff-submit");t.disabled=!0;try{const{data:p,error:l}=await y.rpc("check_personnel_name_is_teacher",{p_password:e,p_full_name:c});if(l)throw l;if(p!=null&&p.is_teacher){t.disabled=!1,s.querySelector("#staff-feedback").innerHTML=`
          <div class="rounded-xl px-3 py-3 text-xs font-semibold bg-amber-50 text-amber-800 border-2 border-amber-300 space-y-2">
            <p>⚠️ ชื่อ "${o(c)}" ตรงกับรายชื่อ<b>คุณครู</b>ในระบบ ปพ.5 — ถ้าคุณเป็นครูคนนี้ กรุณาไปแจ้งไซซ์ผ่านระบบ ปพ.5 แทน (ล็อกอิน → หน้าภาพรวม → ปุ่ม "แจ้งไซซ์เสื้อ") ไม่ใช่หน้านี้</p>
            <button type="button" id="staff-confirm-not-teacher" class="w-full py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs">ไม่ใช่ครูคนนี้ ยืนยันแจ้งไซซ์ต่อ</button>
          </div>`,s.querySelector("#staff-confirm-not-teacher").onclick=()=>{i=!0,h(c,u)};return}await h(c,u)}catch(p){t.disabled=!1,f(!1,(p==null?void 0:p.message)||"ตรวจสอบไม่สำเร็จ กรุณาลองใหม่")}}}function N(e,a,r,d){s.className="max-w-md mx-auto",s.innerHTML=`
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center space-y-3">
      <div class="text-5xl">✅</div>
      <h2 class="font-bold text-slate-800">แจ้งไซซ์เสื้อเรียบร้อยแล้ว</h2>
      <p class="text-sm text-slate-600">${o(r)} — ไซซ์ <b class="text-pink-600">${o(d)}</b></p>
      <button id="staff-again" class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm mt-2">👤 แจ้งไซซ์ให้อีกคน</button>
    </div>`,s.querySelector("#staff-again").onclick=()=>w(e,a)}function A(e,a){s.className="max-w-3xl mx-auto",s.innerHTML=`
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      ${k("lookup")}
      <input id="staff-search" type="text" placeholder="🔍 ค้นหาชื่อ/ไซซ์/เพศ..." class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm">
      <p id="staff-list-status" class="text-xs text-slate-400"></p>
      <div id="staff-list-wrap" class="overflow-x-auto"></div>
    </div>`,q(e,a);const r=s.querySelector("#staff-list-status"),d=s.querySelector("#staff-list-wrap"),f=(a==null?void 0:a.sizes)||[];let i=[],h="",n=null;const c=t=>{const p=t.gender==="W"?"👧 หญิง":"👦 ชาย",l=t.updated_at?new Date(t.updated_at).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—",x=n===t.full_name;return`
      <tr class="border-b border-slate-100">
        <td class="py-2 pr-2">${o(t.full_name)}</td>
        <td class="py-2 px-2 text-center whitespace-nowrap">${p}</td>
        <td class="py-2 px-2 text-center"><span class="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold text-xs">${o(t.size)}</span></td>
        <td class="py-2 px-2 text-center text-xs text-slate-400 whitespace-nowrap">${o(l)}</td>
        <td class="py-2 pl-2 text-right whitespace-nowrap">
          <button type="button" data-edit="${o(t.full_name)}" class="px-2 py-1 rounded-lg ${x?"bg-slate-800 text-white":"bg-slate-100 hover:bg-slate-200 text-slate-600"} text-xs font-bold">✏️</button>
          <button type="button" data-delete="${o(t.full_name)}" class="px-2 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold ml-1">🗑️</button>
        </td>
      </tr>
      ${x?`
      <tr class="bg-slate-50">
        <td colspan="5" class="p-3">
          <div class="flex flex-wrap items-end gap-2">
            <div class="flex-1 min-w-[160px]">
              <label class="block text-[10px] font-bold text-slate-500 mb-1">ไซซ์ใหม่ของ ${o(t.full_name)}</label>
              <select data-edit-size class="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm bg-white">
                ${f.map(b=>`<option value="${o(b.code)}" ${b.code===t.size?"selected":""}>${o(b.code)} (รอบอก ${o(b.chest)} นิ้ว)</option>`).join("")}
              </select>
            </div>
            <button type="button" data-save-edit="${o(t.full_name)}" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">💾 บันทึก</button>
            <button type="button" data-cancel-edit class="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-600 text-xs font-bold">ยกเลิก</button>
          </div>
          <div data-edit-feedback class="mt-2"></div>
        </td>
      </tr>`:""}`},u=()=>{const t=h.trim().toLowerCase(),p=t?i.filter(l=>l.full_name.toLowerCase().includes(t)||l.size.toLowerCase().includes(t)||(l.gender==="W"?"หญิง":"ชาย").includes(t)):i;if(r.textContent=`บุคลากรที่แจ้งไซซ์แล้วทั้งหมด ${i.length} คน${t?` — ตรงกับคำค้นหา ${p.length} คน`:""}`,!p.length){d.innerHTML=`<p class="text-sm text-slate-400 text-center py-8">${i.length?"ไม่พบข้อมูลตามคำค้นหา":"ยังไม่มีบุคลากรแจ้งไซซ์เสื้อ"}</p>`;return}d.innerHTML=`
      <table class="w-full text-sm">
        <thead><tr class="text-left text-slate-400 border-b border-slate-200">
          <th class="py-2 pr-2 font-bold">ชื่อ-นามสกุล</th>
          <th class="py-2 px-2 font-bold text-center">เพศ</th>
          <th class="py-2 px-2 font-bold text-center">ไซซ์</th>
          <th class="py-2 px-2 font-bold text-center">วันที่แจ้งล่าสุด</th>
          <th class="py-2 pl-2 font-bold text-right">จัดการ</th>
        </tr></thead>
        <tbody>${p.map(c).join("")}</tbody>
      </table>`,d.querySelectorAll("[data-edit]").forEach(l=>l.onclick=()=>{n=n===l.dataset.edit?null:l.dataset.edit,u()}),d.querySelectorAll("[data-cancel-edit]").forEach(l=>l.onclick=()=>{n=null,u()}),d.querySelectorAll("[data-save-edit]").forEach(l=>l.onclick=async()=>{const x=l.dataset.saveEdit,b=i.find(m=>m.full_name===x),g=l.closest("tr"),_=g.querySelector("[data-edit-size]").value,L=g.querySelector("[data-edit-feedback]");l.disabled=!0;try{await y.rpc("submit_personnel_shirt_size",{p_password:e,p_full_name:x,p_gender:b.gender,p_size:_}).then(m=>{if(m.error)throw m.error}),b.size=_,b.updated_at=new Date().toISOString(),n=null,u()}catch(m){L.innerHTML=`<div class="rounded-xl px-3 py-2 text-xs font-semibold bg-red-50 text-red-600 border border-red-200">${o((m==null?void 0:m.message)||"บันทึกไม่สำเร็จ")}</div>`,l.disabled=!1}}),d.querySelectorAll("[data-delete]").forEach(l=>l.onclick=()=>{const x=l.dataset.delete;confirm(`ต้องการลบข้อมูลไซซ์เสื้อของ "${x}" ใช่หรือไม่? การลบไม่สามารถย้อนคืนได้`)&&(l.disabled=!0,y.rpc("delete_personnel_shirt_request",{p_password:e,p_full_name:x}).then(b=>{if(b.error)throw b.error;i=i.filter(g=>g.full_name!==x),u()}).catch(b=>{l.disabled=!1,alert((b==null?void 0:b.message)||"ลบไม่สำเร็จ กรุณาลองใหม่")}))})};s.querySelector("#staff-search").addEventListener("input",t=>{h=t.target.value,u()}),r.textContent="กำลังโหลดข้อมูล...",z(e).then(t=>{i=t,u()}).catch(t=>{r.textContent="",d.innerHTML=`<div class="rounded-xl px-3 py-2.5 text-xs font-semibold bg-red-50 text-red-600 border border-red-200">โหลดข้อมูลไม่สำเร็จ: ${o((t==null?void 0:t.message)||"")}</div>`})}async function C(){const e=sessionStorage.getItem(v);if(e)try{const a=await $(e);w(e,a);return}catch{sessionStorage.removeItem(v)}T((a,r)=>w(a,r))}C();
