import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { siteSettings } from "../data/content";

interface PageMetaProps {
  title?: string;
  description?: string;
}

type MetaKey = { name: string } | { property: string };

const getMetaSelector = (key: MetaKey) =>
  "name" in key ? `meta[name="${key.name}"]` : `meta[property="${key.property}"]`;

const upsertMetaTag = (key: MetaKey, value: string) => {
  const selector = getMetaSelector(key);
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");

    if ("name" in key) {
      element.name = key.name;
    } else {
      element.setAttribute("property", key.property);
    }

    document.head.appendChild(element);
  }

  element.content = value;
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
};

export function PageMeta({ title, description }: PageMetaProps) {
  const location = useLocation();

  useEffect(() => {
    const resolvedTitle = title ?? siteSettings.siteName;
    const resolvedDescription = description ?? siteSettings.description;
    const currentUrl = new URL(location.pathname, window.location.origin);
    const imageUrl = new URL(siteSettings.seo.ogImage, window.location.origin);

    document.title = resolvedTitle;

    upsertMetaTag({ name: "title" }, resolvedTitle);
    upsertMetaTag({ name: "description" }, resolvedDescription);
    upsertMetaTag({ property: "og:title" }, resolvedTitle);
    upsertMetaTag({ property: "og:description" }, resolvedDescription);
    upsertMetaTag({ property: "og:image" }, imageUrl.toString());
    upsertMetaTag({ property: "twitter:title" }, resolvedTitle);
    upsertMetaTag({ property: "twitter:description" }, resolvedDescription);
    upsertMetaTag({ property: "twitter:image" }, imageUrl.toString());
    upsertLink("canonical", currentUrl.toString());
  }, [description, location.pathname, title]);

  return null;
}
