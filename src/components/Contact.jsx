import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <Reveal className="section-head">
        <p className="eyebrow">06 — contact</p>
        <h2 className="section-title">Let's build something</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="terminal-title mono">contact.sh</span>
          </div>
          <div className="terminal-body mono">
            <p>
              <span className="terminal-prompt">ankit@dev</span>
              <span className="terminal-path"> ~ </span>
              <span className="terminal-cmd">./contact.sh --reach-out</span>
            </p>
            <div className="contact-list">
              <a className="contact-row" href={`mailto:${profile.email}`}>
                <span className="contact-label">email</span>
                <span className="contact-value">{profile.email}</span>
              </a>
              <a
                className="contact-row"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">github</span>
                <span className="contact-value">/{profile.handle}</span>
              </a>
              <a
                className="contact-row"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">linkedin</span>
                <span className="contact-value">/in/ankitanand16</span>
              </a>
            </div>
            <p className="terminal-output-muted">// {profile.resumeNote}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
