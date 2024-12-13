import styles from "./LanguageChangeButton.module.scss";

export const LanguageChangeButton = ({
  variant,
  isAnimated = true,
  children,
  language,
}) => {
  return (
    <button className={`${styles.languageChangeButton}`}>
      {children}
      {isAnimated ? <div className={styles.buttonOverlay}></div> : null}
    </button>
  );
};
