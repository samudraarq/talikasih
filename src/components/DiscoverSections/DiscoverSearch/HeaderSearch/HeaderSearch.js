import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderSearch.module.css";

import leftArrow from "../../../../assets/discover/left-arrow.svg";

const HeaderSearch = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <p className={styles.categoryText}>
            Help them to get speedy recovery
          </p>
          <Link to="/discover" className={styles.backlinkText}>
            <img src={leftArrow} alt="left arrow" />
            <p>See all categories</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderSearch;
