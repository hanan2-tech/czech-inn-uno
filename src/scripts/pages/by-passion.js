const answers = {};

function nextStep(current) {
  const opts = document.querySelectorAll('#step' + current + ' .quiz-opt');
  const chosen = [...opts].find(o => o.classList.contains('chosen'));
  if (!chosen) { chosen || opts[0].classList.add('chosen'); }
  const val = document.querySelector('#step' + current + ' .quiz-opt.chosen');
  if (!val) return;
  answers['q' + current] = val.dataset.val;

  document.getElementById('step' + current).classList.remove('active');
  const next = current + 1;
  document.getElementById('step' + next).classList.add('active');
  document.getElementById('dot' + next).classList.add('done');
}

function prevStep(current) {
  document.getElementById('step' + current).classList.remove('active');
  document.getElementById('step' + (current - 1)).classList.add('active');
  document.getElementById('dot' + current).classList.remove('done');
}

document.querySelectorAll('.quiz-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    opt.closest('.quiz-options').querySelectorAll('.quiz-opt').forEach(o => o.classList.remove('chosen'));
    opt.classList.add('chosen');
  });
});

const PROFILES = {
  culture:  { icon:'<iconify-icon icon="tabler:palette" style="font-size:28px;color:#C9A84C"></iconify-icon>' },
  food:     { icon:'<iconify-icon icon="tabler:glass-wine" style="font-size:28px;color:#C9A84C"></iconify-icon>' },
  stories:  { icon:'<lord-icon src="https://cdn.lordicon.com/kipaqhoz.json" trigger="hover" colors="primary:#C9A84C" style="width:28px;height:28px"></lord-icon>' },
  night:    { icon:'<iconify-icon icon="tabler:moon" style="font-size:28px;color:#C9A84C"></iconify-icon>' },
};

/* ── 3-Day Itineraries ────────────────────────── */
const ITINERARIES = {
  culture: [
    { day: 'Day 1', slots: [
      { time: 'Morning',   icon: '🎨', title: 'Mucha\'s Art Nouveau Tour', desc: 'Begin with the most visually stunning tour in Prague. Your guide walks you through Municipal House, St. Vitus Cathedral\'s Mucha window, and three hidden Art Nouveau doorways most visitors walk past. Coffee included at a 1920s café.' },
      { time: 'Afternoon', icon: '🏛',  title: 'National Museum + Vinohrady', desc: 'The newly renovated National Museum on Wenceslas Square. Then walk into Vinohrady — Prague\'s most elegant neighbourhood — for gallery-hopping along Mánesova Street.' },
      { time: 'Evening',   icon: '🎭', title: 'Opera or Quartet at Estate Theatre', desc: 'Estate Theatre is where Mozart personally conducted Don Giovanni. The evening programme includes a chamber concert. Your concierge can secure two seats.' },
    ]},
    { day: 'Day 2', slots: [
      { time: 'Morning',   icon: '✡', title: 'Jewish Heritage of Prague', desc: 'Six synagogues, the Old Jewish Cemetery, and 900 years of extraordinary history. Your guide has spent a lifetime on this walk — every stop is connected to something deeply personal.' },
      { time: 'Afternoon', icon: '🖼', title: 'DOX Centre for Contemporary Art', desc: 'Prague\'s premier contemporary art museum in a converted factory in Holešovice. The current exhibition usually includes international names alongside Czech artists.' },
      { time: 'Evening',   icon: '🍷', title: 'Wine Tasting at Vinograf', desc: 'An extraordinary wine bar in the Old Town with the most comprehensive Czech and Moravian wine list in the city. Staff knowledge is exceptional.' },
    ]},
    { day: 'Day 3', slots: [
      { time: 'Morning',   icon: '🏰', title: 'Prague Castle & St. Vitus Cathedral', desc: 'The castle at opening time — before the crowds. Walk the complete circuit: St. Vitus, the Old Royal Palace, Golden Lane, and the Lobkowicz Palace with its original Beethoven manuscripts.' },
      { time: 'Afternoon', icon: '📸', title: 'Photography Walk — Malá Strana', desc: 'The Little Quarter in afternoon light is extraordinary. Your guide knows every hidden courtyard and garden. Wallenstein Garden at 3pm is particularly beautiful.' },
      { time: 'Evening',   icon: '🌅', title: 'Sunset from Letná Terrace', desc: 'The beer garden at Letná Park has the finest panoramic view of Prague from the river. Best at golden hour. Local crowd, no tourist markup on the beer.' },
    ]},
  ],
  food: [
    { day: 'Day 1', slots: [
      { time: 'Morning',   icon: '☕', title: 'Old Town Market + Café Louvre', desc: 'Start at Havelské tržiště market — local fruit, honey, and artisan food stalls since the 13th century. Then breakfast at Café Louvre on Národní: Viennese coffee and apple strudel, unchanged since Kafka\'s time.' },
      { time: 'Afternoon', icon: '🍺', title: 'Craft Beer Trail — Žižkov', desc: 'Prague\'s Žižkov district has 40+ bars per square kilometre. Your guide leads a 3-bar crawl through local microbreweries. Unfiltered Czech lager tastes completely different from the export version.' },
      { time: 'Evening',   icon: '🍽', title: 'Dinner at Mlýnec', desc: 'Riverside terrace, modern Czech cuisine, and one of the best wine lists in Prague. The duck confit with Moravian red wine is the best thing on the menu. Book the terrace table — it overhangs the Vltava.' },
    ]},
    { day: 'Day 2', slots: [
      { time: 'Morning',   icon: '🥐', title: 'Bakery Walk — Vinohrady', desc: 'The neighbourhood of Vinohrady has three of Prague\'s best bakeries within two blocks of each other. Start at Café Savoy for a proper breakfast, then visit the sourdough bakery on Mánesova for bread to take home.' },
      { time: 'Afternoon', icon: '🧑‍🍳', title: 'Czech Cooking Class at Cooking Club', desc: 'A 3-hour hands-on cooking class in the Old Town. You\'ll make svíčková (slow-braised beef), bread dumplings, and trdelník from scratch. Maximum 8 guests per session.' },
      { time: 'Evening',   icon: '🍸', title: 'Cocktails at Hemingway Bar', desc: 'Consistently ranked one of the best cocktail bars in Europe. Pre-Prohibition recipes, fresh ingredients, 1930s Paris atmosphere. The Kafka Sour is on the menu.' },
    ]},
    { day: 'Day 3', slots: [
      { time: 'Morning',   icon: '🌿', title: 'Bio Farmers\' Market — Jiřák', desc: 'Saturdays at náměstí Jiřího z Poděbrad: the best organic market in Prague. Moravian cheese, pickled vegetables, wild mushrooms, and Czech wines. Bring a bag.' },
      { time: 'Afternoon', icon: '🫕', title: 'Svíčková Lunch at Lokál Dlouhá', desc: 'The definitive Czech pub lunch experience. Fresh Pilsner Urquell (pressure-tankered daily from Plzeň), svíčková, and bread dumplings. The bread basket arrives immediately. This is Prague at its most honest.' },
      { time: 'Evening',   icon: '🔥', title: 'Rooftop Dinner at T-Anker', desc: 'Elevated Czech comfort food above Palladium shopping centre. The panoramic rooftop view is one of the three best in Prague. Go at sunset, stay for the city lights.' },
    ]},
  ],
  stories: [
    { day: 'Day 1', slots: [
      { time: 'Morning',   icon: '📖', title: 'Kafka\'s Prague Walking Tour', desc: 'The definitive literary experience of Prague. Kafka\'s birthplace, three childhood apartments, Charles University, Café Louvre, Golden Lane. Your guide has memorised entire passages and reads them at the right moments.' },
      { time: 'Afternoon', icon: '📚', title: 'Kafka Museum + Shakespeare & Sons', desc: 'The Kafka Museum in Malá Strana is designed to disorient — deliberately Kafkaesque architecture. Then cross the river to Shakespeare & Sons bookshop for the best collection of Prague literature in English.' },
      { time: 'Evening',   icon: '🎙', title: 'Literary Evening at Globe Bookstore', desc: 'The Globe Bookstore in Nové Město hosts readings and author events most evenings. Even if there\'s no event, the café bar downstairs is the best place in Prague to meet writers and thinkers.' },
    ]},
    { day: 'Day 2', slots: [
      { time: 'Morning',   icon: '🏛', title: 'Jewish Heritage Tour + Cemetery', desc: 'This is one of the most story-rich places in Europe. Rabbi Loew and the Golem, the persecution and survival of a community for 900 years, the layers of graves in the Old Jewish Cemetery. Your guide makes it feel close.' },
      { time: 'Afternoon', icon: '🔮', title: 'Alchemists & Rudolf II\'s Prague', desc: 'The Holy Roman Emperor Rudolf II turned Prague into the alchemist capital of Europe. Your guide takes you through Hradčany and tells the stories of Dee, Kelley, and Brahe. Most visitors have never heard these stories.' },
      { time: 'Evening',   icon: '🕯', title: 'Ghost Tour of Old Town', desc: 'A candlelit walking tour of the Old Town\'s darkest stories: the bridge statues, the tower executions, the underground passages. Your guide has been telling these stories for 20 years.' },
    ]},
    { day: 'Day 3', slots: [
      { time: 'Morning',   icon: '🎻', title: 'Mozart at Estate Theatre', desc: 'A morning audio tour of Estate Theatre, where Mozart conducted the premiere of Don Giovanni. The building is almost completely unchanged. The guide plays original recordings at each stop.' },
      { time: 'Afternoon', icon: '📝', title: 'Write at Kavárna Nová Metropol', desc: 'The Art Deco café that inspired three generations of Czech writers. Bring a notebook. The afternoon light through the stained glass is the best writing light in Prague.' },
      { time: 'Evening',   icon: '🌙', title: 'The Story of Prague — Audio Walk', desc: 'A self-guided evening walk with premium headphone audio narration covering Prague\'s history from 800AD to today. Download at the hotel. Start at the Vyšehrad rock overlooking the Vltava.' },
    ]},
  ],
  night: [
    { day: 'Day 1', slots: [
      { time: 'Evening',   icon: '🌅', title: 'Sunset at Letná Beer Garden', desc: 'The best free sunset view in Prague. A Czech beer, a wooden bench, and the entire city spread below you. Locals outnumber tourists here 10:1. Come at 7pm, stay until the lights come on.' },
      { time: 'Late',      icon: '🎷', title: 'Jazz Dock: Live Session', desc: 'Prague\'s finest jazz venue sits directly on the Vltava river. Live sessions start at 9pm most nights. International and Czech artists, intimate setting, outstanding drinks.' },
      { time: 'After Midnight', icon: '🌀', title: 'Hemingway Bar for Last Drinks', desc: 'End the night at Hemingway Bar on Karoliny Světlé. Last orders at 1am. The perfect nightcap after Jazz Dock.' },
    ]},
    { day: 'Day 2', slots: [
      { time: 'Evening',   icon: '🍸', title: 'Cocktail Tour — 3 Legendary Bars', desc: 'Your guide takes you to three bars over three hours: Hemingway Bar for cocktail craft, Black Angel\'s Bar in the medieval cellar of Hotel U Prince, and Bar and Books for Cuban cigars and whisky.' },
      { time: 'Late',      icon: '🎭', title: 'Prague After Dark Experience', desc: 'The full After Dark tour: rooftop views, underground cocktails, and the secret courtyard bars that most visitors never find. Ends at a private members bar that admits tour guests by name.' },
      { time: 'After Midnight', icon: '🕺', title: 'Cross Club, Holešovice', desc: 'The most visually extraordinary bar in Prague — steampunk industrial design, three dance floors, and the most eclectic programming in the city. The entrance is unmarked. Your guide shows you where.' },
    ]},
    { day: 'Day 3', slots: [
      { time: 'Evening',   icon: '🌃', title: 'Rooftop Dinner — T-Anker', desc: 'Elevated Czech comfort food with a panoramic rooftop view. Best table in Prague for watching the city turn gold and then dark. Reserve two weeks ahead.' },
      { time: 'Late',      icon: '🎸', title: 'Live Music at Rock Café', desc: 'Rock Café on Národní is the institution for live Czech rock, folk, and alternative music. Cover charges are minimal. The crowd is local, the music is unexpected and usually excellent.' },
      { time: 'After Midnight', icon: '🌙', title: 'Charles Bridge at 2am', desc: 'Walk Charles Bridge when the tourist crowds have gone. In the silence, the statues become something else entirely. The city at night is a different city. This is the most romantic thing we can offer.' },
    ]},
  ],
};

/* ── Alternatives for "Refine" ────────────────── */
const ALTERNATIVES = {
  culture: [
    { time: 'Afternoon', icon: '🎪', title: 'Circus and Performance Art — Alfred ve dvoře', desc: 'The finest contemporary circus and performance venue in Prague. Check their programme — they rarely disappoint.' },
    { time: 'Morning',   icon: '🏺', title: 'Decorative Arts Museum', desc: 'The Uměleckoprůmyslové museum holds 200,000 objects of Czech decorative art. Less visited than the major museums, more interesting.' },
  ],
  food: [
    { time: 'Afternoon', icon: '🍫', title: 'Chocolate Workshop at Čoko World', desc: 'A hands-on chocolate-making session in the Old Town. You\'ll make and take home your own truffles. 90 minutes, maximum 10 guests.' },
    { time: 'Morning',   icon: '🍜', title: 'Vietnamese Market — Holešovice', desc: 'Prague has one of the largest Vietnamese communities in Central Europe. The SAPA market in Holešovice is extraordinary — authentic Vietnamese food and ingredients unavailable anywhere else in the city.' },
  ],
  stories: [
    { time: 'Afternoon', icon: '🔬', title: 'Alchemy Museum — Speculum Alchemiae', desc: 'A genuine 16th-century alchemist laboratory discovered during building renovations in 2002. 45-minute guided tour of the underground laboratory network.' },
    { time: 'Morning',   icon: '⚔', title: 'Medieval Weapons and Armour Tour', desc: 'The National Museum holds an extraordinary collection of medieval weapons, armour, and artefacts from the Hussite Wars. The guide\'s stories about each piece bring the history alive.' },
  ],
  night: [
    { time: 'Late',      icon: '🎹', title: 'Piano Bar — Café Savoy', desc: 'Café Savoy on the Vltava embankment hosts piano jazz evenings on Fridays. Art Nouveau interiors, exceptional wine list, unexpectedly intimate.' },
    { time: 'Evening',   icon: '🎬', title: 'Czech Cinema at Kino Světozor', desc: 'The finest arthouse cinema in Prague. They run subtitled Czech films on Wednesday evenings and international premieres year-round.' },
  ],
};

let _currentItinerary = null;
let _currentPassion   = null;

function showResult() {
  const opts = document.querySelectorAll('#step3 .quiz-opt');
  const val = [...opts].find(o => o.classList.contains('chosen'));
  if (!val) return;
  answers.q3 = val.dataset.val;

  const lang = document.documentElement.lang || 'en';
  const t = (typeof T !== 'undefined' && T[lang]) ? T[lang] : (typeof T !== 'undefined' ? T.en : {});

  const passion = answers.q0 || 'culture';
  _currentPassion = passion;
  const profile = PROFILES[passion];

  document.getElementById('resultIcon').innerHTML = profile.icon;
  document.getElementById('resultType').textContent = t['byp.profile.' + passion + '.type'] || passion.charAt(0).toUpperCase() + passion.slice(1);
  document.getElementById('resultDesc').textContent = t['byp.profile.' + passion + '.desc'] || '';
  document.getElementById('resultIntro').textContent = 'Your personalised 3-day Prague itinerary, generated from your answers.';

  _currentItinerary = JSON.parse(JSON.stringify(ITINERARIES[passion] || ITINERARIES.culture));

  document.querySelector('.quiz-wrap').style.display = 'none';
  const rs = document.getElementById('resultSection');
  rs.style.display = 'block';
  rs.scrollIntoView({ behavior: 'smooth', block: 'start' });

  renderItinerary(_currentItinerary, true);
  injectByPassionCSS();
}

function renderItinerary(itinerary, animate) {
  const iEl = document.getElementById('resultItinerary');
  iEl.innerHTML = '';

  // Add refine button if not already there
  let refineBtn = document.getElementById('bpRefineBtn');
  if (!refineBtn) {
    refineBtn = document.createElement('button');
    refineBtn.id = 'bpRefineBtn';
    refineBtn.className = 'bp-refine-btn';
    refineBtn.innerHTML = '✦ Refine with AI';
    refineBtn.addEventListener('click', refineWithAI);
    iEl.parentElement.insertBefore(refineBtn, iEl.nextSibling);
  }

  let allSlots = [];
  itinerary.forEach(day => {
    day.slots.forEach(slot => allSlots.push({ ...slot, dayLabel: day.day }));
  });

  if (!animate) {
    renderSlots(iEl, itinerary);
    return;
  }

  // Animated render: show each slot with typing delay
  let dayIndex = -1;
  let dayEl = null;
  let slotIndex = 0;

  function renderNext() {
    if (slotIndex >= allSlots.length) {
      if (refineBtn) refineBtn.style.display = 'inline-flex';
      return;
    }
    const slot = allSlots[slotIndex];
    const currentDay = itinerary[Math.floor(slotIndex / Math.max(1, Math.ceil(allSlots.length / itinerary.length)))];

    // Add day header if needed
    const slotDayIndex = itinerary.findIndex(d => d.slots.includes(itinerary.flatMap(d => d.slots)[slotIndex]));
    if (slotDayIndex !== dayIndex) {
      dayIndex = slotDayIndex;
      const dh = document.createElement('div');
      dh.className = 'bp-day-header';
      dh.textContent = itinerary[slotDayIndex] ? itinerary[slotDayIndex].day : '';
      iEl.appendChild(dh);
      dayEl = dh;
    }

    const slotEl = document.createElement('div');
    slotEl.className = 'bp-slot bp-slot-enter';
    slotEl.innerHTML = `
      <div class="bp-slot-time">${slot.icon} ${slot.time}</div>
      <div class="bp-slot-title">${slot.title}</div>
      <div class="bp-slot-desc"></div>
    `;
    iEl.appendChild(slotEl);

    // Trigger animation
    requestAnimationFrame(() => slotEl.classList.remove('bp-slot-enter'));

    // Type description
    const descEl = slotEl.querySelector('.bp-slot-desc');
    let charIdx = 0;
    const typeInterval = setInterval(() => {
      descEl.textContent += slot.desc[charIdx];
      charIdx++;
      if (charIdx >= slot.desc.length) {
        clearInterval(typeInterval);
        slotIndex++;
        setTimeout(renderNext, 200);
      }
    }, 12);
  }

  if (refineBtn) refineBtn.style.display = 'none';
  renderNext();
}

function renderSlots(iEl, itinerary) {
  itinerary.forEach(day => {
    const dh = document.createElement('div');
    dh.className = 'bp-day-header';
    dh.textContent = day.day;
    iEl.appendChild(dh);
    day.slots.forEach(slot => {
      const slotEl = document.createElement('div');
      slotEl.className = 'bp-slot';
      slotEl.innerHTML = `
        <div class="bp-slot-time">${slot.icon} ${slot.time}</div>
        <div class="bp-slot-title">${slot.title}</div>
        <div class="bp-slot-desc">${slot.desc}</div>
      `;
      iEl.appendChild(slotEl);
    });
  });
}

function refineWithAI() {
  const btn = document.getElementById('bpRefineBtn');
  if (!btn) return;
  btn.textContent = '⟳ AI is refining your itinerary…';
  btn.disabled = true;

  setTimeout(() => {
    const passion = _currentPassion || 'culture';
    const alts = ALTERNATIVES[passion] || ALTERNATIVES.culture;
    const alt = alts[Math.floor(Math.random() * alts.length)];

    // Replace a random slot in day 2
    const itinerary = _currentItinerary;
    if (itinerary[1] && itinerary[1].slots.length > 0) {
      const idx = Math.floor(Math.random() * itinerary[1].slots.length);
      itinerary[1].slots[idx] = { ...alt, time: alt.time };
    }

    btn.textContent = '✦ Refine with AI';
    btn.disabled = false;

    renderItinerary(itinerary, false);
  }, 2000);
}

function injectByPassionCSS() {
  if (document.getElementById('bpEnhancedCSS')) return;
  const s = document.createElement('style');
  s.id = 'bpEnhancedCSS';
  s.textContent = `
    .bp-day-header{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:var(--gold);padding:16px 0 8px;border-top:1px solid var(--border);margin-top:8px;}
    .bp-day-header:first-child{border-top:none;margin-top:0;padding-top:0;}
    .bp-slot{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px 18px;margin-bottom:10px;box-shadow:var(--shadow-sm);}
    .bp-slot-enter{opacity:0;transform:translateY(12px);transition:opacity .4s,transform .4s;}
    .bp-slot-time{font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);margin-bottom:5px;}
    .bp-slot-title{font-family:var(--fd);font-size:.92rem;font-weight:600;color:var(--text);margin-bottom:6px;}
    .bp-slot-desc{font-size:.8rem;color:var(--text-l);line-height:1.7;}
    .bp-refine-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 24px;border-radius:8px;
      background:transparent;border:1.5px solid var(--gold);color:var(--gold);font-family:var(--fb);
      font-size:.82rem;font-weight:500;cursor:pointer;margin-top:16px;transition:background .2s,color .2s;}
    .bp-refine-btn:hover:not(:disabled){background:rgba(156,123,60,.1);}
    .bp-refine-btn:disabled{opacity:.5;cursor:not-allowed;}
  `;
  document.head.appendChild(s);
}

function resetQuiz() {
  Object.keys(answers).forEach(k => delete answers[k]);
  document.querySelectorAll('.quiz-step').forEach((s, i) => s.classList.toggle('active', i === 0));
  document.querySelectorAll('.quiz-dot').forEach((d, i) => d.classList.toggle('done', i === 0));
  document.querySelectorAll('.quiz-opt').forEach(o => o.classList.remove('chosen'));
  document.getElementById('resultSection').style.display = 'none';
  document.querySelector('.quiz-wrap').style.display = '';
  document.querySelector('.quiz-wrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
});

document.addEventListener('click', e => {
  const langBtn = e.target.closest('[data-lang]');
  if (langBtn && document.getElementById('resultSection').style.display === 'block') {
    setTimeout(showResult, 0);
  }
});