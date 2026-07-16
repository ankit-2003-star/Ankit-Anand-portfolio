import { focusAreas } from "../data/portfolio";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

export default function Focus() {
  return (
    <section id="focus" className="section">
      <Reveal className="section-head">
        <p className="eyebrow">03 — focus</p>
        <h2 className="section-title">Where I spend my time</h2>
      </Reveal>
      <div className="focus-grid">
        {focusAreas.map((f, i) => (
          <Reveal key={f.tag} delay={i * 0.07}>
            <TiltCard className="focus-card">
              <span className="focus-tag mono">{f.tag}</span>
              <h3 className="focus-title">{f.title}</h3>
              <p className="focus-desc">{f.desc}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
