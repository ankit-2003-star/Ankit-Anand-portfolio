import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <p className="eyebrow">01 — about</p>
        <h2 className="section-title">Who's building this</h2>
      </div>
      <div className="terminal">
        <div className="terminal-bar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="terminal-title mono">about.md</span>
        </div>
        <div className="terminal-body mono">
          <p>
            <span className="terminal-prompt">ankit@dev</span>
            <span className="terminal-path"> ~ </span>
            <span className="terminal-cmd">cat about.md</span>
          </p>
          <p className="terminal-output">{profile.bio}</p>
          <p className="terminal-output-muted">// {profile.resumeNote}</p>
        </div>
      </div>
    </section>
  );
}
