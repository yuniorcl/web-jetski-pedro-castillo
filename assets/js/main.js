'use strict';

let currentLang = 'es';
let translations = {};

async function initI18n() {
  const saved = localStorage.getItem('mjLang');
  const browser = navigator.language?.startsWith('en') ? 'en' : 'es';
  currentLang = saved || browser;
  await applyLang(currentLang);
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.langBtn));
  });
  updateLangButtons();
}

async function applyLang(lang) {
  const res = await fetch(`assets/i18n/${lang}.json`);
  translations = await res.json();
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key] !== undefined) el.textContent = translations[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[key] !== undefined) el.placeholder = translations[key];
  });
  updateExpHrefs();
}

async function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('mjLang', lang);
  await applyLang(lang);
  updateLangButtons();
}

function updateLangButtons() {
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === currentLang);
  });
}

function buildExpHref(expKey) {
  if (typeof CONFIG === 'undefined') return '#';
  const title    = translations[`exp.${expKey}.title`]    || expKey;
  const price    = translations[`exp.${expKey}.price`]    || '';
  const msgLabel = currentLang === 'en'
    ? `Hi, I'd like to book: ${title} (${price}). Can you confirm availability?`
    : `Hola, me gustaría reservar: ${title} (${price}). ¿Podéis confirmarme disponibilidad?`;
  return `https://api.whatsapp.com/send/?phone=${CONFIG.whatsapp}&text=${encodeURIComponent(msgLabel)}`;
}

function updateExpHrefs() {
  document.querySelectorAll('[data-exp-key]').forEach(el => {
    el.href = buildExpHref(el.dataset.expKey);
  });
}

function renderContactInfo() {
  if (typeof CONFIG === 'undefined') return;
  const msg = encodeURIComponent(CONFIG.whatsappMsg);
  const waHref = `https://api.whatsapp.com/send/?phone=${CONFIG.whatsapp}&text=${msg}`;
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    if (!el.dataset.expKey) el.href = waHref;
  });
  updateExpHrefs();
  document.querySelectorAll('[data-phone]').forEach(el => {
    el.href = `tel:${CONFIG.phone}`;
    el.textContent = CONFIG.phoneDisplay;
  });
  document.querySelectorAll('[data-email]').forEach(el => { el.textContent = CONFIG.email; });
  document.querySelectorAll('[data-maps-url]').forEach(el => { el.href = CONFIG.googleMapsUrl; });
  const iframe = document.querySelector('[data-maps-embed]');
  if (iframe) iframe.src = CONFIG.googleMapsEmbed;
}

let waDebounce = false;
function initWhatsAppDebounce() {
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.addEventListener('click', e => {
      if (waDebounce) { e.preventDefault(); return; }
      waDebounce = true;
      setTimeout(() => { waDebounce = false; }, 2000);
    });
  });
}

function initContactForm() {
  if (typeof CONFIG === 'undefined') return;
  const form = document.getElementById('contact-form');
  if (!form) return;

  const dateInput = form.querySelector('[name="date"]');
  const todayStr  = new Date().toISOString().split('T')[0];
  dateInput.min   = todayStr;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const nameInput  = form.querySelector('[name="name"]');
    const phoneInput = form.querySelector('[name="phone"]');
    const name  = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const date  = dateInput.value;
    const dateInvalid = date && date < todayStr;

    nameInput.classList.toggle('is-invalid', !name);
    phoneInput.classList.toggle('is-invalid', !phone);
    dateInput.classList.toggle('is-invalid', dateInvalid);

    if (!name || !phone || dateInvalid) {
      (!name ? nameInput : !phone ? phoneInput : dateInput).focus();
      return;
    }

    const experience = form.querySelector('[name="experience"]');
    const expText    = experience.options[experience.selectedIndex].text;
    const message    = form.querySelector('[name="message"]').value.trim();

    const lines = ['Hola, me gustaría reservar una experiencia de jet ski:'];
    lines.push(`• Nombre: ${name}`);
    lines.push(`• Teléfono: ${phone}`);
    if (date)             lines.push(`• Fecha: ${date}`);
    if (experience.value) lines.push(`• Experiencia: ${expText}`);
    if (message)          lines.push(`• Mensaje: ${message}`);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://api.whatsapp.com/send/?phone=${CONFIG.whatsapp}&text=${text}`, '_blank');
  });
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('hero-slide--active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('hero-slide--active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 7000);
  }

  document.querySelector('.hero-arrow--prev')?.addEventListener('click', () => { goTo(current - 1); startTimer(); });
  document.querySelector('.hero-arrow--next')?.addEventListener('click', () => { goTo(current + 1); startTimer(); });

  startTimer();
}

function initGallerySlider() {
  const items = document.querySelectorAll('.gallery-item[data-page]');
  if (!items.length) return;
  let page = 1;
  const pages = 2;

  function showPage(p) {
    page = ((p - 1 + pages) % pages) + 1;
    items.forEach(el => {
      el.style.display = el.dataset.page === String(page) ? 'block' : 'none';
    });
  }

  document.querySelector('.gallery-arrow--prev')?.addEventListener('click', () => showPage(page - 1));
  document.querySelector('.gallery-arrow--next')?.addEventListener('click', () => showPage(page + 1));
  showPage(1);
}

function initTooltips() {
  const popup = document.createElement('div');
  popup.id = 'exp-tooltip-popup';
  document.body.appendChild(popup);

  function show(btn) {
    const key = btn.dataset.i18nTooltip;
    const text = translations[key] || key;
    popup.textContent = text;
    popup.style.cssText = [
      'display:block', 'position:fixed', 'z-index:2147483647',
      'background:#03045e', 'color:#fff',
      'padding:10px 16px', 'border-radius:8px',
      'font-size:14px', 'max-width:280px', 'text-align:center',
      'line-height:1.5', 'pointer-events:none',
      'border:2px solid #FFD700', 'box-shadow:0 4px 20px rgba(0,0,0,0.5)'
    ].join(';');
    const r = btn.getBoundingClientRect();
    const pw = popup.offsetWidth;
    const ph = popup.offsetHeight;
    let left = r.left + r.width / 2 - pw / 2;
    let top = r.top - ph - 10;
    left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
    top = top < 8 ? r.bottom + 10 : top;
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
  }

  function hide() { popup.style.display = 'none'; }

  document.querySelectorAll('.exp-info-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => show(btn));
    btn.addEventListener('mouseleave', hide);
    btn.addEventListener('focus', () => show(btn));
    btn.addEventListener('blur', hide);
    btn.addEventListener('click', e => {
      e.stopPropagation();
      popup.style.display === 'block' ? hide() : show(btn);
    });
  });

  document.addEventListener('click', hide);
}

document.addEventListener('DOMContentLoaded', async () => {
  await initI18n();
  initTooltips();
  renderContactInfo();
  initWhatsAppDebounce();
  initContactForm();
  initHeroSlider();
  initGallerySlider();
});
