import React from "react";
import styles from "./Contents.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { bookData } from "../../bookData";
import { useTranslation } from "react-i18next";

export const Contents = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const languageKey = currentLanguage.split("-")[0];

  const filteredBooks = Object.entries(bookData).filter(([book, data]) => {
    if (book !== "preface") {
      const shouldRequireAudio =
        currentLanguage.startsWith("en") || currentLanguage.startsWith("it");

      if (shouldRequireAudio) {
        const hasAudioForLanguage = Boolean(data?.audio?.[languageKey]);
        if (!hasAudioForLanguage) {
          return false;
        }
      }
    }

    const prefix = `book.${book}.`;
    return t(prefix + "title") !== "";
  });

  return (
    <>
      <Loader width={["0%", "100%"]} />
      <h4 className={styles.title}>{t("ui.tableOfContents")}</h4>
      <div className={styles.contentsPage}>
        <div className={styles.contentsContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={styles.contentsChapter}
          >
            {filteredBooks.map(([book, { img, imgWidth, imgHeight }]) => {
              const prefix = `book.${book}.`;
              return (
                <div key={book} className={styles.Chapter}>
                  <Link
                    className={styles.chapterRoute}
                    to={book === "preface" ? `/${book}` : `/books/${book}`}
                  >
                    <img
                      src={img}
                      alt={t(prefix + "title")}
                      width={imgWidth}
                      height={imgHeight}
                    />
                    <span>{t(prefix + "title")}</span>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};
