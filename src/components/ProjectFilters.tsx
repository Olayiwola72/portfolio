import clsx from "clsx";

interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  mobileOpen: boolean;
  onToggleMobile: () => void;
  onSelectCategory: (category: string) => void;
}

export function ProjectFilters({
  categories,
  activeCategory,
  mobileOpen,
  onToggleMobile,
  onSelectCategory,
}: ProjectFiltersProps) {
  return (
    <div className="filter-shell">
      <button
        type="button"
        className={clsx("filter-toggle", mobileOpen && "is-open")}
        aria-expanded={mobileOpen}
        onClick={onToggleMobile}
      >
        <span>Filter Projects</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m19 9-7 7-7-7" />
        </svg>
      </button>

      <div className={clsx("filter-menu", mobileOpen && "is-open")}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={clsx(
              "filter-chip",
              activeCategory === category && "is-active",
            )}
            aria-pressed={activeCategory === category}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
