import { skillCards } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">What I can do for you</h2>
      <div className="skill-grid">
        {skillCards.map((card) => (
          <article key={card.id} className={"skill " + card.id}>
            <span className="sticker" aria-hidden="true">{card.sticker}</span>
            <h3>{card.title}</h3>
            <p>{card.intro}</p>
            <ul>
              {card.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
            {card.tools && <p className="tools">{card.tools}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
