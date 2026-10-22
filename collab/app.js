/* ============================================
   COLLAB — App Logic
   Handles: preloader + collaboration modal
   ============================================ */

// ============ CONFIG ============
const TELEGRAM_URL = 'https://t.me/omix777';
const COLLAB_MESSAGE = 'سلام. آماده همکاری در تولید محتوا هستم.';

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

// ============ MODAL ============
function openCollabModal() {
  // Remove existing modal if any
  const old = document.getElementById('collab-modal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.className = 'collab-modal-overlay';
  modal.id = 'collab-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'collab-modal-title');

  modal.innerHTML =
    '<div class="collab-modal">' +
      '<h3 id="collab-modal-title">درخواست همکاری</h3>' +
      '<p class="collab-modal__sub">برای شروع، از طریق تلگرام پیام بدهید</p>' +

      '<button class="collab-modal__platform" type="button" data-action="order">' +
        '<span class="collab-modal__platform-icon" aria-hidden="true">✈️</span>' +
        '<span class="collab-modal__platform-name">ارسال به تلگرام</span>' +
        '<span class="collab-modal__hint">@OMIX777</span>' +
      '</button>' +

      '<button class="collab-modal__copy" type="button" data-action="copy">' +
        'کپی متن درخواست' +
      '</button>' +

      '<div class="collab-modal__note">' +
        '<span class="collab-modal__note-icon" aria-hidden="true">🌐</span>' +
        '<p>اگر تلگرام باز نشد، <strong>VPN خود را روشن کنید</strong>. در غیر این صورت از دکمه «کپی متن درخواست» استفاده کنید.</p>' +
      '</div>' +

      '<button class="collab-modal__close" type="button" data-action="close">انصراف</button>' +
    '</div>';

  document.body.appendChild(modal);
  requestAnimationFrame(function () {
    modal.classList.add('active');
  });

  // Click handlers
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeCollabModal();
      return;
    }

    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    if (action === 'order') orderViaTelegram();
    else if (action === 'copy') copyMessage();
    else if (action === 'close') closeCollabModal();
  });
}

function closeCollabModal() {
  const modal = document.getElementById('collab-modal');
  if (!modal) return;
  modal.classList.remove('active');
  setTimeout(function () {
    if (modal.parentNode) modal.remove();
  }, 250);
}

// ============ ACTIONS ============
function orderViaTelegram() {
  const encoded = encodeURIComponent(COLLAB_MESSAGE);
  const url = TELEGRAM_URL + '?text=' + encoded;
  showToast('در حال باز کردن تلگرام...');
  setTimeout(function () {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, 300);
}

function copyMessage() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(COLLAB_MESSAGE)
      .then(function () {
        showToast('متن درخواست کپی شد');
      })
      .catch(function () {
        showToast('متن درخواست آماده شد');
      });
  } else {
    showToast('مرورگر شما از کپی پشتیبانی نمی‌کند');
  }
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
  t._timer = setTimeout(function () {
    t.classList.remove('show');
  }, 3000);
}

// ============ EVENT LISTENERS ============
document.addEventListener('click', function (e) {
  const openBtn = e.target.closest('[data-collab-open]');
  if (openBtn) {
    e.preventDefault();
    openCollabModal();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeCollabModal();
});