import styles from "./SideMenu.module.scss";
import { Link } from "react-router-dom";
import { NavButton } from "../../Buttons/NavButton";
import OutsideClickHandler from "react-outside-click-handler";
import ReactFocusLock from "react-focus-lock";
import { motion } from "framer-motion";

export const SideMenu = ({ isMenuOpen, handleFalse, handleToggle }) => {

  return (
    <div onKeyDown={(e) => e.key === "Escape" && handleFalse()}>
      <OutsideClickHandler onOutsideClick={handleFalse}>
        <ReactFocusLock disabled={!isMenuOpen}>
          <NavButton onClick={handleToggle}>
            <img src="/assets/svgs/social-links/button_burger.svg" alt="burger menu" />
          </NavButton>
          {isMenuOpen &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className={styles.sideMenuContainer}
            >
              <NavButton
                onClick={handleFalse}
              >
                <img src="/assets/svgs/social-links/button_close.svg" alt="close" />
              </NavButton>
              <div className={styles.sideMenu}>
                <Link
                  to={"/contents"}
                  onClick={handleFalse}
                >
                  სარჩევი
                </Link>
                <div className={styles.iconContainer}>
                  <img src="/assets/svgs/side-menu-svg/menu-line-1.svg" alt="line" />
                </div>
                <Link
                  to={"/about"}
                  onClick={handleFalse}
                >
                  პროექტის შესახებ
                </Link>
                <div className={styles.iconContainer}>
                  <img src="/assets/svgs/side-menu-svg/menu-line-2.svg" alt="line" />
                </div>
                <Link
                  to={"/pdf"}
                  onClick={handleFalse}
                >
                  წიგნის PDF ვერსია
                </Link>
                <div className={styles.iconContainer}>
                  <img src="/assets/svgs/side-menu-svg/menu-line-3.svg" alt="line" />
                </div>
                <Link
                  to={"/contents"}
                  onClick={handleFalse}
                >
                  გალერეა
                </Link>
              </div>
            </motion.div>}
        </ReactFocusLock>
      </OutsideClickHandler>
    </div>
  )
}