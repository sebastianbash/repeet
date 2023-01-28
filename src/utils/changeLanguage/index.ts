import i18next from "i18next";

export const handleChangeLanguage = (language: string): void => {
  i18next.changeLanguage(language);
};
