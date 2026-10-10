import { sidequests } from "../data.js";

export default function Sidequests() {
  return (
    <section id="sidequests" className="sidequests">
      <h2 className="section-title">
        A few lil' sidequests <span aria-hidden="true">&lt;3</span>
      </h2>
      <div className="sq-grid">
        {sidequests.map((sq, i) => (
          <div key={sq.name} className={`sq sq${(i % 4) + 1}`}>
            <b>{sq.name}</b>
            <span>{sq.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
