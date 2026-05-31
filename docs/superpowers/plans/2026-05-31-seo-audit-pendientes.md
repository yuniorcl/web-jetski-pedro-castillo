# SEO Audit Pendientes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolver los 5 ítems pendientes del audit SEO de 2026-05-17 sin cambios visibles para el usuario.

**Architecture:** Sitio estático HTML/CSS/JS puro. Sin framework ni build tool. Los cambios se aplican directamente sobre `index.html`, `sitemap.xml` y `assets/img/`. Cada tarea es atómica y genera un commit independiente.

**Tech Stack:** HTML5 · JSON-LD · XML · sips (macOS, built-in) para resize de imágenes

---

## Archivos afectados

| Archivo | Tareas |
|---|---|
| `index.html` | T1 (width/height), T3 (schema), T4 (hreflang) |
| `sitemap.xml` | T2 (imágenes hero) |
| `assets/img/` | T5 (variantes responsive) |

---

## Task 1: Añadir `width` y `height` a todos los `<img>` (fix CLS)

**Archivos:**
- Modify: `index.html`

**Por qué:** Sin dimensiones explícitas el navegador no reserva espacio antes de descargar cada imagen, lo que causa saltos de layout (CLS). Con `width` y `height` el browser calcula el aspect-ratio y reserva el hueco. El CSS con `max-width:100%; height:auto` sigue controlando el tamaño visual.

- [ ] **Paso 1: Abrir `index.html` y localizar cada `<img>`**

  Buscar con grep para ver cuántas hay:
  ```bash
  grep -n "<img " index.html | wc -l
  ```
  Debe devolver 28 (logo ×2, servicio ×4, exp-card ×3, fleet ×2, galería grid ×12, lightbox ×12 están fuera del `<img>` directo, QR ×1).

- [ ] **Paso 2: Añadir `width` y `height` al logo del header (línea ~237)**

  Antes:
  ```html
  <img src="assets/img/logo.jpeg" alt="JetExperience Baleares"
    style="height:54px; width:54px; border-radius:50%; object-fit:cover;">
  ```
  Después:
  ```html
  <img src="assets/img/logo.jpeg" alt="JetExperience Baleares"
    width="54" height="54"
    style="height:54px; width:54px; border-radius:50%; object-fit:cover;">
  ```

- [ ] **Paso 3: Añadir dimensiones a las 4 imágenes de la sección Servicio (~líneas 329-335)**

  ```html
  <img src="assets/img/servicio-01.avif"
    alt="Moto acuática Sea-Doo en Mallorca" loading="lazy"
    width="1920" height="1483" class="feature-grid__img">
  <img src="assets/img/servicio-02-new.jpg"
    alt="Moto acuática navegando en el Mediterráneo" loading="lazy"
    width="800" height="533" class="feature-grid__img">
  <img src="assets/img/servicio-03.avif"
    alt="Sea-Doo en el Mediterráneo Mallorca" loading="lazy"
    width="1920" height="1483" class="feature-grid__img">
  <img src="assets/img/servicio-04.avif"
    alt="Experiencia moto acuática Mallorca" loading="lazy"
    width="1100" height="619" class="feature-grid__img">
  ```

- [ ] **Paso 4: Añadir dimensiones a las imágenes de las tarjetas de experiencias (~líneas 357, 377, 398)**

  ```html
  <!-- Card 1 -->
  <img src="assets/img/galeria-12-new.jpg"
    alt="Moto acuática a alta velocidad Costa de los Pinos Mallorca"
    loading="lazy" width="800" height="533" class="exp-card__img">

  <!-- Card 2 -->
  <img src="assets/img/galeria-01-new.jpg"
    alt="Grupo en moto acuática con chalecos Costa de los Pinos Mallorca"
    loading="lazy" width="800" height="532" class="exp-card__img">

  <!-- Card Oferta -->
  <img src="assets/img/oferta-especial.jpg"
    alt="Oferta especial 260€ curso licencia náutica + 2h moto de agua Mallorca"
    loading="lazy" width="1024" height="1355" class="exp-card--offer__img">
  ```

- [ ] **Paso 5: Añadir dimensiones a las imágenes de la sección Flota (~líneas 485-490)**

  ```html
  <img src="assets/img/jetski_seadoo.webp"
    alt="Sea-Doo jet ski vista lateral, Cala Millor" loading="lazy"
    width="1280" height="960"
    class="fleet-photo fleet-photo--top rounded-4 shadow-lg">
  <img src="assets/img/fleet-01.avif"
    alt="Sea-Doo jet ski vista frontal, Mallorca" loading="lazy"
    width="661" height="480"
    class="fleet-photo fleet-photo--bottom rounded-4 shadow-lg">
  ```

- [ ] **Paso 6: Añadir dimensiones a las 12 imágenes del grid de galería (~líneas 619-666)**

  ```html
  <!-- galeria-01-new.jpg ---> width="800" height="532"
  <!-- galeria-02.jpeg    ---> width="525" height="360"
  <!-- galeria-03.jpg     ---> width="700" height="525"
  <!-- galeria-04.jpg     ---> width="803" height="499"
  <!-- galeria-05.jpg     ---> width="490" height="281"
  <!-- galeria-06.jpg     ---> width="1024" height="725"
  <!-- galeria-07-new.jpg ---> width="800" height="533"
  <!-- galeria-08-new.jpg ---> width="800" height="450"
  <!-- galeria-09.jpg     ---> width="300" height="168"
  <!-- galeria-10.jpg     ---> width="1024" height="683"
  <!-- galeria-11-new.jpg ---> width="800" height="600"
  <!-- galeria-12-new.jpg ---> width="800" height="533"
  ```

  Aplicar a cada `<img>` dentro de `.gallery-item`. Ejemplo patrón:
  ```html
  <a href="#gimg1" class="gallery-item" data-page="1">
    <img src="assets/img/galeria-01-new.jpg"
      alt="Dos personas en moto acuática con chalecos al atardecer"
      loading="lazy" width="800" height="532">
  </a>
  ```

- [ ] **Paso 7: Añadir dimensiones a las 12 imágenes del lightbox (~líneas 674-697)**

  Mismas dimensiones que el gallery grid. Mismo patrón:
  ```html
  <div id="gimg1" class="lightbox"><a href="#galeria" class="lightbox__close">✕</a>
    <img src="assets/img/galeria-01-new.jpg"
      alt="Dos personas en moto acuática con chalecos al atardecer"
      loading="lazy" width="800" height="532">
  </div>
  ```

- [ ] **Paso 8: Añadir dimensiones al QR (~línea 843)**

  ```html
  <img src="assets/qr/descarga.png"
    alt="QR para dejar reseña en Google — JetExperience Baleares"
    width="132" height="132"
    class="review-qr-img">
  ```

- [ ] **Paso 9: Añadir dimensiones al logo del footer (~línea 865)**

  ```html
  <img src="assets/img/logo.jpeg" alt="JetExperience Baleares"
    width="160" height="160"
    style="height:160px; width:160px; border-radius:50%; object-fit:cover;">
  ```

- [ ] **Paso 10: Verificar en el navegador que no hay cambio visual**

  Abrir http://localhost:8080 y recorrer la página completa. Ninguna imagen debe haberse desplazado o deformado.

- [ ] **Paso 11: Commit**

  ```bash
  git add index.html
  git commit -m "fix(seo): add explicit width and height to all img elements to fix CLS"
  ```

---

## Task 2: Añadir hero-2.jpg y hero-3.jpg al sitemap de imágenes

**Archivos:**
- Modify: `sitemap.xml`

**Por qué:** Las imágenes del slideshow hero se cargan como `background-image` vía CSS, por lo que Google no las descubre de forma automática. Añadirlas al sitemap de imágenes permite que se indexen.

- [ ] **Paso 1: Abrir `sitemap.xml` y localizar el bloque `<url>` de la homepage**

  El archivo tiene un único `<url>`. Añadir las dos entradas nuevas **después** de la última `</image:image>` existente y **antes** del `</url>` de cierre:

  ```xml
  <image:image>
    <image:loc>https://jetexperiencemallorca.com/assets/img/hero-2.jpg</image:loc>
    <image:title>Jet ski en la playa de Cala Millor, Mallorca</image:title>
  </image:image>
  <image:image>
    <image:loc>https://jetexperiencemallorca.com/assets/img/hero-3.jpg</image:loc>
    <image:title>Moto de agua Sea-Doo, JetExperience Baleares</image:title>
  </image:image>
  ```

  El bloque `<url>` final debe quedar:
  ```xml
  <url>
    <loc>https://jetexperiencemallorca.com/</loc>
    <lastmod>2026-05-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://jetexperiencemallorca.com/assets/img/hero-1.jpg</image:loc>
      <image:title>Alquiler de Jet Ski en Cala Millor, Mallorca</image:title>
    </image:image>
    <image:image>
      <image:loc>https://jetexperiencemallorca.com/assets/img/hero-2.jpg</image:loc>
      <image:title>Jet ski en la playa de Cala Millor, Mallorca</image:title>
    </image:image>
    <image:image>
      <image:loc>https://jetexperiencemallorca.com/assets/img/hero-3.jpg</image:loc>
      <image:title>Moto de agua Sea-Doo, JetExperience Baleares</image:title>
    </image:image>
    <image:image>
      <image:loc>https://jetexperiencemallorca.com/assets/img/jetski_seadoo.webp</image:loc>
      <image:title>Sea-Doo Jet Ski, JetExperience Baleares</image:title>
    </image:image>
    <image:image>
      <image:loc>https://jetexperiencemallorca.com/assets/img/galeria-01-new.jpg</image:loc>
      <image:title>Dos personas en moto acuática con chalecos al atardecer, Mallorca</image:title>
    </image:image>
    <image:image>
      <image:loc>https://jetexperiencemallorca.com/assets/img/galeria-11-new.jpg</image:loc>
      <image:title>Vista aérea de moto acuática en agua turquesa, Cala Millor</image:title>
    </image:image>
    <image:image>
      <image:loc>https://jetexperiencemallorca.com/assets/img/galeria-12-new.jpg</image:loc>
      <image:title>Moto acuática a alta velocidad Costa de los Pinos Mallorca</image:title>
    </image:image>
  </url>
  ```

- [ ] **Paso 2: Actualizar `lastmod` a la fecha de hoy**

  Cambiar `<lastmod>2026-05-12</lastmod>` por `<lastmod>2026-05-31</lastmod>`.

- [ ] **Paso 3: Validar el XML**

  ```bash
  xmllint --noout sitemap.xml && echo "OK"
  ```
  Debe imprimir `OK` sin errores.

- [ ] **Paso 4: Commit**

  ```bash
  git add sitemap.xml
  git commit -m "fix(sitemap): add hero-2 and hero-3 to image sitemap, update lastmod"
  ```

---

## Task 3: Añadir `TouristAttraction` al Schema JSON-LD

**Archivos:**
- Modify: `index.html` (bloque `<script type="application/ld+json">`, línea ~68)

**Por qué:** El tipo `TouristAttraction` amplía la visibilidad en el Knowledge Graph de Google para búsquedas turísticas como "actividades en Cala Millor" o "qué hacer en Mallorca".

- [ ] **Paso 1: Localizar la línea `@type` en el JSON-LD**

  Buscar:
  ```bash
  grep -n '"@type"' index.html | head -5
  ```
  Debe aparecer alrededor de la línea 73:
  ```json
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  ```

- [ ] **Paso 2: Añadir `TouristAttraction` al array**

  Antes:
  ```json
  "@type": ["LocalBusiness", "SportsActivityLocation"],
  ```
  Después:
  ```json
  "@type": ["LocalBusiness", "SportsActivityLocation", "TouristAttraction"],
  ```

- [ ] **Paso 3: Validar el JSON-LD**

  Extraer el bloque JSON y validarlo con Python:
  ```bash
  python3 -c "
  import re, json
  html = open('index.html').read()
  match = re.search(r'<script type=\"application/ld\+json\">(.*?)</script>', html, re.DOTALL)
  json.loads(match.group(1))
  print('JSON-LD válido')
  "
  ```
  Debe imprimir `JSON-LD válido` sin excepciones.

- [ ] **Paso 4: Verificar visualmente que la página no ha cambiado**

  Recargar http://localhost:8080 — ningún cambio visible esperado.

- [ ] **Paso 5: Commit**

  ```bash
  git add index.html
  git commit -m "fix(schema): add TouristAttraction type to JSON-LD for better Knowledge Graph visibility"
  ```

---

## Task 4: Corregir hreflang — eliminar señal EN incorrecta

**Archivos:**
- Modify: `index.html` (líneas ~22-24)

**Por qué:** Los tres hreflang apuntan a la misma URL. Google interpreta esto como que existe una versión en inglés en `jetexperiencemallorca.com/`, lo cual es incorrecto. Puede invalidar ambas señales. La corrección es eliminar el hreflang `en` mientras no existan URLs `/en/` reales.

- [ ] **Paso 1: Localizar los tres hreflang actuales**

  ```bash
  grep -n "hreflang" index.html
  ```
  Debe mostrar:
  ```
  22: <link rel="alternate" hreflang="es" href="https://jetexperiencemallorca.com/">
  23: <link rel="alternate" hreflang="en" href="https://jetexperiencemallorca.com/">
  24: <link rel="alternate" hreflang="x-default" href="https://jetexperiencemallorca.com/">
  ```

- [ ] **Paso 2: Eliminar la línea del hreflang `en`**

  Antes (3 líneas):
  ```html
  <link rel="alternate" hreflang="es" href="https://jetexperiencemallorca.com/">
  <link rel="alternate" hreflang="en" href="https://jetexperiencemallorca.com/">
  <link rel="alternate" hreflang="x-default" href="https://jetexperiencemallorca.com/">
  ```
  Después (2 líneas):
  ```html
  <link rel="alternate" hreflang="es" href="https://jetexperiencemallorca.com/">
  <link rel="alternate" hreflang="x-default" href="https://jetexperiencemallorca.com/">
  ```

- [ ] **Paso 3: Confirmar que el conmutador de idioma JS sigue funcionando**

  Abrir http://localhost:8080, pulsar el botón `EN` del menú y comprobar que los textos cambian al inglés. Pulsar `ES` y comprobar que vuelven al español. El hreflang eliminado no afecta al switcher JS.

- [ ] **Paso 4: Verificar que solo quedan 2 hreflang**

  ```bash
  grep -c "hreflang" index.html
  ```
  Debe devolver `2`.

- [ ] **Paso 5: Commit**

  ```bash
  git add index.html
  git commit -m "fix(seo): remove incorrect EN hreflang until /en/ URLs are created"
  ```

---

## Task 5: Imágenes responsive con `<picture>` + `srcset`

**Archivos:**
- Modify: `index.html`
- Create: variantes en `assets/img/` (6 imágenes × 1-2 tamaños = 8-10 archivos nuevos)

**Por qué:** En móvil se descarga la imagen original (hasta 1920px) cuando bastaría con 480px. La etiqueta `<picture>` con `srcset` permite servir la variante correcta según el viewport, reduciendo el peso hasta un 60% en móvil y mejorando LCP y Performance Score.

**Imágenes a procesar:**

| Imagen original | Variantes a generar |
|---|---|
| `servicio-01.avif` (1920×1483) | `servicio-01-480.avif`, `servicio-01-800.avif` |
| `servicio-02-new.jpg` (800×533) | `servicio-02-new-480.jpg` |
| `servicio-03.avif` (1920×1483) | `servicio-03-480.avif`, `servicio-03-800.avif` |
| `servicio-04.avif` (1100×619) | `servicio-04-480.avif` |
| `jetski_seadoo.webp` (1280×960) | `jetski_seadoo-480.webp`, `jetski_seadoo-800.webp` |
| `fleet-01.avif` (661×480) | `fleet-01-400.avif` |

- [ ] **Paso 1: Comprobar herramientas disponibles**

  ```bash
  which ffmpeg && ffmpeg -version 2>&1 | head -1
  which convert && convert --version 2>&1 | head -1
  sips --help 2>&1 | head -3
  ```

  `sips` siempre está disponible en macOS (built-in). Si `ffmpeg` o `convert` (ImageMagick) están disponibles, úsalos para AVIF — `sips` no genera AVIF de forma fiable en todas las versiones de macOS.

- [ ] **Paso 2: Generar variantes de imágenes JPG y WebP con `sips`**

  ```bash
  cd assets/img

  # servicio-02-new.jpg → 480px ancho
  sips -Z 480 servicio-02-new.jpg --out servicio-02-new-480.jpg

  # jetski_seadoo.webp → 480 y 800px
  sips -Z 480 jetski_seadoo.webp --out jetski_seadoo-480.webp
  sips -Z 800 jetski_seadoo.webp --out jetski_seadoo-800.webp

  cd ../..
  ```

  Verificar que los archivos se han creado:
  ```bash
  ls -lh assets/img/servicio-02-new-480.jpg assets/img/jetski_seadoo-480.webp assets/img/jetski_seadoo-800.webp
  ```

- [ ] **Paso 3: Generar variantes AVIF**

  **Opción A — con ffmpeg (preferida):**
  ```bash
  cd assets/img

  ffmpeg -i servicio-01.avif -vf scale=480:-1 servicio-01-480.avif -y
  ffmpeg -i servicio-01.avif -vf scale=800:-1 servicio-01-800.avif -y
  ffmpeg -i servicio-03.avif -vf scale=480:-1 servicio-03-480.avif -y
  ffmpeg -i servicio-03.avif -vf scale=800:-1 servicio-03-800.avif -y
  ffmpeg -i servicio-04.avif -vf scale=480:-1 servicio-04-480.avif -y
  ffmpeg -i fleet-01.avif   -vf scale=400:-1 fleet-01-400.avif -y

  cd ../..
  ```

  **Opción B — con sips (si no hay ffmpeg), convirtiendo a JPG como fallback:**
  ```bash
  cd assets/img

  # Convertir AVIF a JPG en variantes pequeñas (fallback aceptable)
  sips -Z 480 servicio-01.avif --setProperty format jpeg --out servicio-01-480.jpg
  sips -Z 800 servicio-01.avif --setProperty format jpeg --out servicio-01-800.jpg
  sips -Z 480 servicio-03.avif --setProperty format jpeg --out servicio-03-480.jpg
  sips -Z 800 servicio-03.avif --setProperty format jpeg --out servicio-03-800.jpg
  sips -Z 480 servicio-04.avif --setProperty format jpeg --out servicio-04-480.jpg
  sips -Z 400 fleet-01.avif   --setProperty format jpeg --out fleet-01-400.jpg

  cd ../..
  ```

  Si se usa la opción B, los `<source>` del siguiente paso deben referenciar `.jpg` en lugar de `.avif` para las variantes pequeñas.

- [ ] **Paso 4: Verificar tamaños de las variantes generadas**

  ```bash
  ls -lh assets/img/servicio-01*.avif assets/img/servicio-03*.avif assets/img/servicio-04*.avif assets/img/fleet-01*.avif 2>/dev/null || \
  ls -lh assets/img/servicio-01*.jpg assets/img/servicio-03*.jpg assets/img/servicio-04*.jpg assets/img/fleet-01*.jpg 2>/dev/null
  ```

  Las variantes de 480px deben ser notablemente más pequeñas que el original.

- [ ] **Paso 5: Envolver servicio-01.avif en `<picture>` en `index.html`**

  Antes:
  ```html
  <img src="assets/img/servicio-01.avif"
    alt="Moto acuática Sea-Doo en Mallorca" loading="lazy"
    width="1920" height="1483" class="feature-grid__img">
  ```
  Después (con ffmpeg/AVIF):
  ```html
  <picture>
    <source
      srcset="assets/img/servicio-01-480.avif 480w,
              assets/img/servicio-01-800.avif 800w,
              assets/img/servicio-01.avif 1920w"
      sizes="(max-width: 576px) 480px, (max-width: 992px) 800px, 1920px"
      type="image/avif">
    <img src="assets/img/servicio-01.avif"
      alt="Moto acuática Sea-Doo en Mallorca" loading="lazy"
      width="1920" height="1483" class="feature-grid__img">
  </picture>
  ```

- [ ] **Paso 6: Envolver servicio-02-new.jpg en `<picture>`**

  Antes:
  ```html
  <img src="assets/img/servicio-02-new.jpg"
    alt="Moto acuática navegando en el Mediterráneo" loading="lazy"
    width="800" height="533" class="feature-grid__img">
  ```
  Después:
  ```html
  <picture>
    <source
      srcset="assets/img/servicio-02-new-480.jpg 480w,
              assets/img/servicio-02-new.jpg 800w"
      sizes="(max-width: 576px) 480px, 800px"
      type="image/jpeg">
    <img src="assets/img/servicio-02-new.jpg"
      alt="Moto acuática navegando en el Mediterráneo" loading="lazy"
      width="800" height="533" class="feature-grid__img">
  </picture>
  ```

- [ ] **Paso 7: Envolver servicio-03.avif y servicio-04.avif en `<picture>`**

  servicio-03.avif:
  ```html
  <picture>
    <source
      srcset="assets/img/servicio-03-480.avif 480w,
              assets/img/servicio-03-800.avif 800w,
              assets/img/servicio-03.avif 1920w"
      sizes="(max-width: 576px) 480px, (max-width: 992px) 800px, 1920px"
      type="image/avif">
    <img src="assets/img/servicio-03.avif"
      alt="Sea-Doo en el Mediterráneo Mallorca" loading="lazy"
      width="1920" height="1483" class="feature-grid__img">
  </picture>
  ```

  servicio-04.avif:
  ```html
  <picture>
    <source
      srcset="assets/img/servicio-04-480.avif 480w,
              assets/img/servicio-04.avif 1100w"
      sizes="(max-width: 576px) 480px, 1100px"
      type="image/avif">
    <img src="assets/img/servicio-04.avif"
      alt="Experiencia moto acuática Mallorca" loading="lazy"
      width="1100" height="619" class="feature-grid__img">
  </picture>
  ```

- [ ] **Paso 8: Envolver jetski_seadoo.webp en `<picture>`**

  ```html
  <picture>
    <source
      srcset="assets/img/jetski_seadoo-480.webp 480w,
              assets/img/jetski_seadoo-800.webp 800w,
              assets/img/jetski_seadoo.webp 1280w"
      sizes="(max-width: 576px) 480px, (max-width: 992px) 800px, 1280px"
      type="image/webp">
    <img src="assets/img/jetski_seadoo.webp"
      alt="Sea-Doo jet ski vista lateral, Cala Millor" loading="lazy"
      width="1280" height="960"
      class="fleet-photo fleet-photo--top rounded-4 shadow-lg">
  </picture>
  ```

- [ ] **Paso 9: Envolver fleet-01.avif en `<picture>`**

  ```html
  <picture>
    <source
      srcset="assets/img/fleet-01-400.avif 400w,
              assets/img/fleet-01.avif 661w"
      sizes="(max-width: 576px) 400px, 661px"
      type="image/avif">
    <img src="assets/img/fleet-01.avif"
      alt="Sea-Doo jet ski vista frontal, Mallorca" loading="lazy"
      width="661" height="480"
      class="fleet-photo fleet-photo--bottom rounded-4 shadow-lg">
  </picture>
  ```

- [ ] **Paso 10: Verificar en el navegador que las imágenes se ven correctamente**

  Abrir http://localhost:8080. Las secciones "Nuestro servicio" y "Nuestra flota" deben verse idénticas a antes.

  En Chrome DevTools → Network → filtrar por `Img`:
  - Reducir la ventana a ~375px de ancho
  - Las imágenes `servicio-*` deben cargar la variante `-480` y no el original

- [ ] **Paso 11: Añadir al `.htaccess` los tipos MIME y cache de AVIF si no están**

  Verificar si `.htaccess` incluye AVIF en las reglas de cache:
  ```bash
  grep -i avif .htaccess
  ```
  Si no aparece, añadir al bloque `mod_expires`:
  ```apache
  ExpiresByType image/avif "access plus 6 months"
  ```

- [ ] **Paso 12: Commit**

  ```bash
  git add index.html assets/img/servicio-01-480.avif assets/img/servicio-01-800.avif \
          assets/img/servicio-02-new-480.jpg assets/img/servicio-03-480.avif \
          assets/img/servicio-03-800.avif assets/img/servicio-04-480.avif \
          assets/img/jetski_seadoo-480.webp assets/img/jetski_seadoo-800.webp \
          assets/img/fleet-01-400.avif .htaccess
  git commit -m "perf(images): add picture/srcset responsive variants for above-fold images"
  ```
  *(Ajustar la lista de `git add` si se usó la opción B con `.jpg`)*

---

## Criterios de aceptación globales

- [ ] Ninguna sección de la homepage ha cambiado visualmente
- [ ] `xmllint --noout sitemap.xml` no da errores
- [ ] `grep -c "hreflang" index.html` devuelve `2`
- [ ] JSON-LD contiene `"TouristAttraction"` en el array `@type`
- [ ] En Chrome DevTools → Performance, el CLS de la homepage es < 0.1
- [ ] En Chrome DevTools → Network (móvil simulado), las imágenes de servicio y flota cargan variantes pequeñas
