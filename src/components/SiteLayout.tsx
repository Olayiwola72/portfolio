import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { ScrollToTop } from "./ScrollToTop";
import { ThemeToggle } from "./ThemeToggle";

export function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="site-shell">
        <NavBar />
        <main className="site-main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ThemeToggle />
    </>
  );
}
