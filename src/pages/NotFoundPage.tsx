import { Link, useLocation } from "react-router-dom";

import { BrandMark } from "../components/BrandMark";

export function NotFoundPage() {
  const location = useLocation();

  return (
    <main className="not-found-page">
      <div className="not-found-page__glow" />

      <div className="not-found-page__logo-wrap">
        <BrandMark compact />
      </div>

      <div className="not-found-page__content">
        <div>
          <h1>404</h1>
          <h2>[ Page_Not_Found ]</h2>
        </div>

        <p>
          The route you requested is not available in this deployment. Try the
          main portfolio navigation instead.
        </p>

        <div className="not-found-page__command">
          <span>guest@portfolio:~$</span>
          <code>get {location.pathname}</code>
        </div>
      </div>

      <Link className="button button--primary" to="/">
        Back to Home
      </Link>
    </main>
  );
}
