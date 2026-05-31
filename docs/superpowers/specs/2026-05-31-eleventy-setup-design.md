# Spec: Setup Eleventy + Migración Homepage
**Fecha:** 2026-05-31
**Rama:** `feature/arquitectura-multipagina`
**Fase:** 1 de 4 — Infraestructura base

---

## Objetivo

Migrar el sitio web estático actual (un único `index.html`) a una arquitectura Eleventy con plantillas Nunjucks, sin ningún cambio visual ni funcional para el usuario final. El resultado es idéntico al sitio actual pero generado por Eleventy, listo para añadir nuevas páginas en fases posteriores.

## Principios

- **Cero cambios visuales:** el usuario no debe notar ninguna diferencia.
- **Cero cambios funcionales:** i18n JS, botón WhatsApp, formulario, galería y lightbox siguen funcionando igual.
- **Pipeline automático:** merge a `main` → build → FTP deploy, igual que ahora.
- **Sin sobre-ingeniería:** no se añaden plugins, filtros ni funcionalidades de Eleventy que no sean estrictamente necesarias para esta fase.

---

## Stack

- **Eleventy 3.x** (generador estático)
- **Nunjucks** (motor de plantillas — `.njk`)
- **Node.js 24 / npm** (ya instalado en el entorno del desarrollador y disponible en GitHub Actions)
- **FTP Deploy Action** (sin cambios de credenciales ni servidor)

---

## Estructura de directorios

### Antes
```
/
├── index.html
├── assets/css/styles.css
├── assets/img/
├── assets/js/main.js
├── assets/i18n/es.json
├── assets/i18n/en.json
├── assets/qr/
├── legal/aviso-legal.html
├── legal/politica-privacidad.html
├── config.js
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── .htaccess
└── .github/workflows/deploy.yml
```

### Después
```
/
├── src/
│   ├── _includes/
│   │   ├── base.njk
│   │   ├── head.njk
│   │   ├── header.njk
│   │   └── footer.njk
│   ├── assets/              ← idéntico al /assets actual
│   │   ├── css/styles.css
│   │   ├── img/
│   │   ├── js/main.js
│   │   ├── i18n/es.json
│   │   ├── i18n/en.json
│   │   └── qr/
│   ├── legal/
│   │   ├── aviso-legal.njk
│   │   └── politica-privacidad.njk
│   ├── index.njk
│   ├── config.js
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.ico
│   └── .htaccess
├── _site/                   ← generado por Eleventy (en .gitignore)
├── .eleventy.js
├── .gitignore
├── package.json
├── package-lock.json
└── .github/workflows/deploy.yml
```

**Archivos eliminados del root:**
`index.html`, `assets/`, `legal/`, `config.js`, `robots.txt`, `sitemap.xml`, `favicon.ico`, `.htaccess`
→ todos se mueven a `src/`.

---

## Plantillas

### `src/_includes/base.njk`

Esqueleto HTML completo. Todas las páginas heredan de este layout.

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

### `src/_includes/head.njk`

Contiene exactamente el `<head>` actual de `index.html`:
- `<meta charset>`, `<meta viewport>`, `<meta robots>`, `<meta theme-color>`
- Script GA4 (`async`)
- `<title>` y `<meta name="description">`
- `<link rel="canonical">` y hreflang (`es` + `x-default`)
- Open Graph y Twitter Cards
- Bootstrap Icons (non-blocking preload)
- Bootstrap 5 CSS (CDN con SRI)
- Google Fonts (`preconnect` + `<link>`)
- Favicon + apple-touch-icon
- Preload del hero-1.jpg (LCP)
- `<link rel="stylesheet">` para `assets/css/styles.css`
- Schema JSON-LD (envuelto en `{% raw %}...{% endraw %}` para evitar que Nunjucks interprete las llaves `{}`)

### `src/_includes/header.njk`

Contiene el `<header id="site-header">` actual con:
- Logo
- Nav con anchors (`#hero`, `#experiencias`, `#galeria`, `#contacto`)
- Botón "Reservar ahora"
- Switcher de idioma ES|EN

### `src/_includes/footer.njk`

Contiene desde el `<section class="cta-final">` hasta el final del `<body>`:
- Sección CTA final
- Sección de reseñas
- `<footer class="site-footer-bottom">`
- Botón flotante WhatsApp
- Bootstrap JS (CDN con SRI)
- `<script src="config.js">`
- `<script src="assets/js/main.js">`

### `src/index.njk`

Frontmatter + contenido de `<main>`:

```njk
---
layout: base.njk
---
<!-- Secciones de la homepage: hero, servicio, experiencias,
     características, flota, proceso, faq, galería, contacto -->
```

El contenido es idéntico al bloque `<main id="main-content">` del `index.html` actual, sin `<html>`, `<head>` ni `<body>`.

### `src/legal/aviso-legal.njk` y `src/legal/politica-privacidad.njk`

Mismo patrón: frontmatter con `layout: base.njk` + contenido del `<body>` actual sin el wrapper HTML.

---

## Configuración Eleventy

### `.eleventy.js`

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

### `package.json`

```json
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
```

### `.gitignore`

```
_site/
node_modules/
```

---

## Workflow actualizado

**`.github/workflows/deploy.yml`** — cambios mínimos respecto al actual:

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

**Cambios respecto al actual:**
1. Añadido paso `Setup Node.js`
2. Añadido paso `Install & Build`
3. `local-dir: ./_site/` (antes no existía, subía el root completo)
4. Eliminado el bloque `exclude:` (ya no necesario — `_site/` solo contiene output limpio)

---

## Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Nunjucks interpreta `{` `}` del JSON-LD como variables | Envolver el bloque `<script type="application/ld+json">` en `{% raw %}...{% endraw %}` |
| Rutas de assets rotas después de mover a `src/assets/` | `addPassthroughCopy("src/assets")` copia a `_site/assets/` preservando la ruta |
| Las páginas legales pierden estilos al migrar a plantilla | Usan el mismo `base.njk` que la homepage — mismos CSS y scripts |
| El workflow falla por caché de npm en GitHub Actions | `npm ci` garantiza instalación limpia desde `package-lock.json` |
| `config.js` no se copia a `_site/` | Incluido explícitamente en `addPassthroughCopy` |
| `.htaccess` no se copia (archivos ocultos) | Incluido explícitamente en `addPassthroughCopy` |

---

## Criterios de aceptación

- [ ] `npm run build` completa sin errores y genera `_site/`
- [ ] `npm run dev` levanta el sitio en `localhost:8080` visualmente idéntico al actual
- [ ] `_site/index.html` contiene el Schema JSON-LD válido (sin llaves escapadas)
- [ ] `_site/index.html` contiene los 2 hreflang (`es` y `x-default`)
- [ ] `_site/assets/` existe con CSS, JS, imágenes e i18n intactos
- [ ] `_site/legal/aviso-legal/index.html` existe y renderiza correctamente
- [ ] El conmutador ES|EN funciona en el navegador
- [ ] El botón de WhatsApp flotante funciona
- [ ] El formulario de contacto envía por WhatsApp
- [ ] El workflow de GitHub ejecuta el build y despliega sin errores
- [ ] `node_modules/` y `_site/` no se commitean (están en `.gitignore`)

---

## Orden de commits sugerido

```
1. chore: add .gitignore for _site and node_modules
2. chore: add package.json and install Eleventy
3. feat(eleventy): add .eleventy.js configuration
4. feat(eleventy): create base layout and partials (base, head, header, footer)
5. feat(eleventy): migrate index.html to src/index.njk
6. feat(eleventy): migrate legal pages to src/legal/
7. chore: move assets, config, robots, sitemap to src/
8. ci: update deploy workflow to build with Eleventy before FTP upload
```
