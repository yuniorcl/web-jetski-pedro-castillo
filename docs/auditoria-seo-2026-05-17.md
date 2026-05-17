# Auditoría SEO Técnica — JetExperience Baleares
**Fecha:** 17 mayo 2026 | **Última revisión:** 17 mayo 2026

---

## Puntuaciones iniciales

| Área | Puntuación |
|---|---|
| SEO técnico | 6/10 |
| SEO local | 7/10 |
| Velocidad / Core Web Vitals | 4/10 |
| Conversión | 6/10 |
| Mobile | 7/10 |

---

## Resuelto ✅

| ID | Problema | Commit |
|---|---|---|
| C1 | og-image.jpg inexistente → apunta a `galeria-08-new.jpg` | `ea7b3c4` |
| C2 | `hero-2.jpg` 1.4 MB → comprimido a 816 KB (1920×1280, q75) | `cb0d2e3` |
| C3 | NAP (email, teléfono, Maps) inyectado por JS → valores reales en HTML | `83bdf90` |
| C4 | Bug formulario: campo `phone` inexistente en JS → eliminado de validación | `83bdf90` |
| C5 | `<header>` dentro de `<main>` → movido como hijo directo de `<body>` | `fa4b870` |
| C6 | Reseña falsa "No licence needed" → eliminada y reemplazada por reales | `9f42dc1` |
| I3 | `galeria-10.png` 440 KB → convertido a JPEG 92 KB | `f75554e` |
| I5 | Bootstrap Icons CSS render-blocking → cargado non-blocking vía preload | `d06adf2` |
| I6 | Oferta especial 260€ ausente en Schema.org → añadida a `offers` | `d06adf2` |
| I7 | Copyright © 2025 → actualizado a 2026 (HTML + i18n ES/EN) | `45ce609` `480e1de` |
| I8 | NAP inconsistente (`#43` vs `43`) → estandarizado en HTML, JS e i18n | `344aa10` `77979d4` |
| I9 | Imágenes lightbox sin lazy-load → `loading="lazy"` añadido a las 12 | `91eb542` |
| I10 | `reviewCount: 3` en schema → actualizado a 5 | `9f42dc1` |
| R1 | Botón flotante WhatsApp con animación pulse | `64b7c18` |
| R5 | Keyword "excursiones" → sustituida por "alquiler jet ski Costa de los Pinos" con H2 y texto descriptivo | `77979d4` |
| R6 | Dirección en footer sin semántica → envuelta en `<address>` HTML5 | `81c000b` |
| R7 | 13 assets duplicados/sin uso → eliminados (−2.1 MB) | `70dab71` |

---

## Pendiente 🔲

### Importante 🟡

| ID | Problema | Impacto | Notas |
|---|---|---|---|
| I1 | hreflang ES y EN apuntan a la misma URL | Inglés no indexable | Decidir: crear URLs separadas o eliminar hreflang EN |
| I2 | Imágenes sin `width` y `height` explícitos | CLS en Core Web Vitals | Dimensiones ya recogidas, pendiente añadir al HTML |

### Mejoras 🔵

| ID | Mejora | Impacto |
|---|---|---|
| R2 | Tipo `TouristAttraction` en Schema.org | Visibilidad en Knowledge Graph |
| R3 | `<picture>` con `srcset` responsive | Reducir peso en móvil hasta 60% |
| R4 | Hero images completas en sitemap de imágenes | Indexación de `hero-2.jpg` y `hero-3.jpg` |

---

## Dimensiones recogidas para I2

| Imagen | Dimensiones |
|---|---|
| logo.jpeg | 1254×1254 |
| servicio-01.avif | 1920×1483 |
| servicio-02-new.jpg | 800×533 |
| servicio-03.avif | 1920×1483 |
| servicio-04.avif | 1100×619 |
| galeria-12-new.jpg | 800×533 |
| galeria-01-new.jpg | 800×532 |
| oferta-especial.jpg | 1024×1355 |
| jetski_seadoo.webp | 1280×960 |
| fleet-01.avif | 661×480 |
| galeria-02.jpeg | 525×360 |
| galeria-03.jpg | 700×525 |
| galeria-04.jpg | 803×499 |
| galeria-05.jpg | 490×281 |
| galeria-06.jpg | 1024×725 |
| galeria-07-new.jpg | 800×533 |
| galeria-08-new.jpg | 800×450 |
| galeria-09.jpg | 300×168 |
| galeria-10.jpg | 1024×683 |
| galeria-11-new.jpg | 800×600 |
| descarga.png (QR) | 132×132 |

---

## Oportunidades de posicionamiento

| Keyword | Potencial | Estado |
|---|---|---|
| `jet ski cala millor` | **Muy alto** | Schema con dirección exacta ✅ — velocidad resuelta ✅ |
| `alquiler jet ski mallorca` | **Alto** | Title, H2, schema ✅ — pendiente más reseñas reales |
| `alquiler jet ski Costa de los Pinos` | **Alto** | H2 y texto descriptivo añadidos ✅ |

---

*Auditoría iniciada: 17/05/2026 — rama `feature/update-ceo-and-reviews`*
