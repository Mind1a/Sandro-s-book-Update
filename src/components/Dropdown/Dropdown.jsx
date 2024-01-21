import styles from "./Dropdown.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { useToggle } from "../../hooks/useToggle";

export const Dropdown = ({ icon, variant, children }) => {
  const { toggle: isClicked, handleToggle } = useToggle();

  return (
    <div className={variant ? variant : styles.container}>
      <NavButton onClick={handleToggle}>
        {icon}
      </NavButton>
      {isClicked ? children : null}
    </div>
  )
}