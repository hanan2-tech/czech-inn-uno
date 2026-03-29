/* ═══════════════════════════════════════════════
   ADMIN DASHBOARD — Czech Inn Hotels × UNO
   Feature 30
   ═══════════════════════════════════════════════ */

const ADMIN_PWD = 'czechinn2026';
const ADMIN_KEY = 'cih-admin-auth';

/* ── Sample Data ──────────────────────────────── */
const BOOKINGS = [
  { ref:'CIH-A1B2C3', guest:'Thomas Wagner',    tour:"Kafka's Prague",     date:'2026-04-15', guests:2, total:'€124', status:'confirmed' },
  { ref:'CIH-D4E5F6', guest:'Sophie Laurent',   tour:'Prague for Families', date:'2026-04-15', guests:3, total:'€154', status:'confirmed' },
  { ref:'CIH-G7H8I9', guest:'Marie Novák',       tour:'Jewish Heritage',    date:'2026-04-16', guests:2, total:'€98',  status:'pending' },
  { ref:'CIH-J1K2L3', guest:'Hiroshi Tanaka',   tour:"Mucha's Art Nouveau", date:'2026-04-16', guests:2, total:'€108', status:'completed' },
  { ref:'CIH-M4N5O6', guest:'James O\'Brien',    tour:"Kafka's Prague",     date:'2026-04-17', guests:4, total:'€248', status:'confirmed' },
  { ref:'CIH-P7Q8R9', guest:'Anna Kowalski',    tour:'Jewish Heritage',    date:'2026-04-17', guests:1, total:'€49',  status:'pending' },
  { ref:'CIH-S1T2U3', guest:'Sara Al-Rashid',   tour:"Mucha's Art Nouveau", date:'2026-04-18', guests:2, total:'€108', status:'confirmed' },
  { ref:'CIH-V4W5X6', guest:'Lucas Silva',       tour:'Prague for Families', date:'2026-04-18', guests:2, total:'€88',  status:'completed' },
  { ref:'CIH-Y7Z8A1', guest:'Emma Johnson',     tour:"Kafka's Prague",     date:'2026-04-19', guests:2, total:'€124', status:'confirmed' },
  { ref:'CIH-B2C3D4', guest:'Nikolai Petrov',   tour:'Jewish Heritage',    date:'2026-04-19', guests:2, total:'€98',  status:'pending' },
];

const MESSAGES = [
  {
    name: 'Thomas Wagner', initials: 'TW', room: '204',
    text: 'Excellent tour today — the guide was exceptional. Could you recommend a jazz bar for this evening?',
    time: '14:32', badge: 'New'
  },
  {
    name: 'Sophie Laurent', initials: 'SL', room: '318',
    text: 'My children absolutely loved the family tour. We would like to book the Jewish Heritage tour for tomorrow. Are there still places?',
    time: '12:15', badge: 'New'
  },
  {
    name: 'Sara Al-Rashid', initials: 'SA', room: '512',
    text: 'We are interested in the Gold Label private experience. Could you arrange something special for our anniversary dinner?',
    time: '10:44', badge: ''
  },
];

const MINI_CHART_DATA = [
  { label: 'Mon', v: 4200 }, { label: 'Tue', v: 5100 }, { label: 'Wed', v: 4800 },
  { label: 'Thu', v: 6200 }, { label: 'Fri', v: 7400 }, { label: 'Sat', v: 8900 }, { label: 'Sun', v: 5600 },
];

/* ── Auth ──────────────────────────────────────── */
function isLoggedIn() {
  return localStorage.getItem(ADMIN_KEY) === '1';
}

function login() {
  localStorage.setItem(ADMIN_KEY, '1');
  document.getElementById('adminGate').style.display = 'none';
  document.getElementById('adminLayout').style.display = 'flex';
  renderDashboard();
  initSidebar();
}

function logout() {
  localStorage.removeItem(ADMIN_KEY);
  document.getElementById('adminGate').style.display = 'flex';
  document.getElementById('adminLayout').style.display = 'none';
}

/* ── Render Dashboard ─────────────────────────── */
function renderDashboard() {
  const main = document.getElementById('adminMain');
  const today = new Date().toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric' });

  main.innerHTML = `
    <div class="admin-topbar">
      <div class="admin-page-title">Dashboard</div>
      <div class="admin-date">${today}</div>
    </div>

    <!-- KPIs -->
    <div class="admin-kpis">
      <div class="admin-kpi">
        <div class="admin-kpi-label">Bookings Today</div>
        <div class="admin-kpi-val">14</div>
        <div class="admin-kpi-delta">↑ 3 vs yesterday</div>
      </div>
      <div class="admin-kpi">
        <div class="admin-kpi-label">Revenue Today</div>
        <div class="admin-kpi-val">€1,680</div>
        <div class="admin-kpi-delta">↑ 12% vs last week</div>
      </div>
      <div class="admin-kpi">
        <div class="admin-kpi-label">Check-ins Today</div>
        <div class="admin-kpi-val">312</div>
        <div class="admin-kpi-delta" style="color:var(--gold)">28 hotels active</div>
      </div>
      <div class="admin-kpi">
        <div class="admin-kpi-label">Pending Reviews</div>
        <div class="admin-kpi-val">7</div>
        <div class="admin-kpi-delta" style="color:#f0c040">Awaiting response</div>
      </div>
    </div>

    <!-- Main grid: Bookings + Mini Chart -->
    <div class="admin-grid-2">
      <!-- Bookings Table -->
      <div class="admin-panel">
        <div class="admin-panel-header">
          <div class="admin-panel-title">Recent Bookings</div>
          <span style="font-size:.72rem;color:rgba(255,255,255,.35)">Last 24 hours</span>
        </div>
        <div class="admin-table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Guest</th>
                <th>Tour</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="adminBookingsBody"></tbody>
          </table>
        </div>
      </div>

      <!-- Right column -->
      <div style="display:flex;flex-direction:column;gap:20px">
        <!-- Revenue Chart -->
        <div class="admin-panel">
          <div class="admin-panel-header">
            <div class="admin-panel-title">Revenue — Last 7 Days</div>
          </div>
          <div class="admin-mini-chart" id="adminMiniChart"></div>
        </div>

        <!-- Messages -->
        <div class="admin-panel">
          <div class="admin-panel-header">
            <div class="admin-panel-title">Guest Messages</div>
            <span style="font-size:.72rem;color:var(--gold);font-weight:600">3 new</span>
          </div>
          <div id="adminMessages"></div>
        </div>
      </div>
    </div>
  `;

  renderBookings();
  renderMiniChart();
  renderMessages();
}

function renderBookings() {
  const tbody = document.getElementById('adminBookingsBody');
  if (!tbody) return;
  tbody.innerHTML = BOOKINGS.map(b => `
    <tr>
      <td style="font-family:monospace;font-size:.72rem;color:var(--gold)">${b.ref}</td>
      <td>${b.guest}</td>
      <td style="font-size:.76rem">${b.tour}</td>
      <td style="color:rgba(255,255,255,.5)">${b.date}</td>
      <td style="color:var(--gold-light);font-weight:600">${b.total}</td>
      <td><span class="status-badge status-${b.status}">${b.status}</span></td>
    </tr>
  `).join('');
}

function renderMiniChart() {
  const chart = document.getElementById('adminMiniChart');
  if (!chart) return;
  const maxV = Math.max(...MINI_CHART_DATA.map(d => d.v));
  chart.innerHTML = MINI_CHART_DATA.map(d => `
    <div class="admin-mini-bar-col">
      <div class="admin-mini-bar" style="height:${Math.round(d.v / maxV * 80)}px"></div>
      <div class="admin-mini-bar-label">${d.label}</div>
    </div>
  `).join('');
}

function renderMessages() {
  const el = document.getElementById('adminMessages');
  if (!el) return;
  el.innerHTML = MESSAGES.map(m => `
    <div class="admin-message">
      <div class="admin-msg-avatar">${m.initials}</div>
      <div style="flex:1;min-width:0">
        <div class="admin-msg-name">${m.name} <span style="font-size:.68rem;color:rgba(255,255,255,.3);font-weight:400">Room ${m.room}</span>
          ${m.badge ? `<span style="font-size:.6rem;background:rgba(156,123,60,.25);color:var(--gold);padding:2px 7px;border-radius:20px;margin-left:6px">${m.badge}</span>` : ''}
        </div>
        <div class="admin-msg-text">${m.text}</div>
        <div class="admin-msg-meta">${m.time}</div>
      </div>
      <button class="admin-msg-reply">Reply</button>
    </div>
  `).join('');
}

/* ── Sidebar Navigation ───────────────────────── */
function initSidebar() {
  document.querySelectorAll('.admin-nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const section = item.dataset.section;
      renderSection(section);
    });
  });
}

function renderSection(section) {
  const main = document.getElementById('adminMain');
  const today = new Date().toLocaleDateString('en-GB', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  if (section === 'dashboard') { renderDashboard(); initSidebar(); return; }

  const titles = { bookings: 'All Bookings', guests: 'Guest Management', tours: 'Tour Management', revenue: 'Revenue Reports' };
  main.innerHTML = `
    <div class="admin-topbar">
      <div class="admin-page-title">${titles[section] || section}</div>
      <div class="admin-date">${today}</div>
    </div>
    <div class="admin-panel" style="padding:40px;text-align:center">
      <div style="font-size:2rem;margin-bottom:12px">🚧</div>
      <div style="font-family:var(--fd);font-size:1rem;font-weight:600;color:var(--cream);margin-bottom:8px">${titles[section]} — Full View</div>
      <p style="font-size:.82rem;color:rgba(255,255,255,.4);max-width:400px;margin:0 auto;line-height:1.7">This section would display the complete ${section} management interface in the production version. The dashboard section shows the live demo functionality.</p>
      <button onclick="document.querySelector('[data-section=dashboard]').click()" class="btn-gold" style="margin-top:20px">← Back to Dashboard</button>
    </div>
  `;
}

/* ── Init ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn  = document.getElementById('adminLoginBtn');
  const pwdInput  = document.getElementById('adminPwd');
  const logoutBtn = document.getElementById('adminLogout');
  const errorEl   = document.getElementById('adminGateError');

  if (isLoggedIn()) {
    login();
  }

  loginBtn.addEventListener('click', () => {
    if (pwdInput.value === ADMIN_PWD) {
      errorEl.textContent = '';
      login();
    } else {
      errorEl.textContent = 'Incorrect password. Try: czechinn2026';
      pwdInput.value = '';
      pwdInput.focus();
    }
  });

  pwdInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') loginBtn.click();
  });

  if (logoutBtn) logoutBtn.addEventListener('click', logout);
});
