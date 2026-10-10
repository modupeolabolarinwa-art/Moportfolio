# Modupe Phillips portfolio

My portfolio site, built with **React** and **Vite**, deployed on **Vercel**.

## Where things are

```
src/data.js             ALL the content: projects, links, skills, toolkit, contact details
src/components/         one file per section of the page
  Loader.jsx            "Hi, I'm Mo" loading screen
  Nav.jsx               top menu and logo
  Hero.jsx              greeting, photo and the three tilted cards
  Marquee.jsx           scrolling yellow tools strip
  Work.jsx              project list and the preview that follows the cursor
  Previews.jsx          project screenshots, with drawn previews as a fallback
  Skills.jsx            "What I can do for you"
  Toolkit.jsx           "My toolkit"
  Sidequests.jsx        sidequest cards
  About.jsx             about section
  Footer.jsx            "let's build it", contact details and professional skills
src/hooks.js            small helpers (reduced motion, scroll-into-view)
src/styles.css          all the styling (colours and fonts at the top)
public/assets/          photo, favicon and project screenshots (public/assets/shots/)
public/404.html         the "stuck in go-slow" error page
```

To change any wording, project, link or skill, edit **`src/data.js`**. You rarely need to touch the components.

## Run it on your computer

You need Node.js installed once (Windows: `winget install --id OpenJS.NodeJS.LTS -e`, then reopen PowerShell).

```
npm install      # first time only: downloads React and Vite into node_modules
npm run dev      # starts the site at http://localhost:5173 and reloads as you edit
```

`npm run build` makes the finished site in `dist/`, and `npm run preview` shows that build.

## Put it on GitHub and Vercel

1. Create an empty repo on github.com called `mo-portfolio`.
2. In this folder:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/mo-portfolio.git
   git push -u origin main
   ```
3. On vercel.com: **Add New → Project**, pick `mo-portfolio`, click **Deploy**. Vercel detects Vite by itself.
4. Every `git push` to `main` redeploys automatically.

Don't upload `node_modules` or `dist`. They're rebuilt automatically and `.gitignore` already leaves them out.

## Things to update

- **Project screenshots:** save as `public/assets/shots/<key>.jpg` (16:10, about 1280×800). The keys are `nexcent`, `worknest`, `lagos`, `lusterquest`.
- **New project:** add an entry to `projects` in `src/data.js` and a screenshot with the same `key`.
- **Photo:** replace `public/assets/mo.jpg` (4:5 portrait) using the same name.
- **Years:** every project currently says 2026.
