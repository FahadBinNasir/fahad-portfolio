# Portfolio Redesign — Minimal Dark Editorial

Full rebuild of fahadbinnasir.tech as a single-page portfolio.

## What's new

- **One-pager** (was 3 pages): Hero → About → Featured Projects → More Projects → Skills → Contact
- **Hero** now has a real positioning statement ("I build AI-powered applications, backends, and intelligent automation") plus a subtle CSS-only signature visual (faint grid + slow-drifting mint glow — no images, no heavy animation)
- **3 featured projects** (ApplyAI, AuthentiQ, Unified Knowledge Brain) written as Problem → Approach → Result — the format recruiters respond to
- **9 more projects** in a compact list; every project links to its live site/GitHub where one exists
- **Skills** use hand-drawn SVG icons (no emojis), grouped honestly, no proficiency bars
- **About** adds an education timeline; contact keeps the working FormSubmit form
- **SEO preserved**: canonical, Open Graph/Twitter cards, JSON-LD Person+Website schemas, robots.txt (incl. AI crawlers), sitemap.xml
- **Old URLs redirect**: `/projects.html` → `/#projects`, `/contact.html` → `/#contact` (via `vercel.json`, permanent 301s)

## Deploy (review first, then go live)

In Git Bash, inside your `fahad-portfolio` folder:

**1. Check what's there first** — never skip this:

```
git status
```

If you see files you created yourself (like a `.patch` file) listed as untracked,
move them somewhere safe before continuing. Do NOT run `git clean -fd` —
it permanently deletes untracked files.

**2. Start a fresh branch:**

```
git checkout -b redesign
```

**3. Extract this zip's contents into the folder**, letting it overwrite
`index.html`, `css/style.css`, `sitemap.xml`, etc.

**4. Remove the old pages you no longer need** (they now redirect to sections
of the one-pager):

```
git rm projects.html contact.html
```

Then check `git status` again — if old folders from the previous design
(e.g. images or css files the new design doesn't use) still show as tracked,
remove those too with `git rm -r <folder>`.

**5. Commit and push:**

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
