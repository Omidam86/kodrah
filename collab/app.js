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

// ============ COLLAB MODAL ============
const COLLAB_MESSAGE = 'سلام. آماده همکاری در تولید محتوا هستم.';
const COLLAB_TELEGRAM = 'https://t.me/omix777';

function openCollabModal() {
  const old = document.getElementById('collab-modal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.id = 'collab-modal';
  modal.innerHTML = `
    <div class="modal">
      <h3>درخواست همکاری</h3>
      <p class="modal-sub">برای شروع، از طریق تلگرام پیام بدهید</p>

      <button class="platform-btn" type="button" data-action="order">
        <span class="platform-icon">✈️</span>
        <span class="platform-name">ارسال به تلگرام</span>
        <span class="platform-hint">@OMIX777</span>
      </button>

      <button class="copy-btn" type="button" data-action="copy">
        کپی متن درخواست
      </button>

      <div class="vpn-note">
        <span class="vpn-icon">🌐</span>
        <p>اگر تلگرام باز نشد، <strong>VPN خود را روشن کنید</strong> و دوباره تلاش کنید. در غیر این صورت از دکمه «کپی متن درخواست» استفاده کنید.</p>
      </div>

      <div class="copy-note">
        <span class="copy-note-icon">✨</span>
        <p>متن درخواست <strong>به‌صورت خودکار</strong> در کادر چت تلگرام پر می‌شود. اگر پر نشد، متن را کپی کنید و دستی برای <strong>@OMIX777</strong> بفرستید.</p>
      </div>

      <button class="modal-close" type="button" data-action="close">انصراف</button>
    </div>
  `;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('active'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCollabModal();

    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'order') {
      navigator.clipboard?.writeText(COLLAB_MESSAGE).catch(() => {});
      showToast('در حال باز کردن تلگرام...');
      setTimeout(() => {
        window.open(COLLAB_TELEGRAM + '?text=' + encodeURIComponent(COLLAB_MESSAGE), '_blank', 'noopener,noreferrer');
      }, 300);
    } else if (action === 'copy') {
      navigator.clipboard?.writeText(COLLAB_MESSAGE)
        .then(() => showToast('متن درخواست کپی شد'))
        .catch(() => showToast('کپی نشد'));
    } else if (action === 'close') {
      closeCollabModal();
    }
  });
}

function closeCollabModal() {
  const modal = document.getElementById('collab-modal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(() => modal.remove(), 250);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  bindThemeToggle();
  initPreloader();

  const btn1 = document.getElementById('contact-btn');
  const btn2 = document.getElementById('contact-btn-2');
  if (btn1) btn1.addEventListener('click', openCollabModal);
  if (btn2) btn2.addEventListener('click', openCollabModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCollabModal();
  });
});
