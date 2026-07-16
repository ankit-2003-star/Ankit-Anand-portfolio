import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="section-head">
        <p className="eyebrow">04 — stack</p>
        <h2 className="section-title">Tools I reach for</h2>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal delay={i * 0.06} key={group.label} className="skill-panel">
            <span className="skill-panel-label mono">{group.label}</span>
            <ul className="skill-chips">
              {group.items.map((item) => (
                <li className="skill-chip mono" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
