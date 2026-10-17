import { facts } from "../data.js";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <p className="about-lede">
          I'm Modupe Phillips, but everyone calls me Mo. I've spent 13+ years leading programmes in banking,
          fintech, government reform and social impact: at GTBank, the Aig-Imoukhuede Foundation (with Oxford's
          Blavatnik School), Pety Trade, SIA Foundation, and my own consultancy - LusterQuest. Somewhere along the
          way I got tired of waiting for someone else to build the tools I needed to ship, so I learned to build them myself.
        </p>
        <ul className="facts">
          {facts.map(([label, value]) => (
            <li key={label}><b>{label}</b> {value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
