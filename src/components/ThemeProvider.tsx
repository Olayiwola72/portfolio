import {
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

import { ThemeContext, type Theme } from "../context/theme";

const getThemePreference = (): Theme => {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
};

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => getThemePreference());

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "theme") {
        setTheme(getThemePreference());
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          );
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
