# Spec: Páginas de Localidad — SEO Local
**Fecha:** 2026-05-31
**Rama:** `feature/arquitectura-multipagina`
**Fase:** 2 de 4 — Páginas de localidad

---

## Objetivo

Crear 5 páginas de localidad optimizadas para SEO local usando el sistema data-driven de Eleventy: un único template `location.njk` + archivo de datos `locations.json` genera todas las páginas. Cada página tiene contenido único, schema markup propio y apunta a keywords geográficas específicas.

## Principios

- **DRY:** un solo template para las 5 páginas. Si cambia el layout, se cambia en un sitio.
- **Escalable:** añadir una localidad nueva = añadir un objeto al JSON.
- **SEO primero:** cada página tiene title, description, canonical, H1 y schema únicos.
- **Sin inventar datos:** el contenido es descriptivo y honesto, sin métricas falsas.

---

## URLs generadas

| Archivo fuente | URL final |
|---|---|
| `src/jet-ski-cala-millor.njk` | `/jet-ski-cala-millor/` |
| `src/jet-ski-cala-bona.njk` | `/jet-ski-cala-bona/` |
| `src/jet-ski-sa-coma.njk` | `/jet-ski-sa-coma/` |
| `src/jet-ski-porto-cristo.njk` | `/jet-ski-porto-cristo/` |
| `src/jet-ski-costa-de-los-pinos.njk` | `/jet-ski-costa-de-los-pinos/` |

---

## Archivos a crear o modificar

| Acción | Archivo |
|---|---|
| Crear | `src/_data/locations.json` |
| Crear | `src/_includes/location.njk` |
| Crear | `src/jet-ski-cala-millor.njk` |
| Crear | `src/jet-ski-cala-bona.njk` |
| Crear | `src/jet-ski-sa-coma.njk` |
| Crear | `src/jet-ski-porto-cristo.njk` |
| Crear | `src/jet-ski-costa-de-los-pinos.njk` |
| Modificar | `src/_includes/head.njk` |
| Modificar | `src/sitemap.xml` |

---

## Datos — `src/_data/locations.json`

```json
[
  {
    "slug": "cala-millor",
    "name": "Cala Millor",
    "title": "Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares",
    "description": "Alquila una moto de agua en Cala Millor, Mallorca. Salida directa desde Costa de los Pinos. Sea-Doo modernos, chaleco incluido. Reserva fácil por WhatsApp.",
    "h1": "Alquiler de Jet Ski en Cala Millor, Mallorca",
    "intro1": "Cala Millor es uno de los destinos turísticos más populares de la costa levantina de Mallorca, con más de 1,5 km de playa de arena dorada. Sus aguas tranquilas y poco profundas la convierten en el escenario perfecto para disfrutar de una experiencia en moto de agua, tanto si es tu primera vez como si ya tienes experiencia.",
    "intro2": "Desde nuestra base en Costa de los Pinos, llegamos directamente a tu zona de baño con nuestras Sea-Doo. Solo necesitas licencia náutica y ganas de disfrutar el Mediterráneo.",
    "highlight": "Navega frente a sus 1,5 km de playa dorada con aguas tranquilas y poca corriente.",
    "features": [
      "Aguas tranquilas, ideal para principiantes con licencia náutica",
      "Playa de 1,5 km con arena dorada y fondo visible",
      "Zona de navegación amplia, sin obstáculos"
    ],
    "faq": [
      {
        "q": "¿Dónde sale el jet ski en Cala Millor?",
        "a": "Nuestra base está en Avenida del Pinar 43, Costa de los Pinos, a menos de 1 km de la playa de Cala Millor. También hacemos entrega directamente en la playa si lo prefieres."
      },
      {
        "q": "¿Las aguas de Cala Millor son aptas para principiantes?",
        "a": "Sí. Cala Millor tiene aguas tranquilas y bien protegidas, ideales para quien pilota por primera vez. Siempre con licencia náutica obligatoria y briefing de seguridad incluido."
      }
    ],
    "geo": { "lat": 39.5878, "lng": 3.3947 },
    "image": "galeria-03.jpg",
    "imageAlt": "Playa de Cala Millor vista desde el mar, Mallorca"
  },
  {
    "slug": "cala-bona",
    "name": "Cala Bona",
    "title": "Alquiler de Jet Ski en Cala Bona, Mallorca | JetExperience Baleares",
    "description": "Alquila una moto de agua en Cala Bona, Mallorca. A 1 km de nuestra base en Costa de los Pinos. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp.",
    "h1": "Alquiler de Jet Ski en Cala Bona, Mallorca",
    "intro1": "Cala Bona es un pequeño y pintoresco puerto pesquero a apenas 1 km de Cala Millor. Sus aguas azules y su entorno más íntimo la convierten en una de las salidas favoritas de nuestros clientes. Navegar frente a Cala Bona combina la emoción del jet ski con unas vistas privilegiadas de la sierra de Llevant.",
    "intro2": "Nuestra base en Costa de los Pinos está a menos de 5 minutos navegando, lo que hace de Cala Bona uno de los puntos de inicio más cómodos para tu experiencia.",
    "highlight": "Puerto natural íntimo con aguas azules y vistas a la sierra de Llevant.",
    "features": [
      "Puerto natural protegido, aguas en calma",
      "Entorno más íntimo y menos masificado que Cala Millor",
      "A 1 km de nuestra base — llegamos en minutos"
    ],
    "faq": [
      {
        "q": "¿Puedo reservar el jet ski directamente en Cala Bona?",
        "a": "Sí. Contacta por WhatsApp e indicamos el punto de encuentro exacto en Cala Bona. El servicio incluye entrega y recogida en el lugar acordado."
      },
      {
        "q": "¿Cuánto tarda en llegar el servicio a Cala Bona?",
        "a": "Nuestra base está a menos de 1 km de Cala Bona. Confirmamos hora de encuentro al reservar y llegamos puntualmente."
      }
    ],
    "geo": { "lat": 39.6005, "lng": 3.4167 },
    "image": "galeria-05.jpg",
    "imageAlt": "Aguas cristalinas en Cala Bona, Mallorca"
  },
  {
    "slug": "sa-coma",
    "name": "Sa Coma",
    "title": "Alquiler de Jet Ski en Sa Coma, Mallorca | JetExperience Baleares",
    "description": "Alquila una moto de agua en Sa Coma, Mallorca. Aguas cristalinas a 2 km de nuestra base. Sea-Doo modernos, chaleco incluido. Reserva fácil por WhatsApp.",
    "h1": "Alquiler de Jet Ski en Sa Coma, Mallorca",
    "intro1": "Sa Coma es una playa natural menos masificada que sus vecinas, con aguas cristalinas y fondos de arena blanca. A tan solo 2 km navegando desde nuestra base, es ideal para quienes buscan explorar la costa este de Mallorca con total libertad.",
    "intro2": "Sus aguas tranquilas y limpias hacen de Sa Coma una de las rutas más disfrutadas por nuestros clientes. Un entorno natural donde la moto de agua encaja a la perfección.",
    "highlight": "Playa natural de arena blanca con aguas cristalinas y poca afluencia turística.",
    "features": [
      "Playa natural, menos masificada y más tranquila",
      "Aguas cristalinas con fondos de arena blanca",
      "A 2 km navegando desde nuestra base"
    ],
    "faq": [
      {
        "q": "¿Se puede hacer jet ski en Sa Coma?",
        "a": "Sí. Sa Coma es una de nuestras zonas de navegación habituales. El servicio incluye entrega en el punto de la playa que prefieras."
      },
      {
        "q": "¿Qué distancia hay entre Sa Coma y vuestra base?",
        "a": "Aproximadamente 2 km navegando desde Costa de los Pinos. En moto de agua se alcanza en pocos minutos."
      }
    ],
    "geo": { "lat": 39.6112, "lng": 3.4178 },
    "image": "galeria-06.jpg",
    "imageAlt": "Aguas turquesas de Sa Coma, Mallorca"
  },
  {
    "slug": "porto-cristo",
    "name": "Porto Cristo",
    "title": "Alquiler de Jet Ski en Porto Cristo, Mallorca | JetExperience Baleares",
    "description": "Ruta en jet ski hasta Porto Cristo desde Costa de los Pinos. ~12 km de costa virgen, calas escondidas y acantilados. La experiencia más aventurera. Reserva por WhatsApp.",
    "h1": "Alquiler de Jet Ski en Porto Cristo, Mallorca",
    "intro1": "Porto Cristo es uno de los puertos naturales más espectaculares de Mallorca, conocido mundialmente por las Coves del Drach. Navegar en jet ski hasta Porto Cristo es la ruta más aventurera de nuestro catálogo: aproximadamente 12 km de costa virgen con calas escondidas y acantilados imponentes.",
    "intro2": "Esta ruta está disponible con el Pack Especial de 2 horas y es perfecta para quienes ya tienen experiencia y quieren explorar el litoral este de Mallorca a fondo. Consulta disponibilidad por WhatsApp.",
    "highlight": "La ruta más larga y espectacular: ~12 km de costa virgen hasta el puerto natural de Porto Cristo.",
    "features": [
      "Ruta de ~12 km con calas vírgenes y acantilados",
      "Puerto natural espectacular al final del trayecto",
      "Recomendada con el Pack Especial 2 horas"
    ],
    "faq": [
      {
        "q": "¿Podemos llegar a Porto Cristo en jet ski?",
        "a": "Sí, es nuestra ruta más larga. Disponible con el Pack Especial de 2 horas. Se recomienda experiencia previa y buen estado del mar. Consulta disponibilidad."
      },
      {
        "q": "¿Cuánto tiempo dura la ruta hasta Porto Cristo?",
        "a": "Aproximadamente 2 horas ida y vuelta navegando a ritmo cómodo, con paradas para disfrutar del paisaje. Por eso la recomendamos con el pack de 2 horas."
      }
    ],
    "geo": { "lat": 39.5322, "lng": 3.3381 },
    "image": "galeria-04.jpg",
    "imageAlt": "Ruta costera en moto de agua hacia Porto Cristo, Mallorca"
  },
  {
    "slug": "costa-de-los-pinos",
    "name": "Costa de los Pinos",
    "title": "Alquiler de Jet Ski en Costa de los Pinos, Mallorca | JetExperience Baleares",
    "description": "Nuestra base de jet ski está en Costa de los Pinos, Mallorca. Salida directa al mar desde Avenida del Pinar 43. Sea-Doo modernos, chaleco incluido. Reserva por WhatsApp.",
    "h1": "Alquiler de Jet Ski en Costa de los Pinos, Mallorca",
    "intro1": "Costa de los Pinos es el punto de salida de todas nuestras experiencias y nuestra base principal. Esta exclusiva zona residencial entre Sa Coma y Cala Millor ofrece acceso directo al mar en aguas privilegiadas, con poca afluencia de bañistas y un entorno natural extraordinario.",
    "intro2": "Si te alojas en Costa de los Pinos o sus alrededores, el servicio sale directamente desde aquí. Avenida del Pinar 43 es el punto de partida hacia Cala Millor, Cala Bona, Sa Coma y Porto Cristo.",
    "highlight": "Base principal del servicio. Salida directa al mar desde Avenida del Pinar 43.",
    "features": [
      "Base principal — salida directa sin desplazamiento",
      "Aguas tranquilas y exclusivas, poca afluencia",
      "Punto de partida ideal para todas las rutas"
    ],
    "faq": [
      {
        "q": "¿Dónde está exactamente vuestra base en Costa de los Pinos?",
        "a": "En Avenida del Pinar 43, Costa de los Pinos, 07560. Puedes encontrarnos en Google Maps buscando JetExperience Baleares."
      },
      {
        "q": "¿Hacéis entrega en Costa de los Pinos?",
        "a": "Sí, de hecho es nuestro punto habitual de entrega. Confirma lugar exacto al reservar por WhatsApp."
      }
    ],
    "geo": { "lat": 39.6377, "lng": 3.4145 },
    "image": "galeria-11-new.jpg",
    "imageAlt": "Vista aérea de moto de agua en Costa de los Pinos, Mallorca"
  }
]
```

---

## Modificación de `.eleventy.js`

Añadir un custom filter `getLocation` para buscar en el array de localidades por slug. `selectattr` no está disponible en Nunjucks estándar.

```js
eleventyConfig.addFilter("getLocation", function(locations, slug) {
  return locations.find(loc => loc.slug === slug);
});
```

Uso en el template: `{% set loc = locations | getLocation(locationSlug) %}`

---

## Template — `src/_includes/location.njk`

Layout completo de una página de localidad. Hereda de `base.njk` vía frontmatter de las páginas individuales.

**Nota sobre JSON-LD:** A diferencia de `head.njk` (que tiene JSON-LD estático envuelto en `{% raw %}`), el JSON-LD de las páginas de localidad usa variables Nunjucks directamente (`{{ loc.h1 }}`). Esto funciona porque Nunjucks solo interpreta `{{ }}` y `{% %}` — los `{` simples del JSON son texto plano ignorado por el motor de plantillas. No se usa `{% raw %}`.

```njk
{% set loc = locations | getLocation(locationSlug) %}

<nav class="breadcrumb-nav container py-3" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
    <li class="breadcrumb-item active" aria-current="page">Jet Ski {{ loc.name }}</li>
  </ol>
</nav>

<section class="location-hero py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <h1 class="section-title mb-4">{{ loc.h1 }}</h1>
        <p class="feature-desc">{{ loc.intro1 }}</p>
        <p class="feature-desc">{{ loc.intro2 }}</p>
        <a href="https://api.whatsapp.com/send/?phone=34618842609&text={{ ('Hola, quiero reservar jet ski en ' + loc.name + '. ¿Podéis informarme?') | urlencode }}"
           class="btn-cta mt-3" target="_blank" rel="noopener">
          Reservar en {{ loc.name }} →
        </a>
      </div>
      <div class="col-lg-6">
        <img src="/assets/img/{{ loc.image }}"
             alt="{{ loc.imageAlt }}"
             loading="lazy"
             class="rounded-4 shadow-lg w-100">
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <p class="feature-desc fst-italic text-muted mb-4">{{ loc.highlight }}</p>
    <ul class="checklist">
      {% for feat in loc.features %}
      <li class="checklist__item checklist__item--yes">{{ feat }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section class="py-section bg-dark-brand">
  <div class="container text-center">
    <h2 class="section-title section-title--light mb-4">¿Listo para salir al mar en {{ loc.name }}?</h2>
    <a href="https://api.whatsapp.com/send/?phone=34618842609&text={{ ('Hola, quiero reservar jet ski en ' + loc.name + '. ¿Podéis informarme?') | urlencode }}"
       class="btn-cta btn-cta--dark" target="_blank" rel="noopener">
      Reservar por WhatsApp
    </a>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 mb-4 mb-lg-0">
        <h2 class="section-title">Preguntas frecuentes</h2>
      </div>
      <div class="col-lg-7">
        <div class="accordion" id="faqLocation">
          {% for item in loc.faq %}
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#faqL{{ loop.index }}">
                {{ item.q }}
              </button>
            </h3>
            <div id="faqL{{ loop.index }}" class="accordion-collapse collapse" data-bs-parent="#faqLocation">
              <div class="accordion-body faq-body">{{ item.a }}</div>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<div class="container py-4 text-center">
  <a href="/" class="btn-outline-light-brand">← Ver todas las experiencias</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://jetexperiencemallorca.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "{{ loc.h1 }}"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "{{ loc.h1 }}",
      "provider": {
        "@id": "https://jetexperiencemallorca.com/#business"
      },
      "areaServed": {
        "@type": "Place",
        "name": "{{ loc.name }}, Mallorca"
      },
      "url": "https://jetexperiencemallorca.com/jet-ski-{{ loc.slug }}/"
    }
  ]
}
</script>
```

---

## Páginas individuales (frontmatter only)

Las 5 páginas `.njk` solo contienen frontmatter. Ejemplo para Cala Millor:

```njk
---
layout: location.njk
locationSlug: cala-millor
pageTitle: "Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares"
pageDescription: "Alquila una moto de agua en Cala Millor, Mallorca. Salida directa desde Costa de los Pinos. Sea-Doo modernos, chaleco incluido. Reserva fácil por WhatsApp."
pageCanonical: "https://jetexperiencemallorca.com/jet-ski-cala-millor/"
permalink: /jet-ski-cala-millor/
---
```

El frontmatter pasa `pageTitle`, `pageDescription` y `pageCanonical` a `head.njk` para SEO único por página.

---

## Modificación de `head.njk`

Hacer dinámicos title, description y canonical con fallback a los valores de la homepage:

```njk
<title>{{ pageTitle or "Alquiler de Jet Ski en Cala Millor, Mallorca | JetExperience Baleares" }}</title>
<meta name="description" content="{{ pageDescription or "Alquila una moto de agua en Cala Millor, Mallorca..." }}">
<link rel="canonical" href="{{ pageCanonical or "https://jetexperiencemallorca.com/" }}">
```

Además, las etiquetas OG se hacen dinámicas con los mismos fallbacks:

```njk
<meta property="og:title" content="{{ pageTitle or "Alquiler de Jet Ski en Cala Millor | JetExperience Baleares" }}">
<meta property="og:description" content="{{ pageDescription or "Vive una experiencia única en el mar..." }}">
<meta property="og:url" content="{{ pageCanonical or "https://jetexperiencemallorca.com/" }}">
```

Solo estas 6 líneas cambian en `head.njk`. El resto permanece intacto.

---

## Modificación de `sitemap.xml`

Añadir las 5 nuevas URLs al sitemap existente:

```xml
<url>
  <loc>https://jetexperiencemallorca.com/jet-ski-cala-millor/</loc>
  <lastmod>2026-05-31</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<!-- repetir para cala-bona, sa-coma, porto-cristo, costa-de-los-pinos -->
```

---

## Criterios de aceptación

- [ ] `npm run build` genera 8 páginas HTML (homepage + 5 localidades + 2 legales)
- [ ] Cada página tiene `<title>`, `<meta description>` y `<link canonical>` únicos
- [ ] Cada página tiene H1 con el keyword de la localidad
- [ ] El JSON-LD contiene `BreadcrumbList` y `Service` válidos
- [ ] El breadcrumb HTML es visible en la página
- [ ] Las 5 URLs están en `sitemap.xml`
- [ ] El botón WhatsApp de cada página incluye el nombre de la localidad en el mensaje
- [ ] La homepage sigue funcionando sin cambios (fallbacks en `head.njk`)
- [ ] Bootstrap accordion funciona en las FAQs de localidad
