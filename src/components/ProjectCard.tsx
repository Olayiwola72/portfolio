import { Suspense, lazy, useState } from "react";

import type { ProjectSummary } from "../data/content";

const ProjectModal = lazy(async () => ({
  default: (await import("./ProjectModal")).ProjectModal,
}));

interface ProjectCardProps {
  project: ProjectSummary;
}

function ProjectModalFallback() {
  return (
    <div className="project-modal project-modal--loading" role="status" aria-live="polite">
      <div className="project-modal__loading-panel">
        <span className="project-modal__loading-spinner" aria-hidden="true" />
        <span>Loading case study…</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="project-card">
        <button
          type="button"
          className="project-card__media"
          onClick={() => setOpen(true)}
          aria-label={`Open ${project.title} details`}
        >
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={`${project.title} project preview`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="project-card__placeholder">
              <span className="project-card__placeholder-label">{project.category}</span>
              <strong>{project.title}</strong>
              <p>{project.metrics}</p>
            </div>
          )}
          <span className="project-card__overlay" />
          <span className="project-card__badge">{project.metrics}</span>
        </button>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <button
          type="button"
          className="project-card__title"
          onClick={() => setOpen(true)}
        >
          {project.title}
        </button>
        <p className="project-card__description">{project.description}</p>
      </article>

      {open ? (
        <Suspense fallback={<ProjectModalFallback />}>
          <ProjectModal project={project} open={open} onClose={() => setOpen(false)} />
        </Suspense>
      ) : null}
    </>
  );
}
