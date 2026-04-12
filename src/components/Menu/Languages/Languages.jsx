import styles from "./Languages.module.scss";
import { LanguageChangeButton } from "../../Buttons/LanguageChangeButton";
import i18n from "../../../utils/i18n";
import { useLocation, useNavigate } from "react-router-dom";
import { buildLocalizedPath } from "../../../utils/routing";

export const Languages = ({
  currentLanguage,
  setCurrentLanguage,
  handleFalse,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language.toUpperCase());
    localStorage.setItem("language", language);
    navigate(buildLocalizedPath(location.pathname, language), {
      replace: true,
    });
    handleFalse();
  };

  return (
    <div className={styles.languageContainer}>
      <LanguageChangeButton
        language="GE"
        isSelected={currentLanguage === "GE"}
        onClick={() => handleLanguageChange("ge")}
      >
        GE
      </LanguageChangeButton>
      <LanguageChangeButton
        language="IT"
        isSelected={currentLanguage === "IT"}
        onClick={() => handleLanguageChange("it")}
      >
        IT
      </LanguageChangeButton>
      <LanguageChangeButton
        language="EN"
        isSelected={currentLanguage === "EN"}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </LanguageChangeButton>
    </div>
  );
};
