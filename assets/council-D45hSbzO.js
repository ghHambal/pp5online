import{s as h}from"./supabase-BV-W2lsh.js";/* empty css             *//* empty css                                  */import{b as Jr}from"./anti-pull-refresh-BGrI1pMY.js";import{a as g,g as k}from"./ui-CHdefT5i.js";import{g as Kr}from"./student-api-CIXkHU-1.js";import{getMyTeacherProfile as Xr,getMyHomeroomRooms as Zr,getTeachers as en}from"./api-CnonnVVn.js";import{uploadCouncilApplicationPhoto as tn,uploadCouncilCertificate as rn,uploadCertificateTemplateImage as nn,uploadCouncilTeacherPhoto as an,uploadCouncilTeacherSignature as sn}from"./storage-CuUjCgvI.js";import{i as on,o as ln,d as dn,c as cn,a as un,u as pn,C as _t,g as mn,b as bn}from"./certificate-engine-CjKzMmMi.js";import{o as vn}from"./certificate-editor-BwPNj_ZP.js";import{o as pr}from"./print-overlay-BVfxEd6n.js";import{b as xn}from"./browser-JP79f-a9.js";import"./version.js_v_10.22-mqYkeZoJ.js";import"./supabase-errors-BniCCodr.js";import"./teacher-views-utils-B68DuafG.js";import"./impersonation-0xVfgYVY.js";const fn=["council_logo_url","council_theme_color","council_name","council_theme_side_m","council_theme_side_w","council_term_start_semester","council_term_start_year","council_term_end_semester","council_term_end_year","council_min_gpa","council_min_gpa_religious","council_eligible_grade_levels","council_require_teacher_endorsement","council_require_peer_endorsement","council_min_certificates","council_min_attendance_pct","council_apply_opens_at","council_apply_closes_at","council_featured_phase","council_video_max_minutes","council_video_brief","council_doc_plan_areas","council_doc_project_types","council_doc_school_strategies","council_doc_education_standards","council_signer_advisor_name","council_signer_director_name","council_election_thank_you_message","council_visible_to_all","council_test_student_codes","council_modules","academicYear"];async function gn(){const{data:e,error:t}=await h.from("system_config").select("key,value").in("key",fn);if(t)throw t;return Object.fromEntries((e??[]).map(r=>[r.key,r.value]))}async function Ke(e){const t=Object.entries(e).map(([n,a])=>({key:n,value:a})),{error:r}=await h.from("system_config").upsert(t,{onConflict:"key"});if(r)throw r}async function Pe(){const{data:e,error:t}=await h.from("council_positions").select("*").eq("is_active",!0).order("gender").order("sort_order");if(t)throw t;return e??[]}async function _n({gender:e,positionName:t,seatsCount:r,isElected:n,sortOrder:a}){const{error:s}=await h.from("council_positions").insert({gender:e,position_name:t,seats_count:r,is_elected:!1,sort_order:a});if(s)throw s}async function yn(e,t){const{error:r}=await h.from("council_positions").update(t).eq("id",e);if(r)throw r}async function hn(e){const{error:t}=await h.from("council_positions").update({is_active:!1}).eq("id",e);if(t)throw t}async function wn(){const{data:e,error:t}=await h.from("council_interview_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function $n({name:e,weight:t}){const{error:r}=await h.from("council_interview_criteria").insert({name:e,weight:t});if(r)throw r}async function kn(e){const{error:t}=await h.from("council_interview_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function En({phrase:e,sortOrder:t}){const{error:r}=await h.from("council_endorsement_phrases").insert({phrase:e,sort_order:t??0});if(r)throw r}async function Sn(e){const{error:t}=await h.from("council_endorsement_phrases").delete().eq("id",e);if(t)throw t}async function je(e){let t=h.from("council_members").select("id, position_id, student_id, academic_year, status, source, can_create_activities, council_positions(gender, position_name, sort_order, is_elected), students(full_name, student_code, main_room, image_url, photo_url)").eq("status","active");const{data:r,error:n}=await t;if(n)throw n;return r??[]}async function dt(e){let t=h.from("council_election_config").select("*");const{data:r,error:n}=await t.order("gender");if(n)throw n;return r??[]}async function mr(e){const{data:t,error:r}=await h.from("council_applications").select(`id, student_id, position_id, status, motivation, photo_url, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      requested_peer_endorser_id,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      requested_peer_endorser:council_members!council_applications_requested_peer_endorser_id_fkey(students(full_name)),
      council_positions(position_name, gender, is_elected)`).eq("student_id",e).is("deleted_at",null).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function An(e){const{data:t,error:r}=await h.from("council_members").select("id, position_id, status, source, term_start_date, term_end_date, can_create_activities, council_positions(position_name, gender, is_elected)").eq("student_id",e).eq("status","active");if(r)throw r;return t??[]}async function In(e,t){const{error:r}=await h.rpc("set_council_member_can_create",{p_member_id:e,p_value:!!t});if(r)throw r}async function qn({studentId:e,positionId:t,academicYear:r,motivation:n,photoUrl:a,gpaGeneral:s,gpaReligious:i,introVideoUrl:o,certificates:c,requestedPeerEndorserId:p}){const{error:u}=await h.rpc("submit_council_application",{p_student_id:e,p_position_id:t,p_academic_year:r,p_motivation:n,p_photo_url:a,p_gpa_general:s,p_gpa_religious:i,p_intro_video_url:o,p_certificates:c??[],p_requested_peer_endorser_id:p??null});if(u)throw u}async function Cn(e,t){const{error:r}=await h.rpc("soft_delete_council_application",{p_application_id:e,p_reason:t});if(r)throw r}async function br(e){if(!(e!=null&&e.length))return[];const{data:t,error:r}=await h.from("council_applications").select("id, position_id, motivation, photo_url, status, created_at, gpa_general, gpa_religious, intro_video_url, council_positions(position_name, gender), students(id, full_name, student_code, main_room, image_url, photo_url)").eq("status","pending").is("endorsed_at",null).is("deleted_at",null).order("created_at");if(r)throw r;return(t??[]).filter(n=>{var a;return e.includes((a=n.students)==null?void 0:a.main_room)})}async function vr(){const{data:e,error:t}=await h.from("council_endorsement_phrases").select("*").order("sort_order");if(t)throw t;return e??[]}async function Ln({applicationId:e,teacherId:t,comment:r}){const{error:n}=await h.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString()}).eq("id",e);if(n)throw n}async function jn({applicationId:e,teacherId:t,comment:r}){const{error:n}=await h.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString(),status:"rejected"}).eq("id",e);if(n)throw n}async function Dn(e,t){const{data:r,error:n}=await h.from("council_applications").select(`id, position_id, motivation, photo_url, status, created_at, requested_peer_endorser_id,
      council_positions!inner(position_name, gender),
      students(id, full_name, student_code, main_room, image_url, photo_url)`).eq("status","pending").is("peer_endorsed_at",null).is("deleted_at",null).eq("council_positions.gender",e).eq("requested_peer_endorser_id",t).order("created_at");if(n)throw n;return r??[]}async function Tn({applicationId:e,memberId:t}){const{error:r}=await h.from("council_applications").update({requested_peer_endorser_id:t}).eq("id",e);if(r)throw r}async function Bn({applicationId:e,memberId:t,comment:r}){const{data:n,error:a}=await h.from("council_applications").select("requested_peer_endorser_id").eq("id",e).single();if(a)throw a;if(String(n.requested_peer_endorser_id)!==String(t))throw new Error("ใบสมัครนี้ไม่ได้ระบุให้คุณเป็นผู้รับรอง");const{error:s}=await h.from("council_applications").update({peer_endorsed_by_member_id:t,peer_endorsement_comment:r,peer_endorsed_at:new Date().toISOString()}).eq("id",e);if(s)throw s}async function Nn(e){let t=h.from("council_applications").select(`id, position_id, status, motivation, photo_url, academic_year, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      council_positions(id, position_name, gender, is_elected),
      students(id, full_name, student_code, main_room, image_url, photo_url, profile_id),
      council_interviews(id, scheduled_at, location, interviewer_teacher_id, result, score, scores, comment),
      council_candidates(id, election_config_id, ballot_number)`).is("deleted_at",null).order("created_at",{ascending:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:n}=await t;if(n)throw n;return r??[]}async function Mn({applicationId:e,existingInterviewId:t,scheduledAt:r,location:n,interviewerTeacherId:a}){const s={application_id:e,scheduled_at:r,location:n,interviewer_teacher_id:a};if(t){const{error:o}=await h.from("council_interviews").update(s).eq("id",t);if(o)throw o}else{const{error:o}=await h.from("council_interviews").insert(s);if(o)throw o}const{error:i}=await h.from("council_applications").update({status:"interview_scheduled"}).eq("id",e);if(i)throw i}async function Pn({interviewId:e,applicationId:t,score:r,scores:n,result:a,comment:s}){const{error:i}=await h.from("council_interviews").update({score:r,scores:n,result:a,comment:s}).eq("id",e);if(i)throw i;const o=a==="pass"?"interviewed":"rejected",{error:c}=await h.from("council_applications").update({status:o}).eq("id",t);if(c)throw c}async function On({applicationId:e,studentId:t,electionConfigId:r,campaignStatement:n,photoUrl:a}){var u;const{data:s,error:i}=await h.from("council_candidates").select("ballot_number").eq("election_config_id",r).order("ballot_number",{ascending:!1}).limit(1);if(i)throw i;const o=(((u=s==null?void 0:s[0])==null?void 0:u.ballot_number)??0)+1,{error:c}=await h.from("council_candidates").insert({election_config_id:r,application_id:e,student_id:t,ballot_number:o,campaign_statement:n,photo_url:a});if(c)throw c;const{error:p}=await h.from("council_applications").update({status:"candidate"}).eq("id",e);if(p)throw p}async function Rn({applicationId:e,positionId:t,studentId:r,academicYear:n}){const{error:a}=await h.from("council_members").insert({position_id:t,student_id:r,academic_year:n,source:"appointed",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(a)throw a;const{error:s}=await h.from("council_applications").update({status:"appointed"}).eq("id",e);if(s)throw s}async function xr(e){const t=(e??"").trim();if(t.length<2)return[];const{data:r,error:n}=await h.from("students").select("id, full_name, student_code, main_room, gender, image_url, photo_url").or(`full_name.ilike.%${t}%,student_code.ilike.%${t}%`).limit(15);if(n)throw n;return r??[]}async function Hn({positionId:e,studentId:t,academicYear:r,termStartDate:n,appointedByTeacherId:a}){const{error:s}=await h.from("council_members").insert({position_id:e,student_id:t,academic_year:r,source:"appointed",status:"active",term_start_date:n||new Date().toISOString().slice(0,10),appointed_by_teacher_id:a??null});if(s)throw s}async function Fn(e,{positionId:t,termStartDate:r,termEndDate:n}){const{error:a}=await h.from("council_members").update({position_id:t,term_start_date:r||null,term_end_date:n||null,updated_at:new Date().toISOString()}).eq("id",e);if(a)throw a}async function Gn(e){const{error:t}=await h.from("council_members").update({status:"removed",term_end_date:new Date().toISOString().slice(0,10),updated_at:new Date().toISOString()}).eq("id",e);if(t)throw t}async function fr({gender:e,academicYear:t}){const{data:r,error:n}=await h.from("council_election_config").select("*").eq("gender",e).eq("academic_year",t).maybeSingle();if(n)throw n;if(r)return r;const{data:a,error:s}=await h.from("council_election_config").insert({gender:e,academic_year:t}).select().single();if(s)throw s;return a}async function Wn({electionConfigId:e,opensAt:t,closesAt:r}){const{error:n}=await h.from("council_election_config").update({opens_at:t,closes_at:r}).eq("id",e);if(n)throw n}async function Lt(e){const{data:t,error:r}=await h.from("council_candidates").select(`id, ballot_number, campaign_statement, photo_url, student_id, application_id,
      slogan, vision, policies, experience,
      students(full_name, student_code, main_room, image_url, photo_url),
      council_applications(gpa_general, gpa_religious)`).eq("election_config_id",e).order("ballot_number");if(r)throw r;return t??[]}async function zn({candidateId:e,slogan:t,vision:r,policies:n,experience:a}){const{error:s}=await h.from("council_candidates").update({slogan:t,vision:r,policies:n,experience:a}).eq("id",e);if(s)throw s}async function $t(e){const t=e==="M"?["ชาย","M"]:["หญิง","W"],{count:r,error:n}=await h.from("students").select("id",{count:"exact",head:!0}).in("gender",t).or("is_active.is.null,is_active.eq.true");if(n)throw n;return r??0}async function gr(e){const{data:t,error:r}=await h.from("council_votes").select("candidate_id").eq("election_config_id",e);if(r)throw r;const n={};return(t??[]).forEach(a=>{n[a.candidate_id]=(n[a.candidate_id]??0)+1}),n}async function Un({electionConfigId:e,gender:t,academicYear:r}){const n=await Lt(e);if(!n.length)throw new Error("ยังไม่มีผู้สมัครในการเลือกตั้งนี้");const a=await gr(e),s=n.reduce((u,b)=>(a[b.id]??0)>(a[u==null?void 0:u.id]??-1)?b:u,null);if(!s)throw new Error("ยังไม่มีผู้ลงคะแนนเลย");const o=(await Pe()).find(u=>u.gender===t&&u.is_elected);if(!o)throw new Error("ไม่พบตำแหน่งที่กำหนดให้มาจากการเลือกตั้งของสภา"+(t==="M"?"ชาย":"หญิง"));const{error:c}=await h.from("council_election_config").update({results_published_at:new Date().toISOString()}).eq("id",e);if(c)throw c;const{error:p}=await h.from("council_members").insert({position_id:o.id,student_id:s.student_id,academic_year:r,source:"elected",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(p)throw p;return s}async function Vn(e){const[{data:t,error:r},{data:n,error:a}]=await Promise.all([h.from("council_positions").select("*").eq("gender",e).eq("is_active",!0).eq("is_elected",!1).order("sort_order"),h.from("council_members").select("position_id").eq("status","active")]);if(r)throw r;if(a)throw a;const s={};return(n??[]).forEach(i=>{s[i.position_id]=(s[i.position_id]??0)+1}),(t??[]).filter(i=>(s[i.id]??0)<i.seats_count)}async function Yn(e){const{data:t,error:r}=await h.from("council_applications").select(`id, position_id, motivation, photo_url, student_id,
      students(id, full_name, student_code, main_room, image_url, photo_url),
      council_positions!inner(id, position_name, gender, is_elected),
      council_interviews(score, comment)`).eq("status","interviewed").is("deleted_at",null).eq("council_positions.gender",e).eq("council_positions.is_elected",!1);if(r)throw r;return t??[]}async function Qn({applicationId:e,positionId:t,proposedByStudentId:r}){const{error:n}=await h.from("council_nominations").insert({application_id:e,position_id:t,proposed_by_student_id:r});if(n)throw n}async function Jn(e){const{data:t,error:r}=await h.from("council_nominations").select(`id, application_id, position_id, status, comment, created_at,
      council_positions!inner(position_name, gender),
      council_applications(motivation, photo_url, students(full_name, student_code, main_room, image_url, photo_url))`).eq("status","proposed").eq("council_positions.gender",e).order("created_at");if(r)throw r;return t??[]}async function Kn({nominationId:e,approve:t,teacherId:r,comment:n}){const{data:a,error:s}=await h.from("council_nominations").select("*").eq("id",e).single();if(s)throw s;const{error:i}=await h.from("council_nominations").update({status:t?"approved":"rejected",decided_by_teacher_id:r,decided_at:new Date().toISOString(),comment:n}).eq("id",e);if(i)throw i;if(t){const{data:o,error:c}=await h.from("council_applications").select("student_id, academic_year").eq("id",a.application_id).single();if(c)throw c;const{error:p}=await h.from("council_members").insert({position_id:a.position_id,student_id:o.student_id,academic_year:o.academic_year,source:"appointed",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(p)throw p;const{error:u}=await h.from("council_applications").update({status:"appointed"}).eq("id",a.application_id);if(u)throw u}}async function Xn(e){let t=h.from("council_activities").select("*, council_members!council_activities_owner_member_id_fkey(students(full_name))").order("activity_date",{ascending:!1,nullsFirst:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:n}=await t;if(n)throw n;return r??[]}async function Zn({title:e,detail:t,gender:r,activityDate:n,budget:a,ownerText:s,academicYear:i,openToGeneral:o,ownerMemberId:c,countsForEvaluation:p}){const{error:u}=await h.from("council_activities").insert({title:e,detail:t,gender:r||null,activity_date:n||null,budget:a||null,owner_text:s||null,academic_year:i,open_to_general:!!o,owner_member_id:c||null,counts_for_evaluation:p!==!1});if(u)throw u}async function Jt(e,t){const{error:r}=await h.from("council_activities").update({status:t,updated_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function ea(e,t,r){let n=h.from("council_activities").select("id, title, activity_date, status, gender, counts_for_evaluation, open_to_general").in("status",["ongoing","completed"]);r&&(n=n.eq("academic_year",r)),t&&(n=n.or(`gender.is.null,gender.eq.${t}`));const[{data:a,error:s},{data:i,error:o}]=await Promise.all([n.order("activity_date",{ascending:!1}),h.from("council_activity_attendance").select("activity_id, checked_in_at").eq("student_id",e)]);if(s)throw s;if(o)throw o;return{activities:a??[],myAttendance:i??[]}}async function ta(e){const{data:t,error:r}=await h.from("council_activity_attendance").select("student_id").eq("activity_id",e);if(r)throw r;return new Set((t??[]).map(n=>n.student_id))}async function ra(e){const{data:t,error:r}=await h.from("council_activity_attendance").select("student_id, checked_in_at, students(full_name, student_code, main_room, image_url, photo_url)").eq("activity_id",e).order("checked_in_at");if(r)throw r;return t??[]}async function _r({activityId:e,studentId:t}){const{data:r}=await h.from("council_members").select("id").eq("student_id",t).eq("status","active").maybeSingle(),{error:n}=await h.from("council_activity_attendance").insert({activity_id:e,student_id:t,member_id:(r==null?void 0:r.id)??null});if(n)throw n}async function na({activityId:e,studentId:t}){const{error:r}=await h.from("council_activity_attendance").delete().eq("activity_id",e).eq("student_id",t);if(r)throw r}async function aa(e){const{data:t,error:r}=await h.from("council_activity_certificate_rules").select("*").eq("activity_id",e).maybeSingle();if(r)throw r;return t}async function sa({activityId:e,templateId:t,minAttendanceCount:r,requiredDates:n,notes:a}){const{error:s}=await h.from("council_activity_certificate_rules").upsert({activity_id:e,template_id:t||null,min_attendance_count:r||null,required_dates:n??[],notes:a||null,updated_at:new Date().toISOString()},{onConflict:"activity_id"});if(s)throw s}async function ia(e){const{data:t,error:r}=await h.from("council_activity_certificates").select("*").eq("activity_id",e);if(r)throw r;return t??[]}async function oa({activityId:e,studentId:t,decision:r,comment:n,decidedByTeacherId:a,decidedByMemberId:s}){const{error:i}=await h.from("council_activity_certificates").upsert({activity_id:e,student_id:t,override_decision:r,comment:n||null,decided_by_teacher_id:a||null,decided_by_member_id:s||null,updated_at:new Date().toISOString()},{onConflict:"activity_id,student_id"});if(i)throw i}async function la(e){const{data:t,error:r}=await h.from("council_routines").select("*").eq("member_id",e).eq("is_active",!0).order("day_of_week");if(r)throw r;return t??[]}async function da(e,t){if(!(e!=null&&e.length))return new Set;const{data:r,error:n}=await h.from("council_routine_logs").select("routine_id").in("routine_id",e).eq("week_start",t);if(n)throw n;return new Set((r??[]).map(a=>a.routine_id))}async function ca({memberId:e,dayOfWeek:t,timeRange:r,task:n,location:a}){const{error:s}=await h.from("council_routines").insert({member_id:e,day_of_week:t,time_range:r,task:n,location:a});if(s)throw s}async function ua(e){const{error:t}=await h.from("council_routines").update({is_active:!1}).eq("id",e);if(t)throw t}async function pa({routineId:e,weekStart:t,done:r}){if(r){const{error:n}=await h.from("council_routine_logs").insert({routine_id:e,week_start:t});if(n)throw n}else{const{error:n}=await h.from("council_routine_logs").delete().eq("routine_id",e).eq("week_start",t);if(n)throw n}}async function ma(e){const{data:t,error:r}=await h.from("council_assignments").select("*").eq("member_id",e).order("due_date",{ascending:!0,nullsFirst:!1});if(r)throw r;return t??[]}async function ba(e){const{data:t,error:r}=await h.from("council_assignments").select(`id, task, due_date, status, created_at,
      council_members!inner(id, position_id, council_positions!inner(gender, position_name), students(full_name, student_code, main_room, image_url, photo_url))`).eq("council_members.council_positions.gender",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function va({memberId:e,task:t,dueDate:r,assignedByStudentId:n}){const{error:a}=await h.from("council_assignments").insert({member_id:e,task:t,due_date:r||null,assigned_by_student_id:n});if(a)throw a}async function xa(e,t){const{error:r}=await h.from("council_assignments").update({status:t}).eq("id",e);if(r)throw r}async function fa(e){const{error:t}=await h.from("council_assignments").delete().eq("id",e);if(t)throw t}async function ga(){const{data:e,error:t}=await h.from("council_announcements").select("*, teachers(full_name), students(full_name)").order("pinned",{ascending:!1}).order("created_at",{ascending:!1});if(t)throw t;return e??[]}async function _a({type:e,audience:t,title:r,body:n,pinned:a,postedByTeacherId:s,postedByStudentId:i}){const{error:o}=await h.from("council_announcements").insert({type:e,audience:t,title:r,body:n,pinned:a,posted_by_teacher_id:s||null,posted_by_student_id:i||null});if(o)throw o}async function ya(e){const{data:t,error:r}=await h.from("council_announcement_acks").select("announcement_id").eq("student_id",e);if(r)throw r;return new Set((t??[]).map(n=>n.announcement_id))}async function ha({announcementId:e,studentId:t}){const{error:r}=await h.from("council_announcement_acks").insert({announcement_id:e,student_id:t});if(r)throw r}async function wa(){const{data:e,error:t}=await h.from("council_announcement_acks").select("announcement_id");if(t)throw t;const r={};return(e??[]).forEach(n=>{r[n.announcement_id]=(r[n.announcement_id]??0)+1}),r}async function $a(){const{count:e,error:t}=await h.from("students").select("id",{count:"exact",head:!0}).or("is_active.is.null,is_active.eq.true");if(t)throw t;return e??0}async function ka(){const{data:e,error:t}=await h.from("council_evaluation_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function Ea({name:e,weight:t}){const{error:r}=await h.from("council_evaluation_criteria").insert({name:e,weight:t});if(r)throw r}async function Sa(e){const{error:t}=await h.from("council_evaluation_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function Aa(e){const{data:t,error:r}=await h.from("council_evaluations").select("*").eq("academic_year",e);if(r)throw r;return t??[]}async function Ia({memberId:e,academicYear:t,scores:r,totalScore:n,maxScore:a,decision:s,comment:i,evaluatorTeacherId:o}){const{error:c}=await h.from("council_evaluations").upsert({member_id:e,academic_year:t,scores:r,total_score:n,max_score:a,decision:s,comment:i,evaluator_teacher_id:o,evaluated_at:new Date().toISOString(),updated_at:new Date().toISOString()},{onConflict:"member_id,academic_year"});if(c)throw c}async function qa({evaluationId:e,certificateNo:t}){const{error:r}=await h.from("council_evaluations").update({certificate_no:t,certificate_issued_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function Ca(e){const{data:t,error:r}=await h.from("council_documents").select("*, council_positions(position_name, gender)").eq("academic_year",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}const ct={title:"title",planArea:"plan_area",projectType:"project_type",schoolStrategy:"school_strategy",educationStandard:"education_standard",responsiblePersons:"responsible_persons",rationale:"rationale",objectives:"objectives",goalsQuantitative:"goals_quantitative",goalsQualitative:"goals_qualitative",workSteps:"work_steps",durationText:"duration_text",locationText:"location_text",budgetItems:"budget_items",stakeholders:"stakeholders",evaluationItems:"evaluation_items",expectedResults:"expected_results",positionId:"position_id"};async function La(e){const t={};Object.entries(e).forEach(([a,s])=>{ct[a]&&(t[ct[a]]=s)}),t.origin=e.origin,t.academic_year=e.academicYear,t.created_by_student_id=e.createdByStudentId||null,t.created_by_teacher_id=e.createdByTeacherId||null;const{data:r,error:n}=await h.from("council_documents").insert(t).select().single();if(n)throw n;return r}async function ja(e,t){const r={};Object.entries(t).forEach(([a,s])=>{ct[a]&&(r[ct[a]]=s)}),r.updated_at=new Date().toISOString();const{error:n}=await h.from("council_documents").update(r).eq("id",e);if(n)throw n}async function Da(e){const{data:t,error:r}=await h.from("council_documents").select("origin").eq("id",e).single();if(r)throw r;const n=t.origin==="council"?"pending_advisor":"pending_dept_head",{error:a}=await h.from("council_documents").update({status:n,updated_at:new Date().toISOString(),last_rejected_stage:null,last_rejected_by_teacher_id:null,last_rejected_at:null,last_rejection_comment:null}).eq("id",e);if(a)throw a}async function jt({id:e,approve:t,teacherId:r,comment:n,stage:a,decidedCol:s,decidedAtCol:i,commentCol:o,signatureCol:c,signatureUrl:p,nextStatus:u}){const b=new Date().toISOString();if(t){const _={status:u,updated_at:b,[s]:r,[i]:b,[o]:n||null};c&&(_[c]=p||null);const{error:f}=await h.from("council_documents").update(_).eq("id",e);if(f)throw f}else{const{error:_}=await h.from("council_documents").update({status:"draft",updated_at:b,last_rejected_stage:a,last_rejected_by_teacher_id:r,last_rejected_at:b,last_rejection_comment:n}).eq("id",e);if(_)throw _}}async function Ta({id:e,approve:t,teacherId:r,comment:n}){return jt({id:e,approve:t,teacherId:r,comment:n,stage:"advisor",decidedCol:"advisor_decided_by_teacher_id",decidedAtCol:"advisor_decided_at",commentCol:"advisor_comment",nextStatus:"pending_dept_head"})}async function Ba({id:e,approve:t,teacherId:r,comment:n,signatureUrl:a}){return jt({id:e,approve:t,teacherId:r,comment:n,stage:"dept_head",decidedCol:"dept_head_decided_by_teacher_id",decidedAtCol:"dept_head_decided_at",commentCol:"dept_head_comment",signatureCol:"dept_head_signature_url",signatureUrl:a,nextStatus:"pending_director"})}async function Na({id:e,approve:t,teacherId:r,comment:n,signatureUrl:a}){return jt({id:e,approve:t,teacherId:r,comment:n,stage:"director",decidedCol:"director_decided_by_teacher_id",decidedAtCol:"director_decided_at",commentCol:"director_comment",signatureCol:"director_signature_url",signatureUrl:a,nextStatus:"approved"})}async function yt(e){const{data:t,error:r}=await h.from("teachers").select("id, full_name, teacher_code, image_url, signature_url, category").contains("positions",[e]).order("full_name");if(r)throw r;return t??[]}async function Ma(e,t){const{data:r,error:n}=await h.from("teachers").select("positions").eq("id",e).single();if(n)throw n;const a=Array.from(new Set([...r.positions??[],t])),{error:s}=await h.from("teachers").update({positions:a}).eq("id",e);if(s)throw s}async function Pa(e,t){const{data:r,error:n}=await h.from("teachers").select("positions").eq("id",e).single();if(n)throw n;const a=(r.positions??[]).filter(i=>i!==t),{error:s}=await h.from("teachers").update({positions:a}).eq("id",e);if(s)throw s}async function yr(e){const{data:t,error:r}=await h.from("council_advisor_positions").select("position_id").eq("teacher_id",e);if(r)throw r;return(t??[]).map(n=>n.position_id)}async function Oa(e,t){const{error:r}=await h.from("council_advisor_positions").delete().eq("teacher_id",e);if(r)throw r;if(t.length){const{error:n}=await h.from("council_advisor_positions").insert(t.map(a=>({teacher_id:e,position_id:a})));if(n)throw n}}async function Ra(){const{data:e,error:t}=await h.from("council_advisor_positions").select("teacher_id, position_id");if(t)throw t;return e??[]}async function Ha(e,t){const{error:r}=await h.from("teachers").update({signature_url:t}).eq("id",e);if(r)throw r}async function Fa(e,t){const{error:r}=await h.from("teachers").update({image_url:t}).eq("id",e);if(r)throw r}function De(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),n=t.createGain();r.connect(n),n.connect(t.destination),e==="success"?(r.type="sine",r.frequency.setValueAtTime(880,t.currentTime),n.gain.setValueAtTime(.08,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),r.start(),r.stop(t.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,t.currentTime),n.gain.setValueAtTime(.12,t.currentTime),n.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),r.start(),r.stop(t.currentTime+.3))}catch{}}async function Ga(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>e(window.Html5Qrcode),r.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}function he(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Wa(e){var j;const{activityId:t,activityTitle:r,members:n,alreadyChecked:a,onCheckedIn:s,onUndo:i,openToGeneral:o}=e;(j=document.getElementById("council-checkin-overlay"))==null||j.remove();const c=document.createElement("div");c.id="council-checkin-overlay",c.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",c.innerHTML=`
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนเช็คอินกิจกรรม</h3>
        <p class="text-xs text-slate-400 truncate">${he(r??"")}</p>
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
          ยกกล้องส่อง QR ของ${o?"นักเรียน":"สมาชิกสภา"}เพื่อเช็คอิน
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
    </div>`,document.body.appendChild(c);const p=[];let u=null,b=null,_=0;const f=new Set(a??[]),m=()=>{const A=c.querySelector("#ccs-history-list"),y=c.querySelector("#ccs-history-count");if(y.textContent=`${p.length} คน`,!p.length){A.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}A.innerHTML=p.map(w=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${he(w.name)}</span>
        <span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span>
        <button data-ccs-undo="${he(w.studentId)}" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>
      </div>`).join("")};async function x(A){var S;const y=n.find(q=>{var T;return((T=q.students)==null?void 0:T.student_code)===A});if(y)return{studentId:y.student_id,name:((S=y.students)==null?void 0:S.full_name)??"—"};if(!o)return null;const $=(await xr(A).catch(()=>[])).find(q=>q.student_code===A);return $?{studentId:$.id,name:$.full_name}:null}async function E(A){const y=c.querySelector("#ccs-camera-container"),w=c.querySelector("#ccs-feedback"),$=q=>{y.classList.add(q?"ccs-flash-success":"ccs-flash-error"),setTimeout(()=>y.classList.remove(q?"ccs-flash-success":"ccs-flash-error"),500)},S=await x(A);if(!S){De("error"),$(!1),w.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${o?"นักเรียน":"สมาชิกสภา"}รหัสนี้</div>`;return}if(f.has(S.studentId)){De("error"),$(!1),w.innerHTML=`<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${he(S.name)} เช็คอินไปแล้ว</div>`;return}try{await _r({activityId:t,studentId:S.studentId}),f.add(S.studentId),De("success"),$(!0),w.innerHTML=`<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ เช็คอิน ${he(S.name)} สำเร็จ</div>`,p.unshift({name:S.name,studentId:S.studentId}),m(),s==null||s(S.studentId)}catch(q){De("error"),$(!1),w.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${he(k(q))}</div>`,g("เช็คอินไม่สำเร็จ: "+k(q),"error")}}async function I(A){let y=A;if(A.startsWith("SQ:")){const[,w,$]=A.split(":"),S=Math.floor(Date.now()/1e3)-parseInt($,10);if(S>60||S<-60){const q=c.querySelector("#ccs-feedback"),T=c.querySelector("#ccs-camera-container");De("error"),T.classList.add("ccs-flash-error"),setTimeout(()=>T.classList.remove("ccs-flash-error"),500),q.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>';return}y=w}await E(y)}c.querySelector("#ccs-manual-form").addEventListener("submit",async A=>{A.preventDefault();const y=c.querySelector("#ccs-manual-code"),w=y.value.trim();w&&(await E(w),y.value="",y.focus())}),c.querySelector("#ccs-history-list").addEventListener("click",async A=>{const y=A.target.closest("[data-ccs-undo]");if(!y)return;const w=Number(y.dataset.ccsUndo);y.disabled=!0;try{await na({activityId:t,studentId:w}),f.delete(w);const $=p.findIndex(S=>S.studentId===w);$!==-1&&p.splice($,1),m(),i==null||i(w)}catch($){g("ยกเลิกไม่สำเร็จ: "+k($),"error"),y.disabled=!1}}),c.querySelector("#ccs-close").addEventListener("click",async()=>{if(u)try{await u.stop()}catch{}c.remove()}),(async()=>{try{const A=await Ga();u=new A("ccs-camera-reader"),await u.start({facingMode:"environment"},{fps:25,aspectRatio:1},y=>{y===b&&Date.now()-_<2e3||(b=y,_=Date.now(),I(y))},()=>{})}catch(A){g("ไม่สามารถเปิดกล้องได้: "+k(A),"error"),c.remove()}})()}const d=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Dt=document.getElementById("council-content"),D={M:"ชาย",W:"หญิง"},ce=e=>e==="ชาย"||e==="M"?"M":e==="หญิง"||e==="W"?"W":null,N=(e,t="w-10 h-12")=>e!=null&&e.photo_url||e!=null&&e.image_url?`<img src="${d(e.photo_url||e.image_url)}" class="${t} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`:`<div class="${t} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${d(((e==null?void 0:e.full_name)||"?").charAt(0))}</div>`,Tt={pending:"รอดำเนินการ",interview_scheduled:"นัดสัมภาษณ์แล้ว",interviewed:"สัมภาษณ์แล้ว",candidate:"ผู้สมัครเลือกตั้ง",appointed:"ได้รับแต่งตั้ง",rejected:"ไม่ผ่าน"};let l=null,U="overview",ut=!1,B=1,L={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},xe=null,X=null;const hr=5;function Oe(){var e;return Number((e=l==null?void 0:l.cfg)==null?void 0:e.council_min_certificates)||hr}const wr="ม.3,ม.4,ม.5";function $r(){var e;return String(((e=l==null?void 0:l.cfg)==null?void 0:e.council_eligible_grade_levels)||wr).split(/[,\n]/).map(t=>t.trim()).filter(Boolean)}function pt(e){const t=bt(e);return!!t&&$r().includes(t)}function kt(e){const t=$r().join(", "),r=bt(e);return r?`ไม่สามารถสมัครสภานักเรียนได้ การรับสมัครครั้งนี้เปิดสำหรับระดับ ${t} เท่านั้น ระดับชั้นปัจจุบันของคุณ: ${r}`:"ไม่สามารถสมัครสภานักเรียนได้ ไม่พบระดับชั้นจากห้องสามัญหรือห้องศาสนา กรุณาติดต่อผู้ดูแลระบบ"}function Re(e){return Array.from({length:e},()=>({file:null,title:"",previewUrl:null,isPdf:!1}))}let M=Re(hr),we=!1,R=null;function tt(){ut=!1,B=1,L={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},xe=null,X&&URL.revokeObjectURL(X),X=null,M.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),M=Re(Oe()),we=!1}function Bt(){return l!=null&&l.student?`council_apply_draft_${l.student.id}`:null}function V(){const e=Bt();if(e)try{localStorage.setItem(e,JSON.stringify({step:B,data:L,certTitles:M.map(t=>t.title),savedAt:Date.now()}))}catch{}}function za(){const e=Bt();if(!e)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function Kt(){const e=Bt();e&&localStorage.removeItem(e)}let He=null,se=null,C=null,$e=null,be=null,Fe=null,pe="all",ee="M",rt="",ke="",Be="",Ne="",te=null,H=null,Et=null;const ue={};let Ee=null,me=!1;const St={};let P=null,F=null;const ie={};let W=null,At=null;const Se={},Nt={},Ge={},Mt={};let mt=null,le=null,de=null,nt=null,at="all",st=!1,Me="general",re=null,oe=null;const Xt=[{id:"general",label:"ทั่วไป"},{id:"positions",label:"ตำแหน่ง"},{id:"criteria",label:"เกณฑ์และข้อความ"},{id:"modules",label:"โมดูล"}],Ua={candidates:"ว่าที่ประธาน / ผลเลือกตั้ง",news:"ประกาศ",interview:"ตารางสัมภาษณ์",appoint:"แต่งตั้งตรง",chairteam:"เสนอคณะทำงาน",chairtasks:"มอบหมายงาน",evaluate:"ประเมินการปฏิบัติหน้าที่",certissue:"ออกเกียรติบัตร",docs:"เอกสารโครงการ",perms:"มอบสิทธิ์ครู (ยังไม่สร้างหน้า)"};function Pt(){try{return{...JSON.parse(l.cfg.council_modules||"{}")}}catch{return{}}}async function kr(){re=await wn().catch(()=>[]),v()}async function Va(){oe=await vr().catch(()=>[]),v()}const Ya={apply:{title:"📝 สมัครสภานักเรียน",subtabs:[{id:"new",label:"สมัครตำแหน่งใหม่"},{id:"mine",label:"ใบสมัครของฉัน"}]},election:{title:"🗳️ การเลือกตั้งประธานสภา",subtabs:[{id:"status",label:"สถานะการเลือกตั้ง"}]}};async function Qa(){var Z,ne;Jr();const{data:{session:e}}=await h.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:t}=await h.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single(),r=t==null?void 0:t.role,n=r==="admin"||(t==null?void 0:t.is_also_admin)===!0,s={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[r]||"index.html";document.getElementById("council-back-btn-desktop").href=s,document.getElementById("council-back-btn-mobile").href=s;const[i,o,c,p]=await Promise.all([gn(),Pe(),je(),dt()]);Sr(i);let u=null,b=[],_=[];r==="student"&&(u=await Kr().catch(()=>null));const f=(i.council_test_student_codes||"").split(/[\s,]+/).map(O=>O.trim()).filter(Boolean),m=r==="student"&&!!u&&f.includes(u.student_code);if(i.council_visible_to_all==="false"&&!n&&!m){Ot(!1),Dt.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`;return}r==="student"&&u&&([b,_]=await Promise.all([mr(u.id).catch(()=>[]),An(u.id).catch(()=>[])]));let x=null,E=[],I=[],j=[];r==="teacher"&&(x=await Xr(e.user.id).catch(()=>null),x&&(E=(await Zr(x.id).catch(()=>[])).filter(G=>G.category==="สามัญ").map(G=>G.main_room),[I,j]=await Promise.all([br(E).catch(()=>[]),vr().catch(()=>[])])));const A=r==="student"&&_.some(O=>{var G;return(G=O.council_positions)==null?void 0:G.is_elected}),y=A||_.some(O=>O.can_create_activities),w=((ne=(Z=_.find(O=>{var G;return(G=O.council_positions)==null?void 0:G.is_elected}))==null?void 0:Z.council_positions)==null?void 0:ne.gender)??null,$=r==="teacher"&&!!x&&(x.position==="council_advisor"||(x.positions??[]).includes("council_advisor")),S=r==="teacher"&&!!x&&(x.position==="student_affairs_head"||(x.positions??[]).includes("student_affairs_head")),q=r==="teacher"&&!!x&&(x.position==="school_director"||(x.positions??[]).includes("school_director")),T=r==="teacher"&&!!x&&(x.position==="executive"||(x.positions??[]).includes("executive"));l={role:r,isAdmin:n,isChair:A,isCouncilAdvisor:$,isStudentAffairsHead:S,isSchoolDirector:q,isExecutive:T,canCreateActivities:y,chairGender:w,student:u,applications:b,membership:_,positions:o,members:c,elections:p,cfg:i,teacher:x,homeroomMainRooms:E,pendingEndorsements:I,endorsementPhrases:j},P=Number(i.academicYear)||new Date().getFullYear()+543,r==="teacher"&&I.length&&(U="endorse"),v()}async function Er(){l!=null&&l.student&&(l.applications=await mr(l.student.id).catch(()=>l.applications))}async function Ja(){l!=null&&l.teacher&&(l.pendingEndorsements=await br(l.homeroomMainRooms).catch(()=>l.pendingEndorsements))}function Ot(e){document.getElementById("council-sidebar").style.display=e?"":"none",document.getElementById("council-bottom-tabs").style.display=e?"":"none"}function Sr(e){const t=e.council_name||"ระบบสภานักเรียน";if(document.title=t,document.getElementById("council-title").textContent=t,document.getElementById("council-title-mobile").textContent=t,e.council_logo_url){const r=document.getElementById("council-logo");r.src=e.council_logo_url,r.classList.remove("hidden"),document.getElementById("council-logo-fallback").classList.add("hidden")}}const ht={main:{label:"หน้าหลัก",icon:"🏠"},council:{label:"งานสภา",icon:"👥"},election:{label:"เลือกตั้ง",icon:"🗳️"},teacherWork:{label:"งานครู",icon:"📋"},system:{label:"ระบบ",icon:"⚙️"}};function Ka(){const e=[{id:"overview",icon:"🏠",label:"หน้าหลัก",group:"main"}];e.push({id:"news",icon:"📣",label:"ประกาศ",group:"council"}),e.push({id:"roster",icon:"🏛️",label:"สภาของเรา",group:"council"}),e.push({id:"activities",icon:"📅",label:"กิจกรรม",group:"council"}),(l.isChair||l.isAdmin||l.isCouncilAdvisor)&&e.push({id:"chairteam",icon:"👔",label:"เสนอคณะทำงาน",group:"council"}),l.isChair&&e.push({id:"assignments",icon:"📌",label:"มอบหมายงาน",group:"council"}),l.membership.length&&e.push({id:"myduty",icon:"🎫",label:"หน้าที่/งานของฉัน",group:"council"}),l.membership.length&&e.push({id:"mysummary",icon:"📊",label:"สรุปของฉัน",group:"council"}),l.membership.length&&l.cfg.council_require_peer_endorsement==="true"&&e.push({id:"peerEndorse",icon:"✋",label:"รับรองผู้สมัคร (สภา)",group:"council"}),e.push({id:"candidates",icon:"🗳️",label:"ว่าที่ประธาน",group:"election"}),e.push({id:"result",icon:"📊",label:"ผลเลือกตั้ง",group:"election"}),l.role==="teacher"&&l.pendingEndorsements.length&&e.push({id:"endorse",icon:"✋",label:"รับรองผู้สมัคร",badge:l.pendingEndorsements.length,group:"teacherWork"});const t=l.isAdmin||l.isCouncilAdvisor;t&&e.push({id:"apps",icon:"📋",label:"ใบสมัคร",group:"teacherWork"}),(t||l.membership.length)&&e.push({id:"eval",icon:"🎖️",label:"ประเมิน/เกียรติบัตร",group:"teacherWork"}),(t||l.isChair||l.isStudentAffairsHead||l.isSchoolDirector)&&e.push({id:"docs",icon:"📄",label:"เอกสารโครงการ",group:"teacherWork"}),(l.isAdmin||l.isExecutive)&&e.push({id:"dashboard",icon:"📊",label:"ภาพรวม",group:"system"}),t&&e.push({id:"settings",icon:"⚙️",label:"ตั้งค่า",group:"system"}),l.isAdmin&&e.push({id:"perms",icon:"🔑",label:"มอบสิทธิ์",group:"system"}),(l.isCouncilAdvisor||l.isStudentAffairsHead||l.isSchoolDirector)&&e.push({id:"myCouncilProfile",icon:"✍️",label:"โปรไฟล์ของฉัน",group:"system"});const r=Pt(),n=new Set;return r.candidates===!1&&(n.add("candidates"),n.add("result")),r.news===!1&&n.add("news"),r.evaluate===!1&&n.add("eval"),r.docs===!1&&n.add("docs"),r.chairteam===!1&&n.add("chairteam"),r.chairtasks===!1&&n.add("assignments"),e.filter(a=>!n.has(a.id))}let fe=null;function Xa(e){var s;const t=Object.keys(ht);document.getElementById("council-sidebar-nav").innerHTML=t.map(i=>{const o=e.filter(c=>c.group===i);return o.length?`
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${d(ht[i].label)}</p>
        ${o.map(c=>`
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${c.id===U?"bg-[var(--hero-3)] text-white":"text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white"}" data-view="${c.id}">
            <span>${c.icon}</span> ${d(c.label)}
            ${c.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${c.badge}</span>`:""}
          </button>`).join("")}
      </div>`:""}).join("");const r=t.map(i=>({id:i,...ht[i],items:e.filter(o=>o.group===i)})).filter(i=>i.items.length),n=(s=r.find(i=>i.items.some(o=>o.id===U))||r[0])==null?void 0:s.id;document.getElementById("council-bottom-tabs").innerHTML=`<div class="flex">${r.map(i=>{const o=i.id===n,c=i.items.reduce((p,u)=>p+(u.badge||0),0);return`
    <button type="button" class="council-nav-group-btn relative flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${o?"text-[var(--primary)]":"text-[var(--muted)]"}" data-group="${i.id}">
      <span class="text-xl">${i.icon}</span>
      <span class="text-[0.625rem] font-medium">${d(i.label)}</span>
      ${c?`<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${c}</span>`:""}
    </button>`}).join("")}</div>`,document.querySelectorAll(".council-nav-link").forEach(i=>{i.addEventListener("click",()=>{U=i.dataset.view,v()})}),document.querySelectorAll(".council-nav-group-btn").forEach(i=>{i.addEventListener("click",()=>{const o=r.find(c=>c.id===i.dataset.group);o.items.length===1?(U=o.items[0].id,fe=null,v()):(fe=fe===o.id?null:o.id,Zt(e))})});const a=e.find(i=>i.id===U);document.getElementById("council-view-title").textContent=(a==null?void 0:a.label)??"หน้าหลัก",Zt(e)}function Zt(e){const t=document.getElementById("council-mobile-sheet");if(!t)return;if(!fe){t.innerHTML="";return}const r=e.filter(n=>n.group===fe);t.innerHTML=`
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${r.map((n,a)=>`
            <button type="button" class="mobile-sheet-item text-left border ${n.id===U?"border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]":"border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]"}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${n.id}">
              <span class="text-base">${n.icon}</span><span>${d(n.label)}</span>
              ${n.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${n.badge}</span>`:""}
            </button>`).join("")}
        </div>
      </div>
    </div>`,document.getElementById("mobile-sheet-backdrop").addEventListener("click",n=>{n.target.id==="mobile-sheet-backdrop"&&(fe=null,v())}),document.querySelectorAll(".mobile-sheet-item").forEach(n=>{n.addEventListener("click",()=>{U=n.dataset.view,fe=null,v()})})}function Za(){const{applications:e,membership:t}=l;return!e.length&&!t.length?"":`
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${t.map(r=>{var n,a;return`
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${d(((n=r.council_positions)==null?void 0:n.position_name)??"—")} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${d(D[(a=r.council_positions)==null?void 0:a.gender]??"")})</span></p>
          </div>`}).join("")}
        ${e.map(r=>{var n;return`
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${d(((n=r.council_positions)==null?void 0:n.position_name)??"—")}</p>
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(r.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${d(Tt[r.status]??r.status)}</span>
          </div>`}).join("")}
      </div>
    </div>`}function Ye(e,t,r,n){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${e}</p>
        ${r?`<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${r}">${d(n)} →</button>`:""}
      </div>
      ${t}
    </div>`}function es(){return l.isChair?["ยินดีต้อนรับประธานสภานักเรียน","ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่"]:l.membership.length?["ยินดีต้อนรับสมาชิกสภานักเรียน","ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ"]:l.isCouncilAdvisor?["ครูที่ปรึกษาสภานักเรียน","ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา"]:l.isAdmin?["จัดการระบบสภานักเรียน","ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล"]:l.role==="teacher"&&l.pendingEndorsements.length?["รับรองผู้สมัครสภานักเรียน","ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ"]:["ระบบสภานักเรียน","ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน"]}function ts(){const e=l.cfg.council_featured_phase;if(e)return e;const t=new Date,r=l.cfg.council_apply_opens_at?new Date(l.cfg.council_apply_opens_at):null,n=l.cfg.council_apply_closes_at?new Date(l.cfg.council_apply_closes_at):null;return r&&n&&t>=r&&t<=n?"apply":l.elections.some(s=>s.opens_at&&s.closes_at&&t>=new Date(s.opens_at)&&t<=new Date(s.closes_at))?"election":"none"}function rs(){return l.isChair?"👑 ประธานสภานักเรียน":l.membership.length?"🎫 สมาชิกสภานักเรียน":l.isCouncilAdvisor?"🏫 ครูที่ปรึกษาสภานักเรียน":l.role==="admin"?"🛡️ ผู้ดูแลระบบ (แอดมิน)":l.isAdmin?"🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)":l.role==="teacher"?"👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)":l.role==="student"?"🎓 นักเรียน":"ผู้เยี่ยมชม"}function ns(){const e=l.cfg,t=e.council_term_start_semester&&e.council_term_start_year?`ภาคเรียนที่ ${d(e.council_term_start_semester)}/${d(e.council_term_start_year)} – ภาคเรียนที่ ${d(e.council_term_end_semester||e.council_term_start_semester)}/${d(e.council_term_end_year||e.council_term_start_year)}`:null,r=e.council_visible_to_all!=="false",[n,a]=es(),s=l.isAdmin||l.isCouncilAdvisor?`
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${r?"bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]":"bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]"}">
      <span>${r?"✅":"🔒"}</span>
      <span>${r?"ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว":"ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น"}</span>
    </div>`:"";return`
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${d(rs())}</span></p>
    ${s}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${t?`<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${t}</span>`:""}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${d(n)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${d(a)}</p>
      ${l.isAdmin||l.isCouncilAdvisor||l.isChair?`
      <div class="flex flex-wrap gap-2 mt-4">
        ${l.isAdmin||l.isCouncilAdvisor?'<button type="button" class="goto-view px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90" data-view="settings">⚙️ ตั้งค่าระบบ</button>':""}
        <a href="council-election.html" target="_blank" class="px-4 py-2 rounded-[10px] bg-white/10 border border-white/25 text-white text-sm font-bold hover:bg-white/20">🗳️ หน้าลงคะแนน</a>
      </div>`:""}
    </div>`}function as(){if(F===null)return Pr(),Ye("📅 กิจกรรมประจำปี",'<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>');const e={};F.forEach(a=>{e[a.status]=(e[a.status]??0)+1});const t=`
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${Mr.map(([a,s,i,o])=>`
        <div class="rounded-[10px] border ${i} p-2 text-center">
          <p class="text-lg font-bold ${o}">${e[a]??0}</p>
          <p class="text-[0.625rem] text-[var(--muted)]">${s}</p>
        </div>`).join("")}
    </div>`,r=[...F].sort((a,s)=>new Date(a.activity_date||0)-new Date(s.activity_date||0)).slice(0,5),n=r.length?`
    <div class="space-y-0.5">
      ${r.map(a=>{const[s,i,o]=Nr[a.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]"];return`
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${d(a.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${a.activity_date?new Date(a.activity_date).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—"} ${a.owner_text?"· "+d(a.owner_text):""}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${o} ${i}">${s}</span>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>';return Ye("📅 กิจกรรมประจำปี",t+n,"activities","ดูทั้งหมด")}function ss(){const e=["M","W"].map(r=>l.members.find(n=>{var a,s;return n.status==="active"&&((a=n.council_positions)==null?void 0:a.gender)===r&&((s=n.council_positions)==null?void 0:s.is_elected)})),t=e.some(Boolean)?`
    <div class="space-y-3">
      ${e.map((r,n)=>{var i,o,c;const a=n===0?"M":"W";if(!r)return`<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${D[a]}</div>`;const s=a==="W";return`
        <div class="flex items-center gap-3 rounded-xl border p-3 ${s?"bg-[var(--pink-soft)] border-[var(--pink-soft-line)]":"bg-[var(--primary-soft)] border-[var(--primary-soft-line)]"}">
          ${N(r.students,"w-12 h-16")}
          <div class="min-w-0">
            <p class="text-[0.6875rem] font-bold ${s?"text-[var(--pink)]":"text-[var(--primary)]"}">${d(((i=r.council_positions)==null?void 0:i.position_name)??"ประธานสภานักเรียนฝ่าย"+D[a])}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((o=r.students)==null?void 0:o.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${d(((c=r.students)==null?void 0:c.main_room)??"")}</p>
          </div>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>';return Ye("🏛️ สภานักเรียนชุดปัจจุบัน",t,"roster","ดูโครงสร้าง")}function is(){if(!l.isAdmin&&!l.isExecutive)return"";if(C===null)return Ft(),Ye("📋 การสมัครสภานักเรียน",'<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p>');const e=C.length,t=C.filter(i=>i.endorsed_at).length,r=C.filter(i=>i.peer_endorsed_at||Ce(i)).length,n=C.filter(i=>i.status==="candidate").length,a=(i,o,c)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${c}">${d(i)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${d(o)}</p>
    </div>`,s=`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      ${a(e,"สมัครแล้วทั้งหมด","var(--ink)")}
      ${a(t,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
      ${ye()?a(r,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):a("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
      ${a(n,"ว่าที่สภานักเรียน","var(--primary)")}
    </div>`;return Ye("📋 การสมัครสภานักเรียน",s,"dashboard","ดูรายละเอียด")}function Ar(){const e=ns(),t=Za(),r=(b,_,f,m)=>`
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${b}">
      <p class="text-2xl mb-1">${_}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${d(f)}</p>
      ${m?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${d(m)}</p>`:""}
    </button>`,n=(b,_,f,m)=>`
    <button type="button" class="flow-entry-btn w-full bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl shadow-[0_4px_14px_rgba(23,32,42,0.15)] p-4 text-left text-white hover:opacity-95 transition flex items-center gap-3" data-flow="${b}">
      <p class="text-3xl flex-shrink-0">${_}</p>
      <div class="min-w-0 flex-1">
        <span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-white/20 mb-1">🔥 ช่วงนี้</span>
        <p class="text-base font-extrabold [text-wrap:pretty]">${d(f)}</p>
        ${m?`<p class="text-xs text-white/85 mt-0.5 [text-wrap:pretty]">${d(m)}</p>`:""}
      </div>
      <span class="text-white/70 flex-shrink-0">→</span>
    </button>`,a=l.elections.length>0,s=a||l.isAdmin,i=l.role==="student"&&pt(l.student),o=a?"การเลือกตั้ง":"ตั้งค่าการเลือกตั้ง",c=a?"":"ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า",p=i&&s?ts():"none";let u="";if(i&&s&&p!=="none"){const b=p==="apply"?n("apply","📝","สมัครสภานักเรียน","เปิดรับสมัครสภานักเรียนวาระใหม่"):r("apply","📝","สมัครสภานักเรียน"),_=p==="election"?n("election","🗳️",o,c||"เปิดใช้งานอยู่ ณ ขณะนี้"):r("election","🗳️",o,c);u=`<div class="space-y-3">${p==="apply"?b+_:_+b}</div>`}else(i||s)&&(u=`
    <div class="grid ${i&&s?"grid-cols-2":"grid-cols-1"} gap-3">
      ${i?r("apply","📝","สมัครสภานักเรียน"):""}
      ${s?r("election","🗳️",o,c):""}
    </div>`);return`<div class="space-y-4">
    ${e}
    ${t}
    ${is()}
    ${u}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${as()}
      ${ss()}
    </div>
  </div>`}function os(){if(l.role!=="student")return"";if(!l.student)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;const e=ce(l.student.gender),t=l.positions.filter(s=>s.gender===e),r=new Set(l.applications.filter(s=>s.status!=="rejected").map(s=>s.position_id)),n=t.filter(s=>!r.has(s.id));if(!e)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;if(!pt(l.student))return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ${d(kt(l.student))}
      <p class="mt-1 text-xs">${d(l.student.main_room||l.student.religion_room||"ไม่พบข้อมูลห้อง")}</p>
    </div>`;if(!ut)return`
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${n.length?"":"opacity-50 pointer-events-none"}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${D[e]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${n.length?`เปิดรับ ${n.length} ตำแหน่ง`:"ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)"}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`;const a=R?ls():B===1?cs(n):B===2?us():B===3?ps():B===4?ms():B===5?bs():vs(e);return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${D[e]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${R?"":ds()}
      ${a}
    </div>
    ${we?xs():""}`}function ls(){const e=It()[R.step-1]??"",t=R.savedAt?new Date(R.savedAt).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"";return`
    <div class="text-center py-4 space-y-3">
      <p class="text-3xl">📝</p>
      <p class="text-sm font-bold text-[var(--ink)]">พบข้อมูลที่กรอกค้างไว้</p>
      <p class="text-xs text-[var(--muted-2)]">กรอกถึงขั้นตอนที่ ${R.step}/${It().length} · ${d(e)}${t?` · บันทึกล่าสุด ${t}`:""}</p>
      <p class="text-[0.6875rem] text-[var(--gold-ink)] bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-2.5 text-left">⚠️ รูปถ่าย/ไฟล์เกียรติบัตรที่เคยแนบไว้ต้องแนบใหม่อีกครั้ง (เบราว์เซอร์เก็บไฟล์ข้ามการปิดหน้าไม่ได้) ส่วนข้อความอื่นๆ กู้คืนให้ครบ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-draft-discard" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">เริ่มใหม่</button>
        <button type="button" id="btn-apply-draft-resume" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">กู้คืนข้อมูล</button>
      </div>
    </div>`}const er=["เลือกตำแหน่ง","เกรดเฉลี่ย & แรงจูงใจ","รูปถ่าย","วิดีโอแนะนำตัว","เกียรติบัตร/รางวัล"];function Rt(){return l.cfg.council_require_peer_endorsement==="true"}function It(){return Rt()?[...er,"เลือกพี่สภารับรอง"]:er}function ds(){const e=It();return`
    <div class="flex items-center gap-1.5 mb-3">
      ${e.map((t,r)=>`<div class="flex-1 h-1.5 rounded-full ${r+1<=B?"bg-[var(--primary)]":"bg-[var(--line-soft)]"}"></div>`).join("")}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${B}/${e.length} · ${e[B-1]}</p>`}function cs(e){return`
    <form id="apply-step1-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ตำแหน่งที่สมัคร <span class="text-[var(--bad)]">*</span></label>
        <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— เลือกตำแหน่ง —</option>
          ${e.map(t=>`<option value="${t.id}" ${L.positionId===String(t.id)?"selected":""}>${d(t.position_name)}</option>`).join("")}
        </select>
        ${e.length?"":'<p class="text-xs text-[var(--gold-ink)] mt-1.5">ไม่มีตำแหน่งเปิดรับในขณะนี้</p>'}
      </div>
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${e.length?"":"disabled"}>ถัดไป →</button>
    </form>`}function us(){const e=l.cfg.council_min_gpa||"2.50",t=l.cfg.council_min_gpa_religious||"2.50";return`
    <form id="apply-step2-form" class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยสามัญ <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaGeneral" type="number" step="0.01" min="0" max="4" required value="${d(L.gpaGeneral)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${d(e)}</p>
        </div>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">เกรดเฉลี่ยศาสนา <span class="text-[var(--bad)]">*</span></label>
          <input name="gpaReligious" type="number" step="0.01" min="0" max="4" required value="${d(L.gpaReligious)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ต้อง ≥ ${d(t)}</p>
        </div>
      </div>
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">แรงจูงใจ / นโยบาย <span class="text-[var(--bad)]">*</span></label>
        <textarea name="motivation" required rows="4" placeholder="เล่าเหตุผลที่อยากสมัคร หรือแนวทางที่จะทำถ้าได้รับเลือก (อย่างน้อย 10 ตัวอักษร)"
          class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(L.motivation)}</textarea>
      </div>
      <div class="flex gap-2">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function ps(){return`
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${X?`<img src="${X}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />`:""}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`}function ms(){const e=(()=>{try{return JSON.parse(l.cfg.council_video_brief||"[]")}catch{return[]}})(),t=l.cfg.council_video_max_minutes||"3";return`
    <form id="apply-step4-form" class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">ลิงก์วิดีโอแนะนำตัว <span class="text-[var(--bad)]">*</span></label>
        <input name="videoUrl" type="url" required placeholder="https://..." value="${d(L.videoUrl)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">ความยาวไม่เกิน ${d(t)} นาที (ลิงก์ YouTube/Google Drive/TikTok ที่เปิดดูได้)</p>
      </div>
      ${e.length?`
        <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3">
          <p class="text-xs font-bold text-[var(--primary-dark)] mb-1.5">🎬 หัวข้อที่ควรพูดถึงในวิดีโอ</p>
          <ul class="text-xs text-[var(--ink-2)] space-y-1 list-disc list-inside">
            ${e.map(r=>`<li>${d(r)}</li>`).join("")}
          </ul>
        </div>`:""}
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </form>`}function bs(){const e=M.filter(n=>n.file&&n.title.trim()).length,t=Oe(),r=(n,a)=>`
    <div class="rounded-xl border border-[var(--line)] p-3 space-y-2" data-cert-idx="${a}">
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold text-[var(--muted)]">รายการที่ ${a+1}</p>
        ${M.length>1?`<button type="button" class="btn-remove-cert text-xs text-[var(--bad)]" data-idx="${a}">🗑️ ลบ</button>`:""}
      </div>
      <input type="text" class="cert-title-input w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"
        placeholder="ชื่อรางวัล/กิจกรรม เช่น รางวัลชนะเลิศการแข่งขันโต้วาทีระดับจังหวัด" data-idx="${a}" value="${d(n.title)}" />
      <div class="flex items-center gap-2">
        ${n.file?n.isPdf?'<span class="w-10 h-10 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-lg flex-shrink-0">📄</span>':`<img src="${n.previewUrl}" class="w-10 h-10 rounded-lg object-cover border border-[var(--line)] flex-shrink-0" />`:""}
        <input type="file" accept="image/*,.pdf,application/pdf" class="cert-file-input text-xs flex-1 min-w-0" data-idx="${a}" />
      </div>
    </div>`;return`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เกียรติบัตร/รางวัลจากการแข่งขันหรือกิจกรรมนอกโรงเรียน <span class="text-[var(--bad)]">*</span></label>
        <p class="text-[0.6875rem] ${e>=t?"text-[var(--ok)]":"text-[var(--muted-2)]"}">แนบได้ทั้งรูปภาพและไฟล์ PDF — ต้องมีอย่างน้อย ${t} รายการ (ตอนนี้ครบ ${e}/${t})</p>
      </div>
      <div class="space-y-2.5">${M.map(r).join("")}</div>
      <button type="button" id="btn-add-cert" class="w-full py-2 rounded-xl border border-dashed border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]">＋ เพิ่มรายการ</button>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step5-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">${Rt()?"ถัดไป →":"ตรวจสอบและยืนยัน →"}</button>
      </div>
    </div>`}function vs(e){const t=(l.members||[]).filter(n=>{var a;return((a=n.council_positions)==null?void 0:a.gender)===e&&n.student_id!==l.student.id}).sort((n,a)=>{var s,i;return(((s=n.council_positions)==null?void 0:s.sort_order)??0)-(((i=a.council_positions)==null?void 0:i.sort_order)??0)});if(!t.length)return`
      <div class="space-y-3">
        <div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-3 text-xs text-[var(--gold-ink)]">
          ⚠️ ตอนนี้ยังไม่มีสมาชิกสภานักเรียน${D[e]}ในระบบให้เลือกเป็นผู้รับรอง กรุณาติดต่อครูที่ปรึกษาสภาหรือผู้ดูแลระบบ
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        </div>
      </div>`;const r=n=>{var a,s,i;return`
    <button type="button" class="btn-pick-peer-endorser w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(L.peerEndorserId)===String(n.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${n.id}">
      ${N(n.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((a=n.students)==null?void 0:a.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${d(((s=n.council_positions)==null?void 0:s.position_name)??"—")} · ${d(((i=n.students)==null?void 0:i.main_room)??"—")}</p>
      </div>
      ${String(L.peerEndorserId)===String(n.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`};return`
    <div class="space-y-3">
      <p class="text-xs text-[var(--muted-2)]">เลือกสมาชิกสภานักเรียน${D[e]}ที่ต้องการให้เป็นผู้รับรองใบสมัครของคุณ — ใบสมัครจะรอเฉพาะคนที่เลือกเท่านั้น</p>
      <div class="space-y-2 max-h-96 overflow-y-auto">${t.map(r).join("")}</div>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step6-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${L.peerEndorserId?"":"disabled"}>ตรวจสอบและยืนยัน →</button>
      </div>
    </div>`}function xs(){var n;const e=l.positions.find(a=>a.id===Number(L.positionId)),t=l.student,r=L.peerEndorserId?(l.members||[]).find(a=>String(a.id)===String(L.peerEndorserId)):null;return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${X?`<img src="${X}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />`:""}
            <div class="min-w-0">
              <p class="font-bold text-[var(--ink)] truncate">${d((t==null?void 0:t.full_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${d((t==null?void 0:t.student_code)??"")} · ${d((t==null?void 0:t.main_room)??"")}</p>
            </div>
          </div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">ตำแหน่ง</span><span class="font-bold text-[var(--ink)] text-right">${d((e==null?void 0:e.position_name)??"—")}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดสามัญ</span><span class="font-bold text-[var(--ink)]">${d(L.gpaGeneral)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกรดศาสนา</span><span class="font-bold text-[var(--ink)]">${d(L.gpaReligious)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">รูปถ่าย</span><span class="font-bold ${xe?"text-[var(--ok)]":"text-[var(--bad)]"}">${xe?"✅ แนบแล้ว":"❌ ยังไม่ได้แนบ"}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">วิดีโอ</span><span class="font-bold text-[var(--ink)] truncate">${d(L.videoUrl)}</span></div>
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกียรติบัตร/รางวัล</span><span class="font-bold text-[var(--ok)]">✅ ${M.filter(a=>a.file&&a.title.trim()).length} รายการ</span></div>
          ${r?`<div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">พี่สภาที่ขอให้รับรอง</span><span class="font-bold text-[var(--ink)] text-right">${d(((n=r.students)==null?void 0:n.full_name)??"—")}</span></div>`:""}
          <div>
            <p class="text-[var(--muted)] mb-1">แรงจูงใจ</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${d(L.motivation)}</p>
          </div>
        </div>
        <div class="flex gap-2 pt-4 mt-3 border-t border-[var(--line-soft)]">
          <button type="button" id="btn-apply-edit" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">✏️ แก้ไข</button>
          <button type="button" id="btn-apply-confirm-submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✅ ยืนยันการสมัคร</button>
        </div>
      </div>
    </div>`}function fs(){return l.student?!l.applications.length&&!l.membership.length?'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>':`
    <div class="space-y-2">
      ${l.membership.map(e=>{var t,r;return`
        <div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-xl p-3">
          <p class="text-xs text-[var(--ok)] font-bold">ตำแหน่งปัจจุบัน</p>
          <p class="text-sm font-bold text-[#0d4d36]">${d(((t=e.council_positions)==null?void 0:t.position_name)??"—")} <span class="text-xs font-normal">(สภา${d(D[(r=e.council_positions)==null?void 0:r.gender]??"")})</span></p>
        </div>`}).join("")}
      ${l.applications.map(e=>{var t;return`
        <div class="bg-[var(--surface)] rounded-xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 space-y-2">
          <div class="flex items-center justify-between gap-2">
            <div class="min-w-0">
              <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((t=e.council_positions)==null?void 0:t.position_name)??"—")}</p>
              <p class="text-xs text-[var(--muted-2)]">${new Date(e.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${d(Tt[e.status]??e.status)}</span>
          </div>
          <button type="button" class="btn-view-my-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">📄 ดูใบสมัคร</button>
        </div>`}).join("")}
    </div>
    ${Ss()}`:""}function Ht(e){return l.elections.find(t=>t.gender===e&&t.academic_year===P)||null}async function Ir(e,t){ue[e]=await Lt(t).catch(()=>[]),v()}async function gs(e,t){const[r,n]=await Promise.all([gr(t).catch(()=>({})),$t(e).catch(()=>0)]);St[e]={tally:r,eligible:n},v()}function qr(){return`<div class="space-y-4">${["M","W"].map(_s).join("")}</div>`}function _s(e){var f;const t=Ht(e),r=l.student?ce(l.student.gender):null,n=l.role==="student"&&r===e;if(!t)return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${D[e]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${l.isAdmin||l.isCouncilAdvisor?`<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${e}">เปิดใช้งานการเลือกตั้ง</button>`:""}
      </div>`;const a=new Date,s=t.opens_at?new Date(t.opens_at):null,i=t.closes_at?new Date(t.closes_at):null,o=!!(s&&s<=a&&(!i||i>a)),c=!!(i&&i<=a),p=!!t.results_published_at,u=p?{label:"✅ ประกาศผลแล้ว",cls:"bg-[var(--ok-soft-line)] text-[#106143]"}:c?{label:"🔒 ปิดโหวตแล้ว รอประกาศผล",cls:"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}:o?{label:"🗳️ กำลังเปิดโหวต",cls:"bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"}:{label:"⏳ ยังไม่เปิดโหวต",cls:"bg-[var(--bg-2)] text-[var(--muted)]"};let b="";if(p){ue[e]===void 0&&Ir(e,t.id),St[e]||gs(e,t.id);const m=l.members.find(A=>{var y,w;return((y=A.council_positions)==null?void 0:y.gender)===e&&((w=A.council_positions)==null?void 0:w.is_elected)}),x=m?`
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${N(m.students,"w-12 h-16")}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((f=m.students)==null?void 0:f.full_name)??"—")}</p>
        </div>
      </div>`:'<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>',E=St[e],I=ue[e];let j="";if(E&&(I!=null&&I.length)){const A=Object.values(E.tally).reduce(($,S)=>$+S,0),y=E.eligible?Math.round(A/E.eligible*100):0;j=`
        <div class="mt-3 space-y-2">
          ${I.slice().sort(($,S)=>(E.tally[S.id]??0)-(E.tally[$.id]??0)).map($=>{var T;const S=E.tally[$.id]??0,q=A?Math.round(S/A*100):0;return`
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${d(((T=$.students)==null?void 0:T.full_name)??"—")}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${S} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${q}%"></div></div>
              </div>`}).join("")}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${E.eligible} คน · ใช้สิทธิ์ ${A} คน (${y}%)</p>`}b=x+j}else o&&n?b=`
      <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-[var(--primary-dark)]">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[0.6875rem] text-[var(--muted)] mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`:c&&!p?b='<p class="text-xs text-[var(--muted-2)] mt-2">รอผู้ดูแลระบบประกาศผล</p>':!o&&!c&&(b=`<p class="text-xs text-[var(--muted-2)] mt-2">${t.opens_at?"เปิดโหวต "+new Date(t.opens_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""}</p>`);let _="";return(l.isAdmin||l.isCouncilAdvisor)&&(_=`
      <div class="mt-3 pt-3 border-t border-[var(--line-soft)] space-y-2">
        <form class="election-window-form flex flex-wrap gap-2 items-end" data-election-id="${t.id}">
          <label class="text-[0.6875rem] text-[var(--muted-2)]">เปิดโหวต<br><input type="datetime-local" name="opens_at" value="${t.opens_at?t.opens_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <label class="text-[0.6875rem] text-[var(--muted-2)]">ปิดโหวต<br><input type="datetime-local" name="closes_at" value="${t.closes_at?t.closes_at.slice(0,16):""}" class="border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs"/></label>
          <button type="submit" class="px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] text-xs font-bold">บันทึกช่วงเวลา</button>
        </form>
        ${c&&!p?`<button type="button" class="btn-publish-results px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-election-id="${t.id}" data-gender="${e}">📢 ประกาศผล+แต่งตั้ง</button>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">🔗 หน้าโหวต (เปิดที่จุดลงคะแนนเท่านั้น): <a href="council-election.html" target="_blank" class="text-[var(--primary)] underline">council-election.html</a></p>
      </div>`),`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between gap-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${D[e]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${u.cls}">${u.label}</span>
      </div>
      ${b}
      ${_}
    </div>`}function ys(e,t){var s,i,o,c,p,u,b;const r=e.photo_url||((s=e.students)==null?void 0:s.image_url)||((i=e.students)==null?void 0:i.photo_url),n=(o=e.council_applications)==null?void 0:o.gpa_general,a=(c=e.council_applications)==null?void 0:c.gpa_religious;return`
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${t}" data-id="${e.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${r?`<img src="${d(r)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${d((((p=e.students)==null?void 0:p.full_name)||"?").charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${e.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((u=e.students)==null?void 0:u.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)]">${d(((b=e.students)==null?void 0:b.main_room)??"")}</p>
        ${n!=null||a!=null?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${d(n??"—")} · ศาสนา ${d(a??"—")}</p>`:""}
        ${e.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${d(e.slogan)}"</p>`:""}
      </div>
    </button>`}function hs(){const e=t=>{const r=Ht(t),n=`<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${D[t]}</p>`;if(!r)return`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`;const a=ue[t];return a===void 0?(Ir(t,r.id),`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>`):a.length?`
      <div>
        ${n}
        <div class="grid grid-cols-2 gap-3">${a.map(s=>ys(s,t)).join("")}</div>
      </div>`:`<div>${n}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`};return`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${e("M")}${e("W")}</div>${ws()}`}function ws(){var p,u,b,_,f,m,x,E;if(!Ee)return"";const{gender:e,id:t}=Ee,r=(ue[e]||[]).find(I=>I.id===t);if(!r)return"";const n=l.isAdmin||l.isCouncilAdvisor,a=Array.isArray(r.policies)?r.policies:[],s=Array.isArray(r.experience)?r.experience:[],i=r.photo_url||((p=r.students)==null?void 0:p.image_url)||((u=r.students)==null?void 0:u.photo_url),o=(b=r.council_applications)==null?void 0:b.gpa_general,c=(_=r.council_applications)==null?void 0:_.gpa_religious;return me?`
      <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
        <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
          <p class="text-base font-bold text-[var(--ink)] mb-3">✏️ แก้ไขโปรไฟล์ผู้สมัคร — ${d(((f=r.students)==null?void 0:f.full_name)??"")}</p>
          <form id="candidate-edit-form" class="space-y-2.5" data-candidate-id="${r.id}">
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สโลแกน</label>
              <input name="slogan" value="${d(r.slogan??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">วิสัยทัศน์</label>
              <textarea name="vision" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(r.vision??"")}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">นโยบาย (บรรทัดละ 1 ข้อ)</label>
              <textarea name="policies" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(a.join(`
`))}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน (บรรทัดละ 1 ข้อ)</label>
              <textarea name="experience" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(s.join(`
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
          ${i?`<img src="${d(i)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${d((((m=r.students)==null?void 0:m.full_name)||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${r.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${d(((x=r.students)==null?void 0:x.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${d(((E=r.students)==null?void 0:E.main_room)??"")}${o!=null||c!=null?` · เกรดสามัญ ${d(o??"—")} · ศาสนา ${d(c??"—")}`:""}</p>
          </div>
          ${r.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${d(r.slogan)}"</p>`:""}
          ${r.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${d(r.vision)}</p></div>`:""}
          ${a.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${a.map(I=>`<li>${d(I)}</li>`).join("")}</ul></div>`:""}
          ${s.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${s.map(I=>`<li>${d(I)}</li>`).join("")}</ul></div>`:""}
          ${!r.slogan&&!r.vision&&!a.length&&!s.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          ${n?'<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>':""}
        </div>
      </div>
    </div>`}const Cr={pending:["รอนัดสัมภาษณ์","bg-[var(--bg-2)] text-[var(--muted)]"],interview_scheduled:["นัดสัมภาษณ์แล้ว รอให้คะแนน","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],interviewed:["ผ่านสัมภาษณ์","bg-[var(--ok-soft-line)] text-[#106143]"],candidate:["ผู้สมัครเลือกตั้ง","bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"],appointed:["แต่งตั้งแล้ว","bg-[#e3f1ef] text-[var(--teal)]"],rejected:["ไม่ผ่าน","bg-[var(--bad-soft-line)] text-[#8a2f22]"]},Lr={M:"bg-[#edf4f0] text-[#14563b]",W:"bg-[#fdeef4] text-[#a3134f]"},qt=[{id:"all",label:"ทั้งหมด"},{id:"awaiting_endorsement",label:"รอรับรอง"},{id:"endorsed",label:"รับรองแล้ว"},{id:"scheduled",label:"นัดแล้ว"},{id:"interviewed",label:"ผ่านสัมภาษณ์"},{id:"rejected",label:"ไม่ผ่าน"}];function ye(){return l.cfg.council_require_peer_endorsement==="true"}function Ce(e){var r;const t=((r=e.students)==null?void 0:r.id)??e.student_id;return!!t&&l.members.some(n=>n.student_id===t)}function We(e){return!ye()||Ce(e)?!0:!!e.peer_endorsed_at}function $s(e){const t=[];return e.endorsed_at||t.push("รอครูที่ปรึกษาสามัญรับรอง"),We(e)||t.push("รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง"),t.join(" และ")}function bt(e){var r;return((r=((e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||"").match(/^(ม\.\d+|ปวช\.\d+)/))==null?void 0:r[1])??null}function it(e){return e.status==="rejected"?"rejected":e.status==="pending"?e.endorsed_at&&We(e)?"endorsed":"awaiting_endorsement":e.status==="interview_scheduled"?"scheduled":"interviewed"}async function Ft(){C=await Nn(P).catch(()=>[]),v()}async function jr(){te=await en().catch(()=>[]),v()}function ks(e){const t=te==null?void 0:te.find(r=>r.id===e);return t?`${t.full_name} · รหัส ${t.id}`:""}function Es(e){if(!e)return"";const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);if(t)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${d(t[1])}" allowfullscreen loading="lazy"></iframe></div>`;const r=e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||e.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);if(r)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${d(r[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`;const n=e.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);return n?`<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${d(n[1])}" allowfullscreen loading="lazy"></iframe></div>`:`<a href="${d(e)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`}function Dr(){if(!$e)return"";const e=C==null?void 0:C.find(t=>t.id===$e);return e?Tr(e,e.students,{closeId:"btn-admin-app-detail-close",backdropId:"admin-app-detail-backdrop",canDelete:!!l.isAdmin}):""}function Ss(){var t;if(!Fe)return"";const e=(t=l.applications)==null?void 0:t.find(r=>r.id===Fe);return e?Tr(e,l.student,{closeId:"btn-my-app-detail-close",backdropId:"my-app-detail-backdrop",isOwner:!0}):""}function As(e,t){var i,o;(i=document.getElementById("peer-endorser-picker-modal"))==null||i.remove();const r=(o=l.applications)==null?void 0:o.find(c=>c.id===e),n=(l.members||[]).filter(c=>{var p;return((p=c.council_positions)==null?void 0:p.gender)===t&&c.student_id!==l.student.id}).sort((c,p)=>{var u,b;return(((u=c.council_positions)==null?void 0:u.sort_order)??0)-(((b=p.council_positions)==null?void 0:b.sort_order)??0)}),a=c=>{var p,u,b;return`
    <button type="button" class="btn-peer-picker-choose w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(r==null?void 0:r.requested_peer_endorser_id)===String(c.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${c.id}">
      ${N(c.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((p=c.students)==null?void 0:p.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${d(((u=c.council_positions)==null?void 0:u.position_name)??"—")} · ${d(((b=c.students)==null?void 0:b.main_room)??"—")}</p>
      </div>
      ${String(r==null?void 0:r.requested_peer_endorser_id)===String(c.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`},s=document.createElement("div");s.id="peer-endorser-picker-modal",s.className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",s.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
      <div class="flex items-start justify-between gap-3 mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🙋 เลือกพี่สภาที่ต้องการให้รับรอง</p>
        <button type="button" id="btn-peer-picker-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      ${n.length?`<div class="space-y-2">${n.map(a).join("")}</div>`:`<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีสมาชิกสภานักเรียน${D[t]??""}ในระบบให้เลือก</p>`}
    </div>`,document.body.appendChild(s),s.addEventListener("click",c=>{c.target===s&&s.remove()}),s.querySelector("#btn-peer-picker-close").addEventListener("click",()=>s.remove()),s.querySelectorAll(".btn-peer-picker-choose").forEach(c=>{c.addEventListener("click",async()=>{c.disabled=!0;try{await Tn({applicationId:e,memberId:Number(c.dataset.id)}),await Er(),g("เลือกพี่สภาที่ต้องการให้รับรองแล้ว ✅","success"),s.remove(),v()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error"),c.disabled=!1}})})}function Tr(e,t,{closeId:r,backdropId:n,isOwner:a=!1,canDelete:s=!1}){var o,c,p,u,b,_,f,m,x,E;const i=Lr[(o=e.council_positions)==null?void 0:o.gender]??"bg-[var(--bg-2)] text-[var(--muted)]";return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="${n}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="${r}" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${N(t,"w-16 h-20")}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${d((t==null?void 0:t.full_name)??"—")}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${i}">${d(D[(c=e.council_positions)==null?void 0:c.gender]??"—")}</span>
            </div>
            <p class="text-xs text-[var(--muted-2)]">${d((t==null?void 0:t.student_code)??"")} · ${d((t==null?void 0:t.main_room)??"")}</p>
            <p class="text-xs text-[var(--primary)] font-semibold mt-0.5">${d(((p=e.council_positions)==null?void 0:p.position_name)??"—")}</p>
          </div>
        </div>
        <div class="space-y-3 pt-3 text-sm">
          <div class="grid grid-cols-2 gap-2">
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดสามัญ</p><p class="font-bold text-[var(--ink)]">${d(e.gpa_general??"—")}</p></div>
            <div class="rounded-xl bg-[var(--surface-2)] p-2.5"><p class="text-[0.6875rem] text-[var(--muted)]">เกรดศาสนา</p><p class="font-bold text-[var(--ink)]">${d(e.gpa_religious??"—")}</p></div>
          </div>
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">แรงจูงใจ / นโยบาย</p>
            <p class="text-[var(--ink-2)] bg-[var(--surface-2)] rounded-xl p-3 whitespace-pre-line">${d(e.motivation||"—")}</p>
          </div>
          ${e.intro_video_url?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🎬 วิดีโอแนะนำตัว</p>
            ${Es(e.intro_video_url)}
          </div>`:""}
          ${(u=e.certificates)!=null&&u.length?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1.5">🏅 เกียรติบัตร/รางวัล (${e.certificates.length} รายการ)</p>
            <div class="grid grid-cols-3 gap-2">
              ${e.certificates.map(I=>`
                <a href="${d(I.url)}" target="_blank" rel="noopener" class="block rounded-lg border border-[var(--line)] overflow-hidden hover:border-[var(--primary-45)]">
                  ${(I.url??"").endsWith(".pdf")?'<div class="aspect-square bg-[var(--surface-2)] flex items-center justify-center text-2xl">📄</div>':`<img src="${d(I.url)}" class="aspect-square object-cover w-full" />`}
                  <p class="text-[0.5625rem] text-[var(--ink-2)] px-1 py-1 truncate">${d(I.title||"—")}</p>
                </a>`).join("")}
            </div>
          </div>`:""}
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${(b=e.teachers)!=null&&b.full_name?" — "+d(e.teachers.full_name):""}</p>
            ${e.endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${d(e.endorsement_comment)}</p>`:'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>
          ${ye()?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${(f=(_=e.council_members)==null?void 0:_.students)!=null&&f.full_name?" — "+d(e.council_members.students.full_name):""}</p>
            ${Ce(e)?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>':e.peer_endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${d(e.peer_endorsement_comment)}</p>`:e.peer_endorsed_at?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>':'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>`:""}
          ${a&&ye()&&!Ce(e)&&!e.peer_endorsed_at?`
          <div class="rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2">
            <p class="text-xs font-bold text-[var(--primary-dark)]">🙋 พี่สภาที่ต้องการให้รับรอง</p>
            <p class="text-sm text-[var(--ink)]">${(x=(m=e.requested_peer_endorser)==null?void 0:m.students)!=null&&x.full_name?d(e.requested_peer_endorser.students.full_name):"ยังไม่ได้เลือก"}</p>
            <button type="button" id="btn-pick-my-app-endorser" class="w-full py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${e.id}" data-gender="${d(((E=e.council_positions)==null?void 0:E.gender)??"")}">
              ${e.requested_peer_endorser_id?"🔄 เปลี่ยนพี่สภา":"➕ เลือกพี่สภา"}
            </button>
          </div>`:""}
          ${s&&["pending","rejected"].includes(e.status)?`
          <button type="button" id="btn-delete-council-application" data-id="${e.id}" class="w-full py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">🗑️ ลบใบสมัคร</button>`:""}
        </div>
      </div>
    </div>`}function Br(){var t,r,n,a,s;if(!be)return"";const e=C==null?void 0:C.find(i=>i.id===be);return e?`<div id="council-delete-backdrop" class="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
    <div class="bg-[var(--surface)] rounded-2xl p-5 max-w-md w-full space-y-3">
      <p class="text-base font-bold text-[var(--ink)]">🗑️ ยืนยันการนำใบสมัครนี้ออกจากระบบ?</p>
      <div class="text-sm text-[var(--ink-2)] space-y-1">
        <p><b>ชื่อ–สกุล:</b> ${d((t=e.students)==null?void 0:t.full_name)}</p>
        <p><b>รหัสนักเรียน:</b> ${d((r=e.students)==null?void 0:r.student_code)}</p>
        <p><b>ห้อง:</b> ${d(((n=e.students)==null?void 0:n.main_room)||((a=e.students)==null?void 0:a.religion_room)||"—")}</p>
        <p><b>ตำแหน่ง:</b> ${d((s=e.council_positions)==null?void 0:s.position_name)}</p>
        <p><b>สถานะ:</b> ${d(Tt[e.status]||e.status)}</p>
      </div>
      <p class="text-xs text-[var(--bad)]">โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนดำเนินการ</p>
      <textarea id="council-delete-reason" required rows="3" placeholder="เหตุผลการลบ (จำเป็น)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <div class="flex gap-2">
        <button type="button" id="btn-cancel-council-delete" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm">ยกเลิก</button>
        <button type="button" id="btn-confirm-council-delete" class="flex-1 py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">ยืนยันลบ</button>
      </div>
    </div>
  </div>`:""}async function Is(){Et=await Ra().catch(()=>[]),v()}function qs(){if(!l.isAdmin&&!l.isExecutive)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือผู้บริหารเท่านั้น</p>';if(C===null)return Ft(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(H===null)return Gt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Et===null)return Is(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=(()=>{const f=l.cfg.council_term_start_semester,m=l.cfg.council_term_start_year,x=l.cfg.council_term_end_semester,E=l.cfg.council_term_end_year;return!m&&!E?"ยังไม่ได้ตั้งค่าวาระ":`ภาคเรียนที่ ${f??"—"}/${m??"—"} ถึง ภาคเรียนที่ ${x??"—"}/${E??"—"}`})(),t=l.members,r={M:t.filter(f=>{var m;return((m=f.council_positions)==null?void 0:m.gender)==="M"}).length,W:t.filter(f=>{var m;return((m=f.council_positions)==null?void 0:m.gender)==="W"}).length},n=t.filter(f=>{var m;return(m=f.council_positions)==null?void 0:m.is_elected}).sort((f,m)=>{var x,E;return(((x=f.council_positions)==null?void 0:x.sort_order)??0)-(((E=m.council_positions)==null?void 0:E.sort_order)??0)}),a=C.length,s={all:a};C.forEach(f=>{const m=it(f);s[m]=(s[m]??0)+1});const i=C.filter(f=>f.endorsed_at).length,o=C.filter(f=>f.peer_endorsed_at||Ce(f)).length,c=C.filter(f=>f.status==="candidate").length,p=C.filter(f=>f.status==="appointed").length,u=Object.fromEntries(l.positions.map(f=>[f.id,f.position_name])),b=H.map(f=>({...f,posNames:Et.filter(m=>m.teacher_id===f.id).map(m=>u[m.position_id]).filter(Boolean)})),_=(f,m,x)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${x}">${d(f)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${d(m)}</p>
    </div>`;return`
    <div class="max-w-4xl mx-auto space-y-5">
      <div>
        <h2 class="text-lg font-bold text-[var(--ink)] mb-0.5">📊 ภาพรวมผู้บริหาร</h2>
        <p class="text-xs text-[var(--muted-2)]">สรุปสภานักเรียนวาระปัจจุบัน สำหรับผู้บริหาร — ดูอย่างเดียว ไม่มีสิทธิ์แก้ไข</p>
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">📋 การสมัครสภานักเรียน</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          ${_(a,"สมัครแล้วทั้งหมด","var(--ink)")}
          ${_(i,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
          ${ye()?_(o,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):_("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
          ${_(c,"ว่าที่สภานักเรียน (ผู้สมัครเลือกตั้ง)","var(--primary)")}
          ${_(p,"แต่งตั้งแล้ว","var(--teal)")}
        </div>
        <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
          ${qt.map(f=>`
            <span class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--surface-2)] text-[var(--ink-2)]">
              ${d(f.label)} <span class="text-[var(--muted-2)]">${s[f.id]??0}</span>
            </span>`).join("")}
        </div>
        <p class="text-xs text-[var(--muted-2)] mb-2">รายชื่อล่าสุด — กดดูใบสมัครฉบับเต็มได้</p>
        <div class="space-y-1.5 max-h-96 overflow-y-auto">
          ${C.slice(0,30).map(f=>{var j,A;const[m,x]=Cr[f.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],E=f.endorsed_at?"✅":"⬜",I=ye()?f.peer_endorsed_at||Ce(f)?" · ✅สภา":" · ⬜สภา":"";return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${N(f.students,"w-8 h-10")}
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${d(((j=f.students)==null?void 0:j.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${d(((A=f.council_positions)==null?void 0:A.position_name)??"—")} · ${E}ครู${I}</p>
              </div>
              <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full ${x}">${d(m)}</span>
              <button type="button" class="btn-view-app-detail flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-lg border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${f.id}">ดู</button>
            </div>`}).join("")||'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีใบสมัคร</p>'}
        </div>
        ${C.length>30?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-2 text-center">แสดง 30 รายการล่าสุดจากทั้งหมด ${C.length} รายการ</p>`:""}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-1">🏛️ สภานักเรียนวาระปัจจุบัน</p>
        <p class="text-xs text-[var(--muted)] mb-3">${d(e)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
          ${_(t.length,"สมาชิกสภาทั้งหมด","var(--ink)")}
          ${_(r.M,"สภาชาย","#14563b")}
          ${_(r.W,"สภาหญิง","#a3134f")}
          ${_(n.length,"ตำแหน่งผู้นำ","var(--primary)")}
        </div>
        ${n.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${n.map(f=>{var m,x;return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${N(f.students,"w-9 h-11")}
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${d(((m=f.students)==null?void 0:m.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${d(((x=f.council_positions)==null?void 0:x.position_name)??"—")}</p>
              </div>
            </div>`}).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีตำแหน่งผู้นำที่เลือกตั้งแล้ว</p>'}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">👨‍🏫 รายนามครูที่ปรึกษาสภานักเรียน</p>
        ${b.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${b.map(f=>`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2.5">
              <div class="w-9 h-9 rounded-full bg-[var(--surface-2)] flex-shrink-0 overflow-hidden flex items-center justify-center text-[var(--muted-2)]">${f.image_url?`<img src="${d(f.image_url)}" class="w-full h-full object-cover" />`:"👤"}</div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${d(f.full_name)}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${f.posNames.length?d(f.posNames.join(", ")):"ยังไม่ได้กำหนดฝ่ายที่ดูแล"}</p>
              </div>
            </div>`).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีครูที่ปรึกษาสภานักเรียน</p>'}
      </div>
    </div>
    ${Dr()}${Br()}`}function Cs(){if(!l.isAdmin&&!l.isCouncilAdvisor)return"";if(C===null)return Ft(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(re===null)return kr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return jr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=re.reduce((m,x)=>m+Number(x.weight),0),t=e/2;ee!=="M"&&ee!=="W"&&(ee="M");const r=C.filter(m=>{var x;return((x=m.council_positions)==null?void 0:x.gender)===ee}),n=`
    <div class="flex gap-2 mb-3">
      ${["M","W"].map(m=>`
        <button type="button" class="apps-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${m===ee?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${m}">
          สภา${D[m]} <span class="${m===ee?"text-white/80":"text-[var(--muted-2)]"}">${C.filter(x=>{var E;return((E=x.council_positions)==null?void 0:E.gender)===m}).length}</span>
        </button>`).join("")}
    </div>`,a={all:r.length};r.forEach(m=>{const x=it(m);a[x]=(a[x]??0)+1}),qt.some(m=>m.id===pe)||(pe="all");const s=`
    <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
      ${qt.map(m=>`
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${m.id===pe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${m.id}">
          ${d(m.label)} <span class="${m.id===pe?"text-white/80":"text-[var(--muted-2)]"}">${a[m.id]??0}</span>
        </button>`).join("")}
    </div>`,i=[...new Set(r.map(m=>bt(m.students)).filter(Boolean))].sort((m,x)=>m.localeCompare(x,"th")),o=l.positions.filter(m=>m.gender===ee).sort((m,x)=>m.sort_order-x.sort_order),c=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      <select id="apps-grade-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกระดับชั้น</option>
        ${i.map(m=>`<option value="${d(m)}" ${m===rt?"selected":""}>${d(m)}</option>`).join("")}
      </select>
      <select id="apps-position-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกฝ่าย</option>
        ${o.map(m=>`<option value="${m.id}" ${String(m.id)===String(ke)?"selected":""}>${d(m.position_name)}</option>`).join("")}
      </select>
      <select id="apps-advisor-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองครูที่ปรึกษา: ทั้งหมด</option>
        <option value="yes" ${Be==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${Be==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>
      ${ye()?`
      <select id="apps-peer-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองพี่สภา: ทั้งหมด</option>
        <option value="yes" ${Ne==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${Ne==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>`:""}
    </div>`,p=`<datalist id="council-teacher-datalist">${te.map(m=>`<option value="${d(m.full_name)} · รหัส ${m.id}"></option>`).join("")}</datalist>`;if(!r.length)return`${n}${s}${c}${p}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภา${D[ee]}</p>`;const u=m=>!(rt&&bt(m.students)!==rt||ke&&String(m.position_id)!==String(ke)||Be==="yes"&&!m.endorsed_at||Be==="no"&&m.endorsed_at||Ne==="yes"&&!We(m)||Ne==="no"&&We(m)),b=r.filter(m=>(pe==="all"||it(m)===pe)&&u(m));if(!b.length)return`${n}${s}${c}${p}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`;const _=m=>{var w,$,S,q,T,Z,ne,O,G,Wt,zt,Ut,Vt,Yt;const x=(w=m.council_interviews)==null?void 0:w[0],[E,I]=Cr[m.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],j=Lr[($=m.council_positions)==null?void 0:$.gender]??"bg-[var(--bg-2)] text-[var(--muted)]",A=!!((S=m.council_positions)!=null&&S.is_elected),y=it(m);return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${m.id}">
      <div class="flex items-center gap-3">
        ${N(m.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((q=m.students)==null?void 0:q.full_name)??"—")}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${j}">${d(D[(T=m.council_positions)==null?void 0:T.gender]??"—")}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${d(((Z=m.students)==null?void 0:Z.student_code)??"")} · ${d(((ne=m.students)==null?void 0:ne.main_room)??"")} · ${d(((O=m.council_positions)==null?void 0:O.position_name)??"—")}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${I}">${E}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${m.id}">📄 ดูใบสมัคร</button>

      ${y==="awaiting_endorsement"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${$s(m)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}

      ${m.status==="pending"&&m.endorsed_at&&We(m)?`
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${m.id}" data-iv-id="${(x==null?void 0:x.id)??""}" data-profile-id="${d(((G=m.students)==null?void 0:G.profile_id)??"")}" data-student-name="${d(((Wt=m.students)==null?void 0:Wt.full_name)??"")}" data-position-name="${d(((zt=m.council_positions)==null?void 0:zt.position_name)??"")}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${x!=null&&x.interviewer_teacher_id?d(ks(x.interviewer_teacher_id)):""}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>`:""}

      ${m.status==="interview_scheduled"?`
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${x!=null&&x.scheduled_at?new Date(x.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"—"} ${x!=null&&x.location?"· "+d(x.location):""} ${x!=null&&x.interviewer_teacher_id?"· กรรมการ "+d(((Ut=te.find(ae=>ae.id===x.interviewer_teacher_id))==null?void 0:Ut.full_name)??""):""}</p>
          <form class="score-form space-y-1.5" data-app-id="${m.id}" data-iv-id="${(x==null?void 0:x.id)??""}" data-max-weight="${e}" data-pass-threshold="${t}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${re.map(ae=>{var Qt;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${d(ae.name)} <span class="text-[var(--muted-2)]">(เต็ม ${ae.weight})</span></span>
                <input type="number" min="0" max="${ae.weight}" step="0.5" name="c_${ae.id}" data-criterion-id="${ae.id}"
                  value="${((Qt=x==null?void 0:x.scores)==null?void 0:Qt[ae.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
              </div>`}).join("")}
            <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]">
              <span class="text-[var(--ink-2)]">คะแนนรวม</span>
              <span class="score-total-display text-[var(--primary)]">${(x==null?void 0:x.score)??0} / ${e} · ต้อง ≥ ${t} จึงผ่าน</span>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${d((x==null?void 0:x.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>`:""}

      ${m.status==="interviewed"?`
        <div class="pt-1 border-t border-[var(--line-soft)]">
          ${A?`<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${m.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`:`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${m.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>`:""}

      ${m.status==="candidate"?`<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${((Yt=(Vt=m.council_candidates)==null?void 0:Vt[0])==null?void 0:Yt.ballot_number)??"—"} · รอผลเลือกตั้ง</p>`:""}
      ${m.status==="rejected"&&(x!=null&&x.comment)?`<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${d(x.comment)}</p>`:""}
    </div>`},f=ke?`<div class="space-y-3">${b.map(_).join("")}</div>`:o.map(m=>{const x=b.filter(E=>E.position_id===m.id);return x.length?`
          <div class="mb-5">
            <p class="text-xs font-bold text-[var(--muted)] mb-2 px-1">${d(m.position_name)} <span class="text-[var(--muted-2)]">(${x.length})</span></p>
            <div class="space-y-3">${x.map(_).join("")}</div>
          </div>`:""}).join("");return`${n}${s}${c}${p}${f}${Dr()}${Br()}`}const Ls=[{label:"ประธาน",match:e=>!!(e!=null&&e.is_elected)},{label:"รองประธาน",match:e=>(e==null?void 0:e.position_name)==="รองประธานสภานักเรียน"},{label:"ฝ่ายงาน",match:e=>((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"สำนักงานสภา",match:e=>!(e!=null&&e.is_elected)&&(e==null?void 0:e.position_name)!=="รองประธานสภานักเรียน"&&!((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")}];let J="M";function js(){J!=="M"&&J!=="W"&&(J="M");const e=l.members.filter(i=>{var o;return((o=i.council_positions)==null?void 0:o.gender)===J}).sort((i,o)=>{var c,p;return(((c=i.council_positions)==null?void 0:c.sort_order)??99)-(((p=o.council_positions)==null?void 0:p.sort_order)??99)}),t=`
    <div class="flex gap-2 mb-4">
      ${["M","W"].map(i=>`
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${i===J?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${i}">สภา${D[i]}</button>`).join("")}
    </div>`,r=l.isAdmin?`<button type="button" id="btn-add-council-member" class="w-full py-2.5 rounded-xl border border-dashed border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mb-4 hover:bg-[var(--primary-soft)]">＋ เพิ่มสมาชิกสภา${D[J]}</button>`:"",n=l.isAdmin||l.isChair&&l.chairGender===J,a=i=>{var o,c,p;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${N(i.students,"w-16 h-20 mx-auto")}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${d(((o=i.students)==null?void 0:o.full_name)??"—")}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${d(((c=i.students)==null?void 0:c.main_room)??"")}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${d(((p=i.council_positions)==null?void 0:p.position_name)??"—")}</p>
      ${n?`
        <button type="button" class="btn-toggle-can-create w-full mt-2 text-[0.625rem] font-bold py-1 rounded-[8px] border ${i.can_create_activities?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--muted)]"}" data-id="${i.id}" data-value="${i.can_create_activities?"":"1"}">${i.can_create_activities?"✅ สร้างกิจกรรมได้":"➕ ให้สิทธิ์สร้างกิจกรรม"}</button>`:""}
      ${l.isAdmin?`
        <div class="flex gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-edit-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${i.id}">✏️ แก้ไข</button>
          <button type="button" class="btn-remove-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${i.id}">🗑️ ลบ</button>
        </div>`:""}
    </div>`},s=Ls.map(i=>{const o=e.filter(c=>i.match(c.council_positions));return o.length?`
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${i.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${o.map(a).join("")}</div>
      </div>`:""}).join("");return`${r}${t}${s||`<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${D[J]}</p>`}`}function tr({mode:e,gender:t,member:r}){var c,p,u;(c=document.getElementById("member-modal"))==null||c.remove();const n=l.positions.filter(b=>b.gender===t);let a=e==="edit"?r.students:null,s=null;const i=document.createElement("div");i.id="member-modal",i.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",i.innerHTML=`
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
            <p class="text-sm font-bold text-[var(--ink)]">${d(((p=r.students)==null?void 0:p.full_name)??"—")} · ${d(((u=r.students)==null?void 0:u.student_code)??"")}</p>
          </div>
        `}
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ตำแหน่ง <span class="text-[var(--bad)]">*</span></label>
          <select id="member-position-select" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— เลือกตำแหน่ง —</option>
            ${n.map(b=>`<option value="${b.id}" ${e==="edit"&&r.position_id===b.id?"selected":""}>${d(b.position_name)}</option>`).join("")}
          </select>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เริ่มวาระ</label>
            <input type="date" id="member-term-start" value="${e==="edit"?d(r.term_start_date??""):new Date().toISOString().slice(0,10)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          ${e==="edit"?`
          <div>
            <label class="block text-xs font-semibold text-[var(--muted)] mb-1">สิ้นสุดวาระ (ถ้ามี)</label>
            <input type="date" id="member-term-end" value="${d(r.term_end_date??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>`:""}
        </div>
        <button type="button" id="btn-save-member" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(i),i.querySelector("#btn-close-member-modal").addEventListener("click",()=>i.remove()),i.addEventListener("click",b=>{b.target===i&&i.remove()});const o=()=>{const b=i.querySelector("#member-student-selected");b&&(b.innerHTML=a?`
      <div class="flex items-center gap-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] p-2.5">
        ${N(a,"w-10 h-12")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${d(a.full_name)}</p>
          <p class="text-[0.6875rem] text-[var(--muted-2)] truncate">${d(a.student_code)} · ${d(a.main_room??"")}</p>
        </div>
      </div>`:"")};if(e==="add"){const b=i.querySelector("#member-student-search"),_=i.querySelector("#member-student-results");b.addEventListener("input",()=>{clearTimeout(s);const f=b.value.trim();if(f.length<2){_.innerHTML="";return}s=setTimeout(async()=>{const m=await xr(f).catch(()=>[]);_.innerHTML=m.length?m.map(x=>`
          <button type="button" class="member-search-result-item w-full text-left flex items-center gap-2 rounded-xl border border-[var(--line)] p-2 hover:bg-[var(--surface-2)]" data-id="${x.id}">
            <span class="text-sm font-bold text-[var(--ink)] flex-1 truncate">${d(x.full_name)}</span>
            <span class="text-[0.6875rem] text-[var(--muted-2)] flex-shrink-0">${d(x.student_code)} · ${d(x.main_room??"")}</span>
          </button>`).join(""):'<p class="text-xs text-[var(--muted-2)] px-1">ไม่พบนักเรียน</p>',_.querySelectorAll(".member-search-result-item").forEach(x=>{x.addEventListener("click",()=>{a=m.find(E=>E.id===Number(x.dataset.id)),_.innerHTML="",b.value="",o()})})},300)})}i.querySelector("#btn-save-member").addEventListener("click",async()=>{var m;const b=Number(i.querySelector("#member-position-select").value);if(!b){g("กรุณาเลือกตำแหน่ง","warning");return}if(e==="add"&&!a){g("กรุณาค้นหาและเลือกนักเรียน","warning");return}const _=i.querySelector("#member-term-start").value,f=i.querySelector("#btn-save-member");f.disabled=!0,f.textContent="กำลังบันทึก...";try{if(e==="add")await Hn({positionId:b,studentId:a.id,academicYear:P,termStartDate:_,appointedByTeacherId:((m=l.teacher)==null?void 0:m.id)??null});else{const x=i.querySelector("#member-term-end").value;await Fn(r.id,{positionId:b,termStartDate:_,termEndDate:x})}g("บันทึกแล้ว ✅","success"),i.remove(),l.members=await je().catch(()=>l.members),v()}catch(x){g("บันทึกไม่สำเร็จ: "+k(x),"error"),f.disabled=!1,f.textContent="บันทึก"}})}function Ds(){if(l.role!=="teacher"||!l.teacher)return"";if(!l.pendingEndorsements.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>';const e=t=>{var r,n,a,s;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${t.id}">
      <div class="flex items-center gap-3">
        ${N(t.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((r=t.students)==null?void 0:r.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${d(((n=t.students)==null?void 0:n.student_code)??"")} · ${d(((a=t.students)==null?void 0:a.main_room)??"")} · สมัคร${d(((s=t.council_positions)==null?void 0:s.position_name)??"—")}</p>
          ${t.gpa_general!=null||t.gpa_religious!=null?`<p class="text-xs text-[var(--muted)] mt-0.5">เกรดสามัญ ${d(t.gpa_general??"—")} · เกรดศาสนา ${d(t.gpa_religious??"—")}</p>`:""}
        </div>
      </div>
      ${t.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${d(t.motivation)}</p>`:""}
      ${t.intro_video_url?`<a href="${d(t.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-xs font-bold text-[var(--primary)] hover:underline">🎬 ดูวิดีโอแนะนำตัว</a>`:""}
      <div class="flex flex-wrap gap-1.5">
        ${l.endorsementPhrases.map(i=>`
          <button type="button" class="endorse-phrase-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
            data-target="${t.id}" data-phrase="${d(i.phrase)}">${d(i.phrase)}</button>`).join("")}
      </div>
      <textarea class="endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${t.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-[var(--bad-soft-line)] text-[#8a2f22] text-xs font-bold hover:bg-[var(--bad-soft)]" data-id="${t.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${t.id}">✅ รับรอง</button>
      </div>
    </div>`};return`<div class="space-y-3">${l.pendingEndorsements.map(e).join("")}</div>`}const vt={};async function Ts(e,t){vt[t]=await Dn(e,t).catch(()=>[]),v()}function Bs(){var a;const e=l.membership[0];if(!e)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>';const t=(a=e.council_positions)==null?void 0:a.gender;if(!t)return"";if(vt[e.id]===void 0)return Ts(t,e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const r=vt[e.id];if(!r.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>';const n=s=>{var i,o,c,p;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${s.id}">
      <div class="flex items-center gap-3">
        ${N(s.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((i=s.students)==null?void 0:i.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${d(((o=s.students)==null?void 0:o.student_code)??"")} · ${d(((c=s.students)==null?void 0:c.main_room)??"")} · สมัคร${d(((p=s.council_positions)==null?void 0:p.position_name)??"—")}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] flex-shrink-0">ขอให้คุณรับรอง</span>
      </div>
      ${s.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${d(s.motivation)}</p>`:""}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${s.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${s.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`};return`<div class="space-y-3">${r.map(n).join("")}</div>`}async function Ns(e){const t=l.membership[0];if(!t)return;const r=document.querySelector(`.peer-endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())||null;try{await Bn({applicationId:Number(e),memberId:t.id,comment:n}),g("รับรองในนามสภานักเรียนแล้ว ✅","success"),delete vt[t.id],v()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error")}}async function rr(e,t){const r=document.querySelector(`.endorse-comment[data-id="${e}"]`),n=(r==null?void 0:r.value.trim())??"";if(!n){g("กรุณาใส่คอมเมนต์ก่อนยืนยัน","warning");return}try{t==="confirm"?(await Ln({applicationId:Number(e),teacherId:l.teacher.id,comment:n}),g("รับรองใบสมัครแล้ว ✅","success")):(await jn({applicationId:Number(e),teacherId:l.teacher.id,comment:n}),g('บันทึกผล "ไม่รับรอง" แล้ว',"success")),await Ja(),v()}catch(a){g("บันทึกไม่สำเร็จ: "+k(a),"error")}}const Nr={planned:["ยังไม่จัด","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],completed:["เสร็จแล้ว","text-[#106143]","bg-[var(--ok-soft-line)]","border-[var(--ok-soft-line)]"],cancelled:["ยกเลิก","text-[var(--muted-2)]","bg-[var(--surface-2)]","border-[var(--line)]"]},Mr=[["completed","เสร็จแล้ว","border-[var(--ok-soft-line)] bg-[var(--ok-soft)]","text-[var(--ok)]"],["ongoing","กำลังดำเนินการ","border-[var(--primary-soft-line)] bg-[var(--primary-soft)]","text-[var(--primary)]"],["planned","ยังไม่จัด","border-[var(--gold-soft-line)] bg-[var(--gold-soft)]","text-[var(--gold-ink)]"],["cancelled","ยกเลิก","border-[var(--line-soft)] bg-[var(--surface-2)]","text-[var(--muted-2)]"]],nr={planned:"ongoing",ongoing:"completed"},Ms={planned:"▶️ เริ่มดำเนินการ",ongoing:"✅ ทำเครื่องหมายเสร็จแล้ว"};async function Pr(){F=await Xn(P).catch(()=>[]),v()}async function ar(e){ie[e]=await ta(e).catch(()=>new Set),v()}function Ps(e){return l.isAdmin||l.isChair||l.isCouncilAdvisor?!0:!!(e.owner_member_id&&l.membership.some(t=>t.id===e.owner_member_id))}async function Or(){W=await bn().catch(()=>[]),v()}async function Rr(e){const[t,r,n,a]=await Promise.all([aa(e).catch(()=>null),ia(e).catch(()=>[]),ra(e).catch(()=>[]),mn("council_activity",e).catch(()=>[])]);Se[e]=t,Nt[e]=r,Mt[e]=n,Ge[e]=Object.fromEntries(a.map(s=>[s.student_id,s])),v()}function Os({rule:e,override:t,attendanceRows:r}){var a;if((t==null?void 0:t.override_decision)==="pass")return"pass";if((t==null?void 0:t.override_decision)==="fail")return"fail";if(!e)return"no_rule";const n=r.length;if(e.min_attendance_count&&n<e.min_attendance_count)return"not_eligible";if((a=e.required_dates)!=null&&a.length){const s=new Set(r.map(o=>(o.checked_in_at||"").slice(0,10)));if(e.required_dates.some(o=>!s.has(o)))return"not_eligible"}return"pass"}function Rs(){var o,c,p;if(F===null)return Pr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=l.canCreateActivities,t=e&&!l.isAdmin&&!l.isChair,r=l.membership[0],n={};F.forEach(u=>{n[u.status]=(n[u.status]??0)+1});const a=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${Mr.map(([u,b,_,f])=>`
        <div class="rounded-xl border ${_} p-3 text-center">
          <p class="text-2xl font-bold ${f}">${n[u]??0}</p>
          <p class="text-[0.6875rem] text-[var(--muted)]">${b}</p>
        </div>`).join("")}
    </div>`,s=e?`
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
            <option value="" ${t&&!((o=r==null?void 0:r.council_positions)!=null&&o.gender)?"selected":""}>สภาชาย+หญิงร่วมกัน</option>
            <option value="M" ${t&&((c=r==null?void 0:r.council_positions)==null?void 0:c.gender)==="M"?"selected":""}>สภาชายเท่านั้น</option>
            <option value="W" ${t&&((p=r==null?void 0:r.council_positions)==null?void 0:p.gender)==="W"?"selected":""}>สภาหญิงเท่านั้น</option>
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
            ${l.members.map(u=>{var b,_;return`<option value="${u.id}">${d(((b=u.students)==null?void 0:b.full_name)??"—")} (${d(((_=u.council_positions)==null?void 0:_.position_name)??"—")})</option>`}).join("")}
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
    </div>`:"";if(!F.length)return`${a}${s}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`;const i=u=>{var A,y;const[b,_,f,m]=Nr[u.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]","border-[var(--line)]"],x=l.members.filter(w=>{var $;return!u.gender||(($=w.council_positions)==null?void 0:$.gender)===u.gender}),E=ie[u.id],I=Ps(u),j=(y=(A=u.council_members)==null?void 0:A.students)==null?void 0:y.full_name;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${u.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${d(u.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${u.activity_date?new Date(u.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} ${u.gender?"· สภา"+D[u.gender]:""} ${u.owner_text?"· "+d(u.owner_text):""} ${j?"· ผู้รับผิดชอบ "+d(j):""}</p>
            ${u.open_to_general?'<span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mt-1">🙋 เปิดให้นักเรียนทั่วไปเข้าร่วม</span>':""}
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${m} ${f} ${_}">${b}</span>
        </div>
        ${u.detail?`<p class="text-xs text-[var(--ink-2)]">${d(u.detail)}</p>`:""}
        ${I?`
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            <!-- เดิมจำกัดแค่ admin/chair เปลี่ยนสถานะได้ — แต่กิจกรรมที่ค้างสถานะ "planned" ตลอดไป
                 จะไม่ถูกนับใน % เช็คชื่อสำหรับประเมินเลย (นับเฉพาะ ongoing/completed) ผู้รับผิดชอบ
                 ที่ได้รับมอบหมาย (owner) จึงต้องเปลี่ยนสถานะกิจกรรมของตัวเองได้ด้วย ไม่งั้นฟีเจอร์
                 "สร้าง+เช็คชื่อได้เอง" จะใช้ไม่ได้จริงเพราะกิจกรรมไม่มีวันถูกนับผล -->
            ${I&&nr[u.status]?`<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${u.id}" data-next="${nr[u.status]}">${Ms[u.status]}</button>`:""}
            ${I&&u.status!=="cancelled"&&u.status!=="completed"?`<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${u.id}">ยกเลิก</button>`:""}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${u.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${u.id}" data-title="${d(u.title)}" data-open-general="${u.open_to_general?"1":""}">📷 สแกน QR เช็คอิน</button>
            <button type="button" class="btn-activity-cert-manage text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-id="${u.id}">🏅 จัดการเกียรติบัตร</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${u.id}">
            ${E?`
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${x.map(w=>{var S;const $=E.has(w.student_id);return`<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${$?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"}" data-activity-id="${u.id}" data-student-id="${w.student_id}" ${$?"disabled":""}>
                    <span>${$?"✅":"➕"}</span><span class="truncate">${d(((S=w.students)==null?void 0:S.full_name)??"—")}</span>
                  </button>`}).join("")}
                ${x.length?"":'<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>'}
              </div>`:""}
          </div>
          ${At===u.id?Fs(u):""}`:""}
      </div>`};return`${a}${s}<div class="space-y-3">${F.map(i).join("")}</div>`}const Hs={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft)] border-[var(--ok-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft)] border-[var(--bad-soft-line)]"],not_eligible:["ยังไม่ครบเงื่อนไข","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],no_rule:["ยังไม่ตั้งเงื่อนไข","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"]};function Fs(e){if(W===null&&Or(),Se[e.id]===void 0&&Rr(e.id),W===null||Se[e.id]===void 0)return'<div class="mt-2 pt-2 border-t border-dashed border-[var(--line)]"><p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>';const t=Se[e.id],r=Nt[e.id]??[],n=Mt[e.id]??[],a=Object.fromEntries(r.map(u=>[u.student_id,u])),s=Ge[e.id]??{},i={};n.forEach(u=>{i[u.student_id]||(i[u.student_id]={student:u.students,rows:[]}),i[u.student_id].rows.push(u)});const o=`
    <form class="cert-rule-form space-y-2 bg-[var(--surface-2)] rounded-xl p-3" data-activity-id="${e.id}">
      <p class="text-xs font-bold text-[var(--ink-2)]">🏅 เงื่อนไขการรับเกียรติบัตร</p>
      <select name="template_id" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
        <option value="">— ยังไม่เลือกเทมเพลต —</option>
        ${W.map(u=>`<option value="${u.id}" ${(t==null?void 0:t.template_id)===u.id?"selected":""}>${d(u.name)}</option>`).join("")}
      </select>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)] flex-shrink-0">ต้องเข้าร่วมอย่างน้อย</span>
        <input type="number" min="0" name="min_attendance_count" value="${(t==null?void 0:t.min_attendance_count)??""}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)]" />
        <span class="text-xs text-[var(--muted)]">ครั้ง</span>
      </div>
      <div>
        <label class="block text-[0.6875rem] text-[var(--muted)] mb-1">วันที่บังคับต้องเข้าร่วม (ถ้ามี บรรทัดละ 1 วัน รูปแบบ YYYY-MM-DD)</label>
        <textarea name="required_dates" rows="2" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${d(((t==null?void 0:t.required_dates)??[]).join(`
`))}</textarea>
      </div>
      <textarea name="notes" rows="2" placeholder="หมายเหตุเงื่อนไข (แสดงให้นักเรียนเห็น เช่น ต้องผ่านการประเมินความประพฤติด้วย)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)]">${d((t==null?void 0:t.notes)??"")}</textarea>
      <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกเงื่อนไข</button>
    </form>`,c=Object.keys(i),p=c.map(u=>{const b=Number(u),{student:_,rows:f}=i[b],m=a[b],x=Os({rule:t,override:m,attendanceRows:f}),[E,I]=Hs[x],j=s[b];return`
      <div class="rounded-xl border border-[var(--line-soft)] p-2.5 space-y-1.5" data-cert-row="${b}">
        <div class="flex items-center gap-2">
          ${N(_,"w-8 h-10")}
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-[var(--ink)] truncate">${d((_==null?void 0:_.full_name)??"—")}</p>
            <p class="text-[0.625rem] text-[var(--muted-2)]">เข้าร่วม ${f.length} ครั้ง</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${I}">${E}</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="pass"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${b}" data-decision="pass">✅ ผ่าน (บังคับ)</button>
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="fail"?"border-[var(--bad-soft-line)] bg-[var(--bad-soft)] text-[#8a2f22]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${b}" data-decision="fail">❌ ไม่ผ่าน (บังคับ)</button>
          ${m!=null&&m.override_decision?`<button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)]" data-activity-id="${e.id}" data-student-id="${b}" data-decision="">↺ กลับเป็นอัตโนมัติ</button>`:""}
          ${x==="pass"?j?`<button type="button" class="btn-cert-view text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${b}">🏅 ดูเกียรติบัตร</button>`:`<button type="button" class="btn-cert-issue text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${b}">🏅 ออกเกียรติบัตร</button>`:""}
        </div>
      </div>`}).join("");return`
    <div class="mt-2 pt-2 border-t border-dashed border-[var(--line)] space-y-3">
      ${o}
      <div>
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1.5">รายชื่อผู้เข้าร่วม (${c.length} คน)</p>
        <div class="space-y-1.5">${p||'<p class="text-xs text-[var(--muted-2)] text-center py-3">ยังไม่มีใครเช็คชื่อเข้าร่วมกิจกรรมนี้</p>'}</div>
      </div>
    </div>`}const sr={info:["แจ้งให้ทราบ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],ack:["ต้องกดรับทราบ","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],urgent:["ด่วน","text-[#8a2f22]","bg-[var(--bad-soft-line)]","border-[var(--bad-soft-line)]"]};async function Gs(){mt=await ga().catch(()=>[]),v()}async function Ws(){le=await ya(l.student.id).catch(()=>new Set),v()}async function zs(){const[e,t,r,n]=await Promise.all([wa().catch(()=>({})),$a().catch(()=>0),$t("M").catch(()=>0),$t("W").catch(()=>0)]);de=e,nt={all:t,M:r,W:n},v()}function Us(){if(mt===null)return Gs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';l.role==="student"&&l.student&&le===null&&Ws(),de===null&&zs();const e=l.isAdmin||l.isCouncilAdvisor||l.isChair,t=mt.filter(c=>c.audience==="all"||c.audience===(l.student?ce(l.student.gender):null)||l.isAdmin||l.isChair),r=at==="all"?t:t.filter(c=>c.type===at),n=e?'<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>':"",a=e&&st?`
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
    </div>`:"",i=`
    <div class="flex gap-2 overflow-x-auto pb-1 mb-4">
      ${[["all","ทั้งหมด"],["urgent","ด่วน"],["ack","ต้องรับทราบ"],["info","แจ้งให้ทราบ"]].map(([c,p])=>`
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${at===c?"bg-[var(--primary)] text-white border-[var(--primary)]":"bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]"}" data-filter="${c}">${p}</button>`).join("")}
    </div>`;if(!r.length)return`${n}${a}${i}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`;const o=c=>{var I,j;const[p,u,b,_]=sr[c.type]??sr.info,f=(I=c.teachers)!=null&&I.full_name?d(c.teachers.full_name)+" (ครู)":(j=c.students)!=null&&j.full_name?d(c.students.full_name)+" (ประธานสภา)":"ระบบ",m=le==null?void 0:le.has(c.id),x=c.type==="ack"&&l.role==="student"&&l.student,E=nt?nt[c.audience]??nt.all:null;return`
      <div class="rounded-xl border ${c.pinned?"border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${c.pinned?'<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>':""}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${_} ${b} ${u}">${p}</span>
          ${c.audience!=="all"?`<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${D[c.audience]??""}</span>`:""}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${d(c.title)}</p>
        ${c.body?`<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${d(c.body)}</p>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${f} · ${new Date(c.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
        ${c.type==="ack"?`<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${(de==null?void 0:de[c.id])??0}${E!=null?" จาก "+E:""} คน</p>`:""}
        ${x?m?'<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>':`<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${c.id}">รับทราบ</button>`:""}
      </div>`};return`${n}${a}${i}<div class="space-y-3">${r.map(o).join("")}</div>`}let Q=null,Ae=null,ot=null;const Vs={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"],improve:["ควรปรับปรุง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]"]};async function Hr(){Q=await ka().catch(()=>[]),v()}async function Ys(){const e=await Aa(P).catch(()=>[]);Ae=Object.fromEntries(e.map(t=>[t.member_id,t])),v()}function Fr(){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${Q.reduce((t,r)=>t+Number(r.weight),0)} คะแนน)</p>
      <div class="space-y-1.5">
        ${Q.map(t=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${d(t.name)}</span>
            <span class="font-bold text-[var(--muted)]">${t.weight} คะแนน</span>
            <button type="button" class="btn-remove-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${t.id}">✕</button>
          </div>`).join("")}
      </div>
      <form id="criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มเกณฑ์ใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <input name="weight" type="number" min="1" placeholder="คะแนน" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`}function Qs(){if(Q===null)return Hr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Ae===null)return Ys(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=l.isAdmin||l.role==="teacher",t=Q.reduce((i,o)=>i+Number(o.weight),0),r=e?Fr():"",n=i=>{var _,f;const o=Ae[i.id],[c,p]=o!=null&&o.decision?Vs[o.decision]:["ยังไม่ประเมิน","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"],u=l.role==="student"&&l.student&&i.student_id===l.student.id;if(!e&&!u)return"";const b=ot===i.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${i.id}">
        <div class="flex items-center gap-3">
          ${N(i.students,"w-10 h-12")}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((_=i.students)==null?void 0:_.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${d(((f=i.council_positions)==null?void 0:f.position_name)??"—")}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${p}">${c}</span>
            ${(o==null?void 0:o.total_score)!=null?`<p class="text-xs text-[var(--muted-2)] mt-0.5">${o.total_score}/${o.max_score??t}</p>`:""}
          </div>
        </div>
        ${e?`<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${i.id}">${b?"▲ ซ่อนแบบประเมิน":o?"✏️ แก้ไขคะแนน":"📝 ให้คะแนน"}</button>`:""}
        ${e&&b?`
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${i.id}">
            ${Q.map(m=>{var x;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${d(m.name)} <span class="text-[var(--muted-2)]">(เต็ม ${m.weight})</span></span>
                <input type="number" min="0" max="${m.weight}" step="0.5" name="c_${m.id}" value="${((x=o==null?void 0:o.scores)==null?void 0:x[m.id])??""}" class="w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center" />
              </div>`}).join("")}
            <select name="decision" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)]">
              <option value="">— สรุปผล —</option>
              <option value="pass" ${(o==null?void 0:o.decision)==="pass"?"selected":""}>ผ่าน</option>
              <option value="improve" ${(o==null?void 0:o.decision)==="improve"?"selected":""}>ควรปรับปรุง</option>
              <option value="fail" ${(o==null?void 0:o.decision)==="fail"?"selected":""}>ไม่ผ่าน</option>
            </select>
            <textarea name="comment" rows="2" placeholder="ความเห็นผู้ประเมิน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none">${d((o==null?void 0:o.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผลประเมิน</button>
          </form>`:""}
        ${(o==null?void 0:o.decision)==="pass"?o.certificate_issued_at?`<button type="button" class="btn-view-cert text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-member-id="${i.id}">🏅 ดูเกียรติบัตร</button>`:e?`<button type="button" class="btn-issue-cert text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-member-id="${i.id}">🏅 ออกเกียรติบัตร</button>`:"":""}
      </div>`},s=l.members.filter(i=>e||l.role==="student"&&l.student&&i.student_id===l.student.id).map(n).filter(Boolean).join("");return!e&&!s?`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`:s?`${r}<div class="space-y-3">${s}</div>`:`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`}function Js({member:e,evaluation:t,cfg:r}){var c,p;const n=d(((c=e.students)==null?void 0:c.full_name)??"—"),a=d(((p=e.council_positions)==null?void 0:p.position_name)??"—"),s=d(r.council_name||"ระบบสภานักเรียน"),i=d(t.certificate_no||""),o=new Date(t.certificate_issued_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"});return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
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
        <p style="color:#6e5f65;font-size:13px;letter-spacing:1px;">${s}</p>
        <h1>เกียรติบัตร</h1>
        <p style="color:#4a3b41;">มอบเพื่อแสดงว่า</p>
        <p class="name">${n}</p>
        <p style="color:#1d1519;line-height:1.9;max-width:560px;margin:0 auto;">ได้ปฏิบัติหน้าที่ <b>${a}</b> ของ${s} ด้วยความรับผิดชอบ ทุ่มเท และเป็นแบบอย่างที่ดี จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:#90828a;font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${o} ${i?"· เลขที่ "+i:""}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
    </body></html>`}function ir(e,t){pr(Js({member:e,evaluation:t,cfg:l.cfg}))}let z=null,K=null,ze=null,Ue=null;const Gr={draft:["ร่าง","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],pending_advisor:["รอครูที่ปรึกษาประจำฝ่ายรับรอง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_dept_head:["รอหัวหน้าฝ่ายกิจการนักเรียน","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_director:["รอผู้อำนวยการ","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],approved:["อนุมัติแล้ว","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"]};async function Ks(){z=await Ca(P).catch(()=>[]),v()}async function Xs(){Ue=l.teacher?await yr(l.teacher.id).catch(()=>[]):[],v()}const ve=e=>(e||"").split(`
`).map(t=>t.trim()).filter(Boolean),Xe=(e,t)=>ve(e).map(r=>{const n=r.split("|").map(a=>a.trim());for(;n.length<t;)n.push("");return n.slice(0,t)}),Ze=e=>(Array.isArray(e)?e:[]).map(t=>t.join(" | ")).join(`
`),Te=e=>(Array.isArray(e)?e:[]).join(`
`),Wr=e=>Number(e||0).toLocaleString("th-TH"),zr=e=>(e.budget_items||[]).reduce((t,r)=>t+(Number(r[1])||0),0),xt=["title","planArea","projectType","schoolStrategy","educationStandard","responsiblePersons","rationale","objectives","goalsQuantitative","goalsQualitative","workSteps","durationText","locationText","budgetItems","stakeholders","evaluationItems","expectedResults"];function Zs(){return["คุณคือผู้ช่วยแปลงไฟล์ใบเสนอโครงการของโรงเรียน (ไฟล์ที่แนบมาในแชทนี้) ให้เป็นข้อมูล CSV ตามสเปคที่กำหนดไว้เป๊ะๆ ด้านล่างนี้ ห้ามแต่งข้อมูลขึ้นเองถ้าไม่มีในไฟล์ต้นฉบับ — เว้นว่างไว้แทน","","สร้างตาราง CSV จำนวน 1 แถวข้อมูล (แถวหัวตาราง 1 แถว + แถวข้อมูล 1 แถว) โดยแถวหัวตารางต้องเป็นข้อความนี้เป๊ะๆ (ห้ามแปล ห้ามสลับลำดับ ห้ามเว้นคอลัมน์):",xt.join(","),"","ความหมายแต่ละคอลัมน์และวิธีใส่ข้อมูล:","- title: ชื่อโครงการ","- planArea: แผนงาน","- projectType: ลักษณะโครงการ (เช่น โครงการต่อเนื่อง/โครงการใหม่)","- schoolStrategy: สนองกลยุทธ์โรงเรียน","- educationStandard: สนองมาตรฐานการศึกษา/ตัวชี้วัด","- responsiblePersons: ผู้รับผิดชอบโครงการ — ถ้ามีหลายคน ให้ขึ้นบรรทัดใหม่ทีละคนภายในเซลล์เดียวกัน","- rationale: หลักการและเหตุผล","- objectives: วัตถุประสงค์ — ขึ้นบรรทัดใหม่ทีละข้อภายในเซลล์เดียวกัน","- goalsQuantitative: เป้าหมายเชิงปริมาณ — ขึ้นบรรทัดใหม่ทีละข้อ","- goalsQualitative: เป้าหมายเชิงคุณภาพ — ขึ้นบรรทัดใหม่ทีละข้อ",'- workSteps: วิธีดำเนินงาน — แต่ละขั้นตอนขึ้นบรรทัดใหม่ 1 บรรทัดต่อ 1 ขั้นตอน แต่ละบรรทัดคั่น 4 ค่าด้วย " | " ตามลำดับ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ',"- durationText: ระยะเวลาดำเนินการโครงการโดยรวม","- locationText: สถานที่ดำเนินงาน",'- budgetItems: งบประมาณ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: รายการ | จำนวนเงิน (ตัวเลขล้วน ห้ามมีคอมมาคั่นหลักหรือคำว่า "บาท")','- stakeholders: หน่วยงาน/ผู้เกี่ยวข้อง — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: หน่วยงาน/บุคคล | จำนวน (คน)','- evaluationItems: การประเมินผลความสำเร็จ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด',"- expectedResults: ผลที่คาดว่าจะได้รับ — ขึ้นบรรทัดใหม่ทีละข้อ","","กฎสำคัญที่ต้องทำตามเป๊ะๆ:",'1. คอลัมน์ไหนมีการขึ้นบรรทัดใหม่ภายในเซลล์ ต้องครอบข้อความทั้งเซลล์ด้วยเครื่องหมายคำพูด " " เสมอ (มาตรฐาน CSV)',"2. มีข้อมูลแค่ 1 แถวข้อมูลเท่านั้น (1 โครงการต่อ 1 ไฟล์)","3. ถ้าหาข้อมูลคอลัมน์ไหนไม่เจอในไฟล์ต้นฉบับ ให้เว้นว่างไว้ ห้ามเดาขึ้นมาเอง","4. ตอบกลับเฉพาะเนื้อหา CSV เท่านั้น ห้ามมีคำอธิบายอื่นปนอยู่ในคำตอบ ให้ครอบคำตอบทั้งหมดด้วย code block รูปแบบนี้: ```csv (เนื้อหา CSV) ```"].join(`
`)}function ei(e){let t=(e??"").trim();return t.startsWith("```")&&(t=t.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),t}function ti(e){const t=[];let r=[],n="",a=!1;const s=e.replace(/\r\n/g,`
`);for(let i=0;i<s.length;i++){const o=s[i];a?o==='"'?s[i+1]==='"'?(n+='"',i++):a=!1:n+=o:o==='"'?a=!0:o===","?(r.push(n),n=""):o===`
`?(r.push(n),t.push(r),r=[],n=""):n+=o}return r.push(n),t.push(r),t.filter(i=>i.some(o=>o.trim()!==""))}function ri(e){const t=ei(e);if(t.startsWith("{")){const i=JSON.parse(t),o={};for(const c of xt){if(!(c in i))continue;const p=i[c];o[c]=Array.isArray(p)?p.map(u=>Array.isArray(u)?u.join(" | "):String(u??"")).join(`
`):String(p??"")}return o}const r=ti(t);if(r.length<2)throw new Error("ไม่พบข้อมูล — ต้องมีทั้งแถวหัวตารางและแถวข้อมูล");const n=r[0].map(i=>i.trim()),a=r[1],s={};return n.forEach((i,o)=>{xt.includes(i)&&(s[i]=(a[o]??"").trim())}),s}function ni(e){const t=document.getElementById("doc-form");if(!t)return 0;let r=0;for(const n of xt){if(e[n]===void 0)continue;const a=t.elements[n];a&&(a.value=e[n],r++)}return r}function ai(){var r;(r=document.getElementById("doc-ai-import-modal"))==null||r.remove();const e=document.createElement("div");e.id="doc-ai-import-modal",e.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-lg p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</p>
        <button type="button" id="btn-close-doc-ai-import" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <ol class="text-xs text-[var(--muted-2)] list-decimal list-inside space-y-1 mb-3">
        <li>คัดลอกคำสั่งด้านล่าง</li>
        <li>วางในแชท ChatGPT (หรือ AI อื่น) พร้อมแนบไฟล์ใบโครงการเดิม (Word/PDF/รูปถ่าย)</li>
        <li>คัดลอกคำตอบที่ได้ (หรือดาวน์โหลดไฟล์ CSV ถ้า AI สร้างไฟล์ให้) แล้วนำกลับมาวาง/อัปโหลดด้านล่างนี้</li>
      </ol>
      <button type="button" id="btn-doc-ai-copy-prompt" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] font-bold text-xs mb-3">📋 คัดลอกคำสั่งสำหรับ AI</button>
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
    </div>`,document.body.appendChild(e),e.querySelector("#btn-close-doc-ai-import").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.querySelector("#btn-doc-ai-copy-prompt").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Zs()),g("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}catch{g("คัดลอกอัตโนมัติไม่ได้ — ลองคัดลอกเองจากคำสั่งที่แสดง","warning")}});const t=n=>{try{const a=ri(n),s=ni(a);if(!s)throw new Error("ไม่พบข้อมูลที่ตรงกับฟอร์ม ตรวจสอบว่าหัวตาราง CSV ตรงกับคำสั่งที่กำหนด");g(`นำเข้าข้อมูลแล้ว ${s} ช่อง — กรุณาตรวจสอบความถูกต้องก่อนบันทึกร่าง`,"success"),e.remove()}catch(a){g("นำเข้าข้อมูลไม่สำเร็จ: "+k(a),"error")}};e.querySelector("#doc-ai-csv-file").addEventListener("change",async n=>{var s;const a=(s=n.target.files)==null?void 0:s[0];if(a)try{t(await a.text())}finally{n.target.value=""}}),e.querySelector("#btn-doc-ai-import").addEventListener("click",()=>{const n=e.querySelector("#doc-ai-paste").value;if(!n.trim()){g("กรุณาวางคำตอบจาก AI ก่อน","warning");return}t(n)})}function si(){return l.isCouncilAdvisor||l.isAdmin||l.isChair}function ii(e){return e.status==="pending_advisor"&&(l.isAdmin||l.isCouncilAdvisor&&(Ue==null?void 0:Ue.includes(e.position_id)))}function oi(e){return e.status==="pending_dept_head"&&(l.isAdmin||l.isStudentAffairsHead)}function li(e){return e.status==="pending_director"&&(l.isAdmin||l.isSchoolDirector)}function di(){if(!(l.isAdmin||l.role==="teacher"||l.isChair))return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>';if(z===null)return Ks(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(l.isCouncilAdvisor&&Ue===null)return Xs(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(K!==null)return ci();const t=si()?'<button type="button" id="btn-new-doc" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ ร่างเอกสารโครงการใหม่</button>':"";if(!z.length)return`${t}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`;const r=n=>{var o;const[a,s]=Gr[n.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],i=l.student&&n.created_by_student_id===l.student.id||l.teacher&&n.created_by_teacher_id===l.teacher.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${d(n.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${(o=n.council_positions)!=null&&o.position_name?d(n.council_positions.position_name)+" · ":""}${Wr(zr(n))} บาท</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${s}">${a}</span>
        </div>
        ${n.status==="draft"&&n.last_rejected_stage?`<p class="text-xs text-[var(--bad)] bg-[var(--bad-soft)] rounded-[10px] p-2.5">↩️ ถูกตีกลับจากขั้น${d({advisor:"ครูที่ปรึกษาประจำฝ่าย",dept_head:"หัวหน้าฝ่ายกิจการนักเรียน",director:"ผู้อำนวยการ"}[n.last_rejected_stage]??n.last_rejected_stage)}${n.last_rejection_comment?": "+d(n.last_rejection_comment):""}</p>`:""}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-view-doc-detail text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">📄 ดูรายละเอียด</button>
          ${n.status==="draft"&&(i||l.isAdmin)?`<button type="button" class="btn-edit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${n.id}">✏️ แก้ไข</button>`:""}
          ${n.status==="draft"&&(i||l.isAdmin)?`<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${n.id}">📤 เสนอขออนุมัติ</button>`:""}
          ${ii(n)||oi(n)||li(n)?`
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${n.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${n.id}">❌ ไม่อนุมัติ</button>`:""}
          ${n.status==="approved"?`<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">🖨️ พิมพ์เอกสาร</button>`:""}
        </div>
      </div>`};return`${t}<div class="space-y-3">${z.map(r).join("")}</div>${ui()}`}function Ur(e){try{return JSON.parse(l.cfg[e]||"[]")}catch{return[]}}function et({name:e,placeholder:t,configKey:r,value:n,extraClass:a=""}){const s=Ur(r);return s.length?`<select name="${e}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${a}">
    <option value="">— เลือก${d(t)} —</option>
    ${s.map(i=>`<option value="${d(i)}" ${n===i?"selected":""}>${d(i)}</option>`).join("")}
  </select>`:`<input name="${e}" placeholder="${d(t)} (ยังไม่ได้ตั้งค่าตัวเลือกในหน้าตั้งค่า)" value="${d(n??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${a}" />`}function ci(){const e=K==="new",t=e?{}:z.find(a=>a.id===K)??{},r=l.isChair&&!l.isCouncilAdvisor&&!l.isAdmin?"council":t.origin??(l.isChair?"council":"teacher");H===null&&Gt();const n=H!=null&&H.length?`
    <div>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mb-1">ครูที่ปรึกษาสภานักเรียน (คลิกเพื่อเพิ่ม)</p>
      <div class="flex flex-wrap gap-1.5">
        ${H.map(a=>`<button type="button" class="doc-responsible-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition" data-name="${d(a.full_name)}">+ ${d(a.full_name)}</button>`).join("")}
      </div>
    </div>`:"";return`
    <div class="flex items-center gap-3 mb-4">
      <button type="button" id="btn-doc-form-back" class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
      <h2 class="text-base font-bold text-[var(--ink)]">${e?"ร่างเอกสารโครงการใหม่":"แก้ไขร่างเอกสารโครงการ"}</h2>
    </div>
    <button type="button" id="btn-doc-ai-import-open" class="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-xs font-bold mb-3">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</button>
    <form id="doc-form" class="space-y-3" data-origin="${r}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">ข้อมูลทั่วไป</p>
        <input name="title" required placeholder="ชื่อโครงการ" value="${d(t.title??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <div class="grid grid-cols-2 gap-2">
          ${et({name:"planArea",placeholder:"แผนงาน",configKey:"council_doc_plan_areas",value:t.plan_area})}
          ${et({name:"projectType",placeholder:"ลักษณะโครงการ",configKey:"council_doc_project_types",value:t.project_type})}
        </div>
        ${et({name:"schoolStrategy",placeholder:"สนองกลยุทธ์โรงเรียน",configKey:"council_doc_school_strategies",value:t.school_strategy,extraClass:"w-full"})}
        ${et({name:"educationStandard",placeholder:"สนองมาตรฐานการศึกษา/ตัวชี้วัด",configKey:"council_doc_education_standards",value:t.education_standard,extraClass:"w-full"})}
        ${n}
        <textarea name="responsiblePersons" rows="2" placeholder="ผู้รับผิดชอบโครงการ (บรรทัดละ 1 ชื่อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Te(t.responsible_persons))}</textarea>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ฝ่ายที่รับผิดชอบ ${r==="council"?'<span class="text-[var(--bad)]">*</span>':""}</label>
          <select name="positionId" ${r==="council"?"required":""} class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— ไม่ระบุ —</option>
            ${l.positions.map(a=>`<option value="${a.id}" ${t.position_id===a.id?"selected":""}>${d(a.position_name)} (สภา${d(D[a.gender]??"")})</option>`).join("")}
          </select>
          ${r==="council"?'<p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">โครงการที่สภาริเริ่มเองต้องระบุฝ่าย เพื่อส่งให้ครูที่ปรึกษาประจำฝ่ายนั้นตรวจก่อน</p>':""}
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หลักการ วัตถุประสงค์ เป้าหมาย</p>
        <textarea name="rationale" rows="3" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(t.rationale??"")}</textarea>
        <textarea name="objectives" rows="2" placeholder="วัตถุประสงค์ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Te(t.objectives))}</textarea>
        <textarea name="goalsQuantitative" rows="2" placeholder="เป้าหมายเชิงปริมาณ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Te(t.goals_quantitative))}</textarea>
        <textarea name="goalsQualitative" rows="2" placeholder="เป้าหมายเชิงคุณภาพ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Te(t.goals_qualitative))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">วิธีดำเนินงาน</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ</p>
        <textarea name="workSteps" rows="4" placeholder="เสนอโครงการต่อผู้บริหาร | ธ.ค.2568 | - | นายเปาซี" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Ze(t.work_steps))}</textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="durationText" placeholder="ระยะเวลาดำเนินการ" value="${d(t.duration_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <input name="locationText" placeholder="สถานที่ดำเนินงาน" value="${d(t.location_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">งบประมาณ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: รายการ | จำนวนเงิน(บาท) — รวมยอดคำนวณอัตโนมัติ</p>
        <textarea name="budgetItems" rows="4" placeholder="ค่าอาหาร 115 คน x 5 มื้อ | 17250" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Ze(t.budget_items))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หน่วยงาน/ผู้เกี่ยวข้อง</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: หน่วยงาน/บุคคล | จำนวน(คน)</p>
        <textarea name="stakeholders" rows="3" placeholder="ครูที่ปรึกษา | 9" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Ze(t.stakeholders))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">การประเมินผลความสำเร็จ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด</p>
        <textarea name="evaluationItems" rows="4" placeholder="ผู้เรียนพัฒนาศักยภาพผู้นำ | ร้อยละ 80 | ประเมินจากแบบสังเกตการณ์ | แบบสังเกตการณ์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Ze(t.evaluation_items))}</textarea>
        <textarea name="expectedResults" rows="2" placeholder="ผลที่คาดว่าจะได้รับ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Te(t.expected_results))}</textarea>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex gap-2">
        <button type="button" id="btn-doc-form-cancel" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกร่าง</button>
      </div>
    </form>`}function Vr(e,t){var i;const r=d(t.council_name||"ระบบสภานักเรียน"),n=(o,c)=>c!=null&&c.length?`
    <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px;">
      <thead><tr>${o.map(p=>`<th style="border:1px solid #ccc;padding:6px;background:#f8f4f4;">${d(p)}</th>`).join("")}</tr></thead>
      <tbody>${c.map(p=>`<tr>${p.map(u=>`<td style="border:1px solid #ccc;padding:6px;">${d(u)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`:"",a=o=>o!=null&&o.length?`<ol style="margin:4px 0;padding-left:20px;">${o.map(c=>`<li>${d(c)}</li>`).join("")}</ol>`:"—",s='style="display:block;margin-bottom:3px;"';return`
    ${t.council_logo_url?`<img src="${d(t.council_logo_url)}" style="height:64px;object-fit:contain;display:block;margin:0 auto 8px;" />`:""}
    <h1 style="text-align:center;font-size:20px;margin-bottom:2px;">แบบเสนอโครงการ</h1>
    <p style="text-align:center;color:#6e5f65;font-size:13px;margin-bottom:20px;">${r} · ปีการศึกษา ${e.academic_year}</p>
    <div style="margin-bottom:12px;"><b ${s}>ชื่อโครงการ</b>${d(e.title)}</div>
    <div style="margin-bottom:12px;"><b ${s}>แผนงาน</b>${d(e.plan_area||"—")} &nbsp;·&nbsp; <b style="display:inline">ลักษณะโครงการ</b> ${d(e.project_type||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>สนองกลยุทธ์โรงเรียน</b>${d(e.school_strategy||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>สนองมาตรฐานการศึกษา/ตัวชี้วัด</b>${d(e.education_standard||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>ผู้รับผิดชอบโครงการ</b>${a(e.responsible_persons)}</div>
    <div style="margin-bottom:12px;"><b ${s}>ฝ่ายที่รับผิดชอบ</b>${d(((i=e.council_positions)==null?void 0:i.position_name)||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>1. หลักการและเหตุผล</b>${d(e.rationale||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>2. วัตถุประสงค์</b>${a(e.objectives)}</div>
    <div style="margin-bottom:12px;"><b ${s}>3. เป้าหมาย</b>
      <div style="margin-top:4px;"><i>3.1 เชิงปริมาณ</i>${a(e.goals_quantitative)}</div>
      <div><i>3.2 เชิงคุณภาพ</i>${a(e.goals_qualitative)}</div>
    </div>
    <div style="margin-bottom:12px;"><b ${s}>4. วิธีดำเนินงาน</b>${n(["ขั้นตอน/กิจกรรม","ระยะเวลา","งบประมาณ","ผู้รับผิดชอบ"],e.work_steps)}</div>
    <div style="margin-bottom:12px;"><b ${s}>5. ระยะเวลาดำเนินการ</b>${d(e.duration_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>6. สถานที่ดำเนินงาน</b>${d(e.location_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>7. งบประมาณ</b>${n(["รายการ","จำนวนเงิน (บาท)"],e.budget_items)}<b>รวมเป็นเงิน ${Wr(zr(e))} บาท</b></div>
    <div style="margin-bottom:12px;"><b ${s}>8. หน่วยงาน/ผู้เกี่ยวข้อง</b>${n(["หน่วยงาน/บุคคล","จำนวน (คน)"],e.stakeholders)}</div>
    <div style="margin-bottom:12px;"><b ${s}>9. การประเมินผลความสำเร็จ</b>${n(["เป้าหมาย","ตัวบ่งชี้ความสำเร็จ","วิธีวัดและประเมินผล","เครื่องมือวัด"],e.evaluation_items)}</div>
    <div style="margin-bottom:12px;"><b ${s}>10. ผลที่คาดว่าจะได้รับ</b>${a(e.expected_results)}</div>
    <div style="display:flex;justify-content:space-around;margin-top:50px;text-align:center;flex-wrap:wrap;gap:20px;">
      <div style="width:200px;"><div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้เสนอโครงการ</div></div>
      <div style="width:200px;">
        ${e.dept_head_signature_url?`<img src="${d(e.dept_head_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">หัวหน้าฝ่ายกิจการนักเรียน</div>
      </div>
      <div style="width:200px;">
        ${e.director_signature_url?`<img src="${d(e.director_signature_url)}" style="height:50px;object-fit:contain;display:block;margin:0 auto 4px;" />`:""}
        <div style="border-top:1px solid #999;padding-top:6px;font-size:13px;">ผู้อำนวยการ${t.council_signer_director_name?" ("+d(t.council_signer_director_name)+")":""}</div>
      </div>
    </div>`}function ui(){if(!ze)return"";const e=z.find(a=>a.id===ze);if(!e)return"";const[t,r]=Gr[e.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],n=[e.advisor_decided_at?`✅ ครูที่ปรึกษาประจำฝ่ายรับรองแล้ว${e.advisor_comment?" — "+d(e.advisor_comment):""}`:"",e.dept_head_decided_at?`✅ หัวหน้าฝ่ายกิจการนักเรียนอนุมัติแล้ว${e.dept_head_comment?" — "+d(e.dept_head_comment):""}`:"",e.director_decided_at?`✅ ผู้อำนวยการอนุมัติแล้ว${e.director_comment?" — "+d(e.director_comment):""}`:""].filter(Boolean);return`
    <div class="fixed inset-0 z-[90] bg-[var(--surface)] flex flex-col" id="doc-detail-backdrop">
      <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)] flex-shrink-0">
        <div class="min-w-0">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${d(e.title)}</p>
          <span class="text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${r} inline-block mt-0.5">${t}</span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" id="btn-doc-detail-print" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]">🖨️ พิมพ์</button>
          <button type="button" id="btn-doc-detail-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none">✕</button>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div style="font-family:'Sarabun',sans-serif;line-height:1.8;color:#1d1519;max-width:800px;margin:0 auto;">
          ${Vr(e,l.cfg)}
          ${n.length?`<div style="margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;"><b style="display:block;margin-bottom:6px;font-size:13px;">ประวัติการอนุมัติ</b><div style="font-size:13px;color:#106143;">${n.map(a=>`<p style="margin-bottom:2px;">${a}</p>`).join("")}</div></div>`:""}
        </div>
      </div>
    </div>`}function pi(e,t){return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>โครงการ ${d(e.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; color: #1d1519; }
      @media print { body { padding: 0; } }
    </style></head><body>
      ${Vr(e,t)}
    </body></html>`}function or(e){pr(pi(e,l.cfg))}const lr=e=>{if(!e)return"";const t=new Date(e);if(isNaN(t))return"";const r=n=>String(n).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`};function mi(){const e=l.cfg;return`
    <form id="settings-general-form" class="space-y-4 pb-4">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🏛️ ข้อมูลทั่วไป</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ชื่อสภานักเรียน</label>
          <input name="council_name" value="${d(e.council_name||"")}" placeholder="สภานักเรียนโรงเรียน..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">โลโก้ (URL รูปภาพ)</label>
          <input name="council_logo_url" value="${d(e.council_logo_url||"")}" placeholder="https://..." class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายชาย</label>
            <input type="color" name="council_theme_side_m" value="${d(e.council_theme_side_m||"#14563b")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">สีธีมฝ่ายหญิง</label>
            <input type="color" name="council_theme_side_w" value="${d(e.council_theme_side_w||"#a3134f")}" class="w-full h-10 border border-[var(--line)] rounded-xl px-1 bg-[var(--surface)]" />
          </div>
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">⚠️ สีธีมยังเป็นค่าที่บันทึกไว้เฉยๆ ยังไม่ได้ใช้สลับสีจริงในหน้าเว็บ (รอฟีเจอร์สลับธีมตามฝ่ายในเฟสถัดไป)</p>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">🗓️ ห้วงปฏิบัติหน้าที่</p>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">เริ่ม ภาค/ปี</span>
            <input name="council_term_start_semester" value="${d(e.council_term_start_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_start_year" value="${d(e.council_term_start_year||"")}" placeholder="2568" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-xs text-[var(--muted)] flex-shrink-0">สิ้นสุด ภาค/ปี</span>
            <input name="council_term_end_semester" value="${d(e.council_term_end_semester||"")}" placeholder="2" class="w-14 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
            <input name="council_term_end_year" value="${d(e.council_term_end_year||"")}" placeholder="2569" class="flex-1 min-w-0 border border-[var(--line)] rounded-xl px-2 py-2 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✅ เกณฑ์คุณสมบัติผู้สมัคร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (สามัญ)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa" value="${d(e.council_min_gpa||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">เกรดเฉลี่ยขั้นต่ำ (ศาสนา)</label>
            <input type="number" step="0.01" min="0" max="4" name="council_min_gpa_religious" value="${d(e.council_min_gpa_religious||"2.50")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ระดับชั้นที่สมัครได้ (คั่นด้วย ,)</label>
          <input name="council_eligible_grade_levels" value="${d(e.council_eligible_grade_levels||wr)}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">จำนวนเกียรติบัตร/รางวัลขั้นต่ำที่ต้องแนบ</label>
          <input type="number" min="0" step="1" name="council_min_certificates" value="${d(e.council_min_certificates||"5")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
            <input type="datetime-local" name="council_apply_opens_at" value="${d(lr(e.council_apply_opens_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ปิดรับสมัครเมื่อ</label>
            <input type="datetime-local" name="council_apply_closes_at" value="${d(lr(e.council_apply_closes_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">📈 เกณฑ์การประเมินความเป็นสมาชิกสภา</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">คิดจากกิจกรรมที่เกิดขึ้นแล้ว (กำลังดำเนินการ/เสร็จแล้ว) และถูกเลือกไว้ตอนสร้างว่า "นับผล" เท่านั้น — ตัวเลข % เป็นข้อมูลให้ครูที่ปรึกษาสภาดูประกอบการตัดสินใจเท่านั้น ไม่ตัดสิทธิ์อัตโนมัติ</p>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">% เช็คชื่อขั้นต่ำที่ควรผ่าน (เว้นว่าง = ไม่ตั้งเกณฑ์)</label>
          <input type="number" min="0" max="100" step="1" name="council_min_attendance_pct" value="${d(e.council_min_attendance_pct||"")}" placeholder="เช่น 80" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
          <textarea name="council_test_student_codes" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(e.council_test_student_codes||"")}</textarea>
        </div>
        <div>
          <label class="block text-xs font-medium text-[var(--muted)] mb-1">ข้อความขอบคุณหลังโหวต</label>
          <textarea name="council_election_thank_you_message" rows="2" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${d(e.council_election_thank_you_message||"")}</textarea>
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-3">
        <p class="text-sm font-bold text-[var(--ink-2)]">✍️ ผู้ลงนามเอกสาร/เกียรติบัตร</p>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ครูที่ปรึกษาสภา</label>
            <input name="council_signer_advisor_name" value="${d(e.council_signer_advisor_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ผู้อำนวยการโรงเรียน</label>
            <input name="council_signer_director_name" value="${d(e.council_signer_director_name||"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
        </div>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex justify-end">
        <button type="submit" class="px-6 py-2.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกการตั้งค่า</button>
      </div>
    </form>`}function bi(){const e={M:l.positions.filter(o=>o.gender==="M").sort((o,c)=>o.sort_order-c.sort_order),W:l.positions.filter(o=>o.gender==="W").sort((o,c)=>o.sort_order-c.sort_order)},t=o=>{const c=o==="M"?"👦 ฝ่ายชาย":"👧 ฝ่ายหญิง",p=e[o].map(u=>`
      <form class="position-row-form flex items-center gap-2 py-2 border-b border-[var(--line-soft)] last:border-0" data-id="${u.id}">
        <input name="position_name" value="${d(u.position_name)}" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-1.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <input name="seats_count" type="number" min="1" value="${u.seats_count}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-sm text-center bg-[var(--surface)] text-[var(--ink)]" />
        ${u.is_elected?'<span class="text-[0.625rem] font-bold px-2 py-1 rounded-full bg-[var(--gold-soft)] text-[var(--gold-ink)] flex-shrink-0">มาจากเลือกตั้ง</span>':""}
        <button type="submit" class="text-xs font-bold text-[var(--primary)] flex-shrink-0 px-2 py-1.5">บันทึก</button>
        <button type="button" class="btn-delete-position text-[var(--bad)] flex-shrink-0 px-1 text-lg leading-none" data-id="${u.id}" title="ลบตำแหน่ง">✕</button>
      </form>`).join("");return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${c}</p>
        ${p||'<p class="text-xs text-[var(--muted-2)] py-2">ยังไม่มีตำแหน่ง</p>'}
        <form class="position-add-form flex gap-2 mt-3" data-gender="${o}">
          <input name="position_name" placeholder="เพิ่มตำแหน่งใหม่" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
          <input name="seats_count" type="number" min="1" value="1" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-2 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
        </form>
      </div>`},r=[],n=new Set;[...e.M,...e.W].forEach(o=>{n.has(o.position_name)||(n.add(o.position_name),r.push(o.position_name))});const a=e.M.reduce((o,c)=>o+Number(c.seats_count),0),s=e.W.reduce((o,c)=>o+Number(c.seats_count),0),i=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mt-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📊 สรุปรวมจำนวนที่นั่งทั้งสภา</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-left text-[var(--muted)]"><th class="py-1.5 pr-2">ตำแหน่ง</th><th class="py-1.5 px-2 text-center">ชาย</th><th class="py-1.5 px-2 text-center">หญิง</th><th class="py-1.5 pl-2 text-center">รวม</th></tr></thead>
          <tbody>
            ${r.map(o=>{var u,b;const c=((u=e.M.find(_=>_.position_name===o))==null?void 0:u.seats_count)??0,p=((b=e.W.find(_=>_.position_name===o))==null?void 0:b.seats_count)??0;return`<tr class="border-t border-[var(--line-soft)]"><td class="py-1.5 pr-2 text-[var(--ink-2)]">${d(o)}</td><td class="py-1.5 px-2 text-center">${c}</td><td class="py-1.5 px-2 text-center">${p}</td><td class="py-1.5 pl-2 text-center font-bold text-[var(--primary)]">${c+p}</td></tr>`}).join("")}
            <tr class="border-t-2 border-[var(--line)] font-bold"><td class="py-1.5 pr-2 text-[var(--ink)]">รวมทั้งหมด</td><td class="py-1.5 px-2 text-center">${a}</td><td class="py-1.5 px-2 text-center">${s}</td><td class="py-1.5 pl-2 text-center text-[var(--primary)]">${a+s}</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;return`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${t("M")}${t("W")}</div>${i}`}function vi(){if(re===null)return kr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(oe===null)return Va(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Q===null)return Hr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(W===null)return Or(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=re.reduce((p,u)=>p+Number(u.weight),0),t=(e/2).toFixed(1),r=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${e} คะแนน · ผ่านเกณฑ์ที่ ≥ ${t})</p>
      <div class="space-y-1.5 mt-2">
        ${re.map(p=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${d(p.name)}</span>
            <span class="font-bold text-[var(--muted)]">${p.weight} คะแนน</span>
            <button type="button" class="btn-remove-interview-criterion text-[var(--bad)] hover:text-[#8a2f22]" data-id="${p.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีหัวข้อ</p>'}
      </div>
      <form id="interview-criterion-form" class="flex gap-2 mt-3">
        <input name="name" placeholder="เพิ่มหัวข้อใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <input name="weight" type="number" min="1" value="10" class="w-20 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,n=(()=>{try{return JSON.parse(l.cfg.council_video_brief||"[]")}catch{return[]}})(),a=`
    <form id="settings-video-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎬 วิดีโอแนะนำตัว</p>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)]">ความยาวไม่เกิน</span>
        <input name="council_video_max_minutes" type="number" min="1" value="${d(l.cfg.council_video_max_minutes||"3")}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
        <span class="text-xs text-[var(--muted)]">นาที</span>
      </div>
      <label class="block text-xs font-medium text-[var(--muted)]">หัวข้อที่ต้องพูด (บรรทัดละ 1 หัวข้อ)</label>
      <textarea name="council_video_brief" rows="5" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${d(n.join(`
`))}</textarea>
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,s=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">💬 ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ</p>
      <div class="space-y-1.5">
        ${oe.map(p=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${d(p.phrase)}</span>
            <button type="button" class="btn-remove-phrase text-[var(--bad)] hover:text-[#8a2f22]" data-id="${p.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีข้อความ</p>'}
      </div>
      <form id="phrase-form" class="flex gap-2 mt-3">
        <input name="phrase" placeholder="เพิ่มข้อความใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,i=(p,u)=>`
    <div>
      <label class="block text-xs font-medium text-[var(--muted)] mb-1">${p} (บรรทัดละ 1 รายการ)</label>
      <textarea name="${u}" rows="3" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${d(Ur(u).join(`
`))}</textarea>
    </div>`,o=`
    <form id="settings-doc-options-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">📄 ตัวเลือกฟอร์มเอกสารโครงการ</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] -mt-2">ใช้เป็นตัวเลือกในฟอร์มร่างเอกสารโครงการ (ถ้าไม่ตั้งค่าไว้ ฟอร์มจะให้พิมพ์เองแทน)</p>
      ${i("แผนงาน","council_doc_plan_areas")}
      ${i("ลักษณะโครงการ","council_doc_project_types")}
      ${i("สนองกลยุทธ์โรงเรียน","council_doc_school_strategies")}
      ${i("สนองมาตรฐานการศึกษา/ตัวชี้วัด","council_doc_education_standards")}
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,c=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🏅 เทมเพลตเกียรติบัตรกิจกรรม</p>
      <div class="space-y-1.5 mb-3">
        ${W.map(p=>{var _;const u=(_=p.layout)==null?void 0:_.background,b=u?u.type==="image"?u.imageUrl:null:p.type==="custom"?p.background_image_url:null;return`
          <div class="flex items-center gap-2 text-xs">
            ${b?`<img src="${d(b)}" class="w-10 h-7 object-cover rounded border border-[var(--line)] flex-shrink-0" />`:`<span class="flex-shrink-0">${d((_t[p.preset_key]??"🏅").split(" ")[0])}</span>`}
            <span class="flex-1 text-[var(--ink-2)] truncate">${d(p.name)} ${p.type==="preset"?"· "+d(_t[p.preset_key]??p.preset_key):"· อัปโหลดเอง"}</span>
            <button type="button" class="btn-design-cert-template text-[var(--primary)] hover:text-[var(--primary-dark)] font-bold flex-shrink-0" data-id="${p.id}">🎨 ออกแบบ</button>
            <button type="button" class="btn-remove-cert-template text-[var(--bad)] hover:text-[#8a2f22] flex-shrink-0" data-id="${p.id}">✕</button>
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
          ${Object.entries(_t).map(([p,u])=>`<option value="${p}">${d(u)}</option>`).join("")}
        </select>
        <input type="file" name="background_image" id="cert-template-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`;return`${r}${a}${Fr()}${s}${o}${c}`}function xi(){const e=Pt();return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(Ua).map(([t,r])=>`
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${d(r)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${t}" ${e[t]!==!1?"checked":""} />
        </label>`).join("")}
    </div>`}const Qe={},Ve={},_e={};async function dr(e){const[t,r,n]=await Promise.all([Vn(e).catch(()=>[]),Yn(e).catch(()=>[]),Jn(e).catch(()=>[])]);Qe[e]=t,Ve[e]=r,_e[e]=n,v()}function fi(){var a;const e=l.isChair,t=l.isAdmin||l.isCouncilAdvisor;if(!e&&!t)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>';const r='<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>';let n="";if(e){const s=ce((a=l.student)==null?void 0:a.gender);if(s&&Qe[s]===void 0)dr(s),n+=r;else if(s){const i=Qe[s],o=Ve[s]||[],c=_e[s]||[],p=new Set(c.map(b=>b.application_id)),u=o.filter(b=>!p.has(b.id));n+=`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${D[s]}</p>
          ${i.length?u.length?`
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${i.map(b=>`<option value="${b.id}">${d(b.position_name)}</option>`).join("")}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${u.map(b=>{var _,f,m;return`<option value="${b.id}">${d(((_=b.students)==null?void 0:_.full_name)??"—")}${((m=(f=b.council_interviews)==null?void 0:f[0])==null?void 0:m.score)!=null?" (คะแนน "+b.council_interviews[0].score+")":""}</option>`}).join("")}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>':'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>'}
        </div>`,c.length&&(n+=`
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${c.map(b=>{var _,f,m,x;return`
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${N((_=b.council_applications)==null?void 0:_.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((m=(f=b.council_applications)==null?void 0:f.students)==null?void 0:m.full_name)??"—")}</p>
                  <p class="text-xs text-[var(--muted)]">${d(((x=b.council_positions)==null?void 0:x.position_name)??"—")}</p>
                </div>
              </div>`}).join("")}</div>
          </div>`)}}return t&&(n+=["M","W"].map(s=>{if(_e[s]===void 0)return dr(s),r;const i=_e[s];return i.length?`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${D[s]}</p>
          <div class="space-y-2.5">
            ${i.map(o=>{var c,p,u,b,_;return`
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${o.id}">
                <div class="flex items-center gap-3">
                  ${N((c=o.council_applications)==null?void 0:c.students)}
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((u=(p=o.council_applications)==null?void 0:p.students)==null?void 0:u.full_name)??"—")}</p>
                    <p class="text-xs text-[var(--muted)]">${d(((b=o.council_positions)==null?void 0:b.position_name)??"—")}</p>
                  </div>
                </div>
                ${(_=o.council_applications)!=null&&_.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${d(o.council_applications.motivation)}</p>`:""}
                <textarea class="nom-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]" data-id="${o.id}" rows="2" placeholder="ความเห็น (ไม่บังคับถ้าอนุมัติ, บังคับถ้าไม่อนุมัติ)"></textarea>
                <div class="flex gap-2">
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${o.id}" data-approve="false">❌ ไม่อนุมัติ</button>
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${o.id}" data-approve="true">✅ อนุมัติ</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")),n||'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>'}const gi={general:mi,positions:bi,criteria:vi,modules:xi};function _i(){return l.isAdmin||l.isCouncilAdvisor?(Xt.some(e=>e.id===Me)||(Me="general"),`
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${Xt.map(e=>`
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${e.id===Me?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="${e.id}">${d(e.label)}</button>`).join("")}
    </div>
    <div>${gi[Me]()}</div>`):'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>'}let lt="duty",Y=null,Le=null,ge=null;const cr=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];function Yr(){const e=new Date,t=e.getDay(),r=(t===0?-6:1)-t,n=new Date(e);return n.setDate(e.getDate()+r),n.setHours(0,0,0,0),n.toISOString().slice(0,10)}async function yi(){const e=l.membership[0];if(!e){Y=[],Le=new Set,ge=[],v();return}const[t,r]=await Promise.all([la(e.id).catch(()=>[]),ma(e.id).catch(()=>[])]);Y=t,ge=r,Le=await da(t.map(n=>n.id),Yr()).catch(()=>new Set),v()}function hi(){const e=l.membership[0];return e?Y===null?(yi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>'):`${`
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${lt==="duty"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${lt==="work"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="work">งานของฉัน</button>
    </div>`}${lt==="duty"?wi(e):$i()}`:'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>'}function wi(e){var n;const t=Y.filter(a=>Le.has(a.id)).length,r=Y.length?Math.round(t/Y.length*100):0;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${N(l.student,"w-14 h-18")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((n=e.council_positions)==null?void 0:n.position_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${e.source==="elected"?"🗳️ มาจากการเลือกตั้ง":"✅ ได้รับการแต่งตั้ง"} · ${e.term_start_date?new Date(e.term_start_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${t}/${Y.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${r}%"></div></div>
      ${Y.length?`<div class="space-y-1.5">${Y.map(a=>{const s=Le.has(a.id);return`
        <label class="flex items-center gap-2.5 rounded-xl border ${s?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)]"} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${a.id}" ${s?"checked":""} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${s?"text-[#106143] line-through":"text-[var(--ink-2)]"} truncate">${d(a.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${a.day_of_week!=null?cr[a.day_of_week]:""}${a.time_range?" · "+d(a.time_range):""}${a.location?" · "+d(a.location):""}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${a.id}">✕</button>
        </label>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${cr.map((a,s)=>`<option value="${s}">${a}</option>`).join("")}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`}function $i(){const e=ge.filter(n=>n.status!=="done"),t=ge.filter(n=>n.status==="done"),r=n=>`
    <label class="flex items-center gap-2.5 rounded-xl border ${n.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3">
      <input type="checkbox" class="assignment-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${n.id}" ${n.status==="done"?"checked":""} />
      <div class="min-w-0 flex-1">
        <p class="text-sm ${n.status==="done"?"text-[#106143] line-through":"text-[var(--ink)]"}">${d(n.task)}</p>
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
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${t.length}/${ge.length} เสร็จแล้ว)</p>
      ${ge.length?`<div class="space-y-2">${[...e,...t].map(r).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>'}
    </div>`}function ki(e){var c;(c=document.getElementById("council-my-qr-modal"))==null||c.remove();const t=document.createElement("div");t.id="council-my-qr-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${d(e.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-my-qr-canvas"),n=async()=>{const p=`SQ:${e.student_code}:${Math.floor(Date.now()/1e3)}`;try{await xn.toCanvas(r,p,{width:190,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch{}};n();let a=60;const s=t.querySelector("#council-qr-timer"),i=setInterval(()=>{a-=1,s&&(s.textContent=String(a)),a<=0&&(a=60,n())},1e3),o=()=>{clearInterval(i),t.remove()};t.querySelector("#btn-close-council-qr").addEventListener("click",o),t.addEventListener("click",p=>{p.target===t&&o()})}let ft=null;async function Ei(){var t;const e=l.membership[0];if(!e||!l.student){ft={activities:[],myAttendance:[]},v();return}ft=await ea(l.student.id,(t=e.council_positions)==null?void 0:t.gender,P).catch(()=>({activities:[],myAttendance:[]})),v()}const Si={planned:["ยังไม่จัด","text-[var(--gold-ink)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary)]"],completed:["เสร็จแล้ว","text-[#106143]"],cancelled:["ยกเลิก","text-[var(--muted-2)]"]};function Ai(){if(!l.membership[0])return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>';if(ft===null)return Ei(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const{activities:t,myAttendance:r}=ft,n=new Set(r.map(b=>b.activity_id)),a=t.filter(b=>b.counts_for_evaluation),s=a.filter(b=>n.has(b.id)).length,i=a.length?Math.round(s/a.length*100):null,o=l.cfg.council_min_attendance_pct?Number(l.cfg.council_min_attendance_pct):null,c=o==null||i==null?null:i>=o,p=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📈 ผลเช็คชื่อของฉัน</p>
      ${a.length?`
        <div class="flex items-end gap-2 mb-2">
          <span class="text-3xl font-bold text-[var(--primary)]">${i}%</span>
          <span class="text-xs text-[var(--muted-2)] mb-1">${s}/${a.length} กิจกรรม</span>
        </div>
        <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-2"><div class="h-full ${c===!1?"bg-[var(--bad)]":"bg-[var(--primary)]"}" style="width:${i}%"></div></div>
        ${o!=null?`<p class="text-xs ${c?"text-[var(--ok)]":"text-[var(--bad)]"} font-bold">${c?"✅ ผ่านเกณฑ์ขั้นต่ำ":"⚠️ ยังไม่ถึงเกณฑ์ขั้นต่ำ"} ${o}%</p>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีการตั้งเกณฑ์ขั้นต่ำจากผู้ดูแล</p>'}
      `:'<p class="text-xs text-[var(--muted-2)] py-4 text-center">ยังไม่มีกิจกรรมที่นับผลในระบบ</p>'}
      <p class="text-[0.625rem] text-[var(--muted-2)] mt-2">นับจากกิจกรรมที่เกิดขึ้นแล้วและถูกตั้งค่าให้ "นับผล" เท่านั้น — ผลนี้เป็นข้อมูลให้ครูที่ปรึกษาใช้ประกอบการประเมิน ไม่ได้ตัดสินอัตโนมัติ</p>
    </div>`,u=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📅 กิจกรรม/กำหนดการ</p>
      ${t.length?`<div class="space-y-2">${t.map(b=>{const _=n.has(b.id),[f,m]=Si[b.status]??["—","text-[var(--muted)]"];return`
        <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${d(b.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${b.activity_date?new Date(b.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} · <span class="${m}">${f}</span>${b.counts_for_evaluation?"":' · <span class="text-[var(--muted-2)]">ไม่นับผล</span>'}</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${_?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--bad-soft)] text-[var(--bad)]"}">${_?"✅ เช็คชื่อแล้ว":"✗ ยังไม่เช็คชื่อ"}</span>
        </div>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-8">ยังไม่มีกิจกรรม</p>'}
    </div>`;return`${p}${u}`}const Je={};async function Ii(e){Je[e]=await ba(e).catch(()=>[]),v()}function qi(){var i;if(!l.isChair)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>';const e=ce((i=l.student)==null?void 0:i.gender);if(!e)return"";if(Je[e]===void 0)return Ii(e),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const t=Je[e],r=t.filter(o=>o.status==="done").length,n=l.members.filter(o=>{var c;return((c=o.council_positions)==null?void 0:c.gender)===e}),a=`
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${D[e]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${n.map(o=>{var c,p;return`<option value="${o.id}">${d(((c=o.students)==null?void 0:c.full_name)??"—")} (${d(((p=o.council_positions)==null?void 0:p.position_name)??"")})</option>`}).join("")}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`;if(!t.length)return`${a}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`;const s=o=>{var c,p,u;return`
    <div class="rounded-xl border ${o.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3 flex items-center gap-3">
      ${N((c=o.council_members)==null?void 0:c.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${d(((u=(p=o.council_members)==null?void 0:p.students)==null?void 0:u.full_name)??"—")}</p>
        <p class="text-xs text-[var(--ink-2)]">${d(o.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${o.due_date?"กำหนดส่ง "+new Date(o.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${o.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${o.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${o.id}">ลบ</button>
      </div>
    </div>`};return`${a}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${r}/${t.length} เสร็จแล้ว)</p><div class="space-y-2">${t.map(s).join("")}</div>`}let Ie=null,qe=null,Ct=null;const gt={};async function Gt(){const[e,t,r]=await Promise.all([yt("council_advisor").catch(()=>[]),yt("student_affairs_head").catch(()=>[]),yt("school_director").catch(()=>[])]);H=e,Ie=t,qe=r,v()}async function Ci(e){gt[e]=await yr(e).catch(()=>[]),v()}function Li(e){if(gt[e]===void 0)return Ci(e),'<p class="text-xs text-[var(--muted-2)] py-2">⏳ กำลังโหลด...</p>';const t=new Set(gt[e]);return`
    <form class="advisor-dept-form mt-3 pt-3 border-t border-[var(--line-soft)]" data-teacher-id="${e}">
      <p class="text-xs font-semibold text-[var(--muted)] mb-2">ติ๊กฝ่ายที่ครูคนนี้รับผิดชอบตรวจ/รับรองเอกสารโครงการ</p>
      <div class="grid grid-cols-2 gap-1.5 mb-2">
        ${l.positions.map(r=>`
          <label class="flex items-center gap-1.5 text-xs text-[var(--ink-2)]">
            <input type="checkbox" name="pos_${r.id}" value="${r.id}" ${t.has(r.id)?"checked":""} />
            ${d(r.position_name)} (${d(D[r.gender]??"")})
          </label>`).join("")}
      </div>
      <button type="submit" class="px-4 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกฝ่าย</button>
    </form>`}function ji(e,t,r){const n=Ct===e.id;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)]">
      <div class="flex items-center gap-3">
        ${e.image_url?`<img src="${d(e.image_url)}" class="w-10 h-12 rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-10 h-12 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${d((e.full_name||"?").charAt(0))}</div>`}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${d(e.full_name)}</p>
          <p class="text-xs text-[var(--muted)]">${d(e.teacher_code||"")}${e.category?" · "+d(e.category):""} · ${e.signature_url?"✅ มีลายเซ็นแล้ว":"⚠️ ยังไม่มีลายเซ็น"}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
        <button type="button" class="btn-edit-council-profile text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}" data-name="${d(e.full_name)}" data-image="${d(e.image_url??"")}" data-signature="${d(e.signature_url??"")}">✍️ รูป/ลายเซ็น</button>
        ${r?`<button type="button" class="btn-toggle-advisor-depts text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">${n?"▲ ซ่อนฝ่ายที่ดูแล":"🏛️ ฝ่ายที่ดูแล"}</button>`:""}
        <button type="button" class="btn-remove-teacher-position text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${e.id}" data-position="${t}">ถอดถอน</button>
      </div>
      ${r&&n?Li(e.id):""}
    </div>`}function Di(){if(!l.isAdmin)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>';if(H===null)return Gt(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return jr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=`<datalist id="council-teacher-datalist">${te.map(r=>`<option value="${d(r.full_name)} · รหัส ${r.id}"></option>`).join("")}</datalist>`,t=(r,n,a,s)=>`
    <div class="mb-5">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${r} (${n.length} คน)</p>
      <form class="perms-add-form bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 mb-2 flex gap-2" data-position="${a}">
        <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
          class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
      </form>
      ${n.length?`<div class="space-y-2">${n.map(i=>ji(i,a,s)).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มี</p>'}
    </div>`;return`${e}
    ${t("ครูที่ปรึกษาสภานักเรียน",H,"council_advisor",!0)}
    ${t("หัวหน้าฝ่ายกิจการนักเรียน",Ie,"student_affairs_head",!1)}
    ${t("ผู้อำนวยการ",qe,"school_director",!1)}`}function Ti(e){const t=e.getContext("2d"),r=()=>{t.fillStyle="#fff",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#0f172a"};r(),t.lineWidth=4,t.lineCap="round";let n=!1,a=!1;const s=i=>{const o=e.getBoundingClientRect();return{x:(i.clientX-o.left)*e.width/o.width,y:(i.clientY-o.top)*e.height/o.height}};return e.addEventListener("pointerdown",i=>{var c;n=!0,(c=e.setPointerCapture)==null||c.call(e,i.pointerId);const o=s(i);t.beginPath(),t.moveTo(o.x,o.y)}),e.addEventListener("pointermove",i=>{if(!n)return;const o=s(i);t.lineTo(o.x,o.y),t.stroke(),a=!0}),e.addEventListener("pointerup",()=>{n=!1}),e.addEventListener("pointercancel",()=>{n=!1}),{clear:()=>{r(),a=!1},isDrawn:()=>a,toBlob:()=>new Promise(i=>e.toBlob(i,"image/png"))}}function ur(e){var a;(a=document.getElementById("council-profile-modal"))==null||a.remove();const t=document.createElement("div");t.id="council-profile-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-2xl w-full max-w-md p-5 max-h-[85vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-3">
        <p class="text-base font-bold text-[var(--ink)]">✍️ รูปและลายเซ็น — ${d(e.full_name)}</p>
        <button type="button" id="btn-close-council-profile" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      <div class="space-y-4">
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          <div class="flex items-center gap-3">
            ${e.image_url?`<img src="${d(e.image_url)}" class="w-14 h-[4.5rem] rounded-[10px] object-cover border border-[var(--line)] flex-shrink-0" />`:`<div class="w-14 h-[4.5rem] rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] flex-shrink-0">${d((e.full_name||"?").charAt(0))}</div>`}
            <input type="file" id="council-profile-photo-file" accept="image/*" class="text-xs flex-1 min-w-0" />
          </div>
        </div>
        <div>
          <p class="text-xs font-bold text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${d(e.signature_url)}" class="h-16 max-w-full object-contain bg-white border border-[var(--line)] rounded-lg p-1 mb-2" />`:""}
          <canvas id="council-signature-canvas" width="700" height="220" class="w-full h-32 border border-[var(--line)] rounded-xl bg-white touch-none"></canvas>
          <button type="button" id="council-signature-clear" class="text-xs text-[var(--bad)] mt-1">ล้างลายเซ็น</button>
          <p class="text-xs font-medium text-[var(--muted)] mt-2 mb-1">หรืออัปโหลดรูปลายเซ็น</p>
          <input type="file" id="council-signature-file" accept="image/*" class="text-xs" />
        </div>
        <button type="button" id="council-profile-save" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">บันทึก</button>
      </div>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-signature-canvas"),n=Ti(r);t.querySelector("#council-signature-clear").addEventListener("click",()=>n.clear()),t.querySelector("#btn-close-council-profile").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()}),t.querySelector("#council-profile-save").addEventListener("click",async()=>{var i,o;const s=t.querySelector("#council-profile-save");s.disabled=!0,s.textContent="กำลังบันทึก...";try{const c=(i=t.querySelector("#council-profile-photo-file").files)==null?void 0:i[0];if(c){const b=await an(e.id,c);await Fa(e.id,b),l.teacher&&l.teacher.id===e.id&&(l.teacher.image_url=b)}const u=((o=t.querySelector("#council-signature-file").files)==null?void 0:o[0])||(n.isDrawn()?await n.toBlob():null);if(u){const b=await sn(e.id,u);await Ha(e.id,b),l.teacher&&l.teacher.id===e.id&&(l.teacher.signature_url=b)}g("บันทึกแล้ว ✅","success"),t.remove(),H=null,Ie=null,qe=null,v()}catch(c){g("บันทึกไม่สำเร็จ: "+k(c),"error"),s.disabled=!1,s.textContent="บันทึก"}})}function Bi(){if(!l.teacher)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะบัญชีครูเท่านั้น</p>';const e=l.teacher;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-5 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-4">✍️ โปรไฟล์ของฉัน — ${d(e.full_name)}</p>
      <div class="flex items-center justify-center gap-6 mb-4">
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">รูปประจำตัว</p>
          ${e.image_url?`<img src="${d(e.image_url)}" class="w-16 h-20 rounded-[10px] object-cover border border-[var(--line)] mx-auto" />`:`<div class="w-16 h-20 rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold border border-[var(--line)] mx-auto">${d((e.full_name||"?").charAt(0))}</div>`}
        </div>
        <div>
          <p class="text-xs text-[var(--muted)] mb-1.5">ลายเซ็น</p>
          ${e.signature_url?`<img src="${d(e.signature_url)}" class="h-20 max-w-[10rem] object-contain bg-white border border-[var(--line)] rounded-lg p-1 mx-auto" />`:'<div class="h-20 w-40 rounded-lg border border-dashed border-[var(--line)] flex items-center justify-center text-xs text-[var(--muted-2)] mx-auto">ยังไม่มีลายเซ็น</div>'}
        </div>
      </div>
      <button type="button" id="btn-edit-my-council-profile" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">✏️ แก้ไขรูป/ลายเซ็น</button>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">ลายเซ็นนี้จะถูกใช้ประทับอัตโนมัติเมื่อคุณอนุมัติเอกสารโครงการ ไม่ต้องวาดใหม่ทุกครั้ง</p>
    </div>`}const Ni={overview:Ar,endorse:Ds,apps:Cs,news:Us,activities:Rs,eval:Qs,docs:di,candidates:hs,roster:js,result:qr,settings:_i,chairteam:fi,myduty:hi,mysummary:Ai,assignments:qi,peerEndorse:Bs,perms:Di,myCouncilProfile:Bi,dashboard:qs},Mi={apply:{new:os,mine:fs},election:{status:qr}};function v(){if(He){Pi();return}Ot(!0);const e=Ka();e.some(r=>r.id===U)||(U="overview"),Xa(e);const t=Ni[U]||Ar;Dt.innerHTML=`<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${t()}</div>`,Qr()}function Pi(){var r;Ot(!1);const e=Ya[He];e.subtabs.some(n=>n.id===se)||(se=e.subtabs[0].id),document.getElementById("council-view-title").textContent=e.title;const t=((r=Mi[He])==null?void 0:r[se])??(()=>"");Dt.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${e.title}</h2>
      </div>
      ${e.subtabs.length>1?`
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${e.subtabs.map(n=>`
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${n.id===se?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}"
            data-subtab="${n.id}">${d(n.label)}</button>`).join("")}
      </div>`:""}
      <div>${t()}</div>
    </div>`,document.getElementById("btn-flow-close").addEventListener("click",()=>{He=null,se=null,tt(),v()}),document.querySelectorAll(".flow-subtab-btn").forEach(n=>{n.addEventListener("click",()=>{se=n.dataset.subtab,v()})}),Qr()}function Qr(){var e,t,r,n,a,s,i,o,c,p,u,b,_,f,m,x,E,I,j,A;document.querySelectorAll(".flow-entry-btn").forEach(y=>{y.addEventListener("click",()=>{He=y.dataset.flow,se=null,v()})}),document.querySelectorAll(".goto-view").forEach(y=>{y.addEventListener("click",()=>{U=y.dataset.view,v()})}),document.querySelectorAll(".roster-gender-tab-btn").forEach(y=>{y.addEventListener("click",()=>{J=y.dataset.gender,v()})}),document.querySelectorAll(".btn-view-my-app-detail").forEach(y=>{y.addEventListener("click",()=>{Fe=Number(y.dataset.id),v()})}),(e=document.getElementById("btn-my-app-detail-close"))==null||e.addEventListener("click",()=>{Fe=null,v()}),(t=document.getElementById("my-app-detail-backdrop"))==null||t.addEventListener("click",y=>{y.target.id==="my-app-detail-backdrop"&&(Fe=null,v())}),(r=document.getElementById("btn-pick-my-app-endorser"))==null||r.addEventListener("click",y=>{As(Number(y.target.dataset.appId),y.target.dataset.gender)}),(n=document.getElementById("btn-add-council-member"))==null||n.addEventListener("click",()=>{tr({mode:"add",gender:J})}),document.querySelectorAll(".btn-edit-council-member").forEach(y=>{y.addEventListener("click",()=>{var $;const w=l.members.find(S=>S.id===Number(y.dataset.id));w&&tr({mode:"edit",gender:($=w.council_positions)==null?void 0:$.gender,member:w})})}),document.querySelectorAll(".btn-remove-council-member").forEach(y=>{y.addEventListener("click",async()=>{if(confirm("ลบสมาชิกสภาคนนี้ออกจากทำเนียบ? (จะเก็บประวัติไว้ ไม่ได้ลบข้อมูลทิ้งถาวร)"))try{await Gn(Number(y.dataset.id)),g("ลบแล้ว ✅","success"),l.members=await je().catch(()=>l.members),v()}catch(w){g("ลบไม่สำเร็จ: "+k(w),"error")}})}),document.querySelectorAll(".btn-toggle-can-create").forEach(y=>{y.addEventListener("click",async()=>{const w=Number(y.dataset.id),$=y.dataset.value==="1";y.disabled=!0;try{await In(w,$);const S=l.members.find(T=>T.id===w);S&&(S.can_create_activities=$);const q=l.membership.find(T=>T.id===w);q&&(q.can_create_activities=$),g($?"ให้สิทธิ์สร้างกิจกรรมแล้ว ✅":"ถอนสิทธิ์แล้ว ✅","success"),v()}catch(S){g("บันทึกไม่สำเร็จ: "+k(S),"error"),y.disabled=!1}})}),document.querySelectorAll(".btn-peer-endorse").forEach(y=>{y.addEventListener("click",()=>Ns(y.dataset.id))}),(a=document.getElementById("btn-open-apply"))==null||a.addEventListener("click",()=>{if(!pt(l.student)){g(kt(l.student),"warning");return}ut=!0;const y=za();R=y&&y.step>1?y:null,R||(M=Re(Oe())),v()}),(s=document.getElementById("btn-cancel-apply"))==null||s.addEventListener("click",()=>{tt(),R=null,v()}),(i=document.getElementById("btn-apply-draft-resume"))==null||i.addEventListener("click",()=>{L={...L,...R.data},B=R.step;const y=R.certTitles||[];M=y.length?y.map(w=>({file:null,title:w||"",previewUrl:null,isPdf:!1})):Re(Oe()),R=null,v()}),(o=document.getElementById("btn-apply-draft-discard"))==null||o.addEventListener("click",()=>{Kt(),tt(),R=null,ut=!0,v()}),(c=document.getElementById("btn-apply-back"))==null||c.addEventListener("click",()=>{B=Math.max(1,B-1),V(),v()}),(p=document.getElementById("apply-step1-form"))==null||p.addEventListener("submit",y=>{y.preventDefault();const w=y.target.positionId.value;if(!w){g("กรุณาเลือกตำแหน่ง","warning");return}L.positionId=w,B=2,V(),v()}),(u=document.getElementById("apply-step2-form"))==null||u.addEventListener("submit",y=>{y.preventDefault();const w=y.target,$=w.gpaGeneral.value,S=w.gpaReligious.value,q=w.motivation.value.trim(),T=Number($),Z=Number(S);if(!$||!S||T<0||T>4||Z<0||Z>4){g("กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)","warning");return}const ne=Number(l.cfg.council_min_gpa||2.5),O=Number(l.cfg.council_min_gpa_religious||2.5);if(T<ne||Z<O){g(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${ne}, ศาสนา ≥ ${O})`,"warning");return}if(q.length<10){g("กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร","warning");return}L.gpaGeneral=$,L.gpaReligious=S,L.motivation=q,B=3,V(),v()}),(b=document.getElementById("apply-photo"))==null||b.addEventListener("change",y=>{var $;const w=(($=y.target.files)==null?void 0:$[0])??null;xe=w,X&&URL.revokeObjectURL(X),X=w?URL.createObjectURL(w):null,v()}),(_=document.getElementById("btn-apply-step3-next"))==null||_.addEventListener("click",()=>{if(!xe){g("กรุณาแนบรูปถ่าย","warning");return}B=4,V(),v()}),(f=document.getElementById("apply-step4-form"))==null||f.addEventListener("submit",y=>{y.preventDefault();const w=y.target.videoUrl.value.trim();if(!/^https?:\/\//.test(w)){g("กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)","warning");return}L.videoUrl=w,B=5,V(),v()}),document.querySelectorAll(".cert-title-input").forEach(y=>{y.addEventListener("input",()=>{M[+y.dataset.idx].title=y.value,V()})}),document.querySelectorAll(".cert-file-input").forEach(y=>{y.addEventListener("change",w=>{var T;const $=+y.dataset.idx,S=((T=w.target.files)==null?void 0:T[0])??null,q=M[$];q.previewUrl&&URL.revokeObjectURL(q.previewUrl),q.file=S,q.isPdf=(S==null?void 0:S.type)==="application/pdf",q.previewUrl=S&&!q.isPdf?URL.createObjectURL(S):null,v()})}),(m=document.getElementById("btn-add-cert"))==null||m.addEventListener("click",()=>{M.push(...Re(1)),V(),v()}),document.querySelectorAll(".btn-remove-cert").forEach(y=>{y.addEventListener("click",()=>{const w=+y.dataset.idx,$=M[w];$.previewUrl&&URL.revokeObjectURL($.previewUrl),M.splice(w,1),V(),v()})}),(x=document.getElementById("btn-apply-step5-next"))==null||x.addEventListener("click",()=>{const y=M.filter($=>$.file&&$.title.trim()).length,w=Oe();if(y<w){g(`กรุณาแนบเกียรติบัตร/รางวัลอย่างน้อย ${w} รายการ (พร้อมชื่อรางวัล)`,"warning");return}Rt()?B=6:we=!0,V(),v()}),document.querySelectorAll(".btn-pick-peer-endorser").forEach(y=>{y.addEventListener("click",()=>{L.peerEndorserId=y.dataset.id,V(),v()})}),(E=document.getElementById("btn-apply-step6-next"))==null||E.addEventListener("click",()=>{if(!L.peerEndorserId){g("กรุณาเลือกพี่สภาที่ต้องการให้รับรอง","warning");return}we=!0,V(),v()}),(I=document.getElementById("btn-apply-edit"))==null||I.addEventListener("click",()=>{we=!1,v()}),(j=document.getElementById("apply-confirm-backdrop"))==null||j.addEventListener("click",y=>{y.target.id==="apply-confirm-backdrop"&&(we=!1,v())}),(A=document.getElementById("btn-apply-confirm-submit"))==null||A.addEventListener("click",async()=>{if(!pt(l.student)){g(kt(l.student),"error");return}const y=document.getElementById("btn-apply-confirm-submit");y.disabled=!0,y.textContent="กำลังส่ง...";try{let w=null;xe&&(w=await tn(l.student.id,xe));const $=M.filter(q=>q.file&&q.title.trim()),S=await Promise.all($.map(async q=>({title:q.title.trim(),url:await rn(l.student.id,q.file)})));await qn({studentId:l.student.id,positionId:Number(L.positionId),academicYear:Number(l.cfg.academicYear)||new Date().getFullYear()+543,motivation:L.motivation,photoUrl:w,gpaGeneral:Number(L.gpaGeneral),gpaReligious:Number(L.gpaReligious),introVideoUrl:L.videoUrl,certificates:S,requestedPeerEndorserId:L.peerEndorserId?Number(L.peerEndorserId):null}),g("ส่งใบสมัครสำเร็จ ✅","success"),Kt(),tt(),await Er(),se="mine",v()}catch(w){g("ส่งใบสมัครไม่สำเร็จ: "+k(w),"error"),y.disabled=!1,y.textContent="✅ ยืนยันการสมัคร"}}),document.querySelectorAll(".endorse-phrase-chip").forEach(y=>{y.addEventListener("click",()=>{const w=document.querySelector(`.endorse-comment[data-id="${y.dataset.target}"]`);if(!w)return;const $=w.value.trim();w.value=$?$+" "+y.dataset.phrase:y.dataset.phrase,w.focus()})}),document.querySelectorAll(".btn-endorse-confirm").forEach(y=>{y.addEventListener("click",()=>rr(y.dataset.id,"confirm"))}),document.querySelectorAll(".btn-endorse-decline").forEach(y=>{y.addEventListener("click",()=>rr(y.dataset.id,"decline"))}),Yi(),Qi(),Ui(),Vi(),zi(),Wi(),Gi(),Fi(),Ri(),Hi(),Oi()}function Oi(){var e;document.querySelectorAll(".perms-add-form").forEach(t=>{t.addEventListener("submit",async r=>{var u;r.preventDefault();const n=r.target,a=n.dataset.position,i=n.teacherText.value.trim().match(/· รหัส (\d+)$/);if(!i){g("กรุณาเลือกชื่อครูจากรายการที่แสดง","warning");return}const o=Number(i[1]);if((u={council_advisor:H,student_affairs_head:Ie,school_director:qe}[a])!=null&&u.some(b=>b.id===o)){g("ครูคนนี้อยู่ในรายชื่อนี้แล้ว","warning");return}const p=n.querySelector('button[type="submit"]');p.disabled=!0,p.textContent="กำลังบันทึก...";try{await Ma(o,a),g("เพิ่มแล้ว ✅","success"),H=null,Ie=null,qe=null,v()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),p.disabled=!1,p.textContent="เพิ่ม"}})}),document.querySelectorAll(".btn-remove-teacher-position").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ถอดถอนออกจากรายชื่อนี้?"))try{await Pa(Number(t.dataset.id),t.dataset.position),H=null,Ie=null,qe=null,v()}catch(r){g("ถอดถอนไม่สำเร็จ: "+k(r),"error")}})}),document.querySelectorAll(".btn-toggle-advisor-depts").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);Ct=Ct===r?null:r,v()})}),document.querySelectorAll(".advisor-dept-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.teacherId),a=l.positions.filter(i=>{var o;return(o=t[`pos_${i.id}`])==null?void 0:o.checked}).map(i=>i.id),s=t.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await Oa(n,a),gt[n]=a,g("บันทึกฝ่ายที่ดูแลแล้ว ✅","success"),v()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error"),s.disabled=!1,s.textContent="บันทึกฝ่าย"}})}),document.querySelectorAll(".btn-edit-council-profile").forEach(t=>{t.addEventListener("click",()=>{ur({id:Number(t.dataset.id),full_name:t.dataset.name,image_url:t.dataset.image||null,signature_url:t.dataset.signature||null})})}),(e=document.getElementById("btn-edit-my-council-profile"))==null||e.addEventListener("click",()=>{l.teacher&&ur(l.teacher)})}function Ri(){var e,t;document.querySelectorAll(".myduty-subtab-btn").forEach(r=>{r.addEventListener("click",()=>{lt=r.dataset.tab,v()})}),(e=document.getElementById("routine-add-form"))==null||e.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,a=n.task.value.trim();if(!a){g("กรุณากรอกงานที่ต้องทำ","warning");return}const s=l.membership[0];try{await ca({memberId:s.id,dayOfWeek:n.dayOfWeek.value===""?null:Number(n.dayOfWeek.value),timeRange:n.timeRange.value.trim(),task:a,location:n.location.value.trim()}),Y=null,v()}catch(i){g("เพิ่มไม่สำเร็จ: "+k(i),"error")}}),document.querySelectorAll(".btn-remove-routine").forEach(r=>{r.addEventListener("click",async()=>{if(confirm("ลบรูทีนนี้?"))try{await ua(Number(r.dataset.id)),Y=null,v()}catch(n){g("ลบไม่สำเร็จ: "+k(n),"error")}})}),document.querySelectorAll(".routine-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),a=r.checked;r.disabled=!0;try{await pa({routineId:n,weekStart:Yr(),done:a}),a?Le.add(n):Le.delete(n),v()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error"),r.checked=!a,r.disabled=!1}})}),document.querySelectorAll(".assignment-check").forEach(r=>{r.addEventListener("change",async()=>{const n=Number(r.dataset.id),a=r.checked?"done":"open";r.disabled=!0;try{await xa(n,a);const s=ge.find(i=>i.id===n);s&&(s.status=a),v()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error"),r.checked=!r.checked,r.disabled=!1}})}),(t=document.getElementById("btn-show-my-council-qr"))==null||t.addEventListener("click",()=>{l.student&&ki(l.student)})}function Hi(){var e;(e=document.getElementById("assignment-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.memberId.value),a=r.task.value.trim();if(!n||!a){g("กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน","warning");return}const s=r.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await va({memberId:n,task:a,dueDate:r.dueDate.value||null,assignedByStudentId:l.student.id}),g("มอบหมายงานแล้ว ✅","success");const i=ce(l.student.gender);delete Je[i],v()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error"),s.disabled=!1,s.textContent="มอบหมายงาน"}}),document.querySelectorAll(".btn-delete-assignment").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบงานที่มอบหมายนี้?"))try{await fa(Number(t.dataset.id));const r=ce(l.student.gender);delete Je[r],v()}catch(r){g("ลบไม่สำเร็จ: "+k(r),"error")}})})}function Fi(){var e;(e=document.getElementById("nominate-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=Number(r.positionId.value),a=Number(r.applicationId.value);if(!n||!a){g("กรุณาเลือกตำแหน่งและผู้สมัคร","warning");return}const s=r.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังเสนอ...";try{await Qn({applicationId:a,positionId:n,proposedByStudentId:l.student.id}),g("เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅","success");const i=ce(l.student.gender);delete _e[i],delete Ve[i],v()}catch(i){g("เสนอไม่สำเร็จ: "+k(i),"error"),s.disabled=!1,s.textContent="เสนอต่อครูที่ปรึกษาสภา"}}),document.querySelectorAll(".btn-decide-nomination").forEach(t=>{t.addEventListener("click",async()=>{var i,o;const r=Number(t.dataset.id),n=t.dataset.approve==="true",a=((i=document.querySelector(`.nom-comment[data-id="${r}"]`))==null?void 0:i.value.trim())??"";if(!n&&!a){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}const s=t.closest("[data-nom-card]");s==null||s.querySelectorAll("button").forEach(c=>{c.disabled=!0});try{await Kn({nominationId:r,approve:n,teacherId:((o=l.teacher)==null?void 0:o.id)??null,comment:a}),g(n?"อนุมัติแล้ว ✅":"ไม่อนุมัติแล้ว","success"),delete Qe.M,delete Qe.W,delete Ve.M,delete Ve.W,delete _e.M,delete _e.W,l.members=await je().catch(()=>l.members),v()}catch(c){g("บันทึกไม่สำเร็จ: "+k(c),"error"),s==null||s.querySelectorAll("button").forEach(p=>{p.disabled=!1})}})})}function Gi(){var e,t,r,n,a,s;document.querySelectorAll(".settings-tab-btn").forEach(i=>{i.addEventListener("click",()=>{Me=i.dataset.tab,v()})}),(e=document.getElementById("settings-general-form"))==null||e.addEventListener("submit",async i=>{i.preventDefault();const o=i.target,c=o.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{const p={council_name:o.council_name.value.trim(),council_logo_url:o.council_logo_url.value.trim(),council_theme_side_m:o.council_theme_side_m.value,council_theme_side_w:o.council_theme_side_w.value,council_term_start_semester:o.council_term_start_semester.value.trim(),council_term_start_year:o.council_term_start_year.value.trim(),council_term_end_semester:o.council_term_end_semester.value.trim(),council_term_end_year:o.council_term_end_year.value.trim(),council_min_gpa:o.council_min_gpa.value,council_min_gpa_religious:o.council_min_gpa_religious.value,council_eligible_grade_levels:o.council_eligible_grade_levels.value.trim(),council_min_certificates:o.council_min_certificates.value,council_min_attendance_pct:o.council_min_attendance_pct.value,council_require_teacher_endorsement:o.council_require_teacher_endorsement.checked?"true":"false",council_require_peer_endorsement:o.council_require_peer_endorsement.checked?"true":"false",council_apply_opens_at:o.council_apply_opens_at.value?new Date(o.council_apply_opens_at.value).toISOString():"",council_apply_closes_at:o.council_apply_closes_at.value?new Date(o.council_apply_closes_at.value).toISOString():"",council_featured_phase:o.council_featured_phase.value,council_visible_to_all:o.council_visible_to_all.checked?"true":"false",council_test_student_codes:o.council_test_student_codes.value.trim(),council_election_thank_you_message:o.council_election_thank_you_message.value.trim(),council_signer_advisor_name:o.council_signer_advisor_name.value.trim(),council_signer_director_name:o.council_signer_director_name.value.trim()};await Ke(p),l.cfg={...l.cfg,...p},Sr(l.cfg),g("บันทึกการตั้งค่าแล้ว ✅","success"),v()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error"),c.disabled=!1,c.textContent="💾 บันทึกการตั้งค่า"}}),document.querySelectorAll(".position-row-form").forEach(i=>{i.addEventListener("submit",async o=>{o.preventDefault();const c=Number(i.dataset.id),p=i.position_name.value.trim(),u=Number(i.seats_count.value);if(!p||!u){g("กรอกชื่อและจำนวนที่นั่งให้ครบ","warning");return}try{await yn(c,{position_name:p,seats_count:u}),l.positions=await Pe(),g("บันทึกแล้ว ✅","success"),v()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error")}})}),document.querySelectorAll(".btn-delete-position").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)"))try{await hn(Number(i.dataset.id)),l.positions=await Pe(),v()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),document.querySelectorAll(".position-add-form").forEach(i=>{i.addEventListener("submit",async o=>{o.preventDefault();const c=i.dataset.gender,p=i.position_name.value.trim(),u=Number(i.seats_count.value)||1;if(!p){g("กรอกชื่อตำแหน่ง","warning");return}try{await _n({gender:c,positionName:p,seatsCount:u,isElected:!1,sortOrder:999}),l.positions=await Pe(),g("เพิ่มตำแหน่งแล้ว ✅","success"),v()}catch(b){g("เพิ่มไม่สำเร็จ: "+k(b),"error")}})}),(t=document.getElementById("interview-criterion-form"))==null||t.addEventListener("submit",async i=>{i.preventDefault();const o=i.target,c=o.name.value.trim(),p=Number(o.weight.value);if(!c||!p){g("กรอกชื่อหัวข้อและคะแนนให้ครบ","warning");return}try{await $n({name:c,weight:p}),re=null,v()}catch(u){g("บันทึกไม่สำเร็จ: "+k(u),"error")}}),document.querySelectorAll(".btn-remove-interview-criterion").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?"))try{await kn(Number(i.dataset.id)),re=null,v()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),(r=document.getElementById("settings-video-form"))==null||r.addEventListener("submit",async i=>{i.preventDefault();const o=i.target,c=o.council_video_max_minutes.value.trim(),p=o.council_video_brief.value.split(`
`).map(u=>u.trim()).filter(Boolean);try{const u={council_video_max_minutes:c,council_video_brief:JSON.stringify(p)};await Ke(u),l.cfg={...l.cfg,...u},g("บันทึกแล้ว ✅","success"),v()}catch(u){g("บันทึกไม่สำเร็จ: "+k(u),"error")}}),(n=document.getElementById("settings-doc-options-form"))==null||n.addEventListener("submit",async i=>{i.preventDefault();const o=i.target,c=p=>p.split(`
`).map(u=>u.trim()).filter(Boolean);try{const p={council_doc_plan_areas:JSON.stringify(c(o.council_doc_plan_areas.value)),council_doc_project_types:JSON.stringify(c(o.council_doc_project_types.value)),council_doc_school_strategies:JSON.stringify(c(o.council_doc_school_strategies.value)),council_doc_education_standards:JSON.stringify(c(o.council_doc_education_standards.value))};await Ke(p),l.cfg={...l.cfg,...p},g("บันทึกแล้ว ✅","success"),v()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error")}}),(a=document.getElementById("phrase-form"))==null||a.addEventListener("submit",async i=>{i.preventDefault();const c=i.target.phrase.value.trim();if(c)try{await En({phrase:c,sortOrder:(oe==null?void 0:oe.length)??0}),oe=null,v()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error")}}),document.querySelectorAll(".btn-remove-phrase").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("ลบข้อความนี้?"))try{await Sn(Number(i.dataset.id)),oe=null,v()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),document.querySelectorAll(".cert-template-type-radio").forEach(i=>{i.addEventListener("change",()=>{var c,p,u;const o=((c=document.querySelector('input[name="template_type"]:checked'))==null?void 0:c.value)==="custom";(p=document.getElementById("cert-template-preset-select"))==null||p.classList.toggle("hidden",o),(u=document.getElementById("cert-template-file-input"))==null||u.classList.toggle("hidden",!o)})}),(s=document.getElementById("cert-template-form"))==null||s.addEventListener("submit",async i=>{var b,_;i.preventDefault();const o=i.target,c=o.name.value.trim();if(!c)return;const p=o.template_type.value==="custom",u=o.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังบันทึก...";try{let f=null;if(p){const E=(b=o.background_image.files)==null?void 0:b[0];if(!E){g("กรุณาอัปโหลดรูปพื้นหลังเทมเพลต","warning"),u.disabled=!1,u.textContent="เพิ่มเทมเพลต";return}f=await nn(E)}const m=p?null:o.preset_key.value,x=dn(p?"custom":m);p&&(x.background={type:"image",imageUrl:f}),await cn({name:c,type:p?"custom":"preset",presetKey:m,backgroundImageUrl:f,layout:x,createdByTeacherId:((_=l.teacher)==null?void 0:_.id)??null}),g("เพิ่มเทมเพลตแล้ว ✅","success"),W=null,v()}catch(f){g("บันทึกไม่สำเร็จ: "+k(f),"error"),u.disabled=!1,u.textContent="เพิ่มเทมเพลต"}}),document.querySelectorAll(".btn-remove-cert-template").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("ลบเทมเพลตนี้?"))try{await un(Number(i.dataset.id)),W=null,v()}catch(o){g("ลบไม่สำเร็จ: "+k(o),"error")}})}),document.querySelectorAll(".btn-design-cert-template").forEach(i=>{i.addEventListener("click",()=>{const o=W==null?void 0:W.find(c=>c.id===Number(i.dataset.id));o&&vn({template:o,previewVariables:{reason:"เข้าร่วมกิจกรรมตัวอย่างจนสำเร็จ"},placeholderTokens:[{token:"{{reason}}",label:"เหตุผล/รายละเอียด"}],onSave:async(c,p)=>{await pn({id:o.id,layout:c,backgroundImageUrl:p}),g("บันทึกดีไซน์แล้ว ✅","success"),W=null,v()}})})}),document.querySelectorAll(".module-toggle").forEach(i=>{i.addEventListener("change",async()=>{const o=Pt();o[i.dataset.key]=i.checked;try{await Ke({council_modules:JSON.stringify(o)}),l.cfg={...l.cfg,council_modules:JSON.stringify(o)},g(i.checked?"เปิดใช้งานแล้ว":"ปิดใช้งานแล้ว","success"),v()}catch(c){g("บันทึกไม่สำเร็จ: "+k(c),"error"),i.checked=!i.checked}})})}function Wi(){var e,t,r,n,a,s,i;(e=document.getElementById("btn-new-doc"))==null||e.addEventListener("click",()=>{K="new",v()}),(t=document.getElementById("btn-doc-form-back"))==null||t.addEventListener("click",()=>{K=null,v()}),(r=document.getElementById("btn-doc-form-cancel"))==null||r.addEventListener("click",()=>{K=null,v()}),document.querySelectorAll(".btn-edit-doc").forEach(o=>{o.addEventListener("click",()=>{K=Number(o.dataset.id),v()})}),(n=document.getElementById("btn-doc-ai-import-open"))==null||n.addEventListener("click",()=>ai()),document.querySelectorAll(".doc-responsible-chip").forEach(o=>{o.addEventListener("click",()=>{const c=document.querySelector('textarea[name="responsiblePersons"]');if(!c)return;const p=c.value.split(`
`).map(u=>u.trim()).filter(Boolean);p.includes(o.dataset.name)||p.push(o.dataset.name),c.value=p.join(`
`)})}),(a=document.getElementById("doc-form"))==null||a.addEventListener("submit",async o=>{o.preventDefault();const c=o.target,p=c.title.value.trim();if(!p){g("กรุณากรอกชื่อโครงการ","warning");return}const u=c.dataset.origin,b=c.positionId.value?Number(c.positionId.value):null;if(u==="council"&&!b){g("กรุณาเลือกฝ่ายที่รับผิดชอบ (ใช้ส่งให้ครูที่ปรึกษาประจำฝ่ายตรวจ)","warning");return}const _={title:p,planArea:c.planArea.value.trim(),projectType:c.projectType.value.trim(),schoolStrategy:c.schoolStrategy.value.trim(),educationStandard:c.educationStandard.value.trim(),responsiblePersons:ve(c.responsiblePersons.value),positionId:b,rationale:c.rationale.value.trim(),objectives:ve(c.objectives.value),goalsQuantitative:ve(c.goalsQuantitative.value),goalsQualitative:ve(c.goalsQualitative.value),workSteps:Xe(c.workSteps.value,4),durationText:c.durationText.value.trim(),locationText:c.locationText.value.trim(),budgetItems:Xe(c.budgetItems.value,2),stakeholders:Xe(c.stakeholders.value,2),evaluationItems:Xe(c.evaluationItems.value,4),expectedResults:ve(c.expectedResults.value)},f=c.querySelector('button[type="submit"]');f.disabled=!0,f.textContent="กำลังบันทึก...";try{K==="new"?await La({..._,origin:u,academicYear:P,createdByStudentId:u==="council"&&l.student?l.student.id:null,createdByTeacherId:u==="teacher"&&l.teacher?l.teacher.id:null}):await ja(K,_),g("บันทึกร่างแล้ว ✅","success"),z=null,K=null,v()}catch(m){g("บันทึกไม่สำเร็จ: "+k(m),"error"),f.disabled=!1,f.textContent="💾 บันทึกร่าง"}}),document.querySelectorAll(".btn-submit-doc").forEach(o=>{o.addEventListener("click",async()=>{o.disabled=!0;try{await Da(Number(o.dataset.id)),z=null,v()}catch(c){g("บันทึกไม่สำเร็จ: "+k(c),"error"),o.disabled=!1}})}),document.querySelectorAll(".btn-approve-doc, .btn-reject-doc").forEach(o=>{o.addEventListener("click",async()=>{var _,f,m;const c=o.classList.contains("btn-approve-doc"),p=Number(o.dataset.id),u=z.find(x=>x.id===p);if(!u)return;const b=prompt(c?"ความเห็นประกอบ (ถ้ามี)":"เหตุผลที่ไม่อนุมัติ (จำเป็นต้องระบุ)")??"";if(!c&&!b.trim()){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}o.disabled=!0;try{const x=((_=l.teacher)==null?void 0:_.id)??null;u.status==="pending_advisor"?await Ta({id:p,approve:c,teacherId:x,comment:b.trim()}):u.status==="pending_dept_head"?await Ba({id:p,approve:c,teacherId:x,comment:b.trim(),signatureUrl:((f=l.teacher)==null?void 0:f.signature_url)??null}):u.status==="pending_director"&&await Na({id:p,approve:c,teacherId:x,comment:b.trim(),signatureUrl:((m=l.teacher)==null?void 0:m.signature_url)??null}),g(c?"อนุมัติแล้ว ✅":"ตีกลับให้แก้ไขแล้ว","success"),z=null,v()}catch(x){g("บันทึกไม่สำเร็จ: "+k(x),"error"),o.disabled=!1}})}),document.querySelectorAll(".btn-print-doc").forEach(o=>{o.addEventListener("click",()=>{const c=z.find(p=>p.id===Number(o.dataset.id));c&&or(c)})}),document.querySelectorAll(".btn-view-doc-detail").forEach(o=>{o.addEventListener("click",()=>{ze=Number(o.dataset.id),v()})}),(s=document.getElementById("btn-doc-detail-close"))==null||s.addEventListener("click",()=>{ze=null,v()}),(i=document.getElementById("btn-doc-detail-print"))==null||i.addEventListener("click",()=>{const o=z.find(c=>c.id===ze);o&&or(o)})}function zi(){var e;(e=document.getElementById("criterion-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.name.value.trim(),a=Number(r.weight.value);if(!n||!a){g("กรอกชื่อเกณฑ์และคะแนนให้ครบ","warning");return}try{await Ea({name:n,weight:a}),Q=null,v()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error")}}),document.querySelectorAll(".btn-remove-criterion").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบเกณฑ์นี้ออกจากการประเมิน?"))try{await Sa(Number(t.dataset.id)),Q=null,v()}catch(r){g("ลบไม่สำเร็จ: "+k(r),"error")}})}),document.querySelectorAll(".btn-toggle-eval").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);ot=ot===r?null:r,v()})}),document.querySelectorAll(".eval-score-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=Number(t.dataset.memberId),a=t.decision.value;if(!a){g("กรุณาเลือกสรุปผล","warning");return}const s={};let i=0;Q.forEach(p=>{var b;const u=(b=t[`c_${p.id}`])==null?void 0:b.value;u!==""&&u!=null&&(s[p.id]=Number(u),i+=Number(u))});const o=Q.reduce((p,u)=>p+Number(u.weight),0),c=t.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{await Ia({memberId:n,academicYear:P,scores:s,totalScore:i,maxScore:o,decision:a,comment:t.comment.value.trim(),evaluatorTeacherId:l.role==="teacher"&&l.teacher?l.teacher.id:null}),g("บันทึกผลประเมินแล้ว ✅","success"),Ae=null,ot=null,v()}catch(p){g("บันทึกไม่สำเร็จ: "+k(p),"error"),c.disabled=!1,c.textContent="บันทึกผลประเมิน"}})}),document.querySelectorAll(".btn-issue-cert").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.memberId),n=l.members.find(s=>s.id===r),a=Ae[r];if(!(!n||!a)){t.disabled=!0,t.textContent="กำลังออก...";try{const s=`${P}-${String(a.id).padStart(4,"0")}`;await qa({evaluationId:a.id,certificateNo:s}),a.certificate_no=s,a.certificate_issued_at=new Date().toISOString(),ir(n,a),v()}catch(s){g("ออกเกียรติบัตรไม่สำเร็จ: "+k(s),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}}})}),document.querySelectorAll(".btn-view-cert").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.memberId),n=l.members.find(s=>s.id===r),a=Ae[r];n&&a&&ir(n,a)})})}function Ui(){var e;(e=document.getElementById("activity-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,n=r.title.value.trim();if(!n){g("กรุณากรอกชื่อกิจกรรม","warning");return}const a=r.querySelector('button[type="submit"]');a.disabled=!0,a.textContent="กำลังบันทึก...";try{await Zn({title:n,detail:r.detail.value.trim(),gender:r.gender.value||null,activityDate:r.activity_date.value||null,budget:r.budget.value?Number(r.budget.value):null,ownerText:r.owner_text.value.trim(),academicYear:P,openToGeneral:r.open_to_general.checked,ownerMemberId:r.owner_member_id.value?Number(r.owner_member_id.value):null,countsForEvaluation:r.counts_for_evaluation.checked}),g("สร้างกิจกรรมแล้ว ✅","success"),F=null,v()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error"),a.disabled=!1,a.textContent="สร้างกิจกรรม"}}),document.querySelectorAll(".btn-activity-next").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await Jt(Number(t.dataset.id),t.dataset.next),F=null,v()}catch(r){g("บันทึกไม่สำเร็จ: "+k(r),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cancel").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ยืนยันยกเลิกกิจกรรมนี้?")){t.disabled=!0;try{await Jt(Number(t.dataset.id),"cancelled"),F=null,v()}catch(r){g("บันทึกไม่สำเร็จ: "+k(r),"error"),t.disabled=!1}}})}),document.querySelectorAll(".btn-activity-attendance").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);ie[r]===void 0&&ar(r)})}),document.querySelectorAll(".btn-activity-scan").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.id);ie[r]===void 0&&await ar(r);const n=F.find(s=>s.id===r),a=l.members.filter(s=>{var i;return!(n!=null&&n.gender)||((i=s.council_positions)==null?void 0:i.gender)===n.gender});Wa({activityId:r,activityTitle:t.dataset.title,openToGeneral:!!t.dataset.openGeneral,members:a,alreadyChecked:ie[r],onCheckedIn:s=>{var i;(i=ie[r])==null||i.add(s),v()},onUndo:s=>{var i;(i=ie[r])==null||i.delete(s),v()}})})}),document.querySelectorAll(".btn-checkin").forEach(t=>{t.addEventListener("click",async()=>{var a;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId);t.disabled=!0;try{await _r({activityId:r,studentId:n}),(a=ie[r])==null||a.add(n),v()}catch(s){g("เช็คชื่อไม่สำเร็จ: "+k(s),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cert-manage").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);At=At===r?null:r,v()})}),document.querySelectorAll(".cert-rule-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const n=r.target,a=Number(n.dataset.activityId),s=n.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await sa({activityId:a,templateId:n.template_id.value?Number(n.template_id.value):null,minAttendanceCount:n.min_attendance_count.value?Number(n.min_attendance_count.value):null,requiredDates:ve(n.required_dates.value),notes:n.notes.value.trim()}),g("บันทึกเงื่อนไขแล้ว ✅","success"),delete Se[a],v()}catch(i){g("บันทึกไม่สำเร็จ: "+k(i),"error"),s.disabled=!1,s.textContent="บันทึกเงื่อนไข"}})}),document.querySelectorAll(".btn-cert-override").forEach(t=>{t.addEventListener("click",async()=>{var s,i;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),a=t.dataset.decision||null;t.disabled=!0;try{await oa({activityId:r,studentId:n,decision:a,decidedByTeacherId:((s=l.teacher)==null?void 0:s.id)??null,decidedByMemberId:((i=l.membership[0])==null?void 0:i.id)??null}),delete Nt[r],Rr(r)}catch(o){g("บันทึกไม่สำเร็จ: "+k(o),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-cert-issue").forEach(t=>{t.addEventListener("click",async()=>{var c,p;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),a=F.find(u=>u.id===r),s=Se[r],o=(c=(Mt[r]??[]).find(u=>u.student_id===n))==null?void 0:c.students;if(!(s!=null&&s.template_id)){g("กรุณาเลือกเทมเพลตเกียรติบัตรก่อน","warning");return}t.disabled=!0,t.textContent="กำลังออก...";try{const u=await on({templateId:s.template_id,recipientType:"student",studentId:n,recipientName:(o==null?void 0:o.full_name)??"—",variables:{reason:`เข้าร่วมกิจกรรม "${(a==null?void 0:a.title)??""}" ของสภานักเรียนจนสำเร็จ`},title:(a==null?void 0:a.title)??null,issuedByTeacherId:((p=l.teacher)==null?void 0:p.id)??null,sourceSystem:"council_activity",sourceRefId:r});Ge[r]={...Ge[r]??{},[n]:u},v()}catch(u){g("ออกเกียรติบัตรไม่สำเร็จ: "+k(u),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}})}),document.querySelectorAll(".btn-cert-view").forEach(t=>{t.addEventListener("click",()=>{var s;const r=Number(t.dataset.activityId),n=Number(t.dataset.studentId),a=(s=Ge[r])==null?void 0:s[n];a&&ln({layout:a.layout_snapshot,variables:{name:a.recipient_name??"",date:new Date(a.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:a.certificate_no,...a.variables},docTitle:a.title})})})}function Vi(){var e,t,r;(e=document.getElementById("btn-open-ann-form"))==null||e.addEventListener("click",()=>{st=!0,v()}),(t=document.getElementById("btn-cancel-ann"))==null||t.addEventListener("click",()=>{st=!1,v()}),document.querySelectorAll(".ann-filter-btn").forEach(n=>{n.addEventListener("click",()=>{at=n.dataset.filter,v()})}),(r=document.getElementById("announcement-form"))==null||r.addEventListener("submit",async n=>{n.preventDefault();const a=n.target,s=a.title.value.trim();if(!s){g("กรุณากรอกหัวเรื่องประกาศ","warning");return}const i=a.querySelector('button[type="submit"]');i.disabled=!0,i.textContent="กำลังเผยแพร่...";try{await _a({type:a.type.value,audience:a.audience.value,title:s,body:a.body.value.trim(),pinned:a.pinned.checked,postedByTeacherId:l.role==="teacher"&&l.teacher?l.teacher.id:null,postedByStudentId:l.isChair&&l.student?l.student.id:null}),g("เผยแพร่ประกาศแล้ว 📣","success"),st=!1,mt=null,v()}catch(o){g("เผยแพร่ไม่สำเร็จ: "+k(o),"error"),i.disabled=!1,i.textContent="เผยแพร่ประกาศ"}}),document.querySelectorAll(".btn-ack-ann").forEach(n=>{n.addEventListener("click",async()=>{const a=Number(n.dataset.id);n.disabled=!0,n.textContent="กำลังบันทึก...";try{await ha({announcementId:a,studentId:l.student.id}),le==null||le.add(a),de&&(de[a]=(de[a]??0)+1),g("รับทราบแล้ว","success"),v()}catch(s){g("บันทึกไม่สำเร็จ: "+k(s),"error"),n.disabled=!1,n.textContent="รับทราบ"}})})}function Yi(){var e,t,r,n,a,s,i,o,c,p;document.querySelectorAll(".apps-filter-btn").forEach(u=>{u.addEventListener("click",()=>{pe=u.dataset.filter,v()})}),document.querySelectorAll(".apps-gender-tab-btn").forEach(u=>{u.addEventListener("click",()=>{ee=u.dataset.gender,ke="",v()})}),(e=document.getElementById("apps-grade-filter"))==null||e.addEventListener("change",u=>{rt=u.target.value,v()}),(t=document.getElementById("apps-position-filter"))==null||t.addEventListener("change",u=>{ke=u.target.value,v()}),(r=document.getElementById("apps-advisor-endorse-filter"))==null||r.addEventListener("change",u=>{Be=u.target.value,v()}),(n=document.getElementById("apps-peer-endorse-filter"))==null||n.addEventListener("change",u=>{Ne=u.target.value,v()}),document.querySelectorAll(".btn-view-app-detail").forEach(u=>{u.addEventListener("click",()=>{$e=Number(u.dataset.id),v()})}),(a=document.getElementById("btn-admin-app-detail-close"))==null||a.addEventListener("click",()=>{$e=null,v()}),(s=document.getElementById("admin-app-detail-backdrop"))==null||s.addEventListener("click",u=>{u.target.id==="admin-app-detail-backdrop"&&($e=null,v())}),(i=document.getElementById("btn-delete-council-application"))==null||i.addEventListener("click",u=>{be=Number(u.currentTarget.dataset.id),v()}),(o=document.getElementById("btn-cancel-council-delete"))==null||o.addEventListener("click",()=>{be=null,v()}),(c=document.getElementById("council-delete-backdrop"))==null||c.addEventListener("click",u=>{u.target.id==="council-delete-backdrop"&&(be=null,v())}),(p=document.getElementById("btn-confirm-council-delete"))==null||p.addEventListener("click",async()=>{var _;const u=(_=document.getElementById("council-delete-reason"))==null?void 0:_.value.trim();if(!u){g("กรุณากรอกเหตุผลการลบ","warning");return}const b=document.getElementById("btn-confirm-council-delete");b.disabled=!0,b.textContent="กำลังลบ...";try{await Cn(be,u),g("ลบใบสมัครแบบเก็บประวัติแล้ว ✅","success"),be=null,$e=null,C=null,v()}catch(f){g("ลบใบสมัครไม่สำเร็จ: "+k(f),"error"),b.disabled=!1,b.textContent="ยืนยันลบ"}}),document.querySelectorAll(".schedule-form").forEach(u=>{u.addEventListener("submit",async b=>{b.preventDefault();const _=Number(u.dataset.appId),f=u.dataset.ivId?Number(u.dataset.ivId):null,m=u.scheduled_at.value,x=u.location.value.trim();if(!m){g("กรุณาระบุวันเวลานัดสัมภาษณ์","warning");return}const E=u.interviewerText.value.trim();let I=null;if(E){const A=E.match(/· รหัส (\d+)$/);if(!A){g("กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)","warning");return}I=Number(A[1])}const j=u.querySelector('button[type="submit"]');j.disabled=!0,j.textContent="กำลังบันทึก...";try{const A=new Date(m).toISOString();await Mn({applicationId:_,existingInterviewId:f,scheduledAt:A,location:x,interviewerTeacherId:I}),g("นัดสัมภาษณ์แล้ว ✅","success");const y=u.dataset.profileId;if(y){const w=new Date(A).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});h.functions.invoke("send-push",{body:{title:"🗓️ นัดสัมภาษณ์สภานักเรียน",body:`${u.dataset.positionName||""} — ${w}${x?" · "+x:""}`,url:"council.html",profileIds:[y]}}).catch(()=>{})}C=null,v()}catch(A){g("บันทึกไม่สำเร็จ: "+k(A),"error"),j.disabled=!1,j.textContent="บันทึกนัดสัมภาษณ์"}})}),document.querySelectorAll(".score-form").forEach(u=>{const b=Number(u.dataset.maxWeight),_=Number(u.dataset.passThreshold),f=u.querySelector(".score-total-display"),m=()=>{let x=0;u.querySelectorAll(".score-input").forEach(E=>{E.value!==""&&(x+=Number(E.value))}),f&&(f.textContent=`${x} / ${b} · ต้อง ≥ ${_} จึงผ่าน`)};u.querySelectorAll(".score-input").forEach(x=>x.addEventListener("input",m)),u.addEventListener("submit",async x=>{x.preventDefault();const E=Number(u.dataset.appId),I=u.dataset.ivId?Number(u.dataset.ivId):null;if(!I){g("ไม่พบข้อมูลการนัดสัมภาษณ์","error");return}const j={};let A=0;u.querySelectorAll(".score-input").forEach(S=>{S.value!==""&&(j[S.dataset.criterionId]=Number(S.value),A+=Number(S.value))});const y=A>=_?"pass":"fail",w=u.comment.value.trim(),$=u.querySelector('button[type="submit"]');$.disabled=!0,$.textContent="กำลังบันทึก...";try{await Pn({interviewId:I,applicationId:E,score:A,scores:j,result:y,comment:w}),g(`บันทึกผลสัมภาษณ์แล้ว ✅ (${y==="pass"?"ผ่าน":"ไม่ผ่าน"})`,"success"),C=null,v()}catch(S){g("บันทึกไม่สำเร็จ: "+k(S),"error"),$.disabled=!1,$.textContent="บันทึกผล"}})}),document.querySelectorAll(".btn-promote-candidate").forEach(u=>{u.addEventListener("click",async()=>{const b=Number(u.dataset.appId),_=C==null?void 0:C.find(f=>f.id===b);if(_){u.disabled=!0,u.textContent="กำลังบันทึก...";try{const f=await fr({gender:_.council_positions.gender,academicYear:P});await On({applicationId:b,studentId:_.students.id,electionConfigId:f.id,campaignStatement:_.motivation,photoUrl:_.photo_url}),g("ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️","success"),delete ue[_.council_positions.gender],l.elections=await dt().catch(()=>l.elections),C=null,v()}catch(f){g("บันทึกไม่สำเร็จ: "+k(f),"error"),u.disabled=!1,u.textContent="🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง"}}})}),document.querySelectorAll(".btn-appoint-member").forEach(u=>{u.addEventListener("click",async()=>{var f,m;const b=Number(u.dataset.appId),_=C==null?void 0:C.find(x=>x.id===b);if(_&&confirm(`ยืนยันแต่งตั้ง ${((f=_.students)==null?void 0:f.full_name)??""} เป็น ${((m=_.council_positions)==null?void 0:m.position_name)??""}?`)){u.disabled=!0,u.textContent="กำลังบันทึก...";try{await Rn({applicationId:b,positionId:_.position_id,studentId:_.students.id,academicYear:P}),g("แต่งตั้งสำเร็จ ✅","success"),C=null,l.members=await je().catch(()=>l.members),v()}catch(x){g("บันทึกไม่สำเร็จ: "+k(x),"error"),u.disabled=!1,u.textContent="✅ แต่งตั้งเข้าตำแหน่ง"}}})})}function Qi(){var e,t,r,n,a;document.querySelectorAll(".btn-create-election").forEach(s=>{s.addEventListener("click",async()=>{s.disabled=!0;try{const i=await fr({gender:s.dataset.gender,academicYear:P});l.elections=[...l.elections.filter(o=>o.id!==i.id),i],v()}catch(i){g("เปิดใช้งานไม่สำเร็จ: "+k(i),"error"),s.disabled=!1}})}),document.querySelectorAll(".election-window-form").forEach(s=>{s.addEventListener("submit",async i=>{i.preventDefault();const o=Number(s.dataset.electionId),c=s.opens_at.value?new Date(s.opens_at.value).toISOString():null,p=s.closes_at.value?new Date(s.closes_at.value).toISOString():null,u=s.querySelector('button[type="submit"]');u.disabled=!0;try{await Wn({electionConfigId:o,opensAt:c,closesAt:p}),l.elections=await dt().catch(()=>l.elections),g("บันทึกช่วงเวลาแล้ว","success"),v()}catch(b){g("บันทึกไม่สำเร็จ: "+k(b),"error"),u.disabled=!1}})}),document.querySelectorAll(".btn-publish-results").forEach(s=>{s.addEventListener("click",async()=>{if(confirm("ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้")){s.disabled=!0,s.textContent="กำลังประกาศผล...";try{await Un({electionConfigId:Number(s.dataset.electionId),gender:s.dataset.gender,academicYear:P}),g("ประกาศผลแล้ว 🎉","success"),l.elections=await dt().catch(()=>l.elections),l.members=await je().catch(()=>l.members),v()}catch(i){g("ประกาศผลไม่สำเร็จ: "+k(i),"error"),s.disabled=!1,s.textContent="📢 ประกาศผล+แต่งตั้ง"}}})}),document.querySelectorAll(".candidate-card-btn").forEach(s=>{s.addEventListener("click",()=>{Ee={gender:s.dataset.gender,id:Number(s.dataset.id)},me=!1,v()})}),(e=document.getElementById("btn-candidate-modal-close"))==null||e.addEventListener("click",()=>{Ee=null,me=!1,v()}),(t=document.getElementById("candidate-modal-backdrop"))==null||t.addEventListener("click",s=>{s.target.id==="candidate-modal-backdrop"&&(Ee=null,me=!1,v())}),(r=document.getElementById("btn-candidate-edit"))==null||r.addEventListener("click",()=>{me=!0,v()}),(n=document.getElementById("btn-candidate-cancel-edit"))==null||n.addEventListener("click",()=>{me=!1,v()}),(a=document.getElementById("candidate-edit-form"))==null||a.addEventListener("submit",async s=>{s.preventDefault();const i=s.target,o=Number(i.dataset.candidateId),c=i.slogan.value.trim(),p=i.vision.value.trim(),u=i.policies.value.split(`
`).map(f=>f.trim()).filter(Boolean),b=i.experience.value.split(`
`).map(f=>f.trim()).filter(Boolean),_=i.querySelector('button[type="submit"]');_.disabled=!0,_.textContent="กำลังบันทึก...";try{await zn({candidateId:o,slogan:c,vision:p,policies:u,experience:b});const{gender:f}=Ee;ue[f]=await Lt(Ht(f).id).catch(()=>ue[f]),me=!1,g("บันทึกโปรไฟล์ผู้สมัครแล้ว ✅","success"),v()}catch(f){g("บันทึกไม่สำเร็จ: "+k(f),"error"),_.disabled=!1,_.textContent="บันทึก"}})}const Ji={auto:"ตามระบบ",light:"สว่าง",dark:"มืด"},Ki={auto:"🌓",light:"☀️",dark:"🌙"};function wt(e){const t=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.toggleAttribute("data-dark",t);const r=document.getElementById("council-theme-icon"),n=document.getElementById("council-theme-label");r&&(r.textContent=Ki[e]),n&&(n.textContent=Ji[e])}function Xi(){var t;const e=localStorage.getItem("council_theme")||"auto";wt(e),(t=document.getElementById("council-theme-toggle"))==null||t.addEventListener("click",()=>{const r=localStorage.getItem("council_theme")||"auto",n=r==="auto"?"light":r==="light"?"dark":"auto";localStorage.setItem("council_theme",n),wt(n)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("council_theme")||"auto")==="auto"&&wt("auto")})}Xi();Qa();
