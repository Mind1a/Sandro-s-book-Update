import styles from "./GalleryModal.module.scss";
import React from "react";
import { NavButton } from "../Buttons/NavButton/NavButton";

export const GalleryModal = ({ isOpen, src, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={src} className={styles.modalImage} />
        <div className={styles.modalInfo}>
          <h2>Illustration Title</h2>
          <p>Short Text</p>
          <h2>From Book: </h2>
        </div>
        <NavButton
          onClick={onClose}
          additionalStyles={{ position: "absolute", top: "0", right: "0" }}
        >
          <img src="/assets/svgs/social-links/button_close.svg" alt="close" />
        </NavButton>
      </div>
    </div>
  );
};
