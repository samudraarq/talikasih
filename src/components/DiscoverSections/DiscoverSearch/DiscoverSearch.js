import React from "react";
import ChangePage from "../DiscoverCategory/ChangePage/ChangePage";
import DiscoverCards from "../DiscoverCategory/DiscoverCards/DiscoverCards";
import SortButton from "../DiscoverCategory/SortButton/SortButton";
import styles from "./DiscoverSearch.module.css";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

const DiscoverSearch = () => {
  return (
    <div className={styles.container}>
      <HeaderSearch />
      <SortButton />
      <DiscoverCards />
      <ChangePage />
    </div>
  );
};

export default DiscoverSearch;
