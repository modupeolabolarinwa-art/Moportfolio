# Modupe Phillips portfolio

A static portfolio site (HTML, CSS, JavaScript) with no build step, ready for Vercel.

```
index.html     the page content
404.html       custom "stuck in go-slow" error page (Vercel uses it automatically)
styles.css     colours, type and layout (tokens at the top)
script.js      project links, preloader, hover previews, footer animation
vercel.json    Vercel settings
assets/        favicon; put project screenshots here
```

## Run it locally
Open `index.html` in a browser, or run `npx serve .` and visit http://localhost:3000.

## Put it on GitHub
1. Create an empty repo on github.com called `portfolio` (don't add a README).
2. In this folder, run:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```

## Deploy on Vercel
1. Sign in at vercel.com with GitHub.
2. Click **Add New → Project**, pick the `portfolio` repo, then **Deploy**. Leave the framework as "Other" and the build command empty.
3. Every `git push` to `main` now redeploys automatically.
4. Optional: **Settings → Domains** to add your own domain.

You can also deploy without GitHub: `npm i -g vercel`, then run `vercel` and then `vercel --prod` in this folder.

## Things to update
- **Project links:** fill in `PROJECT_LINKS` in `script.js`. Each project title becomes a link once its URL is filled in.
- **Screenshots:** each project shows, in order: your own screenshot from `assets/shots/` if there is one, otherwise a live screenshot of its site from microlink.io, otherwise the drawn preview. To use your own, save a 4:3 image (about 1280×960) as `assets/shots/nexcent.jpg`, `worknest.jpg`, `lagos.jpg` or `lusterquest.jpg` (or `.png`). WorkNest has no live link, so it needs your own screenshot.
- **Photo:** `assets/mo.jpg`. Replace it with another 4:5 portrait using the same name to change it.
- **Years and descriptions:** every project shows 2026, so correct the years and check the Nexcent description.
