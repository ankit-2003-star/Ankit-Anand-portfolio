import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <p className="eyebrow">03 — stack</p>
        <h2 className="section-title">Tools I reach for</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-panel" key={group.label}>
            <span className="skill-panel-label mono">{group.label}</span>
            <ul className="skill-chips">
              {group.items.map((item) => (
                <li className="skill-chip mono" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
