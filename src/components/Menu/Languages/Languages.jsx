import styles from "./Languages.module.scss";
import { LanguageChangeButton } from "../../Buttons/LanguageChangeButton";

export const Languages = () => {
  return (
    <div className={styles.languageContainer}>
      <LanguageChangeButton>GE</LanguageChangeButton>
      <LanguageChangeButton>IT</LanguageChangeButton>
    </div>
  );
};
