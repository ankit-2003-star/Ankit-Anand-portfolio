const links = [
  { href: "#about", label: "about" },
  { href: "#focus", label: "focus" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-logo mono">
        AA<span className="nav-logo-dot">_</span>
      </a>
      <nav className="nav-links mono">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a
        className="nav-cta mono"
        href="https://github.com/ankit-2003-star"
        target="_blank"
        rel="noreferrer"
      >
        github ↗
      </a>
    </header>
  );
}
