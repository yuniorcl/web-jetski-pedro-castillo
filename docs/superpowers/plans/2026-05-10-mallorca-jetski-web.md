# Mallorca JetSki — Web Estática — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir una web estática profesional de alquiler de jet ski en Cala Millor (Mallorca) con 16 secciones, multiidioma ES/EN, hero slideshow CSS, tarjetas con foto a sangre y Google Maps embed.

**Architecture:** Single-page HTML5 + Bootstrap 5.3 CDN + CSS3 custom con variables + JS vanilla. Sin build step. Datos de contacto centralizados en `config.js`. Literales en `assets/i18n/es.json` y `en.json` aplicados vía `data-i18n` attributes.

**Tech Stack:** HTML5, Bootstrap 5.3.3 CDN (SRI), CSS3 custom properties, JavaScript ES6 vanilla, Google Fonts CDN, Unsplash (placeholders de imagen).

---

## Mapa de archivos

| Archivo | Responsabilidad |
|---------|----------------|
| `index.html` | Estructura completa de las 16 secciones |
| `config.js` | Datos de contacto (teléfono, WhatsApp, email, Maps URL) |
| `assets/css/styles.css` | Variables CSS, tipografía, componentes, secciones, slideshow |
| `assets/js/main.js` | i18n, email obfuscation, WhatsApp debounce, nav móvil |
| `assets/i18n/es.json` | Todos los literales en español |
| `assets/i18n/en.json` | Todos los literales en inglés |
| `legal/aviso-legal.html` | Página de aviso legal (noindex) |
| `legal/politica-privacidad.html` | Política de privacidad (noindex) |
| `_headers` | Cabeceras HTTP de seguridad para Netlify |
| `.htaccess` | Cabeceras HTTP de seguridad para Apache |

---

## Task 1: Scaffold del proyecto

**Files:**
- Create: `index.html`
- Create: `config.js`
- Create: `assets/css/styles.css`
- Create: `assets/js/main.js`
- Create: `assets/i18n/es.json`
- Create: `assets/i18n/en.json`

- [ ] **Step 1: Crear estructura de directorios**

```bash
mkdir -p assets/css assets/js assets/i18n assets/img assets/icons legal
```

- [ ] **Step 2: Crear `config.js`**

```javascript
const CONFIG = {
  phone: '+34600000000',
  phoneDisplay: '+34 600 000 000',
  whatsapp: '34600000000',
  whatsappMsg: 'Hola, quiero reservar una experiencia de jet ski. ¿Me podéis informar de disponibilidad?',
  email: 'info@mallorcajetski.com',
  location: 'Cala Millor, Mallorca',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.5!2d3.385!3d39.592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b4f0b0b0b0b0%3A0x0!2sCala+Millor%2C+Mallorca!5e0!3m2!1ses!2ses!4v1',
  googleMapsUrl: 'https://maps.google.com/?q=Cala+Millor+Mallorca',
};
```

- [ ] **Step 3: Crear `index.html` — shell base**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alquiler de Jet Ski en Cala Millor, Mallorca | Mallorca JetSki</title>
  <meta name="description" content="Alquila una moto de agua en Cala Millor, Mallorca. Sin licencia, instructor incluido. Rutas de 30min, 60min, sunset y pack privado. Reserva fácil por WhatsApp.">
  <link rel="canonical" href="https://mallorcajetski.com/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Alquiler de Jet Ski en Cala Millor | Mallorca JetSki">
  <meta property="og:description" content="Vive una experiencia única en el mar. Sin licencia, instructor incluido. Reserva por WhatsApp.">
  <meta property="og:image" content="https://mallorcajetski.com/assets/img/og-image.jpg">
  <meta property="og:url" content="https://mallorcajetski.com/">

  <!-- Bootstrap 5.3.3 SRI -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">

  <!-- Custom CSS -->
  <link rel="stylesheet" href="assets/css/styles.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Mallorca JetSki",
        "description": "Alquiler de jet ski en Cala Millor, Mallorca. Sin licencia, instructor incluido.",
        "url": "https://mallorcajetski.com",
        "telephone": "+34600000000",
        "email": "info@mallorcajetski.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cala Millor",
          "addressRegion": "Mallorca",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.592,
          "longitude": 3.385
        },
        "openingHours": "Mo-Su 09:00-20:00",
        "priceRange": "€€"
      },
      {
        "@type": "TouristAttraction",
        "name": "Alquiler de Jet Ski en Cala Millor",
        "description": "Experiencias en moto de agua sin licencia con instructor profesional en Cala Millor, Mallorca.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cala Millor",
          "addressRegion": "Mallorca",
          "addressCountry": "ES"
        }
      }
    ]
  }
  </script>
</head>
<body>

  <!-- SECCIONES (Tasks 2–12) -->

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc4s9bIOgUxi8T/jzmq1dqMHHf+64b1ERPCP2bXpKOe5"
    crossorigin="anonymous"></script>
  <script src="config.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Crear `assets/css/styles.css` — variables y base**

```css
/* =============================================
   VARIABLES
   ============================================= */
:root {
  --color-dark:  #03045E;
  --color-ocean: #0077B6;
  --color-cta:   #FF6B35;
  --color-white: #FFFFFF;
  --color-light: #F8F9FA;
  --color-text:  #1A1A2E;
  --font-title:  'Montserrat', sans-serif;
  --font-body:   'Open Sans', sans-serif;
  --radius-card: 16px;
  --transition:  0.3s ease;
}

/* =============================================
   BASE
   ============================================= */
*, *::before, *::after { box-sizing: border-box; }

body {
  font-family: var(--font-body);
  color: var(--color-text);
  scroll-behavior: smooth;
}

h1, h2, h3, h4, .nav-link, .btn, .logo-text {
  font-family: var(--font-title);
}

img { max-width: 100%; height: auto; }

/* =============================================
   UTILIDADES
   ============================================= */
.text-cta   { color: var(--color-cta) !important; }
.bg-dark-brand { background-color: var(--color-dark) !important; }
.bg-ocean   { background-color: var(--color-ocean) !important; }

.section-label {
  display: block;
  font-family: var(--font-title);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-cta);
  margin-bottom: 8px;
}

.section-title {
  font-family: var(--font-title);
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1.15;
}

.section-title--light { color: var(--color-white); }

/* =============================================
   BOTONES
   ============================================= */
.btn-cta {
  background-color: var(--color-cta);
  color: var(--color-white);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 12px 28px;
  border-radius: 50px;
  border: none;
  letter-spacing: 0.5px;
  transition: background-color var(--transition), transform var(--transition);
  text-decoration: none;
  display: inline-block;
}
.btn-cta:hover { background-color: #e55a28; color: #fff; transform: translateY(-2px); }

.btn-outline-light-brand {
  background: transparent;
  color: var(--color-white);
  border: 2px solid rgba(255,255,255,0.6);
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  transition: border-color var(--transition), background var(--transition);
}
.btn-outline-light-brand:hover { border-color: #fff; background: rgba(255,255,255,0.1); color: #fff; }
```

- [ ] **Step 5: Crear `assets/js/main.js` — esqueleto**

```javascript
'use strict';

// Populated by Tasks 3 and 4
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  renderContactInfo();
  initWhatsAppDebounce();
  initNavScroll();
});
```

- [ ] **Step 6: Verificar en navegador**

Abrir `index.html` en el navegador. Debe cargar sin errores de consola, con Bootstrap activo (fuentes Montserrat/Open Sans visibles si hay conexión a internet).

- [ ] **Step 7: Commit**

```bash
git init
git add .
git commit -m "feat: project scaffold with config, CSS variables and HTML shell"
```

---

## Task 2: Sistema i18n

**Files:**
- Create: `assets/i18n/es.json`
- Create: `assets/i18n/en.json`
- Modify: `assets/js/main.js`

- [ ] **Step 1: Crear `assets/i18n/es.json`**

```json
{
  "nav.home": "Inicio",
  "nav.prices": "Tarifas",
  "nav.gallery": "Galería",
  "nav.contact": "Contacto",
  "nav.book": "Reservar ahora",
  "hero.label": "Cala Millor · Mallorca",
  "hero.title": "Alquiler de Jet Ski en Cala Millor",
  "hero.subtitle": "Vive una experiencia única en el mar con nuestras motos de agua",
  "hero.cta.whatsapp": "Reservar por WhatsApp",
  "hero.cta.prices": "Ver precios",
  "hero.badge.license": "Sin licencia",
  "hero.badge.instructor": "Instructor incluido",
  "hero.badge.booking": "Reserva rápida",
  "hero.badge.safety": "Experiencia segura",
  "feature.label": "Nuestro servicio",
  "feature.title": "Alquiler de motos de agua en Mallorca",
  "feature.desc": "Disfruta de la libertad en el mar mediterráneo. Nuestras rutas son guiadas por monitores profesionales. No necesitas licencia náutica: nosotros te cuidamos desde el primer momento.",
  "feature.cta": "Empezar la aventura",
  "experiences.label": "Nuestras rutas",
  "experiences.title": "Elige tu experiencia",
  "exp.basic.title": "Ruta Básica",
  "exp.basic.desc": "Perfecta para empezar",
  "exp.basic.duration": "30 MIN",
  "exp.basic.price": "60€",
  "exp.classic.title": "Ruta Clásica",
  "exp.classic.desc": "La más popular · Parejas y amigos",
  "exp.classic.duration": "60 MIN",
  "exp.classic.badge": "⭐ POPULAR",
  "exp.classic.price": "100€",
  "exp.sunset.title": "Ruta Atardecer",
  "exp.sunset.desc": "Una experiencia única al caer el sol",
  "exp.sunset.duration": "🌅 SUNSET · 90 MIN",
  "exp.sunset.price": "140€",
  "exp.private.title": "Excursión Privada",
  "exp.private.desc": "Para grupos y ocasiones especiales",
  "exp.private.duration": "⭐ PACK ESPECIAL",
  "exp.private.price": "200€",
  "exp.book": "Reservar →",
  "exp.from": "desde",
  "exp.note": "Precios orientativos. Consulta disponibilidad y condiciones.",
  "features.label": "Incluido",
  "features.title": "¿Qué incluye el servicio?",
  "feat.lifejacket": "Chaleco salvavidas para todos los ocupantes",
  "feat.delivery": "Entrega y recogida en el punto acordado",
  "feat.instructor": "Monitor profesional durante toda la ruta",
  "feat.briefing": "Briefing de seguridad inicial",
  "feat.snorkel": "Kit de snorkel",
  "fleet.label": "Nuestra flota",
  "fleet.title": "Motos acuáticas en Cala Millor",
  "fleet.desc": "Contamos con motos de agua modernas, potentes y seguras. Perfectas para principiantes y experimentados. Revisadas diariamente para garantizar tu seguridad.",
  "fleet.spec1.title": "Casco ST3 Hull™",
  "fleet.spec1.sub": "Fibra de vidrio",
  "fleet.spec2.title": "Sistema iTC™",
  "fleet.spec2.sub": "Motor potente",
  "fleet.spec3.title": "Modo ECO® (70L)",
  "fleet.spec3.sub": "Consumo eficiente",
  "why.label": "¿Por qué nosotros?",
  "why.title": "Tu seguridad, nuestra prioridad",
  "why.1": "Motos modernas",
  "why.2": "Monitores profesionales",
  "why.3": "Seguridad incluida",
  "why.4": "Familias y amigos",
  "why.5": "Reserva por WhatsApp",
  "why.6": "Ubicación privilegiada",
  "reviews.label": "Opiniones",
  "reviews.title": "Lo que dicen de nosotros",
  "steps.label": "¿Cómo funciona?",
  "steps.title": "Reserva en 4 pasos",
  "step.1": "Elige tu experiencia",
  "step.2": "Contacta por WhatsApp",
  "step.3": "Confirma día y hora",
  "step.4": "¡Disfruta tu ruta en jet ski!",
  "safety.label": "Seguridad",
  "safety.title": "Tu seguridad, primero",
  "safety.1": "Chaleco salvavidas incluido",
  "safety.2": "Briefing inicial obligatorio",
  "safety.3": "Monitor profesional en todo momento",
  "safety.4": "Normas básicas explicadas antes de salir",
  "safety.5": "Apto para principiantes",
  "faq.label": "Preguntas frecuentes",
  "faq.title": "¿Tienes dudas?",
  "faq.1.q": "¿Necesito licencia náutica?",
  "faq.1.a": "No. Nuestras salidas son guiadas con instructor profesional. No necesitas ningún tipo de titulación náutica para disfrutar de la experiencia.",
  "faq.2.q": "¿Pueden ir dos personas en una moto?",
  "faq.2.a": "Sí, nuestras motos de agua admiten dos personas por unidad.",
  "faq.3.q": "¿Qué debo llevar?",
  "faq.3.a": "Bañador, crema solar y ganas de disfrutar. Nosotros ponemos el resto: chaleco, briefing y moto.",
  "faq.4.q": "¿Desde qué edad se puede participar?",
  "faq.4.a": "Los menores de 18 años deben ir acompañados de un adulto. Recomendamos un mínimo de 12 años para subir en la moto.",
  "faq.5.q": "¿Qué pasa si hace mal tiempo?",
  "faq.5.a": "En caso de condiciones meteorológicas adversas, reprogramamos sin coste o te devolvemos el importe íntegro.",
  "faq.6.q": "¿Cómo puedo reservar?",
  "faq.6.a": "La forma más rápida es por WhatsApp. También puedes llamarnos o enviarnos un formulario y te respondemos en menos de 2 horas.",
  "gallery.label": "Galería",
  "gallery.title": "Momentos únicos",
  "contact.label": "Contacto",
  "contact.title": "¿Dónde estamos?",
  "contact.address": "Cala Millor, Mallorca",
  "contact.howto": "Cómo llegar",
  "contact.form.title": "¿Hablamos?",
  "contact.form.name": "Nombre",
  "contact.form.phone": "Teléfono",
  "contact.form.date": "Fecha deseada",
  "contact.form.experience": "Tipo de experiencia",
  "contact.form.exp.basic": "Ruta Básica (30 min)",
  "contact.form.exp.classic": "Ruta Clásica (60 min)",
  "contact.form.exp.sunset": "Ruta Atardecer (90 min)",
  "contact.form.exp.private": "Excursión Privada",
  "contact.form.message": "Mensaje",
  "contact.form.submit": "Enviar consulta",
  "cta.title": "¿Listo para la aventura?",
  "cta.subtitle": "Reserva tu experiencia en jet ski hoy",
  "cta.whatsapp": "Reservar por WhatsApp",
  "cta.call": "Llamar ahora",
  "footer.links": "Enlaces rápidos",
  "footer.legal": "Aviso legal",
  "footer.privacy": "Política de privacidad",
  "footer.copyright": "© 2025 Mallorca JetSki. Todos los derechos reservados."
}
```

- [ ] **Step 2: Crear `assets/i18n/en.json`**

```json
{
  "nav.home": "Home",
  "nav.prices": "Prices",
  "nav.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.book": "Book now",
  "hero.label": "Cala Millor · Mallorca",
  "hero.title": "Jet Ski Rental in Cala Millor",
  "hero.subtitle": "Live a unique experience at sea with our jet skis",
  "hero.cta.whatsapp": "Book via WhatsApp",
  "hero.cta.prices": "See prices",
  "hero.badge.license": "No licence needed",
  "hero.badge.instructor": "Instructor included",
  "hero.badge.booking": "Quick booking",
  "hero.badge.safety": "Safe experience",
  "feature.label": "Our service",
  "feature.title": "Jet ski rental in Mallorca",
  "feature.desc": "Enjoy the freedom of the Mediterranean Sea. Our routes are guided by professional instructors. No nautical licence required — we take care of you from the very first moment.",
  "feature.cta": "Start the adventure",
  "experiences.label": "Our routes",
  "experiences.title": "Choose your experience",
  "exp.basic.title": "Basic Route",
  "exp.basic.desc": "Perfect for beginners",
  "exp.basic.duration": "30 MIN",
  "exp.basic.price": "60€",
  "exp.classic.title": "Classic Route",
  "exp.classic.desc": "Most popular · Couples & friends",
  "exp.classic.duration": "60 MIN",
  "exp.classic.badge": "⭐ POPULAR",
  "exp.classic.price": "100€",
  "exp.sunset.title": "Sunset Route",
  "exp.sunset.desc": "A unique experience as the sun goes down",
  "exp.sunset.duration": "🌅 SUNSET · 90 MIN",
  "exp.sunset.price": "140€",
  "exp.private.title": "Private Excursion",
  "exp.private.desc": "For groups and special occasions",
  "exp.private.duration": "⭐ SPECIAL PACK",
  "exp.private.price": "200€",
  "exp.book": "Book →",
  "exp.from": "from",
  "exp.note": "Indicative prices. Check availability and conditions.",
  "features.label": "Included",
  "features.title": "What's included?",
  "feat.lifejacket": "Life jacket for all passengers",
  "feat.delivery": "Drop-off and pick-up at agreed location",
  "feat.instructor": "Professional instructor throughout",
  "feat.briefing": "Initial safety briefing",
  "feat.snorkel": "Snorkel kit",
  "fleet.label": "Our fleet",
  "fleet.title": "Jet skis in Cala Millor",
  "fleet.desc": "Modern, powerful and safe jet skis. Perfect for beginners and experienced riders. Checked daily to ensure your safety.",
  "fleet.spec1.title": "ST3 Hull™ Shell",
  "fleet.spec1.sub": "Fibreglass",
  "fleet.spec2.title": "iTC™ System",
  "fleet.spec2.sub": "Powerful engine",
  "fleet.spec3.title": "ECO® Mode (70L)",
  "fleet.spec3.sub": "Efficient consumption",
  "why.label": "Why us?",
  "why.title": "Your safety, our priority",
  "why.1": "Modern jet skis",
  "why.2": "Professional instructors",
  "why.3": "Safety included",
  "why.4": "Families & friends",
  "why.5": "Book via WhatsApp",
  "why.6": "Prime location",
  "reviews.label": "Reviews",
  "reviews.title": "What our customers say",
  "steps.label": "How it works",
  "steps.title": "Book in 4 steps",
  "step.1": "Choose your experience",
  "step.2": "Contact us on WhatsApp",
  "step.3": "Confirm date and time",
  "step.4": "Enjoy your jet ski route!",
  "safety.label": "Safety",
  "safety.title": "Safety first",
  "safety.1": "Life jacket included",
  "safety.2": "Mandatory initial briefing",
  "safety.3": "Professional instructor at all times",
  "safety.4": "Basic rules explained before departure",
  "safety.5": "Suitable for beginners",
  "faq.label": "FAQ",
  "faq.title": "Any questions?",
  "faq.1.q": "Do I need a nautical licence?",
  "faq.1.a": "No. Our outings are guided by a professional instructor. No nautical qualification is required to enjoy the experience.",
  "faq.2.q": "Can two people ride one jet ski?",
  "faq.2.a": "Yes, our jet skis accommodate two people per unit.",
  "faq.3.q": "What should I bring?",
  "faq.3.a": "Swimwear, sunscreen and a sense of adventure. We provide everything else: life jacket, briefing and jet ski.",
  "faq.4.q": "What is the minimum age?",
  "faq.4.a": "Under-18s must be accompanied by an adult. We recommend a minimum age of 12 years to ride.",
  "faq.5.q": "What if the weather is bad?",
  "faq.5.a": "In adverse weather conditions, we reschedule at no cost or give you a full refund.",
  "faq.6.q": "How can I book?",
  "faq.6.a": "The quickest way is via WhatsApp. You can also call us or send a contact form and we'll reply within 2 hours.",
  "gallery.label": "Gallery",
  "gallery.title": "Unique moments",
  "contact.label": "Contact",
  "contact.title": "Where to find us",
  "contact.address": "Cala Millor, Mallorca",
  "contact.howto": "Get directions",
  "contact.form.title": "Get in touch",
  "contact.form.name": "Name",
  "contact.form.phone": "Phone",
  "contact.form.date": "Desired date",
  "contact.form.experience": "Type of experience",
  "contact.form.exp.basic": "Basic Route (30 min)",
  "contact.form.exp.classic": "Classic Route (60 min)",
  "contact.form.exp.sunset": "Sunset Route (90 min)",
  "contact.form.exp.private": "Private Excursion",
  "contact.form.message": "Message",
  "contact.form.submit": "Send enquiry",
  "cta.title": "Ready for the adventure?",
  "cta.subtitle": "Book your jet ski experience today",
  "cta.whatsapp": "Book via WhatsApp",
  "cta.call": "Call now",
  "footer.links": "Quick links",
  "footer.legal": "Legal notice",
  "footer.privacy": "Privacy policy",
  "footer.copyright": "© 2025 Mallorca JetSki. All rights reserved."
}
```

- [ ] **Step 3: Implementar i18n en `assets/js/main.js`**

```javascript
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

function renderContactInfo() {
  const msg = encodeURIComponent(CONFIG.whatsappMsg);
  const waHref = `https://api.whatsapp.com/send/?phone=${CONFIG.whatsapp}&text=${msg}`;
  document.querySelectorAll('[data-whatsapp]').forEach(el => { el.href = waHref; });
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

function initNavScroll() {
  const header = document.querySelector('#site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  renderContactInfo();
  initWhatsAppDebounce();
  initNavScroll();
});
```

- [ ] **Step 4: Verificar i18n**

Abrir `index.html`. En consola JS ejecutar `switchLang('en')` — no debe lanzar errores. Verificar que `document.documentElement.lang` cambia a `en`.

- [ ] **Step 5: Commit**

```bash
git add assets/i18n/ assets/js/main.js
git commit -m "feat: i18n system with ES/EN JSON and vanilla JS switcher"
```

---

## Task 3: Header

**Files:**
- Modify: `index.html` (añadir sección header)
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML del header en `index.html`** (dentro de `<body>`, antes de los scripts)

```html
<!-- ===== HEADER ===== -->
<header id="site-header" class="site-header">
  <div class="container-fluid px-4">
    <nav class="navbar navbar-expand-lg p-0">

      <!-- Logo -->
      <a class="navbar-brand logo-link" href="#hero">
        <span class="logo-text">
          <span class="logo-wave">〜</span>
          <span class="logo-brand">
            <span class="logo-top">MALLORCA</span>
            <span class="logo-sub">JETSKI</span>
          </span>
        </span>
      </a>

      <!-- Mobile toggle -->
      <button class="navbar-toggler border-0 text-white" type="button"
        data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-3">
          <li class="nav-item"><a class="nav-link" href="#hero" data-i18n="nav.home">Inicio</a></li>
          <li class="nav-item"><a class="nav-link" href="#experiencias" data-i18n="nav.prices">Tarifas</a></li>
          <li class="nav-item"><a class="nav-link" href="#galeria" data-i18n="nav.gallery">Galería</a></li>
          <li class="nav-item"><a class="nav-link" href="#contacto" data-i18n="nav.contact">Contacto</a></li>
          <li class="nav-item ms-lg-2">
            <a class="btn-cta btn-cta--sm" href="#contacto" data-i18n="nav.book">Reservar ahora</a>
          </li>
          <!-- Language switcher -->
          <li class="nav-item ms-lg-2">
            <div class="lang-switcher">
              <button data-lang-btn="es" class="lang-btn active">ES</button>
              <span class="lang-sep">|</span>
              <button data-lang-btn="en" class="lang-btn">EN</button>
            </div>
          </li>
        </ul>
      </div>

    </nav>
  </div>
</header>
```

- [ ] **Step 2: Añadir CSS del header en `assets/css/styles.css`**

```css
/* =============================================
   HEADER
   ============================================= */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  transition: background-color var(--transition), box-shadow var(--transition);
  padding: 16px 0;
}
.site-header.scrolled {
  background-color: var(--color-dark);
  box-shadow: 0 2px 16px rgba(0,0,0,0.3);
  padding: 8px 0;
}
.navbar-toggler-icon { filter: invert(1); }

.logo-link { text-decoration: none; display: flex; align-items: center; gap: 8px; }
.logo-wave { color: var(--color-cta); font-size: 1.6rem; line-height: 1; }
.logo-brand { display: flex; flex-direction: column; }
.logo-top {
  color: var(--color-white);
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 3px;
  line-height: 1;
}
.logo-sub {
  color: var(--color-cta);
  font-family: var(--font-title);
  font-weight: 400;
  font-size: 0.6rem;
  letter-spacing: 6px;
  line-height: 1.6;
}

.nav-link {
  color: rgba(255,255,255,0.85) !important;
  font-weight: 600;
  font-size: 0.875rem;
  transition: color var(--transition);
}
.nav-link:hover { color: var(--color-cta) !important; }

.btn-cta--sm { padding: 8px 20px; font-size: 0.8rem; }

.lang-switcher { display: flex; align-items: center; gap: 4px; }
.lang-btn {
  background: none;
  border: none;
  color: rgba(255,255,255,0.6);
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  padding: 2px 4px;
  transition: color var(--transition);
}
.lang-btn.active, .lang-btn:hover { color: var(--color-cta); }
.lang-sep { color: rgba(255,255,255,0.3); font-size: 0.75rem; }

@media (max-width: 991px) {
  .site-header { background-color: var(--color-dark); }
  #mainNav { background-color: var(--color-dark); padding: 16px 0; }
  .nav-link { padding: 8px 0; }
  .btn-cta--sm { margin: 8px 0; }
  .lang-switcher { margin: 8px 0; }
}
```

- [ ] **Step 3: Verificar en navegador**

El header debe ser transparente en la parte superior y cambiar a azul oscuro al hacer scroll. El logo "MALLORCA JETSKI" debe ser visible. En móvil, el menú hamburguesa debe funcionar.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: sticky header with logo, nav, lang switcher and scroll effect"
```

---

## Task 4: Hero con slideshow CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML del hero**

```html
<!-- ===== HERO ===== -->
<section id="hero" class="hero-section">

  <!-- CSS Slideshow (3 imágenes) -->
  <div class="hero-slides" aria-hidden="true">
    <div class="hero-slide hero-slide--1"></div>
    <div class="hero-slide hero-slide--2"></div>
    <div class="hero-slide hero-slide--3"></div>
  </div>
  <div class="hero-overlay"></div>

  <!-- Contenido -->
  <div class="container h-100 d-flex align-items-center">
    <div class="hero-content text-center text-lg-start">
      <span class="section-label" data-i18n="hero.label">Cala Millor · Mallorca</span>
      <h1 class="hero-title" data-i18n="hero.title">Alquiler de Jet Ski en Cala Millor</h1>
      <p class="hero-subtitle" data-i18n="hero.subtitle">Vive una experiencia única en el mar con nuestras motos de agua</p>

      <div class="hero-ctas d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
        <a href="#" class="btn-cta" data-whatsapp data-i18n="hero.cta.whatsapp">Reservar por WhatsApp</a>
        <a href="#experiencias" class="btn-outline-light-brand" data-i18n="hero.cta.prices">Ver precios</a>
      </div>

      <div class="hero-badges d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
        <span class="hero-badge" data-i18n="hero.badge.license">Sin licencia</span>
        <span class="hero-badge" data-i18n="hero.badge.instructor">Instructor incluido</span>
        <span class="hero-badge hero-badge--accent" data-i18n="hero.badge.booking">Reserva rápida</span>
        <span class="hero-badge" data-i18n="hero.badge.safety">Experiencia segura</span>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Añadir CSS del hero**

```css
/* =============================================
   HERO
   ============================================= */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* Slideshow */
.hero-slides {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: heroFade 27s infinite;
}
.hero-slide--1 {
  background-image: url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80');
  animation-delay: 0s;
}
.hero-slide--2 {
  background-image: url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80');
  animation-delay: 9s;
}
.hero-slide--3 {
  background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80');
  animation-delay: 18s;
}
@keyframes heroFade {
  0%   { opacity: 0; }
  5%   { opacity: 1; }
  30%  { opacity: 1; }
  35%  { opacity: 0; }
  100% { opacity: 0; }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, rgba(3,4,94,0.75) 0%, rgba(0,119,182,0.4) 100%);
  z-index: 1;
}

.hero-section .container { position: relative; z-index: 2; }

.hero-content { max-width: 680px; }

.hero-title {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-white);
  line-height: 1.1;
  margin-bottom: 16px;
}
.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255,255,255,0.85);
  margin-bottom: 28px;
  max-width: 540px;
}

.hero-badge {
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  color: var(--color-white);
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 0.75rem;
  padding: 6px 14px;
  border-radius: 20px;
  backdrop-filter: blur(4px);
}
.hero-badge--accent {
  background: var(--color-cta);
  border-color: var(--color-cta);
}

@media (max-width: 767px) {
  .hero-section { min-height: 100svh; }
  .hero-content { text-align: center !important; }
  .hero-ctas, .hero-badges { justify-content: center !important; }
}
```

- [ ] **Step 3: Verificar slideshow**

Las 3 imágenes deben rotar cada 9 segundos con fundido suave. Los botones y badges deben ser visibles. Verificar en móvil que el hero ocupa la pantalla completa.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: hero section with CSS-only slideshow and CTAs"
```

---

## Task 5: Sección tipográfica dramática

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML**

```html
<!-- ===== SECCIÓN TIPOGRÁFICA ===== -->
<section class="typo-section" aria-hidden="true">
  <div class="typo-inner">
    <span class="typo-top">JET SKI</span>
    <img
      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80"
      alt="Jet ski en el mar de Mallorca"
      class="typo-img"
      loading="lazy">
    <span class="typo-bottom">MALLORCA</span>
  </div>
</section>
```

- [ ] **Step 2: Añadir CSS**

```css
/* =============================================
   SECCIÓN TIPOGRÁFICA
   ============================================= */
.typo-section {
  background: var(--color-white);
  overflow: hidden;
  padding: 0;
  position: relative;
}
.typo-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}
.typo-top, .typo-bottom {
  font-family: var(--font-title);
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;
  display: block;
  width: 100%;
  text-align: center;
}
.typo-top {
  font-size: clamp(4rem, 15vw, 14rem);
  color: var(--color-dark);
  margin-bottom: -0.15em;
  position: relative;
  z-index: 2;
}
.typo-bottom {
  font-size: clamp(3rem, 11vw, 10rem);
  color: rgba(3,4,94,0.12);
  margin-top: -0.1em;
  position: relative;
  z-index: 0;
}
.typo-img {
  width: min(700px, 90vw);
  position: relative;
  z-index: 1;
  margin: -0.25em 0;
  display: block;
  object-fit: contain;
}
```

- [ ] **Step 3: Verificar**

Debe verse "JET SKI" en grande, la imagen de la moto solapada encima, y "MALLORCA" debajo en gris translúcido. Efecto impacto visual.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: dramatic typography section with overlapping jet ski image"
```

---

## Task 6: Feature section (2 columnas)

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML**

```html
<!-- ===== FEATURE: SERVICIO ===== -->
<section id="servicio" class="feature-section py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">

      <!-- Texto izquierda -->
      <div class="col-lg-6">
        <span class="section-label" data-i18n="feature.label">Nuestro servicio</span>
        <h2 class="section-title mb-4" data-i18n="feature.title">Alquiler de motos de agua en Mallorca</h2>
        <p class="feature-desc" data-i18n="feature.desc">Disfruta de la libertad en el mar mediterráneo...</p>
        <a href="#" class="btn-cta mt-3" data-whatsapp data-i18n="feature.cta">Empezar la aventura</a>
      </div>

      <!-- Grid de fotos derecha -->
      <div class="col-lg-6">
        <div class="feature-grid">
          <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80"
            alt="Jet ski in action in Mallorca" loading="lazy" class="feature-grid__img">
          <img src="https://images.unsplash.com/photo-1602139684435-82bf9c1b5e4c?w=400&q=80"
            alt="Couple on jet ski Mallorca" loading="lazy" class="feature-grid__img">
          <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80"
            alt="Jet ski on Mediterranean sea" loading="lazy" class="feature-grid__img">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
            alt="Sunset at sea Mallorca" loading="lazy" class="feature-grid__img">
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: CSS**

```css
/* =============================================
   FEATURE SECTION
   ============================================= */
.bg-light-brand { background-color: var(--color-light); }
.py-section { padding: 96px 0; }
@media (max-width: 767px) { .py-section { padding: 64px 0; } }

.feature-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text);
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.feature-grid__img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 12px;
  transition: transform var(--transition);
}
.feature-grid__img:hover { transform: scale(1.03); }
```

- [ ] **Step 3: Verificar**

Grid de 4 fotos a la derecha, texto a la izquierda. En móvil se apila verticalmente.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: feature section with 2-column layout and photo grid"
```

---

## Task 7: Tarjetas de experiencias

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML**

```html
<!-- ===== EXPERIENCIAS / TARIFAS ===== -->
<section id="experiencias" class="py-section bg-dark-brand">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" data-i18n="experiences.label">Nuestras rutas</span>
      <h2 class="section-title section-title--light" data-i18n="experiences.title">Elige tu experiencia</h2>
    </div>

    <div class="exp-grid">

      <!-- Card 1: 30 min -->
      <div class="exp-card">
        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
          alt="Basic 30 minute jet ski route Cala Millor" loading="lazy" class="exp-card__img">
        <div class="exp-card__overlay"></div>
        <span class="exp-card__badge" data-i18n="exp.basic.duration">30 MIN</span>
        <div class="exp-card__body">
          <h3 class="exp-card__title" data-i18n="exp.basic.title">Ruta Básica</h3>
          <p class="exp-card__desc" data-i18n="exp.basic.desc">Perfecta para empezar</p>
          <div class="exp-card__footer">
            <div>
              <span class="exp-card__from" data-i18n="exp.from">desde</span>
              <span class="exp-card__price" data-i18n="exp.basic.price">60€</span>
            </div>
            <a href="#" class="exp-card__btn" data-whatsapp data-i18n="exp.book">Reservar →</a>
          </div>
        </div>
      </div>

      <!-- Card 2: 60 min -->
      <div class="exp-card">
        <img src="https://images.unsplash.com/photo-1602139684435-82bf9c1b5e4c?w=600&q=80"
          alt="Classic 60 minute jet ski route Mallorca" loading="lazy" class="exp-card__img">
        <div class="exp-card__overlay"></div>
        <span class="exp-card__badge exp-card__badge--popular" data-i18n="exp.classic.badge">⭐ POPULAR</span>
        <div class="exp-card__body">
          <h3 class="exp-card__title" data-i18n="exp.classic.title">Ruta Clásica</h3>
          <p class="exp-card__desc" data-i18n="exp.classic.desc">La más popular · Parejas y amigos</p>
          <div class="exp-card__footer">
            <div>
              <span class="exp-card__from" data-i18n="exp.from">desde</span>
              <span class="exp-card__price" data-i18n="exp.classic.price">100€</span>
            </div>
            <a href="#" class="exp-card__btn" data-whatsapp data-i18n="exp.book">Reservar →</a>
          </div>
        </div>
      </div>

      <!-- Card 3: Sunset -->
      <div class="exp-card exp-card--sunset">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
          alt="Sunset jet ski route Mallorca" loading="lazy" class="exp-card__img">
        <div class="exp-card__overlay exp-card__overlay--sunset"></div>
        <span class="exp-card__badge" data-i18n="exp.sunset.duration">🌅 SUNSET · 90 MIN</span>
        <div class="exp-card__body">
          <h3 class="exp-card__title" data-i18n="exp.sunset.title">Ruta Atardecer</h3>
          <p class="exp-card__desc" data-i18n="exp.sunset.desc">Una experiencia única al caer el sol</p>
          <div class="exp-card__footer">
            <div>
              <span class="exp-card__from" data-i18n="exp.from">desde</span>
              <span class="exp-card__price" data-i18n="exp.sunset.price">140€</span>
            </div>
            <a href="#" class="exp-card__btn exp-card__btn--light" data-whatsapp data-i18n="exp.book">Reservar →</a>
          </div>
        </div>
      </div>

      <!-- Card 4: Privada -->
      <div class="exp-card">
        <img src="https://images.unsplash.com/photo-1591491747953-962d013f4876?w=600&q=80"
          alt="Private jet ski excursion Mallorca group" loading="lazy" class="exp-card__img">
        <div class="exp-card__overlay"></div>
        <span class="exp-card__badge" data-i18n="exp.private.duration">⭐ PACK ESPECIAL</span>
        <div class="exp-card__body">
          <h3 class="exp-card__title" data-i18n="exp.private.title">Excursión Privada</h3>
          <p class="exp-card__desc" data-i18n="exp.private.desc">Para grupos y ocasiones especiales</p>
          <div class="exp-card__footer">
            <div>
              <span class="exp-card__from" data-i18n="exp.from">desde</span>
              <span class="exp-card__price" data-i18n="exp.private.price">200€</span>
            </div>
            <a href="#" class="exp-card__btn" data-whatsapp data-i18n="exp.book">Reservar →</a>
          </div>
        </div>
      </div>

    </div>
    <p class="text-center mt-4" style="color:rgba(255,255,255,0.5); font-size:0.8rem;" data-i18n="exp.note">
      Precios orientativos. Consulta disponibilidad y condiciones.
    </p>
  </div>
</section>
```

- [ ] **Step 2: CSS**

```css
/* =============================================
   TARJETAS EXPERIENCIAS
   ============================================= */
.exp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
@media (max-width: 767px) { .exp-grid { grid-template-columns: 1fr; } }

.exp-card {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
  height: 360px;
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
.exp-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.exp-card:hover .exp-card__img { transform: scale(1.06); }

.exp-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(3,4,94,0.92) 0%, rgba(3,4,94,0.25) 55%, transparent 100%);
}
.exp-card__overlay--sunset {
  background: linear-gradient(0deg, rgba(255,107,53,0.88) 0%, rgba(3,4,94,0.25) 55%, transparent 100%);
}

.exp-card__badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--color-cta);
  color: var(--color-white);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.7rem;
  padding: 5px 12px;
  border-radius: 20px;
  letter-spacing: 1px;
  z-index: 2;
}
.exp-card__badge--popular { background: var(--color-dark); }

.exp-card__body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  z-index: 2;
}
.exp-card__title {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--color-white);
  margin-bottom: 4px;
}
.exp-card__desc {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.75);
  margin-bottom: 12px;
}
.exp-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.exp-card__from {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.6);
  margin-right: 4px;
}
.exp-card__price {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 1.6rem;
  color: var(--color-cta);
}
.exp-card--sunset .exp-card__price { color: var(--color-white); }

.exp-card__btn {
  background: var(--color-cta);
  color: var(--color-white);
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 0.78rem;
  padding: 10px 18px;
  border-radius: 50px;
  text-decoration: none;
  transition: background var(--transition), transform var(--transition);
  white-space: nowrap;
}
.exp-card__btn:hover { background: #e55a28; color: #fff; transform: translateY(-2px); }
.exp-card__btn--light { background: var(--color-white); color: var(--color-cta); }
.exp-card__btn--light:hover { background: #f0f0f0; color: var(--color-cta); }
```

- [ ] **Step 3: Verificar**

4 tarjetas en grid 2×2. Hover: zoom suave en la imagen. Las tarjetas son clickables y llevan al WhatsApp.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: experience cards with full-bleed images and overlay design"
```

---

## Task 8: Secciones de contenido (características, flota, ventajas, reseñas, pasos, seguridad)

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML — características del servicio**

```html
<!-- ===== CARACTERÍSTICAS ===== -->
<section id="caracteristicas" class="py-section bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" data-i18n="features.label">Incluido</span>
      <h2 class="section-title" data-i18n="features.title">¿Qué incluye el servicio?</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <ul class="checklist">
          <li class="checklist__item checklist__item--yes" data-i18n="feat.lifejacket">Chaleco salvavidas para todos los ocupantes</li>
          <li class="checklist__item checklist__item--yes" data-i18n="feat.delivery">Entrega y recogida en el punto acordado</li>
          <li class="checklist__item checklist__item--yes" data-i18n="feat.instructor">Monitor profesional durante toda la ruta</li>
          <li class="checklist__item checklist__item--yes" data-i18n="feat.briefing">Briefing de seguridad inicial</li>
          <li class="checklist__item checklist__item--yes" data-i18n="feat.snorkel">Kit de snorkel</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Añadir HTML — flota**

```html
<!-- ===== FLOTA ===== -->
<section id="flota" class="py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-5">
        <span class="section-label" data-i18n="fleet.label">Nuestra flota</span>
        <h2 class="section-title mb-4" data-i18n="fleet.title">Motos acuáticas en Cala Millor</h2>
        <p class="feature-desc mb-5" data-i18n="fleet.desc">Contamos con motos de agua modernas...</p>
        <div class="fleet-specs">
          <div class="fleet-spec">
            <span class="fleet-spec__icon">🏄</span>
            <div>
              <strong data-i18n="fleet.spec1.title">Casco ST3 Hull™</strong>
              <small data-i18n="fleet.spec1.sub">Fibra de vidrio</small>
            </div>
          </div>
          <div class="fleet-spec">
            <span class="fleet-spec__icon">⚙️</span>
            <div>
              <strong data-i18n="fleet.spec2.title">Sistema iTC™</strong>
              <small data-i18n="fleet.spec2.sub">Motor potente</small>
            </div>
          </div>
          <div class="fleet-spec">
            <span class="fleet-spec__icon">💧</span>
            <div>
              <strong data-i18n="fleet.spec3.title">Modo ECO® (70L)</strong>
              <small data-i18n="fleet.spec3.sub">Consumo eficiente</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
          alt="Modern jet ski Sea Doo in Mallorca" loading="lazy"
          class="fleet-img rounded-4 shadow-lg w-100">
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Añadir HTML — por qué elegirnos**

```html
<!-- ===== POR QUÉ ELEGIRNOS ===== -->
<section id="ventajas" class="py-section bg-dark-brand">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" data-i18n="why.label">¿Por qué nosotros?</span>
      <h2 class="section-title section-title--light" data-i18n="why.title">Tu seguridad, nuestra prioridad</h2>
    </div>
    <div class="why-grid">
      <div class="why-item"><span class="why-icon">🏍️</span><span data-i18n="why.1">Motos modernas</span></div>
      <div class="why-item"><span class="why-icon">👨‍🏫</span><span data-i18n="why.2">Monitores profesionales</span></div>
      <div class="why-item"><span class="why-icon">🛡️</span><span data-i18n="why.3">Seguridad incluida</span></div>
      <div class="why-item"><span class="why-icon">👨‍👩‍👧</span><span data-i18n="why.4">Familias y amigos</span></div>
      <div class="why-item"><span class="why-icon">📱</span><span data-i18n="why.5">Reserva por WhatsApp</span></div>
      <div class="why-item"><span class="why-icon">📍</span><span data-i18n="why.6">Ubicación privilegiada</span></div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Añadir HTML — reseñas**

```html
<!-- ===== RESEÑAS ===== -->
<section id="resenas" class="py-section bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" data-i18n="reviews.label">Opiniones</span>
      <h2 class="section-title" data-i18n="reviews.title">Lo que dicen de nosotros</h2>
    </div>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <p class="review-text">"Experiencia increíble. Los monitores son muy profesionales y las motos son modernas. Sin duda repetiremos el año que viene."</p>
          <div class="review-author">— María G., Barcelona</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <p class="review-text">"Amazing experience! No licence needed and the instructor was fantastic. Highly recommend for families visiting Mallorca."</p>
          <div class="review-author">— James T., London</div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <p class="review-text">"Perfekt organisiert und super Spaß! Die Jetskis waren nagelneu und der Service war erstklassig. Absolut empfehlenswert!"</p>
          <div class="review-author">— Klaus M., München</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Añadir HTML — proceso, seguridad**

```html
<!-- ===== PROCESO ===== -->
<section id="proceso" class="py-section bg-ocean">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" style="color:rgba(255,255,255,0.7)" data-i18n="steps.label">¿Cómo funciona?</span>
      <h2 class="section-title section-title--light" data-i18n="steps.title">Reserva en 4 pasos</h2>
    </div>
    <div class="steps-list mx-auto" style="max-width:560px">
      <div class="step-item"><span class="step-num">1</span><span data-i18n="step.1">Elige tu experiencia</span></div>
      <div class="step-item"><span class="step-num">2</span><span data-i18n="step.2">Contacta por WhatsApp</span></div>
      <div class="step-item"><span class="step-num">3</span><span data-i18n="step.3">Confirma día y hora</span></div>
      <div class="step-item"><span class="step-num">4</span><span data-i18n="step.4">¡Disfruta tu ruta en jet ski!</span></div>
    </div>
  </div>
</section>

<!-- ===== SEGURIDAD ===== -->
<section id="seguridad" class="py-section bg-light-brand">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" data-i18n="safety.label">Seguridad</span>
      <h2 class="section-title" data-i18n="safety.title">Tu seguridad, primero</h2>
    </div>
    <div class="row justify-content-center g-3">
      <div class="col-md-8">
        <div class="safety-item"><span>🦺</span><span data-i18n="safety.1">Chaleco salvavidas incluido</span></div>
        <div class="safety-item"><span>📋</span><span data-i18n="safety.2">Briefing inicial obligatorio</span></div>
        <div class="safety-item"><span>👨‍🏫</span><span data-i18n="safety.3">Monitor profesional en todo momento</span></div>
        <div class="safety-item"><span>📖</span><span data-i18n="safety.4">Normas básicas explicadas antes de salir</span></div>
        <div class="safety-item"><span>✅</span><span data-i18n="safety.5">Apto para principiantes</span></div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 6: CSS para todas estas secciones**

```css
/* =============================================
   CARACTERÍSTICAS / CHECKLIST
   ============================================= */
.checklist { list-style: none; padding: 0; }
.checklist__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: var(--color-light);
  border-radius: 10px;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 0.95rem;
}
.checklist__item--yes::before { content: '✓'; color: var(--color-ocean); font-weight: 800; font-size: 1.1rem; }
.checklist__item--no::before  { content: '✗'; color: #dc3545; font-weight: 800; font-size: 1.1rem; }

/* =============================================
   FLOTA
   ============================================= */
.fleet-specs { display: flex; flex-direction: column; gap: 16px; }
.fleet-spec {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: var(--color-white);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.fleet-spec__icon { font-size: 1.6rem; }
.fleet-spec strong { display: block; font-family: var(--font-title); font-weight: 700; color: var(--color-dark); }
.fleet-spec small  { color: #666; font-size: 0.8rem; }
.fleet-img { max-height: 400px; object-fit: cover; }

/* =============================================
   POR QUÉ ELEGIRNOS
   ============================================= */
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
@media (max-width: 767px) { .why-grid { grid-template-columns: 1fr 1fr; } }
.why-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  color: rgba(255,255,255,0.9);
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 0.875rem;
}
.why-icon { font-size: 2rem; }

/* =============================================
   RESEÑAS
   ============================================= */
.review-card {
  background: var(--color-light);
  border-radius: 16px;
  padding: 28px;
  height: 100%;
  border-left: 4px solid var(--color-cta);
}
.review-stars { font-size: 1rem; margin-bottom: 12px; }
.review-text  { font-size: 0.9rem; color: var(--color-text); line-height: 1.6; font-style: italic; }
.review-author { font-family: var(--font-title); font-weight: 700; font-size: 0.8rem; color: var(--color-dark); margin-top: 12px; }

/* =============================================
   PROCESO
   ============================================= */
.steps-list { display: flex; flex-direction: column; gap: 12px; }
.step-item {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--color-white);
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 1rem;
}
.step-num {
  background: var(--color-cta);
  color: var(--color-white);
  font-weight: 800;
  font-size: 0.9rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* =============================================
   SEGURIDAD
   ============================================= */
.safety-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  background: var(--color-white);
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  font-weight: 600;
}
.safety-item span:first-child { font-size: 1.3rem; }
```

- [ ] **Step 7: Verificar todas las secciones**

Scroll completo de la página. Todas las secciones deben estar visibles, legibles y con buena separación. Verificar en móvil.

- [ ] **Step 8: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: content sections - features, fleet, why-us, reviews, steps, safety"
```

---

## Task 9: FAQ + Galería

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML — FAQ**

```html
<!-- ===== FAQ ===== -->
<section id="faq" class="py-section bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 mb-5 mb-lg-0">
        <span class="section-label" data-i18n="faq.label">Preguntas frecuentes</span>
        <h2 class="section-title" data-i18n="faq.title">¿Tienes dudas?</h2>
      </div>
      <div class="col-lg-7">
        <div class="accordion" id="faqAccordion">

          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#faq1">
                <span data-i18n="faq.1.q">¿Necesito licencia náutica?</span>
              </button>
            </h3>
            <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body faq-body" data-i18n="faq.1.a">No. Nuestras salidas son guiadas...</div>
            </div>
          </div>

          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#faq2">
                <span data-i18n="faq.2.q">¿Pueden ir dos personas en una moto?</span>
              </button>
            </h3>
            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body faq-body" data-i18n="faq.2.a">Sí, nuestras motos...</div>
            </div>
          </div>

          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#faq3">
                <span data-i18n="faq.3.q">¿Qué debo llevar?</span>
              </button>
            </h3>
            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body faq-body" data-i18n="faq.3.a">Bañador, crema solar...</div>
            </div>
          </div>

          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#faq4">
                <span data-i18n="faq.4.q">¿Desde qué edad se puede participar?</span>
              </button>
            </h3>
            <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body faq-body" data-i18n="faq.4.a">Los menores de 18 años...</div>
            </div>
          </div>

          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#faq5">
                <span data-i18n="faq.5.q">¿Qué pasa si hace mal tiempo?</span>
              </button>
            </h3>
            <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body faq-body" data-i18n="faq.5.a">En caso de condiciones...</div>
            </div>
          </div>

          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#faq6">
                <span data-i18n="faq.6.q">¿Cómo puedo reservar?</span>
              </button>
            </h3>
            <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body faq-body" data-i18n="faq.6.a">La forma más rápida...</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Añadir HTML — Galería con lightbox CSS**

```html
<!-- ===== GALERÍA ===== -->
<section id="galeria" class="py-section bg-light-brand">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" data-i18n="gallery.label">Galería</span>
      <h2 class="section-title" data-i18n="gallery.title">Momentos únicos</h2>
    </div>
    <div class="gallery-grid">

      <a href="#gimg1" class="gallery-item">
        <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80"
          alt="Jet ski in action in Cala Millor Mallorca" loading="lazy">
      </a>
      <a href="#gimg2" class="gallery-item">
        <img src="https://images.unsplash.com/photo-1602139684435-82bf9c1b5e4c?w=600&q=80"
          alt="Couple enjoying jet ski tour in Mallorca" loading="lazy">
      </a>
      <a href="#gimg3" class="gallery-item">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
          alt="Water sports Mediterranean sea Mallorca" loading="lazy">
      </a>
      <a href="#gimg4" class="gallery-item">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
          alt="Sunset at sea Cala Millor Mallorca" loading="lazy">
      </a>
      <a href="#gimg5" class="gallery-item">
        <img src="https://images.unsplash.com/photo-1591491747953-962d013f4876?w=600&q=80"
          alt="Group jet ski excursion Mallorca" loading="lazy">
      </a>
      <a href="#gimg6" class="gallery-item">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
          alt="Crystal clear sea Cala Millor Mallorca beach" loading="lazy">
      </a>

    </div>
  </div>

  <!-- Lightbox CSS :target -->
  <div id="gimg1" class="lightbox"><a href="#galeria" class="lightbox__close">✕</a>
    <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=85" alt="Jet ski in action in Cala Millor Mallorca"></div>
  <div id="gimg2" class="lightbox"><a href="#galeria" class="lightbox__close">✕</a>
    <img src="https://images.unsplash.com/photo-1602139684435-82bf9c1b5e4c?w=1200&q=85" alt="Couple enjoying jet ski tour in Mallorca"></div>
  <div id="gimg3" class="lightbox"><a href="#galeria" class="lightbox__close">✕</a>
    <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=85" alt="Water sports Mediterranean sea Mallorca"></div>
  <div id="gimg4" class="lightbox"><a href="#galeria" class="lightbox__close">✕</a>
    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85" alt="Sunset at sea Cala Millor Mallorca"></div>
  <div id="gimg5" class="lightbox"><a href="#galeria" class="lightbox__close">✕</a>
    <img src="https://images.unsplash.com/photo-1591491747953-962d013f4876?w=1200&q=85" alt="Group jet ski excursion Mallorca"></div>
  <div id="gimg6" class="lightbox"><a href="#galeria" class="lightbox__close">✕</a>
    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85" alt="Crystal clear sea Cala Millor Mallorca beach"></div>
</section>
```

- [ ] **Step 3: CSS FAQ y galería**

```css
/* =============================================
   FAQ
   ============================================= */
.faq-item { border: none; border-bottom: 1px solid rgba(0,0,0,0.1); background: transparent; }
.faq-btn {
  background: transparent;
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-dark);
  padding: 20px 0;
  box-shadow: none !important;
}
.faq-btn::after { color: var(--color-cta); }
.faq-btn:not(.collapsed) { color: var(--color-cta); background: transparent; }
.faq-body { color: var(--color-text); font-size: 0.95rem; line-height: 1.7; padding: 0 0 20px 0; }

/* =============================================
   GALERÍA
   ============================================= */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
@media (max-width: 767px) { .gallery-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .gallery-grid { grid-template-columns: 1fr; } }

.gallery-item { display: block; overflow: hidden; border-radius: 12px; }
.gallery-item img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.gallery-item:hover img { transform: scale(1.06); }

/* Lightbox CSS :target */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 9999;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.lightbox:target { display: flex; }
.lightbox img { max-width: 90vw; max-height: 90vh; object-fit: contain; border-radius: 8px; }
.lightbox__close {
  position: absolute;
  top: 20px;
  right: 28px;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  line-height: 1;
  font-family: var(--font-title);
}
.lightbox__close:hover { color: var(--color-cta); }
```

- [ ] **Step 4: Verificar FAQ y galería**

Hacer clic en una pregunta del accordion — debe expandirse. Hacer clic en una foto de la galería — debe abrir el lightbox. Hacer clic en ✕ — debe cerrar.

- [ ] **Step 5: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: FAQ accordion and photo gallery with CSS-only lightbox"
```

---

## Task 10: Contacto + Google Maps + CTA + Footer

**Files:**
- Modify: `index.html`
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Añadir HTML — contacto con mapa y formulario**

```html
<!-- ===== CONTACTO + GOOGLE MAPS ===== -->
<section id="contacto" class="py-section bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" data-i18n="contact.label">Contacto</span>
      <h2 class="section-title" data-i18n="contact.title">¿Dónde estamos?</h2>
    </div>

    <div class="row g-5">

      <!-- Mapa -->
      <div class="col-lg-7">
        <div class="map-wrapper">
          <iframe
            data-maps-embed
            width="100%"
            height="400"
            style="border:0; border-radius:16px;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Mallorca JetSki location Cala Millor">
          </iframe>
        </div>
        <div class="contact-info mt-4">
          <div class="contact-info__item">
            <span>📍</span>
            <span data-i18n="contact.address">Cala Millor, Mallorca</span>
          </div>
          <div class="contact-info__item">
            <span>📞</span>
            <a data-phone href="#" class="contact-link">+34 600 000 000</a>
          </div>
          <div class="contact-info__item">
            <span>✉️</span>
            <span data-email class="contact-link">info@mallorcajetski.com</span>
          </div>
          <a data-maps-url href="#" class="btn-cta mt-3 d-inline-block" data-i18n="contact.howto">Cómo llegar</a>
        </div>
      </div>

      <!-- Formulario -->
      <div class="col-lg-5">
        <h3 class="section-title mb-4" style="font-size:1.4rem" data-i18n="contact.form.title">¿Hablamos?</h3>
        <form class="contact-form" action="https://formspree.io/f/PLACEHOLDER" method="POST">
          <!-- Honeypot -->
          <input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off">

          <div class="mb-3">
            <label class="form-label fw-semibold" data-i18n="contact.form.name">Nombre</label>
            <input type="text" name="name" class="form-control contact-input" required
              data-i18n-placeholder="contact.form.name" placeholder="Nombre">
          </div>
          <div class="mb-3">
            <label class="form-label fw-semibold" data-i18n="contact.form.phone">Teléfono</label>
            <input type="tel" name="phone" class="form-control contact-input"
              data-i18n-placeholder="contact.form.phone" placeholder="Teléfono">
          </div>
          <div class="mb-3">
            <label class="form-label fw-semibold" data-i18n="contact.form.date">Fecha deseada</label>
            <input type="date" name="date" class="form-control contact-input">
          </div>
          <div class="mb-3">
            <label class="form-label fw-semibold" data-i18n="contact.form.experience">Tipo de experiencia</label>
            <select name="experience" class="form-select contact-input">
              <option value="" data-i18n="contact.form.experience">Tipo de experiencia</option>
              <option value="basic"   data-i18n="contact.form.exp.basic">Ruta Básica (30 min)</option>
              <option value="classic" data-i18n="contact.form.exp.classic">Ruta Clásica (60 min)</option>
              <option value="sunset"  data-i18n="contact.form.exp.sunset">Ruta Atardecer (90 min)</option>
              <option value="private" data-i18n="contact.form.exp.private">Excursión Privada</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="form-label fw-semibold" data-i18n="contact.form.message">Mensaje</label>
            <textarea name="message" rows="4" class="form-control contact-input"
              data-i18n-placeholder="contact.form.message" placeholder="Mensaje"></textarea>
          </div>
          <button type="submit" class="btn-cta w-100" data-i18n="contact.form.submit">Enviar consulta</button>
        </form>
      </div>

    </div>
  </div>
</section>

<!-- ===== CTA FINAL ===== -->
<section class="cta-final">
  <div class="container text-center">
    <h2 class="cta-final__title" data-i18n="cta.title">¿Listo para la aventura?</h2>
    <p class="cta-final__sub" data-i18n="cta.subtitle">Reserva tu experiencia en jet ski hoy</p>
    <div class="d-flex flex-wrap gap-3 justify-content-center">
      <a href="#" class="btn-cta btn-cta--dark" data-whatsapp data-i18n="cta.whatsapp">Reservar por WhatsApp</a>
      <a href="#" class="btn-cta btn-cta--white" data-phone data-i18n="cta.call">Llamar ahora</a>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="site-footer-bottom">
  <div class="container">
    <div class="footer-top">
      <!-- Logo -->
      <div class="footer-brand">
        <span class="logo-wave" style="color:var(--color-cta)">〜</span>
        <span>
          <span class="logo-top">MALLORCA</span>
          <span class="logo-sub">JETSKI</span>
        </span>
      </div>

      <!-- Links rápidos -->
      <div class="footer-col">
        <h4 class="footer-col__title" data-i18n="footer.links">Enlaces rápidos</h4>
        <a href="#hero" data-i18n="nav.home">Inicio</a>
        <a href="#experiencias" data-i18n="nav.prices">Tarifas</a>
        <a href="#galeria" data-i18n="nav.gallery">Galería</a>
        <a href="#contacto" data-i18n="nav.contact">Contacto</a>
      </div>

      <!-- Contacto -->
      <div class="footer-col">
        <h4 class="footer-col__title">Contacto</h4>
        <span data-i18n="contact.address">Cala Millor, Mallorca</span>
        <a data-phone href="#">+34 600 000 000</a>
        <span data-email>info@mallorcajetski.com</span>
      </div>
    </div>

    <div class="footer-bottom">
      <span data-i18n="footer.copyright">© 2025 Mallorca JetSki. Todos los derechos reservados.</span>
      <div class="footer-legal-links">
        <a href="legal/aviso-legal.html" data-i18n="footer.legal">Aviso legal</a>
        <a href="legal/politica-privacidad.html" data-i18n="footer.privacy">Política de privacidad</a>
      </div>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: CSS contacto, CTA y footer**

```css
/* =============================================
   CONTACTO
   ============================================= */
.map-wrapper { border-radius: 16px; overflow: hidden; }

.contact-info { display: flex; flex-direction: column; gap: 12px; }
.contact-info__item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
}
.contact-link { color: var(--color-dark); text-decoration: none; font-weight: 600; }
.contact-link:hover { color: var(--color-cta); }

.contact-input {
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 12px 16px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: border-color var(--transition);
}
.contact-input:focus {
  border-color: var(--color-ocean);
  box-shadow: 0 0 0 3px rgba(0,119,182,0.12);
  outline: none;
}

/* =============================================
   CTA FINAL
   ============================================= */
.cta-final {
  background: linear-gradient(135deg, var(--color-cta) 0%, #ff9f1c 100%);
  padding: 96px 0;
  text-align: center;
}
.cta-final__title {
  font-family: var(--font-title);
  font-weight: 800;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--color-white);
  margin-bottom: 12px;
}
.cta-final__sub {
  color: rgba(255,255,255,0.9);
  font-size: 1.1rem;
  margin-bottom: 32px;
}
.btn-cta--dark  { background: var(--color-dark); }
.btn-cta--dark:hover { background: #020340; }
.btn-cta--white { background: var(--color-white); color: var(--color-cta); }
.btn-cta--white:hover { background: #f0f0f0; color: var(--color-cta); }

/* =============================================
   FOOTER
   ============================================= */
.site-footer-bottom { background: var(--color-dark); padding: 64px 0 32px; }

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
@media (max-width: 767px) { .footer-top { grid-template-columns: 1fr; gap: 32px; } }

.footer-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.4rem;
}

.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-col__title {
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-white);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 4px;
}
.footer-col a, .footer-col span {
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color var(--transition);
}
.footer-col a:hover { color: var(--color-cta); }

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 28px;
  color: rgba(255,255,255,0.4);
  font-size: 0.8rem;
}
.footer-legal-links { display: flex; gap: 20px; }
.footer-legal-links a { color: rgba(255,255,255,0.4); text-decoration: none; }
.footer-legal-links a:hover { color: var(--color-cta); }
```

- [ ] **Step 3: Verificar contacto, mapa, CTA y footer**

El mapa de Google debe cargar (requiere src del iframe seteado por `renderContactInfo()`). El formulario debe tener todos los campos. El footer completo con links.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: contact section with map, form, CTA final and footer"
```

---

## Task 11: Seguridad anti-scraping + cabeceras HTTP

**Files:**
- Modify: `assets/js/main.js` (verificar renderContactInfo ya implementado en Task 2)
- Create: `_headers`
- Create: `.htaccess`

- [ ] **Step 1: Verificar que email NO aparece en el HTML fuente**

Abrir `index.html` en el navegador, hacer clic derecho → Ver código fuente. Buscar `info@mallorcajetski.com`. No debe aparecer en el HTML — sólo en JS después de que `renderContactInfo()` lo inyecte.

- [ ] **Step 2: Crear `_headers` para Netlify**

```
/*
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

- [ ] **Step 3: Crear `.htaccess` para Apache**

```apache
<IfModule mod_headers.c>
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set X-Content-Type-Options "nosniff"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Compresión gzip
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# Cache estático
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/jpeg "access plus 6 months"
  ExpiresByType image/png "access plus 6 months"
  ExpiresByType image/webp "access plus 6 months"
</IfModule>
```

- [ ] **Step 4: Commit**

```bash
git add _headers .htaccess
git commit -m "feat: HTTP security headers and Apache performance config"
```

---

## Task 12: Páginas legales

**Files:**
- Create: `legal/aviso-legal.html`
- Create: `legal/politica-privacidad.html`

- [ ] **Step 1: Crear `legal/aviso-legal.html`**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Aviso Legal | Mallorca JetSki</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/styles.css">
  <style>body{padding-top:80px} .legal-body{max-width:800px;margin:0 auto;padding:40px 20px}</style>
</head>
<body>
  <div class="legal-body">
    <a href="../index.html" style="color:var(--color-ocean);font-family:var(--font-title);font-weight:700;text-decoration:none;">← Volver al inicio</a>
    <h1 class="mt-4 mb-4" style="font-family:var(--font-title);font-weight:800;color:var(--color-dark)">Aviso Legal</h1>
    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa:</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Titular del sitio web</h2>
    <p><strong>Nombre comercial:</strong> Mallorca JetSki<br>
    <strong>Actividad:</strong> Alquiler de motos de agua y actividades náuticas<br>
    <strong>Localización:</strong> Cala Millor, Mallorca, Islas Baleares, España<br>
    <strong>Email:</strong> info@mallorcajetski.com</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Objeto y ámbito de aplicación</h2>
    <p>El presente aviso legal regula el uso del sitio web mallorcajetski.com. El acceso y uso del sitio implica la aceptación plena de las condiciones aquí expuestas.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Propiedad intelectual</h2>
    <p>Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente) son propiedad de Mallorca JetSki o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.</p>
    <p class="mt-5 text-muted" style="font-size:0.85rem">Última actualización: mayo 2025</p>
  </div>
</body>
</html>
```

- [ ] **Step 2: Crear `legal/politica-privacidad.html`**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>Política de Privacidad | Mallorca JetSki</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
    crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/styles.css">
  <style>body{padding-top:80px} .legal-body{max-width:800px;margin:0 auto;padding:40px 20px}</style>
</head>
<body>
  <div class="legal-body">
    <a href="../index.html" style="color:var(--color-ocean);font-family:var(--font-title);font-weight:700;text-decoration:none;">← Volver al inicio</a>
    <h1 class="mt-4 mb-4" style="font-family:var(--font-title);font-weight:800;color:var(--color-dark)">Política de Privacidad</h1>
    <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos, se informa sobre el tratamiento de datos personales.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Responsable del tratamiento</h2>
    <p>Mallorca JetSki — info@mallorcajetski.com — Cala Millor, Mallorca.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Finalidad y base legal</h2>
    <p>Los datos recogidos mediante el formulario de contacto se tratan para gestionar consultas y reservas. La base legal es el interés legítimo y el consentimiento del usuario.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Conservación de datos</h2>
    <p>Los datos se conservan durante el tiempo necesario para gestionar la solicitud y por los plazos legales aplicables.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Derechos del usuario</h2>
    <p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición y portabilidad enviando un email a info@mallorcajetski.com.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Cookies</h2>
    <p>Este sitio no utiliza cookies de seguimiento ni analítica de terceros. Las preferencias de idioma se guardan en localStorage del navegador.</p>
    <p class="mt-5 text-muted" style="font-size:0.85rem">Última actualización: mayo 2025</p>
  </div>
</body>
</html>
```

- [ ] **Step 3: Verificar páginas legales**

Abrir `legal/aviso-legal.html` — debe cargarse con estilos. Verificar que el link "← Volver al inicio" funciona. Confirmar que `<meta name="robots" content="noindex">` está presente.

- [ ] **Step 4: Commit**

```bash
git add legal/
git commit -m "feat: legal pages (aviso legal + privacidad) with noindex"
```

---

## Task 13: Verificación final y ajustes responsive

**Files:**
- Modify: `assets/css/styles.css` (ajustes si necesario)

- [ ] **Step 1: Verificar scroll completo en desktop (1280px)**

Hacer scroll desde el hero hasta el footer. Verificar:
- Slideshow del hero funciona
- Sección tipográfica "JET SKI" impacta visualmente
- Cards de experiencias con efecto hover
- FAQ accordion funciona
- Galería lightbox funciona
- Google Maps carga en el iframe
- Footer con todos los datos

- [ ] **Step 2: Verificar en móvil (375px)**

Usar DevTools → Toggle device toolbar → iPhone SE. Verificar:
- Header hamburger menu funciona
- Hero ocupa pantalla completa
- Cards en 1 columna
- FAQ legible
- Galería 2 columnas
- Footer apilado

- [ ] **Step 3: Verificar cambio de idioma**

Hacer clic en "EN" en el header. Todos los textos deben cambiar a inglés. Recargar página — debe mantener EN. Hacer clic en "ES" — vuelve al español.

- [ ] **Step 4: Verificar consola de errores**

Abrir DevTools → Console. No debe haber errores JS. El fetch de los JSON de i18n debe ser exitoso (status 200).

- [ ] **Step 5: Validar HTML**

Copiar el HTML completo de `index.html` y pegarlo en https://validator.w3.org/#validate_by_input. Corregir cualquier error crítico.

- [ ] **Step 6: Añadir padding-top al body para compensar el header fijo**

```css
body { padding-top: 80px; }
@media (max-width: 991px) { body { padding-top: 70px; } }
```

- [ ] **Step 7: Commit final**

```bash
git add .
git commit -m "feat: responsive adjustments and cross-device verification complete"
```

---

## Checklist de spec coverage

| Requisito del spec | Tarea que lo cubre |
|---|---|
| config.js datos de contacto | Task 1 |
| i18n ES/EN con JSON | Task 2 |
| Header sticky + lang switcher | Task 3 |
| Hero slideshow CSS | Task 4 |
| Sección tipográfica | Task 5 |
| Feature 2 columnas + fotos | Task 6 |
| Cards con foto a sangre | Task 7 |
| Características / checklist | Task 8 |
| Sección flota | Task 8 |
| ¿Por qué elegirnos? | Task 8 |
| Reseñas estáticas | Task 8 |
| Proceso 4 pasos | Task 8 |
| Seguridad | Task 8 |
| FAQ Bootstrap accordion | Task 9 |
| Galería + lightbox CSS :target | Task 9 |
| Contacto + Google Maps | Task 10 |
| Formulario con honeypot | Task 10 |
| CTA Final | Task 10 |
| Footer completo | Task 10 |
| Schema.org JSON-LD | Task 1 (index.html head) |
| Open Graph | Task 1 (index.html head) |
| Email obfuscado | Task 2 (renderContactInfo) |
| WhatsApp debounce 2s | Task 2 (initWhatsAppDebounce) |
| Cabeceras HTTP seguridad | Task 11 |
| Páginas legales noindex | Task 12 |
| Responsive móvil/tablet/desktop | Task 13 |
| Lazy loading imágenes | Tasks 4–10 (loading="lazy") |
| Bootstrap 5.3 SRI | Task 1 |
