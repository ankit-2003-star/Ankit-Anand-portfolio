import { useLayoutEffect, useRef } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#timeline", label: "timeline" },
  { href: "#focus", label: "focus" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav({ open, onToggle, onClose, onHeightChange }) {
  const mobileRef = useRef(null);

  useLayoutEffect(() => {
    if (!onHeightChange) return;

    const height = open ? mobileRef.current?.offsetHeight ?? 0 : 0;
    onHeightChange(height);
  }, [open, onHeightChange]);

  return (
    <header className={`nav ${open ? "is-open" : ""}`}>
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
      <button
        className={`nav-burger ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={onToggle}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        ref={mobileRef}
        className={`nav-mobile mono ${open ? "is-open" : ""}`}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={onClose}>
            {l.label}
          </a>
        ))}
        <a
          href="https://github.com/ankit-2003-star"
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
        >
          github ↗
        </a>
      </div>
    </header>
  );
}
