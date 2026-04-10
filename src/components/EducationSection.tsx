import { education } from "../data/content";

export function EducationSection() {
  return (
    <section className="section-block section-block--compact">
      <div className="section-title-line">
        <h2>Education</h2>
        <span />
      </div>

      <div className="education-grid">
        {education.entries.map((entry) => (
          <article key={entry.school} className="education-card">
            <div className="education-card__glow" aria-hidden="true" />
            <span className="education-card__period">{entry.period}</span>
            <h3>{entry.degree}</h3>
            <p className="education-card__school">{entry.school}</p>
            <p className="education-card__description">{entry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
