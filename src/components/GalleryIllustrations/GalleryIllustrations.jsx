import React, { useState } from "react";
import styles from "./GalleryIllustrations.module.scss";
import illustrationData from "../../views/Gallery/illustration_data.json";
import { Pagination } from "../Pagination";
import { GalleryModal } from "../GalleryModal";
import { useTranslation } from "react-i18next";

export const GalleryIllustrations = () => {
  const illustrationsPerPage = 8;

  const { i18n } = useTranslation();
  const lang = (i18n.language || "en").split("-")[0];
  const langKey = lang === "ge" ? "ka" : lang;

  const illustrationEntries = Object.entries(illustrationData).map(
    ([key, value]) => ({
      key,
      image: `/assets/png/gallery/${key}`,
      title: {
        en: value.title_en,
        it: value.title_it,
        ka: value.title_ka,
      },
      description: {
        en: value.text_en,
        it: value.text_it,
        ka: value.text_ka,
      },
    }),
  );

  const totalPages = Math.ceil(
    illustrationEntries.length / illustrationsPerPage,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const currentIllustrations = illustrationEntries.slice(
    (currentPage - 1) * illustrationsPerPage,
    currentPage * illustrationsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const markImageLoaded = (key) => {
    setLoadedImages((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.galleryContainer}>
        {currentIllustrations.map((item) => (
          <div
            key={item.key}
            className={`${styles.galleryItem} ${
              loadedImages[item.key] ? "" : styles.galleryItemLoading
            }`}
            onClick={() => handleImageClick(item)}
          >
            <img
              src={item.image}
              alt={item.title[langKey] || item.title.en}
              className={`${styles.galleryImage} ${
                loadedImages[item.key] ? styles.galleryImageLoaded : ""
              }`}
              onLoad={() => markImageLoaded(item.key)}
              onError={() => markImageLoaded(item.key)}
            />
          </div>
        ))}
      </div>

      <div className={styles.placeholder} />

      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />

      <GalleryModal
        isOpen={!!selectedItem}
        onClose={closeModal}
        src={selectedItem?.image}
        data={selectedItem}
      />
    </div>
  );
};
