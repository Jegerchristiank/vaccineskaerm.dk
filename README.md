# Vaccineskærm

Fuldskærms infoskærm til vaccineventeværelse inspireret af vacciner.dk og Region Sjællands visuelle identitet.

## Funktioner

- Fuldskærmsvisning uden scroll.
- Dansk lokal tid med sekunder.
- Skjult indstillingspanel, der kun vises efter musebevægelse, touch eller tastatur.
- Radioknapper til DR P4 Sjælland, DR P5 og DR P3.
- Kampagneslide med fast besked om vacciner.dk.
- Deterministisk kampagneskift: når kampagneslides er slået til, vises kampagnen mindst én gang inden for 15 minutter.

## Kør lokalt

```bash
node apps/screen/scripts/serve.mjs
```

Åbn derefter den viste lokale adresse og sæt browseren i fuldskærm.

## Build

```bash
node apps/screen/scripts/build.mjs
```

Build-output ligger i `apps/screen/dist`.

## Vercel

Projektet er konfigureret i `vercel.json` til at bygge med:

```bash
node apps/screen/scripts/build.mjs
```

Output directory er `apps/screen/dist`.
