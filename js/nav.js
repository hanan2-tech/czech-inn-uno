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

  // Init all modules
  initLoader();
  initActiveNav();
  initScrollHide();
  initTransitions();
  initMobileNav();

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
