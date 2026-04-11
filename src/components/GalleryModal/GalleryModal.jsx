import styles from "./GalleryModal.module.scss";
import React from "react";
import { NavButton } from "../Buttons/NavButton/NavButton";
import { useTranslation } from "react-i18next";

export const GalleryModal = ({ isOpen, src, onClose, data }) => {
  const { i18n } = useTranslation();

  if (!isOpen || !data) return null;

  const lang = (i18n.language || "en").split("-")[0];
  const langKey = lang === "ge" ? "ka" : lang;

  const resolveLocalizedValue = (entry, key) => {
    if (!entry) return "";

    if (typeof entry === "string") {
      return entry;
    }

    if (entry[key]) {
      return entry[key];
    }

    if (entry.en) {
      return entry.en;
    }

    if (entry.ka) {
      return entry.ka;
    }

    if (entry.it) {
      return entry.it;
    }

    return "";
  };

  const title =
    resolveLocalizedValue(data.title, langKey) ||
    resolveLocalizedValue(
      {
        en: data.title_en,
        it: data.title_it,
        ka: data.title_ka,
      },
      langKey,
    );

  const description =
    resolveLocalizedValue(data.description, langKey) ||
    resolveLocalizedValue(
      {
        en: data.text_en,
        it: data.text_it,
        ka: data.text_ka,
      },
      langKey,
    );

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={src} className={styles.modalImage} alt={title} />

        <div className={styles.modalInfo}>
          <h2>{title}</h2>
          <p>{description}</p>
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
