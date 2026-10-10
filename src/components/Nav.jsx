import { navLinks } from "../data.js";

export function Logo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#FFC531" />
      <text x="24" y="30" textAnchor="middle" fontFamily="Poppins, Arial, sans-serif" fontWeight="700" fontSize="17" fill="#232323">mo</text>
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Mo Phillips, home">
        <Logo />
      </a>
      <nav aria-label="Main">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
