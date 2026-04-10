import { useState } from "react";

import { PageMeta } from "../components/PageMeta";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFilters } from "../components/ProjectFilters";
import { projectCategories, projects } from "../data/content";

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <PageMeta
        title="Projects | Olayiwola Akinnagbe"
        description="Explore backend case studies covering fintech APIs, event-driven services, search optimization, cloud deployment, and full-stack product delivery."
      />

      <section className="internal-page">
        <div className="container">
          <div className="section-heading section-heading--projects">
            <h1>
              Selected <span>Work</span>
            </h1>
            <p>
              Case studies focused on reliability, integration, throughput, and
              delivery for modern financial systems.
            </p>
          </div>

          <ProjectFilters
            categories={projectCategories}
            activeCategory={activeCategory}
            mobileOpen={mobileFiltersOpen}
            onToggleMobile={() => setMobileFiltersOpen((currentState) => !currentState)}
            onSelectCategory={(category) => {
              setActiveCategory(category);
              setMobileFiltersOpen(false);
            }}
          />

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
