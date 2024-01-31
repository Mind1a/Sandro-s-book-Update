import styles from "./Pdf.module.scss";
import { Loader } from "../../components/Loader";
import { motion } from "framer-motion";
import { FliperBook } from "../../components/FliperBook";

export const Pdf = () => {
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
            <a
              // href="assets/pdf/SandroAsatiani_ChaosidanCosmosamde.pdf"
              // download="pdf"
              href="https://fromchaostocosmos.sandroasatiani.com/SandroAsatiani_ChaosidanCosmosamde.pdf"
              target="_blank"
            >
              <img
                src="assets/svgs/content-chapter-svg/PDFBookDownload.svg"
                alt="pdfBook"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}