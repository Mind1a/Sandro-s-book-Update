import React from "react";
import styles from "./Gallery.module.scss";
import { motion } from "framer-motion";
import { Loader } from "../../components/Loader/Loader";
import { GalleryIllustrations } from "../../components/GalleryIllustrations";

export const Gallery = () => {
  return (
    <>
      <Loader width={["0%", "100%"]} />
      <div className={styles.galleryPage}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={styles.galleryWrapper}
        >
          <GalleryIllustrations />
        </motion.div>
      </div>
    </>
  );
};
