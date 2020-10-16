import React from "react";
import styles from "./SortButton.module.css";

import sort from "../../../../assets/discover/sort.svg";

const SortButton = () => {
  return (
    <div className={styles.sortContainer}>
      <p className={styles.sortText}>Sort</p>
      <img src={sort} alt="sort" className={styles.sortIcon} />
    </div>
  );
};

export default SortButton;
