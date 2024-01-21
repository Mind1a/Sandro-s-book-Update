import styles from "./NewNavigation.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { AnchorNavButton } from "../Buttons/AnchorNavButton";
import { BurgerSVG } from "../Svgs/Navigation svgs/Burger";
import { SocialSVG } from "../Svgs/Navigation svgs/Social";
import { PublishSVG } from "../Svgs/Navigation svgs/Publish";
import { Dropdown } from "../Dropdown";
import { Social } from "../Menu/Social/Social";
import { SideMenu } from "../Menu/SideMenu";

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
          <Dropdown icon={<BurgerSVG variant={styles.burgerSVG} />}>
            {(props) => <SideMenu handleFalse={props.handleFalse} />}
          </Dropdown>
          <Dropdown icon={<SocialSVG variant={styles.socialSVG} />}>
            {() => <Social />}
          </Dropdown>
          <NavButton>
            <span className={styles.lang}>EN</span>
          </NavButton>
        </div>
      </nav>
    </header>
  )
}