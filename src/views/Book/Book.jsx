import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { getTimeLeft } from "../../utils/book";
import styles from "./Book.module.scss";
import { bookData, books } from "../../bookData";
import { motion } from "framer-motion";
import { AudioBar } from "../../components/AudioBar";

import { useBookPlayer } from "../../hooks/useBookPlayer";

export const Book = ({ isMenuOpen }) => {
  const { book } = useParams();
  const { title, illustration } = bookData[book];

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
    handlePause
  } = useBookPlayer(book, bookData, books, 233);

  useEffect(() => {
    isMenuOpen ? handlePause() : handleStart();
  }, [isMenuOpen])

  return (
    <div className={styles.bookPage}>
      <h4 className={styles.title}>{title}</h4>
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
          width={!isMenuOpen ? `${width * 100}%` : '0%'}
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
