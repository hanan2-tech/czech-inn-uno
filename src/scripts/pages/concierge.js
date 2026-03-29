document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  initAiChat();
  initPmsWidget();
  initEmailPreview();
  initPassWidget();
  initHubTabs();
  injectHubCSS();
  initStaticChatEnhancement();

  /* ── Enhancements 1-24 ── */
  initPhoneTilt();
  initTypewriter();
  initParticles();
  initCountUpStats();
  initJourneyAnimations();
  initStaticAutoPlay();
  initRippleEffects();
  initLightbox();
  initScrollProgress();
  initSocialProofStrip();
});

/* ─────────────────────────────────────────────────────────
   INJECT HUB CSS
   ───────────────────────────────────────────────────────── */
function injectHubCSS() {
  const s = document.createElement('style');
  s.textContent = `
    .dc-hub-section{background:var(--bg);padding:80px 20px;}
    .dc-hub-inner{max-width:900px;margin:0 auto;}
    .dc-hub-tabs{display:flex;gap:4px;margin-bottom:28px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:4px;flex-wrap:wrap;}
    .dc-hub-tab{flex:1;padding:10px 16px;border:none;border-radius:9px;background:transparent;font-family:var(--fb);font-size:.82rem;font-weight:500;color:var(--text-l);cursor:pointer;transition:background .2s,color .2s;white-space:nowrap;}
    .dc-hub-tab.active{background:var(--dark);color:var(--cream);}
    .dc-hub-panel{display:none;opacity:0;}
    .dc-hub-panel.active{display:block;animation:panelIn .3s ease both;}
    /* AI Chat */
    .dc-live-chat{background:var(--dark);border-radius:16px;overflow:hidden;max-width:560px;margin:0 auto;}
    .dc-live-chat-bar{padding:14px 18px;background:rgba(0,0,0,.3);display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,.07);}
    .dc-live-chat-avatar{width:32px;height:32px;border-radius:50%;background:rgba(156,123,60,.3);border:1px solid var(--gold);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
    .dc-live-chat-name{font-size:.82rem;font-weight:600;color:var(--cream);}
    .dc-live-chat-status{font-size:.68rem;color:var(--gold-light);display:flex;align-items:center;gap:5px;}
    .dc-live-dot{width:6px;height:6px;border-radius:50%;background:#4caf7d;animation:dotPulse 1.8s infinite;}
    .dc-live-messages{padding:18px;min-height:200px;max-height:320px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;scrollbar-width:thin;scrollbar-color:rgba(255,255,255,.1) transparent;}
    .dc-live-msg{max-width:82%;padding:10px 14px;border-radius:14px;font-size:.82rem;line-height:1.6;}
    .dc-live-msg-bot{background:rgba(255,255,255,.07);color:var(--cream);border-bottom-left-radius:4px;align-self:flex-start;}
    .dc-live-msg-user{background:var(--gold);color:#fff;border-bottom-right-radius:4px;align-self:flex-end;}
    .dc-live-msg-thinking{display:flex;gap:4px;align-items:center;padding:10px 14px;background:rgba(255,255,255,.07);border-radius:14px;border-bottom-left-radius:4px;align-self:flex-start;}
    .dc-live-msg-thinking span{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.4);animation:dotPulse 1.2s infinite;}
    .dc-live-msg-thinking span:nth-child(2){animation-delay:.2s;}
    .dc-live-msg-thinking span:nth-child(3){animation-delay:.4s;}
    .dc-live-input-row{padding:12px 18px;border-top:1px solid rgba(255,255,255,.07);display:flex;gap:8px;}
    .dc-live-input{flex:1;padding:10px 14px;border:1px solid rgba(255,255,255,.15);border-radius:10px;background:rgba(255,255,255,.07);color:var(--cream);font-family:var(--fb);font-size:.82rem;outline:none;}
    .dc-live-input::placeholder{color:rgba(255,255,255,.3);}
    .dc-live-input:focus{border-color:var(--gold);}
    .dc-live-send{padding:10px 16px;background:var(--gold);border:none;border-radius:10px;color:#fff;font-size:.88rem;cursor:pointer;transition:background .2s;}
    .dc-live-send:hover{background:var(--gold-light);}
    .dc-live-chips{padding:10px 18px 14px;display:flex;gap:6px;flex-wrap:wrap;}
    .dc-live-chip{padding:5px 12px;border:1px solid rgba(156,123,60,.35);border-radius:20px;background:transparent;color:var(--tan);font-family:var(--fb);font-size:.72rem;cursor:pointer;transition:border-color .2s,color .2s,background .2s;}
    .dc-live-chip:hover{border-color:var(--gold);color:var(--gold-light);background:rgba(156,123,60,.07);}
    @media(max-width:480px){.dc-live-chips{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:12px;scrollbar-width:none;}.dc-live-chips::-webkit-scrollbar{display:none;}.dc-live-chip{flex-shrink:0;}}
    /* PMS */
    .dc-pms-wrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start;}
    .dc-pms-label{font-size:.68rem;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:600;margin-bottom:10px;}
    .dc-pms-input{padding:10px 14px;border:1.5px solid var(--border);border-radius:8px;font-family:var(--fb);font-size:.88rem;color:var(--text);background:var(--surface);outline:none;width:140px;transition:border-color .2s;}
    .dc-pms-input:focus{border-color:var(--gold);}
    .dc-pms-status{font-size:.78rem;color:var(--text-l);min-height:20px;}
    .dc-pms-profile-card{background:var(--dark);border-radius:14px;padding:20px;color:var(--cream);}
    .dc-pms-profile-name{font-family:var(--fd);font-size:1.1rem;font-weight:700;color:var(--cream);margin-bottom:4px;}
    .dc-pms-profile-sub{font-size:.76rem;color:var(--tan);margin-bottom:16px;}
    .dc-pms-profile-row{display:flex;justify-content:space-between;font-size:.78rem;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.07);}
    .dc-pms-profile-row span:first-child{color:var(--tan);}
    .dc-pms-pref{margin-top:12px;font-size:.72rem;color:var(--gold-light);background:rgba(156,123,60,.12);border-radius:8px;padding:8px 10px;line-height:1.6;}
    @media(max-width:580px){.dc-pms-wrap{grid-template-columns:1fr;}}
    /* Email Preview */
    .dc-email-wrap{max-width:560px;margin:0 auto;}
    .dc-email-controls{margin-bottom:20px;}
    .dc-email-preview{border-radius:12px;overflow:hidden;border:1px solid var(--border);}
    .dc-email-frame{background:#fff;font-family:sans-serif;font-size:13px;line-height:1.7;color:#222;}
    .dc-email-topbar{background:#001A35;padding:14px 20px;color:#E8EDF4;font-size:11px;}
    .dc-email-hero{background:linear-gradient(135deg,#001A35,#071E38);padding:32px 24px;text-align:center;}
    .dc-email-logo{font-size:11px;letter-spacing:3px;color:rgba(255,255,255,.5);margin-bottom:8px;}
    .dc-email-tagline{font-size:20px;font-weight:700;color:#E8EDF4;margin-bottom:6px;}
    .dc-email-subtag{font-size:12px;color:#AA9A77;}
    .dc-email-body{padding:24px;}
    .dc-email-greeting{font-size:14px;font-weight:600;color:#001A35;margin-bottom:10px;}
    .dc-email-para{font-size:12px;color:#555;margin-bottom:16px;}
    .dc-email-section-title{font-size:10px;text-transform:uppercase;letter-spacing:2px;color:#9C7B3C;font-weight:600;margin-bottom:10px;}
    .dc-email-tour-card{display:flex;gap:12px;padding:12px;background:#F5F7FA;border-radius:8px;margin-bottom:8px;align-items:center;}
    .dc-email-tour-img{width:48px;height:36px;border-radius:5px;object-fit:cover;flex-shrink:0;}
    .dc-email-tour-name{font-size:12px;font-weight:600;color:#001A35;}
    .dc-email-tour-meta{font-size:11px;color:#777;}
    .dc-email-cta{display:block;text-align:center;background:linear-gradient(110deg,#9C7B3C,#C9A84C);color:#fff;padding:14px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;margin:20px 0;}
    .dc-email-footer{background:#F5F7FA;padding:16px 24px;text-align:center;font-size:10px;color:#888;border-top:1px solid #eee;}
    /* Prague Pass */
    .dc-pass-wrap{display:grid;grid-template-columns:auto 1fr;gap:28px;align-items:start;}
    .dc-pass-card{width:280px;height:160px;border-radius:16px;background:linear-gradient(135deg,#9C7B3C 0%,#C9A84C 40%,#E0C070 60%,#C9A84C 80%,#9C7B3C 100%);padding:18px 22px;position:relative;overflow:hidden;box-shadow:0 12px 40px rgba(156,123,60,.4);flex-shrink:0;}
    .dc-pass-card::before{content:'';position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:rgba(255,255,255,.08);}
    .dc-pass-card-logo{font-size:.55rem;letter-spacing:3px;color:rgba(255,255,255,.7);text-transform:uppercase;margin-bottom:4px;}
    .dc-pass-card-title{font-size:1.1rem;font-weight:700;color:#fff;font-family:'Montserrat',sans-serif;margin-bottom:12px;}
    .dc-pass-balance-label{font-size:.55rem;text-transform:uppercase;letter-spacing:1.5px;color:rgba(255,255,255,.65);margin-bottom:2px;}
    .dc-pass-balance{font-size:1.6rem;font-weight:800;color:#fff;font-family:'Montserrat',sans-serif;margin-bottom:8px;}
    .dc-pass-guest{font-size:.72rem;color:rgba(255,255,255,.8);font-weight:600;}
    .dc-pass-valid{font-size:.58rem;color:rgba(255,255,255,.55);margin-top:3px;}
    .dc-pass-chip{position:absolute;bottom:16px;right:18px;width:28px;height:20px;border-radius:4px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.3);}
    .dc-pass-partners-title{font-size:.68rem;text-transform:uppercase;letter-spacing:2px;color:var(--gold);font-weight:600;margin-bottom:12px;}
    .dc-pass-partner-grid{display:flex;flex-direction:column;gap:8px;}
    .dc-pass-partner{display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--surface);border:1px solid var(--border);border-radius:10px;}
    .dc-pass-partner-icon{font-size:1.3rem;flex-shrink:0;}
    .dc-pass-partner-info{flex:1;}
    .dc-pass-partner-name{font-size:.82rem;font-weight:600;color:var(--text);}
    .dc-pass-partner-meta{font-size:.72rem;color:var(--text-l);}
    .dc-pass-partner-badge{padding:3px 9px;border-radius:20px;background:rgba(156,123,60,.12);color:var(--gold);font-size:.65rem;font-weight:600;border:1px solid rgba(156,123,60,.25);white-space:nowrap;}
    @media(max-width:640px){.dc-pass-wrap{grid-template-columns:1fr;}.dc-pass-card{width:100%;}}
  `;
  document.head.appendChild(s);
}

/* ─────────────────────────────────────────────────────────
   HUB TABS
   ───────────────────────────────────────────────────────── */
function initHubTabs() {
  const tabs   = document.querySelectorAll('.dc-hub-tab');
  const panels = document.querySelectorAll('.dc-hub-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => { p.classList.remove('active'); p.style.animation = 'none'; });
      tab.classList.add('active');
      const panel = document.getElementById('dc-tab-' + tab.dataset.tab);
      if (panel) {
        panel.classList.add('active');
        panel.style.animation = '';
        // Trigger reflow to restart animation
        void panel.offsetWidth;
        panel.style.animation = 'panelIn .3s ease both';
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────
   AI CHAT (Feature 1 — streaming simulation)
   ───────────────────────────────────────────────────────── */
const AI_TOPICS = {
  kafka: [
    "The Kafka Walking Tour is one of our most beloved experiences. You'll trace Franz Kafka's footsteps from his birthplace in Old Town Square through the narrow lanes where he wrote, suffered, and dreamed — all the way to Golden Lane at Prague Castle. Your licensed literary guide brings each stop to life with readings and stories. Duration: 5 hours. Price: €59/person. Shall I check availability for tomorrow?",
    "Kafka lived and wrote in Prague his entire life, moving between at least 5 apartments in the same Old Town neighbourhood. The tour visits all of them, plus Café Louvre where he met his dearest friend Max Brod — who saved all of Kafka's manuscripts after his death. A cup of Viennese coffee is included at the café stop.",
  ],
  mucha: [
    "Mucha's Art Nouveau tour is a visual feast — stained glass, golden details, floral motifs, and the extraordinary Slav Epic at the Mucha Museum. Your guide connects Alphonse Mucha's work to the broader Art Nouveau movement, from Paris to Prague. Perfect for art lovers, photographers, and anyone who wants to see Prague's most beautiful interiors. Duration: 4.5 hours. Price: €54.",
    "The tour covers Municipal House (Obecní dům), the Mucha Museum, St. Vitus Cathedral's Mucha window, and several hidden Art Nouveau doorways most visitors walk past. Your guide carries an art history degree and has been running this tour for 8 years.",
  ],
  jewish: [
    "The Jewish Quarter tour is one of the most historically profound experiences in Europe. Six synagogues, the Old Jewish Cemetery, and the stories of a community that survived persecution for 900 years. Your guide is deeply knowledgeable — many have personal family connections to the neighbourhood. Duration: 4 hours. Price: €49.",
    "Josefov, Prague's historic Jewish Quarter, contains the largest collection of Jewish historical monuments outside Israel. The Old Jewish Cemetery holds over 100,000 souls in just 12 layers of graves. Your Prague Pass gives you 15% off the synagogue entry tickets.",
  ],
  kids: [
    "Prague for Families is a joyful, engaging tour designed for children aged 4-14 and their parents. No long lectures — just interactive storytelling, treasure hunt elements, and stops at the best child-friendly spots in Prague. Duration: 3.5 hours. Price: €44/adult, €22/child.",
    "The family tour visits the Astronomical Clock, Charles Bridge with its statues and legends, the whispering gallery in St. Nicholas Church, and a puppet theatre visit. Children leave with a hand-drawn treasure map of Prague made during the tour.",
  ],
  weather: [
    "Let me check Prague's current weather for you… Right now it's 14°C with light cloud cover — ideal for walking tours. The weekend looks sunny, with temperatures reaching 18°C. Perfect for the outdoor Mucha and Kids tours. Would you like me to recommend a tour based on the forecast?",
    "Prague weather in spring can change quickly, but typically you'll have 12-16°C in April and 16-20°C in May. All our tours run rain or shine — guides carry umbrellas and know the best covered spots for every stop.",
  ],
  food: [
    "Prague's food scene is extraordinary. For a proper Czech experience, I'd recommend Lokál Dlouhá — authentic Czech cuisine, fresh Pilsner Urquell, and lively atmosphere. For something more refined, Mlýnec has a riverside terrace and excellent modern Czech cuisine. Café Louvre on the Kafka tour route is perfect for coffee and Viennese pastries.",
    "Czech cuisine is often underrated. Try svíčková (slow-braised beef in cream sauce with bread dumplings), duck confit with red cabbage, or trdelník from a good bakery (not the tourist traps). The Kafka tour includes coffee and pastries at the historic Café Louvre — that alone is worth the price.",
  ],
  nightlife: [
    "Prague after dark is sensational. For the best views: T-Anker rooftop bar above Palladium — open until 1am, no reservation needed before 8pm. For cocktails: Hemingway Bar on Karoliny Světlé — consistently ranked one of the best bars in Europe. For live music: Jazz Dock on the riverbank, sessions from 9pm.",
    "Prague's nightlife has several distinct moods. Žižkov is the local neighbourhood bar scene. Vinohrady is cocktail bars and wine bars. The Old Town has the tourist-facing rooftop spots. And Holešovice is where the underground clubs and live music venues are. What's your vibe for the evening?",
  ],
  spa: [
    "Our Beer and Wine Spa extra is one of the most popular experiences for couples and groups. Private wooden tubs filled with warm beer-infused mineral water, an open beer tap, and full-body massage. 90 minutes, €85/person, €145/couple. Your Prague Pass gives 20% off. Shall I check availability?",
    "The Colorfactory Spa within Czech Inn Hotels is available to all guests. Treatments from 30 minutes. Our concierge can book you in between tours. Popular choices: the hot stone massage and the Prague Evening treatment with Czech herbal oils.",
  ],
  transport: [
    "From the airport, your private transfer is the most comfortable option — 30 minutes to the hotel, flat rate €35. We can arrange it to meet you at arrivals. Alternatively, the Airport Express bus runs every 20 minutes to Masarykovo nádraží (city centre) for €2.50. Metro Line A is also available from the terminal.",
    "Within Prague, the public transport system is excellent — tram, metro, and bus. A 24-hour pass is €5.60 and covers everything. For your Kafka tour, you'll ride the historic tram on Line 22 through Malá Strana — one of the most scenic stretches of tram track in Europe.",
  ],
  booking: [
    "To book a tour, you can click the 'Book This Tour' button on any tour card, or I can help you right here. Which tour interests you? Just tell me the date and number of guests and I'll open the booking form for you.",
    "Booking takes about 60 seconds. You'll choose a date from our live availability calendar, select the number of guests, enter your details, and receive instant confirmation with a QR code. No payment is taken online — you pay at checkout with your hotel bill.",
  ],
  pass: [
    "Your Prague Pass is included with your stay. It gives you discounts at 60+ partners across Prague: 10% at Café Louvre, 15% on synagogue entry, 20% off Beer Spa treatments, priority airport transfers, and discounts at Fashion Arena. You can see your full balance and nearby partner locations in the Prague Pass tab above.",
    "The Prague Pass balance refreshes each night of your stay. For a 3-night stay, you start with 1,200 CZK in partner credits. The balance can be used across any of our 60 partners and rolls into our Gold Label programme if you return next year.",
  ],
  general: [
    "I'm your Czech Inn AI Concierge! I can help with tour bookings, restaurant recommendations, Prague nightlife, weather, transport, spa bookings, and anything else about your stay. What would you like to know?",
    "Czech Inn Hotels has 28 properties across Prague, so wherever you're staying, you're within walking distance of the best of the city. Our platform connects your room to 4 signature tours, 26 curated extras, and the full Prague experience. What can I help you with today?",
    "Ask me anything — I know Prague deeply. Kafka's birthplace, where to watch the sunset, which restaurant locals actually love, the best time to visit the castle. I'm here to make your stay extraordinary.",
  ]
};

function detectTopic(text) {
  const t = text.toLowerCase();
  if (t.includes('kafka') || t.includes('literature') || t.includes('literary')) return 'kafka';
  if (t.includes('mucha') || t.includes('art nouveau') || t.includes('art ')) return 'mucha';
  if (t.includes('jewish') || t.includes('synagogue') || t.includes('josefov')) return 'jewish';
  if (t.includes('kid') || t.includes('child') || t.includes('famil')) return 'kids';
  if (t.includes('weather') || t.includes('rain') || t.includes('temperature') || t.includes('forecast')) return 'weather';
  if (t.includes('food') || t.includes('restaurant') || t.includes('dinner') || t.includes('eat') || t.includes('café') || t.includes('cafe')) return 'food';
  if (t.includes('night') || t.includes('bar') || t.includes('club') || t.includes('music') || t.includes('dark')) return 'nightlife';
  if (t.includes('spa') || t.includes('massage') || t.includes('relax') || t.includes('beer')) return 'spa';
  if (t.includes('transport') || t.includes('metro') || t.includes('tram') || t.includes('airport') || t.includes('transfer')) return 'transport';
  if (t.includes('book') || t.includes('reserv') || t.includes('ticket')) return 'booking';
  if (t.includes('pass') || t.includes('discount') || t.includes('card')) return 'pass';
  return 'general';
}

function streamText(el, text, onDone) {
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    const container = document.getElementById('dcLiveMessages');
    if (container) container.scrollTop = container.scrollHeight;
    if (i >= text.length) {
      clearInterval(interval);
      if (onDone) onDone();
    }
  }, 16);
}

function initAiChat() {
  const input   = document.getElementById('dcLiveInput');
  const sendBtn = document.getElementById('dcLiveSend');
  const msgs    = document.getElementById('dcLiveMessages');
  if (!input || !msgs) return;

  function sendMsg(text) {
    if (!text.trim()) return;
    input.value = '';

    // User message
    const userEl = document.createElement('div');
    userEl.className = 'dc-live-msg dc-live-msg-user';
    userEl.textContent = text;
    msgs.appendChild(userEl);
    msgs.scrollTop = msgs.scrollHeight;

    // Thinking dots
    const thinking = document.createElement('div');
    thinking.className = 'dc-live-msg-thinking';
    thinking.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(thinking);
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(() => {
      msgs.removeChild(thinking);
      const topic   = detectTopic(text);
      const replies = AI_TOPICS[topic] || AI_TOPICS.general;
      const reply   = replies[Math.floor(Math.random() * replies.length)];

      const botEl = document.createElement('div');
      botEl.className = 'dc-live-msg dc-live-msg-bot';
      msgs.appendChild(botEl);
      streamText(botEl, reply);
    }, 1200);
  }

  sendBtn.addEventListener('click', () => sendMsg(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(input.value); });
  document.querySelectorAll('.dc-live-chip').forEach(chip => {
    chip.addEventListener('click', () => sendMsg(chip.dataset.q));
  });
}

/* ─────────────────────────────────────────────────────────
   STATIC CHAT ENHANCEMENT (the existing dc-ai-chat in hero)
   ───────────────────────────────────────────────────────── */
function initStaticChatEnhancement() {
  const input = document.getElementById('dcAiInput');
  if (!input) return;
  const sendBtn = input.closest('.dc-ai-chat') && input.closest('.dc-ai-chat').querySelector('.dc-ai-send');
  const msgContainer = document.querySelector('.dc-ai-messages');
  if (!msgContainer) return;

  function addMsg(text, isUser) {
    const el = document.createElement('div');
    el.className = 'dc-msg ' + (isUser ? 'dc-msg-user' : 'dc-msg-bot');
    el.textContent = text;
    msgContainer.appendChild(el);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function sendMsg(text) {
    if (!text.trim()) return;
    input.value = '';
    addMsg(text, true);
    const topic = detectTopic(text);
    const replies = AI_TOPICS[topic] || AI_TOPICS.general;
    const reply = replies[Math.floor(Math.random() * replies.length)];
    setTimeout(() => addMsg(reply, false), 1100);
  }

  if (sendBtn) sendBtn.addEventListener('click', () => sendMsg(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(input.value); });
}

/* ─────────────────────────────────────────────────────────
   PMS CHECK-IN WIDGET (Feature 24)
   ───────────────────────────────────────────────────────── */
const GUEST_PROFILES = [
  { name: 'Marie Novák',     nationality: 'Czech Republic', nights: 3, party: '2 adults',      prefs: 'Prefers morning tours · Czech-language service · Vegetarian' },
  { name: 'Thomas Wagner',   nationality: 'Germany',        nights: 2, party: '1 adult',        prefs: 'Literary tours · Evening dining · Late check-out' },
  { name: 'Sophie Laurent',  nationality: 'France',         nights: 5, party: '2 adults, 1 child', prefs: 'Family activities · Art tours · Early breakfast' },
  { name: 'Hiroshi Tanaka',  nationality: 'Japan',          nights: 4, party: '2 adults',      prefs: 'Photography tours · Japanese materials preferred · Vegetarian' },
  { name: 'Anna Kowalski',   nationality: 'Poland',         nights: 1, party: '1 adult',        prefs: 'Jewish heritage · Walking tours · Kosher meal option' },
  { name: 'James O\'Brien',  nationality: 'Ireland',        nights: 3, party: '4 adults',      prefs: 'Group experiences · Nightlife · Beer Spa' },
  { name: 'Sara Al-Rashid',  nationality: 'UAE',            nights: 6, party: '2 adults',      prefs: 'Gold Label tier · Private tours · Arabic materials preferred' },
  { name: 'Lucas Silva',     nationality: 'Brazil',         nights: 2, party: '2 adults',      prefs: 'Outdoor activities · Sunset views · Portuguese language' },
];

function initPmsWidget() {
  const loadBtn    = document.getElementById('dcPmsLoad');
  const roomInput  = document.getElementById('dcPmsRoom');
  const statusEl   = document.getElementById('dcPmsStatus');
  const profileEl  = document.getElementById('dcPmsProfile');
  if (!loadBtn) return;

  loadBtn.addEventListener('click', () => {
    const room = roomInput.value.trim();
    if (!room) { roomInput.focus(); return; }
    const roomNum = parseInt(room);
    if (isNaN(roomNum) || roomNum < 101 || roomNum > 420) {
      statusEl.innerHTML = '<span style="color:#c0533a">Please enter a room number between 101 and 420.</span>';
      return;
    }

    loadBtn.disabled = true;
    statusEl.innerHTML = '<span style="color:var(--gold)">⟳ Connecting to hotel system…</span>';
    profileEl.innerHTML = '';

    setTimeout(() => {
      const profile = GUEST_PROFILES[roomNum % GUEST_PROFILES.length];
      statusEl.innerHTML = '<span style="color:#4caf7d">✓ Profile loaded from PMS</span>';

      profileEl.innerHTML = `
        <div class="dc-pms-profile-card">
          <div class="dc-pms-profile-name">${profile.name}</div>
          <div class="dc-pms-profile-sub">Room ${roomNum} · Active Stay</div>
          <div class="dc-pms-profile-row"><span>Nationality</span><span>${profile.nationality}</span></div>
          <div class="dc-pms-profile-row"><span>Travel Party</span><span>${profile.party}</span></div>
          <div class="dc-pms-profile-row"><span>Nights</span><span>${profile.nights} nights</span></div>
          <div class="dc-pms-profile-row"><span>Check-Out</span><span>${new Date(Date.now() + profile.nights * 86400000).toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'})}</span></div>
          <div class="dc-pms-pref">✦ Guest preferences: ${profile.prefs}</div>
        </div>
      `;

      // Save to guest profile
      try {
        const g = JSON.parse(localStorage.getItem('cih-guest') || '{}');
        g.name = profile.name; g.room = String(roomNum);
        localStorage.setItem('cih-guest', JSON.stringify(g));
      } catch(e) {}

      loadBtn.disabled = false;
    }, 1500);
  });

  // Enter key
  roomInput.addEventListener('keydown', e => { if (e.key === 'Enter') loadBtn.click(); });
}

/* ─────────────────────────────────────────────────────────
   PRE-ARRIVAL EMAIL PREVIEW (Feature 14)
   ───────────────────────────────────────────────────────── */
function initEmailPreview() {
  const previewBtn = document.getElementById('dcEmailPreview');
  const sendBtn    = document.getElementById('dcEmailSend');
  const content    = document.getElementById('dcEmailContent');
  if (!previewBtn) return;

  function buildEmail() {
    let guestName = 'Valued Guest';
    try { const g = JSON.parse(localStorage.getItem('cih-guest') || '{}'); if (g.name) guestName = g.name; } catch(e) {}
    const arriving = new Date(Date.now() + 2 * 86400000).toLocaleDateString('en-GB', {weekday:'long',day:'numeric',month:'long'});
    return `
      <div class="dc-email-frame">
        <div class="dc-email-topbar">From: Czech Inn Hotels Concierge &lt;concierge@czechinn.com&gt; &nbsp;·&nbsp; To: ${guestName}</div>
        <div class="dc-email-hero">
          <div class="dc-email-logo">CZECH INN HOTELS</div>
          <div class="dc-email-tagline">Prague is waiting for you</div>
          <div class="dc-email-subtag">Your personalised guide arrives in 2 days</div>
        </div>
        <div class="dc-email-body">
          <div class="dc-email-greeting">Dear ${guestName},</div>
          <p class="dc-email-para">You arrive in Prague on <strong>${arriving}</strong>. We've been looking forward to welcoming you. To make your stay extraordinary, here are three experiences we've selected based on the season and current conditions in the city.</p>
          <div class="dc-email-section-title">Recommended for Your Stay</div>
          <div class="dc-email-tour-card">
            <img class="dc-email-tour-img" src="public/assets/tours/kafka/gallery-1.jpg" alt="Kafka tour" onerror="this.style.display='none'">
            <div>
              <div class="dc-email-tour-name">Kafka's Prague Walking Tour</div>
              <div class="dc-email-tour-meta">5 hrs · €59/person · 4.92 ★ · 214 reviews</div>
            </div>
          </div>
          <div class="dc-email-tour-card">
            <img class="dc-email-tour-img" src="public/assets/tours/mucha/gallery-1.jpg" alt="Mucha tour" onerror="this.style.display='none'">
            <div>
              <div class="dc-email-tour-name">Mucha's Art Nouveau Prague</div>
              <div class="dc-email-tour-meta">4.5 hrs · €54/person · 4.89 ★ · 187 reviews</div>
            </div>
          </div>
          <div class="dc-email-tour-card">
            <img class="dc-email-tour-img" src="public/assets/tours/jewish/gallery-1.jpg" alt="Jewish tour" onerror="this.style.display='none'">
            <div>
              <div class="dc-email-tour-name">Jewish Heritage of Prague</div>
              <div class="dc-email-tour-meta">4 hrs · €49/person · 4.94 ★ · 198 reviews</div>
            </div>
          </div>
          <p class="dc-email-para" style="font-size:11px;margin-top:16px">Prague weather on your arrival: 14°C, partly cloudy. Perfect for walking tours. Pack a light jacket for evenings.</p>
          <a class="dc-email-cta" href="#">Book Your Tours Now →</a>
        </div>
        <div class="dc-email-footer">Czech Inn Hotels s.r.o. · Hybernská 24, Praha 1 · Unsubscribe</div>
      </div>
    `;
  }

  previewBtn.addEventListener('click', () => {
    content.innerHTML = buildEmail();
  });

  sendBtn.addEventListener('click', () => {
    let email = '';
    try { const g = JSON.parse(localStorage.getItem('cih-guest') || '{}'); email = g.email || ''; } catch(e) {}
    const msg = email ? `Preview sent to ${email}` : 'Preview generated — add your email in Guest Profile to "send"';
    // Reuse booking toast
    if (window._bkToast) {
      window._bkToast(msg, '✉');
    } else {
      const t = document.createElement('div');
      t.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#001A35;color:#E8EDF4;border-left:4px solid #C9A84C;border-radius:10px;padding:14px 20px;font-size:.84rem;z-index:9999;box-shadow:0 8px 28px rgba(0,26,53,.25);max-width:320px';
      t.textContent = '✉ ' + msg;
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 4000);
    }
  });

  // Auto-generate on tab show
  document.querySelector('[data-tab="email"]') &&
    document.querySelector('[data-tab="email"]').addEventListener('click', () => {
      if (!content.innerHTML) previewBtn.click();
    });
}

/* ─────────────────────────────────────────────────────────
   PRAGUE PASS WIDGET (Feature 26)
   ───────────────────────────────────────────────────────── */
function initPassWidget() {
  const guestEl  = document.getElementById('dcPassGuest');
  const partnersEl = document.getElementById('dcPassPartners');
  if (!partnersEl) return;

  // Update guest name from profile
  try {
    const g = JSON.parse(localStorage.getItem('cih-guest') || '{}');
    if (guestEl && g.name) guestEl.textContent = g.name.toUpperCase();
  } catch(e) {}

  const PARTNERS = [
    { icon: '☕', name: 'Café Louvre', meta: 'Kafka tour · Stop 3 · 280m', badge: '10% off food' },
    { icon: '🛁', name: 'Beer & Wine Spa', meta: 'Extras catalogue · 1.2km', badge: '20% off' },
    { icon: '✡', name: 'Prague Synagogues', meta: 'Jewish tour · Adjacent', badge: '15% entry' },
    { icon: '🛍', name: 'Fashion Arena', meta: 'After Dark & extras · 4km', badge: 'Shopping deal' },
    { icon: '🚗', name: 'Airport Transfer', meta: 'All arrivals & departures', badge: 'Priority' },
  ];

  partnersEl.innerHTML = PARTNERS.map(p => `
    <div class="dc-pass-partner">
      <span class="dc-pass-partner-icon">${p.icon}</span>
      <div class="dc-pass-partner-info">
        <div class="dc-pass-partner-name">${p.name}</div>
        <div class="dc-pass-partner-meta">${p.meta}</div>
      </div>
      <span class="dc-pass-partner-badge">${p.badge}</span>
    </div>
  `).join('');
}

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

/* ════════════════════════════════════════════════════════════
   IMPROVEMENTS 1-24
   ════════════════════════════════════════════════════════════ */

/* ── #1 — 3D Phone Tilt ─────────────────────────────────── */
function initPhoneTilt() {
  const hero  = document.querySelector('.dc-hero');
  const phone = document.querySelector('.dc-hero-phone');
  if (!hero || !phone) return;
  phone.style.willChange = 'transform';
  hero.addEventListener('mousemove', e => {
    const r  = hero.getBoundingClientRect();
    const dx = ((e.clientX - r.left) / r.width  - 0.5) * 2;
    const dy = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    phone.style.transition = 'transform .1s ease';
    phone.style.transform = `perspective(900px) rotateY(${dx*7}deg) rotateX(${-dy*4}deg) translateZ(10px)`;
  });
  hero.addEventListener('mouseleave', () => {
    phone.style.transition = 'transform .45s cubic-bezier(.25,.46,.45,.94)';
    phone.style.transform  = 'perspective(900px) rotateY(0) rotateX(0) translateZ(0)';
  });
}

/* ── #2 — Typewriter Greeting ───────────────────────────── */
function initTypewriter() {
  const el = document.querySelector('.dc-phone-greeting');
  if (!el) return;
  const savedHTML = el.innerHTML;
  const plainText = el.textContent;
  el.textContent  = '';
  let i = 0;
  setTimeout(() => {
    const iv = setInterval(() => {
      el.textContent = plainText.slice(0, i + 1);
      i++;
      if (i >= plainText.length) {
        clearInterval(iv);
        setTimeout(() => { el.innerHTML = savedHTML; }, 80);
      }
    }, 26);
  }, 1400);
}

/* ── #4 — Floating Gold Particles ───────────────────────── */
function initParticles() {
  const hero = document.querySelector('.dc-hero');
  if (!hero) return;
  for (let i = 0; i < 20; i++) {
    const p   = document.createElement('span');
    p.className = 'dc-particle';
    const sz  = (Math.random() * 2.5 + 1.2).toFixed(1);
    const lft = (Math.random() * 100).toFixed(1);
    const del = (Math.random() * 9).toFixed(2);
    const dur = (Math.random() * 10 + 9).toFixed(1);
    const dft = ((Math.random() - 0.5) * 80).toFixed(0);
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${lft}%;bottom:-8px;animation-delay:${del}s;animation-duration:${dur}s;--pd:${dft}px`;
    hero.appendChild(p);
  }
}

/* ── #6 — Count-Up Stat Strip ───────────────────────────── */
function initCountUpStats() {
  const journey = document.querySelector('.dc-journey');
  if (!journey || document.querySelector('.dc-stat-strip')) return;

  const strip = document.createElement('div');
  strip.className = 'dc-stat-strip';
  strip.innerHTML = `
    <div class="dc-stat-strip-inner">
      <div class="dc-stat-item"><span class="dc-stat-num" data-target="22">0</span><span class="dc-stat-pct">%</span><div class="dc-stat-label">Pre-arrival email conversion</div></div>
      <div class="dc-stat-sep"></div>
      <div class="dc-stat-item"><span class="dc-stat-num" data-target="68">0</span><span class="dc-stat-pct">%</span><div class="dc-stat-label">Review capture rate</div></div>
      <div class="dc-stat-sep"></div>
      <div class="dc-stat-item"><span class="dc-stat-num" data-target="28">0</span><div class="dc-stat-label">Hotels active</div></div>
      <div class="dc-stat-sep"></div>
      <div class="dc-stat-item"><span class="dc-stat-num" data-target="4.9">0</span><span class="dc-stat-pct">&#9733;</span><div class="dc-stat-label">Average tour rating</div></div>
    </div>`;
  journey.parentNode.insertBefore(strip, journey);

  const css = document.createElement('style');
  css.textContent = [
    '.dc-stat-strip{background:var(--dark);border-top:1px solid rgba(156,123,60,.14);border-bottom:1px solid rgba(156,123,60,.14);padding:40px 20px;}',
    '.dc-stat-strip-inner{max-width:var(--max-w);margin:0 auto;display:flex;align-items:center;justify-content:center;gap:0;flex-wrap:wrap;}',
    '.dc-stat-item{text-align:center;padding:0 44px;flex-shrink:0;}',
    '.dc-stat-num{font-family:var(--fd);font-size:2.8rem;font-weight:800;color:var(--gold-light);line-height:1;}',
    '.dc-stat-pct{font-family:var(--fd);font-size:1.6rem;font-weight:700;color:var(--gold);margin-left:2px;}',
    '.dc-stat-label{font-size:.72rem;color:rgba(255,255,255,.38);margin-top:7px;letter-spacing:.4px;}',
    '.dc-stat-sep{width:1px;height:52px;background:rgba(156,123,60,.18);flex-shrink:0;}',
    '@media(max-width:640px){.dc-stat-item{padding:16px 22px;}.dc-stat-sep{display:none;}.dc-stat-num{font-size:2.1rem;}}'
  ].join('');
  document.head.appendChild(css);

  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    strip.querySelectorAll('.dc-stat-num').forEach(el => {
      const target  = parseFloat(el.dataset.target);
      const decimal = target % 1 !== 0;
      const steps   = 1800 / 16;
      let cur = 0;
      const inc = target / steps;
      const iv = setInterval(() => {
        cur += inc;
        if (cur >= target) { cur = target; clearInterval(iv); }
        el.textContent = decimal ? cur.toFixed(1) : Math.round(cur);
      }, 16);
    });
  }, { threshold: 0.5 });
  obs.observe(strip);
}

/* ── #8 #9 #10 — Journey Animations ────────────────────── */
function initJourneyAnimations() {
  const stepsEl = document.querySelector('.dc-journey-steps');
  if (!stepsEl) return;

  // #8 — draw the connecting line
  new IntersectionObserver((entries, o) => {
    if (entries[0].isIntersecting) { stepsEl.classList.add('line-drawn'); o.disconnect(); }
  }, { threshold: 0.3 }).observe(stepsEl);

  // #9 — ring glow per step
  const ringObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('ring-active'); ringObs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  document.querySelectorAll('.dc-j-step').forEach(s => ringObs.observe(s));

  // #10 — carousel dot sync (mobile)
  const dotsEl = document.querySelector('.dc-journey-dots');
  if (!dotsEl) return;
  const dots = Array.from(dotsEl.querySelectorAll('.dc-journey-dot'));
  stepsEl.addEventListener('scroll', () => {
    const w = stepsEl.firstElementChild ? stepsEl.firstElementChild.offsetWidth : 1;
    const active = Math.round(stepsEl.scrollLeft / w);
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  }, { passive: true });
  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    const w = stepsEl.firstElementChild ? stepsEl.firstElementChild.offsetWidth : 0;
    stepsEl.scrollTo({ left: i * w, behavior: 'smooth' });
  }));
}

/* ── #11 — Static Chat Auto-Play ────────────────────────── */
function initStaticAutoPlay() {
  const section = document.querySelector('.dc-ai');
  const msgs    = document.querySelector('.dc-ai-messages');
  if (!section || !msgs) return;
  const msgEls = Array.from(msgs.querySelectorAll('.dc-msg'));
  if (msgEls.length < 2) return;
  msgEls.forEach((m, i) => { if (i > 0) m.style.display = 'none'; });

  let played = false;
  new IntersectionObserver((entries, o) => {
    if (!entries[0].isIntersecting || played) return;
    played = true; o.disconnect();
    let delay = 700;
    msgEls.forEach((m, i) => {
      if (i === 0) return;
      const isBot = m.classList.contains('dc-msg-bot');
      setTimeout(() => {
        if (isBot) {
          const dots = document.createElement('div');
          dots.className = 'dc-msg dc-msg-bot';
          dots.style.cssText = 'opacity:0;transition:opacity .25s ease;display:flex;gap:5px;align-items:center;padding:12px 16px;';
          dots.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:rgba(156,123,60,.55);display:block;animation:dotPulse 1.2s infinite;"></span><span style="width:6px;height:6px;border-radius:50%;background:rgba(156,123,60,.55);display:block;animation:dotPulse 1.2s .2s infinite;"></span><span style="width:6px;height:6px;border-radius:50%;background:rgba(156,123,60,.55);display:block;animation:dotPulse 1.2s .4s infinite;"></span>';
          msgs.appendChild(dots);
          msgs.scrollTop = msgs.scrollHeight;
          requestAnimationFrame(() => { dots.style.opacity = '1'; });
          setTimeout(() => {
            dots.remove();
            m.style.display = ''; m.style.opacity = '0'; m.style.transition = 'opacity .4s ease';
            requestAnimationFrame(() => { m.style.opacity = '1'; });
            msgs.scrollTop = msgs.scrollHeight;
          }, 950);
        } else {
          m.style.display = ''; m.style.opacity = '0'; m.style.transition = 'opacity .3s ease';
          requestAnimationFrame(() => { m.style.opacity = '1'; });
          msgs.scrollTop = msgs.scrollHeight;
        }
      }, delay);
      delay += isBot ? 2300 : 1300;
    });
  }, { threshold: 0.45 }).observe(section);
}

/* ── #13 #15 — Ripple Effects ───────────────────────────── */
function addRipple(el, e) {
  const r   = el.getBoundingClientRect();
  const sz  = Math.max(r.width, r.height);
  const x   = (e ? e.clientX - r.left : r.width  / 2) - sz / 2;
  const y   = (e ? e.clientY - r.top  : r.height / 2) - sz / 2;
  const rip = document.createElement('span');
  rip.className = 'ripple-circle';
  rip.style.cssText = `width:${sz}px;height:${sz}px;left:${x}px;top:${y}px;`;
  el.appendChild(rip);
  rip.addEventListener('animationend', () => rip.remove());
}
function initRippleEffects() {
  const sendStatic = document.querySelector('.dc-ai-send');
  const sendLive   = document.getElementById('dcLiveSend');
  if (sendStatic) sendStatic.addEventListener('click', e => addRipple(sendStatic, e));
  if (sendLive)   sendLive.addEventListener('click',   e => addRipple(sendLive, e));
  document.querySelectorAll('.sg-btn').forEach(btn => btn.addEventListener('click', e => addRipple(btn, e)));
}

/* ── #17 — Memory Book Lightbox ─────────────────────────── */
function initLightbox() {
  const photos = document.querySelectorAll('.dc-mem-photo');
  if (!photos.length) return;
  const imgs = Array.from(photos).map(p => p.querySelector('img')).filter(Boolean);
  let cur = 0, lb = null;

  function build() {
    lb = document.createElement('div');
    lb.className = 'dc-lightbox';
    lb.innerHTML = '<button class="dc-lightbox-close">\u2715</button><button class="dc-lightbox-prev">\u2039</button><img class="dc-lightbox-img" src="" alt=""><button class="dc-lightbox-next">\u203a</button><div class="dc-lightbox-counter"></div>';
    document.body.appendChild(lb);
    lb.querySelector('.dc-lightbox-close').onclick = close;
    lb.querySelector('.dc-lightbox-prev').onclick  = e => { e.stopPropagation(); go(-1); };
    lb.querySelector('.dc-lightbox-next').onclick  = e => { e.stopPropagation(); go(1);  };
    lb.onclick = e => { if (e.target === lb) close(); };
    document.addEventListener('keydown', keyNav);
  }
  function open(idx) { cur = idx; if (!lb) build(); lb.style.display = 'flex'; upd(); document.body.style.overflow = 'hidden'; }
  function close()   { if (lb) lb.style.display = 'none'; document.body.style.overflow = ''; }
  function go(d)     { cur = (cur + d + imgs.length) % imgs.length; upd(); }
  function upd()     { lb.querySelector('.dc-lightbox-img').src = imgs[cur].src; lb.querySelector('.dc-lightbox-img').alt = imgs[cur].alt; lb.querySelector('.dc-lightbox-counter').textContent = (cur + 1) + ' / ' + imgs.length; }
  function keyNav(e) { if (!lb || lb.style.display !== 'flex') return; if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); if (e.key === 'Escape') close(); }

  photos.forEach((p, i) => p.addEventListener('click', () => open(i)));
}

/* ── #23 — Integrations Strip ───────────────────────────── */
function initSocialProofStrip() {
  const feat = document.querySelector('.dc-features');
  if (!feat || document.querySelector('.dc-integrations-strip')) return;

  const strip = document.createElement('div');
  strip.className = 'dc-integrations-strip';
  strip.innerHTML = '<div class="dc-integrations-inner"><div class="dc-integrations-label">Integrates with</div><div class="dc-integrations-logos"><div class="dc-int-logo">Mews PMS</div><div class="dc-int-logo">Oracle Opera</div><div class="dc-int-logo">WhatsApp Business</div><div class="dc-int-logo">TripAdvisor</div><div class="dc-int-logo">Google Reviews</div><div class="dc-int-logo">Booking.com</div></div></div>';
  feat.insertAdjacentElement('afterend', strip);

  const css = document.createElement('style');
  css.textContent = '.dc-integrations-strip{background:rgba(0,8,18,.97);border-top:1px solid rgba(156,123,60,.1);border-bottom:1px solid rgba(156,123,60,.1);padding:22px 20px;}.dc-integrations-inner{max-width:var(--max-w);margin:0 auto;display:flex;align-items:center;gap:28px;flex-wrap:wrap;justify-content:center;}.dc-integrations-label{font-size:.62rem;text-transform:uppercase;letter-spacing:2.5px;color:rgba(255,255,255,.28);font-weight:600;white-space:nowrap;}.dc-integrations-logos{display:flex;gap:7px;flex-wrap:wrap;justify-content:center;}.dc-int-logo{padding:7px 16px;border:1px solid rgba(156,123,60,.18);border-radius:7px;font-size:.7rem;font-family:var(--fd);font-weight:600;color:rgba(255,255,255,.35);letter-spacing:.4px;background:rgba(255,255,255,.02);transition:border-color .2s,color .2s,background .2s;cursor:default;}.dc-int-logo:hover{border-color:rgba(156,123,60,.42);color:var(--gold-light);background:rgba(156,123,60,.06);}';
  document.head.appendChild(css);
}

/* ── #24 — Scroll Progress Bar ──────────────────────────── */
function initScrollProgress() {
  if (document.getElementById('conciergeProgress')) return;
  const bar = document.createElement('div');
  bar.id = 'conciergeProgress';
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? (window.scrollY / max * 100) + '%' : '0';
  }, { passive: true });
}