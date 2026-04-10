import { skills } from "../data/content";

export function SkillsSection() {
  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading">
          <h2>
            Core <span>Capabilities</span>
          </h2>
          <p>
            The backend, data, cloud, and delivery tools I rely on to build
            resilient financial systems.
          </p>
        </div>

        <div className="skills-grid">
          {skills.categories.map((category) => (
            <article key={category.title} className="skill-card">
              <div className="skill-card__rail" aria-hidden="true" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="skill-card__chips">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
