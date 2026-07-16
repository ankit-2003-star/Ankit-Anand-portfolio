import { useEffect, useState } from "react";
import HeroScene from "./HeroScene";
import { profile } from "../data/portfolio";

const PHRASES = [
  "full-stack web applications",
  "AI-powered recommendation engines",
  "computer vision models",
  "real-time collaboration tools",
];

function useTypewriter(phrases) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const speed = deleting ? 28 : 55;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">student · builder · {profile.location}</p>
        <h1 className="hero-name">
          {profile.name}
          <span className="blink" />
        </h1>
        <p className="hero-role mono">
          {profile.role} <span className="hero-role-sep">/</span> {profile.subrole}
        </p>
        <div className="hero-typewriter mono">
          <span className="hero-prompt">$ build --stack</span> {typed}
          <span className="blink" />
        </div>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Say hello
          </a>
        </div>
        <div className="hero-links mono">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
      <HeroScene />
    </section>
  );
}
