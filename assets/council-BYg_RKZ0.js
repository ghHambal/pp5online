import{s as Ht}from"./supabase-BV-W2lsh.js";/* empty css             *//* empty css                                  */import{b as Pa}from"./anti-pull-refresh-BGrI1pMY.js";import{a as y,g as E}from"./ui-CdgrLWzs.js";import{c as Fa}from"./ai-prompt-gate-D6R7FVed.js";import{g as Ya}from"./student-api-Pom1H7Xo.js";import{getMyTeacherProfile as za,getMyHomeroomRooms as Ga,getTeachers as Va}from"./api-C-roKrdU.js";import{uploadCouncilApplicationPhoto as Ua,uploadCouncilCertificate as Ha,uploadCertificateTemplateImage as Wa,uploadCouncilTeacherPhoto as Ja,uploadCouncilTeacherSignature as Qa}from"./storage-CuUjCgvI.js";import{u as Ka,c as Kr,s as Xr,a as Xa,r as Lr,b as Cr,d as Za,p as en,e as tn,g as Et,f as rn,h as an,i as nn,j as vt,k as ze,l as At,m as Zr,n as sn,o as ea,q as ta,t as on,v as ln,w as dn,x as cn,y as un,z as pn,A as mn,B as bn,C as vn,D as xn,E as fn,F as gn,G as yn,H as hn,I as _n,J as $n,K as wn,L as kn,M as En,N as ra,O as An,P as Sn,Q as In,R as Ln,S as Cn,T as aa,U as Tn,V as Tr,W as Nn,X as qn,Y as Rn,Z as jn,_ as Dn,$ as Mn,a0 as Bn,a1 as On,a2 as Pn,a3 as Fn,a4 as Yn,a5 as zn,a6 as Gn,a7 as Vn,a8 as Un,a9 as ct,aa as Hn,ab as Wn,ac as Jn,ad as Qn,ae as Kn,af as Xn,ag as Zn,ah as es,ai as ts,aj as rs,ak as as,al as ns,am as ss,an as os,ao as is,ap as ls,aq as ds,ar as cs,as as na,at as Pt,au as us,av as ps,aw as ms,ax as bs,ay as vs,az as xs,aA as fs,aB as gs,aC as ys,aD as hs,aE as _s,aF as $s,aG as ws,aH as ks,aI as Es,aJ as As,aK as Ss,aL as Is,aM as Ls,aN as Cs,aO as Ts,aP as Ns,aQ as Wt,aR as qs,aS as Rs,aT as js,aU as Ds,aV as Ms,aW as Bs,aX as sa}from"./council-api-DYf7ov7O.js";import{i as Os,o as Ps,d as Fs,c as Ys,a as zs,u as Gs,C as Ft,g as Vs,b as Us}from"./certificate-engine-CN0kp0dY.js";import{o as Hs}from"./certificate-editor-BDRqkXbn.js";import{o as it}from"./print-overlay-BVfxEd6n.js";import{b as Ws}from"./browser-JP79f-a9.js";import"./supabase-errors-BniCCodr.js";import"./teacher-views-utils-D0Lb_BpE.js";import"./score-display-CQ4dUIPx.js";import"./impersonation-0xVfgYVY.js";import"./skill-groups-BY1NTbf4.js";function Ge(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),n=t.createGain();r.connect(n),n.connect(t.destination),e==="success"?(r.type="sine",r.frequency.setValueAtTime(880,t.currentTime),n.gain.setValueAtTime(.08,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),r.start(),r.stop(t.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,t.currentTime),n.gain.setValueAtTime(.12,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),r.start(),r.stop(t.currentTime+.3))}catch{}}async function Js(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>e(window.Html5Qrcode),r.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}function Se(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Qs(e){var C;const{activityId:t,activityTitle:r,members:n,alreadyChecked:i,onCheckedIn:o,onUndo:a,openToGeneral:s}=e;(C=document.getElementById("council-checkin-overlay"))==null||C.remove();const u=document.createElement("div");u.id="council-checkin-overlay",u.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",u.innerHTML=`
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนเช็คอินกิจกรรม</h3>
        <p class="text-xs text-slate-400 truncate">${Se(r??"")}</p>
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
    </div>`,document.body.appendChild(u);const b=[];let c=null,m=null,f=0;const x=new Set(i??[]),p=()=>{const I=u.querySelector("#ccs-history-list"),h=u.querySelector("#ccs-history-count");if(h.textContent=`${b.length} คน`,!b.length){I.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}I.innerHTML=b.map(_=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${Se(_.name)}</span>
        <span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span>
        <button data-ccs-undo="${Se(_.studentId)}" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>
      </div>`).join("")};async function v(I){var A;const h=n.find(T=>{var j;return((j=T.students)==null?void 0:j.student_code)===I});if(h)return{studentId:h.student_id,name:((A=h.students)==null?void 0:A.full_name)??"—"};if(!s)return null;const k=(await Xr(I).catch(()=>[])).find(T=>T.student_code===I);return k?{studentId:k.id,name:k.full_name}:null}async function $(I){const h=u.querySelector("#ccs-camera-container"),_=u.querySelector("#ccs-feedback"),k=T=>{h.classList.add(T?"ccs-flash-success":"ccs-flash-error"),setTimeout(()=>h.classList.remove(T?"ccs-flash-success":"ccs-flash-error"),500)},A=await v(I);if(!A){Ge("error"),k(!1),_.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${s?"นักเรียน":"สมาชิกสภา"}รหัสนี้</div>`;return}if(x.has(A.studentId)){Ge("error"),k(!1),_.innerHTML=`<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${Se(A.name)} เช็คอินไปแล้ว</div>`;return}try{await Kr({activityId:t,studentId:A.studentId}),x.add(A.studentId),Ge("success"),k(!0),_.innerHTML=`<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ เช็คอิน ${Se(A.name)} สำเร็จ</div>`,b.unshift({name:A.name,studentId:A.studentId}),p(),o==null||o(A.studentId)}catch(T){Ge("error"),k(!1),_.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${Se(E(T))}</div>`,y("เช็คอินไม่สำเร็จ: "+E(T),"error")}}async function S(I){let h=I;if(I.startsWith("SQ:")){const[,_,k]=I.split(":"),A=Math.floor(Date.now()/1e3)-parseInt(k,10);if(A>60||A<-60){const T=u.querySelector("#ccs-feedback"),j=u.querySelector("#ccs-camera-container");Ge("error"),j.classList.add("ccs-flash-error"),setTimeout(()=>j.classList.remove("ccs-flash-error"),500),T.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>';return}h=_}await $(h)}u.querySelector("#ccs-manual-form").addEventListener("submit",async I=>{I.preventDefault();const h=u.querySelector("#ccs-manual-code"),_=h.value.trim();_&&(await $(_),h.value="",h.focus())}),u.querySelector("#ccs-history-list").addEventListener("click",async I=>{const h=I.target.closest("[data-ccs-undo]");if(!h)return;const _=Number(h.dataset.ccsUndo);h.disabled=!0;try{await Ka({activityId:t,studentId:_}),x.delete(_);const k=b.findIndex(A=>A.studentId===_);k!==-1&&b.splice(k,1),p(),a==null||a(_)}catch(k){y("ยกเลิกไม่สำเร็จ: "+E(k),"error"),h.disabled=!1}}),u.querySelector("#ccs-close").addEventListener("click",async()=>{if(c)try{await c.stop()}catch{}u.remove()}),(async()=>{try{const I=await Js();c=new I("ccs-camera-reader"),await c.start({facingMode:"environment"},{fps:25,aspectRatio:1},h=>{h===m&&Date.now()-f<2e3||(m=h,f=Date.now(),S(h))},()=>{})}catch(I){y("ไม่สามารถเปิดกล้องได้: "+E(I),"error"),u.remove()}})()}const R=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),me=e=>String(e).replace(/[0-9]/g,t=>"๐๑๒๓๔๕๖๗๘๙"[Number(t)]),Jt=e=>String(e??"").replace(/[๐-๙]/g,t=>String("๐๑๒๓๔๕๖๗๘๙".indexOf(t))).replace(/ข้อ\s*ที่/g,"ข้อ").replace(/\s+/g," ").trim(),Qt={draft:"ฉบับร่าง",pending_approval:"รออนุมัติ",approved:"อนุมัติแล้ว",advisor_review:"รอครูที่ปรึกษาตรวจ",student_affairs_review:"รอหัวหน้าฝ่ายกิจการนักเรียนตรวจ",management_review:"รอผู้บริหารอนุมัติ",published:"ประกาศแล้ว",effective:"มีผลบังคับใช้",superseded:"ถูกแทนที่ด้วยฉบับใหม่",archived:"เก็บถาวร"};let w={versions:null,selectedVersionId:null,content:null,loading:!1,error:null,query:"",sectionFilter:"all",editingClauseId:null,addingClause:!1,routeClauseNo:null,focusRouteClause:!1};function oa(){const e=Number(new URLSearchParams(window.location.search).get("clause"));return Number.isInteger(e)&&e>0?e:null}function Ks(){const e=oa();e!==w.routeClauseNo&&(e?(w.routeClauseNo=e,w.query="ข้อที่ "+e,w.focusRouteClause=!0):(w.routeClauseNo&&w.query==="ข้อที่ "+w.routeClauseNo&&(w.query=""),w.routeClauseNo=null,w.focusRouteClause=!1))}function Yt(){w.routeClauseNo=null,w.focusRouteClause=!1;const e=new URL(window.location.href);e.searchParams.delete("clause"),window.history.replaceState(null,"",e)}function ia(){var e;return(w.versions??[]).find(t=>t.id===w.selectedVersionId)??((e=w.versions)==null?void 0:e[0])??null}async function Kt(e){var t;w.loading=!0,w.error=null,e();try{w.versions=await an(),w.selectedVersionId=w.selectedVersionId??((t=w.versions[0])==null?void 0:t.id)??null,w.content=w.selectedVersionId?await Et(w.selectedVersionId):{sections:[],clauses:[]};const r=oa();r&&(w.routeClauseNo=r,w.query="ข้อที่ "+r,w.focusRouteClause=!0)}catch(r){w.error=r}finally{w.loading=!1,e()}}async function Xs(e){if(w.selectedVersionId){w.loading=!0,w.error=null,e();try{w.content=await Et(w.selectedVersionId)}catch(t){w.error=t}finally{w.loading=!1,e()}}}function Zs(e){w.versions===null&&!w.loading&&Kt(e)}function la(e,t,r){const n=new Map(t.map(o=>[o.id,o])),i=Jt(w.query).toLocaleLowerCase();return r.filter(o=>{const a=n.get(o.section_id);if(w.sectionFilter!=="all"&&String(a==null?void 0:a.id)!==String(w.sectionFilter))return!1;if(!i)return!0;const s=[o.clause_no,"ข้อ "+o.clause_no,"ข้อที่ "+o.clause_no,o.title,o.body,...o.keywords??[],a==null?void 0:a.title,"หมวด "+((a==null?void 0:a.section_no)??""),e==null?void 0:e.title].filter(Boolean).join(" ");return Jt(s).toLocaleLowerCase().includes(i)})}function eo(e,t,r,n=""){const o=t.map(u=>({section:u,clauses:r.filter(b=>b.section_id===u.id)})).filter(u=>u.clauses.length).map(u=>{const b='<div class="section">หมวด '+me(u.section.section_no)+"<br>"+R(u.section.title)+"</div>",c=u.clauses.map(m=>'<div class="clause"><span class="clause-no">ข้อ '+me(m.clause_no)+"</span>  "+R(m.body)+"</div>").join("");return b+c}).join(""),a=String((e==null?void 0:e.source_document_url)??"").startsWith("http")?'<p class="source">แหล่งต้นฉบับ: <a href="'+R(e.source_document_url)+'">'+R(e.source_document_url)+"</a></p>":"",s=["published","effective"].includes(e==null?void 0:e.status)&&((e==null?void 0:e.status)==="effective"||(e==null?void 0:e.is_active)&&(e==null?void 0:e.effective_date)&&new Date(e.effective_date)<=new Date);return'<!doctype html><html lang="th"><head><meta charset="utf-8"><title>'+R(e==null?void 0:e.title)+'</title><style>@page{size:A4;margin:18mm 18mm 16mm}*{box-sizing:border-box}body{font-family:"TH SarabunPSK","TH Sarabun New",Sarabun,sans-serif;color:#111;font-size:16pt;line-height:1.35}h1{text-align:center;font-size:22pt;margin:0 0 3mm;font-weight:700}.meta{text-align:center;font-size:13pt;margin-bottom:7mm}.draft{border:1px solid #9a5b00;color:#7a4200;padding:2mm;text-align:center;margin-bottom:6mm}.section{page-break-before:always;text-align:center;font-size:18pt;font-weight:700;margin:8mm 0 5mm}.section:first-child{page-break-before:auto}.clause{margin:0 0 4mm;text-align:justify;white-space:pre-line}.clause-no{font-weight:700}.source{font-size:11pt;margin-top:10mm;color:#555}a{color:inherit}</style></head><body><h1>'+R(e==null?void 0:e.title)+'</h1><div class="meta">ฉบับ '+R(e==null?void 0:e.version_label)+" · สถานะ: "+R(Qt[e==null?void 0:e.status]||(e==null?void 0:e.status))+"</div>"+(n?'<div class="meta">'+R(n)+" · "+r.length+" ข้อ</div>":"")+(s?"":'<div class="draft">เอกสารฉบับร่าง/เอกสารอ้างอิง ยังไม่ใช่ระเบียบที่มีผลบังคับใช้</div>')+o+a+"</body></html>"}function to(e){return'<form class="regulation-edit-form border border-[var(--primary-soft-line)] bg-[var(--primary-soft)] rounded-2xl p-4 mt-2" data-regulation-edit="'+e.id+'"><p class="text-sm font-bold text-[var(--ink)] mb-3">แก้ไขข้อ '+me(e.clause_no)+'</p><label class="block text-xs font-bold text-[var(--muted)] mb-1">หัวข้อ</label><input name="title" value="'+R(e.title)+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)] mb-3"><label class="block text-xs font-bold text-[var(--muted)] mb-1">เนื้อหาข้อ</label><textarea name="body" rows="8" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]">'+R(e.body)+'</textarea><label class="block text-xs font-bold text-[var(--muted)] mt-3 mb-1">คำค้น (คั่นด้วยจุลภาค)</label><input name="keywords" value="'+R((e.keywords??[]).join(", "))+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"><div class="flex gap-2 mt-3"><button class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold" type="submit">บันทึกฉบับร่าง</button><button class="regulation-cancel-edit px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold" type="button">ยกเลิก</button></div></form>'}function ro(e,t,r){if(w.editingClauseId===e.id&&r)return to(e);const n=String(e.title??"").trim(),i=String(e.body??""),o=n&&!i.startsWith(n),a=w.routeClauseNo===Number(e.clause_no),s="council.html?view=regulation&clause="+encodeURIComponent(e.clause_no);return'<article id="regulation-clause-'+R(e.clause_no)+'" class="border border-[var(--line-soft)] bg-[var(--surface)] rounded-2xl p-4 shadow-sm'+(a?" ring-2 ring-[var(--primary)]":"")+'"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><p class="text-sm font-bold text-[var(--primary)]">ข้อ '+me(e.clause_no)+"</p>"+(o?'<p class="text-sm font-semibold text-[var(--ink)] mt-1">'+R(n)+"</p>":"")+'</div><div class="flex items-center gap-2 flex-shrink-0"><a href="'+s+'" class="regulation-clause-link px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" title="เปิดลิงก์ตรงของข้อนี้">🔗 ลิงก์ข้อ</a>'+(r?'<button type="button" class="regulation-edit-clause px-3 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" data-id="'+e.id+'">แก้ไข</button>':"")+'</div></div><div class="text-sm leading-7 text-[var(--ink-2)] mt-3 whitespace-pre-line">'+R(e.body)+'</div><p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">หมวด '+me(t.section_no)+" · "+R(t.title)+"</p></article>"}function ao(e){return'<form id="regulation-add-form" class="bg-[var(--surface)] border border-[var(--primary-soft-line)] rounded-2xl p-5"><h2 class="font-bold text-[var(--ink)]">เพิ่มข้อในฉบับร่าง</h2><div class="grid md:grid-cols-3 gap-3 mt-3"><label class="text-xs font-bold text-[var(--muted)]">หมวด<select name="sectionId" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]">'+e.map(t=>'<option value="'+t.id+'">หมวด '+me(t.section_no)+" · "+R(t.title)+"</option>").join("")+'</select></label><label class="text-xs font-bold text-[var(--muted)]">เลขข้อ<input name="clauseNo" type="number" min="1" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label><label class="text-xs font-bold text-[var(--muted)]">หัวข้อ<input name="title" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label></div><label class="block text-xs font-bold text-[var(--muted)] mt-3">เนื้อหา<textarea name="body" rows="6" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]"></textarea></label><div class="flex gap-2 mt-3"><button type="submit" class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">เพิ่มฉบับร่าง</button><button type="button" class="regulation-cancel-add px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ยกเลิก</button></div></form>'}function no(e,t=()=>{}){var I,h;if(Ks(),Zs(t),w.loading&&w.versions===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดระเบียบสภานักเรียน...</div></div>';if(w.error)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-red-200 rounded-2xl p-6 text-center"><p class="text-sm font-bold text-red-700">โหลดระเบียบไม่สำเร็จ</p><p class="text-xs text-[var(--muted)] mt-2">'+R(w.error.message||w.error)+'</p><button type="button" class="regulation-retry mt-4 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">ลองใหม่</button></div></div>';const r=ia();if(!r)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีระเบียบในระบบ</div></div>';const n=((I=w.content)==null?void 0:I.sections)??[],i=((h=w.content)==null?void 0:h.clauses)??[],o=new Map(n.map(_=>[_.id,_])),a=la(r,n,i),s=n.map(_=>({section:_,clauses:a.filter(k=>k.section_id===_.id)})).filter(_=>_.clauses.length),u=!!(e!=null&&e.isAdmin)&&r.status==="draft",b=!!(e!=null&&e.isAdmin||e!=null&&e.isCouncilAdvisor)&&r.status==="draft",c=!!(e!=null&&e.isAdmin||e!=null&&e.isCouncilAdvisor)&&r.status==="advisor_review",m=!!(e!=null&&e.isAdmin||e!=null&&e.isStudentAffairsHead)&&r.status==="student_affairs_review",f=!!(e!=null&&e.isAdmin||e!=null&&e.isSchoolDirector)&&r.status==="management_review",x=!!(e!=null&&e.isAdmin||e!=null&&e.isSchoolDirector)&&r.status==="approved",p=(_,k,A="bg-[var(--primary)] text-white")=>`<button type="button" class="regulation-workflow-action px-4 py-2.5 rounded-xl text-xs font-bold ${A}" data-action="${_}" data-version-id="${r.id}">${k}</button>`,v=[b?p("submit","📤 ส่งตรวจ R1"):"",c?p("advisor-pass","✅ R1 ผ่าน")+p("advisor-return","↩️ R1 ขอแก้","border border-amber-300 text-amber-700 bg-amber-50"):"",m?p("affairs-pass","✅ R2 ผ่าน")+p("affairs-return","↩️ R2 ขอแก้","border border-amber-300 text-amber-700 bg-amber-50"):"",f?p("management-pass","✅ R3 อนุมัติ","bg-emerald-600 text-white"):"",x?p("publish","📢 เผยแพร่ R4","bg-emerald-600 text-white"):""].join(""),$=r.status==="published"&&r.is_active&&r.effective_date&&new Date(r.effective_date)<=new Date?"ฉบับนี้ประกาศและมีผลตามวันที่กำหนด ใช้เป็น gate ของฟีเจอร์ที่ผูกกับระเบียบได้":"ฉบับนี้ยังไม่ใช่ระเบียบที่มีผลบังคับใช้ ฟีเจอร์ที่ผูกกับระเบียบจะยังไม่เปิด",S=!!(Jt(w.query)||w.sectionFilter!=="all");if(w.loading&&w.content===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดฉบับที่เลือก...</div></div>';let C='<div class="max-w-5xl mx-auto space-y-4"><section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 md:p-6"><div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"><div><p class="text-xs font-bold text-[var(--primary)] mb-1">📚 ระเบียบและประกาศ</p><h1 class="text-xl md:text-2xl font-bold text-[var(--ink)]">'+R(r.title)+'</h1><p class="text-xs text-[var(--muted)] mt-2">ฉบับ '+R(r.version_label)+" · "+R(Qt[r.status]||r.status)+" · โหมด "+(r.implementation_mode==="enforced"?"บังคับใช้":"อ้างอิง/เตรียมการ")+'</p></div><div class="flex flex-wrap gap-2"><button type="button" class="regulation-print px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">🖨️ '+(S?"พิมพ์ผลการค้นหา":"พิมพ์ฉบับนี้")+"</button>"+(r.source_document_url?'<a href="'+R(r.source_document_url)+'" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🔗 เปิดต้นฉบับ</a>':"")+(u?'<button type="button" class="regulation-add-clause px-4 py-2.5 rounded-xl border border-[var(--primary-soft-line)] text-[var(--primary)] text-xs font-bold">➕ เพิ่มข้อ</button>':"")+v+'</div></div><div class="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900"><strong>สถานะสำคัญ:</strong> '+R($)+"</div>";return w.versions.length>1&&(C+='<label class="block text-xs font-bold text-[var(--muted)] mt-4">เลือกฉบับ</label><select id="regulation-version-select" class="mt-1 w-full md:max-w-md border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">'+w.versions.map(_=>'<option value="'+_.id+'" '+(_.id===r.id?"selected":"")+">"+R(_.version_label)+" · "+R(Qt[_.status]||_.status)+"</option>").join("")+"</select>"),C+="</section>",w.addingClause&&u&&(C+=ao(n)),C+='<section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5"><form id="regulation-search-form" class="flex flex-col md:flex-row gap-2"><input id="regulation-search" value="'+R(w.query)+'" placeholder="ค้นหา เช่น ข้อที่ 15, การเลือกตั้ง, การเงิน, การลาออก" class="flex-1 border border-[var(--line)] rounded-xl px-4 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><select id="regulation-section-filter" class="border border-[var(--line)] rounded-xl px-3 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><option value="all">ทุกหมวด</option>'+n.map(_=>'<option value="'+_.id+'" '+(String(w.sectionFilter)===String(_.id)?"selected":"")+">หมวด "+me(_.section_no)+" · "+R(_.title)+"</option>").join("")+'</select><button type="submit" class="px-5 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">ค้นหา</button></form><div class="flex items-center justify-between gap-3 mt-4"><p class="text-xs text-[var(--muted)]">แสดง '+a.length+" จาก "+i.length+" ข้อ · แยกตามหมวด</p>"+(w.query||w.sectionFilter!=="all"?'<button type="button" class="regulation-clear-filter text-xs font-bold text-[var(--primary)]">ล้างตัวกรอง</button>':"")+"</div></section>",C+=s.length?s.map(_=>'<details open class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden"><summary class="cursor-pointer list-none px-5 py-4 bg-[var(--surface-2)] flex items-center justify-between gap-3"><span class="font-bold text-[var(--ink)]">หมวด '+me(_.section.section_no)+" · "+R(_.section.title)+'</span><span class="text-xs text-[var(--muted)]">'+_.clauses.length+' ข้อ</span></summary><div class="p-4 space-y-3">'+_.clauses.map(k=>ro(k,o.get(k.section_id),u)).join("")+"</div></details>").join(""):'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบข้อที่ตรงกับการค้นหา</div>',C+"</div>"}function so(e,t){var r,n,i,o,a,s,u,b,c;(r=document.querySelector(".regulation-retry"))==null||r.addEventListener("click",()=>Kt(t)),(n=document.getElementById("regulation-version-select"))==null||n.addEventListener("change",m=>{w.selectedVersionId=Number(m.target.value),w.content=null,Xs(t)}),(i=document.getElementById("regulation-section-filter"))==null||i.addEventListener("change",m=>{Yt(),w.sectionFilter=m.target.value,t()}),(o=document.getElementById("regulation-search-form"))==null||o.addEventListener("submit",m=>{var f;m.preventDefault(),Yt(),w.query=((f=document.getElementById("regulation-search"))==null?void 0:f.value)??"",t()}),(a=document.querySelector(".regulation-clear-filter"))==null||a.addEventListener("click",()=>{Yt(),w.query="",w.sectionFilter="all",t()}),(s=document.querySelector(".regulation-print"))==null||s.addEventListener("click",()=>{var f,x;const m=ia();if(m){const p=((f=w.content)==null?void 0:f.sections)??[],v=((x=w.content)==null?void 0:x.clauses)??[],$=la(m,p,v),S=w.query.trim()||w.sectionFilter!=="all"?"ผลการค้นหา/ตัวกรอง":"";it(eo(m,p,$,S))}}),document.querySelectorAll(".regulation-workflow-action").forEach(m=>m.addEventListener("click",async()=>{const f=m.dataset.action,x=Number(m.dataset.versionId),p=f==="submit"?window.prompt("หมายเหตุการส่งตรวจ (ถ้ามี)")||"":window.prompt("หมายเหตุ/ข้อสังเกต")||"";if(["advisor-return","affairs-return"].includes(f)&&!p.trim()){y("การขอแก้ไขต้องระบุหมายเหตุ","warning");return}let v=null;if(!(f==="publish"&&(v=window.prompt("วันที่มีผล (YYYY-MM-DD)",new Date().toISOString().slice(0,10)),!v))){m.disabled=!0;try{f==="submit"?await Xa(x,p):f==="advisor-pass"?await Lr(x,!0,p):f==="advisor-return"?await Lr(x,!1,p):f==="affairs-pass"?await Cr(x,!0,p):f==="affairs-return"?await Cr(x,!1,p):f==="management-pass"?await Za(x,p):f==="publish"&&await en(x,v,p),w.versions=null,w.content=null,w.selectedVersionId=null,y("อัปเดต workflow ระเบียบแล้ว","success"),await Kt(t)}catch($){y("ดำเนินการไม่สำเร็จ: "+($.message||$),"error"),m.disabled=!1}}})),w.focusRouteClause&&window.requestAnimationFrame(()=>{const m=document.getElementById("regulation-clause-"+w.routeClauseNo);m&&m.scrollIntoView({behavior:"smooth",block:"center"}),w.focusRouteClause=!1}),e!=null&&e.isAdmin&&((u=document.querySelector(".regulation-add-clause"))==null||u.addEventListener("click",()=>{w.addingClause=!0,t()}),(b=document.querySelector(".regulation-cancel-add"))==null||b.addEventListener("click",()=>{w.addingClause=!1,t()}),document.querySelectorAll(".regulation-edit-clause").forEach(m=>m.addEventListener("click",()=>{w.editingClauseId=Number(m.dataset.id),t()})),document.querySelectorAll(".regulation-cancel-edit").forEach(m=>m.addEventListener("click",()=>{w.editingClauseId=null,t()})),document.querySelectorAll(".regulation-edit-form").forEach(m=>m.addEventListener("submit",async f=>{f.preventDefault();const x=new FormData(m),p=String(x.get("body")??"").trim();if(!p)return;const v=m.querySelector('button[type="submit"]');v&&(v.disabled=!0);try{await tn({clauseId:Number(m.dataset.regulationEdit),title:String(x.get("title")??"").trim(),body:p,keywords:String(x.get("keywords")??"").split(",").map($=>$.trim()).filter(Boolean)}),w.editingClauseId=null,w.content=await Et(w.selectedVersionId),y("บันทึกฉบับร่างแล้ว ✅","success"),t()}catch($){y("บันทึกไม่สำเร็จ: "+($.message||$),"error"),v&&(v.disabled=!1)}})),(c=document.getElementById("regulation-add-form"))==null||c.addEventListener("submit",async m=>{m.preventDefault();const f=m.currentTarget,x=new FormData(f),p=String(x.get("body")??"").trim(),v=Number(x.get("clauseNo"));if(!p||!Number.isInteger(v)||v<1)return;const $=f.querySelector('button[type="submit"]');$&&($.disabled=!0);try{await rn({versionId:w.selectedVersionId,sectionId:Number(x.get("sectionId")),clauseNo:v,title:String(x.get("title")??"").trim(),body:p,keywords:[]}),w.addingClause=!1,w.content=await Et(w.selectedVersionId),y("เพิ่มข้อในฉบับร่างแล้ว ✅","success"),t()}catch(S){y("เพิ่มข้อไม่สำเร็จ: "+(S.message||S),"error"),$&&($.disabled=!1)}}))}const oo="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit",io=[["การรับสมัครและคัดเลือก",[["FORM_01_APPLICATION","01","ใบสมัครสมาชิกสภานักเรียน","ใช้รับสมัครและเก็บข้อมูลผู้สมัคร"],["FORM_02_ENDORSEMENT","02","แบบรับรองผู้สมัคร","ใช้รับรองผู้สมัครโดยผู้มีสิทธิรับรอง"],["FORM_03_INTERVIEW_YLA","03","แบบสัมภาษณ์และประเมิน YLA","ใช้บันทึกผลสัมภาษณ์และการประเมิน YLA"],["FORM_04_CHAIR_NOMINEE","04","แบบเสนอผู้สมัครประธานหลัง YLA","ใช้เสนอรายชื่อหลังผ่านกระบวนการ YLA"]]],["การเลือกตั้งและแต่งตั้ง",[["FORM_05_ELECTION_RULES","05","แนวปฏิบัติการเลือกตั้ง","คู่มือและกติกาการเลือกตั้ง"],["FORM_06_ELECTION_RESULT","06","แบบบันทึกและรับรองผลการเลือกตั้ง","ใช้บันทึกและรับรองผลการเลือกตั้ง"],["FORM_07_ELECTION_COMPLAINT","07","แบบร้องเรียนหรือคัดค้านการเลือกตั้ง","ใช้ยื่นและติดตามเรื่องร้องเรียน"],["FORM_08_APPOINTMENT_ROSTER","08","บัญชีรายชื่อเสนอแต่งตั้ง","ใช้จัดทำบัญชีรายชื่อเพื่อเสนอแต่งตั้ง"]]],["โครงการและกิจกรรม",[["FORM_09_ACTIVITY_APPROVAL","09","แบบขออนุมัติจัดกิจกรรม","ใช้ขออนุมัติกิจกรรมก่อนดำเนินงาน"],["FORM_09_1_PROJECT_PROPOSAL","09.1","แบบเสนอโครงการ","ใช้จัดทำข้อเสนอโครงการตามแบบโรงเรียน"],["FORM_10_PROJECT_REPORT","10","แบบสรุปผลโครงการหรือกิจกรรม","ใช้สรุปผลหลังเสร็จสิ้นโครงการ"],["FORM_12_CALENDAR","12","แผนงานและปฏิทินกิจกรรม","ใช้วางแผนงานและกำหนดการกิจกรรม"]]],["การประชุม การติดตามงาน และการบริหารสมาชิก",[["FORM_11_MEETING_MINUTES","11","ระเบียบวาระและรายงานการประชุม","ใช้เตรียมวาระและบันทึกมติการประชุม"],["FORM_13_INCIDENT","13","แบบรายงานเหตุหรือพฤติกรรม","ใช้รายงานเหตุและพฤติกรรมที่ต้องติดตาม"],["FORM_14_RESIGNATION","14","แบบลาออกจากสภานักเรียน","ใช้ยื่นลาออกจากตำแหน่ง"],["FORM_15_REPLACEMENT","15","แบบเสนอแต่งตั้งทดแทนหรือปรับฝ่าย","ใช้เสนอการทดแทนหรือปรับฝ่าย"],["FORM_19_WORK_TRACKING","19","แบบติดตามงานของฝ่าย","ใช้ติดตามงานค้างและผลการส่งมอบงาน"]]],["การเงินและทรัพย์สิน",[["FORM_16_MEMBER_FINANCE","16","ทะเบียนการเงินรายบุคคล","ใช้บันทึกข้อมูลการเงินรายบุคคลตามสิทธิ์"],["FORM_17_ACTIVITY_FINANCE","17","สรุปบัญชีรับ–จ่ายกิจกรรม","ใช้สรุปการเงินของกิจกรรมแยกจากเงินสมาชิก"],["FORM_18_ASSET_REGISTER","18","ทะเบียนทรัพย์สินและระบบดิจิทัล","ใช้บันทึกทรัพย์สินและสิทธิ์ระบบ"],["FORM_23_PARENT_FINANCE_CONSENT","23","แบบยินยอมผู้ปกครองด้านการเงิน","ใช้ขอความยินยอมด้านการเงิน"]]],["วินัย การสิ้นสุดวาระ และบัตรประจำตัว",[["FORM_20_FINAL_AGREEMENT","20","แบบข้อตกลงกรณี 50 คะแนน","ใช้จัดทำข้อตกลงปรับปรุงการปฏิบัติหน้าที่"],["FORM_21_HANDOVER","21","แบบส่งมอบงานเมื่อสิ้นสุดวาระ","ใช้ส่งมอบเอกสาร ทรัพย์สิน และงานค้าง"],["FORM_22_COUNCIL_CARD_REGISTER","22","ทะเบียนบัตรประจำตัวสภานักเรียน","ใช้ติดตามการออกและคืนบัตรประจำตัว"]]],["เอกสารรับรอง ผู้ปกครอง และการแก้ไขระเบียบ",[["FORM_24_REGULATION_AMENDMENT","24","แบบเสนอแก้ไขเพิ่มเติมระเบียบ","ใช้เสนอแก้ไขระเบียบผ่านกระบวนการโรงเรียน"],["FORM_25_PARTICIPATION_CERTIFICATE","25","หนังสือรับรองการเข้าร่วมกิจกรรม","ใช้รับรองการเข้าร่วมกิจกรรมตามข้อเท็จจริง"],["FORM_26_PARENT_PERMISSION","26","ใบอนุญาตผู้ปกครอง","ใช้ขออนุญาตผู้ปกครองสำหรับกิจกรรม"]]],["การประเมินและการรับรองการปฏิบัติหน้าที่",[["FORM_27_MEMBER_PERFORMANCE_EVALUATION","27","แบบประเมินการปฏิบัติหน้าที่","ใช้ประเมินผลการปฏิบัติหน้าที่สมาชิก"],["FORM_28_ATTENDANCE_LEAVE_REGISTER","28","แบบบันทึกการเข้าร่วมและการลา","ใช้บันทึกการเข้าร่วม ประชุม กิจกรรม ภารกิจ และการลา"],["FORM_29_ABSENCE_IMPROVEMENT_AGREEMENT","29","แบบติดตามการขาดและข้อตกลง","ใช้ติดตามการขาดและข้อตกลงปรับปรุง"],["FORM_30_CERTIFICATE_ELIGIBILITY","30","สิทธิรับเกียรติบัตรและหนังสือรับรอง","ใช้ตรวจสอบสิทธิและหลักฐานก่อนออกเอกสารรับรอง"]]]],lo=[["YLA-00","ภาพรวมและสารบัญ","จุดเริ่มต้นสำหรับดูโครงสร้างชุดเอกสาร YLA"],["YLA-01","โครงการกิจกรรมเสริมทักษะภาวะผู้นำ","รายละเอียดโครงการและวัตถุประสงค์ของ YLA"],["YLA-02","กำหนดการดำเนินกิจกรรม","กำหนดการและลำดับการดำเนินกิจกรรม"],["YLA-03","คู่มือการดำเนินกิจกรรมและฐาน","แนวทางดำเนินกิจกรรมและภารกิจแต่ละฐาน"],["YLA-04","แบบบันทึกการเข้าร่วมและภารกิจ","บันทึกการเข้าร่วมและการทำภารกิจ"],["YLA-05","แบบประเมินศักยภาพรายบุคคล","ประเมินศักยภาพและพัฒนาการของผู้เข้าร่วม"],["YLA-06","สรุปผลและข้อเสนอการจัดฝ่าย","สรุปผลเพื่อประกอบการจัดสมาชิกลงฝ่าย"],["YLA-07","รายงานผลการดำเนินกิจกรรม","รายงานผลหลังจบกิจกรรม YLA"],["YLA-08","สมุดค่ายผู้เข้าร่วมกิจกรรม YLA","สมุดงานและบันทึกประสบการณ์ของผู้เข้าร่วม"],["YLA-09","ใบเสนอโครงการกิจกรรม YLA","ข้อเสนอโครงการ YLA ตามแบบโรงเรียน"],["YLA-10","ใบสรุปผลโครงการกิจกรรม YLA","สรุปผลโครงการ YLA สำหรับจัดเก็บและตรวจสอบ"]],co=[["ACT-01","การเลือกตั้งประธานสภานักเรียน","school_led","ดำเนินการเลือกตั้งอย่างเป็นธรรม โปร่งใส และตรวจสอบได้"],["ACT-02","เสริมทักษะการดำเนินการจัดกิจกรรมและการเขียนใบโครงการ","school_led","ฝึกคิดกิจกรรม วางแผน งบประมาณ เขียนใบโครงการ ประเมิน และสรุปผล"],["ACT-03","เสริมทักษะด้านการสื่อสารต่อหน้าสาธารณะ","school_led","ฝึกการประกาศ การเป็นพิธีกร การชี้แจงกติกา และการนำเสนอ"],["ACT-04","เสริมทักษะด้านสื่อสร้างสรรค์","school_led","พัฒนาทักษะการผลิตสื่อดิจิทัลและการใช้ AI อย่างรับผิดชอบ"],["ACT-05","ส่งเสริมคุณธรรมและจริยธรรม","school_led","พัฒนาความรับผิดชอบ ความซื่อสัตย์ ความยุติธรรม อามานะฮ์ และจริยธรรม"],["ACT-08","ฟุตซอลสานสัมพันธ์ภายใน","council_led","การแข่งขันฟุตซอลนักเรียนชาย พร้อมทะเบียนเงินประกันทีมและการบริหารการแข่งขัน"],["ACT-09","กีฬาสานสัมพันธ์หอพัก","council_led","กิจกรรมกีฬาสำหรับนักเรียนหญิงหอพัก เช่น วอลเลย์บอล แชร์บอล และกีฬาพื้นบ้าน"]],uo=io.flatMap(([e,t])=>t.map(([r,n,i,o])=>({key:r,code:n,title:i,description:o,group:e}))),zt={forms:{eyebrow:"เอกสารและแบบฟอร์มต่าง ๆ",title:"ศูนย์เอกสารและแบบฟอร์ม",description:"ค้นหาแบบฟอร์มตามระเบียบ 01–30 และเปิดรายการที่เกี่ยวข้องได้จากหน้าเดียว",sourceTab:"t.yq1xlf88ro0s",sourceLabel:"เปิดแท็บเอกสารและแบบฟอร์มต้นฉบับ",items:uo},yla:{eyebrow:"กิจกรรม YLA",title:"ชุดเอกสารกิจกรรม YLA",description:"รวมเอกสาร Youth Leadership For Azizstan ตั้งแต่การเตรียมงาน การเข้าร่วม การประเมิน จนถึงสรุปผล",sourceTab:"t.gq6dk28nkqg8",sourceLabel:"เปิดแท็บกิจกรรม YLA ต้นฉบับ",items:lo.map(([e,t,r])=>({code:e,title:t,description:r,group:"ชุดเอกสาร YLA"}))},activityDocs:{eyebrow:"โครงการและกิจกรรมอื่น ๆ",title:"ทะเบียนโครงการและกิจกรรม",description:"ดูประเภทกิจกรรม เจ้าของกิจกรรม และชุดเอกสารที่ควรใช้ตั้งแต่ก่อนเริ่มงานจนถึงสรุปผล",sourceTab:"t.xjmanckvqq6a",sourceLabel:"เปิดแท็บโครงการและกิจกรรมต้นฉบับ",items:co.map(([e,t,r,n])=>({code:e,title:t,description:n,group:r==="council_led"?"สภาเป็นผู้ริเริ่ม/รับผิดชอบหลัก":"โรงเรียนหรือฝ่ายงานเป็นผู้รับผิดชอบหลัก",ownership:r}))}},Nr=e=>`${oo}?tab=${e}`;function Xt({kind:e,esc:t,canOpenDocs:r=!1}){const n=zt[e]??zt.forms,i=n.items.map(o=>`
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
        <a href="${t(Nr(n.sourceTab))}" target="_blank" rel="noopener" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]">🔗 เปิดต้นฉบับ</a>
        ${r&&e==="forms"&&["FORM_09_ACTIVITY_APPROVAL","FORM_09_1_PROJECT_PROPOSAL"].includes(o.key)?'<button type="button" class="goto-view text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white" data-view="docs">เปิดงานเอกสารโครงการ →</button>':""}
      </div>
    </article>`).join("");return`<div class="space-y-4">
    <section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5">
      <p class="text-xs font-bold text-[var(--primary)]">📚 ${t(n.eyebrow)}</p>
      <h1 class="text-xl font-bold text-[var(--ink)] mt-1">${t(n.title)}</h1>
      <p class="text-sm text-[var(--muted)] mt-2 leading-6">${t(n.description)}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        ${Object.entries(zt).map(([o,a])=>`<button type="button" class="council-resource-kind-btn px-3 py-2 rounded-xl text-xs font-bold ${o===e?"bg-[var(--primary)] text-white":"border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--surface-2)]"}" data-resource-kind="${o}">${t(a.eyebrow)}</button>`).join("")}
        <a href="${t(Nr(n.sourceTab))}" target="_blank" rel="noopener" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🔗 ดูเอกสารต้นฉบับ</a>
      </div>
    </section>
    <div class="flex gap-2">
      <input id="council-resource-search" type="search" placeholder="ค้นหารหัส ชื่อเอกสาร กิจกรรม หรือคำอธิบาย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="button" id="council-resource-clear" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ล้าง</button>
    </div>
    <p id="council-resource-count" class="text-xs text-[var(--muted)]">แสดง ${n.items.length} รายการ</p>
    <div id="council-resource-list" class="grid grid-cols-1 lg:grid-cols-2 gap-3">${i}</div>
  </div>`}function po({onKindChange:e,esc:t}){document.querySelectorAll(".council-resource-kind-btn").forEach(s=>{s.addEventListener("click",()=>e(s.dataset.resourceKind))});const r=document.getElementById("council-resource-search"),n=document.getElementById("council-resource-clear"),i=[...document.querySelectorAll("[data-resource-card]")],o=document.getElementById("council-resource-count"),a=()=>{const s=String((r==null?void 0:r.value)||"").trim().toLocaleLowerCase();let u=0;i.forEach(b=>{const c=!s||b.dataset.resourceSearch.toLocaleLowerCase().includes(s);b.classList.toggle("hidden",!c),c&&(u+=1)}),o&&(o.textContent=`แสดง ${u} รายการ${s?" จากทั้งหมด "+i.length+" รายการ":""}`)};r==null||r.addEventListener("input",a),n==null||n.addEventListener("click",()=>{r&&(r.value=""),a(),r==null||r.focus()}),document.querySelectorAll(".btn-print-council-resource").forEach(s=>{s.addEventListener("click",()=>mo({code:s.dataset.resourceCode,title:s.dataset.resourceTitle,description:s.dataset.resourceDescription,esc:t}))})}function mo({code:e,title:t,description:r,esc:n}){it(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${n(t)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:36px;line-height:1.8}h1{font-size:24px;margin:8px 0 20px}.code{color:#7b2d2d;font-weight:700}.meta{border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:12px 0;margin:16px 0}small{color:#666}</style></head><body><small>เอกสารสภานักเรียน โรงเรียนมูลนิธิอาซิซสถาน</small><p class="code">${n(e)}</p><h1>${n(t)}</h1><div class="meta">${n(r)}</div><p>รายการนี้อยู่ในชุดเอกสารอ้างอิงของสภานักเรียน โปรดเปิดต้นฉบับหรือเอกสารฉบับที่โรงเรียนอนุมัติ เพื่อกรอกข้อมูลและใช้งานตามกระบวนการที่กำหนด</p></body></html>`)}const l=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),dr=document.getElementById("council-content"),q={M:"ชาย",W:"หญิง"},be=e=>e==="ชาย"||e==="M"?"M":e==="หญิง"||e==="W"?"W":null,D=(e,t="w-10 h-12")=>e!=null&&e.photo_url||e!=null&&e.image_url?`<img src="${l(e.photo_url||e.image_url)}" class="${t} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`:`<div class="${t} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${l(((e==null?void 0:e.full_name)||"?").charAt(0))}</div>`,cr={pending:"รอดำเนินการ",interview_scheduled:"นัดสัมภาษณ์แล้ว",interviewed:"สัมภาษณ์แล้ว",candidate:"ผู้สมัครเลือกตั้ง",appointed:"ได้รับแต่งตั้ง",rejected:"ไม่ผ่าน"};let d=null;const bo=new URLSearchParams(window.location.search),da=bo.get("view"),vo=!!da;let we=da||"overview";function Ee(e,{preserveDetail:t=!1}={}){we=e;const r=new URL(window.location.href);r.searchParams.set("view",e),t||(r.searchParams.delete("clause"),r.searchParams.delete("version")),window.history.replaceState(null,"",r)}let St=!1,P=1,N={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},he=null,se=null;const ca=5;function Je(){var e;return Number((e=d==null?void 0:d.cfg)==null?void 0:e.council_min_certificates)||ca}const ua="ม.3,ม.4,ม.5";function pa(){var e;return String(((e=d==null?void 0:d.cfg)==null?void 0:e.council_eligible_grade_levels)||ua).split(/[,\n]/).map(t=>t.trim()).filter(Boolean)}function It(e){const t=qt(e);return!!t&&pa().includes(t)}function Zt(e){const t=pa().join(", "),r=qt(e);return r?`ไม่สามารถสมัครสภานักเรียนได้ การรับสมัครครั้งนี้เปิดสำหรับระดับ ${t} เท่านั้น ระดับชั้นปัจจุบันของคุณ: ${r}`:"ไม่สามารถสมัครสภานักเรียนได้ ไม่พบระดับชั้นจากห้องสามัญหรือห้องศาสนา กรุณาติดต่อผู้ดูแลระบบ"}function Qe(e){return Array.from({length:e},()=>({file:null,title:"",previewUrl:null,isPdf:!1}))}let F=Qe(ca),Ne=!1,z=null;function xt(){St=!1,P=1,N={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},he=null,se&&URL.revokeObjectURL(se),se=null,F.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),F=Qe(Je()),Ne=!1}function ur(){return d!=null&&d.student?`council_apply_draft_${d.student.id}`:null}function X(){const e=ur();if(e)try{localStorage.setItem(e,JSON.stringify({step:P,data:N,certTitles:F.map(t=>t.title),savedAt:Date.now()}))}catch{}}function xo(){const e=ur();if(!e)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function qr(){const e=ur();e&&localStorage.removeItem(e)}let Ke=null,le=null,L=null,qe=null,ge=null,Xe=null,xe="all",oe="M",ft="",Re="",Ue="",He="",Ie="M",Le="all",Lt="",Ce="M",Te="ready",Ct="",te=null,G=null,er=null;const ve={};let je=null,fe=!1;const tr={};let O=null,H=null;const de={};let V=null,ne=null,B=null,Tt=null,gt=!1,rr=!1,J=null,ar=null;const De={},pr={},Ze={},mr={};let Nt=null,ue=null,pe=null,yt=null,ht="all",_t=!1,We="general",Q=null,ce=null;const Rr=[{id:"general",label:"ทั่วไป"},{id:"positions",label:"ตำแหน่ง"},{id:"criteria",label:"เกณฑ์และข้อความ"},{id:"modules",label:"โมดูล"}],fo={candidates:"ว่าที่ประธาน / ผลเลือกตั้ง",news:"ประกาศ",interview:"ตารางสัมภาษณ์",appoint:"แต่งตั้งตรง",chairteam:"เสนอคณะทำงาน",chairtasks:"มอบหมายงาน",evaluate:"ประเมินการปฏิบัติหน้าที่",certissue:"ออกเกียรติบัตร",docs:"เอกสารโครงการ",perms:"มอบสิทธิ์ครู (ยังไม่สร้างหน้า)"};function br(){try{return{...JSON.parse(d.cfg.council_modules||"{}")}}catch{return{}}}async function vr(){Q=await Ts().catch(()=>[]),g()}async function go(){ce=await ta().catch(()=>[]),g()}const yo={apply:{title:"📝 สมัครสภานักเรียน",subtabs:[{id:"new",label:"สมัครตำแหน่งใหม่"},{id:"mine",label:"ใบสมัครของฉัน"}]},election:{title:"🗳️ การเลือกตั้งประธานสภา",subtabs:[{id:"status",label:"สถานะการเลือกตั้ง"}]}};async function ho(){var W,K;Pa();const{data:{session:e}}=await Ht.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:t}=await Ht.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single(),r=t==null?void 0:t.role,n=r==="admin"||(t==null?void 0:t.is_also_admin)===!0,o={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[r]||"index.html";document.getElementById("council-back-btn-desktop").href=o,document.getElementById("council-back-btn-mobile").href=o;const[a,s,u,b]=await Promise.all([nn(),vt(),ze(),At()]);ba(a);let c=null,m=[],f=[];r==="student"&&(c=await Ya().catch(()=>null));const x=(a.council_test_student_codes||"").split(/[\s,]+/).map(M=>M.trim()).filter(Boolean),p=r==="student"&&!!c&&x.includes(c.student_code);if(a.council_visible_to_all==="false"&&!n&&!p){xr(!1),dr.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`;return}r==="student"&&c&&([m,f]=await Promise.all([Zr(c.id).catch(()=>[]),sn(c.id).catch(()=>[])]));let v=null,$=[],S=[],C=[];r==="teacher"&&(v=await za(e.user.id).catch(()=>null),v&&($=(await Ga(v.id).catch(()=>[])).filter(Y=>Y.category==="สามัญ").map(Y=>Y.main_room),[S,C]=await Promise.all([ea($).catch(()=>[]),ta().catch(()=>[])])));const I=r==="student"&&f.some(M=>{var Y;return(Y=M.council_positions)==null?void 0:Y.is_elected}),h=I||f.some(M=>M.can_create_activities),_=((K=(W=f.find(M=>{var Y;return(Y=M.council_positions)==null?void 0:Y.is_elected}))==null?void 0:W.council_positions)==null?void 0:K.gender)??null,k=r==="teacher"&&!!v&&(v.position==="council_advisor"||(v.positions??[]).includes("council_advisor")),A=r==="teacher"&&!!v&&(v.position==="student_affairs_head"||(v.positions??[]).includes("student_affairs_head")),T=r==="teacher"&&!!v&&(v.position==="school_director"||(v.positions??[]).includes("school_director")),j=r==="teacher"&&!!v&&(v.position==="executive"||(v.positions??[]).includes("executive"));d={role:r,isAdmin:n,isChair:I,isCouncilAdvisor:k,isStudentAffairsHead:A,isSchoolDirector:T,isExecutive:j,canCreateActivities:h,chairGender:_,student:c,applications:m,membership:f,positions:s,members:u,elections:b,cfg:a,teacher:v,homeroomMainRooms:$,pendingEndorsements:S,endorsementPhrases:C},O=Number(a.academicYear)||new Date().getFullYear()+543,r==="teacher"&&S.length&&!vo&&Ee("endorse"),g()}async function ma(){d!=null&&d.student&&(d.applications=await Zr(d.student.id).catch(()=>d.applications))}async function _o(){d!=null&&d.teacher&&(d.pendingEndorsements=await ea(d.homeroomMainRooms).catch(()=>d.pendingEndorsements))}function xr(e){document.getElementById("council-sidebar").style.display=e?"":"none",document.getElementById("council-bottom-tabs").style.display=e?"":"none"}function ba(e){const t=e.council_name||"ระบบสภานักเรียน";if(document.title=t,document.getElementById("council-title").textContent=t,document.getElementById("council-title-mobile").textContent=t,e.council_logo_url){const r=document.getElementById("council-logo");r.src=e.council_logo_url,r.classList.remove("hidden"),document.getElementById("council-logo-fallback").classList.add("hidden")}}const Gt={main:{label:"หน้าหลัก",icon:"🏠"},council:{label:"งานสภา",icon:"👥"},resources:{label:"เอกสาร/กิจกรรม",icon:"📚"},election:{label:"เลือกตั้ง",icon:"🗳️"},teacherWork:{label:"งานครู",icon:"📋"},system:{label:"ระบบ",icon:"⚙️"}};function $o(){const e=[{id:"overview",icon:"🏠",label:"หน้าหลัก",group:"main"}];e.push({id:"news",icon:"📣",label:"ประกาศ",group:"council"}),e.push({id:"roster",icon:"🏛️",label:"สภาของเรา",group:"council"}),e.push({id:"activities",icon:"📅",label:"กิจกรรม/การเข้าร่วม",group:"council"}),(d.isChair||d.isAdmin||d.isCouncilAdvisor)&&e.push({id:"chairteam",icon:"👔",label:"เสนอคณะทำงาน",group:"council"}),d.isChair&&e.push({id:"assignments",icon:"📌",label:"มอบหมายงาน",group:"council"}),d.membership.length&&e.push({id:"myduty",icon:"🎫",label:"หน้าที่/งานของฉัน",group:"council"}),d.membership.length&&e.push({id:"mysummary",icon:"📊",label:"สรุปของฉัน",group:"council"}),d.membership.length&&d.cfg.council_require_peer_endorsement==="true"&&e.push({id:"peerEndorse",icon:"✋",label:"รับรองผู้สมัคร (สภา)",group:"council"}),e.push({id:"regulation",icon:"📚",label:"ระเบียบ/ประกาศ",group:"resources"}),e.push({id:"forms",icon:"🗂️",label:"เอกสารและแบบฟอร์ม",group:"resources"}),e.push({id:"yla",icon:"🌱",label:"กิจกรรม YLA",group:"resources"}),e.push({id:"activityDocs",icon:"🧩",label:"โครงการและกิจกรรม",group:"resources"}),e.push({id:"candidates",icon:"🗳️",label:"ว่าที่ประธาน",group:"election"}),e.push({id:"result",icon:"📊",label:"ผลเลือกตั้ง",group:"election"}),d.role==="teacher"&&d.pendingEndorsements.length&&e.push({id:"endorse",icon:"✋",label:"รับรองผู้สมัคร",badge:d.pendingEndorsements.length,group:"teacherWork"});const t=d.isAdmin||d.isCouncilAdvisor;t&&e.push({id:"apps",icon:"📋",label:"ใบสมัคร",group:"teacherWork"}),t&&e.push({id:"interview",icon:"🗓️",label:"สัมภาษณ์",group:"teacherWork"}),t&&e.push({id:"appoint",icon:"✅",label:"แต่งตั้งสมาชิก",group:"teacherWork"}),(t||d.membership.length)&&e.push({id:"eval",icon:"🎖️",label:"ประเมิน/เกียรติบัตร",group:"teacherWork"}),(t||d.isChair||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"docs",icon:"📄",label:"งานเอกสารโครงการ",group:"teacherWork"}),(d.isAdmin||d.isExecutive)&&e.push({id:"dashboard",icon:"📊",label:"ภาพรวม",group:"system"}),t&&e.push({id:"settings",icon:"⚙️",label:"ตั้งค่า",group:"system"}),d.isAdmin&&e.push({id:"perms",icon:"🔑",label:"มอบสิทธิ์",group:"system"}),(d.isCouncilAdvisor||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"myCouncilProfile",icon:"✍️",label:"โปรไฟล์ของฉัน",group:"system"});const r=br(),n=new Set;return r.candidates===!1&&(n.add("candidates"),n.add("result")),r.news===!1&&n.add("news"),r.evaluate===!1&&n.add("eval"),r.docs===!1&&n.add("docs"),r.interview===!1&&n.add("interview"),r.appoint===!1&&n.add("appoint"),r.chairteam===!1&&n.add("chairteam"),r.chairtasks===!1&&n.add("assignments"),e.filter(i=>!n.has(i.id))}let _e=null;function wo(e){var o;const t=Object.keys(Gt);document.getElementById("council-sidebar-nav").innerHTML=t.map(a=>{const s=e.filter(u=>u.group===a);return s.length?`
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${l(Gt[a].label)}</p>
        ${s.map(u=>`
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${u.id===we?"bg-[var(--hero-3)] text-white":"text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white"}" data-view="${u.id}">
            <span>${u.icon}</span> ${l(u.label)}
            ${u.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${u.badge}</span>`:""}
          </button>`).join("")}
      </div>`:""}).join("");const r=t.map(a=>({id:a,...Gt[a],items:e.filter(s=>s.group===a)})).filter(a=>a.items.length),n=(o=r.find(a=>a.items.some(s=>s.id===we))||r[0])==null?void 0:o.id;document.getElementById("council-bottom-tabs").innerHTML=`<div class="flex overflow-x-auto">${r.map(a=>{const s=a.id===n,u=a.items.reduce((b,c)=>b+(c.badge||0),0);return`
    <button type="button" class="council-nav-group-btn relative flex-1 min-w-[68px] shrink-0 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${s?"text-[var(--primary)]":"text-[var(--muted)]"}" data-group="${a.id}">
      <span class="text-xl">${a.icon}</span>
      <span class="text-[0.625rem] font-medium">${l(a.label)}</span>
      ${u?`<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${u}</span>`:""}
    </button>`}).join("")}</div>`,document.querySelectorAll(".council-nav-link").forEach(a=>{a.addEventListener("click",()=>{Ee(a.dataset.view),g()})}),document.querySelectorAll(".council-nav-group-btn").forEach(a=>{a.addEventListener("click",()=>{const s=r.find(u=>u.id===a.dataset.group);s.items.length===1?(Ee(s.items[0].id),_e=null,g()):(_e=_e===s.id?null:s.id,jr(e))})});const i=e.find(a=>a.id===we);document.getElementById("council-view-title").textContent=(i==null?void 0:i.label)??"หน้าหลัก",jr(e)}function jr(e){const t=document.getElementById("council-mobile-sheet");if(!t)return;if(!_e){t.innerHTML="";return}const r=e.filter(n=>n.group===_e);t.innerHTML=`
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${r.map((n,i)=>`
            <button type="button" class="mobile-sheet-item text-left border ${n.id===we?"border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]":"border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]"}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${n.id}">
              <span class="text-base">${n.icon}</span><span>${l(n.label)}</span>
              ${n.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${n.badge}</span>`:""}
            </button>`).join("")}
        </div>
      </div>
    </div>`,document.getElementById("mobile-sheet-backdrop").addEventListener("click",n=>{n.target.id==="mobile-sheet-backdrop"&&(_e=null,g())}),document.querySelectorAll(".mobile-sheet-item").forEach(n=>{n.addEventListener("click",()=>{Ee(n.dataset.view),_e=null,g()})})}function ko(){const{applications:e,membership:t}=d;return!e.length&&!t.length?"":`
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${t.map(r=>{var n,i;return`
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${l(((n=r.council_positions)==null?void 0:n.position_name)??"—")} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${l(q[(i=r.council_positions)==null?void 0:i.gender]??"")})</span></p>
          </div>`}).join("")}
        ${e.map(r=>{var n;return`
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${l(((n=r.council_positions)==null?void 0:n.position_name)??"—")}</p>
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(r.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${l(cr[r.status]??r.status)}</span>
          </div>`}).join("")}
      </div>
    </div>`}function at(e,t,r,n){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${e}</p>
        ${r?`<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${r}">${l(n)} →</button>`:""}
      </div>
      ${t}
    </div>`}function Eo(){return d.isChair?["ยินดีต้อนรับประธานสภานักเรียน","ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่"]:d.membership.length?["ยินดีต้อนรับสมาชิกสภานักเรียน","ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ"]:d.isCouncilAdvisor?["ครูที่ปรึกษาสภานักเรียน","ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา"]:d.isAdmin?["จัดการระบบสภานักเรียน","ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล"]:d.role==="teacher"&&d.pendingEndorsements.length?["รับรองผู้สมัครสภานักเรียน","ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ"]:["ระบบสภานักเรียน","ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน"]}function Ao(){const e=d.cfg.council_featured_phase;if(e)return e;const t=new Date,r=d.cfg.council_apply_opens_at?new Date(d.cfg.council_apply_opens_at):null,n=d.cfg.council_apply_closes_at?new Date(d.cfg.council_apply_closes_at):null;return r&&n&&t>=r&&t<=n?"apply":d.elections.some(o=>o.opens_at&&o.closes_at&&t>=new Date(o.opens_at)&&t<=new Date(o.closes_at))?"election":"none"}function So(){return d.isChair?"👑 ประธานสภานักเรียน":d.membership.length?"🎫 สมาชิกสภานักเรียน":d.isCouncilAdvisor?"🏫 ครูที่ปรึกษาสภานักเรียน":d.role==="admin"?"🛡️ ผู้ดูแลระบบ (แอดมิน)":d.isAdmin?"🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)":d.role==="teacher"?"👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)":d.role==="student"?"🎓 นักเรียน":"ผู้เยี่ยมชม"}function Io(){const e=d.cfg,t=e.council_term_start_semester&&e.council_term_start_year?`ภาคเรียนที่ ${l(e.council_term_start_semester)}/${l(e.council_term_start_year)} – ภาคเรียนที่ ${l(e.council_term_end_semester||e.council_term_start_semester)}/${l(e.council_term_end_year||e.council_term_start_year)}`:null,r=e.council_visible_to_all!=="false",[n,i]=Eo(),o=d.isAdmin||d.isCouncilAdvisor?`
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${r?"bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]":"bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]"}">
      <span>${r?"✅":"🔒"}</span>
      <span>${r?"ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว":"ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น"}</span>
    </div>`:"";return`
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${l(So())}</span></p>
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
    </div>`}function Lo(){if(H===null)return Sa(),at("📅 กิจกรรมประจำปี",'<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>');const e={};H.forEach(i=>{e[i.status]=(e[i.status]??0)+1});const t=`
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${Aa.map(([i,o,a,s])=>`
        <div class="rounded-[10px] border ${a} p-2 text-center">
          <p class="text-lg font-bold ${s}">${e[i]??0}</p>
          <p class="text-[0.625rem] text-[var(--muted)]">${o}</p>
        </div>`).join("")}
    </div>`,r=[...H].sort((i,o)=>new Date(i.activity_date||0)-new Date(o.activity_date||0)).slice(0,5),n=r.length?`
    <div class="space-y-0.5">
      ${r.map(i=>{const[o,a,s]=Ea[i.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]"];return`
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(i.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${i.activity_date?new Date(i.activity_date).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—"} ${i.owner_text?"· "+l(i.owner_text):""}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${s} ${a}">${o}</span>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>';return at("📅 กิจกรรมประจำปี",t+n,"activities","ดูทั้งหมด")}function Co(){const e=["M","W"].map(r=>d.members.find(n=>{var i,o;return n.status==="active"&&((i=n.council_positions)==null?void 0:i.gender)===r&&((o=n.council_positions)==null?void 0:o.is_elected)})),t=e.some(Boolean)?`
    <div class="space-y-3">
      ${e.map((r,n)=>{var a,s,u;const i=n===0?"M":"W";if(!r)return`<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${q[i]}</div>`;const o=i==="W";return`
        <div class="flex items-center gap-3 rounded-xl border p-3 ${o?"bg-[var(--pink-soft)] border-[var(--pink-soft-line)]":"bg-[var(--primary-soft)] border-[var(--primary-soft-line)]"}">
          ${D(r.students,"w-12 h-16")}
          <div class="min-w-0">
            <p class="text-[0.6875rem] font-bold ${o?"text-[var(--pink)]":"text-[var(--primary)]"}">${l(((a=r.council_positions)==null?void 0:a.position_name)??"ประธานสภานักเรียนฝ่าย"+q[i])}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((s=r.students)==null?void 0:s.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((u=r.students)==null?void 0:u.main_room)??"")}</p>
          </div>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>';return at("🏛️ สภานักเรียนชุดปัจจุบัน",t,"roster","ดูโครงสร้าง")}function To(){if(!d.isAdmin&&!d.isExecutive)return"";if(L===null)return lt(),at("📋 การสมัครสภานักเรียน",'<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p>');const e=L.length,t=L.filter(a=>a.endorsed_at).length,r=L.filter(a=>a.peer_endorsed_at||Fe(a)).length,n=L.filter(a=>a.status==="candidate").length,i=(a,s,u)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${u}">${l(a)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(s)}</p>
    </div>`,o=`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      ${i(e,"สมัครแล้วทั้งหมด","var(--ink)")}
      ${i(t,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
      ${Ae()?i(r,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):i("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
      ${i(n,"ว่าที่สภานักเรียน","var(--primary)")}
    </div>`;return at("📋 การสมัครสภานักเรียน",o,"dashboard","ดูรายละเอียด")}function va(){const e=Io(),t=ko(),r=(m,f,x,p)=>`
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${m}">
      <p class="text-2xl mb-1">${f}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${l(x)}</p>
      ${p?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(p)}</p>`:""}
    </button>`,n=(m,f,x,p)=>`
    <button type="button" class="flow-entry-btn w-full bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl shadow-[0_4px_14px_rgba(23,32,42,0.15)] p-4 text-left text-white hover:opacity-95 transition flex items-center gap-3" data-flow="${m}">
      <p class="text-3xl flex-shrink-0">${f}</p>
      <div class="min-w-0 flex-1">
        <span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-white/20 mb-1">🔥 ช่วงนี้</span>
        <p class="text-base font-extrabold [text-wrap:pretty]">${l(x)}</p>
        ${p?`<p class="text-xs text-white/85 mt-0.5 [text-wrap:pretty]">${l(p)}</p>`:""}
      </div>
      <span class="text-white/70 flex-shrink-0">→</span>
    </button>`,i=d.elections.length>0,o=i||d.isAdmin,a=d.role==="student"&&It(d.student),s=i?"การเลือกตั้ง":"ตั้งค่าการเลือกตั้ง",u=i?"":"ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า",b=a&&o?Ao():"none";let c="";if(a&&o&&b!=="none"){const m=b==="apply"?n("apply","📝","สมัครสภานักเรียน","เปิดรับสมัครสภานักเรียนวาระใหม่"):r("apply","📝","สมัครสภานักเรียน"),f=b==="election"?n("election","🗳️",s,u||"เปิดใช้งานอยู่ ณ ขณะนี้"):r("election","🗳️",s,u);c=`<div class="space-y-3">${b==="apply"?m+f:f+m}</div>`}else(a||o)&&(c=`
    <div class="grid ${a&&o?"grid-cols-2":"grid-cols-1"} gap-3">
      ${a?r("apply","📝","สมัครสภานักเรียน"):""}
      ${o?r("election","🗳️",s,u):""}
    </div>`);return`<div class="space-y-4">
    ${e}
    ${t}
    ${To()}
    ${c}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${Lo()}
      ${Co()}
    </div>
  </div>`}function No(){if(d.role!=="student")return"";if(!d.student)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;const e=be(d.student.gender),t=d.positions.filter(o=>o.gender===e),r=new Set(d.applications.filter(o=>o.status!=="rejected").map(o=>o.position_id)),n=t.filter(o=>!r.has(o.id));if(!e)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;if(!It(d.student))return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ${l(Zt(d.student))}
      <p class="mt-1 text-xs">${l(d.student.main_room||d.student.religion_room||"ไม่พบข้อมูลห้อง")}</p>
    </div>`;if(!St)return`
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${n.length?"":"opacity-50 pointer-events-none"}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${q[e]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${n.length?`เปิดรับ ${n.length} ตำแหน่ง`:"ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)"}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`;const i=z?qo():P===1?jo(n):P===2?Do():P===3?Mo():P===4?Bo():P===5?Oo():Po(e);return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${q[e]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${z?"":Ro()}
      ${i}
    </div>
    ${Ne?Fo():""}`}function qo(){const e=nr()[z.step-1]??"",t=z.savedAt?new Date(z.savedAt).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"";return`
    <div class="text-center py-4 space-y-3">
      <p class="text-3xl">📝</p>
      <p class="text-sm font-bold text-[var(--ink)]">พบข้อมูลที่กรอกค้างไว้</p>
      <p class="text-xs text-[var(--muted-2)]">กรอกถึงขั้นตอนที่ ${z.step}/${nr().length} · ${l(e)}${t?` · บันทึกล่าสุด ${t}`:""}</p>
      <p class="text-[0.6875rem] text-[var(--gold-ink)] bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-2.5 text-left">⚠️ รูปถ่าย/ไฟล์เกียรติบัตรที่เคยแนบไว้ต้องแนบใหม่อีกครั้ง (เบราว์เซอร์เก็บไฟล์ข้ามการปิดหน้าไม่ได้) ส่วนข้อความอื่นๆ กู้คืนให้ครบ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-draft-discard" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">เริ่มใหม่</button>
        <button type="button" id="btn-apply-draft-resume" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">กู้คืนข้อมูล</button>
      </div>
    </div>`}const Dr=["เลือกตำแหน่ง","เกรดเฉลี่ย & แรงจูงใจ","รูปถ่าย","วิดีโอแนะนำตัว","เกียรติบัตร/รางวัล"];function fr(){return d.cfg.council_require_peer_endorsement==="true"}function nr(){return fr()?[...Dr,"เลือกพี่สภารับรอง"]:Dr}function Ro(){const e=nr();return`
    <div class="flex items-center gap-1.5 mb-3">
      ${e.map((t,r)=>`<div class="flex-1 h-1.5 rounded-full ${r+1<=P?"bg-[var(--primary)]":"bg-[var(--line-soft)]"}"></div>`).join("")}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${P}/${e.length} · ${e[P-1]}</p>`}function jo(e){return`
    <form id="apply-step1-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
        <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— เลือกตำแหน่ง —</option>
          ${e.map(t=>`<option value="${t.id}" ${N.positionId===String(t.id)?"selected":""}>${l(t.position_name)}</option>`).join("")}
        </select>
        ${e.length?"":'<p class="text-xs text-[var(--gold-ink)] mt-1.5">ไม่มีตำแหน่งเปิดรับในขณะนี้</p>'}
      </div>
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${e.length?"":"disabled"}>ถัดไป →</button>
    </form>`}function Do(){const e=d.cfg.council_min_gpa||"2.50",t=d.cfg.council_min_gpa_religious||"2.50";return`
    <form id="apply-step2-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยสามัญ <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaGeneral" type="number" step="0.01" min="0" max="4" required value="${l(N.gpaGeneral)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${l(e)}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยศาสนา <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaReligious" type="number" step="0.01" min="0" max="4" required value="${l(N.gpaReligious)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${l(t)}</p>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
        <textarea name="motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก (อย่างน้อย 10 ตัวอักษร)"
          class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(N.motivation)}</textarea>
      </div>
      <div class="flex gap-2">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function Mo(){return`
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${se?`<img src="${se}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />`:""}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`}function Bo(){const e=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),t=d.cfg.council_video_max_minutes||"3";return`
    <form id="apply-step4-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ลิงก์วิดีโอแนะนำตัว <span class="text-[var(--bad)]">*</span></label>
        <input name="videoUrl" type="url" required placeholder="https://..." value="${l(N.videoUrl)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
    </form>`}function Oo(){const e=F.filter(n=>n.file&&n.title.trim()).length,t=Je(),r=(n,i)=>`
    <div class="rounded-xl border border-[var(--line)] p-3 space-y-2" data-cert-idx="${i}">
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold text-[var(--muted)]">รายการที่ ${i+1}</p>
        ${F.length>1?`<button type="button" class="btn-remove-cert text-xs text-[var(--bad)]" data-idx="${i}">🗑️ ลบ</button>`:""}
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
      <div class="space-y-2.5">${F.map(r).join("")}</div>
      <button type="button" id="btn-add-cert" class="w-full py-2 rounded-xl border border-dashed border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]">＋ เพิ่มรายการ</button>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step5-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">${fr()?"ถัดไป →":"ตรวจสอบและยืนยัน →"}</button>
      </div>
    </div>`}function Po(e){const t=(d.members||[]).filter(n=>{var i;return((i=n.council_positions)==null?void 0:i.gender)===e&&n.student_id!==d.student.id}).sort((n,i)=>{var o,a;return(((o=n.council_positions)==null?void 0:o.sort_order)??0)-(((a=i.council_positions)==null?void 0:a.sort_order)??0)});if(!t.length)return`
      <div class="space-y-3">
        <div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-3 text-xs text-[var(--gold-ink)]">
          ⚠️ ตอนนี้ยังไม่มีสมาชิกสภานักเรียน${q[e]}ในระบบให้เลือกเป็นผู้รับรอง กรุณาติดต่อครูที่ปรึกษาสภาหรือผู้ดูแลระบบ
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        </div>
      </div>`;const r=n=>{var i,o,a;return`
    <button type="button" class="btn-pick-peer-endorser w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(N.peerEndorserId)===String(n.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${n.id}">
      ${D(n.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((i=n.students)==null?void 0:i.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${l(((o=n.council_positions)==null?void 0:o.position_name)??"—")} · ${l(((a=n.students)==null?void 0:a.main_room)??"—")}</p>
      </div>
      ${String(N.peerEndorserId)===String(n.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`};return`
    <div class="space-y-3">
      <p class="text-xs text-[var(--muted-2)]">เลือกสมาชิกสภานักเรียน${q[e]}ที่ต้องการให้เป็นผู้รับรองใบสมัครของคุณ — ใบสมัครจะรอเฉพาะคนที่เลือกเท่านั้น</p>
      <div class="space-y-2 max-h-96 overflow-y-auto">${t.map(r).join("")}</div>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step6-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${N.peerEndorserId?"":"disabled"}>ตรวจสอบและยืนยัน →</button>
      </div>
    </div>`}function Fo(){var n;const e=d.positions.find(i=>i.id===Number(N.positionId)),t=d.student,r=N.peerEndorserId?(d.members||[]).find(i=>String(i.id)===String(N.peerEndorserId)):null;return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${se?`<img src="${se}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />`:""}
            <div class="min-w-0">
              <p class="font-bold text-[var(--ink)] truncate">${l((t==null?void 0:t.full_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${l((t==null?void 0:t.student_code)??"")} · ${l((t==null?void 0:t.main_room)??"")}</p>
            </div>
          </div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">ตำแหน่ง</span><span class="font-bold text-[var(--ink)] text-right">${l((e==null?void 0:e.position_name)??"—")}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดสามัญ</span><span class="font-bold text-[var(--ink)]">${l(N.gpaGeneral)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดศาสนา</span><span class="font-bold text-[var(--ink)]">${l(N.gpaReligious)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">รูปถ่าย</span><span class="font-bold ${he?"text-[var(--ok)]":"text-[var(--bad)]"}">${he?"✅ แนบแล้ว":"❌ ยังไม่ได้แนบ"}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">วิดีโอ</span><span class="font-bold text-[var(--ink)] truncate">${l(N.videoUrl)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกียรติบัตร/รางวัล</span><span class="font-bold text-[var(--ok)]">✅ ${F.filter(i=>i.file&&i.title.trim()).length} รายการ</span></div>
          ${r?`<div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">พี่สภาที่ขอให้รับรอง</span><span class="font-bold text-[var(--ink)] text-right">${l(((n=r.students)==null?void 0:n.full_name)??"—")}</span></div>`:""}
          <div>
            <p class="text-[var(--muted)] mb-1">แรงจูงใจ</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(N.motivation)}</p>
          </div>
        </div>
        <div class="flex gap-2 pt-4 mt-3 border-t border-[var(--line-soft)]">
          <button type="button" id="btn-apply-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">✏️ แก้ไข</button>
          <button type="button" id="btn-apply-confirm-submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✅ ยืนยันการสมัคร</button>
        </div>
      </div>
    </div>`}function Yo(){return d.student?!d.applications.length&&!d.membership.length?'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>':`
    <div class="space-y-2">
      ${d.membership.map(e=>{var t,r;return`
        <div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-xl p-3">
          <p class="text-xs text-[var(--ok)] font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-[#0d4d36]">${l(((t=e.council_positions)==null?void 0:t.position_name)??"—")} <span class="text-xs font-normal">(สภา${l(q[(r=e.council_positions)==null?void 0:r.gender]??"")})</span></p>
        </div>`}).join("")}
      ${d.applications.map(e=>{var t;return`
        <div class="bg-[var(--surface)] rounded-xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0">
              <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((t=e.council_positions)==null?void 0:t.position_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${l(cr[e.status]??e.status)}</span>
          </div>
          <button type="button" class="btn-view-my-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">📄 ดูใบสมัคร</button>
        </div>`}).join("")}
    </div>
    ${ni()}`:""}function gr(e){return d.elections.find(t=>t.gender===e&&t.academic_year===O)||null}async function xa(e,t){ve[e]=await aa(t).catch(()=>[]),g()}async function zo(e,t){const[r,n]=await Promise.all([Ns(t).catch(()=>({})),Wt(e).catch(()=>0)]);tr[e]={tally:r,eligible:n},g()}function fa(){return`<div class="space-y-4">${["M","W"].map(Go).join("")}</div>`}function Go(e){var x;const t=gr(e),r=d.student?be(d.student.gender):null,n=d.role==="student"&&r===e;if(!t)return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${q[e]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${d.isAdmin||d.isCouncilAdvisor?`<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${e}">เปิดใช้งานการเลือกตั้ง</button>`:""}
      </div>`;const i=new Date,o=t.opens_at?new Date(t.opens_at):null,a=t.closes_at?new Date(t.closes_at):null,s=!!(o&&o<=i&&(!a||a>i)),u=!!(a&&a<=i),b=!!t.results_published_at,c=b?{label:"✅ ประกาศผลแล้ว",cls:"bg-[var(--ok-soft-line)] text-[#106143]"}:u?{label:"🔒 ปิดโหวตแล้ว รอประกาศผล",cls:"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}:s?{label:"🗳️ กำลังเปิดโหวต",cls:"bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"}:{label:"⏳ ยังไม่เปิดโหวต",cls:"bg-[var(--bg-2)] text-[var(--muted)]"};let m="";if(b){ve[e]===void 0&&xa(e,t.id),tr[e]||zo(e,t.id);const p=d.members.find(I=>{var h,_;return((h=I.council_positions)==null?void 0:h.gender)===e&&((_=I.council_positions)==null?void 0:_.is_elected)}),v=p?`
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${D(p.students,"w-12 h-16")}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((x=p.students)==null?void 0:x.full_name)??"—")}</p>
        </div>
      </div>`:'<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>',$=tr[e],S=ve[e];let C="";if($&&(S!=null&&S.length)){const I=Object.values($.tally).reduce((k,A)=>k+A,0),h=$.eligible?Math.round(I/$.eligible*100):0;C=`
        <div class="mt-3 space-y-2">
          ${S.slice().sort((k,A)=>($.tally[A.id]??0)-($.tally[k.id]??0)).map(k=>{var j;const A=$.tally[k.id]??0,T=I?Math.round(A/I*100):0;return`
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${l(((j=k.students)==null?void 0:j.full_name)??"—")}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${A} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${T}%"></div></div>
              </div>`}).join("")}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${$.eligible} คน · ใช้สิทธิ์ ${I} คน (${h}%)</p>`}m=v+C}else s&&n?m=`
      <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-[var(--primary-dark)]">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[0.6875rem] text-[var(--muted)] mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`:u&&!b?m='<p class="text-xs text-[var(--muted-2)] mt-2">รอผู้ดูแลระบบประกาศผล</p>':!s&&!u&&(m=`<p class="text-xs text-[var(--muted-2)] mt-2">${t.opens_at?"เปิดโหวต "+new Date(t.opens_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""}</p>`);let f="";return(d.isAdmin||d.isCouncilAdvisor)&&(f=`
      <div class="mt-3 pt-3 border-t border-[var(--line-soft)] space-y-2">
        <form class="election-window-form flex flex-wrap gap-2 items-end" data-election-id="${t.id}">
          <label class="text-[0.6875rem] text-[var(--muted-2)]">เปิดโหวต<br><input type="datetime-local" name="opens_at" value="${t.opens_at?t.opens_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <label class="text-[0.6875rem] text-[var(--muted-2)]">ปิดโหวต<br><input type="datetime-local" name="closes_at" value="${t.closes_at?t.closes_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <button type="submit" class="px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] text-xs font-bold">บันทึกช่วงเวลา</button>
        </form>
        ${u&&!b?`<button type="button" class="btn-publish-results px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-election-id="${t.id}" data-gender="${e}">📢 ประกาศผล+แต่งตั้ง</button>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">🔗 หน้าโหวต (เปิดที่จุดลงคะแนนเท่านั้น): <a href="council-election.html" target="_blank" class="text-[var(--primary)] underline">council-election.html</a></p>
      </div>`),`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${q[e]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${c.cls}">${c.label}</span>
      </div>
      ${m}
      ${f}
    </div>`}function Vo(e,t){var o,a,s,u,b,c,m;const r=e.photo_url||((o=e.students)==null?void 0:o.image_url)||((a=e.students)==null?void 0:a.photo_url),n=(s=e.council_applications)==null?void 0:s.gpa_general,i=(u=e.council_applications)==null?void 0:u.gpa_religious;return`
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${t}" data-id="${e.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${r?`<img src="${l(r)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${l((((b=e.students)==null?void 0:b.full_name)||"?").charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${e.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((c=e.students)==null?void 0:c.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)]">${l(((m=e.students)==null?void 0:m.main_room)??"")}</p>
        ${n!=null||i!=null?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${l(n??"—")} · ศาสนา ${l(i??"—")}</p>`:""}
        ${e.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${l(e.slogan)}"</p>`:""}
      </div>
    </button>`}function Uo(){const e=t=>{const r=gr(t),n=`<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${q[t]}</p>`;if(!r)return`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`;const i=ve[t];return i===void 0?(xa(t,r.id),`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>`):i.length?`
      <div>
        ${n}
        <div class="grid grid-cols-2 gap-3">${i.map(o=>Vo(o,t)).join("")}</div>
      </div>`:`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`};return`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${e("M")}${e("W")}</div>${Ho()}`}function Ho(){var b,c,m,f,x,p,v,$;if(!je)return"";const{gender:e,id:t}=je,r=(ve[e]||[]).find(S=>S.id===t);if(!r)return"";const n=d.isAdmin||d.isCouncilAdvisor,i=Array.isArray(r.policies)?r.policies:[],o=Array.isArray(r.experience)?r.experience:[],a=r.photo_url||((b=r.students)==null?void 0:b.image_url)||((c=r.students)==null?void 0:c.photo_url),s=(m=r.council_applications)==null?void 0:m.gpa_general,u=(f=r.council_applications)==null?void 0:f.gpa_religious;return fe?`
      <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
        <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
          <p class="text-base font-bold text-[var(--ink)] mb-3">✏️ แก้ไขโปรไฟล์ผู้สมัคร — ${l(((x=r.students)==null?void 0:x.full_name)??"")}</p>
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
          ${a?`<img src="${l(a)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${l((((p=r.students)==null?void 0:p.full_name)||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${r.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${l(((v=r.students)==null?void 0:v.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l((($=r.students)==null?void 0:$.main_room)??"")}${s!=null||u!=null?` · เกรดสามัญ ${l(s??"—")} · ศาสนา ${l(u??"—")}`:""}</p>
          </div>
          ${r.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${l(r.slogan)}"</p>`:""}
          ${r.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${l(r.vision)}</p></div>`:""}
          ${i.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${i.map(S=>`<li>${l(S)}</li>`).join("")}</ul></div>`:""}
          ${o.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${o.map(S=>`<li>${l(S)}</li>`).join("")}</ul></div>`:""}
          ${!r.slogan&&!r.vision&&!i.length&&!o.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          ${n?'<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>':""}
        </div>
      </div>
    </div>`}const nt={pending:["รอนัดสัมภาษณ์","bg-[var(--bg-2)] text-[var(--muted)]"],interview_scheduled:["นัดสัมภาษณ์แล้ว รอให้คะแนน","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],interviewed:["ผ่านสัมภาษณ์","bg-[var(--ok-soft-line)] text-[#106143]"],candidate:["ผู้สมัครเลือกตั้ง","bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"],appointed:["แต่งตั้งแล้ว","bg-[#e3f1ef] text-[var(--teal)]"],rejected:["ไม่ผ่าน","bg-[var(--bad-soft-line)] text-[#8a2f22]"]},ga={M:"bg-[#edf4f0] text-[#14563b]",W:"bg-[#fdeef4] text-[#a3134f]"},sr=[{id:"all",label:"ทั้งหมด"},{id:"awaiting_endorsement",label:"รอรับรอง"},{id:"endorsed",label:"รับรองแล้ว"},{id:"scheduled",label:"นัดแล้ว"},{id:"interviewed",label:"ผ่านสัมภาษณ์"},{id:"rejected",label:"ไม่ผ่าน"}];function Ae(){return d.cfg.council_require_peer_endorsement==="true"}function Fe(e){var r;const t=((r=e.students)==null?void 0:r.id)??e.student_id;return!!t&&d.members.some(n=>n.student_id===t)}function Me(e){return!Ae()||Fe(e)?!0:!!e.peer_endorsed_at}function ya(e){const t=[];return e.endorsed_at||t.push("รอครูที่ปรึกษาสามัญรับรอง"),Me(e)||t.push("รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง"),t.join(" และ")}function qt(e){var r;return((r=((e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||"").match(/^(ม\.\d+|ปวช\.\d+)/))==null?void 0:r[1])??null}function $t(e){return e.status==="rejected"?"rejected":e.status==="pending"?e.endorsed_at&&Me(e)?"endorsed":"awaiting_endorsement":e.status==="interview_scheduled"?"scheduled":"interviewed"}async function lt(){L=await na(O).catch(()=>[]),g()}async function yr(){te=await Va().catch(()=>[]),g()}const Vt={draft:"ร่าง",planned:"วางแผนแล้ว",active:"กำลังดำเนินการ",completed:"เสร็จสิ้น",cancelled:"ยกเลิก"},ha={present:"มา",late:"มาสาย",excused_leave:"ลาโดยมีเหตุผล",unexcused_absence:"ขาด"},hr={pending:"รอสรุป",pass:"ผ่าน",fail:"ไม่ผ่าน",withdrawn:"ถอนตัว"};function ut(){return!!(d!=null&&d.isAdmin||d!=null&&d.isCouncilAdvisor||d!=null&&d.isStudentAffairsHead)}function Mr(e){return e?new Date(`${e}T00:00:00`).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนด"}function or(e){return!(e!=null&&e.start_date)&&!(e!=null&&e.end_date)?"ยังไม่กำหนดช่วงเวลา":`${Mr(e.start_date)}${e.end_date?` – ${Mr(e.end_date)}`:""}`}async function Wo(){var e;V=await ks(O).catch(()=>[]),ne==null&&V.length&&(ne=V[0].id),ne!=null&&!V.some(t=>t.id===ne)&&(ne=((e=V[0])==null?void 0:e.id)??null,B=null),g()}async function Jo(){rr=!0,L=await na(O).catch(()=>[]),rr=!1,g()}async function Qo(e){Tt=e,B=await qs(e).catch(()=>({participants:[],attendance:[],criteria:[],scores:[],results:[],error:!0})),Tt=null,g()}function ir(e,t){return((e==null?void 0:e.attendance)??[]).filter(r=>Number(r.student_id)===Number(t)).sort((r,n)=>String(n.updated_at??"").localeCompare(String(r.updated_at??"")))[0]}function _r(e,t){return((e==null?void 0:e.results)??[]).find(r=>Number(r.student_id)===Number(t))}function Ko(e,t,r){return((e==null?void 0:e.scores)??[]).find(n=>Number(n.student_id)===Number(t)&&Number(n.criterion_id)===Number(r))}function Rt(e,t){return((e==null?void 0:e.scores)??[]).filter(r=>Number(r.student_id)===Number(t)).reduce((r,n)=>r+Number(n.score||0),0)}function _a(e){const t=new Set(((e==null?void 0:e.participants)??[]).map(n=>Number(n.student_id))),r=new Map;for(const n of L??[]){const i=n.students;i!=null&&i.id&&!t.has(Number(i.id))&&n.status!=="rejected"&&r.set(Number(i.id),{student:i,applicationId:n.id})}for(const n of d.members??[]){const i=n.students;i!=null&&i.id&&!t.has(Number(i.id))&&!r.has(Number(i.id))&&r.set(Number(i.id),{student:i,applicationId:null})}return[...r.values()].sort((n,i)=>String(n.student.full_name??"").localeCompare(String(i.student.full_name??""),"th"))}function Xo({event:e,detail:t}){var a,s,u,b;const r=_a(t),n=((u=ir(t,(s=(a=t==null?void 0:t.participants)==null?void 0:a[0])==null?void 0:s.student_id))==null?void 0:u.session_label)||"กิจกรรมหลัก",i=(t==null?void 0:t.criteria)??[],o=((t==null?void 0:t.participants)??[]).map(c=>{const m=c.students??{},f=ir(t,c.student_id),x=_r(t,c.student_id),p=Rt(t,c.student_id),v=i.map($=>{const S=Ko(t,c.student_id,$.id);return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${l($.name)} <span class="text-[var(--muted-2)]">(เต็ม ${$.weight})</span></span><input type="number" min="0" max="${Number($.weight)}" step="0.5" name="criterion_${$.id}" value="${(S==null?void 0:S.score)??""}" class="yla-score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" data-weight="${Number($.weight)}"></div>`}).join("");return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3">
      <div class="flex items-center gap-3">${D(m)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(m.full_name??"—")}</p><p class="text-xs text-[var(--muted)]">${l(m.student_code??"")} · ${l(m.main_room??"")}</p></div><span class="text-[0.6875rem] font-bold px-2.5 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">${l(c.status==="completed"?"จบกิจกรรม":"ผู้เข้าร่วม")}</span></div>
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <form class="yla-attendance-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${c.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📝 การเข้าร่วม</p><input name="session_label" value="${l((f==null?void 0:f.session_label)??n)}" placeholder="ชื่อช่วง/ฐานกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><select name="attendance_state" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(ha).map(([$,S])=>`<option value="${$}" ${(f==null?void 0:f.attendance_state)===$?"selected":""}>${S}</option>`).join("")}</select><textarea name="note" rows="2" placeholder="หมายเหตุ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((f==null?void 0:f.note)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกการเข้าร่วม</button></form>
        <form class="yla-score-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${c.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📊 ประเมินศักยภาพ</p>${v||'<p class="text-xs text-[var(--muted)]">ยังไม่มีเกณฑ์ประเมิน</p>'}<p class="text-xs font-bold border-t border-[var(--line-soft)] pt-2">รวม <span class="yla-score-total text-[var(--primary)]">${p}</span> / ${i.reduce(($,S)=>$+Number(S.weight),0)}</p><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกคะแนน</button></form>
        <form class="yla-result-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${c.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">✅ สรุปผลและข้อเสนอ</p><select name="final_result" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(hr).map(([$,S])=>`<option value="${$}" ${(x==null?void 0:x.final_result)===$||!x&&$==="pending"?"selected":""}>${S}</option>`).join("")}</select><input name="recommended_position" value="${l((x==null?void 0:x.recommended_position)??"")}" placeholder="ตำแหน่งที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input name="recommended_division" value="${l((x==null?void 0:x.recommended_division)??"")}" placeholder="ฝ่ายที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><textarea name="strengths" rows="2" placeholder="จุดเด่น" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((x==null?void 0:x.strengths)??"")}</textarea><textarea name="areas_to_develop" rows="2" placeholder="สิ่งที่ควรพัฒนา" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((x==null?void 0:x.areas_to_develop)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--ok)] text-white text-xs font-bold">บันทึกผลสรุป</button></form>
      </div>
      <div class="flex justify-end"><button type="button" class="yla-participant-status-btn text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--muted)]" data-participant-id="${c.id}" data-status="${c.status==="completed"?"registered":"completed"}">${c.status==="completed"?"↩️ เปิดสถานะผู้เข้าร่วม":"ทำเครื่องหมายว่าจบกิจกรรม"}</button></div>
    </article>`}).join("");return`<section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-2"><div><h2 class="text-base font-bold text-[var(--ink)]">ผู้เข้าร่วมและการติดตาม</h2><p class="text-xs text-[var(--muted)]">บันทึกแยกเป็นการเข้าร่วม คะแนน และผลสรุปรายบุคคล</p></div><span class="text-xs text-[var(--muted)]">${((b=t==null?void 0:t.participants)==null?void 0:b.length)??0} คน</span></div><form id="yla-add-participant-form" class="rounded-2xl border border-dashed border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 flex flex-col sm:flex-row gap-2" data-event-id="${e.id}"><select name="student_id" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><option value="">เลือกนักเรียนหรือสมาชิกสภาเพื่อเพิ่ม</option>${r.map(({student:c})=>`<option value="${c.id}">${l(c.full_name)} · ${l(c.student_code??"")} · ${l(c.main_room??"")}</option>`).join("")}</select><button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" ${r.length?"":"disabled"}>เพิ่มผู้เข้าร่วม</button></form>${r.length?"":'<p class="text-xs text-[var(--muted)]">ไม่มีรายชื่อนักเรียนที่เพิ่มได้จากใบสมัคร/สมาชิกปัจจุบัน หรือเพิ่มไปแล้วทั้งหมด</p>'}${o||'<div class="rounded-2xl border border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีผู้เข้าร่วม กดเพิ่มรายชื่อด้านบน</div>'}</section>`}function Zo({event:e,detail:t}){const r=(t==null?void 0:t.participants)??[];return r.length?`<div class="space-y-3">${r.map(n=>{const i=n.students??{},o=ir(t,n.student_id),a=_r(t,n.student_id),s=Rt(t,n.student_id);return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3"><div class="flex items-center gap-3">${D(i)}<div class="flex-1"><p class="text-sm font-bold text-[var(--ink)]">${l(i.full_name??"ข้อมูลของฉัน")}</p><p class="text-xs text-[var(--muted)]">สถานะ: ${l(n.status==="completed"?"จบกิจกรรม":"กำลังเข้าร่วม")}</p></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs"><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">การเข้าร่วมล่าสุด</p><p class="font-bold text-[var(--ink)] mt-1">${o?`${l(ha[o.attendance_state]??o.attendance_state)} · ${l(o.session_label)}`:"ยังไม่บันทึก"}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">คะแนนสะสม</p><p class="font-bold text-[var(--primary)] mt-1">${s} / ${((t==null?void 0:t.criteria)??[]).reduce((u,b)=>u+Number(b.weight),0)}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">ผลสรุป</p><p class="font-bold text-[var(--ink)] mt-1">${l(hr[a==null?void 0:a.final_result]??"รอสรุป")}</p></div></div>${a!=null&&a.strengths||a!=null&&a.areas_to_develop?`<div class="border-t border-[var(--line-soft)] pt-3 text-xs leading-6"><p><strong>จุดเด่น:</strong> ${l((a==null?void 0:a.strengths)??"ยังไม่มีข้อมูล")}</p><p><strong>สิ่งที่ควรพัฒนา:</strong> ${l((a==null?void 0:a.areas_to_develop)??"ยังไม่มีข้อมูล")}</p></div>`:'<p class="text-xs text-[var(--muted)]">ผลประเมินและข้อเสนอจะแสดงเมื่อผู้ดูแลบันทึกผลแล้ว</p>'}</article>`}).join("")}</div>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">กิจกรรมนี้ยังไม่มีข้อมูลการเข้าร่วมของคุณ</div>'}function ei(){if(V===null)return Wo(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดกิจกรรม YLA...</p>';ut()&&L===null&&!rr&&Jo();const e=V.find(o=>Number(o.id)===Number(ne));if(e&&B===null&&Tt===null)return Qo(e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดผู้เข้าร่วมและผลประเมิน...</p>';const t=o=>o==="active"?"bg-[var(--ok-soft)] text-[var(--ok)]":o==="completed"?"bg-[var(--primary-soft)] text-[var(--primary)]":o==="cancelled"?"bg-[var(--bad-soft)] text-[var(--bad)]":"bg-[var(--bg-2)] text-[var(--muted)]",r=V.length?V.map(o=>`<button type="button" class="yla-event-select text-left rounded-2xl border p-4 space-y-2 ${Number(o.id)===Number(ne)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"}" data-event-id="${o.id}"><div class="flex items-start gap-2"><span class="flex-1 text-sm font-bold text-[var(--ink)]">${l(o.title)}</span><span class="text-[0.6875rem] font-bold rounded-full px-2 py-1 ${t(o.status)}">${l(Vt[o.status]??o.status)}</span></div><p class="text-xs text-[var(--muted)]">${l(or(o))}${o.location?` · ${l(o.location)}`:""}</p></button>`).join(""):'<div class="rounded-2xl border border-dashed border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีกิจกรรม YLA ในปีการศึกษานี้</div>',n=gt?'<form id="yla-event-form" class="rounded-2xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 space-y-3"><div class="flex items-center justify-between"><h2 class="font-bold text-[var(--ink)]">สร้างกิจกรรม YLA</h2><button type="button" id="yla-event-cancel" class="text-xs font-bold text-[var(--muted)]">ยกเลิก</button></div><input name="title" required placeholder="ชื่อกิจกรรม เช่น YLA รุ่นที่ 1" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><textarea name="description" rows="2" placeholder="วัตถุประสงค์หรือรายละเอียดกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea><div class="grid grid-cols-2 gap-2"><input type="date" name="start_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="date" name="end_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><div class="grid grid-cols-2 gap-2"><input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="number" min="1" name="capacity" placeholder="จำนวนรับ (ไม่บังคับ)" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><button type="submit" class="w-full py-2.5 rounded-[10px] bg-[var(--primary)] text-white text-sm font-bold">สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น</button></form>':"",i=e?`<section class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-4"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 YLA · ปีการศึกษา ${O}</p><h2 class="text-xl font-bold text-[var(--ink)] mt-1">${l(e.title)}</h2><p class="text-sm text-[var(--muted)] mt-1">${l(e.description??"กิจกรรมพัฒนาภาวะผู้นำและทักษะการทำงานของนักเรียน")}</p><p class="text-xs text-[var(--muted)] mt-2">${l(or(e))}${e.location?` · ${l(e.location)}`:""}</p></div><div class="flex flex-wrap gap-2 items-center"><span class="text-xs font-bold rounded-full px-3 py-1.5 ${t(e.status)}">${l(Vt[e.status]??e.status)}</span><button type="button" id="yla-print-event" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]">🖨️ พิมพ์สรุป</button></div></div>${ut()?`<form id="yla-event-status-form" class="flex flex-wrap gap-2 items-center border-t border-[var(--line-soft)] pt-3" data-event-id="${e.id}"><span class="text-xs text-[var(--muted)]">สถานะกิจกรรม</span><select name="status" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(Vt).map(([o,a])=>`<option value="${o}" ${e.status===o?"selected":""}>${a}</option>`).join("")}</select><button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกสถานะ</button></form>`:""}${Tt===e.id?'<p class="text-sm text-[var(--muted)] text-center py-8">กำลังโหลด...</p>':B!=null&&B.error?'<p class="text-sm text-[var(--bad)] text-center py-8">โหลดข้อมูล YLA ไม่สำเร็จ</p>':ut()?Xo({event:e,detail:B}):Zo({event:e,detail:B})}</section>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">เลือกกิจกรรมเพื่อดูรายละเอียดและติดตามผล</div>';return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 กิจกรรม YLA · Youth Leadership For Azizstan</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ติดตามกิจกรรมและพัฒนาการรายบุคคล</h1><p class="text-sm text-[var(--muted)] mt-2 leading-6">นักเรียนดูสถานะ การเข้าร่วม คะแนน และผลสรุปของตนเองได้ ส่วนผู้ดูแลจัดกิจกรรม เพิ่มผู้เข้าร่วม เช็กชื่อ และบันทึกผลได้ในหน้าเดียว</p></div>${ut()?'<button type="button" id="yla-event-open" class="px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">＋ สร้างกิจกรรม YLA</button>':""}</div><div class="flex flex-wrap gap-2 mt-4 text-xs"><a href="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit?tab=t.gq6dk28nkqg8" target="_blank" rel="noopener" class="px-3 py-2 rounded-[10px] border border-[var(--line)] font-bold text-[var(--primary)]">🔗 เปิดชุดเอกสาร YLA ต้นฉบับ</a><span class="px-3 py-2 rounded-[10px] bg-[var(--bg-2)] text-[var(--muted)]">เก็บข้อมูลตามกิจกรรม ไม่ปะปนกับสารบัญเอกสาร</span></div></section>${n}<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">${r}</section>${i}<details class="mt-2"><summary class="cursor-pointer text-sm font-bold text-[var(--primary)]">📚 ดูสารบัญเอกสาร YLA YLA-00 ถึง YLA-10</summary><div class="mt-4">${Xt({kind:"yla",esc:l})}</div></details></div>`}function ti(){var e,t,r,n,i,o;document.querySelectorAll(".yla-event-select").forEach(a=>a.addEventListener("click",()=>{ne=Number(a.dataset.eventId),B=null,g()})),(e=document.getElementById("yla-event-open"))==null||e.addEventListener("click",()=>{gt=!0,g()}),(t=document.getElementById("yla-event-cancel"))==null||t.addEventListener("click",()=>{gt=!1,g()}),(r=document.getElementById("yla-event-form"))==null||r.addEventListener("submit",async a=>{var b;a.preventDefault();const s=a.currentTarget,u=s.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังสร้าง...";try{const c=await cn({academicYear:O,title:s.title.value.trim(),description:s.description.value.trim(),startDate:s.start_date.value||null,endDate:s.end_date.value||null,location:s.location.value.trim(),capacity:s.capacity.value?Number(s.capacity.value):null,createdByTeacherId:(b=d.teacher)==null?void 0:b.id});y("สร้างกิจกรรม YLA และเกณฑ์ประเมินแล้ว ✅","success"),gt=!1,V=null,ne=c.id,B=null,g()}catch(c){y("สร้างกิจกรรมไม่สำเร็จ: "+E(c),"error"),u.disabled=!1,u.textContent="สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น"}}),(n=document.getElementById("yla-event-status-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.currentTarget,u=s.querySelector('button[type="submit"]');u.disabled=!0;try{await un(Number(s.dataset.eventId),s.status.value),y("บันทึกสถานะกิจกรรมแล้ว","success"),V=null,g()}catch(b){y("บันทึกสถานะไม่สำเร็จ: "+E(b),"error"),u.disabled=!1}}),(i=document.getElementById("yla-add-participant-form"))==null||i.addEventListener("submit",async a=>{a.preventDefault();const s=a.currentTarget,u=s.querySelector('button[type="submit"]'),b=Number(s.student_id.value),c=_a(B).find(m=>Number(m.student.id)===b);if(!b||!c){y("กรุณาเลือกรายชื่อผู้เข้าร่วม","warning");return}u.disabled=!0;try{await pn({eventId:Number(s.dataset.eventId),studentId:b,applicationId:c.applicationId}),y("เพิ่มผู้เข้าร่วมแล้ว ✅","success"),B=null,g()}catch(m){y("เพิ่มผู้เข้าร่วมไม่สำเร็จ: "+E(m),"error"),u.disabled=!1}}),document.querySelectorAll(".yla-participant-status-btn").forEach(a=>a.addEventListener("click",async()=>{a.disabled=!0;try{await mn(Number(a.dataset.participantId),a.dataset.status),B=null,g()}catch(s){y("เปลี่ยนสถานะไม่สำเร็จ: "+E(s),"error"),a.disabled=!1}})),document.querySelectorAll(".yla-attendance-form").forEach(a=>a.addEventListener("submit",async s=>{var b;s.preventDefault();const u=a.querySelector('button[type="submit"]');u.disabled=!0;try{await bn({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),sessionLabel:a.session_label.value.trim(),attendanceState:a.attendance_state.value,note:a.note.value.trim(),recordedByTeacherId:(b=d.teacher)==null?void 0:b.id}),y("บันทึกการเข้าร่วมแล้ว","success"),B=null,g()}catch(c){y("บันทึกการเข้าร่วมไม่สำเร็จ: "+E(c),"error"),u.disabled=!1}})),document.querySelectorAll(".yla-score-form").forEach(a=>{const s=a.querySelector(".yla-score-total"),u=()=>{s&&(s.textContent=[...a.querySelectorAll(".yla-score-input")].reduce((b,c)=>b+(Number(c.value)||0),0))};a.querySelectorAll(".yla-score-input").forEach(b=>b.addEventListener("input",u)),a.addEventListener("submit",async b=>{var f;b.preventDefault();const c=a.querySelector('button[type="submit"]');c.disabled=!0;const m={};a.querySelectorAll(".yla-score-input").forEach(x=>{m[x.name.replace("criterion_","")]=x.value});try{await vn({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),scores:m,scoredByTeacherId:(f=d.teacher)==null?void 0:f.id}),y("บันทึกคะแนนแล้ว","success"),B=null,g()}catch(x){y("บันทึกคะแนนไม่สำเร็จ: "+E(x),"error"),c.disabled=!1}})}),document.querySelectorAll(".yla-result-form").forEach(a=>a.addEventListener("submit",async s=>{var b;s.preventDefault();const u=a.querySelector('button[type="submit"]');u.disabled=!0;try{await xn({eventId:Number(a.dataset.eventId),studentId:Number(a.dataset.studentId),totalScore:Rt(B,Number(a.dataset.studentId)),strengths:a.strengths.value.trim(),areasToDevelop:a.areas_to_develop.value.trim(),recommendedPosition:a.recommended_position.value.trim(),recommendedDivision:a.recommended_division.value.trim(),finalResult:a.final_result.value,finalizedByTeacherId:(b=d.teacher)==null?void 0:b.id}),y("บันทึกผลสรุปแล้ว ✅","success"),B=null,g()}catch(c){y("บันทึกผลสรุปไม่สำเร็จ: "+E(c),"error"),u.disabled=!1}})),(o=document.getElementById("yla-print-event"))==null||o.addEventListener("click",()=>{if(!B||!Br())return;const a=Br(),s=(B.participants??[]).map((u,b)=>{const c=u.students??{},m=_r(B,u.student_id);return`<tr><td>${b+1}</td><td>${l(c.full_name??"")}</td><td>${l(c.student_code??"")}</td><td>${l(c.main_room??"")}</td><td>${Rt(B,u.student_id)}</td><td>${l(hr[m==null?void 0:m.final_result]??"รอสรุป")}</td></tr>`}).join("");it(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${l(a.title)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:30px}h1{font-size:22px}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #ccc;padding:7px;text-align:left;font-size:12px}th{background:#f3f4f6}</style></head><body><h1>สรุปกิจกรรม YLA: ${l(a.title)}</h1><p>ปีการศึกษา ${O} · ${l(or(a))}</p><table><thead><tr><th>ลำดับ</th><th>ชื่อ</th><th>รหัส</th><th>ห้อง</th><th>คะแนน</th><th>ผล</th></tr></thead><tbody>${s}</tbody></table></body></html>`)})}function Br(){return V==null?void 0:V.find(e=>Number(e.id)===Number(ne))}function ri(e){const t=te==null?void 0:te.find(r=>r.id===e);return t?`${t.full_name} · รหัส ${t.id}`:""}function ai(e){if(!e)return"";const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);if(t)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${l(t[1])}" allowfullscreen loading="lazy"></iframe></div>`;const r=e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||e.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);if(r)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${l(r[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`;const n=e.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);return n?`<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${l(n[1])}" allowfullscreen loading="lazy"></iframe></div>`:`<a href="${l(e)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`}function Ot(){if(!qe)return"";const e=L==null?void 0:L.find(t=>t.id===qe);return e?$a(e,e.students,{closeId:"btn-admin-app-detail-close",backdropId:"admin-app-detail-backdrop",canDelete:!!d.isAdmin}):""}function ni(){var t;if(!Xe)return"";const e=(t=d.applications)==null?void 0:t.find(r=>r.id===Xe);return e?$a(e,d.student,{closeId:"btn-my-app-detail-close",backdropId:"my-app-detail-backdrop",isOwner:!0}):""}function si(e,t){var a,s;(a=document.getElementById("peer-endorser-picker-modal"))==null||a.remove();const r=(s=d.applications)==null?void 0:s.find(u=>u.id===e),n=(d.members||[]).filter(u=>{var b;return((b=u.council_positions)==null?void 0:b.gender)===t&&u.student_id!==d.student.id}).sort((u,b)=>{var c,m;return(((c=u.council_positions)==null?void 0:c.sort_order)??0)-(((m=b.council_positions)==null?void 0:m.sort_order)??0)}),i=u=>{var b,c,m;return`
    <button type="button" class="btn-peer-picker-choose w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(r==null?void 0:r.requested_peer_endorser_id)===String(u.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${u.id}">
      ${D(u.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((b=u.students)==null?void 0:b.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${l(((c=u.council_positions)==null?void 0:c.position_name)??"—")} · ${l(((m=u.students)==null?void 0:m.main_room)??"—")}</p>
      </div>
      ${String(r==null?void 0:r.requested_peer_endorser_id)===String(u.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`},o=document.createElement("div");o.id="peer-endorser-picker-modal",o.className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",o.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
      <div class="flex items-start justify-between gap-3 mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🙋 เลือกพี่สภาที่ต้องการให้รับรอง</p>
        <button type="button" id="btn-peer-picker-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      ${n.length?`<div class="space-y-2">${n.map(i).join("")}</div>`:`<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีสมาชิกสภานักเรียน${q[t]??""}ในระบบให้เลือก</p>`}
    </div>`,document.body.appendChild(o),o.addEventListener("click",u=>{u.target===o&&o.remove()}),o.querySelector("#btn-peer-picker-close").addEventListener("click",()=>o.remove()),o.querySelectorAll(".btn-peer-picker-choose").forEach(u=>{u.addEventListener("click",async()=>{u.disabled=!0;try{await fn({applicationId:e,memberId:Number(u.dataset.id)}),await ma(),y("เลือกพี่สภาที่ต้องการให้รับรองแล้ว ✅","success"),o.remove(),g()}catch(b){y("บันทึกไม่สำเร็จ: "+E(b),"error"),u.disabled=!1}})})}function $a(e,t,{closeId:r,backdropId:n,isOwner:i=!1,canDelete:o=!1}){var s,u,b,c,m,f,x,p,v,$;const a=ga[(s=e.council_positions)==null?void 0:s.gender]??"bg-[var(--bg-2)] text-[var(--muted)]";return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="${n}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="${r}" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${D(t,"w-16 h-20")}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${l((t==null?void 0:t.full_name)??"—")}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${a}">${l(q[(u=e.council_positions)==null?void 0:u.gender]??"—")}</span>
            </div>
            <p class="text-xs text-[var(--muted-2)]">${l((t==null?void 0:t.student_code)??"")} · ${l((t==null?void 0:t.main_room)??"")}</p>
            <p class="text-xs text-[var(--primary)] font-semibold mt-0.5">${l(((b=e.council_positions)==null?void 0:b.position_name)??"—")}</p>
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
            ${ai(e.intro_video_url)}
          </div>`:""}
          ${(c=e.certificates)!=null&&c.length?`
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
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${(m=e.teachers)!=null&&m.full_name?" — "+l(e.teachers.full_name):""}</p>
            ${e.endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${l(e.endorsement_comment)}</p>`:'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>
          ${Ae()?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${(x=(f=e.council_members)==null?void 0:f.students)!=null&&x.full_name?" — "+l(e.council_members.students.full_name):""}</p>
            ${Fe(e)?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>':e.peer_endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${l(e.peer_endorsement_comment)}</p>`:e.peer_endorsed_at?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>':'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>`:""}
          ${i&&Ae()&&!Fe(e)&&!e.peer_endorsed_at?`
          <div class="rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2">
            <p class="text-xs font-bold text-[var(--primary-dark)]">🙋 พี่สภาที่ต้องการให้รับรอง</p>
            <p class="text-sm text-[var(--ink)]">${(v=(p=e.requested_peer_endorser)==null?void 0:p.students)!=null&&v.full_name?l(e.requested_peer_endorser.students.full_name):"ยังไม่ได้เลือก"}</p>
            <button type="button" id="btn-pick-my-app-endorser" class="w-full py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${e.id}" data-gender="${l((($=e.council_positions)==null?void 0:$.gender)??"")}">
              ${e.requested_peer_endorser_id?"🔄 เปลี่ยนพี่สภา":"➕ เลือกพี่สภา"}
            </button>
          </div>`:""}
          ${o&&["pending","rejected"].includes(e.status)?`
          <button type="button" id="btn-delete-council-application" data-id="${e.id}" class="w-full py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">🗑️ ลบใบสมัคร</button>`:""}
        </div>
      </div>
    </div>`}function wa(){var t,r,n,i,o;if(!ge)return"";const e=L==null?void 0:L.find(a=>a.id===ge);return e?`<div id="council-delete-backdrop" class="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
    <div class="bg-[var(--surface)] rounded-2xl p-5 max-w-md w-full space-y-3">
      <p class="text-base font-bold text-[var(--ink)]">🗑️ ยืนยันการนำใบสมัครนี้ออกจากระบบ?</p>
      <div class="text-sm text-[var(--ink-2)] space-y-1">
        <p><b>ชื่อ–สกุล:</b> ${l((t=e.students)==null?void 0:t.full_name)}</p>
        <p><b>รหัสนักเรียน:</b> ${l((r=e.students)==null?void 0:r.student_code)}</p>
        <p><b>ห้อง:</b> ${l(((n=e.students)==null?void 0:n.main_room)||((i=e.students)==null?void 0:i.religion_room)||"—")}</p>
        <p><b>ตำแหน่ง:</b> ${l((o=e.council_positions)==null?void 0:o.position_name)}</p>
        <p><b>สถานะ:</b> ${l(cr[e.status]||e.status)}</p>
      </div>
      <p class="text-xs text-[var(--bad)]">โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนดำเนินการ</p>
      <textarea id="council-delete-reason" required rows="3" placeholder="เหตุผลการลบ (จำเป็น)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <div class="flex gap-2">
        <button type="button" id="btn-cancel-council-delete" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm">ยกเลิก</button>
        <button type="button" id="btn-confirm-council-delete" class="flex-1 py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">ยืนยันลบ</button>
      </div>
    </div>
  </div>`:""}async function oi(){er=await Rs().catch(()=>[]),g()}function ii(){if(!d.isAdmin&&!d.isExecutive)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือผู้บริหารเท่านั้น</p>';if(L===null)return lt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(G===null)return $r(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(er===null)return oi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=(()=>{const x=d.cfg.council_term_start_semester,p=d.cfg.council_term_start_year,v=d.cfg.council_term_end_semester,$=d.cfg.council_term_end_year;return!p&&!$?"ยังไม่ได้ตั้งค่าวาระ":`ภาคเรียนที่ ${x??"—"}/${p??"—"} ถึง ภาคเรียนที่ ${v??"—"}/${$??"—"}`})(),t=d.members,r={M:t.filter(x=>{var p;return((p=x.council_positions)==null?void 0:p.gender)==="M"}).length,W:t.filter(x=>{var p;return((p=x.council_positions)==null?void 0:p.gender)==="W"}).length},n=t.filter(x=>{var p;return(p=x.council_positions)==null?void 0:p.is_elected}).sort((x,p)=>{var v,$;return(((v=x.council_positions)==null?void 0:v.sort_order)??0)-((($=p.council_positions)==null?void 0:$.sort_order)??0)}),i=L.length,o={all:i};L.forEach(x=>{const p=$t(x);o[p]=(o[p]??0)+1});const a=L.filter(x=>x.endorsed_at).length,s=L.filter(x=>x.peer_endorsed_at||Fe(x)).length,u=L.filter(x=>x.status==="candidate").length,b=L.filter(x=>x.status==="appointed").length,c=Object.fromEntries(d.positions.map(x=>[x.id,x.position_name])),m=G.map(x=>({...x,posNames:er.filter(p=>p.teacher_id===x.id).map(p=>c[p.position_id]).filter(Boolean)})),f=(x,p,v)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${v}">${l(x)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(p)}</p>
    </div>`;return`
    <div class="max-w-4xl mx-auto space-y-5">
      <div>
        <h2 class="text-lg font-bold text-[var(--ink)] mb-0.5">📊 ภาพรวมผู้บริหาร</h2>
        <p class="text-xs text-[var(--muted-2)]">สรุปสภานักเรียนวาระปัจจุบัน สำหรับผู้บริหาร — ดูอย่างเดียว ไม่มีสิทธิ์แก้ไข</p>
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">📋 การสมัครสภานักเรียน</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          ${f(i,"สมัครแล้วทั้งหมด","var(--ink)")}
          ${f(a,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
          ${Ae()?f(s,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):f("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
          ${f(u,"ว่าที่สภานักเรียน (ผู้สมัครเลือกตั้ง)","var(--primary)")}
          ${f(b,"แต่งตั้งแล้ว","var(--teal)")}
        </div>
        <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
          ${sr.map(x=>`
            <span class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--surface-2)] text-[var(--ink-2)]">
              ${l(x.label)} <span class="text-[var(--muted-2)]">${o[x.id]??0}</span>
            </span>`).join("")}
        </div>
        <p class="text-xs text-[var(--muted-2)] mb-2">รายชื่อล่าสุด — กดดูใบสมัครฉบับเต็มได้</p>
        <div class="space-y-1.5 max-h-96 overflow-y-auto">
          ${L.slice(0,30).map(x=>{var C,I;const[p,v]=nt[x.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],$=x.endorsed_at?"✅":"⬜",S=Ae()?x.peer_endorsed_at||Fe(x)?" · ✅สภา":" · ⬜สภา":"";return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${D(x.students,"w-8 h-10")}
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(((C=x.students)==null?void 0:C.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((I=x.council_positions)==null?void 0:I.position_name)??"—")} · ${$}ครู${S}</p>
              </div>
              <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full ${v}">${l(p)}</span>
              <button type="button" class="btn-view-app-detail flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-lg border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${x.id}">ดู</button>
            </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีใบสมัคร</p>'}
        </div>
        ${L.length>30?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-2 text-center">แสดง 30 รายการล่าสุดจากทั้งหมด ${L.length} รายการ</p>`:""}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-1">🏛️ สภานักเรียนวาระปัจจุบัน</p>
        <p class="text-xs text-[var(--muted)] mb-3">${l(e)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
          ${f(t.length,"สมาชิกสภาทั้งหมด","var(--ink)")}
          ${f(r.M,"สภาชาย","#14563b")}
          ${f(r.W,"สภาหญิง","#a3134f")}
          ${f(n.length,"ตำแหน่งผู้นำ","var(--primary)")}
        </div>
        ${n.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${n.map(x=>{var p,v;return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${D(x.students,"w-9 h-11")}
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(((p=x.students)==null?void 0:p.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((v=x.council_positions)==null?void 0:v.position_name)??"—")}</p>
              </div>
            </div>`}).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีตำแหน่งผู้นำที่เลือกตั้งแล้ว</p>'}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">👨‍🏫 รายนามครูที่ปรึกษาสภานักเรียน</p>
        ${m.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${m.map(x=>`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2.5">
              <div class="w-9 h-9 rounded-full bg-[var(--surface-2)] flex-shrink-0 overflow-hidden flex items-center justify-center text-[var(--muted-2)]">${x.image_url?`<img src="${l(x.image_url)}" class="w-full h-full object-cover" />`:"👤"}</div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(x.full_name)}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${x.posNames.length?l(x.posNames.join(", ")):"ยังไม่ได้กำหนดฝ่ายที่ดูแล"}</p>
              </div>
            </div>`).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีครูที่ปรึกษาสภานักเรียน</p>'}
      </div>
    </div>
    ${Ot()}${wa()}`}function li(){if(!d.isAdmin&&!d.isCouncilAdvisor)return"";if(L===null)return lt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Q===null)return vr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=Q.reduce((p,v)=>p+Number(v.weight),0),t=e/2;oe!=="M"&&oe!=="W"&&(oe="M");const r=L.filter(p=>{var v;return((v=p.council_positions)==null?void 0:v.gender)===oe}),n=`
    <div class="flex gap-2 mb-3">
      ${["M","W"].map(p=>`
        <button type="button" class="apps-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${p===oe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${p}">
          สภา${q[p]} <span class="${p===oe?"text-white/80":"text-[var(--muted-2)]"}">${L.filter(v=>{var $;return(($=v.council_positions)==null?void 0:$.gender)===p}).length}</span>
        </button>`).join("")}
    </div>`,i={all:r.length};r.forEach(p=>{const v=$t(p);i[v]=(i[v]??0)+1}),sr.some(p=>p.id===xe)||(xe="all");const o=`
    <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
      ${sr.map(p=>`
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${p.id===xe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${p.id}">
          ${l(p.label)} <span class="${p.id===xe?"text-white/80":"text-[var(--muted-2)]"}">${i[p.id]??0}</span>
        </button>`).join("")}
    </div>`,a=[...new Set(r.map(p=>qt(p.students)).filter(Boolean))].sort((p,v)=>p.localeCompare(v,"th")),s=d.positions.filter(p=>p.gender===oe).sort((p,v)=>p.sort_order-v.sort_order),u=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      <select id="apps-grade-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกระดับชั้น</option>
        ${a.map(p=>`<option value="${l(p)}" ${p===ft?"selected":""}>${l(p)}</option>`).join("")}
      </select>
      <select id="apps-position-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกฝ่าย</option>
        ${s.map(p=>`<option value="${p.id}" ${String(p.id)===String(Re)?"selected":""}>${l(p.position_name)}</option>`).join("")}
      </select>
      <select id="apps-advisor-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองครูที่ปรึกษา: ทั้งหมด</option>
        <option value="yes" ${Ue==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${Ue==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>
      ${Ae()?`
      <select id="apps-peer-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองพี่สภา: ทั้งหมด</option>
        <option value="yes" ${He==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${He==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>`:""}
    </div>`,b=`<datalist id="council-teacher-datalist">${te.map(p=>`<option value="${l(p.full_name)} · รหัส ${p.id}"></option>`).join("")}</datalist>`;if(!r.length)return`${n}${o}${u}${b}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภา${q[oe]}</p>`;const c=p=>!(ft&&qt(p.students)!==ft||Re&&String(p.position_id)!==String(Re)||Ue==="yes"&&!p.endorsed_at||Ue==="no"&&p.endorsed_at||He==="yes"&&!Me(p)||He==="no"&&Me(p)),m=r.filter(p=>(xe==="all"||$t(p)===xe)&&c(p));if(!m.length)return`${n}${o}${u}${b}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`;const f=p=>{var _,k,A,T,j,W,K,M,Y,wr,kr,Er,Ar,Sr;const v=(_=p.council_interviews)==null?void 0:_[0],[$,S]=nt[p.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],C=ga[(k=p.council_positions)==null?void 0:k.gender]??"bg-[var(--bg-2)] text-[var(--muted)]",I=!!((A=p.council_positions)!=null&&A.is_elected),h=$t(p);return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${p.id}">
      <div class="flex items-center gap-3">
        ${D(p.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((T=p.students)==null?void 0:T.full_name)??"—")}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${C}">${l(q[(j=p.council_positions)==null?void 0:j.gender]??"—")}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${l(((W=p.students)==null?void 0:W.student_code)??"")} · ${l(((K=p.students)==null?void 0:K.main_room)??"")} · ${l(((M=p.council_positions)==null?void 0:M.position_name)??"—")}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${S}">${$}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${p.id}">📄 ดูใบสมัคร</button>

      ${h==="awaiting_endorsement"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${ya(p)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}

      ${p.status==="pending"&&p.endorsed_at&&Me(p)?`
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${p.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-profile-id="${l(((Y=p.students)==null?void 0:Y.profile_id)??"")}" data-student-name="${l(((wr=p.students)==null?void 0:wr.full_name)??"")}" data-position-name="${l(((kr=p.council_positions)==null?void 0:kr.position_name)??"")}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${v!=null&&v.interviewer_teacher_id?l(ri(v.interviewer_teacher_id)):""}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>`:""}

      ${p.status==="interview_scheduled"?`
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${v!=null&&v.scheduled_at?new Date(v.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"—"} ${v!=null&&v.location?"· "+l(v.location):""} ${v!=null&&v.interviewer_teacher_id?"· กรรมการ "+l(((Er=te.find(ie=>ie.id===v.interviewer_teacher_id))==null?void 0:Er.full_name)??""):""}</p>
          <form class="score-form space-y-1.5" data-app-id="${p.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-max-weight="${e}" data-pass-threshold="${t}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${Q.map(ie=>{var Ir;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${l(ie.name)} <span class="text-[var(--muted-2)]">(เต็ม ${ie.weight})</span></span>
                <input type="number" min="0" max="${ie.weight}" step="0.5" name="c_${ie.id}" data-criterion-id="${ie.id}"
                  value="${((Ir=v==null?void 0:v.scores)==null?void 0:Ir[ie.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
              </div>`}).join("")}
            <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]">
              <span class="text-[var(--ink-2)]">คะแนนรวม</span>
              <span class="score-total-display text-[var(--primary)]">${(v==null?void 0:v.score)??0} / ${e} · ต้อง ≥ ${t} จึงผ่าน</span>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((v==null?void 0:v.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>`:""}

      ${p.status==="interviewed"?`
        <div class="pt-1 border-t border-[var(--line-soft)]">
          ${I?`<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${p.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`:`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${p.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>`:""}

      ${p.status==="candidate"?`<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${((Sr=(Ar=p.council_candidates)==null?void 0:Ar[0])==null?void 0:Sr.ballot_number)??"—"} · รอผลเลือกตั้ง</p>`:""}
      ${p.status==="rejected"&&(v!=null&&v.comment)?`<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${l(v.comment)}</p>`:""}
    </div>`},x=Re?`<div class="space-y-3">${m.map(f).join("")}</div>`:s.map(p=>{const v=m.filter($=>$.position_id===p.id);return v.length?`
          <div class="mb-5">
            <p class="text-xs font-bold text-[var(--muted)] mb-2 px-1">${l(p.position_name)} <span class="text-[var(--muted-2)]">(${v.length})</span></p>
            <div class="space-y-3">${v.map(f).join("")}</div>
          </div>`:""}).join("");return`${n}${o}${u}${b}${x}${Ot()}${wa()}`}function ka(e,t){var n,i,o,a;const r=String(t??"").trim().toLocaleLowerCase();return r?[(n=e.students)==null?void 0:n.full_name,(i=e.students)==null?void 0:i.student_code,(o=e.students)==null?void 0:o.main_room,(a=e.council_positions)==null?void 0:a.position_name].filter(Boolean).join(" ").toLocaleLowerCase().includes(r):!0}function di(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(L===null)return lt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลสัมภาษณ์...</p>';if(Q===null)return vr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดเกณฑ์สัมภาษณ์...</p>';if(te===null)return yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดรายชื่อกรรมการ...</p>';["M","W"].includes(Ie)||(Ie="M");const e=L.filter(p=>{var v;return((v=p.council_positions)==null?void 0:v.gender)===Ie}),t=Q.reduce((p,v)=>p+Number(v.weight),0),r=t/2,n=p=>p.status==="pending"&&p.endorsed_at&&Me(p),i=p=>p.status==="interview_scheduled",o=p=>["interviewed","rejected"].includes(p.status),a=p=>Le==="ready"?n(p):Le==="scheduled"?i(p):Le==="completed"?o(p):!0,s=e.filter(p=>a(p)&&ka(p,Lt)),u={all:e.length,ready:e.filter(n).length,scheduled:e.filter(i).length,completed:e.filter(o).length},b=[["all","ทั้งหมด"],["ready","รอนัด"],["scheduled","รอให้คะแนน"],["completed","ประเมินแล้ว"]],c=["M","W"].map(p=>`<button type="button" class="interview-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${p===Ie?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${p}">สภา${q[p]} <span class="${p===Ie?"text-white/80":"text-[var(--muted-2)]"}">${L.filter(v=>{var $;return(($=v.council_positions)==null?void 0:$.gender)===p}).length}</span></button>`).join(""),m=b.map(([p,v])=>`<button type="button" class="interview-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${p===Le?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${p}">${v} <span class="${p===Le?"text-white/80":"text-[var(--muted-2)]"}">${u[p]}</span></button>`).join(""),f=`<datalist id="council-interview-teacher-datalist">${te.map(p=>`<option value="${l(p.full_name)} · รหัส ${p.id}"></option>`).join("")}</datalist>`,x=s.map(p=>{var _,k,A,T,j,W,K;const v=(_=p.council_interviews)==null?void 0:_[0],[$,S]=nt[p.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],C=n(p)?`<form class="schedule-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-app-id="${p.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-profile-id="${l(((k=p.students)==null?void 0:k.profile_id)??"")}" data-position-name="${l(((A=p.council_positions)==null?void 0:A.position_name)??"")}">
      <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p><div class="grid grid-cols-2 gap-2"><input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div>
      <input type="text" name="interviewerText" list="council-interview-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button></form>`:"",I=i(p)?`<div class="pt-2 border-t border-[var(--line-soft)]"><p class="text-xs text-[var(--muted)] mb-2">📅 ${v!=null&&v.scheduled_at?new Date(v.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"ยังไม่กำหนดเวลา"} ${v!=null&&v.location?"· "+l(v.location):""}</p><form class="score-form space-y-1.5" data-app-id="${p.id}" data-iv-id="${(v==null?void 0:v.id)??""}" data-max-weight="${t}" data-pass-threshold="${r}"><p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>${Q.map(M=>{var Y;return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${l(M.name)} <span class="text-[var(--muted-2)]">(เต็ม ${M.weight})</span></span><input type="number" min="0" max="${M.weight}" step="0.5" name="c_${M.id}" data-criterion-id="${M.id}" value="${((Y=v==null?void 0:v.scores)==null?void 0:Y[M.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]"></div>`}).join("")}<div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]"><span>คะแนนรวม</span><span class="score-total-display text-[var(--primary)]">${(v==null?void 0:v.score)??0} / ${t} · ต้อง ≥ ${r} จึงผ่าน</span></div><textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((v==null?void 0:v.comment)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกผล</button></form></div>`:"",h=o(p)?`<div class="pt-2 border-t border-[var(--line-soft)] text-xs ${p.status==="interviewed"?"text-[var(--ok)]":"text-[var(--bad)]"}">${p.status==="interviewed"?"✅ ผ่านสัมภาษณ์":"❌ ไม่ผ่านสัมภาษณ์"}${(v==null?void 0:v.score)!=null?` · คะแนน ${v.score}/${t}`:""}${v!=null&&v.comment?`<p class="text-[var(--muted)] mt-1">${l(v.comment)}</p>`:""}${p.status==="interviewed"?'<button type="button" class="goto-view mt-2 px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" data-view="yla">🌱 บันทึก/ติดตาม YLA →</button>':""}</div>`:"";return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${D(p.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(((T=p.students)==null?void 0:T.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${l(((j=p.students)==null?void 0:j.student_code)??"")} · ${l(((W=p.students)==null?void 0:W.main_room)??"")} · ${l(((K=p.council_positions)==null?void 0:K.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${S}">${$}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${p.id}">📄 ดูใบสมัคร</button>${!n(p)&&p.status==="pending"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${ya(p)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}${C}${I}${h}</article>`}).join("");return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">🗓️ งานสัมภาษณ์</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">นัดหมายและประเมินผู้สมัคร</h1><p class="text-xs text-[var(--muted)] mt-2">แสดงเฉพาะข้อมูลใบสมัครของปีการศึกษาปัจจุบัน และใช้เกณฑ์คะแนนที่ตั้งไว้ในระบบ</p></section><div class="flex gap-2">${c}</div><div class="flex gap-2 overflow-x-auto pb-1">${m}</div><div class="flex gap-2"><input id="interview-search" value="${l(Lt)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="interview-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${s.length} รายการ จาก ${e.length} รายการ</p>${f}${s.length?`<div class="space-y-3">${x}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${Ot()}</div>`}function ci(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(L===null)return lt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลแต่งตั้ง...</p>';["M","W"].includes(Ce)||(Ce="M");const e=L.filter(m=>{var f;return((f=m.council_positions)==null?void 0:f.gender)===Ce}),t=m=>{var f;return m.status==="interviewed"&&!((f=m.council_positions)!=null&&f.is_elected)},r=m=>m.status==="appointed",n=m=>Te==="ready"?t(m):Te==="appointed"?r(m):t(m)||r(m),i=e.filter(m=>n(m)&&ka(m,Ct)),o={ready:e.filter(t).length,appointed:e.filter(r).length,all:e.filter(m=>t(m)||r(m)).length},a=["M","W"].map(m=>`<button type="button" class="appointment-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${m===Ce?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${m}">สภา${q[m]} <span class="${m===Ce?"text-white/80":"text-[var(--muted-2)]"}">${L.filter(f=>{var x;return((x=f.council_positions)==null?void 0:x.gender)===m&&(t(f)||r(f))}).length}</span></button>`).join(""),u=[["ready","รอแต่งตั้ง"],["appointed","แต่งตั้งแล้ว"],["all","ทั้งหมด"]].map(([m,f])=>`<button type="button" class="appointment-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${m===Te?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${m}">${f} <span class="${m===Te?"text-white/80":"text-[var(--muted-2)]"}">${o[m]}</span></button>`).join(""),b=i.map(m=>{var f,x,p,v;return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${D(m.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(((f=m.students)==null?void 0:f.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${l(((x=m.students)==null?void 0:x.student_code)??"")} · ${l(((p=m.students)==null?void 0:p.main_room)??"")} · ${l(((v=m.council_positions)==null?void 0:v.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${m.status==="appointed"?nt.appointed[1]:nt.interviewed[1]}">${m.status==="appointed"?"แต่งตั้งแล้ว":"รอแต่งตั้ง"}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${m.id}">📄 ดูใบสมัครและผลสัมภาษณ์</button>${t(m)?`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${m.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`:'<p class="text-xs text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">บันทึกสมาชิกภาพเรียบร้อยแล้ว</p>'}</article>`}).join(""),c=e.filter(m=>{var f;return m.status==="interviewed"&&((f=m.council_positions)==null?void 0:f.is_elected)}).length;return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">✅ การแต่งตั้งสมาชิก</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ผู้ผ่านสัมภาษณ์ที่พร้อมเข้าสภา</h1><p class="text-xs text-[var(--muted)] mt-2">หน้านี้ใช้สำหรับตำแหน่งแต่งตั้งโดยตรง ส่วนตำแหน่งประธาน/รองประธานที่มาจากการเลือกตั้งให้ดำเนินการต่อในแท็บว่าที่ประธาน</p></section><div class="flex gap-2">${a}</div><div class="flex gap-2 overflow-x-auto pb-1">${u}</div><div class="flex gap-2"><input id="appointment-search" value="${l(Ct)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="appointment-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${i.length} รายการ จาก ${o[Te]} รายการ · ผ่านสัมภาษณ์สายเลือกตั้งรอดำเนินการ ${c} รายการ</p>${i.length?`<div class="space-y-3">${b}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${Ot()}</div>`}const ui=[{label:"ประธาน",match:e=>!!(e!=null&&e.is_elected)},{label:"รองประธาน",match:e=>(e==null?void 0:e.position_name)==="รองประธานสภานักเรียน"},{label:"ฝ่ายงาน",match:e=>((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"สำนักงานสภา",match:e=>!(e!=null&&e.is_elected)&&(e==null?void 0:e.position_name)!=="รองประธานสภานักเรียน"&&!((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")}];let re="M";function pi(){re!=="M"&&re!=="W"&&(re="M");const e=d.members.filter(a=>{var s;return((s=a.council_positions)==null?void 0:s.gender)===re}).sort((a,s)=>{var u,b;return(((u=a.council_positions)==null?void 0:u.sort_order)??99)-(((b=s.council_positions)==null?void 0:b.sort_order)??99)}),t=`
    <div class="flex gap-2 mb-4">
      ${["M","W"].map(a=>`
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${a===re?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${a}">สภา${q[a]}</button>`).join("")}
    </div>`,r=d.isAdmin?`<button type="button" id="btn-add-council-member" class="w-full py-2.5 rounded-xl border border-dashed border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mb-4 hover:bg-[var(--primary-soft)]">＋ เพิ่มสมาชิกสภา${q[re]}</button>`:"",n=d.isAdmin||d.isChair&&d.chairGender===re,i=a=>{var s,u,b;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${D(a.students,"w-16 h-20 mx-auto")}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${l(((s=a.students)==null?void 0:s.full_name)??"—")}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((u=a.students)==null?void 0:u.main_room)??"")}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${l(((b=a.council_positions)==null?void 0:b.position_name)??"—")}</p>
      ${n?`
        <button type="button" class="btn-toggle-can-create w-full mt-2 text-[0.625rem] font-bold py-1 rounded-[8px] border ${a.can_create_activities?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--muted)]"}" data-id="${a.id}" data-value="${a.can_create_activities?"":"1"}">${a.can_create_activities?"✅ สร้างกิจกรรมได้":"➕ ให้สิทธิ์สร้างกิจกรรม"}</button>`:""}
      ${d.isAdmin?`
        <div class="flex gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-edit-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">✏️ แก้ไข</button>
          <button type="button" class="btn-remove-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">🗑️ ลบ</button>
        </div>`:""}
    </div>`},o=ui.map(a=>{const s=e.filter(u=>a.match(u.council_positions));return s.length?`
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${a.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${s.map(i).join("")}</div>
      </div>`:""}).join("");return`${r}${t}${o||`<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${q[re]}</p>`}`}function Or({mode:e,gender:t,member:r}){var u,b,c;(u=document.getElementById("member-modal"))==null||u.remove();const n=d.positions.filter(m=>m.gender===t);let i=e==="edit"?r.students:null,o=null;const a=document.createElement("div");a.id="member-modal",a.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",a.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">${e==="add"?`➕ เพิ่มสมาชิกสภา${q[t]}`:"✏️ แก้ไขสมาชิกสภา"}</p>
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
            <p class="text-sm font-bold text-[var(--ink)]">${l(((b=r.students)==null?void 0:b.full_name)??"—")} · ${l(((c=r.students)==null?void 0:c.student_code)??"")}</p>
          </div>
        `}
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ตำแหน่ง <span class="text-[var(--bad)]">*</span></label>
          <select id="member-position-select" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— เลือกตำแหน่ง —</option>
            ${n.map(m=>`<option value="${m.id}" ${e==="edit"&&r.position_id===m.id?"selected":""}>${l(m.position_name)}</option>`).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เริ่มวาระ</label>
            <input type="date" id="member-term-start" value="${e==="edit"?l(r.term_start_date??""):new Date().toISOString().slice(0,10)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          ${e==="edit"?`
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สิ้นสุดวาระ (ถ้ามี)</label>
            <input type="date" id="member-term-end" value="${l(r.term_end_date??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>`:""}
        </div>
        <button type="button" id="btn-save-member" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(a),a.querySelector("#btn-close-member-modal").addEventListener("click",()=>a.remove()),a.addEventListener("click",m=>{m.target===a&&a.remove()});const s=()=>{const m=a.querySelector("#member-student-selected");m&&(m.innerHTML=i?`
      <div class="flex items-center gap-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] p-2.5">
        ${D(i,"w-10 h-12")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(i.full_name)}</p>
          <p class="text-[0.6875rem] text-[var(--muted-2)] truncate">${l(i.student_code)} · ${l(i.main_room??"")}</p>
        </div>
      </div>`:"")};if(e==="add"){const m=a.querySelector("#member-student-search"),f=a.querySelector("#member-student-results");m.addEventListener("input",()=>{clearTimeout(o);const x=m.value.trim();if(x.length<2){f.innerHTML="";return}o=setTimeout(async()=>{const p=await Xr(x).catch(()=>[]);f.innerHTML=p.length?p.map(v=>`
          <button type="button" class="member-search-result-item w-full text-left flex items-center gap-2 rounded-xl border border-[var(--line)] p-2 hover:bg-[var(--surface-2)]" data-id="${v.id}">
            <span class="text-sm font-bold text-[var(--ink)] flex-1 truncate">${l(v.full_name)}</span>
            <span class="text-[0.6875rem] text-[var(--muted-2)] flex-shrink-0">${l(v.student_code)} · ${l(v.main_room??"")}</span>
          </button>`).join(""):'<p class="text-xs text-[var(--muted-2)] px-1">ไม่พบนักเรียน</p>',f.querySelectorAll(".member-search-result-item").forEach(v=>{v.addEventListener("click",()=>{i=p.find($=>$.id===Number(v.dataset.id)),f.innerHTML="",m.value="",s()})})},300)})}a.querySelector("#btn-save-member").addEventListener("click",async()=>{var p;const m=Number(a.querySelector("#member-position-select").value);if(!m){y("กรุณาเลือกตำแหน่ง","warning");return}if(e==="add"&&!i){y("กรุณาค้นหาและเลือกนักเรียน","warning");return}const f=a.querySelector("#member-term-start").value,x=a.querySelector("#btn-save-member");x.disabled=!0,x.textContent="กำลังบันทึก...";try{if(e==="add")await gn({positionId:m,studentId:i.id,academicYear:O,termStartDate:f,appointedByTeacherId:((p=d.teacher)==null?void 0:p.id)??null});else{const v=a.querySelector("#member-term-end").value;await yn(r.id,{positionId:m,termStartDate:f,termEndDate:v})}y("บันทึกแล้ว ✅","success"),a.remove(),d.members=await ze().catch(()=>d.members),g()}catch(v){y("บันทึกไม่สำเร็จ: "+E(v),"error"),x.disabled=!1,x.textContent="บันทึก"}})}function mi(){if(d.role!=="teacher"||!d.teacher)return"";if(!d.pendingEndorsements.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>';const e=t=>{var r,n,i,o;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${t.id}">
      <div class="flex items-center gap-3">
        ${D(t.students)}
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
    </div>`};return`<div class="space-y-3">${d.pendingEndorsements.map(e).join("")}</div>`}const jt={};async function bi(e,t){jt[t]=await us(e,t).catch(()=>[]),g()}function vi(){var i;const e=d.membership[0];if(!e)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>';const t=(i=e.council_positions)==null?void 0:i.gender;if(!t)return"";if(jt[e.id]===void 0)return bi(t,e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const r=jt[e.id];if(!r.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>';const n=o=>{var a,s,u,b;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${o.id}">
      <div class="flex items-center gap-3">
        ${D(o.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((a=o.students)==null?void 0:a.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${l(((s=o.students)==null?void 0:s.student_code)??"")} · ${l(((u=o.students)==null?void 0:u.main_room)??"")} · สมัคร${l(((b=o.council_positions)==null?void 0:b.position_name)??"—")}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] flex-shrink-0">ขอให้คุณรับรอง</span>
      </div>
      ${o.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(o.motivation)}</p>`:""}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${o.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${o.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`};return`<div class="space-y-3">${r.map(n).join("")}</div>`}async function xi(e){const t=d.membership[0];if(!t)return;const r=document.querySelector(`.peer-endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())||null;try{await hn({applicationId:Number(e),memberId:t.id,comment:n}),y("รับรองในนามสภานักเรียนแล้ว ✅","success"),delete jt[t.id],g()}catch(i){y("บันทึกไม่สำเร็จ: "+E(i),"error")}}async function Pr(e,t){const r=document.querySelector(`.endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())??"";if(!n){y("กรุณาใส่คอมเมนต์ก่อนยืนยัน","warning");return}try{t==="confirm"?(await _n({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),y("รับรองใบสมัครแล้ว ✅","success")):(await $n({applicationId:Number(e),teacherId:d.teacher.id,comment:n}),y('บันทึกผล "ไม่รับรอง" แล้ว',"success")),await _o(),g()}catch(i){y("บันทึกไม่สำเร็จ: "+E(i),"error")}}const Ea={planned:["ยังไม่จัด","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],completed:["เสร็จแล้ว","text-[#106143]","bg-[var(--ok-soft-line)]","border-[var(--ok-soft-line)]"],cancelled:["ยกเลิก","text-[var(--muted-2)]","bg-[var(--surface-2)]","border-[var(--line)]"]},Aa=[["completed","เสร็จแล้ว","border-[var(--ok-soft-line)] bg-[var(--ok-soft)]","text-[var(--ok)]"],["ongoing","กำลังดำเนินการ","border-[var(--primary-soft-line)] bg-[var(--primary-soft)]","text-[var(--primary)]"],["planned","ยังไม่จัด","border-[var(--gold-soft-line)] bg-[var(--gold-soft)]","text-[var(--gold-ink)]"],["cancelled","ยกเลิก","border-[var(--line-soft)] bg-[var(--surface-2)]","text-[var(--muted-2)]"]],Fr={planned:"ongoing",ongoing:"completed"},fi={planned:"▶️ เริ่มดำเนินการ",ongoing:"✅ ทำเครื่องหมายเสร็จแล้ว"};async function Sa(){H=await $s(O).catch(()=>[]),g()}async function Yr(e){de[e]=await Es(e).catch(()=>new Set),g()}function gi(e){return d.isAdmin||d.isChair||d.isCouncilAdvisor?!0:!!(e.owner_member_id&&d.membership.some(t=>t.id===e.owner_member_id))}async function Ia(){J=await Us().catch(()=>[]),g()}async function La(e){const[t,r,n,i]=await Promise.all([As(e).catch(()=>null),Ss(e).catch(()=>[]),Is(e).catch(()=>[]),Vs("council_activity",e).catch(()=>[])]);De[e]=t,pr[e]=r,mr[e]=n,Ze[e]=Object.fromEntries(i.map(o=>[o.student_id,o])),g()}function yi({rule:e,override:t,attendanceRows:r}){var i;if((t==null?void 0:t.override_decision)==="pass")return"pass";if((t==null?void 0:t.override_decision)==="fail")return"fail";if(!e)return"no_rule";const n=r.length;if(e.min_attendance_count&&n<e.min_attendance_count)return"not_eligible";if((i=e.required_dates)!=null&&i.length){const o=new Set(r.map(s=>(s.checked_in_at||"").slice(0,10)));if(e.required_dates.some(s=>!o.has(s)))return"not_eligible"}return"pass"}function hi(){var s,u,b;if(H===null)return Sa(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.canCreateActivities,t=e&&!d.isAdmin&&!d.isChair,r=d.membership[0],n={};H.forEach(c=>{n[c.status]=(n[c.status]??0)+1});const i=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${Aa.map(([c,m,f,x])=>`
        <div class="rounded-xl border ${f} p-3 text-center">
          <p class="text-2xl font-bold ${x}">${n[c]??0}</p>
          <p class="text-[0.6875rem] text-[var(--muted)]">${m}</p>
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
            <option value="M" ${t&&((u=r==null?void 0:r.council_positions)==null?void 0:u.gender)==="M"?"selected":""}>สภาชายเท่านั้น</option>
            <option value="W" ${t&&((b=r==null?void 0:r.council_positions)==null?void 0:b.gender)==="W"?"selected":""}>สภาหญิงเท่านั้น</option>
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
            ${d.members.map(c=>{var m,f;return`<option value="${c.id}">${l(((m=c.students)==null?void 0:m.full_name)??"—")} (${l(((f=c.council_positions)==null?void 0:f.position_name)??"—")})</option>`}).join("")}
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
    </div>`:"";if(!H.length)return`${i}${o}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`;const a=c=>{var I,h;const[m,f,x,p]=Ea[c.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]","border-[var(--line)]"],v=d.members.filter(_=>{var k;return!c.gender||((k=_.council_positions)==null?void 0:k.gender)===c.gender}),$=de[c.id],S=gi(c),C=(h=(I=c.council_members)==null?void 0:I.students)==null?void 0:h.full_name;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${c.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${l(c.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${c.activity_date?new Date(c.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} ${c.gender?"· สภา"+q[c.gender]:""} ${c.owner_text?"· "+l(c.owner_text):""} ${C?"· ผู้รับผิดชอบ "+l(C):""}</p>
            ${c.open_to_general?'<span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mt-1">🙋 เปิดให้นักเรียนทั่วไปเข้าร่วม</span>':""}
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${p} ${x} ${f}">${m}</span>
        </div>
        ${c.detail?`<p class="text-xs text-[var(--ink-2)]">${l(c.detail)}</p>`:""}
        ${S?`
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            <!-- เดิมจำกัดแค่ admin/chair เปลี่ยนสถานะได้ — แต่กิจกรรมที่ค้างสถานะ "planned" ตลอดไป
                 จะไม่ถูกนับใน % เช็คชื่อสำหรับประเมินเลย (นับเฉพาะ ongoing/completed) ผู้รับผิดชอบ
                 ที่ได้รับมอบหมาย (owner) จึงต้องเปลี่ยนสถานะกิจกรรมของตัวเองได้ด้วย ไม่งั้นฟีเจอร์
                 "สร้าง+เช็คชื่อได้เอง" จะใช้ไม่ได้จริงเพราะกิจกรรมไม่มีวันถูกนับผล -->
            ${S&&Fr[c.status]?`<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${c.id}" data-next="${Fr[c.status]}">${fi[c.status]}</button>`:""}
            ${S&&c.status!=="cancelled"&&c.status!=="completed"?`<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${c.id}">ยกเลิก</button>`:""}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${c.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${c.id}" data-title="${l(c.title)}" data-open-general="${c.open_to_general?"1":""}">📷 สแกน QR เช็คอิน</button>
            <button type="button" class="btn-activity-cert-manage text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-id="${c.id}">🏅 จัดการเกียรติบัตร</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${c.id}">
            ${$?`
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${v.map(_=>{var A;const k=$.has(_.student_id);return`<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${k?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"}" data-activity-id="${c.id}" data-student-id="${_.student_id}" ${k?"disabled":""}>
                    <span>${k?"✅":"➕"}</span><span class="truncate">${l(((A=_.students)==null?void 0:A.full_name)??"—")}</span>
                  </button>`}).join("")}
                ${v.length?"":'<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>'}
              </div>`:""}
          </div>
          ${ar===c.id?$i(c):""}`:""}
      </div>`};return`${i}${o}<div class="space-y-3">${H.map(a).join("")}</div>`}const _i={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft)] border-[var(--ok-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft)] border-[var(--bad-soft-line)]"],not_eligible:["ยังไม่ครบเงื่อนไข","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],no_rule:["ยังไม่ตั้งเงื่อนไข","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"]};function $i(e){if(J===null&&Ia(),De[e.id]===void 0&&La(e.id),J===null||De[e.id]===void 0)return'<div class="mt-2 pt-2 border-t border-dashed border-[var(--line)]"><p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>';const t=De[e.id],r=pr[e.id]??[],n=mr[e.id]??[],i=Object.fromEntries(r.map(c=>[c.student_id,c])),o=Ze[e.id]??{},a={};n.forEach(c=>{a[c.student_id]||(a[c.student_id]={student:c.students,rows:[]}),a[c.student_id].rows.push(c)});const s=`
    <form class="cert-rule-form space-y-2 bg-[var(--surface-2)] rounded-xl p-3" data-activity-id="${e.id}">
      <p class="text-xs font-bold text-[var(--ink-2)]">🏅 เงื่อนไขการรับเกียรติบัตร</p>
      <select name="template_id" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
        <option value="">— ยังไม่เลือกเทมเพลต —</option>
        ${J.map(c=>`<option value="${c.id}" ${(t==null?void 0:t.template_id)===c.id?"selected":""}>${l(c.name)}</option>`).join("")}
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
    </form>`,u=Object.keys(a),b=u.map(c=>{const m=Number(c),{student:f,rows:x}=a[m],p=i[m],v=yi({rule:t,override:p,attendanceRows:x}),[$,S]=_i[v],C=o[m];return`
      <div class="rounded-xl border border-[var(--line-soft)] p-2.5 space-y-1.5" data-cert-row="${m}">
        <div class="flex items-center gap-2">
          ${D(f,"w-8 h-10")}
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-[var(--ink)] truncate">${l((f==null?void 0:f.full_name)??"—")}</p>
            <p class="text-[0.625rem] text-[var(--muted-2)]">เข้าร่วม ${x.length} ครั้ง</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${S}">${$}</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(p==null?void 0:p.override_decision)==="pass"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${m}" data-decision="pass">✅ ผ่าน (บังคับ)</button>
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(p==null?void 0:p.override_decision)==="fail"?"border-[var(--bad-soft-line)] bg-[var(--bad-soft)] text-[#8a2f22]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${m}" data-decision="fail">❌ ไม่ผ่าน (บังคับ)</button>
          ${p!=null&&p.override_decision?`<button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)]" data-activity-id="${e.id}" data-student-id="${m}" data-decision="">↺ กลับเป็นอัตโนมัติ</button>`:""}
          ${v==="pass"?C?`<button type="button" class="btn-cert-view text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${m}">🏅 ดูเกียรติบัตร</button>`:`<button type="button" class="btn-cert-issue text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${m}">🏅 ออกเกียรติบัตร</button>`:""}
        </div>
      </div>`}).join("");return`
    <div class="mt-2 pt-2 border-t border-dashed border-[var(--line)] space-y-3">
      ${s}
      <div>
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1.5">รายชื่อผู้เข้าร่วม (${u.length} คน)</p>
        <div class="space-y-1.5">${b||'<p class="text-xs text-[var(--muted-2)] text-center py-3">ยังไม่มีใครเช็คชื่อเข้าร่วมกิจกรรมนี้</p>'}</div>
      </div>
    </div>`}const zr={info:["แจ้งให้ทราบ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],ack:["ต้องกดรับทราบ","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],urgent:["ด่วน","text-[#8a2f22]","bg-[var(--bad-soft-line)]","border-[var(--bad-soft-line)]"]};async function wi(){Nt=await ws().catch(()=>[]),g()}async function ki(){ue=await js(d.student.id).catch(()=>new Set),g()}async function Ei(){const[e,t,r,n]=await Promise.all([Ds().catch(()=>({})),Ms().catch(()=>0),Wt("M").catch(()=>0),Wt("W").catch(()=>0)]);pe=e,yt={all:t,M:r,W:n},g()}function Ai(){if(Nt===null)return wi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';d.role==="student"&&d.student&&ue===null&&ki(),pe===null&&Ei();const e=d.isAdmin||d.isCouncilAdvisor||d.isChair,t=Nt.filter(u=>u.audience==="all"||u.audience===(d.student?be(d.student.gender):null)||d.isAdmin||d.isChair),r=ht==="all"?t:t.filter(u=>u.type===ht),n=e?'<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>':"",i=e&&_t?`
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
      ${[["all","ทั้งหมด"],["urgent","ด่วน"],["ack","ต้องรับทราบ"],["info","แจ้งให้ทราบ"]].map(([u,b])=>`
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${ht===u?"bg-[var(--primary)] text-white border-[var(--primary)]":"bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]"}" data-filter="${u}">${b}</button>`).join("")}
    </div>`;if(!r.length)return`${n}${i}${a}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`;const s=u=>{var S,C;const[b,c,m,f]=zr[u.type]??zr.info,x=(S=u.teachers)!=null&&S.full_name?l(u.teachers.full_name)+" (ครู)":(C=u.students)!=null&&C.full_name?l(u.students.full_name)+" (ประธานสภา)":"ระบบ",p=ue==null?void 0:ue.has(u.id),v=u.type==="ack"&&d.role==="student"&&d.student,$=yt?yt[u.audience]??yt.all:null;return`
      <div class="rounded-xl border ${u.pinned?"border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${u.pinned?'<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>':""}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${f} ${m} ${c}">${b}</span>
          ${u.audience!=="all"?`<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${q[u.audience]??""}</span>`:""}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${l(u.title)}</p>
        ${u.body?`<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${l(u.body)}</p>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${x} · ${new Date(u.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
        ${u.type==="ack"?`<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${(pe==null?void 0:pe[u.id])??0}${$!=null?" จาก "+$:""} คน</p>`:""}
        ${v?p?'<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>':`<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${u.id}">รับทราบ</button>`:""}
      </div>`};return`${n}${i}${a}<div class="space-y-3">${r.map(s).join("")}</div>`}let ee=null,Be=null,wt=null;const Si={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"],improve:["ควรปรับปรุง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]"]};async function Ca(){ee=await _s().catch(()=>[]),g()}async function Ii(){const e=await Bs(O).catch(()=>[]);Be=Object.fromEntries(e.map(t=>[t.member_id,t])),g()}function Ta(){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${ee.reduce((t,r)=>t+Number(r.weight),0)} คะแนน)</p>
      <div class="space-y-1.5">
        ${ee.map(t=>`
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
    </div>`}function Li(){if(ee===null)return Ca(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Be===null)return Ii(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.isAdmin||d.role==="teacher",t=ee.reduce((a,s)=>a+Number(s.weight),0),r=e?Ta():"",n=a=>{var f,x;const s=Be[a.id],[u,b]=s!=null&&s.decision?Si[s.decision]:["ยังไม่ประเมิน","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"],c=d.role==="student"&&d.student&&a.student_id===d.student.id;if(!e&&!c)return"";const m=wt===a.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${a.id}">
        <div class="flex items-center gap-3">
          ${D(a.students,"w-10 h-12")}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((f=a.students)==null?void 0:f.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((x=a.council_positions)==null?void 0:x.position_name)??"—")}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${b}">${u}</span>
            ${(s==null?void 0:s.total_score)!=null?`<p class="text-xs text-[var(--muted-2)] mt-0.5">${s.total_score}/${s.max_score??t}</p>`:""}
          </div>
        </div>
        ${e?`<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${a.id}">${m?"▲ ซ่อนแบบประเมิน":s?"✏️ แก้ไขคะแนน":"📝 ให้คะแนน"}</button>`:""}
        ${e&&m?`
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${a.id}">
            ${ee.map(p=>{var v;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${l(p.name)} <span class="text-[var(--muted-2)]">(เต็ม ${p.weight})</span></span>
                <input type="number" min="0" max="${p.weight}" step="0.5" name="c_${p.id}" value="${((v=s==null?void 0:s.scores)==null?void 0:v[p.id])??""}" class="w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center" />
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
      </div>`},o=d.members.filter(a=>e||d.role==="student"&&d.student&&a.student_id===d.student.id).map(n).filter(Boolean).join("");return!e&&!o?`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`:o?`${r}<div class="space-y-3">${o}</div>`:`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`}function Ci({member:e,evaluation:t,cfg:r}){var u,b;const n=l(((u=e.students)==null?void 0:u.full_name)??"—"),i=l(((b=e.council_positions)==null?void 0:b.position_name)??"—"),o=l(r.council_name||"ระบบสภานักเรียน"),a=l(t.certificate_no||""),s=new Date(t.certificate_issued_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"});return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
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
    </body></html>`}function Gr(e,t){it(Ci({member:e,evaluation:t,cfg:d.cfg}))}let U=null,ae=null,Na="FORM_09_1_PROJECT_PROPOSAL",et=null,tt=null;const qa={draft:["ร่าง","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],pending_advisor:["รอครูที่ปรึกษาประจำฝ่ายรับรอง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_dept_head:["รอหัวหน้าฝ่ายกิจการนักเรียน","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_director:["รอผู้อำนวยการ","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],approved:["อนุมัติแล้ว","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"]},Ti={FORM_09_ACTIVITY_APPROVAL:"แบบ 09 ขออนุมัติจัดกิจกรรม",FORM_09_1_PROJECT_PROPOSAL:"แบบ 09.1 แบบเสนอโครงการ"},dt=e=>Ti[e]??e??"เอกสารโครงการ";async function Ni(){U=await hs(O).catch(()=>[]),g()}async function qi(){tt=d.teacher?await sa(d.teacher.id).catch(()=>[]):[],g()}const ye=e=>(e||"").split(`
`).map(t=>t.trim()).filter(Boolean),pt=(e,t)=>ye(e).map(r=>{const n=r.split("|").map(i=>i.trim());for(;n.length<t;)n.push("");return n.slice(0,t)}),mt=e=>(Array.isArray(e)?e:[]).map(t=>t.join(" | ")).join(`
`),Ve=e=>(Array.isArray(e)?e:[]).join(`
`),Ra=e=>Number(e||0).toLocaleString("th-TH"),ja=e=>(e.budget_items||[]).reduce((t,r)=>t+(Number(r[1])||0),0),Dt=["title","planArea","projectType","schoolStrategy","educationStandard","responsiblePersons","rationale","objectives","goalsQuantitative","goalsQualitative","workSteps","durationText","locationText","budgetItems","stakeholders","evaluationItems","expectedResults"];function Ri(){return["คุณคือผู้ช่วยแปลงไฟล์ใบเสนอโครงการของโรงเรียน (ไฟล์ที่แนบมาในแชทนี้) ให้เป็นข้อมูล CSV ตามสเปคที่กำหนดไว้เป๊ะๆ ด้านล่างนี้ ห้ามแต่งข้อมูลขึ้นเองถ้าไม่มีในไฟล์ต้นฉบับ — เว้นว่างไว้แทน","","สร้างตาราง CSV จำนวน 1 แถวข้อมูล (แถวหัวตาราง 1 แถว + แถวข้อมูล 1 แถว) โดยแถวหัวตารางต้องเป็นข้อความนี้เป๊ะๆ (ห้ามแปล ห้ามสลับลำดับ ห้ามเว้นคอลัมน์):",Dt.join(","),"","ความหมายแต่ละคอลัมน์และวิธีใส่ข้อมูล:","- title: ชื่อโครงการ","- planArea: แผนงาน","- projectType: ลักษณะโครงการ (เช่น โครงการต่อเนื่อง/โครงการใหม่)","- schoolStrategy: สนองกลยุทธ์โรงเรียน","- educationStandard: สนองมาตรฐานการศึกษา/ตัวชี้วัด","- responsiblePersons: ผู้รับผิดชอบโครงการ — ถ้ามีหลายคน ให้ขึ้นบรรทัดใหม่ทีละคนภายในเซลล์เดียวกัน","- rationale: หลักการและเหตุผล","- objectives: วัตถุประสงค์ — ขึ้นบรรทัดใหม่ทีละข้อภายในเซลล์เดียวกัน","- goalsQuantitative: เป้าหมายเชิงปริมาณ — ขึ้นบรรทัดใหม่ทีละข้อ","- goalsQualitative: เป้าหมายเชิงคุณภาพ — ขึ้นบรรทัดใหม่ทีละข้อ",'- workSteps: วิธีดำเนินงาน — แต่ละขั้นตอนขึ้นบรรทัดใหม่ 1 บรรทัดต่อ 1 ขั้นตอน แต่ละบรรทัดคั่น 4 ค่าด้วย " | " ตามลำดับ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ',"- durationText: ระยะเวลาดำเนินการโครงการโดยรวม","- locationText: สถานที่ดำเนินงาน",'- budgetItems: งบประมาณ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: รายการ | จำนวนเงิน (ตัวเลขล้วน ห้ามมีคอมมาคั่นหลักหรือคำว่า "บาท")','- stakeholders: หน่วยงาน/ผู้เกี่ยวข้อง — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: หน่วยงาน/บุคคล | จำนวน (คน)','- evaluationItems: การประเมินผลความสำเร็จ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด',"- expectedResults: ผลที่คาดว่าจะได้รับ — ขึ้นบรรทัดใหม่ทีละข้อ","","กฎสำคัญที่ต้องทำตามเป๊ะๆ:",'1. คอลัมน์ไหนมีการขึ้นบรรทัดใหม่ภายในเซลล์ ต้องครอบข้อความทั้งเซลล์ด้วยเครื่องหมายคำพูด " " เสมอ (มาตรฐาน CSV)',"2. มีข้อมูลแค่ 1 แถวข้อมูลเท่านั้น (1 โครงการต่อ 1 ไฟล์)","3. ถ้าหาข้อมูลคอลัมน์ไหนไม่เจอในไฟล์ต้นฉบับ ให้เว้นว่างไว้ ห้ามเดาขึ้นมาเอง","4. ตอบกลับเฉพาะเนื้อหา CSV เท่านั้น ห้ามมีคำอธิบายอื่นปนอยู่ในคำตอบ ให้ครอบคำตอบทั้งหมดด้วย code block รูปแบบนี้: ```csv (เนื้อหา CSV) ```"].join(`
`)}function ji(e){let t=(e??"").trim();return t.startsWith("```")&&(t=t.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),t}function Di(e){const t=[];let r=[],n="",i=!1;const o=e.replace(/\r\n/g,`
`);for(let a=0;a<o.length;a++){const s=o[a];i?s==='"'?o[a+1]==='"'?(n+='"',a++):i=!1:n+=s:s==='"'?i=!0:s===","?(r.push(n),n=""):s===`
`?(r.push(n),t.push(r),r=[],n=""):n+=s}return r.push(n),t.push(r),t.filter(a=>a.some(s=>s.trim()!==""))}function Mi(e){const t=ji(e);if(t.startsWith("{")){const a=JSON.parse(t),s={};for(const u of Dt){if(!(u in a))continue;const b=a[u];s[u]=Array.isArray(b)?b.map(c=>Array.isArray(c)?c.join(" | "):String(c??"")).join(`
`):String(b??"")}return s}const r=Di(t);if(r.length<2)throw new Error("ไม่พบข้อมูล — ต้องมีทั้งแถวหัวตารางและแถวข้อมูล");const n=r[0].map(a=>a.trim()),i=r[1],o={};return n.forEach((a,s)=>{Dt.includes(a)&&(o[a]=(i[s]??"").trim())}),o}function Bi(e){const t=document.getElementById("doc-form");if(!t)return 0;let r=0;for(const n of Dt){if(e[n]===void 0)continue;const i=t.elements[n];i&&(i.value=e[n],r++)}return r}function Oi(){var i;(i=document.getElementById("doc-ai-import-modal"))==null||i.remove();const e=document.createElement("div");e.id="doc-ai-import-modal",e.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#btn-close-doc-ai-import").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()});const t=e.querySelector("#doc-ai-prompt"),r=Fa({copyButton:e.querySelector("#btn-doc-ai-copy-prompt")});e.querySelector("#btn-doc-ai-generate-prompt").addEventListener("click",()=>{t.value=Ri(),r.markGenerated(),y("สร้างคำสั่งสำหรับ AI แล้ว","success")}),e.querySelector("#btn-doc-ai-copy-prompt").addEventListener("click",async()=>{if(!r.isReady()){y("กรุณากด “สร้าง Prompt” ก่อนคัดลอก","warning");return}try{await navigator.clipboard.writeText(t.value),y("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}catch{t.select(),document.execCommand("copy"),y("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}});const n=o=>{try{const a=Mi(o),s=Bi(a);if(!s)throw new Error("ไม่พบข้อมูลที่ตรงกับฟอร์ม ตรวจสอบว่าหัวตาราง CSV ตรงกับคำสั่งที่กำหนด");y(`นำเข้าข้อมูลแล้ว ${s} ช่อง — กรุณาตรวจสอบความถูกต้องก่อนบันทึกร่าง`,"success"),e.remove()}catch(a){y("นำเข้าข้อมูลไม่สำเร็จ: "+E(a),"error")}};e.querySelector("#doc-ai-csv-file").addEventListener("change",async o=>{var s;const a=(s=o.target.files)==null?void 0:s[0];if(a)try{n(await a.text())}finally{o.target.value=""}}),e.querySelector("#btn-doc-ai-import").addEventListener("click",()=>{const o=e.querySelector("#doc-ai-paste").value;if(!o.trim()){y("กรุณาวางคำตอบจาก AI ก่อน","warning");return}n(o)})}function Vr(){return d.isCouncilAdvisor||d.isAdmin||d.isChair}function Pi(e){return e.status==="pending_advisor"&&(d.isAdmin||d.isCouncilAdvisor&&(tt==null?void 0:tt.includes(e.position_id)))}function Fi(e){return e.status==="pending_dept_head"&&(d.isAdmin||d.isStudentAffairsHead)}function Yi(e){return e.status==="pending_director"&&(d.isAdmin||d.isSchoolDirector)}function zi(){if(!(d.isAdmin||d.role==="teacher"||d.isChair))return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>';if(U===null)return Ni(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(d.isCouncilAdvisor&&tt===null)return qi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ae!==null)return Gi();const t=Vr()?`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <button type="button" class="btn-new-doc py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" data-form-key="FORM_09_ACTIVITY_APPROVAL">➕ ร่างแบบ 09 ขออนุมัติกิจกรรม</button>
        <button type="button" class="btn-new-doc py-3 rounded-2xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-sm font-bold" data-form-key="FORM_09_1_PROJECT_PROPOSAL">➕ ร่างแบบ 09.1 เสนอโครงการ</button>
      </div>`:"";if(!U.length)return`${t}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`;const r=n=>{var s;const[i,o]=qa[n.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],a=d.student&&n.created_by_student_id===d.student.id||d.teacher&&n.created_by_teacher_id===d.teacher.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${l(n.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${l(dt(n.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(n.form_version)||1} · ${(s=n.council_positions)!=null&&s.position_name?l(n.council_positions.position_name)+" · ":""}${Ra(ja(n))} บาท</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${o}">${i}</span>
        </div>
        ${n.status==="draft"&&n.last_rejected_stage?`<p class="text-xs text-[var(--bad)] bg-[var(--bad-soft)] rounded-[10px] p-2.5">↩️ ถูกตีกลับจากขั้น${l({advisor:"ครูที่ปรึกษาประจำฝ่าย",dept_head:"หัวหน้าฝ่ายกิจการนักเรียน",director:"ผู้อำนวยการ"}[n.last_rejected_stage]??n.last_rejected_stage)}${n.last_rejection_comment?": "+l(n.last_rejection_comment):""}</p>`:""}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-view-doc-detail text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">📄 ดูรายละเอียด</button>
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-edit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${n.id}">✏️ แก้ไข</button>`:""}
          ${n.status==="draft"&&(a||d.isAdmin)?`<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">📤 เสนอขออนุมัติ</button>`:""}
          ${Pi(n)||Fi(n)||Yi(n)?`
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${n.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${n.id}">❌ ไม่อนุมัติ</button>`:""}
          ${n.status==="approved"?`<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">🖨️ พิมพ์เอกสาร</button>${Vr()?`<button type="button" class="btn-new-doc-revision text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">➕ สร้างฉบับแก้ไข</button>`:""}`:""}
        </div>
      </div>`};return`${t}<div class="space-y-3">${U.map(r).join("")}</div>${Vi()}`}function Da(e){try{return JSON.parse(d.cfg[e]||"[]")}catch{return[]}}function bt({name:e,placeholder:t,configKey:r,value:n,extraClass:i=""}){const o=Da(r);return o.length?`<select name="${e}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${i}">
    <option value="">— เลือก${l(t)} —</option>
    ${o.map(a=>`<option value="${l(a)}" ${n===a?"selected":""}>${l(a)}</option>`).join("")}
  </select>`:`<input name="${e}" placeholder="${l(t)} (ยังไม่ได้ตั้งค่าตัวเลือกในหน้าตั้งค่า)" value="${l(n??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${i}" />`}function Gi(){const e=ae==="new",t=e?{}:U.find(a=>a.id===ae)??{},r=e?Na:t.form_key||"FORM_09_1_PROJECT_PROPOSAL",n=dt(r),i=d.isChair&&!d.isCouncilAdvisor&&!d.isAdmin?"council":t.origin??(d.isChair?"council":"teacher");G===null&&$r();const o=G!=null&&G.length?`
    <div>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mb-1">ครูที่ปรึกษาสภานักเรียน (คลิกเพื่อเพิ่ม)</p>
      <div class="flex flex-wrap gap-1.5">
        ${G.map(a=>`<button type="button" class="doc-responsible-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition" data-name="${l(a.full_name)}">+ ${l(a.full_name)}</button>`).join("")}
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
          ${bt({name:"planArea",placeholder:"แผนงาน",configKey:"council_doc_plan_areas",value:t.plan_area})}
          ${bt({name:"projectType",placeholder:"ลักษณะโครงการ",configKey:"council_doc_project_types",value:t.project_type})}
        </div>
        ${bt({name:"schoolStrategy",placeholder:"สนองกลยุทธ์โรงเรียน",configKey:"council_doc_school_strategies",value:t.school_strategy,extraClass:"w-full"})}
        ${bt({name:"educationStandard",placeholder:"สนองมาตรฐานการศึกษา/ตัวชี้วัด",configKey:"council_doc_education_standards",value:t.education_standard,extraClass:"w-full"})}
        ${o}
        <textarea name="responsiblePersons" rows="2" placeholder="ผู้รับผิดชอบโครงการ (บรรทัดละ 1 ชื่อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ve(t.responsible_persons))}</textarea>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ฝ่ายที่รับผิดชอบ ${i==="council"?'<span class="text-[var(--bad)]">*</span>':""}</label>
          <select name="positionId" ${i==="council"?"required":""} class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— ไม่ระบุ —</option>
            ${d.positions.map(a=>`<option value="${a.id}" ${t.position_id===a.id?"selected":""}>${l(a.position_name)} (สภา${l(q[a.gender]??"")})</option>`).join("")}
          </select>
          ${i==="council"?'<p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">โครงการที่สภาริเริ่มเองต้องระบุฝ่าย เพื่อส่งให้ครูที่ปรึกษาประจำฝ่ายนั้นตรวจก่อน</p>':""}
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หลักการ วัตถุประสงค์ เป้าหมาย</p>
        <textarea name="rationale" rows="3" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(t.rationale??"")}</textarea>
        <textarea name="objectives" rows="2" placeholder="วัตถุประสงค์ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ve(t.objectives))}</textarea>
        <textarea name="goalsQuantitative" rows="2" placeholder="เป้าหมายเชิงปริมาณ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ve(t.goals_quantitative))}</textarea>
        <textarea name="goalsQualitative" rows="2" placeholder="เป้าหมายเชิงคุณภาพ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ve(t.goals_qualitative))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">วิธีดำเนินงาน</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ</p>
        <textarea name="workSteps" rows="4" placeholder="เสนอโครงการต่อผู้บริหาร | ธ.ค.2568 | - | นายเปาซี" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(mt(t.work_steps))}</textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="durationText" placeholder="ระยะเวลาดำเนินการ" value="${l(t.duration_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <input name="locationText" placeholder="สถานที่ดำเนินงาน" value="${l(t.location_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">งบประมาณ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: รายการ | จำนวนเงิน(บาท) — รวมยอดคำนวณอัตโนมัติ</p>
        <textarea name="budgetItems" rows="4" placeholder="ค่าอาหาร 115 คน x 5 มื้อ | 17250" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(mt(t.budget_items))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หน่วยงาน/ผู้เกี่ยวข้อง</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: หน่วยงาน/บุคคล | จำนวน(คน)</p>
        <textarea name="stakeholders" rows="3" placeholder="ครูที่ปรึกษา | 9" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(mt(t.stakeholders))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">การประเมินผลความสำเร็จ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด</p>
        <textarea name="evaluationItems" rows="4" placeholder="ผู้เรียนพัฒนาศักยภาพผู้นำ | ร้อยละ 80 | ประเมินจากแบบสังเกตการณ์ | แบบสังเกตการณ์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(mt(t.evaluation_items))}</textarea>
        <textarea name="expectedResults" rows="2" placeholder="ผลที่คาดว่าจะได้รับ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ve(t.expected_results))}</textarea>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex gap-2">
        <button type="button" id="btn-doc-form-cancel" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกร่าง</button>
      </div>
    </form>`}function Ma(e,t){var a;const r=l(t.council_name||"ระบบสภานักเรียน"),n=(s,u)=>u!=null&&u.length?`
    <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px;">
      <thead><tr>${s.map(b=>`<th style="border:1px solid #ccc;padding:6px;background:#f8f4f4;">${l(b)}</th>`).join("")}</tr></thead>
      <tbody>${u.map(b=>`<tr>${b.map(c=>`<td style="border:1px solid #ccc;padding:6px;">${l(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`:"",i=s=>s!=null&&s.length?`<ol style="margin:4px 0;padding-left:20px;">${s.map(u=>`<li>${l(u)}</li>`).join("")}</ol>`:"—",o='style="display:block;margin-bottom:3px;"';return`
    ${t.council_logo_url?`<img src="${l(t.council_logo_url)}" style="height:64px;object-fit:contain;display:block;margin:0 auto 8px;" />`:""}
    <h1 style="text-align:center;font-size:20px;margin-bottom:2px;">${l(dt(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))}</h1>
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
    <div style="margin-bottom:12px;"><b ${o}>7. งบประมาณ</b>${n(["รายการ","จำนวนเงิน (บาท)"],e.budget_items)}<b>รวมเป็นเงิน ${Ra(ja(e))} บาท</b></div>
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
    </div>`}function Vi(){if(!et)return"";const e=U.find(i=>i.id===et);if(!e)return"";const[t,r]=qa[e.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],n=[e.advisor_decided_at?`✅ ครูที่ปรึกษาประจำฝ่ายรับรองแล้ว${e.advisor_comment?" — "+l(e.advisor_comment):""}`:"",e.dept_head_decided_at?`✅ หัวหน้าฝ่ายกิจการนักเรียนอนุมัติแล้ว${e.dept_head_comment?" — "+l(e.dept_head_comment):""}`:"",e.director_decided_at?`✅ ผู้อำนวยการอนุมัติแล้ว${e.director_comment?" — "+l(e.director_comment):""}`:""].filter(Boolean);return`
    <div class="fixed inset-0 z-[90] bg-[var(--surface)] flex flex-col" id="doc-detail-backdrop">
      <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)] flex-shrink-0">
        <div class="min-w-0">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(e.title)}</p>
          <p class="text-[0.625rem] text-[var(--muted-2)] mt-0.5">${l(dt(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(e.form_version)||1} · แก้ไขครั้งที่ ${Number(e.document_revision)||1}</p>
          <span class="text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${r} inline-block mt-0.5">${t}</span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" id="btn-doc-detail-print" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]">🖨️ พิมพ์</button>
          <button type="button" id="btn-doc-detail-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none">✕</button>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div style="font-family:'Sarabun',sans-serif;line-height:1.8;color:#1d1519;max-width:800px;margin:0 auto;">
          ${Ma(e,d.cfg)}
          ${n.length?`<div style="margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;"><b style="display:block;margin-bottom:6px;font-size:13px;">ประวัติการอนุมัติ</b><div style="font-size:13px;color:#106143;">${n.map(i=>`<p style="margin-bottom:2px;">${i}</p>`).join("")}</div></div>`:""}
        </div>
      </div>
    </div>`}function Ui(e,t){return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>${l(dt(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} ${l(e.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; color: #1d1519; }
      @media print { body { padding: 0; } }
    </style></head><body>
      ${Ma(e,t)}
    </body></html>`}function Ur(e){it(Ui(e,d.cfg))}const Hr=e=>{if(!e)return"";const t=new Date(e);if(isNaN(t))return"";const r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`};function Hi(){const e=d.cfg;return`
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
          <input name="council_eligible_grade_levels" value="${l(e.council_eligible_grade_levels||ua)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
            <input type="datetime-local" name="council_apply_opens_at" value="${l(Hr(e.council_apply_opens_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ปิดรับสมัครเมื่อ</label>
            <input type="datetime-local" name="council_apply_closes_at" value="${l(Hr(e.council_apply_closes_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
    </form>`}function Wi(){const e={M:d.positions.filter(s=>s.gender==="M").sort((s,u)=>s.sort_order-u.sort_order),W:d.positions.filter(s=>s.gender==="W").sort((s,u)=>s.sort_order-u.sort_order)},t=s=>{const u=s==="M"?"👦 ฝ่ายชาย":"👧 ฝ่ายหญิง",b=e[s].map(c=>`
      <form class="position-row-form flex items-center gap-2 py-2 border-b border-[var(--line-soft)] last:border-0" data-id="${c.id}">
        <input name="position_name" value="${l(c.position_name)}" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-1.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <input name="seats_count" type="number" min="1" value="${c.seats_count}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
        ${c.is_elected?'<span class="text-[0.625rem] font-bold px-2 py-1 rounded-full bg-[var(--gold-soft)] text-[var(--gold-ink)] flex-shrink-0">มาจากเลือกตั้ง</span>':""}
        <button type="submit" class="text-xs font-bold text-[var(--primary)] flex-shrink-0 px-2 py-1.5">บันทึก</button>
        <button type="button" class="btn-delete-position text-[var(--bad)] flex-shrink-0 px-1 text-lg leading-none" data-id="${c.id}" title="ลบตำแหน่ง">✕</button>
      </form>`).join("");return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${u}</p>
        ${b||'<p class="text-xs text-[var(--muted-2)] py-2">ยังไม่มีตำแหน่ง</p>'}
        <form class="position-add-form flex gap-2 mt-3" data-gender="${s}">
          <input name="position_name" placeholder="เพิ่มตำแหน่งใหม่" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
          <input name="seats_count" type="number" min="1" value="1" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-2 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
        </form>
      </div>`},r=[],n=new Set;[...e.M,...e.W].forEach(s=>{n.has(s.position_name)||(n.add(s.position_name),r.push(s.position_name))});const i=e.M.reduce((s,u)=>s+Number(u.seats_count),0),o=e.W.reduce((s,u)=>s+Number(u.seats_count),0),a=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mt-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📊 สรุปรวมจำนวนที่นั่งทั้งสภา</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-left text-[var(--muted)]"><th class="py-1.5 pr-2">ตำแหน่ง</th><th class="py-1.5 px-2 text-center">ชาย</th><th class="py-1.5 px-2 text-center">หญิง</th><th class="py-1.5 pl-2 text-center">รวม</th></tr></thead>
          <tbody>
            ${r.map(s=>{var c,m;const u=((c=e.M.find(f=>f.position_name===s))==null?void 0:c.seats_count)??0,b=((m=e.W.find(f=>f.position_name===s))==null?void 0:m.seats_count)??0;return`<tr class="border-t border-[var(--line-soft)]"><td class="py-1.5 pr-2 text-[var(--ink-2)]">${l(s)}</td><td class="py-1.5 px-2 text-center">${u}</td><td class="py-1.5 px-2 text-center">${b}</td><td class="py-1.5 pl-2 text-center font-bold text-[var(--primary)]">${u+b}</td></tr>`}).join("")}
            <tr class="border-t-2 border-[var(--line)] font-bold"><td class="py-1.5 pr-2 text-[var(--ink)]">รวมทั้งหมด</td><td class="py-1.5 px-2 text-center">${i}</td><td class="py-1.5 px-2 text-center">${o}</td><td class="py-1.5 pl-2 text-center text-[var(--primary)]">${i+o}</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;return`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${t("M")}${t("W")}</div>${a}`}function Ji(){if(Q===null)return vr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ce===null)return go(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ee===null)return Ca(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(J===null)return Ia(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=Q.reduce((b,c)=>b+Number(c.weight),0),t=(e/2).toFixed(1),r=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${e} คะแนน · ผ่านเกณฑ์ที่ ≥ ${t})</p>
      <div class="space-y-1.5 mt-2">
        ${Q.map(b=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${l(b.name)}</span>
            <span class="font-bold text-[var(--muted)]">${b.weight} คะแนน</span>
            <button type="button" class="btn-remove-interview-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${b.id}">✕</button>
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
        ${ce.map(b=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${l(b.phrase)}</span>
            <button type="button" class="btn-remove-phrase text-[var(--bad)] hover:text-[#8a2f22]" data-id="${b.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีข้อความ</p>'}
      </div>
      <form id="phrase-form" class="flex gap-2 mt-3">
        <input name="phrase" placeholder="เพิ่มข้อความใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,a=(b,c)=>`
    <div>
      <label class="block text-xs font-medium text-[var(--muted)] mb-1">${b} (บรรทัดละ 1 รายการ)</label>
      <textarea name="${c}" rows="3" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Da(c).join(`
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
    </form>`,u=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🏅 เทมเพลตเกียรติบัตรกิจกรรม</p>
      <div class="space-y-1.5 mb-3">
        ${J.map(b=>{var f;const c=(f=b.layout)==null?void 0:f.background,m=c?c.type==="image"?c.imageUrl:null:b.type==="custom"?b.background_image_url:null;return`
          <div class="flex items-center gap-2 text-xs">
            ${m?`<img src="${l(m)}" class="w-10 h-7 object-cover rounded border border-[var(--line)] flex-shrink-0" />`:`<span class="flex-shrink-0">${l((Ft[b.preset_key]??"🏅").split(" ")[0])}</span>`}
            <span class="flex-1 text-[var(--ink-2)] truncate">${l(b.name)} ${b.type==="preset"?"· "+l(Ft[b.preset_key]??b.preset_key):"· อัปโหลดเอง"}</span>
            <button type="button" class="btn-design-cert-template text-[var(--primary)] hover:text-[var(--primary-dark)] font-bold flex-shrink-0" data-id="${b.id}">🎨 ออกแบบ</button>
            <button type="button" class="btn-remove-cert-template text-[var(--bad)] hover:text-[#8a2f22] flex-shrink-0" data-id="${b.id}">✕</button>
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
          ${Object.entries(Ft).map(([b,c])=>`<option value="${b}">${l(c)}</option>`).join("")}
        </select>
        <input type="file" name="background_image" id="cert-template-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`;return`${r}${i}${Ta()}${o}${s}${u}`}function Qi(){const e=br();return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(fo).map(([t,r])=>`
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${l(r)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${t}" ${e[t]!==!1?"checked":""} />
        </label>`).join("")}
    </div>`}const st={},rt={},ke={};async function Wr(e){const[t,r,n]=await Promise.all([fs(e).catch(()=>[]),gs(e).catch(()=>[]),ys(e).catch(()=>[])]);st[e]=t,rt[e]=r,ke[e]=n,g()}function Ki(){var i;const e=d.isChair,t=d.isAdmin||d.isCouncilAdvisor;if(!e&&!t)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>';const r='<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>';let n="";if(e){const o=be((i=d.student)==null?void 0:i.gender);if(o&&st[o]===void 0)Wr(o),n+=r;else if(o){const a=st[o],s=rt[o]||[],u=ke[o]||[],b=new Set(u.map(m=>m.application_id)),c=s.filter(m=>!b.has(m.id));n+=`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${q[o]}</p>
          ${a.length?c.length?`
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${a.map(m=>`<option value="${m.id}">${l(m.position_name)}</option>`).join("")}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${c.map(m=>{var f,x,p;return`<option value="${m.id}">${l(((f=m.students)==null?void 0:f.full_name)??"—")}${((p=(x=m.council_interviews)==null?void 0:x[0])==null?void 0:p.score)!=null?" (คะแนน "+m.council_interviews[0].score+")":""}</option>`}).join("")}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>':'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>'}
        </div>`,u.length&&(n+=`
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${u.map(m=>{var f,x,p,v;return`
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${D((f=m.council_applications)==null?void 0:f.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((p=(x=m.council_applications)==null?void 0:x.students)==null?void 0:p.full_name)??"—")}</p>
                  <p class="text-xs text-[var(--muted)]">${l(((v=m.council_positions)==null?void 0:v.position_name)??"—")}</p>
                </div>
              </div>`}).join("")}</div>
          </div>`)}}return t&&(n+=["M","W"].map(o=>{if(ke[o]===void 0)return Wr(o),r;const a=ke[o];return a.length?`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${q[o]}</p>
          <div class="space-y-2.5">
            ${a.map(s=>{var u,b,c,m,f;return`
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${s.id}">
                <div class="flex items-center gap-3">
                  ${D((u=s.council_applications)==null?void 0:u.students)}
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((c=(b=s.council_applications)==null?void 0:b.students)==null?void 0:c.full_name)??"—")}</p>
                    <p class="text-xs text-[var(--muted)]">${l(((m=s.council_positions)==null?void 0:m.position_name)??"—")}</p>
                  </div>
                </div>
                ${(f=s.council_applications)!=null&&f.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(s.council_applications.motivation)}</p>`:""}
                <textarea class="nom-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]" data-id="${s.id}" rows="2" placeholder="ความเห็น (ไม่บังคับถ้าอนุมัติ, บังคับถ้าไม่อนุมัติ)"></textarea>
                <div class="flex gap-2">
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${s.id}" data-approve="false">❌ ไม่อนุมัติ</button>
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${s.id}" data-approve="true">✅ อนุมัติ</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")),n||'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>'}const Xi={general:Hi,positions:Wi,criteria:Ji,modules:Qi};function Zi(){return d.isAdmin||d.isCouncilAdvisor?(Rr.some(e=>e.id===We)||(We="general"),`
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${Rr.map(e=>`
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${e.id===We?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="${e.id}">${l(e.label)}</button>`).join("")}
    </div>
    <div>${Xi[We]()}</div>`):'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>'}let kt="duty",Z=null,Ye=null,$e=null;const Jr=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];function Ba(){const e=new Date,t=e.getDay(),r=(t===0?-6:1)-t,n=new Date(e);return n.setDate(e.getDate()+r),n.setHours(0,0,0,0),n.toISOString().slice(0,10)}async function el(){const e=d.membership[0];if(!e){Z=[],Ye=new Set,$e=[],g();return}const[t,r]=await Promise.all([bs(e.id).catch(()=>[]),vs(e.id).catch(()=>[])]);Z=t,$e=r,Ye=await xs(t.map(n=>n.id),Ba()).catch(()=>new Set),g()}function tl(){const e=d.membership[0];return e?Z===null?(el(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>'):`${`
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${kt==="duty"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${kt==="work"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="work">งานของฉัน</button>
    </div>`}${kt==="duty"?rl(e):al()}`:'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>'}function rl(e){var n;const t=Z.filter(i=>Ye.has(i.id)).length,r=Z.length?Math.round(t/Z.length*100):0;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${D(d.student,"w-14 h-18")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((n=e.council_positions)==null?void 0:n.position_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${e.source==="elected"?"🗳️ มาจากการเลือกตั้ง":"✅ ได้รับการแต่งตั้ง"} · ${e.term_start_date?new Date(e.term_start_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${t}/${Z.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${r}%"></div></div>
      ${Z.length?`<div class="space-y-1.5">${Z.map(i=>{const o=Ye.has(i.id);return`
        <label class="flex items-center gap-2.5 rounded-xl border ${o?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)]"} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${i.id}" ${o?"checked":""} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${o?"text-[#106143] line-through":"text-[var(--ink-2)]"} truncate">${l(i.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${i.day_of_week!=null?Jr[i.day_of_week]:""}${i.time_range?" · "+l(i.time_range):""}${i.location?" · "+l(i.location):""}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${i.id}">✕</button>
        </label>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${Jr.map((i,o)=>`<option value="${o}">${i}</option>`).join("")}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`}function al(){const e=$e.filter(n=>n.status!=="done"),t=$e.filter(n=>n.status==="done"),r=n=>`
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
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${t.length}/${$e.length} เสร็จแล้ว)</p>
      ${$e.length?`<div class="space-y-2">${[...e,...t].map(r).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>'}
    </div>`}function nl(e){var u;(u=document.getElementById("council-my-qr-modal"))==null||u.remove();const t=document.createElement("div");t.id="council-my-qr-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${l(e.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-my-qr-canvas"),n=async()=>{const b=`SQ:${e.student_code}:${Math.floor(Date.now()/1e3)}`;try{await Ws.toCanvas(r,b,{width:190,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch{}};n();let i=60;const o=t.querySelector("#council-qr-timer"),a=setInterval(()=>{i-=1,o&&(o.textContent=String(i)),i<=0&&(i=60,n())},1e3),s=()=>{clearInterval(a),t.remove()};t.querySelector("#btn-close-council-qr").addEventListener("click",s),t.addEventListener("click",b=>{b.target===t&&s()})}let Mt=null;async function sl(){var t;const e=d.membership[0];if(!e||!d.student){Mt={activities:[],myAttendance:[]},g();return}Mt=await ms(d.student.id,(t=e.council_positions)==null?void 0:t.gender,O).catch(()=>({activities:[],myAttendance:[]})),g()}const ol={planned:["ยังไม่จัด","text-[var(--gold-ink)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary)]"],completed:["เสร็จแล้ว","text-[#106143]"],cancelled:["ยกเลิก","text-[var(--muted-2)]"]};function il(){if(!d.membership[0])return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>';if(Mt===null)return sl(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const{activities:t,myAttendance:r}=Mt,n=new Set(r.map(m=>m.activity_id)),i=t.filter(m=>m.counts_for_evaluation),o=i.filter(m=>n.has(m.id)).length,a=i.length?Math.round(o/i.length*100):null,s=d.cfg.council_min_attendance_pct?Number(d.cfg.council_min_attendance_pct):null,u=s==null||a==null?null:a>=s,b=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📈 ผลเช็คชื่อของฉัน</p>
      ${i.length?`
        <div class="flex items-end gap-2 mb-2">
          <span class="text-3xl font-bold text-[var(--primary)]">${a}%</span>
          <span class="text-xs text-[var(--muted-2)] mb-1">${o}/${i.length} กิจกรรม</span>
        </div>
        <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-2"><div class="h-full ${u===!1?"bg-[var(--bad)]":"bg-[var(--primary)]"}" style="width:${a}%"></div></div>
        ${s!=null?`<p class="text-xs ${u?"text-[var(--ok)]":"text-[var(--bad)]"} font-bold">${u?"✅ ผ่านเกณฑ์ขั้นต่ำ":"⚠️ ยังไม่ถึงเกณฑ์ขั้นต่ำ"} ${s}%</p>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีการตั้งเกณฑ์ขั้นต่ำจากผู้ดูแล</p>'}
      `:'<p class="text-xs text-[var(--muted-2)] py-4 text-center">ยังไม่มีกิจกรรมที่นับผลในระบบ</p>'}
      <p class="text-[0.625rem] text-[var(--muted-2)] mt-2">นับจากกิจกรรมที่เกิดขึ้นแล้วและถูกตั้งค่าให้ "นับผล" เท่านั้น — ผลนี้เป็นข้อมูลให้ครูที่ปรึกษาใช้ประกอบการประเมิน ไม่ได้ตัดสินอัตโนมัติ</p>
    </div>`,c=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📅 กิจกรรม/กำหนดการ</p>
      ${t.length?`<div class="space-y-2">${t.map(m=>{const f=n.has(m.id),[x,p]=ol[m.status]??["—","text-[var(--muted)]"];return`
        <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(m.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${m.activity_date?new Date(m.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} · <span class="${p}">${x}</span>${m.counts_for_evaluation?"":' · <span class="text-[var(--muted-2)]">ไม่นับผล</span>'}</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${f?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--bad-soft)] text-[var(--bad)]"}">${f?"✅ เช็คชื่อแล้ว":"✗ ยังไม่เช็คชื่อ"}</span>
        </div>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-8">ยังไม่มีกิจกรรม</p>'}
    </div>`;return`${b}${c}`}const ot={};async function ll(e){ot[e]=await ps(e).catch(()=>[]),g()}function dl(){var a;if(!d.isChair)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>';const e=be((a=d.student)==null?void 0:a.gender);if(!e)return"";if(ot[e]===void 0)return ll(e),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const t=ot[e],r=t.filter(s=>s.status==="done").length,n=d.members.filter(s=>{var u;return((u=s.council_positions)==null?void 0:u.gender)===e}),i=`
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${q[e]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${n.map(s=>{var u,b;return`<option value="${s.id}">${l(((u=s.students)==null?void 0:u.full_name)??"—")} (${l(((b=s.council_positions)==null?void 0:b.position_name)??"")})</option>`}).join("")}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`;if(!t.length)return`${i}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`;const o=s=>{var u,b,c;return`
    <div class="rounded-xl border ${s.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3 flex items-center gap-3">
      ${D((u=s.council_members)==null?void 0:u.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((c=(b=s.council_members)==null?void 0:b.students)==null?void 0:c.full_name)??"—")}</p>
        <p class="text-xs text-[var(--ink-2)]">${l(s.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${s.due_date?"กำหนดส่ง "+new Date(s.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${s.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${s.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${s.id}">ลบ</button>
      </div>
    </div>`};return`${i}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${r}/${t.length} เสร็จแล้ว)</p><div class="space-y-2">${t.map(o).join("")}</div>`}let Oe=null,Pe=null,lr=null;const Bt={};async function $r(){const[e,t,r]=await Promise.all([Pt("council_advisor").catch(()=>[]),Pt("student_affairs_head").catch(()=>[]),Pt("school_director").catch(()=>[])]);G=e,Oe=t,Pe=r,g()}async function cl(e){Bt[e]=await sa(e).catch(()=>[]),g()}function ul(e){if(Bt[e]===void 0)return cl(e),'<p class="text-xs text-[var(--muted-2)] py-2">⏳ กำลังโหลด...</p>';const t=new Set(Bt[e]);return`
    <form class="advisor-dept-form mt-3 pt-3 border-t border-[var(--line-soft)]" data-teacher-id="${e}">
      <p class="text-xs font-semibold text-[var(--muted)] mb-2">ติ๊กฝ่ายที่ครูคนนี้รับผิดชอบตรวจ/รับรองเอกสารโครงการ</p>
      <div class="grid grid-cols-2 gap-1.5 mb-2">
        ${d.positions.map(r=>`
          <label class="flex items-center gap-1.5 text-xs text-[var(--ink-2)]">
            <input type="checkbox" name="pos_${r.id}" value="${r.id}" ${t.has(r.id)?"checked":""} />
            ${l(r.position_name)} (${l(q[r.gender]??"")})
          </label>`).join("")}
      </div>
      <button type="submit" class="px-4 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกฝ่าย</button>
    </form>`}function pl(e,t,r){const n=lr===e.id;return`
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
      ${r&&n?ul(e.id):""}
    </div>`}function ml(){if(!d.isAdmin)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>';if(G===null)return $r(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=`<datalist id="council-teacher-datalist">${te.map(r=>`<option value="${l(r.full_name)} · รหัส ${r.id}"></option>`).join("")}</datalist>`,t=(r,n,i,o)=>`
    <div class="mb-5">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${r} (${n.length} คน)</p>
      <form class="perms-add-form bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 mb-2 flex gap-2" data-position="${i}">
        <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
          class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
      </form>
      ${n.length?`<div class="space-y-2">${n.map(a=>pl(a,i,o)).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มี</p>'}
    </div>`;return`${e}
    ${t("ครูที่ปรึกษาสภานักเรียน",G,"council_advisor",!0)}
    ${t("หัวหน้าฝ่ายกิจการนักเรียน",Oe,"student_affairs_head",!1)}
    ${t("ผู้อำนวยการ",Pe,"school_director",!1)}`}function bl(e){const t=e.getContext("2d"),r=()=>{t.fillStyle="#fff",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#0f172a"};r(),t.lineWidth=4,t.lineCap="round";let n=!1,i=!1;const o=a=>{const s=e.getBoundingClientRect();return{x:(a.clientX-s.left)*e.width/s.width,y:(a.clientY-s.top)*e.height/s.height}};return e.addEventListener("pointerdown",a=>{var u;n=!0,(u=e.setPointerCapture)==null||u.call(e,a.pointerId);const s=o(a);t.beginPath(),t.moveTo(s.x,s.y)}),e.addEventListener("pointermove",a=>{if(!n)return;const s=o(a);t.lineTo(s.x,s.y),t.stroke(),i=!0}),e.addEventListener("pointerup",()=>{n=!1}),e.addEventListener("pointercancel",()=>{n=!1}),{clear:()=>{r(),i=!1},isDrawn:()=>i,toBlob:()=>new Promise(a=>e.toBlob(a,"image/png"))}}function Qr(e){var i;(i=document.getElementById("council-profile-modal"))==null||i.remove();const t=document.createElement("div");t.id="council-profile-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
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
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-signature-canvas"),n=bl(r);t.querySelector("#council-signature-clear").addEventListener("click",()=>n.clear()),t.querySelector("#btn-close-council-profile").addEventListener("click",()=>t.remove()),t.addEventListener("click",o=>{o.target===t&&t.remove()}),t.querySelector("#council-profile-save").addEventListener("click",async()=>{var a,s;const o=t.querySelector("#council-profile-save");o.disabled=!0,o.textContent="กำลังบันทึก...";try{const u=(a=t.querySelector("#council-profile-photo-file").files)==null?void 0:a[0];if(u){const m=await Ja(e.id,u);await Ls(e.id,m),d.teacher&&d.teacher.id===e.id&&(d.teacher.image_url=m)}const c=((s=t.querySelector("#council-signature-file").files)==null?void 0:s[0])||(n.isDrawn()?await n.toBlob():null);if(c){const m=await Qa(e.id,c);await Cs(e.id,m),d.teacher&&d.teacher.id===e.id&&(d.teacher.signature_url=m)}y("บันทึกแล้ว ✅","success"),t.remove(),G=null,Oe=null,Pe=null,g()}catch(u){y("บันทึกไม่สำเร็จ: "+E(u),"error"),o.disabled=!1,o.textContent="บันทึก"}})}function vl(){if(!d.teacher)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะบัญชีครูเท่านั้น</p>';const e=d.teacher;return`
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
    </div>`}const xl={overview:va,regulation:()=>no(d,g),forms:()=>Xt({kind:"forms",esc:l,canOpenDocs:d.isAdmin||d.role==="teacher"||d.isChair}),yla:ei,activityDocs:()=>Xt({kind:"activityDocs",esc:l}),endorse:mi,apps:li,interview:di,appoint:ci,news:Ai,activities:hi,eval:Li,docs:zi,candidates:Uo,roster:pi,result:fa,settings:Zi,chairteam:Ki,myduty:tl,mysummary:il,assignments:dl,peerEndorse:vi,perms:ml,myCouncilProfile:vl,dashboard:ii},fl={apply:{new:No,mine:Yo},election:{status:fa}};function g(){if(Ke){gl();return}xr(!0);const e=$o();e.some(r=>r.id===we)||Ee("overview"),wo(e);const t=xl[we]||va;dr.innerHTML=`<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${t()}</div>`,Oa()}function gl(){var r;xr(!1);const e=yo[Ke];e.subtabs.some(n=>n.id===le)||(le=e.subtabs[0].id),document.getElementById("council-view-title").textContent=e.title;const t=((r=fl[Ke])==null?void 0:r[le])??(()=>"");dr.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${e.title}</h2>
      </div>
      ${e.subtabs.length>1?`
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${e.subtabs.map(n=>`
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${n.id===le?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}"
            data-subtab="${n.id}">${l(n.label)}</button>`).join("")}
      </div>`:""}
      <div>${t()}</div>
    </div>`,document.getElementById("btn-flow-close").addEventListener("click",()=>{Ke=null,le=null,xt(),g()}),document.querySelectorAll(".flow-subtab-btn").forEach(n=>{n.addEventListener("click",()=>{le=n.dataset.subtab,g()})}),Oa()}function Oa(){var e,t,r,n,i,o,a,s,u,b,c,m,f,x,p,v,$,S,C,I;so(d,g),po({esc:l,onKindChange:h=>{Ee(h==="forms"||h==="yla"||h==="activityDocs"?h:"forms"),g()}}),ti(),document.querySelectorAll(".flow-entry-btn").forEach(h=>{h.addEventListener("click",()=>{Ke=h.dataset.flow,le=null,g()})}),document.querySelectorAll(".goto-view").forEach(h=>{h.addEventListener("click",()=>{Ee(h.dataset.view),g()})}),document.querySelectorAll(".roster-gender-tab-btn").forEach(h=>{h.addEventListener("click",()=>{re=h.dataset.gender,g()})}),document.querySelectorAll(".btn-view-my-app-detail").forEach(h=>{h.addEventListener("click",()=>{Xe=Number(h.dataset.id),g()})}),(e=document.getElementById("btn-my-app-detail-close"))==null||e.addEventListener("click",()=>{Xe=null,g()}),(t=document.getElementById("my-app-detail-backdrop"))==null||t.addEventListener("click",h=>{h.target.id==="my-app-detail-backdrop"&&(Xe=null,g())}),(r=document.getElementById("btn-pick-my-app-endorser"))==null||r.addEventListener("click",h=>{si(Number(h.target.dataset.appId),h.target.dataset.gender)}),(n=document.getElementById("btn-add-council-member"))==null||n.addEventListener("click",()=>{Or({mode:"add",gender:re})}),document.querySelectorAll(".btn-edit-council-member").forEach(h=>{h.addEventListener("click",()=>{var k;const _=d.members.find(A=>A.id===Number(h.dataset.id));_&&Or({mode:"edit",gender:(k=_.council_positions)==null?void 0:k.gender,member:_})})}),document.querySelectorAll(".btn-remove-council-member").forEach(h=>{h.addEventListener("click",async()=>{if(confirm("ลบสมาชิกสภาคนนี้ออกจากทำเนียบ? (จะเก็บประวัติไว้ ไม่ได้ลบข้อมูลทิ้งถาวร)"))try{await on(Number(h.dataset.id)),y("ลบแล้ว ✅","success"),d.members=await ze().catch(()=>d.members),g()}catch(_){y("ลบไม่สำเร็จ: "+E(_),"error")}})}),document.querySelectorAll(".btn-toggle-can-create").forEach(h=>{h.addEventListener("click",async()=>{const _=Number(h.dataset.id),k=h.dataset.value==="1";h.disabled=!0;try{await ln(_,k);const A=d.members.find(j=>j.id===_);A&&(A.can_create_activities=k);const T=d.membership.find(j=>j.id===_);T&&(T.can_create_activities=k),y(k?"ให้สิทธิ์สร้างกิจกรรมแล้ว ✅":"ถอนสิทธิ์แล้ว ✅","success"),g()}catch(A){y("บันทึกไม่สำเร็จ: "+E(A),"error"),h.disabled=!1}})}),document.querySelectorAll(".btn-peer-endorse").forEach(h=>{h.addEventListener("click",()=>xi(h.dataset.id))}),(i=document.getElementById("btn-open-apply"))==null||i.addEventListener("click",()=>{if(!It(d.student)){y(Zt(d.student),"warning");return}St=!0;const h=xo();z=h&&h.step>1?h:null,z||(F=Qe(Je())),g()}),(o=document.getElementById("btn-cancel-apply"))==null||o.addEventListener("click",()=>{xt(),z=null,g()}),(a=document.getElementById("btn-apply-draft-resume"))==null||a.addEventListener("click",()=>{N={...N,...z.data},P=z.step;const h=z.certTitles||[];F=h.length?h.map(_=>({file:null,title:_||"",previewUrl:null,isPdf:!1})):Qe(Je()),z=null,g()}),(s=document.getElementById("btn-apply-draft-discard"))==null||s.addEventListener("click",()=>{qr(),xt(),z=null,St=!0,g()}),(u=document.getElementById("btn-apply-back"))==null||u.addEventListener("click",()=>{P=Math.max(1,P-1),X(),g()}),(b=document.getElementById("apply-step1-form"))==null||b.addEventListener("submit",h=>{h.preventDefault();const _=h.target.positionId.value;if(!_){y("กรุณาเลือกตำแหน่ง","warning");return}N.positionId=_,P=2,X(),g()}),(c=document.getElementById("apply-step2-form"))==null||c.addEventListener("submit",h=>{h.preventDefault();const _=h.target,k=_.gpaGeneral.value,A=_.gpaReligious.value,T=_.motivation.value.trim(),j=Number(k),W=Number(A);if(!k||!A||j<0||j>4||W<0||W>4){y("กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)","warning");return}const K=Number(d.cfg.council_min_gpa||2.5),M=Number(d.cfg.council_min_gpa_religious||2.5);if(j<K||W<M){y(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${K}, ศาสนา ≥ ${M})`,"warning");return}if(T.length<10){y("กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร","warning");return}N.gpaGeneral=k,N.gpaReligious=A,N.motivation=T,P=3,X(),g()}),(m=document.getElementById("apply-photo"))==null||m.addEventListener("change",h=>{var k;const _=((k=h.target.files)==null?void 0:k[0])??null;he=_,se&&URL.revokeObjectURL(se),se=_?URL.createObjectURL(_):null,g()}),(f=document.getElementById("btn-apply-step3-next"))==null||f.addEventListener("click",()=>{if(!he){y("กรุณาแนบรูปถ่าย","warning");return}P=4,X(),g()}),(x=document.getElementById("apply-step4-form"))==null||x.addEventListener("submit",h=>{h.preventDefault();const _=h.target.videoUrl.value.trim();if(!/^https?:\/\//.test(_)){y("กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)","warning");return}N.videoUrl=_,P=5,X(),g()}),document.querySelectorAll(".cert-title-input").forEach(h=>{h.addEventListener("input",()=>{F[+h.dataset.idx].title=h.value,X()})}),document.querySelectorAll(".cert-file-input").forEach(h=>{h.addEventListener("change",_=>{var j;const k=+h.dataset.idx,A=((j=_.target.files)==null?void 0:j[0])??null,T=F[k];T.previewUrl&&URL.revokeObjectURL(T.previewUrl),T.file=A,T.isPdf=(A==null?void 0:A.type)==="application/pdf",T.previewUrl=A&&!T.isPdf?URL.createObjectURL(A):null,g()})}),(p=document.getElementById("btn-add-cert"))==null||p.addEventListener("click",()=>{F.push(...Qe(1)),X(),g()}),document.querySelectorAll(".btn-remove-cert").forEach(h=>{h.addEventListener("click",()=>{const _=+h.dataset.idx,k=F[_];k.previewUrl&&URL.revokeObjectURL(k.previewUrl),F.splice(_,1),X(),g()})}),(v=document.getElementById("btn-apply-step5-next"))==null||v.addEventListener("click",()=>{const h=F.filter(k=>k.file&&k.title.trim()).length,_=Je();if(h<_){y(`กรุณาแนบเกียรติบัตร/รางวัลอย่างน้อย ${_} รายการ (พร้อมชื่อรางวัล)`,"warning");return}fr()?P=6:Ne=!0,X(),g()}),document.querySelectorAll(".btn-pick-peer-endorser").forEach(h=>{h.addEventListener("click",()=>{N.peerEndorserId=h.dataset.id,X(),g()})}),($=document.getElementById("btn-apply-step6-next"))==null||$.addEventListener("click",()=>{if(!N.peerEndorserId){y("กรุณาเลือกพี่สภาที่ต้องการให้รับรอง","warning");return}Ne=!0,X(),g()}),(S=document.getElementById("btn-apply-edit"))==null||S.addEventListener("click",()=>{Ne=!1,g()}),(C=document.getElementById("apply-confirm-backdrop"))==null||C.addEventListener("click",h=>{h.target.id==="apply-confirm-backdrop"&&(Ne=!1,g())}),(I=document.getElementById("btn-apply-confirm-submit"))==null||I.addEventListener("click",async()=>{if(!It(d.student)){y(Zt(d.student),"error");return}const h=document.getElementById("btn-apply-confirm-submit");h.disabled=!0,h.textContent="กำลังส่ง...";try{let _=null;he&&(_=await Ua(d.student.id,he));const k=F.filter(T=>T.file&&T.title.trim()),A=await Promise.all(k.map(async T=>({title:T.title.trim(),url:await Ha(d.student.id,T.file)})));await dn({studentId:d.student.id,positionId:Number(N.positionId),academicYear:Number(d.cfg.academicYear)||new Date().getFullYear()+543,motivation:N.motivation,photoUrl:_,gpaGeneral:Number(N.gpaGeneral),gpaReligious:Number(N.gpaReligious),introVideoUrl:N.videoUrl,certificates:A,requestedPeerEndorserId:N.peerEndorserId?Number(N.peerEndorserId):null}),y("ส่งใบสมัครสำเร็จ ✅","success"),qr(),xt(),await ma(),le="mine",g()}catch(_){y("ส่งใบสมัครไม่สำเร็จ: "+E(_),"error"),h.disabled=!1,h.textContent="✅ ยืนยันการสมัคร"}}),document.querySelectorAll(".endorse-phrase-chip").forEach(h=>{h.addEventListener("click",()=>{const _=document.querySelector(`.endorse-comment[data-id="${h.dataset.target}"]`);if(!_)return;const k=_.value.trim();_.value=k?k+" "+h.dataset.phrase:h.dataset.phrase,_.focus()})}),document.querySelectorAll(".btn-endorse-confirm").forEach(h=>{h.addEventListener("click",()=>Pr(h.dataset.id,"confirm"))}),document.querySelectorAll(".btn-endorse-decline").forEach(h=>{h.addEventListener("click",()=>Pr(h.dataset.id,"decline"))}),Ll(),yl(),Cl(),Sl(),Il(),Al(),El(),kl(),wl(),_l(),$l(),hl()}function yl(){var e,t,r,n;document.querySelectorAll(".interview-gender-tab-btn").forEach(i=>{i.addEventListener("click",()=>{Ie=i.dataset.gender,g()})}),document.querySelectorAll(".interview-filter-btn").forEach(i=>{i.addEventListener("click",()=>{Le=i.dataset.filter,g()})}),(e=document.getElementById("interview-search"))==null||e.addEventListener("change",i=>{Lt=i.target.value,g()}),(t=document.querySelector(".interview-clear-search"))==null||t.addEventListener("click",()=>{Lt="",g()}),document.querySelectorAll(".appointment-gender-tab-btn").forEach(i=>{i.addEventListener("click",()=>{Ce=i.dataset.gender,g()})}),document.querySelectorAll(".appointment-filter-btn").forEach(i=>{i.addEventListener("click",()=>{Te=i.dataset.filter,g()})}),(r=document.getElementById("appointment-search"))==null||r.addEventListener("change",i=>{Ct=i.target.value,g()}),(n=document.querySelector(".appointment-clear-search"))==null||n.addEventListener("click",()=>{Ct="",g()})}function hl(){var e;document.querySelectorAll(".perms-add-form").forEach(t=>{t.addEventListener("submit",async r=>{var c;r.preventDefault();const n=r.target,i=n.dataset.position,a=n.teacherText.value.trim().match(/· รหัส (\d+)$/);if(!a){y("กรุณาเลือกชื่อครูจากรายการที่แสดง","warning");return}const s=Number(a[1]);if((c={council_advisor:G,student_affairs_head:Oe,school_director:Pe}[i])!=null&&c.some(m=>m.id===s)){y("ครูคนนี้อยู่ในรายชื่อนี้แล้ว","warning");return}const b=n.querySelector('button[type="submit"]');b.disabled=!0,b.textContent="กำลังบันทึก...";try{await ls(s,i),y("เพิ่มแล้ว ✅","success"),G=null,Oe=null,Pe=null,g()}catch(m){y("บันทึกไม่สำเร็จ: "+E(m),"error"),b.disabled=!1,b.textContent="เพิ่ม"}})}),document.querySelectorAll(".btn-remove-teacher-position").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ถอดถอนออกจากรายชื่อนี้?"))try{await ds(Number(t.dataset.id),t.dataset.position),G=null,Oe=null,Pe=null,g()}catch(r){y("ถอดถอนไม่สำเร็จ: "+E(r),"error")}})}),document.querySelectorAll(".btn-toggle-advisor-depts").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);lr=lr===r?null:r,g()})}),document.querySelectorAll(".advisor-dept-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.teacherId),i=d.positions.filter(a=>{var s;return(s=t[`pos_${a.id}`])==null?void 0:s.checked}).map(a=>a.id),o=t.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังบันทึก...";try{await cs(n,i),Bt[n]=i,y("บันทึกฝ่ายที่ดูแลแล้ว ✅","success"),g()}catch(a){y("บันทึกไม่สำเร็จ: "+E(a),"error"),o.disabled=!1,o.textContent="บันทึกฝ่าย"}})}),document.querySelectorAll(".btn-edit-council-profile").forEach(t=>{t.addEventListener("click",()=>{Qr({id:Number(t.dataset.id),full_name:t.dataset.name,image_url:t.dataset.image||null,signature_url:t.dataset.signature||null})})}),(e=document.getElementById("btn-edit-my-council-profile"))==null||e.addEventListener("click",()=>{d.teacher&&Qr(d.teacher)})}function _l(){var e,t;document.querySelectorAll(".myduty-subtab-btn").forEach(r=>{r.addEventListener("click",()=>{kt=r.dataset.tab,g()})}),(e=document.getElementById("routine-add-form"))==null||e.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,i=n.task.value.trim();if(!i){y("กรุณากรอกงานที่ต้องทำ","warning");return}const o=d.membership[0];try{await rs({memberId:o.id,dayOfWeek:n.dayOfWeek.value===""?null:Number(n.dayOfWeek.value),timeRange:n.timeRange.value.trim(),task:i,location:n.location.value.trim()}),Z=null,g()}catch(a){y("เพิ่มไม่สำเร็จ: "+E(a),"error")}}),document.querySelectorAll(".btn-remove-routine").forEach(r=>{r.addEventListener("click",async()=>{if(confirm("ลบรูทีนนี้?"))try{await as(Number(r.dataset.id)),Z=null,g()}catch(n){y("ลบไม่สำเร็จ: "+E(n),"error")}})}),document.querySelectorAll(".routine-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),i=r.checked;r.disabled=!0;try{await ns({routineId:n,weekStart:Ba(),done:i}),i?Ye.add(n):Ye.delete(n),g()}catch(o){y("บันทึกไม่สำเร็จ: "+E(o),"error"),r.checked=!i,r.disabled=!1}})}),document.querySelectorAll(".assignment-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),i=r.checked?"done":"open";r.disabled=!0;try{await ss(n,i);const o=$e.find(a=>a.id===n);o&&(o.status=i),g()}catch(o){y("บันทึกไม่สำเร็จ: "+E(o),"error"),r.checked=!r.checked,r.disabled=!1}})}),(t=document.getElementById("btn-show-my-council-qr"))==null||t.addEventListener("click",()=>{d.student&&nl(d.student)})}function $l(){var e;(e=document.getElementById("assignment-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.memberId.value),i=r.task.value.trim();if(!n||!i){y("กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน","warning");return}const o=r.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังบันทึก...";try{await os({memberId:n,task:i,dueDate:r.dueDate.value||null,assignedByStudentId:d.student.id}),y("มอบหมายงานแล้ว ✅","success");const a=be(d.student.gender);delete ot[a],g()}catch(a){y("บันทึกไม่สำเร็จ: "+E(a),"error"),o.disabled=!1,o.textContent="มอบหมายงาน"}}),document.querySelectorAll(".btn-delete-assignment").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบงานที่มอบหมายนี้?"))try{await is(Number(t.dataset.id));const r=be(d.student.gender);delete ot[r],g()}catch(r){y("ลบไม่สำเร็จ: "+E(r),"error")}})})}function wl(){var e;(e=document.getElementById("nominate-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.positionId.value),i=Number(r.applicationId.value);if(!n||!i){y("กรุณาเลือกตำแหน่งและผู้สมัคร","warning");return}const o=r.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังเสนอ...";try{await es({applicationId:i,positionId:n,proposedByStudentId:d.student.id}),y("เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅","success");const a=be(d.student.gender);delete ke[a],delete rt[a],g()}catch(a){y("เสนอไม่สำเร็จ: "+E(a),"error"),o.disabled=!1,o.textContent="เสนอต่อครูที่ปรึกษาสภา"}}),document.querySelectorAll(".btn-decide-nomination").forEach(t=>{t.addEventListener("click",async()=>{var a,s;const r=Number(t.dataset.id),n=t.dataset.approve==="true",i=((a=document.querySelector(`.nom-comment[data-id="${r}"]`))==null?void 0:a.value.trim())??"";if(!n&&!i){y("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}const o=t.closest("[data-nom-card]");o==null||o.querySelectorAll("button").forEach(u=>{u.disabled=!0});try{await ts({nominationId:r,approve:n,teacherId:((s=d.teacher)==null?void 0:s.id)??null,comment:i}),y(n?"อนุมัติแล้ว ✅":"ไม่อนุมัติแล้ว","success"),delete st.M,delete st.W,delete rt.M,delete rt.W,delete ke.M,delete ke.W,d.members=await ze().catch(()=>d.members),g()}catch(u){y("บันทึกไม่สำเร็จ: "+E(u),"error"),o==null||o.querySelectorAll("button").forEach(b=>{b.disabled=!1})}})})}function kl(){var e,t,r,n,i,o;document.querySelectorAll(".settings-tab-btn").forEach(a=>{a.addEventListener("click",()=>{We=a.dataset.tab,g()})}),(e=document.getElementById("settings-general-form"))==null||e.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,u=s.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังบันทึก...";try{const b={council_name:s.council_name.value.trim(),council_logo_url:s.council_logo_url.value.trim(),council_theme_side_m:s.council_theme_side_m.value,council_theme_side_w:s.council_theme_side_w.value,council_term_start_semester:s.council_term_start_semester.value.trim(),council_term_start_year:s.council_term_start_year.value.trim(),council_term_end_semester:s.council_term_end_semester.value.trim(),council_term_end_year:s.council_term_end_year.value.trim(),council_min_gpa:s.council_min_gpa.value,council_min_gpa_religious:s.council_min_gpa_religious.value,council_eligible_grade_levels:s.council_eligible_grade_levels.value.trim(),council_min_certificates:s.council_min_certificates.value,council_min_attendance_pct:s.council_min_attendance_pct.value,council_require_teacher_endorsement:s.council_require_teacher_endorsement.checked?"true":"false",council_require_peer_endorsement:s.council_require_peer_endorsement.checked?"true":"false",council_apply_opens_at:s.council_apply_opens_at.value?new Date(s.council_apply_opens_at.value).toISOString():"",council_apply_closes_at:s.council_apply_closes_at.value?new Date(s.council_apply_closes_at.value).toISOString():"",council_featured_phase:s.council_featured_phase.value,council_visible_to_all:s.council_visible_to_all.checked?"true":"false",council_test_student_codes:s.council_test_student_codes.value.trim(),council_election_thank_you_message:s.council_election_thank_you_message.value.trim(),council_signer_advisor_name:s.council_signer_advisor_name.value.trim(),council_signer_director_name:s.council_signer_director_name.value.trim()};await ct(b),d.cfg={...d.cfg,...b},ba(d.cfg),y("บันทึกการตั้งค่าแล้ว ✅","success"),g()}catch(b){y("บันทึกไม่สำเร็จ: "+E(b),"error"),u.disabled=!1,u.textContent="💾 บันทึกการตั้งค่า"}}),document.querySelectorAll(".position-row-form").forEach(a=>{a.addEventListener("submit",async s=>{s.preventDefault();const u=Number(a.dataset.id),b=a.position_name.value.trim(),c=Number(a.seats_count.value);if(!b||!c){y("กรอกชื่อและจำนวนที่นั่งให้ครบ","warning");return}try{await Hn(u,{position_name:b,seats_count:c}),d.positions=await vt(),y("บันทึกแล้ว ✅","success"),g()}catch(m){y("บันทึกไม่สำเร็จ: "+E(m),"error")}})}),document.querySelectorAll(".btn-delete-position").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)"))try{await Wn(Number(a.dataset.id)),d.positions=await vt(),g()}catch(s){y("ลบไม่สำเร็จ: "+E(s),"error")}})}),document.querySelectorAll(".position-add-form").forEach(a=>{a.addEventListener("submit",async s=>{s.preventDefault();const u=a.dataset.gender,b=a.position_name.value.trim(),c=Number(a.seats_count.value)||1;if(!b){y("กรอกชื่อตำแหน่ง","warning");return}try{await Jn({gender:u,positionName:b,seatsCount:c,isElected:!1,sortOrder:999}),d.positions=await vt(),y("เพิ่มตำแหน่งแล้ว ✅","success"),g()}catch(m){y("เพิ่มไม่สำเร็จ: "+E(m),"error")}})}),(t=document.getElementById("interview-criterion-form"))==null||t.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,u=s.name.value.trim(),b=Number(s.weight.value);if(!u||!b){y("กรอกชื่อหัวข้อและคะแนนให้ครบ","warning");return}try{await Qn({name:u,weight:b}),Q=null,g()}catch(c){y("บันทึกไม่สำเร็จ: "+E(c),"error")}}),document.querySelectorAll(".btn-remove-interview-criterion").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?"))try{await Kn(Number(a.dataset.id)),Q=null,g()}catch(s){y("ลบไม่สำเร็จ: "+E(s),"error")}})}),(r=document.getElementById("settings-video-form"))==null||r.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,u=s.council_video_max_minutes.value.trim(),b=s.council_video_brief.value.split(`
`).map(c=>c.trim()).filter(Boolean);try{const c={council_video_max_minutes:u,council_video_brief:JSON.stringify(b)};await ct(c),d.cfg={...d.cfg,...c},y("บันทึกแล้ว ✅","success"),g()}catch(c){y("บันทึกไม่สำเร็จ: "+E(c),"error")}}),(n=document.getElementById("settings-doc-options-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,u=b=>b.split(`
`).map(c=>c.trim()).filter(Boolean);try{const b={council_doc_plan_areas:JSON.stringify(u(s.council_doc_plan_areas.value)),council_doc_project_types:JSON.stringify(u(s.council_doc_project_types.value)),council_doc_school_strategies:JSON.stringify(u(s.council_doc_school_strategies.value)),council_doc_education_standards:JSON.stringify(u(s.council_doc_education_standards.value))};await ct(b),d.cfg={...d.cfg,...b},y("บันทึกแล้ว ✅","success"),g()}catch(b){y("บันทึกไม่สำเร็จ: "+E(b),"error")}}),(i=document.getElementById("phrase-form"))==null||i.addEventListener("submit",async a=>{a.preventDefault();const u=a.target.phrase.value.trim();if(u)try{await Xn({phrase:u,sortOrder:(ce==null?void 0:ce.length)??0}),ce=null,g()}catch(b){y("บันทึกไม่สำเร็จ: "+E(b),"error")}}),document.querySelectorAll(".btn-remove-phrase").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบข้อความนี้?"))try{await Zn(Number(a.dataset.id)),ce=null,g()}catch(s){y("ลบไม่สำเร็จ: "+E(s),"error")}})}),document.querySelectorAll(".cert-template-type-radio").forEach(a=>{a.addEventListener("change",()=>{var u,b,c;const s=((u=document.querySelector('input[name="template_type"]:checked'))==null?void 0:u.value)==="custom";(b=document.getElementById("cert-template-preset-select"))==null||b.classList.toggle("hidden",s),(c=document.getElementById("cert-template-file-input"))==null||c.classList.toggle("hidden",!s)})}),(o=document.getElementById("cert-template-form"))==null||o.addEventListener("submit",async a=>{var m,f;a.preventDefault();const s=a.target,u=s.name.value.trim();if(!u)return;const b=s.template_type.value==="custom",c=s.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{let x=null;if(b){const $=(m=s.background_image.files)==null?void 0:m[0];if(!$){y("กรุณาอัปโหลดรูปพื้นหลังเทมเพลต","warning"),c.disabled=!1,c.textContent="เพิ่มเทมเพลต";return}x=await Wa($)}const p=b?null:s.preset_key.value,v=Fs(b?"custom":p);b&&(v.background={type:"image",imageUrl:x}),await Ys({name:u,type:b?"custom":"preset",presetKey:p,backgroundImageUrl:x,layout:v,createdByTeacherId:((f=d.teacher)==null?void 0:f.id)??null}),y("เพิ่มเทมเพลตแล้ว ✅","success"),J=null,g()}catch(x){y("บันทึกไม่สำเร็จ: "+E(x),"error"),c.disabled=!1,c.textContent="เพิ่มเทมเพลต"}}),document.querySelectorAll(".btn-remove-cert-template").forEach(a=>{a.addEventListener("click",async()=>{if(confirm("ลบเทมเพลตนี้?"))try{await zs(Number(a.dataset.id)),J=null,g()}catch(s){y("ลบไม่สำเร็จ: "+E(s),"error")}})}),document.querySelectorAll(".btn-design-cert-template").forEach(a=>{a.addEventListener("click",()=>{const s=J==null?void 0:J.find(u=>u.id===Number(a.dataset.id));s&&Hs({template:s,previewVariables:{reason:"เข้าร่วมกิจกรรมตัวอย่างจนสำเร็จ"},placeholderTokens:[{token:"{{reason}}",label:"เหตุผล/รายละเอียด"}],onSave:async(u,b)=>{await Gs({id:s.id,layout:u,backgroundImageUrl:b}),y("บันทึกดีไซน์แล้ว ✅","success"),J=null,g()}})})}),document.querySelectorAll(".module-toggle").forEach(a=>{a.addEventListener("change",async()=>{const s=br();s[a.dataset.key]=a.checked;try{await ct({council_modules:JSON.stringify(s)}),d.cfg={...d.cfg,council_modules:JSON.stringify(s)},y(a.checked?"เปิดใช้งานแล้ว":"ปิดใช้งานแล้ว","success"),g()}catch(u){y("บันทึกไม่สำเร็จ: "+E(u),"error"),a.checked=!a.checked}})})}function El(){var e,t,r,n,i,o;document.querySelectorAll(".btn-new-doc").forEach(a=>{a.addEventListener("click",()=>{Na=a.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",ae="new",g()})}),(e=document.getElementById("btn-doc-form-back"))==null||e.addEventListener("click",()=>{ae=null,g()}),(t=document.getElementById("btn-doc-form-cancel"))==null||t.addEventListener("click",()=>{ae=null,g()}),document.querySelectorAll(".btn-edit-doc").forEach(a=>{a.addEventListener("click",()=>{ae=Number(a.dataset.id),g()})}),(r=document.getElementById("btn-doc-ai-import-open"))==null||r.addEventListener("click",()=>Oi()),document.querySelectorAll(".doc-responsible-chip").forEach(a=>{a.addEventListener("click",()=>{const s=document.querySelector('textarea[name="responsiblePersons"]');if(!s)return;const u=s.value.split(`
`).map(b=>b.trim()).filter(Boolean);u.includes(a.dataset.name)||u.push(a.dataset.name),s.value=u.join(`
`)})}),(n=document.getElementById("doc-form"))==null||n.addEventListener("submit",async a=>{a.preventDefault();const s=a.target,u=s.title.value.trim();if(!u){y("กรุณากรอกชื่อโครงการ","warning");return}const b=s.dataset.origin,c=s.positionId.value?Number(s.positionId.value):null;if(b==="council"&&!c){y("กรุณาเลือกฝ่ายที่รับผิดชอบ (ใช้ส่งให้ครูที่ปรึกษาประจำฝ่ายตรวจ)","warning");return}const m={title:u,planArea:s.planArea.value.trim(),projectType:s.projectType.value.trim(),schoolStrategy:s.schoolStrategy.value.trim(),educationStandard:s.educationStandard.value.trim(),responsiblePersons:ye(s.responsiblePersons.value),positionId:c,rationale:s.rationale.value.trim(),objectives:ye(s.objectives.value),goalsQuantitative:ye(s.goalsQuantitative.value),goalsQualitative:ye(s.goalsQualitative.value),workSteps:pt(s.workSteps.value,4),durationText:s.durationText.value.trim(),locationText:s.locationText.value.trim(),budgetItems:pt(s.budgetItems.value,2),stakeholders:pt(s.stakeholders.value,2),evaluationItems:pt(s.evaluationItems.value,4),expectedResults:ye(s.expectedResults.value)},f=s.querySelector('button[type="submit"]');f.disabled=!0,f.textContent="กำลังบันทึก...";try{ae==="new"?await Pn({...m,formKey:s.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",formVersion:1,origin:b,academicYear:O,createdByStudentId:b==="council"&&d.student?d.student.id:null,createdByTeacherId:b==="teacher"&&d.teacher?d.teacher.id:null}):await Fn(ae,m),y("บันทึกร่างแล้ว ✅","success"),U=null,ae=null,g()}catch(x){y("บันทึกไม่สำเร็จ: "+E(x),"error"),f.disabled=!1,f.textContent="💾 บันทึกร่าง"}}),document.querySelectorAll(".btn-submit-doc").forEach(a=>{a.addEventListener("click",async()=>{a.disabled=!0;try{await Yn(Number(a.dataset.id)),U=null,g()}catch(s){y("บันทึกไม่สำเร็จ: "+E(s),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-new-doc-revision").forEach(a=>{a.addEventListener("click",async()=>{var s,u;a.disabled=!0;try{await zn(Number(a.dataset.id),{createdByStudentId:((s=d.student)==null?void 0:s.id)??null,createdByTeacherId:((u=d.teacher)==null?void 0:u.id)??null}),y("สร้างฉบับแก้ไขแล้ว ✅","success"),U=null,g()}catch(b){y("สร้างฉบับแก้ไขไม่สำเร็จ: "+E(b),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-approve-doc, .btn-reject-doc").forEach(a=>{a.addEventListener("click",async()=>{var m,f,x;const s=a.classList.contains("btn-approve-doc"),u=Number(a.dataset.id),b=U.find(p=>p.id===u);if(!b)return;const c=prompt(s?"ความเห็นประกอบ (ถ้ามี)":"เหตุผลที่ไม่อนุมัติ (จำเป็นต้องระบุ)")??"";if(!s&&!c.trim()){y("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}a.disabled=!0;try{const p=((m=d.teacher)==null?void 0:m.id)??null;b.status==="pending_advisor"?await Gn({id:u,approve:s,teacherId:p,comment:c.trim()}):b.status==="pending_dept_head"?await Vn({id:u,approve:s,teacherId:p,comment:c.trim(),signatureUrl:((f=d.teacher)==null?void 0:f.signature_url)??null}):b.status==="pending_director"&&await Un({id:u,approve:s,teacherId:p,comment:c.trim(),signatureUrl:((x=d.teacher)==null?void 0:x.signature_url)??null}),y(s?"อนุมัติแล้ว ✅":"ตีกลับให้แก้ไขแล้ว","success"),U=null,g()}catch(p){y("บันทึกไม่สำเร็จ: "+E(p),"error"),a.disabled=!1}})}),document.querySelectorAll(".btn-print-doc").forEach(a=>{a.addEventListener("click",()=>{const s=U.find(u=>u.id===Number(a.dataset.id));s&&Ur(s)})}),document.querySelectorAll(".btn-view-doc-detail").forEach(a=>{a.addEventListener("click",()=>{et=Number(a.dataset.id),g()})}),(i=document.getElementById("btn-doc-detail-close"))==null||i.addEventListener("click",()=>{et=null,g()}),(o=document.getElementById("btn-doc-detail-print"))==null||o.addEventListener("click",()=>{const a=U.find(s=>s.id===et);a&&Ur(a)})}function Al(){var e;(e=document.getElementById("criterion-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.name.value.trim(),i=Number(r.weight.value);if(!n||!i){y("กรอกชื่อเกณฑ์และคะแนนให้ครบ","warning");return}try{await Dn({name:n,weight:i}),ee=null,g()}catch(o){y("บันทึกไม่สำเร็จ: "+E(o),"error")}}),document.querySelectorAll(".btn-remove-criterion").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบเกณฑ์นี้ออกจากการประเมิน?"))try{await Mn(Number(t.dataset.id)),ee=null,g()}catch(r){y("ลบไม่สำเร็จ: "+E(r),"error")}})}),document.querySelectorAll(".btn-toggle-eval").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);wt=wt===r?null:r,g()})}),document.querySelectorAll(".eval-score-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.memberId),i=t.decision.value;if(!i){y("กรุณาเลือกสรุปผล","warning");return}const o={};let a=0;ee.forEach(b=>{var m;const c=(m=t[`c_${b.id}`])==null?void 0:m.value;c!==""&&c!=null&&(o[b.id]=Number(c),a+=Number(c))});const s=ee.reduce((b,c)=>b+Number(c.weight),0),u=t.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังบันทึก...";try{await Bn({memberId:n,academicYear:O,scores:o,totalScore:a,maxScore:s,decision:i,comment:t.comment.value.trim(),evaluatorTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null}),y("บันทึกผลประเมินแล้ว ✅","success"),Be=null,wt=null,g()}catch(b){y("บันทึกไม่สำเร็จ: "+E(b),"error"),u.disabled=!1,u.textContent="บันทึกผลประเมิน"}})}),document.querySelectorAll(".btn-issue-cert").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.memberId),n=d.members.find(o=>o.id===r),i=Be[r];if(!(!n||!i)){t.disabled=!0,t.textContent="กำลังออก...";try{const o=`${O}-${String(i.id).padStart(4,"0")}`;await On({evaluationId:i.id,certificateNo:o}),i.certificate_no=o,i.certificate_issued_at=new Date().toISOString(),Gr(n,i),g()}catch(o){y("ออกเกียรติบัตรไม่สำเร็จ: "+E(o),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}}})}),document.querySelectorAll(".btn-view-cert").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.memberId),n=d.members.find(o=>o.id===r),i=Be[r];n&&i&&Gr(n,i)})})}function Sl(){var e;(e=document.getElementById("activity-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.title.value.trim();if(!n){y("กรุณากรอกชื่อกิจกรรม","warning");return}const i=r.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังบันทึก...";try{await Tn({title:n,detail:r.detail.value.trim(),gender:r.gender.value||null,activityDate:r.activity_date.value||null,budget:r.budget.value?Number(r.budget.value):null,ownerText:r.owner_text.value.trim(),academicYear:O,openToGeneral:r.open_to_general.checked,ownerMemberId:r.owner_member_id.value?Number(r.owner_member_id.value):null,countsForEvaluation:r.counts_for_evaluation.checked}),y("สร้างกิจกรรมแล้ว ✅","success"),H=null,g()}catch(o){y("บันทึกไม่สำเร็จ: "+E(o),"error"),i.disabled=!1,i.textContent="สร้างกิจกรรม"}}),document.querySelectorAll(".btn-activity-next").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await Tr(Number(t.dataset.id),t.dataset.next),H=null,g()}catch(r){y("บันทึกไม่สำเร็จ: "+E(r),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cancel").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ยืนยันยกเลิกกิจกรรมนี้?")){t.disabled=!0;try{await Tr(Number(t.dataset.id),"cancelled"),H=null,g()}catch(r){y("บันทึกไม่สำเร็จ: "+E(r),"error"),t.disabled=!1}}})}),document.querySelectorAll(".btn-activity-attendance").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);de[r]===void 0&&Yr(r)})}),document.querySelectorAll(".btn-activity-scan").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.id);de[r]===void 0&&await Yr(r);const n=H.find(o=>o.id===r),i=d.members.filter(o=>{var a;return!(n!=null&&n.gender)||((a=o.council_positions)==null?void 0:a.gender)===n.gender});Qs({activityId:r,activityTitle:t.dataset.title,openToGeneral:!!t.dataset.openGeneral,members:i,alreadyChecked:de[r],onCheckedIn:o=>{var a;(a=de[r])==null||a.add(o),g()},onUndo:o=>{var a;(a=de[r])==null||a.delete(o),g()}})})}),document.querySelectorAll(".btn-checkin").forEach(t=>{t.addEventListener("click",async()=>{var i;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId);t.disabled=!0;try{await Kr({activityId:r,studentId:n}),(i=de[r])==null||i.add(n),g()}catch(o){y("เช็คชื่อไม่สำเร็จ: "+E(o),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cert-manage").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);ar=ar===r?null:r,g()})}),document.querySelectorAll(".cert-rule-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,i=Number(n.dataset.activityId),o=n.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังบันทึก...";try{await Nn({activityId:i,templateId:n.template_id.value?Number(n.template_id.value):null,minAttendanceCount:n.min_attendance_count.value?Number(n.min_attendance_count.value):null,requiredDates:ye(n.required_dates.value),notes:n.notes.value.trim()}),y("บันทึกเงื่อนไขแล้ว ✅","success"),delete De[i],g()}catch(a){y("บันทึกไม่สำเร็จ: "+E(a),"error"),o.disabled=!1,o.textContent="บันทึกเงื่อนไข"}})}),document.querySelectorAll(".btn-cert-override").forEach(t=>{t.addEventListener("click",async()=>{var o,a;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),i=t.dataset.decision||null;t.disabled=!0;try{await qn({activityId:r,studentId:n,decision:i,decidedByTeacherId:((o=d.teacher)==null?void 0:o.id)??null,decidedByMemberId:((a=d.membership[0])==null?void 0:a.id)??null}),delete pr[r],La(r)}catch(s){y("บันทึกไม่สำเร็จ: "+E(s),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-cert-issue").forEach(t=>{t.addEventListener("click",async()=>{var u,b;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),i=H.find(c=>c.id===r),o=De[r],s=(u=(mr[r]??[]).find(c=>c.student_id===n))==null?void 0:u.students;if(!(o!=null&&o.template_id)){y("กรุณาเลือกเทมเพลตเกียรติบัตรก่อน","warning");return}t.disabled=!0,t.textContent="กำลังออก...";try{const c=await Os({templateId:o.template_id,recipientType:"student",studentId:n,recipientName:(s==null?void 0:s.full_name)??"—",variables:{reason:`เข้าร่วมกิจกรรม "${(i==null?void 0:i.title)??""}" ของสภานักเรียนจนสำเร็จ`},title:(i==null?void 0:i.title)??null,issuedByTeacherId:((b=d.teacher)==null?void 0:b.id)??null,sourceSystem:"council_activity",sourceRefId:r});Ze[r]={...Ze[r]??{},[n]:c},g()}catch(c){y("ออกเกียรติบัตรไม่สำเร็จ: "+E(c),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}})}),document.querySelectorAll(".btn-cert-view").forEach(t=>{t.addEventListener("click",()=>{var o;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),i=(o=Ze[r])==null?void 0:o[n];i&&Ps({layout:i.layout_snapshot,variables:{name:i.recipient_name??"",date:new Date(i.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:i.certificate_no,...i.variables},docTitle:i.title})})})}function Il(){var e,t,r;(e=document.getElementById("btn-open-ann-form"))==null||e.addEventListener("click",()=>{_t=!0,g()}),(t=document.getElementById("btn-cancel-ann"))==null||t.addEventListener("click",()=>{_t=!1,g()}),document.querySelectorAll(".ann-filter-btn").forEach(n=>{n.addEventListener("click",()=>{ht=n.dataset.filter,g()})}),(r=document.getElementById("announcement-form"))==null||r.addEventListener("submit",async n=>{n.preventDefault();const i=n.target,o=i.title.value.trim();if(!o){y("กรุณากรอกหัวเรื่องประกาศ","warning");return}const a=i.querySelector('button[type="submit"]');a.disabled=!0,a.textContent="กำลังเผยแพร่...";try{await Rn({type:i.type.value,audience:i.audience.value,title:o,body:i.body.value.trim(),pinned:i.pinned.checked,postedByTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null,postedByStudentId:d.isChair&&d.student?d.student.id:null}),y("เผยแพร่ประกาศแล้ว 📣","success"),_t=!1,Nt=null,g()}catch(s){y("เผยแพร่ไม่สำเร็จ: "+E(s),"error"),a.disabled=!1,a.textContent="เผยแพร่ประกาศ"}}),document.querySelectorAll(".btn-ack-ann").forEach(n=>{n.addEventListener("click",async()=>{const i=Number(n.dataset.id);n.disabled=!0,n.textContent="กำลังบันทึก...";try{await jn({announcementId:i,studentId:d.student.id}),ue==null||ue.add(i),pe&&(pe[i]=(pe[i]??0)+1),y("รับทราบแล้ว","success"),g()}catch(o){y("บันทึกไม่สำเร็จ: "+E(o),"error"),n.disabled=!1,n.textContent="รับทราบ"}})})}function Ll(){var e,t,r,n,i,o,a,s,u,b;document.querySelectorAll(".apps-filter-btn").forEach(c=>{c.addEventListener("click",()=>{xe=c.dataset.filter,g()})}),document.querySelectorAll(".apps-gender-tab-btn").forEach(c=>{c.addEventListener("click",()=>{oe=c.dataset.gender,Re="",g()})}),(e=document.getElementById("apps-grade-filter"))==null||e.addEventListener("change",c=>{ft=c.target.value,g()}),(t=document.getElementById("apps-position-filter"))==null||t.addEventListener("change",c=>{Re=c.target.value,g()}),(r=document.getElementById("apps-advisor-endorse-filter"))==null||r.addEventListener("change",c=>{Ue=c.target.value,g()}),(n=document.getElementById("apps-peer-endorse-filter"))==null||n.addEventListener("change",c=>{He=c.target.value,g()}),document.querySelectorAll(".btn-view-app-detail").forEach(c=>{c.addEventListener("click",()=>{qe=Number(c.dataset.id),g()})}),(i=document.getElementById("btn-admin-app-detail-close"))==null||i.addEventListener("click",()=>{qe=null,g()}),(o=document.getElementById("admin-app-detail-backdrop"))==null||o.addEventListener("click",c=>{c.target.id==="admin-app-detail-backdrop"&&(qe=null,g())}),(a=document.getElementById("btn-delete-council-application"))==null||a.addEventListener("click",c=>{ge=Number(c.currentTarget.dataset.id),g()}),(s=document.getElementById("btn-cancel-council-delete"))==null||s.addEventListener("click",()=>{ge=null,g()}),(u=document.getElementById("council-delete-backdrop"))==null||u.addEventListener("click",c=>{c.target.id==="council-delete-backdrop"&&(ge=null,g())}),(b=document.getElementById("btn-confirm-council-delete"))==null||b.addEventListener("click",async()=>{var f;const c=(f=document.getElementById("council-delete-reason"))==null?void 0:f.value.trim();if(!c){y("กรุณากรอกเหตุผลการลบ","warning");return}const m=document.getElementById("btn-confirm-council-delete");m.disabled=!0,m.textContent="กำลังลบ...";try{await wn(ge,c),y("ลบใบสมัครแบบเก็บประวัติแล้ว ✅","success"),ge=null,qe=null,L=null,g()}catch(x){y("ลบใบสมัครไม่สำเร็จ: "+E(x),"error"),m.disabled=!1,m.textContent="ยืนยันลบ"}}),document.querySelectorAll(".schedule-form").forEach(c=>{c.addEventListener("submit",async m=>{m.preventDefault();const f=Number(c.dataset.appId),x=c.dataset.ivId?Number(c.dataset.ivId):null,p=c.scheduled_at.value,v=c.location.value.trim();if(!p){y("กรุณาระบุวันเวลานัดสัมภาษณ์","warning");return}const $=c.interviewerText.value.trim();let S=null;if($){const I=$.match(/· รหัส (\d+)$/);if(!I){y("กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)","warning");return}S=Number(I[1])}const C=c.querySelector('button[type="submit"]');C.disabled=!0,C.textContent="กำลังบันทึก...";try{const I=new Date(p).toISOString();await kn({applicationId:f,existingInterviewId:x,scheduledAt:I,location:v,interviewerTeacherId:S}),y("นัดสัมภาษณ์แล้ว ✅","success");const h=c.dataset.profileId;if(h){const _=new Date(I).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});Ht.functions.invoke("send-push",{body:{title:"🗓️ นัดสัมภาษณ์สภานักเรียน",body:`${c.dataset.positionName||""} — ${_}${v?" · "+v:""}`,url:"council.html",profileIds:[h]}}).catch(()=>{})}L=null,g()}catch(I){y("บันทึกไม่สำเร็จ: "+E(I),"error"),C.disabled=!1,C.textContent="บันทึกนัดสัมภาษณ์"}})}),document.querySelectorAll(".score-form").forEach(c=>{const m=Number(c.dataset.maxWeight),f=Number(c.dataset.passThreshold),x=c.querySelector(".score-total-display"),p=()=>{let v=0;c.querySelectorAll(".score-input").forEach($=>{$.value!==""&&(v+=Number($.value))}),x&&(x.textContent=`${v} / ${m} · ต้อง ≥ ${f} จึงผ่าน`)};c.querySelectorAll(".score-input").forEach(v=>v.addEventListener("input",p)),c.addEventListener("submit",async v=>{v.preventDefault();const $=Number(c.dataset.appId),S=c.dataset.ivId?Number(c.dataset.ivId):null;if(!S){y("ไม่พบข้อมูลการนัดสัมภาษณ์","error");return}const C={};let I=0;c.querySelectorAll(".score-input").forEach(A=>{A.value!==""&&(C[A.dataset.criterionId]=Number(A.value),I+=Number(A.value))});const h=I>=f?"pass":"fail",_=c.comment.value.trim(),k=c.querySelector('button[type="submit"]');k.disabled=!0,k.textContent="กำลังบันทึก...";try{await En({interviewId:S,applicationId:$,score:I,scores:C,result:h,comment:_}),y(`บันทึกผลสัมภาษณ์แล้ว ✅ (${h==="pass"?"ผ่าน":"ไม่ผ่าน"})`,"success"),L=null,g()}catch(A){y("บันทึกไม่สำเร็จ: "+E(A),"error"),k.disabled=!1,k.textContent="บันทึกผล"}})}),document.querySelectorAll(".btn-promote-candidate").forEach(c=>{c.addEventListener("click",async()=>{const m=Number(c.dataset.appId),f=L==null?void 0:L.find(x=>x.id===m);if(f){c.disabled=!0,c.textContent="กำลังบันทึก...";try{const x=await ra({gender:f.council_positions.gender,academicYear:O});await An({applicationId:m,studentId:f.students.id,electionConfigId:x.id,campaignStatement:f.motivation,photoUrl:f.photo_url}),y("ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️","success"),delete ve[f.council_positions.gender],d.elections=await At().catch(()=>d.elections),L=null,g()}catch(x){y("บันทึกไม่สำเร็จ: "+E(x),"error"),c.disabled=!1,c.textContent="🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง"}}})}),document.querySelectorAll(".btn-appoint-member").forEach(c=>{c.addEventListener("click",async()=>{var x,p,v;const m=Number(c.dataset.appId),f=L==null?void 0:L.find($=>$.id===m);if(f&&confirm(`ยืนยันแต่งตั้ง ${((x=f.students)==null?void 0:x.full_name)??""} เป็น ${((p=f.council_positions)==null?void 0:p.position_name)??""}?`)){c.disabled=!0,c.textContent="กำลังบันทึก...";try{await Sn({applicationId:m,positionId:f.position_id,studentId:f.students.id,academicYear:O,appointedByTeacherId:(v=d.teacher)==null?void 0:v.id}),y("แต่งตั้งสำเร็จ ✅","success"),L=null,d.members=await ze().catch(()=>d.members),g()}catch($){y("บันทึกไม่สำเร็จ: "+E($),"error"),c.disabled=!1,c.textContent="✅ แต่งตั้งเข้าตำแหน่ง"}}})})}function Cl(){var e,t,r,n,i;document.querySelectorAll(".btn-create-election").forEach(o=>{o.addEventListener("click",async()=>{o.disabled=!0;try{const a=await ra({gender:o.dataset.gender,academicYear:O});d.elections=[...d.elections.filter(s=>s.id!==a.id),a],g()}catch(a){y("เปิดใช้งานไม่สำเร็จ: "+E(a),"error"),o.disabled=!1}})}),document.querySelectorAll(".election-window-form").forEach(o=>{o.addEventListener("submit",async a=>{a.preventDefault();const s=Number(o.dataset.electionId),u=o.opens_at.value?new Date(o.opens_at.value).toISOString():null,b=o.closes_at.value?new Date(o.closes_at.value).toISOString():null,c=o.querySelector('button[type="submit"]');c.disabled=!0;try{await In({electionConfigId:s,opensAt:u,closesAt:b}),d.elections=await At().catch(()=>d.elections),y("บันทึกช่วงเวลาแล้ว","success"),g()}catch(m){y("บันทึกไม่สำเร็จ: "+E(m),"error"),c.disabled=!1}})}),document.querySelectorAll(".btn-publish-results").forEach(o=>{o.addEventListener("click",async()=>{if(confirm("ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้")){o.disabled=!0,o.textContent="กำลังประกาศผล...";try{await Ln({electionConfigId:Number(o.dataset.electionId),gender:o.dataset.gender,academicYear:O}),y("ประกาศผลแล้ว 🎉","success"),d.elections=await At().catch(()=>d.elections),d.members=await ze().catch(()=>d.members),g()}catch(a){y("ประกาศผลไม่สำเร็จ: "+E(a),"error"),o.disabled=!1,o.textContent="📢 ประกาศผล+แต่งตั้ง"}}})}),document.querySelectorAll(".candidate-card-btn").forEach(o=>{o.addEventListener("click",()=>{je={gender:o.dataset.gender,id:Number(o.dataset.id)},fe=!1,g()})}),(e=document.getElementById("btn-candidate-modal-close"))==null||e.addEventListener("click",()=>{je=null,fe=!1,g()}),(t=document.getElementById("candidate-modal-backdrop"))==null||t.addEventListener("click",o=>{o.target.id==="candidate-modal-backdrop"&&(je=null,fe=!1,g())}),(r=document.getElementById("btn-candidate-edit"))==null||r.addEventListener("click",()=>{fe=!0,g()}),(n=document.getElementById("btn-candidate-cancel-edit"))==null||n.addEventListener("click",()=>{fe=!1,g()}),(i=document.getElementById("candidate-edit-form"))==null||i.addEventListener("submit",async o=>{o.preventDefault();const a=o.target,s=Number(a.dataset.candidateId),u=a.slogan.value.trim(),b=a.vision.value.trim(),c=a.policies.value.split(`
`).map(x=>x.trim()).filter(Boolean),m=a.experience.value.split(`
`).map(x=>x.trim()).filter(Boolean),f=a.querySelector('button[type="submit"]');f.disabled=!0,f.textContent="กำลังบันทึก...";try{await Cn({candidateId:s,slogan:u,vision:b,policies:c,experience:m});const{gender:x}=je;ve[x]=await aa(gr(x).id).catch(()=>ve[x]),fe=!1,y("บันทึกโปรไฟล์ผู้สมัครแล้ว ✅","success"),g()}catch(x){y("บันทึกไม่สำเร็จ: "+E(x),"error"),f.disabled=!1,f.textContent="บันทึก"}})}const Tl={auto:"ตามระบบ",light:"สว่าง",dark:"มืด"},Nl={auto:"🌓",light:"☀️",dark:"🌙"};function Ut(e){const t=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.toggleAttribute("data-dark",t);const r=document.getElementById("council-theme-icon"),n=document.getElementById("council-theme-label");r&&(r.textContent=Nl[e]),n&&(n.textContent=Tl[e])}function ql(){var t;const e=localStorage.getItem("council_theme")||"auto";Ut(e),(t=document.getElementById("council-theme-toggle"))==null||t.addEventListener("click",()=>{const r=localStorage.getItem("council_theme")||"auto",n=r==="auto"?"light":r==="light"?"dark":"auto";localStorage.setItem("council_theme",n),Ut(n)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("council_theme")||"auto")==="auto"&&Ut("auto")})}ql();ho();
