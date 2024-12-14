import styles from "./LanguageChangeButton.module.scss";

export const LanguageChangeButton = ({
  children,
  isSelected,
  onClick,
  isAnimated = true,
}) => {
  return (
    <button
      className={`${styles.languageChangeButton} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={onClick}
    >
      {children}
      {isAnimated ? <div className={styles.buttonOverlay}></div> : null}
    </button>
  );
};
