import storage from "redux-persist/lib/storage";

export const getInitialTheme = async (): Promise<string> => {
  if (typeof window !== "undefined" && window.localStorage) {
    let storedPrefs: string | null = await storage.getItem("persist:theme");

    if (storedPrefs === null) {
      storedPrefs = "light";
    } else {
      const storedPrefsObj = JSON.parse(storedPrefs);
      const str: string = storedPrefsObj.theme.replace(/"|'/g, "");
      if (typeof str === "string") {
        return str;
      }

      const userMedia: MediaQueryList = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );
      if (userMedia.matches) {
        return "dark";
      }
    }
  }

  // * If you want to use dark theme as the default, return 'dark' instead
  return "light";
};
