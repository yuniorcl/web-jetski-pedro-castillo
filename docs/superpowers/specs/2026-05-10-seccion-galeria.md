# Sesión: Sección Galería

**Fecha:** 2026-05-10  
**Estado:** ✅ Completado

---

## Cambios realizados

### 1. Fotos reales — 12 imágenes del servicio

Sustituidas las 6 fotos de Unsplash por 12 fotos reales, paginadas de 6 en 6.

| # | Archivo | Origen |
|---|---|---|
| 1 | `galeria-01.avif` | `examples/tarifas/sea-sports-mallorca-gallery-7-13.avif` |
| 2 | `galeria-02.jpeg` | `examples/tarifas/motoatardecer2.jpeg` |
| 3 | `galeria-03.jpg` | `examples/Sa Roqueta_files/cala-millor.jpg` |
| 4 | `galeria-04.jpg` | `examples/Sa Roqueta_files/porto-cristo.jpg` |
| 5 | `galeria-05.jpg` | `examples/Sa Roqueta_files/sa-coma.jpg` |
| 6 | `galeria-06.jpg` | `examples/Sa Roqueta_files/i7is926qymg4k0gk-1024x725.jpg` |
| 7 | `galeria-07.avif` | `examples/fotos de motos/sea-my24-gti-se-130-teal-blue-...avif` |
| 8 | `galeria-08.avif` | `examples/fotos de motos/sea-my24-spark-2up-base-60-sunrise-orange-...avif` |
| 9 | `galeria-09.jpg` | `examples/Sa Roqueta_files/images-5.jpg` |
| 10 | `galeria-10.png` | `examples/Sa Roqueta_files/Jetskiguy_seadoo_def-1024x683.png` |
| 11 | `galeria-11.png` | `examples/Sa Roqueta_files/jetski_seadoo-1024x768.png` |
| 12 | `galeria-12.png` | `examples/Sa Roqueta_files/image-3.png` |

---

### 2. Slider con paginación y flechas

- Atributo `data-page="1|2"` en cada `.gallery-item`
- Envuelto en `.gallery-slider` con `position: relative`
- Flechas reutilizan clase `hero-arrow` (estilos del banner) + `gallery-arrow--prev/next` solo para posición y color
- JS: `initGallerySlider()` — llama `showPage(1)` al iniciar para establecer estado vía JS (no depende del CSS)
- Fix: `showPage` usa `display: 'block'` explícito (no `''`) para evitar que el CSS `.gallery-item[data-page="2"] { display:none }` bloquee la página 2

**Flujo:** Galería muestra 6 fotos · flecha › pasa a fotos 7–12 · flecha ‹ vuelve a 1–6

---

### 3. Color de flechas

Las flechas de la galería usan el color CTA naranja `#FF6B35` (variable `--color-cta`) para que sean visibles sobre el fondo claro `bg-light-brand`. Hover: `#e85a25`.
