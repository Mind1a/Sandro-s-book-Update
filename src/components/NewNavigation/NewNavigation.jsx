import styles from "./NewNavigation.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { AnchorNavButton } from "../Buttons/AnchorNavButton";

export const NewNavigation = () => {

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.toHomeContainer}>
          <AnchorNavButton
            href={"/"}
          >
            <img src="/assets/svgs/social-links/publish-icon.svg" alt="home" />
          </AnchorNavButton>
        </div>
        <div className={styles.navButtonsContainer}>
          <NavButton>
            <img className={styles.burger} src="/assets/svgs/social-links/burger.svg" alt="menu" />
          </NavButton>
          <NavButton>
            <img className={styles.share} src="/assets/svgs/social-links/share.svg" alt="social" />
          </NavButton>
          <NavButton>
            <span className={styles.lang}>EN</span>
          </NavButton>
        </div>
      </nav>
    </header>
  )
}