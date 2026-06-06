# German (DE) Language Support — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add German as a third language under `/de/`, mirroring the `/en/` structure with full SEO hreflang support and a DE button in the nav.

**Architecture:** New `/src/de/` folder (14 pages) mirrors `/en/`. German UI strings in `de.json`, location data in `locationsDe.json`, template in `location-de.njk`. Three files updated for infrastructure (main.js, head.njk, header.njk) plus `langDe` front matter added to all existing pages.

**Tech Stack:** Eleventy 3 (11ty), Nunjucks templates, vanilla JS i18n, JSON data files.

---

## Task 1: Create `src/assets/i18n/de.json`

**Files:**
- Create: `src/assets/i18n/de.json`

- [ ] **Step 1: Create the file with all 137 German translation keys**

```json
{
  "nav.home": "Startseite",
  "nav.prices": "Preise",
  "nav.gallery": "Galerie",
  "nav.contact": "Kontakt",
  "nav.book": "Jetzt buchen",
  "hero.label": "Cala Millor · Mallorca",
  "hero.title.prefix": "Jet-Ski-Verleih in",
  "hero.title.location": "Costa de los Pinos · Cala Millor",
  "hero.subtitle": "Erleben Sie ein einzigartiges Abenteuer auf dem Meer mit unseren Jet-Skis",
  "hero.cta.whatsapp": "Per WhatsApp buchen",
  "hero.cta.prices": "Preise ansehen",
  "hero.badge.license": "Führerschein erforderlich",
  "hero.badge.booking": "Schnelle Buchung",
  "hero.badge.safety": "Sicheres Erlebnis",
  "feature.label": "Unser Service",
  "feature.title": "Jet-Ski-Verleih auf Mallorca",
  "feature.desc": "Genießen Sie die Freiheit des Mittelmeers – werden Sie zum Protagonisten Ihrer eigenen Reise.",
  "feature.desc2": "Wenn Sie einen Sportbootführerschein oder eine höhere Qualifikation besitzen, können Sie die kristallklaren Gewässer Mallorcas in Ihrem eigenen Tempo erkunden.",
  "feature.cta": "Das Abenteuer beginnen",
  "experiences.label": "Unsere Preise",
  "experiences.title": "Wählen Sie Ihr Erlebnis",
  "exp.basic.title": "Basic Route",
  "exp.basic.desc": "Perfekt für Anfänger",
  "exp.basic.tooltip": "Schwimmweste inklusive · Professioneller Instructor · Bis zu 2 Personen · Kein Führerschein nötig",
  "exp.basic.duration": "30 MIN",
  "exp.basic.price": "60€",
  "exp.classic.title": "Classic Route",
  "exp.classic.desc": "Beliebteste Option · Paare & Freunde",
  "exp.classic.tooltip": "Vollständige Küstenroute · Schwimmweste + Briefing · Bis zu 2 Personen · Unsere meistgebuchte Option",
  "exp.classic.duration": "60 MIN",
  "exp.classic.badge": "⭐ BELIEBT",
  "exp.classic.price": "1h · 130€",
  "exp.sunset.title": "Sunset Route",
  "exp.sunset.desc": "Ein einzigartiges Erlebnis bei Sonnenuntergang",
  "exp.sunset.tooltip": "Abfahrt 1h vor Sonnenuntergang · Begrenzte Plätze · Schwimmweste + Briefing · Bis zu 2 Personen",
  "exp.sunset.duration": "🌅 SUNSET · 90 MIN",
  "exp.sunset.price": "130€",
  "exp.private.title": "Private Ausfahrt",
  "exp.private.desc": "Für Gruppen und besondere Anlässe",
  "exp.private.tooltip": "Exklusive Gruppe, keine anderen Kunden · Personalisierte Route · Perfekt für Gruppen, Geburtstage oder Junggesellenabschiede",
  "exp.private.duration": "⭐ SPECIAL PACK",
  "exp.private.price": "2h · 200€",
  "exp.oferta.badge": "🔥 ANGEBOT",
  "exp.oferta.title": "Sonderangebot",
  "exp.oferta.sub": "Begrenzte Zeit",
  "exp.oferta.cta": "Anfragen →",
  "exp.oferta.price": "",
  "exp.book": "Buchen →",
  "exp.from": "ab",
  "exp.note": "Richtpreise. Verfügbarkeit und Bedingungen prüfen.",
  "features.label": "Inklusive",
  "features.title": "Was ist inbegriffen?",
  "feat.delivery": "Lieferung und Abholung am vereinbarten Ort",
  "feat.lifejacket": "Schwimmweste für Erwachsene und Kinder",
  "feat.snorkel": "Schnorchel-Set",
  "feat.anchor": "Faltbarer Anker",
  "feat.fuel": "Kraftstoff",
  "feat.deposit": "Sicherheitskaution bei Lieferung",
  "fleet.label": "Unsere Flotte",
  "fleet.title": "Jet-Ski-Verleih in Costa de los Pinos, Cala Millor",
  "fleet.desc": "Mieten Sie einen Jet-Ski direkt in Costa de los Pinos, einem der bevorzugtesten Gebiete der Ostküste Mallorcas. Fahren Sie auf kristallklarem Wasser vor Cala Bona, Sa Coma und Porto Cristo mit unserem Sea-Doo – den modernsten Jet-Skis auf dem Markt. Täglich geprüft, damit Sie jede Minute auf dem Wasser genießen können.",
  "fleet.spec1.title": "ST3 Hull™ Shell",
  "fleet.spec1.sub": "Fiberglas",
  "fleet.spec2.title": "iTC™ System",
  "fleet.spec2.sub": "Leistungsstarker Motor",
  "fleet.spec3.title": "ECO® Mode (70L)",
  "fleet.spec3.sub": "Effizienter Verbrauch",
  "why.label": "Warum wir?",
  "why.title": "Ihre Sicherheit, unsere Priorität",
  "why.1": "Moderne Jet-Skis",
  "why.2": "Professionelle Instructoren",
  "why.3": "Sicherheit inklusive",
  "why.4": "Familien & Freunde",
  "why.5": "Per WhatsApp buchen",
  "why.6": "Erstklassige Lage",
  "reviews.label": "Bewertungen",
  "reviews.title": "Was unsere Kunden sagen",
  "reviews.qr.label": "Hat Ihnen das Erlebnis gefallen? Hinterlassen Sie uns eine Bewertung auf Google",
  "reviews.qr.sub": "Scannen Sie den Code mit Ihrem Telefon",
  "reviews.qr.or": "oder wenn Sie am Telefon sind",
  "reviews.qr.btn": "Google-Bewertung schreiben",
  "steps.label": "So funktioniert es",
  "steps.title": "In 5 Schritten buchen",
  "step.1": "Wählen Sie Ihr Erlebnis",
  "step.2": "Kontaktieren Sie uns per WhatsApp",
  "step.3": "Datum und Uhrzeit bestätigen",
  "step.4": "Genießen Sie Ihre Jet-Ski-Route!",
  "step.5.prefix": "Wenn Sie lieber anrufen möchten,",
  "step.5.link": "hier",
  "safety.label": "Sicherheit",
  "safety.title": "Sicherheit an erster Stelle",
  "safety.1": "Schwimmweste inklusive",
  "safety.2": "Obligatorisches Einführungsbriefing",
  "safety.4": "Grundregeln vor der Abfahrt erklärt",
  "safety.5": "Geeignet für Anfänger",
  "faq.label": "FAQ",
  "faq.title": "Haben Sie Fragen?",
  "faq.1.q": "Brauche ich einen Bootsführerschein?",
  "faq.1.a": "Ja. Der Fahrer muss einen Sportbootführerschein oder eine höhere Qualifikation besitzen.",
  "faq.2.q": "Können zwei Personen auf einem Jet-Ski fahren?",
  "faq.2.a": "Ja, unsere Jet-Skis bieten Platz für bis zu 3 Personen pro Fahrzeug.",
  "faq.3.q": "Was soll ich mitbringen?",
  "faq.3.a": "Badebekleidung, Sonnencreme und Abenteuerlust. Den Rest stellen wir bereit: Schwimmweste, Briefing und Jet-Ski.",
  "faq.4.q": "Welches Mindestalter gilt?",
  "faq.4.a": "Personen unter 18 Jahren müssen von einem Erwachsenen begleitet werden.",
  "faq.5.q": "Was passiert bei schlechtem Wetter?",
  "faq.5.a": "Bei ungünstigen Wetterbedingungen planen wir kostenlos um oder erstatten Ihnen den vollen Betrag.",
  "faq.6.q": "Wie kann ich buchen?",
  "faq.6.a": "Am schnellsten per WhatsApp mit unseren 5 einfachen Schritten. Alternativ können Sie uns auch direkt anrufen oder das Kontaktformular ausfüllen – wir antworten innerhalb von 2 Stunden.",
  "gallery.label": "Galerie",
  "gallery.title": "Unvergessliche Momente",
  "contact.label": "Kontakt",
  "contact.title": "Wo Sie uns finden",
  "contact.address": "Avenida del Pinar 43, Costa de los Pinos, Cala Millor",
  "contact.howto": "Route berechnen",
  "contact.form.title": "Kontaktieren Sie uns",
  "contact.form.name": "Name",
  "contact.form.phone": "Telefon",
  "contact.form.date": "Gewünschtes Datum",
  "contact.form.experience": "Art des Erlebnisses",
  "contact.form.exp.classic": "Beliebt – 1h · 130€",
  "contact.form.exp.private": "Special Pack – 2h · 200€",
  "contact.form.message": "Nachricht",
  "contact.form.error.name": "Bitte geben Sie Ihren Namen ein.",
  "contact.form.error.phone": "Bitte geben Sie Ihre Telefonnummer ein.",
  "contact.form.error.date": "Das Datum darf nicht in der Vergangenheit liegen.",
  "contact.form.submit": "Per WhatsApp senden",
  "cta.title": "Bereit für das Abenteuer?",
  "cta.subtitle": "Buchen Sie noch heute Ihr Jet-Ski-Erlebnis",
  "cta.whatsapp": "Per WhatsApp buchen",
  "cta.call": "Jetzt anrufen",
  "footer.social": "Folgen Sie uns",
  "footer.links": "Schnelllinks",
  "footer.legal": "Impressum",
  "footer.privacy": "Datenschutzerklärung",
  "footer.copyright": "© 2026 JetExperience Baleares. Alle Rechte vorbehalten."
}
```

- [ ] **Step 2: Verify file is valid JSON**

```bash
node -e "JSON.parse(require('fs').readFileSync('src/assets/i18n/de.json','utf8')); console.log('OK')"
```
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add src/assets/i18n/de.json
git commit -m "feat(i18n): add German translation strings (de.json)"
```

---

## Task 2: Create `src/_data/locationsDe.json`

**Files:**
- Create: `src/_data/locationsDe.json`

- [ ] **Step 1: Create the file with all 5 German location entries**

```json
[
  {
    "slug": "cala-millor",
    "name": "Cala Millor",
    "title": "Jet-Ski-Verleih in Cala Millor, Mallorca | JetExperience Baleares",
    "description": "Jet-Ski mieten in Cala Millor, Mallorca. Direkte Abfahrt von Costa de los Pinos. Moderne Sea-Doo, Schwimmweste inklusive. Einfache Buchung per WhatsApp.",
    "h1": "Jet-Ski-Verleih in Cala Millor, Mallorca",
    "intro1": "Cala Millor ist eines der beliebtesten Touristenziele an der Ostküste Mallorcas mit über 1,5 km Goldstrand. Die ruhigen, seichten Gewässer machen es zum idealen Ort für ein Jet-Ski-Erlebnis, egal ob es Ihr erstes Mal ist oder Sie bereits Erfahrung haben.",
    "intro2": "Von unserer Basis in Costa de los Pinos liefern wir Ihnen den Sea-Doo direkt an den Strand. Alles, was Sie brauchen, ist ein Sportbootführerschein und Lust auf das Mittelmeer.",
    "highlight": "Fahren Sie entlang von 1,5 km Goldstrand auf ruhigen, strömungsfreien Gewässern.",
    "features": [
      "Ruhige Gewässer, ideal für Anfänger mit Bootsführerschein",
      "1,5 km Strand mit goldenem Sand und sichtbarem Meeresgrund",
      "Großes Navigationsgebiet, keine Hindernisse"
    ],
    "faq": [
      {
        "q": "Wo fährt der Jet-Ski in Cala Millor ab?",
        "a": "Unsere Basis befindet sich in der Avenida del Pinar 43, Costa de los Pinos, weniger als 1 km vom Strand Cala Millor entfernt. Wir können auch direkt an den Strand liefern, wenn Sie das bevorzugen."
      },
      {
        "q": "Sind die Gewässer von Cala Millor für Anfänger geeignet?",
        "a": "Ja. Cala Millor hat ruhige, gut geschützte Gewässer, ideal für Erstfahrer. Ein Sportbootführerschein ist immer Pflicht, und ein Sicherheitsbriefing ist inklusive."
      }
    ],
    "geo": { "lat": 39.5878, "lng": 3.3947 },
    "image": "galeria-03.jpg",
    "imageAlt": "Strand Cala Millor vom Meer aus gesehen, Mallorca"
  },
  {
    "slug": "cala-bona",
    "name": "Cala Bona",
    "title": "Jet-Ski-Verleih in Cala Bona, Mallorca | JetExperience Baleares",
    "description": "Jet-Ski mieten in Cala Bona, Mallorca. 1 km von unserer Basis in Costa de los Pinos. Moderne Sea-Doo, Schwimmweste inklusive. Per WhatsApp buchen.",
    "h1": "Jet-Ski-Verleih in Cala Bona, Mallorca",
    "intro1": "Cala Bona ist ein kleiner, malerischer Fischerhafen, nur 1 km von Cala Millor entfernt. Die blauen Gewässer und die intimere Atmosphäre machen es zu einem der beliebtesten Abfahrtspunkte unserer Kunden. Jet-Ski fahren vor Cala Bona verbindet den Nervenkitzel mit atemberaubenden Ausblicken auf die Serra de Llevant.",
    "intro2": "Unsere Basis in Costa de los Pinos ist weniger als 5 Minuten auf dem Wasser entfernt, was Cala Bona zu einem der praktischsten Startpunkte für Ihr Erlebnis macht.",
    "highlight": "Intimer Naturhafen mit blauen Gewässern und Blick auf die Serra de Llevant.",
    "features": [
      "Geschützter Naturhafen, ruhige Gewässer",
      "Intimer und weniger belebt als Cala Millor",
      "1 km von unserer Basis entfernt – wir sind in wenigen Minuten da"
    ],
    "faq": [
      {
        "q": "Kann ich den Jet-Ski direkt in Cala Bona buchen?",
        "a": "Ja. Kontaktieren Sie uns per WhatsApp, und wir bestätigen den genauen Treffpunkt in Cala Bona. Der Service umfasst Lieferung und Abholung am vereinbarten Ort."
      },
      {
        "q": "Wie lange dauert es von Ihrer Basis bis Cala Bona?",
        "a": "Unsere Basis ist weniger als 1 km von Cala Bona entfernt. Wir bestätigen die Abfahrtszeit bei der Buchung und sind pünktlich vor Ort."
      }
    ],
    "geo": { "lat": 39.6005, "lng": 3.4167 },
    "image": "galeria-05.jpg",
    "imageAlt": "Kristallklare Gewässer von Cala Bona, Mallorca"
  },
  {
    "slug": "sa-coma",
    "name": "Sa Coma",
    "title": "Jet-Ski-Verleih in Sa Coma, Mallorca | JetExperience Baleares",
    "description": "Jet-Ski mieten in Sa Coma, Mallorca. Kristallklare Gewässer, 2 km von unserer Basis entfernt. Moderne Sea-Doo, Schwimmweste inklusive. Einfache Buchung per WhatsApp.",
    "h1": "Jet-Ski-Verleih in Sa Coma, Mallorca",
    "intro1": "Sa Coma ist ein Naturstrand, weniger überlaufen als seine Nachbarn, mit kristallklarem Wasser und weißem Sandgrund. Nur 2 km auf dem Wasser von unserer Basis entfernt, ideal für alle, die die Ostküste Mallorcas in völliger Freiheit erkunden möchten.",
    "intro2": "Die ruhigen, sauberen Gewässer machen Sa Coma zu einer der beliebtesten Routen unserer Kunden. Eine natürliche Umgebung, in der Jet-Ski-Fahren perfekt hineinpasst.",
    "highlight": "Naturstrand mit weißem Sand, kristallklarem Wasser und wenig Touristen.",
    "features": [
      "Naturstrand, weniger überlaufen und ruhiger",
      "Kristallklares Wasser mit weißem Sandgrund",
      "2 km auf dem Wasser von unserer Basis"
    ],
    "faq": [
      {
        "q": "Kann man in Sa Coma Jet-Ski fahren?",
        "a": "Ja. Sa Coma ist eines unserer regulären Navigationsgebiete. Der Service umfasst die Lieferung an den von Ihnen gewünschten Strandabschnitt."
      },
      {
        "q": "Wie weit ist Sa Coma von Ihrer Basis entfernt?",
        "a": "Ungefähr 2 km auf dem Wasser von Costa de los Pinos. Mit dem Jet-Ski erreichen Sie es in wenigen Minuten."
      }
    ],
    "geo": { "lat": 39.6112, "lng": 3.4178 },
    "image": "galeria-06.jpg",
    "imageAlt": "Türkisfarbene Gewässer von Sa Coma, Mallorca"
  },
  {
    "slug": "porto-cristo",
    "name": "Porto Cristo",
    "title": "Jet-Ski-Verleih in Porto Cristo, Mallorca | JetExperience Baleares",
    "description": "Jet-Ski-Route nach Porto Cristo von Costa de los Pinos. ~12 km unberührte Küste, versteckte Buchten und Klippen. Unser abenteuerlichstes Erlebnis. Per WhatsApp buchen.",
    "h1": "Jet-Ski-Verleih in Porto Cristo, Mallorca",
    "intro1": "Porto Cristo ist einer der spektakulärsten Naturhäfen Mallorcas, weltberühmt durch die Coves del Drach. Mit dem Jet-Ski nach Porto Cristo zu fahren ist unsere abenteuerlichste Route: ca. 12 km unberührte Küste mit versteckten Buchten und dramatischen Klippen.",
    "intro2": "Diese Route ist mit dem Special 2-Stunden-Pack verfügbar und perfekt für erfahrene Fahrer, die die Ostküste Mallorcas in der Tiefe erkunden möchten. Verfügbarkeit per WhatsApp erfragen.",
    "highlight": "Unsere spektakulärste Route: ~12 km unberührte Küste bis zum Naturhafen von Porto Cristo.",
    "features": [
      "~12 km Route mit unberührten Buchten und Klippen",
      "Spektakulärer Naturhafen am Ende der Fahrt",
      "Empfohlen mit dem Special 2-Stunden-Pack"
    ],
    "faq": [
      {
        "q": "Können wir Porto Cristo mit dem Jet-Ski erreichen?",
        "a": "Ja, das ist unsere längste Route. Verfügbar mit dem Special 2-Stunden-Pack. Vorherige Erfahrung und gute Seebedingungen empfohlen. Verfügbarkeit anfragen."
      },
      {
        "q": "Wie lange dauert die Route nach Porto Cristo?",
        "a": "Ungefähr 2 Stunden hin und zurück in gemächlichem Tempo, mit Stopps um die Landschaft zu genießen. Deshalb empfehlen wir das 2-Stunden-Pack."
      }
    ],
    "geo": { "lat": 39.5322, "lng": 3.3381 },
    "image": "galeria-04.jpg",
    "imageAlt": "Küsten-Jet-Ski-Route in Richtung Porto Cristo, Mallorca"
  },
  {
    "slug": "costa-de-los-pinos",
    "name": "Costa de los Pinos",
    "title": "Jet-Ski-Verleih in Costa de los Pinos, Mallorca | JetExperience Baleares",
    "description": "Unsere Jet-Ski-Basis befindet sich in Costa de los Pinos, Mallorca. Direkter Meerzugang von der Avenida del Pinar 43. Moderne Sea-Doo, Schwimmweste inklusive. Per WhatsApp buchen.",
    "h1": "Jet-Ski-Verleih in Costa de los Pinos, Mallorca",
    "intro1": "Costa de los Pinos ist der Ausgangspunkt für alle unsere Erlebnisse und unsere Hauptbasis. Dieses exklusive Wohngebiet zwischen Sa Coma und Cala Millor bietet direkten Meerzugang in privilegierten Gewässern, mit wenigen Badegästen und einer außergewöhnlichen Naturlandschaft.",
    "intro2": "Wenn Sie in Costa de los Pinos oder in der Nähe untergebracht sind, startet der Service direkt von hier. Avenida del Pinar 43 ist der Ausgangspunkt für Cala Millor, Cala Bona, Sa Coma und Porto Cristo.",
    "highlight": "Hauptservicebasis. Direkter Meerzugang von der Avenida del Pinar 43.",
    "features": [
      "Hauptbasis – direkte Abfahrt ohne Anreise",
      "Ruhige, exklusive Gewässer, wenig Betrieb",
      "Idealer Ausgangspunkt für alle Routen"
    ],
    "faq": [
      {
        "q": "Wo genau befindet sich Ihre Basis in Costa de los Pinos?",
        "a": "In der Avenida del Pinar 43, Costa de los Pinos, 07560. Sie finden uns auf Google Maps unter JetExperience Baleares."
      },
      {
        "q": "Liefern Sie in Costa de los Pinos?",
        "a": "Ja, das ist sogar unser üblicher Lieferpunkt. Bestätigen Sie den genauen Ort bei der Buchung per WhatsApp."
      }
    ],
    "geo": { "lat": 39.6377, "lng": 3.4145 },
    "image": "galeria-11-new.jpg",
    "imageAlt": "Luftaufnahme eines Jet-Skis in Costa de los Pinos, Mallorca"
  }
]
```

- [ ] **Step 2: Verify valid JSON**

```bash
node -e "JSON.parse(require('fs').readFileSync('src/_data/locationsDe.json','utf8')); console.log('OK')"
```
Expected: `OK`

- [ ] **Step 3: Commit**

```bash
git add src/_data/locationsDe.json
git commit -m "feat(i18n): add German location data (locationsDe.json)"
```

---

## Task 3: Create `src/_includes/location-de.njk`

**Files:**
- Create: `src/_includes/location-de.njk`

This is `location-en.njk` adapted for German: uses `locationsDe` data, German hardcoded strings, `/de/` links, German WhatsApp URL text.

- [ ] **Step 1: Create the template**

```njk
---
layout: base.njk
---
{% set loc = locationsDe | getLocation(locationSlug) %}

<nav class="container py-3" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/de/">Startseite</a></li>
    <li class="breadcrumb-item active" aria-current="page">Jet-Ski {{ loc.name }}</li>
  </ol>
</nav>

<section class="feature-section py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <h1 class="section-title mb-4">{{ loc.h1 }}</h1>
        <p class="feature-desc">{{ loc.intro1 }}</p>
        <p class="feature-desc">{{ loc.intro2 }}</p>
        <a href="https://api.whatsapp.com/send/?phone=34618842609&text=Hallo%2C%20ich%20m%C3%B6chte%20einen%20Jet-Ski%20in%20{{ loc.name | urlencode }}%20buchen.%20K%C3%B6nnen%20Sie%20die%20Verf%C3%BCgbarkeit%20best%C3%A4tigen%3F"
           class="btn-cta mt-3" target="_blank" rel="noopener">
          In {{ loc.name }} buchen →
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
    <h2 class="section-title section-title--light mb-4">Bereit zum Fahren in {{ loc.name }}?</h2>
    <a href="https://api.whatsapp.com/send/?phone=34618842609&text=Hallo%2C%20ich%20m%C3%B6chte%20einen%20Jet-Ski%20in%20{{ loc.name | urlencode }}%20buchen.%20K%C3%B6nnen%20Sie%20die%20Verf%C3%BCgbarkeit%20best%C3%A4tigen%3F"
       class="btn-cta btn-cta--dark" target="_blank" rel="noopener">
      Per WhatsApp buchen
    </a>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 mb-4 mb-lg-0">
        <h2 class="section-title">Häufig gestellte Fragen</h2>
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
  <a href="/de/" class="btn-outline-light-brand">← Zurück zur Startseite</a>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://jetexperiencemallorca.com/de/"},
        {"@type": "ListItem", "position": 2, "name": "{{ loc.h1 }}"}
      ]
    },
    {
      "@type": "Service",
      "name": "{{ loc.h1 }}",
      "provider": {"@id": "https://jetexperiencemallorca.com/#business"},
      "areaServed": {"@type": "Place", "name": "{{ loc.name }}, Mallorca"},
      "url": "https://jetexperiencemallorca.com/de/jet-ski-{{ loc.slug }}/"
    }
  ]
}
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/_includes/location-de.njk
git commit -m "feat(i18n): add German location template (location-de.njk)"
```

---

## Task 4: Update `src/assets/js/main.js`

**Files:**
- Modify: `src/assets/js/main.js`

Two changes: (1) detect `/de/` path and set `currentLang = 'de'`; (2) add German WhatsApp message in `buildExpHref`; (3) add German contact form message in `initContactForm`.

- [ ] **Step 1: Update `initI18n` to detect German pages**

Replace lines 6–16 (the `initI18n` function body) with:

```js
async function initI18n() {
  const isEnPage = window.location.pathname.startsWith('/en/');
  const isDePage = window.location.pathname.startsWith('/de/');
  const saved = localStorage.getItem('mjLang');
  const browser = navigator.language?.startsWith('en') ? 'en'
                : navigator.language?.startsWith('de') ? 'de'
                : 'es';
  currentLang = isEnPage ? 'en' : isDePage ? 'de' : (saved || browser);
  await applyLang(currentLang);
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => switchLang(btn.dataset.langBtn));
  });
  updateLangButtons();
}
```

- [ ] **Step 2: Update `buildExpHref` to add German message**

Replace the `msgLabel` assignment in `buildExpHref` (lines 50–52):

```js
  const msgLabel = currentLang === 'en'
    ? `Hi, I'd like to book: ${title} (${price}). Can you confirm availability?`
    : currentLang === 'de'
    ? `Hallo, ich möchte buchen: ${title} (${price}). Können Sie die Verfügbarkeit bestätigen?`
    : `Hola, me gustaría reservar: ${title} (${price}). ¿Podéis confirmarme disponibilidad?`;
```

- [ ] **Step 3: Update `initContactForm` to use German message when on `/de/`**

Replace the lines building `lines` array in `initContactForm` (lines 119–123):

```js
    const isDeForm = window.location.pathname.startsWith('/de/');
    const isEnForm = window.location.pathname.startsWith('/en/');
    const lines = isDeForm
      ? ['Hallo, ich möchte ein Jet-Ski-Erlebnis buchen:']
      : isEnForm
      ? ["Hi, I'd like to book a jet ski experience:"]
      : ['Hola, me gustaría reservar una experiencia de jet ski:'];
    lines.push(isDeForm ? `• Name: ${name}` : isEnForm ? `• Name: ${name}` : `• Nombre: ${name}`);
    if (date)             lines.push(isDeForm ? `• Datum: ${date}` : isEnForm ? `• Date: ${date}` : `• Fecha: ${date}`);
    if (experience.value) lines.push(isDeForm ? `• Erlebnis: ${expText}` : isEnForm ? `• Experience: ${expText}` : `• Experiencia: ${expText}`);
    if (message)          lines.push(isDeForm ? `• Nachricht: ${message}` : isEnForm ? `• Message: ${message}` : `• Mensaje: ${message}`);
```

- [ ] **Step 4: Commit**

```bash
git add src/assets/js/main.js
git commit -m "feat(i18n): add German language detection and WhatsApp messages to main.js"
```

---

## Task 5: Update `src/_includes/head.njk`

**Files:**
- Modify: `src/_includes/head.njk`

Add `hreflang="de"` alongside the existing ES/EN hreflang tags (after line 20).

- [ ] **Step 1: Add German hreflang tag**

After the line `<link rel="alternate" hreflang="en" href="{{ site.url }}{{ langEn }}">`, add:

```html
  <link rel="alternate" hreflang="de" href="{{ site.url }}{{ langDe }}">
```

The hreflang block should now read:
```html
  <link rel="alternate" hreflang="es" href="{{ site.url }}{{ langEs }}">
  <link rel="alternate" hreflang="en" href="{{ site.url }}{{ langEn }}">
  <link rel="alternate" hreflang="de" href="{{ site.url }}{{ langDe }}">
  <link rel="alternate" hreflang="x-default" href="{{ site.url }}{{ langEs }}">
```

- [ ] **Step 2: Commit**

```bash
git add src/_includes/head.njk
git commit -m "feat(i18n): add hreflang=de to head.njk"
```

---

## Task 6: Update `src/_includes/header.njk`

**Files:**
- Modify: `src/_includes/header.njk`

Three changes: (1) `homePath` logic for DE; (2) nav static text fallback for DE; (3) add DE button to language switcher.

- [ ] **Step 1: Update `homePath` (line 1)**

Replace:
```njk
{% set homePath = '/en/' if currentLang == 'en' else '/' %}
```
With:
```njk
{% set homePath = '/en/' if currentLang == 'en' else '/de/' if currentLang == 'de' else '/' %}
```

- [ ] **Step 2: Update static nav fallback text for all 5 nav items**

Replace the nav-link lines (lines 21–27) with:
```njk
              <li class="nav-item"><a class="nav-link" href="{{ homePath }}#hero" data-i18n="nav.home">{% if currentLang == 'en' %}Home{% elif currentLang == 'de' %}Startseite{% else %}Inicio{% endif %}</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ homePath }}#experiencias" data-i18n="nav.prices">{% if currentLang == 'en' %}Prices{% elif currentLang == 'de' %}Preise{% else %}Tarifas{% endif %}</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ homePath }}#galeria" data-i18n="nav.gallery">{% if currentLang == 'en' %}Gallery{% elif currentLang == 'de' %}Galerie{% else %}Galería{% endif %}</a></li>
              <li class="nav-item"><a class="nav-link" href="{{ homePath }}#contacto" data-i18n="nav.contact">{% if currentLang == 'en' %}Contact{% elif currentLang == 'de' %}Kontakt{% else %}Contacto{% endif %}</a></li>
              <li class="nav-item ms-lg-2">
                <a class="btn-cta btn-cta--sm" href="{{ homePath }}#contacto" data-i18n="nav.book">{% if currentLang == 'en' %}Book now{% elif currentLang == 'de' %}Jetzt buchen{% else %}Reservar ahora{% endif %}</a>
              </li>
```

- [ ] **Step 3: Add DE button to language switcher**

Replace the language switcher block (lines 29–35) with:
```njk
              <!-- Language switcher -->
              <li class="nav-item ms-lg-2">
                <div class="lang-switcher">
                  <a href="{{ langEs }}" class="lang-btn{% if currentLang == 'es' %} active{% endif %}">ES</a>
                  <span class="lang-sep">|</span>
                  <a href="{{ langEn }}" class="lang-btn{% if currentLang == 'en' %} active{% endif %}">EN</a>
                  <span class="lang-sep">|</span>
                  <a href="{{ langDe }}" class="lang-btn{% if currentLang == 'de' %} active{% endif %}">DE</a>
                </div>
              </li>
```

- [ ] **Step 4: Commit**

```bash
git add src/_includes/header.njk
git commit -m "feat(i18n): add DE button and German nav text to header"
```

---

## Task 7: Add `langDe` front matter to all existing pages

**Files — ES pages (modify each):**
- `src/index.njk`
- `src/sobre-nosotros.njk`
- `src/alquiler-moto-agua-mallorca.njk`
- `src/alquiler-seadoo-mallorca.njk`
- `src/rutas-moto-agua-mallorca.njk`
- `src/moto-agua-con-licencia-mallorca.njk`
- `src/jet-ski-cala-millor.njk`
- `src/jet-ski-cala-bona.njk`
- `src/jet-ski-sa-coma.njk`
- `src/jet-ski-porto-cristo.njk`
- `src/jet-ski-costa-de-los-pinos.njk`
- `src/legal/aviso-legal.njk`
- `src/legal/politica-privacidad.njk`

**Files — EN pages (modify each):**
- `src/en/index.njk`
- `src/en/about-us.njk`
- `src/en/jet-ski-rental-mallorca.njk`
- `src/en/sea-doo-rental-mallorca.njk`
- `src/en/jet-ski-routes-mallorca.njk`
- `src/en/jet-ski-with-nautical-license-mallorca.njk`
- `src/en/jet-ski-cala-millor.njk`
- `src/en/jet-ski-cala-bona.njk`
- `src/en/jet-ski-sa-coma.njk`
- `src/en/jet-ski-porto-cristo.njk`
- `src/en/jet-ski-costa-de-los-pinos.njk`

- [ ] **Step 1: Add `langDe` to each ES page — add after `langEn:` line**

For `src/index.njk`: add `langDe: "/de/"`
For `src/sobre-nosotros.njk`: add `langDe: "/de/about-us/"`
For `src/alquiler-moto-agua-mallorca.njk`: add `langDe: "/de/jet-ski-rental-mallorca/"`
For `src/alquiler-seadoo-mallorca.njk`: add `langDe: "/de/sea-doo-rental-mallorca/"`
For `src/rutas-moto-agua-mallorca.njk`: add `langDe: "/de/jet-ski-routes-mallorca/"`
For `src/moto-agua-con-licencia-mallorca.njk`: add `langDe: "/de/jet-ski-with-nautical-license-mallorca/"`
For `src/jet-ski-cala-millor.njk`: add `langDe: "/de/jet-ski-cala-millor/"`
For `src/jet-ski-cala-bona.njk`: add `langDe: "/de/jet-ski-cala-bona/"`
For `src/jet-ski-sa-coma.njk`: add `langDe: "/de/jet-ski-sa-coma/"`
For `src/jet-ski-porto-cristo.njk`: add `langDe: "/de/jet-ski-porto-cristo/"`
For `src/jet-ski-costa-de-los-pinos.njk`: add `langDe: "/de/jet-ski-costa-de-los-pinos/"`
For `src/legal/aviso-legal.njk`: add `langDe: "/de/"`
For `src/legal/politica-privacidad.njk`: add `langDe: "/de/"`

- [ ] **Step 2: Add `langDe` to each EN page — add after `langEn:` line**

For `src/en/index.njk`: add `langDe: "/de/"`
For `src/en/about-us.njk`: add `langDe: "/de/about-us/"`
For `src/en/jet-ski-rental-mallorca.njk`: add `langDe: "/de/jet-ski-rental-mallorca/"`
For `src/en/sea-doo-rental-mallorca.njk`: add `langDe: "/de/sea-doo-rental-mallorca/"`
For `src/en/jet-ski-routes-mallorca.njk`: add `langDe: "/de/jet-ski-routes-mallorca/"`
For `src/en/jet-ski-with-nautical-license-mallorca.njk`: add `langDe: "/de/jet-ski-with-nautical-license-mallorca/"`
For `src/en/jet-ski-cala-millor.njk`: add `langDe: "/de/jet-ski-cala-millor/"`
For `src/en/jet-ski-cala-bona.njk`: add `langDe: "/de/jet-ski-cala-bona/"`
For `src/en/jet-ski-sa-coma.njk`: add `langDe: "/de/jet-ski-sa-coma/"`
For `src/en/jet-ski-porto-cristo.njk`: add `langDe: "/de/jet-ski-porto-cristo/"`
For `src/en/jet-ski-costa-de-los-pinos.njk`: add `langDe: "/de/jet-ski-costa-de-los-pinos/"`

- [ ] **Step 3: Verify no page is missing langDe**

```bash
grep -rL "langDe" src --include="*.njk" | grep -v "src/de/" | grep -v "src/_includes/" | grep -v "src/_layouts/"
```
Expected: no output (all pages have langDe).

- [ ] **Step 4: Commit**

```bash
git add src/
git commit -m "feat(i18n): add langDe front matter to all existing ES and EN pages"
```

---

## Task 8: Create `src/de/index.njk`

**Files:**
- Create: `src/de/index.njk`

Copy of `src/en/index.njk` with: updated front matter, German hardcoded text, service links pointing to `/de/`.

- [ ] **Step 1: Create the file**

The front matter:
```yaml
---
layout: base.njk
pageTitle: "Jet-Ski-Verleih in Cala Millor, Mallorca | JetExperience Baleares"
pageDescription: "Jet-Ski mieten in Cala Millor, Mallorca. Sportbootführerschein erforderlich. Moderne Sea-Doo, Schwimmweste inklusive. 1h (130€) und 2h (200€). Einfache Buchung per WhatsApp."
pageCanonical: "/de/"
permalink: /de/
langEs: "/"
langEn: "/en/"
langDe: "/de/"
currentLang: de
---
```

Then the full page body is identical to `src/en/index.njk` EXCEPT:
1. All hardcoded English text replaced with German (same keys as in `de.json`)
2. Service card links changed from `/en/...` to `/de/...`
3. The hero hardcoded text: `Jet-Ski-Verleih in`, `Costa de los Pinos · Cala Millor`, `Erleben Sie ein einzigartiges Abenteuer auf dem Meer mit unseren Jet-Skis`, `Per WhatsApp buchen`, `Preise ansehen`, `Führerschein erforderlich`, `Schnelle Buchung`, `Sicheres Erlebnis`
4. Feature section: `Unser Service`, `Jet-Ski-Verleih auf Mallorca`, German paragraph text, `Das Abenteuer beginnen`
5. Experiences section: `Unsere Preise`, `Wählen Sie Ihr Erlebnis`, card text in German, `Buchen →`, `Anfragen →`, `Richtpreise. Verfügbarkeit und Bedingungen prüfen.`
6. Services section links to `/de/jet-ski-rental-mallorca/`, `/de/jet-ski-with-nautical-license-mallorca/`, `/de/sea-doo-rental-mallorca/`, `/de/jet-ski-routes-mallorca/` — titles: `Jet-Ski-Verleih`, `Bootsführerschein`, `Sea-Doo-Verleih`, `Routen auf Mallorca` — descs: `Wählen Sie Ihr Erlebnis auf See`, `Alles Wissenswerte`, `Die besten Modelle auf dem Markt`, `Erkunden Sie die Ostküste`
7. Features/Safety: German checklist items, German safety items
8. Fleet: German text
9. Process: German steps
10. FAQ: German questions and answers (same as `de.json` faq keys)
11. Gallery: `Galerie`, `Unvergessliche Momente`
12. Contact: German form labels, `Wo Sie uns finden`, `Route berechnen`
13. Contact form: German labels

The `data-i18n` attributes stay unchanged — they point to the same keys as in `de.json`.

- [ ] **Step 2: Verify the page builds**

```bash
npm run build 2>&1 | tail -5
```
Expected: build completes without error, `_site/de/index.html` exists.

```bash
ls _site/de/
```
Expected: `index.html` present.

- [ ] **Step 3: Commit**

```bash
git add src/de/index.njk
git commit -m "feat(i18n): add German homepage (src/de/index.njk)"
```

---

## Task 9: Create 5 German location pages

**Files:**
- Create: `src/de/jet-ski-cala-millor.njk`
- Create: `src/de/jet-ski-cala-bona.njk`
- Create: `src/de/jet-ski-sa-coma.njk`
- Create: `src/de/jet-ski-porto-cristo.njk`
- Create: `src/de/jet-ski-costa-de-los-pinos.njk`

Each file is front matter only — the content comes from `locationsDe.json` via `location-de.njk`.

- [ ] **Step 1: Create `src/de/jet-ski-cala-millor.njk`**

```yaml
---
layout: location-de.njk
locationSlug: cala-millor
pageTitle: "Jet-Ski-Verleih in Cala Millor, Mallorca | JetExperience Baleares"
pageDescription: "Jet-Ski mieten in Cala Millor, Mallorca. Direkte Abfahrt von Costa de los Pinos. Moderne Sea-Doo, Schwimmweste inklusive. Einfache Buchung per WhatsApp."
pageCanonical: "/de/jet-ski-cala-millor/"
permalink: /de/jet-ski-cala-millor/
langEs: "/jet-ski-cala-millor/"
langEn: "/en/jet-ski-cala-millor/"
langDe: "/de/jet-ski-cala-millor/"
currentLang: de
---
```

- [ ] **Step 2: Create `src/de/jet-ski-cala-bona.njk`**

```yaml
---
layout: location-de.njk
locationSlug: cala-bona
pageTitle: "Jet-Ski-Verleih in Cala Bona, Mallorca | JetExperience Baleares"
pageDescription: "Jet-Ski mieten in Cala Bona, Mallorca. 1 km von unserer Basis in Costa de los Pinos. Moderne Sea-Doo, Schwimmweste inklusive. Per WhatsApp buchen."
pageCanonical: "/de/jet-ski-cala-bona/"
permalink: /de/jet-ski-cala-bona/
langEs: "/jet-ski-cala-bona/"
langEn: "/en/jet-ski-cala-bona/"
langDe: "/de/jet-ski-cala-bona/"
currentLang: de
---
```

- [ ] **Step 3: Create `src/de/jet-ski-sa-coma.njk`**

```yaml
---
layout: location-de.njk
locationSlug: sa-coma
pageTitle: "Jet-Ski-Verleih in Sa Coma, Mallorca | JetExperience Baleares"
pageDescription: "Jet-Ski mieten in Sa Coma, Mallorca. Kristallklare Gewässer, 2 km von unserer Basis entfernt. Moderne Sea-Doo, Schwimmweste inklusive. Einfache Buchung per WhatsApp."
pageCanonical: "/de/jet-ski-sa-coma/"
permalink: /de/jet-ski-sa-coma/
langEs: "/jet-ski-sa-coma/"
langEn: "/en/jet-ski-sa-coma/"
langDe: "/de/jet-ski-sa-coma/"
currentLang: de
---
```

- [ ] **Step 4: Create `src/de/jet-ski-porto-cristo.njk`**

```yaml
---
layout: location-de.njk
locationSlug: porto-cristo
pageTitle: "Jet-Ski-Verleih in Porto Cristo, Mallorca | JetExperience Baleares"
pageDescription: "Jet-Ski-Route nach Porto Cristo von Costa de los Pinos. ~12 km unberührte Küste, versteckte Buchten und Klippen. Unser abenteuerlichstes Erlebnis. Per WhatsApp buchen."
pageCanonical: "/de/jet-ski-porto-cristo/"
permalink: /de/jet-ski-porto-cristo/
langEs: "/jet-ski-porto-cristo/"
langEn: "/en/jet-ski-porto-cristo/"
langDe: "/de/jet-ski-porto-cristo/"
currentLang: de
---
```

- [ ] **Step 5: Create `src/de/jet-ski-costa-de-los-pinos.njk`**

```yaml
---
layout: location-de.njk
locationSlug: costa-de-los-pinos
pageTitle: "Jet-Ski-Verleih in Costa de los Pinos, Mallorca | JetExperience Baleares"
pageDescription: "Unsere Jet-Ski-Basis befindet sich in Costa de los Pinos, Mallorca. Direkter Meerzugang von der Avenida del Pinar 43. Moderne Sea-Doo, Schwimmweste inklusive. Per WhatsApp buchen."
pageCanonical: "/de/jet-ski-costa-de-los-pinos/"
permalink: /de/jet-ski-costa-de-los-pinos/
langEs: "/jet-ski-costa-de-los-pinos/"
langEn: "/en/jet-ski-costa-de-los-pinos/"
langDe: "/de/jet-ski-costa-de-los-pinos/"
currentLang: de
---
```

- [ ] **Step 6: Verify all location pages build**

```bash
npm run build 2>&1 | grep -E "error|Error" | head -10
ls _site/de/
```
Expected: no errors, all 5 location dirs present in `_site/de/`.

- [ ] **Step 7: Commit**

```bash
git add src/de/
git commit -m "feat(i18n): add 5 German location pages"
```

---

## Task 10: Create `src/de/about-us.njk`

**Files:**
- Create: `src/de/about-us.njk`

- [ ] **Step 1: Create the file**

```njk
---
layout: base.njk
pageTitle: "Über uns | JetExperience Baleares"
pageDescription: "Wir sind ein Jet-Ski-Verleihservice an der Ostküste Mallorcas. Sicherheit, Qualität und persönlicher Service bei jedem Erlebnis."
pageCanonical: "/de/about-us/"
permalink: /de/about-us/
langEs: "/sobre-nosotros/"
langEn: "/en/about-us/"
langDe: "/de/about-us/"
currentLang: de
---

<nav class="container py-3" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/de/">Startseite</a></li>
    <li class="breadcrumb-item active" aria-current="page">Über uns</li>
  </ol>
</nav>

<section class="feature-section py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-7">
        <h1 class="section-title mb-4">Über uns — JetExperience Baleares</h1>
        <p class="feature-desc">Wir sind ein auf die Ostküste Mallorcas spezialisierter Jet-Ski-Verleihservice mit Basis in Costa de los Pinos. Wir bieten sichere und unvergessliche Erlebnisse auf dem Mittelmeer, mit Service in Cala Millor, Cala Bona, Sa Coma und Porto Cristo.</p>
        <p class="feature-desc">Unsere Mission ist einfach: Jeder Kunde verdient das bestmögliche Erlebnis auf dem Meer, mit erstklassiger Ausrüstung und einem persönlichen, professionellen Service. Mit Schwimmwesten, Briefings und täglich geprüften Sea-Doo-Jet-Skis hat Ihre Sicherheit oberste Priorität.</p>
        <a href="#" class="btn-cta mt-3" data-whatsapp>Ihr Erlebnis buchen</a>
      </div>
      <div class="col-lg-5">
        <img src="/assets/img/galeria-07-new.jpg" alt="Jet-Ski-Erlebnis auf Mallorca"
             loading="lazy" width="800" height="533" class="rounded-4 shadow-lg w-100">
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label">Unsere Werte</span>
      <h2 class="section-title">Was uns ausmacht</h2>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-sm-6 col-lg-3">
        <div class="service-card">
          <span class="service-card__icon">🛡️</span>
          <h3 class="service-card__title">Sicherheit zuerst</h3>
          <p class="service-card__desc">Schwimmweste, obligatorisches Briefing und klare Regeln vor jeder Abfahrt. Ihre Sicherheit hat höchste Priorität.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="service-card">
          <span class="service-card__icon">⭐</span>
          <h3 class="service-card__title">Garantierte Qualität</h3>
          <p class="service-card__desc">Sea-Doo-Flotte der neuesten Generation, täglich geprüft. Nur die beste Ausrüstung für das beste Erlebnis.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="service-card">
          <span class="service-card__icon">📍</span>
          <h3 class="service-card__title">Persönlicher Service</h3>
          <p class="service-card__desc">Direkte Strandlieferung. Persönliche Betreuung und Antwort innerhalb von 2 Stunden per WhatsApp.</p>
        </div>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="service-card">
          <span class="service-card__icon">🌊</span>
          <h3 class="service-card__title">Experten der Ostküste</h3>
          <p class="service-card__desc">Wir kennen jeden Abschnitt der Küste von Cala Millor bis Porto Cristo. Wir führen Sie, damit Sie jede Minute auf dem Wasser genießen.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-light-brand">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label">Bewertungen</span>
      <h2 class="section-title">Was unsere Kunden sagen</h2>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <p class="review-text">"Ein unglaubliches Erlebnis von Anfang bis Ende. Die Jet-Skis waren in perfektem Zustand, brandneu in diesem Jahr. Ich hatte viel mehr Spaß als erwartet und komme definitiv wieder."</p>
          <div class="review-author">— Mar C., Mallorca</div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <p class="review-text">"Ein einzigartiges Erlebnis – wir sind noch nie Jet-Ski gefahren und werden es definitiv wiederholen. Wir erkundeten die schönsten Buchten auf eigene Faust. Fantastisch!"</p>
          <div class="review-author">— Mario G., Spanien</div>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="review-card">
          <div class="review-stars">⭐⭐⭐⭐⭐</div>
          <p class="review-text">"Amazing experience!!! I will definitely do it again."</p>
          <div class="review-author">— Malena L.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-dark-brand text-center">
  <div class="container">
    <h2 class="section-title section-title--light mb-4">Bereit, das Erlebnis zu erleben?</h2>
    <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Per WhatsApp buchen</a>
    <div class="mt-4">
      <a href="/de/" class="btn-outline-light-brand" style="color:rgba(255,255,255,0.7)">← Zurück zur Startseite</a>
    </div>
  </div>
</section>

<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://jetexperiencemallorca.com/de/"},{"@type":"ListItem","position":2,"name":"Über uns"}]}]}
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/de/about-us.njk
git commit -m "feat(i18n): add German about page"
```

---

## Task 11: Create 4 German informational pages

**Files:**
- Create: `src/de/jet-ski-rental-mallorca.njk`
- Create: `src/de/jet-ski-routes-mallorca.njk`
- Create: `src/de/jet-ski-with-nautical-license-mallorca.njk`
- Create: `src/de/sea-doo-rental-mallorca.njk`

Each mirrors its `/en/` counterpart with German text and `/de/` internal links.

- [ ] **Step 1: Create `src/de/jet-ski-rental-mallorca.njk`**

```njk
---
layout: base.njk
pageTitle: "Jet-Ski-Verleih auf Mallorca | JetExperience Baleares"
pageDescription: "Jet-Ski mieten auf Mallorca ab 130€. Moderne Sea-Doo, Schwimmweste inklusive, Strandlieferung. Gebiet Cala Millor, Cala Bona, Sa Coma und Porto Cristo. Per WhatsApp buchen."
pageCanonical: "/de/jet-ski-rental-mallorca/"
permalink: /de/jet-ski-rental-mallorca/
langEs: "/alquiler-moto-agua-mallorca/"
langEn: "/en/jet-ski-rental-mallorca/"
langDe: "/de/jet-ski-rental-mallorca/"
currentLang: de
---

<nav class="container py-3" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/de/">Startseite</a></li>
    <li class="breadcrumb-item active" aria-current="page">Jet-Ski-Verleih Mallorca</li>
  </ol>
</nav>

<section class="feature-section py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <h1 class="section-title mb-4">Jet-Ski-Verleih auf Mallorca</h1>
        <p class="feature-desc">JetExperience Baleares bietet Jet-Ski-Verleih an der Ostküste Mallorcas, mit Basis in Costa de los Pinos. Wir liefern direkt an den Strand in Cala Millor, Cala Bona, Sa Coma und Porto Cristo.</p>
        <p class="feature-desc">Unsere Sea-Doo sind die modernsten Modelle auf dem Markt, täglich geprüft. Alles, was Sie brauchen, ist ein Sportbootführerschein und Lust auf das Mittelmeer.</p>
        <a href="#" class="btn-cta mt-3" data-whatsapp>Per WhatsApp buchen</a>
      </div>
      <div class="col-lg-6">
        <img src="/assets/img/galeria-08-new.jpg" alt="Sea-Doo Jet-Ski auf Mallorca"
             loading="lazy" width="800" height="450" class="rounded-4 shadow-lg w-100">
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-dark-brand">
  <div class="container">
    <div class="text-center mb-5">
      <span class="section-label" style="color:rgba(255,255,255,0.7)">Unsere Preise</span>
      <h2 class="section-title section-title--light">Wählen Sie Ihr Erlebnis</h2>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-4">
        <div style="border-radius:16px;background:#1a3a55;padding:2rem;text-align:center;">
          <p style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Beliebteste Option · Paare & Freunde</p>
          <span style="font-size:1.8rem;font-weight:800;color:#fff;">1h · 130€</span>
        </div>
      </div>
      <div class="col-md-4">
        <div style="border-radius:16px;background:#1a3a55;padding:2rem;text-align:center;">
          <p style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Für Gruppen und besondere Anlässe</p>
          <span style="font-size:1.8rem;font-weight:800;color:#fff;">2h · 200€</span>
        </div>
      </div>
      <div class="col-md-4">
        <div style="border-radius:16px;background:#1a3a55;padding:2rem;text-align:center;">
          <p style="color:rgba(255,255,255,0.8);margin-bottom:0.5rem;">Bootsführerscheinkurs inklusive</p>
          <span style="font-size:1.8rem;font-weight:800;color:#fff;">Pack · 260€</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6">
        <h2 class="section-title mb-4">Was ist inbegriffen?</h2>
        <ul class="checklist">
          <li class="checklist__item checklist__item--yes">Lieferung und Abholung am vereinbarten Ort</li>
          <li class="checklist__item checklist__item--yes">Schwimmweste für alle Passagiere</li>
          <li class="checklist__item checklist__item--yes">Schnorchel-Set</li>
          <li class="checklist__item checklist__item--yes">Faltbarer Anker</li>
          <li class="checklist__item checklist__item--yes">Sicherheitsbriefing</li>
          <li class="checklist__item checklist__item--no">Kraftstoff (nicht inklusive)</li>
          <li class="checklist__item checklist__item--no">Sicherheitskaution (bei Lieferung)</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <h2 class="section-title mb-4">Liefergebiete</h2>
        <p class="feature-desc mb-4">Wir sind an der Ostküste Mallorcas tätig. Wir bringen die Jet-Skis direkt zu Ihrem Strand:</p>
        <div class="d-flex flex-wrap gap-2">
          <a href="/de/jet-ski-cala-millor/" class="hero-badge" style="text-decoration:none;">Cala Millor</a>
          <a href="/de/jet-ski-cala-bona/" class="hero-badge" style="text-decoration:none;">Cala Bona</a>
          <a href="/de/jet-ski-sa-coma/" class="hero-badge" style="text-decoration:none;">Sa Coma</a>
          <a href="/de/jet-ski-porto-cristo/" class="hero-badge" style="text-decoration:none;">Porto Cristo</a>
          <a href="/de/jet-ski-costa-de-los-pinos/" class="hero-badge" style="text-decoration:none;">Costa de los Pinos</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-light-brand">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 mb-4 mb-lg-0"><h2 class="section-title">Häufig gestellte Fragen</h2></div>
      <div class="col-lg-7">
        <div class="accordion" id="faqService1">
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS1a">Was ist im Verleihpreis inbegriffen?</button>
            </h3>
            <div id="faqS1a" class="accordion-collapse collapse" data-bs-parent="#faqService1">
              <div class="accordion-body faq-body">Der Preis beinhaltet Lieferung und Abholung am vereinbarten Ort, Schwimmweste, Schnorchel-Set, faltbaren Anker und Sicherheitsbriefing. Kraftstoff und Sicherheitskaution sind extra.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS1b">Wohin liefern Sie den Jet-Ski?</button>
            </h3>
            <div id="faqS1b" class="accordion-collapse collapse" data-bs-parent="#faqService1">
              <div class="accordion-body faq-body">Wir liefern nach Cala Millor, Cala Bona, Sa Coma, Porto Cristo und Costa de los Pinos. Bestätigen Sie den genauen Treffpunkt bei der Buchung per WhatsApp.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS1c">Wie kann ich buchen?</button>
            </h3>
            <div id="faqS1c" class="accordion-collapse collapse" data-bs-parent="#faqService1">
              <div class="accordion-body faq-body">Am schnellsten per WhatsApp. Schicken Sie uns Datum, Ort und gewünschtes Erlebnis, und wir bestätigen die Verfügbarkeit innerhalb von 2 Stunden.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white text-center">
  <div class="container">
    <a href="#" class="btn-cta" data-whatsapp>Per WhatsApp buchen</a>
    <div class="mt-4"><a href="/de/" class="btn-outline-light-brand">← Zurück zur Startseite</a></div>
  </div>
</section>

<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://jetexperiencemallorca.com/de/"},{"@type":"ListItem","position":2,"name":"Jet-Ski-Verleih auf Mallorca"}]},{"@type":"Service","name":"Jet-Ski-Verleih auf Mallorca","provider":{"@id":"https://jetexperiencemallorca.com/#business"},"url":"https://jetexperiencemallorca.com/de/jet-ski-rental-mallorca/"}]}
</script>
```

- [ ] **Step 2: Create `src/de/jet-ski-routes-mallorca.njk`**

```njk
---
layout: base.njk
pageTitle: "Jet-Ski-Routen auf Mallorca | JetExperience Baleares"
pageDescription: "Erkunden Sie die Ostküste Mallorcas per Jet-Ski. Routen von Costa de los Pinos nach Cala Millor, Cala Bona, Sa Coma und Porto Cristo. Per WhatsApp buchen."
pageCanonical: "/de/jet-ski-routes-mallorca/"
permalink: /de/jet-ski-routes-mallorca/
langEs: "/rutas-moto-agua-mallorca/"
langEn: "/en/jet-ski-routes-mallorca/"
langDe: "/de/jet-ski-routes-mallorca/"
currentLang: de
---

<nav class="container py-3" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/de/">Startseite</a></li>
    <li class="breadcrumb-item active" aria-current="page">Jet-Ski-Routen Mallorca</li>
  </ol>
</nav>

<section class="feature-section py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-7">
        <h1 class="section-title mb-4">Jet-Ski-Routen auf Mallorca</h1>
        <p class="feature-desc">Von unserer Basis in Costa de los Pinos haben Sie Zugang zu einigen der spektakulärsten Küstenabschnitte Mallorcas. Sie können eine kurze Route wählen, um die Gewässer von Cala Millor zu genießen, oder bis zum Naturhafen von Porto Cristo mit dem Special 2-Stunden-Pack vordringen.</p>
        <p class="feature-desc">Sie bestimmen Tempo und Ziel. Unsere einzige Voraussetzung: ein Sportbootführerschein und Lust, das Mittelmeer zu erkunden.</p>
        <a href="#" class="btn-cta mt-3" data-whatsapp>Per WhatsApp buchen</a>
      </div>
      <div class="col-lg-5">
        <img src="/assets/img/galeria-11-new.jpg" alt="Luftaufnahme von Jet-Ski-Routen auf Mallorca"
             loading="lazy" width="800" height="600" class="rounded-4 shadow-lg w-100">
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <div class="text-center mb-5"><h2 class="section-title">Wählen Sie Ihre Route</h2></div>
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="review-card h-100">
          <div class="review-stars" style="font-size:1.5rem;">🏖️</div>
          <h3 style="font-family:var(--font-title);font-weight:700;font-size:1.1rem;margin:1rem 0 0.5rem;">Kurze Route — 1 Stunde</h3>
          <p style="font-size:0.85rem;color:#666;margin-bottom:0.5rem;"><strong>Cala Millor · Cala Bona · Sa Coma</strong></p>
          <p style="font-size:0.9rem;">Fahren Sie entlang der beliebtesten Strände der Ostküste. Perfekt für Erstfahrer. Ruhige Gewässer und atemberaubende Ausblicke.</p>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <a href="/de/jet-ski-cala-millor/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Cala Millor</a>
            <a href="/de/jet-ski-cala-bona/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Cala Bona</a>
            <a href="/de/jet-ski-sa-coma/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Sa Coma</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="review-card h-100">
          <div class="review-stars" style="font-size:1.5rem;">🌿</div>
          <h3 style="font-family:var(--font-title);font-weight:700;font-size:1.1rem;margin:1rem 0 0.5rem;">Mittlere Route — 1–2 Stunden</h3>
          <p style="font-size:0.85rem;color:#666;margin-bottom:0.5rem;"><strong>Costa de los Pinos · Cala Bona</strong></p>
          <p style="font-size:0.9rem;">Erkunden Sie das exklusive Costa de los Pinos und den charmanten Hafen von Cala Bona. Ruhige Gewässer, ideal für Gruppen und Familien.</p>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <a href="/de/jet-ski-costa-de-los-pinos/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Costa de los Pinos</a>
            <a href="/de/jet-ski-cala-bona/" class="hero-badge" style="text-decoration:none;font-size:0.8rem;">Cala Bona</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="review-card h-100">
          <div class="review-stars" style="font-size:1.5rem;">🗺️</div>
          <h3 style="font-family:var(--font-title);font-weight:700;font-size:1.1rem;margin:1rem 0 0.5rem;">Lange Route — 2 Stunden</h3>
          <p style="font-size:0.85rem;color:#666;margin-bottom:0.5rem;"><strong>Porto Cristo · Coves del Drach</strong></p>
          <p style="font-size:0.9rem;">Unsere abenteuerlichste Route: ~12 km unberührte Küste bis zum Naturhafen von Porto Cristo. Erfahrung erforderlich. Special 2-Stunden-Pack.</p>
          <div class="d-flex flex-wrap gap-2 mt-3">
            <a href="/de/jet-ski-porto-cristo/" class="hero-badge hero-badge--accent" style="text-decoration:none;font-size:0.8rem;">Porto Cristo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-light-brand">
  <div class="container">
    <h2 class="section-title mb-4">Navigationstipps</h2>
    <ul class="checklist">
      <li class="checklist__item checklist__item--yes">Immer parallel zur Küste fahren, max. 1 Seemeile vom Ufer</li>
      <li class="checklist__item checklist__item--yes">Geschwindigkeit in der Nähe von Schwimmern und anderen Booten reduzieren</li>
      <li class="checklist__item checklist__item--yes">Wasser und Sonnenschutz mitbringen</li>
      <li class="checklist__item checklist__item--yes">Maritime Beschilderung beachten</li>
      <li class="checklist__item checklist__item--yes">Im Zweifelsfall vor der Abfahrt bei uns nachfragen</li>
    </ul>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 mb-4 mb-lg-0"><h2 class="section-title">Häufig gestellte Fragen</h2></div>
      <div class="col-lg-7">
        <div class="accordion" id="faqService4">
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS4a">Kann ich meine eigene Route wählen?</button>
            </h3>
            <div id="faqS4a" class="accordion-collapse collapse" data-bs-parent="#faqService4">
              <div class="accordion-body faq-body">Ja. Sie können innerhalb des autorisierten Gebiets frei navigieren. Vor der Abfahrt erklären wir Ihnen die Navigationsgrenzen und empfehlen die besten Spots basierend auf Ihrer verfügbaren Zeit.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS4b">Was ist die beliebteste Route?</button>
            </h3>
            <div id="faqS4b" class="accordion-collapse collapse" data-bs-parent="#faqService4">
              <div class="accordion-body faq-body">Die kurze Route entlang Cala Millor, Cala Bona und Sa Coma ist die beliebteste. Perfekt für 1 Stunde und ermöglicht es, die besten Gewässer der Region in gemächlichem Tempo zu genießen.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS4c">Kann man Porto Cristo in 1 Stunde erreichen?</button>
            </h3>
            <div id="faqS4c" class="accordion-collapse collapse" data-bs-parent="#faqService4">
              <div class="accordion-body faq-body">Das empfehlen wir nicht. Porto Cristo ist ~12 km von unserer Basis entfernt und erfordert 2 Stunden, um die Fahrt in entspanntem Tempo zu genießen. Für diese Route empfehlen wir das Special 2-Stunden-Pack.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-dark-brand text-center">
  <div class="container">
    <h2 class="section-title section-title--light mb-4">Welche Route spricht Sie an?</h2>
    <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Per WhatsApp buchen</a>
    <div class="mt-4"><a href="/de/" style="color:rgba(255,255,255,0.7)">← Zurück zur Startseite</a></div>
  </div>
</section>

<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://jetexperiencemallorca.com/de/"},{"@type":"ListItem","position":2,"name":"Jet-Ski-Routen auf Mallorca"}]},{"@type":"Service","name":"Jet-Ski-Routen auf Mallorca","provider":{"@id":"https://jetexperiencemallorca.com/#business"},"url":"https://jetexperiencemallorca.com/de/jet-ski-routes-mallorca/"}]}
</script>
```

- [ ] **Step 3: Create `src/de/jet-ski-with-nautical-license-mallorca.njk`**

```njk
---
layout: base.njk
pageTitle: "Jet-Ski-Verleih mit Bootsführerschein auf Mallorca | JetExperience Baleares"
pageDescription: "Für den Jet-Ski-Verleih auf Mallorca ist ein Bootsführerschein erforderlich. Erfahren Sie, welcher Führerschein gültig ist, und unser Sonderpack Führerschein + 2h für 260€."
pageCanonical: "/de/jet-ski-with-nautical-license-mallorca/"
permalink: /de/jet-ski-with-nautical-license-mallorca/
langEs: "/moto-agua-con-licencia-mallorca/"
langEn: "/en/jet-ski-with-nautical-license-mallorca/"
langDe: "/de/jet-ski-with-nautical-license-mallorca/"
currentLang: de
---

<nav class="container py-3" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/de/">Startseite</a></li>
    <li class="breadcrumb-item active" aria-current="page">Jet-Ski mit Bootsführerschein</li>
  </ol>
</nav>

<section class="feature-section py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-7">
        <h1 class="section-title mb-4">Jet-Ski-Verleih mit Bootsführerschein auf Mallorca</h1>
        <p class="feature-desc">In Spanien ist für das Fahren eines Jet-Skis ein Sportbootführerschein oder eine höhere nautische Qualifikation erforderlich. Bei JetExperience Baleares prüfen wir die Unterlagen vor jeder Abfahrt, um ein sicheres und legales Erlebnis zu gewährleisten.</p>
        <p class="feature-desc">Wenn Sie noch keinen Führerschein haben, haben wir das perfekte Pack: einen zertifizierten Bootsführerscheinkurs plus 2 Stunden Verleih für nur 260€.</p>
        <a href="#pack-licence" class="btn-cta mt-3">Führerschein + Verleih Pack ansehen</a>
      </div>
      <div class="col-lg-5">
        <img src="/assets/img/galeria-01-new.jpg" alt="Jet-Ski mit Bootsführerschein auf Mallorca"
             loading="lazy" width="800" height="532" class="rounded-4 shadow-lg w-100">
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <h2 class="section-title mb-4">Welchen Führerschein benötigen Sie?</h2>
    <ul class="checklist">
      <li class="checklist__item checklist__item--yes">Sportbootführerschein (RLNA) — der gängigste für Jet-Ski</li>
      <li class="checklist__item checklist__item--yes">Küstenpatent (PER)</li>
      <li class="checklist__item checklist__item--yes">Yachtkapitän (PY) oder höhere Qualifikation</li>
      <li class="checklist__item checklist__item--no">Pkw-Führerschein — nicht gültig</li>
    </ul>
    <p class="feature-desc mt-4">Was Sie am Tag mitbringen müssen: Original-Bootsführerschein oder digitale Kopie, Ausweis oder Reisepass, Badebekleidung und Sonnencreme.</p>
  </div>
</section>

<section id="pack-licence" class="py-section bg-dark-brand">
  <div class="container text-center">
    <span class="section-label" style="color:rgba(255,255,255,0.7)">Sonderangebot</span>
    <h2 class="section-title section-title--light mb-3">Bootsführerschein + 2h Jet-Ski Pack</h2>
    <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;max-width:560px;margin:0 auto 1.5rem;">Zertifizierter Bootsführerscheinkurs plus 2 Stunden Verleih in Cala Millor. Alles für 260€.</p>
    <div style="font-size:3rem;font-weight:800;color:#fff;margin-bottom:1.5rem;">260€</div>
    <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Verfügbarkeit prüfen →</a>
  </div>
</section>

<section class="py-section bg-light-brand">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 mb-4 mb-lg-0"><h2 class="section-title">Häufig gestellte Fragen</h2></div>
      <div class="col-lg-7">
        <div class="accordion" id="faqService2">
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS2a">Welchen Führerschein benötigt man für einen Jet-Ski auf Mallorca?</button>
            </h3>
            <div id="faqS2a" class="accordion-collapse collapse" data-bs-parent="#faqService2">
              <div class="accordion-body faq-body">Mindestens ein Sportbootführerschein (RLNA) oder eine höhere nautische Qualifikation wie PER oder Yachtkapitän ist erforderlich. Ein Pkw-Führerschein ist nicht gültig.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS2b">Kann ich einen Jet-Ski ohne Führerschein mieten?</button>
            </h3>
            <div id="faqS2b" class="accordion-collapse collapse" data-bs-parent="#faqService2">
              <div class="accordion-body faq-body">Ohne Führerschein dürfen Sie nicht fahren. Als Passagier können Sie jedoch mit einem lizenzierten Fahrer mitfahren. Wenn Sie selbst fahren möchten, empfehlen wir unser Führerschein + 2h Jet-Ski Pack für 260€.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS2c">Wo kann ich auf Mallorca einen Bootsführerschein machen?</button>
            </h3>
            <div id="faqS2c" class="accordion-collapse collapse" data-bs-parent="#faqService2">
              <div class="accordion-body faq-body">Es gibt mehrere Segelschulen auf Mallorca, die den Sportbootführerscheinkurs anbieten. Wir bieten auch das Komplettpaket an: zertifizierter Kurs + 2 Stunden Verleih. Fragen Sie uns per WhatsApp.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white text-center">
  <div class="container">
    <a href="#" class="btn-cta" data-whatsapp>Per WhatsApp buchen</a>
    <div class="mt-4"><a href="/de/" class="btn-outline-light-brand">← Zurück zur Startseite</a></div>
  </div>
</section>

<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://jetexperiencemallorca.com/de/"},{"@type":"ListItem","position":2,"name":"Jet-Ski-Verleih mit Bootsführerschein auf Mallorca"}]},{"@type":"Service","name":"Jet-Ski-Verleih mit Bootsführerschein auf Mallorca","provider":{"@id":"https://jetexperiencemallorca.com/#business"},"url":"https://jetexperiencemallorca.com/de/jet-ski-with-nautical-license-mallorca/"}]}
</script>
```

- [ ] **Step 4: Create `src/de/sea-doo-rental-mallorca.njk`**

```njk
---
layout: base.njk
pageTitle: "Sea-Doo-Verleih auf Mallorca | JetExperience Baleares"
pageDescription: "Sea-Doo mieten auf Mallorca. Moderne Modelle mit ST3 Hull, iTC-System und ECO-Modus. Strandlieferung. Ab 130€/Stunde. Per WhatsApp buchen."
pageCanonical: "/de/sea-doo-rental-mallorca/"
permalink: /de/sea-doo-rental-mallorca/
langEs: "/alquiler-seadoo-mallorca/"
langEn: "/en/sea-doo-rental-mallorca/"
langDe: "/de/sea-doo-rental-mallorca/"
currentLang: de
---

<nav class="container py-3" aria-label="Breadcrumb">
  <ol class="breadcrumb mb-0">
    <li class="breadcrumb-item"><a href="/de/">Startseite</a></li>
    <li class="breadcrumb-item active" aria-current="page">Sea-Doo-Verleih Mallorca</li>
  </ol>
</nav>

<section class="feature-section py-section bg-light-brand">
  <div class="container">
    <div class="row align-items-center g-5">
      <div class="col-lg-6">
        <h1 class="section-title mb-4">Sea-Doo-Verleih auf Mallorca</h1>
        <p class="feature-desc">Bei JetExperience Baleares arbeiten wir ausschließlich mit Sea-Doo, der weltweit bekanntesten Marke für Wasserfahrzeuge. Unsere Modelle sind die neuesten auf dem Markt, täglich vor jeder Abfahrt geprüft.</p>
        <p class="feature-desc">Der Sea-Doo GTI verbindet Leistung, Sicherheit und Komfort. Er bietet Platz für bis zu 3 Personen pro Einheit und ist mit Bluetooth-Lautsprechern, inklusive Schwimmweste und der gesamten Technologie für ein unvergessliches Erlebnis ausgestattet.</p>
        <a href="#" class="btn-cta mt-3" data-whatsapp>Per WhatsApp buchen</a>
      </div>
      <div class="col-lg-6">
        <div class="fleet-photos">
          <img src="/assets/img/jetski_seadoo.webp" alt="Sea-Doo GTI Seitenansicht, Cala Millor"
               loading="lazy" width="1280" height="960" class="fleet-photo fleet-photo--top rounded-4 shadow-lg">
          <img src="/assets/img/fleet-01.avif" alt="Sea-Doo GTI Frontansicht, Mallorca"
               loading="lazy" width="661" height="480" class="fleet-photo fleet-photo--bottom rounded-4 shadow-lg">
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <h2 class="section-title text-center mb-5">Technische Daten</h2>
    <div class="fleet-specs justify-content-center" style="display:flex;flex-wrap:wrap;gap:2rem;">
      <div class="fleet-spec"><span class="fleet-spec__icon">🏄</span><div><strong>ST3 Hull™ Shell</strong><small>Hochfestes Fiberglas</small></div></div>
      <div class="fleet-spec"><span class="fleet-spec__icon">⚙️</span><div><strong>iTC™ System</strong><small>Intelligente Gasregelung</small></div></div>
      <div class="fleet-spec"><span class="fleet-spec__icon">💧</span><div><strong>ECO® Mode (70L)</strong><small>Effizienter Kraftstoffverbrauch</small></div></div>
      <div class="fleet-spec"><span class="fleet-spec__icon">🎵</span><div><strong>Bluetooth-Lautsprecher</strong><small>Musik auf dem Wasser</small></div></div>
    </div>
  </div>
</section>

<section class="py-section bg-light-brand">
  <div class="container">
    <div class="row g-5 align-items-start">
      <div class="col-lg-6">
        <h2 class="section-title mb-4">Kapazität & Sicherheit</h2>
        <ul class="checklist">
          <li class="checklist__item checklist__item--yes">Bis zu 3 Personen pro Jet-Ski</li>
          <li class="checklist__item checklist__item--yes">Schwimmweste für alle inklusive</li>
          <li class="checklist__item checklist__item--yes">Tägliche technische Inspektion</li>
          <li class="checklist__item checklist__item--yes">Aktuelle Jahresmodelle</li>
          <li class="checklist__item checklist__item--yes">Obligatorisches Sicherheitsbriefing</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <h2 class="section-title mb-4">Preise</h2>
        <ul class="checklist">
          <li class="checklist__item checklist__item--yes">1 Stunde — 130€</li>
          <li class="checklist__item checklist__item--yes">2 Stunden — 200€</li>
          <li class="checklist__item checklist__item--yes">Führerschein + 2h Pack — 260€</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-white">
  <div class="container">
    <div class="row">
      <div class="col-lg-5 mb-4 mb-lg-0"><h2 class="section-title">Häufig gestellte Fragen</h2></div>
      <div class="col-lg-7">
        <div class="accordion" id="faqService3">
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS3a">Welche Sea-Doo-Modelle haben Sie?</button>
            </h3>
            <div id="faqS3a" class="accordion-collapse collapse" data-bs-parent="#faqService3">
              <div class="accordion-body faq-body">Wir arbeiten mit den neuesten Sea-Doo GTI Modellen, jede Saison aktualisiert. Es sind die modernsten Modelle auf dem Markt, mit Bluetooth-Lautsprechern und iTC-System inklusive.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS3b">Wie viele Personen passen auf den Sea-Doo?</button>
            </h3>
            <div id="faqS3b" class="accordion-collapse collapse" data-bs-parent="#faqService3">
              <div class="accordion-body faq-body">Unsere Sea-Doo bieten Platz für bis zu 3 Personen pro Einheit. Der Fahrer muss einen Bootsführerschein besitzen; Passagiere benötigen keinen.</div>
            </div>
          </div>
          <div class="accordion-item faq-item">
            <h3 class="accordion-header">
              <button class="accordion-button faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqS3c">Sind die Jet-Skis neu?</button>
            </h3>
            <div id="faqS3c" class="accordion-collapse collapse" data-bs-parent="#faqService3">
              <div class="accordion-body faq-body">Ja. Wir erneuern unsere Flotte regelmäßig, um immer die neuesten Modelle anbieten zu können. Alle Jet-Skis werden täglich technisch geprüft, bevor jede Abfahrt stattfindet.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-section bg-dark-brand text-center">
  <div class="container">
    <h2 class="section-title section-title--light mb-4">Bereit, den Sea-Doo auszuprobieren?</h2>
    <a href="#" class="btn-cta btn-cta--dark" data-whatsapp>Per WhatsApp buchen</a>
    <div class="mt-4"><a href="/de/" style="color:rgba(255,255,255,0.7)">← Zurück zur Startseite</a></div>
  </div>
</section>

<script type="application/ld+json">
{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Startseite","item":"https://jetexperiencemallorca.com/de/"},{"@type":"ListItem","position":2,"name":"Sea-Doo-Verleih auf Mallorca"}]},{"@type":"Service","name":"Sea-Doo-Verleih auf Mallorca","provider":{"@id":"https://jetexperiencemallorca.com/#business"},"url":"https://jetexperiencemallorca.com/de/sea-doo-rental-mallorca/"}]}
</script>
```

- [ ] **Step 5: Commit**

```bash
git add src/de/
git commit -m "feat(i18n): add 4 German informational pages (rental, routes, licence, sea-doo)"
```

---

## Task 12: Final smoke test

- [ ] **Step 1: Run full build**

```bash
npm run build 2>&1 | tail -10
```
Expected: build completes, total output count matches previous + ~14 new German pages.

- [ ] **Step 2: Check all German pages exist in `_site/`**

```bash
ls _site/de/
```
Expected output (14 dirs/files):
```
about-us/
index.html
jet-ski-cala-bona/
jet-ski-cala-millor/
jet-ski-costa-de-los-pinos/
jet-ski-porto-cristo/
jet-ski-rental-mallorca/
jet-ski-routes-mallorca/
jet-ski-sa-coma/
jet-ski-with-nautical-license-mallorca/
sea-doo-rental-mallorca/
```

- [ ] **Step 3: Verify DE button appears in header on a Spanish page**

```bash
grep -c 'lang-btn' _site/index.html
```
Expected: `3` (ES, EN, DE buttons)

- [ ] **Step 4: Verify hreflang="de" in a German page**

```bash
grep 'hreflang="de"' _site/de/index.html
```
Expected: one line with `hreflang="de"` pointing to `https://jetexperiencemallorca.com/de/`

- [ ] **Step 5: Verify hreflang="de" in a Spanish page**

```bash
grep 'hreflang="de"' _site/index.html
```
Expected: one line with `hreflang="de"` pointing to `https://jetexperiencemallorca.com/de/`

- [ ] **Step 6: Start dev server and manually open `/de/` in browser**

```bash
npm run dev
```
Open http://localhost:8080/de/ and verify:
- DE button is highlighted/active in the nav
- Page title is in German
- All text switches to German (after JS loads)
- WhatsApp booking button generates German message
- Links to location pages go to `/de/jet-ski-...`

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "feat(i18n): complete German (DE) language implementation"
```
