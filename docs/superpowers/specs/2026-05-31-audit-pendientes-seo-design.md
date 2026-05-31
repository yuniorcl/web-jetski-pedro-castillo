# Spec: Resolución de pendientes del audit SEO
**Fecha:** 2026-05-31  
**Rama sugerida:** `feature/seo-audit-pendientes`  
**Alcance:** Corregir los 5 ítems pendientes del audit de 2026-05-17 sin tocar estructura ni contenido existente.

---

## Principios de implementación

- **No romper nada**: cada cambio es atómico y reversible.
- **SEO primero**: ninguna modificación puede degradar lo que ya funciona.
- **Sin cambios de contenido visible**: el usuario no debe notar diferencia salvo mejora de velocidad en móvil (R3).

---

## Tareas en orden de ejecución

---

### T1 — I2: `width` y `height` en todas las `<img>`

**Problema:** Las `<img>` del HTML no tienen atributos `width` y `height` explícitos. El navegador no puede reservar espacio antes de descargar la imagen → desplazamiento de layout (CLS) → Core Web Vitals penalizado.

**Solución:** Añadir `width` y `height` con las dimensiones reales a cada `<img>` de `index.html`. El CSS ya controla el tamaño visual con `max-width:100%` y `height:auto`, así que los atributos solo sirven para que el navegador calcule el aspect-ratio antes de cargar.

**Imágenes afectadas y dimensiones (ya recogidas en audit):**

| Selector / src | width | height |
|---|---|---|
| logo.jpeg (header + footer) | 54 | 54 |
| logo.jpeg (footer grande) | 160 | 160 |
| servicio-01.avif | 1920 | 1483 |
| servicio-02-new.jpg | 800 | 533 |
| servicio-03.avif | 1920 | 1483 |
| servicio-04.avif | 1100 | 619 |
| galeria-12-new.jpg (exp-card) | 800 | 533 |
| galeria-01-new.jpg (exp-card) | 800 | 532 |
| oferta-especial.jpg | 1024 | 1355 |
| jetski_seadoo.webp | 1280 | 960 |
| fleet-01.avif | 661 | 480 |
| galeria-01-new.jpg a galeria-12-new.jpg (gallery grid) | según tabla del audit | idem |
| galeria-09.jpg | 300 | 168 |
| galeria-10.jpg | 1024 | 683 |
| QR descarga.png | 132 | 132 |
| apple-touch-icon (no en `<img>`, no aplica) | — | — |

**Archivos modificados:** `index.html` únicamente.

**Verificación:** Abrir DevTools → Lighthouse → comprobar que CLS se reduce. Sin cambio visual.

---

### T2 — R4: Añadir hero-2.jpg y hero-3.jpg al sitemap de imágenes

**Problema:** El `sitemap.xml` solo referencia hero-1.jpg como imagen del slideshow. Google no puede indexar hero-2.jpg ni hero-3.jpg porque no aparecen en el sitemap ni en ningún `<img>` del HTML (se cargan como `background-image` vía CSS clase `.hero-slide--2` y `.hero-slide--3`).

**Solución:** Añadir dos entradas `<image:image>` dentro del `<url>` de la homepage en `sitemap.xml`.

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

**Archivos modificados:** `sitemap.xml` únicamente.

**Verificación:** Validar sitemap en Google Search Console tras deploy.

---

### T3 — R2: Añadir `TouristAttraction` al Schema JSON-LD

**Problema:** El schema actual declara `["LocalBusiness", "SportsActivityLocation"]`. Añadir `TouristAttraction` amplía la visibilidad en Knowledge Graph de Google para búsquedas turísticas ("qué hacer en Cala Millor", "actividades Mallorca").

**Solución:** Extender el array `@type` en el bloque JSON-LD de `index.html`:

```json
"@type": ["LocalBusiness", "SportsActivityLocation", "TouristAttraction"]
```

No se modifica ningún otro campo del schema.

**Archivos modificados:** `index.html` únicamente (bloque `<script type="application/ld+json">`).

**Verificación:** Pegar el JSON-LD en el [Rich Results Test de Google](https://search.google.com/test/rich-results) y confirmar que no hay errores.

---

### T4 — I1: Corregir hreflang (eliminar señal EN incorrecta)

**Problema:** El `<head>` contiene tres etiquetas hreflang, las tres apuntando a la misma URL:

```html
<link rel="alternate" hreflang="es" href="https://jetexperiencemallorca.com/">
<link rel="alternate" hreflang="en" href="https://jetexperiencemallorca.com/">
<link rel="alternate" hreflang="x-default" href="https://jetexperiencemallorca.com/">
```

Esto le dice a Google que existe una versión en inglés en la misma URL que la española, lo cual es incorrecto. Google puede penalizar o ignorar ambas señales.

**Solución:** Mientras no existan URLs `/en/` reales, eliminar el hreflang EN y conservar solo ES y x-default:

```html
<link rel="alternate" hreflang="es" href="https://jetexperiencemallorca.com/">
<link rel="alternate" hreflang="x-default" href="https://jetexperiencemallorca.com/">
```

El conmutador de idioma JS (`ES | EN`) sigue funcionando para el usuario. Solo se elimina la señal incorrecta a Google.

**Archivos modificados:** `index.html` únicamente.

**Cuándo revisar:** Cuando se cree la estructura `/en/` real, se restauran ambos hreflang con URLs distintas.

**Verificación:** Google Search Console → Cobertura → confirmar que no aparece error de hreflang tras reindexación.

---

### T5 — R3: `<picture>` + `srcset` responsive en imágenes principales

**Problema:** Todas las imágenes se sirven en su resolución original independientemente del dispositivo. En móvil (pantalla ~390px) se descarga una imagen de 1920px de ancho innecesariamente. Impacto estimado: −40 a −60% en peso de imágenes en móvil → mejora directa en LCP y Performance Score.

**Alcance:** Solo las imágenes por encima de la mitad de la página o con mayor peso visual. Las imágenes de galería (ya lazy-loaded) son secundarias.

**Imágenes a convertir a `<picture>`:**

| Imagen actual | Breakpoints sugeridos |
|---|---|
| `servicio-01.avif` (1920px) | 480w, 800w, 1920w |
| `servicio-02-new.jpg` (800px) | 480w, 800w |
| `servicio-03.avif` (1920px) | 480w, 800w, 1920w |
| `servicio-04.avif` (1100px) | 480w, 1100w |
| `jetski_seadoo.webp` (1280px) | 480w, 800w, 1280w |
| `fleet-01.avif` (661px) | 400w, 661w |

**Patrón de implementación:**

```html
<!-- Antes -->
<img src="assets/img/servicio-01.avif"
     alt="Moto acuática Sea-Doo en Mallorca"
     loading="lazy"
     class="feature-grid__img">

<!-- Después -->
<picture>
  <source
    srcset="assets/img/servicio-01-480.avif 480w,
            assets/img/servicio-01-800.avif 800w,
            assets/img/servicio-01.avif 1920w"
    sizes="(max-width: 576px) 480px, (max-width: 992px) 800px, 1920px"
    type="image/avif">
  <img src="assets/img/servicio-01.avif"
       alt="Moto acuática Sea-Doo en Mallorca"
       loading="lazy"
       width="1920"
       height="1483"
       class="feature-grid__img">
</picture>
```

**Prerequisito:** Generar las variantes redimensionadas de cada imagen antes de modificar el HTML. Herramienta: `sharp-cli`, `squoosh-cli` o `ffmpeg`.

**Nota:** Esta tarea es la de mayor esfuerzo. Se puede dividir en dos commits: primero las imágenes de la sección "Servicio", luego las de la sección "Flota".

**Archivos modificados:** `index.html` + nuevos assets de imagen en `assets/img/`.

**Verificación:** Chrome DevTools → Network → filtrar por Img → confirmar que en móvil se sirve la variante de 480px y no la original.

---

## Orden de commits sugerido

```
1. fix(seo): add width/height to all img elements (CLS fix)
2. fix(sitemap): add hero-2 and hero-3 to image sitemap
3. fix(schema): add TouristAttraction type to JSON-LD
4. fix(seo): remove incorrect EN hreflang until /en/ URLs exist
5. perf(images): add picture/srcset responsive variants for above-fold images
```

---

## Criterios de aceptación

- [ ] Lighthouse CLS < 0.1 en móvil
- [ ] Sitemap válido (sin errores en Search Console)
- [ ] Rich Results Test sin errores de schema
- [ ] Sin errores en Search Console por hreflang
- [ ] En móvil, Network muestra variantes de imagen pequeñas (T5)
- [ ] Ninguna sección de la homepage ha cambiado visualmente
