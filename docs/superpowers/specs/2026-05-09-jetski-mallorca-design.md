# Spec: Mallorca JetSki — Web Estática

**Fecha:** 2026-05-09  
**Estado:** Aprobado  
**Proyecto:** Web estática de alquiler de jet ski en Cala Millor, Mallorca

---

## 1. Identidad de marca

| Campo | Valor |
|-------|-------|
| Nombre | Mallorca JetSki |
| Zona | Cala Millor, Mallorca |
| Teléfono / WhatsApp | +34 600 000 000 *(placeholder — actualizar antes de publicar)* |
| Email | info@mallorcajetski.com *(placeholder)* |
| Mensaje WhatsApp predefinido | "Hola, quiero reservar una experiencia de jet ski. ¿Me podéis informar de disponibilidad?" |
| Logo | Tipográfico CSS — dos variantes (oscura / clara) |
| Diferenciador clave | **Sin licencia náutica** + instructor incluido |

---

## 2. Stack tecnológico

- **HTML5** semántico — estructura única `index.html`
- **Bootstrap 5.3.x** vía CDN con integridad SRI (~45KB gzip) — grid responsive y componentes base
- **CSS3 custom** encima de Bootstrap — paleta, tipografía, animaciones
- **JavaScript vanilla** — i18n, cambio de idioma, WhatsApp debounce, nav móvil, honeypot
- **Google Fonts CDN** — Montserrat (títulos) + Open Sans (cuerpo)
- Sin frameworks pesados, sin build step, deployable en cualquier hosting estático
- Animaciones: **CSS transitions únicamente** — sin GSAP ni librerías de animación externas

---

## 3. Paleta de color

| Variable CSS | Hex | Uso |
|---|---|---|
| `--color-dark` | `#03045E` | Header, footer, fondos oscuros |
| `--color-ocean` | `#0077B6` | Secciones alternas, bordes |
| `--color-cta` | `#FF6B35` | Botones CTA, acentos, badges |
| `--color-white` | `#FFFFFF` | Texto sobre oscuro, fondos limpios |
| `--color-light` | `#F8F9FA` | Fondos alternos suaves |
| `--color-text` | `#1A1A2E` | Cuerpo de texto principal |

---

## 4. Tipografía

| Fuente | Uso | Pesos |
|--------|-----|-------|
| Montserrat | Títulos H1–H3, botones, logo, etiquetas | 400, 600, 700, 800 |
| Open Sans | Cuerpo de texto, descripciones, FAQs | 400, 600 |

---

## 5. Estructura de archivos

```
/
├── index.html
├── config.js                        ← datos de contacto (teléfono, email, WhatsApp)
├── assets/
│   ├── css/styles.css               ← CSS custom sobre Bootstrap
│   ├── js/main.js                   ← i18n, interacciones, seguridad
│   ├── i18n/
│   │   ├── es.json                  ← literales español (default)
│   │   └── en.json                  ← literales inglés
│   ├── img/                         ← imágenes optimizadas con lazy loading
│   └── icons/                       ← SVG: WhatsApp, teléfono, ubicación, redes
├── legal/
│   ├── aviso-legal.html
│   └── politica-privacidad.html
└── docs/                            ← histórico del proyecto
    └── superpowers/specs/
```

---

## 6. Secciones de la página (orden de scroll)

| # | Sección | Fondo | Notas clave |
|---|---------|-------|-------------|
| 1 | **Header** | `#03045E` sticky | Logo + nav + "Reservar" naranja + selector ES/EN |
| 2 | **Hero — slideshow CSS** | Slideshow automático de imágenes marinas | H1 SEO, 2 CTAs, 4 badges de confianza. Slideshow CSS puro (3 imágenes que rotan con `@keyframes`), sin JS. Fallback: imagen estática. |
| 3 | **Sección tipográfica "JET SKI"** | `#FFFFFF` | Texto masivo "JET SKI" / "MALLORCA" en tipografía bold + imagen de la moto solapada en CSS. Impacto visual puro, sin contenido de negocio. |
| 4 | **Feature: servicio en detalle** | `#F8F9FA` | 2 columnas: texto izquierda (título H2 + descripción + CTA WhatsApp) + grid 2×2 de fotos de motos en acción a la derecha. |
| 5 | **Experiencias / Tarifas** | `#03045E` (fondo sección) | 4 tarjetas con **imagen grande a sangre**, overlay gradiente azul oscuro desde abajo, badge duración naranja, precio blanco + botón "Reservar →" naranja. Grid 2×2 desktop, 1 col móvil. Hover: zoom suave CSS. |
| 6 | **Características del servicio** | `#FFFFFF` | Card centrada con checklist: chaleco ✓, entrega en punto acordado ✓, instructor ✓, briefing ✓. Items con ✗ si aplica (ej. gasolina no incluida). |
| 7 | **Nuestra flota** | `#F8F9FA` | Modelo específico + specs técnicos (3 iconos: casco, motor, consumo) + foto grande de la moto. Texto descriptivo del modelo. |
| 8 | **¿Por qué elegirnos?** | `#03045E` | 6 ventajas en grid 3×2 con iconos |
| 9 | **Reseñas de clientes** | `#FFFFFF` | 3–4 tarjetas estáticas de reseñas con nombre, estrellas ⭐⭐⭐⭐⭐ y comentario. Sin plugin externo. |
| 10 | **Proceso de reserva** | `#0077B6` | 4 pasos numerados en naranja |
| 11 | **Seguridad** | `#F8F9FA` | Lista de garantías con iconos |
| 12 | **FAQ** | `#FFFFFF` | Acordeón Bootstrap, 6 preguntas |
| 13 | **Galería** | `#F8F9FA` | Grid 3×2 responsive con lightbox CSS-only vía `:target` |
| 14 | **Contacto + Google Maps** | `#FFFFFF` | Última sección antes del footer. Mapa embed grande (400px alto), dirección, teléfono, email, botón "Cómo llegar". Formulario de contacto/reserva con honeypot. |
| 15 | **CTA Final** | Gradiente naranja | 2 botones: WhatsApp + Llamar |
| 16 | **Footer** | `#03045E` | Contacto, links rápidos, legal, copyright |

---

## 7. i18n (multiidioma)

- Idiomas: **ES** (default) + **EN**
- Todos los literales en `assets/i18n/es.json` y `en.json`
- HTML usa atributos `data-i18n="clave"` — sin texto hardcodeado
- JS detecta `navigator.language` al cargar, fallback a ES
- Elección del usuario persiste en `localStorage`
- El atributo `lang` del `<html>` se actualiza dinámicamente (SEO)
- Imágenes sin texto para no multiplicar assets por idioma

---

## 8. SEO

- Un único `<h1>`: *"Alquiler de Jet Ski en Cala Millor"*
- `<h2>` por sección con keywords locales
- `<meta name="description">` orientada a conversión con keyword principal
- Schema.org `LocalBusiness` + `TouristAttraction` en JSON-LD inline
- Open Graph completo (título, descripción, imagen, URL)
- `lang` del HTML actualizado con el idioma activo
- `alt` en todas las imágenes (descriptivo, en inglés)
- `loading="lazy"` en todas las imágenes excepto hero
- URLs con anclas semánticas: `#precios`, `#experiencias`, `#galeria`, `#contacto`
- `<link rel="canonical">` apuntando al dominio definitivo

---

## 9. Formulario de contacto / reserva

Campos:
- Nombre
- Teléfono
- Fecha deseada
- Tipo de experiencia (select)
- Mensaje

Preparado para conectar con **Formspree** o **Netlify Forms** — el `action` del form apunta a un placeholder que se configura post-deploy.

Honeypot: campo `<input name="website" style="display:none">` para filtrar bots.

---

## 10. Protección anti-scraping / seguridad básica

| Medida | Implementación |
|--------|---------------|
| Email ofuscado | Renderizado desde `config.js` vía JS, no en HTML fuente |
| Honeypot | Campo invisible en el formulario |
| Debounce WhatsApp | 2s entre clics para evitar spam |
| Cabeceras HTTP | Recomendadas en `_headers` (Netlify) o `.htaccess` |
| Páginas legales | `<meta name="robots" content="noindex">` |

---

## 11. Rendimiento

- Bootstrap 5 CDN con integridad SRI
- Google Fonts con `display=swap`
- `loading="lazy"` en imágenes
- CSS custom minimalista (variables, sin duplicación)
- JS vanilla sin dependencias externas adicionales
- Objetivo: Lighthouse Performance > 90

---

## 12. Precios (placeholders de mercado)

| Experiencia | Duración | Precio |
|-------------|----------|--------|
| Ruta básica | 30 min | desde 60€ |
| Ruta clásica | 60 min | desde 100€ |
| Ruta premium / Sunset | 90 min | desde 140€ |
| Pack especial | 2h + Sunset | desde 200€ |

Nota visible en web: *"Precios orientativos. Consulta disponibilidad y condiciones."*

---

## 13. Configuración centralizada (`config.js`)

```javascript
const CONFIG = {
  phone: '+34600000000',
  phoneDisplay: '+34 600 000 000',
  whatsapp: '34600000000',
  whatsappMsg: 'Hola, quiero reservar una experiencia de jet ski. ¿Me podéis informar de disponibilidad?',
  email: 'info@mallorcajetski.com',
  location: 'Cala Millor, Mallorca',
  googleMapsUrl: 'https://maps.google.com/?q=Cala+Millor+Mallorca',
};
```

---

## 14. Entregables

1. `index.html` — estructura completa con 16 secciones
2. `assets/css/styles.css` — sistema de diseño + secciones + slideshow hero
3. `assets/js/main.js` — i18n, interacciones, seguridad
4. `config.js` — datos de contacto centralizados
5. `assets/i18n/es.json` + `en.json` — todos los literales
6. `legal/aviso-legal.html` + `politica-privacidad.html`
7. Instrucciones de deploy para hosting estático
8. Recomendaciones SEO finales

---

## 15. Decisiones tomadas y justificación

| Decisión | Alternativa descartada | Razón |
|----------|----------------------|-------|
| Bootstrap 5 CDN | CSS puro / Tailwind CDN | Responsive maduro, sin build step, mantenible |
| Paleta B (naranja + azul noche) | Paleta A (todo azules) | Diferenciación visual respecto a competencia |
| Logo tipográfico CSS | Logo imagen | Sin dependencias, fácil de cambiar, escala bien |
| `config.js` en lugar de `.env` | Variables .env | Los navegadores no leen .env en estático |
| i18n con JSON + data-i18n | i18n framework (i18next) | Sin dependencias extra, vanilla, suficiente |
| Slideshow CSS puro en hero | Vídeo MP4 / librería slider | Sin assets de vídeo propios; CSS puro es más ligero |
| Tarjetas con foto a sangre + overlay | Tabla de precios | Más visual, más conversión, inspira el servicio |
| Reseñas estáticas HTML | TrustIndex / Google widget | Sin dependencia externa; actualizable manualmente |
| 16 secciones (vs 12 iniciales) | Layout más corto | Referencia del sector + enriquecimiento de contenido SEO |

---

## 16. Estado de secciones — checklist de cierre

Última actualización: **2026-05-10**

| Sección | Estado | Notas |
|---|---|---|
| Hero / Banner | ✅ Completado | Slideshow fotos reales · CTA redirige a #contacto |
| Nuestro Servicio | ✅ Completado | Fotos reales · CTA a #experiencias |
| Experiencias / Tarifas | ✅ Completado | Fotos reales · icono ⓘ · WhatsApp específico por tarjeta · **tooltip pendiente** |
| Características | ✅ OK | Sin cambios necesarios |
| Flota | ✅ OK | Sin cambios necesarios |
| Por qué elegirnos | ✅ OK | Sin cambios necesarios |
| Reseñas | ⏸ Pendiente | Pospuesto — a trabajar en sesión futura |
| Proceso | ✅ OK | Sin cambios necesarios |
| Seguridad | ✅ OK | Sin cambios necesarios |
| FAQ | 🔲 Pendiente | Revisar en próxima sesión |
| Galería | ✅ Completado | 12 fotos reales · slider paginado con flechas naranja |
| Contacto | ✅ OK | Sin cambios necesarios |
| CTA Final | 🔲 Pendiente | Revisar en próxima sesión |
| Footer | 🔲 Pendiente | Revisar en próxima sesión |

### Pendientes globales antes del cierre

- [ ] **Tooltip ⓘ** en tarjetas — infraestructura lista, display no funciona (ver `2026-05-10-seccion-tarifas.md`)
- [ ] **Reseñas** — contenido real de clientes
- [ ] **FAQ** — revisión de contenido
- [ ] **CTA Final** — revisión
- [ ] **Footer** — revisión
- [ ] **Datos reales en `config.js`** — teléfono, email, Google Maps embed
- [ ] **Deploy** — hosting estático + dominio
