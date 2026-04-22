import { PageMeta } from "../components/PageMeta";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { HeroSection } from "../components/HeroSection";
import { ImpactStats } from "../components/ImpactStats";
import { MediumSection } from "../components/MediumSection";
import { SkillsSection } from "../components/SkillsSection";
import { siteSettings } from "../data/content";

export function HomePage() {
  return (
    <>
      <PageMeta title={siteSettings.siteName} description={siteSettings.description} />
      <HeroSection />
      <ImpactStats />
      <SkillsSection />
      <FeaturedProjects />
      <MediumSection />

      <section className="cta-band">
        <div className="container cta-band__inner">
          <h2>Need resilient backend systems at scale?</h2>
          <p>{siteSettings.lookingFor}</p>
          <a className="button button--primary" href={siteSettings.contactMeLink}>
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
