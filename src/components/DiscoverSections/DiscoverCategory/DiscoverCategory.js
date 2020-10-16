import React from "react";
import DiscoverCards from "./DiscoverCards/DiscoverCards";
import styles from "./DiscoverCategory.module.css";
import HeaderCategory from "./HeaderCategory/HeaderCategory";
import SortButton from "./SortButton/SortButton";

const DiscoverCategory = () => {
  return (
    <div className={styles.container}>
      <HeaderCategory />

      <div className={styles.campaignContainer}>
        <SortButton />
        <DiscoverCards />
      </div>
    </div>
  );
};

export default DiscoverCategory;
