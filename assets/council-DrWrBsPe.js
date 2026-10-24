import{s as nr}from"./supabase-BV-W2lsh.js";/* empty css             *//* empty css                                  */import{b as Xa}from"./anti-pull-refresh-BGrI1pMY.js";import{a as g,g as k}from"./ui-ByLHWuG5.js";import{c as Za}from"./ai-prompt-gate-D6R7FVed.js";import{g as en}from"./student-api-BQ1kZS0c.js";import{getMyTeacherProfile as tn,getMyHomeroomRooms as rn,getTeachers as an}from"./api-CQwFwlFA.js";import{uploadCouncilApplicationPhoto as nn,uploadCouncilCertificate as sn,uploadCertificateTemplateImage as on,uploadCouncilTeacherPhoto as ln,uploadCouncilTeacherSignature as dn}from"./storage-CuUjCgvI.js";import{u as cn,c as la,s as da,a as un,r as Pr,b as Or,d as pn,p as mn,e as bn,g as Rt,f as vn,h as xn,i as fn,j as St,k as sr,l as Ye,m as Me,n as wr,o as ca,q as ua,t as pa,v as gn,w as yn,x as hn,y as kr,z as _n,A as or,B as $n,C as wn,D as kn,E as En,F as An,G as Sn,H as In,I as Cn,J as Ln,K as Tn,L as Nn,M as qn,N as jn,O as Rn,P as Dn,Q as Mn,R as Bn,S as Pn,T as On,U as Fn,V as Yn,W as zn,X as Gn,Y as Vn,Z as Un,_ as ma,$ as Wn,a0 as Fr,a1 as Hn,a2 as Jn,a3 as Qn,a4 as Kn,a5 as Xn,a6 as Zn,a7 as es,a8 as ts,a9 as rs,aa as as,ab as ns,ac as ss,ad as os,ae as is,af as ls,ag as $t,ah as ds,ai as cs,aj as us,ak as ps,al as ms,am as bs,an as vs,ao as xs,ap as fs,aq as gs,ar as ys,as as hs,at as _s,au as $s,av as ws,aw as ks,ax as Es,ay as As,az as ba,aA as Kt,aB as Ss,aC as Is,aD as Cs,aE as Ls,aF as Ts,aG as Ns,aH as qs,aI as js,aJ as Rs,aK as Ds,aL as Ms,aM as Bs,aN as Ps,aO as Os,aP as Fs,aQ as Ys,aR as zs,aS as Gs,aT as Vs,aU as Us,aV as Ws,aW as Hs,aX as ir,aY as Js,aZ as Qs,a_ as Ks,a$ as Xs,b0 as Zs,b1 as eo,b2 as va}from"./council-api-Dh8lgCs9.js";import{i as to,o as ro,d as ao,c as no,a as so,u as oo,C as Xt,g as io,b as lo}from"./certificate-engine-C9CSnChU.js";import{o as co}from"./certificate-editor-83ibZcxD.js";import{o as Ie}from"./print-overlay-BVfxEd6n.js";import{b as uo}from"./browser-JP79f-a9.js";import"./assignment-annotations-api-Y9qfMpYa.js";import"./supabase-errors-BniCCodr.js";import"./teacher-views-utils-BqsVDKnm.js";import"./score-display-CQ4dUIPx.js";import"./impersonation-0xVfgYVY.js";import"./skill-groups-BY1NTbf4.js";function nt(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),n=t.createGain();r.connect(n),n.connect(t.destination),e==="success"?(r.type="sine",r.frequency.setValueAtTime(880,t.currentTime),n.gain.setValueAtTime(.08,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),r.start(),r.stop(t.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,t.currentTime),n.gain.setValueAtTime(.12,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),r.start(),r.stop(t.currentTime+.3))}catch{}}async function po(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>e(window.Html5Qrcode),r.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}function ze(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function mo(e){var q;const{activityId:t,activityTitle:r,members:n,alreadyChecked:i,onCheckedIn:o,onUndo:a,openToGeneral:s}=e;(q=document.getElementById("council-checkin-overlay"))==null||q.remove();const c=document.createElement("div");c.id="council-checkin-overlay",c.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",c.innerHTML=`
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนเช็คอินกิจกรรม</h3>
        <p class="text-xs text-slate-400 truncate">${ze(r??"")}</p>
      </div>
      <button id="ccs-close" class="text-slate-400 hover:text-white text-2xl leading-none px-2">&times;</button>
    </div>
    <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-4 max-w-md mx-auto w-full">
      <div id="ccs-camera-container" class="relative w-full aspect-square bg-black rounded-2xl overflow-hidden">
        <div id="ccs-camera-reader" class="w-full h-full"></div>
        <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative w-48 h-48 rounded-2xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.4)] overflow-hidden">
            <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-sky-400 rounded-tl"></div>
            <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-sky-400 rounded-tr"></div>
            <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-sky-400 rounded-bl"></div>
            <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-sky-400 rounded-br"></div>
            <div class="ccs-laser absolute left-0 w-full h-0.5 bg-sky-400"></div>
          </div>
        </div>
      </div>
      <div id="ccs-feedback" class="min-h-[70px]">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-center text-xs text-slate-400">
          ยกกล้องส่อง QR ของ${s?"นักเรียน":"สมาชิกสภา"}เพื่อเช็คอิน
        </div>
      </div>
      <form id="ccs-manual-form" class="flex gap-2">
        <input id="ccs-manual-code" type="text" inputmode="numeric" placeholder="หรือพิมพ์รหัสนักเรียนแล้วกด Enter" class="flex-1 min-w-0 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500" />
        <button type="submit" class="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex-shrink-0">เช็คอิน</button>
      </form>
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3">
        <div class="flex items-center justify-between gap-2 mb-2">
          <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">เช็คอินแล้วรอบนี้</p>
          <span id="ccs-history-count" class="text-[10px] font-bold text-sky-400">0 คน</span>
        </div>
        <div id="ccs-history-list" class="space-y-1.5 text-xs max-h-40 overflow-y-auto pr-1">
          <p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>
        </div>
      </div>
    </div>`,document.body.appendChild(c);const m=[];let p=null,u=null,x=0;const b=new Set(i??[]),v=()=>{const A=c.querySelector("#ccs-history-list"),I=c.querySelector("#ccs-history-count");if(I.textContent=`${m.length} คน`,!m.length){A.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}A.innerHTML=m.map(E=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${ze(E.name)}</span>
        <span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span>
        <button data-ccs-undo="${ze(E.studentId)}" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>
      </div>`).join("")};async function y(A){var N;const I=n.find(B=>{var V;return((V=B.students)==null?void 0:V.student_code)===A});if(I)return{studentId:I.student_id,name:((N=I.students)==null?void 0:N.full_name)??"—"};if(!s)return null;const L=(await da(A).catch(()=>[])).find(B=>B.student_code===A);return L?{studentId:L.id,name:L.full_name}:null}async function _(A){const I=c.querySelector("#ccs-camera-container"),E=c.querySelector("#ccs-feedback"),L=B=>{I.classList.add(B?"ccs-flash-success":"ccs-flash-error"),setTimeout(()=>I.classList.remove(B?"ccs-flash-success":"ccs-flash-error"),500)},N=await y(A);if(!N){nt("error"),L(!1),E.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${s?"นักเรียน":"สมาชิกสภา"}รหัสนี้</div>`;return}if(b.has(N.studentId)){nt("error"),L(!1),E.innerHTML=`<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${ze(N.name)} เช็คอินไปแล้ว</div>`;return}try{await la({activityId:t,studentId:N.studentId}),b.add(N.studentId),nt("success"),L(!0),E.innerHTML=`<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ เช็คอิน ${ze(N.name)} สำเร็จ</div>`,m.unshift({name:N.name,studentId:N.studentId}),v(),o==null||o(N.studentId)}catch(B){nt("error"),L(!1),E.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${ze(k(B))}</div>`,g("เช็คอินไม่สำเร็จ: "+k(B),"error")}}async function S(A){let I=A;if(A.startsWith("SQ:")){const[,E,L]=A.split(":"),N=Math.floor(Date.now()/1e3)-parseInt(L,10);if(N>60||N<-60){const B=c.querySelector("#ccs-feedback"),V=c.querySelector("#ccs-camera-container");nt("error"),V.classList.add("ccs-flash-error"),setTimeout(()=>V.classList.remove("ccs-flash-error"),500),B.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>';return}I=E}await _(I)}c.querySelector("#ccs-manual-form").addEventListener("submit",async A=>{A.preventDefault();const I=c.querySelector("#ccs-manual-code"),E=I.value.trim();E&&(await _(E),I.value="",I.focus())}),c.querySelector("#ccs-history-list").addEventListener("click",async A=>{const I=A.target.closest("[data-ccs-undo]");if(!I)return;const E=Number(I.dataset.ccsUndo);I.disabled=!0;try{await cn({activityId:t,studentId:E}),b.delete(E);const L=m.findIndex(N=>N.studentId===E);L!==-1&&m.splice(L,1),v(),a==null||a(E)}catch(L){g("ยกเลิกไม่สำเร็จ: "+k(L),"error"),I.disabled=!1}}),c.querySelector("#ccs-close").addEventListener("click",async()=>{if(p)try{await p.stop()}catch{}c.remove()}),(async()=>{try{const A=await po();p=new A("ccs-camera-reader"),await p.start({facingMode:"environment"},{fps:25,aspectRatio:1},I=>{I===u&&Date.now()-x<2e3||(u=I,x=Date.now(),S(I))},()=>{})}catch(A){g("ไม่สามารถเปิดกล้องได้: "+k(A),"error"),c.remove()}})()}const P=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ke=e=>String(e).replace(/[0-9]/g,t=>"๐๑๒๓๔๕๖๗๘๙"[Number(t)]),lr=e=>String(e??"").replace(/[๐-๙]/g,t=>String("๐๑๒๓๔๕๖๗๘๙".indexOf(t))).replace(/ข้อ\s*ที่/g,"ข้อ").replace(/\s+/g," ").trim(),dr={draft:"ฉบับร่าง",pending_approval:"รออนุมัติ",approved:"อนุมัติแล้ว",advisor_review:"รอครูที่ปรึกษาตรวจ",student_affairs_review:"รอหัวหน้าฝ่ายกิจการนักเรียนตรวจ",management_review:"รอผู้บริหารอนุมัติ",published:"ประกาศแล้ว",effective:"มีผลบังคับใช้",superseded:"ถูกแทนที่ด้วยฉบับใหม่",archived:"เก็บถาวร"};let w={versions:null,selectedVersionId:null,content:null,loading:!1,error:null,query:"",sectionFilter:"all",editingClauseId:null,addingClause:!1,routeClauseNo:null,focusRouteClause:!1};function xa(){const e=Number(new URLSearchParams(window.location.search).get("clause"));return Number.isInteger(e)&&e>0?e:null}function bo(){const e=xa();e!==w.routeClauseNo&&(e?(w.routeClauseNo=e,w.query="ข้อที่ "+e,w.focusRouteClause=!0):(w.routeClauseNo&&w.query==="ข้อที่ "+w.routeClauseNo&&(w.query=""),w.routeClauseNo=null,w.focusRouteClause=!1))}function Zt(){w.routeClauseNo=null,w.focusRouteClause=!1;const e=new URL(window.location.href);e.searchParams.delete("clause"),window.history.replaceState(null,"",e)}function fa(){var e;return(w.versions??[]).find(t=>t.id===w.selectedVersionId)??((e=w.versions)==null?void 0:e[0])??null}async function cr(e){var t;w.loading=!0,w.error=null,e();try{w.versions=await xn(),w.selectedVersionId=w.selectedVersionId??((t=w.versions[0])==null?void 0:t.id)??null,w.content=w.selectedVersionId?await Rt(w.selectedVersionId):{sections:[],clauses:[]};const r=xa();r&&(w.routeClauseNo=r,w.query="ข้อที่ "+r,w.focusRouteClause=!0)}catch(r){w.error=r}finally{w.loading=!1,e()}}async function vo(e){if(w.selectedVersionId){w.loading=!0,w.error=null,e();try{w.content=await Rt(w.selectedVersionId)}catch(t){w.error=t}finally{w.loading=!1,e()}}}function xo(e){w.versions===null&&!w.loading&&cr(e)}function ga(e,t,r){const n=new Map(t.map(o=>[o.id,o])),i=lr(w.query).toLocaleLowerCase();return r.filter(o=>{const a=n.get(o.section_id);if(w.sectionFilter!=="all"&&String(a==null?void 0:a.id)!==String(w.sectionFilter))return!1;if(!i)return!0;const s=[o.clause_no,"ข้อ "+o.clause_no,"ข้อที่ "+o.clause_no,o.title,o.body,...o.keywords??[],a==null?void 0:a.title,"หมวด "+((a==null?void 0:a.section_no)??""),e==null?void 0:e.title].filter(Boolean).join(" ");return lr(s).toLocaleLowerCase().includes(i)})}function fo(e,t,r,n=""){const o=t.map(c=>({section:c,clauses:r.filter(m=>m.section_id===c.id)})).filter(c=>c.clauses.length).map(c=>{const m='<div class="section">หมวด '+ke(c.section.section_no)+"<br>"+P(c.section.title)+"</div>",p=c.clauses.map(u=>'<div class="clause"><span class="clause-no">ข้อ '+ke(u.clause_no)+"</span>  "+P(u.body)+"</div>").join("");return m+p}).join(""),a=String((e==null?void 0:e.source_document_url)??"").startsWith("http")?'<p class="source">แหล่งต้นฉบับ: <a href="'+P(e.source_document_url)+'">'+P(e.source_document_url)+"</a></p>":"",s=["published","effective"].includes(e==null?void 0:e.status)&&((e==null?void 0:e.status)==="effective"||(e==null?void 0:e.is_active)&&(e==null?void 0:e.effective_date)&&new Date(e.effective_date)<=new Date);return'<!doctype html><html lang="th"><head><meta charset="utf-8"><title>'+P(e==null?void 0:e.title)+'</title><style>@page{size:A4;margin:18mm 18mm 16mm}*{box-sizing:border-box}body{font-family:"TH SarabunPSK","TH Sarabun New",Sarabun,sans-serif;color:#111;font-size:16pt;line-height:1.35}h1{text-align:center;font-size:22pt;margin:0 0 3mm;font-weight:700}.meta{text-align:center;font-size:13pt;margin-bottom:7mm}.draft{border:1px solid #9a5b00;color:#7a4200;padding:2mm;text-align:center;margin-bottom:6mm}.section{page-break-before:always;text-align:center;font-size:18pt;font-weight:700;margin:8mm 0 5mm}.section:first-child{page-break-before:auto}.clause{margin:0 0 4mm;text-align:justify;white-space:pre-line}.clause-no{font-weight:700}.source{font-size:11pt;margin-top:10mm;color:#555}a{color:inherit}</style></head><body><h1>'+P(e==null?void 0:e.title)+'</h1><div class="meta">ฉบับ '+P(e==null?void 0:e.version_label)+" · สถานะ: "+P(dr[e==null?void 0:e.status]||(e==null?void 0:e.status))+"</div>"+(n?'<div class="meta">'+P(n)+" · "+r.length+" ข้อ</div>":"")+(s?"":'<div class="draft">เอกสารฉบับร่าง/เอกสารอ้างอิง ยังไม่ใช่ระเบียบที่มีผลบังคับใช้</div>')+o+a+"</body></html>"}function go(e){return'<form class="regulation-edit-form border border-[var(--primary-soft-line)] bg-[var(--primary-soft)] rounded-2xl p-4 mt-2" data-regulation-edit="'+e.id+'"><p class="text-sm font-bold text-[var(--ink)] mb-3">แก้ไขข้อ '+ke(e.clause_no)+'</p><label class="block text-xs font-bold text-[var(--muted)] mb-1">หัวข้อ</label><input name="title" value="'+P(e.title)+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)] mb-3"><label class="block text-xs font-bold text-[var(--muted)] mb-1">เนื้อหาข้อ</label><textarea name="body" rows="8" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]">'+P(e.body)+'</textarea><label class="block text-xs font-bold text-[var(--muted)] mt-3 mb-1">คำค้น (คั่นด้วยจุลภาค)</label><input name="keywords" value="'+P((e.keywords??[]).join(", "))+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"><div class="flex gap-2 mt-3"><button class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold" type="submit">บันทึกฉบับร่าง</button><button class="regulation-cancel-edit px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold" type="button">ยกเลิก</button></div></form>'}function yo(e,t,r){if(w.editingClauseId===e.id&&r)return go(e);const n=String(e.title??"").trim(),i=String(e.body??""),o=n&&!i.startsWith(n),a=w.routeClauseNo===Number(e.clause_no),s="council.html?view=regulation&clause="+encodeURIComponent(e.clause_no);return'<article id="regulation-clause-'+P(e.clause_no)+'" class="border border-[var(--line-soft)] bg-[var(--surface)] rounded-2xl p-4 shadow-sm'+(a?" ring-2 ring-[var(--primary)]":"")+'"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><p class="text-sm font-bold text-[var(--primary)]">ข้อ '+ke(e.clause_no)+"</p>"+(o?'<p class="text-sm font-semibold text-[var(--ink)] mt-1">'+P(n)+"</p>":"")+'</div><div class="flex items-center gap-2 flex-shrink-0"><a href="'+s+'" class="regulation-clause-link px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" title="เปิดลิงก์ตรงของข้อนี้">🔗 ลิงก์ข้อ</a>'+(r?'<button type="button" class="regulation-edit-clause px-3 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" data-id="'+e.id+'">แก้ไข</button>':"")+'</div></div><div class="text-sm leading-7 text-[var(--ink-2)] mt-3 whitespace-pre-line">'+P(e.body)+'</div><p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">หมวด '+ke(t.section_no)+" · "+P(t.title)+"</p></article>"}function ho(e){return'<form id="regulation-add-form" class="bg-[var(--surface)] border border-[var(--primary-soft-line)] rounded-2xl p-5"><h2 class="font-bold text-[var(--ink)]">เพิ่มข้อในฉบับร่าง</h2><div class="grid md:grid-cols-3 gap-3 mt-3"><label class="text-xs font-bold text-[var(--muted)]">หมวด<select name="sectionId" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]">'+e.map(t=>'<option value="'+t.id+'">หมวด '+ke(t.section_no)+" · "+P(t.title)+"</option>").join("")+'</select></label><label class="text-xs font-bold text-[var(--muted)]">เลขข้อ<input name="clauseNo" type="number" min="1" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label><label class="text-xs font-bold text-[var(--muted)]">หัวข้อ<input name="title" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label></div><label class="block text-xs font-bold text-[var(--muted)] mt-3">เนื้อหา<textarea name="body" rows="6" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]"></textarea></label><div class="flex gap-2 mt-3"><button type="submit" class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">เพิ่มฉบับร่าง</button><button type="button" class="regulation-cancel-add px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ยกเลิก</button></div></form>'}function _o(e,t=()=>{}){var A,I;if(bo(),xo(t),w.loading&&w.versions===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดระเบียบสภานักเรียน...</div></div>';if(w.error)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-red-200 rounded-2xl p-6 text-center"><p class="text-sm font-bold text-red-700">โหลดระเบียบไม่สำเร็จ</p><p class="text-xs text-[var(--muted)] mt-2">'+P(w.error.message||w.error)+'</p><button type="button" class="regulation-retry mt-4 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">ลองใหม่</button></div></div>';const r=fa();if(!r)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีระเบียบในระบบ</div></div>';const n=((A=w.content)==null?void 0:A.sections)??[],i=((I=w.content)==null?void 0:I.clauses)??[],o=new Map(n.map(E=>[E.id,E])),a=ga(r,n,i),s=n.map(E=>({section:E,clauses:a.filter(L=>L.section_id===E.id)})).filter(E=>E.clauses.length),c=!!(e!=null&&e.isAdmin)&&r.status==="draft",m=!!(e!=null&&e.isAdmin||e!=null&&e.isCouncilAdvisor)&&r.status==="draft",p=!!(e!=null&&e.isAdmin||e!=null&&e.isCouncilAdvisor)&&r.status==="advisor_review",u=!!(e!=null&&e.isAdmin||e!=null&&e.isStudentAffairsHead)&&r.status==="student_affairs_review",x=!!(e!=null&&e.isAdmin||e!=null&&e.isSchoolDirector)&&r.status==="management_review",b=!!(e!=null&&e.isAdmin||e!=null&&e.isSchoolDirector)&&r.status==="approved",v=(E,L,N="bg-[var(--primary)] text-white")=>`<button type="button" class="regulation-workflow-action px-4 py-2.5 rounded-xl text-xs font-bold ${N}" data-action="${E}" data-version-id="${r.id}">${L}</button>`,y=[m?v("submit","📤 ส่งตรวจ R1"):"",p?v("advisor-pass","✅ R1 ผ่าน")+v("advisor-return","↩️ R1 ขอแก้","border border-amber-300 text-amber-700 bg-amber-50"):"",u?v("affairs-pass","✅ R2 ผ่าน")+v("affairs-return","↩️ R2 ขอแก้","border border-amber-300 text-amber-700 bg-amber-50"):"",x?v("management-pass","✅ R3 อนุมัติ","bg-emerald-600 text-white"):"",b?v("publish","📢 เผยแพร่ R4","bg-emerald-600 text-white"):""].join(""),_=r.status==="published"&&r.is_active&&r.effective_date&&new Date(r.effective_date)<=new Date?"ฉบับนี้ประกาศและมีผลตามวันที่กำหนด ใช้เป็น gate ของฟีเจอร์ที่ผูกกับระเบียบได้":"ฉบับนี้ยังไม่ใช่ระเบียบที่มีผลบังคับใช้ ฟีเจอร์ที่ผูกกับระเบียบจะยังไม่เปิด",S=!!(lr(w.query)||w.sectionFilter!=="all");if(w.loading&&w.content===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดฉบับที่เลือก...</div></div>';let q='<div class="max-w-5xl mx-auto space-y-4"><section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 md:p-6"><div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"><div><p class="text-xs font-bold text-[var(--primary)] mb-1">📚 ระเบียบและประกาศ</p><h1 class="text-xl md:text-2xl font-bold text-[var(--ink)]">'+P(r.title)+'</h1><p class="text-xs text-[var(--muted)] mt-2">ฉบับ '+P(r.version_label)+" · "+P(dr[r.status]||r.status)+" · โหมด "+(r.implementation_mode==="enforced"?"บังคับใช้":"อ้างอิง/เตรียมการ")+'</p></div><div class="flex flex-wrap gap-2"><button type="button" class="regulation-print px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">🖨️ '+(S?"พิมพ์ผลการค้นหา":"พิมพ์ฉบับนี้")+"</button>"+(r.source_document_url?'<a href="'+P(r.source_document_url)+'" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🔗 เปิดต้นฉบับ</a>':"")+(c?'<button type="button" class="regulation-add-clause px-4 py-2.5 rounded-xl border border-[var(--primary-soft-line)] text-[var(--primary)] text-xs font-bold">➕ เพิ่มข้อ</button>':"")+y+'</div></div><div class="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900"><strong>สถานะสำคัญ:</strong> '+P(_)+"</div>";return w.versions.length>1&&(q+='<label class="block text-xs font-bold text-[var(--muted)] mt-4">เลือกฉบับ</label><select id="regulation-version-select" class="mt-1 w-full md:max-w-md border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">'+w.versions.map(E=>'<option value="'+E.id+'" '+(E.id===r.id?"selected":"")+">"+P(E.version_label)+" · "+P(dr[E.status]||E.status)+"</option>").join("")+"</select>"),q+="</section>",w.addingClause&&c&&(q+=ho(n)),q+='<section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5"><form id="regulation-search-form" class="flex flex-col md:flex-row gap-2"><input id="regulation-search" value="'+P(w.query)+'" placeholder="ค้นหา เช่น ข้อที่ 15, การเลือกตั้ง, การเงิน, การลาออก" class="flex-1 border border-[var(--line)] rounded-xl px-4 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><select id="regulation-section-filter" class="border border-[var(--line)] rounded-xl px-3 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><option value="all">ทุกหมวด</option>'+n.map(E=>'<option value="'+E.id+'" '+(String(w.sectionFilter)===String(E.id)?"selected":"")+">หมวด "+ke(E.section_no)+" · "+P(E.title)+"</option>").join("")+'</select><button type="submit" class="px-5 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">ค้นหา</button></form><div class="flex items-center justify-between gap-3 mt-4"><p class="text-xs text-[var(--muted)]">แสดง '+a.length+" จาก "+i.length+" ข้อ · แยกตามหมวด</p>"+(w.query||w.sectionFilter!=="all"?'<button type="button" class="regulation-clear-filter text-xs font-bold text-[var(--primary)]">ล้างตัวกรอง</button>':"")+"</div></section>",q+=s.length?s.map(E=>'<details open class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden"><summary class="cursor-pointer list-none px-5 py-4 bg-[var(--surface-2)] flex items-center justify-between gap-3"><span class="font-bold text-[var(--ink)]">หมวด '+ke(E.section.section_no)+" · "+P(E.section.title)+'</span><span class="text-xs text-[var(--muted)]">'+E.clauses.length+' ข้อ</span></summary><div class="p-4 space-y-3">'+E.clauses.map(L=>yo(L,o.get(L.section_id),c)).join("")+"</div></details>").join(""):'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบข้อที่ตรงกับการค้นหา</div>',q+"</div>"}function $o(e,t){var r,n,i,o,a,s,c,m,p;(r=document.querySelector(".regulation-retry"))==null||r.addEventListener("click",()=>cr(t)),(n=document.getElementById("regulation-version-select"))==null||n.addEventListener("change",u=>{w.selectedVersionId=Number(u.target.value),w.content=null,vo(t)}),(i=document.getElementById("regulation-section-filter"))==null||i.addEventListener("change",u=>{Zt(),w.sectionFilter=u.target.value,t()}),(o=document.getElementById("regulation-search-form"))==null||o.addEventListener("submit",u=>{var x;u.preventDefault(),Zt(),w.query=((x=document.getElementById("regulation-search"))==null?void 0:x.value)??"",t()}),(a=document.querySelector(".regulation-clear-filter"))==null||a.addEventListener("click",()=>{Zt(),w.query="",w.sectionFilter="all",t()}),(s=document.querySelector(".regulation-print"))==null||s.addEventListener("click",()=>{var x,b;const u=fa();if(u){const v=((x=w.content)==null?void 0:x.sections)??[],y=((b=w.content)==null?void 0:b.clauses)??[],_=ga(u,v,y),S=w.query.trim()||w.sectionFilter!=="all"?"ผลการค้นหา/ตัวกรอง":"";Ie(fo(u,v,_,S))}}),document.querySelectorAll(".regulation-workflow-action").forEach(u=>u.addEventListener("click",async()=>{const x=u.dataset.action,b=Number(u.dataset.versionId),v=x==="submit"?window.prompt("หมายเหตุการส่งตรวจ (ถ้ามี)")||"":window.prompt("หมายเหตุ/ข้อสังเกต")||"";if(["advisor-return","affairs-return"].includes(x)&&!v.trim()){g("การขอแก้ไขต้องระบุหมายเหตุ","warning");return}let y=null;if(!(x==="publish"&&(y=window.prompt("วันที่มีผล (YYYY-MM-DD)",new Date().toISOString().slice(0,10)),!y))){u.disabled=!0;try{x==="submit"?await un(b,v):x==="advisor-pass"?await Pr(b,!0,v):x==="advisor-return"?await Pr(b,!1,v):x==="affairs-pass"?await Or(b,!0,v):x==="affairs-return"?await Or(b,!1,v):x==="management-pass"?await pn(b,v):x==="publish"&&await mn(b,y,v),w.versions=null,w.content=null,w.selectedVersionId=null,g("อัปเดต workflow ระเบียบแล้ว","success"),await cr(t)}catch(_){g("ดำเนินการไม่สำเร็จ: "+(_.message||_),"error"),u.disabled=!1}}})),w.focusRouteClause&&window.requestAnimationFrame(()=>{const u=document.getElementById("regulation-clause-"+w.routeClauseNo);u&&u.scrollIntoView({behavior:"smooth",block:"center"}),w.focusRouteClause=!1}),e!=null&&e.isAdmin&&((c=document.querySelector(".regulation-add-clause"))==null||c.addEventListener("click",()=>{w.addingClause=!0,t()}),(m=document.querySelector(".regulation-cancel-add"))==null||m.addEventListener("click",()=>{w.addingClause=!1,t()}),document.querySelectorAll(".regulation-edit-clause").forEach(u=>u.addEventListener("click",()=>{w.editingClauseId=Number(u.dataset.id),t()})),document.querySelectorAll(".regulation-cancel-edit").forEach(u=>u.addEventListener("click",()=>{w.editingClauseId=null,t()})),document.querySelectorAll(".regulation-edit-form").forEach(u=>u.addEventListener("submit",async x=>{x.preventDefault();const b=new FormData(u),v=String(b.get("body")??"").trim();if(!v)return;const y=u.querySelector('button[type="submit"]');y&&(y.disabled=!0);try{await bn({clauseId:Number(u.dataset.regulationEdit),title:String(b.get("title")??"").trim(),body:v,keywords:String(b.get("keywords")??"").split(",").map(_=>_.trim()).filter(Boolean)}),w.editingClauseId=null,w.content=await Rt(w.selectedVersionId),g("บันทึกฉบับร่างแล้ว ✅","success"),t()}catch(_){g("บันทึกไม่สำเร็จ: "+(_.message||_),"error"),y&&(y.disabled=!1)}})),(p=document.getElementById("regulation-add-form"))==null||p.addEventListener("submit",async u=>{u.preventDefault();const x=u.currentTarget,b=new FormData(x),v=String(b.get("body")??"").trim(),y=Number(b.get("clauseNo"));if(!v||!Number.isInteger(y)||y<1)return;const _=x.querySelector('button[type="submit"]');_&&(_.disabled=!0);try{await vn({versionId:w.selectedVersionId,sectionId:Number(b.get("sectionId")),clauseNo:y,title:String(b.get("title")??"").trim(),body:v,keywords:[]}),w.addingClause=!1,w.content=await Rt(w.selectedVersionId),g("เพิ่มข้อในฉบับร่างแล้ว ✅","success"),t()}catch(S){g("เพิ่มข้อไม่สำเร็จ: "+(S.message||S),"error"),_&&(_.disabled=!1)}}))}const wo="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit",ko=[["การรับสมัครและคัดเลือก",[["FORM_01_APPLICATION","01","ใบสมัครสมาชิกสภานักเรียน","ใช้รับสมัครและเก็บข้อมูลผู้สมัคร"],["FORM_02_ENDORSEMENT","02","แบบรับรองผู้สมัคร","ใช้รับรองผู้สมัครโดยผู้มีสิทธิรับรอง"],["FORM_03_INTERVIEW_YLA","03","แบบสัมภาษณ์และประเมิน YLA","ใช้บันทึกผลสัมภาษณ์และการประเมิน YLA"],["FORM_04_CHAIR_NOMINEE","04","แบบเสนอผู้สมัครประธานหลัง YLA","ใช้เสนอรายชื่อหลังผ่านกระบวนการ YLA"]]],["การเลือกตั้งและแต่งตั้ง",[["FORM_05_ELECTION_RULES","05","แนวปฏิบัติการเลือกตั้ง","คู่มือและกติกาการเลือกตั้ง"],["FORM_06_ELECTION_RESULT","06","แบบบันทึกและรับรองผลการเลือกตั้ง","ใช้บันทึกและรับรองผลการเลือกตั้ง"],["FORM_07_ELECTION_COMPLAINT","07","แบบร้องเรียนหรือคัดค้านการเลือกตั้ง","ใช้ยื่นและติดตามเรื่องร้องเรียน"],["FORM_08_APPOINTMENT_ROSTER","08","บัญชีรายชื่อเสนอแต่งตั้ง","ใช้จัดทำบัญชีรายชื่อเพื่อเสนอแต่งตั้ง"]]],["โครงการและกิจกรรม",[["FORM_09_ACTIVITY_APPROVAL","09","แบบขออนุมัติจัดกิจกรรม","ใช้ขออนุมัติกิจกรรมก่อนดำเนินงาน"],["FORM_09_1_PROJECT_PROPOSAL","09.1","แบบเสนอโครงการ","ใช้จัดทำข้อเสนอโครงการตามแบบโรงเรียน"],["FORM_10_PROJECT_REPORT","10","แบบสรุปผลโครงการหรือกิจกรรม","ใช้สรุปผลหลังเสร็จสิ้นโครงการ"],["FORM_12_CALENDAR","12","แผนงานและปฏิทินกิจกรรม","ใช้วางแผนงานและกำหนดการกิจกรรม"]]],["การประชุม การติดตามงาน และการบริหารสมาชิก",[["FORM_11_MEETING_MINUTES","11","ระเบียบวาระและรายงานการประชุม","ใช้เตรียมวาระและบันทึกมติการประชุม"],["FORM_13_INCIDENT","13","แบบรายงานเหตุหรือพฤติกรรม","ใช้รายงานเหตุและพฤติกรรมที่ต้องติดตาม"],["FORM_14_RESIGNATION","14","แบบลาออกจากสภานักเรียน","ใช้ยื่นลาออกจากตำแหน่ง"],["FORM_15_REPLACEMENT","15","แบบเสนอแต่งตั้งทดแทนหรือปรับฝ่าย","ใช้เสนอการทดแทนหรือปรับฝ่าย"],["FORM_19_WORK_TRACKING","19","แบบติดตามงานของฝ่าย","ใช้ติดตามงานค้างและผลการส่งมอบงาน"]]],["การเงินและทรัพย์สิน",[["FORM_16_MEMBER_FINANCE","16","ทะเบียนการเงินรายบุคคล","ใช้บันทึกข้อมูลการเงินรายบุคคลตามสิทธิ์"],["FORM_17_ACTIVITY_FINANCE","17","สรุปบัญชีรับ–จ่ายกิจกรรม","ใช้สรุปการเงินของกิจกรรมแยกจากเงินสมาชิก"],["FORM_18_ASSET_REGISTER","18","ทะเบียนทรัพย์สินและระบบดิจิทัล","ใช้บันทึกทรัพย์สินและสิทธิ์ระบบ"],["FORM_23_PARENT_FINANCE_CONSENT","23","แบบยินยอมผู้ปกครองด้านการเงิน","ใช้ขอความยินยอมด้านการเงิน"]]],["วินัย การสิ้นสุดวาระ และบัตรประจำตัว",[["FORM_20_FINAL_AGREEMENT","20","แบบข้อตกลงกรณี 50 คะแนน","ใช้จัดทำข้อตกลงปรับปรุงการปฏิบัติหน้าที่"],["FORM_21_HANDOVER","21","แบบส่งมอบงานเมื่อสิ้นสุดวาระ","ใช้ส่งมอบเอกสาร ทรัพย์สิน และงานค้าง"],["FORM_22_COUNCIL_CARD_REGISTER","22","ทะเบียนบัตรประจำตัวสภานักเรียน","ใช้ติดตามการออกและคืนบัตรประจำตัว"]]],["เอกสารรับรอง ผู้ปกครอง และการแก้ไขระเบียบ",[["FORM_24_REGULATION_AMENDMENT","24","แบบเสนอแก้ไขเพิ่มเติมระเบียบ","ใช้เสนอแก้ไขระเบียบผ่านกระบวนการโรงเรียน"],["FORM_25_PARTICIPATION_CERTIFICATE","25","หนังสือรับรองการเข้าร่วมกิจกรรม","ใช้รับรองการเข้าร่วมกิจกรรมตามข้อเท็จจริง"],["FORM_26_PARENT_PERMISSION","26","ใบอนุญาตผู้ปกครอง","ใช้ขออนุญาตผู้ปกครองสำหรับกิจกรรม"]]],["การประเมินและการรับรองการปฏิบัติหน้าที่",[["FORM_27_MEMBER_PERFORMANCE_EVALUATION","27","แบบประเมินการปฏิบัติหน้าที่","ใช้ประเมินผลการปฏิบัติหน้าที่สมาชิก"],["FORM_28_ATTENDANCE_LEAVE_REGISTER","28","แบบบันทึกการเข้าร่วมและการลา","ใช้บันทึกการเข้าร่วม ประชุม กิจกรรม ภารกิจ และการลา"],["FORM_29_ABSENCE_IMPROVEMENT_AGREEMENT","29","แบบติดตามการขาดและข้อตกลง","ใช้ติดตามการขาดและข้อตกลงปรับปรุง"],["FORM_30_CERTIFICATE_ELIGIBILITY","30","สิทธิรับเกียรติบัตรและหนังสือรับรอง","ใช้ตรวจสอบสิทธิและหลักฐานก่อนออกเอกสารรับรอง"]]]],Eo=[["YLA-00","ภาพรวมและสารบัญ","จุดเริ่มต้นสำหรับดูโครงสร้างชุดเอกสาร YLA"],["YLA-01","โครงการกิจกรรมเสริมทักษะภาวะผู้นำ","รายละเอียดโครงการและวัตถุประสงค์ของ YLA"],["YLA-02","กำหนดการดำเนินกิจกรรม","กำหนดการและลำดับการดำเนินกิจกรรม"],["YLA-03","คู่มือการดำเนินกิจกรรมและฐาน","แนวทางดำเนินกิจกรรมและภารกิจแต่ละฐาน"],["YLA-04","แบบบันทึกการเข้าร่วมและภารกิจ","บันทึกการเข้าร่วมและการทำภารกิจ"],["YLA-05","แบบประเมินศักยภาพรายบุคคล","ประเมินศักยภาพและพัฒนาการของผู้เข้าร่วม"],["YLA-06","สรุปผลและข้อเสนอการจัดฝ่าย","สรุปผลเพื่อประกอบการจัดสมาชิกลงฝ่าย"],["YLA-07","รายงานผลการดำเนินกิจกรรม","รายงานผลหลังจบกิจกรรม YLA"],["YLA-08","สมุดค่ายผู้เข้าร่วมกิจกรรม YLA","สมุดงานและบันทึกประสบการณ์ของผู้เข้าร่วม"],["YLA-09","ใบเสนอโครงการกิจกรรม YLA","ข้อเสนอโครงการ YLA ตามแบบโรงเรียน"],["YLA-10","ใบสรุปผลโครงการกิจกรรม YLA","สรุปผลโครงการ YLA สำหรับจัดเก็บและตรวจสอบ"]],Ao=[["ACT-01","การเลือกตั้งประธานสภานักเรียน","school_led","ดำเนินการเลือกตั้งอย่างเป็นธรรม โปร่งใส และตรวจสอบได้"],["ACT-02","เสริมทักษะการดำเนินการจัดกิจกรรมและการเขียนใบโครงการ","school_led","ฝึกคิดกิจกรรม วางแผน งบประมาณ เขียนใบโครงการ ประเมิน และสรุปผล"],["ACT-03","เสริมทักษะด้านการสื่อสารต่อหน้าสาธารณะ","school_led","ฝึกการประกาศ การเป็นพิธีกร การชี้แจงกติกา และการนำเสนอ"],["ACT-04","เสริมทักษะด้านสื่อสร้างสรรค์","school_led","พัฒนาทักษะการผลิตสื่อดิจิทัลและการใช้ AI อย่างรับผิดชอบ"],["ACT-05","ส่งเสริมคุณธรรมและจริยธรรม","school_led","พัฒนาความรับผิดชอบ ความซื่อสัตย์ ความยุติธรรม อามานะฮ์ และจริยธรรม"],["ACT-08","ฟุตซอลสานสัมพันธ์ภายใน","council_led","การแข่งขันฟุตซอลนักเรียนชาย พร้อมทะเบียนเงินประกันทีมและการบริหารการแข่งขัน"],["ACT-09","กีฬาสานสัมพันธ์หอพัก","council_led","กิจกรรมกีฬาสำหรับนักเรียนหญิงหอพัก เช่น วอลเลย์บอล แชร์บอล และกีฬาพื้นบ้าน"]],So=ko.flatMap(([e,t])=>t.map(([r,n,i,o])=>({key:r,code:n,title:i,description:o,group:e}))),er={forms:{eyebrow:"เอกสารและแบบฟอร์มต่าง ๆ",title:"ศูนย์เอกสารและแบบฟอร์ม",description:"ค้นหาแบบฟอร์มตามระเบียบ 01–30 และเปิดรายการที่เกี่ยวข้องได้จากหน้าเดียว",sourceTab:"t.yq1xlf88ro0s",sourceLabel:"เปิดแท็บเอกสารและแบบฟอร์มต้นฉบับ",items:So},yla:{eyebrow:"กิจกรรม YLA",title:"ชุดเอกสารกิจกรรม YLA",description:"รวมเอกสาร Youth Leadership For Azizstan ตั้งแต่การเตรียมงาน การเข้าร่วม การประเมิน จนถึงสรุปผล",sourceTab:"t.gq6dk28nkqg8",sourceLabel:"เปิดแท็บกิจกรรม YLA ต้นฉบับ",items:Eo.map(([e,t,r])=>({code:e,title:t,description:r,group:"ชุดเอกสาร YLA"}))},activityDocs:{eyebrow:"โครงการและกิจกรรมอื่น ๆ",title:"ทะเบียนโครงการและกิจกรรม",description:"ดูประเภทกิจกรรม เจ้าของกิจกรรม และชุดเอกสารที่ควรใช้ตั้งแต่ก่อนเริ่มงานจนถึงสรุปผล",sourceTab:"t.xjmanckvqq6a",sourceLabel:"เปิดแท็บโครงการและกิจกรรมต้นฉบับ",items:Ao.map(([e,t,r,n])=>({code:e,title:t,description:n,group:r==="council_led"?"สภาเป็นผู้ริเริ่ม/รับผิดชอบหลัก":"โรงเรียนหรือฝ่ายงานเป็นผู้รับผิดชอบหลัก",ownership:r}))}},Yr=e=>`${wo}?tab=${e}`;function ur({kind:e,esc:t,canOpenDocs:r=!1}){const n=er[e]??er.forms,i=n.items.map(o=>`
    <article class="council-resource-card rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3" data-resource-card data-resource-search="${t([o.code,o.title,o.description,o.group].filter(Boolean).join(" "))}">
      <div class="flex items-start gap-3">
        <span class="flex-shrink-0 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] px-2.5 py-1 text-xs font-black">${t(o.code)}</span>
        <div class="min-w-0 flex-1">
          <h2 class="text-sm font-bold text-[var(--ink)]">${t(o.title)}</h2>
          <p class="text-xs text-[var(--muted)] mt-1">${t(o.description)}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 items-center text-[0.6875rem]">
        ${o.group?`<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${t(o.group)}</span>`:""}
        ${o.ownership?`<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${o.ownership==="council_led"?"สภานำ":"โรงเรียนนำ"}</span>`:""}
      </div>
      <details class="border-t border-[var(--line-soft)] pt-2">
        <summary class="cursor-pointer text-xs font-bold text-[var(--primary)]">ดูแนวทางการใช้งาน</summary>
        <p class="text-xs text-[var(--ink-2)] leading-6 mt-2">เอกสารนี้เป็นส่วนหนึ่งของชุดเอกสารสภานักเรียน สามารถใช้เป็นรายการอ้างอิงในการจัดทำงานจริง และควรบันทึกข้อมูลตามข้อเท็จจริงของกิจกรรมหรือกระบวนการนั้น</p>
      </details>
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" class="btn-print-council-resource text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-resource-code="${t(o.code)}" data-resource-title="${t(o.title)}" data-resource-description="${t(o.description)}">🖨️ พิมพ์รายการ</button>
        <a href="${t(Yr(n.sourceTab))}" target="_blank" rel="noopener" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]">🔗 เปิดต้นฉบับ</a>
        ${r&&e==="forms"&&["FORM_09_ACTIVITY_APPROVAL","FORM_09_1_PROJECT_PROPOSAL"].includes(o.key)?'<button type="button" class="goto-view text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white" data-view="docs">เปิดงานเอกสารโครงการ →</button>':""}
      </div>
    </article>`).join("");return`<div class="space-y-4">
    <section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5">
      <p class="text-xs font-bold text-[var(--primary)]">📚 ${t(n.eyebrow)}</p>
      <h1 class="text-xl font-bold text-[var(--ink)] mt-1">${t(n.title)}</h1>
      <p class="text-sm text-[var(--muted)] mt-2 leading-6">${t(n.description)}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        ${Object.entries(er).map(([o,a])=>`<button type="button" class="council-resource-kind-btn px-3 py-2 rounded-xl text-xs font-bold ${o===e?"bg-[var(--primary)] text-white":"border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--surface-2)]"}" data-resource-kind="${o}">${t(a.eyebrow)}</button>`).join("")}
        <a href="${t(Yr(n.sourceTab))}" target="_blank" rel="noopener" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🔗 ดูเอกสารต้นฉบับ</a>
      </div>
    </section>
    <div class="flex gap-2">
      <input id="council-resource-search" type="search" placeholder="ค้นหารหัส ชื่อเอกสาร กิจกรรม หรือคำอธิบาย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="button" id="council-resource-clear" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ล้าง</button>
    </div>
    <p id="council-resource-count" class="text-xs text-[var(--muted)]">แสดง ${n.items.length} รายการ</p>
    <div id="council-resource-list" class="grid grid-cols-1 lg:grid-cols-2 gap-3">${i}</div>
  </div>`}function Io({onKindChange:e,esc:t}){document.querySelectorAll(".council-resource-kind-btn").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.resourceKind))});const r=document.getElementById("council-resource-search"),n=document.getElementById("council-resource-clear"),i=[...document.querySelectorAll("[data-resource-card]")],o=document.getElementById("council-resource-count"),a=()=>{const s=String((r==null?void 0:r.value)||"").trim().toLocaleLowerCase();let c=0;i.forEach(m=>{const p=!s||m.dataset.resourceSearch.toLocaleLowerCase().includes(s);m.classList.toggle("hidden",!p),p&&(c+=1)}),o&&(o.textContent=`แสดง ${c} รายการ${s?" จากทั้งหมด "+i.length+" รายการ":""}`)};r==null||r.addEventListener("input",a),n==null||n.addEventListener("click",()=>{r&&(r.value=""),a(),r==null||r.focus()}),document.querySelectorAll(".btn-print-council-resource").forEach(s=>{s.addEventListener("click",()=>Co({code:s.dataset.resourceCode,title:s.dataset.resourceTitle,description:s.dataset.resourceDescription,esc:t}))})}function Co({code:e,title:t,description:r,esc:n}){Ie(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${n(t)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:36px;line-height:1.8}h1{font-size:24px;margin:8px 0 20px}.code{color:#7b2d2d;font-weight:700}.meta{border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:12px 0;margin:16px 0}small{color:#666}</style></head><body><small>เอกสารสภานักเรียน โรงเรียนมูลนิธิอาซิซสถาน</small><p class="code">${n(e)}</p><h1>${n(t)}</h1><div class="meta">${n(r)}</div><p>รายการนี้อยู่ในชุดเอกสารอ้างอิงของสภานักเรียน โปรดเปิดต้นฉบับหรือเอกสารฉบับที่โรงเรียนอนุมัติ เพื่อกรอกข้อมูลและใช้งานตามกระบวนการที่กำหนด</p></body></html>`)}const l=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Er=document.getElementById("council-content"),j={M:"ชาย",W:"หญิง"},Ee=e=>e==="ชาย"||e==="M"?"M":e==="หญิง"||e==="W"?"W":null,z=(e,t="w-10 h-12")=>e!=null&&e.photo_url||e!=null&&e.image_url?`<img src="${l(e.photo_url||e.image_url)}" class="${t} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`:`<div class="${t} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${l(((e==null?void 0:e.full_name)||"?").charAt(0))}</div>`,Ar={pending:"รอดำเนินการ",interview_scheduled:"นัดสัมภาษณ์แล้ว",interviewed:"สัมภาษณ์แล้ว",candidate:"ผู้สมัครเลือกตั้ง",appointed:"ได้รับแต่งตั้ง",rejected:"ไม่ผ่าน"};let d=null;const ya=new URLSearchParams(window.location.search),ha=ya.get("view"),Lo=!!ha;let Re=ha||"overview";function Be(e,{preserveDetail:t=!1}={}){Re=e;const r=new URL(window.location.href);r.searchParams.set("view",e),t||(r.searchParams.delete("clause"),r.searchParams.delete("version")),window.history.replaceState(null,"",r)}let Dt=!1,U=1,M={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},Ne=null,ve=null;const _a=5;function it(){var e;return Number((e=d==null?void 0:d.cfg)==null?void 0:e.council_min_certificates)||_a}const $a="ม.3,ม.4,ม.5";function wa(){var e;return String(((e=d==null?void 0:d.cfg)==null?void 0:e.council_eligible_grade_levels)||$a).split(/[,\n]/).map(t=>t.trim()).filter(Boolean)}function Mt(e){const t=Jt(e);return!!t&&wa().includes(t)}function pr(e){const t=wa().join(", "),r=Jt(e);return r?`ไม่สามารถสมัครสภานักเรียนได้ การรับสมัครครั้งนี้เปิดสำหรับระดับ ${t} เท่านั้น ระดับชั้นปัจจุบันของคุณ: ${r}`:"ไม่สามารถสมัครสภานักเรียนได้ ไม่พบระดับชั้นจากห้องสามัญหรือห้องศาสนา กรุณาติดต่อผู้ดูแลระบบ"}function lt(e){return Array.from({length:e},()=>({file:null,title:"",previewUrl:null,isPdf:!1}))}let H=lt(_a),He=!1,K=null;function It(){Dt=!1,U=1,M={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},Ne=null,ve&&URL.revokeObjectURL(ve),ve=null,H.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),H=lt(it()),He=!1}function Sr(){return d!=null&&d.student?`council_apply_draft_${d.student.id}`:null}function oe(){const e=Sr();if(e)try{localStorage.setItem(e,JSON.stringify({step:U,data:M,certTitles:H.map(t=>t.title),savedAt:Date.now()}))}catch{}}function To(){const e=Sr();if(!e)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function zr(){const e=Sr();e&&localStorage.removeItem(e)}let dt=null,fe=null,T=null,Je=null,Le=null,ct=null,he="all",te="M",vt="",Ae="",Pe="",Oe="",Ge="M",Ve="all",Bt="",Ue="M",We="ready",Pt="",ue=null,Z=null,mr=null;const ne={};let Qe=null,Ce=!1;const br={};let Y=null,le=[],R=null;const yt=()=>le.find(e=>String(e.id)===String(R))??null,Gr=()=>{var e;return["active","upcoming"].includes((e=yt())==null?void 0:e.status)},de={M:null,W:null};let xe="M",ee=null;const ge={};let Q=null,be=null,G=null,Ot=null,Ct=!1,vr=!1,re=null,xr=null;const Ke={},Ir={},ut={},Cr={};let Ft=null,_e=null,$e=null,Lt=null,Tt="all",Nt=!1,ot="general",ae=null,ye=null;const Vr=[{id:"general",label:"ทั่วไป"},{id:"positions",label:"ตำแหน่ง"},{id:"criteria",label:"เกณฑ์และข้อความ"},{id:"modules",label:"โมดูล"}],No={candidates:"ว่าที่ประธาน / ผลเลือกตั้ง",news:"ประกาศ",interview:"ตารางสัมภาษณ์",appoint:"แต่งตั้งตรง",chairteam:"เสนอคณะทำงาน",chairtasks:"มอบหมายงาน",evaluate:"ประเมินการปฏิบัติหน้าที่",certissue:"ออกเกียรติบัตร",docs:"เอกสารโครงการ",perms:"มอบสิทธิ์ครู (ยังไม่สร้างหน้า)"};function Lr(){try{return{...JSON.parse(d.cfg.council_modules||"{}")}}catch{return{}}}async function Tr(){ae=await Ws().catch(()=>[]),f()}async function qo(){ye=await pa().catch(()=>[]),f()}const jo={apply:{title:"📝 สมัครสภานักเรียน",subtabs:[{id:"new",label:"สมัครตำแหน่งใหม่"},{id:"mine",label:"ใบสมัครของฉัน"}]},election:{title:"🗳️ การเลือกตั้งประธานสภา",subtabs:[{id:"status",label:"สถานะการเลือกตั้ง"}]}};async function Ro(){var O,W;Xa();const{data:{session:e}}=await nr.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:t}=await nr.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single(),r=t==null?void 0:t.role,n=r==="admin"||(t==null?void 0:t.is_also_admin)===!0,o={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[r]||"index.html";document.getElementById("council-back-btn-desktop").href=o,document.getElementById("council-back-btn-mobile").href=o;const[a,s,c]=await Promise.all([fn(),St(),sr()]);le=c;const m=ya.get("term"),p=le.find(F=>String(F.id)===m)||le.find(F=>F.status==="active")||le.find(F=>F.status==="upcoming")||le[0];R=(p==null?void 0:p.id)??null;const u=Number((p==null?void 0:p.academic_year)||a.academicYear)||new Date().getFullYear()+543,[x,b]=await Promise.all([Ye(null,R),Me(null,R)]);Ea(a);let v=null,y=[],_=[];r==="student"&&(v=await en().catch(()=>null));const S=(a.council_test_student_codes||"").split(/[\s,]+/).map(F=>F.trim()).filter(Boolean),q=r==="student"&&!!v&&S.includes(v.student_code);if(a.council_visible_to_all==="false"&&!n&&!q){Nr(!1),Er.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`;return}r==="student"&&v&&([y,_]=await Promise.all([wr(v.id,R).catch(()=>[]),ca(v.id,R).catch(()=>[])]));let A=null,I=[],E=[],L=[];r==="teacher"&&(A=await tn(e.user.id).catch(()=>null),A&&(I=(await rn(A.id).catch(()=>[])).filter(J=>J.category==="สามัญ").map(J=>J.main_room),[E,L]=await Promise.all([ua(I).catch(()=>[]),pa().catch(()=>[])])));const N=r==="student"&&_.some(F=>{var J;return F.status==="active"&&((J=F.council_positions)==null?void 0:J.is_elected)}),B=N||_.some(F=>F.status==="active"&&F.can_create_activities),V=((W=(O=_.find(F=>{var J;return F.status==="active"&&((J=F.council_positions)==null?void 0:J.is_elected)}))==null?void 0:O.council_positions)==null?void 0:W.gender)??null,h=r==="teacher"&&!!A&&(A.position==="council_advisor"||(A.positions??[]).includes("council_advisor")),$=r==="teacher"&&!!A&&(A.position==="student_affairs_head"||(A.positions??[]).includes("student_affairs_head")),C=r==="teacher"&&!!A&&(A.position==="school_director"||(A.positions??[]).includes("school_director")),D=r==="teacher"&&!!A&&(A.position==="executive"||(A.positions??[]).includes("executive"));d={role:r,isAdmin:n,isChair:N,isCouncilAdvisor:h,isStudentAffairsHead:$,isSchoolDirector:C,isExecutive:D,canCreateActivities:B,chairGender:V,student:v,applications:y,membership:_,positions:s,members:x,elections:b,cfg:a,teacher:A,homeroomMainRooms:I,pendingEndorsements:E,endorsementPhrases:L},Y=u,r==="teacher"&&E.length&&!Lo&&Be("endorse"),f()}async function ka(){d!=null&&d.student&&(d.applications=await wr(d.student.id,R).catch(()=>d.applications))}async function Do(){d!=null&&d.teacher&&(d.pendingEndorsements=await ua(d.homeroomMainRooms).catch(()=>d.pendingEndorsements))}async function Ur(e){var s,c;const t=le.find(m=>String(m.id)===String(e));if(!t||String(t.id)===String(R))return;R=t.id,Y=Number(t.academic_year);const[r,n,i,o]=await Promise.all([Ye(null,t.id).catch(()=>[]),Me(null,t.id).catch(()=>[]),d.student?wr(d.student.id,t.id).catch(()=>[]):Promise.resolve([]),d.student?ca(d.student.id,t.id).catch(()=>[]):Promise.resolve([])]);d.members=r,d.elections=n,d.student&&(d.applications=i,d.membership=o,d.isChair=o.some(m=>{var p;return m.status==="active"&&((p=m.council_positions)==null?void 0:p.is_elected)}),d.canCreateActivities=d.isChair||o.some(m=>m.status==="active"&&m.can_create_activities),d.chairGender=((c=(s=o.find(m=>{var p;return m.status==="active"&&((p=m.council_positions)==null?void 0:p.is_elected)}))==null?void 0:s.council_positions)==null?void 0:c.gender)??null),T=null,ee=null,Q=null,X=null,de.M=null,de.W=null,delete ne.M,delete ne.W;const a=new URL(window.location.href);a.searchParams.set("term",t.id),history.replaceState(null,"",a),f()}const fr={draft:"ร่าง",upcoming:"วาระใหม่",active:"กำลังดำรงตำแหน่ง",closed:"หมดวาระ"};function Mo(){const e=yt();if(!e)return"";const t=e.status==="active"?"bg-[var(--ok-soft)] text-[#106143] border-[var(--ok-soft-line)]":e.status==="upcoming"?"bg-[var(--gold-soft)] text-[var(--gold-ink)] border-[var(--gold-soft-line)]":"bg-[var(--surface-2)] text-[var(--muted)] border-[var(--line)]";return`<div class="mb-4 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 flex flex-col sm:flex-row sm:items-center gap-2">
    <div class="min-w-0 flex-1"><p class="text-[0.6875rem] font-bold text-[var(--muted)]">วาระที่กำลังดู</p><p class="text-sm font-bold text-[var(--ink)] truncate">${l(e.term_label)}</p></div>
    <span class="self-start sm:self-auto px-2.5 py-1 rounded-full border text-[0.6875rem] font-bold ${t}">${l(fr[e.status]||e.status)}</span>
    <select id="council-term-switcher" class="border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
      ${le.map(r=>`<option value="${r.id}" ${String(r.id)===String(e.id)?"selected":""}>${l(r.term_label)} — ${l(fr[r.status]||r.status)}</option>`).join("")}
    </select>
  </div>`}function Nr(e){document.getElementById("council-sidebar").style.display=e?"":"none",document.getElementById("council-bottom-tabs").style.display=e?"":"none"}function Ea(e){const t=e.council_name||"ระบบสภานักเรียน";if(document.title=t,document.getElementById("council-title").textContent=t,document.getElementById("council-title-mobile").textContent=t,e.council_logo_url){const r=document.getElementById("council-logo");r.src=e.council_logo_url,r.classList.remove("hidden"),document.getElementById("council-logo-fallback").classList.add("hidden")}}const tr={main:{label:"หน้าหลัก",icon:"🏠"},council:{label:"งานสภา",icon:"👥"},resources:{label:"เอกสาร/กิจกรรม",icon:"📚"},election:{label:"เลือกตั้ง",icon:"🗳️"},teacherWork:{label:"งานครู",icon:"📋"},system:{label:"ระบบ",icon:"⚙️"}};function Bo(){const e=[{id:"overview",icon:"🏠",label:"หน้าหลัก",group:"main"}];e.push({id:"news",icon:"📣",label:"ประกาศ",group:"council"}),e.push({id:"roster",icon:"🏛️",label:"สภาของเรา",group:"council"}),e.push({id:"activities",icon:"📅",label:"กิจกรรม/การเข้าร่วม",group:"council"}),(d.isChair||d.isAdmin||d.isCouncilAdvisor)&&e.push({id:"chairteam",icon:"👔",label:"เสนอคณะทำงาน",group:"council"}),d.isChair&&e.push({id:"assignments",icon:"📌",label:"มอบหมายงาน",group:"council"}),d.membership.length&&e.push({id:"myduty",icon:"🎫",label:"หน้าที่/งานของฉัน",group:"council"}),d.membership.length&&e.push({id:"mysummary",icon:"📊",label:"สรุปของฉัน",group:"council"}),d.membership.length&&d.cfg.council_require_peer_endorsement==="true"&&e.push({id:"peerEndorse",icon:"✋",label:"รับรองผู้สมัคร (สภา)",group:"council"}),e.push({id:"regulation",icon:"📚",label:"ระเบียบ/ประกาศ",group:"resources"}),e.push({id:"forms",icon:"🗂️",label:"เอกสารและแบบฟอร์ม",group:"resources"}),e.push({id:"yla",icon:"🌱",label:"กิจกรรม YLA",group:"resources"}),e.push({id:"activityDocs",icon:"🧩",label:"โครงการและกิจกรรม",group:"resources"}),e.push({id:"candidates",icon:"🗳️",label:"ว่าที่ประธาน",group:"election"}),e.push({id:"result",icon:"📊",label:"ผลเลือกตั้ง",group:"election"}),d.role==="teacher"&&d.pendingEndorsements.length&&e.push({id:"endorse",icon:"✋",label:"รับรองผู้สมัคร",badge:d.pendingEndorsements.length,group:"teacherWork"});const t=d.isAdmin||d.isCouncilAdvisor;t&&e.push({id:"apps",icon:"📋",label:"ใบสมัคร",group:"teacherWork"}),t&&e.push({id:"interview",icon:"🗓️",label:"สัมภาษณ์",group:"teacherWork"}),t&&e.push({id:"appoint",icon:"✅",label:"แต่งตั้งสมาชิก",group:"teacherWork"}),t&&e.push({id:"candidateAdmin",icon:"🗳️",label:"จัดการผู้สมัครประธาน",group:"teacherWork"}),t&&e.push({id:"printCenter",icon:"🖨️",label:"พิมพ์ใบรายชื่อ",group:"teacherWork"}),(t||d.membership.length)&&e.push({id:"eval",icon:"🎖️",label:"ประเมิน/เกียรติบัตร",group:"teacherWork"}),(t||d.isChair||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"docs",icon:"📄",label:"งานเอกสารโครงการ",group:"teacherWork"}),(d.isAdmin||d.isExecutive)&&e.push({id:"dashboard",icon:"📊",label:"ภาพรวม",group:"system"}),t&&e.push({id:"settings",icon:"⚙️",label:"ตั้งค่า",group:"system"}),t&&e.push({id:"termAdmin",icon:"🗓️",label:"จัดการวาระ",group:"system"}),d.isAdmin&&e.push({id:"perms",icon:"🔑",label:"มอบสิทธิ์",group:"system"}),(d.isCouncilAdvisor||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"myCouncilProfile",icon:"✍️",label:"โปรไฟล์ของฉัน",group:"system"});const r=Lr(),n=new Set;return r.candidates===!1&&(n.add("candidates"),n.add("result")),r.news===!1&&n.add("news"),r.evaluate===!1&&n.add("eval"),r.docs===!1&&n.add("docs"),r.interview===!1&&n.add("interview"),r.appoint===!1&&n.add("appoint"),r.chairteam===!1&&n.add("chairteam"),r.chairtasks===!1&&n.add("assignments"),e.filter(i=>!n.has(i.id))}let qe=null;function Po(e){var o;const t=Object.keys(tr);document.getElementById("council-sidebar-nav").innerHTML=t.map(a=>{const s=e.filter(c=>c.group===a);return s.length?`
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${l(tr[a].label)}</p>
        ${s.map(c=>`
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${c.id===Re?"bg-[var(--hero-3)] text-white":"text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white"}" data-view="${c.id}">
            <span>${c.icon}</span> ${l(c.label)}
            ${c.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${c.badge}</span>`:""}
          </button>`).join("")}
      </div>`:""}).join("");const r=t.map(a=>({id:a,...tr[a],items:e.filter(s=>s.group===a)})).filter(a=>a.items.length),n=(o=r.find(a=>a.items.some(s=>s.id===Re))||r[0])==null?void 0:o.id;document.getElementById("council-bottom-tabs").innerHTML=`<div class="flex overflow-x-auto">${r.map(a=>{const s=a.id===n,c=a.items.reduce((m,p)=>m+(p.badge||0),0);return`
    <button type="button" class="council-nav-group-btn relative flex-1 min-w-[68px] shrink-0 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${s?"text-[var(--primary)]":"text-[var(--muted)]"}" data-group="${a.id}">
      <span class="text-xl">${a.icon}</span>
      <span class="text-[0.625rem] font-medium">${l(a.label)}</span>
      ${c?`<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${c}</span>`:""}
    </button>`}).join("")}</div>`,document.querySelectorAll(".council-nav-link").forEach(a=>{a.addEventListener("click",()=>{Be(a.dataset.view),f()})}),document.querySelectorAll(".council-nav-group-btn").forEach(a=>{a.addEventListener("click",()=>{const s=r.find(c=>c.id===a.dataset.group);s.items.length===1?(Be(s.items[0].id),qe=null,f()):(qe=qe===s.id?null:s.id,Wr(e))})});const i=e.find(a=>a.id===Re);document.getElementById("council-view-title").textContent=(i==null?void 0:i.label)??"หน้าหลัก",Wr(e)}function Wr(e){const t=document.getElementById("council-mobile-sheet");if(!t)return;if(!qe){t.innerHTML="";return}const r=e.filter(n=>n.group===qe);t.innerHTML=`
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${r.map((n,i)=>`
            <button type="button" class="mobile-sheet-item text-left border ${n.id===Re?"border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]":"border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]"}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${n.id}">
              <span class="text-base">${n.icon}</span><span>${l(n.label)}</span>
              ${n.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${n.badge}</span>`:""}
            </button>`).join("")}
        </div>
      </div>
    </div>`,document.getElementById("mobile-sheet-backdrop").addEventListener("click",n=>{n.target.id==="mobile-sheet-backdrop"&&(qe=null,f())}),document.querySelectorAll(".mobile-sheet-item").forEach(n=>{n.addEventListener("click",()=>{Be(n.dataset.view),qe=null,f()})})}function Oo(){const{applications:e,membership:t}=d;return!e.length&&!t.length?"":`
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${t.map(r=>{var n,i;return`
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${l(((n=r.council_positions)==null?void 0:n.position_name)??"—")} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${l(j[(i=r.council_positions)==null?void 0:i.gender]??"")})</span></p>
          </div>`}).join("")}
        ${e.map(r=>{var n;return`
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${l(((n=r.council_positions)==null?void 0:n.position_name)??"—")}</p>
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(r.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${l(Ar[r.status]??r.status)}</span>
          </div>`}).join("")}
      </div>
    </div>`}function xt(e,t,r,n){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${e}</p>
        ${r?`<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${r}">${l(n)} →</button>`:""}
      </div>
      ${t}
    </div>`}function Fo(){return d.isChair?["ยินดีต้อนรับประธานสภานักเรียน","ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่"]:d.membership.length?["ยินดีต้อนรับสมาชิกสภานักเรียน","ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ"]:d.isCouncilAdvisor?["ครูที่ปรึกษาสภานักเรียน","ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา"]:d.isAdmin?["จัดการระบบสภานักเรียน","ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล"]:d.role==="teacher"&&d.pendingEndorsements.length?["รับรองผู้สมัครสภานักเรียน","ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ"]:["ระบบสภานักเรียน","ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน"]}function Yo(){const e=d.cfg.council_featured_phase;if(e)return e;const t=new Date,r=d.cfg.council_apply_opens_at?new Date(d.cfg.council_apply_opens_at):null,n=d.cfg.council_apply_closes_at?new Date(d.cfg.council_apply_closes_at):null;return r&&n&&t>=r&&t<=n?"apply":d.elections.some(o=>o.opens_at&&o.closes_at&&t>=new Date(o.opens_at)&&t<=new Date(o.closes_at))?"election":"none"}function zo(){return d.isChair?"👑 ประธานสภานักเรียน":d.membership.length?"🎫 สมาชิกสภานักเรียน":d.isCouncilAdvisor?"🏫 ครูที่ปรึกษาสภานักเรียน":d.role==="admin"?"🛡️ ผู้ดูแลระบบ (แอดมิน)":d.isAdmin?"🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)":d.role==="teacher"?"👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)":d.role==="student"?"🎓 นักเรียน":"ผู้เยี่ยมชม"}function Go(){const e=d.cfg,t=e.council_term_start_semester&&e.council_term_start_year?`ภาคเรียนที่ ${l(e.council_term_start_semester)}/${l(e.council_term_start_year)} – ภาคเรียนที่ ${l(e.council_term_end_semester||e.council_term_start_semester)}/${l(e.council_term_end_year||e.council_term_start_year)}`:null,r=e.council_visible_to_all!=="false",[n,i]=Fo(),o=d.isAdmin||d.isCouncilAdvisor?`
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${r?"bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]":"bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]"}">
      <span>${r?"✅":"🔒"}</span>
      <span>${r?"ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว":"ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น"}</span>
    </div>`:"";return`
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${l(zo())}</span></p>
    ${o}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${t?`<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${t}</span>`:""}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${l(n)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${l(i)}</p>
      ${d.isAdmin||d.isCouncilAdvisor||d.isChair?`
      <div class="flex flex-wrap gap-2 mt-4">
        ${d.isAdmin||d.isCouncilAdvisor?'<button type="button" class="goto-view px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90" data-view="settings">⚙️ ตั้งค่าระบบ</button>':""}
        <a href="council-election.html" target="_blank" class="px-4 py-2 rounded-[10px] bg-white/10 border border-white/25 text-white text-sm font-bold hover:bg-white/20">🗳️ หน้าลงคะแนน</a>
      </div>`:""}
    </div>`}function Vo(){if(ee===null)return Pa(),xt("📅 กิจกรรมประจำปี",'<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>');const e={};ee.forEach(i=>{e[i.status]=(e[i.status]??0)+1});const t=`
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${Ba.map(([i,o,a,s])=>`
        <div class="rounded-[10px] border ${a} p-2 text-center">
          <p class="text-lg font-bold ${s}">${e[i]??0}</p>
          <p class="text-[0.625rem] text-[var(--muted)]">${o}</p>
        </div>`).join("")}
    </div>`,r=[...ee].sort((i,o)=>new Date(i.activity_date||0)-new Date(o.activity_date||0)).slice(0,5),n=r.length?`
    <div class="space-y-0.5">
      ${r.map(i=>{const[o,a,s]=Ma[i.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]"];return`
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(i.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${i.activity_date?new Date(i.activity_date).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—"} ${i.owner_text?"· "+l(i.owner_text):""}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${s} ${a}">${o}</span>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>';return xt("📅 กิจกรรมประจำปี",t+n,"activities","ดูทั้งหมด")}function Uo(){const e=["M","W"].map(r=>d.members.find(n=>{var i,o;return n.status==="active"&&((i=n.council_positions)==null?void 0:i.gender)===r&&((o=n.council_positions)==null?void 0:o.is_elected)})),t=e.some(Boolean)?`
    <div class="space-y-3">
      ${e.map((r,n)=>{var a,s,c;const i=n===0?"M":"W";if(!r)return`<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${j[i]}</div>`;const o=i==="W";return`
        <div class="flex items-center gap-3 rounded-xl border p-3 ${o?"bg-[var(--pink-soft)] border-[var(--pink-soft-line)]":"bg-[var(--primary-soft)] border-[var(--primary-soft-line)]"}">
          ${z(r.students,"w-12 h-16")}
          <div class="min-w-0">
            <p class="text-[0.6875rem] font-bold ${o?"text-[var(--pink)]":"text-[var(--primary)]"}">${l(((a=r.council_positions)==null?void 0:a.position_name)??"ประธานสภานักเรียนฝ่าย"+j[i])}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((s=r.students)==null?void 0:s.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((c=r.students)==null?void 0:c.main_room)??"")}</p>
          </div>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>';return xt("🏛️ สภานักเรียนชุดปัจจุบัน",t,"roster","ดูโครงสร้าง")}function Wo(){if(!d.isAdmin&&!d.isExecutive)return"";if(T===null)return ht(),xt("📋 การสมัครสภานักเรียน",'<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p>');const e=T.length,t=T.filter(a=>a.endorsed_at).length,r=T.filter(a=>a.peer_endorsed_at||rt(a)).length,n=T.filter(a=>a.status==="candidate").length,i=(a,s,c)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${c}">${l(a)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(s)}</p>
    </div>`,o=`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      ${i(e,"สมัครแล้วทั้งหมด","var(--ink)")}
      ${i(t,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
      ${Se()?i(r,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):i("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
      ${i(n,"ว่าที่สภานักเรียน","var(--primary)")}
    </div>`;return xt("📋 การสมัครสภานักเรียน",o,"dashboard","ดูรายละเอียด")}function Aa(){const e=Go(),t=Oo(),r=(u,x,b,v)=>`
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${u}">
      <p class="text-2xl mb-1">${x}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${l(b)}</p>
      ${v?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(v)}</p>`:""}
    </button>`,n=(u,x,b,v)=>`
    <button type="button" class="flow-entry-btn w-full bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl shadow-[0_4px_14px_rgba(23,32,42,0.15)] p-4 text-left text-white hover:opacity-95 transition flex items-center gap-3" data-flow="${u}">
      <p class="text-3xl flex-shrink-0">${x}</p>
      <div class="min-w-0 flex-1">
        <span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-white/20 mb-1">🔥 ช่วงนี้</span>
        <p class="text-base font-extrabold [text-wrap:pretty]">${l(b)}</p>
        ${v?`<p class="text-xs text-white/85 mt-0.5 [text-wrap:pretty]">${l(v)}</p>`:""}
      </div>
      <span class="text-white/70 flex-shrink-0">→</span>
    </button>`,i=d.elections.length>0,o=i||d.isAdmin,a=d.role==="student"&&Mt(d.student),s=i?"การเลือกตั้ง":"ตั้งค่าการเลือกตั้ง",c=i?"":"ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า",m=a&&o?Yo():"none";let p="";if(a&&o&&m!=="none"){const u=m==="apply"?n("apply","📝","สมัครสภานักเรียน","เปิดรับสมัครสภานักเรียนวาระใหม่"):r("apply","📝","สมัครสภานักเรียน"),x=m==="election"?n("election","🗳️",s,c||"เปิดใช้งานอยู่ ณ ขณะนี้"):r("election","🗳️",s,c);p=`<div class="space-y-3">${m==="apply"?u+x:x+u}</div>`}else(a||o)&&(p=`
    <div class="grid ${a&&o?"grid-cols-2":"grid-cols-1"} gap-3">
      ${a?r("apply","📝","สมัครสภานักเรียน"):""}
      ${o?r("election","🗳️",s,c):""}
    </div>`);return`<div class="space-y-4">
    ${e}
    ${t}
    ${Wo()}
    ${p}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${Vo()}
      ${Uo()}
    </div>
  </div>`}function Ho(){if(d.role!=="student")return"";if(!d.student)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;const e=Ee(d.student.gender),t=d.positions.filter(o=>o.gender===e),r=new Set(d.applications.filter(o=>o.status!=="rejected").map(o=>o.position_id)),n=t.filter(o=>!r.has(o.id));if(!e)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;if(!Mt(d.student))return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ${l(pr(d.student))}
      <p class="mt-1 text-xs">${l(d.student.main_room||d.student.religion_room||"ไม่พบข้อมูลห้อง")}</p>
    </div>`;if(!Dt)return`
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${n.length?"":"opacity-50 pointer-events-none"}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${j[e]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${n.length?`เปิดรับ ${n.length} ตำแหน่ง`:"ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)"}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`;const i=K?Jo():U===1?Ko(n):U===2?Xo():U===3?Zo():U===4?ei():U===5?ti():ri(e);return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${j[e]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${K?"":Qo()}
      ${i}
    </div>
    ${He?ai():""}`}function Jo(){const e=gr()[K.step-1]??"",t=K.savedAt?new Date(K.savedAt).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"";return`
    <div class="text-center py-4 space-y-3">
      <p class="text-3xl">📝</p>
      <p class="text-sm font-bold text-[var(--ink)]">พบข้อมูลที่กรอกค้างไว้</p>
      <p class="text-xs text-[var(--muted-2)]">กรอกถึงขั้นตอนที่ ${K.step}/${gr().length} · ${l(e)}${t?` · บันทึกล่าสุด ${t}`:""}</p>
      <p class="text-[0.6875rem] text-[var(--gold-ink)] bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-2.5 text-left">⚠️ รูปถ่าย/ไฟล์เกียรติบัตรที่เคยแนบไว้ต้องแนบใหม่อีกครั้ง (เบราว์เซอร์เก็บไฟล์ข้ามการปิดหน้าไม่ได้) ส่วนข้อความอื่นๆ กู้คืนให้ครบ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-draft-discard" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">เริ่มใหม่</button>
        <button type="button" id="btn-apply-draft-resume" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">กู้คืนข้อมูล</button>
      </div>
    </div>`}const Hr=["เลือกตำแหน่ง","เกรดเฉลี่ย & แรงจูงใจ","รูปถ่าย","วิดีโอแนะนำตัว","เกียรติบัตร/รางวัล"];function qr(){return d.cfg.council_require_peer_endorsement==="true"}function gr(){return qr()?[...Hr,"เลือกพี่สภารับรอง"]:Hr}function Qo(){const e=gr();return`
    <div class="flex items-center gap-1.5 mb-3">
      ${e.map((t,r)=>`<div class="flex-1 h-1.5 rounded-full ${r+1<=U?"bg-[var(--primary)]":"bg-[var(--line-soft)]"}"></div>`).join("")}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${U}/${e.length} · ${e[U-1]}</p>`}function Ko(e){return`
    <form id="apply-step1-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
        <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— เลือกตำแหน่ง —</option>
          ${e.map(t=>`<option value="${t.id}" ${M.positionId===String(t.id)?"selected":""}>${l(t.position_name)}</option>`).join("")}
        </select>
        ${e.length?"":'<p class="text-xs text-[var(--gold-ink)] mt-1.5">ไม่มีตำแหน่งเปิดรับในขณะนี้</p>'}
      </div>
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${e.length?"":"disabled"}>ถัดไป →</button>
    </form>`}function Xo(){const e=d.cfg.council_min_gpa||"2.50",t=d.cfg.council_min_gpa_religious||"2.50";return`
    <form id="apply-step2-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยสามัญ <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaGeneral" type="number" step="0.01" min="0" max="4" required value="${l(M.gpaGeneral)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${l(e)}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยศาสนา <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaReligious" type="number" step="0.01" min="0" max="4" required value="${l(M.gpaReligious)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${l(t)}</p>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
        <textarea name="motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก (อย่างน้อย 10 ตัวอักษร)"
          class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(M.motivation)}</textarea>
      </div>
      <div class="flex gap-2">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function Zo(){return`
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${ve?`<img src="${ve}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />`:""}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`}function ei(){const e=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),t=d.cfg.council_video_max_minutes||"3";return`
    <form id="apply-step4-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ลิงก์วิดีโอแนะนำตัว <span class="text-[var(--bad)]">*</span></label>
        <input name="videoUrl" type="url" required placeholder="https://..." value="${l(M.videoUrl)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ความยาวไม่เกิน ${l(t)} นาที (ลิงก์ YouTube/Google Drive/TikTok ที่เปิดดูได้)</p>
      </div>
      ${e.length?`
        <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3">
          <p class="text-xs font-bold text-[var(--primary-dark)] mb-1.5">🎬 หัวข้อที่ควรพูดถึงในวิดีโอ</p>
          <ul class="text-xs text-[var(--ink-2)] space-y-1 list-disc list-inside">
            ${e.map(r=>`<li>${l(r)}</li>`).join("")}
          </ul>
        </div>`:""}
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function ti(){const e=H.filter(n=>n.file&&n.title.trim()).length,t=it(),r=(n,i)=>`
    <div class="rounded-xl border border-[var(--line)] p-3 space-y-2" data-cert-idx="${i}">
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold text-[var(--muted)]">รายการที่ ${i+1}</p>
        ${H.length>1?`<button type="button" class="btn-remove-cert text-xs text-[var(--bad)]" data-idx="${i}">🗑️ ลบ</button>`:""}
      </div>
      <input type="text" class="cert-title-input w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"
        placeholder="ชื่อรางวัล/กิจกรรม เช่น รางวัลชนะเลิศการแข่งขันโต้วาทีระดับจังหวัด" data-idx="${i}" value="${l(n.title)}" />
      <div class="flex items-center gap-2">
        ${n.file?n.isPdf?'<span class="w-10 h-10 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-lg flex-shrink-0">📄</span>':`<img src="${n.previewUrl}" class="w-10 h-10 rounded-lg object-cover border border-[var(--line)] flex-shrink-0" />`:""}
        <input type="file" accept="image/*,.pdf,application/pdf" class="cert-file-input text-xs flex-1 min-w-0" data-idx="${i}" />
      </div>
    </div>`;return`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เกียรติบัตร/รางวัลจากการแข่งขันหรือกิจกรรมนอกโรงเรียน <span class="text-[var(--bad)]">*</span></label>
        <p class="text-[0.6875rem] ${e>=t?"text-[var(--ok)]":"text-[var(--muted-2)]"}">แนบได้ทั้งรูปภาพและไฟล์ PDF — ต้องมีอย่างน้อย ${t} รายการ (ตอนนี้ครบ ${e}/${t})</p>
      </div>
      <div class="space-y-2.5">${H.map(r).join("")}</div>
      <button type="button" id="btn-add-cert" class="w-full py-2 rounded-xl border border-dashed border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]">＋ เพิ่มรายการ</button>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step5-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">${qr()?"ถัดไป →":"ตรวจสอบและยืนยัน →"}</button>
      </div>
    </div>`}function ri(e){const t=(d.members||[]).filter(n=>{var i;return((i=n.council_positions)==null?void 0:i.gender)===e&&n.student_id!==d.student.id}).sort((n,i)=>{var o,a;return(((o=n.council_positions)==null?void 0:o.sort_order)??0)-(((a=i.council_positions)==null?void 0:a.sort_order)??0)});if(!t.length)return`
      <div class="space-y-3">
        <div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-3 text-xs text-[var(--gold-ink)]">
          ⚠️ ตอนนี้ยังไม่มีสมาชิกสภานักเรียน${j[e]}ในระบบให้เลือกเป็นผู้รับรอง กรุณาติดต่อครูที่ปรึกษาสภาหรือผู้ดูแลระบบ
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        </div>
      </div>`;const r=n=>{var i,o,a;return`
    <button type="button" class="btn-pick-peer-endorser w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(M.peerEndorserId)===String(n.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${n.id}">
      ${z(n.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((i=n.students)==null?void 0:i.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${l(((o=n.council_positions)==null?void 0:o.position_name)??"—")} · ${l(((a=n.students)==null?void 0:a.main_room)??"—")}</p>
      </div>
      ${String(M.peerEndorserId)===String(n.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`};return`
    <div class="space-y-3">
      <p class="text-xs text-[var(--muted-2)]">เลือกสมาชิกสภานักเรียน${j[e]}ที่ต้องการให้เป็นผู้รับรองใบสมัครของคุณ — ใบสมัครจะรอเฉพาะคนที่เลือกเท่านั้น</p>
      <div class="space-y-2 max-h-96 overflow-y-auto">${t.map(r).join("")}</div>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step6-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${M.peerEndorserId?"":"disabled"}>ตรวจสอบและยืนยัน →</button>
      </div>
    </div>`}function ai(){var n;const e=d.positions.find(i=>i.id===Number(M.positionId)),t=d.student,r=M.peerEndorserId?(d.members||[]).find(i=>String(i.id)===String(M.peerEndorserId)):null;return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${ve?`<img src="${ve}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />`:""}
            <div class="min-w-0">
              <p class="font-bold text-[var(--ink)] truncate">${l((t==null?void 0:t.full_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${l((t==null?void 0:t.student_code)??"")} · ${l((t==null?void 0:t.main_room)??"")}</p>
            </div>
          </div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">ตำแหน่ง</span><span class="font-bold text-[var(--ink)] text-right">${l((e==null?void 0:e.position_name)??"—")}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดสามัญ</span><span class="font-bold text-[var(--ink)]">${l(M.gpaGeneral)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดศาสนา</span><span class="font-bold text-[var(--ink)]">${l(M.gpaReligious)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">รูปถ่าย</span><span class="font-bold ${Ne?"text-[var(--ok)]":"text-[var(--bad)]"}">${Ne?"✅ แนบแล้ว":"❌ ยังไม่ได้แนบ"}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">วิดีโอ</span><span class="font-bold text-[var(--ink)] truncate">${l(M.videoUrl)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกียรติบัตร/รางวัล</span><span class="font-bold text-[var(--ok)]">✅ ${H.filter(i=>i.file&&i.title.trim()).length} รายการ</span></div>
          ${r?`<div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">พี่สภาที่ขอให้รับรอง</span><span class="font-bold text-[var(--ink)] text-right">${l(((n=r.students)==null?void 0:n.full_name)??"—")}</span></div>`:""}
          <div>
            <p class="text-[var(--muted)] mb-1">แรงจูงใจ</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(M.motivation)}</p>
          </div>
        </div>
        <div class="flex gap-2 pt-4 mt-3 border-t border-[var(--line-soft)]">
          <button type="button" id="btn-apply-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">✏️ แก้ไข</button>
          <button type="button" id="btn-apply-confirm-submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✅ ยืนยันการสมัคร</button>
        </div>
      </div>
    </div>`}function ni(){return d.student?!d.applications.length&&!d.membership.length?'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>':`
    <div class="space-y-2">
      ${d.membership.map(e=>{var t,r;return`
        <div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-xl p-3">
          <p class="text-xs text-[var(--ok)] font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-[#0d4d36]">${l(((t=e.council_positions)==null?void 0:t.position_name)??"—")} <span class="text-xs font-normal">(สภา${l(j[(r=e.council_positions)==null?void 0:r.gender]??"")})</span></p>
        </div>`}).join("")}
      ${d.applications.map(e=>{var t;return`
        <div class="bg-[var(--surface)] rounded-xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0">
              <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((t=e.council_positions)==null?void 0:t.position_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${l(Ar[e.status]??e.status)}</span>
          </div>
          <button type="button" class="btn-view-my-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">📄 ดูใบสมัคร</button>
        </div>`}).join("")}
    </div>
    ${hi()}`:""}function we(e){return d.elections.find(t=>t.gender===e&&t.academic_year===Y)||null}async function Sa(e,t){ne[e]=await ma(t).catch(()=>[]),f()}async function si(e,t){const[r,n]=await Promise.all([Hs(t).catch(()=>({})),ir(e).catch(()=>0)]);br[e]={tally:r,eligible:n},f()}function Ia(){return`<div class="space-y-4">${["M","W"].map(oi).join("")}</div>`}function oi(e){var b;const t=we(e),r=d.student?Ee(d.student.gender):null,n=d.role==="student"&&r===e;if(!t)return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${j[e]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${d.isAdmin||d.isCouncilAdvisor?`<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${e}">เปิดใช้งานการเลือกตั้ง</button>`:""}
      </div>`;const i=new Date,o=t.opens_at?new Date(t.opens_at):null,a=t.closes_at?new Date(t.closes_at):null,s=!!(o&&o<=i&&(!a||a>i)),c=!!(a&&a<=i),m=!!t.results_published_at,p=m?{label:"✅ ประกาศผลแล้ว",cls:"bg-[var(--ok-soft-line)] text-[#106143]"}:c?{label:"🔒 ปิดโหวตแล้ว รอประกาศผล",cls:"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}:s?{label:"🗳️ กำลังเปิดโหวต",cls:"bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"}:{label:"⏳ ยังไม่เปิดโหวต",cls:"bg-[var(--bg-2)] text-[var(--muted)]"};let u="";if(m){ne[e]===void 0&&Sa(e,t.id),br[e]||si(e,t.id);const v=d.members.find(A=>{var I,E;return((I=A.council_positions)==null?void 0:I.gender)===e&&((E=A.council_positions)==null?void 0:E.is_elected)}),y=v?`
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${z(v.students,"w-12 h-16")}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((b=v.students)==null?void 0:b.full_name)??"—")}</p>
        </div>
      </div>`:'<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>',_=br[e],S=ne[e];let q="";if(_&&(S!=null&&S.length)){const A=Object.values(_.tally).reduce((L,N)=>L+N,0),I=_.eligible?Math.round(A/_.eligible*100):0;q=`
        <div class="mt-3 space-y-2">
          ${S.slice().sort((L,N)=>(_.tally[N.id]??0)-(_.tally[L.id]??0)).map(L=>{var V;const N=_.tally[L.id]??0,B=A?Math.round(N/A*100):0;return`
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${l(((V=L.students)==null?void 0:V.full_name)??"—")}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${N} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${B}%"></div></div>
              </div>`}).join("")}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${_.eligible} คน · ใช้สิทธิ์ ${A} คน (${I}%)</p>`}u=y+q}else s&&n?u=`
      <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-[var(--primary-dark)]">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[0.6875rem] text-[var(--muted)] mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`:c&&!m?u='<p class="text-xs text-[var(--muted-2)] mt-2">รอผู้ดูแลระบบประกาศผล</p>':!s&&!c&&(u=`<p class="text-xs text-[var(--muted-2)] mt-2">${t.opens_at?"เปิดโหวต "+new Date(t.opens_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""}</p>`);let x="";return(d.isAdmin||d.isCouncilAdvisor)&&(x=`
      <div class="mt-3 pt-3 border-t border-[var(--line-soft)] space-y-2">
        <form class="election-window-form flex flex-wrap gap-2 items-end" data-election-id="${t.id}">
          <label class="text-[0.6875rem] text-[var(--muted-2)]">เปิดโหวต<br><input type="datetime-local" name="opens_at" value="${t.opens_at?t.opens_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <label class="text-[0.6875rem] text-[var(--muted-2)]">ปิดโหวต<br><input type="datetime-local" name="closes_at" value="${t.closes_at?t.closes_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <button type="submit" class="px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] text-xs font-bold">บันทึกช่วงเวลา</button>
        </form>
        ${c&&!m?`<button type="button" class="btn-publish-results px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-election-id="${t.id}" data-gender="${e}">📢 ประกาศผล+แต่งตั้ง</button>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">🔗 หน้าโหวต (เปิดที่จุดลงคะแนนเท่านั้น): <a href="council-election.html" target="_blank" class="text-[var(--primary)] underline">council-election.html</a></p>
      </div>`),`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${j[e]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${p.cls}">${p.label}</span>
      </div>
      ${u}
      ${x}
    </div>`}function ii(e,t){var o,a,s,c,m,p,u;const r=e.photo_url||((o=e.students)==null?void 0:o.image_url)||((a=e.students)==null?void 0:a.photo_url),n=(s=e.council_applications)==null?void 0:s.gpa_general,i=(c=e.council_applications)==null?void 0:c.gpa_religious;return`
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${t}" data-id="${e.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${r?`<img src="${l(r)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${l((((m=e.students)==null?void 0:m.full_name)||"?").charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${e.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((p=e.students)==null?void 0:p.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)]">${l(((u=e.students)==null?void 0:u.main_room)??"")}</p>
        ${n!=null||i!=null?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${l(n??"—")} · ศาสนา ${l(i??"—")}</p>`:""}
        ${e.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${l(e.slogan)}"</p>`:""}
      </div>
    </button>`}function li(){const e=t=>{const r=we(t),n=`<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${j[t]}</p>`;if(!r)return`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`;const i=ne[t];return i===void 0?(Sa(t,r.id),`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>`):i.length?`
      <div>
        ${n}
        <div class="grid grid-cols-2 gap-3">${i.map(o=>ii(o,t)).join("")}</div>
      </div>`:`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`};return`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${e("M")}${e("W")}</div>${di()}`}function di(){var m,p,u,x,b,v,y,_;if(!Qe)return"";const{gender:e,id:t}=Qe,r=(ne[e]||[]).find(S=>S.id===t);if(!r)return"";const n=d.isAdmin||d.isCouncilAdvisor,i=Array.isArray(r.policies)?r.policies:[],o=Array.isArray(r.experience)?r.experience:[],a=r.photo_url||((m=r.students)==null?void 0:m.image_url)||((p=r.students)==null?void 0:p.photo_url),s=(u=r.council_applications)==null?void 0:u.gpa_general,c=(x=r.council_applications)==null?void 0:x.gpa_religious;return Ce?`
      <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
        <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
          <p class="text-base font-bold text-[var(--ink)] mb-3">✏️ แก้ไขโปรไฟล์ผู้สมัคร — ${l(((b=r.students)==null?void 0:b.full_name)??"")}</p>
          <form id="candidate-edit-form" class="space-y-2.5" data-candidate-id="${r.id}">
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สโลแกน</label>
              <input name="slogan" value="${l(r.slogan??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">วิสัยทัศน์</label>
              <textarea name="vision" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(r.vision??"")}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">นโยบาย (บรรทัดละ 1 ข้อ)</label>
              <textarea name="policies" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(i.join(`
`))}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน (บรรทัดละ 1 ข้อ)</label>
              <textarea name="experience" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(o.join(`
`))}</textarea>
            </div>
            <div class="flex gap-2 pt-2">
              <button type="button" id="btn-candidate-cancel-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
              <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
            </div>
          </form>
        </div>
      </div>`:`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto">
        <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
          ${a?`<img src="${l(a)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${l((((v=r.students)==null?void 0:v.full_name)||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${r.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${l(((y=r.students)==null?void 0:y.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((_=r.students)==null?void 0:_.main_room)??"")}${s!=null||c!=null?` · เกรดสามัญ ${l(s??"—")} · ศาสนา ${l(c??"—")}`:""}</p>
          </div>
          ${r.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${l(r.slogan)}"</p>`:""}
          ${r.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${l(r.vision)}</p></div>`:""}
          ${i.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${i.map(S=>`<li>${l(S)}</li>`).join("")}</ul></div>`:""}
          ${o.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${o.map(S=>`<li>${l(S)}</li>`).join("")}</ul></div>`:""}
          ${!r.slogan&&!r.vision&&!i.length&&!o.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          ${n?'<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>':""}
        </div>
      </div>
    </div>`}const tt={pending:["รอนัดสัมภาษณ์","bg-[var(--bg-2)] text-[var(--muted)]"],interview_scheduled:["นัดสัมภาษณ์แล้ว รอให้คะแนน","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],interviewed:["ผ่านสัมภาษณ์","bg-[var(--ok-soft-line)] text-[#106143]"],candidate:["ผู้สมัครเลือกตั้ง","bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"],appointed:["แต่งตั้งแล้ว","bg-[#e3f1ef] text-[var(--teal)]"],rejected:["ไม่ผ่าน","bg-[var(--bad-soft-line)] text-[#8a2f22]"]},Ca={M:"bg-[#edf4f0] text-[#14563b]",W:"bg-[#fdeef4] text-[#a3134f]"},Yt=[{id:"all",label:"ทั้งหมด"},{id:"awaiting_endorsement",label:"รอรับรอง"},{id:"endorsed",label:"รับรองแล้ว"},{id:"scheduled",label:"นัดแล้ว"},{id:"interviewed",label:"ผ่านสัมภาษณ์"},{id:"rejected",label:"ไม่ผ่าน"}];function Se(){return d.cfg.council_require_peer_endorsement==="true"}function rt(e){var r;const t=((r=e.students)==null?void 0:r.id)??e.student_id;return!!t&&d.members.some(n=>n.student_id===t)}function Fe(e){return!Se()||rt(e)?!0:!!e.peer_endorsed_at}function La(e){const t=[];return e.endorsed_at||t.push("รอครูที่ปรึกษาสามัญรับรอง"),Fe(e)||t.push("รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง"),t.join(" และ")}function Jt(e){var r;return((r=((e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||"").match(/^(ม\.\d+|ปวช\.\d+)/))==null?void 0:r[1])??null}function zt(e){return e.status==="rejected"?"rejected":e.status==="pending"?e.endorsed_at&&Fe(e)?"endorsed":"awaiting_endorsement":e.status==="interview_scheduled"?"scheduled":"interviewed"}async function ht(){T=await ba(Y,R).catch(()=>[]),f()}async function jr(){ue=await an().catch(()=>[]),f()}const rr={draft:"ร่าง",planned:"วางแผนแล้ว",active:"กำลังดำเนินการ",completed:"เสร็จสิ้น",cancelled:"ยกเลิก"},Ta={present:"มา",late:"มาสาย",excused_leave:"ลาโดยมีเหตุผล",unexcused_absence:"ขาด"},Rr={pending:"รอสรุป",pass:"ผ่าน",fail:"ไม่ผ่าน",withdrawn:"ถอนตัว"};function wt(){return!!(d!=null&&d.isAdmin||d!=null&&d.isCouncilAdvisor||d!=null&&d.isStudentAffairsHead)}function Jr(e){return e?new Date(`${e}T00:00:00`).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนด"}function yr(e){return!(e!=null&&e.start_date)&&!(e!=null&&e.end_date)?"ยังไม่กำหนดช่วงเวลา":`${Jr(e.start_date)}${e.end_date?` – ${Jr(e.end_date)}`:""}`}async function ci(){var e;Q=await Os(Y,R).catch(()=>[]),be==null&&Q.length&&(be=Q[0].id),be!=null&&!Q.some(t=>t.id===be)&&(be=((e=Q[0])==null?void 0:e.id)??null,G=null),f()}async function ui(){vr=!0,T=await ba(Y).catch(()=>[]),vr=!1,f()}async function pi(e){Ot=e,G=await Js(e).catch(()=>({participants:[],attendance:[],criteria:[],scores:[],results:[],error:!0})),Ot=null,f()}function hr(e,t){return((e==null?void 0:e.attendance)??[]).filter(r=>Number(r.student_id)===Number(t)).sort((r,n)=>String(n.updated_at??"").localeCompare(String(r.updated_at??"")))[0]}function Dr(e,t){return((e==null?void 0:e.results)??[]).find(r=>Number(r.student_id)===Number(t))}function mi(e,t,r){return((e==null?void 0:e.scores)??[]).find(n=>Number(n.student_id)===Number(t)&&Number(n.criterion_id)===Number(r))}function Gt(e,t){return((e==null?void 0:e.scores)??[]).filter(r=>Number(r.student_id)===Number(t)).reduce((r,n)=>r+Number(n.score||0),0)}function Na(e){const t=new Set(((e==null?void 0:e.participants)??[]).map(n=>Number(n.student_id))),r=new Map;for(const n of T??[]){const i=n.students;i!=null&&i.id&&!t.has(Number(i.id))&&n.status!=="rejected"&&r.set(Number(i.id),{student:i,applicationId:n.id})}for(const n of d.members??[]){const i=n.students;i!=null&&i.id&&!t.has(Number(i.id))&&!r.has(Number(i.id))&&r.set(Number(i.id),{student:i,applicationId:null})}return[...r.values()].sort((n,i)=>String(n.student.full_name??"").localeCompare(String(i.student.full_name??""),"th"))}function bi({event:e,detail:t}){var a,s,c,m;const r=Na(t),n=((c=hr(t,(s=(a=t==null?void 0:t.participants)==null?void 0:a[0])==null?void 0:s.student_id))==null?void 0:c.session_label)||"กิจกรรมหลัก",i=(t==null?void 0:t.criteria)??[],o=((t==null?void 0:t.participants)??[]).map(p=>{const u=p.students??{},x=hr(t,p.student_id),b=Dr(t,p.student_id),v=Gt(t,p.student_id),y=i.map(_=>{const S=mi(t,p.student_id,_.id);return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${l(_.name)} <span class="text-[var(--muted-2)]">(เต็ม ${_.weight})</span></span><input type="number" min="0" max="${Number(_.weight)}" step="0.5" name="criterion_${_.id}" value="${(S==null?void 0:S.score)??""}" class="yla-score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" data-weight="${Number(_.weight)}"></div>`}).join("");return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3">
      <div class="flex items-center gap-3">${z(u)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(u.full_name??"—")}</p><p class="text-xs text-[var(--muted)]">${l(u.student_code??"")} · ${l(u.main_room??"")}</p></div><span class="text-[0.6875rem] font-bold px-2.5 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">${l(p.status==="completed"?"จบกิจกรรม":"ผู้เข้าร่วม")}</span></div>
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <form class="yla-attendance-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${p.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📝 การเข้าร่วม</p><input name="session_label" value="${l((x==null?void 0:x.session_label)??n)}" placeholder="ชื่อช่วง/ฐานกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><select name="attendance_state" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(Ta).map(([_,S])=>`<option value="${_}" ${(x==null?void 0:x.attendance_state)===_?"selected":""}>${S}</option>`).join("")}</select><textarea name="note" rows="2" placeholder="หมายเหตุ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((x==null?void 0:x.note)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกการเข้าร่วม</button></form>
        <form class="yla-score-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${p.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📊 ประเมินศักยภาพ</p>${y||'<p class="text-xs text-[var(--muted)]">ยังไม่มีเกณฑ์ประเมิน</p>'}<p class="text-xs font-bold border-t border-[var(--line-soft)] pt-2">รวม <span class="yla-score-total text-[var(--primary)]">${v}</span> / ${i.reduce((_,S)=>_+Number(S.weight),0)}</p><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกคะแนน</button></form>
        <form class="yla-result-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${p.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">✅ สรุปผลและข้อเสนอ</p><select name="final_result" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(Rr).map(([_,S])=>`<option value="${_}" ${(b==null?void 0:b.final_result)===_||!b&&_==="pending"?"selected":""}>${S}</option>`).join("")}</select><input name="recommended_position" value="${l((b==null?void 0:b.recommended_position)??"")}" placeholder="ตำแหน่งที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input name="recommended_division" value="${l((b==null?void 0:b.recommended_division)??"")}" placeholder="ฝ่ายที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><textarea name="strengths" rows="2" placeholder="จุดเด่น" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((b==null?void 0:b.strengths)??"")}</textarea><textarea name="areas_to_develop" rows="2" placeholder="สิ่งที่ควรพัฒนา" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((b==null?void 0:b.areas_to_develop)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--ok)] text-white text-xs font-bold">บันทึกผลสรุป</button></form>
      </div>
      <div class="flex justify-end"><button type="button" class="yla-participant-status-btn text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--muted)]" data-participant-id="${p.id}" data-status="${p.status==="completed"?"registered":"completed"}">${p.status==="completed"?"↩️ เปิดสถานะผู้เข้าร่วม":"ทำเครื่องหมายว่าจบกิจกรรม"}</button></div>
    </article>`}).join("");return`<section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-2"><div><h2 class="text-base font-bold text-[var(--ink)]">ผู้เข้าร่วมและการติดตาม</h2><p class="text-xs text-[var(--muted)]">บันทึกแยกเป็นการเข้าร่วม คะแนน และผลสรุปรายบุคคล</p></div><span class="text-xs text-[var(--muted)]">${((m=t==null?void 0:t.participants)==null?void 0:m.length)??0} คน</span></div><form id="yla-add-participant-form" class="rounded-2xl border border-dashed border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 flex flex-col sm:flex-row gap-2" data-event-id="${e.id}"><select name="student_id" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><option value="">เลือกนักเรียนหรือสมาชิกสภาเพื่อเพิ่ม</option>${r.map(({student:p})=>`<option value="${p.id}">${l(p.full_name)} · ${l(p.student_code??"")} · ${l(p.main_room??"")}</option>`).join("")}</select><button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" ${r.length?"":"disabled"}>เพิ่มผู้เข้าร่วม</button></form>${r.length?"":'<p class="text-xs text-[var(--muted)]">ไม่มีรายชื่อนักเรียนที่เพิ่มได้จากใบสมัคร/สมาชิกปัจจุบัน หรือเพิ่มไปแล้วทั้งหมด</p>'}${o||'<div class="rounded-2xl border border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีผู้เข้าร่วม กดเพิ่มรายชื่อด้านบน</div>'}</section>`}function vi({event:e,detail:t}){const r=(t==null?void 0:t.participants)??[];return r.length?`<div class="space-y-3">${r.map(n=>{const i=n.students??{},o=hr(t,n.student_id),a=Dr(t,n.student_id),s=Gt(t,n.student_id);return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3"><div class="flex items-center gap-3">${z(i)}<div class="flex-1"><p class="text-sm font-bold text-[var(--ink)]">${l(i.full_name??"ข้อมูลของฉัน")}</p><p class="text-xs text-[var(--muted)]">สถานะ: ${l(n.status==="completed"?"จบกิจกรรม":"กำลังเข้าร่วม")}</p></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs"><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">การเข้าร่วมล่าสุด</p><p class="font-bold text-[var(--ink)] mt-1">${o?`${l(Ta[o.attendance_state]??o.attendance_state)} · ${l(o.session_label)}`:"ยังไม่บันทึก"}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">คะแนนสะสม</p><p class="font-bold text-[var(--primary)] mt-1">${s} / ${((t==null?void 0:t.criteria)??[]).reduce((c,m)=>c+Number(m.weight),0)}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">ผลสรุป</p><p class="font-bold text-[var(--ink)] mt-1">${l(Rr[a==null?void 0:a.final_result]??"รอสรุป")}</p></div></div>${a!=null&&a.strengths||a!=null&&a.areas_to_develop?`<div class="border-t border-[var(--line-soft)] pt-3 text-xs leading-6"><p><strong>จุดเด่น:</strong> ${l((a==null?void 0:a.strengths)??"ยังไม่มีข้อมูล")}</p><p><strong>สิ่งที่ควรพัฒนา:</strong> ${l((a==null?void 0:a.areas_to_develop)??"ยังไม่มีข้อมูล")}</p></div>`:'<p class="text-xs text-[var(--muted)]">ผลประเมินและข้อเสนอจะแสดงเมื่อผู้ดูแลบันทึกผลแล้ว</p>'}</article>`}).join("")}</div>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">กิจกรรมนี้ยังไม่มีข้อมูลการเข้าร่วมของคุณ</div>'}function xi(){if(Q===null)return ci(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดกิจกรรม YLA...</p>';wt()&&T===null&&!vr&&ui();const e=Q.find(o=>Number(o.id)===Number(be));if(e&&G===null&&Ot===null)return pi(e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดผู้เข้าร่วมและผลประเมิน...</p>';const t=o=>o==="active"?"bg-[var(--ok-soft)] text-[var(--ok)]":o==="completed"?"bg-[var(--primary-soft)] text-[var(--primary)]":o==="cancelled"?"bg-[var(--bad-soft)] text-[var(--bad)]":"bg-[var(--bg-2)] text-[var(--muted)]",r=Q.length?Q.map(o=>`<button type="button" class="yla-event-select text-left rounded-2xl border p-4 space-y-2 ${Number(o.id)===Number(be)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"}" data-event-id="${o.id}"><div class="flex items-start gap-2"><span class="flex-1 text-sm font-bold text-[var(--ink)]">${l(o.title)}</span><span class="text-[0.6875rem] font-bold rounded-full px-2 py-1 ${t(o.status)}">${l(rr[o.status]??o.status)}</span></div><p class="text-xs text-[var(--muted)]">${l(yr(o))}${o.location?` · ${l(o.location)}`:""}</p></button>`).join(""):'<div class="rounded-2xl border border-dashed border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีกิจกรรม YLA ในปีการศึกษานี้</div>',n=Ct?'<form id="yla-event-form" class="rounded-2xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 space-y-3"><div class="flex items-center justify-between"><h2 class="font-bold text-[var(--ink)]">สร้างกิจกรรม YLA</h2><button type="button" id="yla-event-cancel" class="text-xs font-bold text-[var(--muted)]">ยกเลิก</button></div><input name="title" required placeholder="ชื่อกิจกรรม เช่น YLA รุ่นที่ 1" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><textarea name="description" rows="2" placeholder="วัตถุประสงค์หรือรายละเอียดกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea><div class="grid grid-cols-2 gap-2"><input type="date" name="start_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="date" name="end_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><div class="grid grid-cols-2 gap-2"><input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="number" min="1" name="capacity" placeholder="จำนวนรับ (ไม่บังคับ)" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><button type="submit" class="w-full py-2.5 rounded-[10px] bg-[var(--primary)] text-white text-sm font-bold">สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น</button></form>':"",i=e?`<section class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-4"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 YLA · ปีการศึกษา ${Y}</p><h2 class="text-xl font-bold text-[var(--ink)] mt-1">${l(e.title)}</h2><p class="text-sm text-[var(--muted)] mt-1">${l(e.description??"กิจกรรมพัฒนาภาวะผู้นำและทักษะการทำงานของนักเรียน")}</p><p class="text-xs text-[var(--muted)] mt-2">${l(yr(e))}${e.location?` · ${l(e.location)}`:""}</p></div><div class="flex flex-wrap gap-2 items-center"><span class="text-xs font-bold rounded-full px-3 py-1.5 ${t(e.status)}">${l(rr[e.status]??e.status)}</span><button type="button" id="yla-print-event" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]">🖨️ พิมพ์สรุป</button></div></div>${wt()?`<form id="yla-event-status-form" class="flex flex-wrap gap-2 items-center border-t border-[var(--line-soft)] pt-3" data-event-id="${e.id}"><span class="text-xs text-[var(--muted)]">สถานะกิจกรรม</span><select name="status" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(rr).map(([o,a])=>`<option value="${o}" ${e.status===o?"selected":""}>${a}</option>`).join("")}</select><button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกสถานะ</button></form>`:""}${Ot===e.id?'<p class="text-sm text-[var(--muted)] text-center py-8">กำลังโหลด...</p>':G!=null&&G.error?'<p class="text-sm text-[var(--bad)] text-center py-8">โหลดข้อมูล YLA ไม่สำเร็จ</p>':wt()?bi({event:e,detail:G}):vi({event:e,detail:G})}</section>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">เลือกกิจกรรมเพื่อดูรายละเอียดและติดตามผล</div>';return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 กิจกรรม YLA · Youth Leadership For Azizstan</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ติดตามกิจกรรมและพัฒนาการรายบุคคล</h1><p class="text-sm text-[var(--muted)] mt-2 leading-6">นักเรียนดูสถานะ การเข้าร่วม คะแนน และผลสรุปของตนเองได้ ส่วนผู้ดูแลจัดกิจกรรม เพิ่มผู้เข้าร่วม เช็กชื่อ และบันทึกผลได้ในหน้าเดียว</p></div>${wt()?'<button type="button" id="yla-event-open" class="px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">＋ สร้างกิจกรรม YLA</button>':""}</div><div class="flex flex-wrap gap-2 mt-4 text-xs"><a href="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit?tab=t.gq6dk28nkqg8" target="_blank" rel="noopener" class="px-3 py-2 rounded-[10px] border border-[var(--line)] font-bold text-[var(--primary)]">🔗 เปิดชุดเอกสาร YLA ต้นฉบับ</a><span class="px-3 py-2 rounded-[10px] bg-[var(--bg-2)] text-[var(--muted)]">เก็บข้อมูลตามกิจกรรม ไม่ปะปนกับสารบัญเอกสาร</span></div></section>${n}<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">${r}</section>${i}<details class="mt-2"><summary class="cursor-pointer text-sm font-bold text-[var(--primary)]">📚 ดูสารบัญเอกสาร YLA YLA-00 ถึง YLA-10</summary><div class="mt-4">${ur({kind:"yla",esc:l})}</div></details></div>`}function fi(){var e,t,r,n,i,o;document.querySelectorAll(".yla-event-select").forEach(a=>a.addEventListener("click",()=>{be=Number(a.dataset.eventId),G=null,f()})),(e=document.getElementById("yla-event-open"))==null||e.addEventListener("click",()=>{Ct=!0,f()}),(t=document.getElementById("yla-event-cancel"))==null||t.addEventListener("click",()=>{Ct=!1,f()}),(r=document.getElementById("yla-event-form"))==null||r.addEventListener("submit",async a=>{var m;a.preventDefault();const s=a.currentTarget,c=s.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังสร้าง...";try{const p=await An({academicYear:Y,termId:R,title:s.title.value.trim(),description:s.description.value.trim(),startDate:s.start_date.value||null,endDate:s.end_date.value||null,location:s.location.value.trim(),capacity:s.capacity.value?Number(s.capacity.value):null,createdByTeacherId:(m=d.teacher)==null?void 0:m.id});g("สร้างกิจกรรม YLA และเกณฑ์ประเมินแล้ว ✅","success"),Ct=!1,Q=null,be=p.id,G=null,f()}catch(p){g("สร้างกิจกรรมไม่สำเร็จ: "+k(p),"error"),c.disabled=!1,c.textContent="สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น"}}),(n=document.getElementById("yla-event-status-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.currentTarget,c=s.querySelector('button[type="submit"]');c.disabled=!0;try{await Sn(Number(s.dataset.eventId),s.status.value),g("บันทึกสถานะกิจกรรมแล้ว","success"),Q=null,f()}catch(m){g("บันทึกสถานะไม่สำเร็จ: "+k(m),"error"),c.disabled=!1}}),(i=document.getElementById("yla-add-participant-form"))==null||i.addEventListener("submit",async a=>{a.preventDefault();const s=a.currentTarget,c=s.querySelector('button[type="submit"]'),m=Number(s.student_id.value),p=Na(G).find(u=>Number(u.student.id)===m);if(!m||!p){g("กรุณาเลือกรายชื่อผู้เข้าร่วม","warning");return}c.disabled=!0;try{await In({eventId:Number(s.dataset.eventId),studentId:m,applicationId:p.applicationId}),g("เพิ่มผู้เข้าร่วมแล้ว ✅","success"),G=null,f()}catch(u){g("เพิ่มผู้เข้าร่วมไม่สำเร็จ: "+k(u),"error"),c.disabled=!1}}),document.querySelectorAll(".yla-participant-status-btn").forEach(a=>a.addEventListener("click",async()=>{a.disabled=!0;try{await Cn(Number(a.dataset.participantId),a.dataset.status),G=null,f()}catch(s){g("เปลี่ยนสถานะไม่สำเร็จ: "+k(s),"error"),a.disabled=!1}})),document.querySelectorAll(".yla-attendance-form").forEach(a=>a.addEventListener("submit",async s=>{var m;s.preventDefault();const c=a.querySelector('button[type="submit"]');c.disabled=!0;try{await Ln({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),sessionLabel:a.session_label.value.trim(),attendanceState:a.attendance_state.value,note:a.note.value.trim(),recordedByTeacherId:(m=d.teacher)==null?void 0:m.id}),g("บันทึกการเข้าร่วมแล้ว","success"),G=null,f()}catch(p){g("บันทึกการเข้าร่วมไม่สำเร็จ: "+k(p),"error"),c.disabled=!1}})),document.querySelectorAll(".yla-score-form").forEach(a=>{const s=a.querySelector(".yla-score-total"),c=()=>{s&&(s.textContent=[...a.querySelectorAll(".yla-score-input")].reduce((m,p)=>m+(Number(p.value)||0),0))};a.querySelectorAll(".yla-score-input").forEach(m=>m.addEventListener("input",c)),a.addEventListener("submit",async m=>{var x;m.preventDefault();const p=a.querySelector('button[type="submit"]');p.disabled=!0;const u={};a.querySelectorAll(".yla-score-input").forEach(b=>{u[b.name.replace("criterion_","")]=b.value});try{await Tn({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),scores:u,scoredByTeacherId:(x=d.teacher)==null?void 0:x.id}),g("บันทึกคะแนนแล้ว","success"),G=null,f()}catch(b){g("บันทึกคะแนนไม่สำเร็จ: "+k(b),"error"),p.disabled=!1}})}),document.querySelectorAll(".yla-result-form").forEach(a=>a.addEventListener("submit",async s=>{var m;s.preventDefault();const c=a.querySelector('button[type="submit"]');c.disabled=!0;try{await Nn({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),totalScore:Gt(G,Number(a.dataset.studentId)),strengths:a.strengths.value.trim(),areasToDevelop:a.areas_to_develop.value.trim(),recommendedPosition:a.recommended_position.value.trim(),recommendedDivision:a.recommended_division.value.trim(),finalResult:a.final_result.value,finalizedByTeacherId:(m=d.teacher)==null?void 0:m.id}),g("บันทึกผลสรุปแล้ว ✅","success"),G=null,f()}catch(p){g("บันทึกผลสรุปไม่สำเร็จ: "+k(p),"error"),c.disabled=!1}})),(o=document.getElementById("yla-print-event"))==null||o.addEventListener("click",()=>{if(!G||!Qr())return;const a=Qr(),s=(G.participants??[]).map((c,m)=>{const p=c.students??{},u=Dr(G,c.student_id);return`<tr><td>${m+1}</td><td>${l(p.full_name??"")}</td><td>${l(p.student_code??"")}</td><td>${l(p.main_room??"")}</td><td>${Gt(G,c.student_id)}</td><td>${l(Rr[u==null?void 0:u.final_result]??"รอสรุป")}</td></tr>`}).join("");Ie(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${l(a.title)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:30px}h1{font-size:22px}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #ccc;padding:7px;text-align:left;font-size:12px}th{background:#f3f4f6}</style></head><body><h1>สรุปกิจกรรม YLA: ${l(a.title)}</h1><p>ปีการศึกษา ${Y} · ${l(yr(a))}</p><table><thead><tr><th>ลำดับ</th><th>ชื่อ</th><th>รหัส</th><th>ห้อง</th><th>คะแนน</th><th>ผล</th></tr></thead><tbody>${s}</tbody></table></body></html>`)})}function Qr(){return Q==null?void 0:Q.find(e=>Number(e.id)===Number(be))}function gi(e){const t=ue==null?void 0:ue.find(r=>r.id===e);return t?`${t.full_name} · รหัส ${t.id}`:""}function yi(e){if(!e)return"";const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);if(t)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${l(t[1])}" allowfullscreen loading="lazy"></iframe></div>`;const r=e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||e.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);if(r)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${l(r[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`;const n=e.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);return n?`<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${l(n[1])}" allowfullscreen loading="lazy"></iframe></div>`:`<a href="${l(e)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`}function Qt(){if(!Je)return"";const e=T==null?void 0:T.find(t=>t.id===Je);return e?qa(e,e.students,{closeId:"btn-admin-app-detail-close",backdropId:"admin-app-detail-backdrop",canDelete:!!d.isAdmin}):""}function hi(){var t;if(!ct)return"";const e=(t=d.applications)==null?void 0:t.find(r=>r.id===ct);return e?qa(e,d.student,{closeId:"btn-my-app-detail-close",backdropId:"my-app-detail-backdrop",isOwner:!0}):""}function _i(e,t){var a,s;(a=document.getElementById("peer-endorser-picker-modal"))==null||a.remove();const r=(s=d.applications)==null?void 0:s.find(c=>c.id===e),n=(d.members||[]).filter(c=>{var m;return((m=c.council_positions)==null?void 0:m.gender)===t&&c.student_id!==d.student.id}).sort((c,m)=>{var p,u;return(((p=c.council_positions)==null?void 0:p.sort_order)??0)-(((u=m.council_positions)==null?void 0:u.sort_order)??0)}),i=c=>{var m,p,u;return`
    <button type="button" class="btn-peer-picker-choose w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(r==null?void 0:r.requested_peer_endorser_id)===String(c.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${c.id}">
      ${z(c.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((m=c.students)==null?void 0:m.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${l(((p=c.council_positions)==null?void 0:p.position_name)??"—")} · ${l(((u=c.students)==null?void 0:u.main_room)??"—")}</p>
      </div>
      ${String(r==null?void 0:r.requested_peer_endorser_id)===String(c.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`},o=document.createElement("div");o.id="peer-endorser-picker-modal",o.className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",o.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
      <div class="flex items-start justify-between gap-3 mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🙋 เลือกพี่สภาที่ต้องการให้รับรอง</p>
        <button type="button" id="btn-peer-picker-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      ${n.length?`<div class="space-y-2">${n.map(i).join("")}</div>`:`<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีสมาชิกสภานักเรียน${j[t]??""}ในระบบให้เลือก</p>`}
    </div>`,document.body.appendChild(o),o.addEventListener("click",c=>{c.target===o&&o.remove()}),o.querySelector("#btn-peer-picker-close").addEventListener("click",()=>o.remove()),o.querySelectorAll(".btn-peer-picker-choose").forEach(c=>{c.addEventListener("click",async()=>{c.disabled=!0;try{await qn({applicationId:e,memberId:Number(c.dataset.id)}),await ka(),g("เลือกพี่สภาที่ต้องการให้รับรองแล้ว ✅","success"),o.remove(),f()}catch(m){g("บันทึกไม่สำเร็จ: "+k(m),"error"),c.disabled=!1}})})}function qa(e,t,{closeId:r,backdropId:n,isOwner:i=!1,canDelete:o=!1}){var s,c,m,p,u,x,b,v,y,_;const a=Ca[(s=e.council_positions)==null?void 0:s.gender]??"bg-[var(--bg-2)] text-[var(--muted)]";return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="${n}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="${r}" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${z(t,"w-16 h-20")}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${l((t==null?void 0:t.full_name)??"—")}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${a}">${l(j[(c=e.council_positions)==null?void 0:c.gender]??"—")}</span>
            </div>
            <p class="text-xs text-[var(--muted-2)]">${l((t==null?void 0:t.student_code)??"")} · ${l((t==null?void 0:t.main_room)??"")}</p>
            <p class="text-xs text-[var(--primary)] font-semibold mt-0.5">${l(((m=e.council_positions)==null?void 0:m.position_name)??"—")}</p>
          </div>
        </div>
        <div class="space-y-3 pt-3 text-sm">
          <div class="grid grid-cols-2 gap-2">
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดสามัญ</p><p class="font-bold text-[var(--ink)]">${l(e.gpa_general??"—")}</p></div>
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดศาสนา</p><p class="font-bold text-[var(--ink)]">${l(e.gpa_religious??"—")}</p></div>
          </div>
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">แรงจูงใจ / นโยบาย</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-xl p-3 whitespace-pre-line">${l(e.motivation||"—")}</p>
          </div>
          ${e.intro_video_url?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🎬 วิดีโอแนะนำตัว</p>
            ${yi(e.intro_video_url)}
          </div>`:""}
          ${(p=e.certificates)!=null&&p.length?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1.5">🏅 เกียรติบัตร/รางวัล (${e.certificates.length} รายการ)</p>
            <div class="grid grid-cols-3 gap-2">
              ${e.certificates.map(S=>`
                <a href="${l(S.url)}" target="_blank" rel="noopener" class="block rounded-lg border border-[var(--line)] overflow-hidden hover:border-[var(--primary-45)]">
                  ${(S.url??"").endsWith(".pdf")?'<div class="aspect-square bg-[var(--surface-2)] flex items-center justify-center text-2xl">📄</div>':`<img src="${l(S.url)}" class="aspect-square object-cover w-full" />`}
                  <p class="text-[0.5625rem] text-[var(--ink-2)] px-1 py-1 truncate">${l(S.title||"—")}</p>
                </a>`).join("")}
            </div>
          </div>`:""}
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${(u=e.teachers)!=null&&u.full_name?" — "+l(e.teachers.full_name):""}</p>
            ${e.endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${l(e.endorsement_comment)}</p>`:'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>
          ${Se()?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${(b=(x=e.council_members)==null?void 0:x.students)!=null&&b.full_name?" — "+l(e.council_members.students.full_name):""}</p>
            ${rt(e)?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>':e.peer_endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${l(e.peer_endorsement_comment)}</p>`:e.peer_endorsed_at?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>':'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>`:""}
          ${i&&Se()&&!rt(e)&&!e.peer_endorsed_at?`
          <div class="rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2">
            <p class="text-xs font-bold text-[var(--primary-dark)]">🙋 พี่สภาที่ต้องการให้รับรอง</p>
            <p class="text-sm text-[var(--ink)]">${(y=(v=e.requested_peer_endorser)==null?void 0:v.students)!=null&&y.full_name?l(e.requested_peer_endorser.students.full_name):"ยังไม่ได้เลือก"}</p>
            <button type="button" id="btn-pick-my-app-endorser" class="w-full py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${e.id}" data-gender="${l(((_=e.council_positions)==null?void 0:_.gender)??"")}">
              ${e.requested_peer_endorser_id?"🔄 เปลี่ยนพี่สภา":"➕ เลือกพี่สภา"}
            </button>
          </div>`:""}
          ${o&&["pending","rejected"].includes(e.status)?`
          <button type="button" id="btn-delete-council-application" data-id="${e.id}" class="w-full py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">🗑️ ลบใบสมัคร</button>`:""}
        </div>
      </div>
    </div>`}function ja(){var t,r,n,i,o;if(!Le)return"";const e=T==null?void 0:T.find(a=>a.id===Le);return e?`<div id="council-delete-backdrop" class="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
    <div class="bg-[var(--surface)] rounded-2xl p-5 max-w-md w-full space-y-3">
      <p class="text-base font-bold text-[var(--ink)]">🗑️ ยืนยันการนำใบสมัครนี้ออกจากระบบ?</p>
      <div class="text-sm text-[var(--ink-2)] space-y-1">
        <p><b>ชื่อ–สกุล:</b> ${l((t=e.students)==null?void 0:t.full_name)}</p>
        <p><b>รหัสนักเรียน:</b> ${l((r=e.students)==null?void 0:r.student_code)}</p>
        <p><b>ห้อง:</b> ${l(((n=e.students)==null?void 0:n.main_room)||((i=e.students)==null?void 0:i.religion_room)||"—")}</p>
        <p><b>ตำแหน่ง:</b> ${l((o=e.council_positions)==null?void 0:o.position_name)}</p>
        <p><b>สถานะ:</b> ${l(Ar[e.status]||e.status)}</p>
      </div>
      <p class="text-xs text-[var(--bad)]">โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนดำเนินการ</p>
      <textarea id="council-delete-reason" required rows="3" placeholder="เหตุผลการลบ (จำเป็น)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <div class="flex gap-2">
        <button type="button" id="btn-cancel-council-delete" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm">ยกเลิก</button>
        <button type="button" id="btn-confirm-council-delete" class="flex-1 py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">ยืนยันลบ</button>
      </div>
    </div>
  </div>`:""}async function $i(){mr=await Qs().catch(()=>[]),f()}function wi(){if(!d.isAdmin&&!d.isExecutive)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือผู้บริหารเท่านั้น</p>';if(T===null)return ht(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Z===null)return Mr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(mr===null)return $i(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=(()=>{const b=d.cfg.council_term_start_semester,v=d.cfg.council_term_start_year,y=d.cfg.council_term_end_semester,_=d.cfg.council_term_end_year;return!v&&!_?"ยังไม่ได้ตั้งค่าวาระ":`ภาคเรียนที่ ${b??"—"}/${v??"—"} ถึง ภาคเรียนที่ ${y??"—"}/${_??"—"}`})(),t=d.members,r={M:t.filter(b=>{var v;return((v=b.council_positions)==null?void 0:v.gender)==="M"}).length,W:t.filter(b=>{var v;return((v=b.council_positions)==null?void 0:v.gender)==="W"}).length},n=t.filter(b=>{var v;return(v=b.council_positions)==null?void 0:v.is_elected}).sort((b,v)=>{var y,_;return(((y=b.council_positions)==null?void 0:y.sort_order)??0)-(((_=v.council_positions)==null?void 0:_.sort_order)??0)}),i=T.length,o={all:i};T.forEach(b=>{const v=zt(b);o[v]=(o[v]??0)+1});const a=T.filter(b=>b.endorsed_at).length,s=T.filter(b=>b.peer_endorsed_at||rt(b)).length,c=T.filter(b=>b.status==="candidate").length,m=T.filter(b=>b.status==="appointed").length,p=Object.fromEntries(d.positions.map(b=>[b.id,b.position_name])),u=Z.map(b=>({...b,posNames:mr.filter(v=>v.teacher_id===b.id).map(v=>p[v.position_id]).filter(Boolean)})),x=(b,v,y)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${y}">${l(b)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(v)}</p>
    </div>`;return`
    <div class="max-w-4xl mx-auto space-y-5">
      <div>
        <h2 class="text-lg font-bold text-[var(--ink)] mb-0.5">📊 ภาพรวมผู้บริหาร</h2>
        <p class="text-xs text-[var(--muted-2)]">สรุปสภานักเรียนวาระปัจจุบัน สำหรับผู้บริหาร — ดูอย่างเดียว ไม่มีสิทธิ์แก้ไข</p>
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">📋 การสมัครสภานักเรียน</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          ${x(i,"สมัครแล้วทั้งหมด","var(--ink)")}
          ${x(a,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
          ${Se()?x(s,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):x("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
          ${x(c,"ว่าที่สภานักเรียน (ผู้สมัครเลือกตั้ง)","var(--primary)")}
          ${x(m,"แต่งตั้งแล้ว","var(--teal)")}
        </div>
        <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
          ${Yt.map(b=>`
            <span class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--surface-2)] text-[var(--ink-2)]">
              ${l(b.label)} <span class="text-[var(--muted-2)]">${o[b.id]??0}</span>
            </span>`).join("")}
        </div>
        <p class="text-xs text-[var(--muted-2)] mb-2">รายชื่อล่าสุด — กดดูใบสมัครฉบับเต็มได้</p>
        <div class="space-y-1.5 max-h-96 overflow-y-auto">
          ${T.slice(0,30).map(b=>{var q,A;const[v,y]=tt[b.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],_=b.endorsed_at?"✅":"⬜",S=Se()?b.peer_endorsed_at||rt(b)?" · ✅สภา":" · ⬜สภา":"";return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${z(b.students,"w-8 h-10")}
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(((q=b.students)==null?void 0:q.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((A=b.council_positions)==null?void 0:A.position_name)??"—")} · ${_}ครู${S}</p>
              </div>
              <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full ${y}">${l(v)}</span>
              <button type="button" class="btn-view-app-detail flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-lg border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${b.id}">ดู</button>
            </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีใบสมัคร</p>'}
        </div>
        ${T.length>30?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-2 text-center">แสดง 30 รายการล่าสุดจากทั้งหมด ${T.length} รายการ</p>`:""}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-1">🏛️ สภานักเรียนวาระปัจจุบัน</p>
        <p class="text-xs text-[var(--muted)] mb-3">${l(e)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
          ${x(t.length,"สมาชิกสภาทั้งหมด","var(--ink)")}
          ${x(r.M,"สภาชาย","#14563b")}
          ${x(r.W,"สภาหญิง","#a3134f")}
          ${x(n.length,"ตำแหน่งผู้นำ","var(--primary)")}
        </div>
        ${n.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${n.map(b=>{var v,y;return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${z(b.students,"w-9 h-11")}
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(((v=b.students)==null?void 0:v.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((y=b.council_positions)==null?void 0:y.position_name)??"—")}</p>
              </div>
            </div>`}).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีตำแหน่งผู้นำที่เลือกตั้งแล้ว</p>'}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">👨‍🏫 รายนามครูที่ปรึกษาสภานักเรียน</p>
        ${u.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${u.map(b=>`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2.5">
              <div class="w-9 h-9 rounded-full bg-[var(--surface-2)] flex-shrink-0 overflow-hidden flex items-center justify-center text-[var(--muted-2)]">${b.image_url?`<img src="${l(b.image_url)}" class="w-full h-full object-cover" />`:"👤"}</div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(b.full_name)}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${b.posNames.length?l(b.posNames.join(", ")):"ยังไม่ได้กำหนดฝ่ายที่ดูแล"}</p>
              </div>
            </div>`).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีครูที่ปรึกษาสภานักเรียน</p>'}
      </div>
    </div>
    ${Qt()}${ja()}`}function Ra(){return(T??[]).filter(e=>{var t;return!(((t=e.council_positions)==null?void 0:t.gender)!==te||he!=="all"&&zt(e)!==he||vt&&Jt(e.students)!==vt||Ae&&String(e.position_id)!==String(Ae)||Pe==="yes"&&!e.endorsed_at||Pe==="no"&&e.endorsed_at||Oe==="yes"&&!Fe(e)||Oe==="no"&&Fe(e))})}function ki(){var i,o;if(!d.isAdmin&&!d.isCouncilAdvisor)return;const e=Ra().sort((a,s)=>{var c,m,p,u;return String(((c=a.students)==null?void 0:c.main_room)??"").localeCompare(String(((m=s.students)==null?void 0:m.main_room)??""),"th",{numeric:!0})||String(((p=a.students)==null?void 0:p.student_code)??"").localeCompare(String(((u=s.students)==null?void 0:u.student_code)??""),"th",{numeric:!0})});if(!e.length){g("ไม่มีรายชื่อสำหรับพิมพ์","warning");return}const t=Se(),r=[(i=Yt.find(a=>a.id===he))==null?void 0:i.label,vt,Ae?(o=d.positions.find(a=>String(a.id)===String(Ae)))==null?void 0:o.position_name:"",Pe?"ครูที่ปรึกษา: "+(Pe==="yes"?"รับรองแล้ว":"ยังไม่รับรอง"):"",t&&Oe?"พี่สภา: "+(Oe==="yes"?"ผ่านเงื่อนไข":"ยังไม่ผ่านเงื่อนไข"):""].filter(Boolean).join(" · "),n=e.map((a,s)=>{var c,m,p,u,x;return`<tr><td>${s+1}</td><td>${l(((c=a.students)==null?void 0:c.student_code)??"—")}</td><td>${l(((m=a.students)==null?void 0:m.full_name)??"—")}</td><td>${l(((p=a.students)==null?void 0:p.main_room)??"—")}</td><td>${l(((u=a.council_positions)==null?void 0:u.position_name)??"—")}</td><td>${l(((x=tt[a.status])==null?void 0:x[0])??"—")}</td><td>${a.endorsed_at?"รับรองแล้ว":"ยังไม่รับรอง"}</td>${t?`<td>${Fe(a)?"ผ่านเงื่อนไข":"ยังไม่ผ่านเงื่อนไข"}</td>`:""}<td></td></tr>`}).join("");Ie(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>รายชื่อผู้สมัครสภานักเรียน${l(j[te])}</title><style>@page{size:A4 landscape;margin:12mm}body{font-family:Tahoma,Arial,sans-serif;color:#111;font-size:12px}h1{text-align:center;font-size:20px;margin:0 0 8px}.meta{text-align:center;margin:6px 0}table{width:100%;border-collapse:collapse;margin-top:14px}th,td{border:1px solid #555;padding:6px;vertical-align:top}th{background:#eee}thead{display:table-header-group}tr{break-inside:avoid}td:first-child{text-align:center}th:last-child{width:8%}</style></head><body><h1>รายชื่อผู้สมัครสภานักเรียน${l(j[te])}</h1><p class="meta">ปีการศึกษา ${l(String(Y))} · ${e.length} ใบสมัคร / ${new Set(e.map(a=>{var s,c;return((s=a.students)==null?void 0:s.id)??((c=a.students)==null?void 0:c.student_code)??a.id})).size} คน</p><p class="meta">${l(r)}</p><p class="meta">วันที่พิมพ์ ${l(new Date().toLocaleString("th-TH",{timeZone:"Asia/Bangkok",dateStyle:"long",timeStyle:"short"}))}</p><table><thead><tr><th>ลำดับ</th><th>รหัสนักเรียน</th><th>ชื่อ–สกุล</th><th>ห้อง</th><th>ฝ่ายที่สมัคร</th><th>สถานะใบสมัคร</th><th>ครูที่ปรึกษา</th>${t?"<th>การรับรองพี่สภา</th>":""}<th>หมายเหตุ</th></tr></thead><tbody>${n}</tbody></table></body></html>`)}function Ei(){if(!d.isAdmin&&!d.isCouncilAdvisor)return"";if(T===null)return ht(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ae===null)return Tr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ue===null)return jr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=ae.reduce((b,v)=>b+Number(v.weight),0),t=e/2;te!=="M"&&te!=="W"&&(te="M");const r=T.filter(b=>{var v;return((v=b.council_positions)==null?void 0:v.gender)===te}),n=`
    <div class="flex gap-2 mb-3">
      ${["M","W"].map(b=>`
        <button type="button" class="apps-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${b===te?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${b}">
          สภา${j[b]} <span class="${b===te?"text-white/80":"text-[var(--muted-2)]"}">${T.filter(v=>{var y;return((y=v.council_positions)==null?void 0:y.gender)===b}).length}</span>
        </button>`).join("")}
    </div>`,i={all:r.length};r.forEach(b=>{const v=zt(b);i[v]=(i[v]??0)+1}),Yt.some(b=>b.id===he)||(he="all");const o=`
    <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
      ${Yt.map(b=>`
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${b.id===he?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${b.id}">
          ${l(b.label)} <span class="${b.id===he?"text-white/80":"text-[var(--muted-2)]"}">${i[b.id]??0}</span>
        </button>`).join("")}
    </div>`,a=[...new Set(r.map(b=>Jt(b.students)).filter(Boolean))].sort((b,v)=>b.localeCompare(v,"th")),s=d.positions.filter(b=>b.gender===te).sort((b,v)=>b.sort_order-v.sort_order),c=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      <select id="apps-grade-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกระดับชั้น</option>
        ${a.map(b=>`<option value="${l(b)}" ${b===vt?"selected":""}>${l(b)}</option>`).join("")}
      </select>
      <select id="apps-position-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกฝ่าย</option>
        ${s.map(b=>`<option value="${b.id}" ${String(b.id)===String(Ae)?"selected":""}>${l(b.position_name)}</option>`).join("")}
      </select>
      <select id="apps-advisor-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองครูที่ปรึกษา: ทั้งหมด</option>
        <option value="yes" ${Pe==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${Pe==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>
      ${Se()?`
      <select id="apps-peer-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองพี่สภา: ทั้งหมด</option>
        <option value="yes" ${Oe==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${Oe==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>`:""}
    </div>`,m=`<datalist id="council-teacher-datalist">${ue.map(b=>`<option value="${l(b.full_name)} · รหัส ${b.id}"></option>`).join("")}</datalist>`;if(!r.length)return`${n}${o}${c}${m}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภา${j[te]}</p>`;const p=Ra();if(!p.length)return`${n}${o}${c}${m}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`;const u=b=>{var I,E,L,N,B,V,h,$,C,D,O,W,F,J;const v=(I=b.council_interviews)==null?void 0:I[0],[y,_]=tt[b.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],S=Ca[(E=b.council_positions)==null?void 0:E.gender]??"bg-[var(--bg-2)] text-[var(--muted)]",q=!!((L=b.council_positions)!=null&&L.is_elected),A=zt(b);return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${b.id}">
      <div class="flex items-center gap-3">
        ${z(b.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((N=b.students)==null?void 0:N.full_name)??"—")}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${S}">${l(j[(B=b.council_positions)==null?void 0:B.gender]??"—")}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${l(((V=b.students)==null?void 0:V.student_code)??"")} · ${l(((h=b.students)==null?void 0:h.main_room)??"")} · ${l((($=b.council_positions)==null?void 0:$.position_name)??"—")}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${_}">${y}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${b.id}">📄 ดูใบสมัคร</button>

      ${A==="awaiting_endorsement"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${La(b)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}

      ${b.status==="pending"&&b.endorsed_at&&Fe(b)?`
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${b.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-profile-id="${l(((C=b.students)==null?void 0:C.profile_id)??"")}" data-student-name="${l(((D=b.students)==null?void 0:D.full_name)??"")}" data-position-name="${l(((O=b.council_positions)==null?void 0:O.position_name)??"")}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${v!=null&&v.interviewer_teacher_id?l(gi(v.interviewer_teacher_id)):""}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>`:""}

      ${b.status==="interview_scheduled"?`
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${v!=null&&v.scheduled_at?new Date(v.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"—"} ${v!=null&&v.location?"· "+l(v.location):""} ${v!=null&&v.interviewer_teacher_id?"· กรรมการ "+l(((W=ue.find(se=>se.id===v.interviewer_teacher_id))==null?void 0:W.full_name)??""):""}</p>
          <form class="score-form space-y-1.5" data-app-id="${b.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-max-weight="${e}" data-pass-threshold="${t}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${ae.map(se=>{var Br;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${l(se.name)} <span class="text-[var(--muted-2)]">(เต็ม ${se.weight})</span></span>
                <input type="number" min="0" max="${se.weight}" step="0.5" name="c_${se.id}" data-criterion-id="${se.id}"
                  value="${((Br=v==null?void 0:v.scores)==null?void 0:Br[se.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
              </div>`}).join("")}
            <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]">
              <span class="text-[var(--ink-2)]">คะแนนรวม</span>
              <span class="score-total-display text-[var(--primary)]">${(v==null?void 0:v.score)??0} / ${e} · ต้อง ≥ ${t} จึงผ่าน</span>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((v==null?void 0:v.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>`:""}

      ${b.status==="interviewed"?`
        <div class="pt-1 border-t border-[var(--line-soft)]">
          ${q?`<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${b.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`:`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${b.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>`:""}

      ${b.status==="candidate"?`<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${((J=(F=b.council_candidates)==null?void 0:F[0])==null?void 0:J.ballot_number)??"—"} · รอผลเลือกตั้ง</p>`:""}
      ${b.status==="rejected"&&(v!=null&&v.comment)?`<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${l(v.comment)}</p>`:""}
    </div>`},x=Ae?`<div class="space-y-3">${p.map(u).join("")}</div>`:s.map(b=>{const v=p.filter(y=>y.position_id===b.id);return v.length?`
          <div class="mb-5">
            <p class="text-xs font-bold text-[var(--muted)] mb-2 px-1">${l(b.position_name)} <span class="text-[var(--muted-2)]">(${v.length})</span></p>
            <div class="space-y-3">${v.map(u).join("")}</div>
          </div>`:""}).join("");return`${n}${o}${c}<div class="flex justify-end mb-4"><button type="button" id="apps-print-roster" class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">🖨️ พิมพ์รายชื่อผู้สมัคร${l(j[te])}</button></div>${m}${x}${Qt()}${ja()}`}function Da(e,t){var n,i,o,a;const r=String(t??"").trim().toLocaleLowerCase();return r?[(n=e.students)==null?void 0:n.full_name,(i=e.students)==null?void 0:i.student_code,(o=e.students)==null?void 0:o.main_room,(a=e.council_positions)==null?void 0:a.position_name].filter(Boolean).join(" ").toLocaleLowerCase().includes(r):!0}function Ai(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(T===null)return ht(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลสัมภาษณ์...</p>';if(ae===null)return Tr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดเกณฑ์สัมภาษณ์...</p>';if(ue===null)return jr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดรายชื่อกรรมการ...</p>';["M","W"].includes(Ge)||(Ge="M");const e=T.filter(v=>{var y;return((y=v.council_positions)==null?void 0:y.gender)===Ge}),t=ae.reduce((v,y)=>v+Number(y.weight),0),r=t/2,n=v=>v.status==="pending"&&v.endorsed_at&&Fe(v),i=v=>v.status==="interview_scheduled",o=v=>["interviewed","rejected"].includes(v.status),a=v=>Ve==="ready"?n(v):Ve==="scheduled"?i(v):Ve==="completed"?o(v):!0,s=e.filter(v=>a(v)&&Da(v,Bt)),c={all:e.length,ready:e.filter(n).length,scheduled:e.filter(i).length,completed:e.filter(o).length},m=[["all","ทั้งหมด"],["ready","รอนัด"],["scheduled","รอให้คะแนน"],["completed","ประเมินแล้ว"]],p=["M","W"].map(v=>`<button type="button" class="interview-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${v===Ge?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${v}">สภา${j[v]} <span class="${v===Ge?"text-white/80":"text-[var(--muted-2)]"}">${T.filter(y=>{var _;return((_=y.council_positions)==null?void 0:_.gender)===v}).length}</span></button>`).join(""),u=m.map(([v,y])=>`<button type="button" class="interview-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${v===Ve?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${v}">${y} <span class="${v===Ve?"text-white/80":"text-[var(--muted-2)]"}">${c[v]}</span></button>`).join(""),x=`<datalist id="council-interview-teacher-datalist">${ue.map(v=>`<option value="${l(v.full_name)} · รหัส ${v.id}"></option>`).join("")}</datalist>`,b=s.map(v=>{var E,L,N,B,V,h,$;const y=(E=v.council_interviews)==null?void 0:E[0],[_,S]=tt[v.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],q=n(v)?`<form class="schedule-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-app-id="${v.id}" data-iv-id="${(y==null?void 0:y.id)??""}" data-profile-id="${l(((L=v.students)==null?void 0:L.profile_id)??"")}" data-position-name="${l(((N=v.council_positions)==null?void 0:N.position_name)??"")}">
      <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p><div class="grid grid-cols-2 gap-2"><input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div>
      <input type="text" name="interviewerText" list="council-interview-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button></form>`:"",A=i(v)?`<div class="pt-2 border-t border-[var(--line-soft)]"><p class="text-xs text-[var(--muted)] mb-2">📅 ${y!=null&&y.scheduled_at?new Date(y.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"ยังไม่กำหนดเวลา"} ${y!=null&&y.location?"· "+l(y.location):""}</p><form class="score-form space-y-1.5" data-app-id="${v.id}" data-iv-id="${(y==null?void 0:y.id)??""}" data-max-weight="${t}" data-pass-threshold="${r}"><p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>${ae.map(C=>{var D;return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${l(C.name)} <span class="text-[var(--muted-2)]">(เต็ม ${C.weight})</span></span><input type="number" min="0" max="${C.weight}" step="0.5" name="c_${C.id}" data-criterion-id="${C.id}" value="${((D=y==null?void 0:y.scores)==null?void 0:D[C.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]"></div>`}).join("")}<div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]"><span>คะแนนรวม</span><span class="score-total-display text-[var(--primary)]">${(y==null?void 0:y.score)??0} / ${t} · ต้อง ≥ ${r} จึงผ่าน</span></div><textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((y==null?void 0:y.comment)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกผล</button></form></div>`:"",I=o(v)?`<div class="pt-2 border-t border-[var(--line-soft)] text-xs ${v.status==="interviewed"?"text-[var(--ok)]":"text-[var(--bad)]"}">${v.status==="interviewed"?"✅ ผ่านสัมภาษณ์":"❌ ไม่ผ่านสัมภาษณ์"}${(y==null?void 0:y.score)!=null?` · คะแนน ${y.score}/${t}`:""}${y!=null&&y.comment?`<p class="text-[var(--muted)] mt-1">${l(y.comment)}</p>`:""}${v.status==="interviewed"?'<button type="button" class="goto-view mt-2 px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" data-view="yla">🌱 บันทึก/ติดตาม YLA →</button>':""}</div>`:"";return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${z(v.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(((B=v.students)==null?void 0:B.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${l(((V=v.students)==null?void 0:V.student_code)??"")} · ${l(((h=v.students)==null?void 0:h.main_room)??"")} · ${l((($=v.council_positions)==null?void 0:$.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${S}">${_}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${v.id}">📄 ดูใบสมัคร</button>${!n(v)&&v.status==="pending"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${La(v)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}${q}${A}${I}</article>`}).join("");return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">🗓️ งานสัมภาษณ์</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">นัดหมายและประเมินผู้สมัคร</h1><p class="text-xs text-[var(--muted)] mt-2">แสดงเฉพาะข้อมูลใบสมัครของปีการศึกษาปัจจุบัน และใช้เกณฑ์คะแนนที่ตั้งไว้ในระบบ</p></section><div class="flex gap-2">${p}</div><div class="flex gap-2 overflow-x-auto pb-1">${u}</div><div class="flex gap-2"><input id="interview-search" value="${l(Bt)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="interview-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${s.length} รายการ จาก ${e.length} รายการ</p>${x}${s.length?`<div class="space-y-3">${b}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${Qt()}</div>`}function Si(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(T===null)return ht(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลแต่งตั้ง...</p>';["M","W"].includes(Ue)||(Ue="M");const e=T.filter(u=>{var x;return((x=u.council_positions)==null?void 0:x.gender)===Ue}),t=u=>{var x;return u.status==="interviewed"&&!((x=u.council_positions)!=null&&x.is_elected)},r=u=>u.status==="appointed",n=u=>We==="ready"?t(u):We==="appointed"?r(u):t(u)||r(u),i=e.filter(u=>n(u)&&Da(u,Pt)),o={ready:e.filter(t).length,appointed:e.filter(r).length,all:e.filter(u=>t(u)||r(u)).length},a=["M","W"].map(u=>`<button type="button" class="appointment-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${u===Ue?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${u}">สภา${j[u]} <span class="${u===Ue?"text-white/80":"text-[var(--muted-2)]"}">${T.filter(x=>{var b;return((b=x.council_positions)==null?void 0:b.gender)===u&&(t(x)||r(x))}).length}</span></button>`).join(""),c=[["ready","รอแต่งตั้ง"],["appointed","แต่งตั้งแล้ว"],["all","ทั้งหมด"]].map(([u,x])=>`<button type="button" class="appointment-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${u===We?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${u}">${x} <span class="${u===We?"text-white/80":"text-[var(--muted-2)]"}">${o[u]}</span></button>`).join(""),m=i.map(u=>{var x,b,v,y;return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${z(u.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(((x=u.students)==null?void 0:x.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${l(((b=u.students)==null?void 0:b.student_code)??"")} · ${l(((v=u.students)==null?void 0:v.main_room)??"")} · ${l(((y=u.council_positions)==null?void 0:y.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${u.status==="appointed"?tt.appointed[1]:tt.interviewed[1]}">${u.status==="appointed"?"แต่งตั้งแล้ว":"รอแต่งตั้ง"}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${u.id}">📄 ดูใบสมัครและผลสัมภาษณ์</button>${t(u)?`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${u.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`:'<p class="text-xs text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">บันทึกสมาชิกภาพเรียบร้อยแล้ว</p>'}</article>`}).join(""),p=e.filter(u=>{var x;return u.status==="interviewed"&&((x=u.council_positions)==null?void 0:x.is_elected)}).length;return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">✅ การแต่งตั้งสมาชิก</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ผู้ผ่านสัมภาษณ์ที่พร้อมเข้าสภา</h1><p class="text-xs text-[var(--muted)] mt-2">หน้านี้ใช้สำหรับตำแหน่งแต่งตั้งโดยตรง ส่วนตำแหน่งประธาน/รองประธานที่มาจากการเลือกตั้งให้ดำเนินการต่อในแท็บว่าที่ประธาน</p></section><div class="flex gap-2">${a}</div><div class="flex gap-2 overflow-x-auto pb-1">${c}</div><div class="flex gap-2"><input id="appointment-search" value="${l(Pt)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="appointment-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${i.length} รายการ จาก ${o[We]} รายการ · ผ่านสัมภาษณ์สายเลือกตั้งรอดำเนินการ ${p} รายการ</p>${i.length?`<div class="space-y-3">${m}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${Qt()}</div>`}const Ii=[{label:"ประธาน",match:e=>!!(e!=null&&e.is_elected)},{label:"รองประธาน",match:e=>(e==null?void 0:e.position_name)==="รองประธานสภานักเรียน"},{label:"ฝ่ายงาน",match:e=>((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"สำนักงานสภา",match:e=>!(e!=null&&e.is_elected)&&(e==null?void 0:e.position_name)!=="รองประธานสภานักเรียน"&&!((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")}];let pe="M";function Ci(){pe!=="M"&&pe!=="W"&&(pe="M");const e=d.members.filter(a=>{var s;return((s=a.council_positions)==null?void 0:s.gender)===pe}).sort((a,s)=>{var c,m;return(((c=a.council_positions)==null?void 0:c.sort_order)??99)-(((m=s.council_positions)==null?void 0:m.sort_order)??99)}),t=`
    <div class="flex gap-2 mb-4">
      ${["M","W"].map(a=>`
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${a===pe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${a}">สภา${j[a]}</button>`).join("")}
    </div>`,r=(d.isAdmin||d.isCouncilAdvisor)&&Gr()?`<button type="button" id="btn-add-council-member" class="w-full py-2.5 rounded-xl border border-dashed border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mb-4 hover:bg-[var(--primary-soft)]">＋ เพิ่มสมาชิกสภา${j[pe]}</button>`:"",n=d.isAdmin||d.isChair&&d.chairGender===pe,i=a=>{var s,c,m;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${z(a.students,"w-16 h-20 mx-auto")}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${l(((s=a.students)==null?void 0:s.full_name)??"—")}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((c=a.students)==null?void 0:c.main_room)??"")}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${l(((m=a.council_positions)==null?void 0:m.position_name)??"—")}</p>
      ${a.status!=="active"?`<span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[0.625rem] font-bold ${a.status==="designate"?"bg-[var(--gold-soft)] text-[var(--gold-ink)]":"bg-[var(--surface-2)] text-[var(--muted)]"}">${a.status==="designate"?"ว่าที่สมาชิก":"หมดวาระ"}</span>`:""}
      ${n?`
        <button type="button" class="btn-toggle-can-create w-full mt-2 text-[0.625rem] font-bold py-1 rounded-[8px] border ${a.can_create_activities?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--muted)]"}" data-id="${a.id}" data-value="${a.can_create_activities?"":"1"}">${a.can_create_activities?"✅ สร้างกิจกรรมได้":"➕ ให้สิทธิ์สร้างกิจกรรม"}</button>`:""}
      ${d.isAdmin&&Gr()?`
        <div class="flex gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-edit-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">✏️ แก้ไข</button>
          <button type="button" class="btn-remove-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">🗑️ ลบ</button>
        </div>`:""}
    </div>`},o=Ii.map(a=>{const s=e.filter(c=>a.match(c.council_positions));return s.length?`
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${a.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${s.map(i).join("")}</div>
      </div>`:""}).join("");return`${r}${t}${o||`<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${j[pe]}</p>`}`}function Kr({mode:e,gender:t,member:r}){var c,m,p,u;(c=document.getElementById("member-modal"))==null||c.remove();const n=d.positions.filter(x=>x.gender===t);let i=e==="edit"?r.students:null,o=null;const a=document.createElement("div");a.id="member-modal",a.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">${e==="add"?`➕ เพิ่มสมาชิกสภา${j[t]}`:"✏️ แก้ไขสมาชิกสภา"}</p>
        <button type="button" id="btn-close-member-modal" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <div class="space-y-3">
        ${e==="add"?`
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ค้นหานักเรียน (พิมพ์ชื่อหรือรหัส)</label>
            <input type="text" id="member-student-search" placeholder="พิมพ์อย่างน้อย 2 ตัวอักษร" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
            <div id="member-student-results" class="mt-1.5 space-y-1"></div>
          </div>
          <div id="member-student-selected"></div>
        `:`
          <div class="rounded-xl bg-[var(--surface-2)] p-3">
            <p class="text-[0.6875rem] text-[var(--muted)]">นักเรียน</p>
            <p class="text-sm font-bold text-[var(--ink)]">${l(((m=r.students)==null?void 0:m.full_name)??"—")} · ${l(((p=r.students)==null?void 0:p.student_code)??"")}</p>
          </div>
        `}
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ตำแหน่ง <span class="text-[var(--bad)]">*</span></label>
          <select id="member-position-select" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— เลือกตำแหน่ง —</option>
            ${n.map(x=>`<option value="${x.id}" ${e==="edit"&&r.position_id===x.id?"selected":""}>${l(x.position_name)}</option>`).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เริ่มวาระ</label>
            <input type="date" id="member-term-start" value="${l(e==="edit"?r.term_start_date??"":((u=yt())==null?void 0:u.duty_start_date)||new Date().toISOString().slice(0,10))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          ${e==="edit"?`
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สิ้นสุดวาระ (ถ้ามี)</label>
            <input type="date" id="member-term-end" value="${l(r.term_end_date??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>`:""}
        </div>
        ${e==="add"?`<div class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface-2)] p-3 space-y-2">
          <p class="text-xs font-bold text-[var(--ink-2)]">ข้อมูลการแต่งตั้งแยกจากการสัมภาษณ์</p>
          <select id="member-appointment-method" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)]"><option value="direct">แต่งตั้งโดยตรง</option><option value="external_import">นำเข้าจากบัญชีรายชื่อภายนอก</option><option value="chair_nomination">เสนอโดยประธานสภา</option></select>
          <input id="member-order-ref" placeholder="เลขที่คำสั่ง/หนังสืออ้างอิง (ถ้ามี)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)]" />
          <textarea id="member-reason" rows="2" placeholder="เหตุผลหรือหมายเหตุการแต่งตั้ง" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] resize-none"></textarea>
          <input id="member-evidence" type="url" placeholder="ลิงก์หลักฐาน (ถ้ามี)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)]" />
        </div>`:""}
        <button type="button" id="btn-save-member" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#btn-close-member-modal").addEventListener("click",()=>a.remove()),a.addEventListener("click",x=>{x.target===a&&a.remove()});const s=()=>{const x=a.querySelector("#member-student-selected");x&&(x.innerHTML=i?`
      <div class="flex items-center gap-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] p-2.5">
        ${z(i,"w-10 h-12")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(i.full_name)}</p>
          <p class="text-[0.6875rem] text-[var(--muted-2)] truncate">${l(i.student_code)} · ${l(i.main_room??"")}</p>
        </div>
      </div>`:"")};if(e==="add"){const x=a.querySelector("#member-student-search"),b=a.querySelector("#member-student-results");x.addEventListener("input",()=>{clearTimeout(o);const v=x.value.trim();if(v.length<2){b.innerHTML="";return}o=setTimeout(async()=>{const y=await da(v).catch(()=>[]);b.innerHTML=y.length?y.map(_=>`
          <button type="button" class="member-search-result-item w-full text-left flex items-center gap-2 rounded-xl border border-[var(--line)] p-2 hover:bg-[var(--surface-2)]" data-id="${_.id}">
            <span class="text-sm font-bold text-[var(--ink)] flex-1 truncate">${l(_.full_name)}</span>
            <span class="text-[0.6875rem] text-[var(--muted-2)] flex-shrink-0">${l(_.student_code)} · ${l(_.main_room??"")}</span>
          </button>`).join(""):'<p class="text-xs text-[var(--muted-2)] px-1">ไม่พบนักเรียน</p>',b.querySelectorAll(".member-search-result-item").forEach(_=>{_.addEventListener("click",()=>{i=y.find(S=>S.id===Number(_.dataset.id)),b.innerHTML="",x.value="",s()})})},300)})}a.querySelector("#btn-save-member").addEventListener("click",async()=>{var y,_,S,q,A;const x=Number(a.querySelector("#member-position-select").value);if(!x){g("กรุณาเลือกตำแหน่ง","warning");return}if(e==="add"&&!i){g("กรุณาค้นหาและเลือกนักเรียน","warning");return}const b=a.querySelector("#member-term-start").value,v=a.querySelector("#btn-save-member");v.disabled=!0,v.textContent="กำลังบันทึก...";try{if(e==="add")await jn({termId:R,positionId:x,studentId:i.id,appointmentMethod:((y=a.querySelector("#member-appointment-method"))==null?void 0:y.value)||"direct",termStartDate:b,orderRef:(_=a.querySelector("#member-order-ref"))==null?void 0:_.value.trim(),reason:(S=a.querySelector("#member-reason"))==null?void 0:S.value.trim(),evidenceUrl:(q=a.querySelector("#member-evidence"))==null?void 0:q.value.trim(),appointedByTeacherId:((A=d.teacher)==null?void 0:A.id)??null});else{const I=a.querySelector("#member-term-end").value;await Rn(r.id,{positionId:x,termStartDate:b,termEndDate:I})}g("บันทึกแล้ว ✅","success"),a.remove(),d.members=await Ye(null,R).catch(()=>d.members),f()}catch(I){g("บันทึกไม่สำเร็จ: "+k(I),"error"),v.disabled=!1,v.textContent="บันทึก"}})}function Li(){if(d.role!=="teacher"||!d.teacher)return"";if(!d.pendingEndorsements.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>';const e=t=>{var r,n,i,o;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${t.id}">
      <div class="flex items-center gap-3">
        ${z(t.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((r=t.students)==null?void 0:r.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${l(((n=t.students)==null?void 0:n.student_code)??"")} · ${l(((i=t.students)==null?void 0:i.main_room)??"")} · สมัคร${l(((o=t.council_positions)==null?void 0:o.position_name)??"—")}</p>
          ${t.gpa_general!=null||t.gpa_religious!=null?`<p class="text-xs text-[var(--muted)] mt-0.5">เกรดสามัญ ${l(t.gpa_general??"—")} · เกรดศาสนา ${l(t.gpa_religious??"—")}</p>`:""}
        </div>
      </div>
      ${t.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(t.motivation)}</p>`:""}
      ${t.intro_video_url?`<a href="${l(t.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-xs font-bold text-[var(--primary)] hover:underline">🎬 ดูวิดีโอแนะนำตัว</a>`:""}
      <div class="flex flex-wrap gap-1.5">
        ${d.endorsementPhrases.map(a=>`
          <button type="button" class="endorse-phrase-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
            data-target="${t.id}" data-phrase="${l(a.phrase)}">${l(a.phrase)}</button>`).join("")}
      </div>
      <textarea class="endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${t.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-[var(--bad-soft-line)] text-[#8a2f22] text-xs font-bold hover:bg-[var(--bad-soft)]" data-id="${t.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${t.id}">✅ รับรอง</button>
      </div>
    </div>`};return`<div class="space-y-3">${d.pendingEndorsements.map(e).join("")}</div>`}const Vt={};async function Ti(e,t){Vt[t]=await Ss(e,t).catch(()=>[]),f()}function Ni(){var i;const e=d.membership[0];if(!e)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>';const t=(i=e.council_positions)==null?void 0:i.gender;if(!t)return"";if(Vt[e.id]===void 0)return Ti(t,e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const r=Vt[e.id];if(!r.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>';const n=o=>{var a,s,c,m;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${o.id}">
      <div class="flex items-center gap-3">
        ${z(o.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((a=o.students)==null?void 0:a.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${l(((s=o.students)==null?void 0:s.student_code)??"")} · ${l(((c=o.students)==null?void 0:c.main_room)??"")} · สมัคร${l(((m=o.council_positions)==null?void 0:m.position_name)??"—")}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] flex-shrink-0">ขอให้คุณรับรอง</span>
      </div>
      ${o.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(o.motivation)}</p>`:""}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${o.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${o.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`};return`<div class="space-y-3">${r.map(n).join("")}</div>`}async function qi(e){const t=d.membership[0];if(!t)return;const r=document.querySelector(`.peer-endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())||null;try{await Dn({applicationId:Number(e),memberId:t.id,comment:n}),g("รับรองในนามสภานักเรียนแล้ว ✅","success"),delete Vt[t.id],f()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error")}}async function Xr(e,t){const r=document.querySelector(`.endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())??"";if(!n){g("กรุณาใส่คอมเมนต์ก่อนยืนยัน","warning");return}try{t==="confirm"?(await Mn({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),g("รับรองใบสมัครแล้ว ✅","success")):(await Bn({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),g('บันทึกผล "ไม่รับรอง" แล้ว',"success")),await Do(),f()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error")}}const Ma={planned:["ยังไม่จัด","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],completed:["เสร็จแล้ว","text-[#106143]","bg-[var(--ok-soft-line)]","border-[var(--ok-soft-line)]"],cancelled:["ยกเลิก","text-[var(--muted-2)]","bg-[var(--surface-2)]","border-[var(--line)]"]},Ba=[["completed","เสร็จแล้ว","border-[var(--ok-soft-line)] bg-[var(--ok-soft)]","text-[var(--ok)]"],["ongoing","กำลังดำเนินการ","border-[var(--primary-soft-line)] bg-[var(--primary-soft)]","text-[var(--primary)]"],["planned","ยังไม่จัด","border-[var(--gold-soft-line)] bg-[var(--gold-soft)]","text-[var(--gold-ink)]"],["cancelled","ยกเลิก","border-[var(--line-soft)] bg-[var(--surface-2)]","text-[var(--muted-2)]"]],Zr={planned:"ongoing",ongoing:"completed"},ji={planned:"▶️ เริ่มดำเนินการ",ongoing:"✅ ทำเครื่องหมายเสร็จแล้ว"};async function Pa(){ee=await Bs(Y,R).catch(()=>[]),f()}async function ea(e){ge[e]=await Fs(e).catch(()=>new Set),f()}function Ri(e){return d.isAdmin||d.isChair||d.isCouncilAdvisor?!0:!!(e.owner_member_id&&d.membership.some(t=>t.id===e.owner_member_id))}async function Oa(){re=await lo().catch(()=>[]),f()}async function Fa(e){const[t,r,n,i]=await Promise.all([Ys(e).catch(()=>null),zs(e).catch(()=>[]),Gs(e).catch(()=>[]),io("council_activity",e).catch(()=>[])]);Ke[e]=t,Ir[e]=r,Cr[e]=n,ut[e]=Object.fromEntries(i.map(o=>[o.student_id,o])),f()}function Di({rule:e,override:t,attendanceRows:r}){var i;if((t==null?void 0:t.override_decision)==="pass")return"pass";if((t==null?void 0:t.override_decision)==="fail")return"fail";if(!e)return"no_rule";const n=r.length;if(e.min_attendance_count&&n<e.min_attendance_count)return"not_eligible";if((i=e.required_dates)!=null&&i.length){const o=new Set(r.map(s=>(s.checked_in_at||"").slice(0,10)));if(e.required_dates.some(s=>!o.has(s)))return"not_eligible"}return"pass"}function Mi(){var s,c,m;if(ee===null)return Pa(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.canCreateActivities,t=e&&!d.isAdmin&&!d.isChair,r=d.membership[0],n={};ee.forEach(p=>{n[p.status]=(n[p.status]??0)+1});const i=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${Ba.map(([p,u,x,b])=>`
        <div class="rounded-xl border ${x} p-3 text-center">
          <p class="text-2xl font-bold ${b}">${n[p]??0}</p>
          <p class="text-[0.6875rem] text-[var(--muted)]">${u}</p>
        </div>`).join("")}
    </div>`,o=e?`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">➕ สร้างกิจกรรมใหม่</p>
      <form id="activity-form" class="space-y-2">
        <input name="title" required placeholder="ชื่อกิจกรรม" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="detail" rows="2" placeholder="รายละเอียด (ถ้ามี)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="activity_date" type="date" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
          <input name="budget" type="number" step="0.01" placeholder="งบประมาณ (บาท)" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        </div>
        <div class="grid grid-cols-2 gap-2">
          <select name="gender" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="" ${t&&!((s=r==null?void 0:r.council_positions)!=null&&s.gender)?"selected":""}>สภาชาย+หญิงร่วมกัน</option>
            <option value="M" ${t&&((c=r==null?void 0:r.council_positions)==null?void 0:c.gender)==="M"?"selected":""}>สภาชายเท่านั้น</option>
            <option value="W" ${t&&((m=r==null?void 0:r.council_positions)==null?void 0:m.gender)==="W"?"selected":""}>สภาหญิงเท่านั้น</option>
          </select>
          <input name="owner_text" placeholder="ฝ่าย/ผู้รับผิดชอบ (ข้อความ)" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        </div>
        ${t?`
        <input type="hidden" name="owner_member_id" value="${(r==null?void 0:r.id)??""}" />
        <p class="text-xs text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl px-3 py-2">👤 ผู้รับผิดชอบกิจกรรมนี้คือคุณเอง (ตามสิทธิ์ที่ได้รับมอบหมาย)</p>`:`
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ผู้รับผิดชอบกิจกรรม (สมาชิกสภา — จัดการเช็คชื่อ/เกียรติบัตรของกิจกรรมนี้ได้เอง)</label>
          <select name="owner_member_id" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="">— ไม่ระบุ (แอดมิน/ครูที่ปรึกษาสภา/ประธานจัดการเท่านั้น) —</option>
            ${d.members.map(p=>{var u,x;return`<option value="${p.id}">${l(((u=p.students)==null?void 0:u.full_name)??"—")} (${l(((x=p.council_positions)==null?void 0:x.position_name)??"—")})</option>`}).join("")}
          </select>
        </div>`}
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="open_to_general" class="w-4 h-4" />
          เปิดให้นักเรียนทั่วไป (ไม่ใช่แค่สมาชิกสภา) เช็คชื่อเข้าร่วมได้
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="counts_for_evaluation" checked class="w-4 h-4" />
          นับกิจกรรมนี้ในเกณฑ์ % เช็คชื่อสำหรับประเมินความเป็นสมาชิกสภา
        </label>
        <!-- ตั้งใจไม่มีปุ่มแก้ไขค่านี้หลังสร้างแล้ว — กันคนที่เป็นทั้งผู้สร้าง+ผู้ถูกประเมิน
             ย้อนกลับมาปลดกิจกรรมที่ตัวเองขาดออกจากตัวหารทีหลัง ตั้งได้ครั้งเดียวตอนสร้างเท่านั้น -->
        <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">สร้างกิจกรรม</button>
      </form>
    </div>`:"";if(!ee.length)return`${i}${o}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`;const a=p=>{var A,I;const[u,x,b,v]=Ma[p.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]","border-[var(--line)]"],y=d.members.filter(E=>{var L;return!p.gender||((L=E.council_positions)==null?void 0:L.gender)===p.gender}),_=ge[p.id],S=Ri(p),q=(I=(A=p.council_members)==null?void 0:A.students)==null?void 0:I.full_name;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${p.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${l(p.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${p.activity_date?new Date(p.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} ${p.gender?"· สภา"+j[p.gender]:""} ${p.owner_text?"· "+l(p.owner_text):""} ${q?"· ผู้รับผิดชอบ "+l(q):""}</p>
            ${p.open_to_general?'<span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mt-1">🙋 เปิดให้นักเรียนทั่วไปเข้าร่วม</span>':""}
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${v} ${b} ${x}">${u}</span>
        </div>
        ${p.detail?`<p class="text-xs text-[var(--ink-2)]">${l(p.detail)}</p>`:""}
        ${S?`
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            <!-- เดิมจำกัดแค่ admin/chair เปลี่ยนสถานะได้ — แต่กิจกรรมที่ค้างสถานะ "planned" ตลอดไป
                 จะไม่ถูกนับใน % เช็คชื่อสำหรับประเมินเลย (นับเฉพาะ ongoing/completed) ผู้รับผิดชอบ
                 ที่ได้รับมอบหมาย (owner) จึงต้องเปลี่ยนสถานะกิจกรรมของตัวเองได้ด้วย ไม่งั้นฟีเจอร์
                 "สร้าง+เช็คชื่อได้เอง" จะใช้ไม่ได้จริงเพราะกิจกรรมไม่มีวันถูกนับผล -->
            ${S&&Zr[p.status]?`<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${p.id}" data-next="${Zr[p.status]}">${ji[p.status]}</button>`:""}
            ${S&&p.status!=="cancelled"&&p.status!=="completed"?`<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${p.id}">ยกเลิก</button>`:""}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${p.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${p.id}" data-title="${l(p.title)}" data-open-general="${p.open_to_general?"1":""}">📷 สแกน QR เช็คอิน</button>
            <button type="button" class="btn-activity-cert-manage text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-id="${p.id}">🏅 จัดการเกียรติบัตร</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${p.id}">
            ${_?`
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${y.map(E=>{var N;const L=_.has(E.student_id);return`<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${L?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"}" data-activity-id="${p.id}" data-student-id="${E.student_id}" ${L?"disabled":""}>
                    <span>${L?"✅":"➕"}</span><span class="truncate">${l(((N=E.students)==null?void 0:N.full_name)??"—")}</span>
                  </button>`}).join("")}
                ${y.length?"":'<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>'}
              </div>`:""}
          </div>
          ${xr===p.id?Pi(p):""}`:""}
      </div>`};return`${i}${o}<div class="space-y-3">${ee.map(a).join("")}</div>`}const Bi={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft)] border-[var(--ok-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft)] border-[var(--bad-soft-line)]"],not_eligible:["ยังไม่ครบเงื่อนไข","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],no_rule:["ยังไม่ตั้งเงื่อนไข","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"]};function Pi(e){if(re===null&&Oa(),Ke[e.id]===void 0&&Fa(e.id),re===null||Ke[e.id]===void 0)return'<div class="mt-2 pt-2 border-t border-dashed border-[var(--line)]"><p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>';const t=Ke[e.id],r=Ir[e.id]??[],n=Cr[e.id]??[],i=Object.fromEntries(r.map(p=>[p.student_id,p])),o=ut[e.id]??{},a={};n.forEach(p=>{a[p.student_id]||(a[p.student_id]={student:p.students,rows:[]}),a[p.student_id].rows.push(p)});const s=`
    <form class="cert-rule-form space-y-2 bg-[var(--surface-2)] rounded-xl p-3" data-activity-id="${e.id}">
      <p class="text-xs font-bold text-[var(--ink-2)]">🏅 เงื่อนไขการรับเกียรติบัตร</p>
      <select name="template_id" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
        <option value="">— ยังไม่เลือกเทมเพลต —</option>
        ${re.map(p=>`<option value="${p.id}" ${(t==null?void 0:t.template_id)===p.id?"selected":""}>${l(p.name)}</option>`).join("")}
      </select>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)] flex-shrink-0">ต้องเข้าร่วมอย่างน้อย</span>
        <input type="number" min="0" name="min_attendance_count" value="${(t==null?void 0:t.min_attendance_count)??""}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)]" />
        <span class="text-xs text-[var(--muted)]">ครั้ง</span>
      </div>
      <div>
        <label class="block text-[0.6875rem] text-[var(--muted)] mb-1">วันที่บังคับต้องเข้าร่วม (ถ้ามี บรรทัดละ 1 วัน รูปแบบ YYYY-MM-DD)</label>
        <textarea name="required_dates" rows="2" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${l(((t==null?void 0:t.required_dates)??[]).join(`
`))}</textarea>
      </div>
      <textarea name="notes" rows="2" placeholder="หมายเหตุเงื่อนไข (แสดงให้นักเรียนเห็น เช่น ต้องผ่านการประเมินความประพฤติด้วย)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${l((t==null?void 0:t.notes)??"")}</textarea>
      <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกเงื่อนไข</button>
    </form>`,c=Object.keys(a),m=c.map(p=>{const u=Number(p),{student:x,rows:b}=a[u],v=i[u],y=Di({rule:t,override:v,attendanceRows:b}),[_,S]=Bi[y],q=o[u];return`
      <div class="rounded-xl border border-[var(--line-soft)] p-2.5 space-y-1.5" data-cert-row="${u}">
        <div class="flex items-center gap-2">
          ${z(x,"w-8 h-10")}
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-[var(--ink)] truncate">${l((x==null?void 0:x.full_name)??"—")}</p>
            <p class="text-[0.625rem] text-[var(--muted-2)]">เข้าร่วม ${b.length} ครั้ง</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${S}">${_}</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(v==null?void 0:v.override_decision)==="pass"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${u}" data-decision="pass">✅ ผ่าน (บังคับ)</button>
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(v==null?void 0:v.override_decision)==="fail"?"border-[var(--bad-soft-line)] bg-[var(--bad-soft)] text-[#8a2f22]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${u}" data-decision="fail">❌ ไม่ผ่าน (บังคับ)</button>
          ${v!=null&&v.override_decision?`<button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)]" data-activity-id="${e.id}" data-student-id="${u}" data-decision="">↺ กลับเป็นอัตโนมัติ</button>`:""}
          ${y==="pass"?q?`<button type="button" class="btn-cert-view text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${u}">🏅 ดูเกียรติบัตร</button>`:`<button type="button" class="btn-cert-issue text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${u}">🏅 ออกเกียรติบัตร</button>`:""}
        </div>
      </div>`}).join("");return`
    <div class="mt-2 pt-2 border-t border-dashed border-[var(--line)] space-y-3">
      ${s}
      <div>
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1.5">รายชื่อผู้เข้าร่วม (${c.length} คน)</p>
        <div class="space-y-1.5">${m||'<p class="text-xs text-[var(--muted-2)] text-center py-3">ยังไม่มีใครเช็คชื่อเข้าร่วมกิจกรรมนี้</p>'}</div>
      </div>
    </div>`}const ta={info:["แจ้งให้ทราบ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],ack:["ต้องกดรับทราบ","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],urgent:["ด่วน","text-[#8a2f22]","bg-[var(--bad-soft-line)]","border-[var(--bad-soft-line)]"]};async function Oi(){Ft=await Ps().catch(()=>[]),f()}async function Fi(){_e=await Ks(d.student.id).catch(()=>new Set),f()}async function Yi(){const[e,t,r,n]=await Promise.all([Xs().catch(()=>({})),Zs().catch(()=>0),ir("M").catch(()=>0),ir("W").catch(()=>0)]);$e=e,Lt={all:t,M:r,W:n},f()}function zi(){if(Ft===null)return Oi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';d.role==="student"&&d.student&&_e===null&&Fi(),$e===null&&Yi();const e=d.isAdmin||d.isCouncilAdvisor||d.isChair,t=Ft.filter(c=>c.audience==="all"||c.audience===(d.student?Ee(d.student.gender):null)||d.isAdmin||d.isChair),r=Tt==="all"?t:t.filter(c=>c.type===Tt),n=e?'<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>':"",i=e&&Nt?`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📣 ประกาศใหม่</p>
      <form id="announcement-form" class="space-y-2">
        <input name="title" required placeholder="หัวเรื่องประกาศ" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm" />
        <textarea name="body" rows="3" placeholder="รายละเอียด" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <select name="type" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="info">แจ้งให้ทราบ</option>
            <option value="ack">ต้องกดรับทราบ</option>
            <option value="urgent">ด่วน</option>
          </select>
          <select name="audience" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">
            <option value="all">ทุกคน</option>
            <option value="M">สภาชาย</option>
            <option value="W">สภาหญิง</option>
          </select>
        </div>
        <label class="flex items-center gap-2 text-xs text-[var(--muted)]"><input type="checkbox" name="pinned" class="rounded" /> ปักหมุดไว้บนสุด</label>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-cancel-ann" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
          <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เผยแพร่ประกาศ</button>
        </div>
      </form>
    </div>`:"",a=`
    <div class="flex gap-2 overflow-x-auto pb-1 mb-4">
      ${[["all","ทั้งหมด"],["urgent","ด่วน"],["ack","ต้องรับทราบ"],["info","แจ้งให้ทราบ"]].map(([c,m])=>`
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${Tt===c?"bg-[var(--primary)] text-white border-[var(--primary)]":"bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]"}" data-filter="${c}">${m}</button>`).join("")}
    </div>`;if(!r.length)return`${n}${i}${a}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`;const s=c=>{var S,q;const[m,p,u,x]=ta[c.type]??ta.info,b=(S=c.teachers)!=null&&S.full_name?l(c.teachers.full_name)+" (ครู)":(q=c.students)!=null&&q.full_name?l(c.students.full_name)+" (ประธานสภา)":"ระบบ",v=_e==null?void 0:_e.has(c.id),y=c.type==="ack"&&d.role==="student"&&d.student,_=Lt?Lt[c.audience]??Lt.all:null;return`
      <div class="rounded-xl border ${c.pinned?"border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${c.pinned?'<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>':""}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${x} ${u} ${p}">${m}</span>
          ${c.audience!=="all"?`<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${j[c.audience]??""}</span>`:""}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${l(c.title)}</p>
        ${c.body?`<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${l(c.body)}</p>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${b} · ${new Date(c.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
        ${c.type==="ack"?`<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${($e==null?void 0:$e[c.id])??0}${_!=null?" จาก "+_:""} คน</p>`:""}
        ${y?v?'<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>':`<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${c.id}">รับทราบ</button>`:""}
      </div>`};return`${n}${i}${a}<div class="space-y-3">${r.map(s).join("")}</div>`}let ce=null,Xe=null,qt=null;const Gi={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"],improve:["ควรปรับปรุง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]"]};async function Ya(){ce=await Ms().catch(()=>[]),f()}async function Vi(){const e=await eo(Y,R).catch(()=>[]);Xe=Object.fromEntries(e.map(t=>[t.member_id,t])),f()}function za(){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${ce.reduce((t,r)=>t+Number(r.weight),0)} คะแนน)</p>
      <div class="space-y-1.5">
        ${ce.map(t=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${l(t.name)}</span>
            <span class="font-bold text-[var(--muted)]">${t.weight} คะแนน</span>
            <button type="button" class="btn-remove-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${t.id}">✕</button>
          </div>`).join("")}
      </div>
      <form id="criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มเกณฑ์ใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <input name="weight" type="number" min="1" placeholder="คะแนน" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`}function Ui(){if(ce===null)return Ya(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Xe===null)return Vi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.isAdmin||d.role==="teacher",t=ce.reduce((a,s)=>a+Number(s.weight),0),r=e?za():"",n=a=>{var x,b;const s=Xe[a.id],[c,m]=s!=null&&s.decision?Gi[s.decision]:["ยังไม่ประเมิน","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"],p=d.role==="student"&&d.student&&a.student_id===d.student.id;if(!e&&!p)return"";const u=qt===a.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${a.id}">
        <div class="flex items-center gap-3">
          ${z(a.students,"w-10 h-12")}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((x=a.students)==null?void 0:x.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((b=a.council_positions)==null?void 0:b.position_name)??"—")}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${m}">${c}</span>
            ${(s==null?void 0:s.total_score)!=null?`<p class="text-xs text-[var(--muted-2)] mt-0.5">${s.total_score}/${s.max_score??t}</p>`:""}
          </div>
        </div>
        ${e?`<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${a.id}">${u?"▲ ซ่อนแบบประเมิน":s?"✏️ แก้ไขคะแนน":"📝 ให้คะแนน"}</button>`:""}
        ${e&&u?`
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${a.id}">
            ${ce.map(v=>{var y;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${l(v.name)} <span class="text-[var(--muted-2)]">(เต็ม ${v.weight})</span></span>
                <input type="number" min="0" max="${v.weight}" step="0.5" name="c_${v.id}" value="${((y=s==null?void 0:s.scores)==null?void 0:y[v.id])??""}" class="w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center" />
              </div>`}).join("")}
            <select name="decision" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)]">
              <option value="">— สรุปผล —</option>
              <option value="pass" ${(s==null?void 0:s.decision)==="pass"?"selected":""}>ผ่าน</option>
              <option value="improve" ${(s==null?void 0:s.decision)==="improve"?"selected":""}>ควรปรับปรุง</option>
              <option value="fail" ${(s==null?void 0:s.decision)==="fail"?"selected":""}>ไม่ผ่าน</option>
            </select>
            <textarea name="comment" rows="2" placeholder="ความเห็นผู้ประเมิน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none">${l((s==null?void 0:s.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผลประเมิน</button>
          </form>`:""}
        ${(s==null?void 0:s.decision)==="pass"?s.certificate_issued_at?`<button type="button" class="btn-view-cert text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-member-id="${a.id}">🏅 ดูเกียรติบัตร</button>`:e?`<button type="button" class="btn-issue-cert text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-member-id="${a.id}">🏅 ออกเกียรติบัตร</button>`:"":""}
      </div>`},o=d.members.filter(a=>e||d.role==="student"&&d.student&&a.student_id===d.student.id).map(n).filter(Boolean).join("");return!e&&!o?`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`:o?`${r}<div class="space-y-3">${o}</div>`:`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`}function Wi({member:e,evaluation:t,cfg:r}){var c,m;const n=l(((c=e.students)==null?void 0:c.full_name)??"—"),i=l(((m=e.council_positions)==null?void 0:m.position_name)??"—"),o=l(r.council_name||"ระบบสภานักเรียน"),a=l(t.certificate_no||""),s=new Date(t.certificate_issued_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"});return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
    <title>เกียรติบัตร ${n}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      body { font-family: 'Sarabun', sans-serif; background: #fdfaf3; padding: 40px; }
      .cert { max-width: 900px; margin: 0 auto; border: 6px double #b5892b; padding: 50px 40px; text-align: center; background: #fffdf8; }
      .badge { width: 74px; height: 74px; border-radius: 50%; border: 2px solid #e2d4ae; background: #fdf7e9; display: grid; place-items: center; margin: 0 auto 14px; font-size: 24px; color: #8a6a1f; font-weight: 700; }
      h1 { color: #8a6a1f; font-size: 34px; margin: 6px 0 18px; }
      .name { font-size: 26px; font-weight: 700; border-bottom: 1px solid #e2d4ae; display: inline-block; padding: 0 24px 8px; margin: 10px 0 18px; }
      .sign { display: flex; justify-content: space-around; margin-top: 60px; }
      .sign div { width: 220px; border-top: 1px solid #999; padding-top: 6px; font-size: 13px; color: #555; }
      @media print { body { background: #fff; padding: 0; } .cert { border-width: 4px; } }
    </style></head>
    <body>
      <div class="cert">
        <div class="badge">🏛️</div>
        <p style="color:#6e5f65;font-size:13px;letter-spacing:1px;">${o}</p>
        <h1>เกียรติบัตร</h1>
        <p style="color:#4a3b41;">มอบเพื่อแสดงว่า</p>
        <p class="name">${n}</p>
        <p style="color:#1d1519;line-height:1.9;max-width:560px;margin:0 auto;">ได้ปฏิบัติหน้าที่ <b>${i}</b> ของ${o} ด้วยความรับผิดชอบ ทุ่มเท และเป็นแบบอย่างที่ดี จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:#90828a;font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${s} ${a?"· เลขที่ "+a:""}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
    </body></html>`}function ra(e,t){Ie(Wi({member:e,evaluation:t,cfg:d.cfg}))}let X=null,me=null,Ga="FORM_09_1_PROJECT_PROPOSAL",pt=null,mt=null;const Va={draft:["ร่าง","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],pending_advisor:["รอครูที่ปรึกษาประจำฝ่ายรับรอง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_dept_head:["รอหัวหน้าฝ่ายกิจการนักเรียน","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_director:["รอผู้อำนวยการ","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],approved:["อนุมัติแล้ว","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"]},Hi={FORM_09_ACTIVITY_APPROVAL:"แบบ 09 ขออนุมัติจัดกิจกรรม",FORM_09_1_PROJECT_PROPOSAL:"แบบ 09.1 แบบเสนอโครงการ"},_t=e=>Hi[e]??e??"เอกสารโครงการ";async function Ji(){X=await Ds(Y,R).catch(()=>[]),f()}async function Qi(){mt=d.teacher?await va(d.teacher.id).catch(()=>[]):[],f()}const Te=e=>(e||"").split(`
`).map(t=>t.trim()).filter(Boolean),kt=(e,t)=>Te(e).map(r=>{const n=r.split("|").map(i=>i.trim());for(;n.length<t;)n.push("");return n.slice(0,t)}),Et=e=>(Array.isArray(e)?e:[]).map(t=>t.join(" | ")).join(`
`),st=e=>(Array.isArray(e)?e:[]).join(`
`),Ua=e=>Number(e||0).toLocaleString("th-TH"),Wa=e=>(e.budget_items||[]).reduce((t,r)=>t+(Number(r[1])||0),0),Ut=["title","planArea","projectType","schoolStrategy","educationStandard","responsiblePersons","rationale","objectives","goalsQuantitative","goalsQualitative","workSteps","durationText","locationText","budgetItems","stakeholders","evaluationItems","expectedResults"];function Ki(){return["คุณคือผู้ช่วยแปลงไฟล์ใบเสนอโครงการของโรงเรียน (ไฟล์ที่แนบมาในแชทนี้) ให้เป็นข้อมูล CSV ตามสเปคที่กำหนดไว้เป๊ะๆ ด้านล่างนี้ ห้ามแต่งข้อมูลขึ้นเองถ้าไม่มีในไฟล์ต้นฉบับ — เว้นว่างไว้แทน","","สร้างตาราง CSV จำนวน 1 แถวข้อมูล (แถวหัวตาราง 1 แถว + แถวข้อมูล 1 แถว) โดยแถวหัวตารางต้องเป็นข้อความนี้เป๊ะๆ (ห้ามแปล ห้ามสลับลำดับ ห้ามเว้นคอลัมน์):",Ut.join(","),"","ความหมายแต่ละคอลัมน์และวิธีใส่ข้อมูล:","- title: ชื่อโครงการ","- planArea: แผนงาน","- projectType: ลักษณะโครงการ (เช่น โครงการต่อเนื่อง/โครงการใหม่)","- schoolStrategy: สนองกลยุทธ์โรงเรียน","- educationStandard: สนองมาตรฐานการศึกษา/ตัวชี้วัด","- responsiblePersons: ผู้รับผิดชอบโครงการ — ถ้ามีหลายคน ให้ขึ้นบรรทัดใหม่ทีละคนภายในเซลล์เดียวกัน","- rationale: หลักการและเหตุผล","- objectives: วัตถุประสงค์ — ขึ้นบรรทัดใหม่ทีละข้อภายในเซลล์เดียวกัน","- goalsQuantitative: เป้าหมายเชิงปริมาณ — ขึ้นบรรทัดใหม่ทีละข้อ","- goalsQualitative: เป้าหมายเชิงคุณภาพ — ขึ้นบรรทัดใหม่ทีละข้อ",'- workSteps: วิธีดำเนินงาน — แต่ละขั้นตอนขึ้นบรรทัดใหม่ 1 บรรทัดต่อ 1 ขั้นตอน แต่ละบรรทัดคั่น 4 ค่าด้วย " | " ตามลำดับ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ',"- durationText: ระยะเวลาดำเนินการโครงการโดยรวม","- locationText: สถานที่ดำเนินงาน",'- budgetItems: งบประมาณ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: รายการ | จำนวนเงิน (ตัวเลขล้วน ห้ามมีคอมมาคั่นหลักหรือคำว่า "บาท")','- stakeholders: หน่วยงาน/ผู้เกี่ยวข้อง — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: หน่วยงาน/บุคคล | จำนวน (คน)','- evaluationItems: การประเมินผลความสำเร็จ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด',"- expectedResults: ผลที่คาดว่าจะได้รับ — ขึ้นบรรทัดใหม่ทีละข้อ","","กฎสำคัญที่ต้องทำตามเป๊ะๆ:",'1. คอลัมน์ไหนมีการขึ้นบรรทัดใหม่ภายในเซลล์ ต้องครอบข้อความทั้งเซลล์ด้วยเครื่องหมายคำพูด " " เสมอ (มาตรฐาน CSV)',"2. มีข้อมูลแค่ 1 แถวข้อมูลเท่านั้น (1 โครงการต่อ 1 ไฟล์)","3. ถ้าหาข้อมูลคอลัมน์ไหนไม่เจอในไฟล์ต้นฉบับ ให้เว้นว่างไว้ ห้ามเดาขึ้นมาเอง","4. ตอบกลับเฉพาะเนื้อหา CSV เท่านั้น ห้ามมีคำอธิบายอื่นปนอยู่ในคำตอบ ให้ครอบคำตอบทั้งหมดด้วย code block รูปแบบนี้: ```csv (เนื้อหา CSV) ```"].join(`
`)}function Xi(e){let t=(e??"").trim();return t.startsWith("```")&&(t=t.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),t}function Zi(e){const t=[];let r=[],n="",i=!1;const o=e.replace(/\r\n/g,`
`);for(let a=0;a<o.length;a++){const s=o[a];i?s==='"'?o[a+1]==='"'?(n+='"',a++):i=!1:n+=s:s==='"'?i=!0:s===","?(r.push(n),n=""):s===`
`?(r.push(n),t.push(r),r=[],n=""):n+=s}return r.push(n),t.push(r),t.filter(a=>a.some(s=>s.trim()!==""))}function el(e){const t=Xi(e);if(t.startsWith("{")){const a=JSON.parse(t),s={};for(const c of Ut){if(!(c in a))continue;const m=a[c];s[c]=Array.isArray(m)?m.map(p=>Array.isArray(p)?p.join(" | "):String(p??"")).join(`
`):String(m??"")}return s}const r=Zi(t);if(r.length<2)throw new Error("ไม่พบข้อมูล — ต้องมีทั้งแถวหัวตารางและแถวข้อมูล");const n=r[0].map(a=>a.trim()),i=r[1],o={};return n.forEach((a,s)=>{Ut.includes(a)&&(o[a]=(i[s]??"").trim())}),o}function tl(e){const t=document.getElementById("doc-form");if(!t)return 0;let r=0;for(const n of Ut){if(e[n]===void 0)continue;const i=t.elements[n];i&&(i.value=e[n],r++)}return r}function rl(){var i;(i=document.getElementById("doc-ai-import-modal"))==null||i.remove();const e=document.createElement("div");e.id="doc-ai-import-modal",e.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-lg p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</p>
        <button type="button" id="btn-close-doc-ai-import" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <ol class="text-xs text-[var(--muted-2)] list-decimal list-inside space-y-1 mb-3">
        <li>กด “⚡ สร้าง Prompt” แล้วจึงคัดลอกคำสั่ง</li>
        <li>วางในแชท ChatGPT (หรือ AI อื่น) พร้อมแนบไฟล์ใบโครงการเดิม (Word/PDF/รูปถ่าย)</li>
        <li>คัดลอกคำตอบที่ได้ (หรือดาวน์โหลดไฟล์ CSV ถ้า AI สร้างไฟล์ให้) แล้วนำกลับมาวาง/อัปโหลดด้านล่างนี้</li>
      </ol>
      <div class="flex gap-2 mb-3"><button type="button" id="btn-doc-ai-generate-prompt" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] text-white font-bold text-xs">⚡ สร้าง Prompt</button><button type="button" hidden disabled aria-disabled="true" id="btn-doc-ai-copy-prompt" class="flex-1 py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] font-bold text-xs disabled:opacity-40">📋 คัดลอกคำสั่งสำหรับ AI</button></div>
      <textarea id="doc-ai-prompt" readonly rows="9" placeholder="กด ⚡ สร้าง Prompt ก่อนคัดลอก" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs font-mono resize-y bg-[var(--surface)] text-[var(--ink)] mb-3"></textarea>
      <div class="space-y-3 pt-2 border-t border-[var(--line-soft)]">
        <div>
          <label class="text-xs font-semibold text-[var(--muted)] mb-1 block">อัปโหลดไฟล์ CSV ที่ได้จาก AI</label>
          <input type="file" id="doc-ai-csv-file" accept=".csv,text/csv" class="w-full text-xs border border-[var(--line)] rounded-xl px-3 py-2 bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="text-xs font-semibold text-[var(--muted)] mb-1 block">หรือวางคำตอบที่ AI ตอบกลับมาตรงนี้</label>
          <textarea id="doc-ai-paste" rows="5" placeholder="วางคำตอบ CSV จาก AI ที่นี่" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs font-mono resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
          <button type="button" id="btn-doc-ai-import" class="w-full mt-2 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-xs">นำเข้าข้อมูลนี้ลงในฟอร์ม</button>
        </div>
      </div>
    </div>`,document.body.appendChild(e),e.querySelector("#btn-close-doc-ai-import").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()});const t=e.querySelector("#doc-ai-prompt"),r=Za({copyButton:e.querySelector("#btn-doc-ai-copy-prompt")});e.querySelector("#btn-doc-ai-generate-prompt").addEventListener("click",()=>{t.value=Ki(),r.markGenerated(),g("สร้างคำสั่งสำหรับ AI แล้ว","success")}),e.querySelector("#btn-doc-ai-copy-prompt").addEventListener("click",async()=>{if(!r.isReady()){g("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(t.value),g("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}catch{t.select(),document.execCommand("copy"),g("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}});const n=o=>{try{const a=el(o),s=tl(a);if(!s)throw new Error("ไม่พบข้อมูลที่ตรงกับฟอร์ม ตรวจสอบว่าหัวตาราง CSV ตรงกับคำสั่งที่กำหนด");g(`นำเข้าข้อมูลแล้ว ${s} ช่อง — กรุณาตรวจสอบความถูกต้องก่อนบันทึกร่าง`,"success"),e.remove()}catch(a){g("นำเข้าข้อมูลไม่สำเร็จ: "+k(a),"error")}};e.querySelector("#doc-ai-csv-file").addEventListener("change",async o=>{var s;const a=(s=o.target.files)==null?void 0:s[0];if(a)try{n(await a.text())}finally{o.target.value=""}}),e.querySelector("#btn-doc-ai-import").addEventListener("click",()=>{const o=e.querySelector("#doc-ai-paste").value;if(!o.trim()){g("กรุณาวางคำตอบจาก AI ก่อน","warning");return}n(o)})}function aa(){return d.isCouncilAdvisor||d.isAdmin||d.isChair}function al(e){return e.status==="pending_advisor"&&(d.isAdmin||d.isCouncilAdvisor&&(mt==null?void 0:mt.includes(e.position_id)))}function nl(e){return e.status==="pending_dept_head"&&(d.isAdmin||d.isStudentAffairsHead)}function sl(e){return e.status==="pending_director"&&(d.isAdmin||d.isSchoolDirector)}function ol(){if(!(d.isAdmin||d.role==="teacher"||d.isChair))return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>';if(X===null)return Ji(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(d.isCouncilAdvisor&&mt===null)return Qi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(me!==null)return il();const t=aa()?`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <button type="button" class="btn-new-doc py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" data-form-key="FORM_09_ACTIVITY_APPROVAL">➕ ร่างแบบ 09 ขออนุมัติกิจกรรม</button>
        <button type="button" class="btn-new-doc py-3 rounded-2xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-sm font-bold" data-form-key="FORM_09_1_PROJECT_PROPOSAL">➕ ร่างแบบ 09.1 เสนอโครงการ</button>
      </div>`:"";if(!X.length)return`${t}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`;const r=n=>{var s;const[i,o]=Va[n.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],a=d.student&&n.created_by_student_id===d.student.id||d.teacher&&n.created_by_teacher_id===d.teacher.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${l(n.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${l(_t(n.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(n.form_version)||1} · ${(s=n.council_positions)!=null&&s.position_name?l(n.council_positions.position_name)+" · ":""}${Ua(Wa(n))} บาท</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${o}">${i}</span>
        </div>
        ${n.status==="draft"&&n.last_rejected_stage?`<p class="text-xs text-[var(--bad)] bg-[var(--bad-soft)] rounded-[10px] p-2.5">↩️ ถูกตีกลับจากขั้น${l({advisor:"ครูที่ปรึกษาประจำฝ่าย",dept_head:"หัวหน้าฝ่ายกิจการนักเรียน",director:"ผู้อำนวยการ"}[n.last_rejected_stage]??n.last_rejected_stage)}${n.last_rejection_comment?": "+l(n.last_rejection_comment):""}</p>`:""}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-view-doc-detail text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">📄 ดูรายละเอียด</button>
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-edit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${n.id}">✏️ แก้ไข</button>`:""}
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">📤 เสนอขออนุมัติ</button>`:""}
          ${al(n)||nl(n)||sl(n)?`
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${n.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${n.id}">❌ ไม่อนุมัติ</button>`:""}
          ${n.status==="approved"?`<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">🖨️ พิมพ์เอกสาร</button>${aa()?`<button type="button" class="btn-new-doc-revision text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">➕ สร้างฉบับแก้ไข</button>`:""}`:""}
        </div>
      </div>`};return`${t}<div class="space-y-3">${X.map(r).join("")}</div>${ll()}`}function Ha(e){try{return JSON.parse(d.cfg[e]||"[]")}catch{return[]}}function At({name:e,placeholder:t,configKey:r,value:n,extraClass:i=""}){const o=Ha(r);return o.length?`<select name="${e}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${i}">
    <option value="">— เลือก${l(t)} —</option>
    ${o.map(a=>`<option value="${l(a)}" ${n===a?"selected":""}>${l(a)}</option>`).join("")}
  </select>`:`<input name="${e}" placeholder="${l(t)} (ยังไม่ได้ตั้งค่าตัวเลือกในหน้าตั้งค่า)" value="${l(n??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${i}" />`}function il(){const e=me==="new",t=e?{}:X.find(a=>a.id===me)??{},r=e?Ga:t.form_key||"FORM_09_1_PROJECT_PROPOSAL",n=_t(r),i=d.isChair&&!d.isCouncilAdvisor&&!d.isAdmin?"council":t.origin??(d.isChair?"council":"teacher");Z===null&&Mr();const o=Z!=null&&Z.length?`
    <div>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mb-1">ครูที่ปรึกษาสภานักเรียน (คลิกเพื่อเพิ่ม)</p>
      <div class="flex flex-wrap gap-1.5">
        ${Z.map(a=>`<button type="button" class="doc-responsible-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition" data-name="${l(a.full_name)}">+ ${l(a.full_name)}</button>`).join("")}
      </div>
    </div>`:"";return`
    <div class="flex items-center gap-3 mb-4">
      <button type="button" id="btn-doc-form-back" class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
      <h2 class="text-base font-bold text-[var(--ink)]">${e?"ร่าง":"แก้ไขร่าง"}${l(n)}</h2>
    </div>
    <button type="button" id="btn-doc-ai-import-open" class="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-xs font-bold mb-3">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</button>
    <form id="doc-form" class="space-y-3" data-origin="${i}" data-form-key="${l(r)}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">ข้อมูลทั่วไป</p>
        <p class="text-xs font-bold text-[var(--primary)] mb-1">${l(n)} · ฉบับร่าง v${Number(t.form_version)||1}</p>
        <input name="title" required placeholder="ชื่อโครงการหรือชื่อกิจกรรม" value="${l(t.title??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <div class="grid grid-cols-2 gap-2">
          ${At({name:"planArea",placeholder:"แผนงาน",configKey:"council_doc_plan_areas",value:t.plan_area})}
          ${At({name:"projectType",placeholder:"ลักษณะโครงการ",configKey:"council_doc_project_types",value:t.project_type})}
        </div>
        ${At({name:"schoolStrategy",placeholder:"สนองกลยุทธ์โรงเรียน",configKey:"council_doc_school_strategies",value:t.school_strategy,extraClass:"w-full"})}
        ${At({name:"educationStandard",placeholder:"สนองมาตรฐานการศึกษา/ตัวชี้วัด",configKey:"council_doc_education_standards",value:t.education_standard,extraClass:"w-full"})}
        ${o}
        <textarea name="responsiblePersons" rows="2" placeholder="ผู้รับผิดชอบโครงการ (บรรทัดละ 1 ชื่อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(st(t.responsible_persons))}</textarea>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ฝ่ายที่รับผิดชอบ ${i==="council"?'<span class="text-[var(--bad)]">*</span>':""}</label>
          <select name="positionId" ${i==="council"?"required":""} class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— ไม่ระบุ —</option>
            ${d.positions.map(a=>`<option value="${a.id}" ${t.position_id===a.id?"selected":""}>${l(a.position_name)} (สภา${l(j[a.gender]??"")})</option>`).join("")}
          </select>
          ${i==="council"?'<p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">โครงการที่สภาริเริ่มเองต้องระบุฝ่าย เพื่อส่งให้ครูที่ปรึกษาประจำฝ่ายนั้นตรวจก่อน</p>':""}
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หลักการ วัตถุประสงค์ เป้าหมาย</p>
        <textarea name="rationale" rows="3" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(t.rationale??"")}</textarea>
        <textarea name="objectives" rows="2" placeholder="วัตถุประสงค์ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(st(t.objectives))}</textarea>
        <textarea name="goalsQuantitative" rows="2" placeholder="เป้าหมายเชิงปริมาณ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(st(t.goals_quantitative))}</textarea>
        <textarea name="goalsQualitative" rows="2" placeholder="เป้าหมายเชิงคุณภาพ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(st(t.goals_qualitative))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">วิธีดำเนินงาน</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ</p>
        <textarea name="workSteps" rows="4" placeholder="เสนอโครงการต่อผู้บริหาร | ธ.ค.2568 | - | นายเปาซี" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Et(t.work_steps))}</textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="durationText" placeholder="ระยะเวลาดำเนินการ" value="${l(t.duration_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <input name="locationText" placeholder="สถานที่ดำเนินงาน" value="${l(t.location_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">งบประมาณ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: รายการ | จำนวนเงิน(บาท) — รวมยอดคำนวณอัตโนมัติ</p>
        <textarea name="budgetItems" rows="4" placeholder="ค่าอาหาร 115 คน x 5 มื้อ | 17250" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Et(t.budget_items))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หน่วยงาน/ผู้เกี่ยวข้อง</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: หน่วยงาน/บุคคล | จำนวน(คน)</p>
        <textarea name="stakeholders" rows="3" placeholder="ครูที่ปรึกษา | 9" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Et(t.stakeholders))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">การประเมินผลความสำเร็จ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด</p>
        <textarea name="evaluationItems" rows="4" placeholder="ผู้เรียนพัฒนาศักยภาพผู้นำ | ร้อยละ 80 | ประเมินจากแบบสังเกตการณ์ | แบบสังเกตการณ์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Et(t.evaluation_items))}</textarea>
        <textarea name="expectedResults" rows="2" placeholder="ผลที่คาดว่าจะได้รับ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(st(t.expected_results))}</textarea>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex gap-2">
        <button type="button" id="btn-doc-form-cancel" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกร่าง</button>
      </div>
    </form>`}function Ja(e,t){var a;const r=l(t.council_name||"ระบบสภานักเรียน"),n=(s,c)=>c!=null&&c.length?`
    <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px;">
      <thead><tr>${s.map(m=>`<th style="border:1px solid #ccc;padding:6px;background:#f8f4f4;">${l(m)}</th>`).join("")}</tr></thead>
      <tbody>${c.map(m=>`<tr>${m.map(p=>`<td style="border:1px solid #ccc;padding:6px;">${l(p)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`:"",i=s=>s!=null&&s.length?`<ol style="margin:4px 0;padding-left:20px;">${s.map(c=>`<li>${l(c)}</li>`).join("")}</ol>`:"—",o='style="display:block;margin-bottom:3px;"';return`
    ${t.council_logo_url?`<img src="${l(t.council_logo_url)}" style="height:64px;object-fit:contain;display:block;margin:0 auto 8px;" />`:""}
    <h1 style="text-align:center;font-size:20px;margin-bottom:2px;">${l(_t(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))}</h1>
    <p style="text-align:center;color:#6e5f65;font-size:13px;margin-bottom:20px;">${r} · ปีการศึกษา ${e.academic_year}</p>
    <div style="margin-bottom:12px;"><b ${o}>ชื่อโครงการ</b>${l(e.title)}</div>
    <div style="margin-bottom:12px;"><b ${o}>แผนงาน</b>${l(e.plan_area||"—")} &nbsp;·&nbsp; <b style="display:inline">ลักษณะโครงการ</b> ${l(e.project_type||"—")}</div>
    <div style="margin-bottom:12px;"><b ${o}>สนองกลยุทธ์โรงเรียน</b>${l(e.school_strategy||"—")}</div>
    <div style="margin-bottom:12px;"><b ${o}>สนองมาตรฐานการศึกษา/ตัวชี้วัด</b>${l(e.education_standard||"—")}</div>
    <div style="margin-bottom:12px;"><b ${o}>ผู้รับผิดชอบโครงการ</b>${i(e.responsible_persons)}</div>
    <div style="margin-bottom:12px;"><b ${o}>ฝ่ายที่รับผิดชอบ</b>${l(((a=e.council_positions)==null?void 0:a.position_name)||"—")}</div>
    <div style="margin-bottom:12px;"><b ${o}>1. หลักการและเหตุผล</b>${l(e.rationale||"—")}</div>
    <div style="margin-bottom:12px;"><b ${o}>2. วัตถุประสงค์</b>${i(e.objectives)}</div>
    <div style="margin-bottom:12px;"><b ${o}>3. เป้าหมาย</b>
      <div style="margin-top:4px;"><i>3.1 เชิงปริมาณ</i>${i(e.goals_quantitative)}</div>
      <div><i>3.2 เชิงคุณภาพ</i>${i(e.goals_qualitative)}</div>
    </div>
    <div style="margin-bottom:12px;"><b ${o}>4. วิธีดำเนินงาน</b>${n(["ขั้นตอน/กิจกรรม","ระยะเวลา","งบประมาณ","ผู้รับผิดชอบ"],e.work_steps)}</div>
    <div style="margin-bottom:12px;"><b ${o}>5. ระยะเวลาดำเนินการ</b>${l(e.duration_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${o}>6. สถานที่ดำเนินงาน</b>${l(e.location_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${o}>7. งบประมาณ</b>${n(["รายการ","จำนวนเงิน (บาท)"],e.budget_items)}<b>รวมเป็นเงิน ${Ua(Wa(e))} บาท</b></div>
    <div style="margin-bottom:12px;"><b ${o}>8. หน่วยงาน/ผู้เกี่ยวข้อง</b>${n(["หน่วยงาน/บุคคล","จำนวน (คน)"],e.stakeholders)}</div>
    <div style="margin-bottom:12px;"><b ${o}>9. การประเมินผลความสำเร็จ</b>${n(["เป้าหมาย","ตัวบ่งชี้ความสำเร็จ","วิธีวัดและประเมินผล","เครื่องมือวัด"],e.evaluation_items)}</div>
    <div style="margin-bottom:12px;"><b ${o}>10. ผลที่คาดว่าจะได้รับ</b>${i(e.expected_results)}</div>
    <div style="display:flex;justify-content:space-around;margin-top:50px;text-align:center;flex-wrap:wrap;gap:20px;">
      <div style="width:200px;"><div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้เสนอโครงการ</div></div>
      <div style="width:200px;">
        ${e.dept_head_signature_url?`<img src="${l(e.dept_head_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">หัวหน้าฝ่ายกิจการนักเรียน</div>
      </div>
      <div style="width:200px;">
        ${e.director_signature_url?`<img src="${l(e.director_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้อำนวยการ${t.council_signer_director_name?" ("+l(t.council_signer_director_name)+")":""}</div>
      </div>
    </div>`}function ll(){if(!pt)return"";const e=X.find(i=>i.id===pt);if(!e)return"";const[t,r]=Va[e.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],n=[e.advisor_decided_at?`✅ ครูที่ปรึกษาประจำฝ่ายรับรองแล้ว${e.advisor_comment?" — "+l(e.advisor_comment):""}`:"",e.dept_head_decided_at?`✅ หัวหน้าฝ่ายกิจการนักเรียนอนุมัติแล้ว${e.dept_head_comment?" — "+l(e.dept_head_comment):""}`:"",e.director_decided_at?`✅ ผู้อำนวยการอนุมัติแล้ว${e.director_comment?" — "+l(e.director_comment):""}`:""].filter(Boolean);return`
    <div class="fixed inset-0 z-[90] bg-[var(--surface)] flex flex-col" id="doc-detail-backdrop">
      <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)] flex-shrink-0">
        <div class="min-w-0">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(e.title)}</p>
          <p class="text-[0.625rem] text-[var(--muted-2)] mt-0.5">${l(_t(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(e.form_version)||1} · แก้ไขครั้งที่ ${Number(e.document_revision)||1}</p>
          <span class="text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${r} inline-block mt-0.5">${t}</span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" id="btn-doc-detail-print" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]">🖨️ พิมพ์</button>
          <button type="button" id="btn-doc-detail-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none">✕</button>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div style="font-family:'Sarabun',sans-serif;line-height:1.8;color:#1d1519;max-width:800px;margin:0 auto;">
          ${Ja(e,d.cfg)}
          ${n.length?`<div style="margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;"><b style="display:block;margin-bottom:6px;font-size:13px;">ประวัติการอนุมัติ</b><div style="font-size:13px;color:#106143;">${n.map(i=>`<p style="margin-bottom:2px;">${i}</p>`).join("")}</div></div>`:""}
        </div>
      </div>
    </div>`}function dl(e,t){return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>${l(_t(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} ${l(e.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; color: #1d1519; }
      @media print { body { padding: 0; } }
    </style></head><body>
      ${Ja(e,t)}
    </body></html>`}function na(e){Ie(dl(e,d.cfg))}const _r=e=>{if(!e)return"";const t=new Date(e);if(isNaN(t))return"";const r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`};function cl(){const e=d.cfg;return`
    <form id="settings-general-form" class="space-y-4 pb-4">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🏛️ ข้อมูลทั่วไป</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ชื่อสภานักเรียน</label>
          <input name="council_name" value="${l(e.council_name||"")}" placeholder="สภานักเรียนโรงเรียน..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">โลโก้ (URL รูปภาพ)</label>
          <input name="council_logo_url" value="${l(e.council_logo_url||"")}" placeholder="https://..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายชาย</label>
            <input type="color" name="council_theme_side_m" value="${l(e.council_theme_side_m||"#14563b")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายหญิง</label>
            <input type="color" name="council_theme_side_w" value="${l(e.council_theme_side_w||"#a3134f")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">⚠️ สีธีมยังเป็นค่าที่บันทึกไว้เฉยๆ ยังไม่ได้ใช้สลับสีจริงในหน้าเว็บ (รอฟีเจอร์สลับธีมตามฝ่ายในเฟสถัดไป)</p>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗓️ ห้วงปฏิบัติหน้าที่</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">เริ่ม ภาค/ปี</span>
            <input name="council_term_start_semester" value="${l(e.council_term_start_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_start_year" value="${l(e.council_term_start_year||"")}" placeholder="2568" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">สิ้นสุด ภาค/ปี</span>
            <input name="council_term_end_semester" value="${l(e.council_term_end_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_end_year" value="${l(e.council_term_end_year||"")}" placeholder="2569" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✅ เกณฑ์คุณสมบัติผู้สมัคร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (สามัญ)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa" value="${l(e.council_min_gpa||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (ศาสนา)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa_religious" value="${l(e.council_min_gpa_religious||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ระดับชั้นที่สมัครได้ (คั่นด้วย ,)</label>
          <input name="council_eligible_grade_levels" value="${l(e.council_eligible_grade_levels||$a)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">จำนวนเกียรติบัตร/รางวัลขั้นต่ำที่ต้องแนบ</label>
          <input type="number" min="0" step="1" name="council_min_certificates" value="${l(e.council_min_certificates||"5")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_require_teacher_endorsement" ${e.council_require_teacher_endorsement!=="false"?"checked":""} class="w-4 h-4" />
          บังคับให้ครูที่ปรึกษาสามัญรับรองก่อนเข้าสัมภาษณ์
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_require_peer_endorsement" ${e.council_require_peer_endorsement==="true"?"checked":""} class="w-4 h-4" />
          บังคับให้สมาชิกสภานักเรียนปัจจุบัน (เพศเดียวกัน) รับรองด้วยก่อนเข้าสัมภาษณ์ — ยกเว้นผู้สมัครที่เป็นสมาชิกสภาปัจจุบันอยู่แล้ว
        </label>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เปิดรับสมัครตั้งแต่</label>
            <input type="datetime-local" name="council_apply_opens_at" value="${l(_r(e.council_apply_opens_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ปิดรับสมัครเมื่อ</label>
            <input type="datetime-local" name="council_apply_closes_at" value="${l(_r(e.council_apply_closes_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">📈 เกณฑ์การประเมินความเป็นสมาชิกสภา</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">คิดจากกิจกรรมที่เกิดขึ้นแล้ว (กำลังดำเนินการ/เสร็จแล้ว) และถูกเลือกไว้ตอนสร้างว่า "นับผล" เท่านั้น — ตัวเลข % เป็นข้อมูลให้ครูที่ปรึกษาสภาดูประกอบการตัดสินใจเท่านั้น ไม่ตัดสิทธิ์อัตโนมัติ</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">% เช็คชื่อขั้นต่ำที่ควรผ่าน (เว้นว่าง = ไม่ตั้งเกณฑ์)</label>
          <input type="number" min="0" max="100" step="1" name="council_min_attendance_pct" value="${l(e.council_min_attendance_pct||"")}" placeholder="เช่น 80" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">🌟 จุดเด่นในหน้าหลัก</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">ควบคุมว่าปุ่ม "สมัครสภานักเรียน" หรือ "การเลือกตั้ง" จะโชว์เด่นในหน้าหลักของนักเรียน/ครูทั่วไป — ปล่อยว่างไว้ให้ระบบคำนวณจากช่วงเปิด-ปิดรับสมัคร/เลือกตั้งด้านบนให้อัตโนมัติ</p>
        <select name="council_featured_phase" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="" ${e.council_featured_phase?"":"selected"}>— อัตโนมัติจากวันที่ (แนะนำ) —</option>
          <option value="apply" ${e.council_featured_phase==="apply"?"selected":""}>เน้น "สมัครสภานักเรียน"</option>
          <option value="election" ${e.council_featured_phase==="election"?"selected":""}>เน้น "การเลือกตั้ง"</option>
          <option value="none" ${e.council_featured_phase==="none"?"selected":""}>ไม่เน้นอะไรเป็นพิเศษ (แสดงเท่ากัน)</option>
        </select>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">👁️ การมองเห็นระบบ</p>
        <label class="flex items-center gap-2 text-sm text-[var(--ink-2)]">
          <input type="checkbox" name="council_visible_to_all" ${e.council_visible_to_all!=="false"?"checked":""} class="w-4 h-4" />
          เปิดให้นักเรียน/ครูทุกคนเห็นเมนูสภานักเรียน
        </label>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">รหัสนักเรียนที่ทดสอบได้แม้ปิดระบบ (คั่นด้วย , หรือขึ้นบรรทัดใหม่)</label>
          <textarea name="council_test_student_codes" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(e.council_test_student_codes||"")}</textarea>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ข้อความขอบคุณหลังโหวต</label>
          <textarea name="council_election_thank_you_message" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(e.council_election_thank_you_message||"")}</textarea>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✍️ ผู้ลงนามเอกสาร/เกียรติบัตร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ครูที่ปรึกษาสภา</label>
            <input name="council_signer_advisor_name" value="${l(e.council_signer_advisor_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ผู้อำนวยการโรงเรียน</label>
            <input name="council_signer_director_name" value="${l(e.council_signer_director_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex justify-end">
        <button type="submit" class="px-6 py-2.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกการตั้งค่า</button>
      </div>
    </form>`}function ul(){const e={M:d.positions.filter(s=>s.gender==="M").sort((s,c)=>s.sort_order-c.sort_order),W:d.positions.filter(s=>s.gender==="W").sort((s,c)=>s.sort_order-c.sort_order)},t=s=>{const c=s==="M"?"👦 ฝ่ายชาย":"👧 ฝ่ายหญิง",m=e[s].map(p=>`
      <form class="position-row-form flex items-center gap-2 py-2 border-b border-[var(--line-soft)] last:border-0" data-id="${p.id}">
        <input name="position_name" value="${l(p.position_name)}" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-1.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <input name="seats_count" type="number" min="1" value="${p.seats_count}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
        ${p.is_elected?'<span class="text-[0.625rem] font-bold px-2 py-1 rounded-full bg-[var(--gold-soft)] text-[var(--gold-ink)] flex-shrink-0">มาจากเลือกตั้ง</span>':""}
        <button type="submit" class="text-xs font-bold text-[var(--primary)] flex-shrink-0 px-2 py-1.5">บันทึก</button>
        <button type="button" class="btn-delete-position text-[var(--bad)] flex-shrink-0 px-1 text-lg leading-none" data-id="${p.id}" title="ลบตำแหน่ง">✕</button>
      </form>`).join("");return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${c}</p>
        ${m||'<p class="text-xs text-[var(--muted-2)] py-2">ยังไม่มีตำแหน่ง</p>'}
        <form class="position-add-form flex gap-2 mt-3" data-gender="${s}">
          <input name="position_name" placeholder="เพิ่มตำแหน่งใหม่" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
          <input name="seats_count" type="number" min="1" value="1" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-2 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
        </form>
      </div>`},r=[],n=new Set;[...e.M,...e.W].forEach(s=>{n.has(s.position_name)||(n.add(s.position_name),r.push(s.position_name))});const i=e.M.reduce((s,c)=>s+Number(c.seats_count),0),o=e.W.reduce((s,c)=>s+Number(c.seats_count),0),a=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mt-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📊 สรุปรวมจำนวนที่นั่งทั้งสภา</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-left text-[var(--muted)]"><th class="py-1.5 pr-2">ตำแหน่ง</th><th class="py-1.5 px-2 text-center">ชาย</th><th class="py-1.5 px-2 text-center">หญิง</th><th class="py-1.5 pl-2 text-center">รวม</th></tr></thead>
          <tbody>
            ${r.map(s=>{var p,u;const c=((p=e.M.find(x=>x.position_name===s))==null?void 0:p.seats_count)??0,m=((u=e.W.find(x=>x.position_name===s))==null?void 0:u.seats_count)??0;return`<tr class="border-t border-[var(--line-soft)]"><td class="py-1.5 pr-2 text-[var(--ink-2)]">${l(s)}</td><td class="py-1.5 px-2 text-center">${c}</td><td class="py-1.5 px-2 text-center">${m}</td><td class="py-1.5 pl-2 text-center font-bold text-[var(--primary)]">${c+m}</td></tr>`}).join("")}
            <tr class="border-t-2 border-[var(--line)] font-bold"><td class="py-1.5 pr-2 text-[var(--ink)]">รวมทั้งหมด</td><td class="py-1.5 px-2 text-center">${i}</td><td class="py-1.5 px-2 text-center">${o}</td><td class="py-1.5 pl-2 text-center text-[var(--primary)]">${i+o}</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;return`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${t("M")}${t("W")}</div>${a}`}function pl(){if(ae===null)return Tr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ye===null)return qo(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ce===null)return Ya(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(re===null)return Oa(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=ae.reduce((m,p)=>m+Number(p.weight),0),t=(e/2).toFixed(1),r=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${e} คะแนน · ผ่านเกณฑ์ที่ ≥ ${t})</p>
      <div class="space-y-1.5 mt-2">
        ${ae.map(m=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${l(m.name)}</span>
            <span class="font-bold text-[var(--muted)]">${m.weight} คะแนน</span>
            <button type="button" class="btn-remove-interview-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${m.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีหัวข้อ</p>'}
      </div>
      <form id="interview-criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มหัวข้อใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <input name="weight" type="number" min="1" value="10" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,n=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),i=`
    <form id="settings-video-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎬 วิดีโอแนะนำตัว</p>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)]">ความยาวไม่เกิน</span>
        <input name="council_video_max_minutes" type="number" min="1" value="${l(d.cfg.council_video_max_minutes||"3")}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
        <span class="text-xs text-[var(--muted)]">นาที</span>
      </div>
      <label class="block text-xs font-medium text-[var(--muted)]">หัวข้อที่ต้องพูด (บรรทัดละ 1 หัวข้อ)</label>
      <textarea name="council_video_brief" rows="5" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l(n.join(`
`))}</textarea>
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,o=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">💬 ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ</p>
      <div class="space-y-1.5">
        ${ye.map(m=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${l(m.phrase)}</span>
            <button type="button" class="btn-remove-phrase text-[var(--bad)] hover:text-[#8a2f22]" data-id="${m.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีข้อความ</p>'}
      </div>
      <form id="phrase-form" class="flex gap-2 mt-3">
        <input name="phrase" placeholder="เพิ่มข้อความใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,a=(m,p)=>`
    <div>
      <label class="block text-xs font-medium text-[var(--muted)] mb-1">${m} (บรรทัดละ 1 รายการ)</label>
      <textarea name="${p}" rows="3" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ha(p).join(`
`))}</textarea>
    </div>`,s=`
    <form id="settings-doc-options-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">📄 ตัวเลือกฟอร์มเอกสารโครงการ</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] -mt-2">ใช้เป็นตัวเลือกในฟอร์มร่างเอกสารโครงการ (ถ้าไม่ตั้งค่าไว้ ฟอร์มจะให้พิมพ์เองแทน)</p>
      ${a("แผนงาน","council_doc_plan_areas")}
      ${a("ลักษณะโครงการ","council_doc_project_types")}
      ${a("สนองกลยุทธ์โรงเรียน","council_doc_school_strategies")}
      ${a("สนองมาตรฐานการศึกษา/ตัวชี้วัด","council_doc_education_standards")}
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,c=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🏅 เทมเพลตเกียรติบัตรกิจกรรม</p>
      <div class="space-y-1.5 mb-3">
        ${re.map(m=>{var x;const p=(x=m.layout)==null?void 0:x.background,u=p?p.type==="image"?p.imageUrl:null:m.type==="custom"?m.background_image_url:null;return`
          <div class="flex items-center gap-2 text-xs">
            ${u?`<img src="${l(u)}" class="w-10 h-7 object-cover rounded border border-[var(--line)] flex-shrink-0" />`:`<span class="flex-shrink-0">${l((Xt[m.preset_key]??"🏅").split(" ")[0])}</span>`}
            <span class="flex-1 text-[var(--ink-2)] truncate">${l(m.name)} ${m.type==="preset"?"· "+l(Xt[m.preset_key]??m.preset_key):"· อัปโหลดเอง"}</span>
            <button type="button" class="btn-design-cert-template text-[var(--primary)] hover:text-[var(--primary-dark)] font-bold flex-shrink-0" data-id="${m.id}">🎨 ออกแบบ</button>
            <button type="button" class="btn-remove-cert-template text-[var(--bad)] hover:text-[#8a2f22] flex-shrink-0" data-id="${m.id}">✕</button>
          </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีเทมเพลต</p>'}
      </div>
      <form id="cert-template-form" class="space-y-2 pt-2 border-t border-[var(--line-soft)]">
        <input name="name" placeholder="ชื่อเทมเพลต เช่น เกียรติบัตรกิจกรรม YLA" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]" required />
        <div class="flex gap-2">
          <label class="flex-1 flex items-center gap-1.5 text-xs cursor-pointer">
            <input type="radio" name="template_type" value="preset" checked class="cert-template-type-radio" /> ดีไซน์สำเร็จรูป
          </label>
          <label class="flex-1 flex items-center gap-1.5 text-xs cursor-pointer">
            <input type="radio" name="template_type" value="custom" class="cert-template-type-radio" /> อัปโหลดเอง
          </label>
        </div>
        <select name="preset_key" id="cert-template-preset-select" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
          ${Object.entries(Xt).map(([m,p])=>`<option value="${m}">${l(p)}</option>`).join("")}
        </select>
        <input type="file" name="background_image" id="cert-template-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`;return`${r}${i}${za()}${o}${s}${c}`}function ml(){const e=Lr();return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(No).map(([t,r])=>`
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${l(r)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${t}" ${e[t]!==!1?"checked":""} />
        </label>`).join("")}
    </div>`}const ft={},bt={},De={};async function sa(e){const[t,r,n]=await Promise.all([qs(e).catch(()=>[]),js(e).catch(()=>[]),Rs(e).catch(()=>[])]);ft[e]=t,bt[e]=r,De[e]=n,f()}function bl(){var i;const e=d.isChair,t=d.isAdmin||d.isCouncilAdvisor;if(!e&&!t)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>';const r='<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>';let n="";if(e){const o=Ee((i=d.student)==null?void 0:i.gender);if(o&&ft[o]===void 0)sa(o),n+=r;else if(o){const a=ft[o],s=bt[o]||[],c=De[o]||[],m=new Set(c.map(u=>u.application_id)),p=s.filter(u=>!m.has(u.id));n+=`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${j[o]}</p>
          ${a.length?p.length?`
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${a.map(u=>`<option value="${u.id}">${l(u.position_name)}</option>`).join("")}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${p.map(u=>{var x,b,v;return`<option value="${u.id}">${l(((x=u.students)==null?void 0:x.full_name)??"—")}${((v=(b=u.council_interviews)==null?void 0:b[0])==null?void 0:v.score)!=null?" (คะแนน "+u.council_interviews[0].score+")":""}</option>`}).join("")}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>':'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>'}
        </div>`,c.length&&(n+=`
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${c.map(u=>{var x,b,v,y;return`
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${z((x=u.council_applications)==null?void 0:x.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((v=(b=u.council_applications)==null?void 0:b.students)==null?void 0:v.full_name)??"—")}</p>
                  <p class="text-xs text-[var(--muted)]">${l(((y=u.council_positions)==null?void 0:y.position_name)??"—")}</p>
                </div>
              </div>`}).join("")}</div>
          </div>`)}}return t&&(n+=["M","W"].map(o=>{if(De[o]===void 0)return sa(o),r;const a=De[o];return a.length?`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${j[o]}</p>
          <div class="space-y-2.5">
            ${a.map(s=>{var c,m,p,u,x;return`
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${s.id}">
                <div class="flex items-center gap-3">
                  ${z((c=s.council_applications)==null?void 0:c.students)}
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((p=(m=s.council_applications)==null?void 0:m.students)==null?void 0:p.full_name)??"—")}</p>
                    <p class="text-xs text-[var(--muted)]">${l(((u=s.council_positions)==null?void 0:u.position_name)??"—")}</p>
                  </div>
                </div>
                ${(x=s.council_applications)!=null&&x.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(s.council_applications.motivation)}</p>`:""}
                <textarea class="nom-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]" data-id="${s.id}" rows="2" placeholder="ความเห็น (ไม่บังคับถ้าอนุมัติ, บังคับถ้าไม่อนุมัติ)"></textarea>
                <div class="flex gap-2">
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${s.id}" data-approve="false">❌ ไม่อนุมัติ</button>
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${s.id}" data-approve="true">✅ อนุมัติ</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")),n||'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>'}const vl={general:cl,positions:ul,criteria:pl,modules:ml};function xl(){return d.isAdmin||d.isCouncilAdvisor?(Vr.some(e=>e.id===ot)||(ot="general"),`
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${Vr.map(e=>`
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${e.id===ot?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="${e.id}">${l(e.label)}</button>`).join("")}
    </div>
    <div>${vl[ot]()}</div>`):'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>'}let jt="duty",ie=null,at=null,je=null;const oa=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];function Qa(){const e=new Date,t=e.getDay(),r=(t===0?-6:1)-t,n=new Date(e);return n.setDate(e.getDate()+r),n.setHours(0,0,0,0),n.toISOString().slice(0,10)}async function fl(){const e=d.membership[0];if(!e){ie=[],at=new Set,je=[],f();return}const[t,r]=await Promise.all([Ls(e.id).catch(()=>[]),Ts(e.id).catch(()=>[])]);ie=t,je=r,at=await Ns(t.map(n=>n.id),Qa()).catch(()=>new Set),f()}function gl(){const e=d.membership[0];return e?ie===null?(fl(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>'):`${`
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${jt==="duty"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${jt==="work"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="work">งานของฉัน</button>
    </div>`}${jt==="duty"?yl(e):hl()}`:'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>'}function yl(e){var n;const t=ie.filter(i=>at.has(i.id)).length,r=ie.length?Math.round(t/ie.length*100):0;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${z(d.student,"w-14 h-18")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((n=e.council_positions)==null?void 0:n.position_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${e.source==="elected"?"🗳️ มาจากการเลือกตั้ง":"✅ ได้รับการแต่งตั้ง"} · ${e.term_start_date?new Date(e.term_start_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${t}/${ie.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${r}%"></div></div>
      ${ie.length?`<div class="space-y-1.5">${ie.map(i=>{const o=at.has(i.id);return`
        <label class="flex items-center gap-2.5 rounded-xl border ${o?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)]"} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${i.id}" ${o?"checked":""} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${o?"text-[#106143] line-through":"text-[var(--ink-2)]"} truncate">${l(i.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${i.day_of_week!=null?oa[i.day_of_week]:""}${i.time_range?" · "+l(i.time_range):""}${i.location?" · "+l(i.location):""}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${i.id}">✕</button>
        </label>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${oa.map((i,o)=>`<option value="${o}">${i}</option>`).join("")}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`}function hl(){const e=je.filter(n=>n.status!=="done"),t=je.filter(n=>n.status==="done"),r=n=>`
    <label class="flex items-center gap-2.5 rounded-xl border ${n.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3">
      <input type="checkbox" class="assignment-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${n.id}" ${n.status==="done"?"checked":""} />
      <div class="min-w-0 flex-1">
        <p class="text-sm ${n.status==="done"?"text-[#106143] line-through":"text-[var(--ink)]"}">${l(n.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${n.due_date?"กำหนดส่ง "+new Date(n.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${n.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${n.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
    </label>`;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🎫 QR เช็คอินกิจกรรมของฉัน</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">แสดงให้ผู้ดูแลกิจกรรมสแกนเพื่อเช็คอิน</p>
      <button type="button" id="btn-show-my-council-qr" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">แสดง QR ของฉัน</button>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${t.length}/${je.length} เสร็จแล้ว)</p>
      ${je.length?`<div class="space-y-2">${[...e,...t].map(r).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>'}
    </div>`}function _l(e){var c;(c=document.getElementById("council-my-qr-modal"))==null||c.remove();const t=document.createElement("div");t.id="council-my-qr-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${l(e.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-my-qr-canvas"),n=async()=>{const m=`SQ:${e.student_code}:${Math.floor(Date.now()/1e3)}`;try{await uo.toCanvas(r,m,{width:190,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch{}};n();let i=60;const o=t.querySelector("#council-qr-timer"),a=setInterval(()=>{i-=1,o&&(o.textContent=String(i)),i<=0&&(i=60,n())},1e3),s=()=>{clearInterval(a),t.remove()};t.querySelector("#btn-close-council-qr").addEventListener("click",s),t.addEventListener("click",m=>{m.target===t&&s()})}let Wt=null;async function $l(){var t;const e=d.membership[0];if(!e||!d.student){Wt={activities:[],myAttendance:[]},f();return}Wt=await Cs(d.student.id,(t=e.council_positions)==null?void 0:t.gender,Y).catch(()=>({activities:[],myAttendance:[]})),f()}const wl={planned:["ยังไม่จัด","text-[var(--gold-ink)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary)]"],completed:["เสร็จแล้ว","text-[#106143]"],cancelled:["ยกเลิก","text-[var(--muted-2)]"]};function kl(){if(!d.membership[0])return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>';if(Wt===null)return $l(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const{activities:t,myAttendance:r}=Wt,n=new Set(r.map(u=>u.activity_id)),i=t.filter(u=>u.counts_for_evaluation),o=i.filter(u=>n.has(u.id)).length,a=i.length?Math.round(o/i.length*100):null,s=d.cfg.council_min_attendance_pct?Number(d.cfg.council_min_attendance_pct):null,c=s==null||a==null?null:a>=s,m=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📈 ผลเช็คชื่อของฉัน</p>
      ${i.length?`
        <div class="flex items-end gap-2 mb-2">
          <span class="text-3xl font-bold text-[var(--primary)]">${a}%</span>
          <span class="text-xs text-[var(--muted-2)] mb-1">${o}/${i.length} กิจกรรม</span>
        </div>
        <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-2"><div class="h-full ${c===!1?"bg-[var(--bad)]":"bg-[var(--primary)]"}" style="width:${a}%"></div></div>
        ${s!=null?`<p class="text-xs ${c?"text-[var(--ok)]":"text-[var(--bad)]"} font-bold">${c?"✅ ผ่านเกณฑ์ขั้นต่ำ":"⚠️ ยังไม่ถึงเกณฑ์ขั้นต่ำ"} ${s}%</p>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีการตั้งเกณฑ์ขั้นต่ำจากผู้ดูแล</p>'}
      `:'<p class="text-xs text-[var(--muted-2)] py-4 text-center">ยังไม่มีกิจกรรมที่นับผลในระบบ</p>'}
      <p class="text-[0.625rem] text-[var(--muted-2)] mt-2">นับจากกิจกรรมที่เกิดขึ้นแล้วและถูกตั้งค่าให้ "นับผล" เท่านั้น — ผลนี้เป็นข้อมูลให้ครูที่ปรึกษาใช้ประกอบการประเมิน ไม่ได้ตัดสินอัตโนมัติ</p>
    </div>`,p=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📅 กิจกรรม/กำหนดการ</p>
      ${t.length?`<div class="space-y-2">${t.map(u=>{const x=n.has(u.id),[b,v]=wl[u.status]??["—","text-[var(--muted)]"];return`
        <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(u.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${u.activity_date?new Date(u.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} · <span class="${v}">${b}</span>${u.counts_for_evaluation?"":' · <span class="text-[var(--muted-2)]">ไม่นับผล</span>'}</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${x?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--bad-soft)] text-[var(--bad)]"}">${x?"✅ เช็คชื่อแล้ว":"✗ ยังไม่เช็คชื่อ"}</span>
        </div>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-8">ยังไม่มีกิจกรรม</p>'}
    </div>`;return`${m}${p}`}const gt={};async function El(e){gt[e]=await Is(e).catch(()=>[]),f()}function Al(){var a;if(!d.isChair)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>';const e=Ee((a=d.student)==null?void 0:a.gender);if(!e)return"";if(gt[e]===void 0)return El(e),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const t=gt[e],r=t.filter(s=>s.status==="done").length,n=d.members.filter(s=>{var c;return((c=s.council_positions)==null?void 0:c.gender)===e}),i=`
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${j[e]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${n.map(s=>{var c,m;return`<option value="${s.id}">${l(((c=s.students)==null?void 0:c.full_name)??"—")} (${l(((m=s.council_positions)==null?void 0:m.position_name)??"")})</option>`}).join("")}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`;if(!t.length)return`${i}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`;const o=s=>{var c,m,p;return`
    <div class="rounded-xl border ${s.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3 flex items-center gap-3">
      ${z((c=s.council_members)==null?void 0:c.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((p=(m=s.council_members)==null?void 0:m.students)==null?void 0:p.full_name)??"—")}</p>
        <p class="text-xs text-[var(--ink-2)]">${l(s.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${s.due_date?"กำหนดส่ง "+new Date(s.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${s.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${s.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${s.id}">ลบ</button>
      </div>
    </div>`};return`${i}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${r}/${t.length} เสร็จแล้ว)</p><div class="space-y-2">${t.map(o).join("")}</div>`}let Ze=null,et=null,$r=null;const Ht={};async function Mr(){const[e,t,r]=await Promise.all([Kt("council_advisor").catch(()=>[]),Kt("student_affairs_head").catch(()=>[]),Kt("school_director").catch(()=>[])]);Z=e,Ze=t,et=r,f()}async function Sl(e){Ht[e]=await va(e).catch(()=>[]),f()}function Il(e){if(Ht[e]===void 0)return Sl(e),'<p class="text-xs text-[var(--muted-2)] py-2">⏳ กำลังโหลด...</p>';const t=new Set(Ht[e]);return`
    <form class="advisor-dept-form mt-3 pt-3 border-t border-[var(--line-soft)]" data-teacher-id="${e}">
      <p class="text-xs font-semibold text-[var(--muted)] mb-2">ติ๊กฝ่ายที่ครูคนนี้รับผิดชอบตรวจ/รับรองเอกสารโครงการ</p>
      <div class="grid grid-cols-2 gap-1.5 mb-2">
        ${d.positions.map(r=>`
          <label class="flex items-center gap-1.5 text-xs text-[var(--ink-2)]">
            <input type="checkbox" name="pos_${r.id}" value="${r.id}" ${t.has(r.id)?"checked":""} />
            ${l(r.position_name)} (${l(j[r.gender]??"")})
          </label>`).join("")}
      </div>
      <button type="submit" class="px-4 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกฝ่าย</button>
    </form>`}function Cl(e,t,r){const n=$r===e.id;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)]">
      <div class="flex items-center gap-3">
        ${e.image_url?`<img src="${l(e.image_url)}" class="w-10 h-12 rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${l((e.full_name||"?").charAt(0))}</div>`}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(e.full_name)}</p>
          <p class="text-xs text-[var(--muted)]">${l(e.teacher_code||"")}${e.category?" · "+l(e.category):""} · ${e.signature_url?"✅ มีลายเซ็นแล้ว":"⚠️ ยังไม่มีลายเซ็น"}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
        <button type="button" class="btn-edit-council-profile text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}" data-name="${l(e.full_name)}" data-image="${l(e.image_url??"")}" data-signature="${l(e.signature_url??"")}">✍️ รูป/ลายเซ็น</button>
        ${r?`<button type="button" class="btn-toggle-advisor-depts text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">${n?"▲ ซ่อนฝ่ายที่ดูแล":"🏛️ ฝ่ายที่ดูแล"}</button>`:""}
        <button type="button" class="btn-remove-teacher-position text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${e.id}" data-position="${t}">ถอดถอน</button>
      </div>
      ${r&&n?Il(e.id):""}
    </div>`}function Ll(){if(!d.isAdmin)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>';if(Z===null)return Mr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ue===null)return jr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=`<datalist id="council-teacher-datalist">${ue.map(r=>`<option value="${l(r.full_name)} · รหัส ${r.id}"></option>`).join("")}</datalist>`,t=(r,n,i,o)=>`
    <div class="mb-5">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${r} (${n.length} คน)</p>
      <form class="perms-add-form bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 mb-2 flex gap-2" data-position="${i}">
        <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
          class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
      </form>
      ${n.length?`<div class="space-y-2">${n.map(a=>Cl(a,i,o)).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มี</p>'}
    </div>`;return`${e}
    ${t("ครูที่ปรึกษาสภานักเรียน",Z,"council_advisor",!0)}
    ${t("หัวหน้าฝ่ายกิจการนักเรียน",Ze,"student_affairs_head",!1)}
    ${t("ผู้อำนวยการ",et,"school_director",!1)}`}function Tl(e){const t=e.getContext("2d"),r=()=>{t.fillStyle="#fff",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#0f172a"};r(),t.lineWidth=4,t.lineCap="round";let n=!1,i=!1;const o=a=>{const s=e.getBoundingClientRect();return{x:(a.clientX-s.left)*e.width/s.width,y:(a.clientY-s.top)*e.height/s.height}};return e.addEventListener("pointerdown",a=>{var c;n=!0,(c=e.setPointerCapture)==null||c.call(e,a.pointerId);const s=o(a);t.beginPath(),t.moveTo(s.x,s.y)}),e.addEventListener("pointermove",a=>{if(!n)return;const s=o(a);t.lineTo(s.x,s.y),t.stroke(),i=!0}),e.addEventListener("pointerup",()=>{n=!1}),e.addEventListener("pointercancel",()=>{n=!1}),{clear:()=>{r(),i=!1},isDrawn:()=>i,toBlob:()=>new Promise(a=>e.toBlob(a,"image/png"))}}function ia(e){var i;(i=document.getElementById("council-profile-modal"))==null||i.remove();const t=document.createElement("div");t.id="council-profile-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">✍️ รูปและลายเซ็น — ${l(e.full_name)}</p>
        <button type="button" id="btn-close-council-profile" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <div class="space-y-4">
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          <div class="flex items-center gap-3">
            ${e.image_url?`<img src="${l(e.image_url)}" class="w-14 h-[4.5rem] rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-14 h-[4.5rem] rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] flex-shrink-0">${l((e.full_name||"?").charAt(0))}</div>`}
            <input type="file" id="council-profile-photo-file" accept="image/*" class="text-xs flex-1 min-w-0" />
          </div>
        </div>
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${l(e.signature_url)}" class="h-16 max-w-full object-contain bg-white border border-[var(--line)] rounded-lg p-1 mb-2" />`:""}
          <canvas id="council-signature-canvas" width="700" height="220" class="w-full h-32 border border-[var(--line)] rounded-xl bg-white touch-none"></canvas>
          <button type="button" id="council-signature-clear" class="text-xs text-[var(--bad)] mt-1">ล้างลายเซ็น</button>
          <p class="text-xs font-medium text-[var(--muted)] mt-2 mb-1">หรืออัปโหลดรูปลายเซ็น</p>
          <input type="file" id="council-signature-file" accept="image/*" class="text-xs" />
        </div>
        <button type="button" id="council-profile-save" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-signature-canvas"),n=Tl(r);t.querySelector("#council-signature-clear").addEventListener("click",()=>n.clear()),t.querySelector("#btn-close-council-profile").addEventListener("click",()=>t.remove()),t.addEventListener("click",o=>{o.target===t&&t.remove()}),t.querySelector("#council-profile-save").addEventListener("click",async()=>{var a,s;const o=t.querySelector("#council-profile-save");o.disabled=!0,o.textContent="กำลังบันทึก...";try{const c=(a=t.querySelector("#council-profile-photo-file").files)==null?void 0:a[0];if(c){const u=await ln(e.id,c);await Vs(e.id,u),d.teacher&&d.teacher.id===e.id&&(d.teacher.image_url=u)}const p=((s=t.querySelector("#council-signature-file").files)==null?void 0:s[0])||(n.isDrawn()?await n.toBlob():null);if(p){const u=await dn(e.id,p);await Us(e.id,u),d.teacher&&d.teacher.id===e.id&&(d.teacher.signature_url=u)}g("บันทึกแล้ว ✅","success"),t.remove(),Z=null,Ze=null,et=null,f()}catch(c){g("บันทึกไม่สำเร็จ: "+k(c),"error"),o.disabled=!1,o.textContent="บันทึก"}})}function Nl(){if(!d.teacher)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะบัญชีครูเท่านั้น</p>';const e=d.teacher;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-5 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-4">✍️ โปรไฟล์ของฉัน — ${l(e.full_name)}</p>
      <div class="flex items-center justify-center gap-6 mb-4">
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          ${e.image_url?`<img src="${l(e.image_url)}" class="w-16 h-20 rounded-[10px] object-cover border border-[var(--line)] mx-auto" />`:`<div class="w-16 h-20 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] mx-auto">${l((e.full_name||"?").charAt(0))}</div>`}
        </div>
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${l(e.signature_url)}" class="h-20 max-w-[10rem] object-contain bg-white border border-[var(--line)] rounded-lg p-1 mx-auto" />`:'<div class="h-20 w-40 rounded-lg border border-dashed border-[var(--line)] flex items-center justify-center text-xs text-[var(--muted-2)] mx-auto">ยังไม่มีลายเซ็น</div>'}
        </div>
      </div>
      <button type="button" id="btn-edit-my-council-profile" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✏️ แก้ไขรูป/ลายเซ็น</button>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">ลายเซ็นนี้จะถูกใช้ประทับอัตโนมัติเมื่อคุณอนุมัติเอกสารโครงการ ไม่ต้องวาดใหม่ทุกครั้ง</p>
    </div>`}function ql(){if(!(d.isAdmin||d.isCouncilAdvisor))return"";const e=le.map(r=>`<div class="rounded-xl border border-[var(--line)] p-3 flex items-center gap-3">
    <div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)]">${l(r.term_label)}</p><p class="text-xs text-[var(--muted)]">ปีการศึกษา ${r.academic_year} · ${l(fr[r.status]||r.status)}${r.duty_start_date?` · ${l(r.duty_start_date)} ถึง ${l(r.duty_end_date||"ไม่ระบุ")}`:""}</p></div>
    ${r.status==="upcoming"&&d.isAdmin?`<button type="button" class="btn-activate-term px-3 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold" data-id="${r.id}">เริ่มวาระนี้</button>`:""}
  </div>`).join(""),t=Number(d.cfg.academicYear)||new Date().getFullYear()+543;return`<div class="space-y-4">
    <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"><h2 class="font-bold text-[var(--ink)]">วาระสภานักเรียน</h2><p class="text-xs text-[var(--muted)] mt-1">การเริ่มวาระใหม่จะปิดวาระเดิม เก็บประวัติเดิม และเลื่อนรายชื่อ “ว่าที่สมาชิก” เป็นสมาชิกปัจจุบัน</p><div class="space-y-2 mt-4">${e}</div></div>
    ${d.isAdmin?`<form id="council-term-create-form" class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-3">
      <h3 class="text-sm font-bold text-[var(--ink)]">เพิ่มวาระใหม่</h3>
      <input name="label" required placeholder="เช่น วาระ 2/2569 – 1/2570" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]" />
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2"><input name="academic_year" type="number" required value="${t}" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><select name="start_semester" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm"><option value="1">เริ่ม ภาคเรียน 1</option><option value="2" selected>เริ่ม ภาคเรียน 2</option></select><input name="start_year" type="number" required value="${t}" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><select name="end_semester" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm"><option value="1" selected>สิ้นสุด ภาคเรียน 1</option><option value="2">สิ้นสุด ภาคเรียน 2</option></select><input name="end_year" type="number" required value="${t+1}" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><input name="duty_start_date" type="date" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><input name="duty_end_date" type="date" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /></div>
      <button class="px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">สร้างวาระใหม่</button>
    </form>`:""}
  </div>`}async function jl(e){const t=we(e);de[e]=t?await or(t.id).catch(()=>[]):[],f()}function Rl(){if(!(d.isAdmin||d.isCouncilAdvisor))return"";const e=xe,t=we(e);if(t&&de[e]===null)return jl(e),'<p class="text-sm text-[var(--muted)] text-center py-16">กำลังโหลดผู้สมัคร...</p>';const r=de[e]||[],n=i=>_r(i);return`<div class="space-y-4">
    <div class="flex gap-2">${["M","W"].map(i=>`<button type="button" data-gender="${i}" class="candidate-admin-gender flex-1 py-2.5 rounded-full text-sm font-bold ${i===e?"bg-[var(--primary)] text-white":"border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]"}">นักเรียน${j[i]}</button>`).join("")}</div>
    ${t?`
      <form id="candidate-election-settings" data-id="${t.id}" class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-3">
        <h3 class="text-sm font-bold text-[var(--ink)]">ตั้งค่าการเผยแพร่และรณรงค์</h3>
        <div class="grid sm:grid-cols-3 gap-2"><label class="text-xs text-[var(--muted)]">เริ่มแนะนำผู้สมัคร<input name="campaign_opens_at" type="datetime-local" value="${n(t.campaign_opens_at)}" class="mt-1 w-full border border-[var(--line)] rounded-xl px-2 py-2 text-sm" /></label><label class="text-xs text-[var(--muted)]">เปิดลงคะแนน<input name="opens_at" type="datetime-local" value="${n(t.opens_at)}" class="mt-1 w-full border border-[var(--line)] rounded-xl px-2 py-2 text-sm" /></label><label class="text-xs text-[var(--muted)]">ปิดเลือกตั้ง<input name="closes_at" type="datetime-local" value="${n(t.closes_at)}" class="mt-1 w-full border border-[var(--line)] rounded-xl px-2 py-2 text-sm" /></label></div>
        <div class="flex flex-wrap gap-2"><button type="button" class="candidate-setting-action px-3 py-2 rounded-xl border text-xs font-bold ${t.candidates_published?"border-[var(--bad-soft-line)] text-[var(--bad)]":"border-[var(--primary-45)] text-[var(--primary)]"}" data-field="candidates" data-value="${t.candidates_published?"":"1"}">${t.candidates_published?"ยกเลิกเผยแพร่รายชื่อ":"เผยแพร่รายชื่อผู้สมัคร"}</button><button type="button" class="candidate-setting-action px-3 py-2 rounded-xl border text-xs font-bold ${t.campaign_enabled?"border-[var(--bad-soft-line)] text-[var(--bad)]":"border-[var(--primary-45)] text-[var(--primary)]"}" data-field="campaign" data-value="${t.campaign_enabled?"":"1"}">${t.campaign_enabled?"ปิดหน้ารณรงค์":"เปิดหน้ารณรงค์"}</button><button class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">บันทึกวันเวลา</button></div>
      </form>
      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"><div class="flex items-center justify-between gap-2"><h3 class="text-sm font-bold text-[var(--ink)]">รายชื่อว่าที่ประธาน${j[e]}</h3><button type="button" class="btn-print-candidates px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold" data-gender="${e}">🖨️ พิมพ์</button></div><div class="space-y-2 mt-3">${r.length?r.map(i=>{var o,a,s;return`<form class="candidate-admin-row flex flex-wrap items-center gap-2 border border-[var(--line)] rounded-xl p-2.5" data-id="${i.id}"><div class="min-w-0 flex-1"><p class="text-sm font-bold truncate">${l((o=i.students)==null?void 0:o.full_name)}</p><p class="text-xs text-[var(--muted)]">${l((a=i.students)==null?void 0:a.student_code)} · ${l(((s=i.students)==null?void 0:s.main_room)||"")}</p></div><label class="text-[0.6875rem] text-[var(--muted)]">หมายเลข<input name="ballot" type="number" min="1" required value="${i.ballot_number}" class="block w-20 border border-[var(--line)] rounded-lg px-2 py-1.5 text-sm" /></label><select name="status" class="border border-[var(--line)] rounded-lg px-2 py-1.5 text-sm"><option value="draft" ${i.status==="draft"?"selected":""}>ร่าง</option><option value="published" ${i.status==="published"?"selected":""}>เผยแพร่</option><option value="withdrawn" ${i.status==="withdrawn"?"selected":""}>ถอนตัว</option><option value="elected" ${i.status==="elected"?"selected":""}>ได้รับเลือก</option></select><button class="px-3 py-2 rounded-lg bg-[var(--primary)] text-white text-xs font-bold">บันทึก</button></form>`}).join(""):'<p class="text-xs text-[var(--muted)] text-center py-8">ยังไม่มีผู้สมัคร ให้ตั้งจากผู้ผ่านสัมภาษณ์ในหน้าแต่งตั้งสมาชิก</p>'}</div></div>`:`<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 text-center"><p class="text-sm text-[var(--muted)]">ยังไม่มีรอบเลือกตั้งสำหรับวาระนี้</p><button type="button" id="btn-create-candidate-election" class="mt-3 px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">สร้างรอบเลือกตั้ง${j[e]}</button></div>`}
  </div>`}function Dl(e){const t=yt(),r=de[e]||ne[e]||[],n=r.map((i,o)=>{var a,s,c;return`<tr><td>${o+1}</td><td>${i.ballot_number}</td><td>${l((a=i.students)==null?void 0:a.student_code)}</td><td>${l((s=i.students)==null?void 0:s.full_name)}</td><td>${l(((c=i.students)==null?void 0:c.main_room)||"")}</td><td>${l(i.status||"published")}</td><td></td></tr>`}).join("");Ie(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>รายชื่อผู้สมัครประธานสภานักเรียน</title><style>@page{size:A4;margin:12mm}body{font-family:Tahoma,sans-serif;color:#111}h1,p{text-align:center}table{width:100%;border-collapse:collapse;margin-top:16px}th,td{border:1px solid #444;padding:7px;font-size:12px}th{background:#eee}td:first-child,td:nth-child(2){text-align:center}</style></head><body><h1>บัญชีรายชื่อผู้สมัครประธานสภานักเรียน${j[e]}</h1><p>${l((t==null?void 0:t.term_label)||"")} · จำนวน ${r.length} คน</p><table><thead><tr><th>ลำดับ</th><th>หมายเลข</th><th>รหัส</th><th>ชื่อ–สกุล</th><th>ห้อง</th><th>สถานะ</th><th>หมายเหตุ</th></tr></thead><tbody>${n}</tbody></table></body></html>`)}function Ml(){const e=yt(),t=[...d.members].sort((n,i)=>{var o,a,s,c;return(((o=n.council_positions)==null?void 0:o.gender)||"").localeCompare(((a=i.council_positions)==null?void 0:a.gender)||"")||(((s=n.council_positions)==null?void 0:s.sort_order)||99)-(((c=i.council_positions)==null?void 0:c.sort_order)||99)}),r=t.map((n,i)=>{var o,a,s,c,m;return`<tr><td>${i+1}</td><td>${l(j[(o=n.council_positions)==null?void 0:o.gender]||"")}</td><td>${l((a=n.students)==null?void 0:a.student_code)}</td><td>${l((s=n.students)==null?void 0:s.full_name)}</td><td>${l(((c=n.students)==null?void 0:c.main_room)||"")}</td><td>${l((m=n.council_positions)==null?void 0:m.position_name)}</td><td>${l(n.status==="designate"?"ว่าที่สมาชิก":n.status==="ended"?"หมดวาระ":"ปฏิบัติหน้าที่")}</td><td></td></tr>`}).join("");Ie(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>ทะเบียนสมาชิกสภานักเรียน</title><style>@page{size:A4 landscape;margin:10mm}body{font-family:Tahoma,sans-serif;color:#111}h1,p{text-align:center}table{width:100%;border-collapse:collapse;margin-top:14px}th,td{border:1px solid #444;padding:6px;font-size:11px}th{background:#eee}</style></head><body><h1>ทะเบียนสมาชิกสภานักเรียน</h1><p>${l((e==null?void 0:e.term_label)||"")} · จำนวน ${t.length} คน</p><table><thead><tr><th>ลำดับ</th><th>ฝ่าย</th><th>รหัส</th><th>ชื่อ–สกุล</th><th>ห้อง</th><th>ตำแหน่ง</th><th>สถานะ</th><th>หมายเหตุ/ลงชื่อ</th></tr></thead><tbody>${r}</tbody></table></body></html>`)}function Bl(){return`<div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"><h2 class="font-bold text-[var(--ink)]">ศูนย์พิมพ์ใบรายชื่อ</h2><p class="text-xs text-[var(--muted)] mt-1">ใช้เป็นทะเบียน บันทึกการประชุม เช็กชื่อ หรือแนบเอกสารอื่น</p><div class="grid sm:grid-cols-3 gap-3 mt-5"><button type="button" id="btn-print-members" class="rounded-xl border border-[var(--primary-45)] p-4 text-left"><span class="text-2xl">🏛️</span><p class="text-sm font-bold mt-2">สมาชิกสภาทั้งหมด</p><p class="text-xs text-[var(--muted)]">พร้อมช่องหมายเหตุ/ลงชื่อ</p></button>${["M","W"].map(e=>`<button type="button" class="btn-print-candidates rounded-xl border border-[var(--primary-45)] p-4 text-left" data-gender="${e}"><span class="text-2xl">🗳️</span><p class="text-sm font-bold mt-2">ผู้สมัครประธาน${j[e]}</p><p class="text-xs text-[var(--muted)]">หมายเลข ชื่อ ห้อง และสถานะ</p></button>`).join("")}</div></div>`}const Pl={overview:Aa,regulation:()=>_o(d,f),forms:()=>ur({kind:"forms",esc:l,canOpenDocs:d.isAdmin||d.role==="teacher"||d.isChair}),yla:xi,activityDocs:()=>ur({kind:"activityDocs",esc:l}),endorse:Li,apps:Ei,interview:Ai,appoint:Si,news:zi,activities:Mi,eval:Ui,docs:ol,candidates:li,roster:Ci,result:Ia,settings:xl,chairteam:bl,myduty:gl,mysummary:kl,assignments:Al,peerEndorse:Ni,perms:Ll,myCouncilProfile:Nl,dashboard:wi,termAdmin:ql,candidateAdmin:Rl,printCenter:Bl},Ol={apply:{new:Ho,mine:ni},election:{status:Ia}};function f(){if(dt){Fl();return}Nr(!0);const e=Bo();e.some(r=>r.id===Re)||Be("overview"),Po(e);const t=Pl[Re]||Aa;Er.innerHTML=`<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${Mo()}${t()}</div>`,Ka()}function Fl(){var r;Nr(!1);const e=jo[dt];e.subtabs.some(n=>n.id===fe)||(fe=e.subtabs[0].id),document.getElementById("council-view-title").textContent=e.title;const t=((r=Ol[dt])==null?void 0:r[fe])??(()=>"");Er.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${e.title}</h2>
      </div>
      ${e.subtabs.length>1?`
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${e.subtabs.map(n=>`
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${n.id===fe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}"
            data-subtab="${n.id}">${l(n.label)}</button>`).join("")}
      </div>`:""}
      <div>${t()}</div>
    </div>`,document.getElementById("btn-flow-close").addEventListener("click",()=>{dt=null,fe=null,It(),f()}),document.querySelectorAll(".flow-subtab-btn").forEach(n=>{n.addEventListener("click",()=>{fe=n.dataset.subtab,f()})}),Ka()}function Ka(){var r,n,i,o,a,s,c,m,p,u,x,b,v,y,_,S,q,A,I,E,L,N,B,V;(r=document.getElementById("council-term-switcher"))==null||r.addEventListener("change",h=>Ur(h.target.value)),(n=document.getElementById("council-term-create-form"))==null||n.addEventListener("submit",async h=>{h.preventDefault();const $=h.target,C=$.querySelector('button[type="submit"]');C.disabled=!0;try{await gn({label:$.label.value.trim(),academicYear:$.academic_year.value,startSemester:$.start_semester.value,startYear:$.start_year.value,endSemester:$.end_semester.value,endYear:$.end_year.value,dutyStartDate:$.duty_start_date.value,dutyEndDate:$.duty_end_date.value}),le=await sr(),g("สร้างวาระใหม่แล้ว ✅","success"),f()}catch(D){g("สร้างวาระไม่สำเร็จ: "+k(D),"error"),C.disabled=!1}}),document.querySelectorAll(".btn-activate-term").forEach(h=>h.addEventListener("click",async()=>{try{const $=await yn(Number(h.dataset.id)),C=($==null?void 0:$.active_members_to_end)??($==null?void 0:$.ended_members)??0,D=($==null?void 0:$.designates_to_activate)??($==null?void 0:$.activated_members)??0;if(!confirm(`ยืนยันเริ่มวาระใหม่?

สมาชิกวาระเดิมที่จะหมดวาระ: ${C} คน
ว่าที่สมาชิกที่จะเริ่มปฏิบัติหน้าที่: ${D} คน

ข้อมูลวาระเดิมจะยังคงอยู่ในประวัติ`))return;await hn(Number(h.dataset.id)),le=await sr(),R=null,await Ur(h.dataset.id),g("เริ่มวาระใหม่แล้ว ✅","success")}catch($){g("เริ่มวาระไม่สำเร็จ: "+k($),"error")}})),document.querySelectorAll(".candidate-admin-gender").forEach(h=>h.addEventListener("click",()=>{xe=h.dataset.gender,f()})),(i=document.getElementById("btn-create-candidate-election"))==null||i.addEventListener("click",async()=>{try{await kr({gender:xe,academicYear:Y,termId:R}),d.elections=await Me(null,R),de[xe]=null,f()}catch(h){g("สร้างรอบเลือกตั้งไม่สำเร็จ: "+k(h),"error")}});const e=document.getElementById("candidate-election-settings"),t=async h=>{const $=e;if(!$)return;const C=we(xe);await En({electionConfigId:Number($.dataset.id),opensAt:$.opens_at.value?new Date($.opens_at.value).toISOString():null,closesAt:$.closes_at.value?new Date($.closes_at.value).toISOString():null,campaignOpensAt:$.campaign_opens_at.value?new Date($.campaign_opens_at.value).toISOString():null,campaignEnabled:(h==null?void 0:h.campaignEnabled)??C.campaign_enabled,candidatesPublished:(h==null?void 0:h.candidatesPublished)??C.candidates_published}),d.elections=await Me(null,R),g("บันทึกการตั้งค่าเลือกตั้งแล้ว ✅","success"),f()};e==null||e.addEventListener("submit",async h=>{h.preventDefault();try{await t()}catch($){g("บันทึกไม่สำเร็จ: "+k($),"error")}}),document.querySelectorAll(".candidate-setting-action").forEach(h=>h.addEventListener("click",async()=>{try{await t(h.dataset.field==="campaign"?{campaignEnabled:h.dataset.value==="1"}:{candidatesPublished:h.dataset.value==="1"})}catch($){g("บันทึกไม่สำเร็จ: "+k($),"error")}})),document.querySelectorAll(".candidate-admin-row").forEach(h=>h.addEventListener("submit",async $=>{$.preventDefault();const C=$.target;try{await _n({candidateId:Number(C.dataset.id),ballotNumber:C.ballot.value,status:C.status.value}),de[xe]=await or(we(xe).id),delete ne[xe],g("บันทึกผู้สมัครแล้ว ✅","success"),f()}catch(D){g("บันทึกไม่สำเร็จ: "+k(D),"error")}})),document.querySelectorAll(".btn-print-candidates").forEach(h=>h.addEventListener("click",async()=>{const $=h.dataset.gender,C=we($);C&&de[$]===null&&(de[$]=await or(C.id).catch(()=>[])),Dl($)})),(o=document.getElementById("btn-print-members"))==null||o.addEventListener("click",Ml),$o(d,f),Io({esc:l,onKindChange:h=>{Be(h==="forms"||h==="yla"||h==="activityDocs"?h:"forms"),f()}}),fi(),document.querySelectorAll(".flow-entry-btn").forEach(h=>{h.addEventListener("click",()=>{dt=h.dataset.flow,fe=null,f()})}),document.querySelectorAll(".goto-view").forEach(h=>{h.addEventListener("click",()=>{Be(h.dataset.view),f()})}),document.querySelectorAll(".roster-gender-tab-btn").forEach(h=>{h.addEventListener("click",()=>{pe=h.dataset.gender,f()})}),document.querySelectorAll(".btn-view-my-app-detail").forEach(h=>{h.addEventListener("click",()=>{ct=Number(h.dataset.id),f()})}),(a=document.getElementById("btn-my-app-detail-close"))==null||a.addEventListener("click",()=>{ct=null,f()}),(s=document.getElementById("my-app-detail-backdrop"))==null||s.addEventListener("click",h=>{h.target.id==="my-app-detail-backdrop"&&(ct=null,f())}),(c=document.getElementById("btn-pick-my-app-endorser"))==null||c.addEventListener("click",h=>{_i(Number(h.target.dataset.appId),h.target.dataset.gender)}),(m=document.getElementById("btn-add-council-member"))==null||m.addEventListener("click",()=>{Kr({mode:"add",gender:pe})}),document.querySelectorAll(".btn-edit-council-member").forEach(h=>{h.addEventListener("click",()=>{var C;const $=d.members.find(D=>D.id===Number(h.dataset.id));$&&Kr({mode:"edit",gender:(C=$.council_positions)==null?void 0:C.gender,member:$})})}),document.querySelectorAll(".btn-remove-council-member").forEach(h=>{h.addEventListener("click",async()=>{if(confirm("ลบสมาชิกสภาคนนี้ออกจากทำเนียบ? (จะเก็บประวัติไว้ ไม่ได้ลบข้อมูลทิ้งถาวร)"))try{await $n(Number(h.dataset.id)),g("ลบแล้ว ✅","success"),d.members=await Ye(null,R).catch(()=>d.members),f()}catch($){g("ลบไม่สำเร็จ: "+k($),"error")}})}),document.querySelectorAll(".btn-toggle-can-create").forEach(h=>{h.addEventListener("click",async()=>{const $=Number(h.dataset.id),C=h.dataset.value==="1";h.disabled=!0;try{await wn($,C);const D=d.members.find(W=>W.id===$);D&&(D.can_create_activities=C);const O=d.membership.find(W=>W.id===$);O&&(O.can_create_activities=C),g(C?"ให้สิทธิ์สร้างกิจกรรมแล้ว ✅":"ถอนสิทธิ์แล้ว ✅","success"),f()}catch(D){g("บันทึกไม่สำเร็จ: "+k(D),"error"),h.disabled=!1}})}),document.querySelectorAll(".btn-peer-endorse").forEach(h=>{h.addEventListener("click",()=>qi(h.dataset.id))}),(p=document.getElementById("btn-open-apply"))==null||p.addEventListener("click",()=>{if(!Mt(d.student)){g(pr(d.student),"warning");return}Dt=!0;const h=To();K=h&&h.step>1?h:null,K||(H=lt(it())),f()}),(u=document.getElementById("btn-cancel-apply"))==null||u.addEventListener("click",()=>{It(),K=null,f()}),(x=document.getElementById("btn-apply-draft-resume"))==null||x.addEventListener("click",()=>{M={...M,...K.data},U=K.step;const h=K.certTitles||[];H=h.length?h.map($=>({file:null,title:$||"",previewUrl:null,isPdf:!1})):lt(it()),K=null,f()}),(b=document.getElementById("btn-apply-draft-discard"))==null||b.addEventListener("click",()=>{zr(),It(),K=null,Dt=!0,f()}),(v=document.getElementById("btn-apply-back"))==null||v.addEventListener("click",()=>{U=Math.max(1,U-1),oe(),f()}),(y=document.getElementById("apply-step1-form"))==null||y.addEventListener("submit",h=>{h.preventDefault();const $=h.target.positionId.value;if(!$){g("กรุณาเลือกตำแหน่ง","warning");return}M.positionId=$,U=2,oe(),f()}),(_=document.getElementById("apply-step2-form"))==null||_.addEventListener("submit",h=>{h.preventDefault();const $=h.target,C=$.gpaGeneral.value,D=$.gpaReligious.value,O=$.motivation.value.trim(),W=Number(C),F=Number(D);if(!C||!D||W<0||W>4||F<0||F>4){g("กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)","warning");return}const J=Number(d.cfg.council_min_gpa||2.5),se=Number(d.cfg.council_min_gpa_religious||2.5);if(W<J||F<se){g(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${J}, ศาสนา ≥ ${se})`,"warning");return}if(O.length<10){g("กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร","warning");return}M.gpaGeneral=C,M.gpaReligious=D,M.motivation=O,U=3,oe(),f()}),(S=document.getElementById("apply-photo"))==null||S.addEventListener("change",h=>{var C;const $=((C=h.target.files)==null?void 0:C[0])??null;Ne=$,ve&&URL.revokeObjectURL(ve),ve=$?URL.createObjectURL($):null,f()}),(q=document.getElementById("btn-apply-step3-next"))==null||q.addEventListener("click",()=>{if(!Ne){g("กรุณาแนบรูปถ่าย","warning");return}U=4,oe(),f()}),(A=document.getElementById("apply-step4-form"))==null||A.addEventListener("submit",h=>{h.preventDefault();const $=h.target.videoUrl.value.trim();if(!/^https?:\/\//.test($)){g("กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)","warning");return}M.videoUrl=$,U=5,oe(),f()}),document.querySelectorAll(".cert-title-input").forEach(h=>{h.addEventListener("input",()=>{H[+h.dataset.idx].title=h.value,oe()})}),document.querySelectorAll(".cert-file-input").forEach(h=>{h.addEventListener("change",$=>{var W;const C=+h.dataset.idx,D=((W=$.target.files)==null?void 0:W[0])??null,O=H[C];O.previewUrl&&URL.revokeObjectURL(O.previewUrl),O.file=D,O.isPdf=(D==null?void 0:D.type)==="application/pdf",O.previewUrl=D&&!O.isPdf?URL.createObjectURL(D):null,f()})}),(I=document.getElementById("btn-add-cert"))==null||I.addEventListener("click",()=>{H.push(...lt(1)),oe(),f()}),document.querySelectorAll(".btn-remove-cert").forEach(h=>{h.addEventListener("click",()=>{const $=+h.dataset.idx,C=H[$];C.previewUrl&&URL.revokeObjectURL(C.previewUrl),H.splice($,1),oe(),f()})}),(E=document.getElementById("btn-apply-step5-next"))==null||E.addEventListener("click",()=>{const h=H.filter(C=>C.file&&C.title.trim()).length,$=it();if(h<$){g(`กรุณาแนบเกียรติบัตร/รางวัลอย่างน้อย ${$} รายการ (พร้อมชื่อรางวัล)`,"warning");return}qr()?U=6:He=!0,oe(),f()}),document.querySelectorAll(".btn-pick-peer-endorser").forEach(h=>{h.addEventListener("click",()=>{M.peerEndorserId=h.dataset.id,oe(),f()})}),(L=document.getElementById("btn-apply-step6-next"))==null||L.addEventListener("click",()=>{if(!M.peerEndorserId){g("กรุณาเลือกพี่สภาที่ต้องการให้รับรอง","warning");return}He=!0,oe(),f()}),(N=document.getElementById("btn-apply-edit"))==null||N.addEventListener("click",()=>{He=!1,f()}),(B=document.getElementById("apply-confirm-backdrop"))==null||B.addEventListener("click",h=>{h.target.id==="apply-confirm-backdrop"&&(He=!1,f())}),(V=document.getElementById("btn-apply-confirm-submit"))==null||V.addEventListener("click",async()=>{if(!Mt(d.student)){g(pr(d.student),"error");return}const h=document.getElementById("btn-apply-confirm-submit");h.disabled=!0,h.textContent="กำลังส่ง...";try{let $=null;Ne&&($=await nn(d.student.id,Ne));const C=H.filter(O=>O.file&&O.title.trim()),D=await Promise.all(C.map(async O=>({title:O.title.trim(),url:await sn(d.student.id,O.file)})));await kn({termId:R,studentId:d.student.id,positionId:Number(M.positionId),motivation:M.motivation,photoUrl:$,gpaGeneral:Number(M.gpaGeneral),gpaReligious:Number(M.gpaReligious),introVideoUrl:M.videoUrl,certificates:D,requestedPeerEndorserId:M.peerEndorserId?Number(M.peerEndorserId):null}),g("ส่งใบสมัครสำเร็จ ✅","success"),zr(),It(),await ka(),fe="mine",f()}catch($){g("ส่งใบสมัครไม่สำเร็จ: "+k($),"error"),h.disabled=!1,h.textContent="✅ ยืนยันการสมัคร"}}),document.querySelectorAll(".endorse-phrase-chip").forEach(h=>{h.addEventListener("click",()=>{const $=document.querySelector(`.endorse-comment[data-id="${h.dataset.target}"]`);if(!$)return;const C=$.value.trim();$.value=C?C+" "+h.dataset.phrase:h.dataset.phrase,$.focus()})}),document.querySelectorAll(".btn-endorse-confirm").forEach(h=>{h.addEventListener("click",()=>Xr(h.dataset.id,"confirm"))}),document.querySelectorAll(".btn-endorse-decline").forEach(h=>{h.addEventListener("click",()=>Xr(h.dataset.id,"decline"))}),Xl(),Yl(),Zl(),Ql(),Kl(),Jl(),Hl(),Wl(),Ul(),Gl(),Vl(),zl()}function Yl(){var e,t,r,n;document.querySelectorAll(".interview-gender-tab-btn").forEach(i=>{i.addEventListener("click",()=>{Ge=i.dataset.gender,f()})}),document.querySelectorAll(".interview-filter-btn").forEach(i=>{i.addEventListener("click",()=>{Ve=i.dataset.filter,f()})}),(e=document.getElementById("interview-search"))==null||e.addEventListener("change",i=>{Bt=i.target.value,f()}),(t=document.querySelector(".interview-clear-search"))==null||t.addEventListener("click",()=>{Bt="",f()}),document.querySelectorAll(".appointment-gender-tab-btn").forEach(i=>{i.addEventListener("click",()=>{Ue=i.dataset.gender,f()})}),document.querySelectorAll(".appointment-filter-btn").forEach(i=>{i.addEventListener("click",()=>{We=i.dataset.filter,f()})}),(r=document.getElementById("appointment-search"))==null||r.addEventListener("change",i=>{Pt=i.target.value,f()}),(n=document.querySelector(".appointment-clear-search"))==null||n.addEventListener("click",()=>{Pt="",f()})}function zl(){var e;document.querySelectorAll(".perms-add-form").forEach(t=>{t.addEventListener("submit",async r=>{var p;r.preventDefault();const n=r.target,i=n.dataset.position,a=n.teacherText.value.trim().match(/· รหัส (\d+)$/);if(!a){g("กรุณาเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=Number(a[1]);if((p={council_advisor:Z,student_affairs_head:Ze,school_director:et}[i])!=null&&p.some(u=>u.id===s)){g("ครูคนนี้อยู่ในรายชื่อนี้แล้ว","warning");return}const m=n.querySelector('button[type="submit"]');m.disabled=!0,m.textContent="กำลังบันทึก...";try{await ks(s,i),g("เพิ่มแล้ว ✅","success"),Z=null,Ze=null,et=null,f()}catch(u){g("บันทึกไม่สำเร็จ: "+k(u),"error"),m.disabled=!1,m.textContent="เพิ่ม"}})}),document.querySelectorAll(".btn-remove-teacher-position").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ถอดถอนออกจากรายชื่อนี้?"))try{await Es(Number(t.dataset.id),t.dataset.position),Z=null,Ze=null,et=null,f()}catch(r){g("ถอดถอนไม่สำเร็จ: "+k(r),"error")}})}),document.querySelectorAll(".btn-toggle-advisor-depts").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);$r=$r===r?null:r,f()})}),document.querySelectorAll(".advisor-dept-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.teacherId),i=d.positions.filter(a=>{var s;return(s=t[`pos_${a.id}`])==null?void 0:s.checked}).map(a=>a.id),o=t.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังบันทึก...";try{await As(n,i),Ht[n]=i,g("บันทึกฝ่ายที่ดูแลแล้ว ✅","success"),f()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error"),o.disabled=!1,o.textContent="บันทึกฝ่าย"}})}),document.querySelectorAll(".btn-edit-council-profile").forEach(t=>{t.addEventListener("click",()=>{ia({id:Number(t.dataset.id),full_name:t.dataset.name,image_url:t.dataset.image||null,signature_url:t.dataset.signature||null})})}),(e=document.getElementById("btn-edit-my-council-profile"))==null||e.addEventListener("click",()=>{d.teacher&&ia(d.teacher)})}function Gl(){var e,t;document.querySelectorAll(".myduty-subtab-btn").forEach(r=>{r.addEventListener("click",()=>{jt=r.dataset.tab,f()})}),(e=document.getElementById("routine-add-form"))==null||e.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,i=n.task.value.trim();if(!i){g("กรุณากรอกงานที่ต้องทำ","warning");return}const o=d.membership[0];try{await gs({memberId:o.id,dayOfWeek:n.dayOfWeek.value===""?null:Number(n.dayOfWeek.value),timeRange:n.timeRange.value.trim(),task:i,location:n.location.value.trim()}),ie=null,f()}catch(a){g("เพิ่มไม่สำเร็จ: "+k(a),"error")}}),document.querySelectorAll(".btn-remove-routine").forEach(r=>{r.addEventListener("click",async()=>{if(confirm("ลบรูทีนนี้?"))try{await ys(Number(r.dataset.id)),ie=null,f()}catch(n){g("ลบไม่สำเร็จ: "+k(n),"error")}})}),document.querySelectorAll(".routine-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),i=r.checked;r.disabled=!0;try{await hs({routineId:n,weekStart:Qa(),done:i}),i?at.add(n):at.delete(n),f()}catch(o){g("บันทึกไม่สำเร็จ: "+k(o),"error"),r.checked=!i,r.disabled=!1}})}),document.querySelectorAll(".assignment-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),i=r.checked?"done":"open";r.disabled=!0;try{await _s(n,i);const o=je.find(a=>a.id===n);o&&(o.status=i),f()}catch(o){g("บันทึกไม่สำเร็จ: "+k(o),"error"),r.checked=!r.checked,r.disabled=!1}})}),(t=document.getElementById("btn-show-my-council-qr"))==null||t.addEventListener("click",()=>{d.student&&_l(d.student)})}function Vl(){var e;(e=document.getElementById("assignment-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.memberId.value),i=r.task.value.trim();if(!n||!i){g("กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน","warning");return}const o=r.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังบันทึก...";try{await $s({memberId:n,task:i,dueDate:r.dueDate.value||null,assignedByStudentId:d.student.id}),g("มอบหมายงานแล้ว ✅","success");const a=Ee(d.student.gender);delete gt[a],f()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error"),o.disabled=!1,o.textContent="มอบหมายงาน"}}),document.querySelectorAll(".btn-delete-assignment").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบงานที่มอบหมายนี้?"))try{await ws(Number(t.dataset.id));const r=Ee(d.student.gender);delete gt[r],f()}catch(r){g("ลบไม่สำเร็จ: "+k(r),"error")}})})}function Ul(){var e;(e=document.getElementById("nominate-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.positionId.value),i=Number(r.applicationId.value);if(!n||!i){g("กรุณาเลือกตำแหน่งและผู้สมัคร","warning");return}const o=r.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังเสนอ...";try{await xs({applicationId:i,positionId:n,proposedByStudentId:d.student.id}),g("เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅","success");const a=Ee(d.student.gender);delete De[a],delete bt[a],f()}catch(a){g("เสนอไม่สำเร็จ: "+k(a),"error"),o.disabled=!1,o.textContent="เสนอต่อครูที่ปรึกษาสภา"}}),document.querySelectorAll(".btn-decide-nomination").forEach(t=>{t.addEventListener("click",async()=>{var a,s;const r=Number(t.dataset.id),n=t.dataset.approve==="true",i=((a=document.querySelector(`.nom-comment[data-id="${r}"]`))==null?void 0:a.value.trim())??"";if(!n&&!i){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}const o=t.closest("[data-nom-card]");o==null||o.querySelectorAll("button").forEach(c=>{c.disabled=!0});try{await fs({nominationId:r,approve:n,teacherId:((s=d.teacher)==null?void 0:s.id)??null,comment:i}),g(n?"อนุมัติแล้ว ✅":"ไม่อนุมัติแล้ว","success"),delete ft.M,delete ft.W,delete bt.M,delete bt.W,delete De.M,delete De.W,d.members=await Ye(null,R).catch(()=>d.members),f()}catch(c){g("บันทึกไม่สำเร็จ: "+k(c),"error"),o==null||o.querySelectorAll("button").forEach(m=>{m.disabled=!1})}})})}function Wl(){var e,t,r,n,i,o;document.querySelectorAll(".settings-tab-btn").forEach(a=>{a.addEventListener("click",()=>{ot=a.dataset.tab,f()})}),(e=document.getElementById("settings-general-form"))==null||e.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{const m={council_name:s.council_name.value.trim(),council_logo_url:s.council_logo_url.value.trim(),council_theme_side_m:s.council_theme_side_m.value,council_theme_side_w:s.council_theme_side_w.value,council_term_start_semester:s.council_term_start_semester.value.trim(),council_term_start_year:s.council_term_start_year.value.trim(),council_term_end_semester:s.council_term_end_semester.value.trim(),council_term_end_year:s.council_term_end_year.value.trim(),council_min_gpa:s.council_min_gpa.value,council_min_gpa_religious:s.council_min_gpa_religious.value,council_eligible_grade_levels:s.council_eligible_grade_levels.value.trim(),council_min_certificates:s.council_min_certificates.value,council_min_attendance_pct:s.council_min_attendance_pct.value,council_require_teacher_endorsement:s.council_require_teacher_endorsement.checked?"true":"false",council_require_peer_endorsement:s.council_require_peer_endorsement.checked?"true":"false",council_apply_opens_at:s.council_apply_opens_at.value?new Date(s.council_apply_opens_at.value).toISOString():"",council_apply_closes_at:s.council_apply_closes_at.value?new Date(s.council_apply_closes_at.value).toISOString():"",council_featured_phase:s.council_featured_phase.value,council_visible_to_all:s.council_visible_to_all.checked?"true":"false",council_test_student_codes:s.council_test_student_codes.value.trim(),council_election_thank_you_message:s.council_election_thank_you_message.value.trim(),council_signer_advisor_name:s.council_signer_advisor_name.value.trim(),council_signer_director_name:s.council_signer_director_name.value.trim()};await $t(m),d.cfg={...d.cfg,...m},Ea(d.cfg),g("บันทึกการตั้งค่าแล้ว ✅","success"),f()}catch(m){g("บันทึกไม่สำเร็จ: "+k(m),"error"),c.disabled=!1,c.textContent="💾 บันทึกการตั้งค่า"}}),document.querySelectorAll(".position-row-form").forEach(a=>{a.addEventListener("submit",async s=>{s.preventDefault();const c=Number(a.dataset.id),m=a.position_name.value.trim(),p=Number(a.seats_count.value);if(!m||!p){g("กรอกชื่อและจำนวนที่นั่งให้ครบ","warning");return}try{await ds(c,{position_name:m,seats_count:p}),d.positions=await St(),g("บันทึกแล้ว ✅","success"),f()}catch(u){g("บันทึกไม่สำเร็จ: "+k(u),"error")}})}),document.querySelectorAll(".btn-delete-position").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)"))try{await cs(Number(a.dataset.id)),d.positions=await St(),f()}catch(s){g("ลบไม่สำเร็จ: "+k(s),"error")}})}),document.querySelectorAll(".position-add-form").forEach(a=>{a.addEventListener("submit",async s=>{s.preventDefault();const c=a.dataset.gender,m=a.position_name.value.trim(),p=Number(a.seats_count.value)||1;if(!m){g("กรอกชื่อตำแหน่ง","warning");return}try{await us({gender:c,positionName:m,seatsCount:p,isElected:!1,sortOrder:999}),d.positions=await St(),g("เพิ่มตำแหน่งแล้ว ✅","success"),f()}catch(u){g("เพิ่มไม่สำเร็จ: "+k(u),"error")}})}),(t=document.getElementById("interview-criterion-form"))==null||t.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.name.value.trim(),m=Number(s.weight.value);if(!c||!m){g("กรอกชื่อหัวข้อและคะแนนให้ครบ","warning");return}try{await ps({name:c,weight:m}),ae=null,f()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error")}}),document.querySelectorAll(".btn-remove-interview-criterion").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?"))try{await ms(Number(a.dataset.id)),ae=null,f()}catch(s){g("ลบไม่สำเร็จ: "+k(s),"error")}})}),(r=document.getElementById("settings-video-form"))==null||r.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.council_video_max_minutes.value.trim(),m=s.council_video_brief.value.split(`
`).map(p=>p.trim()).filter(Boolean);try{const p={council_video_max_minutes:c,council_video_brief:JSON.stringify(m)};await $t(p),d.cfg={...d.cfg,...p},g("บันทึกแล้ว ✅","success"),f()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error")}}),(n=document.getElementById("settings-doc-options-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=m=>m.split(`
`).map(p=>p.trim()).filter(Boolean);try{const m={council_doc_plan_areas:JSON.stringify(c(s.council_doc_plan_areas.value)),council_doc_project_types:JSON.stringify(c(s.council_doc_project_types.value)),council_doc_school_strategies:JSON.stringify(c(s.council_doc_school_strategies.value)),council_doc_education_standards:JSON.stringify(c(s.council_doc_education_standards.value))};await $t(m),d.cfg={...d.cfg,...m},g("บันทึกแล้ว ✅","success"),f()}catch(m){g("บันทึกไม่สำเร็จ: "+k(m),"error")}}),(i=document.getElementById("phrase-form"))==null||i.addEventListener("submit",async a=>{a.preventDefault();const c=a.target.phrase.value.trim();if(c)try{await bs({phrase:c,sortOrder:(ye==null?void 0:ye.length)??0}),ye=null,f()}catch(m){g("บันทึกไม่สำเร็จ: "+k(m),"error")}}),document.querySelectorAll(".btn-remove-phrase").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบข้อความนี้?"))try{await vs(Number(a.dataset.id)),ye=null,f()}catch(s){g("ลบไม่สำเร็จ: "+k(s),"error")}})}),document.querySelectorAll(".cert-template-type-radio").forEach(a=>{a.addEventListener("change",()=>{var c,m,p;const s=((c=document.querySelector('input[name="template_type"]:checked'))==null?void 0:c.value)==="custom";(m=document.getElementById("cert-template-preset-select"))==null||m.classList.toggle("hidden",s),(p=document.getElementById("cert-template-file-input"))==null||p.classList.toggle("hidden",!s)})}),(o=document.getElementById("cert-template-form"))==null||o.addEventListener("submit",async a=>{var u,x;a.preventDefault();const s=a.target,c=s.name.value.trim();if(!c)return;const m=s.template_type.value==="custom",p=s.querySelector('button[type="submit"]');p.disabled=!0,p.textContent="กำลังบันทึก...";try{let b=null;if(m){const _=(u=s.background_image.files)==null?void 0:u[0];if(!_){g("กรุณาอัปโหลดรูปพื้นหลังเทมเพลต","warning"),p.disabled=!1,p.textContent="เพิ่มเทมเพลต";return}b=await on(_)}const v=m?null:s.preset_key.value,y=ao(m?"custom":v);m&&(y.background={type:"image",imageUrl:b}),await no({name:c,type:m?"custom":"preset",presetKey:v,backgroundImageUrl:b,layout:y,createdByTeacherId:((x=d.teacher)==null?void 0:x.id)??null}),g("เพิ่มเทมเพลตแล้ว ✅","success"),re=null,f()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),p.disabled=!1,p.textContent="เพิ่มเทมเพลต"}}),document.querySelectorAll(".btn-remove-cert-template").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบเทมเพลตนี้?"))try{await so(Number(a.dataset.id)),re=null,f()}catch(s){g("ลบไม่สำเร็จ: "+k(s),"error")}})}),document.querySelectorAll(".btn-design-cert-template").forEach(a=>{a.addEventListener("click",()=>{const s=re==null?void 0:re.find(c=>c.id===Number(a.dataset.id));s&&co({template:s,previewVariables:{reason:"เข้าร่วมกิจกรรมตัวอย่างจนสำเร็จ"},placeholderTokens:[{token:"{{reason}}",label:"เหตุผล/รายละเอียด"}],onSave:async(c,m)=>{await oo({id:s.id,layout:c,backgroundImageUrl:m}),g("บันทึกดีไซน์แล้ว ✅","success"),re=null,f()}})})}),document.querySelectorAll(".module-toggle").forEach(a=>{a.addEventListener("change",async()=>{const s=Lr();s[a.dataset.key]=a.checked;try{await $t({council_modules:JSON.stringify(s)}),d.cfg={...d.cfg,council_modules:JSON.stringify(s)},g(a.checked?"เปิดใช้งานแล้ว":"ปิดใช้งานแล้ว","success"),f()}catch(c){g("บันทึกไม่สำเร็จ: "+k(c),"error"),a.checked=!a.checked}})})}function Hl(){var e,t,r,n,i,o;document.querySelectorAll(".btn-new-doc").forEach(a=>{a.addEventListener("click",()=>{Ga=a.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",me="new",f()})}),(e=document.getElementById("btn-doc-form-back"))==null||e.addEventListener("click",()=>{me=null,f()}),(t=document.getElementById("btn-doc-form-cancel"))==null||t.addEventListener("click",()=>{me=null,f()}),document.querySelectorAll(".btn-edit-doc").forEach(a=>{a.addEventListener("click",()=>{me=Number(a.dataset.id),f()})}),(r=document.getElementById("btn-doc-ai-import-open"))==null||r.addEventListener("click",()=>rl()),document.querySelectorAll(".doc-responsible-chip").forEach(a=>{a.addEventListener("click",()=>{const s=document.querySelector('textarea[name="responsiblePersons"]');if(!s)return;const c=s.value.split(`
`).map(m=>m.trim()).filter(Boolean);c.includes(a.dataset.name)||c.push(a.dataset.name),s.value=c.join(`
`)})}),(n=document.getElementById("doc-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.title.value.trim();if(!c){g("กรุณากรอกชื่อโครงการ","warning");return}const m=s.dataset.origin,p=s.positionId.value?Number(s.positionId.value):null;if(m==="council"&&!p){g("กรุณาเลือกฝ่ายที่รับผิดชอบ (ใช้ส่งให้ครูที่ปรึกษาประจำฝ่ายตรวจ)","warning");return}const u={title:c,planArea:s.planArea.value.trim(),projectType:s.projectType.value.trim(),schoolStrategy:s.schoolStrategy.value.trim(),educationStandard:s.educationStandard.value.trim(),responsiblePersons:Te(s.responsiblePersons.value),positionId:p,rationale:s.rationale.value.trim(),objectives:Te(s.objectives.value),goalsQuantitative:Te(s.goalsQuantitative.value),goalsQualitative:Te(s.goalsQualitative.value),workSteps:kt(s.workSteps.value,4),durationText:s.durationText.value.trim(),locationText:s.locationText.value.trim(),budgetItems:kt(s.budgetItems.value,2),stakeholders:kt(s.stakeholders.value,2),evaluationItems:kt(s.evaluationItems.value,4),expectedResults:Te(s.expectedResults.value)},x=s.querySelector('button[type="submit"]');x.disabled=!0,x.textContent="กำลังบันทึก...";try{me==="new"?await rs({...u,formKey:s.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",formVersion:1,origin:m,academicYear:Y,termId:R,createdByStudentId:m==="council"&&d.student?d.student.id:null,createdByTeacherId:m==="teacher"&&d.teacher?d.teacher.id:null}):await as(me,u),g("บันทึกร่างแล้ว ✅","success"),X=null,me=null,f()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),x.disabled=!1,x.textContent="💾 บันทึกร่าง"}}),document.querySelectorAll(".btn-submit-doc").forEach(a=>{a.addEventListener("click",async()=>{a.disabled=!0;try{await ns(Number(a.dataset.id)),X=null,f()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-new-doc-revision").forEach(a=>{a.addEventListener("click",async()=>{var s,c;a.disabled=!0;try{await ss(Number(a.dataset.id),{createdByStudentId:((s=d.student)==null?void 0:s.id)??null,createdByTeacherId:((c=d.teacher)==null?void 0:c.id)??null}),g("สร้างฉบับแก้ไขแล้ว ✅","success"),X=null,f()}catch(m){g("สร้างฉบับแก้ไขไม่สำเร็จ: "+k(m),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-approve-doc, .btn-reject-doc").forEach(a=>{a.addEventListener("click",async()=>{var u,x,b;const s=a.classList.contains("btn-approve-doc"),c=Number(a.dataset.id),m=X.find(v=>v.id===c);if(!m)return;const p=prompt(s?"ความเห็นประกอบ (ถ้ามี)":"เหตุผลที่ไม่อนุมัติ (จำเป็นต้องระบุ)")??"";if(!s&&!p.trim()){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}a.disabled=!0;try{const v=((u=d.teacher)==null?void 0:u.id)??null;m.status==="pending_advisor"?await os({id:c,approve:s,teacherId:v,comment:p.trim()}):m.status==="pending_dept_head"?await is({id:c,approve:s,teacherId:v,comment:p.trim(),signatureUrl:((x=d.teacher)==null?void 0:x.signature_url)??null}):m.status==="pending_director"&&await ls({id:c,approve:s,teacherId:v,comment:p.trim(),signatureUrl:((b=d.teacher)==null?void 0:b.signature_url)??null}),g(s?"อนุมัติแล้ว ✅":"ตีกลับให้แก้ไขแล้ว","success"),X=null,f()}catch(v){g("บันทึกไม่สำเร็จ: "+k(v),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-print-doc").forEach(a=>{a.addEventListener("click",()=>{const s=X.find(c=>c.id===Number(a.dataset.id));s&&na(s)})}),document.querySelectorAll(".btn-view-doc-detail").forEach(a=>{a.addEventListener("click",()=>{pt=Number(a.dataset.id),f()})}),(i=document.getElementById("btn-doc-detail-close"))==null||i.addEventListener("click",()=>{pt=null,f()}),(o=document.getElementById("btn-doc-detail-print"))==null||o.addEventListener("click",()=>{const a=X.find(s=>s.id===pt);a&&na(a)})}function Jl(){var e;(e=document.getElementById("criterion-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.name.value.trim(),i=Number(r.weight.value);if(!n||!i){g("กรอกชื่อเกณฑ์และคะแนนให้ครบ","warning");return}try{await Xn({name:n,weight:i}),ce=null,f()}catch(o){g("บันทึกไม่สำเร็จ: "+k(o),"error")}}),document.querySelectorAll(".btn-remove-criterion").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบเกณฑ์นี้ออกจากการประเมิน?"))try{await Zn(Number(t.dataset.id)),ce=null,f()}catch(r){g("ลบไม่สำเร็จ: "+k(r),"error")}})}),document.querySelectorAll(".btn-toggle-eval").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);qt=qt===r?null:r,f()})}),document.querySelectorAll(".eval-score-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.memberId),i=t.decision.value;if(!i){g("กรุณาเลือกสรุปผล","warning");return}const o={};let a=0;ce.forEach(m=>{var u;const p=(u=t[`c_${m.id}`])==null?void 0:u.value;p!==""&&p!=null&&(o[m.id]=Number(p),a+=Number(p))});const s=ce.reduce((m,p)=>m+Number(p.weight),0),c=t.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{await es({memberId:n,academicYear:Y,termId:R,scores:o,totalScore:a,maxScore:s,decision:i,comment:t.comment.value.trim(),evaluatorTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null}),g("บันทึกผลประเมินแล้ว ✅","success"),Xe=null,qt=null,f()}catch(m){g("บันทึกไม่สำเร็จ: "+k(m),"error"),c.disabled=!1,c.textContent="บันทึกผลประเมิน"}})}),document.querySelectorAll(".btn-issue-cert").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.memberId),n=d.members.find(o=>o.id===r),i=Xe[r];if(!(!n||!i)){t.disabled=!0,t.textContent="กำลังออก...";try{const o=`${Y}-${String(i.id).padStart(4,"0")}`;await ts({evaluationId:i.id,certificateNo:o}),i.certificate_no=o,i.certificate_issued_at=new Date().toISOString(),ra(n,i),f()}catch(o){g("ออกเกียรติบัตรไม่สำเร็จ: "+k(o),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}}})}),document.querySelectorAll(".btn-view-cert").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.memberId),n=d.members.find(o=>o.id===r),i=Xe[r];n&&i&&ra(n,i)})})}function Ql(){var e;(e=document.getElementById("activity-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.title.value.trim();if(!n){g("กรุณากรอกชื่อกิจกรรม","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Wn({title:n,detail:r.detail.value.trim(),gender:r.gender.value||null,activityDate:r.activity_date.value||null,budget:r.budget.value?Number(r.budget.value):null,ownerText:r.owner_text.value.trim(),academicYear:Y,termId:R,openToGeneral:r.open_to_general.checked,ownerMemberId:r.owner_member_id.value?Number(r.owner_member_id.value):null,countsForEvaluation:r.counts_for_evaluation.checked}),g("สร้างกิจกรรมแล้ว ✅","success"),ee=null,f()}catch(o){g("บันทึกไม่สำเร็จ: "+k(o),"error"),i.disabled=!1,i.textContent="สร้างกิจกรรม"}}),document.querySelectorAll(".btn-activity-next").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await Fr(Number(t.dataset.id),t.dataset.next),ee=null,f()}catch(r){g("บันทึกไม่สำเร็จ: "+k(r),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cancel").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ยืนยันยกเลิกกิจกรรมนี้?")){t.disabled=!0;try{await Fr(Number(t.dataset.id),"cancelled"),ee=null,f()}catch(r){g("บันทึกไม่สำเร็จ: "+k(r),"error"),t.disabled=!1}}})}),document.querySelectorAll(".btn-activity-attendance").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);ge[r]===void 0&&ea(r)})}),document.querySelectorAll(".btn-activity-scan").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.id);ge[r]===void 0&&await ea(r);const n=ee.find(o=>o.id===r),i=d.members.filter(o=>{var a;return!(n!=null&&n.gender)||((a=o.council_positions)==null?void 0:a.gender)===n.gender});mo({activityId:r,activityTitle:t.dataset.title,openToGeneral:!!t.dataset.openGeneral,members:i,alreadyChecked:ge[r],onCheckedIn:o=>{var a;(a=ge[r])==null||a.add(o),f()},onUndo:o=>{var a;(a=ge[r])==null||a.delete(o),f()}})})}),document.querySelectorAll(".btn-checkin").forEach(t=>{t.addEventListener("click",async()=>{var i;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId);t.disabled=!0;try{await la({activityId:r,studentId:n}),(i=ge[r])==null||i.add(n),f()}catch(o){g("เช็คชื่อไม่สำเร็จ: "+k(o),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cert-manage").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);xr=xr===r?null:r,f()})}),document.querySelectorAll(".cert-rule-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,i=Number(n.dataset.activityId),o=n.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังบันทึก...";try{await Hn({activityId:i,templateId:n.template_id.value?Number(n.template_id.value):null,minAttendanceCount:n.min_attendance_count.value?Number(n.min_attendance_count.value):null,requiredDates:Te(n.required_dates.value),notes:n.notes.value.trim()}),g("บันทึกเงื่อนไขแล้ว ✅","success"),delete Ke[i],f()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error"),o.disabled=!1,o.textContent="บันทึกเงื่อนไข"}})}),document.querySelectorAll(".btn-cert-override").forEach(t=>{t.addEventListener("click",async()=>{var o,a;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),i=t.dataset.decision||null;t.disabled=!0;try{await Jn({activityId:r,studentId:n,decision:i,decidedByTeacherId:((o=d.teacher)==null?void 0:o.id)??null,decidedByMemberId:((a=d.membership[0])==null?void 0:a.id)??null}),delete Ir[r],Fa(r)}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-cert-issue").forEach(t=>{t.addEventListener("click",async()=>{var c,m;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),i=ee.find(p=>p.id===r),o=Ke[r],s=(c=(Cr[r]??[]).find(p=>p.student_id===n))==null?void 0:c.students;if(!(o!=null&&o.template_id)){g("กรุณาเลือกเทมเพลตเกียรติบัตรก่อน","warning");return}t.disabled=!0,t.textContent="กำลังออก...";try{const p=await to({templateId:o.template_id,recipientType:"student",studentId:n,recipientName:(s==null?void 0:s.full_name)??"—",variables:{reason:`เข้าร่วมกิจกรรม "${(i==null?void 0:i.title)??""}" ของสภานักเรียนจนสำเร็จ`},title:(i==null?void 0:i.title)??null,issuedByTeacherId:((m=d.teacher)==null?void 0:m.id)??null,sourceSystem:"council_activity",sourceRefId:r});ut[r]={...ut[r]??{},[n]:p},f()}catch(p){g("ออกเกียรติบัตรไม่สำเร็จ: "+k(p),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}})}),document.querySelectorAll(".btn-cert-view").forEach(t=>{t.addEventListener("click",()=>{var o;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),i=(o=ut[r])==null?void 0:o[n];i&&ro({layout:i.layout_snapshot,variables:{name:i.recipient_name??"",date:new Date(i.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:i.certificate_no,...i.variables},docTitle:i.title})})})}function Kl(){var e,t,r;(e=document.getElementById("btn-open-ann-form"))==null||e.addEventListener("click",()=>{Nt=!0,f()}),(t=document.getElementById("btn-cancel-ann"))==null||t.addEventListener("click",()=>{Nt=!1,f()}),document.querySelectorAll(".ann-filter-btn").forEach(n=>{n.addEventListener("click",()=>{Tt=n.dataset.filter,f()})}),(r=document.getElementById("announcement-form"))==null||r.addEventListener("submit",async n=>{n.preventDefault();const i=n.target,o=i.title.value.trim();if(!o){g("กรุณากรอกหัวเรื่องประกาศ","warning");return}const a=i.querySelector('button[type="submit"]');a.disabled=!0,a.textContent="กำลังเผยแพร่...";try{await Qn({type:i.type.value,audience:i.audience.value,title:o,body:i.body.value.trim(),pinned:i.pinned.checked,postedByTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null,postedByStudentId:d.isChair&&d.student?d.student.id:null}),g("เผยแพร่ประกาศแล้ว 📣","success"),Nt=!1,Ft=null,f()}catch(s){g("เผยแพร่ไม่สำเร็จ: "+k(s),"error"),a.disabled=!1,a.textContent="เผยแพร่ประกาศ"}}),document.querySelectorAll(".btn-ack-ann").forEach(n=>{n.addEventListener("click",async()=>{const i=Number(n.dataset.id);n.disabled=!0,n.textContent="กำลังบันทึก...";try{await Kn({announcementId:i,studentId:d.student.id}),_e==null||_e.add(i),$e&&($e[i]=($e[i]??0)+1),g("รับทราบแล้ว","success"),f()}catch(o){g("บันทึกไม่สำเร็จ: "+k(o),"error"),n.disabled=!1,n.textContent="รับทราบ"}})})}function Xl(){var e,t,r,n,i,o,a,s,c,m,p;(e=document.getElementById("apps-print-roster"))==null||e.addEventListener("click",ki),document.querySelectorAll(".apps-filter-btn").forEach(u=>{u.addEventListener("click",()=>{he=u.dataset.filter,f()})}),document.querySelectorAll(".apps-gender-tab-btn").forEach(u=>{u.addEventListener("click",()=>{te=u.dataset.gender,Ae="",f()})}),(t=document.getElementById("apps-grade-filter"))==null||t.addEventListener("change",u=>{vt=u.target.value,f()}),(r=document.getElementById("apps-position-filter"))==null||r.addEventListener("change",u=>{Ae=u.target.value,f()}),(n=document.getElementById("apps-advisor-endorse-filter"))==null||n.addEventListener("change",u=>{Pe=u.target.value,f()}),(i=document.getElementById("apps-peer-endorse-filter"))==null||i.addEventListener("change",u=>{Oe=u.target.value,f()}),document.querySelectorAll(".btn-view-app-detail").forEach(u=>{u.addEventListener("click",()=>{Je=Number(u.dataset.id),f()})}),(o=document.getElementById("btn-admin-app-detail-close"))==null||o.addEventListener("click",()=>{Je=null,f()}),(a=document.getElementById("admin-app-detail-backdrop"))==null||a.addEventListener("click",u=>{u.target.id==="admin-app-detail-backdrop"&&(Je=null,f())}),(s=document.getElementById("btn-delete-council-application"))==null||s.addEventListener("click",u=>{Le=Number(u.currentTarget.dataset.id),f()}),(c=document.getElementById("btn-cancel-council-delete"))==null||c.addEventListener("click",()=>{Le=null,f()}),(m=document.getElementById("council-delete-backdrop"))==null||m.addEventListener("click",u=>{u.target.id==="council-delete-backdrop"&&(Le=null,f())}),(p=document.getElementById("btn-confirm-council-delete"))==null||p.addEventListener("click",async()=>{var b;const u=(b=document.getElementById("council-delete-reason"))==null?void 0:b.value.trim();if(!u){g("กรุณากรอกเหตุผลการลบ","warning");return}const x=document.getElementById("btn-confirm-council-delete");x.disabled=!0,x.textContent="กำลังลบ...";try{await Pn(Le,u),g("ลบใบสมัครแบบเก็บประวัติแล้ว ✅","success"),Le=null,Je=null,T=null,f()}catch(v){g("ลบใบสมัครไม่สำเร็จ: "+k(v),"error"),x.disabled=!1,x.textContent="ยืนยันลบ"}}),document.querySelectorAll(".schedule-form").forEach(u=>{u.addEventListener("submit",async x=>{x.preventDefault();const b=Number(u.dataset.appId),v=u.dataset.ivId?Number(u.dataset.ivId):null,y=u.scheduled_at.value,_=u.location.value.trim();if(!y){g("กรุณาระบุวันเวลานัดสัมภาษณ์","warning");return}const S=u.interviewerText.value.trim();let q=null;if(S){const I=S.match(/· รหัส (\d+)$/);if(!I){g("กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)","warning");return}q=Number(I[1])}const A=u.querySelector('button[type="submit"]');A.disabled=!0,A.textContent="กำลังบันทึก...";try{const I=new Date(y).toISOString();await On({applicationId:b,existingInterviewId:v,scheduledAt:I,location:_,interviewerTeacherId:q}),g("นัดสัมภาษณ์แล้ว ✅","success");const E=u.dataset.profileId;if(E){const L=new Date(I).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});nr.functions.invoke("send-push",{body:{title:"🗓️ นัดสัมภาษณ์สภานักเรียน",body:`${u.dataset.positionName||""} — ${L}${_?" · "+_:""}`,url:"council.html",profileIds:[E]}}).catch(()=>{})}T=null,f()}catch(I){g("บันทึกไม่สำเร็จ: "+k(I),"error"),A.disabled=!1,A.textContent="บันทึกนัดสัมภาษณ์"}})}),document.querySelectorAll(".score-form").forEach(u=>{const x=Number(u.dataset.maxWeight),b=Number(u.dataset.passThreshold),v=u.querySelector(".score-total-display"),y=()=>{let _=0;u.querySelectorAll(".score-input").forEach(S=>{S.value!==""&&(_+=Number(S.value))}),v&&(v.textContent=`${_} / ${x} · ต้อง ≥ ${b} จึงผ่าน`)};u.querySelectorAll(".score-input").forEach(_=>_.addEventListener("input",y)),u.addEventListener("submit",async _=>{_.preventDefault();const S=Number(u.dataset.appId),q=u.dataset.ivId?Number(u.dataset.ivId):null;if(!q){g("ไม่พบข้อมูลการนัดสัมภาษณ์","error");return}const A={};let I=0;u.querySelectorAll(".score-input").forEach(B=>{B.value!==""&&(A[B.dataset.criterionId]=Number(B.value),I+=Number(B.value))});const E=I>=b?"pass":"fail",L=u.comment.value.trim(),N=u.querySelector('button[type="submit"]');N.disabled=!0,N.textContent="กำลังบันทึก...";try{await Fn({interviewId:q,applicationId:S,score:I,scores:A,result:E,comment:L}),g(`บันทึกผลสัมภาษณ์แล้ว ✅ (${E==="pass"?"ผ่าน":"ไม่ผ่าน"})`,"success"),T=null,f()}catch(B){g("บันทึกไม่สำเร็จ: "+k(B),"error"),N.disabled=!1,N.textContent="บันทึกผล"}})}),document.querySelectorAll(".btn-promote-candidate").forEach(u=>{u.addEventListener("click",async()=>{const x=Number(u.dataset.appId),b=T==null?void 0:T.find(v=>v.id===x);if(b){u.disabled=!0,u.textContent="กำลังบันทึก...";try{const v=await kr({gender:b.council_positions.gender,academicYear:Y,termId:R});await Yn({applicationId:x,studentId:b.students.id,electionConfigId:v.id,campaignStatement:b.motivation,photoUrl:b.photo_url}),g("ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️","success"),delete ne[b.council_positions.gender],de[b.council_positions.gender]=null,d.elections=await Me(null,R).catch(()=>d.elections),T=null,f()}catch(v){g("บันทึกไม่สำเร็จ: "+k(v),"error"),u.disabled=!1,u.textContent="🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง"}}})}),document.querySelectorAll(".btn-appoint-member").forEach(u=>{u.addEventListener("click",async()=>{var v,y,_;const x=Number(u.dataset.appId),b=T==null?void 0:T.find(S=>S.id===x);if(b&&confirm(`ยืนยันแต่งตั้ง ${((v=b.students)==null?void 0:v.full_name)??""} เป็น ${((y=b.council_positions)==null?void 0:y.position_name)??""}?`)){u.disabled=!0,u.textContent="กำลังบันทึก...";try{await zn({applicationId:x,positionId:b.position_id,studentId:b.students.id,academicYear:Y,appointedByTeacherId:(_=d.teacher)==null?void 0:_.id}),g("แต่งตั้งสำเร็จ ✅","success"),T=null,d.members=await Ye(null,R).catch(()=>d.members),f()}catch(S){g("บันทึกไม่สำเร็จ: "+k(S),"error"),u.disabled=!1,u.textContent="✅ แต่งตั้งเข้าตำแหน่ง"}}})})}function Zl(){var e,t,r,n,i;document.querySelectorAll(".btn-create-election").forEach(o=>{o.addEventListener("click",async()=>{o.disabled=!0;try{const a=await kr({gender:o.dataset.gender,academicYear:Y,termId:R});d.elections=[...d.elections.filter(s=>s.id!==a.id),a],f()}catch(a){g("เปิดใช้งานไม่สำเร็จ: "+k(a),"error"),o.disabled=!1}})}),document.querySelectorAll(".election-window-form").forEach(o=>{o.addEventListener("submit",async a=>{a.preventDefault();const s=Number(o.dataset.electionId),c=o.opens_at.value?new Date(o.opens_at.value).toISOString():null,m=o.closes_at.value?new Date(o.closes_at.value).toISOString():null,p=o.querySelector('button[type="submit"]');p.disabled=!0;try{await Gn({electionConfigId:s,opensAt:c,closesAt:m}),d.elections=await Me(null,R).catch(()=>d.elections),g("บันทึกช่วงเวลาแล้ว","success"),f()}catch(u){g("บันทึกไม่สำเร็จ: "+k(u),"error"),p.disabled=!1}})}),document.querySelectorAll(".btn-publish-results").forEach(o=>{o.addEventListener("click",async()=>{if(confirm("ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้")){o.disabled=!0,o.textContent="กำลังประกาศผล...";try{await Vn({electionConfigId:Number(o.dataset.electionId),gender:o.dataset.gender,academicYear:Y}),g("ประกาศผลแล้ว 🎉","success"),d.elections=await Me(null,R).catch(()=>d.elections),d.members=await Ye(null,R).catch(()=>d.members),f()}catch(a){g("ประกาศผลไม่สำเร็จ: "+k(a),"error"),o.disabled=!1,o.textContent="📢 ประกาศผล+แต่งตั้ง"}}})}),document.querySelectorAll(".candidate-card-btn").forEach(o=>{o.addEventListener("click",()=>{Qe={gender:o.dataset.gender,id:Number(o.dataset.id)},Ce=!1,f()})}),(e=document.getElementById("btn-candidate-modal-close"))==null||e.addEventListener("click",()=>{Qe=null,Ce=!1,f()}),(t=document.getElementById("candidate-modal-backdrop"))==null||t.addEventListener("click",o=>{o.target.id==="candidate-modal-backdrop"&&(Qe=null,Ce=!1,f())}),(r=document.getElementById("btn-candidate-edit"))==null||r.addEventListener("click",()=>{Ce=!0,f()}),(n=document.getElementById("btn-candidate-cancel-edit"))==null||n.addEventListener("click",()=>{Ce=!1,f()}),(i=document.getElementById("candidate-edit-form"))==null||i.addEventListener("submit",async o=>{o.preventDefault();const a=o.target,s=Number(a.dataset.candidateId),c=a.slogan.value.trim(),m=a.vision.value.trim(),p=a.policies.value.split(`
`).map(b=>b.trim()).filter(Boolean),u=a.experience.value.split(`
`).map(b=>b.trim()).filter(Boolean),x=a.querySelector('button[type="submit"]');x.disabled=!0,x.textContent="กำลังบันทึก...";try{await Un({candidateId:s,slogan:c,vision:m,policies:p,experience:u});const{gender:b}=Qe;ne[b]=await ma(we(b).id).catch(()=>ne[b]),Ce=!1,g("บันทึกโปรไฟล์ผู้สมัครแล้ว ✅","success"),f()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),x.disabled=!1,x.textContent="บันทึก"}})}const ed={auto:"ตามระบบ",light:"สว่าง",dark:"มืด"},td={auto:"🌓",light:"☀️",dark:"🌙"};function ar(e){const t=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.toggleAttribute("data-dark",t);const r=document.getElementById("council-theme-icon"),n=document.getElementById("council-theme-label");r&&(r.textContent=td[e]),n&&(n.textContent=ed[e])}function rd(){var t;const e=localStorage.getItem("council_theme")||"auto";ar(e),(t=document.getElementById("council-theme-toggle"))==null||t.addEventListener("click",()=>{const r=localStorage.getItem("council_theme")||"auto",n=r==="auto"?"light":r==="light"?"dark":"auto";localStorage.setItem("council_theme",n),ar(n)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("council_theme")||"auto")==="auto"&&ar("auto")})}rd();Ro();
