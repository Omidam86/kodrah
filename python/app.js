// ============ THEME ============
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('kodrah-theme', theme); } catch (e) {}
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

function bindThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const fresh = btn.cloneNode(true);
  btn.parentNode.replaceChild(fresh, btn);
  fresh.addEventListener('click', function (e) {
    e.preventDefault();
    toggleTheme();
  });
}

// ============ HELPERS ============
function esc(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function showToast(text) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    t.innerHTML = '<span class="dot"></span><span id="toast-text"></span>';
    document.body.appendChild(t);
  }
  document.getElementById('toast-text').textContent = text;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ============ PRELOADER ============
function initPreloader() {
  document.body.classList.add('loading');
  const MIN = 600;
  const start = Date.now();
  let done = false;

  function hide() {
    if (done) return;
    done = true;
    const loader = document.getElementById('preloader');
    if (loader) {
      loader.classList.add('hide');
      setTimeout(() => { if (loader.parentNode) loader.remove(); }, 600);
    }
    document.body.classList.remove('loading');
    document.body.style.overflow = '';
    document.body.style.height = '';
  }

  if (document.readyState === 'complete') {
    setTimeout(hide, Math.max(0, MIN - (Date.now() - start)));
  } else {
    window.addEventListener('load', () => {
      setTimeout(hide, Math.max(0, MIN - (Date.now() - start)));
    });
  }
  setTimeout(hide, 1800);
}

// ============ LIST PAGE ============
function initListPage() {
  const grid = document.getElementById('exercises-grid');
  if (!grid) return;
  if (typeof pythonExercises === 'undefined') {
    grid.innerHTML = '<div class="empty"><p>داده‌ها بارگذاری نشد.</p></div>';
    return;
  }

  const emptyState = document.getElementById('empty-state');

  function renderGrid(filter) {
    const list = filter === 'all'
      ? pythonExercises
      : pythonExercises.filter(e => e.level === filter);

    if (list.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }
    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = list.map(ex => `
      <a class="card" href="exercise.html?slug=${encodeURIComponent(ex.slug)}">
        <div class="card-icon">${ex.icon || '🐍'}</div>
        <h3>${esc(ex.title)}</h3>
        <p>${esc(ex.description)}</p>
        <div class="card-meta">
          <span class="badge">${esc(ex.level)}</span>
          <span class="arrow">مشاهده ←</span>
        </div>
      </a>
    `).join('');
  }

  renderGrid('all');

  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.filter);
    });
  }
}

// ============ EXERCISE PAGE ============
function initExercisePage() {
  const app = document.getElementById('app');
  if (!app) return;
  if (typeof pythonExercises === 'undefined') {
    app.innerHTML = '<div class="container"><div class="empty"><p>داده‌ها بارگذاری نشد.</p></div></div>';
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const ex = pythonExercises.find(e => e.slug === slug);

  if (!ex) {
    app.innerHTML = `
      <div class="container">
        <div class="empty" style="padding:80px 20px;">
          <h2 style="font-weight:700;margin-bottom:8px;">تمرین پیدا نشد</h2>
          <p>تمرینی با این شناسه وجود ندارد.</p>
          <a href="./" class="solution-toggle" style="display:inline-flex;margin-top:20px;padding:12px 22px;text-decoration:none;">بازگشت به لیست تمرین‌ها</a>
        </div>
      </div>
    `;
    return;
  }

  // SEO
  const pageTitle = ex.title + ' | تمرین پایتون | کدراه';
  const pageDesc = ex.description + ' — تمرین پایتون سطح ' + ex.level + ' با راه‌حل کامل.';
  document.title = pageTitle;

  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', pageDesc);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', 'https://kodrah.ir/python/exercise.html?slug=' + ex.slug);
  }

  // Update structured data
  const schema = document.getElementById('exercise-schema');
  if (schema) {
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": ex.title,
      "description": ex.description,
      "inLanguage": "fa-IR",
      "learningResourceType": "Exercise",
      "educationalLevel": ex.level,
      "teaches": ex.category,
      "provider": {
        "@type": "Organization",
        "name": "کدراه",
        "url": "https://kodrah.ir/"
      }
    });
  }

  app.innerHTML = `
    <div class="container container-narrow">
      <div class="breadcrumb">
        <a href="/">خانه</a>
        <span class="sep">/</span>
        <a href="./">تمرین پایتون</a>
        <span class="sep">/</span>
        <span>${esc(ex.title)}</span>
      </div>

      <div class="exercise-title-block">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
          <span class="badge">${esc(ex.level)}</span>
          <span class="badge badge-green">${esc(ex.category)}</span>
        </div>
        <h1>${ex.icon || '🐍'} ${esc(ex.title)}</h1>
        <p>${esc(ex.description)}</p>
      </div>

      <div class="exercise-block">
        <h2>صورت مسئله</h2>
        <p>${esc(ex.statement)}</p>
      </div>

      <div class="exercise-block">
        <h2>نمونه ورودی و خروجی</h2>
        <div class="io-row">
          <div class="io-box">
            <span class="io-label">ورودی نمونه</span>
            <div class="io-value">${esc(ex.input)}</div>
          </div>
          <div class="io-box">
            <span class="io-label">خروجی مطلوب</span>
            <div class="io-value">${esc(ex.output)}</div>
          </div>
        </div>
      </div>

      ${ex.hints && ex.hints.length ? `
        <div class="exercise-block">
          <h2>راهنمایی</h2>
          <ol class="hints-list">
            ${ex.hints.map(h => '<li>' + esc(h) + '</li>').join('')}
          </ol>
        </div>
      ` : ''}

      <button class="solution-toggle warning" id="solution-toggle" type="button">
        🔒 نمایش راه‌حل — قبلش خودت تلاش کن!
      </button>

      <div class="solution-wrapper" id="solution-wrapper">
        <div class="exercise-block">
          <h2>راه‌حل کامل</h2>
          <div class="code-wrapper">
            <button class="code-copy" type="button" id="copy-solution">کپی کد</button>
            <pre class="code-block"><code id="solution-code">${esc(ex.solution)}</code></pre>
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:center;padding:20px 0 40px">
        <a href="./" class="solution-toggle" style="text-decoration:none;">← بازگشت به لیست تمرین‌ها</a>
      </div>
    </div>
  `;

  // Toggle solution
  const toggleBtn = document.getElementById('solution-toggle');
  const wrapper = document.getElementById('solution-wrapper');
  toggleBtn.addEventListener('click', () => {
    wrapper.classList.add('show');
    toggleBtn.style.display = 'none';
  });

  // Copy solution
  const copyBtn = document.getElementById('copy-solution');
  copyBtn.addEventListener('click', () => {
    const code = document.getElementById('solution-code');
    if (code && navigator.clipboard) {
      navigator.clipboard.writeText(code.textContent)
        .then(() => showToast('کد راه‌حل کپی شد'))
        .catch(() => showToast('کپی نشد'));
    }
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  bindThemeToggle();
  initPreloader();
  initListPage();
  initExercisePage();
});
