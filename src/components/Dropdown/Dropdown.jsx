import React from "react";
import styles from "./Dropdown.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { useToggle } from "../../hooks/useToggle";
import OutsideClickHandler from "react-outside-click-handler";
import ReactFocusLock from "react-focus-lock";
import { motion } from "framer-motion";

export const Dropdown = ({
  icon,
  variant,
  handleInitial,
  handleAnimate,
  handleTransition,
  children
}) => {
  const { toggle: isClicked, handleFalse, handleTrue, handleToggle } = useToggle();
  const props = { isClicked, handleFalse, handleTrue };

  // gives us opportunity to pass props inside children components with renderProps approach (children(props)).
  // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
  return (
    <div
      className={variant ? variant : styles.container}
      onKeyDown={(e) => e.key === "Escape" && handleFalse()}
    >
      <OutsideClickHandler onOutsideClick={handleFalse}>
        <ReactFocusLock disabled={!isClicked}>
          <NavButton onClick={handleToggle}>
            {icon}
          </NavButton>
          {isClicked ?
            <motion.div
              initial={handleInitial || { opacity: 0 }}
              animate={handleAnimate || { opacity: 1 }}
              transition={handleTransition || { duration: 0.25 }}
            >
              {children(props)}
            </motion.div> : null}
        </ReactFocusLock>
      </OutsideClickHandler>
    </div>
  )
}