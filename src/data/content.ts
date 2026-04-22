import aboutContent from "../content/about/main.json";
import certificationsContent from "../content/certifications/main.json";
import educationContent from "../content/education/main.json";
import experienceContent from "../content/experience/main.json";
import heroContent from "../content/hero/main.json";
import mediumContent from "../content/medium/main.json";
import projectContent from "../content/projects/main.json";
import settingsContent from "../content/settings/main.json";
import skillsContent from "../content/skills/main.json";

export interface HeroContent {
  headingMain: string;
  headingAccent: string;
  headingSuffix: string;
  description: string;
  stackTitle: string;
  stack: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface SkillsContent {
  categories: SkillCategory[];
}

export interface AboutHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ImpactMetric {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface AboutContent {
  heading: string;
  subheading: string;
  bio: string[];
  cvLink: string;
  showHighlights: boolean;
  highlightsTitle: string;
  highlights: AboutHighlight[];
  showImpact: boolean;
  impact: ImpactMetric[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  skills: string[];
}

export interface ExperienceContent {
  entries: ExperienceEntry[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface EducationContent {
  entries: EducationEntry[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  period: string;
  credential?: string;
  badgeUrl?: string;
  badgeImage?: string;
}

export interface CertificationsContent {
  entries: CertificationEntry[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteSettings {
  personName: string;
  role: string;
  location: string;
  phone: string;
  siteName: string;
  description: string;
  oneLiner: string;
  lookingFor: string;
  email: string;
  contactMeLink: string;
  mediumFeedUrl: string;
  availability: string;
  socials: SocialLink[];
  seo: {
    ogImage: string;
    keywords: string[];
  };
}

export interface ProjectLink {
  text: string;
  url: string;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  description: string;
  category: string;
  metrics: string;
  tags: string[];
  pubDate: string;
  featured: boolean;
  order: number;
  thumbnail?: string;
  links?: ProjectLink[];
}

export interface Project extends ProjectSummary {
  body: string;
}

export interface MediumArticle {
  title: string;
  link: string;
  publishedAt: string;
  excerpt: string;
  categories: string[];
  readingTimeMinutes: number;
  thumbnail?: string | null;
}

export interface MediumFeedContent {
  generatedAt: string;
  sourceUrl: string;
  articles: MediumArticle[];
}

const projectBodyModules = import.meta.glob("../content/projects/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

const projectBodyCache = new Map<string, Promise<string>>();

const stripFrontmatter = (raw: string) =>
  raw.replace(/^---\s*[\s\S]*?\s*---\s*/, "").trim();

export const hero = heroContent as HeroContent;
export const skills = skillsContent as SkillsContent;
export const about = aboutContent as AboutContent;
export const experience = experienceContent as ExperienceContent;
export const education = educationContent as EducationContent;
export const certifications = certificationsContent as CertificationsContent;
export const siteSettings = settingsContent as SiteSettings;
export const mediumFeed = mediumContent as MediumFeedContent;

export const projects = (projectContent.entries as ProjectSummary[]).toSorted(
  (first, second) =>
    new Date(second.pubDate).getTime() - new Date(first.pubDate).getTime(),
);

const projectIndex = new Map(projects.map((project) => [project.slug, project]));

export const featuredProjects = [...projects]
  .filter((project) => project.featured)
  .sort((first, second) => first.order - second.order);

export const projectCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

export const getSocialLinkByIcon = (icon: string) =>
  siteSettings.socials.find((social) => social.icon === icon);

export const loadProjectBody = (slug: string) => {
  const cachedBody = projectBodyCache.get(slug);

  if (cachedBody) {
    return cachedBody;
  }

  const loader = projectBodyModules[`../content/projects/${slug}.md`];

  if (!loader) {
    return Promise.reject(new Error(`No project body found for "${slug}".`));
  }

  // Keep project markdown out of the first bundle and cache it after the first open.
  const bodyPromise = loader().then(stripFrontmatter);

  projectBodyCache.set(slug, bodyPromise);

  return bodyPromise;
};

export const loadProject = async (slug: string): Promise<Project> => {
  const project = projectIndex.get(slug);

  if (!project) {
    throw new Error(`No project metadata found for "${slug}".`);
  }

  const body = await loadProjectBody(slug);

  return {
    ...project,
    body,
  };
};
