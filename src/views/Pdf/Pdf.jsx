import styles from "./Pdf.module.scss";
import { Loader } from "../../components/Loader";
import { motion } from "framer-motion";
import { FliperBook } from "../../components/FliperBook";
import { useTranslation } from "react-i18next";

export const Pdf = () => {
  const { t, i18n } = useTranslation();

  const languageKey = (i18n.language || "ge").split("-")[0];

  const externalBooks = {
    ge: {
      image: "/assets/png/books_pdf/Book_KA.png",
      url: "https://www.lulu.com/account/projects/84rvvkn",
      alt: "Georgian book cover",
    },
    ka: {
      image: "/assets/png/books_pdf/Book_KA.png",
      url: "https://www.lulu.com/account/projects/84rvvkn",
      alt: "Georgian book cover",
    },
    it: {
      image: "/assets/png/books_pdf/Book_IT.png",
      url: "https://www.amazon.it/dp/B0G9PTZ4SY",
      alt: "Italian book cover",
    },
    en: {
      image: "/assets/png/books_pdf/Book_EN.png",
      url: "https://www.amazon.com/dp/B0G2SV1ZDG",
      alt: "English book cover",
    },
  };

  const currentExternalBook = externalBooks[languageKey] || externalBooks.ge;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "assets/pdf/SandroAsatiani_ChaosidanCosmosamde.pdf";
    link.download = "SandroAsatiani_ChaosidanCosmosamde.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Loader width={["0%", "100%"]} />
      <h4 className={styles.title}>{t("ui.menu.pdf")}</h4>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.contentPdfPage}
      >
        <FliperBook />
        <div className={styles.pdfContent}>
          <a
            href={currentExternalBook.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookExternalLink}
          >
            <img
              src={currentExternalBook.image}
              alt={currentExternalBook.alt}
              className={styles.bookExternalImage}
            />
          </a>
        </div>
      </motion.div>
    </>
  );
};
