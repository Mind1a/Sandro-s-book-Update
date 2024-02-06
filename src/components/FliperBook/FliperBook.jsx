import React from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./FliperBook.module.scss";

const padIndex = (i) => String(i).padStart(3, "0");
const pagesQuantity = 102;

export const FliperBook = () => {
  return (
    <HTMLFlipBook className={styles.flipBook} width={500} height={700} showCover>
      {[...Array(pagesQuantity)].map((_, i) => {
        return (
          <div className={styles.demoPage} key={i}>
            <img
              src={`/assets/png/FlipBook/${`SandroAsatiani_ChaosidanCosmosamde-${padIndex(
                i + 1
              )}.png`}`}
              alt={i}
            />
          </div>
        );
      })}
    </HTMLFlipBook>
  );
};
