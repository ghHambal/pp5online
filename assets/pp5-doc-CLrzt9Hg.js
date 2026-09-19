import{getSystemConfig as Lt,getClassSessionDOWs as wt,getClassStudents as Tt,getClassAttendanceAll as Et,getScoreColumns as Nt,getStudentScores as Pt,getDepartments as Wt,getHomeroomTeachers as Bt,getTeacherById as Ut,getCourseDocPage2 as Vt,getCourseDocLangSettings as Gt,getSchoolHolidays as Ft,getClassScoreRounding as It,getLifeSkillColumns as qt,getLifeSkillScores as Yt,getReadingScoreColumns as Kt,getReadingScores as Jt}from"./api-CnonnVVn.js";import{i as Xt,b as Qt,d as ot,r as ut}from"./score-display-BIDpG83o.js";import{a as gt,g as Zt}from"./ui-CHdefT5i.js";import{s as ft}from"./supabase-BV-W2lsh.js";import{o as yt}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as te,_readingGrade as ee}from"./teacher-views-utils-B68DuafG.js";function a(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function xt(t){if(!t)return null;const[c,s,r]=String(t).split("-").map(Number);return!c||!s||!r?null:new Date(c,s-1,r)}function nt(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function kt(t){if(!t)return"";const[c,s,r]=String(t).split("-").map(Number);if(!c)return t;const o=(c+543)%100;return`${String(r).padStart(2,"0")}/${String(s).padStart(2,"0")}/${String(o).padStart(2,"0")}`}function se(t,c,s=null,r=!1){const o=r&&s&&s.length?s.length:Math.max(1,Math.round((c??1)*2)),e=o*20;let l=s&&s.length?[...s]:null,C=!1;if(l&&l.length<o){C=!0;const f={};for(const p of l)f[p]=(f[p]||0)+1;const n=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(p=>t[p]).filter(Boolean).map(p=>xt(p)).filter(Boolean).sort((p,d)=>p-d),i={};n.forEach(p=>{const d=p.getDay();i[d]=(i[d]||0)+1});const h=Object.entries(i).sort(([,p],[,d])=>d-p||Number(p)-Number(d));for(const[p]of h){if(l.length>=o)break;const d=Number(p);for(;(f[d]||0)<Math.min(i[d],2)&&l.length<o;)l.push(d),f[d]=(f[d]||0)+1}for(let p=1;p<=5&&l.length<o;p++)(f[p]||0)<2&&(l.push(p),f[p]=(f[p]||0)+1);l.sort((p,d)=>p-d)}else l&&l.length>o&&(l=l.slice(0,o));const v=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(f=>t[f]).filter(Boolean).map(f=>xt(f)).filter(Boolean).sort((f,n)=>f-n);if(!v.length)return[];if(C&&l){const n=[];let i=0,h=0;for(;i<v.length&&n.length<e;){const p=new Date(v[i]);p.setDate(p.getDate()-p.getDay()),p.setHours(0,0,0,0);const d=p.getTime();h=d;const _=[];for(;i<v.length&&v[i].getTime()>=d&&v[i].getTime()<d+6048e5;)_.push(v[i++]);const b={};for(const x of _){const z=x.getDay();b[z]=(b[z]||0)+1}for(const x of _){if(n.length>=e)break;n.push({n:n.length+1,date:new Date(x),ds:nt(x)})}const M=o-_.length;if(M>0){const x={};l.forEach(D=>{x[D]=(x[D]||0)+1});const z=[];for(const[D,T]of Object.entries(x).sort()){const B=Number(D),P=b[B]||0;for(let O=0;O<T-P&&z.length<M;O++)z.push(B)}for(const D of z){if(n.length>=e)break;const T=new Date(p);T.setDate(T.getDate()+D),n.push({n:n.length+1,date:T,ds:nt(T)})}}}if(n.length<e){const p=new Date(h);let d=1;for(;n.length<e;){for(const _ of l){if(n.length>=e)break;const b=new Date(p);b.setDate(b.getDate()+d*7+_),n.push({n:n.length+1,date:b,ds:nt(b)})}d++}}return n}if(!l||!l.length){const n={},i=v.filter(x=>{const z=new Date(x);z.setDate(z.getDate()-z.getDay()),z.setHours(0,0,0,0);const D=z.getTime();return n[D]=(n[D]||0)+1,n[D]<=o}),h=[];for(const x of i){if(h.length>=e)break;h.push({n:h.length+1,date:new Date(x),ds:nt(x)})}if(h.length>=e)return h;const p=i[i.length-1],d=new Date(p);d.setDate(d.getDate()-d.getDay()),d.setHours(0,0,0,0);const _=d.getTime(),b=i.filter(x=>x.getTime()>=_&&x.getTime()<_+6048e5);let M=1;for(;h.length<e;){for(const x of b){if(h.length>=e)break;const z=new Date(x);z.setDate(z.getDate()+M*7),h.push({n:h.length+1,date:z,ds:nt(z)})}M++}return h}const m={},w=[];for(const f of v){if(w.length>=e)break;const n=new Date(f);n.setDate(n.getDate()-n.getDay()),n.setHours(0,0,0,0);const i=n.getTime();m[i]=(m[i]||0)+1,m[i]<=o&&w.push({n:w.length+1,date:new Date(f),ds:nt(f)})}if(w.length>=e)return w;const $=v[v.length-1],u=new Date($);u.setDate(u.getDate()-u.getDay()),u.setHours(0,0,0,0);const y=u.getTime(),H=7*24*60*60*1e3,j={};for(const f of v)if(f.getTime()>=y&&f.getTime()<y+H){const n=f.getDay();j[n]=(j[n]||0)+1}const S={};for(const f of l)S[f]=(S[f]||0)+1;const A=[];for(const[f,n]of Object.entries(S)){const i=n-(j[Number(f)]||0);for(let h=0;h<i;h++)A.push(Number(f))}A.sort((f,n)=>f-n);for(const f of A){if(w.length>=e)break;const n=new Date(u);n.setDate(n.getDate()+f),w.push({n:w.length+1,date:n,ds:nt(n)})}let R=1;for(;w.length<e;){for(const f of l){if(w.length>=e)break;const n=new Date(u);n.setDate(n.getDate()+R*7+f),w.push({n:w.length+1,date:n,ds:nt(n)})}R++}return w}function ae(t){return t==="ACDMVOC"?"porwor":"samai"}function X(t){return String(t??"").split(" ")[0]}function St(t,c){const s={};for(const e of t){const l=e[c];l&&(s[l]=(s[l]??0)+1)}let r=null,o=0;for(const[e,l]of Object.entries(s))l>o&&(o=l,r=e);return r}function ne(t){return St(t,"religion_room")}function oe(t){return St(t,"main_room")}function ht(t){return t>=80?4:t>=75?3.5:t>=70?3:t>=65?2.5:t>=60?2:t>=55?1.5:t>=50?1:0}function jt(t){return t>=3.5?"ดีเยี่ยม":t>=2.5?"ดี":t>=1?"ผ่าน":"ไม่ผ่าน"}async function le(t){var dt,rt;const c=await Lt();te(c);const s=parseInt(c.academicYear??c.academic_year??2568),r=parseInt(c.semester??1),{data:o,error:e}=await ft.from("classes").select(`
      id, course_id, class_name, skill_group, google_sheet_id,
      head_student_id, source_class_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id, learning_area ),
      students:students!fk_head_student ( full_name, student_code )
    `).eq("id",t).single();if(e||!o)throw new Error("โหลดข้อมูลห้องเรียนไม่สำเร็จ");const l=o.master_subjects??{},C=l.credit??1,v=ae(l.subject_group);let m=o.source_class_id??null,w=C;if(!m){const{data:g}=await ft.from("classes").select("source_class_id").eq("id",t).single();m=(g==null?void 0:g.source_class_id)??null}let $=[];if(m){const{data:g}=await ft.from("classes").select("id, master_subjects(credit)").eq("id",m).single();(dt=g==null?void 0:g.master_subjects)!=null&&dt.credit&&(w=g.master_subjects.credit),$=await wt(m).catch(()=>[])}const u=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),[y,H,j,S,A,R]=await Promise.all([Tt(t),Et(m??t),Nt(m??t),Pt(m??t),Wt(),Bt(s,r).catch(()=>[])]),f=l.teacher_id?await Ut(l.teacher_id).catch(()=>null):null,n=["AGM","AGMVOC"].includes(l.subject_group)?"ศาสนา":["ACDMVOC"].includes(l.subject_group)?"สามัญปวช":"สามัญ",i=A.find(g=>g.dept_code===l.dept&&g.category===n)??A.find(g=>g.dept_code===l.dept)??A.find(g=>g.dept_name===l.dept)??null,[h,p,d,_]=await Promise.all([l.id?Vt(l.id).catch(()=>null):Promise.resolve(null),Gt().catch(()=>[]),wt(o.id).catch(()=>[]),Ft(s,r).catch(()=>[])]),b=new Set(_),M=((rt=p.find(g=>g.lang_key==="th"))==null?void 0:rt.settings)??{},x=Array.isArray(M.colsBasic)&&M.colsBasic.length?M.colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],z=Array.isArray(M.colsExtra)&&M.colsExtra.length?M.colsExtra:["ผลการเรียนรู้"],D=M.rowHeader||"ข้อ",T=l.subject_group==="ACDMVOC",B=se(o,C,d.length?d:null,T),P={};if(m){const g=T&&d.length?d.length:Math.max(1,Math.round(C*2)),L=T&&$.length?$.length:Math.max(1,Math.round(w*2)),U=B.length;for(let G=1;G<=U;G++){const V=Math.floor((G-1)/g),et=(G-1)%g,mt=V*L+et+1;for(const st of H)st.session_number===mt&&(P[st.student_id]||(P[st.student_id]={}),P[st.student_id][G]=st.status)}}else for(const g of H)P[g.student_id]||(P[g.student_id]={}),P[g.student_id][g.session_number]=g.status;const O=(m?j.filter(g=>!u.has(g.assignment_name)):j).filter(g=>g.column_type!=="override"&&!Xt(g)),F={};for(const g of S)F[g.student_id]||(F[g.student_id]={}),F[g.student_id][g.score_column_id]=g.score;let I="";const Y=await It(t).catch(()=>(I="โหลดค่าปัดเลขร่วมไม่สำเร็จ คะแนนที่แสดงใช้รูปแบบเริ่มต้น กรุณาติดตั้ง SQL หรือตรวจการเชื่อมต่อก่อนใช้เอกสารจริง",null));for(const g of Object.values(F)){const L={...g};for(const U of O)(U.column_type==="derived"||L[U.id]!=null&&U.bonus_formula)&&(g[U.id]=Qt(j,U,G=>L[G]))}const k=["AGM","AGMVOC"].includes(l.subject_group),W=X(o.class_name),E=oe(y),q=ne(y);let Q,K;k?(K=R.find(g=>g.category==="ศาสนา"&&g.main_room===o.class_name)??(q?R.find(g=>g.category==="ศาสนา"&&g.main_room===q):null)??null,Q=E?R.find(g=>g.category!=="ศาสนา"&&g.main_room===E)??null:null):(Q=R.find(g=>g.category!=="ศาสนา"&&g.main_room===W)??(E?R.find(g=>g.category!=="ศาสนา"&&g.main_room===E):null)??null,K=q?R.find(g=>g.category==="ศาสนา"&&g.main_room===q)??null:null);const Z=(i==null?void 0:i.dept_name)??l.dept??"",tt=l.learning_area&&l.learning_area.trim()||(i==null?void 0:i.head_name)||"";let J={},it=0,N="";if(l.subject_group==="ACDMVOC")try{const L=(await qt(s,r,"สามัญ")).find(U=>(U.name??"").includes("ความสะอาด"));if(L){it=L.max_score??0,N=L.name;const U=await Yt([L.id]);J=Object.fromEntries(U.map(G=>[G.student_id,G.score]))}}catch{}let at={};const ct=[];I&&ct.push(I);try{const g=await Kt(s,r);if(g.length){const L=await Jt(g.map(V=>V.id),y.map(V=>V.id)),U=g.reduce((V,et)=>V+(et.max_score??0),0),G={};for(const V of L)V.score!=null&&(G[V.student_id]=(G[V.student_id]??0)+(parseFloat(V.score)||0));if(U>0)for(const[V,et]of Object.entries(G))at[V]=ee(et/U*100).label;L.length||ct.push(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนในห้องนี้ (ภาค ${r}/${s})`)}else ct.push(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ (ภาค ${r}/${s})`)}catch(g){throw console.error("[pp5-doc] load reading evaluation failed",g),new Error(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${(g==null?void 0:g.message)??"ไม่ทราบสาเหตุ"}`)}return{cls:o,ms:l,credit:C,prefix:v,cfg:c,students:y,attMap:P,scoreColumns:O,scoreMap:F,roundSettings:Y,teacher:f,dept:i,deptNameTH:Z,deptHeadName:tt,courseDoc:h,thColHeaders:x,thColsExtra:z,thRowHeader:D,sessions:B,hrSamai:Q,hrReligion:K,academicYear:s,semester:r,holidaySet:b,moralScores:J,moralMax:it,moralColName:N,readingEvalMap:at,docWarnings:ct}}function Ct(){return`
    @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Sarabun', sans-serif; font-size: 10pt; color: #000; background: #fff; }

    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 12mm 12mm 12mm 18mm;
      page-break-after: always;
      position: relative;
    }
    .page-tight {
      width: 210mm;
      min-height: 297mm;
      padding: 8mm 8mm 8mm 8mm;
      page-break-after: always;
      position: relative;
    }
    .page:last-child, .page-tight:last-child, .score-wrap:last-child { page-break-after: avoid; }

    @media print {
      @page { size: A4 portrait; margin: 0; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .no-print { display: none !important; }
    }

    table { border-collapse: collapse; width: 100%; }
    td, th { border: 1px solid #000; padding: 2px 3px; vertical-align: middle; }
    th { font-weight: 600; text-align: center; }

    .text-center { text-align: center; }
    .text-right  { text-align: right; }
    .font-bold   { font-weight: 700; }

    /* ── Page 1 — absolute mm layout (ported from reference HTML) ── */
    .page-p1 {
      position: relative; width: 210mm; height: 297mm;
      padding: 0; page-break-after: always; overflow: hidden;
    }
    .page-p1 .doc-code {
      position: absolute; top: 24.5mm; right: 31.5mm;
      font-size: 12pt; font-weight: 400;
    }
    .page-p1 .logo-wrap {
      position: absolute; top: 17.6mm; left: 50%;
      transform: translateX(-50%);
      width: 18.5mm; height: 18.5mm;
      border-radius: 50%; overflow: hidden;
      background: #fff;
      display: flex; align-items: center; justify-content: center;
    }
    .page-p1 .logo-wrap img {
      width: 110%; height: 110%; margin: -5%; object-fit: contain; display: block;
    }
    .page-p1 .p1-title {
      position: absolute; top: 40.1mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 15.7pt; font-weight: 700; line-height: 1.05;
    }
    .page-p1 .level-row {
      position: absolute; top: 48.9mm; left: 0; width: 100%;
      font-size: 10.1pt; font-weight: 600;
    }
    .page-p1 .level-row .lbl {
      position: absolute; top: 0; text-align: left; white-space: nowrap;
    }
    .page-p1 .checks {
      position: absolute; top: -.15mm;
      display: grid; gap: .9mm; font-size: 9.4pt; font-weight: 600;
    }
    .page-p1 .check-line { display: flex; align-items: center; gap: 2.3mm; white-space: nowrap; }
    .page-p1 .box {
      position: relative; display: inline-block;
      width: 4.5mm; height: 4.5mm;
      border: .52mm solid #111; border-radius: .6mm;
      vertical-align: middle; flex: 0 0 auto;
    }
    .page-p1 .box.checked { background: #111; }
    .page-p1 .box.checked::after {
      content: ""; position: absolute;
      left: 3px; top: .2mm; width: 1.5mm; height: 2.8mm;
      border: solid #fff; border-width: 0 .52mm .52mm 0; transform: rotate(45deg);
    }
    .page-p1 .school {
      position: absolute; top: 72mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 24pt; line-height: 1.15; font-weight: 700;
    }
    .page-p1 .school-sub {
      position: absolute; top: 84.2mm; left: 0; width: 100%; margin: 0;
      text-align: center; font-size: 20pt; line-height: 1.15; font-weight: 700;
    }
    .page-p1 .info {
      position: absolute; top: 94.6mm; left: 17.7mm; width: 174.7mm;
      font-size: 10.5pt; font-weight: 600;
    }
    .page-p1 .info-line {
      display: flex; align-items: flex-end; gap: 2.6mm;
      margin-bottom: 1.45mm; white-space: nowrap;
    }
    .page-p1 .info-row-one {
      display: grid; grid-template-columns: 32mm 1fr;
      align-items: end; margin-bottom: 1.45mm;
    }
    .page-p1 .uline {
      display: inline-block; min-height: 5.2mm;
      border-bottom: .35mm dotted #777;
      text-align: center; line-height: 5mm;
      padding: 0 1.5mm; font-weight: 600; white-space: nowrap;
    }
    .page-p1 .uline-xl { display: block; min-height: 5.2mm; border-bottom: .35mm dotted #777; text-align: left; padding-left: 4mm; line-height: 5mm; font-weight: 600; }
    .page-p1 .w-xs  { width: 17mm; } .page-p1 .w-sm  { width: 24mm; }
    .page-p1 .w-md  { width: 33mm; } .page-p1 .w-lg  { width: 48mm; }
    .page-p1 .w-yr  { width: 35mm; } .page-p1 .w-cd  { width: 25mm; }

    .page-p1 .summary-box {
      position: absolute; top: 139.9mm; left: 17.7mm; width: 174.7mm;
      border: .75mm solid #111;
    }
    .page-p1 .summary-box table { width: 100%; border-collapse: collapse; table-layout: fixed; }
    .page-p1 .summary-box th, .page-p1 .summary-box td {
      border: 1.5px solid #111; padding: .8mm 1mm;
      text-align: center; vertical-align: middle; font-size: 10.5pt; font-weight: 600;
    }
    .page-p1 .summary-box tr:first-child th { border-top: 0; }
    .page-p1 .summary-box tr > *:first-child { border-left: 0; }
    .page-p1 .summary-box tr > *:last-child  { border-right: 0; }
    .page-p1 .summary-box tr:last-child td,
    .page-p1 .summary-box tr:last-child th   { border-bottom: 0; }
    .page-p1 .col-tot { width: 18.8mm; } .page-p1 .col-g   { width: 10.65mm; }
    .page-p1 .col-gs  { width: 14.5mm; } .page-p1 .col-note{ width: 39mm; }
    .page-p1 .col-elbl{ width: 46.5mm; }
    .page-p1 .grade-table th, .page-p1 .grade-table td { height: 6.25mm; }
    .page-p1 .grade-table tr:first-child th { height: 7.1mm; }
    .page-p1 .stitle  { font-size: 10.2pt; }
    .page-p1 .evspc   { height: 6.35mm; border-left: 0 !important; border-right: 0 !important; }
    .page-p1 .eval-table tr:first-child th { border-top: 1.5px solid #111; }
    .page-p1 .eval-table th, .page-p1 .eval-table td { height: 9.35mm; }

    .page-p1 .approval {
      position: absolute; top: 208.1mm; left: 17.7mm;
      width: 174.7mm; height: 72.7mm;
      border: .75mm solid #111; padding: 3.8mm 5.5mm 3.5mm;
      font-size: 10.4pt; font-weight: 600;
    }
    .page-p1 .apl-title { margin-bottom: 3mm; font-size: 10.6pt; font-weight: 700; }
    .page-p1 .sig-row {
      display: grid; grid-template-columns: 13mm 1fr 52mm;
      align-items: end; gap: 1.4mm; margin-bottom: .55mm;
    }
    .page-p1 .sig-line {
      display: block; border-bottom: .35mm dotted #777;
      text-align: center; line-height: 5mm; min-height: 5.2mm; font-weight: 700;
    }
    .page-p1 .consider { margin-top: 3.2mm; font-weight: 700; }
    .page-p1 .ctr-block { margin: 1.8mm auto 0; width: 66%; text-align: center; }
    .page-p1 .ctr-sig {
      display: grid; grid-template-columns: 12mm 1fr;
      align-items: end; gap: 5px; margin: 0 auto; width: 100%;
    }
    .page-p1 .p1-role { margin-top: .6mm; }
    .page-p1 .decision {
      display: flex; justify-content: center; gap: 12mm;
      align-items: center; margin-top: 2mm; font-size: 11.5pt;
    }
    .page-p1 .decision .box { width: 5.8mm; height: 5.8mm; border-color: #888; border-width: .65mm; }
    .page-p1 .decision .box.checked { background: #888; }
    .page-p1 .director { margin-top: 2mm; }

    /* ── Page 2 ── */
    .p2-wrap { width: 210mm; min-height: 297mm; padding: 10mm 14mm 10mm 14mm; page-break-after: always; display: flex; flex-direction: column; }
    .p2-logo-wrap { width: 18mm; height: 18mm; border-radius: 50%; overflow: hidden; background: #fff; margin: 0 auto 2mm; display: flex; align-items: center; justify-content: center; }
    .p2-logo-wrap img { width: 110%; height: 110%; margin: -5%; object-fit: contain; display: block; }
    .p2-title { text-align: center; font-size: 13pt; font-weight: 700; margin-bottom: 2mm; }
    .p2-hdr { font-size: 9.5pt; margin-bottom: 2mm; display: grid; grid-template-columns: 1fr 1fr; gap: 0 5mm; }
    .p2-hdr-col { display: flex; flex-direction: column; gap: 1.2mm; }
    .p2-hdr-row { display: flex; align-items: baseline; gap: 1mm; }
    .p2-label { flex-shrink: 0; white-space: nowrap; }
    .p2-uline { display: inline-block; border-bottom: .3mm dashed #555; min-width: 8mm; text-align: center; padding: 0 1mm; font-weight: 600; flex-shrink: 0; }
    .p2-uline-fill { flex: 1; min-width: 15mm; }
    .std-table { width: 100%; border-collapse: collapse; flex: 1; height: 0; }
    .std-table th { font-size: 10pt; padding: 1.5mm 2mm; border: .4mm solid #000; text-align: center; font-weight: 700; }
    .std-table td { border: .4mm solid #000; padding: 0 2mm; vertical-align: top; font-size: 9.5pt; }
    .std-table:not([style*="table-layout"]) td:first-child { width: 50mm; }
    .std-table td.std-row { height: 7mm; }
    .std-fill-row { height: 100%; }
    .std-fill-row td {
      border: .4mm solid #000;
      background-image: repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent calc(7mm - .4mm),
        #000 calc(7mm - .4mm),
        #000 7mm
      );
      background-size: 100% 7mm;
      background-origin: border-box;
    }
    .p2-footer { display: flex; gap: 6mm; margin-top: 3mm; font-size: 9pt; }
    .p2-obj { flex: 0 0 auto; width: 60mm; }
    .p2-obj p { margin-bottom: 1mm; }
    .p2-obj u { min-width: 18mm; display: inline-block; text-align: center; text-decoration: none; border-bottom: .3mm dashed #555; }
    .p2-char { flex: 1; }
    .p2-char-title { font-weight: 700; margin-bottom: 1mm; }
    .p2-char-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 2mm; font-size: 8.5pt; }
    .p2-sig { text-align: right; margin-top: 3mm; font-size: 9.5pt; }

    /* ── Page 3 attendance ── */
    .att-top   { display: flex; align-items: flex-start; gap: 3mm; margin-bottom: 2mm; }
    .att-logo  { width: 18mm; height: 18mm; flex-shrink: 0; border-radius: 50%; overflow: hidden; background: #fff; display: flex; align-items: center; justify-content: center; }
    .att-logo img { width: 110%; height: 110%; margin: -5%; object-fit: contain; }
    .att-info  { flex: 1; font-size: 9pt; }
    .att-title { font-weight: 700; font-size: 10pt; text-align: center; margin-bottom: 1.5mm; }
    .att-hdr-row { display: flex; align-items: baseline; gap: 1.5mm; margin-bottom: 1mm; }
    .att-hdr-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 5mm; margin-bottom: 1mm; }
    .att-hdr-col { display: flex; align-items: baseline; gap: 1mm; }
    .att-label { flex-shrink: 0; white-space: nowrap; }
    .att-uline { display: inline-block; border-bottom: .3mm dashed #555; min-width: 8mm; text-align: center; padding: 0 1mm; font-weight: 600; flex-shrink: 0; }
    .att-uline-fill { flex: 1; min-width: 15mm; }
    .att-table  { table-layout: fixed; font-size: 6.5pt; width: 100%; border-collapse: collapse; }
    .att-table th { padding: 1px 2px; font-size: 6.5pt; border: .4mm solid #000; }
    .att-table td { padding: 0; font-size: 6.5pt; text-align: center; border: .3mm solid #000; height: var(--att-row-h, 5.5mm); }
    .att-name  { text-align: left !important; font-size: 7pt; padding-left: 1mm !important; white-space: nowrap; overflow: hidden; }
    .att-code  { font-size: 6.5pt; }
    .att-desc  { font-size: 6pt; font-weight: normal; line-height: 1.3; }
    .att-absent { color: #c00; font-weight: 700; }
    .att-leave  { color: #00c; font-weight: 700; }
    .att-sick   { color: #c60; font-weight: 700; }

    /* ── Page 4 scores ── */
    .score-wrap { width: 210mm; min-height: 297mm; padding: 16mm 10mm 12mm; page-break-after: always; }
    .score-top-info { display: grid; grid-template-columns: 1.25fr .95fr .75fr .75fr .9fr; gap: 5mm; align-items: end; font-size: 10px; font-weight: 700; line-height: 1; margin-bottom: 2mm; }
    .sc-field { display: flex; align-items: end; white-space: nowrap; gap: 2mm; }
    .sc-field .sc-lbl { flex: 0 0 auto; }
    .sc-field .sc-val { flex: 1 1 auto; min-width: 18mm; text-align: center; border-bottom: 1px dotted #000; padding: 0 1mm 1px; font-weight: 700; }
    .grade-sheet { width: 100%; border-collapse: collapse; table-layout: fixed; border: 2px solid #000; font-size: 10px; line-height: 1.05; }
    .grade-sheet th, .grade-sheet td { border: 1px solid #000; padding: 1px 2px; text-align: center; vertical-align: middle; height: var(--row-h, 5.8mm); overflow: hidden; }
    .grade-sheet th { font-weight: 700; }
    .grade-sheet .gs-name { text-align: left; padding-left: 2mm; }
    .grade-sheet .v { height: 25mm !important; padding: 0; overflow: visible; }
    .grade-sheet .v > span { writing-mode: vertical-rl; transform: rotate(180deg); display: inline-block; white-space: nowrap; line-height: 1; font-size: 9px; overflow: visible; }
    .grade-sheet .gs-small { font-size: 9px; }
    .grade-sheet .score-full { font-size: 10px; height: 4.5mm !important; }
    .grade-sheet .blank-head { background: #fff; }
    /* signature */
    .score-sig { width: 100%; margin-top: 3.5mm; padding-left: 42mm; padding-right: 4mm; font-size: 11px; font-weight: 700; line-height: 1; }
    .score-sig-row { display: grid; grid-template-columns: 16mm 1fr 44mm; column-gap: 2mm; align-items: end; height: 6.7mm; margin-bottom: .5mm; }
    .score-sig-lbl { text-align: left; padding-bottom: .7mm; }
    .score-sig-line { border-bottom: 1px dotted #000; min-height: 4mm; text-align: center; padding-bottom: .6mm; font-weight: 600; }
    .score-sig-role { text-align: left; padding-bottom: .7mm; white-space: nowrap; }

    /* ── Page 5 ── */
    .date-table { width:100%; border-collapse:collapse; border:1.5px solid #000; table-layout:fixed; }
    .date-table th, .date-table td { font-size: 8.5pt; padding: 0 3px; text-align: center; border: 1px solid #000; height: 5mm; }
    .date-table th { font-weight:700; }
    .date-table .wk { width:12mm; }
    .date-table .ep { width:11mm; }
    .date-table .dt { width:20mm; }

    /* ── ACDMVOC (สามัญปวช.) — เทมเพลตแยก ดัดแปลงจากไฟล์อ้างอิงจริงของวิทยาลัย (files.html) ── */
    .voc-page { width: 210mm; height: 297mm; margin: 0; background: #fff; position: relative; overflow: hidden; page-break-after: always; }
    .voc-page:last-child { page-break-after: auto; }
    .voc-page-inner { width: 100%; height: 100%; font-family: 'Sarabun', sans-serif; }
    .voc-page-inner table { border-collapse: collapse; width: 100%; table-layout: fixed; }
    .voc-page-inner th, .voc-page-inner td { border: .35mm solid #111; padding: 0; vertical-align: middle; }
    .voc-center { text-align: center; } .voc-left { text-align: left; } .voc-right { text-align: right; }
    .voc-bold { font-weight: 700; } .voc-small { font-size: 13px; } .voc-tiny { font-size: 10.5px; }
    .voc-line-fill { display: inline-block; min-width: 34mm; line-height: 1.6; padding-bottom: .5mm; border-bottom: .3mm dotted #333; vertical-align: baseline; }
    .voc-line-fill.voc-short { min-width: 16mm; } .voc-line-fill.voc-medium { min-width: 26mm; }
    .voc-line-fill.voc-long { min-width: 75mm; } .voc-line-fill.voc-xlong { min-width: 120mm; }
    .voc-vtext { writing-mode: vertical-rl; transform: rotate(180deg); white-space: nowrap; text-align: center; display: inline-block; }
    .voc-sig-line { display: inline-block; border-bottom: .3mm dotted #222; min-width: 55mm; height: 1em; }
    .voc-check-box { display: inline-block; width: 5mm; height: 5mm; border: .5mm solid #777; border-radius: .5mm; vertical-align: -1mm; margin: 0 1.5mm 0 4mm; }

    /* Page 1 */
    .voc-p1 { padding: 14mm 18mm 10mm; font-size: 16px; }
    .voc-p1 .voc-logo-frame { display: flex; align-items: center; justify-content: center; width: 22mm; height: 22mm; border: .25mm solid #111; border-radius: 50%; margin: 0 auto 1.5mm; overflow: hidden; }
    .voc-p1 .voc-logo { display: block; width: 110%; height: 110%; margin: -5%; object-fit: cover; }
    .voc-p1 .voc-title1 { font-size: 21px; font-weight: 700; text-align: center; margin: 0 0 3mm; }
    .voc-p1 .voc-title2 { font-size: 20px; font-weight: 700; text-align: center; margin: 0 0 3mm; }
    .voc-p1 .voc-title3 { font-size: 19px; font-weight: 700; text-align: center; margin: 0 0 5mm; }
    .voc-p1 .voc-info { margin-top: .5mm; font-size: 16px; }
    .voc-p1 .voc-info-row { display: flex; align-items: flex-end; gap: 3mm; margin: 2.1mm 0; white-space: nowrap; }
    .voc-p1 .voc-info-row .voc-item { display: inline-flex; align-items: flex-end; gap: 1.2mm; }
    .voc-p1 .voc-grade-table { margin-top: 2.5mm; font-size: 14.5px; }
    .voc-p1 .voc-grade-table th { height: 10mm; font-weight: 400; }
    .voc-p1 .voc-grade-table td { height: 7.5mm; text-align: center; }
    .voc-p1 .voc-grade-table td.voc-remark { text-align: left; padding-left: 2mm; }
    .voc-p1 .voc-consider { margin: 2mm 0 5mm; font-weight: 700; font-size: 15px; }
    .voc-p1 .voc-sign-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 7mm 18mm; margin: 0 5mm; font-size: 14px; }
    .voc-p1 .voc-sign-block { text-align: center; min-height: 17mm; white-space: nowrap; font-size: 13px; }
    .voc-p1 .voc-sign-block .voc-sig-line { min-width: 38mm !important; }
    .voc-p1 .voc-sign-wide .voc-sig-line { min-width: 45mm !important; }
    .voc-p1 .voc-sign-wide { grid-column: 1 / -1; margin: 0 auto; width: 78%; }
    .voc-p1 .voc-approve { margin-top: 5mm; text-align: center; font-size: 14.5px; }
    .voc-p1 .voc-director { margin-top: 6mm; text-align: center; font-size: 14px; }

    /* Page 2 — บันทึกการไม่มาเรียน */
    .voc-p2 { padding: 15mm 6mm 10mm; }
    .voc-p2-title { font-size: 16px; font-weight: 700; text-align: center; margin-bottom: 1mm; }
    .voc-attendance { font-size: 9.5px; }
    .voc-attendance th { font-weight: 400; }
    .voc-attendance .voc-h-main { height: 18mm; }
    .voc-attendance .voc-h-sub { height: 7mm; }
    .voc-attendance .voc-h-num { height: 6mm; }
    .voc-attendance tbody td { height: var(--att-row-h, 4.55mm); }
    .voc-attendance .voc-student-no { text-align: center; }
    .voc-attendance .voc-student-id { text-align: center; }
    .voc-attendance .voc-student-name { padding-left: 1mm; }
    .voc-attendance .voc-att { text-align: center; }
    .voc-attendance .voc-score { text-align: center; }
    .voc-attendance .voc-sched-week { text-align: center; }
    .voc-attendance .voc-sched-period { text-align: center; }
    .voc-attendance .voc-sched-date { text-align: center; }
    .voc-attendance .voc-instruction { padding: .6mm 1mm; line-height: 1.1; text-align: left; }
    .voc-attendance .voc-blue { color: #005bbb; font-weight: 700; }
    .voc-attendance .voc-red { color: #d00; font-weight: 700; }
    .voc-att-flex { display: flex; align-items: flex-start; }
    .voc-att-flex table.voc-attendance { width: auto; }
    .voc-attendance .voc-orange { color: #e67e00; font-weight: 700; }

    /* Page 3 — แบบประเมินผลการเรียน */
    .voc-p3 { padding: 14mm 6mm 10mm; }
    .voc-p3-title { font-size: 20px; font-weight: 700; text-align: center; margin-bottom: 3mm; }
    .voc-eval { font-size: 10.5px; }
    .voc-eval th { font-weight: 400; line-height: 1.25; text-align: center; }
    .voc-eval .voc-h-top { height: 10mm; }
    .voc-eval .voc-h-vertical { height: 14mm; }
    .voc-eval .voc-h-score { height: 5mm; }
    .voc-eval .voc-vtext { line-height: 1.35; }
    .voc-eval tbody td { height: 4.8mm; }
    .voc-eval .voc-c-no { width: 5mm; text-align: center; }
    .voc-eval .voc-c-id { width: 19.5mm; text-align: center; }
    .voc-eval .voc-c-name { width: 43.5mm; padding-left: 1mm; }
    .voc-eval .voc-c-obj { width: 7mm; text-align: center; word-break: break-word; }
    .voc-eval .voc-c-sum80 { width: 9.5mm; text-align: center; }
    .voc-eval .voc-c-moral { width: 9.5mm; text-align: center; }
    .voc-eval .voc-c-total { width: 9.5mm; text-align: center; }
    .voc-eval .voc-c-grade { width: 12.5mm; text-align: center; }
    .voc-eval .voc-c-note { width: 12.5mm; text-align: center; }
    .voc-p3 .voc-footer-sigs { display: grid; grid-template-columns: 1fr 1fr; gap: 18mm; margin: 7mm 18mm 0; font-size: 13px; }
    .voc-p3 .voc-footer-sigs > div { text-align: center; white-space: nowrap; }
    .voc-p3 .voc-footer-sigs .voc-sig-line { min-width: 38mm !important; }

    /* Page 4 — จุดประสงค์/กำหนดการสอน */
    .voc-p4 { padding: 20mm 16mm 10mm; font-size: 16px; }
    .voc-p4 .voc-course-title { text-align: center; font-size: 17px; margin-bottom: 2mm; }
    .voc-p4 .voc-course-code { text-align: center; font-size: 16px; margin-bottom: 2mm; }
    .voc-p4 .voc-objective-table { font-size: 14px; }
    .voc-p4 .voc-objective-table th { height: 8mm; font-weight: 400; }
    .voc-p4 .voc-objective-table td { height: 7mm; }
    .voc-p4 .voc-schedule-title { text-align: center; font-size: 18px; margin: 5.5mm 0 2mm; }
    .voc-p4 .voc-schedule-table { font-size: 14px; }
    .voc-p4 .voc-schedule-table th { height: 7mm; font-weight: 400; }
    .voc-p4 .voc-schedule-table td { height: 5.45mm; }
    .voc-p4 .voc-sign-bottom { text-align: center; margin-top: 2mm; font-size: 14px; white-space: nowrap; }
  `}function At(t){var rt,g;const{cls:c,ms:s,credit:r,prefix:o,cfg:e,students:l,scoreColumns:C,scoreMap:v,teacher:m,dept:w,deptNameTH:$,deptHeadName:u,hrSamai:y,hrReligion:H,academicYear:j,semester:S,sessions:A,readingEvalMap:R}=t,f=a(e[`${o}SchoolName`]??e.samaiSchoolName??""),n=a(e[`${o}SchoolAddress`]??e.samaiSchoolAddress??""),i=e[`${o}LogoBwUrl`]||e[`${o}LogoUrl`]||e.samaiLogoBwUrl||e.samaiLogoUrl||"",h=a(e[`${o}DirectorName`]??"");e[`${o}DirectorSignUrl`];const p=a(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),d=["AGM","AGMVOC"].includes(s.subject_group),_=a(d?e.agmAcademicHeadName??e[`${o}AcademicHeadName`]??"":e[`${o}AcademicHeadName`]??"");d?e.agmAcademicHeadSignUrl??e[`${o}AcademicHeadSignUrl`]:e[`${o}AcademicHeadSignUrl`];const b=a((d?e.agmAcademicHeadTitle:e[`${o}AcademicHeadTitle`])||"หัวหน้าฝ่ายบริหารวิชาการ"),M=a(d?e.agmRegistrarName??e[`${o}RegistrarName`]??"":e[`${o}RegistrarName`]??"");d?e.agmRegistrarSignUrl??e[`${o}RegistrarSignUrl`]:e[`${o}RegistrarSignUrl`];const x=a((d?e.agmRegistrarTitle:e[`${o}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล"),z=a(u);w==null||w.head_sign_url;const D=c.class_name??"",T=!d&&(["4","5","6"].some(L=>(s.grade_level??"").includes(L))||["ACDMVOC"].includes(s.subject_group)),B=d?D.startsWith("PR")?"PR":D.startsWith("อก")?"อก":D.startsWith("อป")?"อป":"":"",P=A!=null&&A.length?Math.round(A.length/20):r*2,O=(A==null?void 0:A.length)??r*2*20,F=!!window._pp5HideScores,I=C.reduce((L,U)=>L+(U.max_score??0),0),Y={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},k={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0},W={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0};if(!F)for(const L of l){const U=v[L.id]??{},G=C.reduce((st,pt)=>st+(U[pt.id]??0),0);let V=0;if(I>0){const st=G/I*100;V=ht(st);const pt=String(V);pt in Y&&Y[pt]++}const et=R==null?void 0:R[L.id];et&&et in k&&k[et]++;const mt=jt(V);mt in W&&W[mt]++}const E=L=>`<span class="box${L?" checked":""}"></span>`,q=d?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",Q=d?"76mm":"83mm",K=d?"115mm":"117.4mm",Z=d?`
    <div class="check-line">${E(B==="PR")}<span>ตอนต้น (PR)</span></div>
    <div class="check-line">${E(B==="อก")}<span>ตอนกลาง (อก.)</span></div>
    <div class="check-line">${E(B==="อป")}<span>ตอนปลาย (อป.)</span></div>
  `:`
    <div class="check-line">${E(!T)}<span>ตอนต้น (ม.1-ม.3)</span></div>
    <div class="check-line">${E(T)}<span>ตอนปลาย (ม.4-ม.6)</span></div>
  `,tt=$.length>15?`<span class="uline w-md" style="white-space:normal;line-height:4.5mm;min-height:9mm;vertical-align:bottom;">${a($)}</span>`:`<span class="uline w-md">${a($)}</span>`,J=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",it=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",N=d?`
    <div class="info-line">
      <span>${J}</span>${tt}
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`:`
    <div class="info-line">
      <span>${J}</span>${tt}
      <span>รายวิชา</span><span class="uline w-lg">${a(s.subject_name??"")}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`,at=[4,"3.5",3,"2.5",2,"1.5",1,0].map(L=>`<td>${Y[String(L)]||""}</td>`).join(""),ct=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(L=>`<td>${k[L]||""}</td>`).join(""),dt=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(L=>`<td>${W[L]||""}</td>`).join("");return`
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${i?`<div class="logo-wrap"><img src="${a(i)}" alt="ตราโรงเรียน" /></div>`:""}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${Q};">${q}</div>
      <div class="checks" style="left:${K};">${Z}</div>
    </section>

    <div class="school">${f}</div>
    <div class="school-sub">${n}</div>

    <section class="info">
      <div class="info-line">
        <span>${q}</span><span class="uline w-sm">${a(X(c.class_name))}</span>
        <span>ภาคเรียนที่</span><span class="uline w-md">${S}</span>
        <span>ปีการศึกษา</span><span class="uline w-yr">${j}</span>
      </div>
      ${N}
      <div class="info-line">
        <span>จำนวน</span><span class="uline w-xs">${r}</span>
        <span>หน่วยกิต</span>
        <span>เวลาเรียน</span><span class="uline w-xs">${P}</span>
        <span>ชั่วโมง/สัปดาห์</span>
        <span>รวมเวลาเรียน</span><span class="uline w-xs">${O}</span>
        <span>ชั่วโมง/ภาค</span>
      </div>
      <div class="info-row-one"><span>ครูผู้สอน</span><span class="uline-xl">${a((m==null?void 0:m.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาสามัญ</span><span class="uline-xl">${a(((rt=y==null?void 0:y.teachers)==null?void 0:rt.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาศาสนา</span><span class="uline-xl">${a(((g=H==null?void 0:H.teachers)==null?void 0:g.full_name)??"")}</span></div>
    </section>

    <section class="summary-box">
      <table class="grade-table">
        <colgroup>
          <col class="col-tot"/>
          <col span="8" class="col-g"/>
          <col span="2" class="col-gs"/>
          <col class="col-note"/>
        </colgroup>
        <tr>
          <th rowspan="3">จำนวน<br>นักเรียน<br>ทั้งหมด</th>
          <th colspan="10">สรุปผลการเรียน</th>
          <th>หมายเหตุ</th>
        </tr>
        <tr>
          <th colspan="10" class="stitle">จำนวนนักเรียนที่ได้รับผลการเรียน</th>
          <td rowspan="2"></td>
        </tr>
        <tr>
          <th>4</th><th>3.5</th><th>3</th><th>2.5</th>
          <th>2</th><th>1.5</th><th>1</th><th>0</th>
          <th>ร</th><th>มส</th>
        </tr>
        <tr>
          <td>${l.length}</td>${at}<td></td><td></td><td></td>
        </tr>
        <tr><td colspan="12" class="evspc"></td></tr>
      </table>
      <table class="eval-table">
        <colgroup>
          <col class="col-elbl"/><col/><col/><col/><col/><col class="col-note"/>
        </colgroup>
        <tr>
          <th>สรุปผลการประเมิน</th>
          <th>ดีเยี่ยม</th><th>ดี</th><th>ผ่าน</th><th>ไม่ผ่าน</th><th>หมายเหตุ</th>
        </tr>
        <tr>
          <td>การประเมินการอ่าน คิด<br>วิเคราะห์และเขียนสื่อความ</td>
          ${ct}<td></td>
        </tr>
        <tr>
          <td>การประเมินคุณลักษณะ<br>อันพึงประสงค์</td>
          ${dt}<td></td>
        </tr>
      </table>
    </section>

    <section class="approval">
      <div class="apl-title">การอนุมัติผลการพัฒนาคุณภาพผู้เรียน</div>

      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${a((m==null?void 0:m.full_name)??"")}</span>
        <span>ครูผู้สอน</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${z}</span>
        <span>${it}</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${M}</span>
        <span>${x}</span>
      </div>

      <div class="consider">เสนอเพื่อพิจารณา</div>

      <div class="ctr-block">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${_}</span>
        </div>
        <div class="p1-role">${b}</div>
      </div>

      <div class="decision">
        <span>${E(!0)}&nbsp; อนุมัติ</span>
        <span>${E(!1)}&nbsp; ไม่อนุมัติ</span>
      </div>

      <div class="ctr-block director">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${h}</span>
        </div>
        <div class="p1-role">${p}</div>
      </div>
    </section>
  </div>`}function Mt(t){const{cls:c,ms:s,credit:r,cfg:o,courseDoc:e,thColHeaders:l,thColsExtra:C,thRowHeader:v,teacher:m,deptNameTH:w,deptHeadName:$,academicYear:u,semester:y,prefix:H,sessions:j}=t,S=(j==null?void 0:j.length)??r*2*20,A=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",R=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",f=o[`${H}LogoBwUrl`]||o[`${H}LogoUrl`]||o.samaiLogoBwUrl||o.samaiLogoUrl||"",n=Array.isArray(e==null?void 0:e.table_rows)?e.table_rows:[],i=(e==null?void 0:e.text_direction)==="rtl"?"rtl":(e==null?void 0:e.text_direction)==="ltr"?"ltr":"auto",p=(Array.isArray(e==null?void 0:e.table_columns)?e.table_columns.length:2)===1,d=p?[C[0]??"ผลการเรียนรู้"]:l??["มาตรฐานการเรียนรู้","ตัวชี้วัด"],_=n,b=(O,F="")=>[Array.isArray(O)&&O.length?O.join(", "):"",(F??"").trim()].filter(Boolean).join(", "),M=b(e==null?void 0:e.between_objective_items,e==null?void 0:e.between_objective_extra),x=b(e==null?void 0:e.midterm_objective_items,e==null?void 0:e.midterm_objective_extra),z=b(e==null?void 0:e.final_objective_items,e==null?void 0:e.final_objective_extra),D=["AGM","AGMVOC"].includes(s.subject_group),T=["1 รักชาติ ศาสน์ กษัตริย์","2 ซื่อสัตย์สุจริต","3 มีวินัย","4 ใฝ่เรียนรู้","5 อยู่อย่างพอเพียง"],B=["6 มุ่งมั่นในการทำงาน","7 รักความเป็นไทย","8 มีจิตสาธารณะ","9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ"],P=D?"ระดับชั้นอิสลามศึกษา":"ระดับชั้น";return`
  <div class="p2-wrap">
    <!-- Logo + Title -->
    ${f?`<div class="p2-logo-wrap"><img src="${a(f)}" alt="โลโก้"/></div>`:'<div style="height:5mm;"></div>'}
    <div class="p2-title">มาตรฐานการเรียนรู้และตัวชี้วัด/รายภาค</div>

    <!-- Header -->
    <div class="p2-hdr">
      <!-- คอลัมน์ซ้าย -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รายวิชา</span>
          <span class="p2-uline p2-uline-fill">${a(s.subject_name??"")}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">${P}</span>
          <span class="p2-uline p2-uline-fill">${a(X(c.class_name??""))}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ครูผู้สอน</span>
          <span class="p2-uline p2-uline-fill">${a((m==null?void 0:m.full_name)??"")}</span>
        </div>
      </div>
      <!-- คอลัมน์ขวา -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รหัสวิชา</span>
          <span class="p2-uline">${a(s.subject_code??"")}</span>
          <span class="p2-label">${A}</span>
          <span class="p2-uline p2-uline-fill">${a(w)}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ภาคเรียนที่</span>
          <span class="p2-uline">${a(String(y))}</span>
          <span class="p2-label">ปีการศึกษา</span>
          <span class="p2-uline">${a(String(u))}</span>
          <span class="p2-label">เวลา</span>
          <span class="p2-uline p2-uline-fill">${a(String(S))}</span>
          <span class="p2-label">ชั่วโมง</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">จำนวน</span>
          <span class="p2-uline">${a(String(r))}</span>
          <span class="p2-label">หน่วยกิต</span>
        </div>
      </div>
    </div>

    <!-- Standards Table -->
    ${p?`
    <table class="std-table" style="table-layout:fixed;">
      <thead>
        <tr>
          <th style="width:100%;" dir="ltr">${a(d[0])}</th>
        </tr>
      </thead>
      <tbody>
        ${_.map((O,F)=>{const I=a(Array.isArray(O)?O[0]??"":""),Y=F+1;return`<tr><td class="std-row" dir="${i}" style="padding:1.5mm 2.5mm;">
            <span style="display:inline-flex;gap:5px;align-items:flex-start;width:100%;">
              <b style="flex-shrink:0;min-width:16px;text-align:center;">${Y}.</b>
              <span style="flex:1;">${I}</span>
            </span>
          </td></tr>`}).join("")}
        <tr class="std-fill-row"><td></td></tr>
      </tbody>
    </table>`:`
    <table class="std-table" dir="${i}">
      <thead>
        <tr>
          <th style="width:50mm;">${a(d[0]??"มาตรฐานการเรียนรู้")}</th>
          <th>${a(d[1]??"ตัวชี้วัด")}</th>
        </tr>
      </thead>
      <tbody>
        ${_.map(O=>`<tr>
          <td class="std-row">${a(Array.isArray(O)?O[0]??"":"")}</td>
          <td class="std-row">${a(Array.isArray(O)?O[1]??"":"")}</td>
        </tr>`).join("")}
        <tr class="std-fill-row"><td></td><td></td></tr>
      </tbody>
    </table>`}

    <!-- Footer: Objectives + คุณลักษณะ -->
    <div class="p2-footer">
      <div class="p2-obj">
        <p>จุดประสงค์วัดผลรายจุดประสงค์ ข้อที่ <u>${M}</u></p>
        <p>จุดประสงค์วัดผลกลางภาค ข้อที่ <u>${x}</u></p>
        <p>จุดประสงค์วัดผลปลายภาค ข้อที่ <u>${z}</u></p>
      </div>
      <div class="p2-char">
        <div class="p2-char-title">คุณลักษณะอันพึงประสงค์</div>
        <div class="p2-char-grid">
          <div>${T.map(O=>`<div>${a(O)}</div>`).join("")}</div>
          <div>${B.map(O=>`<div>${a(O)}</div>`).join("")}</div>
        </div>
      </div>
    </div>

    <!-- Signature -->
    <div class="p2-sig">
      ลงชื่อ <span style="display:inline-block;border-bottom:.3mm dashed #555;min-width:60mm;text-align:center;padding:0 2mm;">
        ${a($)}
      </span> ${R}
    </div>
  </div>`}const $t=50;function Ht(t){const{cls:c,ms:s,credit:r,cfg:o,students:e,attMap:l,sessions:C,academicYear:v,semester:m,teacher:w}=t,$=[];for(let u=0;u<e.length;u+=$t){const y=e.slice(u,u+$t);$.push(ie(t,y,u+1))}return $.join("")}function ie(t,c,s){const{cls:r,ms:o,teacher:e,academicYear:l,semester:C,cfg:v,prefix:m}=t,w=(v==null?void 0:v[`${m}LogoBwUrl`])||(v==null?void 0:v[`${m}LogoUrl`])||(v==null?void 0:v.samaiLogoBwUrl)||(v==null?void 0:v.samaiLogoUrl)||"",$=40,u=c.length+1,y=Math.max(3.5,Math.min(5.5,Math.floor(241/u*10)/10)).toFixed(1),H="3.2mm",j=c.map((R,f)=>{const n=t.attMap[R.id]??{},i=[];for(const[d,_]of Object.entries(n))_!=="present"&&i.push({n:parseInt(d),status:_});i.sort((d,_)=>d.n-_.n);const h=i.length,p=Array.from({length:$},(d,_)=>{const b=i[_];return b?`<td class="${b.status==="absent"?"att-absent":b.status==="leave"?"att-leave":b.status==="sick"?"att-sick":"att-absent"}">${b.n}</td>`:"<td></td>"});return`<tr>
      <td class="text-center">${s+f}</td>
      <td class="att-code text-center">${a(R.student_code??"")}</td>
      <td class="att-name">${a(R.full_name??"")}</td>
      ${p.join("")}
      <td class="text-center font-bold">${h||""}</td>
    </tr>`}),S=Array.from({length:$},(R,f)=>`<th>${f+1}</th>`).join(""),A=3+$+1;return`
  <div class="page-tight">
    <div class="att-top">
      ${w?`<div class="att-logo"><img src="${a(w)}" alt="โลโก้" /></div>`:'<div style="width:18mm;flex-shrink:0;"></div>'}
      <div class="att-info">
        <div class="att-title">บันทึกการไม่มาเรียนของนักเรียนชั้น ${a(X(r.class_name))}</div>
        <div class="att-hdr-row">
          <span class="att-label">ปีการศึกษา</span>
          <span class="att-uline">${a(String(l))}</span>
          <span class="att-label" style="margin-left:4mm;">ภาคเรียนที่</span>
          <span class="att-uline">${a(String(C))}</span>
        </div>
        <div class="att-hdr-row2">
          <div class="att-hdr-col">
            <span class="att-label">รายวิชา</span>
            <span class="att-uline att-uline-fill">${a(o.subject_name??"")}</span>
          </div>
          <div class="att-hdr-col">
            <span class="att-label">รหัสวิชา</span>
            <span class="att-uline att-uline-fill">${a(o.subject_code??"")}</span>
          </div>
        </div>
        <div class="att-hdr-row">
          <span class="att-label">ครูผู้สอน</span>
          <span class="att-uline att-uline-fill">${a((e==null?void 0:e.full_name)??"")}</span>
        </div>
      </div>
    </div>
    <table class="att-table" style="--att-row-h:${y}mm">
      <colgroup>
        <col style="width:6mm;"/>
        <col style="width:13mm;"/>
        <col style="width:36mm;"/>
        ${Array.from({length:$},()=>`<col style="width:${H};"/>`).join("")}
        <col style="width:10mm;"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="${A}" style="text-align:left;font-weight:normal;padding:0.8mm 1mm;border-bottom:none;">
            บันทึกคาบที่สอนที่นักเรียนไม่ได้มาเรียน:&ensp;
            <span style="color:#c00;font-weight:700;">ขาด</span>&ensp;
            <span style="color:#00c;font-weight:700;">ลา</span>&ensp;
            <span style="color:#c60;font-weight:700;">ป่วย</span>
          </th>
        </tr>
        <tr>
          <th rowspan="2" style="font-size:7pt;">เลขที่</th>
          <th rowspan="2" style="font-size:7pt;">เลขประจำตัว</th>
          <th rowspan="2" style="font-size:7pt;">ชื่อ - สกุล</th>
          <th colspan="${$}" style="font-size:7pt;">บันทึกการไม่มาเรียน</th>
          <th rowspan="2" style="font-size:7pt;">รวมเวลา<br/>ไม่มาเรียน</th>
        </tr>
        <tr>${S}</tr>
      </thead>
      <tbody>
        ${j.join("")}
        <tr><td></td><td></td><td></td>${Array.from({length:$},()=>"<td></td>").join("")}<td></td></tr>
      </tbody>
    </table>
  </div>`}const _t=50;function zt(t){const{students:c}=t,s=[];for(let r=0;r<c.length;r+=_t)s.push(ce(t,c.slice(r,r+_t),r+1));return s.join("")}function ce(t,c,s){var I,Y;const{cls:r,ms:o,teacher:e,deptHeadName:l,academicYear:C,semester:v,scoreColumns:m,scoreMap:w,readingEvalMap:$}=t,u=o.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้าหมวดวิชา",y=k=>k.assignment_type==="ปลายภาค"||k.assignment_type==="final",H=k=>k.assignment_type==="คะแนนพิเศษ",j=m.filter(k=>!y(k)&&!H(k));m.filter(k=>H(k));const S=m.filter(k=>y(k)),A=5,R=5,f={id:null,assignment_name:"",max_score:""},n=[...j,...Array(Math.max(0,A-j.length)).fill(f)],i=[...S,...Array(Math.max(0,R-S.length)).fill(f)],h=j.reduce((k,W)=>k+(W.max_score??0),0),p=S.reduce((k,W)=>k+(W.max_score??0),0),d=n.length+1,_=i.length+2,b=d+_,x=3+b+3,z=c.length+1,D=Math.max(3.8,Math.min(5.8,Math.floor(160/z*10)/10)).toFixed(1),T=!!window._pp5HideScores,B=c.map((k,W)=>{if(T)return`<tr>
        <td>${s+W}</td>
        <td>${a(k.student_code??"")}</td>
        <td class="gs-name" style="border-right:2.0px solid #000;">${a(k.full_name??"")}</td>
        ${n.map(()=>"<td></td>").join("")}
        <td></td>
        ${i.map(()=>"<td></td>").join("")}
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
      </tr>`;const E=w[k.id]??{},q=n.map(N=>N.id?ot(t.roundSettings,ut(N),E[N.id],N.column_type==="derived"?2:1):""),Q=i.map(N=>N.id?ot(t.roundSettings,ut(N),E[N.id],N.column_type==="derived"?2:1):""),K=j.reduce((N,at)=>N+Number(E[at.id]??0),0),Z=S.reduce((N,at)=>N+(E[at.id]??0),0),tt=K+Z,J=ht(h+p>0?tt/(h+p)*100:0),it=jt(J);return`<tr>
      <td>${s+W}</td>
      <td>${a(k.student_code??"")}</td>
      <td class="gs-name" style="border-right:2.0px solid #000;">${a(k.full_name??"")}</td>
      ${q.map(N=>`<td>${N}</td>`).join("")}
      <td style="font-weight:700;">${ot(t.roundSettings,"mid_subtotal",K)}</td>
      ${Q.map(N=>`<td>${N}</td>`).join("")}
      <td style="font-weight:700;">${ot(t.roundSettings,"fin_subtotal",Z)}</td>
      <td style="font-weight:700;border-right:2.0px solid #000;">${ot(t.roundSettings,"total",tt)}</td>
      <td>${a(($==null?void 0:$[k.id])??"")}</td>
      <td style="border-right:2.0px solid #000;">${a(it)}</td>
      <td style="font-weight:700;">${J}</td>
    </tr>`}),P=`<tr>${Array(x).fill("<td></td>").join("")}</tr>`,O=j.length>6?"5mm":"5.8mm",F=S.length>5?"5mm":"5.5mm";return`
  <div class="score-wrap">
    <div class="score-top-info">
      <div class="sc-field"><span class="sc-lbl">รายวิชา</span><span class="sc-val">${a(o.subject_name??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">รหัสวิชา</span><span class="sc-val">${a(o.subject_code??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">ชั้น</span><span class="sc-val">${a(X(r.class_name))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ภาคเรียนที่</span><span class="sc-val">${a(String(v))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ปีการศึกษา</span><span class="sc-val">${a(String(C))}</span></div>
    </div>
    <table class="grade-sheet" style="--row-h:${D}mm">
      <colgroup>
        <col style="width:5mm;"/>
        <col style="width:12mm;"/>
        <col style="width:45mm;"/>
        ${n.map(()=>`<col style="width:${O};"/>`).join("")}
        <col style="width:7mm;"/>
        ${i.map(()=>`<col style="width:${F};"/>`).join("")}
        <col style="width:7mm;"/>
        <col style="width:8mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:8.5mm;"/>
      </colgroup>
      <thead>
        <!-- Row 1: ผู้เรียน คลุม 3 คอลัมน์ + section header + result cols rs5 -->
        <tr>
          <th colspan="3" style="border-right:2.5px solid #000;">ผู้เรียน</th>
          <th colspan="${b}" style="border-right:2.0px solid #000;">วัดผลระหว่างภาค / ปลายภาค</th>
          <th rowspan="5" class="v"><span style="font-size:7px;">ประเมินการอ่านคิดวิเคราะห์และเขียน</span></th>
          <th rowspan="5" class="v" style="border-right:2.0px solid #000;"><span style="font-size:7px;">ประเมินคุณลักษณะอันพึงประสงค์</span></th>
          <th rowspan="5" class="v"><span>ระดับการเรียน</span></th>
        </tr>
        <!-- Row 2: เลขที่(v,rs4) | เลขประจำตัว(v,rs4) | ชื่อ-สกุล(rs4) | อัตราส่วน -->
        <tr>
          <th rowspan="4" class="v"><span>เลขที่</span></th>
          <th rowspan="4" class="v"><span>เลขประจำตัว</span></th>
          <th rowspan="4" style="border-right:2.0px solid #000;">ชื่อ - สกุล</th>
          <th colspan="${b}" style="font-size:7px;padding:1px;border-right:2.0px solid #000;">อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${h} / ${p}</th>
        </tr>
        <!-- Row 3: between/final section headers (3 student cols covered by rs4) -->
        <tr>
          <th colspan="${n.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนระหว่างเรียน/กลางภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนระหว่างภาค</span></th>
          <th colspan="${i.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนปลายภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนปลายภาค</span></th>
          <th rowspan="2" class="v" style="border-right:2.0px solid #000;"><span>รวมคะแนน 100</span></th>
        </tr>
        <!-- Row 4: column name verticals (3 student cols covered by rs4) -->
        <tr>
          ${n.map(k=>`<th class="v" style="overflow:visible;"><span>${a(k.assignment_name??"")}</span></th>`).join("")}
          ${i.map(k=>`<th class="v" style="overflow:visible;"><span>${a(k.assignment_name??"")}</span></th>`).join("")}
        </tr>
        <!-- Row 5: score-full (3 student cols still covered by rs4) -->
        <tr>
          ${n.map(k=>`<th class="score-full">${k.max_score??""}</th>`).join("")}
          <th class="score-full">${h||""}</th>
          ${i.map(k=>`<th class="score-full">${k.max_score??""}</th>`).join("")}
          <th class="score-full">${p||""}</th>
          <th class="score-full" style="border-right:2.0px solid #000;">${h||p?h+p:""}</th>
        </tr>
      </thead>
      <tbody>
        ${B.join("")}
        ${P}
      </tbody>
    </table>
    <div class="score-sig">
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a((e==null?void 0:e.full_name)??"")}</div>
        <div class="score-sig-role">ครูผู้สอน</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a(l)}</div>
        <div class="score-sig-role">${u}</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a(["AGM","AGMVOC"].includes((I=t.ms)==null?void 0:I.subject_group)?t.cfg.agmRegistrarName??t.cfg[`${t.prefix}RegistrarName`]??"":t.cfg[`${t.prefix}RegistrarName`]??"")}</div>
        <div class="score-sig-role">${a((["AGM","AGMVOC"].includes((Y=t.ms)==null?void 0:Y.subject_group)?t.cfg.agmRegistrarTitle??t.cfg[`${t.prefix}RegistrarTitle`]:t.cfg[`${t.prefix}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล")}</div>
      </div>
    </div>
  </div>`}function Rt(t){const{cls:c,ms:s,credit:r,teacher:o,deptNameTH:e,academicYear:l,semester:C,sessions:v,cfg:m,prefix:w,holidaySet:$}=t,u=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",y=["AGM","AGMVOC"].includes(s.subject_group)?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",H=40,j=3,S=v!=null&&v.length?Math.round(v.length/20):Math.max(1,Math.round(r*2)),A=(m==null?void 0:m[`${w}LogoBwUrl`])||(m==null?void 0:m[`${w}LogoUrl`])||(m==null?void 0:m.samaiLogoBwUrl)||(m==null?void 0:m.samaiLogoUrl)||"",R=Array.from({length:j},(d,_)=>Array.from({length:H},(b,M)=>{const x=v[_*H+M];return x?{sess:x,week:Math.ceil(x.n/S)}:null})),f=R.map(d=>d.map((_,b)=>{var x,z;if(!_)return null;if(b>0&&((x=d[b-1])==null?void 0:x.week)===_.week)return 0;let M=1;for(let D=b+1;D<H&&((z=d[D])==null?void 0:z.week)===_.week;D++)M++;return M})),n="border-right:1.5px solid #000;",i=Array.from({length:H},(d,_)=>`<tr>${Array.from({length:j},(M,x)=>{const z=R[x][_],D=f[x][_],T=x<j-1?n:"";if(!z)return`<td></td><td></td><td style="${T}"></td>`;const B=D===0?"":`<td class="wk" rowspan="${D}">${z.week}</td>`,P=$==null?void 0:$.has(z.sess.ds),O=T+(P?"color:#c00;font-weight:700;":"");return`${B}<td class="ep">${z.sess.n}</td><td class="dt" style="${O}">${kt(z.sess.ds)}</td>`}).join("")}</tr>`),h=(d,_="",b=!1)=>`<span style="${b?"flex:1;border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;":`display:inline-block;min-width:${d};border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;`}">${a(String(_))}</span>`,p=d=>`<div style="display:flex;align-items:baseline;gap:2mm;font-size:9pt;margin-bottom:1.5mm;">${d}</div>`;return`
  <div class="page" style="padding:12mm 10mm 8mm;">
    ${A?`<div style="text-align:center;margin-bottom:2mm;"><div style="width:16mm;height:16mm;border-radius:50%;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;"><img src="${a(A)}" style="width:110%;height:110%;margin:-5%;object-fit:contain;display:block;" alt="โลโก้"/></div></div>`:""}
    <div style="text-align:center;font-weight:700;font-size:12pt;margin-bottom:3mm;">รายละเอียดสัปดาห์/คาบ/วันที่สอน</div>
    ${p(`<span>รายวิชา</span>${h("40mm",s.subject_name??"")}
           <span>&emsp;รหัสวิชา</span>${h("22mm",s.subject_code??"")}
           <span>&emsp;${u}</span>${h("",e,!0)}`)}
    ${p(`<span>${y}</span>${h("16mm",X(c.class_name))}
           <span>&emsp;ภาคเรียนที่</span>${h("10mm",C)}
           <span>&emsp;ปีการศึกษา</span>${h("18mm",l)}
           <span>&emsp;เวลา</span>${h("12mm")}
           <span>ชั่วโมง&emsp;จำนวน</span>${h("",r,!0)}
           <span>หน่วยกิต</span>`)}
    ${p(`<span>ครูผู้สอน</span>${h("80mm",(o==null?void 0:o.full_name)??"")}`)}
    <table class="date-table">
      <colgroup>
        <col class="wk"/><col class="ep"/><col class="dt" style="border-right:2.5px solid #000;"/>
        <col class="wk"/><col class="ep"/><col class="dt" style="border-right:2.5px solid #000;"/>
        <col class="wk"/><col class="ep"/><col class="dt"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="9" style="font-size:10pt;">สัปดาห์/คาบ/วันที่สอน</th>
        </tr>
        <tr>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${n}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${n}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt">วันที่/เดือน/ปี</th>
        </tr>
      </thead>
      <tbody>${i.join("")}</tbody>
    </table>
  </div>`}const Dt=["ข.ร.","ข.ส.","ม.ส.","ข.ป."];function re(t){var I,Y;const{cls:c,ms:s,credit:r,prefix:o,cfg:e,students:l,scoreColumns:C,scoreMap:v,teacher:m,deptNameTH:w,deptHeadName:$,hrSamai:u,hrReligion:y,academicYear:H,semester:j,sessions:S,moralScores:A,moralMax:R}=t,f=a(e[`${o}SchoolName`]??e.samaiSchoolName??""),n=e[`${o}LogoUrl`]||e[`${o}LogoBwUrl`]||e.samaiLogoUrl||e.samaiLogoBwUrl||"",i=a(e[`${o}DirectorName`]??""),h=a(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),p=a(e[`${o}RegistrarName`]??""),d=a(e[`${o}RegistrarTitle`]||"ผู้ช่วยผู้อำนวยการฝ่ายทะเบียนวัดผลและประเมินผล"),_=a($),b=S!=null&&S.length?Math.round(S.length/20):r*2,M=(S==null?void 0:S.length)??r*2*20,x=!!window._pp5HideScores,z=C.reduce((k,W)=>k+(W.max_score??0),0)+(R||0),D={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},T={"ข.ร.":0,"ข.ส.":0,"ม.ส.":0,"ข.ป.":0};let B=0,P=0,O=0;if(!x)for(const k of l){if(k.special_result&&Dt.includes(k.special_result)){T[k.special_result]++;continue}const W=v[k.id]??{},E=C.some(q=>W[q.id]!=null);if(E&&O++,z>0){const Q=(C.reduce((tt,J)=>tt+(W[J.id]??0),0)+(Number(A==null?void 0:A[k.id])||0))/z*100,K=ht(Q),Z=String(K);Z in D&&D[Z]++,E&&(K>0?B++:P++)}}const F=[[4,"80 - 100","จำนวนนักเรียนเข้าเรียน",l.length],["3.5","75 - 79","จำนวนนักเรียนเข้าสอบ",O],[3,"70 - 74","จำนวนนักเรียนไม่มีสิทธิ์สอบ (ข.ร.)",T["ข.ร."]],["2.5","65 - 69","จำนวนนักเรียนขาดสอบ (ข.ส.)",T["ข.ส."]],[2,"60 - 64","จำนวนนักเรียนไม่สมบูรณ์ (ม.ส.)",T["ม.ส."]],["1.5","55 - 59","จำนวนนักเรียนขาดการปฏิบัติงาน (ข.ป.)",T["ข.ป."]],[1,"50 - 54","จำนวนนักเรียนผ่าน (ผ)",B],[0,"0 - 49","จำนวนนักเรียนไม่ผ่าน (ม.ผ.)",P]].map(([k,W,E,q])=>`
    <tr>
      <td>${k}</td><td>${W}</td><td>${D[String(k)]||""}</td>
      <td class="voc-remark">${E}</td><td>${q||""}</td>
    </tr>`).join("");return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p1">
      ${n?`<div class="voc-logo-frame"><img class="voc-logo" src="${a(n)}" alt="ตราสถานศึกษา" /></div>`:""}
      <div class="voc-title1">${f}</div>
      <div class="voc-title2">แบบบันทึกเวลาเรียนและประเมินผลการเรียน</div>
      <div class="voc-title3">หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)</div>

      <div class="voc-info">
        <div class="voc-info-row">
          <span class="voc-item">ชั้น <span class="voc-line-fill voc-short">${a(X(c.class_name))}</span></span>
          <span class="voc-item">ภาคเรียนที่ <span class="voc-line-fill voc-short">${j}</span></span>
          <span class="voc-item">ปีการศึกษา <span class="voc-line-fill voc-short">${H}</span></span>
          <span class="voc-item" style="margin-left:auto">แผนกวิชา <span class="voc-line-fill voc-medium">${a(w)}</span></span>
        </div>
        <div class="voc-info-row">
          <span class="voc-item" style="flex:1">รายวิชา <span class="voc-line-fill voc-long" style="flex:1">${a(s.subject_name??"")}</span></span>
          <span class="voc-item">รหัสวิชา <span class="voc-line-fill voc-medium">${a(s.subject_code??"")}</span></span>
        </div>
        <div class="voc-info-row voc-center" style="justify-content:center; gap:10mm">
          <span class="voc-item"><span class="voc-line-fill voc-short">${r}</span> หน่วยกิต</span>
          <span class="voc-item">เวลาเรียน <span class="voc-line-fill voc-short">${b}</span> ชั่วโมง/สัปดาห์</span>
          <span class="voc-item">รวมเวลาเรียน <span class="voc-line-fill voc-short">${M}</span> ชั่วโมง/ภาค</span>
        </div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูผู้สอน <span class="voc-line-fill voc-xlong" style="flex:1">${a((m==null?void 0:m.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาสามัญ <span class="voc-line-fill voc-xlong" style="flex:1">${a(((I=u==null?void 0:u.teachers)==null?void 0:I.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาศาสนา <span class="voc-line-fill voc-xlong" style="flex:1">${a(((Y=y==null?void 0:y.teachers)==null?void 0:Y.full_name)??"")}</span></span></div>
      </div>

      <table class="voc-grade-table">
        <colgroup>
          <col style="width:17%"><col style="width:12%"><col style="width:15%"><col style="width:36%"><col style="width:20%">
        </colgroup>
        <thead>
          <tr>
            <th>ระดับผลการเรียน</th><th>ช่วงคะแนน</th><th></th><th>หมายเหตุ</th><th>จำนวนนักเรียน<br>(คน)</th>
          </tr>
        </thead>
        <tbody>${F}</tbody>
      </table>

      <div class="voc-consider">พิจารณาผลการให้ระดับคะแนนเห็นว่าเหมาะสมและถูกต้องแล้ว</div>

      <div class="voc-sign-grid">
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((m==null?void 0:m.full_name)??"")} )</div>
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนกวิชา<br><br>( ${_} )</div>
        <div class="voc-sign-block voc-sign-wide">ลงชื่อ <span class="voc-sig-line"></span> ${d}<br><br>( ${p} )</div>
      </div>

      <div class="voc-approve">อนุมัติผลการเรียน <span class="voc-check-box"></span>อนุมัติ <span class="voc-check-box"></span>ไม่อนุมัติ</div>
      <div class="voc-director">ลงชื่อ <span class="voc-sig-line"></span><br><br>( ${i} )<br>${h}${f}</div>
    </div>
  </section>`}const lt=2;function de(t,c){const s=Math.ceil(((t==null?void 0:t.length)||0)/lt),r=Array.from({length:lt},(e,l)=>Array.from({length:s},(C,v)=>{const m=t[l*s+v];return m?{sess:m,week:Math.ceil(m.n/c)}:null})),o=r.map(e=>e.map((l,C)=>{var m,w;if(!l)return null;if(C>0&&((m=e[C-1])==null?void 0:m.week)===l.week)return 0;let v=1;for(let $=C+1;$<s&&((w=e[$])==null?void 0:w.week)===l.week;$++)v++;return v}));return{N:s,colData:r,colRS:o}}const Ot=233;function me(t){const c=Math.max(6,...(t??[]).map(s=>(s.full_name??"").length));return Math.min(50,Math.max(30,c*2.3))}function pe(t,c,s){const o=Math.max(c.length+3,15),e=Math.max(3,Math.min(7,Ot/o)),l=e<3.6?7.5:e<4.4?8.5:e<5.4?9.5:e<6.2?10.5:11.5,C=Array.from({length:o},(m,w)=>{const $=c[w];if(!$)return`<tr>
        <td class="voc-student-no"></td><td class="voc-student-id"></td><td class="voc-student-name"></td>
        ${Array.from({length:20},()=>"<td></td>").join("")}
        <td class="voc-score"></td>
      </tr>`;const u=t.attMap[$.id]??{},y=[];for(const[j,S]of Object.entries(u))S!=="present"&&y.push({n:parseInt(j),status:S});y.sort((j,S)=>j.n-S.n);const H=Array.from({length:20},(j,S)=>{const A=y[S];return A?`<td style="color:${A.status==="absent"?"#d00":A.status==="leave"?"#005bbb":"#e67e00"};font-weight:700;">${A.n}</td>`:"<td></td>"});return`<tr>
      <td class="voc-student-no voc-center">${w+1}</td>
      <td class="voc-student-id voc-center">${a($.student_code??"")}</td>
      <td class="voc-student-name">${a($.full_name??"")}</td>
      ${H.join("")}
      <td class="voc-score voc-center">-</td>
    </tr>`}),v=Array.from({length:20},(m,w)=>`<th class="voc-att">${w+1}</th>`).join("");return`
  <table class="voc-attendance voc-student-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${l}px">
    <colgroup>
      <col style="width:4.3mm"><col style="width:19mm"><col style="width:${s}mm">
      ${Array.from({length:20},()=>'<col style="width:2.7mm">').join("")}
      <col style="width:10mm">
    </colgroup>
    <thead>
      <tr class="voc-h-main">
        <th rowspan="3" class="voc-student-no"><div class="voc-vtext">เลขที่</div></th>
        <th rowspan="3" class="voc-student-id">เลข<br>ประจำตัว</th>
        <th rowspan="3" class="voc-student-name">ชื่อ - สกุล</th>
        <th colspan="20" class="voc-instruction">
          บันทึกคาบที่สอนนักเรียนที่ไม่มาเรียนในช่องครั้งที่ไม่มาเรียน<br>
          ตั้งแต่ครั้งที่ 1 และต่อไปตามลำดับ เช่น นักเรียนที่ขาดเช็คด้วยสี<span class="voc-red">แดง</span>
          นักเรียนที่ลากิจใช้ตัวเลข<span class="voc-blue">สีน้ำเงิน</span> และนักเรียนที่ป่วยใช้ตัวเลข<span class="voc-orange">สีส้ม</span>
        </th>
        <th rowspan="2" class="voc-score">สรุปคะแนน<br>มาเรียน</th>
      </tr>
      <tr class="voc-h-sub">
        <th colspan="20">บันทึกการไม่มาเรียน</th>
      </tr>
      <tr class="voc-h-num">
        ${v}
        <th class="voc-score">10</th>
      </tr>
    </thead>
    <tbody>${C.join("")}</tbody>
  </table>`}function ge(t,c){const{N:s,colData:r,colRS:o}=t,e=Math.max(1.6,Math.min(4.55,Ot/Math.max(1,s))),l=e<2.4?6:e<3.2?7:e<4?8:9.5,C=Array.from({length:s},(v,m)=>`<tr>${Array.from({length:lt},($,u)=>{const y=r[u][m],H=o[u][m];if(!y)return'<td class="voc-sched-week"></td><td class="voc-sched-period"></td><td class="voc-sched-date"></td>';const j=H===0?"":`<td class="voc-sched-week voc-center" rowspan="${H}">${y.week}</td>`,S=c==null?void 0:c.has(y.sess.ds);return`${j}<td class="voc-sched-period voc-center">${y.sess.n}</td><td class="voc-sched-date voc-center" style="${S?"color:#c00;font-weight:700;":""}">${kt(y.sess.ds)}</td>`}).join("")}</tr>`);return`
  <table class="voc-attendance voc-schedule-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${l}px">
    <colgroup>
      ${Array.from({length:lt},()=>'<col style="width:6mm"><col style="width:6.5mm"><col style="width:15mm">').join("")}
    </colgroup>
    <thead>
      <tr class="voc-h-main">
        <th colspan="${lt*3}">สัปดาห์ที่/คาบ/วันที่สอน</th>
      </tr>
      <tr class="voc-h-sub">
        ${Array.from({length:lt},()=>'<th colspan="3"></th>').join("")}
      </tr>
      <tr class="voc-h-num">
        ${Array.from({length:lt},()=>`
          <th class="voc-sched-week"><div class="voc-vtext">สัปดาห์ที่</div></th>
          <th class="voc-sched-period"><div class="voc-vtext">คาบ</div></th>
          <th class="voc-sched-date"><div class="voc-vtext">ว/ด/ป</div></th>`).join("")}
      </tr>
    </thead>
    <tbody>${C.join("")}</tbody>
  </table>`}function he(t){const{students:c,sessions:s}=t,r=s!=null&&s.length?Math.round(s.length/20):1,o=de(s,r),e=me(c);return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p2">
      <div class="voc-p2-title">แบบบันทึกการไม่มาเรียน</div>
      <div class="voc-att-flex">
        ${pe(t,c,e)}
        ${ge(o,t.holidaySet)}
      </div>
    </div>
  </section>`}const bt=31;function fe(t,c=8){const s=a(t??"");if(s.length<=c)return s;const r=Math.ceil(s.length/2);let o=s.lastIndexOf(" ",r);return o<=0&&(o=s.indexOf(" ",r)),o<=0?s:`${s.slice(0,o)}<br>${s.slice(o+1)}`}function ve(t,c,s){const{cls:r,teacher:o,deptHeadName:e,scoreColumns:l,scoreMap:C,moralScores:v,moralMax:m,moralColName:w}=t,$=n=>n.assignment_type==="คะแนนพิเศษ",u=l.filter(n=>!$(n));l.filter(n=>$(n));const y=u.reduce((n,i)=>n+(i.max_score??0),0),H=y+(m||0),j=!!window._pp5HideScores,S=c.map((n,i)=>{if(j)return`<tr>
        <td class="voc-center">${s+i}</td><td class="voc-c-id"></td><td class="voc-c-name"></td>
        ${Array(u.length).fill("<td></td>").join("")}<td></td>
        <td></td><td></td><td></td><td></td>
      </tr>`;const h=C[n.id]??{},p=u.map(x=>ot(t.roundSettings,ut(x),h[x.id],x.column_type==="derived"?2:1)),d=u.reduce((x,z)=>x+(h[z.id]??0),0),_=(v==null?void 0:v[n.id])??"",b=d+(Number(_)||0),M=n.special_result&&Dt.includes(n.special_result)?n.special_result:ht(H?b/H*100:0);return`<tr>
      <td class="voc-center">${s+i}</td>
      <td class="voc-c-id voc-center">${a(n.student_code??"")}</td>
      <td class="voc-c-name">${a(n.full_name??"")}</td>
      ${p.map(x=>`<td class="voc-center">${x}</td>`).join("")}
      <td class="voc-center voc-bold">${ot(t.roundSettings,"mid_subtotal",d)}</td>
      <td class="voc-center">${_}</td>
      <td class="voc-center voc-bold">${ot(t.roundSettings,"total",b)}</td>
      <td class="voc-center voc-bold">${M}</td>
      <td></td>
    </tr>`}),A=u.length+1+4,R=`<tr><td class="voc-center"></td><td></td><td></td>${Array(A).fill("<td></td>").join("")}</tr>`,f=S.concat(Array(Math.max(0,bt-S.length)).fill(R));return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p3">
      <div class="voc-p3-title">แบบประเมินผลการเรียน</div>
      <table class="voc-eval">
        <colgroup>
          <col style="width:5mm"><col style="width:19.5mm"><col style="width:43.5mm">
          ${u.map(()=>'<col style="width:7mm">').join("")}
          <col style="width:9.5mm"><col style="width:9.5mm"><col style="width:9.5mm">
          <col style="width:12.5mm"><col style="width:12.5mm">
        </colgroup>
        <thead>
          <tr class="voc-h-top">
            <th rowspan="3" class="voc-c-no"><div class="voc-vtext">เลขที่</div></th>
            <th rowspan="3" class="voc-c-id">เลข<br>ประจำตัว</th>
            <th rowspan="3" class="voc-c-name">ชื่อ - สกุล</th>
            <th colspan="${u.length+1}">คะแนนเก็บ (เต็ม ${y})</th>
            <th rowspan="2" class="voc-c-moral"><div class="voc-vtext">คะแนนคุณธรรม${w?`<br>(${a(w)})`:""}</div></th>
            <th rowspan="2" class="voc-c-total"><div class="voc-vtext">รวม</div></th>
            <th rowspan="3" class="voc-c-grade"><div class="voc-vtext">ระดับผล<br>การเรียน</div></th>
            <th rowspan="3" class="voc-c-note"><div class="voc-vtext">หมายเหตุ/<br>การสอบแก้ตัว</div></th>
          </tr>
          <tr class="voc-h-vertical">
            ${u.map(n=>`<th class="voc-c-obj"><div class="voc-vtext">${fe(n.assignment_name??"")}</div></th>`).join("")}
            <th class="voc-c-sum80"><div class="voc-vtext">รวม<br>คะแนนเก็บ</div></th>
          </tr>
          <tr class="voc-h-score">
            ${u.map(n=>`<th>${n.max_score??""}</th>`).join("")}<th>${y||""}</th>
            <th>${m||""}</th><th>${H||""}</th>
          </tr>
        </thead>
        <tbody>${f.join("")}</tbody>
      </table>
      <div class="voc-footer-sigs">
        <div>ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((o==null?void 0:o.full_name)??"")} )</div>
        <div>ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนก<br><br>( ${a(e)} )</div>
      </div>
    </div>
  </section>`}function ue(t){const{students:c}=t,s=[];for(let r=0;r<c.length;r+=bt)s.push(ve(t,c.slice(r,r+bt),r+1));return s.join("")}const be=46,we=5.3,ye=5.45;function xe(t){const c=Math.max(1,Math.ceil((t.content??"").length/be));return Math.max(ye,c*we)}function $e(t){const{ms:c,teacher:s,courseDoc:r}=t,o=Array.isArray(r==null?void 0:r.voc_objectives)?r.voc_objectives:[],e=Array.isArray(r==null?void 0:r.voc_schedule)?r.voc_schedule:[],l=o.concat(Array.from({length:Math.max(0,10-o.length)},()=>({objective:"",competency:""}))),C=e.concat(Array.from({length:Math.max(0,20-e.length)},()=>({week:"",content:"",note:""}))),v=297,m=30,w=10,$=9.5,u=10,y=8,H=7,j=7,S=y+l.length*H,A=v-m-w-$-u-S-j,R=v-m-$-j,f=[];let n=[],i=0,h=A;for(const b of C){const M=xe(b);n.length&&i+M>h&&(f.push(n),n=[],i=0,h=R),n.push(b),i+=M}f.push(n);const p=`
      <div class="voc-course-title">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา ${a(c.subject_name??"")}</div>
      <div class="voc-course-code">รหัสวิชา ${a(c.subject_code??"")}</div>
      <table class="voc-objective-table">
        <thead><tr><th>จุดประสงค์การเรียนรู้</th><th>สมรรถนะรายวิชา</th></tr></thead>
        <tbody>${l.map(b=>`<tr><td>${a(b.objective)||"&nbsp;"}</td><td>${a(b.competency)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,d=(b,M)=>`
      <div class="voc-schedule-title">กำหนดการสอน${M?"":" (ต่อ)"}</div>
      <table class="voc-schedule-table">
        <colgroup><col style="width:13%"><col style="width:69%"><col style="width:18%"></colgroup>
        <thead><tr><th>สัปดาห์ที่</th><th>เนื้อหาที่สอน</th><th>หมายเหตุ</th></tr></thead>
        <tbody>${b.map(x=>`<tr><td>${a(x.week)||"&nbsp;"}</td><td>${a(x.content)||"&nbsp;"}</td><td>${a(x.note)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,_=`<div class="voc-sign-bottom">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอนประจำวิชา<br><br>( ${a((s==null?void 0:s.full_name)??"")} )</div>`;return f.map((b,M)=>`
  <section class="voc-page">
    <div class="voc-page-inner voc-p4">
      ${M===0?p:""}
      ${d(b,M===0)}
      ${M===f.length-1?_:""}
    </div>
  </section>`).join("")}function vt(t,c,s=null){const r=s??[At(t),Mt(t),Ht(t),zt(t),Rt(t)];return`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8"/>
  <title>${a(c)}</title>
  <style>${Ct()}</style>
</head>
<body>
  ${r.join(`
`)}
</body>
</html>`}function _e(t){return`<!DOCTYPE html>
<html lang="th"><head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>${Ct()}
body{background:#fff;margin:0;}
@media print{@page{size:A4 portrait;margin:0;}.no-print{display:none!important;}}
</style></head>
<body>${t}</body></html>`}function ke(t){var R,f,n;(R=document.getElementById("pp5-viewer"))==null||R.remove();const c=((f=t.ms)==null?void 0:f.subject_group)==="ACDMVOC",s=c?[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>re(t)},{label:"ไม่มาเรียน/วันที่สอน",fn:()=>he(t)},{label:"คะแนน",fn:()=>ue(t)},{label:"จุดประสงค์/กำหนดการสอน",fn:()=>$e(t)}]:[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>At(t)},{label:"มาตรฐาน/ตัวชี้วัด",fn:()=>Mt(t)},{label:"บันทึกการไม่มาเรียน",fn:()=>Ht(t)},{label:"คะแนน",fn:()=>zt(t)},{label:"วันที่สอน",fn:()=>Rt(t)}],r=s.slice(1).map((i,h)=>h+1),o=!!((n=t.cfg)!=null&&n.pp5PreviewEditEnabled),e={},l=document.createElement("div");l.id="pp5-viewer",l.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#374151;";const C=i=>"border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-family:Sarabun,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;"+(i?"background:#2563eb;color:#fff;":"background:#4b5563;color:#d1d5db;");l.innerHTML=`
    <div style="background:#111827;padding:8px 12px;display:flex;align-items:center;gap:6px;flex-shrink:0;overflow-x:auto;">
      <button id="pp5-v-close" style="${C(!1)}background:#dc2626;color:#fff;">✕ ปิด</button>
      <button id="pp5-v-print" style="${C(!1)}background:#059669;color:#fff;">🖨️ พิมพ์หน้านี้</button>
      <button id="pp5-v-printall" style="${C(!1)}background:#7c3aed;color:#fff;">🖨️ พิมพ์ทั้งหมด</button>
      ${o?`<button id="pp5-v-edit" style="${C(!1)}background:#f59e0b;color:#fff;">✏️ แก้ไขข้อความ</button>`:""}
      <div style="width:1px;height:24px;background:#374151;flex-shrink:0;margin:0 2px;"></div>
      ${s.map((i,h)=>`
        <button class="pp5-vtab" data-i="${h}" style="${C(h===0)}">${i.label}</button>
      `).join("")}
      ${o?'<span id="pp5-v-edit-hint" style="display:none;color:#fbbf24;font-size:12px;margin-left:8px;white-space:nowrap;">กำลังแก้ไข — คลิกข้อความในหน้าเพื่อพิมพ์ทับได้เลย (ไม่กระทบข้อมูลจริงในระบบ)</span>':""}
    </div>
    <div style="flex:1;overflow:auto;display:flex;justify-content:center;align-items:flex-start;padding:20px;">
      <iframe id="pp5-iframe" style="border:none;box-shadow:0 4px 32px rgba(0,0,0,.5);background:#fff;width:210mm;height:297mm;" scrolling="no"></iframe>
    </div>`,document.body.appendChild(l);const v=l.querySelector("#pp5-iframe"),m=[...l.querySelectorAll(".pp5-vtab")],w=l.querySelector("#pp5-v-edit"),$=l.querySelector("#pp5-v-edit-hint");let u=null,y=!1;function H(i){return e[i]??s[i].fn()}function j(){var i;if(!(u==null||s[u].all))try{const h=(i=v.contentDocument)==null?void 0:i.body;h&&(e[u]=h.innerHTML)}catch{}}function S(i){var h;if(y=i&&o&&u!=null&&!s[u].all,w){const p=u!=null&&s[u].all;w.style.background=y?"#16a34a":"#f59e0b",w.textContent=y?"✅ เสร็จแล้ว":"✏️ แก้ไขข้อความ",w.title=p?'กดเพื่อไปหน้าปกแล้วเริ่มแก้ไข (แท็บ "ดูทั้งหมด" แก้ไขตรงๆ ไม่ได้)':"",w.style.opacity=p?"0.7":"1"}$&&($.style.display=y?"inline":"none");try{const p=(h=v.contentDocument)==null?void 0:h.body;p&&(p.contentEditable=y?"true":"false",p.style.outline=y?"2px dashed #f59e0b":"none",p.style.outlineOffset=y?"-2px":"0")}catch{}}function A(i){j(),u=i,m.forEach((b,M)=>{M===i?(b.style.background="#2563eb",b.style.color="#fff"):(b.style.background="#4b5563",b.style.color="#d1d5db")});const h=s[i];let p,d;h.all?(p=vt(t,"",r.map(H)),d="3000mm"):(p=_e(H(i)),d=(c?[2,3]:[3,4]).includes(i)?"900mm":"297mm"),v.style.height=d;const _=v.contentDocument;_.open(),_.write(p),_.close(),S(!1)}A(0),m.forEach((i,h)=>i.addEventListener("click",()=>A(h))),l.querySelector("#pp5-v-close").addEventListener("click",()=>l.remove()),w==null||w.addEventListener("click",()=>{var i;if((i=s[u])!=null&&i.all){A(1),S(!0);return}S(!y)}),l.querySelector("#pp5-v-print").addEventListener("click",()=>{if(j(),s[u].all){const i=`ปพ5_${t.ms.subject_code??""}_${X(t.cls.class_name)}`;yt(vt(t,i,r.map(H)),{autoprint:!0});return}v.contentWindow.focus(),v.contentWindow.print()}),l.querySelector("#pp5-v-printall").addEventListener("click",()=>{j();const i=`ปพ5_${t.ms.subject_code??""}_${X(t.cls.class_name)}`,h=vt(t,i,r.map(H));yt(h,{autoprint:!0})})}async function Se(t){gt("กำลังโหลดข้อมูลเอกสาร...","info");try{const c=await le(t);ke(c);for(const s of c.docWarnings??[])gt(s,"warning")}catch(c){console.error("[pp5-doc]",c),gt("โหลดเอกสารไม่สำเร็จ: "+Zt(c),"error")}}function Re(t){var s;(s=document.getElementById("pp5-course-modal"))==null||s.remove();const c=document.createElement("div");c.id="pp5-course-modal",c.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",c.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 เปิด ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการดู</p>
      <div class="space-y-2 mb-5">
        ${t.map(r=>`
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="radio" name="pp5-cls" class="w-4 h-4 accent-indigo-600" value="${r.id}" />
          <span class="text-sm text-gray-700">${a(X(r.class_name))}</span>
        </label>`).join("")}
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-open-btn" class="flex-1 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700">เปิด</button>
      </div>
    </div>`,document.body.appendChild(c),c.querySelector("#pp5-cancel").addEventListener("click",()=>c.remove()),c.querySelector("#pp5-open-btn").addEventListener("click",async()=>{const r=c.querySelector('input[name="pp5-cls"]:checked');if(!r){gt("กรุณาเลือกห้อง","warning");return}c.remove(),await Se(parseInt(r.value))}),c.addEventListener("click",r=>{r.target===c&&c.remove()})}export{Se as a,Re as o};
