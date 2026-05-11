# Sesión: Ajustes sección Tarifas / Experiencias

**Fecha:** 2026-05-10  
**Estado:** ✅ Completado (4/5 ítems) — ⚠️ Tooltip icono ⓘ pendiente para retoques finales

---

## Cambios realizados

### 1. Fotos de las 4 cards — reemplazadas por fotos reales

Sustituidas las imágenes genéricas de Unsplash por fotos reales del servicio.

| Card | Archivo | Origen |
|---|---|---|
| Ruta Básica 30min | `assets/img/tarifa-basica.avif` | `examples/tarifas/sea-sports-mallorca-gallery-7-11.avif` |
| Ruta Clásica 60min | `assets/img/tarifa-clasica.avif` | `examples/tarifas/sea-sports-mallorca-gallery-7-12.avif` |
| Ruta Atardecer 90min | `assets/img/tarifa-atardecer.jpg` | `examples/tarifas/220_medium.jpg` (conductor real al atardecer) |
| Excursión Privada | `assets/img/tarifa-privada.webp` | `examples/tarifas/WhatsApp Image... (1).webp` (grupo en agua turquesa) |

**Ubicación en index.html:** sección `#experiencias`, `.exp-grid` (líneas 199–285).

---

### 2. Icono ⓘ en subtítulo de cada card

Añadido un icono `bi-info-circle` (Bootstrap Icons) en amarillo `#FFD700` junto al subtítulo de cada tarjeta.

- Requirió añadir Bootstrap Icons CDN al `<head>`
- El `data-i18n` se movió a un `<span>` interno para que `applyLang` no destruya el icono al actualizar texto
- Claves de tooltip añadidas a `es.json` y `en.json` (`exp.*.tooltip`)

---

### 3. Fix SRI Bootstrap JS

El hash `integrity` del script Bootstrap JS estaba desactualizado — el navegador bloqueaba toda la carga de Bootstrap JS silenciosamente.

```html
<!-- Hash corregido -->
integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
```

---

### 4. WhatsApp con experiencia específica por tarjeta ✅

Cada botón "Reservar →" envía ahora un mensaje de WhatsApp con el nombre y precio de la experiencia seleccionada, en lugar del mensaje genérico.

**Patrón implementado:**

- HTML: atributo `data-exp-key="basic|classic|sunset|private"` en cada `<a class="exp-card__btn">`
- JS — función `buildExpHref(expKey)`: construye la URL con mensaje específico usando las traducciones cargadas
- JS — función `updateExpHrefs()`: aplica el href a todos los `[data-exp-key]`
- `renderContactInfo()`: saltea los botones con `data-exp-key` (`if (!el.dataset.expKey)`) y llama `updateExpHrefs()` al final
- `applyLang()`: también llama `updateExpHrefs()` para actualizar hrefs al cambiar idioma

**Mensajes generados (ES):**
```
Hola, me gustaría reservar: Ruta Básica (desde 60€). ¿Podéis confirmarme disponibilidad?
Hola, me gustaría reservar: Ruta Clásica (desde 100€). ¿Podéis confirmarme disponibilidad?
Hola, me gustaría reservar: Ruta Atardecer (desde 140€). ¿Podéis confirmarme disponibilidad?
Hola, me gustaría reservar: Excursión Privada (desde 200€). ¿Podéis confirmarme disponibilidad?
```

**Verificado:** mensaje correcto recibido en WhatsApp tras hard refresh del navegador.

---

## ⚠️ Pendiente — Tooltip icono ⓘ no funciona

**Objetivo:** Al hacer hover o click sobre el ⓘ de cada tarjeta, mostrar un tooltip con los detalles de esa experiencia (personas, chaleco, instructor, etc.).

**Lo que se implementó:**
- Icono `bi-info-circle` en HTML con clase `.exp-info-btn` y `data-i18n-tooltip="exp.*.tooltip"` ✓
- Claves de contenido en `es.json` y `en.json` (`exp.basic.tooltip`, etc.) ✓
- Función `initTooltips()` en `main.js`: crea `div#exp-tooltip-popup` en `<body>` y registra `mouseenter / mouseleave / click` ✓
- El popup usa `position: fixed; z-index: 2147483647` para evitar clipping por `overflow: hidden` de `.exp-card` ✓
- Regla CSS `#exp-tooltip-popup` con `position: fixed !important` en `styles.css` ✓

**Problema:** El popup nunca aparece. No se descartó:
- Que `document.querySelectorAll('.exp-info-btn')` devuelva 0 elementos en el momento de `initTooltips()` (posible race condition si el DOM no está listo)
- Que algún elemento padre tenga `pointer-events: none` bloqueando los eventos
- Que `translations` esté vacío cuando se intenta leer la clave del tooltip

**Para retomar:** ejecutar en consola:
```js
document.querySelectorAll('.exp-info-btn').length        // debe ser 4
document.querySelector('.exp-info-btn').dataset.i18nTooltip  // debe devolver la clave
document.getElementById('exp-tooltip-popup')             // debe existir
```

**Decisión:** Pospuesto para retoques finales.
