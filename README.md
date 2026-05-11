# JetExperience Baleares — Web

Sitio web estático para el servicio de alquiler de jet ski en Cala Millor, Mallorca.

## Stack

- **HTML5** — estructura semántica single-page
- **Bootstrap 5.3** vía CDN con SRI
- **CSS3** custom properties (sin preprocesador)
- **JavaScript ES6** vanilla — i18n, WhatsApp debounce, nav móvil
- **Sin build step** — desplegable directamente como archivos estáticos

## Estructura

```
├── index.html                  # SPA principal
├── config.js                   # Datos de contacto centralizados
├── assets/
│   ├── css/styles.css          # Estilos globales y variables
│   ├── js/main.js              # Lógica de i18n y utilidades
│   ├── i18n/
│   │   ├── es.json             # Literales en español
│   │   └── en.json             # Literales en inglés
│   └── img/                    # Imágenes y favicon
├── legal/
│   ├── aviso-legal.html
│   └── politica-privacidad.html
├── _headers                    # Cabeceras de seguridad para Netlify
└── .htaccess                   # Cabeceras de seguridad para Apache
```

## Multiidioma

Los literales de la interfaz viven en `assets/i18n/es.json` y `en.json`. El HTML usa atributos `data-i18n` y `main.js` aplica las traducciones en tiempo de ejecución según el idioma del navegador o la selección del usuario.

## Datos de contacto

Todos los datos de contacto (teléfono, WhatsApp, email, coordenadas GPS) están centralizados en `config.js`. Edita únicamente ese archivo para actualizarlos en todo el sitio.

## Desarrollo local

```bash
python3 -m http.server 8080
# Abre http://localhost:8080
```

## Despliegue

El sitio se despliega automáticamente vía **GitHub Actions** a FTP en cada push a `main`. Ver `.github/workflows/deploy.yml`.

Los secrets necesarios en el repositorio:

| Secret | Descripción |
|--------|-------------|
| `FTP_SERVER` | Host FTP |
| `FTP_USERNAME` | Usuario FTP |
| `FTP_PASSWORD` | Contraseña FTP |
