import styles from "./GalleryModal.module.scss";
import React from "react";
import { NavButton } from "../Buttons/NavButton/NavButton";
import { useTranslation } from "react-i18next";

export const GalleryModal = ({ isOpen, src, onClose, data }) => {
  const { i18n } = useTranslation();

  if (!isOpen || !data) return null;

  const lang = i18n.language;

  const title = data.title?.[lang] || data.title?.en;
  const description = data.description?.[lang] || data.description?.en;

  return (
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <img src={src} className={styles.modalImage} alt={title} />

          <div className={styles.modalInfo}>
            <h2>{title}</h2>
            <p>{description}</p>

            <h2>From Book:</h2>
          </div>

          <NavButton
              onClick={onClose}
              additionalStyles={{ position: "absolute", top: "0", right: "0" }}
          >
            <img
                src="/assets/svgs/social-links/button_close.svg"
                alt="close"
            />
          </NavButton>
        </div>
      </div>
  );
};