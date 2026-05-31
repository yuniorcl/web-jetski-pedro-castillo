# Service Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crear 4 páginas de servicio SEO + bloque de servicios en la homepage con enlazado interno completo.

**Architecture:** 4 archivos `.njk` individuales heredando de `base.njk`. Cada página tiene frontmatter con SEO propio, HTML hardcodeado y schema JSON-LD inline. El bloque homepage se inserta en `src/index.njk` entre las secciones `#experiencias` y `#caracteristicas`.

**Tech Stack:** Eleventy 3.x · Nunjucks · HTML/CSS

**Rama:** `feature/arquitectura-multipagina`

---

## Mapa de archivos

| Acción | Archivo |
|---|---|
| Modificar | `src/assets/css/styles.css` — añadir `.service-card` CSS |
| Crear | `src/alquiler-moto-agua-mallorca.njk` |
| Crear | `src/moto-agua-con-licencia-mallorca.njk` |
| Crear | `src/alquiler-seadoo-mallorca.njk` |
| Crear | `src/rutas-moto-agua-mallorca.njk` |
| Modificar | `src/index.njk` — añadir sección `#servicios` |
| Modificar | `src/sitemap.xml` — añadir 4 URLs |

---

## Task 1: Añadir CSS `.service-card` a `styles.css`

**Archivos:**
- Modificar: `src/assets/css/styles.css`

- [ ] **Paso 1: Añadir el bloque CSS al final de `styles.css`**, justo antes del último comentario o al final del archivo:

  ```css
  /* =============================================
     SERVICE CARDS
     ============================================= */
  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem 1.5rem;
    border-radius: 16px;
    background: var(--color-light);
    text-decoration: none;
    color: var(--color-dark);
    transition: transform var(--transition), box-shadow var(--transition);
    height: 100%;
  }
  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    color: var(--color-dark);
    text-decoration: none;
  }
  .service-card__icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1;
  }
  .service-card__title {
    font-family: var(--font-title);
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .service-card__desc {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
  }
  ```

- [ ] **Paso 2: Verificar que el CSS se añadió**
  ```bash
  grep -c "service-card" src/assets/css/styles.css
  ```
  Debe devolver al menos `5`.

- [ ] **Paso 3: Commit**
  ```bash
  git add src/assets/css/styles.css
  git commit -m "$(cat <<'EOF'
  feat(css): add service-card component styles for homepage services block

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 2: Crear `/alquiler-moto-agua-mallorca/`

**Archivos:**
- Crear: `src/alquiler-moto-agua-mallorca.njk`

- [ ] **Paso 1: Crear el archivo con este contenido exacto:**

  ```njk
  ---
  layout: base.njk
  pageTitle: "Alquiler de Moto de Agua en Mallorca | JetExperience Baleares"
  pageDescription: "Alquila una moto de agua en Mallorca desde 130€. Sea-Doo modernos, chaleco incluido, entrega en playa. Zona Cala Millor, Cala Bona, Sa Coma y Porto Cristo. Reserva por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/alquiler-moto-agua-mallorca/"
  permalink: /alquiler-moto-agua-mallorca/
  ---

  <nav class="container py-3" aria-label="Breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="/">Inicio</a></li>
      <li class="breadcrumb-item active" aria-current="page">Alquiler Moto de Agua Mallorca</li>
    </ol>
  </nav>

  <section class="feature-section py-section bg-light-brand">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h1 class="section-title mb-4">Alquiler de Moto de Agua en Mallorca</h1>
          <p class="feature-desc">JetExperience Baleares ofrece alquiler de motos de agua en la costa levantina de Mallorca, con base en Costa de los Pinos. Entrega directamente en playa en Cala Millor, Cala Bona, Sa Coma y Porto Cristo.</p>
          <p class="feature-desc">Nuestras Sea-Doo son los modelos más modernos del mercado, revisados diariamente. Solo necesitas licencia náutica y ganas de disfrutar el Mediterráneo.</p>
          <a href="#" class="btn-cta mt-3" data-whatsapp>Reservar por WhatsApp</a>
        </div>
        <div class="col-lg-6">
          <img src="/assets/img/galeria-08-new.jpg"
               alt="Moto de agua Sea-Doo en Mallorca"
               loading="lazy" width="800" height="450"
               class="rounded-4 shadow-lg w-100">
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-dark-brand">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-label" style="color:rgba(255,255,255,0.7)">Nuestros precios</span>
        <h2 class="section-title section-title--light">Elige tu experiencia</h2>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-md-4">
          <div class="exp-card" style="position:relative;border-radius:16px;overflow:hidden;background:#1a3a55;">
            <div class="exp-card__body" style="padding:2rem;text-align:center;">
              <p class="exp-card__desc" style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">La más popular · Parejas y amigos</p>
              <span class="exp-card__price" style="font-size:1.8rem;font-weight:800;color:#fff;">1h · 130€</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="exp-card" style="position:relative;border-radius:16px;overflow:hidden;background:#1a3a55;">
            <div class="exp-card__body" style="padding:2rem;text-align:center;">
              <p class="exp-card__desc" style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Para grupos y ocasiones especiales</p>
              <span class="exp-card__price" style="font-size:1.8rem;font-weight:800;color:#fff;">2h · 200€</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="exp-card" style="position:relative;border-radius:16px;overflow:hidden;background:#1a3a55;">
            <div class="exp-card__body" style="padding:2rem;text-align:center;">
              <p class="exp-card__desc" style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Curso licencia náutica incluido</p>
              <span class="exp-card__price" style="font-size:1.8rem;font-weight:800;color:#fff;">Pack · 260€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <h2 class="section-title mb-4">¿Qué incluye el alquiler?</h2>
          <ul class="checklist">
            <li class="checklist__item checklist__item--yes">Entrega y recogida en el lugar acordado</li>
            <li class="checklist__item checklist__item--yes">Chaleco salvavidas para todos los ocupantes</li>
            <li class="checklist__item checklist__item--yes">Kit de snorkel</li>
            <li class="checklist__item checklist__item--yes">Ancla plegable</li>
            <li class="checklist__item checklist__item--yes">Briefing de seguridad</li>
            <li class="checklist__item checklist__item--no">Gasolina (no incluida)</li>
            <li class="checklist__item checklist__item--no">Fianza (en el momento de la entrega)</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <h2 class="section-title mb-4">Zonas de entrega</h2>
          <p class="feature-desc mb-4">Operamos en toda la costa levantina de Mallorca. Llevamos las motos directamente a tu playa:</p>
          <div class="d-flex flex-wrap gap-2">
            <a href="/jet-ski-cala-millor/" class="hero-badge" style="text-decoration:none;">Cala Millor</a>
            <a href="/jet-ski-cala-bona/" class="hero-badge" style="text-decoration:none;">Cala Bona</a>
            <a href="/jet-ski-sa-coma/" class="hero-badge" style="text-decoration:none;">Sa Coma</a>
            <a href="/jet-ski-porto-cristo/" class="hero-badge" style="text-decoration:none;">Porto Cristo</a>
            <a href="/jet-ski-costa-de-los-pinos/" class="hero-badge" style="text-decoration:none;">Costa de los Pinos</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-light-brand">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <h2 class="section-title">Preguntas frecuentes</h2>
        </div>
        <div class="col-lg-7">
          <div class="accordion" id="faqService1">
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS1a">
                  ¿Qué incluye el precio del alquiler?
                </button>
              </h3>
              <div id="faqS1a" class="accordion-collapse collapse" data-bs-parent="#faqService1">
                <div class="accordion-body faq-body">El precio incluye entrega y recogida en el lugar acordado, chaleco salvavidas, kit de snorkel, ancla plegable y briefing de seguridad. La gasolina y la fianza van aparte.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS1b">
                  ¿Dónde hacéis la entrega de la moto?
                </button>
              </h3>
              <div id="faqS1b" class="accordion-collapse collapse" data-bs-parent="#faqService1">
                <div class="accordion-body faq-body">Hacemos entrega en Cala Millor, Cala Bona, Sa Coma, Porto Cristo y Costa de los Pinos. Confirma el punto exacto al reservar por WhatsApp.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS1c">
                  ¿Cómo puedo reservar?
                </button>
              </h3>
              <div id="faqS1c" class="accordion-collapse collapse" data-bs-parent="#faqService1">
                <div class="accordion-body faq-body">La forma más rápida es por WhatsApp. Escríbenos con la fecha, zona y experiencia deseada y te confirmamos disponibilidad en menos de 2 horas.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white text-center">
    <div class="container">
      <a href="#" class="btn-cta" data-whatsapp>Reservar por WhatsApp</a>
      <div class="mt-4">
        <a href="/" class="btn-outline-light-brand">← Ver todas las experiencias</a>
      </div>
    </div>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://jetexperiencemallorca.com/"},
          {"@type": "ListItem", "position": 2, "name": "Alquiler de Moto de Agua en Mallorca"}
        ]
      },
      {
        "@type": "Service",
        "name": "Alquiler de Moto de Agua en Mallorca",
        "provider": {"@id": "https://jetexperiencemallorca.com/#business"},
        "url": "https://jetexperiencemallorca.com/alquiler-moto-agua-mallorca/"
      }
    ]
  }
  </script>
  ```

- [ ] **Paso 2: Verificar breadcrumb y H1**
  ```bash
  grep "breadcrumb\|<h1" src/alquiler-moto-agua-mallorca.njk | head -5
  ```

- [ ] **Paso 3: Commit**
  ```bash
  git add src/alquiler-moto-agua-mallorca.njk
  git commit -m "$(cat <<'EOF'
  feat(pages): add /alquiler-moto-agua-mallorca/ service page

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 3: Crear `/moto-agua-con-licencia-mallorca/`

**Archivos:**
- Crear: `src/moto-agua-con-licencia-mallorca.njk`

- [ ] **Paso 1: Crear el archivo:**

  ```njk
  ---
  layout: base.njk
  pageTitle: "Alquiler de Moto de Agua con Licencia Náutica en Mallorca | JetExperience Baleares"
  pageDescription: "Para alquilar una moto de agua en Mallorca necesitas licencia náutica. Descubre qué licencia es válida y nuestro pack especial Licencia + 2h por 260€."
  pageCanonical: "https://jetexperiencemallorca.com/moto-agua-con-licencia-mallorca/"
  permalink: /moto-agua-con-licencia-mallorca/
  ---

  <nav class="container py-3" aria-label="Breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="/">Inicio</a></li>
      <li class="breadcrumb-item active" aria-current="page">Moto de Agua con Licencia Mallorca</li>
    </ol>
  </nav>

  <section class="feature-section py-section bg-light-brand">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-7">
          <h1 class="section-title mb-4">Alquiler de Moto de Agua con Licencia Náutica en Mallorca</h1>
          <p class="feature-desc">En España, pilotar una moto de agua requiere licencia de navegación o titulación náutica superior. En JetExperience Baleares verificamos la documentación antes de cada salida para garantizar una experiencia segura y legal.</p>
          <p class="feature-desc">Si aún no tienes licencia, tenemos el pack perfecto: curso de licencia náutica homologada más 2 horas de alquiler por solo 260€.</p>
          <a href="#pack-licencia" class="btn-cta mt-3">Ver pack licencia + alquiler</a>
        </div>
        <div class="col-lg-5">
          <img src="/assets/img/galeria-01-new.jpg"
               alt="Moto de agua con licencia náutica en Mallorca"
               loading="lazy" width="800" height="532"
               class="rounded-4 shadow-lg w-100">
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <h2 class="section-title mb-4">¿Qué licencia necesitas?</h2>
      <ul class="checklist">
        <li class="checklist__item checklist__item--yes">Licencia de Navegación (RLNA) — la más habitual para jet ski</li>
        <li class="checklist__item checklist__item--yes">Patrón de Embarcaciones de Recreo (PER)</li>
        <li class="checklist__item checklist__item--yes">Patrón de Yate (PY) o titulación superior</li>
        <li class="checklist__item checklist__item--no">Carnet de conducir de vehículos terrestres — no válido</li>
      </ul>
      <p class="feature-desc mt-4">Lo que debes llevar el día del alquiler: licencia náutica original o copia digital, DNI o pasaporte, bañador y crema solar.</p>
    </div>
  </section>

  <section id="pack-licencia" class="py-section bg-dark-brand">
    <div class="container text-center">
      <span class="section-label" style="color:rgba(255,255,255,0.7)">Oferta especial</span>
      <h2 class="section-title section-title--light mb-3">Pack Licencia Náutica + 2h Jet Ski</h2>
      <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;max-width:560px;margin:0 auto 1.5rem;">Curso homologado de licencia náutica incluido más 2 horas de alquiler en Cala Millor. Todo por 260€.</p>
      <div style="font-size:3rem;font-weight:800;color:#fff;margin-bottom:1.5rem;">260€</div>
      <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Consultar disponibilidad →</a>
    </div>
  </section>

  <section class="py-section bg-light-brand">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <h2 class="section-title">Preguntas frecuentes</h2>
        </div>
        <div class="col-lg-7">
          <div class="accordion" id="faqService2">
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS2a">
                  ¿Qué licencia se necesita para pilotar un jet ski en Mallorca?
                </button>
              </h3>
              <div id="faqS2a" class="accordion-collapse collapse" data-bs-parent="#faqService2">
                <div class="accordion-body faq-body">Se requiere la Licencia de Navegación (RLNA) como mínimo, o cualquier titulación náutica superior como PER o Patrón de Yate. El carnet de conducir de vehículos terrestres no es válido.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS2b">
                  ¿Puedo alquilar una moto de agua sin licencia?
                </button>
              </h3>
              <div id="faqS2b" class="accordion-collapse collapse" data-bs-parent="#faqService2">
                <div class="accordion-body faq-body">No es posible pilotar sin licencia. Sin embargo, puedes ir como pasajero acompañando a alguien con licencia. Si quieres pilotar tú, te recomendamos nuestro pack Licencia + 2h Jet Ski por 260€.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS2c">
                  ¿Dónde puedo obtener la licencia náutica en Mallorca?
                </button>
              </h3>
              <div id="faqS2c" class="accordion-collapse collapse" data-bs-parent="#faqService2">
                <div class="accordion-body faq-body">Existen varias escuelas náuticas en Mallorca que ofrecen el curso de Licencia de Navegación. Nosotros también ofrecemos el pack completo: curso homologado + 2 horas de alquiler. Consúltanos por WhatsApp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white text-center">
    <div class="container">
      <a href="#" class="btn-cta" data-whatsapp>Reservar por WhatsApp</a>
      <div class="mt-4">
        <a href="/" class="btn-outline-light-brand">← Ver todas las experiencias</a>
      </div>
    </div>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://jetexperiencemallorca.com/"},
          {"@type": "ListItem", "position": 2, "name": "Alquiler de Moto de Agua con Licencia Náutica en Mallorca"}
        ]
      },
      {
        "@type": "Service",
        "name": "Alquiler de Moto de Agua con Licencia Náutica en Mallorca",
        "provider": {"@id": "https://jetexperiencemallorca.com/#business"},
        "url": "https://jetexperiencemallorca.com/moto-agua-con-licencia-mallorca/"
      }
    ]
  }
  </script>
  ```

- [ ] **Paso 2: Verificar H1 y pack-licencia section**
  ```bash
  grep "pack-licencia\|<h1" src/moto-agua-con-licencia-mallorca.njk | head -5
  ```

- [ ] **Paso 3: Commit**
  ```bash
  git add src/moto-agua-con-licencia-mallorca.njk
  git commit -m "$(cat <<'EOF'
  feat(pages): add /moto-agua-con-licencia-mallorca/ service page

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 4: Crear `/alquiler-seadoo-mallorca/`

**Archivos:**
- Crear: `src/alquiler-seadoo-mallorca.njk`

- [ ] **Paso 1: Crear el archivo:**

  ```njk
  ---
  layout: base.njk
  pageTitle: "Alquiler de Sea-Doo en Mallorca | JetExperience Baleares"
  pageDescription: "Alquila un Sea-Doo en Mallorca. Modelos modernos con casco ST3 Hull, sistema iTC y modo ECO. Entrega en playa. Desde 130€/hora. Reserva por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/alquiler-seadoo-mallorca/"
  permalink: /alquiler-seadoo-mallorca/
  ---

  <nav class="container py-3" aria-label="Breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="/">Inicio</a></li>
      <li class="breadcrumb-item active" aria-current="page">Alquiler Sea-Doo Mallorca</li>
    </ol>
  </nav>

  <section class="feature-section py-section bg-light-brand">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h1 class="section-title mb-4">Alquiler de Sea-Doo en Mallorca</h1>
          <p class="feature-desc">En JetExperience Baleares solo trabajamos con Sea-Doo, la marca de motos de agua más reconocida del mundo. Nuestros modelos son los más modernos del mercado, revisados diariamente antes de cada salida.</p>
          <p class="feature-desc">Los Sea-Doo GTI combinan potencia, seguridad y confort. Admiten hasta 3 personas por unidad y están equipados con altavoces Bluetooth, chaleco incluido y toda la tecnología para una experiencia memorable.</p>
          <a href="#" class="btn-cta mt-3" data-whatsapp>Reservar por WhatsApp</a>
        </div>
        <div class="col-lg-6">
          <div class="fleet-photos">
            <img src="/assets/img/jetski_seadoo.webp"
                 alt="Sea-Doo GTI vista lateral, Cala Millor"
                 loading="lazy" width="1280" height="960"
                 class="fleet-photo fleet-photo--top rounded-4 shadow-lg">
            <img src="/assets/img/fleet-01.avif"
                 alt="Sea-Doo GTI vista frontal, Mallorca"
                 loading="lazy" width="661" height="480"
                 class="fleet-photo fleet-photo--bottom rounded-4 shadow-lg">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <h2 class="section-title text-center mb-5">Especificaciones técnicas</h2>
      <div class="fleet-specs justify-content-center" style="display:flex;flex-wrap:wrap;gap:2rem;">
        <div class="fleet-spec">
          <span class="fleet-spec__icon">🏄</span>
          <div>
            <strong>Casco ST3 Hull™</strong>
            <small>Fibra de vidrio de alta resistencia</small>
          </div>
        </div>
        <div class="fleet-spec">
          <span class="fleet-spec__icon">⚙️</span>
          <div>
            <strong>Sistema iTC™</strong>
            <small>Control de aceleración inteligente</small>
          </div>
        </div>
        <div class="fleet-spec">
          <span class="fleet-spec__icon">💧</span>
          <div>
            <strong>Modo ECO® (70L)</strong>
            <small>Consumo eficiente, más autonomía</small>
          </div>
        </div>
        <div class="fleet-spec">
          <span class="fleet-spec__icon">🎵</span>
          <div>
            <strong>Altavoces Bluetooth</strong>
            <small>Música en el mar</small>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-light-brand">
    <div class="container">
      <div class="row g-5 align-items-start">
        <div class="col-lg-6">
          <h2 class="section-title mb-4">Capacidad y seguridad</h2>
          <ul class="checklist">
            <li class="checklist__item checklist__item--yes">Hasta 3 personas por moto</li>
            <li class="checklist__item checklist__item--yes">Chaleco salvavidas incluido para todos</li>
            <li class="checklist__item checklist__item--yes">Revisión técnica diaria</li>
            <li class="checklist__item checklist__item--yes">Modelos del año en curso</li>
            <li class="checklist__item checklist__item--yes">Briefing de seguridad obligatorio</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <h2 class="section-title mb-4">Tarifas</h2>
          <ul class="checklist">
            <li class="checklist__item checklist__item--yes">1 hora — 130€</li>
            <li class="checklist__item checklist__item--yes">2 horas — 200€</li>
            <li class="checklist__item checklist__item--yes">Pack Licencia + 2h — 260€</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <h2 class="section-title">Preguntas frecuentes</h2>
        </div>
        <div class="col-lg-7">
          <div class="accordion" id="faqService3">
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS3a">
                  ¿Qué modelos de Sea-Doo tenéis disponibles?
                </button>
              </h3>
              <div id="faqS3a" class="accordion-collapse collapse" data-bs-parent="#faqService3">
                <div class="accordion-body faq-body">Trabajamos con modelos Sea-Doo GTI de última generación, revisados y actualizados cada temporada. Son los modelos más modernos del mercado, con altavoces Bluetooth y sistema iTC incluidos.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS3b">
                  ¿Cuántas personas admite el Sea-Doo?
                </button>
              </h3>
              <div id="faqS3b" class="accordion-collapse collapse" data-bs-parent="#faqService3">
                <div class="accordion-body faq-body">Nuestros Sea-Doo admiten hasta 3 personas por unidad. El conductor debe tener licencia náutica; los pasajeros no la necesitan.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS3c">
                  ¿Las motos son nuevas?
                </button>
              </h3>
              <div id="faqS3c" class="accordion-collapse collapse" data-bs-parent="#faqService3">
                <div class="accordion-body faq-body">Sí. Renovamos nuestra flota regularmente para ofrecer siempre los modelos más actuales. Todas las motos pasan revisión técnica diaria antes de cada salida.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-dark-brand text-center">
    <div class="container">
      <h2 class="section-title section-title--light mb-4">¿Listo para probar el Sea-Doo?</h2>
      <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Reservar por WhatsApp</a>
      <div class="mt-4">
        <a href="/" class="btn-outline-light-brand" style="color:rgba(255,255,255,0.7)">← Ver todas las experiencias</a>
      </div>
    </div>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://jetexperiencemallorca.com/"},
          {"@type": "ListItem", "position": 2, "name": "Alquiler de Sea-Doo en Mallorca"}
        ]
      },
      {
        "@type": "Service",
        "name": "Alquiler de Sea-Doo en Mallorca",
        "provider": {"@id": "https://jetexperiencemallorca.com/#business"},
        "url": "https://jetexperiencemallorca.com/alquiler-seadoo-mallorca/"
      }
    ]
  }
  </script>
  ```

- [ ] **Paso 2: Verificar H1 y fleet-photos**
  ```bash
  grep "<h1\|fleet-photo" src/alquiler-seadoo-mallorca.njk | head -5
  ```

- [ ] **Paso 3: Commit**
  ```bash
  git add src/alquiler-seadoo-mallorca.njk
  git commit -m "$(cat <<'EOF'
  feat(pages): add /alquiler-seadoo-mallorca/ service page

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 5: Crear `/rutas-moto-agua-mallorca/`

**Archivos:**
- Crear: `src/rutas-moto-agua-mallorca.njk`

- [ ] **Paso 1: Crear el archivo:**

  ```njk
  ---
  layout: base.njk
  pageTitle: "Rutas en Moto de Agua por Mallorca | JetExperience Baleares"
  pageDescription: "Explora la costa este de Mallorca en moto de agua. Rutas desde Costa de los Pinos hasta Cala Millor, Cala Bona, Sa Coma y Porto Cristo. Reserva por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/rutas-moto-agua-mallorca/"
  permalink: /rutas-moto-agua-mallorca/
  ---

  <nav class="container py-3" aria-label="Breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="/">Inicio</a></li>
      <li class="breadcrumb-item active" aria-current="page">Rutas Moto de Agua Mallorca</li>
    </ol>
  </nav>

  <section class="feature-section py-section bg-light-brand">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-7">
          <h1 class="section-title mb-4">Rutas en Moto de Agua por Mallorca</h1>
          <p class="feature-desc">Desde nuestra base en Costa de los Pinos tienes acceso a algunos de los tramos de costa más espectaculares de Mallorca. Puedes elegir una ruta corta para disfrutar las aguas de Cala Millor o aventurarte hasta el puerto natural de Porto Cristo con el Pack Especial de 2 horas.</p>
          <p class="feature-desc">Tú decides el ritmo y el destino. Nuestra única condición: licencia náutica y ganas de explorar el Mediterráneo.</p>
          <a href="#" class="btn-cta mt-3" data-whatsapp>Reservar por WhatsApp</a>
        </div>
        <div class="col-lg-5">
          <img src="/assets/img/galeria-11-new.jpg"
               alt="Vista aérea de ruta en moto de agua por Mallorca"
               loading="lazy" width="800" height="600"
               class="rounded-4 shadow-lg w-100">
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Elige tu ruta</h2>
      </div>
      <div class="row g-4">

        <div class="col-lg-4">
          <div class="review-card h-100">
            <div class="review-stars" style="font-size:1.5rem;">🏖️</div>
            <h3 style="font-family:var(--font-title);font-weight:700;font-size:1.1rem;margin:1rem 0 0.5rem;">Ruta Corta — 1 hora</h3>
            <p style="font-size:0.85rem;color:#666;margin-bottom:0.5rem;"><strong>Cala Millor · Cala Bona · Sa Coma</strong></p>
            <p style="font-size:0.9rem;">Navega frente a las playas más populares de la costa levantina. Perfecto para primeras veces. Aguas tranquilas y vistas espectaculares.</p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <a href="/jet-ski-cala-millor/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Cala Millor</a>
              <a href="/jet-ski-cala-bona/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Cala Bona</a>
              <a href="/jet-ski-sa-coma/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Sa Coma</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="review-card h-100">
            <div class="review-stars" style="font-size:1.5rem;">🌿</div>
            <h3 style="font-family:var(--font-title);font-weight:700;font-size:1.1rem;margin:1rem 0 0.5rem;">Ruta Media — 1-2 horas</h3>
            <p style="font-size:0.85rem;color:#666;margin-bottom:0.5rem;"><strong>Costa de los Pinos · Cala Bona</strong></p>
            <p style="font-size:0.9rem;">Explora la exclusiva zona de Costa de los Pinos y el pintoresco puerto de Cala Bona. Aguas más tranquilas, ideal para grupos y familias.</p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <a href="/jet-ski-costa-de-los-pinos/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Costa de los Pinos</a>
              <a href="/jet-ski-cala-bona/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Cala Bona</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="review-card h-100">
            <div class="review-stars" style="font-size:1.5rem;">🗺️</div>
            <h3 style="font-family:var(--font-title);font-weight:700;font-size:1.1rem;margin:1rem 0 0.5rem;">Ruta Larga — 2 horas</h3>
            <p style="font-size:0.85rem;color:#666;margin-bottom:0.5rem;"><strong>Porto Cristo · Coves del Drach</strong></p>
            <p style="font-size:0.9rem;">La ruta más aventurera: ~12 km de costa virgen hasta el puerto natural de Porto Cristo. Requiere experiencia. Incluido en el Pack Especial 2h.</p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <a href="/jet-ski-porto-cristo/" class="hero-badge hero-badge--accent" style="text-decoration:none;font-size:0.8rem;">Porto Cristo</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="py-section bg-light-brand">
    <div class="container">
      <h2 class="section-title mb-4">Consejos de navegación</h2>
      <ul class="checklist">
        <li class="checklist__item checklist__item--yes">Navega siempre en paralelo a la costa, máximo 1 milla náutica</li>
        <li class="checklist__item checklist__item--yes">Reduce la velocidad cerca de bañistas y embarcaciones</li>
        <li class="checklist__item checklist__item--yes">Lleva agua y protección solar</li>
        <li class="checklist__item checklist__item--yes">Respeta la señalización marítima</li>
        <li class="checklist__item checklist__item--yes">En caso de duda, contacta con nosotros antes de salir</li>
      </ul>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <h2 class="section-title">Preguntas frecuentes</h2>
        </div>
        <div class="col-lg-7">
          <div class="accordion" id="faqService4">
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS4a">
                  ¿Puedo elegir mi propia ruta?
                </button>
              </h3>
              <div id="faqS4a" class="accordion-collapse collapse" data-bs-parent="#faqService4">
                <div class="accordion-body faq-body">Sí. Puedes navegar libremente dentro de la zona autorizada. Antes de salir te explicamos los límites de navegación y te sugerimos los mejores puntos según el tiempo disponible.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS4b">
                  ¿Cuál es la ruta más popular?
                </button>
              </h3>
              <div id="faqS4b" class="accordion-collapse collapse" data-bs-parent="#faqService4">
                <div class="accordion-body faq-body">La ruta corta por Cala Millor, Cala Bona y Sa Coma es la más elegida. Es ideal para 1 hora y permite disfrutar de las mejores aguas de la zona a ritmo cómodo.</div>
              </div>
            </div>
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS4c">
                  ¿Se puede llegar a Porto Cristo en 1 hora?
                </button>
              </h3>
              <div id="faqS4c" class="accordion-collapse collapse" data-bs-parent="#faqService4">
                <div class="accordion-body faq-body">No lo recomendamos. Porto Cristo está a ~12 km de nuestra base y requiere 2 horas para disfrutar el trayecto con calma. Para esta ruta te recomendamos el Pack Especial de 2 horas.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-dark-brand text-center">
    <div class="container">
      <h2 class="section-title section-title--light mb-4">¿Qué ruta te apetece?</h2>
      <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Reservar por WhatsApp</a>
      <div class="mt-4">
        <a href="/" class="btn-outline-light-brand" style="color:rgba(255,255,255,0.7)">← Ver todas las experiencias</a>
      </div>
    </div>
  </section>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://jetexperiencemallorca.com/"},
          {"@type": "ListItem", "position": 2, "name": "Rutas en Moto de Agua por Mallorca"}
        ]
      },
      {
        "@type": "Service",
        "name": "Rutas en Moto de Agua por Mallorca",
        "provider": {"@id": "https://jetexperiencemallorca.com/#business"},
        "url": "https://jetexperiencemallorca.com/rutas-moto-agua-mallorca/"
      }
    ]
  }
  </script>
  ```

- [ ] **Paso 2: Verificar H1 y links a localidades**
  ```bash
  grep "<h1\|jet-ski-" src/rutas-moto-agua-mallorca.njk | head -8
  ```
  Debe mostrar H1 + los 5 links a páginas de localidad.

- [ ] **Paso 3: Commit**
  ```bash
  git add src/rutas-moto-agua-mallorca.njk
  git commit -m "$(cat <<'EOF'
  feat(pages): add /rutas-moto-agua-mallorca/ service page with links to all location pages

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 6: Añadir bloque "Nuestros servicios" a la homepage + sitemap

**Archivos:**
- Modificar: `src/index.njk`
- Modificar: `src/sitemap.xml`

- [ ] **Paso 1: Localizar el punto de inserción en `src/index.njk`**

  ```bash
  grep -n "id=\"experiencias\"\|id=\"caracteristicas\"" src/index.njk
  ```
  Anota las líneas. El bloque nuevo va ENTRE el cierre de `#experiencias` y el inicio de `#caracteristicas`.

- [ ] **Paso 2: Insertar el bloque `#servicios` entre esas dos secciones**

  El bloque a insertar:
  ```html
  <!-- ===== SERVICIOS ===== -->
  <section id="servicios" class="py-section bg-white">
    <div class="container">
      <div class="text-center mb-5">
        <span class="section-label">Más información</span>
        <h2 class="section-title">Nuestros servicios</h2>
      </div>
      <div class="row g-4 justify-content-center">

        <div class="col-sm-6 col-lg-3">
          <a href="/alquiler-moto-agua-mallorca/" class="service-card">
            <span class="service-card__icon">🛥️</span>
            <h3 class="service-card__title">Alquiler Moto de Agua</h3>
            <p class="service-card__desc">Elige tu experiencia en el mar</p>
          </a>
        </div>

        <div class="col-sm-6 col-lg-3">
          <a href="/moto-agua-con-licencia-mallorca/" class="service-card">
            <span class="service-card__icon">📋</span>
            <h3 class="service-card__title">Con Licencia Náutica</h3>
            <p class="service-card__desc">Todo lo que necesitas saber</p>
          </a>
        </div>

        <div class="col-sm-6 col-lg-3">
          <a href="/alquiler-seadoo-mallorca/" class="service-card">
            <span class="service-card__icon">⚙️</span>
            <h3 class="service-card__title">Alquiler Sea-Doo</h3>
            <p class="service-card__desc">Los mejores modelos del mercado</p>
          </a>
        </div>

        <div class="col-sm-6 col-lg-3">
          <a href="/rutas-moto-agua-mallorca/" class="service-card">
            <span class="service-card__icon">🗺️</span>
            <h3 class="service-card__title">Rutas por Mallorca</h3>
            <p class="service-card__desc">Explora la costa este</p>
          </a>
        </div>

      </div>
    </div>
  </section>
  ```

- [ ] **Paso 3: Verificar que el bloque está entre las secciones correctas**
  ```bash
  grep -n "id=\"experiencias\"\|id=\"servicios\"\|id=\"caracteristicas\"" src/index.njk
  ```
  Deben aparecer en ese orden: experiencias → servicios → caracteristicas.

- [ ] **Paso 4: Añadir las 4 URLs nuevas al sitemap**

  Añadir justo antes del cierre `</urlset>` en `src/sitemap.xml`:
  ```xml
  <url>
    <loc>https://jetexperiencemallorca.com/alquiler-moto-agua-mallorca/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jetexperiencemallorca.com/moto-agua-con-licencia-mallorca/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jetexperiencemallorca.com/alquiler-seadoo-mallorca/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jetexperiencemallorca.com/rutas-moto-agua-mallorca/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  ```

- [ ] **Paso 5: Validar sitemap**
  ```bash
  xmllint --noout src/sitemap.xml && echo "XML válido"
  grep -c "<loc>" src/sitemap.xml
  ```
  Debe devolver `10` (6 localidad/homepage + 4 servicio).

- [ ] **Paso 6: Commit**
  ```bash
  git add src/index.njk src/sitemap.xml
  git commit -m "$(cat <<'EOF'
  feat(homepage): add services block with links to 4 service pages
  feat(sitemap): add 4 service page URLs to sitemap

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 7: Build completo y verificación

- [ ] **Paso 1: Build**
  ```bash
  npm run build 2>&1
  ```
  Debe mostrar 12 archivos escritos (homepage + 5 localidades + 4 servicios + 2 legales).

- [ ] **Paso 2: Verificar las 12 páginas**
  ```bash
  find _site -name "index.html" | sort | wc -l
  ```
  Debe devolver `12`.

- [ ] **Paso 3: Verificar titles únicos en páginas de servicio**
  ```bash
  for slug in alquiler-moto-agua-mallorca moto-agua-con-licencia-mallorca alquiler-seadoo-mallorca rutas-moto-agua-mallorca; do
    echo -n "$slug: "
    grep "<title>" _site/$slug/index.html
  done
  ```

- [ ] **Paso 4: Verificar JSON-LD válido en cada servicio**
  ```bash
  for slug in alquiler-moto-agua-mallorca moto-agua-con-licencia-mallorca alquiler-seadoo-mallorca rutas-moto-agua-mallorca; do
    python3 -c "
  import re, json, sys
  html = open('_site/$slug/index.html').read()
  matches = re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', html, re.DOTALL)
  [json.loads(m) for m in matches]
  print('$slug: JSON-LD OK (' + str(len(matches)) + ' bloques)')
  "
  done
  ```

- [ ] **Paso 5: Verificar bloque servicios en homepage**
  ```bash
  grep "service-card" _site/index.html | wc -l
  ```
  Debe devolver `4` (una por cada tarjeta de servicio).

- [ ] **Paso 6: Verificar links a localidades en página de rutas**
  ```bash
  grep "jet-ski-" _site/rutas-moto-agua-mallorca/index.html | grep href | wc -l
  ```
  Debe devolver al menos `5`.

- [ ] **Paso 7: Verificar sitemap tiene 10 URLs**
  ```bash
  grep -c "<loc>" src/sitemap.xml
  ```
  Debe devolver `10`.

---

## Criterios de aceptación globales

- [ ] `npm run build` genera 12 páginas HTML sin errores
- [ ] Cada página de servicio tiene `<title>` y `<link canonical>` únicos
- [ ] JSON-LD válido en las 4 páginas de servicio
- [ ] Bloque `#servicios` visible en la homepage
- [ ] Las 4 tarjetas del bloque enlazan a las URLs correctas
- [ ] Página de rutas enlaza a las 5 páginas de localidad
- [ ] Sitemap tiene 10 URLs
- [ ] Homepage y páginas existentes sin cambios no deseados
