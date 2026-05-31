# Spec: Páginas de Servicio — SEO Transaccional
**Fecha:** 2026-05-31
**Rama:** `feature/arquitectura-multipagina`
**Fase:** 3 de 4 — Páginas de servicio

---

## Objetivo

Crear 4 páginas de servicio optimizadas para keywords transaccionales e informacionales de alto volumen, más un bloque en la homepage que las enlaza internamente. Cada página tiene contenido único, schema markup propio y apunta a una intención de búsqueda diferente.

## Principios

- **Sin template compartido:** cada página tiene su propia estructura de contenido adaptada a su intención de búsqueda.
- **Enlazado interno bidireccional:** la página de rutas enlaza a las 5 páginas de localidad; la de licencia enlaza al pack especial.
- **Sin inventar datos:** specs de Sea-Doo, precios y requisitos legales son los reales del negocio.

---

## URLs generadas

| Archivo fuente | URL | Intención de búsqueda |
|---|---|---|
| `src/alquiler-moto-agua-mallorca.njk` | `/alquiler-moto-agua-mallorca/` | Transaccional — quiero alquilar |
| `src/moto-agua-con-licencia-mallorca.njk` | `/moto-agua-con-licencia-mallorca/` | Informacional — ¿necesito licencia? |
| `src/alquiler-seadoo-mallorca.njk` | `/alquiler-seadoo-mallorca/` | Transaccional de marca — busca Sea-Doo |
| `src/rutas-moto-agua-mallorca.njk` | `/rutas-moto-agua-mallorca/` | Inspiracional — ¿a dónde puedo ir? |

---

## Archivos a crear o modificar

| Acción | Archivo |
|---|---|
| Crear | `src/alquiler-moto-agua-mallorca.njk` |
| Crear | `src/moto-agua-con-licencia-mallorca.njk` |
| Crear | `src/alquiler-seadoo-mallorca.njk` |
| Crear | `src/rutas-moto-agua-mallorca.njk` |
| Modificar | `src/index.njk` — añadir bloque de servicios |
| Modificar | `src/sitemap.xml` — añadir 4 URLs |

---

## Página 1: `/alquiler-moto-agua-mallorca/`

**Frontmatter:**
```yaml
layout: base.njk
pageTitle: "Alquiler de Moto de Agua en Mallorca | JetExperience Baleares"
pageDescription: "Alquila una moto de agua en Mallorca desde 130€. Sea-Doo modernos, chaleco incluido, entrega en playa. Zona Cala Millor, Cala Bona, Sa Coma y Porto Cristo. Reserva por WhatsApp."
pageCanonical: "https://jetexperiencemallorca.com/alquiler-moto-agua-mallorca/"
permalink: /alquiler-moto-agua-mallorca/
```

**Estructura HTML:**

```
Breadcrumb: Inicio > Alquiler Moto de Agua Mallorca

H1: Alquiler de Moto de Agua en Mallorca

Intro (2 párrafos):
  P1: JetExperience Baleares ofrece alquiler de motos de agua en la costa
  levantina de Mallorca, con base en Costa de los Pinos. Entrega directamente
  en playa en Cala Millor, Cala Bona, Sa Coma y Porto Cristo.
  P2: Nuestras Sea-Doo son los modelos más modernos del mercado, revisados
  diariamente. Solo necesitas licencia náutica y ganas de disfrutar el
  Mediterráneo.

Sección tarifas (3 tarjetas):
  - 1 hora · 130€ — La más popular, parejas y amigos
  - 2 horas · 200€ — Pack especial, grupos y ocasiones
  - Pack Licencia + 2h · 260€ — Curso homologado incluido

Sección qué incluye (lista):
  ✅ Entrega y recogida en el lugar acordado
  ✅ Chaleco salvavidas
  ✅ Kit de snorkel
  ✅ Ancla plegable
  ✅ Briefing de seguridad
  ❌ Gasolina (no incluida)
  ❌ Fianza (en el momento de la entrega)

Sección zonas (links a las 5 páginas de localidad):
  Texto: "Operamos en toda la costa levantina de Mallorca:"
  Links: Cala Millor · Cala Bona · Sa Coma · Porto Cristo · Costa de los Pinos

CTA WhatsApp

FAQ (3 preguntas):
  - ¿Qué incluye el precio del alquiler?
  - ¿Dónde hacéis la entrega de la moto?
  - ¿Cómo puedo reservar?

Link: ← Volver al inicio

Schema JSON-LD:
  BreadcrumbList + Service (misma estructura que páginas de localidad)
```

---

## Página 2: `/moto-agua-con-licencia-mallorca/`

**Frontmatter:**
```yaml
layout: base.njk
pageTitle: "Alquiler de Moto de Agua con Licencia Náutica en Mallorca | JetExperience Baleares"
pageDescription: "Para alquilar una moto de agua en Mallorca necesitas licencia náutica. Descubre qué licencia es válida y nuestro pack especial Licencia + 2h por 260€."
pageCanonical: "https://jetexperiencemallorca.com/moto-agua-con-licencia-mallorca/"
permalink: /moto-agua-con-licencia-mallorca/
```

**Estructura HTML:**

```
Breadcrumb: Inicio > Moto de Agua con Licencia Mallorca

H1: Alquiler de Moto de Agua con Licencia Náutica en Mallorca

Intro (2 párrafos):
  P1: En España, pilotar una moto de agua requiere licencia de navegación o
  titulación náutica superior. En JetExperience Baleares verificamos la
  documentación antes de cada salida para garantizar una experiencia segura
  y legal.
  P2: Si aún no tienes licencia, tenemos el pack perfecto para ti: curso de
  licencia náutica homologada más 2 horas de alquiler por solo 260€.

Sección licencias válidas (lista simple):
  ✅ Licencia de Navegación (RLNA)
  ✅ Patrón de Embarcaciones de Recreo (PER)
  ✅ Patrón de Yate (PY) o superior
  ❌ Carnet de conducir de vehículos terrestres (no válido)

Sección pack especial (tarjeta destacada):
  Pack Licencia Náutica + 2h Jet Ski — 260€
  "Curso homologado + 2 horas de alquiler en Cala Millor"
  CTA: Consultar por WhatsApp

Sección consejos:
  "Lo que debes llevar el día del alquiler:"
  - Licencia náutica original o copia digital
  - DNI o pasaporte
  - Bañador y crema solar

CTA WhatsApp principal

FAQ (3 preguntas):
  - ¿Qué licencia se necesita para pilotar un jet ski en Mallorca?
  - ¿Puedo alquilar una moto de agua sin licencia?
  - ¿Dónde puedo obtener la licencia náutica en Mallorca?

Link: ← Volver al inicio

Schema: BreadcrumbList + Service
```

---

## Página 3: `/alquiler-seadoo-mallorca/`

**Frontmatter:**
```yaml
layout: base.njk
pageTitle: "Alquiler de Sea-Doo en Mallorca | JetExperience Baleares"
pageDescription: "Alquila un Sea-Doo en Mallorca. Modelos modernos con casco ST3 Hull, sistema iTC y modo ECO. Entrega en playa. Desde 130€/hora. Reserva por WhatsApp."
pageCanonical: "https://jetexperiencemallorca.com/alquiler-seadoo-mallorca/"
permalink: /alquiler-seadoo-mallorca/
```

**Estructura HTML:**

```
Breadcrumb: Inicio > Alquiler Sea-Doo Mallorca

H1: Alquiler de Sea-Doo en Mallorca

Intro (2 párrafos):
  P1: En JetExperience Baleares solo trabajamos con Sea-Doo, la marca de
  motos de agua más reconocida del mundo. Nuestros modelos son los más
  modernos del mercado, revisados diariamente antes de cada salida.
  P2: Los Sea-Doo GTI combinan potencia, seguridad y confort. Admiten hasta
  3 personas por unidad y están equipados con altavoces, chaleco incluido
  y toda la tecnología para una experiencia segura y divertida.

Sección especificaciones (3 fichas):
  🏄 Casco ST3 Hull™ — Fibra de vidrio de alta resistencia
  ⚙️ Sistema iTC™ — Control de aceleración inteligente
  💧 Modo ECO® (70L) — Consumo eficiente, más autonomía

Sección imagen de la moto (jetski_seadoo.webp + fleet-01.avif)

Sección capacidad y seguridad:
  - Hasta 3 personas por moto
  - Chaleco salvavidas incluido para todos los ocupantes
  - Revisión técnica diaria
  - Motos del año en curso

Tarifas:
  1h · 130€ | 2h · 200€ | Pack Licencia+2h · 260€

CTA WhatsApp

FAQ (3 preguntas):
  - ¿Qué modelos de Sea-Doo tenéis disponibles?
  - ¿Cuántas personas admite el Sea-Doo?
  - ¿Las motos son nuevas?

Link: ← Volver al inicio

Schema: BreadcrumbList + Service
```

---

## Página 4: `/rutas-moto-agua-mallorca/`

**Frontmatter:**
```yaml
layout: base.njk
pageTitle: "Rutas en Moto de Agua por Mallorca | JetExperience Baleares"
pageDescription: "Explora la costa este de Mallorca en moto de agua. Rutas desde Costa de los Pinos hasta Cala Millor, Cala Bona, Sa Coma y Porto Cristo. Reserva por WhatsApp."
pageCanonical: "https://jetexperiencemallorca.com/rutas-moto-agua-mallorca/"
permalink: /rutas-moto-agua-mallorca/
```

**Estructura HTML:**

```
Breadcrumb: Inicio > Rutas Moto de Agua Mallorca

H1: Rutas en Moto de Agua por Mallorca

Intro (2 párrafos):
  P1: Desde nuestra base en Costa de los Pinos tienes acceso a algunos de
  los tramos de costa más espectaculares de Mallorca. Puedes elegir una
  ruta corta para disfrutar las aguas de Cala Millor o aventurarte hasta
  el puerto natural de Porto Cristo con el Pack Especial de 2 horas.
  P2: Tú decides el ritmo y el destino. Nuestra única condición: licencia
  náutica y ganas de explorar el Mediterráneo.

Sección rutas (3 tarjetas por distancia):

  Ruta Corta — 1 hora recomendada
  "Cala Millor · Cala Bona · Sa Coma"
  Navega frente a las playas más populares de la costa levantina.
  Perfecto para primeras veces. Aguas tranquilas y vistas espectaculares.
  → Link a /jet-ski-cala-millor/

  Ruta Media — 1-2 horas
  "Costa de los Pinos · Cala Bona"
  Explora la zona exclusiva de Costa de los Pinos y el pintoresco
  puerto de Cala Bona. Aguas más tranquilas, ideal para grupos.
  → Link a /jet-ski-costa-de-los-pinos/

  Ruta Larga — 2 horas recomendadas
  "Porto Cristo · Coves del Drach"
  La ruta más aventurera: ~12 km de costa virgen hasta el puerto
  natural de Porto Cristo. Requiere experiencia. Pack Especial 2h.
  → Link a /jet-ski-porto-cristo/

Sección consejos de navegación:
  - Siempre en paralelo a la costa, máximo 1 milla náutica
  - Velocidad reducida cerca de bañistas y embarcaciones
  - Llevar agua y protección solar
  - Respetar señalización marítima

CTA WhatsApp

FAQ (3 preguntas):
  - ¿Puedo elegir mi propia ruta?
  - ¿Cuál es la ruta más popular?
  - ¿Se puede llegar a Porto Cristo en 1 hora?

Link: ← Volver al inicio

Schema: BreadcrumbList + Service
```

---

## Bloque en homepage — `src/index.njk`

**Ubicación:** entre la sección `id="experiencias"` (Tarifas) y la sección `id="caracteristicas"` (Qué incluye).

**HTML del bloque:**

```html
<section id="servicios" class="py-section bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label">Más información</span>
      <h2 class="section-title">Nuestros servicios</h2>
    </div>
    <div class="row g-4 justify-content-center">

      <div class="col-sm-6 col-lg-3">
        <a href="/alquiler-moto-agua-mallorca/" class="service-card">
          <span class="service-card__icon">🛥️</span>
          <h3 class="service-card__title">Alquiler Moto de Agua</h3>
          <p class="service-card__desc">Elige tu experiencia en el mar</p>
        </a>
      </div>

      <div class="col-sm-6 col-lg-3">
        <a href="/moto-agua-con-licencia-mallorca/" class="service-card">
          <span class="service-card__icon">📋</span>
          <h3 class="service-card__title">Con Licencia Náutica</h3>
          <p class="service-card__desc">Todo lo que necesitas saber</p>
        </a>
      </div>

      <div class="col-sm-6 col-lg-3">
        <a href="/alquiler-seadoo-mallorca/" class="service-card">
          <span class="service-card__icon">⚙️</span>
          <h3 class="service-card__title">Alquiler Sea-Doo</h3>
          <p class="service-card__desc">Los mejores modelos del mercado</p>
        </a>
      </div>

      <div class="col-sm-6 col-lg-3">
        <a href="/rutas-moto-agua-mallorca/" class="service-card">
          <span class="service-card__icon">🗺️</span>
          <h3 class="service-card__title">Rutas por Mallorca</h3>
          <p class="service-card__desc">Explora la costa este</p>
        </a>
      </div>

    </div>
  </div>
</section>
```

**CSS necesario** (añadir a `styles.css`):

```css
.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  background: var(--color-light);
  text-decoration: none;
  color: var(--color-dark);
  transition: transform var(--transition), box-shadow var(--transition);
  height: 100%;
}
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  color: var(--color-dark);
}
.service-card__icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.service-card__title {
  font-family: var(--font-title);
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.service-card__desc {
  font-size: 0.9rem;
  color: var(--color-muted, #666);
  margin: 0;
}
```

---

## Sitemap — `src/sitemap.xml`

Añadir 4 entradas nuevas con `priority: 0.8`:

```xml
<url>
  <loc>https://jetexperiencemallorca.com/alquiler-moto-agua-mallorca/</loc>
  <lastmod>2026-05-31</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://jetexperiencemallorca.com/moto-agua-con-licencia-mallorca/</loc>
  <lastmod>2026-05-31</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://jetexperiencemallorca.com/alquiler-seadoo-mallorca/</loc>
  <lastmod>2026-05-31</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://jetexperiencemallorca.com/rutas-moto-agua-mallorca/</loc>
  <lastmod>2026-05-31</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Schema JSON-LD por página

Mismo patrón que las páginas de localidad. Cada página incluye:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://jetexperiencemallorca.com/"},
        {"@type": "ListItem", "position": 2, "name": "[Título de la página]"}
      ]
    },
    {
      "@type": "Service",
      "name": "[Título de la página]",
      "provider": {"@id": "https://jetexperiencemallorca.com/#business"},
      "url": "https://jetexperiencemallorca.com/[slug]/"
    }
  ]
}
```

---

## Criterios de aceptación

- [ ] `npm run build` genera 12 páginas HTML (8 anteriores + 4 nuevas)
- [ ] Cada página de servicio tiene `<title>` y `<link canonical>` únicos
- [ ] Cada página tiene H1 con el keyword objetivo
- [ ] JSON-LD válido en cada página (BreadcrumbList + Service)
- [ ] Bloque "Nuestros servicios" visible en la homepage entre tarifas y características
- [ ] Las 4 tarjetas del bloque enlazan a las URLs correctas
- [ ] La página de rutas enlaza a las 5 páginas de localidad
- [ ] La página de licencia enlaza al pack especial (CTA WhatsApp)
- [ ] 4 URLs nuevas en `src/sitemap.xml` (total: 10 URLs)
- [ ] CSS `.service-card` añadido a `styles.css`
- [ ] Homepage y páginas de localidad sin cambios visuales no deseados
