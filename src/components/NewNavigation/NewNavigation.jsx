import styles from "./NewNavigation.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { AnchorNavButton } from "../Buttons/AnchorNavButton";
import { BurgerSVG } from "../Svgs/Navigation svgs/Burger";
import { SocialSVG } from "../Svgs/Navigation svgs/Social";
import { PublishSVG } from "../Svgs/Navigation svgs/Publish";

export const NewNavigation = () => {

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.toHomeContainer}>
          <AnchorNavButton
            href={"/"}
          >
            <PublishSVG variant={styles.publishSVG} />
            FUTURE SVG
          </AnchorNavButton>
        </div>
        <div className={styles.navButtonsContainer}>
          <NavButton>
            <BurgerSVG variant={styles.burgerSVG} />
          </NavButton>
          <NavButton>
            <SocialSVG variant={styles.socialSVG} />
          </NavButton>
          <NavButton>
            <span className={styles.lang}>EN</span>
          </NavButton>
        </div>
      </nav>
    </header>
  )
}