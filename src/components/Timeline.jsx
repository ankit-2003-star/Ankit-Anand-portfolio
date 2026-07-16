import { timeline } from "../data/portfolio";
import Reveal from "./Reveal";

const TYPE_LABEL = {
  education: "EDU",
  work: "WORK",
  milestone: "NOTE",
};

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <Reveal className="section-head">
        <p className="eyebrow">02 — path</p>
        <h2 className="section-title">Education & experience</h2>
        <p className="timeline-note mono">
          // placeholders below — swap in your real history from LinkedIn
        </p>
      </Reveal>
      <div className="timeline">
        {timeline.map((item, i) => (
          <Reveal key={i} delay={i * 0.08} className="timeline-item">
            <div className="timeline-rail">
              <span className={`timeline-dot dot-${item.type}`} />
              {i !== timeline.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="timeline-meta mono">
                <span className={`timeline-type type-${item.type}`}>
                  {TYPE_LABEL[item.type]}
                </span>
                <span className="timeline-period">{item.period}</span>
              </div>
              <h3 className="timeline-role">{item.role}</h3>
              <p className="timeline-org mono">{item.org}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
