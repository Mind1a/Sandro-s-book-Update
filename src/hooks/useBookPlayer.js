import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useRelativeWidth } from "./useRelativeWidth";
import { clamp, getWidth } from "../utils/book";
import i18n from "../utils/i18n";

export const useBookPlayer = (book, bookData, books, minAbsWidth) => {
  const navigate = useNavigate();

  const [lang, setLang] = useState(i18n.language || "ge");
  const languageKey = (lang || "ge").split("-")[0];

  useEffect(() => {
    const handleLangChange = (lang) => setLang(lang);
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

  const audioSrc = useMemo(() => {
    const audioEntry = bookData[book]?.audio;
    if (!audioEntry) return null;

    if (typeof audioEntry === "object") {
      if (languageKey === "en" || languageKey === "it") {
        return audioEntry[languageKey] || null;
      }

      return audioEntry[languageKey] || audioEntry.ge || null;
    }

    return audioEntry;
  }, [book, languageKey, bookData]);

  const playableBooks = useMemo(() => {
    const contentBooks = books.filter((bookName) => bookName !== "preface");

    if (languageKey !== "en" && languageKey !== "it") {
      return contentBooks;
    }

    return contentBooks.filter((bookName) => {
      const audioEntry = bookData[bookName]?.audio;
      return Boolean(
        audioEntry && typeof audioEntry === "object" && audioEntry[languageKey],
      );
    });
  }, [books, bookData, languageKey]);

  const audio = useMemo(
    () => (audioSrc ? new Audio(audioSrc) : null),
    [audioSrc],
  );

  const [isSeeking, setIsSeeking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialWidth] = useRelativeWidth(minAbsWidth);
  const [width, setWidth] = useState(initialWidth);
  const [seekStartTime, setSeekStartTime] = useState(null);
  const [seekTime, setSeekTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audio) {
      setIsPaused(true);
      setDuration(0);
      setCurrentTime(0);
      return;
    }

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
    if (!audio) return;

    if (audio.paused) {
      setWidth(getWidth(initialWidth, duration, currentTime));
    }
  }, [audio, initialWidth, duration, currentTime]);

  const handleStart = () => {
    if (!audio) return;

    audio.play().catch((err) => {
      console.log(err);
      setIsPaused(true);
    });
  };

  const handlePause = () => {
    if (!audio) return;

    audio.pause();
  };

  const handlePlayToggle = () => {
    if (!audio) return;

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
    if (!audio || !audio.duration) return;

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
        seekStartTime + percentageChange * duration,
      ),
    );
    setSeekTime(
      clamp(0, seekStartTime + percentageChange * duration, duration),
    );
  };

  const handlePrevClick = () => {
    const index = playableBooks.findIndex((bookName) => {
      return bookName === book;
    });

    if (!playableBooks.length) {
      navigate("/preface");
      return;
    }

    if (index <= 0) {
      navigate("/preface");
      return;
    }

    navigate(`/books/${playableBooks[index - 1]}`);
  };

  const handleNextClick = () => {
    if (!playableBooks.length) return;

    const index = playableBooks.findIndex((bookName) => {
      return bookName === book;
    });

    if (index === -1) {
      navigate(`/books/${playableBooks[0]}`);
      return;
    }

    const nextIndex = clamp(0, index + 1, playableBooks.length - 1);
    navigate(`/books/${playableBooks[nextIndex]}`);
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

// import { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { useRelativeWidth } from "./useRelativeWidth";
// import { clamp, getWidth } from "../utils/book";
// import i18n from "../utils/i18n";

// export const useBookPlayer = (book, bookData, books, minAbsWidth) => {
//   const navigate = useNavigate();

//   const [lang, setLang] = useState(i18n.language || "ge");

//   useEffect(() => {
//     const handleLangChange = (lng) => setLang(lng);
//     i18n.on("languageChanged", handleLangChange);

//     return () => i18n.off("languageChanged", handleLangChange);
//   }, []);

//   const audioSrc = useMemo(() => {
//     const audioEntry = bookData[book]?.audio;
//     if (!audioEntry) return null;

//     // Support language-based audio object: { ge, en, it }
//     if (typeof audioEntry === "object") {
//       return audioEntry[lang] || audioEntry.ge || null;
//     }

//     // Fallback for legacy string paths
//     return audioEntry;
//   }, [book, lang, bookData]);

//   const audio = useMemo(
//     () => (audioSrc ? new Audio(audioSrc) : null),
//     [audioSrc]
//   );

//   const [isSeeking, setIsSeeking] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [initialWidth] = useRelativeWidth(minAbsWidth);
//   const [width, setWidth] = useState(initialWidth);
//   const [seekStartTime, setSeekStartTime] = useState(null);
//   const [seekTime, setSeekTime] = useState(null);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() => {
//     if (!audio) return;

//     audio.play().catch((err) => {
//       console.log(err);
//       setIsPaused(true);
//     });

//     const handleAudioUpdate = () => {
//       setCurrentTime(audio.currentTime);

//       if (isSeeking || duration === 0) return;

//       setWidth(getWidth(initialWidth, duration, audio.currentTime));
//     };

//     const handleAudioLoad = () => {
//       setDuration(audio.duration);
//     };

//     const handleAudioEnd = () => {
//       setCurrentTime(audio.duration);
//     };

//     const handleToggle = () => {
//       setIsPaused(audio.paused);
//     };

//     audio.addEventListener("timeupdate", handleAudioUpdate);
//     audio.addEventListener("pause", handleToggle);
//     audio.addEventListener("play", handleToggle);
//     audio.addEventListener("canplaythrough", handleAudioLoad);
//     audio.addEventListener("ended", handleAudioEnd);

//     return () => {
//       if (audio) {
//         audio.pause();
//         audio.removeEventListener("timeupdate", handleAudioUpdate);
//         audio.removeEventListener("pause", handleToggle);
//         audio.removeEventListener("play", handleToggle);
//         audio.removeEventListener("canplaythrough", handleAudioLoad);
//         audio.removeEventListener("ended", handleAudioEnd);
//       }
//     };
//   }, [audio, book, initialWidth, isSeeking, duration]);

//   useEffect(() => {
//     if (audio && audio.paused) {
//       setWidth(getWidth(initialWidth, duration, currentTime));
//     }
//   }, [initialWidth, audio, duration, currentTime]);

//   const handleStart = () => {
//     if (!audio) return;

//     audio.currentTime = 0;
//     audio.play().catch((err) => {
//       console.log(err);
//       setIsPaused(true);
//     });
//   };

//   const handlePause = () => {
//     if (!audio) return;
//     audio.pause();
//   };

//   const handlePlayToggle = () => {
//     if (!audio) return;

//     if (audio.paused) {
//       handleStart();
//     } else {
//       handlePause();
//     }
//   };

//   const handleDragStart = () => {
//     setIsSeeking(true);
//     setSeekStartTime(currentTime);
//   };

//   const handleDragStop = (percentage) => {
//     if (!audio) return;

//     const newTime = audio.duration * percentage;
//     audio.currentTime = newTime;
//     setCurrentTime(newTime);
//     setIsSeeking(false);
//   };

//   const handleDrag = (percentageChange) => {
//     setWidth(
//       getWidth(
//         initialWidth,
//         duration,
//         seekStartTime + percentageChange * duration
//       )
//     );

//     setSeekTime(
//       clamp(0, seekStartTime + percentageChange * duration, duration)
//     );
//   };

//   const handlePrevClick = () => {
//     const index = books.findIndex((bookName) => bookName === book);

//     book === "qaosidan-kosmosamde"
//       ? navigate("/preface")
//       : navigate(`/books/${books[clamp(1, index - 1, books.length - 1)]}`);
//   };

//   const handleNextClick = () => {
//     const index = books.findIndex((bookName) => bookName === book);

//     navigate(`/books/${books[clamp(1, index + 1, books.length - 1)]}`);
//   };

//   return {
//     width,
//     initialWidth,
//     duration,
//     currentTime,
//     seekTime,
//     isSeeking,
//     isPaused,
//     handleDrag,
//     handleDragStart,
//     handleDragStop,
//     handlePlayToggle,
//     handleNextClick,
//     handlePrevClick,
//     handleStart,
//     handlePause,
//   };
// };
