-- ใช้ชื่อ placeholder ให้ตรงกับตัวแปรที่เกียรติบัตรเหรียญกีฬาสีส่งมา
update public.certificate_templates t
set layout = jsonb_set(
  jsonb_set(
    t.layout,
    '{elements,1,text}',
    to_jsonb('ได้รับรางวัล{{medal_label}}'::text),
    false
  ),
  '{elements,2,text}',
  to_jsonb('ในการแข่งขัน {{sport_name}}'::text),
  false
),
updated_at = now()
where t.name = 'กีฬาสี'
  and t.layout->'elements'->1->>'text' = 'ได้รับรางวัล{{award}}'
  and t.layout->'elements'->2->>'text' = 'ในการแข่งขัน {{types}}';
