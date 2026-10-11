import{getSystemConfig as Yt,getClassSessionDOWs as Mt,getClassStudents as qt,getClassAttendanceAll as Kt,getScoreColumns as Jt,getStudentScores as Xt,getDepartments as Qt,getHomeroomTeachers as Zt,getTeacherById as te,getCourseDocPage2 as ee,getCourseDocLangSettings as se,getSchoolHolidays as ae,getLifeSkillColumns as Ht,getClassScoreRounding as ne,getReligionGroupLeaderForTeacher as oe,getLifeSkillScores as le,getReadingScoreColumns as ie,getReadingScores as ce}from"./api-C-roKrdU.js";import{i as re,s as de,d as me,c as At,f as rt,r as jt}from"./score-display-CQ4dUIPx.js";import{a as _t,g as pe}from"./ui-CdgrLWzs.js";import{s as kt}from"./supabase-BV-W2lsh.js";import{o as Rt}from"./print-overlay-BVfxEd6n.js";import{applyReadingGradesFromConfig as ge,_readingGrade as he}from"./teacher-views-utils-D0Lb_BpE.js";import{i as fe}from"./skill-groups-BY1NTbf4.js";import"./impersonation-0xVfgYVY.js";import"./supabase-errors-BniCCodr.js";function a(t){return String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function zt(t){if(!t)return null;const[o,s,d]=String(t).split("-").map(Number);return!o||!s||!d?null:new Date(o,s-1,d)}function ct(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Tt(t){if(!t)return"";const[o,s,d]=String(t).split("-").map(Number);if(!o)return t;const n=(o+543)%100;return`${String(d).padStart(2,"0")}/${String(s).padStart(2,"0")}/${String(n).padStart(2,"0")}`}function ue(t,o,s=null,d=!1){const n=d&&s&&s.length?s.length:Math.max(1,Math.round((o??1)*2)),e=n*20;let c=s&&s.length?[...s]:null,$=!1;if(c&&c.length<n){$=!0;const f={};for(const p of c)f[p]=(f[p]||0)+1;const h=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(p=>t[p]).filter(Boolean).map(p=>zt(p)).filter(Boolean).sort((p,m)=>p-m),r={};h.forEach(p=>{const m=p.getDay();r[m]=(r[m]||0)+1});const i=Object.entries(r).sort(([,p],[,m])=>m-p||Number(p)-Number(m));for(const[p]of i){if(c.length>=n)break;const m=Number(p);for(;(f[m]||0)<Math.min(r[m],2)&&c.length<n;)c.push(m),f[m]=(f[m]||0)+1}for(let p=1;p<=5&&c.length<n;p++)(f[p]||0)<2&&(c.push(p),f[p]=(f[p]||0)+1);c.sort((p,m)=>p-m)}else c&&c.length>n&&(c=c.slice(0,n));const w=["day1_date","day2_date","day3_date","day4_date","day5_date","day6_date"].map(f=>t[f]).filter(Boolean).map(f=>zt(f)).filter(Boolean).sort((f,h)=>f-h);if(!w.length)return[];if($&&c){const h=[];let r=0,i=0;for(;r<w.length&&h.length<e;){const p=new Date(w[r]);p.setDate(p.getDate()-p.getDay()),p.setHours(0,0,0,0);const m=p.getTime();i=m;const u=[];for(;r<w.length&&w[r].getTime()>=m&&w[r].getTime()<m+6048e5;)u.push(w[r++]);const y={};for(const k of u){const z=k.getDay();y[z]=(y[z]||0)+1}for(const k of u){if(h.length>=e)break;h.push({n:h.length+1,date:new Date(k),ds:ct(k)})}const R=n-u.length;if(R>0){const k={};c.forEach(D=>{k[D]=(k[D]||0)+1});const z=[];for(const[D,T]of Object.entries(k).sort()){const B=Number(D),N=y[B]||0;for(let O=0;O<T-N&&z.length<R;O++)z.push(B)}for(const D of z){if(h.length>=e)break;const T=new Date(p);T.setDate(T.getDate()+D),h.push({n:h.length+1,date:T,ds:ct(T)})}}}if(h.length<e){const p=new Date(i);let m=1;for(;h.length<e;){for(const u of c){if(h.length>=e)break;const y=new Date(p);y.setDate(y.getDate()+m*7+u),h.push({n:h.length+1,date:y,ds:ct(y)})}m++}}return h}if(!c||!c.length){const h={},r=w.filter(k=>{const z=new Date(k);z.setDate(z.getDate()-z.getDay()),z.setHours(0,0,0,0);const D=z.getTime();return h[D]=(h[D]||0)+1,h[D]<=n}),i=[];for(const k of r){if(i.length>=e)break;i.push({n:i.length+1,date:new Date(k),ds:ct(k)})}if(i.length>=e)return i;const p=r[r.length-1],m=new Date(p);m.setDate(m.getDate()-m.getDay()),m.setHours(0,0,0,0);const u=m.getTime(),y=r.filter(k=>k.getTime()>=u&&k.getTime()<u+6048e5);let R=1;for(;i.length<e;){for(const k of y){if(i.length>=e)break;const z=new Date(k);z.setDate(z.getDate()+R*7),i.push({n:i.length+1,date:z,ds:ct(z)})}R++}return i}const g={},b=[];for(const f of w){if(b.length>=e)break;const h=new Date(f);h.setDate(h.getDate()-h.getDay()),h.setHours(0,0,0,0);const r=h.getTime();g[r]=(g[r]||0)+1,g[r]<=n&&b.push({n:b.length+1,date:new Date(f),ds:ct(f)})}if(b.length>=e)return b;const _=w[w.length-1],v=new Date(_);v.setDate(v.getDate()-v.getDay()),v.setHours(0,0,0,0);const S=v.getTime(),C=7*24*60*60*1e3,M={};for(const f of w)if(f.getTime()>=S&&f.getTime()<S+C){const h=f.getDay();M[h]=(M[h]||0)+1}const j={};for(const f of c)j[f]=(j[f]||0)+1;const A=[];for(const[f,h]of Object.entries(j)){const r=h-(M[Number(f)]||0);for(let i=0;i<r;i++)A.push(Number(f))}A.sort((f,h)=>f-h);for(const f of A){if(b.length>=e)break;const h=new Date(v);h.setDate(h.getDate()+f),b.push({n:b.length+1,date:h,ds:ct(h)})}let H=1;for(;b.length<e;){for(const f of c){if(b.length>=e)break;const h=new Date(v);h.setDate(h.getDate()+H*7+f),b.push({n:b.length+1,date:h,ds:ct(h)})}H++}return b}function ve(t){return t==="ACDMVOC"?"porwor":"samai"}function yt(t={},o,s=!1){return(s?[`${o}LogoUrl`,`${o}LogoBwUrl`]:[`${o}LogoBwUrl`,`${o}LogoUrl`]).map(n=>t==null?void 0:t[n]).find(Boolean)||""}function st(t){return String(t??"").split(" ")[0]}function Nt(t,o){const s={};for(const e of t){const c=e[o];c&&(s[c]=(s[c]??0)+1)}let d=null,n=0;for(const[e,c]of Object.entries(s))c>n&&(n=c,d=e);return d}function be(t){return Nt(t,"religion_room")}function we(t){return Nt(t,"main_room")}function $t(t){return t>=80?4:t>=75?3.5:t>=70?3:t>=65?2.5:t>=60?2:t>=55?1.5:t>=50?1:0}function Et(t){return t>=3.5?"ดีเยี่ยม":t>=2.5?"ดี":t>=1?"ผ่าน":"ไม่ผ่าน"}async function ye(t){var pt,xt;const o=await Yt();ge(o);const s=parseInt(o.academicYear??o.academic_year??2568),d=parseInt(o.semester??1),{data:n,error:e}=await kt.from("classes").select(`
      id, course_id, class_name, academic_year, semester, skill_group, google_sheet_id,
      head_student_id, source_class_id,
      day1_date, day2_date, day3_date, day4_date, day5_date, day6_date,
      master_subjects ( id, subject_code, subject_name, dept, grade_level, subject_group, credit, teacher_id, learning_area ),
      students:students!fk_head_student ( full_name, student_code )
    `).eq("id",t).single();if(e||!n)throw new Error("โหลดข้อมูลห้องเรียนไม่สำเร็จ");const c=n.academic_year!=null&&Number.isFinite(+n.academic_year)?+n.academic_year:s,$=n.semester!=null&&Number.isFinite(+n.semester)?+n.semester:d,w={...o,academicYear:String(c),semester:String($)},g=n.master_subjects??{},b=g.credit??1,_=ve(g.subject_group);let v=n.source_class_id??null,S=b;if(!v){const{data:l}=await kt.from("classes").select("source_class_id").eq("id",t).single();v=(l==null?void 0:l.source_class_id)??null}let C=[];if(v){const{data:l}=await kt.from("classes").select("id, academic_year, semester, master_subjects(credit)").eq("id",v).single(),V=(l==null?void 0:l.academic_year)!=null&&(l==null?void 0:l.semester)!=null;!l||V&&+l.academic_year===c&&+l.semester===$?((pt=l==null?void 0:l.master_subjects)!=null&&pt.credit&&(S=l.master_subjects.credit),C=await Mt(v).catch(()=>[])):v=null}const M=new Set(["คะแนนมาเรียน","คะแนนละหมาด"]),[j,A,H,f,h,r]=await Promise.all([qt(t),Kt(v??t),Jt(v??t),Xt(v??t),Qt(),Zt(c,$).catch(()=>[])]),i=g.teacher_id?await te(g.teacher_id).catch(()=>null):null,p=["AGM","AGMVOC"].includes(g.subject_group)?"ศาสนา":["ACDMVOC"].includes(g.subject_group)?"สามัญปวช":"สามัญ",m=h.find(l=>l.dept_code===g.dept&&l.category===p)??h.find(l=>l.dept_code===g.dept)??h.find(l=>l.dept_name===g.dept)??null,[u,y,R,k]=await Promise.all([g.id?ee(g.id).catch(()=>null):Promise.resolve(null),se().catch(()=>[]),Mt(n.id).catch(()=>[]),ae(c,$).catch(()=>[])]),z=new Set(k),D=((xt=y.find(l=>l.lang_key==="th"))==null?void 0:xt.settings)??{},T=Array.isArray(D.colsBasic)&&D.colsBasic.length?D.colsBasic:["มาตรฐานการเรียนรู้","ตัวชี้วัด"],B=Array.isArray(D.colsExtra)&&D.colsExtra.length?D.colsExtra:["ผลการเรียนรู้"],N=D.rowHeader||"ข้อ",O=g.subject_group==="ACDMVOC",K=ue(n,b,R.length?R:null,O),Y={};if(v){const l=O&&R.length?R.length:Math.max(1,Math.round(b*2)),V=O&&C.length?C.length:Math.max(1,Math.round(S*2)),W=K.length;for(let q=1;q<=W;q++){const U=Math.floor((q-1)/l),lt=(q-1)%l,bt=U*V+lt+1;for(const it of A)it.session_number===bt&&(Y[it.student_id]||(Y[it.student_id]={}),Y[it.student_id][q]=it.status)}}else for(const l of A)Y[l.student_id]||(Y[l.student_id]={}),Y[l.student_id][l.session_number]=l.status;const Q=(v?H.filter(l=>!M.has(l.assignment_name)):H).filter(l=>l.column_type!=="override"&&!re(l)),F=["AGM","AGMVOC"].includes(g.subject_group)?["คะแนนมาเรียน","คะแนนละหมาด"]:fe(n.skill_group)?(await Ht(c,$,"สามัญ").catch(()=>[])).slice(0,3).map(l=>l.name):[],I=de(Q,F),x={};for(const l of f)x[l.student_id]||(x[l.student_id]={}),x[l.student_id][l.score_column_id]=l.score;for(const l of j)l.special_result&&(x[l.id]||(x[l.id]={}),x[l.id].__force=l.special_result);let P="";const G=await ne(t).catch(()=>(P="โหลดค่าปัดเลขร่วมไม่สำเร็จ คะแนนที่แสดงใช้รูปแบบเริ่มต้น กรุณาติดตั้ง SQL หรือตรวจการเชื่อมต่อก่อนใช้เอกสารจริง",null));for(const l of Object.values(x)){const V={...l};for(const W of I)(W.column_type==="derived"||V[W.id]!=null&&W.bonus_formula)&&(l[W.id]=me(H,W,q=>V[q]))}const Z=["AGM","AGMVOC"].includes(g.subject_group),at=st(n.class_name),J=we(j),X=be(j);let tt,et;Z?(et=r.find(l=>l.category==="ศาสนา"&&l.main_room===n.class_name)??(X?r.find(l=>l.category==="ศาสนา"&&l.main_room===X):null)??null,tt=J?r.find(l=>l.category!=="ศาสนา"&&l.main_room===J)??null:null):(tt=r.find(l=>l.category!=="ศาสนา"&&l.main_room===at)??(J?r.find(l=>l.category!=="ศาสนา"&&l.main_room===J):null)??null,et=X?r.find(l=>l.category==="ศาสนา"&&l.main_room===X)??null:null);const ht=(m==null?void 0:m.dept_name)??g.dept??"";let nt=null;Z&&w.religionDeptHeadSource==="subgroup"&&g.teacher_id&&(nt=await oe(g.teacher_id).catch(l=>(console.warn("[pp5-doc] load religion subgroup leader failed",l),null)));const mt=Z?(m==null?void 0:m.head_name)||g.learning_area&&g.learning_area.trim()||"":g.learning_area&&g.learning_area.trim()||(m==null?void 0:m.head_name)||"",L=Z&&w.religionDeptHeadSource==="subgroup"&&(nt==null?void 0:nt.full_name)||mt;let ot={},ft=0,ut="";if(g.subject_group==="ACDMVOC")try{const V=(await Ht(c,$,"สามัญ")).find(W=>(W.name??"").includes("ความสะอาด"));if(V){ft=V.max_score??0,ut=V.name;const W=await le([V.id]);ot=Object.fromEntries(W.map(q=>[q.student_id,q.score]))}}catch{}let vt={};const E=[];P&&E.push(P);try{const l=await ie(c,$);if(l.length){const V=await ce(l.map(U=>U.id),j.map(U=>U.id)),W=l.reduce((U,lt)=>U+(lt.max_score??0),0),q={};for(const U of V)U.score!=null&&(q[U.student_id]=(q[U.student_id]??0)+(parseFloat(U.score)||0));if(W>0)for(const[U,lt]of Object.entries(q))vt[U]=he(lt/W*100).label;V.length||E.push(`ไม่พบคะแนนอ่านคิดวิเคราะห์ของนักเรียนในห้องนี้ (ภาค ${$}/${c})`)}else E.push(`ไม่พบหัวข้อคะแนนอ่านคิดวิเคราะห์ (ภาค ${$}/${c})`)}catch(l){throw console.error("[pp5-doc] load reading evaluation failed",l),new Error(`โหลดผลประเมินการอ่านไม่สำเร็จ: ${(l==null?void 0:l.message)??"ไม่ทราบสาเหตุ"}`)}return{cls:n,ms:g,credit:b,prefix:_,cfg:w,students:j,attMap:Y,scoreColumns:I,scoreMap:x,roundSettings:G,teacher:i,dept:m,deptNameTH:ht,deptHeadName:L,courseDoc:u,thColHeaders:T,thColsExtra:B,thRowHeader:N,sessions:K,hrSamai:tt,hrReligion:et,academicYear:c,semester:$,holidaySet:z,moralScores:ot,moralMax:ft,moralColName:ut,readingEvalMap:vt,docWarnings:E}}function Lt(){return`
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
  `}function Pt(t){var ft,ut,vt;const{cls:o,ms:s,credit:d,prefix:n,cfg:e,students:c,scoreColumns:$,scoreMap:w,teacher:g,dept:b,deptNameTH:_,deptHeadName:v,hrSamai:S,hrReligion:C,academicYear:M,semester:j,sessions:A,readingEvalMap:H,roundSettings:f}=t,h=a(e[`${n}SchoolName`]??e.samaiSchoolName??""),r=a(e[`${n}SchoolAddress`]??e.samaiSchoolAddress??""),i=yt(e,n),p=a(e[`${n}DirectorName`]??"");e[`${n}DirectorSignUrl`];const m=a(e[`${n}DirectorTitle`]||"ผู้อำนวยการ"),u=["AGM","AGMVOC"].includes(s.subject_group),y=a(u?e.agmAcademicHeadName??e[`${n}AcademicHeadName`]??"":e[`${n}AcademicHeadName`]??"");u?e.agmAcademicHeadSignUrl??e[`${n}AcademicHeadSignUrl`]:e[`${n}AcademicHeadSignUrl`];const R=a((u?e.agmAcademicHeadTitle:e[`${n}AcademicHeadTitle`])||"หัวหน้าฝ่ายบริหารวิชาการ"),k=a(u?e.agmRegistrarName??e[`${n}RegistrarName`]??"":e[`${n}RegistrarName`]??"");u?e.agmRegistrarSignUrl??e[`${n}RegistrarSignUrl`]:e[`${n}RegistrarSignUrl`];const z=a((u?e.agmRegistrarTitle:e[`${n}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล"),D=a(v);b==null||b.head_sign_url;const T=o.class_name??"",B=!u&&(["4","5","6"].some(E=>(s.grade_level??"").includes(E))||["ACDMVOC"].includes(s.subject_group)),N=u?T.startsWith("PR")?"PR":T.startsWith("อก")?"อก":T.startsWith("อป")?"อป":"":"",O=A!=null&&A.length?Math.round(A.length/20):d*2,K=(A==null?void 0:A.length)??d*2*20,Y=!!window._pp5HideScores;f==null||f.forcedGradeColor;const Q=$.reduce((E,pt)=>E+(pt.max_score??0),0),F={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},I={ร:0,มส:0},x={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0},P={ดีเยี่ยม:0,ดี:0,ผ่าน:0,ไม่ผ่าน:0};if(!Y)for(const E of c){const pt=w[E.id]??{},xt=$.reduce((gt,wt)=>gt+(pt[wt.id]??0),0),l=At(f,xt),V=(ft=w[E.id])==null?void 0:ft.__force,W=V!=null&&String(V).trim()!=="",q=W?Number(V):NaN;if(W&&!Number.isFinite(q)){const gt=String(V).trim().replace(/\s+/g,"").replace(/\./g,"");gt==="ร"&&I.ร++,gt==="มส"&&I.มส++;const wt=H==null?void 0:H[E.id];wt&&wt in x&&x[wt]++,P.ไม่ผ่าน++;continue}let U=W?q:0;if(!W&&Q>0){const gt=l/Q*100;U=$t(gt)}const lt=String(U);lt in F&&F[lt]++;const bt=H==null?void 0:H[E.id];bt&&bt in x&&x[bt]++;const it=Et(U);it in P&&P[it]++}const G=E=>`<span class="box${E?" checked":""}"></span>`,Z=u?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",at=u?"76mm":"83mm",J=u?"115mm":"117.4mm",X=u?`
    <div class="check-line">${G(N==="PR")}<span>ตอนต้น (PR)</span></div>
    <div class="check-line">${G(N==="อก")}<span>ตอนกลาง (อก.)</span></div>
    <div class="check-line">${G(N==="อป")}<span>ตอนปลาย (อป.)</span></div>
  `:`
    <div class="check-line">${G(!B)}<span>ตอนต้น (ม.1-ม.3)</span></div>
    <div class="check-line">${G(B)}<span>ตอนปลาย (ม.4-ม.6)</span></div>
  `,tt=_.length>15?`<span class="uline w-md" style="white-space:normal;line-height:4.5mm;min-height:9mm;vertical-align:bottom;">${a(_)}</span>`:`<span class="uline w-md">${a(_)}</span>`,et=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",ht=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",nt=u?`
    <div class="info-line">
      <span>${et}</span>${tt}
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`:`
    <div class="info-line">
      <span>${et}</span>${tt}
      <span>รายวิชา</span><span class="uline w-lg">${a(s.subject_name??"")}</span>
      <span>รหัสวิชา</span><span class="uline w-cd">${a(s.subject_code??"")}</span>
    </div>`,mt=[...[4,"3.5",3,"2.5",2,"1.5",1,0].map(E=>F[String(E)]||"-"),I.ร||"-",I.มส||"-"].map(E=>`<td>${E}</td>`).join(""),L=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(E=>`<td>${x[E]||"-"}</td>`).join(""),ot=["ดีเยี่ยม","ดี","ผ่าน","ไม่ผ่าน"].map(E=>`<td>${P[E]||"-"}</td>`).join("");return`
  <div class="page-p1">
    <div class="doc-code">ปพ5</div>
    ${i?`<div class="logo-wrap"><img src="${a(i)}" alt="ตราโรงเรียน" /></div>`:""}

    <h1 class="p1-title">แบบบันทึกผลการพัฒนาคุณภาพผู้เรียน</h1>

    <section class="level-row">
      <div class="lbl" style="left:${at};">${Z}</div>
      <div class="checks" style="left:${J};">${X}</div>
    </section>

    <div class="school">${h}</div>
    <div class="school-sub">${r}</div>

    <section class="info">
      <div class="info-line">
        <span>${Z}</span><span class="uline w-sm">${a(st(o.class_name))}</span>
        <span>ภาคเรียนที่</span><span class="uline w-md">${j}</span>
        <span>ปีการศึกษา</span><span class="uline w-yr">${M}</span>
      </div>
      ${nt}
      <div class="info-line">
        <span>จำนวน</span><span class="uline w-xs">${d}</span>
        <span>หน่วยกิต</span>
        <span>เวลาเรียน</span><span class="uline w-xs">${O}</span>
        <span>ชั่วโมง/สัปดาห์</span>
        <span>รวมเวลาเรียน</span><span class="uline w-xs">${K}</span>
        <span>ชั่วโมง/ภาค</span>
      </div>
      <div class="info-row-one"><span>ครูผู้สอน</span><span class="uline-xl">${a((g==null?void 0:g.full_name)??"")}</span></div>
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
          <td>${c.length}</td>${mt}<td></td><td></td><td></td>
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
          ${L}<td></td>
        </tr>
        <tr>
          <td>การประเมินคุณลักษณะ<br>อันพึงประสงค์</td>
          ${ot}<td></td>
        </tr>
      </table>
    </section>

    <section class="approval">
      <div class="apl-title">การอนุมัติผลการพัฒนาคุณภาพผู้เรียน</div>

      <div class="sig-row">
        <span>ลงชื่อ</span>
        <span class="sig-line">${a((g==null?void 0:g.full_name)??"")}</span>
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
          <span class="sig-line">${p}</span>
        </div>
        <div class="p1-role">${m}</div>
      </div>
    </section>
  </div>`}function Wt(t){const{cls:o,ms:s,credit:d,cfg:n,courseDoc:e,thColHeaders:c,thColsExtra:$,thRowHeader:w,teacher:g,deptNameTH:b,deptHeadName:_,academicYear:v,semester:S,prefix:C,sessions:M}=t,j=(M==null?void 0:M.length)??d*2*20,A=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",H=s.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้ากลุ่มสาระฯ",f=yt(n,C),h=Array.isArray(e==null?void 0:e.table_rows)?e.table_rows:[],r=(e==null?void 0:e.text_direction)==="rtl"?"rtl":(e==null?void 0:e.text_direction)==="ltr"?"ltr":"auto",p=(Array.isArray(e==null?void 0:e.table_columns)?e.table_columns.length:2)===1,m=p?[$[0]??"ผลการเรียนรู้"]:c??["มาตรฐานการเรียนรู้","ตัวชี้วัด"],u=h,y=(O,K="")=>[Array.isArray(O)&&O.length?O.join(", "):"",(K??"").trim()].filter(Boolean).join(", "),R=y(e==null?void 0:e.between_objective_items,e==null?void 0:e.between_objective_extra),k=y(e==null?void 0:e.midterm_objective_items,e==null?void 0:e.midterm_objective_extra),z=y(e==null?void 0:e.final_objective_items,e==null?void 0:e.final_objective_extra),D=["AGM","AGMVOC"].includes(s.subject_group),T=["1 รักชาติ ศาสน์ กษัตริย์","2 ซื่อสัตย์สุจริต","3 มีวินัย","4 ใฝ่เรียนรู้","5 อยู่อย่างพอเพียง"],B=["6 มุ่งมั่นในการทำงาน","7 รักความเป็นไทย","8 มีจิตสาธารณะ","9 ปฏิบัติศาสนกิจอย่างสม่ำเสมอ"],N=D?"ระดับชั้นอิสลามศึกษา":"ระดับชั้น";return`
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
          <span class="p2-label">${N}</span>
          <span class="p2-uline p2-uline-fill">${a(st(o.class_name??""))}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ครูผู้สอน</span>
          <span class="p2-uline p2-uline-fill">${a((g==null?void 0:g.full_name)??"")}</span>
        </div>
      </div>
      <!-- คอลัมน์ขวา -->
      <div class="p2-hdr-col">
        <div class="p2-hdr-row">
          <span class="p2-label">รหัสวิชา</span>
          <span class="p2-uline">${a(s.subject_code??"")}</span>
          <span class="p2-label">${A}</span>
          <span class="p2-uline p2-uline-fill">${a(b)}</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">ภาคเรียนที่</span>
          <span class="p2-uline">${a(String(S))}</span>
          <span class="p2-label">ปีการศึกษา</span>
          <span class="p2-uline">${a(String(v))}</span>
          <span class="p2-label">เวลา</span>
          <span class="p2-uline p2-uline-fill">${a(String(j))}</span>
          <span class="p2-label">ชั่วโมง</span>
        </div>
        <div class="p2-hdr-row">
          <span class="p2-label">จำนวน</span>
          <span class="p2-uline">${a(String(d))}</span>
          <span class="p2-label">หน่วยกิต</span>
        </div>
      </div>
    </div>

    <!-- Standards Table -->
    ${p?`
    <table class="std-table" style="table-layout:fixed;">
      <thead>
        <tr>
          <th style="width:100%;" dir="ltr">${a(m[0])}</th>
        </tr>
      </thead>
      <tbody>
        ${u.map((O,K)=>{const Y=a(Array.isArray(O)?O[0]??"":""),Q=K+1;return`<tr><td class="std-row" dir="${r}" style="padding:1.5mm 2.5mm;">
            <span style="display:inline-flex;gap:5px;align-items:flex-start;width:100%;">
              <b style="flex-shrink:0;min-width:16px;text-align:center;">${Q}.</b>
              <span style="flex:1;">${Y}</span>
            </span>
          </td></tr>`}).join("")}
        <tr class="std-fill-row"><td></td></tr>
      </tbody>
    </table>`:`
    <table class="std-table" dir="${r}">
      <thead>
        <tr>
          <th style="width:50mm;">${a(m[0]??"มาตรฐานการเรียนรู้")}</th>
          <th>${a(m[1]??"ตัวชี้วัด")}</th>
        </tr>
      </thead>
      <tbody>
        ${u.map(O=>`<tr>
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
          <div>${B.map(O=>`<div>${a(O)}</div>`).join("")}</div>
        </div>
      </div>
    </div>

    <!-- Signature -->
    <div class="p2-sig">
      ลงชื่อ <span style="display:inline-block;border-bottom:.3mm dashed #555;min-width:60mm;text-align:center;padding:0 2mm;">
        ${a(_)}
      </span> ${H}
    </div>
  </div>`}const Dt=50;function Gt(t){const{cls:o,ms:s,credit:d,cfg:n,students:e,attMap:c,sessions:$,academicYear:w,semester:g,teacher:b}=t,_=[];for(let v=0;v<e.length;v+=Dt){const S=e.slice(v,v+Dt);_.push(xe(t,S,v+1))}return _.join("")}function xe(t,o,s){const{cls:d,ms:n,teacher:e,academicYear:c,semester:$,cfg:w,prefix:g}=t,b=yt(w,g),_=40,v=o.length+1,S=Math.max(3.5,Math.min(5.5,Math.floor(241/v*10)/10)).toFixed(1),C="3.2mm",M=o.map((H,f)=>{const h=t.attMap[H.id]??{},r=[];for(const[m,u]of Object.entries(h))u!=="present"&&r.push({n:parseInt(m),status:u});r.sort((m,u)=>m.n-u.n);const i=r.length,p=Array.from({length:_},(m,u)=>{const y=r[u];return y?`<td class="${y.status==="absent"?"att-absent":y.status==="leave"?"att-leave":y.status==="sick"?"att-sick":"att-absent"}">${y.n}</td>`:"<td></td>"});return`<tr>
      <td class="text-center">${s+f}</td>
      <td class="att-code text-center">${a(H.student_code??"")}</td>
      <td class="att-name">${a(H.full_name??"")}</td>
      ${p.join("")}
      <td class="text-center font-bold">${i||""}</td>
    </tr>`}),j=Array.from({length:_},(H,f)=>`<th>${f+1}</th>`).join(""),A=3+_+1;return`
  <div class="page-tight">
    <div class="att-top">
      ${b?`<div class="att-logo"><img src="${a(b)}" alt="โลโก้" /></div>`:'<div style="width:18mm;flex-shrink:0;"></div>'}
      <div class="att-info">
        <div class="att-title">บันทึกการไม่มาเรียนของนักเรียนชั้น ${a(st(d.class_name))}</div>
        <div class="att-hdr-row">
          <span class="att-label">ปีการศึกษา</span>
          <span class="att-uline">${a(String(c))}</span>
          <span class="att-label" style="margin-left:4mm;">ภาคเรียนที่</span>
          <span class="att-uline">${a(String($))}</span>
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
        ${Array.from({length:_},()=>`<col style="width:${C};"/>`).join("")}
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
          <th colspan="${_}" style="font-size:7pt;">บันทึกการไม่มาเรียน</th>
          <th rowspan="2" style="font-size:7pt;">รวมเวลา<br/>ไม่มาเรียน</th>
        </tr>
        <tr>${j}</tr>
      </thead>
      <tbody>
        ${M.join("")}
        <tr><td></td><td></td><td></td>${Array.from({length:_},()=>"<td></td>").join("")}<td></td></tr>
      </tbody>
    </table>
  </div>`}const Ot=50;function Vt(t){const{students:o}=t,s=[];for(let d=0;d<o.length;d+=Ot)s.push(_e(t,o.slice(d,d+Ot),d+1));return s.join("")}function _e(t,o,s){var F,I;const{cls:d,ms:n,teacher:e,deptHeadName:c,academicYear:$,semester:w,scoreColumns:g,scoreMap:b,readingEvalMap:_,roundSettings:v}=t,S=(v==null?void 0:v.forcedGradeColor)==="black"?"black":"red",C=n.subject_group==="ACDMVOC"?"หัวหน้าสาขาวิชา":"หัวหน้าหมวดวิชา",M=x=>x.assignment_type==="ปลายภาค"||x.assignment_type==="final",j=x=>x.assignment_type==="คะแนนพิเศษ",A=g.filter(x=>!M(x)&&!j(x));g.filter(x=>j(x));const H=g.filter(x=>M(x)),f=5,h=5,r={id:null,assignment_name:"",max_score:""},i=[...A,...Array(Math.max(0,f-A.length)).fill(r)],p=[...H,...Array(Math.max(0,h-H.length)).fill(r)],m=A.reduce((x,P)=>x+(P.max_score??0),0),u=H.reduce((x,P)=>x+(P.max_score??0),0),y=i.length+1,R=p.length+2,k=y+R,D=3+k+3,T=o.length+1,B=Math.max(3.8,Math.min(5.8,Math.floor(160/T*10)/10)).toFixed(1),N=!!window._pp5HideScores,O=o.map((x,P)=>{if(N)return`<tr>
        <td>${s+P}</td>
        <td>${a(x.student_code??"")}</td>
        <td class="gs-name" style="border-right:2.0px solid #000;">${a(x.full_name??"")}</td>
        ${i.map(()=>"<td></td>").join("")}
        <td class="grade-reading"></td>
        ${p.map(()=>"<td></td>").join("")}
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
        <td style="border-right:2.0px solid #000;"></td>
        <td></td>
      </tr>`;const G=b[x.id]??{},Z=i.map(L=>L.id?rt(t.roundSettings,jt(L),G[L.id],L.column_type==="derived"?2:1):""),at=p.map(L=>L.id?rt(t.roundSettings,jt(L),G[L.id],L.column_type==="derived"?2:1):""),J=A.reduce((L,ot)=>L+Number(G[ot.id]??0),0),X=H.reduce((L,ot)=>L+(G[ot.id]??0),0),tt=J+X,et=!!G.__force,ht=At(t.roundSettings,tt),nt=G.__force||$t(m+u>0?ht/(m+u)*100:0),mt=Et(nt);return`<tr>
      <td>${s+P}</td>
      <td>${a(x.student_code??"")}</td>
      <td class="gs-name" style="border-right:2.0px solid #000;">${a(x.full_name??"")}</td>
      ${Z.map(L=>`<td>${L}</td>`).join("")}
      <td style="font-weight:700;">${rt(t.roundSettings,"mid_subtotal",J)}</td>
      ${at.map(L=>`<td>${L}</td>`).join("")}
      <td style="font-weight:700;">${rt(t.roundSettings,"fin_subtotal",X)}</td>
      <td style="font-weight:700;border-right:2.0px solid #000;">${rt(t.roundSettings,"total",tt)}</td>
      <td class="grade-reading">${a((_==null?void 0:_[x.id])??"")}</td>
      <td class="grade-attr" style="border-right:2.0px solid #000;">${a(mt)}</td>
      <td style="font-weight:700;${et?`color:${S==="red"?"#c00":"#000"};`:""}">${nt}</td>
    </tr>`}),K=`<tr>${Array(D).fill("<td></td>").join("")}</tr>`,Y=A.length>6?"5mm":"5.8mm",Q=H.length>5?"5mm":"5.5mm";return`
  <div class="score-wrap">
    <div class="score-top-info">
      <div class="sc-field"><span class="sc-lbl">รายวิชา</span><span class="sc-val">${a(n.subject_name??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">รหัสวิชา</span><span class="sc-val">${a(n.subject_code??"")}</span></div>
      <div class="sc-field"><span class="sc-lbl">ชั้น</span><span class="sc-val">${a(st(d.class_name))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ภาคเรียนที่</span><span class="sc-val">${a(String(w))}</span></div>
      <div class="sc-field"><span class="sc-lbl">ปีการศึกษา</span><span class="sc-val">${a(String($))}</span></div>
    </div>
    <table class="grade-sheet" style="--row-h:${B}mm">
      <colgroup>
        <col style="width:5mm;"/>
        <col style="width:12mm;"/>
        <col style="width:45mm;"/>
        ${i.map(()=>`<col style="width:${Y};"/>`).join("")}
        <col style="width:7mm;"/>
        ${p.map(()=>`<col style="width:${Q};"/>`).join("")}
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
          <th colspan="${k}" style="font-size:7px;padding:1px;border-right:2.0px solid #000;">อัตราส่วนคะแนนระหว่างเรียน:วัดผลระหว่างภาค/ปลายภาค = ${m} / ${u}</th>
        </tr>
        <!-- Row 3: between/final section headers (3 student cols covered by rs4) -->
        <tr>
          <th colspan="${i.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนระหว่างเรียน/กลางภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนระหว่างภาค</span></th>
          <th colspan="${p.length}" style="font-size:7px;padding:1px;line-height:1.1;">ผลการเรียนปลายภาค<br/><span style="font-size:6px;">จุดประสงค์ที่ / คะแนนเต็ม</span></th>
          <th rowspan="2" class="v"><span>รวมคะแนนปลายภาค</span></th>
          <th rowspan="2" class="v" style="border-right:2.0px solid #000;"><span>รวมคะแนน 100</span></th>
        </tr>
        <!-- Row 4: column name verticals (3 student cols covered by rs4) -->
        <tr>
          ${i.map(x=>`<th class="v" style="overflow:visible;"><span>${a(x.assignment_name??"")}</span></th>`).join("")}
          ${p.map(x=>`<th class="v" style="overflow:visible;"><span>${a(x.assignment_name??"")}</span></th>`).join("")}
        </tr>
        <!-- Row 5: score-full (3 student cols still covered by rs4) -->
        <tr>
          ${i.map(x=>`<th class="score-full">${x.max_score??""}</th>`).join("")}
          <th class="score-full">${m||""}</th>
          ${p.map(x=>`<th class="score-full">${x.max_score??""}</th>`).join("")}
          <th class="score-full">${u||""}</th>
          <th class="score-full" style="border-right:2.0px solid #000;">${m||u?m+u:""}</th>
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
        <div class="score-sig-line">${a(c)}</div>
        <div class="score-sig-role">${C}</div>
      </div>
      <div class="score-sig-row">
        <div class="score-sig-lbl">ลงชื่อ</div>
        <div class="score-sig-line">${a(["AGM","AGMVOC"].includes((F=t.ms)==null?void 0:F.subject_group)?t.cfg.agmRegistrarName??t.cfg[`${t.prefix}RegistrarName`]??"":t.cfg[`${t.prefix}RegistrarName`]??"")}</div>
        <div class="score-sig-role">${a((["AGM","AGMVOC"].includes((I=t.ms)==null?void 0:I.subject_group)?t.cfg.agmRegistrarTitle??t.cfg[`${t.prefix}RegistrarTitle`]:t.cfg[`${t.prefix}RegistrarTitle`])||"หัวหน้างานวัดผลและประเมินผล")}</div>
      </div>
    </div>
  </div>`}function Bt(t){const{cls:o,ms:s,credit:d,teacher:n,deptNameTH:e,academicYear:c,semester:$,sessions:w,cfg:g,prefix:b,holidaySet:_}=t,v=s.subject_group==="ACDMVOC"?"สาขาวิชา":"กลุ่มสาระการเรียนรู้",S=["AGM","AGMVOC"].includes(s.subject_group)?"ระดับชั้นอิสลามศึกษา":"ระดับชั้นมัธยมศึกษา",C=40,M=3,j=w!=null&&w.length?Math.round(w.length/20):Math.max(1,Math.round(d*2)),A=yt(g,b),H=Array.from({length:M},(m,u)=>Array.from({length:C},(y,R)=>{const k=w[u*C+R];return k?{sess:k,week:Math.ceil(k.n/j)}:null})),f=H.map(m=>m.map((u,y)=>{var k,z;if(!u)return null;if(y>0&&((k=m[y-1])==null?void 0:k.week)===u.week)return 0;let R=1;for(let D=y+1;D<C&&((z=m[D])==null?void 0:z.week)===u.week;D++)R++;return R})),h="border-right:1.5px solid #000;",r=Array.from({length:C},(m,u)=>`<tr>${Array.from({length:M},(R,k)=>{const z=H[k][u],D=f[k][u],T=k<M-1?h:"";if(!z)return`<td></td><td></td><td style="${T}"></td>`;const B=D===0?"":`<td class="wk" rowspan="${D}">${z.week}</td>`,N=_==null?void 0:_.has(z.sess.ds),O=T+(N?"color:#c00;font-weight:700;":"");return`${B}<td class="ep">${z.sess.n}</td><td class="dt" style="${O}">${Tt(z.sess.ds)}</td>`}).join("")}</tr>`),i=(m,u="",y=!1)=>`<span style="${y?"flex:1;border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;":`display:inline-block;min-width:${m};border-bottom:.3mm dotted #000;text-align:left;padding:0 1mm;`}">${a(String(u))}</span>`,p=m=>`<div style="display:flex;align-items:baseline;gap:2mm;font-size:9pt;margin-bottom:1.5mm;">${m}</div>`;return`
  <div class="page" style="padding:12mm 10mm 8mm;">
      ${A?`<div style="text-align:center;margin-bottom:2mm;"><div style="width:16mm;height:16mm;border-radius:50%;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;"><img src="${a(A)}" style="width:100%;height:100%;margin:0;object-fit:contain;display:block;" alt="โลโก้"/></div></div>`:""}
    <div style="text-align:center;font-weight:700;font-size:12pt;margin-bottom:3mm;">รายละเอียดสัปดาห์/คาบ/วันที่สอน</div>
    ${p(`<span>รายวิชา</span>${i("40mm",s.subject_name??"")}
           <span>&emsp;รหัสวิชา</span>${i("22mm",s.subject_code??"")}
           <span>&emsp;${v}</span>${i("",e,!0)}`)}
    ${p(`<span>${S}</span>${i("16mm",st(o.class_name))}
           <span>&emsp;ภาคเรียนที่</span>${i("10mm",$)}
           <span>&emsp;ปีการศึกษา</span>${i("18mm",c)}
           <span>&emsp;เวลา</span>${i("12mm")}
           <span>ชั่วโมง&emsp;จำนวน</span>${i("",d,!0)}
           <span>หน่วยกิต</span>`)}
    ${p(`<span>ครูผู้สอน</span>${i("80mm",(n==null?void 0:n.full_name)??"")}`)}
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
      <tbody>${r.join("")}</tbody>
    </table>
  </div>`}const Ft=["ข.ร.","ข.ส.","ม.ส.","ข.ป."];function It(t){return String(t??"").trim().replace(/\s+/g,"").replace(/\./g,"")==="มส"?"ม.ส.":String(t??"").trim()}function $e(t){var Y,Q;const{cls:o,ms:s,credit:d,prefix:n,cfg:e,students:c,scoreColumns:$,scoreMap:w,teacher:g,deptNameTH:b,deptHeadName:_,hrSamai:v,hrReligion:S,academicYear:C,semester:M,sessions:j,moralScores:A,moralMax:H}=t,f=a(e[`${n}SchoolName`]??e.samaiSchoolName??""),h=yt(e,n,!0),r=a(e[`${n}DirectorName`]??""),i=a(e[`${n}DirectorTitle`]||"ผู้อำนวยการ"),p=a(e[`${n}RegistrarName`]??""),m=a(e[`${n}RegistrarTitle`]||"ผู้ช่วยผู้อำนวยการฝ่ายทะเบียนวัดผลและประเมินผล"),u=a(_),y=j!=null&&j.length?Math.round(j.length/20):d*2,R=(j==null?void 0:j.length)??d*2*20,k=!!window._pp5HideScores,z=$.reduce((F,I)=>F+(I.max_score??0),0)+(H||0),D={4:0,"3.5":0,3:0,"2.5":0,2:0,"1.5":0,1:0,0:0},T={"ข.ร.":0,"ข.ส.":0,"ม.ส.":0,"ข.ป.":0};let B=0,N=0,O=0;if(!k)for(const F of c){const I=It(F.special_result);if(I&&Ft.includes(I)){T[I]++;continue}const x=w[F.id]??{},P=$.some(G=>x[G.id]!=null);if(P&&O++,z>0){const Z=($.reduce((tt,et)=>tt+(x[et.id]??0),0)+(Number(A==null?void 0:A[F.id])||0))/z*100,at=F.special_result,J=at&&/^[0-9]+(?:\.5)?$/.test(String(at))?Number(at):$t(Z),X=String(J);X in D&&D[X]++,P&&(J>0?B++:N++)}}const K=[[4,"80 - 100","จำนวนนักเรียนเข้าเรียน",c.length],["3.5","75 - 79","จำนวนนักเรียนเข้าสอบ",O],[3,"70 - 74","จำนวนนักเรียนไม่มีสิทธิ์สอบ (ข.ร.)",T["ข.ร."]],["2.5","65 - 69","จำนวนนักเรียนขาดสอบ (ข.ส.)",T["ข.ส."]],[2,"60 - 64","จำนวนนักเรียนไม่สมบูรณ์ (ม.ส.)",T["ม.ส."]],["1.5","55 - 59","จำนวนนักเรียนขาดการปฏิบัติงาน (ข.ป.)",T["ข.ป."]],[1,"50 - 54","จำนวนนักเรียนผ่าน (ผ)",B],[0,"0 - 49","จำนวนนักเรียนไม่ผ่าน (ม.ผ.)",N]].map(([F,I,x,P])=>`
    <tr>
      <td>${F}</td><td>${I}</td><td>${D[String(F)]||"-"}</td>
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
          <span class="voc-item">ชั้น <span class="voc-line-fill voc-short">${a(st(o.class_name))}</span></span>
          <span class="voc-item">ภาคเรียนที่ <span class="voc-line-fill voc-short">${M}</span></span>
          <span class="voc-item">ปีการศึกษา <span class="voc-line-fill voc-short">${C}</span></span>
          <span class="voc-item" style="margin-left:auto">แผนกวิชา <span class="voc-line-fill voc-medium">${a(b)}</span></span>
        </div>
        <div class="voc-info-row">
          <span class="voc-item" style="flex:1">รายวิชา <span class="voc-line-fill voc-long" style="flex:1">${a(s.subject_name??"")}</span></span>
          <span class="voc-item">รหัสวิชา <span class="voc-line-fill voc-medium">${a(s.subject_code??"")}</span></span>
        </div>
        <div class="voc-info-row voc-center" style="justify-content:center; gap:10mm">
          <span class="voc-item"><span class="voc-line-fill voc-short">${d}</span> หน่วยกิต</span>
          <span class="voc-item">เวลาเรียน <span class="voc-line-fill voc-short">${y}</span> ชั่วโมง/สัปดาห์</span>
          <span class="voc-item">รวมเวลาเรียน <span class="voc-line-fill voc-short">${R}</span> ชั่วโมง/ภาค</span>
        </div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูผู้สอน <span class="voc-line-fill voc-xlong" style="flex:1">${a((g==null?void 0:g.full_name)??"")}</span></span></div>
        <div class="voc-info-row"><span class="voc-item" style="width:100%">ครูที่ปรึกษาสามัญ <span class="voc-line-fill voc-xlong" style="flex:1">${a(((Y=v==null?void 0:v.teachers)==null?void 0:Y.full_name)??"")}</span></span></div>
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
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((g==null?void 0:g.full_name)??"")} )</div>
        <div class="voc-sign-block">ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนกวิชา<br><br>( ${u} )</div>
        <div class="voc-sign-block voc-sign-wide">ลงชื่อ <span class="voc-sig-line"></span> ${m}<br><br>( ${p} )</div>
      </div>

      <div class="voc-approve">อนุมัติผลการเรียน <span class="voc-check-box"></span>อนุมัติ <span class="voc-check-box"></span>ไม่อนุมัติ</div>
      <div class="voc-director">ลงชื่อ <span class="voc-sig-line"></span><br><br>( ${r} )<br>${i}${f}</div>
    </div>
  </section>`}const dt=2;function ke(t,o){const s=Math.ceil(((t==null?void 0:t.length)||0)/dt),d=Array.from({length:dt},(e,c)=>Array.from({length:s},($,w)=>{const g=t[c*s+w];return g?{sess:g,week:Math.ceil(g.n/o)}:null})),n=d.map(e=>e.map((c,$)=>{var g,b;if(!c)return null;if($>0&&((g=e[$-1])==null?void 0:g.week)===c.week)return 0;let w=1;for(let _=$+1;_<s&&((b=e[_])==null?void 0:b.week)===c.week;_++)w++;return w}));return{N:s,colData:d,colRS:n}}const Ut=233;function Se(t){const o=Math.max(6,...(t??[]).map(s=>(s.full_name??"").length));return Math.min(50,Math.max(30,o*2.3))}function je(t,o,s){const n=Math.max(o.length+3,15),e=Math.max(3,Math.min(7,Ut/n)),c=e<3.6?7.5:e<4.4?8.5:e<5.4?9.5:e<6.2?10.5:11.5,$=Array.from({length:n},(g,b)=>{const _=o[b];if(!_)return`<tr>
        <td class="voc-student-no"></td><td class="voc-student-id"></td><td class="voc-student-name"></td>
        ${Array.from({length:20},()=>"<td></td>").join("")}
        <td class="voc-score"></td>
      </tr>`;const v=t.attMap[_.id]??{},S=[];for(const[M,j]of Object.entries(v))j!=="present"&&S.push({n:parseInt(M),status:j});S.sort((M,j)=>M.n-j.n);const C=Array.from({length:20},(M,j)=>{const A=S[j];return A?`<td style="color:${A.status==="absent"?"#d00":A.status==="leave"?"#005bbb":"#e67e00"};font-weight:700;">${A.n}</td>`:"<td></td>"});return`<tr>
      <td class="voc-student-no voc-center">${b+1}</td>
      <td class="voc-student-id voc-center">${a(_.student_code??"")}</td>
      <td class="voc-student-name">${a(_.full_name??"")}</td>
      ${C.join("")}
      <td class="voc-score voc-center">-</td>
    </tr>`}),w=Array.from({length:20},(g,b)=>`<th class="voc-att">${b+1}</th>`).join("");return`
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
    <tbody>${$.join("")}</tbody>
  </table>`}function Ce(t,o){const{N:s,colData:d,colRS:n}=t,e=Math.max(1.6,Math.min(4.55,Ut/Math.max(1,s))),c=e<2.4?6:e<3.2?7:e<4?8:9.5,$=Array.from({length:s},(w,g)=>`<tr>${Array.from({length:dt},(_,v)=>{const S=d[v][g],C=n[v][g];if(!S)return'<td class="voc-sched-week"></td><td class="voc-sched-period"></td><td class="voc-sched-date"></td>';const M=C===0?"":`<td class="voc-sched-week voc-center" rowspan="${C}">${S.week}</td>`,j=o==null?void 0:o.has(S.sess.ds);return`${M}<td class="voc-sched-period voc-center">${S.sess.n}</td><td class="voc-sched-date voc-center" style="${j?"color:#c00;font-weight:700;":""}">${Tt(S.sess.ds)}</td>`}).join("")}</tr>`);return`
  <table class="voc-attendance voc-schedule-list" style="--att-row-h:${e.toFixed(2)}mm;font-size:${c}px">
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
    <tbody>${$.join("")}</tbody>
  </table>`}function Ae(t){const{students:o,sessions:s}=t,d=s!=null&&s.length?Math.round(s.length/20):1,n=ke(s,d),e=Se(o);return`
  <section class="voc-page">
    <div class="voc-page-inner voc-p2">
      <div class="voc-p2-title">แบบบันทึกการไม่มาเรียน</div>
      <div class="voc-att-flex">
        ${je(t,o,e)}
        ${Ce(n,t.holidaySet)}
      </div>
    </div>
  </section>`}const Ct=31;function Me(t,o=8){const s=a(t??"");if(s.length<=o)return s;const d=Math.ceil(s.length/2);let n=s.lastIndexOf(" ",d);return n<=0&&(n=s.indexOf(" ",d)),n<=0?s:`${s.slice(0,n)}<br>${s.slice(n+1)}`}function He(t,o,s){const{cls:d,teacher:n,deptHeadName:e,scoreColumns:c,scoreMap:$,moralScores:w,moralMax:g,moralColName:b,roundSettings:_}=t,v=(_==null?void 0:_.forcedGradeColor)==="black"?"black":"red",S=i=>i.assignment_type==="คะแนนพิเศษ",C=c.filter(i=>!S(i));c.filter(i=>S(i));const M=C.reduce((i,p)=>i+(p.max_score??0),0),j=M+(g||0),A=!!window._pp5HideScores,H=o.map((i,p)=>{if(A)return`<tr>
        <td class="voc-center">${s+p}</td><td class="voc-c-id"></td><td class="voc-c-name"></td>
        ${Array(C.length).fill("<td></td>").join("")}<td></td>
        <td></td><td></td><td></td><td></td>
      </tr>`;const m=$[i.id]??{},u=C.map(N=>rt(t.roundSettings,jt(N),m[N.id],N.column_type==="derived"?2:1)),y=C.reduce((N,O)=>N+(m[O.id]??0),0),R=(w==null?void 0:w[i.id])??"",k=y+(Number(R)||0),z=It(i.special_result),D=!!(z&&Ft.includes(z)),T=At(t.roundSettings,k),B=D?z:$t(j?T/j*100:0);return`<tr>
      <td class="voc-center">${s+p}</td>
      <td class="voc-c-id voc-center">${a(i.student_code??"")}</td>
      <td class="voc-c-name">${a(i.full_name??"")}</td>
      ${u.map(N=>`<td class="voc-center">${N}</td>`).join("")}
      <td class="voc-center voc-bold">${rt(t.roundSettings,"mid_subtotal",y)}</td>
      <td class="voc-center">${R}</td>
      <td class="voc-center voc-bold">${rt(t.roundSettings,"total",k)}</td>
      <td class="voc-center voc-bold" style="${D?`color:${v==="red"?"#c00":"#000"};`:""}">${B}</td>
      <td></td>
    </tr>`}),f=C.length+1+4,h=`<tr><td class="voc-center"></td><td></td><td></td>${Array(f).fill("<td></td>").join("")}</tr>`,r=H.concat(Array(Math.max(0,Ct-H.length)).fill(h));return`
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
            <th rowspan="2" class="voc-c-moral"><div class="voc-vtext">คะแนนคุณธรรม${b?`<br>(${a(b)})`:""}</div></th>
            <th rowspan="2" class="voc-c-total"><div class="voc-vtext">รวม</div></th>
            <th rowspan="3" class="voc-c-grade"><div class="voc-vtext">ระดับผล<br>การเรียน</div></th>
            <th rowspan="3" class="voc-c-note"><div class="voc-vtext">หมายเหตุ/<br>การสอบแก้ตัว</div></th>
          </tr>
          <tr class="voc-h-vertical">
            ${C.map(i=>`<th class="voc-c-obj"><div class="voc-vtext">${Me(i.assignment_name??"")}</div></th>`).join("")}
            <th class="voc-c-sum80"><div class="voc-vtext">รวม<br>คะแนนเก็บ</div></th>
          </tr>
          <tr class="voc-h-score">
            ${C.map(i=>`<th>${i.max_score??""}</th>`).join("")}<th>${M||""}</th>
            <th>${g||""}</th><th>${j||""}</th>
          </tr>
        </thead>
        <tbody>${r.join("")}</tbody>
      </table>
      <div class="voc-footer-sigs">
        <div>ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอน<br><br>( ${a((n==null?void 0:n.full_name)??"")} )</div>
        <div>ลงชื่อ <span class="voc-sig-line"></span> หัวหน้าแผนก<br><br>( ${a(e)} )</div>
      </div>
    </div>
  </section>`}function Re(t){const{students:o}=t,s=[];for(let d=0;d<o.length;d+=Ct)s.push(He(t,o.slice(d,d+Ct),d+1));return s.join("")}const ze=46,De=5.3,Oe=5.45;function Te(t){const o=Math.max(1,Math.ceil((t.content??"").length/ze));return Math.max(Oe,o*De)}function Ne(t){const{ms:o,teacher:s,courseDoc:d}=t,n=Array.isArray(d==null?void 0:d.voc_objectives)?d.voc_objectives:[],e=Array.isArray(d==null?void 0:d.voc_schedule)?d.voc_schedule:[],c=n.concat(Array.from({length:Math.max(0,10-n.length)},()=>({objective:"",competency:""}))),$=e.concat(Array.from({length:Math.max(0,20-e.length)},()=>({week:"",content:"",note:""}))),w=297,g=30,b=10,_=9.5,v=10,S=8,C=7,M=7,j=S+c.length*C,A=w-g-b-_-v-j-M,H=w-g-_-M,f=[];let h=[],r=0,i=A;for(const y of $){const R=Te(y);h.length&&r+R>i&&(f.push(h),h=[],r=0,i=H),h.push(y),r+=R}f.push(h);const p=`
      <div class="voc-course-title">จุดประสงค์การเรียนรู้และสมรรถนะรายวิชา ${a(o.subject_name??"")}</div>
      <div class="voc-course-code">รหัสวิชา ${a(o.subject_code??"")}</div>
      <table class="voc-objective-table">
        <thead><tr><th>จุดประสงค์การเรียนรู้</th><th>สมรรถนะรายวิชา</th></tr></thead>
        <tbody>${c.map(y=>`<tr><td>${a(y.objective)||"&nbsp;"}</td><td>${a(y.competency)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,m=(y,R)=>`
      <div class="voc-schedule-title">กำหนดการสอน${R?"":" (ต่อ)"}</div>
      <table class="voc-schedule-table">
        <colgroup><col style="width:13%"><col style="width:69%"><col style="width:18%"></colgroup>
        <thead><tr><th>สัปดาห์ที่</th><th>เนื้อหาที่สอน</th><th>หมายเหตุ</th></tr></thead>
        <tbody>${y.map(k=>`<tr><td>${a(k.week)||"&nbsp;"}</td><td>${a(k.content)||"&nbsp;"}</td><td>${a(k.note)||"&nbsp;"}</td></tr>`).join("")}</tbody>
      </table>`,u=`<div class="voc-sign-bottom">ลงชื่อ <span class="voc-sig-line"></span> ครูผู้สอนประจำวิชา<br><br>( ${a((s==null?void 0:s.full_name)??"")} )</div>`;return f.map((y,R)=>`
  <section class="voc-page">
    <div class="voc-page-inner voc-p4">
      ${R===0?p:""}
      ${m(y,R===0)}
      ${R===f.length-1?u:""}
    </div>
  </section>`).join("")}function St(t,o,s=null){const d=s??[Pt(t),Wt(t),Gt(t),Vt(t),Bt(t)];return`<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8"/>
  <title>${a(o)}</title>
  <style>${Lt()}</style>
</head>
<body>
  ${d.join(`
`)}
</body>
</html>`}function Ee(t){return`<!DOCTYPE html>
<html lang="th"><head>
<meta charset="UTF-8"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>${Lt()}
body{background:#fff;margin:0;}
@media print{@page{size:A4 portrait;margin:0;}.no-print{display:none!important;}}
</style></head>
<body>${t}</body></html>`}function Le(t){var H,f,h;(H=document.getElementById("pp5-viewer"))==null||H.remove();const o=((f=t.ms)==null?void 0:f.subject_group)==="ACDMVOC",s=o?[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>$e(t)},{label:"ไม่มาเรียน/วันที่สอน",fn:()=>Ae(t)},{label:"คะแนน",fn:()=>Re(t)},{label:"จุดประสงค์/กำหนดการสอน",fn:()=>Ne(t)}]:[{label:"ดูทั้งหมด",fn:null,all:!0},{label:"หน้าปก",fn:()=>Pt(t)},{label:"มาตรฐาน/ตัวชี้วัด",fn:()=>Wt(t)},{label:"บันทึกการไม่มาเรียน",fn:()=>Gt(t)},{label:"คะแนน",fn:()=>Vt(t)},{label:"วันที่สอน",fn:()=>Bt(t)}],d=s.slice(1).map((r,i)=>i+1),n=!!((h=t.cfg)!=null&&h.pp5PreviewEditEnabled),e={},c=document.createElement("div");c.id="pp5-viewer",c.style.cssText="position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;background:#374151;";const $=r=>"border:none;border-radius:6px;padding:6px 14px;cursor:pointer;font-family:Sarabun,sans-serif;font-size:13px;font-weight:600;white-space:nowrap;"+(r?"background:#2563eb;color:#fff;":"background:#4b5563;color:#d1d5db;");c.innerHTML=`
    <div style="background:#111827;padding:8px 12px;display:flex;align-items:center;gap:6px;flex-shrink:0;overflow-x:auto;">
      <button id="pp5-v-close" style="${$(!1)}background:#dc2626;color:#fff;">✕ ปิด</button>
      <button id="pp5-v-print" style="${$(!1)}background:#059669;color:#fff;">🖨️ พิมพ์หน้านี้</button>
      <button id="pp5-v-printall" style="${$(!1)}background:#7c3aed;color:#fff;">🖨️ พิมพ์ทั้งหมด</button>
      ${n?`<button id="pp5-v-edit" style="${$(!1)}background:#f59e0b;color:#fff;">✏️ แก้ไขข้อความ</button>`:""}
      <div style="width:1px;height:24px;background:#374151;flex-shrink:0;margin:0 2px;"></div>
      ${s.map((r,i)=>`
        <button class="pp5-vtab" data-i="${i}" style="${$(i===0)}">${r.label}</button>
      `).join("")}
      ${n?'<span id="pp5-v-edit-hint" style="display:none;color:#fbbf24;font-size:12px;margin-left:8px;white-space:nowrap;">กำลังแก้ไข — คลิกข้อความในหน้าเพื่อพิมพ์ทับได้เลย (ไม่กระทบข้อมูลจริงในระบบ)</span>':""}
    </div>
    <div style="flex:1;overflow:auto;display:flex;justify-content:center;align-items:flex-start;padding:20px;">
      <iframe id="pp5-iframe" style="border:none;box-shadow:0 4px 32px rgba(0,0,0,.5);background:#fff;width:210mm;height:297mm;" scrolling="no"></iframe>
    </div>`,document.body.appendChild(c);const w=c.querySelector("#pp5-iframe"),g=[...c.querySelectorAll(".pp5-vtab")],b=c.querySelector("#pp5-v-edit"),_=c.querySelector("#pp5-v-edit-hint");let v=null,S=!1;function C(r){return e[r]??s[r].fn()}function M(){var r;if(!(v==null||s[v].all))try{const i=(r=w.contentDocument)==null?void 0:r.body;i&&(e[v]=i.innerHTML)}catch{}}function j(r){var i;if(S=r&&n&&v!=null&&!s[v].all,b){const p=v!=null&&s[v].all;b.style.background=S?"#16a34a":"#f59e0b",b.textContent=S?"✅ เสร็จแล้ว":"✏️ แก้ไขข้อความ",b.title=p?'กดเพื่อไปหน้าปกแล้วเริ่มแก้ไข (แท็บ "ดูทั้งหมด" แก้ไขตรงๆ ไม่ได้)':"",b.style.opacity=p?"0.7":"1"}_&&(_.style.display=S?"inline":"none");try{const p=(i=w.contentDocument)==null?void 0:i.body;p&&(p.contentEditable=S?"true":"false",p.style.outline=S?"2px dashed #f59e0b":"none",p.style.outlineOffset=S?"-2px":"0")}catch{}}function A(r){M(),v=r,g.forEach((y,R)=>{R===r?(y.style.background="#2563eb",y.style.color="#fff"):(y.style.background="#4b5563",y.style.color="#d1d5db")});const i=s[r];let p,m;i.all?(p=St(t,"",d.map(C)),m="3000mm"):(p=Ee(C(r)),m=(o?[2,3]:[3,4]).includes(r)?"900mm":"297mm"),w.style.height=m;const u=w.contentDocument;u.open(),u.write(p),u.close(),j(!1)}A(0),g.forEach((r,i)=>r.addEventListener("click",()=>A(i))),c.querySelector("#pp5-v-close").addEventListener("click",()=>c.remove()),b==null||b.addEventListener("click",()=>{var r;if((r=s[v])!=null&&r.all){A(1),j(!0);return}j(!S)}),c.querySelector("#pp5-v-print").addEventListener("click",()=>{if(M(),s[v].all){const r=`ปพ5_${t.ms.subject_code??""}_${st(t.cls.class_name)}`;Rt(St(t,r,d.map(C)),{autoprint:!0});return}w.contentWindow.focus(),w.contentWindow.print()}),c.querySelector("#pp5-v-printall").addEventListener("click",()=>{M();const r=`ปพ5_${t.ms.subject_code??""}_${st(t.cls.class_name)}`,i=St(t,r,d.map(C));Rt(i,{autoprint:!0})})}async function Pe(t){_t("กำลังโหลดข้อมูลเอกสาร...","info");try{const o=await ye(t);Le(o);for(const s of o.docWarnings??[])_t(s,"warning")}catch(o){console.error("[pp5-doc]",o),_t("โหลดเอกสารไม่สำเร็จ: "+pe(o),"error")}}function Ke(t){var s;(s=document.getElementById("pp5-course-modal"))==null||s.remove();const o=document.createElement("div");o.id="pp5-course-modal",o.className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4",o.innerHTML=`
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
      <h3 class="font-bold text-gray-800 mb-1 text-base">📄 เปิด ปพ.5</h3>
      <p class="text-xs text-gray-400 mb-4">เลือกห้องที่ต้องการดู</p>
      <div class="space-y-2 mb-5">
        ${t.map(d=>`
        <label class="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
          <input type="radio" name="pp5-cls" class="w-4 h-4 accent-indigo-600" value="${d.id}" />
          <span class="text-sm text-gray-700">${a(st(d.class_name))}</span>
        </label>`).join("")}
      </div>
      <div class="flex gap-2">
        <button id="pp5-cancel" class="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">ยกเลิก</button>
        <button id="pp5-open-btn" class="flex-1 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700">เปิด</button>
      </div>
    </div>`,document.body.appendChild(o),o.querySelector("#pp5-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#pp5-open-btn").addEventListener("click",async()=>{const d=o.querySelector('input[name="pp5-cls"]:checked');if(!d){_t("กรุณาเลือกห้อง","warning");return}o.remove(),await Pe(parseInt(d.value))}),o.addEventListener("click",d=>{d.target===o&&o.remove()})}export{Ke as openPP5CourseModal,Pe as openPP5Doc};
