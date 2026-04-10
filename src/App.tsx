import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageMeta } from "./components/PageMeta";
import { SiteLayout } from "./components/SiteLayout";
import { ThemeProvider } from "./components/ThemeProvider";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route
            path="*"
            element={
              <>
                <PageMeta
                  title="404: Not Found"
                  description="The requested resource at this path is currently unreachable or has been archived."
                />
                <NotFoundPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
