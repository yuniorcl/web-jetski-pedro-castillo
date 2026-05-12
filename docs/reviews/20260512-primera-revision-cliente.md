# Primera revisión del cliente — 12 mayo 2026

**Rama:** `feature/first-review-from-text`  
**Fecha:** 12/05/2026  
**Fuente:** Notas manuscritas del cliente + tarjeta de visita (`reviews/20260512/`)

---

## Sesión 1 — Hero

**Cambios aplicados:**

- Título `<h1>` dividido en dos `<span>` para forzar que "Costa de los Pinos · Cala Millor" aparezca siempre en una sola línea (`white-space: nowrap`).
- Badge de "instructor" eliminado; se mantiene únicamente el badge "Con licencia" / "Licence required".

**Archivos:** `index.html`, `assets/css/styles.css`, `assets/i18n/es.json`, `assets/i18n/en.json`

---

## Sesión 2 — Sección servicio (feature)

**Cambios aplicados:**

- Descripción actualizada: "Disfruta de la libertad del Mar Mediterráneo; sé el protagonista de tu propio viaje."
- Añadido segundo párrafo con el requisito de licencia: "Si cuentas con licencia de navegación o titulación superior, podrás explorar las aguas cristalinas de Mallorca a tu ritmo."
- Imagen de la sección reemplazada por foto libre de derechos (Unsplash) — jet ski en mar abierto (`servicio-02-new.jpg`).

**Archivos:** `index.html`, `assets/i18n/es.json`, `assets/i18n/en.json`, `assets/img/servicio-02-new.jpg`

---

## Sesión 3 — Experiencias / Precios

**Cambios aplicados:**

- Label de sección: "Nuestras rutas" → "Nuestros precios" / "Our prices".
- Precios con duración explícita: Clásica `1h · 140€`, Privada `2h · 200€`.
- Mensaje de WhatsApp de cada tarjeta actualizado para incluir duración y precio (sin prefijo "desde").
- Imágenes de las tarjetas: card 1 ← foto grupal (`galeria-12-new.jpg`), card 2 ← foto acción (`galeria-07-new.jpg`).

**Archivos:** `index.html`, `assets/js/main.js`, `assets/i18n/es.json`, `assets/i18n/en.json`

---

## Sesión 4 — ¿Qué incluye el servicio?

**Cambios aplicados:**

Checklist actualizado según indicaciones del cliente (✅ incluido / ❌ no incluido):

| # | Servicio | Estado |
|---|----------|--------|
| 1 | Entrega y recogida en el lugar acordado | ✅ |
| 2 | Chaleco salvavidas para adultos y niños | ✅ |
| 3 | Kit de snorkel | ✅ |
| 4 | Ancla plegable | ✅ |
| 5 | Gasolina | ❌ |
| 6 | Fianza en el momento de la entrega | ❌ |

**Archivos:** `index.html`, `assets/i18n/es.json`, `assets/i18n/en.json`

---

## Sesión 5 — Flota y FAQs

**Cambios aplicados:**

- Título flota: "Motos Acuáticas en Costa de los Pinos - Cala Millor".
- FAQ 1 (licencia): aclaración explícita de que el conductor debe tener licencia de navegación o titulación superior.
- FAQ 2 (capacidad): aclarado que las motos admiten hasta 3 personas por unidad.

**Archivos:** `index.html`, `assets/i18n/es.json`, `assets/i18n/en.json`

---

## Sesión 6 — Galería

**Cambios aplicados:**

5 imágenes con matrícula visible o posible copyright reemplazadas por fotos libres de derechos (Unsplash):

| Imagen original | Imagen nueva | Uso |
|-----------------|--------------|-----|
| galeria-01 | `galeria-01-new.jpg` | Grid pág. 1 + lightbox (dos personas con chaleco, atardecer) |
| galeria-07 | `galeria-07-new.jpg` | Grid pág. 1 + lightbox (acción, splash) |
| galeria-08 | `galeria-08-new.jpg` | Grid pág. 1 + lightbox (jet ski a velocidad) |
| galeria-11 | `galeria-11-new.jpg` | Grid pág. 2 + lightbox (vista aérea circular, turquesa) |
| galeria-12 | `galeria-12-new.jpg` | Grid pág. 2 + lightbox (corredor amarillo, arcoíris) |

**Archivos:** `index.html`, `assets/img/galeria-*-new.jpg`

---

## Sesión 7 — Contacto

**Cambios aplicados:**

- Dirección actualizada en config, traducciones y HTML (sección contacto + footer):  
  `Avenida del Pinar #43, Costa de los Pinos, Cala Millor`

**Archivos:** `config.js`, `index.html`, `assets/i18n/es.json`, `assets/i18n/en.json`

---

## Sesión 8 — Redes sociales

**Cambios aplicados:**

- Nueva columna "Síguenos" / "Follow us" añadida al footer con enlaces a:
  - Instagram: `@jetexperiencebaleares`
  - Facebook: `@jetexperiencebaleares`
- Grid del footer ampliado de 3 a 4 columnas para integrar la nueva columna sin romper estructura.
- Estilos `.social-link` añadidos al CSS.

**Archivos:** `index.html`, `assets/css/styles.css`, `assets/i18n/es.json`, `assets/i18n/en.json`

---

## Ajuste adicional — Formulario de contacto

**Cambios aplicados:**

- Desplegable "Tipo de experiencia" simplificado a 2 opciones con precio y duración:
  - **Popular – 1h · 140€** (antes: Ruta Clásica)
  - **Pack Especial – 2h · 200€** (antes: Excursión Privada)
- El mensaje de WhatsApp del formulario refleja automáticamente el texto seleccionado.

**Archivos:** `index.html`, `assets/i18n/es.json`, `assets/i18n/en.json`

---

## Resumen de archivos modificados

| Archivo | Tipo de cambio |
|---------|---------------|
| `index.html` | Textos, imágenes, estructura footer, formulario |
| `config.js` | Teléfono, dirección |
| `assets/css/styles.css` | Estilos hero location, social-link, footer grid |
| `assets/js/main.js` | Mensaje WhatsApp tarjetas (sin prefijo "desde") |
| `assets/i18n/es.json` | Todas las claves actualizadas |
| `assets/i18n/en.json` | Todas las claves actualizadas |
| `assets/img/servicio-02-new.jpg` | Nueva imagen sección servicio |
| `assets/img/galeria-01-new.jpg` | Reemplazo galería |
| `assets/img/galeria-07-new.jpg` | Reemplazo galería |
| `assets/img/galeria-08-new.jpg` | Reemplazo galería |
| `assets/img/galeria-11-new.jpg` | Reemplazo galería |
| `assets/img/galeria-12-new.jpg` | Reemplazo galería |
