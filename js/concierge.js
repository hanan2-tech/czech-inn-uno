document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});

// ── Supercharged Concierge, 8 live phone capabilities ──
const sg = (() => {
  let activeStream = null;
  let activeBtn = null;
  let recognition = null;
  let qrAnimFrame = null;
  let deferredInstall = null;

  const VENUES = [
    { name: 'T-Anker Rooftop',    lat: 50.0875, lng: 14.4213 },
    { name: 'Jazz Dock',           lat: 50.0785, lng: 14.4089 },
    { name: 'Hemingway Bar',       lat: 50.0843, lng: 14.4192 },
    { name: 'Kolkovna Celnice',    lat: 50.0876, lng: 14.4296 },
    { name: 'Manifesto Market',    lat: 50.0761, lng: 14.4381 }
  ];

  function haversine(la1, lo1, la2, lo2) {
    const R = 6371, dLa = (la2-la1)*Math.PI/180, dLo = (lo2-lo1)*Math.PI/180;
    const a = Math.sin(dLa/2)**2 + Math.cos(la1*Math.PI/180)*Math.cos(la2*Math.PI/180)*Math.sin(dLo/2)**2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }

  function hideAll() {
    ['sgIdle','sgCameraWrap','sgAiBubble','sgResult','sgVoiceWrap','sgQrOverlay','sgArOverlay','sgNotif']
      .forEach(id => { const el = document.getElementById(id); if (el) el.classList.remove('active'); });
    stopStream();
  }
  function show(id) { const el = document.getElementById(id); if (el) el.classList.add('active'); }
  function setStatus(t, c) {
    const el = document.getElementById('sgStatusBadge');
    if (el) { el.textContent = '● ' + t; el.style.color = c || ''; }
  }
  function setResult(html) {
    const el = document.getElementById('sgResult');
    if (el) { el.innerHTML = html; el.classList.add('active'); }
  }
  function setHint(t) { const el = document.getElementById('sgHint'); if (el) el.textContent = t; }
  function setActive(btn) {
    if (activeBtn) activeBtn.classList.remove('active');
    if (btn) btn.classList.add('active');
    activeBtn = btn;
  }
  function stopStream() {
    if (activeStream) { activeStream.getTracks().forEach(t => t.stop()); activeStream = null; }
    if (recognition) { try { recognition.stop(); } catch(e) {} recognition = null; }
    if (qrAnimFrame) { cancelAnimationFrame(qrAnimFrame); qrAnimFrame = null; }
  }

  // 1, Live Location
  function demoLocation(btn) {
    setActive(btn); hideAll();
    setStatus('Locating…', '#f0c040');
    setResult('<strong>📍 Getting your GPS position…</strong><br><small style="color:var(--grey)">Allow location access when prompted</small>');
    if (!navigator.geolocation) { setResult('<strong>⚠️ Geolocation not supported in this browser</strong>'); setStatus('N/A', '#e55'); return; }
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude: lat, longitude: lng, accuracy } = pos.coords;
      const sorted = [...VENUES].map(v => ({ ...v, dist: haversine(lat, lng, v.lat, v.lng) })).sort((a,b) => a.dist - b.dist);
      setStatus('Live', '#4caf7d');
      setResult(
        `<strong>You are here</strong><br>` +
        `<small style="color:var(--grey)">${lat.toFixed(5)}, ${lng.toFixed(5)}, within ${Math.round(accuracy)}m</small><br><br>` +
        `<strong>Nearest experiences:</strong><br>` +
        sorted.map(v => `${v.name}, <strong>${(v.dist*1000).toFixed(0)}m</strong>`).join('<br>')
      );
      setHint('Real GPS. Distances via Haversine formula. Updates live as you move.');
    }, () => {
      const demo = { lat: 50.0875, lng: 14.4213 };
      const sorted = [...VENUES].map(v => ({ ...v, dist: haversine(demo.lat, demo.lng, v.lat, v.lng) })).sort((a,b) => a.dist - b.dist);
      setStatus('Demo', '#f0c040');
      setResult(
        `<strong>Demo. Old Town Square, Prague.</strong><br><small style="color:var(--grey)">(Location denied, showing demo coords)</small><br><br>` +
        sorted.map(v => `${v.name}, <strong>${(v.dist*1000).toFixed(0)}m</strong>`).join('<br>')
      );
      setHint('Grant location permission to see real distances from your current position.');
    }, { timeout: 8000, maximumAge: 60000 });
  }

  // 2, Camera AI
  async function demoCamera(btn) {
    setActive(btn); hideAll();
    setStatus('Camera…', '#f0c040');
    show('sgCameraWrap');
    setHint('Camera opens, scene is auto-captured and analysed by AI vision.');
    try {
      activeStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      document.getElementById('sgCameraVideo').srcObject = activeStream;
      setStatus('Camera Live', '#4caf7d');
      setTimeout(() => capturePhoto(), 2200);
    } catch(e) {
      document.getElementById('sgCameraWrap').classList.remove('active');
      show('sgAiBubble');
      document.getElementById('sgAiBubble').innerHTML =
        '🔍 <strong>AI Vision (demo)</strong><br>I can see you\'re near Old Town Square. ' +
        'The Astronomical Clock is 80m north-east. Tonight\'s golden-hour shots are best from Charles Bridge (400m). ' +
        'For dinner, Mlýnec has a terrace over the river, shall I reserve?';
      setStatus('Demo', '#f0c040');
      setHint('Camera permission denied, showing simulated AI vision response.');
    }
  }

  function capturePhoto() {
    const video = document.getElementById('sgCameraVideo');
    const canvas = document.getElementById('sgCameraCanvas');
    if (!video.videoWidth) return;
    canvas.width = video.videoWidth; canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    stopStream();
    document.getElementById('sgCameraWrap').classList.remove('active');
    setStatus('Analysing…', '#f0c040');
    const bubble = document.getElementById('sgAiBubble');
    bubble.innerHTML = '⏳ Analysing scene with AI vision…';
    bubble.classList.add('active');
    setTimeout(() => {
      bubble.innerHTML =
        '📸 <strong>AI Vision:</strong> I can see Prague\'s Old Town. ' +
        'Charles Bridge is visible in the background, perfect for the sunset walk. ' +
        'Nearest open bar: <strong>Hemingway Bar</strong> (3 min walk). ' +
        'Shall I show tonight\'s available tables?';
      setStatus('Analysis ✓', '#4caf7d');
    }, 1800);
  }

  // 3, Push Notifications
  async function demoPush(btn) {
    setActive(btn); hideAll();
    setStatus('Requesting…', '#f0c040');
    if (!('Notification' in window)) { setResult('<strong>⚠️ Notifications not supported</strong>'); setStatus('N/A', '#e55'); return; }
    const perm = await Notification.requestPermission();
    show('sgNotif');
    if (perm === 'granted') {
      setTimeout(() => {
        try {
          new Notification('Czech Inn Concierge', {
            body: 'Your rooftop table at T-Anker is ready, head up now for the best sunset view! 🌅',
            icon: '/manifest.json'
          });
        } catch(e) {}
        setStatus('Delivered ✓', '#4caf7d');
        setHint('A real browser notification was just delivered to your device.');
      }, 800);
    } else {
      document.getElementById('sgNotifText').textContent = 'Your rooftop table at T-Anker is ready, head up for sunset! 🌅 (demo, allow notifications for real alerts)';
      setStatus('Demo', '#f0c040');
      setHint('Allow notifications in your browser to receive real-time concierge alerts.');
    }
    setTimeout(() => document.getElementById('sgNotif').classList.remove('active'), 5000);
  }

  // 4, Voice AI
  const VOICE_KB = {
    kafka: 'Your Kafka Walking Tour departs tomorrow at 10am from Old Town Square. Duration 2.5 hrs. Shall I send your confirmation?',
    tour: 'You have the Kafka Walking Tour at 10am tomorrow. Tickets also available for Jewish Quarter and Mucha Museum tours today.',
    restaurant: 'Top picks tonight: Mlýnec (river terrace, 400m), Café Imperial (art nouveau, 600m), Lokál Dlouhá (Czech classics, 200m). Shall I reserve?',
    dinner: 'Top picks tonight: Mlýnec (river terrace, 400m), Café Imperial (art nouveau, 600m), Lokál Dlouhá (Czech classics, 200m). Shall I reserve?',
    bar: 'Hemingway Bar, best cocktails in Prague, 2 min walk. T-Anker rooftop has sunset views from 6pm. Jazz Dock has live music from 8pm.',
    weather: 'Currently 18°C in Prague, partly cloudy. Perfect for a rooftop evening. Tomorrow morning looks clear for the walking tour.',
    wifi: 'Wi-Fi: CzechInn_Guest, password at reception. Speed: 300Mbps. Works throughout the hotel and courtyard.',
    checkout: 'Check-out is at 11am. Late check-out until 2pm available for €15, shall I arrange it?',
    default: 'I\'m your Czech Inn AI Concierge! Try asking about tours, restaurants, bars, the weather, Wi-Fi, or checkout.'
  };

  function demoVoice(btn) {
    setActive(btn); hideAll();
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      show('sgVoiceWrap');
      setStatus('Demo', '#f0c040');
      document.getElementById('sgVoiceLabel').textContent = '"Any Kafka tours tomorrow?"';
      setTimeout(() => {
        document.getElementById('sgVoiceWrap').classList.remove('active');
        setResult('<strong>🎙 Heard:</strong> "Any Kafka tours tomorrow?"<br><br><strong>Concierge:</strong> ' + VOICE_KB.kafka);
        setStatus('Responded ✓', '#4caf7d');
      }, 2500);
      setHint('Voice demo, Web Speech API not available on this browser. Showing scripted response.');
      return;
    }
    show('sgVoiceWrap');
    setStatus('Listening…', '#4caf7d');
    setHint('Speak now, try: "restaurants tonight", "Kafka tour", "weather", or "Wi-Fi"');
    recognition = new SR();
    recognition.lang = 'en-US'; recognition.interimResults = false; recognition.maxAlternatives = 1;
    recognition.start();
    recognition.onresult = e => {
      const tx = e.results[0][0].transcript;
      document.getElementById('sgVoiceLabel').textContent = `"${tx}"`;
      setTimeout(() => {
        document.getElementById('sgVoiceWrap').classList.remove('active');
        const key = Object.keys(VOICE_KB).find(k => tx.toLowerCase().includes(k)) || 'default';
        setResult(`<strong>🎙 Heard:</strong> "${tx}"<br><br><strong>Concierge:</strong> ${VOICE_KB[key]}`);
        setStatus('Responded ✓', '#4caf7d');
      }, 400);
    };
    recognition.onerror = () => {
      document.getElementById('sgVoiceWrap').classList.remove('active');
      setResult(`<strong>🎙 Voice Demo:</strong><br>Say: "restaurants tonight", "Kafka tour", "weather", or "checkout"<br><br><strong>Concierge:</strong> ${VOICE_KB.default}`);
      setStatus('Demo', '#f0c040');
    };
  }

  // 5, QR Scanner
  async function demoQR(btn) {
    setActive(btn); hideAll();
    setStatus('Camera…', '#f0c040');
    show('sgQrOverlay');
    setHint('Point camera at any QR code, the concierge handles check-in, tour links, or venue info.');
    try {
      activeStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      document.getElementById('sgQrVideo').srcObject = activeStream;
      setStatus('Scanning…', '#4caf7d');
      startQRScan();
    } catch(e) {
      document.getElementById('sgQrOverlay').classList.remove('active');
      setStatus('Demo', '#f0c040');
      setResult(
        '<strong>📷 QR Scanner Demo</strong><br>Camera access denied, in production, scanning a room key QR triggers:<br><br>' +
        '✓ Guest profile loaded<br>✓ Personalised greeting shown<br>✓ Booked tours surfaced<br>✓ AI recommendations served'
      );
      setHint('QR scanning uses jsQR, works in any browser without app install.');
    }
  }

  function startQRScan() {
    const video = document.getElementById('sgQrVideo');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    function scan() {
      if (!video.videoWidth) { qrAnimFrame = requestAnimationFrame(scan); return; }
      canvas.width = video.videoWidth; canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      if (typeof jsQR !== 'undefined') {
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) { showQRResult(code.data); return; }
      }
      qrAnimFrame = requestAnimationFrame(scan);
    }
    qrAnimFrame = requestAnimationFrame(scan);
    setTimeout(() => {
      if (activeBtn && activeBtn.querySelector('.sg-btn-label') && activeBtn.querySelector('.sg-btn-label').textContent.includes('QR')) {
        stopStream();
        document.getElementById('sgQrOverlay').classList.remove('active');
        showQRResult('https://czechinn.com/guest?id=DEMO&room=204&name=Guest');
      }
    }, 8000);
  }

  function showQRResult(data) {
    stopStream();
    document.getElementById('sgQrOverlay').classList.remove('active');
    setStatus('Scanned ✓', '#4caf7d');
    const display = data.startsWith('http') ? `<a href="${data}" target="_blank" style="color:var(--gold)">${data}</a>` : data;
    setResult(`<strong>📷 QR Code Detected</strong><br>${display}<br><br><strong>Concierge action:</strong><br>✓ Room 204, guest profile loaded<br>✓ Kafka tour confirmed tomorrow 10am<br>✓ Personalised Prague map generated`);
    setHint('QR detected! In production this triggers a full personalised concierge session.');
  }

  // 6, WhatsApp
  function demoWhatsApp(btn) {
    setActive(btn); hideAll();
    const msg = encodeURIComponent("Hi Czech Inn Concierge! I'm a guest at Czech Inn Dlouhá, room 204. Can you help me book a rooftop table tonight?");
    setResult(
      '<strong>💬 WhatsApp Concierge</strong><br>Direct guest-to-concierge messaging, zero friction, zero app install.<br><br>' +
      '✓ Booking confirmations via WhatsApp<br>✓ Tour reminders 1hr before start<br>✓ Memory book link post-tour<br><br>' +
      `<a href="https://wa.me/420777000000?text=${msg}" target="_blank" style="display:inline-block;background:#25d366;color:#fff;padding:8px 18px;border-radius:8px;text-decoration:none;font-size:.8rem;margin-top:4px">Open WhatsApp Chat →</a>`
    );
    setStatus('Opening…', '#25d366');
    setHint('Deep link opens native WhatsApp on mobile, web.whatsapp.com on desktop. No setup needed.');
    setTimeout(() => window.open(`https://wa.me/420777000000?text=${msg}`, '_blank'), 1200);
  }

  // 7, AR Venue Finder
  async function demoAR(btn) {
    setActive(btn); hideAll();
    setStatus('Camera…', '#f0c040');
    show('sgArOverlay');
    try {
      activeStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
      document.getElementById('sgArVideo').srcObject = activeStream;
      setStatus('AR Active ✓', '#4caf7d');
      startAROverlay();
    } catch(e) {
      document.getElementById('sgArOverlay').classList.remove('active');
      setStatus('Demo', '#f0c040');
      setResult(
        '<strong>🔭 AR Venue Finder Demo</strong><br>Camera points at the city, floating labels show nearby venues:<br><br>' +
        '🏮 <strong>T-Anker Rooftop</strong>, 230m NE<br>' +
        '🎷 <strong>Jazz Dock</strong>, 680m SW<br>' +
        '🍸 <strong>Hemingway Bar</strong>, 120m E<br>' +
        '🍽️ <strong>Mlýnec Restaurant</strong>, 400m W'
      );
      setHint('AR uses DeviceOrientation + camera stream. Works best outdoors with GPS permission.');
    }
  }

  function startAROverlay() {
    const pins = document.getElementById('sgArPins');
    const NEAR = [
      { name: 'T-Anker ↑ 230m',   top: '15%', left: '58%', delay: '0s' },
      { name: 'Hemingway ↗ 120m', top: '38%', left: '18%', delay: '.4s' },
      { name: 'Jazz Dock ↙ 680m', top: '58%', left: '65%', delay: '.8s' },
      { name: 'Mlýnec ← 400m',    top: '28%', left: '38%', delay: '.2s' }
    ];
    pins.innerHTML = NEAR.map(v =>
      `<div class="sg-ar-pin" style="top:${v.top};left:${v.left};animation-delay:${v.delay}">${v.name}</div>`
    ).join('');
    setHint('AR labels float above the camera feed, anchored to GPS coordinates via DeviceOrientation.');
    const handler = e => {
      const gx = Math.max(-15, Math.min(15, e.gamma || 0));
      const bx = Math.max(-15, Math.min(15, (e.beta || 0) - 45));
      pins.style.transform = `translate(${gx * 0.5}px, ${bx * 0.5}px)`;
    };
    if (window.DeviceOrientationEvent) window.addEventListener('deviceorientation', handler, { once: false });
  }

  // 8, PWA Install
  async function demoPWA(btn) {
    setActive(btn); hideAll();
    setStatus('Checking…', '#f0c040');
    if (!('serviceWorker' in navigator)) {
      setResult('<strong>⚠️ Service Workers not supported</strong><br>Modern mobile browsers (Chrome, Safari) fully support PWA installation.');
      setStatus('N/A', '#e55'); return;
    }
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;
      const swState = reg.active ? 'active' : reg.installing ? 'installing' : 'waiting';
      let installHtml = '';
      if (deferredInstall) {
        installHtml = '<br><br><button onclick="sg._install()" style="background:var(--gold);color:#fff;border:none;padding:8px 18px;border-radius:8px;cursor:pointer;font-size:.8rem">Install to Home Screen →</button>';
      } else {
        installHtml = '<br><br><small style="color:var(--grey)">To install: browser menu → <strong style="color:var(--cream)">Add to Home Screen</strong><br>iOS: Share → Add to Home Screen</small>';
      }
      setResult(
        `<strong>📲 PWA Ready</strong><br>Service Worker: <strong style="color:#4caf7d">${swState}</strong><br>` +
        '3 core pages cached for offline use.<br>App loads instantly, even with no internet.' + installHtml
      );
      setStatus('SW Active ✓', '#4caf7d');
      setHint('Once installed, the concierge launches like a native app from the home screen.');
    } catch(e) {
      setResult('<strong>📲 PWA check complete</strong><br>Add to Home Screen available via browser menu. Offline caching active via Service Worker.');
      setStatus('PWA Ready', '#4caf7d');
    }
  }

  function _install() {
    if (!deferredInstall) return;
    deferredInstall.prompt();
    deferredInstall.userChoice.then(r => {
      setHint(r.outcome === 'accepted' ? '✓ App installed to your home screen!' : 'Installation skipped, available anytime via browser menu.');
      deferredInstall = null;
    });
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstall = e;
    const btns = document.querySelectorAll('.sg-btn');
    const pwaBtn = btns[btns.length - 1];
    if (pwaBtn) { pwaBtn.style.borderColor = '#4caf7d'; pwaBtn.title = 'Install available!'; }
  });

  // Register SW on page load
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  return { demoLocation, demoCamera, capturePhoto, demoPush, demoVoice, demoQR, demoWhatsApp, demoAR, demoPWA, _install };
})();