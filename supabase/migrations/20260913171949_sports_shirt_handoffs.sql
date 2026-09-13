-- Shirt handoffs use the existing shirt-monitor password gate; no new credential.
BEGIN;
CREATE SCHEMA IF NOT EXISTS private;
CREATE TABLE public.sports_shirt_handoff_rooms (
 event_id uuid NOT NULL REFERENCES public.events(id), room text NOT NULL,
 revision integer NOT NULL DEFAULT 0, PRIMARY KEY(event_id,room)
);
CREATE TABLE public.sports_shirt_handoffs (
 id uuid PRIMARY KEY, event_id uuid NOT NULL, room text NOT NULL,
 quantity integer NOT NULL CHECK(quantity>0), receiver_kind text NOT NULL CHECK(receiver_kind IN ('advisor','leader','other')),
 receiver_name text NOT NULL CHECK(length(trim(receiver_name)) BETWEEN 2 AND 200),
 note text NOT NULL DEFAULT '', target_snapshot jsonb NOT NULL,
 recorded_by uuid, recorder_name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(),
 cancelled_at timestamptz, cancel_reason text,
 FOREIGN KEY(event_id,room) REFERENCES public.sports_shirt_handoff_rooms(event_id,room)
);
CREATE INDEX ON public.sports_shirt_handoffs(event_id,room,created_at);
CREATE TABLE public.sports_shirt_handoff_issues (
 id uuid PRIMARY KEY, event_id uuid NOT NULL, room text NOT NULL,
 handoff_id uuid REFERENCES public.sports_shirt_handoffs(id), note text NOT NULL,
 opened_at timestamptz NOT NULL DEFAULT now(), opened_by text NOT NULL,
 resolved_at timestamptz, resolved_by text, resolution text,
 FOREIGN KEY(event_id,room) REFERENCES public.sports_shirt_handoff_rooms(event_id,room)
);
CREATE INDEX ON public.sports_shirt_handoff_issues(event_id,room,opened_at);
CREATE TABLE public.sports_shirt_handoff_history (
 id uuid PRIMARY KEY, event_id uuid NOT NULL, room text NOT NULL, action text NOT NULL,
 actor_id uuid, actor_name text NOT NULL, payload jsonb NOT NULL, result jsonb NOT NULL,
 created_at timestamptz NOT NULL DEFAULT now(),
 FOREIGN KEY(event_id,room) REFERENCES public.sports_shirt_handoff_rooms(event_id,room)
);
CREATE INDEX ON public.sports_shirt_handoff_history(event_id,room,created_at);
ALTER TABLE public.sports_shirt_handoff_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_shirt_handoffs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_shirt_handoff_issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sports_shirt_handoff_history ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.sports_shirt_handoff_rooms,public.sports_shirt_handoffs,public.sports_shirt_handoff_issues,public.sports_shirt_handoff_history FROM PUBLIC,anon,authenticated;

-- Build unfiltered room targets once from the server-owned legacy snapshot.
CREATE FUNCTION private.shirt_handoff_targets(p_snapshot jsonb)
RETURNS TABLE(room text,target jsonb) LANGUAGE sql IMMUTABLE SET search_path='' AS $$
 WITH students AS (
  SELECT DISTINCT ON (s->>'id') s FROM jsonb_array_elements(coalesce(p_snapshot->'students','[]')) s
  WHERE nullif(trim(s->>'main_room'),'') IS NOT NULL ORDER BY s->>'id',s->>'team_color_id'
 ), requests AS (SELECT r FROM jsonb_array_elements(coalesce(p_snapshot->'shirt_requests','[]')) r)
 SELECT trim(s->>'main_room'),jsonb_agg(jsonb_build_object(
 'id',s->'id','name',s->>'full_name','student_code',s->>'student_code','gender',s->>'gender',
 'color_id',s->>'team_color_id','color',s->>'color_name',
 'size',coalesce(nullif(r->>'confirmed_size',''),nullif(r->>'requested_size','')),
 'confirmed',coalesce(r->>'status' IN ('confirmed','advisor_updated') AND coalesce(nullif(r->>'confirmed_size',''),nullif(r->>'requested_size','')) IS NOT NULL,false)
 ) ORDER BY s->>'id')
 FROM students LEFT JOIN requests ON r->>'student_id'=s->>'id' GROUP BY trim(s->>'main_room');
$$;
CREATE FUNCTION private.shirt_handoff_rows(p_snapshot jsonb,p_event uuid) RETURNS jsonb
LANGUAGE sql STABLE SECURITY DEFINER SET search_path='' AS $$
 WITH targets AS MATERIALIZED (SELECT * FROM private.shirt_handoff_targets(p_snapshot)),
 rooms AS (SELECT room FROM targets UNION SELECT room FROM public.sports_shirt_handoff_rooms WHERE event_id=p_event)
 SELECT coalesce(jsonb_agg(jsonb_build_object('room',r.room,'target',coalesce(t.target,'[]'),
 'target_hash',md5(coalesce(t.target,'[]')::text),'revision',coalesce(h.revision,0),
 'receipts',(SELECT coalesce(jsonb_agg(to_jsonb(x)-'target_snapshot' ORDER BY x.created_at DESC),'[]') FROM public.sports_shirt_handoffs x WHERE x.event_id=p_event AND x.room=r.room),
 'issues',(SELECT coalesce(jsonb_agg(to_jsonb(x) ORDER BY x.opened_at DESC),'[]') FROM public.sports_shirt_handoff_issues x WHERE x.event_id=p_event AND x.room=r.room),
 'history',(SELECT coalesce(jsonb_agg(jsonb_build_object('action',x.action,'name',x.actor_name,'at',x.created_at,'detail',x.result) ORDER BY x.created_at DESC),'[]') FROM public.sports_shirt_handoff_history x WHERE x.event_id=p_event AND x.room=r.room)
 ) ORDER BY r.room),'[]') FROM rooms r LEFT JOIN targets t USING(room)
 LEFT JOIN public.sports_shirt_handoff_rooms h ON h.event_id=p_event AND h.room=r.room;
$$;
CREATE FUNCTION public.get_sports_shirt_handoff_snapshot(p_password text) RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE snap jsonb; e uuid; actor text;
BEGIN
 -- The existing function validates the password before returning any data.
 snap:=public.get_public_sports_shirt_snapshot(p_password);
 SELECT id INTO e FROM public.events WHERE status='active' ORDER BY academic_year DESC LIMIT 1;
 SELECT full_name INTO actor FROM public.teachers WHERE profile_id=auth.uid() LIMIT 1;
 RETURN snap||jsonb_build_object('handoff_event_id',e,'handoff_recorder',actor,'handoff_rooms',private.shirt_handoff_rows(snap,e));
END $$;
CREATE FUNCTION public.save_sports_shirt_handoff(p_password text,p_event uuid,p_room text,p_action text,p_revision integer,p_target_hash text,p_request_id uuid,p_data jsonb)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE snap jsonb; e uuid; target jsonb; rev integer; eligible integer; received integer; qty integer;
 actor text; payload jsonb; old_log public.sports_shirt_handoff_history; result jsonb; item_id uuid; note_value text;
BEGIN
 snap:=public.get_public_sports_shirt_snapshot(p_password);
 SELECT id INTO e FROM public.events WHERE status='active' ORDER BY academic_year DESC LIMIT 1;
 IF e IS NULL OR e IS DISTINCT FROM p_event THEN RAISE EXCEPTION 'กิจกรรมเปลี่ยนแล้ว กรุณารีเฟรชหน้า'; END IF;
 IF nullif(trim(p_room),'') IS NULL OR length(p_room)>200 OR p_request_id IS NULL OR p_action IS NULL OR p_data IS NULL OR jsonb_typeof(p_data)<>'object' THEN RAISE EXCEPTION 'ข้อมูลบันทึกไม่ครบ'; END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(p_event::text||':'||p_room,0));
 payload:=jsonb_build_object('event',p_event,'room',p_room,'action',p_action,'revision',p_revision,'target_hash',p_target_hash,'data',p_data);
 SELECT * INTO old_log FROM public.sports_shirt_handoff_history WHERE id=p_request_id;
 IF FOUND THEN
  IF old_log.payload IS DISTINCT FROM payload THEN RAISE EXCEPTION 'รหัสคำขอนี้ถูกใช้แล้ว กรุณารีเฟรช'; END IF;
  RETURN old_log.result;
 END IF;
 SELECT t.target INTO target FROM private.shirt_handoff_targets(snap) t WHERE t.room=p_room;
 IF target IS NULL AND NOT EXISTS(SELECT 1 FROM public.sports_shirt_handoff_rooms WHERE event_id=p_event AND room=p_room) THEN RAISE EXCEPTION 'ไม่พบห้องเรียน'; END IF;
 target:=coalesce(target,'[]');
 INSERT INTO public.sports_shirt_handoff_rooms(event_id,room) VALUES(p_event,p_room) ON CONFLICT DO NOTHING;
 SELECT revision INTO rev FROM public.sports_shirt_handoff_rooms WHERE event_id=p_event AND room=p_room FOR UPDATE;
 IF rev IS DISTINCT FROM p_revision THEN RAISE EXCEPTION 'มีการบันทึกโดยทีมงานอื่นแล้ว กรุณารีเฟรช'; END IF;
 IF md5(target::text) IS DISTINCT FROM p_target_hash THEN RAISE EXCEPTION 'รายชื่อหรือไซซ์เปลี่ยนแล้ว กรุณารีเฟรชเพื่อตรวจยอดใหม่'; END IF;
 SELECT full_name INTO actor FROM public.teachers WHERE profile_id=auth.uid() LIMIT 1;
 actor:=coalesce(actor,trim(p_data->>'recorder_name'));
 IF actor IS NULL OR length(actor) NOT BETWEEN 2 AND 200 THEN RAISE EXCEPTION 'กรุณาระบุชื่อผู้บันทึก'; END IF;
 note_value:=trim(coalesce(p_data->>'note',''));
 IF length(note_value)>3000 THEN RAISE EXCEPTION 'หมายเหตุยาวเกิน 3000 ตัวอักษร'; END IF;
 IF p_action='receive' THEN
  IF coalesce(p_data->>'quantity','') !~ '^[0-9]{1,5}$' THEN RAISE EXCEPTION 'กรุณาระบุจำนวนเสื้อเป็นจำนวนเต็ม'; END IF;
  qty:=(p_data->>'quantity')::integer;
  SELECT count(*) INTO eligible FROM jsonb_array_elements(target) t WHERE (t->>'confirmed')::boolean;
  SELECT coalesce(sum(quantity),0) INTO received FROM public.sports_shirt_handoffs WHERE event_id=p_event AND room=p_room AND cancelled_at IS NULL;
  IF qty<=0 OR qty>eligible-received THEN RAISE EXCEPTION 'จำนวนรับเกินยอดคงเหลือของทั้งห้อง'; END IF;
  IF coalesce(p_data->>'receiver_kind','') NOT IN ('advisor','leader','other') OR length(trim(coalesce(p_data->>'receiver_name',''))) NOT BETWEEN 2 AND 200 THEN RAISE EXCEPTION 'กรุณาระบุประเภทและชื่อผู้รับ'; END IF;
  IF coalesce((p_data->>'has_issue')::boolean,false) AND note_value='' THEN RAISE EXCEPTION 'กรุณาระบุรายละเอียดเรื่องค้าง'; END IF;
  INSERT INTO public.sports_shirt_handoffs(id,event_id,room,quantity,receiver_kind,receiver_name,note,target_snapshot,recorded_by,recorder_name)
  VALUES(p_request_id,p_event,p_room,qty,p_data->>'receiver_kind',trim(p_data->>'receiver_name'),note_value,target,auth.uid(),actor);
  IF coalesce((p_data->>'has_issue')::boolean,false) THEN
   INSERT INTO public.sports_shirt_handoff_issues(id,event_id,room,handoff_id,note,opened_by) VALUES(gen_random_uuid(),p_event,p_room,p_request_id,note_value,actor);
  END IF;
  result:=jsonb_build_object('quantity',qty,'receiver',trim(p_data->>'receiver_name'),'note',note_value);
 ELSIF p_action='issue' THEN
  IF note_value='' THEN RAISE EXCEPTION 'กรุณาระบุรายละเอียดเรื่องค้าง'; END IF;
  INSERT INTO public.sports_shirt_handoff_issues(id,event_id,room,note,opened_by) VALUES(p_request_id,p_event,p_room,note_value,actor);
  result:=jsonb_build_object('note',note_value);
 ELSIF p_action IN ('resolve','reopen') THEN
  item_id:=(p_data->>'issue_id')::uuid;
  IF note_value='' THEN RAISE EXCEPTION 'กรุณาระบุผลการแก้ไขหรือเหตุผล'; END IF;
  UPDATE public.sports_shirt_handoff_issues SET resolved_at=CASE WHEN p_action='resolve' THEN now() END,
   resolved_by=CASE WHEN p_action='resolve' THEN actor END,resolution=CASE WHEN p_action='resolve' THEN note_value END
  WHERE id=item_id AND event_id=p_event AND room=p_room AND ((p_action='resolve' AND resolved_at IS NULL) OR (p_action='reopen' AND resolved_at IS NOT NULL));
  IF NOT FOUND THEN RAISE EXCEPTION 'สถานะเรื่องค้างเปลี่ยนแล้ว กรุณารีเฟรช'; END IF;
  result:=jsonb_build_object('issue_id',item_id,'note',note_value);
 ELSIF p_action='cancel' THEN
  item_id:=(p_data->>'receipt_id')::uuid;
  IF note_value='' THEN RAISE EXCEPTION 'กรุณาระบุเหตุผลที่ยกเลิกบันทึกรับเสื้อ'; END IF;
  UPDATE public.sports_shirt_handoffs SET cancelled_at=now(),cancel_reason=note_value
  WHERE id=item_id AND event_id=p_event AND room=p_room AND cancelled_at IS NULL;
  IF NOT FOUND THEN RAISE EXCEPTION 'ไม่พบบันทึกที่ยกเลิกได้'; END IF;
  result:=jsonb_build_object('receipt_id',item_id,'note',note_value);
 ELSE RAISE EXCEPTION 'ไม่รองรับการดำเนินการนี้'; END IF;
 UPDATE public.sports_shirt_handoff_rooms SET revision=revision+1 WHERE event_id=p_event AND room=p_room;
 INSERT INTO public.sports_shirt_handoff_history(id,event_id,room,action,actor_id,actor_name,payload,result)
 VALUES(p_request_id,p_event,p_room,p_action,auth.uid(),actor,payload,result);
 RETURN result;
END $$;
REVOKE ALL ON FUNCTION private.shirt_handoff_targets(jsonb),private.shirt_handoff_rows(jsonb,uuid) FROM PUBLIC,anon,authenticated;
REVOKE ALL ON FUNCTION public.get_sports_shirt_handoff_snapshot(text),public.save_sports_shirt_handoff(text,uuid,text,text,integer,text,uuid,jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_sports_shirt_handoff_snapshot(text),public.save_sports_shirt_handoff(text,uuid,text,text,integer,text,uuid,jsonb) TO anon,authenticated;
COMMIT;
