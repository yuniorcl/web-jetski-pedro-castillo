# JetExperience Baleares — Fusión secciones Incluido + Seguridad — 2026-05-11

**Objetivo:** Reducir el número de secciones eliminando duplicidad visual y aprovechando el espacio horizontal disponible.

---

## Cambios realizados

### 1. Eliminación del punto "Monitor profesional" (`index.html`, `es.json`, `en.json`)
- Eliminado el ítem `safety.3` de la sección Seguridad en el HTML.
- Eliminada la clave `"safety.3"` en `assets/i18n/es.json` y `assets/i18n/en.json`.

### 2. Fusión de secciones Incluido y Seguridad (`index.html`)
- La sección `#seguridad` (bloque independiente tras `#proceso`) fue eliminada.
- El contenido de Seguridad fue integrado en la sección `#caracteristicas`, en una segunda columna (`col-lg-6`) con separador vertical (`border-start`).
- Ambas columnas se apilan automáticamente en móvil (Bootstrap responsive).
- Los títulos y `section-label` de cada bloque se mantienen individualmente dentro de su columna.

---

## Archivos modificados

| Archivo | Tipo de cambio |
|---------|---------------|
| `index.html` | Fusión de secciones, eliminación de `safety.3`, eliminación de `#seguridad` |
| `assets/i18n/es.json` | Eliminada clave `safety.3` |
| `assets/i18n/en.json` | Eliminada clave `safety.3` |
