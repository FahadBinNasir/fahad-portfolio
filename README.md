# Portfolio Redesign — Minimal Dark Editorial

Full rebuild of fahadbinnasir.tech as a single-page portfolio.

## What's new

- **One-pager** (was 3 pages): Hero → About → Featured Projects → More Projects → Skills → Contact
- **Hero** now has a real positioning statement ("I build AI-powered applications, backends, and intelligent automation") instead of a keyword list
- **3 featured projects** (ApplyAI, AuthentiQ, Unified Knowledge Brain) written as Problem → Approach → Result — the format recruiters respond to
- **9 more projects** in a compact list; every project links to its live site/GitHub where one exists
- **Skills** use hand-drawn SVG icons (no emojis), grouped honestly, no proficiency bars
- **About** adds an education timeline; contact keeps the working FormSubmit form
- **SEO preserved**: canonical, Open Graph/Twitter cards, JSON-LD Person+Website schemas, robots.txt (incl. AI crawlers), sitemap.xml
- **Old URLs redirect**: `/projects.html` → `/#projects`, `/contact.html` → `/#contact` (via `vercel.json`, permanent 301s)

## Deploy (review first, then go live)

In Git Bash, inside your `fahad-portfolio` folder:

```
git checkout -b redesign
git rm -r .
git clean -fd
```

Then extract this zip's contents into the folder and:

```
git add -A
git commit -m "Full redesign: minimal dark editorial one-pager"
git push -u origin redesign
```

Vercel will build a **preview deployment** with its own URL — review it there first.
If it looks right, merge the `redesign` branch into `main` on GitHub (Pull Request →
Merge). Vercel then deploys it to fahadbinnasir.tech automatically.

After going live, resubmit the sitemap in Search Console once
(`https://fahadbinnasir.tech/sitemap.xml`) since it changed from 3 URLs to 1.
