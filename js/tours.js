/* ═══════════════════════════════════════════════
   TOURS PAGE SCRIPT
   ═══════════════════════════════════════════════ */

(function() {

  /* ── Language helper ─────────────────────────── */
  function getLangT() {
    const lang = document.documentElement.lang || 'en';
    return { lang, t: (typeof T !== 'undefined' && T[lang]) ? T[lang] : (typeof T !== 'undefined' ? T.en : {}) };
  }

  /* ── Get tour field from T or fall back to data.js value ── */
  function tv(t, id, field, fallback) {
    return t['tours.t.' + id + '.' + field] || fallback;
  }

  /* ── Build Tabs ──────────────────────────────── */
  function buildTabs() {
    const container = document.getElementById('tabsInner');
    container.innerHTML = '';
    const { t } = getLangT();
    TOURS.forEach((tour, i) => {
      const name = tv(t, tour.id, 'name', tour.name);
      const btn = document.createElement('button');
      btn.className = 'tour-tab' + (i === 0 ? ' active' : '');
      btn.dataset.idx = i;
      btn.innerHTML = `
        <span class="tab-badge ${tour.badgeClass}">${tour.badge}</span>
        ${name}
        <span class="tab-price">€${tour.price}</span>
      `;
      btn.addEventListener('click', () => activateTour(i));
      container.appendChild(btn);
    });
  }

  /* ── Activate Tour ───────────────────────────── */
  function activateTour(idx) {
    document.querySelectorAll('.tour-tab').forEach((t, i) => {
      t.classList.toggle('active', i === idx);
    });
    document.querySelectorAll('.tour-panel').forEach((p, i) => {
      p.classList.toggle('active', i === idx);
    });
    // Scroll to tabs smoothly
    const tabs = document.getElementById('tourTabs');
    const y = tabs.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  /* ── Build Tour Panels ───────────────────────── */
  function buildPanels() {
    const container = document.getElementById('tourPanels');
    container.innerHTML = '';
    const { t } = getLangT();
    TOURS.forEach((tour, i) => {
      const panel = document.createElement('div');
      panel.className = 'tour-panel' + (i === 0 ? ' active' : '');
      panel.innerHTML = buildPanelHTML(tour, t);
      container.appendChild(panel);
    });
  }

  function buildPanelHTML(tour, t) {
    const id = tour.id;
    const name      = tv(t, id, 'name',   tour.name);
    const sub       = tv(t, id, 'sub',    tour.sub);
    const desc      = tv(t, id, 'desc',   tour.desc);
    const dur       = tv(t, id, 'dur',    tour.dur);
    const grp       = tv(t, id, 'grp',    tour.grp);
    const lang      = tv(t, id, 'lang',   tour.lang);
    const type      = tv(t, id, 'type',   tour.type);
    const season    = tv(t, id, 'season', tour.season);

    // Includes
    const incItems = tour.includes.map((inc, idx) => {
      const incT = tv(t, id, 'inc' + idx, inc);
      return `<li class="includes-item"><span class="includes-check"></span><span>${incT}</span></li>`;
    }).join('');

    // UI labels
    const lDuration  = t['tours.info.duration']  || 'Duration';
    const lGroupSize = t['tours.info.groupsize']  || 'Group Size';
    const lLanguages = t['tours.info.languages']  || 'Languages';
    const lType      = t['tours.info.type']       || 'Tour Type';
    const lSeason    = t['tours.info.season']     || 'Season';
    const lPerPerson = t['tours.info.perperson']  || 'Per Person';
    const lGuest     = t['tours.info.guest']      || '/ guest';
    const lIncTitle  = t['tours.includes.title']  || "What's Included";
    const lIncBtn    = t['tours.includes.btn']    || 'Book This Tour';
    const lStopTitle = t['tours.stop.title']      || 'Stop-by-Stop <span>Journey</span>';
    const lStopLabel = t['tours.stop.label']      || 'Stop';
    const lVenEyebr  = t['tours.venues.eyebrow']  || 'Insider Guide';
    const lVenTitle  = t['tours.venues.title']    || 'Course Area and Partner Venues';
    const lVenSub    = t['tours.venues.sub']      || 'Curated spots in and around the tour area. Places to eat, drink, browse, and linger before or after the tour.';

    // Stops
    const stopsHTML = tour.stops.map((stop, si) => {
      const sn       = tv(t, id, 's' + si + '.n',        stop.n);
      const sstory   = tv(t, id, 's' + si + '.story',    stop.story);
      const squote   = tv(t, id, 's' + si + '.quote',    stop.quote);
      const sact     = tv(t, id, 's' + si + '.activity', stop.activity);
      const sfood    = stop.food ? tv(t, id, 's' + si + '.food', stop.food) : '';
      const hasPhoto = !!stop.photo;
      return `
        <div class="stop reveal">
          <div class="stop-dot"><div class="stop-dot-inner"></div></div>
          <div class="stop-header">
            <div>
              <div class="stop-num">${lStopLabel} ${si + 1}</div>
              <div class="stop-name">${sn}</div>
              <div class="stop-addr"><iconify-icon icon="tabler:map-pin" style="font-size:13px;color:#C9A84C"></iconify-icon> ${stop.a}</div>
            </div>
            <span class="stop-dur-pill"><iconify-icon icon="tabler:clock" style="font-size:13px;color:#C9A84C"></iconify-icon> ${stop.dur}</span>
          </div>
          <div class="${hasPhoto ? 'stop-body-grid' : ''}">
            <div>
              <p class="stop-story">${sstory}</p>
              <blockquote class="stop-quote">${squote}</blockquote>
              <div class="stop-meta">
                <div class="stop-activity">
                  <span class="stop-meta-icon"><lord-icon src="https://cdn.lordicon.com/ibydboev.json" trigger="hover" colors="primary:#C9A84C,secondary:#9C7B3C" style="width:16px;height:16px"></lord-icon></span>
                  <span>${sact}</span>
                </div>
                ${sfood ? `
                <div class="stop-food">
                  <span class="stop-meta-icon"><iconify-icon icon="tabler:tools-kitchen-2" style="font-size:16px;color:#C9A84C"></iconify-icon></span>
                  <span>${sfood}</span>
                </div>` : ''}
              </div>
            </div>
            ${hasPhoto ? `<img class="stop-photo" src="${stop.photo}" alt="${sn}" loading="lazy">` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Gallery strip
    const galleryHTML = (tour.photos && tour.photos.length) ? `
      <div class="tour-gallery">
        ${tour.photos.map(url => `<img class="tour-gallery-img" src="${url}" alt="${name}" loading="lazy">`).join('')}
      </div>
    ` : '';

    return `
      <!-- Detail Hero -->
      <div class="tour-detail-hero">
        <img src="${tour.img.startsWith('http') ? tour.img + '&w=1400&q=85' : tour.img}" alt="${name}" loading="lazy"/>
        <div class="tour-detail-hero-overlay">
          <div>
            <div class="tour-detail-badge ${tour.badgeClass}">${tour.badge}</div>
            <div class="tour-detail-name">${name}</div>
            <div class="tour-detail-sub">${sub}</div>
          </div>
        </div>
      </div>

      <!-- Info Bar -->
      <div class="info-bar">
        <div class="info-bar-inner">
          <div class="info-item">
            <span class="info-item-icon">⏱</span>
            <span class="info-item-label">${lDuration}</span>
            <span class="info-item-value">${dur}</span>
          </div>
          <div class="info-item">
            <span class="info-item-icon"><lord-icon src="https://cdn.lordicon.com/dxjqoygy.json" trigger="hover" colors="primary:#C9A84C" style="width:20px;height:20px"></lord-icon></span>
            <span class="info-item-label">${lGroupSize}</span>
            <span class="info-item-value">${grp}</span>
          </div>
          <div class="info-item">
            <span class="info-item-icon"><iconify-icon icon="tabler:world" style="font-size:20px;color:#C9A84C"></iconify-icon></span>
            <span class="info-item-label">${lLanguages}</span>
            <span class="info-item-value">${lang}</span>
          </div>
          <div class="info-item">
            <span class="info-item-icon"><iconify-icon icon="tabler:walk" style="font-size:20px;color:#C9A84C"></iconify-icon></span>
            <span class="info-item-label">${lType}</span>
            <span class="info-item-value">${type}</span>
          </div>
          <div class="info-item">
            <span class="info-item-icon"><iconify-icon icon="tabler:calendar" style="font-size:20px;color:#C9A84C"></iconify-icon></span>
            <span class="info-item-label">${lSeason}</span>
            <span class="info-item-value">${season}</span>
          </div>
          <div class="info-item">
            <span class="info-item-label">${lPerPerson}</span>
            <span class="info-item-price">€${tour.price} <span>${lGuest}</span></span>
          </div>
        </div>
      </div>

      <!-- Photo Gallery Strip -->
      ${galleryHTML}

      <!-- Tour Body: Desc + Includes -->
      <div class="tour-body">
        <div class="tour-body-grid">
          <div>
            <p class="tour-desc-text">${desc}</p>
          </div>
          <aside class="includes-box">
            <div class="includes-title">${lIncTitle}</div>
            <ul class="includes-list">${incItems}</ul>
            <a href="partnership.html" class="btn-gold" data-nav style="width:100%;justify-content:center">${lIncBtn}</a>
          </aside>
        </div>
      </div>

      <!-- Stop Timeline -->
      <div class="stops-section">
        <h3 class="stops-title">${lStopTitle}</h3>
        <div class="timeline">${stopsHTML}</div>
      </div>

      <!-- Interactive Map -->
      <div class="tour-map-wrap">
        <div class="tour-map" id="map-${id}"></div>
      </div>

      <!-- Partner Venues -->
      <div class="venues-section">
        <div class="venues-inner">
          <div class="sec-line sec-line-left"></div>
          <div class="sec-eyebrow sec-eyebrow-left">${lVenEyebr}</div>
          <h3 class="sec-title sec-title-left">${lVenTitle}</h3>
          <p class="sec-sub sec-sub-left">${lVenSub}</p>
          <div class="venues-grid">
            ${tour.venues.map(v => `
              <div class="venue-card reveal">
                <div class="venue-icon">${v.icon}</div>
                <div class="venue-type">${v.type}</div>
                <div class="venue-name">${v.name}</div>
                <div class="venue-addr"><iconify-icon icon="tabler:map-pin" style="font-size:13px;color:#C9A84C"></iconify-icon> ${v.addr}</div>
                <p class="venue-what">${v.what}</p>
                <div class="venue-tip">
                  <span><iconify-icon icon="tabler:bulb" style="font-size:14px;color:#C9A84C"></iconify-icon></span>
                  <span>${v.tip}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  /* ── Comparison Table ────────────────────────── */
  function buildComparisonTable() {
    const table = document.getElementById('compTable');
    table.innerHTML = '';
    const { t } = getLangT();

    const headers = [
      t['tours.cmp.th.tour']       || 'Tour',
      t['tours.cmp.th.dur']        || 'Duration',
      t['tours.cmp.th.price']      || 'Price',
      t['tours.cmp.th.grp']        || 'Group Size',
      t['tours.cmp.th.type']       || 'Type',
      t['tours.cmp.th.season']     || 'Season',
      t['tours.cmp.th.highlights'] || 'Highlights'
    ];
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    TOURS.forEach(tour => {
      const id = tour.id;
      const name      = tv(t, id, 'name',       tour.name);
      const dur       = tv(t, id, 'dur',        tour.dur);
      const grp       = tv(t, id, 'grp',        tour.grp);
      const type      = tv(t, id, 'type',       tour.type);
      const season    = tv(t, id, 'season',     tour.season);
      const highlights= tv(t, id, 'highlights', '');
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div class="tour-name-cell">${name}</div>
          <span class="comp-badge ${tour.badgeClass}" style="margin-top:6px">${tour.badge}</span>
        </td>
        <td>${dur}</td>
        <td class="price-cell">€${tour.price}</td>
        <td>${grp}</td>
        <td>${type}</td>
        <td>${season}</td>
        <td style="font-size:.8rem">${highlights}</td>
      `;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }

  /* ── Seasonal Calendar ───────────────────────── */
  function buildCalendar() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    const { t } = getLangT();

    const monthKeys = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
    const months = monthKeys.map(k => t['tours.cal.' + k] || k.charAt(0).toUpperCase() + k.slice(1));

    // Header row
    const headerBlank = document.createElement('div');
    headerBlank.className = 'cal-header';
    headerBlank.textContent = t['tours.cal.header'] || 'Tour';
    grid.appendChild(headerBlank);
    months.forEach(m => {
      const div = document.createElement('div');
      div.className = 'cal-header';
      div.textContent = m;
      grid.appendChild(div);
    });

    // Seasonal data: peak=2, good=1, low=0
    const seasonData = {
      kafka:  [1,1,2,2,2,2,2,2,2,2,1,1],
      mucha:  [1,1,2,2,2,2,2,2,2,2,1,1],
      jewish: [1,1,2,2,2,1,1,1,2,2,2,1],
      kids:   [0,0,1,1,2,2,2,2,2,1,1,0]
    };

    TOURS.forEach(tour => {
      const name = tv(t, tour.id, 'name', tour.name);
      const label = document.createElement('div');
      label.className = 'cal-tour-label';
      label.textContent = name.split("'")[0].trim().split(' ').slice(0,2).join(' ');
      grid.appendChild(label);

      const data = seasonData[tour.id];
      data.forEach(val => {
        const cell = document.createElement('div');
        cell.className = 'cal-cell ' + (val === 2 ? 'peak' : val === 1 ? 'good' : 'low');
        grid.appendChild(cell);
      });
    });
  }

  /* ── Leaflet Maps ────────────────────────────── */
  const _maps = {};
  function initMaps() {
    if (typeof L === 'undefined') return;
    TOURS.forEach(tour => {
      const el = document.getElementById('map-' + tour.id);
      if (!el || _maps[tour.id]) return;
      const stops = tour.stops.filter(s => s.lat && s.lng);
      if (!stops.length) return;
      const map = L.map(el, { zoomControl: true, scrollWheelZoom: false });
      _maps[tour.id] = map;
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      const latlngs = stops.map(s => [s.lat, s.lng]);
      L.polyline(latlngs, { color: '#C9A84C', weight: 2, opacity: .65, dashArray: '6 4' }).addTo(map);
      stops.forEach((stop, i) => {
        const icon = L.divIcon({ html: `<div class="map-pin">${i + 1}</div>`, className: '', iconSize: [28, 28], iconAnchor: [14, 14] });
        L.marker([stop.lat, stop.lng], { icon }).addTo(map)
          .bindPopup(`<strong style="font-family:sans-serif;font-size:13px">${stop.n}</strong><br><span style="font-size:12px;color:#666">${stop.a}</span>`);
      });
      map.fitBounds(latlngs, { padding: [24, 24] });
    });
  }

  /* ── Live Weather ────────────────────────────── */
  async function fetchWeather() {
    try {
      const r = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.08&longitude=14.42&current=temperature_2m,weather_code&timezone=Europe%2FPrague');
      const d = await r.json();
      const temp = Math.round(d.current.temperature_2m);
      const code = d.current.weather_code;
      const icn = code <= 1 ? '☀' : code <= 3 ? '⛅' : code <= 48 ? '🌫' : code <= 67 ? '🌧' : code <= 77 ? '❄' : '⛈';
      const bar = document.getElementById('weatherBar');
      const txt = document.getElementById('weatherText');
      if (bar && txt) {
        txt.textContent = `Prague right now: ${icn} ${temp}°C  ·  Best season for tours: April to October`;
        bar.classList.remove('weather-hidden');
      }
    } catch(e) { /* silent fail */ }
  }

  /* ── Full re-render on language change ───────── */
  function renderTours() {
    buildTabs();
    buildPanels();
    buildComparisonTable();
    buildCalendar();
    setTimeout(initReveal, 100);
    setTimeout(initMaps, 200);
  }

  document.addEventListener('click', e => {
    if (e.target.closest('[data-lang]')) setTimeout(renderTours, 0);
  });

  /* ── Scroll Reveal ───────────────────────────── */
  function initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /* Re-run reveal observer on panel switch */
  function refreshReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal:not(.vis)').forEach(el => observer.observe(el));
  }

  /* ── Init ────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    buildTabs();
    buildPanels();
    buildComparisonTable();
    buildCalendar();
    setTimeout(initReveal, 200);
    setTimeout(initMaps, 400);
    fetchWeather();

    // Re-init reveal + maps when tab switches
    const tabs = document.getElementById('tabsInner');
    if (tabs) {
      tabs.addEventListener('click', () => {
        setTimeout(refreshReveal, 100);
        setTimeout(initMaps, 200);
      });
    }
  });

})();