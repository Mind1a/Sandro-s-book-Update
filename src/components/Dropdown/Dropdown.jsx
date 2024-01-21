import React from "react";
import styles from "./Dropdown.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { useToggle } from "../../hooks/useToggle";

export const Dropdown = ({ icon, variant, children }) => {
  const { toggle: isClicked, handleFalse, handleTrue } = useToggle();
  const props = { isClicked, handleFalse, handleTrue };

  // gives us opportunity to pass props inside children components with renderProps approach (children(props)).
  // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
  return (
    <div className={variant ? variant : styles.container}>
      <NavButton onClick={handleTrue}>
        {icon}
      </NavButton>
      {isClicked ? children(props) : null}
    </div>
  )
}