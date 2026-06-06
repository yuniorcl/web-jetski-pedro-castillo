# Design: Add German (DE) Language Support

**Date:** 2026-06-06
**Status:** Approved

---

## Overview

Add German as a third language to the JetExperience Baleares website, following the existing `/en/` pattern exactly. German content will live under `/de/`, with full SEO support via hreflang tags and German-language meta titles/descriptions.

---

## Architecture

### New files (17)

| File | Purpose |
|---|---|
| `src/assets/i18n/de.json` | 137 German UI strings (mirrors `en.json` structure) |
| `src/_data/locationsDe.json` | 5 location entries with German content |
| `src/_includes/location-de.njk` | German location page template (mirrors `location-en.njk`) |
| `src/de/index.njk` | German homepage → `/de/` |
| `src/de/about-us.njk` | About page → `/de/about-us/` |
| `src/de/jet-ski-cala-millor.njk` | Location page → `/de/jet-ski-cala-millor/` |
| `src/de/jet-ski-cala-bona.njk` | Location page → `/de/jet-ski-cala-bona/` |
| `src/de/jet-ski-sa-coma.njk` | Location page → `/de/jet-ski-sa-coma/` |
| `src/de/jet-ski-porto-cristo.njk` | Location page → `/de/jet-ski-porto-cristo/` |
| `src/de/jet-ski-costa-de-los-pinos.njk` | Location page → `/de/jet-ski-costa-de-los-pinos/` |
| `src/de/jet-ski-rental-mallorca.njk` | Informational rental page |
| `src/de/jet-ski-routes-mallorca.njk` | Routes page |
| `src/de/jet-ski-with-nautical-license-mallorca.njk` | Nautical licence page |
| `src/de/sea-doo-rental-mallorca.njk` | Sea-Doo rental page |

### Modified files (≈25)

| File | Change |
|---|---|
| `src/_includes/header.njk` | Add DE button; update `homePath` logic and static nav text for `currentLang == 'de'` |
| `src/_includes/head.njk` | Add `hreflang="de"` link tag using `langDe` front matter variable |
| `src/assets/js/main.js` | Detect `/de/` path; add German WhatsApp message template; update `buildExpHref` |
| All existing ES pages (≈14) | Add `langDe: "/de/"` (or location-specific URL) to front matter |
| All existing EN pages (≈11) | Add `langDe: "/de/"` (or location-specific URL) to front matter |

---

## Data flow

```
User visits /de/
  → Eleventy renders page with currentLang: de, langDe: "/de/"
  → header.njk marks DE button as active
  → main.js detects /de/ path → sets currentLang = 'de'
  → main.js fetches /assets/i18n/de.json → applies German strings to [data-i18n] elements
  → buildExpHref generates WhatsApp message in German
  → head.njk outputs hreflang for es, en, de
```

---

## German content strategy

Translations are generated from the existing English content. All translations are natural German, not literal word-for-word.

### `de.json` — key examples

```json
{
  "nav.home": "Startseite",
  "nav.prices": "Preise",
  "nav.gallery": "Galerie",
  "nav.contact": "Kontakt",
  "nav.book": "Jetzt buchen",
  "hero.title.prefix": "Jet-Ski-Verleih in",
  "hero.subtitle": "Erleben Sie ein einzigartiges Abenteuer auf dem Meer mit unseren Jet-Skis",
  "hero.cta.whatsapp": "Per WhatsApp buchen",
  "exp.classic.title": "Classic Route",
  "exp.classic.desc": "Beliebteste Option · Paare & Freunde",
  "exp.private.title": "Private Ausfahrt",
  "faq.1.q": "Brauche ich einen Bootsführerschein?",
  "faq.1.a": "Ja. Der Fahrer muss einen Sportbootführerschein oder eine höhere Qualifikation besitzen.",
  "contact.form.submit": "Per WhatsApp senden",
  "footer.copyright": "© 2026 JetExperience Baleares. Alle Rechte vorbehalten."
}
```

### `locationsDe.json` — structure
5 entries with the same shape as `locationsEn.json`:
- `slug`, `name`, `title` (German SEO title), `description` (German meta description)
- `h1`, `intro1`, `intro2`, `highlight` — translated to German
- `features[]` — 3 bullet points in German
- `faq[]` — 2 Q&A pairs in German per location
- `geo`, `image`, `imageAlt` — unchanged from English version

---

## Header changes (`header.njk`)

```njk
{% set homePath = '/en/' if currentLang == 'en' else '/de/' if currentLang == 'de' else '/' %}
```

Nav static fallback text (used before JS hydration):
```njk
{% if currentLang == 'en' %}Home{% elif currentLang == 'de' %}Startseite{% else %}Inicio{% endif %}
```

Language switcher — add DE button:
```njk
<div class="lang-switcher">
  <a href="{{ langEs }}" class="lang-btn{% if currentLang == 'es' %} active{% endif %}">ES</a>
  <span class="lang-sep">|</span>
  <a href="{{ langEn }}" class="lang-btn{% if currentLang == 'en' %} active{% endif %}">EN</a>
  <span class="lang-sep">|</span>
  <a href="{{ langDe }}" class="lang-btn{% if currentLang == 'de' %} active{% endif %}">DE</a>
</div>
```

---

## JavaScript changes (`main.js`)

### Language detection
```js
const isEnPage = window.location.pathname.startsWith('/en/');
const isDePage = window.location.pathname.startsWith('/de/');
const saved = localStorage.getItem('mjLang');
const browser = navigator.language?.startsWith('en') ? 'en'
              : navigator.language?.startsWith('de') ? 'de'
              : 'es';
currentLang = isEnPage ? 'en' : isDePage ? 'de' : (saved || browser);
```

### WhatsApp message in German
```js
const msgLabel = currentLang === 'en'
  ? `Hi, I'd like to book: ${title} (${price}). Can you confirm availability?`
  : currentLang === 'de'
  ? `Hallo, ich möchte buchen: ${title} (${price}). Können Sie die Verfügbarkeit bestätigen?`
  : `Hola, me gustaría reservar: ${title} (${price}). ¿Podéis confirmarme disponibilidad?`;
```

---

## SEO changes (`head.njk`)

Add alongside existing hreflang tags:
```html
<link rel="alternate" hreflang="de" href="{{ site.url }}{{ langDe }}">
```

`x-default` continues to point to `langEs` (Spanish is the primary language).

---

## Front matter pattern

Every existing ES and EN page receives a new `langDe` variable. For the homepage:
```yaml
langDe: "/de/"
```

For location pages, it points to the equivalent German location:
```yaml
langDe: "/de/jet-ski-cala-millor/"
```

Every new DE page includes all three lang variables:
```yaml
langEs: "/"
langEn: "/en/"
langDe: "/de/"
currentLang: de
permalink: /de/
```

---

## Out of scope

- German legal pages (`aviso-legal`, `politica-privacidad`) — legal content stays in Spanish/English
- CMS or translation management tooling
- Automated translation pipeline
