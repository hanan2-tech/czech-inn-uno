/* ── Scroll Reveal ─────────────────────────── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Counter Animations ─────────────────────── */
function animateCounter(el) {
  const target = parseFloat(el.dataset.counter);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const isDecimal = target % 1 !== 0;
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const pct = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - pct, 3);
    const val = isDecimal ? (target * ease).toFixed(1) : Math.round(target * ease);
    el.textContent = prefix + val + suffix;
    if (pct < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && e.target.dataset.counter) {
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-counter]').forEach(el => counterObs.observe(el));

/* ── Funnel Bars Animate ────────────────────── */
const funnelObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.funnel-bar').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, i * 180);
      });
      funnelObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const funnelChart = document.getElementById('funnelChart');
if (funnelChart) funnelObs.observe(funnelChart);

/* ── Bar Chart Animation ────────────────────── */
const chartObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.proj-bar-fill').forEach((bar, i) => {
        const target = parseInt(bar.dataset.target);
        const maxH = 240;
        const h = Math.round((target / 262) * maxH);
        setTimeout(() => {
          bar.style.height = h + 'px';
        }, i * 200 + 100);
      });
      chartObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
const projChart = document.getElementById('projChart');
if (projChart) chartObs.observe(projChart);

/* ── Revenue Calculator ─────────────────────── */
function calcRevenue() {
  const props = parseInt(document.getElementById('sliderProps').value);
  const occ = parseInt(document.getElementById('sliderOcc').value) / 100;
  const conv = parseInt(document.getElementById('sliderConv').value) / 100;

  const roomsPerProp = 118;
  const guestsPerRoom = 1.8;
  const avgBookingVal = 71;
  const commRate = 0.24;
  const daysPerYear = 365;

  const totalRoomNights = props * roomsPerProp * daysPerYear;
  const occupiedNights = totalRoomNights * occ;
  const guestTouchpoints = occupiedNights * guestsPerRoom;
  const bookings = Math.round(guestTouchpoints * conv);
  const gross = bookings * avgBookingVal;
  const commission = gross * commRate;

  document.getElementById('valProps').textContent = props;
  document.getElementById('valOcc').textContent = Math.round(occ * 100) + '%';
  document.getElementById('valConv').textContent = Math.round(conv * 100) + '%';

  document.getElementById('calcBookings').textContent = bookings.toLocaleString('en-US');
  document.getElementById('calcGross').textContent = '€' + (gross / 1000000).toFixed(1) + 'M';
  document.getElementById('calcComm').textContent = '€' + commission.toLocaleString('en-US', {maximumFractionDigits: 0});
}
['sliderProps', 'sliderOcc', 'sliderConv'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', calcRevenue);
});
calcRevenue();