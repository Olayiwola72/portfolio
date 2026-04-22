import { getSocialLinkByIcon, mediumFeed } from "../data/content";

const publishedAtFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function MediumSection() {
  const writingProfile = getSocialLinkByIcon("pen")?.url ?? mediumFeed.sourceUrl;
  const articles = mediumFeed.articles.slice(0, 3);

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <h2>
              Latest <span>Writing</span>
            </h2>
            <p>
              Fresh articles pulled from Medium on distributed systems, backend
              architecture, and production engineering.
            </p>
          </div>
          {writingProfile ? (
            <a
              className="section-heading__link"
              href={writingProfile}
              target="_blank"
              rel="noreferrer"
            >
              Visit Medium →
            </a>
          ) : null}
        </div>

        <div className="article-grid">
          {articles.map((article) => (
            <article key={article.link} className="article-card">
              <a
                className="article-card__link"
                href={article.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="article-card__media">
                  {article.thumbnail ? (
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="article-card__media-fallback" aria-hidden="true" />
                  )}
                  <span className="article-card__media-badge">Medium</span>
                </div>

                <div className="article-card__content">
                  <div className="article-card__meta">
                    <span>{publishedAtFormatter.format(new Date(article.publishedAt))}</span>
                    <span>{article.readingTimeMinutes} min read</span>
                  </div>

                  <div className="article-card__copy">
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                  </div>

                  <div className="article-card__footer">
                    <div className="article-card__tags">
                      {article.categories.map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                    <span className="article-card__cta">Read article ↗</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
