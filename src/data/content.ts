import aboutContent from "../content/about/main.json";
import certificationsContent from "../content/certifications/main.json";
import educationContent from "../content/education/main.json";
import experienceContent from "../content/experience/main.json";
import heroContent from "../content/hero/main.json";
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

export interface Project {
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
  body: string;
}

const projectModules = import.meta.glob("../content/projects/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

type FrontmatterValue =
  | string
  | number
  | boolean
  | string[]
  | ProjectLink[]
  | undefined;

type FrontmatterMap = Record<string, FrontmatterValue>;

const parseScalarValue = (value: string): FrontmatterValue => {
  const trimmedValue = value.trim();

  if (trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) {
    return JSON.parse(trimmedValue) as string[];
  }

  if (
    (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
    (trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
  ) {
    return trimmedValue.slice(1, -1);
  }

  if (trimmedValue === "true" || trimmedValue === "false") {
    return trimmedValue === "true";
  }

  if (/^\d+$/.test(trimmedValue)) {
    return Number(trimmedValue);
  }

  return trimmedValue;
};

const parseFrontmatter = (raw: string) => {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: raw.trim() };
  }

  const [, frontmatterBlock, markdownBody] = match;
  const lines = frontmatterBlock.split("\n");
  const data: FrontmatterMap = {};

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (!line?.trim()) {
      continue;
    }

    const fieldMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);

    if (!fieldMatch) {
      continue;
    }

    const [, key, rawValue] = fieldMatch;

    if (!rawValue) {
      const nestedItems: ProjectLink[] = [];
      let nestedIndex = index + 1;

      while (nestedIndex < lines.length && /^\s/.test(lines[nestedIndex] ?? "")) {
        const itemLine = lines[nestedIndex]?.trim() ?? "";

        if (itemLine.startsWith("- ")) {
          const object: Partial<ProjectLink> = {};
          const firstField = itemLine.slice(2);
          const [firstKey, ...firstValueParts] = firstField.split(":");

          if (firstKey && firstValueParts.length > 0) {
            object[firstKey.trim() as keyof ProjectLink] = String(
              parseScalarValue(firstValueParts.join(":")),
            );
          }

          nestedIndex += 1;

          while (
            nestedIndex < lines.length &&
            /^\s{4,}/.test(lines[nestedIndex] ?? "")
          ) {
            const nestedField = lines[nestedIndex]?.trim() ?? "";
            const [childKey, ...childValueParts] = nestedField.split(":");

            if (childKey && childValueParts.length > 0) {
              object[childKey.trim() as keyof ProjectLink] = String(
                parseScalarValue(childValueParts.join(":")),
              );
            }

            nestedIndex += 1;
          }

          nestedItems.push(object as ProjectLink);
          continue;
        }

        nestedIndex += 1;
      }

      data[key] = nestedItems;
      index = nestedIndex - 1;
      continue;
    }

    data[key] = parseScalarValue(rawValue);
  }

  return { data, content: markdownBody.trim() };
};

const toIsoDate = (value: unknown) => {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return new Date(String(value)).toISOString();
};

const toSlug = (path: string) =>
  path.split("/").pop()?.replace(/\.md$/, "") ?? "project";

const isProjectLink = (value: unknown): value is ProjectLink =>
  typeof value === "object" &&
  value !== null &&
  "text" in value &&
  "url" in value;

const parseProject = (path: string, raw: string): Project => {
  const { data, content } = parseFrontmatter(raw);

  return {
    slug: toSlug(path),
    title: String(data.title),
    description: String(data.description),
    category: String(data.category),
    metrics: String(data.metrics),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    pubDate: toIsoDate(data.pubDate),
    featured: Boolean(data.featured),
    order: Number(data.order ?? 0),
    thumbnail: typeof data.thumbnail === "string" ? data.thumbnail : undefined,
    links: Array.isArray(data.links) && data.links.every(isProjectLink)
      ? data.links.map((link) => ({
          text: String(link.text),
          url: String(link.url),
        }))
      : undefined,
    body: content.trim(),
  };
};

export const hero = heroContent as HeroContent;
export const skills = skillsContent as SkillsContent;
export const about = aboutContent as AboutContent;
export const experience = experienceContent as ExperienceContent;
export const education = educationContent as EducationContent;
export const certifications = certificationsContent as CertificationsContent;
export const siteSettings = settingsContent as SiteSettings;

export const projects = Object.entries(projectModules)
  .map(([path, raw]) => parseProject(path, raw))
  .sort(
    (first, second) =>
      new Date(second.pubDate).getTime() - new Date(first.pubDate).getTime(),
  );

export const featuredProjects = [...projects]
  .filter((project) => project.featured)
  .sort((first, second) => first.order - second.order);

export const projectCategories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
