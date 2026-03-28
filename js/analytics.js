/* Monthly bar chart data, projected Year 1 */
const MONTHLY = [
  {m:'Jan', v:65000, proj:true},
  {m:'Feb', v:77000, proj:true},
  {m:'Mar', v:104000, proj:true},
  {m:'Apr', v:141000, proj:true},
  {m:'May', v:162000, proj:true},
  {m:'Jun', v:182000, proj:true},
  {m:'Jul', v:200000, proj:true},
  {m:'Aug', v:192000, proj:true},
  {m:'Sep', v:170000, proj:true},
  {m:'Oct', v:146000, proj:true},
  {m:'Nov', v:124000, proj:true},
  {m:'Dec', v:175000, proj:true},
];
const MAX_V = Math.max(...MONTHLY.map(d => d.v));

document.addEventListener('DOMContentLoaded', () => {
  const chart = document.getElementById('monthlyChart');
  MONTHLY.forEach(d => {
    const col = document.createElement('div');
    col.className = 'an-bar-col';
    const pct = Math.round(d.v / MAX_V * 100);
    col.innerHTML = `
      <div class="an-bar-val">€${d.v >= 1000000 ? (d.v/1000000).toFixed(1)+'M' : Math.round(d.v/1000)+'K'}</div>
      <div class="an-bar-wrap">
        <div class="an-bar${d.proj ? ' projected' : ''}" style="height:0" data-h="${pct}%"></div>
      </div>
      <div class="an-bar-label">${d.m}</div>
    `;
    chart.appendChild(col);
  });

  /* Scroll reveal */
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  /* Animate bars when chart comes into view */
  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.an-bar').forEach((bar, i) => {
          setTimeout(() => {
            bar.style.height = bar.dataset.h;
          }, i * 60);
        });
        barObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const chartEl = document.getElementById('monthlyChart');
  if (chartEl) barObs.observe(chartEl);
});