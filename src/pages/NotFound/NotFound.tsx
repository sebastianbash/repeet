import { withTranslation } from "react-i18next";
import { NotFoundInterface } from "../interfaces";

const NotFound: React.FC<NotFoundInterface> = ({ t }) => {
  return <h2>{t("pages.404.title")}</h2>;
};

export default withTranslation()(NotFound);
