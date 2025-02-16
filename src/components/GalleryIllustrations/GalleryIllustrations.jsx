import React, { useState } from "react";
import styles from "./GalleryIllustrations.module.scss";
import { galleryData } from "../../galleryData";
import { Pagination } from "../Pagination";
import { GalleryModal } from "../GalleryModal";

export const GalleryIllustrations = () => {
  const illustrationsPerPage = 8;
  const totalPages = Math.ceil(
    Object.keys(galleryData).length / illustrationsPerPage
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentIllustrations = Object.entries(galleryData).slice(
    (currentPage - 1) * illustrationsPerPage,
    currentPage * illustrationsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.galleryContainer}>
        {currentIllustrations.map(([key, { image }]) => (
          <div
            key={key}
            className={styles.galleryItem}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={key} className={styles.galleryImage} />
          </div>
        ))}
      </div>
      <div className={styles.placeholder}></div>
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />

      <GalleryModal
        isOpen={!!selectedImage}
        onClose={closeModal}
        src={selectedImage}
        alt="Selected Illustration"
      ></GalleryModal>
    </div>
  );
};
