# Deployment

Projektet er klar til GitHub og Vercel. Der er ingen npm-afhængigheder, så Vercel kan bygge det med den Node-version, platformen stiller til rådighed.

## GitHub

Anbefalet repo-navn: `vaccineskaerm.dk`

Hvis GitHub CLI er installeret og du er logget ind:

```bash
gh repo create vaccineskaerm.dk --private --source=. --remote=origin --push
```

Hvis repoet oprettes i GitHub UI som et tomt repo uden README:

```bash
git remote add origin git@github.com:<owner>/vaccineskaerm.dk.git
git push -u origin main
```

## Vercel

Importer GitHub-repoet i Vercel. `vercel.json` sætter allerede de relevante værdier:

- Framework Preset: `Other`
- Install Command: tom
- Build Command: `node apps/screen/scripts/build.mjs`
- Output Directory: `apps/screen/dist`

Alternativt kan projektet deployes fra roden med Vercel CLI, når du er logget ind:

```bash
vercel deploy --prod
```
