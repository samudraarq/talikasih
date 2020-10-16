import React from "react";
import styles from "./DiscoverCategory.module.css";

import leftArrow from "../../../assets/discover/left-arrow.svg";

import medicalImg from "../../../assets/discover/medical-img.png";
import { Link } from "react-router-dom";

const DiscoverCategory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
          <span className={styles.categoryBadge}>Medical</span>
          <p className={styles.categoryText}>
            Help them to get speedy recovery
          </p>
          <Link to="/discover" className={styles.backlinkText}>
            <img src={leftArrow} alt="left arrow" />
            <p>See all categories</p>
          </Link>
        </div>
        <img src={medicalImg} alt="category" className={styles.categoryImg} />
      </div>
    </div>
  );
};

export default DiscoverCategory;
