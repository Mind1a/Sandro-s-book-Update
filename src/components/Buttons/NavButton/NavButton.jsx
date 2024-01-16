import styles from "./NavButton.module.scss";

export const NavButton = ({ onClick, variant, type, children }) => {

  return (
    <button
      onClick={onClick}
      type={type}
      className={variant ? `${styles.navButton} ${variant}` : `${styles.navButton}`}
    // for default style overriding use more specificity on your variant class
    >
      {children}
    </button>
  )
}