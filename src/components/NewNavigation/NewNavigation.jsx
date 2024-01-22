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
            <img src="/assets/svgs/social-links/SandrosBooks_logo.svg" alt="logo" />
          </AnchorNavButton>
        </div>
        <div className={styles.navButtonsContainer}>
          <Dropdown
            icon={<img src="/assets/svgs/social-links/button_burger.svg" alt="burger menu" />}
          >
            {(props) => <SideMenu handleFalse={props.handleFalse} />}
          </Dropdown>
          <Dropdown
            icon={<img src="/assets/svgs/social-links/button_links.svg" alt="social links" />}
          >
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