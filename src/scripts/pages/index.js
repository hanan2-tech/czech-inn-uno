/* ── Stats counters ─────────────────────────────────────── */
const stObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el  = e.target;
    const tgt = parseFloat(el.dataset.count);
    let c = 0;
    const step = tgt / 60;
    const iv = setInterval(() => {
      c += step;
      if (c >= tgt) { c = tgt; clearInterval(iv); }
      el.textContent = tgt >= 100 ? Math.floor(c).toLocaleString() : Math.floor(c);
    }, 28);
    stObs.unobserve(el);
  });
}, { threshold:.5 });
document.querySelectorAll('[data-count]').forEach(el => stObs.observe(el));

/* ── Scroll reveal ──────────────────────────────────────── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
}, { threshold:.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* ── Platform overview cards ────────────────────────────── */
const PAGES = [
  { slug:"tours",       href:"tours.html",       img:"public/assets/pages/tours-hero.jpg"  },
  { slug:"gold-label",  href:"gold-label.html",  img:"public/assets/pages/gold-label-hero.jpg"  },
  { slug:"extras",      href:"extras.html",      img:"public/assets/pages/extras-hero.jpg"  },
  { slug:"concierge",   href:"concierge.html",   img:"public/assets/pages/concierge-hero.jpg" },
  { slug:"analytics",   href:"analytics.html",   img:"public/assets/pages/analytics-hero.jpg"  },
  { slug:"partnership", href:"partnership.html", img:"public/assets/pages/partnership-hero.jpg" }
];

function renderPages() {
  const lang = document.documentElement.lang || 'en';
  const t = (typeof T !== 'undefined' && T[lang]) ? T[lang] : (typeof T !== 'undefined' ? T.en : {});
  const g = document.getElementById('platformGrid');
  g.innerHTML = '';
  PAGES.forEach(p => {
    const title = t[`idx.page.${p.slug}.title`] || p.slug;
    const badge = t[`idx.page.${p.slug}.badge`] || '';
    const desc  = t[`idx.page.${p.slug}.desc`]  || '';
    const explore = t['idx.page.explore'] || 'Explore';
    const d = document.createElement('div');
    d.className = 'plat-card';
    d.innerHTML = `
      <div class="plat-card-img">
        <img src="${p.img}" alt="${title}" loading="lazy"/>
        <div class="plat-card-badge">${badge}</div>
      </div>
      <div class="plat-card-body">
        <div class="plat-card-title">${title}</div>
        <div class="plat-card-desc">${desc}</div>
        <a href="${p.href}" class="plat-card-link" data-nav>${explore} ${title}</a>
      </div>`;
    g.appendChild(d);
  });
}

renderPages();
document.addEventListener('click', e => { if (e.target.closest('[data-lang]')) setTimeout(renderPages, 0); });
