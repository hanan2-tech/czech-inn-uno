/* ── Date range datasets ──────────────────────── */
const CHART_DATA = {
  ytd: [
    {m:'Jan', v:65000},  {m:'Feb', v:77000},  {m:'Mar', v:104000}, {m:'Apr', v:141000},
    {m:'May', v:162000}, {m:'Jun', v:182000},  {m:'Jul', v:200000}, {m:'Aug', v:192000},
    {m:'Sep', v:170000}, {m:'Oct', v:146000},  {m:'Nov', v:124000}, {m:'Dec', v:175000},
  ],
  '90d': [
    {m:'Oct 1', v:38000}, {m:'Oct 2', v:42000}, {m:'Oct 3', v:35000}, {m:'Oct 4', v:41000},
    {m:'Nov 1', v:29000}, {m:'Nov 2', v:33000}, {m:'Nov 3', v:31000}, {m:'Nov 4', v:30000},
    {m:'Dec 1', v:44000}, {m:'Dec 2', v:48000}, {m:'Dec 3', v:52000}, {m:'Dec 4', v:31000},
  ],
  '30d': [
    {m:'Dec 1', v:11000}, {m:'Dec 4', v:13000},  {m:'Dec 7', v:12500},
    {m:'Dec 10', v:14000}, {m:'Dec 13', v:13800}, {m:'Dec 16', v:15200},
    {m:'Dec 19', v:17000}, {m:'Dec 22', v:19500}, {m:'Dec 25', v:11000},
    {m:'Dec 28', v:16000}, {m:'Dec 31', v:14000},
  ],
  '7d': [
    {m:'Mon', v:4200}, {m:'Tue', v:5100}, {m:'Wed', v:4800},
    {m:'Thu', v:6200}, {m:'Fri', v:7400}, {m:'Sat', v:8900}, {m:'Sun', v:5600},
  ],
};

const RANGE_KPIS = {
  ytd:  { topTour: "Kafka's Prague", avgVal: '€112', returnPct: '24%' },
  '90d':{ topTour: 'Jewish Heritage',  avgVal: '€98',  returnPct: '21%' },
  '30d':{ topTour: "Kafka's Prague",   avgVal: '€118', returnPct: '27%' },
  '7d': { topTour: 'Prague for Families', avgVal: '€86', returnPct: '19%' },
};

function renderChart(range) {
  const data  = CHART_DATA[range] || CHART_DATA.ytd;
  const maxV  = Math.max(...data.map(d => d.v));
  const chart = document.getElementById('monthlyChart');
  if (!chart) return;

  // Animate out
  chart.querySelectorAll('.an-bar').forEach(b => { b.style.height = '0'; });

  setTimeout(() => {
    chart.innerHTML = '';
    data.forEach(d => {
      const col = document.createElement('div');
      col.className = 'an-bar-col';
      const pct = Math.round(d.v / maxV * 100);
      col.innerHTML = `
        <div class="an-bar-val">€${d.v >= 1000000 ? (d.v/1000000).toFixed(1)+'M' : Math.round(d.v/1000)+'K'}</div>
        <div class="an-bar-wrap">
          <div class="an-bar projected" style="height:0" data-h="${pct}%"></div>
        </div>
        <div class="an-bar-label">${d.m}</div>
      `;
      chart.appendChild(col);
    });

    // Animate bars in
    requestAnimationFrame(() => {
      chart.querySelectorAll('.an-bar').forEach((bar, i) => {
        setTimeout(() => { bar.style.height = bar.dataset.h; }, i * 55);
      });
    });

    // Update extra KPIs
    const kpi = RANGE_KPIS[range] || RANGE_KPIS.ytd;
    const topTourEl = document.getElementById('anTopTour');
    const avgValEl  = document.getElementById('anAvgVal');
    const returnEl  = document.getElementById('anReturnPct');
    if (topTourEl) topTourEl.textContent = kpi.topTour;
    if (avgValEl)  avgValEl.textContent  = kpi.avgVal;
    if (returnEl)  returnEl.textContent  = kpi.returnPct;
  }, 120);
}

document.addEventListener('DOMContentLoaded', () => {
  // Initial render
  renderChart('ytd');

  // Date filter buttons
  document.querySelectorAll('.an-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.an-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChart(btn.dataset.range);
    });
  });

  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* CSS for new elements */
  const s = document.createElement('style');
  s.textContent = `
    .an-date-filters{display:flex;gap:4px;margin-bottom:12px;}
    .an-filter-btn{padding:5px 14px;border-radius:20px;border:1px solid var(--border);background:transparent;
      font-family:var(--fb);font-size:.74rem;color:var(--text-l);cursor:pointer;transition:all .2s;}
    .an-filter-btn:hover{border-color:var(--gold);color:var(--gold);}
    .an-filter-btn.active{background:var(--gold);border-color:var(--gold);color:#fff;}
    .an-extra-kpis{background:var(--bg);padding:24px 20px 32px;}
    .an-extra-kpis-inner{max-width:var(--max-w);margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
    .an-extra-kpi{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px 20px;text-align:center;}
    .an-extra-kpi-label{font-size:.65rem;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:600;margin-bottom:8px;}
    .an-extra-kpi-val{font-family:var(--fd);font-size:1.3rem;font-weight:700;color:var(--text);margin-bottom:4px;}
    .an-extra-kpi-sub{font-size:.72rem;color:var(--text-l);}
    .an-donut-sources{background:conic-gradient(#C9A84C 0% 35%, #9C7B3C 35% 57%, rgba(156,123,60,.55) 57% 75%, #25d366 75% 90%, rgba(156,123,60,.2) 90% 100%)!important;}
    @media(max-width:640px){.an-extra-kpis-inner{grid-template-columns:repeat(2,1fr);}}
  `;
  document.head.appendChild(s);
});