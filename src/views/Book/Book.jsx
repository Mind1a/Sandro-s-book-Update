import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import styles from "./Book.module.scss";
import { bookData, books } from "../../bookData";
import { motion } from "framer-motion";
import { AudioBar } from "../../components/AudioBar";
import { useTranslation } from "react-i18next";

import { useBookPlayer } from "../../hooks/useBookPlayer";

export const Book = ({ isMenuOpen }) => {
  const { book } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Check if the current book is available in the selected language
  useEffect(() => {
    if (book) {
      const bookTitle = t(`book.${book}.title`);

      // If book title is empty (not translated), redirect to first available book
      if (bookTitle === "") {
        navigate(`/books/${books[0]}`);
        return;
      }
    }
  }, [book, t, navigate]);

  const { illustration } = bookData[book];
  const displayTitle = t(`book.${book}.title`) || bookData[book]?.title;

  const {
    width,
    initialWidth,
    duration,
    currentTime,
    seekTime,
    isSeeking,
    isPaused,
    handleDrag,
    handleDragStart,
    handleDragStop,
    handleNextClick,
    handlePrevClick,
    handleStart,
    handlePause,
  } = useBookPlayer(book, bookData, books, 233);

  useEffect(() => {
    isMenuOpen ? handlePause() : handleStart();
  }, [isMenuOpen]);

  return (
    <div className={styles.bookPage}>
      <h4 className={styles.title}>{displayTitle}</h4>
      <div className={styles.mainContent}>
        <img
          className={styles.illustration}
          src={illustration}
          alt="illustration"
        />
        <AudioBar
          isPaused={isPaused}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
          onPlayStart={handleStart}
          onPlayPause={handlePause}
        />
      </div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0 }}
        style={{ pointerEvents: "none" }}
      >
        <Loader width={["100%", `${initialWidth * 100}%`]} />
      </motion.div>
      <motion.div
        initial={{ display: 0 }}
        animate={{ display: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Loader
          trackProgress
          width={!isMenuOpen ? `${width * 100}%` : "0%"}
          initialWidth={initialWidth}
          isSeeking={isSeeking}
          transition={{ duration: 0 }}
          handleTransition={{ duration: 0.2, delay: 0.8 }}
          onDragStart={handleDragStart}
          onDragStop={handleDragStop}
          onDrag={handleDrag}
          isMenuOpen={isMenuOpen}
          duration={duration}
          seekTime={seekTime}
          currentTime={currentTime}
        />
      </motion.div>
    </div>
  );
};
