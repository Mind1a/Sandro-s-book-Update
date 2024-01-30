import React, { useState } from "react";
import styles from "./Contents.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { FliperBook } from "../../components/FliperBook";
import { bookData } from "../../bookData";
import { useNavigate } from "react-router-dom";


export const Contents = () => {

  return (
    <>
      <Loader width={["0%", "100%"]} />
      <h4 className={styles.title}>სარჩევი</h4>
      <div className={styles.contentsPage}>
        <div className={styles.contentsContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={styles.contentsChapter}
          >
            {Object.entries(bookData).map(
              ([book, { img, imgWidth, imgHeight, title }]) => (
                <div key={book} className={styles.Chapter}>
                  <Link
                    className={styles.chapterRoute}
                    to={book === "preface" ? `/${book}` : `/books/${book}`}
                  >
                    <img
                      src={img}
                      alt={title}
                      width={imgWidth}
                      height={imgHeight}
                    />
                    <span>{title}</span>
                  </Link>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};
