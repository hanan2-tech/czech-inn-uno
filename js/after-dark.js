document.addEventListener('DOMContentLoaded', () => {

  /* ── Tab switching ── */
  const tabs = document.querySelectorAll('.ad-tab');
  const sections = {
    jazz:     document.getElementById('tab-jazz'),
    rooftop:  document.getElementById('tab-rooftop'),
    cocktail: document.getElementById('tab-cocktail'),
    shows:    document.getElementById('tab-shows'),
    hidden:   document.getElementById('tab-hidden')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      Object.values(sections).forEach(s => { if (s) s.style.display = 'none'; });
      const target = sections[tab.dataset.tab];
      if (target) {
        target.style.display = '';
        target.querySelectorAll('.reveal').forEach(el => el.classList.remove('vis'));
        setTimeout(initReveal, 50);
      }
    });
  });

  /* ── Filter bar ── */
  const filterBtns = document.querySelectorAll('.ad-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.ad-card').forEach(card => {
        if (f === 'all') {
          card.classList.remove('ad-hidden-filter');
        } else if (f === 'walkin' || f === 'required') {
          card.classList.toggle('ad-hidden-filter', card.dataset.booking !== f);
        } else {
          card.classList.toggle('ad-hidden-filter', card.dataset.price !== f);
        }
      });
    });
  });

  /* ── Build Your Night ── */
  const panel = document.getElementById('build-summary');
  const venuesList = document.getElementById('build-venues-list');
  const priceEl = document.getElementById('build-price');
  let selected = [];

  function updatePanel() {
    if (!selected.length) { panel.classList.remove('visible'); return; }
    panel.classList.add('visible');
    venuesList.innerHTML = '<strong>' + selected.map(v => v.name).join(', ') + '</strong>';
    const total = selected.reduce((s, v) => s + v.cost, 0);
    priceEl.textContent = '~€' + total + '/person';
    const maxed = selected.length >= 3;
    document.querySelectorAll('.ad-card-pick').forEach(btn => {
      const isSelected = btn.closest('.ad-card').classList.contains('ad-selected');
      btn.style.opacity = (!isSelected && maxed) ? '.3' : '';
      btn.style.pointerEvents = (!isSelected && maxed) ? 'none' : '';
    });
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('.ad-card-pick');
    if (!btn) return;
    e.stopPropagation();
    const card = btn.closest('.ad-card');
    const name = card.querySelector('.ad-card-name').textContent.trim();
    const cost = parseInt(card.dataset.cost || '35', 10);
    if (card.classList.contains('ad-selected')) {
      card.classList.remove('ad-selected');
      btn.textContent = '+';
      selected = selected.filter(v => v.name !== name);
    } else if (selected.length < 3) {
      card.classList.add('ad-selected');
      btn.textContent = '✓';
      selected.push({ name, cost });
    }
    updatePanel();
  });

  document.getElementById('build-clear').addEventListener('click', () => {
    selected = [];
    document.querySelectorAll('.ad-card.ad-selected').forEach(c => c.classList.remove('ad-selected'));
    document.querySelectorAll('.ad-card-pick').forEach(b => {
      b.textContent = '+'; b.style.opacity = ''; b.style.pointerEvents = '';
    });
    panel.classList.remove('visible');
  });

  /* ── Reveal on scroll ── */
  function initReveal() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal:not(.vis)').forEach(el => obs.observe(el));
  }
  initReveal();
});