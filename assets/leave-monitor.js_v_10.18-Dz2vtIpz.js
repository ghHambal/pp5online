import{getLeavePermissionDashboard as W,closeLeavePermission as le}from"./api-1xsyVspL.js";import{f as de}from"./leave-time-CrS9gT63.js";import{a as P}from"./ui-Dh03k4iX.js";const u=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function ne(e,t=new Date){if(e.status!=="active")return!1;const s=new Date(e.created_at);return new Date(s.getTime()+Number(e.allowed_duration||0)*60*1e3).getTime()<t.getTime()}function f(e,t=new Date){return e.status==="returned"?"returned":e.status==="overdue"||ne(e,t)?"overdue":"active"}function z(e,t=new Date){return e.status!=="active"?e.status==="returned"?"กลับแล้ว":"เลยเวลา":de(e.created_at,e.allowed_duration,t).text}function K(e,t=new Date){const s=f(e,t);return s==="active"?'<span class="px-2 py-1 rounded-lg bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">อยู่นอกห้อง</span>':s==="overdue"?'<span class="px-2 py-1 rounded-lg bg-red-50 text-red-700 text-xs font-bold border border-red-100">เกินเวลา</span>':'<span class="px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">กลับแล้ว</span>'}function U(e){return String(e||"").trim().toLowerCase()}function O(){const e=new Date;return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e.toISOString().slice(0,10)}function X(e){const t=e instanceof Date?new Date(e):new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().slice(0,10)}function Y(e,t){const[s,i,r]=String(e||O()).split("-").map(Number),c=new Date(s,(i||1)-1,r||1);return c.setDate(c.getDate()+t),X(c)}function G(e,t){var c,d;if(!t||t.mode==="all")return!0;const s=new Set((t.classIds||[]).map(x=>String(x))),i=new Set((t.roomNames||[]).map(U).filter(Boolean));return s.has(String(e.class_id))?!0:[(c=e.classes)==null?void 0:c.class_name,(d=e.students)==null?void 0:d.main_room].map(U).filter(Boolean).some(x=>i.has(x))}function J(e,t=new Date){const s=f(e,t);return s==="active"?"text-amber-700":s==="overdue"?"text-red-600":"text-gray-400"}function oe(e){var c,d,x,_,g;const t=(c=e.students)==null?void 0:c.image_url,s=((d=e.students)==null?void 0:d.full_name)||"—",i=((x=e.students)==null?void 0:x.student_code)||"",r=((_=e.classes)==null?void 0:_.class_name)||((g=e.students)==null?void 0:g.main_room)||"—";return`
    <div class="flex items-center gap-3 min-w-[250px]">
      <div class="w-11 h-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-100 flex-shrink-0 shadow-sm">
        ${t?`<img src="${u(t)}" class="w-full h-full object-cover" />`:'<div class="w-full h-full flex items-center justify-center text-lg text-gray-400 bg-gray-100">👤</div>'}
      </div>
      <div class="min-w-0">
        <p class="font-bold text-gray-800 text-sm truncate">${u(s)}</p>
        <p class="text-xs text-gray-400 font-mono truncate">${u(i)} · ${u(r)}</p>
      </div>
    </div>
  `}function ie(e){var i,r,c;const t=((i=e.teachers)==null?void 0:i.full_name)||"—",s=((c=(r=e.classes)==null?void 0:r.master_subjects)==null?void 0:c.subject_name)||"—";return`
    <div class="min-w-[190px]">
      <p class="font-bold text-gray-700 text-sm truncate">${u(t)}</p>
      <p class="text-xs text-gray-400 truncate">${u(s)}</p>
    </div>
  `}function H(e,t,s=i=>i||"ไม่ระบุ"){const i=new Map;return e.forEach(r=>{const c=t(r)||"ไม่ระบุ",d=i.get(c)||{key:c,label:s(c),total:0,overdue:0,returned:0,active:0};d.total+=1;const x=f(r);x==="overdue"?d.overdue+=1:x==="returned"?d.returned+=1:d.active+=1,i.set(c,d)}),Array.from(i.values()).sort((r,c)=>c.total-r.total)}function ce(e,t,s){const i=Array.from({length:s},(a,o)=>Y(t,o-s+1)),r=Object.fromEntries(i.map(a=>[a,{key:a,total:0,overdue:0,returned:0,active:0}]));e.forEach(a=>{const o=X(a.created_at);if(!r[o])return;r[o].total+=1;const y=f(a);y==="overdue"?r[o].overdue+=1:y==="returned"?r[o].returned+=1:r[o].active+=1});const c=i.map(a=>r[a]),d=Array.from({length:14},(a,o)=>({key:`${o+6}:00`,hour:o+6,total:0,overdue:0}));e.forEach(a=>{const o=new Date(a.created_at).getHours(),y=d.find(b=>b.hour===o);y&&(y.total+=1,f(a)==="overdue"&&(y.overdue+=1))});const x=e.length,_=e.filter(a=>f(a)==="overdue").length,g=e.filter(a=>f(a)==="returned").length,T=e.filter(a=>f(a)==="active").length,D=Math.floor(c.length/2),L=c.slice(0,D).reduce((a,o)=>a+o.total,0),p=c.slice(D).reduce((a,o)=>a+o.total,0)-L;return{total:x,active:T,overdue:_,returned:g,returnRate:x?Math.round(g/x*100):0,overdueRate:x?Math.round(_/x*100):0,dailyAverage:s?(x/s).toFixed(1):"0.0",trendDelta:p,byDay:c,byHour:d,topReasons:H(e,a=>a.reason||"ไม่ระบุ").slice(0,6),topRooms:H(e,a=>{var o,y;return((o=a.classes)==null?void 0:o.class_name)||((y=a.students)==null?void 0:y.main_room)||"ไม่ระบุ"}).slice(0,6),riskyStudents:H(e,a=>a.student_id,a=>{var y;const o=e.find(b=>String(b.student_id)===String(a));return((y=o==null?void 0:o.students)==null?void 0:y.full_name)||`รหัส ${a}`}).filter(a=>a.total>=2||a.overdue>0).slice(0,8),peakHour:d.reduce((a,o)=>o.total>a.total?o:a,d[0]||{key:"—",total:0})}}function k(e,t,s,i=""){const r={amber:"bg-amber-50 border-amber-100 text-amber-700",red:"bg-red-50 border-red-100 text-red-700",emerald:"bg-emerald-50 border-emerald-100 text-emerald-700",indigo:"bg-indigo-50 border-indigo-100 text-indigo-700",slate:"bg-slate-50 border-slate-100 text-slate-700"};return`
    <div class="rounded-xl border px-3 py-2 ${r[s]||r.slate}">
      <p class="text-[10px] font-bold opacity-75">${u(e)}</p>
      <p class="text-xl font-extrabold">${u(t)}</p>
      ${i?`<p class="text-[10px] opacity-70 mt-0.5">${u(i)}</p>`:""}
    </div>
  `}function ue(e){const t=Math.max(1,...e.map(d=>d.total)),s=560,i=170,r=e.length>1?s/(e.length-1):s,c=e.map((d,x)=>{const _=Math.round(x*r),g=Math.round(i-d.total/t*(i-24)-12);return`${_},${g}`}).join(" ");return`
    <div class="rounded-xl border border-gray-100 bg-white p-3">
      <div class="flex items-center justify-between mb-2">
        <p class="text-xs font-bold text-gray-700">แนวโน้มจำนวนการออกนอกห้อง</p>
        <p class="text-[10px] text-gray-400">สูงสุด ${t} ครั้ง/วัน</p>
      </div>
      <svg viewBox="0 0 ${s} ${i}" class="w-full h-44" preserveAspectRatio="none">
        <polyline points="${c}" fill="none" stroke="#4f46e5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
        ${e.map((d,x)=>{const[_,g]=c.split(" ")[x].split(",");return`<circle cx="${_}" cy="${g}" r="4" fill="#4f46e5"><title>${u(d.key)}: ${d.total}</title></circle>`}).join("")}
      </svg>
      <div class="grid gap-1 text-[10px] text-gray-400" style="grid-template-columns: repeat(${Math.min(e.length,14)}, minmax(0, 1fr));">
        ${e.map(d=>`<span class="truncate">${u(d.key.slice(5))}</span>`).join("")}
      </div>
    </div>
  `}function Q(e,t="bg-indigo-500",s="ยังไม่มีข้อมูล"){const i=Math.max(1,...e.map(r=>r.total));return e.length?`
    <div class="space-y-2">
      ${e.map(r=>`
        <div>
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="font-semibold text-gray-700 truncate pr-3">${u(r.label||r.key)}</span>
            <span class="text-gray-400 font-mono">${r.total}</span>
          </div>
          <div class="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div class="h-full ${t}" style="width:${Math.max(4,Math.round(r.total/i*100))}%"></div>
          </div>
        </div>
      `).join("")}
    </div>
  `:`<div class="text-sm text-gray-400 py-8 text-center">${u(s)}</div>`}function xe(e){const t=Math.max(1,...e.map(s=>s.total));return`
    <div class="rounded-xl border border-gray-100 bg-white p-3">
      <p class="text-xs font-bold text-gray-700 mb-3">ช่วงเวลาที่ออกบ่อย</p>
      <div class="flex items-end gap-1 h-36">
        ${e.map(s=>`
          <div class="flex-1 min-w-0 flex flex-col items-center gap-1">
            <div class="w-full rounded-t bg-amber-400" style="height:${Math.max(4,Math.round(s.total/t*110))}px" title="${u(s.key)} ${s.total} ครั้ง"></div>
            <span class="text-[9px] text-gray-400 truncate">${s.hour}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}async function E(e,t={}){if(!e)return;e._leaveMonitorTimer&&(clearInterval(e._leaveMonitorTimer),e._leaveMonitorTimer=null),e._leaveMonitorRefreshTimer&&(clearInterval(e._leaveMonitorRefreshTimer),e._leaveMonitorRefreshTimer=null);const s=t.title||"🚪 ติดตามใบอนุญาตออกนอกห้อง",i=t.subtitle||"ข้อมูลรายวัน",r=t.date||O(),c=t.limit??null,d=Math.max(7,Math.min(30,parseInt(t.analyticsDays,10)||14)),x=Y(r,-d+1),_=t.teacherId||null,g=t.scope||null,T=!!t.readOnly,D=!!t.publicMode,L=t.externalUrl||"",C=Math.max(0,parseInt(t.refreshMs,10)||0);let p=t.initialFilter||"all",a=t.initialView||"list";e.innerHTML=`
    <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
      <div class="px-5 py-8 text-center text-sm text-gray-400">กำลังโหลดข้อมูลใบอนุญาต...</div>
    </div>
  `;try{const[{rows:o},{rows:y}]=await Promise.all([W({date:r,limit:c,teacherId:_,publicMode:D}),W({startDate:x,endDate:r,teacherId:_,publicMode:D})]),b=(o||[]).filter(n=>G(n,g)),Z=(y||[]).filter(n=>G(n,g)),m=ce(Z,r,d),A=b.filter(n=>n.status==="returned"),ee=n=>p==="active"?b.filter(v=>f(v,n)==="active"):p==="overdue"?b.filter(v=>f(v,n)==="overdue"):p==="returnedToday"?A:b,B=n=>({active:b.filter(v=>f(v,n)==="active").length,overdue:b.filter(v=>f(v,n)==="overdue").length,returnedToday:A.length,totalWeek:b.length}),q=(n,v)=>p==="active"?f(n,v)==="active":p==="overdue"?f(n,v)==="overdue":p==="returnedToday"?A.some(h=>String(h.id)===String(n.id)):!0,j="leave-monitor-filter rounded-xl border px-3 py-2 text-left transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-200",te=n=>{const v=f(n);return T?'<span class="text-[10px] text-gray-400 font-bold">ดูอย่างเดียว</span>':v==="returned"?'<span class="text-[10px] text-emerald-600 font-bold">ปิดรายการแล้ว</span>':n.status==="overdue"?'<span class="text-[10px] text-red-500 font-bold">บันทึกไม่กลับแล้ว</span>':`
        <div class="flex flex-col gap-1 min-w-[110px]">
          <button type="button" data-leave-action="returned" data-leave-action-id="${u(n.id)}"
            class="px-2 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold">
            กลับแล้ว
          </button>
          <button type="button" data-leave-action="overdue" data-leave-action-id="${u(n.id)}"
            class="px-2 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-[10px] font-bold border border-red-100">
            ไม่กลับ
          </button>
        </div>
      `},ae=()=>{const n=m.trendDelta<=0?"emerald":"red",v=m.trendDelta===0?"ทรงตัว":m.trendDelta>0?`เพิ่ม ${m.trendDelta}`:`ลด ${Math.abs(m.trendDelta)}`;return`
        <div class="p-4 space-y-4">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
            ${k("รวมช่วงที่เลือก",m.total,"indigo",`${d} วันล่าสุด`)}
            ${k("เฉลี่ยต่อวัน",m.dailyAverage,"amber","ครั้ง/วัน")}
            ${k("กลับแล้ว",`${m.returnRate}%`,"emerald",`${m.returned} รายการ`)}
            ${k("เกินเวลา/ไม่กลับ",`${m.overdueRate}%`,"red",`${m.overdue} รายการ`)}
            ${k("แนวโน้ม",v,n,"เทียบครึ่งแรก")}
          </div>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div class="xl:col-span-2">${ue(m.byDay)}</div>
            ${xe(m.byHour)}
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="rounded-xl border border-gray-100 bg-white p-4">
              <p class="text-xs font-bold text-gray-700 mb-3">เหตุผลที่ใช้บ่อย</p>
              ${Q(m.topReasons,"bg-amber-500")}
            </div>
            <div class="rounded-xl border border-gray-100 bg-white p-4">
              <p class="text-xs font-bold text-gray-700 mb-3">ห้อง/กลุ่มที่ออกบ่อย</p>
              ${Q(m.topRooms,"bg-indigo-500")}
            </div>
            <div class="rounded-xl border border-gray-100 bg-white p-4">
              <p class="text-xs font-bold text-gray-700 mb-3">นักเรียนที่ควรติดตาม</p>
              ${m.riskyStudents.length?`
                <div class="space-y-2">
                  ${m.riskyStudents.map(h=>`
                    <div class="rounded-lg border border-gray-100 px-3 py-2">
                      <div class="flex justify-between gap-2">
                        <span class="text-xs font-bold text-gray-700 truncate">${u(h.label)}</span>
                        <span class="text-[10px] text-gray-400 font-mono">${h.total} ครั้ง</span>
                      </div>
                      <div class="text-[10px] text-red-500 mt-1">เกินเวลา/ไม่กลับ ${h.overdue} ครั้ง</div>
                    </div>
                  `).join("")}
                </div>
              `:'<div class="text-sm text-gray-400 py-8 text-center">ยังไม่พบนักเรียนกลุ่มเสี่ยง</div>'}
            </div>
          </div>
          <div class="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
            <span class="font-bold">เป้าหมายระบบ:</span>
            ลดจำนวนการออกนอกห้องเวลาเรียน โดยดูแนวโน้มรวม ช่วงเวลาที่ออกบ่อย เหตุผลซ้ำ และนักเรียนที่มีประวัติเกินเวลา/ไม่กลับเข้าห้อง
          </div>
        </div>
      `},F=()=>{var S,R;const n=new Date,v=ee(n),h=B(n);e.innerHTML=`
        <div class="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden">
          <div class="px-5 py-3.5 border-b border-amber-100 bg-amber-50 flex items-center justify-between gap-3">
            <div>
              <h4 class="font-bold text-amber-900 text-sm">${u(s)}</h4>
              <p class="text-xs text-amber-700/70 mt-0.5">${u(i)}</p>
              ${g!=null&&g.label?`<p class="text-[11px] text-amber-800/70 mt-1">${u(g.label)}</p>`:""}
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2">
              ${L?`
                <a href="${u(L)}" target="_blank"
                  class="inline-flex items-center justify-center px-3 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition">
                  เปิดจอแยก
                </a>
              `:""}
              <input type="date" data-leave-date value="${u(r)}"
                class="text-xs font-bold text-amber-800 bg-white border border-amber-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200" />
              <select data-leave-range
                class="text-xs font-bold text-amber-800 bg-white border border-amber-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200">
                <option value="7" ${d===7?"selected":""}>7 วัน</option>
                <option value="14" ${d===14?"selected":""}>14 วัน</option>
                <option value="30" ${d===30?"selected":""}>30 วัน</option>
              </select>
              <span data-leave-show-count class="text-xs text-amber-700 font-bold whitespace-nowrap">แสดง ${v.length}/${b.length} รายการ</span>
            </div>
          </div>
          <div class="px-4 pt-3 bg-white border-b border-gray-50">
            <div class="inline-flex rounded-xl bg-gray-100 p-1 text-xs font-bold">
              <button type="button" data-leave-view="list"
                class="px-3 py-1.5 rounded-lg ${a==="list"?"bg-white text-amber-700 shadow-sm":"text-gray-500 hover:text-gray-700"}">
                รายการติดตาม
              </button>
              <button type="button" data-leave-view="dashboard"
                class="px-3 py-1.5 rounded-lg ${a==="dashboard"?"bg-white text-indigo-700 shadow-sm":"text-gray-500 hover:text-gray-700"}">
                แดชบอร์ดแนวโน้ม
              </button>
            </div>
          </div>
          <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-gray-50">
            <button type="button" data-filter="active" class="${j} ${p==="active"?"bg-amber-100 border-amber-300":"bg-amber-50 border-amber-100"}">
              <p class="text-[10px] font-bold text-amber-700/70">กำลังอยู่นอกห้อง</p>
              <p data-leave-summary="active" class="text-xl font-extrabold text-amber-700">${h.active}</p>
            </button>
            <button type="button" data-filter="overdue" class="${j} ${p==="overdue"?"bg-red-100 border-red-300":"bg-red-50 border-red-100"}">
              <p class="text-[10px] font-bold text-red-700/70">เลยเวลา</p>
              <p data-leave-summary="overdue" class="text-xl font-extrabold text-red-700">${h.overdue}</p>
            </button>
            <button type="button" data-filter="returnedToday" class="${j} ${p==="returnedToday"?"bg-emerald-100 border-emerald-300":"bg-emerald-50 border-emerald-100"}">
              <p class="text-[10px] font-bold text-emerald-700/70">กลับแล้ว</p>
              <p data-leave-summary="returnedToday" class="text-xl font-extrabold text-emerald-700">${h.returnedToday}</p>
            </button>
            <button type="button" data-filter="all" class="${j} ${p==="all"?"bg-indigo-100 border-indigo-300":"bg-indigo-50 border-indigo-100"}">
              <p class="text-[10px] font-bold text-indigo-700/70">รวมวันที่เลือก</p>
              <p data-leave-summary="totalWeek" class="text-xl font-extrabold text-indigo-700">${h.totalWeek}</p>
            </button>
          </div>
          ${a==="dashboard"?ae():`
          <div class="overflow-x-auto">
            ${b.length?`
              <table class="w-full text-xs min-w-[1040px]">
                <thead class="bg-gray-50 text-gray-500 border-b border-gray-100">
                  <tr>
                    <th class="px-4 py-3 text-left">สถานะ</th>
                    <th class="px-4 py-3 text-left">ข้อมูลนักเรียน</th>
                    <th class="px-4 py-3 text-left">ครูผู้สอน</th>
                    <th class="px-4 py-3 text-left">เหตุผล</th>
                    <th class="px-4 py-3 text-left">เวลา</th>
                    ${T?"":'<th class="px-4 py-3 text-left">จัดการ</th>'}
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  ${b.map(l=>`
                    <tr data-leave-row data-leave-id="${u(l.id)}" class="hover:bg-gray-50 ${q(l,n)?"":"hidden"}">
                      <td data-leave-status class="px-4 py-2">${K(l,n)}</td>
                      <td class="px-4 py-2">${oe(l)}</td>
                      <td class="px-4 py-2">${ie(l)}</td>
                      <td class="px-4 py-2 text-gray-600">${u(l.reason||"—")}</td>
                      <td class="px-4 py-2 text-gray-600">
                        <div>${new Date(l.created_at).toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})} น. · ${Number(l.allowed_duration||0)} นาที</div>
                        <div data-leave-time class="font-semibold ${J(l,n)}">${z(l,n)}</div>
                      </td>
                      ${T?"":`<td class="px-4 py-2">${te(l)}</td>`}
                    </tr>
                  `).join("")}
                </tbody>
              </table>
              <div data-leave-empty class="px-5 py-8 text-center text-sm text-gray-400 ${v.length?"hidden":""}">ไม่พบข้อมูลตามตัวกรองนี้</div>
            `:'<div class="px-5 py-8 text-center text-sm text-gray-400">ไม่พบข้อมูลตามตัวกรองนี้</div>'}
          </div>
          `}
        </div>
      `,e.querySelectorAll("[data-leave-view]").forEach(l=>{l.addEventListener("click",()=>{a=l.dataset.leaveView||"list",F()})}),e.querySelectorAll(".leave-monitor-filter").forEach(l=>{l.addEventListener("click",()=>{p=l.dataset.filter||"all",a="list",F()})}),(S=e.querySelector("[data-leave-date]"))==null||S.addEventListener("change",l=>{const $=l.target.value||O();E(e,{...t,date:$,initialFilter:p,initialView:a,analyticsDays:d})}),(R=e.querySelector("[data-leave-range]"))==null||R.addEventListener("change",l=>{const $=parseInt(l.target.value,10)||d;E(e,{...t,date:r,initialFilter:p,initialView:a,analyticsDays:$})}),T||e.querySelectorAll("[data-leave-action]").forEach(l=>{l.addEventListener("click",async()=>{var V;const $=l.dataset.leaveActionId,w=l.dataset.leaveAction,M=b.find(I=>String(I.id)===String($)),N=((V=M==null?void 0:M.students)==null?void 0:V.full_name)||"นักเรียน",se=w==="returned"?`ยืนยันบันทึกว่า "${N}" กลับเข้าห้องแล้ว?`:`ยืนยันบันทึกว่า "${N}" ไม่กลับเข้าห้อง? ระบบจะเก็บเป็นประวัติการเกินเวลา`;if(window.confirm(se)){l.disabled=!0;try{await le($,w),P(w==="returned"?"บันทึกกลับเข้าห้องแล้ว":"บันทึกประวัติไม่กลับเข้าห้องแล้ว","success"),E(e,{...t,date:r,initialFilter:p,initialView:a,analyticsDays:d})}catch(I){l.disabled=!1,P(`บันทึกไม่สำเร็จ: ${I.message||I}`,"error")}}})})},re=()=>{const n=new Date,v=B(n),h=b.filter(l=>q(l,n)).length,S=e.querySelector("[data-leave-show-count]");S&&(S.textContent=`แสดง ${h}/${b.length} รายการ`),Object.entries(v).forEach(([l,$])=>{const w=e.querySelector(`[data-leave-summary="${l}"]`);w&&(w.textContent=$)}),b.forEach(l=>{const $=e.querySelector(`[data-leave-id="${String(l.id).replace(/"/g,'\\"')}"]`);if(!$)return;$.classList.toggle("hidden",!q(l,n));const w=$.querySelector("[data-leave-status]");w&&(w.innerHTML=K(l,n));const M=$.querySelector("[data-leave-time]");M&&(M.textContent=z(l,n),M.className=`font-semibold ${J(l,n)}`)});const R=e.querySelector("[data-leave-empty]");R&&R.classList.toggle("hidden",h>0)};F(),C>0&&(e._leaveMonitorRefreshTimer=setInterval(()=>{if(!document.body.contains(e)){clearInterval(e._leaveMonitorRefreshTimer),e._leaveMonitorRefreshTimer=null;return}E(e,{...t,date:r,initialFilter:p,initialView:a,analyticsDays:d})},C)),e._leaveMonitorTimer=setInterval(()=>{if(!document.body.contains(e)){clearInterval(e._leaveMonitorTimer),e._leaveMonitorTimer=null,e._leaveMonitorRefreshTimer&&(clearInterval(e._leaveMonitorRefreshTimer),e._leaveMonitorRefreshTimer=null);return}re()},1e3)}catch(o){e.innerHTML=`
      <div class="bg-white rounded-2xl border border-red-100 p-5 text-sm text-red-500">
        โหลดข้อมูลใบอนุญาตออกนอกห้องไม่สำเร็จ: ${u(o.message||o)}
      </div>
    `}}export{E as r};
