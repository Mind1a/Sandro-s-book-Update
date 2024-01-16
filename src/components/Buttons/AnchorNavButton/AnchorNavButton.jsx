import styles from "./AnchorNavButton.module.scss";
import { Link } from "react-router-dom";

export const AnchorNavButton = ({ href, variant, target, children }) => {

  return (
    <Link
      to={href}
      target={target}
      className={variant ? `${styles.anchorNavButton} ${variant}` : `${styles.anchorNavButton}`}
    >
      {children}
    </Link>
  )
}