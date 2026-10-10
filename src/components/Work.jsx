import { useEffect, useRef, useState } from "react";
import { projects } from "../data.js";
import { usePrefersReducedMotion } from "../hooks.js";
import { ProjectShot } from "./Previews.jsx";

function ProjectItem({ project, onEnter, onLeave }) {
  const { title, type, year, url, blurb, tools } = project;
  const linkProps = url ? { href: url, target: "_blank", rel: "noopener" } : {};
  return (
    <li className="work-item" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <a className="work-link" {...linkProps}>
        <span className="work-title">{title}</span>
        <span className="work-meta"><span>{type}</span><span>{year}</span></span>
      </a>
      <p className="work-blurb">{blurb}</p>
      <ul className="chips">
        {tools.map((t) => <li key={t}>{t}</li>)}
      </ul>
      {url && (
        <a className="live-btn" href={url} target="_blank" rel="noopener">Visit the live site ↗</a>
      )}
      {/* shown on phones and tablets instead of the hover preview */}
      <div className="pv-inline" aria-hidden="true">
        <ProjectShot project={project} />
      </div>
    </li>
  );
}

export default function Work() {
  const [active, setActive] = useState(null);
  const previewRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  // floating preview that follows the cursor (desktop only; hidden by CSS on smaller screens)
  useEffect(() => {
    let mx = 0, my = 0, px = 0, py = 0, raf;
    const onMove = (e) => {
      mx = Math.min(e.clientX + 270, window.innerWidth - 230);
      my = Math.min(Math.max(e.clientY, 160), window.innerHeight - 160);
    };
    const follow = () => {
      const ease = reduced ? 1 : 0.15;
      px += (mx - px) * ease;
      py += (my - py) * ease;
      if (previewRef.current) {
        previewRef.current.style.left = px + "px";
        previewRef.current.style.top = py + "px";
      }
      raf = requestAnimationFrame(follow);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(follow);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section id="work" className="work">
      <h2 className="section-title">Work</h2>
      <p className="section-lede">Some of the things I have whipped up.</p>
      <ul className="work-list">
        {projects.map((p) => (
          <ProjectItem
            key={p.key}
            project={p}
            onEnter={() => setActive(p.key)}
            onLeave={() => setActive(null)}
          />
        ))}
      </ul>

      <div ref={previewRef} className={"previews" + (active ? " show" : "")} aria-hidden="true">
        {projects.map((p) => (
          <div key={p.key} className={"pv" + (active === p.key ? " on" : "")}>
            <ProjectShot project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
