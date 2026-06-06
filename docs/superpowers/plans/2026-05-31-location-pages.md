# Location Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crear 5 páginas de localidad SEO optimizadas (Cala Millor, Cala Bona, Sa Coma, Porto Cristo, Costa de los Pinos) usando un sistema data-driven con Eleventy.

**Architecture:** Un archivo `locations.json` en `src/_data/` alimenta un único template `location.njk`. Cada página localidad es un `.njk` con solo frontmatter. `head.njk` se hace dinámico con fallbacks para no romper la homepage.

**Tech Stack:** Eleventy 3.x · Nunjucks · JSON data files

**Rama:** `feature/arquitectura-multipagina`

---

## Mapa de archivos

| Acción | Archivo |
|---|---|
| Modificar | `.eleventy.js` — añadir filter `getLocation` |
| Crear | `src/_data/locations.json` — datos de las 5 localidades |
| Modificar | `src/_includes/head.njk` — 6 líneas dinámicas con fallback |
| Crear | `src/_includes/location.njk` — template compartido |
| Crear | `src/jet-ski-cala-millor.njk` — frontmatter only |
| Crear | `src/jet-ski-cala-bona.njk` — frontmatter only |
| Crear | `src/jet-ski-sa-coma.njk` — frontmatter only |
| Crear | `src/jet-ski-porto-cristo.njk` — frontmatter only |
| Crear | `src/jet-ski-costa-de-los-pinos.njk` — frontmatter only |
| Modificar | `src/sitemap.xml` — añadir 5 URLs |

---

## Task 1: Añadir filter `getLocation` a `.eleventy.js`

**Archivos:**
- Modificar: `.eleventy.js`

**Por qué:** Nunjucks no tiene `selectattr` nativo. Necesitamos un custom filter para buscar una localidad en el array por su slug.

- [ ] **Paso 1: Añadir el filter antes del `return`**

  Antes:
  ```js
  module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/config.js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/.htaccess");

    return {
  ```

  Después:
  ```js
  module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/config.js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/.htaccess");

    eleventyConfig.addFilter("getLocation", function(locations, slug) {
      return locations.find(loc => loc.slug === slug);
    });

    eleventyConfig.addFilter("urlencode", function(str) {
      return encodeURIComponent(str);
    });

    return {
  ```

- [ ] **Paso 2: Verificar sintaxis**
  ```bash
  node -e "require('./.eleventy.js')({addPassthroughCopy:()=>{},addFilter:()=>{}})" && echo "OK"
  ```
  Debe imprimir `OK`.

- [ ] **Paso 3: Commit**
  ```bash
  git add .eleventy.js
  git commit -m "$(cat <<'EOF'
  feat(eleventy): add getLocation filter for location page template

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 2: Crear `src/_data/locations.json`

**Archivos:**
- Crear: `src/_data/locations.json`

**Por qué:** Eleventy carga automáticamente los archivos de `src/_data/` como variables globales disponibles en todos los templates. `locations.json` estará disponible como `locations` en Nunjucks.

- [ ] **Paso 1: Crear el directorio y el archivo**
  ```bash
  mkdir -p src/_data
  ```

  Crear `src/_data/locations.json` con este contenido exacto:

  ```json
  [
    {
      "slug": "cala-millor",
      "name": "Cala Millor",
      "title": "Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares",
      "description": "Alquila una moto de agua en Cala Millor, Mallorca. Salida directa desde Costa de los Pinos. Sea-Doo modernos, chaleco incluido. Reserva fácil por WhatsApp.",
      "h1": "Alquiler de Jet Ski en Cala Millor, Mallorca",
      "intro1": "Cala Millor es uno de los destinos turísticos más populares de la costa levantina de Mallorca, con más de 1,5 km de playa de arena dorada. Sus aguas tranquilas y poco profundas la convierten en el escenario perfecto para disfrutar de una experiencia en moto de agua, tanto si es tu primera vez como si ya tienes experiencia.",
      "intro2": "Desde nuestra base en Costa de los Pinos, llegamos directamente a tu zona de baño con nuestras Sea-Doo. Solo necesitas licencia náutica y ganas de disfrutar el Mediterráneo.",
      "highlight": "Navega frente a sus 1,5 km de playa dorada con aguas tranquilas y poca corriente.",
      "features": [
        "Aguas tranquilas, ideal para principiantes con licencia náutica",
        "Playa de 1,5 km con arena dorada y fondo visible",
        "Zona de navegación amplia, sin obstáculos"
      ],
      "faq": [
        {
          "q": "¿Dónde sale el jet ski en Cala Millor?",
          "a": "Nuestra base está en Avenida del Pinar 43, Costa de los Pinos, a menos de 1 km de la playa de Cala Millor. También hacemos entrega directamente en la playa si lo prefieres."
        },
        {
          "q": "¿Las aguas de Cala Millor son aptas para principiantes?",
          "a": "Sí. Cala Millor tiene aguas tranquilas y bien protegidas, ideales para quien pilota por primera vez. Siempre con licencia náutica obligatoria y briefing de seguridad incluido."
        }
      ],
      "geo": { "lat": 39.5878, "lng": 3.3947 },
      "image": "galeria-03.jpg",
      "imageAlt": "Playa de Cala Millor vista desde el mar, Mallorca"
    },
    {
      "slug": "cala-bona",
      "name": "Cala Bona",
      "title": "Alquiler de Jet Ski en Cala Bona, Mallorca | JetExperience Baleares",
      "description": "Alquila una moto de agua en Cala Bona, Mallorca. A 1 km de nuestra base en Costa de los Pinos. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp.",
      "h1": "Alquiler de Jet Ski en Cala Bona, Mallorca",
      "intro1": "Cala Bona es un pequeño y pintoresco puerto pesquero a apenas 1 km de Cala Millor. Sus aguas azules y su entorno más íntimo la convierten en una de las salidas favoritas de nuestros clientes. Navegar frente a Cala Bona combina la emoción del jet ski con unas vistas privilegiadas de la sierra de Llevant.",
      "intro2": "Nuestra base en Costa de los Pinos está a menos de 5 minutos navegando, lo que hace de Cala Bona uno de los puntos de inicio más cómodos para tu experiencia.",
      "highlight": "Puerto natural íntimo con aguas azules y vistas a la sierra de Llevant.",
      "features": [
        "Puerto natural protegido, aguas en calma",
        "Entorno más íntimo y menos masificado que Cala Millor",
        "A 1 km de nuestra base — llegamos en minutos"
      ],
      "faq": [
        {
          "q": "¿Puedo reservar el jet ski directamente en Cala Bona?",
          "a": "Sí. Contacta por WhatsApp e indicamos el punto de encuentro exacto en Cala Bona. El servicio incluye entrega y recogida en el lugar acordado."
        },
        {
          "q": "¿Cuánto tarda en llegar el servicio a Cala Bona?",
          "a": "Nuestra base está a menos de 1 km de Cala Bona. Confirmamos hora de encuentro al reservar y llegamos puntualmente."
        }
      ],
      "geo": { "lat": 39.6005, "lng": 3.4167 },
      "image": "galeria-05.jpg",
      "imageAlt": "Aguas cristalinas en Cala Bona, Mallorca"
    },
    {
      "slug": "sa-coma",
      "name": "Sa Coma",
      "title": "Alquiler de Jet Ski en Sa Coma, Mallorca | JetExperience Baleares",
      "description": "Alquila una moto de agua en Sa Coma, Mallorca. Aguas cristalinas a 2 km de nuestra base. Sea-Doo modernos, chaleco incluido. Reserva fácil por WhatsApp.",
      "h1": "Alquiler de Jet Ski en Sa Coma, Mallorca",
      "intro1": "Sa Coma es una playa natural menos masificada que sus vecinas, con aguas cristalinas y fondos de arena blanca. A tan solo 2 km navegando desde nuestra base, es ideal para quienes buscan explorar la costa este de Mallorca con total libertad.",
      "intro2": "Sus aguas tranquilas y limpias hacen de Sa Coma una de las rutas más disfrutadas por nuestros clientes. Un entorno natural donde la moto de agua encaja a la perfección.",
      "highlight": "Playa natural de arena blanca con aguas cristalinas y poca afluencia turística.",
      "features": [
        "Playa natural, menos masificada y más tranquila",
        "Aguas cristalinas con fondos de arena blanca",
        "A 2 km navegando desde nuestra base"
      ],
      "faq": [
        {
          "q": "¿Se puede hacer jet ski en Sa Coma?",
          "a": "Sí. Sa Coma es una de nuestras zonas de navegación habituales. El servicio incluye entrega en el punto de la playa que prefieras."
        },
        {
          "q": "¿Qué distancia hay entre Sa Coma y vuestra base?",
          "a": "Aproximadamente 2 km navegando desde Costa de los Pinos. En moto de agua se alcanza en pocos minutos."
        }
      ],
      "geo": { "lat": 39.6112, "lng": 3.4178 },
      "image": "galeria-06.jpg",
      "imageAlt": "Aguas turquesas de Sa Coma, Mallorca"
    },
    {
      "slug": "porto-cristo",
      "name": "Porto Cristo",
      "title": "Alquiler de Jet Ski en Porto Cristo, Mallorca | JetExperience Baleares",
      "description": "Ruta en jet ski hasta Porto Cristo desde Costa de los Pinos. ~12 km de costa virgen, calas escondidas y acantilados. La experiencia más aventurera. Reserva por WhatsApp.",
      "h1": "Alquiler de Jet Ski en Porto Cristo, Mallorca",
      "intro1": "Porto Cristo es uno de los puertos naturales más espectaculares de Mallorca, conocido mundialmente por las Coves del Drach. Navegar en jet ski hasta Porto Cristo es la ruta más aventurera de nuestro catálogo: aproximadamente 12 km de costa virgen con calas escondidas y acantilados imponentes.",
      "intro2": "Esta ruta está disponible con el Pack Especial de 2 horas y es perfecta para quienes ya tienen experiencia y quieren explorar el litoral este de Mallorca a fondo. Consulta disponibilidad por WhatsApp.",
      "highlight": "La ruta más larga y espectacular: ~12 km de costa virgen hasta el puerto natural de Porto Cristo.",
      "features": [
        "Ruta de ~12 km con calas vírgenes y acantilados",
        "Puerto natural espectacular al final del trayecto",
        "Recomendada con el Pack Especial 2 horas"
      ],
      "faq": [
        {
          "q": "¿Podemos llegar a Porto Cristo en jet ski?",
          "a": "Sí, es nuestra ruta más larga. Disponible con el Pack Especial de 2 horas. Se recomienda experiencia previa y buen estado del mar. Consulta disponibilidad."
        },
        {
          "q": "¿Cuánto tiempo dura la ruta hasta Porto Cristo?",
          "a": "Aproximadamente 2 horas ida y vuelta navegando a ritmo cómodo, con paradas para disfrutar del paisaje. Por eso la recomendamos con el pack de 2 horas."
        }
      ],
      "geo": { "lat": 39.5322, "lng": 3.3381 },
      "image": "galeria-04.jpg",
      "imageAlt": "Ruta costera en moto de agua hacia Porto Cristo, Mallorca"
    },
    {
      "slug": "costa-de-los-pinos",
      "name": "Costa de los Pinos",
      "title": "Alquiler de Jet Ski en Costa de los Pinos, Mallorca | JetExperience Baleares",
      "description": "Nuestra base de jet ski está en Costa de los Pinos, Mallorca. Salida directa al mar desde Avenida del Pinar 43. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp.",
      "h1": "Alquiler de Jet Ski en Costa de los Pinos, Mallorca",
      "intro1": "Costa de los Pinos es el punto de salida de todas nuestras experiencias y nuestra base principal. Esta exclusiva zona residencial entre Sa Coma y Cala Millor ofrece acceso directo al mar en aguas privilegiadas, con poca afluencia de bañistas y un entorno natural extraordinario.",
      "intro2": "Si te alojas en Costa de los Pinos o sus alrededores, el servicio sale directamente desde aquí. Avenida del Pinar 43 es el punto de partida hacia Cala Millor, Cala Bona, Sa Coma y Porto Cristo.",
      "highlight": "Base principal del servicio. Salida directa al mar desde Avenida del Pinar 43.",
      "features": [
        "Base principal — salida directa sin desplazamiento",
        "Aguas tranquilas y exclusivas, poca afluencia",
        "Punto de partida ideal para todas las rutas"
      ],
      "faq": [
        {
          "q": "¿Dónde está exactamente vuestra base en Costa de los Pinos?",
          "a": "En Avenida del Pinar 43, Costa de los Pinos, 07560. Puedes encontrarnos en Google Maps buscando JetExperience Baleares."
        },
        {
          "q": "¿Hacéis entrega en Costa de los Pinos?",
          "a": "Sí, de hecho es nuestro punto habitual de entrega. Confirma lugar exacto al reservar por WhatsApp."
        }
      ],
      "geo": { "lat": 39.6377, "lng": 3.4145 },
      "image": "galeria-11-new.jpg",
      "imageAlt": "Vista aérea de moto de agua en Costa de los Pinos, Mallorca"
    }
  ]
  ```

- [ ] **Paso 2: Verificar JSON válido**
  ```bash
  python3 -c "import json; json.load(open('src/_data/locations.json')); print('JSON válido')"
  ```
  Debe imprimir `JSON válido`.

- [ ] **Paso 3: Verificar que Eleventy ve el data file**
  ```bash
  npm run build 2>&1 | grep -i "error\|warn" | grep -v "npm warn"
  ```
  No deben aparecer errores.

- [ ] **Paso 4: Commit**
  ```bash
  git add src/_data/locations.json
  git commit -m "$(cat <<'EOF'
  feat(data): add locations.json with 5 location entries

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 3: Hacer dinámico `src/_includes/head.njk`

**Archivos:**
- Modificar: `src/_includes/head.njk`

**Por qué:** Las 6 líneas con title, description, canonical y OG tags están hardcodeadas para la homepage. Hay que hacerlas dinámicas con fallback para que la homepage siga igual y las páginas de localidad usen sus propios valores.

- [ ] **Paso 1: Reemplazar la línea `<title>` (línea 16)**

  Antes:
  ```html
  <title>Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares</title>
  ```
  Después:
  ```njk
  <title>{{ pageTitle or "Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares" }}</title>
  ```

- [ ] **Paso 2: Reemplazar `<meta name="description">` (línea 17)**

  Antes:
  ```html
  <meta name="description" content="Alquila una moto de agua en Cala Millor, Mallorca. Con licencia náutica. Sea-Doo modernos, chaleco incluido. Rutas de 1h (130€) y 2h (200€). Reserva fácil por WhatsApp.">
  ```
  Después:
  ```njk
  <meta name="description" content="{{ pageDescription or 'Alquila una moto de agua en Cala Millor, Mallorca. Con licencia náutica. Sea-Doo modernos, chaleco incluido. Rutas de 1h (130€) y 2h (200€). Reserva fácil por WhatsApp.' }}">
  ```

- [ ] **Paso 3: Reemplazar `<link rel="canonical">` (línea 18)**

  Antes:
  ```html
  <link rel="canonical" href="https://jetexperiencemallorca.com/">
  ```
  Después:
  ```njk
  <link rel="canonical" href="{{ pageCanonical or 'https://jetexperiencemallorca.com/' }}">
  ```

- [ ] **Paso 4: Reemplazar `og:title` (línea 27)**

  Antes:
  ```html
  <meta property="og:title" content="Alquiler de Jet Ski en Cala Millor | JetExperience Baleares">
  ```
  Después:
  ```njk
  <meta property="og:title" content="{{ pageTitle or 'Alquiler de Jet Ski en Cala Millor | JetExperience Baleares' }}">
  ```

- [ ] **Paso 5: Reemplazar `og:description` (línea 28)**

  Antes:
  ```html
  <meta property="og:description" content="Vive una experiencia única en el mar. Con licencia náutica. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp.">
  ```
  Después:
  ```njk
  <meta property="og:description" content="{{ pageDescription or 'Vive una experiencia única en el mar. Con licencia náutica. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp.' }}">
  ```

- [ ] **Paso 6: Reemplazar `og:url` (línea 32)**

  Antes:
  ```html
  <meta property="og:url" content="https://jetexperiencemallorca.com/">
  ```
  Después:
  ```njk
  <meta property="og:url" content="{{ pageCanonical or 'https://jetexperiencemallorca.com/' }}">
  ```

- [ ] **Paso 7: Verificar que la homepage sigue igual**
  ```bash
  npm run build 2>&1 | tail -3
  grep "<title>" _site/index.html
  grep "canonical" _site/index.html
  ```
  El `<title>` de `_site/index.html` debe seguir siendo `Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares` (fallback activo).

- [ ] **Paso 8: Commit**
  ```bash
  git add src/_includes/head.njk
  git commit -m "$(cat <<'EOF'
  feat(seo): make head.njk title, description and canonical dynamic with fallbacks

  Allows location pages to pass custom SEO tags via frontmatter while
  homepage continues using the hardcoded fallback values unchanged.

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 4: Crear `src/_includes/location.njk`

**Archivos:**
- Crear: `src/_includes/location.njk`

**Por qué:** Template compartido que renderiza cualquier página de localidad. Lee los datos del JSON mediante el filter `getLocation` y el `locationSlug` del frontmatter.

- [ ] **Paso 1: Crear `src/_includes/location.njk`** con este contenido exacto:

  ```njk
  {% set loc = locations | getLocation(locationSlug) %}

  <nav class="container py-3" aria-label="Breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="/">Inicio</a></li>
      <li class="breadcrumb-item active" aria-current="page">Jet Ski {{ loc.name }}</li>
    </ol>
  </nav>

  <section class="feature-section py-section bg-light-brand">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h1 class="section-title mb-4">{{ loc.h1 }}</h1>
          <p class="feature-desc">{{ loc.intro1 }}</p>
          <p class="feature-desc">{{ loc.intro2 }}</p>
          <a href="https://api.whatsapp.com/send/?phone=34618842609&text=Hola%2C%20quiero%20reservar%20jet%20ski%20en%20{{ loc.name | urlencode }}%2C%20%C2%BFpod%C3%A9is%20informarme%3F"
             class="btn-cta mt-3" target="_blank" rel="noopener">
            Reservar en {{ loc.name }} →
          </a>
        </div>
        <div class="col-lg-6">
          <img src="/assets/img/{{ loc.image }}"
               alt="{{ loc.imageAlt }}"
               loading="lazy"
               class="rounded-4 shadow-lg w-100">
        </div>
      </div>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <p class="feature-desc fst-italic text-muted mb-4">{{ loc.highlight }}</p>
      <ul class="checklist">
        {% for feat in loc.features %}
        <li class="checklist__item checklist__item--yes">{{ feat }}</li>
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="py-section bg-dark-brand">
    <div class="container text-center">
      <h2 class="section-title section-title--light mb-4">¿Listo para salir al mar en {{ loc.name }}?</h2>
      <a href="https://api.whatsapp.com/send/?phone=34618842609&text=Hola%2C%20quiero%20reservar%20jet%20ski%20en%20{{ loc.name | urlencode }}%2C%20%C2%BFpod%C3%A9is%20informarme%3F"
         class="btn-cta btn-cta--dark" target="_blank" rel="noopener">
        Reservar por WhatsApp
      </a>
    </div>
  </section>

  <section class="py-section bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <h2 class="section-title">Preguntas frecuentes</h2>
        </div>
        <div class="col-lg-7">
          <div class="accordion" id="faqLocation">
            {% for item in loc.faq %}
            <div class="accordion-item faq-item">
              <h3 class="accordion-header">
                <button class="accordion-button faq-btn collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#faqL{{ loop.index }}">
                  {{ item.q }}
                </button>
              </h3>
              <div id="faqL{{ loop.index }}" class="accordion-collapse collapse" data-bs-parent="#faqLocation">
                <div class="accordion-body faq-body">{{ item.a }}</div>
              </div>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container py-4 text-center">
    <a href="/" class="btn-outline-light-brand">← Ver todas las experiencias</a>
  </div>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://jetexperiencemallorca.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "{{ loc.h1 }}"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "{{ loc.h1 }}",
        "provider": {
          "@id": "https://jetexperiencemallorca.com/#business"
        },
        "areaServed": {
          "@type": "Place",
          "name": "{{ loc.name }}, Mallorca"
        },
        "url": "https://jetexperiencemallorca.com/jet-ski-{{ loc.slug }}/"
      }
    ]
  }
  </script>
  ```

  **Nota:** el JSON-LD usa variables Nunjucks directamente (`{{ loc.h1 }}`). Sin `{% raw %}` porque el JSON solo tiene `{` simples (no `{{`), que Nunjucks ignora.

- [ ] **Paso 2: Verificar que el archivo tiene las secciones clave**
  ```bash
  grep "breadcrumb\|checklist\|faqLocation\|application/ld" src/_includes/location.njk
  ```
  Debe mostrar las 4 líneas.

- [ ] **Paso 3: Commit**
  ```bash
  git add src/_includes/location.njk
  git commit -m "$(cat <<'EOF'
  feat(eleventy): add location.njk shared template for location pages

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 5: Crear las 5 páginas de localidad

**Archivos:**
- Crear: `src/jet-ski-cala-millor.njk`
- Crear: `src/jet-ski-cala-bona.njk`
- Crear: `src/jet-ski-sa-coma.njk`
- Crear: `src/jet-ski-porto-cristo.njk`
- Crear: `src/jet-ski-costa-de-los-pinos.njk`

Cada archivo es solo frontmatter — el contenido lo provee `location.njk`.

- [ ] **Paso 1: Crear `src/jet-ski-cala-millor.njk`**
  ```njk
  ---
  layout: location.njk
  locationSlug: cala-millor
  pageTitle: "Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares"
  pageDescription: "Alquila una moto de agua en Cala Millor, Mallorca. Salida directa desde Costa de los Pinos. Sea-Doo modernos, chaleco incluido. Reserva fácil por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/jet-ski-cala-millor/"
  permalink: /jet-ski-cala-millor/
  ---
  ```

- [ ] **Paso 2: Crear `src/jet-ski-cala-bona.njk`**
  ```njk
  ---
  layout: location.njk
  locationSlug: cala-bona
  pageTitle: "Alquiler de Jet Ski en Cala Bona, Mallorca | JetExperience Baleares"
  pageDescription: "Alquila una moto de agua en Cala Bona, Mallorca. A 1 km de nuestra base en Costa de los Pinos. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/jet-ski-cala-bona/"
  permalink: /jet-ski-cala-bona/
  ---
  ```

- [ ] **Paso 3: Crear `src/jet-ski-sa-coma.njk`**
  ```njk
  ---
  layout: location.njk
  locationSlug: sa-coma
  pageTitle: "Alquiler de Jet Ski en Sa Coma, Mallorca | JetExperience Baleares"
  pageDescription: "Alquila una moto de agua en Sa Coma, Mallorca. Aguas cristalinas a 2 km de nuestra base. Sea-Doo modernos, chaleco incluido. Reserva fácil por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/jet-ski-sa-coma/"
  permalink: /jet-ski-sa-coma/
  ---
  ```

- [ ] **Paso 4: Crear `src/jet-ski-porto-cristo.njk`**
  ```njk
  ---
  layout: location.njk
  locationSlug: porto-cristo
  pageTitle: "Alquiler de Jet Ski en Porto Cristo, Mallorca | JetExperience Baleares"
  pageDescription: "Ruta en jet ski hasta Porto Cristo desde Costa de los Pinos. ~12 km de costa virgen, calas escondidas y acantilados. La experiencia más aventurera. Reserva por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/jet-ski-porto-cristo/"
  permalink: /jet-ski-porto-cristo/
  ---
  ```

- [ ] **Paso 5: Crear `src/jet-ski-costa-de-los-pinos.njk`**
  ```njk
  ---
  layout: location.njk
  locationSlug: costa-de-los-pinos
  pageTitle: "Alquiler de Jet Ski en Costa de los Pinos, Mallorca | JetExperience Baleares"
  pageDescription: "Nuestra base de jet ski está en Costa de los Pinos, Mallorca. Salida directa al mar desde Avenida del Pinar 43. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp."
  pageCanonical: "https://jetexperiencemallorca.com/jet-ski-costa-de-los-pinos/"
  permalink: /jet-ski-costa-de-los-pinos/
  ---
  ```

- [ ] **Paso 6: Verificar que los 5 archivos existen**
  ```bash
  ls src/jet-ski-*.njk
  ```
  Debe mostrar los 5 archivos.

- [ ] **Paso 7: Commit**
  ```bash
  git add src/jet-ski-*.njk
  git commit -m "$(cat <<'EOF'
  feat(pages): add 5 location pages (Cala Millor, Cala Bona, Sa Coma, Porto Cristo, Costa de los Pinos)

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 6: Actualizar `src/sitemap.xml`

**Archivos:**
- Modificar: `src/sitemap.xml`

**Por qué:** Las 5 nuevas URLs deben estar en el sitemap para que Google las descubra e indexe. Priority 0.8 (inferior a homepage 1.0 pero superior a páginas de baja importancia).

- [ ] **Paso 1: Añadir las 5 entradas al sitemap**

  Añadir justo antes del cierre `</urlset>` de `src/sitemap.xml`:

  ```xml
  <url>
    <loc>https://jetexperiencemallorca.com/jet-ski-cala-millor/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jetexperiencemallorca.com/jet-ski-cala-bona/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jetexperiencemallorca.com/jet-ski-sa-coma/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jetexperiencemallorca.com/jet-ski-porto-cristo/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://jetexperiencemallorca.com/jet-ski-costa-de-los-pinos/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  ```

- [ ] **Paso 2: Validar el XML**
  ```bash
  xmllint --noout src/sitemap.xml && echo "XML válido"
  ```

- [ ] **Paso 3: Verificar que hay 6 URLs en total**
  ```bash
  grep -c "<loc>" src/sitemap.xml
  ```
  Debe devolver `6` (homepage + 5 localidades).

- [ ] **Paso 4: Commit**
  ```bash
  git add src/sitemap.xml
  git commit -m "$(cat <<'EOF'
  feat(sitemap): add 5 location page URLs to sitemap

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 7: Build completo y verificación

**Archivos:**
- Ninguno — solo verificación

- [ ] **Paso 1: Ejecutar el build**
  ```bash
  npm run build 2>&1
  ```
  Debe completar sin errores. Output esperado:
  ```
  [11ty] Writing ./_site/index.html
  [11ty] Writing ./_site/jet-ski-cala-millor/index.html
  [11ty] Writing ./_site/jet-ski-cala-bona/index.html
  [11ty] Writing ./_site/jet-ski-sa-coma/index.html
  [11ty] Writing ./_site/jet-ski-porto-cristo/index.html
  [11ty] Writing ./_site/jet-ski-costa-de-los-pinos/index.html
  [11ty] Writing ./_site/legal/aviso-legal/index.html
  [11ty] Writing ./_site/legal/politica-privacidad/index.html
  [11ty] Copied X Wrote 8 files in X.XXs
  ```

- [ ] **Paso 2: Verificar que se generaron las 8 páginas**
  ```bash
  find _site -name "index.html" | sort
  ```
  Debe mostrar 8 archivos.

- [ ] **Paso 3: Verificar title único en cada página de localidad**
  ```bash
  for slug in cala-millor cala-bona sa-coma porto-cristo costa-de-los-pinos; do
    echo "--- $slug ---"
    grep "<title>" _site/jet-ski-$slug/index.html
  done
  ```
  Cada página debe tener su propio `<title>` único.

- [ ] **Paso 4: Verificar canonical único**
  ```bash
  for slug in cala-millor cala-bona sa-coma porto-cristo costa-de-los-pinos; do
    grep "canonical" _site/jet-ski-$slug/index.html
  done
  ```
  Cada canonical debe apuntar a su propia URL (`/jet-ski-[slug]/`).

- [ ] **Paso 5: Verificar JSON-LD en una página de localidad**
  ```bash
  python3 -c "
  import re, json
  html = open('_site/jet-ski-cala-millor/index.html').read()
  matches = re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', html, re.DOTALL)
  for m in matches:
      json.loads(m)
  print(f'JSON-LD válido — {len(matches)} bloques')
  "
  ```
  Debe imprimir `JSON-LD válido — 1 bloques`.

- [ ] **Paso 6: Verificar H1 en cada página**
  ```bash
  for slug in cala-millor cala-bona sa-coma porto-cristo costa-de-los-pinos; do
    echo -n "$slug: "
    grep -o '<h1[^>]*>[^<]*</h1>' _site/jet-ski-$slug/index.html | head -1
  done
  ```
  Cada H1 debe contener el nombre de su localidad.

- [ ] **Paso 7: Verificar que la homepage no ha cambiado**
  ```bash
  grep "<title>" _site/index.html
  grep "canonical" _site/index.html
  ```
  Debe mostrar los valores originales de la homepage (fallback activo).

---

## Criterios de aceptación globales

- [ ] `npm run build` genera 8 páginas HTML sin errores
- [ ] Cada página de localidad tiene `<title>` y `<link canonical>` únicos
- [ ] Cada página tiene H1 con el keyword de la localidad
- [ ] JSON-LD válido en cada página (BreadcrumbList + Service)
- [ ] Breadcrumb HTML visible en todas las páginas
- [ ] Botón WhatsApp incluye nombre de la localidad en el mensaje
- [ ] 5 URLs nuevas en `src/sitemap.xml`
- [ ] Homepage sigue sin cambios (fallbacks funcionando)
- [ ] Bootstrap accordion funciona en FAQs de localidad
