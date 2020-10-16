import React from "react";
import ChangePage from "./ChangePage/ChangePage";
import DiscoverCards from "./DiscoverCards/DiscoverCards";
import styles from "./DiscoverCategory.module.css";
import HeaderCategory from "./HeaderCategory/HeaderCategory";
import SortButton from "./SortButton/SortButton";

const DiscoverCategory = () => {
  return (
    <div className={styles.container}>
      <HeaderCategory />
      <SortButton />
      <DiscoverCards />
      <ChangePage />
    </div>
  );
};

export default DiscoverCategory;
