import styles from "./Pdf.module.scss";
import { Loader } from "../../components/Loader";
import { motion } from "framer-motion";
import { FliperBook } from "../../components/FliperBook";
import { useTranslation } from "react-i18next";

export const Pdf = () => {
  const { t } = useTranslation();

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
      <h4 className={styles.title}>წიგნის PDF ვერსია</h4>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.contentPdfPage}
      >
        <FliperBook />
        <div className={styles.pdfContent}>
          <h3>
            გადმოიწერე წიგნის <span>PDF</span> ვერსია
          </h3>
          <div className={styles.downloadPDF}>
            <button
              onClick={handleDownload}
              style={{ border: "none", background: "none", cursor: "pointer" }}
            >
              <img
                src="assets/svgs/content-chapter-svg/PDFBookDownload.svg"
                alt="pdfBook"
              />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
