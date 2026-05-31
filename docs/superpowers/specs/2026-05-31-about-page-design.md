# Spec: Página Sobre Nosotros
**Fecha:** 2026-05-31
**Rama:** `feature/arquitectura-multipagina`

---

## Objetivo

Crear la página `/sobre-nosotros/` con contenido genérico centrado en valores y confianza. Sin datos personales inventados ni historia detallada.

## URL y SEO

```yaml
permalink: /sobre-nosotros/
pageTitle: "Sobre Nosotros | JetExperience Baleares"
pageDescription: "Somos un servicio de alquiler de motos de agua en la costa levantina de Mallorca. Seguridad, calidad y cercanía en cada experiencia."
pageCanonical: "https://jetexperiencemallorca.com/sobre-nosotros/"
```

## Estructura de contenido

```
Breadcrumb: Inicio > Sobre Nosotros

H1: Sobre Nosotros — JetExperience Baleares

Intro (2 párrafos):
  P1: Somos un servicio de alquiler de motos de agua especializado en la
  costa levantina de Mallorca. Con base en Costa de los Pinos, ofrecemos
  experiencias seguras y memorables en el Mar Mediterráneo desde
  Cala Millor, Cala Bona, Sa Coma y Porto Cristo.
  
  P2: Nuestra misión es simple: que cada cliente viva la mejor experiencia
  posible en el mar, con equipamiento de primer nivel y un servicio
  cercano y profesional. Con chaleco, briefing y motos Sea-Doo revisadas
  diariamente, tu seguridad es nuestra prioridad.

4 valores (tarjetas con icono, título y descripción):
  🛡️ Seguridad primero
      Chaleco salvavidas, briefing obligatorio y normas claras antes
      de cada salida. Tu tranquilidad es lo más importante.

  ⭐ Calidad garantizada
      Flota Sea-Doo de última generación, revisada diariamente.
      Solo los mejores equipos para la mejor experiencia.

  📍 Servicio cercano
      Entrega directamente en tu playa. Atención personalizada
      y respuesta en menos de 2 horas por WhatsApp.

  🌊 Costa levantina
      Conocemos cada rincón del litoral desde Cala Millor hasta
      Porto Cristo. Te orientamos para que aproveches al máximo
      tu tiempo en el mar.

3 reseñas seleccionadas (las mismas que aparecen en el homepage):
  - Mar C.: "Una experiencia increíble de principio a fin..."
  - Mario G.: "Una experiencia única, nunca habíamos montado en motos de agua..."
  - Saray B.: "Excelente servicio, motos súper modernas con altavoces..."

CTA WhatsApp: "¿Hablamos? Reserva tu experiencia"

Link: ← Volver al inicio

Schema JSON-LD:
  Solo BreadcrumbList — el negocio ya está definido con @id en la homepage.
```

## Archivos

| Acción | Archivo |
|---|---|
| Crear | `src/sobre-nosotros.njk` |
| Modificar | `src/sitemap.xml` — añadir URL |

## Criterios de aceptación

- [ ] `npm run build` genera 13 páginas HTML
- [ ] `<title>` y canonical únicos
- [ ] H1 presente
- [ ] 4 tarjetas de valores
- [ ] 3 reseñas
- [ ] CTA WhatsApp funcional (`data-whatsapp`)
- [ ] JSON-LD válido
- [ ] URL en sitemap
