import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, []);

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
              >
                {item.label}
              </NavLink>
            ))}

            <a
              className="nav-link nav-link--icon"
              href="https://linkedin.com/in/olayiwola-akinnagbe"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" focusable="false" size={18} />
            </a>
            <a
              className="nav-link nav-link--icon"
              href="https://x.com/OlayiwolaAkinn1"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              title="Twitter / X"
            >
              <FaXTwitter aria-hidden="true" focusable="false" size={18} color="white" />
            </a>
            <a
              className="nav-link nav-link--icon"
              href="https://github.com/Olayiwola72"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub aria-hidden="true" focusable="false" size={18} />
            </a>
            <a
              className="nav-link"
              href="https://drive.google.com/file/d/119Hkfzy2sHD9gm9V5Oe4m0Xm5vamPNgt/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="nav-link"
              href="https://sessionize.com/olayiwola-akinnagbe"
              target="_blank"
              rel="noreferrer"
            >
              Speaking
            </a>
            <a
              className="nav-link"
              href="https://medium.com/@olayiwola72"
              target="_blank"
              rel="noreferrer"
            >
              Writing
            </a>
            <a
              className="nav-link nav-link--nowrap is-active"
              href="mailto:olayiwola72@gmail.com?subject=Interest%20in%20Hiring%20You"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
