/* ═══════════════════════════════════════════════
   GOLD LABEL PAGE SCRIPT
   ═══════════════════════════════════════════════ */

(function() {

  function getLangT() {
    const lang = document.documentElement.lang || 'en';
    return { lang, t: (typeof T !== 'undefined' && T[lang]) ? T[lang] : (typeof T !== 'undefined' ? T.en : {}) };
  }

  const tourIcons = {
    kafka:'<lord-icon src="https://cdn.lordicon.com/kipaqhoz.json" trigger="hover" colors="primary:#C9A84C" style="width:24px;height:24px"></lord-icon>',
    mucha:'<iconify-icon icon="tabler:palette" style="font-size:24px;color:#C9A84C"></iconify-icon>',
    jewish:'<iconify-icon icon="tabler:star-of-david" style="font-size:24px;color:#C9A84C"></iconify-icon>',
    kids:'<iconify-icon icon="tabler:masks-theater" style="font-size:24px;color:#C9A84C"></iconify-icon>'
  };
  const conciergeIcons = [
    '<iconify-icon icon="tabler:car" style="font-size:20px;color:#C9A84C"></iconify-icon>',
    '<iconify-icon icon="tabler:tools-kitchen-2" style="font-size:20px;color:#C9A84C"></iconify-icon>',
    '<iconify-icon icon="tabler:glass-wine" style="font-size:20px;color:#C9A84C"></iconify-icon>',
    '<iconify-icon icon="tabler:spa" style="font-size:20px;color:#C9A84C"></iconify-icon>'
  ];

  /* ── Private Tours ─────────────────────────────── */
  function buildPrivateTours() {
    const grid = document.getElementById('privateTourGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const { t } = getLangT();

    GOLD_LABEL.private_tours.forEach((tour, i) => {
      const id = ['kafka','mucha','jewish','kids'][i] || '';
      const name = t['gl.tour.'+id+'.name'] || tour.name;
      const desc = t['gl.tour.'+id+'.desc'] || tour.desc;
      const priceGroup = t['gl.price.group'] || '/ group';
      const card = document.createElement('div');
      card.className = 'gl-tour-card reveal';
      card.innerHTML = `
        <div class="gl-tour-card-top">
          <div class="gl-tour-card-icon">${tourIcons[id] || '<iconify-icon icon="tabler:sparkles" style="font-size:24px;color:#C9A84C"></iconify-icon>'}</div>
          <div class="gl-tour-card-name">${name}</div>
          <p class="gl-tour-card-desc">${desc}</p>
        </div>
        <div class="gl-tour-card-bottom">
          <div>
            <div class="gl-price-tag">€${tour.price} <span>${priceGroup}</span></div>
            <div class="gl-dur-pill"><iconify-icon icon="tabler:clock" style="font-size:13px;color:#C9A84C"></iconify-icon> ${tour.dur}</div>
          </div>
          <span class="gl-guests-pill"><lord-icon src="https://cdn.lordicon.com/dxjqoygy.json" trigger="hover" colors="primary:#C9A84C" style="width:16px;height:16px"></lord-icon> ${tour.guests}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  /* ── Room Upgrades ─────────────────────────────── */
  function buildUpgrades() {
    const grid = document.getElementById('upgradesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const { t } = getLangT();
    const upgIds = ['penthouse','honeymoon','business','family'];

    GOLD_LABEL.room_upgrades.forEach((upg, i) => {
      const id = upgIds[i] || '';
      const name = t['gl.upg.'+id+'.name'] || upg.name;
      const desc = t['gl.upg.'+id+'.desc'] || upg.desc;
      const priceStay = t['gl.price.stay'] || '/ stay';
      const card = document.createElement('div');
      card.className = 'gl-upgrade-card reveal';
      card.innerHTML = `
        <div class="gl-upgrade-icon">${upg.icon}</div>
        <div class="gl-upgrade-name">${name}</div>
        <div class="gl-upgrade-price">+€${upg.price} <span>${priceStay}</span></div>
        <p class="gl-upgrade-desc">${desc}</p>
      `;
      grid.appendChild(card);
    });
  }

  /* ── Concierge Services ────────────────────────── */
  function buildConcierge() {
    const grid = document.getElementById('conciergeGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const { t } = getLangT();
    const svcIds = ['airport','restaurant','wine','spa'];

    GOLD_LABEL.concierge.forEach((svc, i) => {
      const id = svcIds[i] || '';
      const name = t['gl.svc.'+id+'.name'] || svc.name;
      const desc = t['gl.svc.'+id+'.desc'] || svc.desc;
      const svcLabel = t['gl.svc.label'] || 'Service';
      const priceBooking = t['gl.price.booking'] || '/ booking';
      const card = document.createElement('div');
      card.className = 'gl-concierge-card reveal';
      card.innerHTML = `
        <div class="gl-concierge-num">${svcLabel} ${String(i+1).padStart(2,'0')}</div>
        <div class="gl-concierge-name">${conciergeIcons[i] || '<iconify-icon icon="tabler:sparkles" style="font-size:20px;color:#C9A84C"></iconify-icon>'} ${name}</div>
        <p class="gl-concierge-desc">${desc}</p>
        <div class="gl-concierge-price">€${svc.price} <span>${priceBooking}</span></div>
      `;
      grid.appendChild(card);
    });
  }

  /* ── Packages ──────────────────────────────────── */
  function buildPackages() {
    const grid = document.getElementById('packagesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const { t } = getLangT();
    const pkgIds = ['starter','complete','corporate'];

    GOLD_LABEL.packages.forEach((pkg, i) => {
      const isFeatured = i === 1; // Gold Complete is center/featured
      const id = pkgIds[i] || '';
      const name = t['gl.pkg.'+id+'.name'] || pkg.name;
      const badge = t['gl.pkg.'+id+'.badge'] || pkg.badge;
      const perLine = t['gl.pkg.per'] || 'per guest / per stay';
      const ctaText = isFeatured
        ? (t['gl.pkg.cta.featured'] || 'Get Gold Complete')
        : (t['gl.pkg.cta.default'] || 'Learn More');
      const includeItems = pkg.includes.map((item, j) => {
        const itemKey = 'gl.pkg.'+id+'.inc'+(j+1);
        return t[itemKey] || item;
      });
      const card = document.createElement('div');
      card.className = 'gl-package reveal' + (isFeatured ? ' featured' : '');
      card.innerHTML = `
        <div class="gl-package-badge">${badge}</div>
        <div class="gl-package-name">${name}</div>
        <div class="gl-package-price">€${pkg.price.toLocaleString()}</div>
        <div class="gl-package-per">${perLine}</div>
        <div class="gl-package-divider"></div>
        <ul class="gl-package-includes">
          ${includeItems.map(item => `
            <li class="gl-package-item">
              <span class="gl-package-check">✓</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
        <a href="partnership.html" class="gl-package-btn ${isFeatured ? 'gl-package-btn-gold' : 'gl-package-btn-outline'}" data-nav>
          ${ctaText}
        </a>
      `;
      grid.appendChild(card);
    });
  }

  /* ── Revenue Uplift Card ───────────────────────── */
  function buildRevenue() {
    const card = document.getElementById('revenueCard');
    if (!card) return;
    const { t } = getLangT();
    const arrow = (document.documentElement.lang === 'he') ? '←' : '→';

    card.innerHTML = `
      <div class="gl-revenue-grid">
        <div class="gl-rev-col">
          <div class="gl-rev-label">${t['gl.rev.label.standard'] || 'Standard Booking'}</div>
          <div class="gl-rev-amount standard">€55</div>
          <div class="gl-rev-per">${t['gl.rev.per.standard'] || 'average spend per guest<br>on tours &amp; extras'}</div>
        </div>
        <div class="gl-rev-arrow">${arrow}</div>
        <div class="gl-rev-col">
          <div class="gl-rev-label">${t['gl.rev.label.gold'] || 'Gold Label Booking'}</div>
          <div class="gl-rev-amount gold">€320</div>
          <div class="gl-rev-per">${t['gl.rev.per.gold'] || 'average spend per guest<br>with Gold Label package'}</div>
        </div>
      </div>
      <div class="gl-revenue-stats">
        <div class="gl-rev-stat">
          <div class="gl-rev-stat-num">+482%</div>
          <div class="gl-rev-stat-label">${t['gl.rev.stat1.label'] || 'Revenue uplift per<br>Gold Label guest'}</div>
        </div>
        <div class="gl-rev-stat">
          <div class="gl-rev-stat-num">€265</div>
          <div class="gl-rev-stat-label">${t['gl.rev.stat2.label'] || 'Additional revenue<br>generated per guest'}</div>
        </div>
        <div class="gl-rev-stat">
          <div class="gl-rev-stat-num">~12%</div>
          <div class="gl-rev-stat-label">${t['gl.rev.stat3.label'] || 'Conversion rate to<br>Gold Label (projected)'}</div>
        </div>
      </div>
    `;
  }

  /* ── Scroll Reveal ─────────────────────────────── */
  function initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* ── Hover micro-animations ────────────────────── */
  function initHoverAnimations() {
    // Cards get a subtle gold shimmer line on top on hover (handled by CSS ::before)
    // Package featured card pulsing glow handled by CSS animation: glowPulse
  }

  /* ── Re-render all dynamic sections ───────────── */
  function renderAll() {
    buildPrivateTours();
    buildUpgrades();
    buildConcierge();
    buildPackages();
    buildRevenue();
    setTimeout(initReveal, 50);
  }

  /* ── Init ──────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    setTimeout(initReveal, 200);
    initHoverAnimations();
  });

  document.addEventListener('click', e => {
    if (e.target.closest('[data-lang]')) setTimeout(renderAll, 0);
  });

})();