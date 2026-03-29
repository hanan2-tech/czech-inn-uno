/* ═══════════════════════════════════════════════════════════
   NAV.JS, Shared Navigation, Mega-Menu, Lottie, Transitions
   Czech Inn Hotels × UNO Platform
   ═══════════════════════════════════════════════════════════ */

/* ── Navigation HTML (injected into every page) ─────────── */
const NAV_HTML = `
<div id="pageTransition"></div>

<div id="pageLoader">
  <div class="loader-ring" id="loaderRing"></div>
  <lottie-player
    id="loaderLottie"
    src="https://assets9.lottiefiles.com/packages/lf20_p8bfn5of.json"
    background="transparent" speed="1"
    style="width:90px;height:90px;display:none"
    autoplay loop>
  </lottie-player>
  <div class="loader-brand">CZECH INN HOTELS</div>
  <div class="loader-sub">Guided Experiences Platform</div>
</div>

<nav class="nav" id="mainNav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" data-nav>
      <span class="nav-logo-brand">CZECH INN</span>
      <span class="nav-logo-hotel">&nbsp;Hotels</span>
    </a>

    <div class="nav-links">
      <a href="index.html" class="nav-link" data-nav data-i18n="nav.home">Home</a>

      <!-- Experiences mega-menu -->
      <div class="nav-group">
        <button class="nav-group-btn">
          <span data-i18n="nav.experiences">Experiences</span> <span class="nav-arrow">▼</span>
        </button>
        <div class="nav-mega">
          <div class="mega-col">
            <div class="mega-col-label" data-i18n="nav.col.tours">Tours & Experiences</div>
            <a href="tours.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><iconify-icon icon="tabler:map" style="font-size:22px;color:#C9A84C"></iconify-icon></span>
              <span class="mega-link-text" data-i18n="nav.guided-tours">Guided Tours</span>
            </a>
            <a href="gold-label.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><iconify-icon icon="tabler:crown" style="font-size:22px;color:#C9A84C"></iconify-icon></span>
              <span class="mega-link-text" data-i18n="nav.gold-label">Gold Label</span>
              <span class="mega-link-badge" data-i18n="nav.badge.premium">Premium</span>
            </a>
            <a href="extras.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><lord-icon src="https://cdn.lordicon.com/ibydboev.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:22px;height:22px"></lord-icon></span>
              <span class="mega-link-text" data-i18n="nav.extras">Extras Catalogue</span>
            </a>
            <a href="after-dark.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><iconify-icon icon="tabler:moon" style="font-size:22px;color:#C9A84C"></iconify-icon></span>
              <span class="mega-link-text" data-i18n="nav.after-dark">Prague After Dark</span>
            </a>
          </div>
          <div class="mega-col">
            <div class="mega-col-label" data-i18n="nav.col.guest">Guest Experience</div>
            <a href="concierge.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><iconify-icon icon="tabler:device-mobile" style="font-size:22px;color:#C9A84C"></iconify-icon></span>
              <span class="mega-link-text" data-i18n="nav.concierge">Digital Concierge</span>
            </a>
            <a href="by-passion.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><lord-icon src="https://cdn.lordicon.com/xyboiuok.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:22px;height:22px"></lord-icon></span>
              <span class="mega-link-text" data-i18n="nav.by-passion">Prague by Passion</span>
            </a>
            <a href="corporate.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><lord-icon src="https://cdn.lordicon.com/zpxybbhl.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:22px;height:22px"></lord-icon></span>
              <span class="mega-link-text" data-i18n="nav.corporate">Groups & Corporate</span>
            </a>
          </div>
        </div>
      </div>

      <!-- For Hotels mega-menu -->
      <div class="nav-group">
        <button class="nav-group-btn">
          <span data-i18n="nav.for-hotels">For Hotels</span> <span class="nav-arrow">▼</span>
        </button>
        <div class="nav-mega">
          <div class="mega-col">
            <div class="mega-col-label" data-i18n="nav.col.strategy">Strategy & Revenue</div>
            <a href="business-plan.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><lord-icon src="https://cdn.lordicon.com/nocovwne.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:22px;height:22px"></lord-icon></span>
              <span class="mega-link-text" data-i18n="nav.business-plan">Business Plan</span>
            </a>
            <a href="analytics.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><lord-icon src="https://cdn.lordicon.com/uukerzzv.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:22px;height:22px"></lord-icon></span>
              <span class="mega-link-text" data-i18n="nav.analytics">Analytics</span>
            </a>
            <a href="admin.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><iconify-icon icon="tabler:settings" style="font-size:22px;color:#C9A84C"></iconify-icon></span>
              <span class="mega-link-text">Admin Dashboard</span>
              <span class="mega-link-badge">Staff</span>
            </a>
          </div>
          <div class="mega-col">
            <div class="mega-col-label" data-i18n="nav.col.operations">Operations & Trust</div>
            <a href="integration.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><lord-icon src="https://cdn.lordicon.com/jdsvypqr.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:22px;height:22px"></lord-icon></span>
              <span class="mega-link-text" data-i18n="nav.integration">Integration</span>
            </a>
            <a href="social-proof.html" class="mega-link" data-nav>
              <span class="mega-link-icon"><lord-icon src="https://cdn.lordicon.com/tyvtvbcy.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:22px;height:22px"></lord-icon></span>
              <span class="mega-link-text" data-i18n="nav.social-proof">Social Proof</span>
            </a>
          </div>
        </div>
      </div>

      <a href="partnership.html" class="nav-link nav-cta" data-nav data-i18n="nav.partnership">Partnership →</a>
    </div>

    <div class="nav-lang">
      <button class="nav-lang-btn active" data-lang="en">EN</button>
      <button class="nav-lang-btn" data-lang="cs">CS</button>
      <button class="nav-lang-btn" data-lang="he">HE</button>
    </div>

    <button class="nav-guest-btn" id="navGuestBtn" aria-label="Guest profile" title="Guest profile">
      <span class="nav-guest-initials" id="navGuestInitials">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
      </span>
    </button>

    <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

/* ── Footer HTML ─────────────────────────────────────────── */
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-grid">
    <div>
      <div class="footer-gold-line"></div>
      <div class="footer-brand-name">CZECH INN</div>
      <div class="footer-brand-hotel">Hotels × UNO Guided Experiences</div>
      <p class="footer-brand-desc" data-i18n="footer.desc">A proposed partnership bringing curated guided tours and premium guest experiences to all 28 Czech Inn Hotels properties across Prague.</p>
      <div class="footer-contact">
        <p><b>Czech Inn Hotels s.r.o.</b></p>
        <p data-i18n="footer.address">Hybernská 24, Praha 1, 110 00</p>
        <p data-i18n="footer.stats">28 Hotels &nbsp;·&nbsp; 3,300+ Rooms</p>
      </div>
    </div>
    <div>
      <div class="footer-col-title" data-i18n="footer.col.experiences">Experiences</div>
      <div class="footer-links">
        <a href="tours.html" data-i18n="footer.guided-tours">Guided Tours</a>
        <a href="gold-label.html" data-i18n="footer.gold-label">Gold Label</a>
        <a href="extras.html" data-i18n="footer.extras">Extras Catalogue</a>
        <a href="after-dark.html" data-i18n="footer.after-dark">Prague After Dark</a>
        <a href="corporate.html" data-i18n="footer.corporate">Groups & Corporate</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title" data-i18n="footer.col.tools">Guest Tools</div>
      <div class="footer-links">
        <a href="concierge.html" data-i18n="footer.concierge">Digital Concierge</a>
        <a href="by-passion.html" data-i18n="footer.by-passion">Prague by Passion</a>
        <a href="integration.html" data-i18n="footer.integration">Hotel Integration</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title" data-i18n="footer.col.hotels">For Hotels</div>
      <div class="footer-links">
        <a href="business-plan.html" data-i18n="footer.business-plan">Business Plan</a>
        <a href="analytics.html" data-i18n="footer.analytics">Analytics</a>
        <a href="social-proof.html" data-i18n="footer.social-proof">Social Proof</a>
        <a href="partnership.html" data-i18n="footer.partnership">Partnership →</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p><span data-i18n="footer.tagline">Guided Experiences Platform, proposed for</span> <b>Czech Inn Hotels s.r.o.</b> &nbsp;·&nbsp; <span data-i18n="footer.prepared">Prepared for</span> <b>Jaroslav Svoboda</b></p>
    <p style="opacity:.45;font-size:.68rem" data-i18n="footer.sub">All tours, guides, and pricing are real and ready to deploy.</p>
  </div>
</footer>`;

/* ── Inject Nav + Footer ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav at top of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer at bottom of body
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Inject floating contact CTA
  document.body.insertAdjacentHTML('beforeend', `
    <a href="partnership.html#ask" class="float-cta" data-nav id="floatCta" data-i18n="float.cta">
      Start the Partnership →
    </a>
  `);

  // Inject mobile drawer
  document.body.insertAdjacentHTML('beforeend', `
    <div class="nav-mobile-overlay" id="navOverlay"></div>
    <div class="nav-mobile" id="navMobile">
      <div class="nav-mobile-header">
        <span class="nav-logo-brand">CZECH INN</span><span class="nav-logo-hotel">&nbsp;Hotels</span>
        <button class="nav-mobile-close" id="navClose" aria-label="Close">✕</button>
      </div>
      <nav class="nav-mobile-links">
        <a href="index.html" data-nav data-i18n="nav.home">Home</a>
        <div class="nav-mobile-section" data-i18n="nav.col.tours">Tours & Experiences</div>
        <a href="tours.html" data-nav data-i18n="nav.guided-tours">Guided Tours</a>
        <a href="gold-label.html" data-nav data-i18n="nav.gold-label">Gold Label</a>
        <a href="extras.html" data-nav data-i18n="nav.extras">Extras Catalogue</a>
        <a href="after-dark.html" data-nav data-i18n="nav.after-dark">Prague After Dark</a>
        <div class="nav-mobile-section" data-i18n="nav.col.guest">Guest Experience</div>
        <a href="concierge.html" data-nav data-i18n="nav.concierge">Digital Concierge</a>
        <a href="by-passion.html" data-nav data-i18n="nav.by-passion">Prague by Passion</a>
        <a href="corporate.html" data-nav data-i18n="nav.corporate">Groups & Corporate</a>
        <div class="nav-mobile-section" data-i18n="nav.col.strategy">Strategy & Revenue</div>
        <a href="business-plan.html" data-nav data-i18n="nav.business-plan">Business Plan</a>
        <a href="analytics.html" data-nav data-i18n="nav.analytics">Analytics</a>
        <div class="nav-mobile-section" data-i18n="nav.col.operations">Operations & Trust</div>
        <a href="integration.html" data-nav data-i18n="nav.integration">Integration</a>
        <a href="social-proof.html" data-nav data-i18n="nav.social-proof">Social Proof</a>
        <a href="partnership.html" class="nav-mobile-cta" data-nav data-i18n="nav.partnership">Partnership →</a>
      </nav>
      <div class="nav-mobile-lang">
        <button class="nav-lang-btn active" data-lang="en">EN</button>
        <button class="nav-lang-btn" data-lang="cs">CS</button>
        <button class="nav-lang-btn" data-lang="he">HE</button>
      </div>
    </div>
  `);

  // Inject guest profile panel
  document.body.insertAdjacentHTML('beforeend', `
    <div class="gp-overlay" id="gpOverlay"></div>
    <div class="gp-panel" id="gpPanel" role="dialog" aria-label="Guest profile">
      <div class="gp-header">
        <div class="gp-header-title">Guest Profile</div>
        <button class="gp-close" id="gpClose">✕</button>
      </div>
      <div id="gpContent"></div>
    </div>
  `);

  // Inject CSS for guest profile
  const gpStyle = document.createElement('style');
  gpStyle.textContent = `
    .nav-guest-btn {
      width:36px;height:36px;border-radius:50%;background:rgba(156,123,60,.15);
      border:1.5px solid rgba(156,123,60,.35);cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      color:var(--gold-light);transition:background .2s,border-color .2s;flex-shrink:0;
    }
    .nav-guest-btn:hover{background:rgba(156,123,60,.28);border-color:var(--gold);}
    .nav-guest-btn.logged-in{background:var(--gold);border-color:var(--gold);color:#fff;}
    .nav-guest-initials{font-size:.72rem;font-weight:700;font-family:var(--fd);line-height:1;letter-spacing:.5px;}
    .gp-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:8900;opacity:0;pointer-events:none;transition:opacity .25s;}
    .gp-overlay.open{opacity:1;pointer-events:all;}
    .gp-panel{position:fixed;top:0;right:0;bottom:0;width:320px;max-width:100vw;background:var(--surface);z-index:8910;
      transform:translateX(100%);transition:transform .3s cubic-bezier(.4,0,.2,1);box-shadow:-8px 0 40px rgba(0,26,53,.18);
      display:flex;flex-direction:column;overflow:hidden;}
    .gp-panel.open{transform:translateX(0);}
    .gp-header{padding:20px 18px 16px;background:var(--dark);display:flex;align-items:center;justify-content:space-between;}
    .gp-header-title{font-family:var(--fd);font-size:.9rem;font-weight:600;color:var(--cream);letter-spacing:.5px;}
    .gp-close{background:none;border:none;color:var(--tan);font-size:1.1rem;cursor:pointer;padding:4px;}
    .gp-close:hover{color:var(--cream);}
    #gpContent{flex:1;overflow-y:auto;padding:20px 18px;}
    .gp-avatar-ring{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--gold),var(--gold-light));
      display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-size:1.4rem;font-weight:700;
      color:#fff;margin:0 auto 14px;box-shadow:0 4px 16px rgba(156,123,60,.35);}
    .gp-name{font-family:var(--fd);font-size:1rem;font-weight:600;text-align:center;color:var(--text);margin-bottom:4px;}
    .gp-email{font-size:.76rem;color:var(--text-l);text-align:center;margin-bottom:18px;}
    .gp-detail-row{display:flex;justify-content:space-between;font-size:.8rem;padding:9px 0;
      border-bottom:1px solid var(--border);}
    .gp-detail-row span:first-child{color:var(--text-l);}
    .gp-detail-row span:last-child{font-weight:500;color:var(--text);}
    .gp-saved{margin-top:18px;}
    .gp-saved-title{font-size:.68rem;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:600;margin-bottom:10px;}
    .gp-saved-item{padding:8px 10px;background:var(--bg);border-radius:8px;font-size:.8rem;color:var(--text-l);margin-bottom:6px;
      display:flex;justify-content:space-between;}
    .gp-divider{border:none;border-top:1px solid var(--border);margin:18px 0;}
    .gp-section-title{font-size:.68rem;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:600;margin-bottom:12px;}
    .gp-field label{display:block;font-size:.72rem;font-weight:500;color:var(--text-l);margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px;}
    .gp-field{margin-bottom:12px;}
    .gp-input{width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:var(--fb);
      font-size:.85rem;color:var(--text);background:var(--surface);outline:none;transition:border-color .2s;}
    .gp-input:focus{border-color:var(--gold);}
    .gp-btn{width:100%;padding:11px;border-radius:8px;background:linear-gradient(110deg,var(--gold),var(--gold-light) 50%,var(--gold));
      background-size:200% auto;border:none;color:#fff;font-family:var(--fb);font-size:.85rem;font-weight:500;cursor:pointer;
      transition:background-position .4s;margin-top:4px;}
    .gp-btn:hover{background-position:right center;}
    .gp-btn-outline{width:100%;padding:10px;border-radius:8px;background:transparent;border:1.5px solid var(--border);
      color:var(--text-l);font-family:var(--fb);font-size:.82rem;cursor:pointer;margin-top:8px;transition:border-color .2s,color .2s;}
    .gp-btn-outline:hover{border-color:var(--gold);color:var(--gold);}
    @media(max-width:400px){.gp-panel{width:100vw;}}
  `;
  document.head.appendChild(gpStyle);

  // Inject PWA install banner
  document.body.insertAdjacentHTML('beforeend', `
    <div class="install-banner" id="installBanner" role="complementary" aria-label="Install app">
      <div class="install-banner-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>
      </div>
      <div class="install-banner-text">
        <div class="install-banner-title">Czech Inn Hotels</div>
        <div class="install-banner-sub">Add to your home screen for instant access</div>
      </div>
      <button class="install-banner-btn" id="installBtn">Install</button>
      <button class="install-banner-dismiss" id="installDismiss" aria-label="Dismiss">✕</button>
    </div>
  `);

  // Inject install banner CSS
  const installStyle = document.createElement('style');
  installStyle.textContent = `
    .install-banner {
      position:fixed;bottom:-120px;left:50%;transform:translateX(-50%);
      width:min(520px,calc(100vw - 32px));
      background:var(--surface, #0D2137);
      border:1px solid rgba(156,123,60,.35);
      border-radius:16px;
      padding:14px 16px;
      display:flex;align-items:center;gap:12px;
      z-index:9500;
      box-shadow:0 8px 40px rgba(0,0,0,.45);
      transition:bottom .45s cubic-bezier(.34,1.56,.64,1);
    }
    .install-banner.show { bottom:24px; }
    .install-banner-icon {
      width:44px;height:44px;border-radius:12px;flex-shrink:0;
      background:linear-gradient(135deg,var(--gold,#9C7B3C),var(--gold-light,#C9A84C));
      display:flex;align-items:center;justify-content:center;color:#fff;
    }
    .install-banner-text { flex:1;min-width:0; }
    .install-banner-title { font-family:var(--fd,'Montserrat',sans-serif);font-size:.82rem;font-weight:700;color:var(--cream,#E8EDF4);margin-bottom:2px; }
    .install-banner-sub { font-size:.72rem;color:rgba(255,255,255,.5);line-height:1.4; }
    .install-banner-btn {
      padding:8px 18px;border-radius:8px;border:none;cursor:pointer;
      background:linear-gradient(110deg,var(--gold,#9C7B3C),var(--gold-light,#C9A84C));
      color:#fff;font-size:.8rem;font-weight:600;font-family:var(--fb,'Rubik',sans-serif);
      white-space:nowrap;flex-shrink:0;transition:opacity .2s;
    }
    .install-banner-btn:hover { opacity:.85; }
    .install-banner-dismiss {
      background:none;border:none;color:rgba(255,255,255,.35);font-size:.9rem;
      cursor:pointer;padding:4px 6px;flex-shrink:0;transition:color .2s;
    }
    .install-banner-dismiss:hover { color:rgba(255,255,255,.7); }
    @media(max-width:480px){
      .install-banner { flex-wrap:wrap; }
      .install-banner-text { order:1; }
      .install-banner-btn { order:2;width:100%;text-align:center;padding:10px; }
    }
  `;
  document.head.appendChild(installStyle);

  // Init all modules
  initLoader();
  initActiveNav();
  initScrollHide();
  initTransitions();
  initMobileNav();
  initGuestProfile();
  initInstallBanner();

  // Lottie: try to swap ring for Lottie after player loads
  const lottieEl = document.getElementById('loaderLottie');
  const ringEl   = document.getElementById('loaderRing');
  if (lottieEl) {
    lottieEl.addEventListener('ready', () => {
      ringEl.style.display  = 'none';
      lottieEl.style.display = 'block';
    });
  }
});

/* ── Floating CTA Visibility ─────────────────────────────── */
(function() {
  const btn = document.getElementById('floatCta');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }, { passive: true });
})();

/* ── Page Loader ─────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('out'), 900);
  });
  // Failsafe: always hide after 2.5s
  setTimeout(() => loader && loader.classList.add('out'), 2500);
}

/* ── Active Page Highlight ───────────────────────────────── */
function initActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mega-link, .nav-mobile-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href === current) a.classList.add('active');
  });
}

/* ── Scroll Hide / Show Nav ──────────────────────────────── */
function initScrollHide() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('hidden', y > lastY && y > 120);
    lastY = y;
  }, { passive: true });
}

/* ── Mobile Navigation ───────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('navHamburger');
  const mobile    = document.getElementById('navMobile');
  const overlay   = document.getElementById('navOverlay');
  const closeBtn  = document.getElementById('navClose');
  if (!hamburger || !mobile || !overlay) return;

  function openMenu() {
    hamburger.classList.add('open');
    mobile.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    mobile.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () =>
    mobile.classList.contains('open') ? closeMenu() : openMenu()
  );
  overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  mobile.querySelectorAll('a[data-nav]').forEach(a =>
    a.addEventListener('click', closeMenu)
  );
}

/* ── Guest Profile ───────────────────────────────────────── */
function initGuestProfile() {
  const btn     = document.getElementById('navGuestBtn');
  const panel   = document.getElementById('gpPanel');
  const overlay = document.getElementById('gpOverlay');
  const closeBtn = document.getElementById('gpClose');
  const content = document.getElementById('gpContent');
  const initials = document.getElementById('navGuestInitials');
  if (!btn || !panel) return;

  function getGuest() {
    try { return JSON.parse(localStorage.getItem('cih-guest') || 'null'); } catch(e) { return null; }
  }
  function saveGuest(g) {
    localStorage.setItem('cih-guest', JSON.stringify(g));
  }
  function getInitials(name) {
    if (!name) return '';
    return name.trim().split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2);
  }

  function updateNavBtn() {
    const g = getGuest();
    if (g && g.name) {
      btn.classList.add('logged-in');
      initials.textContent = getInitials(g.name);
    } else {
      btn.classList.remove('logged-in');
      initials.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`;
    }
  }

  function renderContent() {
    const g = getGuest();
    if (g && g.name) {
      // Logged in view
      const savedHTML = (g.saved && g.saved.length)
        ? g.saved.map(s => `<div class="gp-saved-item"><span>${s}</span><span>✓</span></div>`).join('')
        : `<div style="font-size:.76rem;color:var(--text-l)">No saved tours yet. Book a tour to see them here.</div>`;
      content.innerHTML = `
        <div class="gp-avatar-ring">${getInitials(g.name)}</div>
        <div class="gp-name">${g.name}</div>
        <div class="gp-email">${g.email || ''}</div>
        <div class="gp-detail-row"><span>Room</span><span>${g.room || 'Not set'}</span></div>
        <div class="gp-detail-row"><span>Language</span><span>${(g.lang || 'EN').toUpperCase()}</span></div>
        <div class="gp-detail-row"><span>Member since</span><span>${new Date().getFullYear()}</span></div>
        <div class="gp-saved">
          <div class="gp-saved-title">Saved Tours</div>
          ${savedHTML}
        </div>
        <hr class="gp-divider">
        <button class="gp-btn-outline" id="gpLogout">Sign Out</button>
      `;
      content.querySelector('#gpLogout').addEventListener('click', () => {
        localStorage.removeItem('cih-guest');
        updateNavBtn();
        renderContent();
      });
    } else {
      // Sign in / check-in form
      content.innerHTML = `
        <p style="font-size:.8rem;color:var(--text-l);line-height:1.6;margin-bottom:18px">Check in with your name and room number to save your tour preferences, bookings, and get personalised recommendations.</p>
        <div class="gp-section-title">Guest Check-In</div>
        <div class="gp-field">
          <label for="gpName">Full Name</label>
          <input class="gp-input" id="gpName" type="text" placeholder="e.g. Marie Novák" autocomplete="name">
        </div>
        <div class="gp-field">
          <label for="gpEmail">Email</label>
          <input class="gp-input" id="gpEmail" type="email" placeholder="e.g. marie@example.com" autocomplete="email">
        </div>
        <div class="gp-field">
          <label for="gpRoom">Room Number</label>
          <input class="gp-input" id="gpRoom" type="text" placeholder="e.g. 204" autocomplete="off">
        </div>
        <button class="gp-btn" id="gpCheckin">Check In</button>
      `;
      content.querySelector('#gpCheckin').addEventListener('click', () => {
        const name  = content.querySelector('#gpName').value.trim();
        const email = content.querySelector('#gpEmail').value.trim();
        const room  = content.querySelector('#gpRoom').value.trim();
        if (!name) { content.querySelector('#gpName').focus(); return; }
        saveGuest({ name, email, room, lang: document.documentElement.lang || 'en', saved: [] });
        updateNavBtn();
        renderContent();
      });
    }
  }

  function openPanel() {
    renderContent();
    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openPanel);
  overlay.addEventListener('click', closePanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);

  // Sync lang changes to guest profile
  document.addEventListener('click', e => {
    if (e.target.closest('[data-lang]')) {
      const g = getGuest();
      if (g) { g.lang = e.target.dataset.lang; saveGuest(g); }
    }
  });

  updateNavBtn();
}

/* ── PWA Install Banner ──────────────────────────────────── */
function initInstallBanner() {
  const banner   = document.getElementById('installBanner');
  const installBtn = document.getElementById('installBtn');
  const dismissBtn = document.getElementById('installDismiss');
  if (!banner) return;

  const DISMISS_KEY = 'cih-install-dismissed';
  let deferredPrompt = null;

  // Don't show if dismissed within last 7 days
  const dismissed = localStorage.getItem(DISMISS_KEY);
  if (dismissed && Date.now() - parseInt(dismissed) < 7 * 24 * 60 * 60 * 1000) return;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;

    // Show banner after 15s
    setTimeout(() => {
      banner.classList.add('show');
    }, 15000);
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
      }
      banner.classList.remove('show');
    });
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
      banner.classList.remove('show');
    });
  }

  window.addEventListener('appinstalled', () => {
    banner.classList.remove('show');
    deferredPrompt = null;
  });
}

/* ── Page Transitions ────────────────────────────────────── */
function initTransitions() {
  const overlay = document.getElementById('pageTransition');
  if (!overlay) return;

  // Animate IN on new page (entry reveal)
  overlay.classList.add('t-in');
  setTimeout(() => overlay.classList.remove('t-in'), 450);

  // Intercept all [data-nav] links
  document.addEventListener('click', e => {
    const link = e.target.closest('[data-nav]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) return;

    e.preventDefault();
    overlay.classList.remove('t-in');
    overlay.classList.add('t-out');

    setTimeout(() => {
      window.location.href = href;
    }, 380);
  });
}
