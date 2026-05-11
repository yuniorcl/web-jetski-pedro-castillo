# Sesión: Ajustes sección Hero / Banner

**Fecha:** 2026-05-10  
**Estado:** ✅ Completado

---

## Cambios realizados

### 1. Botón "Reservar por WhatsApp" → scroll a #contacto

**Motivación:** El botón principal del hero lanzaba WhatsApp directamente, saltándose el formulario de contacto. El objetivo es llevar al usuario primero a la sección de contacto para que pueda elegir la experiencia y enviar el mensaje con los datos completos.

**Cambio en `index.html` (línea 146):**

```html
<!-- Antes -->
<a href="#" class="btn-cta" data-whatsapp data-i18n="hero.cta.whatsapp">Reservar por WhatsApp</a>

<!-- Después -->
<a href="#contacto" class="btn-cta" data-i18n="hero.cta.whatsapp">Reservar por WhatsApp</a>
```

- Se eliminó `data-whatsapp` para que JS no sobreescriba el `href` con el mensaje genérico
- Se cambió `href="#"` por `href="#contacto"` para hacer scroll suave a la sección de contacto

**Flujo resultante:**
Hero → click "Reservar por WhatsApp" → scroll a #contacto → usuario rellena formulario → envío por WhatsApp con datos completos
