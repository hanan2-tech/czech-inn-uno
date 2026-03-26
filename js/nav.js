/* ═══════════════════════════════════════════════════════════
   NAV.JS — Shared Navigation, Mega-Menu, Lottie, Transitions
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
      <a href="index.html" class="nav-link" data-nav>Home</a>

      <!-- Experiences mega-menu -->
      <div class="nav-group">
        <button class="nav-group-btn">
          Experiences <span class="nav-arrow">▼</span>
        </button>
        <div class="nav-mega">
          <div class="mega-col">
            <div class="mega-col-label">Tours & Experiences</div>
            <a href="tours.html" class="mega-link" data-nav>
              <span class="mega-link-icon">🗺️</span>
              <span class="mega-link-text">Guided Tours</span>
            </a>
            <a href="gold-label.html" class="mega-link" data-nav>
              <span class="mega-link-icon">✦</span>
              <span class="mega-link-text">Gold Label</span>
              <span class="mega-link-badge">Premium</span>
            </a>
            <a href="extras.html" class="mega-link" data-nav>
              <span class="mega-link-icon">🎯</span>
              <span class="mega-link-text">Extras Catalogue</span>
            </a>
            <a href="after-dark.html" class="mega-link" data-nav>
              <span class="mega-link-icon">🌙</span>
              <span class="mega-link-text">Prague After Dark</span>
            </a>
          </div>
          <div class="mega-col">
            <div class="mega-col-label">Guest Experience</div>
            <a href="concierge.html" class="mega-link" data-nav>
              <span class="mega-link-icon">📱</span>
              <span class="mega-link-text">Digital Concierge</span>
            </a>
            <a href="by-passion.html" class="mega-link" data-nav>
              <span class="mega-link-icon">❤️</span>
              <span class="mega-link-text">Prague by Passion</span>
            </a>
            <a href="corporate.html" class="mega-link" data-nav>
              <span class="mega-link-icon">🤝</span>
              <span class="mega-link-text">Groups & Corporate</span>
            </a>
          </div>
        </div>
      </div>

      <!-- For Hotels mega-menu -->
      <div class="nav-group">
        <button class="nav-group-btn">
          For Hotels <span class="nav-arrow">▼</span>
        </button>
        <div class="nav-mega">
          <div class="mega-col">
            <div class="mega-col-label">Strategy & Revenue</div>
            <a href="business-plan.html" class="mega-link" data-nav>
              <span class="mega-link-icon">📄</span>
              <span class="mega-link-text">Business Plan</span>
            </a>
            <a href="analytics.html" class="mega-link" data-nav>
              <span class="mega-link-icon">📊</span>
              <span class="mega-link-text">Analytics</span>
            </a>
          </div>
          <div class="mega-col">
            <div class="mega-col-label">Operations & Trust</div>
            <a href="integration.html" class="mega-link" data-nav>
              <span class="mega-link-icon">🔗</span>
              <span class="mega-link-text">Integration</span>
            </a>
            <a href="social-proof.html" class="mega-link" data-nav>
              <span class="mega-link-icon">⭐</span>
              <span class="mega-link-text">Social Proof</span>
            </a>
          </div>
        </div>
      </div>

      <a href="partnership.html" class="nav-link nav-cta" data-nav>Partnership →</a>
    </div>
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
      <p class="footer-brand-desc">A proposed partnership bringing curated guided tours and premium guest experiences to all 28 Czech Inn Hotels properties across Prague.</p>
      <div class="footer-contact">
        <p><b>Czech Inn Hotels s.r.o.</b></p>
        <p>Hybernská 24, Praha 1 — 110 00</p>
        <p>28 Hotels &nbsp;·&nbsp; 3,300+ Rooms</p>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Experiences</div>
      <div class="footer-links">
        <a href="tours.html">Guided Tours</a>
        <a href="gold-label.html">Gold Label</a>
        <a href="extras.html">Extras Catalogue</a>
        <a href="after-dark.html">Prague After Dark</a>
        <a href="corporate.html">Groups & Corporate</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Guest Tools</div>
      <div class="footer-links">
        <a href="concierge.html">Digital Concierge</a>
        <a href="by-passion.html">Prague by Passion</a>
        <a href="integration.html">Hotel Integration</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">For Hotels</div>
      <div class="footer-links">
        <a href="business-plan.html">Business Plan</a>
        <a href="analytics.html">Analytics</a>
        <a href="social-proof.html">Social Proof</a>
        <a href="partnership.html">Partnership →</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Guided Experiences Platform — proposed for <b>Czech Inn Hotels s.r.o.</b> &nbsp;·&nbsp; Prepared for <b>Jaroslav Svoboda</b></p>
    <p style="opacity:.45;font-size:.68rem">All tours, guides, and pricing are real and ready to deploy.</p>
  </div>
</footer>`;

/* ── Inject Nav + Footer ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav at top of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer at bottom of body
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Init all modules
  initLoader();
  initActiveNav();
  initScrollHide();
  initTransitions();

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
  document.querySelectorAll('.nav-link, .mega-link').forEach(a => {
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
