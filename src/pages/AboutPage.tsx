import { CertificationsSection } from "../components/CertificationsSection";
import { PageMeta } from "../components/PageMeta";
import { EducationSection } from "../components/EducationSection";
import { Timeline } from "../components/Timeline";
import { about, siteSettings } from "../data/content";

export function AboutPage() {
  return (
    <>
      <PageMeta
        title={`About | ${siteSettings.personName}`}
        description="Learn more about Olayiwola Akinnagbe, a senior backend engineer focused on scalable fintech APIs, event-driven systems, and cloud delivery."
      />
      
      <section className="internal-page">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__visual">
              <div className="about-intro__image-frame about-intro__image-frame--profile">
                <div className="about-intro__image-glow" />
                <img
                  className="about-intro__avatar"
                  src="/assets/images/avatar.png"
                  alt={`${siteSettings.personName} portrait`}
                  loading="lazy"
                />
                <div className="about-intro__profile-items">
                  <div className="about-intro__profile-item">
                    <span>Location</span>
                    <strong>{siteSettings.location}</strong>
                  </div>
                  <div className="about-intro__profile-item">
                    <span>Email</span>
                    <a href={`mailto:${siteSettings.email}`}>{siteSettings.email}</a>
                  </div>
                  <div className="about-intro__profile-item">
                    <span>Phone</span>
                    <a href={`tel:${siteSettings.phone}`}>{siteSettings.phone}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-intro__copy">
              <h1>
                {about.heading}
                <br />
                <span>{about.subheading}</span>
              </h1>

              {about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="about-intro__actions">
                <a
                  className="button button--inverse"
                  href={about.cvLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {about.showHighlights ? (
            <section className="section-block">
              <div className="section-heading section-heading--centered">
                <h2>{about.highlightsTitle}</h2>
              </div>
              <div className="highlight-grid">
                {about.highlights.map((highlight) => (
                  <article key={highlight.title} className="highlight-card">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="section-block section-block--compact">
            <div className="section-title-line">
              <h2>Experience</h2>
              <span />
            </div>
            <Timeline />
          </section>

          <EducationSection />
          <CertificationsSection />
        </div>
      </section>
    </>
  );
}
