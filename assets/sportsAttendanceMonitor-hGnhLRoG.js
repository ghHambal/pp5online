import{s as K}from"./supabase-BV-W2lsh.js";/* empty css             */const z="sports_att_monitor_pw",b=document.getElementById("attendance-monitor-root"),H="โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ",R=["https://lh3.googleusercontent.com/d/1JDduqJInp2BjORgZhhUgv80fXtMs3JzV","https://lh3.googleusercontent.com/d/1lXMVnPf8rIl5SBzqZeSCEtbpf6U7idWa","https://lh3.googleusercontent.com/d/1JPmgiu_pgACGYTymHsLqROm1GrzZSklP"],p=o=>String(o??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),T=o=>o==="M"?"ชาย":o==="W"?"หญิง":"ทั้งหมด",B=o=>o?`<img src="${p(o)}" style="width:20px;height:26px;border-radius:4px;object-fit:cover;border:1px solid #cbd5e1;vertical-align:middle;margin-right:5px">`:"",L=o=>{const[t,a,l]=String(o).split("-").map(Number);return{y:t,m:a,d:l}},W=o=>{const{y:t,m:a,d:l}=L(o);return Date.UTC(t,a-1,l)},V=(o,t)=>{const{y:a,m:l,d}=L(o);return new Date(Date.UTC(a,l-1,d+t)).toISOString().slice(0,10)},X=()=>{const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`},P=o=>{const{y:t,m:a,d:l}=L(o);return new Date(Date.UTC(t,a-1,l)).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"})},Q=o=>{const{y:t,m:a,d:l}=L(o);return new Date(Date.UTC(t,a-1,l)).toLocaleDateString("th-TH",{day:"numeric",month:"short",timeZone:"UTC"})},tt=o=>{const{m:t,d:a}=L(o);return`${a}/${t}`},A=o=>{const t=String(o||"").match(/ม\.(\d+)\/(\d+)/);return t?[parseInt(t[1]),parseInt(t[2])]:String(o||"").startsWith("ปวช.")?[parseInt(o.split(".")[1])+6,1]:[99,99]},v=o=>{const t=String(o||"ไม่ระบุ");return t.startsWith("ปวช.")?"ปวช.":t.split("/")[0]||"ไม่ระบุ"},$=o=>o.startsWith("ปวช.")?100:parseInt(o.replace("ม.",""))||99,O=(o,t)=>{const[a,l]=[A(o.main_room),A(t.main_room)];return a[0]-l[0]||a[1]-l[1]||o.full_name.localeCompare(t.full_name,"th")},et=o=>{const t=[];return o.forEach(a=>{const l=Math.round((W(a.end_date||a.event_date)-W(a.event_date))/864e5)+1;for(let d=0;d<l;d++){const m=V(a.event_date,d),y=l>1?`${a.label} (วันที่ ${d+1} จาก ${l})`:a.label;t.push({date:m,label:y})}}),t.sort((a,l)=>a.date<l.date?-1:1)};async function G(o){const{data:t,error:a}=await K.rpc("get_public_sports_attendance_snapshot",{p_password:o});if(a)throw a;return t}function ot(o){b.innerHTML=`
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับฝ่ายที่ได้รับสิทธิ์เข้าถึงข้อมูลเช็คชื่อกีฬาสีเท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าดูข้อมูล</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`;const t=b.querySelector("#gate-password"),a=b.querySelector("#gate-error"),l=async()=>{const d=t.value.trim();if(d){b.querySelector("#gate-submit").disabled=!0;try{const m=await G(d);sessionStorage.setItem(z,d),o(m)}catch{a.classList.remove("hidden"),b.querySelector("#gate-submit").disabled=!1}}};b.querySelector("#gate-submit").onclick=l,t.addEventListener("keydown",d=>{d.key==="Enter"&&l()})}function Z(o){var C,U;const t=et(o.calendar||[]),a=X(),l=((C=t.find(n=>n.date===a))==null?void 0:C.date)||((U=t[t.length-1])==null?void 0:U.date)||a;let d="M",m=l,y="single",S="";const J=[...new Set((o.students||[]).map(n=>v(n.main_room)))].sort((n,i)=>$(n)-$(i));b.innerHTML=`
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 นักเรียนชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 นักเรียนหญิง</button>
          <button type="button" data-gender="ALL" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👥 ทั้งหมด</button>
        </div>
        <div class="flex items-center gap-2">
          <select id="level-select" class="border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold"><option value="">ทุกระดับชั้น</option>${J.map(n=>`<option value="${p(n)}">ชั้น ${p(n)}</option>`).join("")}</select>
          <select id="day-select" class="border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold"></select>
        </div>
      </div>
      <div id="summary-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
      <div class="no-print bg-white rounded-xl border border-slate-200 p-3 flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold text-slate-500">พิมพ์/บันทึกไฟล์:</span>
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-print-mode="single" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all">📅 เฉพาะวันที่เลือก</button>
          <button type="button" data-print-mode="all" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all">📚 ทุกวัน (เข้าสี+วันจริงทั้งหมด)</button>
        </div>
      </div>
      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ส่งออก CSV</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="absent-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
    </div>`;const _=b.querySelector("#day-select");_.innerHTML=t.map(n=>`<option value="${n.date}">${p(n.label)} — ${P(n.date)}</option>`).join("")||'<option value="">ไม่มีข้อมูลปฏิทิน</option>',_.value=m;const j=n=>(o.students||[]).filter(i=>(n==="ALL"||i.gender===n)&&(!S||v(i.main_room)===S)),D=n=>new Set((o.attendance||[]).filter(i=>i.session_date===n).map(i=>i.student_id)),I=()=>{const n=j(d),i=D(m),g=n.filter(u=>i.has(u.id)),f=n.filter(u=>!i.has(u.id));return{students:n,present:g,absent:f}},N=(n,i,g)=>{const f=j(d),u=D(n),h=f.filter(r=>!u.has(r.id)),s={};f.forEach(r=>{const x=v(r.main_room);s[x]=s[x]||{total:0,present:0,students:[]},s[x].total++}),f.forEach(r=>{u.has(r.id)&&s[v(r.main_room)].present++}),h.forEach(r=>{s[v(r.main_room)].students.push(r)});const e=Object.keys(s).sort((r,x)=>$(r)-$(x)),c=`<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${R.map(r=>`<img src="${r}" style="height:56px">`).join("")}</div>`;return e.map((r,x)=>{const w=s[r],M=[...w.students].sort(O),q=w.total?Math.round(w.present/w.total*100):0;return`<div style="${x!==0?"page-break-before:always;":""}padding-top:12px">
        ${c}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">รายชื่อนักเรียน${T(d)}ที่ขาดเช็คชื่อ — ${p(i)} (${P(n)})</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${p(H)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${p(r)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>นักเรียนทั้งหมด: <b>${w.total}</b></span>
          <span style="color:#059669">มาแล้ว: <b>${w.present}</b></span>
          <span style="color:#dc2626">ขาด: <b>${w.students.length}</b></span>
          <span>คิดเป็น: <b>${q}%</b></span>
        </div>
        ${M.length?`<table style="width:100%;border-collapse:collapse;font-size:11px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
          </tr></thead>
          <tbody>${M.map((E,F)=>`
            <tr>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${F+1}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${p(E.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${B(E.photo_url)}${p(E.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${p(E.main_room||"—")}</td>
            </tr>`).join("")}</tbody>
        </table>`:'<p style="text-align:center;color:#059669;font-weight:bold">✅ เช็คชื่อครบทุกคนในชั้นนี้</p>'}
      </div>`}).join("")},Y=()=>{const n=j(d),i=new Map(t.map(s=>[s.date,D(s.date)])),g={};n.forEach(s=>{const e=v(s.main_room);g[e]=g[e]||{total:0,rows:[]},g[e].total++}),n.forEach(s=>{t.some(c=>!i.get(c.date).has(s.id))&&g[v(s.main_room)].rows.push(s)});const f=Object.keys(g).sort((s,e)=>$(s)-$(e)),u=`<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${R.map(s=>`<img src="${s}" style="height:56px">`).join("")}</div>`,h=Math.max(22,Math.floor(360/Math.max(1,t.length)));return f.map((s,e)=>{const c=g[s],r=[...c.rows].sort(O);return`<div style="${e>0?"page-break-before:always;":""}padding-top:12px">
        ${u}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">รายชื่อนักเรียน${T(d)}ที่ขาดเช็คชื่อ — สรุปทุกวัน (เข้าสี+วันงานจริง)</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${p(H)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${p(s)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>นักเรียนทั้งหมด: <b>${c.total}</b></span>
          <span style="color:#dc2626">ขาดอย่างน้อย 1 วัน: <b>${r.length}</b></span>
        </div>
        ${r.length?`<table style="width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed">
          <colgroup>
            <col style="width:26px"><col style="width:56px"><col><col style="width:92px">
            ${t.map(()=>`<col style="width:${h}px">`).join("")}
          </colgroup>
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:3px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:3px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:3px 6px;background:#f1f5f9;text-align:left">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:3px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
            ${t.map(x=>`<th style="border:1px solid #cbd5e1;padding:2px;background:#f1f5f9;white-space:nowrap;font-size:9px" title="${p(x.label)}">${tt(x.date)}</th>`).join("")}
          </tr></thead>
          <tbody>${r.map((x,w)=>`
            <tr>
              <td style="border:1px solid #cbd5e1;padding:3px;text-align:center">${w+1}</td>
              <td style="border:1px solid #cbd5e1;padding:3px;text-align:center">${p(x.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:3px 6px">${B(x.photo_url)}${p(x.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:3px;text-align:center;white-space:nowrap">${p(x.main_room||"—")}</td>
              ${t.map(M=>{const q=i.get(M.date).has(x.id);return`<td style="border:1px solid #cbd5e1;padding:2px;text-align:center;font-weight:bold;color:${q?"#059669":"#dc2626"}">${q?"✓":"✗"}</td>`}).join("")}
            </tr>`).join("")}</tbody>
        </table>`:'<p style="text-align:center;color:#059669;font-weight:bold">✅ ไม่มีใครขาดเช็คชื่อเลยตลอดช่วงนี้</p>'}
      </div>`}).join("")},k=()=>{var s;b.querySelectorAll("[data-gender]").forEach(e=>e.classList.toggle("bg-pink-600",e.dataset.gender===d)),b.querySelectorAll("[data-gender]").forEach(e=>e.classList.toggle("text-white",e.dataset.gender===d)),b.querySelectorAll("[data-print-mode]").forEach(e=>e.classList.toggle("bg-pink-600",e.dataset.printMode===y)),b.querySelectorAll("[data-print-mode]").forEach(e=>e.classList.toggle("text-white",e.dataset.printMode===y)),_.disabled=y==="all";const{students:n,present:i,absent:g}=I(),f=n.length?Math.round(i.length/n.length*100):0;b.querySelector("#summary-cards").innerHTML=`
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">นักเรียนทั้งหมด</p><b class="text-xl">${n.length}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">มาเช็คชื่อแล้ว</p><b class="text-xl text-emerald-700">${i.length}</b></div>
      <div class="bg-red-50 rounded-xl border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">ขาดเช็คชื่อ</p><b class="text-xl text-red-700">${g.length}</b></div>
      <div class="bg-slate-100 rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">มาแล้ว</p><b class="text-xl">${f}%</b></div>`;const u={};g.forEach(e=>{(u[e.main_room||"ไม่ระบุห้อง"]=u[e.main_room||"ไม่ระบุห้อง"]||[]).push(e)});const h=Object.keys(u).sort((e,c)=>{const[r,x]=[A(e),A(c)];return r[0]-x[0]||r[1]-x[1]});if(b.querySelector("#absent-list").innerHTML=h.length?h.map(e=>`
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <b class="text-sm">ห้อง ${p(e)}</b>
          <span class="text-xs text-red-600 font-bold">ขาด ${u[e].length} คน</span>
        </div>
        <table class="w-full text-xs">
          <tbody>${u[e].sort((c,r)=>c.full_name.localeCompare(r.full_name,"th")).map(c=>`
            <tr class="border-t border-slate-100">
              <td class="p-2 w-24 text-slate-500">${p(c.student_code)}</td>
              <td class="p-2">
                <div class="flex items-center gap-2">
                  ${c.photo_url?`<img src="${p(c.photo_url)}" alt="" class="w-7 h-9 rounded-md object-cover border border-slate-200 bg-slate-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-7 h-9 rounded-md bg-slate-100 text-slate-400 grid place-items-center flex-shrink-0 border border-slate-200 text-[10px] font-bold">${p((c.full_name||"?").charAt(0))}</div>`}
                  <span>${p(c.full_name)}</span>
                </div>
              </td>
            </tr>
          `).join("")}</tbody>
        </table>
      </div>`).join(""):'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ เช็คชื่อครบทุกคนในวันนี้</div>',y==="all")b.querySelector("#print-content").innerHTML=t.length?Y():'<p style="text-align:center;padding:40px">ไม่มีข้อมูลปฏิทิน</p>';else{const e=((s=t.find(c=>c.date===m))==null?void 0:s.label)||m;b.querySelector("#print-content").innerHTML=N(m,e)||'<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>'}};b.querySelectorAll("[data-gender]").forEach(n=>n.onclick=()=>{d=n.dataset.gender,k()}),b.querySelectorAll("[data-print-mode]").forEach(n=>n.onclick=()=>{y=n.dataset.printMode,k()}),_.onchange=()=>{m=_.value,k()},b.querySelector("#level-select").onchange=n=>{S=n.target.value,k()},b.querySelector("#btn-export-csv").onclick=()=>{var u;const n=h=>`"${String(h||"").replaceAll('"','""')}"`;let i;if(y==="all"){const h=new Map(t.map(e=>[e.date,D(e.date)])),s=j(d).filter(e=>t.some(c=>!h.get(c.date).has(e.id))).sort(O);i=[["ห้อง","รหัส","ชื่อ-สกุล",...t.map(e=>Q(e.date))].map(n).join(","),...s.map(e=>[e.main_room,e.student_code,e.full_name,...t.map(c=>h.get(c.date).has(e.id)?"มา":"ขาด")].map(n).join(","))]}else{const h=((u=t.find(e=>e.date===m))==null?void 0:u.label)||m,{absent:s}=I();i=["ห้อง,รหัส,ชื่อ-สกุล,วันที่ขาด",...s.sort(O).map(e=>[e.main_room,e.student_code,e.full_name,h].map(n).join(","))]}const g=document.createElement("a");g.href=URL.createObjectURL(new Blob(["\uFEFF"+i.join(`
`)],{type:"text/csv"}));const f=S?`-${S}`:"";g.download=y==="all"?`ขาดเช็คชื่อ-${T(d)}${f}-ทุกวัน.csv`:`ขาดเช็คชื่อ-${T(d)}${f}-${m}.csv`,g.click(),URL.revokeObjectURL(g.href)},b.querySelector("#btn-print").onclick=()=>window.print(),k()}async function nt(){const o=sessionStorage.getItem(z);if(o)try{const t=await G(o);Z(t);return}catch{sessionStorage.removeItem(z)}ot(Z)}nt();
