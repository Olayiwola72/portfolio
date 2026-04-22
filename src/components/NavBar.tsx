import clsx from "clsx";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import { getSocialLinkByIcon, siteSettings } from "../data/content";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

const iconLinks: Array<{ icon: string; label: string; Icon: IconType }> = [
  { icon: "linkedin", label: "LinkedIn", Icon: FaLinkedinIn },
  { icon: "x", label: "Twitter / X", Icon: FaXTwitter },
  { icon: "github", label: "GitHub", Icon: FaGithub },
];

const quickLinks = [
  { label: "Resume", icon: "file" },
  { label: "Speaking", icon: "calendar" },
  { label: "Writing", icon: "pen" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    const closeMenu = () => setMobileMenuOpen(false);

    document.addEventListener("pointerdown", closeMenu);

    return () => document.removeEventListener("pointerdown", closeMenu);
  }, [mobileMenuOpen]);

  return (
    <nav className="nav-bar">
      <div className="container nav-bar__inner">
        <div className="nav-bar__cluster">
          <button
            type="button"
            className={clsx("menu-toggle", mobileMenuOpen && "is-open")}
            aria-label="Toggle navigation"
            aria-pressed={mobileMenuOpen}
            onClick={(event) => {
              event.stopPropagation();
              setMobileMenuOpen((currentState) => !currentState);
            }}
          >
            <span />
            <span />
            <span />
          </button>

          <div
            className={clsx("nav-menu", mobileMenuOpen && "is-open")}
            onClick={(event) => event.stopPropagation()}
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  clsx("nav-link", isActive && "is-active")
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            {iconLinks.map(({ icon, label, Icon }) => {
              const socialLink = getSocialLinkByIcon(icon);

              if (!socialLink) {
                return null;
              }

              return (
                <a
                  key={icon}
                  className="nav-link nav-link--icon"
                  href={socialLink.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon aria-hidden="true" focusable="false" size={18} />
                </a>
              );
            })}

            {quickLinks.map((link) => {
              const socialLink = getSocialLinkByIcon(link.icon);

              if (!socialLink) {
                return null;
              }

              return (
                <a
                  key={link.label}
                  className="nav-link"
                  href={socialLink.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}

            <a
              className="nav-link nav-link--nowrap is-active"
              href={siteSettings.contactMeLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
