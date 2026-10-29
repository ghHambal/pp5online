import{s as H}from"./supabase-BV-W2lsh.js";/* empty css             */const y="sports_fund_monitor_pw",l=document.getElementById("fund-monitor-root"),g=o=>String(o??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),_=o=>({school_support:"เงินสนับสนุนโรงเรียน",prize:"เงินรางวัล",expense:"รายจ่าย"})[o]||o;async function L(o){const{data:a,error:x}=await H.rpc("get_public_sports_fund_snapshot",{p_password:o});if(x)throw x;return a}function j(o){l.innerHTML=`
    <div class="max-w-sm mx-auto mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
      <div class="text-center">
        <span class="text-3xl">🔒</span>
        <h2 class="font-bold text-slate-800 mt-2">กรุณาใส่รหัสผ่าน</h2>
        <p class="text-xs text-slate-500 mt-1">สำหรับผู้บริหาร/ฝ่ายการเงินที่ได้รับสิทธิ์เข้าถึงข้อมูลนี้เท่านั้น</p>
      </div>
      <input id="gate-password" type="password" placeholder="รหัสผ่าน" class="w-full border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-center tracking-widest" autofocus>
      <button id="gate-submit" class="w-full py-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold">เข้าดูข้อมูล</button>
      <p id="gate-error" class="text-xs text-red-500 text-center hidden">รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่</p>
    </div>`;const a=l.querySelector("#gate-password"),x=l.querySelector("#gate-error"),u=async()=>{const d=a.value.trim();if(d){l.querySelector("#gate-submit").disabled=!0;try{const m=await L(d);sessionStorage.setItem(y,d),o(m)}catch{x.classList.remove("hidden"),l.querySelector("#gate-submit").disabled=!1}}};l.querySelector("#gate-submit").onclick=u,a.addEventListener("keydown",d=>{d.key==="Enter"&&u()})}function S(o){const a=o.team_colors||[],x=o.dues_by_team||{},u=o.entries||[];let d="ALL";const m=()=>d==="ALL"?a:a.filter(e=>e.gender===d),$=e=>u.filter(n=>n.team_color_id===e),h=(e,n)=>$(e).filter(i=>i.category===n).reduce((i,p)=>i+Number(p.amount||0),0),v=e=>{const n=Number(x[e])||0,i=h(e,"school_support"),p=h(e,"prize"),b=h(e,"expense");return{dues:n,support:i,prize:p,expense:b,balance:n+i+p-b}};l.innerHTML=`
    <div class="space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="inline-flex p-1 rounded-xl bg-slate-100 gap-1">
          <button type="button" data-gender="M" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👦 ชาย</button>
          <button type="button" data-gender="W" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👧 หญิง</button>
          <button type="button" data-gender="ALL" class="px-4 py-2 rounded-lg text-xs font-bold transition-all">👥 ทั้งหมด</button>
        </div>
        <button id="btn-export-csv" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold">⬇️ ดาวน์โหลด Excel (CSV)</button>
      </div>
      <div id="grand-summary" class="grid grid-cols-2 sm:grid-cols-5 gap-3"></div>
      <div id="color-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"></div>
      <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div class="p-3 border-b border-slate-200 bg-slate-50"><b class="text-sm">รายการละเอียดทั้งหมด (เงินสนับสนุน/รางวัล/รายจ่าย)</b></div>
        <div id="entries-table" class="overflow-x-auto"></div>
      </div>
    </div>`;const w=()=>{l.querySelectorAll("[data-gender]").forEach(t=>{const s=t.dataset.gender===d;t.classList.toggle("bg-pink-600",s),t.classList.toggle("text-white",s)});const e=m(),n=e.reduce((t,s)=>{const c=v(s.id);return t.dues+=c.dues,t.support+=c.support,t.prize+=c.prize,t.expense+=c.expense,t.balance+=c.balance,t},{dues:0,support:0,prize:0,expense:0,balance:0});l.querySelector("#grand-summary").innerHTML=`
      <div class="bg-white rounded-xl border border-slate-200 p-3 text-center"><p class="text-[10px] text-slate-500 font-bold">ค่าบำรุงสีรวม</p><b class="text-lg">${n.dues.toLocaleString("th-TH")}</b></div>
      <div class="bg-blue-50 rounded-xl border border-blue-200 p-3 text-center"><p class="text-[10px] text-blue-600 font-bold">สนับสนุนโรงเรียน</p><b class="text-lg text-blue-700">${n.support.toLocaleString("th-TH")}</b></div>
      <div class="bg-amber-50 rounded-xl border border-amber-200 p-3 text-center"><p class="text-[10px] text-amber-600 font-bold">เงินรางวัลรวม</p><b class="text-lg text-amber-700">${n.prize.toLocaleString("th-TH")}</b></div>
      <div class="bg-red-50 rounded-xl border border-red-200 p-3 text-center"><p class="text-[10px] text-red-600 font-bold">รายจ่ายรวม</p><b class="text-lg text-red-700">${n.expense.toLocaleString("th-TH")}</b></div>
      <div class="bg-emerald-50 rounded-xl border border-emerald-200 p-3 text-center"><p class="text-[10px] text-emerald-600 font-bold">คงเหลือรวม</p><b class="text-lg text-emerald-700">${n.balance.toLocaleString("th-TH")}</b></div>`,l.querySelector("#color-cards").innerHTML=e.map(t=>{const s=v(t.id);return`<div class="bg-white rounded-xl border border-slate-200 p-3">
        <div class="flex items-center gap-2 mb-2"><span class="w-3 h-3 rounded-full flex-shrink-0" style="background:${g(t.hex_color)}"></span><b class="text-sm">สี${g(t.name)}</b></div>
        <div class="space-y-1 text-xs">
          <div class="flex justify-between"><span class="text-slate-500">ค่าบำรุงสี</span><b>${s.dues.toLocaleString("th-TH")}</b></div>
          <div class="flex justify-between"><span class="text-slate-500">สนับสนุนโรงเรียน</span><b>${s.support.toLocaleString("th-TH")}</b></div>
          <div class="flex justify-between"><span class="text-slate-500">เงินรางวัล</span><b>${s.prize.toLocaleString("th-TH")}</b></div>
          <div class="flex justify-between"><span class="text-red-500">รายจ่าย</span><b class="text-red-600">-${s.expense.toLocaleString("th-TH")}</b></div>
          <div class="flex justify-between pt-1.5 mt-1.5 border-t border-slate-100"><span class="font-bold text-emerald-600">คงเหลือ</span><b class="text-emerald-700">${s.balance.toLocaleString("th-TH")}</b></div>
        </div>
      </div>`}).join("")||'<p class="col-span-full text-center text-slate-400 py-8">ไม่มีข้อมูลสี</p>';const i=new Set(e.map(t=>t.id)),p=t=>{var s;return((s=a.find(c=>c.id===t))==null?void 0:s.name)||"—"},b=u.filter(t=>i.has(t.team_color_id)).sort((t,s)=>t.entry_date<s.entry_date?1:-1);l.querySelector("#entries-table").innerHTML=b.length?`<table class="w-full text-xs">
      <thead><tr class="bg-slate-50 text-slate-500 text-left"><th class="p-2 font-bold">วันที่</th><th class="p-2 font-bold">สี</th><th class="p-2 font-bold">ประเภท</th><th class="p-2 font-bold">รายละเอียด</th><th class="p-2 font-bold text-right">จำนวนเงิน</th><th class="p-2 font-bold">บันทึกโดย</th></tr></thead>
      <tbody>${b.map(t=>`<tr class="border-t border-slate-100">
        <td class="p-2 whitespace-nowrap">${new Date(t.entry_date).toLocaleDateString("th-TH",{day:"2-digit",month:"short",year:"2-digit"})}</td>
        <td class="p-2 whitespace-nowrap">สี${g(p(t.team_color_id))}</td>
        <td class="p-2 whitespace-nowrap">${g(_(t.category))}</td>
        <td class="p-2">${g(t.description)}</td>
        <td class="p-2 text-right font-bold ${t.category==="expense"?"text-red-600":"text-emerald-600"}">${t.category==="expense"?"-":"+"}${Number(t.amount).toLocaleString("th-TH")}</td>
        <td class="p-2 whitespace-nowrap">${g(t.recorded_by_name)}</td>
      </tr>`).join("")}</tbody>
    </table>`:'<p class="text-center text-slate-400 py-8 text-sm">ยังไม่มีรายการ</p>'};l.querySelectorAll("[data-gender]").forEach(e=>e.onclick=()=>{d=e.dataset.gender,w()}),l.querySelector("#btn-export-csv").onclick=()=>{const e=r=>`"${String(r||"").replaceAll('"','""')}"`,n=new Set(m().map(r=>r.id)),i=r=>{var f;return((f=a.find(T=>T.id===r))==null?void 0:f.name)||"—"},p=u.filter(r=>n.has(r.team_color_id)).sort((r,f)=>r.entry_date<f.entry_date?1:-1),b=["วันที่","สี","ประเภท","รายละเอียด","จำนวนเงิน","บันทึกโดย"],t=p.map(r=>[r.entry_date,`สี${i(r.team_color_id)}`,_(r.category),r.description,(r.category==="expense"?-1:1)*Number(r.amount),r.recorded_by_name].map(e).join(",")),s=[b.map(e).join(","),...t],c=document.createElement("a");c.href=URL.createObjectURL(new Blob(["\uFEFF"+s.join(`
`)],{type:"text/csv"})),c.download=`บัญชีเงินกีฬาสี-${d==="M"?"ชาย":d==="W"?"หญิง":"ทั้งหมด"}.csv`,c.click(),URL.revokeObjectURL(c.href)},w()}async function k(){const o=sessionStorage.getItem(y);if(o)try{const a=await L(o);S(a);return}catch{sessionStorage.removeItem(y)}j(S)}k();
