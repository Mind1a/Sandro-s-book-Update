import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useRelativeWidth } from "./useRelativeWidth";
import { clamp, getWidth } from "../utils/book";
import { useTranslation } from "react-i18next";

export const useBookPlayer = (book, bookData, books, minAbsWidth) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language || "ge";
  const audioSrc = useMemo(
    () => bookData[book]?.audio?.[currentLanguage],
    [book, currentLanguage]
  );

  const audio = useMemo(() => new Audio(audioSrc), [audioSrc]);

  useEffect(() => {
    const audioExists = bookData[book]?.audio?.[currentLanguage];

    if (!audioExists) {
      navigate("/");
    }
  }, [currentLanguage]);

  // const { audio: audioSrc } = useMemo(() => {
  //   return bookData[book];
  // }, [book]);

  // const audio = useMemo(() => new Audio(audioSrc), [book]);

  const [isSeeking, setIsSeeking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialWidth] = useRelativeWidth(minAbsWidth);
  const [width, setWidth] = useState(initialWidth);
  const [seekStartTime, setSeekStartTime] = useState(null);
  const [seekTime, setSeekTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audio.play().catch((err) => {
      console.log(err);
      setIsPaused(true);
    });

    const handleAudioUpdate = () => {
      setCurrentTime(audio.currentTime);

      if (isSeeking || duration === 0) return;

      setWidth(getWidth(initialWidth, duration, audio.currentTime));
    };

    const handleAudioLoad = () => {
      setDuration(audio.duration);
    };

    const handleAudioEnd = () => {
      setCurrentTime(audio.duration);
    };

    const handleToggle = () => {
      setIsPaused(audio.paused);
    };

    audio.addEventListener("timeupdate", handleAudioUpdate);
    audio.addEventListener("pause", handleToggle);
    audio.addEventListener("play", handleToggle);
    audio.addEventListener("canplaythrough", handleAudioLoad);
    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", handleAudioUpdate);
      audio.removeEventListener("pause", handleToggle);
      audio.removeEventListener("play", handleToggle);
      audio.removeEventListener("canplaythrough", handleAudioLoad);
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, [audio, book, initialWidth, isSeeking, duration]);

  useEffect(() => {
    if (audio.paused) {
      setWidth(getWidth(initialWidth, duration, currentTime));
    }
  }, [initialWidth]);

  const handleStart = () => {
    audio.play().catch((err) => {
      console.log(err);
      setIsPaused(true);
    });
  };

  const handlePause = () => {
    audio.pause();
  };

  const handlePlayToggle = () => {
    if (audio.paused) {
      handleStart();
    } else {
      handlePause();
    }
  };

  const handleDragStart = () => {
    setIsSeeking(true);
    setSeekStartTime(currentTime);
  };

  const handleDragStop = (percentage) => {
    const newTime = audio.duration * percentage;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
    setIsSeeking(false);
  };

  const handleDrag = (percentageChange) => {
    setWidth(
      getWidth(
        initialWidth,
        duration,
        seekStartTime + percentageChange * duration
      )
    );
    setSeekTime(
      clamp(0, seekStartTime + percentageChange * duration, duration)
    );
  };

  const handlePrevClick = () => {
    let index = books.findIndex((bookName) => bookName === book);

    while (index > 0) {
      index--;
      const prevBook = books[index];
      if (bookData[prevBook]?.audio?.[currentLanguage]) {
        navigate(`/books/${prevBook}`);
        return;
      }
    }

    if (book === "qaosidan-kosmosamde") {
      navigate("/preface");
    }
  };

  const handleNextClick = () => {
    let index = books.findIndex((bookName) => bookName === book);

    while (index < books.length - 1) {
      index++;
      const nextBook = books[index];
      if (bookData[nextBook]?.audio?.[currentLanguage]) {
        navigate(`/books/${nextBook}`);
        return;
      }
    }
  };

  return {
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
    handlePlayToggle,
    handleNextClick,
    handlePrevClick,
    handleStart,
    handlePause,
  };
};
