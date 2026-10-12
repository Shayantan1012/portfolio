# Shayantan Biswas — React Portfolio

A responsive React portfolio built with Vite and Lucide icons. Content is based on the supplied résumé; project preview graphics are illustrative interface concepts.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite. Create a production build with `npm.cmd run build`; preview it with `npm.cmd run preview`.

## Customize

- `src/main.jsx`: biography, projects, research, skills, and links.
- `src/styles.css`: responsive design, colors, typography, and dark theme.
- `public/Shayantan-Biswas-Resume.pdf`: downloadable résumé.
- `index.html`: title and search metadata.

Features include project category filters, accessible project dialogs, a mobile navigation menu, saved light/dark preference, email copying, and direct repository and certificate links. The contact button opens Gmail compose in a new tab with the recipient filled in. Visitors may need to sign in to Gmail; they write and send the message themselves.

The Google Fonts stylesheet is optional; local system fonts provide a fallback if it is unavailable.
