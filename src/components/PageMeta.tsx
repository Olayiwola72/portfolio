import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { siteSettings } from "../data/content";

interface PageMetaProps {
  title?: string;
  description?: string;
}

const setMetaTag = (selector: string, value: string) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.content = value;
  }
};

const setCanonicalLink = (href: string) => {
  const element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (element) {
    element.href = href;
  }
};

export function PageMeta({ title, description }: PageMetaProps) {
  const location = useLocation();

  useEffect(() => {
    const resolvedTitle = title ?? siteSettings.siteName;
    const resolvedDescription = description ?? siteSettings.description;
    const currentUrl = new URL(location.pathname, window.location.origin);
    const imageUrl = new URL(siteSettings.seo.ogImage, window.location.origin);

    document.title = resolvedTitle;

    setMetaTag('meta[name="title"]', resolvedTitle);
    setMetaTag('meta[name="description"]', resolvedDescription);
    setMetaTag('meta[property="og:title"]', resolvedTitle);
    setMetaTag('meta[property="og:description"]', resolvedDescription);
    setMetaTag('meta[property="og:image"]', imageUrl.toString());
    setMetaTag('meta[property="twitter:title"]', resolvedTitle);
    setMetaTag('meta[property="twitter:description"]', resolvedDescription);
    setMetaTag('meta[property="twitter:image"]', imageUrl.toString());
    setCanonicalLink(currentUrl.toString());
  }, [description, location.pathname, title]);

  return null;
}
