import { projects } from "../data/portfolio";
import TiltCard from "./TiltCard";

const KIND_LABEL = {
  web: "WEB",
  ml: "ML",
  tool: "TOOL",
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <p className="eyebrow">04 — projects</p>
        <h2 className="section-title">Things I've shipped</h2>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <TiltCard key={p.name} className="project-card">
            <div className="project-card-top">
              <span className={`project-kind kind-${p.kind} mono`}>{KIND_LABEL[p.kind]}</span>
              <span className="project-status mono">{p.status}</span>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-fullname mono">{p.fullName}</p>
            <p className="project-desc">{p.description}</p>
            <ul className="project-stack">
              {p.stack.map((s) => (
                <li key={s} className="mono">
                  {s}
                </li>
              ))}
            </ul>
            <a className="project-link mono" href={p.repo} target="_blank" rel="noreferrer">
              view repo ↗
            </a>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
