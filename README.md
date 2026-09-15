# Personal Academic Website

A plain HTML/CSS/JS site, no build step or framework required. Each
section of the page is a small, independent JS module — edit the one
you need without touching the rest.

## Structure

```
index.html                 # page shell — mount points for each section
css/
  base.css                 # variables (colors/fonts), reset, shared layout
  nav.css / math10.css / news.css / experience.css / publications.css / cv.css / contact.css
js/
  main.js                  # orchestrator — renders sections in order
  theme.js                 # light/dark mode toggle
  nav.js                   # top navigation bar
  math10.js                # About/hero section
  news.js                  # Recent News list
  experience.js            # Experience timeline
  skills.js                # Skills section
  publications.js          # Publications grid
  cv.js                    # CV download section
  contact.js               # Footer / contact links
  utils.js                 # shared helpers (scroll-reveal animation)
assets/
  photo.jpg                # your headshot
  cv.pdf                   # downloadable CV
```

## Editing content

Every section's content lives in a small `data` object (or array) at
the top of its own file — you don't need to touch the render logic or
any other file:

| What to change | File |
|---|---|
| Name, title, university, bio, photo | `js/math10.js` |
| News/updates list | `js/news.js` |
| Work/research roles, dates, descriptions | `js/experience.js` |
| Skill categories and tags | `js/skills.js` |
| Papers, authors, venues, links | `js/publications.js` |
| CV blurb / CV file path | `js/cv.js` |
| Email, social links | `js/contact.js` |
| Nav links, site brand name | `js/nav.js` |
| Colors, fonts, spacing | `css/base.css` (CSS variables at the top) |

Also update the `<title>` and `<meta name="description">` tags in
`index.html`'s `<head>`.

To replace the photo, drop your image into `assets/` and update the
`photo` path in `js/math10.js`. To replace the CV, drop your PDF into
`assets/` and update `cvPath` in `js/cv.js` (currently points at
`assets/cv.pdf`).

Some publications in `js/publications.js` don't have a link yet — leave
the `links` value as `"#"` (or omit the key) and no button will render
for that entry; fill in the real DOI/PDF/project URL and the link
button appears automatically.

## Previewing locally

Because the site uses ES modules (`import`/`export`), opening
`index.html` directly via `file://` will fail due to browser CORS
restrictions. Serve it over a local HTTP server instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Deploying to GitHub Pages

This repo is already connected to `git@github.com:math10/math10.github.io.git`.
Since it's a `<username>.github.io` repository, GitHub Pages serves it
automatically from the `main` branch root — no extra Pages configuration
needed. To publish an update:

```bash
git add .
git commit -m "Update site"
git push
```

The site is live at `https://math10.github.io/` within a minute or two
of each push.

If you'd rather use a custom domain, add a `CNAME` file with your
domain name at the project root and configure your DNS provider per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
