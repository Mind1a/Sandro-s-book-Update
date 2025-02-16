import styles from "./About.module.scss";
import { motion } from "framer-motion";
import { Loader } from "../../components/Loader";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const aboutProjectText = t("about-project-translation.text").split("\n");

  return (
    <>
      <Loader width={["0%", "100%"]} />
      {/* <h4 className={styles.title}>პროექტის შესახებ</h4> */}
      <h4 className={styles.title}>{t("about-project-translation.title")}</h4>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.aboutProject}
      >
        <div className={styles.aboutTexts}>
          {aboutProjectText.map((paragraph, index) => (
            <p className={styles.aboutText} key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </>
  );
};
