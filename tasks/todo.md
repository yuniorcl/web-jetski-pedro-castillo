# Ocultar oferta de "obtención de licencia náutica"

Objetivo: dejar de exponer en la web (ES/EN/DE) que ofrecemos el pack de curso
de licencia náutica + alquiler. Se elimina el código (no solo se comenta en HTML,
para que no quede rastro ni en el "ver código fuente"). Todo queda recuperable
vía `git log` / `git revert` de este commit — por eso el checklist de abajo sirve
como mapa exacto de qué tocar cuando lo reactivemos.

Criterio aplicado: se oculta todo lo que **vende/ofrece** el pack de licencia.
Se mantiene la información general de "qué licencia necesitas para pilotar"
(no es una venta, es un requisito legal informativo).

## Checklist

### Página /moto-agua-con-licencia-mallorca/ (ES) y equivalentes EN/DE
- [x] `src/moto-agua-con-licencia-mallorca.njk`
  - [x] Párrafo "Si aún no tienes licencia, tenemos el pack perfecto..." + botón "Ver pack licencia + alquiler"
  - [x] Sección completa `<section id="pack-licencia">` (Pack Licencia Náutica + 2h Jet Ski, 260€)
  - [x] FAQ "¿Puedo alquilar sin licencia?": quitada la frase "Si quieres pilotar tú, te recomendamos nuestro pack Licencia + 2h Jet Ski por 260€."
  - [x] FAQ "¿Dónde puedo obtener la licencia náutica en Mallorca?": quitada la frase "Nosotros también ofrecemos el pack completo: curso homologado + 2 horas de alquiler. Consúltanos por WhatsApp."
  - [x] `pageDescription` (meta description) también ajustada — mencionaba el pack de 260€
- [x] `src/en/jet-ski-with-nautical-license-mallorca.njk` (mismos puntos + meta description, versión inglés)
- [x] `src/de/jet-ski-with-nautical-license-mallorca.njk` (mismos puntos + meta description, versión alemán)

### Schema JSON-LD global (se sirve en TODAS las páginas)
- [x] `src/_includes/head.njk` — quitado el objeto `Offer` "Oferta Especial: Curso Licencia Náutica + 2h Jet Ski" (precio 260) del array `offers`.

### Home (tarjeta de oferta destacada)
- [x] `src/index.njk` — quitada la Card 4 "Oferta Especial" completa (bloque `exp-card--offer`)
- [x] `src/en/index.njk` — misma card, versión inglés
- [x] `src/de/index.njk` — misma card, versión alemán
- Se mantiene la service-card "Con Licencia Náutica" que enlaza a la página informativa — no vende nada, solo informa del requisito legal

### Páginas de alquiler (tarjeta/línea de precio del pack)
- [x] `src/alquiler-moto-agua-mallorca.njk` — quitada tarjeta "Curso licencia náutica incluido / Pack · 260€"
- [x] `src/en/jet-ski-rental-mallorca.njk` — misma tarjeta, inglés
- [x] `src/de/jet-ski-rental-mallorca.njk` — misma tarjeta, alemán
- [x] `src/alquiler-seadoo-mallorca.njk` — quitada línea "Pack Licencia + 2h — 260€" del listado de precios
- [x] `src/en/sea-doo-rental-mallorca.njk` — misma línea, inglés
- [x] `src/de/sea-doo-rental-mallorca.njk` — misma línea, alemán

### Página de rutas
- [x] `src/rutas.njk` — en la FAQ "¿Hace falta licencia?" quitada la coletilla ", o consultarnos por nuestro pack de curso de licencia náutica" (acordeón visible + JSON-LD FAQPage duplicado)

## Verificación
- [x] `npx eleventy` sin errores (36 archivos generados correctamente)
- [x] `grep -rn "260€\|pack.*licenc" _site` sobre el HTML compilado → sin resultados, no queda ninguna mención al pack en ninguna página ni idioma
- [x] `grep -rn "260" src` → sólo quedan coincidencias del teléfono (+34618842609) y de la query string de versión de assets (`?v=202605131109`), nada relacionado con el pack

## Tarea pendiente (para reactivar más adelante)
- [ ] **Reactivar el pack de licencia náutica** cuando el negocio lo decida:
  revertir el commit de este cambio (`git revert <hash>`) o restaurar manualmente
  cada punto del checklist de arriba a partir del contenido que tenía antes
  (visible en el historial de git / diff de este commit).

## Revisión

Se ocultó (eliminó del código fuente, no comentado) todo lo que ofertaba el pack de
curso de licencia náutica + 2h de alquiler (260€) en las 3 versiones de idioma
(ES/EN/DE): la sección dedicada y su CTA en la página de licencia, dos frases de
venta en FAQs de esa misma página, el `Offer` de 260€ en el JSON-LD global (se
servía en todas las páginas del sitio vía `head.njk`), la card "Oferta Especial"
del home, las tarjetas/líneas de precio del pack en las páginas de alquiler
(moto de agua y Sea-Doo), y la mención del pack en la FAQ de licencia de
`rutas.njk`. También se limpiaron las `pageDescription` (meta description) de la
página de licencia, que mencionaban el precio del pack.

Se mantuvo intacta toda la información legal/informativa sobre qué licencia se
necesita para pilotar (no es una venta, es un requisito legal) y el enlace del
home a la página informativa de licencia.

Build (`npx eleventy`) sin errores y verificación sobre el HTML compilado
(`_site`) confirman que no queda ninguna mención al pack ni al precio de 260€
en ninguna página ni idioma.

**Pendiente:** falta la tarea de reactivación (ver más abajo) — sólo se reactiva
cuando el negocio lo decida. Aún no se ha hecho commit; queda pendiente
confirmación del usuario para el commit/push.
