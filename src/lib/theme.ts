export const THEMES = [
  { id: "light", label: "明" },
  { id: "dark", label: "暗" },
  { id: "color", label: "彩" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export const THEME_STORAGE_KEY = "orca-handbook-theme";

export const THEME_COLOR: Record<ThemeId, string> = {
  light: "#f4f5f7",
  dark: "#0c0e12",
  color: "#f3ead9",
};

export function isThemeId(value: string | null): value is ThemeId {
  return value === "light" || value === "dark" || value === "color";
}

export function readStoredTheme(): ThemeId {
  if (typeof document === "undefined") return "dark";
  const attr = document.documentElement.getAttribute("data-theme");
  if (isThemeId(attr)) return attr;
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isThemeId(stored)) return stored;
  } catch {
    /* ignore */
  }
  return "dark";
}

export function applyTheme(theme: ThemeId) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLOR[theme]);
}
