import { focusAreas } from "../data/portfolio";
import TiltCard from "./TiltCard";

export default function Focus() {
  return (
    <section id="focus" className="section">
      <div className="section-head">
        <p className="eyebrow">02 — focus</p>
        <h2 className="section-title">Where I spend my time</h2>
      </div>
      <div className="focus-grid">
        {focusAreas.map((f) => (
          <TiltCard key={f.tag} className="focus-card">
            <span className="focus-tag mono">{f.tag}</span>
            <h3 className="focus-title">{f.title}</h3>
            <p className="focus-desc">{f.desc}</p>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
