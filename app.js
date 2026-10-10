// ============ THEME ============
(function initTheme() {
  const saved = localStorage.getItem('kodrah-theme');
  document.documentElement.setAttribute('data-theme', saved || 'light');
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('kodrah-theme', next);
}

// ============ SEO HELPERS ============
const DEFAULT_TITLE = 'کدراه | نقشه راه برنامه‌نویسی از صفر تا پیشرفته';
const DEFAULT_DESC = 'کدراه (کد راه) پلتفرم آموزشی برنامه‌نویسی؛ نقشه راه‌های کامل وب، شبکه و امنیت با دوره‌های اختصاصی.';
const SITE_URL = 'https://kodrah.ir/';

function setSEO(title, description, path = '/') {
  document.title = title;

  const setMeta = (selector, attr, value) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      const [key, val] = selector.replace(/meta\[|\]/g, '').split('=');
      el.setAttribute(key, val.replace(/['"]/g, ''));
      document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
  };

  setMeta('meta[name="description"]', 'content', description);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', SITE_URL + '#' + path);
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', SITE_URL + '#' + path);
}

// ============ RENDER ============
const app = document.getElementById('app');

function renderHome() {
  setSEO(DEFAULT_TITLE, DEFAULT_DESC, '/home');
  app.innerHTML = `
    <section class="hero">
      <div class="container">
        <div class="badge-top">پلتفرم آموزشی کدراه</div>
        <h1>مسیرت رو در دنیای <span class="grad">برنامه‌نویسی</span> پیدا کن</h1>
        <p>نمی‌دونی از کجا شروع کنی؟ اینجا هر مسیر یادگیری، دوره اختصاصی خودش رو داره. نقشه راهت رو انتخاب کن و قدم‌به‌قدم پیش برو.</p>
        <a class="btn btn-primary" onclick="navigate('roadmaps')">🚀 مشاهده نقشه راه‌ها</a>
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
    'نقشه راه‌های برنامه‌نویسی | وب، شبکه و امنیت | کدراه',
    'لیست کامل نقشه راه‌های کدراه: مبانی برنامه‌نویسی، وب (فرانت/بک/فول‌استک)، شبکه (سیسکو/مایکروسافت) و امنیت (رد تیم/بلو تیم).',
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
              <a class="card" onclick="navigate('roadmap', {r:'${r.slug}'})">
                <div class="card-icon">${r.icon}</div>
                <h3>${r.title}</h3>
                <p>${r.description}</p>
                <div class="card-meta">
                  <span>${r.sections.length} بخش • ${totalCourses} دوره</span>
                  <span class="arrow">مشاهده مسیر ←</span>
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
  if (!roadmap) { renderNotFound(); return; }

  setSEO(
    `${roadmap.title} | نقشه راه کدراه`,
    `نقشه راه ${roadmap.title} در کدراه: ${roadmap.description}`,
    `/roadmap?r=${slug}`
  );

  const prereqHtml = roadmap.prerequisite ? `
    <div class="prereq-note">
      <span class="prereq-icon">⚠️</span>
      <div>
        <strong>پیش‌نیاز</strong>
        <p>${roadmap.prerequisite.text} <a onclick="navigate('roadmap', {r:'${roadmap.prerequisite.link}'})">${roadmap.prerequisite.linkText}</a></p>
      </div>
    </div>
  ` : '';

  app.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a onclick="navigate('home')">خانه</a>
        <span class="sep">/</span>
        <a onclick="navigate('roadmaps')">نقشه راه‌ها</a>
        <span class="sep">/</span>
        <span>${roadmap.title}</span>
      </div>
      <div class="page-header" style="text-align:right;padding:10px 0 26px">
        <h1>${roadmap.icon} ${roadmap.title}</h1>
        <p>${roadmap.description}</p>
      </div>
      ${prereqHtml}
      <div style="display:flex;flex-direction:column;gap:16px;padding-bottom:60px">
        ${roadmap.sections.map((sec, i) => `
          <div class="section-card" onclick="navigate('section', {r:'${roadmap.slug}', s:'${sec.slug}'})">
            <div class="sc-num">${i + 1}</div>
            <div class="sc-content">
              <h3>${sec.title}</h3>
              <div class="sc-meta">
                <span class="badge">${sec.courses.length} دوره</span>
                <span>شروع از ${sec.courses[0]?.title || ''}</span>
              </div>
            </div>
            <div class="sc-arrow">←</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSection(rSlug, sSlug) {
  const roadmap = roadmaps.find(r => r.slug === rSlug);
  const section = roadmap?.sections.find(s => s.slug === sSlug);
  if (!roadmap || !section) { renderNotFound(); return; }

  setSEO(
    `${section.title} - ${roadmap.title} | کدراه`,
    `${section.courses.length} دوره در بخش ${section.title} از مسیر ${roadmap.title}.`,
    `/section?r=${rSlug}&s=${sSlug}`
  );

  app.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a onclick="navigate('home')">خانه</a>
        <span class="sep">/</span>
        <a onclick="navigate('roadmaps')">نقشه راه‌ها</a>
        <span class="sep">/</span>
        <a onclick="navigate('roadmap', {r:'${roadmap.slug}'})">${roadmap.title}</a>
        <span class="sep">/</span>
        <span>${section.title}</span>
      </div>
      <div class="page-header" style="text-align:right;padding:10px 0 26px">
        <h1>${section.title}</h1>
        <p>${section.courses.length} دوره در این بخش</p>
      </div>
      <div style="padding-bottom:60px">
        ${section.courses.map(c => `
          <div class="course-card">
            <div>
              <h4>${c.title}</h4>
              <div class="meta">
                <span class="badge">${c.level}</span>
                <span>⏱ ${c.duration}</span>
                <span>💰 ${c.price}</span>
              </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="navigate('course', {r:'${roadmap.slug}', s:'${section.slug}', c:'${c.slug}'})">مشاهده دوره</button>
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
  if (!roadmap || !section || !course) { renderNotFound(); return; }

  setSEO(
    `${course.title} | دوره ${roadmap.title} | کدراه`,
    `${course.description.slice(0, 150)}`,
    `/course?r=${rSlug}&s=${sSlug}&c=${cSlug}`
  );

  injectCourseSchema(course);

  app.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a onclick="navigate('home')">خانه</a>
        <span class="sep">/</span>
        <a onclick="navigate('roadmaps')">نقشه راه‌ها</a>
        <span class="sep">/</span>
        <a onclick="navigate('roadmap', {r:'${roadmap.slug}'})">${roadmap.title}</a>
        <span class="sep">/</span>
        <a onclick="navigate('section', {r:'${roadmap.slug}', s:'${section.slug}'})">${section.title}</a>
        <span class="sep">/</span>
        <span>${course.title}</span>
      </div>
      <div class="course-detail">
        <div class="course-main">
          <h1>${course.title}</h1>
          <div style="margin-bottom:22px;display:flex;gap:10px;flex-wrap:wrap">
            <span class="badge">${course.level}</span>
            <span class="badge badge-green">${section.title}</span>
          </div>
          <p>${course.description}</p>
          <h2>سرفصل‌ها</h2>
          <ul>${course.topics.map(t => `<li>${t}</li>`).join('')}</ul>
        </div>
        <aside class="course-side">
          <div class="price">${course.price}</div>
          <div class="price-sub">دسترسی دائمی + پشتیبانی</div>
          <button class="btn btn-primary" onclick="openBuyModal('${course.title.replace(/'/g, "\\'")}', '${course.price.replace(/'/g, "\\'")}')">🛒 خرید دوره</button>
          <hr>
          <div class="info-row"><span>سطح</span><span>${course.level}</span></div>
          <div class="info-row"><span>مدت</span><span>${course.duration}</span></div>
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
        <button class="btn btn-primary" style="margin-top:20px" onclick="navigate('home')">بازگشت به خانه</button>
      </div>
    </div>
  `;
}

// ============ ROUTER ============
function navigate(route, params = {}) {
  const query = new URLSearchParams(params).toString();
  location.hash = query ? `#/${route}?${query}` : `#/${route}`;
}

function router() {
  const hash = location.hash || '#/home';
  const [path, query] = hash.slice(2).split('?');
  const params = Object.fromEntries(new URLSearchParams(query || ''));

  document.querySelectorAll('.nav a').forEach(a => {
    const isRoadmapsArea = ['roadmap', 'section', 'course', 'roadmaps'].includes(path);
    a.classList.toggle('active', a.dataset.nav === path || (isRoadmapsArea && a.dataset.nav === 'roadmaps'));
  });

  window.scrollTo({ top: 0, behavior: 'instant' });

  if (path === 'home' || path === '') renderHome();
  else if (path === 'roadmaps') renderRoadmaps();
  else if (path === 'roadmap') renderRoadmap(params.r);
  else if (path === 'section') renderSection(params.r, params.s);
  else if (path === 'course') renderCourse(params.r, params.s, params.c);
  else renderNotFound();
}
window.addEventListener('hashchange', router);

// ============ MODAL (داینامیک) ============
function openBuyModal(courseTitle, coursePrice) {
  const old = document.getElementById('buy-modal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'buy-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.dataset.course = courseTitle;
  modal.dataset.price = coursePrice;
  modal.innerHTML = `
    <div class="modal">
      <h3>خرید دوره</h3>
      <p class="modal-sub">سفارش خود را از طریق تلگرام ثبت کنید</p>

      <button class="platform-btn" onclick="orderVia()" type="button">
        <span class="platform-icon" aria-hidden="true">✈️</span>
        <span class="platform-name">ارسال به تلگرام</span>
        <span class="platform-hint">@OMIX777</span>
      </button>

      <button class="copy-btn" onclick="copyOrderText()" type="button">
        📋 فقط کپی متن سفارش
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

      <button class="modal-close" onclick="closeBuyModal()" type="button">انصراف</button>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('active'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeBuyModal();
  });
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
    return `سلام. میخوام دوره «${title}» رو دریافت کنم.`;
  }
  return `سلام. میخوام دوره «${title}» رو با مبلغ ${price} خریداری کنم.`;
}

function copyOrderText() {
  const msg = buildOrderMessage();
  navigator.clipboard.writeText(msg)
    .then(() => showToast('✅ متن سفارش کپی شد — دستی برای @OMIX777 بفرستید'))
    .catch(() => showToast('متن سفارش آماده شد.'));
}

function orderVia() {
  const msg = buildOrderMessage();
  const encoded = encodeURIComponent(msg);
  const url = `${CONTACT.telegram}?text=${encoded}`;

  navigator.clipboard.writeText(msg).catch(() => {});
  showToast('✅ متن آماده شد — در حال باز کردن تلگرام...');

  setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 400);
}

// ============ TOAST ============
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
  t._timer = setTimeout(() => t.classList.remove('show'), 3200);
}

// ============ EVENTS ============
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBuyModal();
});

// ============ PRELOADER ============
(function initPreloader() {
  document.body.classList.add('loading');
  const MIN_DURATION = 1800;
  const startTime = Date.now();

  function hideLoader() {
    const loader = document.getElementById('preloader');
    if (!loader || loader.classList.contains('hide')) return;
    loader.classList.add('hide');
    document.body.classList.remove('loading');
    setTimeout(() => loader.remove(), 800);
  }

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    setTimeout(hideLoader, Math.max(0, MIN_DURATION - elapsed));
  });
  setTimeout(hideLoader, 3000);
})();

// ============ INIT ============
router();
