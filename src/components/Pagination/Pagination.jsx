import { useState } from "react";
import styles from "./Pagination.module.scss";

export const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.pageButton} ${styles.arrow} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>

      <div className={styles.pageNumbers}></div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ),
      )}

      <button
        className={`${styles.pageButton} ${styles.arrow} ${
          currentPage === totalPages ? styles.disabled : ""
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {">"}
      </button>
    </div>
  );
};
