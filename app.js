// ============ CONFIG ============
const SITE_URL = 'https://kodrah.ir';
const FALLBACK_OG_IMAGE = 'https://kodrah.ir/logo.png';

// ============ THEME ============
(function initTheme() {
  try {
    const saved = localStorage.getItem('kodrah-theme');
    document.documentElement.setAttribute('data-theme', saved || 'light');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  updateThemeButton();
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('kodrah-theme', next); } catch (e) {}
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const theme = document.documentElement.getAttribute('data-theme');
  btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
}

// ============ SEO ============
const DEFAULT_TITLE = 'کدراه | نقشه راه برنامه‌نویسی از صفر تا پیشرفته';
const DEFAULT_DESC = 'کدراه (کد راه) پلتفرم آموزشی برنامه‌نویسی؛ نقشه راه‌های کامل وب، شبکه و امنیت با دوره‌های اختصاصی.';

function setMetaByName(name, content) {
  let el = document.querySelector('meta[name="' + name + '"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(prop, content) {
  let el = document.querySelector('meta[property="' + prop + '"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', prop);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setSEO(title, description, path, image) {
  document.title = title;
  const ogImage = image || FALLBACK_OG_IMAGE;
  setMetaByName('description', description);
  setMetaByProperty('og:title', title);
  setMetaByProperty('og:description', description);
  setMetaByProperty('og:url', SITE_URL + path);
  setMetaByProperty('og:image', ogImage);
  setMetaByName('twitter:title', title);
  setMetaByName('twitter:description', description);
  setMetaByName('twitter:image', ogImage);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', SITE_URL + path);
}

// ============ HELPERS ============
function escapeAttr(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtml(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function isDataReady() {
  return typeof roadmaps !== 'undefined' && Array.isArray(roadmaps) && roadmaps.length > 0;
}

// ============ RENDER ============
const app = document.getElementById('app');

function renderDataError() {
  document.title = 'خطا | کدراه';
  app.innerHTML = `
    <div class="container">
      <div class="empty">
        <h2>مشکلی پیش آمد</h2>
        <p>داده‌های سایت بارگذاری نشد. لطفاً صفحه را دوباره باز کنید.</p>
        <button class="btn btn-primary" style="margin-top:20px" onclick="location.reload()">بارگذاری مجدد</button>
      </div>
    </div>
  `;
}

function renderHome() {
  setSEO(DEFAULT_TITLE, DEFAULT_DESC, '/');
  app.innerHTML = `
    <section class="hero">
      <div class="container">
        <h1>مسیرت رو در دنیای<br><span class="grad">برنامه‌نویسی</span> پیدا کن</h1>
        <p>نمی‌دونی از کجا شروع کنی؟ اینجا هر مسیر یادگیری، دوره اختصاصی خودش رو داره.</p>
        <a href="/roadmaps" data-link class="btn btn-primary">مشاهده نقشه راه‌ها</a>
      </div>
    </section>
    <section class="container">
      <div class="features">
        <div class="feature"><div class="icon">🧭</div><h3>مسیر شفاف</h3><p>هر نقشه راه نشون می‌ده از کجا شروع کنی و به کجا برسی.</p></div>
        <div class="feature"><div class="icon">📚</div><h3>دوره‌های اختصاصی</h3><p>هر مسیر، دوره‌های مخصوص خودش رو داره؛ از مقدماتی تا پیشرفته.</p></div>
        <div class="feature"><div class="icon">🎯</div><h3>بدون سردرگمی</h3><p>دیگه لازم نیست بپرسی «از کجا شروع کنم؟»؛ همه چیز آماده‌ست.</p></div>
      </div>
    </section>
  `;
}

function renderRoadmaps() {
  setSEO(
    'نقشه راه‌های برنامه‌نویسی | کدراه',
    'لیست کامل نقشه راه‌های کدراه: مبانی برنامه‌نویسی، وب، شبکه و امنیت با دوره‌های اختصاصی.',
    '/roadmaps'
  );
  app.innerHTML = `
    <section class="page-header">
      <div class="container"><h1>نقشه راه‌ها</h1><p>مسیرت رو انتخاب کن و شروع کن</p></div>
    </section>
    <section class="section">
      <div class="container">
        <div class="grid">
          ${roadmaps.map(r => {
            const totalCourses = r.sections.reduce((s, sec) => s + sec.courses.length, 0);
            return `
              <a class="card" href="/roadmaps/${escapeAttr(r.slug)}" data-link>
                <div class="card-icon">${r.icon}</div>
                <h3>${escapeHtml(r.title)}</h3>
                <p>${escapeHtml(r.description)}</p>
                <div class="card-meta">
                  <span>${r.sections.length} بخش • ${totalCourses} دوره</span>
                  <span class="arrow">مشاهده ←</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderRoadmap(slug) {
  const roadmap = roadmaps.find(r => r.slug === slug);
  if (!roadmap) return renderNotFound();

  setSEO(
    roadmap.title + ' | کدراه',
    'نقشه راه ' + roadmap.title + ' در کدراه: ' + roadmap.description,
    '/roadmaps/' + slug
  );

  const prereqHtml = roadmap.prerequisite ? `
    <div class="prereq-note">
      <span class="prereq-icon">⚠️</span>
      <div>
        <strong>پیش‌نیاز</strong>
        <p>${escapeHtml(roadmap.prerequisite.text)}
          <a href="/roadmaps/${escapeAttr(roadmap.prerequisite.link)}" data-link>${escapeHtml(roadmap.prerequisite.linkText)}</a>
        </p>
      </div>
    </div>
  ` : '';

  app.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="/" data-link>خانه</a>
        <span class="sep">/</span>
        <a href="/roadmaps" data-link>نقشه راه‌ها</a>
        <span class="sep">/</span>
        <span>${escapeHtml(roadmap.title)}</span>
      </div>
      <div class="page-header" style="text-align:right;padding:10px 0 26px">
        <h1>${roadmap.icon} ${escapeHtml(roadmap.title)}</h1>
        <p>${escapeHtml(roadmap.description)}</p>
      </div>
      ${prereqHtml}
      <div style="display:flex;flex-direction:column;gap:12px;padding-bottom:60px">
        ${roadmap.sections.map((sec, i) => `
          <a class="section-card" href="/roadmaps/${escapeAttr(roadmap.slug)}/${escapeAttr(sec.slug)}" data-link>
            <div class="sc-num">${i + 1}</div>
            <div class="sc-content">
              <h3>${escapeHtml(sec.title)}</h3>
              <div class="sc-meta">
                <span>${sec.courses.length} دوره</span>
              </div>
            </div>
            <div class="sc-arrow">←</div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSection(rSlug, sSlug) {
  const roadmap = roadmaps.find(r => r.slug === rSlug);
  const section = roadmap?.sections.find(s => s.slug === sSlug);
  if (!roadmap || !section) return renderNotFound();

  setSEO(
    section.title + ' - ' + roadmap.title + ' | کدراه',
    section.courses.length + ' دوره در بخش ' + section.title + ' از مسیر ' + roadmap.title + '.',
    '/roadmaps/' + rSlug + '/' + sSlug
  );

  app.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="/" data-link>خانه</a>
        <span class="sep">/</span>
        <a href="/roadmaps" data-link>نقشه راه‌ها</a>
        <span class="sep">/</span>
        <a href="/roadmaps/${escapeAttr(roadmap.slug)}" data-link>${escapeHtml(roadmap.title)}</a>
        <span class="sep">/</span>
        <span>${escapeHtml(section.title)}</span>
      </div>
      <div class="page-header" style="text-align:right;padding:10px 0 26px">
        <h1>${escapeHtml(section.title)}</h1>
        <p>${section.courses.length} دوره در این بخش</p>
      </div>
      <div style="padding-bottom:60px">
        ${section.courses.map(c => `
          <div class="course-card">
            <div>
              <h4>${escapeHtml(c.title)}</h4>
              <div class="meta">
                <span class="badge">${escapeHtml(c.level)}</span>
                <span>${escapeHtml(c.duration)}</span>
                <span>${escapeHtml(c.price)}</span>
              </div>
            </div>
            <a href="/roadmaps/${escapeAttr(roadmap.slug)}/${escapeAttr(section.slug)}/${escapeAttr(c.slug)}" data-link class="btn btn-primary btn-sm">مشاهده</a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCourse(rSlug, sSlug, cSlug) {
  const roadmap = roadmaps.find(r => r.slug === rSlug);
  const section = roadmap?.sections.find(s => s.slug === sSlug);
  const course = section?.courses.find(c => c.slug === cSlug);
  if (!roadmap || !section || !course) return renderNotFound();

  setSEO(
    course.title + ' | ' + roadmap.title + ' | کدراه',
    course.description.slice(0, 155),
    '/roadmaps/' + rSlug + '/' + sSlug + '/' + cSlug
  );

  injectCourseSchema(course);

  app.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="/" data-link>خانه</a>
        <span class="sep">/</span>
        <a href="/roadmaps" data-link>نقشه راه‌ها</a>
        <span class="sep">/</span>
        <a href="/roadmaps/${escapeAttr(roadmap.slug)}" data-link>${escapeHtml(roadmap.title)}</a>
        <span class="sep">/</span>
        <a href="/roadmaps/${escapeAttr(roadmap.slug)}/${escapeAttr(section.slug)}" data-link>${escapeHtml(section.title)}</a>
        <span class="sep">/</span>
        <span>${escapeHtml(course.title)}</span>
      </div>
      <div class="course-detail">
        <div class="course-main">
          <h1>${escapeHtml(course.title)}</h1>
          <div style="margin-bottom:22px;display:flex;gap:8px;flex-wrap:wrap">
            <span class="badge">${escapeHtml(course.level)}</span>
            <span class="badge badge-green">${escapeHtml(section.title)}</span>
          </div>
          <p>${escapeHtml(course.description)}</p>
          <h2>سرفصل‌ها</h2>
          <ul>${course.topics.map(t => '<li>' + escapeHtml(t) + '</li>').join('')}</ul>
        </div>
        <aside class="course-side">
          <div class="price">${escapeHtml(course.price)}</div>
          <div class="price-sub">دسترسی دائمی + پشتیبانی</div>
          <button class="btn btn-primary" type="button" data-buy data-course="${escapeAttr(course.title)}" data-price="${escapeAttr(course.price)}">خرید دوره</button>
          <hr>
          <div class="info-row"><span>سطح</span><span>${escapeHtml(course.level)}</span></div>
          <div class="info-row"><span>مدت</span><span>${escapeHtml(course.duration)}</span></div>
          <div class="info-row"><span>فرمت</span><span>ویدیو + تمرین</span></div>
        </aside>
      </div>
    </div>
  `;
}

function injectCourseSchema(course) {
  const old = document.getElementById('course-schema');
  if (old) old.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'course-schema';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "inLanguage": "fa-IR",
    "provider": {
      "@type": "Organization",
      "name": "کدراه",
      "url": "https://kodrah.ir/"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": course.duration
    }
  });
  document.head.appendChild(script);
}

function renderNotFound() {
  setSEO('صفحه پیدا نشد | کدراه', 'صفحه مورد نظر یافت نشد.', '/404');
  app.innerHTML = `
    <div class="container">
      <div class="empty">
        <h2>پیدا نشد</h2>
        <p>آدرس موردنظر وجود ندارد.</p>
        <a href="/" data-link class="btn btn-primary" style="margin-top:20px">بازگشت به خانه</a>
      </div>
    </div>
  `;
}

// ============ ROUTER ============
function navigate(path, replace) {
  if (path === location.pathname + location.search) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    return;
  }
  if (replace) {
    history.replaceState(null, null, path);
  } else {
    history.pushState(null, null, path);
  }
  router();
}

function router() {
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const parts = path.split('/').filter(Boolean);

  document.querySelectorAll('.nav a[data-nav]').forEach(a => {
    const nav = a.dataset.nav;
    let isActive = false;
    if (nav === 'home') isActive = parts.length === 0;
    else if (nav === 'roadmaps') isActive = parts[0] === 'roadmaps';
    a.classList.toggle('active', isActive);
  });

  window.scrollTo({ top: 0, behavior: 'instant' });

  if (!isDataReady()) {
    console.error('Roadmaps data not loaded');
    renderDataError();
    return;
  }

  try {
    if (parts.length === 0) {
      renderHome();
    } else if (parts[0] === 'roadmaps') {
      if (parts.length === 1) renderRoadmaps();
      else if (parts.length === 2) renderRoadmap(parts[1]);
      else if (parts.length === 3) renderSection(parts[1], parts[2]);
      else if (parts.length === 4) renderCourse(parts[1], parts[2], parts[3]);
      else renderNotFound();
    } else {
      renderNotFound();
    }
  } catch (err) {
    console.error('Router error:', err);
    renderDataError();
  }
}

// ============ LINK INTERCEPTION ============
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-link]');
  if (link) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      navigate(href);
    }
    return;
  }

  const buyBtn = e.target.closest('[data-buy]');
  if (buyBtn) {
    openBuyModal(buyBtn.dataset.course, buyBtn.dataset.price);
    return;
  }

  const action = e.target.closest('[data-action]')?.dataset.action;
  if (action === 'order') orderVia();
  else if (action === 'copy') copyOrderText();
  else if (action === 'close') closeBuyModal();
});

// ============ MODAL ============
function openBuyModal(courseTitle, coursePrice) {
  const old = document.getElementById('buy-modal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'buy-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'buy-modal-title');
  modal.dataset.course = courseTitle || '';
  modal.dataset.price = coursePrice || '';
  modal.innerHTML = `
    <div class="modal">
      <h3 id="buy-modal-title">خرید دوره</h3>
      <p class="modal-sub">سفارش خود را از طریق تلگرام ثبت کنید</p>

      <button class="platform-btn" type="button" data-action="order">
        <span class="platform-icon" aria-hidden="true">✈️</span>
        <span class="platform-name">ارسال به تلگرام</span>
        <span class="platform-hint">@OMIX777</span>
      </button>

      <button class="copy-btn" type="button" data-action="copy">
        کپی متن سفارش
      </button>

      <div class="vpn-note">
        <span class="vpn-icon" aria-hidden="true">🌐</span>
        <p>اگر تلگرام باز نشد یا پیام ارسال نشد، لطفاً <strong>VPN خود را روشن کنید</strong> و دوباره تلاش کنید. در غیر این صورت از دکمه «کپی متن سفارش» استفاده کنید و متن را دستی ارسال کنید.</p>
      </div>

      <div class="copy-note">
        <span class="copy-note-icon" aria-hidden="true">✨</span>
        <p>
          متن سفارش <strong>به‌صورت خودکار در کادر چت تلگرام پر می‌شود</strong>.
          فقط کافیه دکمه ارسال را بزنید. اگر متن پر نشد، از دکمه
          <strong>«کپی متن سفارش»</strong> استفاده کنید و دستی برای
          <strong>@OMIX777</strong> بفرستید.
        </p>
      </div>

      <button class="modal-close" type="button" data-action="close">انصراف</button>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('active'));

  setTimeout(() => {
    const first = modal.querySelector('.platform-btn');
    if (first) first.focus();
  }, 120);
}

function closeBuyModal() {
  const modal = document.getElementById('buy-modal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(() => modal.remove(), 300);
}

function buildOrderMessage() {
  const modal = document.getElementById('buy-modal');
  const title = modal?.dataset.course || '';
  const price = modal?.dataset.price || '';
  if (price.includes('رایگان')) {
    return 'سلام. میخوام دوره «' + title + '» رو دریافت کنم.';
  }
  return 'سلام. میخوام دوره «' + title + '» رو با مبلغ ' + price + ' خریداری کنم.';
}

function copyOrderText() {
  const msg = buildOrderMessage();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msg)
      .then(() => showToast('متن سفارش کپی شد'))
      .catch(() => showToast('متن سفارش آماده شد'));
  } else {
    showToast('مرورگر شما از کپی خودکار پشتیبانی نمی‌کند');
  }
}

function orderVia() {
  const msg = buildOrderMessage();
  const encoded = encodeURIComponent(msg);
  const url = (typeof CONTACT !== 'undefined' ? CONTACT.telegram : 'https://t.me/omix777') + '?text=' + encoded;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(msg).catch(() => {});
  }
  showToast('در حال باز کردن تلگرام...');
  setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 400);
}

// ============ TOAST ============
function showToast(text) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.setAttribute('aria-live', 'polite');
    t.innerHTML = '<span class="dot"></span><span id="toast-text"></span>';
    document.body.appendChild(t);
  }
  document.getElementById('toast-text').textContent = text;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBuyModal();
});

window.addEventListener('popstate', router);

// ============ PRELOADER ============
(function initPreloader() {
  document.body.classList.add('loading');
  const MIN_DURATION = 800;
  const startTime = Date.now();

  function hideLoader() {
    const loader = document.getElementById('preloader');
    if (!loader || loader.classList.contains('hide')) return;
    loader.classList.add('hide');
    document.body.classList.remove('loading');
    setTimeout(() => { if (loader.parentNode) loader.remove(); }, 700);
  }

  if (document.readyState === 'complete') {
    setTimeout(hideLoader, Math.max(0, MIN_DURATION - (Date.now() - startTime)));
  } else {
    window.addEventListener('load', () => {
      const elapsed = Date.now() - startTime;
      setTimeout(hideLoader, Math.max(0, MIN_DURATION - elapsed));
    });
  }
  setTimeout(hideLoader, 2500);
})();

// ============ INIT ============
router();
