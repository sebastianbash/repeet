import { useCustomDispatch, useCustomSelector } from "@/hooks";
import { setTheme } from "@/redux/slices/theme";
import { handleChangeLanguage } from "@/utils";
import { withTranslation } from "react-i18next";
import { HomeInterface } from "../interfaces";

const Home: React.FC<HomeInterface> = ({ t }) => {
  const { theme } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleTheme = (): void => {
    if (theme.theme === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">{t("pages.home.title")}</h1>
      <button
        className="transition-all p-2 bg-blue-300 hover:bg-blue-600 border-blue-300 rounded-md text-white text-xl"
        onClick={() => handleChangeLanguage("es")}
      >
        Español
      </button>
      <button
        className="transition-all p-2 bg-blue-300 hover:bg-blue-600 border-blue-300 rounded-md text-white text-xl"
        onClick={() => handleChangeLanguage("en")}
      >
        English
      </button>
      <button
        className="transition-all p-2 bg-blue-300 hover:bg-blue-600 border-blue-300 rounded-md text-white text-xl"
        onClick={handleTheme}
      >
        {theme.theme === "light" ? "Set Dark Theme" : "Set Light Theme"}
      </button>
    </div>
  );
};

export default withTranslation()(Home);
