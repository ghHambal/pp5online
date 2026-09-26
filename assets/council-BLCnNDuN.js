import{s as h}from"./supabase-BV-W2lsh.js";/* empty css             *//* empty css                                  */import{b as Pa}from"./anti-pull-refresh-BGrI1pMY.js";import{a as g,g as S}from"./ui-MMtcTwtt.js";import{g as Fa}from"./student-api-BkkkCebX.js";import{getMyTeacherProfile as Ya,getMyHomeroomRooms as za,getTeachers as Ua}from"./api-CWYJTdOa.js";import{uploadCouncilApplicationPhoto as Va,uploadCouncilCertificate as Ga,uploadCertificateTemplateImage as Ha,uploadCouncilTeacherPhoto as Wa,uploadCouncilTeacherSignature as Ja}from"./storage-CuUjCgvI.js";import{i as Qa,o as Ka,d as Xa,c as Za,a as en,u as tn,C as Yt,g as rn,b as an}from"./certificate-engine-BrPYUHds.js";import{o as nn}from"./certificate-editor-DpGkilqh.js";import{o as dt}from"./print-overlay-BVfxEd6n.js";import{b as sn}from"./browser-JP79f-a9.js";import"./supabase-errors-BniCCodr.js";import"./teacher-views-utils-bZoYj54P.js";import"./score-display-CQ4dUIPx.js";import"./impersonation-0xVfgYVY.js";import"./skill-groups-BY1NTbf4.js";const on=["council_logo_url","council_theme_color","council_name","council_theme_side_m","council_theme_side_w","council_term_start_semester","council_term_start_year","council_term_end_semester","council_term_end_year","council_min_gpa","council_min_gpa_religious","council_eligible_grade_levels","council_require_teacher_endorsement","council_require_peer_endorsement","council_min_certificates","council_min_attendance_pct","council_apply_opens_at","council_apply_closes_at","council_featured_phase","council_video_max_minutes","council_video_brief","council_doc_plan_areas","council_doc_project_types","council_doc_school_strategies","council_doc_education_standards","council_signer_advisor_name","council_signer_director_name","council_election_thank_you_message","council_visible_to_all","council_test_student_codes","council_modules","academicYear"];async function ln(){const{data:e,error:t}=await h.from("system_config").select("key,value").in("key",on);if(t)throw t;return Object.fromEntries((e??[]).map(r=>[r.key,r.value]))}async function pt(e){const t=Object.entries(e).map(([a,o])=>({key:a,value:o})),{error:r}=await h.from("system_config").upsert(t,{onConflict:"key"});if(r)throw r}async function dn(){const{data:e,error:t}=await h.from("council_regulation_versions").select("id, regulation_key, version_label, title, status, implementation_mode, source_document_url, effective_date, created_at, updated_at").neq("status","archived").order("created_at",{ascending:!1});if(t)throw t;return e??[]}async function At(e){const[t,r]=await Promise.all([h.from("council_regulation_sections").select("id, version_id, section_no, title, sort_order").eq("version_id",e).order("sort_order"),h.from("council_regulation_clauses").select("id, version_id, section_id, clause_no, title, body, keywords, sort_order, updated_at").eq("version_id",e).order("sort_order")]);if(t.error)throw t.error;if(r.error)throw r.error;return{sections:t.data??[],clauses:r.data??[]}}async function cn({clauseId:e,title:t,body:r,keywords:a}){const{data:o,error:s}=await h.rpc("update_council_regulation_clause",{p_clause_id:e,p_title:t,p_body:r,p_keywords:a??[]});if(s)throw s;return o}async function un({versionId:e,sectionId:t,clauseNo:r,title:a,body:o,keywords:s}){const{data:n,error:i}=await h.rpc("create_council_regulation_clause",{p_version_id:e,p_section_id:t,p_clause_no:r,p_title:a,p_body:o,p_keywords:s??[]});if(i)throw i;return n}async function ft(){const{data:e,error:t}=await h.from("council_positions").select("*").eq("is_active",!0).order("gender").order("sort_order");if(t)throw t;return e??[]}async function pn({gender:e,positionName:t,seatsCount:r,isElected:a,sortOrder:o}){const{error:s}=await h.from("council_positions").insert({gender:e,position_name:t,seats_count:r,is_elected:!1,sort_order:o});if(s)throw s}async function mn(e,t){const{error:r}=await h.from("council_positions").update(t).eq("id",e);if(r)throw r}async function bn(e){const{error:t}=await h.from("council_positions").update({is_active:!1}).eq("id",e);if(t)throw t}async function vn(){const{data:e,error:t}=await h.from("council_interview_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function xn({name:e,weight:t}){const{error:r}=await h.from("council_interview_criteria").insert({name:e,weight:t});if(r)throw r}async function fn(e){const{error:t}=await h.from("council_interview_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function _n({phrase:e,sortOrder:t}){const{error:r}=await h.from("council_endorsement_phrases").insert({phrase:e,sort_order:t??0});if(r)throw r}async function gn(e){const{error:t}=await h.from("council_endorsement_phrases").delete().eq("id",e);if(t)throw t}async function Ue(e){let t=h.from("council_members").select("id, position_id, student_id, academic_year, status, source, can_create_activities, council_positions(gender, position_name, sort_order, is_elected), students(full_name, student_code, main_room, image_url, photo_url)").eq("status","active");const{data:r,error:a}=await t;if(a)throw a;return r??[]}async function It(e){let t=h.from("council_election_config").select("*");const{data:r,error:a}=await t.order("gender");if(a)throw a;return r??[]}async function Qr(e){const{data:t,error:r}=await h.from("council_applications").select(`id, student_id, position_id, status, motivation, photo_url, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      requested_peer_endorser_id,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      requested_peer_endorser:council_members!council_applications_requested_peer_endorser_id_fkey(students(full_name)),
      council_positions(position_name, gender, is_elected)`).eq("student_id",e).is("deleted_at",null).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function yn(e){const{data:t,error:r}=await h.from("council_members").select("id, position_id, status, source, term_start_date, term_end_date, can_create_activities, council_positions(position_name, gender, is_elected)").eq("student_id",e).eq("status","active");if(r)throw r;return t??[]}async function hn(e,t){const{error:r}=await h.rpc("set_council_member_can_create",{p_member_id:e,p_value:!!t});if(r)throw r}async function wn({studentId:e,positionId:t,academicYear:r,motivation:a,photoUrl:o,gpaGeneral:s,gpaReligious:n,introVideoUrl:i,certificates:u,requestedPeerEndorserId:b}){const{error:c}=await h.rpc("submit_council_application",{p_student_id:e,p_position_id:t,p_academic_year:r,p_motivation:a,p_photo_url:o,p_gpa_general:s,p_gpa_religious:n,p_intro_video_url:i,p_certificates:u??[],p_requested_peer_endorser_id:b??null});if(c)throw c}async function $n(e,t){const{error:r}=await h.rpc("soft_delete_council_application",{p_application_id:e,p_reason:t});if(r)throw r}async function Kr(e){if(!(e!=null&&e.length))return[];const{data:t,error:r}=await h.from("council_applications").select("id, position_id, motivation, photo_url, status, created_at, gpa_general, gpa_religious, intro_video_url, council_positions(position_name, gender), students(id, full_name, student_code, main_room, image_url, photo_url)").eq("status","pending").is("endorsed_at",null).is("deleted_at",null).order("created_at");if(r)throw r;return(t??[]).filter(a=>{var o;return e.includes((o=a.students)==null?void 0:o.main_room)})}async function Xr(){const{data:e,error:t}=await h.from("council_endorsement_phrases").select("*").order("sort_order");if(t)throw t;return e??[]}async function kn({applicationId:e,teacherId:t,comment:r}){const{error:a}=await h.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString()}).eq("id",e);if(a)throw a}async function En({applicationId:e,teacherId:t,comment:r}){const{error:a}=await h.from("council_applications").update({endorsing_teacher_id:t,endorsement_comment:r,endorsed_at:new Date().toISOString(),status:"rejected"}).eq("id",e);if(a)throw a}async function Sn(e,t){const{data:r,error:a}=await h.from("council_applications").select(`id, position_id, motivation, photo_url, status, created_at, requested_peer_endorser_id,
      council_positions!inner(position_name, gender),
      students(id, full_name, student_code, main_room, image_url, photo_url)`).eq("status","pending").is("peer_endorsed_at",null).is("deleted_at",null).eq("council_positions.gender",e).eq("requested_peer_endorser_id",t).order("created_at");if(a)throw a;return r??[]}async function An({applicationId:e,memberId:t}){const{error:r}=await h.from("council_applications").update({requested_peer_endorser_id:t}).eq("id",e);if(r)throw r}async function In({applicationId:e,memberId:t,comment:r}){const{data:a,error:o}=await h.from("council_applications").select("requested_peer_endorser_id").eq("id",e).single();if(o)throw o;if(String(a.requested_peer_endorser_id)!==String(t))throw new Error("ใบสมัครนี้ไม่ได้ระบุให้คุณเป็นผู้รับรอง");const{error:s}=await h.from("council_applications").update({peer_endorsed_by_member_id:t,peer_endorsement_comment:r,peer_endorsed_at:new Date().toISOString()}).eq("id",e);if(s)throw s}async function Zr(e){let t=h.from("council_applications").select(`id, position_id, status, motivation, photo_url, academic_year, created_at,
      gpa_general, gpa_religious, intro_video_url, certificates,
      endorsing_teacher_id, endorsement_comment, endorsed_at,
      peer_endorsed_by_member_id, peer_endorsement_comment, peer_endorsed_at,
      teachers(full_name),
      council_members!council_applications_peer_endorsed_by_member_id_fkey(students(full_name)),
      council_positions(id, position_name, gender, is_elected),
      students(id, full_name, student_code, main_room, image_url, photo_url, profile_id),
      council_interviews(id, scheduled_at, location, interviewer_teacher_id, result, score, scores, comment),
      council_candidates(id, election_config_id, ballot_number)`).is("deleted_at",null).order("created_at",{ascending:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:a}=await t;if(a)throw a;return r??[]}async function Cn({applicationId:e,existingInterviewId:t,scheduledAt:r,location:a,interviewerTeacherId:o}){const{data:s,error:n}=await h.rpc("schedule_council_interview_atomic",{p_application_id:e,p_scheduled_at:r,p_location:a||null,p_interviewer_teacher_id:o??null,p_interview_id:t??null});if(n)throw n;return s}async function Ln({interviewId:e,applicationId:t,score:r,scores:a,result:o,comment:s}){const{error:n}=await h.rpc("save_council_interview_score_atomic",{p_interview_id:e,p_application_id:t,p_score:r,p_scores:a??{},p_result:o,p_comment:s||null});if(n)throw n}async function qn({applicationId:e,studentId:t,electionConfigId:r,campaignStatement:a,photoUrl:o}){const{data:s,error:n}=await h.rpc("promote_council_candidate_atomic",{p_application_id:e,p_student_id:t,p_election_config_id:r,p_campaign_statement:a||null,p_photo_url:o||null});if(n)throw n;return s}async function Tn({applicationId:e,positionId:t,studentId:r,academicYear:a,appointedByTeacherId:o}){const{error:s}=await h.rpc("appoint_council_member_atomic",{p_application_id:e,p_position_id:t,p_student_id:r,p_academic_year:a,p_appointed_by_teacher_id:o??null});if(s)throw s}async function ea(e){const t=(e??"").trim();if(t.length<2)return[];const{data:r,error:a}=await h.from("students").select("id, full_name, student_code, main_room, gender, image_url, photo_url").or(`full_name.ilike.%${t}%,student_code.ilike.%${t}%`).limit(15);if(a)throw a;return r??[]}async function Nn({positionId:e,studentId:t,academicYear:r,termStartDate:a,appointedByTeacherId:o}){const{error:s}=await h.from("council_members").insert({position_id:e,student_id:t,academic_year:r,source:"appointed",status:"active",term_start_date:a||new Date().toISOString().slice(0,10),appointed_by_teacher_id:o??null});if(s)throw s}async function jn(e,{positionId:t,termStartDate:r,termEndDate:a}){const{error:o}=await h.from("council_members").update({position_id:t,term_start_date:r||null,term_end_date:a||null,updated_at:new Date().toISOString()}).eq("id",e);if(o)throw o}async function Dn(e){const{error:t}=await h.from("council_members").update({status:"removed",term_end_date:new Date().toISOString().slice(0,10),updated_at:new Date().toISOString()}).eq("id",e);if(t)throw t}async function ta({gender:e,academicYear:t}){const{data:r,error:a}=await h.from("council_election_config").select("*").eq("gender",e).eq("academic_year",t).maybeSingle();if(a)throw a;if(r)return r;const{data:o,error:s}=await h.from("council_election_config").insert({gender:e,academic_year:t}).select().single();if(s)throw s;return o}async function Rn({electionConfigId:e,opensAt:t,closesAt:r}){const{error:a}=await h.from("council_election_config").update({opens_at:t,closes_at:r}).eq("id",e);if(a)throw a}async function ra(e){const{data:t,error:r}=await h.from("council_candidates").select(`id, ballot_number, campaign_statement, photo_url, student_id, application_id,
      slogan, vision, policies, experience,
      students(full_name, student_code, main_room, image_url, photo_url),
      council_applications(gpa_general, gpa_religious)`).eq("election_config_id",e).order("ballot_number");if(r)throw r;return t??[]}async function On({candidateId:e,slogan:t,vision:r,policies:a,experience:o}){const{error:s}=await h.from("council_candidates").update({slogan:t,vision:r,policies:a,experience:o}).eq("id",e);if(s)throw s}async function Jt(e){const t=e==="M"?["ชาย","M"]:["หญิง","W"],{count:r,error:a}=await h.from("students").select("id",{count:"exact",head:!0}).in("gender",t).or("is_active.is.null,is_active.eq.true");if(a)throw a;return r??0}async function Mn(e){const{data:t,error:r}=await h.from("council_votes").select("candidate_id").eq("election_config_id",e);if(r)throw r;const a={};return(t??[]).forEach(o=>{a[o.candidate_id]=(a[o.candidate_id]??0)+1}),a}async function Bn({electionConfigId:e}){const{data:t,error:r}=await h.rpc("publish_council_election_results_atomic",{p_election_config_id:e});if(r)throw r;return t}async function Pn(e){const[{data:t,error:r},{data:a,error:o}]=await Promise.all([h.from("council_positions").select("*").eq("gender",e).eq("is_active",!0).eq("is_elected",!1).order("sort_order"),h.from("council_members").select("position_id").eq("status","active")]);if(r)throw r;if(o)throw o;const s={};return(a??[]).forEach(n=>{s[n.position_id]=(s[n.position_id]??0)+1}),(t??[]).filter(n=>(s[n.id]??0)<n.seats_count)}async function Fn(e){const{data:t,error:r}=await h.from("council_applications").select(`id, position_id, motivation, photo_url, student_id,
      students(id, full_name, student_code, main_room, image_url, photo_url),
      council_positions!inner(id, position_name, gender, is_elected),
      council_interviews(score, comment)`).eq("status","interviewed").is("deleted_at",null).eq("council_positions.gender",e).eq("council_positions.is_elected",!1);if(r)throw r;return t??[]}async function Yn({applicationId:e,positionId:t,proposedByStudentId:r}){const{error:a}=await h.from("council_nominations").insert({application_id:e,position_id:t,proposed_by_student_id:r});if(a)throw a}async function zn(e){const{data:t,error:r}=await h.from("council_nominations").select(`id, application_id, position_id, status, comment, created_at,
      council_positions!inner(position_name, gender),
      council_applications(motivation, photo_url, students(full_name, student_code, main_room, image_url, photo_url))`).eq("status","proposed").eq("council_positions.gender",e).order("created_at");if(r)throw r;return t??[]}async function Un({nominationId:e,approve:t,teacherId:r,comment:a}){const{data:o,error:s}=await h.from("council_nominations").select("*").eq("id",e).single();if(s)throw s;const{error:n}=await h.from("council_nominations").update({status:t?"approved":"rejected",decided_by_teacher_id:r,decided_at:new Date().toISOString(),comment:a}).eq("id",e);if(n)throw n;if(t){const{data:i,error:u}=await h.from("council_applications").select("student_id, academic_year").eq("id",o.application_id).single();if(u)throw u;const{error:b}=await h.from("council_members").insert({position_id:o.position_id,student_id:i.student_id,academic_year:i.academic_year,source:"appointed",status:"active",term_start_date:new Date().toISOString().slice(0,10)});if(b)throw b;const{error:c}=await h.from("council_applications").update({status:"appointed"}).eq("id",o.application_id);if(c)throw c}}async function Vn(e){let t=h.from("council_activities").select("*, council_members!council_activities_owner_member_id_fkey(students(full_name))").order("activity_date",{ascending:!1,nullsFirst:!1});e&&(t=t.eq("academic_year",e));const{data:r,error:a}=await t;if(a)throw a;return r??[]}async function Gn({title:e,detail:t,gender:r,activityDate:a,budget:o,ownerText:s,academicYear:n,openToGeneral:i,ownerMemberId:u,countsForEvaluation:b}){const{error:c}=await h.from("council_activities").insert({title:e,detail:t,gender:r||null,activity_date:a||null,budget:o||null,owner_text:s||null,academic_year:n,open_to_general:!!i,owner_member_id:u||null,counts_for_evaluation:b!==!1});if(c)throw c}async function Lr(e,t){const{error:r}=await h.from("council_activities").update({status:t,updated_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function Hn(e,t,r){let a=h.from("council_activities").select("id, title, activity_date, status, gender, counts_for_evaluation, open_to_general").in("status",["ongoing","completed"]);r&&(a=a.eq("academic_year",r)),t&&(a=a.or(`gender.is.null,gender.eq.${t}`));const[{data:o,error:s},{data:n,error:i}]=await Promise.all([a.order("activity_date",{ascending:!1}),h.from("council_activity_attendance").select("activity_id, checked_in_at").eq("student_id",e)]);if(s)throw s;if(i)throw i;return{activities:o??[],myAttendance:n??[]}}async function Wn(e){const{data:t,error:r}=await h.from("council_activity_attendance").select("student_id").eq("activity_id",e);if(r)throw r;return new Set((t??[]).map(a=>a.student_id))}async function Jn(e){const{data:t,error:r}=await h.from("council_activity_attendance").select("student_id, checked_in_at, students(full_name, student_code, main_room, image_url, photo_url)").eq("activity_id",e).order("checked_in_at");if(r)throw r;return t??[]}async function aa({activityId:e,studentId:t}){const{data:r}=await h.from("council_members").select("id").eq("student_id",t).eq("status","active").maybeSingle(),{error:a}=await h.from("council_activity_attendance").insert({activity_id:e,student_id:t,member_id:(r==null?void 0:r.id)??null});if(a)throw a}async function Qn({activityId:e,studentId:t}){const{error:r}=await h.from("council_activity_attendance").delete().eq("activity_id",e).eq("student_id",t);if(r)throw r}async function Kn(e){const{data:t,error:r}=await h.from("council_activity_certificate_rules").select("*").eq("activity_id",e).maybeSingle();if(r)throw r;return t}async function Xn({activityId:e,templateId:t,minAttendanceCount:r,requiredDates:a,notes:o}){const{error:s}=await h.from("council_activity_certificate_rules").upsert({activity_id:e,template_id:t||null,min_attendance_count:r||null,required_dates:a??[],notes:o||null,updated_at:new Date().toISOString()},{onConflict:"activity_id"});if(s)throw s}async function Zn(e){const{data:t,error:r}=await h.from("council_activity_certificates").select("*").eq("activity_id",e);if(r)throw r;return t??[]}async function es({activityId:e,studentId:t,decision:r,comment:a,decidedByTeacherId:o,decidedByMemberId:s}){const{error:n}=await h.from("council_activity_certificates").upsert({activity_id:e,student_id:t,override_decision:r,comment:a||null,decided_by_teacher_id:o||null,decided_by_member_id:s||null,updated_at:new Date().toISOString()},{onConflict:"activity_id,student_id"});if(n)throw n}async function ts(e){const{data:t,error:r}=await h.from("council_routines").select("*").eq("member_id",e).eq("is_active",!0).order("day_of_week");if(r)throw r;return t??[]}async function rs(e,t){if(!(e!=null&&e.length))return new Set;const{data:r,error:a}=await h.from("council_routine_logs").select("routine_id").in("routine_id",e).eq("week_start",t);if(a)throw a;return new Set((r??[]).map(o=>o.routine_id))}async function as({memberId:e,dayOfWeek:t,timeRange:r,task:a,location:o}){const{error:s}=await h.from("council_routines").insert({member_id:e,day_of_week:t,time_range:r,task:a,location:o});if(s)throw s}async function ns(e){const{error:t}=await h.from("council_routines").update({is_active:!1}).eq("id",e);if(t)throw t}async function ss({routineId:e,weekStart:t,done:r}){if(r){const{error:a}=await h.from("council_routine_logs").insert({routine_id:e,week_start:t});if(a)throw a}else{const{error:a}=await h.from("council_routine_logs").delete().eq("routine_id",e).eq("week_start",t);if(a)throw a}}async function os(e){const{data:t,error:r}=await h.from("council_assignments").select("*").eq("member_id",e).order("due_date",{ascending:!0,nullsFirst:!1});if(r)throw r;return t??[]}async function is(e){const{data:t,error:r}=await h.from("council_assignments").select(`id, task, due_date, status, created_at,
      council_members!inner(id, position_id, council_positions!inner(gender, position_name), students(full_name, student_code, main_room, image_url, photo_url))`).eq("council_members.council_positions.gender",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}async function ls({memberId:e,task:t,dueDate:r,assignedByStudentId:a}){const{error:o}=await h.from("council_assignments").insert({member_id:e,task:t,due_date:r||null,assigned_by_student_id:a});if(o)throw o}async function ds(e,t){const{error:r}=await h.from("council_assignments").update({status:t}).eq("id",e);if(r)throw r}async function cs(e){const{error:t}=await h.from("council_assignments").delete().eq("id",e);if(t)throw t}async function us(){const{data:e,error:t}=await h.from("council_announcements").select("*, teachers(full_name), students(full_name)").order("pinned",{ascending:!1}).order("created_at",{ascending:!1});if(t)throw t;return e??[]}async function ps({type:e,audience:t,title:r,body:a,pinned:o,postedByTeacherId:s,postedByStudentId:n}){const{error:i}=await h.from("council_announcements").insert({type:e,audience:t,title:r,body:a,pinned:o,posted_by_teacher_id:s||null,posted_by_student_id:n||null});if(i)throw i}async function ms(e){const{data:t,error:r}=await h.from("council_announcement_acks").select("announcement_id").eq("student_id",e);if(r)throw r;return new Set((t??[]).map(a=>a.announcement_id))}async function bs({announcementId:e,studentId:t}){const{error:r}=await h.from("council_announcement_acks").insert({announcement_id:e,student_id:t});if(r)throw r}async function vs(){const{data:e,error:t}=await h.from("council_announcement_acks").select("announcement_id");if(t)throw t;const r={};return(e??[]).forEach(a=>{r[a.announcement_id]=(r[a.announcement_id]??0)+1}),r}async function xs(){const{count:e,error:t}=await h.from("students").select("id",{count:"exact",head:!0}).or("is_active.is.null,is_active.eq.true");if(t)throw t;return e??0}async function fs(){const{data:e,error:t}=await h.from("council_evaluation_criteria").select("*").eq("is_active",!0).order("sort_order");if(t)throw t;return e??[]}async function _s({name:e,weight:t}){const{error:r}=await h.from("council_evaluation_criteria").insert({name:e,weight:t});if(r)throw r}async function gs(e){const{error:t}=await h.from("council_evaluation_criteria").update({is_active:!1}).eq("id",e);if(t)throw t}async function ys(e){const{data:t,error:r}=await h.from("council_evaluations").select("*").eq("academic_year",e);if(r)throw r;return t??[]}async function hs({memberId:e,academicYear:t,scores:r,totalScore:a,maxScore:o,decision:s,comment:n,evaluatorTeacherId:i}){const{error:u}=await h.from("council_evaluations").upsert({member_id:e,academic_year:t,scores:r,total_score:a,max_score:o,decision:s,comment:n,evaluator_teacher_id:i,evaluated_at:new Date().toISOString(),updated_at:new Date().toISOString()},{onConflict:"member_id,academic_year"});if(u)throw u}async function ws({evaluationId:e,certificateNo:t}){const{error:r}=await h.from("council_evaluations").update({certificate_no:t,certificate_issued_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function $s(e){const{data:t,error:r}=await h.from("council_documents").select("*, council_positions(position_name, gender)").eq("academic_year",e).order("created_at",{ascending:!1});if(r)throw r;return t??[]}const nt={title:"title",planArea:"plan_area",projectType:"project_type",schoolStrategy:"school_strategy",educationStandard:"education_standard",responsiblePersons:"responsible_persons",rationale:"rationale",objectives:"objectives",goalsQuantitative:"goals_quantitative",goalsQualitative:"goals_qualitative",workSteps:"work_steps",durationText:"duration_text",locationText:"location_text",budgetItems:"budget_items",stakeholders:"stakeholders",evaluationItems:"evaluation_items",expectedResults:"expected_results",positionId:"position_id"};async function ks(e){const t={};Object.entries(e).forEach(([o,s])=>{nt[o]&&(t[nt[o]]=s)}),t.form_key=e.formKey||"FORM_09_1_PROJECT_PROPOSAL",t.form_version=Number(e.formVersion)||1,t.origin=e.origin,t.academic_year=e.academicYear,t.created_by_student_id=e.createdByStudentId||null,t.created_by_teacher_id=e.createdByTeacherId||null;const{data:r,error:a}=await h.from("council_documents").insert(t).select().single();if(a)throw a;return r}async function Es(e,t){const r={};Object.entries(t).forEach(([o,s])=>{nt[o]&&(r[nt[o]]=s)}),r.updated_at=new Date().toISOString();const{error:a}=await h.from("council_documents").update(r).eq("id",e);if(a)throw a}async function Ss(e,{createdByStudentId:t=null,createdByTeacherId:r=null}={}){const{data:a,error:o}=await h.from("council_documents").select("*").eq("id",e).single();if(o)throw o;const s={};Object.values(nt).forEach(u=>{u!=="position_id"&&(s[u]=a[u])}),s.position_id=a.position_id||null,s.form_key=a.form_key||"FORM_09_1_PROJECT_PROPOSAL",s.form_version=Number(a.form_version)||1,s.document_revision=(Number(a.document_revision)||1)+1,s.origin=a.origin||"council",s.academic_year=a.academic_year,s.created_by_student_id=t||null,s.created_by_teacher_id=r||null;const{data:n,error:i}=await h.from("council_documents").insert(s).select().single();if(i)throw i;return n}async function As(e){const{data:t,error:r}=await h.from("council_documents").select("origin").eq("id",e).single();if(r)throw r;const a=t.origin==="council"?"pending_advisor":"pending_dept_head",{error:o}=await h.from("council_documents").update({status:a,updated_at:new Date().toISOString(),last_rejected_stage:null,last_rejected_by_teacher_id:null,last_rejected_at:null,last_rejection_comment:null}).eq("id",e);if(o)throw o}async function dr({id:e,approve:t,teacherId:r,comment:a,stage:o,decidedCol:s,decidedAtCol:n,commentCol:i,signatureCol:u,signatureUrl:b,nextStatus:c}){const p=new Date().toISOString();if(t){const f={status:c,updated_at:p,[s]:r,[n]:p,[i]:a||null};u&&(f[u]=b||null);const{error:v}=await h.from("council_documents").update(f).eq("id",e);if(v)throw v}else{const{error:f}=await h.from("council_documents").update({status:"draft",updated_at:p,last_rejected_stage:o,last_rejected_by_teacher_id:r,last_rejected_at:p,last_rejection_comment:a}).eq("id",e);if(f)throw f}}async function Is({id:e,approve:t,teacherId:r,comment:a}){return dr({id:e,approve:t,teacherId:r,comment:a,stage:"advisor",decidedCol:"advisor_decided_by_teacher_id",decidedAtCol:"advisor_decided_at",commentCol:"advisor_comment",nextStatus:"pending_dept_head"})}async function Cs({id:e,approve:t,teacherId:r,comment:a,signatureUrl:o}){return dr({id:e,approve:t,teacherId:r,comment:a,stage:"dept_head",decidedCol:"dept_head_decided_by_teacher_id",decidedAtCol:"dept_head_decided_at",commentCol:"dept_head_comment",signatureCol:"dept_head_signature_url",signatureUrl:o,nextStatus:"pending_director"})}async function Ls({id:e,approve:t,teacherId:r,comment:a,signatureUrl:o}){return dr({id:e,approve:t,teacherId:r,comment:a,stage:"director",decidedCol:"director_decided_by_teacher_id",decidedAtCol:"director_decided_at",commentCol:"director_comment",signatureCol:"director_signature_url",signatureUrl:o,nextStatus:"approved"})}async function zt(e){const{data:t,error:r}=await h.from("teachers").select("id, full_name, teacher_code, image_url, signature_url, category").contains("positions",[e]).order("full_name");if(r)throw r;return t??[]}async function qs(e,t){const{data:r,error:a}=await h.from("teachers").select("positions").eq("id",e).single();if(a)throw a;const o=Array.from(new Set([...r.positions??[],t])),{error:s}=await h.from("teachers").update({positions:o}).eq("id",e);if(s)throw s}async function Ts(e,t){const{data:r,error:a}=await h.from("teachers").select("positions").eq("id",e).single();if(a)throw a;const o=(r.positions??[]).filter(n=>n!==t),{error:s}=await h.from("teachers").update({positions:o}).eq("id",e);if(s)throw s}async function na(e){const{data:t,error:r}=await h.from("council_advisor_positions").select("position_id").eq("teacher_id",e);if(r)throw r;return(t??[]).map(a=>a.position_id)}async function Ns(e,t){const{error:r}=await h.from("council_advisor_positions").delete().eq("teacher_id",e);if(r)throw r;if(t.length){const{error:a}=await h.from("council_advisor_positions").insert(t.map(o=>({teacher_id:e,position_id:o})));if(a)throw a}}async function js(){const{data:e,error:t}=await h.from("council_advisor_positions").select("teacher_id, position_id");if(t)throw t;return e??[]}async function Ds(e,t){const{error:r}=await h.from("teachers").update({signature_url:t}).eq("id",e);if(r)throw r}async function Rs(e,t){const{error:r}=await h.from("teachers").update({image_url:t}).eq("id",e);if(r)throw r}const Os=[["ภาวะผู้นำและความคิดริเริ่ม",20],["การทำงานเป็นทีม",20],["การสื่อสาร",20],["การวางแผนและแก้ปัญหา",20],["ความรับผิดชอบและจริยธรรม",20]];async function Ms(e){let t=h.from("council_yla_events").select("id, academic_year, event_code, title, description, status, start_date, end_date, location, capacity, created_by_teacher_id, created_at, updated_at");e&&(t=t.eq("academic_year",e));const{data:r,error:a}=await t.order("start_date",{ascending:!1}).order("created_at",{ascending:!1});if(a)throw a;return r??[]}async function Bs({academicYear:e,title:t,description:r,startDate:a,endDate:o,location:s,capacity:n,createdByTeacherId:i}){const{data:u,error:b}=await h.from("council_yla_events").insert({academic_year:e,event_code:"YLA",title:t,description:r||null,status:"draft",start_date:a||null,end_date:o||null,location:s||null,capacity:n||null,created_by_teacher_id:i||null}).select().single();if(b)throw b;const{error:c}=await h.from("council_yla_criteria").insert(Os.map(([p,f],v)=>({event_id:u.id,name:p,weight:f,sort_order:v})));if(c)throw c;return u}async function Ps(e,t){const{error:r}=await h.from("council_yla_events").update({status:t,updated_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function Fs(e){const[t,r,a,o,s]=await Promise.all([h.from("council_yla_participants").select("id, event_id, student_id, application_id, status, registered_at, updated_at, students(id, full_name, student_code, main_room, image_url, photo_url, profile_id)").eq("event_id",e).order("registered_at"),h.from("council_yla_attendance").select("id, event_id, student_id, session_label, attendance_state, checked_in_at, note, recorded_by_teacher_id, updated_at").eq("event_id",e).order("session_label").order("student_id"),h.from("council_yla_criteria").select("id, event_id, name, weight, sort_order, is_active").eq("event_id",e).eq("is_active",!0).order("sort_order"),h.from("council_yla_scores").select("id, event_id, student_id, criterion_id, score, comment, scored_by_teacher_id, updated_at").eq("event_id",e),h.from("council_yla_results").select("id, event_id, student_id, total_score, strengths, areas_to_develop, recommended_position, recommended_division, final_result, finalized_by_teacher_id, finalized_at, updated_at").eq("event_id",e)]);for(const n of[t,r,a,o,s])if(n.error)throw n.error;return{participants:t.data??[],attendance:r.data??[],criteria:a.data??[],scores:o.data??[],results:s.data??[]}}async function Ys({eventId:e,studentId:t,applicationId:r}){const{error:a}=await h.from("council_yla_participants").insert({event_id:e,student_id:t,application_id:r||null,status:"registered"});if(a)throw a}async function zs(e,t){const{error:r}=await h.from("council_yla_participants").update({status:t,updated_at:new Date().toISOString()}).eq("id",e);if(r)throw r}async function Us({eventId:e,studentId:t,sessionLabel:r,attendanceState:a,note:o,recordedByTeacherId:s}){const{error:n}=await h.from("council_yla_attendance").upsert({event_id:e,student_id:t,session_label:r||"กิจกรรมหลัก",attendance_state:a,checked_in_at:a==="present"||a==="late"?new Date().toISOString():null,note:o||null,recorded_by_teacher_id:s||null,updated_at:new Date().toISOString()},{onConflict:"event_id,student_id,session_label"});if(n)throw n}async function Vs({eventId:e,studentId:t,scores:r,scoredByTeacherId:a}){const o=Object.entries(r).map(([n,i])=>({event_id:e,student_id:t,criterion_id:Number(n),score:Number(i)||0,scored_by_teacher_id:a||null,updated_at:new Date().toISOString()}));if(!o.length)return;const{error:s}=await h.from("council_yla_scores").upsert(o,{onConflict:"event_id,student_id,criterion_id"});if(s)throw s}async function Gs({eventId:e,studentId:t,totalScore:r,strengths:a,areasToDevelop:o,recommendedPosition:s,recommendedDivision:n,finalResult:i,finalizedByTeacherId:u}){const b=i&&i!=="pending",{error:c}=await h.from("council_yla_results").upsert({event_id:e,student_id:t,total_score:r==null||r===""?null:Number(r),strengths:a||null,areas_to_develop:o||null,recommended_position:s||null,recommended_division:n||null,final_result:i||"pending",finalized_by_teacher_id:b&&u||null,finalized_at:b?new Date().toISOString():null,updated_at:new Date().toISOString()},{onConflict:"event_id,student_id"});if(c)throw c}function Ve(e="success"){try{const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),a=t.createGain();r.connect(a),a.connect(t.destination),e==="success"?(r.type="sine",r.frequency.setValueAtTime(880,t.currentTime),a.gain.setValueAtTime(.08,t.currentTime),a.gain.exponentialRampToValueAtTime(.01,t.currentTime+.12),r.start(),r.stop(t.currentTime+.12)):(r.type="sawtooth",r.frequency.setValueAtTime(150,t.currentTime),a.gain.setValueAtTime(.12,t.currentTime),a.gain.exponentialRampToValueAtTime(.01,t.currentTime+.3),r.start(),r.stop(t.currentTime+.3))}catch{}}async function Hs(){return window.Html5Qrcode?window.Html5Qrcode:new Promise((e,t)=>{const r=document.createElement("script");r.src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js",r.onload=()=>e(window.Html5Qrcode),r.onerror=()=>t(new Error("โหลดตัวอ่าน QR Code ไม่สำเร็จ")),document.head.appendChild(r)})}function Ie(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ws(e){var T;const{activityId:t,activityTitle:r,members:a,alreadyChecked:o,onCheckedIn:s,onUndo:n,openToGeneral:i}=e;(T=document.getElementById("council-checkin-overlay"))==null||T.remove();const u=document.createElement("div");u.id="council-checkin-overlay",u.className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col",u.innerHTML=`
    <style>
      @keyframes ccs-laser-move { 0%{top:0} 50%{top:100%} 100%{top:0} }
      .ccs-laser { animation: ccs-laser-move 2s ease-in-out infinite; }
      .ccs-flash-success { box-shadow: inset 0 0 0 6px #10b981 !important; }
      .ccs-flash-error { box-shadow: inset 0 0 0 6px #ef4444 !important; }
    </style>
    <div class="flex items-center gap-3 px-4 py-3 border-b border-slate-800 flex-shrink-0">
      <div class="flex-1 min-w-0">
        <h3 class="text-slate-100 font-bold text-sm">📷 สแกนเช็คอินกิจกรรม</h3>
        <p class="text-xs text-slate-400 truncate">${Ie(r??"")}</p>
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
          ยกกล้องส่อง QR ของ${i?"นักเรียน":"สมาชิกสภา"}เพื่อเช็คอิน
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
    </div>`,document.body.appendChild(u);const b=[];let c=null,p=null,f=0;const v=new Set(o??[]),m=()=>{const C=u.querySelector("#ccs-history-list"),y=u.querySelector("#ccs-history-count");if(y.textContent=`${b.length} คน`,!b.length){C.innerHTML='<p class="text-slate-500 text-center py-1">ยังไม่มีประวัติ</p>';return}C.innerHTML=b.map($=>`
      <div class="flex items-center gap-2 text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <span class="font-medium text-slate-200 truncate flex-1 min-w-0">${Ie($.name)}</span>
        <span class="text-emerald-400 font-bold text-[11px] flex-shrink-0">✓ เช็คอินแล้ว</span>
        <button data-ccs-undo="${Ie($.studentId)}" class="px-2 py-0.5 rounded-md border border-red-800/60 bg-red-950/40 text-red-400 text-[10.5px] font-bold flex-shrink-0">✕ ยกเลิก</button>
      </div>`).join("")};async function x(C){var A;const y=a.find(q=>{var D;return((D=q.students)==null?void 0:D.student_code)===C});if(y)return{studentId:y.student_id,name:((A=y.students)==null?void 0:A.full_name)??"—"};if(!i)return null;const E=(await ea(C).catch(()=>[])).find(q=>q.student_code===C);return E?{studentId:E.id,name:E.full_name}:null}async function w(C){const y=u.querySelector("#ccs-camera-container"),$=u.querySelector("#ccs-feedback"),E=q=>{y.classList.add(q?"ccs-flash-success":"ccs-flash-error"),setTimeout(()=>y.classList.remove(q?"ccs-flash-success":"ccs-flash-error"),500)},A=await x(C);if(!A){Ve("error"),E(!1),$.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">ไม่พบ${i?"นักเรียน":"สมาชิกสภา"}รหัสนี้</div>`;return}if(v.has(A.studentId)){Ve("error"),E(!1),$.innerHTML=`<div class="bg-amber-950/40 border border-amber-800/80 rounded-2xl p-3 text-center text-xs text-amber-400">${Ie(A.name)} เช็คอินไปแล้ว</div>`;return}try{await aa({activityId:t,studentId:A.studentId}),v.add(A.studentId),Ve("success"),E(!0),$.innerHTML=`<div class="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-3 text-center text-xs text-emerald-300">✓ เช็คอิน ${Ie(A.name)} สำเร็จ</div>`,b.unshift({name:A.name,studentId:A.studentId}),m(),s==null||s(A.studentId)}catch(q){Ve("error"),E(!1),$.innerHTML=`<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">บันทึกไม่สำเร็จ: ${Ie(S(q))}</div>`,g("เช็คอินไม่สำเร็จ: "+S(q),"error")}}async function I(C){let y=C;if(C.startsWith("SQ:")){const[,$,E]=C.split(":"),A=Math.floor(Date.now()/1e3)-parseInt(E,10);if(A>60||A<-60){const q=u.querySelector("#ccs-feedback"),D=u.querySelector("#ccs-camera-container");Ve("error"),D.classList.add("ccs-flash-error"),setTimeout(()=>D.classList.remove("ccs-flash-error"),500),q.innerHTML='<div class="bg-red-950/40 border border-red-800/80 rounded-2xl p-3 text-center text-xs text-red-400">QR Code หมดอายุแล้ว ให้เปิดหน้าใหม่</div>';return}y=$}await w(y)}u.querySelector("#ccs-manual-form").addEventListener("submit",async C=>{C.preventDefault();const y=u.querySelector("#ccs-manual-code"),$=y.value.trim();$&&(await w($),y.value="",y.focus())}),u.querySelector("#ccs-history-list").addEventListener("click",async C=>{const y=C.target.closest("[data-ccs-undo]");if(!y)return;const $=Number(y.dataset.ccsUndo);y.disabled=!0;try{await Qn({activityId:t,studentId:$}),v.delete($);const E=b.findIndex(A=>A.studentId===$);E!==-1&&b.splice(E,1),m(),n==null||n($)}catch(E){g("ยกเลิกไม่สำเร็จ: "+S(E),"error"),y.disabled=!1}}),u.querySelector("#ccs-close").addEventListener("click",async()=>{if(c)try{await c.stop()}catch{}u.remove()}),(async()=>{try{const C=await Hs();c=new C("ccs-camera-reader"),await c.start({facingMode:"environment"},{fps:25,aspectRatio:1},y=>{y===p&&Date.now()-f<2e3||(p=y,f=Date.now(),I(y))},()=>{})}catch(C){g("ไม่สามารถเปิดกล้องได้: "+S(C),"error"),u.remove()}})()}const R=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),be=e=>String(e).replace(/[0-9]/g,t=>"๐๑๒๓๔๕๖๗๘๙"[Number(t)]),Qt=e=>String(e??"").replace(/[๐-๙]/g,t=>String("๐๑๒๓๔๕๖๗๘๙".indexOf(t))).replace(/ข้อ\s*ที่/g,"ข้อ").replace(/\s+/g," ").trim(),Kt={draft:"ฉบับร่าง",pending_approval:"รออนุมัติ",approved:"อนุมัติแล้ว",effective:"มีผลบังคับใช้",superseded:"ถูกแทนที่ด้วยฉบับใหม่",archived:"เก็บถาวร"};let k={versions:null,selectedVersionId:null,content:null,loading:!1,error:null,query:"",sectionFilter:"all",editingClauseId:null,addingClause:!1,routeClauseNo:null,focusRouteClause:!1};function sa(){const e=Number(new URLSearchParams(window.location.search).get("clause"));return Number.isInteger(e)&&e>0?e:null}function Js(){const e=sa();e!==k.routeClauseNo&&(e?(k.routeClauseNo=e,k.query="ข้อที่ "+e,k.focusRouteClause=!0):(k.routeClauseNo&&k.query==="ข้อที่ "+k.routeClauseNo&&(k.query=""),k.routeClauseNo=null,k.focusRouteClause=!1))}function Ut(){k.routeClauseNo=null,k.focusRouteClause=!1;const e=new URL(window.location.href);e.searchParams.delete("clause"),window.history.replaceState(null,"",e)}function oa(){var e;return(k.versions??[]).find(t=>t.id===k.selectedVersionId)??((e=k.versions)==null?void 0:e[0])??null}async function ia(e){var t;k.loading=!0,k.error=null,e();try{k.versions=await dn(),k.selectedVersionId=k.selectedVersionId??((t=k.versions[0])==null?void 0:t.id)??null,k.content=k.selectedVersionId?await At(k.selectedVersionId):{sections:[],clauses:[]};const r=sa();r&&(k.routeClauseNo=r,k.query="ข้อที่ "+r,k.focusRouteClause=!0)}catch(r){k.error=r}finally{k.loading=!1,e()}}async function Qs(e){if(k.selectedVersionId){k.loading=!0,k.error=null,e();try{k.content=await At(k.selectedVersionId)}catch(t){k.error=t}finally{k.loading=!1,e()}}}function Ks(e){k.versions===null&&!k.loading&&ia(e)}function la(e,t,r){const a=new Map(t.map(s=>[s.id,s])),o=Qt(k.query).toLocaleLowerCase();return r.filter(s=>{const n=a.get(s.section_id);if(k.sectionFilter!=="all"&&String(n==null?void 0:n.id)!==String(k.sectionFilter))return!1;if(!o)return!0;const i=[s.clause_no,"ข้อ "+s.clause_no,"ข้อที่ "+s.clause_no,s.title,s.body,...s.keywords??[],n==null?void 0:n.title,"หมวด "+((n==null?void 0:n.section_no)??""),e==null?void 0:e.title].filter(Boolean).join(" ");return Qt(i).toLocaleLowerCase().includes(o)})}function Xs(e,t,r,a=""){const s=t.map(i=>({section:i,clauses:r.filter(u=>u.section_id===i.id)})).filter(i=>i.clauses.length).map(i=>{const u='<div class="section">หมวด '+be(i.section.section_no)+"<br>"+R(i.section.title)+"</div>",b=i.clauses.map(c=>'<div class="clause"><span class="clause-no">ข้อ '+be(c.clause_no)+"</span>  "+R(c.body)+"</div>").join("");return u+b}).join(""),n=String((e==null?void 0:e.source_document_url)??"").startsWith("http")?'<p class="source">แหล่งต้นฉบับ: <a href="'+R(e.source_document_url)+'">'+R(e.source_document_url)+"</a></p>":"";return'<!doctype html><html lang="th"><head><meta charset="utf-8"><title>'+R(e==null?void 0:e.title)+'</title><style>@page{size:A4;margin:18mm 18mm 16mm}*{box-sizing:border-box}body{font-family:"TH SarabunPSK","TH Sarabun New",Sarabun,sans-serif;color:#111;font-size:16pt;line-height:1.35}h1{text-align:center;font-size:22pt;margin:0 0 3mm;font-weight:700}.meta{text-align:center;font-size:13pt;margin-bottom:7mm}.draft{border:1px solid #9a5b00;color:#7a4200;padding:2mm;text-align:center;margin-bottom:6mm}.section{page-break-before:always;text-align:center;font-size:18pt;font-weight:700;margin:8mm 0 5mm}.section:first-child{page-break-before:auto}.clause{margin:0 0 4mm;text-align:justify;white-space:pre-line}.clause-no{font-weight:700}.source{font-size:11pt;margin-top:10mm;color:#555}a{color:inherit}</style></head><body><h1>'+R(e==null?void 0:e.title)+'</h1><div class="meta">ฉบับ '+R(e==null?void 0:e.version_label)+" · สถานะ: "+R(Kt[e==null?void 0:e.status]||(e==null?void 0:e.status))+"</div>"+(a?'<div class="meta">'+R(a)+" · "+r.length+" ข้อ</div>":"")+((e==null?void 0:e.status)!=="effective"?'<div class="draft">เอกสารฉบับร่าง/เอกสารอ้างอิง ยังไม่ใช่ระเบียบที่มีผลบังคับใช้</div>':"")+s+n+"</body></html>"}function Zs(e){return'<form class="regulation-edit-form border border-[var(--primary-soft-line)] bg-[var(--primary-soft)] rounded-2xl p-4 mt-2" data-regulation-edit="'+e.id+'"><p class="text-sm font-bold text-[var(--ink)] mb-3">แก้ไขข้อ '+be(e.clause_no)+'</p><label class="block text-xs font-bold text-[var(--muted)] mb-1">หัวข้อ</label><input name="title" value="'+R(e.title)+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)] mb-3"><label class="block text-xs font-bold text-[var(--muted)] mb-1">เนื้อหาข้อ</label><textarea name="body" rows="8" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]">'+R(e.body)+'</textarea><label class="block text-xs font-bold text-[var(--muted)] mt-3 mb-1">คำค้น (คั่นด้วยจุลภาค)</label><input name="keywords" value="'+R((e.keywords??[]).join(", "))+'" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"><div class="flex gap-2 mt-3"><button class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold" type="submit">บันทึกฉบับร่าง</button><button class="regulation-cancel-edit px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold" type="button">ยกเลิก</button></div></form>'}function eo(e,t,r){if(k.editingClauseId===e.id&&r)return Zs(e);const a=String(e.title??"").trim(),o=String(e.body??""),s=a&&!o.startsWith(a),n=k.routeClauseNo===Number(e.clause_no),i="council.html?view=regulation&clause="+encodeURIComponent(e.clause_no);return'<article id="regulation-clause-'+R(e.clause_no)+'" class="border border-[var(--line-soft)] bg-[var(--surface)] rounded-2xl p-4 shadow-sm'+(n?" ring-2 ring-[var(--primary)]":"")+'"><div class="flex items-start justify-between gap-3"><div class="min-w-0"><p class="text-sm font-bold text-[var(--primary)]">ข้อ '+be(e.clause_no)+"</p>"+(s?'<p class="text-sm font-semibold text-[var(--ink)] mt-1">'+R(a)+"</p>":"")+'</div><div class="flex items-center gap-2 flex-shrink-0"><a href="'+i+'" class="regulation-clause-link px-2.5 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" title="เปิดลิงก์ตรงของข้อนี้">🔗 ลิงก์ข้อ</a>'+(r?'<button type="button" class="regulation-edit-clause px-3 py-1.5 rounded-lg border border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]" data-id="'+e.id+'">แก้ไข</button>':"")+'</div></div><div class="text-sm leading-7 text-[var(--ink-2)] mt-3 whitespace-pre-line">'+R(e.body)+'</div><p class="text-[0.6875rem] text-[var(--muted-2)] mt-3">หมวด '+be(t.section_no)+" · "+R(t.title)+"</p></article>"}function to(e){return'<form id="regulation-add-form" class="bg-[var(--surface)] border border-[var(--primary-soft-line)] rounded-2xl p-5"><h2 class="font-bold text-[var(--ink)]">เพิ่มข้อในฉบับร่าง</h2><div class="grid md:grid-cols-3 gap-3 mt-3"><label class="text-xs font-bold text-[var(--muted)]">หมวด<select name="sectionId" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]">'+e.map(t=>'<option value="'+t.id+'">หมวด '+be(t.section_no)+" · "+R(t.title)+"</option>").join("")+'</select></label><label class="text-xs font-bold text-[var(--muted)]">เลขข้อ<input name="clauseNo" type="number" min="1" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label><label class="text-xs font-bold text-[var(--muted)]">หัวข้อ<input name="title" class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></label></div><label class="block text-xs font-bold text-[var(--muted)] mt-3">เนื้อหา<textarea name="body" rows="6" required class="mt-1 w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm leading-6 bg-[var(--surface)] text-[var(--ink)]"></textarea></label><div class="flex gap-2 mt-3"><button type="submit" class="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">เพิ่มฉบับร่าง</button><button type="button" class="regulation-cancel-add px-4 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ยกเลิก</button></div></form>'}function ro(e,t=()=>{}){var p,f;if(Js(),Ks(t),k.loading&&k.versions===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดระเบียบสภานักเรียน...</div></div>';if(k.error)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-red-200 rounded-2xl p-6 text-center"><p class="text-sm font-bold text-red-700">โหลดระเบียบไม่สำเร็จ</p><p class="text-xs text-[var(--muted)] mt-2">'+R(k.error.message||k.error)+'</p><button type="button" class="regulation-retry mt-4 px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">ลองใหม่</button></div></div>';const r=oa();if(!r)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีระเบียบในระบบ</div></div>';const a=((p=k.content)==null?void 0:p.sections)??[],o=((f=k.content)==null?void 0:f.clauses)??[],s=new Map(a.map(v=>[v.id,v])),n=la(r,a,o),i=a.map(v=>({section:v,clauses:n.filter(m=>m.section_id===v.id)})).filter(v=>v.clauses.length),u=!!(e!=null&&e.isAdmin)&&["draft","pending_approval"].includes(r.status),b=!!(Qt(k.query)||k.sectionFilter!=="all");if(k.loading&&k.content===null)return'<div class="max-w-5xl mx-auto"><div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-8 text-center text-sm text-[var(--muted)]">กำลังโหลดฉบับที่เลือก...</div></div>';let c='<div class="max-w-5xl mx-auto space-y-4"><section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 md:p-6"><div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"><div><p class="text-xs font-bold text-[var(--primary)] mb-1">📚 ระเบียบและประกาศ</p><h1 class="text-xl md:text-2xl font-bold text-[var(--ink)]">'+R(r.title)+'</h1><p class="text-xs text-[var(--muted)] mt-2">ฉบับ '+R(r.version_label)+" · "+R(Kt[r.status]||r.status)+" · โหมด "+(r.implementation_mode==="enforced"?"บังคับใช้":"อ้างอิง/เตรียมการ")+'</p></div><div class="flex flex-wrap gap-2"><button type="button" class="regulation-print px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">🖨️ '+(b?"พิมพ์ผลการค้นหา":"พิมพ์ฉบับนี้")+"</button>"+(r.source_document_url?'<a href="'+R(r.source_document_url)+'" target="_blank" rel="noopener" class="px-4 py-2.5 rounded-xl border border-[var(--line)] text-[var(--ink-2)] text-xs font-bold">🔗 เปิดต้นฉบับ</a>':"")+(u?'<button type="button" class="regulation-add-clause px-4 py-2.5 rounded-xl border border-[var(--primary-soft-line)] text-[var(--primary)] text-xs font-bold">➕ เพิ่มข้อ</button>':"")+'</div></div><div class="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-6 text-amber-900"><strong>สถานะสำคัญ:</strong> ฉบับนี้เป็นฉบับร่าง/ฉบับรออนุมัติ ใช้ติดตามและเตรียมงาน ยังไม่ใช่ระเบียบที่มีผลบังคับใช้</div>';return k.versions.length>1&&(c+='<label class="block text-xs font-bold text-[var(--muted)] mt-4">เลือกฉบับ</label><select id="regulation-version-select" class="mt-1 w-full md:max-w-md border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">'+k.versions.map(v=>'<option value="'+v.id+'" '+(v.id===r.id?"selected":"")+">"+R(v.version_label)+" · "+R(Kt[v.status]||v.status)+"</option>").join("")+"</select>"),c+="</section>",k.addingClause&&u&&(c+=to(a)),c+='<section class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5"><form id="regulation-search-form" class="flex flex-col md:flex-row gap-2"><input id="regulation-search" value="'+R(k.query)+'" placeholder="ค้นหา เช่น ข้อที่ 15, การเลือกตั้ง, การเงิน, การลาออก" class="flex-1 border border-[var(--line)] rounded-xl px-4 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><select id="regulation-section-filter" class="border border-[var(--line)] rounded-xl px-3 py-3 text-sm bg-[var(--surface)] text-[var(--ink)]"><option value="all">ทุกหมวด</option>'+a.map(v=>'<option value="'+v.id+'" '+(String(k.sectionFilter)===String(v.id)?"selected":"")+">หมวด "+be(v.section_no)+" · "+R(v.title)+"</option>").join("")+'</select><button type="submit" class="px-5 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">ค้นหา</button></form><div class="flex items-center justify-between gap-3 mt-4"><p class="text-xs text-[var(--muted)]">แสดง '+n.length+" จาก "+o.length+" ข้อ · แยกตามหมวด</p>"+(k.query||k.sectionFilter!=="all"?'<button type="button" class="regulation-clear-filter text-xs font-bold text-[var(--primary)]">ล้างตัวกรอง</button>':"")+"</div></section>",c+=i.length?i.map(v=>'<details open class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden"><summary class="cursor-pointer list-none px-5 py-4 bg-[var(--surface-2)] flex items-center justify-between gap-3"><span class="font-bold text-[var(--ink)]">หมวด '+be(v.section.section_no)+" · "+R(v.section.title)+'</span><span class="text-xs text-[var(--muted)]">'+v.clauses.length+' ข้อ</span></summary><div class="p-4 space-y-3">'+v.clauses.map(m=>eo(m,s.get(m.section_id),u)).join("")+"</div></details>").join(""):'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบข้อที่ตรงกับการค้นหา</div>',c+"</div>"}function ao(e,t){var r,a,o,s,n,i,u,b,c;(r=document.querySelector(".regulation-retry"))==null||r.addEventListener("click",()=>ia(t)),(a=document.getElementById("regulation-version-select"))==null||a.addEventListener("change",p=>{k.selectedVersionId=Number(p.target.value),k.content=null,Qs(t)}),(o=document.getElementById("regulation-section-filter"))==null||o.addEventListener("change",p=>{Ut(),k.sectionFilter=p.target.value,t()}),(s=document.getElementById("regulation-search-form"))==null||s.addEventListener("submit",p=>{var f;p.preventDefault(),Ut(),k.query=((f=document.getElementById("regulation-search"))==null?void 0:f.value)??"",t()}),(n=document.querySelector(".regulation-clear-filter"))==null||n.addEventListener("click",()=>{Ut(),k.query="",k.sectionFilter="all",t()}),(i=document.querySelector(".regulation-print"))==null||i.addEventListener("click",()=>{var f,v;const p=oa();if(p){const m=((f=k.content)==null?void 0:f.sections)??[],x=((v=k.content)==null?void 0:v.clauses)??[],w=la(p,m,x),I=k.query.trim()||k.sectionFilter!=="all"?"ผลการค้นหา/ตัวกรอง":"";dt(Xs(p,m,w,I))}}),k.focusRouteClause&&window.requestAnimationFrame(()=>{const p=document.getElementById("regulation-clause-"+k.routeClauseNo);p&&p.scrollIntoView({behavior:"smooth",block:"center"}),k.focusRouteClause=!1}),e!=null&&e.isAdmin&&((u=document.querySelector(".regulation-add-clause"))==null||u.addEventListener("click",()=>{k.addingClause=!0,t()}),(b=document.querySelector(".regulation-cancel-add"))==null||b.addEventListener("click",()=>{k.addingClause=!1,t()}),document.querySelectorAll(".regulation-edit-clause").forEach(p=>p.addEventListener("click",()=>{k.editingClauseId=Number(p.dataset.id),t()})),document.querySelectorAll(".regulation-cancel-edit").forEach(p=>p.addEventListener("click",()=>{k.editingClauseId=null,t()})),document.querySelectorAll(".regulation-edit-form").forEach(p=>p.addEventListener("submit",async f=>{f.preventDefault();const v=new FormData(p),m=String(v.get("body")??"").trim();if(!m)return;const x=p.querySelector('button[type="submit"]');x&&(x.disabled=!0);try{await cn({clauseId:Number(p.dataset.regulationEdit),title:String(v.get("title")??"").trim(),body:m,keywords:String(v.get("keywords")??"").split(",").map(w=>w.trim()).filter(Boolean)}),k.editingClauseId=null,k.content=await At(k.selectedVersionId),g("บันทึกฉบับร่างแล้ว ✅","success"),t()}catch(w){g("บันทึกไม่สำเร็จ: "+(w.message||w),"error"),x&&(x.disabled=!1)}})),(c=document.getElementById("regulation-add-form"))==null||c.addEventListener("submit",async p=>{p.preventDefault();const f=p.currentTarget,v=new FormData(f),m=String(v.get("body")??"").trim(),x=Number(v.get("clauseNo"));if(!m||!Number.isInteger(x)||x<1)return;const w=f.querySelector('button[type="submit"]');w&&(w.disabled=!0);try{await un({versionId:k.selectedVersionId,sectionId:Number(v.get("sectionId")),clauseNo:x,title:String(v.get("title")??"").trim(),body:m,keywords:[]}),k.addingClause=!1,k.content=await At(k.selectedVersionId),g("เพิ่มข้อในฉบับร่างแล้ว ✅","success"),t()}catch(I){g("เพิ่มข้อไม่สำเร็จ: "+(I.message||I),"error"),w&&(w.disabled=!1)}}))}const no="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit",so=[["การรับสมัครและคัดเลือก",[["FORM_01_APPLICATION","01","ใบสมัครสมาชิกสภานักเรียน","ใช้รับสมัครและเก็บข้อมูลผู้สมัคร"],["FORM_02_ENDORSEMENT","02","แบบรับรองผู้สมัคร","ใช้รับรองผู้สมัครโดยผู้มีสิทธิรับรอง"],["FORM_03_INTERVIEW_YLA","03","แบบสัมภาษณ์และประเมิน YLA","ใช้บันทึกผลสัมภาษณ์และการประเมิน YLA"],["FORM_04_CHAIR_NOMINEE","04","แบบเสนอผู้สมัครประธานหลัง YLA","ใช้เสนอรายชื่อหลังผ่านกระบวนการ YLA"]]],["การเลือกตั้งและแต่งตั้ง",[["FORM_05_ELECTION_RULES","05","แนวปฏิบัติการเลือกตั้ง","คู่มือและกติกาการเลือกตั้ง"],["FORM_06_ELECTION_RESULT","06","แบบบันทึกและรับรองผลการเลือกตั้ง","ใช้บันทึกและรับรองผลการเลือกตั้ง"],["FORM_07_ELECTION_COMPLAINT","07","แบบร้องเรียนหรือคัดค้านการเลือกตั้ง","ใช้ยื่นและติดตามเรื่องร้องเรียน"],["FORM_08_APPOINTMENT_ROSTER","08","บัญชีรายชื่อเสนอแต่งตั้ง","ใช้จัดทำบัญชีรายชื่อเพื่อเสนอแต่งตั้ง"]]],["โครงการและกิจกรรม",[["FORM_09_ACTIVITY_APPROVAL","09","แบบขออนุมัติจัดกิจกรรม","ใช้ขออนุมัติกิจกรรมก่อนดำเนินงาน"],["FORM_09_1_PROJECT_PROPOSAL","09.1","แบบเสนอโครงการ","ใช้จัดทำข้อเสนอโครงการตามแบบโรงเรียน"],["FORM_10_PROJECT_REPORT","10","แบบสรุปผลโครงการหรือกิจกรรม","ใช้สรุปผลหลังเสร็จสิ้นโครงการ"],["FORM_12_CALENDAR","12","แผนงานและปฏิทินกิจกรรม","ใช้วางแผนงานและกำหนดการกิจกรรม"]]],["การประชุม การติดตามงาน และการบริหารสมาชิก",[["FORM_11_MEETING_MINUTES","11","ระเบียบวาระและรายงานการประชุม","ใช้เตรียมวาระและบันทึกมติการประชุม"],["FORM_13_INCIDENT","13","แบบรายงานเหตุหรือพฤติกรรม","ใช้รายงานเหตุและพฤติกรรมที่ต้องติดตาม"],["FORM_14_RESIGNATION","14","แบบลาออกจากสภานักเรียน","ใช้ยื่นลาออกจากตำแหน่ง"],["FORM_15_REPLACEMENT","15","แบบเสนอแต่งตั้งทดแทนหรือปรับฝ่าย","ใช้เสนอการทดแทนหรือปรับฝ่าย"],["FORM_19_WORK_TRACKING","19","แบบติดตามงานของฝ่าย","ใช้ติดตามงานค้างและผลการส่งมอบงาน"]]],["การเงินและทรัพย์สิน",[["FORM_16_MEMBER_FINANCE","16","ทะเบียนการเงินรายบุคคล","ใช้บันทึกข้อมูลการเงินรายบุคคลตามสิทธิ์"],["FORM_17_ACTIVITY_FINANCE","17","สรุปบัญชีรับ–จ่ายกิจกรรม","ใช้สรุปการเงินของกิจกรรมแยกจากเงินสมาชิก"],["FORM_18_ASSET_REGISTER","18","ทะเบียนทรัพย์สินและระบบดิจิทัล","ใช้บันทึกทรัพย์สินและสิทธิ์ระบบ"],["FORM_23_PARENT_FINANCE_CONSENT","23","แบบยินยอมผู้ปกครองด้านการเงิน","ใช้ขอความยินยอมด้านการเงิน"]]],["วินัย การสิ้นสุดวาระ และบัตรประจำตัว",[["FORM_20_FINAL_AGREEMENT","20","แบบข้อตกลงกรณี 50 คะแนน","ใช้จัดทำข้อตกลงปรับปรุงการปฏิบัติหน้าที่"],["FORM_21_HANDOVER","21","แบบส่งมอบงานเมื่อสิ้นสุดวาระ","ใช้ส่งมอบเอกสาร ทรัพย์สิน และงานค้าง"],["FORM_22_COUNCIL_CARD_REGISTER","22","ทะเบียนบัตรประจำตัวสภานักเรียน","ใช้ติดตามการออกและคืนบัตรประจำตัว"]]],["เอกสารรับรอง ผู้ปกครอง และการแก้ไขระเบียบ",[["FORM_24_REGULATION_AMENDMENT","24","แบบเสนอแก้ไขเพิ่มเติมระเบียบ","ใช้เสนอแก้ไขระเบียบผ่านกระบวนการโรงเรียน"],["FORM_25_PARTICIPATION_CERTIFICATE","25","หนังสือรับรองการเข้าร่วมกิจกรรม","ใช้รับรองการเข้าร่วมกิจกรรมตามข้อเท็จจริง"],["FORM_26_PARENT_PERMISSION","26","ใบอนุญาตผู้ปกครอง","ใช้ขออนุญาตผู้ปกครองสำหรับกิจกรรม"]]],["การประเมินและการรับรองการปฏิบัติหน้าที่",[["FORM_27_MEMBER_PERFORMANCE_EVALUATION","27","แบบประเมินการปฏิบัติหน้าที่","ใช้ประเมินผลการปฏิบัติหน้าที่สมาชิก"],["FORM_28_ATTENDANCE_LEAVE_REGISTER","28","แบบบันทึกการเข้าร่วมและการลา","ใช้บันทึกการเข้าร่วม ประชุม กิจกรรม ภารกิจ และการลา"],["FORM_29_ABSENCE_IMPROVEMENT_AGREEMENT","29","แบบติดตามการขาดและข้อตกลง","ใช้ติดตามการขาดและข้อตกลงปรับปรุง"],["FORM_30_CERTIFICATE_ELIGIBILITY","30","สิทธิรับเกียรติบัตรและหนังสือรับรอง","ใช้ตรวจสอบสิทธิและหลักฐานก่อนออกเอกสารรับรอง"]]]],oo=[["YLA-00","ภาพรวมและสารบัญ","จุดเริ่มต้นสำหรับดูโครงสร้างชุดเอกสาร YLA"],["YLA-01","โครงการกิจกรรมเสริมทักษะภาวะผู้นำ","รายละเอียดโครงการและวัตถุประสงค์ของ YLA"],["YLA-02","กำหนดการดำเนินกิจกรรม","กำหนดการและลำดับการดำเนินกิจกรรม"],["YLA-03","คู่มือการดำเนินกิจกรรมและฐาน","แนวทางดำเนินกิจกรรมและภารกิจแต่ละฐาน"],["YLA-04","แบบบันทึกการเข้าร่วมและภารกิจ","บันทึกการเข้าร่วมและการทำภารกิจ"],["YLA-05","แบบประเมินศักยภาพรายบุคคล","ประเมินศักยภาพและพัฒนาการของผู้เข้าร่วม"],["YLA-06","สรุปผลและข้อเสนอการจัดฝ่าย","สรุปผลเพื่อประกอบการจัดสมาชิกลงฝ่าย"],["YLA-07","รายงานผลการดำเนินกิจกรรม","รายงานผลหลังจบกิจกรรม YLA"],["YLA-08","สมุดค่ายผู้เข้าร่วมกิจกรรม YLA","สมุดงานและบันทึกประสบการณ์ของผู้เข้าร่วม"],["YLA-09","ใบเสนอโครงการกิจกรรม YLA","ข้อเสนอโครงการ YLA ตามแบบโรงเรียน"],["YLA-10","ใบสรุปผลโครงการกิจกรรม YLA","สรุปผลโครงการ YLA สำหรับจัดเก็บและตรวจสอบ"]],io=[["ACT-01","การเลือกตั้งประธานสภานักเรียน","school_led","ดำเนินการเลือกตั้งอย่างเป็นธรรม โปร่งใส และตรวจสอบได้"],["ACT-02","เสริมทักษะการดำเนินการจัดกิจกรรมและการเขียนใบโครงการ","school_led","ฝึกคิดกิจกรรม วางแผน งบประมาณ เขียนใบโครงการ ประเมิน และสรุปผล"],["ACT-03","เสริมทักษะด้านการสื่อสารต่อหน้าสาธารณะ","school_led","ฝึกการประกาศ การเป็นพิธีกร การชี้แจงกติกา และการนำเสนอ"],["ACT-04","เสริมทักษะด้านสื่อสร้างสรรค์","school_led","พัฒนาทักษะการผลิตสื่อดิจิทัลและการใช้ AI อย่างรับผิดชอบ"],["ACT-05","ส่งเสริมคุณธรรมและจริยธรรม","school_led","พัฒนาความรับผิดชอบ ความซื่อสัตย์ ความยุติธรรม อามานะฮ์ และจริยธรรม"],["ACT-08","ฟุตซอลสานสัมพันธ์ภายใน","council_led","การแข่งขันฟุตซอลนักเรียนชาย พร้อมทะเบียนเงินประกันทีมและการบริหารการแข่งขัน"],["ACT-09","กีฬาสานสัมพันธ์หอพัก","council_led","กิจกรรมกีฬาสำหรับนักเรียนหญิงหอพัก เช่น วอลเลย์บอล แชร์บอล และกีฬาพื้นบ้าน"]],lo=so.flatMap(([e,t])=>t.map(([r,a,o,s])=>({key:r,code:a,title:o,description:s,group:e}))),Vt={forms:{eyebrow:"เอกสารและแบบฟอร์มต่าง ๆ",title:"ศูนย์เอกสารและแบบฟอร์ม",description:"ค้นหาแบบฟอร์มตามระเบียบ 01–30 และเปิดรายการที่เกี่ยวข้องได้จากหน้าเดียว",sourceTab:"t.yq1xlf88ro0s",sourceLabel:"เปิดแท็บเอกสารและแบบฟอร์มต้นฉบับ",items:lo},yla:{eyebrow:"กิจกรรม YLA",title:"ชุดเอกสารกิจกรรม YLA",description:"รวมเอกสาร Youth Leadership For Azizstan ตั้งแต่การเตรียมงาน การเข้าร่วม การประเมิน จนถึงสรุปผล",sourceTab:"t.gq6dk28nkqg8",sourceLabel:"เปิดแท็บกิจกรรม YLA ต้นฉบับ",items:oo.map(([e,t,r])=>({code:e,title:t,description:r,group:"ชุดเอกสาร YLA"}))},activityDocs:{eyebrow:"โครงการและกิจกรรมอื่น ๆ",title:"ทะเบียนโครงการและกิจกรรม",description:"ดูประเภทกิจกรรม เจ้าของกิจกรรม และชุดเอกสารที่ควรใช้ตั้งแต่ก่อนเริ่มงานจนถึงสรุปผล",sourceTab:"t.xjmanckvqq6a",sourceLabel:"เปิดแท็บโครงการและกิจกรรมต้นฉบับ",items:io.map(([e,t,r,a])=>({code:e,title:t,description:a,group:r==="council_led"?"สภาเป็นผู้ริเริ่ม/รับผิดชอบหลัก":"โรงเรียนหรือฝ่ายงานเป็นผู้รับผิดชอบหลัก",ownership:r}))}},qr=e=>`${no}?tab=${e}`;function Xt({kind:e,esc:t,canOpenDocs:r=!1}){const a=Vt[e]??Vt.forms,o=a.items.map(s=>`
    <article class="council-resource-card rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3" data-resource-card data-resource-search="${t([s.code,s.title,s.description,s.group].filter(Boolean).join(" "))}">
      <div class="flex items-start gap-3">
        <span class="flex-shrink-0 rounded-lg bg-[var(--primary-soft)] text-[var(--primary)] px-2.5 py-1 text-xs font-black">${t(s.code)}</span>
        <div class="min-w-0 flex-1">
          <h2 class="text-sm font-bold text-[var(--ink)]">${t(s.title)}</h2>
          <p class="text-xs text-[var(--muted)] mt-1">${t(s.description)}</p>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 items-center text-[0.6875rem]">
        ${s.group?`<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${t(s.group)}</span>`:""}
        ${s.ownership?`<span class="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--muted)]">${s.ownership==="council_led"?"สภานำ":"โรงเรียนนำ"}</span>`:""}
      </div>
      <details class="border-t border-[var(--line-soft)] pt-2">
        <summary class="cursor-pointer text-xs font-bold text-[var(--primary)]">ดูแนวทางการใช้งาน</summary>
        <p class="text-xs text-[var(--ink-2)] leading-6 mt-2">เอกสารนี้เป็นส่วนหนึ่งของชุดเอกสารสภานักเรียน สามารถใช้เป็นรายการอ้างอิงในการจัดทำงานจริง และควรบันทึกข้อมูลตามข้อเท็จจริงของกิจกรรมหรือกระบวนการนั้น</p>
      </details>
      <div class="flex flex-wrap gap-2 pt-1">
        <button type="button" class="btn-print-council-resource text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-resource-code="${t(s.code)}" data-resource-title="${t(s.title)}" data-resource-description="${t(s.description)}">🖨️ พิมพ์รายการ</button>
        <a href="${t(qr(a.sourceTab))}" target="_blank" rel="noopener" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]">🔗 เปิดต้นฉบับ</a>
        ${r&&e==="forms"&&["FORM_09_ACTIVITY_APPROVAL","FORM_09_1_PROJECT_PROPOSAL"].includes(s.key)?'<button type="button" class="goto-view text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white" data-view="docs">เปิดงานเอกสารโครงการ →</button>':""}
      </div>
    </article>`).join("");return`<div class="space-y-4">
    <section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5">
      <p class="text-xs font-bold text-[var(--primary)]">📚 ${t(a.eyebrow)}</p>
      <h1 class="text-xl font-bold text-[var(--ink)] mt-1">${t(a.title)}</h1>
      <p class="text-sm text-[var(--muted)] mt-2 leading-6">${t(a.description)}</p>
      <div class="flex flex-wrap gap-2 mt-4">
        ${Object.entries(Vt).map(([s,n])=>`<button type="button" class="council-resource-kind-btn px-3 py-2 rounded-xl text-xs font-bold ${s===e?"bg-[var(--primary)] text-white":"border border-[var(--line)] text-[var(--muted)] hover:bg-[var(--surface-2)]"}" data-resource-kind="${s}">${t(n.eyebrow)}</button>`).join("")}
        <a href="${t(qr(a.sourceTab))}" target="_blank" rel="noopener" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">🔗 ดูเอกสารต้นฉบับ</a>
      </div>
    </section>
    <div class="flex gap-2">
      <input id="council-resource-search" type="search" placeholder="ค้นหารหัส ชื่อเอกสาร กิจกรรม หรือคำอธิบาย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="button" id="council-resource-clear" class="px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold text-[var(--ink-2)]">ล้าง</button>
    </div>
    <p id="council-resource-count" class="text-xs text-[var(--muted)]">แสดง ${a.items.length} รายการ</p>
    <div id="council-resource-list" class="grid grid-cols-1 lg:grid-cols-2 gap-3">${o}</div>
  </div>`}function co({onKindChange:e,esc:t}){document.querySelectorAll(".council-resource-kind-btn").forEach(i=>{i.addEventListener("click",()=>e(i.dataset.resourceKind))});const r=document.getElementById("council-resource-search"),a=document.getElementById("council-resource-clear"),o=[...document.querySelectorAll("[data-resource-card]")],s=document.getElementById("council-resource-count"),n=()=>{const i=String((r==null?void 0:r.value)||"").trim().toLocaleLowerCase();let u=0;o.forEach(b=>{const c=!i||b.dataset.resourceSearch.toLocaleLowerCase().includes(i);b.classList.toggle("hidden",!c),c&&(u+=1)}),s&&(s.textContent=`แสดง ${u} รายการ${i?" จากทั้งหมด "+o.length+" รายการ":""}`)};r==null||r.addEventListener("input",n),a==null||a.addEventListener("click",()=>{r&&(r.value=""),n(),r==null||r.focus()}),document.querySelectorAll(".btn-print-council-resource").forEach(i=>{i.addEventListener("click",()=>uo({code:i.dataset.resourceCode,title:i.dataset.resourceTitle,description:i.dataset.resourceDescription,esc:t}))})}function uo({code:e,title:t,description:r,esc:a}){dt(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${a(t)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:36px;line-height:1.8}h1{font-size:24px;margin:8px 0 20px}.code{color:#7b2d2d;font-weight:700}.meta{border-top:1px solid #ddd;border-bottom:1px solid #ddd;padding:12px 0;margin:16px 0}small{color:#666}</style></head><body><small>เอกสารสภานักเรียน โรงเรียนมูลนิธิอาซิซสถาน</small><p class="code">${a(e)}</p><h1>${a(t)}</h1><div class="meta">${a(r)}</div><p>รายการนี้อยู่ในชุดเอกสารอ้างอิงของสภานักเรียน โปรดเปิดต้นฉบับหรือเอกสารฉบับที่โรงเรียนอนุมัติ เพื่อกรอกข้อมูลและใช้งานตามกระบวนการที่กำหนด</p></body></html>`)}const l=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),cr=document.getElementById("council-content"),j={M:"ชาย",W:"หญิง"},ve=e=>e==="ชาย"||e==="M"?"M":e==="หญิง"||e==="W"?"W":null,O=(e,t="w-10 h-12")=>e!=null&&e.photo_url||e!=null&&e.image_url?`<img src="${l(e.photo_url||e.image_url)}" class="${t} rounded-[10px] object-cover border border-[var(--line)] shadow-[0_1px_3px_rgba(0,0,0,0.25)] bg-[var(--bg-2)] flex-shrink-0">`:`<div class="${t} rounded-[10px] bg-[var(--primary-soft)] text-[var(--primary-70)] grid place-items-center font-bold flex-shrink-0 border border-[var(--line)]">${l(((e==null?void 0:e.full_name)||"?").charAt(0))}</div>`,ur={pending:"รอดำเนินการ",interview_scheduled:"นัดสัมภาษณ์แล้ว",interviewed:"สัมภาษณ์แล้ว",candidate:"ผู้สมัครเลือกตั้ง",appointed:"ได้รับแต่งตั้ง",rejected:"ไม่ผ่าน"};let d=null;const po=new URLSearchParams(window.location.search),da=po.get("view"),mo=!!da;let ke=da||"overview";function Se(e,{preserveDetail:t=!1}={}){ke=e;const r=new URL(window.location.href);r.searchParams.set("view",e),t||(r.searchParams.delete("clause"),r.searchParams.delete("version")),window.history.replaceState(null,"",r)}let Ct=!1,F=1,N={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},he=null,oe=null;const ca=5;function Qe(){var e;return Number((e=d==null?void 0:d.cfg)==null?void 0:e.council_min_certificates)||ca}const ua="ม.3,ม.4,ม.5";function pa(){var e;return String(((e=d==null?void 0:d.cfg)==null?void 0:e.council_eligible_grade_levels)||ua).split(/[,\n]/).map(t=>t.trim()).filter(Boolean)}function Lt(e){const t=Dt(e);return!!t&&pa().includes(t)}function Zt(e){const t=pa().join(", "),r=Dt(e);return r?`ไม่สามารถสมัครสภานักเรียนได้ การรับสมัครครั้งนี้เปิดสำหรับระดับ ${t} เท่านั้น ระดับชั้นปัจจุบันของคุณ: ${r}`:"ไม่สามารถสมัครสภานักเรียนได้ ไม่พบระดับชั้นจากห้องสามัญหรือห้องศาสนา กรุณาติดต่อผู้ดูแลระบบ"}function Ke(e){return Array.from({length:e},()=>({file:null,title:"",previewUrl:null,isPdf:!1}))}let Y=Ke(ca),Ne=!1,U=null;function _t(){Ct=!1,F=1,N={positionId:"",gpaGeneral:"",gpaReligious:"",motivation:"",videoUrl:"",peerEndorserId:""},he=null,oe&&URL.revokeObjectURL(oe),oe=null,Y.forEach(e=>{e.previewUrl&&URL.revokeObjectURL(e.previewUrl)}),Y=Ke(Qe()),Ne=!1}function pr(){return d!=null&&d.student?`council_apply_draft_${d.student.id}`:null}function Z(){const e=pr();if(e)try{localStorage.setItem(e,JSON.stringify({step:F,data:N,certTitles:Y.map(t=>t.title),savedAt:Date.now()}))}catch{}}function bo(){const e=pr();if(!e)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function Tr(){const e=pr();e&&localStorage.removeItem(e)}let Xe=null,de=null,L=null,je=null,ge=null,Ze=null,fe="all",ie="M",gt="",De="",He="",We="",Ce="M",Le="all",qt="",qe="M",Te="ready",Tt="",re=null,V=null,er=null;const xe={};let Re=null,_e=!1;const tr={};let P=null,W=null;const ce={};let G=null,se=null,B=null,Nt=null,yt=!1,rr=!1,Q=null,ar=null;const Oe={},mr={},et={},br={};let jt=null,pe=null,me=null,ht=null,wt="all",$t=!1,Je="general",K=null,ue=null;const Nr=[{id:"general",label:"ทั่วไป"},{id:"positions",label:"ตำแหน่ง"},{id:"criteria",label:"เกณฑ์และข้อความ"},{id:"modules",label:"โมดูล"}],vo={candidates:"ว่าที่ประธาน / ผลเลือกตั้ง",news:"ประกาศ",interview:"ตารางสัมภาษณ์",appoint:"แต่งตั้งตรง",chairteam:"เสนอคณะทำงาน",chairtasks:"มอบหมายงาน",evaluate:"ประเมินการปฏิบัติหน้าที่",certissue:"ออกเกียรติบัตร",docs:"เอกสารโครงการ",perms:"มอบสิทธิ์ครู (ยังไม่สร้างหน้า)"};function vr(){try{return{...JSON.parse(d.cfg.council_modules||"{}")}}catch{return{}}}async function xr(){K=await vn().catch(()=>[]),_()}async function xo(){ue=await Xr().catch(()=>[]),_()}const fo={apply:{title:"📝 สมัครสภานักเรียน",subtabs:[{id:"new",label:"สมัครตำแหน่งใหม่"},{id:"mine",label:"ใบสมัครของฉัน"}]},election:{title:"🗳️ การเลือกตั้งประธานสภา",subtabs:[{id:"status",label:"สถานะการเลือกตั้ง"}]}};async function _o(){var J,X;Pa();const{data:{session:e}}=await h.auth.getSession();if(!e){window.location.replace("index.html");return}const{data:t}=await h.from("profiles").select("role, is_also_admin").eq("id",e.user.id).single(),r=t==null?void 0:t.role,a=r==="admin"||(t==null?void 0:t.is_also_admin)===!0,s={student:"student.html",teacher:"teacher.html",admin:"dashboard.html"}[r]||"index.html";document.getElementById("council-back-btn-desktop").href=s,document.getElementById("council-back-btn-mobile").href=s;const[n,i,u,b]=await Promise.all([ln(),ft(),Ue(),It()]);ba(n);let c=null,p=[],f=[];r==="student"&&(c=await Fa().catch(()=>null));const v=(n.council_test_student_codes||"").split(/[\s,]+/).map(M=>M.trim()).filter(Boolean),m=r==="student"&&!!c&&v.includes(c.student_code);if(n.council_visible_to_all==="false"&&!a&&!m){fr(!1),cr.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-20 text-center text-[var(--muted-2)]">
        <p class="text-4xl mb-3">🔒</p>
        <p class="font-medium text-[var(--ink-2)]">ระบบสภานักเรียนปิดใช้งานชั่วคราว</p>
        <p class="text-xs mt-1">ติดต่อผู้ดูแลระบบ</p>
      </div>`;return}r==="student"&&c&&([p,f]=await Promise.all([Qr(c.id).catch(()=>[]),yn(c.id).catch(()=>[])]));let x=null,w=[],I=[],T=[];r==="teacher"&&(x=await Ya(e.user.id).catch(()=>null),x&&(w=(await za(x.id).catch(()=>[])).filter(z=>z.category==="สามัญ").map(z=>z.main_room),[I,T]=await Promise.all([Kr(w).catch(()=>[]),Xr().catch(()=>[])])));const C=r==="student"&&f.some(M=>{var z;return(z=M.council_positions)==null?void 0:z.is_elected}),y=C||f.some(M=>M.can_create_activities),$=((X=(J=f.find(M=>{var z;return(z=M.council_positions)==null?void 0:z.is_elected}))==null?void 0:J.council_positions)==null?void 0:X.gender)??null,E=r==="teacher"&&!!x&&(x.position==="council_advisor"||(x.positions??[]).includes("council_advisor")),A=r==="teacher"&&!!x&&(x.position==="student_affairs_head"||(x.positions??[]).includes("student_affairs_head")),q=r==="teacher"&&!!x&&(x.position==="school_director"||(x.positions??[]).includes("school_director")),D=r==="teacher"&&!!x&&(x.position==="executive"||(x.positions??[]).includes("executive"));d={role:r,isAdmin:a,isChair:C,isCouncilAdvisor:E,isStudentAffairsHead:A,isSchoolDirector:q,isExecutive:D,canCreateActivities:y,chairGender:$,student:c,applications:p,membership:f,positions:i,members:u,elections:b,cfg:n,teacher:x,homeroomMainRooms:w,pendingEndorsements:I,endorsementPhrases:T},P=Number(n.academicYear)||new Date().getFullYear()+543,r==="teacher"&&I.length&&!mo&&Se("endorse"),_()}async function ma(){d!=null&&d.student&&(d.applications=await Qr(d.student.id).catch(()=>d.applications))}async function go(){d!=null&&d.teacher&&(d.pendingEndorsements=await Kr(d.homeroomMainRooms).catch(()=>d.pendingEndorsements))}function fr(e){document.getElementById("council-sidebar").style.display=e?"":"none",document.getElementById("council-bottom-tabs").style.display=e?"":"none"}function ba(e){const t=e.council_name||"ระบบสภานักเรียน";if(document.title=t,document.getElementById("council-title").textContent=t,document.getElementById("council-title-mobile").textContent=t,e.council_logo_url){const r=document.getElementById("council-logo");r.src=e.council_logo_url,r.classList.remove("hidden"),document.getElementById("council-logo-fallback").classList.add("hidden")}}const Gt={main:{label:"หน้าหลัก",icon:"🏠"},council:{label:"งานสภา",icon:"👥"},resources:{label:"เอกสาร/กิจกรรม",icon:"📚"},election:{label:"เลือกตั้ง",icon:"🗳️"},teacherWork:{label:"งานครู",icon:"📋"},system:{label:"ระบบ",icon:"⚙️"}};function yo(){const e=[{id:"overview",icon:"🏠",label:"หน้าหลัก",group:"main"}];e.push({id:"news",icon:"📣",label:"ประกาศ",group:"council"}),e.push({id:"roster",icon:"🏛️",label:"สภาของเรา",group:"council"}),e.push({id:"activities",icon:"📅",label:"กิจกรรม/การเข้าร่วม",group:"council"}),(d.isChair||d.isAdmin||d.isCouncilAdvisor)&&e.push({id:"chairteam",icon:"👔",label:"เสนอคณะทำงาน",group:"council"}),d.isChair&&e.push({id:"assignments",icon:"📌",label:"มอบหมายงาน",group:"council"}),d.membership.length&&e.push({id:"myduty",icon:"🎫",label:"หน้าที่/งานของฉัน",group:"council"}),d.membership.length&&e.push({id:"mysummary",icon:"📊",label:"สรุปของฉัน",group:"council"}),d.membership.length&&d.cfg.council_require_peer_endorsement==="true"&&e.push({id:"peerEndorse",icon:"✋",label:"รับรองผู้สมัคร (สภา)",group:"council"}),e.push({id:"regulation",icon:"📚",label:"ระเบียบ/ประกาศ",group:"resources"}),e.push({id:"forms",icon:"🗂️",label:"เอกสารและแบบฟอร์ม",group:"resources"}),e.push({id:"yla",icon:"🌱",label:"กิจกรรม YLA",group:"resources"}),e.push({id:"activityDocs",icon:"🧩",label:"โครงการและกิจกรรม",group:"resources"}),e.push({id:"candidates",icon:"🗳️",label:"ว่าที่ประธาน",group:"election"}),e.push({id:"result",icon:"📊",label:"ผลเลือกตั้ง",group:"election"}),d.role==="teacher"&&d.pendingEndorsements.length&&e.push({id:"endorse",icon:"✋",label:"รับรองผู้สมัคร",badge:d.pendingEndorsements.length,group:"teacherWork"});const t=d.isAdmin||d.isCouncilAdvisor;t&&e.push({id:"apps",icon:"📋",label:"ใบสมัคร",group:"teacherWork"}),t&&e.push({id:"interview",icon:"🗓️",label:"สัมภาษณ์",group:"teacherWork"}),t&&e.push({id:"appoint",icon:"✅",label:"แต่งตั้งสมาชิก",group:"teacherWork"}),(t||d.membership.length)&&e.push({id:"eval",icon:"🎖️",label:"ประเมิน/เกียรติบัตร",group:"teacherWork"}),(t||d.isChair||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"docs",icon:"📄",label:"งานเอกสารโครงการ",group:"teacherWork"}),(d.isAdmin||d.isExecutive)&&e.push({id:"dashboard",icon:"📊",label:"ภาพรวม",group:"system"}),t&&e.push({id:"settings",icon:"⚙️",label:"ตั้งค่า",group:"system"}),d.isAdmin&&e.push({id:"perms",icon:"🔑",label:"มอบสิทธิ์",group:"system"}),(d.isCouncilAdvisor||d.isStudentAffairsHead||d.isSchoolDirector)&&e.push({id:"myCouncilProfile",icon:"✍️",label:"โปรไฟล์ของฉัน",group:"system"});const r=vr(),a=new Set;return r.candidates===!1&&(a.add("candidates"),a.add("result")),r.news===!1&&a.add("news"),r.evaluate===!1&&a.add("eval"),r.docs===!1&&a.add("docs"),r.interview===!1&&a.add("interview"),r.appoint===!1&&a.add("appoint"),r.chairteam===!1&&a.add("chairteam"),r.chairtasks===!1&&a.add("assignments"),e.filter(o=>!a.has(o.id))}let we=null;function ho(e){var s;const t=Object.keys(Gt);document.getElementById("council-sidebar-nav").innerHTML=t.map(n=>{const i=e.filter(u=>u.group===n);return i.length?`
      <div class="pb-2">
        <p class="text-[0.6875rem] font-bold text-[var(--primary-45)] tracking-wide px-3 pt-3 pb-1.5">${l(Gt[n].label)}</p>
        ${i.map(u=>`
          <button type="button" class="council-nav-link w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition
            ${u.id===ke?"bg-[var(--hero-3)] text-white":"text-[var(--primary-45)] hover:bg-[var(--hero-3)] hover:text-white"}" data-view="${u.id}">
            <span>${u.icon}</span> ${l(u.label)}
            ${u.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${u.badge}</span>`:""}
          </button>`).join("")}
      </div>`:""}).join("");const r=t.map(n=>({id:n,...Gt[n],items:e.filter(i=>i.group===n)})).filter(n=>n.items.length),a=(s=r.find(n=>n.items.some(i=>i.id===ke))||r[0])==null?void 0:s.id;document.getElementById("council-bottom-tabs").innerHTML=`<div class="flex overflow-x-auto">${r.map(n=>{const i=n.id===a,u=n.items.reduce((b,c)=>b+(c.badge||0),0);return`
    <button type="button" class="council-nav-group-btn relative flex-1 min-w-[68px] shrink-0 flex flex-col items-center justify-center py-2.5 gap-0.5 min-h-[44px] ${i?"text-[var(--primary)]":"text-[var(--muted)]"}" data-group="${n.id}">
      <span class="text-xl">${n.icon}</span>
      <span class="text-[0.625rem] font-medium">${l(n.label)}</span>
      ${u?`<span class="absolute top-1 right-1/4 bg-[var(--gold)] text-white text-[0.5625rem] rounded-full w-4 h-4 flex items-center justify-center font-bold">${u}</span>`:""}
    </button>`}).join("")}</div>`,document.querySelectorAll(".council-nav-link").forEach(n=>{n.addEventListener("click",()=>{Se(n.dataset.view),_()})}),document.querySelectorAll(".council-nav-group-btn").forEach(n=>{n.addEventListener("click",()=>{const i=r.find(u=>u.id===n.dataset.group);i.items.length===1?(Se(i.items[0].id),we=null,_()):(we=we===i.id?null:i.id,jr(e))})});const o=e.find(n=>n.id===ke);document.getElementById("council-view-title").textContent=(o==null?void 0:o.label)??"หน้าหลัก",jr(e)}function jr(e){const t=document.getElementById("council-mobile-sheet");if(!t)return;if(!we){t.innerHTML="";return}const r=e.filter(a=>a.group===we);t.innerHTML=`
    <div class="fixed inset-0 z-[70] bg-black/20" id="mobile-sheet-backdrop">
      <div class="absolute left-1/2 -translate-x-1/2" style="bottom: calc(78px + env(safe-area-inset-bottom));">
        <div class="flex flex-col-reverse gap-2 items-stretch" style="width: min(74vw, 260px);">
          ${r.map((a,o)=>`
            <button type="button" class="mobile-sheet-item text-left border ${a.id===ke?"border-[var(--primary-soft-line)] bg-[var(--glass-on)] text-[var(--primary)]":"border-[var(--glass-line)] bg-[var(--glass)] text-[var(--ink)]"}
              backdrop-blur-md px-4 py-3 rounded-full text-sm font-bold flex items-center gap-3 min-h-[44px] shadow-[0_8px_22px_rgba(11,20,16,0.18)]" data-view="${a.id}">
              <span class="text-base">${a.icon}</span><span>${l(a.label)}</span>
              ${a.badge?`<span class="ml-auto bg-[var(--gold)] text-white text-[0.625rem] rounded-full w-5 h-5 flex items-center justify-center font-bold">${a.badge}</span>`:""}
            </button>`).join("")}
        </div>
      </div>
    </div>`,document.getElementById("mobile-sheet-backdrop").addEventListener("click",a=>{a.target.id==="mobile-sheet-backdrop"&&(we=null,_())}),document.querySelectorAll(".mobile-sheet-item").forEach(a=>{a.addEventListener("click",()=>{Se(a.dataset.view),we=null,_()})})}function wo(){const{applications:e,membership:t}=d;return!e.length&&!t.length?"":`
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-2xl p-5 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      <p class="text-sm font-bold mb-3">📋 สถานะของฉันในสภานักเรียน</p>
      <div class="space-y-2">
        ${t.map(r=>{var a,o;return`
          <div class="bg-white/10 rounded-xl p-3">
            <p class="text-xs text-[var(--primary-soft-line)]">ตำแหน่งปัจจุบัน</p>
            <p class="font-bold">${l(((a=r.council_positions)==null?void 0:a.position_name)??"—")} <span class="text-xs font-normal text-[var(--primary-soft-line)]">(สภา${l(j[(o=r.council_positions)==null?void 0:o.gender]??"")})</span></p>
          </div>`}).join("")}
        ${e.map(r=>{var a;return`
          <div class="bg-white/10 rounded-xl p-3 flex items-center justify-between gap-2">
            <div>
              <p class="text-xs text-[var(--primary-soft-line)]">ใบสมัคร — ${l(((a=r.council_positions)==null?void 0:a.position_name)??"—")}</p>
              <p class="text-[0.6875rem] text-[var(--primary-45)]">${new Date(r.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
            </div>
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20">${l(ur[r.status]??r.status)}</span>
          </div>`}).join("")}
      </div>
    </div>`}function st(e,t,r,a){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm font-bold text-[var(--ink)]">${e}</p>
        ${r?`<button type="button" class="goto-view text-xs font-bold text-[var(--primary)] hover:underline" data-view="${r}">${l(a)} →</button>`:""}
      </div>
      ${t}
    </div>`}function $o(){return d.isChair?["ยินดีต้อนรับประธานสภานักเรียน","ดูภาพรวมงานสภา เสนอทีมงาน มอบหมายงาน และประกาศข่าวสารได้จากที่นี่"]:d.membership.length?["ยินดีต้อนรับสมาชิกสภานักเรียน","ติดตามหน้าที่ ตารางงาน และผลการประเมินของคุณ"]:d.isCouncilAdvisor?["ครูที่ปรึกษาสภานักเรียน","ดูแลใบสมัคร ตารางสัมภาษณ์ การประเมิน และเอกสารต่างๆ ของสภา"]:d.isAdmin?["จัดการระบบสภานักเรียน","ภาพรวมทั้งระบบ ตั้งค่าตำแหน่ง เกณฑ์คุณสมบัติ และมอบสิทธิ์ผู้ดูแล"]:d.role==="teacher"&&d.pendingEndorsements.length?["รับรองผู้สมัครสภานักเรียน","ตรวจสอบและรับรองใบสมัครของนักเรียนในความดูแลของคุณ"]:["ระบบสภานักเรียน","ติดตามข่าวสาร กิจกรรม ผู้สมัคร และผลการเลือกตั้งของสภานักเรียน"]}function ko(){const e=d.cfg.council_featured_phase;if(e)return e;const t=new Date,r=d.cfg.council_apply_opens_at?new Date(d.cfg.council_apply_opens_at):null,a=d.cfg.council_apply_closes_at?new Date(d.cfg.council_apply_closes_at):null;return r&&a&&t>=r&&t<=a?"apply":d.elections.some(s=>s.opens_at&&s.closes_at&&t>=new Date(s.opens_at)&&t<=new Date(s.closes_at))?"election":"none"}function Eo(){return d.isChair?"👑 ประธานสภานักเรียน":d.membership.length?"🎫 สมาชิกสภานักเรียน":d.isCouncilAdvisor?"🏫 ครูที่ปรึกษาสภานักเรียน":d.role==="admin"?"🛡️ ผู้ดูแลระบบ (แอดมิน)":d.isAdmin?"🛡️ ผู้ดูแลระบบ (ได้รับสิทธิ์แอดมินเพิ่มเติมจากระบบหลัก ปพ.5 ออนไลน์)":d.role==="teacher"?"👨‍🏫 ครู (ยังไม่ได้รับมอบหมายเป็นครูที่ปรึกษาสภานักเรียน)":d.role==="student"?"🎓 นักเรียน":"ผู้เยี่ยมชม"}function So(){const e=d.cfg,t=e.council_term_start_semester&&e.council_term_start_year?`ภาคเรียนที่ ${l(e.council_term_start_semester)}/${l(e.council_term_start_year)} – ภาคเรียนที่ ${l(e.council_term_end_semester||e.council_term_start_semester)}/${l(e.council_term_end_year||e.council_term_start_year)}`:null,r=e.council_visible_to_all!=="false",[a,o]=$o(),s=d.isAdmin||d.isCouncilAdvisor?`
    <div class="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-xl mb-3
      ${r?"bg-[var(--ok-soft)] text-[#106143] border border-[var(--ok-soft-line)]":"bg-[var(--gold-soft)] text-[var(--gold-ink)] border border-[var(--gold-soft-line)]"}">
      <span>${r?"✅":"🔒"}</span>
      <span>${r?"ระบบเปิดให้นักเรียนทุกคนเห็นเมนูแล้ว":"ระบบยังไม่เปิดให้ทุกคนเห็น — เห็นเฉพาะแอดมิน/ผู้ทดสอบเท่านั้น"}</span>
    </div>`:"";return`
    <p class="text-[0.6875rem] text-[var(--muted-2)] mb-2">กำลังใช้งานในฐานะ: <span class="font-bold text-[var(--ink-2)]">${l(Eo())}</span></p>
    ${s}
    <div class="bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl p-5 sm:p-6 text-white shadow-[0_4px_12px_rgba(23,32,42,0.07)]">
      ${t?`<span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20 mb-3">🗓️ ห้วงปฏิบัติหน้าที่ · ${t}</span>`:""}
      <p class="text-lg sm:text-xl font-extrabold leading-snug [text-wrap:pretty]">${l(a)}</p>
      <p class="text-sm text-[var(--primary-soft-line)] mt-1.5 [text-wrap:pretty]">${l(o)}</p>
      ${d.isAdmin||d.isCouncilAdvisor||d.isChair?`
      <div class="flex flex-wrap gap-2 mt-4">
        ${d.isAdmin||d.isCouncilAdvisor?'<button type="button" class="goto-view px-4 py-2 rounded-[10px] bg-[var(--hero-btn)] text-[var(--hero-btn-fg)] text-sm font-bold hover:opacity-90" data-view="settings">⚙️ ตั้งค่าระบบ</button>':""}
        <a href="council-election.html" target="_blank" class="px-4 py-2 rounded-[10px] bg-white/10 border border-white/25 text-white text-sm font-bold hover:bg-white/20">🗳️ หน้าลงคะแนน</a>
      </div>`:""}
    </div>`}function Ao(){if(W===null)return Aa(),st("📅 กิจกรรมประจำปี",'<p class="text-sm text-[var(--muted-2)] text-center py-8">⏳ กำลังโหลด...</p>');const e={};W.forEach(o=>{e[o.status]=(e[o.status]??0)+1});const t=`
    <div class="grid grid-cols-4 gap-2 mb-3">
      ${Sa.map(([o,s,n,i])=>`
        <div class="rounded-[10px] border ${n} p-2 text-center">
          <p class="text-lg font-bold ${i}">${e[o]??0}</p>
          <p class="text-[0.625rem] text-[var(--muted)]">${s}</p>
        </div>`).join("")}
    </div>`,r=[...W].sort((o,s)=>new Date(o.activity_date||0)-new Date(s.activity_date||0)).slice(0,5),a=r.length?`
    <div class="space-y-0.5">
      ${r.map(o=>{const[s,n,i]=Ea[o.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]"];return`
        <div class="flex items-center justify-between gap-2 py-1.5 border-b border-[var(--line-soft)] last:border-0">
          <div class="min-w-0">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(o.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${o.activity_date?new Date(o.activity_date).toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}):"—"} ${o.owner_text?"· "+l(o.owner_text):""}</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-1 rounded-full ${i} ${n}">${s}</span>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีกิจกรรม</p>';return st("📅 กิจกรรมประจำปี",t+a,"activities","ดูทั้งหมด")}function Io(){const e=["M","W"].map(r=>d.members.find(a=>{var o,s;return a.status==="active"&&((o=a.council_positions)==null?void 0:o.gender)===r&&((s=a.council_positions)==null?void 0:s.is_elected)})),t=e.some(Boolean)?`
    <div class="space-y-3">
      ${e.map((r,a)=>{var n,i,u;const o=a===0?"M":"W";if(!r)return`<div class="rounded-xl border border-dashed border-[var(--line)] p-3 text-center text-xs text-[var(--muted-2)]">ยังไม่มีประธานสภา${j[o]}</div>`;const s=o==="W";return`
        <div class="flex items-center gap-3 rounded-xl border p-3 ${s?"bg-[var(--pink-soft)] border-[var(--pink-soft-line)]":"bg-[var(--primary-soft)] border-[var(--primary-soft-line)]"}">
          ${O(r.students,"w-12 h-16")}
          <div class="min-w-0">
            <p class="text-[0.6875rem] font-bold ${s?"text-[var(--pink)]":"text-[var(--primary)]"}">${l(((n=r.council_positions)==null?void 0:n.position_name)??"ประธานสภานักเรียนฝ่าย"+j[o])}</p>
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((i=r.students)==null?void 0:i.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((u=r.students)==null?void 0:u.main_room)??"")}</p>
          </div>
        </div>`}).join("")}
    </div>`:'<p class="text-sm text-[var(--muted-2)] text-center py-6">ยังไม่มีสภานักเรียนชุดปัจจุบัน</p>';return st("🏛️ สภานักเรียนชุดปัจจุบัน",t,"roster","ดูโครงสร้าง")}function Co(){if(!d.isAdmin&&!d.isExecutive)return"";if(L===null)return ct(),st("📋 การสมัครสภานักเรียน",'<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p>');const e=L.length,t=L.filter(n=>n.endorsed_at).length,r=L.filter(n=>n.peer_endorsed_at||Ye(n)).length,a=L.filter(n=>n.status==="candidate").length,o=(n,i,u)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${u}">${l(n)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(i)}</p>
    </div>`,s=`
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      ${o(e,"สมัครแล้วทั้งหมด","var(--ink)")}
      ${o(t,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
      ${Ae()?o(r,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):o("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
      ${o(a,"ว่าที่สภานักเรียน","var(--primary)")}
    </div>`;return st("📋 การสมัครสภานักเรียน",s,"dashboard","ดูรายละเอียด")}function va(){const e=So(),t=wo(),r=(p,f,v,m)=>`
    <button type="button" class="flow-entry-btn bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-center hover:border-[var(--primary-70)] hover:shadow-[0_4px_12px_rgba(23,32,42,0.07)] transition" data-flow="${p}">
      <p class="text-2xl mb-1">${f}</p>
      <p class="text-sm font-bold text-[var(--primary-dark)]">${l(v)}</p>
      ${m?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(m)}</p>`:""}
    </button>`,a=(p,f,v,m)=>`
    <button type="button" class="flow-entry-btn w-full bg-gradient-to-br from-[var(--primary)] to-[var(--hero-3)] rounded-2xl shadow-[0_4px_14px_rgba(23,32,42,0.15)] p-4 text-left text-white hover:opacity-95 transition flex items-center gap-3" data-flow="${p}">
      <p class="text-3xl flex-shrink-0">${f}</p>
      <div class="min-w-0 flex-1">
        <span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-white/20 mb-1">🔥 ช่วงนี้</span>
        <p class="text-base font-extrabold [text-wrap:pretty]">${l(v)}</p>
        ${m?`<p class="text-xs text-white/85 mt-0.5 [text-wrap:pretty]">${l(m)}</p>`:""}
      </div>
      <span class="text-white/70 flex-shrink-0">→</span>
    </button>`,o=d.elections.length>0,s=o||d.isAdmin,n=d.role==="student"&&Lt(d.student),i=o?"การเลือกตั้ง":"ตั้งค่าการเลือกตั้ง",u=o?"":"ยังไม่เปิดใช้งาน — แตะเพื่อตั้งค่า",b=n&&s?ko():"none";let c="";if(n&&s&&b!=="none"){const p=b==="apply"?a("apply","📝","สมัครสภานักเรียน","เปิดรับสมัครสภานักเรียนวาระใหม่"):r("apply","📝","สมัครสภานักเรียน"),f=b==="election"?a("election","🗳️",i,u||"เปิดใช้งานอยู่ ณ ขณะนี้"):r("election","🗳️",i,u);c=`<div class="space-y-3">${b==="apply"?p+f:f+p}</div>`}else(n||s)&&(c=`
    <div class="grid ${n&&s?"grid-cols-2":"grid-cols-1"} gap-3">
      ${n?r("apply","📝","สมัครสภานักเรียน"):""}
      ${s?r("election","🗳️",i,u):""}
    </div>`);return`<div class="space-y-4">
    ${e}
    ${t}
    ${Co()}
    ${c}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      ${Ao()}
      ${Io()}
    </div>
  </div>`}function Lo(){if(d.role!=="student")return"";if(!d.student)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ยังไม่ได้เชื่อมบัญชีกับข้อมูลนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;const e=ve(d.student.gender),t=d.positions.filter(s=>s.gender===e),r=new Set(d.applications.filter(s=>s.status!=="rejected").map(s=>s.position_id)),a=t.filter(s=>!r.has(s.id));if(!e)return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ไม่พบข้อมูลเพศของนักเรียน ติดต่อผู้ดูแลระบบเพื่อสมัครสภานักเรียน
    </div>`;if(!Lt(d.student))return`<div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-2xl p-4 text-center text-[var(--gold-ink)] text-sm">
      ⚠️ ${l(Zt(d.student))}
      <p class="mt-1 text-xs">${l(d.student.main_room||d.student.religion_room||"ไม่พบข้อมูลห้อง")}</p>
    </div>`;if(!Ct)return`
      <button id="btn-open-apply" type="button"
        class="w-full bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4 text-left hover:border-[var(--primary-70)] transition flex items-center justify-between gap-3 ${a.length?"":"opacity-50 pointer-events-none"}">
        <div>
          <p class="text-sm font-bold text-[var(--primary-dark)]">📝 สมัครสภานักเรียน${j[e]}</p>
          <p class="text-xs text-[var(--muted-2)] mt-0.5">${a.length?`เปิดรับ ${a.length} ตำแหน่ง`:"ไม่มีตำแหน่งเปิดรับ (สมัครครบแล้ว หรือยังไม่เปิดรับ)"}</p>
        </div>
        <span class="text-[var(--primary-70)]">→</span>
      </button>`;const o=U?qo():F===1?No(a):F===2?jo():F===3?Do():F===4?Ro():F===5?Oo():Mo(e);return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--primary-45)] p-4">
      <div class="flex items-center justify-between mb-1">
        <p class="text-sm font-bold text-[var(--primary-dark)]">📝 ใบสมัครสภานักเรียน${j[e]}</p>
        <button type="button" id="btn-cancel-apply" class="text-xs text-[var(--muted)] hover:text-[var(--bad)]">ยกเลิก ✕</button>
      </div>
      ${U?"":To()}
      ${o}
    </div>
    ${Ne?Bo():""}`}function qo(){const e=nr()[U.step-1]??"",t=U.savedAt?new Date(U.savedAt).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"";return`
    <div class="text-center py-4 space-y-3">
      <p class="text-3xl">📝</p>
      <p class="text-sm font-bold text-[var(--ink)]">พบข้อมูลที่กรอกค้างไว้</p>
      <p class="text-xs text-[var(--muted-2)]">กรอกถึงขั้นตอนที่ ${U.step}/${nr().length} · ${l(e)}${t?` · บันทึกล่าสุด ${t}`:""}</p>
      <p class="text-[0.6875rem] text-[var(--gold-ink)] bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-2.5 text-left">⚠️ รูปถ่าย/ไฟล์เกียรติบัตรที่เคยแนบไว้ต้องแนบใหม่อีกครั้ง (เบราว์เซอร์เก็บไฟล์ข้ามการปิดหน้าไม่ได้) ส่วนข้อความอื่นๆ กู้คืนให้ครบ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-draft-discard" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">เริ่มใหม่</button>
        <button type="button" id="btn-apply-draft-resume" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">กู้คืนข้อมูล</button>
      </div>
    </div>`}const Dr=["เลือกตำแหน่ง","เกรดเฉลี่ย & แรงจูงใจ","รูปถ่าย","วิดีโอแนะนำตัว","เกียรติบัตร/รางวัล"];function _r(){return d.cfg.council_require_peer_endorsement==="true"}function nr(){return _r()?[...Dr,"เลือกพี่สภารับรอง"]:Dr}function To(){const e=nr();return`
    <div class="flex items-center gap-1.5 mb-3">
      ${e.map((t,r)=>`<div class="flex-1 h-1.5 rounded-full ${r+1<=F?"bg-[var(--primary)]":"bg-[var(--line-soft)]"}"></div>`).join("")}
    </div>
    <p class="text-xs font-bold text-[var(--muted)] mb-3">ขั้นตอนที่ ${F}/${e.length} · ${e[F-1]}</p>`}function No(e){return`
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
    </form>`}function jo(){const e=d.cfg.council_min_gpa||"2.50",t=d.cfg.council_min_gpa_religious||"2.50";return`
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
    </form>`}function Do(){return`
    <div class="space-y-3">
      <label class="block text-xs font-semibold text-[var(--muted)] mb-1.5">รูปถ่าย <span class="text-[var(--bad)]">*</span></label>
      ${oe?`<img src="${oe}" class="w-24 h-32 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)]" />`:""}
      <input id="apply-photo" type="file" accept="image/*" class="w-full text-xs" />
      <p class="text-[0.6875rem] text-[var(--muted-2)]">ใช้รูปหน้าตรง ชัดเจน — ระบบจะย่อขนาดให้อัตโนมัติ</p>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step3-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">ถัดไป →</button>
      </div>
    </div>`}function Ro(){const e=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),t=d.cfg.council_video_max_minutes||"3";return`
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
    </form>`}function Oo(){const e=Y.filter(a=>a.file&&a.title.trim()).length,t=Qe(),r=(a,o)=>`
    <div class="rounded-xl border border-[var(--line)] p-3 space-y-2" data-cert-idx="${o}">
      <div class="flex items-center justify-between">
        <p class="text-xs font-bold text-[var(--muted)]">รายการที่ ${o+1}</p>
        ${Y.length>1?`<button type="button" class="btn-remove-cert text-xs text-[var(--bad)]" data-idx="${o}">🗑️ ลบ</button>`:""}
      </div>
      <input type="text" class="cert-title-input w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"
        placeholder="ชื่อรางวัล/กิจกรรม เช่น รางวัลชนะเลิศการแข่งขันโต้วาทีระดับจังหวัด" data-idx="${o}" value="${l(a.title)}" />
      <div class="flex items-center gap-2">
        ${a.file?a.isPdf?'<span class="w-10 h-10 rounded-lg bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-lg flex-shrink-0">📄</span>':`<img src="${a.previewUrl}" class="w-10 h-10 rounded-lg object-cover border border-[var(--line)] flex-shrink-0" />`:""}
        <input type="file" accept="image/*,.pdf,application/pdf" class="cert-file-input text-xs flex-1 min-w-0" data-idx="${o}" />
      </div>
    </div>`;return`
    <div class="space-y-3">
      <div>
        <label class="block text-xs font-semibold text-[var(--muted)] mb-1">เกียรติบัตร/รางวัลจากการแข่งขันหรือกิจกรรมนอกโรงเรียน <span class="text-[var(--bad)]">*</span></label>
        <p class="text-[0.6875rem] ${e>=t?"text-[var(--ok)]":"text-[var(--muted-2)]"}">แนบได้ทั้งรูปภาพและไฟล์ PDF — ต้องมีอย่างน้อย ${t} รายการ (ตอนนี้ครบ ${e}/${t})</p>
      </div>
      <div class="space-y-2.5">${Y.map(r).join("")}</div>
      <button type="button" id="btn-add-cert" class="w-full py-2 rounded-xl border border-dashed border-[var(--line)] text-xs font-bold text-[var(--muted)] hover:bg-[var(--surface-2)]">＋ เพิ่มรายการ</button>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step5-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">${_r()?"ถัดไป →":"ตรวจสอบและยืนยัน →"}</button>
      </div>
    </div>`}function Mo(e){const t=(d.members||[]).filter(a=>{var o;return((o=a.council_positions)==null?void 0:o.gender)===e&&a.student_id!==d.student.id}).sort((a,o)=>{var s,n;return(((s=a.council_positions)==null?void 0:s.sort_order)??0)-(((n=o.council_positions)==null?void 0:n.sort_order)??0)});if(!t.length)return`
      <div class="space-y-3">
        <div class="bg-[var(--gold-soft)] border border-[var(--gold-soft-line)] rounded-xl p-3 text-xs text-[var(--gold-ink)]">
          ⚠️ ตอนนี้ยังไม่มีสมาชิกสภานักเรียน${j[e]}ในระบบให้เลือกเป็นผู้รับรอง กรุณาติดต่อครูที่ปรึกษาสภาหรือผู้ดูแลระบบ
        </div>
        <div class="flex gap-2 pt-1">
          <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        </div>
      </div>`;const r=a=>{var o,s,n;return`
    <button type="button" class="btn-pick-peer-endorser w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(N.peerEndorserId)===String(a.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${a.id}">
      ${O(a.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((o=a.students)==null?void 0:o.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${l(((s=a.council_positions)==null?void 0:s.position_name)??"—")} · ${l(((n=a.students)==null?void 0:n.main_room)??"—")}</p>
      </div>
      ${String(N.peerEndorserId)===String(a.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`};return`
    <div class="space-y-3">
      <p class="text-xs text-[var(--muted-2)]">เลือกสมาชิกสภานักเรียน${j[e]}ที่ต้องการให้เป็นผู้รับรองใบสมัครของคุณ — ใบสมัครจะรอเฉพาะคนที่เลือกเท่านั้น</p>
      <div class="space-y-2 max-h-96 overflow-y-auto">${t.map(r).join("")}</div>
      <div class="flex gap-2 pt-1">
        <button type="button" id="btn-apply-back" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">← ย้อนกลับ</button>
        <button type="button" id="btn-apply-step6-next" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" ${N.peerEndorserId?"":"disabled"}>ตรวจสอบและยืนยัน →</button>
      </div>
    </div>`}function Bo(){var a;const e=d.positions.find(o=>o.id===Number(N.positionId)),t=d.student,r=N.peerEndorserId?(d.members||[]).find(o=>String(o.id)===String(N.peerEndorserId)):null;return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="apply-confirm-backdrop">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
        <p class="text-base font-bold text-[var(--ink)] mb-3">📋 ตรวจสอบก่อนส่งใบสมัคร</p>
        <div class="space-y-2.5 text-sm">
          <div class="flex items-center gap-3 pb-2.5 border-b border-[var(--line-soft)]">
            ${oe?`<img src="${oe}" class="w-12 h-16 rounded-[10px] object-cover border-2 border-white shadow-[0_3px_9px_rgba(23,32,42,.15),0_0_0_1px_var(--line)] flex-shrink-0" />`:""}
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
          <div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">เกียรติบัตร/รางวัล</span><span class="font-bold text-[var(--ok)]">✅ ${Y.filter(o=>o.file&&o.title.trim()).length} รายการ</span></div>
          ${r?`<div class="flex justify-between gap-2"><span class="text-[var(--muted)] flex-shrink-0">พี่สภาที่ขอให้รับรอง</span><span class="font-bold text-[var(--ink)] text-right">${l(((a=r.students)==null?void 0:a.full_name)??"—")}</span></div>`:""}
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
    </div>`}function Po(){return d.student?!d.applications.length&&!d.membership.length?'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่เคยสมัครสภานักเรียน</p>':`
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
            <span class="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--bg-2)] text-[var(--ink-2)]">${l(ur[e.status]??e.status)}</span>
          </div>
          <button type="button" class="btn-view-my-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">📄 ดูใบสมัคร</button>
        </div>`}).join("")}
    </div>
    ${ri()}`:""}function gr(e){return d.elections.find(t=>t.gender===e&&t.academic_year===P)||null}async function xa(e,t){xe[e]=await ra(t).catch(()=>[]),_()}async function Fo(e,t){const[r,a]=await Promise.all([Mn(t).catch(()=>({})),Jt(e).catch(()=>0)]);tr[e]={tally:r,eligible:a},_()}function fa(){return`<div class="space-y-4">${["M","W"].map(Yo).join("")}</div>`}function Yo(e){var v;const t=gr(e),r=d.student?ve(d.student.gender):null,a=d.role==="student"&&r===e;if(!t)return`
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
        <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🗳️ สภา${j[e]}</p>
        <p class="text-xs text-[var(--muted-2)]">ยังไม่เปิดการเลือกตั้ง</p>
        ${d.isAdmin||d.isCouncilAdvisor?`<button type="button" class="btn-create-election mt-2 px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-gender="${e}">เปิดใช้งานการเลือกตั้ง</button>`:""}
      </div>`;const o=new Date,s=t.opens_at?new Date(t.opens_at):null,n=t.closes_at?new Date(t.closes_at):null,i=!!(s&&s<=o&&(!n||n>o)),u=!!(n&&n<=o),b=!!t.results_published_at,c=b?{label:"✅ ประกาศผลแล้ว",cls:"bg-[var(--ok-soft-line)] text-[#106143]"}:u?{label:"🔒 ปิดโหวตแล้ว รอประกาศผล",cls:"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}:i?{label:"🗳️ กำลังเปิดโหวต",cls:"bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"}:{label:"⏳ ยังไม่เปิดโหวต",cls:"bg-[var(--bg-2)] text-[var(--muted)]"};let p="";if(b){xe[e]===void 0&&xa(e,t.id),tr[e]||Fo(e,t.id);const m=d.members.find(C=>{var y,$;return((y=C.council_positions)==null?void 0:y.gender)===e&&(($=C.council_positions)==null?void 0:$.is_elected)}),x=m?`
      <div class="flex items-center gap-3 bg-[var(--ok-soft)] rounded-xl p-3 mt-2">
        ${O(m.students,"w-12 h-16")}
        <div class="min-w-0">
          <p class="text-[0.6875rem] text-[var(--ok)] font-bold">ผู้ได้รับเลือกตั้ง</p>
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((v=m.students)==null?void 0:v.full_name)??"—")}</p>
        </div>
      </div>`:'<p class="text-xs text-[var(--muted-2)] mt-2">ประกาศผลแล้ว</p>',w=tr[e],I=xe[e];let T="";if(w&&(I!=null&&I.length)){const C=Object.values(w.tally).reduce((E,A)=>E+A,0),y=w.eligible?Math.round(C/w.eligible*100):0;T=`
        <div class="mt-3 space-y-2">
          ${I.slice().sort((E,A)=>(w.tally[A.id]??0)-(w.tally[E.id]??0)).map(E=>{var D;const A=w.tally[E.id]??0,q=C?Math.round(A/C*100):0;return`
              <div class="text-xs">
                <div class="flex justify-between mb-0.5"><span class="text-[var(--ink-2)] truncate">${l(((D=E.students)==null?void 0:D.full_name)??"—")}</span><span class="font-bold text-[var(--ink)] flex-shrink-0">${A} คะแนน</span></div>
                <div class="h-2 rounded-full bg-[var(--bg-2)] overflow-hidden"><div class="h-full bg-[var(--primary)]" style="width:${q}%"></div></div>
              </div>`}).join("")}
        </div>
        <p class="text-[0.6875rem] text-[var(--muted-2)] mt-2">👥 ผู้มีสิทธิ์ ${w.eligible} คน · ใช้สิทธิ์ ${C} คน (${y}%)</p>`}p=x+T}else i&&a?p=`
      <div class="bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] rounded-xl p-3 mt-2 text-center">
        <p class="text-xs font-bold text-[var(--primary-dark)]">🗳️ กำลังเปิดโหวต — ไปลงคะแนนที่จุดที่โรงเรียนจัดไว้</p>
        <p class="text-[0.6875rem] text-[var(--muted)] mt-1">โหวตผ่านมือถือ/บัญชีตัวเองไม่ได้ ต้องกรอกรหัสนักเรียนที่หน้าจอ ณ จุดลงคะแนนซึ่งมีครูดูแล</p>
      </div>`:u&&!b?p='<p class="text-xs text-[var(--muted-2)] mt-2">รอผู้ดูแลระบบประกาศผล</p>':!i&&!u&&(p=`<p class="text-xs text-[var(--muted-2)] mt-2">${t.opens_at?"เปิดโหวต "+new Date(t.opens_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):""}</p>`);let f="";return(d.isAdmin||d.isCouncilAdvisor)&&(f=`
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
        <p class="text-sm font-bold text-[var(--ink-2)]">🗳️ สภา${j[e]}</p>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full ${c.cls}">${c.label}</span>
      </div>
      ${p}
      ${f}
    </div>`}function zo(e,t){var s,n,i,u,b,c,p;const r=e.photo_url||((s=e.students)==null?void 0:s.image_url)||((n=e.students)==null?void 0:n.photo_url),a=(i=e.council_applications)==null?void 0:i.gpa_general,o=(u=e.council_applications)==null?void 0:u.gpa_religious;return`
    <button type="button" class="candidate-card-btn text-left rounded-2xl overflow-hidden border border-[var(--line-soft)] bg-[var(--surface)] shadow-[0_4px_12px_rgba(23,32,42,0.07)] hover:border-[var(--primary-45)] transition" data-gender="${t}" data-id="${e.id}">
      <div class="relative aspect-[4/5] bg-[var(--surface-2)]">
        ${r?`<img src="${l(r)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-4xl font-bold text-[var(--primary-70)]">${l((((b=e.students)==null?void 0:b.full_name)||"?").charAt(0))}</div>`}
        <div class="absolute top-2 left-2 min-w-[2.25rem] h-9 px-1.5 rounded-full bg-[var(--surface)]/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold text-base shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${e.ballot_number}</div>
      </div>
      <div class="p-3">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((c=e.students)==null?void 0:c.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)]">${l(((p=e.students)==null?void 0:p.main_room)??"")}</p>
        ${a!=null||o!=null?`<p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">เกรดสามัญ ${l(a??"—")} · ศาสนา ${l(o??"—")}</p>`:""}
        ${e.slogan?`<p class="text-xs text-[var(--primary-dark)] font-semibold mt-1.5 line-clamp-2">"${l(e.slogan)}"</p>`:""}
      </div>
    </button>`}function Uo(){const e=t=>{const r=gr(t),a=`<p class="text-xs font-bold text-[var(--muted-2)] mb-2">สภา${j[t]}</p>`;if(!r)return`<div>${a}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่เปิดรับผู้สมัคร</p></div>`;const o=xe[t];return o===void 0?(xa(t,r.id),`<div>${a}<p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>`):o.length?`
      <div>
        ${a}
        <div class="grid grid-cols-2 gap-3">${o.map(s=>zo(s,t)).join("")}</div>
      </div>`:`<div>${a}<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีผู้สมัคร</p></div>`};return`<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${e("M")}${e("W")}</div>${Vo()}`}function Vo(){var b,c,p,f,v,m,x,w;if(!Re)return"";const{gender:e,id:t}=Re,r=(xe[e]||[]).find(I=>I.id===t);if(!r)return"";const a=d.isAdmin||d.isCouncilAdvisor,o=Array.isArray(r.policies)?r.policies:[],s=Array.isArray(r.experience)?r.experience:[],n=r.photo_url||((b=r.students)==null?void 0:b.image_url)||((c=r.students)==null?void 0:c.photo_url),i=(p=r.council_applications)==null?void 0:p.gpa_general,u=(f=r.council_applications)==null?void 0:f.gpa_religious;return _e?`
      <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="candidate-modal-backdrop">
        <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
          <p class="text-base font-bold text-[var(--ink)] mb-3">✏️ แก้ไขโปรไฟล์ผู้สมัคร — ${l(((v=r.students)==null?void 0:v.full_name)??"")}</p>
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
              <textarea name="policies" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(o.join(`
`))}</textarea>
            </div>
            <div>
              <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน (บรรทัดละ 1 ข้อ)</label>
              <textarea name="experience" rows="4" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(s.join(`
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
          ${n?`<img src="${l(n)}" class="w-full h-full object-cover" />`:`<div class="w-full h-full grid place-items-center text-5xl font-bold text-[var(--primary-70)]">${l((((m=r.students)==null?void 0:m.full_name)||"?").charAt(0))}</div>`}
          <div class="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur text-[var(--primary-dark)] grid place-items-center font-extrabold shadow-[0_2px_8px_rgba(0,0,0,0.2)]">${r.ballot_number}</div>
          <button type="button" id="btn-candidate-modal-close" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur grid place-items-center text-[var(--ink-2)]">✕</button>
        </div>
        <div class="p-5 space-y-3">
          <div>
            <p class="text-lg font-bold text-[var(--ink)]">${l(((x=r.students)==null?void 0:x.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((w=r.students)==null?void 0:w.main_room)??"")}${i!=null||u!=null?` · เกรดสามัญ ${l(i??"—")} · ศาสนา ${l(u??"—")}`:""}</p>
          </div>
          ${r.slogan?`<p class="text-sm font-bold text-[var(--primary-dark)]">"${l(r.slogan)}"</p>`:""}
          ${r.vision?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">วิสัยทัศน์</p><p class="text-sm text-[var(--ink-2)]">${l(r.vision)}</p></div>`:""}
          ${o.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">นโยบาย</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${o.map(I=>`<li>${l(I)}</li>`).join("")}</ul></div>`:""}
          ${s.length?`<div><p class="text-xs font-bold text-[var(--muted)] mb-1">ประสบการณ์และผลงาน</p><ul class="text-sm text-[var(--ink-2)] list-disc list-inside space-y-0.5">${s.map(I=>`<li>${l(I)}</li>`).join("")}</ul></div>`:""}
          ${!r.slogan&&!r.vision&&!o.length&&!s.length?'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่ได้กรอกข้อมูลโปรไฟล์เพิ่มเติม</p>':""}
          ${a?'<button type="button" id="btn-candidate-edit" class="w-full py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mt-2">✏️ แก้ไขโปรไฟล์</button>':""}
        </div>
      </div>
    </div>`}const ot={pending:["รอนัดสัมภาษณ์","bg-[var(--bg-2)] text-[var(--muted)]"],interview_scheduled:["นัดสัมภาษณ์แล้ว รอให้คะแนน","bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"],interviewed:["ผ่านสัมภาษณ์","bg-[var(--ok-soft-line)] text-[#106143]"],candidate:["ผู้สมัครเลือกตั้ง","bg-[var(--primary-soft-line)] text-[var(--primary-dark)]"],appointed:["แต่งตั้งแล้ว","bg-[#e3f1ef] text-[var(--teal)]"],rejected:["ไม่ผ่าน","bg-[var(--bad-soft-line)] text-[#8a2f22]"]},_a={M:"bg-[#edf4f0] text-[#14563b]",W:"bg-[#fdeef4] text-[#a3134f]"},sr=[{id:"all",label:"ทั้งหมด"},{id:"awaiting_endorsement",label:"รอรับรอง"},{id:"endorsed",label:"รับรองแล้ว"},{id:"scheduled",label:"นัดแล้ว"},{id:"interviewed",label:"ผ่านสัมภาษณ์"},{id:"rejected",label:"ไม่ผ่าน"}];function Ae(){return d.cfg.council_require_peer_endorsement==="true"}function Ye(e){var r;const t=((r=e.students)==null?void 0:r.id)??e.student_id;return!!t&&d.members.some(a=>a.student_id===t)}function Me(e){return!Ae()||Ye(e)?!0:!!e.peer_endorsed_at}function ga(e){const t=[];return e.endorsed_at||t.push("รอครูที่ปรึกษาสามัญรับรอง"),Me(e)||t.push("รอสมาชิกสภาปัจจุบัน (เพศเดียวกัน) รับรอง"),t.join(" และ")}function Dt(e){var r;return((r=((e==null?void 0:e.main_room)||(e==null?void 0:e.religion_room)||"").match(/^(ม\.\d+|ปวช\.\d+)/))==null?void 0:r[1])??null}function kt(e){return e.status==="rejected"?"rejected":e.status==="pending"?e.endorsed_at&&Me(e)?"endorsed":"awaiting_endorsement":e.status==="interview_scheduled"?"scheduled":"interviewed"}async function ct(){L=await Zr(P).catch(()=>[]),_()}async function yr(){re=await Ua().catch(()=>[]),_()}const Ht={draft:"ร่าง",planned:"วางแผนแล้ว",active:"กำลังดำเนินการ",completed:"เสร็จสิ้น",cancelled:"ยกเลิก"},ya={present:"มา",late:"มาสาย",excused_leave:"ลาโดยมีเหตุผล",unexcused_absence:"ขาด"},hr={pending:"รอสรุป",pass:"ผ่าน",fail:"ไม่ผ่าน",withdrawn:"ถอนตัว"};function mt(){return!!(d!=null&&d.isAdmin||d!=null&&d.isCouncilAdvisor||d!=null&&d.isStudentAffairsHead)}function Rr(e){return e?new Date(`${e}T00:00:00`).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนด"}function or(e){return!(e!=null&&e.start_date)&&!(e!=null&&e.end_date)?"ยังไม่กำหนดช่วงเวลา":`${Rr(e.start_date)}${e.end_date?` – ${Rr(e.end_date)}`:""}`}async function Go(){var e;G=await Ms(P).catch(()=>[]),se==null&&G.length&&(se=G[0].id),se!=null&&!G.some(t=>t.id===se)&&(se=((e=G[0])==null?void 0:e.id)??null,B=null),_()}async function Ho(){rr=!0,L=await Zr(P).catch(()=>[]),rr=!1,_()}async function Wo(e){Nt=e,B=await Fs(e).catch(()=>({participants:[],attendance:[],criteria:[],scores:[],results:[],error:!0})),Nt=null,_()}function ir(e,t){return((e==null?void 0:e.attendance)??[]).filter(r=>Number(r.student_id)===Number(t)).sort((r,a)=>String(a.updated_at??"").localeCompare(String(r.updated_at??"")))[0]}function wr(e,t){return((e==null?void 0:e.results)??[]).find(r=>Number(r.student_id)===Number(t))}function Jo(e,t,r){return((e==null?void 0:e.scores)??[]).find(a=>Number(a.student_id)===Number(t)&&Number(a.criterion_id)===Number(r))}function Rt(e,t){return((e==null?void 0:e.scores)??[]).filter(r=>Number(r.student_id)===Number(t)).reduce((r,a)=>r+Number(a.score||0),0)}function ha(e){const t=new Set(((e==null?void 0:e.participants)??[]).map(a=>Number(a.student_id))),r=new Map;for(const a of L??[]){const o=a.students;o!=null&&o.id&&!t.has(Number(o.id))&&a.status!=="rejected"&&r.set(Number(o.id),{student:o,applicationId:a.id})}for(const a of d.members??[]){const o=a.students;o!=null&&o.id&&!t.has(Number(o.id))&&!r.has(Number(o.id))&&r.set(Number(o.id),{student:o,applicationId:null})}return[...r.values()].sort((a,o)=>String(a.student.full_name??"").localeCompare(String(o.student.full_name??""),"th"))}function Qo({event:e,detail:t}){var n,i,u,b;const r=ha(t),a=((u=ir(t,(i=(n=t==null?void 0:t.participants)==null?void 0:n[0])==null?void 0:i.student_id))==null?void 0:u.session_label)||"กิจกรรมหลัก",o=(t==null?void 0:t.criteria)??[],s=((t==null?void 0:t.participants)??[]).map(c=>{const p=c.students??{},f=ir(t,c.student_id),v=wr(t,c.student_id),m=Rt(t,c.student_id),x=o.map(w=>{const I=Jo(t,c.student_id,w.id);return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${l(w.name)} <span class="text-[var(--muted-2)]">(เต็ม ${w.weight})</span></span><input type="number" min="0" max="${Number(w.weight)}" step="0.5" name="criterion_${w.id}" value="${(I==null?void 0:I.score)??""}" class="yla-score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" data-weight="${Number(w.weight)}"></div>`}).join("");return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3">
      <div class="flex items-center gap-3">${O(p)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(p.full_name??"—")}</p><p class="text-xs text-[var(--muted)]">${l(p.student_code??"")} · ${l(p.main_room??"")}</p></div><span class="text-[0.6875rem] font-bold px-2.5 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">${l(c.status==="completed"?"จบกิจกรรม":"ผู้เข้าร่วม")}</span></div>
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <form class="yla-attendance-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${c.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📝 การเข้าร่วม</p><input name="session_label" value="${l((f==null?void 0:f.session_label)??a)}" placeholder="ชื่อช่วง/ฐานกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><select name="attendance_state" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(ya).map(([w,I])=>`<option value="${w}" ${(f==null?void 0:f.attendance_state)===w?"selected":""}>${I}</option>`).join("")}</select><textarea name="note" rows="2" placeholder="หมายเหตุ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((f==null?void 0:f.note)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกการเข้าร่วม</button></form>
        <form class="yla-score-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${c.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">📊 ประเมินศักยภาพ</p>${x||'<p class="text-xs text-[var(--muted)]">ยังไม่มีเกณฑ์ประเมิน</p>'}<p class="text-xs font-bold border-t border-[var(--line-soft)] pt-2">รวม <span class="yla-score-total text-[var(--primary)]">${m}</span> / ${o.reduce((w,I)=>w+Number(I.weight),0)}</p><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกคะแนน</button></form>
        <form class="yla-result-form rounded-xl border border-[var(--line-soft)] p-3 space-y-2" data-student-id="${c.student_id}" data-event-id="${e.id}"><p class="text-xs font-bold text-[var(--primary)]">✅ สรุปผลและข้อเสนอ</p><select name="final_result" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(hr).map(([w,I])=>`<option value="${w}" ${(v==null?void 0:v.final_result)===w||!v&&w==="pending"?"selected":""}>${I}</option>`).join("")}</select><input name="recommended_position" value="${l((v==null?void 0:v.recommended_position)??"")}" placeholder="ตำแหน่งที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input name="recommended_division" value="${l((v==null?void 0:v.recommended_division)??"")}" placeholder="ฝ่ายที่เหมาะสม" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><textarea name="strengths" rows="2" placeholder="จุดเด่น" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((v==null?void 0:v.strengths)??"")}</textarea><textarea name="areas_to_develop" rows="2" placeholder="สิ่งที่ควรพัฒนา" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((v==null?void 0:v.areas_to_develop)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--ok)] text-white text-xs font-bold">บันทึกผลสรุป</button></form>
      </div>
      <div class="flex justify-end"><button type="button" class="yla-participant-status-btn text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--muted)]" data-participant-id="${c.id}" data-status="${c.status==="completed"?"registered":"completed"}">${c.status==="completed"?"↩️ เปิดสถานะผู้เข้าร่วม":"ทำเครื่องหมายว่าจบกิจกรรม"}</button></div>
    </article>`}).join("");return`<section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-2"><div><h2 class="text-base font-bold text-[var(--ink)]">ผู้เข้าร่วมและการติดตาม</h2><p class="text-xs text-[var(--muted)]">บันทึกแยกเป็นการเข้าร่วม คะแนน และผลสรุปรายบุคคล</p></div><span class="text-xs text-[var(--muted)]">${((b=t==null?void 0:t.participants)==null?void 0:b.length)??0} คน</span></div><form id="yla-add-participant-form" class="rounded-2xl border border-dashed border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 flex flex-col sm:flex-row gap-2" data-event-id="${e.id}"><select name="student_id" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required><option value="">เลือกนักเรียนหรือสมาชิกสภาเพื่อเพิ่ม</option>${r.map(({student:c})=>`<option value="${c.id}">${l(c.full_name)} · ${l(c.student_code??"")} · ${l(c.main_room??"")}</option>`).join("")}</select><button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" ${r.length?"":"disabled"}>เพิ่มผู้เข้าร่วม</button></form>${r.length?"":'<p class="text-xs text-[var(--muted)]">ไม่มีรายชื่อนักเรียนที่เพิ่มได้จากใบสมัคร/สมาชิกปัจจุบัน หรือเพิ่มไปแล้วทั้งหมด</p>'}${s||'<div class="rounded-2xl border border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีผู้เข้าร่วม กดเพิ่มรายชื่อด้านบน</div>'}</section>`}function Ko({event:e,detail:t}){const r=(t==null?void 0:t.participants)??[];return r.length?`<div class="space-y-3">${r.map(a=>{const o=a.students??{},s=ir(t,a.student_id),n=wr(t,a.student_id),i=Rt(t,a.student_id);return`<article class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4 space-y-3"><div class="flex items-center gap-3">${O(o)}<div class="flex-1"><p class="text-sm font-bold text-[var(--ink)]">${l(o.full_name??"ข้อมูลของฉัน")}</p><p class="text-xs text-[var(--muted)]">สถานะ: ${l(a.status==="completed"?"จบกิจกรรม":"กำลังเข้าร่วม")}</p></div></div><div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs"><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">การเข้าร่วมล่าสุด</p><p class="font-bold text-[var(--ink)] mt-1">${s?`${l(ya[s.attendance_state]??s.attendance_state)} · ${l(s.session_label)}`:"ยังไม่บันทึก"}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">คะแนนสะสม</p><p class="font-bold text-[var(--primary)] mt-1">${i} / ${((t==null?void 0:t.criteria)??[]).reduce((u,b)=>u+Number(b.weight),0)}</p></div><div class="rounded-xl bg-[var(--bg-2)] p-3"><p class="text-[var(--muted)]">ผลสรุป</p><p class="font-bold text-[var(--ink)] mt-1">${l(hr[n==null?void 0:n.final_result]??"รอสรุป")}</p></div></div>${n!=null&&n.strengths||n!=null&&n.areas_to_develop?`<div class="border-t border-[var(--line-soft)] pt-3 text-xs leading-6"><p><strong>จุดเด่น:</strong> ${l((n==null?void 0:n.strengths)??"ยังไม่มีข้อมูล")}</p><p><strong>สิ่งที่ควรพัฒนา:</strong> ${l((n==null?void 0:n.areas_to_develop)??"ยังไม่มีข้อมูล")}</p></div>`:'<p class="text-xs text-[var(--muted)]">ผลประเมินและข้อเสนอจะแสดงเมื่อผู้ดูแลบันทึกผลแล้ว</p>'}</article>`}).join("")}</div>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">กิจกรรมนี้ยังไม่มีข้อมูลการเข้าร่วมของคุณ</div>'}function Xo(){if(G===null)return Go(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดกิจกรรม YLA...</p>';mt()&&L===null&&!rr&&Ho();const e=G.find(s=>Number(s.id)===Number(se));if(e&&B===null&&Nt===null)return Wo(e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดผู้เข้าร่วมและผลประเมิน...</p>';const t=s=>s==="active"?"bg-[var(--ok-soft)] text-[var(--ok)]":s==="completed"?"bg-[var(--primary-soft)] text-[var(--primary)]":s==="cancelled"?"bg-[var(--bad-soft)] text-[var(--bad)]":"bg-[var(--bg-2)] text-[var(--muted)]",r=G.length?G.map(s=>`<button type="button" class="yla-event-select text-left rounded-2xl border p-4 space-y-2 ${Number(s.id)===Number(se)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"}" data-event-id="${s.id}"><div class="flex items-start gap-2"><span class="flex-1 text-sm font-bold text-[var(--ink)]">${l(s.title)}</span><span class="text-[0.6875rem] font-bold rounded-full px-2 py-1 ${t(s.status)}">${l(Ht[s.status]??s.status)}</span></div><p class="text-xs text-[var(--muted)]">${l(or(s))}${s.location?` · ${l(s.location)}`:""}</p></button>`).join(""):'<div class="rounded-2xl border border-dashed border-[var(--line)] p-8 text-center text-sm text-[var(--muted)]">ยังไม่มีกิจกรรม YLA ในปีการศึกษานี้</div>',a=yt?'<form id="yla-event-form" class="rounded-2xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-4 space-y-3"><div class="flex items-center justify-between"><h2 class="font-bold text-[var(--ink)]">สร้างกิจกรรม YLA</h2><button type="button" id="yla-event-cancel" class="text-xs font-bold text-[var(--muted)]">ยกเลิก</button></div><input name="title" required placeholder="ชื่อกิจกรรม เช่น YLA รุ่นที่ 1" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><textarea name="description" rows="2" placeholder="วัตถุประสงค์หรือรายละเอียดกิจกรรม" class="w-full border border-[var(--line)] rounded-[10px] px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea><div class="grid grid-cols-2 gap-2"><input type="date" name="start_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="date" name="end_date" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><div class="grid grid-cols-2 gap-2"><input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="number" min="1" name="capacity" placeholder="จำนวนรับ (ไม่บังคับ)" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div><button type="submit" class="w-full py-2.5 rounded-[10px] bg-[var(--primary)] text-white text-sm font-bold">สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น</button></form>':"",o=e?`<section class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-5 space-y-4"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 YLA · ปีการศึกษา ${P}</p><h2 class="text-xl font-bold text-[var(--ink)] mt-1">${l(e.title)}</h2><p class="text-sm text-[var(--muted)] mt-1">${l(e.description??"กิจกรรมพัฒนาภาวะผู้นำและทักษะการทำงานของนักเรียน")}</p><p class="text-xs text-[var(--muted)] mt-2">${l(or(e))}${e.location?` · ${l(e.location)}`:""}</p></div><div class="flex flex-wrap gap-2 items-center"><span class="text-xs font-bold rounded-full px-3 py-1.5 ${t(e.status)}">${l(Ht[e.status]??e.status)}</span><button type="button" id="yla-print-event" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]">🖨️ พิมพ์สรุป</button></div></div>${mt()?`<form id="yla-event-status-form" class="flex flex-wrap gap-2 items-center border-t border-[var(--line-soft)] pt-3" data-event-id="${e.id}"><span class="text-xs text-[var(--muted)]">สถานะกิจกรรม</span><select name="status" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">${Object.entries(Ht).map(([s,n])=>`<option value="${s}" ${e.status===s?"selected":""}>${n}</option>`).join("")}</select><button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกสถานะ</button></form>`:""}${Nt===e.id?'<p class="text-sm text-[var(--muted)] text-center py-8">กำลังโหลด...</p>':B!=null&&B.error?'<p class="text-sm text-[var(--bad)] text-center py-8">โหลดข้อมูล YLA ไม่สำเร็จ</p>':mt()?Qo({event:e,detail:B}):Ko({event:e,detail:B})}</section>`:'<div class="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-8 text-center text-sm text-[var(--muted)]">เลือกกิจกรรมเพื่อดูรายละเอียดและติดตามผล</div>';return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><div class="flex flex-wrap items-start justify-between gap-3"><div><p class="text-xs font-bold text-[var(--primary)]">🌱 กิจกรรม YLA · Youth Leadership For Azizstan</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ติดตามกิจกรรมและพัฒนาการรายบุคคล</h1><p class="text-sm text-[var(--muted)] mt-2 leading-6">นักเรียนดูสถานะ การเข้าร่วม คะแนน และผลสรุปของตนเองได้ ส่วนผู้ดูแลจัดกิจกรรม เพิ่มผู้เข้าร่วม เช็กชื่อ และบันทึกผลได้ในหน้าเดียว</p></div>${mt()?'<button type="button" id="yla-event-open" class="px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-bold">＋ สร้างกิจกรรม YLA</button>':""}</div><div class="flex flex-wrap gap-2 mt-4 text-xs"><a href="https://docs.google.com/document/d/1lX7v3BkGBID-xRBDB0MFDDqPvT5YAVmaF540MUGY7RI/edit?tab=t.gq6dk28nkqg8" target="_blank" rel="noopener" class="px-3 py-2 rounded-[10px] border border-[var(--line)] font-bold text-[var(--primary)]">🔗 เปิดชุดเอกสาร YLA ต้นฉบับ</a><span class="px-3 py-2 rounded-[10px] bg-[var(--bg-2)] text-[var(--muted)]">เก็บข้อมูลตามกิจกรรม ไม่ปะปนกับสารบัญเอกสาร</span></div></section>${a}<section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">${r}</section>${o}<details class="mt-2"><summary class="cursor-pointer text-sm font-bold text-[var(--primary)]">📚 ดูสารบัญเอกสาร YLA YLA-00 ถึง YLA-10</summary><div class="mt-4">${Xt({kind:"yla",esc:l})}</div></details></div>`}function Zo(){var e,t,r,a,o,s;document.querySelectorAll(".yla-event-select").forEach(n=>n.addEventListener("click",()=>{se=Number(n.dataset.eventId),B=null,_()})),(e=document.getElementById("yla-event-open"))==null||e.addEventListener("click",()=>{yt=!0,_()}),(t=document.getElementById("yla-event-cancel"))==null||t.addEventListener("click",()=>{yt=!1,_()}),(r=document.getElementById("yla-event-form"))==null||r.addEventListener("submit",async n=>{var b;n.preventDefault();const i=n.currentTarget,u=i.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังสร้าง...";try{const c=await Bs({academicYear:P,title:i.title.value.trim(),description:i.description.value.trim(),startDate:i.start_date.value||null,endDate:i.end_date.value||null,location:i.location.value.trim(),capacity:i.capacity.value?Number(i.capacity.value):null,createdByTeacherId:(b=d.teacher)==null?void 0:b.id});g("สร้างกิจกรรม YLA และเกณฑ์ประเมินแล้ว ✅","success"),yt=!1,G=null,se=c.id,B=null,_()}catch(c){g("สร้างกิจกรรมไม่สำเร็จ: "+S(c),"error"),u.disabled=!1,u.textContent="สร้างกิจกรรมและเกณฑ์ประเมินเริ่มต้น"}}),(a=document.getElementById("yla-event-status-form"))==null||a.addEventListener("submit",async n=>{n.preventDefault();const i=n.currentTarget,u=i.querySelector('button[type="submit"]');u.disabled=!0;try{await Ps(Number(i.dataset.eventId),i.status.value),g("บันทึกสถานะกิจกรรมแล้ว","success"),G=null,_()}catch(b){g("บันทึกสถานะไม่สำเร็จ: "+S(b),"error"),u.disabled=!1}}),(o=document.getElementById("yla-add-participant-form"))==null||o.addEventListener("submit",async n=>{n.preventDefault();const i=n.currentTarget,u=i.querySelector('button[type="submit"]'),b=Number(i.student_id.value),c=ha(B).find(p=>Number(p.student.id)===b);if(!b||!c){g("กรุณาเลือกรายชื่อผู้เข้าร่วม","warning");return}u.disabled=!0;try{await Ys({eventId:Number(i.dataset.eventId),studentId:b,applicationId:c.applicationId}),g("เพิ่มผู้เข้าร่วมแล้ว ✅","success"),B=null,_()}catch(p){g("เพิ่มผู้เข้าร่วมไม่สำเร็จ: "+S(p),"error"),u.disabled=!1}}),document.querySelectorAll(".yla-participant-status-btn").forEach(n=>n.addEventListener("click",async()=>{n.disabled=!0;try{await zs(Number(n.dataset.participantId),n.dataset.status),B=null,_()}catch(i){g("เปลี่ยนสถานะไม่สำเร็จ: "+S(i),"error"),n.disabled=!1}})),document.querySelectorAll(".yla-attendance-form").forEach(n=>n.addEventListener("submit",async i=>{var b;i.preventDefault();const u=n.querySelector('button[type="submit"]');u.disabled=!0;try{await Us({eventId:Number(n.dataset.eventId),studentId:Number(n.dataset.studentId),sessionLabel:n.session_label.value.trim(),attendanceState:n.attendance_state.value,note:n.note.value.trim(),recordedByTeacherId:(b=d.teacher)==null?void 0:b.id}),g("บันทึกการเข้าร่วมแล้ว","success"),B=null,_()}catch(c){g("บันทึกการเข้าร่วมไม่สำเร็จ: "+S(c),"error"),u.disabled=!1}})),document.querySelectorAll(".yla-score-form").forEach(n=>{const i=n.querySelector(".yla-score-total"),u=()=>{i&&(i.textContent=[...n.querySelectorAll(".yla-score-input")].reduce((b,c)=>b+(Number(c.value)||0),0))};n.querySelectorAll(".yla-score-input").forEach(b=>b.addEventListener("input",u)),n.addEventListener("submit",async b=>{var f;b.preventDefault();const c=n.querySelector('button[type="submit"]');c.disabled=!0;const p={};n.querySelectorAll(".yla-score-input").forEach(v=>{p[v.name.replace("criterion_","")]=v.value});try{await Vs({eventId:Number(n.dataset.eventId),studentId:Number(n.dataset.studentId),scores:p,scoredByTeacherId:(f=d.teacher)==null?void 0:f.id}),g("บันทึกคะแนนแล้ว","success"),B=null,_()}catch(v){g("บันทึกคะแนนไม่สำเร็จ: "+S(v),"error"),c.disabled=!1}})}),document.querySelectorAll(".yla-result-form").forEach(n=>n.addEventListener("submit",async i=>{var b;i.preventDefault();const u=n.querySelector('button[type="submit"]');u.disabled=!0;try{await Gs({eventId:Number(n.dataset.eventId),studentId:Number(n.dataset.studentId),totalScore:Rt(B,Number(n.dataset.studentId)),strengths:n.strengths.value.trim(),areasToDevelop:n.areas_to_develop.value.trim(),recommendedPosition:n.recommended_position.value.trim(),recommendedDivision:n.recommended_division.value.trim(),finalResult:n.final_result.value,finalizedByTeacherId:(b=d.teacher)==null?void 0:b.id}),g("บันทึกผลสรุปแล้ว ✅","success"),B=null,_()}catch(c){g("บันทึกผลสรุปไม่สำเร็จ: "+S(c),"error"),u.disabled=!1}})),(s=document.getElementById("yla-print-event"))==null||s.addEventListener("click",()=>{if(!B||!Or())return;const n=Or(),i=(B.participants??[]).map((u,b)=>{const c=u.students??{},p=wr(B,u.student_id);return`<tr><td>${b+1}</td><td>${l(c.full_name??"")}</td><td>${l(c.student_code??"")}</td><td>${l(c.main_room??"")}</td><td>${Rt(B,u.student_id)}</td><td>${l(hr[p==null?void 0:p.final_result]??"รอสรุป")}</td></tr>`}).join("");dt(`<!doctype html><html lang="th"><head><meta charset="utf-8"><title>${l(n.title)}</title><style>body{font-family:Arial,sans-serif;color:#17202a;padding:30px}h1{font-size:22px}table{width:100%;border-collapse:collapse;margin-top:18px}th,td{border:1px solid #ccc;padding:7px;text-align:left;font-size:12px}th{background:#f3f4f6}</style></head><body><h1>สรุปกิจกรรม YLA: ${l(n.title)}</h1><p>ปีการศึกษา ${P} · ${l(or(n))}</p><table><thead><tr><th>ลำดับ</th><th>ชื่อ</th><th>รหัส</th><th>ห้อง</th><th>คะแนน</th><th>ผล</th></tr></thead><tbody>${i}</tbody></table></body></html>`)})}function Or(){return G==null?void 0:G.find(e=>Number(e.id)===Number(se))}function ei(e){const t=re==null?void 0:re.find(r=>r.id===e);return t?`${t.full_name} · รหัส ${t.id}`:""}function ti(e){if(!e)return"";const t=e.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);if(t)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://www.youtube.com/embed/${l(t[1])}" allowfullscreen loading="lazy"></iframe></div>`;const r=e.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/)||e.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/);if(r)return`<div class="aspect-video rounded-xl overflow-hidden bg-black"><iframe class="w-full h-full" src="https://drive.google.com/file/d/${l(r[1])}/preview" allowfullscreen loading="lazy"></iframe></div>`;const a=e.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);return a?`<div class="rounded-xl overflow-hidden bg-black" style="aspect-ratio:9/16;max-width:280px;margin:0 auto;"><iframe class="w-full h-full" src="https://www.tiktok.com/embed/v2/${l(a[1])}" allowfullscreen loading="lazy"></iframe></div>`:`<a href="${l(e)}" target="_blank" rel="noopener" class="block text-center py-3 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold hover:bg-[var(--primary-soft)]">🎬 เปิดดูวิดีโอแนะนำตัว (แท็บใหม่ — แพลตฟอร์มนี้ไม่รองรับฝังดูในหน้า)</a>`}function Ft(){if(!je)return"";const e=L==null?void 0:L.find(t=>t.id===je);return e?wa(e,e.students,{closeId:"btn-admin-app-detail-close",backdropId:"admin-app-detail-backdrop",canDelete:!!d.isAdmin}):""}function ri(){var t;if(!Ze)return"";const e=(t=d.applications)==null?void 0:t.find(r=>r.id===Ze);return e?wa(e,d.student,{closeId:"btn-my-app-detail-close",backdropId:"my-app-detail-backdrop",isOwner:!0}):""}function ai(e,t){var n,i;(n=document.getElementById("peer-endorser-picker-modal"))==null||n.remove();const r=(i=d.applications)==null?void 0:i.find(u=>u.id===e),a=(d.members||[]).filter(u=>{var b;return((b=u.council_positions)==null?void 0:b.gender)===t&&u.student_id!==d.student.id}).sort((u,b)=>{var c,p;return(((c=u.council_positions)==null?void 0:c.sort_order)??0)-(((p=b.council_positions)==null?void 0:p.sort_order)??0)}),o=u=>{var b,c,p;return`
    <button type="button" class="btn-peer-picker-choose w-full flex items-center gap-3 rounded-xl border p-3 text-left transition ${String(r==null?void 0:r.requested_peer_endorser_id)===String(u.id)?"border-[var(--primary)] bg-[var(--primary-soft)]":"border-[var(--line)] hover:border-[var(--primary-45)]"}" data-id="${u.id}">
      ${O(u.students,"w-11 h-14")}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((b=u.students)==null?void 0:b.full_name)??"—")}</p>
        <p class="text-xs text-[var(--muted)] truncate">${l(((c=u.council_positions)==null?void 0:c.position_name)??"—")} · ${l(((p=u.students)==null?void 0:p.main_room)??"—")}</p>
      </div>
      ${String(r==null?void 0:r.requested_peer_endorser_id)===String(u.id)?'<span class="text-[var(--primary)] text-lg flex-shrink-0">✓</span>':""}
    </button>`},s=document.createElement("div");s.id="peer-endorser-picker-modal",s.className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",s.innerHTML=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-md w-full max-h-[85vh] overflow-y-auto p-5">
      <div class="flex items-start justify-between gap-3 mb-3">
        <p class="text-base font-bold text-[var(--ink)]">🙋 เลือกพี่สภาที่ต้องการให้รับรอง</p>
        <button type="button" id="btn-peer-picker-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
      </div>
      ${a.length?`<div class="space-y-2">${a.map(o).join("")}</div>`:`<p class="text-sm text-[var(--muted-2)] text-center py-8">ยังไม่มีสมาชิกสภานักเรียน${j[t]??""}ในระบบให้เลือก</p>`}
    </div>`,document.body.appendChild(s),s.addEventListener("click",u=>{u.target===s&&s.remove()}),s.querySelector("#btn-peer-picker-close").addEventListener("click",()=>s.remove()),s.querySelectorAll(".btn-peer-picker-choose").forEach(u=>{u.addEventListener("click",async()=>{u.disabled=!0;try{await An({applicationId:e,memberId:Number(u.dataset.id)}),await ma(),g("เลือกพี่สภาที่ต้องการให้รับรองแล้ว ✅","success"),s.remove(),_()}catch(b){g("บันทึกไม่สำเร็จ: "+S(b),"error"),u.disabled=!1}})})}function wa(e,t,{closeId:r,backdropId:a,isOwner:o=!1,canDelete:s=!1}){var i,u,b,c,p,f,v,m,x,w;const n=_a[(i=e.council_positions)==null?void 0:i.gender]??"bg-[var(--bg-2)] text-[var(--muted)]";return`
    <div class="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" id="${a}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_8px_28px_rgba(11,20,16,0.25)] max-w-lg w-full max-h-[85vh] overflow-y-auto p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <p class="text-base font-bold text-[var(--ink)]">📄 ใบสมัครสภานักเรียน</p>
          <button type="button" id="${r}" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none flex-shrink-0">✕</button>
        </div>
        <div class="flex items-center gap-3 pb-3 border-b border-[var(--line-soft)]">
          ${O(t,"w-16 h-20")}
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 flex-wrap">
              <p class="font-bold text-[var(--ink)] truncate">${l((t==null?void 0:t.full_name)??"—")}</p>
              <span class="text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${n}">${l(j[(u=e.council_positions)==null?void 0:u.gender]??"—")}</span>
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
            ${ti(e.intro_video_url)}
          </div>`:""}
          ${(c=e.certificates)!=null&&c.length?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1.5">🏅 เกียรติบัตร/รางวัล (${e.certificates.length} รายการ)</p>
            <div class="grid grid-cols-3 gap-2">
              ${e.certificates.map(I=>`
                <a href="${l(I.url)}" target="_blank" rel="noopener" class="block rounded-lg border border-[var(--line)] overflow-hidden hover:border-[var(--primary-45)]">
                  ${(I.url??"").endsWith(".pdf")?'<div class="aspect-square bg-[var(--surface-2)] flex items-center justify-center text-2xl">📄</div>':`<img src="${l(I.url)}" class="aspect-square object-cover w-full" />`}
                  <p class="text-[0.5625rem] text-[var(--ink-2)] px-1 py-1 truncate">${l(I.title||"—")}</p>
                </a>`).join("")}
            </div>
          </div>`:""}
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">✅ ความเห็นครูที่ปรึกษาสามัญ${(p=e.teachers)!=null&&p.full_name?" — "+l(e.teachers.full_name):""}</p>
            ${e.endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${l(e.endorsement_comment)}</p>`:'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>
          ${Ae()?`
          <div>
            <p class="text-xs font-bold text-[var(--muted)] mb-1">🏛️ ความเห็นสมาชิกสภาปัจจุบัน${(v=(f=e.council_members)==null?void 0:f.students)!=null&&v.full_name?" — "+l(e.council_members.students.full_name):""}</p>
            ${Ye(e)?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ผู้สมัครเป็นสมาชิกสภาปัจจุบันอยู่แล้ว — ข้ามขั้นตอนนี้</p>':e.peer_endorsement_comment?`<p class="text-[#106143] bg-[var(--ok-soft)] rounded-xl p-3">${l(e.peer_endorsement_comment)}</p>`:e.peer_endorsed_at?'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">รับรองแล้ว (ไม่มีความเห็นเพิ่มเติม)</p>':'<p class="text-[var(--muted-2)] bg-[var(--surface-2)] rounded-xl p-3">ยังไม่ได้รับรอง</p>'}
          </div>`:""}
          ${o&&Ae()&&!Ye(e)&&!e.peer_endorsed_at?`
          <div class="rounded-xl border border-[var(--primary-45)] bg-[var(--primary-soft)] p-3 space-y-2">
            <p class="text-xs font-bold text-[var(--primary-dark)]">🙋 พี่สภาที่ต้องการให้รับรอง</p>
            <p class="text-sm text-[var(--ink)]">${(x=(m=e.requested_peer_endorser)==null?void 0:m.students)!=null&&x.full_name?l(e.requested_peer_endorser.students.full_name):"ยังไม่ได้เลือก"}</p>
            <button type="button" id="btn-pick-my-app-endorser" class="w-full py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${e.id}" data-gender="${l(((w=e.council_positions)==null?void 0:w.gender)??"")}">
              ${e.requested_peer_endorser_id?"🔄 เปลี่ยนพี่สภา":"➕ เลือกพี่สภา"}
            </button>
          </div>`:""}
          ${s&&["pending","rejected"].includes(e.status)?`
          <button type="button" id="btn-delete-council-application" data-id="${e.id}" class="w-full py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">🗑️ ลบใบสมัคร</button>`:""}
        </div>
      </div>
    </div>`}function $a(){var t,r,a,o,s;if(!ge)return"";const e=L==null?void 0:L.find(n=>n.id===ge);return e?`<div id="council-delete-backdrop" class="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
    <div class="bg-[var(--surface)] rounded-2xl p-5 max-w-md w-full space-y-3">
      <p class="text-base font-bold text-[var(--ink)]">🗑️ ยืนยันการนำใบสมัครนี้ออกจากระบบ?</p>
      <div class="text-sm text-[var(--ink-2)] space-y-1">
        <p><b>ชื่อ–สกุล:</b> ${l((t=e.students)==null?void 0:t.full_name)}</p>
        <p><b>รหัสนักเรียน:</b> ${l((r=e.students)==null?void 0:r.student_code)}</p>
        <p><b>ห้อง:</b> ${l(((a=e.students)==null?void 0:a.main_room)||((o=e.students)==null?void 0:o.religion_room)||"—")}</p>
        <p><b>ตำแหน่ง:</b> ${l((s=e.council_positions)==null?void 0:s.position_name)}</p>
        <p><b>สถานะ:</b> ${l(ur[e.status]||e.status)}</p>
      </div>
      <p class="text-xs text-[var(--bad)]">โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนดำเนินการ</p>
      <textarea id="council-delete-reason" required rows="3" placeholder="เหตุผลการลบ (จำเป็น)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <div class="flex gap-2">
        <button type="button" id="btn-cancel-council-delete" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm">ยกเลิก</button>
        <button type="button" id="btn-confirm-council-delete" class="flex-1 py-2.5 rounded-xl bg-[var(--bad)] text-white text-sm font-bold">ยืนยันลบ</button>
      </div>
    </div>
  </div>`:""}async function ni(){er=await js().catch(()=>[]),_()}function si(){if(!d.isAdmin&&!d.isExecutive)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือผู้บริหารเท่านั้น</p>';if(L===null)return ct(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(V===null)return $r(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(er===null)return ni(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=(()=>{const v=d.cfg.council_term_start_semester,m=d.cfg.council_term_start_year,x=d.cfg.council_term_end_semester,w=d.cfg.council_term_end_year;return!m&&!w?"ยังไม่ได้ตั้งค่าวาระ":`ภาคเรียนที่ ${v??"—"}/${m??"—"} ถึง ภาคเรียนที่ ${x??"—"}/${w??"—"}`})(),t=d.members,r={M:t.filter(v=>{var m;return((m=v.council_positions)==null?void 0:m.gender)==="M"}).length,W:t.filter(v=>{var m;return((m=v.council_positions)==null?void 0:m.gender)==="W"}).length},a=t.filter(v=>{var m;return(m=v.council_positions)==null?void 0:m.is_elected}).sort((v,m)=>{var x,w;return(((x=v.council_positions)==null?void 0:x.sort_order)??0)-(((w=m.council_positions)==null?void 0:w.sort_order)??0)}),o=L.length,s={all:o};L.forEach(v=>{const m=kt(v);s[m]=(s[m]??0)+1});const n=L.filter(v=>v.endorsed_at).length,i=L.filter(v=>v.peer_endorsed_at||Ye(v)).length,u=L.filter(v=>v.status==="candidate").length,b=L.filter(v=>v.status==="appointed").length,c=Object.fromEntries(d.positions.map(v=>[v.id,v.position_name])),p=V.map(v=>({...v,posNames:er.filter(m=>m.teacher_id===v.id).map(m=>c[m.position_id]).filter(Boolean)})),f=(v,m,x)=>`
    <div class="rounded-xl bg-[var(--surface-2)] p-3 text-center">
      <p class="text-xl font-extrabold" style="color:${x}">${l(v)}</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mt-0.5">${l(m)}</p>
    </div>`;return`
    <div class="max-w-4xl mx-auto space-y-5">
      <div>
        <h2 class="text-lg font-bold text-[var(--ink)] mb-0.5">📊 ภาพรวมผู้บริหาร</h2>
        <p class="text-xs text-[var(--muted-2)]">สรุปสภานักเรียนวาระปัจจุบัน สำหรับผู้บริหาร — ดูอย่างเดียว ไม่มีสิทธิ์แก้ไข</p>
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">📋 การสมัครสภานักเรียน</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
          ${f(o,"สมัครแล้วทั้งหมด","var(--ink)")}
          ${f(n,"ครูที่ปรึกษาสามัญรับรองแล้ว","var(--ok)")}
          ${Ae()?f(i,"สภาปัจจุบันรับรองแล้ว","var(--ok)"):f("—","สภาปัจจุบันรับรอง (ปิดใช้งาน)","var(--muted-2)")}
          ${f(u,"ว่าที่สภานักเรียน (ผู้สมัครเลือกตั้ง)","var(--primary)")}
          ${f(b,"แต่งตั้งแล้ว","var(--teal)")}
        </div>
        <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
          ${sr.map(v=>`
            <span class="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[var(--surface-2)] text-[var(--ink-2)]">
              ${l(v.label)} <span class="text-[var(--muted-2)]">${s[v.id]??0}</span>
            </span>`).join("")}
        </div>
        <p class="text-xs text-[var(--muted-2)] mb-2">รายชื่อล่าสุด — กดดูใบสมัครฉบับเต็มได้</p>
        <div class="space-y-1.5 max-h-96 overflow-y-auto">
          ${L.slice(0,30).map(v=>{var T,C;const[m,x]=ot[v.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],w=v.endorsed_at?"✅":"⬜",I=Ae()?v.peer_endorsed_at||Ye(v)?" · ✅สภา":" · ⬜สภา":"";return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${O(v.students,"w-8 h-10")}
              <div class="min-w-0 flex-1">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(((T=v.students)==null?void 0:T.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((C=v.council_positions)==null?void 0:C.position_name)??"—")} · ${w}ครู${I}</p>
              </div>
              <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full ${x}">${l(m)}</span>
              <button type="button" class="btn-view-app-detail flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-lg border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${v.id}">ดู</button>
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
          ${f(a.length,"ตำแหน่งผู้นำ","var(--primary)")}
        </div>
        ${a.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${a.map(v=>{var m,x;return`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2">
              ${O(v.students,"w-9 h-11")}
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(((m=v.students)==null?void 0:m.full_name)??"—")}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((x=v.council_positions)==null?void 0:x.position_name)??"—")}</p>
              </div>
            </div>`}).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีตำแหน่งผู้นำที่เลือกตั้งแล้ว</p>'}
      </div>

      <div class="rounded-2xl border border-[var(--line-soft)] bg-[var(--surface)] p-4">
        <p class="text-sm font-bold text-[var(--ink)] mb-3">👨‍🏫 รายนามครูที่ปรึกษาสภานักเรียน</p>
        ${p.length?`
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${p.map(v=>`
            <div class="flex items-center gap-2.5 rounded-xl border border-[var(--line-soft)] p-2.5">
              <div class="w-9 h-9 rounded-full bg-[var(--surface-2)] flex-shrink-0 overflow-hidden flex items-center justify-center text-[var(--muted-2)]">${v.image_url?`<img src="${l(v.image_url)}" class="w-full h-full object-cover" />`:"👤"}</div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-[var(--ink)] truncate">${l(v.full_name)}</p>
                <p class="text-[0.6875rem] text-[var(--muted)] truncate">${v.posNames.length?l(v.posNames.join(", ")):"ยังไม่ได้กำหนดฝ่ายที่ดูแล"}</p>
              </div>
            </div>`).join("")}
        </div>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีครูที่ปรึกษาสภานักเรียน</p>'}
      </div>
    </div>
    ${Ft()}${$a()}`}function oi(){if(!d.isAdmin&&!d.isCouncilAdvisor)return"";if(L===null)return ct(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(K===null)return xr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(re===null)return yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=K.reduce((m,x)=>m+Number(x.weight),0),t=e/2;ie!=="M"&&ie!=="W"&&(ie="M");const r=L.filter(m=>{var x;return((x=m.council_positions)==null?void 0:x.gender)===ie}),a=`
    <div class="flex gap-2 mb-3">
      ${["M","W"].map(m=>`
        <button type="button" class="apps-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${m===ie?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${m}">
          สภา${j[m]} <span class="${m===ie?"text-white/80":"text-[var(--muted-2)]"}">${L.filter(x=>{var w;return((w=x.council_positions)==null?void 0:w.gender)===m}).length}</span>
        </button>`).join("")}
    </div>`,o={all:r.length};r.forEach(m=>{const x=kt(m);o[x]=(o[x]??0)+1}),sr.some(m=>m.id===fe)||(fe="all");const s=`
    <div class="flex gap-2 mb-3 overflow-x-auto pb-1">
      ${sr.map(m=>`
        <button type="button" class="apps-filter-btn flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition ${m.id===fe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${m.id}">
          ${l(m.label)} <span class="${m.id===fe?"text-white/80":"text-[var(--muted-2)]"}">${o[m.id]??0}</span>
        </button>`).join("")}
    </div>`,n=[...new Set(r.map(m=>Dt(m.students)).filter(Boolean))].sort((m,x)=>m.localeCompare(x,"th")),i=d.positions.filter(m=>m.gender===ie).sort((m,x)=>m.sort_order-x.sort_order),u=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      <select id="apps-grade-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกระดับชั้น</option>
        ${n.map(m=>`<option value="${l(m)}" ${m===gt?"selected":""}>${l(m)}</option>`).join("")}
      </select>
      <select id="apps-position-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">ทุกฝ่าย</option>
        ${i.map(m=>`<option value="${m.id}" ${String(m.id)===String(De)?"selected":""}>${l(m.position_name)}</option>`).join("")}
      </select>
      <select id="apps-advisor-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองครูที่ปรึกษา: ทั้งหมด</option>
        <option value="yes" ${He==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${He==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>
      ${Ae()?`
      <select id="apps-peer-endorse-filter" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
        <option value="">รับรองพี่สภา: ทั้งหมด</option>
        <option value="yes" ${We==="yes"?"selected":""}>รับรองแล้ว</option>
        <option value="no" ${We==="no"?"selected":""}>ยังไม่รับรอง</option>
      </select>`:""}
    </div>`,b=`<datalist id="council-teacher-datalist">${re.map(m=>`<option value="${l(m.full_name)} · รหัส ${m.id}"></option>`).join("")}</datalist>`;if(!r.length)return`${a}${s}${u}${b}<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีใบสมัครสภา${j[ie]}</p>`;const c=m=>!(gt&&Dt(m.students)!==gt||De&&String(m.position_id)!==String(De)||He==="yes"&&!m.endorsed_at||He==="no"&&m.endorsed_at||We==="yes"&&!Me(m)||We==="no"&&Me(m)),p=r.filter(m=>(fe==="all"||kt(m)===fe)&&c(m));if(!p.length)return`${a}${s}${u}${b}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีใบสมัครในหมวดนี้</p>`;const f=m=>{var $,E,A,q,D,J,X,M,z,kr,Er,Sr,Ar,Ir;const x=($=m.council_interviews)==null?void 0:$[0],[w,I]=ot[m.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],T=_a[(E=m.council_positions)==null?void 0:E.gender]??"bg-[var(--bg-2)] text-[var(--muted)]",C=!!((A=m.council_positions)!=null&&A.is_elected),y=kt(m);return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-app-card="${m.id}">
      <div class="flex items-center gap-3">
        ${O(m.students)}
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5 flex-wrap">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((q=m.students)==null?void 0:q.full_name)??"—")}</p>
            <span class="flex-shrink-0 text-[0.5625rem] font-bold px-2 py-0.5 rounded-full ${T}">${l(j[(D=m.council_positions)==null?void 0:D.gender]??"—")}</span>
          </div>
          <p class="text-xs text-[var(--muted)]">${l(((J=m.students)==null?void 0:J.student_code)??"")} · ${l(((X=m.students)==null?void 0:X.main_room)??"")} · ${l(((M=m.council_positions)==null?void 0:M.position_name)??"—")}</p>
        </div>
        <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${I}">${w}</span>
      </div>
      <button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${m.id}">📄 ดูใบสมัคร</button>

      ${y==="awaiting_endorsement"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${ga(m)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}

      ${m.status==="pending"&&m.endorsed_at&&Me(m)?`
        <form class="schedule-form space-y-2 pt-1 border-t border-[var(--line-soft)]" data-app-id="${m.id}" data-iv-id="${(x==null?void 0:x.id)??""}" data-profile-id="${l(((z=m.students)==null?void 0:z.profile_id)??"")}" data-student-name="${l(((kr=m.students)==null?void 0:kr.full_name)??"")}" data-position-name="${l(((Er=m.council_positions)==null?void 0:Er.position_name)??"")}">
          <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p>
          <div class="grid grid-cols-2 gap-2">
            <input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
            <input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <input type="text" name="interviewerText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)"
            value="${x!=null&&x.interviewer_teacher_id?l(ei(x.interviewer_teacher_id)):""}"
            class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button>
        </form>`:""}

      ${m.status==="interview_scheduled"?`
        <div class="pt-1 border-t border-[var(--line-soft)] space-y-2">
          <p class="text-xs text-[var(--muted)]">📅 ${x!=null&&x.scheduled_at?new Date(x.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"—"} ${x!=null&&x.location?"· "+l(x.location):""} ${x!=null&&x.interviewer_teacher_id?"· กรรมการ "+l(((Sr=re.find(le=>le.id===x.interviewer_teacher_id))==null?void 0:Sr.full_name)??""):""}</p>
          <form class="score-form space-y-1.5" data-app-id="${m.id}" data-iv-id="${(x==null?void 0:x.id)??""}" data-max-weight="${e}" data-pass-threshold="${t}">
            <p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>
            ${K.map(le=>{var Cr;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${l(le.name)} <span class="text-[var(--muted-2)]">(เต็ม ${le.weight})</span></span>
                <input type="number" min="0" max="${le.weight}" step="0.5" name="c_${le.id}" data-criterion-id="${le.id}"
                  value="${((Cr=x==null?void 0:x.scores)==null?void 0:Cr[le.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
              </div>`}).join("")}
            <div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]">
              <span class="text-[var(--ink-2)]">คะแนนรวม</span>
              <span class="score-total-display text-[var(--primary)]">${(x==null?void 0:x.score)??0} / ${e} · ต้อง ≥ ${t} จึงผ่าน</span>
            </div>
            <textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((x==null?void 0:x.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผล</button>
          </form>
        </div>`:""}

      ${m.status==="interviewed"?`
        <div class="pt-1 border-t border-[var(--line-soft)]">
          ${C?`<button type="button" class="btn-promote-candidate w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold" data-app-id="${m.id}">🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง</button>`:`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${m.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`}
        </div>`:""}

      ${m.status==="candidate"?`<p class="text-xs text-[var(--primary)] pt-1 border-t border-[var(--line-soft)]">เบอร์ผู้สมัคร ${((Ir=(Ar=m.council_candidates)==null?void 0:Ar[0])==null?void 0:Ir.ballot_number)??"—"} · รอผลเลือกตั้ง</p>`:""}
      ${m.status==="rejected"&&(x!=null&&x.comment)?`<p class="text-xs text-[var(--bad)] pt-1 border-t border-[var(--line-soft)]">${l(x.comment)}</p>`:""}
    </div>`},v=De?`<div class="space-y-3">${p.map(f).join("")}</div>`:i.map(m=>{const x=p.filter(w=>w.position_id===m.id);return x.length?`
          <div class="mb-5">
            <p class="text-xs font-bold text-[var(--muted)] mb-2 px-1">${l(m.position_name)} <span class="text-[var(--muted-2)]">(${x.length})</span></p>
            <div class="space-y-3">${x.map(f).join("")}</div>
          </div>`:""}).join("");return`${a}${s}${u}${b}${v}${Ft()}${$a()}`}function ka(e,t){var a,o,s,n;const r=String(t??"").trim().toLocaleLowerCase();return r?[(a=e.students)==null?void 0:a.full_name,(o=e.students)==null?void 0:o.student_code,(s=e.students)==null?void 0:s.main_room,(n=e.council_positions)==null?void 0:n.position_name].filter(Boolean).join(" ").toLocaleLowerCase().includes(r):!0}function ii(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(L===null)return ct(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลสัมภาษณ์...</p>';if(K===null)return xr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดเกณฑ์สัมภาษณ์...</p>';if(re===null)return yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดรายชื่อกรรมการ...</p>';["M","W"].includes(Ce)||(Ce="M");const e=L.filter(m=>{var x;return((x=m.council_positions)==null?void 0:x.gender)===Ce}),t=K.reduce((m,x)=>m+Number(x.weight),0),r=t/2,a=m=>m.status==="pending"&&m.endorsed_at&&Me(m),o=m=>m.status==="interview_scheduled",s=m=>["interviewed","rejected"].includes(m.status),n=m=>Le==="ready"?a(m):Le==="scheduled"?o(m):Le==="completed"?s(m):!0,i=e.filter(m=>n(m)&&ka(m,qt)),u={all:e.length,ready:e.filter(a).length,scheduled:e.filter(o).length,completed:e.filter(s).length},b=[["all","ทั้งหมด"],["ready","รอนัด"],["scheduled","รอให้คะแนน"],["completed","ประเมินแล้ว"]],c=["M","W"].map(m=>`<button type="button" class="interview-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${m===Ce?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${m}">สภา${j[m]} <span class="${m===Ce?"text-white/80":"text-[var(--muted-2)]"}">${L.filter(x=>{var w;return((w=x.council_positions)==null?void 0:w.gender)===m}).length}</span></button>`).join(""),p=b.map(([m,x])=>`<button type="button" class="interview-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${m===Le?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${m}">${x} <span class="${m===Le?"text-white/80":"text-[var(--muted-2)]"}">${u[m]}</span></button>`).join(""),f=`<datalist id="council-interview-teacher-datalist">${re.map(m=>`<option value="${l(m.full_name)} · รหัส ${m.id}"></option>`).join("")}</datalist>`,v=i.map(m=>{var $,E,A,q,D,J,X;const x=($=m.council_interviews)==null?void 0:$[0],[w,I]=ot[m.status]??["—","bg-[var(--bg-2)] text-[var(--muted)]"],T=a(m)?`<form class="schedule-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-app-id="${m.id}" data-iv-id="${(x==null?void 0:x.id)??""}" data-profile-id="${l(((E=m.students)==null?void 0:E.profile_id)??"")}" data-position-name="${l(((A=m.council_positions)==null?void 0:A.position_name)??"")}">
      <p class="text-xs font-semibold text-[var(--muted)]">นัดสัมภาษณ์</p><div class="grid grid-cols-2 gap-2"><input type="datetime-local" name="scheduled_at" required class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><input type="text" name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"></div>
      <input type="text" name="interviewerText" list="council-interview-teacher-datalist" placeholder="พิมพ์ชื่อครูกรรมการ (ไม่บังคับ)" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]"><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกนัดสัมภาษณ์</button></form>`:"",C=o(m)?`<div class="pt-2 border-t border-[var(--line-soft)]"><p class="text-xs text-[var(--muted)] mb-2">📅 ${x!=null&&x.scheduled_at?new Date(x.scheduled_at).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"}):"ยังไม่กำหนดเวลา"} ${x!=null&&x.location?"· "+l(x.location):""}</p><form class="score-form space-y-1.5" data-app-id="${m.id}" data-iv-id="${(x==null?void 0:x.id)??""}" data-max-weight="${t}" data-pass-threshold="${r}"><p class="text-xs font-semibold text-[var(--muted)]">ให้คะแนนสัมภาษณ์รายหัวข้อ</p>${K.map(M=>{var z;return`<div class="flex items-center gap-2"><span class="flex-1 text-xs text-[var(--ink-2)]">${l(M.name)} <span class="text-[var(--muted-2)]">(เต็ม ${M.weight})</span></span><input type="number" min="0" max="${M.weight}" step="0.5" name="c_${M.id}" data-criterion-id="${M.id}" value="${((z=x==null?void 0:x.scores)==null?void 0:z[M.id])??""}" class="score-input w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]"></div>`}).join("")}<div class="flex items-center justify-between text-xs font-bold pt-1.5 border-t border-[var(--line-soft)]"><span>คะแนนรวม</span><span class="score-total-display text-[var(--primary)]">${(x==null?void 0:x.score)??0} / ${t} · ต้อง ≥ ${r} จึงผ่าน</span></div><textarea name="comment" rows="2" placeholder="ความเห็นกรรมการ" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l((x==null?void 0:x.comment)??"")}</textarea><button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold">บันทึกผล</button></form></div>`:"",y=s(m)?`<div class="pt-2 border-t border-[var(--line-soft)] text-xs ${m.status==="interviewed"?"text-[var(--ok)]":"text-[var(--bad)]"}">${m.status==="interviewed"?"✅ ผ่านสัมภาษณ์":"❌ ไม่ผ่านสัมภาษณ์"}${(x==null?void 0:x.score)!=null?` · คะแนน ${x.score}/${t}`:""}${x!=null&&x.comment?`<p class="text-[var(--muted)] mt-1">${l(x.comment)}</p>`:""}${m.status==="interviewed"?'<button type="button" class="goto-view mt-2 px-3 py-1.5 rounded-[10px] bg-[var(--primary)] text-white text-xs font-bold" data-view="yla">🌱 บันทึก/ติดตาม YLA →</button>':""}</div>`:"";return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${O(m.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(((q=m.students)==null?void 0:q.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${l(((D=m.students)==null?void 0:D.student_code)??"")} · ${l(((J=m.students)==null?void 0:J.main_room)??"")} · ${l(((X=m.council_positions)==null?void 0:X.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${I}">${w}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${m.id}">📄 ดูใบสมัคร</button>${!a(m)&&m.status==="pending"?`<p class="text-xs text-[var(--gold-ink)] pt-1 border-t border-[var(--line-soft)]">⏳ ${ga(m)} ก่อน จึงจะนัดสัมภาษณ์ได้</p>`:""}${T}${C}${y}</article>`}).join("");return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">🗓️ งานสัมภาษณ์</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">นัดหมายและประเมินผู้สมัคร</h1><p class="text-xs text-[var(--muted)] mt-2">แสดงเฉพาะข้อมูลใบสมัครของปีการศึกษาปัจจุบัน และใช้เกณฑ์คะแนนที่ตั้งไว้ในระบบ</p></section><div class="flex gap-2">${c}</div><div class="flex gap-2 overflow-x-auto pb-1">${p}</div><div class="flex gap-2"><input id="interview-search" value="${l(qt)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="interview-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${i.length} รายการ จาก ${e.length} รายการ</p>${f}${i.length?`<div class="space-y-3">${v}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${Ft()}</div>`}function li(){if(!d.isAdmin&&!d.isCouncilAdvisor)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะครูที่ปรึกษาสภาหรือแอดมินเท่านั้น</p>';if(L===null)return ct(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลดข้อมูลแต่งตั้ง...</p>';["M","W"].includes(qe)||(qe="M");const e=L.filter(p=>{var f;return((f=p.council_positions)==null?void 0:f.gender)===qe}),t=p=>{var f;return p.status==="interviewed"&&!((f=p.council_positions)!=null&&f.is_elected)},r=p=>p.status==="appointed",a=p=>Te==="ready"?t(p):Te==="appointed"?r(p):t(p)||r(p),o=e.filter(p=>a(p)&&ka(p,Tt)),s={ready:e.filter(t).length,appointed:e.filter(r).length,all:e.filter(p=>t(p)||r(p)).length},n=["M","W"].map(p=>`<button type="button" class="appointment-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold ${p===qe?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${p}">สภา${j[p]} <span class="${p===qe?"text-white/80":"text-[var(--muted-2)]"}">${L.filter(f=>{var v;return((v=f.council_positions)==null?void 0:v.gender)===p&&(t(f)||r(f))}).length}</span></button>`).join(""),u=[["ready","รอแต่งตั้ง"],["appointed","แต่งตั้งแล้ว"],["all","ทั้งหมด"]].map(([p,f])=>`<button type="button" class="appointment-filter-btn flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold ${p===Te?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-filter="${p}">${f} <span class="${p===Te?"text-white/80":"text-[var(--muted-2)]"}">${s[p]}</span></button>`).join(""),b=o.map(p=>{var f,v,m,x;return`<article class="rounded-xl border border-[var(--line-soft)] bg-[var(--surface)] p-3 space-y-2.5"><div class="flex items-center gap-3">${O(p.students)}<div class="min-w-0 flex-1"><p class="text-sm font-bold text-[var(--ink)] truncate">${l(((f=p.students)==null?void 0:f.full_name)??"—")}</p><p class="text-xs text-[var(--muted)]">${l(((v=p.students)==null?void 0:v.student_code)??"")} · ${l(((m=p.students)==null?void 0:m.main_room)??"")} · ${l(((x=p.council_positions)==null?void 0:x.position_name)??"—")}</p></div><span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${p.status==="appointed"?ot.appointed[1]:ot.interviewed[1]}">${p.status==="appointed"?"แต่งตั้งแล้ว":"รอแต่งตั้ง"}</span></div><button type="button" class="btn-view-app-detail w-full text-xs font-bold py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)]" data-id="${p.id}">📄 ดูใบสมัครและผลสัมภาษณ์</button>${t(p)?`<button type="button" class="btn-appoint-member w-full py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-app-id="${p.id}">✅ แต่งตั้งเข้าตำแหน่ง</button>`:'<p class="text-xs text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">บันทึกสมาชิกภาพเรียบร้อยแล้ว</p>'}</article>`}).join(""),c=e.filter(p=>{var f;return p.status==="interviewed"&&((f=p.council_positions)==null?void 0:f.is_elected)}).length;return`<div class="space-y-4"><section class="bg-[var(--surface)] border border-[var(--line-soft)] rounded-2xl p-5"><p class="text-xs font-bold text-[var(--primary)]">✅ การแต่งตั้งสมาชิก</p><h1 class="text-xl font-bold text-[var(--ink)] mt-1">ผู้ผ่านสัมภาษณ์ที่พร้อมเข้าสภา</h1><p class="text-xs text-[var(--muted)] mt-2">หน้านี้ใช้สำหรับตำแหน่งแต่งตั้งโดยตรง ส่วนตำแหน่งประธาน/รองประธานที่มาจากการเลือกตั้งให้ดำเนินการต่อในแท็บว่าที่ประธาน</p></section><div class="flex gap-2">${n}</div><div class="flex gap-2 overflow-x-auto pb-1">${u}</div><div class="flex gap-2"><input id="appointment-search" value="${l(Tt)}" placeholder="ค้นหาชื่อนักเรียน รหัส ห้อง หรือฝ่าย" class="flex-1 border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]"><button type="button" class="appointment-clear-search px-3 py-2 rounded-xl border border-[var(--line)] text-xs font-bold">ล้าง</button></div><p class="text-xs text-[var(--muted)]">แสดง ${o.length} รายการ จาก ${s[Te]} รายการ · ผ่านสัมภาษณ์สายเลือกตั้งรอดำเนินการ ${c} รายการ</p>${o.length?`<div class="space-y-3">${b}</div>`:'<div class="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-10 text-center text-sm text-[var(--muted)]">ไม่พบรายการในตัวกรองนี้</div>'}${Ft()}</div>`}const di=[{label:"ประธาน",match:e=>!!(e!=null&&e.is_elected)},{label:"รองประธาน",match:e=>(e==null?void 0:e.position_name)==="รองประธานสภานักเรียน"},{label:"ฝ่ายงาน",match:e=>((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")},{label:"สำนักงานสภา",match:e=>!(e!=null&&e.is_elected)&&(e==null?void 0:e.position_name)!=="รองประธานสภานักเรียน"&&!((e==null?void 0:e.position_name)??"").startsWith("ฝ่าย")}];let ae="M";function ci(){ae!=="M"&&ae!=="W"&&(ae="M");const e=d.members.filter(n=>{var i;return((i=n.council_positions)==null?void 0:i.gender)===ae}).sort((n,i)=>{var u,b;return(((u=n.council_positions)==null?void 0:u.sort_order)??99)-(((b=i.council_positions)==null?void 0:b.sort_order)??99)}),t=`
    <div class="flex gap-2 mb-4">
      ${["M","W"].map(n=>`
        <button type="button" class="roster-gender-tab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${n===ae?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-gender="${n}">สภา${j[n]}</button>`).join("")}
    </div>`,r=d.isAdmin?`<button type="button" id="btn-add-council-member" class="w-full py-2.5 rounded-xl border border-dashed border-[var(--primary-45)] text-[var(--primary)] text-sm font-bold mb-4 hover:bg-[var(--primary-soft)]">＋ เพิ่มสมาชิกสภา${j[ae]}</button>`:"",a=d.isAdmin||d.isChair&&d.chairGender===ae,o=n=>{var i,u,b;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] text-center">
      ${O(n.students,"w-16 h-20 mx-auto")}
      <p class="text-sm font-bold text-[var(--ink)] truncate mt-2">${l(((i=n.students)==null?void 0:i.full_name)??"—")}</p>
      <p class="text-[0.6875rem] text-[var(--muted)] truncate">${l(((u=n.students)==null?void 0:u.main_room)??"")}</p>
      <p class="text-[0.6875rem] text-[var(--primary)] font-semibold truncate mt-0.5">${l(((b=n.council_positions)==null?void 0:b.position_name)??"—")}</p>
      ${a?`
        <button type="button" class="btn-toggle-can-create w-full mt-2 text-[0.625rem] font-bold py-1 rounded-[8px] border ${n.can_create_activities?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--muted)]"}" data-id="${n.id}" data-value="${n.can_create_activities?"":"1"}">${n.can_create_activities?"✅ สร้างกิจกรรมได้":"➕ ให้สิทธิ์สร้างกิจกรรม"}</button>`:""}
      ${d.isAdmin?`
        <div class="flex gap-1.5 mt-2 pt-2 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-edit-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${n.id}">✏️ แก้ไข</button>
          <button type="button" class="btn-remove-council-member flex-1 text-[0.6875rem] font-bold py-1 rounded-[8px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${n.id}">🗑️ ลบ</button>
        </div>`:""}
    </div>`},s=di.map(n=>{const i=e.filter(u=>n.match(u.council_positions));return i.length?`
      <div class="mb-4">
        <p class="text-xs font-bold text-[var(--muted-2)] mb-2">${n.label}</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">${i.map(o).join("")}</div>
      </div>`:""}).join("");return`${r}${t}${s||`<p class="text-xs text-[var(--muted-2)] text-center py-10">ยังไม่มีข้อมูลสมาชิกสภา${j[ae]}</p>`}`}function Mr({mode:e,gender:t,member:r}){var u,b,c;(u=document.getElementById("member-modal"))==null||u.remove();const a=d.positions.filter(p=>p.gender===t);let o=e==="edit"?r.students:null,s=null;const n=document.createElement("div");n.id="member-modal",n.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",n.innerHTML=`
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
            <p class="text-sm font-bold text-[var(--ink)]">${l(((b=r.students)==null?void 0:b.full_name)??"—")} · ${l(((c=r.students)==null?void 0:c.student_code)??"")}</p>
          </div>
        `}
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ตำแหน่ง <span class="text-[var(--bad)]">*</span></label>
          <select id="member-position-select" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— เลือกตำแหน่ง —</option>
            ${a.map(p=>`<option value="${p.id}" ${e==="edit"&&r.position_id===p.id?"selected":""}>${l(p.position_name)}</option>`).join("")}
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
    </div>`,document.body.appendChild(n),n.querySelector("#btn-close-member-modal").addEventListener("click",()=>n.remove()),n.addEventListener("click",p=>{p.target===n&&n.remove()});const i=()=>{const p=n.querySelector("#member-student-selected");p&&(p.innerHTML=o?`
      <div class="flex items-center gap-2 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-soft-line)] p-2.5">
        ${O(o,"w-10 h-12")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(o.full_name)}</p>
          <p class="text-[0.6875rem] text-[var(--muted-2)] truncate">${l(o.student_code)} · ${l(o.main_room??"")}</p>
        </div>
      </div>`:"")};if(e==="add"){const p=n.querySelector("#member-student-search"),f=n.querySelector("#member-student-results");p.addEventListener("input",()=>{clearTimeout(s);const v=p.value.trim();if(v.length<2){f.innerHTML="";return}s=setTimeout(async()=>{const m=await ea(v).catch(()=>[]);f.innerHTML=m.length?m.map(x=>`
          <button type="button" class="member-search-result-item w-full text-left flex items-center gap-2 rounded-xl border border-[var(--line)] p-2 hover:bg-[var(--surface-2)]" data-id="${x.id}">
            <span class="text-sm font-bold text-[var(--ink)] flex-1 truncate">${l(x.full_name)}</span>
            <span class="text-[0.6875rem] text-[var(--muted-2)] flex-shrink-0">${l(x.student_code)} · ${l(x.main_room??"")}</span>
          </button>`).join(""):'<p class="text-xs text-[var(--muted-2)] px-1">ไม่พบนักเรียน</p>',f.querySelectorAll(".member-search-result-item").forEach(x=>{x.addEventListener("click",()=>{o=m.find(w=>w.id===Number(x.dataset.id)),f.innerHTML="",p.value="",i()})})},300)})}n.querySelector("#btn-save-member").addEventListener("click",async()=>{var m;const p=Number(n.querySelector("#member-position-select").value);if(!p){g("กรุณาเลือกตำแหน่ง","warning");return}if(e==="add"&&!o){g("กรุณาค้นหาและเลือกนักเรียน","warning");return}const f=n.querySelector("#member-term-start").value,v=n.querySelector("#btn-save-member");v.disabled=!0,v.textContent="กำลังบันทึก...";try{if(e==="add")await Nn({positionId:p,studentId:o.id,academicYear:P,termStartDate:f,appointedByTeacherId:((m=d.teacher)==null?void 0:m.id)??null});else{const x=n.querySelector("#member-term-end").value;await jn(r.id,{positionId:p,termStartDate:f,termEndDate:x})}g("บันทึกแล้ว ✅","success"),n.remove(),d.members=await Ue().catch(()=>d.members),_()}catch(x){g("บันทึกไม่สำเร็จ: "+S(x),"error"),v.disabled=!1,v.textContent="บันทึก"}})}function ui(){if(d.role!=="teacher"||!d.teacher)return"";if(!d.pendingEndorsements.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างยืนยันในตอนนี้</div>';const e=t=>{var r,a,o,s;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-endorsement-card="${t.id}">
      <div class="flex items-center gap-3">
        ${O(t.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((r=t.students)==null?void 0:r.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${l(((a=t.students)==null?void 0:a.student_code)??"")} · ${l(((o=t.students)==null?void 0:o.main_room)??"")} · สมัคร${l(((s=t.council_positions)==null?void 0:s.position_name)??"—")}</p>
          ${t.gpa_general!=null||t.gpa_religious!=null?`<p class="text-xs text-[var(--muted)] mt-0.5">เกรดสามัญ ${l(t.gpa_general??"—")} · เกรดศาสนา ${l(t.gpa_religious??"—")}</p>`:""}
        </div>
      </div>
      ${t.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(t.motivation)}</p>`:""}
      ${t.intro_video_url?`<a href="${l(t.intro_video_url)}" target="_blank" rel="noopener" class="inline-block text-xs font-bold text-[var(--primary)] hover:underline">🎬 ดูวิดีโอแนะนำตัว</a>`:""}
      <div class="flex flex-wrap gap-1.5">
        ${d.endorsementPhrases.map(n=>`
          <button type="button" class="endorse-phrase-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition"
            data-target="${t.id}" data-phrase="${l(n.phrase)}">${l(n.phrase)}</button>`).join("")}
      </div>
      <textarea class="endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${t.id}" rows="2"
        placeholder="คอมเมนต์ถึงนักเรียนคนนี้ (เลือกจากปุ่มด้านบนแล้วแก้ไขเพิ่มได้)"></textarea>
      <div class="flex gap-2">
        <button type="button" class="btn-endorse-decline flex-1 py-2 rounded-xl border border-[var(--bad-soft-line)] text-[#8a2f22] text-xs font-bold hover:bg-[var(--bad-soft)]" data-id="${t.id}">❌ ไม่รับรอง</button>
        <button type="button" class="btn-endorse-confirm flex-1 py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${t.id}">✅ รับรอง</button>
      </div>
    </div>`};return`<div class="space-y-3">${d.pendingEndorsements.map(e).join("")}</div>`}const Ot={};async function pi(e,t){Ot[t]=await Sn(e,t).catch(()=>[]),_()}function mi(){var o;const e=d.membership[0];if(!e)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภานักเรียนปัจจุบันเท่านั้น</p>';const t=(o=e.council_positions)==null?void 0:o.gender;if(!t)return"";if(Ot[e.id]===void 0)return pi(t,e.id),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const r=Ot[e.id];if(!r.length)return'<div class="bg-[var(--ok-soft)] border border-[var(--ok-soft-line)] rounded-2xl p-6 text-center text-[#106143] text-sm">✅ ไม่มีใบสมัครค้างรับรองในตอนนี้</div>';const a=s=>{var n,i,u,b;return`
    <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2.5 bg-[var(--surface)]" data-peer-endorsement-card="${s.id}">
      <div class="flex items-center gap-3">
        ${O(s.students)}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((n=s.students)==null?void 0:n.full_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${l(((i=s.students)==null?void 0:i.student_code)??"")} · ${l(((u=s.students)==null?void 0:u.main_room)??"")} · สมัคร${l(((b=s.council_positions)==null?void 0:b.position_name)??"—")}</p>
        </div>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-dark)] flex-shrink-0">ขอให้คุณรับรอง</span>
      </div>
      ${s.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(s.motivation)}</p>`:""}
      <textarea class="peer-endorse-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none" data-id="${s.id}" rows="2"
        placeholder="ความเห็นถึงนักเรียนคนนี้ (ไม่บังคับ)"></textarea>
      <button type="button" class="btn-peer-endorse w-full py-2 rounded-xl bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${s.id}">✅ รับรองในนามสภานักเรียน</button>
    </div>`};return`<div class="space-y-3">${r.map(a).join("")}</div>`}async function bi(e){const t=d.membership[0];if(!t)return;const r=document.querySelector(`.peer-endorse-comment[data-id="${e}"]`),a=(r==null?void 0:r.value.trim())||null;try{await In({applicationId:Number(e),memberId:t.id,comment:a}),g("รับรองในนามสภานักเรียนแล้ว ✅","success"),delete Ot[t.id],_()}catch(o){g("บันทึกไม่สำเร็จ: "+S(o),"error")}}async function Br(e,t){const r=document.querySelector(`.endorse-comment[data-id="${e}"]`),a=(r==null?void 0:r.value.trim())??"";if(!a){g("กรุณาใส่คอมเมนต์ก่อนยืนยัน","warning");return}try{t==="confirm"?(await kn({applicationId:Number(e),teacherId:d.teacher.id,comment:a}),g("รับรองใบสมัครแล้ว ✅","success")):(await En({applicationId:Number(e),teacherId:d.teacher.id,comment:a}),g('บันทึกผล "ไม่รับรอง" แล้ว',"success")),await go(),_()}catch(o){g("บันทึกไม่สำเร็จ: "+S(o),"error")}}const Ea={planned:["ยังไม่จัด","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],completed:["เสร็จแล้ว","text-[#106143]","bg-[var(--ok-soft-line)]","border-[var(--ok-soft-line)]"],cancelled:["ยกเลิก","text-[var(--muted-2)]","bg-[var(--surface-2)]","border-[var(--line)]"]},Sa=[["completed","เสร็จแล้ว","border-[var(--ok-soft-line)] bg-[var(--ok-soft)]","text-[var(--ok)]"],["ongoing","กำลังดำเนินการ","border-[var(--primary-soft-line)] bg-[var(--primary-soft)]","text-[var(--primary)]"],["planned","ยังไม่จัด","border-[var(--gold-soft-line)] bg-[var(--gold-soft)]","text-[var(--gold-ink)]"],["cancelled","ยกเลิก","border-[var(--line-soft)] bg-[var(--surface-2)]","text-[var(--muted-2)]"]],Pr={planned:"ongoing",ongoing:"completed"},vi={planned:"▶️ เริ่มดำเนินการ",ongoing:"✅ ทำเครื่องหมายเสร็จแล้ว"};async function Aa(){W=await Vn(P).catch(()=>[]),_()}async function Fr(e){ce[e]=await Wn(e).catch(()=>new Set),_()}function xi(e){return d.isAdmin||d.isChair||d.isCouncilAdvisor?!0:!!(e.owner_member_id&&d.membership.some(t=>t.id===e.owner_member_id))}async function Ia(){Q=await an().catch(()=>[]),_()}async function Ca(e){const[t,r,a,o]=await Promise.all([Kn(e).catch(()=>null),Zn(e).catch(()=>[]),Jn(e).catch(()=>[]),rn("council_activity",e).catch(()=>[])]);Oe[e]=t,mr[e]=r,br[e]=a,et[e]=Object.fromEntries(o.map(s=>[s.student_id,s])),_()}function fi({rule:e,override:t,attendanceRows:r}){var o;if((t==null?void 0:t.override_decision)==="pass")return"pass";if((t==null?void 0:t.override_decision)==="fail")return"fail";if(!e)return"no_rule";const a=r.length;if(e.min_attendance_count&&a<e.min_attendance_count)return"not_eligible";if((o=e.required_dates)!=null&&o.length){const s=new Set(r.map(i=>(i.checked_in_at||"").slice(0,10)));if(e.required_dates.some(i=>!s.has(i)))return"not_eligible"}return"pass"}function _i(){var i,u,b;if(W===null)return Aa(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.canCreateActivities,t=e&&!d.isAdmin&&!d.isChair,r=d.membership[0],a={};W.forEach(c=>{a[c.status]=(a[c.status]??0)+1});const o=`
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
      ${Sa.map(([c,p,f,v])=>`
        <div class="rounded-xl border ${f} p-3 text-center">
          <p class="text-2xl font-bold ${v}">${a[c]??0}</p>
          <p class="text-[0.6875rem] text-[var(--muted)]">${p}</p>
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
            <option value="" ${t&&!((i=r==null?void 0:r.council_positions)!=null&&i.gender)?"selected":""}>สภาชาย+หญิงร่วมกัน</option>
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
            ${d.members.map(c=>{var p,f;return`<option value="${c.id}">${l(((p=c.students)==null?void 0:p.full_name)??"—")} (${l(((f=c.council_positions)==null?void 0:f.position_name)??"—")})</option>`}).join("")}
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
    </div>`:"";if(!W.length)return`${o}${s}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีกิจกรรม</p>`;const n=c=>{var C,y;const[p,f,v,m]=Ea[c.status]??["—","text-[var(--muted)]","bg-[var(--bg-2)]","border-[var(--line)]"],x=d.members.filter($=>{var E;return!c.gender||((E=$.council_positions)==null?void 0:E.gender)===c.gender}),w=ce[c.id],I=xi(c),T=(y=(C=c.council_members)==null?void 0:C.students)==null?void 0:y.full_name;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-activity-card="${c.id}">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${l(c.title)}</p>
            <p class="text-xs text-[var(--muted-2)] mt-0.5">${c.activity_date?new Date(c.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} ${c.gender?"· สภา"+j[c.gender]:""} ${c.owner_text?"· "+l(c.owner_text):""} ${T?"· ผู้รับผิดชอบ "+l(T):""}</p>
            ${c.open_to_general?'<span class="inline-block text-[0.625rem] font-bold px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] mt-1">🙋 เปิดให้นักเรียนทั่วไปเข้าร่วม</span>':""}
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${m} ${v} ${f}">${p}</span>
        </div>
        ${c.detail?`<p class="text-xs text-[var(--ink-2)]">${l(c.detail)}</p>`:""}
        ${I?`
          <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
            <!-- เดิมจำกัดแค่ admin/chair เปลี่ยนสถานะได้ — แต่กิจกรรมที่ค้างสถานะ "planned" ตลอดไป
                 จะไม่ถูกนับใน % เช็คชื่อสำหรับประเมินเลย (นับเฉพาะ ongoing/completed) ผู้รับผิดชอบ
                 ที่ได้รับมอบหมาย (owner) จึงต้องเปลี่ยนสถานะกิจกรรมของตัวเองได้ด้วย ไม่งั้นฟีเจอร์
                 "สร้าง+เช็คชื่อได้เอง" จะใช้ไม่ได้จริงเพราะกิจกรรมไม่มีวันถูกนับผล -->
            ${I&&Pr[c.status]?`<button type="button" class="btn-activity-next text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${c.id}" data-next="${Pr[c.status]}">${vi[c.status]}</button>`:""}
            ${I&&c.status!=="cancelled"&&c.status!=="completed"?`<button type="button" class="btn-activity-cancel text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${c.id}">ยกเลิก</button>`:""}
            <button type="button" class="btn-activity-attendance text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${c.id}">👥 เช็คชื่อสมาชิก</button>
            <button type="button" class="btn-activity-scan text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${c.id}" data-title="${l(c.title)}" data-open-general="${c.open_to_general?"1":""}">📷 สแกน QR เช็คอิน</button>
            <button type="button" class="btn-activity-cert-manage text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-id="${c.id}">🏅 จัดการเกียรติบัตร</button>
          </div>
          <div class="activity-attendance-panel" data-panel-for="${c.id}">
            ${w?`
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-2">
                ${x.map($=>{var A;const E=w.has($.student_id);return`<button type="button" class="btn-checkin flex items-center gap-2 text-xs rounded-[10px] border px-2.5 py-2 text-left ${E?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]"}" data-activity-id="${c.id}" data-student-id="${$.student_id}" ${E?"disabled":""}>
                    <span>${E?"✅":"➕"}</span><span class="truncate">${l(((A=$.students)==null?void 0:A.full_name)??"—")}</span>
                  </button>`}).join("")}
                ${x.length?"":'<p class="text-xs text-[var(--muted-2)] col-span-2">ยังไม่มีสมาชิกสภาที่เกี่ยวข้อง</p>'}
              </div>`:""}
          </div>
          ${ar===c.id?yi(c):""}`:""}
      </div>`};return`${o}${s}<div class="space-y-3">${W.map(n).join("")}</div>`}const gi={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft)] border-[var(--ok-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft)] border-[var(--bad-soft-line)]"],not_eligible:["ยังไม่ครบเงื่อนไข","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],no_rule:["ยังไม่ตั้งเงื่อนไข","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"]};function yi(e){if(Q===null&&Ia(),Oe[e.id]===void 0&&Ca(e.id),Q===null||Oe[e.id]===void 0)return'<div class="mt-2 pt-2 border-t border-dashed border-[var(--line)]"><p class="text-xs text-[var(--muted-2)] text-center py-4">⏳ กำลังโหลด...</p></div>';const t=Oe[e.id],r=mr[e.id]??[],a=br[e.id]??[],o=Object.fromEntries(r.map(c=>[c.student_id,c])),s=et[e.id]??{},n={};a.forEach(c=>{n[c.student_id]||(n[c.student_id]={student:c.students,rows:[]}),n[c.student_id].rows.push(c)});const i=`
    <form class="cert-rule-form space-y-2 bg-[var(--surface-2)] rounded-xl p-3" data-activity-id="${e.id}">
      <p class="text-xs font-bold text-[var(--ink-2)]">🏅 เงื่อนไขการรับเกียรติบัตร</p>
      <select name="template_id" class="w-full border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)]">
        <option value="">— ยังไม่เลือกเทมเพลต —</option>
        ${Q.map(c=>`<option value="${c.id}" ${(t==null?void 0:t.template_id)===c.id?"selected":""}>${l(c.name)}</option>`).join("")}
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
    </form>`,u=Object.keys(n),b=u.map(c=>{const p=Number(c),{student:f,rows:v}=n[p],m=o[p],x=fi({rule:t,override:m,attendanceRows:v}),[w,I]=gi[x],T=s[p];return`
      <div class="rounded-xl border border-[var(--line-soft)] p-2.5 space-y-1.5" data-cert-row="${p}">
        <div class="flex items-center gap-2">
          ${O(f,"w-8 h-10")}
          <div class="min-w-0 flex-1">
            <p class="text-xs font-bold text-[var(--ink)] truncate">${l((f==null?void 0:f.full_name)??"—")}</p>
            <p class="text-[0.625rem] text-[var(--muted-2)]">เข้าร่วม ${v.length} ครั้ง</p>
          </div>
          <span class="flex-shrink-0 text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${I}">${w}</span>
        </div>
        <div class="flex flex-wrap gap-1.5">
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="pass"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)] text-[#106143]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${p}" data-decision="pass">✅ ผ่าน (บังคับ)</button>
          <button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border ${(m==null?void 0:m.override_decision)==="fail"?"border-[var(--bad-soft-line)] bg-[var(--bad-soft)] text-[#8a2f22]":"border-[var(--line)] text-[var(--ink-2)]"}" data-activity-id="${e.id}" data-student-id="${p}" data-decision="fail">❌ ไม่ผ่าน (บังคับ)</button>
          ${m!=null&&m.override_decision?`<button type="button" class="btn-cert-override text-[0.625rem] font-bold px-2 py-1 rounded-[8px] border border-[var(--line)] text-[var(--ink-2)]" data-activity-id="${e.id}" data-student-id="${p}" data-decision="">↺ กลับเป็นอัตโนมัติ</button>`:""}
          ${x==="pass"?T?`<button type="button" class="btn-cert-view text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${p}">🏅 ดูเกียรติบัตร</button>`:`<button type="button" class="btn-cert-issue text-[0.625rem] font-bold px-2 py-1 rounded-[8px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-activity-id="${e.id}" data-student-id="${p}">🏅 ออกเกียรติบัตร</button>`:""}
        </div>
      </div>`}).join("");return`
    <div class="mt-2 pt-2 border-t border-dashed border-[var(--line)] space-y-3">
      ${i}
      <div>
        <p class="text-xs font-bold text-[var(--ink-2)] mb-1.5">รายชื่อผู้เข้าร่วม (${u.length} คน)</p>
        <div class="space-y-1.5">${b||'<p class="text-xs text-[var(--muted-2)] text-center py-3">ยังไม่มีใครเช็คชื่อเข้าร่วมกิจกรรมนี้</p>'}</div>
      </div>
    </div>`}const Yr={info:["แจ้งให้ทราบ","text-[var(--primary-dark)]","bg-[var(--primary-soft-line)]","border-[var(--primary-45)]"],ack:["ต้องกดรับทราบ","text-[var(--gold-ink)]","bg-[var(--gold-soft-line)]","border-[var(--gold-soft-line)]"],urgent:["ด่วน","text-[#8a2f22]","bg-[var(--bad-soft-line)]","border-[var(--bad-soft-line)]"]};async function hi(){jt=await us().catch(()=>[]),_()}async function wi(){pe=await ms(d.student.id).catch(()=>new Set),_()}async function $i(){const[e,t,r,a]=await Promise.all([vs().catch(()=>({})),xs().catch(()=>0),Jt("M").catch(()=>0),Jt("W").catch(()=>0)]);me=e,ht={all:t,M:r,W:a},_()}function ki(){if(jt===null)return hi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';d.role==="student"&&d.student&&pe===null&&wi(),me===null&&$i();const e=d.isAdmin||d.isCouncilAdvisor||d.isChair,t=jt.filter(u=>u.audience==="all"||u.audience===(d.student?ve(d.student.gender):null)||d.isAdmin||d.isChair),r=wt==="all"?t:t.filter(u=>u.type===wt),a=e?'<button type="button" id="btn-open-ann-form" class="w-full py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold mb-4">➕ เพิ่มประกาศ</button>':"",o=e&&$t?`
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
    </div>`:"",n=`
    <div class="flex gap-2 overflow-x-auto pb-1 mb-4">
      ${[["all","ทั้งหมด"],["urgent","ด่วน"],["ack","ต้องรับทราบ"],["info","แจ้งให้ทราบ"]].map(([u,b])=>`
        <button type="button" class="ann-filter-btn flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold border ${wt===u?"bg-[var(--primary)] text-white border-[var(--primary)]":"bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]"}" data-filter="${u}">${b}</button>`).join("")}
    </div>`;if(!r.length)return`${a}${o}${n}<p class="text-sm text-[var(--muted-2)] text-center py-10">ไม่มีประกาศ</p>`;const i=u=>{var I,T;const[b,c,p,f]=Yr[u.type]??Yr.info,v=(I=u.teachers)!=null&&I.full_name?l(u.teachers.full_name)+" (ครู)":(T=u.students)!=null&&T.full_name?l(u.students.full_name)+" (ประธานสภา)":"ระบบ",m=pe==null?void 0:pe.has(u.id),x=u.type==="ack"&&d.role==="student"&&d.student,w=ht?ht[u.audience]??ht.all:null;return`
      <div class="rounded-xl border ${u.pinned?"border-[var(--gold-soft-line)] bg-[var(--gold-soft)]/40":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3.5 space-y-2">
        <div class="flex items-center gap-2 flex-wrap">
          ${u.pinned?'<span class="text-[0.6875rem] font-bold text-[var(--gold-ink)]">📌 ปักหมุด</span>':""}
          <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${f} ${p} ${c}">${b}</span>
          ${u.audience!=="all"?`<span class="text-[0.6875rem] text-[var(--muted-2)]">สภา${j[u.audience]??""}</span>`:""}
        </div>
        <p class="text-sm font-bold text-[var(--ink)]">${l(u.title)}</p>
        ${u.body?`<p class="text-xs text-[var(--ink-2)] whitespace-pre-line">${l(u.body)}</p>`:""}
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${v} · ${new Date(u.created_at).toLocaleDateString("th-TH",{dateStyle:"medium"})}</p>
        ${u.type==="ack"?`<p class="text-[0.6875rem] text-[var(--muted-2)]">✋ รับทราบแล้ว ${(me==null?void 0:me[u.id])??0}${w!=null?" จาก "+w:""} คน</p>`:""}
        ${x?m?'<p class="text-xs font-bold text-[var(--ok)] pt-1 border-t border-[var(--line-soft)]">✅ รับทราบแล้ว</p>':`<button type="button" class="btn-ack-ann text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-id="${u.id}">รับทราบ</button>`:""}
      </div>`};return`${a}${o}${n}<div class="space-y-3">${r.map(i).join("")}</div>`}let te=null,Be=null,Et=null;const Ei={pass:["ผ่าน","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"],improve:["ควรปรับปรุง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],fail:["ไม่ผ่าน","text-[#8a2f22] bg-[var(--bad-soft-line)] border-[var(--bad-soft-line)]"]};async function La(){te=await fs().catch(()=>[]),_()}async function Si(){const e=await ys(P).catch(()=>[]);Be=Object.fromEntries(e.map(t=>[t.member_id,t])),_()}function qa(){return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📐 เกณฑ์การประเมินการปฏิบัติหน้าที่ (รวม ${te.reduce((t,r)=>t+Number(r.weight),0)} คะแนน)</p>
      <div class="space-y-1.5">
        ${te.map(t=>`
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
    </div>`}function Ai(){if(te===null)return La(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Be===null)return Si(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=d.isAdmin||d.role==="teacher",t=te.reduce((n,i)=>n+Number(i.weight),0),r=e?qa():"",a=n=>{var f,v;const i=Be[n.id],[u,b]=i!=null&&i.decision?Ei[i.decision]:["ยังไม่ประเมิน","text-[var(--muted-2)] bg-[var(--bg-2)] border-[var(--line)]"],c=d.role==="student"&&d.student&&n.student_id===d.student.id;if(!e&&!c)return"";const p=Et===n.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3 space-y-2 bg-[var(--surface)]" data-eval-card="${n.id}">
        <div class="flex items-center gap-3">
          ${O(n.students,"w-10 h-12")}
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((f=n.students)==null?void 0:f.full_name)??"—")}</p>
            <p class="text-xs text-[var(--muted)]">${l(((v=n.council_positions)==null?void 0:v.position_name)??"—")}</p>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border ${b}">${u}</span>
            ${(i==null?void 0:i.total_score)!=null?`<p class="text-xs text-[var(--muted-2)] mt-0.5">${i.total_score}/${i.max_score??t}</p>`:""}
          </div>
        </div>
        ${e?`<button type="button" class="btn-toggle-eval text-xs font-bold text-[var(--primary)]" data-id="${n.id}">${p?"▲ ซ่อนแบบประเมิน":i?"✏️ แก้ไขคะแนน":"📝 ให้คะแนน"}</button>`:""}
        ${e&&p?`
          <form class="eval-score-form space-y-2 pt-2 border-t border-[var(--line-soft)]" data-member-id="${n.id}">
            ${te.map(m=>{var x;return`
              <div class="flex items-center gap-2">
                <span class="flex-1 text-xs text-[var(--ink-2)]">${l(m.name)} <span class="text-[var(--muted-2)]">(เต็ม ${m.weight})</span></span>
                <input type="number" min="0" max="${m.weight}" step="0.5" name="c_${m.id}" value="${((x=i==null?void 0:i.scores)==null?void 0:x[m.id])??""}" class="w-20 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center" />
              </div>`}).join("")}
            <select name="decision" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs bg-[var(--surface)]">
              <option value="">— สรุปผล —</option>
              <option value="pass" ${(i==null?void 0:i.decision)==="pass"?"selected":""}>ผ่าน</option>
              <option value="improve" ${(i==null?void 0:i.decision)==="improve"?"selected":""}>ควรปรับปรุง</option>
              <option value="fail" ${(i==null?void 0:i.decision)==="fail"?"selected":""}>ไม่ผ่าน</option>
            </select>
            <textarea name="comment" rows="2" placeholder="ความเห็นผู้ประเมิน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none">${l((i==null?void 0:i.comment)??"")}</textarea>
            <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึกผลประเมิน</button>
          </form>`:""}
        ${(i==null?void 0:i.decision)==="pass"?i.certificate_issued_at?`<button type="button" class="btn-view-cert text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--gold-soft-line)] text-[var(--gold-ink)] hover:bg-[var(--gold-soft)]" data-member-id="${n.id}">🏅 ดูเกียรติบัตร</button>`:e?`<button type="button" class="btn-issue-cert text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--gold)] hover:bg-[var(--gold-ink)] text-white" data-member-id="${n.id}">🏅 ออกเกียรติบัตร</button>`:"":""}
      </div>`},s=d.members.filter(n=>e||d.role==="student"&&d.student&&n.student_id===d.student.id).map(a).filter(Boolean).join("");return!e&&!s?`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">คุณยังไม่ได้เป็นสมาชิกสภาที่มีผลประเมิน</p>`:s?`${r}<div class="space-y-3">${s}</div>`:`${r}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีสมาชิกสภาให้ประเมิน</p>`}function Ii({member:e,evaluation:t,cfg:r}){var u,b;const a=l(((u=e.students)==null?void 0:u.full_name)??"—"),o=l(((b=e.council_positions)==null?void 0:b.position_name)??"—"),s=l(r.council_name||"ระบบสภานักเรียน"),n=l(t.certificate_no||""),i=new Date(t.certificate_issued_at||Date.now()).toLocaleDateString("th-TH",{dateStyle:"long"});return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8">
    <title>เกียรติบัตร ${a}</title>
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
        <p class="name">${a}</p>
        <p style="color:#1d1519;line-height:1.9;max-width:560px;margin:0 auto;">ได้ปฏิบัติหน้าที่ <b>${o}</b> ของ${s} ด้วยความรับผิดชอบ ทุ่มเท และเป็นแบบอย่างที่ดี จึงมอบเกียรติบัตรฉบับนี้ไว้เป็นเกียรติประวัติสืบไป</p>
        <p style="color:#90828a;font-size:12px;margin-top:16px;">ให้ไว้ ณ วันที่ ${i} ${n?"· เลขที่ "+n:""}</p>
        <div class="sign">
          <div>ครูที่ปรึกษาสภานักเรียน</div>
          <div>ผู้อำนวยการโรงเรียน</div>
        </div>
      </div>
    </body></html>`}function zr(e,t){dt(Ii({member:e,evaluation:t,cfg:d.cfg}))}let H=null,ne=null,Ta="FORM_09_1_PROJECT_PROPOSAL",tt=null,rt=null;const Na={draft:["ร่าง","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],pending_advisor:["รอครูที่ปรึกษาประจำฝ่ายรับรอง","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_dept_head:["รอหัวหน้าฝ่ายกิจการนักเรียน","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],pending_director:["รอผู้อำนวยการ","text-[var(--gold-ink)] bg-[var(--gold-soft-line)] border-[var(--gold-soft-line)]"],approved:["อนุมัติแล้ว","text-[#106143] bg-[var(--ok-soft-line)] border-[var(--ok-soft-line)]"]},Ci={FORM_09_ACTIVITY_APPROVAL:"แบบ 09 ขออนุมัติจัดกิจกรรม",FORM_09_1_PROJECT_PROPOSAL:"แบบ 09.1 แบบเสนอโครงการ"},ut=e=>Ci[e]??e??"เอกสารโครงการ";async function Li(){H=await $s(P).catch(()=>[]),_()}async function qi(){rt=d.teacher?await na(d.teacher.id).catch(()=>[]):[],_()}const ye=e=>(e||"").split(`
`).map(t=>t.trim()).filter(Boolean),bt=(e,t)=>ye(e).map(r=>{const a=r.split("|").map(o=>o.trim());for(;a.length<t;)a.push("");return a.slice(0,t)}),vt=e=>(Array.isArray(e)?e:[]).map(t=>t.join(" | ")).join(`
`),Ge=e=>(Array.isArray(e)?e:[]).join(`
`),ja=e=>Number(e||0).toLocaleString("th-TH"),Da=e=>(e.budget_items||[]).reduce((t,r)=>t+(Number(r[1])||0),0),Mt=["title","planArea","projectType","schoolStrategy","educationStandard","responsiblePersons","rationale","objectives","goalsQuantitative","goalsQualitative","workSteps","durationText","locationText","budgetItems","stakeholders","evaluationItems","expectedResults"];function Ti(){return["คุณคือผู้ช่วยแปลงไฟล์ใบเสนอโครงการของโรงเรียน (ไฟล์ที่แนบมาในแชทนี้) ให้เป็นข้อมูล CSV ตามสเปคที่กำหนดไว้เป๊ะๆ ด้านล่างนี้ ห้ามแต่งข้อมูลขึ้นเองถ้าไม่มีในไฟล์ต้นฉบับ — เว้นว่างไว้แทน","","สร้างตาราง CSV จำนวน 1 แถวข้อมูล (แถวหัวตาราง 1 แถว + แถวข้อมูล 1 แถว) โดยแถวหัวตารางต้องเป็นข้อความนี้เป๊ะๆ (ห้ามแปล ห้ามสลับลำดับ ห้ามเว้นคอลัมน์):",Mt.join(","),"","ความหมายแต่ละคอลัมน์และวิธีใส่ข้อมูล:","- title: ชื่อโครงการ","- planArea: แผนงาน","- projectType: ลักษณะโครงการ (เช่น โครงการต่อเนื่อง/โครงการใหม่)","- schoolStrategy: สนองกลยุทธ์โรงเรียน","- educationStandard: สนองมาตรฐานการศึกษา/ตัวชี้วัด","- responsiblePersons: ผู้รับผิดชอบโครงการ — ถ้ามีหลายคน ให้ขึ้นบรรทัดใหม่ทีละคนภายในเซลล์เดียวกัน","- rationale: หลักการและเหตุผล","- objectives: วัตถุประสงค์ — ขึ้นบรรทัดใหม่ทีละข้อภายในเซลล์เดียวกัน","- goalsQuantitative: เป้าหมายเชิงปริมาณ — ขึ้นบรรทัดใหม่ทีละข้อ","- goalsQualitative: เป้าหมายเชิงคุณภาพ — ขึ้นบรรทัดใหม่ทีละข้อ",'- workSteps: วิธีดำเนินงาน — แต่ละขั้นตอนขึ้นบรรทัดใหม่ 1 บรรทัดต่อ 1 ขั้นตอน แต่ละบรรทัดคั่น 4 ค่าด้วย " | " ตามลำดับ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ',"- durationText: ระยะเวลาดำเนินการโครงการโดยรวม","- locationText: สถานที่ดำเนินงาน",'- budgetItems: งบประมาณ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: รายการ | จำนวนเงิน (ตัวเลขล้วน ห้ามมีคอมมาคั่นหลักหรือคำว่า "บาท")','- stakeholders: หน่วยงาน/ผู้เกี่ยวข้อง — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: หน่วยงาน/บุคคล | จำนวน (คน)','- evaluationItems: การประเมินผลความสำเร็จ — แต่ละบรรทัดคั่นด้วย " | " ตามลำดับ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด',"- expectedResults: ผลที่คาดว่าจะได้รับ — ขึ้นบรรทัดใหม่ทีละข้อ","","กฎสำคัญที่ต้องทำตามเป๊ะๆ:",'1. คอลัมน์ไหนมีการขึ้นบรรทัดใหม่ภายในเซลล์ ต้องครอบข้อความทั้งเซลล์ด้วยเครื่องหมายคำพูด " " เสมอ (มาตรฐาน CSV)',"2. มีข้อมูลแค่ 1 แถวข้อมูลเท่านั้น (1 โครงการต่อ 1 ไฟล์)","3. ถ้าหาข้อมูลคอลัมน์ไหนไม่เจอในไฟล์ต้นฉบับ ให้เว้นว่างไว้ ห้ามเดาขึ้นมาเอง","4. ตอบกลับเฉพาะเนื้อหา CSV เท่านั้น ห้ามมีคำอธิบายอื่นปนอยู่ในคำตอบ ให้ครอบคำตอบทั้งหมดด้วย code block รูปแบบนี้: ```csv (เนื้อหา CSV) ```"].join(`
`)}function Ni(e){let t=(e??"").trim();return t.startsWith("```")&&(t=t.replace(/^```[a-zA-Z]*\n?/,"").replace(/```\s*$/,"").trim()),t}function ji(e){const t=[];let r=[],a="",o=!1;const s=e.replace(/\r\n/g,`
`);for(let n=0;n<s.length;n++){const i=s[n];o?i==='"'?s[n+1]==='"'?(a+='"',n++):o=!1:a+=i:i==='"'?o=!0:i===","?(r.push(a),a=""):i===`
`?(r.push(a),t.push(r),r=[],a=""):a+=i}return r.push(a),t.push(r),t.filter(n=>n.some(i=>i.trim()!==""))}function Di(e){const t=Ni(e);if(t.startsWith("{")){const n=JSON.parse(t),i={};for(const u of Mt){if(!(u in n))continue;const b=n[u];i[u]=Array.isArray(b)?b.map(c=>Array.isArray(c)?c.join(" | "):String(c??"")).join(`
`):String(b??"")}return i}const r=ji(t);if(r.length<2)throw new Error("ไม่พบข้อมูล — ต้องมีทั้งแถวหัวตารางและแถวข้อมูล");const a=r[0].map(n=>n.trim()),o=r[1],s={};return a.forEach((n,i)=>{Mt.includes(n)&&(s[n]=(o[i]??"").trim())}),s}function Ri(e){const t=document.getElementById("doc-form");if(!t)return 0;let r=0;for(const a of Mt){if(e[a]===void 0)continue;const o=t.elements[a];o&&(o.value=e[a],r++)}return r}function Oi(){var r;(r=document.getElementById("doc-ai-import-modal"))==null||r.remove();const e=document.createElement("div");e.id="doc-ai-import-modal",e.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.querySelector("#btn-close-doc-ai-import").addEventListener("click",()=>e.remove()),e.addEventListener("click",a=>{a.target===e&&e.remove()}),e.querySelector("#btn-doc-ai-copy-prompt").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Ti()),g("คัดลอกคำสั่งแล้ว — ไปวางในแชท AI พร้อมแนบไฟล์ใบโครงการได้เลย","success")}catch{g("คัดลอกอัตโนมัติไม่ได้ — ลองคัดลอกเองจากคำสั่งที่แสดง","warning")}});const t=a=>{try{const o=Di(a),s=Ri(o);if(!s)throw new Error("ไม่พบข้อมูลที่ตรงกับฟอร์ม ตรวจสอบว่าหัวตาราง CSV ตรงกับคำสั่งที่กำหนด");g(`นำเข้าข้อมูลแล้ว ${s} ช่อง — กรุณาตรวจสอบความถูกต้องก่อนบันทึกร่าง`,"success"),e.remove()}catch(o){g("นำเข้าข้อมูลไม่สำเร็จ: "+S(o),"error")}};e.querySelector("#doc-ai-csv-file").addEventListener("change",async a=>{var s;const o=(s=a.target.files)==null?void 0:s[0];if(o)try{t(await o.text())}finally{a.target.value=""}}),e.querySelector("#btn-doc-ai-import").addEventListener("click",()=>{const a=e.querySelector("#doc-ai-paste").value;if(!a.trim()){g("กรุณาวางคำตอบจาก AI ก่อน","warning");return}t(a)})}function Ur(){return d.isCouncilAdvisor||d.isAdmin||d.isChair}function Mi(e){return e.status==="pending_advisor"&&(d.isAdmin||d.isCouncilAdvisor&&(rt==null?void 0:rt.includes(e.position_id)))}function Bi(e){return e.status==="pending_dept_head"&&(d.isAdmin||d.isStudentAffairsHead)}function Pi(e){return e.status==="pending_director"&&(d.isAdmin||d.isSchoolDirector)}function Fi(){if(!(d.isAdmin||d.role==="teacher"||d.isChair))return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมิน ครู หรือประธานสภาที่ล็อกอินอยู่</p>';if(H===null)return Li(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(d.isCouncilAdvisor&&rt===null)return qi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ne!==null)return Yi();const t=Ur()?`<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <button type="button" class="btn-new-doc py-3 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold" data-form-key="FORM_09_ACTIVITY_APPROVAL">➕ ร่างแบบ 09 ขออนุมัติกิจกรรม</button>
        <button type="button" class="btn-new-doc py-3 rounded-2xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-sm font-bold" data-form-key="FORM_09_1_PROJECT_PROPOSAL">➕ ร่างแบบ 09.1 เสนอโครงการ</button>
      </div>`:"";if(!H.length)return`${t}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีเอกสารโครงการ</p>`;const r=a=>{var i;const[o,s]=Na[a.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],n=d.student&&a.created_by_student_id===d.student.id||d.teacher&&a.created_by_teacher_id===d.teacher.id;return`
      <div class="rounded-xl border border-[var(--line-soft)] p-3.5 space-y-2 bg-[var(--surface)]">
        <div class="flex items-start gap-2">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)]">${l(a.title)}</p>
            <p class="text-xs text-[var(--muted-2)]">${l(ut(a.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(a.form_version)||1} · ${(i=a.council_positions)!=null&&i.position_name?l(a.council_positions.position_name)+" · ":""}${ja(Da(a))} บาท</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full border ${s}">${o}</span>
        </div>
        ${a.status==="draft"&&a.last_rejected_stage?`<p class="text-xs text-[var(--bad)] bg-[var(--bad-soft)] rounded-[10px] p-2.5">↩️ ถูกตีกลับจากขั้น${l({advisor:"ครูที่ปรึกษาประจำฝ่าย",dept_head:"หัวหน้าฝ่ายกิจการนักเรียน",director:"ผู้อำนวยการ"}[a.last_rejected_stage]??a.last_rejected_stage)}${a.last_rejection_comment?": "+l(a.last_rejection_comment):""}</p>`:""}
        <div class="flex flex-wrap gap-2 pt-1 border-t border-[var(--line-soft)]">
          <button type="button" class="btn-view-doc-detail text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">📄 ดูรายละเอียด</button>
          ${a.status==="draft"&&(n||d.isAdmin)?`<button type="button" class="btn-edit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)]" data-id="${a.id}">✏️ แก้ไข</button>`:""}
          ${a.status==="draft"&&(n||d.isAdmin)?`<button type="button" class="btn-submit-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${a.id}">📤 เสนอขออนุมัติ</button>`:""}
          ${Mi(a)||Bi(a)||Pi(a)?`
            <button type="button" class="btn-approve-doc text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white" data-id="${a.id}">✅ อนุมัติ</button>
            <button type="button" class="btn-reject-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${a.id}">❌ ไม่อนุมัติ</button>`:""}
          ${a.status==="approved"?`<button type="button" class="btn-print-doc text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${a.id}">🖨️ พิมพ์เอกสาร</button>${Ur()?`<button type="button" class="btn-new-doc-revision text-xs font-bold px-3 py-1.5 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white" data-id="${a.id}">➕ สร้างฉบับแก้ไข</button>`:""}`:""}
        </div>
      </div>`};return`${t}<div class="space-y-3">${H.map(r).join("")}</div>${zi()}`}function Ra(e){try{return JSON.parse(d.cfg[e]||"[]")}catch{return[]}}function xt({name:e,placeholder:t,configKey:r,value:a,extraClass:o=""}){const s=Ra(r);return s.length?`<select name="${e}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${o}">
    <option value="">— เลือก${l(t)} —</option>
    ${s.map(n=>`<option value="${l(n)}" ${a===n?"selected":""}>${l(n)}</option>`).join("")}
  </select>`:`<input name="${e}" placeholder="${l(t)} (ยังไม่ได้ตั้งค่าตัวเลือกในหน้าตั้งค่า)" value="${l(a??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)] ${o}" />`}function Yi(){const e=ne==="new",t=e?{}:H.find(n=>n.id===ne)??{},r=e?Ta:t.form_key||"FORM_09_1_PROJECT_PROPOSAL",a=ut(r),o=d.isChair&&!d.isCouncilAdvisor&&!d.isAdmin?"council":t.origin??(d.isChair?"council":"teacher");V===null&&$r();const s=V!=null&&V.length?`
    <div>
      <p class="text-[0.6875rem] text-[var(--muted-2)] mb-1">ครูที่ปรึกษาสภานักเรียน (คลิกเพื่อเพิ่ม)</p>
      <div class="flex flex-wrap gap-1.5">
        ${V.map(n=>`<button type="button" class="doc-responsible-chip text-[0.6875rem] px-2.5 py-1 rounded-full border border-[var(--line)] bg-[var(--surface-2)] hover:bg-[var(--primary-soft)] hover:border-[var(--primary-45)] text-[var(--ink-2)] transition" data-name="${l(n.full_name)}">+ ${l(n.full_name)}</button>`).join("")}
      </div>
    </div>`:"";return`
    <div class="flex items-center gap-3 mb-4">
      <button type="button" id="btn-doc-form-back" class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
      <h2 class="text-base font-bold text-[var(--ink)]">${e?"ร่าง":"แก้ไขร่าง"}${l(a)}</h2>
    </div>
    <button type="button" id="btn-doc-ai-import-open" class="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[var(--primary-45)] text-[var(--primary)] hover:bg-[var(--primary-soft)] text-xs font-bold mb-3">🤖 ใช้ AI ช่วยกรอกจากไฟล์ใบโครงการเดิม</button>
    <form id="doc-form" class="space-y-3" data-origin="${o}" data-form-key="${l(r)}">
      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">ข้อมูลทั่วไป</p>
        <p class="text-xs font-bold text-[var(--primary)] mb-1">${l(a)} · ฉบับร่าง v${Number(t.form_version)||1}</p>
        <input name="title" required placeholder="ชื่อโครงการหรือชื่อกิจกรรม" value="${l(t.title??"")}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <div class="grid grid-cols-2 gap-2">
          ${xt({name:"planArea",placeholder:"แผนงาน",configKey:"council_doc_plan_areas",value:t.plan_area})}
          ${xt({name:"projectType",placeholder:"ลักษณะโครงการ",configKey:"council_doc_project_types",value:t.project_type})}
        </div>
        ${xt({name:"schoolStrategy",placeholder:"สนองกลยุทธ์โรงเรียน",configKey:"council_doc_school_strategies",value:t.school_strategy,extraClass:"w-full"})}
        ${xt({name:"educationStandard",placeholder:"สนองมาตรฐานการศึกษา/ตัวชี้วัด",configKey:"council_doc_education_standards",value:t.education_standard,extraClass:"w-full"})}
        ${s}
        <textarea name="responsiblePersons" rows="2" placeholder="ผู้รับผิดชอบโครงการ (บรรทัดละ 1 ชื่อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ge(t.responsible_persons))}</textarea>
        <div>
          <label class="block text-xs font-semibold text-[var(--muted)] mb-1">ฝ่ายที่รับผิดชอบ ${o==="council"?'<span class="text-[var(--bad)]">*</span>':""}</label>
          <select name="positionId" ${o==="council"?"required":""} class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
            <option value="">— ไม่ระบุ —</option>
            ${d.positions.map(n=>`<option value="${n.id}" ${t.position_id===n.id?"selected":""}>${l(n.position_name)} (สภา${l(j[n.gender]??"")})</option>`).join("")}
          </select>
          ${o==="council"?'<p class="text-[0.6875rem] text-[var(--muted-2)] mt-1">โครงการที่สภาริเริ่มเองต้องระบุฝ่าย เพื่อส่งให้ครูที่ปรึกษาประจำฝ่ายนั้นตรวจก่อน</p>':""}
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หลักการ วัตถุประสงค์ เป้าหมาย</p>
        <textarea name="rationale" rows="3" placeholder="หลักการและเหตุผล" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(t.rationale??"")}</textarea>
        <textarea name="objectives" rows="2" placeholder="วัตถุประสงค์ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ge(t.objectives))}</textarea>
        <textarea name="goalsQuantitative" rows="2" placeholder="เป้าหมายเชิงปริมาณ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ge(t.goals_quantitative))}</textarea>
        <textarea name="goalsQualitative" rows="2" placeholder="เป้าหมายเชิงคุณภาพ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ge(t.goals_qualitative))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">วิธีดำเนินงาน</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: ขั้นตอน/กิจกรรม | ระยะเวลา | งบประมาณ | ผู้รับผิดชอบ</p>
        <textarea name="workSteps" rows="4" placeholder="เสนอโครงการต่อผู้บริหาร | ธ.ค.2568 | - | นายเปาซี" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(vt(t.work_steps))}</textarea>
        <div class="grid grid-cols-2 gap-2">
          <input name="durationText" placeholder="ระยะเวลาดำเนินการ" value="${l(t.duration_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          <input name="locationText" placeholder="สถานที่ดำเนินงาน" value="${l(t.location_text??"")}" class="border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        </div>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">งบประมาณ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: รายการ | จำนวนเงิน(บาท) — รวมยอดคำนวณอัตโนมัติ</p>
        <textarea name="budgetItems" rows="4" placeholder="ค่าอาหาร 115 คน x 5 มื้อ | 17250" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(vt(t.budget_items))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">หน่วยงาน/ผู้เกี่ยวข้อง</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 รายการ รูปแบบ: หน่วยงาน/บุคคล | จำนวน(คน)</p>
        <textarea name="stakeholders" rows="3" placeholder="ครูที่ปรึกษา | 9" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(vt(t.stakeholders))}</textarea>
      </div>

      <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
        <p class="text-sm font-bold text-[var(--ink-2)]">การประเมินผลความสำเร็จ</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">บรรทัดละ 1 แถว รูปแบบ: เป้าหมาย | ตัวบ่งชี้ความสำเร็จ | วิธีวัดและประเมินผล | เครื่องมือวัด</p>
        <textarea name="evaluationItems" rows="4" placeholder="ผู้เรียนพัฒนาศักยภาพผู้นำ | ร้อยละ 80 | ประเมินจากแบบสังเกตการณ์ | แบบสังเกตการณ์" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(vt(t.evaluation_items))}</textarea>
        <textarea name="expectedResults" rows="2" placeholder="ผลที่คาดว่าจะได้รับ (บรรทัดละ 1 ข้อ)" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ge(t.expected_results))}</textarea>
      </div>

      <div class="sticky bottom-0 -mx-4 px-4 py-3 bg-[var(--surface)] border-t border-[var(--line)] flex gap-2">
        <button type="button" id="btn-doc-form-cancel" class="flex-1 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ยกเลิก</button>
        <button type="submit" class="flex-1 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">💾 บันทึกร่าง</button>
      </div>
    </form>`}function Oa(e,t){var n;const r=l(t.council_name||"ระบบสภานักเรียน"),a=(i,u)=>u!=null&&u.length?`
    <table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px;">
      <thead><tr>${i.map(b=>`<th style="border:1px solid #ccc;padding:6px;background:#f8f4f4;">${l(b)}</th>`).join("")}</tr></thead>
      <tbody>${u.map(b=>`<tr>${b.map(c=>`<td style="border:1px solid #ccc;padding:6px;">${l(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`:"",o=i=>i!=null&&i.length?`<ol style="margin:4px 0;padding-left:20px;">${i.map(u=>`<li>${l(u)}</li>`).join("")}</ol>`:"—",s='style="display:block;margin-bottom:3px;"';return`
    ${t.council_logo_url?`<img src="${l(t.council_logo_url)}" style="height:64px;object-fit:contain;display:block;margin:0 auto 8px;" />`:""}
    <h1 style="text-align:center;font-size:20px;margin-bottom:2px;">${l(ut(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))}</h1>
    <p style="text-align:center;color:#6e5f65;font-size:13px;margin-bottom:20px;">${r} · ปีการศึกษา ${e.academic_year}</p>
    <div style="margin-bottom:12px;"><b ${s}>ชื่อโครงการ</b>${l(e.title)}</div>
    <div style="margin-bottom:12px;"><b ${s}>แผนงาน</b>${l(e.plan_area||"—")} &nbsp;·&nbsp; <b style="display:inline">ลักษณะโครงการ</b> ${l(e.project_type||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>สนองกลยุทธ์โรงเรียน</b>${l(e.school_strategy||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>สนองมาตรฐานการศึกษา/ตัวชี้วัด</b>${l(e.education_standard||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>ผู้รับผิดชอบโครงการ</b>${o(e.responsible_persons)}</div>
    <div style="margin-bottom:12px;"><b ${s}>ฝ่ายที่รับผิดชอบ</b>${l(((n=e.council_positions)==null?void 0:n.position_name)||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>1. หลักการและเหตุผล</b>${l(e.rationale||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>2. วัตถุประสงค์</b>${o(e.objectives)}</div>
    <div style="margin-bottom:12px;"><b ${s}>3. เป้าหมาย</b>
      <div style="margin-top:4px;"><i>3.1 เชิงปริมาณ</i>${o(e.goals_quantitative)}</div>
      <div><i>3.2 เชิงคุณภาพ</i>${o(e.goals_qualitative)}</div>
    </div>
    <div style="margin-bottom:12px;"><b ${s}>4. วิธีดำเนินงาน</b>${a(["ขั้นตอน/กิจกรรม","ระยะเวลา","งบประมาณ","ผู้รับผิดชอบ"],e.work_steps)}</div>
    <div style="margin-bottom:12px;"><b ${s}>5. ระยะเวลาดำเนินการ</b>${l(e.duration_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>6. สถานที่ดำเนินงาน</b>${l(e.location_text||"—")}</div>
    <div style="margin-bottom:12px;"><b ${s}>7. งบประมาณ</b>${a(["รายการ","จำนวนเงิน (บาท)"],e.budget_items)}<b>รวมเป็นเงิน ${ja(Da(e))} บาท</b></div>
    <div style="margin-bottom:12px;"><b ${s}>8. หน่วยงาน/ผู้เกี่ยวข้อง</b>${a(["หน่วยงาน/บุคคล","จำนวน (คน)"],e.stakeholders)}</div>
    <div style="margin-bottom:12px;"><b ${s}>9. การประเมินผลความสำเร็จ</b>${a(["เป้าหมาย","ตัวบ่งชี้ความสำเร็จ","วิธีวัดและประเมินผล","เครื่องมือวัด"],e.evaluation_items)}</div>
    <div style="margin-bottom:12px;"><b ${s}>10. ผลที่คาดว่าจะได้รับ</b>${o(e.expected_results)}</div>
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
    </div>`}function zi(){if(!tt)return"";const e=H.find(o=>o.id===tt);if(!e)return"";const[t,r]=Na[e.status]??["—","text-[var(--muted)] bg-[var(--bg-2)] border-[var(--line)]"],a=[e.advisor_decided_at?`✅ ครูที่ปรึกษาประจำฝ่ายรับรองแล้ว${e.advisor_comment?" — "+l(e.advisor_comment):""}`:"",e.dept_head_decided_at?`✅ หัวหน้าฝ่ายกิจการนักเรียนอนุมัติแล้ว${e.dept_head_comment?" — "+l(e.dept_head_comment):""}`:"",e.director_decided_at?`✅ ผู้อำนวยการอนุมัติแล้ว${e.director_comment?" — "+l(e.director_comment):""}`:""].filter(Boolean);return`
    <div class="fixed inset-0 z-[90] bg-[var(--surface)] flex flex-col" id="doc-detail-backdrop">
      <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-[var(--line)] flex-shrink-0">
        <div class="min-w-0">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(e.title)}</p>
          <p class="text-[0.625rem] text-[var(--muted-2)] mt-0.5">${l(ut(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} · v${Number(e.form_version)||1} · แก้ไขครั้งที่ ${Number(e.document_revision)||1}</p>
          <span class="text-[0.625rem] font-bold px-2 py-0.5 rounded-full border ${r} inline-block mt-0.5">${t}</span>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <button type="button" id="btn-doc-detail-print" class="text-xs font-bold px-3 py-1.5 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]">🖨️ พิมพ์</button>
          <button type="button" id="btn-doc-detail-close" class="text-[var(--muted)] hover:text-[var(--bad)] text-2xl leading-none">✕</button>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto p-5">
        <div style="font-family:'Sarabun',sans-serif;line-height:1.8;color:#1d1519;max-width:800px;margin:0 auto;">
          ${Oa(e,d.cfg)}
          ${a.length?`<div style="margin-top:24px;padding-top:16px;border-top:1px dashed #ccc;"><b style="display:block;margin-bottom:6px;font-size:13px;">ประวัติการอนุมัติ</b><div style="font-size:13px;color:#106143;">${a.map(o=>`<p style="margin-bottom:2px;">${o}</p>`).join("")}</div></div>`:""}
        </div>
      </div>
    </div>`}function Ui(e,t){return`<!DOCTYPE html><html lang="th"><head><meta charset="UTF-8"><title>${l(ut(e.form_key||"FORM_09_1_PROJECT_PROPOSAL"))} ${l(e.title)}</title>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sarabun', sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.8; color: #1d1519; }
      @media print { body { padding: 0; } }
    </style></head><body>
      ${Oa(e,t)}
    </body></html>`}function Vr(e){dt(Ui(e,d.cfg))}const Gr=e=>{if(!e)return"";const t=new Date(e);if(isNaN(t))return"";const r=a=>String(a).padStart(2,"0");return`${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}T${r(t.getHours())}:${r(t.getMinutes())}`};function Vi(){const e=d.cfg;return`
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
            <input type="datetime-local" name="council_apply_opens_at" value="${l(Gr(e.council_apply_opens_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
          </div>
          <div>
            <label class="block text-xs font-medium text-[var(--muted)] mb-1">ปิดรับสมัครเมื่อ</label>
            <input type="datetime-local" name="council_apply_closes_at" value="${l(Gr(e.council_apply_closes_at))}" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
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
    </form>`}function Gi(){const e={M:d.positions.filter(i=>i.gender==="M").sort((i,u)=>i.sort_order-u.sort_order),W:d.positions.filter(i=>i.gender==="W").sort((i,u)=>i.sort_order-u.sort_order)},t=i=>{const u=i==="M"?"👦 ฝ่ายชาย":"👧 ฝ่ายหญิง",b=e[i].map(c=>`
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
        <form class="position-add-form flex gap-2 mt-3" data-gender="${i}">
          <input name="position_name" placeholder="เพิ่มตำแหน่งใหม่" class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
          <input name="seats_count" type="number" min="1" value="1" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-2 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
          <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
        </form>
      </div>`},r=[],a=new Set;[...e.M,...e.W].forEach(i=>{a.has(i.position_name)||(a.add(i.position_name),r.push(i.position_name))});const o=e.M.reduce((i,u)=>i+Number(u.seats_count),0),s=e.W.reduce((i,u)=>i+Number(u.seats_count),0),n=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mt-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📊 สรุปรวมจำนวนที่นั่งทั้งสภา</p>
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="text-left text-[var(--muted)]"><th class="py-1.5 pr-2">ตำแหน่ง</th><th class="py-1.5 px-2 text-center">ชาย</th><th class="py-1.5 px-2 text-center">หญิง</th><th class="py-1.5 pl-2 text-center">รวม</th></tr></thead>
          <tbody>
            ${r.map(i=>{var c,p;const u=((c=e.M.find(f=>f.position_name===i))==null?void 0:c.seats_count)??0,b=((p=e.W.find(f=>f.position_name===i))==null?void 0:p.seats_count)??0;return`<tr class="border-t border-[var(--line-soft)]"><td class="py-1.5 pr-2 text-[var(--ink-2)]">${l(i)}</td><td class="py-1.5 px-2 text-center">${u}</td><td class="py-1.5 px-2 text-center">${b}</td><td class="py-1.5 pl-2 text-center font-bold text-[var(--primary)]">${u+b}</td></tr>`}).join("")}
            <tr class="border-t-2 border-[var(--line)] font-bold"><td class="py-1.5 pr-2 text-[var(--ink)]">รวมทั้งหมด</td><td class="py-1.5 px-2 text-center">${o}</td><td class="py-1.5 px-2 text-center">${s}</td><td class="py-1.5 pl-2 text-center text-[var(--primary)]">${o+s}</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;return`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${t("M")}${t("W")}</div>${n}`}function Hi(){if(K===null)return xr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(ue===null)return xo(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(te===null)return La(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(Q===null)return Ia(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=K.reduce((b,c)=>b+Number(c.weight),0),t=(e/2).toFixed(1),r=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎤 หัวข้อสัมภาษณ์ (รวม ${e} คะแนน · ผ่านเกณฑ์ที่ ≥ ${t})</p>
      <div class="space-y-1.5 mt-2">
        ${K.map(b=>`
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
    </div>`,a=(()=>{try{return JSON.parse(d.cfg.council_video_brief||"[]")}catch{return[]}})(),o=`
    <form id="settings-video-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🎬 วิดีโอแนะนำตัว</p>
      <div class="flex items-center gap-2">
        <span class="text-xs text-[var(--muted)]">ความยาวไม่เกิน</span>
        <input name="council_video_max_minutes" type="number" min="1" value="${l(d.cfg.council_video_max_minutes||"3")}" class="w-16 border border-[var(--line)] rounded-[10px] px-2 py-1.5 text-xs text-center bg-[var(--surface)] text-[var(--ink)]" />
        <span class="text-xs text-[var(--muted)]">นาที</span>
      </div>
      <label class="block text-xs font-medium text-[var(--muted)]">หัวข้อที่ต้องพูด (บรรทัดละ 1 หัวข้อ)</label>
      <textarea name="council_video_brief" rows="5" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l(a.join(`
`))}</textarea>
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,s=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">💬 ข้อความสำเร็จรูปของครูที่ปรึกษาสามัญ</p>
      <div class="space-y-1.5">
        ${ue.map(b=>`
          <div class="flex items-center gap-2 text-xs">
            <span class="flex-1 text-[var(--ink-2)]">${l(b.phrase)}</span>
            <button type="button" class="btn-remove-phrase text-[var(--bad)] hover:text-[#8a2f22]" data-id="${b.id}">✕</button>
          </div>`).join("")||'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีข้อความ</p>'}
      </div>
      <form id="phrase-form" class="flex gap-2 mt-3">
        <input name="phrase" placeholder="เพิ่มข้อความใหม่" class="flex-1 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" required />
        <button type="submit" class="px-3 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่ม</button>
      </form>
    </div>`,n=(b,c)=>`
    <div>
      <label class="block text-xs font-medium text-[var(--muted)] mb-1">${b} (บรรทัดละ 1 รายการ)</label>
      <textarea name="${c}" rows="3" class="w-full border border-[var(--line)] rounded-xl px-3 py-2 text-xs resize-none bg-[var(--surface)] text-[var(--ink)]">${l(Ra(c).join(`
`))}</textarea>
    </div>`,i=`
    <form id="settings-doc-options-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-3">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">📄 ตัวเลือกฟอร์มเอกสารโครงการ</p>
      <p class="text-[0.6875rem] text-[var(--muted-2)] -mt-2">ใช้เป็นตัวเลือกในฟอร์มร่างเอกสารโครงการ (ถ้าไม่ตั้งค่าไว้ ฟอร์มจะให้พิมพ์เองแทน)</p>
      ${n("แผนงาน","council_doc_plan_areas")}
      ${n("ลักษณะโครงการ","council_doc_project_types")}
      ${n("สนองกลยุทธ์โรงเรียน","council_doc_school_strategies")}
      ${n("สนองมาตรฐานการศึกษา/ตัวชี้วัด","council_doc_education_standards")}
      <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">บันทึก</button>
    </form>`,u=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🏅 เทมเพลตเกียรติบัตรกิจกรรม</p>
      <div class="space-y-1.5 mb-3">
        ${Q.map(b=>{var f;const c=(f=b.layout)==null?void 0:f.background,p=c?c.type==="image"?c.imageUrl:null:b.type==="custom"?b.background_image_url:null;return`
          <div class="flex items-center gap-2 text-xs">
            ${p?`<img src="${l(p)}" class="w-10 h-7 object-cover rounded border border-[var(--line)] flex-shrink-0" />`:`<span class="flex-shrink-0">${l((Yt[b.preset_key]??"🏅").split(" ")[0])}</span>`}
            <span class="flex-1 text-[var(--ink-2)] truncate">${l(b.name)} ${b.type==="preset"?"· "+l(Yt[b.preset_key]??b.preset_key):"· อัปโหลดเอง"}</span>
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
          ${Object.entries(Yt).map(([b,c])=>`<option value="${b}">${l(c)}</option>`).join("")}
        </select>
        <input type="file" name="background_image" id="cert-template-file-input" accept="image/*" class="hidden w-full text-xs" />
        <button type="submit" class="w-full py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">เพิ่มเทมเพลต</button>
      </form>
    </div>`;return`${r}${o}${qa()}${s}${i}${u}`}function Wi(){const e=vr();return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-1">🧩 เปิด/ปิดโมดูลย่อย</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">ปิดแล้วเมนู/หน้านั้นจะหายไปทั้งระบบทันที (บันทึกอัตโนมัติเมื่อกดสวิตช์)</p>
      ${Object.entries(vo).map(([t,r])=>`
        <label class="flex items-center justify-between gap-3 py-2 border-b border-[var(--line-soft)] last:border-0">
          <span class="text-sm text-[var(--ink-2)]">${l(r)}</span>
          <input type="checkbox" class="module-toggle w-5 h-5 flex-shrink-0" data-key="${t}" ${e[t]!==!1?"checked":""} />
        </label>`).join("")}
    </div>`}const it={},at={},Ee={};async function Hr(e){const[t,r,a]=await Promise.all([Pn(e).catch(()=>[]),Fn(e).catch(()=>[]),zn(e).catch(()=>[])]);it[e]=t,at[e]=r,Ee[e]=a,_()}function Ji(){var o;const e=d.isChair,t=d.isAdmin||d.isCouncilAdvisor;if(!e&&!t)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาหรือครูที่ปรึกษาสภา/แอดมินเท่านั้น</p>';const r='<p class="text-sm text-[var(--muted-2)] text-center py-10">⏳ กำลังโหลด...</p>';let a="";if(e){const s=ve((o=d.student)==null?void 0:o.gender);if(s&&it[s]===void 0)Hr(s),a+=r;else if(s){const n=it[s],i=at[s]||[],u=Ee[s]||[],b=new Set(u.map(p=>p.application_id)),c=i.filter(p=>!b.has(p.id));a+=`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📋 เสนอคณะทำงาน — สภา${j[s]}</p>
          ${n.length?c.length?`
          <form id="nominate-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 space-y-2.5">
            <select name="positionId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกตำแหน่งที่ว่าง —</option>
              ${n.map(p=>`<option value="${p.id}">${l(p.position_name)}</option>`).join("")}
            </select>
            <select name="applicationId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
              <option value="">— เลือกผู้ที่ผ่านสัมภาษณ์ —</option>
              ${c.map(p=>{var f,v,m;return`<option value="${p.id}">${l(((f=p.students)==null?void 0:f.full_name)??"—")}${((m=(v=p.council_interviews)==null?void 0:v[0])==null?void 0:m.score)!=null?" (คะแนน "+p.council_interviews[0].score+")":""}</option>`}).join("")}
            </select>
            <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">เสนอต่อครูที่ปรึกษาสภา</button>
          </form>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ยังไม่มีผู้ผ่านสัมภาษณ์ที่รอเสนอ</p>':'<p class="text-xs text-[var(--muted-2)] text-center py-6 bg-[var(--surface)] rounded-2xl border border-[var(--line-soft)]">ตำแหน่งเต็มหมดแล้ว</p>'}
        </div>`,u.length&&(a+=`
          <div class="mb-4">
            <p class="text-xs font-bold text-[var(--muted-2)] mb-2">รอครูที่ปรึกษาสภาอนุมัติ</p>
            <div class="space-y-2">${u.map(p=>{var f,v,m,x;return`
              <div class="rounded-xl border border-[var(--gold-soft-line)] bg-[var(--gold-soft)] p-3 flex items-center gap-3">
                ${O((f=p.council_applications)==null?void 0:f.students)}
                <div class="min-w-0 flex-1">
                  <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((m=(v=p.council_applications)==null?void 0:v.students)==null?void 0:m.full_name)??"—")}</p>
                  <p class="text-xs text-[var(--muted)]">${l(((x=p.council_positions)==null?void 0:x.position_name)??"—")}</p>
                </div>
              </div>`}).join("")}</div>
          </div>`)}}return t&&(a+=["M","W"].map(s=>{if(Ee[s]===void 0)return Hr(s),r;const n=Ee[s];return n.length?`
        <div class="mb-4">
          <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🗳️ รออนุมัติ — สภา${j[s]}</p>
          <div class="space-y-2.5">
            ${n.map(i=>{var u,b,c,p,f;return`
              <div class="rounded-xl border border-[var(--line-soft)] p-3 bg-[var(--surface)] space-y-2" data-nom-card="${i.id}">
                <div class="flex items-center gap-3">
                  ${O((u=i.council_applications)==null?void 0:u.students)}
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((c=(b=i.council_applications)==null?void 0:b.students)==null?void 0:c.full_name)??"—")}</p>
                    <p class="text-xs text-[var(--muted)]">${l(((p=i.council_positions)==null?void 0:p.position_name)??"—")}</p>
                  </div>
                </div>
                ${(f=i.council_applications)!=null&&f.motivation?`<p class="text-xs text-[var(--ink-2)] bg-[var(--surface-2)] rounded-[10px] p-2.5">${l(i.council_applications.motivation)}</p>`:""}
                <textarea class="nom-comment w-full border border-[var(--line)] rounded-xl px-3 py-2 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]" data-id="${i.id}" rows="2" placeholder="ความเห็น (ไม่บังคับถ้าอนุมัติ, บังคับถ้าไม่อนุมัติ)"></textarea>
                <div class="flex gap-2">
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] text-xs font-bold" data-id="${i.id}" data-approve="false">❌ ไม่อนุมัติ</button>
                  <button type="button" class="btn-decide-nomination flex-1 py-2 rounded-[10px] bg-[var(--ok)] hover:bg-[#106143] text-white text-xs font-bold" data-id="${i.id}" data-approve="true">✅ อนุมัติ</button>
                </div>
              </div>`}).join("")}
          </div>
        </div>`:""}).join("")),a||'<p class="text-sm text-[var(--muted-2)] text-center py-16">ยังไม่มีรายการรอดำเนินการ</p>'}const Qi={general:Vi,positions:Gi,criteria:Hi,modules:Wi};function Ki(){return d.isAdmin||d.isCouncilAdvisor?(Nr.some(e=>e.id===Je)||(Je="general"),`
    <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
      ${Nr.map(e=>`
        <button type="button" class="settings-tab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${e.id===Je?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="${e.id}">${l(e.label)}</button>`).join("")}
    </div>
    <div>${Qi[Je]()}</div>`):'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินหรือครูที่ปรึกษาสภาเท่านั้น</p>'}let St="duty",ee=null,ze=null,$e=null;const Wr=["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"];function Ma(){const e=new Date,t=e.getDay(),r=(t===0?-6:1)-t,a=new Date(e);return a.setDate(e.getDate()+r),a.setHours(0,0,0,0),a.toISOString().slice(0,10)}async function Xi(){const e=d.membership[0];if(!e){ee=[],ze=new Set,$e=[],_();return}const[t,r]=await Promise.all([ts(e.id).catch(()=>[]),os(e.id).catch(()=>[])]);ee=t,$e=r,ze=await rs(t.map(a=>a.id),Ma()).catch(()=>new Set),_()}function Zi(){const e=d.membership[0];return e?ee===null?(Xi(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>'):`${`
    <div class="flex gap-2 mb-4">
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${St==="duty"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="duty">หน้าที่</button>
      <button type="button" class="myduty-subtab-btn flex-1 py-2.5 rounded-full text-sm font-bold transition ${St==="work"?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}" data-tab="work">งานของฉัน</button>
    </div>`}${St==="duty"?el(e):tl()}`:'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>'}function el(e){var a;const t=ee.filter(o=>ze.has(o.id)).length,r=ee.length?Math.round(t/ee.length*100):0;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <div class="flex items-center gap-3">
        ${O(d.student,"w-14 h-18")}
        <div class="min-w-0 flex-1">
          <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((a=e.council_positions)==null?void 0:a.position_name)??"—")}</p>
          <p class="text-xs text-[var(--muted)]">${e.source==="elected"?"🗳️ มาจากการเลือกตั้ง":"✅ ได้รับการแต่งตั้ง"} · ${e.term_start_date?new Date(e.term_start_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"—"}</p>
        </div>
      </div>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <div class="flex items-center justify-between mb-2">
        <p class="text-sm font-bold text-[var(--ink-2)]">📅 รูทีนประจำสัปดาห์นี้</p>
        <span class="text-xs font-bold text-[var(--primary)]">${t}/${ee.length}</span>
      </div>
      <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-3"><div class="h-full bg-[var(--primary)]" style="width:${r}%"></div></div>
      ${ee.length?`<div class="space-y-1.5">${ee.map(o=>{const s=ze.has(o.id);return`
        <label class="flex items-center gap-2.5 rounded-xl border ${s?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)]"} p-2.5">
          <input type="checkbox" class="routine-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${o.id}" ${s?"checked":""} />
          <div class="min-w-0 flex-1">
            <p class="text-sm ${s?"text-[#106143] line-through":"text-[var(--ink-2)]"} truncate">${l(o.task)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${o.day_of_week!=null?Wr[o.day_of_week]:""}${o.time_range?" · "+l(o.time_range):""}${o.location?" · "+l(o.location):""}</p>
          </div>
          <button type="button" class="btn-remove-routine text-[var(--bad)] text-lg leading-none flex-shrink-0" data-id="${o.id}">✕</button>
        </label>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มีรูทีน — เพิ่มได้ด้านล่าง</p>'}
      <form id="routine-add-form" class="grid grid-cols-2 gap-2 mt-3">
        <select name="dayOfWeek" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]">
          <option value="">— วัน (ไม่บังคับ) —</option>
          ${Wr.map((o,s)=>`<option value="${s}">${o}</option>`).join("")}
        </select>
        <input name="timeRange" placeholder="เวลา เช่น 07:00-07:20" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="location" placeholder="สถานที่" class="border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <input name="task" required placeholder="งานที่ต้องทำ" class="col-span-2 border border-[var(--line)] rounded-[10px] px-2.5 py-2 text-xs bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="col-span-2 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold">+ เพิ่มรูทีน</button>
      </form>
    </div>`}function tl(){const e=$e.filter(a=>a.status!=="done"),t=$e.filter(a=>a.status==="done"),r=a=>`
    <label class="flex items-center gap-2.5 rounded-xl border ${a.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3">
      <input type="checkbox" class="assignment-check w-[1.125rem] h-[1.125rem] flex-shrink-0" data-id="${a.id}" ${a.status==="done"?"checked":""} />
      <div class="min-w-0 flex-1">
        <p class="text-sm ${a.status==="done"?"text-[#106143] line-through":"text-[var(--ink)]"}">${l(a.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${a.due_date?"กำหนดส่ง "+new Date(a.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${a.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${a.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
    </label>`;return`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 text-center">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">🎫 QR เช็คอินกิจกรรมของฉัน</p>
      <p class="text-xs text-[var(--muted-2)] mb-3">แสดงให้ผู้ดูแลกิจกรรมสแกนเพื่อเช็คอิน</p>
      <button type="button" id="btn-show-my-council-qr" class="px-6 py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">แสดง QR ของฉัน</button>
    </div>
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📋 งานที่ได้รับมอบหมาย (${t.length}/${$e.length} เสร็จแล้ว)</p>
      ${$e.length?`<div class="space-y-2">${[...e,...t].map(r).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-6">ยังไม่มีงานที่ได้รับมอบหมาย</p>'}
    </div>`}function rl(e){var u;(u=document.getElementById("council-my-qr-modal"))==null||u.remove();const t=document.createElement("div");t.id="council-my-qr-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
    <div class="bg-[var(--surface)] rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center">
      <p class="text-lg font-bold text-[var(--ink)]">🎫 QR เช็คอินของฉัน</p>
      <p class="text-sm font-semibold text-[var(--primary)] mt-1">${l(e.full_name)}</p>
      <div class="w-56 h-56 mx-auto my-4 bg-[var(--surface-2)] border border-[var(--line)] rounded-2xl flex items-center justify-center">
        <canvas id="council-my-qr-canvas" class="w-48 h-48"></canvas>
      </div>
      <p class="text-xs text-[var(--muted-2)]">หมดอายุใน <span id="council-qr-timer">60</span> วินาที (สร้างใหม่อัตโนมัติ)</p>
      <button type="button" id="btn-close-council-qr" class="w-full mt-4 py-2.5 rounded-xl border border-[var(--line)] text-sm text-[var(--ink-2)]">ปิด</button>
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-my-qr-canvas"),a=async()=>{const b=`SQ:${e.student_code}:${Math.floor(Date.now()/1e3)}`;try{await sn.toCanvas(r,b,{width:190,margin:1.5,color:{dark:"#111827",light:"#FFFFFF"}})}catch{}};a();let o=60;const s=t.querySelector("#council-qr-timer"),n=setInterval(()=>{o-=1,s&&(s.textContent=String(o)),o<=0&&(o=60,a())},1e3),i=()=>{clearInterval(n),t.remove()};t.querySelector("#btn-close-council-qr").addEventListener("click",i),t.addEventListener("click",b=>{b.target===t&&i()})}let Bt=null;async function al(){var t;const e=d.membership[0];if(!e||!d.student){Bt={activities:[],myAttendance:[]},_();return}Bt=await Hn(d.student.id,(t=e.council_positions)==null?void 0:t.gender,P).catch(()=>({activities:[],myAttendance:[]})),_()}const nl={planned:["ยังไม่จัด","text-[var(--gold-ink)]"],ongoing:["กำลังดำเนินการ","text-[var(--primary)]"],completed:["เสร็จแล้ว","text-[#106143]"],cancelled:["ยกเลิก","text-[var(--muted-2)]"]};function sl(){if(!d.membership[0])return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะสมาชิกสภาที่ล็อกอินอยู่เท่านั้น</p>';if(Bt===null)return al(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const{activities:t,myAttendance:r}=Bt,a=new Set(r.map(p=>p.activity_id)),o=t.filter(p=>p.counts_for_evaluation),s=o.filter(p=>a.has(p.id)).length,n=o.length?Math.round(s/o.length*100):null,i=d.cfg.council_min_attendance_pct?Number(d.cfg.council_min_attendance_pct):null,u=i==null||n==null?null:n>=i,b=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">📈 ผลเช็คชื่อของฉัน</p>
      ${o.length?`
        <div class="flex items-end gap-2 mb-2">
          <span class="text-3xl font-bold text-[var(--primary)]">${n}%</span>
          <span class="text-xs text-[var(--muted-2)] mb-1">${s}/${o.length} กิจกรรม</span>
        </div>
        <div class="w-full h-2 rounded-full bg-[var(--bg-2)] overflow-hidden mb-2"><div class="h-full ${u===!1?"bg-[var(--bad)]":"bg-[var(--primary)]"}" style="width:${n}%"></div></div>
        ${i!=null?`<p class="text-xs ${u?"text-[var(--ok)]":"text-[var(--bad)]"} font-bold">${u?"✅ ผ่านเกณฑ์ขั้นต่ำ":"⚠️ ยังไม่ถึงเกณฑ์ขั้นต่ำ"} ${i}%</p>`:'<p class="text-xs text-[var(--muted-2)]">ยังไม่มีการตั้งเกณฑ์ขั้นต่ำจากผู้ดูแล</p>'}
      `:'<p class="text-xs text-[var(--muted-2)] py-4 text-center">ยังไม่มีกิจกรรมที่นับผลในระบบ</p>'}
      <p class="text-[0.625rem] text-[var(--muted-2)] mt-2">นับจากกิจกรรมที่เกิดขึ้นแล้วและถูกตั้งค่าให้ "นับผล" เท่านั้น — ผลนี้เป็นข้อมูลให้ครูที่ปรึกษาใช้ประกอบการประเมิน ไม่ได้ตัดสินอัตโนมัติ</p>
    </div>`,c=`
    <div class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-3">📅 กิจกรรม/กำหนดการ</p>
      ${t.length?`<div class="space-y-2">${t.map(p=>{const f=a.has(p.id),[v,m]=nl[p.status]??["—","text-[var(--muted)]"];return`
        <div class="flex items-center gap-3 rounded-xl border border-[var(--line-soft)] p-3">
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[var(--ink)] truncate">${l(p.title)}</p>
            <p class="text-[0.6875rem] text-[var(--muted-2)]">${p.activity_date?new Date(p.activity_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ยังไม่กำหนดวัน"} · <span class="${m}">${v}</span>${p.counts_for_evaluation?"":' · <span class="text-[var(--muted-2)]">ไม่นับผล</span>'}</p>
          </div>
          <span class="flex-shrink-0 text-[0.6875rem] font-bold px-2.5 py-1 rounded-full ${f?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--bad-soft)] text-[var(--bad)]"}">${f?"✅ เช็คชื่อแล้ว":"✗ ยังไม่เช็คชื่อ"}</span>
        </div>`}).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-8">ยังไม่มีกิจกรรม</p>'}
    </div>`;return`${b}${c}`}const lt={};async function ol(e){lt[e]=await is(e).catch(()=>[]),_()}function il(){var n;if(!d.isChair)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะประธานสภาเท่านั้น</p>';const e=ve((n=d.student)==null?void 0:n.gender);if(!e)return"";if(lt[e]===void 0)return ol(e),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const t=lt[e],r=t.filter(i=>i.status==="done").length,a=d.members.filter(i=>{var u;return((u=i.council_positions)==null?void 0:u.gender)===e}),o=`
    <form id="assignment-form" class="bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-4 mb-4 space-y-2.5">
      <p class="text-sm font-bold text-[var(--ink-2)]">➕ มอบหมายงานใหม่ — สภา${j[e]}</p>
      <select name="memberId" required class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]">
        <option value="">— เลือกผู้รับมอบหมาย —</option>
        ${a.map(i=>{var u,b;return`<option value="${i.id}">${l(((u=i.students)==null?void 0:u.full_name)??"—")} (${l(((b=i.council_positions)==null?void 0:b.position_name)??"")})</option>`}).join("")}
      </select>
      <textarea name="task" required rows="2" placeholder="รายละเอียดงาน" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm resize-none bg-[var(--surface)] text-[var(--ink)]"></textarea>
      <input name="dueDate" type="date" class="w-full border border-[var(--line)] rounded-xl px-3 py-2.5 text-sm bg-[var(--surface)] text-[var(--ink)]" />
      <button type="submit" class="w-full py-2.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-sm font-bold">มอบหมายงาน</button>
    </form>`;if(!t.length)return`${o}<p class="text-sm text-[var(--muted-2)] text-center py-10">ยังไม่มีงานที่มอบหมาย</p>`;const s=i=>{var u,b,c;return`
    <div class="rounded-xl border ${i.status==="done"?"border-[var(--ok-soft-line)] bg-[var(--ok-soft)]":"border-[var(--line-soft)] bg-[var(--surface)]"} p-3 flex items-center gap-3">
      ${O((u=i.council_members)==null?void 0:u.students)}
      <div class="min-w-0 flex-1">
        <p class="text-sm font-bold text-[var(--ink)] truncate">${l(((c=(b=i.council_members)==null?void 0:b.students)==null?void 0:c.full_name)??"—")}</p>
        <p class="text-xs text-[var(--ink-2)]">${l(i.task)}</p>
        <p class="text-[0.6875rem] text-[var(--muted-2)]">${i.due_date?"กำหนดส่ง "+new Date(i.due_date).toLocaleDateString("th-TH",{dateStyle:"medium"}):"ไม่กำหนดวัน"}</p>
      </div>
      <div class="flex flex-col items-end gap-1 flex-shrink-0">
        <span class="text-[0.6875rem] font-bold px-2 py-0.5 rounded-full ${i.status==="done"?"bg-[var(--ok-soft-line)] text-[#106143]":"bg-[var(--gold-soft-line)] text-[var(--gold-ink)]"}">${i.status==="done"?"ส่งงานแล้ว":"กำลังทำ"}</span>
        <button type="button" class="btn-delete-assignment text-[var(--bad)] text-xs" data-id="${i.id}">ลบ</button>
      </div>
    </div>`};return`${o}<p class="text-xs font-bold text-[var(--muted-2)] mb-2">งานทั้งหมด (${r}/${t.length} เสร็จแล้ว)</p><div class="space-y-2">${t.map(s).join("")}</div>`}let Pe=null,Fe=null,lr=null;const Pt={};async function $r(){const[e,t,r]=await Promise.all([zt("council_advisor").catch(()=>[]),zt("student_affairs_head").catch(()=>[]),zt("school_director").catch(()=>[])]);V=e,Pe=t,Fe=r,_()}async function ll(e){Pt[e]=await na(e).catch(()=>[]),_()}function dl(e){if(Pt[e]===void 0)return ll(e),'<p class="text-xs text-[var(--muted-2)] py-2">⏳ กำลังโหลด...</p>';const t=new Set(Pt[e]);return`
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
    </form>`}function cl(e,t,r){const a=lr===e.id;return`
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
        ${r?`<button type="button" class="btn-toggle-advisor-depts text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]" data-id="${e.id}">${a?"▲ ซ่อนฝ่ายที่ดูแล":"🏛️ ฝ่ายที่ดูแล"}</button>`:""}
        <button type="button" class="btn-remove-teacher-position text-[0.6875rem] font-bold px-2.5 py-1 rounded-[10px] border border-[var(--bad-soft-line)] text-[var(--bad)] hover:bg-[var(--bad-soft)]" data-id="${e.id}" data-position="${t}">ถอดถอน</button>
      </div>
      ${r&&a?dl(e.id):""}
    </div>`}function ul(){if(!d.isAdmin)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะแอดมินเท่านั้น</p>';if(V===null)return $r(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';if(re===null)return yr(),'<p class="text-sm text-[var(--muted-2)] text-center py-16">⏳ กำลังโหลด...</p>';const e=`<datalist id="council-teacher-datalist">${re.map(r=>`<option value="${l(r.full_name)} · รหัส ${r.id}"></option>`).join("")}</datalist>`,t=(r,a,o,s)=>`
    <div class="mb-5">
      <p class="text-sm font-bold text-[var(--ink-2)] mb-2">${r} (${a.length} คน)</p>
      <form class="perms-add-form bg-[var(--surface)] rounded-2xl shadow-[0_4px_12px_rgba(23,32,42,0.07)] border border-[var(--line-soft)] p-3 mb-2 flex gap-2" data-position="${o}">
        <input type="text" name="teacherText" list="council-teacher-datalist" placeholder="พิมพ์ชื่อครู แล้วเลือกจากรายการ..." required
          class="flex-1 min-w-0 border border-[var(--line)] rounded-[10px] px-3 py-2 text-sm bg-[var(--surface)] text-[var(--ink)]" />
        <button type="submit" class="px-4 py-2 rounded-[10px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs font-bold flex-shrink-0">เพิ่ม</button>
      </form>
      ${a.length?`<div class="space-y-2">${a.map(n=>cl(n,o,s)).join("")}</div>`:'<p class="text-xs text-[var(--muted-2)] text-center py-4">ยังไม่มี</p>'}
    </div>`;return`${e}
    ${t("ครูที่ปรึกษาสภานักเรียน",V,"council_advisor",!0)}
    ${t("หัวหน้าฝ่ายกิจการนักเรียน",Pe,"student_affairs_head",!1)}
    ${t("ผู้อำนวยการ",Fe,"school_director",!1)}`}function pl(e){const t=e.getContext("2d"),r=()=>{t.fillStyle="#fff",t.fillRect(0,0,e.width,e.height),t.strokeStyle="#0f172a"};r(),t.lineWidth=4,t.lineCap="round";let a=!1,o=!1;const s=n=>{const i=e.getBoundingClientRect();return{x:(n.clientX-i.left)*e.width/i.width,y:(n.clientY-i.top)*e.height/i.height}};return e.addEventListener("pointerdown",n=>{var u;a=!0,(u=e.setPointerCapture)==null||u.call(e,n.pointerId);const i=s(n);t.beginPath(),t.moveTo(i.x,i.y)}),e.addEventListener("pointermove",n=>{if(!a)return;const i=s(n);t.lineTo(i.x,i.y),t.stroke(),o=!0}),e.addEventListener("pointerup",()=>{a=!1}),e.addEventListener("pointercancel",()=>{a=!1}),{clear:()=>{r(),o=!1},isDrawn:()=>o,toBlob:()=>new Promise(n=>e.toBlob(n,"image/png"))}}function Jr(e){var o;(o=document.getElementById("council-profile-modal"))==null||o.remove();const t=document.createElement("div");t.id="council-profile-modal",t.className="fixed inset-0 z-[300] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",t.innerHTML=`
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
    </div>`,document.body.appendChild(t);const r=t.querySelector("#council-signature-canvas"),a=pl(r);t.querySelector("#council-signature-clear").addEventListener("click",()=>a.clear()),t.querySelector("#btn-close-council-profile").addEventListener("click",()=>t.remove()),t.addEventListener("click",s=>{s.target===t&&t.remove()}),t.querySelector("#council-profile-save").addEventListener("click",async()=>{var n,i;const s=t.querySelector("#council-profile-save");s.disabled=!0,s.textContent="กำลังบันทึก...";try{const u=(n=t.querySelector("#council-profile-photo-file").files)==null?void 0:n[0];if(u){const p=await Wa(e.id,u);await Rs(e.id,p),d.teacher&&d.teacher.id===e.id&&(d.teacher.image_url=p)}const c=((i=t.querySelector("#council-signature-file").files)==null?void 0:i[0])||(a.isDrawn()?await a.toBlob():null);if(c){const p=await Ja(e.id,c);await Ds(e.id,p),d.teacher&&d.teacher.id===e.id&&(d.teacher.signature_url=p)}g("บันทึกแล้ว ✅","success"),t.remove(),V=null,Pe=null,Fe=null,_()}catch(u){g("บันทึกไม่สำเร็จ: "+S(u),"error"),s.disabled=!1,s.textContent="บันทึก"}})}function ml(){if(!d.teacher)return'<p class="text-sm text-[var(--muted-2)] text-center py-16">หน้านี้ใช้ได้เฉพาะบัญชีครูเท่านั้น</p>';const e=d.teacher;return`
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
    </div>`}const bl={overview:va,regulation:()=>ro(d,_),forms:()=>Xt({kind:"forms",esc:l,canOpenDocs:d.isAdmin||d.role==="teacher"||d.isChair}),yla:Xo,activityDocs:()=>Xt({kind:"activityDocs",esc:l}),endorse:ui,apps:oi,interview:ii,appoint:li,news:ki,activities:_i,eval:Ai,docs:Fi,candidates:Uo,roster:ci,result:fa,settings:Ki,chairteam:Ji,myduty:Zi,mysummary:sl,assignments:il,peerEndorse:mi,perms:ul,myCouncilProfile:ml,dashboard:si},vl={apply:{new:Lo,mine:Po},election:{status:fa}};function _(){if(Xe){xl();return}fr(!0);const e=yo();e.some(r=>r.id===ke)||Se("overview"),ho(e);const t=bl[ke]||va;cr.innerHTML=`<div class="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-4">${t()}</div>`,Ba()}function xl(){var r;fr(!1);const e=fo[Xe];e.subtabs.some(a=>a.id===de)||(de=e.subtabs[0].id),document.getElementById("council-view-title").textContent=e.title;const t=((r=vl[Xe])==null?void 0:r[de])??(()=>"");cr.innerHTML=`
    <div class="max-w-2xl mx-auto px-4 py-4">
      <div class="flex items-center gap-3 mb-4">
        <button type="button" id="btn-flow-close" title="กลับภาพรวม"
          class="w-8 h-8 rounded-full hover:bg-[var(--bg-2)] text-[var(--muted)] flex items-center justify-center flex-shrink-0 text-lg">←</button>
        <h2 class="text-base font-bold text-[var(--ink)]">${e.title}</h2>
      </div>
      ${e.subtabs.length>1?`
      <div class="flex gap-2 mb-4 overflow-x-auto pb-1">
        ${e.subtabs.map(a=>`
          <button type="button" class="flow-subtab-btn flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition ${a.id===de?"bg-[var(--primary)] text-white":"bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]"}"
            data-subtab="${a.id}">${l(a.label)}</button>`).join("")}
      </div>`:""}
      <div>${t()}</div>
    </div>`,document.getElementById("btn-flow-close").addEventListener("click",()=>{Xe=null,de=null,_t(),_()}),document.querySelectorAll(".flow-subtab-btn").forEach(a=>{a.addEventListener("click",()=>{de=a.dataset.subtab,_()})}),Ba()}function Ba(){var e,t,r,a,o,s,n,i,u,b,c,p,f,v,m,x,w,I,T,C;ao(d,_),co({esc:l,onKindChange:y=>{Se(y==="forms"||y==="yla"||y==="activityDocs"?y:"forms"),_()}}),Zo(),document.querySelectorAll(".flow-entry-btn").forEach(y=>{y.addEventListener("click",()=>{Xe=y.dataset.flow,de=null,_()})}),document.querySelectorAll(".goto-view").forEach(y=>{y.addEventListener("click",()=>{Se(y.dataset.view),_()})}),document.querySelectorAll(".roster-gender-tab-btn").forEach(y=>{y.addEventListener("click",()=>{ae=y.dataset.gender,_()})}),document.querySelectorAll(".btn-view-my-app-detail").forEach(y=>{y.addEventListener("click",()=>{Ze=Number(y.dataset.id),_()})}),(e=document.getElementById("btn-my-app-detail-close"))==null||e.addEventListener("click",()=>{Ze=null,_()}),(t=document.getElementById("my-app-detail-backdrop"))==null||t.addEventListener("click",y=>{y.target.id==="my-app-detail-backdrop"&&(Ze=null,_())}),(r=document.getElementById("btn-pick-my-app-endorser"))==null||r.addEventListener("click",y=>{ai(Number(y.target.dataset.appId),y.target.dataset.gender)}),(a=document.getElementById("btn-add-council-member"))==null||a.addEventListener("click",()=>{Mr({mode:"add",gender:ae})}),document.querySelectorAll(".btn-edit-council-member").forEach(y=>{y.addEventListener("click",()=>{var E;const $=d.members.find(A=>A.id===Number(y.dataset.id));$&&Mr({mode:"edit",gender:(E=$.council_positions)==null?void 0:E.gender,member:$})})}),document.querySelectorAll(".btn-remove-council-member").forEach(y=>{y.addEventListener("click",async()=>{if(confirm("ลบสมาชิกสภาคนนี้ออกจากทำเนียบ? (จะเก็บประวัติไว้ ไม่ได้ลบข้อมูลทิ้งถาวร)"))try{await Dn(Number(y.dataset.id)),g("ลบแล้ว ✅","success"),d.members=await Ue().catch(()=>d.members),_()}catch($){g("ลบไม่สำเร็จ: "+S($),"error")}})}),document.querySelectorAll(".btn-toggle-can-create").forEach(y=>{y.addEventListener("click",async()=>{const $=Number(y.dataset.id),E=y.dataset.value==="1";y.disabled=!0;try{await hn($,E);const A=d.members.find(D=>D.id===$);A&&(A.can_create_activities=E);const q=d.membership.find(D=>D.id===$);q&&(q.can_create_activities=E),g(E?"ให้สิทธิ์สร้างกิจกรรมแล้ว ✅":"ถอนสิทธิ์แล้ว ✅","success"),_()}catch(A){g("บันทึกไม่สำเร็จ: "+S(A),"error"),y.disabled=!1}})}),document.querySelectorAll(".btn-peer-endorse").forEach(y=>{y.addEventListener("click",()=>bi(y.dataset.id))}),(o=document.getElementById("btn-open-apply"))==null||o.addEventListener("click",()=>{if(!Lt(d.student)){g(Zt(d.student),"warning");return}Ct=!0;const y=bo();U=y&&y.step>1?y:null,U||(Y=Ke(Qe())),_()}),(s=document.getElementById("btn-cancel-apply"))==null||s.addEventListener("click",()=>{_t(),U=null,_()}),(n=document.getElementById("btn-apply-draft-resume"))==null||n.addEventListener("click",()=>{N={...N,...U.data},F=U.step;const y=U.certTitles||[];Y=y.length?y.map($=>({file:null,title:$||"",previewUrl:null,isPdf:!1})):Ke(Qe()),U=null,_()}),(i=document.getElementById("btn-apply-draft-discard"))==null||i.addEventListener("click",()=>{Tr(),_t(),U=null,Ct=!0,_()}),(u=document.getElementById("btn-apply-back"))==null||u.addEventListener("click",()=>{F=Math.max(1,F-1),Z(),_()}),(b=document.getElementById("apply-step1-form"))==null||b.addEventListener("submit",y=>{y.preventDefault();const $=y.target.positionId.value;if(!$){g("กรุณาเลือกตำแหน่ง","warning");return}N.positionId=$,F=2,Z(),_()}),(c=document.getElementById("apply-step2-form"))==null||c.addEventListener("submit",y=>{y.preventDefault();const $=y.target,E=$.gpaGeneral.value,A=$.gpaReligious.value,q=$.motivation.value.trim(),D=Number(E),J=Number(A);if(!E||!A||D<0||D>4||J<0||J>4){g("กรอกเกรดเฉลี่ยให้ถูกต้อง (0.00–4.00)","warning");return}const X=Number(d.cfg.council_min_gpa||2.5),M=Number(d.cfg.council_min_gpa_religious||2.5);if(D<X||J<M){g(`เกรดเฉลี่ยไม่ถึงเกณฑ์ขั้นต่ำ (สามัญ ≥ ${X}, ศาสนา ≥ ${M})`,"warning");return}if(q.length<10){g("กรุณากรอกแรงจูงใจอย่างน้อย 10 ตัวอักษร","warning");return}N.gpaGeneral=E,N.gpaReligious=A,N.motivation=q,F=3,Z(),_()}),(p=document.getElementById("apply-photo"))==null||p.addEventListener("change",y=>{var E;const $=((E=y.target.files)==null?void 0:E[0])??null;he=$,oe&&URL.revokeObjectURL(oe),oe=$?URL.createObjectURL($):null,_()}),(f=document.getElementById("btn-apply-step3-next"))==null||f.addEventListener("click",()=>{if(!he){g("กรุณาแนบรูปถ่าย","warning");return}F=4,Z(),_()}),(v=document.getElementById("apply-step4-form"))==null||v.addEventListener("submit",y=>{y.preventDefault();const $=y.target.videoUrl.value.trim();if(!/^https?:\/\//.test($)){g("กรุณาใส่ลิงก์วิดีโอที่ถูกต้อง (ขึ้นต้นด้วย http:// หรือ https://)","warning");return}N.videoUrl=$,F=5,Z(),_()}),document.querySelectorAll(".cert-title-input").forEach(y=>{y.addEventListener("input",()=>{Y[+y.dataset.idx].title=y.value,Z()})}),document.querySelectorAll(".cert-file-input").forEach(y=>{y.addEventListener("change",$=>{var D;const E=+y.dataset.idx,A=((D=$.target.files)==null?void 0:D[0])??null,q=Y[E];q.previewUrl&&URL.revokeObjectURL(q.previewUrl),q.file=A,q.isPdf=(A==null?void 0:A.type)==="application/pdf",q.previewUrl=A&&!q.isPdf?URL.createObjectURL(A):null,_()})}),(m=document.getElementById("btn-add-cert"))==null||m.addEventListener("click",()=>{Y.push(...Ke(1)),Z(),_()}),document.querySelectorAll(".btn-remove-cert").forEach(y=>{y.addEventListener("click",()=>{const $=+y.dataset.idx,E=Y[$];E.previewUrl&&URL.revokeObjectURL(E.previewUrl),Y.splice($,1),Z(),_()})}),(x=document.getElementById("btn-apply-step5-next"))==null||x.addEventListener("click",()=>{const y=Y.filter(E=>E.file&&E.title.trim()).length,$=Qe();if(y<$){g(`กรุณาแนบเกียรติบัตร/รางวัลอย่างน้อย ${$} รายการ (พร้อมชื่อรางวัล)`,"warning");return}_r()?F=6:Ne=!0,Z(),_()}),document.querySelectorAll(".btn-pick-peer-endorser").forEach(y=>{y.addEventListener("click",()=>{N.peerEndorserId=y.dataset.id,Z(),_()})}),(w=document.getElementById("btn-apply-step6-next"))==null||w.addEventListener("click",()=>{if(!N.peerEndorserId){g("กรุณาเลือกพี่สภาที่ต้องการให้รับรอง","warning");return}Ne=!0,Z(),_()}),(I=document.getElementById("btn-apply-edit"))==null||I.addEventListener("click",()=>{Ne=!1,_()}),(T=document.getElementById("apply-confirm-backdrop"))==null||T.addEventListener("click",y=>{y.target.id==="apply-confirm-backdrop"&&(Ne=!1,_())}),(C=document.getElementById("btn-apply-confirm-submit"))==null||C.addEventListener("click",async()=>{if(!Lt(d.student)){g(Zt(d.student),"error");return}const y=document.getElementById("btn-apply-confirm-submit");y.disabled=!0,y.textContent="กำลังส่ง...";try{let $=null;he&&($=await Va(d.student.id,he));const E=Y.filter(q=>q.file&&q.title.trim()),A=await Promise.all(E.map(async q=>({title:q.title.trim(),url:await Ga(d.student.id,q.file)})));await wn({studentId:d.student.id,positionId:Number(N.positionId),academicYear:Number(d.cfg.academicYear)||new Date().getFullYear()+543,motivation:N.motivation,photoUrl:$,gpaGeneral:Number(N.gpaGeneral),gpaReligious:Number(N.gpaReligious),introVideoUrl:N.videoUrl,certificates:A,requestedPeerEndorserId:N.peerEndorserId?Number(N.peerEndorserId):null}),g("ส่งใบสมัครสำเร็จ ✅","success"),Tr(),_t(),await ma(),de="mine",_()}catch($){g("ส่งใบสมัครไม่สำเร็จ: "+S($),"error"),y.disabled=!1,y.textContent="✅ ยืนยันการสมัคร"}}),document.querySelectorAll(".endorse-phrase-chip").forEach(y=>{y.addEventListener("click",()=>{const $=document.querySelector(`.endorse-comment[data-id="${y.dataset.target}"]`);if(!$)return;const E=$.value.trim();$.value=E?E+" "+y.dataset.phrase:y.dataset.phrase,$.focus()})}),document.querySelectorAll(".btn-endorse-confirm").forEach(y=>{y.addEventListener("click",()=>Br(y.dataset.id,"confirm"))}),document.querySelectorAll(".btn-endorse-decline").forEach(y=>{y.addEventListener("click",()=>Br(y.dataset.id,"decline"))}),Al(),fl(),Il(),El(),Sl(),kl(),$l(),wl(),hl(),gl(),yl(),_l()}function fl(){var e,t,r,a;document.querySelectorAll(".interview-gender-tab-btn").forEach(o=>{o.addEventListener("click",()=>{Ce=o.dataset.gender,_()})}),document.querySelectorAll(".interview-filter-btn").forEach(o=>{o.addEventListener("click",()=>{Le=o.dataset.filter,_()})}),(e=document.getElementById("interview-search"))==null||e.addEventListener("change",o=>{qt=o.target.value,_()}),(t=document.querySelector(".interview-clear-search"))==null||t.addEventListener("click",()=>{qt="",_()}),document.querySelectorAll(".appointment-gender-tab-btn").forEach(o=>{o.addEventListener("click",()=>{qe=o.dataset.gender,_()})}),document.querySelectorAll(".appointment-filter-btn").forEach(o=>{o.addEventListener("click",()=>{Te=o.dataset.filter,_()})}),(r=document.getElementById("appointment-search"))==null||r.addEventListener("change",o=>{Tt=o.target.value,_()}),(a=document.querySelector(".appointment-clear-search"))==null||a.addEventListener("click",()=>{Tt="",_()})}function _l(){var e;document.querySelectorAll(".perms-add-form").forEach(t=>{t.addEventListener("submit",async r=>{var c;r.preventDefault();const a=r.target,o=a.dataset.position,n=a.teacherText.value.trim().match(/· รหัส (\d+)$/);if(!n){g("กรุณาเลือกชื่อครูจากรายการที่แสดง","warning");return}const i=Number(n[1]);if((c={council_advisor:V,student_affairs_head:Pe,school_director:Fe}[o])!=null&&c.some(p=>p.id===i)){g("ครูคนนี้อยู่ในรายชื่อนี้แล้ว","warning");return}const b=a.querySelector('button[type="submit"]');b.disabled=!0,b.textContent="กำลังบันทึก...";try{await qs(i,o),g("เพิ่มแล้ว ✅","success"),V=null,Pe=null,Fe=null,_()}catch(p){g("บันทึกไม่สำเร็จ: "+S(p),"error"),b.disabled=!1,b.textContent="เพิ่ม"}})}),document.querySelectorAll(".btn-remove-teacher-position").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ถอดถอนออกจากรายชื่อนี้?"))try{await Ts(Number(t.dataset.id),t.dataset.position),V=null,Pe=null,Fe=null,_()}catch(r){g("ถอดถอนไม่สำเร็จ: "+S(r),"error")}})}),document.querySelectorAll(".btn-toggle-advisor-depts").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);lr=lr===r?null:r,_()})}),document.querySelectorAll(".advisor-dept-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const a=Number(t.dataset.teacherId),o=d.positions.filter(n=>{var i;return(i=t[`pos_${n.id}`])==null?void 0:i.checked}).map(n=>n.id),s=t.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await Ns(a,o),Pt[a]=o,g("บันทึกฝ่ายที่ดูแลแล้ว ✅","success"),_()}catch(n){g("บันทึกไม่สำเร็จ: "+S(n),"error"),s.disabled=!1,s.textContent="บันทึกฝ่าย"}})}),document.querySelectorAll(".btn-edit-council-profile").forEach(t=>{t.addEventListener("click",()=>{Jr({id:Number(t.dataset.id),full_name:t.dataset.name,image_url:t.dataset.image||null,signature_url:t.dataset.signature||null})})}),(e=document.getElementById("btn-edit-my-council-profile"))==null||e.addEventListener("click",()=>{d.teacher&&Jr(d.teacher)})}function gl(){var e,t;document.querySelectorAll(".myduty-subtab-btn").forEach(r=>{r.addEventListener("click",()=>{St=r.dataset.tab,_()})}),(e=document.getElementById("routine-add-form"))==null||e.addEventListener("submit",async r=>{r.preventDefault();const a=r.target,o=a.task.value.trim();if(!o){g("กรุณากรอกงานที่ต้องทำ","warning");return}const s=d.membership[0];try{await as({memberId:s.id,dayOfWeek:a.dayOfWeek.value===""?null:Number(a.dayOfWeek.value),timeRange:a.timeRange.value.trim(),task:o,location:a.location.value.trim()}),ee=null,_()}catch(n){g("เพิ่มไม่สำเร็จ: "+S(n),"error")}}),document.querySelectorAll(".btn-remove-routine").forEach(r=>{r.addEventListener("click",async()=>{if(confirm("ลบรูทีนนี้?"))try{await ns(Number(r.dataset.id)),ee=null,_()}catch(a){g("ลบไม่สำเร็จ: "+S(a),"error")}})}),document.querySelectorAll(".routine-check").forEach(r=>{r.addEventListener("change",async()=>{const a=Number(r.dataset.id),o=r.checked;r.disabled=!0;try{await ss({routineId:a,weekStart:Ma(),done:o}),o?ze.add(a):ze.delete(a),_()}catch(s){g("บันทึกไม่สำเร็จ: "+S(s),"error"),r.checked=!o,r.disabled=!1}})}),document.querySelectorAll(".assignment-check").forEach(r=>{r.addEventListener("change",async()=>{const a=Number(r.dataset.id),o=r.checked?"done":"open";r.disabled=!0;try{await ds(a,o);const s=$e.find(n=>n.id===a);s&&(s.status=o),_()}catch(s){g("บันทึกไม่สำเร็จ: "+S(s),"error"),r.checked=!r.checked,r.disabled=!1}})}),(t=document.getElementById("btn-show-my-council-qr"))==null||t.addEventListener("click",()=>{d.student&&rl(d.student)})}function yl(){var e;(e=document.getElementById("assignment-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=Number(r.memberId.value),o=r.task.value.trim();if(!a||!o){g("กรุณาเลือกผู้รับมอบหมายและกรอกรายละเอียดงาน","warning");return}const s=r.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await ls({memberId:a,task:o,dueDate:r.dueDate.value||null,assignedByStudentId:d.student.id}),g("มอบหมายงานแล้ว ✅","success");const n=ve(d.student.gender);delete lt[n],_()}catch(n){g("บันทึกไม่สำเร็จ: "+S(n),"error"),s.disabled=!1,s.textContent="มอบหมายงาน"}}),document.querySelectorAll(".btn-delete-assignment").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบงานที่มอบหมายนี้?"))try{await cs(Number(t.dataset.id));const r=ve(d.student.gender);delete lt[r],_()}catch(r){g("ลบไม่สำเร็จ: "+S(r),"error")}})})}function hl(){var e;(e=document.getElementById("nominate-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=Number(r.positionId.value),o=Number(r.applicationId.value);if(!a||!o){g("กรุณาเลือกตำแหน่งและผู้สมัคร","warning");return}const s=r.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังเสนอ...";try{await Yn({applicationId:o,positionId:a,proposedByStudentId:d.student.id}),g("เสนอคณะทำงานแล้ว รอครูที่ปรึกษาสภาอนุมัติ ✅","success");const n=ve(d.student.gender);delete Ee[n],delete at[n],_()}catch(n){g("เสนอไม่สำเร็จ: "+S(n),"error"),s.disabled=!1,s.textContent="เสนอต่อครูที่ปรึกษาสภา"}}),document.querySelectorAll(".btn-decide-nomination").forEach(t=>{t.addEventListener("click",async()=>{var n,i;const r=Number(t.dataset.id),a=t.dataset.approve==="true",o=((n=document.querySelector(`.nom-comment[data-id="${r}"]`))==null?void 0:n.value.trim())??"";if(!a&&!o){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}const s=t.closest("[data-nom-card]");s==null||s.querySelectorAll("button").forEach(u=>{u.disabled=!0});try{await Un({nominationId:r,approve:a,teacherId:((i=d.teacher)==null?void 0:i.id)??null,comment:o}),g(a?"อนุมัติแล้ว ✅":"ไม่อนุมัติแล้ว","success"),delete it.M,delete it.W,delete at.M,delete at.W,delete Ee.M,delete Ee.W,d.members=await Ue().catch(()=>d.members),_()}catch(u){g("บันทึกไม่สำเร็จ: "+S(u),"error"),s==null||s.querySelectorAll("button").forEach(b=>{b.disabled=!1})}})})}function wl(){var e,t,r,a,o,s;document.querySelectorAll(".settings-tab-btn").forEach(n=>{n.addEventListener("click",()=>{Je=n.dataset.tab,_()})}),(e=document.getElementById("settings-general-form"))==null||e.addEventListener("submit",async n=>{n.preventDefault();const i=n.target,u=i.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังบันทึก...";try{const b={council_name:i.council_name.value.trim(),council_logo_url:i.council_logo_url.value.trim(),council_theme_side_m:i.council_theme_side_m.value,council_theme_side_w:i.council_theme_side_w.value,council_term_start_semester:i.council_term_start_semester.value.trim(),council_term_start_year:i.council_term_start_year.value.trim(),council_term_end_semester:i.council_term_end_semester.value.trim(),council_term_end_year:i.council_term_end_year.value.trim(),council_min_gpa:i.council_min_gpa.value,council_min_gpa_religious:i.council_min_gpa_religious.value,council_eligible_grade_levels:i.council_eligible_grade_levels.value.trim(),council_min_certificates:i.council_min_certificates.value,council_min_attendance_pct:i.council_min_attendance_pct.value,council_require_teacher_endorsement:i.council_require_teacher_endorsement.checked?"true":"false",council_require_peer_endorsement:i.council_require_peer_endorsement.checked?"true":"false",council_apply_opens_at:i.council_apply_opens_at.value?new Date(i.council_apply_opens_at.value).toISOString():"",council_apply_closes_at:i.council_apply_closes_at.value?new Date(i.council_apply_closes_at.value).toISOString():"",council_featured_phase:i.council_featured_phase.value,council_visible_to_all:i.council_visible_to_all.checked?"true":"false",council_test_student_codes:i.council_test_student_codes.value.trim(),council_election_thank_you_message:i.council_election_thank_you_message.value.trim(),council_signer_advisor_name:i.council_signer_advisor_name.value.trim(),council_signer_director_name:i.council_signer_director_name.value.trim()};await pt(b),d.cfg={...d.cfg,...b},ba(d.cfg),g("บันทึกการตั้งค่าแล้ว ✅","success"),_()}catch(b){g("บันทึกไม่สำเร็จ: "+S(b),"error"),u.disabled=!1,u.textContent="💾 บันทึกการตั้งค่า"}}),document.querySelectorAll(".position-row-form").forEach(n=>{n.addEventListener("submit",async i=>{i.preventDefault();const u=Number(n.dataset.id),b=n.position_name.value.trim(),c=Number(n.seats_count.value);if(!b||!c){g("กรอกชื่อและจำนวนที่นั่งให้ครบ","warning");return}try{await mn(u,{position_name:b,seats_count:c}),d.positions=await ft(),g("บันทึกแล้ว ✅","success"),_()}catch(p){g("บันทึกไม่สำเร็จ: "+S(p),"error")}})}),document.querySelectorAll(".btn-delete-position").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบตำแหน่งนี้? (ประวัติสมาชิก/ใบสมัครเดิมจะยังอยู่)"))try{await bn(Number(n.dataset.id)),d.positions=await ft(),_()}catch(i){g("ลบไม่สำเร็จ: "+S(i),"error")}})}),document.querySelectorAll(".position-add-form").forEach(n=>{n.addEventListener("submit",async i=>{i.preventDefault();const u=n.dataset.gender,b=n.position_name.value.trim(),c=Number(n.seats_count.value)||1;if(!b){g("กรอกชื่อตำแหน่ง","warning");return}try{await pn({gender:u,positionName:b,seatsCount:c,isElected:!1,sortOrder:999}),d.positions=await ft(),g("เพิ่มตำแหน่งแล้ว ✅","success"),_()}catch(p){g("เพิ่มไม่สำเร็จ: "+S(p),"error")}})}),(t=document.getElementById("interview-criterion-form"))==null||t.addEventListener("submit",async n=>{n.preventDefault();const i=n.target,u=i.name.value.trim(),b=Number(i.weight.value);if(!u||!b){g("กรอกชื่อหัวข้อและคะแนนให้ครบ","warning");return}try{await xn({name:u,weight:b}),K=null,_()}catch(c){g("บันทึกไม่สำเร็จ: "+S(c),"error")}}),document.querySelectorAll(".btn-remove-interview-criterion").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบหัวข้อนี้ออกจากเกณฑ์สัมภาษณ์?"))try{await fn(Number(n.dataset.id)),K=null,_()}catch(i){g("ลบไม่สำเร็จ: "+S(i),"error")}})}),(r=document.getElementById("settings-video-form"))==null||r.addEventListener("submit",async n=>{n.preventDefault();const i=n.target,u=i.council_video_max_minutes.value.trim(),b=i.council_video_brief.value.split(`
`).map(c=>c.trim()).filter(Boolean);try{const c={council_video_max_minutes:u,council_video_brief:JSON.stringify(b)};await pt(c),d.cfg={...d.cfg,...c},g("บันทึกแล้ว ✅","success"),_()}catch(c){g("บันทึกไม่สำเร็จ: "+S(c),"error")}}),(a=document.getElementById("settings-doc-options-form"))==null||a.addEventListener("submit",async n=>{n.preventDefault();const i=n.target,u=b=>b.split(`
`).map(c=>c.trim()).filter(Boolean);try{const b={council_doc_plan_areas:JSON.stringify(u(i.council_doc_plan_areas.value)),council_doc_project_types:JSON.stringify(u(i.council_doc_project_types.value)),council_doc_school_strategies:JSON.stringify(u(i.council_doc_school_strategies.value)),council_doc_education_standards:JSON.stringify(u(i.council_doc_education_standards.value))};await pt(b),d.cfg={...d.cfg,...b},g("บันทึกแล้ว ✅","success"),_()}catch(b){g("บันทึกไม่สำเร็จ: "+S(b),"error")}}),(o=document.getElementById("phrase-form"))==null||o.addEventListener("submit",async n=>{n.preventDefault();const u=n.target.phrase.value.trim();if(u)try{await _n({phrase:u,sortOrder:(ue==null?void 0:ue.length)??0}),ue=null,_()}catch(b){g("บันทึกไม่สำเร็จ: "+S(b),"error")}}),document.querySelectorAll(".btn-remove-phrase").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบข้อความนี้?"))try{await gn(Number(n.dataset.id)),ue=null,_()}catch(i){g("ลบไม่สำเร็จ: "+S(i),"error")}})}),document.querySelectorAll(".cert-template-type-radio").forEach(n=>{n.addEventListener("change",()=>{var u,b,c;const i=((u=document.querySelector('input[name="template_type"]:checked'))==null?void 0:u.value)==="custom";(b=document.getElementById("cert-template-preset-select"))==null||b.classList.toggle("hidden",i),(c=document.getElementById("cert-template-file-input"))==null||c.classList.toggle("hidden",!i)})}),(s=document.getElementById("cert-template-form"))==null||s.addEventListener("submit",async n=>{var p,f;n.preventDefault();const i=n.target,u=i.name.value.trim();if(!u)return;const b=i.template_type.value==="custom",c=i.querySelector('button[type="submit"]');c.disabled=!0,c.textContent="กำลังบันทึก...";try{let v=null;if(b){const w=(p=i.background_image.files)==null?void 0:p[0];if(!w){g("กรุณาอัปโหลดรูปพื้นหลังเทมเพลต","warning"),c.disabled=!1,c.textContent="เพิ่มเทมเพลต";return}v=await Ha(w)}const m=b?null:i.preset_key.value,x=Xa(b?"custom":m);b&&(x.background={type:"image",imageUrl:v}),await Za({name:u,type:b?"custom":"preset",presetKey:m,backgroundImageUrl:v,layout:x,createdByTeacherId:((f=d.teacher)==null?void 0:f.id)??null}),g("เพิ่มเทมเพลตแล้ว ✅","success"),Q=null,_()}catch(v){g("บันทึกไม่สำเร็จ: "+S(v),"error"),c.disabled=!1,c.textContent="เพิ่มเทมเพลต"}}),document.querySelectorAll(".btn-remove-cert-template").forEach(n=>{n.addEventListener("click",async()=>{if(confirm("ลบเทมเพลตนี้?"))try{await en(Number(n.dataset.id)),Q=null,_()}catch(i){g("ลบไม่สำเร็จ: "+S(i),"error")}})}),document.querySelectorAll(".btn-design-cert-template").forEach(n=>{n.addEventListener("click",()=>{const i=Q==null?void 0:Q.find(u=>u.id===Number(n.dataset.id));i&&nn({template:i,previewVariables:{reason:"เข้าร่วมกิจกรรมตัวอย่างจนสำเร็จ"},placeholderTokens:[{token:"{{reason}}",label:"เหตุผล/รายละเอียด"}],onSave:async(u,b)=>{await tn({id:i.id,layout:u,backgroundImageUrl:b}),g("บันทึกดีไซน์แล้ว ✅","success"),Q=null,_()}})})}),document.querySelectorAll(".module-toggle").forEach(n=>{n.addEventListener("change",async()=>{const i=vr();i[n.dataset.key]=n.checked;try{await pt({council_modules:JSON.stringify(i)}),d.cfg={...d.cfg,council_modules:JSON.stringify(i)},g(n.checked?"เปิดใช้งานแล้ว":"ปิดใช้งานแล้ว","success"),_()}catch(u){g("บันทึกไม่สำเร็จ: "+S(u),"error"),n.checked=!n.checked}})})}function $l(){var e,t,r,a,o,s;document.querySelectorAll(".btn-new-doc").forEach(n=>{n.addEventListener("click",()=>{Ta=n.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",ne="new",_()})}),(e=document.getElementById("btn-doc-form-back"))==null||e.addEventListener("click",()=>{ne=null,_()}),(t=document.getElementById("btn-doc-form-cancel"))==null||t.addEventListener("click",()=>{ne=null,_()}),document.querySelectorAll(".btn-edit-doc").forEach(n=>{n.addEventListener("click",()=>{ne=Number(n.dataset.id),_()})}),(r=document.getElementById("btn-doc-ai-import-open"))==null||r.addEventListener("click",()=>Oi()),document.querySelectorAll(".doc-responsible-chip").forEach(n=>{n.addEventListener("click",()=>{const i=document.querySelector('textarea[name="responsiblePersons"]');if(!i)return;const u=i.value.split(`
`).map(b=>b.trim()).filter(Boolean);u.includes(n.dataset.name)||u.push(n.dataset.name),i.value=u.join(`
`)})}),(a=document.getElementById("doc-form"))==null||a.addEventListener("submit",async n=>{n.preventDefault();const i=n.target,u=i.title.value.trim();if(!u){g("กรุณากรอกชื่อโครงการ","warning");return}const b=i.dataset.origin,c=i.positionId.value?Number(i.positionId.value):null;if(b==="council"&&!c){g("กรุณาเลือกฝ่ายที่รับผิดชอบ (ใช้ส่งให้ครูที่ปรึกษาประจำฝ่ายตรวจ)","warning");return}const p={title:u,planArea:i.planArea.value.trim(),projectType:i.projectType.value.trim(),schoolStrategy:i.schoolStrategy.value.trim(),educationStandard:i.educationStandard.value.trim(),responsiblePersons:ye(i.responsiblePersons.value),positionId:c,rationale:i.rationale.value.trim(),objectives:ye(i.objectives.value),goalsQuantitative:ye(i.goalsQuantitative.value),goalsQualitative:ye(i.goalsQualitative.value),workSteps:bt(i.workSteps.value,4),durationText:i.durationText.value.trim(),locationText:i.locationText.value.trim(),budgetItems:bt(i.budgetItems.value,2),stakeholders:bt(i.stakeholders.value,2),evaluationItems:bt(i.evaluationItems.value,4),expectedResults:ye(i.expectedResults.value)},f=i.querySelector('button[type="submit"]');f.disabled=!0,f.textContent="กำลังบันทึก...";try{ne==="new"?await ks({...p,formKey:i.dataset.formKey||"FORM_09_1_PROJECT_PROPOSAL",formVersion:1,origin:b,academicYear:P,createdByStudentId:b==="council"&&d.student?d.student.id:null,createdByTeacherId:b==="teacher"&&d.teacher?d.teacher.id:null}):await Es(ne,p),g("บันทึกร่างแล้ว ✅","success"),H=null,ne=null,_()}catch(v){g("บันทึกไม่สำเร็จ: "+S(v),"error"),f.disabled=!1,f.textContent="💾 บันทึกร่าง"}}),document.querySelectorAll(".btn-submit-doc").forEach(n=>{n.addEventListener("click",async()=>{n.disabled=!0;try{await As(Number(n.dataset.id)),H=null,_()}catch(i){g("บันทึกไม่สำเร็จ: "+S(i),"error"),n.disabled=!1}})}),document.querySelectorAll(".btn-new-doc-revision").forEach(n=>{n.addEventListener("click",async()=>{var i,u;n.disabled=!0;try{await Ss(Number(n.dataset.id),{createdByStudentId:((i=d.student)==null?void 0:i.id)??null,createdByTeacherId:((u=d.teacher)==null?void 0:u.id)??null}),g("สร้างฉบับแก้ไขแล้ว ✅","success"),H=null,_()}catch(b){g("สร้างฉบับแก้ไขไม่สำเร็จ: "+S(b),"error"),n.disabled=!1}})}),document.querySelectorAll(".btn-approve-doc, .btn-reject-doc").forEach(n=>{n.addEventListener("click",async()=>{var p,f,v;const i=n.classList.contains("btn-approve-doc"),u=Number(n.dataset.id),b=H.find(m=>m.id===u);if(!b)return;const c=prompt(i?"ความเห็นประกอบ (ถ้ามี)":"เหตุผลที่ไม่อนุมัติ (จำเป็นต้องระบุ)")??"";if(!i&&!c.trim()){g("กรุณาระบุเหตุผลที่ไม่อนุมัติ","warning");return}n.disabled=!0;try{const m=((p=d.teacher)==null?void 0:p.id)??null;b.status==="pending_advisor"?await Is({id:u,approve:i,teacherId:m,comment:c.trim()}):b.status==="pending_dept_head"?await Cs({id:u,approve:i,teacherId:m,comment:c.trim(),signatureUrl:((f=d.teacher)==null?void 0:f.signature_url)??null}):b.status==="pending_director"&&await Ls({id:u,approve:i,teacherId:m,comment:c.trim(),signatureUrl:((v=d.teacher)==null?void 0:v.signature_url)??null}),g(i?"อนุมัติแล้ว ✅":"ตีกลับให้แก้ไขแล้ว","success"),H=null,_()}catch(m){g("บันทึกไม่สำเร็จ: "+S(m),"error"),n.disabled=!1}})}),document.querySelectorAll(".btn-print-doc").forEach(n=>{n.addEventListener("click",()=>{const i=H.find(u=>u.id===Number(n.dataset.id));i&&Vr(i)})}),document.querySelectorAll(".btn-view-doc-detail").forEach(n=>{n.addEventListener("click",()=>{tt=Number(n.dataset.id),_()})}),(o=document.getElementById("btn-doc-detail-close"))==null||o.addEventListener("click",()=>{tt=null,_()}),(s=document.getElementById("btn-doc-detail-print"))==null||s.addEventListener("click",()=>{const n=H.find(i=>i.id===tt);n&&Vr(n)})}function kl(){var e;(e=document.getElementById("criterion-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=r.name.value.trim(),o=Number(r.weight.value);if(!a||!o){g("กรอกชื่อเกณฑ์และคะแนนให้ครบ","warning");return}try{await _s({name:a,weight:o}),te=null,_()}catch(s){g("บันทึกไม่สำเร็จ: "+S(s),"error")}}),document.querySelectorAll(".btn-remove-criterion").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ลบเกณฑ์นี้ออกจากการประเมิน?"))try{await gs(Number(t.dataset.id)),te=null,_()}catch(r){g("ลบไม่สำเร็จ: "+S(r),"error")}})}),document.querySelectorAll(".btn-toggle-eval").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);Et=Et===r?null:r,_()})}),document.querySelectorAll(".eval-score-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const a=Number(t.dataset.memberId),o=t.decision.value;if(!o){g("กรุณาเลือกสรุปผล","warning");return}const s={};let n=0;te.forEach(b=>{var p;const c=(p=t[`c_${b.id}`])==null?void 0:p.value;c!==""&&c!=null&&(s[b.id]=Number(c),n+=Number(c))});const i=te.reduce((b,c)=>b+Number(c.weight),0),u=t.querySelector('button[type="submit"]');u.disabled=!0,u.textContent="กำลังบันทึก...";try{await hs({memberId:a,academicYear:P,scores:s,totalScore:n,maxScore:i,decision:o,comment:t.comment.value.trim(),evaluatorTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null}),g("บันทึกผลประเมินแล้ว ✅","success"),Be=null,Et=null,_()}catch(b){g("บันทึกไม่สำเร็จ: "+S(b),"error"),u.disabled=!1,u.textContent="บันทึกผลประเมิน"}})}),document.querySelectorAll(".btn-issue-cert").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.memberId),a=d.members.find(s=>s.id===r),o=Be[r];if(!(!a||!o)){t.disabled=!0,t.textContent="กำลังออก...";try{const s=`${P}-${String(o.id).padStart(4,"0")}`;await ws({evaluationId:o.id,certificateNo:s}),o.certificate_no=s,o.certificate_issued_at=new Date().toISOString(),zr(a,o),_()}catch(s){g("ออกเกียรติบัตรไม่สำเร็จ: "+S(s),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}}})}),document.querySelectorAll(".btn-view-cert").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.memberId),a=d.members.find(s=>s.id===r),o=Be[r];a&&o&&zr(a,o)})})}function El(){var e;(e=document.getElementById("activity-form"))==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=t.target,a=r.title.value.trim();if(!a){g("กรุณากรอกชื่อกิจกรรม","warning");return}const o=r.querySelector('button[type="submit"]');o.disabled=!0,o.textContent="กำลังบันทึก...";try{await Gn({title:a,detail:r.detail.value.trim(),gender:r.gender.value||null,activityDate:r.activity_date.value||null,budget:r.budget.value?Number(r.budget.value):null,ownerText:r.owner_text.value.trim(),academicYear:P,openToGeneral:r.open_to_general.checked,ownerMemberId:r.owner_member_id.value?Number(r.owner_member_id.value):null,countsForEvaluation:r.counts_for_evaluation.checked}),g("สร้างกิจกรรมแล้ว ✅","success"),W=null,_()}catch(s){g("บันทึกไม่สำเร็จ: "+S(s),"error"),o.disabled=!1,o.textContent="สร้างกิจกรรม"}}),document.querySelectorAll(".btn-activity-next").forEach(t=>{t.addEventListener("click",async()=>{t.disabled=!0;try{await Lr(Number(t.dataset.id),t.dataset.next),W=null,_()}catch(r){g("บันทึกไม่สำเร็จ: "+S(r),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cancel").forEach(t=>{t.addEventListener("click",async()=>{if(confirm("ยืนยันยกเลิกกิจกรรมนี้?")){t.disabled=!0;try{await Lr(Number(t.dataset.id),"cancelled"),W=null,_()}catch(r){g("บันทึกไม่สำเร็จ: "+S(r),"error"),t.disabled=!1}}})}),document.querySelectorAll(".btn-activity-attendance").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);ce[r]===void 0&&Fr(r)})}),document.querySelectorAll(".btn-activity-scan").forEach(t=>{t.addEventListener("click",async()=>{const r=Number(t.dataset.id);ce[r]===void 0&&await Fr(r);const a=W.find(s=>s.id===r),o=d.members.filter(s=>{var n;return!(a!=null&&a.gender)||((n=s.council_positions)==null?void 0:n.gender)===a.gender});Ws({activityId:r,activityTitle:t.dataset.title,openToGeneral:!!t.dataset.openGeneral,members:o,alreadyChecked:ce[r],onCheckedIn:s=>{var n;(n=ce[r])==null||n.add(s),_()},onUndo:s=>{var n;(n=ce[r])==null||n.delete(s),_()}})})}),document.querySelectorAll(".btn-checkin").forEach(t=>{t.addEventListener("click",async()=>{var o;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId);t.disabled=!0;try{await aa({activityId:r,studentId:a}),(o=ce[r])==null||o.add(a),_()}catch(s){g("เช็คชื่อไม่สำเร็จ: "+S(s),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-activity-cert-manage").forEach(t=>{t.addEventListener("click",()=>{const r=Number(t.dataset.id);ar=ar===r?null:r,_()})}),document.querySelectorAll(".cert-rule-form").forEach(t=>{t.addEventListener("submit",async r=>{r.preventDefault();const a=r.target,o=Number(a.dataset.activityId),s=a.querySelector('button[type="submit"]');s.disabled=!0,s.textContent="กำลังบันทึก...";try{await Xn({activityId:o,templateId:a.template_id.value?Number(a.template_id.value):null,minAttendanceCount:a.min_attendance_count.value?Number(a.min_attendance_count.value):null,requiredDates:ye(a.required_dates.value),notes:a.notes.value.trim()}),g("บันทึกเงื่อนไขแล้ว ✅","success"),delete Oe[o],_()}catch(n){g("บันทึกไม่สำเร็จ: "+S(n),"error"),s.disabled=!1,s.textContent="บันทึกเงื่อนไข"}})}),document.querySelectorAll(".btn-cert-override").forEach(t=>{t.addEventListener("click",async()=>{var s,n;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId),o=t.dataset.decision||null;t.disabled=!0;try{await es({activityId:r,studentId:a,decision:o,decidedByTeacherId:((s=d.teacher)==null?void 0:s.id)??null,decidedByMemberId:((n=d.membership[0])==null?void 0:n.id)??null}),delete mr[r],Ca(r)}catch(i){g("บันทึกไม่สำเร็จ: "+S(i),"error"),t.disabled=!1}})}),document.querySelectorAll(".btn-cert-issue").forEach(t=>{t.addEventListener("click",async()=>{var u,b;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId),o=W.find(c=>c.id===r),s=Oe[r],i=(u=(br[r]??[]).find(c=>c.student_id===a))==null?void 0:u.students;if(!(s!=null&&s.template_id)){g("กรุณาเลือกเทมเพลตเกียรติบัตรก่อน","warning");return}t.disabled=!0,t.textContent="กำลังออก...";try{const c=await Qa({templateId:s.template_id,recipientType:"student",studentId:a,recipientName:(i==null?void 0:i.full_name)??"—",variables:{reason:`เข้าร่วมกิจกรรม "${(o==null?void 0:o.title)??""}" ของสภานักเรียนจนสำเร็จ`},title:(o==null?void 0:o.title)??null,issuedByTeacherId:((b=d.teacher)==null?void 0:b.id)??null,sourceSystem:"council_activity",sourceRefId:r});et[r]={...et[r]??{},[a]:c},_()}catch(c){g("ออกเกียรติบัตรไม่สำเร็จ: "+S(c),"error"),t.disabled=!1,t.textContent="🏅 ออกเกียรติบัตร"}})}),document.querySelectorAll(".btn-cert-view").forEach(t=>{t.addEventListener("click",()=>{var s;const r=Number(t.dataset.activityId),a=Number(t.dataset.studentId),o=(s=et[r])==null?void 0:s[a];o&&Ka({layout:o.layout_snapshot,variables:{name:o.recipient_name??"",date:new Date(o.issued_at).toLocaleDateString("th-TH",{dateStyle:"long"}),no:o.certificate_no,...o.variables},docTitle:o.title})})})}function Sl(){var e,t,r;(e=document.getElementById("btn-open-ann-form"))==null||e.addEventListener("click",()=>{$t=!0,_()}),(t=document.getElementById("btn-cancel-ann"))==null||t.addEventListener("click",()=>{$t=!1,_()}),document.querySelectorAll(".ann-filter-btn").forEach(a=>{a.addEventListener("click",()=>{wt=a.dataset.filter,_()})}),(r=document.getElementById("announcement-form"))==null||r.addEventListener("submit",async a=>{a.preventDefault();const o=a.target,s=o.title.value.trim();if(!s){g("กรุณากรอกหัวเรื่องประกาศ","warning");return}const n=o.querySelector('button[type="submit"]');n.disabled=!0,n.textContent="กำลังเผยแพร่...";try{await ps({type:o.type.value,audience:o.audience.value,title:s,body:o.body.value.trim(),pinned:o.pinned.checked,postedByTeacherId:d.role==="teacher"&&d.teacher?d.teacher.id:null,postedByStudentId:d.isChair&&d.student?d.student.id:null}),g("เผยแพร่ประกาศแล้ว 📣","success"),$t=!1,jt=null,_()}catch(i){g("เผยแพร่ไม่สำเร็จ: "+S(i),"error"),n.disabled=!1,n.textContent="เผยแพร่ประกาศ"}}),document.querySelectorAll(".btn-ack-ann").forEach(a=>{a.addEventListener("click",async()=>{const o=Number(a.dataset.id);a.disabled=!0,a.textContent="กำลังบันทึก...";try{await bs({announcementId:o,studentId:d.student.id}),pe==null||pe.add(o),me&&(me[o]=(me[o]??0)+1),g("รับทราบแล้ว","success"),_()}catch(s){g("บันทึกไม่สำเร็จ: "+S(s),"error"),a.disabled=!1,a.textContent="รับทราบ"}})})}function Al(){var e,t,r,a,o,s,n,i,u,b;document.querySelectorAll(".apps-filter-btn").forEach(c=>{c.addEventListener("click",()=>{fe=c.dataset.filter,_()})}),document.querySelectorAll(".apps-gender-tab-btn").forEach(c=>{c.addEventListener("click",()=>{ie=c.dataset.gender,De="",_()})}),(e=document.getElementById("apps-grade-filter"))==null||e.addEventListener("change",c=>{gt=c.target.value,_()}),(t=document.getElementById("apps-position-filter"))==null||t.addEventListener("change",c=>{De=c.target.value,_()}),(r=document.getElementById("apps-advisor-endorse-filter"))==null||r.addEventListener("change",c=>{He=c.target.value,_()}),(a=document.getElementById("apps-peer-endorse-filter"))==null||a.addEventListener("change",c=>{We=c.target.value,_()}),document.querySelectorAll(".btn-view-app-detail").forEach(c=>{c.addEventListener("click",()=>{je=Number(c.dataset.id),_()})}),(o=document.getElementById("btn-admin-app-detail-close"))==null||o.addEventListener("click",()=>{je=null,_()}),(s=document.getElementById("admin-app-detail-backdrop"))==null||s.addEventListener("click",c=>{c.target.id==="admin-app-detail-backdrop"&&(je=null,_())}),(n=document.getElementById("btn-delete-council-application"))==null||n.addEventListener("click",c=>{ge=Number(c.currentTarget.dataset.id),_()}),(i=document.getElementById("btn-cancel-council-delete"))==null||i.addEventListener("click",()=>{ge=null,_()}),(u=document.getElementById("council-delete-backdrop"))==null||u.addEventListener("click",c=>{c.target.id==="council-delete-backdrop"&&(ge=null,_())}),(b=document.getElementById("btn-confirm-council-delete"))==null||b.addEventListener("click",async()=>{var f;const c=(f=document.getElementById("council-delete-reason"))==null?void 0:f.value.trim();if(!c){g("กรุณากรอกเหตุผลการลบ","warning");return}const p=document.getElementById("btn-confirm-council-delete");p.disabled=!0,p.textContent="กำลังลบ...";try{await $n(ge,c),g("ลบใบสมัครแบบเก็บประวัติแล้ว ✅","success"),ge=null,je=null,L=null,_()}catch(v){g("ลบใบสมัครไม่สำเร็จ: "+S(v),"error"),p.disabled=!1,p.textContent="ยืนยันลบ"}}),document.querySelectorAll(".schedule-form").forEach(c=>{c.addEventListener("submit",async p=>{p.preventDefault();const f=Number(c.dataset.appId),v=c.dataset.ivId?Number(c.dataset.ivId):null,m=c.scheduled_at.value,x=c.location.value.trim();if(!m){g("กรุณาระบุวันเวลานัดสัมภาษณ์","warning");return}const w=c.interviewerText.value.trim();let I=null;if(w){const C=w.match(/· รหัส (\d+)$/);if(!C){g("กรุณาเลือกชื่อครูจากรายการที่แสดง (หรือเว้นว่างไว้ถ้ายังไม่ระบุ)","warning");return}I=Number(C[1])}const T=c.querySelector('button[type="submit"]');T.disabled=!0,T.textContent="กำลังบันทึก...";try{const C=new Date(m).toISOString();await Cn({applicationId:f,existingInterviewId:v,scheduledAt:C,location:x,interviewerTeacherId:I}),g("นัดสัมภาษณ์แล้ว ✅","success");const y=c.dataset.profileId;if(y){const $=new Date(C).toLocaleString("th-TH",{dateStyle:"medium",timeStyle:"short"});h.functions.invoke("send-push",{body:{title:"🗓️ นัดสัมภาษณ์สภานักเรียน",body:`${c.dataset.positionName||""} — ${$}${x?" · "+x:""}`,url:"council.html",profileIds:[y]}}).catch(()=>{})}L=null,_()}catch(C){g("บันทึกไม่สำเร็จ: "+S(C),"error"),T.disabled=!1,T.textContent="บันทึกนัดสัมภาษณ์"}})}),document.querySelectorAll(".score-form").forEach(c=>{const p=Number(c.dataset.maxWeight),f=Number(c.dataset.passThreshold),v=c.querySelector(".score-total-display"),m=()=>{let x=0;c.querySelectorAll(".score-input").forEach(w=>{w.value!==""&&(x+=Number(w.value))}),v&&(v.textContent=`${x} / ${p} · ต้อง ≥ ${f} จึงผ่าน`)};c.querySelectorAll(".score-input").forEach(x=>x.addEventListener("input",m)),c.addEventListener("submit",async x=>{x.preventDefault();const w=Number(c.dataset.appId),I=c.dataset.ivId?Number(c.dataset.ivId):null;if(!I){g("ไม่พบข้อมูลการนัดสัมภาษณ์","error");return}const T={};let C=0;c.querySelectorAll(".score-input").forEach(A=>{A.value!==""&&(T[A.dataset.criterionId]=Number(A.value),C+=Number(A.value))});const y=C>=f?"pass":"fail",$=c.comment.value.trim(),E=c.querySelector('button[type="submit"]');E.disabled=!0,E.textContent="กำลังบันทึก...";try{await Ln({interviewId:I,applicationId:w,score:C,scores:T,result:y,comment:$}),g(`บันทึกผลสัมภาษณ์แล้ว ✅ (${y==="pass"?"ผ่าน":"ไม่ผ่าน"})`,"success"),L=null,_()}catch(A){g("บันทึกไม่สำเร็จ: "+S(A),"error"),E.disabled=!1,E.textContent="บันทึกผล"}})}),document.querySelectorAll(".btn-promote-candidate").forEach(c=>{c.addEventListener("click",async()=>{const p=Number(c.dataset.appId),f=L==null?void 0:L.find(v=>v.id===p);if(f){c.disabled=!0,c.textContent="กำลังบันทึก...";try{const v=await ta({gender:f.council_positions.gender,academicYear:P});await qn({applicationId:p,studentId:f.students.id,electionConfigId:v.id,campaignStatement:f.motivation,photoUrl:f.photo_url}),g("ตั้งเป็นผู้สมัครเลือกตั้งแล้ว 🗳️","success"),delete xe[f.council_positions.gender],d.elections=await It().catch(()=>d.elections),L=null,_()}catch(v){g("บันทึกไม่สำเร็จ: "+S(v),"error"),c.disabled=!1,c.textContent="🗳️ ตั้งเป็นผู้สมัครเลือกตั้ง"}}})}),document.querySelectorAll(".btn-appoint-member").forEach(c=>{c.addEventListener("click",async()=>{var v,m,x;const p=Number(c.dataset.appId),f=L==null?void 0:L.find(w=>w.id===p);if(f&&confirm(`ยืนยันแต่งตั้ง ${((v=f.students)==null?void 0:v.full_name)??""} เป็น ${((m=f.council_positions)==null?void 0:m.position_name)??""}?`)){c.disabled=!0,c.textContent="กำลังบันทึก...";try{await Tn({applicationId:p,positionId:f.position_id,studentId:f.students.id,academicYear:P,appointedByTeacherId:(x=d.teacher)==null?void 0:x.id}),g("แต่งตั้งสำเร็จ ✅","success"),L=null,d.members=await Ue().catch(()=>d.members),_()}catch(w){g("บันทึกไม่สำเร็จ: "+S(w),"error"),c.disabled=!1,c.textContent="✅ แต่งตั้งเข้าตำแหน่ง"}}})})}function Il(){var e,t,r,a,o;document.querySelectorAll(".btn-create-election").forEach(s=>{s.addEventListener("click",async()=>{s.disabled=!0;try{const n=await ta({gender:s.dataset.gender,academicYear:P});d.elections=[...d.elections.filter(i=>i.id!==n.id),n],_()}catch(n){g("เปิดใช้งานไม่สำเร็จ: "+S(n),"error"),s.disabled=!1}})}),document.querySelectorAll(".election-window-form").forEach(s=>{s.addEventListener("submit",async n=>{n.preventDefault();const i=Number(s.dataset.electionId),u=s.opens_at.value?new Date(s.opens_at.value).toISOString():null,b=s.closes_at.value?new Date(s.closes_at.value).toISOString():null,c=s.querySelector('button[type="submit"]');c.disabled=!0;try{await Rn({electionConfigId:i,opensAt:u,closesAt:b}),d.elections=await It().catch(()=>d.elections),g("บันทึกช่วงเวลาแล้ว","success"),_()}catch(p){g("บันทึกไม่สำเร็จ: "+S(p),"error"),c.disabled=!1}})}),document.querySelectorAll(".btn-publish-results").forEach(s=>{s.addEventListener("click",async()=>{if(confirm("ยืนยันประกาศผลและแต่งตั้งผู้ชนะเป็นประธานสภา? การกระทำนี้ย้อนกลับไม่ได้")){s.disabled=!0,s.textContent="กำลังประกาศผล...";try{await Bn({electionConfigId:Number(s.dataset.electionId),gender:s.dataset.gender,academicYear:P}),g("ประกาศผลแล้ว 🎉","success"),d.elections=await It().catch(()=>d.elections),d.members=await Ue().catch(()=>d.members),_()}catch(n){g("ประกาศผลไม่สำเร็จ: "+S(n),"error"),s.disabled=!1,s.textContent="📢 ประกาศผล+แต่งตั้ง"}}})}),document.querySelectorAll(".candidate-card-btn").forEach(s=>{s.addEventListener("click",()=>{Re={gender:s.dataset.gender,id:Number(s.dataset.id)},_e=!1,_()})}),(e=document.getElementById("btn-candidate-modal-close"))==null||e.addEventListener("click",()=>{Re=null,_e=!1,_()}),(t=document.getElementById("candidate-modal-backdrop"))==null||t.addEventListener("click",s=>{s.target.id==="candidate-modal-backdrop"&&(Re=null,_e=!1,_())}),(r=document.getElementById("btn-candidate-edit"))==null||r.addEventListener("click",()=>{_e=!0,_()}),(a=document.getElementById("btn-candidate-cancel-edit"))==null||a.addEventListener("click",()=>{_e=!1,_()}),(o=document.getElementById("candidate-edit-form"))==null||o.addEventListener("submit",async s=>{s.preventDefault();const n=s.target,i=Number(n.dataset.candidateId),u=n.slogan.value.trim(),b=n.vision.value.trim(),c=n.policies.value.split(`
`).map(v=>v.trim()).filter(Boolean),p=n.experience.value.split(`
`).map(v=>v.trim()).filter(Boolean),f=n.querySelector('button[type="submit"]');f.disabled=!0,f.textContent="กำลังบันทึก...";try{await On({candidateId:i,slogan:u,vision:b,policies:c,experience:p});const{gender:v}=Re;xe[v]=await ra(gr(v).id).catch(()=>xe[v]),_e=!1,g("บันทึกโปรไฟล์ผู้สมัครแล้ว ✅","success"),_()}catch(v){g("บันทึกไม่สำเร็จ: "+S(v),"error"),f.disabled=!1,f.textContent="บันทึก"}})}const Cl={auto:"ตามระบบ",light:"สว่าง",dark:"มืด"},Ll={auto:"🌓",light:"☀️",dark:"🌙"};function Wt(e){const t=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.toggleAttribute("data-dark",t);const r=document.getElementById("council-theme-icon"),a=document.getElementById("council-theme-label");r&&(r.textContent=Ll[e]),a&&(a.textContent=Cl[e])}function ql(){var t;const e=localStorage.getItem("council_theme")||"auto";Wt(e),(t=document.getElementById("council-theme-toggle"))==null||t.addEventListener("click",()=>{const r=localStorage.getItem("council_theme")||"auto",a=r==="auto"?"light":r==="light"?"dark":"auto";localStorage.setItem("council_theme",a),Wt(a)}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("council_theme")||"auto")==="auto"&&Wt("auto")})}ql();_o();
