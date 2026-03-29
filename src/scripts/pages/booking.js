/* ═══════════════════════════════════════════════
   BOOKING MODAL — Czech Inn Hotels × UNO
   Features: 6 (booking engine), 8 (availability calendar), 9 (QR)
   ═══════════════════════════════════════════════ */

(function() {

  /* ── Seed-based availability (deterministic per tour+date) ── */
  function getSlots(tourId, dateStr) {
    let hash = 0;
    const s = tourId + dateStr;
    for (let i = 0; i < s.length; i++) hash = ((hash << 5) - hash) + s.charCodeAt(i);
    const base = Math.abs(hash) % 7;          // 0-6
    const isWeekend = new Date(dateStr).getDay() % 6 === 0;
    return isWeekend ? Math.max(0, 12 - base) : Math.max(0, 18 - base * 2);
  }

  /* ── Generate booking reference ─────────────── */
  function genRef() {
    return 'CIH-' + Math.random().toString(36).toUpperCase().slice(2, 8);
  }

  /* ── Toast helper ────────────────────────────── */
  function showToast(msg, icon) {
    let t = document.getElementById('bkToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'bkToast';
      t.className = 'bk-toast';
      document.body.appendChild(t);
    }
    t.innerHTML = `<span class="bk-toast-icon">${icon || '✉'}</span><span>${msg}</span>`;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 4500);
  }

  /* ── Month names ─────────────────────────────── */
  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];
  const DAYS   = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  /* ═══════════════════════════════════════════════
     BookingModal Class
     ═══════════════════════════════════════════════ */
  class BookingModal {
    constructor() {
      this._tour      = null;
      this._step      = 1;
      this._selDate   = null;
      this._seats     = 2;
      this._ref       = null;
      this._calYear   = null;
      this._calMonth  = null;
      this._el        = null;
      this._overlay   = null;
      this._build();
    }

    /* ── Build DOM ─────────────────────────────── */
    _build() {
      if (document.getElementById('bkOverlay')) return;

      const overlay = document.createElement('div');
      overlay.id = 'bkOverlay';
      overlay.className = 'bk-overlay';
      overlay.innerHTML = `
        <div class="bk-modal" id="bkModal" role="dialog" aria-modal="true" aria-label="Book a tour">
          <div class="bk-header">
            <div class="bk-title" id="bkTitle">Book Your Tour</div>
            <div class="bk-subtitle" id="bkSubtitle">Czech Inn Hotels × UNO Guided Tours</div>
            <button class="bk-close" id="bkClose" aria-label="Close">✕</button>
          </div>
          <div class="bk-steps" id="bkSteps">
            <div class="bk-step active" data-s="1">
              <div class="bk-step-num">1</div>
              <div class="bk-step-label">Date</div>
            </div>
            <div class="bk-step" data-s="2">
              <div class="bk-step-num">2</div>
              <div class="bk-step-label">Seats</div>
            </div>
            <div class="bk-step" data-s="3">
              <div class="bk-step-num">3</div>
              <div class="bk-step-label">Details</div>
            </div>
            <div class="bk-step" data-s="4">
              <div class="bk-step-num">4</div>
              <div class="bk-step-label">Confirm</div>
            </div>
          </div>
          <div class="bk-body" id="bkBody"></div>
          <div class="bk-footer" id="bkFooter"></div>
        </div>
      `;
      document.body.appendChild(overlay);
      this._overlay = overlay;
      this._el = overlay.querySelector('#bkModal');

      overlay.addEventListener('click', e => {
        if (e.target === overlay) this.close();
      });
      overlay.querySelector('#bkClose').addEventListener('click', () => this.close());
    }

    /* ── Open ──────────────────────────────────── */
    open(tour) {
      this._tour  = tour;
      this._step  = 1;
      this._selDate = null;
      this._seats = 2;
      this._ref   = null;
      const now = new Date();
      this._calYear  = now.getFullYear();
      this._calMonth = now.getMonth();
      this._overlay.querySelector('#bkTitle').textContent = 'Book: ' + tour.name;
      this._render();
      this._overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    /* ── Close ─────────────────────────────────── */
    close() {
      this._overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    /* ── Update step indicators ─────────────────── */
    _updateSteps() {
      this._overlay.querySelectorAll('.bk-step').forEach(el => {
        const s = parseInt(el.dataset.s);
        el.classList.remove('active','done');
        if (s === this._step) el.classList.add('active');
        else if (s < this._step) el.classList.add('done');
      });
    }

    /* ── Render current step ────────────────────── */
    _render() {
      this._updateSteps();
      const body   = this._overlay.querySelector('#bkBody');
      const footer = this._overlay.querySelector('#bkFooter');

      const tourStrip = this._tour ? `
        <div class="bk-tour-strip">
          <img class="bk-tour-img" src="${this._tour.img}" alt="${this._tour.name}" loading="lazy">
          <div class="bk-tour-info">
            <div class="bk-tour-name">${this._tour.name}</div>
            <div class="bk-tour-meta">${this._tour.dur} · ${this._tour.lang}</div>
          </div>
          <div class="bk-tour-price">€${this._tour.price}<span style="font-size:.6rem;font-weight:400;color:var(--text-l)">/pp</span></div>
        </div>
      ` : '';

      if (this._step === 1) {
        body.innerHTML = tourStrip + this._renderCalendar();
        footer.innerHTML = `
          <button class="bk-btn-back" id="bkBack" style="visibility:hidden">Back</button>
          <button class="bk-btn-next" id="bkNext" ${!this._selDate ? 'disabled' : ''}>Choose Seats →</button>
        `;
        this._bindCalendar();
      } else if (this._step === 2) {
        body.innerHTML = tourStrip + this._renderSeats();
        footer.innerHTML = `
          <button class="bk-btn-back" id="bkBack">← Back</button>
          <button class="bk-btn-next" id="bkNext">Guest Details →</button>
        `;
        this._bindSeats();
      } else if (this._step === 3) {
        body.innerHTML = tourStrip + this._renderForm();
        footer.innerHTML = `
          <button class="bk-btn-back" id="bkBack">← Back</button>
          <button class="bk-btn-next" id="bkNext">Confirm Booking →</button>
        `;
        this._bindForm();
      } else if (this._step === 4) {
        this._ref = this._ref || genRef();
        body.innerHTML = this._renderConfirmation();
        footer.innerHTML = `
          <button class="bk-btn-next" id="bkNext" style="width:100%">Done — Close</button>
        `;
        this._renderQR();
      }

      footer.querySelector('#bkNext').addEventListener('click', () => this._next());
      const backBtn = footer.querySelector('#bkBack');
      if (backBtn) backBtn.addEventListener('click', () => this._back());
    }

    /* ── Step 1: Calendar ───────────────────────── */
    _renderCalendar() {
      const year  = this._calYear;
      const month = this._calMonth;
      const today = new Date();
      today.setHours(0,0,0,0);

      const first     = new Date(year, month, 1);
      const daysInMo  = new Date(year, month + 1, 0).getDate();
      const startDay  = first.getDay();

      let cells = '';
      // Empty cells before 1st
      for (let i = 0; i < startDay; i++) {
        cells += `<div class="bk-cal-day bk-cal-empty"></div>`;
      }
      for (let d = 1; d <= daysInMo; d++) {
        const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const dateObj = new Date(year, month, d);
        const isPast  = dateObj < today;
        const slots   = isPast ? 0 : getSlots(this._tour ? this._tour.id : 'tour', dateStr);
        const isFull  = slots === 0 && !isPast;
        const isSel   = this._selDate === dateStr;
        const isLow   = slots > 0 && slots <= 4;
        let cls = 'bk-cal-day';
        if (isPast) cls += ' bk-cal-past';
        else if (isFull) cls += ' bk-cal-full';
        if (isSel) cls += ' selected';
        const slotsLabel = isPast ? '' : isFull ? '<span class="bk-cal-slots">Full</span>'
                         : isLow ? `<span class="bk-cal-slots low">${slots} left</span>`
                         : `<span class="bk-cal-slots">${slots} open</span>`;
        cells += `<div class="${cls}" data-date="${dateStr}" data-slots="${slots}">
                    <span class="bk-cal-day-num">${d}</span>${slotsLabel}
                  </div>`;
      }

      return `
        <div class="bk-section-label">Select a Date</div>
        <div class="bk-cal-month-nav">
          <button class="bk-cal-nav-btn" id="bkCalPrev">‹</button>
          <div class="bk-cal-month-label">${MONTHS[month]} ${year}</div>
          <button class="bk-cal-nav-btn" id="bkCalNext">›</button>
        </div>
        <div class="bk-calendar">
          ${DAYS.map(d => `<div class="bk-cal-day-header">${d}</div>`).join('')}
          ${cells}
        </div>
        ${this._selDate ? `<div class="bk-selected-date">📅 ${this._selDate} selected</div>` : ''}
      `;
    }

    _bindCalendar() {
      const body = this._overlay.querySelector('#bkBody');
      body.querySelectorAll('.bk-cal-day:not(.bk-cal-past):not(.bk-cal-full):not(.bk-cal-empty)').forEach(el => {
        el.addEventListener('click', () => {
          this._selDate = el.dataset.date;
          body.querySelectorAll('.bk-cal-day').forEach(d => d.classList.remove('selected'));
          el.classList.add('selected');
          // Update next btn and selected display
          const nextBtn = this._overlay.querySelector('#bkNext');
          if (nextBtn) nextBtn.disabled = false;
          // Refresh date display
          let sel = body.querySelector('.bk-selected-date');
          if (!sel) {
            sel = document.createElement('div');
            sel.className = 'bk-selected-date';
            body.querySelector('.bk-calendar').insertAdjacentElement('afterend', sel);
          }
          sel.innerHTML = `📅 ${this._selDate} selected`;
        });
      });
      this._overlay.querySelector('#bkCalPrev').addEventListener('click', () => {
        this._calMonth--;
        if (this._calMonth < 0) { this._calMonth = 11; this._calYear--; }
        const body2 = this._overlay.querySelector('#bkBody');
        const strip = body2.querySelector('.bk-tour-strip');
        body2.innerHTML = (strip ? strip.outerHTML : '') + this._renderCalendar();
        this._bindCalendar();
      });
      this._overlay.querySelector('#bkCalNext').addEventListener('click', () => {
        this._calMonth++;
        if (this._calMonth > 11) { this._calMonth = 0; this._calYear++; }
        const body2 = this._overlay.querySelector('#bkBody');
        const strip = body2.querySelector('.bk-tour-strip');
        body2.innerHTML = (strip ? strip.outerHTML : '') + this._renderCalendar();
        this._bindCalendar();
      });
    }

    /* ── Step 2: Seats ──────────────────────────── */
    _renderSeats() {
      const price    = this._tour ? this._tour.price : 0;
      const subtotal = price * this._seats;
      const fee      = Math.round(subtotal * 0.05);
      const total    = subtotal + fee;
      return `
        <div class="bk-section-label">Number of Guests</div>
        <div class="bk-seats-row">
          <button class="bk-seats-minus" id="bkMinus">−</button>
          <div class="bk-seats-num" id="bkSeatsNum">${this._seats}</div>
          <div class="bk-seats-label">guest${this._seats !== 1 ? 's' : ''}</div>
          <button class="bk-seats-plus" id="bkPlus">+</button>
        </div>
        <div class="bk-price-calc" id="bkPriceCalc">
          <div class="bk-price-row"><span>${this._seats} × €${price}</span><span>€${subtotal}</span></div>
          <div class="bk-price-row"><span>Booking fee (5%)</span><span>€${fee}</span></div>
          <div class="bk-price-row"><span>Total</span><span>€${total}</span></div>
        </div>
        <p style="font-size:.75rem;color:var(--text-l);line-height:1.6">Free cancellation up to 48 hours before the tour date. Hotel guests receive priority confirmation.</p>
      `;
    }

    _bindSeats() {
      const updateSeats = () => {
        this._overlay.querySelector('#bkSeatsNum').textContent = this._seats;
        const price = this._tour ? this._tour.price : 0;
        const sub   = price * this._seats;
        const fee   = Math.round(sub * 0.05);
        const total = sub + fee;
        const calc  = this._overlay.querySelector('#bkPriceCalc');
        if (calc) calc.innerHTML = `
          <div class="bk-price-row"><span>${this._seats} × €${price}</span><span>€${sub}</span></div>
          <div class="bk-price-row"><span>Booking fee (5%)</span><span>€${fee}</span></div>
          <div class="bk-price-row"><span>Total</span><span>€${total}</span></div>
        `;
      };
      this._overlay.querySelector('#bkMinus').addEventListener('click', () => {
        if (this._seats > 1) { this._seats--; updateSeats(); }
      });
      this._overlay.querySelector('#bkPlus').addEventListener('click', () => {
        if (this._seats < 8) { this._seats++; updateSeats(); }
      });
    }

    /* ── Step 3: Guest Form ─────────────────────── */
    _renderForm() {
      const guest = JSON.parse(localStorage.getItem('cih-guest') || 'null') || {};
      return `
        <div class="bk-section-label">Your Details</div>
        <div class="bk-field">
          <label class="bk-label" for="bkName">Full Name</label>
          <input class="bk-input" id="bkName" type="text" placeholder="e.g. Marie Novák" value="${guest.name || ''}" autocomplete="name">
        </div>
        <div class="bk-field">
          <label class="bk-label" for="bkEmail">Email Address</label>
          <input class="bk-input" id="bkEmail" type="email" placeholder="e.g. marie@example.com" value="${guest.email || ''}" autocomplete="email">
        </div>
        <div class="bk-field">
          <label class="bk-label" for="bkRoom">Room Number (optional)</label>
          <input class="bk-input" id="bkRoom" type="text" placeholder="e.g. 204" value="${guest.room || ''}" autocomplete="off">
        </div>
        <p style="font-size:.72rem;color:var(--text-l);line-height:1.6;margin-top:8px">Your confirmation will be sent to this email. Room number helps us arrange priority pick-up from the hotel.</p>
      `;
    }

    _bindForm() {
      // Nothing to bind dynamically — validation on submit
    }

    /* ── Step 4: Confirmation ───────────────────── */
    _renderConfirmation() {
      const price = this._tour ? this._tour.price : 0;
      const total = Math.round(price * this._seats * 1.05);
      return `
        <div class="bk-confirm">
          <div class="bk-confirm-icon">✓</div>
          <div class="bk-confirm-title">Booking Confirmed!</div>
          <div class="bk-confirm-sub">A confirmation has been sent to your email address. Show the QR code to your guide on the day of the tour.</div>
          <div class="bk-ref">${this._ref}</div>
          <div class="bk-ref-label">Your booking reference</div>
          <div class="bk-qr-wrap" id="bkQRWrap"></div>
          <div class="bk-confirm-details">
            <div class="bk-confirm-detail-row"><span>Tour</span><span>${this._tour ? this._tour.name : ''}</span></div>
            <div class="bk-confirm-detail-row"><span>Date</span><span>${this._selDate || ''}</span></div>
            <div class="bk-confirm-detail-row"><span>Guests</span><span>${this._seats} person${this._seats !== 1 ? 's' : ''}</span></div>
            <div class="bk-confirm-detail-row"><span>Total Paid</span><span style="color:var(--gold);font-weight:700">€${total}</span></div>
            <div class="bk-confirm-detail-row"><span>Meet Point</span><span>${this._tour && this._tour.stops && this._tour.stops[0] ? this._tour.stops[0].a : 'Hotel lobby'}</span></div>
          </div>
        </div>
      `;
    }

    _renderQR() {
      const wrap = this._overlay.querySelector('#bkQRWrap');
      if (!wrap) return;
      const qrData = `czechinn://booking?ref=${this._ref}&tour=${this._tour ? this._tour.id : ''}&date=${this._selDate || ''}&guests=${this._seats}`;
      if (typeof QRCode !== 'undefined') {
        new QRCode(wrap, { text: qrData, width: 160, height: 160, colorDark: '#001A35', colorLight: '#FFFFFF' });
      } else {
        // Fallback: text only
        wrap.innerHTML = `<div style="background:#f5f5f5;border-radius:8px;padding:20px;font-size:.7rem;font-family:monospace;word-break:break-all;max-width:220px">${qrData}</div>`;
      }
    }

    /* ── Navigation ─────────────────────────────── */
    _next() {
      if (this._step === 1) {
        if (!this._selDate) return;
        this._step = 2;
        this._render();
      } else if (this._step === 2) {
        this._step = 3;
        this._render();
      } else if (this._step === 3) {
        const nameEl  = this._overlay.querySelector('#bkName');
        const emailEl = this._overlay.querySelector('#bkEmail');
        const roomEl  = this._overlay.querySelector('#bkRoom');
        if (!nameEl.value.trim()) { nameEl.focus(); nameEl.style.borderColor='#c0533a'; return; }
        if (!emailEl.value.includes('@')) { emailEl.focus(); emailEl.style.borderColor='#c0533a'; return; }
        // Save to guest profile
        try {
          const g = JSON.parse(localStorage.getItem('cih-guest') || '{}');
          g.name  = nameEl.value.trim();
          g.email = emailEl.value.trim();
          if (roomEl.value.trim()) g.room = roomEl.value.trim();
          localStorage.setItem('cih-guest', JSON.stringify(g));
        } catch(e) {}
        this._step = 4;
        this._render();
        setTimeout(() => {
          const nameVal = this._overlay.querySelector('#bkName') ? '' : '';
          const g = JSON.parse(localStorage.getItem('cih-guest') || '{}');
          showToast(`Confirmation sent to ${g.email || 'your email'}`, '✉');
        }, 800);
      } else if (this._step === 4) {
        this.close();
      }
    }

    _back() {
      if (this._step > 1) { this._step--; this._render(); }
    }
  }

  /* ── Singleton instance ──────────────────────── */
  const bookingModal = new BookingModal();

  /* ── Public API ──────────────────────────────── */
  window.BookingModal = {
    open(tour) { bookingModal.open(tour); }
  };

  /* ── Wire up all "Book This Tour" / "Book Now" buttons ── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-book-tour]');
    if (!btn) return;
    const tourId = btn.dataset.bookTour;
    const tour   = (typeof TOURS !== 'undefined') ? TOURS.find(t => t.id === tourId) : null;
    if (tour) bookingModal.open(tour);
  });

})();
