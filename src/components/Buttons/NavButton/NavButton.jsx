import styles from "./NavButton.module.scss";

export const NavButton = ({
  onClick,
  variant,
  type = "button",
  isAnimated = true,
  children,
  additionalStyles = {},
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        variant ? `${styles.navButton} ${variant}` : `${styles.navButton}`
      }
      style={additionalStyles}
      // for default style overriding use more specificity on your variant class
    >
      {children}
      {isAnimated ? <div className={styles.buttonOverlay}></div> : null}
    </button>
  );
};
