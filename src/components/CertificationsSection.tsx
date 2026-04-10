import { certifications } from "../data/content";

export function CertificationsSection() {
  if (certifications.entries.length === 0) {
    return null;
  }

  return (
    <section className="section-block section-block--compact">
      <div className="section-title-line">
        <h2>Badges</h2>
        <span />
      </div>

      <div className="certification-grid">
        {certifications.entries
          .filter((entry) => Boolean(entry.badgeImage))
          .map((entry) =>
            entry.badgeUrl ? (
              <a
                key={`${entry.name}-${entry.issuer}`}
                className="certification-badge"
                href={entry.badgeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${entry.name} badge`}
              >
                <img src={entry.badgeImage} alt={`${entry.name} badge`} loading="lazy" />
              </a>
            ) : (
              <div key={`${entry.name}-${entry.issuer}`} className="certification-badge">
                <img src={entry.badgeImage} alt={`${entry.name} badge`} loading="lazy" />
              </div>
            ),
          )}
      </div>
    </section>
  );
}
