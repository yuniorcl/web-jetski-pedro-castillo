# Auditoría SEO Técnica — JetExperience Baleares
**Fecha:** 17 mayo 2026 | **Estado:** pendiente de corrección

---

## Puntuaciones

| Área | Puntuación |
|---|---|
| SEO técnico | 6/10 |
| SEO local | 7/10 |
| Velocidad / Core Web Vitals | 4/10 |
| Conversión | 6/10 |
| Mobile | 7/10 |

---

## Problemas Críticos 🔴

| ID | Problema | Impacto |
|---|---|---|
| C1 | `og-image.jpg` no existe en el servidor | Social sharing roto, schema inválido |
| C2 | `hero-2.jpg` pesa 1.4 MB | LCP destruido en móvil |
| C3 | Teléfono, email y Maps inyectados por JS | NAP invisible a crawlers |
| C4 | Bug en formulario: campo `phone` inexistente en HTML | Formulario no funciona |
| C5 | `<header>` dentro de `<main>` | Semántica HTML5 incorrecta |
| C6 | Reseña de James T. dice "No licence needed" | Contradicción con el servicio (requiere licencia) |

---

## Problemas Importantes 🟡

| ID | Problema | Impacto |
|---|---|---|
| I1 | hreflang ES y EN apuntan a la misma URL | Inglés no indexable |
| I2 | Imágenes sin `width` y `height` explícitos | CLS en Core Web Vitals |
| I3 | `galeria-10.png` (440 KB) y `galeria-11.png` (344 KB) en PNG | Peso excesivo, sin formato moderno |
| I4 | `tarifa-basica.avif` (552 KB) y `tarifa-clasica.avif` (460 KB) | AVIF demasiado pesado |
| I5 | Bootstrap Icons CSS desde CDN sin preload | Posible render-blocking |
| I6 | Oferta especial 260€ ausente en Schema.org `offers` | No aparece en rich snippets de precio |
| I7 | Copyright dice © 2025 | Desactualizado (año actual: 2026) |
| I8 | NAP inconsistente: schema usa `43`, HTML usa `#43` | Señal de entidad local débil |
| I9 | Imágenes de lightbox no lazy-loaded | ~1.4 MB de descarga innecesaria |
| I10 | AggregateRating con solo 3 reviews | Puede no activar rich snippets de estrellas |

---

## Mejoras Recomendadas 🔵

| ID | Mejora |
|---|---|
| R1 | Añadir botón flotante de WhatsApp |
| R2 | Añadir tipo `TouristAttraction` al schema |
| R3 | Usar `<picture>` con `srcset` para imágenes responsive |
| R4 | Incluir hero images en el sitemap de imágenes |
| R5 | Añadir sección de contenido orientada a "excursiones" y "rutas" |
| R6 | Envolver dirección en footer con `<address>` HTML5 |
| R7 | Limpiar assets duplicados (`*-new.jpg` vs `.avif` antiguos) |

---

## Fortalezas Detectadas ✅

- Schema.org completo: `LocalBusiness`, `SportsActivityLocation`, `FAQPage`, `Review`, `AggregateRating`, `Offer`, coordenadas GPS, horarios
- FAQPage sincronizada con el accordion → activa rich snippet en Google
- Preload correcto del LCP (`hero-1.jpg`)
- Preconnect a Google Fonts con `crossorigin`
- `robots.txt` y `sitemap.xml` correctos con extensión de imágenes
- SRI (integrity) en Bootstrap desde CDN
- Conversión por WhatsApp con mensaje preformateado por tarifa
- GA4 configurado con `async`
- Lightbox CSS puro sin dependencias JS

---

## Oportunidades de Posicionamiento

| Keyword | Potencial | Motivo |
|---|---|---|
| `jet ski cala millor` | **Muy alto** | Keyword específica, menos competencia, schema con dirección exacta |
| `alquiler jet ski mallorca` | **Alto** | Bien posicionada en title, H2 y schema. Necesita velocidad y más reseñas |
| `excursiones jet ski mallorca` | **Bajo** | El contenido habla de "alquiler", no de "excursiones". Necesita sección específica |

---

## Conclusión

La arquitectura base es sólida pero hay **tres bloqueantes inmediatos**:

1. **Formulario roto** (C4) — pérdida directa de conversiones
2. **hero-2.jpg a 1.4 MB** (C2) — LCP > 4s en móvil, penalización en ranking
3. **og-image.jpg inexistente** (C1) — social sharing roto

Resolviendo los críticos + añadir botón flotante WhatsApp, el sitio puede competir en top 5 local para `jet ski cala millor` y top 10 para `alquiler jet ski mallorca`.

---

*Auditoría generada el 17/05/2026 — revisión del repositorio en rama `feature/new-offering`*
