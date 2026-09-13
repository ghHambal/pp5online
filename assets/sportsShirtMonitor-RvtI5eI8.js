import{s as qt}from"./supabase-BV-W2lsh.js";/* empty css             */const at="sports_shirt_monitor_pw",c=document.getElementById("shirt-monitor-root"),dt="โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ",it=["https://lh3.googleusercontent.com/d/1JDduqJInp2BjORgZhhUgv80fXtMs3JzV","https://lh3.googleusercontent.com/d/1lXMVnPf8rIl5SBzqZeSCEtbpf6U7idWa","https://lh3.googleusercontent.com/d/1JPmgiu_pgACGYTymHsLqROm1GrzZSklP"],n=d=>String(d??"").replace(/[&<>"']/g,w=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[w]),Tt=d=>{const w=String(d||"").replace("#","");if(!/^[0-9a-fA-F]{6}$/.test(w))return"transparent";const O=.85,q=k=>Math.round(parseInt(w.slice(k*2,k*2+2),16)+(255-parseInt(w.slice(k*2,k*2+2),16))*O);return`rgb(${q(0)}, ${q(1)}, ${q(2)})`},rt=d=>({pending:"รอยืนยัน",confirmed:"ยืนยันแล้ว",advisor_updated:"ครูเลือก/แก้ไขแทน"})[d]||"ยังไม่จำนง",jt=d=>d==="confirmed"||d==="advisor_updated",P=d=>{const w=String(d||"").match(/ม\.(\d+)\/(\d+)/);return w?[parseInt(w[1]),parseInt(w[2])]:String(d||"").startsWith("ปวช.")?[parseInt(d.split(".")[1])+6,1]:[99,99]},ct=d=>{const w=String(d||"ไม่ระบุ");return w.startsWith("ปวช.")?"ปวช.":w.split("/")[0]||"ไม่ระบุ"},pt=d=>d.startsWith("ปวช.")?100:parseInt(d.replace("ม.",""))||99,Ot=(d,w)=>{const[O,q]=[P(d.main_room),P(w.main_room)];return O[0]-q[0]||O[1]-q[1]||d.full_name.localeCompare(w.full_name,"th")};async function bt(d){const{data:w,error:O}=await qt.rpc("get_public_sports_shirt_snapshot",{p_password:d});if(O)throw O;return w}function Ct(d){c.innerHTML=`
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับฝ่ายที่ได้รับสิทธิ์เข้าถึงข้อมูลไซซ์เสื้อและค่าเสื้อกีฬาสีเท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าดูข้อมูล</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`;const w=c.querySelector("#gate-password"),O=c.querySelector("#gate-error"),q=async()=>{const k=w.value.trim();if(k){c.querySelector("#gate-submit").disabled=!0;try{const H=await bt(k);sessionStorage.setItem(at,k),d(H)}catch{O.classList.remove("hidden"),c.querySelector("#gate-submit").disabled=!1}}};c.querySelector("#gate-submit").onclick=q,w.addEventListener("keydown",k=>{k.key==="Enter"&&q()})}function xt(d){const w=Number(d.shirt_payment_amount_m)||0,O=Number(d.shirt_payment_amount_w)||0,q=t=>t==="W"?O:w,k=w>0||O>0,H=d.allowed_sizes&&d.allowed_sizes.length?d.allowed_sizes:["SS","S","M","L","XL","2X","3X","4X","5X","6X","7X","8X"],W=d.team_colors||[],X=d.teachers||[],ut=d.teacher_shirt_requests||[],Q=d.teacher_allowed_sizes&&d.teacher_allowed_sizes.length?d.teacher_allowed_sizes:H,R=t=>ut.find(e=>e.teacher_id===t),Y=d.personnel_shirt_requests||[],F={};(d.homeroom_teachers||[]).forEach(t=>{F[t.main_room]=F[t.main_room]?`${F[t.main_room]} / ${t.teacher_name}`:t.teacher_name});const E=t=>F[t]||"—";let $="size",V="teacher",f="ALL",v=null,b=null,N=null,I="",D="list",C="all",M=!1;const A=new Set,J=t=>(d.shirt_requests||[]).find(e=>e.student_id===t),ft=t=>(d.shirt_payments||[]).find(e=>e.student_id===t),S=t=>{const e=J(t.id),o=ft(t.id);return{req:e,pay:o,sizeStatus:(e==null?void 0:e.status)||null,sizeReported:!!e,sizeOk:jt(e==null?void 0:e.status),paid:!!o}},tt=()=>f==="ALL"?W:W.filter(t=>t.gender===f),ht=t=>t==="ALL"?d.students||[]:(d.students||[]).filter(e=>e.gender===t),U=()=>ht(f),Z=()=>{let t=U();if(v&&(t=t.filter(e=>e.team_color_id===v)),N&&(t=t.filter(e=>ct(e.main_room)===N)),I.trim()){const e=I.trim().toLowerCase();t=t.filter(o=>(o.full_name||"").toLowerCase().includes(e)||(o.student_code||"").toLowerCase().includes(e)||(o.main_room||"").toLowerCase().includes(e)||(o.color_name||"").toLowerCase().includes(e))}return $==="size"?(b&&(t=t.filter(e=>{var o;return((o=J(e.id))==null?void 0:o.confirmed_size)===b})),C==="pending"&&(t=t.filter(e=>!S(e).sizeOk)),C==="confirmed"&&(t=t.filter(e=>S(e).sizeOk))):k&&C==="unpaid"?t=t.filter(e=>q(e.gender)>0&&!S(e).paid):k&&C==="paid"&&(t=t.filter(e=>S(e).paid)),t},gt=()=>[...new Set(U().map(e=>ct(e.main_room)))].sort((e,o)=>pt(e)-pt(o));c.innerHTML=`
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-white border border-slate-200 gap-1">
          <button type="button" data-tab="size" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👕 ไซซ์เสื้อ</button>
          <button type="button" data-tab="payment" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">💰 ค่าเสื้อ</button>
          <button type="button" data-tab="teacher" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👔 ไซซ์เสื้อครู/บุคลากร</button>
        </div>
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 ชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 หญิง</button>
          <button type="button" data-gender="UNKNOWN" class="px-4 py-2 rounded-lg text-xs font-bold transition-all hidden">❔ ไม่ระบุเพศ</button>
          <button type="button" data-gender="ALL" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👥 ทั้งหมด</button>
        </div>
      </div>

      <div id="role-filter-row" class="no-print"></div>

      <div id="search-row" class="no-print">
        <input id="shirt-search" type="text" placeholder="🔍 ค้นหาชื่อ/รหัส/ห้อง/สี — พิมพ์อะไรก็เจอ" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm bg-white">
      </div>

      <p id="scope-line" class="no-print text-xs text-slate-500"></p>

      <div id="color-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-2"></div>
      <div id="size-grid-wrap" class="no-print bg-white rounded-xl border border-slate-200 p-3 overflow-x-auto"></div>

      <div class="no-print bg-white rounded-xl border border-slate-200 p-3 flex flex-wrap items-center gap-3">
        <span class="text-xs font-bold text-slate-500">กรองสถานะ:</span>
        <div id="status-filter" class="inline-flex p-1 rounded-xl bg-slate-100 gap-1"></div>
        <div id="view-mode-row" class="inline-flex p-1 rounded-xl bg-slate-100 gap-1 ml-auto"></div>
      </div>

      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ดาวน์โหลด Excel (CSV)</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="level-filter-row" class="no-print"></div>

      <div id="shirt-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
    </div>`;const mt=()=>{const t=tt();c.querySelector("#color-cards").innerHTML=t.map(e=>{const o=U().filter(h=>h.team_color_id===e.id),i=$==="size"?`${o.filter(h=>S(h).sizeOk).length} / ${o.length}`:q(e.gender)>0?`${o.filter(h=>S(h).paid).length} / ${o.length}`:"รอราคา",u=v===e.id;return`<button type="button" data-color-card="${n(e.id)}" class="text-left rounded-xl border p-3 transition-all ${u?"ring-2 ring-offset-1":"border-slate-200 bg-white hover:border-slate-300"}" style="${u?`border-color:${n(e.hex_color)};box-shadow:0 0 0 2px ${n(e.hex_color)}22;`:""}">
        <div class="flex items-center gap-2 mb-1"><span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${n(e.hex_color)}"></span><b class="text-xs text-slate-700">สี${n(e.name)}</b></div>
        <p class="text-[10px] text-slate-400">${o.length} คน</p>
        <p class="text-lg font-black mt-0.5" style="color:${n(e.hex_color)}">${n(i)}</p>
      </button>`}).join("")||'<p class="col-span-full text-xs text-slate-400 text-center py-4">ไม่มีข้อมูลสี</p>',c.querySelectorAll("[data-color-card]").forEach(e=>e.onclick=()=>{v=v===e.dataset.colorCard?null:e.dataset.colorCard,L()})},yt=()=>{const t=c.querySelector("#size-grid-wrap");if($!=="size"){t.innerHTML="";return}const e=tt(),o=(r,s)=>U().filter(p=>{var g;return p.team_color_id===r&&((g=J(p.id))==null?void 0:g.confirmed_size)===s}).length,i=r=>U().filter(s=>s.team_color_id===r&&S(s).sizeOk).length,u=r=>U().filter(s=>{var p;return((p=J(s.id))==null?void 0:p.confirmed_size)===r&&s.team_color_id&&e.some(g=>g.id===s.team_color_id)}).length,h=e.reduce((r,s)=>r+i(s.id),0);t.innerHTML=`
      <p class="text-xs font-bold text-slate-500 mb-2">สรุปจำนวนไซซ์ที่ยืนยันแล้วต่อสี — กดตัวเลขเพื่อกรองรายชื่อด้านล่าง</p>
      <table class="w-full text-xs border-collapse">
        <thead><tr>
          <th class="p-2 text-left border-b border-slate-200">สี</th>
          ${H.map(r=>`<th class="p-2 text-center border-b border-slate-200 ${b===r?"text-pink-600":"text-slate-500"}"><button type="button" data-size-col="${n(r)}" class="font-bold hover:underline">${n(r)}</button></th>`).join("")}
          <th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">รวม</th>
        </tr></thead>
        <tbody>
          ${e.map(r=>`<tr class="border-b border-slate-100">
            <td class="p-2"><span class="inline-flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${n(r.hex_color)}"></span>${n(r.name)}</span></td>
            ${H.map(s=>{const p=o(r.id,s),g=v===r.id&&b===s;return`<td class="p-1 text-center"><button type="button" data-cell-color="${n(r.id)}" data-cell-size="${n(s)}" class="w-9 h-8 rounded-lg text-xs font-bold ${g?"bg-pink-600 text-white":p>0?"bg-slate-100 hover:bg-slate-200 text-slate-700":"text-slate-300"}">${p||"·"}</button></td>`}).join("")}
            <td class="p-1 text-center"><button type="button" data-color-total="${n(r.id)}" class="w-10 h-8 rounded-lg text-xs font-bold ${v===r.id&&!b?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${i(r.id)}</button></td>
          </tr>`).join("")}
          <tr>
            <td class="p-2 font-bold text-slate-600">รวม</td>
            ${H.map(r=>`<td class="p-1 text-center"><button type="button" data-size-total="${n(r)}" class="w-9 h-8 rounded-lg text-xs font-bold ${!v&&b===r?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${u(r)}</button></td>`).join("")}
            <td class="p-1 text-center font-black text-slate-700">${h}</td>
          </tr>
        </tbody>
      </table>`,t.querySelectorAll("[data-cell-color]").forEach(r=>r.onclick=()=>{const s=r.dataset.cellColor,p=r.dataset.cellSize;v===s&&b===p?(v=null,b=null):(v=s,b=p),L()}),t.querySelectorAll("[data-color-total]").forEach(r=>r.onclick=()=>{const s=r.dataset.colorTotal;v===s&&!b?v=null:(v=s,b=null),L()}),t.querySelectorAll("[data-size-total],[data-size-col]").forEach(r=>r.onclick=()=>{const s=r.dataset.sizeTotal||r.dataset.sizeCol;!v&&b===s?b=null:(b=s,v=null),L()})},wt=()=>{const t=c.querySelector("#status-filter"),e=$==="size"?[["all","ทั้งหมด"],["pending","ไซซ์ยังไม่ยืนยัน"],["confirmed","ยืนยันแล้ว"]]:k?[["all","ทั้งหมด"],["unpaid","ยังไม่ชำระ"],["paid","ชำระแล้ว"]]:[["all","ทั้งหมด"]];t.innerHTML=e.map(([o,i])=>`<button type="button" data-status="${o}" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${C===o?"bg-pink-600 text-white":"text-slate-500"}">${n(i)}</button>`).join(""),t.querySelectorAll("[data-status]").forEach(o=>o.onclick=()=>{C=o.dataset.status,L()})},$t=()=>{const t=c.querySelector("#level-filter-row"),e=gt();if(e.length<=1){t.innerHTML="";return}t.innerHTML=`<div class="flex flex-wrap gap-1.5">
      <button type="button" data-level="" class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${N?"bg-white text-slate-500 border-slate-200":"bg-pink-600 text-white border-pink-600"}">ทุกระดับชั้น</button>
      ${e.map(o=>`<button type="button" data-level="${n(o)}" class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${N===o?"bg-pink-600 text-white border-pink-600":"bg-white text-slate-500 border-slate-200"}">${n(o)}</button>`).join("")}
    </div>`,t.querySelectorAll("[data-level]").forEach(o=>o.onclick=()=>{N=o.dataset.level||null,L()})},vt=()=>{const t=c.querySelector("#view-mode-row");t.innerHTML=`
      <button type="button" data-view="list" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${D==="list"?"bg-pink-600 text-white":"text-slate-500"}">📋 รายชื่อ</button>
      <button type="button" data-view="summary" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${D==="summary"?"bg-pink-600 text-white":"text-slate-500"}">📊 สรุปตามห้อง</button>`,t.querySelectorAll("[data-view]").forEach(e=>e.onclick=()=>{D=e.dataset.view,L()})},_t=()=>{const t=c.querySelector("#view-mode-row");t.innerHTML=`
      <button type="button" id="btn-select-mode" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${M?"bg-pink-600 text-white":"text-slate-500"}">☑️ เลือกเพื่อพิมพ์${M&&A.size?` (${A.size})`:""}</button>`,t.querySelector("#btn-select-mode").onclick=()=>{M=!M,M||A.clear(),L()}},B=t=>{const e={};return t.forEach(o=>{(e[o.main_room||"ไม่ระบุห้อง"]=e[o.main_room||"ไม่ระบุห้อง"]||[]).push(o)}),Object.keys(e).sort((o,i)=>{const[u,h]=[P(o),P(i)];return u[0]-h[0]||u[1]-h[1]}).map(o=>({room:o,students:e[o]}))},zt=()=>{var p;const t=Z(),e=`<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${it.map(g=>`<img src="${g}" style="height:56px">`).join("")}</div>`,o=f==="M"?"ชาย":f==="W"?"หญิง":"",i=v?(p=W.find(g=>g.id===v))==null?void 0:p.name:"",u=N?` — ชั้น${N}`:"",h=$==="size"?"รายชื่อนักเรียน — ไซซ์เสื้อกีฬาสี":"รายชื่อนักเรียน — ค่าเสื้อกีฬาสี",r=g=>`
      ${e}
      <div style="text-align:center;margin-bottom:10px">
        <h2 style="font-size:16px;margin:0 0 4px">${n(h)}${o?n(o):""}${i?` — สี${n(i)}`:""}${b?` — ไซซ์ ${n(b)}`:""}${n(u)}</h2>
        <p style="font-size:13px;margin:0;font-weight:bold">${n(dt)}</p>
        ${g?`<p style="font-size:14px;margin:6px 0 0;font-weight:bold">${n(g)}</p>`:""}
      </div>`;if(D==="summary"){const g=B(t);return`<div style="padding-top:12px">
        ${r("สรุปตามห้อง")}
        <div style="text-align:center;margin-bottom:10px;font-size:12px">จำนวนทั้งหมด: <b>${t.length}</b> คน</div>
        <table style="width:100%;border-collapse:collapse;font-size:10.5px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ครูที่ปรึกษา</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">จำนวน</th>
            ${$==="size"?'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">นักเรียนแจ้งแล้ว</th><th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ครูยืนยันแล้ว</th>':'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ชำระแล้ว</th><th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ยังไม่ชำระ</th>'}
          </tr></thead>
          <tbody>${g.map(({room:T,students:x})=>{const y=x.filter(m=>S(m).sizeReported).length,l=x.filter(m=>S(m).sizeOk).length,a=x.filter(m=>S(m).paid).length;return`<tr>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${n(T)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${n(E(T))}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${x.length}</td>
              ${$==="size"?`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${y} / ${x.length}</td><td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${l} / ${x.length}</td>`:`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${a}</td><td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center">${x.length-a}</td>`}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`}return B(t).map(({room:g,students:T},x)=>{const y=[...T].sort((a,m)=>a.full_name.localeCompare(m.full_name,"th")),l=E(g);return`<div style="${x>0?"page-break-before:always;":""}padding-top:12px">
        ${r(`ห้อง ${g}${l!=="—"?` — ครูที่ปรึกษา: ${l}`:""}`)}
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>จำนวน: <b>${y.length}</b> คน</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:10.5px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สี</th>
            ${$==="size"?'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ไซซ์ยืนยัน</th><th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะ</th>':k?'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">สถานะชำระ</th>':""}
          </tr></thead>
          <tbody>${y.map((a,m)=>{var j,K;const z=S(a);return`<tr style="background:${Tt((j=W.find(ot=>ot.id===a.team_color_id))==null?void 0:j.hex_color)}">
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${m+1}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${n(a.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${n(a.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${n(a.color_name||"—")}</td>
              ${$==="size"?`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${n(((K=z.req)==null?void 0:K.confirmed_size)||"—")}</td><td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${n(rt(z.sizeStatus))}</td>`:k?`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${q(a.gender)>0?z.paid?"ชำระแล้ว":"ยังไม่ชำระ":"รอราคา"}</td>`:""}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`}).join("")},et=t=>t==="ALL"?Y:t==="UNKNOWN"?Y.filter(e=>!e.gender):Y.filter(e=>e.gender===t),lt=t=>t==="ALL"?X:t==="UNKNOWN"?X.filter(e=>!e.gender):X.filter(e=>e.gender===t),G=t=>String(t.id??t.full_name),st=()=>{const t=I.trim().toLowerCase();if(V==="personnel"){let o=et(f);return b&&(o=o.filter(i=>i.size===b)),t&&(o=o.filter(i=>(i.full_name||"").toLowerCase().includes(t))),o}let e=lt(f);return b&&(e=e.filter(o=>{var i;return((i=R(o.id))==null?void 0:i.size)===b})),C==="not_reported"&&(e=e.filter(o=>!R(o.id))),C==="reported"&&(e=e.filter(o=>!!R(o.id))),t&&(e=e.filter(o=>(o.full_name||"").toLowerCase().includes(t)||(o.teacher_code||"").toLowerCase().includes(t))),e},St=()=>{c.querySelector("#color-cards").innerHTML="";const t=V==="personnel",e=f==="M"?"ชาย":f==="W"?"หญิง":f==="UNKNOWN"?"ที่ไม่ระบุเพศ":"ทั้งหมด",o=c.querySelector("#role-filter-row");o.innerHTML=`<div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1 mb-1">
      <button type="button" data-role="teacher" class="px-4 py-2 rounded-lg text-xs font-bold transition-all ${t?"text-slate-500":"bg-pink-600 text-white"}">👔 ครู</button>
      <button type="button" data-role="personnel" class="px-4 py-2 rounded-lg text-xs font-bold transition-all ${t?"bg-pink-600 text-white":"text-slate-500"}">🧑‍💼 บุคลากร</button>
    </div>`,o.querySelectorAll("[data-role]").forEach(l=>l.onclick=()=>{V=l.dataset.role,b=null,C="all",M=!1,A.clear(),L()});let i,u;if(t){const l=et(f);i=l.length,u=`บุคลากร${e} แจ้งไซซ์แล้ว ${l.length} คน (ไม่มีรายชื่อล่วงหน้า — พิมพ์ชื่อเองอิสระ)`}else{const l=lt(f);i=l.filter(a=>R(a.id)).length,u=`คุณครู${e} ${l.length} คน — แจ้งไซซ์แล้ว ${i} คน`}c.querySelector("#scope-line").textContent=u;const h=[["M","👦 ชาย"],["W","👧 หญิง"]];!t&&X.some(l=>!l.gender)&&h.push(["UNKNOWN","❔ ไม่ระบุเพศ"]);const r=l=>t?et(l):lt(l),s=(l,a)=>t?r(l).filter(m=>m.size===a).length:r(l).filter(m=>{var z;return((z=R(m.id))==null?void 0:z.size)===a}).length,p=l=>t?r(l).length:r(l).filter(a=>R(a.id)).length,g=l=>h.reduce((a,[m])=>a+s(m,l),0),T=h.reduce((l,[a])=>l+p(a),0);c.querySelector("#size-grid-wrap").innerHTML=`
      <p class="text-xs font-bold text-slate-500 mb-2">สรุปจำนวนไซซ์เสื้อ${t?"บุคลากร":"ครู"}ที่แจ้งแล้ว แยกชาย/หญิง — กดตัวเลขเพื่อกรองรายชื่อด้านล่าง</p>
      <table class="w-full text-xs border-collapse">
        <thead><tr>
          <th class="p-2 text-left border-b border-slate-200"></th>
          ${Q.map(l=>`<th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">${n(l)}</th>`).join("")}
          <th class="p-2 text-center border-b border-slate-200 text-slate-500 font-bold">รวม</th>
        </tr></thead>
        <tbody>
          ${h.map(([l,a])=>`<tr class="border-b border-slate-100">
            <td class="p-2 font-bold text-slate-600 whitespace-nowrap">${n(a)}</td>
            ${Q.map(m=>{const z=s(l,m),_=f===l&&b===m;return`<td class="p-1 text-center"><button type="button" data-tsize-cell data-tsize-gender="${n(l)}" data-tsize-size="${n(m)}" class="w-9 h-8 rounded-lg text-xs font-bold ${_?"bg-pink-600 text-white":z>0?"bg-slate-100 hover:bg-slate-200 text-slate-700":"text-slate-300"}">${z||"·"}</button></td>`}).join("")}
            <td class="p-1 text-center"><button type="button" data-tgender-total="${n(l)}" class="w-10 h-8 rounded-lg text-xs font-bold ${f===l&&!b?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${p(l)}</button></td>
          </tr>`).join("")}
          <tr>
            <td class="p-2 font-bold text-slate-600">รวม</td>
            ${Q.map(l=>`<td class="p-1 text-center"><button type="button" data-tsize-total="${n(l)}" class="w-9 h-8 rounded-lg text-xs font-bold ${f==="ALL"&&b===l?"bg-pink-600 text-white":"bg-slate-50 hover:bg-slate-100 text-slate-700"}">${g(l)}</button></td>`).join("")}
            <td class="p-1 text-center font-black text-slate-700">${T}</td>
          </tr>
        </tbody>
      </table>`,c.querySelectorAll("[data-tsize-cell]").forEach(l=>l.onclick=()=>{const a=l.dataset.tsizeGender,m=l.dataset.tsizeSize;f===a&&b===m?b=null:(f=a,b=m),L()}),c.querySelectorAll("[data-tgender-total]").forEach(l=>l.onclick=()=>{const a=l.dataset.tgenderTotal;f===a&&!b?f="ALL":(f=a,b=null),L()}),c.querySelectorAll("[data-tsize-total]").forEach(l=>l.onclick=()=>{const a=l.dataset.tsizeTotal;f==="ALL"&&b===a?b=null:(f="ALL",b=a),L()});const x=c.querySelector("#status-filter");t?x.innerHTML="":(x.innerHTML=[["all","ทั้งหมด"],["not_reported","ยังไม่แจ้ง"],["reported","แจ้งแล้ว"]].map(([l,a])=>`<button type="button" data-status="${l}" class="px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${C===l?"bg-pink-600 text-white":"text-slate-500"}">${n(a)}</button>`).join(""),x.querySelectorAll("[data-status]").forEach(l=>l.onclick=()=>{C=l.dataset.status,L()}));const y=st().sort((l,a)=>l.full_name.localeCompare(a.full_name,"th"));c.querySelector("#shirt-list").innerHTML=y.length?`
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table class="w-full text-xs">
          <thead><tr class="text-slate-400 text-left bg-slate-50">
            ${M?'<th class="p-2 w-8"></th>':""}${t?"":'<th class="p-2 font-bold">รหัส</th>'}<th class="p-2 font-bold">ชื่อ-สกุล</th><th class="p-2 font-bold text-center">ไซซ์ที่แจ้ง</th><th class="p-2 font-bold text-center">วันที่แจ้ง</th>
          </tr></thead>
          <tbody>${t?y.map(l=>`<tr class="border-t border-slate-100">
              ${M?`<td class="p-2"><input type="checkbox" data-select-id="${n(G(l))}" ${A.has(G(l))?"checked":""}></td>`:""}
              <td class="p-2">${n(l.full_name)}</td>
              <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">${n(l.size)}</span></td>
              <td class="p-2 text-center text-slate-400">${l.updated_at?new Date(l.updated_at).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</td>
            </tr>`).join(""):y.map(l=>{const a=R(l.id);return`<tr class="border-t border-slate-100">
              ${M?`<td class="p-2"><input type="checkbox" data-select-id="${n(G(l))}" ${A.has(G(l))?"checked":""}></td>`:""}
              <td class="p-2 w-24 text-slate-500">${n(l.teacher_code)}</td>
              <td class="p-2">${n(l.full_name)}</td>
              <td class="p-2 text-center">${a?`<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">${n(a.size)}</span>`:'<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-gray-100 text-gray-500">ยังไม่แจ้ง</span>'}</td>
              <td class="p-2 text-center text-slate-400">${a!=null&&a.updated_at?new Date(a.updated_at).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</td>
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>',M&&c.querySelectorAll("[data-select-id]").forEach(l=>l.onchange=()=>{l.checked?A.add(l.dataset.selectId):A.delete(l.dataset.selectId),L()}),c.querySelector("#print-content").innerHTML=kt(y,t)},kt=(t,e)=>{const o=M&&A.size?t.filter(r=>A.has(G(r))):t;if(!o.length)return"";const i=`<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${it.map(r=>`<img src="${r}" style="height:56px">`).join("")}</div>`,u=f==="M"?"ชาย":f==="W"?"หญิง":f==="UNKNOWN"?"ไม่ระบุเพศ":"";return`<div style="padding-top:12px">
      ${i}
      <div style="text-align:center;margin-bottom:10px">
        <h2 style="font-size:16px;margin:0 0 4px">${n(`รายชื่อ${e?"บุคลากร":"ครู"} — ไซซ์เสื้อกีฬาสี`)}${u?n(u):""}</h2>
        <p style="font-size:13px;margin:0;font-weight:bold">${n(dt)}</p>
      </div>
      <div style="text-align:center;margin-bottom:10px;font-size:12px">จำนวน: <b>${o.length}</b> คน</div>
      <table style="width:100%;border-collapse:collapse;font-size:10.5px">
        <thead><tr>
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
          ${e?"":'<th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>'}
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ไซซ์ที่แจ้ง</th>
          <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">วันที่แจ้ง</th>
        </tr></thead>
        <tbody>${o.map((r,s)=>{const p=e?r:R(r.id),g=e?r.size:(p==null?void 0:p.size)||"—",T=e?r.updated_at:p==null?void 0:p.updated_at;return`<tr>
            <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${s+1}</td>
            ${e?"":`<td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${n(r.teacher_code)}</td>`}
            <td style="border:1px solid #cbd5e1;padding:4px 6px">${n(r.full_name)}</td>
            <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${n(g)}</td>
            <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${T?new Date(T).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</td>
          </tr>`}).join("")}</tbody>
      </table>
    </div>`},Lt=t=>{const e=B(t);return e.length?`
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-slate-400 text-left bg-slate-50">
            <th class="p-2 font-bold">ห้อง</th><th class="p-2 font-bold">ครูที่ปรึกษา</th><th class="p-2 font-bold text-center">จำนวน</th>
            ${$==="size"?'<th class="p-2 font-bold text-center">นักเรียนแจ้งแล้ว</th><th class="p-2 font-bold text-center">ครูยืนยันแล้ว</th>':'<th class="p-2 font-bold text-center">ชำระแล้ว</th><th class="p-2 font-bold text-center">ยังไม่ชำระ</th>'}
          </tr></thead>
          <tbody>${e.map(({room:o,students:i})=>{const u=i.filter(s=>S(s).sizeReported).length,h=i.filter(s=>S(s).sizeOk).length,r=i.filter(s=>S(s).paid).length;return`<tr class="border-t border-slate-100">
              <td class="p-2 font-bold text-slate-700 whitespace-nowrap">${n(o)}</td>
              <td class="p-2 text-slate-600">${n(E(o))}</td>
              <td class="p-2 text-center">${i.length}</td>
              ${$==="size"?`
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${u===i.length?"bg-emerald-100 text-emerald-700":"bg-amber-100 text-amber-700"}">${u} / ${i.length}</span></td>
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${h===i.length?"bg-emerald-100 text-emerald-700":"bg-amber-100 text-amber-700"}">${h} / ${i.length}</span></td>
              `:`
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">${r}</span></td>
                <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">${i.length-r}</span></td>
              `}
            </tr>`}).join("")}</tbody>
        </table>
      </div>`:'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>'},L=()=>{c.querySelectorAll("[data-tab]").forEach(u=>{const h=u.dataset.tab===$;u.classList.toggle("bg-pink-600",h),u.classList.toggle("text-white",h)}),c.querySelector('[data-gender="UNKNOWN"]').classList.toggle("hidden",$!=="teacher"),c.querySelectorAll("[data-gender]").forEach(u=>{const h=u.dataset.gender===f;u.classList.toggle("bg-pink-600",h),u.classList.toggle("text-white",h)});const t=c.querySelector("#shirt-search");if(t.placeholder=$==="teacher"?"🔍 ค้นหาชื่อ...":"🔍 ค้นหาชื่อ/รหัส/ห้อง/สี — พิมพ์อะไรก็เจอ",t.value!==I&&(t.value=I),t.oninput=u=>{I=u.target.value,L()},$==="teacher"){c.querySelector("#level-filter-row").innerHTML="",_t(),St();return}c.querySelector("#role-filter-row").innerHTML="";const e=U(),o=f==="M"?"นักเรียนชาย":f==="W"?"นักเรียนหญิง":"นักเรียนทั้งหมด";c.querySelector("#scope-line").textContent=`${o} ${e.length} คน — กำลังแสดง ${Z().length} คนตามตัวกรองที่เลือก`,mt(),yt(),wt(),$t(),vt();const i=Z();if(D==="summary")c.querySelector("#shirt-list").innerHTML=Lt(i);else{const u=B(i);c.querySelector("#shirt-list").innerHTML=u.length?u.map(({room:h,students:r})=>`
        <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between gap-2 flex-wrap">
            <div><b class="text-sm">ห้อง ${n(h)}</b><span class="text-xs text-slate-500 ml-2">ครูที่ปรึกษา: ${n(E(h))}</span></div>
            <span class="text-xs text-slate-500 font-bold">${r.length} คน</span>
          </div>
          <table class="w-full text-xs">
            <thead><tr class="text-slate-400 text-left">
              <th class="p-2 font-bold">รหัส</th><th class="p-2 font-bold">ชื่อ-สกุล</th><th class="p-2 font-bold text-center">สี</th>
              ${$==="size"?'<th class="p-2 font-bold text-center">ไซซ์จำนง</th><th class="p-2 font-bold text-center">ไซซ์ยืนยัน</th><th class="p-2 font-bold text-center">สถานะไซซ์</th>':k?'<th class="p-2 font-bold text-center">สถานะชำระ</th><th class="p-2 font-bold text-right">จำนวนเงิน</th>':'<th class="p-2 font-bold text-center">สถานะชำระ</th>'}
            </tr></thead>
            <tbody>${r.sort((s,p)=>s.full_name.localeCompare(p.full_name,"th")).map(s=>{var T,x;const p=S(s),g=W.find(y=>y.id===s.team_color_id);return`<tr class="border-t border-slate-100">
                <td class="p-2 w-24 text-slate-500">${n(s.student_code)}</td>
                <td class="p-2">
                  <div class="flex items-center gap-2">
                    ${s.photo_url?`<img src="${n(s.photo_url)}" alt="" class="w-7 h-9 rounded-md object-cover border border-slate-200 bg-slate-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-7 h-9 rounded-md bg-slate-100 text-slate-400 grid place-items-center flex-shrink-0 border border-slate-200 text-[10px] font-bold">${n((s.full_name||"?").charAt(0))}</div>`}
                    <span>${n(s.full_name)}</span>
                  </div>
                </td>
                <td class="p-2 text-center"><span class="inline-flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:${n((g==null?void 0:g.hex_color)||"#94a3b8")}"></span>${n(s.color_name||"—")}</span></td>
                ${$==="size"?`
                  <td class="p-2 text-center">${n(((T=p.req)==null?void 0:T.requested_size)||"—")}</td>
                  <td class="p-2 text-center">${n(((x=p.req)==null?void 0:x.confirmed_size)||"—")}</td>
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${p.sizeOk?"bg-emerald-100 text-emerald-700":p.sizeStatus==="pending"?"bg-amber-100 text-amber-700":"bg-gray-100 text-gray-500"}">${n(rt(p.sizeStatus))}</span></td>
                `:k?q(s.gender)>0?`
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${p.paid?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}">${p.paid?"ชำระแล้ว":"ยังไม่ชำระ"}</span></td>
                  <td class="p-2 text-right">${p.paid?`${Number(p.pay.amount).toLocaleString("th-TH")} บาท`:"—"}</td>
                `:`
                  <td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">รอราคา</span></td>
                  <td class="p-2 text-right text-slate-400">—</td>
                `:'<td class="p-2 text-center"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">รอประกาศราคา</span></td>'}
              </tr>`}).join("")}</tbody>
          </table>
        </div>`).join(""):'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ ไม่มีรายชื่อตามเงื่อนไขที่เลือก</div>'}c.querySelector("#print-content").innerHTML=zt()||'<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>'};c.querySelectorAll("[data-tab]").forEach(t=>t.onclick=()=>{$=t.dataset.tab,$!=="teacher"&&f==="UNKNOWN"&&(f="ALL"),b=null,C="all",M=!1,A.clear(),L()}),c.querySelectorAll("[data-gender]").forEach(t=>t.onclick=()=>{f=t.dataset.gender,v&&!tt().some(e=>e.id===v)&&(v=null),L()}),c.querySelector("#btn-export-csv").onclick=()=>{var T;const t=x=>`"${String(x||"").replaceAll('"','""')}"`,e=f==="M"?"ชาย":f==="W"?"หญิง":f==="UNKNOWN"?"ไม่ระบุเพศ":"ทั้งหมด",o=b?`-${b}`:"";if($==="teacher"){const x=st().sort((_,j)=>_.full_name.localeCompare(j.full_name,"th")),y=V==="personnel",l=y?["ชื่อ-สกุล","ไซซ์ที่แจ้ง","วันที่แจ้ง"]:["รหัส","ชื่อ-สกุล","ไซซ์ที่แจ้ง","วันที่แจ้ง"],a=y?x.map(_=>[_.full_name,_.size||"",_.updated_at?new Date(_.updated_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""].map(t).join(",")):x.map(_=>{const j=R(_.id);return[_.teacher_code,_.full_name,(j==null?void 0:j.size)||"",j!=null&&j.updated_at?new Date(j.updated_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""].map(t).join(",")}),m=[l.map(t).join(","),...a],z=document.createElement("a");z.href=URL.createObjectURL(new Blob(["\uFEFF"+m.join(`
`)],{type:"text/csv"})),z.download=`ไซซ์เสื้อ${y?"บุคลากร":"ครู"}-${e}${o}.csv`,z.click(),URL.revokeObjectURL(z.href);return}const i=Z().sort(Ot),u=v?`-${((T=W.find(x=>x.id===v))==null?void 0:T.name)||""}`:"",h=N?`-ชั้น${N}`:"";if(D==="summary"){const x=B(i),y=$==="size"?["ห้อง","ครูที่ปรึกษา","จำนวน","นักเรียนแจ้งแล้ว","ครูยืนยันแล้ว"]:["ห้อง","ครูที่ปรึกษา","จำนวน","ชำระแล้ว","ยังไม่ชำระ"],l=x.map(({room:z,students:_})=>{if($==="size"){const K=_.filter(nt=>S(nt).sizeReported).length,ot=_.filter(nt=>S(nt).sizeOk).length;return[z,E(z),_.length,K,ot].map(t).join(",")}const j=_.filter(K=>S(K).paid).length;return[z,E(z),_.length,j,_.length-j].map(t).join(",")}),a=[y.map(t).join(","),...l],m=document.createElement("a");m.href=URL.createObjectURL(new Blob(["\uFEFF"+a.join(`
`)],{type:"text/csv"})),m.download=`สรุปตามห้อง-${$==="size"?"ไซซ์เสื้อ":"ค่าเสื้อ"}กีฬาสี-${e}${u}${h}${o}.csv`,m.click(),URL.revokeObjectURL(m.href);return}const r=$==="size"?["ห้อง","ครูที่ปรึกษา","รหัส","ชื่อ-สกุล","สี","ไซซ์ที่จำนง","ไซซ์ที่ยืนยัน","สถานะไซซ์"]:["ห้อง","ครูที่ปรึกษา","รหัส","ชื่อ-สกุล","สี","สถานะชำระ","วันที่ชำระ","จำนวนเงิน","วิธีชำระ"],s=i.map(x=>{var z,_;const y=S(x);if($==="size")return[x.main_room,E(x.main_room),x.student_code,x.full_name,x.color_name,((z=y.req)==null?void 0:z.requested_size)||"",((_=y.req)==null?void 0:_.confirmed_size)||"",rt(y.sizeStatus)].map(t).join(",");const l=q(x.gender)<=0?"รอประกาศราคา":y.paid?"ชำระแล้ว":"ยังไม่ชำระ",a=y.paid?new Date(y.pay.paid_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"",m=y.paid?y.pay.method==="qr"?"สแกน QR":"กรอกรหัส":"";return[x.main_room,E(x.main_room),x.student_code,x.full_name,x.color_name,l,a,y.paid?Number(y.pay.amount):"",m].map(t).join(",")}),p=[r.map(t).join(","),...s],g=document.createElement("a");g.href=URL.createObjectURL(new Blob(["\uFEFF"+p.join(`
`)],{type:"text/csv"})),g.download=`${$==="size"?"ไซซ์เสื้อ":"ค่าเสื้อ"}กีฬาสี-${e}${u}${h}${o}.csv`,g.click(),URL.revokeObjectURL(g.href)},c.querySelector("#btn-print").onclick=()=>window.print(),L()}async function Mt(){const d=sessionStorage.getItem(at);if(d)try{const w=await bt(d);xt(w);return}catch{sessionStorage.removeItem(at)}Ct(xt)}Mt();
