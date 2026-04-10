import { useEffect } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { Project } from "../data/content";

interface ProjectModalProps {
  project: Project;
  open: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className="project-modal" role="dialog" aria-modal="true">
      <button
        type="button"
        className="project-modal__backdrop"
        aria-label={`Close ${project.title} details`}
        onClick={onClose}
      />
      <div className="project-modal__panel">
        <div className="project-modal__toolbar">
          <button
            type="button"
            className="project-modal__close"
            aria-label={`Close ${project.title} details`}
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="project-modal__content">
          <header className="project-modal__header">
            <div className="project-modal__meta">
              <span>{project.category}</span>
              <strong>{project.metrics}</strong>
            </div>
            <h2>{project.title}</h2>

            {project.links?.length ? (
              <div className="project-modal__links">
                {project.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                    <span>{link.text}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                    </svg>
                  </a>
                ))}
              </div>
            ) : null}
          </header>

          <article className="markdown-prose">
            <p className="markdown-prose__lead">{project.description}</p>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.body}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>,
    document.body,
  );
}
