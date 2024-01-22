import React from "react";
import styles from "./Dropdown.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { useToggle } from "../../hooks/useToggle";
import OutsideClickHandler from "react-outside-click-handler";
import ReactFocusLock from "react-focus-lock";

export const Dropdown = ({ icon, variant, children }) => {
  const { toggle: isClicked, handleFalse, handleTrue, handleToggle } = useToggle();
  const props = { isClicked, handleFalse, handleTrue };

  // gives us opportunity to pass props inside children components with renderProps approach (children(props)).
  // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
  return (
    <div className={variant ? variant : styles.container}>
      <OutsideClickHandler onOutsideClick={handleFalse}>
        <ReactFocusLock disabled={!isClicked}>
          <NavButton onClick={handleToggle}>
            {icon}
          </NavButton>
          {isClicked ? children(props) : null}
        </ReactFocusLock>
      </OutsideClickHandler>
    </div>
  )
}