import { Link } from "react-router-dom";

import { siteSettings } from "../data/content";
import { BrandMark } from "./BrandMark";

const footerNavigation = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link className="site-footer__logo-link" to="/" aria-label="Go home">
              <BrandMark className="site-footer__brand-mark" compact />
            </Link>
            <p className="site-footer__description">{siteSettings.oneLiner}</p>
          </div>

          <div>
            <h4 className="site-footer__heading">Navigation</h4>
            <ul className="site-footer__list">
              {footerNavigation.map((link) => (
                <li key={link.to}>
                  <Link className="site-footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="site-footer__heading">Connect</h4>
            <div className="site-footer__contact">
              <a
                className="site-footer__link"
                href={`mailto:${siteSettings.email}?subject=Interest%20in%20Hiring%20You`}
              >
                Hire Me
              </a>
              <a className="site-footer__link" href={`tel:${siteSettings.phone}`}>
                {siteSettings.phone}
              </a>
              <p className="site-footer__location">{siteSettings.location}</p>
              <div className="site-footer__socials">
                {siteSettings.socials.map((social) => (
                  <a
                    key={social.platform}
                    className="site-footer__link"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} — Handcrafted with React + Vite | Designed by Olayiwola Akinnagbe
          </p>
          <div className="site-footer__status">
            <span className="availability-dot" aria-hidden="true" />
            <span>{siteSettings.availability}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
