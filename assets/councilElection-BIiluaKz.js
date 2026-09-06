import{s as h}from"./supabase-BV-W2lsh.js";/* empty css                                  */import{e as r,t as y}from"./sports-portals-C_Nm-5jD.js";import"./impersonation-C66q0Y-O.js";import"./storage-D6nkcVz6.js";import"./browser-JP79f-a9.js";const d=document.getElementById("council-election-app");function _(e){return`
    <div class="flex items-center gap-3 p-3 bg-[var(--surface-2)] rounded-2xl border">
      ${e.image_url?`<img src="${r(e.image_url)}" class="w-14 h-16 object-cover rounded-xl border">`:`<div class="w-14 h-16 rounded-xl bg-[var(--primary-soft-line)] text-[var(--primary-70)] grid place-items-center font-bold">${r((e.full_name||"?").charAt(0))}</div>`}
      <div class="min-w-0 flex-1">
        <p class="font-bold text-[var(--ink)] text-sm truncate">${r(e.full_name)}</p>
        <p class="text-xs text-[var(--muted-2)]">ห้อง ${r(e.main_room||"—")}</p>
      </div>
    </div>`}function b(){d.innerHTML=`
    <div class="bg-white rounded-2xl border p-6">
      <label class="block text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-2">กรอกรหัสนักเรียนของคุณ</label>
      <input id="student-code-input" inputmode="numeric" placeholder="เช่น 608001"
        class="w-full border border-[var(--line)] rounded-xl px-4 py-3 text-lg font-bold text-center tracking-widest focus:outline-none focus:border-[var(--primary-70)]" />
      <p id="student-code-error" class="hidden text-xs text-[var(--bad)] mt-2 text-center"></p>
      <div id="student-confirm-card" class="hidden mt-4"></div>
    </div>
    <p class="text-xs text-white/70 text-center mt-4">📢 หน้านี้ใช้ที่จุดลงคะแนนที่โรงเรียนจัดไว้เท่านั้น กรอกรหัสตัวเองแล้วดูรูปให้ตรงก่อนกดเข้าโหวต</p>
  `;const e=d.querySelector("#student-code-input"),l=d.querySelector("#student-code-error"),o=d.querySelector("#student-confirm-card");e.focus();const m=async()=>{const i=e.value.trim();if(l.classList.add("hidden"),o.classList.add("hidden"),o.innerHTML="",!i)return;const{data:a,error:v}=await h.rpc("get_public_council_election_bundle",{p_code:i});if(v){l.textContent="เกิดข้อผิดพลาด กรุณาลองใหม่",l.classList.remove("hidden");return}if((a==null?void 0:a.error)==="student_not_found"){l.textContent="ไม่พบรหัสนักเรียนนี้ กรุณาตรวจสอบอีกครั้ง",l.classList.remove("hidden");return}if((a==null?void 0:a.error)==="gender_unknown"){l.textContent="ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบ",l.classList.remove("hidden");return}u(a,i)};e.addEventListener("blur",m),e.addEventListener("keydown",i=>{i.key==="Enter"&&(i.preventDefault(),e.blur())});function u(i,a){const v=i.student;o.innerHTML=`
      ${_(v)}
      <button id="btn-enter-vote" class="w-full mt-3 py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm">🗳️ ใช่ฉันเอง — เข้าหน้าโหวต</button>
      <button id="btn-not-me" class="w-full mt-2 py-2 text-xs text-[var(--muted-2)] hover:text-[var(--ink-2)]">ไม่ใช่ฉัน กรอกรหัสใหม่</button>
    `,o.classList.remove("hidden"),o.querySelector("#btn-enter-vote").addEventListener("click",()=>k(i,a)),o.querySelector("#btn-not-me").addEventListener("click",()=>{e.value="",o.classList.add("hidden"),e.focus()})}}function k(e,l){if(e.error==="election_not_found"){d.innerHTML=`
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[var(--muted-2)] text-sm">ยังไม่มีการเลือกตั้งสำหรับสภาของคุณในขณะนี้</div>`,d.querySelector("#btn-back").addEventListener("click",b);return}const o=e.already_voted_candidate_id,m=o?e.candidates.find(t=>t.id===o):null;if(o){d.innerHTML=`
      <div class="bg-white rounded-2xl border p-6 text-center space-y-3">
        <p class="text-3xl">✅</p>
        <p class="font-bold text-[var(--ink)]">คุณลงคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!</p>
        ${m?`<div class="mt-2">${_({full_name:m.full_name,image_url:m.image_url,main_room:m.main_room})}</div>`:""}
        <p class="text-xs text-[var(--muted-2)] mt-2">${r(e.thank_you_message||"ผลการเลือกตั้งจะประกาศผ่านระบบ ปพ.5 เมื่อครูที่ปรึกษายืนยันแล้ว")}</p>
        <button id="btn-restart" class="w-full mt-2 py-3 rounded-2xl bg-[var(--bg-2)] hover:bg-[var(--line)] text-[var(--ink-2)] font-bold text-sm">เสร็จสิ้น — คนต่อไปกรอกรหัสใหม่</button>
      </div>`,d.querySelector("#btn-restart").addEventListener("click",b);return}if(!e.is_open){d.innerHTML=`
      <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
      <div class="bg-white rounded-2xl border p-6 text-center text-[var(--muted-2)] text-sm">ขณะนี้ยังไม่เปิดโหวต หรือปิดโหวตแล้ว</div>`,d.querySelector("#btn-back").addEventListener("click",b);return}let u=null;d.innerHTML=`
    <button id="btn-back" class="text-xs font-bold text-white/80 hover:text-white mb-3">← กลับไปกรอกรหัสใหม่</button>
    <div class="bg-white rounded-2xl border p-5 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] text-center mb-1">เลือกผู้สมัครที่ต้องการเลือกตั้ง</p>
      <div id="candidate-list" class="space-y-2"></div>
      <div id="vote-confirm-area"></div>
    </div>`,d.querySelector("#btn-back").addEventListener("click",b);const i=d.querySelector("#candidate-list"),a=d.querySelector("#vote-confirm-area");if(!e.candidates.length){i.innerHTML='<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีผู้สมัครในการเลือกตั้งนี้</p>';return}const v=t=>{const s=Array.isArray(t.policies)?t.policies:[],n=Array.isArray(t.experience)?t.experience:[],c=document.createElement("div");c.className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",c.innerHTML=`
      <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto">
        <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
          ${t.image_url?`<img src="${r(t.image_url)}" class="w-full h-full object-cover">`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${r((t.full_name||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 grid place-items-center font-extrabold text-[var(--primary-dark)] shadow">${t.ballot_number}</div>
          <button id="profile-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${r(t.full_name)}</p>
            <p class="text-xs text-[var(--muted)]">${r(t.main_room||"")}${t.gpa_general!=null||t.gpa_religious!=null?` · เกรดสามัญ ${r(t.gpa_general??"—")} · ศาสนา ${r(t.gpa_religious??"—")}`:""}</p>
          </div>
          ${t.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${r(t.slogan)}"</p>`:""}
          ${t.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${r(t.vision)}</p></div>`:""}
          ${s.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${s.map(x=>`<li>${r(x)}</li>`).join("")}</ul></div>`:""}
          ${n.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${n.map(x=>`<li>${r(x)}</li>`).join("")}</ul></div>`:""}
          ${!t.slogan&&!t.vision&&!s.length&&!n.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          <button id="profile-modal-select" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm mt-2">เลือกคนนี้</button>
        </div>
      </div>`,document.body.appendChild(c);const p=()=>c.remove();c.addEventListener("click",x=>{x.target===c&&p()}),c.querySelector("#profile-modal-close").addEventListener("click",p),c.querySelector("#profile-modal-select").addEventListener("click",()=>{p(),u=t.id,f(),g()})},f=()=>{i.innerHTML=e.candidates.map(t=>`
      <div class="rounded-xl border p-3 transition ${u===t.id?"border-[var(--primary-70)] bg-[var(--primary-soft)]":"border-[var(--line-soft)]"}">
        <button data-candidate="${t.id}" class="w-full flex items-center gap-3 text-left">
          <div class="w-8 h-8 rounded-full bg-[var(--primary-soft-line)] text-[var(--primary-dark)] grid place-items-center font-bold text-sm flex-shrink-0">${t.ballot_number}</div>
          ${t.image_url?`<img src="${r(t.image_url)}" class="w-10 h-12 object-cover rounded-[10px] border flex-shrink-0">`:`<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border">${r((t.full_name||"?").charAt(0))}</div>`}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${r(t.full_name)}</p>
            <p class="text-xs text-[var(--muted)]">${r(t.main_room||"")}</p>
            ${t.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold truncate mt-0.5">"${r(t.slogan)}"</p>`:""}
          </div>
        </button>
        <button data-detail="${t.id}" class="w-full mt-2 pt-2 border-t border-[var(--line-soft)] text-xs font-bold text-[var(--primary)]">ℹ️ ดูรายละเอียด</button>
      </div>`).join(""),i.querySelectorAll("[data-candidate]").forEach(t=>{t.addEventListener("click",()=>{u=Number(t.dataset.candidate),f(),g()})}),i.querySelectorAll("[data-detail]").forEach(t=>{t.addEventListener("click",()=>{const s=e.candidates.find(n=>n.id===Number(t.dataset.detail));s&&v(s)})})},g=()=>{if(!u){a.innerHTML="";return}const t=e.candidates.find(s=>s.id===u);a.innerHTML=`
      <div class="border-t border-[var(--line-soft)] pt-3 mt-1 space-y-2">
        <p class="text-xs text-[var(--muted)] text-center">แน่ใจนะว่าจะเลือก <span class="font-bold text-[var(--ink-2)]">${r(t.full_name)}</span>?</p>
        <button id="btn-confirm-vote" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm">✅ ยืนยันลงคะแนน</button>
      </div>`,a.querySelector("#btn-confirm-vote").addEventListener("click",async()=>{const s=a.querySelector("#btn-confirm-vote");s.disabled=!0,s.textContent="กำลังบันทึก...";const{data:n,error:c}=await h.rpc("cast_public_council_vote",{p_code:l,p_candidate_id:u});if(c||n!=null&&n.error){const p=(n==null?void 0:n.error)==="already_voted"?"รหัสนี้ลงคะแนนไปแล้ว":(n==null?void 0:n.error)==="election_not_open"?"ปิดโหวตแล้ว":"บันทึกไม่สำเร็จ กรุณาลองใหม่";y(p,"error"),s.disabled=!1,s.textContent="✅ ยืนยันลงคะแนน";return}y("บันทึกคะแนนแล้ว ขอบคุณที่ใช้สิทธิ์!"),e.already_voted_candidate_id=u,k(e,l)})};f()}b();
