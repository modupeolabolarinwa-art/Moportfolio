// Project links: paste each project's live URL here.
// While a value is empty, the project title just isn't clickable.
const PROJECT_LINKS = {
  nexcent: "https://nexcent-chi-cyan.vercel.app/",
  worknest: "",
  lagos: "https://driving-in-lagos.vercel.app/",
  lusterquest: "https://lusterquest.vercel.app/",
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Preloader: counts to 100, then slides up. Shown once per visit. ---------- */
(function preloader() {
  const loader = document.querySelector(".loader");
  if (!loader || document.documentElement.classList.contains("no-loader") || reduceMotion) return;
  document.body.style.overflow = "hidden";
  const count = document.getElementById("count");
  const start = performance.now();
  const total = 1300;
  function tick(now) {
    const p = Math.min(1, (now - start) / total);
    count.textContent = Math.round((1 - Math.pow(1 - p, 3)) * 100);
    if (p < 1) return requestAnimationFrame(tick);
    loader.classList.add("done");
    document.body.style.overflow = "";
    try { sessionStorage.setItem("mo-seen", "1"); } catch (e) {}
    setTimeout(() => loader.remove(), 900);
  }
  requestAnimationFrame(tick);
})();

/* ---------- Work list: links, hover preview that follows the cursor, inline previews on mobile ---------- */
const previews = document.querySelector(".previews");
document.querySelectorAll(".work-item").forEach((item) => {
  const link = item.querySelector(".work-link");
  const url = PROJECT_LINKS[item.dataset.project];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    // visible "visit" button under the tool tags
    const btn = document.createElement("a");
    btn.className = "live-btn";
    btn.href = url;
    btn.target = "_blank";
    btn.rel = "noopener";
    btn.textContent = "Visit the live site ↗";
    (item.querySelector(".chips") || link).after(btn);
  } else {
    link.removeAttribute("href");
  }

  // inline copy of the preview for touch screens
  const pv = document.getElementById(item.dataset.preview);
  if (pv) {
    const inline = pv.firstElementChild.cloneNode(true);
    const wrap = document.createElement("div");
    wrap.className = "pv-inline";
    wrap.setAttribute("aria-hidden", "true");
    wrap.appendChild(inline);
    item.appendChild(wrap);
  }

  item.addEventListener("mouseenter", () => {
    document.querySelectorAll(".pv").forEach((p) => p.classList.toggle("on", p.id === item.dataset.preview));
    previews.classList.add("show");
  });
  item.addEventListener("mouseleave", () => previews.classList.remove("show"));
});

let mx = 0, my = 0, px = 0, py = 0;
// keep the preview to the right of the cursor and inside the window
window.addEventListener("mousemove", (e) => {
  mx = Math.min(e.clientX + 230, window.innerWidth - 190);
  my = Math.min(Math.max(e.clientY, 160), window.innerHeight - 160);
});
(function follow() {
  px += (mx - px) * (reduceMotion ? 1 : 0.15);
  py += (my - py) * (reduceMotion ? 1 : 0.15);
  previews.style.left = px + "px";
  previews.style.top = py + "px";
  requestAnimationFrame(follow);
})();

/* ---------- Footer skills drop in one after another when the footer scrolls into view ---------- */
document.querySelectorAll(".pro-skills li").forEach((li, i) => li.style.setProperty("--i", i));
const footer = document.querySelector(".footer");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { footer.classList.add("in"); io.disconnect(); } });
  }, { threshold: 0.25 });
  io.observe(footer);
}

document.getElementById("year").textContent = new Date().getFullYear();
