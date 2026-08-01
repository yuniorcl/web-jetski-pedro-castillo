# Rollback: Pack Licencia Náutica + 2h (260€)

**Fecha del cambio:** 2026-08-01
**Motivo:** se ocultó de toda la web (ES/EN/DE) la oferta de "obtención de
licencia náutica" (curso homologado + 2h de alquiler por 260€). Se mantuvo
toda la información legal/informativa sobre qué licencia se necesita para
pilotar — solo se quitó lo que **vendía/ofertaba** el pack.
**Ticket/contexto:** ver `tasks/todo.md` en la raíz del repo para el detalle
de la implementación.

Este documento existe para que reactivar el pack sea rápido cuando el negocio
lo decida, sin tener que reconstruir el contenido desde cero.

---

## Opción rápida: aplicar el patch (recomendada)

Junto a este archivo hay `pack-licencia-nautica.patch`, que es el diff exacto
que se aplicó para ocultar el pack. Para restaurar todo de una vez:

```bash
cd /ruta/al/repo
git apply -R docs/rollback/pack-licencia-nautica.patch
```

`-R` aplica el patch **en reversa**, es decir, vuelve a insertar todo el
contenido que se quitó. Si el patch no aplica limpio (porque el archivo ha
cambiado desde entonces), usa el checklist manual más abajo como referencia
del contenido a reinsertar.

## Opción alternativa: git revert

Si el cambio de ocultación ya está commiteado, también puedes localizar el
commit y revertirlo:

```bash
git log --oneline -- src/moto-agua-con-licencia-mallorca.njk src/_includes/head.njk
git revert <hash-del-commit-de-ocultacion>
```

---

## Checklist manual de restauración (por si el patch no aplica)

### 1. Página de licencia — ES `src/moto-agua-con-licencia-mallorca.njk`

- `pageDescription` (frontmatter), volver a:
  `"Para alquilar una moto de agua en Mallorca necesitas licencia náutica. Descubre qué licencia es válida y nuestro pack especial Licencia + 2h por 260€."`

- Después del párrafo `<p class="feature-desc">En España, pilotar...</p>` (dentro de la sección hero), reinsertar:
  ```html
  <p class="feature-desc">Si aún no tienes licencia, tenemos el pack perfecto: curso de licencia náutica homologada más 2 horas de alquiler por solo 260€.</p>
  <a href="#pack-licencia" class="btn-cta mt-3">Ver pack licencia + alquiler</a>
  ```

- Antes de la sección `<section class="py-section bg-light-brand">` que contiene el FAQ, reinsertar la sección completa:
  ```html
  <section id="pack-licencia" class="py-section bg-dark-brand">
    <div class="container text-center">
      <span class="section-label" style="color:rgba(255,255,255,0.7)">Oferta especial</span>
      <h2 class="section-title section-title--light mb-3">Pack Licencia Náutica + 2h Jet Ski</h2>
      <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;max-width:560px;margin:0 auto 1.5rem;">Curso homologado de licencia náutica incluido más 2 horas de alquiler en Cala Millor. Todo por 260€.</p>
      <div style="font-size:3rem;font-weight:800;color:#fff;margin-bottom:1.5rem;">260€</div>
      <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Consultar disponibilidad →</a>
    </div>
  </section>
  ```

- FAQ `#faqS2b` ("¿Puedo alquilar una moto de agua sin licencia?"), volver a:
  `No es posible pilotar sin licencia. Sin embargo, puedes ir como pasajero acompañando a alguien con licencia. Si quieres pilotar tú, te recomendamos nuestro pack Licencia + 2h Jet Ski por 260€.`

- FAQ `#faqS2c` ("¿Dónde puedo obtener la licencia náutica en Mallorca?"), volver a:
  `Existen varias escuelas náuticas en Mallorca que ofrecen el curso de Licencia de Navegación. Nosotros también ofrecemos el pack completo: curso homologado + 2 horas de alquiler. Consúltanos por WhatsApp.`

### 2. Página de licencia — EN `src/en/jet-ski-with-nautical-license-mallorca.njk`

Mismos 5 puntos, en inglés:
- `pageDescription`: `"To rent a jet ski in Mallorca you need a nautical licence. Find out which licence is valid and our special Licence + 2h pack for 260€."`
- Párrafo + botón hero:
  ```html
  <p class="feature-desc">If you don't have a licence yet, we have the perfect pack: a certified nautical licence course plus 2 hours of rental for just 260€.</p>
  <a href="#pack-licence" class="btn-cta mt-3">See licence + rental pack</a>
  ```
- Sección `#pack-licence`:
  ```html
  <section id="pack-licence" class="py-section bg-dark-brand">
    <div class="container text-center">
      <span class="section-label" style="color:rgba(255,255,255,0.7)">Special offer</span>
      <h2 class="section-title section-title--light mb-3">Nautical Licence + 2h Jet Ski Pack</h2>
      <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;max-width:560px;margin:0 auto 1.5rem;">Certified nautical licence course plus 2 hours of rental in Cala Millor. All for 260€.</p>
      <div style="font-size:3rem;font-weight:800;color:#fff;margin-bottom:1.5rem;">260€</div>
      <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Check availability →</a>
    </div>
  </section>
  ```
- FAQ `#faqS2b`: `You cannot ride without a licence. However, you can ride as a passenger with a licensed rider. If you want to ride yourself, we recommend our Licence + 2h Jet Ski Pack for 260€.`
- FAQ `#faqS2c`: `There are several nautical schools in Mallorca offering the Navigation Licence course. We also offer the complete pack: certified course + 2 hours of rental. Ask us via WhatsApp.`

### 3. Página de licencia — DE `src/de/jet-ski-with-nautical-license-mallorca.njk`

Mismos 5 puntos, en alemán:
- `pageDescription`: `"Für den Jet-Ski-Verleih auf Mallorca ist ein Bootsführerschein erforderlich. Erfahren Sie, welcher Führerschein gültig ist, und unser Sonderpack Führerschein + 2h für 260€."`
- Párrafo + botón hero:
  ```html
  <p class="feature-desc">Wenn Sie noch keinen Führerschein haben, haben wir das perfekte Pack: einen zertifizierten Bootsführerscheinkurs plus 2 Stunden Verleih für nur 260€.</p>
  <a href="#pack-licence" class="btn-cta mt-3">Führerschein + Verleih Pack ansehen</a>
  ```
- Sección `#pack-licence`:
  ```html
  <section id="pack-licence" class="py-section bg-dark-brand">
    <div class="container text-center">
      <span class="section-label" style="color:rgba(255,255,255,0.7)">Sonderangebot</span>
      <h2 class="section-title section-title--light mb-3">Bootsführerschein + 2h Jet-Ski Pack</h2>
      <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;max-width:560px;margin:0 auto 1.5rem;">Zertifizierter Bootsführerscheinkurs plus 2 Stunden Verleih in Cala Millor. Alles für 260€.</p>
      <div style="font-size:3rem;font-weight:800;color:#fff;margin-bottom:1.5rem;">260€</div>
      <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Verfügbarkeit prüfen →</a>
    </div>
  </section>
  ```
- FAQ `#faqS2b`: `Ohne Führerschein dürfen Sie nicht fahren. Als Passagier können Sie jedoch mit einem lizenzierten Fahrer mitfahren. Wenn Sie selbst fahren möchten, empfehlen wir unser Führerschein + 2h Jet-Ski Pack für 260€.`
- FAQ `#faqS2c`: `Es gibt mehrere Segelschulen auf Mallorca, die den Sportbootführerscheinkurs anbieten. Wir bieten auch das Komplettpaket an: zertifizierter Kurs + 2 Stunden Verleih. Fragen Sie uns per WhatsApp.`

### 4. Schema JSON-LD global `src/_includes/head.njk`

Dentro del array `offers` (dentro del bloque `@type: LocalBusiness`), entre el
`Offer` de "Pack Especial Jet Ski 2 horas" (185€) y el de "Ruta Larga en
Familia" (275€), reinsertar:

```json
{
  "@type": "Offer",
  "name": "Oferta Especial: Curso Licencia Náutica + 2h Jet Ski",
  "description": "Pack completo: curso de licencia náutica homologada más 2 horas de alquiler de moto de agua en Cala Millor, Mallorca.",
  "price": "260",
  "priceCurrency": "EUR",
  "availability": "https://schema.org/InStock",
  "url": "https://jetexperiencemallorca.com/#experiencias"
},
```

Esto se sirve en **todas** las páginas del sitio (ES/EN/DE) vía este include.

### 5. Home — Card 4 "Oferta Especial"

Reinsertar como última tarjeta (después de la Card 3 "Ruta Larga en
Familia") dentro del carrusel/grid de experiencias:

- **ES** `src/index.njk`:
  ```html
  <!-- Card 4: Oferta Especial -->
  <div class="exp-card--offer">
    <div class="exp-card--offer__img-wrap">
      <img src="/assets/img/oferta-especial.jpg"
        alt="Oferta especial 260€ curso licencia náutica + 2h moto de agua Mallorca" loading="lazy"
        width="1024" height="1355"
        class="exp-card--offer__img">
    </div>
    <div class="exp-card--offer__overlay"></div>
    <span class="exp-card--offer__badge" data-i18n="exp.oferta.badge">🔥 OFERTA</span>
    <div class="exp-card--offer__strip">
      <p class="exp-card--offer__title" data-i18n="exp.oferta.title">Oferta Especial</p>
      <a href="#" class="btn-whatsapp" data-whatsapp data-exp-key="oferta" data-i18n="exp.oferta.cta">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Consultar →
      </a>
    </div>
  </div>
  ```
- **EN** `src/en/index.njk`: mismo bloque, sin `data-i18n` en badge/title, texto
  `🔥 OFFER` / `Special Offer` / `Ask us →` (mismo `alt`, cambiando a "Special
  offer 260€ nautical licence course + 2h jet ski Mallorca").
- **DE** `src/de/index.njk`: mismo bloque con `data-i18n="exp.oferta.badge"` →
  `🔥 ANGEBOT`, `data-i18n="exp.oferta.title"` → `Sonderangebot`, y
  `<span data-i18n="exp.oferta.cta">Anfragen →</span>` dentro del link.

Nota: las claves i18n (`exp.oferta.*`) **no se tocaron** en `src/assets/i18n/*.json`,
siguen existiendo — no hace falta restaurarlas.

### 6. Páginas de alquiler — tarjeta de precio del pack

Dentro del grid de precios (`row g-4 justify-content-center`), como tercera
tarjeta después de "2h · 185€":

- **ES** `src/alquiler-moto-agua-mallorca.njk`:
  ```html
  <div class="col-md-4">
    <div style="border-radius:16px;overflow:hidden;background:#1a3a55;padding:2rem;text-align:center;">
      <p style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Curso licencia náutica incluido</p>
      <span style="font-size:1.8rem;font-weight:800;color:#fff;">Pack · 260€</span>
    </div>
  </div>
  ```
- **EN** `src/en/jet-ski-rental-mallorca.njk`:
  ```html
  <div class="col-md-4">
    <div style="border-radius:16px;background:#1a3a55;padding:2rem;text-align:center;">
      <p style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Nautical licence course included</p>
      <span style="font-size:1.8rem;font-weight:800;color:#fff;">Pack · 260€</span>
    </div>
  </div>
  ```
- **DE** `src/de/jet-ski-rental-mallorca.njk`:
  ```html
  <div class="col-md-4">
    <div style="border-radius:16px;background:#1a3a55;padding:2rem;text-align:center;">
      <p style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Bootsführerscheinkurs inklusive</p>
      <span style="font-size:1.8rem;font-weight:800;color:#fff;">Pack · 260€</span>
    </div>
  </div>
  ```

### 7. Páginas Sea-Doo — línea de precio del pack

Al final del listado `<ul class="checklist">` de precios, después de "2
horas/hours/Stunden — 185€":

- **ES** `src/alquiler-seadoo-mallorca.njk`: `<li class="checklist__item checklist__item--yes">Pack Licencia + 2h — 260€</li>`
- **EN** `src/en/sea-doo-rental-mallorca.njk`: `<li class="checklist__item checklist__item--yes">Licence + 2h Pack — 260€</li>`
- **DE** `src/de/sea-doo-rental-mallorca.njk`: `<li class="checklist__item checklist__item--yes">Führerschein + 2h Pack — 260€</li>`

### 8. Página de rutas `src/rutas.njk`

Aparece **dos veces** (acordeón visible + JSON-LD `FAQPage` duplicado), FAQ
"¿Hace falta licencia?". Volver a:
`Sí, para pilotar necesitas licencia de navegación o titulación superior. Si no la tienes, puedes ir como pasajero acompañando a alguien con licencia, o consultarnos por nuestro pack de curso de licencia náutica.`

---

## Verificación tras restaurar

- [ ] `npx eleventy` sin errores
- [ ] `grep -rn "260€" _site` muestra de nuevo el pack en las páginas esperadas
- [ ] Revisar visualmente `/moto-agua-con-licencia-mallorca/`, home y páginas
      de alquiler en los 3 idiomas
