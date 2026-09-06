import{getTutorialByPage as q,getTutorialCategories as _,getTutorialVideos as E,incrementTutorialView as C,incrementTutorialLike as j,deleteTutorialCategory as I,deleteTutorialVideo as N,updateTutorialCategory as A,createTutorialCategory as z,updateTutorialVideo as M,createTutorialVideo as B}from"./api-1xsyVspL.js";import{setActiveNav as H,setTitle as V,setContent as S}from"./teacher-views-utils-B2Iz3UWp.js";import{a as b}from"./ui-Dh03k4iX.js";import"./supabase-BV-W2lsh.js";const P=[{key:"registration",label:"ลงทะเบียนเข้าใช้งาน"},{key:"profile",label:"โปรไฟล์ของฉัน"},{key:"schedule",label:"ตารางสอน"},{key:"courses",label:"คอร์สวิชาของฉัน"},{key:"classes",label:"ห้องเรียนของฉัน"},{key:"class-students",label:"จัดการนักเรียนในห้อง"},{key:"attendance",label:"เช็คชื่อ"},{key:"scores",label:"บันทึกคะแนน"},{key:"pp5",label:"ปพ.5 / เอกสาร"},{key:"announcement",label:"ประกาศ"}];async function K(c){const d=await q(c).catch(()=>[]);if(!d.length){b("ยังไม่มีคู่มือสำหรับหน้านี้","info");return}if(d.length===1){k(d[0].youtube_url,d[0].title);return}const n=document.createElement("div");n.className="fixed inset-0 z-[600] bg-black/60 flex items-center justify-center p-4",n.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
      <div class="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
        <h3 class="font-bold text-gray-800">📖 คู่มือหน้านี้</h3>
        <button id="tut-list-close" class="text-gray-400 hover:text-gray-600 text-xl">✕</button>
      </div>
      <div class="px-4 py-3 space-y-2 max-h-80 overflow-y-auto">
        ${d.map(r=>`
        <button class="tut-play-btn w-full text-left flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition"
          data-url="${l(r.youtube_url)}" data-title="${l(r.title)}">
          <div class="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-red-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-800 truncate">${l(r.title)}</p>
            ${r.duration?`<p class="text-xs text-gray-400 mt-0.5">${l(r.duration)}</p>`:""}
          </div>
        </button>`).join("")}
      </div>
    </div>`,document.body.appendChild(n),n.querySelector("#tut-list-close").addEventListener("click",()=>n.remove()),n.addEventListener("click",r=>{r.target===n&&n.remove()}),n.querySelectorAll(".tut-play-btn").forEach(r=>{r.addEventListener("click",()=>{n.remove(),k(r.dataset.url,r.dataset.title)})})}function k(c,d){const n=U(c),r=document.createElement("div");r.className="fixed inset-0 z-[700] bg-black/80 flex items-center justify-center p-4",r.innerHTML=`
    <div class="bg-black rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl">
      <div class="flex items-center justify-between px-4 py-3 bg-gray-900">
        <p class="text-white text-sm font-semibold truncate">${l(d)}</p>
        <button id="vid-close" class="text-gray-400 hover:text-white text-xl ml-3 flex-shrink-0">✕</button>
      </div>
      <div style="padding-top:56.25%;position:relative">
        <iframe src="${l(n)}" class="absolute inset-0 w-full h-full"
          frameborder="0" allow="autoplay;encrypted-media;fullscreen" allowfullscreen></iframe>
      </div>
    </div>`,document.body.appendChild(r),r.querySelector("#vid-close").addEventListener("click",()=>r.remove()),r.addEventListener("click",a=>{a.target===r&&r.remove()})}window._openPageTutorial=K;function U(c){const d=c.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/);return d?`https://www.youtube.com/embed/${d[1]}?autoplay=1`:c}function F(c){const d=c.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/);return d?`https://img.youtube.com/vi/${d[1]}/mqdefault.jpg`:""}function l(c){return String(c??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}async function G(){H("tutorial"),V("คู่มือการใช้งาน"),S(`<div class="animate-fade">
    <!-- Hero header -->
    <div class="relative overflow-hidden rounded-2xl mb-8 px-6 py-8 text-white"
      style="background:linear-gradient(135deg,#312e81 0%,#4f46e5 60%,#7c3aed 100%)">
      <div class="absolute inset-0 opacity-10"
        style="background-image:radial-gradient(circle at 20% 80%,#fff 1px,transparent 1px),radial-gradient(circle at 80% 20%,#fff 1px,transparent 1px);background-size:32px 32px"></div>
      <div class="relative">
        <p class="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">ปพ.5 ออนไลน์</p>
        <h2 class="text-2xl font-extrabold mb-1">📖 คู่มือการใช้งาน</h2>
        <p class="text-indigo-200 text-sm">วิดีโอสั้นแนะนำการใช้งาน กดเพื่อเล่นได้เลย</p>
      </div>
    </div>
    <div id="tutorial-body" class="flex justify-center py-16 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  </div>`);try{let L=function(){document.querySelectorAll(".tutorial-card").forEach(e=>{const u=e.querySelector(".tutorial-thumb"),x=e.querySelector(".tutorial-player"),f=e.querySelector("iframe");u==null||u.addEventListener("click",()=>{const g=e.dataset.embedId;if(!g)return;const w=Number(e.dataset.vidId);f.src=`https://www.youtube.com/embed/${g}?autoplay=1&rel=0`,u.classList.add("hidden"),x.classList.remove("hidden"),x.style.paddingTop="56.25%",C(w),e.querySelectorAll(".tut-views,.tut-views-ft").forEach($=>{const T=parseInt($.textContent.replace("K","000"))||0;$.textContent=o(T+1)})})}),document.querySelectorAll(".tut-like-btn").forEach(e=>{e.addEventListener("click",()=>{const u=Number(e.dataset.vidId),x=e.dataset.liked==="true",f=x?-1:1;j(u,f);const g=e.querySelector(".tut-likes"),w=parseInt(g.textContent.replace("K","000"))||0;g.textContent=o(Math.max(0,w+f)),x?(s.delete(u),e.dataset.liked="false",e.className=e.className.replace("bg-red-500 text-white shadow-sm","bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500")):(s.add(u),e.dataset.liked="true",e.className=e.className.replace("bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500","bg-red-500 text-white shadow-sm")),localStorage.setItem(m,JSON.stringify([...s]))})})};const[c,d]=await Promise.all([_(),E()]),n=d.filter(e=>e.is_active),r=n.filter(e=>!e.category_id),a=[...c.map(e=>({id:e.id,name:`${e.icon} ${e.name}`,items:n.filter(u=>u.category_id===e.id)})),...r.length?[{id:"other",name:"📁 อื่นๆ",items:r}]:[]].filter(e=>e.items.length),i=document.getElementById("tutorial-body");if(!i)return;if(!a.length){i.innerHTML=`<div class="text-center py-16 text-gray-400">
        <p class="text-4xl mb-3">📖</p><p class="font-medium">ยังไม่มีคู่มือ</p>
        <p class="text-xs mt-1">แอดมินสามารถเพิ่มวิดีโอคู่มือได้จากเมนู "คู่มือการใช้งาน" ในหน้าแอดมิน</p>
      </div>`;return}const m="tut_liked_v",s=new Set(JSON.parse(localStorage.getItem(m)??"[]")),o=e=>e>=1e3?(e/1e3).toFixed(1)+"K":String(e??0),t=e=>{const u=F(e.youtube_url),x=(e.youtube_url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/)||[])[1]??"",f=s.has(e.id);return`
      <div class="tutorial-card bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden
        hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
        data-vid-id="${e.id}" data-embed-id="${x}" data-title="${l(e.title)}">
        <!-- thumbnail / player -->
        <div class="tutorial-thumb relative bg-gray-950 cursor-pointer" style="padding-top:56.25%">
          ${u?`<img src="${l(u)}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"/>`:""}
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-14 h-14 rounded-full bg-white/90 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          ${e.duration?`<span class="absolute bottom-2 left-2 bg-black/75 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-md font-mono">${l(e.duration)}</span>`:""}
          <span class="absolute bottom-2 right-2 bg-black/75 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1">
            👁 <span class="tut-views">${o(e.view_count)}</span>
          </span>
        </div>
        <!-- iframe slot -->
        <div class="tutorial-player hidden" style="padding-top:56.25%;position:relative">
          <iframe class="absolute inset-0 w-full h-full" frameborder="0"
            allow="autoplay;encrypted-media;picture-in-picture;fullscreen" allowfullscreen></iframe>
        </div>
        <!-- info + like -->
        <div class="p-4">
          <p class="text-sm font-bold text-gray-800 leading-snug pr-12">${l(e.title)}</p>
          ${e.description?`<p class="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">${l(e.description)}</p>`:""}
          <div class="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
            <span class="text-[11px] text-gray-400 flex items-center gap-1">👁 <span class="tut-views-ft">${o(e.view_count)}</span> ครั้ง</span>
            <button class="tut-like-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150
              ${f?"bg-red-500 text-white shadow-sm":"bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500"}"
              data-liked="${f}" data-vid-id="${e.id}">
              ❤️ <span class="tut-likes">${o(e.like_count)}</span>
            </button>
          </div>
        </div>
      </div>`};let p=a[0].id;const y="tab-tut px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 text-white shadow-sm",v="tab-tut px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition",h=()=>{const e=a.find(u=>String(u.id)===String(p))??a[0];document.getElementById("tut-grid").innerHTML=`<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${e.items.map(t).join("")}</div>`,L()};i.innerHTML=`
      <!-- tabs -->
      <div class="flex gap-2 flex-wrap bg-gray-50 rounded-2xl p-2 mb-6 border border-gray-100">
        ${a.map(e=>`<button class="${e.id===p?y:v}" data-tab-id="${e.id}">${l(e.name)}</button>`).join("")}
      </div>
      <div id="tut-grid"></div>`,h(),i.querySelectorAll(".tab-tut").forEach(e=>{e.addEventListener("click",()=>{p=e.dataset.tabId,i.querySelectorAll(".tab-tut").forEach(u=>u.className=u.dataset.tabId===p?y:v),h()})})}catch(c){const d=document.getElementById("tutorial-body");d&&(d.innerHTML=`<p class="text-sm text-red-500 text-center py-8">โหลดไม่สำเร็จ: ${c.message}</p>`)}}async function J(){S(`<div class="animate-fade max-w-3xl mx-auto">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-800">📖 จัดการคู่มือการใช้งาน</h2>
        <p class="text-sm text-gray-400 mt-1">เพิ่ม แก้ไข จัดหมวดหมู่วิดีโอคู่มือ</p>
      </div>
    </div>
    <div id="ta-body" class="flex justify-center py-12 text-gray-300">
      <svg class="animate-spin h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
    </div>
  </div>`);const c=async()=>{var s,o;const[a,i]=await Promise.all([_(),E()]),m=document.getElementById("ta-body");m&&(m.innerHTML=`
    <!-- หมวดหมู่ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-700">📁 หมวดหมู่</h3>
        <button id="ta-add-cat" class="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg font-semibold hover:bg-indigo-700 transition">+ เพิ่มหมวด</button>
      </div>
      ${a.length?`<div class="space-y-2">${a.map(t=>`
        <div class="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-gray-50">
          <span class="text-lg">${l(t.icon)}</span>
          <span class="flex-1 text-sm font-medium text-gray-700">${l(t.name)}</span>
          <button class="ta-edit-cat text-xs text-indigo-500 hover:text-indigo-700 font-medium" data-id="${t.id}" data-name="${l(t.name)}" data-icon="${l(t.icon)}">แก้ไข</button>
          <button class="ta-del-cat text-xs text-red-400 hover:text-red-600" data-id="${t.id}">ลบ</button>
        </div>`).join("")}</div>`:'<p class="text-xs text-gray-400 text-center py-4">ยังไม่มีหมวดหมู่</p>'}
    </div>

    <!-- วิดีโอ -->
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-700">🎬 วิดีโอ (${i.length})</h3>
        <button id="ta-add-vid" class="px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-lg font-semibold hover:bg-emerald-700 transition">+ เพิ่มวิดีโอ</button>
      </div>
      ${i.length?`<div class="space-y-2">${i.map(t=>{const p=a.find(y=>y.id===t.category_id);return`<div class="flex items-start gap-3 p-3 rounded-xl border border-gray-100 hover:bg-gray-50">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              ${p?`<span class="text-[10px] px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full">${l(p.icon)} ${l(p.name)}</span>`:""}
              ${t.is_active?"":'<span class="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">ซ่อน</span>'}
              ${t.duration?`<span class="text-[10px] text-gray-400">${l(t.duration)}</span>`:""}
            </div>
            <p class="text-sm font-semibold text-gray-800 mt-1">${l(t.title)}</p>
            <p class="text-[11px] text-gray-400 truncate mt-0.5">${l(t.youtube_url)}</p>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <button class="ta-edit-vid text-xs text-indigo-500 hover:text-indigo-700 font-medium"
              data-id="${t.id}" data-title="${l(t.title)}" data-desc="${l(t.description??"")}"
              data-url="${l(t.youtube_url)}" data-dur="${l(t.duration??"")}"
              data-cat="${t.category_id??""}" data-active="${t.is_active}">แก้ไข</button>
            <button class="ta-del-vid text-xs text-red-400 hover:text-red-600" data-id="${t.id}">ลบ</button>
          </div>
        </div>`}).join("")}</div>`:'<p class="text-xs text-gray-400 text-center py-4">ยังไม่มีวิดีโอ</p>'}
    </div>`,(s=document.getElementById("ta-add-cat"))==null||s.addEventListener("click",()=>n()),(o=document.getElementById("ta-add-vid"))==null||o.addEventListener("click",()=>r(null,a)),document.querySelectorAll(".ta-edit-cat").forEach(t=>t.addEventListener("click",()=>n({id:Number(t.dataset.id),name:t.dataset.name,icon:t.dataset.icon}))),document.querySelectorAll(".ta-del-cat").forEach(t=>t.addEventListener("click",async()=>{confirm("ลบหมวดหมู่นี้?")&&(await I(Number(t.dataset.id)).catch(()=>{}),b("ลบแล้ว","success"),c())})),document.querySelectorAll(".ta-edit-vid").forEach(t=>t.addEventListener("click",()=>r({id:Number(t.dataset.id),title:t.dataset.title,description:t.dataset.desc,youtube_url:t.dataset.url,duration:t.dataset.dur,category_id:t.dataset.cat?Number(t.dataset.cat):null,is_active:t.dataset.active==="true"},a))),document.querySelectorAll(".ta-del-vid").forEach(t=>t.addEventListener("click",async()=>{confirm("ลบวิดีโอนี้?")&&(await N(Number(t.dataset.id)).catch(()=>{}),b("ลบแล้ว","success"),c())})))},d="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200",n=(a=null)=>{const i=document.createElement("div");i.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
      <h3 class="font-bold text-gray-800">${a?"แก้ไขหมวดหมู่":"เพิ่มหมวดหมู่"}</h3>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ไอคอน (emoji)</label>
        <input id="cat-icon" type="text" value="${l((a==null?void 0:a.icon)??"📁")}" class="${d}" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อหมวดหมู่ <span class="text-red-400">*</span></label>
        <input id="cat-name" type="text" value="${l((a==null?void 0:a.name)??"")}" placeholder="เช่น เริ่มต้นใช้งาน" class="${d}" />
      </div>
      <div class="flex gap-3 pt-2">
        <button id="cat-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="cat-save" class="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(i),i.querySelector("#cat-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#cat-save").addEventListener("click",async()=>{const m=i.querySelector("#cat-name").value.trim(),s=i.querySelector("#cat-icon").value.trim()||"📁";if(!m){b("กรุณาระบุชื่อ","warning");return}const o=i.querySelector("#cat-save");o.disabled=!0,o.textContent="กำลังบันทึก...";try{a?await A(a.id,{name:m,icon:s}):await z({name:m,icon:s}),i.remove(),b("บันทึกแล้ว ✅","success"),c()}catch(t){b("ผิดพลาด: "+t.message,"error"),o.disabled=!1,o.textContent="บันทึก"}})},r=(a=null,i=[])=>{const m=i.map(o=>`<option value="${o.id}" ${(a==null?void 0:a.category_id)===o.id?"selected":""}>${l(o.icon)} ${l(o.name)}</option>`).join(""),s=document.createElement("div");s.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",s.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col">
      <div class="px-6 pt-5 pb-4 border-b border-gray-100 flex-shrink-0">
        <h3 class="font-bold text-gray-800">${a?"แก้ไขวิดีโอ":"เพิ่มวิดีโอ"}</h3>
      </div>
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">หมวดหมู่</label>
          <select id="vid-cat" class="${d}">
            <option value="">— ไม่ระบุ —</option>${m}
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ชื่อวิดีโอ <span class="text-red-400">*</span></label>
          <input id="vid-title" type="text" value="${l((a==null?void 0:a.title)??"")}" placeholder="เช่น วิธีเช็คชื่อนักเรียน" class="${d}" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">คำอธิบาย</label>
          <textarea id="vid-desc" rows="2" class="${d} resize-none">${l((a==null?void 0:a.description)??"")}</textarea>
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">YouTube URL <span class="text-red-400">*</span></label>
          <input id="vid-url" type="url" value="${l((a==null?void 0:a.youtube_url)??"")}" placeholder="https://youtu.be/..." class="${d}" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">ความยาว (เช่น 1:45)</label>
          <input id="vid-dur" type="text" value="${l((a==null?void 0:a.duration)??"")}" placeholder="1:45" class="${d}" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1">แสดงปุ่มคู่มือในหน้า</label>
          <select id="vid-pagekey" class="${d}">
            <option value="">— ไม่ระบุ (แสดงในคู่มือทั่วไปเท่านั้น) —</option>
            ${P.map(o=>`<option value="${o.key}" ${(a==null?void 0:a.page_key)===o.key?"selected":""}>${o.label}</option>`).join("")}
          </select>
        </div>
        <div class="flex items-center gap-2">
          <input id="vid-active" type="checkbox" ${!a||a.is_active?"checked":""} class="rounded text-indigo-600" />
          <label class="text-sm text-gray-700">เผยแพร่ (ครูเห็น)</label>
        </div>
      </div>
      <div class="px-6 py-4 border-t border-gray-100 flex gap-3 flex-shrink-0">
        <button id="vid-cancel" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="vid-save" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(s),s.querySelector("#vid-cancel").addEventListener("click",()=>s.remove()),s.querySelector("#vid-save").addEventListener("click",async()=>{const o=s.querySelector("#vid-title").value.trim(),t=s.querySelector("#vid-url").value.trim(),p=s.querySelector("#vid-cat").value||null;if(!o||!t){b("กรุณากรอกชื่อและ URL","warning");return}const y={title:o,youtube_url:t,description:s.querySelector("#vid-desc").value.trim()||null,duration:s.querySelector("#vid-dur").value.trim()||null,category_id:p?Number(p):null,page_key:s.querySelector("#vid-pagekey").value||null,is_active:s.querySelector("#vid-active").checked},v=s.querySelector("#vid-save");v.disabled=!0,v.textContent="กำลังบันทึก...";try{a?await M(a.id,y):await B(y),s.remove(),b("บันทึกแล้ว ✅","success"),c()}catch(h){b("ผิดพลาด: "+h.message,"error"),v.disabled=!1,v.textContent="บันทึก"}})};c()}export{P as PAGE_KEYS,K as openPageTutorial,G as renderTutorial,J as renderTutorialAdmin};
