import{s as u}from"./supabase-BV-W2lsh.js";/* empty css             */import{a as d}from"./ui-Dh03k4iX.js";const q="pp5_sports_offline_queue_v1",c={events:"sports_events",competitions:"sports_competitions",registrations:"sports_registrations",matches:"sports_matches",totals:"sports_color_totals"};let s={loaded:!1,missingSchema:!1,missingMessage:"",event:null,groups:[],students:[],teachers:[],competitions:[],registrations:[],matches:[],totals:[],search:""};const n=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),v=e=>{if(!e)return"—";try{return new Date(e+"T00:00:00").toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"})}catch{return e}};function k(e){document.querySelectorAll("[data-nav]").forEach(t=>{t.classList.toggle("bg-indigo-800",t.dataset.nav===e),t.classList.toggle("text-white",t.dataset.nav===e),t.classList.toggle("text-indigo-200",t.dataset.nav!==e)})}function $(e){const t=document.getElementById("main-content")||document.getElementById("sports-root");t&&(t.innerHTML=e)}function Q(e){const t=`${(e==null?void 0:e.code)??""} ${(e==null?void 0:e.message)??""} ${(e==null?void 0:e.details)??""}`;return/PGRST20|does not exist|Could not find|schema cache|relation .* does not exist/i.test(t)}async function m(e,t){const{data:o,error:r}=await t;if(r){if(Q(r))return s.missingSchema=!0,s.missingMessage=`${e}: ${r.message}`,[];throw r}return o??[]}function b(){try{return JSON.parse(localStorage.getItem(q)||"[]")}catch{return[]}}function I(e){localStorage.setItem(q,JSON.stringify(e))}function N(e,t){const o=b();o.push({id:`${Date.now()}_${Math.random().toString(16).slice(2)}`,type:e,payload:t,created_at:new Date().toISOString()}),I(o)}async function A(){const[e,t,o]=await Promise.all([m("house_groups",u.from("house_groups").select("id, name, color_hex, gender, sort_order, teacher_id").order("gender").order("sort_order")),m("students",u.from("students").select("id, student_code, full_name, main_room, religion_room, gender, house_color, sports_shirt_size, image_url, is_active").eq("is_active",!0).order("student_code")),m("teachers",u.from("teachers").select("id, teacher_code, full_name, position, positions").order("full_name"))]);s.groups=e,s.students=t,s.teachers=o}async function B(){s.missingSchema=!1,s.missingMessage="";const e=await m(c.events,u.from(c.events).select("*").order("academic_year",{ascending:!1}).order("created_at",{ascending:!1}).limit(1));if(s.event=e[0]??null,!s.event){s.competitions=[],s.registrations=[],s.matches=[],s.totals=[];return}const t=s.event.id,[o,r,a,p]=await Promise.all([m(c.competitions,u.from(c.competitions).select("*, teachers:responsible_teacher_id(id, teacher_code, full_name)").eq("event_id",t).order("display_order").order("name")),m(c.registrations,u.from(c.registrations).select("*, students(id, student_code, full_name, main_room, gender, house_color, sports_shirt_size, image_url), sports_competitions(id, code, name, category)").eq("event_id",t).order("registered_at",{ascending:!1})),m(c.matches,u.from(c.matches).select("*, sports_competitions(id, code, name, category)").eq("event_id",t).order("scheduled_date",{ascending:!0}).order("scheduled_time",{ascending:!0})),m(c.totals,u.from(c.totals).select("*").eq("event_id",t))]);s.competitions=o,s.registrations=r,s.matches=a,s.totals=p}async function f(){s.loaded=!1,L(),await A(),await B(),s.loaded=!0,L()}function H(e){return s.groups.find(t=>t.name===e)}function T(){const e=new Map;return s.students.forEach(t=>{const o=t.house_color||"__none__";e.has(o)||e.set(o,[]),e.get(o).push(t)}),e}function S(e=""){return['<option value="">— เลือกสี —</option>',...s.groups.map(t=>`<option value="${n(t.name)}" ${t.name===e?"selected":""}>สี${n(t.name)}</option>`)].join("")}function z(e=""){return['<option value="">— ไม่ระบุ —</option>',...s.teachers.map(t=>`<option value="${t.id}" ${String(t.id)===String(e)?"selected":""}>${n(t.full_name)}${t.teacher_code?` (${n(t.teacher_code)})`:""}</option>`)].join("")}function E(e=""){return['<option value="">— เลือกรายการแข่งขัน —</option>',...s.competitions.map(t=>`<option value="${t.id}" ${String(t.id)===String(e)?"selected":""}>${n(t.name)}${t.code?` (${n(t.code)})`:""}</option>`)].join("")}function D(){const e=s.search.trim().toLowerCase();return['<option value="">— เลือกนักเรียน —</option>',...s.students.filter(o=>!e||[o.student_code,o.full_name,o.main_room,o.house_color].some(r=>String(r??"").toLowerCase().includes(e))).slice(0,60).map(o=>`<option value="${o.id}">${n(o.student_code)} · ${n(o.full_name)} · ${n(o.main_room||"—")} · สี${n(o.house_color||"—")}</option>`)].join("")}function F(){return s.missingSchema?`
    <div class="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
      <div class="font-bold mb-1">ยังไม่ได้ติดตั้งตารางกีฬาสีใน Supabase project เดิม</div>
      <p>ให้รันไฟล์ <code class="font-mono bg-white/70 px-1.5 py-0.5 rounded">patch_sports_module.sql</code> ใน Supabase SQL Editor ก่อนใช้งานบันทึกข้อมูลจริง</p>
      <p class="mt-1 text-xs text-amber-700">${n(s.missingMessage)}</p>
    </div>
  `:""}function G(){const e=T(),t=s.students.filter(p=>p.house_color).length,o=s.matches.filter(p=>p.status==="done").length,r=b().length;return`
    <div class="grid grid-cols-2 lg:grid-cols-7 gap-3">
      ${[["นักเรียนทั้งหมด",s.students.length,"คน","bg-indigo-50 text-indigo-700"],["ระบุสีแล้ว",t,"คน","bg-emerald-50 text-emerald-700"],["คณะสี",Math.max(e.size-(e.has("__none__")?1:0),s.groups.length),"สี","bg-fuchsia-50 text-fuchsia-700"],["รายการแข่งขัน",s.competitions.length,"รายการ","bg-sky-50 text-sky-700"],["ลงทะเบียนนักกีฬา",s.registrations.length,"รายการ","bg-orange-50 text-orange-700"],["แข่งเสร็จแล้ว",o,"แมตช์","bg-slate-100 text-slate-700"],["รอซิงก์",r,"รายการ",r?"bg-amber-50 text-amber-700":"bg-gray-50 text-gray-500"]].map(([p,x,h,i])=>`
        <div class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <p class="text-[11px] text-gray-400 font-semibold">${p}</p>
          <div class="mt-2 flex items-end gap-1">
            <span class="text-2xl font-bold ${i.split(" ")[1]}">${Number(x).toLocaleString()}</span>
            <span class="text-xs text-gray-400 mb-1">${h}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `}function J(){return!s.event&&!s.missingSchema?`
      <div class="rounded-2xl border border-indigo-100 bg-indigo-50 p-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p class="font-bold text-indigo-900">ยังไม่มีกิจกรรมกีฬาสี</p>
          <p class="text-xs text-indigo-600 mt-0.5">สร้างกิจกรรมปีปัจจุบันก่อน แล้วค่อยเพิ่มรายการแข่งขัน/ลงทะเบียน</p>
        </div>
        <button id="sports-create-event" class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">สร้างกิจกรรมกีฬาสีปีนี้</button>
      </div>
    `:s.event?`
    <div class="rounded-2xl border border-gray-100 bg-white p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
      <div>
        <p class="text-xs text-gray-400 font-semibold">กิจกรรมปัจจุบัน</p>
        <h3 class="text-lg font-bold text-gray-800">${n(s.event.name)}</h3>
        <p class="text-xs text-gray-500">ปีการศึกษา ${n(s.event.academic_year)} · ${v(s.event.start_date)} - ${v(s.event.end_date)} · สถานะ ${n(s.event.status)}</p>
      </div>
      <a href="sports.html" target="_blank" class="px-4 py-2 rounded-xl border border-indigo-200 text-indigo-700 text-sm font-semibold hover:bg-indigo-50 transition">เปิดหน้าเต็ม</a>
    </div>
  `:""}function R(){var r;const e=T(),t=s.groups.length?s.groups:[...e.keys()].filter(a=>a!=="__none__").map(a=>({name:a,color_hex:"#64748b",gender:""})),o=((r=e.get("__none__"))==null?void 0:r.length)??0;return`
    <section class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between gap-3 mb-3">
        <h3 class="font-bold text-gray-800">สรุปนักเรียนตามสี</h3>
        <button id="sports-print-roster" class="px-3 py-1.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50">พิมพ์รายชื่อสี</button>
      </div>
      <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
        ${t.map(a=>{var x;const p=((x=e.get(a.name))==null?void 0:x.length)??0;return`<div class="rounded-xl border border-gray-100 p-3" style="background:${a.color_hex||"#64748b"}12">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full border border-white shadow" style="background:${a.color_hex||"#64748b"}"></span>
              <span class="font-bold text-gray-800">สี${n(a.name)}</span>
              <span class="ml-auto text-xs text-gray-400">${n(a.gender||"")}</span>
            </div>
            <p class="mt-3 text-2xl font-bold" style="color:${a.color_hex||"#334155"}">${p.toLocaleString()}</p>
            <p class="text-xs text-gray-400">นักเรียน</p>
          </div>`}).join("")}
        ${o?`<div class="rounded-xl border border-amber-100 bg-amber-50 p-3">
          <div class="font-bold text-amber-700">ยังไม่มีสี</div>
          <p class="mt-3 text-2xl font-bold text-amber-600">${o.toLocaleString()}</p>
          <p class="text-xs text-amber-500">ควรจัดสีให้ครบก่อนวันงาน</p>
        </div>`:""}
      </div>
    </section>
  `}function U(){return`
    <div class="grid xl:grid-cols-3 gap-4">
      <form id="sports-competition-form" class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
        <h3 class="font-bold text-gray-800">เพิ่มรายการแข่งขัน</h3>
        <input name="name" required placeholder="ชื่อรายการ เช่น ฟุตบอล ม.ต้น" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <div class="grid grid-cols-2 gap-2">
          <input name="code" placeholder="รหัส เช่น SP001" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          <select name="category" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option value="sport">กีฬา</option>
            <option value="academic">วิชาการ/ทักษะ</option>
            <option value="parade">พาเหรด</option>
            <option value="page">สแตนด์/เพจ</option>
            <option value="other">อื่น ๆ</option>
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <select name="gender" class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
            <option value="">รวม</option>
            <option value="ชาย">ชาย</option>
            <option value="หญิง">หญิง</option>
          </select>
          <input name="max_athletes" type="number" min="0" placeholder="โควตา/สี" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <input name="venue" placeholder="สนาม/สถานที่" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <select name="responsible_teacher_id" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${z()}
        </select>
        <button class="w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">บันทึกรายการแข่งขัน</button>
      </form>

      <form id="sports-registration-form" class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
        <h3 class="font-bold text-gray-800">ลงทะเบียนนักกีฬา</h3>
        <select name="competition_id" required class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${E()}
        </select>
        <input id="sports-student-search" placeholder="ค้นหานักเรียนก่อนเลือก..." value="${n(s.search)}" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <select id="sports-student-select" name="student_id" required class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${D()}
        </select>
        <div class="grid grid-cols-2 gap-2">
          <input name="jersey_number" placeholder="เบอร์เสื้อ" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          <input name="note" placeholder="หมายเหตุ" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <button class="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition">บันทึกลงทะเบียน</button>
      </form>

      <form id="sports-match-form" class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
        <h3 class="font-bold text-gray-800">เพิ่มแมตช์แข่งขัน</h3>
        <select name="competition_id" required class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">
          ${E()}
        </select>
        <div class="grid grid-cols-2 gap-2">
          <select name="team_a_color" required class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">${S()}</select>
          <select name="team_b_color" required class="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-200">${S()}</select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <input name="scheduled_date" type="date" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          <input name="scheduled_time" type="time" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        </div>
        <input name="venue" placeholder="สนาม/สถานที่" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200" />
        <button class="w-full py-2.5 rounded-xl bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition">บันทึกแมตช์</button>
      </form>
    </div>
  `}function Y(){const e=s.competitions;return`
    <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div class="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <h3 class="font-bold text-gray-800">รายการแข่งขัน</h3>
        <span class="text-xs text-gray-400">${e.length.toLocaleString()} รายการ</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500">
            <tr><th class="px-4 py-3 text-left">รหัส</th><th class="px-4 py-3 text-left">รายการ</th><th class="px-4 py-3 text-left">ประเภท</th><th class="px-4 py-3 text-left">เพศ</th><th class="px-4 py-3 text-left">สถานที่</th><th class="px-4 py-3 text-left">ผู้รับผิดชอบ</th></tr>
          </thead>
          <tbody>
            ${e.length?e.map(t=>{var o;return`
              <tr class="border-t border-gray-50">
                <td class="px-4 py-3 font-mono text-xs text-gray-500">${n(t.code||"—")}</td>
                <td class="px-4 py-3 font-semibold text-gray-800">${n(t.name)}</td>
                <td class="px-4 py-3 text-gray-500">${n(t.category)}</td>
                <td class="px-4 py-3 text-gray-500">${n(t.gender||"รวม")}</td>
                <td class="px-4 py-3 text-gray-500">${n(t.venue||"—")}</td>
                <td class="px-4 py-3 text-gray-500">${n(((o=t.teachers)==null?void 0:o.full_name)||"—")}</td>
              </tr>
            `}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ยังไม่มีรายการแข่งขัน</td></tr>'}
          </tbody>
        </table>
      </div>
    </section>
  `}function Z(){const e=s.registrations.slice(0,80);return`
    <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div class="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <h3 class="font-bold text-gray-800">รายการลงทะเบียนล่าสุด</h3>
        <span class="text-xs text-gray-400">แสดง ${e.length.toLocaleString()} จาก ${s.registrations.length.toLocaleString()}</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500">
            <tr><th class="px-4 py-3 text-left">นักเรียน</th><th class="px-4 py-3 text-left">ห้อง</th><th class="px-4 py-3 text-left">สี</th><th class="px-4 py-3 text-left">รายการ</th><th class="px-4 py-3 text-left">เบอร์</th><th class="px-4 py-3 text-left">เวลา</th></tr>
          </thead>
          <tbody>
            ${e.length?e.map(t=>{var a;const o=t.students||{},r=H(o.house_color);return`<tr class="border-t border-gray-50">
                <td class="px-4 py-3">
                  <div class="font-semibold text-gray-800">${n(o.full_name||"—")}</div>
                  <div class="text-xs text-gray-400">${n(o.student_code||"")}</div>
                </td>
                <td class="px-4 py-3 text-gray-500">${n(o.main_room||"—")}</td>
                <td class="px-4 py-3">
                  <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold" style="background:${(r==null?void 0:r.color_hex)||"#64748b"}18;color:${(r==null?void 0:r.color_hex)||"#475569"}">
                    <span class="w-2 h-2 rounded-full" style="background:${(r==null?void 0:r.color_hex)||"#64748b"}"></span> สี${n(o.house_color||"—")}
                  </span>
                </td>
                <td class="px-4 py-3 text-gray-600">${n(((a=t.sports_competitions)==null?void 0:a.name)||"—")}</td>
                <td class="px-4 py-3 text-gray-500">${n(t.jersey_number||"—")}</td>
                <td class="px-4 py-3 text-xs text-gray-400">${n(t.registered_at?new Date(t.registered_at).toLocaleString("th-TH"):"—")}</td>
              </tr>`}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ยังไม่มีการลงทะเบียน</td></tr>'}
          </tbody>
        </table>
      </div>
    </section>
  `}function K(){const e=s.matches;return`
    <section class="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
      <div class="p-4 border-b border-gray-100 flex items-center justify-between gap-3">
        <h3 class="font-bold text-gray-800">ตารางแข่งขัน</h3>
        <span class="text-xs text-gray-400">${e.length.toLocaleString()} แมตช์</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50 text-xs text-gray-500">
            <tr><th class="px-4 py-3 text-left">วันเวลา</th><th class="px-4 py-3 text-left">รายการ</th><th class="px-4 py-3 text-left">คู่แข่ง</th><th class="px-4 py-3 text-left">ผล</th><th class="px-4 py-3 text-left">สถานะ</th><th class="px-4 py-3 text-left">สถานที่</th></tr>
          </thead>
          <tbody>
            ${e.length?e.map(t=>{var o;return`
              <tr class="border-t border-gray-50">
                <td class="px-4 py-3 text-gray-500">${v(t.scheduled_date)} ${n(t.scheduled_time?String(t.scheduled_time).slice(0,5):"")}</td>
                <td class="px-4 py-3 font-semibold text-gray-800">${n(((o=t.sports_competitions)==null?void 0:o.name)||"—")}</td>
                <td class="px-4 py-3 text-gray-600">สี${n(t.team_a_color||"—")} พบ สี${n(t.team_b_color||"—")}</td>
                <td class="px-4 py-3 font-mono text-gray-600">${n(t.score_a||"—")} : ${n(t.score_b||"—")}</td>
                <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${t.status==="done"?"bg-emerald-50 text-emerald-700":t.status==="live"?"bg-amber-50 text-amber-700":"bg-gray-100 text-gray-600"}">${n(t.status||"pending")}</span></td>
                <td class="px-4 py-3 text-gray-500">${n(t.venue||"—")}</td>
              </tr>
            `}).join(""):'<tr><td colspan="6" class="px-4 py-10 text-center text-gray-400">ยังไม่มีตารางแข่งขัน</td></tr>'}
          </tbody>
        </table>
      </div>
    </section>
  `}function V(){const e=b();return`
    <section class="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 class="font-bold text-gray-800">Offline Sync Queue</h3>
          <p class="text-xs text-gray-400 mt-0.5">ถ้าเน็ตหลุดระหว่างบันทึก ระบบจะเก็บงานไว้ในเครื่องนี้และกดซิงก์ภายหลังได้</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-400">ค้าง ${e.length.toLocaleString()} รายการ</span>
          <button id="sports-sync-queue" class="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-40" ${e.length?"":"disabled"}>ซิงก์ตอนนี้</button>
        </div>
      </div>
      ${e.length?`<div class="mt-3 space-y-2 text-xs text-gray-500">
        ${e.slice(0,8).map(t=>`<div class="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2 flex items-center justify-between"><span>${n(t.type)}</span><span>${n(new Date(t.created_at).toLocaleString("th-TH"))}</span></div>`).join("")}
      </div>`:""}
    </section>
  `}function L(){k("sports-admin");const e=document.getElementById("page-title");if(e&&(e.textContent="ระบบกีฬาสี"),!s.loaded&&!s.students.length){$('<div class="min-h-[50vh] flex items-center justify-center text-gray-400">กำลังโหลดระบบกีฬาสี...</div>');return}$(`
    <div class="max-w-7xl mx-auto space-y-5 animate-fade">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p class="text-xs font-bold text-indigo-500 uppercase tracking-wider">AZIZGAMES in PP5 Online</p>
          <h2 class="text-2xl font-bold text-gray-900">ระบบจัดการกีฬาสี</h2>
          <p class="text-sm text-gray-500 mt-1">ใช้ฐานนักเรียน/ครู/สีเดิมจาก PP5 Online ไม่สร้าง Supabase project เพิ่ม</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <button id="sports-refresh" class="px-4 py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">รีเฟรช</button>
          <a href="patch_sports_module.sql" target="_blank" class="px-4 py-2 rounded-xl border border-amber-200 text-sm font-semibold text-amber-700 hover:bg-amber-50 transition">ดู SQL patch</a>
        </div>
      </div>

      ${F()}
      ${J()}
      ${G()}
      ${R()}
      ${U()}
      ${Y()}
      ${Z()}
      ${K()}
      ${V()}
    </div>
  `),ee()}async function M(){const e=new Date().getFullYear()+543,t={name:`กีฬาสีอาซิซเกมส์ ${e}`,academic_year:e,status:"draft"},{error:o}=await u.from(c.events).insert(t);if(o)throw o}function y(e){return Object.fromEntries(new FormData(e).entries())}async function O(e){s.event||await M(),await B();const t={event_id:s.event.id,code:e.code||null,name:e.name,category:e.category||"sport",gender:e.gender||null,max_athletes:e.max_athletes?Number(e.max_athletes):null,venue:e.venue||null,responsible_teacher_id:e.responsible_teacher_id?Number(e.responsible_teacher_id):null,is_active:!0},{error:o}=await u.from(c.competitions).insert(t);if(o)throw o}async function P(e){const t=s.students.find(a=>String(a.id)===String(e.student_id));if(!t)throw new Error("ไม่พบนักเรียน");const o={event_id:s.event.id,competition_id:Number(e.competition_id),student_id:Number(e.student_id),team_color:t.house_color||null,jersey_number:e.jersey_number||null,note:e.note||null},{error:r}=await u.from(c.registrations).insert(o);if(r)throw r}async function C(e){const t={event_id:s.event.id,competition_id:Number(e.competition_id),team_a_color:e.team_a_color,team_b_color:e.team_b_color,scheduled_date:e.scheduled_date||null,scheduled_time:e.scheduled_time||null,venue:e.venue||null,status:"pending"},{error:o}=await u.from(c.matches).insert(t);if(o)throw o}async function _(e,t,o){try{await o(t),d("บันทึกสำเร็จ","success")}catch(r){if(!navigator.onLine||/fetch|network|Failed to fetch/i.test((r==null?void 0:r.message)??""))N(e,t),d("เน็ตไม่พร้อม บันทึกไว้รอซิงก์แล้ว","warning");else throw d("บันทึกไม่สำเร็จ: "+(r.message??""),"error"),r}}async function W(e){if(e.type==="competition")return O(e.payload);if(e.type==="registration")return P(e.payload);if(e.type==="match")return C(e.payload)}async function X(){const e=b();if(!e.length)return;const t=[];for(const o of e)try{await W(o)}catch{t.push(o)}I(t),d(t.length?`ซิงก์สำเร็จบางส่วน ค้าง ${t.length} รายการ`:"ซิงก์ข้อมูลค้างสำเร็จทั้งหมด",t.length?"warning":"success"),await f()}function ee(){var t,o,r,a,p,x,h;(t=document.getElementById("sports-refresh"))==null||t.addEventListener("click",()=>f()),(o=document.getElementById("sports-create-event"))==null||o.addEventListener("click",async()=>{try{await M(),d("สร้างกิจกรรมแล้ว","success"),await f()}catch(i){d("สร้างกิจกรรมไม่สำเร็จ: "+(i.message??""),"error")}}),(r=document.getElementById("sports-print-roster"))==null||r.addEventListener("click",()=>window.print()),(a=document.getElementById("sports-sync-queue"))==null||a.addEventListener("click",X);const e=document.getElementById("sports-student-search");e==null||e.addEventListener("input",()=>{s.search=e.value;const i=document.getElementById("sports-student-select");i&&(i.innerHTML=D())}),(p=document.getElementById("sports-competition-form"))==null||p.addEventListener("submit",async i=>{var w;if(i.preventDefault(),s.missingSchema){d("กรุณารัน patch_sports_module.sql ก่อน","warning");return}const g=i.currentTarget,l=y(g);if(!((w=l.name)!=null&&w.trim())){d("กรุณากรอกชื่อรายการ","warning");return}try{await _("competition",l,O),g.reset(),await f()}catch{}}),(x=document.getElementById("sports-registration-form"))==null||x.addEventListener("submit",async i=>{if(i.preventDefault(),s.missingSchema){d("กรุณารัน patch_sports_module.sql ก่อน","warning");return}if(!s.event){d("กรุณาสร้างกิจกรรมก่อน","warning");return}const g=i.currentTarget,l=y(g);if(!l.competition_id||!l.student_id){d("กรุณาเลือกรายการและนักเรียน","warning");return}try{await _("registration",l,P),g.reset(),s.search="",await f()}catch{}}),(h=document.getElementById("sports-match-form"))==null||h.addEventListener("submit",async i=>{if(i.preventDefault(),s.missingSchema){d("กรุณารัน patch_sports_module.sql ก่อน","warning");return}if(!s.event){d("กรุณาสร้างกิจกรรมก่อน","warning");return}const g=i.currentTarget,l=y(g);if(!l.competition_id||!l.team_a_color||!l.team_b_color){d("กรุณากรอกคู่แข่งขันให้ครบ","warning");return}if(l.team_a_color===l.team_b_color){d("สีคู่แข่งต้องไม่ซ้ำกัน","warning");return}try{await _("match",l,C),g.reset(),await f()}catch{}})}async function j(){k("sports-admin"),await f()}async function te(){var t;const{data:{session:e}}=await u.auth.getSession();if(!e){window.location.replace("index.html");return}await j(),(t=document.getElementById("sports-page-refresh"))==null||t.addEventListener("click",()=>j())}te();
