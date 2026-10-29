import{getSystemConfig as qt,getClassSessionDOWs as Mt,getClassStudents as Kt,getClassAttendanceAll as Jt,getScoreColumns as Xt,getStudentScores as Qt,getDepartments as Zt,getHomeroomTeachers as te,getTeacherById as ee,getCourseDocPage2 as se,getCourseDocLangSettings as ae,getSchoolHolidays as ne,getLifeSkillColumns as Ht,getClassScoreRounding as oe,getReligionGroupLeaderForTeacher as le,getLifeSkillScores as ie,getReadingScoreColumns as ce,getReadingScores as re}from"./api-CQwFwlFA.js";import{i as de,s as me,d as pe,c as jt,f as rt,r as kt}from"./score-display-CQ4dUIPx.js";import{a as xt,g as ge}from"./ui-Bnz8GMvV.js";import{s as $t}from"./supabase-BV-W2lsh.js";import{o as Dt}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as he,_readingGrade as fe}from"./teacher-views-utils-Du8GiC29.js";import{i as ue}from"./skill-groups-BY1NTbf4.js";const ve=t=>["AGM","AGMVOC"].includes(t),be=t=>ve(t)?"ศาสนา":t==="ACDMVOC"?"สามัญปวช":t==="ACDM"?"สามัญ":null;function we(t,o){const s=be(o);return s?[...new Map(t.filter(l=>l.category===s).map(l=>[String(l.dept_code).trim(),l])).values()]:[]}function ye(t,o,s){return we(t,o).find(l=>l.dept_code===s||l.dept_name===s)??null}function Qe(t,o,s=""){const l=new Set(o.map(f=>String(f.leader_id))),n=t.filter(f=>f.category==="ศาสนา"),e=n.filter(f=>l.has(String(f.id))||f.position==="religion_subgroup_head"||Array.isArray(f.positions)&&f.positions.includes("religion_subgroup_head")),c=s.trim()?n.filter(f=>`${f.full_name??""} ${f.teacher_code??""}`.toLowerCase().includes(s.trim().toLowerCase())).map(f=>f.full_name):[...e.map(f=>f.full_name),...o.map(f=>{var w;return(w=f.teachers)==null?void 0:w.full_name})];return[...new Set(c.map(f=>String(f??"").trim()).filter(Boolean))]}function a(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Rt(t){if(!t)return null;const[o,s,l]=String(t).split("-").map(Number);return!o||!s||!l?null:new Date(o,s-1,l)}function ct(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Tt(t){if(!t)return"";const[o,s,l]=String(t).split("-").map(Number);if(!o)return t;const n=(o+543)%100;return`${String(l).padStart(2,"0")}/${String(s).padStart(2,"0")}/${String(n).padStart(2,"0")}`}function xe(t,o,s=null,l=!1){const n=l&&s&&s.length?s.length:Math.max(1,Math.round((o??1)*2)),e=n*20;let c=s&&s.length?[...s]:null,f=!1;if(c&&c.length<n){f=!0;const u={};for(const i of c)u[i]=(u[i]||0)+1;const g=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(i=>t[i]).filter(Boolean).map(i=>Rt(i)).filter(Boolean).sort((i,h)=>i-h),m={};g.forEach(i=>{const h=i.getDay();m[h]=(m[h]||0)+1});const r=Object.entries(m).sort(([,i],[,h])=>h-i||Number(i)-Number(h));for(const[i]of r){if(c.length>=n)break;const h=Number(i);for(;(u[h]||0)<Math.min(m[h],2)&&c.length<n;)c.push(h),u[h]=(u[h]||0)+1}for(let i=1;i<=5&&c.length<n;i++)(u[i]||0)<2&&(c.push(i),u[i]=(u[i]||0)+1);c.sort((i,h)=>i-h)}else c&&c.length>n&&(c=c.slice(0,n));const w=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(u=>t[u]).filter(Boolean).map(u=>Rt(u)).filter(Boolean).sort((u,g)=>u-g);if(!w.length)return[];if(f&&c){const g=[];let m=0,r=0;for(;m<w.length&&g.length<e;){const i=new Date(w[m]);i.setDate(i.getDate()-i.getDay()),i.setHours(0,0,0,0);const h=i.getTime();r=h;const v=[];for(;m<w.length&&w[m].getTime()>=h&&w[m].getTime()<h+6048e5;)v.push(w[m++]);const y={};for(const $ of v){const C=$.getDay();y[C]=(y[C]||0)+1}for(const $ of v){if(g.length>=e)break;g.push({n:g.length+1,date:new Date($),ds:ct($)})}const R=n-v.length;if(R>0){const $={};c.forEach(z=>{$[z]=($[z]||0)+1});const C=[];for(const[z,T]of Object.entries($).sort()){const F=Number(z),N=y[F]||0;for(let O=0;O<T-N&&C.length<R;O++)C.push(F)}for(const z of C){if(g.length>=e)break;const T=new Date(i);T.setDate(T.getDate()+z),g.push({n:g.length+1,date:T,ds:ct(T)})}}}if(g.length<e){const i=new Date(r);let h=1;for(;g.length<e;){for(const v of c){if(g.length>=e)break;const y=new Date(i);y.setDate(y.getDate()+h*7+v),g.push({n:g.length+1,date:y,ds:ct(y)})}h++}}return g}if(!c||!c.length){const g={},m=w.filter($=>{const C=new Date($);C.setDate(C.getDate()-C.getDay()),C.setHours(0,0,0,0);const z=C.getTime();return g[z]=(g[z]||0)+1,g[z]<=n}),r=[];for(const $ of m){if(r.length>=e)break;r.push({n:r.length+1,date:new Date($),ds:ct($)})}if(r.length>=e)return r;const i=m[m.length-1],h=new Date(i);h.setDate(h.getDate()-h.getDay()),h.setHours(0,0,0,0);const v=h.getTime(),y=m.filter($=>$.getTime()>=v&&$.getTime()<v+6048e5);let R=1;for(;r.length<e;){for(const $ of y){if(r.length>=e)break;const C=new Date($);C.setDate(C.getDate()+R*7),r.push({n:r.length+1,date:C,ds:ct(C)})}R++}return r}const p={},x=[];for(const u of w){if(x.length>=e)break;const g=new Date(u);g.setDate(g.getDate()-g.getDay()),g.setHours(0,0,0,0);const m=g.getTime();p[m]=(p[m]||0)+1,p[m]<=n&&x.push({n:x.length+1,date:new Date(u),ds:ct(u)})}if(x.length>=e)return x;const _=w[w.length-1],b=new Date(_);b.setDate(b.getDate()-b.getDay()),b.setHours(0,0,0,0);const S=b.getTime(),A=7*24*60*60*1e3,H={};for(const u of w)if(u.getTime()>=S&&u.getTime()<S+A){const g=u.getDay();H[g]=(H[g]||0)+1}const k={};for(const u of c)k[u]=(k[u]||0)+1;const M=[];for(const[u,g]of Object.entries(k)){const m=g-(H[Number(u)]||0);for(let r=0;r<m;r++)M.push(Number(u))}M.sort((u,g)=>u-g);for(const u of M){if(x.length>=e)break;const g=new Date(b);g.setDate(g.getDate()+u),x.push({n:x.length+1,date:g,ds:ct(g)})}let D=1;for(;x.length<e;){for(const u of c){if(x.length>=e)break;const g=new Date(b);g.setDate(g.getDate()+D*7+u),x.push({n:x.length+1,date:g,ds:ct(g)})}D++}return x}function _e(t){return t==="ACDMVOC"?"porwor":"samai"}function wt(t={},o,s=!1){return(s?[`${o}LogoUrl`,`${o}LogoBwUrl`]:[`${o}LogoBwUrl`,`${o}LogoUrl`]).map(n=>t==null?void 0:t[n]).find(Boolean)||""}function et(t){return String(t??"").split(" ")[0]}function Nt(t,o){const s={};for(const e of t){const c=e[o];c&&(s[c]=(s[c]??0)+1)}let l=null,n=0;for(const[e,c]of Object.entries(s))c>n&&(n=c,l=e);return l}function $e(t){return Nt(t,"religion_room")}function Se(t){return Nt(t,"main_room")}function _t(t){return t>=80?4:t>=75?3.5:t>=70?3:t>=65?2.5:t>=60?2:t>=55?1.5:t>=50?1:0}function Et(t){return t>=3.5?"ดีเยี่ยม":t>=2.5?"ดี":t>=1?"ผ่าน":"ไม่ผ่าน"}async function ke(t){var W,gt;const o=await qt();he(o);const s=parseInt(o.academicYear??o.academic_year??2568),l=parseInt(o.semester??1),{data:n,error:e}=await $t.from("classes").select(`
      id, course_id, class_name, academic_year, semester, skill_group, google_sheet_id,
      head_student_id, source_class_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id, learning_area ),
      students:students!fk_head_student ( full_name, student_code )
    `).eq("id",t).single();if(e||!n)throw new Error("โหลดข้อมูลห้องเรียนไม่สำเร็จ");const c=n.academic_year!=null&&Number.isFinite(+n.academic_year)?+n.academic_year:s,f=n.semester!=null&&Number.isFinite(+n.semester)?+n.semester:l,w={...o,academicYear:String(c),semester:String(f)},p=n.master_subjects??{},x=p.credit??1,_=_e(p.subject_group);let b=n.source_class_id??null,S=x;if(!b){const{data:d}=await $t.from("classes").select("source_class_id").eq("id",t).single();b=(d==null?void 0:d.source_class_id)??null}let A=[];if(b){const{data:d}=await $t.from("classes").select("id, academic_year, semester, master_subjects(credit)").eq("id",b).single(),q=(d==null?void 0:d.academic_year)!=null&&(d==null?void 0:d.semester)!=null;!d||q&&+d.academic_year===c&&+d.semester===f?((W=d==null?void 0:d.master_subjects)!=null&&W.credit&&(S=d.master_subjects.credit),A=await Mt(b).catch(()=>[])):b=null}const H=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),[k,M,D,u,g,m]=await Promise.all([Kt(t),Jt(b??t),Xt(b??t),Qt(b??t),Zt(),te(c,f).catch(()=>[])]),r=p.teacher_id?await ee(p.teacher_id).catch(()=>null):null,i=ye(g,p.subject_group,p.dept),[h,v,y,R]=await Promise.all([p.id?se(p.id).catch(()=>null):Promise.resolve(null),ae().catch(()=>[]),Mt(n.id).catch(()=>[]),ne(c,f).catch(()=>[])]),$=new Set(R),C=((gt=v.find(d=>d.lang_key==="th"))==null?void 0:gt.settings)??{},z=Array.isArray(C.colsBasic)&&C.colsBasic.length?C.colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],T=Array.isArray(C.colsExtra)&&C.colsExtra.length?C.colsExtra:["ผลการเรียนรู้"],F=C.rowHeader||"ข้อ",N=p.subject_group==="ACDMVOC",O=xe(n,x,y.length?y:null,N),U={};if(b){const d=N&&y.length?y.length:Math.max(1,Math.round(x*2)),q=N&&A.length?A.length:Math.max(1,Math.round(S*2)),G=O.length;for(let B=1;B<=G;B++){const Y=Math.floor((B-1)/d),st=(B-1)%d,yt=Y*q+st+1;for(const at of M)at.session_number===yt&&(U[at.student_id]||(U[at.student_id]={}),U[at.student_id][B]=at.status)}}else for(const d of M)U[d.student_id]||(U[d.student_id]={}),U[d.student_id][d.session_number]=d.status;const X=(b?D.filter(d=>!H.has(d.assignment_name)):D).filter(d=>d.column_type!=="override"&&!de(d)),Q=["AGM","AGMVOC"].includes(p.subject_group)?["คะแนนมาเรียน","คะแนนละหมาด"]:ue(n.skill_group)?(await Ht(c,f,"สามัญ").catch(()=>[])).slice(0,3).map(d=>d.name):[],V=me(X,Q),E={};for(const d of u)E[d.student_id]||(E[d.student_id]={}),E[d.student_id][d.score_column_id]=d.score;for(const d of k)d.special_result&&(E[d.id]||(E[d.id]={}),E[d.id].__force=d.special_result);let j="";const I=await oe(t).catch(()=>(j="โหลดค่าปัดเลขร่วมไม่สำเร็จ คะแนนที่แสดงใช้รูปแบบเริ่มต้น กรุณาติดตั้ง SQL หรือตรวจการเชื่อมต่อก่อนใช้เอกสารจริง",null));for(const d of Object.values(E)){const q={...d};for(const G of V)(G.column_type==="derived"||q[G.id]!=null&&G.bonus_formula)&&(d[G.id]=pe(D,G,B=>q[B]))}const L=["AGM","AGMVOC"].includes(p.subject_group),nt=et(n.class_name),K=Se(k),J=$e(k);let Z,tt;L?(tt=m.find(d=>d.category==="ศาสนา"&&d.main_room===n.class_name)??(J?m.find(d=>d.category==="ศาสนา"&&d.main_room===J):null)??null,Z=K?m.find(d=>d.category!=="ศาสนา"&&d.main_room===K)??null:null):(Z=m.find(d=>d.category!=="ศาสนา"&&d.main_room===nt)??(K?m.find(d=>d.category!=="ศาสนา"&&d.main_room===K):null)??null,tt=J?m.find(d=>d.category==="ศาสนา"&&d.main_room===J)??null:null);const ot=(i==null?void 0:i.dept_name)??p.dept??"";let lt=null;L&&w.religionDeptHeadSource==="subgroup"&&p.teacher_id&&(lt=await le(p.teacher_id).catch(d=>(console.warn("[pp5-doc] load religion subgroup leader failed",d),null)));const dt=L?(i==null?void 0:i.head_name)||p.learning_area&&p.learning_area.trim()||"":p.learning_area&&p.learning_area.trim()||(i==null?void 0:i.head_name)||"",ft=L&&w.religionDeptHeadSource==="subgroup"&&(lt==null?void 0:lt.full_name)||dt;let P={},it=0,ut="";if(p.subject_group==="ACDMVOC")try{const q=(await Ht(c,f,"สามัญ")).find(G=>(G.name??"").includes("ความสะอาด"));if(q){it=q.max_score??0,ut=q.name;const G=await ie([q.id]);P=Object.fromEntries(G.map(B=>[B.student_id,B.score]))}}catch{}let vt={};const mt=[];j&&mt.push(j);try{const d=await ce(c,f);if(d.length){const q=await re(d.map(Y=>Y.id),k.map(Y=>Y.id)),G=d.reduce((Y,st)=>Y+(st.max_score??0),0),B={};for(const Y of q)Y.score!=null&&(B[Y.student_id]=(B[Y.student_id]??0)+(parseFloat(Y.score)||0));if(G>0)for(const[Y,st]of Object.entries(B))vt[Y]=fe(st/G*100).label;q.length||mt.push(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนในห้องนี้ (ภาค ${f}/${c})`)}else mt.push(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ (ภาค ${f}/${c})`)}catch(d){throw console.error("[pp5-doc] load reading evaluation failed",d),new Error(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${(d==null?void 0:d.message)??"ไม่ทราบสาเหตุ"}`)}return{cls:n,ms:p,credit:x,prefix:_,cfg:w,students:k,attMap:U,scoreColumns:V,scoreMap:E,roundSettings:I,teacher:r,dept:i,deptNameTH:ot,deptHeadName:ft,courseDoc:h,thColHeaders:z,thColsExtra:T,thRowHeader:F,sessions:O,hrSamai:Z,hrReligion:tt,academicYear:c,semester:f,holidaySet:$,moralScores:P,moralMax:it,moralColName:ut,readingEvalMap:vt,docWarnings:mt}}function Lt(){return`
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
      width: 100%; height: 100%; margin: 0; object-fit: contain; display: block;
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
    .p2-logo-wrap img { width: 100%; height: 100%; margin: 0; object-fit: contain; display: block; }
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
    .att-logo img { width: 100%; height: 100%; margin: 0; object-fit: contain; }
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
    .grade-sheet .grade-reading { white-space: nowrap; min-width: 13mm; }
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
    .voc-p1 .voc-logo { display: block; width: 100%; height: 100%; margin: 0; object-fit: contain; }
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
  `}function Pt(t){var ut,vt,mt;const{cls:o,ms:s,credit:l,prefix:n,cfg:e,students:c,scoreColumns:f,scoreMap:w,teacher:p,dept:x,deptNameTH:_,deptHeadName:b,hrSamai:S,hrReligion:A,academicYear:H,semester:k,sessions:M,readingEvalMap:D,roundSettings:u}=t,g=a(e[`${n}SchoolName`]??e.samaiSchoolName??""),m=a(e[`${n}SchoolAddress`]??e.samaiSchoolAddress??""),r=wt(e,n),i=a(e[`${n}DirectorName`]??"");e[`${n}DirectorSignUrl`];const h=a(e[`${n}DirectorTitle`]||"ผู้อำนวยการ"),v=["AGM","AGMVOC"].includes(s.subject_group),y=a(v?e.agmAcademicHeadName??e[`${n}AcademicHeadName`]??"":e[`${n}AcademicHeadName`]??"");v?e.agmAcademicHeadSignUrl??e[`${n}AcademicHeadSignUrl`]:e[`${n}AcademicHeadSignUrl`];const R=a((v?e.agmAcademicHeadTitle:e[`${n}AcademicHeadTitle`])||"หัวหน้าฝ่ายบริหารวิชาการ"),$=a(v?e.agmRegistrarName??e[`${n}RegistrarName`]??"":e[`${n}RegistrarName`]??"");v?e.agmRegistrarSignUrl??e[`${n}RegistrarSignUrl`]:e[`${n}RegistrarSignUrl`];const C=a((v?e.agmRegistrarTitle:e[`${n}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล"),z=a(b);x==null||x.head_sign_url;const T=o.class_name??"",F=!v&&(["4","5","6"].some(W=>(s.grade_level??"").includes(W))||["ACDMVOC"].includes(s.subject_group)),N=v?T.startsWith("PR")?"PR":T.startsWith("อก")?"อก":T.startsWith("อป")?"อป":"":"",O=M!=null&&M.length?Math.round(M.length/20):l*2,U=(M==null?void 0:M.length)??l*2*20,X=!!window._pp5HideScores;u==null||u.forcedGradeColor;const Q=f.reduce((W,gt)=>W+(gt.max_score??0),0),V={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},E={ร:0,มส:0},j={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0},I={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0};if(!X)for(const W of c){const gt=w[W.id]??{},d=f.reduce((ht,bt)=>ht+(gt[bt.id]??0),0),q=jt(u,d),G=(ut=w[W.id])==null?void 0:ut.__force,B=G!=null&&String(G).trim()!=="",Y=B?Number(G):NaN;if(B&&!Number.isFinite(Y)){const ht=String(G).trim().replace(/\s+/g,"").replace(/\./g,"");ht==="ร"&&E.ร++,ht==="มส"&&E.มส++;const bt=D==null?void 0:D[W.id];bt&&bt in j&&j[bt]++,I.ไม่ผ่าน++;continue}let st=B?Y:0;if(!B&&Q>0){const ht=q/Q*100;st=_t(ht)}const yt=String(st);yt in V&&V[yt]++;const at=D==null?void 0:D[W.id];at&&at in j&&j[at]++;const At=Et(st);At in I&&I[At]++}const L=W=>`<span class="box${W?" checked":""}"></span>`,nt=v?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",K=v?"76mm":"83mm",J=v?"115mm":"117.4mm",Z=v?`
    <div class="check-line">${L(N==="PR")}<span>ตอนต้น (PR)</span></div>
    <div class="check-line">${L(N==="อก")}<span>ตอนกลาง (อก.)</span></div>
    <div class="check-line">${L(N==="อป")}<span>ตอนปลาย (อป.)</span></div>
  `:`
    <div class="check-line">${L(!F)}<span>ตอนต้น (ม.1-ม.3)</span></div>
    <div class="check-line">${L(F)}<span>ตอนปลาย (ม.4-ม.6)</span></div>
  `,tt=_.length>15?`<span class="uline w-md" style="white-space:normal;line-height:4.5mm;min-height:9mm;vertical-align:bottom;">${a(_)}</span>`:`<span class="uline w-md">${a(_)}</span>`,ot=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",lt=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",dt=v?`
    <div class="info-line">
      <span>${ot}</span>${tt}
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`:`
    <div class="info-line">
      <span>${ot}</span>${tt}
      <span>รายวิชา</span><span class="uline w-lg">${a(s.subject_name??"")}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`,ft=[...[4,"3.5",3,"2.5",2,"1.5",1,0].map(W=>V[String(W)]||"-"),E.ร||"-",E.มส||"-"].map(W=>`<td>${W}</td>`).join(""),P=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(W=>`<td>${j[W]||"-"}</td>`).join(""),it=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(W=>`<td>${I[W]||"-"}</td>`).join("");return`
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${r?`<div class="logo-wrap"><img src="${a(r)}" alt="ตราโรงเรียน" /></div>`:""}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${K};">${nt}</div>
      <div class="checks" style="left:${J};">${Z}</div>
    </section>

    <div class="school">${g}</div>
    <div class="school-sub">${m}</div>

    <section class="info">
      <div class="info-line">
        <span>${nt}</span><span class="uline w-sm">${a(et(o.class_name))}</span>
        <span>ภาคเรียนที่</span><span class="uline w-md">${k}</span>
        <span>ปีการศึกษา</span><span class="uline w-yr">${H}</span>
      </div>
      ${dt}
      <div class="info-line">
        <span>จำนวน</span><span class="uline w-xs">${l}</span>
        <span>หน่วยกิต</span>
        <span>เวลาเรียน</span><span class="uline w-xs">${O}</span>
        <span>ชั่วโมง/สัปดาห์</span>
        <span>รวมเวลาเรียน</span><span class="uline w-xs">${U}</span>
        <span>ชั่วโมง/ภาค</span>
      </div>
      <div class="info-row-one"><span>ครูผู้สอน</span><span class="uline-xl">${a((p==null?void 0:p.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาสามัญ</span><span class="uline-xl">${a(((vt=S==null?void 0:S.teachers)==null?void 0:vt.full_name)??"")}</span></div>
      <div class="info-row-one"><span>ครูที่ปรึกษาศาสนา</span><span class="uline-xl">${a(((mt=A==null?void 0:A.teachers)==null?void 0:mt.full_name)??"")}</span></div>
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
          <td>${c.length}</td>${ft}<td></td><td></td><td></td>
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
          ${P}<td></td>
        </tr>
        <tr>
          <td>การประเมินคุณลักษณะ<br>อันพึงประสงค์</td>
          ${it}<td></td>
        </tr>
      </table>
    </section>

    <section class="approval">
      <div class="apl-title">การอนุมัติผลการพัฒนาคุณภาพผู้เรียน</div>

      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${a((p==null?void 0:p.full_name)??"")}</span>
        <span>ครูผู้สอน</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${z}</span>
        <span>${lt}</span>
      </div>
      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${$}</span>
        <span>${C}</span>
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
        <span>${L(!0)}&nbsp; อนุมัติ</span>
        <span>${L(!1)}&nbsp; ไม่อนุมัติ</span>
      </div>

      <div class="ctr-block director">
        <div class="ctr-sig">
          <span>ลงชื่อ</span>
          <span class="sig-line">${i}</span>
        </div>
        <div class="p1-role">${h}</div>
      </div>
    </section>
  </div>`}function Wt(t){const{cls:o,ms:s,credit:l,cfg:n,courseDoc:e,thColHeaders:c,thColsExtra:f,thRowHeader:w,teacher:p,deptNameTH:x,deptHeadName:_,academicYear:b,semester:S,prefix:A,sessions:H}=t,k=(H==null?void 0:H.length)??l*2*20,M=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",D=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",u=wt(n,A),g=Array.isArray(e==null?void 0:e.table_rows)?e.table_rows:[],m=(e==null?void 0:e.text_direction)==="rtl"?"rtl":(e==null?void 0:e.text_direction)==="ltr"?"ltr":"auto",i=(Array.isArray(e==null?void 0:e.table_columns)?e.table_columns.length:2)===1,h=i?[f[0]??"ผลการเรียนรู้"]:c??["มาตรฐานการเรียนรู้","ตัวชี้วัด"],v=g,y=(O,U="")=>[Array.isArray(O)&&O.length?O.join(", "):"",(U??"").trim()].filter(Boolean).join(", "),R=y(e==null?void 0:e.between_objective_items,e==null?void 0:e.between_objective_extra),$=y(e==null?void 0:e.midterm_objective_items,e==null?void 0:e.midterm_objective_extra),C=y(e==null?void 0:e.final_objective_items,e==null?void 0:e.final_objective_extra),z=["AGM","AGMVOC"].includes(s.subject_group),T=["1 รักชาติ ศาสน์ กษัตริย์","2 ซื่อสัตย์สุจริต","3 มีวินัย","4 ใฝ่เรียนรู้","5 อยู่อย่างพอเพียง"],F=["6 มุ่งมั่นในการทำงาน","7 รักความเป็นไทย","8 มีจิตสาธารณะ","9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ"],N=z?"ระดับชั้นอิสลามศึกษา":"ระดับชั้น";return`
  <div class="p2-wrap">
    <!-- Logo + Title -->
    ${u?`<div class="p2-logo-wrap"><img src="${a(u)}" alt="โลโก้"/></div>`:'<div style="height:5mm;"></div>'}
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
          <span class="p2-label">${N}</span>
          <span class="p2-uline p2-uline-fill">${a(et(o.class_name??""))}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ครูผู้สอน</span>
          <span class="p2-uline p2-uline-fill">${a((p==null?void 0:p.full_name)??"")}</span>
        </div>
      </div>
      <!-- คอลัมน์ขวา -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รหัสวิชา</span>
          <span class="p2-uline">${a(s.subject_code??"")}</span>
          <span class="p2-label">${M}</span>
          <span class="p2-uline p2-uline-fill">${a(x)}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ภาคเรียนที่</span>
          <span class="p2-uline">${a(String(S))}</span>
          <span class="p2-label">ปีการศึกษา</span>
          <span class="p2-uline">${a(String(b))}</span>
          <span class="p2-label">เวลา</span>
          <span class="p2-uline p2-uline-fill">${a(String(k))}</span>
          <span class="p2-label">ชั่วโมง</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">จำนวน</span>
          <span class="p2-uline">${a(String(l))}</span>
          <span class="p2-label">หน่วยกิต</span>
        </div>
      </div>
    </div>

    <!-- Standards Table -->
    ${i?`
    <table class="std-table" style="table-layout:fixed;">
      <thead>
        <tr>
          <th style="width:100%;" dir="ltr">${a(h[0])}</th>
        </tr>
      </thead>
      <tbody>
        ${v.map((O,U)=>{const X=a(Array.isArray(O)?O[0]??"":""),Q=U+1;return`<tr><td class="std-row" dir="${m}" style="padding:1.5mm 2.5mm;">
            <span style="display:inline-flex;gap:5px;align-items:flex-start;width:100%;">
              <b style="flex-shrink:0;min-width:16px;text-align:center;">${Q}.</b>
              <span style="flex:1;">${X}</span>
            </span>
          </td></tr>`}).join("")}
        <tr class="std-fill-row"><td></td></tr>
      </tbody>
    </table>`:`
    <table class="std-table" dir="${m}">
      <thead>
        <tr>
          <th style="width:50mm;">${a(h[0]??"มาตรฐานการเรียนรู้")}</th>
          <th>${a(h[1]??"ตัวชี้วัด")}</th>
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
        <p>จุดประสงค์วัดผลกลางภาค ข้อที่ <u>${$}</u></p>
        <p>จุดประสงค์วัดผลปลายภาค ข้อที่ <u>${C}</u></p>
      </div>
      <div class="p2-char">
        <div class="p2-char-title">คุณลักษณะอันพึงประสงค์</div>
        <div class="p2-char-grid">
          <div>${T.map(O=>`<div>${a(O)}</div>`).join("")}</div>
          <div>${F.map(O=>`<div>${a(O)}</div>`).join("")}</div>
        </div>
      </div>
    </div>

    <!-- Signature -->
    <div class="p2-sig">
      ลงชื่อ <span style="display:inline-block;border-bottom:.3mm dashed #555;min-width:60mm;text-align:center;padding:0 2mm;">
        ${a(_)}
      </span> ${D}
    </div>
  </div>`}const zt=50;function Gt(t){const{cls:o,ms:s,credit:l,cfg:n,students:e,attMap:c,sessions:f,academicYear:w,semester:p,teacher:x}=t,_=[];for(let b=0;b<e.length;b+=zt){const S=e.slice(b,b+zt);_.push(Ce(t,S,b+1))}return _.join("")}function Ce(t,o,s){const{cls:l,ms:n,teacher:e,academicYear:c,semester:f,cfg:w,prefix:p}=t,x=wt(w,p),_=40,b=o.length+1,S=Math.max(3.5,Math.min(5.5,Math.floor(241/b*10)/10)).toFixed(1),A="3.2mm",H=o.map((D,u)=>{const g=t.attMap[D.id]??{},m=[];for(const[h,v]of Object.entries(g))v!=="present"&&m.push({n:parseInt(h),status:v});m.sort((h,v)=>h.n-v.n);const r=m.length,i=Array.from({length:_},(h,v)=>{const y=m[v];return y?`<td class="${y.status==="absent"?"att-absent":y.status==="leave"?"att-leave":y.status==="sick"?"att-sick":"att-absent"}">${y.n}</td>`:"<td></td>"});return`<tr>
      <td class="text-center">${s+u}</td>
      <td class="att-code text-center">${a(D.student_code??"")}</td>
      <td class="att-name">${a(D.full_name??"")}</td>
      ${i.join("")}
      <td class="text-center font-bold">${r||""}</td>
    </tr>`}),k=Array.from({length:_},(D,u)=>`<th>${u+1}</th>`).join(""),M=3+_+1;return`
  <div class="page-tight">
    <div class="att-top">
      ${x?`<div class="att-logo"><img src="${a(x)}" alt="โลโก้" /></div>`:'<div style="width:18mm;flex-shrink:0;"></div>'}
      <div class="att-info">
        <div class="att-title">บันทึกการไม่มาเรียนของนักเรียนชั้น ${a(et(l.class_name))}</div>
        <div class="att-hdr-row">
          <span class="att-label">ปีการศึกษา</span>
          <span class="att-uline">${a(String(c))}</span>
          <span class="att-label" style="margin-left:4mm;">ภาคเรียนที่</span>
          <span class="att-uline">${a(String(f))}</span>
        </div>
        <div class="att-hdr-row2">
          <div class="att-hdr-col">
            <span class="att-label">รายวิชา</span>
            <span class="att-uline att-uline-fill">${a(n.subject_name??"")}</span>
          </div>
          <div class="att-hdr-col">
            <span class="att-label">รหัสวิชา</span>
            <span class="att-uline att-uline-fill">${a(n.subject_code??"")}</span>
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
        ${Array.from({length:_},()=>`<col style="width:${A};"/>`).join("")}
        <col style="width:10mm;"/>
      </colgroup>
      <thead>
        <tr>
          <th colspan="${M}" style="text-align:left;font-weight:normal;padding:0.8mm 1mm;border-bottom:none;">
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
          <th colspan="${_}" style="font-size:7pt;">บันทึกการไม่มาเรียน</th>
          <th rowspan="2" style="font-size:7pt;">รวมเวลา<br/>ไม่มาเรียน</th>
        </tr>
        <tr>${k}</tr>
      </thead>
      <tbody>
        ${H.join("")}
        <tr><td></td><td></td><td></td>${Array.from({length:_},()=>"<td></td>").join("")}<td></td></tr>
      </tbody>
    </table>
  </div>`}const Ot=50;function Vt(t){const{students:o}=t,s=[];for(let l=0;l<o.length;l+=Ot)s.push(je(t,o.slice(l,l+Ot),l+1));return s.join("")}function je(t,o,s){var V,E;const{cls:l,ms:n,teacher:e,deptHeadName:c,academicYear:f,semester:w,scoreColumns:p,scoreMap:x,readingEvalMap:_,roundSettings:b}=t,S=(b==null?void 0:b.forcedGradeColor)==="black"?"black":"red",A=n.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้าหมวดวิชา",H=j=>j.assignment_type==="ปลายภาค"||j.assignment_type==="final",k=j=>j.assignment_type==="คะแนนพิเศษ",M=p.filter(j=>!H(j)&&!k(j));p.filter(j=>k(j));const D=p.filter(j=>H(j)),u=5,g=5,m={id:null,assignment_name:"",max_score:""},r=[...M,...Array(Math.max(0,u-M.length)).fill(m)],i=[...D,...Array(Math.max(0,g-D.length)).fill(m)],h=M.reduce((j,I)=>j+(I.max_score??0),0),v=D.reduce((j,I)=>j+(I.max_score??0),0),y=r.length+1,R=i.length+2,$=y+R,z=3+$+3,T=o.length+1,F=Math.max(3.8,Math.min(5.8,Math.floor(160/T*10)/10)).toFixed(1),N=!!window._pp5HideScores,O=o.map((j,I)=>{if(N)return`<tr>
        <td>${s+I}</td>
        <td>${a(j.student_code??"")}</td>
        <td class="gs-name" style="border-right:2.0px solid #000;">${a(j.full_name??"")}</td>
        ${r.map(()=>"<td></td>").join("")}
        <td class="grade-reading"></td>
        ${i.map(()=>"<td></td>").join("")}
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
      </tr>`;const L=x[j.id]??{},nt=r.map(P=>P.id?rt(t.roundSettings,kt(P),L[P.id],P.column_type==="derived"?2:1):""),K=i.map(P=>P.id?rt(t.roundSettings,kt(P),L[P.id],P.column_type==="derived"?2:1):""),J=M.reduce((P,it)=>P+Number(L[it.id]??0),0),Z=D.reduce((P,it)=>P+(L[it.id]??0),0),tt=J+Z,ot=!!L.__force,lt=jt(t.roundSettings,tt),dt=L.__force||_t(h+v>0?lt/(h+v)*100:0),ft=Et(dt);return`<tr>
      <td>${s+I}</td>
      <td>${a(j.student_code??"")}</td>
      <td class="gs-name" style="border-right:2.0px solid #000;">${a(j.full_name??"")}</td>
      ${nt.map(P=>`<td>${P}</td>`).join("")}
      <td style="font-weight:700;">${rt(t.roundSettings,"mid_subtotal",J)}</td>
      ${K.map(P=>`<td>${P}</td>`).join("")}
      <td style="font-weight:700;">${rt(t.roundSettings,"fin_subtotal",Z)}</td>
      <td style="font-weight:700;border-right:2.0px solid #000;">${rt(t.roundSettings,"total",tt)}</td>
      <td class="grade-reading">${a((_==null?void 0:_[j.id])??"")}</td>
      <td class="grade-attr" style="border-right:2.0px solid #000;">${a(ft)}</td>
      <td style="font-weight:700;${ot?`color:${S==="red"?"#c00":"#000"};`:""}">${dt}</td>
    </tr>`}),U=`<tr>${Array(z).fill("<td></td>").join("")}</tr>`,X=M.length>6?"5mm":"5.8mm",Q=D.length>5?"5mm":"5.5mm";return`
  <div class="score-wrap">
    <div class="score-top-info">
      <div class="sc-field"><span class="sc-lbl">รายวิชา</span><span class="sc-val">${a(n.subject_name??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">รหัสวิชา</span><span class="sc-val">${a(n.subject_code??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">ชั้น</span><span class="sc-val">${a(et(l.class_name))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ภาคเรียนที่</span><span class="sc-val">${a(String(w))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ปีการศึกษา</span><span class="sc-val">${a(String(f))}</span></div>
    </div>
    <table class="grade-sheet" style="--row-h:${F}mm">
      <colgroup>
        <col style="width:5mm;"/>
        <col style="width:12mm;"/>
        <col style="width:45mm;"/>
        ${r.map(()=>`<col style="width:${X};"/>`).join("")}
        <col style="width:7mm;"/>
        ${i.map(()=>`<col style="width:${Q};"/>`).join("")}
        <col style="width:7mm;"/>
        <col style="width:8mm;"/>
        <col style="width:13mm;"/>
        <col style="width:11mm;"/>
        <col style="width:6mm;"/>
      </colgroup>
      <thead>
        <!-- Row 1: ผู้เรียน คลุม 3 คอลัมน์ + section header + result cols rs5 -->
        <tr>
          <th colspan="3" style="border-right:2.5px solid #000;">ผู้เรียน</th>
          <th colspan="${$}" style="border-right:2.0px solid #000;">วัดผลระหว่างภาค / ปลายภาค</th>
          <th rowspan="5" class="v"><span style="font-size:7px;">ประเมินการอ่านคิดวิเคราะห์และเขียน</span></th>
          <th rowspan="5" class="v grade-attr" style="border-right:2.0px solid #000;"><span style="font-size:7px;">ประเมินคุณลักษณะอันพึงประสงค์</span></th>
          <th rowspan="5" class="v"><span>ระดับการเรียน</span></th>
        </tr>
        <!-- Row 2: เลขที่(v,rs4) | เลขประจำตัว(v,rs4) | ชื่อ-สกุล(rs4) | อัตราส่วน -->
        <tr>
          <th rowspan="4" class="v"><span>เลขที่</span></th>
          <th rowspan="4" class="v"><span>เลขประจำตัว</span></th>
          <th rowspan="4" style="border-right:2.0px solid #000;">ชื่อ - สกุล</th>
          <th colspan="${$}" style="font-size:7px;padding:1px;border-right:2.0px solid #000;">อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${h} / ${v}</th>
        </tr>
        <!-- Row 3: between/final section headers (3 student cols covered by rs4) -->
        <tr>
          <th colspan="${r.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนระหว่างเรียน/กลางภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนระหว่างภาค</span></th>
          <th colspan="${i.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนปลายภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนปลายภาค</span></th>
          <th rowspan="2" class="v" style="border-right:2.0px solid #000;"><span>รวมคะแนน 100</span></th>
        </tr>
        <!-- Row 4: column name verticals (3 student cols covered by rs4) -->
        <tr>
          ${r.map(j=>`<th class="v" style="overflow:visible;"><span>${a(j.assignment_name??"")}</span></th>`).join("")}
          ${i.map(j=>`<th class="v" style="overflow:visible;"><span>${a(j.assignment_name??"")}</span></th>`).join("")}
        </tr>
        <!-- Row 5: score-full (3 student cols still covered by rs4) -->
        <tr>
          ${r.map(j=>`<th class="score-full">${j.max_score??""}</th>`).join("")}
          <th class="score-full">${h||""}</th>
          ${i.map(j=>`<th class="score-full">${j.max_score??""}</th>`).join("")}
          <th class="score-full">${v||""}</th>
          <th class="score-full" style="border-right:2.0px solid #000;">${h||v?h+v:""}</th>
        </tr>
      </thead>
      <tbody>
        ${O.join("")}
        ${U}
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
        <div class="score-sig-line">${a(c)}</div>
        <div class="score-sig-role">${A}</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a(["AGM","AGMVOC"].includes((V=t.ms)==null?void 0:V.subject_group)?t.cfg.agmRegistrarName??t.cfg[`${t.prefix}RegistrarName`]??"":t.cfg[`${t.prefix}RegistrarName`]??"")}</div>
        <div class="score-sig-role">${a((["AGM","AGMVOC"].includes((E=t.ms)==null?void 0:E.subject_group)?t.cfg.agmRegistrarTitle??t.cfg[`${t.prefix}RegistrarTitle`]:t.cfg[`${t.prefix}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล")}</div>
      </div>
    </div>
  </div>`}function Bt(t){const{cls:o,ms:s,credit:l,teacher:n,deptNameTH:e,academicYear:c,semester:f,sessions:w,cfg:p,prefix:x,holidaySet:_}=t,b=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",S=["AGM","AGMVOC"].includes(s.subject_group)?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",A=40,H=3,k=w!=null&&w.length?Math.round(w.length/20):Math.max(1,Math.round(l*2)),M=wt(p,x),D=Array.from({length:H},(h,v)=>Array.from({length:A},(y,R)=>{const $=w[v*A+R];return $?{sess:$,week:Math.ceil($.n/k)}:null})),u=D.map(h=>h.map((v,y)=>{var $,C;if(!v)return null;if(y>0&&(($=h[y-1])==null?void 0:$.week)===v.week)return 0;let R=1;for(let z=y+1;z<A&&((C=h[z])==null?void 0:C.week)===v.week;z++)R++;return R})),g="border-right:1.5px solid #000;",m=Array.from({length:A},(h,v)=>`<tr>${Array.from({length:H},(R,$)=>{const C=D[$][v],z=u[$][v],T=$<H-1?g:"";if(!C)return`<td></td><td></td><td style="${T}"></td>`;const F=z===0?"":`<td class="wk" rowspan="${z}">${C.week}</td>`,N=_==null?void 0:_.has(C.sess.ds),O=T+(N?"color:#c00;font-weight:700;":"");return`${F}<td class="ep">${C.sess.n}</td><td class="dt" style="${O}">${Tt(C.sess.ds)}</td>`}).join("")}</tr>`),r=(h,v="",y=!1)=>`<span style="${y?"flex:1;border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;":`display:inline-block;min-width:${h};border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;`}">${a(String(v))}</span>`,i=h=>`<div style="display:flex;align-items:baseline;gap:2mm;font-size:9pt;margin-bottom:1.5mm;">${h}</div>`;return`
  <div class="page" style="padding:12mm 10mm 8mm;">
      ${M?`<div style="text-align:center;margin-bottom:2mm;"><div style="width:16mm;height:16mm;border-radius:50%;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;"><img src="${a(M)}" style="width:100%;height:100%;margin:0;object-fit:contain;display:block;" alt="โลโก้"/></div></div>`:""}
    <div style="text-align:center;font-weight:700;font-size:12pt;margin-bottom:3mm;">รายละเอียดสัปดาห์/คาบ/วันที่สอน</div>
    ${i(`<span>รายวิชา</span>${r("40mm",s.subject_name??"")}
           <span>&emsp;รหัสวิชา</span>${r("22mm",s.subject_code??"")}
           <span>&emsp;${b}</span>${r("",e,!0)}`)}
    ${i(`<span>${S}</span>${r("16mm",et(o.class_name))}
           <span>&emsp;ภาคเรียนที่</span>${r("10mm",f)}
           <span>&emsp;ปีการศึกษา</span>${r("18mm",c)}
           <span>&emsp;เวลา</span>${r("12mm")}
           <span>ชั่วโมง&emsp;จำนวน</span>${r("",l,!0)}
           <span>หน่วยกิต</span>`)}
    ${i(`<span>ครูผู้สอน</span>${r("80mm",(n==null?void 0:n.full_name)??"")}`)}
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
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${g}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt" style="${g}">วันที่/เดือน/ปี</th>
          <th class="wk">สัปดาห์</th><th class="ep">คาบที่</th><th class="dt">วันที่/เดือน/ปี</th>
        </tr>
      </thead>
      <tbody>${m.join("")}</tbody>
    </table>
  </div>`}const Ft=["ข.ร.","ข.ส.","ม.ส.","ข.ป."];function It(t){return String(t??"").trim().replace(/\s+/g,"").replace(/\./g,"")==="มส"?"ม.ส.":String(t??"").trim()}function Ae(t){var X,Q;const{cls:o,ms:s,credit:l,prefix:n,cfg:e,students:c,scoreColumns:f,scoreMap:w,teacher:p,deptNameTH:x,deptHeadName:_,hrSamai:b,hrReligion:S,academicYear:A,semester:H,sessions:k,moralScores:M,moralMax:D}=t,u=a(e[`${n}SchoolName`]??e.samaiSchoolName??""),g=wt(e,n,!0),m=a(e[`${n}DirectorName`]??""),r=a(e[`${n}DirectorTitle`]||"ผู้อำนวยการ"),i=a(e[`${n}RegistrarName`]??""),h=a(e[`${n}RegistrarTitle`]||"ผู้ช่วยผู้อำนวยการฝ่ายทะเบียนวัดผลและประเมินผล"),v=a(_),y=k!=null&&k.length?Math.round(k.length/20):l*2,R=(k==null?void 0:k.length)??l*2*20,$=!!window._pp5HideScores,C=f.reduce((V,E)=>V+(E.max_score??0),0)+(D||0),z={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},T={"ข.ร.":0,"ข.ส.":0,"ม.ส.":0,"ข.ป.":0};let F=0,N=0,O=0;if(!$)for(const V of c){const E=It(V.special_result);if(E&&Ft.includes(E)){T[E]++;continue}const j=w[V.id]??{},I=f.some(L=>j[L.id]!=null);if(I&&O++,C>0){const nt=(f.reduce((tt,ot)=>tt+(j[ot.id]??0),0)+(Number(M==null?void 0:M[V.id])||0))/C*100,K=V.special_result,J=K&&/^[0-9]+(?:\.5)?$/.test(String(K))?Number(K):_t(nt),Z=String(J);Z in z&&z[Z]++,I&&(J>0?F++:N++)}}const U=[[4,"80 - 100","จำนวนนักเรียนเข้าเรียน",c.length],["3.5","75 - 79","จำนวนนักเรียนเข้าสอบ",O],[3,"70 - 74","จำนวนนักเรียนไม่มีสิทธิ์สอบ (ข.ร.)",T["ข.ร."]],["2.5","65 - 69","จำนวนนักเรียนขาดสอบ (ข.ส.)",T["ข.ส."]],[2,"60 - 64","จำนวนนักเรียนไม่สมบูรณ์ (ม.ส.)",T["ม.ส."]],["1.5","55 - 59","จำนวนนักเรียนขาดการปฏิบัติงาน (ข.ป.)",T["ข.ป."]],[1,"50 - 54","จำนวนนักเรียนผ่าน (ผ)",F],[0,"0 - 49","จำนวนนักเรียนไม่ผ่าน (ม.ผ.)",N]].map(([V,E,j,I])=>`
    <tr>
      <td>${V}</td><td>${E}</td><td>${z[String(V)]||"-"}</td>
      <td class="voc-remark">${j}</td><td>${I||"-"}</td>
    </tr>`).join("");return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p1">
      ${g?`<div class="voc-logo-frame"><img class="voc-logo" src="${a(g)}" alt="ตราสถานศึกษา" /></div>`:""}
      <div class="voc-title1">${u}</div>
      <div class="voc-title2">แบบบันทึกเวลาเรียนและประเมินผลการเรียน</div>
      <div class="voc-title3">หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.)</div>

      <div class="voc-info">
        <div class="voc-info-row">
          <span class="voc-item">ชั้น <span class="voc-line-fill voc-short">${a(et(o.class_name))}</span></span>
          <span class="voc-item">ภาคเรียนที่ <span class="voc-line-fill voc-short">${H}</span></span>
          <span class="voc-item">ปีการศึกษา <span class="voc-line-fill voc-short">${A}</span></span>
          <span class="voc-item" style="margin-left:auto">แผนกวิชา <span class="voc-line-fill voc-medium">${a(x)}</span></span>
        </div>
        <div class="voc-info-row">
          <span class="voc-item" style="flex:1">รายวิชา <span class="voc-line-fill voc-long" style="flex:1">${a(s.subject_name??"")}</span></span>
          <span class="voc-item">รหัสวิชา <span class="voc-line-fill voc-medium">${a(s.subject_code??"")}</span></span>
        </div>
        <div class="voc-info-row voc-center" style="justify-content:center; gap:10mm">
          <span class="voc-item"><span class="voc-line-fill voc-short">${l}</span> หน่วยกิต</span>
          <span class="voc-item">เวลาเรียน <span class="voc-line-fill voc-short">${y}</span> ชั่วโมง/สัปดาห์</span>
          <span class="voc-item">รวมเวลาเรียน <span class="voc-line-fill voc-short">${R}</span> ชั่วโมง/ภาค</span>
        </div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูผู้สอน <span class="voc-line-fill voc-xlong" style="flex:1">${a((p==null?void 0:p.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาสามัญ <span class="voc-line-fill voc-xlong" style="flex:1">${a(((X=b==null?void 0:b.teachers)==null?void 0:X.full_name)??"")}</span></span></div>
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
        <tbody>${U}</tbody>
      </table>

      <div class="voc-consider">พิจารณาผลการให้ระดับคะแนนเห็นว่าเหมาะสมและถูกต้องแล้ว</div>

      <div class="voc-sign-grid">
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((p==null?void 0:p.full_name)??"")} )</div>
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนกวิชา<br><br>( ${v} )</div>
        <div class="voc-sign-block voc-sign-wide">ลงชื่อ <span class="voc-sig-line"></span> ${h}<br><br>( ${i} )</div>
      </div>

      <div class="voc-approve">อนุมัติผลการเรียน <span class="voc-check-box"></span>อนุมัติ <span class="voc-check-box"></span>ไม่อนุมัติ</div>
      <div class="voc-director">ลงชื่อ <span class="voc-sig-line"></span><br><br>( ${m} )<br>${r}${u}</div>
    </div>
  </section>`}const pt=2;function Me(t,o){const s=Math.ceil(((t==null?void 0:t.length)||0)/pt),l=Array.from({length:pt},(e,c)=>Array.from({length:s},(f,w)=>{const p=t[c*s+w];return p?{sess:p,week:Math.ceil(p.n/o)}:null})),n=l.map(e=>e.map((c,f)=>{var p,x;if(!c)return null;if(f>0&&((p=e[f-1])==null?void 0:p.week)===c.week)return 0;let w=1;for(let _=f+1;_<s&&((x=e[_])==null?void 0:x.week)===c.week;_++)w++;return w}));return{N:s,colData:l,colRS:n}}const Ut=233;function He(t){const o=Math.max(6,...(t??[]).map(s=>(s.full_name??"").length));return Math.min(50,Math.max(30,o*2.3))}function De(t,o,s){const n=Math.max(o.length+3,15),e=Math.max(3,Math.min(7,Ut/n)),c=e<3.6?7.5:e<4.4?8.5:e<5.4?9.5:e<6.2?10.5:11.5,f=Array.from({length:n},(p,x)=>{const _=o[x];if(!_)return`<tr>
        <td class="voc-student-no"></td><td class="voc-student-id"></td><td class="voc-student-name"></td>
        ${Array.from({length:20},()=>"<td></td>").join("")}
        <td class="voc-score"></td>
      </tr>`;const b=t.attMap[_.id]??{},S=[];for(const[H,k]of Object.entries(b))k!=="present"&&S.push({n:parseInt(H),status:k});S.sort((H,k)=>H.n-k.n);const A=Array.from({length:20},(H,k)=>{const M=S[k];return M?`<td style="color:${M.status==="absent"?"#d00":M.status==="leave"?"#005bbb":"#e67e00"};font-weight:700;">${M.n}</td>`:"<td></td>"});return`<tr>
      <td class="voc-student-no voc-center">${x+1}</td>
      <td class="voc-student-id voc-center">${a(_.student_code??"")}</td>
      <td class="voc-student-name">${a(_.full_name??"")}</td>
      ${A.join("")}
      <td class="voc-score voc-center">-</td>
    </tr>`}),w=Array.from({length:20},(p,x)=>`<th class="voc-att">${x+1}</th>`).join("");return`
  <table class="voc-attendance voc-student-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${c}px">
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
        ${w}
        <th class="voc-score">10</th>
      </tr>
    </thead>
    <tbody>${f.join("")}</tbody>
  </table>`}function Re(t,o){const{N:s,colData:l,colRS:n}=t,e=Math.max(1.6,Math.min(4.55,Ut/Math.max(1,s))),c=e<2.4?6:e<3.2?7:e<4?8:9.5,f=Array.from({length:s},(w,p)=>`<tr>${Array.from({length:pt},(_,b)=>{const S=l[b][p],A=n[b][p];if(!S)return'<td class="voc-sched-week"></td><td class="voc-sched-period"></td><td class="voc-sched-date"></td>';const H=A===0?"":`<td class="voc-sched-week voc-center" rowspan="${A}">${S.week}</td>`,k=o==null?void 0:o.has(S.sess.ds);return`${H}<td class="voc-sched-period voc-center">${S.sess.n}</td><td class="voc-sched-date voc-center" style="${k?"color:#c00;font-weight:700;":""}">${Tt(S.sess.ds)}</td>`}).join("")}</tr>`);return`
  <table class="voc-attendance voc-schedule-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${c}px">
    <colgroup>
      ${Array.from({length:pt},()=>'<col style="width:6mm"><col style="width:6.5mm"><col style="width:15mm">').join("")}
    </colgroup>
    <thead>
      <tr class="voc-h-main">
        <th colspan="${pt*3}">สัปดาห์ที่/คาบ/วันที่สอน</th>
      </tr>
      <tr class="voc-h-sub">
        ${Array.from({length:pt},()=>'<th colspan="3"></th>').join("")}
      </tr>
      <tr class="voc-h-num">
        ${Array.from({length:pt},()=>`
          <th class="voc-sched-week"><div class="voc-vtext">สัปดาห์ที่</div></th>
          <th class="voc-sched-period"><div class="voc-vtext">คาบ</div></th>
          <th class="voc-sched-date"><div class="voc-vtext">ว/ด/ป</div></th>`).join("")}
      </tr>
    </thead>
    <tbody>${f.join("")}</tbody>
  </table>`}function ze(t){const{students:o,sessions:s}=t,l=s!=null&&s.length?Math.round(s.length/20):1,n=Me(s,l),e=He(o);return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p2">
      <div class="voc-p2-title">แบบบันทึกการไม่มาเรียน</div>
      <div class="voc-att-flex">
        ${De(t,o,e)}
        ${Re(n,t.holidaySet)}
      </div>
    </div>
  </section>`}const Ct=31;function Oe(t,o=8){const s=a(t??"");if(s.length<=o)return s;const l=Math.ceil(s.length/2);let n=s.lastIndexOf(" ",l);return n<=0&&(n=s.indexOf(" ",l)),n<=0?s:`${s.slice(0,n)}<br>${s.slice(n+1)}`}function Te(t,o,s){const{cls:l,teacher:n,deptHeadName:e,scoreColumns:c,scoreMap:f,moralScores:w,moralMax:p,moralColName:x,roundSettings:_}=t,b=(_==null?void 0:_.forcedGradeColor)==="black"?"black":"red",S=r=>r.assignment_type==="คะแนนพิเศษ",A=c.filter(r=>!S(r));c.filter(r=>S(r));const H=A.reduce((r,i)=>r+(i.max_score??0),0),k=H+(p||0),M=!!window._pp5HideScores,D=o.map((r,i)=>{if(M)return`<tr>
        <td class="voc-center">${s+i}</td><td class="voc-c-id"></td><td class="voc-c-name"></td>
        ${Array(A.length).fill("<td></td>").join("")}<td></td>
        <td></td><td></td><td></td><td></td>
      </tr>`;const h=f[r.id]??{},v=A.map(N=>rt(t.roundSettings,kt(N),h[N.id],N.column_type==="derived"?2:1)),y=A.reduce((N,O)=>N+(h[O.id]??0),0),R=(w==null?void 0:w[r.id])??"",$=y+(Number(R)||0),C=It(r.special_result),z=!!(C&&Ft.includes(C)),T=jt(t.roundSettings,$),F=z?C:_t(k?T/k*100:0);return`<tr>
      <td class="voc-center">${s+i}</td>
      <td class="voc-c-id voc-center">${a(r.student_code??"")}</td>
      <td class="voc-c-name">${a(r.full_name??"")}</td>
      ${v.map(N=>`<td class="voc-center">${N}</td>`).join("")}
      <td class="voc-center voc-bold">${rt(t.roundSettings,"mid_subtotal",y)}</td>
      <td class="voc-center">${R}</td>
      <td class="voc-center voc-bold">${rt(t.roundSettings,"total",$)}</td>
      <td class="voc-center voc-bold" style="${z?`color:${b==="red"?"#c00":"#000"};`:""}">${F}</td>
      <td></td>
    </tr>`}),u=A.length+1+4,g=`<tr><td class="voc-center"></td><td></td><td></td>${Array(u).fill("<td></td>").join("")}</tr>`,m=D.concat(Array(Math.max(0,Ct-D.length)).fill(g));return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p3">
      <div class="voc-p3-title">แบบประเมินผลการเรียน</div>
      <table class="voc-eval">
        <colgroup>
          <col style="width:5mm"><col style="width:19.5mm"><col style="width:43.5mm">
          ${A.map(()=>'<col style="width:7mm">').join("")}
          <col style="width:9.5mm"><col style="width:9.5mm"><col style="width:9.5mm">
          <col style="width:12.5mm"><col style="width:12.5mm">
        </colgroup>
        <thead>
          <tr class="voc-h-top">
            <th rowspan="3" class="voc-c-no"><div class="voc-vtext">เลขที่</div></th>
            <th rowspan="3" class="voc-c-id">เลข<br>ประจำตัว</th>
            <th rowspan="3" class="voc-c-name">ชื่อ - สกุล</th>
            <th colspan="${A.length+1}">คะแนนเก็บ (เต็ม ${H})</th>
            <th rowspan="2" class="voc-c-moral"><div class="voc-vtext">คะแนนคุณธรรม${x?`<br>(${a(x)})`:""}</div></th>
            <th rowspan="2" class="voc-c-total"><div class="voc-vtext">รวม</div></th>
            <th rowspan="3" class="voc-c-grade"><div class="voc-vtext">ระดับผล<br>การเรียน</div></th>
            <th rowspan="3" class="voc-c-note"><div class="voc-vtext">หมายเหตุ/<br>การสอบแก้ตัว</div></th>
          </tr>
          <tr class="voc-h-vertical">
            ${A.map(r=>`<th class="voc-c-obj"><div class="voc-vtext">${Oe(r.assignment_name??"")}</div></th>`).join("")}
            <th class="voc-c-sum80"><div class="voc-vtext">รวม<br>คะแนนเก็บ</div></th>
          </tr>
          <tr class="voc-h-score">
            ${A.map(r=>`<th>${r.max_score??""}</th>`).join("")}<th>${H||""}</th>
            <th>${p||""}</th><th>${k||""}</th>
          </tr>
        </thead>
        <tbody>${m.join("")}</tbody>
      </table>
      <div class="voc-footer-sigs">
        <div>ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((n==null?void 0:n.full_name)??"")} )</div>
        <div>ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนก<br><br>( ${a(e)} )</div>
      </div>
    </div>
  </section>`}function Ne(t){const{students:o}=t,s=[];for(let l=0;l<o.length;l+=Ct)s.push(Te(t,o.slice(l,l+Ct),l+1));return s.join("")}const Ee=46,Le=5.3,Pe=5.45;function We(t){const o=Math.max(1,Math.ceil((t.content??"").length/Ee));return Math.max(Pe,o*Le)}function Ge(t){const{ms:o,teacher:s,courseDoc:l}=t,n=Array.isArray(l==null?void 0:l.voc_objectives)?l.voc_objectives:[],e=Array.isArray(l==null?void 0:l.voc_schedule)?l.voc_schedule:[],c=n.concat(Array.from({length:Math.max(0,10-n.length)},()=>({objective:"",competency:""}))),f=e.concat(Array.from({length:Math.max(0,20-e.length)},()=>({week:"",content:"",note:""}))),w=297,p=30,x=10,_=9.5,b=10,S=8,A=7,H=7,k=S+c.length*A,M=w-p-x-_-b-k-H,D=w-p-_-H,u=[];let g=[],m=0,r=M;for(const y of f){const R=We(y);g.length&&m+R>r&&(u.push(g),g=[],m=0,r=D),g.push(y),m+=R}u.push(g);const i=`
      <div class="voc-course-title">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา ${a(o.subject_name??"")}</div>
      <div class="voc-course-code">รหัสวิชา ${a(o.subject_code??"")}</div>
      <table class="voc-objective-table">
        <thead><tr><th>จุดประสงค์การเรียนรู้</th><th>สมรรถนะรายวิชา</th></tr></thead>
        <tbody>${c.map(y=>`<tr><td>${a(y.objective)||"&nbsp;"}</td><td>${a(y.competency)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,h=(y,R)=>`
      <div class="voc-schedule-title">กำหนดการสอน${R?"":" (ต่อ)"}</div>
      <table class="voc-schedule-table">
        <colgroup><col style="width:13%"><col style="width:69%"><col style="width:18%"></colgroup>
        <thead><tr><th>สัปดาห์ที่</th><th>เนื้อหาที่สอน</th><th>หมายเหตุ</th></tr></thead>
        <tbody>${y.map($=>`<tr><td>${a($.week)||"&nbsp;"}</td><td>${a($.content)||"&nbsp;"}</td><td>${a($.note)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,v=`<div class="voc-sign-bottom">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอนประจำวิชา<br><br>( ${a((s==null?void 0:s.full_name)??"")} )</div>`;return u.map((y,R)=>`
  <section class="voc-page">
    <div class="voc-page-inner voc-p4">
      ${R===0?i:""}
      ${h(y,R===0)}
      ${R===u.length-1?v:""}
    </div>
  </section>`).join("")}function St(t,o,s=null){const l=s??[Pt(t),Wt(t),Gt(t),Vt(t),Bt(t)];return`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8"/>
  <title>${a(o)}</title>
  <style>${Lt()}</style>
</head>
<body>
  ${l.join(`
`)}
</body>
</html>`}function Ve(t){return`<!DOCTYPE html>
<html lang="th"><head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>${Lt()}
body{background:#fff;margin:0;}
@media print{@page{size:A4 portrait;margin:0;}.no-print{display:none!important;}}
</style></head>
<body>${t}</body></html>`}function Be(t){var D,u,g;(D=document.getElementById("pp5-viewer"))==null||D.remove();const o=((u=t.ms)==null?void 0:u.subject_group)==="ACDMVOC",s=o?[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>Ae(t)},{label:"ไม่มาเรียน/วันที่สอน",fn:()=>ze(t)},{label:"คะแนน",fn:()=>Ne(t)},{label:"จุดประสงค์/กำหนดการสอน",fn:()=>Ge(t)}]:[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>Pt(t)},{label:"มาตรฐาน/ตัวชี้วัด",fn:()=>Wt(t)},{label:"บันทึกการไม่มาเรียน",fn:()=>Gt(t)},{label:"คะแนน",fn:()=>Vt(t)},{label:"วันที่สอน",fn:()=>Bt(t)}],l=s.slice(1).map((m,r)=>r+1),n=!!((g=t.cfg)!=null&&g.pp5PreviewEditEnabled),e={},c=document.createElement("div");c.id="pp5-viewer",c.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#374151;";const f=m=>"border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-family:Sarabun,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;"+(m?"background:#2563eb;color:#fff;":"background:#4b5563;color:#d1d5db;");c.innerHTML=`
    <div style="background:#111827;padding:8px 12px;display:flex;align-items:center;gap:6px;flex-shrink:0;overflow-x:auto;">
      <button id="pp5-v-close" style="${f(!1)}background:#dc2626;color:#fff;">✕ ปิด</button>
      <button id="pp5-v-print" style="${f(!1)}background:#059669;color:#fff;">🖨️ พิมพ์หน้านี้</button>
      <button id="pp5-v-printall" style="${f(!1)}background:#7c3aed;color:#fff;">🖨️ พิมพ์ทั้งหมด</button>
      ${n?`<button id="pp5-v-edit" style="${f(!1)}background:#f59e0b;color:#fff;">✏️ แก้ไขข้อความ</button>`:""}
      <div style="width:1px;height:24px;background:#374151;flex-shrink:0;margin:0 2px;"></div>
      ${s.map((m,r)=>`
        <button class="pp5-vtab" data-i="${r}" style="${f(r===0)}">${m.label}</button>
      `).join("")}
      ${n?'<span id="pp5-v-edit-hint" style="display:none;color:#fbbf24;font-size:12px;margin-left:8px;white-space:nowrap;">กำลังแก้ไข — คลิกข้อความในหน้าเพื่อพิมพ์ทับได้เลย (ไม่กระทบข้อมูลจริงในระบบ)</span>':""}
    </div>
    <div style="flex:1;overflow:auto;display:flex;justify-content:center;align-items:flex-start;padding:20px;">
      <iframe id="pp5-iframe" style="border:none;box-shadow:0 4px 32px rgba(0,0,0,.5);background:#fff;width:210mm;height:297mm;" scrolling="no"></iframe>
    </div>`,document.body.appendChild(c);const w=c.querySelector("#pp5-iframe"),p=[...c.querySelectorAll(".pp5-vtab")],x=c.querySelector("#pp5-v-edit"),_=c.querySelector("#pp5-v-edit-hint");let b=null,S=!1;function A(m){return e[m]??s[m].fn()}function H(){var m;if(!(b==null||s[b].all))try{const r=(m=w.contentDocument)==null?void 0:m.body;r&&(e[b]=r.innerHTML)}catch{}}function k(m){var r;if(S=m&&n&&b!=null&&!s[b].all,x){const i=b!=null&&s[b].all;x.style.background=S?"#16a34a":"#f59e0b",x.textContent=S?"✅ เสร็จแล้ว":"✏️ แก้ไขข้อความ",x.title=i?'กดเพื่อไปหน้าปกแล้วเริ่มแก้ไข (แท็บ "ดูทั้งหมด" แก้ไขตรงๆ ไม่ได้)':"",x.style.opacity=i?"0.7":"1"}_&&(_.style.display=S?"inline":"none");try{const i=(r=w.contentDocument)==null?void 0:r.body;i&&(i.contentEditable=S?"true":"false",i.style.outline=S?"2px dashed #f59e0b":"none",i.style.outlineOffset=S?"-2px":"0")}catch{}}function M(m){H(),b=m,p.forEach((y,R)=>{R===m?(y.style.background="#2563eb",y.style.color="#fff"):(y.style.background="#4b5563",y.style.color="#d1d5db")});const r=s[m];let i,h;r.all?(i=St(t,"",l.map(A)),h="3000mm"):(i=Ve(A(m)),h=(o?[2,3]:[3,4]).includes(m)?"900mm":"297mm"),w.style.height=h;const v=w.contentDocument;v.open(),v.write(i),v.close(),k(!1)}M(0),p.forEach((m,r)=>m.addEventListener("click",()=>M(r))),c.querySelector("#pp5-v-close").addEventListener("click",()=>c.remove()),x==null||x.addEventListener("click",()=>{var m;if((m=s[b])!=null&&m.all){M(1),k(!0);return}k(!S)}),c.querySelector("#pp5-v-print").addEventListener("click",()=>{if(H(),s[b].all){const m=`ปพ5_${t.ms.subject_code??""}_${et(t.cls.class_name)}`;Dt(St(t,m,l.map(A)),{autoprint:!0});return}w.contentWindow.focus(),w.contentWindow.print()}),c.querySelector("#pp5-v-printall").addEventListener("click",()=>{H();const m=`ปพ5_${t.ms.subject_code??""}_${et(t.cls.class_name)}`,r=St(t,m,l.map(A));Dt(r,{autoprint:!0})})}async function Yt(t){xt("กำลังโหลดข้อมูลเอกสาร...","info");try{const o=await ke(t);Be(o);for(const s of o.docWarnings??[])xt(s,"warning")}catch(o){console.error("[pp5-doc]",o),xt("โหลดเอกสารไม่สำเร็จ: "+ge(o),"error")}}function Fe(t){var s;(s=document.getElementById("pp5-course-modal"))==null||s.remove();const o=document.createElement("div");o.id="pp5-course-modal",o.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 เปิด ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการดู</p>
      <div class="space-y-2 mb-5">
        ${t.map(l=>`
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="radio" name="pp5-cls" class="w-4 h-4 accent-indigo-600" value="${l.id}" />
          <span class="text-sm text-gray-700">${a(et(l.class_name))}</span>
        </label>`).join("")}
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-open-btn" class="flex-1 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700">เปิด</button>
      </div>
    </div>`,document.body.appendChild(o),o.querySelector("#pp5-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#pp5-open-btn").addEventListener("click",async()=>{const l=o.querySelector('input[name="pp5-cls"]:checked');if(!l){xt("กรุณาเลือกห้อง","warning");return}o.remove(),await Yt(parseInt(l.value))}),o.addEventListener("click",l=>{l.target===o&&o.remove()})}const Ze=Object.freeze(Object.defineProperty({__proto__:null,openPP5CourseModal:Fe,openPP5Doc:Yt},Symbol.toStringTag,{value:"Module"}));export{we as a,Yt as b,be as c,ye as f,ve as i,Fe as o,Ze as p,Qe as r};
