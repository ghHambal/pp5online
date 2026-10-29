import{s as ur}from"./supabase-BV-W2lsh.js";/* empty css             */import{b as dn}from"./anti-pull-refresh-BGrI1pMY.js";import{a as f,g as I}from"./ui-Bnz8GMvV.js";import{c as cn}from"./ai-prompt-gate-D6R7FVed.js";import{g as un}from"./student-api-Wv4_pEvv.js";import{getMyTeacherProfile as pn,getMyHomeroomRooms as mn,getTeachers as bn}from"./api-CQwFwlFA.js";import{uploadCouncilApplicationPhoto as vn,uploadCouncilCertificate as xn,uploadCertificateTemplateImage as fn,uploadCouncilTeacherPhoto as gn,uploadCouncilTeacherSignature as yn}from"./storage-CuUjCgvI.js";import{u as hn,c as xa,s as fa,a as _n,r as Wr,b as Hr,d as $n,p as wn,e as kn,g as Ft,f as En,h as An,i as Sn,j as qt,k as pr,l as Ue,m as Oe,n as ga,o as Tr,q as ya,t as ha,v as _a,w as In,x as Cn,y as Ln,z as Tn,A as Nn,B as Nr,C as qn,D as ct,E as jn,F as $a,G as Rn,H as Dn,I as Mn,J as Bn,K as Pn,L as On,M as Fn,N as Yn,O as zn,P as Gn,Q as Vn,R as Un,S as Wn,T as Hn,U as Qn,V as Jn,W as Kn,X as Xn,Y as Zn,Z as es,_ as ts,$ as rs,a0 as as,a1 as ns,a2 as ss,a3 as os,a4 as wa,a5 as is,a6 as Qr,a7 as ls,a8 as ds,a9 as cs,aa as us,ab as ps,ac as ms,ad as bs,ae as vs,af as xs,ag as fs,ah as gs,ai as ys,aj as hs,ak as _s,al as $s,am as It,an as ws,ao as ks,ap as Es,aq as As,ar as Ss,as as Is,at as Cs,au as Ls,av as Ts,aw as Ns,ax as qs,ay as js,az as Rs,aA as Ds,aB as Ms,aC as Bs,aD as Ps,aE as Os,aF as ka,aG as ar,aH as Fs,aI as Ys,aJ as zs,aK as Gs,aL as Vs,aM as Us,aN as Ws,aO as Hs,aP as Qs,aQ as Js,aR as Ks,aS as Xs,aT as Zs,aU as eo,aV as to,aW as ro,aX as ao,aY as no,aZ as so,a_ as oo,a$ as io,b0 as lo,b1 as mr,b2 as co,b3 as uo,b4 as po,b5 as mo,b6 as bo,b7 as vo,b8 as Ea}from"./council-api-cbxUIcsP.js";import{i as xo,o as fo,d as go,c as yo,a as ho,u as _o,C as nr,g as $o,b as wo}from"./certificate-engine-C9CSnChU.js";import{o as ko}from"./certificate-editor-DJRUUdUu.js";import{o as Te}from"./print-overlay-BVfxEd6n.js";import{b as Eo}from"./browser-JP79f-a9.js";import"./assignment-annotations-api-Y9qfMpYa.js";import"./supabase-errors-BniCCodr.js";import"./teacher-views-utils-Du8GiC29.js";import"./score-display-CQ4dUIPx.js";import"./impersonation-0xVfgYVY.js";import"./skill-groups-BY1NTbf4.js";function lt(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),n=t.createGain();r.connect(n),n.connect(t.destination),e==="success"?(r.type="sine",r.frequency.setValueAtTime(880,t.currentTime),n.gain.setValueAtTime(.08,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),r.start(),r.stop(t.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,t.currentTime),n.gain.setValueAtTime(.12,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),r.start(),r.stop(t.currentTime+.3))}catch{}}async function Ao(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>e(window.Html5Qrcode),r.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}function We(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function So(e){var T;const{activityId:t,activityTitle:r,members:n,alreadyChecked:l,onCheckedIn:i,onUndo:a,openToGeneral:s}=e;(T=document.getElementById("council-checkin-overlay"))==null||T.remove();const c=document.createElement("div");c.id="council-checkin-overlay",c.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",c.innerHTML=`
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนเช็คอินกิจกรรม</h3>
        <p class="text-xs text-slate-400 truncate">${We(r??"")}</p>
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
    </div>`,document.body.appendChild(c);const m=[];let p=null,u=null,x=0;const b=new Set(l??[]),v=()=>{const E=c.querySelector("#ccs-history-list"),A=c.querySelector("#ccs-history-count");if(A.textContent=`${m.length} คน`,!m.length){E.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}E.innerHTML=m.map(S=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${We(S.name)}</span>
        <span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span>
        <button data-ccs-undo="${We(S.studentId)}" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>
      </div>`).join("")};async function h(E){var q;const A=n.find(M=>{var z;return((z=M.students)==null?void 0:z.student_code)===E});if(A)return{studentId:A.student_id,name:((q=A.students)==null?void 0:q.full_name)??"—"};if(!s)return null;const N=(await fa(E).catch(()=>[])).find(M=>M.student_code===E);return N?{studentId:N.id,name:N.full_name}:null}async function $(E){const A=c.querySelector("#ccs-camera-container"),S=c.querySelector("#ccs-feedback"),N=M=>{A.classList.add(M?"ccs-flash-success":"ccs-flash-error"),setTimeout(()=>A.classList.remove(M?"ccs-flash-success":"ccs-flash-error"),500)},q=await h(E);if(!q){lt("error"),N(!1),S.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${s?"นักเรียน":"สมาชิกสภา"}รหัสนี้</div>`;return}if(b.has(q.studentId)){lt("error"),N(!1),S.innerHTML=`<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${We(q.name)} เช็คอินไปแล้ว</div>`;return}try{await xa({activityId:t,studentId:q.studentId}),b.add(q.studentId),lt("success"),N(!0),S.innerHTML=`<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ เช็คอิน ${We(q.name)} สำเร็จ</div>`,m.unshift({name:q.name,studentId:q.studentId}),v(),i==null||i(q.studentId)}catch(M){lt("error"),N(!1),S.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${We(I(M))}</div>`,f("เช็คอินไม่สำเร็จ: "+I(M),"error")}}async function w(E){let A=E;if(E.startsWith("SQ:")){const[,S,N]=E.split(":"),q=Math.floor(Date.now()/1e3)-parseInt(N,10);if(q>60||q<-60){const M=c.querySelector("#ccs-feedback"),z=c.querySelector("#ccs-camera-container");lt("error"),z.classList.add("ccs-flash-error"),setTimeout(()=>z.classList.remove("ccs-flash-error"),500),M.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>';return}A=S}await $(A)}c.querySelector("#ccs-manual-form").addEventListener("submit",async E=>{E.preventDefault();const A=c.querySelector("#ccs-manual-code"),S=A.value.trim();S&&(await $(S),A.value="",A.focus())}),c.querySelector("#ccs-history-list").addEventListener("click",async E=>{const A=E.target.closest("[data-ccs-undo]");if(!A)return;const S=Number(A.dataset.ccsUndo);A.disabled=!0;try{await hn({activityId:t,studentId:S}),b.delete(S);const N=m.findIndex(q=>q.studentId===S);N!==-1&&m.splice(N,1),v(),a==null||a(S)}catch(N){f("ยกเลิกไม่สำเร็จ: "+I(N),"error"),A.disabled=!1}}),c.querySelector("#ccs-close").addEventListener("click",async()=>{if(p)try{await p.stop()}catch{}c.remove()}),(async()=>{try{const E=await Ao();p=new E("ccs-camera-reader"),await p.start({facingMode:"environment"},{fps:25,aspectRatio:1},A=>{A===u&&Date.now()-x<2e3||(u=A,x=Date.now(),w(A))},()=>{})}catch(E){f("ไม่สามารถเปิดกล้องได้: "+I(E),"error"),c.remove()}})()}const F=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Se=e=>String(e).replace(/[0-9]/g,t=>"๐๑๒๓๔๕๖๗๘๙"[Number(t)]),br=e=>String(e??"").replace(/[๐-๙]/g,t=>String("๐๑๒๓๔๕๖๗๘๙".indexOf(t))).replace(/ข้อ\s*ที่/g,"ข้อ").replace(/\s+/g," ").trim(),vr={draft:"ฉบับร่าง",pending_approval:"รออนุมัติ",approved:"อนุมัติแล้ว",advisor_review:"รอครูที่ปรึกษาตรวจ",student_affairs_review:"รอหัวหน้าฝ่ายกิจการนักเรียนตรวจ",management_review:"รอผู้บริหารอนุมัติ",published:"ประกาศแล้ว",effective:"มีผลบังคับใช้",superseded:"ถูกแทนที่ด้วยฉบับใหม่",archived:"เก็บถาวร"};let k={versions:null,selectedVersionId:null,content:null,loading:!1,error:null,query:"",sectionFilter:"all",editingClauseId:null,addingClause:!1,routeClauseNo:null,focusRouteClause:!1};function Aa(){const e=Number(new URLSearchParams(window.location.search).get("clause"));return Number.isInteger(e)&&e>0?e:null}function Io(){const e=Aa();e!==k.routeClauseNo&&(e?(k.routeClauseNo=e,k.query="ข้อที่ "+e,k.focusRouteClause=!0):(k.routeClauseNo&&k.query==="ข้อที่ "+k.routeClauseNo&&(k.query=""),k.routeClauseNo=null,k.focusRouteClause=!1))}function sr(){k.routeClauseNo=null,k.focusRouteClause=!1;const e=new URL(window.location.href);e.searchParams.delete("clause"),window.history.replaceState(null,"",e)}function Sa(){var e;return(k.versions??[]).find(t=>t.id===k.selectedVersionId)??((e=k.versions)==null?void 0:e[0])??null}async function xr(e){var t;k.loading=!0,k.error=null,e();try{k.versions=await An(),k.selectedVersionId=k.selectedVersionId??((t=k.versions[0])==null?void 0:t.id)??null,k.content=k.selectedVersionId?await Ft(k.selectedVersionId):{sections:[],clauses:[]};const r=Aa();r&&(k.routeClauseNo=r,k.query="ข้อที่ "+r,k.focusRouteClause=!0)}catch(r){k.error=r}finally{k.loading=!1,e()}}async function Co(e){if(k.selectedVersionId){k.loading=!0,k.error=null,e();try{k.content=await Ft(k.selectedVersionId)}catch(t){k.error=t}finally{k.loading=!1,e()}}}function Lo(e){k.versions===null&&!k.loading&&xr(e)}function Ia(e,t,r){const n=new Map(t.map(i=>[i.id,i])),l=br(k.query).toLocaleLowerCase();return r.filter(i=>{const a=n.get(i.section_id);if(k.sectionFilter!=="all"&&String(a==null?void 0:a.id)!==String(k.sectionFilter))return!1;if(!l)return!0;const s=[i.clause_no,"ข้อ "+i.clause_no,"ข้อที่ "+i.clause_no,i.title,i.body,...i.keywords??[],a==null?void 0:a.title,"หมวด "+((a==null?void 0:a.section_no)??""),e==null?void 0:e.title].filter(Boolean).join(" ");return br(s).toLocaleLowerCase().includes(l)})}function To(e,t,r,n=""){const i=t.map(c=>({section:c,clauses:r.filter(m=>m.section_id===c.id)})).filter(c=>c.clauses.length).map(c=>{const m='<div class="section">หมวด '+Se(c.section.section_no)+"<br>"+F(c.section.title)+"</div>",p=c.clauses.map(u=>'<div class="clause"><span class="clause-no">ข้อ '+Se(u.clause_no)+"</span>  "+F(u.body)+"</div>").join("");return m+p}).join(""),a=String((e==null?void 0:e.source_document_url)??"").startsWith("http")?'<p class="source">แหล่งต้นฉบับ: <a href="'+F(e.source_document_url)+'">'+F(e.source_document_url)+"</a></p>":"",s=["published","effective"].includes(e==null?void 0:e.status)&&((e==null?void 0:e.status)==="effective"||(e==null?void 0:e.is_active)&&(e==null?void 0:e.effective_date)&&new Date(e.effective_date)<=new Date);return'<!doctype html><html lang="th"><head><meta charset="utf-8"><title>'+F(e==null?void 0:e.title)+'</title><style>@page{size:A4;margin:18mm 18mm 16mm}*{box-sizing:border-box}body{font-family:"TH SarabunPSK","TH Sarabun New",Sarabun,sans-serif;color:#111;font-size:16pt;line-height:1.35}h1{text-align:center;font-size:22pt;margin:0 0 3mm;font-weight:700}.meta{text-align:center;font-size:13pt;margin-bottom:7mm}.draft{border:1px solid #9a5b00;color:#7a4200;padding:2mm;text-align:center;margin-bottom:6mm}.section{page-break-before:always;text-align:center;font-size:18pt;font-weight:700;margin:8mm 0 5mm}.section:first-child{page-break-before:auto}.clause{margin:0 0 4mm;text-align:justify;white-space:pre-line}.clause-no{font-weight:700}.source{font-size:11pt;margin-top:10mm;color:#555}a{color:inherit}</style></head><body><h1>'+F(e==null?void 0:e.title)+'</h1><div class="meta">ฉบับ '+F(e==null?void 0:e.version_label)+" · สถานะ: "+F(vr[e==null?void 0:e.status]||(e==null?void 0:e.status))+"</div>"+(n?'<div class="meta">'+F(n)+" · "+r.length+" ข้อ</div>":"")+(s?"":'<div class="draft">เอกสารฉบับร่าง/เอกสารอ้างอิง ยังไม่ใช่ระเบียบที่มีผลบังคับใช้</div>')+i+a+"</body></html>"}function No(e){return'<form class="regulation-edit-form border border-[var(--primary-soft-line)] bg-[var(--primary-soft)] rounded-2xl p-4 mt-2" data-regulation-edit="'+e.id+'"><p class="text-sm font-bold text-[var(--ink)] mb-3">แก้ไขข้อ '+Se(e.clause_no)+'</p><label class="block text-xs font-bold text-[var(--muted)] mb-1">หัวข้อ</label><input name="title" value="'+F(e.title)+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)] mb-3"><label class="block text-xs font-bold text-[var(--muted)] mb-1">เนื้อหาข้อ</label><textarea name="body" rows="8" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]">'+F(e.body)+'</textarea><label class="block text-xs font-bold text-[var(--muted)] mt-3 mb-1">คำค้น (คั่นด้วยจุลภาค)</label><input name="keywords" value="'+F((e.keywords??[]).join(", "))+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"><div class="flex gap-2 mt-3"><button class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold" type="submit">บันทึกฉบับร่าง</button><button class="regulation-cancel-edit px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold" type="button">ยกเลิก</button></div></form>'}function qo(e,t,r){if(k.editingClauseId===e.id&&r)return No(e);const n=String(e.title??"").trim(),l=String(e.body??""),i=n&&!l.startsWith(n),a=k.routeClauseNo===Number(e.clause_no),s="council.html?view=regulation&clause="+encodeURIComponent(e.clause_no);return'<article id="regulation-clause-'+F(e.clause_no)+'" class="border border-[var(--line-soft)] bg-[var(--surface)] rounded-2xl p-4 shadow-sm'+(a?" ring-2 ring-[var(--primary)]":"")+'"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><p class="text-sm font-bold text-[var(--primary)]">ข้อ '+Se(e.clause_no)+"</p>"+(i?'<p class="text-sm font-semibold text-[var(--ink)] mt-1">'+F(n)+"</p>":"")+'</div><div class="flex items-center gap-2 flex-shrink-0"><a href="'+s+'" class="regulation-clause-link px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" title="เปิดลิงก์ตรงของข้อนี้">🔗 ลิงก์ข้อ</a>'+(r?'<button type="button" class="regulation-edit-clause px-3 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" data-id="'+e.id+'">แก้ไข</button>':"")+'</div></div><div class="text-sm leading-7 text-[var(--ink-2)] mt-3 whitespace-pre-line">'+F(e.body)+'</div><p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">หมวด '+Se(t.section_no)+" · "+F(t.title)+"</p></article>"}function jo(e){return'<form id="regulation-add-form" class="bg-[var(--surface)] border border-[var(--primary-soft-line)] rounded-2xl p-5"><h2 class="font-bold text-[var(--ink)]">เพิ่มข้อในฉบับร่าง</h2><div class="grid md:grid-cols-3 gap-3 mt-3"><label class="text-xs font-bold text-[var(--muted)]">หมวด<select name="sectionId" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]">'+e.map(t=>'<option value="'+t.id+'">หมวด '+Se(t.section_no)+" · "+F(t.title)+"</option>").join("")+'</select></label><label class="text-xs font-bold text-[var(--muted)]">เลขข้อ<input name="clauseNo" type="number" min="1" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label><label class="text-xs font-bold text-[var(--muted)]">หัวข้อ<input name="title" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label></div><label class="block text-xs font-bold text-[var(--muted)] mt-3">เนื้อหา<textarea name="body" rows="6" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]"></textarea></label><div class="flex gap-2 mt-3"><button type="submit" class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">เพิ่มฉบับร่าง</button><button type="button" class="regulation-cancel-add px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ยกเลิก</button></div></form>'}function Ro(e,t=()=>{}){var E,A;if(Io(),Lo(t),k.loading&&k.versions===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดระเบียบสภานักเรียน...</div></div>';if(k.error)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-red-200 rounded-2xl p-6 text-center"><p class="text-sm font-bold text-red-700">โหลดระเบียบไม่สำเร็จ</p><p class="text-xs text-[var(--muted)] mt-2">'+F(k.error.message||k.error)+'</p><button type="button" class="regulation-retry mt-4 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">ลองใหม่</button></div></div>';const r=Sa();if(!r)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีระเบียบในระบบ</div></div>';const n=((E=k.content)==null?void 0:E.sections)??[],l=((A=k.content)==null?void 0:A.clauses)??[],i=new Map(n.map(S=>[S.id,S])),a=Ia(r,n,l),s=n.map(S=>({section:S,clauses:a.filter(N=>N.section_id===S.id)})).filter(S=>S.clauses.length),c=!!(e!=null&&e.isAdmin)&&r.status==="draft",m=!!(e!=null&&e.isAdmin||e!=null&&e.isCouncilAdvisor)&&r.status==="draft",p=!!(e!=null&&e.isAdmin||e!=null&&e.isCouncilAdvisor)&&r.status==="advisor_review",u=!!(e!=null&&e.isAdmin||e!=null&&e.isStudentAffairsHead)&&r.status==="student_affairs_review",x=!!(e!=null&&e.isAdmin||e!=null&&e.isSchoolDirector)&&r.status==="management_review",b=!!(e!=null&&e.isAdmin||e!=null&&e.isSchoolDirector)&&r.status==="approved",v=(S,N,q="bg-[var(--primary)] text-white")=>`<button type="button" class="regulation-workflow-action px-4 py-2.5 rounded-xl text-xs font-bold ${q}" data-action="${S}" data-version-id="${r.id}">${N}</button>`,h=[m?v("submit","📤 ส่งตรวจ R1"):"",p?v("advisor-pass","✅ R1 ผ่าน")+v("advisor-return","↩️ R1 ขอแก้","border border-amber-300 text-amber-700 bg-amber-50"):"",u?v("affairs-pass","✅ R2 ผ่าน")+v("affairs-return","↩️ R2 ขอแก้","border border-amber-300 text-amber-700 bg-amber-50"):"",x?v("management-pass","✅ R3 อนุมัติ","bg-emerald-600 text-white"):"",b?v("publish","📢 เผยแพร่ R4","bg-emerald-600 text-white"):""].join(""),$=r.status==="published"&&r.is_active&&r.effective_date&&new Date(r.effective_date)<=new Date?"ฉบับนี้ประกาศและมีผลตามวันที่กำหนด ใช้เป็น gate ของฟีเจอร์ที่ผูกกับระเบียบได้":"ฉบับนี้ยังไม่ใช่ระเบียบที่มีผลบังคับใช้ ฟีเจอร์ที่ผูกกับระเบียบจะยังไม่เปิด",w=!!(br(k.query)||k.sectionFilter!=="all");if(k.loading&&k.content===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดฉบับที่เลือก...</div></div>';let T='<div class="max-w-5xl mx-auto space-y-4"><section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 md:p-6"><div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"><div><p class="text-xs font-bold text-[var(--primary)] mb-1">📚 ระเบียบและประกาศ</p><h1 class="text-xl md:text-2xl font-bold text-[var(--ink)]">'+F(r.title)+'</h1><p class="text-xs text-[var(--muted)] mt-2">ฉบับ '+F(r.version_label)+" · "+F(vr[r.status]||r.status)+" · โหมด "+(r.implementation_mode==="enforced"?"บังคับใช้":"อ้างอิง/เตรียมการ")+'</p></div><div class="flex flex-wrap gap-2"><button type="button" class="regulation-print px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">🖨️ '+(w?"พิมพ์ผลการค้นหา":"พิมพ์ฉบับนี้")+"</button>"+(r.source_document_url?'<a href="'+F(r.source_document_url)+'" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🔗 เปิดต้นฉบับ</a>':"")+(c?'<button type="button" class="regulation-add-clause px-4 py-2.5 rounded-xl border border-[var(--primary-soft-line)] text-[var(--primary)] text-xs font-bold">➕ เพิ่มข้อ</button>':"")+h+'</div></div><div class="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900"><strong>สถานะสำคัญ:</strong> '+F($)+"</div>";return k.versions.length>1&&(T+='<label class="block text-xs font-bold text-[var(--muted)] mt-4">เลือกฉบับ</label><select id="regulation-version-select" class="mt-1 w-full md:max-w-md border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">'+k.versions.map(S=>'<option value="'+S.id+'" '+(S.id===r.id?"selected":"")+">"+F(S.version_label)+" · "+F(vr[S.status]||S.status)+"</option>").join("")+"</select>"),T+="</section>",k.addingClause&&c&&(T+=jo(n)),T+='<section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5"><form id="regulation-search-form" class="flex flex-col md:flex-row gap-2"><input id="regulation-search" value="'+F(k.query)+'" placeholder="ค้นหา เช่น ข้อที่ 15, การเลือกตั้ง, การเงิน, การลาออก" class="flex-1 border border-[var(--line)] rounded-xl px-4 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><select id="regulation-section-filter" class="border border-[var(--line)] rounded-xl px-3 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><option value="all">ทุกหมวด</option>'+n.map(S=>'<option value="'+S.id+'" '+(String(k.sectionFilter)===String(S.id)?"selected":"")+">หมวด "+Se(S.section_no)+" · "+F(S.title)+"</option>").join("")+'</select><button type="submit" class="px-5 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">ค้นหา</button></form><div class="flex items-center justify-between gap-3 mt-4"><p class="text-xs text-[var(--muted)]">แสดง '+a.length+" จาก "+l.length+" ข้อ · แยกตามหมวด</p>"+(k.query||k.sectionFilter!=="all"?'<button type="button" class="regulation-clear-filter text-xs font-bold text-[var(--primary)]">ล้างตัวกรอง</button>':"")+"</div></section>",T+=s.length?s.map(S=>'<details open class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden"><summary class="cursor-pointer list-none px-5 py-4 bg-[var(--surface-2)] flex items-center justify-between gap-3"><span class="font-bold text-[var(--ink)]">หมวด '+Se(S.section.section_no)+" · "+F(S.section.title)+'</span><span class="text-xs text-[var(--muted)]">'+S.clauses.length+' ข้อ</span></summary><div class="p-4 space-y-3">'+S.clauses.map(N=>qo(N,i.get(N.section_id),c)).join("")+"</div></details>").join(""):'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบข้อที่ตรงกับการค้นหา</div>',T+"</div>"}function Do(e,t){var r,n,l,i,a,s,c,m,p;(r=document.querySelector(".regulation-retry"))==null||r.addEventListener("click",()=>xr(t)),(n=document.getElementById("regulation-version-select"))==null||n.addEventListener("change",u=>{k.selectedVersionId=Number(u.target.value),k.content=null,Co(t)}),(l=document.getElementById("regulation-section-filter"))==null||l.addEventListener("change",u=>{sr(),k.sectionFilter=u.target.value,t()}),(i=document.getElementById("regulation-search-form"))==null||i.addEventListener("submit",u=>{var x;u.preventDefault(),sr(),k.query=((x=document.getElementById("regulation-search"))==null?void 0:x.value)??"",t()}),(a=document.querySelector(".regulation-clear-filter"))==null||a.addEventListener("click",()=>{sr(),k.query="",k.sectionFilter="all",t()}),(s=document.querySelector(".regulation-print"))==null||s.addEventListener("click",()=>{var x,b;const u=Sa();if(u){const v=((x=k.content)==null?void 0:x.sections)??[],h=((b=k.content)==null?void 0:b.clauses)??[],$=Ia(u,v,h),w=k.query.trim()||k.sectionFilter!=="all"?"ผลการค้นหา/ตัวกรอง":"";Te(To(u,v,$,w))}}),document.querySelectorAll(".regulation-workflow-action").forEach(u=>u.addEventListener("click",async()=>{const x=u.dataset.action,b=Number(u.dataset.versionId),v=x==="submit"?window.prompt("หมายเหตุการส่งตรวจ (ถ้ามี)")||"":window.prompt("หมายเหตุ/ข้อสังเกต")||"";if(["advisor-return","affairs-return"].includes(x)&&!v.trim()){f("การขอแก้ไขต้องระบุหมายเหตุ","warning");return}let h=null;if(!(x==="publish"&&(h=window.prompt("วันที่มีผล (YYYY-MM-DD)",new Date().toISOString().slice(0,10)),!h))){u.disabled=!0;try{x==="submit"?await _n(b,v):x==="advisor-pass"?await Wr(b,!0,v):x==="advisor-return"?await Wr(b,!1,v):x==="affairs-pass"?await Hr(b,!0,v):x==="affairs-return"?await Hr(b,!1,v):x==="management-pass"?await $n(b,v):x==="publish"&&await wn(b,h,v),k.versions=null,k.content=null,k.selectedVersionId=null,f("อัปเดต workflow ระเบียบแล้ว","success"),await xr(t)}catch($){f("ดำเนินการไม่สำเร็จ: "+($.message||$),"error"),u.disabled=!1}}})),k.focusRouteClause&&window.requestAnimationFrame(()=>{const u=document.getElementById("regulation-clause-"+k.routeClauseNo);u&&u.scrollIntoView({behavior:"smooth",block:"center"}),k.focusRouteClause=!1}),e!=null&&e.isAdmin&&((c=document.querySelector(".regulation-add-clause"))==null||c.addEventListener("click",()=>{k.addingClause=!0,t()}),(m=document.querySelector(".regulation-cancel-add"))==null||m.addEventListener("click",()=>{k.addingClause=!1,t()}),document.querySelectorAll(".regulation-edit-clause").forEach(u=>u.addEventListener("click",()=>{k.editingClauseId=Number(u.dataset.id),t()})),document.querySelectorAll(".regulation-cancel-edit").forEach(u=>u.addEventListener("click",()=>{k.editingClauseId=null,t()})),document.querySelectorAll(".regulation-edit-form").forEach(u=>u.addEventListener("submit",async x=>{x.preventDefault();const b=new FormData(u),v=String(b.get("body")??"").trim();if(!v)return;const h=u.querySelector('button[type="submit"]');h&&(h.disabled=!0);try{await kn({clauseId:Number(u.dataset.regulationEdit),title:String(b.get("title")??"").trim(),body:v,keywords:String(b.get("keywords")??"").split(",").map($=>$.trim()).filter(Boolean)}),k.editingClauseId=null,k.content=await Ft(k.selectedVersionId),f("บันทึกฉบับร่างแล้ว ✅","success"),t()}catch($){f("บันทึกไม่สำเร็จ: "+($.message||$),"error"),h&&(h.disabled=!1)}})),(p=document.getElementById("regulation-add-form"))==null||p.addEventListener("submit",async u=>{u.preventDefault();const x=u.currentTarget,b=new FormData(x),v=String(b.get("body")??"").trim(),h=Number(b.get("clauseNo"));if(!v||!Number.isInteger(h)||h<1)return;const $=x.querySelector('button[type="submit"]');$&&($.disabled=!0);try{await En({versionId:k.selectedVersionId,sectionId:Number(b.get("sectionId")),clauseNo:h,title:String(b.get("title")??"").trim(),body:v,keywords:[]}),k.addingClause=!1,k.content=await Ft(k.selectedVersionId),f("เพิ่มข้อในฉบับร่างแล้ว ✅","success"),t()}catch(w){f("เพิ่มข้อไม่สำเร็จ: "+(w.message||w),"error"),$&&($.disabled=!1)}}))}const Mo="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit",Bo=[["การรับสมัครและคัดเลือก",[["FORM_01_APPLICATION","01","ใบสมัครสมาชิกสภานักเรียน","ใช้รับสมัครและเก็บข้อมูลผู้สมัคร"],["FORM_02_ENDORSEMENT","02","แบบรับรองผู้สมัคร","ใช้รับรองผู้สมัครโดยผู้มีสิทธิรับรอง"],["FORM_03_INTERVIEW_YLA","03","แบบสัมภาษณ์และประเมิน YLA","ใช้บันทึกผลสัมภาษณ์และการประเมิน YLA"],["FORM_04_CHAIR_NOMINEE","04","แบบเสนอผู้สมัครประธานหลัง YLA","ใช้เสนอรายชื่อหลังผ่านกระบวนการ YLA"]]],["การเลือกตั้งและแต่งตั้ง",[["FORM_05_ELECTION_RULES","05","แนวปฏิบัติการเลือกตั้ง","คู่มือและกติกาการเลือกตั้ง"],["FORM_06_ELECTION_RESULT","06","แบบบันทึกและรับรองผลการเลือกตั้ง","ใช้บันทึกและรับรองผลการเลือกตั้ง"],["FORM_07_ELECTION_COMPLAINT","07","แบบร้องเรียนหรือคัดค้านการเลือกตั้ง","ใช้ยื่นและติดตามเรื่องร้องเรียน"],["FORM_08_APPOINTMENT_ROSTER","08","บัญชีรายชื่อเสนอแต่งตั้ง","ใช้จัดทำบัญชีรายชื่อเพื่อเสนอแต่งตั้ง"]]],["โครงการและกิจกรรม",[["FORM_09_ACTIVITY_APPROVAL","09","แบบขออนุมัติจัดกิจกรรม","ใช้ขออนุมัติกิจกรรมก่อนดำเนินงาน"],["FORM_09_1_PROJECT_PROPOSAL","09.1","แบบเสนอโครงการ","ใช้จัดทำข้อเสนอโครงการตามแบบโรงเรียน"],["FORM_10_PROJECT_REPORT","10","แบบสรุปผลโครงการหรือกิจกรรม","ใช้สรุปผลหลังเสร็จสิ้นโครงการ"],["FORM_12_CALENDAR","12","แผนงานและปฏิทินกิจกรรม","ใช้วางแผนงานและกำหนดการกิจกรรม"]]],["การประชุม การติดตามงาน และการบริหารสมาชิก",[["FORM_11_MEETING_MINUTES","11","ระเบียบวาระและรายงานการประชุม","ใช้เตรียมวาระและบันทึกมติการประชุม"],["FORM_13_INCIDENT","13","แบบรายงานเหตุหรือพฤติกรรม","ใช้รายงานเหตุและพฤติกรรมที่ต้องติดตาม"],["FORM_14_RESIGNATION","14","แบบลาออกจากสภานักเรียน","ใช้ยื่นลาออกจากตำแหน่ง"],["FORM_15_REPLACEMENT","15","แบบเสนอแต่งตั้งทดแทนหรือปรับฝ่าย","ใช้เสนอการทดแทนหรือปรับฝ่าย"],["FORM_19_WORK_TRACKING","19","แบบติดตามงานของฝ่าย","ใช้ติดตามงานค้างและผลการส่งมอบงาน"]]],["การเงินและทรัพย์สิน",[["FORM_16_MEMBER_FINANCE","16","ทะเบียนการเงินรายบุคคล","ใช้บันทึกข้อมูลการเงินรายบุคคลตามสิทธิ์"],["FORM_17_ACTIVITY_FINANCE","17","สรุปบัญชีรับ–จ่ายกิจกรรม","ใช้สรุปการเงินของกิจกรรมแยกจากเงินสมาชิก"],["FORM_18_ASSET_REGISTER","18","ทะเบียนทรัพย์สินและระบบดิจิทัล","ใช้บันทึกทรัพย์สินและสิทธิ์ระบบ"],["FORM_23_PARENT_FINANCE_CONSENT","23","แบบยินยอมผู้ปกครองด้านการเงิน","ใช้ขอความยินยอมด้านการเงิน"]]],["วินัย การสิ้นสุดวาระ และบัตรประจำตัว",[["FORM_20_FINAL_AGREEMENT","20","แบบข้อตกลงกรณี 50 คะแนน","ใช้จัดทำข้อตกลงปรับปรุงการปฏิบัติหน้าที่"],["FORM_21_HANDOVER","21","แบบส่งมอบงานเมื่อสิ้นสุดวาระ","ใช้ส่งมอบเอกสาร ทรัพย์สิน และงานค้าง"],["FORM_22_COUNCIL_CARD_REGISTER","22","ทะเบียนบัตรประจำตัวสภานักเรียน","ใช้ติดตามการออกและคืนบัตรประจำตัว"]]],["เอกสารรับรอง ผู้ปกครอง และการแก้ไขระเบียบ",[["FORM_24_REGULATION_AMENDMENT","24","แบบเสนอแก้ไขเพิ่มเติมระเบียบ","ใช้เสนอแก้ไขระเบียบผ่านกระบวนการโรงเรียน"],["FORM_25_PARTICIPATION_CERTIFICATE","25","หนังสือรับรองการเข้าร่วมกิจกรรม","ใช้รับรองการเข้าร่วมกิจกรรมตามข้อเท็จจริง"],["FORM_26_PARENT_PERMISSION","26","ใบอนุญาตผู้ปกครอง","ใช้ขออนุญาตผู้ปกครองสำหรับกิจกรรม"]]],["การประเมินและการรับรองการปฏิบัติหน้าที่",[["FORM_27_MEMBER_PERFORMANCE_EVALUATION","27","แบบประเมินการปฏิบัติหน้าที่","ใช้ประเมินผลการปฏิบัติหน้าที่สมาชิก"],["FORM_28_ATTENDANCE_LEAVE_REGISTER","28","แบบบันทึกการเข้าร่วมและการลา","ใช้บันทึกการเข้าร่วม ประชุม กิจกรรม ภารกิจ และการลา"],["FORM_29_ABSENCE_IMPROVEMENT_AGREEMENT","29","แบบติดตามการขาดและข้อตกลง","ใช้ติดตามการขาดและข้อตกลงปรับปรุง"],["FORM_30_CERTIFICATE_ELIGIBILITY","30","สิทธิรับเกียรติบัตรและหนังสือรับรอง","ใช้ตรวจสอบสิทธิและหลักฐานก่อนออกเอกสารรับรอง"]]]],Po=[["YLA-00","ภาพรวมและสารบัญ","จุดเริ่มต้นสำหรับดูโครงสร้างชุดเอกสาร YLA"],["YLA-01","โครงการกิจกรรมเสริมทักษะภาวะผู้นำ","รายละเอียดโครงการและวัตถุประสงค์ของ YLA"],["YLA-02","กำหนดการดำเนินกิจกรรม","กำหนดการและลำดับการดำเนินกิจกรรม"],["YLA-03","คู่มือการดำเนินกิจกรรมและฐาน","แนวทางดำเนินกิจกรรมและภารกิจแต่ละฐาน"],["YLA-04","แบบบันทึกการเข้าร่วมและภารกิจ","บันทึกการเข้าร่วมและการทำภารกิจ"],["YLA-05","แบบประเมินศักยภาพรายบุคคล","ประเมินศักยภาพและพัฒนาการของผู้เข้าร่วม"],["YLA-06","สรุปผลและข้อเสนอการจัดฝ่าย","สรุปผลเพื่อประกอบการจัดสมาชิกลงฝ่าย"],["YLA-07","รายงานผลการดำเนินกิจกรรม","รายงานผลหลังจบกิจกรรม YLA"],["YLA-08","สมุดค่ายผู้เข้าร่วมกิจกรรม YLA","สมุดงานและบันทึกประสบการณ์ของผู้เข้าร่วม"],["YLA-09","ใบเสนอโครงการกิจกรรม YLA","ข้อเสนอโครงการ YLA ตามแบบโรงเรียน"],["YLA-10","ใบสรุปผลโครงการกิจกรรม YLA","สรุปผลโครงการ YLA สำหรับจัดเก็บและตรวจสอบ"]],Oo=[["ACT-01","การเลือกตั้งประธานสภานักเรียน","school_led","ดำเนินการเลือกตั้งอย่างเป็นธรรม โปร่งใส และตรวจสอบได้"],["ACT-02","เสริมทักษะการดำเนินการจัดกิจกรรมและการเขียนใบโครงการ","school_led","ฝึกคิดกิจกรรม วางแผน งบประมาณ เขียนใบโครงการ ประเมิน และสรุปผล"],["ACT-03","เสริมทักษะด้านการสื่อสารต่อหน้าสาธารณะ","school_led","ฝึกการประกาศ การเป็นพิธีกร การชี้แจงกติกา และการนำเสนอ"],["ACT-04","เสริมทักษะด้านสื่อสร้างสรรค์","school_led","พัฒนาทักษะการผลิตสื่อดิจิทัลและการใช้ AI อย่างรับผิดชอบ"],["ACT-05","ส่งเสริมคุณธรรมและจริยธรรม","school_led","พัฒนาความรับผิดชอบ ความซื่อสัตย์ ความยุติธรรม อามานะฮ์ และจริยธรรม"],["ACT-08","ฟุตซอลสานสัมพันธ์ภายใน","council_led","การแข่งขันฟุตซอลนักเรียนชาย พร้อมทะเบียนเงินประกันทีมและการบริหารการแข่งขัน"],["ACT-09","กีฬาสานสัมพันธ์หอพัก","council_led","กิจกรรมกีฬาสำหรับนักเรียนหญิงหอพัก เช่น วอลเลย์บอล แชร์บอล และกีฬาพื้นบ้าน"]],Fo=Bo.flatMap(([e,t])=>t.map(([r,n,l,i])=>({key:r,code:n,title:l,description:i,group:e}))),or={forms:{eyebrow:"เอกสารและแบบฟอร์มต่าง ๆ",title:"ศูนย์เอกสารและแบบฟอร์ม",description:"ค้นหาแบบฟอร์มตามระเบียบ 01–30 และเปิดรายการที่เกี่ยวข้องได้จากหน้าเดียว",sourceTab:"t.yq1xlf88ro0s",sourceLabel:"เปิดแท็บเอกสารและแบบฟอร์มต้นฉบับ",items:Fo},yla:{eyebrow:"กิจกรรม YLA",title:"ชุดเอกสารกิจกรรม YLA",description:"รวมเอกสาร Youth Leadership For Azizstan ตั้งแต่การเตรียมงาน การเข้าร่วม การประเมิน จนถึงสรุปผล",sourceTab:"t.gq6dk28nkqg8",sourceLabel:"เปิดแท็บกิจกรรม YLA ต้นฉบับ",items:Po.map(([e,t,r])=>({code:e,title:t,description:r,group:"ชุดเอกสาร YLA"}))},activityDocs:{eyebrow:"โครงการและกิจกรรมอื่น ๆ",title:"ทะเบียนโครงการและกิจกรรม",description:"ดูประเภทกิจกรรม เจ้าของกิจกรรม และชุดเอกสารที่ควรใช้ตั้งแต่ก่อนเริ่มงานจนถึงสรุปผล",sourceTab:"t.xjmanckvqq6a",sourceLabel:"เปิดแท็บโครงการและกิจกรรมต้นฉบับ",items:Oo.map(([e,t,r,n])=>({code:e,title:t,description:n,group:r==="council_led"?"สภาเป็นผู้ริเริ่ม/รับผิดชอบหลัก":"โรงเรียนหรือฝ่ายงานเป็นผู้รับผิดชอบหลัก",ownership:r}))}},Jr=e=>`${Mo}?tab=${e}`;function fr({kind:e,esc:t,canOpenDocs:r=!1}){const n=or[e]??or.forms,l=n.items.map(i=>`
    <article class="council-resource-card rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3" data-resource-card data-resource-search="${t([i.code,i.title,i.description,i.group].filter(Boolean).join(" "))}">
      <div class="flex items-start gap-3">
        <span class="flex-shrink-0 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] px-2.5 py-1 text-xs font-black">${t(i.code)}</span>
        <div class="min-w-0 flex-1">
          <h2 class="text-sm font-bold text-[var(--ink)]">${t(i.title)}</h2>
          <p class="text-xs text-[var(--muted)] mt-1">${t(i.description)}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 items-center text-[0.6875rem]">
        ${i.group?`<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${t(i.group)}</span>`:""}
        ${i.ownership?`<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${i.ownership==="council_led"?"สภานำ":"โรงเรียนนำ"}</span>`:""}
      </div>
      <details class="border-t border-[var(--line-soft)] pt-2">
        <summary class="cursor-pointer text-xs font-bold text-[var(--primary)]">ดูแนวทางการใช้งาน</summary>
        <p class="text-xs text-[var(--ink-2)] leading-6 mt-2">เอกสารนี้เป็นส่วนหนึ่งของชุดเอกสารสภานักเรียน สามารถใช้เป็นรายการอ้างอิงในการจัดทำงานจริง และควรบันทึกข้อมูลตามข้อเท็จจริงของกิจกรรมหรือกระบวนการนั้น</p>
      </details>
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" class="btn-print-council-resource text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-resource-code="${t(i.code)}" data-resource-title="${t(i.title)}" data-resource-description="${t(i.description)}">🖨️ พิมพ์รายการ</button>
        <a href="${t(Jr(n.sourceTab))}" target="_blank" rel="noopener" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]">🔗 เปิดต้นฉบับ</a>
        ${r&&e==="forms"&&["FORM_09_ACTIVITY_APPROVAL","FORM_09_1_PROJECT_PROPOSAL"].includes(i.key)?'<button type="button" class="goto-view text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white" data-view="docs">เปิดงานเอกสารโครงการ →</button>':""}
      </div>
    </article>`).join("");return`<div class="space-y-4">
    <section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5">
      <p class="text-xs font-bold text-[var(--primary)]">📚 ${t(n.eyebrow)}</p>
      <h1 class="text-xl font-bold text-[var(--ink)] mt-1">${t(n.title)}</h1>
      <p class="text-sm text-[var(--muted)] mt-2 leading-6">${t(n.description)}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        ${Object.entries(or).map(([i,a])=>`<button type="button" class="council-resource-kind-btn px-3 py-2 rounded-xl text-xs font-bold ${i===e?"bg-[var(--primary)] text-white":"border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--surface-2)]"}" data-resource-kind="${i}">${t(a.eyebrow)}</button>`).join("")}
        <a href="${t(Jr(n.sourceTab))}" target="_blank" rel="noopener" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🔗 ดูเอกสารต้นฉบับ</a>
      </div>
    </section>
    <div class="flex gap-2">
      <input id="council-resource-search" type="search" placeholder="ค้นหารหัส ชื่อเอกสาร กิจกรรม หรือคำอธิบาย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="button" id="council-resource-clear" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ล้าง</button>
    </div>
    <p id="council-resource-count" class="text-xs text-[var(--muted)]">แสดง ${n.items.length} รายการ</p>
    <div id="council-resource-list" class="grid grid-cols-1 lg:grid-cols-2 gap-3">${l}</div>
  </div>`}function Yo({onKindChange:e,esc:t}){document.querySelectorAll(".council-resource-kind-btn").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.resourceKind))});const r=document.getElementById("council-resource-search"),n=document.getElementById("council-resource-clear"),l=[...document.querySelectorAll("[data-resource-card]")],i=document.getElementById("council-resource-count"),a=()=>{const s=String((r==null?void 0:r.value)||"").trim().toLocaleLowerCase();let c=0;l.forEach(m=>{const p=!s||m.dataset.resourceSearch.toLocaleLowerCase().includes(s);m.classList.toggle("hidden",!p),p&&(c+=1)}),i&&(i.textContent=`แสดง ${c} รายการ${s?" จากทั้งหมด "+l.length+" รายการ":""}`)};r==null||r.addEventListener("input",a),n==null||n.addEventListener("click",()=>{r&&(r.value=""),a(),r==null||r.focus()}),document.querySelectorAll(".btn-print-council-resource").forEach(s=>{s.addEventListener("click",()=>zo({code:s.dataset.resourceCode,title:s.dataset.resourceTitle,description:s.dataset.resourceDescription,esc:t}))})}function zo({code:e,title:t,description:r,esc:n}){Te(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${n(t)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:36px;line-height:1.8}h1{font-size:24px;margin:8px 0 20px}.code{color:#7b2d2d;font-weight:700}.meta{border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:12px 0;margin:16px 0}small{color:#666}</style></head><body><small>เอกสารสภานักเรียน โรงเรียนมูลนิธิอาซิซสถาน</small><p class="code">${n(e)}</p><h1>${n(t)}</h1><div class="meta">${n(r)}</div><p>รายการนี้อยู่ในชุดเอกสารอ้างอิงของสภานักเรียน โปรดเปิดต้นฉบับหรือเอกสารฉบับที่โรงเรียนอนุมัติ เพื่อกรอกข้อมูลและใช้งานตามกระบวนการที่กำหนด</p></body></html>`)}const o=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),qr=document.getElementById("council-content"),D={M:"ชาย",W:"หญิง"},gr="ยังไม่ระบุฝ่าย",Ie=e=>e==="ชาย"||e==="M"?"M":e==="หญิง"||e==="W"?"W":null,G=(e,t="w-10 h-12")=>e!=null&&e.photo_url||e!=null&&e.image_url?`<img src="${o(e.photo_url||e.image_url)}" class="${t} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`:`<div class="${t} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${o(((e==null?void 0:e.full_name)||"?").charAt(0))}</div>`,jr={pending:"รอดำเนินการ",interview_scheduled:"นัดสัมภาษณ์แล้ว",interviewed:"สัมภาษณ์แล้ว",candidate:"ผู้สมัครเลือกตั้ง",appointed:"ได้รับแต่งตั้ง",rejected:"ไม่ผ่าน"};let d=null;const Ca=new URLSearchParams(window.location.search),La=Ca.get("view"),Go=!!La;let Be=La||"overview";function Fe(e,{preserveDetail:t=!1}={}){Be=e;const r=new URL(window.location.href);r.searchParams.set("view",e),t||(r.searchParams.delete("clause"),r.searchParams.delete("version")),window.history.replaceState(null,"",r)}let Yt=!1,W=1,O={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},Re=null,he=null;const Ta=5;function pt(){var e;return Number((e=d==null?void 0:d.cfg)==null?void 0:e.council_min_certificates)||Ta}const Na="ม.3,ม.4,ม.5";function qa(){var e;return String(((e=d==null?void 0:d.cfg)==null?void 0:e.council_eligible_grade_levels)||Na).split(/[,\n]/).map(t=>t.trim()).filter(Boolean)}function zt(e){const t=tr(e);return!!t&&qa().includes(t)}function yr(e){const t=qa().join(", "),r=tr(e);return r?`ไม่สามารถสมัครสภานักเรียนได้ การรับสมัครครั้งนี้เปิดสำหรับระดับ ${t} เท่านั้น ระดับชั้นปัจจุบันของคุณ: ${r}`:"ไม่สามารถสมัครสภานักเรียนได้ ไม่พบระดับชั้นจากห้องสามัญหรือห้องศาสนา กรุณาติดต่อผู้ดูแลระบบ"}function mt(e){return Array.from({length:e},()=>({file:null,title:"",previewUrl:null,isPdf:!1}))}let Q=mt(Ta),Xe=!1,Z=null;function jt(){Yt=!1,W=1,O={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},Re=null,he&&URL.revokeObjectURL(he),he=null,Q.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),Q=mt(pt()),Xe=!1}function Rr(){return d!=null&&d.student?`council_apply_draft_${d.student.id}`:null}function de(){const e=Rr();if(e)try{localStorage.setItem(e,JSON.stringify({step:W,data:O,certTitles:Q.map(t=>t.title),savedAt:Date.now()}))}catch{}}function Vo(){const e=Rr();if(!e)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function Kr(){const e=Rr();e&&localStorage.removeItem(e)}let bt=null,_e=null,R=null,Ze=null,qe=null,vt=null,ke="all",se="M",ht="",Ce="",Ye="",ze="",He="M",Qe="all",Gt="",Je="M",Ke="ready",Vt="",me=null,re=null,hr=null;const ne={};let et=null,Ne=!1;const _r={};let Y=null,ue=[],B=null;const kt=()=>ue.find(e=>String(e.id)===String(B))??null,$r=()=>{var e;return["active","upcoming"].includes((e=kt())==null?void 0:e.status)},te={M:null,W:null},Ge={M:null,W:null};let H="M",Et=null,ir=!1,ae=null;const $e={};let K=null,ge=null,V=null,Ut=null,Rt=!1,wr=!1,ie=null,kr=null;const tt={},Dr={},xt={},Mr={};let Wt=null,Ee=null,Ae=null,Dt=null,Mt="all",Bt=!1,ut="general",le=null,we=null;const Xr=[{id:"general",label:"ทั่วไป"},{id:"positions",label:"ตำแหน่ง"},{id:"criteria",label:"เกณฑ์และข้อความ"},{id:"modules",label:"โมดูล"}],Uo={candidates:"ว่าที่ประธาน / ผลเลือกตั้ง",news:"ประกาศ",interview:"ตารางสัมภาษณ์",appoint:"แต่งตั้งตรง",chairteam:"เสนอคณะทำงาน",chairtasks:"มอบหมายงาน",evaluate:"ประเมินการปฏิบัติหน้าที่",certissue:"ออกเกียรติบัตร",docs:"เอกสารโครงการ",perms:"มอบสิทธิ์ครู (ยังไม่สร้างหน้า)"};function Br(){try{return{...JSON.parse(d.cfg.council_modules||"{}")}}catch{return{}}}async function Pr(){le=await io().catch(()=>[]),g()}async function Wo(){we=await _a().catch(()=>[]),g()}const Ho={apply:{title:"📝 สมัครสภานักเรียน",subtabs:[{id:"new",label:"สมัครตำแหน่งใหม่"},{id:"mine",label:"ใบสมัครของฉัน"}]},election:{title:"🗳️ การเลือกตั้งประธานสภา",subtabs:[{id:"status",label:"สถานะการเลือกตั้ง"}]}};async function Qo(){var _,L;dn();const{data:{session:e}}=await ur.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:t}=await ur.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single(),r=t==null?void 0:t.role,n=r==="admin"||(t==null?void 0:t.is_also_admin)===!0,i={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[r]||"index.html";document.getElementById("council-back-btn-desktop").href=i,document.getElementById("council-back-btn-mobile").href=i;const[a,s,c]=await Promise.all([Sn(),qt(),pr()]);ue=c;const m=Ca.get("term"),p=ue.find(C=>String(C.id)===m)||ue.find(C=>C.status==="active")||ue.find(C=>C.status==="upcoming")||ue[0];B=(p==null?void 0:p.id)??null;const u=Number((p==null?void 0:p.academic_year)||a.academicYear)||new Date().getFullYear()+543,[x,b]=await Promise.all([Ue(null,B),Oe(null,B)]);Ra(a);let v=null,h=[],$=[];r==="student"&&(v=await un().catch(()=>null),Et=v?await ga().catch(()=>null):null);const w=(a.council_test_student_codes||"").split(/[\s,]+/).map(C=>C.trim()).filter(Boolean),T=r==="student"&&!!v&&w.includes(v.student_code);if(a.council_visible_to_all==="false"&&!n&&!T){Or(!1),qr.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`;return}r==="student"&&v&&([h,$]=await Promise.all([Tr(v.id,B).catch(()=>[]),ya(v.id,B).catch(()=>[])]));let E=null,A=[],S=[],N=[];r==="teacher"&&(E=await pn(e.user.id).catch(()=>null),E&&(A=(await mn(E.id).catch(()=>[])).filter(j=>j.category==="สามัญ").map(j=>j.main_room),[S,N]=await Promise.all([ha(A).catch(()=>[]),_a().catch(()=>[])])));const q=r==="student"&&$.some(C=>{var j;return C.status==="active"&&((j=C.council_positions)==null?void 0:j.is_elected)}),M=q||$.some(C=>C.status==="active"&&C.can_create_activities),z=((L=(_=$.find(C=>{var j;return C.status==="active"&&((j=C.council_positions)==null?void 0:j.is_elected)}))==null?void 0:_.council_positions)==null?void 0:L.gender)??null,be=r==="teacher"&&!!E&&(E.position==="council_advisor"||(E.positions??[]).includes("council_advisor")),ve=r==="teacher"&&!!E&&(E.position==="student_affairs_head"||(E.positions??[]).includes("student_affairs_head")),X=r==="teacher"&&!!E&&(E.position==="school_director"||(E.positions??[]).includes("school_director")),y=r==="teacher"&&!!E&&(E.position==="executive"||(E.positions??[]).includes("executive"));d={role:r,isAdmin:n,isChair:q,isCouncilAdvisor:be,isStudentAffairsHead:ve,isSchoolDirector:X,isExecutive:y,canCreateActivities:M,chairGender:z,student:v,applications:h,membership:$,positions:s,members:x,elections:b,cfg:a,teacher:E,homeroomMainRooms:A,pendingEndorsements:S,endorsementPhrases:N},Y=u,r==="teacher"&&S.length&&!Go&&Fe("endorse"),g()}async function ja(){d!=null&&d.student&&(d.applications=await Tr(d.student.id,B).catch(()=>d.applications))}async function Jo(){d!=null&&d.teacher&&(d.pendingEndorsements=await ha(d.homeroomMainRooms).catch(()=>d.pendingEndorsements))}async function Zr(e){var s,c;const t=ue.find(m=>String(m.id)===String(e));if(!t||String(t.id)===String(B))return;B=t.id,Y=Number(t.academic_year);const[r,n,l,i]=await Promise.all([Ue(null,t.id).catch(()=>[]),Oe(null,t.id).catch(()=>[]),d.student?Tr(d.student.id,t.id).catch(()=>[]):Promise.resolve([]),d.student?ya(d.student.id,t.id).catch(()=>[]):Promise.resolve([])]);d.members=r,d.elections=n,d.student&&(d.applications=l,d.membership=i,d.isChair=i.some(m=>{var p;return m.status==="active"&&((p=m.council_positions)==null?void 0:p.is_elected)}),d.canCreateActivities=d.isChair||i.some(m=>m.status==="active"&&m.can_create_activities),d.chairGender=((c=(s=i.find(m=>{var p;return m.status==="active"&&((p=m.council_positions)==null?void 0:p.is_elected)}))==null?void 0:s.council_positions)==null?void 0:c.gender)??null),R=null,ae=null,K=null,ee=null,te.M=null,te.W=null,Ge.M=null,Ge.W=null,delete ne.M,delete ne.W;const a=new URL(window.location.href);a.searchParams.set("term",t.id),history.replaceState(null,"",a),g()}const Er={draft:"ร่าง",upcoming:"วาระใหม่",active:"กำลังดำรงตำแหน่ง",closed:"หมดวาระ"};function Ko(){const e=kt();if(!e)return"";const t=e.status==="active"?"bg-[var(--ok-soft)] text-[#106143] border-[var(--ok-soft-line)]":e.status==="upcoming"?"bg-[var(--gold-soft)] text-[var(--gold-ink)] border-[var(--gold-soft-line)]":"bg-[var(--surface-2)] text-[var(--muted)] border-[var(--line)]";return`<div class="mb-4 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 flex flex-col sm:flex-row sm:items-center gap-2">
    <div class="min-w-0 flex-1"><p class="text-[0.6875rem] font-bold text-[var(--muted)]">วาระที่กำลังดู</p><p class="text-sm font-bold text-[var(--ink)] truncate">${o(e.term_label)}</p></div>
    <span class="self-start sm:self-auto px-2.5 py-1 rounded-full border text-[0.6875rem] font-bold ${t}">${o(Er[e.status]||e.status)}</span>
    <select id="council-term-switcher" class="border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
      ${ue.map(r=>`<option value="${r.id}" ${String(r.id)===String(e.id)?"selected":""}>${o(r.term_label)} — ${o(Er[r.status]||r.status)}</option>`).join("")}
    </select>
  </div>`}function Or(e){document.getElementById("council-sidebar").style.display=e?"":"none",document.getElementById("council-bottom-tabs").style.display=e?"":"none"}function Ra(e){const t=e.council_name||"ระบบสภานักเรียน";if(document.title=t,document.getElementById("council-title").textContent=t,document.getElementById("council-title-mobile").textContent=t,e.council_logo_url){const r=document.getElementById("council-logo");r.src=e.council_logo_url,r.classList.remove("hidden"),document.getElementById("council-logo-fallback").classList.add("hidden")}}const lr={main:{label:"หน้าหลัก",icon:"🏠"},council:{label:"งานสภา",icon:"👥"},resources:{label:"เอกสาร/กิจกรรม",icon:"📚"},election:{label:"เลือกตั้ง",icon:"🗳️"},teacherWork:{label:"งานครู",icon:"📋"},system:{label:"ระบบ",icon:"⚙️"}};function Xo(){const e=[{id:"overview",icon:"🏠",label:"หน้าหลัก",group:"main"}];e.push({id:"news",icon:"📣",label:"ประกาศ",group:"council"}),e.push({id:"roster",icon:"🏛️",label:"สภาของเรา",group:"council"}),e.push({id:"activities",icon:"📅",label:"กิจกรรม/การเข้าร่วม",group:"council"}),(d.isChair||d.isAdmin||d.isCouncilAdvisor)&&e.push({id:"chairteam",icon:"👔",label:"เสนอคณะทำงาน",group:"council"}),d.isChair&&e.push({id:"assignments",icon:"📌",label:"มอบหมายงาน",group:"council"}),d.membership.length&&e.push({id:"myduty",icon:"🎫",label:"หน้าที่/งานของฉัน",group:"council"}),d.membership.length&&e.push({id:"mysummary",icon:"📊",label:"สรุปของฉัน",group:"council"}),d.membership.length&&d.cfg.council_require_peer_endorsement==="true"&&e.push({id:"peerEndorse",icon:"✋",label:"รับรองผู้สมัคร (สภา)",group:"council"}),e.push({id:"regulation",icon:"📚",label:"ระเบียบ/ประกาศ",group:"resources"}),e.push({id:"forms",icon:"🗂️",label:"เอกสารและแบบฟอร์ม",group:"resources"}),e.push({id:"yla",icon:"🌱",label:"กิจกรรม YLA",group:"resources"}),e.push({id:"activityDocs",icon:"🧩",label:"โครงการและกิจกรรม",group:"resources"}),e.push({id:"candidates",icon:"🗳️",label:"ว่าที่ประธาน",group:"election"}),d.role==="student"&&Et&&e.push({id:"myCampaign",icon:"📣",label:"บอร์ดหาเสียงของฉัน",group:"election"}),e.push({id:"result",icon:"📊",label:"ผลเลือกตั้ง",group:"election"}),d.role==="teacher"&&d.pendingEndorsements.length&&e.push({id:"endorse",icon:"✋",label:"รับรองผู้สมัคร",badge:d.pendingEndorsements.length,group:"teacherWork"});const t=d.isAdmin||d.isCouncilAdvisor;t&&e.push({id:"apps",icon:"📋",label:"ใบสมัคร",group:"teacherWork"}),t&&e.push({id:"interview",icon:"🗓️",label:"สัมภาษณ์",group:"teacherWork"}),t&&e.push({id:"appoint",icon:"✅",label:"แต่งตั้งสมาชิก",group:"teacherWork"}),t&&e.push({id:"candidateAdmin",icon:"🗳️",label:"จัดการผู้สมัครประธาน",group:"teacherWork"}),t&&e.push({id:"printCenter",icon:"🖨️",label:"พิมพ์ใบรายชื่อ",group:"teacherWork"}),(t||d.membership.length)&&e.push({id:"eval",icon:"🎖️",label:"ประเมิน/เกียรติบัตร",group:"teacherWork"}),(t||d.isChair||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"docs",icon:"📄",label:"งานเอกสารโครงการ",group:"teacherWork"}),(d.isAdmin||d.isExecutive)&&e.push({id:"dashboard",icon:"📊",label:"ภาพรวม",group:"system"}),t&&e.push({id:"settings",icon:"⚙️",label:"ตั้งค่า",group:"system"}),t&&e.push({id:"termAdmin",icon:"🗓️",label:"จัดการวาระ",group:"system"}),d.isAdmin&&e.push({id:"perms",icon:"🔑",label:"มอบสิทธิ์",group:"system"}),(d.isCouncilAdvisor||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"myCouncilProfile",icon:"✍️",label:"โปรไฟล์ของฉัน",group:"system"});const r=Br(),n=new Set;return r.candidates===!1&&(n.add("candidates"),n.add("result")),r.news===!1&&n.add("news"),r.evaluate===!1&&n.add("eval"),r.docs===!1&&n.add("docs"),r.interview===!1&&n.add("interview"),r.appoint===!1&&n.add("appoint"),r.chairteam===!1&&n.add("chairteam"),r.chairtasks===!1&&n.add("assignments"),e.filter(l=>!n.has(l.id))}let De=null;function Zo(e){var i;const t=Object.keys(lr);document.getElementById("council-sidebar-nav").innerHTML=t.map(a=>{const s=e.filter(c=>c.group===a);return s.length?`
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${o(lr[a].label)}</p>
        ${s.map(c=>`
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${c.id===Be?"bg-[var(--hero-3)] text-white":"text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white"}" data-view="${c.id}">
            <span>${c.icon}</span> ${o(c.label)}
            ${c.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${c.badge}</span>`:""}
          </button>`).join("")}
      </div>`:""}).join("");const r=t.map(a=>({id:a,...lr[a],items:e.filter(s=>s.group===a)})).filter(a=>a.items.length),n=(i=r.find(a=>a.items.some(s=>s.id===Be))||r[0])==null?void 0:i.id;document.getElementById("council-bottom-tabs").innerHTML=`<div class="flex overflow-x-auto">${r.map(a=>{const s=a.id===n,c=a.items.reduce((m,p)=>m+(p.badge||0),0);return`
    <button type="button" class="council-nav-group-btn relative flex-1 min-w-[68px] shrink-0 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${s?"text-[var(--primary)]":"text-[var(--muted)]"}" data-group="${a.id}">
      <span class="text-xl">${a.icon}</span>
      <span class="text-[0.625rem] font-medium">${o(a.label)}</span>
      ${c?`<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${c}</span>`:""}
    </button>`}).join("")}</div>`,document.querySelectorAll(".council-nav-link").forEach(a=>{a.addEventListener("click",()=>{Fe(a.dataset.view),g()})}),document.querySelectorAll(".council-nav-group-btn").forEach(a=>{a.addEventListener("click",()=>{const s=r.find(c=>c.id===a.dataset.group);s.items.length===1?(Fe(s.items[0].id),De=null,g()):(De=De===s.id?null:s.id,ea(e))})});const l=e.find(a=>a.id===Be);document.getElementById("council-view-title").textContent=(l==null?void 0:l.label)??"หน้าหลัก",ea(e)}function ea(e){const t=document.getElementById("council-mobile-sheet");if(!t)return;if(!De){t.innerHTML="";return}const r=e.filter(n=>n.group===De);t.innerHTML=`
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${r.map((n,l)=>`
            <button type="button" class="mobile-sheet-item text-left border ${n.id===Be?"border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]":"border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]"}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${n.id}">
              <span class="text-base">${n.icon}</span><span>${o(n.label)}</span>
              ${n.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${n.badge}</span>`:""}
            </button>`).join("")}
        </div>
      </div>
    </div>`,document.getElementById("mobile-sheet-backdrop").addEventListener("click",n=>{n.target.id==="mobile-sheet-backdrop"&&(De=null,g())}),document.querySelectorAll(".mobile-sheet-item").forEach(n=>{n.addEventListener("click",()=>{Fe(n.dataset.view),De=null,g()})})}function ei(){const{applications:e,membership:t}=d;return!e.length&&!t.length?"":`
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${t.map(r=>{var n,l;return`
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${o(((n=r.council_positions)==null?void 0:n.position_name)??"—")} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${o(D[(l=r.council_positions)==null?void 0:l.gender]??"")})</span></p>
          </div>`}).join("")}
        ${e.map(r=>{var n;return`
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${o(((n=r.council_positions)==null?void 0:n.position_name)??"—")}</p>
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(r.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${o(jr[r.status]??r.status)}</span>
          </div>`}).join("")}
      </div>
    </div>`}function _t(e,t,r,n){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${e}</p>
        ${r?`<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${r}">${o(n)} →</button>`:""}
      </div>
      ${t}
    </div>`}function ti(){return d.isChair?["ยินดีต้อนรับประธานสภานักเรียน","ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่"]:d.membership.length?["ยินดีต้อนรับสมาชิกสภานักเรียน","ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ"]:d.isCouncilAdvisor?["ครูที่ปรึกษาสภานักเรียน","ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา"]:d.isAdmin?["จัดการระบบสภานักเรียน","ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล"]:d.role==="teacher"&&d.pendingEndorsements.length?["รับรองผู้สมัครสภานักเรียน","ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ"]:["ระบบสภานักเรียน","ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน"]}function ri(){const e=d.cfg.council_featured_phase;if(e)return e;const t=new Date,r=d.cfg.council_apply_opens_at?new Date(d.cfg.council_apply_opens_at):null,n=d.cfg.council_apply_closes_at?new Date(d.cfg.council_apply_closes_at):null;return r&&n&&t>=r&&t<=n?"apply":d.elections.some(i=>i.opens_at&&i.closes_at&&t>=new Date(i.opens_at)&&t<=new Date(i.closes_at))?"election":"none"}function ai(){return d.isChair?"👑 ประธานสภานักเรียน":d.membership.length?"🎫 สมาชิกสภานักเรียน":d.isCouncilAdvisor?"🏫 ครูที่ปรึกษาสภานักเรียน":d.role==="admin"?"🛡️ ผู้ดูแลระบบ (แอดมิน)":d.isAdmin?"🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)":d.role==="teacher"?"👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)":d.role==="student"?"🎓 นักเรียน":"ผู้เยี่ยมชม"}function ni(){const e=d.cfg,t=e.council_term_start_semester&&e.council_term_start_year?`ภาคเรียนที่ ${o(e.council_term_start_semester)}/${o(e.council_term_start_year)} – ภาคเรียนที่ ${o(e.council_term_end_semester||e.council_term_start_semester)}/${o(e.council_term_end_year||e.council_term_start_year)}`:null,r=e.council_visible_to_all!=="false",[n,l]=ti(),i=d.isAdmin||d.isCouncilAdvisor?`
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${r?"bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]":"bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]"}">
      <span>${r?"✅":"🔒"}</span>
      <span>${r?"ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว":"ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น"}</span>
    </div>`:"";return`
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${o(ai())}</span></p>
    ${i}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${t?`<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${t}</span>`:""}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${o(n)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${o(l)}</p>
      ${d.isAdmin||d.isCouncilAdvisor||d.isChair?`
      <div class="flex flex-wrap gap-2 mt-4">
        ${d.isAdmin||d.isCouncilAdvisor?'<button type="button" class="goto-view px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90" data-view="settings">⚙️ ตั้งค่าระบบ</button>':""}
        <a href="council-election.html" target="_blank" class="px-4 py-2 rounded-[10px] bg-white/10 border border-white/25 text-white text-sm font-bold hover:bg-white/20">🗳️ หน้าลงคะแนน</a>
      </div>`:""}
    </div>`}function si(){if(ae===null)return Qa(),_t("📅 กิจกรรมประจำปี",'<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>');const e={};ae.forEach(l=>{e[l.status]=(e[l.status]??0)+1});const t=`
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${Ha.map(([l,i,a,s])=>`
        <div class="rounded-[10px] border ${a} p-2 text-center">
          <p class="text-lg font-bold ${s}">${e[l]??0}</p>
          <p class="text-[0.625rem] text-[var(--muted)]">${i}</p>
        </div>`).join("")}
    </div>`,r=[...ae].sort((l,i)=>new Date(l.activity_date||0)-new Date(i.activity_date||0)).slice(0,5),n=r.length?`
    <div class="space-y-0.5">
      ${r.map(l=>{const[i,a,s]=Wa[l.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]"];return`
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${o(l.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${l.activity_date?new Date(l.activity_date).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—"} ${l.owner_text?"· "+o(l.owner_text):""}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${s} ${a}">${i}</span>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>';return _t("📅 กิจกรรมประจำปี",t+n,"activities","ดูทั้งหมด")}function oi(){const e=["M","W"].map(r=>d.members.find(n=>{var l,i;return n.status==="active"&&((l=n.council_positions)==null?void 0:l.gender)===r&&((i=n.council_positions)==null?void 0:i.is_elected)})),t=e.some(Boolean)?`
    <div class="space-y-3">
      ${e.map((r,n)=>{var a,s,c;const l=n===0?"M":"W";if(!r)return`<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${D[l]}</div>`;const i=l==="W";return`
        <div class="flex items-center gap-3 rounded-xl border p-3 ${i?"bg-[var(--pink-soft)] border-[var(--pink-soft-line)]":"bg-[var(--primary-soft)] border-[var(--primary-soft-line)]"}">
          ${G(r.students,"w-12 h-16")}
          <div class="min-w-0">
            <p class="text-[0.6875rem] font-bold ${i?"text-[var(--pink)]":"text-[var(--primary)]"}">${o(((a=r.council_positions)==null?void 0:a.position_name)??"ประธานสภานักเรียนฝ่าย"+D[l])}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((s=r.students)==null?void 0:s.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${o(((c=r.students)==null?void 0:c.main_room)??"")}</p>
          </div>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>';return _t("🏛️ สภานักเรียนชุดปัจจุบัน",t,"roster","ดูโครงสร้าง")}function ii(){if(!d.isAdmin&&!d.isExecutive)return"";if(R===null)return At(),_t("📋 การสมัครสภานักเรียน",'<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p>');const e=R.length,t=R.filter(a=>a.endorsed_at).length,r=R.filter(a=>a.peer_endorsed_at||ot(a)).length,n=R.filter(a=>a.status==="candidate").length,l=(a,s,c)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${c}">${o(a)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${o(s)}</p>
    </div>`,i=`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      ${l(e,"สมัครแล้วทั้งหมด","var(--ink)")}
      ${l(t,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
      ${Le()?l(r,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):l("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
      ${l(n,"ว่าที่สภานักเรียน","var(--primary)")}
    </div>`;return _t("📋 การสมัครสภานักเรียน",i,"dashboard","ดูรายละเอียด")}function Da(){const e=ni(),t=ei(),r=(u,x,b,v)=>`
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${u}">
      <p class="text-2xl mb-1">${x}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${o(b)}</p>
      ${v?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${o(v)}</p>`:""}
    </button>`,n=(u,x,b,v)=>`
    <button type="button" class="flow-entry-btn w-full bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl shadow-[0_4px_14px_rgba(23,32,42,0.15)] p-4 text-left text-white hover:opacity-95 transition flex items-center gap-3" data-flow="${u}">
      <p class="text-3xl flex-shrink-0">${x}</p>
      <div class="min-w-0 flex-1">
        <span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-white/20 mb-1">🔥 ช่วงนี้</span>
        <p class="text-base font-extrabold [text-wrap:pretty]">${o(b)}</p>
        ${v?`<p class="text-xs text-white/85 mt-0.5 [text-wrap:pretty]">${o(v)}</p>`:""}
      </div>
      <span class="text-white/70 flex-shrink-0">→</span>
    </button>`,l=d.elections.length>0,i=l||d.isAdmin,a=d.role==="student"&&zt(d.student),s=l?"การเลือกตั้ง":"ตั้งค่าการเลือกตั้ง",c=l?"":"ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า",m=a&&i?ri():"none";let p="";if(a&&i&&m!=="none"){const u=m==="apply"?n("apply","📝","สมัครสภานักเรียน","เปิดรับสมัครสภานักเรียนวาระใหม่"):r("apply","📝","สมัครสภานักเรียน"),x=m==="election"?n("election","🗳️",s,c||"เปิดใช้งานอยู่ ณ ขณะนี้"):r("election","🗳️",s,c);p=`<div class="space-y-3">${m==="apply"?u+x:x+u}</div>`}else(a||i)&&(p=`
    <div class="grid ${a&&i?"grid-cols-2":"grid-cols-1"} gap-3">
      ${a?r("apply","📝","สมัครสภานักเรียน"):""}
      ${i?r("election","🗳️",s,c):""}
    </div>`);return`<div class="space-y-4">
    ${e}
    ${t}
    ${ii()}
    ${p}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${si()}
      ${oi()}
    </div>
  </div>`}function li(){if(d.role!=="student")return"";if(!d.student)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;const e=Ie(d.student.gender),t=d.positions.filter(i=>i.gender===e),r=new Set(d.applications.filter(i=>i.status!=="rejected").map(i=>i.position_id)),n=t.filter(i=>i.position_name!==gr&&!r.has(i.id));if(!e)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;if(!zt(d.student))return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ${o(yr(d.student))}
      <p class="mt-1 text-xs">${o(d.student.main_room||d.student.religion_room||"ไม่พบข้อมูลห้อง")}</p>
    </div>`;if(!Yt)return`
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${n.length?"":"opacity-50 pointer-events-none"}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${D[e]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${n.length?`เปิดรับ ${n.length} ตำแหน่ง`:"ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)"}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`;const l=Z?di():W===1?ui(n):W===2?pi():W===3?mi():W===4?bi():W===5?vi():xi(e);return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${D[e]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${Z?"":ci()}
      ${l}
    </div>
    ${Xe?fi():""}`}function di(){const e=Ar()[Z.step-1]??"",t=Z.savedAt?new Date(Z.savedAt).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"";return`
    <div class="text-center py-4 space-y-3">
      <p class="text-3xl">📝</p>
      <p class="text-sm font-bold text-[var(--ink)]">พบข้อมูลที่กรอกค้างไว้</p>
      <p class="text-xs text-[var(--muted-2)]">กรอกถึงขั้นตอนที่ ${Z.step}/${Ar().length} · ${o(e)}${t?` · บันทึกล่าสุด ${t}`:""}</p>
      <p class="text-[0.6875rem] text-[var(--gold-ink)] bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-2.5 text-left">⚠️ รูปถ่าย/ไฟล์เกียรติบัตรที่เคยแนบไว้ต้องแนบใหม่อีกครั้ง (เบราว์เซอร์เก็บไฟล์ข้ามการปิดหน้าไม่ได้) ส่วนข้อความอื่นๆ กู้คืนให้ครบ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-draft-discard" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">เริ่มใหม่</button>
        <button type="button" id="btn-apply-draft-resume" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">กู้คืนข้อมูล</button>
      </div>
    </div>`}const ta=["เลือกตำแหน่ง","เกรดเฉลี่ย & แรงจูงใจ","รูปถ่าย","วิดีโอแนะนำตัว","เกียรติบัตร/รางวัล"];function Fr(){return d.cfg.council_require_peer_endorsement==="true"}function Ar(){return Fr()?[...ta,"เลือกพี่สภารับรอง"]:ta}function ci(){const e=Ar();return`
    <div class="flex items-center gap-1.5 mb-3">
      ${e.map((t,r)=>`<div class="flex-1 h-1.5 rounded-full ${r+1<=W?"bg-[var(--primary)]":"bg-[var(--line-soft)]"}"></div>`).join("")}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${W}/${e.length} · ${e[W-1]}</p>`}function ui(e){return`
    <form id="apply-step1-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
        <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— เลือกตำแหน่ง —</option>
          ${e.map(t=>`<option value="${t.id}" ${O.positionId===String(t.id)?"selected":""}>${o(t.position_name)}</option>`).join("")}
        </select>
        ${e.length?"":'<p class="text-xs text-[var(--gold-ink)] mt-1.5">ไม่มีตำแหน่งเปิดรับในขณะนี้</p>'}
      </div>
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${e.length?"":"disabled"}>ถัดไป →</button>
    </form>`}function pi(){const e=d.cfg.council_min_gpa||"2.50",t=d.cfg.council_min_gpa_religious||"2.50";return`
    <form id="apply-step2-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยสามัญ <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaGeneral" type="number" step="0.01" min="0" max="4" required value="${o(O.gpaGeneral)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${o(e)}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยศาสนา <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaReligious" type="number" step="0.01" min="0" max="4" required value="${o(O.gpaReligious)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${o(t)}</p>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
        <textarea name="motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก (อย่างน้อย 10 ตัวอักษร)"
          class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(O.motivation)}</textarea>
      </div>
      <div class="flex gap-2">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function mi(){return`
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${he?`<img src="${he}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />`:""}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`}function bi(){const e=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),t=d.cfg.council_video_max_minutes||"3";return`
    <form id="apply-step4-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ลิงก์วิดีโอแนะนำตัว <span class="text-[var(--bad)]">*</span></label>
        <input name="videoUrl" type="url" required placeholder="https://..." value="${o(O.videoUrl)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ความยาวไม่เกิน ${o(t)} นาที (ลิงก์ YouTube/Google Drive/TikTok ที่เปิดดูได้)</p>
      </div>
      ${e.length?`
        <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3">
          <p class="text-xs font-bold text-[var(--primary-dark)] mb-1.5">🎬 หัวข้อที่ควรพูดถึงในวิดีโอ</p>
          <ul class="text-xs text-[var(--ink-2)] space-y-1 list-disc list-inside">
            ${e.map(r=>`<li>${o(r)}</li>`).join("")}
          </ul>
        </div>`:""}
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function vi(){const e=Q.filter(n=>n.file&&n.title.trim()).length,t=pt(),r=(n,l)=>`
    <div class="rounded-xl border border-[var(--line)] p-3 space-y-2" data-cert-idx="${l}">
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold text-[var(--muted)]">รายการที่ ${l+1}</p>
        ${Q.length>1?`<button type="button" class="btn-remove-cert text-xs text-[var(--bad)]" data-idx="${l}">🗑️ ลบ</button>`:""}
      </div>
      <input type="text" class="cert-title-input w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"
        placeholder="ชื่อรางวัล/กิจกรรม เช่น รางวัลชนะเลิศการแข่งขันโต้วาทีระดับจังหวัด" data-idx="${l}" value="${o(n.title)}" />
      <div class="flex items-center gap-2">
        ${n.file?n.isPdf?'<span class="w-10 h-10 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-lg flex-shrink-0">📄</span>':`<img src="${n.previewUrl}" class="w-10 h-10 rounded-lg object-cover border border-[var(--line)] flex-shrink-0" />`:""}
        <input type="file" accept="image/*,.pdf,application/pdf" class="cert-file-input text-xs flex-1 min-w-0" data-idx="${l}" />
      </div>
    </div>`;return`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เกียรติบัตร/รางวัลจากการแข่งขันหรือกิจกรรมนอกโรงเรียน <span class="text-[var(--bad)]">*</span></label>
        <p class="text-[0.6875rem] ${e>=t?"text-[var(--ok)]":"text-[var(--muted-2)]"}">แนบได้ทั้งรูปภาพและไฟล์ PDF — ต้องมีอย่างน้อย ${t} รายการ (ตอนนี้ครบ ${e}/${t})</p>
      </div>
      <div class="space-y-2.5">${Q.map(r).join("")}</div>
      <button type="button" id="btn-add-cert" class="w-full py-2 rounded-xl border border-dashed border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]">＋ เพิ่มรายการ</button>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step5-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">${Fr()?"ถัดไป →":"ตรวจสอบและยืนยัน →"}</button>
      </div>
    </div>`}function xi(e){const t=(d.members||[]).filter(n=>{var l;return((l=n.council_positions)==null?void 0:l.gender)===e&&n.student_id!==d.student.id}).sort((n,l)=>{var i,a;return(((i=n.council_positions)==null?void 0:i.sort_order)??0)-(((a=l.council_positions)==null?void 0:a.sort_order)??0)});if(!t.length)return`
      <div class="space-y-3">
        <div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-3 text-xs text-[var(--gold-ink)]">
          ⚠️ ตอนนี้ยังไม่มีสมาชิกสภานักเรียน${D[e]}ในระบบให้เลือกเป็นผู้รับรอง กรุณาติดต่อครูที่ปรึกษาสภาหรือผู้ดูแลระบบ
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        </div>
      </div>`;const r=n=>{var l,i,a;return`
    <button type="button" class="btn-pick-peer-endorser w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(O.peerEndorserId)===String(n.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${n.id}">
      ${G(n.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((l=n.students)==null?void 0:l.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${o(((i=n.council_positions)==null?void 0:i.position_name)??"—")} · ${o(((a=n.students)==null?void 0:a.main_room)??"—")}</p>
      </div>
      ${String(O.peerEndorserId)===String(n.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`};return`
    <div class="space-y-3">
      <p class="text-xs text-[var(--muted-2)]">เลือกสมาชิกสภานักเรียน${D[e]}ที่ต้องการให้เป็นผู้รับรองใบสมัครของคุณ — ใบสมัครจะรอเฉพาะคนที่เลือกเท่านั้น</p>
      <div class="space-y-2 max-h-96 overflow-y-auto">${t.map(r).join("")}</div>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step6-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${O.peerEndorserId?"":"disabled"}>ตรวจสอบและยืนยัน →</button>
      </div>
    </div>`}function fi(){var n;const e=d.positions.find(l=>l.id===Number(O.positionId)),t=d.student,r=O.peerEndorserId?(d.members||[]).find(l=>String(l.id)===String(O.peerEndorserId)):null;return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${he?`<img src="${he}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />`:""}
            <div class="min-w-0">
              <p class="font-bold text-[var(--ink)] truncate">${o((t==null?void 0:t.full_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${o((t==null?void 0:t.student_code)??"")} · ${o((t==null?void 0:t.main_room)??"")}</p>
            </div>
          </div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">ตำแหน่ง</span><span class="font-bold text-[var(--ink)] text-right">${o((e==null?void 0:e.position_name)??"—")}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดสามัญ</span><span class="font-bold text-[var(--ink)]">${o(O.gpaGeneral)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดศาสนา</span><span class="font-bold text-[var(--ink)]">${o(O.gpaReligious)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">รูปถ่าย</span><span class="font-bold ${Re?"text-[var(--ok)]":"text-[var(--bad)]"}">${Re?"✅ แนบแล้ว":"❌ ยังไม่ได้แนบ"}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">วิดีโอ</span><span class="font-bold text-[var(--ink)] truncate">${o(O.videoUrl)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกียรติบัตร/รางวัล</span><span class="font-bold text-[var(--ok)]">✅ ${Q.filter(l=>l.file&&l.title.trim()).length} รายการ</span></div>
          ${r?`<div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">พี่สภาที่ขอให้รับรอง</span><span class="font-bold text-[var(--ink)] text-right">${o(((n=r.students)==null?void 0:n.full_name)??"—")}</span></div>`:""}
          <div>
            <p class="text-[var(--muted)] mb-1">แรงจูงใจ</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${o(O.motivation)}</p>
          </div>
        </div>
        <div class="flex gap-2 pt-4 mt-3 border-t border-[var(--line-soft)]">
          <button type="button" id="btn-apply-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">✏️ แก้ไข</button>
          <button type="button" id="btn-apply-confirm-submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✅ ยืนยันการสมัคร</button>
        </div>
      </div>
    </div>`}function gi(){return d.student?!d.applications.length&&!d.membership.length?'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>':`
    <div class="space-y-2">
      ${d.membership.map(e=>{var t,r;return`
        <div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-xl p-3">
          <p class="text-xs text-[var(--ok)] font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-[#0d4d36]">${o(((t=e.council_positions)==null?void 0:t.position_name)??"—")} <span class="text-xs font-normal">(สภา${o(D[(r=e.council_positions)==null?void 0:r.gender]??"")})</span></p>
        </div>`}).join("")}
      ${d.applications.map(e=>{var t;return`
        <div class="bg-[var(--surface)] rounded-xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0">
              <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((t=e.council_positions)==null?void 0:t.position_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${o(jr[e.status]??e.status)}</span>
          </div>
          <button type="button" class="btn-view-my-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">📄 ดูใบสมัคร</button>
        </div>`}).join("")}
    </div>
    ${Ri()}`:""}function ye(e){return d.elections.find(t=>t.gender===e&&t.academic_year===Y)||null}async function Ma(e,t){ne[e]=await wa(t).catch(()=>[]),g()}async function yi(e,t){const[r,n]=await Promise.all([lo(t).catch(()=>({})),mr(e).catch(()=>0)]);_r[e]={tally:r,eligible:n},g()}function Ba(){return`<div class="space-y-4">${["M","W"].map(hi).join("")}</div>`}function hi(e){var b;const t=ye(e),r=d.student?Ie(d.student.gender):null,n=d.role==="student"&&r===e;if(!t)return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${D[e]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${d.isAdmin||d.isCouncilAdvisor?`<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${e}">เปิดใช้งานการเลือกตั้ง</button>`:""}
      </div>`;const l=new Date,i=t.opens_at?new Date(t.opens_at):null,a=t.closes_at?new Date(t.closes_at):null,s=!!(i&&i<=l&&(!a||a>l)),c=!!(a&&a<=l),m=!!t.results_published_at,p=m?{label:"✅ ประกาศผลแล้ว",cls:"bg-[var(--ok-soft-line)] text-[#106143]"}:c?{label:"🔒 ปิดโหวตแล้ว รอประกาศผล",cls:"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}:s?{label:"🗳️ กำลังเปิดโหวต",cls:"bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"}:{label:"⏳ ยังไม่เปิดโหวต",cls:"bg-[var(--bg-2)] text-[var(--muted)]"};let u="";if(m){ne[e]===void 0&&Ma(e,t.id),_r[e]||yi(e,t.id);const v=d.members.find(E=>{var A,S;return((A=E.council_positions)==null?void 0:A.gender)===e&&((S=E.council_positions)==null?void 0:S.is_elected)}),h=v?`
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${G(v.students,"w-12 h-16")}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((b=v.students)==null?void 0:b.full_name)??"—")}</p>
        </div>
      </div>`:'<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>',$=_r[e],w=ne[e];let T="";if($&&(w!=null&&w.length)){const E=Object.values($.tally).reduce((N,q)=>N+q,0),A=$.eligible?Math.round(E/$.eligible*100):0;T=`
        <div class="mt-3 space-y-2">
          ${w.slice().sort((N,q)=>($.tally[q.id]??0)-($.tally[N.id]??0)).map(N=>{var z;const q=$.tally[N.id]??0,M=E?Math.round(q/E*100):0;return`
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${o(((z=N.students)==null?void 0:z.full_name)??"—")}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${q} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${M}%"></div></div>
              </div>`}).join("")}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${$.eligible} คน · ใช้สิทธิ์ ${E} คน (${A}%)</p>`}u=h+T}else s&&n?u=`
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
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${D[e]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${p.cls}">${p.label}</span>
      </div>
      ${u}
      ${x}
    </div>`}function _i(e,t){var i,a,s,c,m,p,u;const r=e.photo_url||((i=e.students)==null?void 0:i.image_url)||((a=e.students)==null?void 0:a.photo_url),n=(s=e.council_applications)==null?void 0:s.gpa_general,l=(c=e.council_applications)==null?void 0:c.gpa_religious;return`
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${t}" data-id="${e.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${r?`<img src="${o(r)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${o((((m=e.students)==null?void 0:m.full_name)||"?").charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${e.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((p=e.students)==null?void 0:p.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)]">${o(((u=e.students)==null?void 0:u.main_room)??"")}</p>
        ${n!=null||l!=null?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${o(n??"—")} · ศาสนา ${o(l??"—")}</p>`:""}
        ${e.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${o(e.slogan)}"</p>`:""}
      </div>
    </button>`}function $i(){const e=t=>{const r=ye(t),n=`<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${D[t]}</p>`;if(!r)return`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`;const l=ne[t];return l===void 0?(Ma(t,r.id),`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>`):l.length?`
      <div>
        ${n}
        <div class="grid grid-cols-2 gap-3">${l.map(i=>_i(i,t)).join("")}</div>
      </div>`:`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`};return`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${e("M")}${e("W")}</div>${wi()}`}function wi(){var m,p,u,x,b,v,h,$;if(!et)return"";const{gender:e,id:t}=et,r=(ne[e]||[]).find(w=>w.id===t);if(!r)return"";const n=d.isAdmin||d.isCouncilAdvisor,l=Array.isArray(r.policies)?r.policies:[],i=Array.isArray(r.experience)?r.experience:[],a=r.photo_url||((m=r.students)==null?void 0:m.image_url)||((p=r.students)==null?void 0:p.photo_url),s=(u=r.council_applications)==null?void 0:u.gpa_general,c=(x=r.council_applications)==null?void 0:x.gpa_religious;return Ne?`
      <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
        <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
          <p class="text-base font-bold text-[var(--ink)] mb-3">✏️ แก้ไขโปรไฟล์ผู้สมัคร — ${o(((b=r.students)==null?void 0:b.full_name)??"")}</p>
          <form id="candidate-edit-form" class="space-y-2.5" data-candidate-id="${r.id}">
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สโลแกน</label>
              <input name="slogan" value="${o(r.slogan??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">วิสัยทัศน์</label>
              <textarea name="vision" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(r.vision??"")}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">นโยบาย (บรรทัดละ 1 ข้อ)</label>
              <textarea name="policies" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(l.join(`
`))}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน (บรรทัดละ 1 ข้อ)</label>
              <textarea name="experience" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(i.join(`
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
          ${a?`<img src="${o(a)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${o((((v=r.students)==null?void 0:v.full_name)||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${r.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${o(((h=r.students)==null?void 0:h.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${o((($=r.students)==null?void 0:$.main_room)??"")}${s!=null||c!=null?` · เกรดสามัญ ${o(s??"—")} · ศาสนา ${o(c??"—")}`:""}</p>
          </div>
          ${r.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${o(r.slogan)}"</p>`:""}
          ${r.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${o(r.vision)}</p></div>`:""}
          ${l.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${l.map(w=>`<li>${o(w)}</li>`).join("")}</ul></div>`:""}
          ${i.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${i.map(w=>`<li>${o(w)}</li>`).join("")}</ul></div>`:""}
          ${r.campaign_video_url?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิดีโอหาเสียง</p><video class="w-full rounded-xl bg-black" controls playsinline preload="metadata" src="${o(r.campaign_video_url)}"></video></div>`:""}
          ${!r.slogan&&!r.vision&&!l.length&&!i.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          ${n?'<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>':""}
        </div>
      </div>
    </div>`}const ra={draft:["ร่าง","bg-[var(--bg-2)] text-[var(--muted)]"],submitted:["ส่งตรวจแล้ว","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],approved:["อนุมัติและเผยแพร่แล้ว","bg-[var(--ok-soft-line)] text-[#106143]"],changes_requested:["ขอให้แก้ไข","bg-[var(--bad-soft-line)] text-[#8a2f22]"]};function ki(){const e=Et;if(!d.student||!e)return'<div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-6 text-center text-sm text-[var(--muted)]">บัญชีนี้ยังไม่มีสิทธิ์จัดการบอร์ดหาเสียงของผู้สมัคร</div>';const[t,r]=ra[e.review_status]||ra.draft,n=Array.isArray(e.policies)?e.policies:[],l=Array.isArray(e.experience)?e.experience:[],i=e.campaign_video_url?`<video class="w-full rounded-xl bg-black max-h-80" controls playsinline preload="metadata" src="${o(e.campaign_video_url)}"></video>`:"";return`<div class="max-w-3xl mx-auto space-y-4">
    <section class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5">
      <div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">บอร์ดหาเสียงของฉัน · หมายเลข ${o(e.ballot_number)}</p><h2 class="text-xl font-bold text-[var(--ink)] mt-1">${o(e.full_name)}</h2><p class="text-xs text-[var(--muted)] mt-1">แก้ไขร่างได้ตลอด ส่งให้ครูที่ปรึกษาสภาหรือแอดมินตรวจ ก่อนขึ้นแสดงบนบอร์ดสาธารณะ</p></div><span class="px-3 py-1.5 rounded-full text-xs font-bold ${r}">${t}</span></div>
      ${e.review_comment?`<p class="mt-3 p-3 rounded-xl bg-[var(--bad-soft-line)] text-sm text-[#8a2f22]">ข้อเสนอแนะ: ${o(e.review_comment)}</p>`:""}
      <form id="my-campaign-form" class="space-y-3 mt-4" data-candidate-id="${e.candidate_id}">
        <label class="block text-xs font-bold text-[var(--muted)]">สโลแกน (ไม่เกิน 160 ตัวอักษร)<input name="slogan" maxlength="160" value="${o(e.slogan)}" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]" /></label>
        <label class="block text-xs font-bold text-[var(--muted)]">วิสัยทัศน์<textarea name="vision" maxlength="800" rows="3" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">${o(e.vision)}</textarea></label>
        <label class="block text-xs font-bold text-[var(--muted)]">นโยบาย (บรรทัดละ 1 ข้อ)<textarea name="policies" rows="5" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">${o(n.join(`
`))}</textarea></label>
        <label class="block text-xs font-bold text-[var(--muted)]">ประสบการณ์และผลงาน (บรรทัดละ 1 ข้อ)<textarea name="experience" rows="4" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]">${o(l.join(`
`))}</textarea></label>
        <div class="rounded-xl border border-dashed border-[var(--primary-45)] p-3 space-y-2"><p class="text-xs font-bold text-[var(--ink-2)]">🎥 วิดีโอหาเสียงสั้น (ไม่เกิน 60 วินาที · 50 MB)</p><p class="text-[0.6875rem] text-[var(--muted)]">บนมือถือเลือก “ถ่ายวิดีโอ” เพื่ออัดคลิปใหม่ หรือเลือกไฟล์วิดีโอที่มีอยู่</p><input type="hidden" name="campaign_video_url" value="${o(e.campaign_video_url||"")}"/><input type="file" id="campaign-video-file" accept="video/mp4,video/webm,video/quicktime,video/ogg" capture="environment" class="block w-full text-xs"/><p id="campaign-video-status" class="text-xs text-[var(--muted)]">${e.campaign_video_url?"มีวิดีโอที่เลือกไว้":"ยังไม่ได้เลือกวิดีโอ"} · ลิงก์วิดีโอจะขึ้นบอร์ดหลังอนุมัติ</p>${i}</div>
        <div class="flex flex-col sm:flex-row gap-2 pt-2"><button type="submit" data-submit="0" class="flex-1 py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold">บันทึกร่าง</button><button type="submit" data-submit="1" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ส่งให้ครูตรวจและเผยแพร่</button></div>
      </form>
    </section>
  </div>`}const st={pending:["รอนัดสัมภาษณ์","bg-[var(--bg-2)] text-[var(--muted)]"],interview_scheduled:["นัดสัมภาษณ์แล้ว รอให้คะแนน","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],interviewed:["ผ่านสัมภาษณ์","bg-[var(--ok-soft-line)] text-[#106143]"],candidate:["ผู้สมัครเลือกตั้ง","bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"],appointed:["แต่งตั้งแล้ว","bg-[#e3f1ef] text-[var(--teal)]"],rejected:["ไม่ผ่าน","bg-[var(--bad-soft-line)] text-[#8a2f22]"]},Pa={M:"bg-[#edf4f0] text-[#14563b]",W:"bg-[#fdeef4] text-[#a3134f]"},Ht=[{id:"all",label:"ทั้งหมด"},{id:"awaiting_endorsement",label:"รอรับรอง"},{id:"endorsed",label:"รับรองแล้ว"},{id:"scheduled",label:"นัดแล้ว"},{id:"interviewed",label:"ผ่านสัมภาษณ์"},{id:"rejected",label:"ไม่ผ่าน"}];function Le(){return d.cfg.council_require_peer_endorsement==="true"}function ot(e){var r;const t=((r=e.students)==null?void 0:r.id)??e.student_id;return!!t&&d.members.some(n=>n.student_id===t)}function Ve(e){return!Le()||ot(e)?!0:!!e.peer_endorsed_at}function Oa(e){const t=[];return e.endorsed_at||t.push("รอครูที่ปรึกษาสามัญรับรอง"),Ve(e)||t.push("รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง"),t.join(" และ")}function tr(e){var r;return((r=((e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||"").match(/^(ม\.\d+|ปวช\.\d+)/))==null?void 0:r[1])??null}function Qt(e){return e.status==="rejected"?"rejected":e.status==="pending"?e.endorsed_at&&Ve(e)?"endorsed":"awaiting_endorsement":e.status==="interview_scheduled"?"scheduled":"interviewed"}async function At(){R=await ka(Y,B).catch(()=>[]),g()}async function Yr(){me=await bn().catch(()=>[]),g()}const dr={draft:"ร่าง",planned:"วางแผนแล้ว",active:"กำลังดำเนินการ",completed:"เสร็จสิ้น",cancelled:"ยกเลิก"},Fa={present:"มา",late:"มาสาย",excused_leave:"ลาโดยมีเหตุผล",unexcused_absence:"ขาด"},zr={pending:"รอสรุป",pass:"ผ่าน",fail:"ไม่ผ่าน",withdrawn:"ถอนตัว"};function Ct(){return!!(d!=null&&d.isAdmin||d!=null&&d.isCouncilAdvisor||d!=null&&d.isStudentAffairsHead)}function aa(e){return e?new Date(`${e}T00:00:00`).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนด"}function Sr(e){return!(e!=null&&e.start_date)&&!(e!=null&&e.end_date)?"ยังไม่กำหนดช่วงเวลา":`${aa(e.start_date)}${e.end_date?` – ${aa(e.end_date)}`:""}`}async function Ei(){var e;K=await eo(Y,B).catch(()=>[]),ge==null&&K.length&&(ge=K[0].id),ge!=null&&!K.some(t=>t.id===ge)&&(ge=((e=K[0])==null?void 0:e.id)??null,V=null),g()}async function Ai(){wr=!0,R=await ka(Y).catch(()=>[]),wr=!1,g()}async function Si(e){Ut=e,V=await co(e).catch(()=>({participants:[],attendance:[],criteria:[],scores:[],results:[],error:!0})),Ut=null,g()}function Ir(e,t){return((e==null?void 0:e.attendance)??[]).filter(r=>Number(r.student_id)===Number(t)).sort((r,n)=>String(n.updated_at??"").localeCompare(String(r.updated_at??"")))[0]}function Gr(e,t){return((e==null?void 0:e.results)??[]).find(r=>Number(r.student_id)===Number(t))}function Ii(e,t,r){return((e==null?void 0:e.scores)??[]).find(n=>Number(n.student_id)===Number(t)&&Number(n.criterion_id)===Number(r))}function Jt(e,t){return((e==null?void 0:e.scores)??[]).filter(r=>Number(r.student_id)===Number(t)).reduce((r,n)=>r+Number(n.score||0),0)}function Ya(e){const t=new Set(((e==null?void 0:e.participants)??[]).map(n=>Number(n.student_id))),r=new Map;for(const n of R??[]){const l=n.students;l!=null&&l.id&&!t.has(Number(l.id))&&n.status!=="rejected"&&r.set(Number(l.id),{student:l,applicationId:n.id})}for(const n of d.members??[]){const l=n.students;l!=null&&l.id&&!t.has(Number(l.id))&&!r.has(Number(l.id))&&r.set(Number(l.id),{student:l,applicationId:null})}return[...r.values()].sort((n,l)=>String(n.student.full_name??"").localeCompare(String(l.student.full_name??""),"th"))}function Ci({event:e,detail:t}){var a,s,c,m;const r=Ya(t),n=((c=Ir(t,(s=(a=t==null?void 0:t.participants)==null?void 0:a[0])==null?void 0:s.student_id))==null?void 0:c.session_label)||"กิจกรรมหลัก",l=(t==null?void 0:t.criteria)??[],i=((t==null?void 0:t.participants)??[]).map(p=>{const u=p.students??{},x=Ir(t,p.student_id),b=Gr(t,p.student_id),v=Jt(t,p.student_id),h=l.map($=>{const w=Ii(t,p.student_id,$.id);return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${o($.name)} <span class="text-[var(--muted-2)]">(เต็ม ${$.weight})</span></span><input type="number" min="0" max="${Number($.weight)}" step="0.5" name="criterion_${$.id}" value="${(w==null?void 0:w.score)??""}" class="yla-score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" data-weight="${Number($.weight)}"></div>`}).join("");return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3">
      <div class="flex items-center gap-3">${G(u)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${o(u.full_name??"—")}</p><p class="text-xs text-[var(--muted)]">${o(u.student_code??"")} · ${o(u.main_room??"")}</p></div><span class="text-[0.6875rem] font-bold px-2.5 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">${o(p.status==="completed"?"จบกิจกรรม":"ผู้เข้าร่วม")}</span></div>
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <form class="yla-attendance-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${p.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📝 การเข้าร่วม</p><input name="session_label" value="${o((x==null?void 0:x.session_label)??n)}" placeholder="ชื่อช่วง/ฐานกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><select name="attendance_state" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(Fa).map(([$,w])=>`<option value="${$}" ${(x==null?void 0:x.attendance_state)===$?"selected":""}>${w}</option>`).join("")}</select><textarea name="note" rows="2" placeholder="หมายเหตุ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${o((x==null?void 0:x.note)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกการเข้าร่วม</button></form>
        <form class="yla-score-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${p.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📊 ประเมินศักยภาพ</p>${h||'<p class="text-xs text-[var(--muted)]">ยังไม่มีเกณฑ์ประเมิน</p>'}<p class="text-xs font-bold border-t border-[var(--line-soft)] pt-2">รวม <span class="yla-score-total text-[var(--primary)]">${v}</span> / ${l.reduce(($,w)=>$+Number(w.weight),0)}</p><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกคะแนน</button></form>
        <form class="yla-result-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${p.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">✅ สรุปผลและข้อเสนอ</p><select name="final_result" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(zr).map(([$,w])=>`<option value="${$}" ${(b==null?void 0:b.final_result)===$||!b&&$==="pending"?"selected":""}>${w}</option>`).join("")}</select><input name="recommended_position" value="${o((b==null?void 0:b.recommended_position)??"")}" placeholder="ตำแหน่งที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input name="recommended_division" value="${o((b==null?void 0:b.recommended_division)??"")}" placeholder="ฝ่ายที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><textarea name="strengths" rows="2" placeholder="จุดเด่น" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${o((b==null?void 0:b.strengths)??"")}</textarea><textarea name="areas_to_develop" rows="2" placeholder="สิ่งที่ควรพัฒนา" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${o((b==null?void 0:b.areas_to_develop)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--ok)] text-white text-xs font-bold">บันทึกผลสรุป</button></form>
      </div>
      <div class="flex justify-end"><button type="button" class="yla-participant-status-btn text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--muted)]" data-participant-id="${p.id}" data-status="${p.status==="completed"?"registered":"completed"}">${p.status==="completed"?"↩️ เปิดสถานะผู้เข้าร่วม":"ทำเครื่องหมายว่าจบกิจกรรม"}</button></div>
    </article>`}).join("");return`<section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-2"><div><h2 class="text-base font-bold text-[var(--ink)]">ผู้เข้าร่วมและการติดตาม</h2><p class="text-xs text-[var(--muted)]">บันทึกแยกเป็นการเข้าร่วม คะแนน และผลสรุปรายบุคคล</p></div><span class="text-xs text-[var(--muted)]">${((m=t==null?void 0:t.participants)==null?void 0:m.length)??0} คน</span></div><form id="yla-add-participant-form" class="rounded-2xl border border-dashed border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 flex flex-col sm:flex-row gap-2" data-event-id="${e.id}"><select name="student_id" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><option value="">เลือกนักเรียนหรือสมาชิกสภาเพื่อเพิ่ม</option>${r.map(({student:p})=>`<option value="${p.id}">${o(p.full_name)} · ${o(p.student_code??"")} · ${o(p.main_room??"")}</option>`).join("")}</select><button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" ${r.length?"":"disabled"}>เพิ่มผู้เข้าร่วม</button></form>${r.length?"":'<p class="text-xs text-[var(--muted)]">ไม่มีรายชื่อนักเรียนที่เพิ่มได้จากใบสมัคร/สมาชิกปัจจุบัน หรือเพิ่มไปแล้วทั้งหมด</p>'}${i||'<div class="rounded-2xl border border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีผู้เข้าร่วม กดเพิ่มรายชื่อด้านบน</div>'}</section>`}function Li({event:e,detail:t}){const r=(t==null?void 0:t.participants)??[];return r.length?`<div class="space-y-3">${r.map(n=>{const l=n.students??{},i=Ir(t,n.student_id),a=Gr(t,n.student_id),s=Jt(t,n.student_id);return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3"><div class="flex items-center gap-3">${G(l)}<div class="flex-1"><p class="text-sm font-bold text-[var(--ink)]">${o(l.full_name??"ข้อมูลของฉัน")}</p><p class="text-xs text-[var(--muted)]">สถานะ: ${o(n.status==="completed"?"จบกิจกรรม":"กำลังเข้าร่วม")}</p></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs"><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">การเข้าร่วมล่าสุด</p><p class="font-bold text-[var(--ink)] mt-1">${i?`${o(Fa[i.attendance_state]??i.attendance_state)} · ${o(i.session_label)}`:"ยังไม่บันทึก"}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">คะแนนสะสม</p><p class="font-bold text-[var(--primary)] mt-1">${s} / ${((t==null?void 0:t.criteria)??[]).reduce((c,m)=>c+Number(m.weight),0)}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">ผลสรุป</p><p class="font-bold text-[var(--ink)] mt-1">${o(zr[a==null?void 0:a.final_result]??"รอสรุป")}</p></div></div>${a!=null&&a.strengths||a!=null&&a.areas_to_develop?`<div class="border-t border-[var(--line-soft)] pt-3 text-xs leading-6"><p><strong>จุดเด่น:</strong> ${o((a==null?void 0:a.strengths)??"ยังไม่มีข้อมูล")}</p><p><strong>สิ่งที่ควรพัฒนา:</strong> ${o((a==null?void 0:a.areas_to_develop)??"ยังไม่มีข้อมูล")}</p></div>`:'<p class="text-xs text-[var(--muted)]">ผลประเมินและข้อเสนอจะแสดงเมื่อผู้ดูแลบันทึกผลแล้ว</p>'}</article>`}).join("")}</div>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">กิจกรรมนี้ยังไม่มีข้อมูลการเข้าร่วมของคุณ</div>'}function Ti(){if(K===null)return Ei(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดกิจกรรม YLA...</p>';Ct()&&R===null&&!wr&&Ai();const e=K.find(i=>Number(i.id)===Number(ge));if(e&&V===null&&Ut===null)return Si(e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดผู้เข้าร่วมและผลประเมิน...</p>';const t=i=>i==="active"?"bg-[var(--ok-soft)] text-[var(--ok)]":i==="completed"?"bg-[var(--primary-soft)] text-[var(--primary)]":i==="cancelled"?"bg-[var(--bad-soft)] text-[var(--bad)]":"bg-[var(--bg-2)] text-[var(--muted)]",r=K.length?K.map(i=>`<button type="button" class="yla-event-select text-left rounded-2xl border p-4 space-y-2 ${Number(i.id)===Number(ge)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"}" data-event-id="${i.id}"><div class="flex items-start gap-2"><span class="flex-1 text-sm font-bold text-[var(--ink)]">${o(i.title)}</span><span class="text-[0.6875rem] font-bold rounded-full px-2 py-1 ${t(i.status)}">${o(dr[i.status]??i.status)}</span></div><p class="text-xs text-[var(--muted)]">${o(Sr(i))}${i.location?` · ${o(i.location)}`:""}</p></button>`).join(""):'<div class="rounded-2xl border border-dashed border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีกิจกรรม YLA ในปีการศึกษานี้</div>',n=Rt?'<form id="yla-event-form" class="rounded-2xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 space-y-3"><div class="flex items-center justify-between"><h2 class="font-bold text-[var(--ink)]">สร้างกิจกรรม YLA</h2><button type="button" id="yla-event-cancel" class="text-xs font-bold text-[var(--muted)]">ยกเลิก</button></div><input name="title" required placeholder="ชื่อกิจกรรม เช่น YLA รุ่นที่ 1" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><textarea name="description" rows="2" placeholder="วัตถุประสงค์หรือรายละเอียดกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea><div class="grid grid-cols-2 gap-2"><input type="date" name="start_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="date" name="end_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><div class="grid grid-cols-2 gap-2"><input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="number" min="1" name="capacity" placeholder="จำนวนรับ (ไม่บังคับ)" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><button type="submit" class="w-full py-2.5 rounded-[10px] bg-[var(--primary)] text-white text-sm font-bold">สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น</button></form>':"",l=e?`<section class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-4"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 YLA · ปีการศึกษา ${Y}</p><h2 class="text-xl font-bold text-[var(--ink)] mt-1">${o(e.title)}</h2><p class="text-sm text-[var(--muted)] mt-1">${o(e.description??"กิจกรรมพัฒนาภาวะผู้นำและทักษะการทำงานของนักเรียน")}</p><p class="text-xs text-[var(--muted)] mt-2">${o(Sr(e))}${e.location?` · ${o(e.location)}`:""}</p></div><div class="flex flex-wrap gap-2 items-center"><span class="text-xs font-bold rounded-full px-3 py-1.5 ${t(e.status)}">${o(dr[e.status]??e.status)}</span><button type="button" id="yla-print-event" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]">🖨️ พิมพ์สรุป</button></div></div>${Ct()?`<form id="yla-event-status-form" class="flex flex-wrap gap-2 items-center border-t border-[var(--line-soft)] pt-3" data-event-id="${e.id}"><span class="text-xs text-[var(--muted)]">สถานะกิจกรรม</span><select name="status" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(dr).map(([i,a])=>`<option value="${i}" ${e.status===i?"selected":""}>${a}</option>`).join("")}</select><button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกสถานะ</button></form>`:""}${Ut===e.id?'<p class="text-sm text-[var(--muted)] text-center py-8">กำลังโหลด...</p>':V!=null&&V.error?'<p class="text-sm text-[var(--bad)] text-center py-8">โหลดข้อมูล YLA ไม่สำเร็จ</p>':Ct()?Ci({event:e,detail:V}):Li({event:e,detail:V})}</section>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">เลือกกิจกรรมเพื่อดูรายละเอียดและติดตามผล</div>';return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 กิจกรรม YLA · Youth Leadership For Azizstan</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ติดตามกิจกรรมและพัฒนาการรายบุคคล</h1><p class="text-sm text-[var(--muted)] mt-2 leading-6">นักเรียนดูสถานะ การเข้าร่วม คะแนน และผลสรุปของตนเองได้ ส่วนผู้ดูแลจัดกิจกรรม เพิ่มผู้เข้าร่วม เช็กชื่อ และบันทึกผลได้ในหน้าเดียว</p></div>${Ct()?'<button type="button" id="yla-event-open" class="px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">＋ สร้างกิจกรรม YLA</button>':""}</div><div class="flex flex-wrap gap-2 mt-4 text-xs"><a href="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit?tab=t.gq6dk28nkqg8" target="_blank" rel="noopener" class="px-3 py-2 rounded-[10px] border border-[var(--line)] font-bold text-[var(--primary)]">🔗 เปิดชุดเอกสาร YLA ต้นฉบับ</a><span class="px-3 py-2 rounded-[10px] bg-[var(--bg-2)] text-[var(--muted)]">เก็บข้อมูลตามกิจกรรม ไม่ปะปนกับสารบัญเอกสาร</span></div></section>${n}<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">${r}</section>${l}<details class="mt-2"><summary class="cursor-pointer text-sm font-bold text-[var(--primary)]">📚 ดูสารบัญเอกสาร YLA YLA-00 ถึง YLA-10</summary><div class="mt-4">${fr({kind:"yla",esc:o})}</div></details></div>`}function Ni(){var e,t,r,n,l,i;document.querySelectorAll(".yla-event-select").forEach(a=>a.addEventListener("click",()=>{ge=Number(a.dataset.eventId),V=null,g()})),(e=document.getElementById("yla-event-open"))==null||e.addEventListener("click",()=>{Rt=!0,g()}),(t=document.getElementById("yla-event-cancel"))==null||t.addEventListener("click",()=>{Rt=!1,g()}),(r=document.getElementById("yla-event-form"))==null||r.addEventListener("submit",async a=>{var m;a.preventDefault();const s=a.currentTarget,c=s.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังสร้าง...";try{const p=await On({academicYear:Y,termId:B,title:s.title.value.trim(),description:s.description.value.trim(),startDate:s.start_date.value||null,endDate:s.end_date.value||null,location:s.location.value.trim(),capacity:s.capacity.value?Number(s.capacity.value):null,createdByTeacherId:(m=d.teacher)==null?void 0:m.id});f("สร้างกิจกรรม YLA และเกณฑ์ประเมินแล้ว ✅","success"),Rt=!1,K=null,ge=p.id,V=null,g()}catch(p){f("สร้างกิจกรรมไม่สำเร็จ: "+I(p),"error"),c.disabled=!1,c.textContent="สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น"}}),(n=document.getElementById("yla-event-status-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.currentTarget,c=s.querySelector('button[type="submit"]');c.disabled=!0;try{await Fn(Number(s.dataset.eventId),s.status.value),f("บันทึกสถานะกิจกรรมแล้ว","success"),K=null,g()}catch(m){f("บันทึกสถานะไม่สำเร็จ: "+I(m),"error"),c.disabled=!1}}),(l=document.getElementById("yla-add-participant-form"))==null||l.addEventListener("submit",async a=>{a.preventDefault();const s=a.currentTarget,c=s.querySelector('button[type="submit"]'),m=Number(s.student_id.value),p=Ya(V).find(u=>Number(u.student.id)===m);if(!m||!p){f("กรุณาเลือกรายชื่อผู้เข้าร่วม","warning");return}c.disabled=!0;try{await Yn({eventId:Number(s.dataset.eventId),studentId:m,applicationId:p.applicationId}),f("เพิ่มผู้เข้าร่วมแล้ว ✅","success"),V=null,g()}catch(u){f("เพิ่มผู้เข้าร่วมไม่สำเร็จ: "+I(u),"error"),c.disabled=!1}}),document.querySelectorAll(".yla-participant-status-btn").forEach(a=>a.addEventListener("click",async()=>{a.disabled=!0;try{await zn(Number(a.dataset.participantId),a.dataset.status),V=null,g()}catch(s){f("เปลี่ยนสถานะไม่สำเร็จ: "+I(s),"error"),a.disabled=!1}})),document.querySelectorAll(".yla-attendance-form").forEach(a=>a.addEventListener("submit",async s=>{var m;s.preventDefault();const c=a.querySelector('button[type="submit"]');c.disabled=!0;try{await Gn({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),sessionLabel:a.session_label.value.trim(),attendanceState:a.attendance_state.value,note:a.note.value.trim(),recordedByTeacherId:(m=d.teacher)==null?void 0:m.id}),f("บันทึกการเข้าร่วมแล้ว","success"),V=null,g()}catch(p){f("บันทึกการเข้าร่วมไม่สำเร็จ: "+I(p),"error"),c.disabled=!1}})),document.querySelectorAll(".yla-score-form").forEach(a=>{const s=a.querySelector(".yla-score-total"),c=()=>{s&&(s.textContent=[...a.querySelectorAll(".yla-score-input")].reduce((m,p)=>m+(Number(p.value)||0),0))};a.querySelectorAll(".yla-score-input").forEach(m=>m.addEventListener("input",c)),a.addEventListener("submit",async m=>{var x;m.preventDefault();const p=a.querySelector('button[type="submit"]');p.disabled=!0;const u={};a.querySelectorAll(".yla-score-input").forEach(b=>{u[b.name.replace("criterion_","")]=b.value});try{await Vn({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),scores:u,scoredByTeacherId:(x=d.teacher)==null?void 0:x.id}),f("บันทึกคะแนนแล้ว","success"),V=null,g()}catch(b){f("บันทึกคะแนนไม่สำเร็จ: "+I(b),"error"),p.disabled=!1}})}),document.querySelectorAll(".yla-result-form").forEach(a=>a.addEventListener("submit",async s=>{var m;s.preventDefault();const c=a.querySelector('button[type="submit"]');c.disabled=!0;try{await Un({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),totalScore:Jt(V,Number(a.dataset.studentId)),strengths:a.strengths.value.trim(),areasToDevelop:a.areas_to_develop.value.trim(),recommendedPosition:a.recommended_position.value.trim(),recommendedDivision:a.recommended_division.value.trim(),finalResult:a.final_result.value,finalizedByTeacherId:(m=d.teacher)==null?void 0:m.id}),f("บันทึกผลสรุปแล้ว ✅","success"),V=null,g()}catch(p){f("บันทึกผลสรุปไม่สำเร็จ: "+I(p),"error"),c.disabled=!1}})),(i=document.getElementById("yla-print-event"))==null||i.addEventListener("click",()=>{if(!V||!na())return;const a=na(),s=(V.participants??[]).map((c,m)=>{const p=c.students??{},u=Gr(V,c.student_id);return`<tr><td>${m+1}</td><td>${o(p.full_name??"")}</td><td>${o(p.student_code??"")}</td><td>${o(p.main_room??"")}</td><td>${Jt(V,c.student_id)}</td><td>${o(zr[u==null?void 0:u.final_result]??"รอสรุป")}</td></tr>`}).join("");Te(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${o(a.title)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:30px}h1{font-size:22px}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #ccc;padding:7px;text-align:left;font-size:12px}th{background:#f3f4f6}</style></head><body><h1>สรุปกิจกรรม YLA: ${o(a.title)}</h1><p>ปีการศึกษา ${Y} · ${o(Sr(a))}</p><table><thead><tr><th>ลำดับ</th><th>ชื่อ</th><th>รหัส</th><th>ห้อง</th><th>คะแนน</th><th>ผล</th></tr></thead><tbody>${s}</tbody></table></body></html>`)})}function na(){return K==null?void 0:K.find(e=>Number(e.id)===Number(ge))}function qi(e){const t=me==null?void 0:me.find(r=>r.id===e);return t?`${t.full_name} · รหัส ${t.id}`:""}function ji(e){if(!e)return"";const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);if(t)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${o(t[1])}" allowfullscreen loading="lazy"></iframe></div>`;const r=e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||e.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);if(r)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${o(r[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`;const n=e.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);return n?`<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${o(n[1])}" allowfullscreen loading="lazy"></iframe></div>`:`<a href="${o(e)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`}function rr(){if(!Ze)return"";const e=R==null?void 0:R.find(t=>t.id===Ze);return e?za(e,e.students,{closeId:"btn-admin-app-detail-close",backdropId:"admin-app-detail-backdrop",canDelete:!!d.isAdmin}):""}function Ri(){var t;if(!vt)return"";const e=(t=d.applications)==null?void 0:t.find(r=>r.id===vt);return e?za(e,d.student,{closeId:"btn-my-app-detail-close",backdropId:"my-app-detail-backdrop",isOwner:!0}):""}function Di(e,t){var a,s;(a=document.getElementById("peer-endorser-picker-modal"))==null||a.remove();const r=(s=d.applications)==null?void 0:s.find(c=>c.id===e),n=(d.members||[]).filter(c=>{var m;return((m=c.council_positions)==null?void 0:m.gender)===t&&c.student_id!==d.student.id}).sort((c,m)=>{var p,u;return(((p=c.council_positions)==null?void 0:p.sort_order)??0)-(((u=m.council_positions)==null?void 0:u.sort_order)??0)}),l=c=>{var m,p,u;return`
    <button type="button" class="btn-peer-picker-choose w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(r==null?void 0:r.requested_peer_endorser_id)===String(c.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${c.id}">
      ${G(c.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((m=c.students)==null?void 0:m.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${o(((p=c.council_positions)==null?void 0:p.position_name)??"—")} · ${o(((u=c.students)==null?void 0:u.main_room)??"—")}</p>
      </div>
      ${String(r==null?void 0:r.requested_peer_endorser_id)===String(c.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`},i=document.createElement("div");i.id="peer-endorser-picker-modal",i.className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",i.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
      <div class="flex items-start justify-between gap-3 mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🙋 เลือกพี่สภาที่ต้องการให้รับรอง</p>
        <button type="button" id="btn-peer-picker-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      ${n.length?`<div class="space-y-2">${n.map(l).join("")}</div>`:`<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีสมาชิกสภานักเรียน${D[t]??""}ในระบบให้เลือก</p>`}
    </div>`,document.body.appendChild(i),i.addEventListener("click",c=>{c.target===i&&i.remove()}),i.querySelector("#btn-peer-picker-close").addEventListener("click",()=>i.remove()),i.querySelectorAll(".btn-peer-picker-choose").forEach(c=>{c.addEventListener("click",async()=>{c.disabled=!0;try{await Wn({applicationId:e,memberId:Number(c.dataset.id)}),await ja(),f("เลือกพี่สภาที่ต้องการให้รับรองแล้ว ✅","success"),i.remove(),g()}catch(m){f("บันทึกไม่สำเร็จ: "+I(m),"error"),c.disabled=!1}})})}function za(e,t,{closeId:r,backdropId:n,isOwner:l=!1,canDelete:i=!1}){var s,c,m,p,u,x,b,v,h,$;const a=Pa[(s=e.council_positions)==null?void 0:s.gender]??"bg-[var(--bg-2)] text-[var(--muted)]";return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="${n}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="${r}" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${G(t,"w-16 h-20")}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${o((t==null?void 0:t.full_name)??"—")}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${a}">${o(D[(c=e.council_positions)==null?void 0:c.gender]??"—")}</span>
            </div>
            <p class="text-xs text-[var(--muted-2)]">${o((t==null?void 0:t.student_code)??"")} · ${o((t==null?void 0:t.main_room)??"")}</p>
            <p class="text-xs text-[var(--primary)] font-semibold mt-0.5">${o(((m=e.council_positions)==null?void 0:m.position_name)??"—")}</p>
          </div>
        </div>
        <div class="space-y-3 pt-3 text-sm">
          <div class="grid grid-cols-2 gap-2">
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดสามัญ</p><p class="font-bold text-[var(--ink)]">${o(e.gpa_general??"—")}</p></div>
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดศาสนา</p><p class="font-bold text-[var(--ink)]">${o(e.gpa_religious??"—")}</p></div>
          </div>
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">แรงจูงใจ / นโยบาย</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-xl p-3 whitespace-pre-line">${o(e.motivation||"—")}</p>
          </div>
          ${e.intro_video_url?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🎬 วิดีโอแนะนำตัว</p>
            ${ji(e.intro_video_url)}
          </div>`:""}
          ${(p=e.certificates)!=null&&p.length?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1.5">🏅 เกียรติบัตร/รางวัล (${e.certificates.length} รายการ)</p>
            <div class="grid grid-cols-3 gap-2">
              ${e.certificates.map(w=>`
                <a href="${o(w.url)}" target="_blank" rel="noopener" class="block rounded-lg border border-[var(--line)] overflow-hidden hover:border-[var(--primary-45)]">
                  ${(w.url??"").endsWith(".pdf")?'<div class="aspect-square bg-[var(--surface-2)] flex items-center justify-center text-2xl">📄</div>':`<img src="${o(w.url)}" class="aspect-square object-cover w-full" />`}
                  <p class="text-[0.5625rem] text-[var(--ink-2)] px-1 py-1 truncate">${o(w.title||"—")}</p>
                </a>`).join("")}
            </div>
          </div>`:""}
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${(u=e.teachers)!=null&&u.full_name?" — "+o(e.teachers.full_name):""}</p>
            ${e.endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${o(e.endorsement_comment)}</p>`:'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>
          ${Le()?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${(b=(x=e.council_members)==null?void 0:x.students)!=null&&b.full_name?" — "+o(e.council_members.students.full_name):""}</p>
            ${ot(e)?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>':e.peer_endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${o(e.peer_endorsement_comment)}</p>`:e.peer_endorsed_at?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>':'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>`:""}
          ${l&&Le()&&!ot(e)&&!e.peer_endorsed_at?`
          <div class="rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2">
            <p class="text-xs font-bold text-[var(--primary-dark)]">🙋 พี่สภาที่ต้องการให้รับรอง</p>
            <p class="text-sm text-[var(--ink)]">${(h=(v=e.requested_peer_endorser)==null?void 0:v.students)!=null&&h.full_name?o(e.requested_peer_endorser.students.full_name):"ยังไม่ได้เลือก"}</p>
            <button type="button" id="btn-pick-my-app-endorser" class="w-full py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${e.id}" data-gender="${o((($=e.council_positions)==null?void 0:$.gender)??"")}">
              ${e.requested_peer_endorser_id?"🔄 เปลี่ยนพี่สภา":"➕ เลือกพี่สภา"}
            </button>
          </div>`:""}
          ${i&&["pending","rejected"].includes(e.status)?`
          <button type="button" id="btn-delete-council-application" data-id="${e.id}" class="w-full py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">🗑️ ลบใบสมัคร</button>`:""}
        </div>
      </div>
    </div>`}function Ga(){var t,r,n,l,i;if(!qe)return"";const e=R==null?void 0:R.find(a=>a.id===qe);return e?`<div id="council-delete-backdrop" class="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
    <div class="bg-[var(--surface)] rounded-2xl p-5 max-w-md w-full space-y-3">
      <p class="text-base font-bold text-[var(--ink)]">🗑️ ยืนยันการนำใบสมัครนี้ออกจากระบบ?</p>
      <div class="text-sm text-[var(--ink-2)] space-y-1">
        <p><b>ชื่อ–สกุล:</b> ${o((t=e.students)==null?void 0:t.full_name)}</p>
        <p><b>รหัสนักเรียน:</b> ${o((r=e.students)==null?void 0:r.student_code)}</p>
        <p><b>ห้อง:</b> ${o(((n=e.students)==null?void 0:n.main_room)||((l=e.students)==null?void 0:l.religion_room)||"—")}</p>
        <p><b>ตำแหน่ง:</b> ${o((i=e.council_positions)==null?void 0:i.position_name)}</p>
        <p><b>สถานะ:</b> ${o(jr[e.status]||e.status)}</p>
      </div>
      <p class="text-xs text-[var(--bad)]">โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนดำเนินการ</p>
      <textarea id="council-delete-reason" required rows="3" placeholder="เหตุผลการลบ (จำเป็น)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <div class="flex gap-2">
        <button type="button" id="btn-cancel-council-delete" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm">ยกเลิก</button>
        <button type="button" id="btn-confirm-council-delete" class="flex-1 py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">ยืนยันลบ</button>
      </div>
    </div>
  </div>`:""}async function Mi(){hr=await uo().catch(()=>[]),g()}function Bi(){if(!d.isAdmin&&!d.isExecutive)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือผู้บริหารเท่านั้น</p>';if(R===null)return At(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(re===null)return Vr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(hr===null)return Mi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=(()=>{const b=d.cfg.council_term_start_semester,v=d.cfg.council_term_start_year,h=d.cfg.council_term_end_semester,$=d.cfg.council_term_end_year;return!v&&!$?"ยังไม่ได้ตั้งค่าวาระ":`ภาคเรียนที่ ${b??"—"}/${v??"—"} ถึง ภาคเรียนที่ ${h??"—"}/${$??"—"}`})(),t=d.members,r={M:t.filter(b=>{var v;return((v=b.council_positions)==null?void 0:v.gender)==="M"}).length,W:t.filter(b=>{var v;return((v=b.council_positions)==null?void 0:v.gender)==="W"}).length},n=t.filter(b=>{var v;return(v=b.council_positions)==null?void 0:v.is_elected}).sort((b,v)=>{var h,$;return(((h=b.council_positions)==null?void 0:h.sort_order)??0)-((($=v.council_positions)==null?void 0:$.sort_order)??0)}),l=R.length,i={all:l};R.forEach(b=>{const v=Qt(b);i[v]=(i[v]??0)+1});const a=R.filter(b=>b.endorsed_at).length,s=R.filter(b=>b.peer_endorsed_at||ot(b)).length,c=R.filter(b=>b.status==="candidate").length,m=R.filter(b=>b.status==="appointed").length,p=Object.fromEntries(d.positions.map(b=>[b.id,b.position_name])),u=re.map(b=>({...b,posNames:hr.filter(v=>v.teacher_id===b.id).map(v=>p[v.position_id]).filter(Boolean)})),x=(b,v,h)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${h}">${o(b)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${o(v)}</p>
    </div>`;return`
    <div class="max-w-4xl mx-auto space-y-5">
      <div>
        <h2 class="text-lg font-bold text-[var(--ink)] mb-0.5">📊 ภาพรวมผู้บริหาร</h2>
        <p class="text-xs text-[var(--muted-2)]">สรุปสภานักเรียนวาระปัจจุบัน สำหรับผู้บริหาร — ดูอย่างเดียว ไม่มีสิทธิ์แก้ไข</p>
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">📋 การสมัครสภานักเรียน</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          ${x(l,"สมัครแล้วทั้งหมด","var(--ink)")}
          ${x(a,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
          ${Le()?x(s,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):x("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
          ${x(c,"ว่าที่สภานักเรียน (ผู้สมัครเลือกตั้ง)","var(--primary)")}
          ${x(m,"แต่งตั้งแล้ว","var(--teal)")}
        </div>
        <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
          ${Ht.map(b=>`
            <span class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--surface-2)] text-[var(--ink-2)]">
              ${o(b.label)} <span class="text-[var(--muted-2)]">${i[b.id]??0}</span>
            </span>`).join("")}
        </div>
        <p class="text-xs text-[var(--muted-2)] mb-2">รายชื่อล่าสุด — กดดูใบสมัครฉบับเต็มได้</p>
        <div class="space-y-1.5 max-h-96 overflow-y-auto">
          ${R.slice(0,30).map(b=>{var T,E;const[v,h]=st[b.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],$=b.endorsed_at?"✅":"⬜",w=Le()?b.peer_endorsed_at||ot(b)?" · ✅สภา":" · ⬜สภา":"";return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${G(b.students,"w-8 h-10")}
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${o(((T=b.students)==null?void 0:T.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${o(((E=b.council_positions)==null?void 0:E.position_name)??"—")} · ${$}ครู${w}</p>
              </div>
              <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full ${h}">${o(v)}</span>
              <button type="button" class="btn-view-app-detail flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-lg border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${b.id}">ดู</button>
            </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีใบสมัคร</p>'}
        </div>
        ${R.length>30?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-2 text-center">แสดง 30 รายการล่าสุดจากทั้งหมด ${R.length} รายการ</p>`:""}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-1">🏛️ สภานักเรียนวาระปัจจุบัน</p>
        <p class="text-xs text-[var(--muted)] mb-3">${o(e)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
          ${x(t.length,"สมาชิกสภาทั้งหมด","var(--ink)")}
          ${x(r.M,"สภาชาย","#14563b")}
          ${x(r.W,"สภาหญิง","#a3134f")}
          ${x(n.length,"ตำแหน่งผู้นำ","var(--primary)")}
        </div>
        ${n.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${n.map(b=>{var v,h;return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${G(b.students,"w-9 h-11")}
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${o(((v=b.students)==null?void 0:v.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${o(((h=b.council_positions)==null?void 0:h.position_name)??"—")}</p>
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
              <div class="w-9 h-9 rounded-full bg-[var(--surface-2)] flex-shrink-0 overflow-hidden flex items-center justify-center text-[var(--muted-2)]">${b.image_url?`<img src="${o(b.image_url)}" class="w-full h-full object-cover" />`:"👤"}</div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${o(b.full_name)}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${b.posNames.length?o(b.posNames.join(", ")):"ยังไม่ได้กำหนดฝ่ายที่ดูแล"}</p>
              </div>
            </div>`).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีครูที่ปรึกษาสภานักเรียน</p>'}
      </div>
    </div>
    ${rr()}${Ga()}`}function Va(){return(R??[]).filter(e=>{var t;return!(((t=e.council_positions)==null?void 0:t.gender)!==se||ke!=="all"&&Qt(e)!==ke||ht&&tr(e.students)!==ht||Ce&&String(e.position_id)!==String(Ce)||Ye==="yes"&&!e.endorsed_at||Ye==="no"&&e.endorsed_at||ze==="yes"&&!Ve(e)||ze==="no"&&Ve(e))})}function Pi(){var l,i;if(!d.isAdmin&&!d.isCouncilAdvisor)return;const e=Va().sort((a,s)=>{var c,m,p,u;return String(((c=a.students)==null?void 0:c.main_room)??"").localeCompare(String(((m=s.students)==null?void 0:m.main_room)??""),"th",{numeric:!0})||String(((p=a.students)==null?void 0:p.student_code)??"").localeCompare(String(((u=s.students)==null?void 0:u.student_code)??""),"th",{numeric:!0})});if(!e.length){f("ไม่มีรายชื่อสำหรับพิมพ์","warning");return}const t=Le(),r=[(l=Ht.find(a=>a.id===ke))==null?void 0:l.label,ht,Ce?(i=d.positions.find(a=>String(a.id)===String(Ce)))==null?void 0:i.position_name:"",Ye?"ครูที่ปรึกษา: "+(Ye==="yes"?"รับรองแล้ว":"ยังไม่รับรอง"):"",t&&ze?"พี่สภา: "+(ze==="yes"?"ผ่านเงื่อนไข":"ยังไม่ผ่านเงื่อนไข"):""].filter(Boolean).join(" · "),n=e.map((a,s)=>{var c,m,p,u,x;return`<tr><td>${s+1}</td><td>${o(((c=a.students)==null?void 0:c.student_code)??"—")}</td><td>${o(((m=a.students)==null?void 0:m.full_name)??"—")}</td><td>${o(((p=a.students)==null?void 0:p.main_room)??"—")}</td><td>${o(((u=a.council_positions)==null?void 0:u.position_name)??"—")}</td><td>${o(((x=st[a.status])==null?void 0:x[0])??"—")}</td><td>${a.endorsed_at?"รับรองแล้ว":"ยังไม่รับรอง"}</td>${t?`<td>${Ve(a)?"ผ่านเงื่อนไข":"ยังไม่ผ่านเงื่อนไข"}</td>`:""}<td></td></tr>`}).join("");Te(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>รายชื่อผู้สมัครสภานักเรียน${o(D[se])}</title><style>@page{size:A4 landscape;margin:12mm}body{font-family:Tahoma,Arial,sans-serif;color:#111;font-size:12px}h1{text-align:center;font-size:20px;margin:0 0 8px}.meta{text-align:center;margin:6px 0}table{width:100%;border-collapse:collapse;margin-top:14px}th,td{border:1px solid #555;padding:6px;vertical-align:top}th{background:#eee}thead{display:table-header-group}tr{break-inside:avoid}td:first-child{text-align:center}th:last-child{width:8%}</style></head><body><h1>รายชื่อผู้สมัครสภานักเรียน${o(D[se])}</h1><p class="meta">ปีการศึกษา ${o(String(Y))} · ${e.length} ใบสมัคร / ${new Set(e.map(a=>{var s,c;return((s=a.students)==null?void 0:s.id)??((c=a.students)==null?void 0:c.student_code)??a.id})).size} คน</p><p class="meta">${o(r)}</p><p class="meta">วันที่พิมพ์ ${o(new Date().toLocaleString("th-TH",{timeZone:"Asia/Bangkok",dateStyle:"long",timeStyle:"short"}))}</p><table><thead><tr><th>ลำดับ</th><th>รหัสนักเรียน</th><th>ชื่อ–สกุล</th><th>ห้อง</th><th>ฝ่ายที่สมัคร</th><th>สถานะใบสมัคร</th><th>ครูที่ปรึกษา</th>${t?"<th>การรับรองพี่สภา</th>":""}<th>หมายเหตุ</th></tr></thead><tbody>${n}</tbody></table></body></html>`)}function Oi(){if(!d.isAdmin&&!d.isCouncilAdvisor)return"";if(R===null)return At(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(le===null)return Pr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(me===null)return Yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=le.reduce((b,v)=>b+Number(v.weight),0),t=e/2;se!=="M"&&se!=="W"&&(se="M");const r=R.filter(b=>{var v;return((v=b.council_positions)==null?void 0:v.gender)===se}),n=`
    <div class="flex gap-2 mb-3">
      ${["M","W"].map(b=>`
        <button type="button" class="apps-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${b===se?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${b}">
          สภา${D[b]} <span class="${b===se?"text-white/80":"text-[var(--muted-2)]"}">${R.filter(v=>{var h;return((h=v.council_positions)==null?void 0:h.gender)===b}).length}</span>
        </button>`).join("")}
    </div>`,l={all:r.length};r.forEach(b=>{const v=Qt(b);l[v]=(l[v]??0)+1}),Ht.some(b=>b.id===ke)||(ke="all");const i=`
    <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
      ${Ht.map(b=>`
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${b.id===ke?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${b.id}">
          ${o(b.label)} <span class="${b.id===ke?"text-white/80":"text-[var(--muted-2)]"}">${l[b.id]??0}</span>
        </button>`).join("")}
    </div>`,a=[...new Set(r.map(b=>tr(b.students)).filter(Boolean))].sort((b,v)=>b.localeCompare(v,"th")),s=d.positions.filter(b=>b.gender===se).sort((b,v)=>b.sort_order-v.sort_order),c=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      <select id="apps-grade-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกระดับชั้น</option>
        ${a.map(b=>`<option value="${o(b)}" ${b===ht?"selected":""}>${o(b)}</option>`).join("")}
      </select>
      <select id="apps-position-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกฝ่าย</option>
        ${s.map(b=>`<option value="${b.id}" ${String(b.id)===String(Ce)?"selected":""}>${o(b.position_name)}</option>`).join("")}
      </select>
      <select id="apps-advisor-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองครูที่ปรึกษา: ทั้งหมด</option>
        <option value="yes" ${Ye==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${Ye==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>
      ${Le()?`
      <select id="apps-peer-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองพี่สภา: ทั้งหมด</option>
        <option value="yes" ${ze==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${ze==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>`:""}
    </div>`,m=`<datalist id="council-teacher-datalist">${me.map(b=>`<option value="${o(b.full_name)} · รหัส ${b.id}"></option>`).join("")}</datalist>`;if(!r.length)return`${n}${i}${c}${m}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภา${D[se]}</p>`;const p=Va();if(!p.length)return`${n}${i}${c}${m}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`;const u=b=>{var A,S,N,q,M,z,be,ve,X,y,_,L,C,j;const v=(A=b.council_interviews)==null?void 0:A[0],[h,$]=st[b.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],w=Pa[(S=b.council_positions)==null?void 0:S.gender]??"bg-[var(--bg-2)] text-[var(--muted)]",T=!!((N=b.council_positions)!=null&&N.is_elected),E=Qt(b);return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${b.id}">
      <div class="flex items-center gap-3">
        ${G(b.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((q=b.students)==null?void 0:q.full_name)??"—")}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${w}">${o(D[(M=b.council_positions)==null?void 0:M.gender]??"—")}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${o(((z=b.students)==null?void 0:z.student_code)??"")} · ${o(((be=b.students)==null?void 0:be.main_room)??"")} · ${o(((ve=b.council_positions)==null?void 0:ve.position_name)??"—")}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${$}">${h}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${b.id}">📄 ดูใบสมัคร</button>

      ${E==="awaiting_endorsement"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${Oa(b)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}

      ${b.status==="pending"&&b.endorsed_at&&Ve(b)?`
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${b.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-profile-id="${o(((X=b.students)==null?void 0:X.profile_id)??"")}" data-student-name="${o(((y=b.students)==null?void 0:y.full_name)??"")}" data-position-name="${o(((_=b.council_positions)==null?void 0:_.position_name)??"")}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${v!=null&&v.interviewer_teacher_id?o(qi(v.interviewer_teacher_id)):""}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>`:""}

      ${b.status==="interview_scheduled"?`
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${v!=null&&v.scheduled_at?new Date(v.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"—"} ${v!=null&&v.location?"· "+o(v.location):""} ${v!=null&&v.interviewer_teacher_id?"· กรรมการ "+o(((L=me.find(P=>P.id===v.interviewer_teacher_id))==null?void 0:L.full_name)??""):""}</p>
          <form class="score-form space-y-1.5" data-app-id="${b.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-max-weight="${e}" data-pass-threshold="${t}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${le.map(P=>{var J;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${o(P.name)} <span class="text-[var(--muted-2)]">(เต็ม ${P.weight})</span></span>
                <input type="number" min="0" max="${P.weight}" step="0.5" name="c_${P.id}" data-criterion-id="${P.id}"
                  value="${((J=v==null?void 0:v.scores)==null?void 0:J[P.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
              </div>`}).join("")}
            <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]">
              <span class="text-[var(--ink-2)]">คะแนนรวม</span>
              <span class="score-total-display text-[var(--primary)]">${(v==null?void 0:v.score)??0} / ${e} · ต้อง ≥ ${t} จึงผ่าน</span>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${o((v==null?void 0:v.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>`:""}

      ${b.status==="interviewed"?`
        <div class="pt-1 border-t border-[var(--line-soft)]">
          ${T?`<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${b.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`:`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${b.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>`:""}

      ${b.status==="candidate"?`<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${((j=(C=b.council_candidates)==null?void 0:C[0])==null?void 0:j.ballot_number)??"—"} · รอผลเลือกตั้ง</p>`:""}
      ${b.status==="rejected"&&(v!=null&&v.comment)?`<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${o(v.comment)}</p>`:""}
    </div>`},x=Ce?`<div class="space-y-3">${p.map(u).join("")}</div>`:s.map(b=>{const v=p.filter(h=>h.position_id===b.id);return v.length?`
          <div class="mb-5">
            <p class="text-xs font-bold text-[var(--muted)] mb-2 px-1">${o(b.position_name)} <span class="text-[var(--muted-2)]">(${v.length})</span></p>
            <div class="space-y-3">${v.map(u).join("")}</div>
          </div>`:""}).join("");return`${n}${i}${c}<div class="flex justify-end mb-4"><button type="button" id="apps-print-roster" class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">🖨️ พิมพ์รายชื่อผู้สมัคร${o(D[se])}</button></div>${m}${x}${rr()}${Ga()}`}function Ua(e,t){var n,l,i,a;const r=String(t??"").trim().toLocaleLowerCase();return r?[(n=e.students)==null?void 0:n.full_name,(l=e.students)==null?void 0:l.student_code,(i=e.students)==null?void 0:i.main_room,(a=e.council_positions)==null?void 0:a.position_name].filter(Boolean).join(" ").toLocaleLowerCase().includes(r):!0}function Fi(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(R===null)return At(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลสัมภาษณ์...</p>';if(le===null)return Pr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดเกณฑ์สัมภาษณ์...</p>';if(me===null)return Yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดรายชื่อกรรมการ...</p>';["M","W"].includes(He)||(He="M");const e=R.filter(v=>{var h;return((h=v.council_positions)==null?void 0:h.gender)===He}),t=le.reduce((v,h)=>v+Number(h.weight),0),r=t/2,n=v=>v.status==="pending"&&v.endorsed_at&&Ve(v),l=v=>v.status==="interview_scheduled",i=v=>["interviewed","rejected"].includes(v.status),a=v=>Qe==="ready"?n(v):Qe==="scheduled"?l(v):Qe==="completed"?i(v):!0,s=e.filter(v=>a(v)&&Ua(v,Gt)),c={all:e.length,ready:e.filter(n).length,scheduled:e.filter(l).length,completed:e.filter(i).length},m=[["all","ทั้งหมด"],["ready","รอนัด"],["scheduled","รอให้คะแนน"],["completed","ประเมินแล้ว"]],p=["M","W"].map(v=>`<button type="button" class="interview-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${v===He?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${v}">สภา${D[v]} <span class="${v===He?"text-white/80":"text-[var(--muted-2)]"}">${R.filter(h=>{var $;return(($=h.council_positions)==null?void 0:$.gender)===v}).length}</span></button>`).join(""),u=m.map(([v,h])=>`<button type="button" class="interview-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${v===Qe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${v}">${h} <span class="${v===Qe?"text-white/80":"text-[var(--muted-2)]"}">${c[v]}</span></button>`).join(""),x=`<datalist id="council-interview-teacher-datalist">${me.map(v=>`<option value="${o(v.full_name)} · รหัส ${v.id}"></option>`).join("")}</datalist>`,b=s.map(v=>{var S,N,q,M,z,be,ve;const h=(S=v.council_interviews)==null?void 0:S[0],[$,w]=st[v.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],T=n(v)?`<form class="schedule-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-app-id="${v.id}" data-iv-id="${(h==null?void 0:h.id)??""}" data-profile-id="${o(((N=v.students)==null?void 0:N.profile_id)??"")}" data-position-name="${o(((q=v.council_positions)==null?void 0:q.position_name)??"")}">
      <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p><div class="grid grid-cols-2 gap-2"><input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div>
      <input type="text" name="interviewerText" list="council-interview-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button></form>`:"",E=l(v)?`<div class="pt-2 border-t border-[var(--line-soft)]"><p class="text-xs text-[var(--muted)] mb-2">📅 ${h!=null&&h.scheduled_at?new Date(h.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"ยังไม่กำหนดเวลา"} ${h!=null&&h.location?"· "+o(h.location):""}</p><form class="score-form space-y-1.5" data-app-id="${v.id}" data-iv-id="${(h==null?void 0:h.id)??""}" data-max-weight="${t}" data-pass-threshold="${r}"><p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>${le.map(X=>{var y;return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${o(X.name)} <span class="text-[var(--muted-2)]">(เต็ม ${X.weight})</span></span><input type="number" min="0" max="${X.weight}" step="0.5" name="c_${X.id}" data-criterion-id="${X.id}" value="${((y=h==null?void 0:h.scores)==null?void 0:y[X.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]"></div>`}).join("")}<div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]"><span>คะแนนรวม</span><span class="score-total-display text-[var(--primary)]">${(h==null?void 0:h.score)??0} / ${t} · ต้อง ≥ ${r} จึงผ่าน</span></div><textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${o((h==null?void 0:h.comment)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกผล</button></form></div>`:"",A=i(v)?`<div class="pt-2 border-t border-[var(--line-soft)] text-xs ${v.status==="interviewed"?"text-[var(--ok)]":"text-[var(--bad)]"}">${v.status==="interviewed"?"✅ ผ่านสัมภาษณ์":"❌ ไม่ผ่านสัมภาษณ์"}${(h==null?void 0:h.score)!=null?` · คะแนน ${h.score}/${t}`:""}${h!=null&&h.comment?`<p class="text-[var(--muted)] mt-1">${o(h.comment)}</p>`:""}${v.status==="interviewed"?'<button type="button" class="goto-view mt-2 px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" data-view="yla">🌱 บันทึก/ติดตาม YLA →</button>':""}</div>`:"";return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${G(v.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${o(((M=v.students)==null?void 0:M.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${o(((z=v.students)==null?void 0:z.student_code)??"")} · ${o(((be=v.students)==null?void 0:be.main_room)??"")} · ${o(((ve=v.council_positions)==null?void 0:ve.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${w}">${$}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${v.id}">📄 ดูใบสมัคร</button>${!n(v)&&v.status==="pending"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${Oa(v)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}${T}${E}${A}</article>`}).join("");return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">🗓️ งานสัมภาษณ์</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">นัดหมายและประเมินผู้สมัคร</h1><p class="text-xs text-[var(--muted)] mt-2">แสดงเฉพาะข้อมูลใบสมัครของปีการศึกษาปัจจุบัน และใช้เกณฑ์คะแนนที่ตั้งไว้ในระบบ</p></section><div class="flex gap-2">${p}</div><div class="flex gap-2 overflow-x-auto pb-1">${u}</div><div class="flex gap-2"><input id="interview-search" value="${o(Gt)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="interview-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${s.length} รายการ จาก ${e.length} รายการ</p>${x}${s.length?`<div class="space-y-3">${b}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${rr()}</div>`}function Yi(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(R===null)return At(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลแต่งตั้ง...</p>';["M","W"].includes(Je)||(Je="M");const e=R.filter(u=>{var x;return((x=u.council_positions)==null?void 0:x.gender)===Je}),t=u=>{var x;return u.status==="interviewed"&&!((x=u.council_positions)!=null&&x.is_elected)},r=u=>u.status==="appointed",n=u=>Ke==="ready"?t(u):Ke==="appointed"?r(u):t(u)||r(u),l=e.filter(u=>n(u)&&Ua(u,Vt)),i={ready:e.filter(t).length,appointed:e.filter(r).length,all:e.filter(u=>t(u)||r(u)).length},a=["M","W"].map(u=>`<button type="button" class="appointment-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${u===Je?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${u}">สภา${D[u]} <span class="${u===Je?"text-white/80":"text-[var(--muted-2)]"}">${R.filter(x=>{var b;return((b=x.council_positions)==null?void 0:b.gender)===u&&(t(x)||r(x))}).length}</span></button>`).join(""),c=[["ready","รอแต่งตั้ง"],["appointed","แต่งตั้งแล้ว"],["all","ทั้งหมด"]].map(([u,x])=>`<button type="button" class="appointment-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${u===Ke?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${u}">${x} <span class="${u===Ke?"text-white/80":"text-[var(--muted-2)]"}">${i[u]}</span></button>`).join(""),m=l.map(u=>{var x,b,v,h;return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${G(u.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${o(((x=u.students)==null?void 0:x.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${o(((b=u.students)==null?void 0:b.student_code)??"")} · ${o(((v=u.students)==null?void 0:v.main_room)??"")} · ${o(((h=u.council_positions)==null?void 0:h.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${u.status==="appointed"?st.appointed[1]:st.interviewed[1]}">${u.status==="appointed"?"แต่งตั้งแล้ว":"รอแต่งตั้ง"}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${u.id}">📄 ดูใบสมัครและผลสัมภาษณ์</button>${t(u)?`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${u.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`:'<p class="text-xs text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">บันทึกสมาชิกภาพเรียบร้อยแล้ว</p>'}</article>`}).join(""),p=e.filter(u=>{var x;return u.status==="interviewed"&&((x=u.council_positions)==null?void 0:x.is_elected)}).length;return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">✅ การแต่งตั้งสมาชิก</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ผู้ผ่านสัมภาษณ์ที่พร้อมเข้าสภา</h1><p class="text-xs text-[var(--muted)] mt-2">หน้านี้ใช้สำหรับตำแหน่งแต่งตั้งโดยตรง ส่วนตำแหน่งประธาน/รองประธานที่มาจากการเลือกตั้งให้ดำเนินการต่อในแท็บว่าที่ประธาน</p></section><div class="flex gap-2">${a}</div><div class="flex gap-2 overflow-x-auto pb-1">${c}</div><div class="flex gap-2"><input id="appointment-search" value="${o(Vt)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="appointment-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${l.length} รายการ จาก ${i[Ke]} รายการ · ผ่านสัมภาษณ์สายเลือกตั้งรอดำเนินการ ${p} รายการ</p>${l.length?`<div class="space-y-3">${m}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${rr()}</div>`}const zi=[{label:"ประธาน",match:e=>!!(e!=null&&e.is_elected)},{label:"รองประธาน",match:e=>(e==null?void 0:e.position_name)==="รองประธานสภานักเรียน"},{label:"ฝ่ายงาน",match:e=>((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"สำนักงานสภา",match:e=>!(e!=null&&e.is_elected)&&(e==null?void 0:e.position_name)!=="รองประธานสภานักเรียน"&&(e==null?void 0:e.position_name)!==gr&&!((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"ยังไม่ระบุฝ่าย",match:e=>(e==null?void 0:e.position_name)===gr}];let xe="M";function Gi(){xe!=="M"&&xe!=="W"&&(xe="M");const e=d.members.filter(a=>{var s;return((s=a.council_positions)==null?void 0:s.gender)===xe}).sort((a,s)=>{var c,m;return(((c=a.council_positions)==null?void 0:c.sort_order)??99)-(((m=s.council_positions)==null?void 0:m.sort_order)??99)}),t=`
    <div class="flex gap-2 mb-4">
      ${["M","W"].map(a=>`
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${a===xe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${a}">สภา${D[a]}</button>`).join("")}
    </div>`,r=(d.isAdmin||d.isCouncilAdvisor)&&$r()?`<button type="button" id="btn-add-council-member" class="w-full py-2.5 rounded-xl border border-dashed border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mb-4 hover:bg-[var(--primary-soft)]">＋ เพิ่มสมาชิกสภา${D[xe]}</button>`:"",n=d.isAdmin||d.isChair&&d.chairGender===xe,l=a=>{var s,c,m;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${G(a.students,"w-16 h-20 mx-auto")}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${o(((s=a.students)==null?void 0:s.full_name)??"—")}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${o(((c=a.students)==null?void 0:c.main_room)??"")}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${o(((m=a.council_positions)==null?void 0:m.position_name)??"—")}</p>
      ${a.status!=="active"?`<span class="inline-block mt-1 px-2 py-0.5 rounded-full text-[0.625rem] font-bold ${a.status==="designate"?"bg-[var(--gold-soft)] text-[var(--gold-ink)]":"bg-[var(--surface-2)] text-[var(--muted)]"}">${a.status==="designate"?"ว่าที่สมาชิก":"หมดวาระ"}</span>`:""}
      ${n?`
        <button type="button" class="btn-toggle-can-create w-full mt-2 text-[0.625rem] font-bold py-1 rounded-[8px] border ${a.can_create_activities?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--muted)]"}" data-id="${a.id}" data-value="${a.can_create_activities?"":"1"}">${a.can_create_activities?"✅ สร้างกิจกรรมได้":"➕ ให้สิทธิ์สร้างกิจกรรม"}</button>`:""}
      ${(d.isAdmin||d.isCouncilAdvisor)&&$r()?`
        <div class="flex gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-edit-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">✏️ แก้ไข</button>
          ${d.isAdmin?`<button type="button" class="btn-remove-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">🗑️ ลบ</button>`:""}
        </div>`:""}
    </div>`},i=zi.map(a=>{const s=e.filter(c=>a.match(c.council_positions));return s.length?`
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${a.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${s.map(l).join("")}</div>
      </div>`:""}).join("");return`${r}${t}${i||`<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${D[xe]}</p>`}`}function sa({mode:e,gender:t,member:r}){var c,m,p,u;if(!(d.isAdmin||d.isCouncilAdvisor)||!$r())return;(c=document.getElementById("member-modal"))==null||c.remove();const n=d.positions.filter(x=>x.gender===t);let l=e==="edit"?r.students:null,i=null;const a=document.createElement("div");a.id="member-modal",a.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">${e==="add"?`➕ เพิ่มสมาชิกสภา${D[t]}`:"✏️ แก้ไขสมาชิกสภา"}</p>
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
            <p class="text-sm font-bold text-[var(--ink)]">${o(((m=r.students)==null?void 0:m.full_name)??"—")} · ${o(((p=r.students)==null?void 0:p.student_code)??"")}</p>
          </div>
        `}
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ตำแหน่ง <span class="text-[var(--bad)]">*</span></label>
          <select id="member-position-select" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— เลือกตำแหน่ง —</option>
            ${n.map(x=>`<option value="${x.id}" ${e==="edit"&&r.position_id===x.id?"selected":""}>${o(x.position_name)}</option>`).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เริ่มวาระ</label>
            <input type="date" id="member-term-start" value="${o(e==="edit"?r.term_start_date??"":((u=kt())==null?void 0:u.duty_start_date)||new Date().toISOString().slice(0,10))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          ${e==="edit"?`
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สิ้นสุดวาระ (ถ้ามี)</label>
            <input type="date" id="member-term-end" value="${o(r.term_end_date??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
    </div>`,document.body.appendChild(a),a.querySelector("#btn-close-member-modal").addEventListener("click",()=>a.remove()),a.addEventListener("click",x=>{x.target===a&&a.remove()});const s=()=>{const x=a.querySelector("#member-student-selected");x&&(x.innerHTML=l?`
      <div class="flex items-center gap-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] p-2.5">
        ${G(l,"w-10 h-12")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${o(l.full_name)}</p>
          <p class="text-[0.6875rem] text-[var(--muted-2)] truncate">${o(l.student_code)} · ${o(l.main_room??"")}</p>
        </div>
      </div>`:"")};if(e==="add"){const x=a.querySelector("#member-student-search"),b=a.querySelector("#member-student-results");x.addEventListener("input",()=>{clearTimeout(i);const v=x.value.trim();if(v.length<2){b.innerHTML="";return}i=setTimeout(async()=>{const h=await fa(v).catch(()=>[]);b.innerHTML=h.length?h.map($=>`
          <button type="button" class="member-search-result-item w-full text-left flex items-center gap-2 rounded-xl border border-[var(--line)] p-2 hover:bg-[var(--surface-2)]" data-id="${$.id}">
            <span class="text-sm font-bold text-[var(--ink)] flex-1 truncate">${o($.full_name)}</span>
            <span class="text-[0.6875rem] text-[var(--muted-2)] flex-shrink-0">${o($.student_code)} · ${o($.main_room??"")}</span>
          </button>`).join(""):'<p class="text-xs text-[var(--muted-2)] px-1">ไม่พบนักเรียน</p>',b.querySelectorAll(".member-search-result-item").forEach($=>{$.addEventListener("click",()=>{l=h.find(w=>w.id===Number($.dataset.id)),b.innerHTML="",x.value="",s()})})},300)})}a.querySelector("#btn-save-member").addEventListener("click",async()=>{var h,$,w,T,E;const x=Number(a.querySelector("#member-position-select").value);if(!x){f("กรุณาเลือกตำแหน่ง","warning");return}if(e==="add"&&!l){f("กรุณาค้นหาและเลือกนักเรียน","warning");return}const b=a.querySelector("#member-term-start").value,v=a.querySelector("#btn-save-member");v.disabled=!0,v.textContent="กำลังบันทึก...";try{if(e==="add")await Hn({termId:B,positionId:x,studentId:l.id,appointmentMethod:((h=a.querySelector("#member-appointment-method"))==null?void 0:h.value)||"direct",termStartDate:b,orderRef:($=a.querySelector("#member-order-ref"))==null?void 0:$.value.trim(),reason:(w=a.querySelector("#member-reason"))==null?void 0:w.value.trim(),evidenceUrl:(T=a.querySelector("#member-evidence"))==null?void 0:T.value.trim(),appointedByTeacherId:((E=d.teacher)==null?void 0:E.id)??null});else{const A=a.querySelector("#member-term-end").value;await Qn(r.id,{positionId:x,termStartDate:b,termEndDate:A})}f("บันทึกแล้ว ✅","success"),a.remove(),d.members=await Ue(null,B).catch(()=>d.members),g()}catch(A){f("บันทึกไม่สำเร็จ: "+I(A),"error"),v.disabled=!1,v.textContent="บันทึก"}})}function Vi(){if(d.role!=="teacher"||!d.teacher)return"";if(!d.pendingEndorsements.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>';const e=t=>{var r,n,l,i;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${t.id}">
      <div class="flex items-center gap-3">
        ${G(t.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((r=t.students)==null?void 0:r.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${o(((n=t.students)==null?void 0:n.student_code)??"")} · ${o(((l=t.students)==null?void 0:l.main_room)??"")} · สมัคร${o(((i=t.council_positions)==null?void 0:i.position_name)??"—")}</p>
          ${t.gpa_general!=null||t.gpa_religious!=null?`<p class="text-xs text-[var(--muted)] mt-0.5">เกรดสามัญ ${o(t.gpa_general??"—")} · เกรดศาสนา ${o(t.gpa_religious??"—")}</p>`:""}
        </div>
      </div>
      ${t.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${o(t.motivation)}</p>`:""}
      ${t.intro_video_url?`<a href="${o(t.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-xs font-bold text-[var(--primary)] hover:underline">🎬 ดูวิดีโอแนะนำตัว</a>`:""}
      <div class="flex flex-wrap gap-1.5">
        ${d.endorsementPhrases.map(a=>`
          <button type="button" class="endorse-phrase-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
            data-target="${t.id}" data-phrase="${o(a.phrase)}">${o(a.phrase)}</button>`).join("")}
      </div>
      <textarea class="endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${t.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-[var(--bad-soft-line)] text-[#8a2f22] text-xs font-bold hover:bg-[var(--bad-soft)]" data-id="${t.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${t.id}">✅ รับรอง</button>
      </div>
    </div>`};return`<div class="space-y-3">${d.pendingEndorsements.map(e).join("")}</div>`}const Kt={};async function Ui(e,t){Kt[t]=await Fs(e,t).catch(()=>[]),g()}function Wi(){var l;const e=d.membership[0];if(!e)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>';const t=(l=e.council_positions)==null?void 0:l.gender;if(!t)return"";if(Kt[e.id]===void 0)return Ui(t,e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const r=Kt[e.id];if(!r.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>';const n=i=>{var a,s,c,m;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${i.id}">
      <div class="flex items-center gap-3">
        ${G(i.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((a=i.students)==null?void 0:a.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${o(((s=i.students)==null?void 0:s.student_code)??"")} · ${o(((c=i.students)==null?void 0:c.main_room)??"")} · สมัคร${o(((m=i.council_positions)==null?void 0:m.position_name)??"—")}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] flex-shrink-0">ขอให้คุณรับรอง</span>
      </div>
      ${i.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${o(i.motivation)}</p>`:""}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${i.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${i.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`};return`<div class="space-y-3">${r.map(n).join("")}</div>`}async function Hi(e){const t=d.membership[0];if(!t)return;const r=document.querySelector(`.peer-endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())||null;try{await Jn({applicationId:Number(e),memberId:t.id,comment:n}),f("รับรองในนามสภานักเรียนแล้ว ✅","success"),delete Kt[t.id],g()}catch(l){f("บันทึกไม่สำเร็จ: "+I(l),"error")}}async function oa(e,t){const r=document.querySelector(`.endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())??"";if(!n){f("กรุณาใส่คอมเมนต์ก่อนยืนยัน","warning");return}try{t==="confirm"?(await Kn({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),f("รับรองใบสมัครแล้ว ✅","success")):(await Xn({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),f('บันทึกผล "ไม่รับรอง" แล้ว',"success")),await Jo(),g()}catch(l){f("บันทึกไม่สำเร็จ: "+I(l),"error")}}const Wa={planned:["ยังไม่จัด","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],completed:["เสร็จแล้ว","text-[#106143]","bg-[var(--ok-soft-line)]","border-[var(--ok-soft-line)]"],cancelled:["ยกเลิก","text-[var(--muted-2)]","bg-[var(--surface-2)]","border-[var(--line)]"]},Ha=[["completed","เสร็จแล้ว","border-[var(--ok-soft-line)] bg-[var(--ok-soft)]","text-[var(--ok)]"],["ongoing","กำลังดำเนินการ","border-[var(--primary-soft-line)] bg-[var(--primary-soft)]","text-[var(--primary)]"],["planned","ยังไม่จัด","border-[var(--gold-soft-line)] bg-[var(--gold-soft)]","text-[var(--gold-ink)]"],["cancelled","ยกเลิก","border-[var(--line-soft)] bg-[var(--surface-2)]","text-[var(--muted-2)]"]],ia={planned:"ongoing",ongoing:"completed"},Qi={planned:"▶️ เริ่มดำเนินการ",ongoing:"✅ ทำเครื่องหมายเสร็จแล้ว"};async function Qa(){ae=await Xs(Y,B).catch(()=>[]),g()}async function la(e){$e[e]=await to(e).catch(()=>new Set),g()}function Ji(e){return d.isAdmin||d.isChair||d.isCouncilAdvisor?!0:!!(e.owner_member_id&&d.membership.some(t=>t.id===e.owner_member_id))}async function Ja(){ie=await wo().catch(()=>[]),g()}async function Ka(e){const[t,r,n,l]=await Promise.all([ro(e).catch(()=>null),ao(e).catch(()=>[]),no(e).catch(()=>[]),$o("council_activity",e).catch(()=>[])]);tt[e]=t,Dr[e]=r,Mr[e]=n,xt[e]=Object.fromEntries(l.map(i=>[i.student_id,i])),g()}function Ki({rule:e,override:t,attendanceRows:r}){var l;if((t==null?void 0:t.override_decision)==="pass")return"pass";if((t==null?void 0:t.override_decision)==="fail")return"fail";if(!e)return"no_rule";const n=r.length;if(e.min_attendance_count&&n<e.min_attendance_count)return"not_eligible";if((l=e.required_dates)!=null&&l.length){const i=new Set(r.map(s=>(s.checked_in_at||"").slice(0,10)));if(e.required_dates.some(s=>!i.has(s)))return"not_eligible"}return"pass"}function Xi(){var s,c,m;if(ae===null)return Qa(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.canCreateActivities,t=e&&!d.isAdmin&&!d.isChair,r=d.membership[0],n={};ae.forEach(p=>{n[p.status]=(n[p.status]??0)+1});const l=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${Ha.map(([p,u,x,b])=>`
        <div class="rounded-xl border ${x} p-3 text-center">
          <p class="text-2xl font-bold ${b}">${n[p]??0}</p>
          <p class="text-[0.6875rem] text-[var(--muted)]">${u}</p>
        </div>`).join("")}
    </div>`,i=e?`
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
            ${d.members.map(p=>{var u,x;return`<option value="${p.id}">${o(((u=p.students)==null?void 0:u.full_name)??"—")} (${o(((x=p.council_positions)==null?void 0:x.position_name)??"—")})</option>`}).join("")}
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
    </div>`:"";if(!ae.length)return`${l}${i}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`;const a=p=>{var E,A;const[u,x,b,v]=Wa[p.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]","border-[var(--line)]"],h=d.members.filter(S=>{var N;return!p.gender||((N=S.council_positions)==null?void 0:N.gender)===p.gender}),$=$e[p.id],w=Ji(p),T=(A=(E=p.council_members)==null?void 0:E.students)==null?void 0:A.full_name;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${p.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${o(p.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${p.activity_date?new Date(p.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} ${p.gender?"· สภา"+D[p.gender]:""} ${p.owner_text?"· "+o(p.owner_text):""} ${T?"· ผู้รับผิดชอบ "+o(T):""}</p>
            ${p.open_to_general?'<span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mt-1">🙋 เปิดให้นักเรียนทั่วไปเข้าร่วม</span>':""}
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${v} ${b} ${x}">${u}</span>
        </div>
        ${p.detail?`<p class="text-xs text-[var(--ink-2)]">${o(p.detail)}</p>`:""}
        ${w?`
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            <!-- เดิมจำกัดแค่ admin/chair เปลี่ยนสถานะได้ — แต่กิจกรรมที่ค้างสถานะ "planned" ตลอดไป
                 จะไม่ถูกนับใน % เช็คชื่อสำหรับประเมินเลย (นับเฉพาะ ongoing/completed) ผู้รับผิดชอบ
                 ที่ได้รับมอบหมาย (owner) จึงต้องเปลี่ยนสถานะกิจกรรมของตัวเองได้ด้วย ไม่งั้นฟีเจอร์
                 "สร้าง+เช็คชื่อได้เอง" จะใช้ไม่ได้จริงเพราะกิจกรรมไม่มีวันถูกนับผล -->
            ${w&&ia[p.status]?`<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${p.id}" data-next="${ia[p.status]}">${Qi[p.status]}</button>`:""}
            ${w&&p.status!=="cancelled"&&p.status!=="completed"?`<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${p.id}">ยกเลิก</button>`:""}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${p.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${p.id}" data-title="${o(p.title)}" data-open-general="${p.open_to_general?"1":""}">📷 สแกน QR เช็คอิน</button>
            <button type="button" class="btn-activity-cert-manage text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-id="${p.id}">🏅 จัดการเกียรติบัตร</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${p.id}">
            ${$?`
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${h.map(S=>{var q;const N=$.has(S.student_id);return`<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${N?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"}" data-activity-id="${p.id}" data-student-id="${S.student_id}" ${N?"disabled":""}>
                    <span>${N?"✅":"➕"}</span><span class="truncate">${o(((q=S.students)==null?void 0:q.full_name)??"—")}</span>
                  </button>`}).join("")}
                ${h.length?"":'<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>'}
              </div>`:""}
          </div>
          ${kr===p.id?el(p):""}`:""}
      </div>`};return`${l}${i}<div class="space-y-3">${ae.map(a).join("")}</div>`}const Zi={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft)] border-[var(--ok-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft)] border-[var(--bad-soft-line)]"],not_eligible:["ยังไม่ครบเงื่อนไข","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],no_rule:["ยังไม่ตั้งเงื่อนไข","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"]};function el(e){if(ie===null&&Ja(),tt[e.id]===void 0&&Ka(e.id),ie===null||tt[e.id]===void 0)return'<div class="mt-2 pt-2 border-t border-dashed border-[var(--line)]"><p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>';const t=tt[e.id],r=Dr[e.id]??[],n=Mr[e.id]??[],l=Object.fromEntries(r.map(p=>[p.student_id,p])),i=xt[e.id]??{},a={};n.forEach(p=>{a[p.student_id]||(a[p.student_id]={student:p.students,rows:[]}),a[p.student_id].rows.push(p)});const s=`
    <form class="cert-rule-form space-y-2 bg-[var(--surface-2)] rounded-xl p-3" data-activity-id="${e.id}">
      <p class="text-xs font-bold text-[var(--ink-2)]">🏅 เงื่อนไขการรับเกียรติบัตร</p>
      <select name="template_id" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
        <option value="">— ยังไม่เลือกเทมเพลต —</option>
        ${ie.map(p=>`<option value="${p.id}" ${(t==null?void 0:t.template_id)===p.id?"selected":""}>${o(p.name)}</option>`).join("")}
      </select>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)] flex-shrink-0">ต้องเข้าร่วมอย่างน้อย</span>
        <input type="number" min="0" name="min_attendance_count" value="${(t==null?void 0:t.min_attendance_count)??""}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)]" />
        <span class="text-xs text-[var(--muted)]">ครั้ง</span>
      </div>
      <div>
        <label class="block text-[0.6875rem] text-[var(--muted)] mb-1">วันที่บังคับต้องเข้าร่วม (ถ้ามี บรรทัดละ 1 วัน รูปแบบ YYYY-MM-DD)</label>
        <textarea name="required_dates" rows="2" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${o(((t==null?void 0:t.required_dates)??[]).join(`
`))}</textarea>
      </div>
      <textarea name="notes" rows="2" placeholder="หมายเหตุเงื่อนไข (แสดงให้นักเรียนเห็น เช่น ต้องผ่านการประเมินความประพฤติด้วย)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${o((t==null?void 0:t.notes)??"")}</textarea>
      <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกเงื่อนไข</button>
    </form>`,c=Object.keys(a),m=c.map(p=>{const u=Number(p),{student:x,rows:b}=a[u],v=l[u],h=Ki({rule:t,override:v,attendanceRows:b}),[$,w]=Zi[h],T=i[u];return`
      <div class="rounded-xl border border-[var(--line-soft)] p-2.5 space-y-1.5" data-cert-row="${u}">
        <div class="flex items-center gap-2">
          ${G(x,"w-8 h-10")}
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-[var(--ink)] truncate">${o((x==null?void 0:x.full_name)??"—")}</p>
            <p class="text-[0.625rem] text-[var(--muted-2)]">เข้าร่วม ${b.length} ครั้ง</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${w}">${$}</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(v==null?void 0:v.override_decision)==="pass"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${u}" data-decision="pass">✅ ผ่าน (บังคับ)</button>
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(v==null?void 0:v.override_decision)==="fail"?"border-[var(--bad-soft-line)] bg-[var(--bad-soft)] text-[#8a2f22]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${u}" data-decision="fail">❌ ไม่ผ่าน (บังคับ)</button>
          ${v!=null&&v.override_decision?`<button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)]" data-activity-id="${e.id}" data-student-id="${u}" data-decision="">↺ กลับเป็นอัตโนมัติ</button>`:""}
          ${h==="pass"?T?`<button type="button" class="btn-cert-view text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${u}">🏅 ดูเกียรติบัตร</button>`:`<button type="button" class="btn-cert-issue text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${u}">🏅 ออกเกียรติบัตร</button>`:""}
        </div>
      </div>`}).join("");return`
    <div class="mt-2 pt-2 border-t border-dashed border-[var(--line)] space-y-3">
      ${s}
      <div>
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1.5">รายชื่อผู้เข้าร่วม (${c.length} คน)</p>
        <div class="space-y-1.5">${m||'<p class="text-xs text-[var(--muted-2)] text-center py-3">ยังไม่มีใครเช็คชื่อเข้าร่วมกิจกรรมนี้</p>'}</div>
      </div>
    </div>`}const da={info:["แจ้งให้ทราบ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],ack:["ต้องกดรับทราบ","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],urgent:["ด่วน","text-[#8a2f22]","bg-[var(--bad-soft-line)]","border-[var(--bad-soft-line)]"]};async function tl(){Wt=await Zs().catch(()=>[]),g()}async function rl(){Ee=await po(d.student.id).catch(()=>new Set),g()}async function al(){const[e,t,r,n]=await Promise.all([mo().catch(()=>({})),bo().catch(()=>0),mr("M").catch(()=>0),mr("W").catch(()=>0)]);Ae=e,Dt={all:t,M:r,W:n},g()}function nl(){if(Wt===null)return tl(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';d.role==="student"&&d.student&&Ee===null&&rl(),Ae===null&&al();const e=d.isAdmin||d.isCouncilAdvisor||d.isChair,t=Wt.filter(c=>c.audience==="all"||c.audience===(d.student?Ie(d.student.gender):null)||c.audience==="candidates"&&!!Et||d.isAdmin||d.isChair||d.isCouncilAdvisor),r=Mt==="all"?t:t.filter(c=>c.type===Mt),n=e?'<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>':"",l=e&&Bt?`
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
            <option value="candidates">ว่าที่ประธานทุกคน</option>
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
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${Mt===c?"bg-[var(--primary)] text-white border-[var(--primary)]":"bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]"}" data-filter="${c}">${m}</button>`).join("")}
    </div>`;if(!r.length)return`${n}${l}${a}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`;const s=c=>{var w,T;const[m,p,u,x]=da[c.type]??da.info,b=(w=c.teachers)!=null&&w.full_name?o(c.teachers.full_name)+" (ครู)":(T=c.students)!=null&&T.full_name?o(c.students.full_name)+" (ประธานสภา)":"ระบบ",v=Ee==null?void 0:Ee.has(c.id),h=c.type==="ack"&&d.role==="student"&&d.student,$=Dt?Dt[c.audience]??Dt.all:null;return`
      <div class="rounded-xl border ${c.pinned?"border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${c.pinned?'<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>':""}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${x} ${u} ${p}">${m}</span>
          ${c.audience==="M"||c.audience==="W"?`<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${D[c.audience]}</span>`:c.audience==="candidates"?'<span class="text-[0.6875rem] text-[var(--muted-2)]">ว่าที่ประธาน</span>':""}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${o(c.title)}</p>
        ${c.body?`<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${o(c.body)}</p>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${b} · ${new Date(c.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
        ${c.type==="ack"?`<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${(Ae==null?void 0:Ae[c.id])??0}${$!=null?" จาก "+$:""} คน</p>`:""}
        ${h?v?'<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>':`<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${c.id}">รับทราบ</button>`:""}
      </div>`};return`${n}${l}${a}<div class="space-y-3">${r.map(s).join("")}</div>`}let pe=null,rt=null,Pt=null;const sl={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"],improve:["ควรปรับปรุง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]"]};async function Xa(){pe=await Ks().catch(()=>[]),g()}async function ol(){const e=await vo(Y,B).catch(()=>[]);rt=Object.fromEntries(e.map(t=>[t.member_id,t])),g()}function Za(){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${pe.reduce((t,r)=>t+Number(r.weight),0)} คะแนน)</p>
      <div class="space-y-1.5">
        ${pe.map(t=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${o(t.name)}</span>
            <span class="font-bold text-[var(--muted)]">${t.weight} คะแนน</span>
            <button type="button" class="btn-remove-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${t.id}">✕</button>
          </div>`).join("")}
      </div>
      <form id="criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มเกณฑ์ใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <input name="weight" type="number" min="1" placeholder="คะแนน" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`}function il(){if(pe===null)return Xa(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(rt===null)return ol(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.isAdmin||d.role==="teacher",t=pe.reduce((a,s)=>a+Number(s.weight),0),r=e?Za():"",n=a=>{var x,b;const s=rt[a.id],[c,m]=s!=null&&s.decision?sl[s.decision]:["ยังไม่ประเมิน","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"],p=d.role==="student"&&d.student&&a.student_id===d.student.id;if(!e&&!p)return"";const u=Pt===a.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${a.id}">
        <div class="flex items-center gap-3">
          ${G(a.students,"w-10 h-12")}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((x=a.students)==null?void 0:x.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${o(((b=a.council_positions)==null?void 0:b.position_name)??"—")}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${m}">${c}</span>
            ${(s==null?void 0:s.total_score)!=null?`<p class="text-xs text-[var(--muted-2)] mt-0.5">${s.total_score}/${s.max_score??t}</p>`:""}
          </div>
        </div>
        ${e?`<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${a.id}">${u?"▲ ซ่อนแบบประเมิน":s?"✏️ แก้ไขคะแนน":"📝 ให้คะแนน"}</button>`:""}
        ${e&&u?`
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${a.id}">
            ${pe.map(v=>{var h;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${o(v.name)} <span class="text-[var(--muted-2)]">(เต็ม ${v.weight})</span></span>
                <input type="number" min="0" max="${v.weight}" step="0.5" name="c_${v.id}" value="${((h=s==null?void 0:s.scores)==null?void 0:h[v.id])??""}" class="w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center" />
              </div>`}).join("")}
            <select name="decision" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)]">
              <option value="">— สรุปผล —</option>
              <option value="pass" ${(s==null?void 0:s.decision)==="pass"?"selected":""}>ผ่าน</option>
              <option value="improve" ${(s==null?void 0:s.decision)==="improve"?"selected":""}>ควรปรับปรุง</option>
              <option value="fail" ${(s==null?void 0:s.decision)==="fail"?"selected":""}>ไม่ผ่าน</option>
            </select>
            <textarea name="comment" rows="2" placeholder="ความเห็นผู้ประเมิน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none">${o((s==null?void 0:s.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผลประเมิน</button>
          </form>`:""}
        ${(s==null?void 0:s.decision)==="pass"?s.certificate_issued_at?`<button type="button" class="btn-view-cert text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-member-id="${a.id}">🏅 ดูเกียรติบัตร</button>`:e?`<button type="button" class="btn-issue-cert text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-member-id="${a.id}">🏅 ออกเกียรติบัตร</button>`:"":""}
      </div>`},i=d.members.filter(a=>e||d.role==="student"&&d.student&&a.student_id===d.student.id).map(n).filter(Boolean).join("");return!e&&!i?`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`:i?`${r}<div class="space-y-3">${i}</div>`:`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`}function ll({member:e,evaluation:t,cfg:r}){var c,m;const n=o(((c=e.students)==null?void 0:c.full_name)??"—"),l=o(((m=e.council_positions)==null?void 0:m.position_name)??"—"),i=o(r.council_name||"ระบบสภานักเรียน"),a=o(t.certificate_no||""),s=new Date(t.certificate_issued_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"});return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
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
        <p style="color:#6e5f65;font-size:13px;letter-spacing:1px;">${i}</p>
        <h1>เกียรติบัตร</h1>
        <p style="color:#4a3b41;">มอบเพื่อแสดงว่า</p>
        <p class="name">${n}</p>
        <p style="color:#1d1519;line-height:1.9;max-width:560px;margin:0 auto;">ได้ปฏิบัติหน้าที่ <b>${l}</b> ของ${i} ด้วยความรับผิดชอบ ทุ่มเท และเป็นแบบอย่างที่ดี จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:#90828a;font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${s} ${a?"· เลขที่ "+a:""}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
    </body></html>`}function ca(e,t){Te(ll({member:e,evaluation:t,cfg:d.cfg}))}let ee=null,fe=null,en="FORM_09_1_PROJECT_PROPOSAL",ft=null,gt=null;const tn={draft:["ร่าง","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],pending_advisor:["รอครูที่ปรึกษาประจำฝ่ายรับรอง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_dept_head:["รอหัวหน้าฝ่ายกิจการนักเรียน","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_director:["รอผู้อำนวยการ","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],approved:["อนุมัติแล้ว","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"]},dl={FORM_09_ACTIVITY_APPROVAL:"แบบ 09 ขออนุมัติจัดกิจกรรม",FORM_09_1_PROJECT_PROPOSAL:"แบบ 09.1 แบบเสนอโครงการ"},St=e=>dl[e]??e??"เอกสารโครงการ";async function cl(){ee=await Js(Y,B).catch(()=>[]),g()}async function ul(){gt=d.teacher?await Ea(d.teacher.id).catch(()=>[]):[],g()}const je=e=>(e||"").split(`
`).map(t=>t.trim()).filter(Boolean),Lt=(e,t)=>je(e).map(r=>{const n=r.split("|").map(l=>l.trim());for(;n.length<t;)n.push("");return n.slice(0,t)}),Tt=e=>(Array.isArray(e)?e:[]).map(t=>t.join(" | ")).join(`
`),dt=e=>(Array.isArray(e)?e:[]).join(`
`),rn=e=>Number(e||0).toLocaleString("th-TH"),an=e=>(e.budget_items||[]).reduce((t,r)=>t+(Number(r[1])||0),0),Xt=["title","planArea","projectType","schoolStrategy","educationStandard","responsiblePersons","rationale","objectives","goalsQuantitative","goalsQualitative","workSteps","durationText","locationText","budgetItems","stakeholders","evaluationItems","expectedResults"];function pl(){return["คุณคือผู้ช่วยแปลงไฟล์ใบเสนอโครงการของโรงเรียน (ไฟล์ที่แนบมาในแชทนี้) ให้เป็นข้อมูล CSV ตามสเปคที่กำหนดไว้เป๊ะๆ ด้านล่างนี้ ห้ามแต่งข้อมูลขึ้นเองถ้าไม่มีในไฟล์ต้นฉบับ — เว้นว่างไว้แทน","","สร้างตาราง CSV จำนวน 1 แถวข้อมูล (แถวหัวตาราง 1 แถว + แถวข้อมูล 1 แถว) โดยแถวหัวตารางต้องเป็นข้อความนี้เป๊ะๆ (ห้ามแปล ห้ามสลับลำดับ ห้ามเว้นคอลัมน์):",Xt.join(","),"","ความหมายแต่ละคอลัมน์และวิธีใส่ข้อมูล:","- title: ชื่อโครงการ","- planArea: แผนงาน","- projectType: ลักษณะโครงการ (เช่น โครงการต่อเนื่อง/โครงการใหม่)","- schoolStrategy: สนองกลยุทธ์โรงเรียน","- educationStandard: สนองมาตรฐานการศึกษา/ตัวชี้วัด","- responsiblePersons: ผู้รับผิดชอบโครงการ — ถ้ามีหลายคน ให้ขึ้นบรรทัดใหม่ทีละคนภายในเซลล์เดียวกัน","- rationale: หลักการและเหตุผล","- objectives: วัตถุประสงค์ — ขึ้นบรรทัดใหม่ทีละข้อภายในเซลล์เดียวกัน","- goalsQuantitative: เป้าหมายเชิงปริมาณ — ขึ้นบรรทัดใหม่ทีละข้อ","- goalsQualitative: เป้าหมายเชิงคุณภาพ — ขึ้นบรรทัดใหม่ทีละข้อ",'- workSteps: วิธีดำเนินงาน — แต่ละขั้นตอนขึ้นบรรทัดใหม่ 1 บรรทัดต่อ 1 ขั้นตอน แต่ละบรรทัดคั่น 4 ค่าด้วย " | " ตามลำดับ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ',"- durationText: ระยะเวลาดำเนินการโครงการโดยรวม","- locationText: สถานที่ดำเนินงาน",'- budgetItems: งบประมาณ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: รายการ | จำนวนเงิน (ตัวเลขล้วน ห้ามมีคอมมาคั่นหลักหรือคำว่า "บาท")','- stakeholders: หน่วยงาน/ผู้เกี่ยวข้อง — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: หน่วยงาน/บุคคล | จำนวน (คน)','- evaluationItems: การประเมินผลความสำเร็จ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด',"- expectedResults: ผลที่คาดว่าจะได้รับ — ขึ้นบรรทัดใหม่ทีละข้อ","","กฎสำคัญที่ต้องทำตามเป๊ะๆ:",'1. คอลัมน์ไหนมีการขึ้นบรรทัดใหม่ภายในเซลล์ ต้องครอบข้อความทั้งเซลล์ด้วยเครื่องหมายคำพูด " " เสมอ (มาตรฐาน CSV)',"2. มีข้อมูลแค่ 1 แถวข้อมูลเท่านั้น (1 โครงการต่อ 1 ไฟล์)","3. ถ้าหาข้อมูลคอลัมน์ไหนไม่เจอในไฟล์ต้นฉบับ ให้เว้นว่างไว้ ห้ามเดาขึ้นมาเอง","4. ตอบกลับเฉพาะเนื้อหา CSV เท่านั้น ห้ามมีคำอธิบายอื่นปนอยู่ในคำตอบ ให้ครอบคำตอบทั้งหมดด้วย code block รูปแบบนี้: ```csv (เนื้อหา CSV) ```"].join(`
`)}function ml(e){let t=(e??"").trim();return t.startsWith("```")&&(t=t.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),t}function bl(e){const t=[];let r=[],n="",l=!1;const i=e.replace(/\r\n/g,`
`);for(let a=0;a<i.length;a++){const s=i[a];l?s==='"'?i[a+1]==='"'?(n+='"',a++):l=!1:n+=s:s==='"'?l=!0:s===","?(r.push(n),n=""):s===`
`?(r.push(n),t.push(r),r=[],n=""):n+=s}return r.push(n),t.push(r),t.filter(a=>a.some(s=>s.trim()!==""))}function vl(e){const t=ml(e);if(t.startsWith("{")){const a=JSON.parse(t),s={};for(const c of Xt){if(!(c in a))continue;const m=a[c];s[c]=Array.isArray(m)?m.map(p=>Array.isArray(p)?p.join(" | "):String(p??"")).join(`
`):String(m??"")}return s}const r=bl(t);if(r.length<2)throw new Error("ไม่พบข้อมูล — ต้องมีทั้งแถวหัวตารางและแถวข้อมูล");const n=r[0].map(a=>a.trim()),l=r[1],i={};return n.forEach((a,s)=>{Xt.includes(a)&&(i[a]=(l[s]??"").trim())}),i}function xl(e){const t=document.getElementById("doc-form");if(!t)return 0;let r=0;for(const n of Xt){if(e[n]===void 0)continue;const l=t.elements[n];l&&(l.value=e[n],r++)}return r}function fl(){var l;(l=document.getElementById("doc-ai-import-modal"))==null||l.remove();const e=document.createElement("div");e.id="doc-ai-import-modal",e.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#btn-close-doc-ai-import").addEventListener("click",()=>e.remove()),e.addEventListener("click",i=>{i.target===e&&e.remove()});const t=e.querySelector("#doc-ai-prompt"),r=cn({copyButton:e.querySelector("#btn-doc-ai-copy-prompt")});e.querySelector("#btn-doc-ai-generate-prompt").addEventListener("click",()=>{t.value=pl(),r.markGenerated(),f("สร้างคำสั่งสำหรับ AI แล้ว","success")}),e.querySelector("#btn-doc-ai-copy-prompt").addEventListener("click",async()=>{if(!r.isReady()){f("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(t.value),f("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}catch{t.select(),document.execCommand("copy"),f("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}});const n=i=>{try{const a=vl(i),s=xl(a);if(!s)throw new Error("ไม่พบข้อมูลที่ตรงกับฟอร์ม ตรวจสอบว่าหัวตาราง CSV ตรงกับคำสั่งที่กำหนด");f(`นำเข้าข้อมูลแล้ว ${s} ช่อง — กรุณาตรวจสอบความถูกต้องก่อนบันทึกร่าง`,"success"),e.remove()}catch(a){f("นำเข้าข้อมูลไม่สำเร็จ: "+I(a),"error")}};e.querySelector("#doc-ai-csv-file").addEventListener("change",async i=>{var s;const a=(s=i.target.files)==null?void 0:s[0];if(a)try{n(await a.text())}finally{i.target.value=""}}),e.querySelector("#btn-doc-ai-import").addEventListener("click",()=>{const i=e.querySelector("#doc-ai-paste").value;if(!i.trim()){f("กรุณาวางคำตอบจาก AI ก่อน","warning");return}n(i)})}function ua(){return d.isCouncilAdvisor||d.isAdmin||d.isChair}function gl(e){return e.status==="pending_advisor"&&(d.isAdmin||d.isCouncilAdvisor&&(gt==null?void 0:gt.includes(e.position_id)))}function yl(e){return e.status==="pending_dept_head"&&(d.isAdmin||d.isStudentAffairsHead)}function hl(e){return e.status==="pending_director"&&(d.isAdmin||d.isSchoolDirector)}function _l(){if(!(d.isAdmin||d.role==="teacher"||d.isChair))return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>';if(ee===null)return cl(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(d.isCouncilAdvisor&&gt===null)return ul(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(fe!==null)return $l();const t=ua()?`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <button type="button" class="btn-new-doc py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" data-form-key="FORM_09_ACTIVITY_APPROVAL">➕ ร่างแบบ 09 ขออนุมัติกิจกรรม</button>
        <button type="button" class="btn-new-doc py-3 rounded-2xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-sm font-bold" data-form-key="FORM_09_1_PROJECT_PROPOSAL">➕ ร่างแบบ 09.1 เสนอโครงการ</button>
      </div>`:"";if(!ee.length)return`${t}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`;const r=n=>{var s;const[l,i]=tn[n.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],a=d.student&&n.created_by_student_id===d.student.id||d.teacher&&n.created_by_teacher_id===d.teacher.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${o(n.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${o(St(n.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(n.form_version)||1} · ${(s=n.council_positions)!=null&&s.position_name?o(n.council_positions.position_name)+" · ":""}${rn(an(n))} บาท</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${i}">${l}</span>
        </div>
        ${n.status==="draft"&&n.last_rejected_stage?`<p class="text-xs text-[var(--bad)] bg-[var(--bad-soft)] rounded-[10px] p-2.5">↩️ ถูกตีกลับจากขั้น${o({advisor:"ครูที่ปรึกษาประจำฝ่าย",dept_head:"หัวหน้าฝ่ายกิจการนักเรียน",director:"ผู้อำนวยการ"}[n.last_rejected_stage]??n.last_rejected_stage)}${n.last_rejection_comment?": "+o(n.last_rejection_comment):""}</p>`:""}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-view-doc-detail text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">📄 ดูรายละเอียด</button>
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-edit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${n.id}">✏️ แก้ไข</button>`:""}
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">📤 เสนอขออนุมัติ</button>`:""}
          ${gl(n)||yl(n)||hl(n)?`
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${n.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${n.id}">❌ ไม่อนุมัติ</button>`:""}
          ${n.status==="approved"?`<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">🖨️ พิมพ์เอกสาร</button>${ua()?`<button type="button" class="btn-new-doc-revision text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">➕ สร้างฉบับแก้ไข</button>`:""}`:""}
        </div>
      </div>`};return`${t}<div class="space-y-3">${ee.map(r).join("")}</div>${wl()}`}function nn(e){try{return JSON.parse(d.cfg[e]||"[]")}catch{return[]}}function Nt({name:e,placeholder:t,configKey:r,value:n,extraClass:l=""}){const i=nn(r);return i.length?`<select name="${e}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${l}">
    <option value="">— เลือก${o(t)} —</option>
    ${i.map(a=>`<option value="${o(a)}" ${n===a?"selected":""}>${o(a)}</option>`).join("")}
  </select>`:`<input name="${e}" placeholder="${o(t)} (ยังไม่ได้ตั้งค่าตัวเลือกในหน้าตั้งค่า)" value="${o(n??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${l}" />`}function $l(){const e=fe==="new",t=e?{}:ee.find(a=>a.id===fe)??{},r=e?en:t.form_key||"FORM_09_1_PROJECT_PROPOSAL",n=St(r),l=d.isChair&&!d.isCouncilAdvisor&&!d.isAdmin?"council":t.origin??(d.isChair?"council":"teacher");re===null&&Vr();const i=re!=null&&re.length?`
    <div>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mb-1">ครูที่ปรึกษาสภานักเรียน (คลิกเพื่อเพิ่ม)</p>
      <div class="flex flex-wrap gap-1.5">
        ${re.map(a=>`<button type="button" class="doc-responsible-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition" data-name="${o(a.full_name)}">+ ${o(a.full_name)}</button>`).join("")}
      </div>
    </div>`:"";return`
    <div class="flex items-center gap-3 mb-4">
      <button type="button" id="btn-doc-form-back" class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
      <h2 class="text-base font-bold text-[var(--ink)]">${e?"ร่าง":"แก้ไขร่าง"}${o(n)}</h2>
    </div>
    <button type="button" id="btn-doc-ai-import-open" class="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-xs font-bold mb-3">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</button>
    <form id="doc-form" class="space-y-3" data-origin="${l}" data-form-key="${o(r)}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">ข้อมูลทั่วไป</p>
        <p class="text-xs font-bold text-[var(--primary)] mb-1">${o(n)} · ฉบับร่าง v${Number(t.form_version)||1}</p>
        <input name="title" required placeholder="ชื่อโครงการหรือชื่อกิจกรรม" value="${o(t.title??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <div class="grid grid-cols-2 gap-2">
          ${Nt({name:"planArea",placeholder:"แผนงาน",configKey:"council_doc_plan_areas",value:t.plan_area})}
          ${Nt({name:"projectType",placeholder:"ลักษณะโครงการ",configKey:"council_doc_project_types",value:t.project_type})}
        </div>
        ${Nt({name:"schoolStrategy",placeholder:"สนองกลยุทธ์โรงเรียน",configKey:"council_doc_school_strategies",value:t.school_strategy,extraClass:"w-full"})}
        ${Nt({name:"educationStandard",placeholder:"สนองมาตรฐานการศึกษา/ตัวชี้วัด",configKey:"council_doc_education_standards",value:t.education_standard,extraClass:"w-full"})}
        ${i}
        <textarea name="responsiblePersons" rows="2" placeholder="ผู้รับผิดชอบโครงการ (บรรทัดละ 1 ชื่อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(dt(t.responsible_persons))}</textarea>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ฝ่ายที่รับผิดชอบ ${l==="council"?'<span class="text-[var(--bad)]">*</span>':""}</label>
          <select name="positionId" ${l==="council"?"required":""} class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— ไม่ระบุ —</option>
            ${d.positions.map(a=>`<option value="${a.id}" ${t.position_id===a.id?"selected":""}>${o(a.position_name)} (สภา${o(D[a.gender]??"")})</option>`).join("")}
          </select>
          ${l==="council"?'<p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">โครงการที่สภาริเริ่มเองต้องระบุฝ่าย เพื่อส่งให้ครูที่ปรึกษาประจำฝ่ายนั้นตรวจก่อน</p>':""}
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หลักการ วัตถุประสงค์ เป้าหมาย</p>
        <textarea name="rationale" rows="3" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(t.rationale??"")}</textarea>
        <textarea name="objectives" rows="2" placeholder="วัตถุประสงค์ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(dt(t.objectives))}</textarea>
        <textarea name="goalsQuantitative" rows="2" placeholder="เป้าหมายเชิงปริมาณ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(dt(t.goals_quantitative))}</textarea>
        <textarea name="goalsQualitative" rows="2" placeholder="เป้าหมายเชิงคุณภาพ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(dt(t.goals_qualitative))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">วิธีดำเนินงาน</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ</p>
        <textarea name="workSteps" rows="4" placeholder="เสนอโครงการต่อผู้บริหาร | ธ.ค.2568 | - | นายเปาซี" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(Tt(t.work_steps))}</textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="durationText" placeholder="ระยะเวลาดำเนินการ" value="${o(t.duration_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <input name="locationText" placeholder="สถานที่ดำเนินงาน" value="${o(t.location_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">งบประมาณ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: รายการ | จำนวนเงิน(บาท) — รวมยอดคำนวณอัตโนมัติ</p>
        <textarea name="budgetItems" rows="4" placeholder="ค่าอาหาร 115 คน x 5 มื้อ | 17250" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(Tt(t.budget_items))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หน่วยงาน/ผู้เกี่ยวข้อง</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: หน่วยงาน/บุคคล | จำนวน(คน)</p>
        <textarea name="stakeholders" rows="3" placeholder="ครูที่ปรึกษา | 9" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(Tt(t.stakeholders))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">การประเมินผลความสำเร็จ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด</p>
        <textarea name="evaluationItems" rows="4" placeholder="ผู้เรียนพัฒนาศักยภาพผู้นำ | ร้อยละ 80 | ประเมินจากแบบสังเกตการณ์ | แบบสังเกตการณ์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(Tt(t.evaluation_items))}</textarea>
        <textarea name="expectedResults" rows="2" placeholder="ผลที่คาดว่าจะได้รับ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(dt(t.expected_results))}</textarea>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex gap-2">
        <button type="button" id="btn-doc-form-cancel" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกร่าง</button>
      </div>
    </form>`}function sn(e,t){var a;const r=o(t.council_name||"ระบบสภานักเรียน"),n=(s,c)=>c!=null&&c.length?`
    <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px;">
      <thead><tr>${s.map(m=>`<th style="border:1px solid #ccc;padding:6px;background:#f8f4f4;">${o(m)}</th>`).join("")}</tr></thead>
      <tbody>${c.map(m=>`<tr>${m.map(p=>`<td style="border:1px solid #ccc;padding:6px;">${o(p)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`:"",l=s=>s!=null&&s.length?`<ol style="margin:4px 0;padding-left:20px;">${s.map(c=>`<li>${o(c)}</li>`).join("")}</ol>`:"—",i='style="display:block;margin-bottom:3px;"';return`
    ${t.council_logo_url?`<img src="${o(t.council_logo_url)}" style="height:64px;object-fit:contain;display:block;margin:0 auto 8px;" />`:""}
    <h1 style="text-align:center;font-size:20px;margin-bottom:2px;">${o(St(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))}</h1>
    <p style="text-align:center;color:#6e5f65;font-size:13px;margin-bottom:20px;">${r} · ปีการศึกษา ${e.academic_year}</p>
    <div style="margin-bottom:12px;"><b ${i}>ชื่อโครงการ</b>${o(e.title)}</div>
    <div style="margin-bottom:12px;"><b ${i}>แผนงาน</b>${o(e.plan_area||"—")} &nbsp;·&nbsp; <b style="display:inline">ลักษณะโครงการ</b> ${o(e.project_type||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>สนองกลยุทธ์โรงเรียน</b>${o(e.school_strategy||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>สนองมาตรฐานการศึกษา/ตัวชี้วัด</b>${o(e.education_standard||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>ผู้รับผิดชอบโครงการ</b>${l(e.responsible_persons)}</div>
    <div style="margin-bottom:12px;"><b ${i}>ฝ่ายที่รับผิดชอบ</b>${o(((a=e.council_positions)==null?void 0:a.position_name)||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>1. หลักการและเหตุผล</b>${o(e.rationale||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>2. วัตถุประสงค์</b>${l(e.objectives)}</div>
    <div style="margin-bottom:12px;"><b ${i}>3. เป้าหมาย</b>
      <div style="margin-top:4px;"><i>3.1 เชิงปริมาณ</i>${l(e.goals_quantitative)}</div>
      <div><i>3.2 เชิงคุณภาพ</i>${l(e.goals_qualitative)}</div>
    </div>
    <div style="margin-bottom:12px;"><b ${i}>4. วิธีดำเนินงาน</b>${n(["ขั้นตอน/กิจกรรม","ระยะเวลา","งบประมาณ","ผู้รับผิดชอบ"],e.work_steps)}</div>
    <div style="margin-bottom:12px;"><b ${i}>5. ระยะเวลาดำเนินการ</b>${o(e.duration_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>6. สถานที่ดำเนินงาน</b>${o(e.location_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${i}>7. งบประมาณ</b>${n(["รายการ","จำนวนเงิน (บาท)"],e.budget_items)}<b>รวมเป็นเงิน ${rn(an(e))} บาท</b></div>
    <div style="margin-bottom:12px;"><b ${i}>8. หน่วยงาน/ผู้เกี่ยวข้อง</b>${n(["หน่วยงาน/บุคคล","จำนวน (คน)"],e.stakeholders)}</div>
    <div style="margin-bottom:12px;"><b ${i}>9. การประเมินผลความสำเร็จ</b>${n(["เป้าหมาย","ตัวบ่งชี้ความสำเร็จ","วิธีวัดและประเมินผล","เครื่องมือวัด"],e.evaluation_items)}</div>
    <div style="margin-bottom:12px;"><b ${i}>10. ผลที่คาดว่าจะได้รับ</b>${l(e.expected_results)}</div>
    <div style="display:flex;justify-content:space-around;margin-top:50px;text-align:center;flex-wrap:wrap;gap:20px;">
      <div style="width:200px;"><div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้เสนอโครงการ</div></div>
      <div style="width:200px;">
        ${e.dept_head_signature_url?`<img src="${o(e.dept_head_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">หัวหน้าฝ่ายกิจการนักเรียน</div>
      </div>
      <div style="width:200px;">
        ${e.director_signature_url?`<img src="${o(e.director_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้อำนวยการ${t.council_signer_director_name?" ("+o(t.council_signer_director_name)+")":""}</div>
      </div>
    </div>`}function wl(){if(!ft)return"";const e=ee.find(l=>l.id===ft);if(!e)return"";const[t,r]=tn[e.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],n=[e.advisor_decided_at?`✅ ครูที่ปรึกษาประจำฝ่ายรับรองแล้ว${e.advisor_comment?" — "+o(e.advisor_comment):""}`:"",e.dept_head_decided_at?`✅ หัวหน้าฝ่ายกิจการนักเรียนอนุมัติแล้ว${e.dept_head_comment?" — "+o(e.dept_head_comment):""}`:"",e.director_decided_at?`✅ ผู้อำนวยการอนุมัติแล้ว${e.director_comment?" — "+o(e.director_comment):""}`:""].filter(Boolean);return`
    <div class="fixed inset-0 z-[90] bg-[var(--surface)] flex flex-col" id="doc-detail-backdrop">
      <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)] flex-shrink-0">
        <div class="min-w-0">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${o(e.title)}</p>
          <p class="text-[0.625rem] text-[var(--muted-2)] mt-0.5">${o(St(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(e.form_version)||1} · แก้ไขครั้งที่ ${Number(e.document_revision)||1}</p>
          <span class="text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${r} inline-block mt-0.5">${t}</span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" id="btn-doc-detail-print" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]">🖨️ พิมพ์</button>
          <button type="button" id="btn-doc-detail-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none">✕</button>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div style="font-family:'Sarabun',sans-serif;line-height:1.8;color:#1d1519;max-width:800px;margin:0 auto;">
          ${sn(e,d.cfg)}
          ${n.length?`<div style="margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;"><b style="display:block;margin-bottom:6px;font-size:13px;">ประวัติการอนุมัติ</b><div style="font-size:13px;color:#106143;">${n.map(l=>`<p style="margin-bottom:2px;">${l}</p>`).join("")}</div></div>`:""}
        </div>
      </div>
    </div>`}function kl(e,t){return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>${o(St(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} ${o(e.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; color: #1d1519; }
      @media print { body { padding: 0; } }
    </style></head><body>
      ${sn(e,t)}
    </body></html>`}function pa(e){Te(kl(e,d.cfg))}const Cr=e=>{if(!e)return"";const t=new Date(e);if(isNaN(t))return"";const r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`};function El(){const e=d.cfg;return`
    <form id="settings-general-form" class="space-y-4 pb-4">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🏛️ ข้อมูลทั่วไป</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ชื่อสภานักเรียน</label>
          <input name="council_name" value="${o(e.council_name||"")}" placeholder="สภานักเรียนโรงเรียน..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">โลโก้ (URL รูปภาพ)</label>
          <input name="council_logo_url" value="${o(e.council_logo_url||"")}" placeholder="https://..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายชาย</label>
            <input type="color" name="council_theme_side_m" value="${o(e.council_theme_side_m||"#14563b")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายหญิง</label>
            <input type="color" name="council_theme_side_w" value="${o(e.council_theme_side_w||"#a3134f")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">⚠️ สีธีมยังเป็นค่าที่บันทึกไว้เฉยๆ ยังไม่ได้ใช้สลับสีจริงในหน้าเว็บ (รอฟีเจอร์สลับธีมตามฝ่ายในเฟสถัดไป)</p>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗓️ ห้วงปฏิบัติหน้าที่</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">เริ่ม ภาค/ปี</span>
            <input name="council_term_start_semester" value="${o(e.council_term_start_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_start_year" value="${o(e.council_term_start_year||"")}" placeholder="2568" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">สิ้นสุด ภาค/ปี</span>
            <input name="council_term_end_semester" value="${o(e.council_term_end_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_end_year" value="${o(e.council_term_end_year||"")}" placeholder="2569" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✅ เกณฑ์คุณสมบัติผู้สมัคร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (สามัญ)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa" value="${o(e.council_min_gpa||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (ศาสนา)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa_religious" value="${o(e.council_min_gpa_religious||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ระดับชั้นที่สมัครได้ (คั่นด้วย ,)</label>
          <input name="council_eligible_grade_levels" value="${o(e.council_eligible_grade_levels||Na)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">จำนวนเกียรติบัตร/รางวัลขั้นต่ำที่ต้องแนบ</label>
          <input type="number" min="0" step="1" name="council_min_certificates" value="${o(e.council_min_certificates||"5")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
            <input type="datetime-local" name="council_apply_opens_at" value="${o(Cr(e.council_apply_opens_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ปิดรับสมัครเมื่อ</label>
            <input type="datetime-local" name="council_apply_closes_at" value="${o(Cr(e.council_apply_closes_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">📈 เกณฑ์การประเมินความเป็นสมาชิกสภา</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">คิดจากกิจกรรมที่เกิดขึ้นแล้ว (กำลังดำเนินการ/เสร็จแล้ว) และถูกเลือกไว้ตอนสร้างว่า "นับผล" เท่านั้น — ตัวเลข % เป็นข้อมูลให้ครูที่ปรึกษาสภาดูประกอบการตัดสินใจเท่านั้น ไม่ตัดสิทธิ์อัตโนมัติ</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">% เช็คชื่อขั้นต่ำที่ควรผ่าน (เว้นว่าง = ไม่ตั้งเกณฑ์)</label>
          <input type="number" min="0" max="100" step="1" name="council_min_attendance_pct" value="${o(e.council_min_attendance_pct||"")}" placeholder="เช่น 80" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
          <textarea name="council_test_student_codes" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(e.council_test_student_codes||"")}</textarea>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ข้อความขอบคุณหลังโหวต</label>
          <textarea name="council_election_thank_you_message" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${o(e.council_election_thank_you_message||"")}</textarea>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✍️ ผู้ลงนามเอกสาร/เกียรติบัตร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ครูที่ปรึกษาสภา</label>
            <input name="council_signer_advisor_name" value="${o(e.council_signer_advisor_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ผู้อำนวยการโรงเรียน</label>
            <input name="council_signer_director_name" value="${o(e.council_signer_director_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex justify-end">
        <button type="submit" class="px-6 py-2.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกการตั้งค่า</button>
      </div>
    </form>`}function Al(){const e={M:d.positions.filter(s=>s.gender==="M").sort((s,c)=>s.sort_order-c.sort_order),W:d.positions.filter(s=>s.gender==="W").sort((s,c)=>s.sort_order-c.sort_order)},t=s=>{const c=s==="M"?"👦 ฝ่ายชาย":"👧 ฝ่ายหญิง",m=e[s].map(p=>`
      <form class="position-row-form flex items-center gap-2 py-2 border-b border-[var(--line-soft)] last:border-0" data-id="${p.id}">
        <input name="position_name" value="${o(p.position_name)}" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-1.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
      </div>`},r=[],n=new Set;[...e.M,...e.W].forEach(s=>{n.has(s.position_name)||(n.add(s.position_name),r.push(s.position_name))});const l=e.M.reduce((s,c)=>s+Number(c.seats_count),0),i=e.W.reduce((s,c)=>s+Number(c.seats_count),0),a=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mt-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📊 สรุปรวมจำนวนที่นั่งทั้งสภา</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-left text-[var(--muted)]"><th class="py-1.5 pr-2">ตำแหน่ง</th><th class="py-1.5 px-2 text-center">ชาย</th><th class="py-1.5 px-2 text-center">หญิง</th><th class="py-1.5 pl-2 text-center">รวม</th></tr></thead>
          <tbody>
            ${r.map(s=>{var p,u;const c=((p=e.M.find(x=>x.position_name===s))==null?void 0:p.seats_count)??0,m=((u=e.W.find(x=>x.position_name===s))==null?void 0:u.seats_count)??0;return`<tr class="border-t border-[var(--line-soft)]"><td class="py-1.5 pr-2 text-[var(--ink-2)]">${o(s)}</td><td class="py-1.5 px-2 text-center">${c}</td><td class="py-1.5 px-2 text-center">${m}</td><td class="py-1.5 pl-2 text-center font-bold text-[var(--primary)]">${c+m}</td></tr>`}).join("")}
            <tr class="border-t-2 border-[var(--line)] font-bold"><td class="py-1.5 pr-2 text-[var(--ink)]">รวมทั้งหมด</td><td class="py-1.5 px-2 text-center">${l}</td><td class="py-1.5 px-2 text-center">${i}</td><td class="py-1.5 pl-2 text-center text-[var(--primary)]">${l+i}</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;return`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${t("M")}${t("W")}</div>${a}`}function Sl(){if(le===null)return Pr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(we===null)return Wo(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(pe===null)return Xa(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ie===null)return Ja(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=le.reduce((m,p)=>m+Number(p.weight),0),t=(e/2).toFixed(1),r=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${e} คะแนน · ผ่านเกณฑ์ที่ ≥ ${t})</p>
      <div class="space-y-1.5 mt-2">
        ${le.map(m=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${o(m.name)}</span>
            <span class="font-bold text-[var(--muted)]">${m.weight} คะแนน</span>
            <button type="button" class="btn-remove-interview-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${m.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีหัวข้อ</p>'}
      </div>
      <form id="interview-criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มหัวข้อใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <input name="weight" type="number" min="1" value="10" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,n=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),l=`
    <form id="settings-video-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎬 วิดีโอแนะนำตัว</p>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)]">ความยาวไม่เกิน</span>
        <input name="council_video_max_minutes" type="number" min="1" value="${o(d.cfg.council_video_max_minutes||"3")}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
        <span class="text-xs text-[var(--muted)]">นาที</span>
      </div>
      <label class="block text-xs font-medium text-[var(--muted)]">หัวข้อที่ต้องพูด (บรรทัดละ 1 หัวข้อ)</label>
      <textarea name="council_video_brief" rows="5" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${o(n.join(`
`))}</textarea>
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,i=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">💬 ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ</p>
      <div class="space-y-1.5">
        ${we.map(m=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${o(m.phrase)}</span>
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
      <textarea name="${p}" rows="3" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${o(nn(p).join(`
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
        ${ie.map(m=>{var x;const p=(x=m.layout)==null?void 0:x.background,u=p?p.type==="image"?p.imageUrl:null:m.type==="custom"?m.background_image_url:null;return`
          <div class="flex items-center gap-2 text-xs">
            ${u?`<img src="${o(u)}" class="w-10 h-7 object-cover rounded border border-[var(--line)] flex-shrink-0" />`:`<span class="flex-shrink-0">${o((nr[m.preset_key]??"🏅").split(" ")[0])}</span>`}
            <span class="flex-1 text-[var(--ink-2)] truncate">${o(m.name)} ${m.type==="preset"?"· "+o(nr[m.preset_key]??m.preset_key):"· อัปโหลดเอง"}</span>
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
          ${Object.entries(nr).map(([m,p])=>`<option value="${m}">${o(p)}</option>`).join("")}
        </select>
        <input type="file" name="background_image" id="cert-template-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`;return`${r}${l}${Za()}${i}${s}${c}`}function Il(){const e=Br();return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(Uo).map(([t,r])=>`
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${o(r)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${t}" ${e[t]!==!1?"checked":""} />
        </label>`).join("")}
    </div>`}const $t={},yt={},Pe={};async function ma(e){const[t,r,n]=await Promise.all([Ws(e).catch(()=>[]),Hs(e).catch(()=>[]),Qs(e).catch(()=>[])]);$t[e]=t,yt[e]=r,Pe[e]=n,g()}function Cl(){var l;const e=d.isChair,t=d.isAdmin||d.isCouncilAdvisor;if(!e&&!t)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>';const r='<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>';let n="";if(e){const i=Ie((l=d.student)==null?void 0:l.gender);if(i&&$t[i]===void 0)ma(i),n+=r;else if(i){const a=$t[i],s=yt[i]||[],c=Pe[i]||[],m=new Set(c.map(u=>u.application_id)),p=s.filter(u=>!m.has(u.id));n+=`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${D[i]}</p>
          ${a.length?p.length?`
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${a.map(u=>`<option value="${u.id}">${o(u.position_name)}</option>`).join("")}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${p.map(u=>{var x,b,v;return`<option value="${u.id}">${o(((x=u.students)==null?void 0:x.full_name)??"—")}${((v=(b=u.council_interviews)==null?void 0:b[0])==null?void 0:v.score)!=null?" (คะแนน "+u.council_interviews[0].score+")":""}</option>`}).join("")}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>':'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>'}
        </div>`,c.length&&(n+=`
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${c.map(u=>{var x,b,v,h;return`
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${G((x=u.council_applications)==null?void 0:x.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((v=(b=u.council_applications)==null?void 0:b.students)==null?void 0:v.full_name)??"—")}</p>
                  <p class="text-xs text-[var(--muted)]">${o(((h=u.council_positions)==null?void 0:h.position_name)??"—")}</p>
                </div>
              </div>`}).join("")}</div>
          </div>`)}}return t&&(n+=["M","W"].map(i=>{if(Pe[i]===void 0)return ma(i),r;const a=Pe[i];return a.length?`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${D[i]}</p>
          <div class="space-y-2.5">
            ${a.map(s=>{var c,m,p,u,x;return`
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${s.id}">
                <div class="flex items-center gap-3">
                  ${G((c=s.council_applications)==null?void 0:c.students)}
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((p=(m=s.council_applications)==null?void 0:m.students)==null?void 0:p.full_name)??"—")}</p>
                    <p class="text-xs text-[var(--muted)]">${o(((u=s.council_positions)==null?void 0:u.position_name)??"—")}</p>
                  </div>
                </div>
                ${(x=s.council_applications)!=null&&x.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${o(s.council_applications.motivation)}</p>`:""}
                <textarea class="nom-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]" data-id="${s.id}" rows="2" placeholder="ความเห็น (ไม่บังคับถ้าอนุมัติ, บังคับถ้าไม่อนุมัติ)"></textarea>
                <div class="flex gap-2">
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${s.id}" data-approve="false">❌ ไม่อนุมัติ</button>
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${s.id}" data-approve="true">✅ อนุมัติ</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")),n||'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>'}const Ll={general:El,positions:Al,criteria:Sl,modules:Il};function Tl(){return d.isAdmin||d.isCouncilAdvisor?(Xr.some(e=>e.id===ut)||(ut="general"),`
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${Xr.map(e=>`
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${e.id===ut?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="${e.id}">${o(e.label)}</button>`).join("")}
    </div>
    <div>${Ll[ut]()}</div>`):'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>'}let Ot="duty",ce=null,it=null,Me=null;const ba=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];function on(){const e=new Date,t=e.getDay(),r=(t===0?-6:1)-t,n=new Date(e);return n.setDate(e.getDate()+r),n.setHours(0,0,0,0),n.toISOString().slice(0,10)}async function Nl(){const e=d.membership[0];if(!e){ce=[],it=new Set,Me=[],g();return}const[t,r]=await Promise.all([Gs(e.id).catch(()=>[]),Vs(e.id).catch(()=>[])]);ce=t,Me=r,it=await Us(t.map(n=>n.id),on()).catch(()=>new Set),g()}function ql(){const e=d.membership[0];return e?ce===null?(Nl(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>'):`${`
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${Ot==="duty"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${Ot==="work"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="work">งานของฉัน</button>
    </div>`}${Ot==="duty"?jl(e):Rl()}`:'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>'}function jl(e){var n;const t=ce.filter(l=>it.has(l.id)).length,r=ce.length?Math.round(t/ce.length*100):0;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${G(d.student,"w-14 h-18")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((n=e.council_positions)==null?void 0:n.position_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${e.source==="elected"?"🗳️ มาจากการเลือกตั้ง":"✅ ได้รับการแต่งตั้ง"} · ${e.term_start_date?new Date(e.term_start_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${t}/${ce.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${r}%"></div></div>
      ${ce.length?`<div class="space-y-1.5">${ce.map(l=>{const i=it.has(l.id);return`
        <label class="flex items-center gap-2.5 rounded-xl border ${i?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)]"} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${l.id}" ${i?"checked":""} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${i?"text-[#106143] line-through":"text-[var(--ink-2)]"} truncate">${o(l.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${l.day_of_week!=null?ba[l.day_of_week]:""}${l.time_range?" · "+o(l.time_range):""}${l.location?" · "+o(l.location):""}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${l.id}">✕</button>
        </label>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${ba.map((l,i)=>`<option value="${i}">${l}</option>`).join("")}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`}function Rl(){const e=Me.filter(n=>n.status!=="done"),t=Me.filter(n=>n.status==="done"),r=n=>`
    <label class="flex items-center gap-2.5 rounded-xl border ${n.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3">
      <input type="checkbox" class="assignment-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${n.id}" ${n.status==="done"?"checked":""} />
      <div class="min-w-0 flex-1">
        <p class="text-sm ${n.status==="done"?"text-[#106143] line-through":"text-[var(--ink)]"}">${o(n.task)}</p>
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
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${t.length}/${Me.length} เสร็จแล้ว)</p>
      ${Me.length?`<div class="space-y-2">${[...e,...t].map(r).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>'}
    </div>`}function Dl(e){var c;(c=document.getElementById("council-my-qr-modal"))==null||c.remove();const t=document.createElement("div");t.id="council-my-qr-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${o(e.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-my-qr-canvas"),n=async()=>{const m=`SQ:${e.student_code}:${Math.floor(Date.now()/1e3)}`;try{await Eo.toCanvas(r,m,{width:190,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch{}};n();let l=60;const i=t.querySelector("#council-qr-timer"),a=setInterval(()=>{l-=1,i&&(i.textContent=String(l)),l<=0&&(l=60,n())},1e3),s=()=>{clearInterval(a),t.remove()};t.querySelector("#btn-close-council-qr").addEventListener("click",s),t.addEventListener("click",m=>{m.target===t&&s()})}let Zt=null;async function Ml(){var t;const e=d.membership[0];if(!e||!d.student){Zt={activities:[],myAttendance:[]},g();return}Zt=await zs(d.student.id,(t=e.council_positions)==null?void 0:t.gender,Y).catch(()=>({activities:[],myAttendance:[]})),g()}const Bl={planned:["ยังไม่จัด","text-[var(--gold-ink)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary)]"],completed:["เสร็จแล้ว","text-[#106143]"],cancelled:["ยกเลิก","text-[var(--muted-2)]"]};function Pl(){if(!d.membership[0])return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>';if(Zt===null)return Ml(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const{activities:t,myAttendance:r}=Zt,n=new Set(r.map(u=>u.activity_id)),l=t.filter(u=>u.counts_for_evaluation),i=l.filter(u=>n.has(u.id)).length,a=l.length?Math.round(i/l.length*100):null,s=d.cfg.council_min_attendance_pct?Number(d.cfg.council_min_attendance_pct):null,c=s==null||a==null?null:a>=s,m=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📈 ผลเช็คชื่อของฉัน</p>
      ${l.length?`
        <div class="flex items-end gap-2 mb-2">
          <span class="text-3xl font-bold text-[var(--primary)]">${a}%</span>
          <span class="text-xs text-[var(--muted-2)] mb-1">${i}/${l.length} กิจกรรม</span>
        </div>
        <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-2"><div class="h-full ${c===!1?"bg-[var(--bad)]":"bg-[var(--primary)]"}" style="width:${a}%"></div></div>
        ${s!=null?`<p class="text-xs ${c?"text-[var(--ok)]":"text-[var(--bad)]"} font-bold">${c?"✅ ผ่านเกณฑ์ขั้นต่ำ":"⚠️ ยังไม่ถึงเกณฑ์ขั้นต่ำ"} ${s}%</p>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีการตั้งเกณฑ์ขั้นต่ำจากผู้ดูแล</p>'}
      `:'<p class="text-xs text-[var(--muted-2)] py-4 text-center">ยังไม่มีกิจกรรมที่นับผลในระบบ</p>'}
      <p class="text-[0.625rem] text-[var(--muted-2)] mt-2">นับจากกิจกรรมที่เกิดขึ้นแล้วและถูกตั้งค่าให้ "นับผล" เท่านั้น — ผลนี้เป็นข้อมูลให้ครูที่ปรึกษาใช้ประกอบการประเมิน ไม่ได้ตัดสินอัตโนมัติ</p>
    </div>`,p=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📅 กิจกรรม/กำหนดการ</p>
      ${t.length?`<div class="space-y-2">${t.map(u=>{const x=n.has(u.id),[b,v]=Bl[u.status]??["—","text-[var(--muted)]"];return`
        <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${o(u.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${u.activity_date?new Date(u.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} · <span class="${v}">${b}</span>${u.counts_for_evaluation?"":' · <span class="text-[var(--muted-2)]">ไม่นับผล</span>'}</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${x?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--bad-soft)] text-[var(--bad)]"}">${x?"✅ เช็คชื่อแล้ว":"✗ ยังไม่เช็คชื่อ"}</span>
        </div>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-8">ยังไม่มีกิจกรรม</p>'}
    </div>`;return`${m}${p}`}const wt={};async function Ol(e){wt[e]=await Ys(e).catch(()=>[]),g()}function Fl(){var a;if(!d.isChair)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>';const e=Ie((a=d.student)==null?void 0:a.gender);if(!e)return"";if(wt[e]===void 0)return Ol(e),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const t=wt[e],r=t.filter(s=>s.status==="done").length,n=d.members.filter(s=>{var c;return((c=s.council_positions)==null?void 0:c.gender)===e}),l=`
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${D[e]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${n.map(s=>{var c,m;return`<option value="${s.id}">${o(((c=s.students)==null?void 0:c.full_name)??"—")} (${o(((m=s.council_positions)==null?void 0:m.position_name)??"")})</option>`}).join("")}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`;if(!t.length)return`${l}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`;const i=s=>{var c,m,p;return`
    <div class="rounded-xl border ${s.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3 flex items-center gap-3">
      ${G((c=s.council_members)==null?void 0:c.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${o(((p=(m=s.council_members)==null?void 0:m.students)==null?void 0:p.full_name)??"—")}</p>
        <p class="text-xs text-[var(--ink-2)]">${o(s.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${s.due_date?"กำหนดส่ง "+new Date(s.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${s.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${s.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${s.id}">ลบ</button>
      </div>
    </div>`};return`${l}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${r}/${t.length} เสร็จแล้ว)</p><div class="space-y-2">${t.map(i).join("")}</div>`}let at=null,nt=null,Lr=null;const er={};async function Vr(){const[e,t,r]=await Promise.all([ar("council_advisor").catch(()=>[]),ar("student_affairs_head").catch(()=>[]),ar("school_director").catch(()=>[])]);re=e,at=t,nt=r,g()}async function Yl(e){er[e]=await Ea(e).catch(()=>[]),g()}function zl(e){if(er[e]===void 0)return Yl(e),'<p class="text-xs text-[var(--muted-2)] py-2">⏳ กำลังโหลด...</p>';const t=new Set(er[e]);return`
    <form class="advisor-dept-form mt-3 pt-3 border-t border-[var(--line-soft)]" data-teacher-id="${e}">
      <p class="text-xs font-semibold text-[var(--muted)] mb-2">ติ๊กฝ่ายที่ครูคนนี้รับผิดชอบตรวจ/รับรองเอกสารโครงการ</p>
      <div class="grid grid-cols-2 gap-1.5 mb-2">
        ${d.positions.map(r=>`
          <label class="flex items-center gap-1.5 text-xs text-[var(--ink-2)]">
            <input type="checkbox" name="pos_${r.id}" value="${r.id}" ${t.has(r.id)?"checked":""} />
            ${o(r.position_name)} (${o(D[r.gender]??"")})
          </label>`).join("")}
      </div>
      <button type="submit" class="px-4 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกฝ่าย</button>
    </form>`}function Gl(e,t,r){const n=Lr===e.id;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)]">
      <div class="flex items-center gap-3">
        ${e.image_url?`<img src="${o(e.image_url)}" class="w-10 h-12 rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${o((e.full_name||"?").charAt(0))}</div>`}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${o(e.full_name)}</p>
          <p class="text-xs text-[var(--muted)]">${o(e.teacher_code||"")}${e.category?" · "+o(e.category):""} · ${e.signature_url?"✅ มีลายเซ็นแล้ว":"⚠️ ยังไม่มีลายเซ็น"}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
        <button type="button" class="btn-edit-council-profile text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}" data-name="${o(e.full_name)}" data-image="${o(e.image_url??"")}" data-signature="${o(e.signature_url??"")}">✍️ รูป/ลายเซ็น</button>
        ${r?`<button type="button" class="btn-toggle-advisor-depts text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">${n?"▲ ซ่อนฝ่ายที่ดูแล":"🏛️ ฝ่ายที่ดูแล"}</button>`:""}
        <button type="button" class="btn-remove-teacher-position text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${e.id}" data-position="${t}">ถอดถอน</button>
      </div>
      ${r&&n?zl(e.id):""}
    </div>`}function Vl(){if(!d.isAdmin)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>';if(re===null)return Vr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(me===null)return Yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=`<datalist id="council-teacher-datalist">${me.map(r=>`<option value="${o(r.full_name)} · รหัส ${r.id}"></option>`).join("")}</datalist>`,t=(r,n,l,i)=>`
    <div class="mb-5">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${r} (${n.length} คน)</p>
      <form class="perms-add-form bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 mb-2 flex gap-2" data-position="${l}">
        <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
          class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
      </form>
      ${n.length?`<div class="space-y-2">${n.map(a=>Gl(a,l,i)).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มี</p>'}
    </div>`;return`${e}
    ${t("ครูที่ปรึกษาสภานักเรียน",re,"council_advisor",!0)}
    ${t("หัวหน้าฝ่ายกิจการนักเรียน",at,"student_affairs_head",!1)}
    ${t("ผู้อำนวยการ",nt,"school_director",!1)}`}function Ul(e){const t=e.getContext("2d"),r=()=>{t.fillStyle="#fff",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#0f172a"};r(),t.lineWidth=4,t.lineCap="round";let n=!1,l=!1;const i=a=>{const s=e.getBoundingClientRect();return{x:(a.clientX-s.left)*e.width/s.width,y:(a.clientY-s.top)*e.height/s.height}};return e.addEventListener("pointerdown",a=>{var c;n=!0,(c=e.setPointerCapture)==null||c.call(e,a.pointerId);const s=i(a);t.beginPath(),t.moveTo(s.x,s.y)}),e.addEventListener("pointermove",a=>{if(!n)return;const s=i(a);t.lineTo(s.x,s.y),t.stroke(),l=!0}),e.addEventListener("pointerup",()=>{n=!1}),e.addEventListener("pointercancel",()=>{n=!1}),{clear:()=>{r(),l=!1},isDrawn:()=>l,toBlob:()=>new Promise(a=>e.toBlob(a,"image/png"))}}function va(e){var l;(l=document.getElementById("council-profile-modal"))==null||l.remove();const t=document.createElement("div");t.id="council-profile-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">✍️ รูปและลายเซ็น — ${o(e.full_name)}</p>
        <button type="button" id="btn-close-council-profile" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <div class="space-y-4">
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          <div class="flex items-center gap-3">
            ${e.image_url?`<img src="${o(e.image_url)}" class="w-14 h-[4.5rem] rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-14 h-[4.5rem] rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] flex-shrink-0">${o((e.full_name||"?").charAt(0))}</div>`}
            <input type="file" id="council-profile-photo-file" accept="image/*" class="text-xs flex-1 min-w-0" />
          </div>
        </div>
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${o(e.signature_url)}" class="h-16 max-w-full object-contain bg-white border border-[var(--line)] rounded-lg p-1 mb-2" />`:""}
          <canvas id="council-signature-canvas" width="700" height="220" class="w-full h-32 border border-[var(--line)] rounded-xl bg-white touch-none"></canvas>
          <button type="button" id="council-signature-clear" class="text-xs text-[var(--bad)] mt-1">ล้างลายเซ็น</button>
          <p class="text-xs font-medium text-[var(--muted)] mt-2 mb-1">หรืออัปโหลดรูปลายเซ็น</p>
          <input type="file" id="council-signature-file" accept="image/*" class="text-xs" />
        </div>
        <button type="button" id="council-profile-save" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-signature-canvas"),n=Ul(r);t.querySelector("#council-signature-clear").addEventListener("click",()=>n.clear()),t.querySelector("#btn-close-council-profile").addEventListener("click",()=>t.remove()),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.querySelector("#council-profile-save").addEventListener("click",async()=>{var a,s;const i=t.querySelector("#council-profile-save");i.disabled=!0,i.textContent="กำลังบันทึก...";try{const c=(a=t.querySelector("#council-profile-photo-file").files)==null?void 0:a[0];if(c){const u=await gn(e.id,c);await so(e.id,u),d.teacher&&d.teacher.id===e.id&&(d.teacher.image_url=u)}const p=((s=t.querySelector("#council-signature-file").files)==null?void 0:s[0])||(n.isDrawn()?await n.toBlob():null);if(p){const u=await yn(e.id,p);await oo(e.id,u),d.teacher&&d.teacher.id===e.id&&(d.teacher.signature_url=u)}f("บันทึกแล้ว ✅","success"),t.remove(),re=null,at=null,nt=null,g()}catch(c){f("บันทึกไม่สำเร็จ: "+I(c),"error"),i.disabled=!1,i.textContent="บันทึก"}})}function Wl(){if(!d.teacher)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะบัญชีครูเท่านั้น</p>';const e=d.teacher;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-5 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-4">✍️ โปรไฟล์ของฉัน — ${o(e.full_name)}</p>
      <div class="flex items-center justify-center gap-6 mb-4">
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          ${e.image_url?`<img src="${o(e.image_url)}" class="w-16 h-20 rounded-[10px] object-cover border border-[var(--line)] mx-auto" />`:`<div class="w-16 h-20 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] mx-auto">${o((e.full_name||"?").charAt(0))}</div>`}
        </div>
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${o(e.signature_url)}" class="h-20 max-w-[10rem] object-contain bg-white border border-[var(--line)] rounded-lg p-1 mx-auto" />`:'<div class="h-20 w-40 rounded-lg border border-dashed border-[var(--line)] flex items-center justify-center text-xs text-[var(--muted-2)] mx-auto">ยังไม่มีลายเซ็น</div>'}
        </div>
      </div>
      <button type="button" id="btn-edit-my-council-profile" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✏️ แก้ไขรูป/ลายเซ็น</button>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">ลายเซ็นนี้จะถูกใช้ประทับอัตโนมัติเมื่อคุณอนุมัติเอกสารโครงการ ไม่ต้องวาดใหม่ทุกครั้ง</p>
    </div>`}function Hl(){if(!(d.isAdmin||d.isCouncilAdvisor))return"";const e=ue.map(r=>`<div class="rounded-xl border border-[var(--line)] p-3 flex items-center gap-3">
    <div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)]">${o(r.term_label)}</p><p class="text-xs text-[var(--muted)]">ปีการศึกษา ${r.academic_year} · ${o(Er[r.status]||r.status)}${r.duty_start_date?` · ${o(r.duty_start_date)} ถึง ${o(r.duty_end_date||"ไม่ระบุ")}`:""}</p></div>
    ${r.status==="upcoming"&&d.isAdmin?`<button type="button" class="btn-activate-term px-3 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold" data-id="${r.id}">เริ่มวาระนี้</button>`:""}
  </div>`).join(""),t=Number(d.cfg.academicYear)||new Date().getFullYear()+543;return`<div class="space-y-4">
    <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"><h2 class="font-bold text-[var(--ink)]">วาระสภานักเรียน</h2><p class="text-xs text-[var(--muted)] mt-1">การเริ่มวาระใหม่จะปิดวาระเดิม เก็บประวัติเดิม และเลื่อนรายชื่อ “ว่าที่สมาชิก” เป็นสมาชิกปัจจุบัน</p><div class="space-y-2 mt-4">${e}</div></div>
    ${d.isAdmin?`<form id="council-term-create-form" class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-3">
      <h3 class="text-sm font-bold text-[var(--ink)]">เพิ่มวาระใหม่</h3>
      <input name="label" required placeholder="เช่น วาระ 2/2569 – 1/2570" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]" />
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2"><input name="academic_year" type="number" required value="${t}" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><select name="start_semester" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm"><option value="1">เริ่ม ภาคเรียน 1</option><option value="2" selected>เริ่ม ภาคเรียน 2</option></select><input name="start_year" type="number" required value="${t}" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><select name="end_semester" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm"><option value="1" selected>สิ้นสุด ภาคเรียน 1</option><option value="2">สิ้นสุด ภาคเรียน 2</option></select><input name="end_year" type="number" required value="${t+1}" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><input name="duty_start_date" type="date" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /><input name="duty_end_date" type="date" class="border border-[var(--line)] rounded-xl px-3 py-2 text-sm" /></div>
      <button class="px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">สร้างวาระใหม่</button>
    </form>`:""}
  </div>`}async function Ql(e){const t=ye(e);if(!t){te[e]=[],Ge[e]=[],g();return}[te[e],Ge[e]]=await Promise.all([ct(t.id).catch(()=>[]),$a(t.id).catch(()=>[])]),g()}function Jl(e){const t=Ge[e]||[];return`<section class="rounded-2xl border border-[var(--gold-soft-line)] bg-[var(--surface)] p-5 space-y-3"><div><h3 class="text-sm font-bold text-[var(--ink)]">ตรวจบอร์ดหาเสียงที่ส่งมา</h3><p class="text-xs text-[var(--muted)] mt-1">ผู้สมัครแก้ไขร่างได้เอง ข้อมูลจะขึ้นบนบอร์ดสาธารณะหลังครูที่ปรึกษาหรือแอดมินอนุมัติ</p></div>${t.length?t.map(r=>`<article class="rounded-xl border border-[var(--line)] p-3 space-y-2"><p class="text-sm font-bold">${o(r.full_name)} · หมายเลข ${o(r.ballot_number)}</p>${r.slogan?`<p class="text-sm font-bold text-[var(--primary)]">“${o(r.slogan)}”</p>`:""}${r.vision?`<p class="text-xs whitespace-pre-line">${o(r.vision)}</p>`:""}${Array.isArray(r.policies)&&r.policies.length?`<ul class="text-xs list-disc list-inside">${r.policies.map(n=>`<li>${o(n)}</li>`).join("")}</ul>`:""}${r.campaign_video_url?`<video class="w-full max-h-64 rounded-xl bg-black" controls playsinline src="${o(r.campaign_video_url)}"></video>`:""}<div class="flex flex-wrap gap-2"><button type="button" class="btn-review-campaign px-3 py-2 rounded-lg bg-[var(--ok)] text-white text-xs font-bold" data-id="${r.candidate_id}" data-approve="1">อนุมัติและเผยแพร่</button><button type="button" class="btn-review-campaign px-3 py-2 rounded-lg border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${r.candidate_id}" data-approve="0">ขอให้แก้ไข</button></div></article>`).join(""):'<p class="text-xs text-[var(--muted)] text-center py-3">ยังไม่มีรายการส่งตรวจ</p>'}</section>`}function Kl(){if(!(d.isAdmin||d.isCouncilAdvisor))return"";const e=H,t=ye(e);if(t&&(te[e]===null||Ge[e]===null))return Ql(e),'<p class="text-sm text-[var(--muted)] text-center py-16">กำลังโหลดผู้สมัคร...</p>';const r=te[e]||[],n=new Set(r.map(a=>Number(a.student_id))),l=d.members.filter(a=>{var s,c;return a.status==="designate"&&Number(a.term_id)===Number(t==null?void 0:t.term_id)&&((s=a.council_positions)==null?void 0:s.gender)===e&&((c=a.council_positions)==null?void 0:c.is_elected)===!0&&!n.has(Number(a.student_id))}),i=a=>Cr(a);return`<div class="space-y-4">
    <div class="flex gap-2">${["M","W"].map(a=>`<button type="button" data-gender="${a}" class="candidate-admin-gender flex-1 py-2.5 rounded-full text-sm font-bold ${a===e?"bg-[var(--primary)] text-white":"border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]"}">นักเรียน${D[a]}</button>`).join("")}</div>
    ${t?`
      <form id="candidate-election-settings" data-id="${t.id}" class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-3">
        <h3 class="text-sm font-bold text-[var(--ink)]">ตั้งค่าการเผยแพร่และรณรงค์</h3>
        <div class="grid sm:grid-cols-3 gap-2"><label class="text-xs text-[var(--muted)]">เริ่มแนะนำผู้สมัคร<input name="campaign_opens_at" type="datetime-local" value="${i(t.campaign_opens_at)}" class="mt-1 w-full border border-[var(--line)] rounded-xl px-2 py-2 text-sm" /></label><label class="text-xs text-[var(--muted)]">เปิดลงคะแนน<input name="opens_at" type="datetime-local" value="${i(t.opens_at)}" class="mt-1 w-full border border-[var(--line)] rounded-xl px-2 py-2 text-sm" /></label><label class="text-xs text-[var(--muted)]">ปิดเลือกตั้ง<input name="closes_at" type="datetime-local" value="${i(t.closes_at)}" class="mt-1 w-full border border-[var(--line)] rounded-xl px-2 py-2 text-sm" /></label></div>
        <div class="flex flex-wrap gap-2"><button type="button" class="candidate-setting-action px-3 py-2 rounded-xl border text-xs font-bold ${t.candidates_published?"border-[var(--bad-soft-line)] text-[var(--bad)]":"border-[var(--primary-45)] text-[var(--primary)]"}" data-field="candidates" data-value="${t.candidates_published?"":"1"}">${t.candidates_published?"ยกเลิกเผยแพร่รายชื่อ":"เผยแพร่รายชื่อผู้สมัคร"}</button><button type="button" class="candidate-setting-action px-3 py-2 rounded-xl border text-xs font-bold ${t.campaign_enabled?"border-[var(--bad-soft-line)] text-[var(--bad)]":"border-[var(--primary-45)] text-[var(--primary)]"}" data-field="campaign" data-value="${t.campaign_enabled?"":"1"}">${t.campaign_enabled?"ปิดหน้ารณรงค์":"เปิดหน้ารณรงค์"}</button><button class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">บันทึกวันเวลา</button></div>
      </form>
      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"><div class="flex items-center justify-between gap-2"><h3 class="text-sm font-bold text-[var(--ink)]">รายชื่อว่าที่ประธาน${D[e]}</h3><button type="button" class="btn-print-candidates px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold" data-gender="${e}">🖨️ พิมพ์</button></div>
        <div class="mt-3 rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2"><p class="text-xs font-bold text-[var(--primary-dark)]">เพิ่มจากว่าที่ประธานใน roster</p><p class="text-[0.6875rem] text-[var(--muted)]">การเพิ่มโดยตรงจะข้ามขั้นตอนใบสมัครและสัมภาษณ์ ระบบจะเพิ่มเป็นผู้สมัครสถานะร่าง และยังไม่เผยแพร่จนกว่าจะเปลี่ยนสถานะ</p><div class="flex flex-col sm:flex-row gap-2"><select id="candidate-designate-select" class="min-w-0 flex-1 border border-[var(--line)] rounded-lg px-2.5 py-2 text-sm bg-[var(--surface)]" ${l.length?"":"disabled"}><option value="">${l.length?"เลือกว่าที่ประธาน":"ไม่มีว่าที่ประธานที่เพิ่มได้"}</option>${l.map(a=>{var s,c,m;return`<option value="${a.student_id}">${o((s=a.students)==null?void 0:s.full_name)} · ${o(((c=a.students)==null?void 0:c.student_code)||"")} · ${o(((m=a.students)==null?void 0:m.main_room)||"")}</option>`}).join("")}</select><button type="button" id="btn-add-designate-candidate" class="px-3 py-2 rounded-lg bg-[var(--primary)] text-white text-xs font-bold" ${l.length?"":"disabled"}>เพิ่มเป็นผู้สมัครร่าง</button></div></div>
        <div class="space-y-2 mt-3">${r.length?r.map(a=>{var s,c,m;return`<form class="candidate-admin-row flex flex-wrap items-center gap-2 border border-[var(--line)] rounded-xl p-2.5" data-id="${a.id}"><div class="min-w-0 flex-1"><p class="text-sm font-bold truncate">${o((s=a.students)==null?void 0:s.full_name)}</p><p class="text-xs text-[var(--muted)]">${o((c=a.students)==null?void 0:c.student_code)} · ${o(((m=a.students)==null?void 0:m.main_room)||"")}</p></div><label class="text-[0.6875rem] text-[var(--muted)]">หมายเลข<input name="ballot" type="number" min="1" required value="${a.ballot_number}" class="block w-20 border border-[var(--line)] rounded-lg px-2 py-1.5 text-sm" /></label><select name="status" class="border border-[var(--line)] rounded-lg px-2 py-1.5 text-sm"><option value="draft" ${a.status==="draft"?"selected":""}>ร่าง</option><option value="published" ${a.status==="published"?"selected":""}>เผยแพร่</option><option value="withdrawn" ${a.status==="withdrawn"?"selected":""}>ถอนตัว</option><option value="elected" ${a.status==="elected"?"selected":""}>ได้รับเลือก</option></select><button class="px-3 py-2 rounded-lg bg-[var(--primary)] text-white text-xs font-bold">บันทึก</button></form>`}).join(""):'<p class="text-xs text-[var(--muted)] text-center py-8">ยังไม่มีผู้สมัคร ให้ตั้งจากผู้ผ่านสัมภาษณ์ในหน้าแต่งตั้งสมาชิก</p>'}</div></div>`:`<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 text-center"><p class="text-sm text-[var(--muted)]">ยังไม่มีรอบเลือกตั้งสำหรับวาระนี้</p><button type="button" id="btn-create-candidate-election" class="mt-3 px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">สร้างรอบเลือกตั้ง${D[e]}</button></div>`}
    ${t?Jl(e):""}
  </div>`}function Xl(e){const t=kt(),r=te[e]||ne[e]||[],n=r.map((l,i)=>{var a,s,c;return`<tr><td>${i+1}</td><td>${l.ballot_number}</td><td>${o((a=l.students)==null?void 0:a.student_code)}</td><td>${o((s=l.students)==null?void 0:s.full_name)}</td><td>${o(((c=l.students)==null?void 0:c.main_room)||"")}</td><td>${o(l.status||"published")}</td><td></td></tr>`}).join("");Te(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>รายชื่อผู้สมัครประธานสภานักเรียน</title><style>@page{size:A4;margin:12mm}body{font-family:Tahoma,sans-serif;color:#111}h1,p{text-align:center}table{width:100%;border-collapse:collapse;margin-top:16px}th,td{border:1px solid #444;padding:7px;font-size:12px}th{background:#eee}td:first-child,td:nth-child(2){text-align:center}</style></head><body><h1>บัญชีรายชื่อผู้สมัครประธานสภานักเรียน${D[e]}</h1><p>${o((t==null?void 0:t.term_label)||"")} · จำนวน ${r.length} คน</p><table><thead><tr><th>ลำดับ</th><th>หมายเลข</th><th>รหัส</th><th>ชื่อ–สกุล</th><th>ห้อง</th><th>สถานะ</th><th>หมายเหตุ</th></tr></thead><tbody>${n}</tbody></table></body></html>`)}function Zl({gender:e="",positionId:t="",status:r="",room:n="",groupBy:l="gender_position",format:i="register"}={}){var $;const a=kt(),s=w=>w==="designate"?"ว่าที่สมาชิก":w==="ended"?"หมดวาระ":w==="active"?"ปฏิบัติหน้าที่":w,c={direct:"แต่งตั้งตรง",interview:"ผ่านสัมภาษณ์",election:"เลือกตั้ง",external_import:"นำเข้ารายชื่อ",chair_nomination:"ประธานเสนอ",legacy:"ข้อมูลเดิม"},m=d.members.filter(w=>{var T,E;return(!e||((T=w.council_positions)==null?void 0:T.gender)===e)&&(!t||String(w.position_id)===String(t))&&(!r||w.status===r)&&(!n||((E=w.students)==null?void 0:E.main_room)===n)}).sort((w,T)=>{var E,A,S,N,q,M;return(((E=w.council_positions)==null?void 0:E.gender)||"").localeCompare(((A=T.council_positions)==null?void 0:A.gender)||"")||(((S=w.council_positions)==null?void 0:S.sort_order)||99)-(((N=T.council_positions)==null?void 0:N.sort_order)||99)||(((q=w.students)==null?void 0:q.full_name)||"").localeCompare(((M=T.students)==null?void 0:M.full_name)||"","th")}),p=w=>{var T,E,A;return l==="gender"?((T=w.council_positions)==null?void 0:T.gender)||"":l==="position"?String(w.position_id):l==="room"?((E=w.students)==null?void 0:E.main_room)||"ไม่ระบุห้อง":l==="gender_position"?`${((A=w.council_positions)==null?void 0:A.gender)||""}:${w.position_id}`:"all"},u=w=>{var T,E,A,S,N;return l==="gender"?`สภานักเรียน${D[(T=w.council_positions)==null?void 0:T.gender]||""}`:l==="position"?((E=w.council_positions)==null?void 0:E.position_name)||"ไม่ระบุฝ่าย":l==="room"?`ห้อง ${((A=w.students)==null?void 0:A.main_room)||"ไม่ระบุ"}`:l==="gender_position"?`สภานักเรียน${D[(S=w.council_positions)==null?void 0:S.gender]||""} — ${((N=w.council_positions)==null?void 0:N.position_name)||"ไม่ระบุฝ่าย"}`:""},x=new Map;m.forEach(w=>{const T=p(w);x.has(T)||x.set(T,{label:u(w),members:[]}),x.get(T).members.push(w)});let b=0;const v=w=>{const T=i==="register",E=w.members.map(A=>{var S,N,q,M,z;return b+=1,`<tr><td>${b}</td><td>${o(D[(S=A.council_positions)==null?void 0:S.gender]||"")}</td><td>${o((N=A.students)==null?void 0:N.student_code)}</td><td>${o((q=A.students)==null?void 0:q.full_name)}</td><td>${o(((M=A.students)==null?void 0:M.main_room)||"")}</td><td>${o((z=A.council_positions)==null?void 0:z.position_name)}</td><td>${o(s(A.status))}</td>${T?`<td>${o(c[A.appointment_method]||A.appointment_method||"")}</td><td>${o(A.appointment_order_ref||"")}</td>`:"<td></td><td></td>"}<td></td></tr>`}).join("");return`${w.label?`<h2>${o(w.label)} <small>(${w.members.length} คน)</small></h2>`:""}<table><thead><tr><th>ลำดับ</th><th>เพศ</th><th>รหัส</th><th>ชื่อ–สกุล</th><th>ห้อง</th><th>ฝ่าย/ตำแหน่ง</th><th>สถานะ</th>${T?"<th>ที่มา</th><th>เลขคำสั่ง/อ้างอิง</th>":"<th>ลงชื่อ/เวลา</th><th>ผลการเข้าร่วม</th>"}<th>หมายเหตุ</th></tr></thead><tbody>${E}</tbody></table>`},h=[e?`เพศ: ${D[e]}`:"",t?`ฝ่าย: ${(($=d.positions.find(w=>String(w.id)===String(t)))==null?void 0:$.position_name)||""}`:"",r?`สถานะ: ${s(r)}`:"",n?`ห้อง: ${n}`:""].filter(Boolean).join(" · ");Te(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>ทะเบียนสมาชิกสภานักเรียน</title><style>@page{size:A4 landscape;margin:9mm}body{font-family:Tahoma,sans-serif;color:#111}h1,p{text-align:center;margin:4px}h2{font-size:14px;margin:18px 0 6px;break-after:avoid}h2 small{font-weight:normal}table{width:100%;border-collapse:collapse;margin-bottom:12px}th,td{border:1px solid #444;padding:5px;font-size:10px}th{background:#eee}thead{display:table-header-group}tr{break-inside:avoid}</style></head><body><h1>${i==="attendance"?"ใบลงชื่อสมาชิกสภานักเรียน":"ทะเบียนสมาชิกสภานักเรียน"}</h1><p>${o((a==null?void 0:a.term_label)||"")} · จำนวน ${m.length} คน</p>${h?`<p>${o(h)}</p>`:""}${m.length?[...x.values()].map(v).join(""):'<p style="margin-top:40px">ไม่พบรายชื่อตามตัวกรองที่เลือก</p>'}</body></html>`)}function ed(){const e=[...new Set(d.members.map(t=>{var r;return(r=t.students)==null?void 0:r.main_room}).filter(Boolean))].sort((t,r)=>t.localeCompare(r,"th",{numeric:!0}));return`<div class="space-y-4"><div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"><h2 class="font-bold text-[var(--ink)]">ศูนย์พิมพ์ใบรายชื่อสมาชิกสภานักเรียน</h2><p class="text-xs text-[var(--muted)] mt-1">เลือกวาระ เพศ ฝ่าย สถานะ ห้อง รูปแบบการจัดกลุ่ม และชนิดเอกสารก่อนพิมพ์</p><div class="grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
    <select id="print-member-gender" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]"><option value="">ทุกเพศ</option><option value="M">นักเรียนชาย</option><option value="W">นักเรียนหญิง</option></select>
    <select id="print-member-position" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]"><option value="">ทุกฝ่าย/ตำแหน่ง</option>${d.positions.map(t=>`<option value="${t.id}">${o(D[t.gender])} — ${o(t.position_name)}</option>`).join("")}</select>
    <select id="print-member-status" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]"><option value="">ทุกสถานะ</option><option value="active">ปฏิบัติหน้าที่</option><option value="designate">ว่าที่สมาชิก</option><option value="ended">หมดวาระ</option></select>
    <select id="print-member-room" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]"><option value="">ทุกห้อง</option>${e.map(t=>`<option value="${o(t)}">${o(t)}</option>`).join("")}</select>
    <select id="print-member-group" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]"><option value="gender_position">แยกเพศและฝ่าย</option><option value="gender">แยกตามเพศ</option><option value="position">แยกตามฝ่าย</option><option value="room">แยกตามห้อง</option><option value="none">รวมรายชื่อเดียว</option></select>
    <select id="print-member-format" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)]"><option value="register">ทะเบียนสมาชิก/ข้อมูลแต่งตั้ง</option><option value="attendance">ใบลงชื่อ/บันทึกการเข้าร่วม</option></select>
  </div><button type="button" id="btn-print-members" class="w-full mt-3 rounded-xl bg-[var(--primary)] text-white px-4 py-3 text-sm font-bold">🖨️ พิมพ์รายชื่อสมาชิกตามตัวกรอง</button></div>
  <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5"><h3 class="text-sm font-bold text-[var(--ink)]">ใบรายชื่อผู้สมัครประธานสภา</h3><div class="grid sm:grid-cols-2 gap-3 mt-3">${["M","W"].map(t=>`<button type="button" class="btn-print-candidates rounded-xl border border-[var(--primary-45)] p-4 text-left" data-gender="${t}"><span class="text-2xl">🗳️</span><p class="text-sm font-bold mt-2">ผู้สมัครประธาน${D[t]}</p><p class="text-xs text-[var(--muted)]">หมายเลข ชื่อ ห้อง และสถานะ</p></button>`).join("")}</div></div></div>`}const td={overview:Da,regulation:()=>Ro(d,g),forms:()=>fr({kind:"forms",esc:o,canOpenDocs:d.isAdmin||d.role==="teacher"||d.isChair}),yla:Ti,activityDocs:()=>fr({kind:"activityDocs",esc:o}),endorse:Vi,apps:Oi,interview:Fi,appoint:Yi,news:nl,activities:Xi,eval:il,docs:_l,candidates:$i,myCampaign:ki,roster:Gi,result:Ba,settings:Tl,chairteam:Cl,myduty:ql,mysummary:Pl,assignments:Fl,peerEndorse:Wi,perms:Vl,myCouncilProfile:Wl,dashboard:Bi,termAdmin:Hl,candidateAdmin:Kl,printCenter:ed},rd={apply:{new:li,mine:gi},election:{status:Ba}};function g(){if(bt){ad();return}Or(!0);const e=Xo();e.some(r=>r.id===Be)||Fe("overview"),Zo(e);const t=td[Be]||Da;qr.innerHTML=`<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${Ko()}${t()}</div>`,ln()}function ad(){var r;Or(!1);const e=Ho[bt];e.subtabs.some(n=>n.id===_e)||(_e=e.subtabs[0].id),document.getElementById("council-view-title").textContent=e.title;const t=((r=rd[bt])==null?void 0:r[_e])??(()=>"");qr.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${e.title}</h2>
      </div>
      ${e.subtabs.length>1?`
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${e.subtabs.map(n=>`
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${n.id===_e?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}"
            data-subtab="${n.id}">${o(n.label)}</button>`).join("")}
      </div>`:""}
      <div>${t()}</div>
    </div>`,document.getElementById("btn-flow-close").addEventListener("click",()=>{bt=null,_e=null,jt(),g()}),document.querySelectorAll(".flow-subtab-btn").forEach(n=>{n.addEventListener("click",()=>{_e=n.dataset.subtab,g()})}),ln()}function ln(){var r,n,l,i,a,s,c,m,p,u,x,b,v,h,$,w,T,E,A,S,N,q,M,z,be,ve,X;(r=document.getElementById("council-term-switcher"))==null||r.addEventListener("change",y=>Zr(y.target.value)),(n=document.getElementById("campaign-video-file"))==null||n.addEventListener("change",async y=>{var J;const _=y.target,L=(J=_.files)==null?void 0:J[0],C=_.closest("form"),j=document.getElementById("campaign-video-status");if(!L||!C)return;if(L.size>50*1024*1024){_.value="",f("วิดีโอต้องมีขนาดไม่เกิน 50 MB","warning");return}if(!["video/mp4","video/webm","video/quicktime","video/ogg"].includes(L.type)){_.value="",f("รองรับวิดีโอ MP4, WebM, MOV หรือ OGG","warning");return}const P=await new Promise(U=>{const oe=document.createElement("video");oe.preload="metadata",oe.onloadedmetadata=()=>{URL.revokeObjectURL(oe.src),U(oe.duration)},oe.onerror=()=>U(null),oe.src=URL.createObjectURL(L)});if(P!=null&&P>60){_.value="",f("วิดีโอต้องยาวไม่เกิน 60 วินาที","warning");return}ir=!0,_.disabled=!0,j&&(j.textContent="กำลังอัปโหลดวิดีโอ…");try{C.campaign_video_url.value=await In({candidateId:Number(C.dataset.candidateId),file:L}),j&&(j.textContent="อัปโหลดแล้ว · วิดีโอจะแสดงบนบอร์ดหลังอนุมัติ")}catch(U){_.value="",j&&(j.textContent="อัปโหลดไม่สำเร็จ"),f("อัปโหลดวิดีโอไม่สำเร็จ: "+I(U),"error")}finally{ir=!1,_.disabled=!1}}),(l=document.getElementById("my-campaign-form"))==null||l.addEventListener("submit",async y=>{var j;if(y.preventDefault(),ir){f("รออัปโหลดวิดีโอให้เสร็จก่อน","warning");return}const _=y.currentTarget,L=((j=y.submitter)==null?void 0:j.dataset.submit)==="1",C=y.submitter;C&&(C.disabled=!0,C.textContent="กำลังบันทึก…");try{const P=_.policies.value.split(`
`).map(U=>U.trim()).filter(Boolean),J=_.experience.value.split(`
`).map(U=>U.trim()).filter(Boolean);if(P.length>12||J.length>12)throw new Error("นโยบายและผลงานใส่ได้อย่างละไม่เกิน 12 ข้อ");await Cn({slogan:_.slogan.value.trim(),vision:_.vision.value.trim(),policies:P,experience:J,campaignVideoUrl:_.campaign_video_url.value,submit:L}),Et=await ga(),f(L?"ส่งบอร์ดหาเสียงให้ตรวจแล้ว ✅":"บันทึกร่างแล้ว ✅","success"),g()}catch(P){f("บันทึกไม่สำเร็จ: "+I(P),"error"),C&&(C.disabled=!1,C.textContent=L?"ส่งให้ครูตรวจและเผยแพร่":"บันทึกร่าง")}}),(i=document.getElementById("council-term-create-form"))==null||i.addEventListener("submit",async y=>{y.preventDefault();const _=y.target,L=_.querySelector('button[type="submit"]');L.disabled=!0;try{await Ln({label:_.label.value.trim(),academicYear:_.academic_year.value,startSemester:_.start_semester.value,startYear:_.start_year.value,endSemester:_.end_semester.value,endYear:_.end_year.value,dutyStartDate:_.duty_start_date.value,dutyEndDate:_.duty_end_date.value}),ue=await pr(),f("สร้างวาระใหม่แล้ว ✅","success"),g()}catch(C){f("สร้างวาระไม่สำเร็จ: "+I(C),"error"),L.disabled=!1}}),document.querySelectorAll(".btn-activate-term").forEach(y=>y.addEventListener("click",async()=>{try{const _=await Tn(Number(y.dataset.id)),L=(_==null?void 0:_.active_members_to_end)??(_==null?void 0:_.ended_members)??0,C=(_==null?void 0:_.designates_to_activate)??(_==null?void 0:_.activated_members)??0;if(!confirm(`ยืนยันเริ่มวาระใหม่?

สมาชิกวาระเดิมที่จะหมดวาระ: ${L} คน
ว่าที่สมาชิกที่จะเริ่มปฏิบัติหน้าที่: ${C} คน

ข้อมูลวาระเดิมจะยังคงอยู่ในประวัติ`))return;await Nn(Number(y.dataset.id)),ue=await pr(),B=null,await Zr(y.dataset.id),f("เริ่มวาระใหม่แล้ว ✅","success")}catch(_){f("เริ่มวาระไม่สำเร็จ: "+I(_),"error")}})),document.querySelectorAll(".candidate-admin-gender").forEach(y=>y.addEventListener("click",()=>{H=y.dataset.gender,g()})),(a=document.getElementById("btn-create-candidate-election"))==null||a.addEventListener("click",async()=>{try{await Nr({gender:H,academicYear:Y,termId:B}),d.elections=await Oe(null,B),te[H]=null,g()}catch(y){f("สร้างรอบเลือกตั้งไม่สำเร็จ: "+I(y),"error")}});const e=document.getElementById("candidate-election-settings"),t=async y=>{const _=e;if(!_)return;const L=ye(H);await Pn({electionConfigId:Number(_.dataset.id),opensAt:_.opens_at.value?new Date(_.opens_at.value).toISOString():null,closesAt:_.closes_at.value?new Date(_.closes_at.value).toISOString():null,campaignOpensAt:_.campaign_opens_at.value?new Date(_.campaign_opens_at.value).toISOString():null,campaignEnabled:(y==null?void 0:y.campaignEnabled)??L.campaign_enabled,candidatesPublished:(y==null?void 0:y.candidatesPublished)??L.candidates_published}),d.elections=await Oe(null,B),f("บันทึกการตั้งค่าเลือกตั้งแล้ว ✅","success"),g()};e==null||e.addEventListener("submit",async y=>{y.preventDefault();try{await t()}catch(_){f("บันทึกไม่สำเร็จ: "+I(_),"error")}}),document.querySelectorAll(".candidate-setting-action").forEach(y=>y.addEventListener("click",async()=>{try{await t(y.dataset.field==="campaign"?{campaignEnabled:y.dataset.value==="1"}:{candidatesPublished:y.dataset.value==="1"})}catch(_){f("บันทึกไม่สำเร็จ: "+I(_),"error")}})),document.querySelectorAll(".candidate-admin-row").forEach(y=>y.addEventListener("submit",async _=>{_.preventDefault();const L=_.target;try{await qn({candidateId:Number(L.dataset.id),ballotNumber:L.ballot.value,status:L.status.value}),te[H]=await ct(ye(H).id),delete ne[H],f("บันทึกผู้สมัครแล้ว ✅","success"),g()}catch(C){f("บันทึกไม่สำเร็จ: "+I(C),"error")}})),document.querySelectorAll(".btn-review-campaign").forEach(y=>y.addEventListener("click",async()=>{const _=y.dataset.approve==="1",L=_?null:prompt("แจ้งข้อเสนอแนะให้ผู้สมัครแก้ไข (ใส่หรือเว้นว่างได้)");if(!(!_&&L===null)){y.disabled=!0;try{await jn({candidateId:Number(y.dataset.id),approve:_,comment:L});const C=ye(H);[te[H],Ge[H]]=await Promise.all([ct(C.id),$a(C.id)]),delete ne[H],f(_?"อนุมัติและเผยแพร่บอร์ดแล้ว ✅":"ส่งข้อเสนอแนะกลับให้ผู้สมัครแล้ว","success"),g()}catch(C){f("ดำเนินการไม่สำเร็จ: "+I(C),"error"),y.disabled=!1}}})),(s=document.getElementById("btn-add-designate-candidate"))==null||s.addEventListener("click",async y=>{var P,J;const _=y.currentTarget,L=Number((P=document.getElementById("candidate-designate-select"))==null?void 0:P.value),C=ye(H),j=(J=d.members.find(U=>{var oe,Ur;return Number(U.student_id)===L&&U.status==="designate"&&Number(U.term_id)===Number(C==null?void 0:C.term_id)&&((oe=U.council_positions)==null?void 0:oe.gender)===H&&((Ur=U.council_positions)==null?void 0:Ur.is_elected)===!0}))==null?void 0:J.students;if(!L||!C){f("กรุณาเลือกว่าที่ประธาน","warning");return}if(confirm(`เพิ่ม ${(j==null?void 0:j.full_name)||"นักเรียนคนนี้"} เป็นผู้สมัครประธาน${D[H]} สถานะร่างหรือไม่? การเพิ่มโดยตรงจะข้ามขั้นตอนใบสมัครและสัมภาษณ์`)){_.disabled=!0;try{await Rn({electionConfigId:C.id,studentId:L}),te[H]=await ct(C.id),delete ne[H],f("เพิ่มเป็นผู้สมัครสถานะร่างแล้ว ✅","success"),g()}catch(U){f("เพิ่มผู้สมัครไม่สำเร็จ: "+I(U),"error"),_.disabled=!1}}}),document.querySelectorAll(".btn-print-candidates").forEach(y=>y.addEventListener("click",async()=>{const _=y.dataset.gender,L=ye(_);L&&te[_]===null&&(te[_]=await ct(L.id).catch(()=>[])),Xl(_)})),(c=document.getElementById("btn-print-members"))==null||c.addEventListener("click",()=>{var y,_,L,C,j,P;return Zl({gender:((y=document.getElementById("print-member-gender"))==null?void 0:y.value)||"",positionId:((_=document.getElementById("print-member-position"))==null?void 0:_.value)||"",status:((L=document.getElementById("print-member-status"))==null?void 0:L.value)||"",room:((C=document.getElementById("print-member-room"))==null?void 0:C.value)||"",groupBy:((j=document.getElementById("print-member-group"))==null?void 0:j.value)||"gender_position",format:((P=document.getElementById("print-member-format"))==null?void 0:P.value)||"register"})}),Do(d,g),Yo({esc:o,onKindChange:y=>{Fe(y==="forms"||y==="yla"||y==="activityDocs"?y:"forms"),g()}}),Ni(),document.querySelectorAll(".flow-entry-btn").forEach(y=>{y.addEventListener("click",()=>{bt=y.dataset.flow,_e=null,g()})}),document.querySelectorAll(".goto-view").forEach(y=>{y.addEventListener("click",()=>{Fe(y.dataset.view),g()})}),document.querySelectorAll(".roster-gender-tab-btn").forEach(y=>{y.addEventListener("click",()=>{xe=y.dataset.gender,g()})}),document.querySelectorAll(".btn-view-my-app-detail").forEach(y=>{y.addEventListener("click",()=>{vt=Number(y.dataset.id),g()})}),(m=document.getElementById("btn-my-app-detail-close"))==null||m.addEventListener("click",()=>{vt=null,g()}),(p=document.getElementById("my-app-detail-backdrop"))==null||p.addEventListener("click",y=>{y.target.id==="my-app-detail-backdrop"&&(vt=null,g())}),(u=document.getElementById("btn-pick-my-app-endorser"))==null||u.addEventListener("click",y=>{Di(Number(y.target.dataset.appId),y.target.dataset.gender)}),(x=document.getElementById("btn-add-council-member"))==null||x.addEventListener("click",()=>{sa({mode:"add",gender:xe})}),document.querySelectorAll(".btn-edit-council-member").forEach(y=>{y.addEventListener("click",()=>{var L;const _=d.members.find(C=>C.id===Number(y.dataset.id));_&&sa({mode:"edit",gender:(L=_.council_positions)==null?void 0:L.gender,member:_})})}),document.querySelectorAll(".btn-remove-council-member").forEach(y=>{y.addEventListener("click",async()=>{if(confirm("ลบสมาชิกสภาคนนี้ออกจากทำเนียบ? (จะเก็บประวัติไว้ ไม่ได้ลบข้อมูลทิ้งถาวร)"))try{await Dn(Number(y.dataset.id)),f("ลบแล้ว ✅","success"),d.members=await Ue(null,B).catch(()=>d.members),g()}catch(_){f("ลบไม่สำเร็จ: "+I(_),"error")}})}),document.querySelectorAll(".btn-toggle-can-create").forEach(y=>{y.addEventListener("click",async()=>{const _=Number(y.dataset.id),L=y.dataset.value==="1";y.disabled=!0;try{await Mn(_,L);const C=d.members.find(P=>P.id===_);C&&(C.can_create_activities=L);const j=d.membership.find(P=>P.id===_);j&&(j.can_create_activities=L),f(L?"ให้สิทธิ์สร้างกิจกรรมแล้ว ✅":"ถอนสิทธิ์แล้ว ✅","success"),g()}catch(C){f("บันทึกไม่สำเร็จ: "+I(C),"error"),y.disabled=!1}})}),document.querySelectorAll(".btn-peer-endorse").forEach(y=>{y.addEventListener("click",()=>Hi(y.dataset.id))}),(b=document.getElementById("btn-open-apply"))==null||b.addEventListener("click",()=>{if(!zt(d.student)){f(yr(d.student),"warning");return}Yt=!0;const y=Vo();Z=y&&y.step>1?y:null,Z||(Q=mt(pt())),g()}),(v=document.getElementById("btn-cancel-apply"))==null||v.addEventListener("click",()=>{jt(),Z=null,g()}),(h=document.getElementById("btn-apply-draft-resume"))==null||h.addEventListener("click",()=>{O={...O,...Z.data},W=Z.step;const y=Z.certTitles||[];Q=y.length?y.map(_=>({file:null,title:_||"",previewUrl:null,isPdf:!1})):mt(pt()),Z=null,g()}),($=document.getElementById("btn-apply-draft-discard"))==null||$.addEventListener("click",()=>{Kr(),jt(),Z=null,Yt=!0,g()}),(w=document.getElementById("btn-apply-back"))==null||w.addEventListener("click",()=>{W=Math.max(1,W-1),de(),g()}),(T=document.getElementById("apply-step1-form"))==null||T.addEventListener("submit",y=>{y.preventDefault();const _=y.target.positionId.value;if(!_){f("กรุณาเลือกตำแหน่ง","warning");return}O.positionId=_,W=2,de(),g()}),(E=document.getElementById("apply-step2-form"))==null||E.addEventListener("submit",y=>{y.preventDefault();const _=y.target,L=_.gpaGeneral.value,C=_.gpaReligious.value,j=_.motivation.value.trim(),P=Number(L),J=Number(C);if(!L||!C||P<0||P>4||J<0||J>4){f("กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)","warning");return}const U=Number(d.cfg.council_min_gpa||2.5),oe=Number(d.cfg.council_min_gpa_religious||2.5);if(P<U||J<oe){f(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${U}, ศาสนา ≥ ${oe})`,"warning");return}if(j.length<10){f("กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร","warning");return}O.gpaGeneral=L,O.gpaReligious=C,O.motivation=j,W=3,de(),g()}),(A=document.getElementById("apply-photo"))==null||A.addEventListener("change",y=>{var L;const _=((L=y.target.files)==null?void 0:L[0])??null;Re=_,he&&URL.revokeObjectURL(he),he=_?URL.createObjectURL(_):null,g()}),(S=document.getElementById("btn-apply-step3-next"))==null||S.addEventListener("click",()=>{if(!Re){f("กรุณาแนบรูปถ่าย","warning");return}W=4,de(),g()}),(N=document.getElementById("apply-step4-form"))==null||N.addEventListener("submit",y=>{y.preventDefault();const _=y.target.videoUrl.value.trim();if(!/^https?:\/\//.test(_)){f("กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)","warning");return}O.videoUrl=_,W=5,de(),g()}),document.querySelectorAll(".cert-title-input").forEach(y=>{y.addEventListener("input",()=>{Q[+y.dataset.idx].title=y.value,de()})}),document.querySelectorAll(".cert-file-input").forEach(y=>{y.addEventListener("change",_=>{var P;const L=+y.dataset.idx,C=((P=_.target.files)==null?void 0:P[0])??null,j=Q[L];j.previewUrl&&URL.revokeObjectURL(j.previewUrl),j.file=C,j.isPdf=(C==null?void 0:C.type)==="application/pdf",j.previewUrl=C&&!j.isPdf?URL.createObjectURL(C):null,g()})}),(q=document.getElementById("btn-add-cert"))==null||q.addEventListener("click",()=>{Q.push(...mt(1)),de(),g()}),document.querySelectorAll(".btn-remove-cert").forEach(y=>{y.addEventListener("click",()=>{const _=+y.dataset.idx,L=Q[_];L.previewUrl&&URL.revokeObjectURL(L.previewUrl),Q.splice(_,1),de(),g()})}),(M=document.getElementById("btn-apply-step5-next"))==null||M.addEventListener("click",()=>{const y=Q.filter(L=>L.file&&L.title.trim()).length,_=pt();if(y<_){f(`กรุณาแนบเกียรติบัตร/รางวัลอย่างน้อย ${_} รายการ (พร้อมชื่อรางวัล)`,"warning");return}Fr()?W=6:Xe=!0,de(),g()}),document.querySelectorAll(".btn-pick-peer-endorser").forEach(y=>{y.addEventListener("click",()=>{O.peerEndorserId=y.dataset.id,de(),g()})}),(z=document.getElementById("btn-apply-step6-next"))==null||z.addEventListener("click",()=>{if(!O.peerEndorserId){f("กรุณาเลือกพี่สภาที่ต้องการให้รับรอง","warning");return}Xe=!0,de(),g()}),(be=document.getElementById("btn-apply-edit"))==null||be.addEventListener("click",()=>{Xe=!1,g()}),(ve=document.getElementById("apply-confirm-backdrop"))==null||ve.addEventListener("click",y=>{y.target.id==="apply-confirm-backdrop"&&(Xe=!1,g())}),(X=document.getElementById("btn-apply-confirm-submit"))==null||X.addEventListener("click",async()=>{if(!zt(d.student)){f(yr(d.student),"error");return}const y=document.getElementById("btn-apply-confirm-submit");y.disabled=!0,y.textContent="กำลังส่ง...";try{let _=null;Re&&(_=await vn(d.student.id,Re));const L=Q.filter(j=>j.file&&j.title.trim()),C=await Promise.all(L.map(async j=>({title:j.title.trim(),url:await xn(d.student.id,j.file)})));await Bn({termId:B,studentId:d.student.id,positionId:Number(O.positionId),motivation:O.motivation,photoUrl:_,gpaGeneral:Number(O.gpaGeneral),gpaReligious:Number(O.gpaReligious),introVideoUrl:O.videoUrl,certificates:C,requestedPeerEndorserId:O.peerEndorserId?Number(O.peerEndorserId):null}),f("ส่งใบสมัครสำเร็จ ✅","success"),Kr(),jt(),await ja(),_e="mine",g()}catch(_){f("ส่งใบสมัครไม่สำเร็จ: "+I(_),"error"),y.disabled=!1,y.textContent="✅ ยืนยันการสมัคร"}}),document.querySelectorAll(".endorse-phrase-chip").forEach(y=>{y.addEventListener("click",()=>{const _=document.querySelector(`.endorse-comment[data-id="${y.dataset.target}"]`);if(!_)return;const L=_.value.trim();_.value=L?L+" "+y.dataset.phrase:y.dataset.phrase,_.focus()})}),document.querySelectorAll(".btn-endorse-confirm").forEach(y=>{y.addEventListener("click",()=>oa(y.dataset.id,"confirm"))}),document.querySelectorAll(".btn-endorse-decline").forEach(y=>{y.addEventListener("click",()=>oa(y.dataset.id,"decline"))}),bd(),nd(),vd(),pd(),md(),ud(),cd(),dd(),ld(),od(),id(),sd()}function nd(){var e,t,r,n;document.querySelectorAll(".interview-gender-tab-btn").forEach(l=>{l.addEventListener("click",()=>{He=l.dataset.gender,g()})}),document.querySelectorAll(".interview-filter-btn").forEach(l=>{l.addEventListener("click",()=>{Qe=l.dataset.filter,g()})}),(e=document.getElementById("interview-search"))==null||e.addEventListener("change",l=>{Gt=l.target.value,g()}),(t=document.querySelector(".interview-clear-search"))==null||t.addEventListener("click",()=>{Gt="",g()}),document.querySelectorAll(".appointment-gender-tab-btn").forEach(l=>{l.addEventListener("click",()=>{Je=l.dataset.gender,g()})}),document.querySelectorAll(".appointment-filter-btn").forEach(l=>{l.addEventListener("click",()=>{Ke=l.dataset.filter,g()})}),(r=document.getElementById("appointment-search"))==null||r.addEventListener("change",l=>{Vt=l.target.value,g()}),(n=document.querySelector(".appointment-clear-search"))==null||n.addEventListener("click",()=>{Vt="",g()})}function sd(){var e;document.querySelectorAll(".perms-add-form").forEach(t=>{t.addEventListener("submit",async r=>{var p;r.preventDefault();const n=r.target,l=n.dataset.position,a=n.teacherText.value.trim().match(/· รหัส (\d+)$/);if(!a){f("กรุณาเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=Number(a[1]);if((p={council_advisor:re,student_affairs_head:at,school_director:nt}[l])!=null&&p.some(u=>u.id===s)){f("ครูคนนี้อยู่ในรายชื่อนี้แล้ว","warning");return}const m=n.querySelector('button[type="submit"]');m.disabled=!0,m.textContent="กำลังบันทึก...";try{await Bs(s,l),f("เพิ่มแล้ว ✅","success"),re=null,at=null,nt=null,g()}catch(u){f("บันทึกไม่สำเร็จ: "+I(u),"error"),m.disabled=!1,m.textContent="เพิ่ม"}})}),document.querySelectorAll(".btn-remove-teacher-position").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ถอดถอนออกจากรายชื่อนี้?"))try{await Ps(Number(t.dataset.id),t.dataset.position),re=null,at=null,nt=null,g()}catch(r){f("ถอดถอนไม่สำเร็จ: "+I(r),"error")}})}),document.querySelectorAll(".btn-toggle-advisor-depts").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);Lr=Lr===r?null:r,g()})}),document.querySelectorAll(".advisor-dept-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.teacherId),l=d.positions.filter(a=>{var s;return(s=t[`pos_${a.id}`])==null?void 0:s.checked}).map(a=>a.id),i=t.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Os(n,l),er[n]=l,f("บันทึกฝ่ายที่ดูแลแล้ว ✅","success"),g()}catch(a){f("บันทึกไม่สำเร็จ: "+I(a),"error"),i.disabled=!1,i.textContent="บันทึกฝ่าย"}})}),document.querySelectorAll(".btn-edit-council-profile").forEach(t=>{t.addEventListener("click",()=>{va({id:Number(t.dataset.id),full_name:t.dataset.name,image_url:t.dataset.image||null,signature_url:t.dataset.signature||null})})}),(e=document.getElementById("btn-edit-my-council-profile"))==null||e.addEventListener("click",()=>{d.teacher&&va(d.teacher)})}function od(){var e,t;document.querySelectorAll(".myduty-subtab-btn").forEach(r=>{r.addEventListener("click",()=>{Ot=r.dataset.tab,g()})}),(e=document.getElementById("routine-add-form"))==null||e.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,l=n.task.value.trim();if(!l){f("กรุณากรอกงานที่ต้องทำ","warning");return}const i=d.membership[0];try{await Ns({memberId:i.id,dayOfWeek:n.dayOfWeek.value===""?null:Number(n.dayOfWeek.value),timeRange:n.timeRange.value.trim(),task:l,location:n.location.value.trim()}),ce=null,g()}catch(a){f("เพิ่มไม่สำเร็จ: "+I(a),"error")}}),document.querySelectorAll(".btn-remove-routine").forEach(r=>{r.addEventListener("click",async()=>{if(confirm("ลบรูทีนนี้?"))try{await qs(Number(r.dataset.id)),ce=null,g()}catch(n){f("ลบไม่สำเร็จ: "+I(n),"error")}})}),document.querySelectorAll(".routine-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),l=r.checked;r.disabled=!0;try{await js({routineId:n,weekStart:on(),done:l}),l?it.add(n):it.delete(n),g()}catch(i){f("บันทึกไม่สำเร็จ: "+I(i),"error"),r.checked=!l,r.disabled=!1}})}),document.querySelectorAll(".assignment-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),l=r.checked?"done":"open";r.disabled=!0;try{await Rs(n,l);const i=Me.find(a=>a.id===n);i&&(i.status=l),g()}catch(i){f("บันทึกไม่สำเร็จ: "+I(i),"error"),r.checked=!r.checked,r.disabled=!1}})}),(t=document.getElementById("btn-show-my-council-qr"))==null||t.addEventListener("click",()=>{d.student&&Dl(d.student)})}function id(){var e;(e=document.getElementById("assignment-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.memberId.value),l=r.task.value.trim();if(!n||!l){f("กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Ds({memberId:n,task:l,dueDate:r.dueDate.value||null,assignedByStudentId:d.student.id}),f("มอบหมายงานแล้ว ✅","success");const a=Ie(d.student.gender);delete wt[a],g()}catch(a){f("บันทึกไม่สำเร็จ: "+I(a),"error"),i.disabled=!1,i.textContent="มอบหมายงาน"}}),document.querySelectorAll(".btn-delete-assignment").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบงานที่มอบหมายนี้?"))try{await Ms(Number(t.dataset.id));const r=Ie(d.student.gender);delete wt[r],g()}catch(r){f("ลบไม่สำเร็จ: "+I(r),"error")}})})}function ld(){var e;(e=document.getElementById("nominate-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.positionId.value),l=Number(r.applicationId.value);if(!n||!l){f("กรุณาเลือกตำแหน่งและผู้สมัคร","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังเสนอ...";try{await Ls({applicationId:l,positionId:n,proposedByStudentId:d.student.id}),f("เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅","success");const a=Ie(d.student.gender);delete Pe[a],delete yt[a],g()}catch(a){f("เสนอไม่สำเร็จ: "+I(a),"error"),i.disabled=!1,i.textContent="เสนอต่อครูที่ปรึกษาสภา"}}),document.querySelectorAll(".btn-decide-nomination").forEach(t=>{t.addEventListener("click",async()=>{var a,s;const r=Number(t.dataset.id),n=t.dataset.approve==="true",l=((a=document.querySelector(`.nom-comment[data-id="${r}"]`))==null?void 0:a.value.trim())??"";if(!n&&!l){f("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}const i=t.closest("[data-nom-card]");i==null||i.querySelectorAll("button").forEach(c=>{c.disabled=!0});try{await Ts({nominationId:r,approve:n,teacherId:((s=d.teacher)==null?void 0:s.id)??null,comment:l}),f(n?"อนุมัติแล้ว ✅":"ไม่อนุมัติแล้ว","success"),delete $t.M,delete $t.W,delete yt.M,delete yt.W,delete Pe.M,delete Pe.W,d.members=await Ue(null,B).catch(()=>d.members),g()}catch(c){f("บันทึกไม่สำเร็จ: "+I(c),"error"),i==null||i.querySelectorAll("button").forEach(m=>{m.disabled=!1})}})})}function dd(){var e,t,r,n,l,i;document.querySelectorAll(".settings-tab-btn").forEach(a=>{a.addEventListener("click",()=>{ut=a.dataset.tab,g()})}),(e=document.getElementById("settings-general-form"))==null||e.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{const m={council_name:s.council_name.value.trim(),council_logo_url:s.council_logo_url.value.trim(),council_theme_side_m:s.council_theme_side_m.value,council_theme_side_w:s.council_theme_side_w.value,council_term_start_semester:s.council_term_start_semester.value.trim(),council_term_start_year:s.council_term_start_year.value.trim(),council_term_end_semester:s.council_term_end_semester.value.trim(),council_term_end_year:s.council_term_end_year.value.trim(),council_min_gpa:s.council_min_gpa.value,council_min_gpa_religious:s.council_min_gpa_religious.value,council_eligible_grade_levels:s.council_eligible_grade_levels.value.trim(),council_min_certificates:s.council_min_certificates.value,council_min_attendance_pct:s.council_min_attendance_pct.value,council_require_teacher_endorsement:s.council_require_teacher_endorsement.checked?"true":"false",council_require_peer_endorsement:s.council_require_peer_endorsement.checked?"true":"false",council_apply_opens_at:s.council_apply_opens_at.value?new Date(s.council_apply_opens_at.value).toISOString():"",council_apply_closes_at:s.council_apply_closes_at.value?new Date(s.council_apply_closes_at.value).toISOString():"",council_featured_phase:s.council_featured_phase.value,council_visible_to_all:s.council_visible_to_all.checked?"true":"false",council_test_student_codes:s.council_test_student_codes.value.trim(),council_election_thank_you_message:s.council_election_thank_you_message.value.trim(),council_signer_advisor_name:s.council_signer_advisor_name.value.trim(),council_signer_director_name:s.council_signer_director_name.value.trim()};await It(m),d.cfg={...d.cfg,...m},Ra(d.cfg),f("บันทึกการตั้งค่าแล้ว ✅","success"),g()}catch(m){f("บันทึกไม่สำเร็จ: "+I(m),"error"),c.disabled=!1,c.textContent="💾 บันทึกการตั้งค่า"}}),document.querySelectorAll(".position-row-form").forEach(a=>{a.addEventListener("submit",async s=>{s.preventDefault();const c=Number(a.dataset.id),m=a.position_name.value.trim(),p=Number(a.seats_count.value);if(!m||!p){f("กรอกชื่อและจำนวนที่นั่งให้ครบ","warning");return}try{await ws(c,{position_name:m,seats_count:p}),d.positions=await qt(),f("บันทึกแล้ว ✅","success"),g()}catch(u){f("บันทึกไม่สำเร็จ: "+I(u),"error")}})}),document.querySelectorAll(".btn-delete-position").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)"))try{await ks(Number(a.dataset.id)),d.positions=await qt(),g()}catch(s){f("ลบไม่สำเร็จ: "+I(s),"error")}})}),document.querySelectorAll(".position-add-form").forEach(a=>{a.addEventListener("submit",async s=>{s.preventDefault();const c=a.dataset.gender,m=a.position_name.value.trim(),p=Number(a.seats_count.value)||1;if(!m){f("กรอกชื่อตำแหน่ง","warning");return}try{await Es({gender:c,positionName:m,seatsCount:p,isElected:!1,sortOrder:999}),d.positions=await qt(),f("เพิ่มตำแหน่งแล้ว ✅","success"),g()}catch(u){f("เพิ่มไม่สำเร็จ: "+I(u),"error")}})}),(t=document.getElementById("interview-criterion-form"))==null||t.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.name.value.trim(),m=Number(s.weight.value);if(!c||!m){f("กรอกชื่อหัวข้อและคะแนนให้ครบ","warning");return}try{await As({name:c,weight:m}),le=null,g()}catch(p){f("บันทึกไม่สำเร็จ: "+I(p),"error")}}),document.querySelectorAll(".btn-remove-interview-criterion").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?"))try{await Ss(Number(a.dataset.id)),le=null,g()}catch(s){f("ลบไม่สำเร็จ: "+I(s),"error")}})}),(r=document.getElementById("settings-video-form"))==null||r.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.council_video_max_minutes.value.trim(),m=s.council_video_brief.value.split(`
`).map(p=>p.trim()).filter(Boolean);try{const p={council_video_max_minutes:c,council_video_brief:JSON.stringify(m)};await It(p),d.cfg={...d.cfg,...p},f("บันทึกแล้ว ✅","success"),g()}catch(p){f("บันทึกไม่สำเร็จ: "+I(p),"error")}}),(n=document.getElementById("settings-doc-options-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=m=>m.split(`
`).map(p=>p.trim()).filter(Boolean);try{const m={council_doc_plan_areas:JSON.stringify(c(s.council_doc_plan_areas.value)),council_doc_project_types:JSON.stringify(c(s.council_doc_project_types.value)),council_doc_school_strategies:JSON.stringify(c(s.council_doc_school_strategies.value)),council_doc_education_standards:JSON.stringify(c(s.council_doc_education_standards.value))};await It(m),d.cfg={...d.cfg,...m},f("บันทึกแล้ว ✅","success"),g()}catch(m){f("บันทึกไม่สำเร็จ: "+I(m),"error")}}),(l=document.getElementById("phrase-form"))==null||l.addEventListener("submit",async a=>{a.preventDefault();const c=a.target.phrase.value.trim();if(c)try{await Is({phrase:c,sortOrder:(we==null?void 0:we.length)??0}),we=null,g()}catch(m){f("บันทึกไม่สำเร็จ: "+I(m),"error")}}),document.querySelectorAll(".btn-remove-phrase").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบข้อความนี้?"))try{await Cs(Number(a.dataset.id)),we=null,g()}catch(s){f("ลบไม่สำเร็จ: "+I(s),"error")}})}),document.querySelectorAll(".cert-template-type-radio").forEach(a=>{a.addEventListener("change",()=>{var c,m,p;const s=((c=document.querySelector('input[name="template_type"]:checked'))==null?void 0:c.value)==="custom";(m=document.getElementById("cert-template-preset-select"))==null||m.classList.toggle("hidden",s),(p=document.getElementById("cert-template-file-input"))==null||p.classList.toggle("hidden",!s)})}),(i=document.getElementById("cert-template-form"))==null||i.addEventListener("submit",async a=>{var u,x;a.preventDefault();const s=a.target,c=s.name.value.trim();if(!c)return;const m=s.template_type.value==="custom",p=s.querySelector('button[type="submit"]');p.disabled=!0,p.textContent="กำลังบันทึก...";try{let b=null;if(m){const $=(u=s.background_image.files)==null?void 0:u[0];if(!$){f("กรุณาอัปโหลดรูปพื้นหลังเทมเพลต","warning"),p.disabled=!1,p.textContent="เพิ่มเทมเพลต";return}b=await fn($)}const v=m?null:s.preset_key.value,h=go(m?"custom":v);m&&(h.background={type:"image",imageUrl:b}),await yo({name:c,type:m?"custom":"preset",presetKey:v,backgroundImageUrl:b,layout:h,createdByTeacherId:((x=d.teacher)==null?void 0:x.id)??null}),f("เพิ่มเทมเพลตแล้ว ✅","success"),ie=null,g()}catch(b){f("บันทึกไม่สำเร็จ: "+I(b),"error"),p.disabled=!1,p.textContent="เพิ่มเทมเพลต"}}),document.querySelectorAll(".btn-remove-cert-template").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบเทมเพลตนี้?"))try{await ho(Number(a.dataset.id)),ie=null,g()}catch(s){f("ลบไม่สำเร็จ: "+I(s),"error")}})}),document.querySelectorAll(".btn-design-cert-template").forEach(a=>{a.addEventListener("click",()=>{const s=ie==null?void 0:ie.find(c=>c.id===Number(a.dataset.id));s&&ko({template:s,previewVariables:{reason:"เข้าร่วมกิจกรรมตัวอย่างจนสำเร็จ"},placeholderTokens:[{token:"{{reason}}",label:"เหตุผล/รายละเอียด"}],onSave:async(c,m)=>{await _o({id:s.id,layout:c,backgroundImageUrl:m}),f("บันทึกดีไซน์แล้ว ✅","success"),ie=null,g()}})})}),document.querySelectorAll(".module-toggle").forEach(a=>{a.addEventListener("change",async()=>{const s=Br();s[a.dataset.key]=a.checked;try{await It({council_modules:JSON.stringify(s)}),d.cfg={...d.cfg,council_modules:JSON.stringify(s)},f(a.checked?"เปิดใช้งานแล้ว":"ปิดใช้งานแล้ว","success"),g()}catch(c){f("บันทึกไม่สำเร็จ: "+I(c),"error"),a.checked=!a.checked}})})}function cd(){var e,t,r,n,l,i;document.querySelectorAll(".btn-new-doc").forEach(a=>{a.addEventListener("click",()=>{en=a.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",fe="new",g()})}),(e=document.getElementById("btn-doc-form-back"))==null||e.addEventListener("click",()=>{fe=null,g()}),(t=document.getElementById("btn-doc-form-cancel"))==null||t.addEventListener("click",()=>{fe=null,g()}),document.querySelectorAll(".btn-edit-doc").forEach(a=>{a.addEventListener("click",()=>{fe=Number(a.dataset.id),g()})}),(r=document.getElementById("btn-doc-ai-import-open"))==null||r.addEventListener("click",()=>fl()),document.querySelectorAll(".doc-responsible-chip").forEach(a=>{a.addEventListener("click",()=>{const s=document.querySelector('textarea[name="responsiblePersons"]');if(!s)return;const c=s.value.split(`
`).map(m=>m.trim()).filter(Boolean);c.includes(a.dataset.name)||c.push(a.dataset.name),s.value=c.join(`
`)})}),(n=document.getElementById("doc-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,c=s.title.value.trim();if(!c){f("กรุณากรอกชื่อโครงการ","warning");return}const m=s.dataset.origin,p=s.positionId.value?Number(s.positionId.value):null;if(m==="council"&&!p){f("กรุณาเลือกฝ่ายที่รับผิดชอบ (ใช้ส่งให้ครูที่ปรึกษาประจำฝ่ายตรวจ)","warning");return}const u={title:c,planArea:s.planArea.value.trim(),projectType:s.projectType.value.trim(),schoolStrategy:s.schoolStrategy.value.trim(),educationStandard:s.educationStandard.value.trim(),responsiblePersons:je(s.responsiblePersons.value),positionId:p,rationale:s.rationale.value.trim(),objectives:je(s.objectives.value),goalsQuantitative:je(s.goalsQuantitative.value),goalsQualitative:je(s.goalsQualitative.value),workSteps:Lt(s.workSteps.value,4),durationText:s.durationText.value.trim(),locationText:s.locationText.value.trim(),budgetItems:Lt(s.budgetItems.value,2),stakeholders:Lt(s.stakeholders.value,2),evaluationItems:Lt(s.evaluationItems.value,4),expectedResults:je(s.expectedResults.value)},x=s.querySelector('button[type="submit"]');x.disabled=!0,x.textContent="กำลังบันทึก...";try{fe==="new"?await xs({...u,formKey:s.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",formVersion:1,origin:m,academicYear:Y,termId:B,createdByStudentId:m==="council"&&d.student?d.student.id:null,createdByTeacherId:m==="teacher"&&d.teacher?d.teacher.id:null}):await fs(fe,u),f("บันทึกร่างแล้ว ✅","success"),ee=null,fe=null,g()}catch(b){f("บันทึกไม่สำเร็จ: "+I(b),"error"),x.disabled=!1,x.textContent="💾 บันทึกร่าง"}}),document.querySelectorAll(".btn-submit-doc").forEach(a=>{a.addEventListener("click",async()=>{a.disabled=!0;try{await gs(Number(a.dataset.id)),ee=null,g()}catch(s){f("บันทึกไม่สำเร็จ: "+I(s),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-new-doc-revision").forEach(a=>{a.addEventListener("click",async()=>{var s,c;a.disabled=!0;try{await ys(Number(a.dataset.id),{createdByStudentId:((s=d.student)==null?void 0:s.id)??null,createdByTeacherId:((c=d.teacher)==null?void 0:c.id)??null}),f("สร้างฉบับแก้ไขแล้ว ✅","success"),ee=null,g()}catch(m){f("สร้างฉบับแก้ไขไม่สำเร็จ: "+I(m),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-approve-doc, .btn-reject-doc").forEach(a=>{a.addEventListener("click",async()=>{var u,x,b;const s=a.classList.contains("btn-approve-doc"),c=Number(a.dataset.id),m=ee.find(v=>v.id===c);if(!m)return;const p=prompt(s?"ความเห็นประกอบ (ถ้ามี)":"เหตุผลที่ไม่อนุมัติ (จำเป็นต้องระบุ)")??"";if(!s&&!p.trim()){f("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}a.disabled=!0;try{const v=((u=d.teacher)==null?void 0:u.id)??null;m.status==="pending_advisor"?await hs({id:c,approve:s,teacherId:v,comment:p.trim()}):m.status==="pending_dept_head"?await _s({id:c,approve:s,teacherId:v,comment:p.trim(),signatureUrl:((x=d.teacher)==null?void 0:x.signature_url)??null}):m.status==="pending_director"&&await $s({id:c,approve:s,teacherId:v,comment:p.trim(),signatureUrl:((b=d.teacher)==null?void 0:b.signature_url)??null}),f(s?"อนุมัติแล้ว ✅":"ตีกลับให้แก้ไขแล้ว","success"),ee=null,g()}catch(v){f("บันทึกไม่สำเร็จ: "+I(v),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-print-doc").forEach(a=>{a.addEventListener("click",()=>{const s=ee.find(c=>c.id===Number(a.dataset.id));s&&pa(s)})}),document.querySelectorAll(".btn-view-doc-detail").forEach(a=>{a.addEventListener("click",()=>{ft=Number(a.dataset.id),g()})}),(l=document.getElementById("btn-doc-detail-close"))==null||l.addEventListener("click",()=>{ft=null,g()}),(i=document.getElementById("btn-doc-detail-print"))==null||i.addEventListener("click",()=>{const a=ee.find(s=>s.id===ft);a&&pa(a)})}function ud(){var e;(e=document.getElementById("criterion-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.name.value.trim(),l=Number(r.weight.value);if(!n||!l){f("กรอกชื่อเกณฑ์และคะแนนให้ครบ","warning");return}try{await ps({name:n,weight:l}),pe=null,g()}catch(i){f("บันทึกไม่สำเร็จ: "+I(i),"error")}}),document.querySelectorAll(".btn-remove-criterion").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบเกณฑ์นี้ออกจากการประเมิน?"))try{await ms(Number(t.dataset.id)),pe=null,g()}catch(r){f("ลบไม่สำเร็จ: "+I(r),"error")}})}),document.querySelectorAll(".btn-toggle-eval").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);Pt=Pt===r?null:r,g()})}),document.querySelectorAll(".eval-score-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.memberId),l=t.decision.value;if(!l){f("กรุณาเลือกสรุปผล","warning");return}const i={};let a=0;pe.forEach(m=>{var u;const p=(u=t[`c_${m.id}`])==null?void 0:u.value;p!==""&&p!=null&&(i[m.id]=Number(p),a+=Number(p))});const s=pe.reduce((m,p)=>m+Number(p.weight),0),c=t.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{await bs({memberId:n,academicYear:Y,termId:B,scores:i,totalScore:a,maxScore:s,decision:l,comment:t.comment.value.trim(),evaluatorTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null}),f("บันทึกผลประเมินแล้ว ✅","success"),rt=null,Pt=null,g()}catch(m){f("บันทึกไม่สำเร็จ: "+I(m),"error"),c.disabled=!1,c.textContent="บันทึกผลประเมิน"}})}),document.querySelectorAll(".btn-issue-cert").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.memberId),n=d.members.find(i=>i.id===r),l=rt[r];if(!(!n||!l)){t.disabled=!0,t.textContent="กำลังออก...";try{const i=`${Y}-${String(l.id).padStart(4,"0")}`;await vs({evaluationId:l.id,certificateNo:i}),l.certificate_no=i,l.certificate_issued_at=new Date().toISOString(),ca(n,l),g()}catch(i){f("ออกเกียรติบัตรไม่สำเร็จ: "+I(i),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}}})}),document.querySelectorAll(".btn-view-cert").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.memberId),n=d.members.find(i=>i.id===r),l=rt[r];n&&l&&ca(n,l)})})}function pd(){var e;(e=document.getElementById("activity-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.title.value.trim();if(!n){f("กรุณากรอกชื่อกิจกรรม","warning");return}const l=r.querySelector('button[type="submit"]');l.disabled=!0,l.textContent="กำลังบันทึก...";try{await is({title:n,detail:r.detail.value.trim(),gender:r.gender.value||null,activityDate:r.activity_date.value||null,budget:r.budget.value?Number(r.budget.value):null,ownerText:r.owner_text.value.trim(),academicYear:Y,termId:B,openToGeneral:r.open_to_general.checked,ownerMemberId:r.owner_member_id.value?Number(r.owner_member_id.value):null,countsForEvaluation:r.counts_for_evaluation.checked}),f("สร้างกิจกรรมแล้ว ✅","success"),ae=null,g()}catch(i){f("บันทึกไม่สำเร็จ: "+I(i),"error"),l.disabled=!1,l.textContent="สร้างกิจกรรม"}}),document.querySelectorAll(".btn-activity-next").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await Qr(Number(t.dataset.id),t.dataset.next),ae=null,g()}catch(r){f("บันทึกไม่สำเร็จ: "+I(r),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cancel").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ยืนยันยกเลิกกิจกรรมนี้?")){t.disabled=!0;try{await Qr(Number(t.dataset.id),"cancelled"),ae=null,g()}catch(r){f("บันทึกไม่สำเร็จ: "+I(r),"error"),t.disabled=!1}}})}),document.querySelectorAll(".btn-activity-attendance").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);$e[r]===void 0&&la(r)})}),document.querySelectorAll(".btn-activity-scan").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.id);$e[r]===void 0&&await la(r);const n=ae.find(i=>i.id===r),l=d.members.filter(i=>{var a;return!(n!=null&&n.gender)||((a=i.council_positions)==null?void 0:a.gender)===n.gender});So({activityId:r,activityTitle:t.dataset.title,openToGeneral:!!t.dataset.openGeneral,members:l,alreadyChecked:$e[r],onCheckedIn:i=>{var a;(a=$e[r])==null||a.add(i),g()},onUndo:i=>{var a;(a=$e[r])==null||a.delete(i),g()}})})}),document.querySelectorAll(".btn-checkin").forEach(t=>{t.addEventListener("click",async()=>{var l;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId);t.disabled=!0;try{await xa({activityId:r,studentId:n}),(l=$e[r])==null||l.add(n),g()}catch(i){f("เช็คชื่อไม่สำเร็จ: "+I(i),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cert-manage").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);kr=kr===r?null:r,g()})}),document.querySelectorAll(".cert-rule-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,l=Number(n.dataset.activityId),i=n.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await ls({activityId:l,templateId:n.template_id.value?Number(n.template_id.value):null,minAttendanceCount:n.min_attendance_count.value?Number(n.min_attendance_count.value):null,requiredDates:je(n.required_dates.value),notes:n.notes.value.trim()}),f("บันทึกเงื่อนไขแล้ว ✅","success"),delete tt[l],g()}catch(a){f("บันทึกไม่สำเร็จ: "+I(a),"error"),i.disabled=!1,i.textContent="บันทึกเงื่อนไข"}})}),document.querySelectorAll(".btn-cert-override").forEach(t=>{t.addEventListener("click",async()=>{var i,a;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),l=t.dataset.decision||null;t.disabled=!0;try{await ds({activityId:r,studentId:n,decision:l,decidedByTeacherId:((i=d.teacher)==null?void 0:i.id)??null,decidedByMemberId:((a=d.membership[0])==null?void 0:a.id)??null}),delete Dr[r],Ka(r)}catch(s){f("บันทึกไม่สำเร็จ: "+I(s),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-cert-issue").forEach(t=>{t.addEventListener("click",async()=>{var c,m;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),l=ae.find(p=>p.id===r),i=tt[r],s=(c=(Mr[r]??[]).find(p=>p.student_id===n))==null?void 0:c.students;if(!(i!=null&&i.template_id)){f("กรุณาเลือกเทมเพลตเกียรติบัตรก่อน","warning");return}t.disabled=!0,t.textContent="กำลังออก...";try{const p=await xo({templateId:i.template_id,recipientType:"student",studentId:n,recipientName:(s==null?void 0:s.full_name)??"—",variables:{reason:`เข้าร่วมกิจกรรม "${(l==null?void 0:l.title)??""}" ของสภานักเรียนจนสำเร็จ`},title:(l==null?void 0:l.title)??null,issuedByTeacherId:((m=d.teacher)==null?void 0:m.id)??null,sourceSystem:"council_activity",sourceRefId:r});xt[r]={...xt[r]??{},[n]:p},g()}catch(p){f("ออกเกียรติบัตรไม่สำเร็จ: "+I(p),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}})}),document.querySelectorAll(".btn-cert-view").forEach(t=>{t.addEventListener("click",()=>{var i;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),l=(i=xt[r])==null?void 0:i[n];l&&fo({layout:l.layout_snapshot,variables:{name:l.recipient_name??"",date:new Date(l.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:l.certificate_no,...l.variables},docTitle:l.title})})})}function md(){var e,t,r;(e=document.getElementById("btn-open-ann-form"))==null||e.addEventListener("click",()=>{Bt=!0,g()}),(t=document.getElementById("btn-cancel-ann"))==null||t.addEventListener("click",()=>{Bt=!1,g()}),document.querySelectorAll(".ann-filter-btn").forEach(n=>{n.addEventListener("click",()=>{Mt=n.dataset.filter,g()})}),(r=document.getElementById("announcement-form"))==null||r.addEventListener("submit",async n=>{n.preventDefault();const l=n.target,i=l.title.value.trim();if(!i){f("กรุณากรอกหัวเรื่องประกาศ","warning");return}const a=l.querySelector('button[type="submit"]');a.disabled=!0,a.textContent="กำลังเผยแพร่...";try{await cs({type:l.type.value,audience:l.audience.value,title:i,body:l.body.value.trim(),pinned:l.pinned.checked,postedByTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null,postedByStudentId:d.isChair&&d.student?d.student.id:null}),f("เผยแพร่ประกาศแล้ว 📣","success"),Bt=!1,Wt=null,g()}catch(s){f("เผยแพร่ไม่สำเร็จ: "+I(s),"error"),a.disabled=!1,a.textContent="เผยแพร่ประกาศ"}}),document.querySelectorAll(".btn-ack-ann").forEach(n=>{n.addEventListener("click",async()=>{const l=Number(n.dataset.id);n.disabled=!0,n.textContent="กำลังบันทึก...";try{await us({announcementId:l,studentId:d.student.id}),Ee==null||Ee.add(l),Ae&&(Ae[l]=(Ae[l]??0)+1),f("รับทราบแล้ว","success"),g()}catch(i){f("บันทึกไม่สำเร็จ: "+I(i),"error"),n.disabled=!1,n.textContent="รับทราบ"}})})}function bd(){var e,t,r,n,l,i,a,s,c,m,p;(e=document.getElementById("apps-print-roster"))==null||e.addEventListener("click",Pi),document.querySelectorAll(".apps-filter-btn").forEach(u=>{u.addEventListener("click",()=>{ke=u.dataset.filter,g()})}),document.querySelectorAll(".apps-gender-tab-btn").forEach(u=>{u.addEventListener("click",()=>{se=u.dataset.gender,Ce="",g()})}),(t=document.getElementById("apps-grade-filter"))==null||t.addEventListener("change",u=>{ht=u.target.value,g()}),(r=document.getElementById("apps-position-filter"))==null||r.addEventListener("change",u=>{Ce=u.target.value,g()}),(n=document.getElementById("apps-advisor-endorse-filter"))==null||n.addEventListener("change",u=>{Ye=u.target.value,g()}),(l=document.getElementById("apps-peer-endorse-filter"))==null||l.addEventListener("change",u=>{ze=u.target.value,g()}),document.querySelectorAll(".btn-view-app-detail").forEach(u=>{u.addEventListener("click",()=>{Ze=Number(u.dataset.id),g()})}),(i=document.getElementById("btn-admin-app-detail-close"))==null||i.addEventListener("click",()=>{Ze=null,g()}),(a=document.getElementById("admin-app-detail-backdrop"))==null||a.addEventListener("click",u=>{u.target.id==="admin-app-detail-backdrop"&&(Ze=null,g())}),(s=document.getElementById("btn-delete-council-application"))==null||s.addEventListener("click",u=>{qe=Number(u.currentTarget.dataset.id),g()}),(c=document.getElementById("btn-cancel-council-delete"))==null||c.addEventListener("click",()=>{qe=null,g()}),(m=document.getElementById("council-delete-backdrop"))==null||m.addEventListener("click",u=>{u.target.id==="council-delete-backdrop"&&(qe=null,g())}),(p=document.getElementById("btn-confirm-council-delete"))==null||p.addEventListener("click",async()=>{var b;const u=(b=document.getElementById("council-delete-reason"))==null?void 0:b.value.trim();if(!u){f("กรุณากรอกเหตุผลการลบ","warning");return}const x=document.getElementById("btn-confirm-council-delete");x.disabled=!0,x.textContent="กำลังลบ...";try{await Zn(qe,u),f("ลบใบสมัครแบบเก็บประวัติแล้ว ✅","success"),qe=null,Ze=null,R=null,g()}catch(v){f("ลบใบสมัครไม่สำเร็จ: "+I(v),"error"),x.disabled=!1,x.textContent="ยืนยันลบ"}}),document.querySelectorAll(".schedule-form").forEach(u=>{u.addEventListener("submit",async x=>{x.preventDefault();const b=Number(u.dataset.appId),v=u.dataset.ivId?Number(u.dataset.ivId):null,h=u.scheduled_at.value,$=u.location.value.trim();if(!h){f("กรุณาระบุวันเวลานัดสัมภาษณ์","warning");return}const w=u.interviewerText.value.trim();let T=null;if(w){const A=w.match(/· รหัส (\d+)$/);if(!A){f("กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)","warning");return}T=Number(A[1])}const E=u.querySelector('button[type="submit"]');E.disabled=!0,E.textContent="กำลังบันทึก...";try{const A=new Date(h).toISOString();await es({applicationId:b,existingInterviewId:v,scheduledAt:A,location:$,interviewerTeacherId:T}),f("นัดสัมภาษณ์แล้ว ✅","success");const S=u.dataset.profileId;if(S){const N=new Date(A).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});ur.functions.invoke("send-push",{body:{title:"🗓️ นัดสัมภาษณ์สภานักเรียน",body:`${u.dataset.positionName||""} — ${N}${$?" · "+$:""}`,url:"council.html",profileIds:[S]}}).catch(()=>{})}R=null,g()}catch(A){f("บันทึกไม่สำเร็จ: "+I(A),"error"),E.disabled=!1,E.textContent="บันทึกนัดสัมภาษณ์"}})}),document.querySelectorAll(".score-form").forEach(u=>{const x=Number(u.dataset.maxWeight),b=Number(u.dataset.passThreshold),v=u.querySelector(".score-total-display"),h=()=>{let $=0;u.querySelectorAll(".score-input").forEach(w=>{w.value!==""&&($+=Number(w.value))}),v&&(v.textContent=`${$} / ${x} · ต้อง ≥ ${b} จึงผ่าน`)};u.querySelectorAll(".score-input").forEach($=>$.addEventListener("input",h)),u.addEventListener("submit",async $=>{$.preventDefault();const w=Number(u.dataset.appId),T=u.dataset.ivId?Number(u.dataset.ivId):null;if(!T){f("ไม่พบข้อมูลการนัดสัมภาษณ์","error");return}const E={};let A=0;u.querySelectorAll(".score-input").forEach(M=>{M.value!==""&&(E[M.dataset.criterionId]=Number(M.value),A+=Number(M.value))});const S=A>=b?"pass":"fail",N=u.comment.value.trim(),q=u.querySelector('button[type="submit"]');q.disabled=!0,q.textContent="กำลังบันทึก...";try{await ts({interviewId:T,applicationId:w,score:A,scores:E,result:S,comment:N}),f(`บันทึกผลสัมภาษณ์แล้ว ✅ (${S==="pass"?"ผ่าน":"ไม่ผ่าน"})`,"success"),R=null,g()}catch(M){f("บันทึกไม่สำเร็จ: "+I(M),"error"),q.disabled=!1,q.textContent="บันทึกผล"}})}),document.querySelectorAll(".btn-promote-candidate").forEach(u=>{u.addEventListener("click",async()=>{const x=Number(u.dataset.appId),b=R==null?void 0:R.find(v=>v.id===x);if(b){u.disabled=!0,u.textContent="กำลังบันทึก...";try{const v=await Nr({gender:b.council_positions.gender,academicYear:Y,termId:B});await rs({applicationId:x,studentId:b.students.id,electionConfigId:v.id,campaignStatement:b.motivation,photoUrl:b.photo_url}),f("ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️","success"),delete ne[b.council_positions.gender],te[b.council_positions.gender]=null,d.elections=await Oe(null,B).catch(()=>d.elections),R=null,g()}catch(v){f("บันทึกไม่สำเร็จ: "+I(v),"error"),u.disabled=!1,u.textContent="🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง"}}})}),document.querySelectorAll(".btn-appoint-member").forEach(u=>{u.addEventListener("click",async()=>{var v,h,$;const x=Number(u.dataset.appId),b=R==null?void 0:R.find(w=>w.id===x);if(b&&confirm(`ยืนยันแต่งตั้ง ${((v=b.students)==null?void 0:v.full_name)??""} เป็น ${((h=b.council_positions)==null?void 0:h.position_name)??""}?`)){u.disabled=!0,u.textContent="กำลังบันทึก...";try{await as({applicationId:x,positionId:b.position_id,studentId:b.students.id,academicYear:Y,appointedByTeacherId:($=d.teacher)==null?void 0:$.id}),f("แต่งตั้งสำเร็จ ✅","success"),R=null,d.members=await Ue(null,B).catch(()=>d.members),g()}catch(w){f("บันทึกไม่สำเร็จ: "+I(w),"error"),u.disabled=!1,u.textContent="✅ แต่งตั้งเข้าตำแหน่ง"}}})})}function vd(){var e,t,r,n,l;document.querySelectorAll(".btn-create-election").forEach(i=>{i.addEventListener("click",async()=>{i.disabled=!0;try{const a=await Nr({gender:i.dataset.gender,academicYear:Y,termId:B});d.elections=[...d.elections.filter(s=>s.id!==a.id),a],g()}catch(a){f("เปิดใช้งานไม่สำเร็จ: "+I(a),"error"),i.disabled=!1}})}),document.querySelectorAll(".election-window-form").forEach(i=>{i.addEventListener("submit",async a=>{a.preventDefault();const s=Number(i.dataset.electionId),c=i.opens_at.value?new Date(i.opens_at.value).toISOString():null,m=i.closes_at.value?new Date(i.closes_at.value).toISOString():null,p=i.querySelector('button[type="submit"]');p.disabled=!0;try{await ns({electionConfigId:s,opensAt:c,closesAt:m}),d.elections=await Oe(null,B).catch(()=>d.elections),f("บันทึกช่วงเวลาแล้ว","success"),g()}catch(u){f("บันทึกไม่สำเร็จ: "+I(u),"error"),p.disabled=!1}})}),document.querySelectorAll(".btn-publish-results").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้")){i.disabled=!0,i.textContent="กำลังประกาศผล...";try{await ss({electionConfigId:Number(i.dataset.electionId),gender:i.dataset.gender,academicYear:Y}),f("ประกาศผลแล้ว 🎉","success"),d.elections=await Oe(null,B).catch(()=>d.elections),d.members=await Ue(null,B).catch(()=>d.members),g()}catch(a){f("ประกาศผลไม่สำเร็จ: "+I(a),"error"),i.disabled=!1,i.textContent="📢 ประกาศผล+แต่งตั้ง"}}})}),document.querySelectorAll(".candidate-card-btn").forEach(i=>{i.addEventListener("click",()=>{et={gender:i.dataset.gender,id:Number(i.dataset.id)},Ne=!1,g()})}),(e=document.getElementById("btn-candidate-modal-close"))==null||e.addEventListener("click",()=>{et=null,Ne=!1,g()}),(t=document.getElementById("candidate-modal-backdrop"))==null||t.addEventListener("click",i=>{i.target.id==="candidate-modal-backdrop"&&(et=null,Ne=!1,g())}),(r=document.getElementById("btn-candidate-edit"))==null||r.addEventListener("click",()=>{Ne=!0,g()}),(n=document.getElementById("btn-candidate-cancel-edit"))==null||n.addEventListener("click",()=>{Ne=!1,g()}),(l=document.getElementById("candidate-edit-form"))==null||l.addEventListener("submit",async i=>{i.preventDefault();const a=i.target,s=Number(a.dataset.candidateId),c=a.slogan.value.trim(),m=a.vision.value.trim(),p=a.policies.value.split(`
`).map(b=>b.trim()).filter(Boolean),u=a.experience.value.split(`
`).map(b=>b.trim()).filter(Boolean),x=a.querySelector('button[type="submit"]');x.disabled=!0,x.textContent="กำลังบันทึก...";try{await os({candidateId:s,slogan:c,vision:m,policies:p,experience:u});const{gender:b}=et;ne[b]=await wa(ye(b).id).catch(()=>ne[b]),Ne=!1,f("บันทึกโปรไฟล์ผู้สมัครแล้ว ✅","success"),g()}catch(b){f("บันทึกไม่สำเร็จ: "+I(b),"error"),x.disabled=!1,x.textContent="บันทึก"}})}const xd={auto:"ตามระบบ",light:"สว่าง",dark:"มืด"},fd={auto:"🌓",light:"☀️",dark:"🌙"};function cr(e){const t=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.toggleAttribute("data-dark",t);const r=document.getElementById("council-theme-icon"),n=document.getElementById("council-theme-label");r&&(r.textContent=fd[e]),n&&(n.textContent=xd[e])}function gd(){var t;const e=localStorage.getItem("council_theme")||"auto";cr(e),(t=document.getElementById("council-theme-toggle"))==null||t.addEventListener("click",()=>{const r=localStorage.getItem("council_theme")||"auto",n=r==="auto"?"light":r==="light"?"dark":"auto";localStorage.setItem("council_theme",n),cr(n)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("council_theme")||"auto")==="auto"&&cr("auto")})}gd();Qo();
