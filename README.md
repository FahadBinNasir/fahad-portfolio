# Fahad Bin Nasir — Portfolio

Personal portfolio site for **Fahad Bin Nasir**, final-year Software Engineering student at Bahria University, Karachi.

**Live:** https://fahadbinnasir.tech  
**Repo:** https://github.com/FahadBinNasir/fahad-portfolio

## What it is

A static three-page portfolio (Home, Projects, Contact) with a dark terminal-meets-editorial aesthetic — Syne display type paired with DM Mono accents, scroll-triggered animations, and a working contact form.

## Tech

- Plain HTML / CSS / JavaScript — no build step, no framework
- Google Fonts: Syne + DM Mono
- Contact form delivers via [FormSubmit](https://formsubmit.co) (AJAX) to fahad@fahadbinnasir.tech
- Hosted on [Vercel](https://vercel.com), domain via GitHub Student Developer Pack (.tech)

## Structure

```
├── index.html        # Home — hero, about, skills, featured project
├── projects.html     # Project grid (12 projects)
├── contact.html      # Contact links, working form, education
├── css/style.css     # All styles
├── js/main.js        # Scroll animations, nav, form submit
└── favicon.svg       # Site icon
```

## Run locally

No build needed — open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

Pushes to `main` auto-deploy on Vercel. Custom domain `fahadbinnasir.tech` is configured in the Vercel project dashboard (DNS: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`).

> Note: the contact form's first-ever submission triggers a FormSubmit activation email — confirm it once so messages start delivering.

## Contact

- Email: fahad@fahadbinnasir.tech
- GitHub: https://github.com/FahadBinNasir
- Location: Karachi, Pakistan
