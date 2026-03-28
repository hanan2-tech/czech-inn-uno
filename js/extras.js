/* ── Extras data ─── */
const EXTRAS_DATA = [
  {cat:'food', catLabel:'Food & Drink', icon:'<iconify-icon icon="tabler:tools-kitchen-2" style="font-size:28px;color:#C9A84C"></iconify-icon>',
   items:[
    {id:'cooking',name:'Private Cooking Class',desc:'Learn Czech classics: svíčková, trdelník, and more. Taught by a professional Prague chef in a historic Old Town kitchen.',dur:'3 hrs',grp:'2–8 people',price:89,img:'https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'wine',name:'Wine Cellar Tasting',desc:'Descended beneath a 14th-century Gothic cellar, taste Moravian wines paired with local charcuterie and artisan cheese.',dur:'2 hrs',grp:'2–12 people',price:65,img:'https://images.pexels.com/photos/17765439/pexels-photo-17765439.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'beer',name:'Prague Craft Beer Tour',desc:'Four stops, eight beers, one unforgettable evening. From microbrewery taprooms to the last surviving brewing monastery in Prague.',dur:'3.5 hrs',grp:'2–15 people',price:49,img:'https://images.pexels.com/photos/3009799/pexels-photo-3009799.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'food-tour',name:'Prague Street Food & Market Walk',desc:'Start at Náplavka farmers\' market, finish at a riverside beer garden. Eat your way through Czech street food with a local food expert.',dur:'2.5 hrs',grp:'2–10 people',price:39,img:'https://images.pexels.com/photos/31751536/pexels-photo-31751536.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'absinthe',name:'Czech Absinthe Experience',desc:'The real Czech absinthe ritual at Hemingway Bar. History, ceremony, and tasting with one of Prague\'s most acclaimed bartenders.',dur:'1.5 hrs',grp:'2–6 people',price:55,img:'https://images.pexels.com/photos/19674104/pexels-photo-19674104.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
  ]},
  {cat:'river', catLabel:'River & Water', icon:'<iconify-icon icon="tabler:sailboat" style="font-size:28px;color:#C9A84C"></iconify-icon>',
   items:[
    {id:'cruise',name:'Private River Cruise',desc:'A 2-hour private sightseeing cruise on the Vltava with Czech canapés, prosecco, and a narrated tour of Prague\'s waterfront landmarks.',dur:'2 hrs',grp:'2–10 people',price:119,img:'https://images.pexels.com/photos/12999311/pexels-photo-12999311.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'kayak',name:'Kayak Through Prague',desc:'Paddle under Charles Bridge and past Vyšehrad fortress at sunrise. A completely different view of the city, reserved for those who wake early enough.',dur:'2.5 hrs',grp:'2–8 people',price:45,img:'https://images.pexels.com/photos/2178175/pexels-photo-2178175.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'dinner-cruise',name:'Sunset Dinner Cruise',desc:'A three-course Czech dinner on the water as the sun sets over the city. Premium wine pairings available. Booking must be made 48 hrs in advance.',dur:'3 hrs',grp:'2–20 people',price:145,img:'https://images.pexels.com/photos/1796705/pexels-photo-1796705.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'pedalboat',name:'Pedal Boat and Picnic',desc:'A pedal boat on the Vltava, a stop at Emperor\'s Island, and a prepared Czech picnic basket. Perfect for families or couples.',dur:'3 hrs',grp:'2–5 people',price:38,img:'https://images.pexels.com/photos/1172569/pexels-photo-1172569.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
  ]},
  {cat:'cultural', catLabel:'Cultural', icon:'<iconify-icon icon="tabler:masks-theater" style="font-size:28px;color:#C9A84C"></iconify-icon>',
   items:[
    {id:'black-light',name:'Black Light Theatre',desc:'Prague\'s iconic Black Light Theatre. An internationally acclaimed genre exclusive to this city. Premium seats at Image Theatre, reserved through Czech Inn Hotels.',dur:'1.5 hrs',grp:'Any',price:35,img:'https://images.pexels.com/photos/4722577/pexels-photo-4722577.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'classical',name:'Mozart in Prague Concert',desc:'Chamber concerts in the Baroque Lobkowicz Palace or the historic Chapel of Mirrors. The very stages where Mozart himself performed.',dur:'1 hr',grp:'Any',price:29,img:'https://images.pexels.com/photos/258783/pexels-photo-258783.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'photography',name:'Private Photography Session',desc:'A 2-hour golden-hour shoot with a Prague professional photographer in the most photogenic streets and courtyards of the Old Town and Malá Strana.',dur:'2 hrs',grp:'1–6 people',price:120,img:'https://images.pexels.com/photos/11388583/pexels-photo-11388583.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'glass',name:'Czech Glass Blowing Workshop',desc:'Create your own Bohemian glass souvenir under expert guidance at a working glassworks studio in Žižkov. No experience required.',dur:'2 hrs',grp:'1–8 people',price:75,img:'https://images.pexels.com/photos/3182105/pexels-photo-3182105.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'mucha-workshop',name:'Art Nouveau Illustration Workshop',desc:'Inspired by Mucha himself. Learn Art Nouveau design techniques in a studio beside the Mucha Museum and take home your original artwork.',dur:'2.5 hrs',grp:'2–8 people',price:55,img:'https://images.pexels.com/photos/18501015/pexels-photo-18501015.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
  ]},
  {cat:'daytrip', catLabel:'Day Trips', icon:'<iconify-icon icon="tabler:bus" style="font-size:28px;color:#C9A84C"></iconify-icon>',
   items:[
    {id:'krumlov',name:'Český Krumlov Day Trip',desc:'UNESCO World Heritage town. A fairy-tale castle, medieval old town, and Vltava river valley. Small-group minivan, licensed guide, lunch included.',dur:'10 hrs',grp:'2–8 people',price:115,img:'https://images.pexels.com/photos/17911110/pexels-photo-17911110.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'kutna',name:'Kutná Hora & Bone Church',desc:'The hauntingly beautiful Sedlec Ossuary, the magnificent St Barbara\'s Cathedral, and the silver mining history that built the Czech kingdom.',dur:'8 hrs',grp:'2–12 people',price:89,img:'https://images.pexels.com/photos/2733267/pexels-photo-2733267.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'karlstejn',name:'Karlštejn Castle Hike',desc:'Hike through cherry-tree orchards to the most famous castle in Bohemia. Private guide, small group, authentic Czech lunch in the village.',dur:'7 hrs',grp:'2–8 people',price:79,img:'https://images.pexels.com/photos/9979602/pexels-photo-9979602.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'terezin',name:'Terezín Memorial Visit',desc:'A deeply moving guided visit to Terezín Fortress. An essential part of understanding Central European 20th-century history, with an expert historian guide.',dur:'6 hrs',grp:'2–15 people',price:69,img:'assets/extras/terezin-memorial.jpg'},
  ]},
  {cat:'adventure', catLabel:'Adventure', icon:'<iconify-icon icon="tabler:bolt" style="font-size:28px;color:#C9A84C"></iconify-icon>',
   items:[
    {id:'helicopter',name:'Prague Helicopter Flight',desc:'15 minutes above Prague. Charles Bridge, Prague Castle, Vyšehrad, and the Vltava river all visible from 300 metres up. An experience nobody forgets.',dur:'30 mins total',grp:'1–3 people',price:249,img:'https://images.pexels.com/photos/5848239/pexels-photo-5848239.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'segway',name:'Segway City Tour',desc:'Cover twice the ground in half the time. A 2-hour Segway tour through Prague\'s most scenic streets with a small group and expert guide.',dur:'2 hrs',grp:'2–10 people',price:55,img:'https://images.pexels.com/photos/13019654/pexels-photo-13019654.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'ebike',name:'E-Bike Day Rental',desc:'The best way to explore Prague independently. A quality e-bike with map, lock, helmet, and route suggestions tailored to your interests.',dur:'Full day',grp:'1–6 people',price:35,img:'https://images.pexels.com/photos/2248713/pexels-photo-2248713.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
    {id:'escape',name:'Private Escape Room',desc:'A custom 75-minute private escape room experience in a historic Prague cellar — teams of 2 to 10. One of Prague\'s highest-rated puzzle experiences.',dur:'75 min',grp:'2–10 people',price:28,img:'https://images.pexels.com/photos/18800112/pexels-photo-18800112.jpeg?auto=compress&cs=tinysrgb&w=600&q=80'},
  ]},
];

const cart = {};
let activeFilter = 'all';

function getLangT() {
  const lang = document.documentElement.lang || 'en';
  return { lang, t: (typeof T !== 'undefined' && T[lang]) ? T[lang] : (typeof T !== 'undefined' ? T.en : {}) };
}

function filterCountText(n, lang) {
  if (lang === 'he') return n + ' חוויות';
  if (lang === 'cs') return n + ' zážitků';
  return n + ' experience' + (n !== 1 ? 's' : '');
}

function renderCatalogue() {
  const { lang, t } = getLangT();
  const container = document.getElementById('exCatalogue');
  container.innerHTML = '';
  let total = 0;

  EXTRAS_DATA.forEach(cat => {
    const items = cat.items.filter(i => activeFilter === 'all' || cat.cat === activeFilter);
    if (!items.length) return;
    total += items.length;
    const catLabel = t['ex.cat.' + cat.cat] || cat.catLabel;
    const perPerson = t['ex.card.per.person'] || 'per person';
    const addLabel = t['ex.card.add'] || 'Add';
    const addedLabel = t['ex.card.added'] || 'Added';

    const sec = document.createElement('div');
    sec.className = 'ex-section';
    sec.innerHTML = `
      <div class="ex-cat-title reveal">
        <span class="ex-cat-icon">${cat.icon}</span>
        <div class="ex-cat-label">${catLabel}</div>
        <div class="ex-cat-line"></div>
      </div>
      <div class="ex-grid">
        ${items.map(item => `
          <div class="ex-card reveal" data-id="${item.id}">
            <img class="ex-card-img" src="${item.img}" alt="${item.name}" loading="lazy"/>
            <div class="ex-card-body">
              <div class="ex-card-badges">
                <span class="ex-badge ex-badge-cat">${catLabel}</span>
                <span class="ex-badge ex-badge-dur"><iconify-icon icon="tabler:clock" style="font-size:12px;color:currentColor"></iconify-icon> ${item.dur}</span>
                <span class="ex-badge ex-badge-grp"><lord-icon src="https://cdn.lordicon.com/dxjqoygy.json" trigger="hover" colors="primary:#C9A84C" style="width:12px;height:12px"></lord-icon> ${item.grp}</span>
              </div>
              <div class="ex-card-name">${item.name}</div>
              <p class="ex-card-desc">${item.desc}</p>
              <div class="ex-card-footer">
                <div class="ex-card-price">
                  €${item.price}
                  <small>${perPerson}</small>
                </div>
                <button class="ex-card-add ${cart[item.id] ? 'added' : ''}"
                  onclick="toggleCart('${item.id}','${item.name}',${item.price})"
                  id="add-${item.id}">
                  ${cart[item.id] ? addedLabel : addLabel}
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(sec);
  });

  document.getElementById('filterCount').textContent = filterCountText(total, lang);
  initReveal();
}

function toggleCart(id, name, price) {
  if (cart[id]) {
    delete cart[id];
  } else {
    cart[id] = { name, price };
  }
  updateCartUI();
  const btn = document.getElementById('add-' + id);
  if (btn) {
    const { t } = getLangT();
    btn.textContent = cart[id] ? (t['ex.card.added'] || 'Added') : (t['ex.card.add'] || 'Add');
    btn.classList.toggle('added', !!cart[id]);
  }
}

function updateCartUI() {
  const items = Object.values(cart);
  const total = items.reduce((s, i) => s + i.price, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = items.length;
  badge.classList.toggle('show', items.length > 0);

  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const totalEl = document.getElementById('cartTotal');
  const checkoutEl = document.getElementById('cartCheckout');
  const totalPriceEl = document.getElementById('cartTotalPrice');

  if (items.length === 0) {
    itemsEl.innerHTML = '';
    itemsEl.appendChild(emptyEl);
    emptyEl.style.display = '';
    totalEl.style.display = 'none';
    checkoutEl.style.display = 'none';
  } else {
    emptyEl.style.display = 'none';
    itemsEl.innerHTML = Object.entries(cart).map(([id, item]) => `
      <div class="ex-cart-item">
        <span class="ex-cart-item-name">${item.name}</span>
        <span class="ex-cart-item-price">€${item.price}</span>
        <button class="ex-cart-item-remove" onclick="toggleCart('${id}','${item.name}',${item.price})">×</button>
      </div>
    `).join('');
    totalEl.style.display = 'flex';
    checkoutEl.style.display = 'block';
    totalPriceEl.textContent = '€' + total;
  }
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal:not(.vis)').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCatalogue();

  document.querySelectorAll('.ex-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ex-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderCatalogue();
    });
  });

  document.addEventListener('click', e => {
    const langBtn = e.target.closest('[data-lang]');
    if (langBtn && typeof T !== 'undefined' && T[langBtn.dataset.lang]) {
      setTimeout(renderCatalogue, 0);
    }
  });

  document.getElementById('cartToggle').addEventListener('click', () => {
    document.getElementById('extrasCart').classList.toggle('open');
  });
  document.getElementById('cartClose').addEventListener('click', () => {
    document.getElementById('extrasCart').classList.remove('open');
  });
  document.getElementById('cartCheckout').addEventListener('click', () => {
    const { t } = getLangT();
    alert(t['ex.checkout.alert'] || 'Your extras request has been sent to your concierge. They will confirm availability and arrange payment at check-in.');
  });
});
