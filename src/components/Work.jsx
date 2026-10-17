import { projects } from "../data.js";
import { ProjectShot } from "./Previews.jsx";

function ProjectItem({ project }) {
  const { title, type, year, url, blurb, tools } = project;
  const linkProps = url ? { href: url, target: "_blank", rel: "noopener" } : {};
  return (
    <li className="work-item">
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
      <div className="pv-inline" aria-hidden="true">
        <ProjectShot project={project} />
      </div>
    </li>
  );
}

export default function Work() {
  return (
    <section id="work" className="work">
      <h2 className="section-title">Work</h2>
      <p className="section-lede">Some of the things I have whipped up.</p>
      <ul className="work-list">
        {projects.map((p) => (
          <ProjectItem key={p.key} project={p} />
        ))}
      </ul>
    </section>
  );
}
