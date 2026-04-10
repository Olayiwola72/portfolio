import { experience } from "../data/content";

export function Timeline() {
  return (
    <div className="timeline">
      {experience.entries.map((entry) => (
        <article key={`${entry.company}-${entry.role}`} className="timeline-item">
          <div className="timeline-item__dot" aria-hidden="true">
            <span />
          </div>

          <div className="timeline-card">
            <div className="timeline-card__glow" aria-hidden="true" />
            <div className="timeline-card__content">
              <span className="timeline-card__period">
                {entry.startDate} — {entry.endDate}
              </span>
              <h3>{entry.role}</h3>
              <p className="timeline-card__company">
                {entry.company} · {entry.location}
              </p>

              <ul className="timeline-card__highlights">
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="timeline-card__skills">
                {entry.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
