import i18next from "i18next";
import { withTranslation } from "react-i18next";
import { HomeInterface } from "../interfaces";

const Home: React.FC<HomeInterface> = ({ t }) => {
  const handleChange = (language: string): void => {
    i18next.changeLanguage(language);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">{t("pages.home.title")}</h1>
      <button
        className="transition-all p-2 bg-blue-300 hover:bg-blue-600 border-blue-300 rounded-md text-white text-xl"
        onClick={() => handleChange("es")}
      >
        Español
      </button>
      <button
        className="transition-all p-2 bg-blue-300 hover:bg-blue-600 border-blue-300 rounded-md text-white text-xl"
        onClick={() => handleChange("en")}
      >
        English
      </button>
      {/* <button
        className="transition-all p-2 bg-blue-300 hover:bg-blue-600 border-blue-300 rounded-md text-white text-xl"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button> */}
    </div>
  );
};

export default withTranslation()(Home);
