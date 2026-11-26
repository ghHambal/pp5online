import{s as M}from"./supabase-BV-W2lsh.js";/* empty css             */const w="sports_dues_monitor_pw",a=document.getElementById("dues-monitor-root"),O="โรงเรียนมูลนิธิอาซิซสถานร่วมกับวิทยาลัยเทคโนโลยีอาซิซสถานพณิชยการ",I=["https://lh3.googleusercontent.com/d/1JDduqJInp2BjORgZhhUgv80fXtMs3JzV","https://lh3.googleusercontent.com/d/1lXMVnPf8rIl5SBzqZeSCEtbpf6U7idWa","https://lh3.googleusercontent.com/d/1JPmgiu_pgACGYTymHsLqROm1GrzZSklP"],b=t=>String(t??"").replace(/[&<>"']/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[s]),R=t=>t?`<img src="${b(t)}" style="width:20px;height:26px;border-radius:4px;object-fit:cover;border:1px solid #cbd5e1;vertical-align:middle;margin-right:5px">`:"",y=t=>{const s=String(t||"").match(/ม\.(\d+)\/(\d+)/);return s?[parseInt(s[1]),parseInt(s[2])]:String(t||"").startsWith("ปวช.")?[parseInt(t.split(".")[1])+6,1]:[99,99]},v=t=>{const s=String(t||"ไม่ระบุ");return s.startsWith("ปวช.")?"ปวช.":s.split("/")[0]||"ไม่ระบุ"},S=t=>t.startsWith("ปวช.")?100:parseInt(t.replace("ม.",""))||99,k=(t,s)=>{const[d,g]=[y(t.main_room),y(s.main_room)];return d[0]-g[0]||d[1]-g[1]||t.full_name.localeCompare(s.full_name,"th")};async function j(t){const{data:s,error:d}=await M.rpc("get_public_sports_dues_snapshot",{p_password:t});if(d)throw d;return s}function z(t){a.innerHTML=`
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับฝ่ายที่ได้รับสิทธิ์เข้าถึงข้อมูลค่าบำรุงสีเท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าดูข้อมูล</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`;const s=a.querySelector("#gate-password"),d=a.querySelector("#gate-error"),g=async()=>{const x=s.value.trim();if(x){a.querySelector("#gate-submit").disabled=!0;try{const m=await j(x);sessionStorage.setItem(w,x),t(m)}catch{d.classList.remove("hidden"),a.querySelector("#gate-submit").disabled=!1}}};a.querySelector("#gate-submit").onclick=g,s.addEventListener("keydown",x=>{x.key==="Enter"&&g()})}function L(t){const s=Number(t.dues_amount)||30;let d="M";a.innerHTML=`
    <div class="space-y-4">
      <div class="no-print flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 นักเรียนชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 นักเรียนหญิง</button>
        </div>
        <p class="text-xs text-slate-500 font-bold">ค่าบำรุงสีคนละ ${s.toLocaleString("th-TH")} บาท</p>
      </div>
      <div id="summary-cards" class="no-print grid grid-cols-2 sm:grid-cols-4 gap-3"></div>
      <div class="no-print flex flex-wrap gap-2">
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ส่งออก CSV</button>
        <button id="btn-print" class="px-4 py-2 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold">🖨️ พิมพ์เอกสาร</button>
      </div>
      <div id="unpaid-list" class="no-print space-y-4"></div>
      <div id="print-content" class="print-only"></div>
    </div>`;const g=o=>(t.students||[]).filter(i=>i.gender===o),x=new Set((t.dues||[]).map(o=>o.student_id)),m=o=>(t.dues||[]).find(i=>i.student_id===o),_=()=>{const o=g(d),i=o.filter(p=>x.has(p.id)),l=o.filter(p=>!x.has(p.id));return{students:o,paid:i,unpaid:l}},q=()=>{const o=g(d),i=o.filter(n=>!x.has(n.id)),l={};o.forEach(n=>{const e=v(n.main_room);l[e]=l[e]||{total:0,paid:0,students:[]},l[e].total++}),o.forEach(n=>{x.has(n.id)&&l[v(n.main_room)].paid++}),i.forEach(n=>{l[v(n.main_room)].students.push(n)});const p=Object.keys(l).sort((n,e)=>S(n)-S(e)),c=`<div style="display:flex;justify-content:center;gap:10px;margin-bottom:8px">${I.map(n=>`<img src="${n}" style="height:56px">`).join("")}</div>`;return p.map((n,e)=>{const r=l[n],u=[...r.students].sort(k),h=r.total?Math.round(r.paid/r.total*100):0;return`<div style="${e>0?"page-break-before:always;":""}padding-top:12px">
        ${c}
        <div style="text-align:center;margin-bottom:10px">
          <h2 style="font-size:16px;margin:0 0 4px">รายชื่อนักเรียน${d==="M"?"ชาย":"หญิง"}ที่ยังไม่ชำระค่าบำรุงสี</h2>
          <p style="font-size:13px;margin:0;font-weight:bold">${b(O)}</p>
          <p style="font-size:14px;margin:6px 0 0;font-weight:bold">ชั้น ${b(n)}</p>
        </div>
        <div style="display:flex;justify-content:center;gap:14px;margin-bottom:12px;font-size:12px">
          <span>นักเรียนทั้งหมด: <b>${r.total}</b></span>
          <span style="color:#059669">จ่ายแล้ว: <b>${r.paid}</b></span>
          <span style="color:#dc2626">ยังไม่จ่าย: <b>${r.students.length}</b></span>
          <span>คิดเป็น: <b>${h}%</b></span>
        </div>
        ${u.length?`<table style="width:100%;border-collapse:collapse;font-size:11px">
          <thead><tr>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">เลขที่</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">รหัส</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;text-align:left;width:100%">ชื่อ-สกุล</th>
            <th style="border:1px solid #cbd5e1;padding:4px 6px;background:#f1f5f9;white-space:nowrap">ห้อง</th>
          </tr></thead>
          <tbody>${u.map((f,E)=>`
            <tr>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${E+1}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${b(f.student_code)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px">${R(f.photo_url)}${b(f.full_name)}</td>
              <td style="border:1px solid #cbd5e1;padding:4px 6px;text-align:center;white-space:nowrap">${b(f.main_room||"—")}</td>
            </tr>`).join("")}</tbody>
        </table>`:'<p style="text-align:center;color:#059669;font-weight:bold">✅ จ่ายค่าบำรุงครบทุกคนในชั้นนี้</p>'}
      </div>`}).join("")},$=()=>{a.querySelectorAll("[data-gender]").forEach(e=>e.classList.toggle("bg-pink-600",e.dataset.gender===d)),a.querySelectorAll("[data-gender]").forEach(e=>e.classList.toggle("text-white",e.dataset.gender===d));const{students:o,paid:i,unpaid:l}=_();o.length&&Math.round(i.length/o.length*100);const p=i.reduce((e,r)=>{var u;return e+(Number((u=m(r.id))==null?void 0:u.amount)||0)},0);a.querySelector("#summary-cards").innerHTML=`
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">นักเรียนทั้งหมด</p><b class="text-xl">${o.length}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">จ่ายแล้ว</p><b class="text-xl text-emerald-700">${i.length}</b></div>
      <div class="bg-red-50 rounded-xl border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">ยังไม่จ่าย</p><b class="text-xl text-red-700">${l.length}</b></div>
      <div class="bg-slate-100 rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">รวมเงินที่เก็บได้</p><b class="text-xl">${p.toLocaleString("th-TH")}</b></div>`;const c={};l.forEach(e=>{(c[e.main_room||"ไม่ระบุห้อง"]=c[e.main_room||"ไม่ระบุห้อง"]||[]).push(e)});const n=Object.keys(c).sort((e,r)=>{const[u,h]=[y(e),y(r)];return u[0]-h[0]||u[1]-h[1]});a.querySelector("#unpaid-list").innerHTML=n.length?n.map(e=>`
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
          <b class="text-sm">ห้อง ${b(e)}</b>
          <span class="text-xs text-red-600 font-bold">ยังไม่จ่าย ${c[e].length} คน</span>
        </div>
        <table class="w-full text-xs">
          <tbody>${c[e].sort((r,u)=>r.full_name.localeCompare(u.full_name,"th")).map(r=>`
            <tr class="border-t border-slate-100">
              <td class="p-2 w-24 text-slate-500">${b(r.student_code)}</td>
              <td class="p-2">
                <div class="flex items-center gap-2">
                  ${r.photo_url?`<img src="${b(r.photo_url)}" alt="" class="w-7 h-9 rounded-md object-cover border border-slate-200 bg-slate-100 flex-shrink-0 shadow-sm" loading="lazy">`:`<div class="w-7 h-9 rounded-md bg-slate-100 text-slate-400 grid place-items-center flex-shrink-0 border border-slate-200 text-[10px] font-bold">${b((r.full_name||"?").charAt(0))}</div>`}
                  <span>${b(r.full_name)}</span>
                </div>
              </td>
            </tr>
          `).join("")}</tbody>
        </table>
      </div>`).join(""):'<div class="bg-emerald-50 rounded-xl border border-emerald-200 p-6 text-center text-emerald-700 font-bold text-sm">✅ จ่ายค่าบำรุงครบทุกคนแล้ว</div>',a.querySelector("#print-content").innerHTML=q()||'<p style="text-align:center;padding:40px">ไม่มีข้อมูลนักเรียน</p>'};a.querySelectorAll("[data-gender]").forEach(o=>o.onclick=()=>{d=o.dataset.gender,$()}),a.querySelector("#btn-export-csv").onclick=()=>{const o=c=>`"${String(c||"").replaceAll('"','""')}"`,{unpaid:i}=_(),l=["ห้อง,รหัส,ชื่อ-สกุล,สถานะ",...i.sort(k).map(c=>[c.main_room,c.student_code,c.full_name,"ยังไม่จ่าย"].map(o).join(","))],p=document.createElement("a");p.href=URL.createObjectURL(new Blob(["\uFEFF"+l.join(`
`)],{type:"text/csv"})),p.download=`ยังไม่จ่ายค่าบำรุง-${d==="M"?"ชาย":"หญิง"}.csv`,p.click(),URL.revokeObjectURL(p.href)},a.querySelector("#btn-print").onclick=()=>window.print(),$()}async function H(){const t=sessionStorage.getItem(w);if(t)try{const s=await j(t);L(s);return}catch{sessionStorage.removeItem(w)}z(L)}H();
