import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderCategory.module.css";

import leftArrow from "../../../../assets/discover/left-arrow.svg";

import medicalImg from "../../../../assets/discover/medical-img.png";

const HeaderCategory = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <span className={styles.categoryBadge}>Medical</span>
          <p className={styles.categoryText}>
            Help them to get speedy recovery
          </p>
          <div className={styles.backlinkContainer}>
            <Link to="/discover" className={styles.backlinkText}>
              <img src={leftArrow} alt="left arrow" />
              <p>See all categories</p>
            </Link>
          </div>
        </div>
        <img src={medicalImg} alt="category" className={styles.categoryImg} />
      </div>
    </>
  );
};

export default HeaderCategory;
