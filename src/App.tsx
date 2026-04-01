import { useEffect, useState } from "react";
import profileImage from "../assets/png/olayiwola-akinnagbe.png";

type LinkItem = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  tagline: string;
  year: string;
  description: string;
  impact: string[];
  stack: string[];
  liveUrl: string;
  notes: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

type CaseStudy = {
  title: string;
  context: string;
  architecture: string;
  outcome: string;
  signal: string;
};

const navigation: LinkItem[] = [
  { label: "Work", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects: Project[] = [
  {
    name: "Raft Consensus Visualizer",
    tagline: "Distributed systems education, made tangible.",
    year: "2026",
    description:
      "An interactive simulator for studying leader election, heartbeats, quorum, log replication, and failure recovery without needing backend infrastructure.",
    impact: [
      "Turns a hard distributed systems topic into a deterministic explainer engineers can reason about step by step.",
      "Keeps the simulation engine separate from the UI so the product remains maintainable as complexity grows.",
      "Shows I can pair systems depth with crisp communication and product-level presentation.",
    ],
    stack: ["React", "TypeScript", "Vite", "SCSS", "Distributed Systems"],
    liveUrl: "https://raft-consensus-visualizer.netlify.app/",
    notes:
      "Covers leader election, quorum commits, targeted isolation, and recovery behavior with clear visual feedback.",
  },
  {
    name: "Rate Limiting Simulations Lab",
    tagline: "A visual lab for API protection and traffic shaping.",
    year: "2026",
    description:
      "A hands-on simulation lab for comparing rate limiting strategies under bursty and steady traffic, with live controls and throughput feedback.",
    impact: [
      "Makes backend traffic control concepts easier to internalize for engineers, students, and interview candidates.",
      "Shows tradeoffs across token bucket, leaky bucket, fixed window, and sliding window approaches in a product-grade UI.",
      "Demonstrates practical API and systems design knowledge through a polished educational product.",
    ],
    stack: ["React", "TypeScript", "Vite", "SCSS", "ECharts", "System Design"],
    liveUrl: "https://rate-limiting-simulations.netlify.app/",
    notes:
      "Built to reveal burst tolerance, fairness, queue behavior, and throughput under load instead of leaving them theoretical.",
  },
];

const principles = [
  "Build backend systems that stay predictable under scale, failure, and operational pressure.",
  "Communicate architecture decisions clearly enough for engineers, interviewers, and stakeholders to trust them.",
  "Optimize for maintainability, observability, and measurable business impact.",
];

const skills = [
  "Java",
  "Spring Boot",
  "Spring Cloud",
  "Kafka",
  "Elasticsearch",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "React",
  "TypeScript",
  "GitHub Actions",
  "CI/CD",
  "Microservices",
];

const credentialHighlights = [
  "6+ years building backend systems for fintech and data-driven SaaS products.",
  "API-first platforms supporting 1M+ daily requests and transaction-scale workloads.",
  "AWS Certified Cloud Practitioner, Developer Associate, and Solutions Architect Associate.",
];

const caseStudies: CaseStudy[] = [
  {
    title: "High-volume fintech API platform",
    context:
      "Built private APIs for payments, transfers, and loan origination in a fintech setting with heavy throughput and integration demands.",
    architecture:
      "Spring Boot services, Kafka-backed asynchronous flows, CQRS-inspired API design, PostgreSQL and MongoDB optimization, plus secure auth with JWT and RBAC.",
    outcome:
      "Supported over 1M requests daily, reduced response times by 50%, and increased throughput by 30% while keeping the platform integration-friendly.",
    signal: "Scale, API design, security, performance",
  },
  {
    title: "Legacy to microservices migration",
    context:
      "Inherited loan-processing functionality that needed better scalability, fault isolation, and deployment flexibility.",
    architecture:
      "Decomposed the monolith into services, containerized workloads with Docker, and orchestrated deployment with Kubernetes for better resilience and rollout control.",
    outcome:
      "Improved scalability and cut downtime by 60%, while making the platform easier for teams to evolve and deploy.",
    signal: "Migration, resilience, platform engineering",
  },
  {
    title: "Search and event-driven backend improvements",
    context:
      "Needed faster data retrieval and more reliable user notifications in banking and transaction-heavy systems.",
    architecture:
      "Integrated Elasticsearch for low-latency search and used Kafka with Spring Boot to power asynchronous email and SMS delivery flows.",
    outcome:
      "Reduced search latency by 60% and improved notification delivery time by 40% with more reliable system behavior at scale.",
    signal: "Performance, event-driven architecture, user impact",
  },
];

const experienceItems: ExperienceItem[] = [
  {
    company: "Prema Consulting",
    role: "Senior Backend Engineer",
    period: "June 2022 - Present",
    achievements: [
      "Designed API-first fintech services for payments, transfers, and loan origination handling over 1M requests daily.",
      "Built asynchronous notification and event-driven microservice flows with Kafka and Spring Boot.",
      "Improved performance with PostgreSQL, MongoDB, and Elasticsearch, cutting response times and enabling low-latency search.",
    ],
  },
  {
    company: "ITSS Global",
    role: "Senior Backend Engineer",
    period: "April 2021 - May 2022",
    achievements: [
      "Built custom banking and loan-processing APIs that reduced third-party onboarding time by 50%.",
      "Led migration from legacy systems to microservices, improving scalability and reducing downtime.",
      "Managed containerized services with Docker and Kubernetes while improving API documentation and frontend collaboration.",
    ],
  },
  {
    company: "Inlaks",
    role: "Backend Developer",
    period: "October 2018 - March 2021",
    achievements: [
      "Built payment and transfer APIs supporting 1M+ transactions daily with 99.95% reliability.",
      "Used MongoDB and Redis to improve processing speed during peak traffic windows.",
      "Automated CI/CD pipelines with Jenkins and Docker to reduce deployment errors and delivery time.",
    ],
  },
];

const socialLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/Olayiwola72" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/olayiwola-akinnagbe/" },
  { label: "X / Twitter", href: "https://twitter.com/OlayiwolaAkinn1" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/119Hkfzy2sHD9gm9V5Oe4m0Xm5vamPNgt/view?usp=sharing",
  },
];

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 480);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <header className="topbar">
        <a className="brand" href="#hero" aria-label="Go to top">
          <span className="brand-mark">
            <img src={profileImage} alt="Olayiwola Akinnagbe" />
          </span>
          <span className="brand-copy">
            <strong>Olayiwola Akinnagbe</strong>
            <span>Senior Backend Engineer</span>
          </span>
        </a>

        <nav className="nav">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Senior backend engineer for high-scale fintech and platform systems</p>
            <h1>Architecture credibility, measurable outcomes, and backend systems built for real production load.</h1>
            <p className="hero-text">
              I design API-first platforms, microservices, event-driven flows,
              and cloud-ready backend systems. My work combines system design
              depth, strong delivery discipline, and the ability to explain
              complex architecture clearly.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#case-studies">
                Review case studies
              </a>
              <a className="button button-secondary" href="#projects">
                See technical projects
              </a>
            </div>

            <div className="hero-metrics">
              <div>
                <strong>1M+</strong>
                <span>Daily request and transaction-scale backend workloads</span>
              </div>
              <div>
                <strong>60%</strong>
                <span>Latency and downtime improvements across key initiatives</span>
              </div>
              <div>
                <strong>3 AWS certs</strong>
                <span>Cloud Practitioner, Developer Associate, Solutions Architect Associate</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <article className="profile-card panel-card primary-panel">
              <div className="profile-row">
                <div>
                  <p className="mini-label">Primary focus</p>
                  <h2>Fintech APIs, distributed services, backend performance, and architecture clarity</h2>
                </div>
              </div>
              <p>
                Strongest tools include Java, Spring Boot, Kafka, AWS,
                PostgreSQL, MongoDB, Docker, Kubernetes, React, and
                TypeScript.
              </p>
              <div className="signal-grid">
                <div>
                  <span>Technical range</span>
                  <strong>Payments, lending, integrations, search, CI/CD, cloud deployment</strong>
                </div>
                <div>
                  <span>Interview signal</span>
                  <strong>Scale, security, migration, performance, reliability</strong>
                </div>
              </div>
            </article>

            <article className="hero-panel panel-card accent-panel">
              <p className="mini-label">Operating principles</p>
              <ul className="principle-list">
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section summary-band">
          {credentialHighlights.map((item) => (
            <article key={item} className="summary-pill">
              <span className="summary-dot" />
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section className="section case-study-layout" id="case-studies">
          <div className="section-heading">
            <p className="eyebrow">Case studies</p>
            <h2>Experience framed the way strong interview loops expect it: context, architecture, tradeoffs, and outcomes.</h2>
          </div>

          <div className="case-study-grid">
            {caseStudies.map((study) => (
              <article key={study.title} className="case-study-card panel-card">
                <div className="case-study-signal">{study.signal}</div>
                <h3>{study.title}</h3>
                <p><strong>Context:</strong> {study.context}</p>
                <p><strong>Architecture:</strong> {study.architecture}</p>
                <p><strong>Outcome:</strong> {study.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-tight" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects that make system design knowledge concrete, visual, and easy to evaluate quickly.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-card panel-card">
                <div className="project-topline">
                  <span>{project.year}</span>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Open live product
                  </a>
                </div>

                <h3>{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-notes">{project.notes}</div>

                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="impact-list">
                  {project.impact.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-layout" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Backend progression across fintech delivery, platform modernization, and production reliability.</h2>
          </div>

          <div className="experience-grid">
            {experienceItems.map((item) => (
              <article key={item.company} className="experience-card panel-card">
                <div className="experience-topline">
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <div className="experience-list">
                  {item.achievements.map((achievement) => (
                    <p key={achievement}>{achievement}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section insights-section" id="about">
          <div className="insight-card panel-card">
            <p className="eyebrow">Stack and certifications</p>
            <h2>Deep backend foundations supported by cloud, platform, and delivery discipline.</h2>
            <p className="body-copy">
              I work across Java, Spring Boot, Kafka, SQL and NoSQL databases,
              Docker, Kubernetes, CI/CD pipelines, and AWS deployment. My
              current certification set includes AWS Certified Cloud
              Practitioner, AWS Certified Developer - Associate, and AWS
              Certified Solutions Architect - Associate.
            </p>
            <div className="chip-row">
              {skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="insight-card panel-card">
            <p className="eyebrow">Why this portfolio works for interviews</p>
            <h2>It shows not just what I used, but what problems I solved and what changed after.</h2>
            <div className="mini-stats">
              <div>
                <strong>Architecture decisions</strong>
                <span>API-first design, microservices migration, event-driven messaging, secure auth</span>
              </div>
              <div>
                <strong>Operational results</strong>
                <span>Lower latency, reduced downtime, faster onboarding, stronger throughput</span>
              </div>
              <div>
                <strong>Communication quality</strong>
                <span>Systems thinking presented with enough clarity for technical interviews and hiring panels</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card panel-card contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Open to senior backend, platform, fintech, and distributed systems opportunities.</h2>
            <p className="body-copy">
              If you are hiring for teams that value architecture depth,
              measurable execution, and strong technical communication, I would
              love to connect.
            </p>

            <div className="contact-links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <a
        className={`back-to-top ${showBackToTop ? "back-to-top-visible" : ""}`}
        href="#hero"
        aria-label="Back to top"
      >
        ↑
      </a>
    </div>
  );
}

export default App;
