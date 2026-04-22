import { Suspense, lazy, type ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageMeta } from "./components/PageMeta";
import { SiteLayout } from "./components/SiteLayout";
import { ThemeProvider } from "./components/ThemeProvider";

const HomePage = lazy(async () => ({
  default: (await import("./pages/HomePage")).HomePage,
}));

const ProjectsPage = lazy(async () => ({
  default: (await import("./pages/ProjectsPage")).ProjectsPage,
}));

const AboutPage = lazy(async () => ({
  default: (await import("./pages/AboutPage")).AboutPage,
}));

const NotFoundPage = lazy(async () => ({
  default: (await import("./pages/NotFoundPage")).NotFoundPage,
}));

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <div className="route-fallback__panel">
        <span className="route-fallback__dot" aria-hidden="true" />
        <span>Loading experience…</span>
      </div>
    </div>
  );
}

const withSuspense = (element: ReactNode) => (
  <Suspense fallback={<RouteFallback />}>{element}</Suspense>
);

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={withSuspense(<HomePage />)} />
            <Route path="/projects" element={withSuspense(<ProjectsPage />)} />
            <Route path="/about" element={withSuspense(<AboutPage />)} />
          </Route>
          <Route
            path="*"
            element={withSuspense(
              <>
                <PageMeta
                  title="404: Not Found"
                  description="The requested resource at this path is currently unreachable or has been archived."
                />
                <NotFoundPage />
              </>
            )}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
