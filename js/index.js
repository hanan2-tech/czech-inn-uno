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
  { slug:"tours",       href:"tours.html",       img:"https://images.pexels.com/photos/12562599/pexels-photo-12562599.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"  },
  { slug:"gold-label",  href:"gold-label.html",  img:"https://images.pexels.com/photos/34672504/pexels-photo-34672504.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"  },
  { slug:"extras",      href:"extras.html",      img:"https://images.pexels.com/photos/31751536/pexels-photo-31751536.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"  },
  { slug:"concierge",   href:"concierge.html",   img:"https://images.pexels.com/photos/695193/pexels-photo-695193.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" },
  { slug:"analytics",   href:"analytics.html",   img:"https://images.pexels.com/photos/7652044/pexels-photo-7652044.jpeg?auto=compress&cs=tinysrgb&w=600&q=80"  },
  { slug:"partnership", href:"partnership.html", img:"https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600&q=80" }
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
