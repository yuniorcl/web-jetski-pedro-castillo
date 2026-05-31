# Eleventy Setup + Homepage Migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrar el sitio HTML estático a Eleventy con plantillas Nunjucks sin ningún cambio visual ni funcional, y actualizar el workflow de GitHub Actions para compilar antes de desplegar por FTP.

**Architecture:** Eleventy lee `src/` como input, genera `_site/` como output. El `index.html` actual se descompone en 4 parciales (`base.njk`, `head.njk`, `header.njk`, `footer.njk`) y una página (`index.njk`). Las páginas legales usan un layout simplificado `legal.njk`. El workflow de CI/CD añade `npm ci && npm run build` antes del FTP deploy y sube `_site/` en vez del root.

**Tech Stack:** Eleventy 3.x · Nunjucks · Node.js 24 · GitHub Actions FTP Deploy

**Rama de trabajo:** `feature/arquitectura-multipagina`

---

## Mapa de archivos

| Acción | Origen | Destino |
|---|---|---|
| Crear | — | `.gitignore` |
| Crear | — | `package.json` |
| Crear | — | `.eleventy.js` |
| Crear | — | `src/_includes/base.njk` |
| Crear | — | `src/_includes/legal.njk` |
| Extraer de `index.html` (líneas 4–226) | `index.html` | `src/_includes/head.njk` |
| Extraer de `index.html` (líneas 231–270) | `index.html` | `src/_includes/header.njk` |
| Extraer de `index.html` (líneas 782–921) | `index.html` | `src/_includes/footer.njk` |
| Extraer de `index.html` (líneas 274–779) | `index.html` | `src/index.njk` |
| Migrar | `legal/aviso-legal.html` | `src/legal/aviso-legal.njk` |
| Migrar | `legal/politica-privacidad.html` | `src/legal/politica-privacidad.njk` |
| Mover | `assets/` | `src/assets/` |
| Mover | `config.js` | `src/config.js` |
| Mover | `robots.txt` | `src/robots.txt` |
| Mover | `sitemap.xml` | `src/sitemap.xml` |
| Mover | `favicon.ico` | `src/favicon.ico` |
| Mover | `.htaccess` | `src/.htaccess` |
| Eliminar | `index.html` | — |
| Eliminar | `legal/` (directorio) | — |
| Modificar | `.github/workflows/deploy.yml` | `.github/workflows/deploy.yml` |

---

## Task 1: Añadir `.gitignore`

**Archivos:**
- Crear: `.gitignore`

- [ ] **Paso 1: Crear `.gitignore` en el root del proyecto**

  Contenido exacto:
  ```
  _site/
  node_modules/
  ```

- [ ] **Paso 2: Verificar que no hay nada ya en `.gitignore`**
  ```bash
  cat .gitignore
  ```
  Debe mostrar las 2 líneas anteriores.

- [ ] **Paso 3: Commit**
  ```bash
  git add .gitignore
  git commit -m "$(cat <<'EOF'
  chore: add .gitignore for Eleventy output and node_modules

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 2: Añadir `package.json` e instalar Eleventy

**Archivos:**
- Crear: `package.json`
- Crear: `package-lock.json` (generado por npm)

- [ ] **Paso 1: Crear `package.json`**

  ```bash
  cat > package.json << 'EOF'
  {
    "name": "jetexperience-baleares",
    "version": "1.0.0",
    "private": true,
    "scripts": {
      "build": "eleventy",
      "dev": "eleventy --serve"
    },
    "devDependencies": {
      "@11ty/eleventy": "^3.0.0"
    }
  }
  EOF
  ```

- [ ] **Paso 2: Instalar Eleventy**
  ```bash
  npm install
  ```
  Debe crear `node_modules/` y `package-lock.json`. Ignorar warnings de npm sobre `email` y `always-auth` — son inofensivos.

- [ ] **Paso 3: Verificar que Eleventy está instalado**
  ```bash
  npx eleventy --version
  ```
  Debe mostrar algo como `3.x.x`.

- [ ] **Paso 4: Commit**
  ```bash
  git add package.json package-lock.json
  git commit -m "$(cat <<'EOF'
  chore: add package.json and install Eleventy 3.x

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 3: Añadir `.eleventy.js`

**Archivos:**
- Crear: `.eleventy.js`

- [ ] **Paso 1: Crear `.eleventy.js` en el root del proyecto**

  ```js
  module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/config.js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/sitemap.xml");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");
    eleventyConfig.addPassthroughCopy("src/.htaccess");

    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes"
      }
    };
  };
  ```

- [ ] **Paso 2: Verificar sintaxis JS**
  ```bash
  node -e "require('./.eleventy.js')({addPassthroughCopy:()=>{}})" && echo "OK"
  ```
  Debe imprimir `OK`.

- [ ] **Paso 3: Commit**
  ```bash
  git add .eleventy.js
  git commit -m "$(cat <<'EOF'
  feat(eleventy): add .eleventy.js with passthrough copy and src/output dirs

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 4: Crear layouts base — `base.njk` y `legal.njk`

**Archivos:**
- Crear: `src/_includes/base.njk`
- Crear: `src/_includes/legal.njk`

- [ ] **Paso 1: Crear el directorio de includes**
  ```bash
  mkdir -p src/_includes
  ```

- [ ] **Paso 2: Crear `src/_includes/base.njk`**

  Este es el layout que hereda la homepage y las futuras páginas. El `{{ content | safe }}` es donde Eleventy inyecta el contenido de cada página.

  ```njk
  <!DOCTYPE html>
  <html lang="{{ lang | default('es') }}">
  <head>
    {% include "head.njk" %}
  </head>
  <body>
    {% include "header.njk" %}
    <main id="main-content">
      {{ content | safe }}
    </main>
    {% include "footer.njk" %}
  </body>
  </html>
  ```

- [ ] **Paso 3: Crear `src/_includes/legal.njk`**

  Layout simplificado para páginas legales. Sin GA4, sin schema, sin OG — son páginas noindex.
  La ruta del CSS usa `/assets/css/styles.css` (absoluta, funciona desde cualquier ruta).

  ```njk
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <title>{{ title }} | JetExperience Baleares</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/styles.css">
    <style>body{padding-top:80px} .legal-body{max-width:800px;margin:0 auto;padding:40px 20px}</style>
  </head>
  <body>
    {{ content | safe }}
  </body>
  </html>
  ```

- [ ] **Paso 4: Verificar que los archivos existen**
  ```bash
  ls src/_includes/
  ```
  Debe mostrar `base.njk` y `legal.njk`.

- [ ] **Paso 5: Commit**
  ```bash
  git add src/_includes/base.njk src/_includes/legal.njk
  git commit -m "$(cat <<'EOF'
  feat(eleventy): add base and legal layout templates

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 5: Crear `src/_includes/head.njk`

**Archivos:**
- Crear: `src/_includes/head.njk`

**Qué contiene:** todo el interior del `<head>` de `index.html` (desde `<meta charset>` hasta justo antes de `</head>`). Esto incluye GA4, title, description, canonical, hreflang, OG, Twitter Cards, Bootstrap CSS, Google Fonts, favicons, preload del hero y el Schema JSON-LD.

**Punto crítico:** el bloque `<script type="application/ld+json">` contiene JSON con llaves `{` y `}`. Para que Nunjucks no intente interpretarlas como variables, el bloque JSON-LD debe ir envuelto en `{% raw %}...{% endraw %}`.

- [ ] **Paso 1: Extraer el contenido del `<head>` de `index.html`**

  Leer `index.html` y copiar exactamente el contenido entre `<head>` y `</head>` (sin incluir las etiquetas `<head>` y `</head>` en sí). El contenido va desde la línea 4 hasta la línea 226.

- [ ] **Paso 2: Crear `src/_includes/head.njk` con el contenido extraído**

  Proceso exacto:

  a) Leer `index.html` y localizar la línea `<head>` y la línea `</head>`.

  b) Copiar TODO el contenido entre esas dos líneas (sin incluir `<head>` ni `</head>`).

  c) Dentro de ese contenido, localizar el bloque:
  ```html
  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  ```
  y el correspondiente `</script>` que lo cierra.

  d) Envolver **solo ese bloque** `<script type="application/ld+json">...</script>` (incluyendo el comentario `<!-- Schema.org JSON-LD -->`) con `{% raw %}` antes y `{% endraw %}` después:

  ```njk
  {% raw %}
  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  { ... todo el JSON ... }
  </script>
  {% endraw %}
  ```

  e) El resto del contenido del `<head>` (meta tags, GA4, title, description, canonical, hreflang, OG, Twitter, Bootstrap CSS, Google Fonts, favicons, preload) se copia **tal cual**, sin modificar nada.

  f) Guardar como `src/_includes/head.njk`.

  **Importante:** solo el bloque `<script type="application/ld+json">` va dentro de `{% raw %}...{% endraw %}`. El resto del head se copia tal cual.

- [ ] **Paso 3: Verificar que `{% raw %}` y `{% endraw %}` están presentes**
  ```bash
  grep -c "raw\|endraw" src/_includes/head.njk
  ```
  Debe devolver `2`.

- [ ] **Paso 4: Verificar que el JSON-LD está intacto dentro del raw block**
  ```bash
  grep "TouristAttraction\|LocalBusiness\|FAQPage" src/_includes/head.njk
  ```
  Debe mostrar las líneas del JSON-LD con esos valores.

- [ ] **Paso 5: Commit**
  ```bash
  git add src/_includes/head.njk
  git commit -m "$(cat <<'EOF'
  feat(eleventy): add head partial with SEO meta, schema and GA4

  Wraps JSON-LD block in raw/endraw to prevent Nunjucks from parsing braces.

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 6: Crear `src/_includes/header.njk`

**Archivos:**
- Crear: `src/_includes/header.njk`

**Qué contiene:** el bloque `<header id="site-header" class="site-header">...</header>` de `index.html` (líneas 231–270). Incluye el logo, la navegación con anchors hacia las secciones y el switcher de idioma ES|EN.

- [ ] **Paso 1: Extraer el `<header>` de `index.html`**

  Localizar el bloque que empieza en `<header id="site-header"` y termina en `</header>` (antes de `<main id="main-content">`). Copiarlo completo.

- [ ] **Paso 2: Crear `src/_includes/header.njk` con ese contenido**

  El archivo debe empezar con `<header id="site-header"` y terminar con `</header>`. Sin `<!DOCTYPE>`, sin `<html>`, sin `<body>`.

- [ ] **Paso 3: Verificar que el switcher de idioma está presente**
  ```bash
  grep "lang-switcher\|lang-btn" src/_includes/header.njk
  ```
  Debe mostrar las líneas del switcher ES|EN.

- [ ] **Paso 4: Commit**
  ```bash
  git add src/_includes/header.njk
  git commit -m "$(cat <<'EOF'
  feat(eleventy): add header partial with nav and language switcher

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 7: Crear `src/_includes/footer.njk`

**Archivos:**
- Crear: `src/_includes/footer.njk`

**Qué contiene:** todo lo que va **después** de `</main>` en `index.html` hasta justo antes de `</body>` (líneas 782–921). Esto incluye:
- `<section class="cta-final">` (CTA de reserva)
- `<section id="resenas">` (reseñas + QR de Google)
- `<footer class="site-footer-bottom">` (links, contacto, redes)
- `<a class="whatsapp-float">` (botón flotante)
- Scripts: Bootstrap JS, `config.js`, `main.js`

- [ ] **Paso 1: Extraer el bloque post-main de `index.html`**

  Localizar la línea `</main>` en `index.html`. Todo lo que viene después, hasta (pero sin incluir) `</body>` y `</html>`, va en este parcial.

- [ ] **Paso 2: Crear `src/_includes/footer.njk` con ese contenido**

  El archivo debe empezar con `<section class="cta-final">` y terminar con la etiqueta `</script>` del `main.js`. Sin `</body>` ni `</html>` (esos están en `base.njk`).

- [ ] **Paso 3: Verificar que los scripts están presentes**
  ```bash
  grep "bootstrap.bundle\|config.js\|main.js" src/_includes/footer.njk
  ```
  Debe mostrar las 3 líneas de scripts.

- [ ] **Paso 4: Verificar que el botón WhatsApp flotante está presente**
  ```bash
  grep "whatsapp-float" src/_includes/footer.njk
  ```
  Debe mostrar la línea del botón.

- [ ] **Paso 5: Commit**
  ```bash
  git add src/_includes/footer.njk
  git commit -m "$(cat <<'EOF'
  feat(eleventy): add footer partial with CTA, reviews, footer and scripts

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 8: Crear `src/index.njk` — migrar la homepage

**Archivos:**
- Crear: `src/index.njk`

**Qué contiene:** el frontmatter de Eleventy + el contenido que está **dentro** de `<main id="main-content">...</main>` en `index.html` (líneas 274–779), sin incluir las etiquetas `<main>` ni `</main>` (esas están en `base.njk`).

Las secciones que van aquí son: hero, servicio, experiencias, características, flota, proceso, FAQ, galería y contacto.

- [ ] **Paso 1: Extraer el contenido interior del `<main>` de `index.html`**

  Localizar `<main id="main-content">` y `</main>`. Copiar todo lo que hay **entre** esas dos etiquetas.

- [ ] **Paso 2: Crear `src/index.njk` con frontmatter + contenido**

  ```njk
  ---
  layout: base.njk
  ---
  [contenido interior del main extraído en el paso anterior]
  ```

  El frontmatter (`---`) le dice a Eleventy que use `base.njk` como layout. El resto es el HTML de las secciones tal cual.

- [ ] **Paso 3: Verificar que el frontmatter es correcto**
  ```bash
  head -3 src/index.njk
  ```
  Debe mostrar:
  ```
  ---
  layout: base.njk
  ---
  ```

- [ ] **Paso 4: Verificar que las secciones principales están presentes**
  ```bash
  grep 'id="hero"\|id="experiencias"\|id="galeria"\|id="contacto"\|id="faq"' src/index.njk
  ```
  Debe devolver las 5 líneas.

- [ ] **Paso 5: Commit**
  ```bash
  git add src/index.njk
  git commit -m "$(cat <<'EOF'
  feat(eleventy): migrate homepage to src/index.njk Nunjucks template

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 9: Migrar páginas legales

**Archivos:**
- Crear: `src/legal/aviso-legal.njk`
- Crear: `src/legal/politica-privacidad.njk`

**Nota importante:** Las páginas legales actuales tienen el link `href="../index.html"` para volver al inicio y la ruta CSS `../assets/css/styles.css`. En la versión Eleventy esto cambia porque el layout `legal.njk` ya incluye el CSS con ruta absoluta, y el link de vuelta debe apuntar a `/`.

- [ ] **Paso 1: Crear el directorio**
  ```bash
  mkdir -p src/legal
  ```

- [ ] **Paso 2: Crear `src/legal/aviso-legal.njk`**

  Frontmatter + contenido del `<body>` de `legal/aviso-legal.html`, cambiando el link de vuelta:

  ```njk
  ---
  layout: legal.njk
  title: Aviso Legal
  ---
  <div class="legal-body">
    <a href="/" style="color:var(--color-ocean);font-family:var(--font-title);font-weight:700;text-decoration:none;">← Volver al inicio</a>
    <h1 class="mt-4 mb-4" style="font-family:var(--font-title);font-weight:800;color:var(--color-dark)">Aviso Legal</h1>
    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa:</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Titular del sitio web</h2>
    <p><strong>Nombre comercial:</strong> JetExperience Baleares<br>
    <strong>Actividad:</strong> Alquiler de motos de agua y actividades náuticas<br>
    <strong>Localización:</strong> Cala Millor, Mallorca, Islas Baleares, España<br>
    <strong>Email:</strong> info@jetexperiencemallorca.com</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Objeto y ámbito de aplicación</h2>
    <p>El presente aviso legal regula el uso del sitio web mallorcajetski.com. El acceso y uso del sitio implica la aceptación plena de las condiciones aquí expuestas.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Propiedad intelectual</h2>
    <p>Todos los contenidos del sitio web (textos, imágenes, diseño, código fuente) son propiedad de JetExperience Baleares o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.</p>
    <p class="mt-5 text-muted" style="font-size:0.85rem">Última actualización: mayo 2025</p>
  </div>
  ```

- [ ] **Paso 3: Crear `src/legal/politica-privacidad.njk`**

  ```njk
  ---
  layout: legal.njk
  title: Política de Privacidad
  ---
  <div class="legal-body">
    <a href="/" style="color:var(--color-ocean);font-family:var(--font-title);font-weight:700;text-decoration:none;">← Volver al inicio</a>
    <h1 class="mt-4 mb-4" style="font-family:var(--font-title);font-weight:800;color:var(--color-dark)">Política de Privacidad</h1>
    <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos, se informa sobre el tratamiento de datos personales.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Responsable del tratamiento</h2>
    <p>JetExperience Baleares — info@jetexperiencemallorca.com — Cala Millor, Mallorca.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Finalidad y base legal</h2>
    <p>Los datos recogidos mediante el formulario de contacto se tratan para gestionar consultas y reservas. La base legal es el interés legítimo y el consentimiento del usuario.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Conservación de datos</h2>
    <p>Los datos se conservan durante el tiempo necesario para gestionar la solicitud y por los plazos legales aplicables.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Derechos del usuario</h2>
    <p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición y portabilidad enviando un email a info@jetexperiencemallorca.com.</p>
    <h2 style="font-family:var(--font-title);font-weight:700;color:var(--color-dark);font-size:1.2rem;margin-top:2rem">Cookies</h2>
    <p>Este sitio no utiliza cookies de seguimiento ni analítica de terceros. Las preferencias de idioma se guardan en localStorage del navegador.</p>
    <p class="mt-5 text-muted" style="font-size:0.85rem">Última actualización: mayo 2025</p>
  </div>
  ```

- [ ] **Paso 4: Verificar que ambos archivos tienen el layout correcto**
  ```bash
  head -3 src/legal/aviso-legal.njk
  head -3 src/legal/politica-privacidad.njk
  ```
  Ambos deben mostrar `layout: legal.njk` en la segunda línea.

- [ ] **Paso 5: Commit**
  ```bash
  git add src/legal/
  git commit -m "$(cat <<'EOF'
  feat(eleventy): migrate legal pages to src/legal/ with legal.njk layout

  Updates back-link from ../index.html to / and uses absolute CSS path.

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 10: Mover archivos estáticos a `src/` y eliminar originales del root

**Archivos:**
- Mover: `assets/` → `src/assets/`
- Mover: `config.js` → `src/config.js`
- Mover: `robots.txt` → `src/robots.txt`
- Mover: `sitemap.xml` → `src/sitemap.xml`
- Mover: `favicon.ico` → `src/favicon.ico`
- Mover: `.htaccess` → `src/.htaccess`
- Eliminar: `index.html` (reemplazado por `src/index.njk`)
- Eliminar: `legal/` (reemplazado por `src/legal/`)

- [ ] **Paso 1: Mover assets y archivos estáticos**
  ```bash
  git mv assets src/assets
  git mv config.js src/config.js
  git mv robots.txt src/robots.txt
  git mv sitemap.xml src/sitemap.xml
  git mv favicon.ico src/favicon.ico
  ```

- [ ] **Paso 2: Mover `.htaccess` (archivo oculto — git mv funciona igual)**
  ```bash
  git mv .htaccess src/.htaccess
  ```

- [ ] **Paso 3: Eliminar `index.html` del root**
  ```bash
  git rm index.html
  ```

- [ ] **Paso 4: Eliminar el directorio `legal/` del root**
  ```bash
  git rm -r legal/
  ```

- [ ] **Paso 5: Verificar el estado del staging**
  ```bash
  git status
  ```
  Deben aparecer los movimientos y eliminaciones staged. No deben quedar archivos `index.html` ni `legal/` en el root.

- [ ] **Paso 6: Verificar que `src/` tiene todos los archivos necesarios**
  ```bash
  ls src/
  ls src/assets/
  ```
  `src/` debe contener: `_includes/`, `assets/`, `legal/`, `index.njk`, `config.js`, `robots.txt`, `sitemap.xml`, `favicon.ico`, `.htaccess`.

- [ ] **Paso 7: Commit**
  ```bash
  git commit -m "$(cat <<'EOF'
  chore: move all static assets and source files to src/

  Moves assets/, config.js, robots.txt, sitemap.xml, favicon.ico and
  .htaccess to src/ as required by Eleventy input directory config.
  Removes root index.html and legal/ now replaced by Nunjucks templates.

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Task 11: Primer build y verificación local

**Archivos:**
- Genera: `_site/` (no se commitea)

- [ ] **Paso 1: Ejecutar el build**
  ```bash
  npm run build
  ```
  Debe completar sin errores. Output esperado similar a:
  ```
  [11ty] Writing _site/index.html from ./src/index.njk
  [11ty] Writing _site/legal/aviso-legal/index.html from ./src/legal/aviso-legal.njk
  [11ty] Writing _site/legal/politica-privacidad/index.html from ./src/legal/politica-privacidad.njk
  [11ty] Copied 6 files / Wrote 3 files in X.XXs
  ```

- [ ] **Paso 2: Verificar que `_site/` contiene los archivos esperados**
  ```bash
  find _site -name "*.html" | sort
  ls _site/assets/
  ls _site/
  ```
  Debe aparecer: `_site/index.html`, `_site/legal/aviso-legal/index.html`, `_site/legal/politica-privacidad/index.html`, `_site/assets/`, `_site/config.js`, `_site/robots.txt`, `_site/sitemap.xml`, `_site/favicon.ico`, `_site/.htaccess`.

- [ ] **Paso 3: Verificar que el JSON-LD no tiene llaves escapadas**
  ```bash
  python3 -c "
  import re, json
  html = open('_site/index.html').read()
  match = re.search(r'<script type=\"application/ld\+json\">(.*?)</script>', html, re.DOTALL)
  json.loads(match.group(1))
  print('JSON-LD válido en _site/index.html')
  "
  ```
  Debe imprimir `JSON-LD válido en _site/index.html`.

- [ ] **Paso 4: Verificar que los hreflang están presentes**
  ```bash
  grep "hreflang" _site/index.html
  ```
  Debe mostrar las líneas de hreflang.

- [ ] **Paso 5: Verificar estructura del HTML generado**
  ```bash
  # Verificar que _site/index.html tiene los elementos clave
  grep -c "hero-section\|exp-card\|gallery-grid\|faqAccordion\|contact-form" _site/index.html

  # Verificar que _site/index.html tiene head y body completos
  grep -c "<html\|<head\|<body\|</html>" _site/index.html

  # Verificar que las páginas legales tienen el link de vuelta correcto
  grep "Volver al inicio" _site/legal/aviso-legal/index.html
  ```
  El primer comando debe devolver `5`. El segundo debe devolver `4`. El tercero debe mostrar el link con `href="/"`.

  **Nota para el usuario:** después de este task, levantar `npm run dev` y verificar visualmente en http://localhost:8080 antes de continuar.

- [ ] **Paso 6: Verificar que `_site/` no está en git**
  ```bash
  git status
  ```
  `_site/` no debe aparecer como untracked (está en `.gitignore`).

---

## Task 12: Actualizar `deploy.yml` y commit final

**Archivos:**
- Modificar: `.github/workflows/deploy.yml`

- [ ] **Paso 1: Reemplazar el contenido de `.github/workflows/deploy.yml`**

  Contenido exacto del archivo actualizado:

  ```yaml
  name: Deploy to FTP

  on:
    pull_request:
      types:
        - closed
      branches:
        - main

  env:
    FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

  jobs:
    deploy:
      if: github.event.pull_request.merged == true
      runs-on: ubuntu-latest

      steps:
        - name: Checkout
          uses: actions/checkout@v4

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: '24'
            cache: 'npm'

        - name: Install & Build
          run: npm ci && npm run build

        - name: Deploy via FTP
          uses: SamKirkland/FTP-Deploy-Action@v4.3.5
          with:
            server: ${{ secrets.FTP_SERVER }}
            username: ${{ secrets.FTP_USERNAME }}
            password: ${{ secrets.FTP_PASSWORD }}
            local-dir: ./_site/
            server-dir: /jetexperiencemallorca.com/public_html/
  ```

  **Diferencias respecto al original:**
  - Añadido paso `Setup Node.js` con Node 24 y caché de npm
  - Añadido paso `Install & Build` que ejecuta `npm ci && npm run build`
  - `local-dir: ./_site/` (antes subía el root completo)
  - Eliminado el bloque `exclude:` (ya no necesario — `_site/` solo contiene output limpio)

- [ ] **Paso 2: Verificar que el YAML es válido**
  ```bash
  python3 -c "import yaml; yaml.safe_load(open('.github/workflows/deploy.yml')); print('YAML válido')" 2>/dev/null || \
  python3 -c "
  import sys
  try:
      import yaml
      yaml.safe_load(open('.github/workflows/deploy.yml'))
      print('YAML válido')
  except ImportError:
      print('PyYAML no instalado — verificar manualmente')
  except Exception as e:
      print(f'Error: {e}')
      sys.exit(1)
  "
  ```

- [ ] **Paso 3: Verificar que `local-dir` está en el workflow y `exclude` no**
  ```bash
  grep "local-dir\|exclude" .github/workflows/deploy.yml
  ```
  Solo debe aparecer `local-dir: ./_site/`. No debe aparecer `exclude`.

- [ ] **Paso 4: Commit**
  ```bash
  git add .github/workflows/deploy.yml
  git commit -m "$(cat <<'EOF'
  ci: update deploy workflow to build with Eleventy before FTP upload

  Adds Node.js setup and npm ci && npm run build steps. Changes FTP
  source from repo root to _site/ (Eleventy output directory).
  Removes exclude patterns — no longer needed with _site/ as source.

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  EOF
  )"
  ```

---

## Criterios de aceptación globales

- [ ] `npm run build` completa sin errores
- [ ] `_site/index.html` existe y contiene JSON-LD válido
- [ ] `_site/legal/aviso-legal/index.html` existe
- [ ] `_site/legal/politica-privacidad/index.html` existe
- [ ] `_site/assets/` contiene CSS, JS, imágenes e i18n
- [ ] `_site/.htaccess` existe
- [ ] `npm run dev` sirve la homepage visualmente idéntica al original en http://localhost:8080
- [ ] Switcher ES|EN funciona en el navegador
- [ ] Botón WhatsApp flotante visible y funcional
- [ ] Links del footer a páginas legales funcionan
- [ ] `node_modules/` y `_site/` están en `.gitignore` y no aparecen en `git status`
- [ ] `.github/workflows/deploy.yml` tiene `local-dir: ./_site/` y los 2 pasos nuevos
