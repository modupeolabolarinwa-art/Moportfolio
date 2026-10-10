# Modupe Phillips portfolio

A static portfolio site (HTML, CSS, JavaScript) with no build step, ready for Vercel.

```
index.html     the page content
styles.css     colours, type and layout (tokens at the top)
script.js      project links: paste your live and GitHub URLs here
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
- **Project links:** fill in `PROJECT_LINKS` in `script.js`. Empty values stay hidden.
- **Screenshots:** the project images are drawn in CSS. To use real screenshots, save them in `assets/` and replace the inner HTML of each `.shot` div with `<img src="assets/worknest.png" alt="WorkNest application flow">`.
- **Nexcent:** check that the description matches what you built.
