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

  const upgradePhotos = [
    'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  ];

  const upgradeIncludes = [
    ['Castle view suite', 'Welcome Champagne', 'Late checkout 2pm', 'Pillow menu'],
    ['Rose petals + candles', 'French Champagne', 'Couple massage voucher', 'Honeymoon card'],
    ['Premium floor room', 'Express laundry', 'Airport transfer', 'Minibar stocked'],
    ['Connecting rooms', 'Kids activity kit', 'Early check-in', 'Cots provided'],
  ];

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
      const includes = upgradeIncludes[i] || [];
      const card = document.createElement('div');
      card.className = 'gl-upgrade-card has-photo flip-card reveal';
      card.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="gl-upgrade-icon">${upg.icon}</div>
            <div class="gl-upgrade-name">${name}</div>
            <div class="gl-upgrade-price">+€${upg.price} <span>${priceStay}</span></div>
            <p class="gl-upgrade-desc">${desc}</p>
            <div style="font-size:.6rem;color:rgba(201,168,76,.5);margin-top:auto;padding-top:8px;letter-spacing:.08em;">Hover to see inclusions →</div>
          </div>
          <div class="flip-card-back">
            <img src="${upgradePhotos[i]}" alt="${name}" loading="lazy" />
            <div class="flip-back-overlay">
              <div class="flip-back-title">${name}</div>
              <div class="flip-back-includes">
                ${includes.map(inc => `<div class="flip-back-item">${inc}</div>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  const conciergePhotos = [
    'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
  ];

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
      card.className = 'gl-concierge-card photo-card reveal';
      card.innerHTML = `
        <div class="concierge-bg" style="background-image:url('${conciergePhotos[i]}')"></div>
        <div class="concierge-overlay"></div>
        <div class="concierge-content">
          <div class="gl-concierge-num">${svcLabel} ${String(i+1).padStart(2,'0')}</div>
          <div class="gl-concierge-name">${conciergeIcons[i] || '<iconify-icon icon="tabler:sparkles" style="font-size:20px;color:#C9A84C"></iconify-icon>'} ${name}</div>
          <p class="gl-concierge-desc">${desc}</p>
          <div class="gl-concierge-price">€${svc.price} <span>${priceBooking}</span></div>
        </div>
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

    card.innerHTML = `
      <div class="gl-revenue-grid">
        <div class="gl-rev-col">
          <div class="gl-rev-label">${t['gl.rev.label.standard'] || 'Standard Booking'}</div>
          <div class="gl-rev-amount standard" data-count="55" data-prefix="€" data-duration="1400">€55</div>
          <div class="gl-rev-per">${t['gl.rev.per.standard'] || 'average spend per guest<br>on tours &amp; extras'}</div>
        </div>
        <div class="gl-rev-arrow">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
            <path d="M2 12h40M36 6l8 6-8 6" stroke="#C9A84C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="gl-rev-col">
          <div class="gl-rev-label">${t['gl.rev.label.gold'] || 'Gold Label Booking'}</div>
          <div class="gl-rev-amount gold" data-count="320" data-prefix="€" data-duration="1800">€320</div>
          <div class="gl-rev-per">${t['gl.rev.per.gold'] || 'average spend per guest<br>with Gold Label package'}</div>
        </div>
      </div>

      <div class="gl-revenue-svg-wrap">
        <svg class="svg-bar" viewBox="0 0 500 160" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;display:block;margin:0 auto 32px;">
          <defs>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#C9A84C"/>
              <stop offset="100%" stop-color="#7A5E28"/>
            </linearGradient>
          </defs>
          <!-- Standard bar -->
          <rect x="60" y="114" width="80" height="40" fill="rgba(255,255,255,0.15)" rx="4"/>
          <text x="100" y="108" fill="rgba(240,235,214,0.5)" font-size="11" text-anchor="middle" font-family="sans-serif">€55</text>
          <text x="100" y="170" fill="rgba(240,235,214,0.35)" font-size="10" text-anchor="middle" font-family="sans-serif">Standard</text>
          <!-- Gold Label bar -->
          <rect x="200" y="20" width="80" height="134" fill="url(#goldGrad)" rx="4"/>
          <text x="240" y="14" fill="#C9A84C" font-size="13" text-anchor="middle" font-family="sans-serif" font-weight="bold">€320</text>
          <text x="240" y="170" fill="rgba(201,168,76,0.7)" font-size="10" text-anchor="middle" font-family="sans-serif">Gold Label</text>
          <!-- Labels -->
          <text x="360" y="70" fill="rgba(201,168,76,0.8)" font-size="22" font-family="sans-serif" font-weight="bold">+482%</text>
          <text x="360" y="90" fill="rgba(240,235,214,0.4)" font-size="10" font-family="sans-serif">revenue uplift</text>
        </svg>
      </div>

      <div class="gl-revenue-stats">
        <div class="gl-rev-stat">
          <div class="gl-rev-stat-num" data-count="482" data-suffix="%" data-prefix="+" data-duration="1600">+482%</div>
          <div class="gl-rev-stat-label">${t['gl.rev.stat1.label'] || 'Revenue uplift per<br>Gold Label guest'}</div>
        </div>
        <div class="gl-rev-stat">
          <div class="gl-rev-stat-num" data-count="265" data-prefix="€" data-duration="1400">€265</div>
          <div class="gl-rev-stat-label">${t['gl.rev.stat2.label'] || 'Additional revenue<br>generated per guest'}</div>
        </div>
        <div class="gl-rev-stat">
          <div class="gl-rev-stat-num" data-count="12" data-suffix="%" data-prefix="~" data-duration="1200">~12%</div>
          <div class="gl-rev-stat-label">${t['gl.rev.stat3.label'] || 'Conversion rate to<br>Gold Label (projected)'}</div>
        </div>
      </div>
    `;

    // Trigger counter animations after DOM insertion
    setTimeout(() => {
      if (typeof initCounters === 'function') initCounters();
    }, 100);
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

  // Expose for module import
  window.initCounters = window.initCounters || function() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          const target = parseFloat(e.target.dataset.count);
          const prefix = e.target.dataset.prefix || '';
          const suffix = e.target.dataset.suffix || '';
          const dur = parseInt(e.target.dataset.duration) || 1500;
          const start = Date.now();
          function tick() {
            const p = Math.min((Date.now()-start)/dur, 1);
            const val = (1 - Math.pow(1-p, 3)) * target;
            e.target.textContent = prefix + Math.round(val) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        });
      }, { threshold: 0.5 });
      io.observe(el);
    });
  };

  document.addEventListener('click', e => {
    if (e.target.closest('[data-lang]')) setTimeout(renderAll, 0);
  });

})();