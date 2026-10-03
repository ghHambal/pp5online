import{getSystemConfig as It,getClassSessionDOWs as At,getClassStudents as Yt,getClassAttendanceAll as qt,getScoreColumns as Kt,getStudentScores as Jt,getDepartments as Xt,getHomeroomTeachers as Qt,getTeacherById as Zt,getCourseDocPage2 as te,getCourseDocLangSettings as ee,getSchoolHolidays as se,getLifeSkillColumns as Mt,getClassScoreRounding as ae,getReligionGroupLeaderForTeacher as oe,getLifeSkillScores as ne,getReadingScoreColumns as le,getReadingScores as ie}from"./api-J-Ak1T-Y.js";import{i as ce,s as re,d as de,c as Ct,f as rt,r as St}from"./score-display-CQ4dUIPx.js";import{a as xt,g as me}from"./ui-BRupvAcB.js";import{s as _t}from"./supabase-BV-W2lsh.js";import{o as Ht}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as pe,_readingGrade as ge}from"./teacher-views-utils-D4PCqVsX.js";import{i as he}from"./skill-groups-BY1NTbf4.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";function a(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Rt(t){if(!t)return null;const[i,s,p]=String(t).split("-").map(Number);return!i||!s||!p?null:new Date(i,s-1,p)}function ct(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Ot(t){if(!t)return"";const[i,s,p]=String(t).split("-").map(Number);if(!i)return t;const o=(i+543)%100;return`${String(p).padStart(2,"0")}/${String(s).padStart(2,"0")}/${String(o).padStart(2,"0")}`}function fe(t,i,s=null,p=!1){const o=p&&s&&s.length?s.length:Math.max(1,Math.round((i??1)*2)),e=o*20;let r=s&&s.length?[...s]:null,_=!1;if(r&&r.length<o){_=!0;const f={};for(const g of r)f[g]=(f[g]||0)+1;const h=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(g=>t[g]).filter(Boolean).map(g=>Rt(g)).filter(Boolean).sort((g,m)=>g-m),d={};h.forEach(g=>{const m=g.getDay();d[m]=(d[m]||0)+1});const c=Object.entries(d).sort(([,g],[,m])=>m-g||Number(g)-Number(m));for(const[g]of c){if(r.length>=o)break;const m=Number(g);for(;(f[m]||0)<Math.min(d[m],2)&&r.length<o;)r.push(m),f[m]=(f[m]||0)+1}for(let g=1;g<=5&&r.length<o;g++)(f[g]||0)<2&&(r.push(g),f[g]=(f[g]||0)+1);r.sort((g,m)=>g-m)}else r&&r.length>o&&(r=r.slice(0,o));const u=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(f=>t[f]).filter(Boolean).map(f=>Rt(f)).filter(Boolean).sort((f,h)=>f-h);if(!u.length)return[];if(_&&r){const h=[];let d=0,c=0;for(;d<u.length&&h.length<e;){const g=new Date(u[d]);g.setDate(g.getDate()-g.getDay()),g.setHours(0,0,0,0);const m=g.getTime();c=m;const v=[];for(;d<u.length&&u[d].getTime()>=m&&u[d].getTime()<m+6048e5;)v.push(u[d++]);const y={};for(const k of v){const z=k.getDay();y[z]=(y[z]||0)+1}for(const k of v){if(h.length>=e)break;h.push({n:h.length+1,date:new Date(k),ds:ct(k)})}const R=o-v.length;if(R>0){const k={};r.forEach(D=>{k[D]=(k[D]||0)+1});const z=[];for(const[D,T]of Object.entries(k).sort()){const V=Number(D),L=y[V]||0;for(let O=0;O<T-L&&z.length<R;O++)z.push(V)}for(const D of z){if(h.length>=e)break;const T=new Date(g);T.setDate(T.getDate()+D),h.push({n:h.length+1,date:T,ds:ct(T)})}}}if(h.length<e){const g=new Date(c);let m=1;for(;h.length<e;){for(const v of r){if(h.length>=e)break;const y=new Date(g);y.setDate(y.getDate()+m*7+v),h.push({n:h.length+1,date:y,ds:ct(y)})}m++}}return h}if(!r||!r.length){const h={},d=u.filter(k=>{const z=new Date(k);z.setDate(z.getDate()-z.getDay()),z.setHours(0,0,0,0);const D=z.getTime();return h[D]=(h[D]||0)+1,h[D]<=o}),c=[];for(const k of d){if(c.length>=e)break;c.push({n:c.length+1,date:new Date(k),ds:ct(k)})}if(c.length>=e)return c;const g=d[d.length-1],m=new Date(g);m.setDate(m.getDate()-m.getDay()),m.setHours(0,0,0,0);const v=m.getTime(),y=d.filter(k=>k.getTime()>=v&&k.getTime()<v+6048e5);let R=1;for(;c.length<e;){for(const k of y){if(c.length>=e)break;const z=new Date(k);z.setDate(z.getDate()+R*7),c.push({n:c.length+1,date:z,ds:ct(z)})}R++}return c}const l={},w=[];for(const f of u){if(w.length>=e)break;const h=new Date(f);h.setDate(h.getDate()-h.getDay()),h.setHours(0,0,0,0);const d=h.getTime();l[d]=(l[d]||0)+1,l[d]<=o&&w.push({n:w.length+1,date:new Date(f),ds:ct(f)})}if(w.length>=e)return w;const $=u[u.length-1],b=new Date($);b.setDate(b.getDate()-b.getDay()),b.setHours(0,0,0,0);const S=b.getTime(),C=7*24*60*60*1e3,M={};for(const f of u)if(f.getTime()>=S&&f.getTime()<S+C){const h=f.getDay();M[h]=(M[h]||0)+1}const j={};for(const f of r)j[f]=(j[f]||0)+1;const A=[];for(const[f,h]of Object.entries(j)){const d=h-(M[Number(f)]||0);for(let c=0;c<d;c++)A.push(Number(f))}A.sort((f,h)=>f-h);for(const f of A){if(w.length>=e)break;const h=new Date(b);h.setDate(h.getDate()+f),w.push({n:w.length+1,date:h,ds:ct(h)})}let H=1;for(;w.length<e;){for(const f of r){if(w.length>=e)break;const h=new Date(b);h.setDate(h.getDate()+H*7+f),w.push({n:w.length+1,date:h,ds:ct(h)})}H++}return w}function ue(t){return t==="ACDMVOC"?"porwor":"samai"}function st(t){return String(t??"").split(" ")[0]}function Tt(t,i){const s={};for(const e of t){const r=e[i];r&&(s[r]=(s[r]??0)+1)}let p=null,o=0;for(const[e,r]of Object.entries(s))r>o&&(o=r,p=e);return p}function ve(t){return Tt(t,"religion_room")}function be(t){return Tt(t,"main_room")}function $t(t){return t>=80?4:t>=75?3.5:t>=70?3:t>=65?2.5:t>=60?2:t>=55?1.5:t>=50?1:0}function Lt(t){return t>=3.5?"ดีเยี่ยม":t>=2.5?"ดี":t>=1?"ผ่าน":"ไม่ผ่าน"}async function we(t){var pt,yt;const i=await It();pe(i);const s=parseInt(i.academicYear??i.academic_year??2568),p=parseInt(i.semester??1),{data:o,error:e}=await _t.from("classes").select(`
      id, course_id, class_name, academic_year, semester, skill_group, google_sheet_id,
      head_student_id, source_class_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id, learning_area ),
      students:students!fk_head_student ( full_name, student_code )
    `).eq("id",t).single();if(e||!o)throw new Error("โหลดข้อมูลห้องเรียนไม่สำเร็จ");const r=o.academic_year!=null&&Number.isFinite(+o.academic_year)?+o.academic_year:s,_=o.semester!=null&&Number.isFinite(+o.semester)?+o.semester:p,u={...i,academicYear:String(r),semester:String(_)},l=o.master_subjects??{},w=l.credit??1,$=ue(l.subject_group);let b=o.source_class_id??null,S=w;if(!b){const{data:n}=await _t.from("classes").select("source_class_id").eq("id",t).single();b=(n==null?void 0:n.source_class_id)??null}let C=[];if(b){const{data:n}=await _t.from("classes").select("id, academic_year, semester, master_subjects(credit)").eq("id",b).single(),B=(n==null?void 0:n.academic_year)!=null&&(n==null?void 0:n.semester)!=null;!n||B&&+n.academic_year===r&&+n.semester===_?((pt=n==null?void 0:n.master_subjects)!=null&&pt.credit&&(S=n.master_subjects.credit),C=await At(b).catch(()=>[])):b=null}const M=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),[j,A,H,f,h,d]=await Promise.all([Yt(t),qt(b??t),Kt(b??t),Jt(b??t),Xt(),Qt(r,_).catch(()=>[])]),c=l.teacher_id?await Zt(l.teacher_id).catch(()=>null):null,g=["AGM","AGMVOC"].includes(l.subject_group)?"ศาสนา":["ACDMVOC"].includes(l.subject_group)?"สามัญปวช":"สามัญ",m=h.find(n=>n.dept_code===l.dept&&n.category===g)??h.find(n=>n.dept_code===l.dept)??h.find(n=>n.dept_name===l.dept)??null,[v,y,R,k]=await Promise.all([l.id?te(l.id).catch(()=>null):Promise.resolve(null),ee().catch(()=>[]),At(o.id).catch(()=>[]),se(r,_).catch(()=>[])]),z=new Set(k),D=((yt=y.find(n=>n.lang_key==="th"))==null?void 0:yt.settings)??{},T=Array.isArray(D.colsBasic)&&D.colsBasic.length?D.colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],V=Array.isArray(D.colsExtra)&&D.colsExtra.length?D.colsExtra:["ผลการเรียนรู้"],L=D.rowHeader||"ข้อ",O=l.subject_group==="ACDMVOC",K=fe(o,w,R.length?R:null,O),Y={};if(b){const n=O&&R.length?R.length:Math.max(1,Math.round(w*2)),B=O&&C.length?C.length:Math.max(1,Math.round(S*2)),W=K.length;for(let q=1;q<=W;q++){const I=Math.floor((q-1)/n),lt=(q-1)%n,bt=I*B+lt+1;for(const it of A)it.session_number===bt&&(Y[it.student_id]||(Y[it.student_id]={}),Y[it.student_id][q]=it.status)}}else for(const n of A)Y[n.student_id]||(Y[n.student_id]={}),Y[n.student_id][n.session_number]=n.status;const Q=(b?H.filter(n=>!M.has(n.assignment_name)):H).filter(n=>n.column_type!=="override"&&!ce(n)),U=["AGM","AGMVOC"].includes(l.subject_group)?["คะแนนมาเรียน","คะแนนละหมาด"]:he(o.skill_group)?(await Mt(r,_,"สามัญ").catch(()=>[])).slice(0,3).map(n=>n.name):[],F=re(Q,U),x={};for(const n of f)x[n.student_id]||(x[n.student_id]={}),x[n.student_id][n.score_column_id]=n.score;for(const n of j)n.special_result&&(x[n.id]||(x[n.id]={}),x[n.id].__force=n.special_result);let P="";const G=await ae(t).catch(()=>(P="โหลดค่าปัดเลขร่วมไม่สำเร็จ คะแนนที่แสดงใช้รูปแบบเริ่มต้น กรุณาติดตั้ง SQL หรือตรวจการเชื่อมต่อก่อนใช้เอกสารจริง",null));for(const n of Object.values(x)){const B={...n};for(const W of F)(W.column_type==="derived"||B[W.id]!=null&&W.bonus_formula)&&(n[W.id]=de(H,W,q=>B[q]))}const Z=["AGM","AGMVOC"].includes(l.subject_group),at=st(o.class_name),J=be(j),X=ve(j);let tt,et;Z?(et=d.find(n=>n.category==="ศาสนา"&&n.main_room===o.class_name)??(X?d.find(n=>n.category==="ศาสนา"&&n.main_room===X):null)??null,tt=J?d.find(n=>n.category!=="ศาสนา"&&n.main_room===J)??null:null):(tt=d.find(n=>n.category!=="ศาสนา"&&n.main_room===at)??(J?d.find(n=>n.category!=="ศาสนา"&&n.main_room===J):null)??null,et=X?d.find(n=>n.category==="ศาสนา"&&n.main_room===X)??null:null);const ht=(m==null?void 0:m.dept_name)??l.dept??"";let ot=null;Z&&u.religionDeptHeadSource==="subgroup"&&l.teacher_id&&(ot=await oe(l.teacher_id).catch(n=>(console.warn("[pp5-doc] load religion subgroup leader failed",n),null)));const mt=Z?(m==null?void 0:m.head_name)||l.learning_area&&l.learning_area.trim()||"":l.learning_area&&l.learning_area.trim()||(m==null?void 0:m.head_name)||"",E=Z&&u.religionDeptHeadSource==="subgroup"&&(ot==null?void 0:ot.full_name)||mt;let nt={},ft=0,ut="";if(l.subject_group==="ACDMVOC")try{const B=(await Mt(r,_,"สามัญ")).find(W=>(W.name??"").includes("ความสะอาด"));if(B){ft=B.max_score??0,ut=B.name;const W=await ne([B.id]);nt=Object.fromEntries(W.map(q=>[q.student_id,q.score]))}}catch{}let vt={};const N=[];P&&N.push(P);try{const n=await le(r,_);if(n.length){const B=await ie(n.map(I=>I.id),j.map(I=>I.id)),W=n.reduce((I,lt)=>I+(lt.max_score??0),0),q={};for(const I of B)I.score!=null&&(q[I.student_id]=(q[I.student_id]??0)+(parseFloat(I.score)||0));if(W>0)for(const[I,lt]of Object.entries(q))vt[I]=ge(lt/W*100).label;B.length||N.push(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนในห้องนี้ (ภาค ${_}/${r})`)}else N.push(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ (ภาค ${_}/${r})`)}catch(n){throw console.error("[pp5-doc] load reading evaluation failed",n),new Error(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${(n==null?void 0:n.message)??"ไม่ทราบสาเหตุ"}`)}return{cls:o,ms:l,credit:w,prefix:$,cfg:u,students:j,attMap:Y,scoreColumns:F,scoreMap:x,roundSettings:G,teacher:c,dept:m,deptNameTH:ht,deptHeadName:E,courseDoc:v,thColHeaders:T,thColsExtra:V,thRowHeader:L,sessions:K,hrSamai:tt,hrReligion:et,academicYear:r,semester:_,holidaySet:z,moralScores:nt,moralMax:ft,moralColName:ut,readingEvalMap:vt,docWarnings:N}}function Nt(){return`
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
    .grade-sheet .grade-attr { white-space: nowrap; }
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
  `}function Et(t){var ft,ut,vt;const{cls:i,ms:s,credit:p,prefix:o,cfg:e,students:r,scoreColumns:_,scoreMap:u,teacher:l,dept:w,deptNameTH:$,deptHeadName:b,hrSamai:S,hrReligion:C,academicYear:M,semester:j,sessions:A,readingEvalMap:H,roundSettings:f}=t,h=a(e[`${o}SchoolName`]??e.samaiSchoolName??""),d=a(e[`${o}SchoolAddress`]??e.samaiSchoolAddress??""),c=e[`${o}LogoBwUrl`]||e[`${o}LogoUrl`]||e.samaiLogoBwUrl||e.samaiLogoUrl||"",g=a(e[`${o}DirectorName`]??"");e[`${o}DirectorSignUrl`];const m=a(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),v=["AGM","AGMVOC"].includes(s.subject_group),y=a(v?e.agmAcademicHeadName??e[`${o}AcademicHeadName`]??"":e[`${o}AcademicHeadName`]??"");v?e.agmAcademicHeadSignUrl??e[`${o}AcademicHeadSignUrl`]:e[`${o}AcademicHeadSignUrl`];const R=a((v?e.agmAcademicHeadTitle:e[`${o}AcademicHeadTitle`])||"หัวหน้าฝ่ายบริหารวิชาการ"),k=a(v?e.agmRegistrarName??e[`${o}RegistrarName`]??"":e[`${o}RegistrarName`]??"");v?e.agmRegistrarSignUrl??e[`${o}RegistrarSignUrl`]:e[`${o}RegistrarSignUrl`];const z=a((v?e.agmRegistrarTitle:e[`${o}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล"),D=a(b);w==null||w.head_sign_url;const T=i.class_name??"",V=!v&&(["4","5","6"].some(N=>(s.grade_level??"").includes(N))||["ACDMVOC"].includes(s.subject_group)),L=v?T.startsWith("PR")?"PR":T.startsWith("อก")?"อก":T.startsWith("อป")?"อป":"":"",O=A!=null&&A.length?Math.round(A.length/20):p*2,K=(A==null?void 0:A.length)??p*2*20,Y=!!window._pp5HideScores;f==null||f.forcedGradeColor;const Q=_.reduce((N,pt)=>N+(pt.max_score??0),0),U={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},F={ร:0,มส:0},x={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0},P={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0};if(!Y)for(const N of r){const pt=u[N.id]??{},yt=_.reduce((gt,wt)=>gt+(pt[wt.id]??0),0),n=Ct(f,yt),B=(ft=u[N.id])==null?void 0:ft.__force,W=B!=null&&String(B).trim()!=="",q=W?Number(B):NaN;if(W&&!Number.isFinite(q)){const gt=String(B).trim().replace(/\s+/g,"").replace(/\./g,"");gt==="ร"&&F.ร++,gt==="มส"&&F.มส++;const wt=H==null?void 0:H[N.id];wt&&wt in x&&x[wt]++,P.ไม่ผ่าน++;continue}let I=W?q:0;if(!W&&Q>0){const gt=n/Q*100;I=$t(gt)}const lt=String(I);lt in U&&U[lt]++;const bt=H==null?void 0:H[N.id];bt&&bt in x&&x[bt]++;const it=Lt(I);it in P&&P[it]++}const G=N=>`<span class="box${N?" checked":""}"></span>`,Z=v?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",at=v?"76mm":"83mm",J=v?"115mm":"117.4mm",X=v?`
    <div class="check-line">${G(L==="PR")}<span>ตอนต้น (PR)</span></div>
    <div class="check-line">${G(L==="อก")}<span>ตอนกลาง (อก.)</span></div>
    <div class="check-line">${G(L==="อป")}<span>ตอนปลาย (อป.)</span></div>
  `:`
    <div class="check-line">${G(!V)}<span>ตอนต้น (ม.1-ม.3)</span></div>
    <div class="check-line">${G(V)}<span>ตอนปลาย (ม.4-ม.6)</span></div>
  `,tt=$.length>15?`<span class="uline w-md" style="white-space:normal;line-height:4.5mm;min-height:9mm;vertical-align:bottom;">${a($)}</span>`:`<span class="uline w-md">${a($)}</span>`,et=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",ht=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",ot=v?`
    <div class="info-line">
      <span>${et}</span>${tt}
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`:`
    <div class="info-line">
      <span>${et}</span>${tt}
      <span>รายวิชา</span><span class="uline w-lg">${a(s.subject_name??"")}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`,mt=[...[4,"3.5",3,"2.5",2,"1.5",1,0].map(N=>U[String(N)]||"-"),F.ร||"-",F.มส||"-"].map(N=>`<td>${N}</td>`).join(""),E=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(N=>`<td>${x[N]||"-"}</td>`).join(""),nt=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(N=>`<td>${P[N]||"-"}</td>`).join("");return`
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${c?`<div class="logo-wrap"><img src="${a(c)}" alt="ตราโรงเรียน" /></div>`:""}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${at};">${Z}</div>
      <div class="checks" style="left:${J};">${X}</div>
    </section>

    <div class="school">${h}</div>
    <div class="school-sub">${d}</div>

    <section class="info">
      <div class="info-line">
        <span>${Z}</span><span class="uline w-sm">${a(st(i.class_name))}</span>
        <span>ภาคเรียนที่</span><span class="uline w-md">${j}</span>
        <span>ปีการศึกษา</span><span class="uline w-yr">${M}</span>
      </div>
      ${ot}
      <div class="info-line">
        <span>จำนวน</span><span class="uline w-xs">${p}</span>
        <span>หน่วยกิต</span>
        <span>เวลาเรียน</span><span class="uline w-xs">${O}</span>
        <span>ชั่วโมง/สัปดาห์</span>
        <span>รวมเวลาเรียน</span><span class="uline w-xs">${K}</span>
        <span>ชั่วโมง/ภาค</span>
      </div>
      <div class="info-row-one"><span>ครูผู้สอน</span><span class="uline-xl">${a((l==null?void 0:l.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาสามัญ</span><span class="uline-xl">${a(((ut=S==null?void 0:S.teachers)==null?void 0:ut.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาศาสนา</span><span class="uline-xl">${a(((vt=C==null?void 0:C.teachers)==null?void 0:vt.full_name)??"")}</span></div>
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
          <td>${r.length}</td>${mt}<td></td><td></td><td></td>
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
          ${E}<td></td>
        </tr>
        <tr>
          <td>การประเมินคุณลักษณะ<br>อันพึงประสงค์</td>
          ${nt}<td></td>
        </tr>
      </table>
    </section>

    <section class="approval">
      <div class="apl-title">การอนุมัติผลการพัฒนาคุณภาพผู้เรียน</div>

      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${a((l==null?void 0:l.full_name)??"")}</span>
        <span>ครูผู้สอน</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${D}</span>
        <span>${ht}</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${k}</span>
        <span>${z}</span>
      </div>

      <div class="consider">เสนอเพื่อพิจารณา</div>

      <div class="ctr-block">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${y}</span>
        </div>
        <div class="p1-role">${R}</div>
      </div>

      <div class="decision">
        <span>${G(!0)}&nbsp; อนุมัติ</span>
        <span>${G(!1)}&nbsp; ไม่อนุมัติ</span>
      </div>

      <div class="ctr-block director">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${g}</span>
        </div>
        <div class="p1-role">${m}</div>
      </div>
    </section>
  </div>`}function Pt(t){const{cls:i,ms:s,credit:p,cfg:o,courseDoc:e,thColHeaders:r,thColsExtra:_,thRowHeader:u,teacher:l,deptNameTH:w,deptHeadName:$,academicYear:b,semester:S,prefix:C,sessions:M}=t,j=(M==null?void 0:M.length)??p*2*20,A=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",H=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",f=o[`${C}LogoBwUrl`]||o[`${C}LogoUrl`]||o.samaiLogoBwUrl||o.samaiLogoUrl||"",h=Array.isArray(e==null?void 0:e.table_rows)?e.table_rows:[],d=(e==null?void 0:e.text_direction)==="rtl"?"rtl":(e==null?void 0:e.text_direction)==="ltr"?"ltr":"auto",g=(Array.isArray(e==null?void 0:e.table_columns)?e.table_columns.length:2)===1,m=g?[_[0]??"ผลการเรียนรู้"]:r??["มาตรฐานการเรียนรู้","ตัวชี้วัด"],v=h,y=(O,K="")=>[Array.isArray(O)&&O.length?O.join(", "):"",(K??"").trim()].filter(Boolean).join(", "),R=y(e==null?void 0:e.between_objective_items,e==null?void 0:e.between_objective_extra),k=y(e==null?void 0:e.midterm_objective_items,e==null?void 0:e.midterm_objective_extra),z=y(e==null?void 0:e.final_objective_items,e==null?void 0:e.final_objective_extra),D=["AGM","AGMVOC"].includes(s.subject_group),T=["1 รักชาติ ศาสน์ กษัตริย์","2 ซื่อสัตย์สุจริต","3 มีวินัย","4 ใฝ่เรียนรู้","5 อยู่อย่างพอเพียง"],V=["6 มุ่งมั่นในการทำงาน","7 รักความเป็นไทย","8 มีจิตสาธารณะ","9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ"],L=D?"ระดับชั้นอิสลามศึกษา":"ระดับชั้น";return`
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
          <span class="p2-label">${L}</span>
          <span class="p2-uline p2-uline-fill">${a(st(i.class_name??""))}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ครูผู้สอน</span>
          <span class="p2-uline p2-uline-fill">${a((l==null?void 0:l.full_name)??"")}</span>
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
          <span class="p2-uline">${a(String(S))}</span>
          <span class="p2-label">ปีการศึกษา</span>
          <span class="p2-uline">${a(String(b))}</span>
          <span class="p2-label">เวลา</span>
          <span class="p2-uline p2-uline-fill">${a(String(j))}</span>
          <span class="p2-label">ชั่วโมง</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">จำนวน</span>
          <span class="p2-uline">${a(String(p))}</span>
          <span class="p2-label">หน่วยกิต</span>
        </div>
      </div>
    </div>

    <!-- Standards Table -->
    ${g?`
    <table class="std-table" style="table-layout:fixed;">
      <thead>
        <tr>
          <th style="width:100%;" dir="ltr">${a(m[0])}</th>
        </tr>
      </thead>
      <tbody>
        ${v.map((O,K)=>{const Y=a(Array.isArray(O)?O[0]??"":""),Q=K+1;return`<tr><td class="std-row" dir="${d}" style="padding:1.5mm 2.5mm;">
            <span style="display:inline-flex;gap:5px;align-items:flex-start;width:100%;">
              <b style="flex-shrink:0;min-width:16px;text-align:center;">${Q}.</b>
              <span style="flex:1;">${Y}</span>
            </span>
          </td></tr>`}).join("")}
        <tr class="std-fill-row"><td></td></tr>
      </tbody>
    </table>`:`
    <table class="std-table" dir="${d}">
      <thead>
        <tr>
          <th style="width:50mm;">${a(m[0]??"มาตรฐานการเรียนรู้")}</th>
          <th>${a(m[1]??"ตัวชี้วัด")}</th>
        </tr>
      </thead>
      <tbody>
        ${v.map(O=>`<tr>
          <td class="std-row">${a(Array.isArray(O)?O[0]??"":"")}</td>
          <td class="std-row">${a(Array.isArray(O)?O[1]??"":"")}</td>
        </tr>`).join("")}
        <tr class="std-fill-row"><td></td><td></td></tr>
      </tbody>
    </table>`}

    <!-- Footer: Objectives + คุณลักษณะ -->
    <div class="p2-footer">
      <div class="p2-obj">
        <p>จุดประสงค์วัดผลรายจุดประสงค์ ข้อที่ <u>${R}</u></p>
        <p>จุดประสงค์วัดผลกลางภาค ข้อที่ <u>${k}</u></p>
        <p>จุดประสงค์วัดผลปลายภาค ข้อที่ <u>${z}</u></p>
      </div>
      <div class="p2-char">
        <div class="p2-char-title">คุณลักษณะอันพึงประสงค์</div>
        <div class="p2-char-grid">
          <div>${T.map(O=>`<div>${a(O)}</div>`).join("")}</div>
          <div>${V.map(O=>`<div>${a(O)}</div>`).join("")}</div>
        </div>
      </div>
    </div>

    <!-- Signature -->
    <div class="p2-sig">
      ลงชื่อ <span style="display:inline-block;border-bottom:.3mm dashed #555;min-width:60mm;text-align:center;padding:0 2mm;">
        ${a($)}
      </span> ${H}
    </div>
  </div>`}const zt=50;function Wt(t){const{cls:i,ms:s,credit:p,cfg:o,students:e,attMap:r,sessions:_,academicYear:u,semester:l,teacher:w}=t,$=[];for(let b=0;b<e.length;b+=zt){const S=e.slice(b,b+zt);$.push(ye(t,S,b+1))}return $.join("")}function ye(t,i,s){const{cls:p,ms:o,teacher:e,academicYear:r,semester:_,cfg:u,prefix:l}=t,w=(u==null?void 0:u[`${l}LogoBwUrl`])||(u==null?void 0:u[`${l}LogoUrl`])||(u==null?void 0:u.samaiLogoBwUrl)||(u==null?void 0:u.samaiLogoUrl)||"",$=40,b=i.length+1,S=Math.max(3.5,Math.min(5.5,Math.floor(241/b*10)/10)).toFixed(1),C="3.2mm",M=i.map((H,f)=>{const h=t.attMap[H.id]??{},d=[];for(const[m,v]of Object.entries(h))v!=="present"&&d.push({n:parseInt(m),status:v});d.sort((m,v)=>m.n-v.n);const c=d.length,g=Array.from({length:$},(m,v)=>{const y=d[v];return y?`<td class="${y.status==="absent"?"att-absent":y.status==="leave"?"att-leave":y.status==="sick"?"att-sick":"att-absent"}">${y.n}</td>`:"<td></td>"});return`<tr>
      <td class="text-center">${s+f}</td>
      <td class="att-code text-center">${a(H.student_code??"")}</td>
      <td class="att-name">${a(H.full_name??"")}</td>
      ${g.join("")}
      <td class="text-center font-bold">${c||""}</td>
    </tr>`}),j=Array.from({length:$},(H,f)=>`<th>${f+1}</th>`).join(""),A=3+$+1;return`
  <div class="page-tight">
    <div class="att-top">
      ${w?`<div class="att-logo"><img src="${a(w)}" alt="โลโก้" /></div>`:'<div style="width:18mm;flex-shrink:0;"></div>'}
      <div class="att-info">
        <div class="att-title">บันทึกการไม่มาเรียนของนักเรียนชั้น ${a(st(p.class_name))}</div>
        <div class="att-hdr-row">
          <span class="att-label">ปีการศึกษา</span>
          <span class="att-uline">${a(String(r))}</span>
          <span class="att-label" style="margin-left:4mm;">ภาคเรียนที่</span>
          <span class="att-uline">${a(String(_))}</span>
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
    <table class="att-table" style="--att-row-h:${S}mm">
      <colgroup>
        <col style="width:6mm;"/>
        <col style="width:13mm;"/>
        <col style="width:36mm;"/>
        ${Array.from({length:$},()=>`<col style="width:${C};"/>`).join("")}
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
        <tr>${j}</tr>
      </thead>
      <tbody>
        ${M.join("")}
        <tr><td></td><td></td><td></td>${Array.from({length:$},()=>"<td></td>").join("")}<td></td></tr>
      </tbody>
    </table>
  </div>`}const Dt=50;function Gt(t){const{students:i}=t,s=[];for(let p=0;p<i.length;p+=Dt)s.push(xe(t,i.slice(p,p+Dt),p+1));return s.join("")}function xe(t,i,s){var U,F;const{cls:p,ms:o,teacher:e,deptHeadName:r,academicYear:_,semester:u,scoreColumns:l,scoreMap:w,readingEvalMap:$,roundSettings:b}=t,S=(b==null?void 0:b.forcedGradeColor)==="black"?"black":"red",C=o.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้าหมวดวิชา",M=x=>x.assignment_type==="ปลายภาค"||x.assignment_type==="final",j=x=>x.assignment_type==="คะแนนพิเศษ",A=l.filter(x=>!M(x)&&!j(x));l.filter(x=>j(x));const H=l.filter(x=>M(x)),f=5,h=5,d={id:null,assignment_name:"",max_score:""},c=[...A,...Array(Math.max(0,f-A.length)).fill(d)],g=[...H,...Array(Math.max(0,h-H.length)).fill(d)],m=A.reduce((x,P)=>x+(P.max_score??0),0),v=H.reduce((x,P)=>x+(P.max_score??0),0),y=c.length+1,R=g.length+2,k=y+R,D=3+k+3,T=i.length+1,V=Math.max(3.8,Math.min(5.8,Math.floor(160/T*10)/10)).toFixed(1),L=!!window._pp5HideScores,O=i.map((x,P)=>{if(L)return`<tr>
        <td>${s+P}</td>
        <td>${a(x.student_code??"")}</td>
        <td class="gs-name" style="border-right:2.0px solid #000;">${a(x.full_name??"")}</td>
        ${c.map(()=>"<td></td>").join("")}
        <td></td>
        ${g.map(()=>"<td></td>").join("")}
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
      </tr>`;const G=w[x.id]??{},Z=c.map(E=>E.id?rt(t.roundSettings,St(E),G[E.id],E.column_type==="derived"?2:1):""),at=g.map(E=>E.id?rt(t.roundSettings,St(E),G[E.id],E.column_type==="derived"?2:1):""),J=A.reduce((E,nt)=>E+Number(G[nt.id]??0),0),X=H.reduce((E,nt)=>E+(G[nt.id]??0),0),tt=J+X,et=!!G.__force,ht=Ct(t.roundSettings,tt),ot=G.__force||$t(m+v>0?ht/(m+v)*100:0),mt=Lt(ot);return`<tr>
      <td>${s+P}</td>
      <td>${a(x.student_code??"")}</td>
      <td class="gs-name" style="border-right:2.0px solid #000;">${a(x.full_name??"")}</td>
      ${Z.map(E=>`<td>${E}</td>`).join("")}
      <td style="font-weight:700;">${rt(t.roundSettings,"mid_subtotal",J)}</td>
      ${at.map(E=>`<td>${E}</td>`).join("")}
      <td style="font-weight:700;">${rt(t.roundSettings,"fin_subtotal",X)}</td>
      <td style="font-weight:700;border-right:2.0px solid #000;">${rt(t.roundSettings,"total",tt)}</td>
      <td>${a(($==null?void 0:$[x.id])??"")}</td>
      <td class="grade-attr" style="border-right:2.0px solid #000;">${a(mt)}</td>
      <td style="font-weight:700;${et?`color:${S==="red"?"#c00":"#000"};`:""}">${ot}</td>
    </tr>`}),K=`<tr>${Array(D).fill("<td></td>").join("")}</tr>`,Y=A.length>6?"5mm":"5.8mm",Q=H.length>5?"5mm":"5.5mm";return`
  <div class="score-wrap">
    <div class="score-top-info">
      <div class="sc-field"><span class="sc-lbl">รายวิชา</span><span class="sc-val">${a(o.subject_name??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">รหัสวิชา</span><span class="sc-val">${a(o.subject_code??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">ชั้น</span><span class="sc-val">${a(st(p.class_name))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ภาคเรียนที่</span><span class="sc-val">${a(String(u))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ปีการศึกษา</span><span class="sc-val">${a(String(_))}</span></div>
    </div>
    <table class="grade-sheet" style="--row-h:${V}mm">
      <colgroup>
        <col style="width:5mm;"/>
        <col style="width:12mm;"/>
        <col style="width:45mm;"/>
        ${c.map(()=>`<col style="width:${Y};"/>`).join("")}
        <col style="width:7mm;"/>
        ${g.map(()=>`<col style="width:${Q};"/>`).join("")}
        <col style="width:7mm;"/>
        <col style="width:8mm;"/>
        <col style="width:8.5mm;"/>
        <col style="width:11mm;"/>
        <col style="width:6mm;"/>
      </colgroup>
      <thead>
        <!-- Row 1: ผู้เรียน คลุม 3 คอลัมน์ + section header + result cols rs5 -->
        <tr>
          <th colspan="3" style="border-right:2.5px solid #000;">ผู้เรียน</th>
          <th colspan="${k}" style="border-right:2.0px solid #000;">วัดผลระหว่างภาค / ปลายภาค</th>
          <th rowspan="5" class="v"><span style="font-size:7px;">ประเมินการอ่านคิดวิเคราะห์และเขียน</span></th>
          <th rowspan="5" class="v grade-attr" style="border-right:2.0px solid #000;"><span style="font-size:7px;">ประเมินคุณลักษณะอันพึงประสงค์</span></th>
          <th rowspan="5" class="v"><span>ระดับการเรียน</span></th>
        </tr>
        <!-- Row 2: เลขที่(v,rs4) | เลขประจำตัว(v,rs4) | ชื่อ-สกุล(rs4) | อัตราส่วน -->
        <tr>
          <th rowspan="4" class="v"><span>เลขที่</span></th>
          <th rowspan="4" class="v"><span>เลขประจำตัว</span></th>
          <th rowspan="4" style="border-right:2.0px solid #000;">ชื่อ - สกุล</th>
          <th colspan="${k}" style="font-size:7px;padding:1px;border-right:2.0px solid #000;">อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${m} / ${v}</th>
        </tr>
        <!-- Row 3: between/final section headers (3 student cols covered by rs4) -->
        <tr>
          <th colspan="${c.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนระหว่างเรียน/กลางภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนระหว่างภาค</span></th>
          <th colspan="${g.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนปลายภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนปลายภาค</span></th>
          <th rowspan="2" class="v" style="border-right:2.0px solid #000;"><span>รวมคะแนน 100</span></th>
        </tr>
        <!-- Row 4: column name verticals (3 student cols covered by rs4) -->
        <tr>
          ${c.map(x=>`<th class="v" style="overflow:visible;"><span>${a(x.assignment_name??"")}</span></th>`).join("")}
          ${g.map(x=>`<th class="v" style="overflow:visible;"><span>${a(x.assignment_name??"")}</span></th>`).join("")}
        </tr>
        <!-- Row 5: score-full (3 student cols still covered by rs4) -->
        <tr>
          ${c.map(x=>`<th class="score-full">${x.max_score??""}</th>`).join("")}
          <th class="score-full">${m||""}</th>
          ${g.map(x=>`<th class="score-full">${x.max_score??""}</th>`).join("")}
          <th class="score-full">${v||""}</th>
          <th class="score-full" style="border-right:2.0px solid #000;">${m||v?m+v:""}</th>
        </tr>
      </thead>
      <tbody>
        ${O.join("")}
        ${K}
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
        <div class="score-sig-line">${a(r)}</div>
        <div class="score-sig-role">${C}</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a(["AGM","AGMVOC"].includes((U=t.ms)==null?void 0:U.subject_group)?t.cfg.agmRegistrarName??t.cfg[`${t.prefix}RegistrarName`]??"":t.cfg[`${t.prefix}RegistrarName`]??"")}</div>
        <div class="score-sig-role">${a((["AGM","AGMVOC"].includes((F=t.ms)==null?void 0:F.subject_group)?t.cfg.agmRegistrarTitle??t.cfg[`${t.prefix}RegistrarTitle`]:t.cfg[`${t.prefix}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล")}</div>
      </div>
    </div>
  </div>`}function Bt(t){const{cls:i,ms:s,credit:p,teacher:o,deptNameTH:e,academicYear:r,semester:_,sessions:u,cfg:l,prefix:w,holidaySet:$}=t,b=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",S=["AGM","AGMVOC"].includes(s.subject_group)?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",C=40,M=3,j=u!=null&&u.length?Math.round(u.length/20):Math.max(1,Math.round(p*2)),A=(l==null?void 0:l[`${w}LogoBwUrl`])||(l==null?void 0:l[`${w}LogoUrl`])||(l==null?void 0:l.samaiLogoBwUrl)||(l==null?void 0:l.samaiLogoUrl)||"",H=Array.from({length:M},(m,v)=>Array.from({length:C},(y,R)=>{const k=u[v*C+R];return k?{sess:k,week:Math.ceil(k.n/j)}:null})),f=H.map(m=>m.map((v,y)=>{var k,z;if(!v)return null;if(y>0&&((k=m[y-1])==null?void 0:k.week)===v.week)return 0;let R=1;for(let D=y+1;D<C&&((z=m[D])==null?void 0:z.week)===v.week;D++)R++;return R})),h="border-right:1.5px solid #000;",d=Array.from({length:C},(m,v)=>`<tr>${Array.from({length:M},(R,k)=>{const z=H[k][v],D=f[k][v],T=k<M-1?h:"";if(!z)return`<td></td><td></td><td style="${T}"></td>`;const V=D===0?"":`<td class="wk" rowspan="${D}">${z.week}</td>`,L=$==null?void 0:$.has(z.sess.ds),O=T+(L?"color:#c00;font-weight:700;":"");return`${V}<td class="ep">${z.sess.n}</td><td class="dt" style="${O}">${Ot(z.sess.ds)}</td>`}).join("")}</tr>`),c=(m,v="",y=!1)=>`<span style="${y?"flex:1;border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;":`display:inline-block;min-width:${m};border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;`}">${a(String(v))}</span>`,g=m=>`<div style="display:flex;align-items:baseline;gap:2mm;font-size:9pt;margin-bottom:1.5mm;">${m}</div>`;return`
  <div class="page" style="padding:12mm 10mm 8mm;">
    ${A?`<div style="text-align:center;margin-bottom:2mm;"><div style="width:16mm;height:16mm;border-radius:50%;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;"><img src="${a(A)}" style="width:110%;height:110%;margin:-5%;object-fit:contain;display:block;" alt="โลโก้"/></div></div>`:""}
    <div style="text-align:center;font-weight:700;font-size:12pt;margin-bottom:3mm;">รายละเอียดสัปดาห์/คาบ/วันที่สอน</div>
    ${g(`<span>รายวิชา</span>${c("40mm",s.subject_name??"")}
           <span>&emsp;รหัสวิชา</span>${c("22mm",s.subject_code??"")}
           <span>&emsp;${b}</span>${c("",e,!0)}`)}
    ${g(`<span>${S}</span>${c("16mm",st(i.class_name))}
           <span>&emsp;ภาคเรียนที่</span>${c("10mm",_)}
           <span>&emsp;ปีการศึกษา</span>${c("18mm",r)}
           <span>&emsp;เวลา</span>${c("12mm")}
           <span>ชั่วโมง&emsp;จำนวน</span>${c("",p,!0)}
           <span>หน่วยกิต</span>`)}
    ${g(`<span>ครูผู้สอน</span>${c("80mm",(o==null?void 0:o.full_name)??"")}`)}
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
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${h}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${h}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt">วันที่/เดือน/ปี</th>
        </tr>
      </thead>
      <tbody>${d.join("")}</tbody>
    </table>
  </div>`}const Vt=["ข.ร.","ข.ส.","ม.ส.","ข.ป."];function Ut(t){return String(t??"").trim().replace(/\s+/g,"").replace(/\./g,"")==="มส"?"ม.ส.":String(t??"").trim()}function $e(t){var Y,Q;const{cls:i,ms:s,credit:p,prefix:o,cfg:e,students:r,scoreColumns:_,scoreMap:u,teacher:l,deptNameTH:w,deptHeadName:$,hrSamai:b,hrReligion:S,academicYear:C,semester:M,sessions:j,moralScores:A,moralMax:H}=t,f=a(e[`${o}SchoolName`]??e.samaiSchoolName??""),h=e[`${o}LogoUrl`]||e[`${o}LogoBwUrl`]||e.samaiLogoUrl||e.samaiLogoBwUrl||"",d=a(e[`${o}DirectorName`]??""),c=a(e[`${o}DirectorTitle`]||"ผู้อำนวยการ"),g=a(e[`${o}RegistrarName`]??""),m=a(e[`${o}RegistrarTitle`]||"ผู้ช่วยผู้อำนวยการฝ่ายทะเบียนวัดผลและประเมินผล"),v=a($),y=j!=null&&j.length?Math.round(j.length/20):p*2,R=(j==null?void 0:j.length)??p*2*20,k=!!window._pp5HideScores,z=_.reduce((U,F)=>U+(F.max_score??0),0)+(H||0),D={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},T={"ข.ร.":0,"ข.ส.":0,"ม.ส.":0,"ข.ป.":0};let V=0,L=0,O=0;if(!k)for(const U of r){const F=Ut(U.special_result);if(F&&Vt.includes(F)){T[F]++;continue}const x=u[U.id]??{},P=_.some(G=>x[G.id]!=null);if(P&&O++,z>0){const Z=(_.reduce((tt,et)=>tt+(x[et.id]??0),0)+(Number(A==null?void 0:A[U.id])||0))/z*100,at=U.special_result,J=at&&/^[0-9]+(?:\.5)?$/.test(String(at))?Number(at):$t(Z),X=String(J);X in D&&D[X]++,P&&(J>0?V++:L++)}}const K=[[4,"80 - 100","จำนวนนักเรียนเข้าเรียน",r.length],["3.5","75 - 79","จำนวนนักเรียนเข้าสอบ",O],[3,"70 - 74","จำนวนนักเรียนไม่มีสิทธิ์สอบ (ข.ร.)",T["ข.ร."]],["2.5","65 - 69","จำนวนนักเรียนขาดสอบ (ข.ส.)",T["ข.ส."]],[2,"60 - 64","จำนวนนักเรียนไม่สมบูรณ์ (ม.ส.)",T["ม.ส."]],["1.5","55 - 59","จำนวนนักเรียนขาดการปฏิบัติงาน (ข.ป.)",T["ข.ป."]],[1,"50 - 54","จำนวนนักเรียนผ่าน (ผ)",V],[0,"0 - 49","จำนวนนักเรียนไม่ผ่าน (ม.ผ.)",L]].map(([U,F,x,P])=>`
    <tr>
      <td>${U}</td><td>${F}</td><td>${D[String(U)]||"-"}</td>
      <td class="voc-remark">${x}</td><td>${P||"-"}</td>
    </tr>`).join("");return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p1">
      ${h?`<div class="voc-logo-frame"><img class="voc-logo" src="${a(h)}" alt="ตราสถานศึกษา" /></div>`:""}
      <div class="voc-title1">${f}</div>
      <div class="voc-title2">แบบบันทึกเวลาเรียนและประเมินผลการเรียน</div>
      <div class="voc-title3">หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)</div>

      <div class="voc-info">
        <div class="voc-info-row">
          <span class="voc-item">ชั้น <span class="voc-line-fill voc-short">${a(st(i.class_name))}</span></span>
          <span class="voc-item">ภาคเรียนที่ <span class="voc-line-fill voc-short">${M}</span></span>
          <span class="voc-item">ปีการศึกษา <span class="voc-line-fill voc-short">${C}</span></span>
          <span class="voc-item" style="margin-left:auto">แผนกวิชา <span class="voc-line-fill voc-medium">${a(w)}</span></span>
        </div>
        <div class="voc-info-row">
          <span class="voc-item" style="flex:1">รายวิชา <span class="voc-line-fill voc-long" style="flex:1">${a(s.subject_name??"")}</span></span>
          <span class="voc-item">รหัสวิชา <span class="voc-line-fill voc-medium">${a(s.subject_code??"")}</span></span>
        </div>
        <div class="voc-info-row voc-center" style="justify-content:center; gap:10mm">
          <span class="voc-item"><span class="voc-line-fill voc-short">${p}</span> หน่วยกิต</span>
          <span class="voc-item">เวลาเรียน <span class="voc-line-fill voc-short">${y}</span> ชั่วโมง/สัปดาห์</span>
          <span class="voc-item">รวมเวลาเรียน <span class="voc-line-fill voc-short">${R}</span> ชั่วโมง/ภาค</span>
        </div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูผู้สอน <span class="voc-line-fill voc-xlong" style="flex:1">${a((l==null?void 0:l.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาสามัญ <span class="voc-line-fill voc-xlong" style="flex:1">${a(((Y=b==null?void 0:b.teachers)==null?void 0:Y.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาศาสนา <span class="voc-line-fill voc-xlong" style="flex:1">${a(((Q=S==null?void 0:S.teachers)==null?void 0:Q.full_name)??"")}</span></span></div>
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
        <tbody>${K}</tbody>
      </table>

      <div class="voc-consider">พิจารณาผลการให้ระดับคะแนนเห็นว่าเหมาะสมและถูกต้องแล้ว</div>

      <div class="voc-sign-grid">
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((l==null?void 0:l.full_name)??"")} )</div>
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนกวิชา<br><br>( ${v} )</div>
        <div class="voc-sign-block voc-sign-wide">ลงชื่อ <span class="voc-sig-line"></span> ${m}<br><br>( ${g} )</div>
      </div>

      <div class="voc-approve">อนุมัติผลการเรียน <span class="voc-check-box"></span>อนุมัติ <span class="voc-check-box"></span>ไม่อนุมัติ</div>
      <div class="voc-director">ลงชื่อ <span class="voc-sig-line"></span><br><br>( ${d} )<br>${c}${f}</div>
    </div>
  </section>`}const dt=2;function _e(t,i){const s=Math.ceil(((t==null?void 0:t.length)||0)/dt),p=Array.from({length:dt},(e,r)=>Array.from({length:s},(_,u)=>{const l=t[r*s+u];return l?{sess:l,week:Math.ceil(l.n/i)}:null})),o=p.map(e=>e.map((r,_)=>{var l,w;if(!r)return null;if(_>0&&((l=e[_-1])==null?void 0:l.week)===r.week)return 0;let u=1;for(let $=_+1;$<s&&((w=e[$])==null?void 0:w.week)===r.week;$++)u++;return u}));return{N:s,colData:p,colRS:o}}const Ft=233;function ke(t){const i=Math.max(6,...(t??[]).map(s=>(s.full_name??"").length));return Math.min(50,Math.max(30,i*2.3))}function Se(t,i,s){const o=Math.max(i.length+3,15),e=Math.max(3,Math.min(7,Ft/o)),r=e<3.6?7.5:e<4.4?8.5:e<5.4?9.5:e<6.2?10.5:11.5,_=Array.from({length:o},(l,w)=>{const $=i[w];if(!$)return`<tr>
        <td class="voc-student-no"></td><td class="voc-student-id"></td><td class="voc-student-name"></td>
        ${Array.from({length:20},()=>"<td></td>").join("")}
        <td class="voc-score"></td>
      </tr>`;const b=t.attMap[$.id]??{},S=[];for(const[M,j]of Object.entries(b))j!=="present"&&S.push({n:parseInt(M),status:j});S.sort((M,j)=>M.n-j.n);const C=Array.from({length:20},(M,j)=>{const A=S[j];return A?`<td style="color:${A.status==="absent"?"#d00":A.status==="leave"?"#005bbb":"#e67e00"};font-weight:700;">${A.n}</td>`:"<td></td>"});return`<tr>
      <td class="voc-student-no voc-center">${w+1}</td>
      <td class="voc-student-id voc-center">${a($.student_code??"")}</td>
      <td class="voc-student-name">${a($.full_name??"")}</td>
      ${C.join("")}
      <td class="voc-score voc-center">-</td>
    </tr>`}),u=Array.from({length:20},(l,w)=>`<th class="voc-att">${w+1}</th>`).join("");return`
  <table class="voc-attendance voc-student-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${r}px">
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
        ${u}
        <th class="voc-score">10</th>
      </tr>
    </thead>
    <tbody>${_.join("")}</tbody>
  </table>`}function je(t,i){const{N:s,colData:p,colRS:o}=t,e=Math.max(1.6,Math.min(4.55,Ft/Math.max(1,s))),r=e<2.4?6:e<3.2?7:e<4?8:9.5,_=Array.from({length:s},(u,l)=>`<tr>${Array.from({length:dt},($,b)=>{const S=p[b][l],C=o[b][l];if(!S)return'<td class="voc-sched-week"></td><td class="voc-sched-period"></td><td class="voc-sched-date"></td>';const M=C===0?"":`<td class="voc-sched-week voc-center" rowspan="${C}">${S.week}</td>`,j=i==null?void 0:i.has(S.sess.ds);return`${M}<td class="voc-sched-period voc-center">${S.sess.n}</td><td class="voc-sched-date voc-center" style="${j?"color:#c00;font-weight:700;":""}">${Ot(S.sess.ds)}</td>`}).join("")}</tr>`);return`
  <table class="voc-attendance voc-schedule-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${r}px">
    <colgroup>
      ${Array.from({length:dt},()=>'<col style="width:6mm"><col style="width:6.5mm"><col style="width:15mm">').join("")}
    </colgroup>
    <thead>
      <tr class="voc-h-main">
        <th colspan="${dt*3}">สัปดาห์ที่/คาบ/วันที่สอน</th>
      </tr>
      <tr class="voc-h-sub">
        ${Array.from({length:dt},()=>'<th colspan="3"></th>').join("")}
      </tr>
      <tr class="voc-h-num">
        ${Array.from({length:dt},()=>`
          <th class="voc-sched-week"><div class="voc-vtext">สัปดาห์ที่</div></th>
          <th class="voc-sched-period"><div class="voc-vtext">คาบ</div></th>
          <th class="voc-sched-date"><div class="voc-vtext">ว/ด/ป</div></th>`).join("")}
      </tr>
    </thead>
    <tbody>${_.join("")}</tbody>
  </table>`}function Ce(t){const{students:i,sessions:s}=t,p=s!=null&&s.length?Math.round(s.length/20):1,o=_e(s,p),e=ke(i);return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p2">
      <div class="voc-p2-title">แบบบันทึกการไม่มาเรียน</div>
      <div class="voc-att-flex">
        ${Se(t,i,e)}
        ${je(o,t.holidaySet)}
      </div>
    </div>
  </section>`}const jt=31;function Ae(t,i=8){const s=a(t??"");if(s.length<=i)return s;const p=Math.ceil(s.length/2);let o=s.lastIndexOf(" ",p);return o<=0&&(o=s.indexOf(" ",p)),o<=0?s:`${s.slice(0,o)}<br>${s.slice(o+1)}`}function Me(t,i,s){const{cls:p,teacher:o,deptHeadName:e,scoreColumns:r,scoreMap:_,moralScores:u,moralMax:l,moralColName:w,roundSettings:$}=t,b=($==null?void 0:$.forcedGradeColor)==="black"?"black":"red",S=c=>c.assignment_type==="คะแนนพิเศษ",C=r.filter(c=>!S(c));r.filter(c=>S(c));const M=C.reduce((c,g)=>c+(g.max_score??0),0),j=M+(l||0),A=!!window._pp5HideScores,H=i.map((c,g)=>{if(A)return`<tr>
        <td class="voc-center">${s+g}</td><td class="voc-c-id"></td><td class="voc-c-name"></td>
        ${Array(C.length).fill("<td></td>").join("")}<td></td>
        <td></td><td></td><td></td><td></td>
      </tr>`;const m=_[c.id]??{},v=C.map(L=>rt(t.roundSettings,St(L),m[L.id],L.column_type==="derived"?2:1)),y=C.reduce((L,O)=>L+(m[O.id]??0),0),R=(u==null?void 0:u[c.id])??"",k=y+(Number(R)||0),z=Ut(c.special_result),D=!!(z&&Vt.includes(z)),T=Ct(t.roundSettings,k),V=D?z:$t(j?T/j*100:0);return`<tr>
      <td class="voc-center">${s+g}</td>
      <td class="voc-c-id voc-center">${a(c.student_code??"")}</td>
      <td class="voc-c-name">${a(c.full_name??"")}</td>
      ${v.map(L=>`<td class="voc-center">${L}</td>`).join("")}
      <td class="voc-center voc-bold">${rt(t.roundSettings,"mid_subtotal",y)}</td>
      <td class="voc-center">${R}</td>
      <td class="voc-center voc-bold">${rt(t.roundSettings,"total",k)}</td>
      <td class="voc-center voc-bold" style="${D?`color:${b==="red"?"#c00":"#000"};`:""}">${V}</td>
      <td></td>
    </tr>`}),f=C.length+1+4,h=`<tr><td class="voc-center"></td><td></td><td></td>${Array(f).fill("<td></td>").join("")}</tr>`,d=H.concat(Array(Math.max(0,jt-H.length)).fill(h));return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p3">
      <div class="voc-p3-title">แบบประเมินผลการเรียน</div>
      <table class="voc-eval">
        <colgroup>
          <col style="width:5mm"><col style="width:19.5mm"><col style="width:43.5mm">
          ${C.map(()=>'<col style="width:7mm">').join("")}
          <col style="width:9.5mm"><col style="width:9.5mm"><col style="width:9.5mm">
          <col style="width:12.5mm"><col style="width:12.5mm">
        </colgroup>
        <thead>
          <tr class="voc-h-top">
            <th rowspan="3" class="voc-c-no"><div class="voc-vtext">เลขที่</div></th>
            <th rowspan="3" class="voc-c-id">เลข<br>ประจำตัว</th>
            <th rowspan="3" class="voc-c-name">ชื่อ - สกุล</th>
            <th colspan="${C.length+1}">คะแนนเก็บ (เต็ม ${M})</th>
            <th rowspan="2" class="voc-c-moral"><div class="voc-vtext">คะแนนคุณธรรม${w?`<br>(${a(w)})`:""}</div></th>
            <th rowspan="2" class="voc-c-total"><div class="voc-vtext">รวม</div></th>
            <th rowspan="3" class="voc-c-grade"><div class="voc-vtext">ระดับผล<br>การเรียน</div></th>
            <th rowspan="3" class="voc-c-note"><div class="voc-vtext">หมายเหตุ/<br>การสอบแก้ตัว</div></th>
          </tr>
          <tr class="voc-h-vertical">
            ${C.map(c=>`<th class="voc-c-obj"><div class="voc-vtext">${Ae(c.assignment_name??"")}</div></th>`).join("")}
            <th class="voc-c-sum80"><div class="voc-vtext">รวม<br>คะแนนเก็บ</div></th>
          </tr>
          <tr class="voc-h-score">
            ${C.map(c=>`<th>${c.max_score??""}</th>`).join("")}<th>${M||""}</th>
            <th>${l||""}</th><th>${j||""}</th>
          </tr>
        </thead>
        <tbody>${d.join("")}</tbody>
      </table>
      <div class="voc-footer-sigs">
        <div>ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((o==null?void 0:o.full_name)??"")} )</div>
        <div>ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนก<br><br>( ${a(e)} )</div>
      </div>
    </div>
  </section>`}function He(t){const{students:i}=t,s=[];for(let p=0;p<i.length;p+=jt)s.push(Me(t,i.slice(p,p+jt),p+1));return s.join("")}const Re=46,ze=5.3,De=5.45;function Oe(t){const i=Math.max(1,Math.ceil((t.content??"").length/Re));return Math.max(De,i*ze)}function Te(t){const{ms:i,teacher:s,courseDoc:p}=t,o=Array.isArray(p==null?void 0:p.voc_objectives)?p.voc_objectives:[],e=Array.isArray(p==null?void 0:p.voc_schedule)?p.voc_schedule:[],r=o.concat(Array.from({length:Math.max(0,10-o.length)},()=>({objective:"",competency:""}))),_=e.concat(Array.from({length:Math.max(0,20-e.length)},()=>({week:"",content:"",note:""}))),u=297,l=30,w=10,$=9.5,b=10,S=8,C=7,M=7,j=S+r.length*C,A=u-l-w-$-b-j-M,H=u-l-$-M,f=[];let h=[],d=0,c=A;for(const y of _){const R=Oe(y);h.length&&d+R>c&&(f.push(h),h=[],d=0,c=H),h.push(y),d+=R}f.push(h);const g=`
      <div class="voc-course-title">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา ${a(i.subject_name??"")}</div>
      <div class="voc-course-code">รหัสวิชา ${a(i.subject_code??"")}</div>
      <table class="voc-objective-table">
        <thead><tr><th>จุดประสงค์การเรียนรู้</th><th>สมรรถนะรายวิชา</th></tr></thead>
        <tbody>${r.map(y=>`<tr><td>${a(y.objective)||"&nbsp;"}</td><td>${a(y.competency)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,m=(y,R)=>`
      <div class="voc-schedule-title">กำหนดการสอน${R?"":" (ต่อ)"}</div>
      <table class="voc-schedule-table">
        <colgroup><col style="width:13%"><col style="width:69%"><col style="width:18%"></colgroup>
        <thead><tr><th>สัปดาห์ที่</th><th>เนื้อหาที่สอน</th><th>หมายเหตุ</th></tr></thead>
        <tbody>${y.map(k=>`<tr><td>${a(k.week)||"&nbsp;"}</td><td>${a(k.content)||"&nbsp;"}</td><td>${a(k.note)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,v=`<div class="voc-sign-bottom">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอนประจำวิชา<br><br>( ${a((s==null?void 0:s.full_name)??"")} )</div>`;return f.map((y,R)=>`
  <section class="voc-page">
    <div class="voc-page-inner voc-p4">
      ${R===0?g:""}
      ${m(y,R===0)}
      ${R===f.length-1?v:""}
    </div>
  </section>`).join("")}function kt(t,i,s=null){const p=s??[Et(t),Pt(t),Wt(t),Gt(t),Bt(t)];return`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8"/>
  <title>${a(i)}</title>
  <style>${Nt()}</style>
</head>
<body>
  ${p.join(`
`)}
</body>
</html>`}function Le(t){return`<!DOCTYPE html>
<html lang="th"><head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>${Nt()}
body{background:#fff;margin:0;}
@media print{@page{size:A4 portrait;margin:0;}.no-print{display:none!important;}}
</style></head>
<body>${t}</body></html>`}function Ne(t){var H,f,h;(H=document.getElementById("pp5-viewer"))==null||H.remove();const i=((f=t.ms)==null?void 0:f.subject_group)==="ACDMVOC",s=i?[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>$e(t)},{label:"ไม่มาเรียน/วันที่สอน",fn:()=>Ce(t)},{label:"คะแนน",fn:()=>He(t)},{label:"จุดประสงค์/กำหนดการสอน",fn:()=>Te(t)}]:[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>Et(t)},{label:"มาตรฐาน/ตัวชี้วัด",fn:()=>Pt(t)},{label:"บันทึกการไม่มาเรียน",fn:()=>Wt(t)},{label:"คะแนน",fn:()=>Gt(t)},{label:"วันที่สอน",fn:()=>Bt(t)}],p=s.slice(1).map((d,c)=>c+1),o=!!((h=t.cfg)!=null&&h.pp5PreviewEditEnabled),e={},r=document.createElement("div");r.id="pp5-viewer",r.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#374151;";const _=d=>"border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-family:Sarabun,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;"+(d?"background:#2563eb;color:#fff;":"background:#4b5563;color:#d1d5db;");r.innerHTML=`
    <div style="background:#111827;padding:8px 12px;display:flex;align-items:center;gap:6px;flex-shrink:0;overflow-x:auto;">
      <button id="pp5-v-close" style="${_(!1)}background:#dc2626;color:#fff;">✕ ปิด</button>
      <button id="pp5-v-print" style="${_(!1)}background:#059669;color:#fff;">🖨️ พิมพ์หน้านี้</button>
      <button id="pp5-v-printall" style="${_(!1)}background:#7c3aed;color:#fff;">🖨️ พิมพ์ทั้งหมด</button>
      ${o?`<button id="pp5-v-edit" style="${_(!1)}background:#f59e0b;color:#fff;">✏️ แก้ไขข้อความ</button>`:""}
      <div style="width:1px;height:24px;background:#374151;flex-shrink:0;margin:0 2px;"></div>
      ${s.map((d,c)=>`
        <button class="pp5-vtab" data-i="${c}" style="${_(c===0)}">${d.label}</button>
      `).join("")}
      ${o?'<span id="pp5-v-edit-hint" style="display:none;color:#fbbf24;font-size:12px;margin-left:8px;white-space:nowrap;">กำลังแก้ไข — คลิกข้อความในหน้าเพื่อพิมพ์ทับได้เลย (ไม่กระทบข้อมูลจริงในระบบ)</span>':""}
    </div>
    <div style="flex:1;overflow:auto;display:flex;justify-content:center;align-items:flex-start;padding:20px;">
      <iframe id="pp5-iframe" style="border:none;box-shadow:0 4px 32px rgba(0,0,0,.5);background:#fff;width:210mm;height:297mm;" scrolling="no"></iframe>
    </div>`,document.body.appendChild(r);const u=r.querySelector("#pp5-iframe"),l=[...r.querySelectorAll(".pp5-vtab")],w=r.querySelector("#pp5-v-edit"),$=r.querySelector("#pp5-v-edit-hint");let b=null,S=!1;function C(d){return e[d]??s[d].fn()}function M(){var d;if(!(b==null||s[b].all))try{const c=(d=u.contentDocument)==null?void 0:d.body;c&&(e[b]=c.innerHTML)}catch{}}function j(d){var c;if(S=d&&o&&b!=null&&!s[b].all,w){const g=b!=null&&s[b].all;w.style.background=S?"#16a34a":"#f59e0b",w.textContent=S?"✅ เสร็จแล้ว":"✏️ แก้ไขข้อความ",w.title=g?'กดเพื่อไปหน้าปกแล้วเริ่มแก้ไข (แท็บ "ดูทั้งหมด" แก้ไขตรงๆ ไม่ได้)':"",w.style.opacity=g?"0.7":"1"}$&&($.style.display=S?"inline":"none");try{const g=(c=u.contentDocument)==null?void 0:c.body;g&&(g.contentEditable=S?"true":"false",g.style.outline=S?"2px dashed #f59e0b":"none",g.style.outlineOffset=S?"-2px":"0")}catch{}}function A(d){M(),b=d,l.forEach((y,R)=>{R===d?(y.style.background="#2563eb",y.style.color="#fff"):(y.style.background="#4b5563",y.style.color="#d1d5db")});const c=s[d];let g,m;c.all?(g=kt(t,"",p.map(C)),m="3000mm"):(g=Le(C(d)),m=(i?[2,3]:[3,4]).includes(d)?"900mm":"297mm"),u.style.height=m;const v=u.contentDocument;v.open(),v.write(g),v.close(),j(!1)}A(0),l.forEach((d,c)=>d.addEventListener("click",()=>A(c))),r.querySelector("#pp5-v-close").addEventListener("click",()=>r.remove()),w==null||w.addEventListener("click",()=>{var d;if((d=s[b])!=null&&d.all){A(1),j(!0);return}j(!S)}),r.querySelector("#pp5-v-print").addEventListener("click",()=>{if(M(),s[b].all){const d=`ปพ5_${t.ms.subject_code??""}_${st(t.cls.class_name)}`;Ht(kt(t,d,p.map(C)),{autoprint:!0});return}u.contentWindow.focus(),u.contentWindow.print()}),r.querySelector("#pp5-v-printall").addEventListener("click",()=>{M();const d=`ปพ5_${t.ms.subject_code??""}_${st(t.cls.class_name)}`,c=kt(t,d,p.map(C));Ht(c,{autoprint:!0})})}async function Ee(t){xt("กำลังโหลดข้อมูลเอกสาร...","info");try{const i=await we(t);Ne(i);for(const s of i.docWarnings??[])xt(s,"warning")}catch(i){console.error("[pp5-doc]",i),xt("โหลดเอกสารไม่สำเร็จ: "+me(i),"error")}}function qe(t){var s;(s=document.getElementById("pp5-course-modal"))==null||s.remove();const i=document.createElement("div");i.id="pp5-course-modal",i.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",i.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 เปิด ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการดู</p>
      <div class="space-y-2 mb-5">
        ${t.map(p=>`
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="radio" name="pp5-cls" class="w-4 h-4 accent-indigo-600" value="${p.id}" />
          <span class="text-sm text-gray-700">${a(st(p.class_name))}</span>
        </label>`).join("")}
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-open-btn" class="flex-1 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700">เปิด</button>
      </div>
    </div>`,document.body.appendChild(i),i.querySelector("#pp5-cancel").addEventListener("click",()=>i.remove()),i.querySelector("#pp5-open-btn").addEventListener("click",async()=>{const p=i.querySelector('input[name="pp5-cls"]:checked');if(!p){xt("กรุณาเลือกห้อง","warning");return}i.remove(),await Ee(parseInt(p.value))}),i.addEventListener("click",p=>{p.target===i&&i.remove()})}export{qe as openPP5CourseModal,Ee as openPP5Doc};
