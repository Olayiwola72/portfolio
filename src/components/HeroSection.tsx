import { Link } from "react-router-dom";

import { hero, siteSettings } from "../data/content";

export function HeroSection() {
  const isAvailable = /(available|open)/i.test(siteSettings.availability);

  return (
    <section className="hero-section">
      <div className="hero-section__glow hero-section__glow--primary" />
      <div className="hero-section__glow hero-section__glow--secondary" />

      <div className="container hero-section__inner">
        <div className="status-pill">
          <span
            className={`status-pill__dot ${isAvailable ? "is-live" : "is-busy"}`}
            aria-hidden="true"
          />
          <span>{siteSettings.availability}</span>
        </div>

        <div className="hero-section__copy">
          <p className="hero-section__eyebrow">{hero.headingMain}</p>
          <h1 className="hero-section__title">
            {hero.headingAccent}
            <br />
            <span className="gradient-text">{hero.headingSuffix}</span>
          </h1>
          <p className="hero-section__description">{hero.description}</p>
        </div>

        <div className="hero-section__actions">
          <Link className="button button--primary hero-section__cta" to="/projects">
            <span>View Case Studies</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13 7l5 5m0 0-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="hero-stack">
          <span className="hero-stack__title">{hero.stackTitle}</span>
          <div className="hero-stack__items">
            {hero.stack.map((item) => (
              <span key={item} className="hero-stack__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
