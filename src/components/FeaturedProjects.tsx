import { Link } from "react-router-dom";

import { featuredProjects } from "../data/content";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="section-block">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <h2>
              Featured <span>Work</span>
            </h2>
            <p>Case studies across fintech APIs, platform delivery, and backend scale.</p>
          </div>
          <Link className="section-heading__link" to="/projects">
            View all projects →
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
