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

function showResult() {
  const opts = document.querySelectorAll('#step3 .quiz-opt');
  const val = [...opts].find(o => o.classList.contains('chosen'));
  if (!val) return;
  answers.q3 = val.dataset.val;

  const lang = document.documentElement.lang || 'en';
  const t = (typeof T !== 'undefined' && T[lang]) ? T[lang] : (typeof T !== 'undefined' ? T.en : {});

  const passion = answers.q0 || 'culture';
  const profile = PROFILES[passion];

  document.getElementById('resultIcon').innerHTML = profile.icon;
  document.getElementById('resultType').textContent = t['byp.profile.' + passion + '.type'] || passion;
  document.getElementById('resultDesc').textContent = t['byp.profile.' + passion + '.desc'] || '';
  document.getElementById('resultIntro').textContent = t['byp.result.intro'] || 'Based on your answers, here\'s a Prague day designed entirely around what you love most.';

  const iEl = document.getElementById('resultItinerary');
  iEl.innerHTML = [1,2,3].map(n => {
    const label = t['byp.it.' + passion + '.d' + n + '.label'] || '';
    const title = t['byp.it.' + passion + '.d' + n + '.title'] || '';
    const desc  = t['byp.it.' + passion + '.d' + n + '.desc']  || '';
    return `<div class="result-day">
      <div class="result-day-label">${label}</div>
      <div class="result-day-title">${title}</div>
      <p class="result-day-desc">${desc}</p>
    </div>`;
  }).join('');

  document.querySelector('.quiz-wrap').style.display = 'none';
  const rs = document.getElementById('resultSection');
  rs.style.display = 'block';
  rs.scrollIntoView({ behavior: 'smooth', block: 'start' });
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