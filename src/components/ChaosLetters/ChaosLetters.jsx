import React from "react";
import { motion } from "framer-motion";
import styles from "./ChaosLetters.module.scss";
import { useTranslation } from "react-i18next";
import { letterAnimations } from "./ChaosLetters.animations";

const ChaosLetters = ({ transition }) => {
  const mainLetterTransition = {
    delay: transition.delay + 0.5,
    duration: 2,
    ease: "linear",
    type: "spring",
  };

  const minorLetterTransition = {
    delay: mainLetterTransition.delay,
    duration: 1,
    ease: "easeOut",
  };

  const { i18n } = useTranslation();
  const isEnglish = i18n.language.startsWith("en");
  const isItalian = i18n.language.startsWith("it");
  const isLatinLetters = isEnglish || isItalian;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${styles.letterGroup} ${
        isLatinLetters ? styles.letterGroupEnglish : ""
      } ${isItalian ? styles.letterGroupItalian : ""}`}
      transition={transition}
    >
      {isEnglish ? (
        <>
          {/* FROM CHAOS */}
          <motion.img
            className={styles.letterF}
            src="assets/svgs/letters/letter-f-eng.svg"
            animate={letterAnimations.f}
            transition={mainLetterTransition}
            alt="letter f"
          />
          <motion.img
            className={styles.letterR}
            src="assets/svgs/letters/letter-r-eng.svg"
            animate={letterAnimations.r}
            transition={mainLetterTransition}
            alt="letter r"
          />
          <motion.img
            className={styles.letterO1}
            src="assets/svgs/letters/letter-o-eng.svg"
            animate={letterAnimations.o1}
            transition={mainLetterTransition}
            alt="letter o"
          />
          <motion.img
            className={styles.letterM}
            src="assets/svgs/letters/letter-m-eng.svg"
            animate={letterAnimations.m}
            transition={mainLetterTransition}
            alt="letter m"
          />

          {/* CHAOS */}
          <motion.img
            className={styles.letterC}
            src="assets/svgs/letters/letter-c-eng.svg"
            animate={letterAnimations.c}
            transition={minorLetterTransition}
            alt="letter c"
          />
          <motion.img
            className={styles.letterH}
            src="assets/svgs/letters/letter-h-eng.svg"
            animate={letterAnimations.h}
            transition={minorLetterTransition}
            alt="letter h"
          />
          <motion.img
            className={`${styles.letterA} ${styles.letterAEng}`}
            src="assets/svgs/letters/letteer-a-eng.svg"
            animate={letterAnimations.a}
            transition={minorLetterTransition}
            alt="letter a"
          />
          <motion.img
            className={styles.letterO2}
            src="assets/svgs/letters/letter-0-eng.svg"
            animate={letterAnimations.o2}
            transition={minorLetterTransition}
            alt="letter o"
          />
          <motion.img
            className={`${styles.letterS} ${styles.letterSEng}`}
            src="assets/svgs/letters/letter-s-eng.svg"
            animate={letterAnimations.s}
            transition={minorLetterTransition}
            alt="letter s"
          />
        </>
      ) : isItalian ? (
        <>
          {/* Italian version */}
          <motion.img
            className={styles.letterItD}
            src="assets/svgs/letters/სათაური_WEB_IT_01_D.svg"
            animate={letterAnimations.d}
            transition={mainLetterTransition}
            alt="letter d"
          />
          <motion.img
            className={styles.letterItA1}
            src="assets/svgs/letters/სათაური_WEB_IT_02_A.svg"
            animate={letterAnimations.a}
            transition={mainLetterTransition}
            alt="letter a"
          />
          <motion.img
            className={styles.letterItL}
            src="assets/svgs/letters/სათაური_WEB_IT_03_L.svg"
            animate={letterAnimations.l}
            transition={mainLetterTransition}
            alt="letter l"
          />
          <motion.img
            className={styles.letterItC}
            src="assets/svgs/letters/სათაური_WEB_IT_04_C.svg"
            animate={letterAnimations.c}
            transition={minorLetterTransition}
            alt="letter c"
          />
          <motion.img
            className={styles.letterItA2}
            src="assets/svgs/letters/სათაური_WEB_IT_05_A.svg"
            animate={letterAnimations.a}
            transition={minorLetterTransition}
            alt="letter a"
          />
          <motion.img
            className={styles.letterItO}
            src="assets/svgs/letters/სათაური_WEB_IT_06_O.svg"
            animate={letterAnimations.o2}
            transition={minorLetterTransition}
            alt="letter o"
          />
          <motion.img
            className={styles.letterItS}
            src="assets/svgs/letters/სათაური_WEB_IT_07_S.svg"
            animate={letterAnimations.s}
            transition={minorLetterTransition}
            alt="letter s"
          />
        </>
      ) : (
        <>
          {/* Georgian version */}
          <motion.img
            className={styles.letterQ}
            src="assets/svgs/letters/letter-q.svg"
            animate={letterAnimations.q}
            transition={mainLetterTransition}
            alt="letter q"
          />
          <motion.img
            className={styles.letterBoldA}
            src="assets/svgs/letters/letter-a-bold.svg"
            animate={letterAnimations.boldA}
            transition={mainLetterTransition}
            alt="letter a"
          />
          <motion.img
            className={styles.letterBoldO}
            src="assets/svgs/letters/letter-o-bold.svg"
            animate={letterAnimations.boldO}
            transition={mainLetterTransition}
            alt="letter o"
          />
          <motion.img
            className={styles.letterS}
            src="assets/svgs/letters/letter-s.svg"
            animate={letterAnimations.s}
            transition={mainLetterTransition}
            alt="letter s"
          />
          <motion.img
            className={styles.letterI}
            src="assets/svgs/letters/letter-i.svg"
            animate={letterAnimations.i}
            transition={mainLetterTransition}
            alt="letter i"
          />
          <motion.img
            className={styles.letterD}
            src="assets/svgs/letters/letter-d.svg"
            animate={letterAnimations.d}
            transition={minorLetterTransition}
            alt="letter d"
          />
          <motion.img
            className={styles.letterA}
            src="assets/svgs/letters/letter-a.svg"
            animate={letterAnimations.a}
            transition={minorLetterTransition}
            alt="letter a"
          />
          <motion.img
            className={styles.letterN}
            src="assets/svgs/letters/letter-n.svg"
            animate={letterAnimations.n}
            transition={minorLetterTransition}
            alt="letter n"
          />
        </>
      )}
    </motion.div>
  );
};

export default ChaosLetters;
