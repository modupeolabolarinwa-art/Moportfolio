import { toolkit } from "../data.js";

export default function Toolkit() {
  return (
    <section id="toolkit" className="toolkit">
      <h2 className="section-title">My toolkit</h2>
      <p className="toolkit-lede">The tools I reach for, and what I actually use each one for.</p>
      <div className="tk-groups">
        {toolkit.map((group) => (
          <div key={group.id} className={"tk-group " + group.id}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map(([name, use]) => (
                <li key={name}><b>{name}</b><span>{use}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
