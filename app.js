const CONTACT = {
  telegram: "https://t.me/omix777"
};

function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}

function findRoadmap(slug) {
  return roadmaps.find(r => r.slug === slug);
}

function findCourse(roadmap, slug) {
  return roadmap?.courses.find(c => c.slug === slug);
}

function renderRoadmapsGrid(target) {
  const el = document.querySelector(target);
  if (!el) return;
  el.innerHTML = roadmaps.map(r => `
    <a href="roadmap.html?r=${r.slug}" class="card">
      <div class="card-icon">${r.icon}</div>
      <h3>${r.title}</h3>
      <p>${r.description}</p>
      <div class="card-meta">
        <span>${r.courses.length} دوره</span>
        <span style="color:#a5b4fc">مشاهده مسیر ←</span>
      </div>
    </a>
  `).join('');
}

function renderRoadmapPage() {
  const slug = getParam('r');
  const roadmap = findRoadmap(slug);
  const root = document.getElementById('roadmap-root');
  if (!root) return;

  if (!roadmap) {
    root.innerHTML = `
      <div class="empty">
        <h2>نقشه راه پیدا نشد</h2>
        <p>لطفاً از صفحه نقشه راه‌ها یکی را انتخاب کنید.</p>
        <a href="roadmaps.html" class="btn btn-primary" style="margin-top:20px">مشاهده نقشه راه‌ها</a>
      </div>`;
    return;
  }

  document.title = `${roadmap.title} | نقشه راه کدراه`;
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content', `نقشه راه ${roadmap.title} در کدراه: ${roadmap.description}`
  );

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">خانه</a>
      <span class="sep">/</span>
      <a href="roadmaps.html">نقشه راه‌ها</a>
      <span class="sep">/</span>
      <span>${roadmap.title}</span>
    </div>
    <div class="page-header" style="text-align:right;padding:10px 0 30px">
      <h1>${roadmap.icon} ${roadmap.title}</h1>
      <p>${roadmap.description}</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:14px;padding-bottom:60px">
      ${roadmap.courses.map((c, i) => `
        <div class="course-card">
          <div>
            <h4>${i + 1}. ${c.title}</h4>
            <div class="meta">
              <span class="badge">${c.level}</span>
              <span>⏱ ${c.duration}</span>
              <span>💰 ${c.price}</span>
            </div>
          </div>
          <a href="course.html?r=${roadmap.slug}&c=${c.slug}" class="btn btn-primary btn-sm">مشاهده دوره</a>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCoursePage() {
  const rSlug = getParam('r');
  const cSlug = getParam('c');
  const roadmap = findRoadmap(rSlug);
  const course = findCourse(roadmap, cSlug);
  const root = document.getElementById('course-root');
  if (!root) return;

  if (!roadmap || !course) {
    root.innerHTML = `
      <div class="empty">
        <h2>دوره پیدا نشد</h2>
        <a href="roadmaps.html" class="btn btn-primary" style="margin-top:20px">مشاهده نقشه راه‌ها</a>
      </div>`;
    return;
  }

  document.title = `${course.title} | کدراه - ${roadmap.title}`;
  document.querySelector('meta[name="description"]')?.setAttribute(
    'content', `${course.title} در مسیر ${roadmap.title} - ${course.description.slice(0, 120)}`
  );

  root.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">خانه</a>
      <span class="sep">/</span>
      <a href="roadmaps.html">نقشه راه‌ها</a>
      <span class="sep">/</span>
      <a href="roadmap.html?r=${roadmap.slug}">${roadmap.title}</a>
      <span class="sep">/</span>
      <span>${course.title}</span>
    </div>
    <div class="course-detail">
      <div class="course-main">
        <h1>${course.title}</h1>
        <div style="margin-bottom:20px;display:flex;gap:10px;flex-wrap:wrap">
          <span class="badge">${course.level}</span>
          <span class="badge badge-green">${roadmap.title}</span>
        </div>
        <p>${course.description}</p>
        <h2>سرفصل‌ها</h2>
        <ul>
          ${course.topics.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
      <aside class="course-side">
        <div class="price">${course.price}</div>
        <div class="price-sub">دسترسی دائمی + پشتیبانی</div>
        <button class="btn btn-primary" onclick="openBuyModal('${course.title}')">
          🛒 خرید دوره
        </button>
        <hr>
        <div class="info-row"><span>سطح</span><span>${course.level}</span></div>
        <div class="info-row"><span>مدت</span><span>${course.duration}</span></div>
        <div class="info-row"><span>فرمت</span><span>ویدیو + تمرین</span></div>
      </aside>
    </div>
  `;
}

function openBuyModal(courseTitle) {
  const modal = document.getElementById('buy-modal');
  if (!modal) return;
  modal.dataset.course = courseTitle;
  modal.classList.add('active');
}

function closeBuyModal() {
  document.getElementById('buy-modal')?.classList.remove('active');
}

function orderVia(platform) {
  const modal = document.getElementById('buy-modal');
  const course = modal?.dataset.course || '';
  const msg = `سلام\nمن درخواست خرید دوره «${course}» را دارم.`;

  navigator.clipboard.writeText(msg)
    .then(() => showToast('✅ متن در کلیپ‌بورد کپی شد — در چت پیست کنید'))
    .catch(() => showToast('متن سفارش آماده شد.'));

  setTimeout(() => window.open(CONTACT.telegram, '_blank'), 400);
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
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

document.addEventListener('click', (e) => {
  if (e.target.classList?.contains('modal-overlay')) closeBuyModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeBuyModal();
});

document.addEventListener('DOMContentLoaded', () => {
  renderRoadmapsGrid('#roadmaps-grid');
  renderRoadmapPage();
  renderCoursePage();
});
