const SUPABASE_URL = 'https://isupghduywzqbmnjgtip.supabase.co';
const SUPABASE_KEY = 'sb_publishable_LZEC92mMf_usMKRR9_eSeA_OQCK1dv0';
const SETTINGS_KEY = 'aziz_public_buttons';
const VISIBILITY_KEY = 'aziz_sports_visibility';
const DEFAULT_BUTTONS = {
  athlete_size: false,
  athlete_registration: false,
  athlete_print: true,
  athlete_certificate: true,
};
const DEFAULT_VISIBILITY = {
  enabled: true,
  teacher_menu: true,
  student_menu: true,
  public_page: true,
};
const DEFAULT_EVENT_ID = '00000000-0000-0000-0000-000000000001';
let sportsPortalEventId = DEFAULT_EVENT_ID;
const SPORT_CSV_HEADERS = [
  'sp_id',
  'sport_name',
  'group_type',
  'gender',
  'max_players',
  'venue',
  'responsible_teacher',
  'icon_url',
  'rules_url',
];

const readButtons = () => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...DEFAULT_BUTTONS, ...JSON.parse(raw) } : { ...DEFAULT_BUTTONS };
  } catch {
    return { ...DEFAULT_BUTTONS };
  }
};

const writeButtons = (value) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...DEFAULT_BUTTONS, ...value }));
};

const readVisibility = () => {
  try {
    const raw = localStorage.getItem(VISIBILITY_KEY);
    return raw ? { ...DEFAULT_VISIBILITY, ...JSON.parse(raw) } : { ...DEFAULT_VISIBILITY };
  } catch {
    return { ...DEFAULT_VISIBILITY };
  }
};

const writeVisibility = (value) => {
  localStorage.setItem(VISIBILITY_KEY, JSON.stringify({ ...DEFAULT_VISIBILITY, ...value }));
};

const getAccessToken = () => {
  try {
    const raw = localStorage.getItem('sb-isupghduywzqbmnjgtip-auth-token');
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed?.access_token || parsed?.currentSession?.access_token || null;
  } catch {
    return null;
  }
};

const restHeaders = (useSession = false) => {
  const token = useSession ? getAccessToken() : null;
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${token || SUPABASE_KEY}`,
    'Content-Type': 'application/json',
  };
};

const loadPublicButtons = async () => {
  try {
    const [settingsRes, portalRes] = await Promise.all([
      fetch(
        `${SUPABASE_URL}/rest/v1/settings?key=in.(public_buttons,sports_visibility)&select=key,value`,
        { headers: restHeaders(false) },
      ),
      fetch(
        `${SUPABASE_URL}/rest/v1/sports_portal_settings?select=event_id,shirt_request_enabled&limit=1`,
        { headers: restHeaders(false) },
      ),
    ]);
    if (!settingsRes.ok) return;
    const rows = await settingsRes.json();
    rows?.forEach((row) => {
      if (row.key === 'public_buttons' && row.value) writeButtons(row.value);
      if (row.key === 'sports_visibility' && row.value) writeVisibility(row.value);
    });
    if (portalRes.ok) {
      const portalRows = await portalRes.json();
      const portal = portalRows?.[0];
      if (portal?.event_id) sportsPortalEventId = portal.event_id;
      if (typeof portal?.shirt_request_enabled === 'boolean') {
        writeButtons({ ...readButtons(), athlete_size: portal.shirt_request_enabled });
      }
    }
  } catch (error) {
    console.warn('Unable to load AZIZGAMES public settings', error);
  }
};

const savePublicButtons = async (value) => {
  writeButtons(value);
  const payload = {
    key: 'public_buttons',
    value: { ...DEFAULT_BUTTONS, ...value },
    description: 'Controls which athlete-page actions are visible and usable by public visitors.',
    updated_at: new Date().toISOString(),
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/settings?on_conflict=key`, {
    method: 'POST',
    headers: {
      ...restHeaders(true),
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(detail || `Supabase responded with ${res.status}`);
  }
};

const saveSportsVisibility = async (value) => {
  writeVisibility(value);
  const payload = {
    key: 'sports_visibility',
    value: { ...DEFAULT_VISIBILITY, ...value },
    description: 'Controls AZIZGAMES visibility for PP5, teachers, students, and public visitors.',
    updated_at: new Date().toISOString(),
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/settings?on_conflict=key`, {
    method: 'POST',
    headers: {
      ...restHeaders(true),
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(detail || `Supabase responded with ${res.status}`);
  }
};

const saveSportsPortalShirtRequest = async (enabled) => {
  const payload = {
    event_id: sportsPortalEventId || DEFAULT_EVENT_ID,
    shirt_request_enabled: Boolean(enabled),
    updated_at: new Date().toISOString(),
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/sports_portal_settings?on_conflict=event_id`, {
    method: 'POST',
    headers: {
      ...restHeaders(true),
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(detail || `Supabase responded with ${res.status}`);
  }
};

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const sportCategory = (groupType = '') => {
  if (groupType === 'AC' || groupType === 'LS') return 'academic';
  if (groupType === 'PR') return 'parade';
  if (groupType === 'PG') return 'page';
  return 'sport';
};

const normalizeGroupType = (value = '') => {
  const raw = String(value || '').trim().toUpperCase();
  const map = {
    กีฬา: 'SP',
    กีฬาสากล: 'SP',
    SPORT: 'SP',
    SPORTS: 'SP',
    พื้นบ้าน: 'FK',
    กีฬาพื้นบ้าน: 'FK',
    กรีฑา: 'AT',
    ATHLETICS: 'AT',
    วิชาการ: 'AC',
    ACADEMIC: 'AC',
    ภาษา: 'LS',
    LANGUAGE: 'LS',
  };
  return ['SP', 'FK', 'AT', 'AC', 'LS'].includes(raw) ? raw : map[value] || map[raw] || 'SP';
};

const normalizeGender = (value = '') => {
  const raw = String(value || '').trim();
  const upper = raw.toUpperCase();
  if (['M', 'ชาย', 'BOY', 'BOYS', 'MALE'].includes(upper) || raw === 'ชาย') return 'M';
  if (['W', 'F', 'หญิง', 'GIRL', 'GIRLS', 'FEMALE'].includes(upper) || raw === 'หญิง') return 'W';
  return 'Coed';
};

const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && inQuotes && next === '"') {
      field += '"';
      i += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      row.push(field);
      field = '';
    } else if ((char === '\n' || char === '\r') && !inQuotes) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(field);
      if (row.some((cell) => String(cell).trim() !== '')) rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }

  row.push(field);
  if (row.some((cell) => String(cell).trim() !== '')) rows.push(row);
  if (rows.length < 2) return [];

  const headers = rows[0].map((cell) => String(cell).replace(/^\uFEFF/, '').trim());
  return rows.slice(1).map((cells) => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = String(cells[index] ?? '').trim();
    });
    return item;
  });
};

const getFirstValue = (row, names) => {
  for (const name of names) {
    if (row[name] != null && String(row[name]).trim() !== '') return String(row[name]).trim();
  }
  return '';
};

const makeCsv = (rows) => {
  const escapeCell = (value) => {
    const text = String(value ?? '');
    return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  return rows.map((row) => row.map(escapeCell).join(',')).join('\n');
};

const downloadSportTemplate = () => {
  const rows = [
    SPORT_CSV_HEADERS,
    ['SP001', 'ฟุตบอล ม.ต้น', 'SP', 'M', '15', 'สนามบอล1', 'ครูผู้ดูแล', '', ''],
    ['AT001', 'วิ่ง 100 เมตร ม.ต้น', 'AT', 'W', '4', 'ลู่วิ่ง', 'ครูผู้ดูแล', '', ''],
  ];
  const blob = new Blob([`\uFEFF${makeCsv(rows)}`], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'azizgames-sports-template.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const readSports = () => {
  try {
    const rows = JSON.parse(localStorage.getItem('aziz_sports') || '[]');
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
};

const nextSportCode = (existing, groupType) => {
  const prefix = normalizeGroupType(groupType);
  const max = existing.reduce((value, sport) => {
    const id = String(sport.sp_id || '');
    const match = id.match(new RegExp(`^${prefix}(\\d+)$`, 'i'));
    return match ? Math.max(value, Number.parseInt(match[1], 10) || 0) : value;
  }, 0);
  return `${prefix}${String(max + 1).padStart(3, '0')}`;
};

const normalizeSportRow = (row, existing) => {
  const groupType = normalizeGroupType(getFirstValue(row, ['group_type', 'category', 'หมวด', 'ประเภท']));
  const spId =
    getFirstValue(row, ['sp_id', 'code', 'รหัส', 'รหัสรายการ']) || nextSportCode(existing, groupType);
  const sportName = getFirstValue(row, ['sport_name', 'name', 'ชื่อรายการ', 'ชื่อแข่งขัน', 'รายการแข่งขัน']);
  if (!sportName) return null;

  const maxPlayers = Number.parseInt(
    getFirstValue(row, ['max_players', 'max_athletes', 'จำนวนสูงสุด', 'ผู้เข้าร่วมสูงสุด']),
    10,
  );

  return {
    sp_id: spId,
    sport_name: sportName,
    group_type: groupType,
    gender: normalizeGender(getFirstValue(row, ['gender', 'เพศ'])),
    max_players: Number.isFinite(maxPlayers) && maxPlayers > 0 ? maxPlayers : 1,
    venue: getFirstValue(row, ['venue', 'สนาม', 'สถานที่']),
    responsible_teacher: getFirstValue(row, ['responsible_teacher', 'teacher', 'ครูผู้รับผิดชอบ', 'ครู']),
    icon_url: getFirstValue(row, ['icon_url', 'icon', 'ไอคอน']),
    rules_url: getFirstValue(row, ['rules_url', 'rules', 'กติกา', 'ลิงก์กติกา']),
  };
};

const prepareSportImport = (text) => {
  const rows = parseCsv(text);
  const currentSports = readSports();
  const currentIds = new Set(currentSports.map((sport) => String(sport.sp_id)));
  const imported = [];
  rows.forEach((row) => {
    const sport = normalizeSportRow(row, [...currentSports, ...imported]);
    if (sport) {
      imported.push({
        ...sport,
        __action: currentIds.has(String(sport.sp_id)) ? 'update' : 'create',
      });
    }
  });

  if (imported.length === 0) {
    return {
      imported: [],
      nextSports: currentSports,
      createCount: 0,
      updateCount: 0,
      skippedCount: rows.length,
    };
  }

  const byId = new Map(currentSports.map((sport) => [String(sport.sp_id), sport]));
  imported.forEach((sport) => {
    const { __action, ...cleanSport } = sport;
    byId.set(String(sport.sp_id), { ...byId.get(String(sport.sp_id)), ...cleanSport });
  });

  return {
    imported,
    nextSports: Array.from(byId.values()),
    createCount: imported.filter((sport) => sport.__action === 'create').length,
    updateCount: imported.filter((sport) => sport.__action === 'update').length,
    skippedCount: Math.max(0, rows.length - imported.length),
  };
};

const closeSportImportPreview = () => {
  document.querySelector('[data-aziz-sports-import-preview]')?.remove();
};

const showSportImportPreview = (preview, statusEl, onConfirm) => {
  closeSportImportPreview();
  if (preview.imported.length === 0) {
    statusEl.textContent = 'ไม่พบรายการแข่งขันในไฟล์ CSV กรุณาตรวจหัวคอลัมน์ sport_name';
    return;
  }

  const rows = preview.imported.slice(0, 120);
  const hiddenCount = preview.imported.length - rows.length;
  const overlay = document.createElement('div');
  overlay.dataset.azizSportsImportPreview = 'true';
  overlay.innerHTML = `
    <style>
      .aziz-sports-preview-backdrop {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 18px;
        background: rgba(2,6,23,.78);
        backdrop-filter: blur(10px);
      }
      .aziz-sports-preview-modal {
        width: min(1080px, 96vw);
        max-height: min(760px, 92vh);
        overflow: hidden;
        border: 1px solid rgba(16,185,129,.30);
        border-radius: 18px;
        background: #0f172a;
        box-shadow: 0 24px 80px rgba(0,0,0,.45);
        color: #e2e8f0;
      }
      .aziz-sports-preview-head {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 18px;
        border-bottom: 1px solid rgba(51,65,85,.8);
        background: linear-gradient(135deg, rgba(16,185,129,.18), rgba(219,39,119,.10));
      }
      .aziz-sports-preview-head h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 900;
      }
      .aziz-sports-preview-head p {
        margin: 4px 0 0;
        color: #94a3b8;
        font-size: 12px;
        line-height: 1.5;
      }
      .aziz-sports-preview-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .aziz-sports-preview-badges span {
        border-radius: 999px;
        padding: 7px 10px;
        background: rgba(2,6,23,.72);
        color: #f8fafc;
        font-size: 12px;
        font-weight: 800;
      }
      .aziz-sports-preview-table-wrap {
        max-height: 460px;
        overflow: auto;
      }
      .aziz-sports-preview-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 860px;
      }
      .aziz-sports-preview-table th,
      .aziz-sports-preview-table td {
        border-bottom: 1px solid rgba(51,65,85,.55);
        padding: 10px 12px;
        text-align: left;
        font-size: 12px;
        vertical-align: top;
      }
      .aziz-sports-preview-table th {
        position: sticky;
        top: 0;
        background: #111827;
        color: #cbd5e1;
        z-index: 1;
      }
      .aziz-sports-preview-table td {
        color: #e5e7eb;
      }
      .aziz-sports-preview-action {
        border-radius: 999px;
        padding: 5px 8px;
        color: #fff;
        font-size: 11px;
        font-weight: 900;
        white-space: nowrap;
      }
      .aziz-sports-preview-action.create {
        background: #059669;
      }
      .aziz-sports-preview-action.update {
        background: #db2777;
      }
      .aziz-sports-preview-foot {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        border-top: 1px solid rgba(51,65,85,.8);
      }
      .aziz-sports-preview-note {
        color: #facc15;
        font-size: 12px;
      }
      .aziz-sports-preview-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .aziz-sports-preview-buttons button {
        border: 0;
        border-radius: 12px;
        padding: 10px 14px;
        color: white;
        font-size: 12px;
        font-weight: 900;
        cursor: pointer;
      }
      .aziz-sports-preview-cancel {
        background: #334155;
      }
      .aziz-sports-preview-confirm {
        background: #059669;
      }
      @media (max-width: 640px) {
        .aziz-sports-preview-foot,
        .aziz-sports-preview-buttons,
        .aziz-sports-preview-buttons button {
          width: 100%;
        }
      }
    </style>
    <div class="aziz-sports-preview-backdrop" role="dialog" aria-modal="true" aria-label="พรีวิวรายการแข่งขัน CSV">
      <div class="aziz-sports-preview-modal">
        <div class="aziz-sports-preview-head">
          <div>
            <h3>ตรวจสอบรายการแข่งขันก่อนนำเข้า</h3>
            <p>ระบบยังไม่บันทึกข้อมูลจนกว่าจะกด “ยืนยันนำเข้า”</p>
          </div>
          <div class="aziz-sports-preview-badges">
            <span>เพิ่มใหม่ ${preview.createCount}</span>
            <span>อัปเดต ${preview.updateCount}</span>
            <span>ข้าม ${preview.skippedCount}</span>
          </div>
        </div>
        <div class="aziz-sports-preview-table-wrap">
          <table class="aziz-sports-preview-table">
            <thead>
              <tr>
                <th>สถานะ</th>
                <th>sp_id</th>
                <th>รายการแข่งขัน</th>
                <th>หมวด</th>
                <th>เพศ</th>
                <th>จำนวนสูงสุด</th>
                <th>สถานที่</th>
                <th>ครูผู้รับผิดชอบ</th>
              </tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  (sport) => `
                    <tr>
                      <td><span class="aziz-sports-preview-action ${sport.__action}">${sport.__action === 'create' ? 'เพิ่มใหม่' : 'อัปเดต'}</span></td>
                      <td>${escapeHtml(sport.sp_id)}</td>
                      <td>${escapeHtml(sport.sport_name)}</td>
                      <td>${escapeHtml(sport.group_type)}</td>
                      <td>${escapeHtml(sport.gender)}</td>
                      <td>${escapeHtml(sport.max_players)}</td>
                      <td>${escapeHtml(sport.venue || '-')}</td>
                      <td>${escapeHtml(sport.responsible_teacher || '-')}</td>
                    </tr>
                  `,
                )
                .join('')}
            </tbody>
          </table>
        </div>
        <div class="aziz-sports-preview-foot">
          <div class="aziz-sports-preview-note">
            ${hiddenCount > 0 ? `แสดงตัวอย่าง 120 รายการแรก และมีอีก ${hiddenCount} รายการที่จะนำเข้า` : 'ตรวจสอบแล้วกดยืนยันเพื่อนำเข้าข้อมูล'}
          </div>
          <div class="aziz-sports-preview-buttons">
            <button type="button" class="aziz-sports-preview-cancel" data-cancel-sport-import>ยกเลิก</button>
            <button type="button" class="aziz-sports-preview-confirm" data-confirm-sport-import>ยืนยันนำเข้า</button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('[data-cancel-sport-import]')?.addEventListener('click', () => {
    closeSportImportPreview();
    statusEl.textContent = 'ยกเลิกการนำเข้าแล้ว';
  });
  overlay.querySelector('[data-confirm-sport-import]')?.addEventListener('click', () => {
    onConfirm(preview, statusEl);
  });
};

const importSportCsvFile = async (file, statusEl) => {
  const text = await file.text();
  const preview = prepareSportImport(text);
  showSportImportPreview(preview, statusEl, commitSportImport);
};

let sportsSyncTimer = null;

const buildSportsPayload = (sports) =>
  sports
    .filter((sport) => sport?.sp_id && sport?.sport_name)
    .map((sport, index) => ({
      event_id: DEFAULT_EVENT_ID,
      code: String(sport.sp_id),
      name: sport.sport_name,
      category: sportCategory(sport.group_type),
      gender: sport.gender || 'Coed',
      max_athletes: Number.parseInt(sport.max_players, 10) || null,
      venue: sport.venue || null,
      rules: sport.rules_url || sport.rules || null,
      is_active: true,
      display_order: index + 1,
      updated_at: new Date().toISOString(),
    }));

const saveSportsToSupabase = async (sports) => {
  const token = getAccessToken();
  if (!token) {
    throw new Error('ยังไม่มี session สำหรับบันทึกฐานข้อมูล กรุณาเข้าใช้งานผ่านบัญชีแอดมินหรือครูที่ได้รับสิทธิ์');
  }

  const payload = buildSportsPayload(sports);
  if (payload.length === 0) {
    throw new Error('ไม่พบรายการแข่งขันที่พร้อมบันทึก');
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/sports?on_conflict=event_id,code`, {
    method: 'POST',
    headers: {
      ...restHeaders(true),
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(await res.text());
  return payload.length;
};

const commitSportImport = async (preview, statusEl) => {
  const confirmButton = document.querySelector('[data-confirm-sport-import]');
  if (confirmButton) {
    confirmButton.disabled = true;
    confirmButton.textContent = 'กำลังบันทึก...';
  }
  statusEl.textContent = 'กำลังบันทึกลงฐานข้อมูล...';
  try {
    await saveSportsToSupabase(preview.nextSports);
    localStorage.setItem('aziz_sports', JSON.stringify(preview.nextSports));
    closeSportImportPreview();
    statusEl.textContent = `ยืนยันนำเข้าแล้ว: เพิ่มใหม่ ${preview.createCount} รายการ, อัปเดต ${preview.updateCount} รายการ กำลังรีเฟรชหน้า`;
    setTimeout(() => window.location.reload(), 900);
  } catch (error) {
    console.warn('Unable to save AZIZGAMES sports CSV import', error);
    statusEl.textContent = error?.message || 'บันทึกฐานข้อมูลไม่สำเร็จ กรุณาตรวจสิทธิ์หรือ RLS ตาราง sports';
    if (confirmButton) {
      confirmButton.disabled = false;
      confirmButton.textContent = 'ยืนยันนำเข้า';
    }
  }
};

const syncSportsToSupabase = (rawValue) => {
  clearTimeout(sportsSyncTimer);
  sportsSyncTimer = setTimeout(async () => {
    let sports;
    try {
      sports = JSON.parse(rawValue || '[]');
    } catch {
      return;
    }
    if (!Array.isArray(sports) || sports.length === 0) return;

    try {
      const syncedCount = await saveSportsToSupabase(sports);
      console.info(`Synced ${syncedCount} AZIZGAMES sports to Supabase`);
    } catch (error) {
      console.warn('Unable to sync AZIZGAMES sports to Supabase', error);
    }
  }, 600);
};

const installSportsSync = () => {
  if (window.__azizSportsSyncInstalled) return;
  window.__azizSportsSyncInstalled = true;
  const originalSetItem = localStorage.setItem.bind(localStorage);
  localStorage.setItem = (key, value) => {
    const result = originalSetItem(key, value);
    if (key === 'aziz_sports') syncSportsToSupabase(value);
    return result;
  };
};

const makeActionCard = (attr, name, label, help, enabled) => `
  <div class="aziz-public-action-card ${enabled ? 'is-on' : 'is-off'}" ${attr}="${name}" data-enabled="${enabled ? 'true' : 'false'}">
    <div>
      <strong>${label}</strong>
      <small>${help}</small>
      <em>${enabled ? 'เปิดใช้งานอยู่' : 'ปิดใช้งานอยู่'}</em>
    </div>
    <button type="button" data-action-toggle>${enabled ? 'ปิดใช้งาน' : 'เปิดใช้งาน'}</button>
  </div>
`;

const makeToggle = (name, label, help, checked) =>
  makeActionCard('data-public-button', name, label, help, checked);

const makeVisibilityToggle = (name, label, help, checked) =>
  makeActionCard('data-sports-visibility', name, label, help, checked);

const canManageSports = () =>
  localStorage.getItem('aziz_is_logged_in') === 'true' ||
  (localStorage.getItem('aziz_sports_admin_allowed') === 'true' && Boolean(getAccessToken()));

const injectPanel = () => {
  if (localStorage.getItem('aziz_is_logged_in') !== 'true') return;
  if (document.querySelector('[data-aziz-public-controls]')) return;

  const form = Array.from(document.querySelectorAll('form')).find((item) =>
    item.textContent?.includes('ตั้งค่าประกาศและโครงสร้างแสดงผล'),
  );
  if (!form) return;

  const value = readButtons();
  const visibility = readVisibility();
  const panel = document.createElement('section');
  panel.dataset.azizPublicControls = 'true';
  panel.className = 'aziz-public-controls';
  panel.innerHTML = `
    <style>
      .aziz-public-controls {
        border: 1px solid rgba(236,72,153,.28);
        border-radius: 16px;
        padding: 16px;
        background: linear-gradient(135deg, rgba(15,23,42,.78), rgba(131,24,67,.16));
        box-shadow: 0 16px 36px rgba(0,0,0,.18);
      }
      .aziz-public-controls h5 {
        margin: 0;
        color: #f9a8d4;
        font-size: 14px;
        font-weight: 800;
      }
      .aziz-public-controls p {
        margin: 4px 0 14px;
        color: #94a3b8;
        font-size: 12px;
        line-height: 1.55;
      }
      .aziz-public-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 10px;
      }
      .aziz-public-action-card {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        padding: 12px;
        border: 1px solid rgba(51,65,85,.9);
        border-radius: 12px;
        background: rgba(2,6,23,.48);
        color: #e2e8f0;
      }
      .aziz-public-action-card.is-on {
        border-color: rgba(16,185,129,.42);
        background: rgba(6,78,59,.18);
      }
      .aziz-public-action-card.is-off {
        border-color: rgba(148,163,184,.28);
      }
      .aziz-public-action-card strong {
        display: block;
        font-size: 12px;
      }
      .aziz-public-action-card small {
        display: block;
        margin-top: 2px;
        color: #94a3b8;
        font-size: 11px;
        line-height: 1.35;
      }
      .aziz-public-action-card em {
        display: inline-block;
        margin-top: 7px;
        color: #facc15;
        font-size: 10px;
        font-style: normal;
        font-weight: 800;
      }
      .aziz-public-action-card.is-on em {
        color: #86efac;
      }
      .aziz-public-action-card button {
        flex: 0 0 auto;
        border: 1px solid rgba(236,72,153,.48);
        border-radius: 10px;
        padding: 7px 10px;
        color: #fce7f3;
        font-size: 11px;
        font-weight: 800;
        background: rgba(219,39,119,.16);
        cursor: pointer;
      }
      .aziz-public-action-card.is-on button {
        border-color: rgba(248,113,113,.48);
        background: rgba(127,29,29,.18);
        color: #fecaca;
      }
      .aziz-public-save {
        margin-top: 12px;
        width: 100%;
        border: 0;
        border-radius: 12px;
        padding: 10px 14px;
        color: white;
        font-size: 12px;
        font-weight: 800;
        background: #db2777;
        cursor: pointer;
      }
      .aziz-public-save:hover {
        background: #be185d;
      }
      .aziz-public-status {
        margin-top: 10px;
        min-height: 18px;
        color: #facc15;
        font-size: 11px;
      }
      .aziz-public-divider {
        margin: 16px 0 12px;
        border: 0;
        border-top: 1px solid rgba(51,65,85,.75);
      }
    </style>
    <h5>🔓 ตั้งค่าปุ่มสำหรับผู้เข้าชมทั่วไป</h5>
    <p>กำหนดว่าหน้า “ข้อมูลนักกีฬา” จะโชว์ปุ่มใดให้ผู้ใช้ที่ไม่ได้ล็อกอินเห็นและใช้งานได้</p>
    <div class="aziz-public-grid">
      ${makeToggle('athlete_size', 'แจ้งไซส์เสื้อ', 'อนุญาตให้ผู้เข้าชมบันทึกไซส์เสื้อได้', value.athlete_size)}
      ${makeToggle('athlete_registration', 'ลงทะเบียนนักกีฬา', 'อนุญาตให้ผู้เข้าชมลงทะเบียนรายการแข่งขันได้', value.athlete_registration)}
      ${makeToggle('athlete_print', 'พิมพ์เอกสารสมาชิกสี', 'โชว์ปุ่มพิมพ์รายชื่อสมาชิกสี', value.athlete_print)}
      ${makeToggle('athlete_certificate', 'พิมพ์เกียรติบัตร', 'โชว์ปุ่มค้นหา/พิมพ์เกียรติบัตร', value.athlete_certificate)}
    </div>
    <hr class="aziz-public-divider">
    <h5>🏆 ตั้งค่าการมองเห็นระบบกีฬาสี</h5>
    <p>กำหนดว่าเมนูและหน้า AZIZGAMES จะเปิดให้กลุ่มผู้ใช้ใดเห็นและเข้าใช้งาน</p>
    <div class="aziz-public-grid">
      ${makeVisibilityToggle('enabled', 'เปิดระบบกีฬาสีทั้งหมด', 'ปิดเมื่อยังไม่ต้องการให้ใช้งานระบบกีฬาสี', visibility.enabled)}
      ${makeVisibilityToggle('teacher_menu', 'ให้ครูทั่วไปเห็นเมนูระบบกีฬาสี', 'แสดงทางลัดใน sidebar ครูของ ปพ5 ส่วนสิทธิ์จัดการ/อัปโหลด CSV ยังแยกตาม permission', visibility.teacher_menu)}
      ${makeVisibilityToggle('student_menu', 'ให้นักเรียนเห็นระบบกีฬาสี', 'เปิดสำหรับเมนูหรือปุ่มฝั่งนักเรียนเมื่อมีการเชื่อมหน้าใช้งาน', visibility.student_menu)}
      ${makeVisibilityToggle('public_page', 'เปิดหน้า AZIZGAMES สำหรับผู้เข้าชมทั่วไป', 'อนุญาตให้คนที่ไม่ล็อกอินเข้าดูแดชบอร์ดและข้อมูลสาธารณะ', visibility.public_page)}
    </div>
    <button type="button" class="aziz-public-save">บันทึกการตั้งค่าระบบกีฬาสี</button>
    <div class="aziz-public-status" aria-live="polite"></div>
  `;

  const target = form.querySelector('.space-y-5') || form;
  target.appendChild(panel);

  panel.querySelector('.aziz-public-save')?.addEventListener('click', async () => {
    const nextValue = { ...DEFAULT_BUTTONS };
    panel.querySelectorAll('[data-public-button]').forEach((card) => {
      nextValue[card.dataset.publicButton] = card.dataset.enabled === 'true';
    });
    const nextVisibility = { ...DEFAULT_VISIBILITY };
    panel.querySelectorAll('[data-sports-visibility]').forEach((card) => {
      nextVisibility[card.dataset.sportsVisibility] = card.dataset.enabled === 'true';
    });
    const status = panel.querySelector('.aziz-public-status');
    status.textContent = 'กำลังบันทึก...';
    try {
      await Promise.all([
        savePublicButtons(nextValue),
        saveSportsVisibility(nextVisibility),
        saveSportsPortalShirtRequest(nextValue.athlete_size),
      ]);
      status.textContent = 'บันทึกสำเร็จ กำลังรีเฟรชหน้าเพื่อใช้ค่าล่าสุด';
    } catch (error) {
      console.warn('Unable to sync AZIZGAMES public settings', error);
      status.textContent = 'บันทึกในเครื่องแล้ว แต่ยัง sync ไปฐานข้อมูลไม่ได้ ต้องตรวจ RLS settings';
    }
    setTimeout(() => window.location.reload(), 900);
  });
  panel.querySelectorAll('[data-action-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('[data-enabled]');
      const next = card.dataset.enabled !== 'true';
      card.dataset.enabled = next ? 'true' : 'false';
      card.classList.toggle('is-on', next);
      card.classList.toggle('is-off', !next);
      card.querySelector('em').textContent = next ? 'เปิดใช้งานอยู่' : 'ปิดใช้งานอยู่';
      button.textContent = next ? 'ปิดใช้งาน' : 'เปิดใช้งาน';
    });
  });
};

const injectSportsCsvControls = () => {
  if (!canManageSports()) return;
  if (document.querySelector('[data-aziz-sports-csv-controls]')) return;
  if (!document.body.textContent?.includes('รายการกิจกรรมและการแข่งขัน')) return;

  const addButton = Array.from(document.querySelectorAll('button')).find((button) =>
    button.textContent?.includes('เพิ่มรายการแข่งขัน'),
  );
  if (!addButton) return;

  const main = addButton.closest('main') || document.querySelector('#root');
  if (!main) return;

  const panel = document.createElement('section');
  panel.dataset.azizSportsCsvControls = 'true';
  panel.className = 'aziz-sports-csv-controls';
  panel.innerHTML = `
    <style>
      .aziz-sports-csv-controls {
        margin: 0 0 18px;
        padding: 14px;
        border: 1px solid rgba(16,185,129,.24);
        border-radius: 16px;
        background: linear-gradient(135deg, rgba(2,6,23,.70), rgba(6,95,70,.14));
        box-shadow: 0 16px 32px rgba(0,0,0,.18);
      }
      .aziz-sports-csv-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .aziz-sports-csv-title {
        color: #e2e8f0;
        font-size: 13px;
        font-weight: 800;
      }
      .aziz-sports-csv-help {
        margin-top: 2px;
        color: #94a3b8;
        font-size: 11px;
      }
      .aziz-sports-csv-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .aziz-sports-csv-actions button,
      .aziz-sports-csv-actions label {
        border: 1px solid rgba(51,65,85,.9);
        border-radius: 12px;
        padding: 9px 12px;
        color: #e2e8f0;
        background: rgba(15,23,42,.74);
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
        transition: .16s ease;
      }
      .aziz-sports-csv-actions button:hover,
      .aziz-sports-csv-actions label:hover {
        color: #fff;
        border-color: rgba(16,185,129,.55);
        background: rgba(6,78,59,.55);
      }
      .aziz-sports-csv-status {
        min-height: 17px;
        margin-top: 8px;
        color: #facc15;
        font-size: 11px;
      }
      @media (max-width: 640px) {
        .aziz-sports-csv-actions,
        .aziz-sports-csv-actions button,
        .aziz-sports-csv-actions label {
          width: 100%;
          justify-content: center;
          text-align: center;
        }
      }
    </style>
    <div class="aziz-sports-csv-row">
      <div>
        <div class="aziz-sports-csv-title">📄 เพิ่มรายการแข่งขันด้วย CSV</div>
        <div class="aziz-sports-csv-help">ดาวน์โหลดเทมเพลต กรอกข้อมูล แล้วอัปโหลดเพื่อเพิ่มหรืออัปเดตรายการตามรหัส sp_id</div>
      </div>
      <div class="aziz-sports-csv-actions">
        <button type="button" data-download-sport-template>ดาวน์โหลดเทมเพลต CSV</button>
        <label>
          อัปโหลด CSV
          <input type="file" accept=".csv,text/csv" data-upload-sport-csv hidden>
        </label>
      </div>
    </div>
    <div class="aziz-sports-csv-status" aria-live="polite"></div>
  `;

  const controlsRow = addButton.closest('div');
  if (controlsRow?.parentElement) {
    controlsRow.parentElement.insertBefore(panel, controlsRow.nextSibling);
  } else if (main.firstElementChild?.nextSibling) {
    main.insertBefore(panel, main.firstElementChild.nextSibling);
  } else {
    main.appendChild(panel);
  }

  const status = panel.querySelector('.aziz-sports-csv-status');
  panel.querySelector('[data-download-sport-template]')?.addEventListener('click', () => {
    downloadSportTemplate();
    status.textContent = 'ดาวน์โหลดเทมเพลตแล้ว';
  });
  panel.querySelector('[data-upload-sport-csv]')?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    status.textContent = 'กำลังอ่านไฟล์ CSV...';
    try {
      await importSportCsvFile(file, status);
    } catch (error) {
      console.error(error);
      status.textContent = 'นำเข้าไม่สำเร็จ กรุณาตรวจรูปแบบไฟล์ CSV';
    } finally {
      event.target.value = '';
    }
  });
};

loadPublicButtons().finally(() => {
  installSportsSync();
  injectPanel();
  injectSportsCsvControls();
  new MutationObserver(() => {
    injectPanel();
    injectSportsCsvControls();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
});
