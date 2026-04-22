export interface NavigationItem {
  label: string;
  to: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];
