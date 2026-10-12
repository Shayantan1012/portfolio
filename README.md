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
- `src/typography.css`: readable text sizes, text contrast, and responsive typography.
- `src/Certificates.jsx` and `src/certificates.css`: LinkedIn-listed certificates and résumé-linked research completion certificates.
- `public/Shayantan-Biswas-Resume.pdf`: downloadable résumé.
- `index.html`: title and search metadata.

Features include project category filters, accessible project dialogs, a mobile navigation menu, saved light/dark preference, and direct repository and certificate links. The navigation offers a résumé download, and the closing section links to GitHub and the résumé. The hero social links show GitHub and LinkedIn. The visible footer contact address opens Gmail compose in a new tab with the recipient filled in. The footer also offers a copy-email button with feedback.

The Google Fonts stylesheet is optional; local system fonts provide a fallback if it is unavailable.

Certificate names, issuers, and available dates were taken from the public LinkedIn profile listing. The Decode DSA with C++, Decode Full Stack Web Dev 1.0, and IEEE cards open Google Drive certificate links supplied by the user. The full-stack course preserves the July 2024 expiry shown on LinkedIn. The IIT Guwahati and Jadavpur University research certificates use the Google Drive URLs supplied in the résumé; the IIT Hyderabad certificate uses the Google Drive URL supplied directly by the user. Research certificate cards and internship links share the same source data.
