import styles from "./Languages.module.scss";
import { LanguageChangeButton } from "../../Buttons/LanguageChangeButton";
import i18n from "../../../utils/i18n";

export const Languages = ({ currentLanguage, setCurrentLanguage }) => {
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language.toUpperCase());
    localStorage.setItem("language", language);
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
    </div>
  );
};
