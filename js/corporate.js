document.addEventListener('DOMContentLoaded', () => {
  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, { threshold: 0.09 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Programme builder */
  const selected = {};
  document.querySelectorAll('.co-module').forEach(mod => {
    mod.addEventListener('click', () => {
      const name = mod.dataset.name;
      const price = parseInt(mod.dataset.price);
      if (selected[name]) {
        delete selected[name];
        mod.classList.remove('selected');
      } else {
        selected[name] = price;
        mod.classList.add('selected');
      }
      updateSummary();
    });
  });

  function updateSummary() {
    const items = Object.entries(selected);
    const total = items.reduce((s, [, p]) => s + p, 0);
    const empty = document.getElementById('summaryEmpty');
    const itemsEl = document.getElementById('summaryItems');
    const totalEl = document.getElementById('summaryTotal');
    const priceEl = document.getElementById('summaryPrice');
    const quoteBtn = document.getElementById('summaryQuote');

    if (items.length === 0) {
      itemsEl.innerHTML = '';
      itemsEl.appendChild(empty);
      empty.style.display = '';
      totalEl.style.display = 'none';
      quoteBtn.style.display = 'none';
    } else {
      empty.style.display = 'none';
      itemsEl.innerHTML = items.map(([name, price]) => `
        <div class="co-summary-item">
          <span>${name}</span>
          <span>€${price}/pp</span>
        </div>
      `).join('');
      totalEl.style.display = 'flex';
      quoteBtn.style.display = 'block';
      priceEl.innerHTML = `€${total}<small style="font-family:var(--fb);font-size:.65rem;color:var(--grey)">/pp</small>`;
    }
  }

  document.getElementById('summaryQuote').addEventListener('click', () => {
    const lang = document.documentElement.lang || 'en';
    const msgs = {
      en: 'Quote request sent. A corporate coordinator will contact you within 48 hours with pricing for your group size and preferred dates.',
      he: 'בקשת הצעת מחיר נשלחה. רכז תאגידי ייצור אתכם קשר תוך 48 שעות עם תמחור עבור גודל הקבוצה ותאריכים מועדפים.',
      cs: 'Žádost o nabídku odeslána. Firemní koordinátor vás bude kontaktovat do 48 hodin s cenovou nabídkou pro váš počet osob a preferovaná data.'
    };
    alert(msgs[lang] || msgs.en);
  });
});