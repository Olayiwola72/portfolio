import { about } from "../data/content";
import { AnimatedCounter } from "./AnimatedCounter";

export function ImpactStats() {
  if (!about.showImpact || about.impact.length === 0) {
    return null;
  }

  return (
    <section className="impact-bar">
      <div className="container impact-bar__grid">
        {about.impact.map((metric) => (
          <div key={metric.label} className="impact-stat">
            <AnimatedCounter
              target={metric.target}
              prefix={metric.prefix}
              suffix={metric.suffix}
            />
            <p className="impact-stat__label">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
