import React, { useState } from "react";
import styles from "./GalleryIllustrations.module.scss";
import { galleryData } from "../../galleryData";
import { Pagination } from "../Pagination";
import { GalleryModal } from "../GalleryModal";
import { useTranslation } from "react-i18next";

export const GalleryIllustrations = () => {
    const illustrationsPerPage = 8;

    const { i18n } = useTranslation();

    const totalPages = Math.ceil(
        Object.keys(galleryData).length / illustrationsPerPage
    );

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);

    const currentIllustrations = Object.entries(galleryData).slice(
        (currentPage - 1) * illustrationsPerPage,
        currentPage * illustrationsPerPage
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

    return (
        <div className={styles.galleryWrapper}>
            <div className={styles.galleryContainer}>
                {currentIllustrations.map(([key, value]) => (
                    <div
                        key={key}
                        className={styles.galleryItem}
                        onClick={() =>
                            handleImageClick({
                                image: value.image,
                                title: value.title,
                                description: value.description,
                            })
                        }
                    >
                        <img
                            src={value.image}
                            alt={value.title[i18n.language] || value.title.en}
                            className={styles.galleryImage}
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