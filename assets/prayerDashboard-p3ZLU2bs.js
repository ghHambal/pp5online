import{s as G}from"./supabase-BV-W2lsh.js";const T=1e3,q=14,B=31,J=3e4,C=document.getElementById("prayer-dashboard-root");let n={days:q,endDate:D(),location:"",roomGroup:"",rows:[],students:[],loading:!1,updatedAt:null};const i=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");function D(){const t=new Date;return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().slice(0,10)}function Q(t){const a=t instanceof Date?new Date(t):new Date(t);return a.setMinutes(a.getMinutes()-a.getTimezoneOffset()),a.toISOString().slice(0,10)}function z(t,a){const[o,s,l]=String(t||D()).split("-").map(Number),r=new Date(o,(s||1)-1,l||1);return r.setDate(r.getDate()+a),Q(r)}function O(t){const a=parseInt(t,10);return Number.isFinite(a)?Math.max(7,Math.min(B,a)):q}function P(t){return{musolla_male:"มูซอลลาชาย",masjid_kuwait:"มัสยิดคูเวต",musolla_female_1:"มูซอลลาหญิง 1",musolla_female_2:"มูซอลลาหญิง 2"}[t]||"ไม่ระบุจุด"}function tt(t){return{musolla_male:"bg-blue-50 text-blue-700 border-blue-100",masjid_kuwait:"bg-violet-50 text-violet-700 border-violet-100",musolla_female_1:"bg-pink-50 text-pink-700 border-pink-100",musolla_female_2:"bg-amber-50 text-amber-700 border-amber-100"}[t]||"bg-slate-50 text-slate-600 border-slate-100"}function H(t=""){const a=String(t||"").trim();if(a.startsWith("ปวช."))return"ปวช.";const o=a.match(/^ม\.\d/);return o?o[0]:"ไม่ระบุ"}function et(t){const a=new Map;return t.forEach(o=>{if(!o.student_id)return;const s=a.get(o.student_id);(!s||String(o.created_at||"")>String(s.created_at||""))&&a.set(o.student_id,o)}),Array.from(a.values())}async function U(t,a,o=s=>s){const s=[];for(let l=0;;l+=T){let r=G.from(t).select(a);r=o(r);const{data:c,error:f}=await r.range(l,l+T-1);if(f)throw f;if(s.push(...c??[]),!c||c.length<T)break}return s}async function v(){if(!n.loading){n.loading=!0,_();try{const t=z(n.endDate,-(n.days-1)),a=await at(t,n.endDate);n.students=a.students,n.rows=a.records,n.updatedAt=new Date}catch(t){console.error("Load prayer dashboard failed:",t),C.innerHTML=`
      <div class="bg-white border border-red-100 rounded-2xl p-6 text-red-600 text-sm">
        โหลดแดชบอร์ดละหมาดไม่สำเร็จ: ${i((t==null?void 0:t.message)||t)}
      </div>
    `}finally{n.loading=!1,_()}}}async function at(t,a){const{data:o,error:s}=await G.rpc("get_public_prayer_dashboard_snapshot",{p_start_date:t,p_end_date:a,p_limit:5e4});if(!s&&o)return{students:Array.isArray(o.students)?o.students:[],records:Array.isArray(o.records)?o.records:[]};console.warn("Public prayer dashboard RPC unavailable, falling back to direct reads:",s);const[l,r]=await Promise.all([U("students","id, student_code, full_name, main_room, religion_room, gender, is_active",c=>c.eq("is_active",!0).order("student_code")),U("prayer_records","id, student_id, main_room, status, check_date, location, scanned_by, input_method, scanner_code, scanner_name, scanner_room, scanner_gender, same_room_flag, created_at, students(id, student_code, full_name, main_room, religion_room, gender)",c=>c.gte("check_date",t).lte("check_date",a).not("location","is",null).order("check_date",{ascending:!0}).order("created_at",{ascending:!0}))]);if(((l==null?void 0:l.length)??0)===0&&((r==null?void 0:r.length)??0)===0&&(s==null?void 0:s.code)==="PGRST202")throw new Error("ยังไม่ได้รัน patch_public_prayer_dashboard_read.sql ใน Supabase");return{students:l,records:r}}function st(){return n.students.filter(t=>!(n.roomGroup&&H(t.main_room)!==n.roomGroup))}function ot(){return n.rows.filter(t=>{const a=t.students||{};return!(n.location&&t.location!==n.location||n.roomGroup&&H(t.main_room||a.main_room)!==n.roomGroup)})}function nt(){const t=st(),a=ot(),o=new Set(t.map(e=>e.id)),s=a.filter(e=>!o.size||o.has(e.student_id)),l=Array.from({length:n.days},(e,d)=>z(n.endDate,d-n.days+1)),r=Object.fromEntries(l.map(e=>[e,{key:e,total:0,pray:0,usor:0,other:0,uniqueStudents:new Set,operators:new Set}])),c=new Map,f=new Map,u=new Map;s.forEach(e=>{var L;const d=e.check_date,p=r[d],y=e.status==="pray",I=e.status==="usor",$=e.scanner_code||e.scanned_by||e.scanner_name||"ไม่ระบุผู้สแกน",X=e.scanner_name||e.scanned_by||"ไม่ระบุผู้สแกน",Z=e.scanner_room||"";p&&(p.total+=1,y?p.pray+=1:I?p.usor+=1:p.other+=1,p.uniqueStudents.add(e.student_id),p.operators.add($));const b=c.get($)||{key:$,label:X,room:Z,total:0,pray:0,manual:0,sameRoom:0,days:new Set,locations:new Set};b.total+=1,y&&(b.pray+=1),e.input_method==="manual"&&(b.manual+=1),e.same_room_flag&&(b.sameRoom+=1),e.check_date&&b.days.add(e.check_date),e.location&&b.locations.add(e.location),c.set($,b);const w=e.location||"ไม่ระบุจุด",R=f.get(w)||{key:w,label:P(w),total:0,pray:0};R.total+=1,y&&(R.pray+=1),f.set(w,R);const M=e.main_room||((L=e.students)==null?void 0:L.main_room)||"ไม่ระบุ",k=u.get(M)||{key:M,label:M,total:0,pray:0,usor:0};k.total+=1,y&&(k.pray+=1),I&&(k.usor+=1),u.set(M,k)});const m=l.map(e=>{const d=r[e],p=t.length,y=d.uniqueStudents.size;return{...d,unique:y,operatorsCount:d.operators.size,participationRate:p?Math.round(y/p*100):0,prayerRate:p?Math.round(d.pray/p*100):0}}),x=s.filter(e=>e.check_date===n.endDate),g=et(x),S=new Set(s.map(e=>e.student_id)).size,F=s.filter(e=>e.status==="pray").length,N=s.filter(e=>e.status==="usor").length,j=t.length,A=m.slice(Math.floor(m.length/2)),E=m.slice(0,Math.floor(m.length/2)),K=A.length?A.reduce((e,d)=>e+d.pray,0)/A.length:0,V=E.length?E.reduce((e,d)=>e+d.pray,0)/E.length:0,Y=Array.from(c.values()).map(e=>({...e,activeDays:e.days.size,locationsText:Array.from(e.locations).map(P).join(", ")||"—",manualRate:e.total?Math.round(e.manual/e.total*100):0})).sort((e,d)=>d.activeDays-e.activeDays||d.total-e.total),W=Array.from(u.values()).map(e=>({...e,prayerRate:e.total?Math.round(e.pray/e.total*100):0})).sort((e,d)=>d.pray-e.pray);return{students:t,rows:s,byDay:m,operators:Y,locations:Array.from(f.values()).sort((e,d)=>d.total-e.total),rooms:W,expectedToday:j,todayTotal:x.length,todayPray:x.filter(e=>e.status==="pray").length,todayUsor:x.filter(e=>e.status==="usor").length,todayUnique:g.length,todayRate:j?Math.round(g.length/j*100):0,periodUnique:S,periodPray:F,periodUsor:N,trendDelta:Math.round(K-V),activeOperatorsToday:new Set(x.map(e=>e.scanner_code||e.scanned_by||e.scanner_name).filter(Boolean)).size}}function h(t,a,o,s=""){const l={emerald:"bg-emerald-50 border-emerald-100 text-emerald-700",blue:"bg-blue-50 border-blue-100 text-blue-700",violet:"bg-violet-50 border-violet-100 text-violet-700",amber:"bg-amber-50 border-amber-100 text-amber-700",rose:"bg-rose-50 border-rose-100 text-rose-700",slate:"bg-slate-50 border-slate-100 text-slate-700"};return`
    <div class="rounded-2xl border p-4 ${l[o]||l.slate}">
      <p class="text-[11px] font-bold opacity-75">${i(t)}</p>
      <p class="text-2xl sm:text-3xl font-extrabold mt-1">${i(a)}</p>
      ${s?`<p class="text-[11px] opacity-70 mt-1">${i(s)}</p>`:""}
    </div>
  `}function rt(t){const a=Math.max(1,...t.map(u=>Math.max(u.pray,u.unique))),o=680,s=190,l=t.length>1?o/(t.length-1):o,r=u=>t.map((m,x)=>{const g=Math.round(x*l),S=Math.round(s-m[u]/a*(s-28)-14);return`${g},${S}`}).join(" "),c=r("pray"),f=r("unique");return`
    <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between gap-3 mb-2">
        <div>
          <h2 class="font-extrabold text-slate-800 text-sm">แนวโน้มผู้ละหมาด</h2>
          <p class="text-[11px] text-slate-400">เส้นเขียว = ละหมาดจริง, เส้นน้ำเงิน = มีบันทึกเข้าร่วม</p>
        </div>
        <span class="text-[11px] text-slate-400">สูงสุด ${a} คน/วัน</span>
      </div>
      <svg viewBox="0 0 ${o} ${s}" class="w-full h-48" preserveAspectRatio="none">
        <polyline points="${f}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
        <polyline points="${c}" fill="none" stroke="#059669" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></polyline>
        ${t.map((u,m)=>{const[x,g]=c.split(" ")[m].split(",");return`<circle cx="${x}" cy="${g}" r="4" fill="#059669"><title>${i(u.key)}: ${u.pray} คน</title></circle>`}).join("")}
      </svg>
      <div class="grid gap-1 text-[10px] text-slate-400" style="grid-template-columns: repeat(${Math.min(t.length,B)}, minmax(0, 1fr));">
        ${t.map(u=>`<span class="truncate">${i(u.key.slice(5))}</span>`).join("")}
      </div>
    </div>
  `}function lt(t){const a=Math.max(1,...t.map(o=>o.operatorsCount));return`
    <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between mb-3">
        <h2 class="font-extrabold text-slate-800 text-sm">แนวโน้มแกนนำที่ปฏิบัติหน้าที่</h2>
        <span class="text-[11px] text-slate-400">คน active ต่อวัน</span>
      </div>
      <div class="flex items-end gap-1 h-40">
        ${t.map(o=>`
          <div class="flex-1 min-w-0 flex flex-col items-center gap-1">
            <div class="w-full rounded-t-lg bg-violet-500" style="height:${Math.max(4,Math.round(o.operatorsCount/a*124))}px" title="${i(o.key)}: ${o.operatorsCount} คน"></div>
            <span class="text-[9px] text-slate-400 truncate">${i(o.key.slice(8))}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `}function dt(t,a="total",o="bg-emerald-500",s="ยังไม่มีข้อมูล"){if(!t.length)return`<p class="text-center text-sm text-slate-400 py-8">${i(s)}</p>`;const l=Math.max(1,...t.map(r=>r[a]||0));return`
    <div class="space-y-3">
      ${t.map(r=>`
        <div>
          <div class="flex items-center justify-between text-xs gap-3">
            <span class="font-bold text-slate-700 truncate">${i(r.label||r.key)}</span>
            <span class="font-mono text-slate-400">${i(r[a]||0)}</span>
          </div>
          <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden mt-1">
            <div class="${o} h-full rounded-full" style="width:${Math.max(4,Math.round((r[a]||0)/l*100))}%"></div>
          </div>
        </div>
      `).join("")}
    </div>
  `}function it(t){return t.length?`
    <div class="overflow-x-auto">
      <table class="w-full text-left text-xs">
        <thead>
          <tr class="border-b border-slate-100 text-slate-400">
            <th class="py-2 pr-3">แกนนำ/ผู้สแกน</th>
            <th class="py-2 px-3 text-center">วันทำหน้าที่</th>
            <th class="py-2 px-3 text-center">สแกน</th>
            <th class="py-2 px-3 text-center">กรอกรหัส</th>
            <th class="py-2 pl-3">จุดที่ดูแล</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-50">
          ${t.slice(0,10).map(a=>`
            <tr>
              <td class="py-3 pr-3">
                <p class="font-bold text-slate-800">${i(a.label)}</p>
                <p class="text-[10px] text-slate-400">${i(a.room||a.key||"—")}</p>
              </td>
              <td class="py-3 px-3 text-center font-extrabold text-violet-700">${a.activeDays}</td>
              <td class="py-3 px-3 text-center font-mono text-slate-600">${a.total}</td>
              <td class="py-3 px-3 text-center font-mono ${a.manualRate>=25?"text-amber-600 font-bold":"text-slate-400"}">${a.manualRate}%</td>
              <td class="py-3 pl-3 text-slate-500">${i(a.locationsText)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `:'<div class="text-center text-sm text-slate-400 py-10">ยังไม่มีข้อมูลแกนนำในช่วงที่เลือก</div>'}function _(){const t=nt(),a=n.updatedAt?n.updatedAt.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}):"—",o=t.trendDelta>=0?"emerald":"rose";C.innerHTML=`
    <header class="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-4">
      <div>
        <div class="flex items-center gap-3">
          ${window.self===window.top?`
          <button type="button" onclick="if (history.length > 1) { history.back(); } else { location.href = '/teacher.html'; }"
            class="flex-shrink-0 text-sm font-semibold text-slate-500 hover:text-emerald-700 flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-slate-100 transition">
            <span>←</span><span class="hidden sm:inline">กลับ</span>
          </button>`:""}
          <span class="w-11 h-11 rounded-2xl bg-emerald-100 text-2xl flex items-center justify-center">🕌</span>
          <div>
            <h1 class="text-xl sm:text-2xl font-extrabold text-slate-900">แดชบอร์ดแนวโน้มละหมาด</h1>
            <p class="text-xs text-slate-500">ติดตามแนวโน้มนักเรียนละหมาด และการทำหน้าที่ของแกนนำ</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <input id="prayer-end-date" type="date" value="${i(n.endDate)}"
          class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300" />
        <select id="prayer-days" class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300">
          ${[7,14,21,31].map(s=>`<option value="${s}" ${n.days===s?"selected":""}>${s} วัน</option>`).join("")}
        </select>
        <select id="prayer-room-group" class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300">
          <option value="">ทุกระดับ</option>
          ${["ม.1","ม.2","ม.3","ม.4","ม.5","ม.6","ปวช."].map(s=>`<option value="${s}" ${n.roomGroup===s?"selected":""}>${s}</option>`).join("")}
        </select>
        <select id="prayer-location" class="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-300">
          <option value="">ทุกจุดละหมาด</option>
          ${["musolla_male","masjid_kuwait","musolla_female_1","musolla_female_2"].map(s=>`<option value="${s}" ${n.location===s?"selected":""}>${P(s)}</option>`).join("")}
        </select>
        <button id="prayer-refresh" class="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 active:scale-95 transition">รีเฟรช</button>
      </div>
    </header>

    <section class="grid grid-cols-2 lg:grid-cols-6 gap-3 mb-4">
      ${h("ละหมาดวันนี้",t.todayPray,"emerald",`จาก ${t.expectedToday} คนในกลุ่มที่เลือก`)}
      ${h("มีบันทึกวันนี้",t.todayUnique,"blue",`${t.todayRate}% ของนักเรียน`)}
      ${h("อูโซรวันนี้",t.todayUsor,"violet","แยกจากยอดละหมาดจริง")}
      ${h("แกนนำ active",t.activeOperatorsToday,"amber","ผู้สแกน/ผู้บันทึกวันนี้")}
      ${h("ละหมาดช่วงนี้",t.periodPray,"slate",`${n.days} วันล่าสุด`)}
      ${h("แนวโน้ม",t.trendDelta>=0?`เพิ่ม ${t.trendDelta}`:`ลด ${Math.abs(t.trendDelta)}`,o,"เทียบครึ่งช่วงก่อนหน้า")}
    </section>

    <section class="grid grid-cols-1 xl:grid-cols-[1.45fr_1fr] gap-4 mb-4">
      ${rt(t.byDay)}
      ${lt(t.byDay)}
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h2 class="font-extrabold text-slate-800 text-sm mb-3">ห้อง/กลุ่มที่ละหมาดมาก</h2>
        ${dt(t.rooms.slice(0,8),"pray","bg-emerald-500","ยังไม่มีข้อมูลห้อง")}
      </div>
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <h2 class="font-extrabold text-slate-800 text-sm mb-3">จุดละหมาดที่ใช้งาน</h2>
        <div class="space-y-2">
          ${t.locations.length?t.locations.map(s=>`
            <div class="flex items-center justify-between gap-3 rounded-xl border px-3 py-2 ${tt(s.key)}">
              <span class="font-bold text-xs">${i(s.label)}</span>
              <span class="font-mono text-sm font-extrabold">${s.total}</span>
            </div>
          `).join(""):'<p class="text-center text-sm text-slate-400 py-8">ยังไม่มีข้อมูลจุดละหมาด</p>'}
        </div>
      </div>
      <div class="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div class="flex items-center justify-between gap-3 mb-3">
          <h2 class="font-extrabold text-slate-800 text-sm">ตารางแกนนำ</h2>
          <span class="text-[11px] text-slate-400">อัปเดต ${i(a)}</span>
        </div>
        ${it(t.operators)}
      </div>
    </section>

    <section class="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-emerald-800">
        <div><span class="font-extrabold">เป้าหมายผู้ละหมาด:</span> ดูเส้นเขียวให้สูงขึ้นต่อเนื่อง และเทียบกับเส้นน้ำเงินเพื่อแยกอูโซร/บันทึกอื่น</div>
        <div><span class="font-extrabold">เป้าหมายแกนนำ:</span> วันที่แกนนำ active มากขึ้นควรทำให้ยอดละหมาดจริงเพิ่มขึ้นตาม</div>
        <div><span class="font-extrabold">ใช้ติดตาม:</span> เลือกระดับ/จุดละหมาดเพื่อดูปัญหาเฉพาะกลุ่ม เช่น ม.5 หรือมัสยิดคูเวต</div>
      </div>
    </section>

    ${n.loading?'<div class="fixed bottom-4 right-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-lg">กำลังโหลดข้อมูล...</div>':""}
  `,ct()}function ct(){var t,a,o,s,l;(t=document.getElementById("prayer-end-date"))==null||t.addEventListener("change",r=>{n.endDate=r.target.value||D(),v()}),(a=document.getElementById("prayer-days"))==null||a.addEventListener("change",r=>{n.days=O(r.target.value),v()}),(o=document.getElementById("prayer-room-group"))==null||o.addEventListener("change",r=>{n.roomGroup=r.target.value||"",_()}),(s=document.getElementById("prayer-location"))==null||s.addEventListener("change",r=>{n.location=r.target.value||"",_()}),(l=document.getElementById("prayer-refresh"))==null||l.addEventListener("click",v)}function ut(){const t=new URLSearchParams(window.location.search);n.days=O(t.get("days")||q),n.endDate=t.get("date")||D(),n.location=t.get("location")||"",n.roomGroup=t.get("room")||""}ut();_();v();setInterval(v,J);
