import { useRef } from "react";
import { contact, navLinks, professionalSkills } from "../data.js";
import { useInView } from "../hooks.js";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, 0.25); // skills drop in once the footer scrolls into view

  return (
    <footer ref={ref} id="contact" className={"footer" + (inView ? " in" : "")}>
      <div className="foot-top">
        <p className="foot-kicker">got a process eating your week?</p>
        <a className="foot-big" href={`mailto:${contact.email}?subject=Let's%20build%20something`}>
          let's build it<span aria-hidden="true">→</span>
        </a>
        <div className="foot-contact">
          <a href={`tel:${contact.phoneLink}`}><small>call me</small>{contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}><small>email me</small>{contact.email}</a>
        </div>
      </div>

      <div className="pro">
        <p className="pro-label">my professional skills</p>
        <ul className="pro-skills">
          {professionalSkills.map((s, i) => (
            <li key={s} style={{ "--i": i }}>{s}</li>
          ))}
        </ul>
      </div>

      <div className="foot-bottom">
        <nav aria-label="Footer">
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <nav aria-label="Social">
          <a href={contact.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a href={`mailto:${contact.email}`}>Email</a>
          <a href={`tel:${contact.phoneLink}`}>Call</a>
        </nav>
        <p>website coded with love in Lagos · © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
