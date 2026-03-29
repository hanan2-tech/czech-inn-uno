/* ============================================================
   visuals.js — Shared Visual Utilities
   Czech Inn Hotels × UNO
   ============================================================ */

/* ── Parallax ─────────────────────────────────────────────── */
export function initParallax() {
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;

  function onScroll() {
    const scrollY = window.scrollY;
    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const offset = (center - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Lazy Image Blur-Up ───────────────────────────────────── */
export function initLazyImages() {
  const imgs = document.querySelectorAll('img[data-src], .img-lazy[data-src]');
  if (!imgs.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      const src = img.dataset.src;
      if (!src) return;

      const loader = new Image();
      loader.onload = () => {
        img.src = src;
        img.classList.add('loaded');
      };
      loader.src = src;
      io.unobserve(img);
    });
  }, { rootMargin: '200px' });

  imgs.forEach(img => io.observe(img));
}

/* ── Scroll Reveal ────────────────────────────────────────── */
export function initScrollReveal() {
  const els = document.querySelectorAll(
    '.reveal-up, .reveal-scale, .reveal-left, .reveal-right, .reveal'
  );
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => {
    if (!el.classList.contains('reveal-up') &&
        !el.classList.contains('reveal-scale') &&
        !el.classList.contains('reveal-left') &&
        !el.classList.contains('reveal-right')) {
      el.classList.add('reveal-up');
    }
    io.observe(el);
  });
}

/* ── Animated Counters ────────────────────────────────────── */
export function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = parseInt(el.dataset.duration) || 1800;
    const start = Date.now();

    function tick() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = easeOut(progress) * target;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  els.forEach(el => io.observe(el));
}

/* ── SVG Chart Animations ─────────────────────────────────── */
export function initChartAnimations() {
  const charts = document.querySelectorAll('.svg-bar, .svg-line, .svg-radial');
  if (!charts.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animated');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  charts.forEach(c => io.observe(c));
}

/* ── Timeline Animation ───────────────────────────────────── */
export function initTimelines() {
  const lines = document.querySelectorAll('.visual-timeline-line');
  const items = document.querySelectorAll('.vt-item');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animated');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.3 });

  lines.forEach(l => io.observe(l));

  const itemIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  items.forEach(item => itemIO.observe(item));
}

/* ── Progress Bar Animations ──────────────────────────────── */
export function initProgressBars() {
  const bars = document.querySelectorAll('.progress-bar-fill');
  if (!bars.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animated');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  bars.forEach(b => io.observe(b));
}

/* ── Bubble Chart Animations ──────────────────────────────── */
export function initBubbles() {
  const bubbles = document.querySelectorAll('.bubble');
  if (!bubbles.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('animated');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  bubbles.forEach(b => io.observe(b));
}

/* ── Hover Video Cards ────────────────────────────────────── */
export function initHoverVideos() {
  document.querySelectorAll('.hover-video-card').forEach(card => {
    const video = card.querySelector('.card-video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {});
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
}

/* ── Lightbox ─────────────────────────────────────────────── */
export function initLightbox() {
  const overlay = document.getElementById('lightbox') || createLightbox();

  function createLightbox() {
    const el = document.createElement('div');
    el.id = 'lightbox';
    el.className = 'lightbox-overlay';
    el.innerHTML = `
      <button class="lightbox-close" aria-label="Close">✕</button>
      <button class="lightbox-prev" aria-label="Previous">‹</button>
      <img class="lightbox-img" src="" alt="">
      <button class="lightbox-next" aria-label="Next">›</button>
    `;
    document.body.appendChild(el);
    return el;
  }

  const img = overlay.querySelector('.lightbox-img');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');

  let gallery = [];
  let currentIndex = 0;

  function open(src, galleryItems, index) {
    gallery = galleryItems || [src];
    currentIndex = index || 0;
    img.src = gallery[currentIndex];
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 300);
  }

  function prev() {
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    img.src = gallery[currentIndex];
  }

  function next() {
    currentIndex = (currentIndex + 1) % gallery.length;
    img.src = gallery[currentIndex];
  }

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  document.querySelectorAll('.lightbox-trigger').forEach((trigger, i) => {
    trigger.addEventListener('click', () => {
      const galleryName = trigger.dataset.gallery;
      if (galleryName) {
        const galleryItems = Array.from(
          document.querySelectorAll(`[data-gallery="${galleryName}"]`)
        ).map(el => el.dataset.full || el.src || el.dataset.src);
        const idx = Array.from(
          document.querySelectorAll(`[data-gallery="${galleryName}"]`)
        ).indexOf(trigger);
        open(null, galleryItems, idx);
      } else {
        open(trigger.dataset.full || trigger.src || trigger.dataset.src);
      }
    });
  });
}

/* ── Video Modal ──────────────────────────────────────────── */
export function initVideoModals() {
  const modals = document.querySelectorAll('.video-modal-overlay');
  const triggers = document.querySelectorAll('[data-video-modal]');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.dataset.videoModal;
      const modal = document.getElementById(targetId) ||
                    document.querySelector('.video-modal-overlay');
      if (!modal) return;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      const video = modal.querySelector('video');
      if (video) video.play().catch(() => {});
    });
  });

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.video-modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  function closeModal(modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    const video = modal.querySelector('video');
    if (video) { video.pause(); video.currentTime = 0; }
  }
}

/* ── Star Rating Animation ────────────────────────────────── */
export function initStarRatings() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.star-fill').forEach((fill, i) => {
        setTimeout(() => fill.classList.add('animated'), i * 80);
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.star-row').forEach(row => io.observe(row));
}

/* ── Map Marker Setup ─────────────────────────────────────── */
export function initMapMarkers() {
  document.querySelectorAll('.map-marker').forEach(marker => {
    const target = marker.dataset.scrollTo;
    if (target) {
      marker.addEventListener('click', () => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
}

/* ── Init All ─────────────────────────────────────────────── */
export function initAllVisuals() {
  initParallax();
  initLazyImages();
  initScrollReveal();
  initCounters();
  initChartAnimations();
  initTimelines();
  initProgressBars();
  initBubbles();
  initHoverVideos();
  initLightbox();
  initVideoModals();
  initStarRatings();
  initMapMarkers();
}
