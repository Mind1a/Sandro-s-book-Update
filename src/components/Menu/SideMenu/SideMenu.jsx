import styles from "./SideMenu.module.scss";
import { Link } from "react-router-dom";
import { NavButton } from "../../Buttons/NavButton";

export const SideMenu = ({ handleFalse }) => {

  return (
    <div className={styles.sideMenuContainer}>
      <div className={styles.sideMenu}>
        <Link
          to={"/contents"}
          onClick={handleFalse}
        >
          სარჩევი
        </Link>
        <div>------</div>
        <Link
          to={"/contents"}
          onClick={handleFalse}
        >
          პროექტის შესახებ
        </Link>
        <div>------</div>
        <Link
          to={"/contents"}
          onClick={handleFalse}
        >
          წიგნის PDF ვერსია
        </Link>
        <div>------</div>
        <Link
          to={"/contents"}
          onClick={handleFalse}
        >
          გალერეა
        </Link>
      </div>
      <NavButton
        onClick={handleFalse}
      >
        <img src="/assets/svgs/social-links/button_close.svg" alt="close" />
      </NavButton>
    </div>
  )
}