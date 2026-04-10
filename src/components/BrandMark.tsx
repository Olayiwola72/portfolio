import clsx from "clsx";

import { siteSettings } from "../data/content";

interface BrandMarkProps {
  className?: string;
  compact?: boolean;
}

const getInitials = (value: string) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  const initials = getInitials(siteSettings.personName);

  return (
    <div className={clsx("brand-mark", compact && "brand-mark--compact", className)}>
      <span className="brand-mark__halo" aria-hidden="true" />
      <span className="brand-mark__initials" aria-hidden="true">
        {initials}
      </span>
      <div className="brand-mark__copy">
        <strong>{siteSettings.personName}</strong>
        <span>{siteSettings.role}</span>
      </div>
    </div>
  );
}
