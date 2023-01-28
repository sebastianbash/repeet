export const rawSetTheme = (rawTheme: string): void => {
  const root = window.document.documentElement;
  const isDark = rawTheme === "dark";

  root.classList.remove(isDark ? "light" : "dark");
  root.classList.add(rawTheme);
};
