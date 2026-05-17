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
| C3 | NAP (email, teléfono, Maps) inyectado por JS → valores reales en HTML | `83bdf90` |
| C4 | Bug formulario: campo `phone` inexistente en JS → eliminado de validación | `83bdf90` |
| C5 | `<header>` dentro de `<main>` → movido como hijo directo de `<body>` | `fa4b870` |
| C6 | Reseña falsa "No licence needed" → eliminada y reemplazada por reales | `9f42dc1` |
| I5 | Bootstrap Icons CSS render-blocking → cargado non-blocking vía preload | `d06adf2` |
| I6 | Oferta especial 260€ ausente en Schema.org → añadida a `offers` | `d06adf2` |
| I7 | Copyright © 2025 → actualizado a 2026 | `45ce609` |
| I8 | NAP inconsistente (`#43` vs `43`) → estandarizado sin `#` en 4 sitios | `344aa10` |
| I10 | `reviewCount: 3` en schema → actualizado a 5 | `9f42dc1` |
| R6 | Dirección en footer sin semántica → envuelta en `<address>` HTML5 | `81c000b` |
| R7 | 13 assets duplicados/sin uso → eliminados (-2.1 MB) | `70dab71` |

---

## Pendiente 🔲

### Crítico 🔴

| ID | Problema | Impacto | Notas |
|---|---|---|---|
| C2 | `hero-2.jpg` pesa 1.4 MB | LCP > 4s en móvil, penalización ranking | Requiere reexportar/comprimir la imagen fuera del repo |

### Importante 🟡

| ID | Problema | Impacto | Notas |
|---|---|---|---|
| I1 | hreflang ES y EN apuntan a la misma URL | Inglés no indexable | Decidir: crear URLs separadas o eliminar hreflang EN |
| I2 | Imágenes sin `width` y `height` explícitos | CLS en Core Web Vitals | Afecta a todas las `<img>` del HTML |
| I3 | `galeria-10.png` a 440 KB sin convertir | Peso excesivo en galería | Convertir a WebP/AVIF |
| I9 | Imágenes del lightbox no lazy-loaded | ~1.4 MB descarga innecesaria | Añadir `loading="lazy"` o cargar bajo demanda |

### Mejoras 🔵

| ID | Mejora | Impacto |
|---|---|---|
| R1 | Botón flotante WhatsApp | Mayor conversión móvil — mayor ROI disponible |
| R2 | Tipo `TouristAttraction` en Schema.org | Visibilidad en Knowledge Graph |
| R3 | `<picture>` con `srcset` responsive | Reducir peso en móvil hasta 60% |
| R4 | Hero images completas en sitemap de imágenes | Indexación de `hero-2.jpg` y `hero-3.jpg` |
| R5 | Sección de contenido "excursiones / rutas" | Capturar keyword `excursiones jet ski mallorca` |

---

## Oportunidades de posicionamiento

| Keyword | Potencial | Estado |
|---|---|---|
| `jet ski cala millor` | **Muy alto** | Schema con dirección exacta ✅ — pendiente velocidad móvil |
| `alquiler jet ski mallorca` | **Alto** | Bien posicionada en title, H2, schema ✅ — pendiente reseñas y velocidad |
| `excursiones jet ski mallorca` | **Bajo** | Sin sección de contenido específico — pendiente R5 |

---

*Auditoría iniciada: 17/05/2026 — rama `feature/update-ceo-and-reviews`*
