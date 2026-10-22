/* ============================================
   PYTHON — App Logic
   Handles both:
     - index.html (list page)
     - exercise.html?slug=X (detail page)
   ============================================ */

// ============ CONFIG ============
const SITE_URL = 'https://kodrah.ir';

// ============ HELPERS ============
function esc(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function escAttr(str) {
  return esc(str);
}

function setMeta(attrType, attrName, content) {
  const selector = 'meta[' + attrType + '="' + attrName + '"]';
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrType, attrName);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function isDataReady() {
  return typeof pythonExercises !== 'undefined' && Array.isArray(pythonExercises) && pythonExercises.length > 0;
}

// ============ PRELOADER ============
(function initPreloader() {
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
      setTimeout(function () {
        if (loader.parentNode) loader.remove();
      }, 600);
    }
    document.body.classList.remove('loading');
    document.body.style.overflow = '';
    document.body.style.height = '';
  }

  if (document.readyState === 'complete') {
    setTimeout(hide, Math.max(0, MIN - (Date.now() - start)));
  } else {
    window.addEventListener('load', function () {
      setTimeout(hide, Math.max(0, MIN - (Date.now() - start)));
    });
  }
  setTimeout(hide, 1800);
})();

// ============ LIST PAGE (index.html) ============
function initListPage() {
  const grid = document.getElementById('exercises-grid');
  if (!grid) return;

  if (!isDataReady()) {
    grid.innerHTML = '<div class="empty"><p>داده‌ها بارگذاری نشد.</p></div>';
    return;
  }

  const emptyState = document.getElementById('empty-state');

  function renderGrid(filter) {
    const list = filter === 'all'
      ? pythonExercises
      : pythonExercises.filter(function (e) { return e.level === filter; });

    if (list.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }
    if (emptyState) emptyState.style.display = 'none';

    grid.innerHTML = list.map(function (ex) {
      return (
        '<a class="card" href="exercise.html?slug=' + encodeURIComponent(ex.slug) + '" data-level="' + escAttr(ex.level) + '">' +
          '<div class="card-icon">' + (ex.icon || '🐍') + '</div>' +
          '<h3>' + esc(ex.title) + '</h3>' +
          '<p>' + esc(ex.description) + '</p>' +
          '<div class="card-meta">' +
            '<span class="badge">' + esc(ex.level) + '</span>' +
            '<span class="arrow">مشاهده ←</span>' +
          '</div>' +
        '</a>'
      );
    }).join('');
  }

  renderGrid('all');

  const filterBar = document.getElementById('filter-bar');
  if (filterBar) {
    filterBar.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderGrid(btn.dataset.filter);
    });
  }
}

// ============ EXERCISE PAGE (exercise.html?slug=X) ============
function initExercisePage() {
  const app = document.getElementById('app');
  if (!app) return;

  if (!isDataReady()) {
    app.innerHTML = '<div class="container"><div class="empty"><p>داده‌ها بارگذاری نشد.</p></div></div>';
    return;
  }

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');
  const ex = pythonExercises.find(function (e) { return e.slug === slug; });

  if (!ex) {
    app.innerHTML =
      '<div class="container">' +
        '<div class="empty" style="padding:80px 20px">' +
          '<h2>تمرین پیدا نشد</h2>' +
          '<p>تمرینی با این شناسه وجود ندارد.</p>' +
          '<a href="./" class="solution-toggle" style="display:inline-flex;margin-top:20px;padding:12px 22px;text-decoration:none;width:auto">بازگشت به لیست تمرین‌ها</a>' +
        '</div>' +
      '</div>';
    return;
  }

  // SEO
  updateSEO(ex);

  // Prepare HTML
  const statement = esc(ex.statement).replace(/\n/g, '<br>');
  const hintsHtml = (ex.hints && ex.hints.length)
    ? '<div class="exercise-block">' +
        '<h2>راهنمایی</h2>' +
        '<ol class="hints-list">' +
          ex.hints.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') +
        '</ol>' +
      '</div>'
    : '';

  // Render
  app.innerHTML =
    '<div class="container container-narrow">' +
      '<div class="breadcrumb">' +
        '<a href="/">خانه</a>' +
        '<span class="sep">/</span>' +
        '<a href="./">تمرین پایتون</a>' +
        '<span class="sep">/</span>' +
        '<span>' + esc(ex.title) + '</span>' +
      '</div>' +

      '<div class="exercise-title-block">' +
        '<div class="badges">' +
          '<span class="badge">' + esc(ex.level) + '</span>' +
          '<span class="badge badge-green">' + esc(ex.category) + '</span>' +
        '</div>' +
        '<h1>' + (ex.icon || '🐍') + ' ' + esc(ex.title) + '</h1>' +
        '<p>' + esc(ex.description) + '</p>' +
      '</div>' +

      '<div class="exercise-block">' +
        '<h2>صورت مسئله</h2>' +
        '<p>' + statement + '</p>' +
      '</div>' +

      '<div class="exercise-block">' +
        '<h2>نمونه ورودی و خروجی</h2>' +
        '<div class="io-row">' +
          '<div class="io-box">' +
            '<span class="io-label">ورودی نمونه</span>' +
            '<div class="io-value">' + esc(ex.input) + '</div>' +
          '</div>' +
          '<div class="io-box">' +
            '<span class="io-label">خروجی مطلوب</span>' +
            '<div class="io-value">' + esc(ex.output) + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      hintsHtml +

      '<button class="solution-toggle warning" type="button" id="solution-toggle">' +
        '🔒 نمایش راه‌حل — قبلش خودت تلاش کن!' +
      '</button>' +

      '<div class="solution-wrapper" id="solution-wrapper">' +
        '<div class="exercise-block">' +
          '<h2>راه‌حل کامل</h2>' +
          '<div class="code-wrapper">' +
            '<button class="code-copy" type="button" id="copy-solution">کپی کد</button>' +
            '<pre class="code-block"><code id="solution-code">' + esc(ex.solution) + '</code></pre>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="exercise-back">' +
        '<a href="./" class="solution-toggle" style="text-decoration:none">← بازگشت به لیست تمرین‌ها</a>' +
      '</div>' +
    '</div>';

  // Solution toggle
  const toggleBtn = document.getElementById('solution-toggle');
  const wrapper = document.getElementById('solution-wrapper');
  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener('click', function () {
      wrapper.classList.add('show');
      toggleBtn.style.display = 'none';
    });
  }

  // Copy button
  const copyBtn = document.getElementById('copy-solution');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const codeEl = document.getElementById('solution-code');
      if (!codeEl) return;
      const text = codeEl.textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          const original = copyBtn.textContent;
          copyBtn.textContent = 'کپی شد ✓';
          setTimeout(function () {
            copyBtn.textContent = original;
          }, 2000);
        }).catch(function () {});
      }
    });
  }
}

// ============ SEO (Exercise) ============
function updateSEO(ex) {
  const title = ex.title + ' | تمرین پایتون | کدراه';
  const desc = ex.description + ' — تمرین پایتون سطح ' + ex.level + ' با راه‌حل کامل.';
  const path = '/python/exercise.html?slug=' + ex.slug;

  document.title = title;

  setMeta('name', 'description', desc);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:url', SITE_URL + path);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', desc);

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', SITE_URL + path);
  }

  const schema = document.getElementById('exercise-schema');
  if (schema) {
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      'name': ex.title,
      'description': ex.description,
      'inLanguage': 'fa-IR',
      'learningResourceType': 'Exercise',
      'educationalLevel': ex.level,
      'teaches': ex.category,
      'provider': {
        '@type': 'Organization',
        'name': 'کدراه',
        'url': SITE_URL
      }
    });
  }
}

// ============ INIT ============
initListPage();
initExercisePage();