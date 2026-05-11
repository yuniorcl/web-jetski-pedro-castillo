# JetExperience Baleares — Ajustes de marca y contenido — 2026-05-11

**Objetivo:** Actualizar datos de contacto, identidad de marca, contenido de secciones y assets visuales para reflejar el nuevo nombre comercial y la oferta real de servicios.

---

## Cambios realizados

### 1. Datos de contacto (`config.js`)
- Teléfono actualizado: `695259136` → `618842509` (también en `phoneDisplay` y enlace WhatsApp).
- Email actualizado: `info@mallorcajetski.com` → `info@jetexperiencemallorca.com`.

### 2. Formulario de contacto (`index.html`)
- Eliminado campo **Teléfono** del formulario (redundante con el canal WhatsApp). El campo Fecha ahora ocupa el ancho completo.
- Desplegable de experiencias reducido a dos opciones: **Ruta Básica** y **Excursión Privada** (eliminadas Ruta Clásica y Ruta Atardecer).

### 3. Sección Tarifas — Elige tu experiencia (`index.html`)
- Eliminadas tarjetas **Ruta Básica (30 min)** y **Ruta Atardecer (90 min)**.
- Quedan dos tarjetas: **Popular (Ruta Clásica)** y **Excursión Privada**.
- Precio de la Popular actualizado: `100€` → `140€` (en `index.html`, `es.json` y `en.json`).

### 4. Sección Servicios incluidos (`index.html`)
- Eliminado el punto: *Monitor profesional durante toda la ruta*.

### 5. Estructura de secciones (`index.html`)
- Eliminada sección **¿Por qué nosotros?** (`#ventajas`).
- Sección **Opiniones** (`#resenas`) movida: de su posición anterior (entre Tarifas y Proceso) a después del bloque CTA final *¿Listo para la aventura?*, justo antes del footer.

### 6. Identidad de marca — renombrado completo
- Nombre comercial: `Mallorca JetSki` → `JetExperience Baleares` en todos los archivos:
  - `index.html` (title, og:title, schema.org, footer copyright)
  - `assets/i18n/es.json` y `en.json` (footer.copyright)
  - `legal/aviso-legal.html`
  - `legal/politica-privacidad.html`

### 7. Logo y favicon (`assets/img/`)
- Añadido logo oficial circular: `assets/img/logo.jpeg`.
- Generados: `assets/img/favicon.ico` (32×32) y `assets/img/apple-touch-icon.png` (180×180).
- Navbar: sustituido logo de texto por imagen circular 54×54 px.
- Footer: logo imagen circular 160×160 px.
- Añadidos `<link rel="icon">` y `<link rel="apple-touch-icon">` en el `<head>`.

---

## Archivos modificados

| Archivo | Tipo de cambio |
|---------|---------------|
| `config.js` | Teléfono y email actualizados |
| `index.html` | Formulario, tarifas, secciones, logo, favicon, marca |
| `assets/i18n/es.json` | Precio Popular, copyright |
| `assets/i18n/en.json` | Precio Popular, copyright |
| `legal/aviso-legal.html` | Nombre comercial y email |
| `legal/politica-privacidad.html` | Nombre comercial y email |
| `assets/img/logo.jpeg` | Nuevo — logo oficial |
| `assets/img/favicon.ico` | Nuevo — favicon generado desde logo |
| `assets/img/apple-touch-icon.png` | Nuevo — icono iOS generado desde logo |
