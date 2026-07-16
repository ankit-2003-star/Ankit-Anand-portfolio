import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import { profile } from "../data/portfolio";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

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
      <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
        <motion.p className="eyebrow" variants={item}>
          student · builder · {profile.location}
        </motion.p>
        <motion.h1 className="hero-name" variants={item}>
          {profile.name}
          <span className="blink" />
        </motion.h1>
        <motion.p className="hero-role mono" variants={item}>
          {profile.role} <span className="hero-role-sep">/</span> {profile.subrole}
        </motion.p>
        <motion.div className="hero-typewriter mono" variants={item}>
          <span className="hero-prompt">$ build --stack</span> {typed}
          <span className="blink" />
        </motion.div>
        <motion.p className="hero-tagline" variants={item}>
          {profile.tagline}
        </motion.p>
        <motion.div className="hero-actions" variants={item}>
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
            Say hello
          </a>
        </motion.div>
        <motion.div className="hero-links mono" variants={item}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </motion.div>
      </motion.div>
      <HeroScene />
    </section>
  );
}
