import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderSearch.module.css";

import leftArrow from "../../../../assets/discover/left-arrow.svg";

const HeaderSearch = ({ searchText }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.textContainer}>
        <p className={styles.categoryText}>Results for "{searchText}"</p>
        <div className={styles.backlinkContainer}>
          <Link to="/discover" className={styles.backlinkText}>
            <img src={leftArrow} alt="left arrow" />
            <p>See all categories</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
