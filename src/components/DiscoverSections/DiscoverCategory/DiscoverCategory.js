import React from "react";
import styles from "./DiscoverCategory.module.css";
import HeaderCategory from "./HeaderCategory/HeaderCategory";
import SortButton from "./SortButton/SortButton";

const DiscoverCategory = () => {
  return (
    <div className={styles.container}>
      <HeaderCategory />

      <div className={styles.campaignContainer}>
        <SortButton />
      </div>
    </div>
  );
};

export default DiscoverCategory;
