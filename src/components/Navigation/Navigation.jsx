import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { AnchorNavButton } from "../Buttons/AnchorNavButton";
import { Dropdown } from "../Dropdown";
import { Social } from "../Menu/Social/Social";
import { SideMenu } from "../Menu/SideMenu";
import { Languages } from "../Menu/Languages";

export const Navigation = ({ isMenuOpen, handleFalse, handleToggle }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("language")?.toUpperCase() || "GE";
  });
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.toHomeContainer}>
          <AnchorNavButton href={"/"}>
            <img
              src="/assets/svgs/social-links/SandrosBooks_logo.svg"
              alt="logo"
            />
          </AnchorNavButton>
        </div>

        <div className={styles.navButtonsContainer}>
          <SideMenu
            isMenuOpen={isMenuOpen}
            handleFalse={handleFalse}
            handleToggle={handleToggle}
          />

          <Dropdown
            icon={
              <img
                src="/assets/svgs/social-links/button_links.svg"
                alt="social links"
              />
            }
          >
            {() => <Social />}
          </Dropdown>

          <Dropdown
            icon={<span className={styles.lang}>{currentLanguage}</span>}
          >
            {() => (
              <Languages
                currentLanguage={currentLanguage}
                setCurrentLanguage={setCurrentLanguage}
              />
            )}
          </Dropdown>
        </div>
      </nav>
    </header>
  );
};
