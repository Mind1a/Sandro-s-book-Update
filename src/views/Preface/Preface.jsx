import React from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { AudioBar } from "../../components/AudioBar";
import styles from "./Preface.module.scss";
import { useTranslation } from "react-i18next";
import { buildLocalizedPath, toRouteLanguage } from "../../utils/routing";
import i18n from "../../utils/i18n";

export const Preface = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentLanguage = toRouteLanguage(i18n.language);

  const handlePrevClick = () => {
    navigate(buildLocalizedPath("/", currentLanguage));
  };

  const handleNextClick = () => {
    navigate(buildLocalizedPath("/books/qaosidan-kosmosamde", currentLanguage));
  };

  const prefaceText = t("preface-translation.text").split("\n");
  return (
    <>
      <Loader
        width={["100%", "15%"]}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className={styles.prefaceMainPart}>
        <h4>{t("preface-translation.title")}</h4>
        <div className={styles.prefaceContent}>
          <div className={styles.prefaceText}>
            {prefaceText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <h5>{t("preface-translation.author")}</h5>
          </div>
        </div>
        <AudioBar
          preface={true}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
    </>
  );
};

//
