import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./FliperBook.module.scss";
import { useTranslation } from "react-i18next";

const padIndex = (i) => String(i).padStart(3, "0");

export const FliperBook = () => {
  const { i18n } = useTranslation();
  const isEnglish = (i18n.language || "ge").startsWith("en");
  const isItalian = (i18n.language || "ge").startsWith("it");

  const pagesQuantity = isEnglish ? 60 : isItalian ? 56 : 102;
  const filePrefix = isEnglish
    ? "FromChaosToCosmos_EN"
    : isItalian
      ? "FromChaosToCosmos_IT_WEB"
      : "SandroAsatiani_ChaosidanCosmosamde";
  const baseFolder = isEnglish
    ? "FlipBookEn"
    : isItalian
      ? "FlipBookIt"
      : "FlipBook";

  return (
    <HTMLFlipBook
      className={styles.flipBook}
      width={500}
      height={700}
      showCover
    >
      {[...Array(pagesQuantity)].map((_, i) => {
        return (
          <div className={styles.demoPage} key={i}>
            <img
              src={`/assets/png/${baseFolder}/${filePrefix}-${padIndex(i + 1)}.png`}
              alt={i}
            />
          </div>
        );
      })}
    </HTMLFlipBook>
  );
};
